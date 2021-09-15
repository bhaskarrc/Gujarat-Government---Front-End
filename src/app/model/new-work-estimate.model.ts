export class NewWorkEstimateList {
    workNo: number | '';
    locality: string | '';
    exeDivision: string | '';
    workNameEng: string | '';
    workNameGuj: string | '';
    secSubSector: any | '';
    sacEstimatedCost: number;
    actualEstablishment : number;
    actualMachinery : number;
    workDescEng: string;
    workDescGuj: string;
    remarksEng : string;
    remarksGuj : string;
    proposeAmount: number;
    css?: string;
}

export class NewWorkEstimate {
    workNo: number;
    district: string;
    locality : string;
    executiveDivision : string;
    workNameEng : string;
    workNameGuj : string;
    workDescEng : string;
    workDescGuj : string;
    remarksEng : string;
    remarksGuj : string;
    actualEstablishment : number;
    actualMachinery : number;
    sanctionedCost: number;
    provisionPropose : number;
    explanationOfWork: string;
}
export class NewWorkEstimateForm {
      workNo: number;
      district: string;
      locality :string;
      executiveDivision :string;
      workNameEng :string;
      workNameGuj : string;
      workDescEng : string;
      workDescGuj :string;
      remarksEng : string;
      remarksGuj : string;
      actualEstablishment :string; 
      actualMachinery : string;
      sanctionedCost: string;
      provisionPropose : string;
      explanationOfWork: string;
      expenditureType: string;
}
export class Attachment {
    attachmentType : string;
    name: string;
    file:string;
}