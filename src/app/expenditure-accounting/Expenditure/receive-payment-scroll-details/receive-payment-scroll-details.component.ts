
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { CloseDialogBoxComponent } from '../../close-dialog-box/close-dialog-box.component';
import { EaDirectives } from 'src/app/common/directive/ea-directive';


@Component({
  selector: 'app-receive-payment-scroll-details',
  templateUrl: './receive-payment-scroll-details.component.html',
  styleUrls: ['./receive-payment-scroll-details.component.css']
})
export class ReceivePaymentScrollDetailsComponent implements OnInit {
  directiveObject = new EaDirectives(this._dialog);

  isSubmitted = false;
  // FormGroup
  scrollPaymentDetailsForm: FormGroup;
  // Display Element Data
  Element_Data: any[] = [
    {
      sDate: '14-May-2019',
      cNo: '124689',
      amt: '12,500.00',
      pName: 'ABC',
      cDate: '12-May-2019',
      advNo: '100002',
      paidDate: '14-May-2019',
    },

    {
      sDate: '14-May-2019',
      cNo: '124690',
      amt: '1500.00',
      pName: 'TEST',
      cDate: '12-May-2019',
      advNo: '100002',
      paidDate: '14-May-2019',
    },

    {
      sDate: '14-May-2019',
      cNo: '124691',
      amt: '12,700.00',
      pName: 'XYZ',
      cDate: '12-May-2019',
      advNo: '100002',
      paidDate: '14-May-2019',
    },

    {
      sDate: '14-May-2019',
      cNo: '124692',
      amt: '12,500.00',
      pName: 'PQR',
      cDate: '12-May-2019',
      advNo: '100002',
      paidDate: '14-May-2019',
    },

  ];
  // Display Columns
  displayedColumns: any[] = ['select', 'sDate', 'cNo', 'amt', 'pName', 'cDate', 'advNo', 'paidDate',
  ];

  // Table Source
  dataSource = new MatTableDataSource<any>(this.Element_Data);
  selection = new SelectionModel<any>(true, []);


  constructor(private fb: FormBuilder, private _dialog: MatDialog) { }

  ngOnInit() {
    this.scrollPaymentDetailsForm = this.fb.group({

    });
  }

  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} `;
  }
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  deleteRowRecovery(index) {
    this.dataSource.data.splice(index, 1);
    this.dataSource = new MatTableDataSource(
      this.dataSource.data
    );
  }


}

