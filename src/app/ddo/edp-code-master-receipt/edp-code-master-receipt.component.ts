import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { ListValue } from 'src/app/model/common-grant';
import { CommonDirective } from 'src/app/common/directive/validation.directive';
import { Router } from '@angular/router';
import { EdpCodeMasterReceipt } from 'src/app/model/ddo-forms';

@Component({
  selector: 'app-edp-code-master-receipt',
  templateUrl: './edp-code-master-receipt.component.html',
  styleUrls: ['./edp-code-master-receipt.component.css']
})
export class EdpCodeMasterReceiptComponent implements OnInit {

  // form group
  edpCodeReceiptForm: FormGroup;
  smartSearch: FormGroup;

  // form control
  deductionTypeCtrl: FormControl = new FormControl();
  majorHeadCtrl: FormControl = new FormControl();
  subMajorHeadCtrl: FormControl = new FormControl();
  minorHeadCtrl: FormControl = new FormControl();
  subHeadCtrl: FormControl = new FormControl();
  edpCodeCtrl: FormControl = new FormControl();

  // variable
  filterElementData: EdpCodeMasterReceipt[];

  // direcive object
  directiveObj = new CommonDirective(this.route);

  // lists start
  deductionTypeList: ListValue[] = [
    { value: '1', viewValue: 'A' },
    { value: '2', viewValue: 'B' },
  ];

  majorHeadList: ListValue[] = [
    { value: '8658', viewValue: '8658' },
    { value: '8009', viewValue: '8009' },
    { value: '8342', viewValue: '8342' },
    { value: '7610', viewValue: '7610' },
    { value: '0049', viewValue: '0049' },
    { value: '0070', viewValue: '0070' },
  ];

  subMajorHeadList: ListValue[] = [
    { value: '00', viewValue: '00' },
    { value: '01', viewValue: '01' },
    { value: '04', viewValue: '04' },
    { value: '60', viewValue: '60' },
  ];

  minorHeadList: ListValue[] = [
    { value: '101', viewValue: '101' },
    { value: '102', viewValue: '102' },
    { value: '103', viewValue: '103' },
    { value: '112', viewValue: '112' },
    { value: '114', viewValue: '114' },
    { value: '117', viewValue: '117' },
    { value: '203', viewValue: '203' },
    { value: '800', viewValue: '800' },
  ];
  subHeadList: ListValue[] = [
    { value: '00', viewValue: '00' },
    { value: '01', viewValue: '01' },
    { value: '02', viewValue: '02' },
    { value: '03', viewValue: '03' },
    { value: '04', viewValue: '04' },
  ];

  edpCodeList: ListValue[] = [
    { value: '9510', viewValue: '9510' },
    { value: '9520', viewValue: '9520' },
    { value: '9530', viewValue: '9530' },
    { value: '9531', viewValue: '9531' },
    { value: '9532', viewValue: '9532' },
    { value: '9533', viewValue: '9533' },
    { value: '9534', viewValue: '9534' },
    { value: '9690', viewValue: '9690' },
    { value: '9720', viewValue: '9720' },
    { value: '9740', viewValue: '9740' },
    { value: '9760', viewValue: '9760' },
    { value: '9780', viewValue: '9780' },
  ];
  // lists end


  // table data start
  elementData: EdpCodeMasterReceipt[] = [
    {
      edpCode: '9510',
      edpCodedescription: 'Income Tax',
      deductionType: 'A',
      majorHead: '8658',
      subMajorHead: '00',
      minorHead: '112',
      subHead: '00',
      status: 'Active'
    },
    {
      edpCode: '9520',
      edpCodedescription: 'Surcharge On Income Tax',
      deductionType: 'A',
      majorHead: '8658',
      subMajorHead: '00',
      minorHead: '112',
      subHead: '00',
      status: 'Active'
    },
    {
      edpCode: '9530',
      edpCodedescription: 'Postal Life Insurance',
      deductionType: 'A',
      majorHead: '8658',
      subMajorHead: '00',
      minorHead: '103',
      subHead: '00',
      status: 'Active'
    },
    {
      edpCode: '9531',
      edpCodedescription: 'G.P.F. Class Iv',
      deductionType: 'A',
      majorHead: '8009',
      subMajorHead: '01',
      minorHead: '101',
      subHead: '02',
      status: 'Active'
    },
    {
      edpCode: '9532',
      edpCodedescription: 'Pf Worked Charged Employee',
      deductionType: 'A',
      majorHead: '8009',
      subMajorHead: '60',
      minorHead: '103',
      subHead: '02',
      status: 'Active'
    },
    {
      edpCode: '9533',
      edpCodedescription: 'Pf Rozamdar Employee',
      deductionType: 'A',
      majorHead: '8009',
      subMajorHead: '60',
      minorHead: '103',
      subHead: '04',
      status: 'Active'
    },
    {
      edpCode: '9534',
      edpCodedescription: 'New Define Contributory Pension Scheme Type - 1, Govt. Servants Share',
      deductionType: 'A',
      majorHead: '8342',
      subMajorHead: '00',
      minorHead: '117',
      subHead: '01',
      status: 'Active'
    },
    {
      edpCode: '9690',
      edpCodedescription: 'Contributory Provident Fund',
      deductionType: 'B',
      majorHead: '8009',
      subMajorHead: '01',
      minorHead: '102',
      subHead: '01',
      status: 'Active'
    },
    {
      edpCode: '9720',
      edpCodedescription: 'Fan Advance',
      deductionType: 'B',
      majorHead: '7610',
      subMajorHead: '00',
      minorHead: '800',
      subHead: '01',
      status: 'Active'
    },
    {
      edpCode: '9740',
      edpCodedescription: 'Other Conveyance Advance',
      deductionType: 'B',
      majorHead: '7610',
      subMajorHead: '00',
      minorHead: '203',
      subHead: '00',
      status: 'Active'
    },
    {
      edpCode: '9760',
      edpCodedescription: 'Interest On Advances To Govt. Servants',
      deductionType: 'B',
      majorHead: '0049',
      subMajorHead: '04',
      minorHead: '800',
      subHead: '03',
      status: 'Active'
    },
    {
      edpCode: '9780',
      edpCodedescription: 'Jeep Rent.',
      deductionType: 'B',
      majorHead: '0070',
      subMajorHead: '60',
      minorHead: '114',
      subHead: '00',
      status: 'Active'
    },



  ];
  dataSource = new MatTableDataSource<EdpCodeMasterReceipt>(this.elementData);
  displayedColumns: string[] = [
    'select',
    'edpCode',
    'edpCodedescription',
    'deductionType',
    'majorHead',
    'subMajorHead',
    'minorHead',
    'subHead',
    'status'
  ];
  // table data end

  // constructor
  constructor(private fb: FormBuilder, private route: Router) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.edpCodeReceiptFormData();
    this.smartSearchFormData();
  }

  // edp code details form data
  edpCodeReceiptFormData() {
    this.edpCodeReceiptForm = this.fb.group({
      edpCode: [''],
      edpCodedescription: [''],
      deductionType: [''],
      majorHead: [''],
      subMajorHead: [''],
      minorHead: [''],
      subHead: [''],
    });
  }

  // search form data
  smartSearchFormData() {
    this.smartSearch = this.fb.group({
      edpCode: [''],
      edpCodedescription: [''],
      deductionType: [''],
      majorHead: [''],
    });
  }

  // filter table data on basis of fields entered in search grid
  onSearch() {
    const formVal = this.smartSearch.value;

    if (formVal.edpCode !== '' && formVal.edpCode != null) {
      this.filterElementData = this.elementData.filter(
        searchByemployee => searchByemployee.edpCode.toLowerCase() === formVal.edpCode.toLowerCase());
      this.dataSource = new MatTableDataSource<EdpCodeMasterReceipt>(this.filterElementData);
    }
    if (formVal.edpCodedescription !== '' && formVal.edpCodedescription != null) {
      this.filterElementData = this.elementData.filter(
        searchByemployee => searchByemployee.edpCodedescription.toLowerCase() === formVal.edpCodedescription.toLowerCase());
      this.dataSource = new MatTableDataSource<EdpCodeMasterReceipt>(this.filterElementData);
    }

    if (formVal.deductionType !== '' && formVal.deductionType != null) {
      if (formVal.deductionType === '1') {
        const deductionTypevalue = 'A';
        this.filterElementData = this.elementData.filter(
          searchByemployee => searchByemployee.deductionType.toLowerCase() === deductionTypevalue.toLowerCase());
        this.dataSource = new MatTableDataSource<EdpCodeMasterReceipt>(this.filterElementData);
      }

      if (formVal.deductionType === '2') {
        const deductionTypevalue = 'B';
        this.filterElementData = this.elementData.filter(
          searchByemployee => searchByemployee.deductionType.toLowerCase() === deductionTypevalue.toLowerCase());
        this.dataSource = new MatTableDataSource<EdpCodeMasterReceipt>(this.filterElementData);
      }
    }
    if (formVal.majorHead !== '' && formVal.majorHead != null) {
      this.filterElementData = this.elementData.filter(
        searchByemployee => searchByemployee.majorHead.toLowerCase() === formVal.majorHead.toLowerCase());
      this.dataSource = new MatTableDataSource<EdpCodeMasterReceipt>(this.filterElementData);
    }
    if (
      (formVal.edpCode === '' || formVal.edpCode == null)
      && (formVal.edpCodedescription === '' || formVal.edpCodedescription == null)
      && (formVal.deductionType === '' || formVal.deductionType == null)
      && (formVal.majorHead === '' || formVal.majorHead == null)
    ) {
      this.dataSource = new MatTableDataSource<EdpCodeMasterReceipt>(this.elementData);
    }
  }

  // reset edp details form
  clearForm() {
    this.edpCodeReceiptForm.reset();
  }

  // reset search form data
  clearSmartSearchForm() {
    this.smartSearch.reset();
  }

  // on click on close button
  onClose() { }

  // search
  add() { }

  // on click on update button
  update() { }

  // on click on actiavte button
  activate() { }

  // on click on inActivate button
  inActivate() { }
}
