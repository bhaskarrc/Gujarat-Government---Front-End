import { CommonListing } from 'src/app/model/common-listing';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { SubmitConfirmCommonDialogComponent } from '../annexure-a/annexure-a.component';
import { budgetMessage } from 'src/app/common/error-message/common-message.constants';
import { SchemeTypeWise } from 'src/app/model/budget';
import { BudgetDirectives } from 'src/app/common/directive/budget-directive';


// Listing table data
const ELEMENT_DATA: SchemeTypeWise[] = [
  {
    normal: '01:2070:00:105:01:00:Enquiry Commission for godowns fire'
   },
   {
    normal: '02:2401:00:001:01:00:Direcorate of Agriculture Establishment'
   },
   {
    normal: '02:2401:00:001:02:00:District Establishment'
  },
   {
    normal: '02:2401:00:001:05:00:HRT-1 Directorate of Horitculture'
  },
   {
    normal: '02:2401:00:001:06:00:HRT-1 Directorate of Animal Husbandry'
  },
];

@Component({
  selector: 'app-scheme-type-wise-mapping',
  templateUrl: './scheme-type-wise-mapping.component.html',
  styleUrls: ['./scheme-type-wise-mapping.component.css']
})
export class SchemeTypeWiseMappingComponent implements OnInit {
  directiveObject = new BudgetDirectives(this.dialog);
// Entry Field Details
  finYear_list: CommonListing[] = [
    { value: '1', viewValue: '2011-2012' },
    { value: '2', viewValue: '2012-2013' },
    { value: '3', viewValue: '2013-2014' },
    { value: '4', viewValue: '2014-2015' },
    { value: '5', viewValue: '2015-2016' },
    { value: '6', viewValue: '2016-2017' },
    { value: '7', viewValue: '2017-2018' },
    { value: '8', viewValue: '2018-2019' },
    { value: '9', viewValue: '2019-2020' },
    { value: '10', viewValue: '2020-2021' },
    { value: '11', viewValue: '2021-2022' },
  ];
  dept_list: CommonListing[] = [
    { value: '1', viewValue: 'Agriculture, Famers welfare and Co-operation Department' },
    { value: '2', viewValue: 'Climate Change Department' },
    { value: '3', viewValue: 'Education Department' },
    { value: '4', viewValue: 'Energy & Petrochemicals Department' },
    { value: '5', viewValue: 'Finance Department' },
    { value: '6', viewValue: 'Food, Civil Supplies & Consumer Affairs Department' },
    { value: '7', viewValue: 'Forest & Environment Department' },
    { value: '8', viewValue: 'General Administration Department' },
    { value: '9', viewValue: 'Gujarat Legislature Secretariat Department' },
    { value: '10', viewValue: 'Health & Family Welfare Department' },
    { value: '11', viewValue: 'Home Department' },
    { value: '12', viewValue: 'Industries & Mines Department' },
    { value: '13', viewValue: 'Information & Broadcasting Department' },
    { value: '14', viewValue: 'Labour & Employment Department' },
    { value: '15', viewValue: 'Legal Department' },
    { value: '16', viewValue: 'Legislative & Parliamentary Affairs Department' },
    { value: '17', viewValue: 'Narmada, Water Resources, Water Supply & Kalpsar Department' },
    { value: '18', viewValue: 'Panchayat, Rural Housing & Rural Development Department' },
    { value: '19', viewValue: 'Ports & Transport Department' },
    { value: '20', viewValue: 'Revenue Department' },
    { value: '21', viewValue: 'Roads & Buildings Department' },
    { value: '22', viewValue: 'Science & Technology Department' },
    { value: '23', viewValue: 'Social Justice & Empowerment Department' },
    { value: '24', viewValue: 'Sports, Youth & Cultural Activities Department' },
    { value: '25', viewValue: 'Tribal Development Department' },
    { value: '26', viewValue: 'Urban Development & Urban Housing Department' },
    { value: '27', viewValue: 'Women & Child Development Department' },
  ];
  bpn_list: CommonListing[] = [
    { value: '1', viewValue: '03:Agriculture, Farmers Welfare & Co-Operation Department' },
    { value: '2', viewValue: '04:Education Department' },
    { value: '3', viewValue: '05:Energy and Petro-Chemicals Department' },
    { value: '4', viewValue: '06:Finance Department' },
    { value: '5', viewValue: '07:Food, Civil Supplies and Consumer Affairs Department' }
  ];
  normal_list: CommonListing[] = [
    { value: '1', viewValue: '01:2070:00:105:01:00:Enquiry Commission for godowns fire' },
    { value: '2', viewValue: '02:2401:00:001:01:00:Direcorate of Agriculture Establishment' },
    { value: '3', viewValue: '02:2401:00:001:02:00:District Establishment' },
    { value: '4', viewValue: '02:2401:00:001:05:00:HRT-1 Directorate of Horitculture' },
    { value: '5', viewValue: '02:2401:00:001:06:00:HRT-1 Directorate of Animal Husbandry' },
  ];
  scsp_list: CommonListing[] = [
    { value: '1', viewValue: '95:2014:00:105:01:00:BCK-64 Scheduled Castes Sub-Plan Scheduled Castes, Distric Session Judges' },
    { value: '2', viewValue: '95:2202:01:106:01:00:EDN-3 Scheduled Caste SubPlan Improvement of physical facilities in Primary Schools'},
    { value: '3', viewValue: '95:2202:01:106:02:00:EDN-84 Computerization Project in Primary Schools' },
    { value: '4', viewValue: '95:2202:01:106:03:00:EDN-84 EDN-145 Fee Reimburshment to Private Unaided Schools' },
    { value: '5', viewValue: '95:2202:01:106:04:00:EDN-84 EDN-145 Refurnishing of existing primary school, class roomg' }
  ];
  tasp_list: CommonListing[] = [
    { value: '1',
     viewValue: '96:2202:01:796:01:00 EDN-1 Additional Teachers for add enrollment in Primary Schools for enrolling Additional pupils'},
    { value: '2',
     viewValue: '96:2202:01:796:02:00 EDN-1 EDN-46 Free and Universal Primary education for all Children upto the age of 14 year by'},
    { value: '3',
     viewValue: '96:2202:01:796:03:00 EDN-1 Additional Teachers for add enrollment in Primary Schools for enrolling Additional pupils'},
    { value: '4', viewValue: '96:2202:01:796:04:00 EDN-5 Conservation of single teacher school into two teacher school'},
    { value: '5', viewValue: '96:2202:01:796:09:00 EDN-5 EDN-5 Strengherting of Supervisory machinery'},
  ];
  works_list: CommonListing[] = [
    { value: '1', viewValue: '85:2216:05:053:01:00 Maintenance and Repairs'},
    { value: '2', viewValue: '85:2216:80:800:01:00 Maintenance and Repairs to Residential Buildings'},
  ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
// Listing Table
  displayedColumns: string[] = ['position', 'normal', 'scsp', 'tasp', 'works', 'action'];

  finYearCtrl: FormControl = new FormControl();
  deptCtrl: FormControl = new FormControl();
  bpnCtrl: FormControl = new FormControl();
  // normalCtrl: FormControl = new FormControl();
  scspCtrl: FormControl = new FormControl();
  taspCtrl: FormControl = new FormControl();
  worksCtrl: FormControl = new FormControl();
  date: any = new Date();
  onGo = false;

  mapForm: FormGroup;
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
    this.mapForm = this.fb.group({
      finYear: ['', Validators.required],
      dept: ['', Validators.required],
      bpn: ['', Validators.required],
      groupName: ['', Validators.required],
    });
  }
  onGoClick() {
    this.onGo = true;
  }
  goToDashboard() {
    this.router.navigate(['']);
  }
// delete record
  deleteRec(index) {
    this.dataSource.data.splice(index, 1);
    this.dataSource = new MatTableDataSource(this.dataSource.data);
  }

}
