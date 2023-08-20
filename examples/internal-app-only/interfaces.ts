export enum typeEnum {
  ALL = "all",
  MENTIONS = "mentions",
  NONE = "none",
}

export type MultiProps = {
  value: string | number;
  label: string;
};

export interface Chips {
  username: string;
  interests: MultiProps[];
  email: string;
  dateRange: any;
  createdDate: any;
  dateSingle: string;
  type: typeEnum;
  paymentAmount: {
    single: string;
    min: string;
    max: string;
  };
  airplaneMode: boolean;
  phoneNumber: string;
  paymentType: MultiProps[];
  pendingBalance: {
    single: string;
    min: string;
    max: string;
  };
}
