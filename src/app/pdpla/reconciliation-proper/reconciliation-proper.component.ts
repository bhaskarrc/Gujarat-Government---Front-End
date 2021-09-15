import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { STTable, BankTable, AllTable, DDOTable, Ageable } from 'src/app/model/pdpla';

@Component({
  selector: 'app-reconciliation-proper',
  templateUrl: './reconciliation-proper.component.html',
  styleUrls: ['./reconciliation-proper.component.css']
})
export class ReconciliationProperComponent implements OnInit {
  key = 'All';
  allTable: AllTable[] = [
    {
      value: '1', viewValue: 'તિજોરી સ્ટેટમેન્ટ મુજબ રકમ', tValue: '0.00', ddoValue: '0.00', ddoDiffValue: '0.00',
      agValue: '0.00', agDiffValue: '0.00', bValue: '0.00', bDiffValue: '0.00', stValue: '0.00', stDiffValue: '0.00',
    },
    {
      value: '2', viewValue: 'લખેલ પરંતુ ન વટાવેલ ચેક', tValue: '0.00', ddoValue: '0.00', ddoDiffValue: '0.00',
      agValue: '0.00', agDiffValue: '0.00', bValue: '0.00', bDiffValue: '0.00', stValue: '0.00', stDiffValue: '0.00',
    },
    {
      value: '3', viewValue: 'લખેલ સેલ્ફના ચેકો અને રકમ ઉપાડેલ તિજોરી સ્ટેટમેન્ટમાં ન દર્શાવેલ', tValue: '0.00', ddoValue: '0.00',
      ddoDiffValue: '0.00', agValue: '0.00', agDiffValue: '0.00', bValue: '0.00', bDiffValue: '0.00', stValue: '0.00', stDiffValue: '0.00',
    },
    {
      value: '4', viewValue: 'તિજોરી ખાતે જમા પરંતુ કેશબુકમાં જમા ન થયેલ ચલણ', tValue: '0.00', ddoValue: '0.00',
      ddoDiffValue: '0.00', agValue: '0.00', agDiffValue: '0.00', bValue: '0.00', bDiffValue: '0.00', stValue: '0.00', stDiffValue: '0.00',
    },
    {
      value: '5', viewValue: 'કેશબુક ખાતે જમા પરંતુ તિજોરી ખાતે જમા ન થયેલ ચલણ', tValue: '0.00', ddoValue: '0.00',
      ddoDiffValue: '0.00', agValue: '0.00', agDiffValue: '0.00', bValue: '0.00', bDiffValue: '0.00', stValue: '0.00', stDiffValue: '0.00',
    },
    {
      value: '6', viewValue: 'અન્ય તફાવત', tValue: '0.00', ddoDiffValue: '0.00', ddoValue: '0.00',
      agValue: '0.00', agDiffValue: '0.00', bValue: '0.00', bDiffValue: '0.00', stValue: '0.00', stDiffValue: '0.00',
    },
    {
      value: '7', viewValue: 'કેશબુક મુજબ બંધસિલક', tValue: '0.00', ddoDiffValue: '0.00', ddoValue: '0.00',
      agValue: '0.00', agDiffValue: '0.00', bValue: '0.00', bDiffValue: '0.00', stValue: '0.00', stDiffValue: '0.00',
    }
  ];

  ddoTable: DDOTable[] = [
    { value: '1', viewValue: 'તિજોરી સ્ટેટમેન્ટ મુજબ રકમ', tValue: '8,000.00', ddoValue: '9,000.00', dValue: '1,000.00' },
    { value: '2', viewValue: 'લખેલ પરંતુ ન વટાવેલ ચેક', tValue: '0.00', ddoValue: '0.00', dValue: '0.00' },
    {
      value: '3', viewValue: 'લખેલ સેલ્ફના ચેકો અને રકમ ઉપાડેલ તિજોરી સ્ટેટમેન્ટમાં ન દર્શાવેલ', tValue: '0.00',
      ddoValue: '0.00', dValue: '0.00'
    },
    { value: '4', viewValue: 'તિજોરી ખાતે જમા પરંતુ કેશબુકમાં જમા ન થયેલ ચલણ', tValue: '0.00', ddoValue: '0.00', dValue: '0.00' },
    { value: '5', viewValue: 'કેશબુક ખાતે જમા પરંતુ તિજોરી ખાતે જમા ન થયેલ ચલણ', tValue: '0.00', ddoValue: '0.00', dValue: '0.00' },
    { value: '6', viewValue: 'અન્ય તફાવત', tValue: '0.00', ddoValue: '0.00', dValue: '0.00' },
    { value: '7', viewValue: 'કેશબુક મુજબ બંધસિલક', tValue: '8,000.00', ddoValue: '9,000.00', dValue: '1,000.00' }
  ];

  agTable: Ageable[] = [
    { value: '1', viewValue: 'તિજોરી સ્ટેટમેન્ટ મુજબ રકમ', tValue: '8,000.00', agValue: '9,000.00', dValue: '1,000.00' },
    { value: '2', viewValue: 'લખેલ પરંતુ ન વટાવેલ ચેક', tValue: '0.00', agValue: '0.00', dValue: '0.00' },
    {
      value: '3', viewValue: 'લખેલ સેલ્ફના ચેકો અને રકમ ઉપાડેલ તિજોરી સ્ટેટમેન્ટમાં ન દર્શાવેલ', tValue: '0.00',
      agValue: '0.00', dValue: '0.00'
    },
    { value: '4', viewValue: 'તિજોરી ખાતે જમા પરંતુ કેશબુકમાં જમા ન થયેલ ચલણ', tValue: '0.00', agValue: '0.00', dValue: '0.00' },
    { value: '5', viewValue: 'કેશબુક ખાતે જમા પરંતુ તિજોરી ખાતે જમા ન થયેલ ચલણ', tValue: '0.00', agValue: '0.00', dValue: '0.00' },
    { value: '6', viewValue: 'અન્ય તફાવત', tValue: '0.00', agValue: '0.00', dValue: '0.00' },
    { value: '7', viewValue: 'કેશબુક મુજબ બંધસિલક', tValue: '8,000.00', agValue: '9,000.00', dValue: '1,000.00' }
  ];

  bankTable: BankTable[] = [
    { value: '1', viewValue: 'તિજોરી સ્ટેટમેન્ટ મુજબ રકમ', tValue: '8,000.00', bValue: '9,000.00', dValue: '1,000.00' },
    { value: '2', viewValue: 'લખેલ પરંતુ ન વટાવેલ ચેક', tValue: '0.00', bValue: '0.00', dValue: '0.00' },
    {
      value: '3', viewValue: 'લખેલ સેલ્ફના ચેકો અને રકમ ઉપાડેલ તિજોરી સ્ટેટમેન્ટમાં ન દર્શાવેલ', tValue: '0.00',
      bValue: '0.00', dValue: '0.00'
    },
    { value: '4', viewValue: 'તિજોરી ખાતે જમા પરંતુ કેશબુકમાં જમા ન થયેલ ચલણ', tValue: '0.00', bValue: '0.00', dValue: '0.00' },
    { value: '5', viewValue: 'કેશબુક ખાતે જમા પરંતુ તિજોરી ખાતે જમા ન થયેલ ચલણ', tValue: '0.00', bValue: '0.00', dValue: '0.00' },
    { value: '6', viewValue: 'અન્ય તફાવત', tValue: '0.00', bValue: '0.00', dValue: '0.00' },
    { value: '7', viewValue: 'કેશબુક મુજબ બંધસિલક', tValue: '8,000.00', bValue: '9,000.00', dValue: '1,000.00' }
  ];

  stTable: STTable[] = [
    { value: '1', viewValue: 'તિજોરી સ્ટેટમેન્ટ મુજબ રકમ', tValue: '8,000.00', stValue: '0.00', dValue: '8,000.00' },
    {
      value: '2', viewValue: 'લખેલ પરંતુ ન વટાવેલ ચેક', tValue: '0.00', stValue: '0.00', dValue: '0.00'
    },
    {
      value: '3', viewValue: 'લખેલ સેલ્ફના ચેકો અને રકમ ઉપાડેલ તિજોરી સ્ટેટમેન્ટમાં ન દર્શાવેલ', tValue: '0.00', stValue: '0.00',
      dValue: '0.00'
    },
    {
      value: '4', viewValue: 'તિજોરી ખાતે જમા પરંતુ કેશબુકમાં જમા ન થયેલ ચલણ', tValue: '0.00', stValue: '0.00', dValue: '0.00'
    },
    {
      value: '5', viewValue: 'કેશબુક ખાતે જમા પરંતુ તિજોરી ખાતે જમા ન થયેલ ચલણ', tValue: '0.00', stValue: '0.00', dValue: '0.00'
    },
    { value: '6', viewValue: 'અન્ય તફાવત', tValue: '0.00', stValue: '0.00', dValue: '0.00' },
    { value: '7', viewValue: 'કેશબુક મુજબ બંધસિલક', tValue: '8,000.00', stValue: '0.00', dValue: '8,000.00' }

  ];

  constructor(private dataRoute: ActivatedRoute, public router: Router) { }

  ngOnInit() {
    this.key = this.dataRoute.snapshot.params['type'];
  }

  // routing
  gotoComparison() {
    this.router.navigate(['./pdpla/ledger-cum-pass-book-comparison']);
  }

}
