import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { CommonDirective } from 'src/app/common/directive/validation.directive';
import { Router } from '@angular/router';
import { EdpCodeMasterExpenditureRecovery } from 'src/app/model/ddo-forms';

@Component({
  selector: 'app-edp-code-master-expenditure-recovery',
  templateUrl: './edp-code-master-expenditure-recovery.component.html',
  styleUrls: ['./edp-code-master-expenditure-recovery.component.css']
})
export class EdpCodeMasterExpenditureRecoveryComponent implements OnInit {

  // form group
  edpCodeExpenditureRecoveryForm: FormGroup;
  smartSearch: FormGroup;

  // form control
  budgetCodeCtrl: FormControl = new FormControl();
  objectClassCtrl: FormControl = new FormControl();
  edpCodeTypeCtrl: FormControl = new FormControl();
  statusCtrl: FormControl = new FormControl();
  edpCodeCtrl: FormControl = new FormControl();

  // variable
  filterElementData: EdpCodeMasterExpenditureRecovery[];

  // directive object
  directiveObj = new CommonDirective(this.route);

  // lists
  budgetCodeList: ListValue[] = [
    { value: '0000', viewValue: '0000' },
    { value: '0101', viewValue: '0101' },
    { value: '0102', viewValue: '0102' },
    { value: '0103', viewValue: '0103' },
    { value: '0104', viewValue: '0104' },
    { value: '1300', viewValue: '1300' },
    { value: '1600', viewValue: '1600' },
    { value: '3131', viewValue: '3131' },
    { value: '5000', viewValue: '5000' },
    { value: '5500', viewValue: '5500' },
    { value: '7057', viewValue: '7057' },
    { value: '7058', viewValue: '7058' },

  ];

  objectClassList: ListValue[] = [
    { value: 'C0', viewValue: 'C0' },
    { value: 'C1', viewValue: 'C1' },
    { value: 'C2', viewValue: 'C2' },
    { value: 'C3', viewValue: 'C3' },
    { value: 'C4', viewValue: 'C4' },
    { value: 'C5', viewValue: 'C5' },
    { value: 'C6', viewValue: 'C6' },
    { value: 'C7', viewValue: 'C7' }
  ];

  edpCodeTypeList: ListValue[] = [
    { value: '1', viewValue: 'Expenditure' },
    { value: '2', viewValue: 'Recovery' },
  ];

  edpCodeList: ListValue[] = [
    { value: '0000', viewValue: '0000' },
    { value: '0101', viewValue: '0101' },
    { value: '0102', viewValue: '0102' },
    { value: '0121', viewValue: '0121' },
    { value: '0103', viewValue: '0103' },
    { value: '0104', viewValue: '0104' },
    { value: '0122', viewValue: '0122' },
    { value: '1301', viewValue: '1301' },
    { value: '1302', viewValue: '1302' },
    { value: '1303', viewValue: '1303' },
    { value: '1304', viewValue: '1304' },
    { value: '1305', viewValue: '1305' },
    { value: '1601', viewValue: '1601' },
    { value: '1602', viewValue: '1602' },
    { value: '1603', viewValue: '1603' },
    { value: '1604', viewValue: '1604' },
    { value: '3101', viewValue: '3101' },
    { value: '3102', viewValue: '3102' },
    { value: '3103', viewValue: '3103' },
    { value: '3104', viewValue: '3104' },
    { value: '5001', viewValue: '5001' },
    { value: '5002', viewValue: '5002' },
    { value: '5003', viewValue: '5003' },
    { value: '5004', viewValue: '5004' },
    { value: '5501', viewValue: '5501' },
    { value: '5502', viewValue: '5502' },
    { value: '5503', viewValue: '5503' },
    { value: '7057', viewValue: '7057' },
    { value: '7058', viewValue: '7058' },
  ];

  statusList: ListValue[] = [
    { value: '1', viewValue: 'Active' },
    { value: '2', viewValue: 'InActive' },
  ];
  // lists end


  // table data start
  elementData: EdpCodeMasterExpenditureRecovery[] = [
    {
      budgetCode: '0000',
      edpCode: '0000',
      edpCodedescription: 'For Mh 8009 & Other 8000 Mh',
      objectClass: 'C0',
      edpCodeType: 'Expenditure',
      status: 'Active'
    },
    {
      budgetCode: '0101',
      edpCode: '0101',
      edpCodedescription: 'Pay Of Officers',
      objectClass: 'C1',
      edpCodeType: 'Expenditure',
      status: 'Active'
    },
    {
      budgetCode: '0101',
      edpCode: '0101',
      edpCodedescription: 'Pay Of Officers',
      objectClass: 'C1',
      edpCodeType: 'Recovery',
      status: 'Active'
    },
    {
      budgetCode: '0102',
      edpCode: '0102',
      edpCodedescription: 'Pay Of Establishment',
      objectClass: 'C1',
      edpCodeType: 'Expenditure',
      status: 'Active'
    },
    {
      budgetCode: '0102',
      edpCode: '0102',
      edpCodedescription: 'Pay Of Establishment',
      objectClass: 'C1',
      edpCodeType: 'Recovery',
      status: 'Active'
    },
    {
      budgetCode: '0101',
      edpCode: '0121',
      edpCodedescription: 'Salary (Mla)',
      objectClass: 'C1',
      edpCodeType: 'Expenditure',
      status: 'Active'
    },
    {
      budgetCode: '0102',
      edpCode: '0102',
      edpCodedescription: 'Pay Of Establishment',
      objectClass: 'C1',
      edpCodeType: 'Expenditure',
      status: 'Active'
    },
    {
      budgetCode: '0103',
      edpCode: '0103',
      edpCodedescription: 'Dearness Allow.',
      objectClass: 'C1',
      edpCodeType: 'Expenditure',
      status: 'Active'
    },
    {
      budgetCode: '0104',
      edpCode: '0104',
      edpCodedescription: 'Other Allowance',
      objectClass: 'C1',
      edpCodeType: 'Expenditure',
      status: 'Active'
    },
    {
      budgetCode: '0104',
      edpCode: '0122',
      edpCodedescription: 'Consolidated Allowance(Mla)',
      objectClass: 'C1',
      edpCodeType: 'Expenditure',
      status: 'Active'
    },
    {
      budgetCode: '1300',
      edpCode: '1301',
      edpCodedescription: 'Office Expenses',
      objectClass: 'C2',
      edpCodeType: 'Expenditure',
      status: 'Active'
    },
    {
      budgetCode: '1300',
      edpCode: '1302',
      edpCodedescription: 'Post & Telegraph Expenses',
      objectClass: 'C2',
      edpCodeType: 'Expenditure',
      status: 'Active'
    },
    {
      budgetCode: '1300',
      edpCode: '1303',
      edpCodedescription: 'Telephone Expenses',
      objectClass: 'C2',
      edpCodeType: 'Expenditure',
      status: 'Active'
    },
    {
      budgetCode: '1300',
      edpCode: '1304',
      edpCodedescription: 'Electricity Expenses',
      objectClass: 'C2',
      edpCodeType: 'Expenditure',
      status: 'Active'
    },
    {
      budgetCode: '1300',
      edpCode: '1305',
      edpCodedescription: 'On New Purchase Vehicles Of Office',
      objectClass: 'C2',
      edpCodeType: 'Expenditure',
      status: 'Active'
    },
    {
      budgetCode: '1600',
      edpCode: '1601',
      edpCodedescription: 'Publications',
      objectClass: 'C2',
      edpCodeType: 'Expenditure',
      status: 'Active'
    },
    {
      budgetCode: '1600',
      edpCode: '1602',
      edpCodedescription: 'Library Books',
      objectClass: 'C2',
      edpCodeType: 'Expenditure',
      status: 'Active'
    },
    {
      budgetCode: '1600',
      edpCode: '1603',
      edpCodedescription: 'News Paper for Office',
      objectClass: 'C2',
      edpCodeType: 'Expenditure',
      status: 'Active'
    },
    {
      budgetCode: '1600',
      edpCode: '1604',
      edpCodedescription: 'News Paper for Home',
      objectClass: 'C2',
      edpCodeType: 'Expenditure',
      status: 'Active'
    },
    {
      budgetCode: '3131',
      edpCode: '3101',
      edpCodedescription: 'Pay Of Officers',
      objectClass: 'C4',
      edpCodeType: 'Expenditure',
      status: 'Active'
    },
    {
      budgetCode: '3131',
      edpCode: '3102',
      edpCodedescription: 'Pay Of Establishment',
      objectClass: 'C4',
      edpCodeType: 'Expenditure',
      status: 'Active'
    },
    {
      budgetCode: '3131',
      edpCode: '3103',
      edpCodedescription: 'Dearness Allowances',
      objectClass: 'C4',
      edpCodeType: 'Expenditure',
      status: 'Active'
    },
    {
      budgetCode: '3131',
      edpCode: '3104',
      edpCodedescription: 'Other Allowances',
      objectClass: 'C4',
      edpCodeType: 'Expenditure',
      status: 'Active'
    },
    {
      budgetCode: '5000',
      edpCode: '5001',
      edpCodedescription: 'Pmt Out Of Disc. Grants For High Dignitary',
      objectClass: 'C5',
      edpCodeType: 'Expenditure',
      status: 'Active'
    },
    {
      budgetCode: '5000',
      edpCode: '5002',
      edpCodedescription: 'Other Discounts',
      objectClass: 'C5',
      edpCodeType: 'Expenditure',
      status: 'Active'
    },
    {
      budgetCode: '5000',
      edpCode: '5003',
      edpCodedescription: 'Custom Duty',
      objectClass: 'C5',
      edpCodeType: 'Expenditure',
      status: 'Active'
    },
    {
      budgetCode: '5000',
      edpCode: '5004',
      edpCodedescription: 'Compensation',
      objectClass: 'C5',
      edpCodeType: 'Expenditure',
      status: 'Active'
    },
    {
      budgetCode: '5500',
      edpCode: '5501',
      edpCodedescription: 'Loans To Municipal Corp. & Other L.B. ',
      objectClass: 'C6',
      edpCodeType: 'Expenditure',
      status: 'Active'
    },
    {
      budgetCode: '5500',
      edpCode: '5502',
      edpCodedescription: 'Loans To Panchayat Raj  Institutions ',
      objectClass: 'C6',
      edpCodeType: 'Expenditure',
      status: 'Active'
    },
    {
      budgetCode: '5500',
      edpCode: '5503',
      edpCodedescription: 'Loans To Public Sector & Other U.T. ',
      objectClass: 'C6',
      edpCodeType: 'Expenditure',
      status: 'Active'
    },
    {
      budgetCode: '7057',
      edpCode: '7057',
      edpCodedescription: 'Festival Advances',
      objectClass: 'C7',
      edpCodeType: 'Expenditure',
      status: 'Active'
    },
    {
      budgetCode: '7058',
      edpCode: '7058',
      edpCodedescription: 'Food Grains Advances',
      objectClass: 'C7',
      edpCodeType: 'Expenditure',
      status: 'Active'
    },

  ];
  dataSource = new MatTableDataSource<EdpCodeMasterExpenditureRecovery>(this.elementData);
  displayedColumns: string[] = [
    'select',
    'budgetCode',
    'edpCode',
    'edpCodedescription',
    'objectClass',
    'edpCodeType',
    'status'
  ];
  // table data end

  // constructor
  constructor(private fb: FormBuilder, private route: Router) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.edpCodeExpenditureRecoveryFormData();
    this.smartSearchFormData();
  }

  // edp code details form data
  edpCodeExpenditureRecoveryFormData() {
    this.edpCodeExpenditureRecoveryForm = this.fb.group({
      budgetCode: [''],
      edpCode: [''],
      edpCodedescription: [''],
      objectClass: [''],
      edpCodeType: ['']
    });
  }

  // search details
  smartSearchFormData() {
    this.smartSearch = this.fb.group({
      budgetCode: ['', Validators.maxLength(4)],
      edpCode: ['', Validators.maxLength(4)],
      edpCodedescription: [''],
      objectClass: [''],
      edpCodeType: [''],
      status: ['']
    });
  }

  // search table data on basis of the fields entered in search form
  onSearch() {
    const formVal = this.smartSearch.value;

    if (formVal.budgetCode !== '' && formVal.budgetCode != null) {
      this.filterElementData = this.elementData.filter(
        searchByemployee => searchByemployee.budgetCode.toLowerCase() === formVal.budgetCode.toLowerCase());
      this.dataSource = new MatTableDataSource<EdpCodeMasterExpenditureRecovery>(this.filterElementData);
    }
    if (formVal.edpCode !== '' && formVal.edpCode != null) {
      this.filterElementData = this.elementData.filter(
        searchByemployee => searchByemployee.edpCode.toLowerCase() === formVal.edpCode.toLowerCase());
      this.dataSource = new MatTableDataSource<EdpCodeMasterExpenditureRecovery>(this.filterElementData);
    }
    if (formVal.edpCodedescription !== '' && formVal.edpCodedescription != null) {
      this.filterElementData = this.elementData.filter(
        searchByemployee => searchByemployee.edpCodedescription.toLowerCase() === formVal.edpCodedescription.toLowerCase());
      this.dataSource = new MatTableDataSource<EdpCodeMasterExpenditureRecovery>(this.filterElementData);
    }
    if (formVal.objectClass !== '' && formVal.objectClass != null) {
      this.filterElementData = this.elementData.filter(
        searchByemployee => searchByemployee.objectClass.toLowerCase() === formVal.objectClass.toLowerCase());
      this.dataSource = new MatTableDataSource<EdpCodeMasterExpenditureRecovery>(this.filterElementData);
    }
    if (formVal.edpCodeType !== '' && formVal.edpCodeType != null) {
      if (formVal.edpCodeType === '1') {
        const edpCodeTypevalue = 'Expenditure';
        this.filterElementData = this.elementData.filter(
          searchByemployee => searchByemployee.edpCodeType.toLowerCase() === edpCodeTypevalue.toLowerCase());
        this.dataSource = new MatTableDataSource<EdpCodeMasterExpenditureRecovery>(this.filterElementData);
      }

      if (formVal.edpCodeType === '2') {
        const edpCodeTypevalue = 'Recovery';
        this.filterElementData = this.elementData.filter(
          searchByemployee => searchByemployee.edpCodeType.toLowerCase() === edpCodeTypevalue.toLowerCase());
        this.dataSource = new MatTableDataSource<EdpCodeMasterExpenditureRecovery>(this.filterElementData);
      }
    }

    if (formVal.status !== '' && formVal.status != null) {
      if (formVal.status === '1') {
        const statusValue = 'Active';
        this.filterElementData = this.elementData.filter(
          searchByemployee => searchByemployee.status.toLowerCase() === statusValue.toLowerCase());
        this.dataSource = new MatTableDataSource<EdpCodeMasterExpenditureRecovery>(this.filterElementData);
      }

      if (formVal.status === '2') {
        const statusValue = 'InActive';
        this.filterElementData = this.elementData.filter(
          searchByemployee => searchByemployee.status.toLowerCase() === statusValue.toLowerCase());
        this.dataSource = new MatTableDataSource<EdpCodeMasterExpenditureRecovery>(this.filterElementData);
      }
    }


    if ((formVal.budgetCode === '' || formVal.budgetCode == null)
      && (formVal.edpCode === '' || formVal.edpCode == null)
      && (formVal.edpCodedescription === '' || formVal.edpCodedescription == null)
      && (formVal.objectClass === '' || formVal.objectClass == null)
      && (formVal.edpCodeType === '' || formVal.edpCodeType == null)
      && (formVal.status === '' || formVal.status == null)) {
      this.dataSource = new MatTableDataSource<EdpCodeMasterExpenditureRecovery>(this.elementData);
    }
  }

  // reset the form
  clearForm() {
    this.edpCodeExpenditureRecoveryForm.reset();
  }

  // reset search form
  clearSmartSearchForm() {
    this.smartSearch.reset();
  }

  // on click on close button
  onClose() {
  }

  // search
  search() { }

  // update
  update() { }

  // activate
  activate() { }

  // inActivate
  inActivate() { }

}
