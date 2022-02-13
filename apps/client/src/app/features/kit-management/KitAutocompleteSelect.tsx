import { Autocomplete, TextField } from '@mui/material';
import { getOptionsFromRecords, KitTrackingRecord } from '../../core/kits/kit.model';

type Props = { trackingRecords: KitTrackingRecord[] };

const defaultOptionCount = 15;

export function KitAutocompleteSelect({ trackingRecords }: Props = { trackingRecords: [] }) {
  const trackingRecordsSelection = trackingRecords.slice(0, defaultOptionCount);
  const options = getOptionsFromRecords(trackingRecordsSelection);

  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={options}
      sx={{ width: 300 }}
      renderInput={(params) => (
        <TextField {...params} label="Select a tracking record" />
      )}
    />
  );
}
