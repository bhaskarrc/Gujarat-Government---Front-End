import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MatPaginator, MatTableDataSource, MAT_DIALOG_DATA } from '@angular/material';

const MAPPED_DATA: any[] = [
  { branchName: 'Branch 1' },
  { branchName: 'Branch 2' },
  { branchName: 'Branch 3' },
  { branchName: 'Branch 4' },
  { branchName: 'Branch 5' },
];

@Component({
  selector: 'app-mapped-branch-dialog',
  templateUrl: './mapped-branch-dialog.component.html',
  styleUrls: ['./mapped-branch-dialog.component.css']
})
export class MappedBranchDialogComponent implements OnInit {
  header = 'Mapped Branch';
  mappedBranchDataSource = new MatTableDataSource(MAPPED_DATA);
  mappedBranchColumns: string[] = [
    'srNo',
    'branchName',
  ];
  headerJso: any[] = [
    { label: 'Employee No. ', value: '10000000001' },
    { label: 'Employee Name', value: '	Shri Pratik Shah' },
    { label: 'Post Name', value: '	Accounts Officer -2' },
  ];

  private paginator: MatPaginator;
  @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
    this.paginator = mp;
    this.mappedBranchDataSource.paginator = this.paginator;
  }
  constructor(public dialogRef: MatDialogRef<MappedBranchDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() { }


  // Close the dialog
  onClose(): void {
    this.dialogRef.close('closed');
  }
}
