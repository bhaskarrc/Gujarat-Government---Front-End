import { Component, OnInit, ElementRef } from '@angular/core';
import {
  MatTableDataSource,
  MatDialog
} from '@angular/material';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import { Router } from '@angular/router';
import { ddoMasage } from 'src/app/common/error-message/common-message.constants';
import { TravelDetails } from 'src/app/model/ddo-forms';
import { DdoDirective } from 'src/app/common/directive/ddo-directive';


/** GtrThirtyfiveTabillFixpayComponent starts  */
@Component({
  selector: 'app-gtr-thirtyfive-tabill-fixpay',
  templateUrl: './gtr-thirtyfive-tabill-fixpay.component.html',
  styleUrls: ['./gtr-thirtyfive-tabill-fixpay.component.css']
})
export class GtrThirtyfiveTabillFixpayComponent implements OnInit {

  // variables
  fileBrowseIndex: number;
  selectedIndex: number;
  todayDate = Date.now();
  tabDisable: Boolean = true;
  errormsg;

  // date
  maxDate = new Date();

  // directive object for workflow dialog
  directiveObject = new DdoDirective(this.dialog);

  // form group
  thirtyFive: FormGroup;

  // form control
  date = new FormControl(new Date());

  // list start
  attachmentTypeCode: ListValue[] = [
    { value: '01', viewValue: 'Supporting Document' },
    { value: '02', viewValue: 'Sanction Order' },
    { value: '03', viewValue: 'Others' }
  ];
  // list end


  // Travel Details
  travelDisplayColumn: string[] = [

    'station',
    'depaDate',
    'hour',
    'stationArrival',
    'ariaDate',
    'hourTwo',
    'tyJorn',
    'fareCls',
    'noFares',
    'fareAmount',
    'ordFares',
    'otherFare',
    'dailAllwn',
    'noDays',
    'pur',
    'travelTptal',
    'remarks',
    'action'
  ];
  travelDetails: TravelDetails[] = [
    {
      station: '',
      depaDate: '',
      hour: '',
      stationArrival: '',
      ariaDate: '',
      hourTwo: '',
      tyJorn: '',
      fareCls: '',
      noFares: '',
      fareAmount: '',
      ordFares: '',
      otherFare: '',
      dailAllwn: '',
      noDays: '',
      travelTptal: '',
      remarks: ''
    },
  ];
  travelDetailsDatasource = new MatTableDataSource(this.travelDetails);
  // Travel Details table data end

  // constructor
  constructor(
    private fb: FormBuilder,
    private el: ElementRef,
    public dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit() {
    this.errormsg = ddoMasage;
    this.thirtyFiveformData();
  }

  // function for form data
  thirtyFiveformData() {
    this.thirtyFive = this.fb.group({
      payBasic: [''],
      headQut: ['']
    });
  }

  // reset form
  resetForm() { }

  // used to get tab index
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
    const Col_Data = this.travelDetailsDatasource.data;
    Col_Data.push(
      {
        station: '',
        depaDate: '',
        hour: '',
        stationArrival: '',
        ariaDate: '',
        hourTwo: '',
        tyJorn: '',
        fareCls: '',
        noFares: '',
        ordFares: '',
        otherFare: '',
        dailAllwn: '',
        noDays: '',
        travelTptal: '',
        remarks: '',
        fareAmount: ''
      },
    );
    this.travelDetailsDatasource.data = Col_Data;
  }
  // delete row in travel detials table
  deleteTravelsDetails(index) {
    this.travelDetailsDatasource.data.splice(index, 1);
    this.travelDetailsDatasource = new MatTableDataSource(this.travelDetailsDatasource.data);
  }

  // on click on view bill redirects to gtr-35 reports
  goToReport() {
    this.router.navigate(['/ddo/report-gtr-35']);
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
        item.hourTwo = ans;
      } else {
        ans = '';
        item.hourTwo = ans;
      }
    } else {
      ans = '';
      item.hourTwo = ans;
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

  //  calculate total amount
  calculateTotalAmount(item, index) {
    const amount = Number(item.fareAmount) + Number(item.ordFares) + Number(item.otherFare) +
      Number(item.dailAllwn);
    return amount;
  }

  // calculate TA
  calculateTA() {
    let fareAmount = 0;
    let ordinaryFare = 0;
    let otherFare = 0;
    let amount = 0;

    this.travelDetailsDatasource.data.forEach(element => { fareAmount = Number(element.fareAmount) + fareAmount; });
    this.travelDetailsDatasource.data.forEach(element => { ordinaryFare = Number(element.ordFares) + ordinaryFare; });
    this.travelDetailsDatasource.data.forEach(element => { otherFare = Number(element.otherFare) + otherFare; });

    amount = fareAmount + ordinaryFare + otherFare;

    return parseFloat(amount.toString()).toFixed(2);
  }

  // calculate DA
  calculateDA() {
    let dailyAllowance = 0;
    let amount = 0;

    this.travelDetailsDatasource.data.forEach(element => { dailyAllowance = Number(element.dailAllwn) + dailyAllowance; });
    amount = dailyAllowance;

    return parseFloat(amount.toString()).toFixed(2);
  }

  // calculate Gross Total
  calculateGrossTotal() {
    let amount = 0;
    amount = Number(this.calculateTA()) + Number(this.calculateDA());

    return parseFloat(amount.toString()).toFixed(2);
  }
}
/** GtrThirtyfiveTabillFixpayComponent ends  */




