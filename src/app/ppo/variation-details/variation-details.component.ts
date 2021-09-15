import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-variation-details',
  templateUrl: './variation-details.component.html',
  styleUrls: ['./variation-details.component.css']
})
export class VariationDetailsComponent implements OnInit {

  toodayDate = Date.now();

  variationDetailsForm: FormGroup;

  constructor(private fb: FormBuilder, public dialog: MatDialog) { }

  ngOnInit() {
    this.variationDetailsFormData();
  }

  variationDetailsFormData() {
    this.variationDetailsForm = this.fb.group({
      bb56: [''],
      ba56: [''],
      basic_pension: [''],
      da_pension: [''],
      ir: [''],
      ma: [''],
      ti: [''],
      arrearTi: [''],
      netAmount: [''],
      ga: [''],
      pensionCut: [''],
      cvpMonthly: [''],
      personalPension: [''],
      arrear: [''],
      otherBenefit: [''],
      otherCut: [''],
      moCom: [''],
      deduction: [''],
    });
  }

}
