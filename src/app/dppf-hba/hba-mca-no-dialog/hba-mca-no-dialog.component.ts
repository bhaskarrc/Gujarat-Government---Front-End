import { CommonListing } from 'src/app/model/common-listing';
import { Component, OnInit, Inject, ElementRef } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { MatTableDataSource, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogData } from 'src/app/model/standing-charge';
import { Router } from '@angular/router';
import { HbaMcaNoDialog } from 'src/app/model/dppf-hba';

@Component({
  selector: 'app-hba-mca-no-dialog',
  templateUrl: './hba-mca-no-dialog.component.html',
  styleUrls: ['./hba-mca-no-dialog.component.css']
})
export class HbaMcaNoDialogComponent implements OnInit {

  Element_Data: HbaMcaNoDialog[] = [
    {
      hbaMcaAccNo: '1',
      fName: 'Ajay',
      mName: 'Arun',
      lName: 'Amin',
      sName: 'A A Amin',
      gpfNo: '1221',
      majorHead: '8868',
      hbaMca: 'HBA',
      district: 'Ahmedabad'

    },
  ];
  hbaMca_list: CommonListing[] = [
    { value: '1', viewValue: 'HBA' },
    { value: '2', viewValue: 'MCA' },
  ];
  districtList: CommonListing[] = [
    { value: '1', viewValue: 'Ahmedabad' },
    { value: '2', viewValue: 'Amreli' },
    { value: '3', viewValue: 'Anand' },
    { value: '4', viewValue: 'Aravalli-Modasa' },
    { value: '5', viewValue: 'Banasakantha – Palanpur' },
    { value: '6', viewValue: 'Bhavnagar' },
    { value: '7', viewValue: 'Bharuch' },
    { value: '8', viewValue: 'Botad' },
    { value: '9', viewValue: 'Chhota Udepur' },
    { value: '10', viewValue: 'Dahod' },
    { value: '11', viewValue: 'Dang – Ahwa' },
    { value: '12', viewValue: 'Devbhoomi Dwarka-Jamkhambhaliya' },
    { value: '13', viewValue: 'Gandhinagar' },
    { value: '14', viewValue: 'Gir somnath (Veraval)' },
    { value: '15', viewValue: 'Jamnagar' },
    { value: '16', viewValue: 'Junagadh' },
    { value: '17', viewValue: 'Kheda-Nadiad' },
    { value: '18', viewValue: 'Kutch (Bhuj)' },
    { value: '19', viewValue: 'Mahesana' },
    { value: '20', viewValue: 'Mahisagar-Lunawada' },
    { value: '21', viewValue: 'Morbi' },
    { value: '22', viewValue: 'Narmada-Rajpipala' },
    { value: '23', viewValue: 'Navsari' },
    { value: '24', viewValue: 'Panchmahal (Godhara)' },
    { value: '25', viewValue: 'Patan' },
    { value: '26', viewValue: 'Porbandar' },
    { value: '27', viewValue: 'Rajkot' },
    { value: '28', viewValue: 'Sabarkantha – Himatnagar' },
    { value: '29', viewValue: 'Surat' },
    { value: '30', viewValue: 'Surendranagar' },
    { value: '31', viewValue: 'Tapi – Vyara' },
    { value: '32', viewValue: 'Vadodara' },
    { value: '33', viewValue: 'Valsad' },
  ];

  hbaMcaNoForm: FormGroup;
  districtCtrl: FormControl = new FormControl();
  inwardTypeCtrl: FormControl = new FormControl();
  displayedColumns: any[] = [
    'srno', 'hbaMcaAccNo', 'fName', 'mName', 'lName', 'sName', 'gpfNo', 'majorHead', 'hbaMca', 'district'
  ];

  dataSource = new MatTableDataSource<HbaMcaNoDialog>(this.Element_Data);

  constructor(public dialogRef: MatDialogRef<HbaMcaNoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private fb: FormBuilder) { }

  // tslint:disable-next-line: use-life-cycle-interface
  ngOnInit() {
    this.hbaMcaSubmit();
  }

  hbaMcaSubmit() {
    this.hbaMcaNoForm = this.fb.group({
      hbaMcaAccNo: [''],
      fName: [''],
      mName: [''],
      lName: [''],
      sName: [''],
      gpfNo: [''],
      majorHead: [''],
      hbaMca: [''],
      district: ['']
    });
  }

  // On Close
  onNoClick(): void {
    this.dialogRef.close('no');
  }
}
