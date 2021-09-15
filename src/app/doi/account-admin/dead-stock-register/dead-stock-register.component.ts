import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { doiMessage } from 'src/app/common/error-message/common-message.constants';
import { ListValue } from 'src/app/model/common-grant';
import { CommonListing } from 'src/app/model/common-listing';
import { ToastrService } from 'ngx-toastr';
import { AttachmentData } from 'src/app/model/doiModel';
export interface DeadStockRegister {
  equipmentName: string;
  purchaseOrderNo: string;
  purchaseOrderDate: string;
  quantity: string;
  amt: string;
  finalDisposeQuantity: string;
  receiverName: string;
  disposaltype: string[];
  orderNo: string;
  receiverAmt: string;
  date: string;
  remainingQuantity: string;
  serialNo: string[];
  status: string;
  voucherDate: string;
  disposeItemSerialNo: string[];
  amtDepositToGovt: string;
  depositAmtDate: string;
  amtOfRemainingEquip: string;
}
@Component({
  selector: 'app-dead-stock-register',
  templateUrl: './dead-stock-register.component.html',
  styleUrls: ['./dead-stock-register.component.css']
})
export class DeadStockRegisterComponent implements OnInit {
  // Date
  todayDate = Date.now();
  maxDate = new Date();
  // Variable
  isSubmitted = false;
  selectedindex: number;
  errorMessage = doiMessage;
  // Form Group
  deadStockRegisterForm: FormGroup;
  // Form COntrol
  equipmentNameCtrl: FormControl = new FormControl();
  attachmentTypeCode: any[] = [
    { value: '01', viewValue: 'Supporting Document' },
    { value: '02', viewValue: 'Sanction Order' },
    { value: '03', viewValue: 'Others' },
    // { type: 'view' }
  ];



  remainingEquip = 0;
  remainingEquipAmt = 0.00;

  serialNoList_1: string[] = ['2A2958873', '2A2958874', '2A2958875'];
  serialNoList_2: string[] = ['1214', '1215', '1989', '2334'];
  disposalList: string[] = ['1214', '1989'];
  disposalTypeList: string[] = ['Not Working and End-of-Life', 'Not Working and End-of-Life'];
  fileBrowseIndex: number;
  Element_Data: DeadStockRegister[] = [
    {
      amt: '1,20,000.00', date: '', disposaltype: [], equipmentName: 'Hp Computer', finalDisposeQuantity: '',
      orderNo: '', purchaseOrderDate: '12-Dec-2019', purchaseOrderNo: 'IT-COMT/2019-20/22345', quantity: '3', receiverAmt: '',
      receiverName: '', remainingQuantity: '', status: '', serialNo: this.serialNoList_1, voucherDate: '',
      disposeItemSerialNo: [], amtDepositToGovt: '', amtOfRemainingEquip: '', depositAmtDate: ''
    },
    {
      amt: '8,600.00', date: '20-Nov-2019', disposaltype: this.disposalTypeList, equipmentName: 'FAN', finalDisposeQuantity: '2',
      orderNo: '1267', purchaseOrderDate: '16-Nov-2009', purchaseOrderNo: 'ADMIN/2019-20/5647', quantity: '4', receiverAmt: '700.00',
      receiverName: 'M/S. Earth Electronics', remainingQuantity: '2', status: '', serialNo: this.serialNoList_2, voucherDate: '16-Nov-2019'
      , disposeItemSerialNo: this.disposalList, depositAmtDate: '', amtOfRemainingEquip: '4,300.00', amtDepositToGovt: ''
    }
  ];
  equipmentName_list: ListValue[] = [];
  dataSource = new MatTableDataSource<DeadStockRegister>(this.Element_Data);
  columns: string[] = ['position', 'equipmentName', 'purchaseOrderNo', 'purchaseOrderDate', 'quantity', 'serialNo', 'amt',
    'finalDisposeQuantity', 'disposeItemSerialNo', 'disposaltype', 'orderNo', 'voucherDate', 'receiverName', 'receiverAmt',
    'date', 'amtDepositToGovt', 'depositAmtDate', 'remainingQuantity', 'amtOfRemainingEquip', 'status', 'action'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private fb: FormBuilder, private el: ElementRef, private toastr: ToastrService) { }

  ngOnInit() {
    this.deadStockRegisterForm = this.fb.group({
      equipmentName: [''],
      purchaseOrderNo: [''],
      purchaseOrderDate: [''],
      quantity: [''],
      amt: [''],
      finalDisposeQuantity: [''],
      receiverName: [''],
      disposaltype: [''],
      orderNo: [''],
      receiverAmt: [''],
      date: [''],
      remainingQuantity: this.remainingEquip,
      serialNo: [''],
      remarks: [''],
      voucherDate: [''],
      purchaserName: [''],
      amtDepositToGvot: [''],
      amtDepositDate: [''],
      amtOfRemainingEquip: ['']
    });
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.deadStockRegisterForm.valueChanges.subscribe(val => {
      this.remainingEquip =
        Number(this.deadStockRegisterForm.get('quantity').value) - Number(this.deadStockRegisterForm.get('finalDisposeQuantity').value);

      this.remainingEquipAmt =
        Number(this.deadStockRegisterForm.get('amt').value) - Number(this.deadStockRegisterForm.get('receiverAmt').value);
    });
  }

  openFileSelector(index) {
    this.el.nativeElement.querySelector('#fileBrowse').click();
    this.fileBrowseIndex = index;
  }

  onBrowseSelectChange() { }

  decimalKeyPress(event: any) {
    // const pattern = /^(100|[1-9]?[0-9][A-Za-z])$/;

    const pattern = /^([A-Za-z]|[0-9]|_)+$/;

    const inputChar = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    console.log('event.target.value', event.target.value);
    console.log('tst', pattern.test(event.target.value));

    let tempstr = event.target.value;
    tempstr += inputChar;

    if (!pattern.test(tempstr)) {
      event.preventDefault();
      return false;
    }

  }

  addRecord() { }

}
