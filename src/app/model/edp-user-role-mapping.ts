export class UserRoleMapping {
    office_level: string| '';
    requestNo: string|'';
    district: string| '' ;
    ddoNo: number | '' ;
    cardexNo:  number | '';
    ddoOffice: string| '' ;
    employeeNo: number | '' ;
    userName: string| '' ;
    postName: string| '' ;
    moduleName: string| ''  ;
    allUsersForAct: string| '';
    role: string|'';
    allSubAct: string| '';
    allSubActToBeMapped: string|'';
}

export class UserRoleMappingList {
  selected?: Boolean|'';
  requestNo: string| '';
    requestDate: string| '';
    district: string| '';
    ddoNo: number| '';
    cardexNo: number|'' ;
    ddoOfficeName: string| '';
    employeeNo: string| '';
    userName: string| '';
    lyingWith: string| '';
    requestStatus: string| '';
    remarks: string| '';
}

export class AttachmentModel {
    actionId?: number;
    activeStatus?: number;
    attachmentId?: number | '';
    createdBy?: number;
    createdByPost?: number;
    createdDate?: string;
    attachmenttType: string |'';
    file?: string | '';
    fileName: string | '';
    uploadedBy: string|'';
    headerId: number | '';
    pathUploadedFile: string | '';
    updatedBy?: number;
    updatedByPost?: number;
    updatedDate?: string;
    uploadedFileName: string;
    versionId?: number;
  }



// Table on clcik serch button
export interface Userole {
  empNo: string;
  position: number;
  empName: string;
  postName: string;
  postType: string;
}

 // Rights to be Given table
export interface UseroleMap {
  empNo: string;
  position: number;
  empName: string;
  postName: string;
  postType: string;
  moduleList: string;
  subModule: string;
  manuCounter: string;
  permission: string;
  branch: string;
  workFLow: string;
}

