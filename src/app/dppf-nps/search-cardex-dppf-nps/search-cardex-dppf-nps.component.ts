import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';
import { MatDialogRef } from '@angular/material/dialog';
import { BehaviorSubject } from 'rxjs';


const ELEMENT_DATA: any[] = [
  {
    ddoNo: 746,
    CardexNo: 6248,
    ddoName: 'District Treasury Office, Gandhinagar',
  }
];

@Component({
  selector: 'app-search-cardex-dppf-nps',
  templateUrl: './search-cardex-dppf-nps.component.html',
  styleUrls: ['./search-cardex-dppf-nps.component.css']
})
export class SearchCardexDppfNpsComponent implements OnInit {

  displayedColumnsArray = new BehaviorSubject(['noData']);
  searchCardexNo: FormGroup;

  public listshow: Boolean = false;
  public autopopulated: Boolean = false;
  array: any = [];
  typeOfCardexCTRL: FormControl = new FormControl();
  districtCTRL: FormControl = new FormControl();
  treasutyCTRL: FormControl = new FormControl();
  disabledEmpSearch = new BehaviorSubject<boolean>(true);
  dataSourceEmploSearch = new MatTableDataSource(ELEMENT_DATA);

  displayedColumnsEmpSearch = [
    'ddoNo',
    'cardexNo',
    'ddoName',
  ];

  constructor(public dialogRef: MatDialogRef<SearchCardexDppfNpsComponent>, private fb: FormBuilder) { }

  ngOnInit() {
    this.searchCardexNo = this.fb.group({
      ddoNo: [''],
      cardexNo: [''],
      ddoName: [''],
    });

    this.searchCardexNo.valueChanges.subscribe(val => {
      this.disabledEmpSearch.next(true);
      for (const key in this.searchCardexNo.value) {
        if (this.searchCardexNo.value[key] !== '') {
          this.disabledEmpSearch.next(false);
        }
      }
    });
  }


  searchCardex() {
    this.displayedColumnsArray.next(this.displayedColumnsEmpSearch);
    if (this.searchCardexNo.controls.cardexNo.value !== '') {
      this.dataSourceEmploSearch.data[0]['cardexNo'] = this.searchCardexNo.controls.cardexNo.value;
    } else {
      this.dataSourceEmploSearch.data[0]['cardexNo'] = 752;
    }
  }

  onClickCardexNo() {
    this.dialogRef.close(this.dataSourceEmploSearch.data);
  }

}
