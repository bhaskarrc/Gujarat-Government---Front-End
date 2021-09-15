import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { CreateAcList } from 'src/app/model/receipt-management';
import { ListValue } from 'src/app/model/common-grant';

@Component({
  selector: 'app-registration-listing',
  templateUrl: './registration-listing.component.html',
  styleUrls: ['./registration-listing.component.css']
})
export class RegistrationListingComponent implements OnInit {
  // variables
  receiptManegmentForm: FormGroup;
  departmentType = '1';

  // form controls
  deparCtrl: FormControl = new FormControl();
  headdepartCtrl: FormControl = new FormControl();
  districtCtrl: FormControl = new FormControl();
  talukaCtrl: FormControl = new FormControl();
  purposeCtrl: FormControl = new FormControl();
  statusCtrl: FormControl = new FormControl();

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
    { value: '1', viewValue: 'Value Added Tax' },
    { value: '2', viewValue: 'Central Sales Tax' },
    { value: '3', viewValue: 'Entry Tax' }
  ];


  status_list: ListValue[] = [
    { value: '1', viewValue: 'Approval in progress' },
    { value: '2', viewValue: 'Approved' },
    { value: '3', viewValue: 'Return' },
  ];


  // table data
  Element_Data: CreateAcList[] = [
    {
      taxAuthority: '',
      deparName: 'Finance Department',
      hodName: 'Commisioner of commercial tax',
      district: 'Ahmedabad',
      taluka: '',
      taxPurpose: 'Value Added tax',

    },
  ];
  dataSourceCloseAc = new MatTableDataSource<CreateAcList>(this.Element_Data);
  displayedColumnscloseAcListing: string[] = [
    'position',
    'taxAuthority',
    'deparName',
    'hodName',
    'district',
    'taluka',
    'taxPurpose',
    'action',
  ];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.dataSourceCloseAc.sort = this.sort;
    this.dataSourceCloseAc.paginator = this.paginator;
    this.receiptManegmentForm = this.fb.group({
      department: [''],
      headDepartment: [''],
      taxAuthority: [''],
      district: [''],
      taluka: [''],
      taxPurpose: [''],
      status: [''],

    });
  }

  // selects department
  selectDepartment(type) {
    this.departmentType = type;
  }
}
