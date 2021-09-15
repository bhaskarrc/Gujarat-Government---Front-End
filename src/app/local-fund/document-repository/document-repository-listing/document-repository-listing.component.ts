import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { CommonListing } from 'src/app/model/common-listing';
import { MatTableDataSource } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { DocumentRepository } from 'src/app/model/local-fund';


@Component({
  selector: 'app-document-repository-listing',
  templateUrl: './document-repository-listing.component.html',
  styleUrls: ['./document-repository-listing.component.css']
})
export class DocumentRepositoryListingComponent implements OnInit {
  documentRepositoryListing: FormGroup;
  fileUrl;
  finYearCtrl: FormControl = new FormControl();
  finYear_list: CommonListing[] = [
    { value: '1', viewValue: '2011-2012' },
    { value: '2', viewValue: '2012-2013' },
    { value: '3', viewValue: '2013-2014' },
    { value: '4', viewValue: '2014-2015' },
    { value: '5', viewValue: '2015-2016' },
    { value: '6', viewValue: '2016-2017' },
    { value: '7', viewValue: '2017-2018' },
    { value: '8', viewValue: '2018-2019' },
    { value: '9', viewValue: '2019-2020' },
    { value: '10', viewValue: '2020-2021' },
  ];
  Element_Data: DocumentRepository[] = [
    {
      date: '16-Apr-2018', file: 'Document', grNo: 'EMD/10/2018/18/DMO',
      subject: 'Acceptance of Bank Guarantee as Security Deposit and Earnest Money Deposit'
    },
    {
      date: '21-Aug-2017', file: 'Document', grNo: 'CSF/102016/256/DMO',
      subject: 'Revised Consolidated Sinking fund Scheme'
    }
  ];
  dataSource = new MatTableDataSource<DocumentRepository>(this.Element_Data);
  columns: string[] = ['position', 'grNo', 'date', 'subject', 'file'];
  constructor(private fb: FormBuilder, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.documentRepositoryListing = this.fb.group({
      date: [''],
      finYear: [''],
      grNo: [''],
      subject: ['']
    });
  }

  // on click on document in file column in table
  downloadFile() {
    const data = 'This is a dummy file.';
    const blob = new Blob([data], { type: 'application/octet-stream' });
    this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));
  }

}
