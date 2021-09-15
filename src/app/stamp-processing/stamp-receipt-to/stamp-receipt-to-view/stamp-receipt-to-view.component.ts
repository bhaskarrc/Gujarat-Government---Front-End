import { CommonListing } from 'src/app/model/common-listing';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { StampDetailsCommonPopupComponent } from '../../stamp-details-common-popup/stamp-details-common-popup.component';
import { ElementRecToView } from 'src/app/model/stamp-processing';
import { StampProcessingDirectives } from 'src/app/common/directive/stamp-processing-directive';




const ELEMENT_DATA: ElementRecToView[] = [
  {
    deno: '1',
    typeOfStamp: 'Court Fee Label',
    prevIndent: '20',
    qtyprevIndent: '3',
    reuseQty: '5',
    qtyApp: '10',
    denominationCode: '30',
    qtyIssue: '6',
    fromSeries: '-',
    toSeries: '-',
    reuseQtySub: '5',


  },
  {
    deno: '2',
    typeOfStamp: 'Court Fee Label',
    prevIndent: '20',
    qtyprevIndent: '4',
    reuseQty: '5',
    qtyApp: '10',
    denominationCode: '50',
    qtyIssue: '2',
    fromSeries: '-',
    toSeries: '-',
    reuseQtySub: '5',


  }, {
    deno: '5',
    typeOfStamp: 'Court Fee Label',
    prevIndent: '20',
    qtyprevIndent: '6',
    reuseQty: '5',
    qtyApp: '10',
    denominationCode: '30',
    qtyIssue: '6',
    fromSeries: '-',
    toSeries: '-',
    reuseQtySub: '6',


  },
];

@Component({
  selector: 'app-stamp-receipt-to-view',
  templateUrl: './stamp-receipt-to-view.component.html',
  styleUrls: ['./stamp-receipt-to-view.component.css']
})
export class StampReceiptToViewComponent implements OnInit {
  headerJso = [
      { label: 'Financial Year', value: '2020-2021' },
      { label: 'Name of Office', value: 'District Treasury Office, Gandhinagar' },
      { label: 'Received From', value: 'Superintendent of Stamps Office' },
      { label: 'Date of Receipt', value: '01-Sep-2019' },
  ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  displayedColumns = ['position', 'typeOfStamp', 'deno', 'prevIndent', 'qtyprevIndent', 'reuseQty', 'qtyApp',
   'actQtyRecTo', 'fromSeries', 'toSeries'];
  directiveObject = new StampProcessingDirectives(this.router, this.dialog);
date: any = new Date();

constructor(private fb: FormBuilder,
  private router: Router,
  public dialog: MatDialog,
  private toastr: ToastrService,
  private el: ElementRef) {
}

ngOnInit() {
}

gotoListing() {
  this.router.navigate(['./stamp-processing/stamp-receipt-to-list']);
}

}
