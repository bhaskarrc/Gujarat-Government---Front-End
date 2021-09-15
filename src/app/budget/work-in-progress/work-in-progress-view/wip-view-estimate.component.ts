import { Component, OnInit, ElementRef } from '@angular/core';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { Router } from '@angular/router';
// tslint:disable-next-line: max-line-length
import { StandingChargeConsolidateHistoryComponent, ConfirmDialogModel } from '../../standing-charge-consolidation/standing-charge-consolidate-history/standing-charge-consolidate-history.component';
import { WorkInProgressElement, HeaderElement } from 'src/app/model/budget';



const ELEMENT_DATA: WorkInProgressElement[] = [
  { districtId: '1', districtName: 'Ahmedabad', workId: '123', workNo: '123', workName: 'Test',
  val1: '12.00', val2: '334.00', val3: '5466.00', val4: '5466.00', val5: '0.00', totProEx: '0.00',
  val6: '0.00', val7: '0.00', remarks: 'Test Remark',
   css: 'Test css'},
  { districtId: '2', districtName: 'Gandhinagar', workId: '333', workNo: '565', workName: 'Test',
  val1: '11.00', val2: '6578.00', val3: '4565.00', val4: '4565.00', val5: '0.00', totProEx: '0.00',
  val6: '0.00', val7: '0.00', remarks: 'Test Remark',
   css: 'Test css' },
  { districtId: '3', districtName: 'Rajkot', workId: '434', workNo: '333', workName: 'Test',
  val1: '454.00', val2: '674.00', val3: '4545.00', val4: '4545.00', val5: '0.00', totProEx: '0.00',
  val6: '0.00', val7: '0.00', remarks: 'Test Remark',
   css: 'Test css' },
  { districtId: '4', districtName: 'Bhavnagar', workId: '676', workNo: '567', workName: 'Test',
  val1: '676.00', val2: '233.00', val3: '7867.00', val4: '7867.00', val5: '0.00', totProEx: '0.00',
  val6: '0.00', val7: '0.00', remarks: 'Test Remark',
   css: 'Test css' },
     { districtId: '5', districtName: 'Vadodara', workId: '666', workNo: '764', workName: 'Test',
  val1: '789.00', val2: '344.00', val3: '7843.00', val4: '7843.00', val5: '0.00', totProEx: '0.00',
  val6: '0.00', val7: '0.00', remarks: 'Test Remark',
   css: 'Test css' },
  { districtId: '6', districtName: 'Jamnagar', workId: '787', workNo: '787', workName: 'Test',
  val1: '7878.00', val2: '456.00', val3: '5468.00', val4: '5468.00', val5: '0.00', totProEx: '0.00',
  val6: '0.00', val7: '0.00', remarks: 'Test Remark',
   css: 'Test css'},
  { districtId: '7', districtName: 'Surat', workId: '345', workNo: '334', workName: 'Test',
  val1: '6676.00', val2: '678.00', val3: '3424.00', val4: '3424.00', val5: '0.00', totProEx: '0.00',
  val6: '0.00', val7: '0.00', remarks: 'Test Remark',
   css: 'Test css'},
  { districtId: '8', districtName: 'Valsad', workId: '675', workNo: '464', workName: 'Test',
  val1: '6867.00', val2: '5656.00', val3: '8964.00', val4: '8964.00', val5: '0.00', totProEx: '0.00',
  val6: '0.00', val7: '0.00', remarks: 'Test Remark',
   css: 'Test css'},
  { districtId: '8', districtName: 'Batod', workId: '455', workNo: '464', workName: 'Test',
  val1: '1234.00', val2: '3456.00', val3: '8444.00', val4: '8444.00', val5: '0.00', totProEx: '0.00',
  val6: '0.00', val7: '0.00', remarks: 'Test Remark',
   css: 'Test css'},
  { districtId: '9', districtName: 'Amreli', workId: '576', workNo: '465', workName: 'Test',
  val1: '8987.00', val2: '4353.00', val3: '4654.00', val4: '4654.00', val5: '0.00', totProEx: '0.00',
  val6: '0.00', val7: '0.00', remarks: 'Test Remark',
   css: 'Test css'},
  { districtId: '10', districtName: 'Junagarh', workId: '445', workNo: '797', workName: 'Test',
  val1: '8954.00', val2: '544.00', val3: '4465.00', val4: '4465.00', val5: '0.00', totProEx: '0.00',
  val6: '0.00', val7: '0.00', remarks: 'Test Remark',
   css: 'Test css'},
  { districtId: '11', districtName: 'Kutch', workId: '343', workNo: '565', workName: 'Test',
  val1: '4655.00', val2: '6789.00', val3: '5763.00', val4: '5763.00', val5: '0.00', totProEx: '0.00',
  val6: '0.00', val7: '0.00', remarks: 'Test Remark',
   css: 'Test css'},
  { districtId: '12', districtName: 'Dahod', workId: '765', workNo: '363', workName: 'Test',
  val1: '5745.00', val2: '898.00', val3: '4546.00', val4: '4546.00', val5: '0.00', totProEx: '0.00',
  val6: '0.00', val7: '0.00', remarks: 'Test Remark',
   css: 'Test css'},
  { districtId: '13', districtName: 'Patan', workId: '366', workNo: '585', workName: 'Test',
  val1: '5474.00', val2: '676.00', val3: '5465.00', val4: '5465.00', val5: '0.00', totProEx: '0.00',
  val6: '0.00', val7: '0.00', remarks: 'Test Remark',
   css: 'Test css'},
  { districtId: '14', districtName: 'Bharuch', workId: '753', workNo: '585', workName: 'Test',
  val1: '9076.00', val2: '6767.00', val3: '4656.00', val4: '4656.00', val5: '0.00', totProEx: '0.00',
  val6: '0.00', val7: '0.00', remarks: 'Test Remark',
   css: 'Test css'},
  { districtId: '15', districtName: 'Dang', workId: '575', workNo: '965', workName: 'Test',
  val1: '5674.00', val2: '4552.00', val3: '4656.00', val4: '4656.00', val5: '0.00', totProEx: '0.00',
  val6: '0.00', val7: '0.00', remarks: 'Test Remark',
   css: 'Test css'}
];

@Component({
  selector: 'app-wip-view-estimate',
  templateUrl: './wip-view-estimate.component.html',
  styleUrls: ['./wip-view-estimate.component.css']
})
export class WipViewEstimateComponent implements OnInit {

  dataSourceWorkInProgress = new MatTableDataSource(ELEMENT_DATA);

  // tslint:disable-next-line: max-line-length
  displayedColumns: string[] = ['districtId', 'districtName', 'workId', 'workNo', 'workName',
   'val1', 'val2', 'val3', 'val4', 'val5', 'val6', 'totProEx', 'val7', 'remarks'];
  displayedColumnsCss: string[] = ['districtId', 'districtName', 'workId', 'workNo', 'workName',
   'val1', 'val2', 'val3', 'val4', 'val5', 'val6', 'totProEx', 'val7', 'remarks', 'css'];

  headerJson: HeaderElement[] = [
    {label: 'Financial Year', value: '2019-2020'},
    {label: 'Department', value: 'Education Department'},
    {label: 'Branch Name', value: 'Budget'},
    {label: 'Demand', value: '010: Other expenditure pertaining to Education Department'},
    {label: 'Budget Publication No.', value: '04: Education Department'},
    {label: 'Estimation From', value: 'DDO'},
    {label: 'Major Head', value: '2205: Art and Culture'},
    {label: 'Sub Major Head', value: '00: '},
    {label: 'Minor Head', value: '101: Fine Arts Education'},
    {label: 'Group Minor Head', value: 'Data'},
    {label: 'Sub Head', value: '01: Grants to Sangeet Natya Bharati'},
    {label: 'Object Head', value: '00'},
    {label: 'Detailed Head', value: '00: Grants to Sangeet Natya Bharati'},
    {label: 'Charged/Voted', value: 'Voted'},
    { label: 'CSS', value: 'Partially Centrally Sponsored Scheme' },
    { label: '% Ratio of State Burden', value: '60%'},
    { label: '% Ratio of CSS Burden', value: '40%'},
  ];

  districtColumns = ['position', 'district', 'expendature', 'talukaexpendature', 'gramexpendature'];

  brwoseData: any[] = [
    { attachmentType: 'Supporting Document', fileName: 'PAN.jpeg' },
  ];
  displayedBrowseColumns = ['position', 'attachmentType', 'fileName', 'action'];
  dataSourceBrowse = new MatTableDataSource(this.brwoseData);
  date: any = new Date();

  constructor(private router: Router,
    private el: ElementRef,
    public dialog: MatDialog, ) { }

  ngOnInit() {
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSourceWorkInProgress.filter = filterValue;
  }

  gotoListing() {
    this.router.navigate(['./budget/budget-list']);
  }
  openHistory(data) {
    this.showHistoryDialog();
  }
  showHistoryDialog(): void {

    const dialogData = new ConfirmDialogModel();

    const dialogRef = this.dialog.open(StandingChargeConsolidateHistoryComponent, {
      maxWidth: '400px',
      data: dialogData
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      console.log(dialogResult);
    });
  }

  calcVal1() {
    let sum = 0;
    this.dataSourceWorkInProgress.data.forEach((element, index) => {
        sum =
        sum + Number(element.val1);
    });
    return sum;
  }
  calcVal2() {
    let sum = 0;
    this.dataSourceWorkInProgress.data.forEach((element, index) => {
        sum =
        sum + Number(element.val2);
    });
    return sum;
  }
  calcVal3() {
    let sum = 0;
    this.dataSourceWorkInProgress.data.forEach((element, index) => {
        sum =
        sum + Number(element.val3);
    });
    return sum;
  }
  calcVal4() {
    let sum = 0;
    this.dataSourceWorkInProgress.data.forEach((element, index) => {
        sum =
        sum + Number(element.val4);
    });
    return sum;
  }
  calcVal5() {
    let sum = 0;
    this.dataSourceWorkInProgress.data.forEach((element, index) => {
        sum =
        sum + Number(element.val5);
    });
    return sum;
  }
  calcVal6() {
    let sum = 0;
    this.dataSourceWorkInProgress.data.forEach((element, index) => {
        sum =
        sum + Number(element.val6);
    });
    return sum;
  }
  calctotProEx() {
    let sum = 0;
    this.dataSourceWorkInProgress.data.forEach((element, index) => {
        sum =
        sum + Number(element.totProEx);
    });
    return sum;
  }
  calcVal7() {
    let sum = 0;
    this.dataSourceWorkInProgress.data.forEach((element, index) => {
        sum =
        sum + Number(element.val7);
    });
    return sum;
  }

}
