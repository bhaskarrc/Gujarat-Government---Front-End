import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { ReplaySubject, Subject } from 'rxjs';


export interface HeaderElement {
  label?: string | '';
  value?: string | '';
  quarterName?: string;
  quater?: any[] | '';

}


@Component({
  selector: 'app-outcome-annual-targets',
  templateUrl: './outcome-annual-targets.component.html',
  styleUrls: ['./outcome-annual-targets.component.css']
})
export class OutcomeAnnualTargetsComponent implements OnInit {

  // View Tab

  headerJson: HeaderElement[] = [
    {label: 'Type of Scheme', value: 'Normal'},
    {label: 'Name of Scheme', value: 'AGR – 6 National Mission on Oilseed & Oil palm (NMOOP)'},
    {label: 'Physical Target', value: '80393'},
    {label: 'Unit', value: 'No.of farmers training'},
    {
      quarterName: 'Quarter 1',
      quater: [
        {label: 'Target', value: '12500'},
        {label: 'Achievement ', value: '10523'},
      ]
    },
    {
      quarterName: 'Quarter 2',
      quater: [
        {label: 'Target', value: '57500'},
        {label: 'Achievement ', value: '55634'},
      ]
    },
    {
      quarterName: 'Quarter 3',
      quater: [
        {label: 'Target', value: '5193'},
        {label: 'Achievement ', value: '5680'},
        {label: 'Cumulative Achievement', value: '71837 (Q1+Q2+Q3)'},
        {label: 'Quarterly Achievement ', value: '84.18183'},
      ]
    }
  ];


  errorMessages = {
    Schme_name: 'Please select Scheme Name',
    TypeofScheme: 'Please select any Scheme type',
    Unit_NAME: 'Please Enter target with unit',
    TRGET_NAME: 'Please Enter target',
    physical_Target: 'Please Enter Physical Traget',
    Achive_error: 'Please Enter Achivement',
    CUMUAchive_error: 'Please Enter Cumulative Achievement',
    QuartlyAchive_error: 'Please Enter Cumulative Achievement',
    Anual_taget_achive: 'Please Enter annual targets Achievement',
};




  createOutcomeForm: FormGroup;





  constructor(
    private fb: FormBuilder
  ) { }

  private _onDestroy = new
  Subject<void>();
subObjectId: Array<any> = [];
selSubObjectId: string;
date: any = new Date();
expendCharges: boolean;

  ngOnInit() {
    this.createForm();

  }

  createForm() {
    this.createOutcomeForm = this.fb.group({
      Nameofschemctrl: ['', Validators.required],
      typeschemCtrl: ['', Validators.required],
      Unirctrl: ['', Validators.required],
      targetctrl: ['', Validators.required],
      physicalctrl:['', Validators.required],
      achivectrl: ['', Validators.required],
      cachivectrl: ['', Validators.required],
      quatrlyachivectrl: ['', Validators.required],
      anutargetachivectrl: ['', Validators.required],
    });
  }

  filterObjValue(arrValue, searchValue, filteredValue) {
    if (!arrValue) {
      return;
    }
    // get the search keyword
    let search = searchValue;
    if (!search) {
      filteredValue.next(arrValue.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the values
   filteredValue.next(
      arrValue.filter(item => item.viewValue.toLowerCase().indexOf(search) > -1)
    );
  }

  saveLockUnlock() {
    console.log(this.createOutcomeForm.value);
  }
    
  selectedIndex() {
  
  }

}


