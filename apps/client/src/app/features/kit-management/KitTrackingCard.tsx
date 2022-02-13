import { KitTrackingRecord } from '../../core/kits/kit.model';
import { Card, CardContent } from '@mui/material';

type Props = { record: KitTrackingRecord };

export function KitTrackingCard({ record }: Props) {
  return (
    <Card className="kit-tracking-card">
      <CardContent>
        <div className="heading">Tracking information</div>
        <div>
          <span className="id">Id: {record.id}</span>
          <span className="label-id">Label: {record.labelId}</span>
        </div>
        <div className="tracking-code">
          Record: {record.shippingTrackingCode}
        </div>
      </CardContent>
    </Card>
  );
}
