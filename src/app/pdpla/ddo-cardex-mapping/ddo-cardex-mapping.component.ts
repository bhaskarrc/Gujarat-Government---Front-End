import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { pdplaMessage } from 'src/app/common/error-message/common-message.constants';
import { SelectionModel } from '@angular/cdk/collections';
import { CreateasplitList } from 'src/app/model/pdpla';
import { PdplaDirectives } from 'src/app/common/directive/pdpla';


@Component({
  selector: 'app-ddo-cardex-mapping',
  templateUrl: './ddo-cardex-mapping.component.html',
  styleUrls: ['./ddo-cardex-mapping.component.css']
})
export class DdoCardexMappingComponent implements OnInit {
  // Date
  todayDate = Date.now();
  initiatiomdate = new Date();
  // Variable
  selectedIndex: number;
  selection = new SelectionModel<any>(true, []);
  errorMessages = pdplaMessage;
  // Form Group
  pdplaform: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, public dialog: MatDialog) {

  }

  // Directive of pdpla
  directiveObject = new PdplaDirectives(this.router, this.dialog);

  Element_Data: CreateasplitList[] = [
    {
      ddoNo: '999',
      cardexNo: '4',
      ofc: 'Panchayat Department',
      ddoCode: 'DDO_999',
      location: 'Sub Tresury Office, Ahmedabad'
    },

    {
      ddoNo: '999',
      cardexNo: 'GSRTC',
      ofc: 'Not Avilable',
      ddoCode: 'DDO_999',
      location: 'District Tresury Office, Ahmedabad'
    },

    {
      ddoNo: '8',
      cardexNo: '048 ALFRED H.S BHUU',
      ofc: 'Principal Alfred Highscholl Bhuu',
      ddoCode: 'DDO_8',
      location: 'Tresury Office, Ahmedabad'
    },
  ];
  dataSourcesplitProcess = new MatTableDataSource<CreateasplitList>(this.Element_Data);
  displayedColumnssplitisting: any[] = [

    'srNo',
    'ddoNo',
    'cardexNo',
    'ofc',
    'ddoCode',
    'location',
    'action'
  ];


  ngOnInit() {
    this.pdplaform = this.fb.group({
      // formfields
      ddoNo: [''],
      cardexNo: [''],
      depaName: [''],

    });
  }
}
