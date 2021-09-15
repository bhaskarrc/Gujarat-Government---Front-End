
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { HeaderElement } from 'src/app/model/common-listing';
import { ItemContiniousView, CSSS } from '../../../model/item-continuous';
import { StandingChargeConsolidateHistoryComponent, ConfirmDialogModel } from '../../standing-charge-consolidation/standing-charge-consolidate-history/standing-charge-consolidate-history.component';
import { DirstrictTableSecondItemCont, DistrictElement1ItemCont, ItemContinuous1View } from 'src/app/model/budget';

export class DistrictElement {
  id: number;
  districtName: string;
  expenditure: number;
  talukaExpenditure: number;
  gramExpenditure: number;
}
const ELEMENT_DATA_CL1: ItemContinuous1View[] = [
    {
        objectHead: '0101', actualsThirdLastYear: '20.00', actualsSecondLastYear: '20.00', lastYear: '20.00', criteria: '200.00',
         endBaseLine: '10.00', improvementFifteen: '100.00', improvementSixteen: '200.00',
         improvementEighteen: '100.00', currentYear: '300.00',
        underStatedOperation: '100.00', amountProposedByHod: '400.00', amountProposedByHodFinal: '400.00',
        amountProposedByDept: '400.00', amountProposedByFd: '400.00', remarks: '',
        toolTipData: '0101 : Pay of Officers Including Grade Pay'
    },
    {
        objectHead: '0102', actualsThirdLastYear: '20.00', actualsSecondLastYear: '20.00', lastYear: '20.00', criteria: '200.00',
         endBaseLine: '10.00', improvementFifteen: '100.00', improvementSixteen: '200.00',
         improvementEighteen: '100.00', currentYear: '300.00',
        underStatedOperation: '100.00', amountProposedByHod: '400.00', amountProposedByHodFinal: '400.00',
        amountProposedByDept: '400.00', amountProposedByFd: '400.00', remarks: '',
        toolTipData: '0102 : Pay of Establishment Including Grade Pay'
    },
    {
        objectHead: '0103', actualsThirdLastYear: '20.00', actualsSecondLastYear: '20.00', lastYear: '20.00', criteria: '200.00',
         endBaseLine: '10.00', improvementFifteen: '100.00', improvementSixteen: '200.00',
         improvementEighteen: '100.00', currentYear: '300.00',
        underStatedOperation: '100.00', amountProposedByHod: '400.00', amountProposedByHodFinal: '400.00',
        amountProposedByDept: '400.00', amountProposedByFd: '400.00', remarks: '',
        toolTipData: '0103 : Dearness Allowance'
    },
];
const ELEMENT_DATA_CL2: ItemContinuous1View[] = [
    {
        objectHead: '2100', actualsThirdLastYear: '20.00', actualsSecondLastYear: '20.00', lastYear: '20.00', criteria: '200.00',
         endBaseLine: '10.00', improvementFifteen: '100.00', improvementSixteen: '200.00',
         improvementEighteen: '100.00', currentYear: '300.00',
        underStatedOperation: '100.00', amountProposedByHod: '400.00', amountProposedByHodFinal: '400.00',
        amountProposedByDept: '400.00', amountProposedByFd: '400.00', remarks: '',
        toolTipData: '2100'
    },
    {
        objectHead: '2101', actualsThirdLastYear: '20.00', actualsSecondLastYear: '20.00', lastYear: '20.00', criteria: '200.00',
         endBaseLine: '10.00', improvementFifteen: '100.00', improvementSixteen: '200.00',
         improvementEighteen: '100.00', currentYear: '300.00',
        underStatedOperation: '100.00', amountProposedByHod: '400.00', amountProposedByHodFinal: '400.00',
        amountProposedByDept: '400.00', amountProposedByFd: '400.00', remarks: '',
        toolTipData: '2101'
    },
];

const ELEMENT_DATA_CL3: ItemContinuous1View[] = [
    {
        objectHead: '3131', actualsThirdLastYear: '20.00', actualsSecondLastYear: '20.00', lastYear: '20.00', criteria: '200.00',
         endBaseLine: '10.00', improvementFifteen: '100.00', improvementSixteen: '200.00',
         improvementEighteen: '100.00', currentYear: '300.00',
        underStatedOperation: '100.00', amountProposedByHod: '400.00', amountProposedByHodFinal: '400.00',
        amountProposedByDept: '400.00', amountProposedByFd: '400.00', remarks: '',
        toolTipData: '3131'
    },
    {
        objectHead: '3135', actualsThirdLastYear: '20.00', actualsSecondLastYear: '20.00', lastYear: '20.00', criteria: '200.00',
         endBaseLine: '10.00', improvementFifteen: '100.00', improvementSixteen: '200.00',
         improvementEighteen: '100.00', currentYear: '300.00',
        underStatedOperation: '100.00', amountProposedByHod: '400.00', amountProposedByHodFinal: '400.00',
        amountProposedByDept: '400.00', amountProposedByFd: '400.00', remarks: '',
        toolTipData: '3135'
    },
    {
        objectHead: '3243', actualsThirdLastYear: '20.00', actualsSecondLastYear: '20.00', lastYear: '20.00', criteria: '200.00',
         endBaseLine: '10.00', improvementFifteen: '100.00', improvementSixteen: '200.00',
         improvementEighteen: '100.00', currentYear: '300.00',
        underStatedOperation: '100.00', amountProposedByHod: '400.00', amountProposedByHodFinal: '400.00',
        amountProposedByDept: '400.00', amountProposedByFd: '400.00', remarks: '',
        toolTipData: '3243'
    },
];

const ELEMENT_DATA_CL4: ItemContinuous1View[] = [
    {
        objectHead: '4100', actualsThirdLastYear: '20.00', actualsSecondLastYear: '20.00', lastYear: '20.00', criteria: '200.00',
         endBaseLine: '10.00', improvementFifteen: '100.00', improvementSixteen: '200.00',
         improvementEighteen: '100.00', currentYear: '300.00',
        underStatedOperation: '100.00', amountProposedByHod: '400.00', amountProposedByHodFinal: '400.00',
        amountProposedByDept: '400.00', amountProposedByFd: '400.00', remarks: '',
        toolTipData: '4100'
    },
    {
        objectHead: '4101', actualsThirdLastYear: '20.00', actualsSecondLastYear: '20.00', lastYear: '20.00', criteria: '200.00',
         endBaseLine: '10.00', improvementFifteen: '100.00', improvementSixteen: '200.00',
         improvementEighteen: '100.00', currentYear: '300.00',
        underStatedOperation: '100.00', amountProposedByHod: '400.00', amountProposedByHodFinal: '400.00',
        amountProposedByDept: '400.00', amountProposedByFd: '400.00', remarks: '',
        toolTipData: '4101'
    },
];

const ELEMENT_DATA_CL5: ItemContinuous1View[] = [
    {
        objectHead: '5100', actualsThirdLastYear: '20.00', actualsSecondLastYear: '20.00', lastYear: '20.00', criteria: '200.00',
         endBaseLine: '10.00', improvementFifteen: '100.00', improvementSixteen: '200.00',
         improvementEighteen: '100.00', currentYear: '300.00',
        underStatedOperation: '100.00', amountProposedByHod: '400.00', amountProposedByHodFinal: '400.00',
        amountProposedByDept: '400.00', amountProposedByFd: '400.00', remarks: '',
        toolTipData: '5100'
    },
    {
        objectHead: '5101', actualsThirdLastYear: '20.00', actualsSecondLastYear: '20.00', lastYear: '20.00', criteria: '200.00',
         endBaseLine: '10.00', improvementFifteen: '100.00', improvementSixteen: '200.00',
         improvementEighteen: '100.00', currentYear: '300.00',
        underStatedOperation: '100.00', amountProposedByHod: '400.00', amountProposedByHodFinal: '400.00',
        amountProposedByDept: '400.00', amountProposedByFd: '400.00', remarks: '',
        toolTipData: '5101'
    },
];

const ELEMENT_DATA_CL6: ItemContinuous1View[] = [
    {
        objectHead: '6100', actualsThirdLastYear: '20.00', actualsSecondLastYear: '20.00', lastYear: '20.00', criteria: '200.00',
         endBaseLine: '10.00', improvementFifteen: '100.00', improvementSixteen: '200.00',
         improvementEighteen: '100.00', currentYear: '300.00',
        underStatedOperation: '100.00', amountProposedByHod: '400.00', amountProposedByHodFinal: '400.00',
        amountProposedByDept: '400.00', amountProposedByFd: '400.00', remarks: '',
        toolTipData: '6100'
    },
    {
        objectHead: '6101', actualsThirdLastYear: '20.00', actualsSecondLastYear: '20.00', lastYear: '20.00', criteria: '200.00',
         endBaseLine: '10.00', improvementFifteen: '100.00', improvementSixteen: '200.00',
         improvementEighteen: '100.00', currentYear: '300.00',
        underStatedOperation: '100.00', amountProposedByHod: '400.00', amountProposedByHodFinal: '400.00',
        amountProposedByDept: '400.00', amountProposedByFd: '400.00', remarks: '',
        toolTipData: '6101'
    },
];

const ELEMENT_DATA_CL7: ItemContinuous1View[] = [
    {
        objectHead: '7057', actualsThirdLastYear: '20.00', actualsSecondLastYear: '20.00', lastYear: '20.00', criteria: '200.00',
         endBaseLine: '10.00', improvementFifteen: '100.00', improvementSixteen: '200.00',
         improvementEighteen: '100.00', currentYear: '300.00',
        underStatedOperation: '100.00', amountProposedByHod: '400.00', amountProposedByHodFinal: '400.00',
        amountProposedByDept: '400.00', amountProposedByFd: '400.00', remarks: '',
        toolTipData: '7100'
    },
    {
        objectHead: '7058', actualsThirdLastYear: '20.00', actualsSecondLastYear: '20.00', lastYear: '20.00', criteria: '200.00',
         endBaseLine: '10.00', improvementFifteen: '100.00', improvementSixteen: '200.00',
         improvementEighteen: '100.00', currentYear: '300.00',
        underStatedOperation: '100.00', amountProposedByHod: '400.00', amountProposedByHodFinal: '400.00',
        amountProposedByDept: '400.00', amountProposedByFd: '400.00', remarks: '',
        toolTipData: '7101'
    },
];
const DISTRICT_ELEMENT_DATA: DistrictElement[] = [
    { id: 1, expenditure: 0.00, districtName: 'Ahmedabad', talukaExpenditure: 0.00, gramExpenditure: 0.00 },
    { id: 2, expenditure: 0.00, districtName: 'Vadodara', talukaExpenditure: 0.00, gramExpenditure: 0.00 },
    { id: 3, expenditure: 0.00, districtName: 'Anand', talukaExpenditure: 0.00, gramExpenditure: 0.00 },
    { id: 4, expenditure: 0.00, districtName: 'Chhota Udaipur', talukaExpenditure: 0.00, gramExpenditure: 0.00 },
    { id: 5, expenditure: 0.00, districtName: 'Dahod', talukaExpenditure: 0.00, gramExpenditure: 0.00 },
    { id: 6, expenditure: 0.00, districtName: 'Kheda', talukaExpenditure: 0.00, gramExpenditure: 0.00 },
    { id: 7, expenditure: 0.00, districtName: 'Mahisagar', talukaExpenditure: 0.00, gramExpenditure: 0.00 },
    { id: 8, expenditure: 0.00, districtName: 'Panchmahal', talukaExpenditure: 0.00, gramExpenditure: 0.00 },
    { id: 9, expenditure: 0.00, districtName: 'Gandhinagar', talukaExpenditure: 0.00, gramExpenditure: 0.00 },
    { id: 10, expenditure: 0.00, districtName: 'Aravalli', talukaExpenditure: 0.00, gramExpenditure: 0.00 },
    { id: 11, expenditure: 0.00, districtName: 'Banaskantha', talukaExpenditure: 0.00, gramExpenditure: 0.00 },
    { id: 12, expenditure: 0.00, districtName: 'Mehsana', talukaExpenditure: 0.00, gramExpenditure: 0.00 },
    { id: 13, expenditure: 0.00, districtName: 'Patan', talukaExpenditure: 0.00, gramExpenditure: 0.00 },
    { id: 14, expenditure: 0.00, districtName: 'Sabarkantha', talukaExpenditure: 0.00, gramExpenditure: 0.00 },
    { id: 15, expenditure: 0.00, districtName: 'Rajkot', talukaExpenditure: 0.00, gramExpenditure: 0.00 },
    { id: 16, expenditure: 0.00, districtName: 'Amreli', talukaExpenditure: 0.00, gramExpenditure: 0.00 },
    { id: 17, expenditure: 0.00, districtName: 'Bhavnagar', talukaExpenditure: 0.00, gramExpenditure: 0.00 },
    { id: 18, expenditure: 0.00, districtName: 'Botad', talukaExpenditure: 0.00, gramExpenditure: 0.00 },
    { id: 19, expenditure: 0.00, districtName: 'Devbhoomi Dwarka', talukaExpenditure: 0.00, gramExpenditure: 0.00 },
    { id: 20, expenditure: 0.00, districtName: 'Gir Somnath', talukaExpenditure: 0.00, gramExpenditure: 0.00 },
    { id: 21, expenditure: 0.00, districtName: 'Jamnagar', talukaExpenditure: 0.00, gramExpenditure: 0.00 },
    { id: 22, expenditure: 0.00, districtName: 'Junagadh', talukaExpenditure: 0.00, gramExpenditure: 0.00 },
    { id: 23, expenditure: 0.00, districtName: 'Morbi', talukaExpenditure: 0.00, gramExpenditure: 0.00 },
    { id: 24, expenditure: 0.00, districtName: 'Porbandar', talukaExpenditure: 0.00, gramExpenditure: 0.00 },
    { id: 25, expenditure: 0.00, districtName: 'Surendranagar', talukaExpenditure: 0.00, gramExpenditure: 0.00 },
    { id: 26, expenditure: 0.00, districtName: 'Kachchh', talukaExpenditure: 0.00, gramExpenditure: 0.00 },
    { id: 27, expenditure: 0.00, districtName: 'Surat', talukaExpenditure: 0.00, gramExpenditure: 0.00 },
    { id: 28, expenditure: 0.00, districtName: 'Bharuch', talukaExpenditure: 0.00, gramExpenditure: 0.00 },
    { id: 29, expenditure: 0.00, districtName: 'Dang', talukaExpenditure: 0.00, gramExpenditure: 0.00 },
    { id: 30, expenditure: 0.00, districtName: 'Narmada', talukaExpenditure: 0.00, gramExpenditure: 0.00 },
    { id: 31, expenditure: 0.00, districtName: 'Navsari', talukaExpenditure: 0.00, gramExpenditure: 0.00 },
    { id: 32, expenditure: 0.00, districtName: 'Tapi', talukaExpenditure: 0.00, gramExpenditure: 0.00 },
    { id: 33, expenditure: 0.00, districtName: 'Valsad', talukaExpenditure: 0.00, gramExpenditure: 0.00 },
];

const DISTRICT_ELEMENT_DATA2: DirstrictTableSecondItemCont[] = [
    {
      id: 1,
      expendature: '',
      districtName: 'Ahmedabad',
      talukaexpendature: '',
      gramexpendature: ''
    },
    {
      id: 2,
      expendature: '',
      districtName: 'Vadodara',
      talukaexpendature: '',
      gramexpendature: ''
    },
    {
      id: 3,
      expendature: '',
      districtName: 'Anand',
      talukaexpendature: '',
      gramexpendature: ''
    },
    {
      id: 4,
      expendature: '',
      districtName: 'Chhota Udaipur',
      talukaexpendature: '',
      gramexpendature: ''
    },
    {
      id: 5,
      expendature: '',
      districtName: 'Dahod',
      talukaexpendature: '',
      gramexpendature: ''
    },
    {
      id: 6,
      expendature: '',
      districtName: 'Kheda',
      talukaexpendature: '',
      gramexpendature: ''
    },
    {
      id: 7,
      expendature: '',
      districtName: 'Mahisagar',
      talukaexpendature: '',
      gramexpendature: ''
    },
    {
      id: 8,
      expendature: '',
      districtName: 'Panchmahal',
      talukaexpendature: '',
      gramexpendature: ''
    },
    {
      id: 9,
      expendature: '',
      districtName: 'Gandhinagar',
      talukaexpendature: '',
      gramexpendature: ''
    },
    {
      id: 10,
      expendature: '',
      districtName: 'Aravalli',
      talukaexpendature: '',
      gramexpendature: ''
    },
    {
      id: 11,
      expendature: '',
      districtName: 'Banaskantha',
      talukaexpendature: '',
      gramexpendature: ''
    },
    {
      id: 12,
      expendature: '',
      districtName: 'Mehsana',
      talukaexpendature: '',
      gramexpendature: ''
    },
    {
      id: 13,
      expendature: '',
      districtName: 'Patan',
      talukaexpendature: '',
      gramexpendature: ''
    },
    {
      id: 14,
      expendature: '',
      districtName: 'Sabarkantha',
      talukaexpendature: '',
      gramexpendature: ''
    },
    {
      id: 15,
      expendature: '',
      districtName: 'Rajkot',
      talukaexpendature: '',
      gramexpendature: ''
    },
    {
      id: 16,
      expendature: '',
      districtName: 'Amreli',
      talukaexpendature: '',
      gramexpendature: ''
    },
    {
      id: 17,
      expendature: '',
      districtName: 'Bhavnagar',
      talukaexpendature: '',
      gramexpendature: ''
    },
    {
      id: 18,
      expendature: '',
      districtName: 'Botad',
      talukaexpendature: '',
      gramexpendature: ''
    },
    {
      id: 19,
      expendature: '',
      districtName: 'Devbhoomi Dwarka',
      talukaexpendature: '',
      gramexpendature: ''
    },
    {
      id: 20,
      expendature: '',
      districtName: 'Gir Somnath',
      talukaexpendature: '',
      gramexpendature: ''
    },
    {
      id: 21,
      expendature: '',
      districtName: 'Jamnagar',
      talukaexpendature: '',
      gramexpendature: ''
    },
    {
      id: 22,
      expendature: '',
      districtName: 'Junagadh',
      talukaexpendature: '',
      gramexpendature: ''
    },
    {
      id: 23,
      expendature: '',
      districtName: 'Morbi',
      talukaexpendature: '',
      gramexpendature: ''
    },
    {
      id: 24,
      expendature: '',
      districtName: 'Porbandar',
      talukaexpendature: '',
      gramexpendature: ''
    },
    {
      id: 25,
      expendature: '',
      districtName: 'Surendranagar',
      talukaexpendature: '',
      gramexpendature: ''
    },
    {
      id: 26,
      expendature: '',
      districtName: 'Kachchh',
      talukaexpendature: '',
      gramexpendature: ''
    },
    {
      id: 27,
      expendature: '',
      districtName: 'Surat',
      talukaexpendature: '',
      gramexpendature: ''
    },
    {
      id: 28,
      expendature: '',
      districtName: 'Bharuch',
      talukaexpendature: '',
      gramexpendature: ''
    },
    {
      id: 29,
      expendature: '',
      districtName: 'Dang',
      talukaexpendature: '',
      gramexpendature: ''
    },
    {
      id: 30,
      expendature: '',
      districtName: 'Narmada',
      talukaexpendature: '',
      gramexpendature: ''
    },
    {
      id: 31,
      expendature: '',
      districtName: 'Navsari',
      talukaexpendature: '',
      gramexpendature: ''
    },
    {
      id: 32,
      expendature: '',
      districtName: 'Tapi',
      talukaexpendature: '',
      gramexpendature: ''
    },
    {
      id: 33,
      expendature: '',
      districtName: 'Valsad',
      talukaexpendature: '',
      gramexpendature: ''
    },
    // {
    //   id: 34,
    //   expendature: '',
    //   districtName: 'State Level Only (if any)',
    //   talukaexpendature: '',
    //   gramexpendature: ''
    // }
  ];


  const DISTRICT_ELEMENT_DATA1: DistrictElement1ItemCont[] = [

    {

      id: 34,
      expendature: '',
      districtName: 'State Level Only (if any)',
      propsedAmount: '',

    }
  ];


const ELEMENT_DATA: any[] = [
  {
      objectHead: '0101', yearFrom: '2020', actualsThirdLastYear: '2019.00', actualsSecondLastYear: '2018.00', lastYear: '2018.00',
       criteria: '200.00', endBaseLine: '1.79', improvementFifteen: '100.00', improvementSixteen: '252.00', improvementEighteen: '253.00', currentYear: '356.00',
      underStatedOperation: 475, amountProposedByHod: '400', remarks: '', toolTipData: '0101 : Pay of Officers Including Grade Pay'
  },
  {
      objectHead: '0102', yearFrom: '2020', actualsThirdLastYear: '2019.00', actualsSecondLastYear: '2018.00', lastYear: '2018.00',
       criteria: '200.00', endBaseLine: '1.79', improvementFifteen: '100.00', improvementSixteen: '252.00', improvementEighteen: '253.00', currentYear: '356.00',
      underStatedOperation: 475, amountProposedByHod: '400', remarks: '', toolTipData: '0102 : Pay of Establishment Including Grade Pay'
  },
  {
      objectHead: '0103', yearFrom: '2020', actualsThirdLastYear: '2019.00', actualsSecondLastYear: '2018.00', lastYear: '2018.00',
       criteria: '200.00', endBaseLine: '1.79', improvementFifteen: '100.00', improvementSixteen: '252.00', improvementEighteen: '253.00', currentYear: '356.00',
      underStatedOperation: 475, amountProposedByHod: '400', remarks: '', toolTipData: '0103 : Dearness Allowance'
  },
  {
      objectHead: '3131', yearFrom: '2020', actualsThirdLastYear: '2019.00', actualsSecondLastYear: '2018.00', lastYear: '2018.00',
       criteria: '200.00', endBaseLine: '1.79', improvementFifteen: '100.00', improvementSixteen: '252.00', improvementEighteen: '253.00', currentYear: '356.00',
      underStatedOperation: 475, amountProposedByHod: '400', remarks: '',
       toolTipData: '3131 : Grants-in-Aid General to Panchayats pertaining to pay and allowances'
  },
  {
      objectHead: '3133', yearFrom: '2020', actualsThirdLastYear: '2019.00', actualsSecondLastYear: '2018.00', lastYear: '2018.00',
       criteria: '200.00', endBaseLine: '1.79', improvementFifteen: '100.00', improvementSixteen: '252.00', improvementEighteen: '253.00', currentYear: '356.00',
      underStatedOperation: 475, amountProposedByHod: '400', remarks: '', toolTipData: '3133 : Contributions (b) To Local Bodies'
  },
  {
      objectHead: '3135', yearFrom: '2020', actualsThirdLastYear: '2019.00', actualsSecondLastYear: '2018.00', lastYear: '2018.00',
       criteria: '200.00', endBaseLine: '1.79', improvementFifteen: '100.00', improvementSixteen: '252.00', improvementEighteen: '253.00', currentYear: '356.00',
      underStatedOperation: 475, amountProposedByHod: '400', remarks: '', toolTipData: '3135: Dantiwada Agricultural University'
  },
];

@Component({
  selector: 'app-create-budget-estimate-view',
  templateUrl: './create-budget-estimate-view.component.html',
  styleUrls: ['./create-budget-estimate-view.component.css']
})
export class CreateBudgetEstimateViewComponent implements OnInit {
  date: any = new Date();
  step = 0;
  headerJson: HeaderElement[] = [
    { label: 'Financial Year', value: '2019-2020' },
    { label: 'Department', value: 'Agriculture Department' },
    { label: 'Branch Name', value: 'Budget' },
    { label: 'Estimate From', value: 'Director of Horticulture' },
    // { label: 'Estimate For', value: 'Budget' },
    { label: 'Demand/Appropriation No.', value: '010: Other expenditure pertaining to Education Department' },
    { label: 'Major Head', value: '2205: Art and Culture' },
    { label: 'Sub Major Head', value: '00: ' },
    { label: 'Minor Head', value: '101: Fine Arts Education' },
    { label: 'Sub Head', value: '01: Grants to Sangeet Natya Bharati' },
    { label: 'Detailed Head', value: '00: Grants to Sangeet Natya Bharati' },
    { label: 'Charged/Voted', value: 'Voted' },
    { label: 'Scheme Type', value: 'Partially Centrally Sponsored Scheme' },
    { label: '% Ratio of State Burden', value: '60%'},
    { label: '% Ratio of CSS Burden', value: '40%'},
    { label: 'Item Name', value: 'Purchase' },
  ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  dataSourceClass1 = new MatTableDataSource(ELEMENT_DATA_CL1);
  dataSourceClass2 = new MatTableDataSource(ELEMENT_DATA_CL2);
  dataSourceClass3 = new MatTableDataSource(ELEMENT_DATA_CL3);
  dataSourceClass4 = new MatTableDataSource(ELEMENT_DATA_CL4);
  dataSourceClass5 = new MatTableDataSource(ELEMENT_DATA_CL5);
  dataSourceClass6 = new MatTableDataSource(ELEMENT_DATA_CL6);
  dataSourceClass7 = new MatTableDataSource(ELEMENT_DATA_CL7);

  districtColumns = ['position', 'district', 'expendature', 'talukaExpenditure', 'gramExpenditure'];
  districtColumns2 = [
      'position',
      'district',
      'expendature',
      'talukaexpendature',
      'gramexpendature'
    ];
  stateColumns = [
      'position',
      'district',
      'propsedAmount',
    ];
  districtDataSource = new MatTableDataSource(DISTRICT_ELEMENT_DATA);
  districtDataSource2 = new MatTableDataSource(
      DISTRICT_ELEMENT_DATA2.sort((a, b) =>
        a.districtName > b.districtName
          ? 1
          : b.districtName > a.districtName
            ? -1
            : 0
      )
    );
    stateDataSource = new MatTableDataSource(
      DISTRICT_ELEMENT_DATA1.sort((a, b) =>
        a.districtName > b.districtName
          ? 1
          : b.districtName > a.districtName
            ? -1
            : 0
      )
    );
  displayedColumns = ['objectHead', 'underStatedOperation', 'actualsThirdLastYear', 'actualsSecondLastYear',
   'lastYear', 'criteria', 'endBaseLine', 'improvementFifteen', 'improvementSixteen', 'improvementEighteen', 'currentYear',
    'amountProposedByHod', 'remarks'];

    // Editable Section

    displayedColumnsMainHeader = ['ObjectHead1', 'underStatedOperation1', 'actualsFor', 'header3',
    'BudgetEstimate', 'hodNextYear', 'remarks1'];

    displayedColumnsSubHeader = ['underStatedOperation', 'actualsThirdLastYear', 'actualsSecondLastYear', 'lastYear',
    'criteria', 'endBaseLine', 'improvementFifteen', 'improvementSixteen', 'improvementEighteen'];

    displayedColumnsNumber = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'];

    displayedColumnsExpan = ['objectHead', 'underStatedOperation', 'actualsThirdLastYear', 'actualsSecondLastYear',
     'lastYear', 'criteria', 'endBaseLine', 'improvementFifteen', 'improvementSixteen',
    'improvementEighteen', 'currentYear', 'amountProposedByHod', 'remarks'];

    displayedColumnsGrTot = ['objectHead', 'underStatedOperation', 'actualsThirdLastYear',
    'actualsSecondLastYear', 'lastYear', 'criteria', 'endBaseLine', 'improvementFifteen', 'improvementSixteen',
    'improvementEighteen', 'currentYear', 'amountProposedByHod', 'remarks'];
  brwoseData: any[] = [
    { fileName: 'Pan', browse: 'browse file', uploadedFileName: 'pan.jpg' },
  ];

  dataSourceBrowse = new MatTableDataSource(this.brwoseData);

  CSSDetails: any[] = [
    { year: '2016-17', ration: '3.00', general: '10.25', scsp: '10.00', tasp: '10.00', total: '30.25' },
    { year: '2017-18', ration: '100.00', general: '20.00', scsp: '20.00', tasp: '20.00', total: '60.0' },
    { year: '2018-19 (Till 31-10-2018)', ration: '5.00', general: '30.00', scsp: '30.00', tasp: '30.00', total: '90.00' },
];



dataSourceCSSDetail = new MatTableDataSource(this.CSSDetails);
displayedColumnsSection = ['year', 'ration', 'general', 'scsp', 'tasp', 'total'];
displayedColumnsSection1 = ['position', 'year', 'ration', 'general', 'scsp', 'tasp', 'total'];
schemDetails: any[] = [
    // tslint:disable-next-line: max-line-length
    { details: 'CENTRAL', amount: 23.02, persentage: 1.00, amountscpc: 23.02, persentagescpc: 1.00, amounttasp: 23.02, persentagetasp: 1.00, totalSchem: 183.47, },
    // tslint:disable-next-line: max-line-length
    { details: 'STATE', amount: 20.02, persentage: 2.00, amountscpc: 300.00, persentagescpc: 5.00, amounttasp: 45.85, persentagetasp: 8.00, totalSchem: 365.87, },
    // tslint:disable-next-line: max-line-length
    { details: 'TOTAL', amount: 43.04, persentage: 2, amountscpc: 425.00, persentagescpc: 2, amounttasp: 81.30, persentagetasp: 0, totalSchem: 649.34, },

];

dataSourceschemDetails = new MatTableDataSource(this.schemDetails);
// tslint:disable-next-line: max-line-length
displayedschemColumnsSection = ['details', 'amount', 'persentage', 'amountscpc',
 'persentagescpc', 'amounttasp', 'persentagetasp', 'totalschem'];
 displayedschemColumnsSection1 = ['position', 'details', 'amount', 'persentage', 'amountscpc',
  'persentagescpc', 'amounttasp', 'persentagetasp', 'totalschem'];

  displayedBrowseColumns = ['position','fileName', 'browse', 'uploadedFileName', 'action'];
  expendCharges: boolean;
  showObjectHeadWise = false;
  table1 = true;
  table2 = false;
  grantInAid: Boolean;
  constructor(private router: Router,
    public dialog: MatDialog,) { }

  ngOnInit() {
  }
  gotoListing() {
    this.router.navigate(['./budget/budget-list']);
  }
  goToDashboard() {
    this.router.navigate(['/']);
  }
  showCharge(event, index, element) {
    // if (element && element.objectHead && element.criteria && element.endBaseLine && element.improvementFifteen
    //     && element.currentYear) {

            if (element.objectHead === '3133' ||
                element.objectHead === '3243' ||
                element.objectHead === '3353' ||
                element.objectHead === '3563') {
                    this.grantInAid = true;
                    this.table1 = true;
                    this.table2 = false;
                } else if (element.objectHead === '3131' ||
                    element.objectHead === '3132' ||
                    element.objectHead === '3241' ||
                    element.objectHead === '3351' ||
                    element.objectHead === '3561' ) {
                        this.grantInAid = true;
                        this.table1 = false;
                        this.table2 = true;
                    } else if (element.objectHead === '3135' ||
                    element.objectHead === '3135-13' ||
                    element.objectHead === '3135-14' ||
                    element.objectHead === '3135-15' ||
                    element.objectHead === '3135-16') {
                        this.grantInAid = false;
                    }

        this.expendCharges = true;
        this.showObjectHeadWise = true;
        // this.selSubObjectId = '';
        // this.subObjectId = [];
        // const data = this.dataSource.data.filter((x, i) => i === index);
        // this.dataSource.data = data;
        // this.showObject = element.objectHead;
        // this.hodAmount = element.amountProposedByHod;
    // }
}

openHistory(data) {
  data.isSelected = true;
  this.showHistoryDialog();
}

showHistoryDialog(): void {

  const dialogData = new ConfirmDialogModel();

  const dialogRef = this.dialog.open(StandingChargeConsolidateHistoryComponent, {
    maxWidth: '400px',
    data: dialogData
  });

  dialogRef.afterClosed().subscribe(dialogResult => {
    console.log(dialogResult);
  });
}

  receveddetails(data) {
    let returnData = 0;
    if (data.general || data.scsp || data.tasp) {
        returnData = Number(data.general) + Number(data.scsp) + Number(data.tasp);
    }

    return returnData;
}

receveddetailsTwo(data) {
    let returnData = 0;
    if (data.amount || data.amountscpc || data.amounttasp) {
        returnData = Number(data.amount) + Number(data.amountscpc) + Number(data.amounttasp);

        // tslint:disable-next-line: max-line-length
        let sum = parseFloat(this.schemDetails[0].amount == '' ? 0 : this.schemDetails[0].amount) + parseFloat(this.schemDetails[1].amount == '' ? 0 : this.schemDetails[1].amount);
        this.schemDetails[2].amount = sum;

        // tslint:disable-next-line: max-line-length
        let sumAmountscpc = parseFloat(this.schemDetails[0].amountscpc == '' ? 0 : this.schemDetails[0].amountscpc) + parseFloat(this.schemDetails[1].amountscpc == '' ? 0 : this.schemDetails[1].amountscpc);
        this.schemDetails[2].amountscpc = sumAmountscpc;

        // tslint:disable-next-line: max-line-length
        let sumamounttasp = parseFloat(this.schemDetails[0].amounttasp == '' ? 0 : this.schemDetails[0].amounttasp) + parseFloat(this.schemDetails[1].amounttasp == '' ? 0 : this.schemDetails[1].amounttasp);
        this.schemDetails[2].amounttasp = sumamounttasp;

    }

    return returnData;
}
setStep(index: number) {
  this.step = index;
}

nextStep() {
  this.step++;
  // this.toastr.success('Data Saved Successfully..');
}

prevStep() {
  this.step--;
}

goBack() {
  this.expendCharges = false;
  this.showObjectHeadWise = false;
}

integerKeyPress(event: any) {
  const pattern = /^\d{0,5}?$/;
  const inputChar = String.fromCharCode(!event.charCode ? event.which : event.charCode);
  const keystobepassedout = '$Backspace$Delete$Home$Tab$ArrowLeft$ArrowRight$ArrowUp$ArrowDown$End$';
  if (keystobepassedout.indexOf('$' + event.key + '$') !== -1) {
      return true;
  }
  if (event.target.value.length > 5) {
      event.preventDefault();
      return false;
  }

  if (!pattern.test(inputChar)) {
      event.preventDefault();
      return false;
  }
  return true;
}

decimalKeyPress(event: any) {
    const pattern = /^\d+(\.\d{0,2})?$/;
    const inputChar = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    // If the key is backspace, tab, left, right or delete
    console.log('event.target.value', event.target.value);
    console.log('tst', pattern.test(event.target.value));

    let tempstr = event.target.value;
    tempstr += inputChar;

    if (!pattern.test(tempstr)) {
        // invalid character, prevent input
        event.preventDefault();
        return false;
    }

}

decimalPoint(data, key) {
    data[key] = Number(data[key]).toFixed(2);
}

calcActualsThirdLastYear() {
  let calcActualsThirdLastYear = 0;
  this.dataSource.data.forEach((element, index) => {
      calcActualsThirdLastYear =
    calcActualsThirdLastYear + Number(element.actualsThirdLastYear);
  });
  return calcActualsThirdLastYear;
}

calcActualsSecondLastYear() {
  let calcActualsSecondLastYear = 0;
  this.dataSource.data.forEach((element, index) => {
      calcActualsSecondLastYear =
      calcActualsSecondLastYear + Number(element.actualsSecondLastYear);
  });
  return calcActualsSecondLastYear;
}

calcLastYear() {
  let calcLastYear = 0;
  this.dataSource.data.forEach((element, index) => {
      calcLastYear =
      calcLastYear + Number(element.lastYear);
  });
  return calcLastYear;
}

calcCriteria() {
  let calcCriteria = 0;
  this.dataSource.data.forEach((element, index) => {
      calcCriteria =
      calcCriteria + Number(element.criteria);
  });
  return calcCriteria;
}

calcEndBaseLine() {
  let calcEndBaseLine = 0;
  this.dataSource.data.forEach((element, index) => {
      calcEndBaseLine =
      calcEndBaseLine + Number(element.endBaseLine);
  });
  return calcEndBaseLine;
}

calcImprovementFifteen() {
  let calcImprovementFifteen = 0;
  this.dataSource.data.forEach((element, index) => {
      calcImprovementFifteen =
      calcImprovementFifteen + Number(element.improvementFifteen);
  });
  return calcImprovementFifteen;
}

calcImprovementSixteen() {
  let calcImprovementSixteen = 0;
  this.dataSource.data.forEach((element, index) => {
      calcImprovementSixteen =
      calcImprovementSixteen + Number(element.improvementSixteen);
  });
  return calcImprovementSixteen;
}

calcImprovementEighteen() {
  let calcImprovementEighteen = 0;
  this.dataSource.data.forEach((element, index) => {
      calcImprovementEighteen =
      calcImprovementEighteen + Number(element.improvementEighteen);
  });
  return calcImprovementEighteen;
}

calcCurrentYear() {
  let calcCurrentYear = 0;
  this.dataSource.data.forEach((element, index) => {
      calcCurrentYear =
      calcCurrentYear + Number(element.currentYear);
  });
  return calcCurrentYear;
}

calcAmountProposedByHod() {
  let calcAmountProposedByHod = 0;
  this.dataSource.data.forEach((element, index) => {
      calcAmountProposedByHod =
      calcAmountProposedByHod + Number(element.amountProposedByHod);
  });
  return calcAmountProposedByHod;
}

jilla() {
    let amountExp = 0;
    this.districtDataSource.data.forEach((element) => {
      amountExp =  amountExp + Number(element.expenditure);
    });
    return amountExp;
  }
  taluka() {
    let amountExp = 0;
    this.districtDataSource.data.forEach((element) => {
      amountExp =  amountExp + Number(element.talukaExpenditure);
    });
    return amountExp;
  }
  gram() {
    let amountExp = 0;
    this.districtDataSource.data.forEach((element) => {
      amountExp =  amountExp + Number(element.gramExpenditure);
    });
    return amountExp;
  }

corporation() {
    let amountExp = 0;
    this.districtDataSource2.data.forEach((element) => {
      amountExp =  amountExp + Number(element.expendature);
    });
    return amountExp;
  }
  municipal() {
    let amountExp = 0;
    this.districtDataSource2.data.forEach((element) => {
      amountExp =  amountExp + Number(element.talukaexpendature);
    });
    return amountExp;
  }
  notifiedArea() {
    let amountExp = 0;
    this.districtDataSource2.data.forEach((element) => {
      amountExp =  amountExp + Number(element.gramexpendature);
    });
    return amountExp;
  }

}
