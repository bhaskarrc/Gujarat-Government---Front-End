import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { OutwardRegisterEntryList } from 'src/app/model/local-fund';

@Component({
  selector: 'app-outward-register-report',
  templateUrl: './outward-register-report.component.html',
  styleUrls: ['./outward-register-report.component.css']
})
export class OutwardRegisterReportComponent implements OnInit {
  outwardRegisterReport: FormGroup;
  letterTypeCtrl: FormControl = new FormControl();
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
    },
    {
      letterType: 'Letters from Governments', outwardDate: '25-Apr-2019', outwardNo: '12058',
      inwardLetterNo: '1205', whomToSend: 'GAD', outwardMode: 'Hand to Hand', amt: '0.00', remark: ''
    },
    {
      letterType: 'Other Letter', outwardDate: '26-Apr-2019', outwardNo: '12059',
      inwardLetterNo: '1206', whomToSend: 'GIL', outwardMode: 'Normal Post', amt: '5.00', remark: ''
    },
    {
      letterType: 'Letters from Governments', outwardDate: '26-Apr-2019', outwardNo: '12060',
      inwardLetterNo: '1207', whomToSend: 'Finance Department', outwardMode: 'Hand to Hand', amt: '0.00', remark: ''
    },
    {
      letterType: 'RTI', outwardDate: '27-Apr-2019', outwardNo: '12061',
      inwardLetterNo: '1208', whomToSend: 'AG Rajkot', outwardMode: 'Register AD', amt: '15.00', remark: ''
    },
    {
      letterType: 'Letters from Governments', outwardDate: '27-Apr-2019', outwardNo: '12062',
      inwardLetterNo: '1209', whomToSend: 'CM Office', outwardMode: 'Hand to Hand', amt: '0.00', remark: ''
    },
    {
      letterType: 'RTI', outwardDate: '25-Apr-2019', outwardNo: '12063',
      inwardLetterNo: '1210', whomToSend: 'Telephone Department', outwardMode: 'Register AD', amt: '15.00', remark: ''
    }

  ];
  dataSource = new MatTableDataSource<OutwardRegisterEntryList>(this.Element_Data);
  displayedColumns: any[] = ['position', 'letterType', 'outwardDate', 'outwardNo', 'inwardLetterNo',
    'whomToSend', 'outwardMode', 'amt', 'remarks'];
  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.outwardRegisterReport = this.fb.group({
      outwardFromDate: [''],
      outwardToDate: [''],
      letterType: [''],
      outwardMode: [''],
      outwardNo: ['']
    });
    this.dataSource.paginator = this.paginator;

  }
  search() { }

}
