import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { jpaMessage } from 'src/app/common/error-message/common-message.constants';
import { MasterEntry } from 'src/app/model/doiModel';

@Component({
  selector: 'app-master-claim-entry',
  templateUrl: './master-claim-entry.component.html',
  styleUrls: ['./master-claim-entry.component.css']
})
export class MasterClaimEntryComponent implements OnInit {
  // From Group
  masterClaimEntry: FormGroup;
  // Date
  todayDate = Date.now();
  // Variable
  errorMessage = jpaMessage;

  // Table COntent Date
  Element_Data: MasterEntry[] = [
    {
      schemeName: 'Participants of Adventurous Activities',
      srNo: '1',
      schemeNameGuj: 'સાહસિક પ્રવૃત્તિઓમાં ભાગ લેતી વ્યક્તિઓ',
      schemeShortname: 'ADVENTURE',
      nodalOffice: 'Directorate of Rajya Yuvak Board',
      claimAmt: '1,00,000.00',
      createdOn: '7-Sep-2019  11:18:44 AM',
      updatedOn: '1-Jan-1970  12:00:00 PM',
      status: true
    },
    {
      schemeName: 'Pilgrim of Amarnath', schemeNameGuj: 'અમરનાથ યાત્રીઓ', schemeShortname: 'AMARNATH', srNo: '2',
      nodalOffice: 'Officer of Gujarat Pavitra Yatradham Vikas Board', claimAmt: '1,00,000.00',
      createdOn: '7-Sep-2019  11:18:44 AM', updatedOn: '1-Jan-1970  12:00:00 PM', status: false
    },
    {
      schemeName: 'Pilgrim of Kailash Mansarovar', schemeNameGuj: 'કૈલાસ માનસરોવર યાત્રીઓ', srNo: '3',
      schemeShortname: 'KMSY', nodalOffice: 'State Director', claimAmt: '1,00,000.00',
      createdOn: '7-Sep-2019  11:18:44 AM', updatedOn: '1-Jan-1970  12:00:00 PM', status: false
    },
    {
      schemeName: 'All Jail Guards', schemeNameGuj: 'તમામ જેલ ગાર્ડસ', srNo: '4',
      schemeShortname: 'JAIL GUARDS', nodalOffice: 'District Jail Superintendent',
      claimAmt: '4,00,000.00', createdOn: '7-Sep-2019  11:18:44 AM', updatedOn: '29-Aug-2019 12:00:00', status: true
    },
    {
      schemeName: 'All uniformed employee of Jail Dept Other than Jail Guards', srNo: '5',
      schemeNameGuj: 'જેલ ખાતાના કર્મચારીઓ જેલ ગાર્ડ સિવાયના અન્ય તમામ વર્દીધારી સંવર્ગ',
      schemeShortname: 'UNIFORMED JAIL STAFF', nodalOffice: 'District Jail Superintendent',
      claimAmt: '5,00,000.00', createdOn: '7-Sep-2019  11:18:44 AM', updatedOn: '29-Aug-2019 12:00:00', status: true
    },
    {
      schemeName: 'Police Personnel CM Security and Chetak Commando', schemeNameGuj: 'પોલીસ કર્મચારીઓ સીએમ સીક્યુરીટી અને ચેતક કમાન્ડો',
      schemeShortname: 'CHETAK', nodalOffice: 'Director General of Police', srNo: '6',
      claimAmt: '15,00,000.00', createdOn: '7-Sep-2019  11:18:44 AM', updatedOn: '1-Jan-1970  12:00:00 PM', status: true
    },
    {
      schemeName: 'Police Personnel ATS and Bomb Squad', schemeNameGuj: 'પોલીસ કર્મચારીઓ એટીએસ અને બોમ્બ સ્ક્વોડ',
      schemeShortname: 'POLICE ATS', nodalOffice: 'Director General of Police', claimAmt: '15,00,000.00', srNo: '7',
      createdOn: '7-Sep-2019  11:18:44 AM', updatedOn: '1-Jan-1970  12:00:00 PM', status: true
    },
    {
      schemeName: 'Police Personnel Head Constable and Constable', schemeNameGuj: 'પોલીસ કર્મચારીઓ હેડ કોન્સ્ટેબલ અને કોન્સ્ટેબલ',
      schemeShortname: 'POLICE HC', nodalOffice: 'Director General of Police', claimAmt: '4,00,000.00', srNo: '8',
      createdOn: '7-Sep-2019  11:18:44 AM', updatedOn: '1-Jan-1970  12:00:00 PM', status: true
    },
    {
      schemeName: 'Police Personnel PI and PSI and PSO', schemeNameGuj: 'પોલીસ કર્મચારીઓ પીઆઇ અને પીએસઆઇ અને પીએસઓ',
      schemeShortname: 'POLICE PI', nodalOffice: 'Director General of Police', claimAmt: '5,00,000.00', srNo: '9',
      createdOn: '7-Sep-2019  11:18:44 AM', updatedOn: '1-Jan-1970  12:00:00 PM', status: true
    },
    {
      schemeName: 'Police Personnel DYSP and above', schemeNameGuj: 'પોલીસ કર્મચારીઓ ડીવાયએસપી અને ઉપલી કક્ષા',
      schemeShortname: 'POLICE DYSP', nodalOffice: 'Director General of Police', claimAmt: '5,00,000.00', srNo: '10',
      createdOn: '7-Sep-2019  11:18:44 AM', updatedOn: '1-Jan-1970  12:00:00 PM', status: true
    },
    {
      schemeName: 'Handicapped Person', schemeNameGuj: 'વિકલાંગ યોજના',
      schemeShortname: 'HANDICAP', nodalOffice: 'District Social Welfare Officer', claimAmt: '1,00,000.00', srNo: '11',
      createdOn: '7-Sep-2019  11:18:44 AM', updatedOn: '1-Jan-1970  12:00:00 PM', status: true
    },
    {
      schemeName: 'Hira Udhyog Workers', schemeNameGuj: 'હીરા ઉધ્યોગના કારીગરો',
      schemeShortname: 'DIAMOND', nodalOffice: 'General Manager District Industrial Center DIC', srNo: '12',
      claimAmt: '1,00,000.00', createdOn: '7-Sep-2019  11:18:44 AM', updatedOn: '1-Jan-1970  12:00:00 PM', status: true
    },
    {
      schemeName: 'Sports Hostels Trainees', schemeNameGuj: 'સ્પોર્ટસ હોસ્ટેલ ટ્રેઇનીઝ', srNo: '13',
      schemeShortname: 'SPORTS', nodalOffice: 'Director of Government Sports Hostel', claimAmt: '1,00,000.00',
      createdOn: '7-Sep-2019  11:18:44 AM', updatedOn: '1-Jan-1970  12:00:00 PM', status: true
    },
    {
      schemeName: 'Orphan Widows', schemeNameGuj: 'નિરાધાર વિધવા', srNo: '14',
      schemeShortname: 'WIDOW', nodalOffice: 'District Social Welfare Officer', claimAmt: '1,00,000.00',
      createdOn: '7-Sep-2019  11:18:44 AM', updatedOn: '1-Jan-1970  12:00:00 PM', status: true
    },
    {
      schemeName: 'Safai Kamdar', schemeNameGuj: 'સફાઇ કામદાર', srNo: '15',
      schemeShortname: 'SAFAIKAMDAR', nodalOffice: 'District Manager of Safai Kamdar Board',
      claimAmt: '1,00,000.00', createdOn: '7-Sep-2019  11:18:44 AM', updatedOn: '1-Jan-1970  12:00:00 PM', status: true
    },
    {
      schemeName: 'ITI Students', schemeNameGuj: 'આઇ.ટી.આઇ. વિધ્યાર્થીઓ', srNo: '16',
      schemeShortname: 'ITI', nodalOffice: 'Principal of ITI', claimAmt: '1,00,000.00',
      createdOn: '7-Sep-2019  11:18:44 AM', updatedOn: '1-Jan-1970  12:00:00 PM', status: true
    },
    {
      schemeName: 'Shahid Veer Kinariwala College Student', schemeNameGuj: 'શહિદ વિર કિનારીવાલા કોલેજ વિધ્યાર્થી',
      schemeShortname: 'COLLAGE', nodalOffice: 'Directorate of Higher Secondary Education', srNo: '17',
      claimAmt: '1,00,000.00', createdOn: '7-Sep-2019  11:18:44 AM', updatedOn: '1-Jan-1970  12:00:00 PM', status: true
    },
    {
      schemeName: 'Secondary and Higher Secondary Student', schemeNameGuj: 'વિધ્યાદિપ માધ્યમિક અને ઉચ્ચતર માધ્યમિક',
      schemeShortname: 'SECONDARY', nodalOffice: 'District Education Officer', claimAmt: '5,00,000.00', srNo: '18',
      createdOn: '7-Sep-2019  11:18:44 AM', updatedOn: '1-Jan-1970  12:00:00 PM', status: true
    },
    {
      schemeName: 'Nominee of Registered Farmer', schemeNameGuj: 'વારસદાર ખેડુત', srNo: '19',
      schemeShortname: 'NMN FARMER', nodalOffice: 'District Agriculture Officer', claimAmt: '2,00,000.00',
      createdOn: '7-Sep-2019  11:18:44 AM', updatedOn: '1-Jan-1970  12:00:00 PM', status: true
    },
    {
      schemeName: 'Primary School Student', schemeNameGuj: 'વિધ્યાદિપ પ્રાથમિક', srNo: '20',
      schemeShortname: 'PRIMARY STUD', nodalOffice: 'District Primary Education Officer and Shashanadhikari of Municipality',
      claimAmt: '5,00,000.00', createdOn: '7-Sep-2019  11:18:44 AM', updatedOn: '1-Jan-1970  12:00:00 PM', status: true
    },
    {
      schemeName: 'Registered Farmer', schemeNameGuj: 'ખાતેદાર ખેડુત', srNo: '21',
      schemeShortname: 'FARMER', nodalOffice: 'District Agriculture Officer', claimAmt: '2,00,000.00',
      createdOn: '7-Sep-2019  11:18:44 AM', updatedOn: '1-Jan-1970  12:00:00 PM', status: true
    },
    {
      schemeName: 'Unorganised Landless Labours', schemeNameGuj: 'અસંગઠીત જમીન વિહોણા શ્રમિક', srNo: '22',
      schemeShortname: 'SHRAMIK', nodalOffice: 'Government Labour Officer', claimAmt: '1,00,000.00',
      createdOn: '7-Sep-2019  11:18:44 AM', updatedOn: '1-Jan-1970  12:00:00 PM', status: true
    }
  ];
  // Table Source
  dataSource = new MatTableDataSource<any>(this.Element_Data);
  columns: string[] = ['position', 'schemeName', 'schemeNameGuj', 'schemeShortname',
    'nodalOffice', 'claimAmt', 'createdOn', 'updatedOn', 'status', 'action'];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public fb: FormBuilder) { }

  ngOnInit() {
    this.masterClaimEntry = this.fb.group({
      schemeName: [''],
      schemeNameGuj: [''],
      schemeShortname: [''],
      nodalOffice: [''],
      claimAmt: [''],
      remarks: ['']
    });
    this.dataSource.paginator = this.paginator;
  }
  // reset data in form
  clearForm() {
    this.masterClaimEntry.reset();
  }
  // on click add record in table Source
  addRecord() {
    this.dataSource.data.push(['position', 'schemeName', 'schemeNameGuj', 'schemeShortname',
      'nodalOffice', 'claimAmt', 'createdOn', 'updatedOn', 'status', 'action']);
    this.dataSource = new MatTableDataSource(this.dataSource.data);
  }

  masterClaimEntryData() { }
}
