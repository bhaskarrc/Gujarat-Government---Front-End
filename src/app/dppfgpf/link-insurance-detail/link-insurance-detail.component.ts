import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import { DppfgpfMessage } from 'src/app/common/error-message/common-message.constants';
import { SelectionModel } from '@angular/cdk/collections';
import { MatDialogRef, MAT_DIALOG_DATA, MatTableDataSource, MatDialog, MatPaginator, MatSort } from '@angular/material';
import { DialogData } from 'src/app/model/standing-charge';
import { HeadDataDeleteGpfYearEndProcess } from 'src/app/model/dppfgpf';

@Component({
  selector: 'app-link-insurance-detail',
  templateUrl: './link-insurance-detail.component.html',
  styleUrls: ['./link-insurance-detail.component.css']
})
export class LinkInsuranceDetailComponent implements OnInit {
  // Variable
  errorMessage;
  isSearchClicked = false;
  // Date
  todayDate = Date.now();
  maxDate = new Date();
  // Form Group
  linkInsuranceDetailForm: FormGroup;
  tableForm: FormGroup;
  // Form COntrol
  typeOfYearCtrl: FormControl = new FormControl();
  // List
  classTypeOfYear: ListValue[] = [
    { value: '1', viewValue: 'Financial Year 2020-21 ' },

  ];

  ElementData: any[] = [
    { month: 'February', firstYear: '341401', secondYear: '431114', thirdYear: '544880' },
    { month: 'March', firstYear: '376114', secondYear: '474880', thirdYear: '599106' },
    { month: 'April', firstYear: '376114', secondYear: '474880', thirdYear: '599106' },
    { month: 'May', firstYear: '386114', secondYear: '481880', thirdYear: '606106' },
    { month: 'June', firstYear: '391114', secondYear: '488880', thirdYear: '613106' },
    { month: 'July', firstYear: '396114', secondYear: '495880', thirdYear: '620105' },
    { month: 'August', firstYear: '401114', secondYear: '502880', thirdYear: '627106' },
    { month: 'September', firstYear: '406114', secondYear: '509880', thirdYear: '634106' },
    { month: 'October', firstYear: '411114', secondYear: '516880', thirdYear: '648106' },
    { month: 'November', firstYear: '416114', secondYear: '523880', thirdYear: '648106' },
    { month: 'December', firstYear: '421114', secondYear: '530880', thirdYear: '655106' },
    { month: 'January', firstYear: '426114', secondYear: '537880', thirdYear: '662106' },
  ];
  // Table Source
  dataSource = new MatTableDataSource<any>(this.ElementData);

  displayedColumns: any[] = [
    'srno',
    'month',
    'firstYear',
    'secondYear',
    'thirdYear'
  ];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  @ViewChild(MatSort) sort: MatSort;


  constructor(private fb: FormBuilder, public dialog: MatDialog) { }

  ngOnInit() {

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.errorMessage = DppfgpfMessage;
    this.linkInsuranceDetailForm = this.fb.group({
      employeeNo: '',
      gpfNo: '',
      shortName: '',
      name: '',
      deathDate: '',
    });

    this.tableForm = this.fb.group({
      total: ['18175495'],
      amount: ['60000'],
      authorityNo: ['1687'],
      reason: ['']
    });
  }


  enterEmployeeNo() {
    this.linkInsuranceDetailForm.patchValue({
      gpfNo: 'PW/DAT/5643',
      name: 'Ram Kumar Singh',
      deathDate: new Date('12/04/2017'),
    }
    );
  }

  openGpfDialog(event?) {
    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(LinkInsuranceDialog, {
      width: '1200px',
      height: 'auto',
    }
    );
    dialogRef.afterClosed().subscribe(result => {

      this.linkInsuranceDetailForm.patchValue({
        gpfNo: 'PW/DAT/5467',
        shortName: 'kak',
        name: 'Kaml',
        deathDate: '',
      });
    });
  }

  search() {
    this.isSearchClicked = true;
  }
}

@Component({
  selector: 'app-link-insurance-dialog',
  templateUrl: './link-insurance-dialog.html',
  styleUrls: ['./link-insurance-detail.component.css']
})
// tslint:disable-next-line: component-class-suffix
export class LinkInsuranceDialog implements OnInit {
  searchVariable = false;
  accountDetailDialogForm: FormGroup;
  typeOfDistrictCtrl: FormControl = new FormControl();

  classTypeOfDistrict: ListValue[] = [
    { value: '1', viewValue: 'Ahmedabad ' },
    { value: '2', viewValue: 'Gandhinagar' },
    { value: '3', viewValue: 'Vadodra' },

  ];


  selection = new SelectionModel<HeadDataDeleteGpfYearEndProcess>(true, []);

  Element_Data: HeadDataDeleteGpfYearEndProcess[] = [
    {
      gpfNo: '32345/01/2019',
      lastName: '12/01/2020',
      middleName: 'Class 4/DW/WC',
      firstName: 'Mahisagar',
    },
  ];

  displayedColumns: any[] = [
    'select',
    'gpfNo',
    'firstName',
    'middleName',
    'lastName',


  ];

  dataSource = new MatTableDataSource<HeadDataDeleteGpfYearEndProcess>(this.Element_Data);

  constructor(

    private fb: FormBuilder,
    public dialogRef: MatDialogRef<LinkInsuranceDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  ngOnInit() {
    this.accountDetailDialogForm = this.fb.group({
      gpfNo: '',
      firstName: '',
      middleName: '',
      lastName: '',
      district: '',
    });
  }

  okClick($event?) {
    this.dialogRef.close();
  }



  resetForm() {
    this.accountDetailDialogForm.reset();
  }

  checkboxLabel(row?: HeadDataDeleteGpfYearEndProcess): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} `;
  }
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  searchInwardNo() {
    if (this.accountDetailDialogForm.controls.gpfNo.value.length > 0) {
      this.searchVariable = true;
    }
  }

}
