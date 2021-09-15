import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { SearchPpaDppfNpsComponent } from '../search-ppa-dppf-nps/search-ppa-dppf-nps.component';
import { SelectionModel } from '@angular/cdk/collections';
import { WorkflowDetailsDppfNpsComponent } from '../workflow-details-dppf-nps/workflow-details-dppf-nps.component';
import { DppfNpsMessage } from 'src/app/common/error-message/common-message.constants';
import { CommonListing } from 'src/app/model/common-listing';
import { CommonDirective } from 'src/app/common/directive/validation.directive';

@Component({
  selector: 'app-up-clear-account-wise-posting',
  templateUrl: './up-clear-account-wise-posting.component.html',
  styleUrls: ['./up-clear-account-wise-posting.component.css']
})
export class UpClearAccountWisePostingComponent implements OnInit {
  // LIst
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

  headList: CommonListing[] = [
    { value: '1', viewValue: '' }
  ];

  voucherList: CommonListing[] = [
    { value: '1', viewValue: '1' },
    { value: '2', viewValue: '2' },
    { value: '3', viewValue: '3' },
    { value: '4', viewValue: '4' }
  ];

  up_list: CommonListing[] = [
    { value: '1', viewValue: '' }
  ];

  detailsData: any[] = [
    // { head: '', amount: '' }
  ];
  // Table Source
  detailsColumn: string[] = [
    'upNo', 'ppaNo', 'name', 'basic', 'dp', 'da', 'amount', 'forMonth', 'forYear', 'remarks', 'action'
  ];

  upDetailsData: any[] = [
    // tslint:disable-next-line: max-line-length
    { year: '', month: '', creditDebit: '', head: '', voucherNo: '', upNo: '', ppaNo: '', dp: '', da: '', amount: '', clearedAmount: '', remarks: '' }
  ];

  upDetailsColumn: string[] = [
    'select', 'year', 'month', 'creditDebit', 'head', 'voucherNo', 'upNo', 'ppaNo', 'dp', 'da', 'amount', 'clearedAmount', 'remarks'
  ];
  // Date
  todayDate = new Date();
  // Variable
  errormsg = DppfNpsMessage;
  inwardDetails = true;
  // Form Group
  upClearAccountWisePostingForm: FormGroup;
  // FormControl
  districtCTRL: FormControl = new FormControl();
  treasutyCTRL: FormControl = new FormControl();
  monthCTRL: FormControl = new FormControl();
  yearCTRL: FormControl = new FormControl();
  headCTRL: FormControl = new FormControl();
  voucherCTRL: FormControl = new FormControl();
  forMonthCTRL: FormControl = new FormControl();
  forYearCTRL: FormControl = new FormControl();
  upCTRL: FormControl = new FormControl();
  // Table Source
  upDetailsDataSource = new MatTableDataSource<any>(this.upDetailsData);
  detailsDataSource = new MatTableDataSource<any>(this.detailsData);
  // Directive
  directiveObj = new CommonDirective();


  constructor(private fb: FormBuilder, private dialog: MatDialog) { }

  ngOnInit() {
    this.upClearAccountWisePostingFormData();
  }

  upClearAccountWisePostingFormData() {
    this.upClearAccountWisePostingForm = this.fb.group({
      district: [''],
      treasuryPAO: [''],
      month: [''],
      year: [''],
      head: [''],
      voucher: [''],
      upNo: [''],
      forMonth: [''],
      forYear: [''],
    });
  }

  resetForm() {
    this.upClearAccountWisePostingForm.reset();
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

  goToListing() {
    // this.router.navigate(['/dppf-nps/annexure-two-k'])
  }

  addDetails() {
    const Col_Data = this.detailsDataSource.data;
    Col_Data.push({
      upNo: '', ppaNo: '', name: '', basic: '', dp: '', da: '', amount: '', forMonth: '', forYear: '', remarks: ''
    });
    this.detailsDataSource.data = Col_Data;
  }

  // Dialog Search Ppa DppfNps 
  openDialogPPANumber() {
    const dialogRef = this.dialog.open(SearchPpaDppfNpsComponent, {
      width: '800px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result) {
        this.inwardDetails = true;
        this.upClearAccountWisePostingForm.patchValue({
          ppaNo: result[0].ppaNo,
        });
      }
    });
  }

}
