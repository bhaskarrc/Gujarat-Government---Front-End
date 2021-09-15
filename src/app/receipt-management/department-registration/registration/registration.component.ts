import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { receiptManagement } from 'src/app/common/error-message/common-message.constants';
import { ListValue } from 'src/app/model/common-grant';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  // variables
  departRegisform: FormGroup;
  errorMessages = receiptManagement;
  departmentType = '1';

  // form controls
  deparCTRL: FormControl = new FormControl();
  headdepartCtrl: FormControl = new FormControl();
  districtCtrl: FormControl = new FormControl();
  talukaCtrl: FormControl = new FormControl();
  purposeCtrl: FormControl = new FormControl();
  taxPurposeCtrl: FormControl = new FormControl();

  // lists
  department_list: ListValue[] = [
    { value: '1', viewValue: 'Finanace Department' },
    { value: '2', viewValue: 'Labour Department' },
    { value: '3', viewValue: 'Revenue Department' }

  ];


  headDepartmentForFinance_list: ListValue[] = [
    { value: '1', viewValue: 'Commissioner of Commercial Tax' },
    { value: '2', viewValue: 'Director of Accounts and Treasury' },
    { value: '3', viewValue: 'Director of Pension and Provident Fund' }
  ];
  headDepartmentForLabour_list: ListValue[] = [
    { value: '1', viewValue: '	Director of Labour' },
    { value: '2', viewValue: '	Director of Industrial safety and Health' }
  ];
  headDepartmentForRevenue_list: ListValue[] = [
    { value: '1', viewValue: '	Superintendent of Stamp' }
  ];



  districtList: ListValue[] = [
    { value: '1', viewValue: 'Ahmedabad' },
    { value: '2', viewValue: 'Amreli' },
    { value: '3', viewValue: 'Anand' },
    { value: '4', viewValue: 'Aravalli-Modasa' },
    { value: '5', viewValue: 'Banasakantha – Palanpur' },
    { value: '6', viewValue: 'Bhavnagar' },
    { value: '7', viewValue: 'Bharuch' },
    { value: '8', viewValue: 'Botad' },
    { value: '9', viewValue: 'Chhota Udepur' },
    { value: '10', viewValue: 'Dahod' },
    { value: '11', viewValue: 'Dang – Ahwa' },
    { value: '12', viewValue: 'Devbhoomi Dwarka-Jamkhambhaliya' },
    { value: '13', viewValue: 'Gandhinagar' },
    { value: '14', viewValue: 'Gir somnath (Veraval)' },
    { value: '15', viewValue: 'Jamnagar' },
    { value: '16', viewValue: 'Junagadh' },
    { value: '17', viewValue: 'Kheda-Nadiad' },
    { value: '18', viewValue: 'Kutch (Bhuj)' },
    { value: '19', viewValue: 'Mahesana' },
    { value: '20', viewValue: 'Mahisagar-Lunawada' },
    { value: '21', viewValue: 'Morbi' },
    { value: '22', viewValue: 'Narmada-Rajpipala' },
    { value: '23', viewValue: 'Navsari' },
    { value: '24', viewValue: 'Panchmahal (Godhara)' },
    { value: '25', viewValue: 'Patan' },
    { value: '26', viewValue: 'Porbandar' },
    { value: '27', viewValue: 'Rajkot' },
    { value: '28', viewValue: 'Sabarkantha – Himatnagar' },
    { value: '29', viewValue: 'Surat' },
    { value: '30', viewValue: 'Surendranagar' },
    { value: '31', viewValue: 'Tapi – Vyara' },
    { value: '32', viewValue: 'Vadodara' },
    { value: '33', viewValue: 'Valsad' },
  ];


  talukaList: ListValue[] = [
    { value: '1', viewValue: 'Daskroi' },
    { value: '2', viewValue: 'Sanand' },
    { value: '3', viewValue: 'Rajula' },
    { value: '4', viewValue: 'Babra' },
    { value: '5', viewValue: 'Jambusar' },
    { value: '6', viewValue: 'Jhagadia' },
    { value: '7', viewValue: 'Mahuva' },
    { value: '8', viewValue: 'Talaja' },
    { value: '9', viewValue: 'Anjar' },
    { value: '10', viewValue: 'Bhachau' },
    { value: '11', viewValue: 'Jalod' },
    { value: '12', viewValue: 'Dhanpur' }
  ];


  purpose_list: ListValue[] = [
    { value: '1', viewValue: 'Ready Built House' },
    { value: '2', viewValue: 'Construction' },
    { value: '3', viewValue: 'Loan Purchase And Construction' },
    { value: '4', viewValue: 'Construction' },
    { value: '5', viewValue: 'Others' },
  ];

  taxPurpose_list: ListValue[] = [
    { value: '1', viewValue: 'Value Added Tax' },
    { value: '2', viewValue: 'Central Sales Tax' },
    { value: '3', viewValue: 'Entry Tax' }
  ];
  constructor(private fb: FormBuilder) { }


  ngOnInit() {
    this.departRegisform = this.fb.group({
      department: [''],
      headDepartment: [''],
      blockNo: [''],
      street: [''],
      land: [''],
      village: [''],
      district: [''],
      pincode: [''],
      stdCode: ['079'],
      taluka: [''],
      officePhoneNo: [''],
      taxNumber: [''],
      depatId: [''],
      emailID: [''],
      userName: [''],
      password: [''],
      confirmPassword: [''],
      entrcapcha: [''],
      tax: [''],
      taxPurpose: [''],
      mobile: [''],
      addr1: [''],
      addr2: [''],
      station: [''],

    });
  }

  // clears form
  clearForm() {
    this.departRegisform.reset();
  }

  // selects department
  selectDepartment(type) {
    this.departmentType = type;
  }
}


