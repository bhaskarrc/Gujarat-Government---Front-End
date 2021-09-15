import { Component, OnInit, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-cardex-mapping-new',
  templateUrl: './cardex-mapping-new.component.html',
  styleUrls: ['./cardex-mapping-new.component.css']
})
export class CardexMappingNewComponent implements OnInit {
  // Form Group
  cardexMappingForm: FormGroup;
  // Variable
  selection = new SelectionModel<any>(false, []);

  fileBrowseIndex: number;
  displayedColumns: string[] = [
    'radioButton',
    'ddoName',
    'ddono',
    'cardexNo',
    'action',
  ];
  elementData = [
    {
      ddoName: 'Battalion Commandant,BORDER WING HOME GUARD BATALLIAN - 2,BHUJ, Bhuj,Kachcha',
      ddono: '497',
      cardexNo: '2'
    },
    {
      ddoName: 'Accounts Officer,DISTRICT INDUSTRIES OFFICE, BHUJ, Bhuj,Kachcha',
      ddono: '431',
      cardexNo: '3'
    },
    {
      ddoName: 'District Treasury Officer,DISTRICT TREASURY OFFICE,BHUJ, Bhuj,Kachcha',
      ddono: '416',
      cardexNo: '4'
    },
    {
      ddoName: 'Employment Officer,DISTRICT EMPLOYMENT OFFICE, BHUJ, Bhuj,Kachcha',
      ddono: '434',
      cardexNo: '6'
    },
    {
      ddoName: 'Principal,R R LALAN COLLEGE,BHUJ, Bhuj,Kachcha',
      ddono: '473',
      cardexNo: '7'
    },
    {
      ddoName: 'Principal,Alferd High School',
      ddono: '466',
      cardexNo: '8'
    },
  ];
  dataSource = new MatTableDataSource(this.elementData);

  imageUploadDisplayedColumns: string[] = [
    'ddoName',
    'ddono',
    'cardexNo',
    'fileDescription',
    'browse',
    'fileName'
  ];
  elementData1 = [];
  imageUploadDataSource = new MatTableDataSource(this.elementData1);
  constructor(private _fb: FormBuilder, private el: ElementRef) { }

  ngOnInit() {
    this.cardexMappingFormData();
  }

  cardexMappingFormData() {
    this.cardexMappingForm = this._fb.group({
      ddoName: [''],
      ddoNo: [''],
      cardexNo: [''],
    });
  }

  resetForm() {
    this.cardexMappingForm.reset();
  }

  onClickingRadioButton(element) {
    const data = this.imageUploadDataSource.data;
    data.push({
      ddoName: element.ddoName,
      ddono: element.ddono,
      cardexNo: element.cardexNo
    });
    this.imageUploadDataSource.data = data;
  }

  isSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }



  // toggles selection on basis of isAllSelected
  toggle() {
    this.isSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach(row => this.selection.select(row));
  }

  // on file selection
  onFileSelection(fileSelected) {

    if (fileSelected.target && fileSelected.target.files) {
      this.imageUploadDataSource.data[this.fileBrowseIndex].fileName =
        fileSelected.target.files[0].name;
    }
  }

  // open file selector
  openFileSelector(item, index) {

    this.el.nativeElement.querySelector('#fileBrowse').click();
    this.fileBrowseIndex = index;
  }

  onView(index) {

  }

  onDelete(index) {
    this.dataSource.data.splice(index, 1);
    this.dataSource = new MatTableDataSource(this.dataSource.data);
  }

}
