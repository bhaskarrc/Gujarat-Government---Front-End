import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { EPOAMessage } from 'src/app/common/error-message/common-message.constants';
import { EPaoDirectives } from 'src/app/common/directive/epao';
import { SADAMapping } from 'src/app/model/epaoModel';

@Component({
  selector: 'app-branch-sa-da-mapping',
  templateUrl: './branch-sa-da-mapping.component.html',
  styleUrls: ['./branch-sa-da-mapping.component.css']
})
export class BranchSaDaMappingComponent implements OnInit {
  ELEMENT_DATA: SADAMapping[] = [
    {
      saUser: ' K M Shah',
    },
    {
      saUser: 'P H Mehta',
    },
    {
      saUser: 'Z B Patel',
    }
  ];
  // Date
  todayDate = Date.now();
  maxDate = new Date();
  // Form Group
  brancMappingForm: FormGroup;
  // Form Control
  branchCtrl: FormControl = new FormControl();
  // List Details
  branch_list: any[] = [{
    value: '1', viewValue: ' Receipt Branch 1',
  },
  {
    value: '2', viewValue: 'Receipt Branch 2',
  }
    ,
  {
    value: '2', viewValue: 'Receipt Branch 3',
  }
  ];
  // Table data Source
  newdataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);
  newdisplayedColumns: string[] = ['srNo', 'saUser', 'newaction'];

  selection = new SelectionModel<any>(true, []);
  constructor(private router: Router, public dialog: MatDialog, private fb: FormBuilder,) { }

  directiveObject = new EPaoDirectives(this.router, this.dialog);

  public errorMessages;
  ngOnInit() {
    this.errorMessages = EPOAMessage;
    this.brancMappingFormgData();
  }
  brancMappingFormgData() {
    this.brancMappingForm = this.fb.group({
      branch: ['']
    }
    )
  }


  // Branch Sa Dialog
  openView() {
    const dialogRef = this.dialog.open(BranchSaDaDialogComponent, {
      width: '1200px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}

const ELEMENT_DATA1: any[] = [
  {
    branchName: 'K M Shah	',
    branch: 'Receipt Branch 1'
  },

];

// Branch Sa Dialog Details


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'branch-sada-dialog',
  templateUrl: 'branch-sada-dialog.html',
})


export class BranchSaDaDialogComponent {
  constructor(
    private router: Router,
    public dialogRef: MatDialogRef<BranchSaDaDialogComponent>
  ) { }
  newdataSource = new MatTableDataSource<any>(ELEMENT_DATA1);
  newdisplayedColumns: string[] = ['srNo', 'branchName', 'branch'];
  vitocancel(): void {
    this.dialogRef.close();
  }


}

