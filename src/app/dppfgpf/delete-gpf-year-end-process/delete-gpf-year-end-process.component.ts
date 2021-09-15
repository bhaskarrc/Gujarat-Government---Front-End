import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import { DppfgpfMessage } from 'src/app/common/error-message/common-message.constants';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { DialogData } from 'src/app/model/standing-charge';
import { HeadDataDeleteGpfYearEndProcess, HeadDataDeleteGpfYearEndProcess1, GpfYearEndProcess } from 'src/app/model/dppfgpf';

@Component({
  selector: 'app-delete-gpf-year-end-process',
  templateUrl: './delete-gpf-year-end-process.component.html',
  styleUrls: ['./delete-gpf-year-end-process.component.css']
})
export class DeleteGpfYearEndProcessComponent implements OnInit {
  // Variable
  errorMessage;
  isSearch = false;
  isSearchYear = false;
  // Date
  todayDate = Date.now();
  maxDate = new Date();
  // Form Group
  deleteYearEndProcessForm: FormGroup;
  typeOfYearCtrl: FormControl = new FormControl();
  typeOfEmployeeClassCtrl: FormControl = new FormControl();
  employeeName: FormControl = new FormControl();
  constructor(private fb: FormBuilder, public dialog: MatDialog) { }
  // Lists
  classTypeOfYear: ListValue[] = [
    { value: '1', viewValue: '2020 ' },
    { value: '2', viewValue: '2021' },
    { value: '3', viewValue: '2022' },
    { value: '1', viewValue: '2023 ' },
    { value: '2', viewValue: '2024' },
    { value: '3', viewValue: '2025' },


  ];

  classTypeOfEmployeeClass: ListValue[] = [
    { value: '1', viewValue: 'Class IV ' },
    { value: '2', viewValue: 'Daily Wages' },
    { value: '3', viewValue: 'Work Charge' },

  ];


  Element_Data_Gpf: GpfYearEndProcess[] = [
    {
      employeeGpfNo: 'PW/DAT/6436',
      year: '2020',
      employeeName: 'Raman Kumar Singh',
      employeeClass: 'Daily Wages',
      employeeNumber: '1009888725'
    },

  ];

  displayedColumns: any[] = [
    'employeeNumber',
    'employeeGpfNo',
    'employeeName',
    'employeeClass',
    'year',


  ];

  dataSourceGpfNumber = new MatTableDataSource<GpfYearEndProcess>(this.Element_Data_Gpf);
  selection = new SelectionModel<HeadDataDeleteGpfYearEndProcess1>(true, []);
  @ViewChild(MatPaginator) paginator: MatPaginator;

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.errorMessage = DppfgpfMessage;
    this.deleteYearEndProcessForm = this.fb.group({
      gpfNumber: '',
      employeeName: '',
      year: '',
      employeeClass: '',
      employeeNo: ''
    });
  }
  onSearch() {
    this.toggle();
  }

  enterDetails() {
    this.deleteYearEndProcessForm.patchValue({
      gpfNumber: 'PW/DAT/6436',
      employeeName: 'Raman Kumar Singh',
      employeeClass: this.classTypeOfEmployeeClass[2].value,
      employeeNo: this.deleteYearEndProcessForm.value.employeeNo
    });
  }

  formDetails() {
    this.deleteYearEndProcessForm.patchValue({
      gpfNumber: this.deleteYearEndProcessForm.value.gpfNumber,
      employeeName: 'Raman Kumar Singh',
      employeeClass: this.classTypeOfEmployeeClass[2].value,
      employeeNo: '1009888725'
    });
  }
  toggle() {

    const gpfNo = this.deleteYearEndProcessForm.controls.employeeName.value.length;
    const year = this.deleteYearEndProcessForm.controls.year.value.length;

    if (gpfNo > 0) {
      this.isSearch = true;
    }
    // tslint:disable-next-line: one-line
    if (year > 0) {
      this.isSearchYear = true;
      this.isSearch = false;

    }


  }


  openGpfDialog(event?) {
    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(DeleteGpfYearEndProcessDialog, {
      width: '1200px',
      height: 'auto',
    }
    );
    dialogRef.afterClosed().subscribe(result => {

      this.deleteYearEndProcessForm.patchValue({
        gpfNumber: 'PW/DAT/5643',
        employeeName: 'Raman Kumar Singh',
        employeeClass: this.classTypeOfEmployeeClass[2].value,
        employeeNo: '1009888725'


      });

    });
  }

  clearForm() {
    this.deleteYearEndProcessForm.reset();
  }


}


@Component({
  selector: 'app-gpf-year-end-process-dialog',
  templateUrl: './gpf-year-end-process-dialog.html',

})
// tslint:disable-next-line: component-class-suffix
export class DeleteGpfYearEndProcessDialog implements OnInit {
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
      gpfNo: 'PW/DAT/6436',
      firstName: 'Raman ',
      middleName: 'Kumar',
      lastName: 'Singh',
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
    public dialogRef: MatDialogRef<DeleteGpfYearEndProcessDialog>,
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




