interface TypeCount {
  code: string;
  name: string;
  count: number;
}

export interface ShippingTypes {
  vesselType: TypeCount[];
  shippingLine: TypeCount[];
}
