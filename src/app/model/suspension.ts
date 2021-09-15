export class SuspensionModel {
      transactionNo: string ;
      initiationDate: string;
      orderNo: number;
      orderDate: string;
      officeName: string;
      payCommission: string;
      empNo: number;
      empName: string;
      class: string;
      designation: string;
      empOfficeName: string;
      payBand: string;
      payBandValue: string;
      gradePay: string;
      payLevel: string;
      cellId: string;
      basicPay: string;
      reasonForSuspension: string;
      description: string;
      suspensionStartDate: string;
      suspensionEndDate: string;
      suspensionClosureDate: string;
      closure: string;
      typeOfPunishment: string;
      remarks: string |'';
      GuiltyDetailsRemarks:string;
      dateRetirement:string;
      doj:string;
      reinstistYesNo:boolean;
      noOfDaysSuspension:string;
}


export class Data6thModel {
    fromDate: string;
    currentPayBand:  string;
    currentPayBandValue:  number;
    currentGradePay: number;
    payablePercentOfGradePay: number;
    payableAmountOfGradePay: number;
    payablePercentOfPayBandValue: number;
    payableAmountOfPayBandValue: number;
}

export class Data7thModel {
    fromDate: string;
    currentPayLevel: string;
    currentCellId: number;
    currentBasicPay: number;
    payablePercentOfBasicPay: number;
    payableAmountOfBasicPay: number;
}

export class AttachmentModel {
    actionId?: number;
    activeStatus?: number;
    attachmentId?: number | '';
    createdBy?: number;
    createdByPost?: number;
    createdDate?: string;
    file?: string | '';
    fileName: string | '';
    headerId: number | '';
    pathUploadedFile: string | '';
    updatedBy?: number;
    updatedByPost?: number;
    updatedDate?: string;
    uploadedFileName: string;
    versionId?: number;
  }

export class SuspensionListModel {
    empNo: number | '';
    empName: string | '';
    payCom: string | '';
    designation: string | '';
    transactionNo: string | '';
    class: string | '';
    suspensionStartDate: string | '';
    suspensionReason: string | '';
    officeName: string | '';
    status: string | '';
}


export class SuspensionSearchFormModel {
      transactionNumber:string;
      employeeNumber: number;
      empName: string;
      suspensionCreatedFromDate:string;
      suspensioncreatedToDate:string;
      paycommision:string;
      status:string;
      reason:string;
}




export class SuspensionCreate {
      transactionNo:string;
      initiationDate:string;
      officeName:string; 
      payCommission:string; 
      suspensionOrderNo:string; 
      suspensionOrderDate:string; 
      suspensionEventDate:string;
      employeeNumber: number; 
      employeeName:string;
      class:string;
      designation:string;
      employeeOfficeName:string; 
      payBand:string;
      payBandValue:string;
      gradePay:number;
      payLevel:string;
      cellId:string;
      gradePayfith:string;
      basicPay:number;
      dateOfJoining:string;
      donExtIncrement:string;
      dateOfRetirement: string;
      reasonForSuspension:string;
      suspensionStartDate:string; 
      description:string;
      scale:string;
      remarks: string;
      payablePercentOfGradePay:string; 
      fromDate:string;
      payablePercentOfPayBandValue:string;
      payablePercentOfBasicPay:string;
}

export class Data5thModel{
    fromDate:string;
    currentGrade: number;
    currentScale: string;
    currentBasicPay:number
    payablePercentOfBasicPay:number;
    payableAmountOfBasicPay:number;
 }
