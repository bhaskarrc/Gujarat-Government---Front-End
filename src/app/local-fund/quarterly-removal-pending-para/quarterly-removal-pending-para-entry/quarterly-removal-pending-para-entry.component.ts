import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import { MatTableDataSource, MatPaginator, MatDialog } from '@angular/material';
import { lfMessage } from 'src/app/common/error-message/common-message.constants';
import { DatePipe } from '@angular/common';
import { WorkflowDetailsLfComponent } from '../../workflow-details-lf/workflow-details-lf.component';
import { QuarterlyRemovalPendingPara } from 'src/app/model/local-fund';
import { LocalFundDirective } from 'src/app/common/directive/local-fund-directive';
@Component({
  selector: 'app-quarterly-removal-pending-para-entry',
  templateUrl: './quarterly-removal-pending-para-entry.component.html',
  styleUrls: ['./quarterly-removal-pending-para-entry.component.css']
})
export class QuarterlyRemovalPendingParaEntryComponent implements OnInit {
  id = 1;
  isSubmitted = false;
  errorMessages = lfMessage;
  directiveObject = new LocalFundDirective(this.dialog);


  quarterlyRemovalPendingParaEntry: FormGroup;
  instituteTypeCtrl: FormControl = new FormControl();
  instituteNameCtrl: FormControl = new FormControl();
  auditYearCtrl: FormControl = new FormControl();

  instituteTypeList: ListValue[] = [
    { value: '0', viewValue: 'Maha Nagar Palika' },
    { value: '1', viewValue: 'Nagarpalika' },
    { value: '2', viewValue: 'District Panchayat' },
    { value: '3', viewValue: 'Taluka Panchayat' },
    { value: '4', viewValue: 'University' },
    { value: '5', viewValue: 'Municiple School Board' },
    { value: '6', viewValue: 'Village Panchayat' },
    { value: '7', viewValue: 'Police Welfare Fund' },
    { value: '8', viewValue: 'Provident Fund of District Panchayat' },
    { value: '9', viewValue: 'Provident Fund of Secondary Education office' },
    { value: '10', viewValue: 'Ambaji Temple Trust' },
    { value: '11', viewValue: 'Others' },
  ];
  instituteNameList: ListValue[] = [
    { value: '0', viewValue: 'Dahegam Nagarpalika' },
    { value: '1', viewValue: 'DMDG' },
    { value: '2', viewValue: 'Gandhinagar-District Panchayat' },
    { value: '3', viewValue: 'GMC' },
    { value: '4', viewValue: 'GPCB' },
    { value: '5', viewValue: 'Dahegam Nagar Palika' },
    { value: '6', viewValue: 'Ahmedabad - District Panchayat' },
  ];

  auditYearList: ListValue[] = [
    { value: '1', viewValue: '2001-02' },
    { value: '2', viewValue: '2002-02' },
    { value: '3', viewValue: '2003-04' },
    { value: '4', viewValue: '2004-05' },
    { value: '5', viewValue: '2005-06' },
    { value: '6', viewValue: '2006-07' },
    { value: '7', viewValue: '2007-08' },
    { value: '9', viewValue: '2008-09' },
    { value: '10', viewValue: '2009-10' },
    { value: '11', viewValue: '2010-11' },
  ];

  // table data
  elementData: QuarterlyRemovalPendingPara[] = [
    {
      id: '1', district: 'Ahmedabad', instituteType: 'Municipal Corporation', instituteName: 'AMC',
      auditYear: '2019-20', dateOfNotesReceivedFromAg: '16-Jun-2019', totalNoOfPara: '2', paraNo: '10,11',
      paraSubject: 'Office Expenditure', reasonForNotClose: 'Proper Clarification', remarks: ''
    },
    {
      id: '5', district: 'Ahmedabad', instituteType: 'District Corporation', instituteName: 'Ahmedabad District Panchayat',
      auditYear: '2019-21', dateOfNotesReceivedFromAg: '16-Apr-2020', totalNoOfPara: '4', paraNo: '5,8,10,15',
      paraSubject: 'Quarterly Expenditure', reasonForNotClose: 'Proper Clarification', remarks: ''
    },
    {
      id: '6', district: 'Ahmedabad', instituteType: 'District Corporation', instituteName: 'Ahmedabad Distrct LF',
      auditYear: '2019-22', dateOfNotesReceivedFromAg: '5-May-2019', totalNoOfPara: '3', paraNo: '2,6,8',
      paraSubject: 'Software Expenditure', reasonForNotClose: 'Proper Clarification', remarks: ''
    },
    {
      id: '7', district: 'Ahmedabad', instituteType: 'Taluka Panchayat', instituteName: 'Botad Taluka Panchayat',
      auditYear: '2019-23', dateOfNotesReceivedFromAg: '30-Sep-2019', totalNoOfPara: '1', paraNo: '8',
      paraSubject: 'Expenditure', reasonForNotClose: 'Proper Clarification', remarks: ''
    },
  ];
  dataSource = new MatTableDataSource<QuarterlyRemovalPendingPara>(this.elementData);
  columns: string[] = ['position',
    'id', 'district', 'instituteType', 'instituteName', 'dateOfNotesReceivedFromAg', 'auditYear', 'totalNoOfPara',
    'paraNo', 'paraSubject', 'reasonForNotClose', 'remarks', 'action'
  ];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private fb: FormBuilder, private datePipe: DatePipe, public dialog: MatDialog) { }

  ngOnInit() {
    this.quarterlyRemovalPendingParaEntry = this.fb.group({
      id: this.id,
      district: ['Ahmedabad'],
      instituteType: [''],
      instituteName: [''],
      dateOfNotesReceivedFromAg: [''],
      auditYear: [''],
      totalNoOfPara: [''],
      paraNo: [''],
      paraSubject: [''],
      reasonForNotClose: [''],
      remarks: ['']
    });
    this.dataSource.paginator = this.paginator;
  }

  // reset form
  clearForm() {
    this.quarterlyRemovalPendingParaEntry.reset();
    this.quarterlyRemovalPendingParaEntry.patchValue({
      id: this.id,
      district: 'Ahmedabad'
    });
  }

  // on click on add button
  onAdd() {
    this.dataSource.data.push({
      id: String(this.id),
      district: this.quarterlyRemovalPendingParaEntry.get('district').value,
      instituteType: this.quarterlyRemovalPendingParaEntry.get('instituteType').value,
      instituteName: this.quarterlyRemovalPendingParaEntry.get('instituteName').value,
      dateOfNotesReceivedFromAg:
        this.datePipe.transform(this.quarterlyRemovalPendingParaEntry.get('dateOfNotesReceivedFromAg').value, 'dd-MMM-yyyy'),
      auditYear: this.quarterlyRemovalPendingParaEntry.get('auditYear').value,
      totalNoOfPara: this.quarterlyRemovalPendingParaEntry.get('totalNoOfPara').value,
      paraNo: this.quarterlyRemovalPendingParaEntry.get('paraNo').value,
      paraSubject: this.quarterlyRemovalPendingParaEntry.get('paraSubject').value,
      reasonForNotClose: this.quarterlyRemovalPendingParaEntry.get('reasonForNotClose').value,
      remarks: this.quarterlyRemovalPendingParaEntry.get('remarks').value,
    });
    this.dataSource.data = this.dataSource.data;
    this.id++;

  }
}
