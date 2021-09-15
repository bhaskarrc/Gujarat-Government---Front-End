import { CommonDirective } from 'src/app/common/directive/validation.directive';
import { CommonListing } from 'src/app/model/common-listing';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { SearchPpaDppfNpsComponent } from '../search-ppa-dppf-nps/search-ppa-dppf-nps.component';
import { SelectionModel } from '@angular/cdk/collections';
import { WorkflowDetailsDppfNpsComponent } from '../workflow-details-dppf-nps/workflow-details-dppf-nps.component';
import { DppfNpsMessage } from 'src/app/common/error-message/common-message.constants';

@Component({
  selector: 'app-nps-account-wise-removal',
  templateUrl: './nps-account-wise-removal.component.html',
  styleUrls: ['./nps-account-wise-removal.component.css']
})
export class NpsAccountWiseRemovalComponent implements OnInit {
  // List
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

  detailsData: any[] = [
    { inwardNo: '', head: '', voucherNo: '', amount: '' }
  ];

  detailsColumn: string[] = [
    'srno', 'inwardNo', 'head', 'voucherNo', 'amount', 'action'
  ];
  // Date
  todayDate = new Date();
  // VAriable
  errormsg = DppfNpsMessage;
  inwardDetails = true;
  // Form Group
  accountWiseRemovalForm: FormGroup;
  selection = new SelectionModel<any>(true, []);
  // Form Control
  yearCTRL: FormControl = new FormControl();
  monthCTRL: FormControl = new FormControl();
  detailsDataSource = new MatTableDataSource<any>(this.detailsData);
  // Directive
  directiveObj = new CommonDirective();

  constructor(private fb: FormBuilder, private dialog: MatDialog) { }

  ngOnInit() {
    this.accountWiseRemovalFormData();
  }

  accountWiseRemovalFormData() {
    this.accountWiseRemovalForm = this.fb.group({
      fromPPANo: [''],
      loanHolderName: [''],
      year: [''],
      month: [''],
    });
  }
  //  Dialog Search Ppa DppfNps
  openDialogPPANumber() {
    const dialogRef = this.dialog.open(SearchPpaDppfNpsComponent, {
      width: '800px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result) {
        this.inwardDetails = true;
        this.accountWiseRemovalForm.patchValue({
          ppaNo: result[0].ppaNo,
        });
      }
    });
  }

  // DIalog Workflow Details DppfNps
  workflowDetails(): void {
    const dialogRef = this.dialog.open(WorkflowDetailsDppfNpsComponent, {
      width: '1200px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
