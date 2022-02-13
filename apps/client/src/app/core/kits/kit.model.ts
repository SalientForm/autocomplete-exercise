export interface Sample {
  collected: number; // timestamp
  requested: number; // timestamp
  type: string;
  weight: string;
}

export interface Kit {
  id: number;
  guid: string;
  samples: Sample[];
}

export interface KitTrackingRecord {
 id: number;
 label?: any;
 kitGuid?: string;
 labelId: string;
 shippingTrackingCode: number;
};

/**
 * tracking record
 */
export interface KitTrackingDataItem {
  id: number;
  label_id: string;
  shipping_tracking_code: string;
};

/**
 * Since data is often manged internally by an application, the internal structure has a different shape from externally sourced records, it is typical to
 * define an interface for the shape of data as it arrives when it is returned from an api, even if this responsibility is largely pushed to the back-end.
 *
 * This may or may not be the case for BioBot's process.
 *
 * @param data
 */
export const convertKitTrackingDataItem = (item: KitTrackingDataItem):KitTrackingRecord => ({
  id: +item.id,
  label: 'asdf',
  labelId: item.label_id,
  shippingTrackingCode: +item.shipping_tracking_code
})

export const getOptionsFromRecords = (records: KitTrackingRecord[]) => {
  return records.map((record)=> ({...record, label: record.labelId }))
}
