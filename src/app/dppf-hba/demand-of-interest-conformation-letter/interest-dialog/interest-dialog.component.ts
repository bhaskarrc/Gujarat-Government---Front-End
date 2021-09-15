import { InterestDialog } from './../../../model/dppf-hba';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ListValue } from 'src/app/model/common-grant';
import { Component, OnInit, Inject } from '@angular/core';
import { MatTableDataSource, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-interest-dialog',
  templateUrl: './interest-dialog.component.html',
  styleUrls: ['./interest-dialog.component.css']
})
export class InterestDialogComponent implements OnInit {
  maxDate = new Date();
  Element_Data: InterestDialog[] = [
    {
      month: '9',
      year: '25',
      emiAmount: '2000',
      loan: '50000',
      type: '1',
      status: 'Recovered',
      voucherNo: '',
      recoveredDate: new Date('09/21/2019'),
      additionalInterest: '',
      penaltyInterest: '',
      isStatus: true,
    },
    {
      month: '10',
      year: '25',
      emiAmount: '2000',
      loan: '48000',
      type: '1',
      status: 'Recovered',
      voucherNo: '',
      recoveredDate: '',
      additionalInterest: '',
      penaltyInterest: '',
      isStatus: true,
    },
    {
      month: '11',
      year: '25',
      emiAmount: '2000',
      loan: '46000',
      type: '1',
      status: 'Recovered',
      voucherNo: '',
      recoveredDate: '',
      additionalInterest: '',
      penaltyInterest: '',
      isStatus: true,
    },
    {
      month: '12',
      year: '25',
      emiAmount: '2000',
      loan: '44000',
      type: '1',
      status: 'Recovered',
      voucherNo: '',
      recoveredDate: '',
      additionalInterest: '',
      penaltyInterest: '',
      isStatus: true,
    },
    {
      month: '1',
      year: '26',
      emiAmount: '2000',
      loan: '42000',
      type: '1',
      status: 'Recovered',
      voucherNo: '',
      recoveredDate: '',
      additionalInterest: '',
      penaltyInterest: '',
      isStatus: true,
    },
    {
      month: '2',
      year: '26',
      emiAmount: '2000',
      loan: '40000',
      type: '1',
      status: 'Recovered',
      voucherNo: '',
      recoveredDate: '',
      additionalInterest: '',
      penaltyInterest: '',
      isStatus: true,
    },
    {
      month: '3',
      year: '26',
      emiAmount: '2000',
      loan: '38000',
      type: '1',
      status: 'Recovered',
      voucherNo: '',
      recoveredDate: '',
      additionalInterest: '',
      penaltyInterest: '',
      isStatus: true,
    },
    {
      month: '4',
      year: '26',
      emiAmount: '2000',
      loan: '36000',
      type: '1',
      status: 'Recovered',
      voucherNo: '',
      recoveredDate: '',
      additionalInterest: '',
      penaltyInterest: '',
      isStatus: true,
    },
    {
      month: '5',
      year: '26',
      emiAmount: '2000',
      loan: '34000',
      type: '1',
      status: 'Recovered',
      voucherNo: '',
      recoveredDate: '',
      additionalInterest: '',
      penaltyInterest: '',
      isStatus: true,
    },
    {
      month: '6',
      year: '26',
      emiAmount: '2000',
      loan: '32000',
      type: '1',
      status: 'Recovered',
      voucherNo: '',
      recoveredDate: '',
      additionalInterest: '',
      penaltyInterest: '',
      isStatus: true,
    },
    {
      month: '7',
      year: '26',
      emiAmount: '2000',
      loan: '30000',
      type: '1',
      status: 'Recovered',
      voucherNo: '',
      recoveredDate: '',
      additionalInterest: '',
      penaltyInterest: '',
      isStatus: true,
    },
    {
      month: '8',
      year: '26',
      emiAmount: '2000',
      loan: '28000',
      type: '1',
      status: 'Recovered',
      voucherNo: '',
      recoveredDate: '',
      additionalInterest: '',
      penaltyInterest: '',
      isStatus: true,
    },
    {
      month: '9',
      year: '26',
      emiAmount: '2000',
      loan: '26000',
      type: '1',
      status: 'Recovered',
      voucherNo: '',
      recoveredDate: '',
      additionalInterest: '',
      penaltyInterest: '',
      isStatus: true,
    },
    {
      month: '10',
      year: '26',
      emiAmount: '2000',
      loan: '24000',
      type: '1',
      status: 'Recovered',
      voucherNo: '',
      recoveredDate: '',
      additionalInterest: '',
      penaltyInterest: '',
      isStatus: true,
    },
    {
      month: '11',
      year: '26',
      emiAmount: '2000',
      loan: '22000',
      type: '1',
      status: 'Recovered',
      voucherNo: '',
      recoveredDate: '',
      additionalInterest: '',
      penaltyInterest: '',
      isStatus: true,
    },
    {
      month: '12',
      year: '26',
      emiAmount: '2000',
      loan: '20000',
      type: '1',
      status: 'Recovered',
      voucherNo: '',
      recoveredDate: '',
      additionalInterest: '',
      penaltyInterest: '',
      isStatus: true,
    },
    {
      month: '1',
      year: '27',
      emiAmount: '2000',
      loan: '18000',
      type: '1',
      status: 'Recovered',
      voucherNo: '',
      recoveredDate: '',
      additionalInterest: '',
      penaltyInterest: '',
      isStatus: true,
    },
    {
      month: '2',
      year: '27',
      emiAmount: '2000',
      loan: '16000',
      type: '1',
      status: 'Recovered',
      voucherNo: '',
      recoveredDate: '',
      additionalInterest: '',
      penaltyInterest: '',
      isStatus: true,
    },
    {
      month: '3',
      year: '27',
      emiAmount: '2000',
      loan: '14000',
      type: '1',
      status: 'Recovered',
      voucherNo: '',
      recoveredDate: '',
      additionalInterest: '',
      penaltyInterest: '',
      isStatus: true,
    },
    {
      month: '4',
      year: '27',
      emiAmount: '2000',
      loan: '12000',
      type: '1',
      status: 'Recovered',
      voucherNo: '',
      recoveredDate: '',
      additionalInterest: '',
      penaltyInterest: '',
      isStatus: true,
    },
    {
      month: '5',
      year: '27',
      emiAmount: '2000',
      loan: '10000',
      type: '1',
      status: 'Recovered',
      voucherNo: '',
      recoveredDate: '',
      additionalInterest: '',
      penaltyInterest: '',
      isStatus: true,
    },
    {
      month: '6',
      year: '27',
      emiAmount: '2000',
      loan: '8000',
      type: '1',
      status: 'Recovered',
      voucherNo: '',
      recoveredDate: '',
      additionalInterest: '',
      penaltyInterest: '',
      isStatus: true,
    },
    {
      month: '7',
      year: '27',
      emiAmount: '2000',
      loan: '6000',
      type: '1',
      status: 'Recovered',
      voucherNo: '',
      recoveredDate: '',
      additionalInterest: '',
      penaltyInterest: '',
      isStatus: true,
    },
    {
      month: '8',
      year: '27',
      emiAmount: '2000',
      loan: '4000',
      type: '1',
      status: 'Recovered',
      voucherNo: '',
      recoveredDate: '',
      additionalInterest: '',
      penaltyInterest: '',
      isStatus: true,
    },
    {
      month: '9',
      year: '27',
      emiAmount: '2000',
      loan: '2000',
      type: '1',
      status: 'Recovered',
      voucherNo: '',
      recoveredDate: '',
      additionalInterest: '',
      penaltyInterest: '',
      isStatus: true,
    },
    {
      month: '10',
      year: '27',
      emiAmount: '2000',
      loan: '0',
      type: '1',
      status: 'Recovered',
      voucherNo: '',
      recoveredDate: '',
      additionalInterest: '',
      penaltyInterest: '',
      isStatus: true,
    },
  ];
  type_list: ListValue[] = [
    { value: '1', viewValue: 'Principal' },
    { value: '2', viewValue: 'Interest' },
  ];
  month_list: ListValue[] = [
    { value: '1', viewValue: 'Jan' },
    { value: '2', viewValue: 'Feb' },
    { value: '3', viewValue: 'Mar' },
    { value: '4', viewValue: 'Apr' },
    { value: '5', viewValue: 'May' },
    { value: '6', viewValue: 'Jun' },
    { value: '7', viewValue: 'Jul' },
    { value: '8', viewValue: 'Aug' },
    { value: '9', viewValue: 'Sep' },
    { value: '10', viewValue: 'Oct' },
    { value: '11', viewValue: 'Nov' },
    { value: '12', viewValue: 'Dec' },
  ];
  year_list: ListValue[] = [
    { value: '1', viewValue: '1994' },
    { value: '2', viewValue: '1995' },
    { value: '3', viewValue: '1996' },
    { value: '4', viewValue: '1997' },
    { value: '5', viewValue: '1998' },
    { value: '6', viewValue: '1999' },
    { value: '7', viewValue: '2000' },
    { value: '8', viewValue: '2001' },
    { value: '9', viewValue: '2002' },
    { value: '10', viewValue: '2003' },
    { value: '11', viewValue: '2004' },
    { value: '12', viewValue: '2005' },
    { value: '13', viewValue: '2006' },
    { value: '14', viewValue: '2007' },
    { value: '15', viewValue: '2008' },
    { value: '16', viewValue: '2009' },
    { value: '17', viewValue: '2010' },
    { value: '18', viewValue: '2011' },
    { value: '2', viewValue: '2012' },
    { value: '19', viewValue: '2013' },
    { value: '20', viewValue: '2014' },
    { value: '21', viewValue: '2015' },
    { value: '22', viewValue: '2016' },
    { value: '23', viewValue: '2017' },
    { value: '24', viewValue: '2018' },
    { value: '25', viewValue: '2019' },
    { value: '26', viewValue: '2020' },
    { value: '27', viewValue: '2021' },
    { value: '28', viewValue: '2022' },
    { value: '29', viewValue: '2023' },
    { value: '30', viewValue: '2024' },

  ];
  headerJso: any[] = [
    { label: 'Employee Number : ', value: '1003701318' },
    { label: 'Interest Rate : ', value: '10.5' },
    { label: 'Name Of Employee : ', value: 'Vikash Patel' },
    { label: 'HBA/MCA Account No : ', value: '2641773 ' },
    { label: 'Loan Amount : ', value: '20000.00' },
    { label: 'Office Name : ', value: 'DAT Gandhinagar' },
    { label: 'DDO No. : ', value: '1' },
    { label: 'Cardex No. : ', value: '1' },
  ];

  headerJso1: any[] = [
    { label: '9574/100 * 10/12 ', value: ' 76954.19791666' },
    { label: '9574/100 * Penalty Interest/12 ', value: 'Penalty Interest' },
    { label: '9575/100 * 0.5/12', value: '4874846513.19791666' },


  ];


  displayedColumns: any[] = [
    'emiNo',
    'month',
    'year',
    'emiAmount',
    'loan',
    'type',
    'status',
    'voucherNo',
    'recoveredDate',
    'additionalInterest',
    'penaltyInterest',
    'action',
  ];

  displayedFooterColumns: any[] = [
    'emiAmount',
    'loan',
    'type',
    'status',
    'voucherNo',
    'recoveredDate',
    'additionalInterest',
    'penaltyInterest',
    'action',
  ];

  dataSource = new MatTableDataSource<InterestDialog>(this.Element_Data);
  loanWithInterest = Math.round((this.totalLoan() * 10.5) / 1200);
  // ((this.totalLoan() * 10.5) / 1200);

  headerJso2: any[] = [
    { label: '10.5 % Interest : ', value: '' + this.loanWithInterest, link: false },
    { label: '2.75 Penalty Interest(If applicable) : ', value: '', link: false },
    { label: 'Additional 0.5 Only for HBA : ', value: '', link: false },
    { label: 'Total Interest Amount : ', value: '150000', link: true },
  ];

  selection = new SelectionModel<any>(true, []);
  to = 0;
  from = 0;
  isDisable = false;
  panSelect = false;
  constructor(public dialogRef: MatDialogRef<InterestDialogComponent>,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any) {

    console.log('data', this.data);

    if (this.data.fromComponent === 'NdcRequestCaseRecovery') {
      this.displayedColumns = [
        'emiNo',
        'month',
        'year',
        'emiAmount',
        'loan',
        'type',
        'status',
        'voucherNo',
        'recoveredDate',
        'action',
      ];
      this.displayedFooterColumns = [
        'emiAmount',
        'loan',
        'type',
        'status',
        'voucherNo',
        'recoveredDate',
        'action',
      ];
      this.headerJso2 = [
        { label: '10.5 % Interest : ', value: '' + this.loanWithInterest, link: false },
        { label: 'Interest Amount : ', value: '150000', link: false },
        { label: 'Principal Amount : ', value: '650000', link: false },
        { label: 'Total Recovery Amount : ', value: '800000', link: true },
      ];
    }
    if (this.data.fromComponent === 'InterestConformationCase') {
      this.headerJso2 = [
        { label: '10.5 % Interest : ', value: '' + this.loanWithInterest, link: false },
        // { label: 'Total Interest Amount : ', value: '150000', link: false },
        { label: 'Principal Amount : ', value: '650000', link: false },
        { label: 'Total Interest Recovery Amount: ', value: '7448', link: true },
        { label: '', value: '', link: false },
        { label: 'પગાર બીલ આધારિત ખરાઈ કરી વસૂલાત નું પત્રક બનાવેલ છે.', value: '', link: false },
      ];
    }

    if (this.data.fromComponent === 'NdcRequestCaseInterest') {
      this.isDisable = true;
      this.displayedColumns = [
        'emiNo',
        'month',
        'year',
        'emiAmount',
        'loan',
        'type',
        'status',
        'voucherNo',
        'recoveredDate',
        'additionalInterest',
        'penaltyInterest',
      ];
      this.displayedFooterColumns = [
        'emiAmount',
        'loan',
        'type',
        'status',
        'voucherNo',
        'recoveredDate',
        'additionalInterest',
        'penaltyInterest',
      ];
    }
  }


  // to delete row
  delete(index) {
    this.dataSource.data.splice(index, 1);
    this.dataSource = new MatTableDataSource(this.dataSource.data);
  }


  // to add row
  onAdd(index) {

    const addData: InterestDialog = {
      month: '',
      year: '',
      emiAmount: '',
      loan: '',
      type: '',
      status: '',
      voucherNo: '',
      recoveredDate: '',
      additionalInterest: '',
      penaltyInterest: '',
      isStatus: false,
    };
    this.dataSource.data.splice(index + 1, 0, addData);
    this.dataSource.data = this.dataSource.data;

  }
  ngOnInit() {
    this.penaltyInterest();
    this.additionalInterest();
  }
  totalLoan() {
    let total = 0;
    this.dataSource.data.forEach(element => {
      total = total + Number(element.loan);
    });
    return total;
  }
  penaltyInterest() {
    let total = 0;
    this.dataSource.data.forEach(element => {
      total = total + Number(element.penaltyInterest);
    });
    return total;
  }
  additionalInterest() {
    let total = 0;
    this.dataSource.data.forEach(element => {
      total = total + Number(element.additionalInterest);
    });
    return total;
  }
  addInterest(element) {
    element.additionalInterest = ((Number(element.loan) * 0.5) / 1200);
    element.additionalInterest = Math.round(element.additionalInterest);
    return element.additionalInterest;
  }
  penInterest(element) {
    element.penaltyInterest = ((Number(element.loan) * 2.75) / 1200);
    element.penaltyInterest = Math.round(element.penaltyInterest);
    return element.penaltyInterest;
  }
  onInterest(value) {
    this.dialogRef.close({
      interestAmount: '' + value,
      loanAmount: this.totalLoan()
    });
  }

  // checkbox related method
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    let i = 0;
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => {
        if (this.panSelect) {
          i++;
          if (this.from <= this.dataSource.data.length && this.to <= this.dataSource.data.length) {
            if (i <= this.to && i >= this.from) {
              if (this.selection.isSelected(row)) {
                this.selection.deselect(row);
              } else {
                this.selection.select(row);
              }
            }
          }
        } else {
          this.selection.select(row);
        }
      }
      );
    this.panSelect = false;
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  onPenaltyInterest() {
    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(PenaltySelect, {
      width: '300px',
      height: 'auto'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.from = result.controls.from.value;
      this.to = result.controls.to.value;
      this.panSelect = true;
      this.masterToggle();
      console.log('The dialog was closed');
    });
  }

  onClose() {
    this.dialogRef.close();
  }
}
@Component({
  selector: 'app-penalty-select-dialog',
  templateUrl: './penalty-select-dialog.html',
})
// tslint:disable-next-line: component-class-suffix
export class PenaltySelect implements OnInit {

  penaltySelectForm: FormGroup;
  isYes = false;

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<PenaltySelect>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.penaltySelectForm = this.fb.group({
      to: [''],
      from: [''],
    });
  }

  onClose($event?) {
    this.dialogRef.close();
  }
  onSelect($event?) {
    if (this.penaltySelectForm.valid) {
      this.dialogRef.close(this.penaltySelectForm);
    }
  }
}

