

export class SUBDETAILHEAD {
  budgetHead: string;
  bEState: number;
  bECss: number;
  rBEState: number;
  rBECss: number;
  grantApproState: number;
  grantApproCss: number;
  controllingOfficer: string;
  grantReleaseState: number;
  grantReleaseCss: number;
  grantToBeReleaseState: number | string;
  grantToBeReleaseCss: number | string;
  toolTipData: string;
  itemName: string
}

export class DETAILHEAD {
  budgetCss3: string;
  budgetCss2: string;
  releseTillDateState2: String;
  releseTillDateCss2: string;
  releseTillDateState3: string;
  releseTillDateCss3: string;
  currentState3: string;
  currentCss3: string;
  subHead: string;
  department: string;
  detailHeadDiscription: string;
  detailHeadDiscription2: string;
  detailHeadDiscription3: string;
  budgetState: string;
  budgetState1: string;
  budgetState2: string;
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
  GrantOrderId: string;
  GrantOrderNo: string;
  grantRelease: string;
  orderCreateDate: string;
  status: string;
  lyingWith: string;
  revenueCapital: string;
  fundType: string;
}