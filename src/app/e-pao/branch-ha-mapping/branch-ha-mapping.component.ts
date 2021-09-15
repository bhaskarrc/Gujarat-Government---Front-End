import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { EPOAMessage } from 'src/app/common/error-message/common-message.constants';
import { ListValue, BranchHamApping, BranchMapping } from 'src/app/model/epaoModel';
import { EPaoDirectives } from 'src/app/common/directive/epao';

@Component({
  selector: 'app-branch-ha-mapping',
  templateUrl: './branch-ha-mapping.component.html',
  styleUrls: ['./branch-ha-mapping.component.css']
})
export class BranchHaMappingComponent implements OnInit {
  ELEMENT_DATA: BranchMapping[] = [
    {
      branchList: 'Receipt Branch 1',
    },
    {
      branchList: 'Receipt Branch 2',
    },
    {
      branchList: 'Receipt Branch 3',
    }
  ];
  // Date
  todayDate = Date.now();
  maxDate = new Date();
  // Form Group
  branchHAMappingForm: FormGroup;
  // Form Control
  haUserCtrl: FormControl = new FormControl();
  // Listing details
  haUser_list: ListValue[] = [{
    value: '1', viewValue: ' K M Shah',
  },
  {
    value: '2', viewValue: 'P H Mehta',
  }
    ,
  {
    value: '2', viewValue: 'Z B Patel',
  }
  ];
  // Table Source
  branchMappingdataSource = new MatTableDataSource<BranchMapping>(this.ELEMENT_DATA);
  branchMappingdisplayedColumns: string[] = ['srNo', 'branchList', 'newaction'];

  selection = new SelectionModel<any>(true, []);
  constructor(private router: Router, public dialog: MatDialog, private fb: FormBuilder) { }
  directiveObject = new EPaoDirectives(this.router, this.dialog);

  // error message
  public errorMessages;
  ngOnInit() {
    this.errorMessages = EPOAMessage;
    this.branchHAMappingData();
  }
  branchHAMappingData() {
    this.branchHAMappingForm = this.fb.group({
      haUser: ['']
    }
    );
  }


  // Branch Ha Dialog

  openView() {
    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(BranchHaDialogComponent, {
      width: '1200px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
const ELEMENT_DATA1: BranchHamApping[] = [
  {
    branchName: 'Receipt Branch 1',
    branch: 'K M Shah'
  },

];

// Branch View Diloag

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'branch-ha-dialog',
  templateUrl: 'branch-ha-dialog.html',
})


export class BranchHaDialogComponent {
  constructor(
    private router: Router,
    public dialogRef: MatDialogRef<BranchHaDialogComponent>
  ) { }
  newdataSource = new MatTableDataSource<any>(ELEMENT_DATA1);
  newdisplayedColumns: string[] = ['srNo', 'branchName', 'branch'];
  vitocancel(): void {
    this.dialogRef.close();
  }


}

