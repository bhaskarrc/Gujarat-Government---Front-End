import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { EPOAMessage } from 'src/app/common/error-message/common-message.constants';
import { Router } from '@angular/router';
import { MatDialog, MatTableDataSource, MatDialogRef } from '@angular/material';
import { WorkFlowEPaoComponent } from '../work-flow-e-pao/work-flow-e-pao.component';
import { SelectionModel } from '@angular/cdk/collections';
const ELEMENT_DATA: any[] = [
  {
    status: 'Forwarded',
    gstIN: '4254432',
    mOEAmount: '550.00',
    cin: '4654651',
    mOEType: 'MOE',
    partyName: 'A K Mehta',
    rbiAmount: '500.00',
    gstAmount: '500.00',
    bank: 'Branch 1',
    govCreditDate: '12-Feb-20',
    paymentDate: '19-Dec-19',
    remarks: '-'
  },
];
@Component({
  selector: 'app-generate-mode-ha',
  templateUrl: './generate-mode-ha.component.html',
  styleUrls: ['./generate-mode-ha.component.css']
})
export class GenerateModeHaComponent implements OnInit {

  generateMoeForm: FormGroup;
  maxDate = new Date();
  todayDate = new Date();
  bankCtrl: FormControl = new FormControl();
  typeCtrl: FormControl = new FormControl();
  bank_list: any[] = [{
    value: '1', viewValue: ' State Bank Of India',
  },
  {
    value: '2', viewValue: 'Bank Of Baroda',
  }
    ,
  {
    value: '2', viewValue: 'HDFC Bank',
  }
  ];
  type_list: any[] = [{
    value: '1', viewValue: ' RAT Clear',
  },
  {
    value: '2', viewValue: 'MOE Resolution',
  }
  ];
  newdataSource = new MatTableDataSource<any>(ELEMENT_DATA);
  selection = new SelectionModel<any>(true, []);
  newdisplayedColumns: string[] = ['srNo', 'gstIN', 'partyName', 'cin', 'paymentDate', 'gstAmount',
    'rbiAmount', 'mOEType', 'bank', 'mOEAmount', 'govCreditDate', 'remarks', 'newaction'];
  constructor(private router: Router, public dialog: MatDialog, private fb: FormBuilder,) { }

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
      type: ['']
    })

  }
  commentEpaoDetails(): void {
    const dialogRef = this.dialog.open(WorkFlowEPaoComponent, {
      width: '1200px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  navigate() {
    this.router.navigate(['./e-pao/generate-moe-ha-listing']);
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.newdataSource.data.length;
    return numSelected === numRows;
  }


  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.newdataSource.data.forEach(row => this.selection.select(row));
  }


  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  openView() {
    const dialogRef = this.dialog.open(GSTDialogHAComponent, {
      width: '1200px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
const ELEMENT_DATA1: any[] = [
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


export class GSTDialogHAComponent {
  constructor(
    private router: Router,
    public dialogRef: MatDialogRef<GSTDialogHAComponent>
  ) { }
  newdataSource = new MatTableDataSource<any>(ELEMENT_DATA);
  newdisplayedColumns: string[] = ['srNo', 'gstIN', 'partyName', 'cin', 'paymentDate', 'gstAmount',
    'rbiAmount', 'mOEType', 'bank', 'mOEAmount', 'bank', 'govCreditDate', 'remarks', 'newaction'];
  vitocancel(): void {
    this.dialogRef.close();
  }


}

