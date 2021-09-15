import { CommonListing } from 'src/app/model/common-listing';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material';
@Component({
  selector: 'app-printing-press-master-view',
  templateUrl: './printing-press-master-view.component.html',
  styleUrls: ['./printing-press-master-view.component.css']
})
export class PrintingPressMasterViewComponent implements OnInit {

  status_List: CommonListing[] = [
    { value: '1', viewValue: 'Active' },
    { value: '2', viewValue: 'Inactive' },
  ];

  statusCtrl: FormControl = new FormControl();

  printPressForm: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.printPressForm = this.fb.group({
      printPress: [{ value: 'Press', disabled: true }],
      status: [{ value: '1', disabled: true }],
    });
  }

  gotoListing() {
    this.router.navigate(['./stamp-processing/printing-press-master-list']);
  }

}
