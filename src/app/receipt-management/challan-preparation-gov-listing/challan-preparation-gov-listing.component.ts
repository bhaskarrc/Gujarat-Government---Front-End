import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { ListValue } from 'src/app/model/common-grant';
import { CreateChallanList } from 'src/app/model/receipt-management';


@Component({
  selector: 'app-challan-preparation-gov-listing',
  templateUrl: './challan-preparation-gov-listing.component.html',
  styleUrls: ['./challan-preparation-gov-listing.component.css']
})
export class ChallanPreparationGovListingComponent implements OnInit {
  // variables
  receiptManegmentForm: FormGroup;
  departmentType = '1';
  // form Controls
  purposeCtrl: FormControl = new FormControl();
  departCtrl: FormControl = new FormControl();
  headdepartCtrl: FormControl = new FormControl();
  districtCtrl: FormControl = new FormControl();
  tresuryCtrl: FormControl = new FormControl();
  subTresuryCtrl: FormControl = new FormControl();
  ofcCTRL: FormControl = new FormControl();
  depositeCtrl: FormControl = new FormControl();
  taxPurposeCtrl: FormControl = new FormControl();
  // lists
  purpose_list: ListValue[] = [
    { value: '1', viewValue: 'Ready Built House' },
    { value: '2', viewValue: 'Construction' },
    { value: '3', viewValue: 'Loan Purchase And Construction' },
    { value: '4', viewValue: 'Construction' },
    { value: '5', viewValue: 'Others' },
  ];

  department_list: ListValue[] = [
    { value: '1', viewValue: 'Finanace Department' },
    { value: '2', viewValue: 'Labour Department' },
    { value: '3', viewValue: 'Revenue Department' }
  ];

  // head department lists
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


  Treasury_List: ListValue[] = [
    { value: '1', viewValue: 'Treasury Office' },
    { value: '2', viewValue: 'Sub Treasury Office' },
    { value: '3', viewValue: 'Pay & Accounts Office' },
    { value: '4', viewValue: 'Pension Payment Office' },
    { value: '5', viewValue: 'Pay Verification Unit' }
  ];

  subTresury_list: ListValue[] = [
    { value: '1', viewValue: 'District Treasury Office,Bhuj' },
    { value: '2', viewValue: 'Sub Treasury Office, Anjar ,Bhuj' },
    { value: '3', viewValue: 'Sub Treasury Office, Rahpar ,Bhuj' },
    { value: '4', viewValue: 'Sub Treasury Office, Mundra ,Bhuj' },
    { value: '5', viewValue: 'Sub Treasury Office, Nalia ,Bhuj' },
  ];


  Officelocation_list: ListValue[] = [
    { value: 'Ahemdabad', viewValue: 'Rajkot' },
    { value: 'Gandhinagar', viewValue: 'Gandhinagar' },
  ];


  deposite_list: ListValue[] = [
    { value: '1', viewValue: 'PD/PLA' },
    { value: '2', viewValue: 'EMD' }
  ];

  taxPurpose_list: ListValue[] = [
    { value: '1', viewValue: 'Value Added Tax' },
    { value: '2', viewValue: 'Central Sales Tax' },
    { value: '3', viewValue: 'Entry Tax' }
  ];
  // table data
  Element_Data: CreateChallanList[] = [
    {
      nameOfpayer: 'Mr. P P Patel',
      purposeCode: 'Value Added Tax',
      depaCode: 'Finance Department',
      headOfdepa: 'District Treasury Office, Ahmedabad',
      district: 'Ahmedabad',
      tresuryOfc: 'District Treasury Office, Ahmedabad',
      subTresury: '',
      ofc: 'Ghatak 1',
      pdpla: '',
      mjrHead: '0040',
      subMjrHead: '00',
      minorHead: '001',
      subHead: '01',
      amt: '10,000.00',
      amtInword: 'Ten Thousand'

    },
  ];
  dataSourceClhallanPre = new MatTableDataSource<CreateChallanList>(this.Element_Data);
  displayedColumnschallnPreListing: string[] = [
    'position',
    'nameOfpayer',
    'purposeCode',
    'depaCode',
    'tresuryOfc',
    'ofc',
    'pdpla',
    'mjrHead',
    'subMjrHead',
    'minorHead',
    'subHead',
    'amt',
    'action',
  ];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.dataSourceClhallanPre.sort = this.sort;
    this.dataSourceClhallanPre.paginator = this.paginator;
    this.receiptManegmentForm = this.fb.group({
      nameOfprayer: [''],
      purposeCode: [''],
      department: [''],
      headDepartment: [''],
      district: [''],
      tresury: [''],
      subTresury: [''],
      ofc: [''],
      deposiyeType: [''],
      pdpala: [''],
      mjrHead: [''],
      subMjrHead: [''],
      minorHead: [''],
      subHead: [''],
      amt: [''],
      taxPurpose: ['']
    });
  }
  // selects department type
  selectDepartment(type) {
    this.departmentType = type;
  }

}
