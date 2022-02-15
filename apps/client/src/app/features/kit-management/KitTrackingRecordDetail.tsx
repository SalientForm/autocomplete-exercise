import { Autocomplete, TextField } from '@mui/material';
import {
  getOptionsFromRecords,
  KitTrackingRecord,
} from '../../core/kits/kit.model';
import { TrackingRecordService } from './KitManagement';

type Props = { trackingRecordService: TrackingRecordService };

const defaultOptionCount = 15;

export function KitTrackingRecordDetail({ trackingRecordService }: Props) {
  const trackingRecordsSelection = trackingRecordService
    .fetchRecords()
    .slice(0, defaultOptionCount);
  const options = getOptionsFromRecords(trackingRecordsSelection);

  return (
    <>
      <h3>Detail</h3>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={options}
        sx={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="Select a tracking record" />
        )}
      />
      <p>Detail page is not fully implemented.</p>
    </>
  );
}
