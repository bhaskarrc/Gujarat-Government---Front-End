import { Component, OnInit, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { contractMnageMessage } from 'src/app/common/error-message/common-message.constants';

// TrachList interface
export interface TrachList {
  trache: string;
  totalexternal?: string;
  impAgency?: string;
  stateGov?: string;
  cenGov?: string;
  other?: string;
  total?: string;
}


// data of datasorcepprtrach datasource
const trach_DATA: TrachList[] = [
  {
    trache: 'Tranche-1',
    totalexternal: '0',
    impAgency: '0',
    stateGov: '0',
    cenGov: '0',
    other: '0',
    total: '0'
  },

  {
    trache: 'Tranche-2',
    totalexternal: '0',
    impAgency: '0',
    stateGov: '0',
    cenGov: '0',
    other: '0',
    total: '0'
  },

  {
    trache: 'Tranche-3',
    totalexternal: '0',
    impAgency: '0',
    stateGov: '0',
    cenGov: '0',
    other: '0',
    total: '0'
  }
];


// data of datasorcepprtrachUsd datasource
const trach_DATA_2: TrachList[] = [
  {
    trache: 'Tranche-1',
    totalexternal: '0',
    impAgency: '0',
    stateGov: '0',
    cenGov: '0',
    other: '0',
    total: '0'
  },

  {
    trache: 'Tranche-2',
    totalexternal: '0',
    impAgency: '0',
    stateGov: '0',
    cenGov: '0',
    other: '0',
    total: '0'
  },

  {
    trache: 'Tranche-3',
    totalexternal: '0',
    impAgency: '0',
    stateGov: '0',
    cenGov: '0',
    other: '0',
    total: '0'
  }
];


// YearWiseList interface
export interface YearWiseList {
  year: string;
  firYear: string;
  secYear: string;
  thirYear: string;
  forthYear: string;
  fifthYear: string;
  sixthYear: string;
  seventhYear: string;
  total: string;
}

// data of datasorcYear  datasource
const year_wise_DATA: any[] = [
  {
    year: 'Currency - INR',
    firYear: '0',
    secYear: '0',
    thirYear: '0',
    forthYear: '0',
    fifthYear: '0',
    sixthYear: '0',
    seventhYear: '0',
    total: '0'
  },

  {
    year: 'Currency - USD',
    firYear: '0',
    secYear: '0',
    thirYear: '0',
    forthYear: '0',
    fifthYear: '0',
    sixthYear: '0',
    seventhYear: '0',
    total: '0'
  }
];

// ExtProjects interface
export interface ExtProjects {
  sector: string;
  exterFunAgency?: string;
  ministry?: string;
  proName?: string;
  costalOri?: string;
  currency: string;
  expInr?: string;
  startDate?: string;
  closingDate: string;
  closingDateRev: string;

}

// data of datasorceExternalPro datasource
const External_project_dtata: ExtProjects[] = [
  {
    sector: 'Tranche-1',
    exterFunAgency: '0',
    ministry: '0',
    proName: '0',
    costalOri: '0',
    currency: '0',
    expInr: '0',
    startDate: '0',
    closingDate: '0',
    closingDateRev: '0',
  },

];

@Component({
  selector: 'app-create-ppr',
  templateUrl: './create-ppr.component.html',
  styleUrls: ['./create-ppr.component.css']
})
export class CreatePprComponent implements OnInit {

  // columns of datasorcepprtrach datasource
  displayedColumnspprtrach: string[] = [
    'trache',
    'totalexternal',
    'impAgency',
    'stateGov',
    'cenGov',
    'other',
    'total'

  ];

  // Financial Arrangement (In INR) datasource
  datasorcepprtrach = new MatTableDataSource(trach_DATA);


  // columns of datasorcepprtrachUsd datasource
  displayedColumnspprtrachUsd: string[] = [
    'trache',
    'totalexternal',
    'impAgency',
    'stateGov',
    'cenGov',
    'other',
    'total'

  ];

  // Financial Arrangement (₹ in CR) datasource
  datasorcepprtrachUsd = new MatTableDataSource(trach_DATA_2);


  // columns of datasorcYear daatsource
  displayedColumnyearwise: string[] = [
    'year',
    'firYear',
    'secYear',
    'thirYear',
    'forthYear',
    'fifthYear',
    'sixthYear',
    'seventhYear',
  ];

  // Year wise Financial projections of fund utilization table datasource
  datasorcYear = new MatTableDataSource(year_wise_DATA);

// columns of datasorceExternalPro datasource
  displayedColumnExtPro: string[] = [
    'sector',
    'exterFunAgency',
    'ministry',
    'proName',
    'costalOri',
    'expInr',
    'currency',
    'startDate',
    'closingDate',
    'closingDateRev',
    'action'
  ];

  // Complete / Ongoing / Pipeline / Paused / Underestimation / External added Projects (Yes Option) datasource
  datasorceExternalPro = new MatTableDataSource(External_project_dtata);


  // attachment data
  browseData: any[] = [
    {
      name: undefined,
      file: undefined
    }
  ];


  // attachment tab columns
  displayedBrowseColumns = [
    'attachmentType',
    'fileName',
    'browse',
    'uploadedFileName',
    'uploadedBy',
    'action'
  ];

  // datasouce of attachment tab
  dataSourceBrowse = new MatTableDataSource(this.browseData);
  fileBrowseIndex: number;


  tabDisable: Boolean = true;
  pprForm: FormGroup;
  todayDate = Date.now();
  selectedIndex: number;
  allshow = false;
  allinvproshow = false;
  allimpactshow = false;
  centeralmin = false;
  statemin = false;
  envyes = false;
  Costalyes = false;
  forestyes = false;
  Heritageyes = false;
  exterprojyes = false;
  grandTotal: number;
  subObjectId: Array<any> = [];
  showAction: Boolean = true;
  show = false;

  scrollare_list: any[] = [
    { value: '1', viewValue: 'Agriculture' },
    { value: '2', viewValue: 'Disaster Management' },
    { value: '3', viewValue: 'Drinking Water Supply' },
    { value: '4', viewValue: 'Education and Skill Development' },
    { value: '5', viewValue: 'Energy' }
  ];

  centerline_list: any[] = [
    { value: '1', viewValue: 'Ministry of Agriculture and Farmers Welfare' },
    {
      value: '2',
      viewValue: 'Ministry of Environment, Forest and Climate Change'
    },
    {
      value: '3',
      viewValue: 'Ministry of Fisheries, Animal Husbandry and Dairying'
    },
    { value: '4', viewValue: 'Ministry of Health and Family Welfare' },
    { value: '5', viewValue: 'Ministry of Housing and Urban Affairs' }
  ];

  stateLine_list: any[] = [
    { value: '1', viewValue: 'Ministry of Agriculture and Farmers Welfare' },
    {
      value: '2',
      viewValue: 'Ministry of Environment, Forest and Climate Change'
    },
    {
      value: '3',
      viewValue: 'Ministry of Fisheries, Animal Husbandry and Dairying'
    },
    { value: '4', viewValue: 'Ministry of Health and Family Welfare' },
    { value: '5', viewValue: 'Ministry of Housing and Urban Affairs' }
  ];

  ppi_list: any[] = [
    { value: '1', viewValue: 'AIIB - Asian Infrastucture Investment Bank' },
    { value: '2', viewValue: 'Bharat Petroleum Corporation Limited' },
    { value: '3', viewValue: 'Department Environment, Science & Technology' },
    { value: '4', viewValue: 'Department of Horticulture' },
    { value: '5', viewValue: 'Department of Tourism' }
  ];

  linemin_list: any[] = [
    { value: '1', viewValue: 'Central Sector ' },
    { value: '2', viewValue: 'State Sector' }
  ];

  environMent_list: any[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' }
  ];

  registration_list: any[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' }
  ];

  forest_list: any[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' }
  ];

  height_list: any[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' }
  ];

  landPooling_list: any[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' }
  ];

  extdeve_list: any[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' }
  ];

  General_list: any[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' }
  ];

  Special_list: any[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' }
  ];

  curency_list: any[] = [
    { value: '1', viewValue: 'USD' },
    { value: '2', viewValue: 'EURO' },
    { value: '3', viewValue: 'Rubel' },
    { value: '4', viewValue: 'Yen' },
    { value: '5', viewValue: 'Pound' },
    { value: '6', viewValue: 'INR Cr.' }
  ];

  ext_fun_list: any[] = [
    { value: '1', viewValue: 'AIIB - Asian Infrastructure Investment Bank' },
    { value: '2', viewValue: 'ADB - Asian Development Bank' },
    { value: '3', viewValue: 'AFC - Alliance Franchise De Delhi' },
    { value: '4', viewValue: 'AFD _ AFD' },
    { value: '5', viewValue: 'DFID -DFID, UK ' }
  ];

  category_list: any[] = [
    { value: '1', viewValue: 'General' },
    { value: '2', viewValue: 'Special Category' }
  ];

  prevphase_list: any[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' }
  ];

  wether_list: any[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' }
  ];

  wetherrepo_list: any[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' }
  ];

  invpro_list: any[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' }
  ];

  lanpooli_list: any[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' }
  ];

  landauition_list: any[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' }
  ];

  simierpro_list: any[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' }
  ];

  rehabitaion_list: any[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' }
  ];

  reldoc_list: any[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' }
  ];

  sector_lists: any[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' }
  ];

  attachment = [
    {
      fileName: 'Attachment 1',
      fileType: 'image',
      filePath: '../../../assets/sample-attachments/image-sample.jpg',
      imgStatus: false
    },
    {
      fileName: 'Attachment 2',
      fileType: 'pdf',
      filePath: '../../../assets/sample-attachments/pdf-sample.pdf',
      pdfStatus: false
    }
  ];


  scrollareactrl: FormControl = new FormControl();
  linminCTRl: FormControl = new FormControl();
  cenlineCTRl: FormControl = new FormControl();
  statelinCtrl: FormControl = new FormControl();
  ppiCtrl: FormControl = new FormControl();
  isdCtrl: FormControl = new FormControl();
  environmentCtrl: FormControl = new FormControl();
  regiCtrl: FormControl = new FormControl();
  forestctrl: FormControl = new FormControl();
  heritagetrl: FormControl = new FormControl();
  landpoolingCTrl: FormControl = new FormControl();
  ectdevCtrl: FormControl = new FormControl();
  generalCtrl: FormControl = new FormControl();
  speciaCtrl: FormControl = new FormControl();
  selectCurrency: FormControl = new FormControl();
  extfundigCTRL: FormControl = new FormControl();
  prevphaseCtrl: FormControl = new FormControl();
  wwtherCTrl: FormControl = new FormControl();
  wwtherreportCTrl: FormControl = new FormControl();
  catstateCTRL: FormControl = new FormControl();
  invproCTRL: FormControl = new FormControl();
  landaquitionCTRL: FormControl = new FormControl();
  simiproCTRL: FormControl = new FormControl();
  rehabitaionCTRL: FormControl = new FormControl();
  fisiblityCTRL: FormControl = new FormControl();

  errorMessages = contractMnageMessage;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private el: ElementRef,
  ) { }

  ngOnInit() {
    this.cretpprFormData();
  }

// function containing form controls
  cretpprFormData() {
    this.pprForm = this.fb.group({
      namePro: [''],
      scrolArea: [''],
      lineMin: [''],
      cenLineMin: [''],
      statlinMin: [''],
      ppiAgency: [''],
      insStrucDelivery: [''],
      sTi: [''],
      ipna: [''],
      ifl: [''],
      ibppa: [''],
      prosectoreng: [''],
      climateMa: [''],
      beneEngug: [''],
      stateinvolved: [''],
      desinv: [''],
      disNmae: [''],
      environMent: [''],
      totalRegisZone: [''],
      forest: [''],
      Heritage: [''],
      anyOther: [''],
      landPooling: [''],
      porName: [''],
      loanAmountdr: [''],
      loanAmountmil: [''],
      proStartDate: [''],
      proComtDate: [''],
      totalFinOut: [''],
      deda: [''],
      proyear: [''],
      prodate: [''],
      cenSect: [''],
      statSector: [''],
      genral: [''],
      special: [''],
      cfcsb: [''],
      promonth: [''],
      curenctcon: [''],
      selectCurrency: ['1'],
      ExternalFunding: [''],
      previusPhase: ['2'],
      wtherFisiblity: ['2'],
      wtherReport: ['2'],
      goraObj: [''],
      actInv: [''],
      outOfPro: [''],
      outputPro: [''],
      catState: [''],
      involvedPro: [''],
      landacquisition: [''],
      simiPRo: [''],
      rehabtation: [''],
      rehabanyother: [''],
      fisiblity: [''],
      pprid: [''],
      anyOtherEnv: [''],
      anyOtherCostal: [''],
      anyOtherForest: [''],
      anyOtherheritage: [''],
    });
  }

  // used to get on which tab the user is currently
  getTabIndex(tabIndex) {
    this.selectedIndex = tabIndex;
    const temp = this.selectedIndex;

  }
  submitToNextLevel() { }
  gotoListing() { }
  goToDashboard() { }
  
  //  go to tab named prp detail step-2
  goToNext() {
    this.tabDisable = false;
    this.selectedIndex = 1;
  }

  // got to tab named prp detail step submit
  goTolast() {
    this.tabDisable = false;
    this.selectedIndex = 2;
  }

  // go to first tab 
  goToBack() {
    this.selectedIndex = 1 - 1;
  }

  // go to second tab
  goToBackTwo() {
    this.selectedIndex = 2 - 1;
  }

  tracheColumnTotal(element) {
    let returnData = 0;
    if (
      element.totalexternal ||
      element.impAgency ||
      element.stateGov ||
      element.cenGov ||
      element.other
    ) {
      returnData =
        Number(element.totalexternal) +
        Number(element.impAgency) +
        Number(element.stateGov) +
        Number(element.cenGov) +
        Number(element.other);
    }
    return returnData;
  }


  // claculate yearwise total
  yearWiseCal(element) {
    let returnData = 0;
    if (
      element.firYear ||
      element.secYear ||
      element.thirYear ||
      element.forthYear ||
      element.fifthYear ||
      element.sixthYear ||
      element.seventhYear
    ) {
      returnData =
        Number(element.firYear) +
        Number(element.secYear) +
        Number(element.thirYear) +
        Number(element.forthYear) +
        Number(element.fifthYear) +
        Number(element.sixthYear) +
        Number(element.seventhYear);
    }

    return returnData;
  }


  // calculate total external Assistence value 
  totalexternalAssistence(): number {
    let calcCurrentTrach = 0;
    this.datasorcepprtrachUsd.data.forEach(element => {
      calcCurrentTrach = calcCurrentTrach + Number(element.totalexternal);
    });
    return calcCurrentTrach;
  }


  // calculate per total external Assistence value
  perTotalexternalAssistence(): number {
    let calcCurrentTrach = 0;
    this.datasorcepprtrach.data.forEach(element => {
      calcCurrentTrach = calcCurrentTrach + Number(element.totalexternal);
    });


    if (this.grandTotal > 0) {
      return calcCurrentTrach * 100 / this.totloftotal();
    } else {
      return calcCurrentTrach * 100;
    }
  }


  // calculate total limenting agency value
  totallimentingagency(): number {
    let calcCurrentTrach = 0;
    this.datasorcepprtrach.data.forEach(element => {
      calcCurrentTrach = calcCurrentTrach + Number(element.impAgency);
    });
    this.datasorcepprtrachUsd.data.forEach(element => {
      calcCurrentTrach = calcCurrentTrach + Number(element.impAgency);
    });
    return calcCurrentTrach;
  }


// calculate per total limenting agency value
  pertotallimentingagency(): number {
    let calcCurrentTrach = 0;
    this.datasorcepprtrach.data.forEach(element => {
      calcCurrentTrach = calcCurrentTrach + Number(element.impAgency);
    });
    if (this.grandTotal > 0) {
      return calcCurrentTrach * 100 / this.totloftotal();
    } else {
      return calcCurrentTrach * 100;
    }
  }


  // calculate total state government value
  totalstategov(): number {
    let calcCurrentTrach = 0;
    this.datasorcepprtrach.data.forEach(element => {
      calcCurrentTrach = calcCurrentTrach + Number(element.stateGov);
    });

    this.datasorcepprtrachUsd.data.forEach(element => {
      calcCurrentTrach = calcCurrentTrach + Number(element.stateGov);
    });
    return calcCurrentTrach;
  }


  // calculate  per total state government value
  pertotalstategov(): number {
    let calcCurrentTrach = 0;
    this.datasorcepprtrach.data.forEach(element => {
      calcCurrentTrach = calcCurrentTrach + Number(element.stateGov);
    });
    if (this.grandTotal > 0) {
      return calcCurrentTrach * 100 / this.totloftotal();
    } else {
      return calcCurrentTrach * 100;
    }
  }

  // calculate total central gov. value
  totalcengov(): number {
    let calcCurrentTrach = 0;
    this.datasorcepprtrach.data.forEach(element => {
      calcCurrentTrach = calcCurrentTrach + Number(element.cenGov);
    });
    this.datasorcepprtrachUsd.data.forEach(element => {
      calcCurrentTrach = calcCurrentTrach + Number(element.cenGov);
    });
    return calcCurrentTrach;
  }


   // calculate per total central gov. value
  pertotalcengov(): number {
    let calcCurrentTrach = 0;
    this.datasorcepprtrach.data.forEach(element => {
      calcCurrentTrach = calcCurrentTrach + Number(element.cenGov);
    });
    if (this.grandTotal > 0) {
      return calcCurrentTrach * 100 / this.totloftotal();
    } else {
      return calcCurrentTrach * 100;
    }
  }

  // calculate total others value
  totalothers(): number {
    let calcCurrentTrach = 0;
    this.datasorcepprtrach.data.forEach(element => {
      calcCurrentTrach = calcCurrentTrach + Number(element.other);
    });
    this.datasorcepprtrachUsd.data.forEach(element => {
      calcCurrentTrach = calcCurrentTrach + Number(element.other);
    });
    return calcCurrentTrach;
  }

  // calculate  per total others value
  pertotalothers(): number {
    let calcCurrentTrach = 0;
    this.datasorcepprtrach.data.forEach(element => {
      calcCurrentTrach = calcCurrentTrach + Number(element.other);
    });
    if (this.grandTotal > 0) {
      return calcCurrentTrach * 100 / this.totloftotal();
    } else {
      return calcCurrentTrach * 100;
    }
  }

  // calculate total loft value
  totloftotal(): number {
    let calcCurrentTrach = 0;
    this.datasorcepprtrach.data.forEach(item => {
      calcCurrentTrach = calcCurrentTrach + Number(item.total);
    });

    this.datasorcepprtrachUsd.data.forEach(item => {
      calcCurrentTrach = calcCurrentTrach + Number(item.total);
    });

    const totalOfTotal = this.totalexternalAssistence() +
      this.totallimentingagency() +
      this.totalstategov() +
      this.totalcengov() +
      this.totalothers();
    this.grandTotal = totalOfTotal;
    return totalOfTotal;
  }


  // add fields on dropdown value of External Assistance Past Assistance
  simiPro(dropshow) {
    // tslint:disable-next-line: triple-equals
    if (dropshow.value == 1) {
      // User Id
      this.allshow = true;
      // tslint:disable-next-line: triple-equals
    } else if (dropshow.value == 2) {
      // Post - vacant
      this.allshow = false;
    }
  }

  // add fields on dropdown value of Court or Tribunal Proceedings
  involvedPro(invoproshow) {
    // tslint:disable-next-line: triple-equals
    if (invoproshow.value == 1) {
      this.allinvproshow = true;
      // tslint:disable-next-line: triple-equals
    } else if (invoproshow.value == 2) {
      this.allinvproshow = false;
    }
  }

  // add fields on dropown value of "Whether Land pooling/land acquisition/Resettlement and Rehabilitation is involved in the project?
  inmpactPro(impactdropshow) {
    // tslint:disable-next-line: triple-equals
    if (impactdropshow.value == 1) {
      this.allimpactshow = true;
      // tslint:disable-next-line: triple-equals
    } else if (impactdropshow.value == 2) {
      this.allimpactshow = false;
    }
  }

  // add specific fields on different values of line ministry dept. dropdown
  lineMinistry(departmentshow) {
    // tslint:disable-next-line: triple-equals
    if (departmentshow.value == 1) {
      this.centeralmin = true;
      this.statemin = false;
      // tslint:disable-next-line: triple-equals
    } else if (departmentshow.value == 2) {
      this.centeralmin = true;
      this.statemin = true;
    }
  }


  // show please specific (environment) field on basis of Yes value of Heritage dropdown
  environment(specificareshow) {
    // tslint:disable-next-line: triple-equals
    if (specificareshow.value == 1) {
      this.envyes = true;
      // tslint:disable-next-line: triple-equals
    } else if (specificareshow.value == 2) {
      this.envyes = false;
    }
  }

  // show please specific (costal regulation zone) field on basis of Yes value of Heritage dropdown
  CostalRegulation(specificareshow) {
    // tslint:disable-next-line: triple-equals
    if (specificareshow.value == 1) {
      this.Costalyes = true;
      // tslint:disable-next-line: triple-equals
    } else if (specificareshow.value == 2) {
      this.Costalyes = false;
    }
  }


  // show please specific (forest) field on basis of Yes value of Heritage dropdown
  forestevent(specificareshow) {
    // tslint:disable-next-line: triple-equals
    if (specificareshow.value == 1) {
      this.forestyes = true;
      // tslint:disable-next-line: triple-equals
    } else if (specificareshow.value == 2) {
      this.forestyes = false;
    }
  }


  // show please specific (heritage) field on basis of Yes value of Heritage dropdown 
  heritage(specificareshow) {
    // tslint:disable-next-line: triple-equals
    if (specificareshow.value == 1) {
      this.Heritageyes = true;
      // tslint:disable-next-line: triple-equals
    } else if (specificareshow.value == 2) {
      this.Heritageyes = false;
    }
  }


  // method add row in Complete / Ongoing / Pipeline / Paused / Underestimation / External added Projects
  addRow() {
    if (this.datasorceExternalPro) {
      this.datasorceExternalPro = new MatTableDataSource(External_project_dtata);
      const p_data = this.datasorceExternalPro.data;

      p_data.push({
        sector: 'Tranche-1',
        exterFunAgency: '0',
        ministry: '0',
        proName: '0',
        costalOri: '0',
        currency: '0',
        expInr: '0',
        startDate: '0',
        closingDate: '0',
        closingDateRev: '0',
      });
      this.datasorceExternalPro.data = p_data;
    }

  }


// deletes row in Complete / Ongoing / Pipeline / Paused / Underestimation / External added Projects table
  deleteObjectHeadRow(objIndex) {
    const p_data = this.datasorceExternalPro.data;
    this.subObjectId.splice(objIndex, 1);
    p_data.splice(objIndex, 1);
    this.datasorceExternalPro.data = p_data;
  }


  // toggles value of exterprojyes upon change in dropdown value
  externalPro(datatableshow) {
    // tslint:disable-next-line: triple-equals
    if (datatableshow.value == 1) {
      this.exterprojyes = true;
      // tslint:disable-next-line: triple-equals
    } else if (datatableshow.value == 2) {
      this.exterprojyes = false;
    }
  }

  checkDisplayFile(data) {
    for (let i = 0; i < this.attachment.length; i++) {
      if (data.fileType === 'image') {
        if ((this.showAction = true)) {
          this.showAction = false;
        }
        if (this.attachment[i].fileName === data.fileName) {
          this.attachment[i].imgStatus = !this.attachment[i].imgStatus;
          this.show = this.attachment[i].imgStatus ? true : false;
        } else {
          this.attachment[i].imgStatus = false;
        }
      } else if (data.fileType === 'pdf') {
        if ((this.showAction = true)) {
          this.showAction = false;
        }
        if (this.attachment[i].fileName === data.fileName) {
          this.attachment[i].pdfStatus = !this.attachment[i].pdfStatus;
          this.show = this.attachment[i].pdfStatus ? true : false;
        } else {
          this.attachment[i].pdfStatus = false;
        }
      } else {
      }
      if (this.show === false) {
        this.showAction = true;
        if (this.attachment[i].fileType === 'image') {
          this.attachment[i].imgStatus = false;
        } else if (this.attachment[i].fileType === 'pdf') {
          this.attachment[i].pdfStatus = false;
        }
      }
    }
  }

  // method sets data in table row upon selecting file 
  onFileSelection(fileSelected) {
    if (fileSelected.target && fileSelected.target.files) {
      this.dataSourceBrowse.data[this.fileBrowseIndex].file =
        fileSelected.target.files[0];
    }
  }

  // methods opens file selector
  openFileSelector(index) {
    this.el.nativeElement.querySelector('#fileBrowse').click();
    this.fileBrowseIndex = index;
  }

  onBrowseSelectChange() { }

// add row in attachment tab table
  addBrowse() {
    if (this.dataSourceBrowse) {
      const data = this.dataSourceBrowse.data[
        this.dataSourceBrowse.data.length - 1
      ];
      if (data && data.file) {
        const p_data = this.dataSourceBrowse.data;
        p_data.push({
          dropDown: undefined,
          name: undefined,
          file: undefined
        });
        this.dataSourceBrowse.data = p_data;
      } else {
      }
    }
  }

  // delete row in attachment tab table
  deleteBrowse(index) {
    this.dataSourceBrowse.data.splice(index, 1);
    this.dataSourceBrowse = new MatTableDataSource(this.dataSourceBrowse.data);
  }


  submitDetails() {

  }



}
