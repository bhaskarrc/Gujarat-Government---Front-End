import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatTableDataSource, MatDialogRef } from '@angular/material';
import { BranchHamApping, BankRateDialog, ListValue } from 'src/app/model/epaoModel';
import { EPaoDirectives } from 'src/app/common/directive/epao';
const ELEMENT_DATA: BankRateDialog[] = [
  {
    refNo: '9-20/E-PAO/BRML/001',
    refDate: '8-Feb-2020',
    status: 'Forwarded',
    penRated: '7.25',
    addRated: '2.00',
    bankRate: '5.25',
    effectivToDate: '12-Feb-20',
    effectivFromDate: '19-Dec-19',
  },
];
@Component({
  selector: 'app-bank-rate-master-listing',
  templateUrl: './bank-rate-master-listing.component.html',
  styleUrls: ['./bank-rate-master-listing.component.css']
})
export class BankRateMasterListingComponent implements OnInit {
  // Variable
  listingShow = false;
  // Form Group
  bankRateMasterForm: FormGroup;
  //  Table Sourve
  newdataSource = new MatTableDataSource<any>(ELEMENT_DATA);
  newdisplayedColumns: string[] = ['srNo', 'effectivFromDate',
    'effectivToDate', 'bankRate', 'addRated', 'penRated', 'status', 'newaction'];
  constructor(private router: Router, public dialog: MatDialog, private fb: FormBuilder) { }
  // error message
  public errorMessages;
  statusCtrl: FormControl = new FormControl();
  status_list: ListValue[] = [
    { value: '1', viewValue: 'Created' },
    { value: '2', viewValue: 'Forwarded' },
    { value: '3', viewValue: 'Approved' }
  ];
  ngOnInit() {

    this.bankRateMasterData();

  }
  bankRateMasterData() {
    this.bankRateMasterForm = this.fb.group({
      addRate: [''],
      effecativeDate: [''],
      bankRate: [''],
      penRate: [''],
      referenceNumber: [''],
      refrenceDate: [''],
      status: ['']
    }
    );
  }
  // disable search
  listingData() {
    this.listingShow = true;
  }
  // bank rate master dialog
  // View bank rate master dialog
  openView() {
    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(BankRateMasterDialoge2Component, {
      width: '1200px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  // edit bank rate master dialog
  openEdit() {
    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(BankRateMasterEditDialoge2Component, {
      width: '1200px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });

  }
}
const ELEMENT_DATA1: BranchHamApping[] = [
  {
    branchName: 'Receipt Branch 1',
    branch: 'HA'
  },

];
const ELEMENT_DATA2: BankRateDialog[] = [
  {
    refNo: '9-20/E-PAO/BRML/001',
    refDate: '8-Feb-2020',
    status: 'Forwarded',
    penRated: '6.5',
    addRated: '2.00',
    bankRate: '4.5',
    effectivToDate: new Date('12-Feb-20'),
    effectivFromDate: new Date('19-Dec-19'),
  },
];
// view bank rate master dialog
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'bank-rate-dialoge',
  templateUrl: 'bank-rate-dialoge.html',
})


export class BankRateMasterDialoge2Component {
  constructor(
    private router: Router,
    public dialogRef: MatDialogRef<BankRateMasterDialoge2Component>
  ) { }
  newdataSource = new MatTableDataSource<any>(ELEMENT_DATA2);
  newdisplayedColumns: string[] = ['srNo', 'effectivFromDate',
    'effectivToDate', 'bankRate', 'addRated', 'penRated', 'status', 'newaction'];
  vitocancel(): void {
    this.dialogRef.close();
  }


}
// edit bank rate master dialog
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'bank-rate-edit-dialoge',
  templateUrl: 'bank-rate-edit-dialoge.html',
})


export class BankRateMasterEditDialoge2Component {
  constructor(
    public dialog: MatDialog,
    private router: Router,
    public dialogRef: MatDialogRef<BankRateMasterEditDialoge2Component>
  ) { }
  directiveObject = new EPaoDirectives(this.router, this.dialog);
  newdataSource = new MatTableDataSource<any>(ELEMENT_DATA2);
  newdisplayedColumns: string[] = ['srNo', 'effectivFromDate',
    'effectivToDate', 'bankRate', 'addRated', 'penRated', 'status'];
  vitocancel(): void {
    this.dialogRef.close();
  }

}
