import { datasource } from './../delegation/delegation.component';

import { Component, OnInit, ViewChild, ElementRef, Inject, OnDestroy } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Subscription } from 'rxjs';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { BudgetFormType } from 'src/app/model/budget';
import { ToastrService } from 'ngx-toastr';
import { DialogData } from 'src/app/model/standing-charge';
import { MessageService } from 'src/app/service/message.service';
import { budgetMessage } from 'src/app/common/error-message/common-message.constants';
import { ItemContEstimateViewCommentsComponent } from '../item-continuous/item-continuous-estimate/create-budget-estimate.component';

export interface HeaderElement {
  label: string | '';
  value: string | '';
}

const ELEMENT_DATA: any[] = [
  {budHead: '2021-2022 : 019 : 2020 : 00 : 800 : 01 : 00 : Revenue: Voted', refNo: '19-20/BUD/NIE/001', 
  typeEst: 'New Item Estimates - Form C/F', proAmt: '1200.00', receivedFrom: 'Rajesh', receivedOn: '10/02/2020 10:30',
  sentFrom: 'Rajesh', sentOn: '10/02/2020 10:30',lyingWith: 'Mr. Sharma', status: 'Draft'},

  {budHead: '2021-2022 : 019 : 2020 : 00 : 800 : 01 : 00 : Revenue: Voted', refNo: '19-20/BUD/NWE/001', 
  typeEst: 'New Work Estimates - Form G/H', proAmt: '2800.00', receivedFrom: 'Rajesh', receivedOn: '10/02/2020 10:30',
   sentFrom: 'Rajesh', sentOn: '10/02/2020 10:30',lyingWith: 'Mr. Rajput', status: 'Pending'},

  {budHead: '2021-2022 : 019 : 2020 : 00 : 800 : 01 : 00 : Revenue: Voted', refNo: '19-20/BUD/ICE/001', 
  typeEst: 'Item Continuous Estimates - Form E', proAmt: '3400.00', receivedFrom: 'Rajesh', receivedOn: '10/02/2020 10:30',
   sentFrom: 'Rajesh', sentOn: '10/02/2020 10:30',lyingWith: 'Mr. Kumar', status: 'Approved'},

  {budHead: '2021-2022 : 019 : 2020 : 00 : 800 : 01 : 00 : Revenue: Voted', refNo: '19-20/BUD/WIP/001', 
  typeEst: 'Work-in-progress Estimates - Form I', proAmt: '5400.00', receivedFrom: 'Rajesh', receivedOn: '10/02/2020 10:30',
   sentFrom: 'Rajesh', sentOn: '10/02/2020 10:30',lyingWith: 'Mr. Sharma', status: 'Cancelled'},
];
@Component({
  selector: 'app-budget-list',
  templateUrl: './budget-list.component.html',
  styleUrls: ['./budget-list.component.css']
})
export class BudgetListComponent implements OnInit {
  displayedColumns: string[] = [ 'position',  'budHead', 'refNo', 'typeEst', 'proAmt',
  'received', 'sent', 'lyingWith', 'status', 'action'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  private paginator: MatPaginator;
  private sort: MatSort;
  searchListForm: FormGroup;
  finYear_list: BudgetFormType[] = [
    { value: '1', viewValue: '2020-2021' },
    { value: '2', viewValue: '2019-2020' },
    { value: '3', viewValue: '2018-2019' },
    { value: '4', viewValue: '2017-2018' },
    { value: '5', viewValue: '2016-2017' },
    { value: '6', viewValue: '2015-2016' },
    { value: '7', viewValue: '2014-2015' },
    { value: '8', viewValue: '2013-2014' },
    { value: '9', viewValue: '2012-2013' },
    { value: '10', viewValue: '2011-2012' },
    
  ];
  type_list: BudgetFormType[] = [
    { value: '1', viewValue: 'New Item Estimates - Form C/F' },
    { value: '2', viewValue: 'New Work Estimates -Form G/H' },
    { value: '3', viewValue: 'Item Continuous Estimates - Form E' },
    { value: '4', viewValue: 'Work-in-progress Estimates - Form I' },
  ];

  departmentCode_list: BudgetFormType[] = [
    { value: '1', viewValue: 'Home Department' },
    { value: '2', viewValue: 'Agriculture, Farmers Welfare and Co-operation Department' },
    { value: '3', viewValue: 'Health and Family Welfare Department' },
  ];

  receivedFrom_list: BudgetFormType[] = [
    { value: '1', viewValue: 'Director of Agriculture' },
    { value: '2', viewValue: 'Director of Horticulture' },
    { value: '3', viewValue: 'Director of Animal Husbandry' },
    { value: '4', viewValue: 'Registrar of Co-operative Societies' },
    { value: '5', viewValue: 'Commissioner of Fisheries' },
    { value: '6', viewValue: 'Director of Sugar' },
    { value: '7', viewValue: 'Director of Agriculture Marketing & Rural Finance' },
    { value: '8', viewValue: 'Chief Executive Officer Inspection & Audit Committee' },
    { value: '9', viewValue: 'Gujarat State Co-Operative Tribunal' },
  ];

  estimateFor_list: BudgetFormType[] = [
    { value: '1', viewValue: 'Shri Arun Mahesh Babu MS' },
    { value: '2', viewValue: 'Shri C.M. Padalia' },
    { value: '3', viewValue: 'Shri Amit Prakash Yadav' },
  ];

  demandCode_list: BudgetFormType[] = [
    { value: '1', viewValue: '001:Agriculture and Co-operation Department' },
    { value: '2', viewValue: '002:Agriculture' },
    { value: '3', viewValue: '047:Industries and Mines Department' },
    { value: '4', viewValue: '048:Stationery and Printing' },
    { value: '5', viewValue: '049:Industries' },
    { value: '6', viewValue: '084:Non-Residential Buildings' },
    { value: '7', viewValue: '085:Residential Buildings' },
    { value: '8', viewValue: '093: Welfare of Scheduled Tribes' },
    { value: '9', viewValue: '095: Scheduled Castes Sub Plan' },
    { value: '10', viewValue: '096:Tribal Area Sub-Plan' },
  ];

  revenue_capital_list: BudgetFormType[] = [
    { value: '1', viewValue: 'Revenue' },
    { value: '2', viewValue: 'Capital' },
  ];

  majorHeadCode_list: BudgetFormType[] = [
    { value: '1', viewValue: '3451:Secretariat-Economic Services' },
    {value: '2',viewValue: '5475:Capital Outlay on other General Economics Services'},
    { value: '3', viewValue: '2401:Crop Husbandry' },
    { value: '4', viewValue: '2071:Pensions and Other Retirement Benefits' },
    { value: '5', viewValue: '2058:Stationery and Printing' }
  ];

  subMajorHeadCode_list: BudgetFormType[] = [
    {
      value: '1',
      viewValue: '00:Secretariat-Economic Services'
    },

    {
      value: '2',
      viewValue: '00:Capital Outlay on other General Economics Services'
    },

    {
      value: '3',
      viewValue: '00:Crop Husbandry'
    },

    {
      value: '4',
      viewValue: '00:Secretariat-Economic Services'
    },

    {
      value: '5',
      viewValue: '00:Capital Outlay on other General Economics Services'
    },

    {
      value: '6',
      viewValue: '01:Civil'
    },

    {
      value: '7',
      viewValue: '00:Stationery and Printing'
    },

    {
      value: '8',
      viewValue: '00::Co-operation'
    }
  ];

  minorHeadCode_list: BudgetFormType[] = [
    {
      value: '1',
      viewValue: '090:Secretariat'
    },
    { value: '2', viewValue: '101:Niti Aayog' },
    { value: '800:Other Expenditure', viewValue: '800:Other Expenditure' },

    { value: '3', viewValue: '101:Direction And Administration' },
    { value: '4', viewValue: '102:Food grain Crops' },

    { value: '5', viewValue: '103:Seed' },
    { value: '6', viewValue: '800:Other Expenditure' },

    { value: '7', viewValue: '108:Contribution to Provident Funds' },
    { value: '8', viewValue: '001:Direction and Administration' },

    { value: '9', viewValue: '101:Purchase and Supply of Stationery Stores' },
    { value: '10', viewValue: '103:Government Presses' },

    { value: '11', viewValue: '105:Government Publications' },

    {
      value: '12',
      viewValue: '797:Transfer to Reserve fund and Deposite Account'
    },

    {
      value: '13',
      viewValue: '108:Assistance to other co-operatives'
    }
  ];

  subHead_list: BudgetFormType[] = [
    {
      value: '1',
      viewValue: '01:Agricultural and Co-operation Department'
    },

    {
      value:
        '2',
      viewValue:
        '01:PLN-10 Planning Machinery in Agriculture.and Co-Operation  Development '
    },

    {
      value: '3',
      viewValue: '01:AGR-15 Information & Technology'
    },

    {
      value: '4',
      viewValue: '02:Expenditure for Training'
    },

    {
      value: '5',
      viewValue: '01:AGR-Renovation Of The Department'
    },

    {
      value: '6',
      viewValue: '01:Direcorate of Agriculture'
    },

    {
      value: '7',
      viewValue: '02:Divisional Establishmen'
    },

    {
      value: '8',
      viewValue: '03:District Establishment'
    },

    {
      value: '9',
      viewValue: '01:Intensive Agricultural District Programme'
    },

    {
      value:
        '10',
      viewValue:
        '02:Subsidy For Increase Production and Productivity In Food Grain Crops (To be Opened)'
    },

    {
      value: '11',
      viewValue: '03:National Food Security Mission'
    },

    {
      value:
        '12',
      viewValue:
        '04:AGR() Promoting to farmer for Post Harvesting & Management (value addition)'
    },

    {
      value: '13',
      viewValue: '01:Multiplication and Distribution of various type of cotton'
    },

    {
      value: '14',
      viewValue: '02:Seed Testing Laboratory'
    },

    {
      value: '15',
      viewValue: '03:AGR 5 -Taluka Seed Multiplication Farms'
    },

    {
      value: '16',
      viewValue: '04:Adj.Establishment of seed cell'
    },

    {
      value: '17',
      viewValue: '01:IND-51 Industries and Mines Department'
    },

    {
      value: '18',
      viewValue:
        '01:IND-1 Planning Machinery in the Industries & Mines Department'
    },

    {
      value:
        '19',
      viewValue:
        '02:IND-1 Monitoring of Plan expenditure in Industries and Mines Department'
    },

    {
      value:
        '20',
      viewValue:
        '03:IND-45 Evaluation of Schemes under the Industries and Mines Department'
    },

    {
      value: '21',
      viewValue: '01:IND-44 Information Technology'
    },

    {
      value: '22',
      viewValue: '01:OIN-17 Industries & Mines Department'
    },

    {
      value:
        '23',
      viewValue:
        '01:Contribution towards employees Provident Funds Scheme for Presses'
    },

    {
      value: '24',
      viewValue: '01:IND-11 Directorate of Printing and Stationery'
    },

    {
      value: '25',
      viewValue: '01:Stationery offices Stores'
    },

    {
      value: '26',
      viewValue: '01:IND-48 Government Presses'
    },

    {
      value: '27',
      viewValue: '02:IND-42 Apprentice Training in Government Presses'
    },

    {
      value: '28',
      viewValue: '01:IND-32 Government Book Depots'
    },

    {
      value: '29',
      viewValue: '01:Depreciation Reserve Fund for Government Presses'
    },

    {
      value: '30',
      viewValue: '01:IND-48 Government Presses'
    },

    {
      value:
        '31',
      viewValue:
        '01:IND-12 Financial Assistance to Minority Handloom Weavers Co-operative Societies'
    },

    {
      value:
        '32',
      viewValue:
        '02:IND-22 Industrial to Co-operative Financial Assistance to Co-operative package scheme'
    }
  ];

  referenceNumber_list: BudgetFormType[] = [
    { value: '1', viewValue: '19-20/BUD/NIE/001' },
    { value: '2', viewValue: '19-20/BUD/NWE/001' },
    { value: '3', viewValue: '19-20/BUD/ICE/001' },
    { value: '4', viewValue: '19-20/BUD/WIP/001' },
  ];
  lyingWith_list: BudgetFormType[] = [
    { value: '1', viewValue: 'Amit Pandey' },
    { value: '2', viewValue: 'Satish Kumar' },
  ];
  status_list: BudgetFormType[] = [
    { value: '1', viewValue: 'Draft'},
    { value: '2', viewValue: 'Pending'},
    { value: '3', viewValue: 'Approved'},
    { value: '4', viewValue: 'Cancelled'},
  ];
  selectedDay: String = '';
  finYearCtrl: FormControl = new FormControl();
  typeCtrl: FormControl = new FormControl();
  departmentCodeCtrl: FormControl = new FormControl();
  receivedFromCtrl: FormControl = new FormControl();
  estimateForCtrl: FormControl = new FormControl();
  demandCodeCtrl: FormControl = new FormControl();
  revenueCapitalCtrl: FormControl = new FormControl();
  majorHeadCodeCtrl: FormControl = new FormControl();
  subMajorHeadCodeCtrl: FormControl = new FormControl();
  minorHeadCodeCtrl: FormControl = new FormControl();
  subHeadCtrl: FormControl = new FormControl();
  referenceNumberCodeCtrl: FormControl = new FormControl();
  lyingWithCtrl: FormControl = new FormControl();
  statusCtrl: FormControl = new FormControl();
  errorMessages = budgetMessage;
  @ViewChild(MatSort) set matSort(ms: MatSort) {
    this.sort = ms;
    this.setDataSourceAttributes();
  }

  @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
    this.paginator = mp;
    this.setDataSourceAttributes();
  }
  constructor(
    public dialog: MatDialog,
    public fb: FormBuilder,
    public service: MessageService,
  ) { }

  ngOnInit() {
    this.createForm();
  }

  setDataSourceAttributes() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  createForm() {
    this.searchListForm = this.fb.group({
      finYear: [''],
      type: [''],
      departmentCode: ['2'],
      receivedFrom: [''],
      estimateFor: [''],
      demandCode: [''],
      revenueCapital: [''],
      majorHeadCode: [''],
      subMajorHeadCode: [''],
      minorHeadCode: [''],
      subHead: [''],
      referenceNumber: [''],
      lyingWith: [''],
      status: ['']
    });
  }
  viewComments(index): void {
    const dataList = this.dataSource.data[index];
    this.service.viewComments(dataList);
    console.log(this.dataSource.data);
    console.log(index);
    const dialogRef = this.dialog.open( BudgetListDialogComponent , {
      width: '2700px',
      height: '600px'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'no') {
        console.log('The dialog was closed', result);
      } else if (result === 'yes') {
        console.log('The dialog was closed', result);
      }
    });
  }
  viewCommentsItemCont(index): void {
    const dataList = this.dataSource.data[index];
    this.service.viewComments(dataList);
    console.log(this.dataSource.data);
    console.log(index);
    const dialogRef = this.dialog.open( ItemContEstimateViewCommentsComponent , {
      width: '2700px',
      height: '600px'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'no') {
        console.log('The dialog was closed', result);
      } else if (result === 'yes') {
        console.log('The dialog was closed', result);
      }
    });
  }
  onclickStatus(data) {
    if (data.active) {
      data.active = false;
    } else {
      data.active = true;
    }
    return data;
  }

  clearForm() {
    this.searchListForm.reset();
  }
  searchEstimate() { }

  
  delete(index) {
    this.dataSource.data.splice(index, 1);
    this.dataSource = new MatTableDataSource(
      this.dataSource.data
    );
  }
}



@Component({
  selector: 'app-budget-list-dialog',
  templateUrl: 'budget-list-dialog.html',
  styleUrls: ['./budget-list.component.css']
})
export class BudgetListDialogComponent implements OnInit, OnDestroy {
  fileBrowseIndex: number;
  date: any = new Date();
  brwoseData: any[] = [{
    name: undefined,
    file: undefined,
  }];
  subscription: Subscription;
  message: any;
  dataSourceBrowse = new MatTableDataSource(this.brwoseData);
  displayedBrowseColumns = ['attachmentType', 'fileName', 'browse', 'uploadedFileName', 'action'];

  displayData: Boolean = false;
  attachment = [
      {fileName: 'Attachment 1', fileType: 'image', filePath: '../../../assets/sample-attachments/image-sample.jpg', imgStatus: false},
      {fileName: 'Attachment 2', fileType: 'pdf', filePath: '../../../assets/sample-attachments/pdf-sample.pdf', pdfStatus: false},
  ];
  sample: String = 'src/assets/img/pdf-test.pdf';
  fieldArray = Array.apply(null, {length: 10}).map(Number.call, Number);
  show: Boolean = true;
  page: Number = 1;
  totalPages: number;
  isLoaded: Boolean = false;
  sampleFlag: Boolean;
  actionForm: FormGroup;
  errorMessages = {
    FIN_YEAR: 'Please select any Financial Year',
    DEPARTMENT: 'Please select any Department',
  };
  master_checked: Boolean = false;
  master_indeterminate: Boolean = false;
  forwardDialog_history_list: any[] = [
    {disabled: false, checked: false, labelPosition: 'after', id: 3, userName: 'Shri P M Shah',
    designation: 'Deputy Secretary', role: 'Approver', date: '11/11/2019', comment: 'We may approve'},
    {disabled: false, checked: false, labelPosition: 'after', id: 2, userName: 'Shri C Patel',
    designation: 'Section Officer', role: 'Verifier', date: '10/11/2019', comment: 'We may approve'},
    {disabled: false, checked: false, labelPosition: 'after', id: 1, userName: 'Shri S M Modi',
    designation: 'Deputy Section Officer', role: 'Creator', date: '1/11/2019',
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
   
   
  ];
  headerJso: HeaderElement[] = [
    { label: 'Financial Year', value: '2020-2021' },
    { label: 'Department', value: 'Agriculture, Famers welfare and Co-operation Department' },
    { label: 'Name of the Branch', value: 'J Branch' },
    { label: 'Budget Publication Number', value: '03: Agriculture, Famers welfare and Co-operation Department' },
    { label: 'Demand', value: '04:Animal Husbandry' },
    { label: 'Major Head', value: '2403:Animal Husbandry' },
    { label: 'Sector', value: 'C-Economic Services' },
    { label: 'Sub Sector', value: '(a) Agriculture and Allied Activities'},
    { label: 'Sub Major Head', value: '00:Animal Husbandry'},
    { label: 'Minor Head', value: '103:Poultry Development'},
    { label: 'Sub Head', value: '01:ANH-10 Intensive Poultry Development Programmes'},
    { label: 'Detailed Head', value: '00:ANH-10 Intensive Poultry Development Programmes'},
    { label: 'Charged / Voted', value: 'Voted'},
    { label: 'State / CSS', value: 'Partially Centrally Sponsored Scheme'},
    { label: '% Ratio of State Burden', value: '60%'},
    { label: '% Ratio of CSS Burden', value: '40%'},
    { label: 'Item Name', value: 'Work Name'},
  ];
  constructor(
    private toastr: ToastrService,
    public dialogRef: MatDialogRef<BudgetListDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private el: ElementRef, public service: MessageService,
    public fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.subscription = this.service.message.subscribe(message => {
      this.message = message;
    });
    this.createForm();
  }
  createForm() {
    this.actionForm = this.fb.group({
    });
  }
  ngOnDestroy () {
    this.subscription.unsubscribe();
  }
  forwardConsolidate() {
    console.log('forwardConsolidate');
    this.dialogRef.close('yes');
  }

  checkDisplayFile(data){
    for (let i = 0; i < this.attachment.length; i++) {
      if (data.fileType === 'image') {
        if (this.attachment[i].fileName == data.fileName) {
          this.attachment[i].imgStatus = !this.attachment[i].imgStatus;
          this.show = this.attachment[i].imgStatus ? true : false;
        } else {
          this.attachment[i].imgStatus = false;
          // this.show = false;
        }
      } else if(data.fileType === 'pdf'){
        if(this.attachment[i].fileName === data.fileName){
          this.attachment[i].pdfStatus = !this.attachment[i].pdfStatus;
          this.show = this.attachment[i].pdfStatus ? true : false;
        } else{
          this.attachment[i].pdfStatus = false;
        }
      } else {
        // this.attachment[i].imgStatus? false : '';
        // this.attachment[i].pdfStatus? false : '';
      }
      if (this.show === false) {
        if (this.attachment[i].fileType === 'image') {
          this.attachment[i].imgStatus = false;
        } else if (this.attachment[i].fileType === 'pdf') {
          this.attachment[i].pdfStatus = false;
        }
      }
    }
    console.log(data);
  }

  onFileSelection(fileSelected) {
    if (fileSelected.target && fileSelected.target.files) {
      this.dataSourceBrowse.data[this.fileBrowseIndex].file = fileSelected.target.files[0];
    }
  }

  openFileSelector(index) {
    this.el.nativeElement.querySelector('#fileBrowse').click();
    this.fileBrowseIndex = index;
  }

  onBrowseSelectChange() { }

  addBrowse() {
    if (this.dataSourceBrowse) {
      const data = this.dataSourceBrowse.data[this.dataSourceBrowse.data.length - 1];
      if (data && data.name && data.file) {
        const p_data = this.dataSourceBrowse.data;
        p_data.push({
          name: undefined,
          file: undefined,
        });
        this.dataSourceBrowse.data = p_data;
      } else {
        this.toastr.error('Please fill the detail.');
      }
    }
  }
  // onNoClick() {}
  
  onNoClick() {
    this.closeDialog('no');
  }
  closeDialog(popup: 'no' | 'yes') {
    this.dialogRef.close(popup);
  }
  deleteBrowse(index) {
    this.dataSourceBrowse.data.splice(index, 1);
    this.dataSourceBrowse = new MatTableDataSource(this.dataSourceBrowse.data);
  }

  master_change() {
    for (let value of Object.values(this.forwardDialog_history_list)) {
      value.checked = this.master_checked;
    }
  }
 
  list_change() {
    let checked_count = 0;
    for (let value of Object.values(this.forwardDialog_history_list)) {
      if(value.checked)
      checked_count++;
    }
 
    if(checked_count>0 && checked_count<this.forwardDialog_history_list.length) {
      // If some checkboxes are checked but not all; then set Indeterminate state of the master to true.
      this.master_indeterminate = true;
    }else if(checked_count == this.forwardDialog_history_list.length) {
      //If checked count is equal to total items; then check the master checkbox and also set Indeterminate state to false.
      this.master_indeterminate = false;
      this.master_checked = true;
    }else{
      //If none of the checkboxes in the list is checked then uncheck master also set Indeterminate to false.
      this.master_indeterminate = false;
      this.master_checked = false;
    }
  }
}