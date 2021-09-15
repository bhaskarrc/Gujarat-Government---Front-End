import { Component, OnInit, Inject } from '@angular/core';
import { MatTableDataSource, MatDialog, MatDialogRef } from '@angular/material';
import { SUBDETAILHEADlist } from 'src/app/model/grant-excess-demand-details';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import { WorkflowDetailsGrantComponent } from '../workflow-details-grant/workflow-details-grant.component';
import { SelectionModel } from '@angular/cdk/collections';
import { Router } from '@angular/router';

export interface HeaderElement {
  label: string | '';
  value: string | '';
}

export interface PeriodicElement {
  position: string;
  objClass: string;
  bEState: string;
  bECss: string;
  ddoName: string;
  relGrant: string;
  adiDemand: string;
  edbDDO: string;
  probableExpenditure: string;
  agwDDO: string;
  gtrDDO: string;
  agwHOD: string;
  remarks: string;
  document: string;
  status: string;
  lyingWith: string;
  accessDemand: string;
  select: string;

}

@Component({
  selector: 'app-grant-excess-demand-details',
  templateUrl: './grant-excess-demand-details.component.html',
  styleUrls: ['./grant-excess-demand-details.component.css']
})

export class GrantExcessDemandDetailsComponent implements OnInit {
  // displayedColumns: string[] = ['select', 'position', 'name', 'weight', 'symbol'];
  // dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  // selection = new SelectionModel<PeriodicElement>(true, []);


  excessDemandForm: FormGroup;
  // selection: any;
  SevenPaySelectedAll: Boolean = false;
  selectedSixAll: Boolean = false;


  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    private router: Router
  ) { }


  SUBDETAILHEAD: SUBDETAILHEADlist[] = [
    {
      position: 1, objClass: 'Class 1',
      // bEState: ' 70: 2251: 08: 101: 12: 00: Item 2(New Item Estimate)',
      bEState: '200.0000',
      bECss: 30.0000, ddoName: 'DDO 1', relGrant: '10.0000',
      adiDemand: '10.0000', edbDDO: 5.0000, probableExpenditure: 200.0000,
      agwDDO: 8.0000, gtrDDO: '', agwHOD: 1.0000, status: 'Pending', lyingWith: 'User 1'
    },
    {
      position: 2, objClass: '',
      // bEState: '70:221:08:101:12:00:Item 2(New Item Estimate)',
      bEState: '200.0000',
      bECss: '0.0000', ddoName: 'DDO 2', relGrant: '30.0000',
      adiDemand: '20.0000', edbDDO: 5.0000, probableExpenditure: 200.0000,
      agwDDO: 8.0000, gtrDDO: '', agwHOD: '', status: 'Pending', lyingWith: 'User 1'
    },
    {
      position: 3, objClass: 'Class 2',
      // bEState: '70: 2251: 08: 104: 12: 00: Item 3(New Item Estimate)',
      bEState: '200.0000',
      bECss: 30.0000, ddoName: 'DDO 3', relGrant: '30.0000',
      adiDemand: '30.0000', edbDDO: 5.0000, probableExpenditure: 200.0000,
      agwDDO: 8.0000, gtrDDO: '', agwHOD: 1.0000, status: 'Pending', lyingWith: 'User 1'
    },
    {
      position: 4, objClass: '',
      // bEState: '70:2251:0844:101:12:00:Item 4(New Item Estimate)',
      bEState: '200.0000',
      bECss: '0.0000', ddoName: 'DDO 4', relGrant: '20.0000',
      adiDemand: '15.0000', edbDDO: 5.0000, probableExpenditure: 200.0000,
      agwDDO: 8.0000, gtrDDO: '', agwHOD: '', status: 'Pending', lyingWith: 'User 1'
    },
    {
      position: 5, objClass: 'Class 3',
      // bEState: ' 70: 42251: 08: 101: 12: 00: Item 1(New Item Estimate)',
      bEState: '200.0000',
      bECss: 30.0000, ddoName: 'DDO 5', relGrant: '22.0000',
      adiDemand: '20.0000', edbDDO: 5.0000, probableExpenditure: 200.0000,
      agwDDO: 8.0000, gtrDDO: '', agwHOD: 1.0000, status: 'Pending', lyingWith: 'User 1'
    },
    {
      position: 6, objClass: '',
      // bEState: '70:24251:08:101:12:00:Item 1(New Item Estimate)',
      bEState: '200.0000',
      bECss: '0.0000',
      ddoName: 'DDO ', relGrant: '30.0000', adiDemand: '30.0000', edbDDO: 5.0000, probableExpenditure: 200.0000,
      agwDDO: 8.0000, gtrDDO: '', agwHOD: '', status: 'Pending', lyingWith: 'User 1'
    },
  ];
  displayedSubDetailHeadColumns: string[] = [
    'checkBox', 'position', 'objClass', 'bEState', 'bECss',
    'ddoName',
    // 'relGrant',
    'adiDemand', 'edbDDO', 'probableExpenditure',
    'agwDDO', 'gtrDDO', 'agwHOD', 'status', 'lyingWith', 'accessDemand', 'action'
    // 'action'
  ];
  subDetailHeadSource = new MatTableDataSource<any>(this.SUBDETAILHEAD);
  // selection = new SelectionModel(true, []);
  selection = new SelectionModel<PeriodicElement>(true, []);
  selectedAll = false;
  initiatiomdate = new Date((new Date()));

  headerJson: HeaderElement[] = [
    // { label: 'Scheme Name', value: '70:2251:08:101:12:00: Item Name 1 ' },
    { label: 'Budget Head', value: '001:2404:00:800:01:00 Item 2 (New Item Estimate)' },
    { label: 'Scheme Type', value: 'State' },
    { label: 'Budget Estimate', value: '300.0000' },
    { label: 'Revised Estimates', value: '100.0000' },
    { label: 'Available Grant', value: '10.0000' }
  ];


  ddono_list: any[] = [
    { value: '01', viewValue: 'DDO No -1' },
    { value: '02', viewValue: 'DDO No -2' }
  ];

  SchemeType_list: any[] = [
    { value: '1', viewValue: 'State' },
    { value: '2', viewValue: 'CSS' }
  ];


  ddoNoCtrl: FormControl = new FormControl();
  SchemeTypeCtrl: FormControl = new FormControl();





  ngOnInit() {
    this.excessDemandForm = this.fb.group({
      ddoNO: [''],
      schemeType: ['']
    });

  }

  decimalPoint(data, key) {
    if (data[key]) {
      data[key] = Number(data[key]).toFixed(4);
    }
  }
  decimalKeyPress(event: any) {
    const pattern = /^\d+(\.\d{0,4})?$/;
    const inputChar = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    let tempstr = event.target.value;
    tempstr += inputChar;
    if (!pattern.test(tempstr)) {
      event.preventDefault();
      return false;
    }
  }


  bEStateTotal(): number {
    let bEState = 0;
    this.subDetailHeadSource.data.forEach((data) => {
      bEState = bEState + Number(data.bEState);
    });
    return bEState;
  }


  revisedBudget(): number {
    let bECss = 0;
    this.subDetailHeadSource.data.forEach((data) => {
      bECss = bECss + Number(data.bECss);
    });
    return bECss;
  }

  // edrDDOTotal(): number {
  //   let edrDDO = 0;
  //   this.subDetailHeadSource.data.forEach((data) => {
  //     edrDDO = edrDDO + Number(data.edrDDO)
  //   })
  //   return edrDDO;
  // }
  edbDDOTotal(): number {
    let edbDDO = 0;
    this.subDetailHeadSource.data.forEach((data) => {
      edbDDO = edbDDO + Number(data.edbDDO);
    });
    return edbDDO;
  }

  probableExpenditureTotal(): number {
    let probableExpenditure = 0;
    this.subDetailHeadSource.data.forEach((data) => {
      probableExpenditure = probableExpenditure + Number(data.probableExpenditure);
    });
    return probableExpenditure;
  }
  agwDDOTotal(): number {
    let agwDDO = 0;
    this.subDetailHeadSource.data.forEach((data) => {
      agwDDO = agwDDO + Number(data.agwDDO);
    });
    return agwDDO;
  }

  agwHODTotal(): number {
    let agwHOD = 0;
    this.subDetailHeadSource.data.forEach((data) => {
      agwHOD = agwHOD + Number(data.agwHOD);
    });
    return agwHOD;
  }

  grantRealeseDDo(): number {
    let gtrDDO = 0;
    this.subDetailHeadSource.data.forEach((data) => {
      gtrDDO = gtrDDO + Number(data.gtrDDO);
    });
    return gtrDDO;
  }

  releaseGrant(): number {
    let relGrant = 0;
    this.subDetailHeadSource.data.forEach((data) => {
      relGrant = relGrant + Number(data.relGrant);
    });
    return relGrant;
  }

  adiDemand(): number {
    let adiDemand = 0;
    this.subDetailHeadSource.data.forEach((data) => {
      adiDemand = adiDemand + Number(data.adiDemand);
    });
    return adiDemand;
  }


  goToDashboard() {
  }

  workflowDetails(): void {
    const dialogRef = this.dialog.open(WorkflowDetailsGrantComponent, {
      width: '1200px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  selectAll() {
    this.subDetailHeadSource.data.forEach(_d => {
      _d.selected = this.selectedAll;
    });
    this.subDetailHeadSource = new MatTableDataSource(this.subDetailHeadSource.data);
  }

  checkIfAllSelected() {
    this.selectedAll = this.subDetailHeadSource.data.every((item) => {
      return item.selected === true;
    });
  }

  route() {
    this.router.navigate(['/request-for-grant/request-for-grant-list']);
  }

  view() {
    const dialogRef = this.dialog.open(GrantviewDialogComponent, {
      width: '800px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


}


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'grant-view-dialog',
  templateUrl: 'grant-view-dialog.html',
})

// tslint:disable-next-line:component-class-suffix
export class GrantviewDialogComponent {
  SUBDETAILHEAD: any[] = [
    {
      position: ' 1',
      nameofuser: '',
      desiofuser: '',
      roleofuser: '',
      grantToBeRelease: '',
      date: '',
      remarks: '',

    }
  ];


  displayedSubDetailHeadColumns: string[] = [
    'position',
    'nameofuser',
    'desiofuser',
    'roleofuser',
    'grantToBeReleaseState',
    'grantToBeReleaseCSS',
    'date',
    'remarks'
  ];

  subDetailHeadSource = new MatTableDataSource<any>(this.SUBDETAILHEAD);

  constructor(
    public dialogRef: MatDialogRef<GrantviewDialogComponent>

  ) { }


}


