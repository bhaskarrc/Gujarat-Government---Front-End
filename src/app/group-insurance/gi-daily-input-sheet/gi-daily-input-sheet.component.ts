import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { CommonDirective } from 'src/app/common/directive/validation.directive';
import { CommonListing, HeaderElement } from 'src/app/model/common-listing';
import { DescriptionData, SuspenseData } from 'src/app/model/group-insurance';

@Component({
  selector: 'app-gi-daily-input-sheet',
  templateUrl: './gi-daily-input-sheet.component.html',
  styleUrls: ['./gi-daily-input-sheet.component.css']
})
export class GiDailyInputSheetComponent implements OnInit {

  // variables
  showTable = false;

  // date
  todayDate = new Date();

  // form group
  dailyInputSheetForm: FormGroup;

  // form control
  districtCtrl: FormControl = new FormControl();
  monthCtrl: FormControl = new FormControl();
  majorHeadCtrl: FormControl = new FormControl();
  yearCtrl: FormControl = new FormControl();
  edpCodeCtrl: FormControl = new FormControl();
  treasuryOfficeAhmedabadCtrl: FormControl = new FormControl();
  treasuryOfficeGandhinagarCtrl: FormControl = new FormControl();
  directiveObj = new CommonDirective();

  // Table data for Description Table
  descriptionData: DescriptionData[] = [
    {
      description: 'Gujarat Government Employees Group Insurance Scheme - Insurance Fund',
      accountCloseCode: '8011 00 107 01',
      case: 76080,
      tc: 36165
    },
    {
      description: 'Saving Fund',
      accountCloseCode: '8011 00 107 03',
      case: 177520,
      tc: 63825
    }
  ];

  // Table data for suspense Table
  suspenseData: SuspenseData[] = [
    {
      position: '1', majorHead: '2053', edpCode: '9583', desc: 'District Administrative', ddoName: 'Asst. Collector, Dy. Collector Office',
      empNo: '1000035468', empName: 'Mr. Gurumeetsingh ', design: 'Asst. Collectoor', tc: 'TC',
      vcNo: '11', vcDate: '1/2/2019', insFnd: '36.00', savFnd: '0.00', total: '36.00',
    },
    {
      position: '1', majorHead: '2053', edpCode: '9584', desc: 'District Administrative', ddoName: 'Asst. Collector, Dy. Collector Office',
      empNo: '1000035468', empName: 'Mr. Gurumeetsingh ', design: 'Asst. Collectoor', tc: 'TC',
      vcNo: '11', vcDate: '1/2/2019', insFnd: '0.00', savFnd: '84.00', total: '84.00',
    },
    {
      position: '2', majorHead: '2053', edpCode: '9583', desc: 'District Administrative', ddoName: 'Collector office ',
      empNo: '1000007586', empName: 'Mr. Ram Narayan Pathak', design: 'Collector', tc: 'TC',
      vcNo: '11', vcDate: '1/2/2019', insFnd: '36.00', savFnd: '0.00', total: '36.00',
    },
    {
      position: '2', majorHead: '2053', edpCode: '9584', desc: 'District Administrative', ddoName: 'Collector office ',
      empNo: '1000007586', empName: 'Mr. Ram Narayan Pathak', design: 'Collector', tc: 'TC',
      vcNo: '11', vcDate: '1/2/2019', insFnd: '0.00', savFnd: '84.00', total: '84.00',
    },
  ];

  // Table data for Suspense Table
  suspenseData2: SuspenseData[] = [
    {
      position: '3', majorHead: '2055', edpCode: '9583', desc: 'Police', ddoName: 'Office Suprintrndent of Police',
      empNo: '1000006584', empName: 'Mr. S V Sarju', design: 'Suprotendent of Police', tc: 'TC',
      vcNo: '12', vcDate: '1/2/2019', insFnd: '36.00', savFnd: '0.00', total: '36.00',
    },
    {
      position: '4', majorHead: '2055', edpCode: '9584', desc: 'Police', ddoName: 'Office Suprintrndent of Police',
      empNo: '1000006584', empName: 'Mr. S V Sarju', design: 'Suprotendent of Police', tc: 'TC',
      vcNo: '12', vcDate: '1/2/2019', insFnd: '0.00', savFnd: '84.00', total: '84.00',
    },
  ];

  // Table data for Suspense Table
  suspenseData3: SuspenseData[] = [
    {
      position: '5', majorHead: '2404', edpCode: '9583', desc: 'Forestry & Wild Life', ddoName: 'Dy. Conservator of Forests',
      empNo: '1000003526', empName: 'Mr. M Dhanpal', design: 'Dy. Consorvatorof Forest', tc: 'TC',
      vcNo: '13', vcDate: '1/2/2019', insFnd: '36.00', savFnd: '0.00', total: '36.00',
    },
    {
      position: '6', majorHead: '2404', edpCode: '9584', desc: 'Forestry & Wild Life', ddoName: 'Dy. Conservator of Forests',
      empNo: '1000003526', empName: 'Mr. M Dhanpal', design: 'Dy. Consorvatorof Forest', tc: 'TC',
      vcNo: '13', vcDate: '1/2/2019', insFnd: '0.00', savFnd: '84.00', total: '84.00',
    },
  ];

  // data source for Description Table
  descriptionDataSource = new MatTableDataSource<DescriptionData>(this.descriptionData);
  // datasource for  Suspense Table
  suspenseAccountSource = new MatTableDataSource<SuspenseData>(this.suspenseData);
  // datasource for  Suspense Table
  suspenseAccountSource2 = new MatTableDataSource<SuspenseData>(this.suspenseData2);
  // datasource for  Suspense Table
  suspenseAccountSource3 = new MatTableDataSource<SuspenseData>(this.suspenseData3);


  // List of Years
  yearList: CommonListing[] = [
    { value: '1', viewValue: '2005' },
    { value: '2', viewValue: '2006' },
    { value: '3', viewValue: '2007' },
    { value: '4', viewValue: '2008' },
    { value: '5', viewValue: '2009' },
    { value: '6', viewValue: '2010' },
    { value: '7', viewValue: '2011' },
    { value: '8', viewValue: '2012' },
    { value: '9', viewValue: '2013' },
    { value: '10', viewValue: '2014' },
    { value: '11', viewValue: '2015' },
    { value: '12', viewValue: '2016' },
    { value: '13', viewValue: '2017' },
    { value: '14', viewValue: '2018' },
    { value: '15', viewValue: '2019' },
    { value: '16', viewValue: '2020' },
  ];

  // List of Months
  monthList: CommonListing[] = [
    { value: '1', viewValue: 'January' },
    { value: '2', viewValue: 'February' },
    { value: '3', viewValue: 'March' },
    { value: '4', viewValue: 'April' },
    { value: '5', viewValue: 'May' },
    { value: '6', viewValue: 'June' },
    { value: '7', viewValue: 'July' },
    { value: '8', viewValue: 'August' },
    { value: '9', viewValue: 'Sepetember' },
    { value: '10', viewValue: 'October' },
    { value: '11', viewValue: 'November' },
    { value: '12', viewValue: 'December' },
  ];

  // List of EDP Code
  edpCodeList: CommonListing[] = [
    { value: '1', viewValue: '9583' },
    { value: '2', viewValue: '9584' },
  ];

  // List of District
  districtList: CommonListing[] = [
    { value: '1', viewValue: 'Ahmedabad' },
    { value: '2', viewValue: 'Gandhinagar' },
    { value: '3', viewValue: 'Vadodara' },
    { value: '4', viewValue: 'Surat' },
    { value: '5', viewValue: 'Rajkot' },
    { value: '6', viewValue: 'Anand' },
    { value: '7', viewValue: 'Bharuch' },
    { value: '8', viewValue: 'Valsad' },
    { value: '9', viewValue: 'Navsari' },
    { value: '10', viewValue: 'Dang' },
  ];

  // List of major head
  majorHeadList: CommonListing[] = [
    { value: '1', viewValue: '8011 - Insurance and Pension Funds' },
    { value: '2', viewValue: '8658 - Suspense Account' },
  ];

  // List of gross total
  grossTotl: any[] = [
    { label: 'Total Cash', value: this.totalCash() },
    { label: 'Total TC', value: this.totalTC() },
    {
      label: 'Grand Total', value: this.grandTotal()
    },
  ];


  // List of District Details
  distDetail: HeaderElement[] = [
    { label: 'District', value: 'Valsad' },
    { label: '8658 00 123 00', value: 'All India Services - officers Group Insurance Scheme' },
    { label: 'Month & Year', value: 'Feb-19' },
  ];

  // List of district Details
  distDetail1: HeaderElement[] = [
    { label: 'District', value: 'Ahmedabad' },
    { label: 'Treasury Office', value: 'District Treasury Office, Ahmedabad' },
    { label: 'Month & Year', value: 'Jun-19' },
  ];

  // List of Treasury Office in Gandhinagar
  treasuryOfficeGandhinagarList: CommonListing[] = [
    { value: '1', viewValue: 'Treasury Office, Gandhinagar' },
    { value: '2', viewValue: 'PAO, Gandhinagar' },
  ];

  // List of Treasury Office in Ahmedabad
  treasuryOfficeAhmedabadList: CommonListing[] = [
    { value: '1', viewValue: 'Treasury Office, Ahmedabad' },
    { value: '2', viewValue: 'PAO, Ahmedabad' },
  ];



  // Table Columns for Description Table
  descriptionDataColumn: string[] = [
    'srno', 'description', 'accountCloseCode', 'case', 'tc'
  ];

  // Table columns for suspense account table
  suspenseAccountCol: string[] = [
    'position',
    'vcNo',
    'vcDate',
    'empNo',
    'empName',
    'ddoName',
    'design',
    'desc',
    'majorHead',
    'edpCode',
    'tc',
    'insFnd',
    'savFnd',
    'total',
  ];

  // constructor
  constructor(private fb: FormBuilder, public dialog: MatDialog) { }

  ngOnInit() {
    this.dailyInputSheetFormData();
  }

  // form data
  dailyInputSheetFormData() {
    this.dailyInputSheetForm = this.fb.group({
      treasuryOffice: [''],
      district: [''],
      month: [''],
      year: [''],
      edpCode: [''],
      majorHead: [''],
      treasuryOfficeGandhinagar: [''],
      treasuryOfficeAhmedabad: [''],

    });
  }

  // on click on search
  showResult(e) {
    e.preventDefault();
    if (
      this.dailyInputSheetForm.controls['district'].value !== '' || this.dailyInputSheetForm.controls['month'].value !== '' ||
      this.dailyInputSheetForm.controls['year'].value !== '' || this.dailyInputSheetForm.controls['majorHead'].value !== ''
    ) {
      this.showTable = true;
    }
  }

  // set treasury office field value
  updateOffice() {
    this.dailyInputSheetForm.controls['treasuryOffice'].setValue('District Treasury Office, '
      + this.districtList[this.dailyInputSheetForm.controls['district'].value - 1].viewValue);

  }

  // calculate total cash
  totalCash(): number {
    let total = 0;
    this.descriptionDataSource.data.forEach((element) => {
      total = total + Number(element.case);
    });
    return total;
  }

  // calculate total tc
  totalTC(): number {
    let total = 0;
    this.descriptionDataSource.data.forEach((element) => {
      total = total + Number(element.tc);
    });
    return total;
  }

  // calculate grand total
  grandTotal(): number {
    return this.totalCash() + this.totalTC();
  }

  // calculate insuranceFund
  insFund1(): number {
    let total = 0;
    this.suspenseAccountSource.data.forEach((element) => {
      total = total + Number(element.insFnd);
    });
    return total;
  }

  // calculate saving fund
  savFund1(): number {
    let total = 0;
    this.suspenseAccountSource.data.forEach((element) => {
      total = total + Number(element.savFnd);
    });
    return total;
  }

  // calculate total
  total1(): number {
    let total = 0;
    this.suspenseAccountSource.data.forEach((element) => {
      total = total + Number(element.total);
    });
    return total;
  }

  // calculate insurance fund
  insFund2(): number {
    let total = 0;
    this.suspenseAccountSource2.data.forEach((element) => {
      total = total + Number(element.insFnd);
    });
    return total;
  }

  // calculate saving fund
  savFund2(): number {
    let total = 0;
    this.suspenseAccountSource2.data.forEach((element) => {
      total = total + Number(element.savFnd);
    });
    return total;
  }

  // calculate total
  total2(): number {
    let total = 0;
    this.suspenseAccountSource2.data.forEach((element) => {
      total = total + Number(element.total);
    });
    return total;
  }

  // calculate insurance fund
  insFund3(): number {
    let total = 0;
    this.suspenseAccountSource3.data.forEach((element) => {
      total = total + Number(element.insFnd);
    });
    return total;
  }

  // calculate saving fund
  savFund3(): number {
    let total = 0;
    this.suspenseAccountSource3.data.forEach((element) => {
      total = total + Number(element.savFnd);
    });
    return total;
  }

  // calculate total
  total3(): number {
    let total = 0;
    this.suspenseAccountSource3.data.forEach((element) => {
      total = total + Number(element.total);
    });
    return total;
  }

  // calculate insurance fund
  insFundGrand(): number {
    return this.insFund1() + this.insFund2() + this.insFund3();
  }

  // calculate saving fund grand total
  savFundGrand(): number {
    return this.savFund1() + this.savFund2() + this.savFund3();
  }

  // calculate grand total
  totalGrand(): number {
    return this.total1() + this.total2() + this.total3();
  }

}
