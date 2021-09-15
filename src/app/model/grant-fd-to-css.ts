
export class GrantdataSourcedata {
  divisionName: string;
  fdaddAuthorizeState: number;
  fdaddAuthorizeCss: number;
  revisedStateScheme: number;
  revisedCssScheme: number;
  grUpToState: number;
  grUpToCss: number;
  remark: number | string;
  grantAvailableState: number;
  grantAvailableCss: number;
}

export class SubDetailHeadSource {
  position: number;
  budgetHead: string;
  bEState: number;
  bECss: number;
  rBEState: number;
  rBECss: number;
  grantReceivedFromGoi: string;
  grantApproState: number;
  grantApproCss: number;
  departmentName: string;
  grantReleaseState: number;
  grantReleaseCss: number;
  grantReleseType: string;
  grantToBeReleaseState: number | string;
  grantToBeReleaseCss: number | string;
  toolTipData: string;
  remark: string | number;
}

export class DETAILHEAD {
  subHead: string;
  budgetState2: string;
  budgetCss2: string;
  department: string;
  detailHeadDiscription: string;
  detailHeadDiscription2: string;
  detailHeadDiscription3: string;
  budgetState: string;
  budgetState1: string;
  budgetCss: string;
  releseTillDateState: string;
  releseTillDateCss: string;
  currentState: string | number;
  currentCss: string | number;
  detailHeadDiscriptionAtoolTip: string;
  detailHeadDiscriptionBtoolTip: string;
  detailHeadDiscriptionCtoolTip: string;
}

export class GrantOrderList {
  grantOrderId: string;
  grantOrderNo: string;
  grantReleaseFor: string;
  orderIssueDate: string;
  status: string;
  lyingWith: string;
}

export class ELEMENT_DATA_css {
  srNo: number;
  grantOrderNo: string;
  budgetHead: string;
  cssGrantReceved: number;
  dateOfGrantReceved: string;
}

export class ELEMENT_DATA_PREVIOUS_YEAR {

}