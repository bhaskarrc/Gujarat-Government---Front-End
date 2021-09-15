import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { doiMessage } from 'src/app/common/error-message/common-message.constants';
import { ListValue } from 'src/app/model/common-grant';
import { CommonListing } from 'src/app/model/common-listing';
import * as moment from 'moment';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { outwardEntryDTO } from 'src/app/model/outward-entry';
import { OutwardService } from '../outward.service';


@Component({
  selector: 'app-outward-entry',
  templateUrl: './outward-entry.component.html',
  styleUrls: ['./outward-entry.component.css']
})
export class OutwardEntryComponent implements OnInit {
  // Form Group
  outwardEntryForm: FormGroup;
  // Date
  todayDate = Date.now();
  // Variable
  outwardNoValue = 695;
  errorMessage = doiMessage;
  // Form COntrol
  letterTypeCtrl: FormControl = new FormControl();
  branchUnitNameCtrl: FormControl = new FormControl();
  outwardModeCtrl: FormControl = new FormControl();

  //Counters for reference and inward number
  tentativeRefCounter = 0;
  referenceNumber = moment(this.todayDate).format('MM-YY') + "/DOI/INW/IE/" + String(++this.tentativeRefCounter).padStart(6, '0');
  tentativeInvNoCounter = 100000;
  inwardNoValue = moment(new Date()).format('MMYY') + '/' + String(++this.tentativeInvNoCounter);

  // List
  branchUnitName_list: ListValue[] = [
    { value: '1', viewValue: 'JPA' },
    { value: '2', viewValue: 'HBA' },
    { value: '3', viewValue: 'Direct Business' },
    { value: '4', viewValue: 'Co-Insurance' },
    { value: '5', viewValue: 'Re-Insurance' },
    { value: '6', viewValue: 'Account Admin' },

  ];
  letterType_list: CommonListing[] = [
    { value: '1', viewValue: 'Letter From Government' },
    { value: '2', viewValue: 'JPA Claim' },
    { value: '3', viewValue: 'JPA Legal Court Case' },
    { value: '4', viewValue: 'JPA Document' },
    { value: '5', viewValue: 'HBA Proposal' },
    { value: '6', viewValue: 'HBA Claim' },
    { value: '7', viewValue: 'DB Proposal' },
    { value: '8', viewValue: 'DB Claim' },
    { value: '9', viewValue: 'Co- Insurance Policy' },
    { value: '10', viewValue: 'Co-Insurance Proposal' },
    { value: '11', viewValue: 'Co- Insurance Document' },
    { value: '12', viewValue: 'Re-Insurance Proposal' },
    { value: '13', viewValue: 'Re-Insurance Policy' },
    { value: '14', viewValue: 'Re- Insurance Document' },
    { value: '15', viewValue: 'Admin Department Document' },
    { value: '16', viewValue: 'Other Document' },
  ];

  outwardMode_list: ListValue[] = [
    { value: '1', viewValue: 'Speed Post' },
    { value: '2', viewValue: 'Normal Post' },
    { value: '3', viewValue: 'Register AD' },
    { value: '4', viewValue: 'Hand To Hand' },
  ];

  ElementData: outwardEntryDTO[] = [

    // {
    //   outwardNo: '688',
    //   outwardDate: new Date('11/15/2019'),
    //   letterType: 'JPA Claim',
    //   letterNo: 'DOI/JPA/2019-20',
    //   letterDate: new Date('10/14/2019'),
    //   inwardLetterNo: '1244',
    //   whomToSent: 'DEO, Ahmedabad',
    //   amount: '15',
    //   branchUnitName: 'JPA',
    //   outwardMode: 'Normal Post'

    // },
    // {
    //   outwardNo: '689',
    //   outwardDate: new Date('11/15/2019'),
    //   letterType: 'JPA Claim',
    //   letterNo: 'DOI/JPA/2019-20',
    //   letterDate: new Date('10/15/2019'),
    //   inwardLetterNo: '1245',
    //   whomToSent: 'DAO, Rajkot',
    //   amount: '15',
    //   branchUnitName: 'JPA',
    //   outwardMode: 'Normal Post'

    // },
    // {
    //   outwardNo: '690',
    //   outwardDate: new Date('10/16/2019'),
    //   letterType: 'HBA Policy',
    //   letterNo: 'DOI/HBA/2019-20',
    //   letterDate: new Date('10/16/2019'),
    //   inwardLetterNo: '1247',
    //   whomToSent: 'Mr Narrotambhai D Rathwa',
    //   amount: '30',
    //   branchUnitName: 'HBA',
    //   outwardMode: 'Register AD'

    // },
    // {
    //   outwardNo: '691',
    //   outwardDate: new Date('10/17/2019'),
    //   letterType: 'Other Letter',
    //   letterNo: 'DOI/U-8/2019-20',
    //   letterDate: new Date('10/17/2019'),
    //   inwardLetterNo: 'NA',
    //   whomToSent: 'GIL',
    //   amount: 'NA',
    //   branchUnitName: 'Administrative',
    //   outwardMode: 'Hand To Hand'


    // },

  ];

  columns = [
    'position',
    'outward_no',
    'outward_dt',
    'letter_type',
    'inward_letter_no',
    'sent_to_details',
    'from_branch_or_unit',
    'outward_mode',
    'outward_amt',
    'remarks',
    'action'
  ];
  //  Table Source from Element
  dataSource = new MatTableDataSource(this.ElementData);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private fb: FormBuilder, private outwardService: OutwardService) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.outwardEntryForm = this.fb.group({
      outwardId: [],
      outwardNo: ['695'],
      outwardDate: [''],
      letterType: [''],
      inwardLetterNo: [''],
      whomToSent: [''],
      branchUnitName: [''],
      outwardMode: [''],
      amount: [''],
      remarks: ['']
    });
  }
  outwardEntryFormData() { }

  addRecord() {
    if (this.outwardEntryForm.valid) {
      let outwardForm = this.outwardEntryForm.value;
      let objIndex = this.ElementData.findIndex((obj => obj.outward_no == outwardForm.outwardNo))
      if (objIndex == -1) {
        let obj = {
          outward_id: outwardForm.outwardId,
          outward_no: outwardForm.outwardNo,
          outward_dt: moment(outwardForm.outwardDate).format('MM/DD/YYYY'),
          letter_type: outwardForm.letterType,
          inward_letter_no: outwardForm.inwardLetterNo,
          sent_to_details: outwardForm.whomToSent,
          from_branch_or_unit: outwardForm.branchUnitName,
          outward_mode: outwardForm.outwardMode,
          outward_amt: outwardForm.amount,
          remarks: outwardForm.remarks
        }
        console.log(obj)
        this.ElementData.push(obj)
        this.clearForm();
      } else {
        console.log(moment(outwardForm.outwardDate).format('MM/DD/YYYY'))
        this.ElementData[objIndex].outward_no = outwardForm.outwardNo;
        this.ElementData[objIndex].outward_dt = moment(outwardForm.outwardDate).format('MM/DD/YYYY');
        this.ElementData[objIndex].letter_type = outwardForm.letterType;
        this.ElementData[objIndex].inward_letter_no = outwardForm.letterNo;
        this.ElementData[objIndex].sent_to_details = outwardForm.whomToSent;
        this.ElementData[objIndex].outward_mode = outwardForm.outwardMode;
        this.ElementData[objIndex].outward_amt = outwardForm.amount;
        this.ElementData[objIndex].remarks = outwardForm.remarks;

        console.log(this.ElementData[objIndex])
      }
    }
    this.dataSource = new MatTableDataSource(this.ElementData);
  }

  clearForm() {
    this.outwardEntryForm.reset();
    this.outwardEntryForm.patchValue({
      outwardNo: Number(this.outwardNoValue) + 1
    });
  }
  onRemove(item) {
    this.ElementData = this.ElementData.filter(res => res.outward_no !== item.outward_no);
    this.dataSource = new MatTableDataSource(this.ElementData);
  }


  onEditForm(entry) {
    let test = {
      outwardNo: entry.outward_no,
      outwardDate: new Date(entry.outward_dt),
      letterType: entry.letter_type,
      inwardLetterNo: entry.inward_letter_no,
      whomToSent: entry.sent_to_details,
      outwardMode: entry.outward_mode,
      amount: entry.outward_amt,
      remarks: entry.remarks,
      outwardId: entry.outward_id
    }
    console.log(test);
    console.log(entry.inward_dt);
    this.outwardEntryForm.patchValue(test);
    //console.log(moment(entry.inward_dt).format('MM/d/YYYY'))
  }


  onSubmit() {
    this.outwardService.saveOutWardEntry(this.ElementData).subscribe(res => {
      if (res.status) {
        this.ElementData = [];
        alert(res.message);
      }
    })
    this.ElementData = [];
    this.dataSource = new MatTableDataSource(this.ElementData);////
  }

}
