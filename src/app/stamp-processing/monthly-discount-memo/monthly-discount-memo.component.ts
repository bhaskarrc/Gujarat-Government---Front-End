import { CommonListing } from 'src/app/model/common-listing';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { CloseConfirmCommonDialogComponent } from '../close-confirm-common-dialog/close-confirm-common-dialog.component';
import { SubmitConfirmCommonDialigComponent } from '../submit-confirm-common-dialig/submit-confirm-common-dialig.component';
import { stampProcessMessage } from 'src/app/common/error-message/common-message.constants';
import { ElementMonthMemo } from 'src/app/model/stamp-processing';
import { StampProcessingDirectives } from 'src/app/common/directive/stamp-processing-directive';


// Listing table data
const ELEMENT_DATA: ElementMonthMemo[] = [
  {
    denomination: '50',
    discount: '',
  },
  {
    denomination: '60',
    discount: '',

  },
  {
    denomination: '100',
    discount: '',
  },
  {
    denomination: '200',
    discount: '',
  },
  {
    denomination: '',
    discount: '',
  }
];
const ELEMENT_DATA1: ElementMonthMemo[] = [
  {
    denomination: '50',
    discount: '',
  },
  {
    denomination: '60',
    discount: '',

  },
  {
    denomination: '100',
    discount: '',
  },
  {
    denomination: '200',
    discount: '',
  },
  {
    denomination: '',
    discount: '',
  }
];
const ELEMENT_DATA2: ElementMonthMemo[] = [
  {
    denomination: '50',
    discount: '',
  },
  {
    denomination: '60',
    discount: '',

  },
  {
    denomination: '100',
    discount: '',
  },
  {
    denomination: '200',
    discount: '',
  },
  {
    denomination: '',
    discount: '',
  }
];
const ELEMENT_DATA3: ElementMonthMemo[] = [
  {
    denomination: '50',
    discount: '',
  },
  {
    denomination: '60',
    discount: '',

  },
  {
    denomination: '100',
    discount: '',
  },
  {
    denomination: '200',
    discount: '',
  },
  {
    denomination: '',
    discount: '',
  }
];
const ELEMENT_DATA4: ElementMonthMemo[] = [
  {
    denomination: '50',
    discount: '',
  },
  {
    denomination: '60',
    discount: '',

  },
  {
    denomination: '100',
    discount: '',
  },
  {
    denomination: '200',
    discount: '',
  },
  {
    denomination: '',
    discount: '',
  }
];
const ELEMENT_DATA5: ElementMonthMemo[] = [
  {
    denomination: '50',
    discount: '',
  },
  {
    denomination: '60',
    discount: '',

  },
  {
    denomination: '100',
    discount: '',
  },
  {
    denomination: '200',
    discount: '',
  },
  {
    denomination: '',
    discount: '',
  }
];



const ELEMENT_DATA6: ElementMonthMemo[] = [
  {
    denomination: '50',
    discount: '',
  },
  {
    denomination: '60',
    discount: '',

  },
  {
    denomination: '100',
    discount: '',
  },
  {
    denomination: '200',
    discount: '',
  },
  {
    denomination: '',
    discount: '',
  }
];
const ELEMENT_DATA7: ElementMonthMemo[] = [
  {
    denomination: '50',
    discount: '',
  },
  {
    denomination: '60',
    discount: '',

  },
  {
    denomination: '100',
    discount: '',
  },
  {
    denomination: '200',
    discount: '',
  },
  {
    denomination: '',
    discount: '',
  }
];
const ELEMENT_DATA8: ElementMonthMemo[] = [
  {
    denomination: '50',
    discount: '',
  },
  {
    denomination: '60',
    discount: '',

  },
  {
    denomination: '100',
    discount: '',
  },
  {
    denomination: '200',
    discount: '',
  },
  {
    denomination: '',
    discount: '',
  }
];
const ELEMENT_DATA9: ElementMonthMemo[] = [
  {
    denomination: '50',
    discount: '',
  },
  {
    denomination: '60',
    discount: '',

  },
  {
    denomination: '100',
    discount: '',
  },
  {
    denomination: '200',
    discount: '',
  },
  {
    denomination: '',
    discount: '',
  }
];
const ELEMENT_DATA10: ElementMonthMemo[] = [
  {
    denomination: '50',
    discount: '',
  },
  {
    denomination: '60',
    discount: '',

  },
  {
    denomination: '100',
    discount: '',
  },
  {
    denomination: '200',
    discount: '',
  },
  {
    denomination: '',
    discount: '',
  }
];
const ELEMENT_DATA11: ElementMonthMemo[] = [
  {
    denomination: '50',
    discount: '',
  },
  {
    denomination: '60',
    discount: '',

  },
  {
    denomination: '100',
    discount: '',
  },
  {
    denomination: '200',
    discount: '',
  },
  {
    denomination: '',
    discount: '',
  }
];

@Component({
  selector: 'app-monthly-discount-memo',
  templateUrl: './monthly-discount-memo.component.html',
  styleUrls: ['./monthly-discount-memo.component.css']
})
export class MonthlyDiscountMemoComponent implements OnInit {
// Entry Field Details
  subTreasury_List: CommonListing[] = [
    { value: '1', viewValue: 'District Treasury Office' },
    { value: '2', viewValue: 'Sub Treasury Office' },
  ];

  sbtreasury_List: CommonListing[] = [
    { value: '1', viewValue: 'Sub Treasury Office, Dhandhuka' },
    { value: '2', viewValue: 'Sub Treasury Office, Dholka' },
    { value: '3', viewValue: 'Sub Treasury Office, Sanad' },
    { value: '4', viewValue: 'Sub Treasury Office, Viramgam' },
  ];

  treasury_List: CommonListing[] = [
    { value: '1', viewValue: 'District Treasury Office, Ahmedabad' },
    { value: '2', viewValue: 'District Treasury Office, Amreli' },
    { value: '3', viewValue: 'District Treasury Office, Anand' },
    { value: '4', viewValue: 'District Treasury Office, Aravalli-Modasa' },
    { value: '5', viewValue: 'District Treasury Office, Banasakantha - Palanpur' },
    { value: '6', viewValue: 'District Treasury Office, Bhavnagar' },
    { value: '7', viewValue: 'District Treasury Office, Bhuj' },
    { value: '8', viewValue: 'District Treasury Office, Botad' },
    { value: '9', viewValue: 'District Treasury Office, Chhota Udepur' },
    { value: '10', viewValue: 'District Treasury Office, Dahod' },
    { value: '11', viewValue: 'District Treasury Office, Dang Ahwa' },
    { value: '12', viewValue: 'District Treasury Office, Devbhumi-Dwarka' },
    { value: '13', viewValue: 'District Treasury Office, Gandhinagar' },
    { value: '14', viewValue: 'District Treasury Office, Gir-Somnath' },
    { value: '15', viewValue: 'District Treasury Office, Jamnagar' },
    { value: '16', viewValue: 'District Treasury Office, Junagadh' },
    { value: '17', viewValue: 'District Treasury Office, Kheda-Nadiad' },
    { value: '18', viewValue: 'District Treasury Office, Kutch (Bhuj)' },
    { value: '19', viewValue: 'District Treasury Office, Mahisagar-Lunawadav' },
    { value: '20', viewValue: 'District Treasury Office, Mahisagar' },
    { value: '21', viewValue: 'District Treasury Office, Morbi' },
    { value: '22', viewValue: 'District Treasury Office, Narmada-Rajpipala' },
    { value: '23', viewValue: 'District Treasury Office, Navsari' },
    { value: '24', viewValue: 'District Treasury Office, Panchmahal (Godhara)' },
    { value: '25', viewValue: 'District Treasury Office, Patan' },
    { value: '26', viewValue: 'District Treasury Office, Porbandar' },
    { value: '27', viewValue: 'District Treasury Office, Rajkot' },
    { value: '28', viewValue: 'District Treasury Office, Sabarkantha – Himatnagar' },
    { value: '29', viewValue: 'District Treasury Office, Surat' },
    { value: '30', viewValue: 'District Treasury Office, Surendranagar' },
    { value: '31', viewValue: 'District Treasury Office, Tapi - Vyara' },
    { value: '32', viewValue: 'District Treasury Office, Vadodara' },
    { value: '33', viewValue: 'District Treasury Office, Valsad' },

  ];
  month_List: CommonListing[] = [
    { value: '1', viewValue: 'January' },
    { value: '2', viewValue: 'Feburary' },
  ];
  stamp_List: CommonListing[] = [
    { value: '1', viewValue: 'Agency License' },
    { value: '2', viewValue: 'Agreement' },
    { value: '3', viewValue: 'Court Fee Label' },
    { value: '4', viewValue: 'Court Fee Paper' },
    { value: '5', viewValue: 'Foreign bill' },
    { value: '6', viewValue: 'Hundi' },
    { value: '7', viewValue: 'Insurance' },
    { value: '8', viewValue: 'Non Judicial Paper' },
    { value: '9', viewValue: 'Notary' },
    { value: '10', viewValue: 'Revenue' },
    { value: '11', viewValue: 'Share transfer' },
    { value: '12', viewValue: 'Special Adhesive' },
  ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  dataSource1 = new MatTableDataSource(ELEMENT_DATA1);
  dataSource2 = new MatTableDataSource(ELEMENT_DATA2);
  dataSource3 = new MatTableDataSource(ELEMENT_DATA3);
  dataSource4 = new MatTableDataSource(ELEMENT_DATA4);
  dataSource5 = new MatTableDataSource(ELEMENT_DATA5);
  dataSource6 = new MatTableDataSource(ELEMENT_DATA6);
  dataSource7 = new MatTableDataSource(ELEMENT_DATA7);
  dataSource8 = new MatTableDataSource(ELEMENT_DATA8);
  dataSource9 = new MatTableDataSource(ELEMENT_DATA9);
  dataSource10 = new MatTableDataSource(ELEMENT_DATA10);
  dataSource11 = new MatTableDataSource(ELEMENT_DATA11);
  displayedColumns: string[] = ['position', 'denomination', 'discount'];

  stampCtrl: FormControl = new FormControl();
  subTreasuryCtrl: FormControl = new FormControl();
  treasuryCtrl: FormControl = new FormControl();
  sbtreasuryCtrl: FormControl = new FormControl();
  monthCtrl: FormControl = new FormControl();
  errorMessages = stampProcessMessage;

  monthlyDiscountMemoForm: FormGroup;
  date: any = new Date();


  subTreasuryVal: string;
  onAddTreasury = false;
  onAddSubTreasury = false;


  stampVal: string;
  // Agency License
  onAdd = true;
  // Agreement
  onAdd2 = true;
  // Court Fee Label
  onAdd3 = true;
  // Court Fee Paper
  onAdd4 = true;
  // Foreign bill
  onAdd5 = true;
  // Hundi
  onAdd6 = true;
  // Insurance
  onAdd7 = true;
  // Non Judicial Paper
  onAdd8 = true;
  // Notary
  onAdd9 = true;
  // Revenue
  onAdd10 = true;
  // Share transfer
  onAdd11 = true;
  // Special Adhesive
  onAdd12 = true;
  showSubTre = false;
  // Table
  tables: any[] = [];
  constructor(private fb: FormBuilder,
    private router: Router,
    public dialog: MatDialog, ) {
  }
  directiveObject = new StampProcessingDirectives(this.router, this.dialog);

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.monthlyDiscountMemoForm = this.fb.group({
      finYear: ['2019-2020', Validators.required],
      stamp: ['', Validators.required],
      subTreasury: ['', Validators.required],
      month: [''],
      treasury: [''],
      sbtreasury: [''],
    });
  }

  whenSubTreasuryClick() {
    this.subTreasuryVal = this.monthlyDiscountMemoForm.controls.subTreasury.value;
    if (this.subTreasuryVal === '1') {
      this.onAddTreasury = true;
      this.onAddSubTreasury = false;
    } else if (this.subTreasuryVal === '2') {
      this.onAddSubTreasury = true;
      this.onAddTreasury = false;
    }
  }


// Add Button Click
  whenAddClick() {
    this.stampVal = this.monthlyDiscountMemoForm.controls.stamp.value;
    if (this.stampVal === '1' && this.onAdd) {
      this.onAdd = false;
      this.tables.push({
        stamptype: 'Agency License',
        dataSource: this.dataSource,
        displayedColumns: this.displayedColumns,
      });

    } else if (this.stampVal === '2' && this.onAdd2) {
      this.tables.push({
        stamptype: 'Agreement',
        dataSource: this.dataSource1,
        displayedColumns: this.displayedColumns,
      });
      this.onAdd2 = false;
    } else if (this.stampVal === '3' && this.onAdd3) {
      this.tables.push({
        stamptype: 'Court Fee Label',
        dataSource: this.dataSource2,
        displayedColumns: this.displayedColumns,
      });
      this.onAdd3 = false;
    } else if (this.stampVal === '4' && this.onAdd4) {
      this.tables.push({
        stamptype: 'Court Fee Paper',
        dataSource: this.dataSource3,
        displayedColumns: this.displayedColumns,
      });
      this.onAdd4 = false;
    } else if (this.stampVal === '5' && this.onAdd5) {
      this.tables.push({
        stamptype: 'Foreign bill',
        dataSource: this.dataSource4,
        displayedColumns: this.displayedColumns,
      });
      this.onAdd5 = false;
    } else if (this.stampVal === '6' && this.onAdd6) {
      this.tables.push({
        stamptype: 'Hundi',
        dataSource: this.dataSource5,
        displayedColumns: this.displayedColumns,
      });
      this.onAdd6 = false;
    } else if (this.stampVal === '7' && this.onAdd7) {
      this.tables.push({
        stamptype: 'Insurance',
        dataSource: this.dataSource6,
        displayedColumns: this.displayedColumns,
      });
      this.onAdd7 = false;
    } else if (this.stampVal === '8' && this.onAdd8) {
      this.tables.push({
        stamptype: 'Non Judicial Paper',
        dataSource: this.dataSource7,
        displayedColumns: this.displayedColumns,
      });
      this.onAdd8 = false;
    } else if (this.stampVal === '9' && this.onAdd9) {
      this.tables.push({
        stamptype: 'Notary',
        dataSource: this.dataSource8,
        displayedColumns: this.displayedColumns,
      });
      this.onAdd9 = false;
    } else if (this.stampVal === '10' && this.onAdd10) {
      this.tables.push({
        stamptype: 'Revenue',
        dataSource: this.dataSource9,
        displayedColumns: this.displayedColumns,
      });
      this.onAdd10 = false;
    } else if (this.stampVal === '11' && this.onAdd11) {
      this.tables.push({
        stamptype: 'Share transfer',
        dataSource: this.dataSource10,
        displayedColumns: this.displayedColumns,
      });
      this.onAdd11 = false;
    } else if (this.stampVal === '12' && this.onAdd12) {
      this.tables.push({
        stamptype: 'Special Adhesive',
        dataSource: this.dataSource11,
        displayedColumns: this.displayedColumns,
      });
      this.onAdd12 = false;
    }

  }


  goToDashboard() {
    this.router.navigate(['']);
  }

  gotoListing() {
    this.router.navigate(['./stamp-processing/monthly-discount-memo-list']);
  }
}
