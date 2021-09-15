import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import { PostedChallanList } from 'src/app/model/emd';
@Component({
  selector: 'app-receipt-list',
  templateUrl: './receipt-list.component.html',
  styleUrls: ['./receipt-list.component.css']
})
export class ReceiptListComponent implements OnInit {
  // variables
  showTable: Boolean = false;
  searchListForm: FormGroup;
  // FormGroup
  receiptListForm: FormGroup;
  // dates
  maxDate = new Date();
  initiatiomdate = new Date();

  // FormControl
  departmentTypeCtrl: FormControl = new FormControl();
  // List values
  departmentType_list: ListValue[] = [
    { value: '1', viewValue: 'Agriculture, Famers welfare and Co-operation Department' },
    { value: '2', viewValue: 'Education Department' },
    { value: '3', viewValue: 'Energy & Petrochemicals Department' },
    { value: '4', viewValue: 'Finance Department' },
    { value: '5', viewValue: 'Food, Civil Supplies & Consumer Affairs Department' },
    { value: '6', viewValue: 'Forest & Environment Department' },
    { value: '7', viewValue: 'General Administration Department' },
    { value: '8', viewValue: 'Gujarat Legislature Secretariat Department' },
    { value: '9', viewValue: 'Health & Family Welfare Department' },
    { value: '10', viewValue: 'Home Department' },
    { value: '11', viewValue: 'Industries & Mines Department' },
    { value: '12', viewValue: 'Information & Broadcasting Department' },
    { value: '13', viewValue: 'Labour & Employment Department' },
    { value: '14', viewValue: 'Legal Department' },
    { value: '15', viewValue: 'Legislative & Parliamentary Affairs Department' },
    { value: '16', viewValue: 'Narmada, Water Resources, Water Supply & Kalpsar Department' },
    { value: '17', viewValue: 'Panchayat, Rural Housing & Rural Development Department' },
    { value: '18', viewValue: 'Ports & Transport Department' },
    { value: '19', viewValue: 'Revenue Department' },
    { value: '20', viewValue: 'Roads & Buildings Department' },
    { value: '21', viewValue: 'Science & Technology Department' },
    { value: '22', viewValue: 'Social Justice & Empowerment Department' },
    { value: '23', viewValue: 'Tribal Development Department' },
    { value: '24', viewValue: 'Sports, Youth & Cultural Activities Department' },
    { value: '25', viewValue: 'Urban Development & Urban Housing Department' },
    { value: '26', viewValue: 'Women & Child Development Department' },
    { value: '27', viewValue: 'Climate Change Department' },

  ];
  // Display Element Data
  ELEMENT_DATA: PostedChallanList[] =
    [
      {
        srNo: '192000001',
        code: 'RD',
        ddoNo: '501',
        cardex: '444',
        office: 'Mamlatdar Office, Gandhinagar',
        partyName: 'Mr. A.B. Mishra',
        department: 'Education Department',
        entryDate: '10-Apr-2019',
        majorHead: '8443',
        amount: '20000.00 ',
      },

      {
        srNo: '192000002',
        code: 'RD',
        ddoNo: '501',
        cardex: '444',
        office: 'Mamlatdar Office, Gandhinagar',
        partyName: 'Mr.P.T. Shah',
        department: 'Food, Civil Supplies & Consumer Affairs Department',
        entryDate: '10-Apr-2019',
        majorHead: '8443',
        amount: '20700.00 ',
      },

      {
        srNo: '192000003',
        code: 'RD',
        ddoNo: '501',
        cardex: '444',
        office: 'Mamlatdar Office, Gandhinagar',
        partyName: 'Mr. T.T. Sharma',
        department: 'Home Department',
        entryDate: '10-Apr-2019',
        majorHead: '8443',
        amount: '45000.00 ',
      },

      {
        srNo: '192000004',
        code: 'RD',
        ddoNo: '501',
        cardex: '444',
        office: 'Mamlatdar Office, Gandhinagar',
        partyName: 'Mr. S. S. Kumar',
        department: 'Legal Department',
        entryDate: '10-Apr-2019',
        majorHead: '8443',
        amount: '37000.00 ',
      },
    ];


  // Display Columns
  displayedColumns: string[] = ['srNo', 'code', 'ddo', 'cardex', 'office', 'partyName', 'department',
    'entryDate', 'majorHead', 'amount', 'action'];
  // Table Source
  dataSource = new MatTableDataSource<PostedChallanList>(this.ELEMENT_DATA);
  private paginator: MatPaginator;
  private sort: MatSort;
  @ViewChild(MatSort) set matSort(ms: MatSort) {
    this.sort = ms;
    this.setDataSourceAttributes();
  }
  @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
    this.paginator = mp;
    this.setDataSourceAttributes();
  }
  constructor(private router: Router,
    private fb: FormBuilder,
    public dialog: MatDialog,
  ) { }
  ngOnInit() {
    this.receiptListFormData();
  }
  receiptListFormData() {
    this.receiptListForm = this.fb.group({
      // FormGroup Fields
      payeeName: [''],
      challanNo: [''],
      mHead: [''],
      amount: [''],
      dept: [''],
      ddo: [''],
      cardex: [''],
      office: [''],

    });
  }
  // sets paginator and sort variables
  setDataSourceAttributes() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  // function to clear form
  clearForm() {
    this.receiptListForm.reset();
  }
  // shows and hides table
  search() {
    this.showTable = true;
  }



}
