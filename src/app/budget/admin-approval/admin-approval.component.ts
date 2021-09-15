import { Component, OnInit, ElementRef } from '@angular/core';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { CommonListing } from 'src/app/model/common-listing';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { budgetMessage } from 'src/app/common/error-message/common-message.constants';
import { StandingChargeForwardDialogComponent1, StandingChargeViewCommentsComponent1 } from '../new-item-estimate/new-item-estimates/new-item-estimates.component';
import { StandingChargeForwardDialogComponent, StadingChargeConfirmDialogComponent } from '../standing-charge/standalone-charge/standalone-charge.component';
import { BehaviorSubject } from 'rxjs';
import { HeaderElement } from 'src/app/model/budget';
import { BudgetDirectives } from 'src/app/common/directive/budget-directive';

declare function SetEnglish();
declare function SetGujarati();


// Checklist Name Table Data
const ELEMENT_DATA: any[] = [
  { position: 1, name: 'Administrative Approval' },
];

@Component({
  selector: 'app-admin-approval',
  templateUrl: './admin-approval.component.html',
  styleUrls: ['./admin-approval.component.css']
})
export class AdminApprovalComponent implements OnInit {
  directiveObject = new BudgetDirectives(this.dialog);
  selectedindex: number;
  fileBrowseIndex: number;
  adminAppForm: FormGroup;
  date: any = new Date();
  isCheckList = false;
 errorMessages = budgetMessage;
 currentLang = new BehaviorSubject<string>('Eng');
 isLangChange = false;
 hasFocusSet: number;

//  Info Section Details
 headerJson: HeaderElement[] = [
   {label: 'Financial Year', value: '2019-2020'},
   {label: 'Department', value: 'Education Department'},
   {label: 'Branch Name', value: 'Section V'},
   {label: 'Budget Publication No.', value: '04: Education Department'},
   {label: 'Demand', value: '009:Education'},
   {label: 'Major Head', value: '4202-Capital Outlay on Education,Sports,Art and Culture'},
   {label: 'Sector', value: 'B Capital Account of Social and Community Services'},
   {label: 'Sub Sector', value: '(a) Education, Sports, Art and Culture'},
   {label: 'Sub Major Head', value: '01-General Education'},
   {label: 'Minor Head', value: '201: Elementary Education'},
   {label: 'Sub Head', value: '04-EDN-88 Water Harvesting of primary Schools'},
   {label: 'Detailed Head', value: '00-EDN-88 Water Harvesting of primary Schools'},
   {label: 'Charged/Voted', value: 'Voted'},
   {label: 'Item No. and Name of Item', value: 'Construction of Building'},
   { label: 'CSS', value: 'No' },
   {label: 'State of Percentage Share', value: '100%'},
 ];

//  Checklist Fields Dropdown
  yesNo_list: CommonListing[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' }
  ];

  yesNo7_list: CommonListing[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' }
  ];

  yesNo8_list: CommonListing[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' }
  ];

  attachmentlist: CommonListing[] = [
    { value: '1', viewValue: 'Supporting Document' },
    { value: '2', viewValue: 'Sanction Order' },
    { value: '3', viewValue: 'Others' },
  ];

  brwoseData: any[] = [{
    attachmentType: undefined,
    name: undefined,
    file: undefined,
  }];
  attachmentTypeCtrl: FormControl = new FormControl();
  yesNoCtrl: FormControl = new FormControl();
  yesNo7Ctrl: FormControl = new FormControl();
  yesNo8Ctrl: FormControl = new FormControl();
  districtCtrl: FormControl = new FormControl();

  // Attachment Table
  displayedBrowseColumns = ['position', 'attachmentType', 'fileName', 'browse', 'uploadedFileName', 'uploadedBy', 'action'];
  dataSourceBrowse = new MatTableDataSource(this.brwoseData);

  // Checklist Name Table
  itemViewCatogary: string[] = ['position', 'checklist', 'action'];
  ViewCatogarySourceData = ELEMENT_DATA;


  constructor(
    private el: ElementRef,
    private router: Router,
    private toastr: ToastrService,
    private fb: FormBuilder,
    public dialog: MatDialog, ) { }

  ngOnInit() {

    this.createForm();
  }
  createForm() {
    this.adminAppForm = this.fb.group({
      refLetNo: ['', Validators.required],
      referenceDate: ['', Validators.required],
      reason: ['', Validators.required],
      yesNo: [''],
      yesNoSeven: [''],
      yesNoEight: [''],
      point1: [''],
      point2: [''],
      point3_1: [''],
      point3_2: [''],
      point3_3: [''],
      point3_4: [''],
      point3_5: [''],
      point3_6: [''],
      point4: [''],
      point5: [''],
      point6: [''],
      point7: [''],
      point8: [''],
      point10_1: [''],
      point10_2: [''],
      point11_1: [''],
      point11_2: [''],
      point11_3: [''],
      point11_4: [''],
      pointA: [''],
      pointB: [''],
      point13: [''],
    });
  }

  // Eng/Guj language switch functions
  toggleLanguage() {
    this.isLangChange = true;
    const elements = this.el.nativeElement.querySelectorAll('.hasfocus')[0];
    if (elements !== undefined) {
      if (this.currentLang.value === 'Guj') {
        SetEnglish();
        this.currentLang.next('Eng');
      } else {
        SetGujarati();
        this.currentLang.next('Guj');
      }
      elements.focus();
    }
  }
  setEnglishOnFocusOut() {
    SetEnglish();
  }
  setGujaratiDefault() {
    if (!this.isLangChange) {
      SetGujarati();
      this.currentLang.next('Eng');
    }
  }

  showchecklist() {
    this.isCheckList = !this.isCheckList;
  }

  decimalPoint2($event) {
    $event.target.value = parseFloat($event.target.value).toFixed(2);
  }
  gotoListing() {
    this.router.navigate(['./budget/admin-approval-list']);
  }
  goToDashboard() { this.router.navigate(['']);
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

  onBrowseSelectChange() { }

  addBrowse() {
    if (this.dataSourceBrowse) {
      const data = this.dataSourceBrowse.data[this.dataSourceBrowse.data.length - 1];
      if (data && data.file) {
        const p_data = this.dataSourceBrowse.data;
        p_data.push({
          attachmentType: '',
          name: '',
          file: '',
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

}
