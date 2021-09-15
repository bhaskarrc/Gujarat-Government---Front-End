import { element} from 'protractor';
import { Component, OnInit, ViewChild, Inject} from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { Router} from '@angular/router';
import { SelectionModel} from '@angular/cdk/collections';
import { WorkflowDetailsGrantComponent } from 'src/app/treasury-bill/workflow-details-grant/workflow-details-grant.component';

export class ChequeInfo {
  chequeAmount: string;
  accountNo:number;
  inFavourof:string;
  chequeNo:string;
  chequeType:string
}

const ELEMENT_DATA = [{
  chequeAmount: '1500.00',
  accountNo: '-',
  inFavourof: 'JANK',
  chequeNo: 'PAOGNR-436287',
  chequeType: 'PARTY',
}, ]

const chequeELEMENT_DATA : ChequeInfo[] = [{
  chequeAmount: '1500.00',
  accountNo: 0 ,
  inFavourof: 'Under secretary , General Administrative',
  chequeNo: 'PAOGNR-436287',
  chequeType: 'PARTY',
}, ]

@Component({
  selector: 'app-cancle-cheque',
  templateUrl: './cancle-cheque.component.html',
  styleUrls: ['./cancle-cheque.component.css']
})
export class CancleChequeComponent implements OnInit {
  cancelchequeForm: FormGroup;
  ReasonnameCtrl: FormControl = new FormControl();
  newdisplayedColumns: string[] = ['srno','chequeNo','chequeType','inFavourof','accountNo','chequeAmount'];
  newdataSource = new MatTableDataSource<any>(ELEMENT_DATA);
  chequedisplayedColumns: string[] =  ['chequeType','inFavourof','accountNo','chequeAmount','action'];
  chequedataSource = new MatTableDataSource<any>(chequeELEMENT_DATA);
  ReasonnameCtrl_list: any[] = [
    {value: '1', viewValue: 'Due to wrong Bunching'}, 
    {value: '2', viewValue: 'Bill need to b rejected'}, 
    {value: '3', viewValue: 'Wrongly Written'}, 
    {value: '4', viewValue: 'Due to printer problem'}, 
  ];  
  chequeTypes_list: any[] = [
  {value: '1', viewValue: 'DC' },
  {value: '2', viewValue: 'Party'}
];


  constructor(public dialogRef: MatDialogRef < CancleChequeComponent > , private fb: FormBuilder,    public dialog: MatDialog, ) {}
  ngOnInit() {
    this.cancelchequeForm = this.fb.group({
      reasonOfcacelation: [''],
      ReasonName: [''],
      chequeTypes:['1'],
      inFavourof: [''],
      accountNo: [''],
      chequeAmount: ['']

    })


  }
  goToDashboard(): void {
    this.dialogRef.close('no');
  }
  submitToNextLevel(){
    const dialogRef = this.dialog.open(WorkflowDetailsGrantComponent, {
      width: '1200px'
 });
  }
}
