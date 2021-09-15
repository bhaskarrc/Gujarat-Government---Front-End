import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { payrollMessage } from 'src/app/common/error-message/common-message.constants';

@Component({
  selector: 'app-finalize-process',
  templateUrl: './finalize-process.component.html',
  styleUrls: ['./finalize-process.component.css']
})
export class FinalizeProcessComponent implements OnInit {
  finalizeProcessForm: FormGroup;
  errorMessage = payrollMessage;

  Element_Data: any[] = [
    {
      empNo: '1000000001', empName: 'A B Patel', class: 'Class I', designation: 'Assisstant Professor',
      totalEarnings: '25942.00', totalDeduction: '2000.00', netPay: '23942.00'
    },
    {
      empNo: '1000000002', empName: 'A C Patel', class: 'Class I', designation: 'Assisstant Professor',
      totalEarnings: '25942.00', totalDeduction: '3000.00', netPay: '22942.00'
    },
    {
      empNo: '1000000003', empName: 'A D Patel', class: 'Class I', designation: 'Assisstant Professor',
      totalEarnings: '25942.00', totalDeduction: '4000.00', netPay: '21942.00'
    },
    {
      empNo: '1000000004', empName: 'A E Patel', class: 'Class I', designation: 'D.D.(General)',
      totalEarnings: '25942.00', totalDeduction: '5000.00', netPay: '20942.00'
    },
    {
      empNo: '1000000005', empName: 'A F Shah', class: 'Class I', designation: 'Director(I.T)',
      totalEarnings: '25942.00', totalDeduction: '2000.00', netPay: '23942.00'
    }
  ];
  dataSource = new MatTableDataSource<any>(this.Element_Data);
  displayedColumns: string[] = ['position', 'empNo', 'empName', 'class', 'designation', 'totalEarnings', 'totalDeduction', 'netPay'];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public fb: FormBuilder) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.finalizeProcessForm = this.fb.group({
      comments: ['']
    });
  }

}
