import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { WorkflowDetailsDppfNpsComponent } from '../workflow-details-dppf-nps/workflow-details-dppf-nps.component';
import { DppfNpsMessage } from 'src/app/common/error-message/common-message.constants';
import { CommonListing } from 'src/app/model/common-listing';

@Component({
  selector: 'app-nps-schedule-entry',
  templateUrl: './nps-schedule-entry.component.html',
  styleUrls: ['./nps-schedule-entry.component.css']
})
export class NpsScheduleEntryComponent implements OnInit {
  // List
  contributionList: CommonListing[] = [
    { value: '1', viewValue: 'Regular' },
    { value: '2', viewValue: 'Arrear' },
    { value: '3', viewValue: 'Previous Outstanding' },
  ];

  district_list: CommonListing[] = [
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

  treasutyPAO_list: CommonListing[] = [
    { value: '1', viewValue: 'District Treasury Office, Ahmedabad' },
    { value: '2', viewValue: 'District Treasury Office, Gandhinagar' },
    { value: '3', viewValue: 'District Treasury Office, Vadodara' },
    { value: '4', viewValue: 'District Treasury Office, Surat' },
    { value: '5', viewValue: 'District Treasury Office, Rajkot' },
    { value: '6', viewValue: 'District Treasury Office, Anand' },
    { value: '7', viewValue: 'District Treasury Office, Bharuch' },
    { value: '8', viewValue: 'District Treasury Office, Valsad' },
    { value: '9', viewValue: 'District Treasury Office, Navsari' },
    { value: '10', viewValue: 'District Treasury Office, Dang' },
  ];

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

  type_list: CommonListing[] = [
    { value: '1', viewValue: '૧૧૭. ૧ માત્ર કર્મચારી ફાળા માટે' },
    { value: '2', viewValue: '૧૧૭. ૨ સંસ્થા ફાળો ભરવાનો થતો હોય તેમના માટે' }
  ];
  gradePay_list: CommonListing[] = [
    { value: '', viewValue: '' }
  ];

  detailsData: any[] = [
    // { pranNo: '', name: '', basic: '', gradePay: '', dp: '', da: '', amount: '', forMonth: '', forYear: '', remark: '' }
  ];
  // Table Source
  detailsColumn: string[] = [
    'pranNo', 'name', 'basic', 'gradePay', 'dp', 'da', 'amount', 'forMonth', 'forYear', 'remark', 'action'
  ];
  // Date
  todayDate = new Date();
  todaysDate = Date.now();
  // Variable
  errormsg = DppfNpsMessage;
  // Form Gorup
  scheduleEntryForm: FormGroup;
  // Form Control
  contributionCTRL: FormControl = new FormControl();
  districtCTRL: FormControl = new FormControl();
  treasutyCTRL: FormControl = new FormControl();
  monthCTRL: FormControl = new FormControl();
  yearCTRL: FormControl = new FormControl();
  typeCTRL: FormControl = new FormControl();
  gradePayCTRL: FormControl = new FormControl();
  forMonthCTRL: FormControl = new FormControl();
  forYearCTRL: FormControl = new FormControl();
  // Table Source
  detailsDataSource = new MatTableDataSource<any>(this.detailsData);
  // Constructor
  constructor(private fb: FormBuilder, private dialog: MatDialog) { }

  ngOnInit() {
    this.scheduleEntryFormFormData();
  }

  scheduleEntryFormFormData() {
    this.scheduleEntryForm = this.fb.group({
      ddoName: [''],
      date: [Date.now()],
      scheduleNo: [''],
      contributionType: [''],
      lastMonthScheduleNo: [''],
      district: [''],
      treasuryPAO: [''],
      month: [''],
      year: [''],
      majorHead: [''],
      type: [''],
      head: [''],
      headAmount: [''],
      dp: [''],
      da: [''],
      searchPPAN: [''],
      gradePay: [''],
      forMonth: [''],
      forYear: [''],
      cursorOnRow: [''],
      totalRows: [''],
      accountWiseTotal: [''],
    });
  }
  // Reset Form
  resetForm() {
    this.scheduleEntryForm.reset();
  }
  // Work FLow Details
  workflowDetails(): void {
    const dialogRef = this.dialog.open(WorkflowDetailsDppfNpsComponent, {
      width: '1200px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  // Routing
  goToListing() {
  }
  // Add Details
  addDetails() {
    const Col_Data = this.detailsDataSource.data;
    Col_Data.push({
      pranNo: '', name: '', basic: '', gradePay: '', dp: '', da: '', amount: '', forMonth: '', forYear: '', remark: ''
    });
    this.detailsDataSource.data = Col_Data;
  }
  // Delete Row
  deleteRowRecovery(index) {
    this.detailsDataSource.data.splice(index, 1);
    this.detailsDataSource = new MatTableDataSource(
      this.detailsDataSource.data
    );
  }
  // Total calculation Function
  totalSummary(): number {
    let amount = 0;
    this.detailsDataSource.data.forEach((element) => {
      amount = amount + Number(element.amount);
    });
    return amount;
  }

}
