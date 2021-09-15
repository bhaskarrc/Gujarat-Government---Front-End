import { Component, OnInit, ElementRef } from '@angular/core';
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import { MatTableDataSource } from '@angular/material';
import { DppfMessage } from 'src/app/common/error-message/common-message.constants';
import { DataService } from 'src/app/common/data.service';

@Component({
  selector: 'app-inward-outward-letter-screen',
  templateUrl: './inward-outward-letter-screen.component.html',
  styleUrls: ['./inward-outward-letter-screen.component.css']
})
export class InwardOutwardLetterScreenComponent implements OnInit {
  // Browse Date
  brwoseData: any[] = [
    {
      name: undefined,
      file: undefined,
      uploadedBy: ''
    }
  ];
  // Table Source
  dataSourceBrowse = new MatTableDataSource(this.brwoseData);
  // Variable
  inwardOutwardLetterScreen = 'Inward Outward Letter Screen';
  inwardDate = 'Inward  Date:';
  inwardScreen = 'Inward Outward Screen';
  home = 'Home';
  dppf = 'DPPF';
  tabDisable: Boolean = true;
  data;
  errorMessage;
  // Date
  todayDate = Date.now();
  // Form Group

  inwardScreenForm: FormGroup;

  constructor(private fb: FormBuilder, private el: ElementRef, dataService: DataService) {
    this.data = dataService.getOption();
  }
  // Form Control
  inwardType: FormControl = new FormControl();
  branchType: FormControl = new FormControl();
  districtType: FormControl = new FormControl();
  letterReceivedFromType: FormControl = new FormControl();
  treasuryPaoType: FormControl = new FormControl();
  pensionType: FormControl = new FormControl();
  hbaMcaType: FormControl = new FormControl();
  npsType: FormControl = new FormControl();
  gpfType: FormControl = new FormControl();
  appSentRtiReqFeesType: FormControl = new FormControl();
  statusType: FormControl = new FormControl();
  rtiRelatedType: FormControl = new FormControl();
  attachmentTypeCodeCtrl: FormControl = new FormControl();
  repliedType: FormControl = new FormControl();
  prType: FormControl = new FormControl();
  typeOfLetterCTRL: FormControl = new FormControl();
  // Lists
  attachmentTypeCode: ListValue[] = [
    { value: '1', viewValue: '' },
  ];
  classInwardType: ListValue[] = [
    { value: '1', viewValue: 'Letter' },
    { value: '2', viewValue: 'RTI' }
  ];
  classBranchType: ListValue[] = [
    { value: '1', viewValue: 'Pension' },
    { value: '2', viewValue: 'HBA/MCA' },
    { value: '3', viewValue: 'NPS' },
    { value: '4', viewValue: 'GPF' },
  ];

  classDistrictType: ListValue[] = [
    { value: '1', viewValue: '1' },
    { value: '2', viewValue: '2' }
  ];

  classLetterReceivedFromType: ListValue[] = [
    { value: '1', viewValue: 'Person' },
    { value: '2', viewValue: 'Office' }
  ];

  typeOfLetter_list: ListValue[] = [
    { value: '1', viewValue: 'Normal Letter' },
    { value: '2', viewValue: 'Government Refrence' },
    { value: '3', viewValue: 'MP/MLA Refrence' },
    { value: '4', viewValue: 'Special Refrence' },
    { value: '5', viewValue: 'Court Refrence' }
  ];

  classPensionType: ListValue[] = [
    { value: '1', viewValue: 'PR 1' },
    { value: '2', viewValue: 'PR 2' },
    { value: '3', viewValue: 'PR 3' },
    { value: '4', viewValue: 'PR 4' },
    { value: '5', viewValue: 'PR 5' },
    { value: '6', viewValue: 'PR 6' },
    { value: '7', viewValue: 'PR 7' },
    { value: '8', viewValue: 'PR 8' },
    { value: '9', viewValue: ' PA Computer' },
    { value: '10', viewValue: 'Internal Audit' },
    { value: '11', viewValue: ' PA 1' },
    { value: '12', viewValue: ' PA 2' },
    { value: '13', viewValue: 'LM' },
    { value: '14', viewValue: ' Vigilance' },
    { value: '15', viewValue: '  ADM 1' },
    { value: '16', viewValue: '  ADM 2' }
  ];

  classHbaMcaType: ListValue[] = [
    { value: '1', viewValue: 'HBA' },
    { value: '2', viewValue: ' MCA' },
    { value: '3', viewValue: 'Control' }
  ];

  classNpsType: ListValue[] = [
    { value: '1', viewValue: 'Registry' },
    { value: '2', viewValue: ' NPS Control' }
  ];
  classGpfType: ListValue[] = [
    { value: '1', viewValue: 'Control' },
    { value: '2', viewValue: ' Inward' },
    { value: '3', viewValue: 'Outward' },
    { value: '4', viewValue: ' PFC 1 to 5' }
  ];
  fileBrowseIndex: number;
  displayedBrowseColumns = [
    'srno',
    'attachmentType',
    'browse',
    'fileName',
    'uploadedFileName',
    'uploadedBy',
    'action'
  ];


  ngOnInit() {
    this.errorMessage = DppfMessage;
    this.inwardScreenForm = this.fb.group({

      inward: ['', Validators.required],
      firstName: [''],
      middleName: [''],
      lastName: [''],
      dateInward: ['', Validators.required],
      letterno: [''],
      inwardLetterDate: [''],
      letterReceivedFrom: ['', Validators.required],
      officeAddress: [''],
      dateOfRetirement: [''],
      branch: ['', Validators.required],
      pension: [''],
      hbaMca: ['', Validators.required],
      nps: ['', Validators.required],
      gpf: ['', Validators.required],
      district: ['', Validators.required],
      address: [''],
      contactnum: [''],
      typeOfLetter: [''],
      remarks: [''],
      mobnum: [''],
      fileDescription: [''],

      branchh: [{ value: 'Vigilance', disabled: true }],
      applicationDate: ['', Validators.required],
      appFirstname: ['', Validators.required],
      appMiddlename: ['', Validators.required],
      appLastname: ['', Validators.required],
    });
    if (this.data['fromInwardList']) {
      if (this.data['fromInwardList'] === 'RTI') {
        this.inwardScreenForm.patchValue({
          inward: '2',
        });
        this.data['fromInwardList'] = '';
      } else if (this.data['fromInwardList'] === 'Letter') {
        this.inwardScreenForm.patchValue({
          inward: '1',
        });
        this.data['fromInwardList'] = '';
      }
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
          uploadedBy: ''
        });
        this.dataSourceBrowse.data = p_data;
      } else {
      }
    }
  }

  deleteBrowse(index) {
    this.dataSourceBrowse.data.splice(index, 1);
    this.dataSourceBrowse = new MatTableDataSource(this.dataSourceBrowse.data);
  }

  onFileSelection(fileSelected) {
    if (fileSelected.target && fileSelected.target.files) {
      this.dataSourceBrowse.data[this.fileBrowseIndex].file =
        fileSelected.target.files[0];
    }
  }

  // WorkFlow Details Popup
  workflowDetails(): void { }

  resetForm() {
  }
}
