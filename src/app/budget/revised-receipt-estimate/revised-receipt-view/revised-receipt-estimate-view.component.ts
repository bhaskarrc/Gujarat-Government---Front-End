import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Router} from '@angular/router';
import { RevisedRecEstimateView } from 'src/app/model/budget';


export interface HeaderElement {
  label: string | '';
  value: string | '';
}


const ELEMENT_DATA: RevisedRecEstimateView[] = [
  {
  subMajorHead: '00', minorHead: '901', subHead: '90', detailHead: '210',
   receipt: 121, disbursement: 132,
   receipt1: 121, disbursement1: 132,
   receipt2: 121, disbursement2: 132,
   receipt3: 121, disbursement3: 132,
  actualReceiptForLastYear: 2019, actualDisburSementForLastYear: 600,
  actualReceiptFor8MonthsOfCurrYr1A: 100, actualDisbursementFor8MonthsOfCurrYr1B: 100,
   actReciForLast4MonthCurR2A: 100, actDisbForLast4MonthCurR2B: 100,
   receipt1M2: 200, disbursement1M2: 200, Provision4nYReceipt: 100,
   Provision4nYdisbursement: 100, PropoAmountReceipt: 100, PropoAmountDisbu: 100,
   fDAcctOctNovCurrYearRec: 100, fDAcctOctNovCurrYearDis: 100,
   FDLatestEt4castCurrYearRec: 100, FDLatestEt4castCurrYearDis: 345,
   DeductRefundMap: '', remarks: '',
  },

  {
    subMajorHead: '00', minorHead: '901', subHead: '90', detailHead: '210',
     receipt: 121, disbursement: 132,
     receipt1: 121, disbursement1: 132,
     receipt2: 121, disbursement2: 132,
     receipt3: 121, disbursement3: 132,
    actualReceiptForLastYear: 2019, actualDisburSementForLastYear: 600,
    actualReceiptFor8MonthsOfCurrYr1A: 100, actualDisbursementFor8MonthsOfCurrYr1B: 100,
     actReciForLast4MonthCurR2A: 100, actDisbForLast4MonthCurR2B: 100,
     receipt1M2: 200, disbursement1M2: 200, Provision4nYReceipt: 100,
     Provision4nYdisbursement: 100, PropoAmountReceipt: 100, PropoAmountDisbu: 100,
     fDAcctOctNovCurrYearRec: 100, fDAcctOctNovCurrYearDis: 100,
     FDLatestEt4castCurrYearRec: 100, FDLatestEt4castCurrYearDis: 345,
     DeductRefundMap: '', remarks: '',
    },

    {
      subMajorHead: '00', minorHead: '901', subHead: '90', detailHead: '210',
       receipt: 121, disbursement: 132,
       receipt1: 121, disbursement1: 132,
       receipt2: 121, disbursement2: 132,
       receipt3: 121, disbursement3: 132,
      actualReceiptForLastYear: 2019, actualDisburSementForLastYear: 600,
      actualReceiptFor8MonthsOfCurrYr1A: 100, actualDisbursementFor8MonthsOfCurrYr1B: 100,
       actReciForLast4MonthCurR2A: 100, actDisbForLast4MonthCurR2B: 100,
       receipt1M2: 200, disbursement1M2: 200, Provision4nYReceipt: 100,
       Provision4nYdisbursement: 100, PropoAmountReceipt: 100, PropoAmountDisbu: 100,
       fDAcctOctNovCurrYearRec: 100, fDAcctOctNovCurrYearDis: 100,
       FDLatestEt4castCurrYearRec: 100, FDLatestEt4castCurrYearDis: 345,
       DeductRefundMap: '', remarks: '',
      },

      {
        subMajorHead: '00', minorHead: '901', subHead: '90', detailHead: '210',
         receipt: 121, disbursement: 132,
         receipt1: 121, disbursement1: 132,
         receipt2: 121, disbursement2: 132,
         receipt3: 121, disbursement3: 132,
        actualReceiptForLastYear: 2019, actualDisburSementForLastYear: 600,
        actualReceiptFor8MonthsOfCurrYr1A: 100, actualDisbursementFor8MonthsOfCurrYr1B: 100,
         actReciForLast4MonthCurR2A: 100, actDisbForLast4MonthCurR2B: 100,
         receipt1M2: 200, disbursement1M2: 200, Provision4nYReceipt: 100,
         Provision4nYdisbursement: 100, PropoAmountReceipt: 100, PropoAmountDisbu: 100,
         fDAcctOctNovCurrYearRec: 100, fDAcctOctNovCurrYearDis: 100,
         FDLatestEt4castCurrYearRec: 100, FDLatestEt4castCurrYearDis: 345,
         DeductRefundMap: '', remarks: '',
        },

];

@Component({
  selector: 'app-revised-receipt-estimate-view',
  templateUrl: './revised-receipt-estimate-view.component.html',
  styleUrls: ['./revised-receipt-estimate-view.component.css']
})
export class RevisedReceiptEstimateViewComponent implements OnInit {
  headerJson: HeaderElement[] = [
    { label: 'Financial Year', value: '2020-2021' },
    { label: 'Department', value: 'Education Department' },
    { label: 'Branch Name', value: 'Budget' },
    // { label: 'HoD', value: 'HoD' },
    { label: 'Estimation From', value: 'DDO' },
    // { label: 'Estimation For', value: 'Shri Arun Mahesh Babu MS' },
    { label: 'Major Head', value: '2205: Art and Culture' },
    { label: 'Sector', value: ' A0 : A-Tax Revenue' },
    { label: 'Sub Sector', value: 'BO :(b) Taxes on Income and Expenditure' }
  ];
  brwoseData: any[] = [
    { attachmentType: 'Supporting Document', fileName: 'PAN.jpeg' },
    { attachmentType: 'Sanction Order', fileName: 'Sanction Order.pdf' },
  ];
  dataSourceBrowse = new MatTableDataSource(this.brwoseData);
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  // tslint:disable-next-line: max-line-length

  // tslint:disable-next-line: max-line-length
  // displayedColumns = ['subMajorHead', 'minorHead', 'subHead','detailHead','receipt', 'disbursement', 'actualReceiptForLastYear', 'actualDisburSementForLastYear','actualReceiptFor8MonthsOfCurrYr1A','actualDisbursementFor8MonthsOfCurrYr1B','actReciForLast4MonthCurR2A', 'actDisbForLast4MonthCurR2B','receipt1M2','disbursement1M2','Provision4nYReceipt','Provision4nYdisbursement', 'PropoAmountReceipt', 'PropoAmountDisbu','fDAcctOctNovCurrYearRec','fDAcctOctNovCurrYearDis','FDLatestEt4castCurrYearRec','FDLatestEt4castCurrYearDis',
  // 'DeductRefundMap', 'remarks'];

  displayedColumns = ['subMajorHead', 'minorHead', 'subHead', 'detailHead', 'objecthead', 'receipt', 'disbursement',
  'receipt1', 'disbursement1',
  'receipt2', 'disbursement2',
  'receipt3', 'disbursement3',
  // tslint:disable-next-line: max-line-length
  'receipt1M2', 'disbursement1M2', 'Provision4nYReceipt', 'Provision4nYdisbursement', 'PropoAmountReceipt', 'PropoAmountDisbu',
   'fDAcctOctNovCurrYearRec', 'fDAcctOctNovCurrYearDis', 'FDLatestEt4castCurrYearRec', 'FDLatestEt4castCurrYearDis',
  'provisionRec', 'provisionDis', 'remarks', 'DeductRefundMap'];

  displayedBrowseColumns = ['position', 'attachmentType', 'fileName', 'action'];
  date: any = new Date();
  // date = new Date();
  // year = this.date.getFullYear();
  // previous = (this.date.getFullYear()-1);
  // nextYear = (this.date.getFullYear()+1);
  // prvYear = this.previous + "-" + this.year;
  // nextYears = this.year + "-" + this.nextYear;

  constructor( private router: Router) { }
  ngOnInit() {
  }
  view() {

  }
  // loadLastYear() {
  //   const year: any[] = this.headerJson[0].value.split('-');
  //   return (Number(year[0]) - 1).toString() + '-' + (Number(year[0]) - 0).toString();
  // }

  loadLastYear() {
    const year: any[] = this.headerJson[0].value.split('-');
    return (Number(year[0]) - 1).toString() + '-' + (Number(year[0]) - 0).toString();
  }

  loadNextYear() {
    const year: any[] = this.headerJson[0].value.split('-');
    return (Number(year[0]) + 1).toString() + '-' + (Number(year[0]) + 1).toString();
  }


  loadCurrentYear() {
    return this.headerJson[0].value;
  }
  loadSecondLastYear() {
    const year: any[] = this.headerJson[0].value.split('-');
    return (Number(year[0]) - 2).toString() + '-' + (Number(year[0]) - 1).toString();
  }




  gotoListing() {
    this.router.navigate(['./budget/revised-receipt-estimate-List']);
  }
  goToDashboard() {
    // console.log("go to Deshbord");
  }
}







