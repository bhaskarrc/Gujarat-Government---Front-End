import { startWith, map, takeUntil } from 'rxjs/operators';
import { Component, OnInit, ViewChild, ElementRef, OnDestroy, Output, Inject } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable, ReplaySubject, Subject, from, Subscription, BehaviorSubject } from 'rxjs';
import { COMMA, ENTER, TAB } from '@angular/cdk/keycodes';
import {
  MatDialog,
  MatAutocomplete,
  MatChipInputEvent,
  MatAutocompleteSelectedEvent,
  MatTableDataSource,
  MatSelect,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatBottomSheet,
  MatBottomSheetRef,
} from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';
import { DialogData } from 'src/app/model/standing-charge';
import { FormC, District } from '../../../model/new-item-estimate';
import { HeaderElement, CommonList, CommonListing } from '../../../model/common-listing';
import { BudgetFormType } from 'src/app/model/budget';
import { ConfirmDialogModel, StandingChargeConsolidateHistoryComponent } from '../../standing-charge-consolidation/standing-charge-consolidate-history/standing-charge-consolidate-history.component';

declare function SetEnglish();
declare function SetGujarati();
export interface DistrictElement1 {
  id: number;
  districtName: string;
  expendature: number | '';
  propsedAmount: number | '';


}

export class FormC1 {
  objecthead: string;
  recurrentAmount: number;
  nonRecurrentAmount: number;
  budgetEstimateNextYear: number;
  ultimateAnnualRecurrentAmount: number;
  remarks: string;
  toolTipData: string;
}
const ELEMENT_DATA_C3: FormC[] = [];
const ELEMENT_DATA_C2: FormC1[] = [
  { objecthead: '0101', recurrentAmount: 60, nonRecurrentAmount: 101, budgetEstimateNextYear: 251,
   ultimateAnnualRecurrentAmount: 356, remarks: '', toolTipData: '0101 : Pay of Officers Including Grade Pay'
  },
  { objecthead: '0102', recurrentAmount: 65, nonRecurrentAmount: 102, budgetEstimateNextYear: 251,
   ultimateAnnualRecurrentAmount: 456, remarks: '', toolTipData: '0102 : Pay of Establishment Including Grade Pay'
  },
  { objecthead: '0103', recurrentAmount: 70, nonRecurrentAmount: 103, budgetEstimateNextYear: 251,
   ultimateAnnualRecurrentAmount: 213, remarks: '', toolTipData: '0103 : Dearness Allowance'
  },

  { objecthead: '3131', recurrentAmount: 60, nonRecurrentAmount: 101, budgetEstimateNextYear: 251,
   // tslint:disable-next-line: max-line-length
   ultimateAnnualRecurrentAmount: 356, remarks: '', toolTipData: '3131 : Grants-in-Aid General to Panchayats pertaining to pay and allowances'
  },
  { objecthead: '3132', recurrentAmount: 65, nonRecurrentAmount: 102, budgetEstimateNextYear: 251,
   ultimateAnnualRecurrentAmount: 456, remarks: '', toolTipData: '3132 : Grants-in-Aid General to Panchayats pertaining'
  },
  { objecthead: '3133', recurrentAmount: 70, nonRecurrentAmount: 103, budgetEstimateNextYear: 251,
   ultimateAnnualRecurrentAmount: 213, remarks: '', toolTipData: '3133 : Anand Agricultural University'
  },
  { objecthead: '3135', recurrentAmount: 70, nonRecurrentAmount: 103, budgetEstimateNextYear: 251,
   ultimateAnnualRecurrentAmount: 213, remarks: '', toolTipData: '3135 : Anand Agricultural University'
  },
  { objecthead: '3135-13', recurrentAmount: 85, nonRecurrentAmount: 104, budgetEstimateNextYear: 251,
   ultimateAnnualRecurrentAmount: 454, remarks: '', toolTipData: '3135-14 : Junagadh Agricultural University'
  },
  { objecthead: '3135-14', recurrentAmount: 51, nonRecurrentAmount: 105, budgetEstimateNextYear: 251,
   ultimateAnnualRecurrentAmount: 544, remarks: '', toolTipData: '3135-15 : Navsari Agricultural University'
  },
  { objecthead: '3135-15', recurrentAmount: 68, nonRecurrentAmount: 106, budgetEstimateNextYear: 251,
   ultimateAnnualRecurrentAmount: 541, remarks: '', toolTipData: '3135-16 : Dantiwada Agricultural University'
  },
  { objecthead: '3135-16', recurrentAmount: 87, nonRecurrentAmount: 107, budgetEstimateNextYear: 251,
   ultimateAnnualRecurrentAmount: 844, remarks: '', toolTipData: '3200 : Contributions'
  },
  { objecthead: '3241', recurrentAmount: 54, nonRecurrentAmount: 108, budgetEstimateNextYear: 251,
   ultimateAnnualRecurrentAmount: 111, remarks: '', toolTipData: '3241 : Contributions (a) To Panchayats'
  },
  { objecthead: '3243', recurrentAmount: 63, nonRecurrentAmount: 109, budgetEstimateNextYear: 251,
   ultimateAnnualRecurrentAmount: 544, remarks: '', toolTipData: '3243 : Contributions (b) To Local Bodies'
  },
  { objecthead: '3351', recurrentAmount: 75, nonRecurrentAmount: 110, budgetEstimateNextYear: 251,
   ultimateAnnualRecurrentAmount: 544, remarks: '', toolTipData: '3351 : Subsidies (a) To Panchayats'
  },
  { objecthead: '3353', recurrentAmount: 96, nonRecurrentAmount: 111, budgetEstimateNextYear: 251,
   ultimateAnnualRecurrentAmount: 874, remarks: '', toolTipData: '3353 : Subsidies (b) To Local Bodies'
  },
  { objecthead: '3561', recurrentAmount: 56, nonRecurrentAmount: 112, budgetEstimateNextYear: 251,
   ultimateAnnualRecurrentAmount: 812, remarks: '', toolTipData: '3561 : Grants for creation of Capital Assets to Panchayats'
  },
  { objecthead: '3563', recurrentAmount: 84, nonRecurrentAmount: 113, budgetEstimateNextYear: 251,
   ultimateAnnualRecurrentAmount: 248, remarks: '', toolTipData: '3563 : Grants for creation of Capital Assets to Local Bodies'
   }
];



const DISTRICT_ELEMENT_DATA: District[] = [
  { id: 1, expendature: 0.00, districtName: 'Ahmedabad', talukaexpendature: 0.00, gramexpendature: 0.00 },
  { id: 2, expendature: 0.00, districtName: 'Vadodara', talukaexpendature: 0.00, gramexpendature: 0.00 },
  { id: 3, expendature: 0.00, districtName: 'Anand', talukaexpendature: 0.00, gramexpendature: 0.00 },
  { id: 4, expendature: 0.00, districtName: 'Chhota Udaipur', talukaexpendature: 0.00, gramexpendature: 0.00 },
  { id: 5, expendature: 0.00, districtName: 'Dahod', talukaexpendature: 0.00, gramexpendature: 0.00 },
  { id: 6, expendature: 0.00, districtName: 'Kheda', talukaexpendature: 0.00, gramexpendature: 0.00 },
  { id: 7, expendature: 0.00, districtName: 'Mahisagar', talukaexpendature: 0.00, gramexpendature: 0.00 },
  { id: 8, expendature: 0.00, districtName: 'Panchmahal', talukaexpendature: 0.00, gramexpendature: 0.00 },
  { id: 9, expendature: 0.00, districtName: 'Gandhinagar', talukaexpendature: 0.00, gramexpendature: 0.00 },
  { id: 10, expendature: 0.00, districtName: 'Aravalli', talukaexpendature: 0.00, gramexpendature: 0.00 },
  { id: 11, expendature: 0.00, districtName: 'Banaskantha', talukaexpendature: 0.00, gramexpendature: 0.00 },
  { id: 12, expendature: 0.00, districtName: 'Mehsana', talukaexpendature: 0.00, gramexpendature: 0.00 },
  { id: 13, expendature: 0.00, districtName: 'Patan', talukaexpendature: 0.00, gramexpendature: 0.00 },
  { id: 14, expendature: 0.00, districtName: 'Sabarkantha', talukaexpendature: 0.00, gramexpendature: 0.00 },
  { id: 15, expendature: 0.00, districtName: 'Rajkot', talukaexpendature: 0.00, gramexpendature: 0.00 },
  { id: 16, expendature: 0.00, districtName: 'Amreli', talukaexpendature: 0.00, gramexpendature: 0.00 },
  { id: 17, expendature: 0.00, districtName: 'Bhavnagar', talukaexpendature: 0.00, gramexpendature: 0.00 },
  { id: 18, expendature: 0.00, districtName: 'Botad', talukaexpendature: 0.00, gramexpendature: 0.00 },
  { id: 19, expendature: 0.00, districtName: 'Devbhoomi Dwarka', talukaexpendature: 0.00, gramexpendature: 0.00 },
  { id: 20, expendature: 0.00, districtName: 'Gir Somnath', talukaexpendature: 0.00, gramexpendature: 0.00 },
  { id: 21, expendature: 0.00, districtName: 'Jamnagar', talukaexpendature: 0.00, gramexpendature: 0.00 },
  { id: 22, expendature: 0.00, districtName: 'Junagadh', talukaexpendature: 0.00, gramexpendature: 0.00 },
  { id: 23, expendature: 0.00, districtName: 'Morbi', talukaexpendature: 0.00, gramexpendature: 0.00 },
  { id: 24, expendature: 0.00, districtName: 'Porbandar', talukaexpendature: 0.00, gramexpendature: 0.00 },
  { id: 25, expendature: 0.00, districtName: 'Surendranagar', talukaexpendature: 0.00, gramexpendature: 0.00 },
  { id: 26, expendature: 0.00, districtName: 'Kachchh', talukaexpendature: 0.00, gramexpendature: 0.00 },
  { id: 27, expendature: 0.00, districtName: 'Surat', talukaexpendature: 0.00, gramexpendature: 0.00 },
  { id: 28, expendature: 0.00, districtName: 'Bharuch', talukaexpendature: 0.00, gramexpendature: 0.00 },
  { id: 29, expendature: 0.00, districtName: 'Dang', talukaexpendature: 0.00, gramexpendature: 0.00 },
  { id: 30, expendature: 0.00, districtName: 'Narmada', talukaexpendature: 0.00, gramexpendature: 0.00 },
  { id: 31, expendature: 0.00, districtName: 'Navsari', talukaexpendature: 0.00, gramexpendature: 0.00 },
  { id: 32, expendature: 0.00, districtName: 'Tapi', talukaexpendature: 0.00, gramexpendature: 0.00 },
  { id: 33, expendature: 0.00, districtName: 'Valsad', talukaexpendature: 0.00, gramexpendature: 0.00 },
  // { id: 34,  expendature: 0.00, districtName: 'State Level Only (if any)', talukaexpendature: 0.00, gramexpendature: 0.00},
];

const DISTRICT_ELEMENT_DATA2: any[] = [
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


const DISTRICT_ELEMENT_DATA1: DistrictElement1[] = [

  {

    id: 34,
    expendature: '',
    districtName: 'State Level Only (if any)',
    propsedAmount: '',

  }
];

const ELEMENT_TAB1_DATA: FormC[] = [];

@Component({
  selector: 'app-new-item-estimates',
  templateUrl: './new-item-estimates.component.html',
  styleUrls: ['./new-item-estimates.component.css']
})
export class NewItemEstimatesComponent implements OnInit, OnDestroy {
  public toggleButton = true;
  currentLang = new BehaviorSubject<string>('Eng');
  isLangChange = false;
  hasFocusSet: number;

  NewVehicleChecklistData: any[] = [
    {
      srno: '1',
      checklistField: 'નવુ વાહન કોના ઉપયોગ માટે ખરીદવાનુ છે?',
      fieldDetail: ''
    },
    {
      srno: '2',
      checklistField: 'આ જગ્યા ભરાયેલ છે કે કેમ કે ચાર્જથી ચાલે છે?',
      fieldDetail: ''
    },
    {
      srno: '3',
      checklistField: 'આ જગ્યા પર ફરજ બજાવતા નિયમિત (ચાર્જ ધરાવતા નહી) અધિકારીશ્રીનુ નામ.',
      fieldDetail: ''
    },
    {
      srno: '4',
      checklistField: 'વાહન નવુ ખરીદવાનુ છે કે રદબાતલ વાહન સામે ખરીદવાનુ છે?',
      fieldDetail: ''
    },
    {
      srno: '5',
      checklistField: 'રદબાતલ કરવામા આવનાર વાહનનો રજીસ્ત્રેશન નમ્બર :-',
      fieldDetail: ''
    },
    {
      srno: '6',
      checklistField: 'રદબાતલ કરવામા આવનાર વાહન કેટલા કિ.મી. ફરેલ છે?',
      fieldDetail: ''
    },
    {
      srno: '7',
      checklistField: 'નવુ વાહન ખરીદતા પહેલા અગાઉ કેવી રીતે કામગીરી લેવામા આવતી હતી',
      fieldDetail: ''
    },

    {
      srno: '8',
      checklistField: 'હાલમા ક્ચેરી ખાતે કેટલા વાહન ઉપલબ્ધ છે?વાહનોના રજીસ્ત્રેશન ન્મ્બર / મોડેલ સાથેની વિગતો.',
      fieldDetail: ''
    },
    {
      srno: '9',
      // tslint:disable-next-line: max-line-length
      checklistField: '(અ) બન્દરો અને વાહન વ્યવહાર વિભાગના તા.૦૬/૦૩/૨૦૧૯ ના થરાવ ક્ર્માન્ક-જીએસટી/૧૦૨૦૧૩/૩૧૯/ઘ ની જોગવાઈને આધીન નવુ વાહન ખરીદવાનુ છે? (બ) બન્દરો અને વાહન વ્યવહાર વિભાગના તા.૦૬/૦૩/૨૦૧૯ ના થરાવ મુજબ ક્યુ વાહન મળવાપાત્ર થાય છે? ',
      fieldDetail: ''
    },
    {
      srno: '10',
      checklistField: 'નવુ વાહન ખરીદવાનુ વાજબી કારનો શુ છે?',
      fieldDetail: ''
    },
    {
      srno: '11',
      checklistField: 'વાહન ભાડે ન લેવાના કારનો શુ છે?',
      fieldDetail: ''
    },
    {
      srno: '12',
      checklistField: 'નવુ ખરીદવાના વાહનનો પ્રકાર(મેઈક અને મોડેલ)',
      fieldDetail: ''
    },
    {
      srno: '13',
      checklistField: 'વાહન ડીઝલ / પેટ્રોલ સન્ચાલિત છે કે CNG સન્ચાલિત?',
      fieldDetail: ''
    },
    {
      srno: '14',
      checklistField: 'GEM પોર્ટલ પરથી ખરીદવાના થતા સૌથી ઓછી કિમતના (BASIC MODEL) વાહનની અન્દાજિન  કિમત.',
      fieldDetail: ''
    },
    {
      srno: '15',
      checklistField: 'તા. ૦૬/૦૩/૨૦૧૯ ના થરાવમા દર્શાવેલ કિમતની મર્યાદામા છે કે કેમ? જો ના તો તેના કારણૉ.',
      fieldDetail: ''
    },
    {
      srno: '16',
      checklistField: 'વાહન ખરીદવા માટૅ અન્દાજપત્રમા ક્યા સદરે જોગવાઈ કરવાની છે? અને કેટલી.',
      fieldDetail: ''
    },
    {
      srno: '17',
      checklistField: '(અ) દરખાસ્ત હેથળનુ વાહન ચલાવવા સરકારી ડ્રાયવર છે કે કેમ? (બ) જો હા તો ડ્રાયવરનુ નામ અને તેની જન્મ તારીખ',
      fieldDetail: ''
    }

  ];

  RenovationConstructionChecklistData: any[] = [
    {
      srno: '1',
      checklistField: '',
      fieldDetail: ''
    },
    {
      srno: '2',
      checklistField: '',
      fieldDetail: ''
    },
    {
      srno: '3',
      checklistField: '',
      fieldDetail: ''
    },
    {
      srno: '4',
      checklistField: '',
      fieldDetail: ''
    },
    {
      srno: '5',
      checklistField: '',
      fieldDetail: ''
    },
    {
      srno: '6',
      checklistField: '',
      fieldDetail: ''
    },
    {
      srno: '7',
      checklistField: '',
      fieldDetail: ''
    },

    {
      srno: '8',
      checklistField: '',
      fieldDetail: ''
    },
    {
      srno: '9',
      checklistField: ' ',
      fieldDetail: ''
    },
    {
      srno: '10',
      checklistField: '',
      fieldDetail: ''
    },
    {
      srno: '11',
      checklistField: '',
      fieldDetail: ''
    }

  ];

  MachineryEquipmentChecklistData: any[] = [
    {
      srno: '1',
      checklistField: '',
      fieldDetail: ''
    },
    {
      srno: '2',
      checklistField: '',
      fieldDetail: ''
    },
    {
      srno: '3',
      checklistField: '',
      fieldDetail: ''
    },
    {
      srno: '4',
      checklistField: '',
      fieldDetail: ''
    },
    {
      srno: '5',
      checklistField: '',
      fieldDetail: ''
    },
    {
      srno: '6',
      checklistField: '',
      fieldDetail: ''
    },
    {
      srno: '7',
      checklistField: '',
      fieldDetail: ''
    },

    {
      srno: '8',
      checklistField: '',
      fieldDetail: ''
    },
    {
      srno: '9',
      checklistField: ' ',
      fieldDetail: ''
    },
    {
      srno: '10',
      checklistField: '',
      fieldDetail: ''
    },
    {
      srno: '11',
      checklistField: '',
      fieldDetail: ''
    }

  ];

  NewOutsourcesChecklistData: any[] = [
    {
      srno: '1',
      checklistField: 'સેવાનુ નામઃ-',
      fieldDetail: ''
    },
    {
      srno: '2',
      checklistField: 'સેવાનો પ્રકારઃ-',
      fieldDetail: ''
    },
    {
      srno: '3',
      checklistField: 'આ સેવા માટે ક્યા પ્રકાર્ની સ્કીલ જરુરી છેઃ-',
      fieldDetail: ''
    },
    {
      srno: '4',
      checklistField: 'આ સેવા માટે જરુરી માનવ મહિના (Man Months)',
      fieldDetail: ''
    },
    {
      srno: '5',
      checklistField: 'માનવ મહિના (Man Months) અન્ગેનો અન્દાજિત ખર્ચઃ-',
      fieldDetail: ''
    },
    {
      srno: '6',
      checklistField: 'કેટલા સમય માટે આ સેવાની જરુરીયાત છેઃ-',
      fieldDetail: ''
    },
    {
      srno: '7',
      checklistField: 'આ અન્ગે કરવામા આવેલ બજેટ જોગવાઈઃ- ',
      fieldDetail: ''
    },

    {
      srno: '8',
      checklistField: 'બજેટ જોગવાઈ અન્ગેનુ સદરઃ-',
      fieldDetail: ''
    }
  ];
  finYear_list: any[] = [
    { value: '2019-2020', viewValue: '2019-2020' },
    { value: '2020-2021', viewValue: '2020-2021' },
  ];

  branch_list: any[] = [
    { value: '1', viewValue: 'Administration' },
    { value: '2', viewValue: 'Budget' },
  ];

  estimation_list: any[] = [
    { value: '1', viewValue: 'DDO' },
    { value: '2', viewValue: 'HOD' },
    { value: '3', viewValue: 'Department' },
  ];

  estimation_for_list: any[] = [
    { value: '1', viewValue: 'DDO' },
    { value: '2', viewValue: 'HOD' },
    { value: '3', viewValue: 'Department' },
    { value: '4', viewValue: 'DDO1' },
    { value: '5', viewValue: 'HOD1' },
    { value: '6', viewValue: 'Department1' },
  ];
  item_category_list: any[] = [
    { value: '1', viewValue: 'Vehicle' },
    { value: '2', viewValue: 'Post' },
    { value: '3', viewValue: 'Construction' },
    { value: '4', viewValue: 'Furniture' },
    { value: '5', viewValue: 'Other' },
  ];

  item_category_checklist: any[] = [
    { value: '1', viewValue: 'Vehicle' },
    { value: '2', viewValue: 'Post' },
    { value: '3', viewValue: 'Construction' },
    { value: '4', viewValue: 'Furniture' },
    { value: '5', viewValue: 'Other' },
  ];
  financialYear_list: BudgetFormType[] = [
    { value: '1', viewValue: '2018-2019' },
    { value: '2', viewValue: '2019-2020' },
    { value: '3', viewValue: '2020-2021' },
  ];
  department_list: BudgetFormType[] = [
    { value: '1', viewValue: 'Education Department' }
  ];
  demand_list: BudgetFormType[] = [
    { value: '1', viewValue: '9' },
    { value: '2', viewValue: '10' },
    { value: '3', viewValue: '11' },
    { value: '4', viewValue: '12' },
  ];
  majorHead_list: BudgetFormType[] = [
    { value: '1', viewValue: '2049' },
    { value: '2', viewValue: '2051' },
    { value: '3', viewValue: '3049' },
    { value: '4', viewValue: '3051' }
  ];
  subMajorHead_list: BudgetFormType[] = [
    { value: '1', viewValue: '60' },
    { value: '2', viewValue: '01' },
    { value: '3', viewValue: '02' },
  ];
  minorHead_list: BudgetFormType[] = [
    { value: '1', viewValue: '60' },
    { value: '2', viewValue: '01' },
    { value: '3', viewValue: '02' },
  ];
  subHead_list: BudgetFormType[] = [
    { value: '1', viewValue: '60' },
    { value: '2', viewValue: '01' },
    { value: '3', viewValue: '02' },
  ];
  detailHead_list: BudgetFormType[] = [
    { value: '1', viewValue: '00' },
    { value: '2', viewValue: '01' }
  ];
  proposalType_list: BudgetFormType[] = [
    { value: '1', viewValue: 'New' },
    { value: '2', viewValue: 'Continuous' }
  ];
  proposalCategory_list: BudgetFormType[] = [
    { value: '1', viewValue: 'Vehicle' },
    { value: '2', viewValue: 'Post' },
    { value: '3', viewValue: 'Construction' },
    { value: '4', viewValue: 'Furniture' },
    { value: '5', viewValue: 'Other' },
  ];
  schemeType_list: BudgetFormType[] = [
    { value: '1', viewValue: 'State' },
    { value: '2', viewValue: 'CSS' }
  ];
  objectHead_list: BudgetFormType[] = [
    { value: '1', viewValue: '0010' },
    { value: '2', viewValue: '0011' },
    { value: '3', viewValue: '0012' },
    { value: '4', viewValue: '0013' },
    { value: '5', viewValue: '5400' },
    { value: '6', viewValue: '3131' }
  ];
  itemName_list: BudgetFormType[] = [
    { value: '1', viewValue: 'Purchase of Furniture for the Director Office' },
    { value: '2', viewValue: 'Purchase Furniture for record room of Office' },
    { value: '3', viewValue: 'Purchase of new Furniture for the Joint Director Office' },
    { value: '4', viewValue: 'Purchase of new Furniture for the Deputy Director' }
  ];
  establishment_list: BudgetFormType[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' }
  ];
  expenditureType_list: BudgetFormType[] = [
    { value: '1', viewValue: 'Re-current' },
    { value: '2', viewValue: 'Non re-current' },
    { value: '3', viewValue: 'Both' }
  ];
  majorCategory_list: BudgetFormType[] = [
    { value: '1', viewValue: 'Specific' },
    { value: '2', viewValue: 'Regular' }
  ];
  revenueCapital_list: BudgetFormType[] = [
    { value: '1', viewValue: ' Revenue ' },
    { value: '2', viewValue: 'Capital' }
  ];
  chargedVoted_list: BudgetFormType[] = [
    { value: '1', viewValue: 'Charged' },
    { value: '2', viewValue: 'Voted' }
  ];
  minister_list: BudgetFormType[] = [
    { value: '1', viewValue: 'Shri Vijaybhai R. Rupani' }
  ];
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  condition = false;
  isvisibledata = false;
  yesNo3 = false;
  gujaratiType: Boolean = true;
  engAtiveClass: Boolean = false;
  gujAtiveClass: Boolean = false;
  showFormC: Boolean = true;
  showFormF: Boolean = true;
  isCSS: Boolean = false;
  // itemCategorySelect: Boolean = false;
  // isNewPost: Boolean = false;
  // isNewVehicle: Boolean = false;
  // isRenovationConstruction: Boolean = false;
  // isNewMachinaryEquipment: Boolean = false;
  // isNewOutsourceContractualManpower: Boolean = false;
  // isFurniture: Boolean = false;
  // isOthers: Boolean = false;
  submitted: Boolean = false;

  separatorKeysCodes: number[] = [ENTER, COMMA, TAB];
  codeCtrl = new FormControl();
  filteredCodes: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);
  codes: string[] = [];

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
    { value: '3131', viewValue: '3131 : Grants-in-Aid General to Panchayats pertaining to pay and allowances' },
    { value: '3132', viewValue: '3132 : Grants-in-Aid General to Panchayats pertaining' },
    { value: '3135', viewValue: '3135 : Grants-in-Aid General to Panchayats pertaining' },
    { value: '3135-13', viewValue: '3135-13 : Anand Agricultural University' },
    { value: '3135-14', viewValue: '3135-14 : Junagadh Agricultural University' },
    { value: '3135-15', viewValue: '3135-15 : Navsari Agricultural University' },
    { value: '3135-16', viewValue: '3135-16 : Dantiwada Agricultural University' },
    { value: '3200', viewValue: '3200 : Contributions' },
    { value: '3241', viewValue: '3241 : Contributions (a) To Panchayats' },
    { value: '3133', viewValue: '3133 : Contributions (a) To Panchayats' },
    { value: '3243', viewValue: '3243 : Contributions (b) To Local Bodies' },
    { value: '3351', viewValue: '3351 : Subsidies (a) To Panchayats' },
    { value: '3353', viewValue: '3353 : Subsidies (b) To Local Bodies' },
    { value: '3561', viewValue: '3561 : Grants for creation of Capital Assets to Panchayats' },
    { value: '3563', viewValue: '3563 : Grants for creation of Capital Assets to Local Bodies' },
  ];
  @ViewChild('codeInput') codeInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;
  displayedColumns = ['objecthead', 'recurrentAmount', 'nonRecurrentAmount', 'ultimateAnnualRecurrentAmount', 'budgetEstimateNextYear',
    'remarks', 'action'];
  dataSource = new MatTableDataSource(ELEMENT_DATA_C2);
  // districtColumns = ['position', 'district', 'expenditure', 'talukaexpenditure', 'gramexpenditure'];

  districtColumns = ['position', 'district', 'expendature', 'talukaexpenditure', 'gramexpenditure'];

  districtColumns2 = [
    'position',
    'district',
    'expendature',
    'talukaexpendature',
    'gramexpendature'
  ];
  subHeaderDistrictColumns = ['total', 'districtTotal', 'talukaTotal', 'gramTotal'];

  stateColumns = [
    'position',
    'district',
    'propsedAmount',
  ];

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
  expendDataSource = new MatTableDataSource(ELEMENT_TAB1_DATA);
  @ViewChild('scrollChargeMe') private myScrollContainer: ElementRef;
  @ViewChild('parentGrids') private parentGrid: ElementRef;
  @ViewChild('codeGJ') codeGJ: ElementRef;
  expendCharges: boolean;
  table1 = true;
  table2 = false;
  grantInAid: Boolean;

  displayedRojmdarColumns = ['typesofexpenditure', 'noofpost', 'salaries', 'otherallowance', 'total', 'remarks'];
  showObject: string;
  objs_tab1_data = {
    objecthead: '', thirdlastyear: '0.00', secondlastyear: '0.00', lastyear: '0.00', currentyear: '0.00',
    last8month: '0.00', first4month: '0.00', totalof8and4month: '0.00', col6: '0.00', col7: '0.00',
    amountproposedbyHOD: '0.00', remarks: ''
  };
  saveCharge: boolean;
  hodAmount: any;
  succObjectCode: Array<any> = [];
  errObjectCode: Array<any> = [];
  /** control for the MatSelect filter keyword */
  public subObjectFilterCtrl: FormControl = new FormControl();
  public filteredSubObjects: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);
  sObjectHead: CommonList[] = [
    { name: '0101 : Pay of Officers Including Grade Pay', id: '0101' },
    { name: '0102 : Pay of Establishment Including Grade Pay', id: '0102' },
    { name: '0103 : Dearness Allowance', id: '0103' },
    { name: '0104 : Other Allowances', id: '0104' },
    { name: '0105 : Leave Travel Concession', id: '0105' },
    { name: '0106 : Reimbursement of Medical Charges', id: '0106' },
    { name: '0107 : Medical Allowance', id: '0107' },
    { name: '0108 : Bonus', id: '0108' },
    { name: '0109 : eave Encashment', id: '0109' },
    { name: '0110 : House Rent Allowance', id: '0110' },
    { name: '0111 : Compensatory Local Allowance', id: '0111' },
    { name: '0113 : Transport Allowance', id: '0113' },
    { name: '0114 : Sumptuary Allowance', id: '0114' },
    { name: '0117 : R.O.P. Arrears Gazetted', id: '0117' },
    { name: '0118 : R.O.P. Arrears Non Gazetted', id: '0118' },
    { name: '0119 : Dearness Pay-Gazetted', id: '0119' },
    { name: '0120 : Dearness Pay-Non-Gazetted', id: '0120' },
    { name: '3131 : Grants-in-Aid General to Panchayats pertaining to pay and allowances', id: '3131' },
    { name: '3135 : Grants-in-Aid General to Panchayats pertaining to pay and allowances', id: '3135' },
    { name: '3132 : Grants-in-Aid General to Panchayats pertaining', id: '3132' },
    { name: '3135-13 : Anand Agricultural University', id: '3135-13' },
    { name: '3135-14 : Junagadh Agricultural University', id: '3135-14' }, { name: '3135-15 : Navsari Agricultural University', id: '3135-15' },
    { name: '3135-16 : Dantiwada Agricultural University', id: '3135-16' },
    { name: '3200 : Contributions', id: '3200' },
    { name: '3241 : Contributions (a) To Panchayats', id: '3241' },
    { name: '3243 : Contributions (b) To Local Bodies', id: '3243' },
    { name: '3351 : Subsidies (a) To Panchayats', id: '3351' },
    { name: '3353 : Subsidies (b) To Local Bodies', id: '3153' },
    { name: '3561 : Grants for creation of Capital Assets to Panchayats', id: '3561' },
    { name: '3563 : Grants for creation of Capital Assets to Local Bodies', id: '3363' }, ];
  private _onDestroy = new
    Subject<void>();
  subObjectId: Array<any> = [];
  selSubObjectId: string;
  date: any = new Date();


  createEstimateForm: FormGroup;
  financialYearCtrl: FormControl = new FormControl();
  departmentCodeCtrl: FormControl = new FormControl();
  demandCodeCtrl: FormControl = new FormControl();
  majorHeadCodeCtrl: FormControl = new FormControl();
  subMajorHeadCodeCtrl: FormControl = new FormControl();
  minorHeadCodeCtrl: FormControl = new FormControl();
  subHeadCodeCtrl: FormControl = new FormControl();
  detailHeadCodeCtrl: FormControl = new FormControl();
  proposalCategoryCtrl: FormControl = new FormControl();
  majorCategoryCtrl: FormControl = new FormControl();
  proposalTypeCtrl: FormControl = new FormControl();
  schemeTypeCtrl: FormControl = new FormControl();
  objectHeadCtrl: FormControl = new FormControl();
  itemNameCtrl: FormControl = new FormControl();
  establishmentCtrl: FormControl = new FormControl();
  expenditureTypeCtrl: FormControl = new FormControl();
  revenueCapitalCtrl: FormControl = new FormControl();
  chargedVotedCtrl: FormControl = new FormControl();
  ministerInChargeCtrl: FormControl = new FormControl();
  classOneCtrl: FormControl = new FormControl();
  classTwoCtrl: FormControl = new FormControl();
  errorMessages = {
    FORM_TYPE: 'Please select Form Type',
    FIN_YEAR: 'Please select any Financial Year',
    DEPARTMENT: 'Please select any Department',
    BRANCH: 'Please select any Name of the Branch ',
    ESTIMATION_FROM: 'Please select any Estimation Form ',
    ESTIMATE_FOR: 'Please select estimate for ',
    DEMAND: 'Please select any Demand',
    MINISTER_IN_CHARGE: 'Please select Minister-in-charge',
    BPN: 'Please select any BPN code',
    MAJOR_HEAD: 'Please select any Major Head',
    SUB_MAJOR_HEAD: 'Please select any Sub Major Head',
    MINOR_HEAD: 'Please select any Minor Head',
    SUB_HEAD: 'Please select any Sub Head',
    DETAILED_HEAD: 'Please insert Detailed Head',
    CHARGED_VOTED: 'Please select',
    SCHEME_TYPE: 'Please select Scheme Type',
    ITEM_CATEGORY: ' Please select item category',
    ITEM_CATEGORY_CHECKLIST: 'Please select value from item category checklist ',
    CSS_PERCENTAGE: 'Please enter proper percentage',
    ITEM_NAME: 'Please enter item name',
    WRITE_UP_ENG: 'Please enter Write-up in English',
    WRITE_UP_GUJ: 'Please enter Write-up in Gujarati',
    NO_OF_MONTHS: 'Please enter no. of months'
  };

  // demand_list: any[] = [
  //   {value: '70 : Community Development', viewValue: '70 : Community Development'},
  //   {value: '71 : Rural Housing and Rural Development', viewValue: '71 : Rural Housing and Rural Development'},
  //   {value: '73 : Other Expenditure pertaining to Panchayats, Rural Housing and Rural Development Department', viewValue: '73 : Other Expenditure pertaining to Panchayats, Rural Housing and Rural Development Department'},
  //   {value: '76 : Revenue Department', viewValue: '76 : Revenue Department'},
  //   {value: '79 : Relief on account Natural Calamities', viewValue: '79 : Relief on account Natural Calamities'},
  //   {value: '81 : Compensation and Assignment', viewValue: '81 : Compensation and Assignment'},
  //   {value: '87 : Gujarat Capital Construction Scheme', viewValue: '87 : Gujarat Capital Construction Scheme'},
  //   {value: '93 : Welfare of Scheduled Tribes', viewValue: '93 : Welfare of Scheduled Tribes'},
  //   {value: '95 : Scheduled Castes Sub Plan', viewValue: '95 : Scheduled Castes Sub Plan'},
  //   {value: '97 : Sports,Youth and Cultural Activities Department', viewValue: '97 : Sports,Youth and Cultural Activities Department'},
  //   {value: '10 : Other expenditure pertaining to Education Department', viewValue: '10 : Other expenditure pertaining to Education Department'},
  // ];

  ministerInCharge_list: any[] = [
    { value: '1', viewValue: 'Shri BhupendraSinh Chudasama' },
  ];

  bpn_list: any[] = [
    { value: '1 : GREEN BOOK', viewValue: '1 : GREEN BOOK' },
    { value: '2 : RECEIPT UNDER CONSOLIDATED FUND', viewValue: '2 : RECEIPT UNDER CONSOLIDATED FUND' },
    {
      value: '3 : AGRICULTURE, FARMERS WELFARE & CO-OPERATION DEPARTMENT',
      viewValue: '3 : AGRICULTURE, FARMERS WELFARE & CO-OPERATION DEPARTMENT'
    },
  ];


  attachment_type_list: any[] = [
    { value: '1', viewValue: 'Supporting Document' },
    { value: '2', viewValue: 'Sanction Order' },
    { value: '3', viewValue: 'Other' }
  ];

  formTypeCtrl: FormControl = new FormControl();
  filteredFormType: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  finYearCtrl: FormControl = new FormControl();
  filteredFinYear: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  branchCodeCtrl: FormControl = new FormControl();
  filteredBranchCode: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  estimationFromCtrl: FormControl = new FormControl();
  filteredEstimationFrom: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  estimationForCtrl: FormControl = new FormControl();
  filteredEstimationFor: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  bpnCodeCtrl: FormControl = new FormControl();
  filteredBPNCode: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  itemCategoryCtrl: FormControl = new FormControl();
  filteredItemCategory: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  itemCategoryCheckListCtrl: FormControl = new FormControl();
  filteredItemCategoryCheckList: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  attachmentTypeCtrl: FormControl = new FormControl();
  filteredAttachmentType: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);


  newPostCtrl: FormControl = new FormControl();
  degCtrl: FormControl = new FormControl();
  classCtrl: FormControl = new FormControl();
  servicCtrl: FormControl = new FormControl();
  requrementCtrl: FormControl = new FormControl();
  positionsCtrl: FormControl = new FormControl();
  WhetherDepartmenCtrl: FormControl = new FormControl();
  placeCtrl: FormControl = new FormControl();
  placeCtrl2: FormControl = new FormControl();
  placeCtrl3: FormControl = new FormControl();
  NewVehicalCtrl: FormControl = new FormControl();
  purchageVehicalCtrl: FormControl = new FormControl();
  powarVehicalCtrl: FormControl = new FormControl();
  priceQuotedCtrl: FormControl = new FormControl();
  vecicleGovCtrl: FormControl = new FormControl();

  newPostType: CommonListing[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' },
  ];
  WhetherDepart: CommonListing[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' },
  ];

  positionsRirect: CommonListing[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' },
  ];

  reqType: CommonListing[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' },
  ];

  deginationList: CommonListing[] = [
    { value: '1', viewValue: 'Degination' },
    { value: '2', viewValue: 'Degination' },
  ];

  classList: CommonListing[] = [
    { value: '1', viewValue: 'Class 1' },
    { value: '2', viewValue: 'Class 2' },
    { value: '2', viewValue: 'Class 3' },
    { value: '2', viewValue: 'Class 4' },
  ];

  servicList: CommonListing[] = [
    { value: '1', viewValue: 'Vehicle' },
    { value: '2', viewValue: 'Driver' },
    { value: '2', viewValue: 'Vehicle + Driver' },
    { value: '2', viewValue: 'Staff' },
    { value: '2', viewValue: 'Peons' },
    { value: '2', viewValue: 'House Keeping' },
    { value: '2', viewValue: 'Security Guard' },
    { value: '2', viewValue: 'Consulting Service' },
    { value: '2', viewValue: 'Others' },
  ];

  placeChargeValid: CommonListing[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' },
    { value: '3', viewValue: 'Not Applicable' }
  ];

  placeChargeValid2: CommonListing[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' },
    { value: '3', viewValue: 'Not Applicable' }
  ];
  reveList: any[] = [
    { value: '1', viewValue: 'Revenue' },
    { value: '2', viewValue: 'Capital' },
  ];
  placeChargeValid3: CommonListing[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' },
    { value: '3', viewValue: 'Not Applicable' }
  ];

  NewVehicalReq: CommonListing[] = [
    { value: '1', viewValue: 'New Vehicle' },
    { value: '2', viewValue: 'Against Condemn Vehicle' },
  ];

  purchageVehicalReq: CommonListing[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' },
  ];
  powarVehicaType: CommonListing[] = [
    { value: '1', viewValue: 'CNG' },
    { value: '2', viewValue: 'Petrol/Diesel' },
  ];

  priceQuotedType: CommonListing[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' },
  ];

  vecicleGovType: CommonListing[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' },
  ];

  designation_list: any[] = [
    { value: '001', viewValue: 'Under Secretary' },
    { value: '002', viewValue: 'Deputy Secretary' },
    { value: '003', viewValue: 'Secretary' },
    { value: '004', viewValue: 'Joint Secretary' },
  ];
  itemCategorySelect: Boolean = true;
  newpost = false;
  addShow = false;
  Outsourcesactive = false;
  Machine = false;
  Vehicle = true;
  construction = false;
  isdisableds: Boolean;
  dataCapDriver = false;
  @ViewChild('singleSelect') singleSelect: MatSelect;
  // _onDestroy = new Subject<void>();

  // dataSourceAttachment = new MatTableDataSource(this.DATA);
  isExtendedRow = (index, item) => item.extend;
  // tslint:disable-next-line:member-ordering
  // dataSourceSubAttachment = new MatTableDataSource(this.attachmentSubTable);
  // tslint:disable-next-line:member-ordering
  // displayedSubAttachmentColumns = ['data', 'val1', 'val2', 'val3', 'val4', 'val5'];
  // attachment sheet init end here

  // tslint:disable-next-line:member-ordering
  NewPostChecklistData: any[] = [
    {
      srno: '',
      checklistField: '',
      fieldDetail: ''
    },
    {
      srno: '1',
      checklistField: 'જગ્યા નુ નામઃ-',
      fieldDetail: ''
    },
    {
      srno: '2',
      checklistField: 'ક્યા સન્વર્ગની જગ્યા છે?*',
      fieldDetail: ''
    },
    {
      srno: '3',
      checklistField: 'ક્યા વર્ગ ની જગ્યા છે? ',
      fieldDetail: ''
    },
    {
      srno: '4',
      // tslint:disable-next-line: max-line-length
      checklistField: 'જગ્યા નુ પગાર ધોરણ (અ) છથા પગારપન્ચ મુજબ (ગ્રેડ પે સહિત) (બ) સાતમા પગાર પન્ચ મુજબ (પે મેટ્ર્ર્ર્ર્ર્ર્રીક્સના લેવલ નમ્બર)',
      fieldDetail: ''
    },
    {
      srno: '5',
      checklistField: 'કુલ મન્જુર થયેલ મહેક્મ અન્ગે કચેરીનુ સેટ-અપ (મહેકમ માળખુ) રજુ કરવુ.',
      fieldDetail: ''
    },
    {
      srno: '6',
      checklistField: 'હાલના નોર્મ્સ મુજબ આ સન્વર્ગ કુલ કેટલી જગ્યાઓ મન્જુર થયેલ છે?',
      fieldDetail: ''
    },
    {
      srno: '7',
      checklistField: 'આ સન્વર્ગની કુલ કેટલી જગ્યાઓ ભરાયેલ છે?કેટલી જગ્યાઓ ખાલી છે?',
      fieldDetail: ''
    },

    {
      srno: '8',
      checklistField: 'કુલ કેટલી નવી જગ્યાઓ મન્જુર ક્રરવાની દરખાસ્ત છે?',
      fieldDetail: ''
    },
    {
      srno: '9',
      // tslint:disable-next-line: max-line-length
      checklistField: 'આ સન્વર્ગની જગ્યાઓ છેલ્લે ક્યારે મન્જૂર કરવામા આવેલ હતી ? તે સમયે મન્જૂર કરેલ જગ્યાઓ પેકી હાલમા કેટલી જગ્યાઓ ભરાયેલ છે? કેટલી જગ્યાઓ ખાલી છે?',
      fieldDetail: ''
    },
    {
      srno: '10',
      checklistField: 'સમ્બન્ધિત જગ્યાના ભરતી નિયમો છે કે કેમ ? જો હા, તો તેના ભરતી નિયમોની નકલ બીડવી.',
      fieldDetail: ''
    },
    {
      srno: '11',
      checklistField: ' ભરતી નિયમોમા સીધી ભરતીઃ બધતીનો રેશિયો શુ છે?',
      fieldDetail: ''
    },
    {
      srno: '12',
      checklistField: 'આ જગ્યાઓ સીધી ભરતીથી ભરવાની થાય છે કે કેમ?',
      fieldDetail: ''
    },
    {
      srno: '13',
      checklistField: 'આ જગ્યાઓ માટે અન્દાજપત્રમા નવી બાબતે કેટલી રક્મની જોગવાઈ કરવાની છે? માગણી નમ્બર, મુખ્ય સદર, પેટા સદર વિગેરે.',
      fieldDetail: ''
    },
    {
      srno: '14',
      checklistField: 'આ જગ્યાના પગાર-ભ્થ્થા અન્ગે થનાર ખર્ચની વિગતો.',
      fieldDetail: ''
    },
    {
      srno: '15',
      // tslint:disable-next-line: max-line-length
      checklistField: 'વિભાગ/ક્ચેરી કાર્યબોજ અને મન્જુર થયેલ મહેક્મ અન્ગે સ્વતન્ત્ર એજન્સી પાસે અથવા વિભાગીય રીતે મૂલ્યાક્ન અભ્યાસ કરાવેલ છે કે કેમ ? જો હા તો તેના અહેવાલની નકલ અભિપ્રાય સાથે બીડવી.',
      fieldDetail: ''
    },
    {
      srno: '16',
      checklistField: 'જે ક્ચેરીમા આ જગ્યા ઉભી કરવાની છે તે ક્ચેરીનુ વહીવટી માળખુ (મન્જુર થયેલ, ભરાયેલ, ખાલી જગ્યાઓ પત્રક સાથે રાખવુ)',
      fieldDetail: ''
    },

  ];
  // tslint:disable-next-line:member-ordering
  dataSourceItemCategoryChecklist = new MatTableDataSource();
  OutSource = new MatTableDataSource();
  // tslint:disable-next-line:member-ordering
  displayedItemCategoryChecklistColumns = ['srno', 'checklistField', 'fieldDetail'];
  displayedoutColumns = ['srno', 'checklistField', 'fieldDetail'];

  // tslint:disable-next-line:member-ordering
  FormCStmt1: any[] = [
    {
      designationEng: 'Team Leader', designationEngEdit: true,
      designationGuj: 'ટીમ', designationGujEdit: true,
      noOfPosts: '5', noOfPostsEdit: true,
      payScale: '3000.00', payScaleEdit: true,
      payPost: '3000.00', payPostEdit: true,
      gradePay: '300.00', gradePayEdit: true,
    }
  ];
  // tslint:disable-next-line:member-ordering
  dataSourceFormCStmt1 = new MatTableDataSource(this.FormCStmt1);
  // tslint:disable-next-line:member-ordering
  displayedFormCStmt1Columns = ['designationEng', 'designationGuj', 'noOfPosts', 'payScale', 'payPost', 'Action'];


  // tslint:disable-next-line:member-ordering
  // outSourceData: any[] = [
  //   {
  //     serviceType: 'Testing',
  //     budgetEstimate: '0.00'
  //   }
  // ];
  // tslint:disable-next-line:member-ordering
  // dataSourceOutSource = new MatTableDataSource(this.outSourceData);
  // tslint:disable-next-line:member-ordering
  // displayedOutSourceColumns = ['serviceType', 'budgetEstimate'];

  // tslint:disable-next-line:member-ordering
  tabDisable: Boolean = true;
  // tslint:disable-next-line:member-ordering
  doneHeader: Boolean = false;
  // tslint:disable-next-line:member-ordering
  selectedindex: number;
  selectedindexTemp = 1;

  // shailesh code end here

  // Attachments
  // tslint:disable-next-line:member-ordering
  browseData: any[] = [{
    // dropDown: undefined,
    name: undefined,
    file: undefined,
  }];
  // tslint:disable-next-line:member-ordering
  displayedBrowseColumns = ['position', 'attachmentType', 'fileName', 'browse', 'uploadedFileName', 'uploadedBy', 'action'];
  // tslint:disable-next-line:member-ordering
  dataSourceBrowse = new MatTableDataSource(this.browseData);
  displayedBrowseColumnss = ['browse', 'uploadedFileName', 'action'];
  // tslint:disable-next-line:member-ordering
  fileBrowseIndex: number;
  subscribeParams: Subscription;
  constructor(
    private toastr: ToastrService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog,
    private el: ElementRef,
    private activatedRoute: ActivatedRoute,

  ) {

  }
  public index;
  public scheme;
  showState = true;
  showCSS = true;
  // showStateCSS : boolean= true;
  ngOnInit() {
    this.subscribeParams = this.activatedRoute.params.subscribe(resRoute => {
      //debugger
      console.log(resRoute.id);
      // console.log(resRoute.id1);
      const temp = resRoute.id.split('-');
      const arg1 = temp[0];
      const arg2 = temp[1];
      const arg3 = temp[2];
      // console.log(arg1 + "\n" + arg2 + "\n" + arg3);

      this.index = arg1;
      this.scheme = arg2;
      this.selectedindexTemp = Number(arg3);

    });

    if (this.scheme === '1') {
      this.showState = true;
      this.showCSS = false;
      // console.log("if" + this.showState +this.showCSS );

    } else if (this.scheme === '2') {
      this.showState = false;
      this.showCSS = true;
      // console.log("elseif" + this.showState +this.showCSS );
    }
    this.onItemCategorySelect();

    this.selectedindex = 1;
    if (this.selectedindexTemp === 2) {
      this.selectedindex = this.selectedindexTemp;
    }
    this.filteredCodes.next(this.allMainCodes.slice());
    this.codeCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(this.allMainCodes, this.codeCtrl.value, this.filteredCodes);
      });
    // this.filteredCodes = this.codeCtrl.valueChanges.pipe(
    //   startWith(null),
    //   map((fruit: string | null) => fruit ? this._filter(fruit) : this.allMainCodes.slice()));
    this.initialSubObject();

    // added by shailesh
    this.createForm();


    this.filteredFinYear.next(this.finYear_list.slice());
    (this.finYearCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(this.finYear_list, this.finYearCtrl.value, this.filteredFinYear);
      }));

    // this.filteredDepartmentCode.next(this.department_list.slice());
    // (this.departmentCodeCtrl.valueChanges
    //   .pipe(takeUntil(this._onDestroy))
    //   .subscribe(() => {
    //     this.filterObjValue(this.department_list, this.departmentCodeCtrl.value, this.filteredDepartmentCode);
    //   }));

    this.filteredBranchCode.next(this.branch_list.slice());
    (this.branchCodeCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(this.branch_list, this.branchCodeCtrl.value, this.filteredBranchCode);
      }));

    this.filteredEstimationFrom.next(this.estimation_list.slice());
    (this.estimationFromCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(this.estimation_list, this.estimationFromCtrl.value, this.filteredEstimationFrom);
      }));

    this.filteredEstimationFor.next(this.estimation_for_list.slice());
    (this.estimationForCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(this.estimation_for_list, this.estimationForCtrl.value, this.filteredEstimationFor);
      }));

    // this.filteredDemandCode.next(this.demand_list.slice());
    // (this.demandCodeCtrl.valueChanges
    //   .pipe(takeUntil(this._onDestroy))
    //   .subscribe(() => {
    //     this.filterObjValue(this.demand_list, this.demandCodeCtrl.value, this.filteredDemandCode);
    //   }));

    //   this.filteredMinisterInCharge.next(this.ministerInCharge_list.slice());
    //   (this.ministerInChargeCtrl.valueChanges
    //     .pipe(takeUntil(this._onDestroy))
    //     .subscribe(() => {
    //       this.filterObjValue(this.ministerInCharge_list, this.ministerInChargeCtrl.value, this.filteredMinisterInCharge);
    //     }));

    this.filteredItemCategory.next(this.item_category_list.slice());
    (this.itemCategoryCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(this.item_category_list, this.itemCategoryCtrl.value, this.filteredItemCategory);
      }));

    this.filteredItemCategoryCheckList.next(this.item_category_checklist.slice());
    (this.itemCategoryCheckListCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(this.item_category_checklist, this.itemCategoryCheckListCtrl.value, this.filteredItemCategoryCheckList);
      }));

    this.filteredAttachmentType.next(this.attachment_type_list.slice());
    (this.attachmentTypeCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(this.attachment_type_list, this.attachmentTypeCtrl.value, this.filteredAttachmentType);
      }));

    // this.calculateAttachmentValue();
    // this.calculateSubAttachmentValue();
    // this.calculateRojamadarValue();

    this.createEstimateForm.controls.finYear.patchValue('2019-2020');
    this.createEstimateForm.controls.departmentCode.patchValue('1');
    this.createEstimateForm.controls.branchCode.patchValue('2');
    this.createEstimateForm.controls.estimationFrom.patchValue('1');
    this.createEstimateForm.controls.estimationFor.patchValue('2');

    // shailesh code end here
  }


  updateAttachmentRemarks() {

  }
  toggleLanguage() {
    this.isLangChange = true;
    const elements = this.el.nativeElement.querySelectorAll('.hasfocus')[0];
    if (elements !== undefined) {
      if (this.currentLang.value === 'Guj') {
        SetEnglish();
        this.currentLang.next('Eng');
      } else {
        SetGujarati();
        this.currentLang.next('Guj');
      }
      elements.focus();
    }
  }
  setEnglishOnFocusOut() {
    SetEnglish();
  }
  setGujaratiDefault() {
    if (!this.isLangChange) {
      SetGujarati();
      this.currentLang.next('Eng');
    }
  }

  calculateBE(data) {
    let returnData = 0;
    if (data.recurrentAmount || data.nonRecurrentAmount) {
      returnData = Number(data.recurrentAmount) + Number(data.nonRecurrentAmount);
    }
    return returnData;
  }

  calculateUltimateAmount(data) {
    let returnData = 0;
    if (data.recurrentAmount || data.nonRecurrentAmount) {
      // returnData = this.calculateBE(data) * 12;
      returnData = Number(data.recurrentAmount) * 12 / 11;
    }
    return returnData;
  }
  calcRecurrentAmount() {
    let calcRecurrentAmount = 0;
    this.dataSource.data.forEach((element, index) => {
        calcRecurrentAmount =
        calcRecurrentAmount + Number(element.recurrentAmount);
    });
    return calcRecurrentAmount;
  }
  calcNonRecurrentAmount() {
    let calcNonRecurrentAmount = 0;
    this.dataSource.data.forEach((element, index) => {
        calcNonRecurrentAmount =
        calcNonRecurrentAmount + Number(element.nonRecurrentAmount);
    });
    return calcNonRecurrentAmount;
  }
  calcbudgetEstimateNextYear() {
    let calcbudgetEstimateNextYear = 0;
    this.dataSource.data.forEach((element, index) => {
        calcbudgetEstimateNextYear =
        calcbudgetEstimateNextYear + Number(element.recurrentAmount) + Number(element.nonRecurrentAmount);
    });
    return calcbudgetEstimateNextYear;
  }
  calcultimateAnnual() {
    let calcultimateAnnual = 0;
    this.dataSource.data.forEach((element, index) => {
        calcultimateAnnual =
        calcultimateAnnual + Number(element.recurrentAmount) * 12 / 11;
    });
    return calcultimateAnnual;
  }
  calcRecurrentAmountCss() {
    let calcRecurrentAmount = 0;
    this.dataSource.data.forEach((element, index) => {
        calcRecurrentAmount =
        calcRecurrentAmount + Number(element.recurrentAmount);
    });
    return calcRecurrentAmount;
  }
  calcNonRecurrentAmountCss() {
    let calcNonRecurrentAmount = 0;
    this.dataSource.data.forEach((element, index) => {
        calcNonRecurrentAmount =
        calcNonRecurrentAmount + Number(element.nonRecurrentAmount);
    });
    return calcNonRecurrentAmount;
  }
  calcbudgetEstimateNextYearCss() {
    let calcbudgetEstimateNextYear = 0;
    this.dataSource.data.forEach((element, index) => {
        calcbudgetEstimateNextYear =
        calcbudgetEstimateNextYear + Number(element.recurrentAmount) + Number(element.nonRecurrentAmount);
    });
    return calcbudgetEstimateNextYear;
  }
  calcultimateAnnualCss() {
    let calcultimateAnnual = 0;
    this.dataSource.data.forEach((element, index) => {
        calcultimateAnnual =
        calcultimateAnnual + Number(element.recurrentAmount) * 12 / 11;
    });
    return calcultimateAnnual;
  }
  calcBreakupRecurrentAmount() {
    let sum = 0;
    this.expendDataSource.data.forEach((element, index) => {
        sum =
        sum + Number(element.recurrentAmount);
    });
    return sum;
  }
  calcBreakupNonRecurrentAmount() {
    let sum = 0;
    this.expendDataSource.data.forEach((element, index) => {
        sum =
        sum + Number(element.nonRecurrentAmount);
    });
    return sum;
  }
  calcBreakupbudgetEstimateNextYear() {
    let sum = 0;
    this.expendDataSource.data.forEach((element, index) => {
        sum =
        sum + Number(element.recurrentAmount) + Number(element.nonRecurrentAmount);
    });
    return sum;
  }
  calcBreakupultimateAnnual() {
    let sum = 0;
    this.expendDataSource.data.forEach((element, index) => {
        sum =
        sum + Number(element.recurrentAmount) * 12 / 11;
    });
    return sum;
  }
  calcBreakupRecurrentAmountCss() {
    let sum = 0;
    this.expendDataSource.data.forEach((element, index) => {
        sum =
        sum + Number(element.recurrentAmount);
    });
    return sum;
  }
  calcBreakupNonRecurrentAmountCss() {
    let sum = 0;
    this.expendDataSource.data.forEach((element, index) => {
        sum =
        sum + Number(element.nonRecurrentAmount);
    });
    return sum;
  }
  calcBreakupbudgetEstimateNextYearCss() {
    let sum = 0;
    this.expendDataSource.data.forEach((element, index) => {
        sum =
        sum + Number(element.recurrentAmount) + Number(element.nonRecurrentAmount);
    });
    return sum;
  }
  calcBreakupultimateAnnualCss() {
    let sum = 0;
    this.expendDataSource.data.forEach((element, index) => {
        sum =
        sum + Number(element.recurrentAmount) * 12 / 11;
    });
    return sum;
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

  ontoken(index) {
    if (index.value === '1') {
      this.isvisibledata = true;
    } else {
      this.isvisibledata = false;
    }
  }
  ontokens(index) {
    if (index.value === '1') {
      this.yesNo2 = true;
    } else {
      this.yesNo2 = false;
    }
  }
  createForm() {
    this.createEstimateForm = this.fb.group({
      formType: ['1', Validators.required],
      finYear: ['1', Validators.required],
      departmentCode: ['1', Validators.required],
      branchCode: ['1', Validators.required],
      estimationFrom: ['1', Validators.required],
      estimationFor: ['1', Validators.required],
      demandCode: ['1', Validators.required],
      ministerInCharge: ['1', Validators.required],
      bpnCode: ['1', Validators.required],
      majorHeadCode: ['1', Validators.required],
      subMajorHeadCode: ['1', Validators.required],
      minorHeadCode: ['1', Validators.required],
      subHeadCode: ['1', Validators.required],
      detailHeadCode: ['1', Validators.required],
      chargedVoted: ['2', Validators.required],
      schemeType: ['1', Validators.required],
      cssPercentage: ['1', [Validators.min(0), Validators.max(100)]],
      itemCategory: ['1', Validators.required],
      // itemCategoryCheckList: ['', Validators.required],
      itemName: ['1', [Validators.required]],
      writeUpEng: ['1', [Validators.required]],
      writeUpGuj: ['1', [Validators.required]],
      financialYear: ['3'],
      proposalCategory: ['1'],
      majorCategory: ['1'],
      proposalType: ['1'],
      objectHead: ['1'],
      itemWorkName: [''],
      writeUpEnglish: [''],
      writeUpGujrati: [''],
      establishment: ['1'],
      expenditureType: ['1'],
      itemNames: [''],
      revenueCapital: ['1'],
      schemeTypeRatio: ['1'],
      noOfMonths: [{ value: 13 - new Date().getMonth().valueOf(), disabled: true }],
      classTwo: [''],
      finYearsad: [''],
      revenuecapital: [''],
    });
    this.createEstimateForm.disable();
  }
  addBrowserow() {
    this.dataSourceBrowse.data.push(['browse', 'uploadedFileName', 'action']);
    this.dataSourceBrowse = new MatTableDataSource(this.dataSourceBrowse.data);
  }
  deleteRow(element, index) {
    this.dataSourceBrowse.data.splice(index, 1);
    this.dataSourceBrowse = new MatTableDataSource(this.dataSourceBrowse.data);
  }
  decimalKeyPress(event: any) {
    const pattern = /^\d+(\.\d{0,2})?$/;
    const inputChar = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    // If the key is backspace, tab, left, right or delete
    // console.log('event.target.value', event.target.value);
    // console.log('tst', pattern.test(event.target.value));

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

  addFormCStmt1() {
    if (this.dataSourceFormCStmt1) {
      this.dataSourceFormCStmt1.data.forEach((element, index) => {
        if ((this.dataSourceFormCStmt1.data.length === (index + 1)) && element && element.designationEng &&
          element.noOfPosts && element.payScale && element.payPost && element.designationGuj) {
          const p_data = this.dataSourceFormCStmt1.data;
          p_data.push({
            designationEng: '', designationEngEdit: true, designationGuj: '', designationGujEdit: true, noOfPosts: '', noOfPostsEdit: true,
            payScale: '', payScaleEdit: true, payPost: '', payPostEdit: true

          });
          this.dataSourceFormCStmt1.data = p_data;
        } else if (this.dataSourceFormCStmt1.data.length === (index + 1)) {
          this.toastr.error('Please fill the detail.');
        }
      });
    }
  }

  deleteFormCStmt1(index) {
    this.dataSourceFormCStmt1.data.splice(index, 1);
    this.dataSourceFormCStmt1 = new MatTableDataSource(this.dataSourceFormCStmt1.data);
  }


  // add(event: MatChipInputEvent): void {
  //   // Add fruit only when MatAutocomplete is not open
  //   // To make sure this does not conflict with OptionSelected Event
  //   // debugger
  //   if (!this.matAutocomplete.isOpen) {
  //     const input = event.input;
  //     const value = event.value;
  //     // debugger
  //     // Add our fruit
  //     if ((value || '').trim()) {
  //       // tslint:disable-next-line: no-unused-expression
  //       (!this.codes.includes(value) && this.allMainCodes.includes(value)) ? this.codes.push(value.trim()) : '';
  //     }
  //     if (this.codes && this.codes.length > 0 && this.allMainCodes.includes(value)) {
  //       this.applyFilter(value);
  //     }
  //     // Reset the input value
  //     if (input) {
  //       input.value = '';
  //     }

  //     this.codeCtrl.setValue(null);
  //   }
  // }

  // remove(fruit: string): void {
  //   const index = this.codes.indexOf(fruit);

  //   if (index >= 0) {
  //     this.codes.splice(index, 1);
  //   }
  // }

  initialSubObject() {
    this.filteredSubObjects.next(this.sObjectHead.slice());
    // listen for search field value changes
    this.subObjectFilterCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterSubObject();
      });
  }

  // selected(event: MatAutocompleteSelectedEvent): void {
  //   // this.codes.push(event.option.viewValue);
  //   // tslint:disable-next-line:no-unused-expression
  //   // debugger
  //   (!this.codes.includes(event.option.viewValue)) ? this.codes.push(event.option.viewValue) : '';
  //   this.codeInput.nativeElement.value = '';
  //   this.setValue(null);
  //   if (this.codes && this.codes.length > 0 && this.allMainCodes.includes(event.option.viewValue)) {
  //     this.applyFilter(event.option.viewValue);
  //   }
  // }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.allMainCodes.filter(fruit => fruit.toLowerCase().indexOf(filterValue) === 0);
  }

  applyFilter(filterValue: string) {
    console.log(filterValue);

    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    // debugger
    // this.dataSource.filter = filterValue;
    // const pdata = this.dataSource.data.forEach(element => {
    //   return (this.codes.includes(element.objecthead)) ? element : '';
    // });
    // const pdata = ELEMENT_DATA;
    // this.dataSource.data = pdata.filter(x => this.codes.includes(x.objecthead));
    this.objectCodeFilterData();
  }

  getRowData(index) {
    // this.dataSource.data.forEach((data, dataindex: any) => {
    //   if (dataindex === index) {
    //     data.status = false;
    //   } else {
    //     data.status = true;
    //   }
    // });
  }

  onFormTypeSelect(event, index, element) {
    if (index === 0) {
      this.showFormC = true;
      this.showFormF = false;
    } else {
      this.showFormF = true;
      this.showFormC = false;
    }

  }

  onSchemeTypeSelect(index, element) {
    if (index === 1) {
      this.isCSS = true;
    } else {
      this.isCSS = false;
    }
  }

  // indexvalue;
  onItemCategorySelect() {
    this.itemCategorySelect = true;
    const index = this.index;


    //  switch (index) {
    //   case 0: this.isNewVehicle = true;
    //     break;
    //   case 1: this.isNewPost = true;
    //     break;
    //   case 2: this.isRenovationConstruction = true;
    //     break;
    //   case 3: this.isNewMachinaryEquipment = true;
    //     break;
    //   case 4: this.isNewOutsourceContractualManpower = true;
    //     break;
    //   case 5: this.isFurniture = true;
    //     break;
    //   case 6: this.isOthers =  true;
    //     break;
    //  }

    //  switch (index) {
    //   case 0: this.dataSourceItemCategoryChecklist = new MatTableDataSource(this.NewVehicleChecklistData);
    //     break;
    //   case 1: this.dataSourceItemCategoryChecklist = new MatTableDataSource(this.NewPostChecklistData);
    //    this.newpost = true;
    //     break;
    //   case 2: this.dataSourceItemCategoryChecklist = new MatTableDataSource(this.RenovationConstructionChecklistData);
    //     break;
    //   case 3: this.dataSourceItemCategoryChecklist = new MatTableDataSource(this.MachineryEquipmentChecklistData);
    //     break;
    //   case 4: this.OutSource = new MatTableDataSource(this.NewOutsourcesChecklistData);
    //       this.Outsourcesactive = true;
    //     break; /*commnt*/
    // case 5: this.isFurniture = true;
    //   break;
    // case 6: this.isOthers =  true;
    //   break;

    switch (index) {
      case '0':
        this.Vehicle = true;
        this.Outsourcesactive = false;
        this.construction = false;
        this.newpost = false;
        this.Machine = false;
        break;
      case '2':
        this.Outsourcesactive = false;
        this.construction = false;
        this.newpost = true;
        this.Vehicle = false;
        this.Machine = false;
        break;

      case '3': this.dataSourceItemCategoryChecklist = new MatTableDataSource(this.RenovationConstructionChecklistData);
        this.newpost = false;
        this.Outsourcesactive = false;
        // this.construction = true;
        this.Vehicle = false;
        this.Machine = false;

        break;
      case '4': this.dataSourceItemCategoryChecklist = new MatTableDataSource(this.MachineryEquipmentChecklistData);
        this.newpost = false;
        this.Outsourcesactive = false;
        this.construction = false;
        this.Vehicle = false;
        this.Machine = true;
        break;
      case '5':
        this.newpost = false;
        this.Outsourcesactive = true;
        this.construction = false;
        this.Vehicle = false;
        this.Machine = false;
        break;
    }
  }





  isCheckList = false;
  showchecklist() {
    this.isCheckList = !this.isCheckList;
  }

  valueCheckdata;
  valuegetCheckList() {
    const listdta = (this.valueCheckdata);
    this.ViewCatogarySourceData.forEach((element) => {
      element.name = listdta;
    });
  }

  newItemCheckList = true;
  placeSelection(event: any) {

    if (event == '1') {
      this.newItemCheckList = false;
      this.isdisableds = false;
      this.toastr.success('You are not eligible to submit a new item for "New Vehicle Category for in-charged post".');
    } else if (event == '2') {
      this.newItemCheckList = true;
      this.isdisableds = true;
    }
  }



  yesNo = false;
  yesNo2 = false;
  placeCharge2: string;
  placeCharge3: string;
  placeSelection2() {
    if (this.placeCharge2 == '1') {
      this.yesNo = true;
    } else {
      this.yesNo = false;
    }

  }
  placeSelection3() {
    if (this.placeCharge3 == '1') {
      this.yesNo2 = true;
    } else {
      this.yesNo2 = false;
    }
  }

  fiveSixLable = false;
  newVehicalSelection(event: any) {
    console.log(event);


    if (event == '2') {
      this.fiveSixLable = true;
    } else {
      this.fiveSixLable = false;
    }
  }

  QuotedRemarks = false;
  Quotedvehicle = false;
  selectQuoted(event: any) {
    if (event === '2') {
      this.QuotedRemarks = true;
    } else {
      this.QuotedRemarks = false;
    }
  }
  selectpurch(event: any) {
    if (event === '1') {
      this.Quotedvehicle = true;
    } else {
      this.Quotedvehicle = false;
    }
  }
  driveNameDate(event: any) {
    if (event = '1') {
      this.dataCapDriver = true;
    } else {
      this.dataCapDriver = false;
    }
  }



  showCharge(event, index, element) {

    if (element && element.objecthead && element.recurrentAmount && element.nonRecurrentAmount && element.budgetEstimateNextYear
      && element.ultimateAnnualRecurrentAmount) {

      this.expendCharges = true;
      // this.submitted = true;

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



      this.selSubObjectId = '';
      this.subObjectId = [];
      const data = this.dataSource.data.filter((x, i) => i === index);
      this.dataSource.data = data;
      this.showObject = element.objecthead;
      this.hodAmount = element.amountproposedbyHOD;
    } else {
      this.toastr.error('Please fill all the details object head!');
    }

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


  saveStandCharge() { }

  backCharge() {
    this.showObject = '';
    this.expendCharges = false;
    this.objectCodeFilterData();
  }

  objectCodeFilterData() {
    const pdata = ELEMENT_DATA_C2;
    this.dataSource.data = pdata.filter(x => this.codes.includes(x.objecthead));
  }

  stateDataSource = new MatTableDataSource(
    DISTRICT_ELEMENT_DATA1.sort((a, b) =>
      a.districtName > b.districtName
        ? 1
        : b.districtName > a.districtName
          ? -1
          : 0
    )
  );

  addExpense(showObject) {
    const expendDatacount = this.expendDataSource.data.length;
    if (this.selSubObjectId) {
      if (this.expendDataSource && this.expendDataSource.data && this.expendDataSource.data.length === 0) {
        this.expendDataSource.data = [{
          objecthead: this.selSubObjectId, recurrentAmount: 20.00, nonRecurrentAmount: 20.00, ultimateAnnualRecurrentAmount: 20.00,
          budgetEstimateNextYear: 40.00, remarks: ''
        }];
        this.subObjectId.push(this.selSubObjectId);
      } else {
        this.expendDataSource.data.forEach((element, index) => {
          element.objecthead = this.subObjectId[index];
          if ((this.expendDataSource.data.length === (index + 1)) && element && element.objecthead &&
            element.recurrentAmount && element.nonRecurrentAmount && element.ultimateAnnualRecurrentAmount
            && element.budgetEstimateNextYear) {
            const p_data = this.expendDataSource.data;
            this.subObjectId.push(this.selSubObjectId);
            // element.objecthead = this.subObjectId[index + 1];
            p_data.push({
              objecthead: this.selSubObjectId, recurrentAmount: 20.00, nonRecurrentAmount: 20.00, ultimateAnnualRecurrentAmount: 20.00,
              budgetEstimateNextYear: 40.00, remarks: ''
            });
            this.expendDataSource.data = p_data;
          } else if (this.expendDataSource.data.length === (index + 1)) {
            element.objecthead = this.subObjectId[index];
            this.toastr.error('Please fill the detail of object head ' + element.objecthead + '');
          }
        });
      }
    } else {
      this.toastr.error('Please select object head to add expense');
    }
    // debugger
  }



  getBillNo(data) {
  }



  // saveAllCharge() {
  //   let pstatus;
  //   let expenseHod: any = 0;
  //   let expendStatus;
  //   if (this.expendDataSource.data && this.expendDataSource.data.length === 0) {
  //     this.toastr.error('Please add the expense with selected object head.');
  //   } else {
  //     this.expendDataSource.data.forEach((element, index) => {
  //       // element.objecthead = showObject;
  //       if (element.objecthead === '' || element.recurrentAmount === '' || element.nonRecurrentAmount === '' || element.budgetEstimateNextYear === '' ||
  //       element.ultimateAnnualRecurrentAmount === '' || element.last8month === '' || element.first4month === '' || element.amountproposedbyHOD === '') {
  //         pstatus = 1;
  //       } else if (element && element.objecthead &&
  //         element.recurrentAmount && element.nonRecurrentAmount && element.budgetEstimateNextYear
  //         && element.ultimateAnnualRecurrentAmount && element.last8month && element.first4month && element.amountproposedbyHOD) {
  //         expenseHod = expenseHod + Number(element.amountproposedbyHOD);
  //         if (this.hodAmount !== expenseHod) {
  //           pstatus = 2;
  //         }
  //         // this.hodAmount
  //         // this.toastr.error('Please fill the detail of object head ' + showObject + '');
  //       } else {
  //         pstatus = '';
  //       }
  //       if (this.expendDataSource.data.length === (index + 1)) {
  //         if (pstatus === 1) {
  //           this.toastr.error('Please fill the detail for sub object head.');
  //         } else if (pstatus === 2) {
  //           this.toastr.error('Your proposed HOD amount did not match to main object proposed HOD.');
  //         } else {
  //           this.toastr.success('Your expendcharges proposed HOD amount matched successfully.');
  //           // this.expendCharges = false;
  //           expendStatus = true;
  //           return;
  //         }
  //       }
  //     });
  //   }

  //   let sData = 0;
  //   let districtStatus;
  //     this.districtDataSource.data.forEach((element, index) => {
  //       if (element) {
  //         sData += Number(element.expenditure) + Number(element.talukaexpenditure) + Number(element.gramexpenditure);
  //       }
  //       if (this.districtDataSource.data.length === (index + 1)) {
  //         if (this.hodAmount !== sData) {
  //           this.toastr.error('Your district, taluka & gram panchayat expense did not match to main object proposed HOD.');
  //         } else {
  //           this.toastr.success('Your district, taluka & gram panchayat expense matched to main object successfully.');
  //           districtStatus = true;
  //         }
  //       }
  //     });

  //     if (expendStatus && districtStatus && this.districtDataSource.data.length > 0 && this.expendDataSource.data.length > 0) {
  //       // tslint:disable-next-line:no-unused-expression
  //       (!this.succObjectCode.includes(this.showObject)) ? this.succObjectCode.push(this.showObject) : '';
  //       this.backCharge();
  //     } else if ((expendStatus || districtStatus) && (this.districtDataSource.data.length > 0 && this.expendDataSource.data.length > 0)) {
  //       // this.errObjectCode.push(this.showObject);
  //     }
  // }

  saveAllData() {
    this.toastr.success('Data Saved Successfully.');
  }

  covertToNumber(data) {
    let returnData;
    if (data.last8month && data.first4month) {
      returnData = Number(data.last8month) + Number(data.first4month);
    }
    return returnData;
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

  selectCharge(data) {
    // this.selSubObjectId = data.value;
    this.selSubObjectId = data.value[data.value.length - 1];
    this.addExpense(this.showObject);
  }
  onBlurMethod() {
    console.log('blur==>');
  }

  nomenclatureGJFocus() {
    if (this.gujaratiType) {
      SetGujarati();
      this.engAtiveClass = false;
      this.gujAtiveClass = true;
    }
  }
  nomenclatureGJFocusOut() {
    SetEnglish();
    this.gujaratiType = true;
    this.engAtiveClass = false;
    this.gujAtiveClass = false;
  }

  setgujarati() {
    this.gujaratiType = false;
    this.engAtiveClass = false;
    this.gujAtiveClass = true;
    SetGujarati();
    this.codeGJ.nativeElement.focus();
  }

  setenglish() {
    this.gujaratiType = false;
    this.engAtiveClass = true;
    this.gujAtiveClass = false;
    SetEnglish();
    this.codeGJ.nativeElement.focus();
  }

  checkGujarati(data) {
    this.createEstimateForm.patchValue({
      writeUpGuj: data
    });
  }

  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }

  gotoListing() {
    this.router.navigate(['./budget/budget-list']);
  }

  goToDashboard() {
    this.router.navigate(['']);
  }

  goToNext() {
    if (this.createEstimateForm.controls.formType.invalid) {
      this.toastr.error('Please fill all the details.');
      this.tabDisable = true;
      _.each(this.createEstimateForm.controls, function (control) {
        if (control.status === 'INVALID') {
          control.markAsTouched({ onlySelf: true });
        }
      });
    } else {
      this.tabDisable = false;
      this.selectedindex = 1;
      this.doneHeader = true;
    }
  }

  onFileSelection(fileSelected) {
    if (fileSelected.target && fileSelected.target.files) {
      this.dataSourceBrowse.data[this.fileBrowseIndex].file = fileSelected.target.files[0];
    }
  }
  onFileSelectiona(fileSelected) {
    if (fileSelected.target && fileSelected.target.files) {
      this.dataSourceBrowse.data[this.fileBrowseIndex].file = fileSelected.target.files[0];
    }
  }
  openFileSelector(index) {
    this.el.nativeElement.querySelector('#fileBrowse').click();
    this.fileBrowseIndex = index;
  }
  openFileSelectora(index) {
    this.el.nativeElement.querySelector('#fileBrowse').click();
    this.fileBrowseIndex = index;
  }

  onBrowseSelectChange() { }

  addBrowse() {
    if (this.dataSourceBrowse) {
      const data = this.dataSourceBrowse.data[this.dataSourceBrowse.data.length - 1];
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

  deleteObjectHeadRow(objIndex) {
    const p_data = this.dataSource.data;
    this.subObjectId.splice(objIndex, 1);
    p_data.splice(objIndex, 1);
    // element.objecthead = this.subObjectId[index + 1];
    this.dataSource.data = p_data;
  }

  deleteObjectHeadBreakupRow(objIndex) {
    const p_data = this.expendDataSource.data;
    this.subObjectId.splice(objIndex, 1);
    p_data.splice(objIndex, 1);
    // element.objecthead = this.subObjectId[index + 1];
    this.expendDataSource.data = p_data;
  }

  decimalPoint(data, key) {
    data[key] = Number(data[key]).toFixed(2);
  }

  // selectedObjectHead(event): void {
  //   // tslint:disable-next-line:no-unused-expression
  //   // if (!this.codes.includes(event.value)) {
  //   //   this.codes.push(event.value);
  //   //   this.codeCtrl.setValue(null);
  //   //   const value = this.allMainCodes.filter((objectHead) => {
  //   //       return objectHead.id === event.value;
  //   //     });
  //   //   if (this.codes && this.codes.length > 0 && (value.length) > 0) {
  //   //     this.applyFilter(event.value);
  //   //     // tslint:disable-next-line:no-unused-expression
  //   //     !this.changeInDetailTabCheck ? this.changeInDetailTabCheck = true : '';
  //   //   }
  //   // }

  //   //  this.codes.push(event.value);
  //   // tslint:disable-next-line:no-unused-expression
  //   // debugger
  //   (!this.codes.includes(event.value)) ? this.codes.push(event.value) : '';
  //   // this.codeInput.nativeElement.value = '';
  //   this.codeCtrl.setValue(null);
  //   if (this.codes && this.codes.length > 0 && this.allMainCodes.includes(event.value)) {
  //     this.applyFilter(event.value);
  //   }

  // }
  // selObj:boolean=false;
  // selectedObjectHead(event): void {
  //   // tslint:disable-next-line:no-unused-expression
  //   // this.selObj=true;
  //   event.value.forEach(element => {
  //     if (!this.codes.includes(element)) {
  //       this.codes.push(element);
  //       this.codeCtrl.setValue(null);
  //       const value = this.allMainCodes.filter((objectHead) => {
  //         return objectHead.value === element;
  //       });
  //       if (this.codes && this.codes.length > 0 && (value.length) > 0) {
  //         this.applyFilter(element);
  //         // tslint:disable-next-line:no-unused-expression
  //         // !this.changeInDetailTabCheck ? this.changeInDetailTabCheck = true : '';
  //       }
  //     }
  //   });
  // }

  selectedObjectHead(event): void {
    // console.log("checkValueInList event:");
    // console.log(typeof event.value);
    console.log(event.value);
    // console.log("codes :");


    // console.log(this.codes.includes(event.value));
    this.codes = [];
    this.codes = event.value;

    // console.log("codeCtrles :");
    // console.log( this.codeCtrl.value);
    this.codeCtrl.setValue(null);
    // console.log("printing codes "+this.codes);
    if (this.codes && this.codes.length > 0 && this.checkValueInList(event.value)) {
      // console.log("checkValueInList applyFilter true");
      this.applyFilter(event.value[0]);
    }
    // console.log("almaincodes:");
    // console.log(this.allMainCodes);
    // console.log(ELEMENT_DATA_C3 +" event- "+ event.value);
  }
  openHistory(data) {
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

  checkValueInList(value) {
    // console.log("checkValueInList");
    let flag = false;
    for (const str of value) {
      // console.log('checkValueInList str:' + str);
      for (const data of this.allMainCodes) {
        // console.log('checkValueInList data:' + data);
        if (data.value == str) {
          // console.log('checkValueInList data:' + data.value);
          // console.log("checkValueInList true");
          flag = true;
          break;
        }
      }
    }
    return flag;
  }



  saveEstimate() {

  }


  itemViewCatogary: string[] = ['position', 'checklist', 'action'];
  ViewCatogarySourceData = ELEMENT_DATAc;

  showConfirmationPopup() {
    const dialogRef = this.dialog.open(StadingChargeConfirmDialogComponent1, {
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

  submitToNextLevel(): void {
    const dialogRef = this.dialog.open(StandingChargeForwardDialogComponent1, {
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

  viewComments(): void {
    const dialogRef = this.dialog.open(StandingChargeViewCommentsComponent1, {
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
}

const ELEMENT_DATA: any[] = [
  { position: 1, name: 'Hydrogen' },
];
const ELEMENT_DATAc: any[] = [
  { position: 1, name: 'Account Officer' },
  { position: 2, name: 'Head Accountant' },
  { position: 3, name: 'Sub Accountant' },
];

@Component({
  selector: 'app-standing-charge-forward-dialog',
  templateUrl: 'new-item-forward-dialog.html',
  styleUrls: ['./new-item.component.css']
})
export class StandingChargeForwardDialogComponent1 implements OnInit {
  showAction: Boolean = true;

  fileBrowseIndex: number;
  date: any = new Date();
  brwoseData: any[] = [
    {
      name: undefined,
      file: undefined
    }
  ];
  dataSourceBrowse = new MatTableDataSource(this.brwoseData);
  displayedBrowseColumns = [
    'position',
    'attachmentType',
    'fileName',
    'browse',
    'uploadedByFileName',
    'uploadedFileName',
    'action'
  ];
  headerJso: HeaderElement[] = [
    { label: 'Financial Year', value: '2019-2020' },
    { label: 'Demand', value: '010: Other expenditure ' },
    { label: 'Revenue/Capital', value: 'Revenue' },
    { label: 'Major Head', value: '2205: Art and Culture' },
    { label: 'Sub Major Head', value: '00: ' },
    { label: 'Minor Head', value: '101: Fine Arts Education' },
    { label: 'Sub Head', value: '01: Grants to Sangeet Natya Bharati' },
    { label: 'Detailed Head', value: '00: Grants to Sangeet Natya Bharati' },
    { label: 'Charged/Voted', value: 'Voted' }
  ];

  displayData = false;

  attachment = [
    // {fileName:'Attachment 1', fileType:'image', filePath:'', imgStatus: false},
    {
      fileName: 'Attachment 1',
      fileType: 'image',
      filePath: '../../../assets/sample-attachments/image-sample.jpg',
      imgStatus: false
    },
    // {fileName:'Sample PDF', fileType:'pdf', filePath:'src/assets/img/OoPdfFormExample.pdf'},
    // {fileName:'Attachment 2', fileType:'pdf', filePath:'src/assets/img/pdf-test.pdf', pdfStatus: false},
    {
      fileName: 'Attachment 2',
      fileType: 'pdf',
      filePath: '../../../assets/sample-attachments/pdf-sample.pdf',
      pdfStatus: false
    }
    // {fileName:'Attachment 2', fileType:'pdf', filePath:'', pdfStatus: false},
  ];
  sample = 'src/assets/img/pdf-test.pdf';
  fieldArray = Array.apply(null, { length: 10 }).map(Number.call, Number);
  show = false;
  page = 1;
  totalPages: number;
  isLoaded = false;
  sampleFlag: boolean;
  tabDisable: Boolean = true;
  selectedIndex: number;

  actionForm: FormGroup;
  errorMessages = {
    FIN_YEAR: 'Please select any Financial Year',
    DEPARTMENT: 'Please select any Department'
  };

  forwardDialog_history_list: any[] = [
    {
      id: 3,
      userName: 'Shri P M Shah',
      designation: 'Deputy Secretaryr',
      role: 'Approver',
      date: '11/11/2019',
      comment: 'We may approve'
    },
    {
      id: 2,
      userName: 'Shri C Patel',
      designation: 'Section Officer',
      role: 'Verifier',
      date: '10/11/2019',
      comment: 'We may approve'
    },
    {
      id: 1,
      userName: 'Shri S M Modi',
      designation: 'Deputy Section Officer',
      role: 'Creator',
      date: '1/11/2019',
      comment:
        // tslint:disable-next-line: max-line-length
        'Please correct standing charge estimate for object head and correct all the calculations.Please verify last 3 year account as well as CSS grant received till date.Ask cooncerned officer from respective office to send necessay details at the earliest to department.'
    }

    // {userName: 'Shri S M modi', designation: 'HOD', date: '11/11/2019', comment: 'We may approve'},
    // {userName: 'Shri S M modi', designation: 'HOD', date: '11/11/2019', comment: 'We may approve'},
    // {userName: 'Shri S M modi', designation: 'HOD', date: '11/11/2019', comment: 'We may approve'},
    // {userName: 'Shri S M modi', designation: 'HOD', date: '11/11/2019', comment: 'We may approve'},
    // {userName: 'Shri S M modi', designation: 'HOD', date: '11/11/2019', comment: 'We may approve'},
    // {userName: 'Shri S M modi', designation: 'HOD', date: '11/11/2019', comment: 'We may approve'},
    // {userName: 'Shri S M modi', designation: 'HOD', date: '11/11/2019', comment: 'We may approve'},
  ];

  action_list: any[] = [
    { value: '1', viewValue: 'Forward' }
    // { value: 'Return', viewValue: 'Return' },
    // { value: 'Approve', viewValue: 'Approve' },
  ];

  user_list: any[] = [
    { value: '1', viewValue: 'Satendra Zala (DDO)' }
    // { value: '2', viewValue: 'Hardik Chaudhary' },
    // { value: '3', viewValue: 'C.K Brahmbhatt' },
  ];

  attachmentType_list: any[] = [{ value: '1', viewValue: 'WorkFlow' }];
  branch_list: any[] = [
    { value: '1', viewValue: 'A Branch' },
    { value: '2', viewValue: 'CH Branch' },
    { value: '3', viewValue: 'CASH Branch' },
    { value: '4', viewValue: 'REGISTRY Branch' }
  ];
  branchCtrl: FormControl = new FormControl();
  filteredBranch: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  actionCtrl: FormControl = new FormControl();
  filteredAction: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  userCodeCtrl: FormControl = new FormControl();
  filteredUserCode: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  attachmentTypeCodeCtrl: FormControl = new FormControl();
  filteredAttachmentTypeCode: ReplaySubject<any[]> = new ReplaySubject<any[]>(
    1
  );

  private _onDestroy = new Subject<void>();

  constructor(
    private toastr: ToastrService,
    private router: Router,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<StandingChargeForwardDialogComponent1>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private el: ElementRef
  ) { }

  filteredOptions: Observable<string[]>;
  options: any;
  myControl = new FormControl();
  additionalText = new FormControl();

  ngOnInit() {
    this.createForm();

    if (this.branch_list) {
      this.filteredBranch.next(this.branch_list.slice());
    }
    this.branchCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(
          this.branch_list,
          this.branchCtrl.value,
          this.filteredBranch
        );
      });

    if (this.action_list) {
      this.filteredAction.next(this.action_list.slice());
    }
    this.actionCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(
          this.action_list,
          this.actionCtrl.value,
          this.filteredAction
        );
      });

    if (this.user_list) {
      this.filteredUserCode.next(this.user_list.slice());
    }
    this.userCodeCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(
          this.user_list,
          this.userCodeCtrl.value,
          this.filteredUserCode
        );
      });
    this.filteredAttachmentTypeCode.next(this.attachmentType_list.slice());
    this.attachmentTypeCodeCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(
          this.attachmentType_list,
          this.attachmentTypeCodeCtrl.value,
          this.filteredAttachmentTypeCode
        );
      });
    console.log('data', this.data);
    this.options = this.data;
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );

    this.actionForm.patchValue({
      actionCode: '1',
      userCode: '1'
    });
  }

  backToAction() {
    this.showAction = true;
    this.show = false;

  }

  gotoListing() {
    this.router.navigate(['./budget/standing-charge-list']);
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
  uploadAttachment() {
    this.tabDisable = false;
    this.selectedIndex = 2;
  }
  createForm() {
    this.actionForm = this.fb.group({
      actionCode: ['', Validators.required],
      userCode: ['', Validators.required],
      branch: ['']
    });
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option =>
      option.toLowerCase().includes(filterValue)
    );
  }

  onNoClick(): void {
    this.dialogRef.close('no');
  }

  forwardConsolidate() {
    console.log('forwardConsolidate');
    this.dialogRef.close('yes');
  }

  nextPage() {
    this.page += 1;
    if (this.page > this.totalPages) {
      this.page = this.totalPages;
    }
  }

  previousPage() {
    this.page -= 1;
    if (this.page < 1) {
      this.page = 1;
    }
  }

  afterLoadComplete(pdfData: any) {
    // console.log("pdfData",  pdfData)
    this.totalPages = pdfData.numPages;
    // this.isLoaded = true;
  }

  // initVar(){
  //   this.totalPages = 0;
  //   this.page = 1;
  // }



  checkDisplayFile(data) {
    for (let i = 0; i < this.attachment.length; i++) {
      if (data.fileType === 'image') {
        if ((this.showAction = true)) {
          this.showAction = false;
        }
        if (this.attachment[i].fileName == data.fileName) {
          this.attachment[i].imgStatus = !this.attachment[i].imgStatus;
          this.show = this.attachment[i].imgStatus ? true : false;
          // this.showAction = true;
        } else {
          this.attachment[i].imgStatus = false;
          // this.show = false;
        }
      } else if (data.fileType === 'pdf') {
        if ((this.showAction = true)) {
          this.showAction = false;
        }
        if (this.attachment[i].fileName === data.fileName) {
          this.attachment[i].pdfStatus = !this.attachment[i].pdfStatus;
          this.show = this.attachment[i].pdfStatus ? true : false;
          // this.showAction = true;
        } else {
          this.attachment[i].pdfStatus = false;
        }
      } else {
        // this.attachment[i].imgStatus? false : '';
        // this.attachment[i].pdfStatus? false : '';
      }
      if (this.show === false) {
        this.showAction = true;
        if (this.attachment[i].fileType === 'image') {
          this.attachment[i].imgStatus = false;
        } else if (this.attachment[i].fileType === 'pdf') {
          this.attachment[i].pdfStatus = false;
        }
      }
    }
    // if(data.fileType === 'image'){
    // data.imgStatus = !data.imgStatus;
    // (data.imgStatus) ? (data.imgStatus = false) : (data.imgStatus = true);
    // (!data.pdfStatus) ? (data.imgStatus = false) : '';
    // if(!data.pdfStatus) {
    //   this.sampleFlag = true;
    // }

    //   if(data.imgStatus){
    //     data.imgStatus = false;
    //   } else {
    //     console.log('hello one');
    //     data.imgStatus = true;
    //     // data.pdfStatus = false;
    //   }
    // } else{
    //   // data.imgStatus = false;
    // }

    // if(data.fileType === 'pdf'){
    //   // (!data.imgStatus) ? (data.pdfStatus = false) : '';
    //   // data.pdfStatus = !data.pdfStatus;
    //   if(data.pdfStatus){
    //     data.pdfStatus = false;
    //   } else {
    //     console.log('hello one');
    //     // data.imgStatus = false;
    //     data.pdfStatus = true;
    //   }
    // } else{
    //   // data.pdfStatus = false;
    //   // data.imgStatus = false;
    // }
    console.log(data);
    // return data;
  }

  onFileSelection(fileSelected) {
    if (fileSelected.target && fileSelected.target.files) {
      this.dataSourceBrowse.data[this.fileBrowseIndex].file =
        fileSelected.target.files[0];
    }
  }

  openFileSelector(index) {
    this.el.nativeElement.querySelector('#fileBrowse').click();
    this.fileBrowseIndex = index;
  }

  onBrowseSelectChange() { }

  addBrowse() {
    if (this.dataSourceBrowse) {
      const data = this.dataSourceBrowse.data[
        this.dataSourceBrowse.data.length - 1
      ];
      if (data && data.name && data.file) {
        const p_data = this.dataSourceBrowse.data;
        p_data.push({
          name: undefined,
          file: undefined
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
}
@Component({
  selector: 'app-standing-charge-confirm-dialog',
  templateUrl: './new-item.confirm.dialog.html',
  styleUrls: ['./new-item.component.css']
})
export class StadingChargeConfirmDialogComponent1 implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<StadingChargeConfirmDialogComponent1>
  ) { }

  ngOnInit() { }

  onCancel(): void {
    this.dialogRef.close('no');
  }

  onSave(): void {
    this.dialogRef.close('save');
  }
}

@Component({
  selector: 'app-standing-charge-view-comments-dialog',
  templateUrl: 'new-item-view-comments-dialog.html',
  styleUrls: ['./new-item.component.css']
})
export class StandingChargeViewCommentsComponent1 implements OnInit {
  // showAction: Boolean = true;

  fileBrowseIndex: number;
  date: any = new Date();
  brwoseData: any[] = [
    {
      name: undefined,
      file: undefined
    }
  ];
  dataSourceBrowse = new MatTableDataSource(this.brwoseData);
  displayedBrowseColumns = [
    'attachmentType',
    'fileName',
    'browse',
    'uploadedFileName',
    'action'
  ];
  headerJso: HeaderElement[] = [
    { label: 'Financial Year', value: '2019-2020' },
    { label: 'Demand', value: '010: Other expenditure ' },
    { label: 'Revenue/Capital', value: 'Revenue' },
    { label: 'Major Head', value: '2205: Art and Culture' },
    { label: 'Sub Major Head', value: '00: ' },
    { label: 'Minor Head', value: '101: Fine Arts Education' },
    { label: 'Sub Head', value: '01: Grants to Sangeet Natya Bharati' },
    { label: 'Detailed Head', value: '00: Grants to Sangeet Natya Bharati' },
    { label: 'Charged/Voted', value: 'Voted' }
  ];

  displayData = false;

  attachment = [
    // {fileName:'Attachment 1', fileType:'image', filePath:'', imgStatus: false},
    {
      fileName: 'Attachment 1',
      fileType: 'image',
      filePath: '../../../assets/sample-attachments/image-sample.jpg',
      imgStatus: false
    },
    // {fileName:'Sample PDF', fileType:'pdf', filePath:'src/assets/img/OoPdfFormExample.pdf'},
    // {fileName:'Attachment 2', fileType:'pdf', filePath:'src/assets/img/pdf-test.pdf', pdfStatus: false},
    {
      fileName: 'Attachment 2',
      fileType: 'pdf',
      filePath: '../../../assets/sample-attachments/pdf-sample.pdf',
      pdfStatus: false
    }
    // {fileName:'Attachment 2', fileType:'pdf', filePath:'', pdfStatus: false},
  ];
  sample = 'src/assets/img/pdf-test.pdf';
  fieldArray = Array.apply(null, { length: 10 }).map(Number.call, Number);
  show = true;
  page = 1;
  totalPages: number;
  isLoaded = false;
  sampleFlag: boolean;



  actionForm: FormGroup;

  errorMessages = {
    FIN_YEAR: 'Please select any Financial Year',
    DEPARTMENT: 'Please select any Department'
  };

  master_checked = false;
  master_indeterminate = false;

  forwardDialog_history_list: any[] = [
    {
      disabled: false,
      checked: false,
      labelPosition: 'after',
      id: 1,
      userName: 'Shri P M Shah',
      designation: 'Deputy Secretary',
      role: 'Approver',
      date: '11/11/2019',
      comment: 'We may approve'
    },
    {
      disabled: false,
      checked: false,
      labelPosition: 'after',
      id: 2,
      userName: 'Shri C Patel',
      designation: 'Section Officer',
      role: 'Verifier',
      date: '10/11/2019',
      comment: 'We may approve'
    },
    {
      disabled: false,
      checked: false,
      labelPosition: 'after',
      id: 3,
      userName: 'Shri S M Modi',
      designation: 'Deputy Section Officer',
      role: 'Creator',
      date: '1/11/2019',
      comment:
        // tslint:disable-next-line: max-line-length
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }

    // {userName: 'Shri S M modi', designation: 'HOD', date: '11/11/2019', comment: 'We may approve'},
    // {userName: 'Shri S M modi', designation: 'HOD', date: '11/11/2019', comment: 'We may approve'},
    // {userName: 'Shri S M modi', designation: 'HOD', date: '11/11/2019', comment: 'We may approve'},
    // {userName: 'Shri S M modi', designation: 'HOD', date: '11/11/2019', comment: 'We may approve'},
    // {userName: 'Shri S M modi', designation: 'HOD', date: '11/11/2019', comment: 'We may approve'},
    // {userName: 'Shri S M modi', designation: 'HOD', date: '11/11/2019', comment: 'We may approve'},
    // {userName: 'Shri S M modi', designation: 'HOD', date: '11/11/2019', comment: 'We may approve'},
  ];

  action_list: any[] = [
    { value: '1', viewValue: 'Forward' }
    // { value: 'Return', viewValue: 'Return' },
    // { value: 'Approve', viewValue: 'Approve' },
  ];

  user_list: any[] = [
    { value: '1', viewValue: 'Satendra Zala (DDO)' }
    // { value: '2', viewValue: 'Hardik Chaudhary' },
    // { value: '3', viewValue: 'C.K Brahmbhatt' },
  ];

  attachmentType_list: any[] = [{ value: '1', viewValue: 'WorkFlow' }];

  // branchPopupCtrl:FormControl = new FormControl();
  branch_list: any[] = [
    { value: '1', viewValue: 'A Branch' },
    { value: '2', viewValue: 'CH Branch' },
    { value: '3', viewValue: 'CASH Branch' },
    { value: '4', viewValue: 'REGISTRY Branch' }
  ];

  branchPopupCtrl: FormControl = new FormControl();
  branchPopupType: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  actionCtrl: FormControl = new FormControl();
  filteredAction: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  userCodeCtrl: FormControl = new FormControl();
  filteredUserCode: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  attachmentTypeCodeCtrl: FormControl = new FormControl();
  filteredAttachmentTypeCode: ReplaySubject<any[]> = new ReplaySubject<any[]>(
    1
  );

  private _onDestroy = new Subject<void>();

  constructor(
    private toastr: ToastrService,
    private router: Router,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<StandingChargeViewCommentsComponent1>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private el: ElementRef
  ) { }

  filteredOptions: Observable<string[]>;
  options: any;
  myControl = new FormControl();
  additionalText = new FormControl();

  ngOnInit() {
    this.createForm();

    if (this.action_list) {
      this.filteredAction.next(this.action_list.slice());
    }
    this.actionCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(
          this.action_list,
          this.actionCtrl.value,
          this.filteredAction
        );
      });
    if (this.user_list) {
      this.filteredUserCode.next(this.user_list.slice());
    }
    this.branchPopupCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(
          this.branch_list,
          this.branchPopupCtrl.value,
          this.branchPopupType
        );
      });

    this.userCodeCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(
          this.user_list,
          this.userCodeCtrl.value,
          this.filteredUserCode
        );
      });

    this.filteredAttachmentTypeCode.next(this.attachmentType_list.slice());
    this.attachmentTypeCodeCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(
          this.attachmentType_list,
          this.attachmentTypeCodeCtrl.value,
          this.filteredAttachmentTypeCode
        );
      });
    console.log('data', this.data);
    this.options = this.data;
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );

    this.actionForm.patchValue({
      actionCode: '1',
      userCode: '1'
    });

    // this.checkDisplayFile(this.attachment[0]);
  }

  gotoListing() {
    this.router.navigate(['./budget/standing-charge-list']);
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
      userCode: ['', Validators.required],
      branchPopupCode: ['']
    });
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option =>
      option.toLowerCase().includes(filterValue)
    );
  }

  onNoClick(): void {
    this.dialogRef.close('no');
  }

  forwardConsolidate() {
    console.log('forwardConsolidate');
    this.dialogRef.close('yes');
  }

  nextPage() {
    this.page += 1;
    if (this.page > this.totalPages) {
      this.page = this.totalPages;
    }
  }

  previousPage() {
    this.page -= 1;
    if (this.page < 1) {
      this.page = 1;
    }
  }

  afterLoadComplete(pdfData: any) {
    // console.log("pdfData",  pdfData)
    this.totalPages = pdfData.numPages;
    // this.isLoaded = true;
  }

  // initVar(){
  //   this.totalPages = 0;
  //   this.page = 1;
  // }

  checkDisplayFile(data) {
    for (let i = 0; i < this.attachment.length; i++) {
      if (data.fileType === 'image') {
        if (this.attachment[i].fileName === data.fileName) {
          this.attachment[i].imgStatus = !this.attachment[i].imgStatus;
          this.show = this.attachment[i].imgStatus ? true : false;
        } else {
          this.attachment[i].imgStatus = false;
          // this.show = false;
        }
      } else if (data.fileType === 'pdf') {
        if (this.attachment[i].fileName === data.fileName) {
          this.attachment[i].pdfStatus = !this.attachment[i].pdfStatus;
          this.show = this.attachment[i].pdfStatus ? true : false;
        } else {
          this.attachment[i].pdfStatus = false;
        }
      } else {
        // this.attachment[i].imgStatus? false : '';
        // this.attachment[i].pdfStatus? false : '';
      }
      if (this.show === false) {
        if (this.attachment[i].fileType === 'image') {
          this.attachment[i].imgStatus = false;
        } else if (this.attachment[i].fileType === 'pdf') {
          this.attachment[i].pdfStatus = false;
        }
      }
    }
    console.log(data);
    // return data;
  }

  onFileSelection(fileSelected) {
    if (fileSelected.target && fileSelected.target.files) {
      this.dataSourceBrowse.data[this.fileBrowseIndex].file =
        fileSelected.target.files[0];
    }
  }

  openFileSelector(index) {
    this.el.nativeElement.querySelector('#fileBrowse').click();
    this.fileBrowseIndex = index;
  }

  onBrowseSelectChange() { }

  addBrowse() {
    if (this.dataSourceBrowse) {
      const data = this.dataSourceBrowse.data[
        this.dataSourceBrowse.data.length - 1
      ];
      if (data && data.name && data.file) {
        const p_data = this.dataSourceBrowse.data;
        p_data.push({
          name: undefined,
          file: undefined
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

  master_change() {
    for (const value of Object.values(this.forwardDialog_history_list)) {
      value.checked = this.master_checked;
    }
  }

  list_change() {
    let checked_count = 0;
    // Get total checked items
    for (const value of Object.values(this.forwardDialog_history_list)) {
      if (value.checked) { checked_count++; }
    }

    if (
      checked_count > 0 &&
      checked_count < this.forwardDialog_history_list.length
    ) {
      // If some checkboxes are checked but not all; then set Indeterminate state of the master to true.
      this.master_indeterminate = true;
    } else if (checked_count == this.forwardDialog_history_list.length) {
      // If checked count is equal to total items; then check the master checkbox and also set Indeterminate state to false.
      this.master_indeterminate = false;
      this.master_checked = true;
    } else {
      // If none of the checkboxes in the list is checked then uncheck master also set Indeterminate to false.
      this.master_indeterminate = false;
      this.master_checked = false;
    }
  }


}
