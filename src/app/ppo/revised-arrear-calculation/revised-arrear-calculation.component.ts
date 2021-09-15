import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { FormControl } from '@angular/forms';
import { PensionBasicDetail, CommonStructureForRevisedArrear, ReemployedDetails, RevisedArrearTable } from 'src/app/model/ppo';
import { CommonListing } from 'src/app/model/common-listing';
import { ListValue } from 'src/app/model/common-grant';

@Component({
  selector: 'app-revised-arrear-calculation',
  templateUrl: './revised-arrear-calculation.component.html',
  styleUrls: ['./revised-arrear-calculation.component.css']
})
export class RevisedArrearCalculationComponent implements OnInit {

  constructor() { }
  showAction: Boolean = true;
  show = false;
  // form controls
  revisedTypeCtrl: FormControl = new FormControl();
  oldMACtrl: FormControl = new FormControl();
  newMACtrl: FormControl = new FormControl();
  newDPCtrl: FormControl = new FormControl();
  oldDPCtrl: FormControl = new FormControl();
  attachmentTypeCodeCtrl: FormControl = new FormControl();
  // lists
  attachmentTypeCode: ListValue[] = [
    { value: '01', viewValue: 'Supporting Document' },
    { value: '02', viewValue: 'Sanction Order' },
    { value: '03', viewValue: 'Others' }
  ];
  revisedType_list: CommonListing[] = [
    { value: '1', viewValue: 'Old To Old' },
    { value: '2', viewValue: 'Old To New' },
    { value: '3', viewValue: 'New To New' },
    { value: '4', viewValue: '2006 To 2006' },
    { value: '5', viewValue: '2006 To 2016' },
    { value: '6', viewValue: '20016 To 2016' },
  ];

  oldMA_list: CommonListing[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' },
  ];

  newMA_list: CommonListing[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' },
  ];

  oldDP_list: CommonListing[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' },
  ];

  newDP_list: CommonListing[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' },
  ];

  // table data
  pensionBasicDetail_Element_Data: PensionBasicDetail[] = [
    {
      revisedType: '', oldBasic: '', effectiveFromOld: '', effectiveToOld: ' ', newBasic: '',
      effectiveFromNew: '', effectiveToNew: '', daDp: '', maOld: '', maNew: '', irOld: '', irNew: ''
    },
  ];

  common_Element_Data: CommonStructureForRevisedArrear[] = [
    { old: '', effectiveFromOld: '', effectiveToOld: ' ', new: '', effectiveFromNew: '', effectiveToNew: '' },
  ];
  common_Element_Data2: CommonStructureForRevisedArrear[] = [
    { old: '', effectiveFromOld: '', effectiveToOld: ' ', new: '', effectiveFromNew: '', effectiveToNew: '' },
  ];
  common_Element_Data3: CommonStructureForRevisedArrear[] = [
    { old: '', effectiveFromOld: '', effectiveToOld: ' ', new: '', effectiveFromNew: '', effectiveToNew: '' },
  ];
  common_Element_Data4: CommonStructureForRevisedArrear[] = [
    { old: '', effectiveFromOld: '', effectiveToOld: ' ', new: '', effectiveFromNew: '', effectiveToNew: '' },
  ];

  reemployed_Element_Data: ReemployedDetails[] = [
    { effectiveFromOld: '', effectiveToOld: ' ', effectiveFromNew: '', effectiveToNew: '' },
  ];
  RevisedArrearElement: RevisedArrearTable[] = [
    {
      revisedType: '', oldBasic: '', effectiveFromOld: '', effectiveToOld: '', newBasic: '',
      effectiveFromNew: '', effectiveToNew: '', daDp: '', maOld: '', maNew: '', irOld: '', irNew: ''
    }
  ];

  revisedArrearDataSource = new MatTableDataSource<RevisedArrearTable>(this.RevisedArrearElement);

  revisedArrearStructure = [
    'revisedType', 'oldBasic', 'effectiveFromOld', 'effectiveToOld', 'newBasic',
    'effectiveFromNew', 'effectiveToNew', 'daDp', 'maOld', 'maNew', 'irOld', 'irNew', 'action'
  ];

  pensionBasicDetailDataSource = new MatTableDataSource<PensionBasicDetail>(this.pensionBasicDetail_Element_Data);

  pensionBasicDetailColumn = [
    'revisedType',
    'oldBasic',
    'effectiveFromOld',
    'effectiveToOld',
    'newBasic',
    'effectiveFromNew',
    'effectiveToNew',
    'daDp',
    'maOld',
    'maNew',
    'irOld',
    'irNew',
    'action'
  ];

  commonDataSource = new MatTableDataSource<CommonStructureForRevisedArrear>(this.common_Element_Data);
  commonDataSource2 = new MatTableDataSource<CommonStructureForRevisedArrear>(this.common_Element_Data2);
  commonDataSource3 = new MatTableDataSource<CommonStructureForRevisedArrear>(this.common_Element_Data3);
  commonDataSource4 = new MatTableDataSource<CommonStructureForRevisedArrear>(this.common_Element_Data4);

  commonStructure = [
    'old',
    'effectiveFromOld',
    'effectiveToOld',
    'new',
    'effectiveFromNew',
    'effectiveToNew',
    'action'
  ];

  reEmployedDataSource = new MatTableDataSource<ReemployedDetails>(this.reemployed_Element_Data);

  reEmployedStructure = [
    'effectiveFromOld',
    'effectiveToOld',
    'effectiveFromNew',
    'effectiveToNew',
    'action'
  ];

  reEmployedStructureHead = ['head1', 'head2', 'head3'];

  onSubmit() { }
  resetForm() { }
  workflowDetails() { }

  // adds row in Revised Arrear Calculation
  addRevisedRow() {
    const p = this.revisedArrearDataSource.data;
    p.push({
      revisedType: '',
      oldBasic: '',
      effectiveFromOld: '',
      effectiveFromNew: '',
      effectiveToNew: '',
      effectiveToOld: '',
      maNew: '',
      maOld: '',
      irNew: '',
      irOld: '',
      daDp: '',
      newBasic: ''
    });
    this.revisedArrearDataSource.data = p;
  }

  // deletes row in Revised Arrear Calculation
  deleteRevisedRow(i) {
    this.revisedArrearDataSource.data.splice(i, 1);
    this.revisedArrearDataSource = new MatTableDataSource(this.revisedArrearDataSource.data);
  }

  // adds row in MA Details
  addMARow() {
    const p = this.commonDataSource.data;
    p.push({
      old: '',
      new: '',
      effectiveFromNew: '',
      effectiveFromOld: '',
      effectiveToNew: '',
      effectiveToOld: ''
    });
    this.commonDataSource.data = p;
  }

  // deletes row in MA Details
  deleteMARow(i) {
    this.commonDataSource.data.splice(i, 1);
    this.commonDataSource = new MatTableDataSource(this.commonDataSource.data);
  }

  // adds row in DP Details
  addDPRow() {
    const p = this.commonDataSource2.data;
    p.push({
      old: '',
      new: '',
      effectiveFromNew: '',
      effectiveFromOld: '',
      effectiveToNew: '',
      effectiveToOld: ''
    });
    this.commonDataSource2.data = p;
  }

  // deletes row in DP Details
  deleteDPRow(i) {
    this.commonDataSource2.data.splice(i, 1);
    this.commonDataSource2 = new MatTableDataSource(this.commonDataSource2.data);
  }

  // adds row in cvp details
  addCVPRow() {
    const p = this.commonDataSource3.data;
    p.push({
      old: '',
      new: '',
      effectiveFromNew: '',
      effectiveFromOld: '',
      effectiveToNew: '',
      effectiveToOld: ''
    });
    this.commonDataSource3.data = p;
  }

  // deletes row in cvp details
  deleteCVPRow(i) {
    this.commonDataSource3.data.splice(i, 1);
    this.commonDataSource3 = new MatTableDataSource(this.commonDataSource3.data);
  }

  // adds row in pension details
  addPensionRow() {
    const p = this.commonDataSource4.data;
    p.push({
      old: '',
      new: '',
      effectiveFromNew: '',
      effectiveFromOld: '',
      effectiveToNew: '',
      effectiveToOld: ''
    });
    this.commonDataSource4.data = p;
  }

  // deletes row in pension details
  deletePensionRow(i) {
    this.commonDataSource4.data.splice(i, 1);
    this.commonDataSource4 = new MatTableDataSource(this.commonDataSource4.data);
  }

  // adds reemployee
  addReEmpRow() {
    const p = this.reEmployedDataSource.data;
    p.push({
      effectiveFromNew: '',
      effectiveFromOld: '',
      effectiveToNew: '',
      effectiveToOld: ''
    });
    this.reEmployedDataSource.data = p;
  }
  // deletes reemployee
  deleteReEmpRow(i) {
    this.reEmployedDataSource.data.splice(i, 1);
    this.reEmployedDataSource = new MatTableDataSource(this.reEmployedDataSource.data);
  }

  ngOnInit() {

  }
}
