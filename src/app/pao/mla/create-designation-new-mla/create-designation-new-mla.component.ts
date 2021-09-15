import { paoMessage } from './../../../common/error-message/common-message.constants';
import { group } from '@angular/animations';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { ListValue } from 'src/app/model/common-grant';
import { DdoGrantHeaddesComponent } from './ddo-grant-head/ddo-grant-head.component';


@Component({
  selector: 'app-create-designation-new-mla',
  templateUrl: './create-designation-new-mla.component.html',
  styleUrls: ['./create-designation-new-mla.component.css']
})
export class CreateDesignationNewMlaComponent implements OnInit {
  // Form Group
  createDesignationMLAForm: FormGroup;
  // Form Control
  classOfExpenditureCtrl: FormControl = new FormControl();
  fundTypeCtrl: FormControl = new FormControl();
  detailHeadCtrl: FormControl = new FormControl();
  objClassCtrl: FormControl = new FormControl();
  subMajorHeadCtrl: FormControl = new FormControl();
  minorHeadCtrl: FormControl = new FormControl();
  subHeadCtrl: FormControl = new FormControl();
  typeCtrl: FormControl = new FormControl();
  majorHeadCtrl: FormControl = new FormControl();
  expenditureTypeCtrl: FormControl = new FormControl();
  // Variable
  errorMessages = paoMessage;
  isSubmitted: boolean = false;

  departmentmla_list: ListValue[] = [
    { value: '1', viewValue: 'Education Department' },
    { value: '2', viewValue: 'Agriculture, Farmers Welfare and Co-operation Department' },
    { value: '3', viewValue: 'Health and Family Welfare Department' }
  ];
  constructor(private router: Router, private fb: FormBuilder, public dialog: MatDialog,) { }
  type_list: ListValue[] = [
    { value: '1', viewValue: 'State' },
    { value: '2', viewValue: 'CSS' },
  ];
  billtype_list: ListValue[] = [
    { value: '1', viewValue: 'GTR-30 - Pay Bill' },
    { value: '2', viewValue: 'GTR-45 - TA Bill' },
    { value: '3', viewValue: 'GTR-40 - Grant In Bill' },
    { value: '4', viewValue: 'GTR-12 - Advance Bill' }
  ];

  party_list: ListValue[] = [{
    value: '1', viewValue: 'Mr. Abc'
  },
  ];



  majorHead_list: ListValue[] = [
    { value: '1', viewValue: '3451:Secretariat-Economic Services' },
    {
      value: '2', viewValue: '5475:Capital Outlay on other General Economics Services'
    },
    { value: '3', viewValue: '2401:Crop Husbandry' },
    { value: '4', viewValue: '2071:Pensions and Other Retirement Benefits' },
    { value: '5', viewValue: '2058:Stationery and Printing' },
    { value: '6 : Secretariat-Social Services', viewValue: '2251 : Secretariat-Social Services' },
    { value: '7 : Interest Payments', viewValue: '2049 : Interest Payments' },
    { value: '8 : Water Supply and Sanitation', viewValue: '2215 : Water Supply and Sanitation' },
    { value: '9 : Ecology and Environment', viewValue: '3435 : Ecology and Environment' },
    { value: '10 : Capital Outlay on Urban Development', viewValue: '4217 : Capital Outlay on Urban Development' },
    { value: '11 : General Education', viewValue: '2202 : General Education' },
  ];

  billCategoryList: ListValue[] = [
    { value: '1', viewValue: 'Regular' },
    { value: '2', viewValue: 'TC' },
    { value: '3', viewValue: 'Nill' },
    { value: '4', viewValue: 'Regular / challns' },
  ];
  classType: ListValue[] = [
    { value: '1', viewValue: ' 1-Voted' },
    { value: '2', viewValue: ' 2-Charged' }
  ];
  subMajorHead_list: ListValue[] = [
    {
      value: '1', viewValue: '00 '
    },


  ];
  fundType: ListValue[] = [
    { value: '1', viewValue: '3-Consolidated' },
    { value: '2', viewValue: '4-Contingency' },
    { value: '3', viewValue: '5-Public Account' }
  ];
  minorHead_list: ListValue[] = [
    { value: '1', viewValue: '097:Treasury Establishment' },
    { value: '2', viewValue: '096:Pay and Accounts Offices' },
    { value: '3', viewValue: '095:Directorate of Accounts and Treasuries' },
    { value: '4', viewValue: '098:Local Fund Audit' },
    { value: '5', viewValue: '800:Other Expenditure' }
  ];
  subHead_list: ListValue[] = [
    { value: '1', viewValue: '01:Treasuries' },
    { value: '2', viewValue: '01:Pay and Accounts offices' },
    { value: '3', viewValue: '01:GES-1 Directorate' },
    { value: '4', viewValue: '01:Examiners' },
    { value: '5', viewValue: '01:Directorate of Pension and Provident Fund' }
  ];
  detailHead_list: ListValue[] = [
    {
      value: '1',
      viewValue: '00'
    }
  ];
  objectClass_list: ListValue[] = [
    { value: '1', viewValue: 'C0' },
    { value: '2', viewValue: 'C1' },
    { value: '3', viewValue: 'C2' },
    { value: '4', viewValue: 'C3' },
    { value: '5', viewValue: 'C4' },
    { value: '6', viewValue: 'C5' },
    { value: '7', viewValue: 'C6' },
    { value: '8', viewValue: 'C7' }
  ];
  expenditureType_list: ListValue[] = [
    { value: '1', viewValue: 'Standing Charges' },
    { value: '2', viewValue: 'New Item' },
    { value: '3', viewValue: 'New Work' },
    { value: '4', viewValue: 'Item Continuous' },
    { value: '5', viewValue: 'Work-In-Progress' }
  ];
  fromulafor_list: ListValue[] = [
    { value: '1', viewValue: 'Both' },
  ];

  ngOnInit() {
    this.createDesignationMLAeData();
  }

  createDesignationMLAeData() {
    this.createDesignationMLAForm = this.fb.group({
      newDeg: [''],
      departmentmla: [''],
      classOfExpenditure: [''],
      subMajorHead: [''],
      minorHead: [''],
      subHead: [''],
      detailHead: [''],
      objectClass: [''],
      demand: [''],
      schemeCode: [''],
      fundType: [''],
      type: [''],
      headChargable: [''],
      expenditureType: [''],
      telephoneCharge: [''],
      postalCharge: [''],
      personalAllowance: [''],
      conveyanceAllowance: [''],
      consolidatedAllowance: [''],
      deamessAllowance: [''],
      salary: [''],
      CDP: [''],
      fromulafor: [''],
      majorHead: ['']
    });
  }
  // ddo grant table
  dddoGrant() {
    const dialogRef = this.dialog.open(DdoGrantHeaddesComponent, {
      width: '1000px'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      let temp = result.split('-');
      console.log(temp);
      // 017:2054:00:097:01:00:C2	
      this.createDesignationMLAForm.patchValue({
        // class: 'Class I',
        fundType: '1',
        type: '1',
        classOfExpenditure: '1',
        typeOfEstimate: '1',
        stateCss: '1',
        schemeCode: '000000',
        demand: '017 : Treasury and Accounts Administration',
        majorHead: '1',
        subMajorHead: '1',
        expenditureType: '1',
        minorHead: '1',
        subHead: '1',
        detailHead: '1',
        objectClass: '3',
        headChargable: '017:2054:00:097:01:00:C2',
      });
    });
  }



  onSubmit() {
    if (this.createDesignationMLAForm.valid) {
      this.isSubmitted = false;
    }
    else {
      this.isSubmitted = true;
    }

  }

}