import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { CommonDirective } from 'src/app/common/directive/validation.directive';
import { payrollMessage } from 'src/app/common/error-message/common-message.constants';
import { ListValue } from 'src/app/model/common-grant';

import { SubmitDialogComponent } from '../submit-dialog/submit-dialog.component';
import { SearchEmployeeComponent } from './../search-employee/search-employee.component';

@Component({
  selector: 'app-it-declation-payroll',
  templateUrl: './it-declation-payroll.component.html',
  styleUrls: ['./it-declation-payroll.component.css']
})
export class ItDeclationPayrollComponent implements OnInit {

  // eightyC_list: ListValue[] = [
  //   {
  //     value: '80C',
  //     viewValue:
  //       // tslint:disable-next-line: max-line-length
  //       '80C - Life insurance premium, deferred annuity, contributions to provident fund, subscription to certain equity shares or debentures, etc.'
  //   },
  //   {
  //     value: '80CCC',
  //     viewValue:
  //       '80CCC- Payment in respect Pension Fund'
  //   },
  //   {
  //     value: '80CCD(1)',
  //     viewValue:
  //       '80CCD(1) - Contribution to pension scheme of Central Government'
  //   },
  //   {
  //     value: '80CCD(1B)',
  //     viewValue:
  //       '80CCD(1B) - Contribution to pension scheme of Central Government'
  //   },
  //   {
  //     value: '80CCD(2)',
  //     viewValue:
  //       '80CCD(2) - Contribution to pension scheme of Central Government by employer'
  //   },
  //   {
  //     value: '80CCG',
  //     viewValue:
  //       '80CCG - Investment made under an equity savings scheme'
  //   },
  // ];

  // eightyD_list: ListValue[] = [
  //   {
  //     value: '80D(A)',
  //     viewValue:
  //       '80D(A)-Health insurance premium'
  //   },
  //   {
  //     value: '80D(B)',
  //     viewValue:
  //       '80D(B)-Medical expenditure'
  //   },
  //   {
  //     value: '80D(C)',
  //     viewValue:
  //       '80D(C)-Preventive health check-up'
  //   },
  //   {
  //     value: '80DD',
  //     viewValue:
  //       '80DD - Maintenance including medical treatment of a dependent who is a person with disability'
  //   },
  //   {
  //     value: '80DDB',
  //     viewValue:
  //       '80DDB - Medical treatment of specified diseases'
  //   },
  // ];

  // eightyE_list: ListValue[] = [
  //   {
  //     value: '80E',
  //     viewValue:
  //       '80E-Interest on loan taken for higher education'
  //   },
  //   {
  //     value: '80EE',
  //     viewValue:
  //       '80EE-Interest on loan taken for residential house property'
  //   },
  // ];

  // eightyG_list: ListValue[] = [
  //   {
  //     value: '80G',
  //     viewValue:
  //       // tslint:disable-next-line: max-line-length
  //       '80G - Donations to certain funds, charitable institutions, etc. (Please fill 80G Schedule. This field is auto-populated from schedule.)'
  //   },
  //   {
  //     value: '80GG',
  //     viewValue:
  //       '80GG - Rent paid'
  //   },
  //   {
  //     value: '80GGA',
  //     viewValue:
  //       // tslint:disable-next-line: max-line-length
  //       '80GGA - Certain donations for scientific research or rural development (Please fill 80GGA Schedule. This field is auto-populated from schedule.)'
  //   },
  //   {
  //     value: '80GGC',
  //     viewValue:
  //       '80GGC - Donation to Political party'
  //   },
  // ];

  // eightyTT_list: ListValue[] = [
  //   {
  //     value: '80TTA',
  //     viewValue:
  //       '80TTA - Interest on saving bank Accounts in case of other than Resident senior citizens'
  //   },
  //   {
  //     value: '80TTB',
  //     viewValue:
  //       '80TTB- Interest on deposits in case of Resident senior citizens'
  //   },
  // ];
  // eightyU_list: ListValue[] = [
  //   {
  //     value: '80U',
  //     viewValue:
  //       '80U - In case of a person with disability'
  //   }
  // ];

  finYearList: ListValue[] = [
    { value: '1', viewValue: '2019-2020' },
    { value: '2', viewValue: '2020-2021' },
  ];

  EightyCDataSourceData: any[] = [
    { section: '80C - Life insurance premium, deferred annuity, contributions to provident fund, subscription to certain equity shares or debentures, etc.', amount: '', uploadFile: '', fileBrowse: true, id: 'C1' },
    { section: '80CCC- Payment in respect Pension Fund', amount: '', uploadFile: '', fileBrowse: true, id: 'C2' },
    { section: '80CCD(1) - Contribution to pension scheme of Central Government', amount: '', uploadFile: '', fileBrowse: true, id: 'C3' },
    { section: '80CCD(1B) - Contribution to pension scheme of Central Government', amount: '', uploadFile: '', fileBrowse: true, id: 'C4' },
    { section: '80CCD(2) - Contribution to pension scheme of Central Government by employer', amount: '', uploadFile: '', fileBrowse: true, id: 'C5' },
    { section: '80CCG - Investment made under an equity savings scheme', amount: '', uploadFile: '', fileBrowse: true, id: 'C6' },
  ];

  EightyCDataColumn: string[] = [
    'srno', 'sectionC', 'amountC', 'uploadFile'
  ];

  EightyDDataSourceData: any[] = [
    { section: '80D(A)-Health insurance premium', amount: '', uploadFile: '', fileBrowse: true, id: 'D1' },
    { section: '80D(B)-Medical expenditure', amount: '', uploadFile: '', fileBrowse: true, id: 'D2' },
    { section: '80D(C)-Preventive health check-up', amount: '', uploadFile: '', fileBrowse: true, id: 'D3' },
    { section: '80DD - Maintenance including medical treatment of a dependent who is a person with disability', amount: '', uploadFile: '', fileBrowse: true, id: 'D4' },
    { section: '80DDB - Medical treatment of specified diseases', amount: '', uploadFile: '', fileBrowse: true, id: 'D5' },
  ];

  EightyDDataColumn: string[] = [
    'srno', 'sectionD', 'amountD', 'uploadFile'
  ];

  EightyEDataSourceData: any[] = [
    { section: '80E-Interest on loan taken for higher education', amount: '', uploadFile: '', fileBrowse: true, id: 'E1' },
    { section: '80EE-Interest on loan taken for residential house property', amount: '', uploadFile: '', fileBrowse: true, id: 'E2' },
  ];

  EightyEDataColumn: string[] = [
    'srno', 'sectionE', 'amountE', 'uploadFile'
  ];

  EightyGDataSourceData: any[] = [
    { section: '80G - Donations to certain funds, charitable institutions, etc. (Please fill 80G Schedule. This field is auto-populated from schedule.)', amount: '', uploadFile: '', fileBrowse: true, id: 'G1' },
    { section: '80GG - Rent paid', amount: '', uploadFile: '', fileBrowse: true, id: 'G2' },
    { section: '80GGA - Certain donations for scientific research or rural development (Please fill 80GGA Schedule. This field is auto-populated from schedule.)', amount: '', uploadFile: '', fileBrowse: true, id: 'G3' },
    { section: '80GGC - Donation to Political party', amount: '', uploadFile: '', fileBrowse: true, id: 'G4' },
  ];

  EightyGDataColumn: string[] = [
    'srno', 'sectionG', 'amountG', 'uploadFile'
  ];

  EightyTTDataSourceData: any[] = [
    { section: '80TTA - Interest on saving bank Accounts in case of other than Resident senior citizens', amount: '', uploadFile: '', fileBrowse: true, id: 'TT1' },
    { section: '80TTB- Interest on deposits in case of Resident senior citizens', amount: '', uploadFile: '', fileBrowse: true, id: 'TT2' },
  ];

  EightyTTDataColumn: string[] = [
    'srno', 'sectionTT', 'amountTT', 'uploadFile'
  ];

  EightyUDataSourceData: any[] = [
    { section: '80U - In case of a person with disability', amount: '', uploadFile: '', fileBrowse: true, id: 'U1' }
  ];

  EightyUDataColumn: string[] = [
    'srno', 'sectionU', 'amountU', 'uploadFile'
  ];

  fileData;
  showAccordiondata = false;
  showEmployeeDetails = false;
  itDeclarationForm: FormGroup;
  financialYearCtrl: FormControl = new FormControl();
  eightyCCtrl: FormControl = new FormControl();
  eightyDCtrl: FormControl = new FormControl();
  eightyECtrl: FormControl = new FormControl();
  eightyGCtrl: FormControl = new FormControl();
  eightyTTCtrl: FormControl = new FormControl();
  eightyUCtrl: FormControl = new FormControl();
  EightyCDataSource = new MatTableDataSource<any>(this.EightyCDataSourceData);
  EightyDDataSource = new MatTableDataSource<any>(this.EightyDDataSourceData);
  EightyEDataSource = new MatTableDataSource<any>(this.EightyEDataSourceData);
  EightyGDataSource = new MatTableDataSource<any>(this.EightyGDataSourceData);
  EightyTTDataSource = new MatTableDataSource<any>(this.EightyTTDataSourceData);
  EightyUDataSource = new MatTableDataSource<any>(this.EightyUDataSourceData);
  errorMessage = payrollMessage;
  directiveObj = new CommonDirective();

  constructor(private fb: FormBuilder, public dialog: MatDialog, private el: ElementRef,) { }

  ngOnInit() {
    this.itDeclarationFormData();
  }

  itDeclarationFormData() {
    this.itDeclarationForm = this.fb.group({
      ddoOffice: [{ value: 'Collector Office, Ahmedabad', disabled: true }],
      ddoNo: [{ value: '4165', disabled: true }],
      cardexNo: [{ value: '5622', disabled: true }],
      district: [{ value: 'Ahmedabad', disabled: true }],
      financialYear: [{ value: '2', disabled: false }],
      employeeID: [''],
      employeeName: [{ value: '', disabled: true }],
      employeeClass: [{ value: '', disabled: true }],
      category: [{ value: '', disabled: true }],
      joiningDate: [{ value: '', disabled: true }],
      retirementDate: [{ value: '', disabled: true }],
    });
  }

  // Method to show Accordions
  showAccordion() {
    if ((this.itDeclarationForm.controls['financialYear'].value !== '') &&
      (this.itDeclarationForm.controls['financialYear'].value !== '')) {
      this.showEmployeeDetails = true;
      this.itDeclarationForm.controls['employeeName'].setValue('Pratik Patel');
      this.itDeclarationForm.controls['employeeClass'].setValue('Class I');
      this.itDeclarationForm.controls['category'].setValue('GO');
      this.itDeclarationForm.controls['joiningDate'].setValue(new Date(2020, 1, 1));
      this.itDeclarationForm.controls['retirementDate'].setValue(new Date(2045, 1, 1));
    }
    // this.showAccordiondata = true;
  }

  // Open Employee Search Dialog Box
  openDialogEmployeeNumber() {
    const dialogRef = this.dialog.open(SearchEmployeeComponent, {
      width: '1200px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result) {
        this.itDeclarationForm.patchValue({
          employeeID: result[0].employeeNumber,
          employeeName: 'Pratik Patel',
          employeeClass: result[0].class,
          category: 'GO',
          joiningDate: new Date(2020, 1, 1),
          retirementDate: new Date(2045, 1, 1),
        });
        this.showEmployeeDetails = true;
      }
    });

  }

  onClickSubmit() {
    const dialogRef = this.dialog.open(SubmitDialogComponent, {
      width: '250px',
      height: 'auto',
      data: ''
    }
    );
    dialogRef.afterClosed().subscribe(result => { });
  }

  // There will be changes in this screen so this add and delete methods will be removed at that time
  addEightyCRow() {
    const limit = this.EightyCDataSource.data.length - 1;
    const p_data = this.EightyCDataSource.data;
    p_data.push({
      section: '',
      amountC: '0.00'
    });
    this.EightyCDataSource.data = p_data;
  }

  deleteEightyCRow(index) {
    this.EightyCDataSource.data.splice(index, 1);
    this.EightyCDataSource = new MatTableDataSource(this.EightyCDataSource.data);
  }


  addEightyDRow() {
    const limit = this.EightyDDataSource.data.length - 1;
    const p_data = this.EightyDDataSource.data;
    p_data.push({
      section: '',
      amountD: '0.00'
    });
    this.EightyDDataSource.data = p_data;
  }

  deleteEightyDRow(index) {
    this.EightyDDataSource.data.splice(index, 1);
    this.EightyDDataSource = new MatTableDataSource(this.EightyDDataSource.data);
  }

  addEightyERow() {
    const limit = this.EightyEDataSource.data.length - 1;
    const p_data = this.EightyEDataSource.data;
    p_data.push({
      section: '',
      amountE: '0.00'
    });
    this.EightyEDataSource.data = p_data;
  }

  deleteEightyERow(index) {
    this.EightyEDataSource.data.splice(index, 1);
    this.EightyEDataSource = new MatTableDataSource(this.EightyEDataSource.data);
  }

  addEightyGRow() {
    const limit = this.EightyGDataSource.data.length - 1;
    const p_data = this.EightyGDataSource.data;
    p_data.push({
      section: '',
      amountG: '0.00'
    });
    this.EightyGDataSource.data = p_data;
  }

  deleteEightyGRow(index) {
    this.EightyGDataSource.data.splice(index, 1);
    this.EightyGDataSource = new MatTableDataSource(this.EightyGDataSource.data);
  }

  addEightyTTRow() {
    const limit = this.EightyTTDataSource.data.length - 1;
    const p_data = this.EightyTTDataSource.data;
    p_data.push({
      section: '',
      amountTT: '0.00'
    });
    this.EightyTTDataSource.data = p_data;
  }

  deleteEightyTTRow(index) {
    this.EightyTTDataSource.data.splice(index, 1);
    this.EightyTTDataSource = new MatTableDataSource(this.EightyTTDataSource.data);
  }

  addEightyURow() {
    const limit = this.EightyUDataSource.data.length - 1;
    const p_data = this.EightyUDataSource.data;
    p_data.push({
      section: '',
      amountU: '0.00'
    });
    this.EightyUDataSource.data = p_data;
  }

  deleteEightyURow(index) {
    this.EightyUDataSource.data.splice(index, 1);
    this.EightyUDataSource = new MatTableDataSource(this.EightyUDataSource.data);
  }

  clearForm() {
    this.itDeclarationForm.patchValue({
      employeeID: '',
      employeeName: '',
      employeeClass: '',
      category: '',
      joiningDate: '',
      retirementDate: '',
    });
    this.showEmployeeDetails = false;
    this.showAccordiondata = false;
  }

  openFileGenForm(id) {
    if (id === 'C1')
      this.el.nativeElement.querySelector('#C1').click();
    if (id === 'C2')
      this.el.nativeElement.querySelector('#C2').click();
    if (id === 'C3')
      this.el.nativeElement.querySelector('#C3').click();
    if (id === 'C4')
      this.el.nativeElement.querySelector('#C4').click();
    if (id === 'C5')
      this.el.nativeElement.querySelector('#C5').click();
    if (id === 'C6')
      this.el.nativeElement.querySelector('#C6').click();
    if (id === 'D1')
      this.el.nativeElement.querySelector('#D1').click();
    if (id === 'D2')
      this.el.nativeElement.querySelector('#D2').click();
    if (id === 'D3')
      this.el.nativeElement.querySelector('#D3').click();
    if (id === 'D4')
      this.el.nativeElement.querySelector('#D4').click();
    if (id === 'D5')
      this.el.nativeElement.querySelector('#D5').click();
    if (id === 'E1')
      this.el.nativeElement.querySelector('#E1').click();
    if (id === 'E2')
      this.el.nativeElement.querySelector('#E2').click();
    if (id === 'G1')
      this.el.nativeElement.querySelector('#G1').click();
    if (id === 'G2')
      this.el.nativeElement.querySelector('#G2').click();
    if (id === 'G3')
      this.el.nativeElement.querySelector('#G3').click();
    if (id === 'G4')
      this.el.nativeElement.querySelector('#G4').click();
    if (id === 'TT1')
      this.el.nativeElement.querySelector('#TT1').click();
    if (id === 'TT2')
      this.el.nativeElement.querySelector('#TT2').click();
    if (id === 'U1')
      this.el.nativeElement.querySelector('#U1').click();
  }

  openFileGenFormD() {
    this.el.nativeElement.querySelector('#fileBrowse-genformD').click();
  }

  // Browse General Nomination Form
  onFileGenForm(fileSelected, item) {
    if (fileSelected.target && fileSelected.target.files) {
      this.fileData = fileSelected.target.files[0];
      console.log(this.fileData);
      item.fileBrowse = false;
    }
  }

  // onFileGenFormD(fileSelected, item) {
  //   if (fileSelected.target && fileSelected.target.files) {
  //     this.fileData = fileSelected.target.files[0];
  //     item.fileBrowse = false;
  //   }
  // }
  // testing(item) {
  //   item.fileBrowse = false;
  // }

  fileDetails() {
    console.log(this.fileData);
    console.log(this.fileData.url);

  }

}
