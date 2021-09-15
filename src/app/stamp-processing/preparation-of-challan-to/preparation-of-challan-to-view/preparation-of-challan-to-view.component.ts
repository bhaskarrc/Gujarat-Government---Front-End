import { CommonListing } from 'src/app/model/common-listing';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { InfoCommonDialogComponent } from '../../info-common-dialog/info-common-dialog.component';
import { ElementPrepChaTo, ElementPrepChaFinalTo } from 'src/app/model/stamp-processing';
import { StampProcessingDirectives } from 'src/app/common/directive/stamp-processing-directive';
const ELEMENT_FINAL3: ElementPrepChaFinalTo[] = [
  {
    typeOfStamp: 'Court Fee Label',
    deno: '1',
    denoCode: '1.180',
    disc: '3',
    discRs: '10',
    stampSheet: '180',
    totAmt: '200',
    netAmt: '100',
    stampNo: '9',
    sheetNo: '2',
  },
  {
    typeOfStamp: 'Court Fee Label',
    deno: '2',
    denoCode: '5.140',
    disc: '3',
    discRs: '10',
    stampSheet: '140',
    totAmt: '200',
    netAmt: '100',
    stampNo: '9',
    sheetNo: '2',
  },
];

@Component({
  selector: 'app-preparation-of-challan-to-view',
  templateUrl: './preparation-of-challan-to-view.component.html',
  styleUrls: ['./preparation-of-challan-to-view.component.css']
})
export class PreparationOfChallanToViewComponent implements OnInit {
 headerJso = [
      { label: 'Financial Year', value: '2020-2021' },
      { label: 'Name of Office', value: 'District Treasury Office, Gandhinagar' },
      { label: 'Mode of Payment', value: 'Online Payment (Receipt Management Portal)' },
      { label: 'Challan Number', value: '51/00057/072019/23' },
      { label: 'Net Amount of Challan', value: 'Rs. 12000' },
      { label: 'Date of Challan', value: '14-Apr-2020' },
      { label: 'Vendor Name and Code', value: 'B S Patel (10005)' }];

      attachmentObj: any[] = [
        {
          type: 'stamp-view',
          attachmentType: 'Supporting document',
        },
      ];

    // Final Tables
    dataSourceFinal3 = new MatTableDataSource(ELEMENT_FINAL3);
    directiveObject = new StampProcessingDirectives(this.router, this.dialog);
    dataSourceFinalHeading = [];

    displayFinal: string[] = ['position', 'typeOfStamp', 'deno', 'denoCode', 'disc', 'stampSheet', 'sheetNo', 'stampNo',
    'totAmt', 'discRs', 'netAmt'];

  date: any = new Date();

  constructor(private fb: FormBuilder,
    private router: Router,
    public dialog: MatDialog) {
  }

  ngOnInit() {
  }

  gotoListing() {
    this.router.navigate(['./stamp-processing/preparation-of-challan-to-list']);
  }

}
