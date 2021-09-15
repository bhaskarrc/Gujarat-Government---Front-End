import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Component, OnInit, ElementRef } from '@angular/core';
import { MatTableDataSource, MatDialog, MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';
import { ReplaySubject } from 'rxjs';
import { SaveDialogComponent } from './save-dialog/save-dialog.component';

@Component({
  selector: 'app-finance-department',
  templateUrl: './finance-department.component.html',
  styleUrls: ['./finance-department.component.css']
})
export class FinanceDepartmentComponent implements OnInit {
  isVissible = false;
  date: any = new Date();
  financeOfDepartMentForm: FormGroup;
  brwoseData: any[] = [
    {
      name: '',
      file: '',
      uploadedBy: ''
    }
  ];
  isBDelete = false;
  displayedColumns: string[] = [
    'srno', 'departmentName', 'budgetCeilingRevenue', 'budgetCeilingCapital', 'budgetPendingBudgetRevenue', 'budgetPendingBudgetCapital',
    'approvedBudgetEstimatesRevenue', 'approvedBudgetEstimatesCapital',
    'remainingCeilingRevenue', 'remainingCeilingCapital', 'action'
  ];
  displayedBrowseColumns = [
    'position',
    'attachmentType',
    'fileName',
    'browse',
    'uploadedFileName',
    'uploadedBy',
    'action'
  ];
  // filteredAttachmentTypeCode: ReplaySubject<any[]> = new ReplaySubject<any[]>(
  //   1
  // );
  attachmentTypeCodeCtrl: FormControl = new FormControl();
  dataSourceBrowse = new MatTableDataSource(this.brwoseData);
  fileBrowseIndex: number;
  filteredAttachmentTypeCode: any[] = [
    { value: '1', viewValue: 'Other' },
    { value: '2', viewValue: 'Snaction Order ' },
    { value: '3', viewValue: ' Supporting Document' },
  ];
  finance_list: any[] = [
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
  ];
  datasource: any[] = [
    {
      departmentName: 'Agriculture, Famers welfare and Co-operation Department',
      revenue: 1500,
      capital: 2000,
      budgetPendingBudgetCapital: 200,
      budgetPendingBudgetRevenue: 100,
      approvedRevenue: 500,
      approvedCapital: 600,
      action: '-'

    },
    {
      departmentName: 'Climate Change Department',
      revenue: 2000,
      capital: 5000,
      budgetPendingBudgetCapital: 500,
      budgetPendingBudgetRevenue: 600,
      approvedRevenue: 700,
      approvedCapital: 500,
      action: '-'

    }, {
      departmentName: 'Education Department',
      revenue: 3000,
      capital: 8000,
      budgetPendingBudgetCapital: 800,
      budgetPendingBudgetRevenue: 300,
      approvedRevenue: 1100,
      approvedCapital: 3000,
      action: '-'

    }, {
      departmentName: 'Energy & Petrochemicals Department',
      revenue: 3000,
      capital: 8000,
      budgetPendingBudgetCapital: 200,
      budgetPendingBudgetRevenue: 300,
      approvedRevenue: 1100,
      approvedCapital: 3000,
      action: '-'

    }, {
      departmentName: 'Finance Department',
      revenue: 3000,
      capital: 8000,
      budgetPendingBudgetCapital: 500,
      budgetPendingBudgetRevenue: 500,
      approvedRevenue: 1100,
      approvedCapital: 3000,
      action: '-'

    }, {
      departmentName: 'Food, Civil Supplies & Consumer Affairs Department',
      revenue: 3000,
      capital: 8000,
      budgetPendingBudgetCapital: 300,
      budgetPendingBudgetRevenue: 800,
      approvedRevenue: 1100,
      approvedCapital: 3000,
      action: '-'

    }, {
      departmentName: 'Forest & Environment Department',
      revenue: 3000,
      capital: 8000,
      budgetPendingBudgetCapital: 200,
      budgetPendingBudgetRevenue: 300,
      approvedRevenue: 1100,
      approvedCapital: 3000,
      action: '-'

    }, {
      departmentName: 'General Administration Department ',
      revenue: 3000,
      capital: 8000,
      budgetPendingBudgetCapital: 100,
      budgetPendingBudgetRevenue: 500,
      approvedRevenue: 1100,
      approvedCapital: 3000,
      action: '-'

    }, {
      departmentName: 'Gujarat Legislature Secretariat Department',
      revenue: 3000,
      capital: 8000,
      budgetPendingBudgetCapital: 200,
      budgetPendingBudgetRevenue: 500,
      approvedRevenue: 1100,
      approvedCapital: 3000,
      action: '-'

    }, {
      departmentName: 'Health & Family Welfare Department',
      revenue: 3000,
      capital: 8000,
      approvedRevenue: 1100,
      approvedCapital: 3000,
      budgetPendingBudgetCapital: 900,
      budgetPendingBudgetRevenue: 300,
      action: '-'

    }, {
      departmentName: 'Home Department',
      revenue: 3000,
      capital: 8000,
      budgetPendingBudgetCapital: 400,
      budgetPendingBudgetRevenue: 900,
      approvedRevenue: 1100,
      approvedCapital: 3000,
      action: '-'

    }, {
      departmentName: 'Industries & Mines Department',
      revenue: 3000,
      capital: 8000,
      budgetPendingBudgetCapital: 200,
      budgetPendingBudgetRevenue: 500,
      approvedRevenue: 1100,
      approvedCapital: 3000,
      action: '-'

    }, {
      departmentName: 'Information & Broadcasting Department',
      revenue: 3000,
      capital: 8000,
      budgetPendingBudgetCapital: 200,
      budgetPendingBudgetRevenue: 500,
      approvedRevenue: 1100,
      approvedCapital: 3000,
      action: '-'

    }, {
      departmentName: 'Labour & Employment Department',
      revenue: 3000,
      capital: 8000,
      budgetPendingBudgetCapital: 200,
      budgetPendingBudgetRevenue: 500,
      approvedRevenue: 1100,
      approvedCapital: 3000,
      action: '-'

    }, {
      departmentName: 'Legal Department',
      revenue: 3000,
      capital: 8000,
      budgetPendingBudgetCapital: 200,
      budgetPendingBudgetRevenue: 500,
      approvedRevenue: 1100,
      approvedCapital: 3000,
      action: '-'

    }, {
      departmentName: 'Legislative & Parliamentary Affairs Department',
      revenue: 3000,
      capital: 8000,
      budgetPendingBudgetCapital: 200,
      budgetPendingBudgetRevenue: 500,
      approvedRevenue: 1100,
      approvedCapital: 3000,
      action: '-'

    }, {
      departmentName: 'Narmada, Water Resources, Water Supply & Kalpsar Department',
      revenue: 3000,
      capital: 8000,
      budgetPendingBudgetCapital: 200,
      budgetPendingBudgetRevenue: 500,
      approvedRevenue: 1100,
      approvedCapital: 3000,
      action: '-'

    }, {
      departmentName: 'Panchayat, Rural Housing & Rural Development Department',
      revenue: 3000,
      capital: 8000,
      budgetPendingBudgetCapital: 200,
      budgetPendingBudgetRevenue: 500,
      approvedRevenue: 1100,
      approvedCapital: 3000,
      action: '-'

    },
    {
      departmentName: 'Ports & Transport Department',
      revenue: 3000,
      capital: 8000,
      budgetPendingBudgetCapital: 200,
      budgetPendingBudgetRevenue: 500,
      approvedRevenue: 1100,
      approvedCapital: 3000,
      action: '-'
    },
    {
      departmentName: 'Revenue Department',
      revenue: 3000,
      capital: 8000,
      budgetPendingBudgetCapital: 200,
      budgetPendingBudgetRevenue: 500,
      approvedRevenue: 1100,
      approvedCapital: 3000,
      action: '-'

    }, {
      departmentName: 'Roads & Buildings Department',
      revenue: 3000,
      capital: 8000,
      budgetPendingBudgetCapital: 200,
      budgetPendingBudgetRevenue: 500,
      approvedRevenue: 1100,
      approvedCapital: 3000,
      action: '-'

    }, {
      departmentName: 'Science & Technology Department',
      revenue: 3000,
      capital: 8000,
      budgetPendingBudgetCapital: 200,
      budgetPendingBudgetRevenue: 500,
      approvedRevenue: 1100,
      approvedCapital: 3000,
      action: '-'

    },
    {
      departmentName: 'Social Justice & Empowerment Department',
      revenue: 3000,
      capital: 8000,
      budgetPendingBudgetCapital: 200,
      budgetPendingBudgetRevenue: 500,
      approvedRevenue: 1100,
      approvedCapital: 3000,
      action: '-'
    },
    {
      departmentName: 'Sports, Youth & Cultural Activities Department',
      revenue: 3000,
      capital: 8000,
      budgetPendingBudgetCapital: 200,
      budgetPendingBudgetRevenue: 500,
      approvedRevenue: 1100,
      approvedCapital: 3000,
      action: '-'
    },
    {
      departmentName: 'Tribal Development Department',
      revenue: 3000,
      capital: 8000,
      budgetPendingBudgetCapital: 200,
      budgetPendingBudgetRevenue: 500,
      approvedRevenue: 1100,
      approvedCapital: 3000,
      action: '-'
    },
    {
      departmentName: 'Urban Development & Urban Housing Department',
      revenue: 3000,
      capital: 8000,
      budgetPendingBudgetCapital: 200,
      budgetPendingBudgetRevenue: 500,
      approvedRevenue: 1100,
      approvedCapital: 3000,
      action: '-'
    },
    {
      departmentName: 'Women & Child Development Department',
      revenue: 3000,
      capital: 8000,
      budgetPendingBudgetCapital: 200,
      budgetPendingBudgetRevenue: 500,
      approvedRevenue: 1100,
      approvedCapital: 3000,
      action: '-'
    }
  ];

  constructor(private el: ElementRef, public dialog: MatDialog, private fb: FormBuilder, public router: Router, ) {
  }

  ngOnInit() {
    this.financeOfDepartMentData();
  }
  financeOfDepartMentData() {
    this.financeOfDepartMentForm = this.fb.group({
      financeYear: ['11'],
    });
  }

  submitDetails() {
    const dialogRef = this.dialog.open(SaveDialogComponent, {
      width: "400px"
    });
  }
  show() {
    this.isVissible = true;
  }
  calculation(unit) {
    return this.datasource.reduce((summ, v) => summ += parseInt(v[unit]), 0);
  }
  addBrowse() {
    const p_data = this.dataSourceBrowse.data;
    this.isBDelete = true;
    p_data.push({
      name: '',
      file: '',
      uploadedBy: ''
    });
    this.dataSourceBrowse.data = p_data;
  }
  deleteBrowse(index) {
    this.dataSourceBrowse.data.splice(index, 1);
    this.dataSourceBrowse = new MatTableDataSource(this.dataSourceBrowse.data);
  }
  openFileSelector(index) {
    this.el.nativeElement.querySelector('#fileBrowse').click();
    this.fileBrowseIndex = index;
  }
  openHistory() {
    const dialogRef = this.dialog.open(FinanceViewHistryDiloagComponent, {
      width: '800px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


  calcualteRemainRevenue() {
    const totalRevenue = this.datasource.reduce((summ, v) => summ += parseInt(v['revenue']), 0);
    const totalApprovedRevenue = this.datasource.reduce((summ, v) => summ += parseInt(v['approvedRevenue']), 0);
    return totalRevenue - totalApprovedRevenue;
  }

  calcualteRemainCapital() {
    const totalCapital = this.datasource.reduce((summ, v) => summ += parseInt(v['capital']), 0);
    const totalApprovedCapital = this.datasource.reduce((summ, v) => summ += parseInt(v['approvedCapital']), 0);
    return totalCapital - totalApprovedCapital;
  }
  goto() {
    this.router.navigate(['./budget/freeze-unfreeze-budget-ceiling/administrative-department']);
  }

}
const HISTORY_DATA: any[] = [
  {
    nameOfUser: 'Shri Pratik Shah',
    DateTime: '24-Feb-2020 10:30',
    CellingAmount: '8000',
  }
];
@Component({
  selector: 'finance-view-histry-Diloag',
  templateUrl: './finance-view-histry-Diloag.html',
})
export class FinanceViewHistryDiloagComponent implements OnInit {
  historyDataSource = new MatTableDataSource(HISTORY_DATA);
  constructor(public dialogRef: MatDialogRef<FinanceViewHistryDiloagComponent>, ) {

  }
  historyColumns: string[] = [
    'srNo', 'nameOfUser', 'DateTime', 'CellingAmount'
  ];
  ngOnInit() {

  }
  goToDashboard() {
    this.dialogRef.close('yes');
  }
}
