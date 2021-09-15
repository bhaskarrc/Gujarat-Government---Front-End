import { Component, OnInit, ElementRef, Inject } from '@angular/core';
import {
  MatTableDataSource,
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialog
} from '@angular/material';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import { DialogData } from 'src/app/model/standing-charge';
import { Router } from '@angular/router';
import { ddoMasage } from 'src/app/common/error-message/common-message.constants';
import { TravelDetailsThirtyFive } from 'src/app/model/ddo-forms';
import { DdoDirective } from 'src/app/common/directive/ddo-directive';
import { Attachment } from 'src/app/model/ddo-forms';




/** GtrThirtyfiveNormalComponent starts */
@Component({
  selector: 'app-gtr-thirtyfive-normal',
  templateUrl: './gtr-thirtyfive-normal.component.html',
  styleUrls: ['./gtr-thirtyfive-normal.component.css']
})
export class GtrThirtyfiveNormalComponent implements OnInit {

  // variables
  fileBrowseIndex: number;
  selectedIndex: number;
  showAction: Boolean = true;
  show = false;
  checkTable = false;
  epayment = true;
  tabDisable: Boolean = true;
  isItemList = false;
  isInputEdpCode = true;
  isDelete = false;
  paymentTypeDropDown = true;
  isInputEdpCode1 = true;
  DDoParty: string;
  empdetails = false;
  dob;
  doj;
  errormsg;
  billRigister;
  BillTransit;
  message;

  // date
  maxDate = new Date();
  todayDate = Date.now();

  // directive object for workfloe dialog
  directiveObject = new DdoDirective(this.dialog);

  // form group
  formThirtyFiveNormal: FormGroup;

  // from control
  placeCtrl: FormControl = new FormControl();
  jprneyCtrl: FormControl = new FormControl();
  employeeTypeCtrl: FormControl = new FormControl();
  date = new FormControl(new Date());

  // lists
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
    { value: '4', viewValue: 'Private Transport' },
    { value: '5', viewValue: 'Public Transport' },
    { value: '1', viewValue: 'Govt Vehicle Self Paid' },
    { value: '2', viewValue: 'Govt Paid Vehicle' },
    { value: '3', viewValue: 'Personal Vehicle' },

  ];

  vehicleList: ListValue[] = [
    { value: '1', viewValue: 'Car/Jeep (Petrol)' },
    { value: '2', viewValue: 'Car/Jeep (Diesel)' },
    { value: '3', viewValue: 'Motorcycle' },
    { value: '4', viewValue: 'AC Bus' },
    { value: '5', viewValue: 'Private Bus' },
    { value: '6', viewValue: 'Public Bus' },
    { value: '7', viewValue: 'AC Taxi' },
    { value: '8', viewValue: 'Auto Rikshaw' },
    { value: '9', viewValue: 'Other Vehicle' },
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
    { value: '1', viewValue: 'Tour' },
    { value: '2', viewValue: 'Training' },
    { value: '3', viewValue: 'Onduty' },
    { value: '4', viewValue: 'Transfer' },
    { value: '5', viewValue: 'Other Journey' }
  ];

  attachmentTypeCode: ListValue[] = [
    { value: '01', viewValue: 'Supporting Document' },
    { value: '02', viewValue: 'Sanction Order' },
    { value: '03', viewValue: 'Others' }
  ];
  // lists end

  // Travel Details
  travelDisplayColumn: string[] = [

    'mJorney',
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
    'Kilometers',
    'action'

  ];

  travelDetailsData: TravelDetailsThirtyFive[] = [
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
      kilometer: ''
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
      kilometer: ''
    }
  ];
  travelDetailsDatasource = new MatTableDataSource(this.travelDetailsData);
  // travel details end

  // attachment
  browseData: Attachment[] = [
    {
      name: undefined,
      file: undefined
    }
  ];
  displayedBrowseColumns = [
    'serialNo',
    'attachmentType',
    'fileName',
    'browse',
    'uploadedFileName',
    'uploadedBy',
    'action'
  ];
  dataSourceBrowse = new MatTableDataSource(this.browseData);
  // attachment table data end

  // constructor
  constructor(
    private fb: FormBuilder,
    private el: ElementRef,
    public dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit() {
    this.errormsg = ddoMasage;
    this.formThirtyFiveData();
    this.dob = new Date((new Date().getFullYear()) - 60, new Date().getMonth(), new Date().getDay());
    this.doj = new Date((new Date().getFullYear()) - 40, new Date().getMonth(), new Date().getDay());
  }


  resetForm() { }

  // form data function
  formThirtyFiveData() {
    this.formThirtyFiveNormal = this.fb.group({
      Employee: [''],
      employeeNo: [''],
      employeetype: ['1'],
      employeeName: [''],
      establishmentr: [''],
      designation: [''],
      subMajorHead: ['', Validators.required],
      minorHead: ['', Validators.required],
      subHead: ['', Validators.required],
      detailHead: ['', Validators.required],
      objectClass: ['', Validators.required],
      exempted: ['1'],
      headChargeable: ['', Validators.required],
      billCode: ['', Validators.required],
      billCategory: ['1', Validators.required],
      previousBill: [''],
      paymentType: ['2', Validators.required],
      ddoGrantHead: [''],
      monthOf: ['2'],
      financialYear: ['2'],
      classExp: ['1', Validators.required],
      fundType: ['1', Validators.required],
      schemeType: ['1', Validators.required],
      demand: ['', Validators.required],
      majorHead: ['', Validators.required],
      type: ['1', Validators.required],
      itemName: ['', Validators.required],
      schemeNo: [''],
      chequeTy: ['1'],
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

  // triggers type of journey
  triggerTypeOfJourney(index) {
    if (this.travelDetailsData[index].typeOfJourney === '4') {
      this.travelDetailsData = [this.travelDetailsData[index]];
    } else {
      if (this.travelDetailsDatasource.data.length < 2) {
        this.travelDetailsData.push(
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
            kilometer: ''
          }
        );
      }
    }
    this.travelDetailsDatasource = new MatTableDataSource(
      this.travelDetailsData
    );
  }

  // redirects to cheque-list
  gotoCheckList() {
    this.router.navigate(['/ddo/cheque-list']);
  }

  // add row in travel details table
  addTravelDetails() {
    const Col_Data = this.travelDetailsDatasource.data;
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
        kilometer: ''
      },
    );
    this.travelDetailsDatasource.data = Col_Data;
  }

  // delete row in travel detials table
  deleteTravelsDetails(index) {
    this.travelDetailsDatasource.data.splice(index, 1);
    this.travelDetailsDatasource = new MatTableDataSource(this.travelDetailsDatasource.data);
  }

  // calculate TA
  openclculationTA(): void {
    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(CalculationTADialog, {
      width: '600px'
    });
  }

  // calculate DA
  openclculationDA(): void {
    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(CalculationDADialog, {
      width: '900px'
    });

    dialogRef.afterClosed().subscribe(
      result => {
        if (result) {
          this.openclculationDAFollowUp();
        }
      }
    );
  }

  // calculate DA follow up
  openclculationDAFollowUp() {
    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(CalculationDATableDialog, {
      width: '900px'
    });
    dialogRef.afterClosed().subscribe(
      result => {

      }
    );
  }

  // redirect to report
  goToReport() {
    this.router.navigate(['/ddo/report-gtr-35']);
  }
}
/** GtrThirtyfiveNormalComponent ends */




/** CalculationTADialog starts */
@Component({
  // tslint:disable-next-line: component-selector
  selector: 'calculation-dialog',
  templateUrl: 'calculation-dialog.html',
  styleUrls: ['./gtr-thirtyfive-normal.component.css']
})
// tslint:disable-next-line: component-class-suffix
export class CalculationTADialog {

  // constructor
  constructor(
    public dialogRef: MatDialogRef<CalculationTADialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  // closes dialog on click of close button
  onNoClick(): void {
    this.dialogRef.close();
  }
}
/** CalculationTADialog ends */



/** CalculationDADialog starts */
@Component({
  // tslint:disable-next-line: component-selector
  selector: 'calculation-da-dialog ',
  templateUrl: 'calculation-da-dialog .html',
  styleUrls: ['./gtr-thirtyfive-normal.component.css']
})
// tslint:disable-next-line: component-class-suffix
export class CalculationDADialog {

  date1;
  date2;
  stayingCity;
  time1;
  time2;

  // constructor
  constructor(
    public dialogRef: MatDialogRef<CalculationDADialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    this.date1 = '12/02/2020';
    this.date2 = '17/02/2020';
    this.stayingCity = 'Ahmedabad';
    this.time1 = '11:44';
    this.time2 = '12:44';
  }

  break: FormControl = new FormControl();
  lodging: FormControl = new FormControl();


  typeOfBreakList: ListValue[] = [
    { value: '1', viewValue: 'Stay' },
    { value: '2', viewValue: 'Continuation on Journey' }
  ];

  typeOfLodgingList: ListValue[] = [
    { value: '1', viewValue: 'Government /Public Sector Guest House' },
    { value: '2', viewValue: 'Hotel /Lodge' },
    { value: '3', viewValue: 'Own Accomodation' }
  ];

  // closes the dialog box
  onNoClick(): void {
    this.dialogRef.close(false);
  }

  // closes the dialog box
  triggerClick() {
    this.dialogRef.close(true);
  }
}
/** CalculationDADialog ends */



/** CalculationDATableDialog starts */
@Component({
  // tslint:disable-next-line: component-selector
  selector: 'calculation-da-table-dialog',
  templateUrl: 'calculation-da-table-dialog.html',
  styleUrls: ['./gtr-thirtyfive-normal.component.css']
})
// tslint:disable-next-line: component-class-suffix
export class CalculationDATableDialog {

  elementDataCalculation = [];

  calculationColumn: string[] = [
    'date',
    'hours',
    'type',
    'percentOfDA',
    'rateOfDA',
    'totalDA'
  ];

  calculationDataSource;

  constructor(
    public dialogRef: MatDialogRef<CalculationDATableDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {

    this.elementDataCalculation.push(
      {
        date: '22/02/2020',
        hours: '22:20- 00:00 (01:40Hrs) Gandhinagar-Ahmedabad',
        type: 'Transist',
        percentOfDA: 30,
        rateOfDA: '135.00',
        totalDA: '41.00'
      }
    );

    this.calculationDataSource = new MatTableDataSource(this.elementDataCalculation);

  }

  // closes the dialog box
  onNoClick(): void {
    this.dialogRef.close(false);
  }

  // closes the dialog box
  triggerClick() {
    this.dialogRef.close(true);
  }
}
/** CalculationDATableDialog starts */
