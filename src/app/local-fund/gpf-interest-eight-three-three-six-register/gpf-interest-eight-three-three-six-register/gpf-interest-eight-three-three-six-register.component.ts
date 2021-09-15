import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material';
import { GpfInterestEightThreeThreeSixRegister } from 'src/app/model/local-fund';



@Component({
  selector: 'app-gpf-interest-eight-three-three-six-register',
  templateUrl: './gpf-interest-eight-three-three-six-register.component.html',
  styleUrls: ['./gpf-interest-eight-three-three-six-register.component.css']
})
export class GpfInterestEightThreeThreeSixRegisterComponent implements OnInit {

  // variables
  referenceNumber = 'Reference Number:';
  referenceNumberDate = 'Reference Date:';
  isSubmitted = false;
  receiptDate: number;
  isDateChanged = false;
  isRateEdited = false;
  filterElementData: GpfInterestEightThreeThreeSixRegister[] = [];
  // date
  todayDate = Date.now();
  maxDate = new Date();
  // form  group
  searchForm: FormGroup;
  // form control
  instituteTypeCtrl: FormControl = new FormControl();
  instituteNameCtrl: FormControl = new FormControl();
  monthsCtrl: FormControl = new FormControl();
  districtNameCtrl: FormControl = new FormControl();

  // lists start
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

  monthsList: ListValue[] = [
    { value: '0', viewValue: 'January' },
    { value: '1', viewValue: 'February' },
    { value: '2', viewValue: 'March' },
    { value: '3', viewValue: 'April' },
    { value: '4', viewValue: 'May' },
    { value: '5', viewValue: 'June' },
    { value: '6', viewValue: 'July' },
    { value: '7', viewValue: 'August' },
    { value: '8', viewValue: 'September' },
    { value: '9', viewValue: 'October' },
    { value: '10', viewValue: 'November' },
    { value: '11', viewValue: 'December' }
  ];

  instituteTypeList: ListValue[] = [
    { value: '0', viewValue: 'Maha Nagarpalika' },
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
    { value: '2', viewValue: 'District Panchayat - Gandhinagar' },
    { value: '3', viewValue: 'GMC' },
    { value: '4', viewValue: 'GPCB' },
    { value: '5', viewValue: 'Village Panchayat' },
    { value: '6', viewValue: 'District Panchayat - Ahmedabad' },
  ];
  // lists end

  // table data start
  elementData: GpfInterestEightThreeThreeSixRegister[] = [
    {
      id: '1',
      instituteType: 'Anand',
      instituteName: 'NagarPalika',
      openingBalanceOfTreasury: 119103634.00,
      openingBalanceOfAe: 119103634.00,
      reciptByTreasury: 481736.00,
      reciptByAe: 481736.00,
      receiptDateByAe: new Date(),
      paidAmountByTreasury: 3103927.00,
      closingBalance: 0,
      gpfAmount: 0,
      interestRate: 0,
      interestAmount: 0,
      remarks: ''
    },
  ];

  dataSource = new MatTableDataSource<GpfInterestEightThreeThreeSixRegister>(this.elementData);
  displayedColumns: string[] = [
    'id',
    'instituteType',
    'instituteName',
    'openingBalanceOfTreasury',
    'openingBalanceOfAe',
    'reciptByTreasury',
    'reciptByAe',
    'receiptDateByAe',
    'paidAmountByTreasury',
    'closingBalance',
    'gpfAmount',
    'interestRate',
    'interestAmount',
    'remarks',
    'action'
  ];
  // table data end

  // paginator
  @ViewChild(MatPaginator) paginator: MatPaginator;
  // constructor
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.searchFormData();
  }

  // form data
  searchFormData() {
    this.searchForm = this.fb.group({
      districtName: [''],
      instituteType: [''],
      instituteName: [''],
      others: [''],
      months: [''],

    });
  }

  // search data on basis of search fields
  onSearch() {
    const formVal = this.searchForm.value;
    const instituteTypeValue = formVal.instituteType;
    const instituteNameValue = formVal.instituteName;


    if (formVal.instituteType !== '' && formVal.instituteType != null) {
      const instituteType = this.instituteTypeList[instituteTypeValue].viewValue;
      this.filterElementData = this.elementData.filter(
        searchBy => searchBy.instituteType.toLowerCase() === instituteType.toLowerCase());
      this.dataSource = new MatTableDataSource<GpfInterestEightThreeThreeSixRegister>(this.filterElementData);
    }

    if (formVal.instituteName !== '' && formVal.instituteName != null) {
      const instituteName = this.instituteNameList[instituteNameValue].viewValue;
      this.filterElementData = this.elementData.filter(
        searchBy => searchBy.instituteName.toLowerCase() === instituteName.toLowerCase());
      this.dataSource = new MatTableDataSource<GpfInterestEightThreeThreeSixRegister>(this.filterElementData);
    }

    if (
      (formVal.instituteName === '' || formVal.instituteName == null) &&
      (formVal.instituteType === '' || formVal.instituteType == null)
    ) {
      this.dataSource = new MatTableDataSource<GpfInterestEightThreeThreeSixRegister>(this.elementData);
    }

  }

  // reset form
  clearForm() {
    this.searchForm.reset();
  }

  // calculate closing balance
  calculateClosingBalance(index) {
    const openingBalance = this.elementData[index].openingBalanceOfAe;
    const receiptAmount = this.elementData[index].reciptByAe;
    const paidAmount = this.elementData[index].paidAmountByTreasury;
    const closingBalance = Number(openingBalance) + Number(receiptAmount) - Number(paidAmount);

    return closingBalance;

  }

  // calculate gpf amount
  calculateGpfAmount(index) {

    const receiptDate = this.elementData[index].receiptDateByAe;
    const receiptDateByAe = new Date(receiptDate).getDate();
    const openingBalance = this.elementData[index].openingBalanceOfAe;
    const receiptAmount = this.elementData[index].reciptByAe;
    const paidAmount = this.elementData[index].paidAmountByTreasury;
    let gpfAmount = 0;

    if (this.isDateChanged) {
      if (receiptDateByAe < 10) {
        gpfAmount = Number(openingBalance) + Number(receiptAmount) - Number(paidAmount);
      } else {
        gpfAmount = Number(openingBalance) - Number(paidAmount);
      }
    } else {
      if (receiptDateByAe < 10) {
        gpfAmount = Number(openingBalance) + Number(receiptAmount) - Number(paidAmount);
      } else {
        gpfAmount = Number(openingBalance) - Number(paidAmount);
      }
    }
    return gpfAmount;

  }

  // calculate interest amount
  calculateInterestAmount(index) {
    let interestAmount = null;

    if (this.isRateEdited) {
      const gpfAmount = this.elementData[index].gpfAmount;
      const interestRate = this.elementData[index].interestRate;
      interestAmount = ((Number(gpfAmount) * Number(interestRate)) / 100) / 12;
    }
    return interestAmount;
  }

  // check is receipt date changed
  newReceiptDate() {
    this.isDateChanged = true;
    return this.isDateChanged;
  }

  // check is interest rate edited
  isInterestRateEdited() {
    this.isRateEdited = true;
    return this.isRateEdited;
  }

}
