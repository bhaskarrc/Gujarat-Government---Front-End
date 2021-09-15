import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';
import { Grievance } from '../../model/ppo';
@Component({
  selector: 'app-view-reminder',
  templateUrl: './view-reminder.component.html',
  styleUrls: ['./view-reminder.component.css']
})
export class ViewReminderComponent implements OnInit {

  grievenceData: Grievance[] = [
    { reminderNo: '', remarks: '' }
  ];

  grievenceColumn: string[] = [
    'srno', 'reminderNo', 'remarks'
  ];
  grievenceDataSource = new MatTableDataSource(this.grievenceData);
  statusCtrl: FormControl = new FormControl();

  constructor() { }

  ngOnInit() {
  }

}
