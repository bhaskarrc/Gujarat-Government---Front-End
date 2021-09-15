import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatDialog } from '@angular/material';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { SelectionModel } from '@angular/cdk/collections';
import { WorflowDetailCMComponent } from '../worflow-detail-cm/worflow-detail-cm.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-utc-verify',
  templateUrl: './utc-verify-approve.component.html',
  styleUrls: ['./utc-verify-approve.component.css']
})
export class UtcVerifyComponent implements OnInit {
  initiatiomdate = new Date();
  utcFormVerify: FormGroup;
  utcFormList: FormGroup;
  filterElement_Data: any[];
  selection = new SelectionModel<any>(true, []);
  selectedAll: Boolean = false;

  // table data
  ELEMENT_DATA: any[] = [
    {
      financialYear: '2016-17',
      utcReferenceNo: '19-20/CM/UC/001',
      adminstrativeDepartment: 'Forest and Environment Department',
      headOfDepartment: 'Gujarat Pollution Control Board',
      budgetHead: '49-2852-80-800-24-3135',
      sanctionOrderDate: '10-Apr-2017',
      sanctionAmount: '15000',
      utilizedAmount: '2000',
      unspentAmount: '13000',
      surrenderAmount: '3000',
      surrenderOrderDate: '23-Apr-2017',
      workflowStatus: 'Verified by ABC',
      status: 'Pending'
    },
    {
      financialYear: '2017-18',
      utcReferenceNo: '19-20/CM/UC/003',
      adminstrativeDepartment: 'Revenue Department',
      headOfDepartment: 'Collector Office Ahmedabad',
      budgetHead: '49-2852-80-800-24-3135',
      sanctionOrderDate: '19-Apr-2017',
      sanctionAmount: '20000',
      utilizedAmount: '2000',
      unspentAmount: '13000',
      surrenderAmount: '8000',
      surrenderOrderDate: '29-Apr-2017',
      workflowStatus: 'Approved By XYZ',
      status: 'Approved'
    },
    {
      financialYear: '2017-18',
      utcReferenceNo: '19-20/CM/UC/005',
      adminstrativeDepartment: 'Climate Change Department',
      headOfDepartment: 'Gujarat Energy Development Agency ',
      budgetHead: '49-2852-80-800-24-3135',
      sanctionOrderDate: '25-Apr-2017',
      sanctionAmount: '18000',
      utilizedAmount: '2000',
      unspentAmount: '14000',
      surrenderAmount: '5000',
      surrenderOrderDate: '04-May-2017',
      workflowStatus: 'Approved By XYZ',
      status: 'Approved'
    },
  ];
  financialYearList: any[] = [
    { value: '2016-17', viewValue: '2016-2017' },
    { value: '2017-18', viewValue: '2017-2018' },
    { value: '2018-19', viewValue: '2018-2019' },
    { value: '2019-20', viewValue: '2019-2020' },
    { value: '2020-21', viewValue: '2020-2021' },
  ];

  statusList: any[] = [
    { value: '1', viewValue: 'Pending' },
    { value: '2', viewValue: 'Approved' },
    { value: '3', viewValue: 'Save As Draft' },
  ];

  sanctionOrderNoList: any[] = [
    { value: '1', viewValue: 'GAI/UD/2016-17/345' },
    { value: '2', viewValue: 'BT/IN/GOG/FD/2018-19/5678' },
    { value: '3', viewValue: 'FD/GOG/2019-20/8734' },
    { value: '4', viewValue: 'GAI/UD/2019-20/3455	' },
  ];

  headOfDepartment_list: any[] = [
    { value: '0', department: '0', viewValue: 'ATMA Directorate & SAMETI' },
    { value: '1', department: '0', viewValue: 'Agriculture & Co-operation Department' },
    { value: '2', department: '0', viewValue: 'Directorate of Agriculture' },
    { value: '3', department: '0', viewValue: 'Director of Horticulture' },
    { value: '4', department: '0', viewValue: 'Directorate of Animal Husbandry' },
    { value: '5', department: '0', viewValue: 'Commissioner of Fisheries' },
    { value: '6', department: '0', viewValue: 'NA' },
    { value: '0', department: '1', viewValue: 'Revenue Department' },
    { value: '1', department: '1', viewValue: 'Collector Office Ahmedabad' },
    { value: '2', department: '1', viewValue: 'Collector Office Amreli' },
    { value: '3', department: '1', viewValue: 'Collector Office Gandhinagar' },
    { value: '4', department: '1', viewValue: 'Collector Office Arvalli' },
    { value: '5', department: '1', viewValue: 'Collector Office Bhavanagar' },
    { value: '6', department: '1', viewValue: 'Collector Office Banaskantha' },
    { value: '7', department: '1', viewValue: 'Collector Office Botad' },
    { value: '8', department: '1', viewValue: 'NA' },
    { value: '0', department: '2', viewValue: 'Panchayat, Rural Housing & Rural Development Department' },
    { value: '1', department: '2', viewValue: 'Commissionerate of Rural Development Office' },
    { value: '2', department: '2', viewValue: 'Development Commissioner Office' },
    { value: '3', department: '2', viewValue: 'Egram Vishwagram Project' },
    { value: '4', department: '2', viewValue: 'Ahemdabad District Panchayat' },
    { value: '5', department: '2', viewValue: 'Vadodara District Panchayat' },
    { value: '6', department: '2', viewValue: 'Gandhinagar District Panchayat' },
    { value: '7', department: '2', viewValue: 'Surat District Panchayat' },
    { value: '8', department: '2', viewValue: 'Rajkot District Panchayat' },
    { value: '9', department: '2', viewValue: 'NA' },
    { value: '0', department: '3', viewValue: 'Food, Civil Supplies & Consumer Affairs Dept.' },
    { value: '1', department: '3', viewValue: 'Director of Food and Civil Supplies' },
    { value: '2', department: '3', viewValue: 'Controller, Legal Metrology & Director, Consumer Affairs' },
    { value: '3', department: '3', viewValue: 'State Consumer Disputes Redressal Commission' },
    { value: '4', department: '3', viewValue: 'Gujarat State Civil Supplies Corporation Ltd.' },
    { value: '5', department: '3', viewValue: 'Food Controller, Ahmedabad' },
    { value: '6', department: '3', viewValue: 'NA' },
    { value: '0', department: '4', viewValue: 'Forest & Environment Department' },
    { value: '1', department: '4', viewValue: 'Principal Chief Conservator of Forest & Head of the Forest Force (HoFF)' },
    { value: '2', department: '4', viewValue: 'Gujarat Pollution Control Board' },
    { value: '3', department: '4', viewValue: 'Gujarat Ecology Commission' },
    { value: '4', department: '4', viewValue: 'GEER Ecological Education and Research Foundation' },
    { value: '5', department: '4', viewValue: 'State Environment Impact Assessment Authority' },
    { value: '6', department: '4', viewValue: 'Gujarat State Lion Conservation Society' },
    { value: '7', department: '4', viewValue: 'Gujarat Environment Management Institute (GEMI)' },
    { value: '8', department: '4', viewValue: 'NA' },
    { value: '0', department: '5', viewValue: 'Climate Change Department' },
    { value: '1', department: '5', viewValue: 'Gujarat Energy Developement Agency' },
    { value: '2', department: '5', viewValue: 'NA' },
    { value: '0', department: '6', viewValue: 'Women & Child Development Department' },
    { value: '1', department: '6', viewValue: 'NA' },
    { value: '0', department: '7', viewValue: 'Urban Development & Urban Housing Department' },
    { value: '1', department: '7', viewValue: 'Ahmedabad Municipal Corporation' },
    { value: '2', department: '7', viewValue: 'Vadodara Municipal Corporation' },
    { value: '3', department: '7', viewValue: 'Bhavnagar Municipal Corporation' },
    { value: '4', department: '7', viewValue: 'Junagadh Municipal Corporation' },
    { value: '5', department: '7', viewValue: 'Gandhinagar Municipal Corporation' },
    { value: '6', department: '7', viewValue: 'Jamnagar Municipal Corporation' },
    { value: '7', department: '7', viewValue: 'Surat Muncipal Corporation' },
    { value: '8', department: '7', viewValue: 'NA' },
    { value: '0', department: '8', viewValue: 'Health & Family Welfare Department' },
    { value: '1', department: '8', viewValue: 'Commissioner of Health' },
    { value: '2', department: '8', viewValue: 'National Health Mission' },
    { value: '3', department: '8', viewValue: 'Indian Systems of Medicine & Homeopathy (AYUSH)' },
    { value: '4', department: '8', viewValue: 'Gujarat Medical Services Corporation Limited' },
    { value: '5', department: '8', viewValue: 'NA' },
    { value: '0', department: '9', viewValue: 'Road & Building Department' },
    { value: '1', department: '9', viewValue: 'NA' },
  ];

  schemeNameList: any[] = [
    { value: '0', department: '0', viewValue: '2211 Family Welfare' },
    { value: '1', department: '0', viewValue: 'Urban Development' },
    { value: '2', department: '0', viewValue: 'Forest Department' },
  ];

  hod_list: any[] = [];

  departmentName_list: any[] = [
    { value: '0', viewValue: 'Agriculture, Farmers Walfare and  Cooperation Department' },
    {
      value: '1',
      viewValue: 'Revenue Department'
    },
    {
      value: '2',
      viewValue: 'Panchayat,Rural Housing and Rural Development Department'
    },
    { value: '3', viewValue: 'Food, Civil Supplies and Consumer Affairs Department' },
    { value: '4', viewValue: 'Forest and Environment Department' },
    { value: '5', viewValue: 'Climate Change Department' },
    {
      value: '6',
      viewValue: 'Women and Child Development Department'
    },
    {
      value: '7',
      viewValue: 'Urban Development and Urban Housing Department'
    },
    { value: '8', viewValue: 'Health and Family Welfare Department' },
    { value: '9', viewValue: 'Roads And Buildings Department' },
  ];



  // table columns
  displayedColumns: string[] = [
    'serialNo',
    'financialYear',
    'utcReferenceNo',
    'adminstrativeDepartment',
    'headOfDepartment',
    'budgetHead',
    'sanctionOrderDate',
    'sanctionAmount',
    'utilizedAmount',
    'unspentAmount',
    'surrenderAmount',
    'surrenderOrderDate',
    'workflowStatus',
    'status',
    'action'];


  departmentCodeCtrl: FormControl = new FormControl();
  financialYearCtrl: FormControl = new FormControl();
  headOfDepartmentCtrl: FormControl = new FormControl();
  schemeNameCtrl: FormControl = new FormControl();
  sanctionOrderNoCtrl: FormControl = new FormControl();
  statusCtrl: FormControl = new FormControl();



  dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);
  private paginator: MatPaginator;
  @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
    this.paginator = mp;
    this.setDataSourceAttributes();
  }

  constructor(private fb: FormBuilder, public dialog: MatDialog, private router: Router) { }

  ngOnInit() {
    this.utcFormVerify = this.fb.group({
      financialYear: [''],
      departmentCode: [''],
      headOfDepartment: [''],
      schemeName: [''],
      sanctionOrderNo: [''],
      utcReference: [''],
      status: ['']

    });
  }

  // if all rows are selected
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  // toggle the selection on uchecking and unchecking the header checkbox
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  // sets checkbox label 
  checkboxLabel(row?: any): string {

    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  setDataSourceAttributes() {
    this.dataSource.paginator = this.paginator;
  }

  // search table data in basis of search form fields
  onSearch() {
    const formVal = this.utcFormVerify.value;

    console.log(formVal);
    if (formVal.financialYear !== '' && formVal.financialYear != null) {
      console.log(formVal.financialYear);
      this.filterElement_Data = this.ELEMENT_DATA.filter(
        searchByFinancialYear => searchByFinancialYear.financialYear.toLowerCase() === formVal.financialYear.toLowerCase());
      this.dataSource = new MatTableDataSource<any>(this.filterElement_Data);
      console.log(this.dataSource.data);
    }

    if (formVal.schemeName !== '' && formVal.schemeName != null) {
      console.log(formVal.financialYear);
      this.filterElement_Data = this.ELEMENT_DATA.filter(
        searchBy => searchBy.schemeName.toLowerCase() === formVal.schemeName.toLowerCase());
      this.dataSource = new MatTableDataSource<any>(this.filterElement_Data);
      console.log(this.dataSource.data);
    }
    if (formVal.ucId !== '' && formVal.ucId != null) {
      console.log(formVal.financialYear);
      this.filterElement_Data = this.ELEMENT_DATA.filter(
        searchBy => searchBy.ucId.toLowerCase() === formVal.ucId.toLowerCase());
      this.dataSource = new MatTableDataSource<any>(this.filterElement_Data);
      console.log(this.dataSource.data);
    }
    if ((formVal.financialYear === '' || formVal.financialYear == null) &&
      (formVal.ucId === '' || formVal.ucId == null)
      && (formVal.schemeName === '' || formVal.schemeName == null)) {
      this.dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);
    }
  }

  // reset the form
  resetForm() {
    this.utcFormVerify.reset();
  }

  utcFormListData() {

  }

  // opens workflow dialog box
  workflowDetails() {
    const dialogRef = this.dialog.open(WorflowDetailCMComponent, {
      width: '1200px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  gotoListing() { }
  goToDashboard() { }

  view(item) {
    this.router.navigate(['contract-management/utc-certificate']);
  }

  // select head of department on basis of adminstrative department
  selectDepartment() {
    const department = this.utcFormVerify.value.departmentCode;
    if (department !== '' && department != null) {
      this.hod_list = this.headOfDepartment_list.filter(
        searchBy => searchBy.department.toLowerCase() === department.toLowerCase());
    }
  }

}
