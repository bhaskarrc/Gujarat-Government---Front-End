import { startWith, map, takeUntil } from 'rxjs/operators';
import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { COMMA, ENTER, TAB } from '@angular/cdk/keycodes';
// tslint:disable-next-line: max-line-length
import { MatAutocomplete, MatChipInputEvent, MatAutocompleteSelectedEvent, MatTableDataSource, MatSelect, MatDialog } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { RevisedEstimates, DistrictElement, SubObjectHead, ExpandRevisedEstimates } from '../../../model/revised-estimates';
import { HeaderElement } from '../revised-expenditure-view/revised-estimate-view.component';
import { CommonListing } from 'src/app/model/common-listing';
// tslint:disable-next-line: max-line-length
import { StandingChargeForwardDialogComponent, StadingChargeConfirmDialogComponent } from '../../standing-charge/standalone-charge/standalone-charge.component';
import { DistData, DistrictTableRevExp2, StateTableRevExp } from 'src/app/model/budget';

const ELEMENT_DATA: RevisedEstimates[] = [];
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

// Main Recovery Table Data
const ELEMENT_DATA1: RevisedEstimates[] = [
  { objecthead: '7057', Budgetestimates: '3000.00', SupplyDemand: '', Contingency: '0.00', AdditionalAdvances: '20.00',
  Totalc2c3: 2.19, ExpenditureLastyear: '', first8month: '', ProbableExpenditure: '', Totalof8n4month: '',
  Provisionmextyr: '1200.00', RevisedEstimates: '', proByDdo: '', proByHod: '', proByAdminDept: '', appByFdGrp: '',
   AmountHoDcyr: '', remarks: '', tooltip: '7057', expendCharges: true},
  { objecthead: '7058', Budgetestimates: '2000.00', SupplyDemand: '', Contingency: '0.00', AdditionalAdvances: '400.00',
  Totalc2c3: 2.19, ExpenditureLastyear: '', first8month: '', ProbableExpenditure: '', Totalof8n4month: '',
  Provisionmextyr: '2500.00', RevisedEstimates: '', proByDdo: '', proByHod: '', proByAdminDept: '', appByFdGrp: '',
   AmountHoDcyr: '', remarks: '', tooltip: '7058', expendCharges: true},
];

// GIA Jilla Table Data
const DISTRICT_ELEMENT_DATA: DistData[] = [
  { id: 1, expenditure: 0.00, districtName: 'Ahmedabad', talukaExpenditure: 0.00, gramExpenditure: 0.00 },
  { id: 2, expenditure: 0.00, districtName: 'Vadodara', talukaExpenditure: 0.00, gramExpenditure: 0.00 },
  { id: 3, expenditure: 0.00, districtName: 'Anand', talukaExpenditure: 0.00, gramExpenditure: 0.00 },
  { id: 4, expenditure: 0.00, districtName: 'Chhota Udaipur', talukaExpenditure: 0.00, gramExpenditure: 0.00 },
  { id: 5, expenditure: 0.00, districtName: 'Dahod', talukaExpenditure: 0.00, gramExpenditure: 0.00 },
  { id: 6, expenditure: 0.00, districtName: 'Kheda', talukaExpenditure: 0.00, gramExpenditure: 0.00 },
  { id: 7, expenditure: 0.00, districtName: 'Mahisagar', talukaExpenditure: 0.00, gramExpenditure: 0.00 },
  { id: 8, expenditure: 0.00, districtName: 'Panchmahal', talukaExpenditure: 0.00, gramExpenditure: 0.00 },
  { id: 9, expenditure: 0.00, districtName: 'Gandhinagar', talukaExpenditure: 0.00, gramExpenditure: 0.00 },
  { id: 10, expenditure: 0.00, districtName: 'Aravalli', talukaExpenditure: 0.00, gramExpenditure: 0.00 },
  { id: 11, expenditure: 0.00, districtName: 'Banaskantha', talukaExpenditure: 0.00, gramExpenditure: 0.00 },
  { id: 12, expenditure: 0.00, districtName: 'Mehsana', talukaExpenditure: 0.00, gramExpenditure: 0.00 },
  { id: 13, expenditure: 0.00, districtName: 'Patan', talukaExpenditure: 0.00, gramExpenditure: 0.00 },
  { id: 14, expenditure: 0.00, districtName: 'Sabarkantha', talukaExpenditure: 0.00, gramExpenditure: 0.00 },
  { id: 15, expenditure: 0.00, districtName: 'Rajkot', talukaExpenditure: 0.00, gramExpenditure: 0.00 },
  { id: 16, expenditure: 0.00, districtName: 'Amreli', talukaExpenditure: 0.00, gramExpenditure: 0.00 },
  { id: 17, expenditure: 0.00, districtName: 'Bhavnagar', talukaExpenditure: 0.00, gramExpenditure: 0.00 },
  { id: 18, expenditure: 0.00, districtName: 'Botad', talukaExpenditure: 0.00, gramExpenditure: 0.00 },
  { id: 19, expenditure: 0.00, districtName: 'Devbhoomi Dwarka', talukaExpenditure: 0.00, gramExpenditure: 0.00 },
  { id: 20, expenditure: 0.00, districtName: 'Gir Somnath', talukaExpenditure: 0.00, gramExpenditure: 0.00 },
  { id: 21, expenditure: 0.00, districtName: 'Jamnagar', talukaExpenditure: 0.00, gramExpenditure: 0.00 },
  { id: 22, expenditure: 0.00, districtName: 'Junagadh', talukaExpenditure: 0.00, gramExpenditure: 0.00 },
  { id: 23, expenditure: 0.00, districtName: 'Morbi', talukaExpenditure: 0.00, gramExpenditure: 0.00 },
  { id: 24, expenditure: 0.00, districtName: 'Porbandar', talukaExpenditure: 0.00, gramExpenditure: 0.00 },
  { id: 25, expenditure: 0.00, districtName: 'Surendranagar', talukaExpenditure: 0.00, gramExpenditure: 0.00 },
  { id: 26, expenditure: 0.00, districtName: 'Kachchh', talukaExpenditure: 0.00, gramExpenditure: 0.00 },
  { id: 27, expenditure: 0.00, districtName: 'Surat', talukaExpenditure: 0.00, gramExpenditure: 0.00 },
  { id: 28, expenditure: 0.00, districtName: 'Bharuch', talukaExpenditure: 0.00, gramExpenditure: 0.00 },
  { id: 29, expenditure: 0.00, districtName: 'Dang', talukaExpenditure: 0.00, gramExpenditure: 0.00 },
  { id: 30, expenditure: 0.00, districtName: 'Narmada', talukaExpenditure: 0.00, gramExpenditure: 0.00 },
  { id: 31, expenditure: 0.00, districtName: 'Navsari', talukaExpenditure: 0.00, gramExpenditure: 0.00 },
  { id: 32, expenditure: 0.00, districtName: 'Tapi', talukaExpenditure: 0.00, gramExpenditure: 0.00 },
  { id: 33, expenditure: 0.00, districtName: 'Valsad', talukaExpenditure: 0.00, gramExpenditure: 0.00 },
];

// GIA Corporation Table Data
const DISTRICT_ELEMENT_DATA2: DistrictTableRevExp2[] = [
  {
    id: 1,
    expendature: '',
    districtName: 'Ahmedabad',
    talukaexpendature: '',
    gramexpendature: ''
  },
  {
    id: 2,
    expendature: '',
    districtName: 'Vadodara',
    talukaexpendature: '',
    gramexpendature: ''
  },
  {
    id: 3,
    expendature: '',
    districtName: 'Anand',
    talukaexpendature: '',
    gramexpendature: ''
  },
  {
    id: 4,
    expendature: '',
    districtName: 'Chhota Udaipur',
    talukaexpendature: '',
    gramexpendature: ''
  },
  {
    id: 5,
    expendature: '',
    districtName: 'Dahod',
    talukaexpendature: '',
    gramexpendature: ''
  },
  {
    id: 6,
    expendature: '',
    districtName: 'Kheda',
    talukaexpendature: '',
    gramexpendature: ''
  },
  {
    id: 7,
    expendature: '',
    districtName: 'Mahisagar',
    talukaexpendature: '',
    gramexpendature: ''
  },
  {
    id: 8,
    expendature: '',
    districtName: 'Panchmahal',
    talukaexpendature: '',
    gramexpendature: ''
  },
  {
    id: 9,
    expendature: '',
    districtName: 'Gandhinagar',
    talukaexpendature: '',
    gramexpendature: ''
  },
  {
    id: 10,
    expendature: '',
    districtName: 'Aravalli',
    talukaexpendature: '',
    gramexpendature: ''
  },
  {
    id: 11,
    expendature: '',
    districtName: 'Banaskantha',
    talukaexpendature: '',
    gramexpendature: ''
  },
  {
    id: 12,
    expendature: '',
    districtName: 'Mehsana',
    talukaexpendature: '',
    gramexpendature: ''
  },
  {
    id: 13,
    expendature: '',
    districtName: 'Patan',
    talukaexpendature: '',
    gramexpendature: ''
  },
  {
    id: 14,
    expendature: '',
    districtName: 'Sabarkantha',
    talukaexpendature: '',
    gramexpendature: ''
  },
  {
    id: 15,
    expendature: '',
    districtName: 'Rajkot',
    talukaexpendature: '',
    gramexpendature: ''
  },
  {
    id: 16,
    expendature: '',
    districtName: 'Amreli',
    talukaexpendature: '',
    gramexpendature: ''
  },
  {
    id: 17,
    expendature: '',
    districtName: 'Bhavnagar',
    talukaexpendature: '',
    gramexpendature: ''
  },
  {
    id: 18,
    expendature: '',
    districtName: 'Botad',
    talukaexpendature: '',
    gramexpendature: ''
  },
  {
    id: 19,
    expendature: '',
    districtName: 'Devbhoomi Dwarka',
    talukaexpendature: '',
    gramexpendature: ''
  },
  {
    id: 20,
    expendature: '',
    districtName: 'Gir Somnath',
    talukaexpendature: '',
    gramexpendature: ''
  },
  {
    id: 21,
    expendature: '',
    districtName: 'Jamnagar',
    talukaexpendature: '',
    gramexpendature: ''
  },
  {
    id: 22,
    expendature: '',
    districtName: 'Junagadh',
    talukaexpendature: '',
    gramexpendature: ''
  },
  {
    id: 23,
    expendature: '',
    districtName: 'Morbi',
    talukaexpendature: '',
    gramexpendature: ''
  },
  {
    id: 24,
    expendature: '',
    districtName: 'Porbandar',
    talukaexpendature: '',
    gramexpendature: ''
  },
  {
    id: 25,
    expendature: '',
    districtName: 'Surendranagar',
    talukaexpendature: '',
    gramexpendature: ''
  },
  {
    id: 26,
    expendature: '',
    districtName: 'Kachchh',
    talukaexpendature: '',
    gramexpendature: ''
  },
  {
    id: 27,
    expendature: '',
    districtName: 'Surat',
    talukaexpendature: '',
    gramexpendature: ''
  },
  {
    id: 28,
    expendature: '',
    districtName: 'Bharuch',
    talukaexpendature: '',
    gramexpendature: ''
  },
  {
    id: 29,
    expendature: '',
    districtName: 'Dang',
    talukaexpendature: '',
    gramexpendature: ''
  },
  {
    id: 30,
    expendature: '',
    districtName: 'Narmada',
    talukaexpendature: '',
    gramexpendature: ''
  },
  {
    id: 31,
    expendature: '',
    districtName: 'Navsari',
    talukaexpendature: '',
    gramexpendature: ''
  },
  {
    id: 32,
    expendature: '',
    districtName: 'Tapi',
    talukaexpendature: '',
    gramexpendature: ''
  },
  {
    id: 33,
    expendature: '',
    districtName: 'Valsad',
    talukaexpendature: '',
    gramexpendature: ''
  },
];

// GIA State Table Data
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
  selector: 'app-revised',
  templateUrl: './revised.component.html',
  styleUrls: ['./revised.component.css']

})
export class RevisedComponent implements OnInit, OnDestroy {
  // Info Section Details
  headerJson: HeaderElement[] = [
    {label: 'Financial Year', value: '2019-2020'},
    {label: 'Department', value: 'Education Department'},
    {label: 'Branch Name', value: 'Budget'},
    {label: 'Estimation From', value: 'DDO'},
    {label: 'Type of Estimate', value: 'Item Continuous Estimate – Form E'},
    {label: 'Demand', value: '010: Other expenditure pertaining to Education Department'},
    {label: 'Budget Publication No.', value: '04: Education Department'},
    {label: 'Revenue/Capital', value: 'Revenue'},
    {label: 'Major Head', value: '2205: Art and Culture'},
    {label: 'Sub Major Head', value: '00: '},
    {label: 'Minor Head', value: '101: Fine Arts Education'},
    {label: 'Sub Head', value: '01: Grants to Sangeet Natya Bharati'},
    {label: 'Detailed Head', value: '00: Grants to Sangeet Natya Bharati'},
    {label: 'Charged/Voted', value: 'Voted'},
    {label: 'CSS', value: 'Partially Centrally Sponsored Scheme'},
  ];

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;

  separatorKeysCodes: number[] = [ENTER, COMMA, TAB];

  filteredCodes: Observable<string[]>;
  codes: string[] = [];
  // Object Class
    classType: CommonListing[] = [
      {
        value: '1',
        viewValue: 'Object Class-1 (Personnel Services and Benefits)'
      },
      { value: '2', viewValue: 'Object Class-2 (Administrative Expenses)' },
      {
        value: '3',
        viewValue: 'Object Class-3 (Contractual Services and Supplies)'
      },
      { value: '4', viewValue: 'Object Class-4 (Grants Etc.)' },
      { value: '5', viewValue: 'Object Class-5 (Other Expenditure)' },
      {
        value: '6',
        viewValue:
          'Object Class-6 (Acquisition of Capital Assets and Other Capital Expenditure)'
      },
      { value: '7', viewValue: 'Object Class-7 (Accounting Adjustment)' }
    ];

    // Object Head
  allMainCodes: CommonListing[] = [
    { value: '0101', viewValue: '0101 : Pay of Officers Including Grade Pay' },
    { value: '0102', viewValue: '0102 : Pay of Establishment Including Grade Pay' },
    { value: '0103', viewValue: '0103 : Dearness Allowance' },
    { value: '0104', viewValue: '0104 : Other Allowances' },
    { value: '0105', viewValue: '0105 : Leave Travel Concession' },
    { value: '0106', viewValue: '0106 : Reimbursement of Medical Charges' },
    { value: '0107', viewValue: '0107 : Medical Allowance' },
    { value: '0108', viewValue: '0108 : Bonus' },
    { value: '0109', viewValue: '0109 : eave Encashment' },
    { value: '0110', viewValue: '0110 : House Rent Allowance' },
    { value: '0111', viewValue: '0111 : Compensatory Local Allowance' },
    { value: '0113', viewValue: '0113 : Transport Allowance' },
    { value: '0114', viewValue: '0114 : Sumptuary Allowance' },
    { value: '0117', viewValue: '0117 : R.O.P. Arrears Gazetted' },
    { value: '0118', viewValue: '0118 : R.O.P. Arrears Non Gazetted' },
    { value: '0119', viewValue: '0119 : Dearness Pay-Gazetted' },
    { value: '0120', viewValue: '0120 : Dearness Pay-Non-Gazetted' },
    {
      value: '3131',
      viewValue:
        '3131 : Grants-in-Aid General to Panchayats pertaining to pay and allowances'
    },
    {
      value: '3132',
      viewValue: '3132 : Grants-in-Aid General to Panchayats pertaining'
    },
    {
      value: '3135',
      viewValue: '3135: Dantiwada Agricultural University'
    },

    { value: '3135-13', viewValue: '3135-13 : Anand Agricultural University' },
    {
      value: '3135-14',
      viewValue: '3135-14 : Junagadh Agricultural University'
    },
    {
      value: '3135-15',
      viewValue: '3135-15 : Navsari Agricultural University'
    },
    {
      value: '3135-16',
      viewValue: '3135-16 : Dantiwada Agricultural University'
    },

    { value: '3200', viewValue: '3200 : Contributions' },
    { value: '3241', viewValue: '3241 : Contributions (a) To Panchayats' },
    { value: '3133', viewValue: '3133 : Contributions (a) To Panchayats' },

    { value: '3243', viewValue: '3243 : Contributions (b) To Local Bodies' },
    { value: '3351', viewValue: '3351 : Subsidies (a) To Panchayats' },
    { value: '3353', viewValue: '3353 : Subsidies (b) To Local Bodies' },
    {
      value: '3561',
      viewValue: '3561 : Grants for creation of Capital Assets to Panchayats'
    },
    {
      value: '3563',
      viewValue: '3563 : Grants for creation of Capital Assets to Local Bodies'
    }
  ];
  @ViewChild('codeInput') codeInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

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

  // Main Table Data Source
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  // GIA Jilla Table
  districtColumns = ['position', 'district', 'expendature', 'talukaExpenditure', 'gramExpenditure'];
  districtDataSource = new MatTableDataSource(DISTRICT_ELEMENT_DATA);

  // GIA Corporation Table
  districtDataSource2 = new MatTableDataSource(
      DISTRICT_ELEMENT_DATA2.sort((a, b) =>
        a.districtName > b.districtName
          ? 1
          : b.districtName > a.districtName
            ? -1
            : 0
      )
    );
    districtColumns2 = ['position', 'district', 'expendature', 'talukaexpendature', 'gramexpendature'];

  // GIA State Table
    stateDataSource = new MatTableDataSource(
      DISTRICT_ELEMENT_DATA1.sort((a, b) =>
        a.districtName > b.districtName
          ? 1
          : b.districtName > a.districtName
            ? -1
            : 0
      )
    );
    stateColumns = ['position', 'district', 'propsedAmount', ];

  expendDataSource = new MatTableDataSource(ELEMENT_TAB1_DATA);

// SubHeader of Main object head Table
  subDisplayedColumns = ['Budgetestimates', 'Contingency', 'AdditionalAdvances',
  'Totalc2c3', 'first8month', 'ProbableExpenditure', 'Totalof8n4month', 'proByDdo', 'proByHod', 'proByAdminDept', 'appByFdGrp'];

// Data and footer columns of Main object head table
  subDisplayedColumns1 = ['objecthead', 'Budgetestimates', 'Contingency', 'AdditionalAdvances',
  'Totalc2c3', 'ExpenditureLastyear', 'first8month', 'ProbableExpenditure', 'Totalof8n4month', 'Provisionmextyr',
   'proByDdo', 'proByHod', 'proByAdminDept', 'appByFdGrp', 'remarks', 'action'];

//  Main and BreakUp Table Columns
   displayColumnsExpan = ['objecthead', 'Budgetestimates', 'Contingency', 'AdditionalAdvances',
  'Totalc2c3', 'ExpenditureLastyear', 'first8month', 'ProbableExpenditure', 'Totalof8n4month', 'Provisionmextyr',
   'proByDdo', 'proByHod', 'proByAdminDept', 'appByFdGrp', 'remarks', 'action'];

// SubHeader of readOnly Table
subDisplayedColumnsReadOnly = ['Budgetestimates', 'Contingency', 'AdditionalAdvances',
'Totalc2c3', 'first8month', 'ProbableExpenditure', 'Totalof8n4month', 'proByDdo', 'proByHod', 'proByAdminDept', 'appByFdGrp'];
  //  ReadOnly Columns
   displayColumnsExpanReadOnly = ['objecthead', 'Budgetestimates', 'Contingency', 'AdditionalAdvances',
  'Totalc2c3', 'ExpenditureLastyear', 'first8month', 'ProbableExpenditure', 'Totalof8n4month', 'Provisionmextyr',
   'proByDdo', 'proByHod', 'proByAdminDept', 'appByFdGrp', 'remarks'];

  @ViewChild('scrollChargeMe') private myScrollContainer: ElementRef;
  @ViewChild('parentGrids') private parentGrid: ElementRef;
  expendCharges: boolean;
  showObject: string;
  saveCharge: boolean;
  hodAmount: any;
  succObjectCode: Array<any> = [];
  errObjectCode: Array<any> = [];
  /** control for the MatSelect filter keyword */
  public subObjectFilterCtrl: FormControl = new FormControl();
  public filteredSubObjects: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);
  sObjectHead: SubObjectHead[] = [{ name: '6100 - Depreciation', id: '6100' }, { name: '6200 - Reserves', id: '6200' },
  { name: '6300 - Inter-Account Transfer', id: '6300' }, { name: '6400 - Write off/Losses', id: '6400' },
  { name: '7000 - Deduct Recoveries', id: '7000' }, { name: '7057 - Festival Advance', id: '7057' },
  { name: '7058 - Food Grain Advance', id: '7058' }];
  private _onDestroy = new
    Subject<void>();
  subObjectId: Array<any> = [];
  selSubObjectId: string;
  date: any = new Date();

  errorMessages = {
    FIN_YEAR: 'Please select any Financial Year',
    DEPARTMENT: 'Please select any Department',
    BRANCH: 'Please select any Name of the Branch ',
    ESTIMATION_FORM: 'Please select any Estimation Form ',
    DEMAND: 'Please select any Demand',
    BPN: 'Please select any BPN code',
    MAJOR_HEAD: 'Please select any Major Head',
    SUB_MAJOR_HEAD: 'Please select any Sub Major Head',
    MINOR_HEAD: 'Please select any Minor Head',
    SUB_HEAD: 'Please select any Sub Head',
    DETAILED_HEAD: 'Please insert Detailed Head',
  };


  attachmentType_list: CommonListing[] = [
    {value: '1', viewValue: 'Supporting Document'},
    {value: '2', viewValue: 'Sanction Order'},
    {value: '3', viewValue: 'Other'},
  ];
  CSSPartDiv = true;
  table1 = true;
  table2 = false;
  grantInAid: Boolean;
  step = 0;


  codeCtrl = new FormControl();
  classTwoCtrl = new FormControl();
  classTwoCtrlBreakUp = new FormControl();
  codeCtrlBreakUp = new FormControl();



  attachmentTypeCodeCtrl: FormControl = new FormControl();
filteredAttachmentTypeCode: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);
  filteredAttachemntType: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);


@ViewChild('singleSelect') singleSelect: MatSelect;

CSSDetails: any[] = [
  {schemeName: '', actualReciSecondLast: '0.00', actualReciLastYear: '0.00'},
];
dataSourceCSSDetail = new MatTableDataSource(this.CSSDetails);


tabDisable: Boolean = true;
doneHeader: Boolean = false;
selectedIndex: number;

  // Attachments
  brwoseData: any[] = [{
    attachmentType: undefined,
    name: undefined,
    file: undefined,
  }];
  displayedBrowseColumns = ['position', 'attachmentType', 'fileName', 'browse', 'uploadedFileName',  'uploadedBy',  'action'];
  dataSourceBrowse = new MatTableDataSource(this.brwoseData);
  fileBrowseIndex: number;
  constructor(
    private toastr: ToastrService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private el: ElementRef,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.initialSubObject();

    this.filteredAttachmentTypeCode.next(this.attachmentType_list.slice());
    this.attachmentTypeCodeCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(this.attachmentType_list, this.attachmentTypeCodeCtrl.value, this.filteredAttachmentTypeCode);
    });


    this.calculateRevisedDetail();

  }

  filterObjValue(arrValue, searchValue, filteredValue) {
    if (!arrValue) {
      return;
    }
    // get the search keyword
    let search = searchValue;
    if (!search) {
      filteredValue.next(arrValue.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the values
    filteredValue.next(
      arrValue.filter(item => item.viewValue.toLowerCase().indexOf(search) > -1)
    );
  }

  // Expansion Panel Switch Functions
  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
    this.toastr.success('Data Saved Successfully..');
  }

  prevStep() {
    this.step--;
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

  integerKeyPress(event: any) {
    const pattern = /^\d{0,5}?$/;
    const inputChar = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    // If the key is backspace, tab, left, right or delete
    const keystobepassedout = '$Backspace$Delete$Home$Tab$ArrowLeft$ArrowRight$ArrowUp$ArrowDown$End$';
    if (keystobepassedout.indexOf('$' + event.key + '$') !== -1) {
      return true;
    }
    if (event.target.value.length > 5) {
      event.preventDefault();
      return false;
    }

    if (!pattern.test(inputChar)) {
      // invalid character, prevent input
      event.preventDefault();
      return false;
    }
    return true;
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

  // Attachments Section Functions
  onFileSelection(fileSelected) {
    if (fileSelected.target && fileSelected.target.files) {
      this.dataSourceBrowse.data[this.fileBrowseIndex].file = fileSelected.target.files[0];
    }
  }

  openFileSelector(index) {
    this.el.nativeElement.querySelector('#fileBrowse').click();
    this.fileBrowseIndex = index;
  }

  onBrowseSelectChange() { }

  addBrowse() {
    if (this.dataSourceBrowse) {
      const data = this.dataSourceBrowse.data[this.dataSourceBrowse.data.length - 1];
      console.log('calling');
      if (data && data.name && data.file) {
        const p_data = this.dataSourceBrowse.data;
        p_data.push({
          dropDown: undefined,
          name: undefined,
          file: undefined,
        });
        this.dataSourceBrowse.data = p_data;
      } else {
        this.toastr.error('Please fill the detail.');
      }
    }
  }

  deleteBrowse(index) {
    this.dataSourceBrowse.data.splice(index, 1);
    this.dataSourceBrowse = new MatTableDataSource(this.dataSourceBrowse.data);
  }

  numberKeyPress(event: any) {
    const pattern = /^\d{0,5}?$/;
    const inputChar = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    // If the key is backspace, tab, left, right or delete
    const keystobepassedout = '$Backspace$Delete$Home$Tab$ArrowLeft$ArrowRight$ArrowUp$ArrowDown$End$';
    if (keystobepassedout.indexOf('$' + event.key + '$') !== -1) {
      return true;
    }
    if (event.target.value.length > 5) {
      event.preventDefault();
      return false;
    }

    if (!pattern.test(inputChar)) {
      // invalid character, prevent input
      event.preventDefault();
      return false;
    }
    return true;
  }

  // Common workflow model
  submit() {
    const dialogRef = this.dialog.open(StandingChargeForwardDialogComponent, {
      width: '2700px',
      height: '600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'no') {
        console.log('The dialog was closed', result);
      } else if (result === 'yes') {
        console.log('The dialog was closed', result);
        this.showConfirmationPopup();
      }
    });
  }
  showConfirmationPopup() {
    const dialogRef = this.dialog.open(StadingChargeConfirmDialogComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'no') {
        console.log(result);
      } else if (result === 'save') {
        console.log(result);
      }
    });
  }

  initialSubObject() {
    this.filteredSubObjects.next(this.sObjectHead.slice());
    // listen for search field value changes
    this.subObjectFilterCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterSubObject();
      });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();

    this.objectCodeFilterData();
  }

  getRowData(index) {

  }

  // Open BreakUp Section
  showCharge(event, index, element) {
    if (element.objecthead) {

      if (element.objecthead === '3133' ||
          element.objecthead === '3243' ||
          element.objecthead === '3353' ||
          element.objecthead === '3563') {
              this.grantInAid = true;
              this.table1 = true;
              this.table2 = false;
          } else if (element.objecthead === '3131' ||
              element.objecthead === '3132' ||
              element.objecthead === '3241' ||
              element.objecthead === '3351' ||
              element.objecthead === '3561' ) {
                  this.grantInAid = true;
                  this.table1 = false;
                  this.table2 = true;
              } else if (element.objecthead === '3135' ||
              element.objecthead === '3135-13' ||
              element.objecthead === '3135-14' ||
              element.objecthead === '3135-15' ||
              element.objecthead === '3135-16') {
                  this.grantInAid = false;
              }
      this.expendCharges = true;
      const data = this.dataSourceClass3.data.filter((x, i) => i === index);
      this.dataSourceClass3.data = data;

    } else {
      this.toastr.error('Please fill all the details object head!');
    }
  }
  backCharge() {
    this.showObject = '';
    this.expendCharges = false;
    this.objectCodeFilterData();
  }

  objectCodeFilterData() {
    const pdata = ELEMENT_DATA_CL3;
    this.dataSourceClass3.data = pdata;
  }
  calculateRevisedDetail() {
    this.expendDataSource.data.forEach(obj => {
      obj.Totalc2c3 = Number(obj.Budgetestimates) + Number(obj.SupplyDemand) + Number(obj.Contingency) + Number(obj.AdditionalAdvances);
      obj.Totalof8n4month = Number(obj.first8month) + Number(obj.ProbableExpenditure);
    });
  }

  protected filterSubObject() {
    if (!this.sObjectHead) {
      return;
    }
    // get the search keyword
    let search = this.subObjectFilterCtrl.value;
    if (!search) {
      this.filteredSubObjects.next(this.sObjectHead.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the banks
    this.filteredSubObjects.next(
      this.sObjectHead.filter(obj => obj.name.toLowerCase().indexOf(search) > -1)
    );
  }
  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }

  gotoListing() {
    this.router.navigate(['./budget/revised-expenditure-list']);
  }

  decimalPoint(data, key) {
    // debugger
    data[key] = Number(data[key]).toFixed(2);
  }

  // Functions for Calculation of Year
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

  goToDashboard() {
    this.router.navigate(['']);
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

    // GIA Table Funcitons Starts
    jilla() {
      let amountExp = 0;
      this.districtDataSource.data.forEach((element) => {
        amountExp =  amountExp + Number(element.expenditure);
      });
      return amountExp;
    }
    taluka() {
      let amountExp = 0;
      this.districtDataSource.data.forEach((element) => {
        amountExp =  amountExp + Number(element.talukaExpenditure);
      });
      return amountExp;
    }
    gram() {
      let amountExp = 0;
      this.districtDataSource.data.forEach((element) => {
        amountExp =  amountExp + Number(element.gramExpenditure);
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
    // GIA Table Funcitons Ends
// Delete Functions from Main Table
  deleteClass1(index) {
    this.dataSourceClass1.data.splice(index, 1);
    this.dataSourceClass1 = new MatTableDataSource(this.dataSourceClass1.data);
  }

  deleteClass2(index) {
    this.dataSourceClass2.data.splice(index, 1);
    this.dataSourceClass2 = new MatTableDataSource(this.dataSourceClass2.data);
  }

  deleteClass3(index) {
    this.dataSourceClass3.data.splice(index, 1);
    this.dataSourceClass3 = new MatTableDataSource(this.dataSourceClass3.data);
  }

  deleteClass4(index) {
    this.dataSourceClass4.data.splice(index, 1);
    this.dataSourceClass4 = new MatTableDataSource(this.dataSourceClass4.data);
  }

  deleteClass5(index) {
    this.dataSourceClass5.data.splice(index, 1);
    this.dataSourceClass5 = new MatTableDataSource(this.dataSourceClass5.data);
  }

  deleteClass6(index) {
    this.dataSourceClass6.data.splice(index, 1);
    this.dataSourceClass6 = new MatTableDataSource(this.dataSourceClass6.data);
  }

  deleteClass7(index) {
    this.dataSourceClass7.data.splice(index, 1);
    this.dataSourceClass7 = new MatTableDataSource(this.dataSourceClass7.data);
  }
// Delete Functions from BreakUp Table
  deleteBreakClass1(index) {
    this.dataSourceBreakClass1.data.splice(index, 1);
    this.dataSourceBreakClass1 = new MatTableDataSource(this.dataSourceBreakClass1.data);
  }

  deleteBreakClass2(index) {
    this.dataSourceBreakClass2.data.splice(index, 1);
    this.dataSourceBreakClass2 = new MatTableDataSource(this.dataSourceBreakClass2.data);
  }

  deleteBreakClass3(index) {
    this.dataSourceBreakClass3.data.splice(index, 1);
    this.dataSourceBreakClass3 = new MatTableDataSource(this.dataSourceBreakClass3.data);
  }

  deleteBreakClass4(index) {
    this.dataSourceBreakClass4.data.splice(index, 1);
    this.dataSourceBreakClass4 = new MatTableDataSource(this.dataSourceBreakClass4.data);
  }

  deleteBreakClass5(index) {
    this.dataSourceBreakClass5.data.splice(index, 1);
    this.dataSourceBreakClass5 = new MatTableDataSource(this.dataSourceBreakClass5.data);
  }

  deleteBreakClass6(index) {
    this.dataSourceBreakClass6.data.splice(index, 1);
    this.dataSourceBreakClass6 = new MatTableDataSource(this.dataSourceBreakClass6.data);
  }

  deleteBreakClass7(index) {
    this.dataSourceBreakClass7.data.splice(index, 1);
    this.dataSourceBreakClass7 = new MatTableDataSource(this.dataSourceBreakClass7.data);
  }

}












