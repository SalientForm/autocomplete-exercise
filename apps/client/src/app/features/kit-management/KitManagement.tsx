import { KitTrackingCard } from './KitTrackingCard';
import {
  convertKitTrackingDataItem,
  KitTrackingRecord,
} from '../../core/kits/kit.model';
import { mockKitTrackingData } from '../../core/kits/kit.mock';
import { useEffect, useState } from 'react';
import { Button, ButtonGroup, TextField } from '@mui/material';
import { KitAutocompleteSelect } from './KitAutocompleteSelect';

const getFetchedRecords = (filter: string) =>
  mockKitTrackingData
    .map((dataItem) => convertKitTrackingDataItem(dataItem))
    .filter(
      (record) =>
        !filter ||
        record.id.toString().includes(filter) ||
        record.labelId.toString().includes(filter) ||
        record.shippingTrackingCode.toString().includes(filter)
    );

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

const renderCardView = (records: KitTrackingRecord[]) => (
  <div className="card-container">
    {records.map((record) => (
      <KitTrackingCard record={record}></KitTrackingCard>
    ))}
  </div>
);

export function KitManagement() {
  const [fetchedRecords, setFetchedRecords] = useState<KitTrackingRecord[]>([]);
  const [viewType, setViewType] = useState<string>(
    kitTrackingRecordViewTypes.card
  );
  const [filter, setFilter] = useState<string>('');

  useEffect(() => {
    setFetchedRecords(getFetchedRecords(filter));
  }, [filter]);

  // TODO: move outside function
  const trackingRecordView = () => {
    if (fetchedRecords?.length === 0) return <div>No records loaded.</div>;
    return viewType === kitTrackingRecordViewTypes.card
      ? renderCardView(fetchedRecords)
      : renderTableView(fetchedRecords);
  };

  /**
   * calling this function mocks a fetch call that results in setting the data
   */
  function fetchRecords() {
    setFetchedRecords(getFetchedRecords(filter));
  }

  // TODO: move outside function
  function getViewButton() {
    if (viewType === kitTrackingRecordViewTypes.card) {
      return (
        <Button
          variant="contained"
          onClick={() => setViewType(kitTrackingRecordViewTypes.table)}
        >
          Table view
        </Button>
      );
    }

    return (
      <Button
        variant="contained"
        onClick={() => setViewType(kitTrackingRecordViewTypes.card)}
      >
        Card view
      </Button>
    );
  }

  return (
    <>
      <h2>Kit Management</h2>

      <p>
        <ButtonGroup>
          <Button variant="contained" onClick={fetchRecords}>
            Load Records
          </Button>
          {getViewButton()}
        </ButtonGroup>
      </p>

      <p>
        <KitAutocompleteSelect trackingRecords={fetchedRecords} />
      </p>

      <p>
        <TextField
          onChange={(e) => {
            setFilter(e.target.value);
            console.log('filter', filter, e.target.value);
            fetchRecords();
          }}
        />
      </p>

      <div>
        <h3>Tracking records ({viewType} view)</h3>
        {trackingRecordView()}
      </div>
    </>
  );
}
