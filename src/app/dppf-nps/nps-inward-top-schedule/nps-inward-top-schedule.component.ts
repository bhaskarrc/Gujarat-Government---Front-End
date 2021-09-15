import { CommonDirective } from 'src/app/common/directive/validation.directive';
import { CommonListing } from 'src/app/model/common-listing';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { SearchInwardNoDppfNpsComponent } from '../search-inward-no-dppf-nps/search-inward-no-dppf-nps.component';
import { WorkflowDetailsDppfNpsComponent } from '../workflow-details-dppf-nps/workflow-details-dppf-nps.component';
import { DppfNpsMessage } from 'src/app/common/error-message/common-message.constants';

@Component({
  selector: 'app-nps-inward-top-schedule',
  templateUrl: './nps-inward-top-schedule.component.html',
  styleUrls: ['./nps-inward-top-schedule.component.css']
})
export class NpsInwardTopScheduleComponent implements OnInit {
  // List
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

  groupHeadList: CommonListing[] = [
    { value: '1', viewValue: 'Change in Opening Balance' },
    { value: '2', viewValue: 'Accountant General A/C' },
    { value: '3', viewValue: 'District Treasury Account' },
    { value: '4', viewValue: 'Local U.P. Clear' },
    { value: '5', viewValue: 'Accountant General Transfer Entry' },
    { value: '6', viewValue: 'Amount Interchange' },
    { value: '7', viewValue: 'Interest Amount' },
  ];

  debitCreditList: CommonListing[] = [
    { value: '1', viewValue: 'Debit' },
    { value: '2', viewValue: 'Credit' }
  ];

  tcChallanList: CommonListing[] = [
    { value: '1', viewValue: 'TC' },
    { value: '2', viewValue: 'Challan' },
    { value: '3', viewValue: 'Grand Total' }
  ];

  detailsData: any[] = [
    // { head: '', amount: '' }
  ];

  detailsColumn: string[] = [
    'head', 'amount', 'action'
  ];
  // Date
  todayDate = new Date();
  // Variable
  errormsg = DppfNpsMessage;
  inwardDetails = true;
  // Form Group
  inwardTopScheduleForm: FormGroup;
  // Form COntrol
  treasutyCTRL: FormControl = new FormControl();
  yearCTRL: FormControl = new FormControl();
  monthCTRL: FormControl = new FormControl();
  groupHeadCTRL: FormControl = new FormControl();
  debitCreditCTRL: FormControl = new FormControl();
  tcChallanCTRL: FormControl = new FormControl();
  detailsDataSource = new MatTableDataSource<any>(this.detailsData);
  // Directive
  directiveObj = new CommonDirective();
  // Constructor
  constructor(private fb: FormBuilder, private dialog: MatDialog) { }

  ngOnInit() {
    this.inwardTopScheduleFormData();
  }

  inwardTopScheduleFormData() {
    this.inwardTopScheduleForm = this.fb.group({
      inwardNo: [''],
      inwardDate: [''],
      treasuryPAO: [''],
      month: [''],
      year: [''],
      groupHead: [''],
      debitCredit: [''],
      tcChallan: [''],
      tcAmount: [''],
      challanAmount: [''],
      amount: [''],
    });
  }
  // Dialog Work FLow
  workflowDetails(): void {
    const dialogRef = this.dialog.open(WorkflowDetailsDppfNpsComponent, {
      width: '1200px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  // Dialog Search Inward No DppfNps
  openDialogInwardNumber() {
    const dialogRef = this.dialog.open(SearchInwardNoDppfNpsComponent, {
      width: '800px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result) {
        this.inwardDetails = true;
        this.inwardTopScheduleForm.patchValue({
          inwardNo: result[0].inwardNo,
          inwardDate: result[0].inwardDate,
        });
      }
    });
  }
  // Add Details
  addDetails() {
    const Col_Data = this.detailsDataSource.data;
    Col_Data.push({
      pranNo: '', name: '', basic: '', gradePay: '', dp: '', da: '', amount: '', forMonth: '', forYear: '', remark: ''
    });
    this.detailsDataSource.data = Col_Data;
  }

}
