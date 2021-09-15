import { Component, OnInit } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { PDPLAServiced, ListValue } from 'src/app/model/pdpla';
import { Router } from '@angular/router';
import { PdplaDirectives } from 'src/app/common/directive/pdpla';

@Component({
  selector: 'app-advice-generate-listing',
  templateUrl: './advice-generate-listing.component.html',
  styleUrls: ['./advice-generate-listing.component.css']
})
export class AdviceGenerateListingComponent implements OnInit {


  pdplaSavedAdviceData: PDPLAServiced[] = [
    {
      adviceNo: '5', pdplaAccNo: 'DDO', officeName: 'District Panchayat', cardexNo: '986',
      virtualTokenNo: '1', adviceAmount: '500.00', adviceDate: '11-Apr-2010', status: 'Pending', lyingWith: 'Mr. PP Patel'
    },
    {
      adviceNo: '10', pdplaAccNo: 'DDO', officeName: 'District Panchayat', cardexNo: '986',
      virtualTokenNo: '2', adviceAmount: '500.00', adviceDate: '11-Apr-2010', status: 'Pending', lyingWith: 'Mr. PP Patel'
    }
  ];

  column: string[] = [
    'select', 'srno', 'adviceNo', 'pdplaAccNo', 'officeName', 'cardexNo', 'virtualTokenNo',
    'adviceAmount', 'adviceDate', 'status', 'lyingWith', 'action'
  ];
  // Date
  todayDate = new Date();
  // Variable
  isSearch: boolean;
  selection = new SelectionModel<any>(true, []);
  // FormGroup
  adviceGenerateListingForm: FormGroup;
  dataSource = new MatTableDataSource<any>(this.pdplaSavedAdviceData);
  status_list: ListValue[] = [
    { value: '1', viewValue: 'Pending' },
    { value: '2', viewValue: 'Approved' },
  ];
  statusCtrl: FormControl = new FormControl();
  constructor(private fb: FormBuilder, private router: Router, public dialog: MatDialog) { }
  // Directive of pdpla
  directiveObject = new PdplaDirectives(this.router, this.dialog);
  ngOnInit() {
    this.formData();
  }

  formData() {
    this.adviceGenerateListingForm = this.fb.group({
      // formfields
      adviceNumber: [''],
      adviceDate: [''],
      pdplaAccNo: [''],
      cardexNo: [''],
      totalAmount: [''],
      status: [''],
      lyingWith: ['']
    });
  }

  search() { }

  // resets form
  resetForm() {
    this.adviceGenerateListingForm.reset();
  }

}
