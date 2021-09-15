// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-standingchargelist-duplicate',
//   templateUrl: './standingchargelist-duplicate.component.html',
//   styleUrls: ['./standingchargelist-duplicate.component.css']
// })
// export class StandingchargelistDuplicateComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }



import { Component, OnInit, ViewChild, Inject, ElementRef, OnDestroy } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatSelect } from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subject, Subscription } from 'rxjs';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonListing, HeaderElement } from 'src/app/model/common-listing';
import { PeriodicElement, DialogData, VIewComments } from 'src/app/model/standing-charge';
import { ToastrService } from 'ngx-toastr';
import { ServiceService } from 'src/app/common/service.service';
import { ViewCommentsComponent } from '../standing-charge/standalone-charge-listing/standalone-charge-listing.component';
import { StandingChargeViewCommentsComponent, StadingChargeConfirmDialogComponent } from '../standing-charge/standalone-charge/standalone-charge.component';


@Component({
  selector: 'app-standingchargelist-duplicate',
  templateUrl: './standingchargelist-duplicate.component.html',
  styleUrls: ['./standingchargelist-duplicate.component.css']
})
export class StandingchargelistDuplicateComponent  implements OnInit {

    ELEMENT_DATA: any[] = [
        {
           budgetHead: '2021-2022 : 019 : 2020 : 00 : 800 : 01 : 00 : Revenue: Voted', refNo: '19-20/BUD/SCE/001',  revFrom: 'Rajesh', revTo:'10/02/2020 10:30', sendTo: 'Rajesh',sendFrom: '10/02/2020 10:30', propAmount: '110',
             lyingWith: 'Mr. Sharma', status: 'Draft', workFlowStatus:'-',
        },
        {
            budgetHead: '2021-2022 : 019 : 2020 : 00 : 800 : 02 : 00 : Revenue: Voted', refNo: '19-20/BUD/SCE/002',  revFrom: 'Rajesh', revTo:'10/02/2020 10:30', sendTo: 'Rajesh',sendFrom: '10/02/2020 10:30', propAmount: '90',
              lyingWith: 'Mr. Rajput', status: 'Pending', workFlowStatus:'Pending with HOD',
         },
         {
            budgetHead: '2021-2022 : 019 : 2020 : 00 : 800 : 03 : 00 : Revenue: Voted', refNo: '19-20/BUD/SCE/003',  revFrom: 'Rajesh', revTo:'10/02/2020 10:30', sendTo: 'Rajesh',sendFrom: '10/02/2020 10:30', propAmount: '150',
              lyingWith: 'Mr. Kumar',status: 'Approved', workFlowStatus:'Approved by HOD',
         },
         {
            budgetHead: '2021-2022 : 019 : 2020 : 00 : 800 : 04 : 00 : Revenue: Voted', refNo: '19-20/BUD/SCE/004',  revFrom: 'Rajesh', revTo:'10/02/2020 10:30', sendTo: 'Rajesh',sendFrom: '10/02/2020 10:30', propAmount: '180',
              lyingWith: 'Mr. Sharma',status: 'Cancelled', workFlowStatus:'-',
         }
        
    ];

    displayedColumns: string[] = ['position', 'budgetHead', 'refNo', 'propAmount',
        'revFrom', 'sendTo', 'lyingWith', 'status', 'action'];
    dataSource = new MatTableDataSource(this.ELEMENT_DATA);

    private paginator: MatPaginator;
    private sort: MatSort;

    searchListForm: FormGroup;

    finYear_list: CommonListing[] = [
        { value: '1', viewValue: '2019-2020' },
        { value: '2', viewValue: '2020-2021' },
    ];

    department_list: CommonListing[] = [
        {
            value: '1', viewValue: 'Agriculture, Farmers Welfare and Co-operation Department'},
          { value: '2', viewValue: 'Industries and Mines Department' },
          
    ];

    estimation_list: CommonListing[] = [
        { value: '1', viewValue: 'Director of Horticulture' },
        { value: '2', viewValue: 'Commissioner of Geology and Mining' },
        { value: '3', viewValue: 'Industries Commissionerate' },


    ];

    estimation_for_list: CommonListing[] = [
        { value: '1', viewValue: 'Shri Arun Mahesh Babu MS' },
        { value: '2', viewValue: 'Shri C.M. Padalia' },
        { value: '3', viewValue: 'Shri Amit Prakash Yadav' },
    ];
    lyingWith_list: CommonListing[] = [
        { value: '1', viewValue: 'Shri Arun Mahesh Babu MS' },
        { value: '2', viewValue: 'Shri C.M. Padalia' },
        { value: '3', viewValue: 'Shri Amit Prakash Yadav' },
    ];
    status_list: CommonListing[] = [
        { value: '1', viewValue: 'Pending' },
        { value: '2', viewValue: 'Approved' },
    ];

    demand_list: CommonListing[] = [
        // { value: '1', viewValue: '70 : Community Development' },
        // { value: '2', viewValue: '71 : Rural Housing and Rural Development' },
        // {
        //     value: '3',
        //     viewValue: '73 : Other Expenditure pertaining to Panchayats, Rural Housing and Rural Development Department'
        // },
        // { value: '4', viewValue: '76 : Revenue Department' },
        // { value: '5', viewValue: '79 : Relief on account Natural Calamities' },
        // { value: '6', viewValue: '81 : Compensation and Assignment' },
        // { value: '7', viewValue: '87 : Gujarat Capital Construction Scheme' },
        // { value: '8', viewValue: '93 : Welfare of Scheduled Tribes' },
        // { value: '9', viewValue: '95 : Scheduled Castes Sub Plan' },
        // { value: '10', viewValue: '97 : Sports,Youth and Cultural Activities Department' },
        // {
        //     value: '11',
        //     viewValue: '10 : Other expenditure pertaining to Education Department'
        // },


        { value: '1', viewValue: '001:Agriculture and Co-operation Department' },
    { value: '2', viewValue: '002:Agriculture' },
    { value: '3', viewValue: '047:Industries and Mines Department' },
    { value: '4', viewValue: '048:Stationery and Printing' },
    { value: '5', viewValue: '049:Industries' },
    { value: '6', viewValue: '084:Non-Residential Buildings'},
    { value: '7', viewValue: '085:Residential Buildings'},
    { value: '8', viewValue: '093: Welfare of Scheduled Tribes'},
    { value: '9', viewValue: '095: Scheduled Castes Sub Plan'},
    { value: '10', viewValue: '096:Tribal Area Sub-Plan'},
    ];




    revenue_capital_list: CommonListing[] = [
        { value: '1', viewValue: 'Revenue' },
        { value: '2', viewValue: 'Capital' },
    ];

    majorHead_list: CommonListing[] = [
        // { value: '1', viewValue: '0020 : Corporation Tax' },
        // { value: '2', viewValue: '0021: Taxes on Income other than Corporation Tax' },
        // { value: '3', viewValue: '0028 : Other Taxes on Income and Expenditure' },
        // { value: '4', viewValue: '0029 : Land Revenue' },
        // { value: '5', viewValue: '0030 : Stamps and Registration Fees' },
        { value: '1', viewValue: '3451:Secretariat-Economic Services' },
        {
          value: '2',
          viewValue: '5475:Capital Outlay on other General Economics Services'
        },
        { value: '3', viewValue: '2401:Crop Husbandry' },
        { value: '4', viewValue: '2071:Pensions and Other Retirement Benefits' },
        { value: '5', viewValue: '2058:Stationery and Printing' }

    ];

    subMajorHead_list: CommonListing[] = [
        // { value: '1', viewValue: '8 : Other Transfer/Grants to States' },
        // { value: '2', viewValue: '6 : Centrally Sponsored Schemes' },

        {
            value: '1',
            viewValue: '00:Secretariat-Economic Services'
          },
      
          {
            value: '2',
            viewValue: '00:Capital Outlay on other General Economics Services'
          },
      
          {
            value: '3',
            viewValue: '00:Crop Husbandry'
          },
      
          {
            value: '4',
            viewValue: '00:Secretariat-Economic Services'
          },
      
          {
            value: '5',
            viewValue: '00:Capital Outlay on other General Economics Services'
          },
      
          {
            value: '6',
            viewValue: '01:Civil'
          },
      
          {
            value: '7',
            viewValue: '00:Stationery and Printing'
          },
      
          {
            value: '8',
            viewValue: '00::Co-operation'
          }

    ];

    minorHead_list: CommonListing[] = [
        // {
        //     value: '1',
        //     viewValue: '101 : Forest Conservation, Development and Regeneration'
        // },
        // { value: '2', viewValue: '102 : Small Scale Industries' },
        // { value: '105 : Forest Produce', viewValue: '105 : Forest Produce' },


        {
            value: '1',
            viewValue: '090:Secretariat'
          },
          { value: '2', viewValue: '101:Niti Aayog' },
          { value: '800:Other Expenditure', viewValue: '800:Other Expenditure' },
      
          { value: '3', viewValue: '101:Direction And Administration' },
          { value: '4', viewValue: '102:Food grain Crops' },
      
          { value: '5', viewValue: '103:Seed' },
          { value: '6', viewValue: '800:Other Expenditure' },
      
          { value: '7', viewValue: '108:Contribution to Provident Funds' },
          { value: '8', viewValue: '001:Direction and Administration' },
      
          { value: '9', viewValue: '101:Purchase and Supply of Stationery Stores' },
          { value: '10', viewValue: '103:Government Presses' },
      
          { value: '11', viewValue: '105:Government Publications' },
      
          {
            value: '12',
            viewValue: '797:Transfer to Reserve fund and Deposite Account'
          },
      
          {
            value: '13',
            viewValue: '108:Assistance to other co-operatives'
          }
          
    ];

    referenceNumber_list: CommonListing[] = [
        { value: '1', viewValue: '19-20/BUD/SCE/001' },
        { value: '2', viewValue: '19-20/BUD/SCE/002' },
        { value: '3', viewValue: '19-20/BUD/SCE/003' },
    ];
       
    chargedVoted_list: CommonListing[] = [
        { value: '1', viewValue: 'Charged' },
        { value: '2', viewValue: 'Voted' }
      ];

    finYearCtrl: FormControl = new FormControl();
    // departmentCtrl: FormControl = new FormControl();
    // estimationFromCtrl: FormControl = new FormControl();
    // estimateForCtrl: FormControl = new FormControl();
    demandCodeCtrl: FormControl = new FormControl();
    revenueCapitalCtrl: FormControl = new FormControl();
    majorHeadCodeCtrl: FormControl = new FormControl();
    subMajorHeadCodeCtrl: FormControl = new FormControl();
    minorHeadCodeCtrl: FormControl = new FormControl();
    referenceNumberCodeCtrl: FormControl = new FormControl();
    lyingWithCodeCtrl: FormControl = new FormControl();
    statusCtrl: FormControl = new FormControl();
    chargedVotedCtrl:FormControl = new FormControl();

    @ViewChild('singleSelect') singleSelect: MatSelect;
    _onDestroy = new Subject<void>();

    @ViewChild(MatSort) set matSort(ms: MatSort) {
        this.sort = ms;
        this.setDataSourceAttributes();
    }

    @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
        this.paginator = mp;
        this.setDataSourceAttributes();
    }
    constructor(
        public dialog: MatDialog,
        private fb: FormBuilder,
        public service: ServiceService,
    ) { }

    ngOnInit() {
        this.createForm();
    }

    setDataSourceAttributes() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    createForm() {
        this.searchListForm = this.fb.group({
            finYear: ['2', Validators.required],
            // department: [''],
            // estimationFrom: [''],
            // estimateFor: [''],
            demandCode: [''],
            revenueCapital: [''],
            majorHeadCode: [''],
            subMajorHeadCode: [''],
            minorHeadCode: [''],
            referenceNumber: [''],
            lyingWith: [''],
            status: [''],
            chargedVoted:['']
        });
    }

    filterObjValue(arrValue, searchValue, filteredValue) {
        if (!arrValue) {
            return;
        }
        // get the search keyword
        let search = searchValue;
        if (!search) {
            filteredValue.next(arrValue.slice());
            return;
        } else {
            search = search.toLowerCase();
        }
        // filter the values
        filteredValue.next(
            arrValue.filter(item => item.viewValue.toLowerCase().indexOf(search) > -1)
        );
    }

    applyFilter(filterValue: string) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    }

    onclickStatus(data) {
        if (data.active) {
            data.active = false;
        } else {
            data.active = true;
        }
        return data;
    }

    clearForm() {
        this.searchListForm.reset();
    }

    searchEstimate() {
    }

    showConfirmationPopup() {
        const dialogRef = this.dialog.open(StadingChargeConfirmDialogComponent, {
          width: '400px'
        });
        dialogRef.afterClosed().subscribe(result => {
          if (result === 'no') {
            console.log(result);
          } else if (result === 'save') {
            console.log(result);
          }
        });
    }

    viewComments(): void {
      const dialogRef = this.dialog.open(StandingChargeViewCommentsComponent, {
        // StandingChargeConsolidateForwardDialogComponent
        width: '2700px',
        height: '600px'
        // data: employees
      });
      dialogRef.afterClosed().subscribe(result => {
        if (result === 'no') {
          console.log('The dialog was closed', result);
        } else if (result === 'yes') {
          console.log('The dialog was closed', result);
          this.showConfirmationPopup();
        }
      });
    }
}








