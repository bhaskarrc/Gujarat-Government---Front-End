import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { CommonDirective } from 'src/app/common/directive/validation.directive';
import { payrollMessage } from 'src/app/common/error-message/common-message.constants';
import { ListView, LoanDetails } from 'src/app/model/payroll';

import { SubmitDialogComponent } from '../submit-dialog/submit-dialog.component';

@Component({
  selector: 'app-pay-head-location-mapping',
  templateUrl: './pay-head-location-mapping.component.html',
  styleUrls: ['./pay-head-location-mapping.component.css']
})
export class PayHeadLocationMappingComponent implements OnInit {

  // List of Type
  typeList: ListView[] = [
    { value: '1', viewValue: 'Earning' },
    { value: '2', viewValue: 'Deduction' },
    { value: '3', viewValue: 'Recoveries' },
  ];
  // List of Pay Head for Deduction
  payHeadListEarning: any[] = [
    { value: '1', viewValue: '6Basic', description: '6th Basic Pay ' },
    { value: '2', viewValue: '7Basic ', description: '7th Basic Pay ' },
    { value: '3', viewValue: 'BDPAY', description: 'Band Pay' },
    { value: '4', viewValue: 'FIXPAY', description: 'Fix Pay ' },
    { value: '5', viewValue: 'GDPAY', description: 'Grade Pay' },
    { value: '6', viewValue: 'HRA', description: 'House Rent Allownace ' },
    { value: '7', viewValue: 'TA', description: 'Transport Allownce ' },
    { value: '8', viewValue: 'DA', description: 'Dearness Allownace ' },
    { value: '9', viewValue: 'LVSLRY', description: 'Leave Salary ' },
    { value: '10', viewValue: 'OTHRA', description: 'Other Allownace ' },
    { value: '11', viewValue: 'HCA', description: 'High Court Allowance ' },
    { value: '12', viewValue: 'MOBA', description: 'Mobile Allownace ' },
    { value: '13', viewValue: 'MDCLA', description: 'Medical Allowance ' },
    { value: '14', viewValue: 'CLA', description: 'Compensatory Local Allowance ' },
    { value: '15', viewValue: 'DANGA', description: 'Dang Allowance' },
    { value: '16', viewValue: 'TRBLA', description: 'Tribal Allowance' },
    { value: '17', viewValue: 'WASHA', description: 'Washing Allowance' },
    { value: '18', viewValue: 'NURSA', description: 'Nursing Allowance' },
    { value: '19', viewValue: 'PROJA', description: 'Project Allowance ' },
    { value: '20', viewValue: 'PAYS', description: 'Pay of Suspension' },
    { value: '21', viewValue: 'OFFCP', description: 'Officiating Pay ' },
    { value: '22', viewValue: 'BONUS', description: 'Bonus' },
    { value: '23', viewValue: 'NPPA', description: 'Non Private Practice Allowance' },
    { value: '24', viewValue: 'PP', description: 'Personal Pay' },
    { value: '25', viewValue: 'PTA', description: 'Permanent Travel Allowance' },
    { value: '26', viewValue: 'INTR', description: 'Interim Relief' },
    { value: '27', viewValue: 'SPCLP', description: 'Special/Additional Pay' },
    { value: '28', viewValue: 'ARREAR', description: 'Arrear' },
    { value: '29', viewValue: 'OARREAR', description: 'Other Allownace Arrear' },
    { value: '30', viewValue: 'SPCLA', description: 'Special Allowance' },
    { value: '31', viewValue: 'SMPTRYA', description: 'Sumptuary Allowance ' },
    { value: '32', viewValue: 'PDA', description: 'Petrol/Diesel Allowance ' },
    { value: '33', viewValue: 'BOOKA', description: 'Book Allowance' },
    { value: '34', viewValue: 'STPNDA', description: 'Stipend Allowance' },
    { value: '35', viewValue: 'ADHOCA', description: 'Adhoc Earning' },
  ];

  // List of Pay Head for Deduction
  payHeadListDeduction: any[] = [
    { value: '1', viewValue: 'ADHOCD', description: '  Adhoc Deduction ' },
    { value: '2', viewValue: 'IT', description: '  Income Tax' },
    { value: '3', viewValue: 'PT', description: '  Professional Tax' },
    { value: '4', viewValue: 'GPF', description: '  GPF Contribution' },
    { value: '5', viewValue: 'CPF', description: '  CPF Contribution' },
    { value: '6', viewValue: 'NPS', description: '  EE NPS Contribution' },
    { value: '7', viewValue: 'QTRR', description: '  Quarter Rent' },
    { value: '8', viewValue: 'JEEPR', description: '  Jeep Car Rent' },
    { value: '9', viewValue: 'MSCR', description: '  Miscellaneous Recovery' },
    { value: '10', viewValue: 'PTAR', description: '  PTA Recovery' },
    { value: '11', viewValue: 'RCVP', description: '  Recovery of Pay' },
    { value: '12', viewValue: 'GISF', description: '  Govt. Ins Scheme Fund ' },
    { value: '13', viewValue: 'GISS', description: '  Govt. Ins Scheme Saving ' },
    { value: '14', viewValue: 'GIS79', description: '  GIS79/AIAS' },
    { value: '15', viewValue: 'GISIF', description: '  GISIF/AIAS (Savings)' },
    { value: '16', viewValue: 'GISSF', description: '  GISSF/AIAS (Fund)' },
  ];

  // List of Pay Head for Recovery
  payHeadListRecovery: any[] = [
    { value: '1', viewValue: 'HBAP', description: 'HBA Advance Principal' },
    { value: '2', viewValue: 'HBAI', description: 'HBA Advacee Intrest ' },
    { value: '3', viewValue: 'MCAA', description: 'MCA Advance ' },
    { value: '4', viewValue: 'MCAI', description: 'MCA Intrest ' },
    { value: '5', viewValue: 'GPFA', description: 'GPF Advance ' },
    { value: '6', viewValue: 'FOODA', description: 'Food Grain Advance' },
    { value: '7', viewValue: 'FESTA', description: 'Festival Advance' },
    { value: '8', viewValue: 'LSLEA', description: 'Pay L.S.L.E Advance' },
    { value: '9', viewValue: 'BICYCLA', description: 'Bicycle Advance' },
    { value: '10', viewValue: 'FANA', description: 'Fan Advance' },
    { value: '11', viewValue: 'CPFA', description: 'CPF Advance' },
    { value: '12', viewValue: 'SOCR', description: 'Society Recovery' },
  ];

  // Table Data for Pay Head Location Table
  payHeadLocationData: LoanDetails[] = [
    { type: '1', payhead: '', description: '', enable: true, showInPayslip: '', displayOrder: '', isSubmitted: false }
  ];

  // Table Columns for Pay Head Location Table
  payHeadLocationDataColumn: string[] = [
    'srno',
    'type',
    'payhead',
    'description',
    'enable',
    // 'showInPayslip',
    'action'
  ];

  errorMessages = payrollMessage;
  isDelete = false;
  payHeadLocationForm: FormGroup;
  typeCtrl: FormControl = new FormControl();
  payHeadCtrl: FormControl = new FormControl();
  selection = new SelectionModel<any>(true, []);
  payHeadLocationDataSource = new MatTableDataSource<LoanDetails>(this.payHeadLocationData);
  private paginator: MatPaginator;
  private sort: MatSort;

  @ViewChild(MatSort) set matSort(ms: MatSort) {
    this.sort = ms;
    this.setDataSourceAttributes();
  }

  @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
    this.paginator = mp;
    this.setDataSourceAttributes();
  }
  constructor(private fb: FormBuilder, private router: Router, private dialog: MatDialog) { }

  directiveObj = new CommonDirective(this.router);

  ngOnInit() {
    this.payHeadLocationFormData();
  }

  // Initialize Form Fields
  payHeadLocationFormData() {
    this.payHeadLocationForm = this.fb.group({
      district: ['Ahmedabad'],
      officeName: ['Collector Office, Ahmedabad'],
      ddoNo: ['4265'],
      cardexNo: ['5622'],
      type: ['1'],
      payHead: [''],
      enable: [''],
      displayOrder: [''],
    });
  }
  setDataSourceAttributes() {
    this.payHeadLocationDataSource.paginator = this.paginator;
    this.payHeadLocationDataSource.sort = this.sort;
  }

  // Method to add row
  addRow(element) {
    if ((element.type !== '') && (element.payhead !== '')) {
      const p_data = this.payHeadLocationDataSource.data;
      p_data.push({
        type: '1',
        payhead: '',
        description: '',
        enable: true,
        showInPayslip: '',
        displayOrder: '',
        isSubmitted: false
      });
      this.payHeadLocationDataSource.data = p_data;
    }
  }

  // Method to delete row
  deleteRow(index) {
    this.payHeadLocationDataSource.data.splice(index, 1);
    this.payHeadLocationDataSource = new MatTableDataSource(
      this.payHeadLocationDataSource.data
    );
  }

  // Method to reset the form
  resetform() {
    this.payHeadLocationForm.patchValue({
      district: 'Ahmedabad',
      officeName: 'Collector Office, Ahmedabad',
      ddoNo: '4265',
      cardexNo: '5622',
      type: '1',
      payHead: '',
      enable: '',
      displayOrder: '',
    });
  }

  // On submit button
  onClickSubmit() {
    const dialogRef = this.dialog.open(SubmitDialogComponent, {
      width: '250px',
      height: 'auto',
      data: ''
    }
    );
    dialogRef.afterClosed().subscribe(result => {
      this.payHeadLocationDataSource.data.forEach(item => {
        if (item.type && item.payhead) {
          item.isSubmitted = true;
        } else {
          item.isSubmitted = false;
        }
      });
    });
  }
}
