
import { CommonListing } from 'src/app/model/common-listing';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatTableDataSource, MatDialog, MatDialogRef } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { SubmitConfirmCommonDialogComponent } from '../annexure-a/annexure-a.component';
import { budgetMessage } from 'src/app/common/error-message/common-message.constants';
import { DeleteConfirmDialogComponent } from '../wireframe-of-establishment-details/wireframe-of-establishment-details.component';
import { FdGroupMapping } from 'src/app/model/budget';
import { BudgetDirectives } from 'src/app/common/directive/budget-directive';


// Table data
const ELEMENT_DATA: FdGroupMapping[] = [
  {
    userName: 'Shri S J Shah',
    postName: 'Section Officer',
   },
   {
    userName: 'Shri R M Patel',
    postName: 'Deputy Section Officer',
   },
];

@Component({
  selector: 'app-fd-group-mapping',
  templateUrl: './fd-group-mapping.component.html',
  styleUrls: ['./fd-group-mapping.component.css']
})
export class FdGroupMappingComponent implements OnInit {
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
  ];
  bpn_list: CommonListing[] = [
    { value: '1', viewValue: '03:Agriculture, Farmers Welfare & Co-Operation Department' },
    { value: '2', viewValue: '04:Education Department' },
    { value: '3', viewValue: '05:Energy and Petro-Chemicals Department' },
    { value: '4', viewValue: '06:Finance Department' },
    { value: '5', viewValue: '07:Food, Civil Supplies and Consumer Affairs Department' }
  ];
  dep_list: CommonListing[] = [
    { value: '1', viewValue: 'Agriculture, Famers welfare and Co-operation Department'},
    { value: '2', viewValue: 'Climate Change Department'},
    { value: '3', viewValue: 'Education Department'},
    { value: '4', viewValue: 'Energy & Petrochemicals Department'},
    { value: '5', viewValue: 'Finance Department'},
    { value: '6', viewValue: 'Food, Civil Supplies & Consumer Affairs Department'},
    { value: '7', viewValue: 'Forest & Environment Department'},
    { value: '8', viewValue: 'General Administration Department'},
    { value: '9', viewValue: 'Gujarat Legislature Secretariat Department'},
    { value: '10', viewValue: 'Health & Family Welfare Department'},
    { value: '11', viewValue: 'Home Department'},
    { value: '12', viewValue: 'Industries & Mines Department'},
    { value: '13', viewValue: 'Information & Broadcasting Department'},
    { value: '14', viewValue: 'Labour & Employment Department'},
    { value: '15', viewValue: 'Legal Department'},
    { value: '16', viewValue: 'Legislative & Parliamentary Affairs Department'},
    { value: '17', viewValue: 'Narmada, Water Resources, Water Supply & Kalpsar Department'},
    { value: '18', viewValue: 'Panchayat, Rural Housing & Rural Development Department'},
    { value: '19', viewValue: 'Ports & Transport Department'},
    { value: '20', viewValue: 'Revenue Department'},
    { value: '21', viewValue: 'Roads & Buildings Department'},
    { value: '22', viewValue: 'Science & Technology Department'},
    { value: '23', viewValue: 'Social Justice & Empowerment Department'},
    { value: '24', viewValue: 'Sports, Youth & Cultural Activities Department'},
    { value: '25', viewValue: 'Tribal Development Department'},
    { value: '26', viewValue: 'Urban Development & Urban Housing Department'},
    { value: '27', viewValue: 'Women & Child Development Department'},
  ];
  demand_list: CommonListing[] = [
    { value: '1', viewValue: '001:Agriculture and Co-operation Department' },
    { value: '2', viewValue: '002:Agriculture' },
    { value: '3', viewValue: '047:Industries and Mines Department' },
    { value: '4', viewValue: '048:Stationery and Printing' },
    { value: '5', viewValue: '049:Industries' },
    { value: '6', viewValue: '084:Non-Residential Buildings' },
    { value: '7', viewValue: '085:Residential Buildings' },
    { value: '8', viewValue: '093: Welfare of Scheduled Tribes' },
    { value: '9', viewValue: '095: Scheduled Castes Sub Plan' },
    { value: '10', viewValue: '096:Tribal Area Sub-Plan' },
  ];
  majorHead_list: CommonListing[] = [
    { value: '1', viewValue: '3451:Secretariat-Economic Services' },
    { value: '2', viewValue: '5475:Capital Outlay on other General Economics Services'},
    { value: '3', viewValue: '2401:Crop Husbandry' },
    { value: '4', viewValue: '2071:Pensions and Other Retirement Benefits' },
    { value: '5', viewValue: '2058:Stationery and Printing' }
  ];
  // Entry Table
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  displayedColumns: string[] = ['position', 'userName', 'postName', 'action'];

  finYearCtrl: FormControl = new FormControl();
  bpnCtrl: FormControl = new FormControl();
  demandCodeCtrl: FormControl = new FormControl();
  majorHeadCtrl: FormControl = new FormControl();
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
      groupName: ['', Validators.required],
      bpn: ['', Validators.required],
      demandCode: ['', Validators.required],
      majorHead: ['', Validators.required],
    });
  }
  // Create Group button Click
  onGoClick() {
    this.onGo = true;
  }
  goToDashboard() {
    this.router.navigate(['']);
  }

  gotoListing() {
    this.router.navigate(['./budget/fd-group-mapping-list']);
  }
  // Open Add to Group Dialog
  addDetails() {
     const dialogRef = this.dialog.open(FdGroupMappingDialogComponent, {
       width: '2700px',

     });

     dialogRef.afterClosed().subscribe(result => {
      const p_data = this.dataSource.data;
      p_data.push({
        userName: 'User 1',
        postName: 'Officer',
      });
      this.dataSource.data = p_data;
     });
   }

   // Delete popup
   deleteConfirmationPopup(i) {
     const dialogRef = this.dialog.open(DeleteConfirmDialogComponent, {
       width: '400px'
     });

     dialogRef.afterClosed().subscribe(result => {
       if (result === 'yes') {
         this.deleteRow(i);
       }
     });
   }

   // Delete
   deleteRow(index) {
     this.dataSource.data.splice(index, 1);
     this.dataSource = new MatTableDataSource(this.dataSource.data);
   }
}

@Component({
  selector: 'app-fd-group-mapping-dialog',
  templateUrl: 'fd-group-mapping-dialog.html',
  styleUrls: ['./fd-group-mapping.component.css']
})
export class FdGroupMappingDialogComponent implements OnInit {
// Dialog Entry Details
  user_list: CommonListing[] = [
      {value: '1', viewValue: 'User 1'},
      {value: '2', viewValue: 'User 2'},
      {value: '3', viewValue: 'User 3'},
  ];

  post_list: CommonListing[] = [
      {value: '1', viewValue: 'Section Officer'},
      {value: '2', viewValue: 'Deputy Section Officer'},
      {value: '3', viewValue: 'Officer'},
  ];

  fdPopForm: FormGroup;
  schemePopFormEdit: FormGroup;
  errorMessages = budgetMessage;
  userCtrl: FormControl = new FormControl();
  postCtrl: FormControl = new FormControl();

  constructor(private fb: FormBuilder,
    public dialogRef: MatDialogRef<FdGroupMappingDialogComponent>
    ) { }

  ngOnInit() {
    this.createForm();
  }
  createForm() {
    this.fdPopForm = this.fb.group({
      usrName: ['', Validators.required],
      user: ['', Validators.required],
      post: ['', Validators.required],

    });
  }

  closeBox() {
      this.dialogRef.close('');
  }

}
