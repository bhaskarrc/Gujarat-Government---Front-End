import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatTableDataSource, MatPaginator, MatDialog } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-utc-certificate',
  templateUrl: './utc-certificate.component.html',
  styleUrls: ['./utc-certificate.component.css']
})
export class UtcCertificateComponent implements OnInit {

  constructor(private dialog: MatDialog, private router: Router) { }

  ngOnInit() { }

  goToScreen() {
    this.router.navigate(['contract-management/utc']);
  }
}
