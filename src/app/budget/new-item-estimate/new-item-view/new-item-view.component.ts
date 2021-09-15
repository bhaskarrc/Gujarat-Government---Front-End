import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { ConfirmDialogModel, StandingChargeConsolidateHistoryComponent } from '../../standing-charge-consolidation/standing-charge-consolidate-history/standing-charge-consolidate-history.component';
import { HeaderElement, ObjectClassDataNewItem, FormCStmt1ElementView, DirstrictTableSecond, DistrictElement1 } from 'src/app/model/budget';


const ELEMENT_DATA_C2: ObjectClassDataNewItem[] = [
  { objecthead: '0101', recurrentAmount: 60, nonRecurrentAmount: 101,
   budgetEstimateNextYear: 251, ultimateAnnualRecurrentAmount: 356, remarks: '',
    toolTipData: '0101 : Pay of Officers Including Grade Pay' },

  { objecthead: '0102', recurrentAmount: 65, nonRecurrentAmount: 102,
   budgetEstimateNextYear: 251, ultimateAnnualRecurrentAmount: 456, remarks: '',
    toolTipData: '0102 : Pay of Establishment Including Grade Pay' },

  { objecthead: '0103', recurrentAmount: 70, nonRecurrentAmount: 103,
   budgetEstimateNextYear: 251, ultimateAnnualRecurrentAmount: 213, remarks: '',
    toolTipData: '0103 : Dearness Allowance' },

  { objecthead: '3131', recurrentAmount: 60, nonRecurrentAmount: 101,
   budgetEstimateNextYear: 251, ultimateAnnualRecurrentAmount: 356, remarks: '',
    toolTipData: '3131 : Grants-in-Aid General to Panchayats pertaining to pay and allowances' },

  { objecthead: '3133', recurrentAmount: 70, nonRecurrentAmount: 103,
   budgetEstimateNextYear: 251, ultimateAnnualRecurrentAmount: 213, remarks: '',
    toolTipData: '3133 : Anand Agricultural University' },

  { objecthead: '3135', recurrentAmount: 70, nonRecurrentAmount: 103,
   budgetEstimateNextYear: 251, ultimateAnnualRecurrentAmount: 213, remarks: '',
    toolTipData: '3135 : Anand Agricultural University' },

];
const ELEMENT_DATA_CL1: ObjectClassDataNewItem[] = [
    {
        objecthead: '0101', recurrentAmount: '60.00', nonRecurrentAmount: '100.00', budgetEstimateNextYear: '200.00',
        ultimateAnnualRecurrentAmount: '400.00', remarks: '',
        toolTipData: '0101 : Pay of Officers Including Grade Pay'
    },
    {
        objecthead: '0102', recurrentAmount: '60.00', nonRecurrentAmount: '100.00', budgetEstimateNextYear: '200.00',
        ultimateAnnualRecurrentAmount: '400.00', remarks: '',
        toolTipData: '0102 : Pay of Establishment Including Grade Pay'
    },
    {
        objecthead: '0103', recurrentAmount: '60.00', nonRecurrentAmount: '100.00', budgetEstimateNextYear: '200.00',
        ultimateAnnualRecurrentAmount: '400.00', remarks: '',
        toolTipData: '0103 : Dearness Allowance'
    },
];
const ELEMENT_DATA_CL2: ObjectClassDataNewItem[] = [
    {
        objecthead: '2100', recurrentAmount: '60.00', nonRecurrentAmount: '100.00', budgetEstimateNextYear: '200.00',
        ultimateAnnualRecurrentAmount: '400.00', remarks: '',
        toolTipData: '2100'
    },
    {
        objecthead: '2101', recurrentAmount: '60.00', nonRecurrentAmount: '100.00', budgetEstimateNextYear: '200.00',
        ultimateAnnualRecurrentAmount: '400.00', remarks: '',
        toolTipData: '2101'
    },
];

const ELEMENT_DATA_CL3: ObjectClassDataNewItem[] = [
    {
        objecthead: '3131', recurrentAmount: '60.00', nonRecurrentAmount: '100.00', budgetEstimateNextYear: '200.00',
        ultimateAnnualRecurrentAmount: '400.00', remarks: '',
        toolTipData: '3131'
    },
    {
        objecthead: '3135', recurrentAmount: '60.00', nonRecurrentAmount: '100.00', budgetEstimateNextYear: '200.00',
        ultimateAnnualRecurrentAmount: '400.00', remarks: '',
        toolTipData: '3135'
    },
    {
        objecthead: '3243', recurrentAmount: '60.00', nonRecurrentAmount: '100.00', budgetEstimateNextYear: '200.00',
        ultimateAnnualRecurrentAmount: '400.00', remarks: '',
        toolTipData: '3243'
    },
];

const ELEMENT_DATA_CL4: ObjectClassDataNewItem[] = [
    {
        objecthead: '4100', recurrentAmount: '60.00', nonRecurrentAmount: '100.00', budgetEstimateNextYear: '200.00',
        ultimateAnnualRecurrentAmount: '400.00', remarks: '',
        toolTipData: '4100'
    },
    {
        objecthead: '4101', recurrentAmount: '60.00', nonRecurrentAmount: '100.00', budgetEstimateNextYear: '200.00',
        ultimateAnnualRecurrentAmount: '400.00', remarks: '',
        toolTipData: '4101'
    },
];

const ELEMENT_DATA_CL5: ObjectClassDataNewItem[] = [
    {
        objecthead: '5100', recurrentAmount: '60.00', nonRecurrentAmount: '100.00', budgetEstimateNextYear: '200.00',
        ultimateAnnualRecurrentAmount: '400.00', remarks: '',
        toolTipData: '5100'
    },
    {
        objecthead: '5101', recurrentAmount: '60.00', nonRecurrentAmount: '100.00', budgetEstimateNextYear: '200.00',
        ultimateAnnualRecurrentAmount: '400.00', remarks: '',
        toolTipData: '5101'
    },
];

const ELEMENT_DATA_CL6: ObjectClassDataNewItem[] = [
    {
        objecthead: '6100', recurrentAmount: '60.00', nonRecurrentAmount: '100.00', budgetEstimateNextYear: '200.00',
        ultimateAnnualRecurrentAmount: '400.00', remarks: '',
        toolTipData: '6100'
    },
    {
        objecthead: '6101', recurrentAmount: '60.00', nonRecurrentAmount: '100.00', budgetEstimateNextYear: '200.00',
        ultimateAnnualRecurrentAmount: '400.00', remarks: '',
        toolTipData: '6101'
    },
];

const ELEMENT_DATA_CL7: ObjectClassDataNewItem[] = [
    {
        objecthead: '7057', recurrentAmount: '60.00', nonRecurrentAmount: '100.00', budgetEstimateNextYear: '200.00',
        ultimateAnnualRecurrentAmount: '400.00', remarks: '',
        toolTipData: '7100'
    },
    {
        objecthead: '7058', recurrentAmount: '60.00', nonRecurrentAmount: '100.00', budgetEstimateNextYear: '200.00',
        ultimateAnnualRecurrentAmount: '400.00', remarks: '',
        toolTipData: '7101'
    },
];

const ELEMENT_DATA_C1: FormCStmt1ElementView[] = [
  {
    designationEng: 'Team Leader',
    designationGuj: 'ટીમ',
    noOfPosts: 5,
    payScale: 3000.00,
    levelPay: '3000.00',
  },
  {
    designationEng: 'Team Leader',
    designationGuj: 'ટીમ',
    noOfPosts: 5,
    payScale: 3000.00,
    levelPay: '3000.00',
  },
  {
    designationEng: 'Team Leader',
    designationGuj: 'ટીમ',
    noOfPosts: 5,
    payScale: 3000.00,
    levelPay: '3000.00',
  },
  {
    designationEng: 'Team Leader',
    designationGuj: 'ટીમ',
    noOfPosts: 5,
    payScale: 3000.00,
    levelPay: '3000.00',
  },
  {
    designationEng: 'Team Leader',
    designationGuj: 'ટીમ',
    noOfPosts: 5,
    payScale: 3000.00,
    levelPay: '3000.00',
  }
];

const DISTRICT_ELEMENT_DATA: DirstrictTableSecond[] = [
  { id: 1, expendature: '2.00', districtName: 'Ahmedabad', talukaexpendature: '5.00', gramexpendature: '12.00' },
  { id: 2, expendature: '2.00', districtName: 'Vadodara', talukaexpendature: '5.00', gramexpendature: '12.00' },
  { id: 3, expendature: '2.00', districtName: 'Anand', talukaexpendature: '5.00', gramexpendature: '12.00' },
  { id: 4, expendature: '2.00', districtName: 'Chhota Udaipur', talukaexpendature: '5.00', gramexpendature: '12.00' },
  { id: 5, expendature: '2.00', districtName: 'Dahod', talukaexpendature: '5.00', gramexpendature: '12.00' },
  { id: 6, expendature: '2.00', districtName: 'Kheda', talukaexpendature: '5.00', gramexpendature: '12.00' },
  { id: 7, expendature: '2.00', districtName: 'Mahisagar', talukaexpendature: '5.00', gramexpendature: '12.00' },
  { id: 8, expendature: '2.00', districtName: 'Panchmahal', talukaexpendature: '5.00', gramexpendature: '12.00' },
  { id: 9, expendature: '2.00', districtName: 'Gandhinagar', talukaexpendature: '5.00', gramexpendature: '12.00' },
  { id: 10, expendature: '2.00', districtName: 'Aravalli', talukaexpendature: '5.00', gramexpendature: '12.00' },
  { id: 11, expendature: '2.00', districtName: 'Banaskantha', talukaexpendature: '5.00', gramexpendature: '12.00' },
  { id: 12, expendature: '2.00', districtName: 'Mehsana', talukaexpendature: '5.00', gramexpendature: '12.00' },
  { id: 13, expendature: '2.00', districtName: 'Patan', talukaexpendature: '5.00', gramexpendature: '12.00' },
  { id: 14, expendature: '2.00', districtName: 'Sabarkantha', talukaexpendature: '5.00', gramexpendature: '12.00' },
  { id: 15, expendature: '2.00', districtName: 'Rajkot', talukaexpendature: '5.00', gramexpendature: '12.00' },
  { id: 16, expendature: '2.00', districtName: 'Amreli', talukaexpendature: '5.00', gramexpendature: '12.00' },
  { id: 17, expendature: '2.00', districtName: 'Bhavnagar', talukaexpendature: '5.00', gramexpendature: '12.00' },
  { id: 18, expendature: '2.00', districtName: 'Botad', talukaexpendature: '5.00', gramexpendature: '12.00' },
  { id: 19, expendature: '2.00', districtName: 'Devbhoomi Dwarka', talukaexpendature: '5.00', gramexpendature: '12.00' },
  { id: 20, expendature: '2.00', districtName: 'Gir Somnath', talukaexpendature: '5.00', gramexpendature: '12.00' },
  { id: 21, expendature: '2.00', districtName: 'Jamnagar', talukaexpendature: '5.00', gramexpendature: '12.00' },
  { id: 22, expendature: '2.00', districtName: 'Junagadh', talukaexpendature: '5.00', gramexpendature: '12.00' },
  { id: 23, expendature: '2.00', districtName: 'Morbi', talukaexpendature: '5.00', gramexpendature: '12.00' },
  { id: 24, expendature: '2.00', districtName: 'Porbandar', talukaexpendature: '5.00', gramexpendature: '12.00' },
  { id: 25, expendature: '2.00', districtName: 'Surendranagar', talukaexpendature: '5.00', gramexpendature: '12.00' },
  { id: 26, expendature: '2.00', districtName: 'Kachchh', talukaexpendature: '5.00', gramexpendature: '12.00' },
  { id: 27, expendature: '2.00', districtName: 'Surat', talukaexpendature: '5.00', gramexpendature: '12.00' },
  { id: 28, expendature: '2.00', districtName: 'Bharuch', talukaexpendature: '5.00', gramexpendature: '12.00' },
  { id: 29, expendature: '2.00', districtName: 'Dang', talukaexpendature: '5.00', gramexpendature: '12.00' },
  { id: 30, expendature: '2.00', districtName: 'Narmada', talukaexpendature: '5.00', gramexpendature: '12.00' },
  { id: 31, expendature: '2.00', districtName: 'Navsari', talukaexpendature: '5.00', gramexpendature: '12.00' },
  { id: 32, expendature: '2.00', districtName: 'Tapi', talukaexpendature: '5.00', gramexpendature: '12.00' },
  { id: 33, expendature: '2.00', districtName: 'Valsad', talukaexpendature: '5.00', gramexpendature: '12.00' },
  // { id: 34,  expendature: '2.00', districtName: 'State Level Only (if any)', talukaexpendature: '5.00', gramexpendature: '12.00'},
];

const DISTRICT_ELEMENT_DATA2: DirstrictTableSecond[] = [
  {
    id: 1,
    expendature: '12.00',
    districtName: 'Ahmedabad',
    talukaexpendature: '25.00',
    gramexpendature: '2.00'
  },
  {
    id: 2,
    expendature: '12.00',
    districtName: 'Vadodara',
    talukaexpendature: '25.00',
    gramexpendature: '2.00'
  },
  {
    id: 3,
    expendature: '12.00',
    districtName: 'Anand',
    talukaexpendature: '25.00',
    gramexpendature: '2.00'
  },
  {
    id: 4,
    expendature: '12.00',
    districtName: 'Chhota Udaipur',
    talukaexpendature: '25.00',
    gramexpendature: '2.00'
  },
  {
    id: 5,
    expendature: '12.00',
    districtName: 'Dahod',
    talukaexpendature: '25.00',
    gramexpendature: '2.00'
  },
  {
    id: 6,
    expendature: '12.00',
    districtName: 'Kheda',
    talukaexpendature: '25.00',
    gramexpendature: '2.00'
  },
  {
    id: 7,
    expendature: '12.00',
    districtName: 'Mahisagar',
    talukaexpendature: '25.00',
    gramexpendature: '2.00'
  },
  {
    id: 8,
    expendature: '12.00',
    districtName: 'Panchmahal',
    talukaexpendature: '25.00',
    gramexpendature: '2.00'
  },
  {
    id: 9,
    expendature: '12.00',
    districtName: 'Gandhinagar',
    talukaexpendature: '25.00',
    gramexpendature: '2.00'
  },
  {
    id: 10,
    expendature: '12.00',
    districtName: 'Aravalli',
    talukaexpendature: '25.00',
    gramexpendature: '2.00'
  },
  {
    id: 11,
    expendature: '12.00',
    districtName: 'Banaskantha',
    talukaexpendature: '25.00',
    gramexpendature: '2.00'
  },
  {
    id: 12,
    expendature: '12.00',
    districtName: 'Mehsana',
    talukaexpendature: '25.00',
    gramexpendature: '2.00'
  },
  {
    id: 13,
    expendature: '12.00',
    districtName: 'Patan',
    talukaexpendature: '25.00',
    gramexpendature: '2.00'
  },
  {
    id: 14,
    expendature: '12.00',
    districtName: 'Sabarkantha',
    talukaexpendature: '25.00',
    gramexpendature: '2.00'
  },
  {
    id: 15,
    expendature: '12.00',
    districtName: 'Rajkot',
    talukaexpendature: '25.00',
    gramexpendature: '2.00'
  },
  {
    id: 16,
    expendature: '12.00',
    districtName: 'Amreli',
    talukaexpendature: '25.00',
    gramexpendature: '2.00'
  },
  {
    id: 17,
    expendature: '12.00',
    districtName: 'Bhavnagar',
    talukaexpendature: '25.00',
    gramexpendature: '2.00'
  },
  {
    id: 18,
    expendature: '12.00',
    districtName: 'Botad',
    talukaexpendature: '25.00',
    gramexpendature: '2.00'
  },
  {
    id: 19,
    expendature: '12.00',
    districtName: 'Devbhoomi Dwarka',
    talukaexpendature: '25.00',
    gramexpendature: '2.00'
  },
  {
    id: 20,
    expendature: '12.00',
    districtName: 'Gir Somnath',
    talukaexpendature: '25.00',
    gramexpendature: '2.00'
  },
  {
    id: 21,
    expendature: '12.00',
    districtName: 'Jamnagar',
    talukaexpendature: '25.00',
    gramexpendature: '2.00'
  },
  {
    id: 22,
    expendature: '12.00',
    districtName: 'Junagadh',
    talukaexpendature: '25.00',
    gramexpendature: '2.00'
  },
  {
    id: 23,
    expendature: '12.00',
    districtName: 'Morbi',
    talukaexpendature: '25.00',
    gramexpendature: '2.00'
  },
  {
    id: 24,
    expendature: '12.00',
    districtName: 'Porbandar',
    talukaexpendature: '25.00',
    gramexpendature: '2.00'
  },
  {
    id: 25,
    expendature: '12.00',
    districtName: 'Surendranagar',
    talukaexpendature: '25.00',
    gramexpendature: '2.00'
  },
  {
    id: 26,
    expendature: '12.00',
    districtName: 'Kachchh',
    talukaexpendature: '25.00',
    gramexpendature: '2.00'
  },
  {
    id: 27,
    expendature: '12.00',
    districtName: 'Surat',
    talukaexpendature: '25.00',
    gramexpendature: '2.00'
  },
  {
    id: 28,
    expendature: '12.00',
    districtName: 'Bharuch',
    talukaexpendature: '25.00',
    gramexpendature: '2.00'
  },
  {
    id: 29,
    expendature: '12.00',
    districtName: 'Dang',
    talukaexpendature: '25.00',
    gramexpendature: '2.00'
  },
  {
    id: 30,
    expendature: '12.00',
    districtName: 'Narmada',
    talukaexpendature: '25.00',
    gramexpendature: '2.00'
  },
  {
    id: 31,
    expendature: '12.00',
    districtName: 'Navsari',
    talukaexpendature: '25.00',
    gramexpendature: '2.00'
  },
  {
    id: 32,
    expendature: '12.00',
    districtName: 'Tapi',
    talukaexpendature: '25.00',
    gramexpendature: '2.00'
  },
  {
    id: 33,
    expendature: '12.00',
    districtName: 'Valsad',
    talukaexpendature: '25.00',
    gramexpendature: '2.00'
  },
];

const DISTRICT_ELEMENT_DATA1: DistrictElement1[] = [

  {

    id: 34,
    expendature: '',
    districtName: 'State Level Only (if any)',
    propsedAmount: '',

  }
];
const ELEMENT_DATAc: any[] = [
  { position: 1, name: 'Account Officer' },
  { position: 2, name: 'Head Accountant' },
  { position: 3, name: 'Sub Accountant' },
]

@Component({
  selector: 'app-new-item-view',
  templateUrl: './new-item-view.component.html',
  styleUrls: ['./new-item-view.component.css']
})
export class NewItemViewComponent implements OnInit {
  expendCharges: boolean;
  table1 = true;
  table2 = false;
  grantInAid: Boolean;
  selValue = 'valNo';
  selectedIndex: number;
  step = 0;

  headerJson: HeaderElement[] = [
    { label: 'Financial Year', value: '2019-2020' },
    { label: 'Department', value: 'Education Department' },
    { label: 'Minister In Charge', value: 'Shri Bhupendrasinh Chudasama' },
    { label: 'Branch Name', value: 'Section V' },
    { label: 'Estimation From', value: 'Guj. University Serv. Tribunal' },
    // {label: 'Estimation By', value: 'Shri Arun Mahesh Babu MS'},
    { label: 'Budget Publication Number', value: '04: Education Department' },
    { label: 'Demand', value: '009 Education' },
    // {label: 'Revenue/Capital', value: 'Revenue'},
    { label: 'Major Head', value: '4202-Capital Outlay on Education,Sports,Art and Culture' },
    { label: 'Sector', value: 'B1-B Capital Account of Social and Community Services' },
    { label: 'Sub Sector', value: 'a0-(a) Education, Sports, Art and Culture' },
    { label: 'Sub Major Head', value: '01-General Education ' },
    { label: 'Minor Head', value: '201: Elementary Education' },
    { label: 'Sub Head', value: '04-EDN-88 Water Harvesting of primary Schools' },
    { label: 'Detail Head', value: '00-EDN-88 Water Harvesting of primary Schools' },
    { label: 'Charged/Voted', value: 'Voted' },
    { label: 'Item No. and Name of Item', value: 'Construction of Building' },
    // { label: 'Item Name', value: 'Construction of Building' },
    { label: 'CSS', value: 'No' },
    { label: 'State of Percentage Share ', value: '100.00%' }
  ];

  browseData: any[] = [
    { attachmentType: 'Supporting Document', fileName: 'PAN.jpeg' },
    { attachmentType: 'Sanction Order', fileName: 'AadharCard.pdf' },
  ];

  displayedColumns = ['objecthead', 'recurrentAmount', 'nonRecurrentAmount', 'ultimateAnnualRecurrentAmount', 'budgetEstimateNextYear',
    'remarks'];
    dataSource = new MatTableDataSource(ELEMENT_DATA_C2);
    dataSourceClass1 = new MatTableDataSource(ELEMENT_DATA_CL1);
    dataSourceClass2 = new MatTableDataSource(ELEMENT_DATA_CL2);
    dataSourceClass3 = new MatTableDataSource(ELEMENT_DATA_CL3);
    dataSourceClass4 = new MatTableDataSource(ELEMENT_DATA_CL4);
    dataSourceClass5 = new MatTableDataSource(ELEMENT_DATA_CL5);
    dataSourceClass6 = new MatTableDataSource(ELEMENT_DATA_CL6);
    dataSourceClass7 = new MatTableDataSource(ELEMENT_DATA_CL7);
    // breakup section
    dataSourceBreakClass1 = new MatTableDataSource(ELEMENT_DATA_CL1);
    dataSourceBreakClass2 = new MatTableDataSource(ELEMENT_DATA_CL2);
    dataSourceBreakClass3 = new MatTableDataSource(ELEMENT_DATA_CL3);
    dataSourceBreakClass4 = new MatTableDataSource(ELEMENT_DATA_CL4);
    dataSourceBreakClass5 = new MatTableDataSource(ELEMENT_DATA_CL5);
    dataSourceBreakClass6 = new MatTableDataSource(ELEMENT_DATA_CL6);
    dataSourceBreakClass7 = new MatTableDataSource(ELEMENT_DATA_CL7);

    districtDataSource = new MatTableDataSource(DISTRICT_ELEMENT_DATA);
    districtDataSource2 = new MatTableDataSource(
      DISTRICT_ELEMENT_DATA2.sort((a, b) =>
        a.districtName > b.districtName
          ? 1
          : b.districtName > a.districtName
            ? -1
            : 0
      )
    );

    stateDataSource = new MatTableDataSource(
      DISTRICT_ELEMENT_DATA1.sort((a, b) =>
        a.districtName > b.districtName
          ? 1
          : b.districtName > a.districtName
            ? -1
            : 0
      )
    );
    subHeaderDistrictColumns = ['total', 'districtTotal', 'talukaTotal', 'gramTotal'];
    districtColumns = ['position', 'district', 'expendature', 'talukaexpenditure', 'gramexpenditure'];

    districtColumns2 = [
      'position',
      'district',
      'expendature',
      'talukaexpendature',
      'gramexpendature'
    ];
    stateColumns = [
      'position',
      'district',
      'propsedAmount',
    ];

  dataSourceFormCStmt1 = new MatTableDataSource(ELEMENT_DATA_C1);
  displayedColumnsFormCStmt1 = ['designationEng', 'designationGuj', 'noOfPosts', 'payScale', 'levelPay'];

  displayedBrowseColumns = ['position', 'attachmentType', 'fileName', 'action'];
  // tslint:disable-next-line:member-ordering
  dataSourceBrowse = new MatTableDataSource(this.browseData);
  date: any = new Date();

  ViewCatogarySourceData = ELEMENT_DATAc;
  itemViewCatogary: string[] = ['position', 'checklist', 'action'];


  constructor(
    private router: Router,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
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

  gotoListing() {
    this.router.navigate(['./budget/budget-list']);
  }
  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
    // this.toastr.success('Data Saved Successfully..');
  }

  prevStep() {
    this.step--;
  }

  goToDashboard() {
    this.router.navigate(['']);
  }

  decimalPoint(data, key) {
    data[key] = Number(data[key]).toFixed(2);
  }

  decimalKeyPress(event: any) {
    const pattern = /^\d+(\.\d{0,2})?$/;
    const inputChar = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    let tempstr = event.target.value;
    tempstr += inputChar;
    if (!pattern.test(tempstr)) {
      event.preventDefault();
      return false;
    }
  }
  getBillNo(data) {
  }
  showCharge(event, index, element) {

    if (element && element.objecthead && element.recurrentAmount && element.nonRecurrentAmount && element.budgetEstimateNextYear
      && element.ultimateAnnualRecurrentAmount) {

      this.expendCharges = true;
      // this.submitted = true;

      if (element.objecthead === '3133' ||
        element.objecthead === '3243' ||
        element.objecthead === '3353' ||
        element.objecthead === '3563') {
        this.table1 = true;
        this.table2 = false;
        this.districtColumns = [
          'position',
          'district',
          'expendature',
          'talukaexpendature',
          'gramexpendature'
        ];

        this.subHeaderDistrictColumns = ['total', 'districtTotal', 'gramTotal'];
        this.districtDataSource = new MatTableDataSource(DISTRICT_ELEMENT_DATA.sort((a, b) =>
          a.districtName > b.districtName
            ? 1
            : b.districtName > a.districtName
              ? -1
              : 0
        ));
      } else {
        this.districtColumns = [
          'position',
          'district',
          'expendature',
          'talukaexpendature',
          'gramexpendature'
        ];

        this.subHeaderDistrictColumns = ['total', 'districtTotal', 'talukaTotal', 'gramTotal'];
        this.districtDataSource = new MatTableDataSource(DISTRICT_ELEMENT_DATA.sort((a, b) =>
          a.districtName > b.districtName
            ? 1
            : b.districtName > a.districtName
              ? -1
              : 0
        ));
      }
      if (element.objecthead === '3131' ||
        element.objecthead === '3132' ||
        element.objecthead === '3241' ||
        element.objecthead === '3351' ||
        element.objecthead === '3561') {
        this.table1 = false;
        this.table2 = true;

        this.districtColumns = [
          'position',
          'district',
          'expendature',
          'talukaexpendature',
          'gramexpendature'
        ];

        this.subHeaderDistrictColumns = ['total', 'districtTotal', 'gramTotal'];
        this.districtDataSource = new MatTableDataSource(DISTRICT_ELEMENT_DATA.sort((a, b) =>
          a.districtName > b.districtName
            ? 1
            : b.districtName > a.districtName
              ? -1
              : 0
        ));
      } else {
        this.districtColumns = [
          'position',
          'district',
          'expendature',
          'talukaexpendature',
          'gramexpendature'
        ];
        this.subHeaderDistrictColumns = ['total', 'districtTotal', 'talukaTotal', 'gramTotal'];
        this.districtDataSource = new MatTableDataSource(DISTRICT_ELEMENT_DATA.sort((a, b) =>
          a.districtName > b.districtName
            ? 1
            : b.districtName > a.districtName
              ? -1
              : 0
        ));
      }

      if (element.objecthead === '3135' ||
        element.objecthead === '3135-13' ||
        element.objecthead === '3135-14' ||
        element.objecthead === '3135-15' ||
        element.objecthead === '3135-16') {
        this.grantInAid = false;
      } else {
        this.grantInAid = true;
      }
    }
    const data = this.dataSourceClass3.data.filter((x, i) => i === index);
    this.dataSourceClass3.data = data;

  }
  backCharge() {
    this.expendCharges = false;
    const pdata = ELEMENT_DATA_CL3;
    this.dataSourceClass3.data = pdata;
  }
  calcRecurrentAmount() {
    let calcRecurrentAmount = 0;
    this.dataSource.data.forEach((element, index) => {
        calcRecurrentAmount =
        calcRecurrentAmount + Number(element.recurrentAmount);
    });
    return calcRecurrentAmount;
  }
  calcNonRecurrentAmount() {
    let calcNonRecurrentAmount = 0;
    this.dataSource.data.forEach((element, index) => {
        calcNonRecurrentAmount =
        calcNonRecurrentAmount + Number(element.nonRecurrentAmount);
    });
    return calcNonRecurrentAmount;
  }
  calcbudgetEstimateNextYear() {
    let calcbudgetEstimateNextYear = 0;
    this.dataSource.data.forEach((element, index) => {
        calcbudgetEstimateNextYear =
        calcbudgetEstimateNextYear + Number(element.recurrentAmount) + Number(element.nonRecurrentAmount);
    });
    return calcbudgetEstimateNextYear;
  }
  calcultimateAnnual() {
    let calcultimateAnnual = 0;
    this.dataSource.data.forEach((element, index) => {
        calcultimateAnnual =
        calcultimateAnnual + Number(element.recurrentAmount) * 12 / 11;
    });
    return calcultimateAnnual;
  }
  calculateBE(data) {
    let returnData = 0;
    if (data.recurrentAmount || data.nonRecurrentAmount) {
      returnData = Number(data.recurrentAmount) + Number(data.nonRecurrentAmount);
    }
    return returnData;
  }

  calculateUltimateAmount(data) {
    let returnData = 0;
    if (data.recurrentAmount || data.nonRecurrentAmount) {
      // returnData = this.calculateBE(data) * 12;
      returnData = Number(data.recurrentAmount) * 12 / 11;
    }
    return returnData;
  }

  jilla(){
    let amountExp = 0;
    this.districtDataSource.data.forEach((element)=>{
      amountExp =  amountExp + Number(element.expendature);
    });
    return amountExp;
  }
  taluka(){
    let amountExp = 0;
    this.districtDataSource.data.forEach((element)=>{
      amountExp =  amountExp + Number(element.talukaexpendature);
    });
    return amountExp;
  }
  gram(){
    let amountExp = 0;
    this.districtDataSource.data.forEach((element)=>{
      amountExp =  amountExp + Number(element.gramexpendature);
    });
    return amountExp;
  }

  corporation(){
    let amountExp = 0;
    this.districtDataSource2.data.forEach((element)=>{
      amountExp =  amountExp + Number(element.expendature);
    });
    return amountExp;
  }
  municipal(){
    let amountExp = 0;
    this.districtDataSource2.data.forEach((element)=>{
      amountExp =  amountExp + Number(element.talukaexpendature);
    });
    return amountExp;
  }
  notifiedArea(){
    let amountExp = 0;
    this.districtDataSource2.data.forEach((element)=>{
      amountExp =  amountExp + Number(element.gramexpendature);
    });
    return amountExp;
  }




}
