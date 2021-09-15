import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import { lfMessage } from 'src/app/common/error-message/common-message.constants';
import { MatPaginator, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-quaterly-audit-report-planning',
  templateUrl: './quaterly-audit-report-planning.component.html',
  styleUrls: ['./quaterly-audit-report-planning.component.css']
})
export class QuaterlyAuditReportPlanningComponent implements OnInit {

  referenceNumber = 'Reference Number:';
  referenceNumberDate = 'Reference Date:';
  todayDate = Date.now();
  quaterlyAuditReportPlanning: FormGroup;
  isSubmitted = false;
  errorMessages = lfMessage;
  quaterlyCtrl: FormControl = new FormControl();
  districtCtrl: FormControl = new FormControl();
  instituteTypeCtrl: FormControl = new FormControl();

  districtList: ListValue[] = [
    { value: '00', viewValue: 'Ahmedabad' },
    { value: '01', viewValue: 'Amreli' },
    { value: '02', viewValue: 'Anand' },
    { value: '03', viewValue: 'Aravalli' },
    { value: '04', viewValue: 'Banaskantha' },
    { value: '05', viewValue: 'Bharuch' },
    { value: '06', viewValue: 'Bhavnagar' },
    { value: '07', viewValue: 'Botad' },
    { value: '08', viewValue: 'Chhota Udaipur' },
    { value: '09', viewValue: 'Dahod' },
    { value: '10', viewValue: 'Dang' },
    { value: '11', viewValue: 'Devbhoomi Dwarka' },
    { value: '12', viewValue: 'Gandhinagar' },
    { value: '13', viewValue: 'Gir Somnath' },
    { value: '14', viewValue: 'Jamnagar' },
    { value: '15', viewValue: 'Junagadh' },
    { value: '16', viewValue: 'Kutch' },
    { value: '17', viewValue: 'Kheda' },
    { value: '18', viewValue: 'Mahisagar' },
    { value: '19', viewValue: 'Mehsana' },
    { value: '20', viewValue: 'Morbi' },
    { value: '21', viewValue: 'Narmada' },
    { value: '22', viewValue: 'Navsari' },
    { value: '23', viewValue: 'Panchmahal' },
    { value: '24', viewValue: 'Patan' },
    { value: '25', viewValue: 'Porbandar' },
    { value: '26', viewValue: 'Rajkot' },
    { value: '27', viewValue: 'Sabarkantha' },
    { value: '28', viewValue: 'Surat' },
    { value: '29', viewValue: 'Surendranagar' },
    { value: '30', viewValue: 'Tapi' },
    { value: '31', viewValue: 'Vadodara' },
    { value: '32', viewValue: 'Valsad' },
  ];

  instituteTypeList: ListValue[] = [
    { value: 'MP', viewValue: 'Maha Nagar Palika' },
    { value: 'NP', viewValue: 'Nagarpalika' },
    { value: 'DP', viewValue: 'District Panchayat' },
    { value: 'TP', viewValue: 'Taluka Panchayat' },
    { value: 'UN', viewValue: 'University' },
    { value: 'MS', viewValue: 'Municiple School Board' },
    { value: 'VP', viewValue: 'Village Panchayat' },
    { value: 'PW', viewValue: 'Police Welfare Fund' },
    { value: 'PD', viewValue: 'Provident Fund of District Panchayat' },
    { value: 'PS', viewValue: 'Provident Fund of Secondary Education office' },
    { value: 'AT', viewValue: 'Ambaji Temple Trust' },
    { value: 'OTH', viewValue: 'Others' },

  ];

  quaterlyList: ListValue[] = [
    { value: '0', viewValue: 'April-June' },
    { value: '1', viewValue: 'July-August' },
    { value: '2', viewValue: 'October-December' },
    { value: '3', viewValue: 'January-March' },
  ];

  elementData: any[] = [{
    quaterly1: 'April 2018-June 2018',
    proposedAuditUnit1: '20',
    suggestedAuditUnit1: '15',
    total1: '35',
  },
  {
    quaterly1: 'July 2018-August 2018',
    proposedAuditUnit1: '10',
    suggestedAuditUnit1: '0',
    total1: '10',
  },
  {
    quaterly1: 'October 2018-December 2018',
    proposedAuditUnit1: '0',
    suggestedAuditUnit1: '0',
    total1: '0',
  },
  {
    quaterly1: 'January 2019-March 2019',
    proposedAuditUnit1: '15',
    suggestedAuditUnit1: '10',
    total1: '25',
  }];
  dataSource = new MatTableDataSource<any>(this.elementData);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.submitFormData();
  }

  // form data
  submitFormData() {
    this.quaterlyAuditReportPlanning = this.fb.group({
      financialYear: [''],
      quaterly: [''],
      district: [''],
      instituteType: [''],
      proposedAuditYear: [''],
      suggestedAuditUnit: ['']
    });
  }

  // on click on add button
  add() { }

  // reset form
  clearForm() {
    this.quaterlyAuditReportPlanning.reset();
  }

  // calculate proposed audit unit in first table
  totalAuditUnit() {
    let amount = 0;
    this.dataSource.data.forEach(element1 => { amount = Number(element1.proposedAuditUnit1) + amount; });
    return amount;
  }

  // calculate suggested audit unit in first table
  totalSuggestedAuditUnit() {
    let amount = 0;
    this.dataSource.data.forEach(element1 => { amount = Number(element1.suggestedAuditUnit1) + amount; });
    return amount;
  }

  // calculate total in first table
  total() {
    let amount = 0;
    this.dataSource.data.forEach(element1 => { amount = Number(element1.total1) + amount; });
    return amount;
  }
}
