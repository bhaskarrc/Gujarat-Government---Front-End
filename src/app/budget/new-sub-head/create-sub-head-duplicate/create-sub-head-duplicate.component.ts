import { CommentDetailsBudgetComponent } from './../../comment-details-budget/comment-details-budget.component';
import { Component, OnInit, OnDestroy, ElementRef, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatTableDataSource, MatDialog, MatSlideToggleChange, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ReplaySubject, Observable, Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { NewWorkEstimateList } from 'src/app/model/new-work-estimate.model';
import { Router } from '@angular/router';
import { budgetMessage } from '../../../common/error-message/common-message.constants';
import { CommonListing } from 'src/app/model/common-listing';
import { DetailHead, Attachment } from '../../../model/new-sub-head';
import { BudgetDirectives } from 'src/app/common/directive/budget-directive';
import { StandingChargeForwardDialogComponent } from '../../standing-charge/standalone-charge/standalone-charge.component';
import { StandingChargeConsolidateHistoryComponent } from '../../standing-charge-consolidation/standing-charge-consolidate-history/standing-charge-consolidate-history.component';
import { NewSubHeadHistoryComponent } from '../create-sub-head/create-sub-head.component';

declare function SetGujarati();
declare function SetEnglish();

@Component({
  selector: 'app-create-sub-head-duplicate',
  templateUrl: './create-sub-head-duplicate.component.html',
  styleUrls: ['./create-sub-head-duplicate.component.css']
})
export class CreateSubHeadDuplicateComponent implements OnInit {
  tables: any[] = [{item1: ''}];
  totalRowCount = 1;
  index: number;
  directiveObject = new BudgetDirectives(this.dialog);

// Entry Field Details
  finYear_list: CommonListing[] = [
      { value: '1', viewValue: '2020-2021' },
      { value: '2', viewValue: '2019-2020' },
  ];

  department_list: CommonListing[] = [
      { value: '1', viewValue: 'Narmada, Water Resources, Water Supply & Kalpsar' },
      { value: '2', viewValue: 'Panchayats, Rural Housing and Rural Development Department' },
      { value: '3', viewValue: 'Revenue Department' },
      { value: '4', viewValue: 'Agriculture, Farmers Welfare & Co-Operation Department  ' },
  ];
  division_list: CommonListing[] = [
      { value: '1', viewValue: 'Narmada Division' },
      { value: '2', viewValue: 'Water Resources Division' },
      { value: '3', viewValue: 'Water Supply Division' },
      { value: '4', viewValue: 'Panchayat, Rural Housing Department' },
      { value: '5', viewValue: 'Rural Development Division' },
      { value: '6', viewValue: 'Revenue Department' },
      { value: '7', viewValue: 'Revenue Department(C.R.F)' },

  ];
  demand_list: CommonListing[] = [
      { value: '1', viewValue: '001:Agriculture and Co-operation Department' },
      { value: '2', viewValue: '002:Agriculture' },
      { value: '3', viewValue: '003:Minor Irrigation, Soil Conservation and Area Development' },
      { value: '4', viewValue: '004:Animal Husbandry' },
      { value: '5', viewValue: '005:Co-operation' },
      { value: '6', viewValue: '006:Fisheries' },
      { value: '7', viewValue: '007:Other Expenditure pertaining to Agriculture and Co-operation Department' },
      { value: '8', viewValue: '008' },
  ];
  bpn_list: CommonListing[] = [
      { value: '1', viewValue: '03:Agriculture, Farmers Welfare & Co-Operation Department' },
      { value: '2', viewValue: '04:Education Department' },
      { value: '3 ', viewValue: '05:Energy and Petro-Chemicals Department' },

      { value: '4', viewValue: '06:Finance Department' },
      { value: '5', viewValue: '07:Food, Civil Supplies and Consumer Affairs Department' },


  ];

  attachment_type: CommonListing[] = [
      { value: '1', viewValue: 'Supporting Document' },
      { value: '2', viewValue: 'Sanction Order' }
  ];

  majorHead_list: CommonListing[] = [
      { value: '1', viewValue: '3451:Secretariat-Economic Services' },
      {
        value: '2',
        viewValue: '5475:Capital Outlay on other General Economics Services'
      },
      { value: '3', viewValue: '2401:Crop Husbandry' },
      { value: '4', viewValue: '2071:Pensions and Other Retirement Benefits' },
      { value: '5', viewValue: '2058:Stationery and Printing' }
  ];

  subMajorHead_list: CommonListing[] = [
      { value: '1', viewValue: '00:Secretariat-Economic Services'},
      { value: '2', viewValue: '00:Capital Outlay on other General Economics Services'},
      { value: '3', viewValue: '00:Crop Husbandry' },
      { value: '4', viewValue: '00:Secretariat-Economic Services' },
      { value: '5', viewValue: '00:Capital Outlay on other General Economics Services' },
      { value: '6', viewValue: '01:Civil' },
      { value: '7', viewValue: '00:Stationery and Printing' },
      { value: '8', viewValue: '00::Co-operation' }
  ];

  minorHead_list: CommonListing[] = [
    { value: '1', viewValue: '090:Secretariat' },
    { value: '2', viewValue: '101:Niti Aayog' },
    { value: '3', viewValue: '800:Other Expenditure' },
    { value: '4', viewValue: '101:Direction And Administration' },
    { value: '5', viewValue: '102:Food grain Crops' },
    { value: '6', viewValue: '103:Seed' },
    { value: '7', viewValue: '800:Other Expenditure' },
    { value: '8', viewValue: '108:Contribution to Provident Funds' },
    { value: '9', viewValue: '001:Direction and Administration' },
    { value: '10', viewValue: '101:Purchase and Supply of Stationery Stores' },
    { value: '11', viewValue: '103:Government Presses' },
    { value: '12', viewValue: '105:Government Publications' },
    { value: '13', viewValue: '797:Transfer to Reserve fund and Deposite Account' },
    { value: '14', viewValue: '108:Assistance to other co-operatives' }
  ];
  budgetHeadType_list: CommonListing[] = [
      { value: '1', viewValue: 'SCSP' },
      { value: '2', viewValue: 'TASP' },
      { value: '3', viewValue: 'Works' },
      { value: '4', viewValue: 'Earthquake' },
      { value: '5', viewValue: 'Normal' },
  ];

  css_list: CommonListing[] = [
      { value: '1', viewValue: 'Yes' },
      { value: '2', viewValue: 'No' },
  ];

  filteredAttachType: CommonListing[] = [
      { value: '1', viewValue: 'Supporting Document' },
      { value: '2', viewValue: 'Sanction Order' },
      { value: '3', viewValue: 'Other' },
  ];

  subHeadCode_list: CommonListing[] = [
    {value: '1', viewValue: '01:Agricultural and Co-operation Department'},
    {value: '2', viewValue: '01:PLN-10 Planning Machinery in Agriculture.and Co-Operation  Development '},
    {value: '3', viewValue: '01:AGR-15 Information & Technology'},
    {value: '4', viewValue: '02:Expenditure for Training'},
    {value: '5', viewValue: '01:AGR-Renovation Of The Department'},
    {value: '6', viewValue: '01:Direcorate of Agriculture'},
    {value: '7', viewValue: '02:Divisional Establishmen'},
    {value: '8', viewValue: '03:District Establishment'},
  ];

  finYearCtrl: FormControl = new FormControl();
  departmentCtrl: FormControl = new FormControl();
  divisionCtrl: FormControl = new FormControl();
  demandCodeCtrl: FormControl = new FormControl();
  bpnCodeCtrl: FormControl = new FormControl();
  attachmentTypeCtrl: FormControl = new FormControl();
  majorHeadCodeCtrl: FormControl = new FormControl();
  subMajorHeadCodeCtrl: FormControl = new FormControl();
  minorHeadCodeCtrl: FormControl = new FormControl();
  subHeadCodeCtrl: FormControl = new FormControl();
  cssCtrl: FormControl = new FormControl();
  budgetHeadTypeCtrl: FormControl = new FormControl();

  date: Date = new Date();
  errorMessage;
  toggleVar = true;
  disableVal = true;
  edpShow = false;
  isSubmitted: Boolean = false;

  // Attachment Table
  brwoseData: Attachment[] = [{
      attachmentType: '',
      name: '',
      file: '',
  }];

  displayedBrowseColumns = ['position', 'attachmenttype', 'fileName', 'browse', 'uploadedFileName', 'uploadedBy', 'action'];
  dataSourceBrowse = new MatTableDataSource(this.brwoseData);
  fileBrowseIndex: number;

  // Detail Head Table
  detailHeadData: DetailHead[] = [{
      detailHeadCode: '',
      detailHeadDesEng: '',
      detailHeadDesGuj: '',
      greenPublication: '',
  }];
  displayedDetailHeadColumns = ['detailHeadCode', 'detailHeadDesEng', 'detailHeadDesGuj', 'greenPublication', 'action'];
  dataSourceDetailHead = new MatTableDataSource(this.detailHeadData);

  constructor(
      private elem: ElementRef,
      private fb: FormBuilder,
      private toastr: ToastrService,
      private el: ElementRef,
      private router: Router,
      public dialog: MatDialog,
  ) { }

  createSubHeadForm: FormGroup;
  filteredCodes: Observable<string[]>;
  tabDisable: Boolean = true;
  doneHeader: Boolean = false;
  selectedIndex: number;
  estimateForFilter = [];

  private _onDestroy = new
      Subject<void>();

  public subObjectFilterCtrl: FormControl = new FormControl();
  public filteredSubObjects: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  ngOnInit() {
      this.errorMessage = budgetMessage;
      this.createSubHeadForm = this.fb.group({
          finYear: [''],
          department: ['4'],
          division: [''],
          demandCode: ['', Validators.required],
          bpnCode: [''],
          majorHeadCode: ['', Validators.required],
          subMajorHeadCode: ['', Validators.required],
          minorHeadCode: ['', Validators.required],
          subHeadCode: ['', Validators.required],
          css: ['', Validators.required],
          cssEng: ['', Validators.required],
          cssGuj: ['', Validators.required],
          edpCode: ['', Validators.required],
          subHead: ['', Validators.required],
          subHeadCodeEng: ['', Validators.required],
          subHeadCodeGuj: ['', Validators.required],
          subHeadName: [''],
          accountingProcedure: [''],
          budgetHeadType: [''],
      });
  }

  ngOnDestroy() {
      this._onDestroy.next();
      this._onDestroy.complete();
  }

  // Set Eng/Guj Functions
  setGujarati() {
      SetGujarati();
  }

  setEnglish() {
      SetEnglish();
  }

  gotoList() {
      this.router.navigate(['./budget/sub-head-list']);
  }

  // For filter plugins.
  filterObjValue(arrValue, searchValue, filteredValue) {
      if (!arrValue) {
          return;
      }
      // get the search keyword
      let search = searchValue;
      if (!search) {
          filteredValue.next(arrValue.slice());
          return;
      } else {
          search = search.toLowerCase();
      }
      // filter the values
      filteredValue.next(
          arrValue.filter(item => item.viewValue.toLowerCase().indexOf(search) > -1)
      );
  }

  // Toggle Button Function
  public toggle(event: MatSlideToggleChange) {
    if (event.checked) {
      this.toggleVar = false;

    } else {

      this.toggleVar = true;
    }
  }

  // Change BPN value on select of Demand Field
  public changeBpn() {
    if (this.createSubHeadForm.controls.demandCode.value === '1') {
      this.disableVal = true;
      this.createSubHeadForm.controls.bpnCode.setValue('03:Agriculture, Farmers Welfare & Co-Operation Department');

    } else if (this.createSubHeadForm.controls.demandCode.value === '2') {
      this.disableVal = true;
      this.createSubHeadForm.controls.bpnCode.setValue('04:Education Department');
    } else if (this.createSubHeadForm.controls.demandCode.value === '3') {
      this.disableVal = true;
      this.createSubHeadForm.controls.bpnCode.setValue('05:Energy and Petro-Chemicals Department');
    } else if (this.createSubHeadForm.controls.demandCode.value === '4') {
      this.disableVal = true;
      this.createSubHeadForm.controls.bpnCode.setValue('06:Finance Department');
    } else if (this.createSubHeadForm.controls.demandCode.value === '5') {
      this.disableVal = true;
      this.createSubHeadForm.controls.bpnCode.setValue('07:Food, Civil Supplies and Consumer Affairs Department');
    } else {
      this.disableVal = true;
      this.createSubHeadForm.controls.bpnCode.setValue('07:Food, Civil Supplies and Consumer Affairs Department');
    }
  }

  // Set EDP value
  setEdp() {
    if (
      this.createSubHeadForm.controls['majorHeadCode'].value !== '' && this.createSubHeadForm.controls['subMajorHeadCode'].value !== ''
      && this.createSubHeadForm.controls['minorHeadCode'].value !== '' && (this.createSubHeadForm.controls['subHeadCode'].value !== ''
       || this.createSubHeadForm.controls['subHead'].value !== '')
    ) {
      this.edpShow = true;
      this.createSubHeadForm.controls.edpCode.setValue('3451 00 090 01');
     }

  }

  // submit Button Click
  submitToNextLevel(): void {
    const dialogRef = this.dialog.open(StandingChargeForwardDialogComponent, {
      width: '2700px',
      height: '600px'
      // data: employees
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'no') {
        console.log('The dialog was closed', result);
      } else if (result === 'yes') {
        console.log('The dialog was closed', result);
      }
    });
  }

  showHistoryDialog(): void {

  //   const dialogData = new ConfirmDialogModel();

    const dialogRef = this.dialog.open(NewSubHeadHistoryComponent, {
      maxWidth: '400px',
      // data: dialogData
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      console.log(dialogResult);
    });
  }


  // Tab Switch
  gotoTab(index: number) {
      this.selectedIndex = index;
  }

  // Attachments Section Functions
  onFileSelection(fileSelected) {
      if (fileSelected.target && fileSelected.target.files) {
          this.dataSourceBrowse.data[this.fileBrowseIndex].file = fileSelected.target.files[0];
      }
  }

  openFileSelector(index) {
      this.el.nativeElement.querySelector('#fileBrowse').click();
      this.fileBrowseIndex = index;
  }

  addBrowse() {
      if (this.dataSourceBrowse) {
          const data = this.dataSourceBrowse.data[this.dataSourceBrowse.data.length - 1];
          if (data && data.name && data.file) {
              const p_data = this.dataSourceBrowse.data;
              p_data.push({
                  attachmentType: undefined,
                  name: undefined,
                  file: undefined,
              });
              this.dataSourceBrowse.data = p_data;
          } else {
              this.toastr.error('Please fill the detail.');
          }
      }
  }

  deleteBrowse(index) {
      this.dataSourceBrowse.data.splice(index, 1);
      this.dataSourceBrowse = new MatTableDataSource(this.dataSourceBrowse.data);
  }

  onlyNumberTwoDigits(event: any) {
    const pattern = /^(100|[1-9]?[0-9])$/;
    const inputChar = String.fromCharCode(
      !event.charCode ? event.which : event.charCode
    );
    let tempstr = event.target.value;
    tempstr += inputChar;
    if (!pattern.test(tempstr)) {
      event.preventDefault();
      return false;
    }
  }

  // Add Row
  addRow() {
   const tabRow = document.getElementById('tabId');
   const rowNum = tabRow.getElementsByTagName('tr');
   let temp = 2;
   this.totalRowCount = rowNum.length - 1;
   console.log(this.totalRowCount);
   console.log(this.tables.length);
   this.tables.push({
    item1: '',
  });
  temp++;

  }

  // Delete Row
  deleteRow(element) {
    console.log(element);
    this.index = this.tables.indexOf(element);
    this.tables.splice(this.index, 1);
    this.totalRowCount--;
  }

  resetUpload() {
      if (this.dataSourceBrowse.data.length > 0) {
          this.dataSourceBrowse.data.forEach((obj: any, key: any) => {
              if (key === 0) {
                  this.dataSourceBrowse.data[0]['name'] = '';
                  this.dataSourceBrowse.data[0]['file'] = '';
              } else {
                  const index = this.dataSourceBrowse.data.indexOf(obj);
                  this.dataSourceBrowse.data.splice(index, 1);
              }
          });
      }
      this.dataSourceBrowse = new MatTableDataSource(this.dataSourceBrowse.data);
  }
  decimalKeyPress(event: any) {
      const pattern = /^\d+(\.\d{0,2})?$/;
      const inputChar = String.fromCharCode(!event.charCode ? event.which : event.charCode);
      // If the key is backspace, tab, left, right or delete
      let tempstr = event.target.value;
      tempstr += inputChar;

      if (!pattern.test(tempstr)) {
          // invalid character, prevent input
          event.preventDefault();
          return false;
      }
  }




}
