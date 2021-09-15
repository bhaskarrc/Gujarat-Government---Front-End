import { Component, OnInit, ElementRef, Inject } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import { MatTableDataSource, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DppfgpfMessage } from 'src/app/common/error-message/common-message.constants';
import { DialogData } from 'src/app/model/standing-charge';
import { SelectionModel } from '@angular/cdk/collections';
import { WorkflowDetailsAuditorMappingComponent } from '../workflow-details-auditor-mapping/workflow-details-auditor-mapping.component';
import { AccountGenerationDialog } from 'src/app/model/dppfgpf';

@Component({
  selector: 'app-outward-details',
  templateUrl: './outward-details.component.html',
  styleUrls: ['./outward-details.component.css']
})
export class OutwardDetailsComponent implements OnInit {
  // Variable
  errorMessage;
  // Date
  todayDate = Date.now();
  maxDate = new Date();
  // Form Group
  public gpfOutwardDetailsForm: FormGroup;
  // FOrm COntrol
  typeOfInwardCtrl: FormControl = new FormControl();
  typeOfOutwardToCtrl: FormControl = new FormControl();
  typeOfStateCtrl: FormControl = new FormControl();
  typeOfDistrictCtrl: FormControl = new FormControl();
  typeOfTalukaCtrl: FormControl = new FormControl();
  typeOfDeliveryModeCtrl: FormControl = new FormControl();
  typeOfPostToCtrl: FormControl = new FormControl();

  // List
  classTypeOfInward: ListValue[] = [
    { value: '1', viewValue: 'Top Schedule ' },
    { value: '2', viewValue: ' Request For Account Generation' },
    { value: '3', viewValue: 'Debit/Credit Correction Entry' },
    { value: '4', viewValue: 'AG CA Figure ' },
    { value: '5', viewValue: 'AGTE Misclassified Entry' },
  ];

  classTypeOfDeliveryMode: ListValue[] = [
    { value: '1', viewValue: 'Courier ' },
    { value: '2', viewValue: 'Speed Post' },
    { value: '3', viewValue: 'Post' },
    { value: '4', viewValue: 'Hand Delivery' },
    { value: '5', viewValue: 'Other' },

  ];


  classTypeOfOutwardTo: ListValue[] = [
    { value: '1', viewValue: 'Treasury/PAO ' },
    { value: '2', viewValue: 'DDO' },
    { value: '3', viewValue: 'AO' },
    { value: '4', viewValue: 'AG ' },
    { value: '5', viewValue: 'Other' },

  ];

  classTypeOfState: ListValue[] = [
    { value: '1', viewValue: 'Andaman and Nicobar Island ' },
    { value: '2', viewValue: 'Andhra Pradesh' },
    { value: '3', viewValue: 'Arunachal Pradesh ' },
    { value: '4', viewValue: 'Assam' },
    { value: '5', viewValue: 'Bihar ' },
    { value: '6', viewValue: 'Chandigarh' },
    { value: '7', viewValue: 'Chhattisgarh ' },
    { value: '8', viewValue: 'Delhi' },
    { value: '9', viewValue: 'Goa ' },
    { value: '10', viewValue: 'Gujarat' },
    { value: '11', viewValue: 'Haryana ' },
    { value: '12', viewValue: 'Jharkhand' },

  ];

  classTypeOfDistrict: ListValue[] = [
    { value: '1', viewValue: 'Ahmedabad ' },
    { value: '2', viewValue: 'Amreli' },
    { value: '3', viewValue: 'Anand ' },
    { value: '4', viewValue: 'Assam' },
    { value: '5', viewValue: 'Bharuch ' },
    { value: '8', viewValue: 'Gandhinagar' },
    { value: '9', viewValue: 'Kheda ' },
  ];


  classTypeOfTaluka: ListValue[] = [
    { value: '1', viewValue: 'Dahegam ' },
    { value: '2', viewValue: 'Gandhinagar' },
    { value: '3', viewValue: 'Kalol ' },
    { value: '4', viewValue: 'Manasa' },

  ];

  classTypeOfPostTo: ListValue[] = [
    { value: '1', viewValue: 'Courier ' },
    { value: '2', viewValue: 'Post' },
    { value: '3', viewValue: 'Speed Post ' },
    { value: '4', viewValue: 'Hand Delivery Name' },

  ];
  // Table Source
  recoveryColumn = ['head', 'amount', 'action'];
  recoveryDataSource = new MatTableDataSource([]);

  fileData: any;

  constructor(private fb: FormBuilder, private el: ElementRef, public dialog: MatDialog) { }

  ngOnInit() {
    this.errorMessage = DppfgpfMessage;


    this.gpfOutwardDetailsForm = this.fb.group({

      inwardNumber: '',
      dateInward: '',
      letterNumber: '',
      letterDate: '',
      typeOfInward: '',
      other: '',
      dateOutward: new Date(),
      deliveryMode: '',
      post: '',
      outwardTo: '',
      state: '',
      district: '',
      taluka: '',
      pincode: '',
      address: '',
      remarks: '',
      referenceNo: '',
      handDelivery: '',
      otherDeliveryMode: '',
    });

  }

  workflowDetails() {
    const dialogRef = this.dialog.open(WorkflowDetailsAuditorMappingComponent, {
      width: '1200px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  resetForm() {
    this.gpfOutwardDetailsForm.reset();
  }

  openInwardDialog(event?) {
    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(OutwardDetailsDialog, {
      width: '1200px',
      height: 'auto',
    }
    );
    dialogRef.afterClosed().subscribe(result => {

      this.gpfOutwardDetailsForm.patchValue({
        inwardNumber: '11/02230/3456',
        treasuryPao: 'Treasury',
        letterNumber: '123/45',
        letterDate: this.formatDate(new Date()),
        typeOfInward: '1',
        other: '123',
      });

      this.gpfOutwardDetailsForm.get('dateInward').patchValue(this.formatDate(new Date()));

    });


  }

  enterInwardNo() {
    this.gpfOutwardDetailsForm.patchValue({
      inwardNumber: '11/02230/3456',
      treasuryPao: 'Treasury',
      letterNumber: '123/45',
      letterDate: this.formatDate(new Date()),
      typeOfInward: '1',
      other: '123',
    });

    this.gpfOutwardDetailsForm.get('dateInward').patchValue(this.formatDate(new Date()));

  }
  private formatDate(date) {
    const d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();
    // tslint:disable-next-line: curly
    if (month.length < 2) month = '0' + month;
    // tslint:disable-next-line: curly
    if (day.length < 2) day = '0' + day;
    return [year, month, day].join('-');
  }
}



@Component({
  selector: 'app-outward-details-dialog',
  templateUrl: './outward-details-dialog.html',
  styleUrls: ['./outward-details.component.css']
})
// tslint:disable-next-line: component-class-suffix
export class OutwardDetailsDialog implements OnInit {
  maxDate = new Date();
  searchVariable = false;
  accountDetailDialogForm: FormGroup;
  typeOfInwardCtrl: FormControl = new FormControl();
  typeOfDistrictCtrl: FormControl = new FormControl();
  typeOfTreasuryPaoCtrl: FormControl = new FormControl();
  typeOfYearCtrl: FormControl = new FormControl();
  typeOfMonthCtrl: FormControl = new FormControl();

  classTypeOfTreasuryPao: ListValue[] = [
    { value: '1', viewValue: 'District Treasury Office,Gandhinagar ' },
    { value: '2', viewValue: 'District Treasury Office,Gandhinagar' },


  ];

  classTypeOfDistrict: ListValue[] = [
    { value: '1', viewValue: 'Ahmedabad ' },
    { value: '2', viewValue: 'Gandhinagar' },
    { value: '3', viewValue: 'Vadodra' },

  ];


  classTypeOfInward: ListValue[] = [
    { value: '1', viewValue: 'Top Schedule ' },
    { value: '2', viewValue: 'Class 4/DW/WC' },
    { value: '3', viewValue: 'Final Payment Register' },
    { value: '4', viewValue: 'Transfer Balance' },
    { value: '5', viewValue: ' Supplementary Payment Transfer' },
    { value: '6', viewValue: 'AGCA ' },
    { value: '7', viewValue: 'AGTA Misclassified Entry' },

  ];

  classTypeOfMonth: ListValue[] = [
    { value: '1', viewValue: 'January' },
    { value: '2', viewValue: 'February' },
    { value: '3', viewValue: 'March' },
    { value: '4', viewValue: 'April' },
    { value: '5', viewValue: 'May' },
    { value: '6', viewValue: 'June' },
    { value: '7', viewValue: 'July' },
    { value: '8', viewValue: 'August' },
    { value: '9', viewValue: 'September' },
    { value: '10', viewValue: 'October' },
    { value: '11', viewValue: 'November' },
    { value: '12', viewValue: 'December' },

  ];
  classTypeOfYear: ListValue[] = [
    { value: '1', viewValue: '2020 ' },
    { value: '2', viewValue: '2021' },
    { value: '3', viewValue: '2022' },
    { value: '1', viewValue: '2023 ' },
    { value: '2', viewValue: '2024' },
    { value: '3', viewValue: '2025' },

  ];
  selection = new SelectionModel<AccountGenerationDialog>(true, []);

  Element_Data: AccountGenerationDialog[] = [
    {
      inwardNo: '32345/01/2019',
      inwardDate: '12/01/2020',
      typeOfInward: 'Class 4/DW/WC',
      district: 'Mahisagar',
      treasuryPao: 'Raman Singh',
      year: '2020',
      month: 'January',
    },
  ];

  displayedColumns: any[] = [
    'select',
    'inwardNo',
    'inwardDate',
    'typeOfInward',
    'district',
    'treasuryPao',
    'year',
    'month',

  ];

  dataSource = new MatTableDataSource<AccountGenerationDialog>(this.Element_Data);

  constructor(

    private fb: FormBuilder,
    public dialogRef: MatDialogRef<OutwardDetailsDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  ngOnInit() {
    this.accountDetailDialogForm = this.fb.group({
      inwardNumber: '',
      inwardDate: '',
      typeOfInward: '',
      district: '',
      treasuryPao: '',
      year: '',
      month: '',

    });
  }

  okClick($event?) {
    this.dialogRef.close();
  }



  resetForm() {
    this.accountDetailDialogForm.reset();
  }

  checkboxLabel(row?: AccountGenerationDialog): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} `;
  }
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  searchInwardNo() {
    if (this.accountDetailDialogForm.controls.inwardNumber.value.length > 0) {
      this.searchVariable = true;
    }
  }

}


