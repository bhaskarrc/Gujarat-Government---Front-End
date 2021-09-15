export class DdoOfficesCreate {
    grNo: string;
    uniqueId: number;
    district: string;
    officeLevel: string;
    level: string;
    ddoOfficeName: string;
    cardexNo: number;
    ddoNo: number;
    ddoType: string;
    nonDdoType:  string;
    pvu: string;
    designationName: string;
    requestTo: string;
    treasuryType:string;
    isCoOffice:string;
    employeeNo:number;
    employeeName:string;
    address1: string;
    address2: string;
    officeDistrict: string;
    taluka: string;
    station: string;
    pinCode: number;
    stdCode:number;
    phoneNo: number;
    mobileNo: number;
    faxNo: number;
    emailId: string;
    officeNameForDisplay: string;
    department: string;
    hod: string;
    coName: string;
    coOfficeName: string;
    treasuryOffice: string;
    billType: string;
    selectedBill: string;
    moduleType : string;
    status: string;
    fromDate: Date;
    inactiveEndDate: Date;
    cancelEndDate: Date;
    comments: string;
    approvalComment:string;
    checked:boolean;
    objectionRemarks: string;
    pendingWith : string;
}

export class HODOffice {
    value: string;
    viewValue: string;
}
export interface TabelElement {
    attachment: string;
    name: undefined;
    file: undefined;
}
export class DdoSubOfficesCreate {
    subOfficeCode?:number;
    ddoOfficeName?: string;
    district: string;
    uniqueId:number;
    address: string;
    taluka: string;
    station: string;
    pinCode: number;
    phoneNo: number;
    faxNo: number;
    emailId: string;
    department: string;
    hod: string;
}
export interface DataElement {

    attechment: string;
    filename: string;
    uploadedBy: string;
}
export interface DDORequestList{
    requestNo: number;
    district: string;
    designation:string;
    ddoOfficeName: string;
    ddoNo: number;
    cardexNo: number;
    pendingWith: string;
    status: string;
    remarks: string;
}
export interface OfficeRequestList {
    districtCode: string;
    district: string;
    ddoType:string;
    nonDDO: string;
    panchayat:string;
    Total:string;
}
export interface OfficeRequestDDOList {
    districtCode: number;
    district: string;
     ddoNo: number;
    cardexNo: number;
    designation: string;
    officeName: string;
    ddoType: string;
    startDate: string;
    endDate: string;
    status: string;

}