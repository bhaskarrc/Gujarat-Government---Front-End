import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import { WorkflowDetailsAuditorMappingComponent } from '../workflow-details-auditor-mapping/workflow-details-auditor-mapping.component';
import { MatDialog, MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { YearEndProcess } from 'src/app/model/dppfgpf';


@Component({
  selector: 'app-year-end-process',
  templateUrl: './year-end-process.component.html',
  styleUrls: ['./year-end-process.component.css']
})
export class YearEndProcessComponent implements OnInit {
  // Variable
  isFinancialYear = false;
  // Date
  todayDate = Date.now();
  maxDate = new Date();
  // Form Group
  yearEndProcessForm: FormGroup;
  typeOfYearCtrl: FormControl = new FormControl();

  classTypeOfYear: ListValue[] = [
    { value: '1', viewValue: ' 2020-21 ' },

  ];


  Element_Data: YearEndProcess[] = [
    {
      district: 'Ahmedabad',
      totalCases: '14689',
      processedCases: '0',
      difference: '14689'
    },
    {
      district: 'Amreli',
      totalCases: '1333',
      processedCases: '0',
      difference: '1333'
    },
    {
      district: 'Palanpur',
      totalCases: '2781',
      processedCases: '0',
      difference: '2781'
    },
    {
      district: 'Bharuch',
      totalCases: '3821',
      processedCases: '0',
      difference: '3821'
    }
  ];
  displayedColumns: any[] = [
    'select',
    'district',
    'totalCases',
    'processedCases',
    'difference'


  ];

  dataSource = new MatTableDataSource<YearEndProcess>(this.Element_Data);
  selection = new SelectionModel<YearEndProcess>(true, []);
  @ViewChild(MatPaginator) paginator: MatPaginator;

  @ViewChild(MatSort) sort: MatSort;



  constructor(private fb: FormBuilder, public dialog: MatDialog) { }

  ngOnInit() {


    this.yearEndProcessForm = this.fb.group({

      employeeNo: '',
      employeeName: '',
      employeeGPFNo: '',
      year: '',
    });
  }
  // Work FLow
  workflowDetails() {
    const dialogRef = this.dialog.open(WorkflowDetailsAuditorMappingComponent, {
      width: '1200px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  onEmployeeNo() {
    this.yearEndProcessForm.patchValue({
      employeeName: 'Mr. Abc',
      employeeGPFNo: 'PW/DAT/6436',
    });
  }

  showTable() {
    this.isFinancialYear = true;

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }


  // checkbox related method
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;

  }

}
