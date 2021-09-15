import { Component, OnInit, ElementRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-document-repository-entry',
  templateUrl: './document-repository-entry.component.html',
  styleUrls: ['./document-repository-entry.component.css']
})
export class DocumentRepositoryEntryComponent implements OnInit {
  brwoseData: any[] = [{
    name: undefined,
    file: undefined,
  }];
  fileBrowseIndex: number;
  date = Date.now();
  filteredAttachmentTypeCode: any[] = [
    { value: '1', viewValue: 'Other' },
    { value: '2', viewValue: 'Sanction Order ' },
    { value: '3', viewValue: 'Supporting Document' },
  ];
  attachmentTypeCodeCtrl: FormControl = new FormControl();
  dataSourceBrowse = new MatTableDataSource(this.brwoseData);
  displayedBrowseColumns: string[] = ['position', 'attachmentType', 'grNo', 'date', 'subject', 'description',
    'fileName', 'browse', 'uploadedFileName', 'uploadedBy', 'action'];

  constructor(private toastr: ToastrService, private el: ElementRef) { }

  ngOnInit() {
  }

  // on file selection
  onFileSelection(fileSelected) {
    if (fileSelected.target && fileSelected.target.files) {
      this.dataSourceBrowse.data[this.fileBrowseIndex].file = fileSelected.target.files[0];
    }
  }

  // open file selector
  openFileSelector(index) {
    this.el.nativeElement.querySelector('#fileBrowse').click();
    this.fileBrowseIndex = index;
  }


  // add row in attachment table
  addBrowse() {
    if (this.dataSourceBrowse) {
      const data = this.dataSourceBrowse.data[this.dataSourceBrowse.data.length - 1];
      if (data && data.name && data.file) {
        const p_data = this.dataSourceBrowse.data;
        p_data.push({
          name: undefined,
          file: undefined,
        });
        this.dataSourceBrowse.data = p_data;
      } else {
        this.toastr.error('Please fill the detail.');
      }
    }
  }

  // delete row from attachment table
  deleteBrowse(index) {
    this.dataSourceBrowse.data.splice(index, 1);
    this.dataSourceBrowse = new MatTableDataSource(this.dataSourceBrowse.data);
  }

  // on click on close button
  closeForm() { }

}
