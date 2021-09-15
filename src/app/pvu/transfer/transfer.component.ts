import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import {MatTableDataSource, MatDialog} from '@angular/material';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { SearchEmployeeComponent } from '../search-employee/search-employee.component';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {
  date = new Date();
  createTransferForm: FormGroup;
  selectedAll: Boolean = false;
  isTransferEnable = false;
  tr_initiation_date = new Date();
  errorMessages = {
    Employee_NO : 'Please Enter Employee Number'
  };

  district_list: any[] = [
    {value: '1', viewValue: 'Ahmedabad'},
    {value: '2', viewValue:  'Vadodara'},
    {value: '3', viewValue: 'Anand'},
    {value: '4', viewValue: 'Chhota Udaipur'},
    {value: '5', viewValue: 'Dahod'},
    {value: '6', viewValue: 'Kheda'},
    {value: '7', viewValue: 'Mahisagar'},
    {value: '8', viewValue:  'Panchmahal'}
  ];
  cardexNumber_list: any[] = [
    {value: '1', viewValue: '7913'},
    {value: '2', viewValue: '1795'},
  ];
  ddoNumber_list: any[] = [
    {value: '1', viewValue: '5425'},
    {value: '2', viewValue: '9874'},
  ];
  officeName_list: any[] = [
    {value: '1', viewValue: 'DDO Rajkot'}
  ];
  sub_officeName_list: any[] = [
    {value: '1', viewValue: 'Office -1'},
    {value: '2', viewValue: 'Office -2'}
  ];
  reason_list: any[] = [
    {value: '1', viewValue: 'Administrative Reason'},
    {value: '2', viewValue: 'On Deputation within ifms'},
    {value: '3', viewValue: 'On Deputation out of the ifms'},
    {value: '4', viewValue: 'Own Request'}
  ];
  // forenoonAfternoon_list: any[] = [
  //   {value: '1', viewValue: 'Forenoon'},
  //   {value: '2', viewValue: 'Afternoon'},
  // ];
  forenoonAfternoon_list: any[] = [
    {value: '1', viewValue: 'Forenoon'},
    {value: '2', viewValue: 'Afternoon'},
  ];

  districtCtrl: FormControl = new FormControl();
  cardexCtrl: FormControl = new FormControl();
  ddoCodeCtrl: FormControl = new FormControl();
  officeNameCtrl: FormControl = new FormControl();
  subOfficeNameCtrl: FormControl = new FormControl();
  reasonForTransferCtrl: FormControl = new FormControl();
  forenoonAfternoonCtrl: FormControl = new FormControl();

  transferDataSource: any =
    {
     'employee_no': '',
     'employee_name': '',
     'designation': '',
     'cardex_no': '',
     'ddo_no': '',
     'location_name': '',
     'district_name': '',
     'cardex_No': '',
     'ddo_code': '',
     'office_name': '',
     'sub_office_name': '',
     'relieving_date': '',
     'forenoonAfternoon': '',
    //  'tentative_joining_date': '',
     'reason_for_transfer': '-',
     'remarks': '',
     'action': ''
    };

  dataSource = new MatTableDataSource([this.transferDataSource]);
  displayedColumns = ['sr_no', 'employee_no', 'employee_name', 'designation', 'cardex_no',
  'ddo_no', 'location_name', 'subOfficeName', 'district_name', 'cardex_No', 'ddo_code', 'office_name', 'sub_office_name',
  'relieving_date', 'forenoonAfternoon', 'reason_for_transfer', 'remarks', 'action'];

  displayedColumnsCopy = ['sr_no1', 'employee_no1', 'employee_name1', 'designation1', 'cardex_no1',
  'ddo_no1', 'location_name1', 'subOfficeNameCurrent1', 'district_name1', 'cardex_No1', 'ddo_code1', 'office_name1',
  'sub_office_name2', 'relieving_date1', 'forenoonAfternoon1', 'reason_for_transfer1', 'remarks1', 'action1'];

  constructor(
    public dialog: MatDialog,
    private fb: FormBuilder,
    private toast: ToastrService,
    private changeDetectorRefs: ChangeDetectorRef) { }

  ngOnInit() {
    this.createTransferForm = this.fb.group({
      office_name: ['Office-1'],
      office_order_no: ['']
    });
  }
  onTransfer() {
    this.isTransferEnable = false;
    this.toast.success('Transfer successfully.');
  }
  openDialogEmployeeNumber(index) {
    const dialogRef = this.dialog.open(SearchEmployeeComponent, {
      width: '800px',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      const p_data = this.dataSource.data;
      p_data[index] = {
        'employee_no': '1540154488',
        'employee_name': result[0].employeeName,
        'designation': 'Software Engineer',
        'cardex_no': '1540',
        'ddo_no': '1554',
        'location_name': 'office-1',
        'subOfficeName': '-',
        'district_name': '',
        'cardex_No': '',
        'ddo_code': '',
        'office_name': '',
        'relieving_date': '',
        'tentative_joining_date': '',
        'reason_for_transfer': '-',
        'remarks': '',
      };
      this.dataSource.data = p_data;
    });
  }
  deleteRow(index) {
    this.dataSource.data.splice(index, 1);
    this.dataSource = new MatTableDataSource(this.dataSource.data);
  }
  resetForm() {
    this.createTransferForm.controls['initiation_date'].setValue('');
    this.createTransferForm.controls['office_order_no'].setValue('');
  }
  resetList() {
    this.isTransferEnable = false;
  }
  getOfficeName(element) {
    element['office_name'] = 'Office - 1';
  }
  saveTransferData() {}
  isChecked() {
    this.isTransferEnable = false;
     this.dataSource.data.forEach(row => {
       if (row['select'] == true) {
         this.isTransferEnable = true;
         return false;
       }
    });
  }

  checkIfAllSelected() {
    this.selectedAll = this.dataSource.data.every((item: any) => {
      return item.select === true;
    });
  }
  onRelievingDateChange(value, element) {
    element['relieving_date'] = value;
  }

  addRow(index) {
    const data = this.dataSource.data[index];
    if(data.district_name != "" && data.cardex_No != "" && data.ddo_code != "" && data.office_name != "" && data.sub_office_name != "" && data.relieving_date != "" && data.reason_for_transfer != "") {
      const p_data = this.dataSource.data;
      p_data.push(this.transferDataSource);
      this.dataSource.data = p_data;
    } else {
      this.toast.error('Please Select Required Detail.');
    }
  }
}
