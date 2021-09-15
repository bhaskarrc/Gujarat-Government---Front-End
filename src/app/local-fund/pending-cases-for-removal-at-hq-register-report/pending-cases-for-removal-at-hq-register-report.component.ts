import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { CommonListing } from 'src/app/model/common-listing';
import { ListValue } from 'src/app/model/common-grant';
import { PendingCasesForRemovalAtHqRegister } from 'src/app/model/local-fund';

@Component({
  selector: 'app-pending-cases-for-removal-at-hq-register-report',
  templateUrl: './pending-cases-for-removal-at-hq-register-report.component.html',
  styleUrls: ['./pending-cases-for-removal-at-hq-register-report.component.css']
})
export class PendingCasesForRemovalAtHqRegisterReportComponent implements OnInit {
  // date
  todayDate = Date.now();
  // form group
  pendingCasesRemovalHQReportForm: FormGroup;
  // form control
  districtNameCtrl: FormControl = new FormControl();
  instituteTypeCtrl: FormControl = new FormControl();
  instituteNameCtrl: FormControl = new FormControl();

  // lists start
  instituteTypeList: CommonListing[] = [
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
    { value: '2', viewValue: 'RMC' },
  ];

  districtNameList: ListValue[] = [
    { value: '0', viewValue: 'Ahmedabad' },
    { value: '1', viewValue: 'Amreli' },
    { value: '2', viewValue: 'Anand' },
    { value: '3', viewValue: 'Aravalli' },
    { value: '4', viewValue: 'Banaskantha' },
    { value: '5', viewValue: 'Bharuch' },
    { value: '6', viewValue: 'Bhavnagar' },
    { value: '7', viewValue: 'Botad' },
    { value: '8', viewValue: 'Chhota Udaipur' },
    { value: '9', viewValue: 'Dahod' },
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
  // lisst end

  // table data start
  elementData: PendingCasesForRemovalAtHqRegister[] = [
    {
      id: '1011',
      instituteType: 'District Panchayat',
      instituteName: 'AMC',
      outwardNo: '1245',
      outwardDate: '4-MAR-2019',
      subject: '',
      replyFromHQ: '',
      remark: '',
      edit: true
    },
  ];
  displayedColumns: string[] = [
    'serialNo',
    'id',
    'instituteType',
    'instituteName',
    'outwardNo',
    'outwardDate',
    'subject',
    'replyFromHQ',
    'remark',
    'action',
  ];
  dataSource = new MatTableDataSource<PendingCasesForRemovalAtHqRegister>(this.elementData);
  // table data end

  // paginator
  @ViewChild(MatPaginator) paginator: MatPaginator;
  // constructor
  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.pendingCasesRemovalHQReportForm = this.fb.group({
      districtName: [''],
      instituteType: [''],
      instituteName: [''],
    });
  }

  // reset form
  reset() {
    this.pendingCasesRemovalHQReportForm.reset();
  }

  // on click on edit icon in table
  onEdit(element) {
    element.edit = !element.edit;
  }
}
