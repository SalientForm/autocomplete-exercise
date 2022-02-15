import { KitTrackingRecordSearch } from './KitTrackingRecordSearch';
import { Route, Routes } from 'react-router-dom';
import { Button } from '@mui/material';
import { HomeView } from '../home/HomeView';
import { KitTrackingRecordDetail } from './KitTrackingRecordDetail';
import { mockKitTrackingData } from '../../core/kits/kit.mock';
import {
  convertKitTrackingDataItem,
  KitTrackingRecord,
} from '../../core/kits/kit.model';
import { useNavigate } from "react-router-dom";

export type TrackingRecordService = {
  fetchRecords: (filter?: string) => KitTrackingRecord[];
};

/**
 * lame mock of a fetching service
 */
const trackingRecordService: TrackingRecordService = {
  fetchRecords: (filter = '') => {
    return mockKitTrackingData
      .map((dataItem) => convertKitTrackingDataItem(dataItem))
      .filter(
        (record) =>
          !filter ||
          record.id.toString().includes(filter) ||
          record.labelId.toString().includes(filter) ||
          record.shippingTrackingCode.toString().includes(filter)
      );
  },
};

/**
 * Feature KitManagement
 *
 */
export function KitManagement() {
  const navigate = useNavigate();
  return (
    <>
      <h2>Kit Management</h2>

      <div className="main-nav">
      <Button variant="contained" onClick={()=>navigate('/')}>Home</Button>
      <Button variant="contained" onClick={()=>navigate('/search')}>Search</Button>
      <Button variant="contained" onClick={()=>navigate('/detail')}>Detail</Button>
      </div>

      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route
          path="/search"
          element={<KitTrackingRecordSearch trackingRecordService={trackingRecordService} />}
        />
        <Route
          path="/detail"
          element={<KitTrackingRecordDetail trackingRecordService={trackingRecordService} />}
        />
      </Routes>
    </>
  );
}
