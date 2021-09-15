import { CommonListing } from 'src/app/model/common-listing';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { SubmitConfirmCommonDialogComponent } from '../annexure-a/annexure-a.component';
import { budgetMessage } from 'src/app/common/error-message/common-message.constants';
import { MhObjectMap } from 'src/app/model/budget';
import { BudgetDirectives } from 'src/app/common/directive/budget-directive';


// Listing table data
const ELEMENT_DATA: MhObjectMap[] = [
  {
    majorHead: '1601', subMajorHead: '06', minHead: '101', subHead: '01', detHead: '01', objHead: '0131',
    majorHeadToolTip: '1601:Grants-in-aid from Central Government', subMajorHeadToolTip: '06 :Centrally Sponsored Schemes',
    minHeadToolTip: '101:Central Assistance/Share', subHeadToolTip: '01:Green Revolution',
    // tslint:disable-next-line: max-line-length
    detHeadToolTip: '01:Krishi Unati Yojana', objHeadToolTip: '0131:Sub-mission on Agriculture Extension (SAME)- Support to State Extension Programmes for Extension Reforms (ATMA)',
   },
   {
    majorHead: '1601', subMajorHead: '06', minHead: '101', subHead: '02', detHead: '01', objHead: '0331',
    majorHeadToolTip: '1601:Grants-in-aid from Central Government', subMajorHeadToolTip: '06 :Centrally Sponsored Schemes',
    minHeadToolTip: '101:Central Assistance/Share', subHeadToolTip: '02:White Revolution- Rashtriya Pasudhan Vikas Yojana',
    detHeadToolTip: '01:Krishi Unati Yojana', objHeadToolTip: '0331:National Mission for Sustainable',
   },
   {
    majorHead: '1601', subMajorHead: '06', minHead: '101', subHead: '03', detHead: '01', objHead: '0431',
    majorHeadToolTip: '1601:Grants-in-aid from Central Government', subMajorHeadToolTip: '06 :Centrally Sponsored Schemes',
    // tslint:disable-next-line: max-line-length
    minHeadToolTip: '101:Central Assistance/Share', subHeadToolTip: '03:Blue Revolution- Integrated development and Management of of Fisheries',
    detHeadToolTip: '01:Krishi Unati Yojana', objHeadToolTip: '0431:National Mission on Oil seeds and Oil Palm (NMOOP)',
  },
   {
    majorHead: '1601', subMajorHead: '06', minHead: '101', subHead: '04', detHead: '01', objHead: '0531',
    majorHeadToolTip: '1601:Grants-in-aid from Central Government', subMajorHeadToolTip: '06 :Centrally Sponsored Schemes',
    minHeadToolTip: '101:Central Assistance/Share', subHeadToolTip: '04:Pradhan Mantri Krishi Sinchay Yojana',
    detHeadToolTip: '01:Krishi Unati Yojana', objHeadToolTip: '0531:Submission on Agriculture Mechanization',
  },
   {
    majorHead: '1601', subMajorHead: '06', minHead: '101', subHead: '05', detHead: '01', objHead: '0631',
    majorHeadToolTip: '1601:Grants-in-aid from Central Government', subMajorHeadToolTip: '06 :Centrally Sponsored Schemes',
    minHeadToolTip: '101:Central Assistance/Share', subHeadToolTip: '05:Food',
    detHeadToolTip: '01:Krishi Unati Yojana', objHeadToolTip: '0631:National Food Security Mission',
  },
   {
    majorHead: '1601', subMajorHead: '06', minHead: '101', subHead: '06', detHead: '01', objHead: '0831',
    majorHeadToolTip: '1601:Grants-in-aid from Central Government', subMajorHeadToolTip: '06 :Centrally Sponsored Schemes',
    minHeadToolTip: '101:Central Assistance/Share', subHeadToolTip: '06:National Education Mission(NEM)',
    detHeadToolTip: '01:Krishi Unati Yojana', objHeadToolTip: '0831:Submission on Seeds and Planting Matirial (SMSP)',
  },
   {
    majorHead: '1601', subMajorHead: '06', minHead: '101', subHead: '07', detHead: '01', objHead: '0835',
    majorHeadToolTip: '1601:Grants-in-aid from Central Government', subMajorHeadToolTip: '06 :Centrally Sponsored Schemes',
    minHeadToolTip: '101:Central Assistance/Share', subHeadToolTip: '07:Mid Day Meal Programme',
    detHeadToolTip: '01:Krishi Unati Yojana', objHeadToolTip: '0835:Submission on seeds and planting material',
  },
   {
    majorHead: '1601', subMajorHead: '06', minHead: '102', subHead: '08', detHead: '01', objHead: '0131',
    majorHeadToolTip: '1601:Grants-in-aid from Central Government', subMajorHeadToolTip: '06 :Centrally Sponsored Schemes',
    // tslint:disable-next-line: max-line-length
    minHeadToolTip: '102:Externally Aided Projects/Grants for Centrally Sponcered Schemes', subHeadToolTip: '08:Enviorment,Forestry and Wild Life(FEEL)',
    detHeadToolTip: '01:Krishi Unati Yojana', objHeadToolTip: '0131:Aajeevika-Natioanl Rural Livelihoods Mission',
  },
];

@Component({
  selector: 'app-mh-object-mapping',
  templateUrl: './mh-object-mapping.component.html',
  styleUrls: ['./mh-object-mapping.component.css']
})
export class MhObjectMappingComponent implements OnInit {
  directiveObject = new BudgetDirectives(this.dialog);
// Entry Field Details
  finYear_list: CommonListing[] = [
    { value: '1', viewValue: '2010-2011' },
    { value: '2', viewValue: '2011-2012' },
    { value: '3', viewValue: '2012-2013' },
    { value: '4', viewValue: '2013-2014' },
    { value: '5', viewValue: '2014-2015' },
    { value: '6', viewValue: '2015-2016' },
    { value: '7', viewValue: '2016-2017' },
    { value: '8', viewValue: '2017-2018' },
    { value: '9', viewValue: '2018-2019' },
    { value: '10', viewValue: '2019-2020' },
    { value: '11', viewValue: '2020-2021' },
    { value: '12', viewValue: '2021-2022' },
  ];
  subMajor_list: CommonListing[] = [
    { value: '1', viewValue: '06 :Centrally Sponsored Schemes'},
  ];
  minorHead_list: CommonListing[] = [
    { value: '1', viewValue: '101:Central Assistance/Share'},
    { value: '2', viewValue: '102:Externally Aided Projects/Grants for Centrally Sponcered Schemes'},
  ];
  subHead_list: CommonListing[] = [
    { value: '1', viewValue: '01:Green Revolution'},
    { value: '2', viewValue: '02:White Revolution- Rashtriya Pasudhan Vikas Yojana'},
    { value: '3', viewValue: '03:Blue Revolution- Integrated development and Management of of Fisheries'},
    { value: '4', viewValue: '04:Pradhan Mantri Krishi Sinchay Yojana'},
    { value: '5', viewValue: '05:Food'},
    { value: '6', viewValue: '06:National Education Mission(NEM)'},
    { value: '7', viewValue: '07:Mid Day Meal Programme'},
    { value: '8', viewValue: '08:Enviorment,Forestry and Wild Life(FEEL)'},
  ];
  dHead_list: CommonListing[] = [
    { value: '1', viewValue: '01:Krishi Unati Yojana'},
    { value: '2', viewValue: '01:Livestock Health and Disease Control'},
    { value: '3', viewValue: '01:Blue Revolution- Integrated development and Management of of Fisheries'},
    // tslint:disable-next-line: max-line-length
    { value: '4', viewValue: '01:Central Assistnce to States-UTs for meeeting expenduture on intra-state movement, handling of food grains and FPS dealers margine under NFSA'},
    { value: '5', viewValue: '01:National Education Mission-Sarva Shiksha Abhiyan (SSA)'},
    { value: '6', viewValue: '01:National Programme of Mid Day Meals in School'},
    { value: '7', viewValue: '02:Integrated Development of Wild life Habitates'},
  ];
  oHead_list: CommonListing[] = [
    // tslint:disable-next-line: max-line-length
    { value: '1', viewValue: '0131:Sub-mission on Agriculture Extension (SAME)- Support to State Extension Programmes for Extension Reforms (ATMA)'},
    { value: '2', viewValue: '0331:National Mission for Sustainable'},
    { value: '3', viewValue: '0431:National Mission on Oil seeds and Oil Palm (NMOOP)'},
    { value: '4', viewValue: '0531:Submission on Agriculture Mechanization'},
    { value: '5', viewValue: '0631:National Food Security Mission'},
    { value: '6', viewValue: '0831:Submission on Seeds and Planting Matirial (SMSP)'},
    { value: '7', viewValue: '0835:Submission on seeds and planting material'},
    { value: '8', viewValue: '0131:Aajeevika-Natioanl Rural Livelihoods Mission'},
  ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  displayedColumns: string[] = ['position', 'majorHead', 'subMajorHead', 'minHead', 'subHead', 'detHead', 'objHead', 'action'];

  finYearCtrl: FormControl = new FormControl();
  subMajorCtrl: FormControl = new FormControl();
  minorHeadCtrl: FormControl = new FormControl();
  subHeadCtrl: FormControl = new FormControl();
  dHeadCtrl: FormControl = new FormControl();
  oHeadCtrl: FormControl = new FormControl();
  onGo = false;
  whenAdd = false;

  mhForm: FormGroup;
  errorMessages = budgetMessage;

  constructor(private fb: FormBuilder,
    private router: Router,
    public dialog: MatDialog,
    private toastr: ToastrService) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.mhForm = this.fb.group({
      finYear: ['11', Validators.required],
      majorHead: ['1601:Grants-in-aid from Central Government'],
      subMajor: [''],
      minorHead: [''],
      subHead: [''],
      dHead: [''],
      oHead: [''],
    });
  }
  // Delete Record
  deleteRec(index) {
    this.dataSource.data.splice(index, 1);
    this.dataSource = new MatTableDataSource(
      this.dataSource.data
    );
  }
  // to show other fields
  onGoClick() {
    this.onGo = true;
  }
  // on search Click
  whenAddClick() {
    this.whenAdd = true;
  }
  goToDashboard() {
    this.router.navigate(['']);
  }
}
