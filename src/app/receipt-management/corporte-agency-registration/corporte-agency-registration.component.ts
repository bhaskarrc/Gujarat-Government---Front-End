import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { receiptManagement } from 'src/app/common/error-message/common-message.constants';
import { ListValue } from 'src/app/model/common-grant';

@Component({
  selector: 'app-corporte-agency-registration',
  templateUrl: './corporte-agency-registration.component.html',
  styleUrls: ['./corporte-agency-registration.component.css']
})
export class CorporteAgencyRegistrationComponent implements OnInit {
  // variables
  userRegistration: FormGroup;
  errorMessages = receiptManagement;

  // form Controls
  deparCTRL: FormControl = new FormControl();
  hodCTRL: FormControl = new FormControl();
  districtCtrl: FormControl = new FormControl();
  talukaCtrl: FormControl = new FormControl();

  // list
  department_list: ListValue[] = [
    { value: '1', viewValue: 'Home Department' },
    { value: '2', viewValue: 'Agriculture, Farmers Welfare and Co-operation Department' },
    { value: '3', viewValue: 'Health and Family Welfare Department' },
  ];


  hod_list: ListValue[] = [
    { value: '001', viewValue: 'Pay & Accounts Office Ahmedabad' },
    { value: '002', viewValue: 'Pension Payment Office, Ahmedabad' },
    { value: '003', viewValue: 'District Asst Examiner Local Fund Accounts, Ahmeda' },
    { value: '004', viewValue: 'District Treasury Office, Ahmedabad' },
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

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.userRegistration = this.fb.group({
      fullName: [''],
      district: [''],
      tin: [''],
      gsTin: [''],
      pincode: [''],
      stdCode: ['079'],
      taluka: [''],
      city: [''],
      officePhoneNo: [''],
      faxNo: [''],
      depatId: [''],
      emailID: [''],
      alternateEmailId: [''],
      userName: [''],
      password: [''],
      confirmPassword: [''],
      entrcapcha: [''],
      address1: [''],
      address2: [''],
      mobileNo: [''],
    });
  }

}


