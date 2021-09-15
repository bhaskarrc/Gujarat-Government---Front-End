import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, NgForm, Validators } from '@angular/forms';
import { doiMessage } from 'src/app/common/error-message/common-message.constants';
import { ListValue } from 'src/app/model/common-grant';
import { CommonListing } from 'src/app/model/common-listing';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { InwardService } from '../inward.service';
import { inwardEntryDTO } from 'src/app/model/inward-entry';
import * as moment from 'moment';
import { ActivatedRoute } from '@angular/router';
import { formatDate } from '@angular/common';
import { Router } from '@angular/router';
import { InwardListingComponent } from '../inward-listing/inward-listing.component';

@Component({
  selector: 'app-inward-entry',
  templateUrl: './inward-entry.component.html',
  styleUrls: ['./inward-entry.component.css']
})
export class InwardEntryComponent implements OnInit {

  @ViewChild(InwardListingComponent) list: InwardListingComponent
  @ViewChild('formDirective') private formDirective: NgForm;

  @Input()
  selectedBranch;

  selectedIndex: number = 0;

  // Populate via API calls
  letterTypeToDisplay: any[];
  bankBranchNamesToDisplay: any[];

  // Form Group
  inwardEntryForm: FormGroup;

  // Date
  todayDate = Date.now();

  //Counters for reference and inward number
  tentativeRefCounter = 0;
  referenceNumber = moment(this.todayDate).format('MM-YY') + "/DOI/INW/IE/" + String(++this.tentativeRefCounter).padStart(6, '0');
  tentativeInvNoCounter = 100000;
  inwardNoValue = moment(new Date()).format('MMYY') + '/' + String(++this.tentativeInvNoCounter);

  // VARIABLE
  uplaoded: boolean = false;
  isReadonly = "false";
  isRequired = 'true';
  errorMessage = doiMessage;
  isUpdate: boolean;
  isReadOnlyForUpdate: boolean = true;

  // Form Control
  letterTypeCtrl: FormControl = new FormControl();
  branchNameCtrl: FormControl = new FormControl();
  inwardTypeCtrl: FormControl = new FormControl();
  bankNameCtrl: FormControl = new FormControl();
  bankBranchNameCtrl: FormControl = new FormControl();

  // List
  bank_name = [];
  branch_name = [];

  inward_type: ListValue[] = [
    { value: '1', viewValue: 'Letter' },
    { value: '2', viewValue: 'Cheque' },
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

  letterType_list = [
    {
      value: 'JPA', viewValue: [
        { value: '1', viewValue: 'JPA Claim' },
        { value: '2', viewValue: 'JPA Document' }
      ]
    }, {
      value: 'JPA Legal', viewValue: [
        { value: '3', viewValue: 'JPA Legal Court Case' },
        { value: '4', viewValue: 'JPA Legal Document' }
      ]
    }, {
      value: 'HBA', viewValue: [
        { value: '5', viewValue: 'HBA Proposal' },
        { value: '6', viewValue: 'HBA Claim' },
        { value: '7', viewValue: 'HBA Document' }
      ]
    }, {
      value: 'DB', viewValue: [
        { value: '8', viewValue: 'DB Proposal' },
        { value: '9', viewValue: 'DB Claim' },
        { value: '10', viewValue: 'DB Document' },
      ]
    }, {
      value: 'Co-Insurance', viewValue: [
        { value: '11', viewValue: 'Co-Insurance Policy' },
        { value: '12', viewValue: 'Co-Insurance Claim' },
        { value: '13', viewValue: 'Co-Insurance Document' }
      ]
    }, {
      value: 'Re-Insurance', viewValue: [
        { value: '14', viewValue: 'Re-Insurance Policy' },
        { value: '15', viewValue: 'Re-Insurance Document' }
      ]
    }, {
      value: 'Admin', viewValue: [
        { value: '16', viewValue: 'Admin Department Document' },
        { value: '17', viewValue: 'Letter From State Government' },
        { value: '18', viewValue: 'Letter From Central Government' },
        { value: '19', viewValue: 'RTI' }
      ]
    }, {
      value: 'All', viewValue: [
        { value: '20', viewValue: 'Other Document' },
      ]
    }, {
      value: 'Other', viewValue: [
        { value: '21', viewValue: 'Other Document' },
      ]
    },
  ];

  attachmentTypeCode = [{ value: '1', viewValue: 'Supporting Document' },
  { value: '2', viewValue: 'Sanction Order' },
  { value: '3', viewValue: 'Others' }];


  ElementData: inwardEntryDTO[] = [];

  // Table Source
  columns = [
    'position', 'inwardNo', 'inwardDate', 'inwardType', 'letterType', 'letterNo', 'letterDate', 'fromWhichPlacePerson', 'branchName', 'employeeName', 'action'
  ];
  dataSource = new MatTableDataSource(this.ElementData);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private fb: FormBuilder, private inwardService: InwardService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    // this.inwardEntryForm = this.fb.group({
    //   inwardNo: [this.inwardNoValue, [Validators.required]],
    //   inwardDate: [moment(Date.now()).format('DD-MMM-YYYY'), [Validators.required]],
    //   inwardId: ['', [Validators.required]],
    //   inwardType: ['Letter', [Validators.required]],
    //   letterType: ['', [Validators.required]],
    //   letterNo: ['', [Validators.required]],
    //   letterDate: ['', [Validators.required]],
    //   letterDetail: ['', [Validators.required]],
    //   branchName: ['', [Validators.required]],
    //   chequeNo: ['', [Validators.required]],
    //   chequeType: ['', [Validators.required]],
    //   amount: ['', [Validators.required]],
    //   chequeDate: ['', [Validators.required]],
    //   bankName: ['', [Validators.required]],
    //   bankBranchName: ['', [Validators.required]],
    //   fromWhichPlacePerson: ['', [Validators.required]],
    //   employeeName: [''],

    // });

    this.inwardEntryForm = this.fb.group({
      inwardId: ['', [Validators.required]],
      inwardNo: [this.inwardNoValue, [Validators.required]],
      inwardDate: [moment(Date.now()).format('DD-MMM-YYYY'), [Validators.required]],
      inwardType: ['Letter', [Validators.required]],
      letter: this.fb.group({
        branchName: ['', [Validators.required]],
        letterType: ['', [Validators.required]],
        letterNo: ['', [Validators.required]],
        letterDate: ['', [Validators.required]],
        letterDetail: ['', [Validators.required]]
      }),
      cheque: this.fb.group({
        chequeNo: ['', [Validators.required]],
        chequeType: ['', [Validators.required]],
        amount: ['', [Validators.required]],
        chequeDate: ['', [Validators.required]],
        bankName: ['', [Validators.required]],
        bankBranchName: ['', [Validators.required]]
      }),
      fromWhichPlacePerson: ['', [Validators.required]],
      employeeName: [''],
    });


    this.route.params.subscribe(params => {
      if (Object.keys(params).length > 0) {
        this.isUpdate = true;
        this.isReadOnlyForUpdate = false;
        let EntryDetail = JSON.parse(params.entry)
        this.onEditForm(EntryDetail)
      }
    });


    this.inwardService.getBankBranchByBankNames().subscribe(res => {
      this.bank_name = res.data[0];
      this.branch_name = res.data[1];
    });

    if (new Date().getDate() != 1 && !this.isUpdate) {
      this.inwardService.getMaxInwardNumber().subscribe(res => {

        let inwardDate = moment(new Date()).format('MMYY');
        let referenceDate = moment(new Date()).format('MM-YY');

        let inwardNoCounter = res.data[0].split(",")[0].split("/")[1];
        let referenceNoCounter = res.data[0].split(",")[1].split("/")[4];

        // this.tentativeInvNoCounter = Number(inwardNoCounter.substring(0, inwardNoCounter.indexOf//("0"))) + 1;

        this.tentativeInvNoCounter = Number(inwardNoCounter) + 1;

        this.tentativeRefCounter = Number(referenceNoCounter) + 1;

        // if (res.success && res.data[0] != "") {
        //   this.inwardNoValue = inwardDate + "/" + String(this.tentativeInvNoCounter).padEnd(6, '0');
        //   this.inwardEntryForm.patchValue({
        //     inwardNo: this.inwardNoValue
        //   });
        // }

        if (res.success && res.data[0] != "") {
          this.inwardNoValue = inwardDate + "/" + String(this.tentativeInvNoCounter);
          this.inwardEntryForm.patchValue({
            inwardNo: this.inwardNoValue
          }); //1
        }

        if (res.success && res.data[1] != "") {
          this.referenceNumber = referenceDate + "/DOI/INW/IE/" + String(this.tentativeRefCounter).padStart(6, '0');
        }
      })
    }

  }

  populateLetterType(branchValue) {
    this.letterTypeToDisplay = [];
    this.letterType_list.filter(item => {
      if (item.value === branchValue) {
        this.letterTypeToDisplay = item.viewValue;
      }
    });
  }

  populateBankBranches(bankName) {
    console.log("bank branch called")
    console.log(bankName)
    this.bankBranchNamesToDisplay = [];

    this.branch_name.filter(branch => {
      if (branch.bank === bankName) {
        this.bankBranchNamesToDisplay = branch.branches;
      }
    });

    if (this.bankBranchNamesToDisplay.length == 0) {
      this.bankBranchNamesToDisplay[0] = "N/A";
    }
  }

  getInWardEntry() {
    this.inwardService.getInwardEntryById(15).subscribe(res => {
    })
  }

  addRecord() {
    if (this.inwardEntryForm.controls["letter"].valid || this.inwardEntryForm.controls["cheque"].valid) {

      this.selectedIndex++;
      let inwardForm = this.inwardEntryForm.value;
      console.log(inwardForm);
      if (inwardForm.inwardType == "Letter") {
        console.log(this.inwardEntryForm.value);
        this.inwardEntryForm.get('cheque').reset();
        console.log(this.inwardEntryForm.value);
        let objIndex = this.ElementData.findIndex(obj => obj.inward_no == inwardForm.inwardNo);
        if (objIndex == -1) {
          let obj = {
            inward_no: inwardForm.inwardNo,
            inward_dt: moment(inwardForm.inwardDate).format('MM/DD/YYYY'),
            inward_type: inwardForm.inwardType,

            branch_name: inwardForm.letter.branchName,
            letter_type: inwardForm.letter.letterType,
            letter_no: inwardForm.letter.letterNo,
            letter_dt: moment(inwardForm.letter.letterDate).format('MM/DD/YYYY'),
            letter_details: inwardForm.letter.letterDetail,

            from_where_details: inwardForm.fromWhichPlacePerson,
            doi_employee_name: inwardForm.employeeName,
            reference_no: this.referenceNumber
          }
          this.ElementData.push(obj); //error

          this.inwardNoValue = this.inwardEntryForm.value.inwardNo.split("/")[0]
            + "/" + String(++this.tentativeInvNoCounter);

          // this.inwardNoValue = this.inwardEntryForm.value.inwardNo.split("/")[0]
          //   + "/" + String(++this.tentativeInvNoCounter).padEnd(6, '0');
          this.clearForm();
        } else {
          this.ElementData[objIndex].inward_no = inwardForm.inwardNo;
          this.ElementData[objIndex].inward_dt = moment(inwardForm.inwardDate).format('MM/DD/YYYY');
          this.ElementData[objIndex].inward_type = inwardForm.inwardType;

          this.ElementData[objIndex].branch_name = inwardForm.letter.branchName;
          this.ElementData[objIndex].letter_type = inwardForm.letter.letterType;
          this.ElementData[objIndex].letter_no = inwardForm.letter.letterNo;
          this.ElementData[objIndex].letter_dt = moment(inwardForm.letter.letterDate).format('MM/DD/YYYY');
          this.ElementData[objIndex].letter_details = inwardForm.letter.letterDetail;

          this.ElementData[objIndex].from_where_details = inwardForm.fromWhichPlacePerson;
          this.ElementData[objIndex].doi_employee_name = inwardForm.employeeName;
          this.clearForm();
        }
      } else if (inwardForm.inwardType == "Cheque") {
        this.inwardEntryForm.get('letter').reset();
        let objIndex = this.ElementData.findIndex(obj => obj.inward_no == inwardForm.inwardNo);
        if (objIndex == -1) {
          let obj = {
            inward_no: inwardForm.inwardNo,
            inward_dt: moment(inwardForm.inwardDate).format('MM/DD/YYYY'),
            inward_type: inwardForm.inwardType,

            cheque_no: inwardForm.cheque.chequeNo,
            cheque_type: inwardForm.cheque.chequeType,
            amount: inwardForm.cheque.amount,
            cheque_dt: moment(inwardForm.cheque.chequeDate).format('MM/DD/YYYY'),
            bank_name: inwardForm.cheque.bankName,
            bank_branch_name: inwardForm.cheque.bankBranchName,

            from_where_details: inwardForm.fromWhichPlacePerson,
            doi_employee_name: inwardForm.employeeName,
            reference_no: this.referenceNumber,
          }
          this.ElementData.push(obj);
          this.inwardNoValue = this.inwardEntryForm.value.inwardNo.split("/")[0]
            + "/" + String(++this.tentativeInvNoCounter);
          this.clearForm();
        } else {
          this.ElementData[objIndex].inward_no = inwardForm.inwardNo;
          this.ElementData[objIndex].inward_dt = moment(inwardForm.inwardDate).format('MM/DD/YYYY');
          this.ElementData[objIndex].inward_type = inwardForm.inwardType;

          this.ElementData[objIndex].cheque_no = inwardForm.letter.chequeNo;
          this.ElementData[objIndex].cheque_type = inwardForm.letter.chequeType;
          this.ElementData[objIndex].cheque_dt = moment(inwardForm.letter.chequeDate).format('MM/DD/YYYY');
          this.ElementData[objIndex].amount = inwardForm.letter.amount;
          this.ElementData[objIndex].bank_name = inwardForm.letter.bankName;
          this.ElementData[objIndex].bank_branch_name = inwardForm.letter.bankBranchName;

          this.ElementData[objIndex].from_where_details = inwardForm.fromWhichPlacePerson;
          this.ElementData[objIndex].doi_employee_name = inwardForm.employeeName;
          this.clearForm();
        }
      }
      this.dataSource = new MatTableDataSource(this.ElementData);
    }
  }


  clearForm() {
    console.log("clear form called")
    let inwardNoValue = this.inwardNoValue;
    let inwardType = this.inwardEntryForm.value.inwardType;
    this.inwardEntryForm.reset();
    // this.inwardEntryForm.controls.branch_name.reset();
    this.formDirective.resetForm();
    this.inwardEntryForm.patchValue({
      inwardNo: inwardNoValue,
      inwardDate: moment(new Date()).format('DD-MMM-YYYY'),
      inwardType: inwardType
    }); //2
  }

  onEditForm(entry) {
    // this.inwardEntryForm.reset();

    this.referenceNumber = entry.reference_no;
    console.log(this.referenceNumber);
    if (entry.inward_type == "Letter") {
      let entries = {
        inwardNo: entry.inward_no,
        inwardDate: moment(entry.inward_dt).format('DD-MMM-YYYY'),
        inwardType: entry.inward_type,
        letter: {
          branchName: entry.branch_name,
          letterNo: entry.letter_no,
          letterType: entry.letter_type,
          letterDate: new Date(entry.letter_dt),
          letterDetail: entry.letter_details
        },
        fromWhichPlacePerson: entry.from_where_details,
        inwardId: entry.inward_id,
        employeeName: entry.doi_employee_name
      }
      this.inwardEntryForm.patchValue(entries);
    } else if (entry.inward_type == "Cheque") {
      let entries = {
        inwardNo: entry.inward_no,
        inwardDate: moment(entry.inward_dt).format('DD-MMM-YYYY'),
        inwardType: entry.inward_type,
        cheque: {
          chequeNo: entry.cheque_no,
          chequeType: entry.cheque_type,
          amount: entry.amount,
          chequeDate: new Date(entry.cheque_dt),
          bankName: entry.bank_name,
          bankBranchName: entry.bank_branch_name
        },
        fromWhichPlacePerson: entry.from_where_details,
        inwardId: entry.inward_id,
        employeeName: entry.doi_employee_name
      }

      this.inwardEntryForm.patchValue(entries);
      console.log(this.inwardEntryForm);
    }
  }

  onRemove(item) {
    this.ElementData = this.ElementData.filter(res => res.inward_no !== item.inward_no);
    this.dataSource = new MatTableDataSource(this.ElementData);
  }

  onSubmit() {
    this.inwardService.saveInwardEntry(this.ElementData).subscribe(res => {
      if (res.status) {
        this.ElementData = [];
        alert(res.message);
      }
    })
    this.referenceNumber = moment(this.todayDate).format('MM-YY') + "/DOI/INW/IE/" + String(++this.tentativeRefCounter).padStart(6, '0');
    this.ElementData = [];
    this.clearForm();
    this.dataSource = new MatTableDataSource(this.ElementData);////
    //this.router.navigate(['./doi/inward/inward-listing']);
  }

  onListing() {
    this.router.navigate(['./doi/inward/inward-listing']);
    this.inwardService.doTrigger();
  }

  onUpload() {
    this.uplaoded = true;
  }

}
