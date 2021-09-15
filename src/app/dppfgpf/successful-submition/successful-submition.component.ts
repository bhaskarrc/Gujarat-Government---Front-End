import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-successful-submition',
  templateUrl: './successful-submition.component.html',
  styleUrls: ['./successful-submition.component.css']
})
export class SuccessfulSubmitionComponent implements OnInit {


  constructor(private dialogRef: MatDialogRef<SuccessfulSubmitionComponent>) { }

  ngOnInit() {
  }

  goTo() {
    this.dialogRef.close();
  }

}
