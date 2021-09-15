import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vito-report',
  templateUrl: './vito-report.component.html',
  styleUrls: ['./vito-report.component.css']
})
export class VitoReportComponent implements OnInit {
  // On Print 
  printdata() {
    window.print();

  }
  // Navigate
  goToDashboard() {
    this.router.navigate(['/treasury-bill/inward-bill']);
  }
  constructor(private router: Router) { }

  ngOnInit() {
  }

}
