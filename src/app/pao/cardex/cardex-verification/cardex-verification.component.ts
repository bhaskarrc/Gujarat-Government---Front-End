import { Component, OnInit, ViewChild, Inject } from '@angular/core';

import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { CommonListing } from 'src/app/model/common-listing';
import { SelectionModel } from '@angular/cdk/collections';
import { PartyDetailsComponent } from '../../party-details/party-details.component';
// import { WorkflowDetailsGrantComponent } from '../../workflow-details-grant/workflow-details-grant.component';
import { WorkflowDetailsGrantComponent } from '../../../grant/workflow-details-grant/workflow-details-grant.component';

import { PaoDirectives } from 'src/app/common/directive/pao';
import { ListValue } from 'src/app/model/paoModel';
import { CardexVerification } from 'src/app/model/treasury-bill';
import { AuditBillsAccountantDialogComponent } from '../../audit-bills-accountant-dialog/audit-bills-accountant-dialog.component';



const ELEMENT_DATA: any[] = [
  {

    billRefNo: '368',
    tokenNo: '552',
    mhead: '2054',
    ddoNo: '4',
    cardexNo: '4',
    billRegNo: '331',
    billAmount: '10000.00',
    billGrossAmount: '11000.00',
    billType: 'Pay Bill',
    billDate: '25-Feb-2019',
    inwardDate: '25-Feb-2019',
    ddoName: '	collector Office, Gandhinagar',
    billCat: 'Regular',
    // authiorname: '',
    partyName: 'Mr. Abc'
  }
];

@Component({
  selector: 'app-cardex-verification',
  templateUrl: './cardex-verification.component.html',
  styleUrls: ['./cardex-verification.component.css']
})
export class CardexVerificationComponent implements OnInit {

  Element_Data: CardexVerification[] = [
    {

      billRefNo: '368',
      tokenNo: '552',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '331',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },
    {

      billRefNo: '369',
      tokenNo: '553',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '332',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },
    {

      billRefNo: '370',
      tokenNo: '554',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '333',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },
    {

      billRefNo: '371',
      tokenNo: '555',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '334',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },
    {

      billRefNo: '372',
      tokenNo: '556',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '335',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },
    {

      billRefNo: '373',
      tokenNo: '557',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '336',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },
    {

      billRefNo: '374',
      tokenNo: '558',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '337',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },
    {

      billRefNo: '375',
      tokenNo: '559',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '338',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },
    {

      billRefNo: '376',
      tokenNo: '560',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '339',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },
    {

      billRefNo: '377',
      tokenNo: '561',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '340',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },
    {

      billRefNo: '378',
      tokenNo: '562',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '341',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },
    {

      billRefNo: '379',
      tokenNo: '563',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '342',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },
    {

      billRefNo: '380',
      tokenNo: '564',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '343',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },
    {

      billRefNo: '381',
      tokenNo: '565',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '344',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },
    {

      billRefNo: '382',
      tokenNo: '566',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '345',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },

    {

      billRefNo: '383',
      tokenNo: '567',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '346',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },
    {

      billRefNo: '384',
      tokenNo: '568',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '347',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },
     {

      billRefNo: '385',
      tokenNo: '569',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '348',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },

    {

      billRefNo: '386',
      tokenNo: '570',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '349',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    }, {

      billRefNo: '387',
      tokenNo: '571',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '350',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },
    {

      billRefNo: '388',
      tokenNo: '572',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '351',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },
    {

      billRefNo: '389',
      tokenNo: '573',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '352',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },

     {

      billRefNo: '390',
      tokenNo: '574',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '353',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    }, {

      billRefNo: '391',
      tokenNo: '575',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '354',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },
    {

      billRefNo: '392',
      tokenNo: '576',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '355',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },

    {

      billRefNo: '393',
      tokenNo: '577',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '356',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    }, {

      billRefNo: '394',
      tokenNo: '578',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '357',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },
    {

      billRefNo: '395',
      tokenNo: '579',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '358',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },
    {

      billRefNo: '396',
      tokenNo: '580',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '359',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },
    {

      billRefNo: '397',
      tokenNo: '581',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '360',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },
    {

      billRefNo: '398',
      tokenNo: '582',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '361',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },
     {

      billRefNo: '399',
      tokenNo: '583',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '362',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },
    {

      billRefNo: '400',
      tokenNo: '584',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '363',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },
    {

      billRefNo: '401',
      tokenNo: '585',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '364',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },
    {

      billRefNo: '402',
      tokenNo: '586',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '365',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },
    {

      billRefNo: '403',
      tokenNo: '587',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '366',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },
    {

      billRefNo: '404',
      tokenNo: '588',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '367',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },
    {

      billRefNo: '405',
      tokenNo: '589',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '368',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },
    {

      billRefNo: '406',
      tokenNo: '590',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '369',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },
    {

      billRefNo: '407',
      tokenNo: '591',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '370',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },
    {

      billRefNo: '408',
      tokenNo: '592',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '371',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },
    {

      billRefNo: '409',
      tokenNo: '593',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '372',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },
    {

      billRefNo: '410',
      tokenNo: '594',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '373',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },
    {

      billRefNo: '411',
      tokenNo: '595',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '374',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },
     {

      billRefNo: '412',
      tokenNo: '596',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '375',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },
    {

      billRefNo: '413',
      tokenNo: '597',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '376',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },
    {

      billRefNo: '414',
      tokenNo: '598',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '377',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },
    {

      billRefNo: '415',
      tokenNo: '599',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '378',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },
    {

      billRefNo: '416',
      tokenNo: '600',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '379',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },
    {

      billRefNo: '417',
      tokenNo: '601',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '380',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },
    {

      billRefNo: '418',
      tokenNo: '602',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '381',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },
    {

      billRefNo: '419',
      tokenNo: '603',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '382',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },
    {

      billRefNo: '420',
      tokenNo: '604',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '383',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },
    {

      billRefNo: '421',
      tokenNo: '605',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '384',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },
    {

      billRefNo: '422',
      tokenNo: '606',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '385',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },
    {

      billRefNo: '423',
      tokenNo: '607',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '386',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },
    {

      billRefNo: '424',
      tokenNo: '608',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '387',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },
    {

      billRefNo: '425',
      tokenNo: '609',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '388',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },
    {

      billRefNo: '426',
      tokenNo: '610',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '389',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },
    {

      billRefNo: '427',
      tokenNo: '611',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '390',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },

    {

      billRefNo: '428',
      tokenNo: '612',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '391',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },
    {

      billRefNo: '429',
      tokenNo: '613',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '392',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },
     {

      billRefNo: '430',
      tokenNo: '614',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '393',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },

    {

      billRefNo: '431',
      tokenNo: '615',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '394',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    }, {

      billRefNo: '432',
      tokenNo: '616',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '395',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },
    {

      billRefNo: '433',
      tokenNo: '617',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '396',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },
    {

      billRefNo: '434',
      tokenNo: '618',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '397',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },

     {

      billRefNo: '435',
      tokenNo: '619',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '398',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    }, {

      billRefNo: '436',
      tokenNo: '620',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '399',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },
    {

      billRefNo: '437',
      tokenNo: '621',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '400',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },

    {

      billRefNo: '438',
      tokenNo: '622',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '401',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    }, {

      billRefNo: '439',
      tokenNo: '623',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '402',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },
    {

      billRefNo: '440',
      tokenNo: '624',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '403',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },
    {

      billRefNo: '441',
      tokenNo: '625',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '404',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },
    {

      billRefNo: '442',
      tokenNo: '626',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '405',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },
    {

      billRefNo: '443',
      tokenNo: '627',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '406',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },
     {

      billRefNo: '444',
      tokenNo: '628',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '407',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },
    {

      billRefNo: '445',
      tokenNo: '629',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '408',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },
    {

      billRefNo: '456',
      tokenNo: '630',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '409',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },
    {

      billRefNo: '457',
      tokenNo: '631',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '410',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },
    {

      billRefNo: '458',
      tokenNo: '632',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '411',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },
    {

      billRefNo: '459',
      tokenNo: '633',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '412',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },
    {

      billRefNo: '460',
      tokenNo: '634',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '413',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },
    {

      billRefNo: '461',
      tokenNo: '635',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '415',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },
    {

      billRefNo: '462',
      tokenNo: '636',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '416',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },
    {

      billRefNo: '463',
      tokenNo: '637',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '417',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },
    {

      billRefNo: '464',
      tokenNo: '638',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '418',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },
    {

      billRefNo: '465',
      tokenNo: '639',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '419',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },
    {

      billRefNo: '466',
      tokenNo: '640',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '420',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },
     {

      billRefNo: '467',
      tokenNo: '641',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '421',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },
    {

      billRefNo: '468',
      tokenNo: '642',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '422',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },
    {

      billRefNo: '469',
      tokenNo: '643',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '423',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },
    {

      billRefNo: '470',
      tokenNo: '644',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '424',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },
    {

      billRefNo: '471',
      tokenNo: '645',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '425',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },
    {

      billRefNo: '472',
      tokenNo: '646',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '426',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },
    {

      billRefNo: '473',
      tokenNo: '647',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '427',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },
    {

      billRefNo: '474',
      tokenNo: '648',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '426',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },
    {

      billRefNo: '475',
      tokenNo: '649',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '429',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },
    {

      billRefNo: '476',
      tokenNo: '650',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '430',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },
    {

      billRefNo: '477',
      tokenNo: '651',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '431',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },
    {

      billRefNo: '478',
      tokenNo: '652',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '432',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },
    {

      billRefNo: '479',
      tokenNo: '653',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '433',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },
    {

      billRefNo: '480',
      tokenNo: '654',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '434',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },
    {

      billRefNo: '481',
      tokenNo: '655',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '435',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },
    {

      billRefNo: '482',
      tokenNo: '656',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '436',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },

    {

      billRefNo: '483',
      tokenNo: '657',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '437',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },
    {

      billRefNo: '484',
      tokenNo: '658',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '438',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },
     {

      billRefNo: '485',
      tokenNo: '659',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '439',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },

    {

      billRefNo: '486',
      tokenNo: '660',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '440',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    }, {

      billRefNo: '487',
      tokenNo: '661',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '441',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },
    {

      billRefNo: '488',
      tokenNo: '662',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '442',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },
    {

      billRefNo: '489',
      tokenNo: '663',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '443',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },

     {

      billRefNo: '490',
      tokenNo: '664',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '444',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    }, {

      billRefNo: '491',
      tokenNo: '665',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '445',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },
    {

      billRefNo: '492',
      tokenNo: '666',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '446',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },

    {

      billRefNo: '493',
      tokenNo: '667',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '447',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    }, {

      billRefNo: '494',
      tokenNo: '668',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '448',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },
    {

      billRefNo: '495',
      tokenNo: '669',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '449',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },
    {

      billRefNo: '496',
      tokenNo: '670',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '450',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },
    {

      billRefNo: '497',
      tokenNo: '671',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '451',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },
    {

      billRefNo: '498',
      tokenNo: '672',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '452',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },
     {

      billRefNo: '497',
      tokenNo: '673',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '453',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },
    {

      billRefNo: '498',
      tokenNo: '674',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '454',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },
    {

      billRefNo: '499',
      tokenNo: '675',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '455',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },
    {

      billRefNo: '500',
      tokenNo: '676',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '456',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },
    {

      billRefNo: '501',
      tokenNo: '677',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '457',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },
    {

      billRefNo: '502',
      tokenNo: '678',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '458',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },
    {

      billRefNo: '503',
      tokenNo: '679',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '459',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },
    {

      billRefNo: '504',
      tokenNo: '680',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '460',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },
    {

      billRefNo: '505',
      tokenNo: '681',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '461',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },
    {

      billRefNo: '506',
      tokenNo: '682',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '462',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },
    {

      billRefNo: '507',
      tokenNo: '683',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '463',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },
    {

      billRefNo: '508',
      tokenNo: '684',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '464',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },
    {

      billRefNo: '509',
      tokenNo: '685',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '465',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },
     {

      billRefNo: '510',
      tokenNo: '686',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '466',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },
    {

      billRefNo: '511',
      tokenNo: '687',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '467',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },
    {

      billRefNo: '512',
      tokenNo: '688',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '468',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },
    {

      billRefNo: '513',
      tokenNo: '689',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '469',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },
    {

      billRefNo: '514',
      tokenNo: '690',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '470',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },
    {

      billRefNo: '515',
      tokenNo: '691',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '471',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },
    {

      billRefNo: '516',
      tokenNo: '692',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '472',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },
    {

      billRefNo: '517',
      tokenNo: '693',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '473',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },
    {

      billRefNo: '518',
      tokenNo: '694',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '474',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },
    {

      billRefNo: '519',
      tokenNo: '695',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '475',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },
    {

      billRefNo: '510',
      tokenNo: '696',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '476',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },
    {

      billRefNo: '521',
      tokenNo: '697',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '477',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },
    {

      billRefNo: '522',
      tokenNo: '698',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '478',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },
    {

      billRefNo: '523',
      tokenNo: '699',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '479',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },
    {

      billRefNo: '524',
      tokenNo: '700',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '480',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    },
    {

      billRefNo: '525',
      tokenNo: '701',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '481',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    }
  ];
  // Form Group
  cardexBillForm: FormGroup;
  // Form Conreol
  ddoNameCtrl: FormControl = new FormControl();
  majorheadctrl: FormControl = new FormControl();
  billTypeCtrl: FormControl = new FormControl();
  forwardauthoCtrl: FormControl = new FormControl();
  auditornameCtrl: FormControl = new FormControl();
  // Variable
  isSearch: Boolean = true;
  valueRequired: Boolean = false;
  // Table Source
  newdisplayedColumns: string[] = ['select', 'billRefNo', 'billRegNo',
    'tokenNo', 'billDate', 'inwardDate', 'ddoNo', 'cardexNo', 'ddoName',
    'billType', 'mhead', 'billCat', 'billGrossAmount', 'billAmount', 'partyName', 'approverName', 'sign', 'signature', 'action'];
  newdataSource = new MatTableDataSource<any>(this.Element_Data);
  selection = new SelectionModel<any>(true, []);
  // List

  ddoName_list: ListValue[] = [
    { value: '1', viewValue: 'Collector Office, Gandhinagar' },
  ];

  auditor_list: ListValue[] = [{
    value: '1', viewValue: 'Shri. Pratik Shah'
  },
  ];

  signs_list: ListValue[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '1', viewValue: 'No' },
  ];

  major_list: ListValue[] = [
    { value: '1', viewValue: '3451:Secretariat-Economic Services' },
    {
      value: '2', viewValue: '5475:Capital Outlay on other General Economics Services'
    },
    { value: '3', viewValue: '2401:Crop Husbandry' },
    { value: '4', viewValue: '2071:Pensions and Other Retirement Benefits' },
    { value: '5', viewValue: '2058:Stationery and Printing' },
    { value: '6 : Secretariat-Social Services', viewValue: '2251 : Secretariat-Social Services' },
    { value: '7 : Interest Payments', viewValue: '2049 : Interest Payments' },
    { value: '8 : Water Supply and Sanitation', viewValue: '2215 : Water Supply and Sanitation' },
    { value: '9 : Ecology and Environment', viewValue: '3435 : Ecology and Environment' },
    { value: '10 : Capital Outlay on Urban Development', viewValue: '4217 : Capital Outlay on Urban Development' },
    { value: '11 : General Education', viewValue: '2202 : General Education' },
  ];

  billCategory_list: ListValue[] = [
    { value: '1', viewValue: 'Regular' },
    { value: '2', viewValue: 'TC' },
    { value: '3', viewValue: 'NIL' },
    { value: '4', viewValue: 'Regular/Challan' }
  ];

  billType_list: ListValue[] = [
    { value: '1', viewValue: 'GTR-30 - Pay Bill' },
    { value: '2', viewValue: 'GTR-45 - TA Bill' },
    { value: '3', viewValue: 'GTR-40 - Grant In Bill' },
    { value: '4', viewValue: 'GTR-12 - Advance Bill' }
  ];

  forward_list: ListValue[] = [
    { value: '1', viewValue: 'Authority' },

  ];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private router: Router, private fb: FormBuilder, public dialog: MatDialog,) { }
  directiveObject = new PaoDirectives(this.router, this.dialog);

  ngOnInit() {
    this.newdataSource.paginator = this.paginator;
    this.cardexFormData();
  }

  // tslint:disable-next-line: use-life-cycle-interface
  ngAfterViewInit() {
    setTimeout(() => {
      this.dialog.open(AuditBillsAccountantDialogComponent, {
        width: '1200px'
      });
    }, 100);
  }
  // Navigate
  gotopage() {
    this.router.navigate(['/pao/saved-bill/bill-prepration-fom']);
  }
  opendialog() {
    const dialogRef = this.dialog.open(signatureDialog, {
      width: '450px',
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'no') {
        console.log('The dialog was closed', result);
      } else if (result === 'yes') {
        console.log('The dialog was closed', result);
      }
    });
  }


  submitToNextLevel() {
    this.router.navigate(['/pao/token-print']);
  }
  goToDashboard() {
    this.router.navigate(['/pao/inward-bill']);
  }
  cardexFormData() {
    this.cardexBillForm = this.fb.group({
      BillRefNo: [''],
      Tokenno: [''],
      majorhead: [''],
      billTypes: [''],
      ddoNo: [''],
      cardexNo: [''],
      ddoName: [''],
      billate: [''],
      regBill: [''],
      netamount: [''],
      auditorname: [''],
      billCategory: [''],
      forwardautho: [''],
      billRegNo: [''],
      auditorctrl: ['1'],
      signsctrl: ['1'],
      gorssamount: [''],
      BillFromDate: ['']
    });
  }
  FromDate(event) {
    const fromdate = this.cardexBillForm.get('BillFromDate').value;
    if (fromdate != '') {
      this.valueRequired = true;
    }
  }

  search() {
    this.isSearch = false;
  }


}

// vita-dialog
@Component({
  selector: 'signature-dialog',
  templateUrl: 'signature-dialog.html',
})

export class signatureDialog {
  constructor(
    private router: Router,
    public dialogRef: MatDialogRef<signatureDialog>
  ) { }

  vitocancel(): void {
    this.dialogRef.close();
  }
  print() {
    setTimeout(() => {
      this.dialogRef.close();
      this.router.navigate(['/pao/vitoReport']);
    }, 0);
  }


}
