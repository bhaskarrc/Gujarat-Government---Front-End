import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { GrantReleaseOrder } from 'src/app/model/grant-order';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';


const ELEMENT_DATA: GrantReleaseOrder[] = [
  {
    departmentName: 'General Administration Department', budgetEstimate: '7894561.0000', tilldate: '8745986574.0000',
    grantReleaseDraft: '45874.0000', total: '54459480.0000'
  },
  {
    departmentName: 'Agriculture & Co-Operation Department', budgetEstimate: '244219.0000', tilldate: '74875478.0000',
    grantReleaseDraft: '8745896.0000', total: '2455908.0000'
  },
  {
    departmentName: 'Climate Change Department', budgetEstimate: '55206.0000', tilldate: '8745895.0000', grantReleaseDraft: '874588.0000',
    total: '55204976.0000'
  },
  {
    departmentName: 'Education Department', budgetEstimate: '39531.0000', tilldate: '5874588.0000',
    grantReleaseDraft: '657874.0000', total: '393976651.0000'
  },
  {
    departmentName: 'Energy & Petrochemicals Department', budgetEstimate: '02137444.0000', tilldate: '874589.0000',
    grantReleaseDraft: '58744.0000', total: '4277888.0000'
  },
  {
    departmentName: 'Finance Department', budgetEstimate: '24429.0000', tilldate: '8745895.0000',
    grantReleaseDraft: '255441.0000', total: '2455908.0000'
  },
  {
    departmentName: 'Food & Civil Supplies Department', budgetEstimate: '552076.0000', tilldate: '8745896.0000',
    grantReleaseDraft: '877874.0000', total: '55204976.0000'
  },
  {
    departmentName: 'Forest & Environment Department ', budgetEstimate: '39537.0000', tilldate: '874589.0000',
    grantReleaseDraft: '1257878.0000', total: '393976651.0000'
  },
  {
    departmentName: 'Health & Family Welfare Department', budgetEstimate: '02134.0000', tilldate: '9874521.0000',
    grantReleaseDraft: '65478454.0000', total: '4277888.0000'
  },
  {
    departmentName: 'Home Department', budgetEstimate: '248611.0000', tilldate: '8745896.0000',
    grantReleaseDraft: '1254788.0000', total: '2455908.0000'
  },
  {
    departmentName: 'Industries & Mines Department', budgetEstimate: '552049.0000', tilldate: '8745632.0000',
    grantReleaseDraft: '1365774.0000', total: '55204976.0000'
  },
  {
    departmentName: 'Information & Broadcasting Department', budgetEstimate: '33741.0000',
    tilldate: '874589655.0000', grantReleaseDraft: '1458754.0000', total: '393976651.0000'
  },
  {
    departmentName: 'Labour & Employment Department	', budgetEstimate: '0137444.0000', tilldate: '8745698.0000',
    grantReleaseDraft: '254785.0000', total: '4277888.0000'
  },
  {
    departmentName: 'Legal Department', budgetEstimate: '2066.0009', tilldate: '4589687.0000',
    grantReleaseDraft: '254478.0000', total: '2455908.0000'
  },
  {
    departmentName: 'Legeslative & Parliamentary Affairs Department', budgetEstimate: '55249.0000',
    tilldate: '87458965.0000', grantReleaseDraft: '45874.0000', total: '55204976.0000'
  },
  {
    departmentName: 'Narmada, Water Resources, Water Supply & Kalpsar Department ',
    budgetEstimate: '39561.0000', tilldate: '745896.0000', grantReleaseDraft: '45874.0000', total: '393976651.0000'
  },
  {
    departmentName: 'Panchayat, Rural Housing & Rural Development Department', budgetEstimate: '02137444.0000',
    tilldate: '8745986574.0000', grantReleaseDraft: '45874.0000', total: '4277.0000'
  },
  {
    departmentName: 'Port & Transport Department', budgetEstimate: '24421009.0000',
    tilldate: '874589.0000', grantReleaseDraft: '45874.0000', total: '2455908.0000'
  },
  {
    departmentName: 'Revenue Department', budgetEstimate: '552049.0000', tilldate: '8745986.0000',
    grantReleaseDraft: '45874.0000', total: '55204976.0000'
  },
  {
    departmentName: 'Road & Building Department', budgetEstimate: '3951041.0000',
    tilldate: '8745895.0000', grantReleaseDraft: '45874.0000', total: '393976651.0000'
  },
  {
    departmentName: 'Science & Technology Department', budgetEstimate: '01344.0000',
    tilldate: '447414145.0040', grantReleaseDraft: '45874.0004', total: '4277888.0000'
  },
  {
    departmentName: 'Urban Development & Urban Housing Department',
    budgetEstimate: '221066.0000', tilldate: '	587458.0000', grantReleaseDraft: '45874.0000', total: '2455908.0000'
  },

];


@Component({
  selector: 'app-grant-release-order',
  templateUrl: './grant-release-order.component.html',
  styleUrls: ['./grant-release-order.component.css']
})
export class GrantReleaseOrderComponent implements OnInit {
  isvisibledata = false;

  // Display Date FD Level
  displayedFdLevel: string[] = ['srno', 'departmentName', 'budgetEstimate', 'tilldate', 'grantReleaseDraft'];

  // Display Data Other Level
   // tslint:disable-next-line: max-line-length
   displayedOtherLevel: string[] = ['srno', 'departmentName', 'budgetState', 'budgetCss', 'tillDateState', 'tillDateCss', 'grantReleaseDraftstate', 'grantReleaseDraftcss', 'totalReleaseGrantState', 'totalReleaseGrantCss'];

  dataSource = new MatTableDataSource(ELEMENT_DATA);
  finYearCtrl: FormControl = new FormControl();
  searchGrantOrder: FormGroup;

  // Search Section Dropdown Fields
  finYear_list: any[] = [
    { value: '10', viewValue: '2020-2021' }
  ];
  level_list: any[] = [
    { value: '1', viewValue: 'FD Level' },
    { value: '2', viewValue: 'Other Level' }
  ];

  constructor(private fb: FormBuilder) { }
  ngOnInit() {
    this.searchGrantOrder = this.fb.group({
      finYear: ['2'],
      level: ['1']
    });
  }

  searchGrantOrderDetails() {
  }

  // Grant Released Till Date (State) - Other Level

  getTotalReleaseGrant(): number {
    let calcCurrentCss = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.dataSource.data.forEach((element) => {
      calcCurrentCss = calcCurrentCss + Number(element.tilldate);
    });
    return calcCurrentCss;
  }
  // Other level -
  getTotal(): number {
    let calcCurrentCss = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.dataSource.data.forEach((element) => {
      calcCurrentCss = calcCurrentCss + Number(element.budgetEstimate);
    });
    return calcCurrentCss;
  }

  // Grant Released from December to January
  getTotals(): number {
    let calcCurrentCss = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.dataSource.data.forEach((element) => {
      calcCurrentCss = calcCurrentCss + Number(element.grantReleaseDraft);
    });
    return calcCurrentCss;
  }
  // For Select Level show and hide table
  ontoken(index) {
    if (index.value === '2') {
      this.isvisibledata = true;
    } else {
      this.isvisibledata = false;
    }
  }
}

