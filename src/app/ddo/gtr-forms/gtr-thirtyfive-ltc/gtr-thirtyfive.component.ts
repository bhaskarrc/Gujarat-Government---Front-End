import { Component, OnInit, Inject } from '@angular/core';
import {
  MatTableDataSource,
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialog
} from '@angular/material';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import { Router } from '@angular/router';
import { ddoMasage } from 'src/app/common/error-message/common-message.constants';
import { TravelDetailsThirtyFive } from 'src/app/model/ddo-forms';
import { DdoDirective } from 'src/app/common/directive/ddo-directive';

const columns1: string[] = ['mJorney',
  'station',
  'depaDate',
  'hour',
  'stationArrival',
  'ariaDate',
  'hourslast',
  'typeOfJourney',
  'purposeOfJourney',
  'trainType',
  'fareClass',
  'Vehicle',
  'owner',
  'noOfFares',
  'fareAmount',
  'action'];

const columns2: string[] = ['mJorney',
  'station',
  'depaDate',
  'hour',
  'place',
  'stationArrival',
  'ariaDate',
  'hourslast',
  'placeLast',
  'typeOfJourney',
  'purposeOfJourney',
  'trainType',
  'fareClass',
  'Vehicle',
  'owner',
  'noOfFares',
  'fareAmount',
  'action'];


/**GtrThirtyfiveComponent starts */
@Component({
  selector: 'app-gtr-thirtyfive',
  templateUrl: './gtr-thirtyfive.component.html',
  styleUrls: ['./gtr-thirtyfive.component.css']
})
export class GtrThirtyfiveComponent implements OnInit {

  // variables
  certifiesAmount;
  colspan1 = 3;
  colspan2 = 3;
  fileBrowseIndex: number;
  selectedIndex: number;
  todayDate = Date.now();
  tabDisable: Boolean = true;
  dob;
  doj;
  errormsg;
  isRoad = true;

  // Date
  maxDate = new Date();

  // directive object for workflow dialog
  directiveObject = new DdoDirective(this.dialog);

  // form group
  formThirtyFive: FormGroup;

  // form control
  date = new FormControl(new Date());
  placeCtrl: FormControl = new FormControl();
  jprneyCtrl: FormControl = new FormControl();


  // lists start
  placeLists: ListValue[] = [
    { value: '1', viewValue: 'Residence' },
    { value: '2', viewValue: 'Own Office' },
    { value: '3', viewValue: 'Other Office' },
    { value: '4', viewValue: 'Hotel/Lodge/Guest House' },
    { value: '5', viewValue: 'Bus/Railway Station' },
  ];

  trasportLists: ListValue[] = [
    { value: '1', viewValue: 'Railway' },
    { value: '2', viewValue: 'Road' },
    { value: '3', viewValue: 'Airway' },
  ];

  ownerList: ListValue[] = [
    { value: '1', viewValue: 'Private Transport' },
    { value: '2', viewValue: 'Public Transport' }
  ];

  vehicleList: ListValue[] = [
    { value: '1', viewValue: 'AC Bus' },
    { value: '2', viewValue: 'Private Bus' },
    { value: '3', viewValue: 'Public Bus' },
  ];

  fareClassRailwayList: ListValue[] = [
    { value: '1', viewValue: 'Executive Class' },
    { value: '2', viewValue: 'AC First Class' },
    { value: '3', viewValue: 'II AC 2 Tier Sleeper' },
    { value: '4', viewValue: 'II AC 3 Tier Sleeper' },
    { value: '5', viewValue: 'First Class Sleeper' },
    { value: '6', viewValue: 'Second Class Sleeper' },
    { value: '7', viewValue: 'AC Chair Car' },
  ];

  fareClassAirwaysList: ListValue[] = [
    { value: '1', viewValue: 'First Class' },
    { value: '2', viewValue: 'Buisness Class' },
    { value: '3', viewValue: 'Economy Class' },
  ];

  trainTypeList: ListValue[] = [
    { value: '1', viewValue: 'Rajdhani' },
    { value: '2', viewValue: 'Shatabdi' },
    { value: '3', viewValue: 'Other Train' },
  ];
  typeOfJourneyList: ListValue[] = [
    { value: '1', viewValue: 'L.T.C' }
  ];

  attachmentTypeCode: ListValue[] = [
    { value: '01', viewValue: 'Supporting Document' },
    { value: '02', viewValue: 'Sanction Order' },
    { value: '03', viewValue: 'Others' }
  ];
  // list end

  // Travel Details data start
  travelDisplayColumn: string[] = [
    'mJorney',
    'station',
    'depaDate',
    'hour',
    'stationArrival',
    'ariaDate',
    'hourslast',
    'typeOfJourney',
    'purposeOfJourney',
    'trainType',
    'fareClass',
    'Vehicle',
    'owner',
    'noOfFares',
    'fareAmount',
    'action'

  ];
  travelDetails: TravelDetailsThirtyFive[] = [
    {
      mJorney: '',
      station: '',
      depaDate: '',
      hour: '',
      place: '',
      stationArrival: '',
      ariaDate: '',
      hourslast: '',
      placeLast: '',
      typeOfJourney: '',
      purposeOfJourney: '',
      trainType: '',
      fareClass: '',
      Vehicle: '',
      owner: '',
      noOfFares: '',
      fareAmount: '',
    },
    {
      mJorney: '',
      station: '',
      depaDate: '',
      hour: '',
      place: '',
      stationArrival: '',
      ariaDate: '',
      hourslast: '',
      placeLast: '',
      typeOfJourney: '',
      purposeOfJourney: '',
      trainType: '',
      fareClass: '',
      Vehicle: '',
      owner: '',
      noOfFares: '',
      fareAmount: '',
    }
  ];
  travelDEtailsDatasource = new MatTableDataSource(this.travelDetails);
  // Travel Details data end

  // constructor
  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    private router: Router
  ) { }


  resetForm() { }

  ngOnInit() {
    this.errormsg = ddoMasage;
    this.formThirtyFiveData();
    this.dob = new Date((new Date().getFullYear()) - 60, new Date().getMonth(), new Date().getDay());
    this.doj = new Date((new Date().getFullYear()) - 40, new Date().getMonth(), new Date().getDay());
  }

  // form data function
  formThirtyFiveData() {
    this.formThirtyFive = this.fb.group({
      payBasic: [''],
      headQut: [''],
      gpfNo: [''],
      cpfNo: [''],
    });
  }

  // get current tab index
  getTabIndex(tabIndex) {
    this.selectedIndex = tabIndex;
  }

  // pass the control to next tab
  goToNext() {
    this.tabDisable = false;
    this.selectedIndex = 1;
  }

  // redirects to cheque-list
  gotoCheckList() {
    this.router.navigate(['/ddo/cheque-list']);
  }

  // add row in travel details table
  addTravelDetails() {
    const Col_Data = this.travelDEtailsDatasource.data;
    Col_Data.push(
      {
        mJorney: '',
        station: '',
        depaDate: '',
        hour: '',
        place: '',
        stationArrival: '',
        ariaDate: '',
        hourslast: '',
        placeLast: '',
        typeOfJourney: '',
        purposeOfJourney: '',
        trainType: '',
        fareClass: '',
        Vehicle: '',
        owner: '',
        noOfFares: '',
        fareAmount: '',
      },
    );
    this.travelDEtailsDatasource.data = Col_Data;
  }

  // delete row in travel detials table
  deleteTravelsDetails(index) {
    this.travelDEtailsDatasource.data.splice(index, 1);
    this.travelDEtailsDatasource = new MatTableDataSource(this.travelDEtailsDatasource.data);
  }


  // opens calculation dialog box
  openclculation(): void {
    // tslint:disable-next-line: no-use-before-declare
  }

  // total expenditure
  totExpn() {
    let amt1;
    let amt2;
    let amt3;
    let amt4;
    let totalAmt;
    this.travelDEtailsDatasource.data.forEach(() => {
      amt1 = this.travelDEtailsDatasource.data[0].noOfFares;
      amt2 = this.travelDEtailsDatasource.data[1].noOfFares;
      amt3 = this.travelDEtailsDatasource.data[0].fareAmount;
      amt4 = this.travelDEtailsDatasource.data[1].fareAmount;
      totalAmt = + Number(amt1) + Number(amt2) + Number(amt3) + Number(amt4);

    });
    return totalAmt;
  }

  // redirect to report
  goToReport() {
    this.router.navigate(['/ddo/report-gtr-35']);
  }

  // on selecting mode of journey
  onSelectingModeOfJourney(event) {
    if (event.value === '2') {
      this.travelDisplayColumn = columns2;
      this.colspan1 = 4;
      this.colspan2 = 4;

    } else {
      this.colspan1 = 3;
      this.colspan2 = 3;
      this.travelDisplayColumn = columns1;
    }
  }

  // sets the hour value for hh value in arrival
  onHour1(event, item) {
    const value = event.target.value;
    const length = value.length;
    let ans;
    let hh1;
    let mm1;
    if (length === 4) {

      const hh = Math.floor((event.target.value) / 100);
      const mm = Math.floor((event.target.value) % 100);
      if (hh >= 0 && hh <= 9) {
        hh1 = '0' + hh.toString();
      } else {
        hh1 = hh.toString();
      }
      if (mm >= 0 && mm <= 9) {
        mm1 = '0' + mm.toString();
      } else {
        mm1 = mm.toString();
      }

      if ((hh1 >= '00' && hh1 < '24') && (mm1 >= '00' && mm1 < '60')) {
        ans = hh1 + ':' + mm1;
        item.hourslast = ans;
      } else {
        ans = '';
        item.hourslast = ans;
      }
    } else {
      ans = '';
      item.hourslast = ans;
    }
  }

  // sets the hour value for hh value in departure
  onHour(event, item) {
    const value = event.target.value;
    const length = value.length;

    let ans;
    let hh1;
    let mm1;
    if (length === 4) {

      const hh = Math.floor((event.target.value) / 100);
      const mm = Math.floor((event.target.value) % 100);
      if (hh >= 0 && hh <= 9) {
        hh1 = '0' + hh.toString();
      } else {
        hh1 = hh.toString();
      }
      if (mm >= 0 && mm <= 9) {
        mm1 = '0' + mm.toString();
      } else {
        mm1 = mm.toString();
      }

      if ((hh1 >= '00' && hh1 < '24') && (mm1 >= '00' && mm1 < '60')) {
        ans = hh1 + ':' + mm1;
        item.hour = ans;
      } else {
        ans = '';
        item.hour = ans;
      }
    } else {
      ans = '';
      item.hour = ans;
    }
  }
}
/**GtrThirtyfiveComponent ends */


/**CalculationDialog starts */
@Component({
  // tslint:disable-next-line: component-selector
  selector: 'calculation-dialog',
  templateUrl: 'calculation-dialog.html',
  styleUrls: ['./gtr-thirtyfive.component.css']
})
// tslint:disable-next-line: component-class-suffix
export class CalculationDialog {

  // variables
  fare1;
  fare2;
  fareAmount1;
  fareAmount2;
  totalamt;

  // constructor
  constructor(
    public dialogRef: MatDialogRef<CalculationDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {

    this.fare1 = this.data.fare1;
    this.fare2 = this.data.fare1;
    this.fareAmount1 = this.data.fareAmount1;
    this.fareAmount2 = this.data.fareAmount2;
    this.totalamt = Number(this.fareAmount1) + Number(this.fareAmount2);
  }

}
/**CalculationDialog ends */
