export interface ShippingSchedule {
  shippingScheduleCode: string;
  vesselName: string;
  vesselTypeName: string;
  transitVessel: string | null;
  voyNo: string;
  line: string;
  shipperName: string;
  fromCountryCode: string;
  fromCountryName: string;
  fromPortName: string;
  toCountryCode: string;
  toCountryName: string;
  toPortName: string;
  departureDateTime: string;
  arrivalDateTime: string | null;
}
