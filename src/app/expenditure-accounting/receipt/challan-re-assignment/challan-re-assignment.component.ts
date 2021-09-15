
import { MatTableDataSource, MatDialog } from '@angular/material';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { eaMessage } from 'src/app/common/error-message/common-message.constants';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { SaveDialogBoxComponent } from '../../save-dialog-box/save-dialog-box.component';
import { CloseDialogBoxComponent } from '../../close-dialog-box/close-dialog-box.component';
import { EaDirectives } from 'src/app/common/directive/ea-directive';
@Component({
  selector: 'app-challan-re-assignment',
  templateUrl: './challan-re-assignment.component.html',
  styleUrls: ['./challan-re-assignment.component.css']
})
export class ChallanReAssignmentComponent implements OnInit {
  directiveObject = new EaDirectives(this._dialog);
  initiatiomdate = new Date((new Date()));
  // FormGroup
  reAssignmentForm: FormGroup;
  maxDate = new Date();
  isSubmitted = false;
  // FormControl
  subTreasuryNameCtrl: FormControl = new FormControl();
  errorMessages = eaMessage;
  // List values
  subTreasuryName_list: any[] = [
    { value: '1', viewValue: 'Sub Treasury Office, Mandvi, Bhuj' }
  ];
  // Display Element Data
  Element_Data: any[] = [
    {
      challanNo: '1001',
      amount: '2000.00',
      bankDate: '20-Aug-2019',
      majorHead: '8011',
      newChallan: '1',
    }
  ];
  // Table Source
  dataSource = new MatTableDataSource<any>(this.Element_Data);
  // Display Columns
  displayedColumns: any[] = ['srNo', 'challanNo', 'amount', 'bankDate', 'majorHead', 'newChallan'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private fb: FormBuilder, private _dialog: MatDialog) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.reAssignmentForm = this.fb.group({
      // FormGroup Fields
      fromDate: [''],
      todate: [''],
      majorHead: '0059',
      subTreasuryName: ['1'],
      tChallan: ['1'],
      tamt: ['2000.00'],
      lChallan: ['0'],
    });
  }
  // function to clear form
  clearForm() {
    this.reAssignmentForm.reset();
  }
  onSave() {
    if (this.reAssignmentForm.valid) {
      this.isSubmitted = false;
      const dialogRef = this._dialog.open(SaveDialogBoxComponent, {
        width: '500px'
      });

      dialogRef.afterClosed().subscribe(data => {

      });
    } else {
      this.isSubmitted = true;
    }

  }
}

