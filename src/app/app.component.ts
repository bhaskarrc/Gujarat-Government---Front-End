import { Component } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { DatePipe } from '@angular/common';
import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';

export const MY_FORMATS = {
  parse: {
    dateInput: 'DD-MMM-YYYY',
  },
  display: {
    dateInput: 'DD-MMM-YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'DD-MMM-YYYY',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },

    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
})
export class AppComponent {
  title = 'app';
  // loader = false;

  // constructor(private router: Router) {
  //   this.router.events.pipe(
  //     filter(event => event instanceof NavigationStart || event instanceof NavigationEnd)
  //   ).subscribe((event) => {
  //     console.log(event);
  //     if (event instanceof NavigationStart) {
  //       this.loader = true;
  //     }
  //     if (event instanceof NavigationEnd) {
  //       setTimeout(() => {
  //         this.loader = false;
  //       }, 3000);
  //     }
  //   });
  // }
}
