import { CommonListing } from 'src/app/model/common-listing';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { SaveConfirmCommonDialogComponent } from '../../save-confirm-common-dialog/save-confirm-common-dialog.component';
import { CloseConfirmCommonDialogComponent } from '../../close-confirm-common-dialog/close-confirm-common-dialog.component';
import { stampProcessMessage } from 'src/app/common/error-message/common-message.constants';
import { StampProcessingDirectives } from 'src/app/common/directive/stamp-processing-directive';
import { VenDiscMasterSto, VenDiscMasteNewSto } from 'src/app/model/stamp-processing';


const ELEMENT_DATA: VenDiscMasterSto[] = [
  {
    checkbox: false,
    deno: '-',
    disc: '0',
  }
];

const ELEMENT_DATA2: VenDiscMasterSto[] = [
  {
    checkbox: false,
    deno: '100',
    disc: '0',
  }
]; const ELEMENT_DATA3: VenDiscMasterSto[] = [
  {
    checkbox: false,
    deno: '1',
    disc: '0',
  },
  {
    checkbox: false,
    deno: '2',
    disc: '0',
  },
  {
    checkbox: false,
    deno: '5',
    disc: '0',
  },
  {
    checkbox: false,
    deno: '10',
    disc: '0',
  },
  {
    checkbox: false,
    deno: '20',
    disc: '0',
  },
]; const ELEMENT_DATA4: VenDiscMasterSto[] = [
  {
    checkbox: false,
    deno: '50',
    disc: '0',
  },
  {
    checkbox: false,
    deno: '60',
    disc: '0',
  },
  {
    checkbox: false,
    deno: '100',
    disc: '0',
  },
  {
    checkbox: false,
    deno: '200',
    disc: '0',
  },
  {
    checkbox: false,
    deno: '500',
    disc: '0',
  },
  {
    checkbox: false,
    deno: '1000',
    disc: '0',
  },
  {
    checkbox: false,
    deno: '3000',
    disc: '0',
  },
  {
    checkbox: false,
    deno: '5000',
    disc: '0',
  },
  {
    checkbox: false,
    deno: '25000',
    disc: '0',
  },
]; const ELEMENT_DATA5: VenDiscMasterSto[] = [
  {
    checkbox: false,
    deno: '-',
    disc: '0',
  }
]; const ELEMENT_DATA6: VenDiscMasterSto[] = [
  {
    checkbox: false,
    deno: '1',
    disc: '0',
  },
  {
    checkbox: false,
    deno: '10',
    disc: '0',
  },
]; const ELEMENT_DATA7: VenDiscMasterSto[] = [
  {
    checkbox: false,
    deno: '-',
    disc: '0',
  }
]; const ELEMENT_DATA8: VenDiscMasterSto[] = [
  {
    checkbox: false,
    deno: '20',
    disc: '0',
  },
  {
    checkbox: false,
    deno: '50',
    disc: '0',
  },
  {
    checkbox: false,
    deno: '100',
    disc: '0',
  },
  {
    checkbox: false,
    deno: '500',
    disc: '0',
  },
  {
    checkbox: false,
    deno: '1000',
    disc: '0',
  },
  {
    checkbox: false,
    deno: '5000',
    disc: '0',
  },
  {
    checkbox: false,
    deno: '10000',
    disc: '0',
  },
  {
    checkbox: false,
    deno: '15000',
    disc: '0',
  },
  {
    checkbox: false,
    deno: '20000',
    disc: '0',
  },
  {
    checkbox: false,
    deno: '25000',
    disc: '0',
  },
]; const ELEMENT_DATA9: VenDiscMasterSto[] = [
  {
    checkbox: false,
    deno: '5',
    disc: '0',
  }
]; const ELEMENT_DATA10: VenDiscMasterSto[] = [
  {
    checkbox: false,
    deno: '1',
    disc: '0',
  },
  {
    checkbox: false,
    deno: '5',
    disc: '0',
  },
]; const ELEMENT_DATA11: VenDiscMasterSto[] = [
  {
    checkbox: false,
    deno: '-',
    disc: '0',
  }
]; const ELEMENT_DATA12: VenDiscMasterSto[] = [
  {
    checkbox: false,
    deno: '5',
    disc: '0',
  },
  {
    checkbox: false,
    deno: '10',
    disc: '0',
  },
  {
    checkbox: false,
    deno: '20',
    disc: '0',
  },
  {
    checkbox: false,
    deno: '50',
    disc: '0',
  },
  {
    checkbox: false,
    deno: '100',
    disc: '0',
  },
  {
    checkbox: false,
    deno: '500',
    disc: '0',
  },
  {
    checkbox: false,
    deno: '1000',
    disc: '0',
  },
];
const ELEMENT_FINAL: VenDiscMasteNewSto[] = [
  {
    deno: '-',
    disc: '0',
  }
];

const ELEMENT_FINAL2: VenDiscMasteNewSto[] = [
  {
    deno: '100',
    disc: '2',
  }
]; const ELEMENT_FINAL3: VenDiscMasteNewSto[] = [
  {
    deno: '1',
    disc: '6',
  },
  {
    deno: '2',
    disc: '6',
  },
  {
    deno: '5',
    disc: '6',
  },
]; const ELEMENT_FINAL4: VenDiscMasteNewSto[] = [
  {
    deno: '50',
    disc: '4',
  },
  {
    deno: '60',
    disc: '4',
  },
  {
    deno: '100',
    disc: '4',
  },
]; const ELEMENT_FINAL5: VenDiscMasteNewSto[] = [
  {
    deno: '-',
    disc: '0',
  }
]; const ELEMENT_FINAL6: VenDiscMasteNewSto[] = [
  {
    deno: '1',
    disc: '3',
  },
  {
    deno: '10',
    disc: '3',
  },
]; const ELEMENT_FINAL7: VenDiscMasteNewSto[] = [
  {
    deno: '-',
    disc: '0',
  }
]; const ELEMENT_FINAL8: VenDiscMasteNewSto[] = [
  {
    deno: '20',
    disc: '4',
  },
  {
    deno: '50',
    disc: '4',
  },
]; const ELEMENT_FINAL9: VenDiscMasteNewSto[] = [
  {
    deno: '5',
    disc: '0',
  }
]; const ELEMENT_FINAL10: VenDiscMasteNewSto[] = [
  {
    deno: '1',
    disc: '7',
  },
  {
    deno: '5',
    disc: '7',
  },
]; const ELEMENT_FINAL11: VenDiscMasteNewSto[] = [
  {
    deno: '-',
    disc: '0',
  }
]; const ELEMENT_FINAL12: VenDiscMasteNewSto[] = [
  {
    deno: '5',
    disc: '4',
  },
  {
    deno: '10',
    disc: '4',
  },
];
@Component({
  selector: 'app-vendor-discount-master-sto',
  templateUrl: './vendor-discount-master-sto.component.html',
  styleUrls: ['./vendor-discount-master-sto.component.css']
})
export class VendorDiscountMasterStoComponent implements OnInit {
  finYear_list: CommonListing[] = [
    { value: '1', viewValue: '2011-2012' },
    { value: '2', viewValue: '2012-2013' },
    { value: '3', viewValue: '2013-2014' },
    { value: '4', viewValue: '2014-2015' },
    { value: '5', viewValue: '2015-2016' },
    { value: '6', viewValue: '2016-2017' },
    { value: '7', viewValue: '2017-2018' },
    { value: '8', viewValue: '2018-2019' },
    { value: '9', viewValue: '2019-2020' },
    { value: '10', viewValue: '2020-2021' },
  ];
  subTre_List: CommonListing[] = [
    { value: '1', viewValue: 'Sub Treasury Office, Dhandhuka'},
    { value: '2', viewValue: 'Sub Treasury Office, Dholka'},
    { value: '3', viewValue: 'Sub Treasury Office, Sanad'},
    { value: '4', viewValue: 'Sub Treasury Office, Viramgam'},
  ];
  venNameCode_List: CommonListing[] = [
    { value: '1', viewValue: 'B.S.Patel (000123)'},
    { value: '2', viewValue: 'S.K.Singh (000124)'},
    { value: '3', viewValue: 'D.B.Patel (000125)'},
    { value: '4', viewValue: 'P.D.Kapadia (000126)'},
  ];
  stamp_List: CommonListing[] = [
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

    displayedColumns: string[] = ['position', 'checkbox', 'denomination', 'disc', 'action'];
    displayFinal: string[] = ['position', 'denomination', 'discount', 'action'];
  finYearCtrl: FormControl = new FormControl();
  subTreOffCtrl: FormControl = new FormControl();
  stampCtrl: FormControl = new FormControl();
  venNameCodeCtrl: FormControl = new FormControl();
  errorMessages = stampProcessMessage;
  directiveObject = new StampProcessingDirectives(this.router, this.dialog);

  vendorDiscSubForm: FormGroup;
  date: any = new Date();
  vCode = '123456';
  venName = 'Vendor';

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
  onCheck = false;
  onCheck2 = false;
  onCheck3 = false;
  onCheck4 = false;
  onCheck5 = false;
  onCheck6 = false;
  onCheck7 = false;
  onCheck8 = false;
  onCheck9 = false;
  onCheck10 = false;
  onCheck11 = false;
  onCheck12 = false;
  showSubTre = false;
  dataSourceStamp: any;
  stampName: string;

  constructor(private fb: FormBuilder,
    private router: Router,
    public dialog: MatDialog) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.vendorDiscSubForm = this.fb.group({
      finYear: ['10', Validators.required],
      venNameCode: ['', Validators.required],
      subTreOff: ['', Validators.required],
      stamp: ['', Validators.required],
    });
  }
  // Change data source on stamp value change
  changeStamp() {
    const stampNumber = this.vendorDiscSubForm.controls.stamp.value;
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
// Add Button Click
  whenAddClick() {
    this.stampVal = this.vendorDiscSubForm.controls.stamp.value;

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

  gotoListing() {
    this.router.navigate(['./stamp-processing/vendor-discount-master-sto-list']);
  }

// Check Box Selection
  checkboxValueChange(item) {
    this.stampVal = this.vendorDiscSubForm.controls.stamp.value;

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
// Delete stamp wise
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

}
