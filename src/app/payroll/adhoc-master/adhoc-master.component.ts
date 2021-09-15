import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { CommonDirective } from 'src/app/common/directive/validation.directive';
import { AdhocMaster } from 'src/app/model/payroll';

import { SubmitDialogComponent } from '../submit-dialog/submit-dialog.component';
import { CommonListing } from './../../model/common-listing';

@Component({
  selector: 'app-adhoc-master',
  templateUrl: './adhoc-master.component.html',
  styleUrls: ['./adhoc-master.component.css']
})
export class AdhocMasterComponent implements OnInit {

  demandCtrl: FormControl = new FormControl();
  majorHeadCtrl: FormControl = new FormControl();
  subMajorHeadCtrl: FormControl = new FormControl();
  minorHeadCtrl: FormControl = new FormControl();
  subHeadCtrl: FormControl = new FormControl();
  detailHeadCtrl: FormControl = new FormControl();
  objectClassCtrl: FormControl = new FormControl();

  demandList: CommonListing[] = [
    { value: '1', viewValue: '70 : Community Development' },
    { value: '2', viewValue: '71 : Rural Housing and Rural Development' },
    { value: '3', viewValue: '76 : Revenue Department' },
    { value: '4', viewValue: '79 : Relief on account Natural Calamities' },
    { value: '5', viewValue: '81 : Compensation and Assignment' },
    { value: '6', viewValue: '87 : Gujarat Capital Construction Scheme' },
  ];
  majorHeadList: CommonListing[] = [
    { value: '1', viewValue: '2251 : Secretariat-Social Services' },
    { value: '2', viewValue: '2049 : Interest Payments' },
    { value: '3', viewValue: '2215 : Water Supply and Sanitation' },
    { value: '4', viewValue: '3435 : Ecology and Environment' },
    { value: '5', viewValue: '4217 : Capital Outlay on Urban Development' },
    { value: '6', viewValue: '2202 : General Education' },
  ];
  subMajorHeadList: CommonListing[] = [
    { value: '1', viewValue: '8 : Other Transfer/Grants to States' },
    { value: '2', viewValue: '6 : Centrally Sponsored Schemes' },
  ];
  minorHeadList: CommonListing[] = [
    { value: '1', viewValue: '101 : Forest Conservation, Development and Regeneration' },
    { value: '2', viewValue: '102 : Small Scale Industries' },
    { value: '3', viewValue: '105 : Forest Produce' },
  ];
  subHeadList: CommonListing[] = [
    { value: '1', viewValue: '12 : Welfare of Schedule Castes' },
    { value: '2', viewValue: '13 : Welfare of Scheduled Tribes' },
    { value: '3', viewValue: '15 : Soil and Water Conservation' },
    { value: '4', viewValue: '16 : Community Development' },
    { value: '5', viewValue: '19 : Technical Education Polytechnics' },
  ];
  detailHeadList: CommonListing[] = [
    { value: '1', viewValue: '0 : HLT-28  Leprosy Control Programme' },
    { value: '2', viewValue: '0 : VKY-311 Post Metric State Scholarship for S.T. girls Students' },
    { value: '3', viewValue: '0 : VKY-9 Umbrella Scheme' },
  ];

  objectClassList: CommonListing[] = [
    { value: '1', viewValue: 'Object Class-1 (Personnel Services and Benefits)' },
    { value: '2', viewValue: 'Object Class-2 (Administrative Expenses)' },
    { value: '3', viewValue: 'Object Class-3 (Contractual Services and Supplies)' },
    { value: '4', viewValue: 'Object Class-4 (Grants Etc.)' },
    { value: '5', viewValue: 'Object Class-5 (Other Expenditure)' },
    { value: '6', viewValue: 'Object Class-6 (Acquisition of Capital Assets and Other Capital Expenditure)' },
    { value: '7', viewValue: 'Object Class-7 (Accounting Adjustment)' }
  ];
  Element_Data: AdhocMaster[] = [
    {
      type: '1',
      name: 'Adhoc Deduction 1',
      rowStatus: false,
      isSubmitted: false,
      demand: '1',
      majorHead: '1',
      subMajorHead: '1',
      minorHead: '1',
      subHead: '1',
      detailHead: '1',
      objectClass: '1',
      budgetHead: '	70:2251:8:101:12:0:C1',
    },
    {
      type: '1',
      name: 'Adhoc Deduction 2',
      rowStatus: false,
      isSubmitted: false,
      demand: '1',
      majorHead: '1',
      subMajorHead: '1',
      minorHead: '1',
      subHead: '1',
      detailHead: '1',
      objectClass: '1',
      budgetHead: '	70:2251:8:101:12:0:C1',
    },
    {
      type: '1',
      name: 'Adhoc Deduction 3',
      rowStatus: false,
      isSubmitted: false,
      demand: '1',
      majorHead: '1',
      subMajorHead: '1',
      minorHead: '1',
      subHead: '1',
      detailHead: '1',
      objectClass: '1',

      budgetHead: '	70:2251:8:101:12:0:C1',
    },
    {
      type: '2',
      name: 'Adhoc Earning 1',
      rowStatus: false,
      isSubmitted: false,
      demand: '1',
      majorHead: '1',
      subMajorHead: '1',
      minorHead: '1',
      subHead: '1',
      detailHead: '1',
      objectClass: '1',
      budgetHead: '	70:2251:8:101:12:0:C1',
    },
    {
      type: '2',
      name: 'Adhoc Earning 2',
      rowStatus: false,
      isSubmitted: false,
      demand: '1',
      majorHead: '1',
      subMajorHead: '1',
      minorHead: '1',
      subHead: '1',
      detailHead: '1',
      objectClass: '1',
      budgetHead: '	70:2251:8:101:12:0:C1',
    },
    {
      type: '2',
      name: 'Adhoc Earning 3',
      rowStatus: false,
      isSubmitted: false,
      demand: '1',
      majorHead: '1',
      subMajorHead: '1',
      minorHead: '1',
      subHead: '1',
      detailHead: '1',
      objectClass: '1',
      budgetHead: '	70:2251:8:101:12:0:C1',
    }

  ];
  adhocType_list: any[] = [
    { value: '1', viewValue: 'Adhoc Deduction' },
    { value: '2', viewValue: 'Adhoc Earning' }
  ];

  dataSource = new MatTableDataSource<any>(this.Element_Data);
  displayedColumns: string[] = [
    'position',
    'type',
    'name',
    'demand',
    'majorHead',
    'subMajorHead',
    'minorHead',
    'subHead',
    'detailHead',
    'objectClass',
    'budgetHead',
    'action'];
  adhocMasterForm: FormGroup;

  directiveObj = new CommonDirective();
  constructor(public fb: FormBuilder, public dialog: MatDialog) { }

  ngOnInit() {
    this.adhocMasterForm = this.fb.group({
      district: ['Ahmedabad'],
      officeName: ['Collector Office, Ahmedabad'],
      ddoNo: ['4265'],
      cardexNo: ['5622'],
    });
  }

  // enables and disables rows and action icon
  onSubmit() {
    let i = 0;

    const dialogRef = this.dialog.open(SubmitDialogComponent, {
      width: '250px',
      height: 'auto',
      data: ''
    }
    );
    dialogRef.afterClosed().subscribe(result => {
      for (i = 0; i < this.Element_Data.length; i++) {
        if (this.Element_Data[i].type !== ''
          && this.Element_Data[i].name !== ''
          && this.Element_Data[i].demand !== ''
          && this.Element_Data[i].majorHead !== ''
          && this.Element_Data[i].subMajorHead !== ''
          && this.Element_Data[i].minorHead !== ''
          && this.Element_Data[i].subHead !== ''
          && this.Element_Data[i].detailHead !== ''
          && this.Element_Data[i].objectClass !== ''
        ) {
          this.Element_Data[i].rowStatus = true;
          this.Element_Data[i].isSubmitted = true;
        } else {
          this.Element_Data[i].rowStatus = false;
          this.Element_Data[i].isSubmitted = false;
        }
      }
    });

  }
  // Delete row
  delete(index) {
    this.dataSource.data.splice(index, 1);
    this.dataSource = new MatTableDataSource(this.dataSource.data);
  }

  // Adds row
  add() {
    const data = this.dataSource.data;
    this.dataSource.data.push({
      name: '',
      type: '',
      demand: '',
      majorHead: '',
      subMajorHead: '',
      minorHead: '',
      subHead: '',
      detailHead: '',
      objectClass: '',
    });
    this.dataSource.data = data;
  }

  // To get Budget Head
  getBudgetHead(element) {
    if (
      element.demand &&
      element.majorHead &&
      element.subMajorHead &&
      element.minorHead &&
      element.subHead &&
      element.detailHead &&
      element.objectClass
    ) {
      const demandVal = this.directiveObj.getViewValue(this.demandList, element.demand).slice(0, 2);
      // tslint:disable-next-line: max-line-length
      const majorHeadVal = this.directiveObj.getViewValue(this.majorHeadList, element.majorHead).slice(0, 4);
      // tslint:disable-next-line: max-line-length
      const subMajorHeadVal = this.directiveObj.getViewValue(this.subMajorHeadList, element.subMajorHead).slice(0, 1);
      // tslint:disable-next-line: max-line-length
      const minorHeadVal = this.directiveObj.getViewValue(this.minorHeadList, element.minorHead).slice(0, 3);
      const subHeadVal = this.directiveObj.getViewValue(this.subHeadList, element.subHead).slice(0, 2);
      // tslint:disable-next-line: max-line-length
      const detailHeadVal = this.directiveObj.getViewValue(this.detailHeadList, element.detailHead).slice(0, 1);
      const objectClassVal = 'C' + element.objectClass;
      // tslint:disable-next-line: max-line-length
      const budgetHead = demandVal + ':' + majorHeadVal + ':' + subMajorHeadVal + ':' + minorHeadVal + ':' + subHeadVal + ':' + detailHeadVal + ':' + objectClassVal;
      console.log(budgetHead);

      element.budgetHead = budgetHead;
    }
  }
}
