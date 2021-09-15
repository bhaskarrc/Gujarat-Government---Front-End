import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import { MatTableDataSource, MatPaginator, MatDialog } from '@angular/material';
import { lfMessage } from 'src/app/common/error-message/common-message.constants';
import { DatePipe } from '@angular/common';
import { WorkflowDetailsLfComponent } from '../../workflow-details-lf/workflow-details-lf.component';
import { OutwardRegisterEntryList } from 'src/app/model/local-fund';
import { LocalFundDirective } from 'src/app/common/directive/local-fund-directive';


@Component({
  selector: 'app-outward-register-entry',
  templateUrl: './outward-register-entry.component.html',
  styleUrls: ['./outward-register-entry.component.css']
})
export class OutwardRegisterEntryComponent implements OnInit {

  directiveObject = new LocalFundDirective(this.dialog);
  outwardRegisterEntry: FormGroup;
  id = 1;
  letterTypeCtrl: FormControl = new FormControl();
  errorMessages = lfMessage;
  letterTypeList: ListValue[] = [
    { value: '1', viewValue: 'Letters from Governments' },
    { value: '2', viewValue: 'Letters from Head Quaters' },
    { value: '3', viewValue: 'Letters from AG Office' },
    { value: '4', viewValue: 'Other Letters' },
    { value: '5', viewValue: 'Avadhisar Notes/ U.O.R' },
    { value: '6', viewValue: 'Inquiry to another branch' },
    { value: '7', viewValue: 'All types of letters from Audit circle' },
    { value: '8', viewValue: 'RTI' }
  ];
  outwardModeCtrl: FormControl = new FormControl();
  outwardMode_list: ListValue[] = [
    { value: '1', viewValue: 'Speed Post' },
    { value: '2', viewValue: 'Normal Post' },
    { value: '3', viewValue: 'Register AD' },
    { value: '4', viewValue: 'Parcel' },
    { value: '5', viewValue: 'Hand to Hand' }
  ];
  Element_Data: OutwardRegisterEntryList[] = [
    {
      letterType: 'Letters from Governments', outwardDate: '16-Apr-2019', outwardNo: '12054',
      inwardLetterNo: '1201', whomToSend: 'GAD', outwardMode: 'Hand to Hand', amt: '0.00', remark: ''
    },
    {
      letterType: 'Other Letter', outwardDate: '20-Apr-2019', outwardNo: '12055',
      inwardLetterNo: '1202', whomToSend: 'Telephone Department', outwardMode: 'Normal Post', amt: '5.00', remark: ''
    },
    {
      letterType: 'Letters from Governments', outwardDate: '20-Apr-2019', outwardNo: '12056',
      inwardLetterNo: '1203', whomToSend: 'GAD', outwardMode: 'Hand to Hand', amt: '0.00', remark: ''
    },
    {
      letterType: 'RTI', outwardDate: '25-Apr-2019', outwardNo: '12057',
      inwardLetterNo: '1204', whomToSend: 'Mr  S V Ramoji', outwardMode: 'Register AD', amt: '15.00', remark: ''
    }

  ];
  dataSource = new MatTableDataSource<OutwardRegisterEntryList>(this.Element_Data);
  displayedColumns: any[] = ['position', 'letterType', 'outwardDate', 'outwardNo', 'inwardLetterNo',
    'whomToSend', 'outwardMode', 'amt', 'remarks', 'action'];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private fb: FormBuilder, private datePipe: DatePipe, public dialog: MatDialog) { }

  ngOnInit() {
    this.outwardRegisterEntry = this.fb.group({
      letterType: [''],
      outwardDate: [''],
      outwardNo: [''],
      inwardLetterNo: [''],
      whomToSend: [''],
      outwardMode: [''],
      amt: [''],
      remarks: [''],
    });
    this.dataSource.paginator = this.paginator;

  }

  onAdd() {
    this.dataSource.data.push({
      amt: this.outwardRegisterEntry.get('amt').value,
      inwardLetterNo: this.outwardRegisterEntry.get('inwardLetterNo').value,
      letterType: this.outwardRegisterEntry.get('letterType').value,
      outwardDate: this.datePipe.transform(this.outwardRegisterEntry.get('outwardDate').value, 'dd-MMM-yyyy'),
      outwardMode: this.outwardRegisterEntry.get('outwardMode').value,
      outwardNo: String(this.id),
      remark: this.outwardRegisterEntry.get('remarks').value,
      whomToSend: this.outwardRegisterEntry.get('whomToSend').value,
    });
    this.dataSource.data = this.dataSource.data;

    // increment Id No
    this.id++;
  }
  idCreation() {
    const id = Number(this.id) + 1;
    return id;
  }

  clearForm() {
    this.outwardRegisterEntry.reset();
    this.outwardRegisterEntry.patchValue({
      outwardNo: this.id
    });
  }

}
