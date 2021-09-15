import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { CommonListing } from 'src/app/model/common-listing';
import { SelectionModel } from '@angular/cdk/collections';
import { WorkflowDetailsGrantComponent } from '../../../grant/workflow-details-grant/workflow-details-grant.component';
import { PartyDetailsComponent } from '../../party-details/party-details.component';




const ELEMENT_DATA: any[] = [{

  billrefno: '368',
  tokenno: '552',
  mhead: '2054',
  cardexno: '4',
  billregno: '331',
  billamount: '10000.00',
  billgrossamount: '11000.00',
  billtype: 'Pay Bill',
  billdate: '25-Feb-2019',
  ddoname: '  Collector Office, Gandhinagar',
  billcat: 'Regular',
  authiorname: 'Shri Pratik K Shah',
  district: 'Gandhinagar',
  ddono: '4',
  partyName: 'Mr. Abc',
  vitocode: '152',
  inwardDate: '25-feb-2019'
},
{

  billrefno: '369',
  tokenno: '553',
  mhead: '2154',
  cardexno: '4',
  billregno: '332',
  billamount: '10000.00',
  billgrossamount: '11000.00',
  billtype: 'Pay Bill',
  billdate: '25-Mar-2019',
  ddoname: '  Collector Office, Gandhinagar',
  billcat: 'Regular',
  authiorname: 'Shri Pratik K Shah',
  district: 'Gandhinagar',
  ddono: '45',
  partyName: 'Mr. Abc',
  vitocode: '152',
  inwardDate: '25-Jul-2019'
}];




@Component({
  selector: 'app-audit-bills-auditor',
  templateUrl: './audit-bills-auditor.component.html',
  styleUrls: ['./audit-bills-auditor.component.css']
})
export class AuditBillsAuditorPaoComponent implements OnInit {
  auditAuditorForm: FormGroup;
  ddonameCtrl: FormControl = new FormControl();
  auditornameCtrl: FormControl = new FormControl();
  billtypeCtrl: FormControl = new FormControl();
  majorheadCtrl: FormControl = new FormControl();
  isSearch: Boolean = true;

  newdisplayedColumns: string[] = ['select', 'billrefno', 'billregno', 'tokenno', 'billdate',
    'inwardDate', 'ddono', 'cardexno', 'ddoname', 'billtype', 'mhead', 'billcat', 'billgrossamount',
    'billamount', 'partyName', 'action'];
  newdataSource = new MatTableDataSource<any>(ELEMENT_DATA);

  selection = new SelectionModel<any>(true, []);

  auditor_list: any[] = [{
    value: '1',
    viewValue: 'Shri. Pratik Shah'
  },

  ];


  major_list: any[] = [
    { value: '1', viewValue: '3451:Secretariat-Economic Services' },
    {
      value: '2', viewValue: '5475:Capital Outlay on other General Economics Services'
    },
    { value: '3', viewValue: '2401:Crop Husbandry' },
    { value: '4', viewValue: '2071:Pensions and Other Retirement Benefits' },
    { value: '5', viewValue: '2058:Stationery and Printing' },
    { value: '6 : Secretariat-Social Services', viewValue: '2251 : Secretariat-Social Services' },
    { value: '7 : Interest Payments', viewValue: '2049 : Interest Payments' },
    { value: '8 : Water Supply and Sanitation', viewValue: '2215 : Water Supply and Sanitation' },
    { value: '9 : Ecology and Environment', viewValue: '3435 : Ecology and Environment' },
    { value: '10 : Capital Outlay on Urban Development', viewValue: '4217 : Capital Outlay on Urban Development' },
    { value: '11 : General Education', viewValue: '2202 : General Education' },
  ];
  ddoname_list: any = [
    { value: '1', viewValue: '	Collector Office, Gandhinagar' },
  ];


  billcategory_list: any[] = [{
    value: '1',
    viewValue: 'Regular'
  },
  {
    value: '2',
    viewValue: 'TC'
  },
  {
    value: '3',
    viewValue: 'NIL'
  },
  {
    value: '4',
    viewValue: 'Regular/Challan'
  }
  ];
  billtype_list: any[] = [


    { value: '1', viewValue: 'GTR-30 - Pay Bill' },
    { value: '2', viewValue: 'GTR-45 - TA Bill' },
    { value: '3', viewValue: 'GTR-40 - Grant In Bill' },
    { value: '4', viewValue: 'GTR-12 - Advance Bill' }
  ];


  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.newdataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.newdataSource.data.forEach(row => this.selection.select(row));
  }

  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }
  constructor(private router: Router, public dialog: MatDialog, private fb: FormBuilder,) { }
  ngOnInit() {
    this.auditAuditorFormData();
  }

  auditAuditorFormData() {
    this.auditAuditorForm = this.fb.group({
      BillRefNo: [''],
      Tokenno: [''],
      majorhead: [''],
      Billtype: [''],
      cardexno: [''],
      ddoname: [''],
      billate: [''],
      district: [''],
      netamount: [''],
      auditorname: [''],
      billcategory: [''],
      billregno: [''],
      auditorctrl: ['1'],
      Grossamount: [''],
      regNo: ['']
    });
  }

  search() {
    this.isSearch = false;
  }

  workflowDetails() {
    const dialogRef = this.dialog.open(WorkflowDetailsGrantComponent, {
      width: '1200px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  commentGrantDetails(): void {
    const dialogRef = this.dialog.open(PartyDetailsComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  gotopage() {
    this.router.navigate(['/pao/saved-bill/bill-prepration-fom']);
  }
}
