// export class RevisedEstimates {
//   objecthead: string | "";
//   Budgetestimates: number | "";
//   SupplyDemand: number | "";
//   Contingency: number | "";
//   AdditionalAdvances: number | "";
//   Totalc2c3: number | "";
//   ExpenditureLastyear: number | "";
//   first8month: number | "";
//   ProbableExpenditure: number | "";
//   Totalof8n4month: number | "";
//   Provisionmextyr: number | "";
//   AmountHoDcyr: number | "";
//   RevisedEstimates: number | "";
//   remarks: string | "";
//   expendCharges: boolean;
//   action?: string | "";
// }
export class RevisedEstimates {
  objecthead: string | "";
  Budgetestimates: number | string;
  SupplyDemand: number | string;
  Contingency: number | string;
  AdditionalAdvances: number | string;
  Totalc2c3: number | string;
  ExpenditureLastyear: number | string;
  first8month: number | string;
  ProbableExpenditure: number | string;
  Totalof8n4month: number | string;
  Provisionmextyr: number | string;
  AmountHoDcyr: number | string;
  RevisedEstimates: number | string;
  proByDdo: number | string;
  proByHod: number | string;
  proByAdminDept: number | string;
  appByFdGrp: number | string;
  remarks: string | "";
  expendCharges: boolean;
  tooltip: string;
  action?: string | "";
}

export class ExpandObjectHead {
  thirdlastyear: number | "";
  objecthead: string | "";
  secondlastyear: number | "";
  lastyear: number | "";
  currentyear: number | "";
  last8month: number | "";
  first4month: number | "";
  totalof8and4month: number | "";
  col6: number | "";
  col7: number | "";
  // amountproposedbyHOD: number | '';
  remarks: string | "";
  status?: boolean;
  classStatus?: boolean;
  action?: string | "";
}

export class ExpandRevisedEstimates {
  objecthead: string | "";
  Budgetestimates: number | "";
  SupplyDemand: number | "";
  Contingency: number | "";
  AdditionalAdvances: number | "";
  Totalc2c3: number | "";
  ExpenditureLastyear: number | "";
  first8month: number | "";
  ProbableExpenditure: number | "";
  Totalof8n4month: number | "";
  Provisionmextyr: number | "";
  AmountHoDcyr: number | "";
  RevisedEstimates: number | "";
  remarks: string | "";
  action?: string | "";
}

export class DistrictElement {
  id: number;
  districtName: string;
  expendature: number;
  talukaexpendature: number;
  gramexpendature: number;
}

export class SubObjectHead {
  id: string;
  name: string;
}
