  export interface ICenter {
    id: string;
    centerName: string;
    active: boolean;
    detailJSON: string;
  } 

  export interface ICenters extends Array<ICenter> {
  }

  // export interface ISelectedCenterID {
  //   selectedCenterId: string;
  // }