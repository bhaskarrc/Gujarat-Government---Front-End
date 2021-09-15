
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit, ElementRef } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ReplaySubject, Subject } from 'rxjs';
import { SelectionModel } from '@angular/cdk/collections';
@Component({
  selector: 'app-upload-bank-scroll-receipt-list',
  templateUrl: './upload-bank-scroll-receipt-list.component.html',
  styleUrls: ['./upload-bank-scroll-receipt-list.component.css']
})
export class UploadBankScrollReceiptListComponent implements OnInit {
  // FormGroup
  uploadBankReceiptListForm: FormGroup;
  // FormControl
  attachmentTypeCtrl: FormControl = new FormControl();
  initiatiomdate = new Date((new Date()));
  selectedIndex: number;
  fileBrowseIndex: number;
  maxDate = new Date();
  date = new Date();
  containers = [];

  DDO: Boolean = true;

  private _onDestroy = new Subject<void>();
  // FormControl
  scrollTypeCtrl: FormControl = new FormControl();
  bankTypeCtrl: FormControl = new FormControl();
  // List values
  type_list: any[] = [
    { value: '1', viewValue: 'Physical Challan' },
    { value: '1', viewValue: 'Online Challan' },

  ];
  bank_list: any[] = [
    { value: '1', viewValue: 'ABC Bank' },
    { value: '1', viewValue: 'XYZ Bank' },

  ];


  // Display Element Data

  ELEMENT_DATA1: any[] =
    [
      {
        date: '20-Apr-2019',
        // sType: 'Physical Challan',
        bank: 'ABC Bank',
        bcode: '1200',
        fDescription: 'Challan',
        fName: 'Abc.xlsx',
      },
      {
        date: '20-Apr-2019',
        // sType: 'Physical Challan',
        bank: 'ABC Bank',
        bcode: '1200',
        fDescription: 'Challan',
        fName: 'Abc.xlsx',
      },
      {
        date: '20-Apr-2019',
        // sType: 'Physical Challan',
        bank: 'ABC Bank',
        bcode: '1200',
        fDescription: 'Challan',
        fName: 'Abc.xlsx',
      },
      {
        date: '20-Apr-2019',
        // sType: 'Physical Challan',
        bank: 'ABC Bank',
        bcode: '1200',
        fDescription: 'Challan',
        fName: 'Abc.xlsx',
      },



    ];

  // Display Columns
  displayedColumns: string[] = ['checkBox', 'date', 'bank', 'bcode',
    'fDescription', 'fName', 'action'];

  // Table Source
  dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA1);


  private paginator: MatPaginator;
  private sort: MatSort;
  showTable: Boolean = false;
  selection = new SelectionModel<any>(true, []);
  filteredAttachmentType: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  constructor(private fb: FormBuilder, private toastr: ToastrService, private el: ElementRef) { }

  ngOnInit() {
    this.uploadBankReceiptListForm = this.fb.group({
      // FormGroup Fields
      passingDate: [''],
      type: ['Adjustment'],
      detailHead: ['1234'],
      branchCode: [''],
      code: ['TDS'],
      codeDescription: ['Revenue Tenancy Deposit'],
      majorHead: ['8443'],
      majorHeadDecscription: ['Civil Deposits(Not Bearing Interest)'],
      subMajorHead: ['00'],
      subMajorHeadDecscription: [''],
      minorHead: ['101'],
      minorHeadDecscription: ['Revenue Deposit'],
      subHead: ['01'],
      subHeadDecscription: ['Revenue Tenancy Deposit'],
      amount: ['2000.00'],
      amountInWord: ['Two Thousands Only'],
      narration: ['EMD refunded'],
      docDescription: ['Sanction order'],
      scrollType: [''],
      bank: [''],
      desc: ['']
    });


  }
  filterObjValue(arrValue, searchValue, filteredValue) {
    if (!arrValue) {
      return;
    }
    filteredValue.next(
      // tslint:disable-next-line: no-use-before-declare
      arrValue.filter(item => item.viewValue.toLowerCase().indexOf(search) > -1)
    );
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

  setDataSourceAttributes() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  search() {
    this.showTable = true;
  }
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }
  delete(element) {
    this.dataSource.data.splice(element, 1);
    this.dataSource = new MatTableDataSource(this.dataSource.data);
  }
}



