import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { EPOAMessage } from 'src/app/common/error-message/common-message.constants';
import { Router } from '@angular/router';
import { MatDialog, MatTableDataSource, MatDialogRef } from '@angular/material';
import { WorkFlowEPaoComponent } from '../work-flow-e-pao/work-flow-e-pao.component';
import { ListValue, GenerateMoe, BranchHamApping } from 'src/app/model/epaoModel';
import { EPaoDirectives } from 'src/app/common/directive/epao';



@Component({
  selector: 'app-genereate-moe',
  templateUrl: './genereate-moe.component.html',
  styleUrls: ['./genereate-moe.component.css']
})
export class GenereateMoeComponent implements OnInit {
  ELEMENT_DATA: GenerateMoe[] = [
    {
      status: 'Forwarded',
      gstIN: '4254432',
      mOEAmount: '550.00',
      cin: '4654651',
      mOEType: 'MOE',
      partyName: 'A K Mehta',
      rbiAmount: '500.00',
      gstAmount: '500.00',
      bank: 'State Bank Of India',
      govCreditDate: '12-Feb-20',
      paymentDate: '19-Dec-19',
      remarks: 'Created'
    },
  ];
  // FormGroup
  generateMoeForm: FormGroup;
  // date
  maxDate = new Date();
  todayDate = new Date();
  // FormControl
  bankCtrl: FormControl = new FormControl();
  typeCtrl: FormControl = new FormControl();
  // list
  bank_list: ListValue[] = [{
    value: '1', viewValue: 'State Bank Of India',
  },
  {
    value: '2', viewValue: 'Bank Of Baroda',
  }
    ,
  {
    value: '2', viewValue: 'HDFC Bank',
  }
  ];
  type_list: ListValue[] = [
    { value: '1', viewValue: 'Not Received from GSTN ' },
    { value: '2', viewValue: 'Amount Less' },
    { value: '3', viewValue: 'Amount Greater' },
    { value: '4', viewValue: 'Not received from RBI' },
  ];
  // table source
  newdataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);

  newdisplayedColumns: string[] = ['srNo', 'gstIN', 'partyName', 'cin', 'paymentDate', 'gstAmount',
    'rbiAmount', 'mOEType', 'bank', 'mOEAmount', 'govCreditDate', 'remarks'];
  statusCtrl: FormControl = new FormControl();
  status_list: ListValue[] = [
    { value: '1', viewValue: 'Created' },
    { value: '2', viewValue: 'Forwarded' },
    { value: '3', viewValue: 'Verified' },
    { value: '4', viewValue: 'Approved' }
  ];
  constructor(private router: Router, public dialog: MatDialog, private fb: FormBuilder) { }
  directiveObject = new EPaoDirectives(this.router, this.dialog);

  public errorMessages;
  ngOnInit() {
    this.errorMessages = EPOAMessage;
    this.generateMoeData();

  }
  generateMoeData() {
    this.generateMoeForm = this.fb.group({
      fromDate: [''],
      toDate: [''],
      babk: [''],
      type: [''],
      gstin: [''],
      cin: [''],
      ctin: [''],
      status: ['']
    });

  }

  // navigation routing
  navigate() {
    this.router.navigate(['./e-pao/generate-moe-listing']);
  }


  // GST Dialog
  openView() {
    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(GSTDialogComponent, {
      width: '1200px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}

// generate mode dialog
const ELEMENT_DATA1: BranchHamApping[] = [
  {
    branchName: 'Receipt Branch 1',
    branch: 'HA'
  },

];
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'generate-mode-dialog',
  templateUrl: 'generate-mode-dialog.html',
})


export class GSTDialogComponent {
  constructor(
    private router: Router,
    public dialogRef: MatDialogRef<GSTDialogComponent>
  ) { }
  ELEMENT_DATA: GenerateMoe[] = [
    {
      status: 'Forwarded',
      gstIN: '4254432',
      mOEAmount: '550.00',
      cin: '4654651',
      mOEType: 'MOE',
      partyName: 'A K Mehta',
      rbiAmount: '500.00',
      gstAmount: '500.00',
      bank: 'State Bank Of India',
      govCreditDate: '12-Feb-20',
      paymentDate: '19-Dec-19',
      remarks: 'Created'
    },
  ];
  // table source
  newdataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);
  newdisplayedColumns: string[] = ['srNo', 'gstIN', 'partyName', 'cin', 'paymentDate', 'gstAmount',
    'rbiAmount', 'mOEType', 'bank', 'mOEAmount', 'bank', 'govCreditDate', 'remarks', 'newaction'];
  vitocancel(): void {
    this.dialogRef.close();
  }


}

