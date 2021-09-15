
import { CommonListing, HeaderElement } from 'src/app/model/common-listing';
import { Router } from '@angular/router';
import { ListValue } from 'src/app/model/common-grant';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { SaveConfirmCommonDialogComponent } from '../../save-confirm-common-dialog/save-confirm-common-dialog.component';
import { CloseConfirmCommonDialogComponent } from '../../close-confirm-common-dialog/close-confirm-common-dialog.component';
import { stampProcessMessage } from 'src/app/common/error-message/common-message.constants';
import { StampProcessingDirectives } from 'src/app/common/directive/stamp-processing-directive';
import { ElementIndConList, ElementIndConNumberList } from 'src/app/model/stamp-processing';
import { HistoryDetailsCommonDialogComponent } from '../../history-details-common-dialog/history-details-common-dialog.component';

// Listing table Data
const ELEMENT_DATA: ElementIndConNumberList[] = [
  {
    treSubTre: 'District Treasury Office, Gandhinagar',
    total: '30000',
    refNo: '19-20/STM/SIP/002',
    subDate: '2/10/2020 10:30',
  },

  {
    treSubTre: 'Sub Treasury Office, Mansa',
    total: '10000',
    refNo: '19-20/STM/SIP/004',
    subDate: '2/10/2020 10:30',
  },
  {
    treSubTre: 'Sub Treasury Office, Kalol',
    total: '14000',
    refNo: '19-20/STM/SIP/010',
    subDate: '2/10/2020 10:30',
  },

];

@Component({
  selector: 'app-indent-number-list',
  templateUrl: './indent-number-list.component.html',
  styleUrls: ['./indent-number-list.component.css']
})
export class IndentNumberListComponent implements OnInit {

  headerJson: HeaderElement[] = [
    { label: 'Financial Year ', value: '2020-2021' },
    { label: 'Name of Office', value: 'District Treasury Office, Gandhinagar' },
    { label: 'Type of Indent', value: 'Regular' },
    { label: 'Gross Total of Indent', value: 'Rs. 54000' },
  ];

  dataSource = new MatTableDataSource(ELEMENT_DATA);
  // Listing Table
  displayedColumns: string[] = ['position', 'treSubTre', 'total', 'refNo', 'subDate'];
  errorMessages = stampProcessMessage;
  directiveObject = new StampProcessingDirectives(this.router, this.dialog);

  constructor(private fb: FormBuilder,
    private router: Router,
    public dialog: MatDialog, ) {
  }

  ngOnInit() {
  }
  // History Details Dialog
  showHistoryDialog(): void {

    const dialogRef = this.dialog.open(HistoryDetailsCommonDialogComponent, {
      width: '2700px',
      height: '600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'no') {
        console.log('The dialog was closed', result);
      } else if (result === 'yes') {
        console.log('The dialog was closed', result);
      }
    });
  }

}
