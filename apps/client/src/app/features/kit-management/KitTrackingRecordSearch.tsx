import { KitTrackingCard } from './KitTrackingCard';
import { KitTrackingRecord } from '../../core/kits/kit.model';
import { useEffect, useState } from 'react';
import { Button, ButtonGroup, TextField } from '@mui/material';
import { TrackingRecordService } from './KitManagement';

type KitTrackingRecordViewType = 'card' | 'table' | string;

const kitTrackingRecordViewTypes = {
  card: 'card',
  table: 'table',
};

function renderTableView(records: KitTrackingRecord[]) {
  return (
    <div>Table view not implemented yet.</div>
    // <div className="table-container">
    //   {records.map((record) => (
    //     <KitTrackingCard record={record}></KitTrackingCard>
    //   ))}
    // </div>
  );
}

function renderCardView(records: KitTrackingRecord[]) {
  return (
    <div className="cards-container">
      {records.map((record) => (
        <KitTrackingCard record={record}></KitTrackingCard>
      ))}
    </div>
  );
}

function getViewButtonText(viewType: KitTrackingRecordViewType) {
  if (viewType === kitTrackingRecordViewTypes.card) {
    return 'Switch to Table View';
  }
  return 'Switch to Card View';
}

function trackingRecordView(
  fetchedRecords: KitTrackingRecord[],
  viewType: string
) {
  // no records displayed
  if (fetchedRecords?.length === 0)
    return <div>No records loaded.</div>;
  return viewType === kitTrackingRecordViewTypes.card
    ? renderCardView(fetchedRecords)
    : renderTableView(fetchedRecords);
}



type Props = { trackingRecordService: TrackingRecordService };

/**
 * Search tracking records for all kits
 *
 */
export function KitTrackingRecordSearch({ trackingRecordService }: Props) {
  // records to be displayed
  const [fetchedRecords, setFetchedRecords] = useState<KitTrackingRecord[]>([]);

  // current view, either table or card
  const [viewType, setViewType] = useState<string>(
    kitTrackingRecordViewTypes.card
  );

  // string used to perform simple exact string search
  const [filter, setFilter] = useState<string>('');

  // when filter changes update records
  useEffect(() => {
    setFetchedRecords(trackingRecordService.fetchRecords(filter));
  }, [filter]);

  function toggleViewType(viewType: string) {
    if(viewType===kitTrackingRecordViewTypes.table) {
      setViewType(kitTrackingRecordViewTypes.card);
    } else {
      setViewType(kitTrackingRecordViewTypes.table);
    }
  }

  return (
    <>
      <h3>Filtered Search ({viewType} view)</h3>
      <p>
        <ButtonGroup>
          <Button
            variant="outlined"
            onClick={() => toggleViewType(viewType)}
          >
            {getViewButtonText(viewType)}
          </Button>
        </ButtonGroup>
      </p>

      <p>
        <TextField
          label="Search Filter"
          onChange={(e) => {
            setFilter(e.target.value);
          }}
        />
      </p>

      <div>
        <h4>Results ({fetchedRecords.length} records)</h4>
        <div className="scrolling">{trackingRecordView(fetchedRecords, viewType)}</div>
      </div>
    </>
  );
}
