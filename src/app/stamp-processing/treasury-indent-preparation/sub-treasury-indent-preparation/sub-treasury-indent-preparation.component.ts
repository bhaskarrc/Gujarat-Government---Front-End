import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { CommonListing } from 'src/app/model/common-listing';
import { CloseConfirmCommonDialogComponent } from '../../close-confirm-common-dialog/close-confirm-common-dialog.component';
import { SubmitConfirmCommonDialigComponent } from '../../submit-confirm-common-dialig/submit-confirm-common-dialig.component';
import { stampProcessMessage } from 'src/app/common/error-message/common-message.constants';
import { ElementStIndentSto, ElementFinalStIndentSto } from 'src/app/model/stamp-processing';
import { StampProcessingDirectives } from 'src/app/common/directive/stamp-processing-directive';

// Listing table data stamp wise
const ELEMENT_DATA: ElementStIndentSto[] = [
  {
    checkbox: false,
    deno: '-',
    stock: '5',
    supply: '4',
    qtySold: '4',
    closeBal: '2',
    qtyDue: '2',
    qtyReq: '',
    qtyApp: '5',
    qtyRequired: '',
  }
];

const ELEMENT_DATA2: ElementStIndentSto[] = [
  {
    checkbox: false,
    deno: '100',
    stock: '5',
    supply: '4',
    qtySold: '4',
    closeBal: '2',
    qtyDue: '2',
    qtyReq: '',
    qtyApp: '5',
    qtyRequired: '',
  }
];
const ELEMENT_DATA3: ElementStIndentSto[] = [
  {
    checkbox: false,
    deno: '1',
    stock: '0',
    supply: '0',
    qtySold: '0',
    closeBal: '0',
    qtyDue: '0',
    qtyReq: '',
    qtyApp: '0',
    qtyRequired: '',
  },
  {
    checkbox: false,
    deno: '2',
    stock: '4',
    supply: '4',
    qtySold: '3',
    closeBal: '1',
    qtyDue: '1',
    qtyReq: '',
    qtyApp: '4',
    qtyRequired: '',
  },
  {
    checkbox: false,
    deno: '5',
    stock: '6',
    supply: '4',
    qtySold: '3',
    closeBal: '3',
    qtyDue: '0',
    qtyReq: '',
    qtyApp: '2',
    qtyRequired: '',
  },
  {
    checkbox: false,
    deno: '10',
    stock: '0',
    supply: '0',
    qtySold: '0',
    closeBal: '0',
    qtyDue: '0',
    qtyReq: '',
    qtyApp: '0',
    qtyRequired: '',
  },
  {
    checkbox: false,
    deno: '20',
    stock: '5',
    supply: '3',
    qtySold: '5',
    closeBal: '3',
    qtyDue: '2',
    qtyReq: '',
    qtyApp: '1',
    qtyRequired: '',
  }
];
const ELEMENT_DATA4: ElementStIndentSto[] = [
  {
    checkbox: false,
    deno: '50',
    stock: '6',
    supply: '4',
    qtySold: '3',
    closeBal: '3',
    qtyDue: '0',
    qtyReq: '',
    qtyApp: '2',
    qtyRequired: '',
  },
  {
    checkbox: false,
    deno: '60',
    stock: '0',
    supply: '0',
    qtySold: '0',
    closeBal: '0',
    qtyDue: '0',
    qtyReq: '',
    qtyApp: '0',
    qtyRequired: '',
  },
  {
    checkbox: false,
    deno: '100',
    stock: '6',
    supply: '4',
    qtySold: '3',
    closeBal: '3',
    qtyDue: '0',
    qtyReq: '',
    qtyApp: '2',
    qtyRequired: '',
  },
  {
    checkbox: false,
    deno: '200',
    stock: '0',
    supply: '0',
    qtySold: '0',
    closeBal: '0',
    qtyDue: '0',
    qtyReq: '',
    qtyApp: '0',
    qtyRequired: '',
  },
  {
    checkbox: false,
    deno: '500',
    stock: '6',
    supply: '4',
    qtySold: '3',
    closeBal: '3',
    qtyDue: '0',
    qtyReq: '',
    qtyApp: '2',
    qtyRequired: '',
  },
  {
    checkbox: false,
    deno: '1000',
    stock: '6',
    supply: '0',
    qtySold: '0',
    closeBal: '0',
    qtyDue: '0',
    qtyReq: '',
    qtyApp: '5',
    qtyRequired: '',
  },
  {
    checkbox: false,
    deno: '3000',
    stock: '6',
    supply: '4',
    qtySold: '3',
    closeBal: '3',
    qtyDue: '0',
    qtyReq: '',
    qtyApp: '2',
    qtyRequired: '',
  },
  {
    checkbox: false,
    deno: '5000',
    stock: '0',
    supply: '0',
    qtySold: '0',
    closeBal: '0',
    qtyDue: '0',
    qtyReq: '',
    qtyApp: '0',
    qtyRequired: '',
  },
  {
    checkbox: false,
    deno: '25000',
    stock: '6',
    supply: '3',
    qtySold: '3',
    closeBal: '3',
    qtyDue: '2',
    qtyReq: '',
    qtyApp: '6',
    qtyRequired: '',
  },
];
const ELEMENT_DATA5: ElementStIndentSto[] = [
  {
    checkbox: false,
    deno: '-',
    stock: '5',
    supply: '4',
    qtySold: '4',
    closeBal: '2',
    qtyDue: '2',
    qtyReq: '',
    qtyApp: '5',
    qtyRequired: '',
  }
];
const ELEMENT_DATA6: ElementStIndentSto[] = [
  {
    checkbox: false,
    deno: '1',
    stock: '0',
    supply: '0',
    qtySold: '0',
    closeBal: '0',
    qtyDue: '0',
    qtyReq: '',
    qtyApp: '0',
    qtyRequired: '',
  },
  {
    checkbox: false,
    deno: '10',
    stock: '5',
    supply: '4',
    qtySold: '4',
    closeBal: '2',
    qtyDue: '2',
    qtyReq: '',
    qtyApp: '5',
    qtyRequired: '',
  },
];
const ELEMENT_DATA7: ElementStIndentSto[] = [
  {
    checkbox: false,
    deno: '-',
    stock: '5',
    supply: '4',
    qtySold: '4',
    closeBal: '2',
    qtyDue: '2',
    qtyReq: '',
    qtyApp: '5',
    qtyRequired: '',
  }
];
const ELEMENT_DATA8: ElementStIndentSto[] = [
  {
    checkbox: false,
    deno: '20',
    stock: '5',
    supply: '4',
    qtySold: '4',
    closeBal: '2',
    qtyDue: '2',
    qtyReq: '',
    qtyApp: '5',
    qtyRequired: '',
  },
  {
    checkbox: false,
    deno: '50',
    stock: '4',
    supply: '3',
    qtySold: '2',
    closeBal: '1',
    qtyDue: '4',
    qtyReq: '',
    qtyApp: '4',
    qtyRequired: '',
  },
  {
    checkbox: false,
    deno: '100',
    stock: '5',
    supply: '4',
    qtySold: '4',
    closeBal: '2',
    qtyDue: '2',
    qtyReq: '',
    qtyApp: '5',
    qtyRequired: '',
  },
  {
    checkbox: false,
    deno: '500',
    stock: '0',
    supply: '0',
    qtySold: '0',
    closeBal: '0',
    qtyDue: '0',
    qtyReq: '',
    qtyApp: '0',
    qtyRequired: '',
  },
  {
    checkbox: false,
    deno: '1000',
    stock: '5',
    supply: '4',
    qtySold: '4',
    closeBal: '2',
    qtyDue: '2',
    qtyReq: '',
    qtyApp: '5',
    qtyRequired: '',
  },
  {
    checkbox: false,
    deno: '5000',
    stock: '4',
    supply: '3',
    qtySold: '2',
    closeBal: '1',
    qtyDue: '4',
    qtyReq: '',
    qtyApp: '4',
    qtyRequired: '',
  },
  {
    checkbox: false,
    deno: '10000',
    stock: '4',
    supply: '3',
    qtySold: '2',
    closeBal: '1',
    qtyDue: '4',
    qtyReq: '',
    qtyApp: '4',
    qtyRequired: '',
  },
  {
    checkbox: false,
    deno: '15000',
    stock: '0',
    supply: '0',
    qtySold: '0',
    closeBal: '0',
    qtyDue: '0',
    qtyReq: '',
    qtyApp: '0',
    qtyRequired: '',
  },
  {
    checkbox: false,
    deno: '20000',
    stock: '7',
    supply: '3',
    qtySold: '2',
    closeBal: '1',
    qtyDue: '6',
    qtyReq: '',
    qtyApp: '6',
    qtyRequired: '',
  },
  {
    checkbox: false,
    deno: '25000',
    stock: '3',
    supply: '3',
    qtySold: '2',
    closeBal: '1',
    qtyDue: '3',
    qtyReq: '',
    qtyApp: '4',
    qtyRequired: '',
  }
];
const ELEMENT_DATA9: ElementStIndentSto[] = [
  {
    checkbox: false,
    deno: '5',
    stock: '5',
    supply: '4',
    qtySold: '4',
    closeBal: '2',
    qtyDue: '2',
    qtyReq: '',
    qtyApp: '5',
    qtyRequired: '',
  }
];
const ELEMENT_DATA10: ElementStIndentSto[] = [
  {
    checkbox: false,
    deno: '1',
    stock: '5',
    supply: '4',
    qtySold: '4',
    closeBal: '2',
    qtyDue: '2',
    qtyReq: '',
    qtyApp: '5',
    qtyRequired: '',
  },
  {
    checkbox: false,
    deno: '5',
    stock: '0',
    supply: '0',
    qtySold: '0',
    closeBal: '0',
    qtyDue: '0',
    qtyReq: '',
    qtyApp: '0',
    qtyRequired: '',
  },
];
const ELEMENT_DATA11: ElementStIndentSto[] = [
  {
    checkbox: false,
    deno: '-',
    stock: '5',
    supply: '4',
    qtySold: '4',
    closeBal: '2',
    qtyDue: '2',
    qtyReq: '',
    qtyApp: '5',
    qtyRequired: '',
  }
];
const ELEMENT_DATA12: ElementStIndentSto[] = [
  {
    checkbox: false,
    deno: '5',
    stock: '7',
    supply: '3',
    qtySold: '2',
    closeBal: '1',
    qtyDue: '6',
    qtyReq: '',
    qtyApp: '6' ,
    qtyRequired: '',
  },
  {
    checkbox: false,
    deno: '10',
    stock: '5',
    supply: '4',
    qtySold: '4',
    closeBal: '2',
    qtyDue: '2',
    qtyReq: '',
    qtyApp: '5',
    qtyRequired: '',
  },
  {
    checkbox: false,
    deno: '20',
    stock: '0',
    supply: '0',
    qtySold: '0',
    closeBal: '0',
    qtyDue: '0',
    qtyReq: '',
    qtyApp: '0',
    qtyRequired: '',
  },
  {
    checkbox: false,
    deno: '50',
    stock: '7',
    supply: '3',
    qtySold: '2',
    closeBal: '1',
    qtyDue: '6',
    qtyReq: '',
    qtyApp: '6',
    qtyRequired: '',
  },
  {
    checkbox: false,
    deno: '100',
    stock: '0',
    supply: '0',
    qtySold: '0',
    closeBal: '0',
    qtyDue: '0',
    qtyReq: '',
    qtyApp: '0',
    qtyRequired: '',
  },
  {
    checkbox: false,
    deno: '500',
    stock: '8',
    supply: '5',
    qtySold: '4',
    closeBal: '1',
    qtyDue: '7',
    qtyReq: '',
    qtyApp: '7',
    qtyRequired: '',
  },
  {
    checkbox: false,
    deno: '1000',
    stock: '4',
    supply: '3',
    qtySold: '2',
    closeBal: '2',
    qtyDue: '3',
    qtyReq: '',
    qtyApp: '4',
    qtyRequired: '',
  }
];

// Final Table Sources
const ELEMENT_FINAL: ElementFinalStIndentSto[] = [
  {
    typeOfStamp: 'Agency License', deno: '-', stock: '5', supply: '4',
    qtySold: '4', closeBal: '2', qtyDue: '2', qtyReq: '4', qtyApp: '5', qtyRequired: '4',
  }
];
const ELEMENT_FINAL2: ElementFinalStIndentSto[] = [
  {
    typeOfStamp: 'Agreement', deno: '100', stock: '5', supply: '4', qtySold: '4',
    closeBal: '2', qtyDue: '2', qtyReq: '5', qtyApp: '5', qtyRequired: '3',
  }
];
const ELEMENT_FINAL3: ElementFinalStIndentSto[] = [
  {
    typeOfStamp: 'Court Fee Label', deno: '1', stock: '0', supply: '0', qtySold: '0',
    closeBal: '0', qtyDue: '0', qtyReq: '7', qtyApp: '0', qtyRequired: '6',
  },
  {
    typeOfStamp: 'Court Fee Label', deno: '2', stock: '4', supply: '4', qtySold: '3',
    closeBal: '1', qtyDue: '1', qtyReq: '8', qtyApp: '4', qtyRequired: '6',
  },
  {
    typeOfStamp: 'Court Fee Label', deno: '5', stock: '6', supply: '4', qtySold: '3',
    closeBal: '3', qtyDue: '0', qtyReq: '6', qtyApp: '2', qtyRequired: '5',
  },
  {
    typeOfStamp: 'Court Fee Label', deno: '10', stock: '0', supply: '0', qtySold: '0',
    closeBal: '0', qtyDue: '0', qtyReq: '6', qtyApp: '0', qtyRequired: '4',
  },
];
const ELEMENT_FINAL4: ElementFinalStIndentSto[] = [
  {
    typeOfStamp: 'Court Fee Paper', deno: '50', stock: '6', supply: '4', qtySold: '3',
    closeBal: '3', qtyDue: '0', qtyReq: '4', qtyApp: '2', qtyRequired: '',
  },
  {
    typeOfStamp: 'Court Fee Paper', deno: '60', stock: '0', supply: '0', qtySold: '0',
    closeBal: '0', qtyDue: '0', qtyReq: '4', qtyApp: '0', qtyRequired: '7',
  },
  {
    typeOfStamp: 'Court Fee Paper', deno: '100', stock: '6', supply: '4', qtySold: '3',
    closeBal: '3', qtyDue: '0', qtyReq: '4', qtyApp: '2', qtyRequired: '8',
  },
  {
    typeOfStamp: 'Court Fee Paper', deno: '200', stock: '0', supply: '0', qtySold: '0',
    closeBal: '0', qtyDue: '0', qtyReq: '0', qtyApp: '0', qtyRequired: '9',
  },
];
const ELEMENT_FINAL5: ElementFinalStIndentSto[] = [
  {
    typeOfStamp: 'Foreign bill', deno: '-', stock: '5', supply: '4', qtySold: '4',
    closeBal: '2', qtyDue: '2', qtyReq: '8', qtyApp: '5', qtyRequired: '5',
  }
];
const ELEMENT_FINAL6: ElementFinalStIndentSto[] = [
  {
    typeOfStamp: 'Hundi', deno: '1', stock: '0', supply: '0', qtySold: '0',
    closeBal: '0', qtyDue: '0', qtyReq: '4', qtyApp: '0', qtyRequired: '4',
  },
  {
    typeOfStamp: 'Hundi', deno: '10', stock: '5', supply: '4', qtySold: '4',
    closeBal: '2', qtyDue: '2', qtyReq: '4', qtyApp: '5', qtyRequired: '4',
  },
];
const ELEMENT_FINAL7: ElementFinalStIndentSto[] = [
  {
    typeOfStamp: 'Insurance', deno: '-', stock: '5', supply: '4', qtySold: '4',
    closeBal: '2', qtyDue: '2', qtyReq: '2', qtyApp: '5', qtyRequired: '7',
  }
];
const ELEMENT_FINAL8: ElementFinalStIndentSto[] = [
  {
    typeOfStamp: 'Non Judicial Paper', deno: '20', stock: '5', supply: '4', qtySold: '4',
    closeBal: '2', qtyDue: '2', qtyReq: '6', qtyApp: '5', qtyRequired: '7',
  },
  {
    typeOfStamp: 'Non Judicial Paper', deno: '50', stock: '4', supply: '3', qtySold: '2',
    closeBal: '1', qtyDue: '4', qtyReq: '6', qtyApp: '4', qtyRequired: '8',
  },
  {
    typeOfStamp: 'Non Judicial Paper', deno: '100', stock: '5', supply: '4', qtySold: '4',
    closeBal: '2', qtyDue: '2', qtyReq: '7', qtyApp: '5', qtyRequired: '9',
  },
  {
    typeOfStamp: 'Non Judicial Paper', deno: '500', stock: '0', supply: '0', qtySold: '0',
    closeBal: '0', qtyDue: '0', qtyReq: '8', qtyApp: '0', qtyRequired: '0',
  },
];
const ELEMENT_FINAL9: ElementFinalStIndentSto[] = [
  {
    typeOfStamp: 'Notary', deno: '5', stock: '5', supply: '4', qtySold: '4',
    closeBal: '2', qtyDue: '2', qtyReq: '3', qtyApp: '5', qtyRequired: '6',
  }
];
const ELEMENT_FINAL10: ElementFinalStIndentSto[] = [
  {
    typeOfStamp: 'Revenue', deno: '1', stock: '5', supply: '4', qtySold: '4',
    closeBal: '2', qtyDue: '2', qtyReq: '5', qtyApp: '5', qtyRequired: '5',
  },
  {
    typeOfStamp: 'Revenue', deno: '5', stock: '0', supply: '0', qtySold: '0',
    closeBal: '0', qtyDue: '0', qtyReq: '5', qtyApp: '0', qtyRequired: '5',
  },
];
const ELEMENT_FINAL11: ElementFinalStIndentSto[] = [
  {
    typeOfStamp: 'Share transfer', deno: '-', stock: '5', supply: '4', qtySold: '4',
    closeBal: '2', qtyDue: '2', qtyReq: '7', qtyApp: '5', qtyRequired: '4',
  }
];
const ELEMENT_FINAL12: ElementFinalStIndentSto[] = [
  {
    typeOfStamp: 'Special Adhesive', deno: '5', stock: '7', supply: '3', qtySold: '2',
    closeBal: '1', qtyDue: '6', qtyReq: '3', qtyApp: '6' , qtyRequired: '3',
  },
  {
    typeOfStamp: 'Special Adhesive', deno: '10', stock: '5', supply: '4', qtySold: '4',
    closeBal: '2', qtyDue: '2', qtyReq: '3', qtyApp: '5', qtyRequired: '3',
  },
  {
    typeOfStamp: 'Special Adhesive', deno: '20', stock: '0', supply: '0', qtySold: '0',
    closeBal: '0', qtyDue: '0', qtyReq: '3', qtyApp: '0', qtyRequired: '3',
  },
];

@Component({
  selector: 'app-sub-treasury-indent-preparation',
  templateUrl: './sub-treasury-indent-preparation.component.html',
  styleUrls: ['./sub-treasury-indent-preparation.component.css']
})
export class SubTreasuryIndentPreparationComponent implements OnInit {

// Entry Field Details
  indentType_List: CommonListing[] = [
    { value: '1', viewValue: 'Regular Indent'},
    { value: '2', viewValue: 'Mid-Term Indent'}
  ];

  subTre_List: CommonListing[] = [
    { value: '1', viewValue: 'Dhandhuka'},
    { value: '2', viewValue: 'Dholka'},
    { value: '2', viewValue: 'Sanad'},
    { value: '2', viewValue: 'Viramgam'},
  ]; stamp_List: CommonListing[] = [
    { value: '1', viewValue: 'Agency License'},
    { value: '2', viewValue: 'Agreement'},
    { value: '3', viewValue: 'Court Fee Label'},
    { value: '4', viewValue: 'Court Fee Paper'},
    { value: '5', viewValue: 'Foreign bill'},
    { value: '6', viewValue: 'Hundi'},
    { value: '7', viewValue: 'Insurance'},
    { value: '8', viewValue: 'Non Judicial Paper'},
    { value: '9', viewValue: 'Notary'},
    { value: '10', viewValue: 'Revenue'},
    { value: '11', viewValue: 'Share transfer'},
    { value: '12', viewValue: 'Special Adhesive'},
    ];

    // Agency License
    dataSource = new MatTableDataSource(ELEMENT_DATA);
    // Agreement
    dataSource2 = new MatTableDataSource(ELEMENT_DATA2);
    // Court Fee Label
    dataSource3 = new MatTableDataSource(ELEMENT_DATA3);
    // Court Fee Paper
    dataSource4 = new MatTableDataSource(ELEMENT_DATA4);
    // Foreign bill
    dataSource5 = new MatTableDataSource(ELEMENT_DATA5);
    // Hundi
    dataSource6 = new MatTableDataSource(ELEMENT_DATA6);
    // Insurance
    dataSource7 = new MatTableDataSource(ELEMENT_DATA7);
    // Non Judicial Paper
    dataSource8 = new MatTableDataSource(ELEMENT_DATA8);
    // Notary
    dataSource9 = new MatTableDataSource(ELEMENT_DATA9);
    // Revenue
    dataSource10 = new MatTableDataSource(ELEMENT_DATA10);
    // Share transfer
    dataSource11 = new MatTableDataSource(ELEMENT_DATA11);
    // Special Adhesive
    dataSource12 = new MatTableDataSource(ELEMENT_DATA12);
    // Final Tables
    dataSourceFinal1 = new MatTableDataSource(ELEMENT_FINAL);
    dataSourceFinal2 = new MatTableDataSource(ELEMENT_FINAL2);
    dataSourceFinal3 = new MatTableDataSource(ELEMENT_FINAL3);
    dataSourceFinal4 = new MatTableDataSource(ELEMENT_FINAL4);
    dataSourceFinal5 = new MatTableDataSource(ELEMENT_FINAL5);
    dataSourceFinal6 = new MatTableDataSource(ELEMENT_FINAL6);
    dataSourceFinal7 = new MatTableDataSource(ELEMENT_FINAL7);
    dataSourceFinal8 = new MatTableDataSource(ELEMENT_FINAL8);
    dataSourceFinal9 = new MatTableDataSource(ELEMENT_FINAL9);
    dataSourceFinal10 = new MatTableDataSource(ELEMENT_FINAL10);
    dataSourceFinal11 = new MatTableDataSource(ELEMENT_FINAL11);
    dataSourceFinal12 = new MatTableDataSource(ELEMENT_FINAL12);
    dataSourceFinalHeading = [];
    dataSourceNet = [];

    displayedColumns: string[] = ['position', 'checkbox', 'denomination', 'stock', 'unitVal',
     'supplyReceived', 'qtySold', 'closingBal', 'qtyDue',
    'qtyRequired', 'qtyApproved', 'remarks'];
    displayFinal: string[] = ['position', 'typeOfStamp', 'denomination', 'stock', 'unitVal',
     'supplyReceived', 'qtySold', 'closingBal', 'qtyDue',
    'qtyRequired', 'qtyApproved', 'remarks', 'action'];

  indentForCtrl: FormControl = new FormControl();
  indentTypeCtrl: FormControl = new FormControl();
  subTreOffCtrl: FormControl = new FormControl();
  stampCtrl: FormControl = new FormControl();
  errorMessages = stampProcessMessage;

  treasuryIndentForm: FormGroup;

  temp1Value = 'Treasury Office, Ahmedabad';
  temp2Value = 'Superintendent of Stamps Office, Gandhinagar';
  temp3Value = 'Treasury Office, Gandhinagar';
  date: any = new Date();
  intendDate = '04-Apr-2020';
  intendNumber = '51/00057/072019/23';
  lastIntendDate = '04-Apr-2020';
  dataSourceStamp: any;
  stampName: string;

  stampVal: string;

  // Agency License
  onAdd = false;
  // Agreement
  onAdd2 = false;
  // Court Fee Label
  onAdd3 = false;
  // Court Fee Paper
  onAdd4 = false;
  // Foreign bill
  onAdd5 = false;
  // Hundi
  onAdd6 = false;
  // Insurance
  onAdd7 = false;
  // Non Judicial Paper
  onAdd8 = false;
  // Notary
  onAdd9 = false;
  // Revenue
  onAdd10 = false;
  // Share transfer
  onAdd11 = false;
  // Special Adhesive
  onAdd12 = false;


  // Agency License
  onCheck = false;
  // Agreement
  onCheck2 = false;
  // Court Fee Label
  onCheck3 = false;
  // Court Fee Paper
  onCheck4 = false;
  // Foreign bill
  onCheck5 = false;
  // Hundi
  onCheck6 = false;
  // Insurance
  onCheck7 = false;
  // Non Judicial Paper
  onCheck8 = false;
  // Notary
  onCheck9 = false;
  // Revenue
  onCheck10 = false;
  // Share transfer
  onCheck11 = false;
  // Special Adhesive
  onCheck12 = false;
  showSubTre = false;
  directiveObject = new StampProcessingDirectives(this.router, this.dialog);

  constructor(private fb: FormBuilder,
    private router: Router,
    public dialog: MatDialog) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.treasuryIndentForm = this.fb.group({
      finYear: ['2019-2020', Validators.required],
      indentType: ['1', Validators.required],
      intDate: ['04-Apr-2020', Validators.required],
      indNumber: [''],
      lastIndent: ['04-Apr-2020', Validators.required],
      indentFor: ['', Validators.required],
      subTreOff: ['1', Validators.required],
      indentTo: ['Treasury Office, Gandhinagar', Validators.required],
      stamp: ['', Validators.required],
      fromDate: ['', Validators.required],
      toDate: ['', Validators.required],
      temp1: ['', Validators.required],
      temp2: ['', Validators.required],
      temp3: ['', Validators.required],
    });
  }

// Add Button Click
  whenAddClick() {
    this.stampVal = this.treasuryIndentForm.controls.stamp.value;

    if (this.stampVal === '1') {
      this.onAdd = true;
    } else if (this.stampVal === '2') {
      this.onAdd2 = true;
    } else if (this.stampVal === '3') {
      this.onAdd3 = true;
    } else if (this.stampVal === '4') {
      this.onAdd4 = true;
    } else if (this.stampVal === '5') {
      this.onAdd5 = true;
    } else if (this.stampVal === '6') {
      this.onAdd6 = true;
    } else if (this.stampVal === '7') {
      this.onAdd7 = true;
    } else if (this.stampVal === '8') {
      this.onAdd8 = true;
    } else if (this.stampVal === '9') {
      this.onAdd9 = true;
    } else if (this.stampVal === '10') {
      this.onAdd10 = true;
    } else if (this.stampVal === '11') {
      this.onAdd11 = true;
    } else if (this.stampVal === '12') {
      this.onAdd12 = true;
    }
  }

  whenEditClick() {
  this.router.navigate(['./stamp-processing/stamp-indent-preparation-sto-view']);
}
  onSelectSubTreList() {
    this.showSubTre = true;
  }

  gotoListing() {
    this.router.navigate(['./stamp-processing/stamp-indent-preparation-sto-list']);
  }

// Check Box Selection
  checkboxValueChange(item) {
    this.stampVal = this.treasuryIndentForm.controls.stamp.value;

    if (this.stampVal === '1') {
      this.onCheck = true;
    } else if (this.stampVal === '2') {
      this.onCheck2 = true;
    } else if (this.stampVal === '3') {
      this.onCheck3 = true;
    } else if (this.stampVal === '4') {
      this.onCheck4 = true;
    } else if (this.stampVal === '5') {
      this.onCheck5 = true;
    } else if (this.stampVal === '6') {
      this.onCheck6 = true;
    } else if (this.stampVal === '7') {
      this.onCheck7 = true;
    } else if (this.stampVal === '8') {
      this.onCheck8 = true;
    } else if (this.stampVal === '9') {
      this.onCheck9 = true;
    } else if (this.stampVal === '10') {
      this.onCheck10 = true;
    } else if (this.stampVal === '11') {
      this.onCheck11 = true;
    } else if (this.stampVal === '12') {
      this.onCheck12 = true;
    }
  }
  // Change data source on stamp value change
  changeStamp() {
    const stampNumber = this.treasuryIndentForm.controls.stamp.value;
    if (stampNumber === '1') {
      this.stampName = 'Agency License';
      this.dataSourceStamp = this.dataSource;
    } else if (stampNumber === '2') {
      this.stampName = 'Agreement';
      this.dataSourceStamp = this.dataSource2;
    } else if (stampNumber === '3') {
      this.stampName = 'Court Fee Label';
      this.dataSourceStamp = this .dataSource3;
    } else if (stampNumber === '4') {
      this.stampName = 'Court Fee Paper';
      this.dataSourceStamp = this.dataSource4;
    } else if (stampNumber === '5') {
      this.stampName = 'Foreign bill';
      this.dataSourceStamp = this.dataSource5;
    } else if (stampNumber === '6') {
      this.stampName = 'Hundi';
      this.dataSourceStamp = this.dataSource6;
    } else if (stampNumber === '7') {
      this.stampName = 'Insurance';
      this.dataSourceStamp = this.dataSource7;
    } else if (stampNumber === '8') {
      this.stampName = 'Non Judicial Paper';
      this.dataSourceStamp = this.dataSource8;
    } else if (stampNumber === '9') {
      this.stampName = 'Notary';
      this.dataSourceStamp = this.dataSource9;
    } else if (stampNumber === '10') {
      this.stampName = 'Revenue';
      this.dataSourceStamp = this.dataSource10;
    } else if (stampNumber === '11') {
      this.stampName = 'Share transfer';
      this.dataSourceStamp = this.dataSource11;
    } else if (stampNumber === '12') {
      this.stampName = 'Special Adhesive';
      this.dataSourceStamp = this.dataSource12;
    }
  }

  // Delete from Listing Table Stamp wise
  deleteFinalTab1(index) {
    this.dataSourceFinal1.data.splice(index, 1);
    this.dataSourceFinal1 = new MatTableDataSource(this.dataSourceFinal1.data);
  }
  deleteFinalTab2(index) {
    this.dataSourceFinal2.data.splice(index, 1);
    this.dataSourceFinal2 = new MatTableDataSource(this.dataSourceFinal2.data);
  }
  deleteFinalTab3(index) {
    this.dataSourceFinal3.data.splice(index, 1);
    this.dataSourceFinal3 = new MatTableDataSource(this.dataSourceFinal3.data);
  }
  deleteFinalTab4(index) {
    this.dataSourceFinal4.data.splice(index, 1);
    this.dataSourceFinal4 = new MatTableDataSource(this.dataSourceFinal4.data);
  }
  deleteFinalTab5(index) {
    this.dataSourceFinal5.data.splice(index, 1);
    this.dataSourceFinal5 = new MatTableDataSource(this.dataSourceFinal5.data);
  }
  deleteFinalTab6(index) {
    this.dataSourceFinal6.data.splice(index, 1);
    this.dataSourceFinal6 = new MatTableDataSource(this.dataSourceFinal6.data);
  }
  deleteFinalTab7(index) {
    this.dataSourceFinal7.data.splice(index, 1);
    this.dataSourceFinal7 = new MatTableDataSource(this.dataSourceFinal7.data);
  }
  deleteFinalTab8(index) {
    this.dataSourceFinal8.data.splice(index, 1);
    this.dataSourceFinal8 = new MatTableDataSource(this.dataSourceFinal8.data);
  }
  deleteFinalTab9(index) {
    this.dataSourceFinal9.data.splice(index, 1);
    this.dataSourceFinal9 = new MatTableDataSource(this.dataSourceFinal9.data);
  }
  deleteFinalTab10(index) {
    this.dataSourceFinal10.data.splice(index, 1);
    this.dataSourceFinal10 = new MatTableDataSource(this.dataSourceFinal10.data);
  }
  deleteFinalTab11(index) {
    this.dataSourceFinal11.data.splice(index, 1);
    this.dataSourceFinal11 = new MatTableDataSource(this.dataSourceFinal11.data);
  }
  deleteFinalTab12(index) {
    this.dataSourceFinal12.data.splice(index, 1);
    this.dataSourceFinal12 = new MatTableDataSource(this.dataSourceFinal12.data);
  }

  // calculation of values from tables
  calcstockNet(): any {
    let sum = 0;
    this.onAdd ? this.dataSourceFinal1.data.forEach((element) => {sum = sum + Number(element.stock); }) : sum = sum;
    this.onAdd2 ? this.dataSourceFinal2.data.forEach((element) => {sum = sum + Number(element.stock); }) : sum = sum;
    this.onAdd3 ? this.dataSourceFinal3.data.forEach((element) => {sum = sum + Number(element.stock); }) : sum = sum;
    this.onAdd4 ? this.dataSourceFinal4.data.forEach((element) => {sum = sum + Number(element.stock); }) : sum = sum;
    this.onAdd5 ? this.dataSourceFinal5.data.forEach((element) => {sum = sum + Number(element.stock); }) : sum = sum;
    this.onAdd6 ? this.dataSourceFinal6.data.forEach((element) => {sum = sum + Number(element.stock); }) : sum = sum;
    this.onAdd7 ? this.dataSourceFinal7.data.forEach((element) => {sum = sum + Number(element.stock); }) : sum = sum;
    this.onAdd8 ? this.dataSourceFinal8.data.forEach((element) => {sum = sum + Number(element.stock); }) : sum = sum;
    this.onAdd9 ? this.dataSourceFinal9.data.forEach((element) => {sum = sum + Number(element.stock); }) : sum = sum;
    this.onAdd10 ? this.dataSourceFinal10.data.forEach((element) => {sum = sum + Number(element.stock); }) : sum = sum;
    this.onAdd11 ? this.dataSourceFinal11.data.forEach((element) => {sum = sum + Number(element.stock); }) : sum = sum;
    this.onAdd12 ? this.dataSourceFinal12.data.forEach((element) => {sum = sum + Number(element.stock); }) : sum = sum;

    // return sum !== 0 ? sum : '';
    return sum;
  }
  calcsupplyReceivedNet(): any {
    let sum = 0;
    this.onAdd ? this.dataSourceFinal1.data.forEach((element) => {sum = sum + Number(element.supply); }) : sum = sum;
    this.onAdd2 ? this.dataSourceFinal2.data.forEach((element) => {sum = sum + Number(element.supply); }) : sum = sum;
    this.onAdd3 ? this.dataSourceFinal3.data.forEach((element) => {sum = sum + Number(element.supply); }) : sum = sum;
    this.onAdd4 ? this.dataSourceFinal4.data.forEach((element) => {sum = sum + Number(element.supply); }) : sum = sum;
    this.onAdd5 ? this.dataSourceFinal5.data.forEach((element) => {sum = sum + Number(element.supply); }) : sum = sum;
    this.onAdd6 ? this.dataSourceFinal6.data.forEach((element) => {sum = sum + Number(element.supply); }) : sum = sum;
    this.onAdd7 ? this.dataSourceFinal7.data.forEach((element) => {sum = sum + Number(element.supply); }) : sum = sum;
    this.onAdd8 ? this.dataSourceFinal8.data.forEach((element) => {sum = sum + Number(element.supply); }) : sum = sum;
    this.onAdd9 ? this.dataSourceFinal9.data.forEach((element) => {sum = sum + Number(element.supply); }) : sum = sum;
    this.onAdd10 ? this.dataSourceFinal10.data.forEach((element) => {sum = sum + Number(element.supply); }) : sum = sum;
    this.onAdd11 ? this.dataSourceFinal11.data.forEach((element) => {sum = sum + Number(element.supply); }) : sum = sum;
    this.onAdd12 ? this.dataSourceFinal12.data.forEach((element) => {sum = sum + Number(element.supply); }) : sum = sum;

    // return sum !== 0 ? sum : '';
    return sum;
  }
  calcqtySoldNet(): any {
    let sum = 0;
    this.onAdd ? this.dataSourceFinal1.data.forEach((element) => {sum = sum + Number(element.qtySold); }) : sum = sum;
    this.onAdd2 ? this.dataSourceFinal2.data.forEach((element) => {sum = sum + Number(element.qtySold); }) : sum = sum;
    this.onAdd3 ? this.dataSourceFinal3.data.forEach((element) => {sum = sum + Number(element.qtySold); }) : sum = sum;
    this.onAdd4 ? this.dataSourceFinal4.data.forEach((element) => {sum = sum + Number(element.qtySold); }) : sum = sum;
    this.onAdd5 ? this.dataSourceFinal5.data.forEach((element) => {sum = sum + Number(element.qtySold); }) : sum = sum;
    this.onAdd6 ? this.dataSourceFinal6.data.forEach((element) => {sum = sum + Number(element.qtySold); }) : sum = sum;
    this.onAdd7 ? this.dataSourceFinal7.data.forEach((element) => {sum = sum + Number(element.qtySold); }) : sum = sum;
    this.onAdd8 ? this.dataSourceFinal8.data.forEach((element) => {sum = sum + Number(element.qtySold); }) : sum = sum;
    this.onAdd9 ? this.dataSourceFinal9.data.forEach((element) => {sum = sum + Number(element.qtySold); }) : sum = sum;
    this.onAdd10 ? this.dataSourceFinal10.data.forEach((element) => {sum = sum + Number(element.qtySold); }) : sum = sum;
    this.onAdd11 ? this.dataSourceFinal11.data.forEach((element) => {sum = sum + Number(element.qtySold); }) : sum = sum;
    this.onAdd12 ? this.dataSourceFinal12.data.forEach((element) => {sum = sum + Number(element.qtySold); }) : sum = sum;

    // return sum !== 0 ? sum : '';
    return sum;
  }
  calcclosingBalNet(): any {
    let sum = 0;
    this.onAdd ? this.dataSourceFinal1.data.forEach((element) => {sum = sum + Number(element.closeBal); }) : sum = sum;
    this.onAdd2 ? this.dataSourceFinal2.data.forEach((element) => {sum = sum + Number(element.closeBal); }) : sum = sum;
    this.onAdd3 ? this.dataSourceFinal3.data.forEach((element) => {sum = sum + Number(element.closeBal); }) : sum = sum;
    this.onAdd4 ? this.dataSourceFinal4.data.forEach((element) => {sum = sum + Number(element.closeBal); }) : sum = sum;
    this.onAdd5 ? this.dataSourceFinal5.data.forEach((element) => {sum = sum + Number(element.closeBal); }) : sum = sum;
    this.onAdd6 ? this.dataSourceFinal6.data.forEach((element) => {sum = sum + Number(element.closeBal); }) : sum = sum;
    this.onAdd7 ? this.dataSourceFinal7.data.forEach((element) => {sum = sum + Number(element.closeBal); }) : sum = sum;
    this.onAdd8 ? this.dataSourceFinal8.data.forEach((element) => {sum = sum + Number(element.closeBal); }) : sum = sum;
    this.onAdd9 ? this.dataSourceFinal9.data.forEach((element) => {sum = sum + Number(element.closeBal); }) : sum = sum;
    this.onAdd10 ? this.dataSourceFinal10.data.forEach((element) => {sum = sum + Number(element.closeBal); }) : sum = sum;
    this.onAdd11 ? this.dataSourceFinal11.data.forEach((element) => {sum = sum + Number(element.closeBal); }) : sum = sum;
    this.onAdd12 ? this.dataSourceFinal12.data.forEach((element) => {sum = sum + Number(element.closeBal); }) : sum = sum;

    // return sum !== 0 ? sum : '';
    return sum;
  }
  calcqtyDueNet(): any {
    let sum = 0;
    this.onAdd ? this.dataSourceFinal1.data.forEach((element) => {sum = sum + Number(element.qtyDue); }) : sum = sum;
    this.onAdd2 ? this.dataSourceFinal2.data.forEach((element) => {sum = sum + Number(element.qtyDue); }) : sum = sum;
    this.onAdd3 ? this.dataSourceFinal3.data.forEach((element) => {sum = sum + Number(element.qtyDue); }) : sum = sum;
    this.onAdd4 ? this.dataSourceFinal4.data.forEach((element) => {sum = sum + Number(element.qtyDue); }) : sum = sum;
    this.onAdd5 ? this.dataSourceFinal5.data.forEach((element) => {sum = sum + Number(element.qtyDue); }) : sum = sum;
    this.onAdd6 ? this.dataSourceFinal6.data.forEach((element) => {sum = sum + Number(element.qtyDue); }) : sum = sum;
    this.onAdd7 ? this.dataSourceFinal7.data.forEach((element) => {sum = sum + Number(element.qtyDue); }) : sum = sum;
    this.onAdd8 ? this.dataSourceFinal8.data.forEach((element) => {sum = sum + Number(element.qtyDue); }) : sum = sum;
    this.onAdd9 ? this.dataSourceFinal9.data.forEach((element) => {sum = sum + Number(element.qtyDue); }) : sum = sum;
    this.onAdd10 ? this.dataSourceFinal10.data.forEach((element) => {sum = sum + Number(element.qtyDue); }) : sum = sum;
    this.onAdd11 ? this.dataSourceFinal11.data.forEach((element) => {sum = sum + Number(element.qtyDue); }) : sum = sum;
    this.onAdd12 ? this.dataSourceFinal12.data.forEach((element) => {sum = sum + Number(element.qtyDue); }) : sum = sum;

    // return sum !== 0 ? sum : '';
    return sum;
  }
  calcqtyApprovedNet(): any {
    let sum = 0;
    this.onAdd ? this.dataSourceFinal1.data.forEach((element) => {sum = sum + Number(element.qtyApp); }) : sum = sum;
    this.onAdd2 ? this.dataSourceFinal2.data.forEach((element) => {sum = sum + Number(element.qtyApp); }) : sum = sum;
    this.onAdd3 ? this.dataSourceFinal3.data.forEach((element) => {sum = sum + Number(element.qtyApp); }) : sum = sum;
    this.onAdd4 ? this.dataSourceFinal4.data.forEach((element) => {sum = sum + Number(element.qtyApp); }) : sum = sum;
    this.onAdd5 ? this.dataSourceFinal5.data.forEach((element) => {sum = sum + Number(element.qtyApp); }) : sum = sum;
    this.onAdd6 ? this.dataSourceFinal6.data.forEach((element) => {sum = sum + Number(element.qtyApp); }) : sum = sum;
    this.onAdd7 ? this.dataSourceFinal7.data.forEach((element) => {sum = sum + Number(element.qtyApp); }) : sum = sum;
    this.onAdd8 ? this.dataSourceFinal8.data.forEach((element) => {sum = sum + Number(element.qtyApp); }) : sum = sum;
    this.onAdd9 ? this.dataSourceFinal9.data.forEach((element) => {sum = sum + Number(element.qtyApp); }) : sum = sum;
    this.onAdd10 ? this.dataSourceFinal10.data.forEach((element) => {sum = sum + Number(element.qtyApp); }) : sum = sum;
    this.onAdd11 ? this.dataSourceFinal11.data.forEach((element) => {sum = sum + Number(element.qtyApp); }) : sum = sum;
    this.onAdd12 ? this.dataSourceFinal12.data.forEach((element) => {sum = sum + Number(element.qtyApp); }) : sum = sum;

    // return sum !== 0 ? sum : '';
    return sum;
  }
  calcQtyReqNet(): any {
    let sum = 0;
    this.onAdd ? this.dataSourceFinal1.data.forEach((element) => {sum = sum + Number(element.qtyRequired); }) : sum = sum;
    this.onAdd2 ? this.dataSourceFinal2.data.forEach((element) => {sum = sum + Number(element.qtyRequired); }) : sum = sum;
    this.onAdd3 ? this.dataSourceFinal3.data.forEach((element) => {sum = sum + Number(element.qtyRequired); }) : sum = sum;
    this.onAdd4 ? this.dataSourceFinal4.data.forEach((element) => {sum = sum + Number(element.qtyRequired); }) : sum = sum;
    this.onAdd5 ? this.dataSourceFinal5.data.forEach((element) => {sum = sum + Number(element.qtyRequired); }) : sum = sum;
    this.onAdd6 ? this.dataSourceFinal6.data.forEach((element) => {sum = sum + Number(element.qtyRequired); }) : sum = sum;
    this.onAdd7 ? this.dataSourceFinal7.data.forEach((element) => {sum = sum + Number(element.qtyRequired); }) : sum = sum;
    this.onAdd8 ? this.dataSourceFinal8.data.forEach((element) => {sum = sum + Number(element.qtyRequired); }) : sum = sum;
    this.onAdd9 ? this.dataSourceFinal9.data.forEach((element) => {sum = sum + Number(element.qtyRequired); }) : sum = sum;
    this.onAdd10 ? this.dataSourceFinal10.data.forEach((element) => {sum = sum + Number(element.qtyRequired); }) : sum = sum;
    this.onAdd11 ? this.dataSourceFinal11.data.forEach((element) => {sum = sum + Number(element.qtyRequired); }) : sum = sum;
    this.onAdd12 ? this.dataSourceFinal12.data.forEach((element) => {sum = sum + Number(element.qtyRequired); }) : sum = sum;

    // return sum !== 0 ? sum : '';
    return sum;
  }
//   Agency License
  stock1(): any {
    let sum = 0;
    this.dataSourceFinal1.data.forEach((element) => {sum = sum + Number(element.stock); });

    return sum !== 0 ? sum : '';
  }
  supplyReceived1(): any {
    let sum = 0;
    this.dataSourceFinal1.data.forEach((element) => {sum = sum + Number(element.supply); });

    return sum !== 0 ? sum : '';
  }
  qtySold1(): any {
    let sum = 0;
    this.dataSourceFinal1.data.forEach((element) => {sum = sum + Number(element.qtySold); });

    return sum !== 0 ? sum : '';
  }
  closingBal1(): any {
    let sum = 0;
    this.dataSourceFinal1.data.forEach((element) => {sum = sum + Number(element.closeBal); });

    return sum !== 0 ? sum : '';
  }
  qtyDue1(): any {
    let sum = 0;
    this.dataSourceFinal1.data.forEach((element) => {sum = sum + Number(element.qtyDue); });

    return sum !== 0 ? sum : '';
  }
  qtyApproved1(): any {
    let sum = 0;
    this.dataSourceFinal1.data.forEach((element) => {sum = sum + Number(element.qtyApp); });

    return sum !== 0 ? sum : '';
  }
  calcQtyReq1(): any {
    let sum = 0;
    this.dataSourceFinal1.data.forEach((element) => {sum = sum + Number(element.qtyRequired); });

    return sum !== 0 ? sum : '';
  }
// Agreement
  stock2(): any {
    let sum = 0;
    this.dataSourceFinal2.data.forEach((element) => {sum = sum + Number(element.stock); });

    return sum !== 0 ? sum : '';
  }
  supplyReceived2(): any {
    let sum = 0;
    this.dataSourceFinal2.data.forEach((element) => {sum = sum + Number(element.supply); });

    return sum !== 0 ? sum : '';
  }
  qtySold2(): any {
    let sum = 0;
    this.dataSourceFinal2.data.forEach((element) => {sum = sum + Number(element.qtySold); });

    return sum !== 0 ? sum : '';
  }
  closingBal2(): any {
    let sum = 0;
    this.dataSourceFinal2.data.forEach((element) => {sum = sum + Number(element.closeBal); });

    return sum !== 0 ? sum : '';
  }
  qtyDue2(): any {
    let sum = 0;
    this.dataSourceFinal2.data.forEach((element) => {sum = sum + Number(element.qtyDue); });

    return sum !== 0 ? sum : '';
  }
  qtyApproved2(): any {
    let sum = 0;
    this.dataSourceFinal2.data.forEach((element) => {sum = sum + Number(element.qtyApp); });

    return sum !== 0 ? sum : '';
  }
  calcQtyReq2(): any {
    let sum = 0;
    this.dataSourceFinal2.data.forEach((element) => {sum = sum + Number(element.qtyRequired); });

    return sum !== 0 ? sum : '';
  }
  // Court Fee Label
  stock3(): any {
    let sum = 0;
    this.dataSourceFinal3.data.forEach((element) => {sum = sum + Number(element.stock); });

    return sum !== 0 ? sum : '';
  }
  supplyReceived3(): any {
    let sum = 0;
    this.dataSourceFinal3.data.forEach((element) => {sum = sum + Number(element.supply); });

    return sum !== 0 ? sum : '';
  }
  qtySold3(): any {
    let sum = 0;
    this.dataSourceFinal3.data.forEach((element) => {sum = sum + Number(element.qtySold); });

    return sum !== 0 ? sum : '';
  }
  closingBal3(): any {
    let sum = 0;
    this.dataSourceFinal3.data.forEach((element) => {sum = sum + Number(element.closeBal); });

    return sum !== 0 ? sum : '';
  }
  qtyDue3(): any {
    let sum = 0;
    this.dataSourceFinal3.data.forEach((element) => {sum = sum + Number(element.qtyDue); });

    return sum !== 0 ? sum : '';
  }
  qtyApproved3(): any {
    let sum = 0;
    this.dataSourceFinal3.data.forEach((element) => {sum = sum + Number(element.qtyApp); });

    return sum !== 0 ? sum : '';
  }
  calcQtyReq3(): any {
    let sum = 0;
    this.dataSourceFinal3.data.forEach((element) => {sum = sum + Number(element.qtyRequired); });

    return sum !== 0 ? sum : '';
  }
  // Court Fee Paper
  stock4(): any {
    let sum = 0;
    this.dataSourceFinal4.data.forEach((element) => {sum = sum + Number(element.stock); });

    return sum !== 0 ? sum : '';
  }
  supplyReceived4(): any {
    let sum = 0;
    this.dataSourceFinal4.data.forEach((element) => {sum = sum + Number(element.supply); });

    return sum !== 0 ? sum : '';
  }
  qtySold4(): any {
    let sum = 0;
    this.dataSourceFinal4.data.forEach((element) => {sum = sum + Number(element.qtySold); });

    return sum !== 0 ? sum : '';
  }
  closingBal4(): any {
    let sum = 0;
    this.dataSourceFinal4.data.forEach((element) => {sum = sum + Number(element.closeBal); });

    return sum !== 0 ? sum : '';
  }
  qtyDue4(): any {
    let sum = 0;
    this.dataSourceFinal4.data.forEach((element) => {sum = sum + Number(element.qtyDue); });

    return sum !== 0 ? sum : '';
  }
  qtyApproved4(): any {
    let sum = 0;
    this.dataSourceFinal4.data.forEach((element) => {sum = sum + Number(element.qtyApp); });

    return sum !== 0 ? sum : '';
  }
  calcQtyReq4(): any {
    let sum = 0;
    this.dataSourceFinal4.data.forEach((element) => {sum = sum + Number(element.qtyRequired); });

    return sum !== 0 ? sum : '';
  }
  // Foreign bill
  stock5(): any {
    let sum = 0;
    this.dataSourceFinal5.data.forEach((element) => {sum = sum + Number(element.stock); });

    return sum !== 0 ? sum : '';
  }
  supplyReceived5(): any {
    let sum = 0;
    this.dataSourceFinal5.data.forEach((element) => {sum = sum + Number(element.supply); });

    return sum !== 0 ? sum : '';
  }
  qtySold5(): any {
    let sum = 0;
    this.dataSourceFinal5.data.forEach((element) => {sum = sum + Number(element.qtySold); });

    return sum !== 0 ? sum : '';
  }
  closingBal5(): any {
    let sum = 0;
    this.dataSourceFinal5.data.forEach((element) => {sum = sum + Number(element.closeBal); });

    return sum !== 0 ? sum : '';
  }
  qtyDue5(): any {
    let sum = 0;
    this.dataSourceFinal5.data.forEach((element) => {sum = sum + Number(element.qtyDue); });

    return sum !== 0 ? sum : '';
  }
  qtyApproved5(): any {
    let sum = 0;
    this.dataSourceFinal5.data.forEach((element) => {sum = sum + Number(element.qtyApp); });

    return sum !== 0 ? sum : '';
  }
  calcQtyReq5(): any {
    let sum = 0;
    this.dataSourceFinal5.data.forEach((element) => {sum = sum + Number(element.qtyRequired); });

    return sum !== 0 ? sum : '';
  }
  // Hundi
  stock6(): any {
    let sum = 0;
    this.dataSourceFinal6.data.forEach((element) => {sum = sum + Number(element.stock); });

    return sum !== 0 ? sum : '';
  }
  supplyReceived6(): any {
    let sum = 0;
    this.dataSourceFinal6.data.forEach((element) => {sum = sum + Number(element.supply); });

    return sum !== 0 ? sum : '';
  }
  qtySold6(): any {
    let sum = 0;
    this.dataSourceFinal6.data.forEach((element) => {sum = sum + Number(element.qtySold); });

    return sum !== 0 ? sum : '';
  }
  closingBal6(): any {
    let sum = 0;
    this.dataSourceFinal6.data.forEach((element) => {sum = sum + Number(element.closeBal); });

    return sum !== 0 ? sum : '';
  }
  qtyDue6(): any {
    let sum = 0;
    this.dataSourceFinal6.data.forEach((element) => {sum = sum + Number(element.qtyDue); });

    return sum !== 0 ? sum : '';
  }
  qtyApproved6(): any {
    let sum = 0;
    this.dataSourceFinal6.data.forEach((element) => {sum = sum + Number(element.qtyApp); });

    return sum !== 0 ? sum : '';
  }
  calcQtyReq6(): any {
    let sum = 0;
    this.dataSourceFinal6.data.forEach((element) => {sum = sum + Number(element.qtyRequired); });

    return sum !== 0 ? sum : '';
  }
  // Insurance
  stock7(): any {
    let sum = 0;
    this.dataSourceFinal7.data.forEach((element) => {sum = sum + Number(element.stock); });

    return sum !== 0 ? sum : '';
  }
  supplyReceived7(): any {
    let sum = 0;
    this.dataSourceFinal7.data.forEach((element) => {sum = sum + Number(element.supply); });

    return sum !== 0 ? sum : '';
  }
  qtySold7(): any {
    let sum = 0;
    this.dataSourceFinal7.data.forEach((element) => {sum = sum + Number(element.qtySold); });

    return sum !== 0 ? sum : '';
  }
  closingBal7(): any {
    let sum = 0;
    this.dataSourceFinal7.data.forEach((element) => {sum = sum + Number(element.closeBal); });

    return sum !== 0 ? sum : '';
  }
  qtyDue7(): any {
    let sum = 0;
    this.dataSourceFinal7.data.forEach((element) => {sum = sum + Number(element.qtyDue); });

    return sum !== 0 ? sum : '';
  }
  qtyApproved7(): any {
    let sum = 0;
    this.dataSourceFinal7.data.forEach((element) => {sum = sum + Number(element.qtyApp); });

    return sum !== 0 ? sum : '';
  }
  calcQtyReq7(): any {
    let sum = 0;
    this.dataSourceFinal7.data.forEach((element) => {sum = sum + Number(element.qtyRequired); });

    return sum !== 0 ? sum : '';
  }
  // Non Judicial Paper
  stock8(): any {
    let sum = 0;
    this.dataSourceFinal8.data.forEach((element) => {sum = sum + Number(element.stock); });

    return sum !== 0 ? sum : '';
  }
  supplyReceived8(): any {
    let sum = 0;
    this.dataSourceFinal8.data.forEach((element) => {sum = sum + Number(element.supply); });

    return sum !== 0 ? sum : '';
  }
  qtySold8(): any {
    let sum = 0;
    this.dataSourceFinal8.data.forEach((element) => {sum = sum + Number(element.qtySold); });

    return sum !== 0 ? sum : '';
  }
  closingBal8(): any {
    let sum = 0;
    this.dataSourceFinal8.data.forEach((element) => {sum = sum + Number(element.closeBal); });

    return sum !== 0 ? sum : '';
  }
  qtyDue8(): any {
    let sum = 0;
    this.dataSourceFinal8.data.forEach((element) => {sum = sum + Number(element.qtyDue); });

    return sum !== 0 ? sum : '';
  }
  qtyApproved8(): any {
    let sum = 0;
    this.dataSourceFinal8.data.forEach((element) => {sum = sum + Number(element.qtyApp); });

    return sum !== 0 ? sum : '';
  }
  calcQtyReq8(): any {
    let sum = 0;
    this.dataSourceFinal8.data.forEach((element) => {sum = sum + Number(element.qtyRequired); });

    return sum !== 0 ? sum : '';
  }
  // Notary
  stock9(): any {
    let sum = 0;
    this.dataSourceFinal9.data.forEach((element) => {sum = sum + Number(element.stock); });

    return sum !== 0 ? sum : '';
  }
  supplyReceived9(): any {
    let sum = 0;
    this.dataSourceFinal9.data.forEach((element) => {sum = sum + Number(element.supply); });

    return sum !== 0 ? sum : '';
  }
  qtySold9(): any {
    let sum = 0;
    this.dataSourceFinal9.data.forEach((element) => {sum = sum + Number(element.qtySold); });

    return sum !== 0 ? sum : '';
  }
  closingBal9(): any {
    let sum = 0;
    this.dataSourceFinal9.data.forEach((element) => {sum = sum + Number(element.closeBal); });

    return sum !== 0 ? sum : '';
  }
  qtyDue9(): any {
    let sum = 0;
    this.dataSourceFinal9.data.forEach((element) => {sum = sum + Number(element.qtyDue); });

    return sum !== 0 ? sum : '';
  }
  qtyApproved9(): any {
    let sum = 0;
    this.dataSourceFinal9.data.forEach((element) => {sum = sum + Number(element.qtyApp); });

    return sum !== 0 ? sum : '';
  }
  calcQtyReq9(): any {
    let sum = 0;
    this.dataSourceFinal9.data.forEach((element) => {sum = sum + Number(element.qtyRequired); });

    return sum !== 0 ? sum : '';
  }
  // Revenue
  stock10(): any {
    let sum = 0;
    this.dataSourceFinal10.data.forEach((element) => {sum = sum + Number(element.stock); });

    return sum !== 0 ? sum : '';
  }
  supplyReceived10(): any {
    let sum = 0;
    this.dataSourceFinal10.data.forEach((element) => {sum = sum + Number(element.supply); });

    return sum !== 0 ? sum : '';
  }
  qtySold10(): any {
    let sum = 0;
    this.dataSourceFinal10.data.forEach((element) => {sum = sum + Number(element.qtySold); });

    return sum !== 0 ? sum : '';
  }
  closingBal10(): any {
    let sum = 0;
    this.dataSourceFinal10.data.forEach((element) => {sum = sum + Number(element.closeBal); });

    return sum !== 0 ? sum : '';
  }
  qtyDue10(): any {
    let sum = 0;
    this.dataSourceFinal10.data.forEach((element) => {sum = sum + Number(element.qtyDue); });

    return sum !== 0 ? sum : '';
  }
  qtyApproved10(): any {
    let sum = 0;
    this.dataSourceFinal10.data.forEach((element) => {sum = sum + Number(element.qtyApp); });

    return sum !== 0 ? sum : '';
  }
  calcQtyReq10(): any {
    let sum = 0;
    this.dataSourceFinal10.data.forEach((element) => {sum = sum + Number(element.qtyRequired); });

    return sum !== 0 ? sum : '';
  }
  // Share transfer
  stock11(): any {
    let sum = 0;
    this.dataSourceFinal11.data.forEach((element) => {sum = sum + Number(element.stock); });

    return sum !== 0 ? sum : '';
  }
  supplyReceived11(): any {
    let sum = 0;
    this.dataSourceFinal11.data.forEach((element) => {sum = sum + Number(element.supply); });

    return sum !== 0 ? sum : '';
  }
  qtySold11(): any {
    let sum = 0;
    this.dataSourceFinal11.data.forEach((element) => {sum = sum + Number(element.qtySold); });

    return sum !== 0 ? sum : '';
  }
  closingBal11(): any {
    let sum = 0;
    this.dataSourceFinal11.data.forEach((element) => {sum = sum + Number(element.closeBal); });

    return sum !== 0 ? sum : '';
  }
  qtyDue11(): any {
    let sum = 0;
    this.dataSourceFinal11.data.forEach((element) => {sum = sum + Number(element.qtyDue); });

    return sum !== 0 ? sum : '';
  }
  qtyApproved11(): any {
    let sum = 0;
    this.dataSourceFinal11.data.forEach((element) => {sum = sum + Number(element.qtyApp); });

    return sum !== 0 ? sum : '';
  }
  calcQtyReq11(): any {
    let sum = 0;
    this.dataSourceFinal11.data.forEach((element) => {sum = sum + Number(element.qtyRequired); });

    return sum !== 0 ? sum : '';
  }
  // Special Adhesive
  stock12(): any {
    let sum = 0;
    this.dataSourceFinal12.data.forEach((element) => {sum = sum + Number(element.stock); });

    return sum !== 0 ? sum : '';
  }
  supplyReceived12(): any {
    let sum = 0;
    this.dataSourceFinal12.data.forEach((element) => {sum = sum + Number(element.supply); });

    return sum !== 0 ? sum : '';
  }
  qtySold12(): any {
    let sum = 0;
    this.dataSourceFinal12.data.forEach((element) => {sum = sum + Number(element.qtySold); });

    return sum !== 0 ? sum : '';
  }
  closingBal12(): any {
    let sum = 0;
    this.dataSourceFinal12.data.forEach((element) => {sum = sum + Number(element.closeBal); });

    return sum !== 0 ? sum : '';
  }
  qtyDue12(): any {
    let sum = 0;
    this.dataSourceFinal12.data.forEach((element) => {sum = sum + Number(element.qtyDue); });

    return sum !== 0 ? sum : '';
  }
  qtyApproved12(): any {
    let sum = 0;
    this.dataSourceFinal12.data.forEach((element) => {sum = sum + Number(element.qtyApp); });

    return sum !== 0 ? sum : '';
  }
  calcQtyReq12(): any {
    let sum = 0;
    this.dataSourceFinal12.data.forEach((element) => {sum = sum + Number(element.qtyRequired); });

    return sum !== 0 ? sum : '';
  }

}
