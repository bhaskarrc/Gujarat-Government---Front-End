import { Component, OnInit } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { PDPLAService } from 'src/app/model/pdpla';
import { PdplaDirectives } from 'src/app/common/directive/pdpla';
import { Router } from '@angular/router';

@Component({
  selector: 'app-saved-advice',
  templateUrl: './saved-advice.component.html',
  styleUrls: ['./saved-advice.component.css']
})
export class SavedAdviceComponent implements OnInit {
  // Table Source
  pdplaSavedAdviceData: PDPLAService[] = [
    {
      adviceNo: '5', pdplaAccNo: 'DDO', officeName: 'District Panchayat', cardexNo: '986',
      virtualTokenNo: '1', adviceAmount: '500.00', adviceDate: '11-Apr-2010', tokenDate: '10-Apr-2009'
    },
    {
      adviceNo: '10', pdplaAccNo: 'DDO', officeName: 'District Panchayat', cardexNo: '986',
      virtualTokenNo: '2', adviceAmount: '500.00', adviceDate: '11-Apr-2010', tokenDate: '10-Apr-2009'
    }

  ];


  column: string[] = [
    'select', 'srno', 'adviceNo', 'pdplaAccNo', 'officeName', 'cardexNo', 'virtualTokenNo', 'tokenDate', 'adviceAmount', 'adviceDate'
  ];

  todayDate = new Date();
  isSearch: boolean;
  selection = new SelectionModel<any>(true, []);
  pdplaSavedAdviceForm: FormGroup;
  dataSource = new MatTableDataSource<any>(this.pdplaSavedAdviceData);

  constructor(private fb: FormBuilder, private router: Router, private dialog: MatDialog) { }
  directiveObject = new PdplaDirectives(this.router, this.dialog);
  ngOnInit() {
    this.pdplaSavedAdviceFormData();
  }

  pdplaSavedAdviceFormData() {
    this.pdplaSavedAdviceForm = this.fb.group({
      // Formfields
      adviceNumber: [''],
      adviceDate: [''],
      pdplaAccNo: [''],
      cardexNo: [''],
      totalAmount: [''],
      virtualTokenNo: [''],
      tokenDate: ['']
    });
  }


  search() { }

  // resets form
  resetForm() {
    this.pdplaSavedAdviceForm.reset();
  }

}
