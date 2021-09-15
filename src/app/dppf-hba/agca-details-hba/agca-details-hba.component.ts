import { AgcaDetailsHbaTreasuryDetails } from './../../model/dppf-hba';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { InwardNoDialogComponent } from '../inward-no-dialog/inward-no-dialog.component';
import { DPPFHbaDirectives } from 'src/app/common/directive/dppf-hba';
import { ListValue } from 'src/app/model/common-grant';
const ELEMENT_Details: AgcaDetailsHbaTreasuryDetails[] = [
  {
    code: '',
    trasury: '',
    agcaAamount: '',
    agacAamount: '',
    remarks: '',
  },

];
@Component({
  selector: 'app-agca-details-hba',
  templateUrl: './agca-details-hba.component.html',
  styleUrls: ['./agca-details-hba.component.css']
})
export class AgcaDetailsHbaComponent implements OnInit {
  // Date
  todayDate = Date.now();
  maxDate = new Date();

  // Form Group
  agcaDetailsForm: FormGroup;

  // Table Source
  displayedColumns: string[] = ['code', 'trasury', 'agcaAamount', 'agacAamount', 'remarks'];
  dataSource = new MatTableDataSource<AgcaDetailsHbaTreasuryDetails>(ELEMENT_Details);
  directiveObject = new DPPFHbaDirectives(this.dialog);
  constructor(private router: Router, public dialog: MatDialog, private fb: FormBuilder) { }

  // List
  status_list: ListValue[] = [
    { value: '1', viewValue: 'Reopen' },
    { value: '2', viewValue: 'Close' },
  ];

  ngOnInit() {
    this.agcaDetailsData();
  }

  agcaDetailsData() {
    this.agcaDetailsForm = this.fb.group({
      inwardNo: [''],
      inwardDate: [''],
      month: [''],
      year: [''],
      agcaAmount: [''],
      agacAmount: [''],
      agcaTotal: [''],
      agacTotal: [''],
      hbaMca: [{ value: '', disabled: true }],
    });
  }

  // navigation Route
  navigate() {
    this.router.navigate(['./dppf-hba/agca-details-listing']);
  }

  // Inward no popup
  inwardNo(): void {
    const dialogRef = this.dialog.open(InwardNoDialogComponent, {
      width: '800px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.inwardNo) {
        this.agcaDetailsForm.patchValue({
          inwardNo: result.inwardNo,
          inwardDate: new Date(result.inwardDate),
          month: result.month,
          year: result.year,
          agcaAmount: '0',
          agacAmount: '234323',
          agcaTotal: '',
          agacTotal: '',
          hbaMca: result.hba,
        });
        this.dataSource.data = [
          {
            code: '1',
            trasury: 'Sr.Accounts Officer, A.G., Rajkot',
            agcaAamount: '',
            agacAamount: '',
            remarks: '',
          },
          {
            code: '51',
            trasury: 'District Treasury Office, Ahmedabad',
            agcaAamount: '',
            agacAamount: '',
            remarks: '',
          },
          {
            code: '52',
            trasury: 'District Treasury Office, Amreli',
            agcaAamount: '',
            agacAamount: '',
            remarks: '',
          },
          {
            code: '53',
            trasury: 'District Treasury Office, Palanpur',
            agcaAamount: '',
            agacAamount: '',
            remarks: '',
          },
          {
            code: '54',
            trasury: 'District Treasury Office, Bharuch',
            agcaAamount: '',
            agacAamount: '',
            remarks: '',
          },
          {
            code: '55',
            trasury: 'DISTRICT TREASURY OFFICE, BHAVNAGAR',
            agcaAamount: '',
            agacAamount: '',
            remarks: '',
          }];
      }

      console.log('The dialog was closed');

    });
  }
}
