import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import { DppfMessage } from 'src/app/common/error-message/common-message.constants';

@Component({
  selector: 'app-inward-outward-letter-screen-list-inwardno',
  templateUrl: './inward-outward-letter-screen-list-inwardno.component.html',
  styleUrls: ['./inward-outward-letter-screen-list-inwardno.component.css']
})
export class InwardOutwardLetterScreenListInwardnoComponent implements OnInit {
  // Date
  todaysDate = new Date();
  // Variable
  errorMessage;
  inwardScrInwardNo = 'Inward Outward Screen';
  // Form Group
  inwardScreenInwardNo: FormGroup;
  // Form Control
  branchType: FormControl = new FormControl();
  districtType: FormControl = new FormControl();
  letterReceivedFromType: FormControl = new FormControl();
  treasuryPaoType: FormControl = new FormControl();
  pensionType: FormControl = new FormControl();
  hbaMcaType: FormControl = new FormControl();
  npsType: FormControl = new FormControl();
  gpfType: FormControl = new FormControl();
  prType: FormControl = new FormControl();
  typeOfLetterCTRL: FormControl = new FormControl();

  constructor(private fb: FormBuilder) { }
  // Lists


  typeOfLetter_list: ListValue[] = [
    { value: '1', viewValue: 'Normal Letter' },
    { value: '2', viewValue: 'Government Refrence' },
    { value: '3', viewValue: 'MP/MLA Refrence' },
    { value: '4', viewValue: 'Special Refrence' },
    { value: '5', viewValue: 'Court Refrence' }
  ];

  classBranchType: ListValue[] = [
    { value: '1', viewValue: 'Pension' },
    { value: '2', viewValue: 'HBA/MCA' },
    { value: '3', viewValue: 'NPS' },
    { value: '4', viewValue: 'GPF' }
  ];

  classDistrictType: ListValue[] = [
    { value: '1', viewValue: '1' },
    { value: '2', viewValue: '2' }
  ];

  classLetterReceivedFromType: ListValue[] = [
    { value: '1', viewValue: 'Person' },
    { value: '2', viewValue: 'Office' }
  ];

  classTreasuryPaoType: ListValue[] = [
    { value: '1', viewValue: '1' },
    { value: '2', viewValue: '2' }
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


  classPrType: ListValue[] = [
    { value: '1', viewValue: 'PR 1 ' },
    { value: '2', viewValue: 'PR 2' },
    { value: '3', viewValue: 'PR 3' },
    { value: '4', viewValue: ' PR 4' },
    { value: '5', viewValue: 'PR 5' },
    { value: '6', viewValue: ' PR 6' },
    { value: '7', viewValue: '  PR 7' },
    { value: '8', viewValue: ' PR 8' }
  ];

  classKeepWithTheFile: ListValue[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' }
  ];

  ngOnInit() {
    this.errorMessage = DppfMessage;
    this.inwardScreenInwardNo = this.fb.group({
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
      mobnum: [''],
      fileDescription: [''],



      keepWithTheFile: ['', Validators.required],
      remarks: [''],
    });
  }

  // WorkFlow Details Popup
  workflowDetails(): void { }

  resetForm() {
    this.inwardScreenInwardNo.reset();
  }
}
