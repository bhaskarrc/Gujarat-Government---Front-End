
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit, ElementRef } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TabelElement } from 'src/app/model/attatchment';
import { ReplaySubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { SelectionModel } from '@angular/cdk/collections';
@Component({
  selector: 'app-upload-bank-scroll-receipt',
  templateUrl: './upload-bank-scroll-receipt.component.html',
  styleUrls: ['./upload-bank-scroll-receipt.component.css']
})
export class UploadBankScrollReceiptComponent implements OnInit {
  // FormGroup
  uploadBankReceiptForm: FormGroup;
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
  attachment_type_list: any[] = [
    { value: 'Supporting Document', viewValue: 'Supporting Document' },
  ];

  // Display Element Data - Attatchment Tab
  ELEMENT_DATA: TabelElement[] = [
    {
      name: undefined,
      file: undefined,
      attachment: 'Supporting Document',
    },

  ];
  // Display Columns - Attatchment Tab
  displayedBrowseColumns = [
    'sr_no',
    'attachmentType',
    'fileName',
    'browse',
    'uploadedFileName',
    'uploadedBy',
    'action'
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
  // Display Columns - Attatchment Tab
  dataSourceofficestablishment = ['checkBox', 'attachmentType', 'action'];

  // Table Source
  dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA1);
  // Table Source - Attatchment Tab
  dataSourceBrowse = new MatTableDataSource(this.ELEMENT_DATA);
  nonDdoDataSourceBrowse = new MatTableDataSource(this.ELEMENT_DATA);

  private paginator: MatPaginator;
  private sort: MatSort;
  showTable: Boolean = false;
  selection = new SelectionModel<any>(true, []);
  filteredAttachmentType: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  constructor(private fb: FormBuilder, private toastr: ToastrService, private el: ElementRef) { }

  ngOnInit() {
    this.uploadBankReceiptForm = this.fb.group({
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

    this.containers.push(this.containers.length);
    this.filteredAttachmentType.next(this.attachment_type_list.slice());
    (this.attachmentTypeCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(this.attachment_type_list, this.attachmentTypeCtrl.value, this.filteredAttachmentType);
      }));

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



  // function to delete row from table attatchment
  deleteBrowse(element) {
    this.dataSourceBrowse.data.splice(element, 1);
    this.dataSourceBrowse = new MatTableDataSource(this.dataSourceBrowse.data);

  }

  onFileSelection(fileSelected) {
    if (fileSelected.target && fileSelected.target.files) {
      this.dataSourceBrowse.data[this.fileBrowseIndex].file = fileSelected.target.files[0];
    }
  }
  onBrowseSelectChange() { }

  openFileSelector(index) {
    this.el.nativeElement.querySelector('#fileBrowse').click();
    this.fileBrowseIndex = index;
  }
  // function to add row into table attatchment
  addBrowse() {
    if (this.dataSourceBrowse) {
      const data = this.dataSourceBrowse.data[
        this.dataSourceBrowse.data.length - 1
      ];
      if (data && data.name && data.file) {
        const p_data = this.dataSourceBrowse.data;
        p_data.push({
          name: undefined,
          file: undefined,
          attachment: 'Supporting Document'
        });
        this.dataSourceBrowse.data = p_data;
      } else {
        this.toastr.error('Please fill the detail.');
      }
    }
  }


}



