import { CommonListing } from './../../../model/common-listing';
import { Component, OnInit, AfterViewInit, ViewChild, Inject, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ReplaySubject, Subject, Observable } from 'rxjs';
import { takeUntil, startWith, map, flatMap } from 'rxjs/operators';
import { SelectionModel } from '@angular/cdk/collections';
import { ToastrService } from 'ngx-toastr';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
// tslint:disable-next-line:max-line-length
import { ConfirmDialogModel, StandingChargeConsolidateHistoryComponent } from '../standing-charge-consolidate-history/standing-charge-consolidate-history.component';
import { StandingChargeForwardDialogComponent } from '../../standing-charge/standalone-charge/standalone-charge.component';
import { HeaderElement, SchemeList, DialogData, StandingChargeElement, ObjectHeadBreakupElement, DistrictElementStandingCharge, DistrictElement1 } from 'src/app/model/budget';

const recoveryData: StandingChargeElement[] = [
  { objecthead: '7057', thirdlastyear: 200.15, secondlastyear: 1.79, lastyear: 251, currentyear: 356,
    last8month: 457, first4month: 789, totalof8and4month: 475, col6: '', col7: '',
    amountproposedbyDDO: 450.54, amountWorkOutByFormula: '', amountproposedbyHOD: '', remarks: '',
     isBreakup: false, isSelected: false,  percentage: 3 },
  { objecthead: '7058', thirdlastyear: 300, secondlastyear: 4.06, lastyear: 251, currentyear: 456,
    last8month: 457, first4month: 789, totalof8and4month: 475, col6: '', col7: '',
    amountproposedbyDDO: 450.54, amountWorkOutByFormula: '', amountproposedbyHOD: '', remarks: '',
     isBreakup: false, isSelected: false,  percentage: 3, },
];

const ELEMENT_DATA: StandingChargeElement[] = [
  {
    objecthead: '0101',  thirdlastyear: 200, secondlastyear: 1.79, lastyear: 251, currentyear: 356, last8month: 457,
    first4month: 789, totalof8and4month: 475, col6: '', col7: '', amountproposedbyDDO: 452,
     amountWorkOutByFormula: '', amountproposedbyHOD: '',
    remarks: '', isBreakup: false, isSelected: false,
    toolTipData: '0101 : Grants-in-Aid General to Panchayats pertaining to pay and allowances', percentage: 3,
  },
  {
    objecthead: '0102', thirdlastyear: 300, secondlastyear: 4.06, lastyear: 251, currentyear: 456, last8month: 457,
    first4month: 789, totalof8and4month: 475, col6: '', col7: '', amountproposedbyDDO: 452,
     amountWorkOutByFormula: '', amountproposedbyHOD: '',
     remarks: '', isBreakup: false, isSelected: false, toolTipData: '0102 : Pay of Establishment Including Grade Pay ', percentage: 3,
  },
  {
    objecthead: '0103', thirdlastyear: 400, secondlastyear: 6.91, lastyear: 251, currentyear: 213, last8month: 457,
    first4month: 789, totalof8and4month: 475, col6: '', col7: '', amountproposedbyDDO: 452,
     amountWorkOutByFormula: '', amountproposedbyHOD: '',
     remarks: '', isBreakup: false, isSelected: false, toolTipData: '0103 : Dearness Allowance' , percentage: 11,
  },
  {
    objecthead: '0104', thirdlastyear: 500, secondlastyear: 9.02, lastyear: 251, currentyear: 454, last8month: 457,
    first4month: 789, totalof8and4month: 475, col6: '', col7: '', amountproposedbyDDO: 1230,
     amountWorkOutByFormula: '100', amountproposedbyHOD: '',
     remarks: '', isBreakup: false, isSelected: false, toolTipData: '0104 : Agricultural University' , percentage: 5,
  },
  {
    objecthead: '3135-13', thirdlastyear: 500, secondlastyear: 9.02, lastyear: 251, currentyear: 454, last8month: 457,
    first4month: 789, totalof8and4month: 475, col6: '', col7: '', amountproposedbyDDO: 1230,
     amountWorkOutByFormula: '100', amountproposedbyHOD: '',
     remarks: '', isBreakup: true, isSelected: false, toolTipData: '3135-13 : Anand Agricultural University' , percentage: 0,
  },
  {
    objecthead: '3133', thirdlastyear: 800, secondlastyear: 10.11, lastyear: 251, currentyear: 544, last8month: 457,
    first4month: 789, totalof8and4month: 475, col6: '', col7: '', amountproposedbyDDO: 452,
     amountWorkOutByFormula: '100', amountproposedbyHOD: '',
     remarks: '', isBreakup: true, isSelected: false, toolTipData: '3135-14 : Junagadh Agricultural University', percentage: 0,
  },
  {
    objecthead: '3131', thirdlastyear: 800, secondlastyear: 10.11, lastyear: 251, currentyear: 544, last8month: 457,
    first4month: 789, totalof8and4month: 475, col6: '', col7: '', amountproposedbyDDO: 452,
     amountWorkOutByFormula: '100', amountproposedbyHOD: '',
     remarks: '', isBreakup: true, isSelected: false, toolTipData: '3131', percentage: 0,
  },
];

const OBJECT_HEAD_BREAKUP_DATA: ObjectHeadBreakupElement[] = [
  {
    objecthead: '6100', thirdlastyear: 200, secondlastyear: 1.79, lastyear: 251, currentyear: 356, last8month: 457,
    first4month: 789, totalof8and4month: 475, col6: '', col7: '', amountproposedbyDDO: 452,
     amountWorkOutByFormula: '', amountproposedbyHOD: '', remarks: ''
  },
  {
    objecthead: '6200', thirdlastyear: 300, secondlastyear: 4.06, lastyear: 251, currentyear: 456, last8month: 457,
    first4month: 789, totalof8and4month: 475, col6: '', col7: '', amountproposedbyDDO: 452,
     amountWorkOutByFormula: '', amountproposedbyHOD: '', remarks: ''
  },
  {
    objecthead: '6300', thirdlastyear: 400, secondlastyear: 6.91, lastyear: 251, currentyear: 213, last8month: 457,
    first4month: 789, totalof8and4month: 475, col6: '', col7: '', amountproposedbyDDO: 452,
     amountWorkOutByFormula: '', amountproposedbyHOD: '', remarks: ''
  },
  {
    objecthead: '6400', thirdlastyear: 500, secondlastyear: 9.02, lastyear: 251, currentyear: 454, last8month: 457,
    first4month: 789, totalof8and4month: 475, col6: '', col7: '', amountproposedbyDDO: 452,
     amountWorkOutByFormula: '', amountproposedbyHOD: '', remarks: ''
  },
];


const DISTRICT_ELEMENT_DATA: DistrictElementStandingCharge[] = [
  { id: 1, expendature: 10.00, districtName: 'Ahmedabad', talukaexpendature: 20.00, gramexpendature: 10.00},
  { id: 2,  expendature: 15.00, districtName: 'Vadodara', talukaexpendature: 50.00, gramexpendature: 20.00},
  { id: 3,  expendature: '', districtName: 'Anand', talukaexpendature: '', gramexpendature: ''},
  { id: 4,  expendature: '', districtName: 'Chhota Udaipur', talukaexpendature: '', gramexpendature: ''},
  { id: 5,  expendature: '', districtName: 'Dahod', talukaexpendature: '', gramexpendature: ''},
  { id: 6,  expendature: '', districtName: 'Kheda', talukaexpendature: '', gramexpendature: ''},
  { id: 7,  expendature: '', districtName: 'Mahisagar', talukaexpendature: '', gramexpendature: ''},
  { id: 8,  expendature: '', districtName: 'Panchmahal', talukaexpendature: '', gramexpendature: ''},
  { id: 9,  expendature: '', districtName: 'Gandhinagar', talukaexpendature: '', gramexpendature: ''},
  { id: 10,  expendature: '', districtName: 'Aravalli', talukaexpendature: '', gramexpendature: ''},
  { id: 11,  expendature: '', districtName: 'Banaskantha', talukaexpendature: '', gramexpendature: ''},
  { id: 12,  expendature: '', districtName: 'Mehsana', talukaexpendature: '', gramexpendature: ''},
  { id: 13,  expendature: '', districtName: 'Patan', talukaexpendature: '', gramexpendature: ''},
  { id: 14,  expendature: '', districtName: 'Sabarkantha', talukaexpendature: '', gramexpendature: ''},
  { id: 15,  expendature: '', districtName: 'Rajkot', talukaexpendature: '', gramexpendature: ''},
  { id: 16,  expendature: '', districtName: 'Amreli', talukaexpendature: '', gramexpendature: ''},
  { id: 17,  expendature: '', districtName: 'Bhavnagar', talukaexpendature: '', gramexpendature: ''},
  { id: 18,  expendature: '', districtName: 'Botad', talukaexpendature: '', gramexpendature: ''},
  { id: 19,  expendature: '', districtName: 'Devbhoomi Dwarka', talukaexpendature: '', gramexpendature: ''},
  { id: 20,  expendature: '', districtName: 'Gir Somnath', talukaexpendature: '', gramexpendature: ''},
  { id: 21,  expendature: '', districtName: 'Jamnagar', talukaexpendature: '', gramexpendature: ''},
  { id: 22,  expendature: '', districtName: 'Junagadh', talukaexpendature: '', gramexpendature: ''},
  { id: 23,  expendature: '', districtName: 'Morbi', talukaexpendature: '', gramexpendature: ''},
  { id: 24,  expendature: '', districtName: 'Porbandar', talukaexpendature: '', gramexpendature: ''},
  { id: 25,  expendature: '', districtName: 'Surendranagar', talukaexpendature: '', gramexpendature: ''},
  { id: 26,  expendature: '', districtName: 'Kachchh', talukaexpendature: '', gramexpendature: ''},
  { id: 27,  expendature: '', districtName: 'Surat', talukaexpendature: '', gramexpendature: ''},
  { id: 28,  expendature: '', districtName: 'Bharuch', talukaexpendature: '', gramexpendature: ''},
  { id: 29,  expendature: '', districtName: 'Dang', talukaexpendature: '', gramexpendature: ''},
  { id: 30,  expendature: '', districtName: 'Narmada', talukaexpendature: '', gramexpendature: ''},
  { id: 31,  expendature: '', districtName: 'Navsari', talukaexpendature: '', gramexpendature: ''},
  { id: 32,  expendature: '', districtName: 'Tapi', talukaexpendature: '', gramexpendature: ''},
  { id: 33,  expendature: '', districtName: 'Valsad', talukaexpendature: '', gramexpendature: ''},
  // { id: 34,  expendature: '', districtName: 'State Level Only (if any)', talukaexpendature: '', gramexpendature: ''},
];
const DISTRICT_ELEMENT_DATA1: DistrictElement1[] = [

  {

    id: 34,
    expendature: '',
    districtName: 'State Level Only (if any)',
    propsedAmount: '',

  }
];

const DISTRICT_ELEMENT_DATA2: DistrictElementStandingCharge[] = [
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
  // {
  //   id: 34,
  //   expendature: '',
  //   districtName: 'State Level Only (if any)',
  //   talukaexpendature: '',
  //   gramexpendature: ''
  // }
];

type NewType = FormGroup;

@Component({
  selector: 'app-standing-charge-consolidate',
  templateUrl: './standing-charge-consolidate.component.html',
  styleUrls: ['./standing-charge-consolidate.component.css']
})
export class StandingChargeConsolidateComponent implements OnInit {
// Annexure-1 Table 1 Data
  DATA: any[] = [
    {
      data: 'A. Gazetted Post',
      val1: '',
      val1Edit: false,
      val2: '',
      val2Edit: false,
      val3: '',
      val3Edit: false,
      val4: '',
      val4Edit: false,
      val5: '',
      val5Edit: false,
      val6: '',
      val6Edit: false,
      val7: '',
      val7Edit: false,
      remark: '',
      remarkEdit: false,
      extend: true
    },
    {
      data: '1) Permanent Post',
      val1: '',
      val1Edit: false,
      val2: '',
      val2Edit: false,
      val3: '',
      val3Edit: false,
      val4: '',
      val4Edit: false,
      val5: '',
      val5Edit: false,
      val6: '',
      val6Edit: false,
      val7: '',
      val7Edit: false,
      remark: '',
      remarkEdit: false,
      extend: true
    },
    {
      data: 'Filled',
      val1: '15.00',
      val1Edit: true,
      val2: '10.00',
      val2Edit: true,
      val3: '2.05',
      val3Edit: true,
      val4: '20.00',
      val4Edit: true,
      val5: '20.00',
      val5Edit: true,
      val6: '50.00',
      val6Edit: true,
      val7: '20.00',
      val7Edit: false,
      remark: 'No Remarks For this field',
      remarkEdit: true,
      extend: false
    },
    {
      data: 'Vacant',
      val1: '10.00',
      val1Edit: true,
      val2: '20.00',
      val2Edit: true,
      val3: '30.00',
      val3Edit: true,
      val4: '40.00',
      val4Edit: true,
      val5: '05.00',
      val5Edit: true,
      val6: '11.00',
      val6Edit: true,
      val7: '12.00',
      val7Edit: false,
      remark: 'No Remarks For this field',
      remarkEdit: true,
      extend: false
    },
    {
      data: 'Total (1)',
      val1: '10.00',
      val1Edit: false,
      val2: '15.00',
      val2Edit: false,
      val3: '16.00',
      val3Edit: false,
      val4: '17.00',
      val4Edit: false,
      val5: '12.00',
      val5Edit: false,
      val6: '10.00',
      val6Edit: false,
      val7: '10.00',
      val7Edit: false,
      remark: '08.00',
      remarkEdit: false,
      extend: false
    },
    {
      data: '(2) Temporany Post',
      val1: '10.00',
      val1Edit: false,
      val2: '20.00',
      val2Edit: false,
      val3: '25.00',
      val3Edit: false,
      val4: '22.00',
      val4Edit: false,
      val5: '',
      val5Edit: false,
      val6: '21.00',
      val6Edit: false,
      val7: '23.00',
      val7Edit: false,
      remark: '24.00',
      remarkEdit: false,
      extend: true
    },
    {
      data: 'Filled',
      val1: '10.00',
      val1Edit: true,
      val2: '11.00',
      val2Edit: true,
      val3: '12.00',
      val3Edit: true,
      val4: '12.00',
      val4Edit: true,
      val5: '05.00',
      val5Edit: true,
      val6: '15.00',
      val6Edit: true,
      val7: '10.00',
      val7Edit: false,
      remark: 'No Remarks For this field',
      remarkEdit: true,
      extend: false
    },
    {
      data: 'Vacant',
      val1: '10.00',
      val1Edit: true,
      val2: '20.00',
      val2Edit: true,
      val3: '10.00',
      val3Edit: true,
      val4: '14.00',
      val4Edit: true,
      val5: '15.00',
      val5Edit: true,
      val6: '20.00',
      val6Edit: true,
      val7: '20.00',
      val7Edit: false,
      remark: 'No Remarks For this field',
      remarkEdit: true,
      extend: false
    },
    {
      data: 'Total (2)',
      val1: '',
      val1Edit: false,
      val2: '',
      val2Edit: false,
      val3: '',
      val3Edit: false,
      val4: '',
      val4Edit: false,
      val5: '',
      val5Edit: false,
      val6: '',
      val6Edit: false,
      val7: '',
      val7Edit: false,
      remark: '',
      remarkEdit: false,
      extend: false
    },
    {
      data: 'Total (A)',
      val1: '',
      val1Edit: false,
      val2: '',
      val2Edit: false,
      val3: '',
      val3Edit: false,
      val4: '',
      val4Edit: false,
      val5: '',
      val5Edit: false,
      val6: '',
      val6Edit: false,
      val7: '',
      val7Edit: false,
      remark: '',
      remarkEdit: false,
      extend: false
    },
    {
      data: 'B. Non-Gazetted Post',
      val1: '',
      val1Edit: false,
      val2: '',
      val2Edit: false,
      val3: '',
      val3Edit: false,
      val4: '',
      val4Edit: false,
      val5: '',
      val5Edit: false,
      val6: '',
      val6Edit: false,
      val7: '',
      val7Edit: false,
      remark: '',
      remarkEdit: false,
      extend: true
    },
    {
      data: '1) Permanent Post',
      val1: '',
      val1Edit: false,
      val2: '',
      val2Edit: false,
      val3: '',
      val3Edit: false,
      val4: '',
      val4Edit: false,
      val5: '',
      val5Edit: false,
      val6: '',
      val6Edit: false,
      val7: '',
      val7Edit: false,
      remark: '',
      remarkEdit: false,
      extend: true
    },
    {
      data: 'Filled',
      val1: '10.00',
      val1Edit: true,
      val2: '20.00',
      val2Edit: true,
      val3: '11.00',
      val3Edit: true,
      val4: '30.00',
      val4Edit: true,
      val5: '20.00',
      val5Edit: true,
      val6: '10.00',
      val6Edit: true,
      val7: '12.00',
      val7Edit: false,
      remark: 'No Remarks For this field',
      remarkEdit: true,
      extend: false
    },
    {
      data: 'Vacant',
      val1: '21.00',
      val1Edit: true,
      val2: '22.00',
      val2Edit: true,
      val3: '14.00',
      val3Edit: true,
      val4: '13.00',
      val4Edit: true,
      val5: '14.00',
      val5Edit: true,
      val6: '16.00',
      val6Edit: true,
      val7: '18.00',
      val7Edit: false,
      remark: 'No Remarks For this field',
      remarkEdit: true,
      extend: false
    },
    {
      data: 'Total (1)',
      val1: '',
      val1Edit: false,
      val2: '',
      val2Edit: false,
      val3: '',
      val3Edit: false,
      val4: '',
      val4Edit: false,
      val5: '',
      val5Edit: false,
      val6: '',
      val6Edit: false,
      val7: '',
      val7Edit: false,
      remark: '',
      remarkEdit: false,
      extend: false
    },
    {
      data: '(2) Temporary Post',
      val1: '10.00',
      val1Edit: false,
      val2: '11.00',
      val2Edit: false,
      val3: '15.00',
      val3Edit: false,
      val4: '16.00',
      val4Edit: false,
      val5: '15.00',
      val5Edit: false,
      val6: '10.00',
      val6Edit: false,
      val7: '19.00',
      val7Edit: false,
      remark: '10.00',
      remarkEdit: false,
      extend: true
    },
    {
      data: 'Filled',
      val1: '10.00',
      val1Edit: true,
      val2: '20.00',
      val2Edit: true,
      val3: '21.00',
      val3Edit: true,
      val4: '22.00',
      val4Edit: true,
      val5: '23.00',
      val5Edit: true,
      val6: '22.00',
      val6Edit: true,
      val7: '23.00',
      val7Edit: false,
      remark: 'No Remarks For this field',
      remarkEdit: true,
      extend: false
    },
    {
      data: 'Vacant',
      val1: '11.00',
      val1Edit: true,
      val2: '50.00',
      val2Edit: true,
      val3: '18.00',
      val3Edit: true,
      val4: '17.00',
      val4Edit: true,
      val5: '18.00',
      val5Edit: true,
      val6: '10.00',
      val6Edit: true,
      val7: '10.00',
      val7Edit: false,
      remark: 'No Remarks For this field',
      remarkEdit: true,
      extend: false
    },
    {
      data: 'Total (2)',
      val1: '',
      val1Edit: false,
      val2: '',
      val2Edit: false,
      val3: '',
      val3Edit: false,
      val4: '',
      val4Edit: false,
      val5: '',
      val5Edit: false,
      val6: '',
      val6Edit: false,
      val7: '',
      val7Edit: false,
      remark: '',
      remarkEdit: false,
      extend: false
    },
    {
      data: 'Total (B)',
      val1: '',
      val1Edit: false,
      val2: '',
      val2Edit: false,
      val3: '',
      val3Edit: false,
      val4: '',
      val4Edit: false,
      val5: '',
      val5Edit: false,
      val6: '',
      val6Edit: false,
      val7: '',
      val7Edit: false,
      remark: '',
      remarkEdit: false,
      extend: false
    },
    {
      data: 'Grand Total (A+B)',
      val1: '',
      val1Edit: false,
      val2: '',
      val2Edit: false,
      val3: '',
      val3Edit: false,
      val4: '',
      val4Edit: false,
      val5: '',
      val5Edit: false,
      val6: '',
      val6Edit: false,
      val7: '',
      val7Edit: false,
      remark: '',
      remarkEdit: false,
      extend: false
    }
  ];

// Annexure-1 Table 2 Data
  attachmentSubTable = [
    {
      data: 'No of Post for Class 1',
      val1: '2',
      val1Edit: true,
      val2: '100.00',
      val2Edit: true,
      val3: 'No of Post for Class 1',
      val3Edit: false,
      val4: '3',
      val4Edit: true,
      val5: '300.00',
      val5Edit: true,
      extend: false
    },
    {
      data: 'No of Post for Class 2',
      val1: '1',
      val1Edit: true,
      val2: '100.00',
      val2Edit: true,
      val3: 'No of Post for Class 2',
      val3Edit: false,
      val4: '1',
      val4Edit: true,
      val5: '100.00',
      val5Edit: true,
      extend: false
    },
    {
      data: 'No of Post for Class 3',
      val1: '5',
      val1Edit: true,
      val2: '500.00',
      val2Edit: true,
      val3: 'No of Post for Class 3',
      val3Edit: false,
      val4: '5',
      val4Edit: true,
      val5: '500.00',
      val5Edit: true,
      extend: false
    },
    {
      data: 'No of Post for Class 4',
      val1: '6',
      val1Edit: true,
      val2: '600.00',
      val2Edit: true,
      val3: 'No of Post for Class 4',
      val3Edit: false,
      val4: '6',
      val4Edit: true,
      val5: '600.00',
      val5Edit: true,
      extend: false
    },
    {
      data: 'Fix Pay',
      val1: '8',
      val1Edit: true,
      val2: '800.00',
      val2Edit: true,
      val3: 'Fix Pay',
      val3Edit: false,
      val4: '8',
      val4Edit: true,
      val5: '800.00',
      val5Edit: true,
      extend: false
    },
    {
      data: 'Total',
      val1: '',
      val1Edit: false,
      val2: '',
      val2Edit: false,
      val3: 'Total',
      val3Edit: false,
      val4: '',
      val4Edit: false,
      val5: '',
      val5Edit: false,
      extend: false
    }
  ];

// Rojamdar & Work Charge Table Data
  rojmadarWorkCharge: any[] = [
    {
      data: 'Rojmdar',
      dataEdit: true,
      val1: '5',
      val1Edit: true,
      val2: '50000.00',
      val2Edit: true,
      val3: '500.00',
      val3Edit: true,
      val4: '',
      remark: 'Approved',
      remarkEdit: true
    },
    {
      data: 'Work Charge Establishment',
      dataEdit: true,
      val1: '10',
      val1Edit: true,
      val2: '100000.00',
      val2Edit: true,
      val3: '1000.00',
      val3Edit: true,
      val4: '',
      remark: '',
      remarkEdit: true
    }
  ];

// Outsourcing Table Data
  ELEMENT_DATA4: any[] = [
    {
      expDet: 'Peon',
      budEst: '5000.00'
    },
    {
      expDet: 'Driver',
      budEst: '6000.00'
    }, {
      expDet: 'Data Entry Operator',
      budEst: '4000.00'
    }, {
      expDet: 'Swipper',
      budEst: '8000.00'
    }, {
      expDet: 'Water Bearer',
      budEst: '9000.00'
    }, {
      expDet: 'Security',
      budEst: '8000.00'
    }, {
      expDet: 'Other',
      budEst: '50000.00'
    },
  ];

// Leave Encashment Table Data
  ELEMENT_DATA5: any[] = [
    {
    name: 'Rakesh Kumar',
    post: 'Section Officer',
    bPay: '14000.00',
    lEncash: '5000.00',
    retire: '15/02/2019',
    },

  ];

  animal: string;
  name: string;
  isBreakupVisible: Boolean = false;
  isAttachmentSelected: Boolean = false;
  selectedIndex: number;
  returnData: number;

  table1 = true;
  table2 = false;
  grantInAid: Boolean;
  amount;
  isVisible;


// Annexure-1 Table 1
  displayedAttachmentColumns = ['data', 'val1', 'val2', 'val3', 'val4', 'val5', 'val6', 'val7'];
  dataSourceAttachment = new MatTableDataSource(this.DATA);

// Annexure-1 Table 2
  dataSourceSubAttachment = new MatTableDataSource(this.attachmentSubTable);
  displayedSubAttachmentColumns = ['data', 'val1', 'val2', 'val3', 'val4', 'val5'];

//  Rojamdar & Work Charge Table
  dataSourceRojamadar = new MatTableDataSource(this.rojmadarWorkCharge);
  displayedRojamdarColumns = [
    'position',
    'data',
    'val1',
    'val2',
    'val3',
    'val4',
  ];

  // Outsourcing Table
  dataSource4 = new MatTableDataSource(this.ELEMENT_DATA4);
  dataSource4Columns = [
    'position',
    'expDet',
    'budEst'
  ];

  // Leave Encashment Table
  dataSource5 = new MatTableDataSource(this.ELEMENT_DATA5);
  dataSource5Columns = [
    'position',
    'name',
    'post',
    'bPay',
    'lEncash',
    'retire',
  ];

  districtDataTotal: any = {
    districtTotal: 0,
    gramTotal: 0,
    talukaTotal: 0,
    total: 0
  };

  // GIA  Section Jilla Table
  // tslint:disable-next-line:max-line-length
  districtDataSource = new MatTableDataSource(DISTRICT_ELEMENT_DATA.sort((a, b) => (a.districtName > b.districtName) ? 1 : ((b.districtName > a.districtName) ? -1 : 0)));
  districtColumns = ['position', 'district', 'expendature', 'talukaexpendature', 'gramexpendature'];

  // GIA  Section Corporation Table
  districtDataSource1 = new MatTableDataSource(
    DISTRICT_ELEMENT_DATA2.sort((a, b) =>
      a.districtName > b.districtName
        ? 1
        : b.districtName > a.districtName
          ? -1
          : 0
    )
  );

  districtColumns2 = [
    'position',
    'district',
    'expendature',
    'talukaexpendature',
    'gramexpendature'
  ];

// GIA Section State Table
  stateDataSource = new MatTableDataSource(
    DISTRICT_ELEMENT_DATA1.sort((a, b) =>
      a.districtName > b.districtName
        ? 1
        : b.districtName > a.districtName
          ? -1
          : 0
    )
  );

  stateColumns = [
    'position',
    'district',
    'propsedAmount',
  ];
// Info Section
  headerJson: HeaderElement[] = [
    {label: 'Financial Year', value: '2019-2020'},
    {label: 'Demand', value: '010: Other expenditure pertaining to Education Department'},
    {label: 'Book Publication Number', value: '04: Education Department'},
    {label: 'Revenue/Capital', value: 'Revenue'},
    {label: 'Major Head', value: '2205: Art and Culture'},
    {label: 'Sector', value: 'B0: B-Social Service'},
    {label: 'Sub Sector', value: 'a0: (A) Education, Sports, Art and Culture'},
    {label: 'Sub Major Head', value: '00: '},
    {label: 'Minor Head', value: '101: Fine Arts Education'},
    {label: 'Sub Head', value: '01: Grants to Sangeet Natya Bharati'},
    {label: 'Detailed Head', value: '00: Grants to Sangeet Natya Bharati'},
    {label: 'Charged/Voted', value: 'Voted'},
  ];

  isConsolidateVisible: Boolean = true;

  isConsolidateDetailView: Boolean = true;
  isObjectHeadWiseBreakupVisible: Boolean = false;
  readOnlyDetailDataSource: any;

  disableTabs: string;
  subscribeParams;

  selection = new SelectionModel<SchemeList>(true, []);

  percentage;
  detailHead;

  // Main Table
  consolidateDataSource = new MatTableDataSource(ELEMENT_DATA);
  consolidateColumns: string[] = ['objecthead', 'thirdlastyear', 'secondlastyear', 'lastyear', 'currentyear', 'last8month', 'first4month',
  'totalof8and4month', 'col6', 'col7', 'amountproposedbyDDO', 'amountWorkOutByFormula', 'amountproposedbyHOD', 'remarks', 'action'];
  // Main Recovery Table
  recoveryDataSource = new MatTableDataSource(recoveryData);

  // Breakup Table
  objectBreakupDataSource = new MatTableDataSource(OBJECT_HEAD_BREAKUP_DATA);

  objectHeadBreakupColumns = ['objecthead', 'thirdlastyear', 'secondlastyear', 'lastyear', 'currentyear', 'last8month', 'first4month',
  'totalof8and4month', 'col6', 'col7', 'amountproposedbyDDO', 'amountproposedbyHOD', 'remarks'];
  objectHeadBreakupColumns2 = ['objecthead', 'thirdlastyear', 'secondlastyear', 'lastyear', 'currentyear', 'last8month', 'first4month',
  'totalof8and4month', 'col6', 'col7', 'amountproposedbyDDO', 'amountWorkOutByFormula', 'amountproposedbyHOD', 'remarks', 'action'];
  consolidateColumns2: string[] = ['objecthead', 'thirdlastyear', 'secondlastyear', 'lastyear', 'currentyear', 'last8month', 'first4month',
  'totalof8and4month', 'col6', 'col7', 'amountproposedbyDDO', 'amountWorkOutByFormula', 'amountproposedbyHOD', 'remarks'];
  // BreakUp Recovery Table
  recoveryBreakupDataSource = new MatTableDataSource(recoveryData);

  // Attachments Table
  brwoseData: any[] = [{
    // dropDown: undefined,
    name: undefined,
    file: undefined,
  }];
  dataSourceBrowse = new MatTableDataSource(this.brwoseData);
  displayedBrowseColumns = ['position', 'attachmentType', 'fileName', 'browse', 'uploadedFileName', 'action'];

  fileBrowseIndex: number;

  date: any = new Date();
  attachmentType_list: any[] = [
    {value: '1', viewValue: 'Supporting Document'},
    {value: '2', viewValue: 'Sanction Order'},
    {value: '3', viewValue: 'Other'},
  ];

  // Object Head
  allMainCodes: any[] = [
    { value: '0101', viewValue: '0101 : Pay of Officers Including Grade Pay' },
    {
      value: '0102',
      viewValue: '0102 : Pay of Establishment Including Grade Pay'
    },
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

  // Object Class Type
  classType: any[] = [
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


  classOneCtrl: FormControl = new FormControl();

  codeCtrl: FormControl = new FormControl();

  attachmentTypeCodeCtrl: FormControl = new FormControl();
  filteredAttachmentTypeCode: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  _onDestroy = new Subject<void>();

  isExtendedRow = (index, item) => item.extend;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    public dialog: MatDialog,
    private el: ElementRef,
    private toastr: ToastrService,
  ) {
   }

  ngOnInit() {

    this.subscribeParams = this.route.params.subscribe(resRoute => {console.log(typeof(resRoute.id));
      this.disableTabs = resRoute.id;

    });

    if (this.disableTabs == 'true') {
      this.isConsolidateVisible = true;
    this.isConsolidateDetailView = true;
    }

    this.filteredAttachmentTypeCode.next(this.attachmentType_list.slice());
    this.attachmentTypeCodeCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(this.attachmentType_list, this.attachmentTypeCodeCtrl.value, this.filteredAttachmentTypeCode);
    });

    this.calculateAttachmentValue();
    this.calculateSubAttachmentValue();
  }

  // Annexure - 1 Functions
  calculateAttachmentValue() {
    let gazPerFilled = 0;
    let gazPerVacant = 0;
    let gazPerTotal1 = 0;
    let gazTempFilled = 0;
    let gazTempVacant = 0;
    let gazTempTotal2 = 0;
    let gazTotalA = 0;

    let nonGazPerFilled = 0;
    let nonGazPerVacant = 0;
    let nonGazPerTotal1 = 0;
    let nonGazTempFilled = 0;
    let nonGazTempVacant = 0;
    let nonGazTempTotal2 = 0;
    let nonGazTotalB = 0;

    for (let i = 1; i < this.displayedAttachmentColumns.length - 2; i++) {
      // tslint:disable-next-line:max-line-length
      this.DATA[4][this.displayedAttachmentColumns[i]] =
        Number(this.DATA[2][this.displayedAttachmentColumns[i]]) +
        Number(this.DATA[3][this.displayedAttachmentColumns[i]]);
      // tslint:disable-next-line:max-line-length
      this.DATA[8][this.displayedAttachmentColumns[i]] =
        Number(this.DATA[6][this.displayedAttachmentColumns[i]]) +
        Number(this.DATA[7][this.displayedAttachmentColumns[i]]);
      // tslint:disable-next-line:max-line-length
      this.DATA[9][this.displayedAttachmentColumns[i]] =
        Number(this.DATA[4][this.displayedAttachmentColumns[i]]) +
        Number(this.DATA[8][this.displayedAttachmentColumns[i]]);
      // tslint:disable-next-line:max-line-length
      this.DATA[14][this.displayedAttachmentColumns[i]] =
        Number(this.DATA[12][this.displayedAttachmentColumns[i]]) +
        Number(this.DATA[13][this.displayedAttachmentColumns[i]]);
      // tslint:disable-next-line:max-line-length
      this.DATA[18][this.displayedAttachmentColumns[i]] =
        Number(this.DATA[16][this.displayedAttachmentColumns[i]]) +
        Number(this.DATA[17][this.displayedAttachmentColumns[i]]);
      // tslint:disable-next-line:max-line-length
      this.DATA[19][this.displayedAttachmentColumns[i]] =
        Number(this.DATA[14][this.displayedAttachmentColumns[i]]) +
        Number(this.DATA[18][this.displayedAttachmentColumns[i]]);
      // tslint:disable-next-line:max-line-length
      this.DATA[20][this.displayedAttachmentColumns[i]] =
        Number(this.DATA[9][this.displayedAttachmentColumns[i]]) +
        Number(this.DATA[19][this.displayedAttachmentColumns[i]]);

      if (this.displayedAttachmentColumns[i] !== 'val1') {
        this.DATA[4][this.displayedAttachmentColumns[i]] = this.DATA[4][
          this.displayedAttachmentColumns[i]
        ].toFixed(2);
        this.DATA[8][this.displayedAttachmentColumns[i]] = this.DATA[8][
          this.displayedAttachmentColumns[i]
        ].toFixed(2);
        this.DATA[9][this.displayedAttachmentColumns[i]] = this.DATA[9][
          this.displayedAttachmentColumns[i]
        ].toFixed(2);
        this.DATA[14][this.displayedAttachmentColumns[i]] = this.DATA[14][
          this.displayedAttachmentColumns[i]
        ].toFixed(2);
        this.DATA[18][this.displayedAttachmentColumns[i]] = this.DATA[18][
          this.displayedAttachmentColumns[i]
        ].toFixed(2);
        this.DATA[19][this.displayedAttachmentColumns[i]] = this.DATA[19][
          this.displayedAttachmentColumns[i]
        ].toFixed(2);
        this.DATA[20][this.displayedAttachmentColumns[i]] = this.DATA[20][
          this.displayedAttachmentColumns[i]
        ].toFixed(2);
      }
      if (i > 1) {
        gazPerFilled =
          gazPerFilled +
          Number(this.DATA[2][this.displayedAttachmentColumns[i]]);
        gazPerVacant =
          gazPerVacant +
          Number(this.DATA[3][this.displayedAttachmentColumns[i]]);
        gazPerTotal1 =
          gazPerTotal1 +
          Number(this.DATA[4][this.displayedAttachmentColumns[i]]);

        gazTempFilled =
          gazTempFilled +
          Number(this.DATA[6][this.displayedAttachmentColumns[i]]);
        gazTempVacant =
          gazTempVacant +
          Number(this.DATA[7][this.displayedAttachmentColumns[i]]);
        gazTempTotal2 =
          gazTempTotal2 +
          Number(this.DATA[8][this.displayedAttachmentColumns[i]]);

        gazTotalA =
          gazTotalA + Number(this.DATA[9][this.displayedAttachmentColumns[i]]);

        nonGazPerFilled =
          nonGazPerFilled +
          Number(this.DATA[12][this.displayedAttachmentColumns[i]]);
        nonGazPerVacant =
          nonGazPerVacant +
          Number(this.DATA[13][this.displayedAttachmentColumns[i]]);
        nonGazPerTotal1 =
          nonGazPerTotal1 +
          Number(this.DATA[14][this.displayedAttachmentColumns[i]]);

        nonGazTempFilled =
          nonGazTempFilled +
          Number(this.DATA[16][this.displayedAttachmentColumns[i]]);
        nonGazTempVacant =
          nonGazTempVacant +
          Number(this.DATA[17][this.displayedAttachmentColumns[i]]);
        nonGazTempTotal2 =
          nonGazTempTotal2 +
          Number(this.DATA[18][this.displayedAttachmentColumns[i]]);

        nonGazTotalB =
          nonGazTotalB +
          Number(this.DATA[19][this.displayedAttachmentColumns[i]]);
      }
    }

    this.DATA[2].val7 = gazPerFilled.toFixed(2);
    this.DATA[3].val7 = gazPerVacant.toFixed(2);
    this.DATA[4].val7 = gazPerTotal1.toFixed(2);
    this.DATA[6].val7 = gazTempFilled.toFixed(2);
    this.DATA[7].val7 = gazTempVacant.toFixed(2);
    this.DATA[8].val7 = gazTempTotal2.toFixed(2);
    this.DATA[9].val7 = gazTotalA.toFixed(2);
    this.DATA[12].val7 = nonGazPerFilled.toFixed(2);
    this.DATA[13].val7 = nonGazPerVacant.toFixed(2);
    this.DATA[14].val7 = nonGazPerTotal1.toFixed(2);
    this.DATA[16].val7 = nonGazTempFilled.toFixed(2);
    this.DATA[17].val7 = nonGazTempVacant.toFixed(2);
    this.DATA[18].val7 = nonGazTempTotal2.toFixed(2);
    this.DATA[19].val7 = nonGazTotalB.toFixed(2);
    this.DATA[20].val7 = (gazTotalA + nonGazTotalB).toFixed(2);

    // this.DATA[28].val1 = (Number(this.DATA[23].val1) + Number(this.DATA[24].val1)
    //   + Number(this.DATA[25].val1) + Number(this.DATA[26].val1) + Number(this.DATA[27].val1)).toFixed(2);
    // this.DATA[28].val2 = (Number(this.DATA[23].val2) + Number(this.DATA[24].val2)
    //   + Number(this.DATA[25].val2) + Number(this.DATA[26].val2) + Number(this.DATA[27].val2)).toFixed(2);
    // this.DATA[28].val4 = (Number(this.DATA[23].val4) + Number(this.DATA[24].val4)
    //   + Number(this.DATA[25].val4) + Number(this.DATA[26].val4) + Number(this.DATA[27].val4)).toFixed(2);
    // this.DATA[28].val5 = (Number(this.DATA[23].val5) + Number(this.DATA[24].val5)
    //   + Number(this.DATA[25].val5) + Number(this.DATA[26].val5) + Number(this.DATA[27].val5)).toFixed(2);
  }

  calculateSubAttachmentValue() {
    this.attachmentSubTable[5].val1 = (
      Number(this.attachmentSubTable[0].val1) +
      Number(this.attachmentSubTable[1].val1) +
      Number(this.attachmentSubTable[2].val1) +
      Number(this.attachmentSubTable[3].val1) +
      Number(this.attachmentSubTable[4].val1)
    ).toString();
    this.attachmentSubTable[5].val2 = (
      Number(this.attachmentSubTable[0].val2) +
      Number(this.attachmentSubTable[1].val2) +
      Number(this.attachmentSubTable[2].val2) +
      Number(this.attachmentSubTable[3].val2) +
      Number(this.attachmentSubTable[4].val2)
    ).toFixed(2);
    this.attachmentSubTable[5].val4 = (
      Number(this.attachmentSubTable[0].val4) +
      Number(this.attachmentSubTable[1].val4) +
      Number(this.attachmentSubTable[2].val4) +
      Number(this.attachmentSubTable[3].val4) +
      Number(this.attachmentSubTable[4].val4)
    ).toString();
    this.attachmentSubTable[5].val5 = (
      Number(this.attachmentSubTable[0].val5) +
      Number(this.attachmentSubTable[1].val5) +
      Number(this.attachmentSubTable[2].val5) +
      Number(this.attachmentSubTable[3].val5) +
      Number(this.attachmentSubTable[4].val5)
    ).toFixed(2);
  }

  // Main Table Delete
  deleteConsolidate(index) {
    this.consolidateDataSource.data.splice(index, 1);
    this.consolidateDataSource = new MatTableDataSource(
      this.consolidateDataSource.data
    );
  }
// Main Table Recovery Delete
  deleteConsolidateRec(index) {
    this.recoveryDataSource.data.splice(index, 1);
    this.recoveryDataSource = new MatTableDataSource(
      this.recoveryDataSource.data
    );
  }
 // Breakup Table Delete
  deleteBreakup(index) {
    this.objectBreakupDataSource.data.splice(index, 1);
    this.objectBreakupDataSource = new MatTableDataSource(
      this.objectBreakupDataSource.data
    );
  }
 // Breakup Recovery Table Delete
  deleteBreakupRec(index) {
    this.recoveryBreakupDataSource.data.splice(index, 1);
    this.recoveryBreakupDataSource = new MatTableDataSource(
      this.recoveryBreakupDataSource.data
    );
  }

  // Go Back
  goToSchemeList() {
    // Go to Original View
    if (this.isObjectHeadWiseBreakupVisible) {
      this.isConsolidateVisible = true;
      this.isObjectHeadWiseBreakupVisible = false;
      this.isConsolidateDetailView = true;
      const pdata = ELEMENT_DATA;
      this.consolidateDataSource.data = pdata;
    } else if (this.isConsolidateDetailView) {
      this.gotoListing();
    }
  }

  getTabIndex (tabIndex) {
    this.selectedIndex = tabIndex;
  }

  goToDashboard () {
  }

  gotoListing() {
    this.router.navigate(['./budget/standing-charge-consolidate-list']);
  }

  // Decimal number to 2 upto Digit
  decimalKeyPress(event: any) {
    const pattern = /^\d+(\.\d{0,2})?$/;
    const inputChar = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    // If the key is backspace, tab, left, right or delete
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

  // To fixed 2 decimal Point
  decimalPoint(data, key) {
    if (data[key]) {
      data[key] = Number(data[key]).toFixed(2);
    }
  }

  // Functions to calculate Year Starts
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

  loadPreviousYear() {
    const year: any[] = this.headerJson[0].value.split('-');
    return (Number(year[0]) - 1).toString() + ' - ' +  year[0].toString();
  }

  loadCurrentYear() {
    return this.headerJson[0].value;
  }

  currentYear() {
    return this.headerJson[0].value;
  }
// Functions to calculate Year Ends

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

  // Calculation functions for Oject Head Table Starts
  // For Main
  calcAmtProposedByHOD(data): number {
    let calcAmtProposedByHOD = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.consolidateDataSource.data.forEach((element, index) => {
      calcAmtProposedByHOD = calcAmtProposedByHOD + Number(element.amountproposedbyHOD);
    });
    return calcAmtProposedByHOD !== 0 ? calcAmtProposedByHOD : null;
  }
  //  For BreakUp
  calcBreakupAmtProposedByHOD(): number {
    let calcBreakupAmtProposedByHOD = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.objectBreakupDataSource.data.forEach((element, index) => {
      calcBreakupAmtProposedByHOD = calcBreakupAmtProposedByHOD + Number(element.amountproposedbyHOD);
    });
    return calcBreakupAmtProposedByHOD !== 0 ? calcBreakupAmtProposedByHOD : null;
  }
  //  For Recovery
  calcNetAmtProposedByHOD(data): number {
    let calcNetAmtProposedByHOD = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.recoveryDataSource.data.forEach((element, index) => {
      calcNetAmtProposedByHOD = calcNetAmtProposedByHOD + Number(element.amountproposedbyHOD);
    });
    return (this.calcAmtProposedByHOD(data) - calcNetAmtProposedByHOD)
    !== 0 ? (this.calcAmtProposedByHOD(data) - calcNetAmtProposedByHOD) : null;
  }

  calcBreakupNetAmtProposedByHOD(data): number {
    let calcBreakupNetAmtProposedByHOD = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.recoveryBreakupDataSource.data.forEach((element, index) => {
      calcBreakupNetAmtProposedByHOD = calcBreakupNetAmtProposedByHOD + Number(element.amountproposedbyHOD);
    });
    return (this.calcBreakupAmtProposedByHOD() - calcBreakupNetAmtProposedByHOD) !== 0  ?
    (this.calcBreakupAmtProposedByHOD() - calcBreakupNetAmtProposedByHOD) : null;
  }

  calcAmtProposedByDDO(): number {
    let calcAmtProposedByDDO = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.consolidateDataSource.data.forEach((element, index) => {
      calcAmtProposedByDDO = calcAmtProposedByDDO + Number(element.amountproposedbyDDO);
    });
    return calcAmtProposedByDDO;
  }
  amountWorkOutBy(): number {
    let amountWorkOutBy = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.consolidateDataSource.data.forEach((element) => {
      amountWorkOutBy = amountWorkOutBy + Number((element.objecthead == '0104' ? element.lastyear : element.amountproposedbyDDO))
       + (Number((element.objecthead == '0104' ? element.lastyear : element.amountproposedbyDDO)) * Number(element.percentage) / 100);
    });
    return amountWorkOutBy;
  }
  calcNetamountWorkOutBy(): number {
    let calcNetamountWorkOutBy = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.recoveryDataSource.data.forEach((element) => {
      // tslint:disable-next-line: max-line-length
      calcNetamountWorkOutBy = calcNetamountWorkOutBy + Number((element.objecthead == '0104' ? element.lastyear : element.amountproposedbyDDO))
       + (Number((element.objecthead == '0104' ? element.lastyear : element.amountproposedbyDDO)) * Number(element.percentage) / 100);
    });
    return (this.amountWorkOutBy() - calcNetamountWorkOutBy);
  }
  calcNetAmtProposedByDDO(): number {
    let calcNetAmtProposedByDDO = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.recoveryDataSource.data.forEach((element, index) => {
      calcNetAmtProposedByDDO = calcNetAmtProposedByDDO + Number(element.amountproposedbyDDO);
    });

    return (this.calcAmtProposedByDDO() - calcNetAmtProposedByDDO);
  }

  calcBreakupNetAmtProposedByDDO(): number {
    let calcBreakupNetAmtProposedByDDO = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.recoveryBreakupDataSource.data.forEach((element, index) => {
      calcBreakupNetAmtProposedByDDO = calcBreakupNetAmtProposedByDDO + Number(element.amountproposedbyDDO);
    });

    return (this.calcAmtProposedByDDO() - calcBreakupNetAmtProposedByDDO);
  }

  calcCol7_3(): number {
    let calcCol7_3 = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.consolidateDataSource.data.forEach((element, index) => {
      calcCol7_3 = calcCol7_3 + (Number(element.first4month) * 3);
    });
    return calcCol7_3;
  }

  calcNetCol7_3(): number {
    let calcNetCol7_3 = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.recoveryDataSource.data.forEach((element, index) => {
      calcNetCol7_3 = calcNetCol7_3 + (Number(element.first4month) * 3);
    });

    return (this.calcCol7_3() - calcNetCol7_3);
  }

  calcBreakupNetCol7_3(): number {
    let calcBreakupNetCol7_3 = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.recoveryBreakupDataSource.data.forEach((element, index) => {
      calcBreakupNetCol7_3 = calcBreakupNetCol7_3 + (Number(element.first4month) * 3);
    });

    return (this.calcCol7_3() - calcBreakupNetCol7_3);
  }

  calcCol6_15(): number {
    let calcCol6_15 = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.consolidateDataSource.data.forEach((element, index) => {
      calcCol6_15 = calcCol6_15 + (Number(element.last8month) * 1.5);
    });
    return calcCol6_15;
  }

  calcNetCol6_15(): number {
    let calcNetCol6_15 = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.recoveryDataSource.data.forEach((element, index) => {
      calcNetCol6_15 = calcNetCol6_15 + (Number(element.last8month) * 1.5);
    });

    return (this.calcCol6_15() - calcNetCol6_15);
  }

  calcBreakupNetCol6_15(): number {
    let calcBreakupNetCol6_15 = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.recoveryBreakupDataSource.data.forEach((element, index) => {
      calcBreakupNetCol6_15 = calcBreakupNetCol6_15 + (Number(element.last8month) * 1.5);
    });

    return (this.calcCol6_15() - calcBreakupNetCol6_15);
  }

  calcTotalof8and4Month(): number {
    let calcTotalof8and4Month = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.consolidateDataSource.data.forEach((element, index) => {
      calcTotalof8and4Month = calcTotalof8and4Month + (Number(element.last8month) + Number(element.first4month));
    });
    return calcTotalof8and4Month;
  }

  calcNetTotalof8and4Month(): number {
    let calcNetTotalof8and4Month = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.recoveryDataSource.data.forEach((element, index) => {
      calcNetTotalof8and4Month = calcNetTotalof8and4Month + (Number(element.last8month) + Number(element.first4month));
    });

    return (this.calcTotalof8and4Month() - calcNetTotalof8and4Month);
  }

  calcBreakupNetTotalof8and4Month(): number {
    let calcBreakupNetTotalof8and4Month = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.recoveryBreakupDataSource.data.forEach((element, index) => {
      calcBreakupNetTotalof8and4Month = calcBreakupNetTotalof8and4Month + (Number(element.last8month) + Number(element.first4month));
    });

    return (this.calcTotalof8and4Month() - calcBreakupNetTotalof8and4Month);
  }

  calcFirst4Month(): number {
    let calcFirst4Month = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.consolidateDataSource.data.forEach((element, index) => {
      calcFirst4Month = calcFirst4Month + Number(element.first4month);
    });
    return calcFirst4Month;
  }

  calcNetFirst4Month(): number {
    let calcNetFirst4Month = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.recoveryDataSource.data.forEach((element, index) => {
      calcNetFirst4Month = calcNetFirst4Month + Number(element.first4month);
    });

    return (this.calcFirst4Month() - calcNetFirst4Month);
  }

  calcBreakupNetFirst4Month(): number {
    let calcBreakupNetFirst4Month = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.recoveryBreakupDataSource.data.forEach((element, index) => {
      calcBreakupNetFirst4Month = calcBreakupNetFirst4Month + Number(element.first4month);
    });

    return (this.calcFirst4Month() - calcBreakupNetFirst4Month);
  }

  calcLast8Month(): number {
    let calcLast8Month = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.consolidateDataSource.data.forEach((element, index) => {
      calcLast8Month = calcLast8Month + Number(element.last8month);
    });
    return calcLast8Month;
  }

  calcNetLast8Month(): number {
    let calcNetLast8Month = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.recoveryDataSource.data.forEach((element, index) => {
      calcNetLast8Month = calcNetLast8Month + Number(element.last8month);
    });

    return (this.calcLast8Month() - calcNetLast8Month);
  }

  calcBreakupNetLast8Month(): number {
    let calcBreakupNetLast8Month = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.recoveryBreakupDataSource.data.forEach((element, index) => {
      calcBreakupNetLast8Month = calcBreakupNetLast8Month + Number(element.last8month);
    });

    return (this.calcLast8Month() - calcBreakupNetLast8Month);
  }

  calcCurrentYear(): number {
    let calcCurrentYear = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.consolidateDataSource.data.forEach((element, index) => {
      calcCurrentYear = calcCurrentYear + Number(element.currentyear);
    });
    return calcCurrentYear;
  }

  calcNetCurrentYear(): number {
    let calcNetCurrentYear = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.recoveryDataSource.data.forEach((element, index) => {
      calcNetCurrentYear = calcNetCurrentYear + Number(element.currentyear);
    });

    return (this.calcCurrentYear() - calcNetCurrentYear);
  }

  calcBreakupNetCurrentYear(): number {
    let calcBreakupNetCurrentYear = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.recoveryBreakupDataSource.data.forEach((element, index) => {
      calcBreakupNetCurrentYear = calcBreakupNetCurrentYear + Number(element.currentyear);
    });

    return (this.calcCurrentYear() - calcBreakupNetCurrentYear);
  }

  calcLastYear(): number {
    let calcLastYear = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.consolidateDataSource.data.forEach((element, index) => {
      calcLastYear = calcLastYear + Number(element.lastyear);
    });
    return calcLastYear;
  }

  calcNetLastYear(): number {
    let calcNetLastYear = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.recoveryDataSource.data.forEach((element, index) => {
      calcNetLastYear = calcNetLastYear + Number(element.lastyear);
    });

    return (this.calcLastYear() - calcNetLastYear);
  }

  calcBreakupNetLastYear(): number {
    let calcBreakupNetLastYear = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.recoveryBreakupDataSource.data.forEach((element, index) => {
      calcBreakupNetLastYear = calcBreakupNetLastYear + Number(element.lastyear);
    });

    return (this.calcLastYear() - calcBreakupNetLastYear);
  }

  calcSecondLastYear(): number {
    let calcSecondLastYear = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.consolidateDataSource.data.forEach((element, index) => {
      calcSecondLastYear = calcSecondLastYear + Number(element.secondlastyear);
    });
    return calcSecondLastYear;
  }
  calcAmtProposedBy(): number {
    let calcSecondLastYear = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.consolidateDataSource.data.forEach((element, index) => {
      calcSecondLastYear = calcSecondLastYear + Number(element.secondlastyear);
    });
    return calcSecondLastYear;
  }
  calcNetSecondLastYear(): number {
    let calcNetSecondLastYear = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.recoveryDataSource.data.forEach((element, index) => {
      calcNetSecondLastYear = calcNetSecondLastYear + Number(element.secondlastyear);
    });

    return (this.calcSecondLastYear() - calcNetSecondLastYear);
  }

  calcBreakupNetSecondLastYear(): number {
    let calcBreakupNetSecondLastYear = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.recoveryBreakupDataSource.data.forEach((element, index) => {
      calcBreakupNetSecondLastYear = calcBreakupNetSecondLastYear + Number(element.secondlastyear);
    });

    return (this.calcSecondLastYear() - calcBreakupNetSecondLastYear);
  }

  calcThirdLastYear(): number {
    let calcThirdLastYear = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.consolidateDataSource.data.forEach((element, index) => {
      calcThirdLastYear = calcThirdLastYear + Number(element.thirdlastyear);
    });
    return calcThirdLastYear;
  }


  calcHODProposedAmount(data): number {
    let calcHODProposedAmount = 0;
    const calcAmtProposedByHOD = this.calcAmtProposedByHOD([]);

    this.readOnlyDetailDataSource.data.forEach((_element, index) => {
      if (data && (_element.objecthead === data.objecthead)) {
        _element.amountproposedbyHOD = calcAmtProposedByHOD ;
      }
    });
    // tslint:disable-next-line: no-shadowed-variable
    this.objectBreakupDataSource.data.forEach((element, index) => {
      calcHODProposedAmount = calcHODProposedAmount + Number(element.amountproposedbyHOD);
    });

    this.consolidateDataSource.data.forEach((el, idx) => {
      if (data && (el.objecthead === data.objecthead)) {
        el.amountproposedbyHOD = calcHODProposedAmount;
      }
    });
    return calcHODProposedAmount;
  }
    // Calculation functions for Oject Head Table Ends


  // GIA Table Functions Starts
  calcDistrictProposedAmount(data) {
    let calcDistrictProposedAmount = 0;
    let amountDiff = 0;
    const calcHODProposedAmount = this.calcHODProposedAmount([]);

    // tslint:disable-next-line:no-shadowed-variable
    this.readOnlyDetailDataSource.data.forEach((element, index) => {
      amountDiff = (((calcHODProposedAmount - Number(element.amountproposedbyDDO)) * 100 ) / Number(element.amountproposedbyDDO));
    });

    calcDistrictProposedAmount = ((data.expendature * amountDiff) / 100) + data.expendature;
    return calcDistrictProposedAmount;
  }

  calcDistrictAmt() {
    let calc = 0, temp = 0;
    this.districtDataSource.data.forEach(obj => {
      calc = 0;
      calc = this.calcDistrictProposedAmount(obj);
      temp = +(temp + calc);
    });
    return temp;
  }

  calcTalukaProposedAmount(data) {
    let calcTalukaProposedAmount = 0;
    let amountDiff = 0;
    const calcHODProposedAmount = this.calcHODProposedAmount([]);

    // tslint:disable-next-line:no-shadowed-variable
    this.readOnlyDetailDataSource.data.forEach((element, index) => {
      amountDiff = (((calcHODProposedAmount - Number(element.amountproposedbyDDO)) * 100 ) / Number(element.amountproposedbyDDO));
    });

    calcTalukaProposedAmount = ((data.talukaexpendature * amountDiff) / 100) + data.talukaexpendature;
    return calcTalukaProposedAmount;
  }
  calcTalukaAmt() {
    let calc = 0, temp = 0;
    this.districtDataSource.data.forEach(obj => {
      calc = 0;
      calc = this.calcTalukaProposedAmount(obj);
      temp = +(temp + calc);
    });
    return temp;
  }

  calcGramProposedAmount(data) {
    let calcGramProposedAmount = 0;
    let amountDiff = 0;
    const calcHODProposedAmount = this.calcHODProposedAmount([]);

    // tslint:disable-next-line:no-shadowed-variable
    this.readOnlyDetailDataSource.data.forEach((element, index) => {
      amountDiff = (((calcHODProposedAmount - Number(element.amountproposedbyDDO)) * 100 ) / Number(element.amountproposedbyDDO));
    });

    calcGramProposedAmount = ((data.gramexpendature * amountDiff) / 100) + data.gramexpendature;
    return calcGramProposedAmount;
  }

  calcGramAmt() {
    let calc = 0, temp = 0;
    this.districtDataSource.data.forEach(obj => {
      calc = 0;
      calc = this.calcGramProposedAmount(obj);
      temp = +(temp + calc);
    });
    return temp;
  }

  calcNetThirdLastYear(): number {
    let calcNetThirdLastYear = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.recoveryDataSource.data.forEach((element, index) => {
      calcNetThirdLastYear = calcNetThirdLastYear + Number(element.thirdlastyear);
    });

    return (this.calcThirdLastYear() - calcNetThirdLastYear);
  }
  calcBreakupNetThirdLastYear(): number {
    let calcBreakupNetThirdLastYear = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.recoveryBreakupDataSource.data.forEach((element, index) => {
      calcBreakupNetThirdLastYear = calcBreakupNetThirdLastYear + Number(element.thirdlastyear);
    });

    return (this.calcThirdLastYear() - calcBreakupNetThirdLastYear);
  }
  // GIA Table Functions Ends

// For Proposed Amount in %
  basicPay(value, calcAmtProposedByDDO) {
    const totalValue = (this.percentage);

     const totper = (this.calcAmtProposedByDDO() * (this.percentage) / 100);
      const totDiff = totper + Number(this.calcAmtProposedByDDO());
      this.amount =  totDiff;

    this.consolidateDataSource.data.forEach((element, index) => {
      const perDDO = (Number(element.amountproposedbyDDO) * (Number(totalValue) / 100));
      element.amountproposedbyHOD =  ((Number(element.amountproposedbyDDO) + Number(perDDO)));
    });

  }

  // For Proposed Amount in Value
  amountValue(value, calcAmtProposedByDDO, dataLenght) {
    dataLenght = 0;
    const totalValue = (this.amount);
      const perofValue = (Number(this.amount) / (Number(this.calcAmtProposedByDDO())));
      console.log(perofValue);
      const Per = ((perofValue * 100) - 100);
      this.percentage = Per.toFixed(2);
       this.consolidateDataSource.data.forEach((element) => {
        const amountproposedHOD = ((Number(element.amountproposedbyDDO) * Number(perofValue)));
        element.amountproposedbyHOD = amountproposedHOD.toFixed(2)as any;
      });
  }

  // tslint:disable-next-line:no-shadowed-variable
  showObjectHeadBrakup(element) {
    this.isObjectHeadWiseBreakupVisible = true;
    this.isConsolidateDetailView = false;
    this.readOnlyDetailDataSource = new MatTableDataSource(
      ELEMENT_DATA.filter(item => item.objecthead.indexOf(element.objecthead) > -1)
    );
  }

  submitToNextLevel(): void {
    const dialogRef = this.dialog.open(StandingChargeForwardDialogComponent, {

      // StandingChargeConsolidateForwardDialogComponent
      width: '2700px',
      height: '600px'
      // data: employees
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

// Open Breakup Section
  viewBreakup (element, index) {

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

    console.log(element);
    this.isBreakupVisible = true;
    this.isObjectHeadWiseBreakupVisible = true;
    this.readOnlyDetailDataSource = new MatTableDataSource(
      ELEMENT_DATA.filter(item => item.objecthead.indexOf(element.objecthead) > -1)
    );
    const data = this.consolidateDataSource.data.filter((x, i) => i === index);
    this.consolidateDataSource.data = data;
  }

  // Open History Popup
  openHistory(data) {
    data.isSelected = true;
    this.showHistoryDialog();
  }

  showHistoryDialog(): void {

    const dialogData = new ConfirmDialogModel();

    const dialogRef = this.dialog.open(StandingChargeConsolidateHistoryComponent, {
      maxWidth: '400px',
      data: dialogData
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      console.log(dialogResult);
    });
  }

  showConfirmationPopup() {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
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


  addBrowse() {
    if (this.dataSourceBrowse) {
      const data = this.dataSourceBrowse.data[this.dataSourceBrowse.data.length - 1];
      if (data && data.name && data.file) {
          const p_data = this.dataSourceBrowse.data;
          p_data.push({
            // dropDown: undefined,
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
// Rojamdar & Work Charge Section Functions
tot3() {
    let amountExp = 0;
    this.dataSourceRojamadar.data.forEach((element) => {
      amountExp =  amountExp + Number(element.val2) + Number(element.val3);
    });
    return amountExp;
  }

  OtherAllowance() {
    let val3 = 0;
    this.dataSourceRojamadar.data.forEach((element) => {
      val3 = val3 + Number(element.val3);
    });
    return val3;
  }

  CountTotalSalaries() {
    let val2 = 0;
    this.dataSourceRojamadar.data.forEach((element) => {
      val2 = val2 + Number(element.val2);
    });
    return val2;
  }

  CountTotalPost() {
    let val1 = 0;
    this.dataSourceRojamadar.data.forEach((element) => {
      val1 = val1 + Number(element.val1);
    });
    return val1;
  }
// Outsourcing Section Functions
  tot4() {
    let amountExp = 0;
    this.dataSource4.data.forEach((element) => {
      amountExp =  amountExp + Number(element.budEst);
    });
    return amountExp;
  }

  // Leave Encashment Section Functions
  basicPay2() {
    let bPay = 0;
    this.dataSource5.data.forEach((element) => {
      bPay = bPay + Number(element.bPay);
    });
    return bPay;
  }

  LeaveEncashment() {
    let lEncash = 0;
    this.dataSource5.data.forEach((element) => {
      lEncash = lEncash + Number(element.lEncash);
    });
    return lEncash;
  }
// GIA Functions
  corporation() {
    let amountExp = 0;
    this.districtDataSource1.data.forEach((element) => {
      amountExp =  amountExp + Number(element.expendature);
    });
    return amountExp;
  }
  municipal() {
    let amountExp = 0;
    this.districtDataSource1.data.forEach((element) => {
      amountExp =  amountExp + Number(element.talukaexpendature);
    });
    return amountExp;
  }
  notifiedArea() {
    let amountExp = 0;
    this.districtDataSource1.data.forEach((element) => {
      amountExp =  amountExp + Number(element.gramexpendature);
    });
    return amountExp;
  }

}

// WorkFlow Dialog

@Component({
  selector: 'app-standing-charge-consolidate-forward-dialog',
  templateUrl: 'standing-charge-consolidate-forward-dialog.html',
})
export class StandingChargeConsolidateForwardDialogComponent implements OnInit {

  actionForm: FormGroup;

  errorMessages = {
    FIN_YEAR: 'Please select any Financial Year',
    DEPARTMENT: 'Please select any Department',
  };

  action_list: any[] = [
    { value: 'Forward', viewValue: 'Forward' },
    { value: 'Return', viewValue: 'Return' },
    { value: 'Approve', viewValue: 'Approve' },
  ];

  forwardTo_list: any[] = [
    { value: '1', viewValue: 'Satendra Zala' },
    { value: '2', viewValue: 'Hardik Chaudhary' },
    { value: '3', viewValue: 'C.K Brahmbhatt' },
  ];

  actionCtrl: FormControl = new FormControl();
  filteredAction: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  forwardToCodeCtrl: FormControl = new FormControl();
  filteredforwardToCode: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  private _onDestroy = new Subject<void>();

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<StandingChargeConsolidateForwardDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  filteredOptions: Observable<string[]>;
  options: any;
  myControl = new FormControl();
  additionalText = new FormControl();

  ngOnInit() {
    this.createForm();
    if (this.action_list) {
      this.filteredAction.next(this.action_list.slice());
    }
    (this.actionCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(this.action_list, this.actionCtrl.value, this.filteredAction);
      }));
    if (this.forwardTo_list) {
      this.filteredforwardToCode.next(this.forwardTo_list.slice());
    }
    (this.forwardToCodeCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(this.forwardTo_list, this.forwardToCodeCtrl.value, this.filteredforwardToCode);
      }));
    // console.log('data', this.data);
    this.options = this.data;
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
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

  createForm() {
    this.actionForm = this.fb.group({
      actionCode: ['', Validators.required],
      forwardToCode: ['', Validators.required],
    });
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  forwardConsolidate() {

  }

}


@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onCancel() {

  }

  onSave() {

  }





}

