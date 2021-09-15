import { Component, OnInit } from '@angular/core';
import { ListValue } from 'src/app/model/pdpla';


@Component({
  selector: 'app-reconciliation-report',
  templateUrl: './reconciliation-report.component.html',
  styleUrls: ['./reconciliation-report.component.css']
})
export class ReconciliationReportComponent implements OnInit {

  particular: ListValue[] = [
    { value: '1', viewValue: 'તિજોરી સ્ટેટમેન્ટ મુજબ રકમ' },
    { value: '2', viewValue: 'લખેલ પરંતુ ન વટાવેલ ચેક' },
    { value: '3', viewValue: 'લખેલ સેલ્ફના ચેકો અને રકમ ઉપાડેલ તિજોરી સ્ટેટમેન્ટમાં ન દર્શાવેલ' },
    { value: '4', viewValue: 'તિજોરી ખાતે જમા પરંતુ કેશબુકમાં જમા ન થયેલ ચલણ' },
    { value: '5', viewValue: 'કેશબુક ખાતે જમા પરંતુ તિજોરી ખાતે જમા ન થયેલ ચલણ' },
    { value: '6', viewValue: 'અન્ય તફાવત' },
    { value: '7', viewValue: 'કેશબુક મુજબ બંધસિલક' }
  ];
  constructor() { }

  ngOnInit() {
  }

}
