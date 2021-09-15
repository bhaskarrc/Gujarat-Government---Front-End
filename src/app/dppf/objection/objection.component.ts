import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-objection',
  templateUrl: './objection.component.html',
  styleUrls: ['./objection.component.css']
})
export class ObjectionComponent implements OnInit {
  // Form Group
  objectionForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.objectionFormData();
  }

  objectionFormData() {
    this.objectionForm = this.fb.group({
      pageNo: [''],
      date1: [''],
      wife1: [''],
      date2: [''],
      date3: [''],
      date4: [''],
      wife2: [''],
      rs: [''],
      gradePay: [''],
      objectionNo: [''],
      address: [''],
      remarks: [''],
    });
  }

}
