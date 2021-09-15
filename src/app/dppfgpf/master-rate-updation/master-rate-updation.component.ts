import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import { DppfgpfMessage } from 'src/app/common/error-message/common-message.constants';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-master-rate-updation',
  templateUrl: './master-rate-updation.component.html',
  styleUrls: ['./master-rate-updation.component.css']
})
export class MasterRateUpdationComponent implements OnInit {
  // Variable
  errorMessage;
  public toggleButton = true;
  // Date
  todayDate = Date.now();
  minDate = new Date();
  // Form Group
  masterRateUpdationForm: FormGroup;
  // Form COntrol
  typeOfConfigurationForCtrl: FormControl = new FormControl();
  // Listing
  classTypeOfConfigurationFor: ListValue[] = [
    { value: '1', viewValue: 'GPF' },
    { value: '2', viewValue: 'TI' },
    { value: '3', viewValue: 'DA' },
    { value: '4', viewValue: 'ADP' },


  ];


  constructor(private fb: FormBuilder, public dialog: MatDialog) { }

  ngOnInit() {
    this.errorMessage = DppfgpfMessage;

    this.masterRateUpdationForm = this.fb.group({

      configFor: '1',
      effectiveDate: new Date(),
      oldEffectiveDate: new Date(),
      newRateAmount: ['78', Validators.max(100)],
      oldRateAmount: '90',

    });
  }


}

