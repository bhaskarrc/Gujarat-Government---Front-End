import { MatTableDataSource, MatDialog } from '@angular/material';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { eaMessage } from 'src/app/common/error-message/common-message.constants';
import { WorkflowDetailsEaComponent } from '../../workflow-details-ea/workflow-details-ea.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { CloseDialogBoxComponent } from '../../close-dialog-box/close-dialog-box.component';
import { EaDirectives } from 'src/app/common/directive/ea-directive';

@Component({
  selector: 'app-re-distribute-sto-challan',
  templateUrl: './re-distribute-sto-challan.component.html',
  styleUrls: ['./re-distribute-sto-challan.component.css']
})
export class ReDistributeStoChallanComponent implements OnInit {
  initiatiomdate = new Date((new Date()));
  directiveObject = new EaDirectives(this.dialog);
  maxDate = new Date();
  // FormGroup
  reDistributeChallanForm: FormGroup;
  // FormControl
  distributeToCtrl: FormControl = new FormControl();
  subTreasuryCtrl: FormControl = new FormControl();
  isSubmitted = false;
  errorMessages = eaMessage;
  // List values
  subTreasury_list: any[] = [
    { value: '1', viewValue: 'Sub Treasury Office, Bhuj' },
    { value: '2', viewValue: 'Sub Treasury Office, Kalol' }
  ];

  distribute_list: any[] = [
    { value: '1', viewValue: 'Pratik K Shah' },
    { value: '2', viewValue: 'Mr. YOGIRAJ KISHORSINGH JADEJA' }
  ];
  // Display Element Data
  Element_Data: any[] = [
    {
      subTreasury: 'Sub Treasury Office, Kalol',
      majorHead: '8009',
      challanNo: '1',
      amount: '200.00',
      distribute: 'Pratik K Shah',
      distributeTo: ''
    },
  ];
  // Table Source
  dataSource = new MatTableDataSource<any>(this.Element_Data);
  // Display Columns
  displayedColumns: any[] = ['srNo', 'subTreasury', 'majorHead', 'challanNo', 'amount', 'distribute', 'distributeTo'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private fb: FormBuilder, public dialog: MatDialog) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.reDistributeChallanForm = this.fb.group({
      // FormGroup Fields
      fromDate: [''],
      toDate: [''],
      subTreasury: [''],
      treasuryCode: [''],
      distributeTo: ['1'],
    });
  }
  // function to clear form
  clearForm() {
    this.reDistributeChallanForm.reset();
  }
  deleteEntry(element) {
    this.dataSource.data.splice(element, 1);
    this.dataSource = new MatTableDataSource(this.dataSource.data);
  }

  onSave() {
    if (this.reDistributeChallanForm.valid) {
      this.isSubmitted = false;
    } else {
      this.isSubmitted = true;
    }

  }

}
