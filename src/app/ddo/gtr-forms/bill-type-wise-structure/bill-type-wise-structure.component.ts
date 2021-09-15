import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import { MatTableDataSource } from '@angular/material';
import { BillTypeWiseStructure } from 'src/app/model/ddo-forms';



@Component({
  selector: 'app-bill-type-wise-structure',
  templateUrl: './bill-type-wise-structure.component.html',
  styleUrls: ['./bill-type-wise-structure.component.css']
})
export class BillTypeWiseStructureComponent implements OnInit {

  // variables
  triggeredIndex;
  isEdited = false;

  // Form group
  formGroupBillTypeWise: FormGroup;

  // form control
  billCtrl: FormControl = new FormControl();
  classOfExpenditureCtrl: FormControl = new FormControl();
  fundTypeCtrl: FormControl = new FormControl();
  schemeTypeCtrl: FormControl = new FormControl();
  departmentCtrl: FormControl = new FormControl();
  demandCtrl: FormControl = new FormControl();
  majorHeadCtrl: FormControl = new FormControl();
  subMajorHeadCtrl: FormControl = new FormControl();
  minorHeadCtrl: FormControl = new FormControl();
  subHeadCtrl: FormControl = new FormControl();
  detailHeadCtrl: FormControl = new FormControl();
  objClassCtrl: FormControl = new FormControl();
  typeCtrl: FormControl = new FormControl();
  itemCtrl: FormControl = new FormControl();



  // List start
  billTypeList: ListValue[] = [
    {
      value: '1', viewValue: 'Advance Bill (GTR  85)',
    },
    {
      value: '2', viewValue: 'Bill for Withdrawal of Final/Dav/Other GPF (Class IV) (GTR - 76)',
    },
    {
      value: '3', viewValue: 'Bill for Withdrawal of Final/Dav/Other GPF (Other than Class IV) (GTR -75)',
    },
    {
      value: '4', viewValue: 'G I S Insu & Saving Fund on Ones Demise (GTR – 78)',
    },
    {
      value: '5', viewValue: 'G I S Saving fund on Ones Retirement & Resi (GTR – 79)',
    },
    {
      value: '6', viewValue: 'Group Insu Scheme (GTR -77)',
    },
    {
      value: '7', viewValue: 'Pay Bill (GTR -30)',
    },
    {
      value: '8', viewValue: 'Scholarship/Stipend (GTR -63)',
    },
    {
      value: '9', viewValue: 'Pay Bill Arrear Bill (GTR 110)',
    },
    {
      value: '10', viewValue: 'Medical Bill (GTR -29)',
    },
    {
      value: '11', viewValue: 'T A Bill (GTR – 35)',
    },
    {
      value: '12', viewValue: 'Refund of Deposit (GTR – 81)',
    },
    {
      value: '13', viewValue: 'Refund of Lapsed Deposit (GTR -83)',
    },
    {
      value: '14', viewValue: 'Refund of Revenue (GTR 61)',
    },
    {
      value: '15', viewValue: 'Court Fee Refund (CFR) ',
    },
    {
      value: '16', viewValue: 'Abstract Bill for the Contingent Charges (GTR - 45)',
    },
    {
      value: '17', viewValue: 'Detailed Bill of Contingent Charges of (GTR - 46)',
    },
    {
      value: '18', viewValue: 'Services Postage Stamp (GTR – 48)',
    },
    {
      value: '19', viewValue: 'Simple Receipt for Online Bill (SR) ',
    },
    {
      value: '20', viewValue: 'Detailed bill for Contingent Charges (GTR – 44)',
    },
    {
      value: '21', viewValue: 'Grant in Aid Local Bodies (GTR – 62B)',
    },
    {
      value: '22', viewValue: 'Grant in Aid Others (GTR – 62C)',
    },
    {
      value: '23', viewValue: 'Grant in Aid Panchayat (GTR – 62A)',
    }
  ];

  classType: ListValue[] = [
    { value: '1', viewValue: ' 1-Voted' },
    { value: '2', viewValue: ' 2-Charged' }
  ];
  fundTypeList: ListValue[] = [
    { value: '1', viewValue: '3-Consolidated' },
    { value: '2', viewValue: '4-Contingency' },
    { value: '3', viewValue: '5-Public Account' }
  ];
  schemeTypeList: ListValue[] = [
    { value: '1', viewValue: '1-State' },
    { value: '2', viewValue: '1-CSS' }
  ];
  departmentList: ListValue[] = [
    { value: '1', viewValue: 'Financial Department' },
    { value: '1', viewValue: 'Climate Change Department' }
  ];
  demandList: ListValue[] = [
    { value: '2', viewValue: '017:Treasury and Accounts Administration' }
  ];
  majorHeadList: ListValue[] = [
    { value: '2054', viewValue: '2054 : Treasury and Accounts Administration' }
  ];
  subMajorHeadList: ListValue[] = [
    {
      value: '00',
      viewValue: '00 :'
    }
  ];
  minorHeadList: ListValue[] = [
    { value: '095', viewValue: '095:Directorate of Accounts and Treasuries' },
    { value: '096', viewValue: '096:Pay and Accounts Offices' },
    { value: '097', viewValue: '097:Treasury Establishment' },
    { value: '098', viewValue: '098:Local Fund Audit' },
    { value: '800', viewValue: '800:Other Expenditure' }
  ];
  subHeadList: ListValue[] = [
    { value: '1', viewValue: '01:GES-1 Directorate' },
    { value: '2', viewValue: '01:Pay and Accounts offices' },
    { value: '3', viewValue: '01:Treasuries' },
    { value: '3', viewValue: '01:Examiners' },
    { value: '3', viewValue: '01:Directorate of Pension and Provident Fund' }
  ];
  detailHeadList: ListValue[] = [
    { value: '1', viewValue: '00:GES-1 Directorate' },
    { value: '2', viewValue: '00:Pay and Accounts offices' },
    { value: '3', viewValue: '00:Treasuries' },
    { value: '3', viewValue: '00:Examiners' },
    { value: '3', viewValue: '00:Directorate of Pension and Provident Fund' }
  ];
  objectClassList: ListValue[] = [
    { value: '1', viewValue: 'Object Class-0: ' },
    { value: '2', viewValue: 'Object Class-1: ' },
    { value: '3', viewValue: 'Object Class-2 (Administrative Expenses) ' },
    { value: '4', viewValue: 'Object Class-3: ' },
    { value: '5', viewValue: 'Object Class-4:' },
    { value: '6', viewValue: 'Object Class-5: Grant etc.' },
    { value: '7', viewValue: 'Object Class-6: ' }
  ];
  typeofEstimateList: ListValue[] = [
    { value: '1', viewValue: 'Standing Charges' },
    { value: '2', viewValue: 'New Item' },
    { value: '3', viewValue: 'New Work' },
    { value: '4', viewValue: 'Item Continuous' },
    { value: '5', viewValue: 'Work-In-Progress' }
  ];
  itemNameList: ListValue[] = [
    {
      value: '1',
      viewValue: 'Purchase of new car for Director of Agriculture'
    },
    { value: '2', viewValue: 'Purchase of Furniture for the Director Office' },
    { value: '3', viewValue: 'Purchase Furniture for record room of Office' },
    {
      value: '4',
      viewValue: 'Purchase of new Furniture for the Joint Director Office'
    },
    {
      value: '5',
      viewValue: 'Purchase of new Furniture for the Deputy Director'
    }
  ];
  // list end

  // table data start
  displayedColumns: string[] = [
    'billType',
    'classOfExpenditure',
    'fundType',
    'schemeType',
    'department',
    'demand',
    'majorHead',
    'subMajorHead',
    'minorHead',
    'subHead',
    'detailHead',
    'objectClass',
    'typeOfEstimate',
    'itemName',
    'action'
  ];

  elementDataTabke: BillTypeWiseStructure[] = [
  ];

  dataSourceStructureSearch = new MatTableDataSource<BillTypeWiseStructure>(this.elementDataTabke);
  // table data end


  // constructor
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.funFormGroupBillTypeWise();
  }

  // select item
  itemSelect(event?) { }

  // function for form group bill type wise
  funFormGroupBillTypeWise() {
    this.formGroupBillTypeWise = this.fb.group({
      billType: '',
      classOfExpenditure: '',
      fundType: '',
      schemeType: '',
      department: '',
      demand: '',
      majorHead: '',
      subMajorHead: '',
      minorHead: '',
      subHead: '',
      detailHead: '',
      objectClass: '',
      typeOfEstimate: '',
      itemName: '',
    });
  }

  // get view value by list and value
  getViewValueByListAndValue(list: ListValue[], value) {
    for (const element of list) {
      if (Object(element).value === value) {
        return Object(element).viewValue;
      }
    }
    return '-';
  }

  // on data submit
  onSubmitData($event) {
    if (this.formGroupBillTypeWise.valid) {
      const formControls = this.formGroupBillTypeWise.controls;
      const data = {
        billType: this.getViewValueByListAndValue(this.billTypeList, formControls.billType.value),
        classOfExpenditure: this.getViewValueByListAndValue(this.classType, formControls.classOfExpenditure.value),
        fundType: this.getViewValueByListAndValue(this.fundTypeList, formControls.fundType.value),
        schemeType: this.getViewValueByListAndValue(this.schemeTypeList, formControls.schemeType.value),
        department: this.getViewValueByListAndValue(this.departmentList, formControls.department.value),
        demand: this.getViewValueByListAndValue(this.demandList, formControls.demand.value),
        majorHead: this.getViewValueByListAndValue(this.majorHeadList, formControls.majorHead.value),
        subMajorHead: this.getViewValueByListAndValue(this.subMajorHeadList, formControls.subMajorHead.value),
        minorHead: this.getViewValueByListAndValue(this.minorHeadList, formControls.minorHead.value),
        subHead: this.getViewValueByListAndValue(this.subHeadList, formControls.subHead.value),
        detailHead: this.getViewValueByListAndValue(this.detailHeadList, formControls.detailHead.value),
        objectClass: this.getViewValueByListAndValue(this.objectClassList, formControls.objectClass.value),
        typeOfEstimate: this.getViewValueByListAndValue(this.typeofEstimateList, formControls.typeOfEstimate.value),
        itemName: this.getViewValueByListAndValue(this.itemNameList, formControls.itemName.value),
      };

      if (this.isEdited) {
        this.triggerDelete(this.triggeredIndex);
        this.isEdited = false;
      }

      this.dataSourceStructureSearch.data.push(
        data
      );
      this.dataSourceStructureSearch.data = this.dataSourceStructureSearch.data;

      this.formGroupBillTypeWise.patchValue(
        {
          billType: '',
          classOfExpenditure: '',
          fundType: '',
          schemeType: '',
          department: '',
          demand: '',
          majorHead: '',
          subMajorHead: '',
          minorHead: '',
          subHead: '',
          detailHead: '',
          objectClass: '',
          typeOfEstimate: '',
          itemName: '',
        }
      );
    }
  }


  // get value by list an view value
  getValueByListAndViewValue(list: ListValue[], viewValue) {
    for (const element of list) {
      if (Object(element).viewValue === viewValue) {
        return Object(element).value;
      }
    }
    return '';
  }

  // on edit trigger
  triggerEdit(index) {
    this.isEdited = true;
    this.triggeredIndex = index;
    const data = this.elementDataTabke[index];
    this.formGroupBillTypeWise.patchValue(
      {
        billType: this.getValueByListAndViewValue(this.billTypeList, data.billType),
        classOfExpenditure: this.getValueByListAndViewValue(this.classType, data.classOfExpenditure),
        fundType: this.getValueByListAndViewValue(this.fundTypeList, data.fundType),
        schemeType: this.getValueByListAndViewValue(this.schemeTypeList, data.schemeType),
        department: this.getValueByListAndViewValue(this.departmentList, data.department),
        demand: this.getValueByListAndViewValue(this.demandList, data.demand),
        majorHead: this.getValueByListAndViewValue(this.majorHeadList, data.majorHead),
        subMajorHead: this.getValueByListAndViewValue(this.subMajorHeadList, data.subMajorHead),
        minorHead: this.getValueByListAndViewValue(this.minorHeadList, data.minorHead),
        subHead: this.getValueByListAndViewValue(this.subHeadList, data.subHead),
        detailHead: this.getValueByListAndViewValue(this.detailHeadList, data.detailHead),
        objectClass: this.getValueByListAndViewValue(this.objectClassList, data.objectClass),
        typeOfEstimate: this.getValueByListAndViewValue(this.typeofEstimateList, data.typeOfEstimate),
        itemName: this.getValueByListAndViewValue(this.itemNameList, data.itemName)
      });
  }

  // on delete trigger
  triggerDelete(index) {
    this.dataSourceStructureSearch.data.splice(index, 1);
    this.dataSourceStructureSearch.data = this.dataSourceStructureSearch.data;
  }

  // on view trigger
  triggerView(index) { }

}
