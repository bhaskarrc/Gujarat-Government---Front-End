
import { CommonListing } from 'src/app/model/common-listing';
import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { CloseConfirmCommonDialogComponent } from '../close-confirm-common-dialog/close-confirm-common-dialog.component';
import { SubmitConfirmCommonDialigComponent } from '../submit-confirm-common-dialig/submit-confirm-common-dialig.component';
import { stampProcessMessage } from 'src/app/common/error-message/common-message.constants';
import { StampProcessingDirectives } from 'src/app/common/directive/stamp-processing-directive';
import { StampSeriesMaster } from 'src/app/model/stamp-processing';


// Listing table data stamp wise
const ELEMENT_DATA: StampSeriesMaster[] = [
  {

    denomination: '1',
    unitValue: '',
    stampSheet: '',
    from: 'A-000001',
    to: 'A-000100',
  },
  {

    denomination: '2',
    unitValue: '',
    stampSheet: '',
    from: 'B-000001',
    to: 'B-000100',
  },
  {

    denomination: '5',
    unitValue: '',
    stampSheet: '',
    from: 'C-000001',
    to: 'C-000100',
  },
  {

    denomination: '10',
    unitValue: '',
    stampSheet: '',
    from: 'D-000001',
    to: 'D-000100',
  },
  {

    denomination: '20',
    unitValue: '',
    stampSheet: '',
    from: 'E-000001',
    to: 'E-000100',
  }
];
const ELEMENT_DATA2: any[] = [
  {
    denomination: '1',
    unitValue: '',
    stampSheet: '',
    from: 'A-000001',
    to: 'A-000100',
  },
  {
    denomination: '2',
    unitValue: '',
    stampSheet: '',
    from: 'B-000001',
    to: 'B-000100',
  },
  {
    denomination: '5',
    unitValue: '',
    stampSheet: '',
    from: 'C-000001',
    to: 'C-000100',
  },
  {
    denomination: '10',
    unitValue: '',
    stampSheet: '',
    from: 'D-000001',
    to: 'D-000100',
  },
  {
    denomination: '20',
    unitValue: '',
    stampSheet: '',
    from: 'E-000001',
    to: 'E-000100',
  }
];

const ELEMENT_DATA3: any[] = [
  {
    denomination: '1',
    unitValue: '',
    stampSheet: '',
    from: 'A-000001',
    to: 'A-000100',
  },
  {
    denomination: '2',
    unitValue: '',
    stampSheet: '',
    from: 'B-000001',
    to: 'B-000100',
  },
  {
    denomination: '5',
    unitValue: '',
    stampSheet: '',
    from: 'C-000001',
    to: 'C-000100',
  },
  {
    denomination: '10',
    unitValue: '',
    stampSheet: '',
    from: 'D-000001',
    to: 'D-000100',
  },
  {
    denomination: '20',
    unitValue: '',
    stampSheet: '',
    from: 'E-000001',
    to: 'E-000100',
  }
];

const ELEMENT_DATA4: any[] = [
  {
    denomination: '1',
    unitValue: '',
    stampSheet: '',
    from: 'A-000001',
    to: 'A-000100',
  },
  {
    denomination: '2',
    unitValue: '',
    stampSheet: '',
    from: 'B-000001',
    to: 'B-000100',
  },
  {
    denomination: '5',
    unitValue: '',
    stampSheet: '',
    from: 'C-000001',
    to: 'C-000100',
  },
  {
    denomination: '10',
    unitValue: '',
    stampSheet: '',
    from: 'D-000001',
    to: 'D-000100',
  },
  {
    denomination: '20',
    unitValue: '',
    stampSheet: '',
    from: 'E-000001',
    to: 'E-000100',
  }
];
const ELEMENT_DATA5: any[] = [
  {
    denomination: '1',
    unitValue: '',
    stampSheet: '',
    from: 'A-000001',
    to: 'A-000100',
  },
  {
    denomination: '2',
    unitValue: '',
    stampSheet: '',
    from: 'B-000001',
    to: 'B-000100',
  },
  {
    denomination: '5',
    unitValue: '',
    stampSheet: '',
    from: 'C-000001',
    to: 'C-000100',
  },
  {
    denomination: '10',
    unitValue: '',
    stampSheet: '',
    from: 'D-000001',
    to: 'D-000100',
  },
  {
    denomination: '20',
    unitValue: '',
    stampSheet: '',
    from: 'E-000001',
    to: 'E-000100',
  }
];
const ELEMENT_DATA6: any[] = [
  {
    denomination: '1',
    unitValue: '',
    stampSheet: '',
    from: 'A-000001',
    to: 'A-000100',
  },
  {
    denomination: '2',
    unitValue: '',
    stampSheet: '',
    from: 'B-000001',
    to: 'B-000100',
  },
  {
    denomination: '5',
    unitValue: '',
    stampSheet: '',
    from: 'C-000001',
    to: 'C-000100',
  },
  {
    denomination: '10',
    unitValue: '',
    stampSheet: '',
    from: 'D-000001',
    to: 'D-000100',
  },
  {
    denomination: '20',
    unitValue: '',
    stampSheet: '',
    from: 'E-000001',
    to: 'E-000100',
  }
];
const ELEMENT_DATA7: any[] = [
  {
    denomination: '1',
    unitValue: '',
    stampSheet: '',
    from: 'A-000001',
    to: 'A-000100',
  },
  {
    denomination: '2',
    unitValue: '',
    stampSheet: '',
    from: 'B-000001',
    to: 'B-000100',
  },
  {
    denomination: '5',
    unitValue: '',
    stampSheet: '',
    from: 'C-000001',
    to: 'C-000100',
  },
  {
    denomination: '10',
    unitValue: '',
    stampSheet: '',
    from: 'D-000001',
    to: 'D-000100',
  },
  {
    denomination: '20',
    unitValue: '',
    stampSheet: '',
    from: 'E-000001',
    to: 'E-000100',
  }
];
const ELEMENT_DATA8: any[] = [
  {
    denomination: '1',
    unitValue: '',
    stampSheet: '',
    from: 'A-000001',
    to: 'A-000100',
  },
  {
    denomination: '2',
    unitValue: '',
    stampSheet: '',
    from: 'B-000001',
    to: 'B-000100',
  },
  {
    denomination: '5',
    unitValue: '',
    stampSheet: '',
    from: 'C-000001',
    to: 'C-000100',
  },
  {
    denomination: '10',
    unitValue: '',
    stampSheet: '',
    from: 'D-000001',
    to: 'D-000100',
  },
  {
    denomination: '20',
    unitValue: '',
    stampSheet: '',
    from: 'E-000001',
    to: 'E-000100',
  }
];
const ELEMENT_DATA9: any[] = [
  {
    denomination: '1',
    unitValue: '',
    stampSheet: '',
    from: 'A-000001',
    to: 'A-000100',
  },
  {
    denomination: '2',
    unitValue: '',
    stampSheet: '',
    from: 'B-000001',
    to: 'B-000100',
  },
  {
    denomination: '5',
    unitValue: '',
    stampSheet: '',
    from: 'C-000001',
    to: 'C-000100',
  },
  {
    denomination: '10',
    unitValue: '',
    stampSheet: '',
    from: 'D-000001',
    to: 'D-000100',
  },
  {
    denomination: '20',
    unitValue: '',
    stampSheet: '',
    from: 'E-000001',
    to: 'E-000100',
  }
];
const ELEMENT_DATA10: any[] = [
  {
    denomination: '1',
    unitValue: '',
    stampSheet: '',
    from: 'A-000001',
    to: 'A-000100',
  },
  {
    denomination: '2',
    unitValue: '',
    stampSheet: '',
    from: 'B-000001',
    to: 'B-000100',
  },
  {
    denomination: '5',
    unitValue: '',
    stampSheet: '',
    from: 'C-000001',
    to: 'C-000100',
  },
  {
    denomination: '10',
    unitValue: '',
    stampSheet: '',
    from: 'D-000001',
    to: 'D-000100',
  },
  {
    denomination: '20',
    unitValue: '',
    stampSheet: '',
    from: 'E-000001',
    to: 'E-000100',
  }
];
const ELEMENT_DATA11: any[] = [
  {
    denomination: '1',
    unitValue: '',
    stampSheet: '',
    from: 'A-000001',
    to: 'A-000100',
  },
  {
    denomination: '2',
    unitValue: '',
    stampSheet: '',
    from: 'B-000001',
    to: 'B-000100',
  },
  {
    denomination: '5',
    unitValue: '',
    stampSheet: '',
    from: 'C-000001',
    to: 'C-000100',
  },
  {
    denomination: '10',
    unitValue: '',
    stampSheet: '',
    from: 'D-000001',
    to: 'D-000100',
  },
  {
    denomination: '20',
    unitValue: '',
    stampSheet: '',
    from: 'E-000001',
    to: 'E-000100',
  }
];
const ELEMENT_DATA12: any[] = [
  {
    denomination: '1',
    unitValue: '',
    stampSheet: '',
    from: 'A-000001',
    to: 'A-000100',
  },
  {
    denomination: '2',
    unitValue: '',
    stampSheet: '',
    from: 'B-000001',
    to: 'B-000100',
  },
  {
    denomination: '5',
    unitValue: '',
    stampSheet: '',
    from: 'C-000001',
    to: 'C-000100',
  },
  {
    denomination: '10',
    unitValue: '',
    stampSheet: '',
    from: 'D-000001',
    to: 'D-000100',
  },
  {
    denomination: '20',
    unitValue: '',
    stampSheet: '',
    from: 'E-000001',
    to: 'E-000100',
  }
];


@Component({
  selector: 'app-stamp-series-master-sto',
  templateUrl: './stamp-series-master-sto.component.html',
  styleUrls: ['./stamp-series-master-sto.component.css']
})
export class StampSeriesMasterStoComponent implements OnInit {

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
  displayedColumns: string[] = ['position', 'denomination', 'unitValue',
    'stampSheet', 'from', 'to'];

  stampCtrl: FormControl = new FormControl();
  finYearCtrl: FormControl = new FormControl();
  stampMasterStoForm: FormGroup;
  errorMessages = stampProcessMessage;
  directiveObject = new StampProcessingDirectives(this.router, this.dialog);
  date: any = new Date();
  tofficeVal = 'District Treasury Office, Ahmedabad';
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
  tables: any[] = [];

  constructor(private fb: FormBuilder,
    private router: Router,
    public dialog: MatDialog, ) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.stampMasterStoForm = this.fb.group({
      finYear: ['10', Validators.required],
      toffice: ['District Treasury Office, Ahmedabad', Validators.required],
      challan: ['', Validators.required],
      stamp: ['', Validators.required],
    });
  }

// Add Button Click
  whenAddClick() {
    this.stampVal = this.stampMasterStoForm.controls.stamp.value;
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
        dataSource: this.dataSource2,
        displayedColumns: this.displayedColumns,
      });
      this.onAdd2 = false;
    } else if (this.stampVal === '3' && this.onAdd3) {
      this.tables.push({
        stamptype: 'Court Fee Label',
        dataSource: this.dataSource3,
        displayedColumns: this.displayedColumns,
      });
      this.onAdd3 = false;
    } else if (this.stampVal === '4' && this.onAdd4) {
      this.tables.push({
        stamptype: 'Court Fee Paper',
        dataSource: this.dataSource4,
        displayedColumns: this.displayedColumns,
      });
      this.onAdd4 = false;
    } else if (this.stampVal === '5' && this.onAdd5) {
      this.tables.push({
        stamptype: 'Foreign bill',
        dataSource: this.dataSource5,
        displayedColumns: this.displayedColumns,
      });
      this.onAdd5 = false;
    } else if (this.stampVal === '6' && this.onAdd6) {
      this.tables.push({
        stamptype: 'Hundi',
        dataSource: this.dataSource6,
        displayedColumns: this.displayedColumns,
      });
      this.onAdd6 = false;
    } else if (this.stampVal === '7' && this.onAdd7) {
      this.tables.push({
        stamptype: 'Insurance',
        dataSource: this.dataSource7,
        displayedColumns: this.displayedColumns,
      });
      this.onAdd7 = false;
    } else if (this.stampVal === '8' && this.onAdd8) {
      this.tables.push({
        stamptype: 'Non Judicial Paper',
        dataSource: this.dataSource8,
        displayedColumns: this.displayedColumns,
      });
      this.onAdd8 = false;
    } else if (this.stampVal === '9' && this.onAdd9) {
      this.tables.push({
        stamptype: 'Notary',
        dataSource: this.dataSource9,
        displayedColumns: this.displayedColumns,
      });
      this.onAdd9 = false;
    } else if (this.stampVal === '10' && this.onAdd10) {
      this.tables.push({
        stamptype: 'Revenue',
        dataSource: this.dataSource10,
        displayedColumns: this.displayedColumns,
      });
      this.onAdd10 = false;
    } else if (this.stampVal === '11' && this.onAdd11) {
      this.tables.push({
        stamptype: 'Share transfer',
        dataSource: this.dataSource11,
        displayedColumns: this.displayedColumns,
      });
      this.onAdd11 = false;
    } else if (this.stampVal === '12' && this.onAdd12) {
      this.tables.push({
        stamptype: 'Special Adhesive',
        dataSource: this.dataSource12,
        displayedColumns: this.displayedColumns,
      });
      this.onAdd12 = false;
    }

  }


  gotoListing() {
    this.router.navigate(['./stamp-processing/stamp-series-master-sto-list']);
  }

}

