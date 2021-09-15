import { Component, OnInit, ViewChild, Inject, ElementRef, OnDestroy } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatSelect } from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subject, Subscription } from 'rxjs';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonListing, HeaderElement } from 'src/app/model/common-listing';
import { PeriodicElement, DialogData, VIewComments } from 'src/app/model/standing-charge';
import { ToastrService } from 'ngx-toastr';
import { ServiceService } from 'src/app/common/service.service';

@Component({
    selector: 'app-standing-charge-view-comments-dialog',
    templateUrl: 'standing-charge-view-comments-dialog.html',
    styleUrls: ['./standalone-charge-listing.component.css']
})
export class ViewCommentsComponent implements OnInit, OnDestroy {
    fileBrowseIndex: number;
    date: any = new Date();
    brwoseData: any[] = [{ name: undefined, file: undefined }];
    dataSourceBrowse = new MatTableDataSource(this.brwoseData);
    displayedBrowseColumns = ['attachmentType', 'fileName', 'browse', 'uploadedFileName', 'action'];

    headerJso: HeaderElement[] = [
        { label: 'Financial Year', value: '2019-2020' },
        { label: 'Demand', value: '010: Other expenditure ' },
        { label: 'Revenue/Capital', value: 'Revenue' },
        { label: 'Major Head', value: '2205: Art and Culture' },
        { label: 'Sub Major Head', value: '00: ' },
        { label: 'Minor Head', value: '101: Fine Arts Education' },
        { label: 'Sub Head', value: '01: Grants to Sangeet Natya Bharati' },
        { label: 'Detailed Head', value: '00: Grants to Sangeet Natya Bharati' },
        { label: 'Charged/Voted', value: 'Voted' },
    ];

    attachment = [
        { fileName: 'Attachment 1', fileType: 'image', filePath: '../../../assets/sample-attachments/image-sample.jpg', imgStatus: false },
        { fileName: 'Attachment 2', fileType: 'pdf', filePath: '../../../assets/sample-attachments/pdf-sample.pdf', pdfStatus: false },
    ];
    sample: string = 'src/assets/img/pdf-test.pdf';
    fieldArray = Array.apply(null, { length: 10 }).map(Number.call, Number);
    show: Boolean = true;
    displayData: Boolean = false;
    page: number = 1;
    totalPages: number;
    isLoaded: Boolean = false;
    sampleFlag: Boolean;
    master_checked: Boolean = false;
    master_indeterminate: Boolean = false;
    actionForm: FormGroup;
    subscription: Subscription;
    message: any;
    forwardDialog_history_list: VIewComments[] = [
        {
            disabled: false, checked: false, labelPosition: 'after', id: 3, userName: 'Shri P M Shah',
            designation: 'Deputy Secretary', role: 'Approver', date: '11/11/2019', comment: 'We may approve'
        },
        {
            disabled: false, checked: false, labelPosition: 'after', id: 2, userName: 'Shri C Patel',
            designation: 'Section Officer', role: 'Verifier', date: '10/11/2019', comment: 'We may approve'
        },
        {
            disabled: false, checked: false, labelPosition: 'after', id: 1, userName: 'Shri S M Modi',
            designation: 'Deputy Section Officer', role: 'Creator', date: '1/11/2019',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        }
    ];

    constructor(
        private toastr: ToastrService,
        private fb: FormBuilder,
        public dialogRef: MatDialogRef<ViewCommentsComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData,
        private el: ElementRef,
        public service: ServiceService,
    ) { }

    ngOnInit() {
        this.createForm();
        this.subscription = this.service.rowData.subscribe(message => {
            this.message = message;
            //console.log('hy', this.message);
            return this.message;
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    createForm() {
        this.actionForm = this.fb.group({
        });
    }

    onNoClick(): void {
        this.dialogRef.close('no');
    }

    forwardConsolidate() {
        //console.log('forwardConsolidate');
        this.dialogRef.close('yes');
    }

    afterLoadComplete(pdfData: any) {
        this.totalPages = pdfData.numPages;
    }

    checkDisplayFile(data) {
        for (let i = 0; i < this.attachment.length; i++) {
            if (data.fileType === 'image') {
                if (this.attachment[i].fileName == data.fileName) {
                    this.attachment[i].imgStatus = !this.attachment[i].imgStatus;
                    this.show = this.attachment[i].imgStatus ? true : false;
                } else {
                    this.attachment[i].imgStatus = false;
                    // this.show = false;
                }
            } else if (data.fileType === 'pdf') {
                if (this.attachment[i].fileName === data.fileName) {
                    this.attachment[i].pdfStatus = !this.attachment[i].pdfStatus;
                    this.show = this.attachment[i].pdfStatus ? true : false;
                } else {
                    this.attachment[i].pdfStatus = false;
                }
            } else {
                // this.attachment[i].imgStatus? false : '';
                // this.attachment[i].pdfStatus? false : '';
            }
            if (this.show === false) {
                if (this.attachment[i].fileType === 'image') {
                    this.attachment[i].imgStatus = false;
                } else if (this.attachment[i].fileType === 'pdf') {
                    this.attachment[i].pdfStatus = false;
                }
            }
        }
        console.log(data);
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

    onBrowseSelectChange() { }

    addBrowse() {
        if (this.dataSourceBrowse) {
            const data = this.dataSourceBrowse.data[this.dataSourceBrowse.data.length - 1];
            if (data && data.name && data.file) {
                const p_data = this.dataSourceBrowse.data;
                p_data.push({
                    name: undefined,
                    file: undefined,
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

    master_change() {
        for (let value of Object.values(this.forwardDialog_history_list)) {
            value.checked = this.master_checked;
        }
    }

    list_change() {
        let checked_count = 0;
        for (let value of Object.values(this.forwardDialog_history_list)) {
            if (value.checked)
                checked_count++;
        }

        if (checked_count > 0 && checked_count < this.forwardDialog_history_list.length) {
            // If some checkboxes are checked but not all; then set Indeterminate state of the master to true.
            this.master_indeterminate = true;
        } else if (checked_count == this.forwardDialog_history_list.length) {
            //If checked count is equal to total items; then check the master checkbox and also set Indeterminate state to false.
            this.master_indeterminate = false;
            this.master_checked = true;
        } else {
            //If none of the checkboxes in the list is checked then uncheck master also set Indeterminate to false.
            this.master_indeterminate = false;
            this.master_checked = false;
        }
    }
}
@Component({
    selector: 'app-standalone-charge-listing',
    templateUrl: './standalone-charge-listing.component.html',
    styleUrls: ['./standalone-charge-listing.component.css']
})
export class StandaloneChargeListingComponent implements OnInit {
    ELEMENT_DATA: PeriodicElement[] = [
        {
            position: 1, finYear: '2019-2020', estimateFrom: 'Director of Horticulture', demand: '001', majorHead: '3451', subMajorHead: '00', minorHead: '090',
            subHead: '01', detailHead: '00', proposedAmt: 100, lyingWith: 'Mr. Sharma', status: 'Pending', refNo: '19-20/BUD/SCE/001'
        },
        {
            position: 2, finYear: '2021-2022', estimateFrom: 'Commissioner of Geology and Mining', demand: '008', majorHead: '3451', subMajorHead: '00', minorHead: '090',
            subHead: '01', detailHead: '00', proposedAmt: 100, lyingWith: 'Mr. Sharma', status: 'Pending', refNo: '21-22/BUD/SCE/001'
        },
        {
            position: 3, finYear: '2018-2019', estimateFrom: 'Industries Commissionerate', demand: '009', majorHead: '3451', subMajorHead: '00', minorHead: '090',
            subHead: '01', detailHead: '00', proposedAmt: 100, lyingWith: 'Mr. Sharma', status: 'Pending', refNo: '-'
        },
        {
            position: 4, finYear: '2015-2016', estimateFrom: 'Director of Horticulture', demand: '008', majorHead: '3451', subMajorHead: '00', minorHead: '090',
            subHead: '01', detailHead: '00', proposedAmt: 100, lyingWith: 'Mr. Sharma', status: 'Pending', refNo: '-'
        },
        {
            position: 5, finYear: '2021-2022', estimateFrom: 'Commissioner of Geology and Mining', demand: '008', majorHead: '3451', subMajorHead: '00', minorHead: '090',
            subHead: '01', detailHead: '00', proposedAmt: 100, lyingWith: 'Mr. Sharma', status: 'Pending', refNo: '-'
        },
        {
            position: 6, finYear: '2021-2022', estimateFrom: 'Industries Commissionerate', demand: '008', majorHead: '3451', subMajorHead: '00', minorHead: '090',
            subHead: '01', detailHead: '00', proposedAmt: 100, lyingWith: 'Mr. Sharma', status: 'Pending', refNo: '21-22/BUD/SCE/001'
        },
        {
            position: 7, finYear: '2022-2023', estimateFrom: 'Director of Horticulture', demand: '008', majorHead: '3451', subMajorHead: '00', minorHead: '090',
            subHead: '01', detailHead: '00', proposedAmt: 100, lyingWith: 'Mr. Sharma', status: 'Pending', refNo: '22-23/BUD/SCE/001'
        },
        {
            position: 8, finYear: '2015-2016', estimateFrom: 'Commissioner of Geology and Mining', demand: '008', majorHead: '3451', subMajorHead: '00', minorHead: '090',
            subHead: '01', detailHead: '00', proposedAmt: 100, lyingWith: 'Mr. Sharma', status: 'Pending', refNo: '-'
        },
        {
            position: 9, finYear: '2024-2025', estimateFrom: 'Industries Commissionerate', demand: '008', majorHead: '3451', subMajorHead: '00', minorHead: '090',
            subHead: '01', detailHead: '00', proposedAmt: 100, lyingWith: 'Mr. Sharma', status: 'Pending', refNo: '24-25/BUD/SCE/001'
        },
        {
            position: 10, finYear: '2025-2026', estimateFrom: 'Director of Horticulture', demand:'008', majorHead: '3451', subMajorHead: '00', minorHead: '090',
            subHead: '01', detailHead: '00', proposedAmt: 100, lyingWith: 'Mr. Sharma', status: 'Pending', refNo: '-'
        },
        {
            position: 11, finYear: '2021-2022', estimateFrom: 'Commissioner of Geology and Mining', demand: '008', majorHead: '3451', subMajorHead: '00', minorHead: '090',
            subHead: '01', detailHead: '00', proposedAmt: 100, lyingWith: 'Mr. Sharma', status: 'Pending', refNo: '-'
        },
        {
            position: 12, finYear: '2020-2021', estimateFrom: 'Industries Commissionerate', demand: '008', majorHead: '3451', subMajorHead: '00', minorHead: '090',
            subHead: '01', detailHead: '00', proposedAmt: 100, lyingWith: 'Mr. Sharma', status: 'Pending', refNo: '-'
        },
    ];

    displayedColumns: string[] = ['position', 'finYear', 'demand', 'majorHead',
        'subMajorHead', 'minorHead', 'subHead', 'detailHead', 'proposedAmt', 'refNo','estimateFrom','lyingWith', 'status','action'];
    dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA);

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

    finYearCtrl: FormControl = new FormControl();
    departmentCtrl: FormControl = new FormControl();
    estimationFromCtrl: FormControl = new FormControl();
    estimateForCtrl: FormControl = new FormControl();
    demandCodeCtrl: FormControl = new FormControl();
    revenueCapitalCtrl: FormControl = new FormControl();
    majorHeadCodeCtrl: FormControl = new FormControl();
    subMajorHeadCodeCtrl: FormControl = new FormControl();
    minorHeadCodeCtrl: FormControl = new FormControl();
    referenceNumberCodeCtrl: FormControl = new FormControl();
    lyingWithCodeCtrl: FormControl = new FormControl();
    statusCtrl: FormControl = new FormControl();

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
            department: [''],
            estimationFrom: [''],
            estimateFor: [''],
            demandCode: [''],
            revenueCapital: [''],
            majorHeadCode: [''],
            subMajorHeadCode: [''],
            minorHeadCode: [''],
            referenceNumber: [''],
            lyingWith: [''],
            status: [''],
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

    viewComments(index): void {
        // console.log(index);
        const indexData = this.dataSource.data[index];
        this.service.viewComments(indexData);
        const dialogRef = this.dialog.open(ViewCommentsComponent,  {
            width: '2700px',
            height: '600px',
            // data: {
            //     dataKey: this.service.viewComments(indexData)
            //   }

        });
        // DialogData
        dialogRef.afterClosed().subscribe(result => {
            if (result === 'no') {
                console.log('The dialog was closed', result);
            } else if (result === 'yes') {
                console.log('The dialog was closed', result);
                this.showConfirmationPopup();
            }
        });
    }

    showConfirmationPopup() {
    }
}







