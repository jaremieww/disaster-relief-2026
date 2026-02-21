export interface IUser {
  userId: string;
  username: string;
  passwordHash: string;
  email: string;
  role: 'admin' | 'editor' | 'viewer' ;
  createdAt: string;
  updatedAt: string;
}

export interface IFacility {
  facilityId: string;
  facilityName: string;
  facilityAddress: string;
  facilityCity: string | null;
  facilityState: string | null;
  facilityZipcode: string | null;
  facilityLatitude: number | null;
  facilityLongitude: number | null;
  capacity: number | 0;
  currentOccupancy: number | 0;
  status: 'active' | 'inactive' | 'full' ;
  description: string | null;
  contactName: string | null;
  contactPhone: string | null;
  contactEmail: string | null;
  amenities: string[];
  damageLevel: 'low' | 'medium' | 'high' | 'critical' | 'unknown' ;
  createdAt: string | null;
  updatedAt: string | null;
}

export interface IFacilityList extends Array<IFacility> {}

// export interface TrainingDocument {
//   documentId: string;
//   fileName: string;
//   fileType: string;
//   s3Key: string;
//   category: string;
//   description: string;
//   uploadedAt: string;
//   uploadedBy: string;
//   fileSize: number;
//   downloadCount: number;
// }

// export interface ILeader {
//   leaderTitle: string;
//   leaderName: string; 
//   leaderEmail: string;
//   leaderPhone: string;
// }

// export interface ILeaderList extends Array<ILeader> {}

// export interface ISkill {
//   skillName: string;
//   skillRating: number | null;
//   lastTrained: string | null;
//   lastUsed: string | null;
// }

// export interface ISkillList extends Array<ISkill> {}

// export interface IAssignment {
//   year: number;
//   storm: string;
//   week: string;
//   roles: string[];
// }

// export interface IAssignmentList extends Array<IAssignment> {}

// export interface IStakeAssignments {
//   stake : IStake;
//   roles: string[];
// }


export interface IStake {
  stakeId: string;
  stakeName: string;
  stakeUnitNumber: number;
  stakeAddress: string;
  stakeCity: string | null;
  stakeState: string | null;
  stakeZipcode: string | null;
  stakeLatitude: number | null;
  stakeLongitude: number | null;
  status: 'active' | 'inactive';
  notes: string | null;
  // leaders: ILeaderList;
  // skills: ISkillList;S
  // assignments: IAssignmentList;S
  createdAt: string | null;
  updatedAt: string | null;
}

export interface IStakeList extends Array<IStake> {}

export interface ICampingInfo {

  availableCampingSites: number | null;
  hasRVHookups: boolean;
  hasTentArea: boolean;
  parkingCapacity: number | null;
  showerFacilities: boolean;
  kitchenAccess: boolean;
  campingNotes: string | null;
}

export interface IScheduleInformation {
  startDate: string;
  endDate: string;
  checkInTime: string;
  checkOutTime: string;
  dailyBriefingTime: string | null;
  mealtimes: {
    breakfast: string | null;
    lunch: string | null;
    dinner: string | null;
  }
  scheduleNotes: string | null;
 }

export interface IContact {
  contactName: string;
  contactPhone: string;
  contactEmail: string;
  contactRole: string | null;
}

export interface IContactList extends Array<IContact> {}

export interface IReport {
  reportId: string;
  isLatest: boolean;
  centerId: string;
  reportDateTime: string;
  reportType: string;
  content: string;
  createdAt: string;
  submittedAt: string;
}

export interface IReportList extends Array<IReport> {}

export interface IItem {
  itemId: string;
  itemName: string;
  itemQuantity: number;
  itemUnit: string;
}

export interface IInventory {
  startingInventory: IItem[];
  endingInventory: IItem[];
  inventoryNotes: string | null;
}


export interface ICenter {
  centerId: string;
  year: number;
  stormName: string;
  week: number;
  eventKey: string;
  //centerName: string;
  facility: IFacility;
  stakes: IStakeList | [];
  camping: ICampingInfo | null;
  schedule: IScheduleInformation | null;
  contacts: IContactList | [];
  informationPage: string | null;
  reports: IReportList | [];
  inventory: IInventory | null;
  status: 'planning' | 'active' | 'completed' | 'archived';
  totalExpectedVolunteers: number | null;
  actualVolunteers: number | null;
  //centerNote: string | null;
  createdAt: string | null;
  updatedAt: string | null;
  createdBy: string | null;
}

export interface ICenterList extends Array<ICenter> {}