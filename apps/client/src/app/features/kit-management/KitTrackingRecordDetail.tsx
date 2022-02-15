import { Autocomplete, TextField } from '@mui/material';
import {
  getOptionsFromRecords,
  KitTrackingRecord,
} from '../../core/kits/kit.model';
import { TrackingRecordService } from './KitManagement';
import { KitTrackingCard } from './KitTrackingCard';
import { SetStateAction, useState } from 'react';

type Props = { trackingRecordService: TrackingRecordService };

const defaultOptionCount = 15;

export function KitTrackingRecordDetail({trackingRecordService}: Props) {
  const trackingRecordsSubset = trackingRecordService
    .fetchRecords()
    .slice(0, defaultOptionCount);
  const options = getOptionsFromRecords(trackingRecordsSubset);

  // records to be displayed
  const [selectedRecord, setSelectedRecord] = useState<KitTrackingRecord>();


  function onChangeSelection(e: any, v: any) {
    setSelectedRecord(v);
  }

  return (
    <>
      <h3>Selected Record Detail</h3>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={options}
        sx={{ width: 300 }}
        onChange={onChangeSelection}
        renderInput={(params) => (
          <TextField {...params} label="Select a tracking record" />
        )}
      />
      <p>
        { selectedRecord ? <KitTrackingCard record={selectedRecord} /> : <div>No Record selected.</div> }
      </p>
    </>
  );
}
