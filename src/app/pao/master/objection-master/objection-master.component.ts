import { Component, OnInit, ViewChild, OnDestroy, Inject, ElementRef, ViewChildren, QueryList, Renderer } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { ReplaySubject, Observable, Subject, BehaviorSubject, from } from 'rxjs';
import { CommonListing } from 'src/app/model/common-listing';
import { SelectionModel } from '@angular/cdk/collections';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { WorkflowDetailsGrantComponent } from '../../../grant/workflow-details-grant/workflow-details-grant.component';
import { ListValue } from 'src/app/model/paoModel';
import { PaoDirectives } from 'src/app/common/directive/pao';
import { ObjectionMaster } from 'src/app/model/treasury-bill';
import { ObjectMasterDialogComponent } from '../../object-master-dialog/object-master-dialog.component';
// import { WorkflowDetailsGrantComponent } from '../../workflow-details-grant/workflow-details-grant.component';
declare function SetGujarati();
declare function SetEnglish();





@Component({
  selector: 'app-objection-master',
  templateUrl: './objection-master.component.html',
  styleUrls: ['./objection-master.component.css']
})
export class ObjectionMasterComponent implements OnInit {

  // Listing og objection master
  newELEMENT_DATA: ObjectionMaster[] = [
    {
      object_descr: 'બીલ સાથે સામેલ તફાવતના પત્રકમા વાવચર નબર લખવામા આવેલ નથી ',
      module_name: 'Treasury Bill Processing ',
      billType: 'GTR 30 Pay Bill'
    },
    {
      object_descr: 'મુદત બહારનો દાવો હોવાથી મળવાપાત્ર નથી ',
      module_name: 'Treasury Bill Processing ',
      billType: 'GTR 45 TA Bill'
    },
    {
      object_descr: 'મહેકમ મંજુરીના હુકમ નમ્બરની નોધ પગાર બીલ નામથાળેથયેલ નથી  ',
      module_name: 'Treasury Bill Processing ',
      billType: 'GTR 12 Advance Bill'
    },
    {
      object_descr: 'બીલમાં દર્શાવેલ ખર્ચાનો ઇડીપી કોડ સુંસંગત નથી. જે ઓનલાઇન તેમજ બીલ ઉપર સુધારી બીલ રજુ કરવું ',
      module_name: 'Treasury Bill Processing ',
      billType: 'GTR 12 Advance Bill'
    },
    {
      object_descr: 'બીલમાં દર્શાવેલ કપાતનો ઇડીપી કોડ ખોટો જણાય છે. જે ઓનલાઇન સીસ્ટમમાં તેમજ બીલ ઉપર સુધારી ફરી રજુ કરવુ.  ',
      module_name: 'Treasury Bill Processing ',
      billType: 'GTR 30 Pay Bill'
    },
    {
      object_descr: 'બીલમા સરવાળા મેળમા નથી. ',
      module_name: 'Treasury Bill Processing ',
      billType: 'GTR 12 Advance Bill'
    },
    {
      object_descr: 'બીલમા નિયંત્રણ અધિકારીશ્રીની સહી અને કોડ નંબર દર્શાવેલ નથી.  ',
      module_name: 'Treasury Bill Processing ',
      billType: 'GTR 30 Pay Bill'
    },
    {
      object_descr: 'બીલમા ઉપાડ અધિકારીની સહી થયેલ નથી. ',
      module_name: 'Treasury Bill Processing ',
      billType: 'GTR 40 Grant In Bill'
    },
    {
      object_descr: 'બીલમા ઈડીપી કોડ્ સાચા દર્શાવેલ નથી  ',
      module_name: 'Treasury Bill Processing ',
      billType: 'GTR 45 TA Bill'
    },
    {
      object_descr: 'બીલમા આકારવામા આવેલ રુ.૧૦૦૦/-થી ઉપરના કિસ્સામા પાર્ટીના નામ જોગ ચેક માગવો રહે. ',
      module_name: 'Treasury Bill Processing ',
      billType: 'GTR 30 Pay Bill'
    },
    {
      object_descr: 'બીલના મથાળે અવર-જવર પુસ્તિકામાં માં નોંધ કર્યા અંગેનુ પ્રમાણપત્ર આપેલ નથી.  ',
      module_name: 'Treasury Bill Processing ',
      billType: 'GTR 40 Grant In Bill'
    },
    {
      object_descr: 'બીલ મોડુ રજુ કરવાનુ કારણ દરશાવવુ રહે ',
      module_name: 'Treasury Bill Processing ',
      billType: 'GTR 45 TA Bill'
    },
    {
      object_descr: 'ડીસીબીલ પ્રમાણપત્ર બીલ સાથે સામેલ નથી  ',
      module_name: 'Treasury Bill Processing ',
      billType: 'GTR 40 Grant In Bill'
    },
    {
      object_descr: 'જુથવિમામાં જોડાયા તારીખની કરેલ નોંધના સર્વિસબુકના પાનાની નકલ પ્રમાણિત કરી બીલ સાથે સામેલ ',
      module_name: 'Treasury Bill Processing ',
      billType: 'GTR 45 TA Bill'
    },
    {
      object_descr: 'ગુજરાત્ નાણાકીય નિયમ211 મુજબ બિલ્ રજુ કરો.  ',
      module_name: 'Treasury Bill Processing ',
      billType: 'GTR 40 Grant In Bill'
    },
    {
      object_descr: 'ખોટો ઇડીપી કોડ સુધારી બીલ રજુ કરવુ   ',
      module_name: 'Treasury Bill Processing ',
      billType: 'GTR 30 Pay Bill'
    },
    {
      object_descr: 'ખોટો ઇડીપી કોડ સુધારી બીલ રજુ કરવુ  ',
      module_name: 'Treasury Bill Processing ',
      billType: 'GTR 45 TA Bill'
    },
    {
      object_descr: 'એલટીસી બીલમા મુસાફરી ખાનગી વાહન મા કરેલ હોય કલેઇમ મલવાપાત્ર નથી  ',
      module_name: 'Treasury Bill Processing ',
      billType: 'GTR 40 Grant In Bill'
    },
    {
      object_descr: 'એલ.ટી.સી. ઓર્ડર સામેલ કરવાનો બાકી.   ',
      module_name: 'Treasury Bill Processing ',
      billType: 'GTR 30 Pay Bill'
    },
  ];
  // table source
  newdisplayedColumns: string[] = ['select', 'module_name', 'billType', 'object_descr', 'action'];
  newdataSource = new MatTableDataSource<any>(this.newELEMENT_DATA);
  // form group
  objectionMasterForm: FormGroup;
  // date
  todayDate = new Date();
  // form control
  billtypeCtrl: FormControl = new FormControl();

  constructor(private router: Router, public dialog: MatDialog, private fb: FormBuilder,) { }
  directiveObject = new PaoDirectives(this.router, this.dialog);
  selection = new SelectionModel<any>(true, []);
  // LIsts
  billtype_list: ListValue[] = [
    { value: '1', viewValue: 'GTR 30 Pay Bill' },
    { value: '2', viewValue: 'GTR 45 TA Bill' },
    { value: '3', viewValue: 'GTR 40 Grant In Bill' },
    { value: '4', viewValue: 'GTR 12 Advance Bill' }
  ];
  module_list: ListValue[] = [
    { value: '1', viewValue: 'Treasury Bill Processing' },
    { value: '3', viewValue: 'Grant' },
    { value: '4', viewValue: 'Budget' },
    { value: '5', viewValue: 'Contract Manager' },
    { value: '6', viewValue: 'EDP' },
  ];
  hasFocusSet: number;


  ngOnInit() {
    this.objectionMasterData();
  }

  objectionMasterData() {
    this.objectionMasterForm = this.fb.group({
      module: [''],
      object_desc: ['', Validators.required],
      billtype: [''],
      modulername: [''],
    });
  }

  // objection dialog
  openDialog() {
    const dialogRef = this.dialog.open(ObjectMasterDialogComponent, {
      width: '500px',
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'no') {
        console.log('The dialog was closed', result);
      } else if (result === 'yes') {
        console.log('The dialog was closed', result);
      }
    });
  }
}

