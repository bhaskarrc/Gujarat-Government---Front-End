import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild, OnDestroy, Inject, ElementRef, ViewChildren, QueryList, Renderer } from '@angular/core';
import { startWith, map, takeUntil } from 'rxjs/operators';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatTableDataSource, MatSelect, MatPaginator, MatSort } from '@angular/material';
import { ReplaySubject, Observable, Subject, BehaviorSubject, from, Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { NewWorkEstimateList, NewWorkEstimate, Attachment } from 'src/app/model/new-work-estimate.model';
import { CommonListing, CommonListingClass } from '../../../model/common-listing';
import { budgetMessage } from '../../../common/error-message/common-message.constants';
import { BudgetFormType } from 'src/app/model/budget';
import { StandingChargeConsolidateHistoryComponent, ConfirmDialogModel } from '../../standing-charge-consolidation/standing-charge-consolidate-history/standing-charge-consolidate-history.component';
import { StandingChargeForwardDialogComponent1 } from '../../new-item-estimate/new-item-estimates/new-item-estimates.component';

declare function SetGujarati();
declare function SetEnglish();

const ELEMENT_DATA: any[] = [
  { position: 1, name: 'Hydrogen' },

];

@Component({
  selector: 'app-create-estimate',
  templateUrl: './create-estimate.component.html',
  styleUrls: ['./create-estimate.component.css'],
  animations: [
    trigger('expandRow', [
      state('collapsed, void', style({ height: '0px', minHeight: '0', display: 'none' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
      transition('expanded <=> void', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
    ]),
  ]
})

export class CreateEstimateComponent implements OnInit, OnDestroy {
  isvisibledata = false;
  public errorMessages;
  @ViewChild('singleSelect') singleSelect: MatSelect;
// Header Field Details
  financialYear_list: BudgetFormType[] = [
    { value: '1', viewValue: '2018-2019' },
    { value: '2', viewValue: '2019-2020' },
    { value: '3', viewValue: '2020-2021' },
  ];
  department_list: BudgetFormType[] = [
    { value: '1', viewValue: 'Education Department' }
  ];
  demand_list: BudgetFormType[] = [
    { value: '1', viewValue: '9' },
    { value: '2', viewValue: '10' },
    { value: '3', viewValue: '11' },
    { value: '4', viewValue: '12' },
  ];
  majorHead_list: BudgetFormType[] = [
    { value: '1', viewValue: '2049' },
    { value: '2', viewValue: '2051' },
    { value: '3', viewValue: '3049' },
    { value: '4', viewValue: '3051' }
  ];
  subMajorHead_list: BudgetFormType[] = [
    { value: '1', viewValue: '60' },
    { value: '2', viewValue: '01' },
    { value: '3', viewValue: '02' },
  ];
  minorHead_list: BudgetFormType[] = [
    { value: '1', viewValue: '60' },
    { value: '2', viewValue: '01' },
    { value: '3', viewValue: '02' },
  ];
  subHead_list: BudgetFormType[] = [
    { value: '1', viewValue: '60' },
    { value: '2', viewValue: '01' },
    { value: '3', viewValue: '02' },
  ];
  detailHead_list: BudgetFormType[] = [
    { value: '1', viewValue: '00' },
    { value: '2', viewValue: '01' }
  ];
  proposalType_list: BudgetFormType[] = [
    { value: '1', viewValue: 'New' },
    { value: '2', viewValue: 'Continuous' }
  ];
  proposalCategory_list: BudgetFormType[] = [
    { value: '1', viewValue: 'Vehicle' },
    { value: '2', viewValue: 'Post' },
    { value: '3', viewValue: 'Construction' },
    { value: '4', viewValue: 'Furniture' },
    { value: '5', viewValue: 'Other' },
  ];
  schemeType_list: BudgetFormType[] = [
    { value: '1', viewValue: 'State' },
    { value: '2', viewValue: 'CSS' }
  ];
  objectHead_list: BudgetFormType[] = [
    { value: '1', viewValue: '0010' },
    { value: '2', viewValue: '0011' },
    { value: '3', viewValue: '0012' },
    { value: '4', viewValue: '0013' },
    { value: '5', viewValue: '5400' },
    { value: '6', viewValue: '3131' }
  ];
  expenditureType_list: BudgetFormType[] = [
    { value: '1', viewValue: 'Re-current' },
    { value: '2', viewValue: 'Non re-current' },
    { value: '3', viewValue: 'Both' }
  ];
  majorCategory_list: BudgetFormType[] = [
    { value: '1', viewValue: 'Specific' },
    { value: '2', viewValue: 'Regular' }
  ];
  revenueCapital_list: BudgetFormType[] = [
    { value: '1', viewValue: ' Revenue ' },
    { value: '2', viewValue: 'Capital' }
  ];
  chargedVoted_list: BudgetFormType[] = [
    { value: '1', viewValue: 'Charged' },
    { value: '2', viewValue: 'Voted' }
  ];
  minister_list: BudgetFormType[] = [
    { value: '1', viewValue: 'Shri Vijaybhai R. Rupani' }
  ];

  itemViewCatogary: string[] = ['position', 'checklist', 'action'];
  ViewCatogarySourceData = ELEMENT_DATA;

  displayedItemCategoryChecklistColumns = ['srno', 'checklistField', 'fieldDetail'];
  date: any = new Date();
  selectedindex: number;
  currentLang = new BehaviorSubject<string>('Eng');
  isLangChange = false;
  hasFocusSet: number;
// New Work List Tab data
  ELEMENT_EXE_DATA: NewWorkEstimateList[] = [
    {
      workNo: 1001, locality: 'Ahmedabad', exeDivision: 'R&B Division, Ahmedabad',
      workNameGuj: 'મકાનોના નવીનીકરણ', workNameEng: 'Building Renovation', secSubSector: '-', sacEstimatedCost: 1000,
      actualEstablishment: 2, actualMachinery: 7, proposeAmount: 100, css: 'Y',
      workDescEng: 'Construction of buildings for govt. Hostel and Residential schools at Visnagar,Dhandhuka,Rajula',
      workDescGuj: 'વિસનગર, ધંધુકા, રાજુલા ખાતે છોકરાઓ અને છોકરીઓ માટે સરકારી છાત્રાલયો અને નિવાસી શાળાઓનું બાંધકામ',
      remarksEng: 'Construction of buildings for govt. Hostel and Residential schools at Visnagar,Dhandhuka,Rajula',
      remarksGuj: 'વિસનગર, ધંધુકા, રાજુલા ખાતે છોકરાઓ અને છોકરીઓ માટે સરકારી છાત્રાલયો અને નિવાસી શાળાઓનું બાંધકામ'
    },
    {
      workNo: 1002, locality: 'Bharuch', exeDivision: 'R&B Division, Bharuch',
      workNameGuj: 'મકાનોના નવીનીકરણ', workNameEng: 'Building Renovation', secSubSector: '-', sacEstimatedCost: 1000,
      actualEstablishment: 2, actualMachinery: 7, proposeAmount: 100, css: 'Y',
      workDescEng: 'Construction of buildings for govt. Hostel and Residential schools at Visnagar,Dhandhuka,Rajula',
      workDescGuj: 'વિસનગર, ધંધુકા, રાજુલા ખાતે છોકરાઓ અને છોકરીઓ માટે સરકારી છાત્રાલયો અને નિવાસી શાળાઓનું બાંધકામ',
      remarksEng: 'Construction of buildings for govt. Hostel and Residential schools at Visnagar,Dhandhuka,Rajula',
      remarksGuj: 'વિસનગર, ધંધુકા, રાજુલા ખાતે છોકરાઓ અને છોકરીઓ માટે સરકારી છાત્રાલયો અને નિવાસી શાળાઓનું બાંધકામ'
    },
  ];

  brwoseData: any[] = [{
    attachmentType: undefined,
    name: undefined,
    file: undefined,
  }];
// Attachments Table
  displayedBrowseColumns = ['position', 'attachmentType', 'fileName', 'browse', 'uploadedFileName', 'uploadedBy', 'action'];
  dataSourceBrowse = new MatTableDataSource(this.brwoseData); // This is for attachement table datasource.
  fileBrowseIndex: number;
  createEstimateForm: FormGroup;
  newWorkEstimate: FormGroup;
  subscribeParams: Subscription;
  filteredCodes: Observable<string[]>;
  tabDisable: Boolean = true;
  doneHeader: Boolean = false;
  estimateForFilter = [];
  displayedBrowseColumnss = ['browse', 'uploadedFileName', 'action'];
  EstimateForm: FormGroup;
  financialYearCtrl: FormControl = new FormControl();
  departmentCodeCtrl: FormControl = new FormControl();
  demandCodeCtrl: FormControl = new FormControl();
  majorHeadCodeCtrl: FormControl = new FormControl();
  subMajorHeadCodeCtrl: FormControl = new FormControl();
  minorHeadCodeCtrl: FormControl = new FormControl();
  subHeadCodeCtrl: FormControl = new FormControl();
  detailHeadCodeCtrl: FormControl = new FormControl();
  proposalCategoryCtrl: FormControl = new FormControl();
  majorCategoryCtrl: FormControl = new FormControl();
  proposalTypeCtrl: FormControl = new FormControl();
  schemeTypeCtrl: FormControl = new FormControl();
  objectHeadCtrl: FormControl = new FormControl();
  itemNameCtrl: FormControl = new FormControl();
  establishmentCtrl: FormControl = new FormControl();
  expenditureTypeCtrl: FormControl = new FormControl();
  revenueCapitalCtrl: FormControl = new FormControl();
  chargedVotedCtrl: FormControl = new FormControl();
  ministerInChargeCtrl: FormControl = new FormControl();
  stateRatio = 60;
  cssRatio = 40;
  private _onDestroy = new Subject<void>();
// New Work List Tab Data CSS
  displayedColumnsExecel: CommonListingClass[] = [
    { value: 'workNo', viewValue: 'Item No.', class: '' },
    { value: 'locality', viewValue: 'Locality', class: '' },
    { value: 'exeDivision', viewValue: 'Executive Division', class: '' },
    { value: 'workNameEng', viewValue: 'Name of Work (English)', class: '' },
    { value: 'workNameGuj', viewValue: 'Name of Work (Gujarati)', class: '' },
    { value: 'sacEstimatedCost', viewValue: 'Estimated Cost', class: 'rightAlign' },
    { value: 'actualEstablishment', viewValue: 'Actual Establishment', class: '' },
    { value: 'actualMachinery', viewValue: 'Actual Machinery', class: 'rightAlign' },
    { value: 'proposeAmount', viewValue: 'Amount Proposed For 2020-2021', class: 'rightAlign' },
    { value: 'css', viewValue: 'CSS', class: '' },
    { value: 'action', viewValue: 'Action', class: '' },
  ];
  // New Work List Tab Data State
  displayedColumnsExecel1: CommonListingClass[] = [
    { value: 'workNo', viewValue: 'Item No.', class: '' },
    { value: 'locality', viewValue: 'Locality', class: '' },
    { value: 'exeDivision', viewValue: 'Executive Division', class: '' },
    { value: 'workNameEng', viewValue: 'Name of Work (English)', class: '' },
    { value: 'workNameGuj', viewValue: 'Name of Work (Gujarati)', class: '' },
    { value: 'sacEstimatedCost', viewValue: 'Estimated Cost', class: 'rightAlign' },
    { value: 'actualEstablishment', viewValue: 'Actual Establishment', class: '' },
    { value: 'actualMachinery', viewValue: 'Actual Machinery', class: 'rightAlign' },
    { value: 'proposeAmount', viewValue: 'Amount Proposed For 2020-2021', class: 'rightAlign' },
    { value: 'action', viewValue: 'Action', class: '' },
  ];

  districtList: CommonListing[] = [
    { value: '1', viewValue: 'Ahmedabad' },
    { value: '2', viewValue: 'Amreli' },
    { value: '3', viewValue: 'Anand' },
    { value: '4', viewValue: 'Aravalli-Modasa' },
    { value: '5', viewValue: 'Banasakantha – Palanpur' },
    { value: '6', viewValue: 'Bhavnagar' },
    { value: '7', viewValue: 'Bharuch' },
    { value: '8', viewValue: 'Botad' },
    { value: '9', viewValue: 'Chhota Udepur' },
    { value: '10', viewValue: 'Dahod' },
    { value: '11', viewValue: 'Dang – Ahwa' },
    { value: '12', viewValue: 'Devbhoomi Dwarka-Jamkhambhaliya' },
    { value: '13', viewValue: 'Gandhinagar' },
    { value: '14', viewValue: 'Gir somnath (Veraval)' },
    { value: '15', viewValue: 'Jamnagar' },
    { value: '16', viewValue: 'Junagadh' },
    { value: '17', viewValue: 'Kheda-Nadiad' },
    { value: '18', viewValue: 'Kutch (Bhuj)' },
    { value: '19', viewValue: 'Mahesana' },
    { value: '20', viewValue: 'Mahisagar-Lunawada' },
    { value: '21', viewValue: 'Morbi' },
    { value: '22', viewValue: 'Narmada-Rajpipala' },
    { value: '23', viewValue: 'Navsari' },
    { value: '24', viewValue: 'Panchmahal (Godhara)' },
    { value: '25', viewValue: 'Patan' },
    { value: '26', viewValue: 'Porbandar' },
    { value: '27', viewValue: 'Rajkot' },
    { value: '28', viewValue: 'Sabarkantha – Himatnagar' },
    { value: '29', viewValue: 'Surat' },
    { value: '30', viewValue: 'Surendranagar' },
    { value: '31', viewValue: 'Tapi – Vyara' },
    { value: '32', viewValue: 'Vadodara' },
    { value: '33', viewValue: 'Valsad' },
  ];

  localityList: CommonListing[] = [
    { value: '1', viewValue: 'Gandhinagar' },
    { value: '2', viewValue: 'Vijapur' },
    { value: '3', viewValue: 'Mahesana' },
    { value: '4', viewValue: 'Navsari' },
    { value: '5', viewValue: 'Dahod' }
  ];

  executiveDivisionList: CommonListing[] = [
    { value: '1', viewValue: 'R&B Various Divisions' },
    { value: '2', viewValue: 'Panchayat (R&B) Various Divisions' },
    { value: '3', viewValue: 'R&B Division, Ahmedabad' },
    { value: '4', viewValue: 'R&B Division, Bharuch' },
    { value: '5', viewValue: 'R&B Division, Himmatnagar' },
    { value: '6', viewValue: 'R&B Division, Mahesana' },
  ];

  placeChargeValid2: CommonListing[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' },

  ];

  placeChargeValid3: CommonListing[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' },

  ];

  placeChargeValid4: CommonListing[] = [
    { value: '1', viewValue: 'Administrative Department' },
    { value: '2', viewValue: '3rd Party' },
    { value: '3', viewValue: 'PMC Agency' }
  ];

  isCheckList = false;

  attachmentlist: CommonListing[] = [
    { value: '1', viewValue: 'Supporting Document' },
    { value: '2', viewValue: 'Sanction Order' },
    { value: '2', viewValue: 'Other' },
  ];

  displayedColumnsHeaders1: string[] = [
    'workNo', 'locality', 'exeDivision', 'workNameEng', 'workNameGuj',
    'proposeAmount', 'actualEstablishment', 'actualMachinery', 'sacEstimatedCost', 'action'
  ];

  displayedColumnsHeaders: string[] = [
    'workNo', 'locality', 'exeDivision', 'workNameEng', 'workNameGuj',
    'proposeAmount', 'actualEstablishment', 'actualMachinery', 'sacEstimatedCost', 'action'
  ];

  districtCtrl: FormControl = new FormControl();
  localityCtrl: FormControl = new FormControl();
  executiveDivisionCtrl: FormControl = new FormControl();
  attachmentTypeCtrl: FormControl = new FormControl();
  placeCtrl2: FormControl = new FormControl();
  placeCtrl3: FormControl = new FormControl();
  placeCtrl4: FormControl = new FormControl();

  yesNo = false;
  yesNo2 = false;
  placeCharge2: string;
  placeCharge3: string;
  placeCharge4: string;

  exeDataSource = new MatTableDataSource<NewWorkEstimateList>(this.ELEMENT_EXE_DATA);
  constructor(
    private elem: ElementRef,
    public dialog: MatDialog,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private el: ElementRef,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  showState = true;
  showCSS = true;
  public scheme;

  addBrowserow() {
    this.dataSourceBrowse.data.push(['browse', 'uploadedFileName', 'action']);
    this.dataSourceBrowse = new MatTableDataSource(this.dataSourceBrowse.data);
  }
  deleteRow(element, index) {
    this.dataSourceBrowse.data.splice(index, 1);
    this.dataSourceBrowse = new MatTableDataSource(this.dataSourceBrowse.data);
  }

  ngOnInit() {
    this.errorMessages = budgetMessage;
    this.selectedindex = 1;
    this.newWorkEstimate = this.fb.group({
      workNo: [''],
      district: ['', Validators.required],
      locality: ['', Validators.required],
      executiveDivision: ['', Validators.required],
      workNameEng: ['', Validators.required],
      workNameGuj: ['', Validators.required],
      ratioOfState: ['60%'],
      ratioOfCss: ['40%'],
      workDescEng: [''],
      workDescGuj: [''],
      remarksEng: [''],
      remarksGuj: [''],
      actualEstablishment: [''],
      actualMachinery: [''],
      sanctionedCost: ['', Validators.required],
      provisionPropose: ['', Validators.required],
      explanationOfWork: [''],
      expenditureType: [''],
      provisionProposedState: [''],
      provisionProposedCss: [''],
      actualEstablishmentState: [''],
      actualEstablishmentCss: [''],
      actualMachineryState: [''],
      actualMachineryCss: [''],
      estimatedCost: [''],
    });
    this.createForm();

    this.subscribeParams = this.activatedRoute.params.subscribe(resRoute => {
      // debugger

      this.scheme = resRoute.id;

    });

    if (this.scheme == '1') {
      this.showState = true;
      this.showCSS = false;

    } else if (this.scheme == '2') {
      this.showState = false;
      this.showCSS = true;
    }

  }

  createForm() {
    this.EstimateForm = this.fb.group({
      formType: ['1', Validators.required],
      finYear: ['1', Validators.required],
      departmentCode: ['1', Validators.required],
      branchCode: ['1', Validators.required],
      estimationFrom: ['1', Validators.required],
      estimationFor: ['1', Validators.required],
      demandCode: ['1', Validators.required],
      ministerInCharge: ['1', Validators.required],
      bpnCode: ['1', Validators.required],
      majorHeadCode: ['1', Validators.required],
      subMajorHeadCode: ['1', Validators.required],
      minorHeadCode: ['1', Validators.required],
      subHeadCode: ['1', Validators.required],
      detailHeadCode: ['1', Validators.required],
      chargedVoted: ['2', Validators.required],
      schemeType: ['1', Validators.required],
      cssPercentage: ['1', [Validators.min(0), Validators.max(100)]],
      itemCategory: ['1', Validators.required],
      itemName: ['1', [Validators.required]],
      writeUpEng: ['1', [Validators.required]],
      writeUpGuj: ['1', [Validators.required]],
      financialYear: ['3'],
      proposalCategory: ['3'],
      majorCategory: ['1'],
      proposalType: ['1'],
      objectHead: ['1'],
      itemWorkName: [''],
      writeUpEnglish: [''],
      writeUpGujrati: [''],
      establishment: ['1'],
      expenditureType: ['1'],
      itemNames: [''],
      revenueCapital: ['1'],
      schemeTypeRatio: ['1'],

      noOfMonths: [{ value: 13 - new Date().getMonth().valueOf(), disabled: true }],
    });
    this.EstimateForm.disable();
  }

// Checklist Functions
  placeSelection2() {
    if (this.placeCharge2 == '1') {
      this.yesNo = true;
    } else {
      this.yesNo = false;
    }

  }
  placeSelection3() {
    if (this.placeCharge3 == '1') {
      this.yesNo2 = true;
    } else {
      this.yesNo2 = false;
    }
  }
  showchecklist() {
    this.isCheckList = !this.isCheckList;
  }
  // History Popup
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




  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }

  gotoBudget() {
    this.router.navigate(['./budget/budget']);
  }
  goToNext() {
    this.tabDisable = false;
    this.selectedindex = 1;

  }
  // gotoTab(index: number) {
  //   this.selectedindex = index;
  // }

// Edit Button Functions
  editWork() {
    this.newWorkEstimate.patchValue({
      executiveDivision: '00',
      workNameEng: 'Building Renovation',
      workNameGuj: 'મકાનોના નવીનીકરણ	',
      sanctionedCost: '100.00',
      actualEstablishment: '2.00',
      actualMachinery: '7.00',
      provisionPropose: '100.00'
    });
    this.selectedindex = 2;
  }
  editWork2() {
    this.newWorkEstimate.patchValue({
      executiveDivision: '00',
      workNameEng: 'Building Renovation',
      workNameGuj: 'મકાનોના નવીનીકરણ	',
      sanctionedCost: '100.00',
      actualEstablishment: '2.00',
      actualMachinery: '7.00',
      provisionPropose: '100.00'
    });
    this.selectedindex = 2;
  }

  saveEstimate() { }
  showSchemeRatio() { }
  addNewWork() {
    if (this.newWorkEstimate.invalid) {
      this.toastr.error('Please fill required details before proceeds.');
    } else {
      this.newWorkEstimate.reset();
      this.newWorkEstimate.get('workNo').setValue('1002');
      this.selectedindex = 2;
    }
  }
// Gujarati English Language Functions
  setEnglishOnFocusOut() {
    SetEnglish();
  }
  setGujaratiDefault() {
    if (!this.isLangChange) {
      SetGujarati();
      this.currentLang.next('Eng');
    }
  }
  toggleLanguage() {
    this.isLangChange = true;
    const elements = this.elem.nativeElement.querySelectorAll('.hasfocus')[0];
    if (elements != undefined) {
      if (this.currentLang.value == 'Guj') {
        SetEnglish();
        this.currentLang.next('Eng');
      } else {
        SetGujarati();
        this.currentLang.next('Guj');
      }
      elements.focus();
    }
  }

  checkGujarati(data) {
    this.newWorkEstimate.patchValue({
      workNameGuj: data
    });
  }
  // Attachments Section Functions
  onFileSelection(fileSelected) {
    if (fileSelected.target && fileSelected.target.files) {
      this.dataSourceBrowse.data[this.fileBrowseIndex].file = fileSelected.target.files[0];
    }
  }

  openFileSelector(index) {
    this.el.nativeElement.querySelector('#fileBrowse').click();
    this.fileBrowseIndex = index;
  }

  onBrowseSelectChange() { }

  addBrowse() {
    if (this.dataSourceBrowse) {
      const data = this.dataSourceBrowse.data[this.dataSourceBrowse.data.length - 1];
      if (data && data.name && data.file) {
        const p_data = this.dataSourceBrowse.data;
        p_data.push({
          attachmentType: '',
          name: '',
          file: '',
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

  resetUpload() {
    if (this.dataSourceBrowse.data.length > 0) {
      this.dataSourceBrowse.data.forEach((obj: any, key: any) => {
        if (key == 0) {
          this.dataSourceBrowse.data[0]['name'] = '';
          this.dataSourceBrowse.data[0]['file'] = '';
        } else {
          const index = this.dataSourceBrowse.data.indexOf(obj);
          this.dataSourceBrowse.data.splice(index, 1);
        }
      });
    }
    this.dataSourceBrowse = new MatTableDataSource(this.dataSourceBrowse.data);
  }
// Two Point Decimal Number
  decimalPoint2($event) {
    $event.target.value = parseFloat($event.target.value).toFixed(2);

  }

  // provisionProposedStateDisabled = false;
  // provisionProposedCssDisabled = false;
// For calculation of Establishment and Machinery Amount for State and CSS
  calculateCSS() {
    if (this.newWorkEstimate.controls['provisionProposedState'].value != '') {
      // tslint:disable-next-line: max-line-length
      const provisionProposedCssValue = Number((this.newWorkEstimate.controls['provisionProposedState'].value * this.cssRatio) / this.stateRatio).toFixed(2);
      this.newWorkEstimate.controls['provisionProposedCss'].setValue(provisionProposedCssValue);

      const actualEstablishmentStateValue = Number((this.newWorkEstimate.controls['provisionProposedState'].value * 2) / 100).toFixed(2);
      const actualMachineryStateValue = Number((this.newWorkEstimate.controls['provisionProposedState'].value * 7) / 100).toFixed(2);
      this.newWorkEstimate.controls['actualEstablishmentState'].setValue(actualEstablishmentStateValue);
      this.newWorkEstimate.controls['actualMachineryState'].setValue(actualMachineryStateValue);

      const actualEstablishmentCssValue = Number((this.newWorkEstimate.controls['provisionProposedCss'].value * 2) / 100).toFixed(2);
      const actualMachineryCssValue = Number((this.newWorkEstimate.controls['provisionProposedCss'].value * 7) / 100).toFixed(2);
      this.newWorkEstimate.controls['actualEstablishmentCss'].setValue(actualEstablishmentCssValue);
      this.newWorkEstimate.controls['actualMachineryCss'].setValue(actualMachineryCssValue);

      // this.provisionProposedCssDisabled = true;
    }
  }
// For calculation of Establishment and Machinery Amount for State and CSS
  calculateState() {
    if (this.newWorkEstimate.controls['provisionProposedCss'].value != '') {
      // tslint:disable-next-line: max-line-length
      const provisionProposedStateValue = Number((this.newWorkEstimate.controls['provisionProposedCss'].value * this.stateRatio) / this.cssRatio).toFixed(2);
      this.newWorkEstimate.controls['provisionProposedState'].setValue(provisionProposedStateValue);

      const actualEstablishmentCssValue = Number((this.newWorkEstimate.controls['provisionProposedCss'].value * 2) / 100).toFixed(2);
      const actualMachineryCssValue = Number((this.newWorkEstimate.controls['provisionProposedCss'].value * 7) / 100).toFixed(2);
      this.newWorkEstimate.controls['actualEstablishmentCss'].setValue(actualEstablishmentCssValue);
      this.newWorkEstimate.controls['actualMachineryCss'].setValue(actualMachineryCssValue);

      const actualEstablishmentStateValue = Number((this.newWorkEstimate.controls['provisionProposedState'].value * 2) / 100).toFixed(2);
      const actualMachineryStateValue = Number((this.newWorkEstimate.controls['provisionProposedState'].value * 7) / 100).toFixed(2);
      this.newWorkEstimate.controls['actualEstablishmentState'].setValue(actualEstablishmentStateValue);
      this.newWorkEstimate.controls['actualMachineryState'].setValue(actualMachineryStateValue);
      // this.provisionProposedStateDisabled = true;
    }
  }

  decimalKeyPress(event: any) {
    const pattern = /^\d+(\.\d{0,2})?$/;
    const inputChar = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    // If the key is backspace, tab, left, right or delete
    let tempstr = event.target.value;
    tempstr += inputChar;

    if (!pattern.test(tempstr)) {
      // invalid character, prevent input
      event.preventDefault();
      return false;
    }
  }
  whenAddClick() {
    this.selectedindex = 3;
  }

  gotoListing() {
    this.router.navigate(['./budget/budget-list']);
  }
  goToDashboard() { this.router.navigate(['']); }

  goBack() { this.router.navigate(['./budget/budget']); }

  // Submit Popup
  submitToNextLevel(): void {
    const dialogRef = this.dialog.open(StandingChargeForwardDialogComponent1, {
      width: '2700px',
      height: '600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'no') {
        console.log('The dialog was closed', result);
      } else if (result === 'yes') {
        console.log('The dialog was closed', result);
      }
    });
  }


}



