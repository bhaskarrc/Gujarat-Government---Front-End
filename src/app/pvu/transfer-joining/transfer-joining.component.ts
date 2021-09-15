import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { SearchEmployeeComponent } from '../search-employee/search-employee.component';
import { CommonListing } from 'src/app/model/common-listing';
import { pvuMessage } from 'src/app/common/error-message/common-message.constants';
import { MatDialog } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { TransferJoiningForm } from 'src/app/model/transfer-joining';

@Component({
  selector: 'app-transfer-joining',
  templateUrl: './transfer-joining.component.html',
  styleUrls: ['./transfer-joining.component.css']
})
export class TransferJoiningComponent implements OnInit {

  district_list: CommonListing[] = [
    { value: '1', viewValue: 'Ahmedabad' },
    { value: '2', viewValue: 'Amreli' },
    { value: '3', viewValue: 'Anand' },
    { value: '4', viewValue: 'Banaskantha' },
    { value: '5', viewValue: 'Bharuch' },
    { value: '6', viewValue: 'Bhavnagar' },
    { value: '7', viewValue: 'Dahod' },
    { value: '8', viewValue: 'Dang' },
    { value: '9', viewValue: 'Gandhinagar' },
  ];
  transferCardexNo_list: CommonListing[] = [
    { value: '1', viewValue: '0142' },
    { value: '2', viewValue: '0143' },
    { value: '3', viewValue: '0144' },
    { value: '4', viewValue: '0145' },
    { value: '5', viewValue: '0146' },
    { value: '6', viewValue: '0147' },
    { value: '7', viewValue: '0148' },
    { value: '8', viewValue: '0149' },
    { value: '9', viewValue: '0150' },
  ];
  transferDdoNo_list: CommonListing[] = [
    { value: '1', viewValue: '1142' },
    { value: '2', viewValue: '1143' },
    { value: '3', viewValue: '1144' },
    { value: '4', viewValue: '1145' },
    { value: '5', viewValue: '1146' },
    { value: '6', viewValue: '1147' },
    { value: '7', viewValue: '1148' },
    { value: '8', viewValue: '1149' },
    { value: '9', viewValue: '1150' },
  ];
  transferSubOfficeName_list: CommonListing[] = [
    { value: '1', viewValue: 'Sub Office 1' },
    { value: '1', viewValue: 'Sub Office 2' },
  ];

  forenoonAfternoon_list: any[] = [
    {value: '1', viewValue: 'Forenoon'},
    {value: '2', viewValue: 'Afternoon'},
  ];

  tranferJoiningForm: FormGroup;
  date = new Date();
  errorMessage;
  containers = [];
  showDataEmployee: Boolean = false;
  currentDetails: Boolean = false;

  districtCtrl: FormControl = new FormControl();
  transferCardexNoCtrl: FormControl = new FormControl();
  transferDdoNoCtrl: FormControl = new FormControl();
  transferSubOfficeNameCtrl: FormControl = new FormControl();
  forenoonAfternoonCtrl: FormControl = new FormControl();

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    private toastr: ToastrService,
  ) { }

  ngOnInit() {
    this.errorMessage = pvuMessage;
    this.tranferJoiningForm = this.fb.group({
      officeName: [''],
      orderNumber: [''],
      orderDate: [''],
      empNumber: [''],
      empName: [''],
      empDesignation: [''],
      currentCardexNo: [''],
      currentDdoNo: [''],
      currentOfficeName: [''],
      currentSubOfficeName: [''],
      district: [''],
      transferSubOfficeName: [''],
      forenoonAfternoon: [''],
      relievingDate: [''],
      currentForenoonAfternoon: [''],
    });
    this.containers.push(this.containers.length);
  }
  add() {
    this.containers.push(this.containers.length);
  }
  deleteRow(index) {
    this.containers.splice(index, 1);
  }

  showEmployee() {
    this.showDataEmployee = !this.showDataEmployee;
  }

  submitDetails() {
    this.toastr.success('Data submit successfully');
  }

  goToDashboard() { }

  resetForm() {
    this.tranferJoiningForm.reset();
  }
  saveEstimate(){}

}
