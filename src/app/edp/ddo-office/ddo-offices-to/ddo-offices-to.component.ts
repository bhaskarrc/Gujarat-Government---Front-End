import { Component, OnInit,  ElementRef,  ViewChild,  Inject} from '@angular/core';
import {  FormControl,  FormGroup,  FormBuilder,  Validators} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject, BehaviorSubject } from 'rxjs';
import {  MAT_DIALOG_DATA,  MatTableDataSource,  MatSelect,  MatDialogRef,  MatDialog} from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import * as _ from 'lodash';
import {  TabelElement,  DdoSubOfficesCreate,  DataElement} from '../../../model/ddo-offices-create';
import { edpMessage } from 'src/app/common/error-message/common-message.constants';

@Component({
  selector: 'app-ddo-offices-to',
  templateUrl: './ddo-offices-to.component.html',
  styleUrls: ['./ddo-offices-to.component.css']
})
export class DdoOfficesToComponent implements OnInit {
  displayedColumns = new BehaviorSubject<any[]>(['noData']);
  ddoForm: FormGroup;
  ddoSubOffice: FormGroup;
  isCreateShow = false;
  tabDisable: Boolean = true;
  selectedIndex: number;
  doneHeader: Boolean = false;
  fileBrowseIndex: number;
  date = new FormControl(new Date());
  today_date = Date.now();
  isActiveSelected: boolean;
  isInActiveSelected: boolean;
  isCancelSelected: boolean;
  isSelected: boolean;
  isBillNotMapped: boolean;
  isNonDDO: boolean;
  ddo: Boolean = true;
  checked = false;

  grNo = 'TRS/EDP/30042019/001';
  requestNo = 510101201901;
  district = 'Ahmedabad';
  officeLevel = 'Administrative Department';
  level = 'State Level';
  ddoOfficeName = 'Collector Office';
  cardexNo = 5622;
  ddoNo = 4265;
  ddoType = 'Non DDO';
  nonDdoType = 'Nagarpalika';
  pvu = 'Pay Verification Unit, Self';
  designationName = 'Under Secretary';
  officeNameForDisplay = 'Civil Hospital, Dayapar, Naliya, Bhuj';
  requestTo = 'Treasury Office, Ahmedabad';
  treasuryType = 'Treasury Office';
  isCoOffice = 'Yes';
  address1 = 'Near RTO Circle, Subhas Bridge';
  address2 = 'Nehrunagar';
  taluka = 'Sanand';
  station = 'Nehrunagar';
  pinCode = 380051;
  phoneNo = '079-22786542';
  mobileNo = 8905511155;
  faxNo = 890551115589898;
  emailId = 'coll-ahm@gujarat.gov.in';
  department = 'General Administration Department';
  hod = 'Directorate Of Accounts and Treasuries';
  coName = 'Accounts Officer';
  coOfficeName = 'Collector Office';
  employeeNo = 201141137896;
  employeeName = 'Mr. Pratik Shah';
  approval = 'Forwarded To Approval';
  displayedBrowseColumns = [
    'sr_no',
    'attachmentType',
    'fileName',
    'browse',
    'uploadedFileName',
    'uploadedBy',
    'action'
  ];

  ELEMENT_DATA: TabelElement[] = [
    { name: undefined, file: undefined, attachment: 'CTC' },
    {
      name: undefined,
      file: undefined,
      attachment:
        'Concurrence From Administrative Department Regarding Declaration Of DDO'
    },
    {
      name: undefined,
      file: undefined,
      attachment:
        ' Certificate Regarding Verification Of Physical Existence Of New DDO Office'
    },
    { name: undefined, file: undefined, attachment: 'Supporting Document' }
  ];

  ELEMENT_DATA_Attechment: DataElement[] = [
    {
      filename: 'data.JPEG',
      attechment: 'Declaration Head Of The Office',
      uploadedBy: 'Mr. S R Shukla (EDP - Joint Director)'
    },
    {
      filename: 'data.JPEG',
      attechment: 'Declaration Of DDO By Admin.dept In Concurrence With FD',
      uploadedBy: 'Mr. S R Shukla (EDP - Joint Director)'
    },
    {
      filename: 'data.JPEG',
      attechment: 'Approved Establishment',
      uploadedBy: 'Mr. S R Shukla (EDP - Joint Director)'
    },
    {
      filename: 'data.JPEG',
      attechment: 'Statement As Per Notification Dated 02/06/2001',
      uploadedBy: 'Mr. S R Shukla (EDP - Joint Director)'
    },
    {
      filename: 'data.JPEG',
      attechment: 'Certificate Regarding Inclusion As a New Item In Budget',
      uploadedBy: 'Mr. S R Shukla (EDP - Joint Director)'
    },
    {
      filename: 'data.JPEG',
      attechment:
        'Order Of Distribution Of Employees( in case of split of office)',
      uploadedBy: 'Mr. S R Shukla (EDP - Joint Director)'
    }
  ];

  displayedHODBrowseColumns = [
    'sr_no',
    'attachmentType',
    'fileName',
    'uploadedBy',
    'action'
  ];
  dataSourceBrowse = new MatTableDataSource(this.ELEMENT_DATA);
  dataSourceAttechmentBrowse = new MatTableDataSource(
    this.ELEMENT_DATA_Attechment
  );

  ELEMENT_DATA_SubOffice: DdoSubOfficesCreate[] = [
    {
      subOfficeCode: 5612,
      ddoOfficeName: 'Collector Office',
      department: 'General Administration Department',
      // tslint:disable-next-line: max-line-length
      hod: 'Secretary to Legislative and Parliamentary Affairs Department',
      district: 'Ahmedabad',
      taluka: 'Sanand',
      uniqueId: 6546546,
      address: '',
      station: '',
      pinCode: 896565,
      phoneNo: 8965656556,
      faxNo: 89656565565646,
      emailId: ''
    }
  ];

  subOfficesList = new MatTableDataSource(this.ELEMENT_DATA_SubOffice);
  subOfficeColumn = [
    'srNo',
    'ddoOfficeName',
    'department',
    'hod',
    'district',
    'taluka',
    'action'
  ];

  errorMessages = edpMessage;

  treasuryOfficelist: any[] = [
    { value: '1', viewValue: 'District Treasury Office, Ahmedabad' },
    { value: '2', viewValue: 'District Treasury Office, Amreli' },
    { value: '3', viewValue: 'District Treasury Office, Bharuch' },
    { value: '4', viewValue: 'District Treasury Office, Bhavnagar' },
    { value: '5', viewValue: 'District Treasury Office, Bhuj' },
    { value: '6', viewValue: 'District Treasury Office, Dahod' }
  ];

  nonDDOTypeList: any[] = [
    { value: 'Nagarpalika', viewValue: 'Nagarpalika' },
    { value: 'Corporation', viewValue: 'Corporation' },
    { value: 'Board', viewValue: 'Board' },
    { value: 'Company', viewValue: 'Company' },
    { value: 'Others', viewValue: 'Others' },
    { value: 'University', viewValue: 'University' }
  ];

  billTypeList: any[] = [
    { value: 'all', viewValue: 'All' },
    { value: 'selected', viewValue: 'Selected' },
    { value: 'bills_not_mapped', viewValue: 'Bills Not Mapped' }
  ];

  billSelectedTypeList: any[] = [
    { value: '1', viewValue: 'GTR 30 - Pay Bill' },
    { value: '2', viewValue: 'GTR 45 - TA Bill' },
    { value: '3', viewValue: 'GTR 40 - Grant In Bill' },
    { value: '4', viewValue: 'GTR 12 - Advanced Bill' },
    { value: '5', viewValue: 'GTR 13 - Medical Bill' }
  ];

  moduleTypeList: any[] = [
    { value: '1', viewValue: 'EDP' },
    { value: '2', viewValue: 'Pay Fixation' },
    { value: '3', viewValue: 'Budget' },
    { value: '4', viewValue: 'Grant' },
    { value: '5', viewValue: 'DDO' },
    { value: '6', viewValue: 'Treasury Bill Processing' }
  ];
  moduleCtrl: FormControl = new FormControl();
  treasuryCtrl: FormControl = new FormControl();
  selectedBillCtrl: FormControl = new FormControl();

  @ViewChild('singleSelect') singleSelect: MatSelect;
  _onDestroy = new Subject<void>();

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    public dialog: MatDialog,
    private el: ElementRef
  ) {}

  ngOnInit() {
    this.createForm();
  }
  saveDDO() {}
  createForm() {
    this.ddoForm = this.fb.group({
      grNo: ['', Validators.required],
      district: ['', Validators.required],
      officeLevel: ['', Validators.required],
      level: ['', Validators.required],
      ddoOfficeName: ['', Validators.required],
      cardexNo: ['', Validators.required],
      pvu: ['', Validators.required],
      designationName: ['', Validators.required],
      ddoNo: [''],
      requestTo: ['', Validators.required],
      treasuryType: [''],
      isCoOffice: [''],
      treasuryOffice: ['', Validators.required],
      address1: ['', Validators.required],
      address2: [''],
      requestNo: [''],
      coName: [''],
      taluka: [''],
      station: [''],
      pinCode: [''],
      phoneNo: [''],
      mobileNo: [''],
      faxNo: [''],
      emailId: [''],
      billType: ['', Validators.required],
      selected: [''],
      officeNameForDisplay: [''],
      department: [''],
      hod: [''],
      coOfficeName: [''],
      checked: [''],
      objectionRemarks: [''],
      employeeNo: ['', Validators.required],
      employeeName: [''],
      approval: ['']
    });
    this.ddoForm.controls.ddoType.disable();
  }

  goToNext() {
    if (this.ddoForm.controls.ddoType.invalid) {
      this.toastr.error('Please fill all the details.');
      this.tabDisable = true;
      _.each(this.ddoForm.controls, function(control) {
        if (control.status === 'INVALID') {
          control.markAsTouched({ onlySelf: true });
        }
      });
    } else {
      this.tabDisable = false;
      this.selectedIndex = 1;
      this.doneHeader = true;
    }
  }

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

  addBrowse() {
    if (this.dataSourceBrowse) {
      const data = this.dataSourceBrowse.data[
        this.dataSourceBrowse.data.length - 1
      ];
      if (data && data['name'] && data['file']) {
        const p_data = this.dataSourceBrowse.data;
        p_data.push({
          name: undefined,
          file: undefined,
          attachment: 'Supporting Document'
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

  onFileSelection(fileSelected) {
    if (fileSelected.target && fileSelected.target.files) {
      this.dataSourceBrowse.data[this.fileBrowseIndex]['file'] =
        fileSelected.target.files[0];
    }
  }

  openFileSelector(index) {
    this.el.nativeElement.querySelector('#fileBrowse').click();
    this.fileBrowseIndex = index;
  }

  selectBill(bill) {
    if (bill == 'selected') {
      this.isSelected = true;
    } else {
      this.isSelected = false;
    }
  }


  ObjectionRemarks(isChecked = false) {
    if (this.checked == true) {
      this.checked = true;
    } else {
      this.checked = false;
    }
  }

  // tslint:disable-next-line: member-ordering
}

@Component({
  selector: 'app-ddo-sub-office-dialog',
  templateUrl: './ddo.sub.office.dialog.html'
})
export class DDOSubOfficeCreationTOComponent implements OnInit {
  department = '1';
  hod = '1';
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<DDOSubOfficeCreationTOComponent>
  ) {}
  ddoSubOffice: FormGroup;


  @ViewChild('singleSelect') singleSelect: MatSelect;
  _onDestroy = new Subject<void>();


  ngOnInit() {
    this.ddoSubOffice = this.fb.group({
      subOfficeCode: [''],
      ddoOfficeName: ['', Validators.required],
      district: ['', Validators.required],
      uniqueId: [],
      address: [''],
      station: [''],
      taluka: [''],
      pinCode: [''],
      phoneNo: [''],
      faxNo: [''],
      emailId: [''],
      department: ['8'],
      hod: ['1'],
      remarks: ['']
    });

    this.ddoSubOffice.controls['subOfficeCode'].setValue( this.data.subOfficeCode );
    this.ddoSubOffice.controls['ddoOfficeName'].setValue(this.data.officeName);
    this.ddoSubOffice.controls['department'].setValue(this.data.departmentID);
    this.ddoSubOffice.controls['hod'].setValue(this.data.hodID);
    this.ddoSubOffice.controls['district'].setValue(this.data.districtID);
    this.ddoSubOffice.controls['taluka'].setValue(this.data.talukaID);


  }

  HODList() {

  }
  districtCtrl() {

  }
  filteredDistrict() {

  }
  talukaCtrl() {

  }
  filteredTaluka() {
    
  }
  onCancel(): void {
    this.dialogRef.close('no');
  }

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

  saveSubOffice(): void {
    this.ddoSubOffice.get('ddoOfficeName').markAsTouched();
    this.ddoSubOffice.get('district').markAsTouched();
    this.ddoSubOffice.get('department').markAsTouched();

    if (this.ddoSubOffice.invalid) {
      return;
    }
    this.dialogRef.close(this.ddoSubOffice.value);
  }

  // tslint:disable-next-line: member-ordering
}
