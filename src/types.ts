export interface IUser {
    id: number;
    name: string;
    email: string;
    role: string;
  }
  
  export interface IUsers extends Array<IUser> {
  }
  
  export interface ICenter extends ICoordinates {
    id: string;
    centerName: string;
    active: boolean;
    detailJSON: string;
    assignedStakes?: string[];
  }

  export interface ICenters extends Array<ICenter> {
  }

  export interface ICoordinates {
    latitude: number;
    longitude: number;
  }

  export interface IStake extends ICoordinates {
    unitNumber: string;
    stakeName: string;
    address: string;
    latitude: number;
    longitude: number;
    distance?: number;
    centerStaffTrained?: boolean;
    centerStaffProficient?: boolean;
    teamsTrained?: boolean;
    teamsProficient?: boolean;
    assignedCenterID?: string;
  }

  export interface IStakes extends Array<IStake> {
  }

export interface IMarker {
  key: string; 
  lat: number;
    lng: number;
    text: string;
  }
  
  export interface IMarkers extends Array<IMarker> {
  }


export interface IEvent {
  id: string;
  eventName: string;
  year: number;  
}

export interface IEvents extends Array<IEvent> {  
}

// export interface ISelectedCenterID {
  //   selectedCenterId: string;
  // }