import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { CommonListing } from 'src/app/model/common-listing';
import { ListValue } from 'src/app/model/common-grant';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { OutwardService } from '../outward.service';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { outwardEntryDTO } from 'src/app/model/outward-entry';

export interface InwardEntry {
  outwardNo: string;
  outwardDate: Date;
  letterType: string;
  letterNo: string;
  letterDate: Date;
  inwardLetterNo: string;
  whomToSent: string;
  branchUnitName: String;
  outwardMode: string;
  amount: string;
  remark: string;
}
@Component({
  selector: 'app-outward-listing',
  templateUrl: './outward-listing.component.html',
  styleUrls: ['./outward-listing.component.css']
})
export class OutwardListingComponent implements OnInit {
  //Date
  todayDate = new Date();
  // Form Group
  outwardListing: FormGroup;
  // Form Control
  letterTypeCtrl: FormControl = new FormControl();
  outwardModeCtrl: FormControl = new FormControl();
  // List
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
    { value: '0', viewValue: '' },
    { value: '1', viewValue: 'Speed Post' },
    { value: '2', viewValue: 'Normal Post' },
    { value: '3', viewValue: 'Register AD' },
    { value: '4', viewValue: 'Hand To Hand' },
  ];

  branchName_list: ListValue[] = [
    { value: '1', viewValue: 'JPA' },
    { value: '2', viewValue: 'HBA' },
    { value: '3', viewValue: 'Direct Business' },
    { value: '4', viewValue: 'Co-Insurance' },
    { value: '5', viewValue: 'Re-Insurance' },
    { value: '6', viewValue: 'Account Admin' },
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
    //   outwardMode: 'Normal Post',
    //   remark: ''

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
    //   outwardMode: 'Normal Post',
    //   remark: ''
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
    //   outwardMode: 'Register AD',
    //   remark: ''

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
    //   outwardMode: 'Hand To Hand',
    //   remark: ''


    // },

  ];

  columns = [
    'position',
    'outward_no',
    'outward_dt',
    'letter_type',
    'letter_no',
    'letter_dt',
    'inward_letter_no',
    'sent_to_details',
    'branch_unit_name',
    'outward_mode',
    'outward_amt',
    'remarks'
  ];
  // Table Source
  dataSource = new MatTableDataSource(this.ElementData);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private fb: FormBuilder, private outwardService: OutwardService, private router: Router) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.outwardListing = this.fb.group({
      outwardNo: [''],
      outwardDate: [''],
      letterType: [''],
      letterDate: [''],
      outwardMode: [''],
      letterNo: ['']
    });
  }


  onSubmit() {
    let obj = {};
    if (this.outwardListing.value.outwardNo != "") {
      obj['outward_no'] = this.outwardListing.value.outwardNo;
    }
    if (this.outwardListing.value.outwardDate != "") {
      obj['outward_dt'] = moment(this.outwardListing.value.outwardDate).format('YYYY-MM-DD');
    }
    if (this.outwardListing.value.letterType != "") {
      console.log(this.outwardListing.value.letterType);
      obj['letter_type'] = this.letterType_list.filter(letterType => letterType.value == this.outwardListing.value.letterType)[0].viewValue;
      console.log(obj);
    }
    if (this.outwardListing.value.letterNo != "") {
      obj['letter_no'] = this.outwardListing.value.letterNo;
    }
    if (this.outwardListing.value.letterDate != "") {
      obj['letter_dt'] = this.outwardListing.value.letterDate;
    }
    if (this.outwardListing.value.outwardMode != "") {
      obj['outward_mode'] = this.outwardListing.value.outwardMode;
    }
    this.outwardService.getOutWardEntryByElement(obj).subscribe(res => {
      if (res.success) {
        console.log(res);
        this.ElementData = res.data;
        this.ElementData.filter(res => {
          this.branchName_list.map(branch => branch.value === res.frm_branch_id ? res["branch_unit_name"] = branch.viewValue : "")
        })
        this.dataSource = new MatTableDataSource(this.ElementData);
      }
    })
  }

  goToOutwardEntry(entry) {
    //console.log(entry)
    this.router.navigate(['./doi/outward/outward-entry', { "entry": JSON.stringify(entry) }])
  }

  // reset Form
  reset() {
    this.outwardListing.reset();
  }
}
