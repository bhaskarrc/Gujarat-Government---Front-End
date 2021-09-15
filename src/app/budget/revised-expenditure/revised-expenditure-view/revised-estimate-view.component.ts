import { Component, OnInit, ElementRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RevisedEstimates, ExpandRevisedEstimates } from 'src/app/model/revised-estimates';
import { DistrictTableRevExp2, StateTableRevExp } from 'src/app/model/budget';


export interface HeaderElement {
  label: string | '';
  value: string | '';
}


const ELEMENT_DATA: any[] = [];

// Object Class Wise Data
const ELEMENT_DATA_CL1: RevisedEstimates[] = [
  {
    objecthead: '0101', Budgetestimates: '200.00', SupplyDemand: '', Contingency: '0.00', AdditionalAdvances: '100.00',
    Totalc2c3: 2.00, ExpenditureLastyear: '100.00', first8month: '100.00', ProbableExpenditure: '100.00', Totalof8n4month: '100.00',
    Provisionmextyr: '100.00', RevisedEstimates: '100.00', proByDdo: '100.00', proByHod: '100.00',
     proByAdminDept: '100.00', appByFdGrp: '100.00',
     AmountHoDcyr: '100.00', remarks: '', tooltip: '0101 : Pay of Officers Including Grade Pay', expendCharges: true
  },
  {
    objecthead: '0102', Budgetestimates: '200.00', SupplyDemand: '', Contingency: '0.00', AdditionalAdvances: '100.00',
    Totalc2c3: 2.00, ExpenditureLastyear: '100.00', first8month: '100.00', ProbableExpenditure: '100.00', Totalof8n4month: '100.00',
    Provisionmextyr: '100.00', RevisedEstimates: '100.00', proByDdo: '100.00', proByHod: '100.00',
     proByAdminDept: '100.00', appByFdGrp: '100.00',
     AmountHoDcyr: '100.00', remarks: '', tooltip: '0102 : Pay of Establishment Including Grade Pay', expendCharges: true
  },
  {
    objecthead: '0103', Budgetestimates: '200.00', SupplyDemand: '', Contingency: '0.00', AdditionalAdvances: '100.00',
    Totalc2c3: 2.00, ExpenditureLastyear: '100.00', first8month: '100.00', ProbableExpenditure: '100.00', Totalof8n4month: '100.00',
    Provisionmextyr: '100.00', RevisedEstimates: '100.00', proByDdo: '100.00', proByHod: '100.00',
     proByAdminDept: '100.00', appByFdGrp: '100.00',
     AmountHoDcyr: '100.00', remarks: '', tooltip: '0103 : Dearness Allowance', expendCharges: true
  },
];
const ELEMENT_DATA_CL2: RevisedEstimates[] = [
  {
    objecthead: '2100', Budgetestimates: '200.00', SupplyDemand: '', Contingency: '0.00', AdditionalAdvances: '100.00',
    Totalc2c3: 2.00, ExpenditureLastyear: '100.00', first8month: '100.00', ProbableExpenditure: '100.00', Totalof8n4month: '100.00',
    Provisionmextyr: '100.00', RevisedEstimates: '100.00', proByDdo: '100.00', proByHod: '100.00',
     proByAdminDept: '100.00', appByFdGrp: '100.00',
     AmountHoDcyr: '100.00', remarks: '', tooltip: '2100', expendCharges: true
  },
  {
    objecthead: '2101', Budgetestimates: '200.00', SupplyDemand: '', Contingency: '0.00', AdditionalAdvances: '100.00',
    Totalc2c3: 2.00, ExpenditureLastyear: '100.00', first8month: '100.00', ProbableExpenditure: '100.00', Totalof8n4month: '100.00',
    Provisionmextyr: '100.00', RevisedEstimates: '100.00', proByDdo: '100.00', proByHod: '100.00',
     proByAdminDept: '100.00', appByFdGrp: '100.00',
     AmountHoDcyr: '100.00', remarks: '', tooltip: '2101', expendCharges: true
  },
];

const ELEMENT_DATA_CL3: RevisedEstimates[] = [
  {
    objecthead: '3131', Budgetestimates: '200.00', SupplyDemand: '', Contingency: '0.00', AdditionalAdvances: '100.00',
    Totalc2c3: 2.00, ExpenditureLastyear: '100.00', first8month: '100.00', ProbableExpenditure: '100.00', Totalof8n4month: '100.00',
    Provisionmextyr: '100.00', RevisedEstimates: '100.00', proByDdo: '100.00', proByHod: '100.00',
     proByAdminDept: '100.00', appByFdGrp: '100.00',
     AmountHoDcyr: '100.00', remarks: '', tooltip: '3131', expendCharges: true
  },
  {
    objecthead: '3135', Budgetestimates: '200.00', SupplyDemand: '', Contingency: '0.00', AdditionalAdvances: '100.00',
    Totalc2c3: 2.00, ExpenditureLastyear: '100.00', first8month: '100.00', ProbableExpenditure: '100.00', Totalof8n4month: '100.00',
    Provisionmextyr: '100.00', RevisedEstimates: '100.00', proByDdo: '100.00', proByHod: '100.00',
     proByAdminDept: '100.00', appByFdGrp: '100.00',
     AmountHoDcyr: '100.00', remarks: '', tooltip: '3135', expendCharges: true
  },
  {
    objecthead: '3243', Budgetestimates: '200.00', SupplyDemand: '', Contingency: '0.00', AdditionalAdvances: '100.00',
    Totalc2c3: 2.00, ExpenditureLastyear: '100.00', first8month: '100.00', ProbableExpenditure: '100.00', Totalof8n4month: '100.00',
    Provisionmextyr: '100.00', RevisedEstimates: '100.00', proByDdo: '100.00', proByHod: '100.00',
     proByAdminDept: '100.00', appByFdGrp: '100.00',
     AmountHoDcyr: '100.00', remarks: '', tooltip: '3243', expendCharges: true
  },
];

const ELEMENT_DATA_CL4: RevisedEstimates[] = [
  {
    objecthead: '4100', Budgetestimates: '200.00', SupplyDemand: '', Contingency: '0.00', AdditionalAdvances: '100.00',
    Totalc2c3: 2.00, ExpenditureLastyear: '100.00', first8month: '100.00', ProbableExpenditure: '100.00', Totalof8n4month: '100.00',
    Provisionmextyr: '100.00', RevisedEstimates: '100.00', proByDdo: '100.00', proByHod: '100.00',
     proByAdminDept: '100.00', appByFdGrp: '100.00',
     AmountHoDcyr: '100.00', remarks: '', tooltip: '4100', expendCharges: true
  },
  {
    objecthead: '4101', Budgetestimates: '200.00', SupplyDemand: '', Contingency: '0.00', AdditionalAdvances: '100.00',
    Totalc2c3: 2.00, ExpenditureLastyear: '100.00', first8month: '100.00', ProbableExpenditure: '100.00', Totalof8n4month: '100.00',
    Provisionmextyr: '100.00', RevisedEstimates: '100.00', proByDdo: '100.00', proByHod: '100.00',
     proByAdminDept: '100.00', appByFdGrp: '100.00',
     AmountHoDcyr: '100.00', remarks: '', tooltip: '4101', expendCharges: true
  },
];

const ELEMENT_DATA_CL5: RevisedEstimates[] = [
  {
    objecthead: '5100', Budgetestimates: '200.00', SupplyDemand: '', Contingency: '0.00', AdditionalAdvances: '100.00',
    Totalc2c3: 2.00, ExpenditureLastyear: '100.00', first8month: '100.00', ProbableExpenditure: '100.00', Totalof8n4month: '100.00',
    Provisionmextyr: '100.00', RevisedEstimates: '100.00', proByDdo: '100.00', proByHod: '100.00',
     proByAdminDept: '100.00', appByFdGrp: '100.00',
     AmountHoDcyr: '100.00', remarks: '', tooltip: '5100', expendCharges: true
  },
  {
    objecthead: '5101', Budgetestimates: '200.00', SupplyDemand: '', Contingency: '0.00', AdditionalAdvances: '100.00',
    Totalc2c3: 2.00, ExpenditureLastyear: '100.00', first8month: '100.00', ProbableExpenditure: '100.00', Totalof8n4month: '100.00',
    Provisionmextyr: '100.00', RevisedEstimates: '100.00', proByDdo: '100.00', proByHod: '100.00',
     proByAdminDept: '100.00', appByFdGrp: '100.00',
     AmountHoDcyr: '100.00', remarks: '', tooltip: '5101', expendCharges: true
  },
];

const ELEMENT_DATA_CL6: RevisedEstimates[] = [
  {
    objecthead: '6100', Budgetestimates: '200.00', SupplyDemand: '', Contingency: '0.00', AdditionalAdvances: '100.00',
    Totalc2c3: 2.00, ExpenditureLastyear: '100.00', first8month: '100.00', ProbableExpenditure: '100.00', Totalof8n4month: '100.00',
    Provisionmextyr: '100.00', RevisedEstimates: '100.00', proByDdo: '100.00', proByHod: '100.00',
     proByAdminDept: '100.00', appByFdGrp: '100.00',
     AmountHoDcyr: '100.00', remarks: '', tooltip: '6100', expendCharges: true
  },
  {
    objecthead: '6101', Budgetestimates: '200.00', SupplyDemand: '', Contingency: '0.00', AdditionalAdvances: '100.00',
    Totalc2c3: 2.00, ExpenditureLastyear: '100.00', first8month: '100.00', ProbableExpenditure: '100.00', Totalof8n4month: '100.00',
    Provisionmextyr: '100.00', RevisedEstimates: '100.00', proByDdo: '100.00', proByHod: '100.00',
     proByAdminDept: '100.00', appByFdGrp: '100.00',
     AmountHoDcyr: '100.00', remarks: '', tooltip: '6101', expendCharges: true
  },
];

const ELEMENT_DATA_CL7: RevisedEstimates[] = [
  {
    objecthead: '7057', Budgetestimates: '200.00', SupplyDemand: '', Contingency: '0.00', AdditionalAdvances: '100.00',
    Totalc2c3: 2.00, ExpenditureLastyear: '100.00', first8month: '100.00', ProbableExpenditure: '100.00', Totalof8n4month: '100.00',
    Provisionmextyr: '100.00', RevisedEstimates: '100.00', proByDdo: '100.00', proByHod: '100.00',
     proByAdminDept: '100.00', appByFdGrp: '100.00',
     AmountHoDcyr: '100.00', remarks: '', tooltip: '7057', expendCharges: true
  },
  {
    objecthead: '7058', Budgetestimates: '200.00', SupplyDemand: '', Contingency: '0.00', AdditionalAdvances: '100.00',
    Totalc2c3: 2.00, ExpenditureLastyear: '100.00', first8month: '100.00', ProbableExpenditure: '100.00', Totalof8n4month: '100.00',
    Provisionmextyr: '100.00', RevisedEstimates: '100.00', proByDdo: '100.00', proByHod: '100.00',
     proByAdminDept: '100.00', appByFdGrp: '100.00',
     AmountHoDcyr: '100.00', remarks: '', tooltip: '7058', expendCharges: true
  },
];

const DISTRICT_ELEMENT_DATA: any[] = [
  { id: 1, expendature: '2.00', districtName: 'Ahmedabad', talukaexpendature: '5.00', gramexpendature: '12.00' },
  { id: 2, expendature: '2.00', districtName: 'Vadodara', talukaexpendature: '5.00', gramexpendature: '12.00' },
  { id: 3, expendature: '2.00', districtName: 'Anand', talukaexpendature: '5.00', gramexpendature: '12.00' },
  { id: 4, expendature: '2.00', districtName: 'Chhota Udaipur', talukaexpendature: '5.00', gramexpendature: '12.00' },
  { id: 5, expendature: '2.00', districtName: 'Dahod', talukaexpendature: '5.00', gramexpendature: '12.00' },
  { id: 6, expendature: '2.00', districtName: 'Kheda', talukaexpendature: '5.00', gramexpendature: '12.00' },
  { id: 7, expendature: '2.00', districtName: 'Mahisagar', talukaexpendature: '5.00', gramexpendature: '12.00' },
  { id: 8, expendature: '2.00', districtName: 'Panchmahal', talukaexpendature: '5.00', gramexpendature: '12.00' },
  { id: 9, expendature: '2.00', districtName: 'Gandhinagar', talukaexpendature: '5.00', gramexpendature: '12.00' },
  { id: 10, expendature: '2.00', districtName: 'Aravalli', talukaexpendature: '5.00', gramexpendature: '12.00' },
  { id: 11, expendature: '2.00', districtName: 'Banaskantha', talukaexpendature: '5.00', gramexpendature: '12.00' },
  { id: 12, expendature: '2.00', districtName: 'Mehsana', talukaexpendature: '5.00', gramexpendature: '12.00' },
  { id: 13, expendature: '2.00', districtName: 'Patan', talukaexpendature: '5.00', gramexpendature: '12.00' },
  { id: 14, expendature: '2.00', districtName: 'Sabarkantha', talukaexpendature: '5.00', gramexpendature: '12.00' },
  { id: 15, expendature: '2.00', districtName: 'Rajkot', talukaexpendature: '5.00', gramexpendature: '12.00' },
  { id: 16, expendature: '2.00', districtName: 'Amreli', talukaexpendature: '5.00', gramexpendature: '12.00' },
  { id: 17, expendature: '2.00', districtName: 'Bhavnagar', talukaexpendature: '5.00', gramexpendature: '12.00' },
  { id: 18, expendature: '2.00', districtName: 'Botad', talukaexpendature: '5.00', gramexpendature: '12.00' },
  { id: 19, expendature: '2.00', districtName: 'Devbhoomi Dwarka', talukaexpendature: '5.00', gramexpendature: '12.00' },
  { id: 20, expendature: '2.00', districtName: 'Gir Somnath', talukaexpendature: '5.00', gramexpendature: '12.00' },
  { id: 21, expendature: '2.00', districtName: 'Jamnagar', talukaexpendature: '5.00', gramexpendature: '12.00' },
  { id: 22, expendature: '2.00', districtName: 'Junagadh', talukaexpendature: '5.00', gramexpendature: '12.00' },
  { id: 23, expendature: '2.00', districtName: 'Morbi', talukaexpendature: '5.00', gramexpendature: '12.00' },
  { id: 24, expendature: '2.00', districtName: 'Porbandar', talukaexpendature: '5.00', gramexpendature: '12.00' },
  { id: 25, expendature: '2.00', districtName: 'Surendranagar', talukaexpendature: '5.00', gramexpendature: '12.00' },
  { id: 26, expendature: '2.00', districtName: 'Kachchh', talukaexpendature: '5.00', gramexpendature: '12.00' },
  { id: 27, expendature: '2.00', districtName: 'Surat', talukaexpendature: '5.00', gramexpendature: '12.00' },
  { id: 28, expendature: '2.00', districtName: 'Bharuch', talukaexpendature: '5.00', gramexpendature: '12.00' },
  { id: 29, expendature: '2.00', districtName: 'Dang', talukaexpendature: '5.00', gramexpendature: '12.00' },
  { id: 30, expendature: '2.00', districtName: 'Narmada', talukaexpendature: '5.00', gramexpendature: '12.00' },
  { id: 31, expendature: '2.00', districtName: 'Navsari', talukaexpendature: '5.00', gramexpendature: '12.00' },
  { id: 32, expendature: '2.00', districtName: 'Tapi', talukaexpendature: '5.00', gramexpendature: '12.00' },
  { id: 33, expendature: '2.00', districtName: 'Valsad', talukaexpendature: '5.00', gramexpendature: '12.00' },
  // { id: 34,  expendature: '2.00', districtName: 'State Level Only (if any)', talukaexpendature: '5.00', gramexpendature: '12.00'},
];

const DISTRICT_ELEMENT_DATA2: DistrictTableRevExp2[] = [
  {
    id: 1,
    expendature: '12.00',
    districtName: 'Ahmedabad',
    talukaexpendature: '25.00',
    gramexpendature: '2.00'
  },
  {
    id: 2,
    expendature: '12.00',
    districtName: 'Vadodara',
    talukaexpendature: '25.00',
    gramexpendature: '2.00'
  },
  {
    id: 3,
    expendature: '12.00',
    districtName: 'Anand',
    talukaexpendature: '25.00',
    gramexpendature: '2.00'
  },
  {
    id: 4,
    expendature: '12.00',
    districtName: 'Chhota Udaipur',
    talukaexpendature: '25.00',
    gramexpendature: '2.00'
  },
  {
    id: 5,
    expendature: '12.00',
    districtName: 'Dahod',
    talukaexpendature: '25.00',
    gramexpendature: '2.00'
  },
  {
    id: 6,
    expendature: '12.00',
    districtName: 'Kheda',
    talukaexpendature: '25.00',
    gramexpendature: '2.00'
  },
  {
    id: 7,
    expendature: '12.00',
    districtName: 'Mahisagar',
    talukaexpendature: '25.00',
    gramexpendature: '2.00'
  },
  {
    id: 8,
    expendature: '12.00',
    districtName: 'Panchmahal',
    talukaexpendature: '25.00',
    gramexpendature: '2.00'
  },
  {
    id: 9,
    expendature: '12.00',
    districtName: 'Gandhinagar',
    talukaexpendature: '25.00',
    gramexpendature: '2.00'
  },
  {
    id: 10,
    expendature: '12.00',
    districtName: 'Aravalli',
    talukaexpendature: '25.00',
    gramexpendature: '2.00'
  },
  {
    id: 11,
    expendature: '12.00',
    districtName: 'Banaskantha',
    talukaexpendature: '25.00',
    gramexpendature: '2.00'
  },
  {
    id: 12,
    expendature: '12.00',
    districtName: 'Mehsana',
    talukaexpendature: '25.00',
    gramexpendature: '2.00'
  },
  {
    id: 13,
    expendature: '12.00',
    districtName: 'Patan',
    talukaexpendature: '25.00',
    gramexpendature: '2.00'
  },
  {
    id: 14,
    expendature: '12.00',
    districtName: 'Sabarkantha',
    talukaexpendature: '25.00',
    gramexpendature: '2.00'
  },
  {
    id: 15,
    expendature: '12.00',
    districtName: 'Rajkot',
    talukaexpendature: '25.00',
    gramexpendature: '2.00'
  },
  {
    id: 16,
    expendature: '12.00',
    districtName: 'Amreli',
    talukaexpendature: '25.00',
    gramexpendature: '2.00'
  },
  {
    id: 17,
    expendature: '12.00',
    districtName: 'Bhavnagar',
    talukaexpendature: '25.00',
    gramexpendature: '2.00'
  },
  {
    id: 18,
    expendature: '12.00',
    districtName: 'Botad',
    talukaexpendature: '25.00',
    gramexpendature: '2.00'
  },
  {
    id: 19,
    expendature: '12.00',
    districtName: 'Devbhoomi Dwarka',
    talukaexpendature: '25.00',
    gramexpendature: '2.00'
  },
  {
    id: 20,
    expendature: '12.00',
    districtName: 'Gir Somnath',
    talukaexpendature: '25.00',
    gramexpendature: '2.00'
  },
  {
    id: 21,
    expendature: '12.00',
    districtName: 'Jamnagar',
    talukaexpendature: '25.00',
    gramexpendature: '2.00'
  },
  {
    id: 22,
    expendature: '12.00',
    districtName: 'Junagadh',
    talukaexpendature: '25.00',
    gramexpendature: '2.00'
  },
  {
    id: 23,
    expendature: '12.00',
    districtName: 'Morbi',
    talukaexpendature: '25.00',
    gramexpendature: '2.00'
  },
  {
    id: 24,
    expendature: '12.00',
    districtName: 'Porbandar',
    talukaexpendature: '25.00',
    gramexpendature: '2.00'
  },
  {
    id: 25,
    expendature: '12.00',
    districtName: 'Surendranagar',
    talukaexpendature: '25.00',
    gramexpendature: '2.00'
  },
  {
    id: 26,
    expendature: '12.00',
    districtName: 'Kachchh',
    talukaexpendature: '25.00',
    gramexpendature: '2.00'
  },
  {
    id: 27,
    expendature: '12.00',
    districtName: 'Surat',
    talukaexpendature: '25.00',
    gramexpendature: '2.00'
  },
  {
    id: 28,
    expendature: '12.00',
    districtName: 'Bharuch',
    talukaexpendature: '25.00',
    gramexpendature: '2.00'
  },
  {
    id: 29,
    expendature: '12.00',
    districtName: 'Dang',
    talukaexpendature: '25.00',
    gramexpendature: '2.00'
  },
  {
    id: 30,
    expendature: '12.00',
    districtName: 'Narmada',
    talukaexpendature: '25.00',
    gramexpendature: '2.00'
  },
  {
    id: 31,
    expendature: '12.00',
    districtName: 'Navsari',
    talukaexpendature: '25.00',
    gramexpendature: '2.00'
  },
  {
    id: 32,
    expendature: '12.00',
    districtName: 'Tapi',
    talukaexpendature: '25.00',
    gramexpendature: '2.00'
  },
  {
    id: 33,
    expendature: '12.00',
    districtName: 'Valsad',
    talukaexpendature: '25.00',
    gramexpendature: '2.00'
  },
];

const DISTRICT_ELEMENT_DATA1: StateTableRevExp[] = [

  {

    id: 34,
    expendature: '',
    districtName: 'State Level Only (if any)',
    propsedAmount: '',

  }
];


const ELEMENT_TAB1_DATA: ExpandRevisedEstimates[] = [];

@Component({
  selector: 'app-revised-estimate-view',
  templateUrl: './revised-estimate-view.component.html',
  styleUrls: ['./revised-estimate-view.component.css']
})
export class RevisedEstimateViewComponent  implements OnInit {

  table1 = true;
  table2 = false;
  grantInAid: Boolean;
  isBreakupVisible: Boolean = false;
  date: any = new Date();

  districtDataSource = new MatTableDataSource(DISTRICT_ELEMENT_DATA);
  districtDataSource2 = new MatTableDataSource(
    DISTRICT_ELEMENT_DATA2.sort((a, b) =>
      a.districtName > b.districtName
        ? 1
        : b.districtName > a.districtName
          ? -1
          : 0
    )
  );

  stateDataSource = new MatTableDataSource(
    DISTRICT_ELEMENT_DATA1.sort((a, b) =>
      a.districtName > b.districtName
        ? 1
        : b.districtName > a.districtName
          ? -1
          : 0
    )
  );
  subHeaderDistrictColumns = ['total', 'districtTotal', 'talukaTotal', 'gramTotal'];
  districtColumns = ['position', 'district', 'expendature', 'talukaexpenditure', 'gramexpenditure'];

  districtColumns2 = [
    'position',
    'district',
    'expendature',
    'talukaexpendature',
    'gramexpendature'
  ];
  stateColumns = [
    'position',
    'district',
    'propsedAmount',
  ];

 expendDataSource = new MatTableDataSource(ELEMENT_TAB1_DATA);
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  // Object Class Wise Data Source
dataSourceClass1 = new MatTableDataSource(ELEMENT_DATA_CL1);
dataSourceClass2 = new MatTableDataSource(ELEMENT_DATA_CL2);
dataSourceClass3 = new MatTableDataSource(ELEMENT_DATA_CL3);
dataSourceClass4 = new MatTableDataSource(ELEMENT_DATA_CL4);
dataSourceClass5 = new MatTableDataSource(ELEMENT_DATA_CL5);
dataSourceClass6 = new MatTableDataSource(ELEMENT_DATA_CL6);
dataSourceClass7 = new MatTableDataSource(ELEMENT_DATA_CL7);
// breakup section
dataSourceBreakClass1 = new MatTableDataSource(ELEMENT_DATA_CL1);
dataSourceBreakClass2 = new MatTableDataSource(ELEMENT_DATA_CL2);
dataSourceBreakClass3 = new MatTableDataSource(ELEMENT_DATA_CL3);
dataSourceBreakClass4 = new MatTableDataSource(ELEMENT_DATA_CL4);
dataSourceBreakClass5 = new MatTableDataSource(ELEMENT_DATA_CL5);
dataSourceBreakClass6 = new MatTableDataSource(ELEMENT_DATA_CL6);
dataSourceBreakClass7 = new MatTableDataSource(ELEMENT_DATA_CL7);


// SubHeader of Main object head Table
subDisplayedColumns = ['Budgetestimates', 'Contingency', 'AdditionalAdvances',
'Totalc2c3', 'first8month', 'ProbableExpenditure', 'Totalof8n4month', 'proByDdo', 'proByHod', 'proByAdminDept', 'appByFdGrp'];

//  Main and BreakUp Table Columns
 displayColumnsExpan = ['objecthead', 'Budgetestimates', 'Contingency', 'AdditionalAdvances',
'Totalc2c3', 'ExpenditureLastyear', 'first8month', 'ProbableExpenditure', 'Totalof8n4month', 'Provisionmextyr',
 'proByDdo', 'proByHod', 'proByAdminDept', 'appByFdGrp', 'remarks'];

 // SubHeader of readOnly Table
 subDisplayedColumnsReadOnly = ['Budgetestimates', 'Contingency', 'AdditionalAdvances',
 'Totalc2c3', 'first8month', 'ProbableExpenditure', 'Totalof8n4month', 'proByDdo', 'proByHod', 'proByAdminDept', 'appByFdGrp'];
  //  ReadOnly Columns
    displayColumnsExpanReadOnly = ['objecthead', 'Budgetestimates', 'Contingency', 'AdditionalAdvances',
   'Totalc2c3', 'ExpenditureLastyear', 'first8month', 'ProbableExpenditure', 'Totalof8n4month', 'Provisionmextyr',
    'proByDdo', 'proByHod', 'proByAdminDept', 'appByFdGrp', 'remarks'];

  headerJson: HeaderElement[] = [
    {label: 'Financial Year', value: '2019-2020'},
    {label: 'Department', value: 'Education Department'},
    {label: 'Branch Name', value: 'Budget'},
    // {label: 'Estimation From', value: 'HDO'},
    // {label: 'Estimation For', value: 'Shri Arun Mahesh Babu MS'},
    {label: 'Demand', value: '09: Education Department'},
    {label: 'Budget Publication No.', value: '11: Home Department'},
    {label: 'Major Head', value: '2205: Art and Culture'},
    {label: 'Sub Major Head', value: '01:Elemantory Education '},
    {label: 'Minor Head', value: '053: Maintenance and Repair'},
    {label: 'Sub Head', value: '03: Grants to Sangeet Natya Bharati'},
    {label: 'Detailed Head', value: '01: Grants to Sangeet Natya Bharati'},
    {label: 'Charged/Voted', value: 'Voted'},
    {label: 'Revenue/Capital', value: 'Revenue'},
    {label: 'CSS', value: 'NO'},
  ];



  // Attachments
  // tslint:disable-next-line:member-ordering
  brwoseData: any[] = [
    { attachmentType: 'Supporting Document', fileName: 'PAN.jpeg' },
    { attachmentType: 'Supporting Document', fileName: 'AadharCard.pdf' },
  ];
  displayedBrowseColumns = ['position', 'attachmentType', 'fileName', 'action'];
  // tslint:disable-next-line:member-ordering
  dataSourceBrowse = new MatTableDataSource(this.brwoseData);
  action: string;
  step = 0;



  constructor(
    private toastr: ToastrService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private el: ElementRef,
  ) { }

  ngOnInit() {
    this.calculateRevisedDetail();
  }

  goToDashboard() {
    this.router.navigate(['']);
  }

  gotoListing() {
    this.router.navigate(['./budget/revised-expenditure-list']);
  }
  // Expansion Panel Switch Functions
  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  viewBreakup (index, element) {
    console.log(element);
    this.isBreakupVisible = true;
    const data = this.dataSourceClass3.data.filter((x, i) => i === index);
    this.dataSourceClass3.data = data;

    if (element.objecthead === '3133' ||
    element.objecthead === '3243' ||
    element.objecthead === '3353' ||
    element.objecthead === '3563') {
    this.table1 = true;
    this.table2 = false;
    this.districtColumns = [
      'position',
      'district',
      'expendature',
      'talukaexpendature',
      'gramexpendature'
    ];

    this.subHeaderDistrictColumns = ['total', 'districtTotal', 'gramTotal'];
    this.districtDataSource = new MatTableDataSource(DISTRICT_ELEMENT_DATA.sort((a, b) =>
      a.districtName > b.districtName
        ? 1
        : b.districtName > a.districtName
          ? -1
          : 0
    ));
  } else {
    this.districtColumns = [
      'position',
      'district',
      'expendature',
      'talukaexpendature',
      'gramexpendature'
    ];

    this.subHeaderDistrictColumns = ['total', 'districtTotal', 'talukaTotal', 'gramTotal'];
    this.districtDataSource = new MatTableDataSource(DISTRICT_ELEMENT_DATA.sort((a, b) =>
      a.districtName > b.districtName
        ? 1
        : b.districtName > a.districtName
          ? -1
          : 0
    ));
  }
  if (element.objecthead === '3131' ||
    element.objecthead === '3132' ||
    element.objecthead === '3241' ||
    element.objecthead === '3351' ||
    element.objecthead === '3561') {
    this.table1 = false;
    this.table2 = true;

    this.districtColumns = [
      'position',
      'district',
      'expendature',
      'talukaexpendature',
      'gramexpendature'
    ];

    this.subHeaderDistrictColumns = ['total', 'districtTotal', 'gramTotal'];
    this.districtDataSource = new MatTableDataSource(DISTRICT_ELEMENT_DATA.sort((a, b) =>
      a.districtName > b.districtName
        ? 1
        : b.districtName > a.districtName
          ? -1
          : 0
    ));
  } else {
    this.districtColumns = [
      'position',
      'district',
      'expendature',
      'talukaexpendature',
      'gramexpendature'
    ];
    this.subHeaderDistrictColumns = ['total', 'districtTotal', 'talukaTotal', 'gramTotal'];
    this.districtDataSource = new MatTableDataSource(DISTRICT_ELEMENT_DATA.sort((a, b) =>
      a.districtName > b.districtName
        ? 1
        : b.districtName > a.districtName
          ? -1
          : 0
    ));
  }

  if (element.objecthead === '3135' ||
    element.objecthead === '3135-13' ||
    element.objecthead === '3135-14' ||
    element.objecthead === '3135-15' ||
    element.objecthead === '3135-16') {
    this.grantInAid = false;
  } else {
    this.grantInAid = true;
  }
  }
  decimalKeyPress(event: any) {
    const pattern = /^\d+(\.\d{0,2})?$/;
    const inputChar = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    // If the key is backspace, tab, left, right or delete
    console.log('event.target.value', event.target.value);
    console.log('tst', pattern.test(event.target.value));

    let tempstr = event.target.value;
    tempstr += inputChar;

    if (!pattern.test(tempstr)) {
      // invalid character, prevent input
      event.preventDefault();
      return false;
    }

  }


  decimalPoint(data, key) {
    // debugger
    data[key] = Number(data[key]).toFixed(2);
  }

  numericKeyPress(event: any) {
    const pattern = /^\d+(\.\d{0,2})?$/;
    const inputChar = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    // If the key is backspace, tab, left, right or delete
    console.log('event.target.value', event.target.value);
    console.log('tst', pattern.test(event.target.value));

    let tempstr = event.target.value;
    tempstr += inputChar;

    if (!pattern.test(tempstr)) {
      // invalid character, prevent input
      event.preventDefault();
      return false;
    }

  }

  hideBreakup() {
    const pdata = ELEMENT_DATA_CL3;
    this.dataSourceClass3.data = pdata;
    this.isBreakupVisible = false;
  }
  calculateRevisedDetail() {
    this.expendDataSource.data.forEach(obj => {
      obj.Totalc2c3 = Number(obj.Budgetestimates) + Number(obj.SupplyDemand) + Number(obj.Contingency) + Number(obj.AdditionalAdvances);
      obj.Totalof8n4month = Number(obj.first8month) + Number(obj.ProbableExpenditure);
    });
  }
  // Gross Total Functions for Object Head Table Starts
    totalCol6(data) {
      let returnData = 0;
      if (data.Budgetestimates || data.SupplyDemand || data.Contingency || data.AdditionalAdvances) {
        returnData = Number(data.Budgetestimates) + Number(data.SupplyDemand) + Number(data.Contingency) + Number(data.AdditionalAdvances);
      }
      this.expendDataSource.data.forEach(obj => {
        if (obj.objecthead === data.objecthead) {
          obj.Totalc2c3 = Number(obj.Budgetestimates) + Number(obj.SupplyDemand) + Number(obj.Contingency) + Number(obj.AdditionalAdvances);
        }
      });
      return returnData;
    }

    totalof8n4month(data) {
      let returnData = 0;
      if (data.first8month || data.ProbableExpenditure) {
        returnData = Number(data.first8month) + Number(data.ProbableExpenditure);
      }
      return returnData;
    }
      // Gross Total Functions for Object Head Table ends`


  loadThirdLastYear() {
    const year: any[] = this.headerJson[0].value.split('-');
    return (Number(year[0]) - 3).toString() + '-' + (Number(year[0]) - 2).toString();
  }

  loadSecondLastYear() {
    const year: any[] = this.headerJson[0].value.split('-');
    return (Number(year[0]) - 2).toString() + '-' + (Number(year[0]) - 1).toString();
  }

  loadLastYear() {
    const year: any[] = this.headerJson[0].value.split('-');
    return (Number(year[0]) - 1).toString() + '-' + (Number(year[0]) - 0).toString();
  }

  loadNextYear() {
    const year: any[] = this.headerJson[0].value.split('-');
    return (Number(year[0]) - 0).toString() + '-' + (Number(year[0]) + 1).toString();
  }

  loadCurrentYear() {
    return this.headerJson[0].value;
  }

  jilla() {
    let amountExp = 0;
    this.districtDataSource.data.forEach((element) => {
      amountExp =  amountExp + Number(element.expendature);
    });
    return amountExp;
  }
  taluka() {
    let amountExp = 0;
    this.districtDataSource.data.forEach((element) => {
      amountExp =  amountExp + Number(element.talukaexpendature);
    });
    return amountExp;
  }
  gram() {
    let amountExp = 0;
    this.districtDataSource.data.forEach((element) => {
      amountExp =  amountExp + Number(element.gramexpendature);
    });
    return amountExp;
  }

  corporation() {
    let amountExp = 0;
    this.districtDataSource2.data.forEach((element) => {
      amountExp =  amountExp + Number(element.expendature);
    });
    return amountExp;
  }
  municipal() {
    let amountExp = 0;
    this.districtDataSource2.data.forEach((element) => {
      amountExp =  amountExp + Number(element.talukaexpendature);
    });
    return amountExp;
  }
  notifiedArea() {
    let amountExp = 0;
    this.districtDataSource2.data.forEach((element) => {
      amountExp =  amountExp + Number(element.gramexpendature);
    });
    return amountExp;
  }

}











