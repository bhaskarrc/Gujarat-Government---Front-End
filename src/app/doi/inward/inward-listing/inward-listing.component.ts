import { Component, OnInit, ViewChild, Renderer2, ElementRef } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import { CommonListing } from 'src/app/model/common-listing';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { InwardService } from '../inward.service';
import * as moment from 'moment';
import { inwardEntryDTO } from 'src/app/model/inward-entry';
import { Router } from '@angular/router';


@Component({
  selector: 'app-inward-listing',
  templateUrl: './inward-listing.component.html',
  styleUrls: ['./inward-listing.component.css']
})
export class InwardListingComponent implements OnInit {
  // Date
  todayDate = new Date();
  inwardListing: FormGroup;
  // Form COntrol
  dateTypeCtrl: FormControl = new FormControl();
  letterTypeCtrl: FormControl = new FormControl();
  branchNameCtrl: FormControl = new FormControl();
  // List
  dateTypeList: ListValue[] = [
    { value: '1', viewValue: 'Inward Date' },
    { value: '2', viewValue: 'Letter/Cheque Date' }
    // { value: '3', viewValue: 'Cheque Date' }
  ];

  activeStatus: ListValue[] = [
    { value: '0', viewValue: 'Pending' },
    { value: '1', viewValue: 'Received' },
  ];

  branchName_list: ListValue[] = [
    { value: '1', viewValue: 'JPA' },
    { value: '2', viewValue: 'JPA Legal' },
    { value: '3', viewValue: 'HBA' },
    { value: '4', viewValue: 'DB' },
    { value: '5', viewValue: 'Co-Insurance' },
    { value: '6', viewValue: 'Re-Insurance' },
    { value: '7', viewValue: 'Admin' },
    { value: '8', viewValue: 'All' },
    { value: '9', viewValue: 'Other' },
  ];


  letterType_list: CommonListing[] = [
    { value: '1', viewValue: 'JPA Claim' },
    { value: '2', viewValue: 'JPA Document' },
    { value: '3', viewValue: 'JPA Legal Court Case' },
    { value: '4', viewValue: 'JPA Legal Document' },
    { value: '5', viewValue: 'HBA Proposal' },
    { value: '6', viewValue: 'HBA Claim' },
    { value: '7', viewValue: 'HBA Document' },
    { value: '8', viewValue: 'DB Proposal' },
    { value: '9', viewValue: 'DB Claim' },
    { value: '10', viewValue: 'DB Document' },
    { value: '11', viewValue: 'Co-Insurance Policy' },
    { value: '12', viewValue: 'Co-Insurance Claim' },
    { value: '13', viewValue: 'Co-Insurance Document' },
    { value: '14', viewValue: 'Re-Insurance Policy' },
    { value: '15', viewValue: 'Re-Insurance Document' },
    { value: '16', viewValue: 'Admin Department Document' },
    { value: '17', viewValue: 'Letter From State Government' },
    { value: '18', viewValue: 'Letter From Central Government' },
    { value: '19', viewValue: 'RTI' },
    { value: '20', viewValue: 'Other Document' },
    { value: '21', viewValue: 'Other Document' }
  ];

  ElementData: inwardEntryDTO[] = [];
  // Table Source
  columns = [
    'position', 'inward_no', 'inward_dt', 'inward_type', 'letter_type', 'letter_no', 'letter_dt', 'from_where_details', 'branch_name', 'doi_employee_name', 'bank_name', 'bank_branch_name', 'amount', 'status', 'action'
  ];
  // data Source from element
  dataSource = new MatTableDataSource(this.ElementData);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild('inwardType') inwardType: ElementRef;
  constructor(private fb: FormBuilder, private inwardService: InwardService, private router: Router, private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit() {

    this.dataSource.paginator = this.paginator;
    this.inwardListing = this.fb.group({
      dateType: ['Inward Date'],
      fromDate: [''],
      endDate: [''],
      letterType: [''],
      branchName: [''],
      receivedFrom: [''],
      inwardType: [''],
      chequeNo: [''],
      status: ['']
    });

    this.fetchDataOnLoad();

    this.inwardService.triggerFetchData.subscribe(data => {
      this.fetchDataOnLoad();
    })

  }

  fetchDataOnLoad() {
    let obj = {
      'from_dt': moment(new Date()).format('YYYY-MM-DD')
    };
    this.inwardService.getInwardEntryByElement(obj).subscribe(res => {
      console.log("CALLED");
      if (res.success) {
        this.ElementData = res.data;
      }
      this.dataSource = new MatTableDataSource(this.ElementData);
    })
  }

  reset() {
    this.inwardListing.reset();
  }

  onSubmit() {
    let obj = {};

    if (this.inwardListing.value.dateType != "") {
      obj['date_type'] = this.inwardListing.value.dateType;
    }

    if (this.inwardListing.value.fromDate != "") {
      obj['from_dt'] = moment(this.inwardListing.value.fromDate).format('YYYY-MM-DD');
    }

    if (this.inwardListing.value.endDate != "") {
      obj['end_dt'] = moment(this.inwardListing.value.endDate).format('YYYY-MM-DD');
    }

    if (this.inwardListing.value.inwardType != "") {
      let inwardType = this.inwardListing.value.inwardType;
      obj['inward_type'] =  this.inwardListing.value.inwardType;

      if (inwardType == "Letter") {

        this.inwardListing.get('chequeNo').setValue("");

        if (this.inwardListing.value.letterType != "") {
          obj['letter_type'] = this.inwardListing.value.letterType;
        }
        if (this.inwardListing.value.branchName != "") {
          obj['doi_branch_id'] = this.inwardListing.value.branchName;
        }
      } else if (inwardType == "Cheque") {

        this.inwardListing.get('letterType').setValue("");
        this.inwardListing.get('branchName').setValue("");

        if (this.inwardListing.value.chequeNo != "") {
          console.log("in chq")
          obj['cheque_no'] = this.inwardListing.value.chequeNo;
        }
      }
    }

    if (this.inwardListing.value.receivedFrom != "") {
      obj['from_where_details'] = this.inwardListing.value.receivedFrom;
    }

    if (this.inwardListing.value.status != "") {
      obj['active_status'] = this.inwardListing.value.status;
    }

    this.inwardService.getInwardEntryByElement(obj).subscribe(res => {
      if (res.success) {
        this.ElementData = res.data;
        this.ElementData.filter(res => {
          this.branchName_list.map(branch => branch.value === res.doi_branch_id ? res["branch_name"] = branch.viewValue : "")
        })
        this.dataSource = new MatTableDataSource(this.ElementData);
      }
    })
  }

  goToInwardEntry(entry) {
    console.log(entry)
    this.router.navigate(['./doi/inward/inward-entry', { "entry": JSON.stringify(entry), "source": "inward-listing" }])
  }
}
