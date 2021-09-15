
import { AttachmentDetails } from 'src/app/model/stepping-up';
import { pvuMessage, budgetMessage } from 'src/app/common/error-message/common-message.constants';
import { Component, OnInit, Inject, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { MatTableDataSource, MatDatepickerInputEvent } from '@angular/material';
import { ReplaySubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CommonListing } from 'src/app/model/common-listing';
import { Router } from '@angular/router';
@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css']
})
export class PublicationsComponent implements OnInit {
  attachment_type_list: CommonListing[] = [
    { value: '1', viewValue: 'Budget Speech' },
    { value: '2', viewValue: 'Socio-Economic Development Factor Wise Classification' },
    { value: '3', viewValue: 'Human Development Indicator Wise Classification' },
    { value: '4', viewValue: 'Leverage Position (Debt Sustainability) Wise Classification' },
    { value: '5', viewValue: 'Sustainable Development Goal Wise Classification' },
  ];
  finYear_list: CommonListing[] = [
    { value: '1', viewValue: '2021-2022' },
    { value: '2', viewValue: '2020-2021' },
    { value: '3', viewValue: '2019-2020' },
    { value: '4', viewValue: '2018-2019' },
    { value: '5', viewValue: '2017-2018' },
    { value: '6', viewValue: '2016-2017' },
    { value: '7', viewValue: '2015-2016' },
    { value: '8', viewValue: '2014-2015' },
    { value: '9', viewValue: '2013-2014' },
    { value: '10', viewValue: '2012-2013' },
    { value: '11', viewValue: '2011-2012' },
  ];
  containers = [];
  searchVar = false;
  currentDetails: Boolean = false;
  steppingupForm: FormGroup;
  publicationsForm: FormGroup;
  emplyeeeDataListShow: Boolean = false;
  typeCtrl: FormControl = new FormControl();
  private _onDestroy = new Subject<void>();
  val: number;
  fileBrowseIndex: number;
  brwoseData: AttachmentDetails[] = [{
    name: undefined,
    file: undefined,
    attachment: 'Final Order'
  }];
  dataSourceBrowse = new MatTableDataSource<AttachmentDetails>(this.brwoseData);
  displayedBrowseColumns = ['position', 'attachmentType', 'fileName', 'browse', 'uploadedFileName', 'uploadedBy', 'action'];


  brwoseDataView: any[] = [
    { attachmentType: 'Budget Speech', fileName: 'budgetsp.pdf' },
    { attachmentType: 'Budget Speech', fileName: 'budgetsp.pdf' },
    { attachmentType: 'Sustainable Development Goal Wise Classification', fileName: 'develop.pdf' },
    { attachmentType: 'Human Development Indicator Wise Classification', fileName: 'develop.pdf' },
  ];
  dataSourceBrowseView = new MatTableDataSource(this.brwoseDataView);
  displayedBrowseColumnsView = ['position', 'attachmentType', 'fileName', 'action'];
  attachmentTypeCtrl: FormControl = new FormControl();
  filteredAttachmentType: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);
  finYearCtrl: FormControl = new FormControl();
  errorMessages = budgetMessage;

  filteredFinancialYear: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);
  constructor(public fb: FormBuilder, private toastr: ToastrService,
    public dialog: MatDialog, private el: ElementRef,
    private router: Router, ) { }
  ngOnInit() {
    this.publicationsForm = this.fb.group({
      finYear: ['1'],
      attachmentType: [''],
      fileName: [''],
      browse: [''],
      uploadedFileName: [''],
      uploadedBy: [''],
    });

    this.publicationsForm.controls.finYear.setValue('1');

    this.containers.push(this.containers.length);
    this.filteredAttachmentType.next(this.attachment_type_list.slice());
    (this.attachmentTypeCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(this.attachment_type_list, this.attachmentTypeCtrl.value, this.filteredAttachmentType);
      }));
  }
  filterObjValue(arrValue, searchValue, filteredValue) {
    if (!arrValue) {
      return;
    }
    filteredValue.next(
      arrValue.filter(item => item.viewValue.toLowerCase().indexOf(search) > -1)
    );
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
  saveEstimate(data) {
  }

  gotoListing() {
    this.router.navigate(['./budget/publications-list']);
  }

  emplyeeeDataList() {
    this.emplyeeeDataListShow = !this.emplyeeeDataListShow;
  }
  submitDetails() {
    this.toastr.success('Data Uploaded Successfully');
  }
  add() {
    this.containers.push(this.containers.length);
  }
  deleteRow(index) {
    this.containers.splice(index, 1);
  }
  modalboxPopup() {
  }
  deleteBrowse(index) {
    this.dataSourceBrowse.data.splice(index, 1);
    this.dataSourceBrowse = new MatTableDataSource(this.dataSourceBrowse.data);
  }
  goToDashboard() {
    this.router.navigate(['']);
  }
  onSearch() {
    this.searchVar = true;
  }
  onFileSelection(fileSelected) {
    if (fileSelected.target && fileSelected.target.files) {
      this.dataSourceBrowse.data[this.fileBrowseIndex].file = fileSelected.target.files[0];
    }
  }
  onBrowseSelectChange() { }
  openFileSelector(index) {
    this.el.nativeElement.querySelector('#fileBrowse').click();
    this.fileBrowseIndex = index;
  }
  addBrowse() {
    if (this.dataSourceBrowse) {
      const data = this.dataSourceBrowse.data[this.dataSourceBrowse.data.length - 1];
      if (data && data.file) {
        const p_data = this.dataSourceBrowse.data;
        p_data.push({
          name: undefined,
          file: undefined,
          attachment: 'Supporting Document'
        });
        this.dataSourceBrowse.data = p_data;
      } else {
      }
    }
  }
}


