import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import { MatTableDataSource, MatDialog, MatDialogRef } from '@angular/material';
import { NoOfParaListing, NoOfDroppedParaListing, PendingParaRegister } from 'src/app/model/local-fund';


// no of para listing component
@Component({
  selector: 'app-no-of-para-listing',
  templateUrl: 'no-of-para-listing.component.html',

})
export class NoParaListingComponent {
  constructor(public dialogRef: MatDialogRef<NoParaListingComponent>) {
  }

  // lists
  clearedThroughList: ListValue[] = [
    { value: '0', viewValue: 'Camp' },
    { value: '1', viewValue: 'Reply by Institute' },
    { value: '2', viewValue: 'Dropped' },
  ];

  // listing data
  elementData1: NoOfParaListing[] = [
    {

      paraNo: '1',
      auditParaSubject: 'Subject of Para',
      paraDescription: 'Details of the Para',
      administrativeDepartment: 'Panchayat',
      majorHead: '4434',
      objectAmount: 2635,
      recoverableAmount: 2635,
      receivedAmount: 2635,
      pendingAmount: 0,
      clearanceDate: new Date('04/30/2019'),
      clearanceDetails: 'Text',
      clearedThrough: 'By Camp',
      remarks: 'Text',
      status: 'Pending'

    },
    {

      paraNo: '2',
      auditParaSubject: 'Subject of Para',
      paraDescription: 'Details of the Para',
      administrativeDepartment: 'Panchayat',
      majorHead: '7687',
      objectAmount: 456,
      recoverableAmount: 456,
      receivedAmount: 456,
      pendingAmount: 0,
      clearanceDate: new Date('04/30/2019'),
      clearanceDetails: 'Text',
      clearedThrough: 'By Camp',
      remarks: 'Text',
      status: 'Pending'

    },
    {

      paraNo: '3',
      auditParaSubject: 'Subject of Para',
      paraDescription: 'Details of the Para',
      administrativeDepartment: 'Panchayat',
      majorHead: '8694',
      objectAmount: 28736,
      recoverableAmount: 26000,
      receivedAmount: 26000,
      pendingAmount: 2736,
      clearanceDate: new Date('04/30/2019'),
      clearanceDetails: 'Text',
      clearedThrough: 'By Camp',
      remarks: 'Text',
      status: 'Pending'

    },
    {

      paraNo: '4',
      auditParaSubject: 'Subject of Para',
      paraDescription: 'Details of the Para',
      administrativeDepartment: 'Panchayat',
      majorHead: '2637',
      objectAmount: 995874,
      recoverableAmount: 900000,
      receivedAmount: 900000,
      pendingAmount: 95874,
      clearanceDate: new Date('04/30/2019'),
      clearanceDetails: 'Text',
      clearedThrough: 'By Camp',
      remarks: 'Text',
      status: 'Pending'

    },
    {

      paraNo: '5',
      auditParaSubject: 'Subject of Para',
      paraDescription: 'Details of the Para',
      administrativeDepartment: 'Panchayat',
      majorHead: '4758',
      objectAmount: 0,
      recoverableAmount: 0,
      receivedAmount: 0,
      pendingAmount: 0,
      clearanceDate: new Date('04/30/2019'),
      clearanceDetails: 'Text',
      clearedThrough: 'By Camp',
      remarks: 'Text',
      status: 'Dropped'

    },
    {

      paraNo: '6',
      auditParaSubject: 'Subject of Para',
      paraDescription: 'Details of the Para',
      administrativeDepartment: 'Panchayat',
      majorHead: '9847',
      objectAmount: 0,
      recoverableAmount: 0,
      receivedAmount: 0,
      pendingAmount: 0,
      clearanceDate: new Date('04/30/2019'),
      clearanceDetails: 'Text',
      clearedThrough: 'By Camp',
      remarks: 'Text',
      status: 'Pending'

    },
    {

      paraNo: '7',
      auditParaSubject: 'Subject of Para',
      paraDescription: 'Details of the Para',
      administrativeDepartment: 'Panchayat',
      majorHead: '3465',
      objectAmount: 36547,
      recoverableAmount: 36547,
      receivedAmount: 36547,
      pendingAmount: 0,
      clearanceDate: new Date('04/30/2019'),
      clearanceDetails: 'Text',
      clearedThrough: 'By Camp',
      remarks: 'Text',
      status: 'Pending'

    },
    {

      paraNo: '8',
      auditParaSubject: 'Subject of Para',
      paraDescription: 'Details of the Para',

      administrativeDepartment: 'Panchayat',
      majorHead: '8567',
      objectAmount: 98352,
      recoverableAmount: 98300,
      receivedAmount: 98300,
      pendingAmount: 52,
      clearanceDate: new Date('04/30/2019'),
      clearanceDetails: 'Text',
      clearedThrough: 'By Camp',
      remarks: 'Text',
      status: 'Pending'

    },

    {

      paraNo: '9',
      auditParaSubject: 'Subject of Para',
      paraDescription: 'Details of the Para',

      administrativeDepartment: 'Panchayat',
      majorHead: '3756',
      objectAmount: 0,
      recoverableAmount: 0,
      receivedAmount: 0,
      pendingAmount: 0,
      clearanceDate: new Date('04/30/2019'),
      clearanceDetails: 'Text',
      clearedThrough: 'By Camp',
      remarks: 'Text',
      status: 'Pending'

    },

    {

      paraNo: '10',
      auditParaSubject: 'Subject of Para',
      paraDescription: 'Details of the Para',

      administrativeDepartment: 'Panchayat',
      majorHead: '5764',
      objectAmount: 0,
      recoverableAmount: 0,
      receivedAmount: 0,
      pendingAmount: 0,
      clearanceDate: new Date(2019, 3, 30),
      clearanceDetails: 'Text',
      clearedThrough: 'By Camp',
      remarks: 'Text',
      status: 'Dropped'

    },

  ];
  dataSource = new MatTableDataSource<NoOfParaListing>(this.elementData1);
  displayedColumns: string[] = [
    'serialNo',
    'paraNo',
    'auditParaSubject',
    'paraDescription',
    'administrativeDepartment',
    'majorHead',
    'objectAmount',
    'recoverableAmount',
    'receivedAmount',
    'pendingAmount',
    'clearanceDate',
    'clearanceDetails',
    'clearedThrough',
    'remarks',
    'status',
  ];
  // listing data end

  // closes the dialog box
  close() {
    this.dialogRef.close();
  }
}

// no of dropped para listing component
@Component({

  selector: 'app-no-of-dropped-para-listing',
  templateUrl: 'no-of-dropped-para-listing.component.html',

})
export class NoOfDroppedParaListingComponent {
  constructor(public dialogRef: MatDialogRef<NoOfDroppedParaListingComponent>) {
  }

  // list
  clearedThroughList: ListValue[] = [
    { value: '0', viewValue: 'Camp' },
    { value: '1', viewValue: 'Reply by Institute' },
    { value: '2', viewValue: 'Dropped' },
  ];

  // listing data
  elementData1: NoOfDroppedParaListing[] = [

    {
      serialNo: '5',
      paraNo: '5',
      auditParaSubject: 'Subject of Para',
      paraDescription: 'Details of the Para',

      administrativeDepartment: 'Panchayat',
      majorHead: '4758',
      objectAmount: 0,
      recoverableAmount: 0,
      receivedAmount: 0,
      pendingAmount: 0,
      clearanceDate: new Date('04/30/2019'),
      clearanceDetails: 'Text',
      clearedThrough: 'By Camp',
      remarks: 'Text',
      status: 'Dropped'

    },
    {
      serialNo: '10',
      paraNo: '10',
      auditParaSubject: 'Subject of Para',
      paraDescription: 'Details of the Para',

      administrativeDepartment: 'Panchayat',
      majorHead: '5764',
      objectAmount: 0,
      recoverableAmount: 0,
      receivedAmount: 0,
      pendingAmount: 0,
      clearanceDate: new Date('04/30/2019'),
      clearanceDetails: 'Text',
      clearedThrough: 'By Camp',
      remarks: 'Text',
      status: 'Dropped'

    },

  ];
  dataSource = new MatTableDataSource<NoOfDroppedParaListing>(this.elementData1);
  displayedColumns: string[] = [
    'serialNo',
    'paraNo',
    'auditParaSubject',
    'paraDescription',
    'administrativeDepartment',
    'majorHead',
    'objectAmount',
    'recoverableAmount',
    'receivedAmount',
    'pendingAmount',
    'clearanceDate',
    'clearanceDetails',
    'clearedThrough',
    'remarks',
    'status',
  ];
  // listing data end

  // close the dialog box
  close() {
    this.dialogRef.close();
  }
}


// no of pending para listing component
@Component({

  selector: 'app-no-of-pending-para-listing',
  templateUrl: 'no-of-pending-para-listing.component.html',

})
export class NoOfPendingParaListingComponent {
  constructor(public dialogRef: MatDialogRef<NoOfPendingParaListingComponent>) {
  }

  // list
  clearedThroughList: ListValue[] = [
    { value: '0', viewValue: 'Camp' },
    { value: '1', viewValue: 'Reply by Institute' },
    { value: '2', viewValue: 'Dropped' },
  ];

  // listing data
  elementData1: NoOfDroppedParaListing[] = [
    {
      serialNo: '1',
      paraNo: '1',
      auditParaSubject: 'Subject of Para',
      paraDescription: 'Details of the Para',

      administrativeDepartment: 'Panchayat',
      majorHead: '4434',
      objectAmount: 2635,
      recoverableAmount: 2635,
      receivedAmount: 2635,
      pendingAmount: 0,
      clearanceDate: new Date('04/30/2019'),
      clearanceDetails: 'Text',
      clearedThrough: 'By Camp',
      remarks: 'Text',
      status: 'Pending'

    },
    {
      serialNo: '2',
      paraNo: '2',
      auditParaSubject: 'Subject of Para',
      paraDescription: 'Details of the Para',

      administrativeDepartment: 'Panchayat',
      majorHead: '7687',
      objectAmount: 456,
      recoverableAmount: 456,
      receivedAmount: 456,
      pendingAmount: 0,
      clearanceDate: new Date('04/30/2019'),
      clearanceDetails: 'Text',
      clearedThrough: 'By Camp',
      remarks: 'Text',
      status: 'Pending'

    },
    {
      serialNo: '3',
      paraNo: '3',
      auditParaSubject: 'Subject of Para',
      paraDescription: 'Details of the Para',

      administrativeDepartment: 'Panchayat',
      majorHead: '8694',
      objectAmount: 28736,
      recoverableAmount: 26000,
      receivedAmount: 26000,
      pendingAmount: 2736,
      clearanceDate: new Date('04/30/2019'),
      clearanceDetails: 'Text',
      clearedThrough: 'By Camp',
      remarks: 'Text',
      status: 'Pending'

    },
    {
      serialNo: '4',
      paraNo: '4',
      auditParaSubject: 'Subject of Para',
      paraDescription: 'Details of the Para',
      administrativeDepartment: 'Panchayat',
      majorHead: '2637',
      objectAmount: 995874,
      recoverableAmount: 900000,
      receivedAmount: 900000,
      pendingAmount: 95874,
      clearanceDate: new Date('04/30/2019'),
      clearanceDetails: 'Text',
      clearedThrough: 'By Camp',
      remarks: 'Text',
      status: 'Pending'

    },
    {
      serialNo: '6',
      paraNo: '6',
      auditParaSubject: 'Subject of Para',
      paraDescription: 'Details of the Para',
      administrativeDepartment: 'Panchayat',
      majorHead: '9847',
      objectAmount: 0,
      recoverableAmount: 0,
      receivedAmount: 0,
      pendingAmount: 0,
      clearanceDate: new Date('04/30/2019'),
      clearanceDetails: 'Text',
      clearedThrough: 'By Camp',
      remarks: 'Text',
      status: 'Pending'

    },
    {
      serialNo: '7',
      paraNo: '7',
      auditParaSubject: 'Subject of Para',
      paraDescription: 'Details of the Para',
      administrativeDepartment: 'Panchayat',
      majorHead: '3465',
      objectAmount: 36547,
      recoverableAmount: 36547,
      receivedAmount: 36547,
      pendingAmount: 0,
      clearanceDate: new Date('04/30/2019'),
      clearanceDetails: 'Text',
      clearedThrough: 'By Camp',
      remarks: 'Text',
      status: 'Pending'

    },
    {
      serialNo: '8',
      paraNo: '8',
      auditParaSubject: 'Subject of Para',
      paraDescription: 'Details of the Para',
      administrativeDepartment: 'Panchayat',
      majorHead: '8567',
      objectAmount: 98352,
      recoverableAmount: 98300,
      receivedAmount: 98300,
      pendingAmount: 52,
      clearanceDate: new Date('04/30/2019'),
      clearanceDetails: 'Text',
      clearedThrough: 'By Camp',
      remarks: 'Text',
      status: 'Pending'

    },

    {
      serialNo: '9',
      paraNo: '9',
      auditParaSubject: 'Subject of Para',
      paraDescription: 'Details of the Para',
      administrativeDepartment: 'Panchayat',
      majorHead: '3756',
      objectAmount: 0,
      recoverableAmount: 0,
      receivedAmount: 0,
      pendingAmount: 0,
      clearanceDate: new Date('04/30/2019'),
      clearanceDetails: 'Text',
      clearedThrough: 'By Camp',
      remarks: 'Text',
      status: 'Pending'

    },

  ];
  dataSource = new MatTableDataSource<NoOfDroppedParaListing>(this.elementData1);
  displayedColumns: string[] = [
    'serialNo',
    'paraNo',
    'auditParaSubject',
    'paraDescription',
    'administrativeDepartment',
    'majorHead',
    'objectAmount',
    'recoverableAmount',
    'receivedAmount',
    'pendingAmount',
    'clearanceDate',
    'clearanceDetails',
    'clearedThrough',
    'remarks',
    'status',

  ];
  // listing data end

  // closes the pop-up
  close() {
    this.dialogRef.close();
  }
}



// pending para register
@Component({
  selector: 'app-pending-para-register',
  templateUrl: './pending-para-register.component.html',
  styleUrls: ['./pending-para-register.component.css']
})
export class PendingParaRegisterComponent implements OnInit {

  // variables
  referenceNumber = 'Reference Number:';
  referenceNumberDate = 'Reference Date:';
  filterElementData: PendingParaRegister[];
  // date
  todayDate = Date.now();
  // form group
  searchForm: FormGroup;
  // form control
  financialYearCtrl: FormControl = new FormControl();
  instituteTypeCtrl: FormControl = new FormControl();
  instituteNameCtrl: FormControl = new FormControl();
  districtNameCtrl: FormControl = new FormControl();

  // lists start
  financialYearList: ListValue[] = [
    { value: '0', viewValue: '2017-18' },
    { value: '1', viewValue: '2018-19' },
    { value: '2', viewValue: '2019-20' },
    { value: '3', viewValue: '2020-21' },
    { value: '4', viewValue: '2021-22' },
    { value: '5', viewValue: '2022-23' },
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

  instituteTypeList: ListValue[] = [
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
    { value: '2', viewValue: 'District Panchayat - Gandhinagar' },
    { value: '3', viewValue: 'GMC' },
    { value: '4', viewValue: 'GPCB' },
    { value: '5', viewValue: 'Village Panchayat' },
    { value: '6', viewValue: 'District Panchayat - Ahmedabad' },
  ];
  // lists end

  // table data start
  elementData: PendingParaRegister[] = [
    {
      district: 'Gandhinagar',
      auditYear: '2019-20',
      instituteType: 'Municipal Corporation',
      instituteName: 'GMC',
      paraNo: 10,
      droppedPara: 2,
      pendingPara: 6
    }
  ];
  dataSource = new MatTableDataSource<PendingParaRegister>(this.elementData);
  displayedColumns: string[] = [
    'serialNo',
    'district',
    'auditYear',
    'instituteType',
    'instituteName',
    'paraNo',
    'droppedPara',
    'pendingPara',
  ];
  // table data end

  // constructor
  constructor(private fb: FormBuilder, public dialog: MatDialog) { }

  ngOnInit() {
    this.searchForm = this.fb.group({
      financialYear: [''],
      districtName: [''],
      instituteType: [''],
      instituteName: [''],
    });
  }
  // opens no para listing dialog
  paraNo(paraIndex) {
    const dialogRef = this.dialog.open(NoParaListingComponent, {
      width: '1200px'
    });

  }
  // opens dropped para listing dialog
  selectDroppedPara(droppedIndex) {
    const dialogRef = this.dialog.open(NoOfDroppedParaListingComponent, {
      width: '1200px'
    });
  }

  // opens pending para listing dialog
  selectPendingPara(pendingIndex) {
    const dialogRef = this.dialog.open(NoOfPendingParaListingComponent, {
      width: '1200px'
    });
  }

  // search data on basis of search fields
  onSearch() {

    const formVal = this.searchForm.value;
    const instituteTypeValue = formVal.instituteType;
    const instituteNameValue = formVal.instituteName;
    const districtNameValue = formVal.districtName;
    if (formVal.districtName !== '' && formVal.districtName != null) {

      const districtName = this.districtNameList[districtNameValue].viewValue;
      this.filterElementData = this.elementData.filter(
        searchBy => searchBy.district.toLowerCase() === districtName.toLowerCase());
      this.dataSource = new MatTableDataSource<PendingParaRegister>(this.filterElementData);

    }

    if (formVal.instituteType !== '' && formVal.instituteType != null) {

      const instituteType = this.instituteTypeList[instituteTypeValue].viewValue;
      this.filterElementData = this.elementData.filter(
        searchBy => searchBy.instituteType.toLowerCase() === instituteType.toLowerCase());
      this.dataSource = new MatTableDataSource<PendingParaRegister>(this.filterElementData);

    }

    if (formVal.instituteName !== '' && formVal.instituteName != null) {
      const instituteName = this.instituteNameList[instituteNameValue].viewValue;
      this.filterElementData = this.elementData.filter(
        searchBy => searchBy.instituteName.toLowerCase() === instituteName.toLowerCase());
      this.dataSource = new MatTableDataSource<PendingParaRegister>(this.filterElementData);

    }

    if (
      (formVal.instituteName === '' || formVal.instituteName == null) &&
      (formVal.instituteType === '' || formVal.instituteType == null) &&
      (formVal.districtName === '' || formVal.districtName == null)


    ) {
      this.dataSource = new MatTableDataSource<PendingParaRegister>(this.elementData);
    }

  }

  // reset form
  clearForm() {
    this.searchForm.reset();
  }

}


