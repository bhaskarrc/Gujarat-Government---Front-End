import { Component, OnInit, ElementRef, ViewChild, Inject } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ReplaySubject, Subject, BehaviorSubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MAT_DIALOG_DATA,  MatTableDataSource,   MatSelect,  MatDialogRef,  MatDialog } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import * as _ from 'lodash';
import { TabelElement } from '../../../model/ddo-offices-create';
import { edpMessage } from 'src/app/common/error-message/common-message.constants';

@Component({
  selector: 'app-ddo-office-hod',
  templateUrl: './ddo-office-hod.component.html',
  styleUrls: ['./ddo-office-hod.component.css']
})
export class DdoOfficeHodComponent implements OnInit {
  isCoOfficeNameRequired: Boolean = false;
  isCoDesignationRequired: Boolean = false;
  isHOD: Boolean = true;
  displayedColumns = new BehaviorSubject<any[]>(['noData']);
  ddoForm: FormGroup;
  ofcestablishform: FormGroup;
  ddoSubOffice: FormGroup;
  isCreateShow: Boolean = false;
  isNonDDO: boolean = false;
  DDO: Boolean = true;
  tabDisable: Boolean = true;
  selectedIndex: number;
  doneHeader: Boolean = false;
  fileBrowseIndex: number;
  date = new FormControl(new Date());
  todayDate = Date.now();
  officeDistrict: String = 'Ahmedabad';
  department: String = 'Agriculture & Co-Operation Department';
  hod: String = 'Secretary to Legislative and Parliamentary Affairs Department';
  officeNameForDisplay: String = 'Civil Hospital, Dayapar, Naliya, Bhuj';
  ddoOfficeName: String = 'Collector Office';
  approvalComment: String = 'Forwarded To Approval';
  employeeName: String;


  ELEMENT_DATA: TabelElement[] = [
    {
      name: undefined,
      file: undefined,
      attachment: 'Declaration Head Of The Office'
    },
    {
      name: undefined,
      file: undefined,
      attachment: 'Declaration Of DDO By Admin.dept In Concurrence With FD'
    },
    { name: undefined, file: undefined, attachment: 'Approved Establishment' },
    {
      name: undefined,
      file: undefined,
      attachment: 'Statement As Per Notification Dated 02/06/2001'
    },
    {
      name: undefined,
      file: undefined,
      attachment: 'Certificate Regarding Inclusion As a New Item In Budget'
    },
    {
      name: undefined,
      file: undefined,
      attachment:
        'Order Of Distribution Of Employees( in case of split of office)'
    },
    { name: undefined, file: undefined, attachment: 'Supporting Document' }
  ];

  displayedBrowseColumns = [
    'sr_no',
    'attachmentType',
    'fileName',
    'browse',
    'uploadedFileName',
    'uploadedBy',
    'action'
  ];
  subOfficeColumn = [
    'srNo',
    'officeName',
    'department',
    'HOD',
    'district',
    'taluka',
    'action'
  ];

  dataSourceofficestablishment = ['sr_no', 'attachmentType', 'action'];

  dataSourceBrowse = new MatTableDataSource(this.ELEMENT_DATA);
  nonDdoDataSourceBrowse = new MatTableDataSource(this.ELEMENT_DATA);
  subOfficesList = new MatTableDataSource(['noData']);

  errorMessages = edpMessage;


  districtNameList: any[] = [
    { value: '1', viewValue: 'Ahmedabad' },
    { value: '2', viewValue: 'Amreli' },
    { value: '3', viewValue: 'Bharuch' },
    { value: '4', viewValue: 'Bhavnagar' },
    { value: '5', viewValue: 'Bhuj' },
    { value: '6', viewValue: 'Dahod' }
  ];
  officeNameList: any[] = [
    { value: '1', viewValue: 'Administrative Department' },
    { value: '2', viewValue: 'Head of Department (HOD)' },
    { value: '3', viewValue: 'Drawing and Disbursing Office (DDO)' }
  ];
  officeLevelList: any[] = [
    { value: '1', viewValue: 'State Level' },
    { value: '2', viewValue: 'District Level' },
    { value: '3', viewValue: 'Taluka Level' }
  ];
  pvuList: any[] = [
    { value: '1', viewValue: 'Pay Verification Unit, Self' },
    { value: '2', viewValue: 'Pay Verification Unit, Gandhinagar' }
  ];
  designationList: any[] = [
    { value: '1', viewValue: 'Under Secretary' },
    { value: '2', viewValue: 'Deputy Secretary' },
    { value: '3', viewValue: 'Clerk' },
    { value: '4', viewValue: 'Deputy Section Officer' },
    { value: '5', viewValue: 'Assistant Secretary' }
  ];
  requesdToList: any[] = [
    { value: '1', viewValue: 'Treasury Office, Ahmedabad' },
    { value: '2', viewValue: 'Pay & Account Office, Ahmedabad' }
  ];
  treasuryOfficeList: any[] = [
    { value: '1', viewValue: 'Treasury Office' },
    { value: '2', viewValue: 'Sub Treasury Office' },
    { value: '3', viewValue: 'Pay & Accounts Office' },
    { value: '4', viewValue: 'Pension Payment Office' },
    { value: '5', viewValue: 'Pay Verification Unit' }
  ];
  ddoTypeList: any[] = [
    { value: 'ddo', viewValue: 'DDO' },
    { value: 'nonDdo', viewValue: 'Non DDO' },
    { value: 'panchayat', viewValue: 'Panchayat' }
  ];

  nonDDOTypeList: any[] = [
    { value: 'Nagarpalika', viewValue: 'Nagarpalika' },
    { value: 'Corporation', viewValue: 'Corporation' },
    { value: 'Board', viewValue: 'Board' },
    { value: 'Company', viewValue: 'Company' },
    { value: 'Others', viewValue: 'Others' },
    { value: 'University', viewValue: 'University' }
  ];
  isOfficeList: any[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' }
  ];
  talukaList: any[] = [
    { value: '1', viewValue: 'Daskroi' },
    { value: '2', viewValue: 'Sanand' },
    { value: '3', viewValue: 'Rajula' },
    { value: '4', viewValue: 'Babra' },
    { value: '5', viewValue: 'Jambusar' },
    { value: '6', viewValue: 'Jhagadia' },
    { value: '7', viewValue: 'Mahuva' },
    { value: '8', viewValue: 'Talaja' },
    { value: '9', viewValue: 'Anjar' },
    { value: '10', viewValue: 'Bhachau' },
    { value: '11', viewValue: 'Jalod' },
    { value: '12', viewValue: 'Dhanpur' }
  ];
  coList: any[] = [{ value: '1', viewValue: 'Accounts Officer' }];
  officeList: any[] = [{ value: '1', viewValue: 'Collector Office' }];

  districtCtrl: FormControl = new FormControl();
  officeLevelCtrl: FormControl = new FormControl();
  levelCtrl: FormControl = new FormControl();
  designationCtrl: FormControl = new FormControl();
  requestCtrl: FormControl = new FormControl();
  treasuryCtrl: FormControl = new FormControl();
  talukaCtrl: FormControl = new FormControl();
  coNameCtrl: FormControl = new FormControl();
  coOfficeNameCtrl: FormControl = new FormControl();
  _onDestroy = new Subject<void>();

  ofcestablishmentdata: any[] = [
    {
      postNO: 0,
    }
  ];

  displayedattachedcolumn = ['sr_no', 'designNatiom', 'sanPost', 'action'];

  displayofcestblishment = new MatTableDataSource(this.ofcestablishmentdata);

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
      pvu: ['', Validators.required],
      designationName: ['', Validators.required],
      requestTo: ['', Validators.required],
      treasuryType: [''],
      isCoOffice: [''],
      employeeNo: ['', Validators.required],
      employeeName: [''],
      ddoNO: [''],
      cardexNo: [''],
      ddoType: ['', Validators.required],
      nonDdoType: ['', Validators.required],
      address1: ['', Validators.required],
      address2: [''],
      officeDistrict: [''],
      taluka: [''],
      station: [''],
      pinCode: [''],
      stdCode: [''],
      phoneNo: [''],
      mobileNo: [''],
      faxNo: [''],
      emailId: [''],
      officeNameForDisplay: [''],
      department: [''],
      hod: [''],
      coName: [''],
      coOfficeName: [''],
      approvalComment: ['']
    });

    this.ofcestablishform = this.fb.group({
      totalSanctionedPost: [''],
    });
  }



  goToNext() {
    if (this.ddoForm.controls.grNo.invalid) {
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

  createSubChild(object) {
    object['isHod'] = this.isHOD;
    const dialogRef = this.dialog.open(DDOSubOfficeHODComponent, {
      disableClose: true,
      data: object
    });
    dialogRef.afterClosed().subscribe(result => {
      let keys = Object.keys(object);
      let isEdit = keys.length;
      if (result != '' && isEdit == 1) {
        this.displayedColumns.next(this.subOfficeColumn);
        let p_data;
        if (this.subOfficesList.data[0] == 'noData') {
          p_data = [];
        } else {
          p_data = this.subOfficesList.data;
        }
        let taluka = this.talukaList.filter(value => {
          return value.value === result.taluka;
        });
        if (taluka[0] != undefined) {
          taluka = taluka[0].viewValue;
        }
        p_data.push({
          officeName: result.ddoOfficeName,
          talukaID: result.taluka,
          department: result.department,
          HOD: result.hod,
          district: result.district,
          taluka: taluka,
          address: result.address,
          station: result.station,
          pinCode: result.pinCode,
          stdCode: result.stdCode,
          phoneNo: result.phoneNo,
          emailId: result.emailId,
          faxNo: result.faxNo
        });
        this.subOfficesList.data = p_data;
      }
    });
  }

  listOfNonDDO(non_ddo) {
    if (non_ddo == 'nonDdo') {
      this.isNonDDO = true;
      this.DDO = false;
    } else {
      this.isNonDDO = false;
      this.DDO = true;
    }
  }

  onFileSelection(fileSelected) {
    if (fileSelected.target && fileSelected.target.files) {
      this.dataSourceBrowse.data[this.fileBrowseIndex].file =
        fileSelected.target.files[0];
    }
  }

  openFileSelector(index) {
    this.el.nativeElement.querySelector('#fileBrowse').click();
    this.fileBrowseIndex = index;
  }

  addBrowse() {
    if (this.dataSourceBrowse) {
      const data = this.dataSourceBrowse.data[
        this.dataSourceBrowse.data.length - 1
      ];
      if (data && data.name && data.file) {
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

  requiredField(level) {
    if (level.value == 3) {
      this.isCoOfficeNameRequired = true;
      this.isCoDesignationRequired = true;
    } else {
      this.isCoOfficeNameRequired = false;
      this.isCoDesignationRequired = false;
    }
  }

  hodDisbaled(officeType) {
    if (officeType.value == 1) {
      this.isHOD = false;
    } else {
      this.isHOD = true;
    }
  }

  addEmployeeName($event) {
    if ($event.target.value > 0) {
      this.employeeName = 'Mr. Pratik Shah';
    }
  }

  addofcestablish() {
    if (
      this.ofcestablishform.controls.totalSanctionedPost.value >
      this.calculation('postNO')
    ) {
      if (this.displayofcestblishment) {
        const data = this.displayofcestblishment.data[
          this.displayofcestblishment.data.length - 1
        ];
        if (data && data.postNO) {
          const p_data = this.displayofcestblishment.data;
          p_data.push({
            postNO: 0
          });
          this.displayofcestblishment.data = p_data;
        } else {
          this.toastr.error('Please fill the detail.');
        }
      }
    }
  }

  deleteofcestablish(index) {
    this.displayofcestblishment.data.splice(index, 1);
    this.displayofcestblishment = new MatTableDataSource(
      this.displayofcestblishment.data
    );
  }

  calculation(unit) {
    // tslint:disable-next-line: radix
        const total = this.displayofcestblishment.data.reduce(
            (summ, v) => (summ += (v[unit])),
            0
          );
          return total;
  }
}

@Component({
    selector: 'app-ddo-sub-office-dialog',
    templateUrl: './ddo.sub.office.dialog.html',
    styleUrls: ['./ddo-office-hod.component.css']
})

export class DDOSubOfficeHODComponent implements OnInit {

    districtCtrl: FormControl = new FormControl();
    filteredDistrict: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

    talukaCtrl: FormControl = new FormControl();
    filteredTaluka: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

    @ViewChild('singleSelect') singleSelect: MatSelect;
    _onDestroy = new Subject<void>();


    isHOD: Boolean;
    district: String = 'Ahmedabad';
    ddoSubOffice: FormGroup;
    department: String = 'Agriculture & Co-Operation Department';
    hod: String = 'Secretary to Legislative and Parliamentary Affairs Department';

      talukaList: any[] = [
        {value: '1', viewValue: 'Daskroi'},
        {value: '2', viewValue: 'Sanand'},
        {value: '3', viewValue: 'Rajula'},
        {value: '4', viewValue: 'Babra'},
        {value: '5', viewValue: 'Jambusar'},
        {value: '6', viewValue: 'Jhagadia'},
        {value: '7', viewValue: 'Mahuva'},
        {value: '8', viewValue: 'Talaja'},
        {value: '9', viewValue: 'Anjar'},
        {value: '10', viewValue: 'Bhachau'},
        {value: '11', viewValue: 'Jalod'},
        {value: '12', viewValue: 'Dhanpur'},
      ];

      departmentList: any[] = [
        {value: '1', viewValue: 'General Administration Department'},
        {value: '2', viewValue: 'Agriculture & Co-Operation Department'},
        {value: '3', viewValue: 'Education Department'},
        {value: '4', viewValue: 'Energy & Petrochemicals Department'},
        {value: '5', viewValue: 'Finance Department'},
        {value: '6', viewValue: 'Food & Civil Supplies Department'},
        {value: '7', viewValue: 'Forest & Environment Department'},
        {value: '8', viewValue: 'legislative and parliamentary affairs department'}
      ];

      HODList: any[] = [
        {value: '1', viewValue: 'Secretary to Legislative and Parliamentary Affairs Department'},
      ];
    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        private fb: FormBuilder,
        public dialogRef: MatDialogRef<DDOSubOfficeHODComponent>
    ) {
        this.isHOD = this.data['isHod'];
    }
    ngOnInit() {
        this.ddoSubOffice = this.fb.group({
            ddoOfficeName: ['', Validators.required],
            department: ['8'],
            hod: ['1'],
            address: ['', Validators.required],
            district: ['', Validators.required],
            taluka: [''],
            station: [''],
            pinCode: [''],
            stdCode: [''],
            phoneNo: [''],
            emailId: [''],
            faxNo: ['']
        });
        // this.ddoSubOffice.controls['ddoOfficeName'].setValue(this.data.officeName);
        // this.ddoSubOffice.controls['department'].setValue(this.data.department);
        // this.ddoSubOffice.controls['hod'].setValue(this.data.HOD);
        // this.ddoSubOffice.controls['district'].setValue(this.data.district);
        // this.ddoSubOffice.controls['taluka'].setValue(this.data.talukaID);
        this.ddoSubOffice.patchValue({
            ddoOfficeName: this.data.officeName,
            department: this.data.department,
            hod: this.data.hod,
            district: this.data.district,
            taluka: this.data.talukaID,
            address: this.data.address,
            station: this.data.station,
            pinCode: this.data.pinCode,
            stdCode: this.data.stdCode,
            phoneNo: this.data.phoneNo,
            emailId: this.data.emailId,
            faxNo: this.data.faxNo
        });

        //Filter Of Taluka
        this.filteredTaluka.next(this.talukaList.slice());
        this.talukaCtrl.valueChanges
            .pipe(takeUntil(this._onDestroy))
            .subscribe(() => {
                this.filterObjValue(this.talukaList, this.talukaCtrl.value, this.filteredTaluka);
            });
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

    saveSubOffice(){
        this.ddoSubOffice.get('ddoOfficeName').markAsTouched();
        this.ddoSubOffice.get('address').markAsTouched();
        if (this.ddoSubOffice.invalid) {
            return;
        }
        this.dialogRef.close(this.ddoSubOffice.value);
    }

    // errorMessages = {
    //     officeName: 'Please Enter Office Name',
    //     district: 'Please select any District',
    //     department: 'Please select any Department',
    //     Address: 'Please add Address here'
    // };
}



