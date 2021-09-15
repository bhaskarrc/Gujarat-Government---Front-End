export interface userPostMappingDetailsPosts {
    position: number;
    name: string;
    pname: string;

}

export interface userPostMappingToPosts {
    position: number;
    name: string;
    pname: string;

}

export interface userPostMappingfromPosts {
    sr_no: number;
    post_name: string;
    post_type: string;
    office_type?: string;
}

export class DialogData {
}

export class PeriodicElement {
    position: number;
    finYear: string;
    estimateFrom: string;
    demand: string;
    majorHead: string;
    subMajorHead: string;
    minorHead: string;
    subHead: string;
    detailHead: string;
    refNo: string;
}
