import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { element } from '@angular/core/src/render3/instructions';
import { ReplaySubject, Subject } from 'rxjs';
import { startWith, map, takeUntil } from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material';


export interface ReceiptElement { /*administratorDepartMent*/
        srNo:number,
        userId:any,
        userName:string,
        hod:any,
        adminDepartMent:any,
        designation:string,
        post:string,
        branchCode:string 
}

const ELEMENT_DATA: ReceiptElement[] = [
  {srNo:1, userId:'101216', userName:'Rajesh', hod:'Pay & Accounts Office Ahmedabad', adminDepartMent:'RAgriculture,Farmers Welfare & Co-operation Department', designation:'Under Secretary', post:'B1 Section - Budget', branchCode:'Administration'},
];

@Component({
  selector: 'app-user-creation',
  templateUrl: './user-creation.component.html',
  styleUrls: ['./user-creation.component.css']
})
export class UserCreationComponent implements OnInit {
  AdduserList: boolean = false;
  userCreation: FormGroup;
  codeCtrl = new FormControl();
  private _onDestroy = new Subject<void>();

  dataSource = new MatTableDataSource(ELEMENT_DATA);
  hodCodeCtrl: FormControl = new FormControl();
  filteredhodCode: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);
  adminDepartMentCtrl: FormControl = new FormControl();
  filteredadminDepartMentCode: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);
  designationCtrl: FormControl = new FormControl();
  filtereddesignationCode: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);
  postCtrl: FormControl = new FormControl();
  filteredpostCode: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);
  branchCodeCtrl: FormControl = new FormControl();
  filteredBranchCode: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);
  displayedColumns: string[] = ['srNo','userId','userName','hod','adminDepartMent','designation','post','branchCode','action'];
  
   hod_list: any[] = [
    {value: '001', viewValue: 'Pay & Accounts Office Ahmedabad'},
    {value: '002', viewValue: 'Pension Payment Office, Ahmedabad'},
    {value: '003', viewValue: 'District Asst Examiner Local Fund Accounts, Ahmeda'},
    {value: '004', viewValue: 'District Treasury Office, Ahmedabad'},
  ]
  Administrator_DepartMent_list: any[] = [
    {value: '001', viewValue: 'Agriculture,Farmers Welfare & Co-operation Department'},
    {value: '002', viewValue: 'Revenue Department'},
    {value: '003', viewValue: 'Gujarat Legislature Secretariat'},
    {value: '004', viewValue: 'Science and Technology Department'},
  ]
  designation_list: any[] = [
    {value: '001', viewValue: 'Under Secretary'},
    {value: '002', viewValue: 'Deputy Secretary'},
    {value: '003', viewValue: 'Secretary'},
    {value: '004', viewValue: 'Joint Secretary'},
  ]
  post_list: any[] = [
    {value: '001', viewValue: 'B1 Section - Budget'},
    {value: '002', viewValue: 'US (Budget, Planning)'},
    {value: '003', viewValue: 'DySO - Th3'},
    {value: '004', viewValue: 'TH (Budget Non Plan)'},
  ]

  branch_list: any[] = [
    {value: '1', viewValue: 'Administration'},
    {value: '2', viewValue: 'Budget'},
    {value: '3', viewValue: 'B1 Section - Budget '},
    {value: '4', viewValue: 'S4 (Scarcity)'},
    {value: '5', viewValue: 'Section Establishment'},
    {value: '6', viewValue: 'Section Budget'},
    {value: '7', viewValue: 'K Section - Establishment'},
  ];


  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }
  constructor(private fb: FormBuilder) {
    this.userCreation = this.fb.group({
      userId: [''],
      userName:[''],
      hod:[''],
      adminDepartMent:[''],
      designation:[''],
      post:[''],
      branchCode:['']      
    });
   }
  
  ngOnInit() {
    this.createForm();

    this.filteredhodCode.next(this.hod_list.slice());
    (this.hodCodeCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(this.hod_list, this.hodCodeCtrl.value, this.filteredhodCode);
      }));

      this.filteredadminDepartMentCode.next(this.Administrator_DepartMent_list.slice());
      (this.adminDepartMentCtrl.valueChanges
        .pipe(takeUntil(this._onDestroy))
        .subscribe(() => {
          this.filterObjValue(this.Administrator_DepartMent_list, this.adminDepartMentCtrl.value, this.filteredadminDepartMentCode);
        }));
        
      this.filtereddesignationCode.next(this.designation_list.slice());
      (this.designationCtrl.valueChanges
        .pipe(takeUntil(this._onDestroy))
        .subscribe(() => {
          this.filterObjValue(this.designation_list, this.designationCtrl.value, this.filtereddesignationCode);
        }));

        this.filteredpostCode.next(this.post_list.slice());
        (this.postCtrl.valueChanges
          .pipe(takeUntil(this._onDestroy))
          .subscribe(() => {
            this.filterObjValue(this.post_list, this.postCtrl.value, this.filteredpostCode);
          }));

          this.filteredBranchCode.next(this.branch_list.slice());
          (this.branchCodeCtrl.valueChanges
            .pipe(takeUntil(this._onDestroy))
            .subscribe(() => {
              this.filterObjValue(this.branch_list, this.branchCodeCtrl.value, this.filteredBranchCode);
            }));

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
  createForm() {
    
  }
  addUser(){
    this.AdduserList = false;
      const p_data = this.dataSource.data;
       p_data.push({
        // srNo:1,
        // userId:101216,
        // userName:'rajesh',
        // adminDepartMent:'Agriculture,Farmers Welfare & Co-operation Department',
        // hod:'Budget',
        // designation:'Under Secretary',
        // post:'B1 Section - Budget',
        // branchCode:'B1 Section - Budget ' ,
        srNo:this.userCreation.value[''],
        userId:this.userCreation.value['userId'],
        userName:this.userCreation.value['userName'],
        adminDepartMent:this.userCreation.value['adminDepartMent'],
        hod:this.userCreation.value['hod'],
        designation:this.userCreation.value['designation'],
        post:this.userCreation.value['post'],
        branchCode:this.userCreation.value['branchCode'] ,
      });
      //  this.dataSource = this.dataSource;
      this.dataSource.data = p_data;
      this.clearForm();
  }
  userCreationForm(){
    // console.log(data)
  }
  

  clearForm(){
    this.userCreation.reset();
  }
  delete(index) {
    this.dataSource.data.splice(index, 1);
    this.dataSource = new MatTableDataSource(this.dataSource.data);
  }

}
