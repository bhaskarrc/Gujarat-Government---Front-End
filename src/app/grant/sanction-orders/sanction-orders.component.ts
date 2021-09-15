
import { Component, OnInit, Inject, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MatTableDataSource, MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { WorkflowDetailsGrantComponent } from '../workflow-details-grant/workflow-details-grant.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {
  SanctionOrderGrantList,
  SanctionOrderreApproation, SanctionOrdersurrenderOrder,
  SanctionOrdergrantSurrenderList, SanctionOrderApproationDemandList, SanctionOrderheadUnderIncreaseList, SanctionOrderheadUnderReduceList, SanctionOrdersurrenderAmountList
} from 'src/app/model/sanction-orders';
import { BrwoseDatagrant, ListValue } from 'src/app/model/common-grant';

@Component({
  selector: 'app-sanction-orders',
  templateUrl: './sanction-orders.component.html',
  styleUrls: ['./sanction-orders.component.css']
})
export class SanctionOrdersComponent implements OnInit {
  createGrantOrder: FormGroup;
  public toggleButton = true;
  addincrease = true;
  departmentName_list: ListValue[] = [
    { value: '1', viewValue: 'Finance Department' },
  ];
  majorHead_list: ListValue[] = [
    { value: '1', viewValue: '0020 : Corporation Tax' },
    { value: '2', viewValue: '0021: Taxes on Income other than Corporation Tax' },
    { value: '3', viewValue: '0028 : Other Taxes on Income and Expenditure' },
    { value: '4', viewValue: '0029 : Land Revenue' },
    { value: '5', viewValue: '0030 : Stamps and Registration Fees' },
  ];
  revenueCapital_list: ListValue[] = [
    { value: '1', viewValue: 'Revenue' },
    { value: '2', viewValue: 'Capital' }
  ];
  votedCharged_list: ListValue[] = [
    { value: '1', viewValue: 'Voted' },
    { value: '2', viewValue: 'Charged' }
  ];
  attachmentTypeCode: ListValue[] = [
    { value: '01', viewValue: 'Supporting Document' },
    { value: '02', viewValue: 'Sanction Order' },
    { value: '03', viewValue: 'Others' }
  ];
  finYear: ListValue[] = [
    { value: '1', viewValue: '2020-2021' },
    { value: '2', viewValue: '2019-2020' },

  ];
  Grant_list: ListValue[] = [
    { value: '1', viewValue: '040' },
    { value: '2', viewValue: '041' },
    { value: '3', viewValue: '042' },

  ];
  headerJso: any[] = [
    { label: 'Department Name :', value: 'Finance Department' },
    { label: 'Budget Manual Form XI', },
    { label: 'Grant :', value: '001:Agriculture and Co-operation Department' },
    { label: 'Major Head :', value: '0020 : Corporation Tax' },
    { label: 'Amount of Surrender :', value: '58745895 ' },
    { label: 'Revenue/Capital :', value: 'Revenue' },
    { label: 'Charged/Voted :', value: 'Voted' },
  ];
  headerJsoAppro: any[] = [
    { label: 'Grant No :', value: '047:Industries and Mines Department' },
    { label: 'Major Head :', value: '0021: Taxes on Income other than Corporation Tax' },
    { label: 'Revenue/Capital :', value: 'Revenue' },
    { label: 'Charged/Voted :', value: 'Voted' },
    { label: 'Re-appropriation Amount :', value: '58745895 ' },
  ];
  brwoseData: BrwoseDatagrant[] = [{
    name: undefined,
    file: undefined,
    uploadedBy: ''
  }];
  @ViewChild(MatPaginator) paginator1: MatPaginator;
  @ViewChild(MatSort) sort1: MatSort;

  @ViewChild(MatPaginator) paginator2: MatPaginator;
  @ViewChild(MatSort) sort2: MatSort;

  @ViewChild(MatPaginator) paginator3: MatPaginator;
  @ViewChild(MatSort) sort3: MatSort;

  @ViewChild(MatPaginator) paginator4: MatPaginator;
  @ViewChild(MatSort) sort4: MatSort;

  @ViewChild(MatPaginator) paginator5: MatPaginator;
  @ViewChild(MatSort) sort5: MatSort;

  @ViewChild(MatPaginator) paginator6: MatPaginator;
  @ViewChild(MatSort) sort6: MatSort;

  @ViewChild(MatPaginator) paginator7: MatPaginator;
  @ViewChild(MatSort) sort7: MatSort;

  @ViewChild(MatPaginator) paginator8: MatPaginator;
  @ViewChild(MatSort) sort8: MatSort;
  fileBrowseIndex: number;
  displayedBrowseColumns = ['attachmentType', 'fileName', 'browse', 'uploadedFileName', 'uploadedBy', 'action'];
  dataSourceBrowse = new MatTableDataSource(this.brwoseData);
  initiatiomdate = new Date((new Date()));
  majorHeadCtrl: FormControl = new FormControl();
  revenueCapitalCtrl: FormControl = new FormControl();
  votedChargedCtrl: FormControl = new FormControl();
  departmentNameCtrl: FormControl = new FormControl();
  attachmentTypeCodeCtrl: FormControl = new FormControl();
  finYearCtrl: FormControl = new FormControl();
  grantNoCtrl: FormControl = new FormControl();
  createSanction: FormGroup;
  grantOrderList: SanctionOrderGrantList[] = [
    {
      noOfSurrenderOrder: '13458755', dateOfSurendar: '12-May-2020', grantRopiration: '001', majorHead: '0020',
      votedOrCharged: 'Voted', revenue: 'Revenue', amount: '8400000', toolTipDataMH: '0020: Corporation Tax',
    },
    {
      noOfSurrenderOrder: '17845965', dateOfSurendar: '12-May-2020', grantRopiration: '002', majorHead: '0030',
      votedOrCharged: 'Charged', revenue: 'Capital', amount: '9400000', toolTipDataMH: '0030: Stamps and Registration Fees',
    },
    {
      noOfSurrenderOrder: '13458755', dateOfSurendar: '12-May-2020', grantRopiration: '001', majorHead: '0020',
      votedOrCharged: 'Voted', revenue: 'Revenue', amount: '8400000', toolTipDataMH: '0020: Corporation Tax',
    },
  ];


  reApproationList: SanctionOrderreApproation[] = [
    {
      noOfSurrenderOrder: '13458755', dateOfSurendar: '12-May-2020', grantRopiration: '001', majorHead: '0020',
      votedOrCharged: 'Voted', revenue: 'Revenue', amount: '8400000', toolTipDataMH: '0020: Corporation Tax',
    },
    {
      noOfSurrenderOrder: '17845965', dateOfSurendar: '12-May-2020', grantRopiration: '002', majorHead: '0030',
      votedOrCharged: 'Charged', revenue: 'Capital', amount: '9400000', toolTipDataMH: '0030: Stamps and Registration Fees',
    },
    {
      noOfSurrenderOrder: '13458755', dateOfSurendar: '12-May-2020', grantRopiration: '001', majorHead: '0020',
      votedOrCharged: 'Voted', revenue: 'Revenue', amount: '8400000', toolTipDataMH: '0020: Corporation Tax',
    },
  ];
  surrenderOrderList: SanctionOrdersurrenderOrder[] = [
    {
      orderNo: '12457894', dateOfOrder: '12-May-2020', majorHead: '0022', votedOrCharged: 'Charged',
      revenue: 'Revenue', amount: '3400000', toolTipDataMH: '0022: Taxes on Agricultural Income',
    },
    {
      orderNo: '12457894', dateOfOrder: '12-May-2020', majorHead: '0023', votedOrCharged: 'Voted',
      revenue: 'Capital', amount: '3400000', toolTipDataMH: '0023: Hotel Receipts Tax',
    },
    {
      orderNo: '12457894', dateOfOrder: '12-May-2020', majorHead: '0023', votedOrCharged: 'Voted',
      revenue: 'Capital', amount: '3400000', toolTipDataMH: '0023: Hotel Receipts Tax',
    },
  ];
  reApproationDemandList: SanctionOrderApproationDemandList[] = [
    {
      orderNo: '12457894', dateOfOrder: '12-May-2020', majorHead: '0022', votedOrCharged: 'Charged',
      revenue: 'Revenue', amount: '3400000', toolTipDataMH: '0022: Taxes on Agricultural Income',
    },
    {
      orderNo: '12457894', dateOfOrder: '12-May-2020', majorHead: '0023', votedOrCharged: 'Voted',
      revenue: 'Capital', amount: '3400000', toolTipDataMH: '0023: Hotel Receipts Tax',
    },
    {
      orderNo: '12457894', dateOfOrder: '12-May-2020', majorHead: '0023', votedOrCharged: 'Charged',
      revenue: 'Revenue', amount: '3400000', toolTipDataMH: '0023: Hotel Receipts Tax',
    },
  ];
  grantSurrenderList: SanctionOrdergrantSurrenderList[] = [
    {
      headOfAccount: '70: 2251: 08: 101: 12:00:Finance Department', nomenclature: 'Finance Department', sanctionedGrant: '898',
      amountOfSurrender: '65', finalGrantAfterSurrenderOfSavings: '125',
      reasonOfSavings: 'Unspent Grant', itemName: 'Item 1',
    },
    {
      headOfAccount: '72: 2251: 08: 101: 12:01:Education Department', nomenclature: 'Education Department', sanctionedGrant: '898',
      amountOfSurrender: '65', finalGrantAfterSurrenderOfSavings: '125',
      reasonOfSavings: 'Unspent Grant', itemName: 'Item 2',
    },
    {
      headOfAccount: '70: 2251: 08: 101: 12:01:Finance Department', nomenclature: 'Finance Department', sanctionedGrant: '898',
      amountOfSurrender: '65', finalGrantAfterSurrenderOfSavings: '125',
      reasonOfSavings: 'Unspent Grant', itemName: 'Item 2',
    },
  ];
  headUnderIncreaseList: SanctionOrderheadUnderIncreaseList[] = [
    {
      headOfAccount: '70: 2251: 08: 101: 12:00:Finance Department', nomenClature: 'Finance Department',
      actualExpKnownPriation: '70:Finance Department', reApproation: '65', amountOfReappropriation: '125',
      amountWillStantReapproation: '68', explationReductionGrant: 'Unspent Grant', itemName: 'Item 1',
    },
    {
      headOfAccount: '70: 2251: 08: 101: 12:01:Finance Department', nomenClature: 'Finance Department',
      actualExpKnownPriation: '70:Finance Department', reApproation: '65', amountOfReappropriation: '125',
      amountWillStantReapproation: '68', explationReductionGrant: 'Unspent Grant', itemName: 'Item 2',
    },
    {
      headOfAccount: '70: 2251: 08: 101: 12:00:Finance Department', nomenClature: 'Finance Department',
      actualExpKnownPriation: '70:Finance Department', reApproation: '65', amountOfReappropriation: '125',
      amountWillStantReapproation: '68', explationReductionGrant: 'Unspent Grant', itemName: 'Item 2',
    },
  ];
  headUnderReduceList: SanctionOrderheadUnderReduceList[] = [
    {
      headOfAccount: '70: 2251: 08: 101: 12:00:Finance Department', nomenClature: 'Finance Department',
      actualExpKnownPriation: '70:Finance Department', reApproation: '65', amountOfReappropriation: '125',
      amountWillStantReapproation: '68', explationReductionGrant: 'Unspent Grant', itemName: 'Item 1',
    },
    {
      headOfAccount: '70: 2251: 08: 101: 12:01:Finance Department', nomenClature: 'Finance Department',
      actualExpKnownPriation: '70:Finance Department', reApproation: '65', amountOfReappropriation: '125',
      amountWillStantReapproation: '68', explationReductionGrant: 'Unspent Grant', itemName: 'Item 2',
    },
    {
      headOfAccount: '70: 2251: 08: 101: 12:01:Finance Department', nomenClature: 'Finance Department',
      actualExpKnownPriation: '70:Finance Department', reApproation: '65', amountOfReappropriation: '125',
      amountWillStantReapproation: '68', explationReductionGrant: 'Unspent Grant', itemName: 'Item 3',
    },
  ];
  surrenderAmountList: SanctionOrdersurrenderAmountList[] = [
    {
      voted: 145875, charged: 879548, revenue: 874598, captial: 874589
    },
    // {
    //   voted: 478954, charged: 5784598, revenue: 9874589, captial: 987452
    // },
  ];
  surrenderDisplayColumns: string[] = [
    'voted', 'charged', 'revenue', 'captial'
  ];

  grantOrderDisplayColumn: string[] = [
    'SrNo', 'noOfSurrenderOrder', 'dateOfSurendar', 'grantRopiration', 'majorHead', 'votedOrCharged', 'revenue', 'amount'
  ];
  reApproationDisplayColumn: string[] = [
    'SrNo', 'noOfSurrenderOrder', 'dateOfSurendar', 'grantRopiration', 'majorHead', 'votedOrCharged', 'revenue', 'amount'
  ];
  surrenderOrderDisplayColoumns: string[] = [
    'SrNo', 'orderNo', 'dateOfOrder', 'majorHead', 'votedOrCharged', 'revenue', 'amount'
  ];
  reAppropriationDisplayColoumns: string[] = [
    'SrNo', 'orderNo', 'dateOfOrder', 'majorHead', 'votedOrCharged', 'revenue', 'amount'
  ];
  grantOrderDisplaySavingColumn: string[] = [
    'SrNo', 'headOfAccount', 'nomenclature', 'sanctionedGrant', 'amountOfSurrender',
    'finalGrantAfterSurrenderOfSavings', 'reasonOfSavings',
  ];
  headsUnderProposedIncreaseColoumns: string[] = [
    'SrNo', 'headOfAccount', 'nomenClature', 'actualExpKnownPriation',
    'reApproation', 'amountOfReappropriation', 'amountWillStantReapproation', 'explationReductionGrant'
  ];
  headsUnderProposedReduceColoumns: string[] = [
    'SrNo', 'headOfAccount', 'nomenClature', 'actualExpKnownPriation',
    'reApproation', 'amountOfReappropriation', 'amountWillStantReapproation', 'explationReductionGrant'
  ];
  sanctionOrderDataSource = new MatTableDataSource(this.grantOrderList);
  reApprpriationOrderDataSource = new MatTableDataSource(this.reApproationList);
  surrenderOrderDataSourceDemandWise = new MatTableDataSource(this.surrenderOrderList);
  reAppropriationDataSourceDemandWise = new MatTableDataSource(this.reApproationDemandList);
  sanctionOrderDataSourceSaving = new MatTableDataSource(this.grantSurrenderList);
  headsUnderProposedIncreaseDataSource = new MatTableDataSource(this.headUnderIncreaseList);
  headsUnderProposedReduceDataSource = new MatTableDataSource(this.headUnderReduceList);
  totalAmountSurrenderSource = new MatTableDataSource(this.surrenderAmountList);
  constructor(private fb: FormBuilder, public dialog: MatDialog, private el: ElementRef,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.sanctionOrderDataSource.paginator = this.paginator1;
    this.sanctionOrderDataSource.sort = this.sort1;

    this.reApprpriationOrderDataSource.paginator = this.paginator2;
    this.reApprpriationOrderDataSource.sort = this.sort2;

    this.surrenderOrderDataSourceDemandWise.paginator = this.paginator3;
    this.surrenderOrderDataSourceDemandWise.sort = this.sort3;

    this.reAppropriationDataSourceDemandWise.paginator = this.paginator4;
    this.reAppropriationDataSourceDemandWise.sort = this.sort4;

    this.sanctionOrderDataSourceSaving.paginator = this.paginator5;
    this.sanctionOrderDataSourceSaving.sort = this.sort5;

    this.headsUnderProposedIncreaseDataSource.paginator = this.paginator6;
    this.headsUnderProposedIncreaseDataSource.sort = this.sort6;

    this.headsUnderProposedReduceDataSource.paginator = this.paginator7;
    this.headsUnderProposedReduceDataSource.sort = this.sort7;

    this.totalAmountSurrenderSource.paginator = this.paginator8;
    this.totalAmountSurrenderSource.sort = this.sort8;

    this.createSanction = this.fb.group({
      demandNo: [''],
      grantNumber: [''],
      majorHead: [''],
      revenueCapital: [''],
      votedCharged: [''],
      reApproationAmount: [''],
      amountOfSurrender: [''],
      departmentName: ['1']
    });

    this.formSubmitSurrender();
  }
  formSubmitSurrender() {
    this.createGrantOrder = this.fb.group({
      finYear: ['1'],
      departmentName: [''],
    })
  }
  onFileSelection(fileSelected) {
    if (fileSelected.target && fileSelected.target.files) {
      this.dataSourceBrowse.data[this.fileBrowseIndex].file = fileSelected.target.files[0];
    }
  }

  openFileSelector(index) {
    this.el.nativeElement.querySelector('#fileBrowse').click();
    this.fileBrowseIndex = index;
  }


  addBrowse() {
    if (this.dataSourceBrowse) {
      const data = this.dataSourceBrowse.data[this.dataSourceBrowse.data.length - 1];
      if (data && data.name && data.file) {
        const p_data = this.dataSourceBrowse.data;
        p_data.push({
          name: undefined,
          file: undefined,
          uploadedBy: '',
        });
        this.dataSourceBrowse.data = p_data;
      } else {
        this.toastr.error('Please fill the detail.');
      }
    }
  }

  deleteBrowse(index) {
    this.dataSourceBrowse.data.splice(index, 1);
    this.dataSourceBrowse = new MatTableDataSource(this.dataSourceBrowse.data);
  }
  getAmount(): number {
    let calcAmount = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.sanctionOrderDataSource.data.forEach((element) => {
      calcAmount = calcAmount + Number(element.amount);
    });
    return calcAmount;
  }
  getRevenue(): number {
    let calcAmount = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.sanctionOrderDataSource.data.forEach((element) => {
      calcAmount = calcAmount + Number(element.revenue);
    });
    return calcAmount;
  }
  getsURENDERoRDER(): number {
    let calcAmount = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.sanctionOrderDataSource.data.forEach((element) => {
      calcAmount = calcAmount + Number(element.noOfSurrenderOrder);
    });
    return calcAmount;
  }
  getGrantReporation(): number {
    let calcAmount = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.sanctionOrderDataSource.data.forEach((element) => {
      calcAmount = calcAmount + Number(element.grantRopiration);
    });
    return calcAmount;
  }
  getMajorHead(): number {
    let calcAmount = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.sanctionOrderDataSource.data.forEach((element) => {
      calcAmount = calcAmount + Number(element.majorHead);
    });
    return calcAmount;
  }
  getVoted(): number {
    let calcAmount = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.sanctionOrderDataSource.data.forEach((element) => {
      calcAmount = calcAmount + Number(element.votedOrCharged);
    });
    return calcAmount;
  }

  getSurrender(): number {
    let calcAmount = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.sanctionOrderDataSource.data.forEach((element) => {
      calcAmount = calcAmount + Number(element.dateOfSurendar);
    });
    return calcAmount;
  }
  // view() {
  //   this.addincrease = true;
  // }
  getAmountApproation(): number {
    let calcAmount = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.reApprpriationOrderDataSource.data.forEach((element) => {
      calcAmount = calcAmount + Number(element.amount);
    });
    return calcAmount;
  }
  getRevenueApproation(): number {
    let calcAmount = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.reApprpriationOrderDataSource.data.forEach((element) => {
      calcAmount = calcAmount + Number(element.revenue);
    });
    return calcAmount;
  }
  getsURENDERoRDERApproation(): number {
    let calcAmount = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.reApprpriationOrderDataSource.data.forEach((element) => {
      calcAmount = calcAmount + Number(element.noOfSurrenderOrder);
    });
    return calcAmount;
  }
  getGrantReporationApproation(): number {
    let calcAmount = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.reApprpriationOrderDataSource.data.forEach((element) => {
      calcAmount = calcAmount + Number(element.grantRopiration);
    });
    return calcAmount;
  }
  getMajorHeadApproation(): number {
    let calcAmount = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.reApprpriationOrderDataSource.data.forEach((element) => {
      calcAmount = calcAmount + Number(element.majorHead);
    });
    return calcAmount;
  }
  getVotedApproation(): number {
    let calcAmount = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.reApprpriationOrderDataSource.data.forEach((element) => {
      calcAmount = calcAmount + Number(element.votedOrCharged);
    });
    return calcAmount;
  }
  getSurrenderApproation(): number {
    let calcAmount = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.reApprpriationOrderDataSource.data.forEach((element) => {
      calcAmount = calcAmount + Number(element.dateOfSurendar);
    });
    return calcAmount;
  }

  getVotedCharged(): number {
    let calcAmount = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.surrenderOrderDataSourceDemandWise.data.forEach((element) => {
      calcAmount = calcAmount + Number(element.votedOrCharged);
    });
    return calcAmount;
  }

  getRevenueAmount(): number {
    let calcAmount = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.surrenderOrderDataSourceDemandWise.data.forEach((element) => {
      calcAmount = calcAmount + Number(element.revenue);
    });
    return calcAmount;
  }
  getCharged(): number {
    let calcAmount = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.surrenderOrderDataSourceDemandWise.data.forEach((element) => {
      calcAmount = calcAmount + Number(element.votedOrCharged);
    });
    return calcAmount;
  }

  getCaptialAmount(): number {
    let calcAmount = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.surrenderOrderDataSourceDemandWise.data.forEach((element) => {
      calcAmount = calcAmount + Number(element.revenue);
    });
    return calcAmount;
  }
  formSubmit() { }
  getAmountSerender(): number {
    let calcAmount = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.surrenderOrderDataSourceDemandWise.data.forEach((element) => {
      calcAmount = calcAmount + Number(element.amount);
    });
    return calcAmount;
  }
  getAmountSerende(): number {
    let calcAmount = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.surrenderOrderDataSourceDemandWise.data.forEach((element) => {
      calcAmount = calcAmount + Number(element.amount);
    });
    return calcAmount;
  }
  getVotedChargedReAppro(): number {
    let calcAmount = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.reAppropriationDataSourceDemandWise.data.forEach((element) => {
      calcAmount = calcAmount + Number(element.votedOrCharged);
    });
    return calcAmount;
  }
  getRevenueReAppro(): number {
    let calcAmount = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.reAppropriationDataSourceDemandWise.data.forEach((element) => {
      calcAmount = calcAmount + Number(element.revenue);
    });
    return calcAmount;
  }
  getAmountReAppro(): number {
    let calcAmount = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.reAppropriationDataSourceDemandWise.data.forEach((element) => {
      calcAmount = calcAmount + Number(element.amount);
    });
    return calcAmount;
  }
  getChargedReAppro(): number {
    let calcAmount = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.reAppropriationDataSourceDemandWise.data.forEach((element) => {
      calcAmount = calcAmount + Number(element.votedOrCharged);
    });
    return calcAmount;
  }
  getCaptialReAppro(): number {
    let calcAmount = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.reAppropriationDataSourceDemandWise.data.forEach((element) => {
      calcAmount = calcAmount + Number(element.revenue);
    });
    return calcAmount;
  }
  getAmountAppro(): number {
    let calcAmount = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.reAppropriationDataSourceDemandWise.data.forEach((element) => {
      calcAmount = calcAmount + Number(element.amount);
    });
    return calcAmount;
  }
  getnomenclature(): number {
    let calcAmount = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.sanctionOrderDataSourceSaving.data.forEach((element) => {
      calcAmount = calcAmount + Number(element.nomenclature);
    });
    return calcAmount;
  }
  getsanctionedGrant(): number {
    let calcAmount = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.sanctionOrderDataSourceSaving.data.forEach((element) => {
      calcAmount = calcAmount + Number(element.sanctionedGrant);
    });
    return calcAmount;
  }
  getamountOfSurrender(): number {
    let calcAmount = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.sanctionOrderDataSourceSaving.data.forEach((element) => {
      calcAmount = calcAmount + Number(element.amountOfSurrender);
    });
    return calcAmount;
  }
  getfinalGrantAfterSurrenderOfSavings(): number {
    let calcAmount = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.sanctionOrderDataSourceSaving.data.forEach((element) => {
      calcAmount = calcAmount + Number(element.finalGrantAfterSurrenderOfSavings);
    });
    return calcAmount;
  }
  getreasonOfSavings(): number {
    let calcAmount = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.sanctionOrderDataSourceSaving.data.forEach((element) => {
      calcAmount = calcAmount + Number(element.reasonOfSavings);
    });
    return calcAmount;
  }

  getactualExpKnownPriation(): number {
    let calcAmount = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.headsUnderProposedIncreaseDataSource.data.forEach((element) => {
      calcAmount = calcAmount + Number(element.actualExpKnownPriation);
    });
    return calcAmount;
  }
  getreApproation(): number {
    let calcAmount = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.headsUnderProposedIncreaseDataSource.data.forEach((element) => {
      calcAmount = calcAmount + Number(element.reApproation);
    });
    return calcAmount;
  }
  getamountOfReappropriation(): number {
    let calcAmount = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.headsUnderProposedIncreaseDataSource.data.forEach((element) => {
      calcAmount = calcAmount + Number(element.amountOfReappropriation);
    });
    return calcAmount;
  }
  getamountWillStantReapproation(): number {
    let calcAmount = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.headsUnderProposedIncreaseDataSource.data.forEach((element) => {
      calcAmount = calcAmount + Number(element.amountWillStantReapproation);
    });
    return calcAmount;
  }
  getexplationReductionGrant(): number {
    let calcAmount = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.headsUnderProposedIncreaseDataSource.data.forEach((element) => {
      calcAmount = calcAmount + Number(element.explationReductionGrant);
    });
    return calcAmount;
  }




  getactualExpKnownPriation2(): number {
    let calcAmount = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.headsUnderProposedReduceDataSource.data.forEach((element) => {
      calcAmount = calcAmount + Number(element.actualExpKnownPriation);
    });
    return calcAmount;
  }
  getreApproation2(): number {
    let calcAmount = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.headsUnderProposedReduceDataSource.data.forEach((element) => {
      calcAmount = calcAmount + Number(element.reApproation);
    });
    return calcAmount;
  }
  getamountOfReappropriation2(): number {
    let calcAmount = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.headsUnderProposedReduceDataSource.data.forEach((element) => {
      calcAmount = calcAmount + Number(element.amountOfReappropriation);
    });
    return calcAmount;
  }
  getamountWillStantReapproation2(): number {
    let calcAmount = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.headsUnderProposedReduceDataSource.data.forEach((element) => {
      calcAmount = calcAmount + Number(element.amountWillStantReapproation);
    });
    return calcAmount;
  }
  getexplationReductionGrant2(): number {
    let calcAmount = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.headsUnderProposedReduceDataSource.data.forEach((element) => {
      calcAmount = calcAmount + Number(element.explationReductionGrant);
    });
    return calcAmount;
  }
  workflowDetails(): void {
    const dialogRef = this.dialog.open(WorkflowDetailsGrantComponent, {
      width: '1200px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

