interface Seller {
  superPhotoRight: boolean;
  superMember: boolean;
  expertMember: boolean;
  powerMember: boolean;
  primeMember: boolean;
}

interface Hotmark {
  code: string;
  name: string;
}

interface Vehicle {
  code: string;
  listingId: string;
  detailUrl: string;
  itemName: string;
  seller: Seller;
  hotmarks: Hotmark[];
  condition: string;
  makeName: string;
  subModelName: string;
  modelName: string;
  modelYear: number;
  modelClass: string;
  vin: string;
  locationCode: string;
  locationName: string;
  vehicleType: string;
  steeringType: string;
  transmissionType: string;
  drivetrainType: string;
  fuelType: string;
  engineVolume: number;
  passengerCapacity: number;
  price: number;
  discountPrice: number | null;
  thumbnails: string[];
  mainThumbnailPath: string;
  subThumbnail1Path: string;
  subThumbnail2Path: string;
  photoCount: number;
  wishByUser: boolean;
  wishCount: number;
  mileage: number | null;
  odometerCheck: boolean;
  newItem: boolean;
  photographedByWini: boolean;
  hasInsuranceHistory: boolean;
  hasGuarantee: boolean;
  hasVideo: boolean;
  freshStock: boolean;
  almostSoldOut: boolean;
  fastShipping: boolean;
  inspectionReportUploaded: boolean;
}
