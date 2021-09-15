
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { CommonListing } from 'src/app/model/common-listing';

@Component({
  selector: 'app-annual-financial-statement-listign',
  templateUrl: './annual-financial-statement-listign.component.html',
  styleUrls: ['./annual-financial-statement-listign.component.css']
})
export class AnnualFinancialStatementListignComponent implements OnInit {
  isSearch: Boolean = true;
  codeCtrl = new FormControl();
  private _onDestroy = new Subject<void>();
 // Listing Table
  displayedColumnsExpanditure: string[] = [
    'srNo', 'financialYear', 'bpnCode', 'refNo', 'refDt', 'status',  'action'
  ];

  // Listing Table Data
  expanditure_list: any = [
    {
      financialYear: '2019-2020',
      depart: 'Agriculture, Farmers Welfare and Co-operation Department',
      bpnCode: 'Industries and Mines Department',
      refNo: '19-20/BDU/AFS/001',
      refDt: '25-Apr-2020',
      status: 'Submitted',
      action: '-'
    },
    {
      financialYear: '2019-2020',
      depart: 'Agriculture, Farmers Welfare and Co-operation Department',
      bpnCode: 'Industries and Mines Department' ,
      refNo: '19-20/BDU/AFS/001',
      refDt: '25-Apr-2020',
      status: 'Submitted',
      action: '-'
    },
    {
      financialYear: '2019-2020',
      depart: 'Industries and Mines Department',
      bpnCode: 'Industries and Mines Department',
      refNo: '19-20/BDU/AFS/001',
      refDt: '27-Apr-2020',
      status: 'Submitted',
      action: '-'
    },
    {
      financialYear: '2019-2020',
      depart: 'Agriculture, Farmers Welfare and Co-operation Department',
      bpnCode: 'Industries and Mines Department' ,
      refNo: '19-20/BDU/AFS/001',
      refDt: '29-Apr-2020',
      status: 'Draft',
      action: '-'
    }
  ];

  expanditureDatasource = new MatTableDataSource(this.expanditure_list);


  @ViewChild(MatSort) set matSort(ms: MatSort) {
    this.sort = ms;
    this.setDataSourceAttributes();
  }

  @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
    this.paginator = mp;
    this.setDataSourceAttributes();
  }


  anualForm: FormGroup;
  private paginator: MatPaginator;
  private sort: MatSort;
  date: Date = new Date();

  constructor(private fb: FormBuilder, private router: Router, ) { }



  // Search Field details
  FinYearList: CommonListing[] = [
    { value: '2019-2020', viewValue: '2019-2020' },
    { value: '2020-2021', viewValue: '2020-2021' },
  ];



  bpn_list: CommonListing[] = [
    {
      value: '1', viewValue: '03:Agriculture, Farmers Welfare & Co-Operation Department'
    },
    { value: '2', viewValue: '13:Industries and Mines Department' },

    { value: '3', viewValue: '22:Roads And Buildings Department' },
    { value: '4', viewValue: '24c: Tribal Development Department - Part III' },
    { value: '5', viewValue: '24b: Social Justice And Empowerment Department - Part II' },
    { value: '6', viewValue: '24d: Tribal Development Department - Part IV' },
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


  // fin yer
  finYearCtrl: FormControl = new FormControl();
  bpnCtrl: FormControl = new FormControl();
  demandCodeCtrl: FormControl = new FormControl();


  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }

  ngOnInit() {
    this.anualForm = this.fb.group({
      FinYear: [''],
      disclaimerDepartment: [''],
      bpnCode: [''],
      demandCode: [''],
    });
  }
  createForm() {
    throw new Error(' Method not implemented. ');
  }
  setDataSourceAttributes() {
    this.expanditureDatasource.paginator = this.paginator;
    this.expanditureDatasource.sort = this.sort;
  }

  leaveSubmit() {
    const p_data = this.anualForm;
    console.log(p_data);
  }
  clearForm() {
    this.anualForm.reset();
  }
  search() {
    this.isSearch = false;
  }

  goToDashboard() {
    this.router.navigate(['./']);
  }
// Delete record
  delete(index) {
    this.expanditureDatasource.data.splice(index, 1);
    this.expanditureDatasource = new MatTableDataSource(this.expanditureDatasource.data);
  }

}



