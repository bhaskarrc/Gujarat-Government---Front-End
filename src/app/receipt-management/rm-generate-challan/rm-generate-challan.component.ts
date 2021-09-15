import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';
import { ListValue } from 'src/app/model/common-grant';
import { MrGenerationChallan } from 'src/app/model/receipt-management';

@Component({
  selector: 'app-rm-generate-challan',
  templateUrl: './rm-generate-challan.component.html',
  styleUrls: ['./rm-generate-challan.component.css']
})
export class RmGenerateChallanComponent implements OnInit {
  // variables
  officeValue1 = 'Ghatak Office 1';
  departmentValue = 'Finance Department';
  headOfDepartmentValue = 'Commisioner Of Commercial Tax';
  initiatiomdate = new Date();
  generateChallanForm: FormGroup;

  // form controls
  districtCTRL: FormControl = new FormControl();
  talukaCTRL: FormControl = new FormControl();
  subTreasuryCTRL: FormControl = new FormControl();
  subOfficeCTRL: FormControl = new FormControl();
  depositeCTRL: FormControl = new FormControl();
  pdplaCTRL: FormControl = new FormControl();
  treasuryCtrl: FormControl = new FormControl();

  // lists
  district_list: ListValue[] = [
    { value: '1', viewValue: 'Ahmedabad' },
    { value: '2', viewValue: 'Surat' },
    { value: '3', viewValue: 'Rajkot' },
  ];
  // taluka list
  taluka_list_ahmedabad: ListValue[] = [
    { value: '1', viewValue: 'Daskroi' },
    { value: '2', viewValue: 'Sanand' },
    { value: '3', viewValue: 'Bavla' },
    { value: '4', viewValue: 'Dholka' },
    { value: '5', viewValue: 'Viramgam' },
  ];

  taluka_list_surat: ListValue[] = [
    { value: '1', viewValue: 'Chorasi' },
    { value: '2', viewValue: 'Bardoli' },
    { value: '3', viewValue: 'Mangrol' },
    { value: '4', viewValue: 'Mandvi' },
    { value: '5', viewValue: 'Olpad' },
  ];

  taluka_list_rajkot: ListValue[] = [
    { value: '1', viewValue: 'Jasdan' },
    { value: '2', viewValue: 'Gondal' },
    { value: '3', viewValue: 'Jetpur' },
    { value: '4', viewValue: 'Dhoraji' },
    { value: '5', viewValue: 'Upleta' },
  ];

  // sub treasury list
  subTreasury_ahmedabad: ListValue[] = [
    { value: '1', viewValue: 'Sub Treasury Office, Daskroi' },
    { value: '2', viewValue: 'Sub Treasury Office, Sanand' },
    { value: '3', viewValue: 'Sub Treasury Office, Bavla' },
    { value: '4', viewValue: 'Sub Treasury Office, Dholka' },
    { value: '5', viewValue: 'Sub Treasury Office, Viramgam' },
  ];

  subTreasury_surat: ListValue[] = [
    { value: '1', viewValue: 'Sub Treasury Office, Chorasi' },
    { value: '2', viewValue: 'Sub Treasury Office, Bardoli' },
    { value: '3', viewValue: 'Sub Treasury Office, Mangrol' },
    { value: '4', viewValue: 'Sub Treasury Office, Mandvi' },
    { value: '5', viewValue: 'Sub Treasury Office, Olpad' },
  ];

  subTreasury_rajkot: ListValue[] = [
    { value: '1', viewValue: 'Sub Treasury Office, Jasdan' },
    { value: '2', viewValue: 'Sub Treasury Office, Gondal' },
    { value: '3', viewValue: 'Sub Treasury Office, Jetpur' },
    { value: '4', viewValue: 'Sub Treasury Office, Dhoraji' },
    { value: '5', viewValue: 'Sub Treasury Office, Upleta' },
  ];
  // sub office list
  subOffice_ahmedabad: ListValue[] = [
    { value: '1', viewValue: 'Commercial Tax Office, Ahmedabad' },
  ];

  subOffice_surat: ListValue[] = [
    { value: '1', viewValue: 'Commercial Tax Office, Surat' },
  ];

  subOffice_rajkot: ListValue[] = [
    { value: '1', viewValue: 'Commercial Tax Office, Rajkot' },
  ];

  deposite_list: ListValue[] = [
    { value: '1', viewValue: 'PD/PLA' },
  ];

  pdpla_list: ListValue[] = [
    { value: '0', viewValue: 'PLA 1' },
    { value: '1', viewValue: 'PLA 2' },
    { value: '2', viewValue: 'PLA 3' },
  ];
  abadTreasury_list: ListValue[] = [
    { value: '1', viewValue: 'District Treasury Office, Ahmedabad' },
    { value: '2', viewValue: 'Divisional Treasury Office, Ahmedabad' }
  ];
  suratTreasury_list: ListValue[] = [
    { value: '1', viewValue: 'District Treasury Office, Surat' }
  ];
  rajkotTreasury_list: ListValue[] = [
    { value: '1', viewValue: 'District Treasury Office, Rajkot' }

  ];

  pdplaData: any[] = [];
  // table data
  pdplaDataColumn: string[] = [
    'srno', 'pdplaNo', 'amount'
  ];

  detailsData: MrGenerationChallan[] = [
    {
      majorHead: '8342', subMajorHead: '00', minorHead: '101', subHead: '01', description: 'Deposite'
    }
  ];

  detailsDataColumn: string[] = [
    'srno', 'majorHead', 'subMajorHead', 'minorHead', 'subHead', 'description', 'amount'
  ];
  pdplaDataSource = new MatTableDataSource(this.pdplaData);
  detailsDataSource = new MatTableDataSource(this.detailsData);

  constructor(public fb: FormBuilder) { }

  ngOnInit() {
    this.generateChallanFormData();
  }

  generateChallanFormData() {
    this.generateChallanForm = this.fb.group({
      office: [''],
      date: new Date((new Date())),
      department: [''],
      headOfdepartment: [''],
      district: [''],
      taluka: [''],
      treasury: [''],
      subTreasury: [''],
      subOffice: [''],
      depositeType: ['1'],
      pdpla: [''],
      tre: ['']
    });
  }

  // generates pdpla col
  generatePDPLAColumn() {

    const p_data = this.pdplaDataSource.data;
    const selectedArray = this.generateChallanForm.controls['pdpla'].value;

    const dataSelected = [];

    if (selectedArray && selectedArray.length !== 0
      && this.pdpla_list && this.pdpla_list.length !== 0) {

      selectedArray.forEach(el => {
        const findData: any[] = this.pdpla_list.filter(data => data.value === el);
        const findData2: any[] = p_data.filter(data => data.id === el);
        const reason = {
          id: findData[0]['value'],
          pdplaNo: findData[0]['viewValue'],
          amount: findData2[0] && findData2[0]['amount'] ? findData2[0]['amount'] : 0
        };

        dataSelected.push(reason);
      });

      if (dataSelected) {
        this.pdplaDataSource = new MatTableDataSource(dataSelected);
      }
    } else {
      this.pdplaDataSource = new MatTableDataSource([]);
    }

  }

  // calculates total amt
  totalAmount(): number {
    let amount = 0;
    if (this.pdplaDataSource && this.pdplaDataSource.data) {
      this.pdplaDataSource.data.forEach((element) => {
        amount = amount + Number(element.amount);
      });
    }
    return amount;
  }

  // on click on submit button
  workflow() {

  }

  // resets form
  resetForm() {
    this.generateChallanForm.reset();
  }

  // on click on listing
  goToListing() {

  }

}
