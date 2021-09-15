import { CommonListing } from 'src/app/model/common-listing';
import { DemandForNdcStatus } from './../../model/dppf-hba';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog, MatTableDataSource } from '@angular/material';


@Component({
  selector: 'app-demand-for-ndc',
  templateUrl: './demand-for-ndc.component.html',
  styleUrls: ['./demand-for-ndc.component.css']
})
export class DemandForNdcComponent implements OnInit {
  // Table Source
  Element_Data: DemandForNdcStatus[] = [
    {
      statusOf: 'Loan',
      asPerDepartment: '0',
      asPerDppf: '137000',
      missingPlusMinus: '0',
      remarks: '0',
      difference: '-137000'
    },
    {
      statusOf: 'Interest',
      asPerDepartment: '0',
      asPerDppf: '0',
      missingPlusMinus: '0',
      remarks: '0',
      difference: '0'
    },
    {
      statusOf: 'Total',
      asPerDepartment: '0',
      asPerDppf: '137000',
      missingPlusMinus: '',
      remarks: '0',
      difference: '-137000'
    },
    {
      statusOf: 'As Per + and - Grant ',
      asPerDepartment: '0',
      asPerDppf: '0',
      missingPlusMinus: '0',
      remarks: '0',
      difference: '0'
    },
    {
      statusOf: 'Total',
      asPerDepartment: '0',
      asPerDppf: '137000',
      missingPlusMinus: '0',
      remarks: '0',
      difference: '-137000'
    },
    {
      statusOf: 'Year: 2010-2011',
      asPerDepartment: '0',
      asPerDppf: '0',
      missingPlusMinus: '0',
      remarks: '0',
      difference: '0'
    },
    {
      statusOf: 'Year: 2011-2012',
      asPerDepartment: '0',
      asPerDppf: '0',
      missingPlusMinus: '0',
      remarks: '0',
      difference: '0'
    },
    {
      statusOf: 'Year: 2012-2013',
      asPerDepartment: '0',
      asPerDppf: '0',
      missingPlusMinus: '0',
      remarks: '0',
      difference: '0'
    },
    {
      statusOf: 'Year: 2014-2015',
      asPerDepartment: '0',
      asPerDppf: '0',
      missingPlusMinus: '0',
      remarks: '0',
      difference: '0'
    },
    {
      statusOf: 'Year: 2015-2016',
      asPerDepartment: '0',
      asPerDppf: '0',
      missingPlusMinus: '0',
      remarks: '0',
      difference: '0'
    },
    {
      statusOf: 'Year: 2016-2017',
      asPerDepartment: '0',
      asPerDppf: '0',
      missingPlusMinus: '0',
      remarks: '0',
      difference: '0'
    },
    {
      statusOf: 'Year: 2017-2018',
      asPerDepartment: '0',
      asPerDppf: '0',
      missingPlusMinus: '0',
      remarks: '0',
      difference: '0'
    },
    {
      statusOf: 'Year: 2018-2019',
      asPerDepartment: '0',
      asPerDppf: '0',
      missingPlusMinus: '0',
      remarks: '0',
      difference: '0'
    },
    {
      statusOf: 'Year: 2019-2020',
      asPerDepartment: '0',
      asPerDppf: '0',
      missingPlusMinus: '0',
      remarks: '0',
      difference: '0'
    },
    {
      statusOf: 'Total Available:',
      asPerDepartment: '0',
      asPerDppf: '180170',
      missingPlusMinus: 'NaN',
      remarks: '0',
      difference: 'NaN'
    },

  ];

  dataSource = new MatTableDataSource<DemandForNdcStatus>(this.Element_Data);
  displayedColumns: any[] = ['statusOf', 'asPerDepartment', 'asPerDppf', 'missingPlusMinus', 'remarks', 'difference'];
  // Form Group
  demandNDCForm: FormGroup;
  // Date
  todayDate = Date.now();
  maxDate = new Date();
  // Lists of headr json
  headerJso: CommonListing[] = [
    { viewValue: 'HBA/MCA Account No: ', value: '17109296' },
    { viewValue: 'Name: ', value: 'H V UPADHYAY' },
    { viewValue: 'Office Name: ', value: 'Under Secretary,URBAN DEVLOPMENT $$ URBAN HOUSING DEPARTMENT, GANDHINAGAR, Gandhinagar' },
    { viewValue: 'File No: ', value: ' ' },
    { viewValue: 'Loan Amount: ', value: '475000.00' },
    { viewValue: 'Interest Amount: ', value: '162578.00' },
    { viewValue: 'Office Letter No: ', value: '432' },
    { viewValue: 'Total Amount: ', value: '637578.00' },
  ];
  constructor(private router: Router, public dialog: MatDialog, private fb: FormBuilder) { }


  ngOnInit() {
    this.demandNDCForm = this.fb.group({
      loanAmount: [''],
      total: [''],
    });
  }


}
