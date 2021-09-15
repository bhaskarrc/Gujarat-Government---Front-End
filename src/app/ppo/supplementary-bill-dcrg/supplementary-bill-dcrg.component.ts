import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { CommonListing } from 'src/app/model/common-listing';
import { ppoMessage } from 'src/app/common/error-message/common-message.constants';
import { CalculationTable, DeductionTable } from 'src/app/model/ppo';

@Component({
  selector: 'app-supplementary-bill-dcrg',
  templateUrl: './supplementary-bill-dcrg.component.html',
  styleUrls: ['./supplementary-bill-dcrg.component.css']
})
export class SupplementaryBillDcrgComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  // variables
  todayDate = Date.now();
  supplyRequestDetails: FormGroup;
  errMsg = ppoMessage;

  // form controls
  recoveryTypeCtrl: FormControl = new FormControl();
  deductionTypeCtrl: FormControl = new FormControl();
  recoveryType: FormControl = new FormControl('');
  // lists
  recoveryType_list: CommonListing[] = [
    { value: 'HBA', viewValue: 'HBA' },
    { value: 'MCA', viewValue: 'MCA' },
    { value: 'HRA', viewValue: 'HRA' },
    { value: 'Other', viewValue: 'Other' }
  ];

  deductionType_list: CommonListing[] = [
    { value: 'A', viewValue: 'A' },
    { value: 'B', viewValue: 'B' }
  ];
  // table data
  CalulationElementData: CalculationTable[] = [
    { daPercentageOld: '12', dcrgAmountOld: '10,00,000', daPercentageNew: '17', dcrgAmountNew: '0.00', total: '' },
  ];

  Element_Data: DeductionTable[] = [
    { recoveryType: '', edpCode: '', majorHead: '', submajorHead: '', minorHead: '', subHead: '', deductionType: '', amount: '' }
  ];
  deductionDataSource = new MatTableDataSource<DeductionTable>(this.Element_Data);

  calculateDataSource = new MatTableDataSource<CalculationTable>(this.CalulationElementData);

  calculationStructure = [
    'daPercentageOld', 'dcrgAmountOld', 'daPercentageNew', 'dcrgAmountNew', 'total'
  ];

  deductionColumn = [
    'recoveryType', 'edpCode', 'majorHead', 'submajorHead', 'minorHead', 'subHead', 'deductionType', 'amount', 'action'
  ];

  ngOnInit() {
    this.supplyRequestDetails = this.fb.group({
      partyName: ['Pratik K'],
      grossAmount: ['5000.00'],
      percentage: [''],
      deductionAmount: [''],
      netAmount: ['']
    });
  }

  // adds new data in table
  onChange(data) {
    const colData = this.deductionDataSource.data;

    colData.push({
      deductionType: 'A',
      edpCode: '9999',
      majorHead: '0071',
      minorHead: '800',
      subHead: '01	',
      recoveryType: data.value,
      amount: '5000.00',
      submajorHead: '01'
    });
    colData.splice(this.deductionDataSource.data.length - 2, 1);
    this.deductionDataSource.data = colData;
  }
  // adds new row
  addNewRow(data) {
    const Col_Data = this.deductionDataSource.data;
    Col_Data.push({
      deductionType: '',
      edpCode: '',
      majorHead: '',
      minorHead: '',
      subHead: '',
      recoveryType: data.value,
      amount: '',
      submajorHead: ''
    });
    this.deductionDataSource.data = Col_Data;
    console.log(this.deductionDataSource);
  }

  // deletes row
  removeRow(index) {
    this.deductionDataSource.data.splice(index, 1);
    this.deductionDataSource = new MatTableDataSource(
      this.deductionDataSource.data
    );
  }

  // calculates total deduction
  totalDeduction(): number {
    let amount = 0;
    this.deductionDataSource.data.forEach(element => {
      amount = amount + Number(element.amount);
    });
    return amount;
  }

  resetForm() { }
  workflowDetails() { }
  onSubmit() { }

  // calculates total amt
  totalCalculatedAmount(): void {
    let totalAmt = 0;

    this.calculateDataSource.data.forEach(element => {
      totalAmt = totalAmt + Number(element.dcrgAmountNew) - Number(element.dcrgAmountOld);
      element.total = Number(totalAmt).toFixed(2);
    });

  }

  calculate() { }

}
