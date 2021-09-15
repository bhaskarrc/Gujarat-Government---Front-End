import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { eaMessage } from 'src/app/common/error-message/common-message.constants';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { WorkflowDetailsEaComponent } from 'src/app/expenditure-accounting/workflow-details-ea/workflow-details-ea.component';
import { HeadData } from 'src/app/model/expenditure-accounting';
import { EaDirectives } from 'src/app/common/directive/ea-directive';

@Component({
  selector: 'app-submit-account-of-group-insurance',
  templateUrl: './submit-account-of-group-insurance.component.html',
  styleUrls: ['./submit-account-of-group-insurance.component.css']
})
export class SubmitAccountOfGroupInsuranceComponent implements OnInit {
  directiveObject = new EaDirectives(this.dialog);
  initiatiomdate = new Date((new Date()));
  errorMessages = eaMessage;
  isSubmitted = false;
  // FormGroup
  submitAccountGiForm: FormGroup;
  typeOfYearCtrl: FormControl = new FormControl();
  typeOfMonthCtrl: FormControl = new FormControl();
  typeOfPaymentCtrl: FormControl = new FormControl();
  typeOfTreasuryPaoCtrl: FormControl = new FormControl();
  employeeTypeCtrl: FormControl = new FormControl();
  // List values
  classTypeOfYear: any[] = [
    { value: '1', viewValue: '2020 ' },
    { value: '2', viewValue: '2021' },
    { value: '3', viewValue: '2022' },
    { value: '1', viewValue: '2023 ' },
    { value: '2', viewValue: '2024' },
    { value: '3', viewValue: '2025' },
  ];
  classTypeOfMonth: any[] = [
    { value: '1', viewValue: 'January' },
    { value: '2', viewValue: 'February' },
    { value: '3', viewValue: 'March' },
    { value: '4', viewValue: 'April' },
    { value: '5', viewValue: 'May' },
    { value: '6', viewValue: 'June' },
    { value: '7', viewValue: 'July' },
    { value: '8', viewValue: 'August' },
    { value: '9', viewValue: 'September' },
    { value: '10', viewValue: 'October' },
    { value: '11', viewValue: 'November' },
    { value: '12', viewValue: 'December' },
  ];

  classTypeOfPayment: any[] = [
    { value: '1', viewValue: 'Credit ' },
    { value: '2', viewValue: 'Debit' },
  ];

  classTypeOfTreasuryPao: any[] = [
    { value: '1', viewValue: 'District Treasury Office,Ahmedabad ' },
    { value: '2', viewValue: 'District Treasury Office,Gandhinagar ' },
  ];
  employeeType_List: any[] = [
    { value: '1', viewValue: 'Class IV' },
    { value: '2', viewValue: 'Daily Wages' },
    { value: '3', viewValue: 'Work Charge' },
  ];

  // Display Element Data
  Element_Data: any[] = [
    {
      majorHead: '2024',
      noOfDocuments: '4',
      amount: '3000.00',
      tcAmount: '1500.00',
      grossAmount: '4500.00',
    },
    {
      majorHead: '2022',
      noOfDocuments: '8',
      amount: '3000.00',
      tcAmount: '2200.00',
      grossAmount: '5200.00',
    },
    {
      majorHead: '2054',
      noOfDocuments: '5',
      amount: '3000.00',
      tcAmount: '1200.00',
      grossAmount: '4200.00',
    },
    {
      majorHead: '2204',
      noOfDocuments: '9',
      amount: '3000.00',
      tcAmount: '1100.00',
      grossAmount: '4100.00',
    },
  ];
  // Display Columns
  displayedColumns: any[] = [
    'select',
    'majorHead',
    'noOfDocuments',
    'amount',
    'tcAmount',
    'grossAmount',
    'action',
  ];
  // Table Source
  dataSource = new MatTableDataSource<any>(this.Element_Data);
  selection = new SelectionModel<HeadData>(true, []);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private fb: FormBuilder, public dialog: MatDialog) { }
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.submitAccountGiForm = this.fb.group({
      // FormGroup Fields
      year: '',
      month: '',
      treasuryPao: 'District Treasury Office,Gandhinagar',
      paymentType: '',
      employeeType: ''
    });
  }

  checkboxLabel(row?: HeadData): string {
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
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }
  deleteRowRecovery(index) {
    this.dataSource.data.splice(index, 1);
    this.dataSource = new MatTableDataSource(
      this.dataSource.data
    );
  }
  onSave() {
    if (this.submitAccountGiForm.valid) {
      this.isSubmitted = false;
    } else {
      this.isSubmitted = true;
    }
  }

}

