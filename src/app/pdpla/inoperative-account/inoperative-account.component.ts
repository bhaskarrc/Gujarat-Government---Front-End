
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ListValue } from 'src/app/model/pdpla';

@Component({
  selector: 'app-inoperative-account',
  templateUrl: './inoperative-account.component.html',
  styleUrls: ['./inoperative-account.component.css']
})
export class InoperativeAccountComponent implements OnInit {

  inoprativeForm: FormGroup;

  location_list: ListValue[] = [
    { value: '1', viewValue: 'All' },
    { value: '2', viewValue: 'District Treasury Office, Bhuj' }
  ];
  locationCtrl: FormControl = new FormControl();

  constructor(private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.inoprativeForm = this.fb.group({
      location: [''],
      asOnDate: new Date('1/6/2020')
    });
  }

  // routing
  gotoReport() {
    this.router.navigate(['./pdpla/create-account-closing-request-to']);
  }


}
