export class CreateSubHead {
    finYear: string;
    department: string;
    division: string;
    demandCode: string;
    bpnCode: string;
    majorHeadCode: string;
    subMajorHeadCode: string;
    minorHeadCode: string;
    subHead: string;
    subHeadCodeEng: string;
    subHeadCodeGuj: string;
    subHeadName: string;
    accountingProcedure: string;
    budgetHeadType: string;
}
export class DetailHead {
    detailHeadCode: string;
    detailHeadDesEng: string;
    detailHeadDesGuj: string;
    greenPublication: string;
}
export class Attachment {
    attachmentType: string;
    name: string;
    file: string;
}
export class subHead {
    demand: string;
    majorHead: string;
    subMajorHead: string;
    minorHead: string;
}
export class subHeadList {
    budHead: string | number;
    subHead: string | number;
    detHead: string | number;
    subDate: string | number;
    sentToOn: string | number;
    wStatus: string | number;
    lyWith: string | number;
    status: string | number;
    action: boolean;
}