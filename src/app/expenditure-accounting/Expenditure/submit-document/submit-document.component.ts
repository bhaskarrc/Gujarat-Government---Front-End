import { MatTableDataSource, MatDialog } from '@angular/material';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { eaMessage } from 'src/app/common/error-message/common-message.constants';
import { WorkflowDetailsEaComponent } from '../../workflow-details-ea/workflow-details-ea.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { CloseDialogBoxComponent } from '../../close-dialog-box/close-dialog-box.component';
import { EaDirectives } from 'src/app/common/directive/ea-directive';
@Component({
  selector: 'app-submit-document',
  templateUrl: './submit-document.component.html',
  styleUrls: ['./submit-document.component.css']
})
export class SubmitDocumentComponent implements OnInit {
  directiveObject = new EaDirectives(this.dialog);
  initiatiomdate = new Date((new Date()));
  // FormGroup
  submitDocumentForm: FormGroup;
  maxDate = new Date();
  // FormControl
  typeCtrl: FormControl = new FormControl();
  isSubmitted = false;
  errorMessages = eaMessage;
  // List values
  type_list: any[] = [
    { value: '1', viewValue: 'Receipt ' },
    { value: '2', viewValue: 'Payment' }
  ];
  // Display Element Data
  Element_Data: any[] = [
    {
      majorHead: '8009',
      numberOfDoc: '1',
      amount: '1200.00',
      tcAmount: '0.0',
      grossAmount: '1200.00'
    },
  ];
  // Table Source
  dataSource = new MatTableDataSource<any>(this.Element_Data);

  // Display Columns
  displayedColumns: any[] = ['srNo', 'majorHead', 'numberOfDoc', 'amount', 'tcAmount', 'grossAmount'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private fb: FormBuilder, public dialog: MatDialog) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.submitDocumentForm = this.fb.group({
      // FormGroup Fields
      fromDate: [''],
      toDate: [''],
      type: [''],
      majorHead: ['', Validators.maxLength(4)],
    });
  }

  total(unit, datasource) {
    // tslint:disable-next-line: radix
    return datasource.reduce((summ, v) => summ += parseInt(v[unit]), 0);
  }
  // function to clear form
  clearForm() {
    this.submitDocumentForm.reset();
  }
  // function to delete row from table
  deleteEntry(element) {
    this.dataSource.data.splice(element, 1);
    this.dataSource = new MatTableDataSource(this.dataSource.data);

  }

  onSave() {
    if (this.submitDocumentForm.valid) {
      this.isSubmitted = false;
    } else {
      this.isSubmitted = true;
    }
  }
}
