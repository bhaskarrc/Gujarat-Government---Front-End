import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { MasterPolicy, ListValue } from 'src/app/model/doiModel';


@Component({
  selector: 'app-jpa-master-policy',
  templateUrl: './jpa-master-policy.component.html',
  styleUrls: ['./jpa-master-policy.component.css']
})
export class JpaMasterPolicyComponent implements OnInit {
  // Form Group
  jpaClaimEntry: FormGroup;
  // DAte
  todayDate = Date.now();
  maxDate = new Date();
  // control
  schemeTypeCtrl: FormControl = new FormControl();

  // List
  schemeType_list: ListValue[] = [
    {
      value: '1', viewValue: 'Registered Farmer'
    },
    { value: '2', viewValue: 'ITI Students ' },
    { value: '3', viewValue: 'Unorganised Landless Labours    ' },
    { value: '4', viewValue: ' Secondary and Higher Secondary Student ' },
    { value: '5', viewValue: ' Nominee of Registered Farmer  ' },
    { value: '6', viewValue: '  Primary School Student ' },
    { value: '7', viewValue: 'Safai Kamdar' },
    { value: '8', viewValue: 'Orphan Widows  ' },
    { value: '9', viewValue: 'Sports Hostel Trainees  ' },
    { value: '10', viewValue: ' Hira Udhyog Workers' },
    { value: '11', viewValue: ' Handicapped Person ' },
    { value: '12', viewValue: 'Police Personnel DYSP and above ' },
    { value: '13', viewValue: 'Police Personnel PI and PSI and PSO ' },
    { value: '14', viewValue: 'Police Personnel Head Constable and Constable    ' },
    { value: '16', viewValue: 'Police Personnel ATS and Bomb Squad  ' },
    { value: '17', viewValue: 'Police Personnel CM Security and Chetak Commando' },
    { value: '18', viewValue: 'All Jail Guards ' },
    { value: '19', viewValue: 'All uniformed employee of Jail Dept Other than Jail Guards' },
    { value: '20', viewValue: 'Pilgrim of Kailash Mansarovar' },
    { value: '21', viewValue: 'Pilgrim of Amarnath' },
    { value: '22', viewValue: 'Participants of Adventurous Activities' },
    { value: '23', viewValue: 'Shahid Veer Kinarivbrala College Student' },
  ];
  // Table Source

  Element_Data: MasterPolicy[] = [


    {
      srno: '1',
      plocyNo: 'DOI/JPA/48/P/2020-21/000001	',
      scheme: 'Participants of Adventurous Activities',
      startDate: '	1/4/2020',
      endDate: '	31-03-2021',
      numberofBenificiaries: '	11700	',
      premiumAmount: '300000	',
      death: '100000',
      fiftyDiablity: '	50000	',
      hundredDisablity: '100000',
      action: '',
    },

    {
      srno: '2',
      plocyNo: 'DOI/106020/48/P/2010-11/2		',
      scheme: 'Pilgrim of Amarnath',
      startDate: '	1/4/2020',
      endDate: '	31-03-2021',
      numberofBenificiaries: ' 	15000	',
      premiumAmount: '300000	',
      death: '100000',
      fiftyDiablity: '	50000	',
      hundredDisablity: '100000',
      action: '',
    },
    {
      srno: '3',
      plocyNo: 'DOI/106020/48/P/2010-11/2		',
      scheme: 'Pilgrim of Kailash Mansarovar',
      startDate: '	1/4/2020',
      endDate: '	31-03-2021',
      numberofBenificiaries: ' 	200	',
      premiumAmount: '300000	',
      death: '100000',
      fiftyDiablity: '	50000	',
      hundredDisablity: '100000',
      action: '',
    },
    {
      srno: '4',
      plocyNo: 'DOI/JPA/48/P/2020-21/000001		',
      scheme: 'All Jail Guards',
      startDate: '	1/4/2020',
      endDate: '	31-03-2021',
      numberofBenificiaries: ' 	3275	',
      premiumAmount: '1250000',
      death: '400000',
      fiftyDiablity: '	200000	',
      hundredDisablity: '400000',
      action: '',
    },
    {
      srno: '5',
      plocyNo: 'DOI/JPA/48/P/2020-21/000001	 	',
      scheme: 'All uniformed employee of Jail Dept Other than Jail Guards',
      startDate: '	1/4/2020',
      endDate: '	31-03-2021',
      numberofBenificiaries: ' 	161	',
      premiumAmount: '1250000',
      death: '400000',
      fiftyDiablity: '	250000	',
      hundredDisablity: '400000',
      action: '',
    },

    {
      srno: '6',
      plocyNo: 'DOI/JPA/48/P/2020-21/000001		 	',
      scheme: 'Police Personnel CM Security and Chetak Commando',
      startDate: '	1/4/2020',
      endDate: '	31-03-2021',
      numberofBenificiaries: ' 	161	',
      premiumAmount: '2750000',
      death: '7500000',
      fiftyDiablity: '	150000	',
      hundredDisablity: '100000',
      action: '',
    },


    {
      srno: '7',
      plocyNo: 'DOI/JPA/48/P/2011-12/000001	',
      scheme: '		Hira Udhyog Workers',
      startDate: '	1/4/2020',
      endDate: '	31-03-2021',
      numberofBenificiaries: ' 	154661	',
      premiumAmount: '4750000',
      death: '500000',
      fiftyDiablity: '	50000	',
      hundredDisablity: '4500000',
      action: '',
    },


    {
      srno: '8',
      plocyNo: 'DOI/JPA/48/P/2020-21/000001 	',
      scheme: '	Police Personnel PI and PSI and PSO',
      startDate: '	1/4/2020',
      endDate: '	31-03-2021',
      numberofBenificiaries: ' 	161	',
      premiumAmount: '2750000',
      death: '7500000',
      fiftyDiablity: '	150000	',
      hundredDisablity: '100000',
      action: '',
    },


    {
      srno: '9',
      plocyNo: 'DOI/106020/48/P/2010-11/2		 	',
      scheme: 'Handicapped Person',
      startDate: '	1/4/2020',
      endDate: '	31-03-2021',
      numberofBenificiaries: ' 	161	',
      premiumAmount: '2750000',
      death: '4500000',
      fiftyDiablity: '	250000	',
      hundredDisablity: '100000',
      action: '',
    },


    {
      srno: '10',
      plocyNo: 'DOI/106020/48/P/2010-11/2		 	',
      scheme: 'Sports Hostels Trainees',
      startDate: '	1/4/2020',
      endDate: '	31-03-2021',
      numberofBenificiaries: ' 	150',
      premiumAmount: '75000',
      death: '100000',
      fiftyDiablity: '	50000	',
      hundredDisablity: '100000',
      action: '',
    },


    {
      srno: '11',
      plocyNo: 'DOI/JPA/48/P/2020-21/000001		 	',
      scheme: 'Police Personnel CM Security and Chetak Commando',
      startDate: '	1/4/2020',
      endDate: '	31-03-2021',
      numberofBenificiaries: ' 	161	',
      premiumAmount: '2750000',
      death: '7500000',
      fiftyDiablity: '	150000	',
      hundredDisablity: '100000',
      action: '',
    },


    {
      srno: '12',
      plocyNo: 'DOI/106020/48/P/2010-11/2			 	',
      scheme: 'Orphan Widows',
      startDate: '	1/4/2020',
      endDate: '	31-03-2021',
      numberofBenificiaries: ' 	1444461	',
      premiumAmount: '2750000',
      death: '7500000',
      fiftyDiablity: '	150000	',
      hundredDisablity: '100000',
      action: '',
    },


    {
      srno: '13',
      plocyNo: 'DOI/JPA/48/P/2020-21/000001		 	',
      scheme: 'Police Personnel CM Security and Chetak Commando',
      startDate: '	1/4/2020',
      endDate: '	31-03-2021',
      numberofBenificiaries: ' 	161	',
      premiumAmount: '2750000',
      death: '7500000',
      fiftyDiablity: '	150000	',
      hundredDisablity: '100000',
      action: '',
    },


    {
      srno: '14',
      plocyNo: 'DOI/JPA/48/P/2020-21/000001			 	',
      scheme: 'Safai Kamdar',
      startDate: '	1/4/2020',
      endDate: '	31-03-2021',
      numberofBenificiaries: ' 	165441	',
      premiumAmount: '250000',
      death: '700000',
      fiftyDiablity: '	15000	',
      hundredDisablity: '400000',
      action: '',
    },


    {
      srno: '15',
      plocyNo: 'DOI/JPA/48/P/2020-21/000001	 	',
      scheme: 'ITI Students',
      startDate: '	1/4/2020',
      endDate: '	31-03-2021',
      numberofBenificiaries: ' 	161546	',
      premiumAmount: '2750000',
      death: '7500000',
      fiftyDiablity: '	150000	',
      hundredDisablity: '100000',
      action: '',
    },


    {
      srno: '16',
      plocyNo: 'DOI/JPA/48/P/2020-21/000001		 	',
      scheme: 'Police Personnel CM Security and Chetak Commando',
      startDate: '	1/4/2020',
      endDate: '	31-03-2021',
      numberofBenificiaries: ' 	1614656	',
      premiumAmount: '2750000',
      death: '7500000',
      fiftyDiablity: '	150000	',
      hundredDisablity: '100000',
      action: '',
    },


    {
      srno: '17',
      plocyNo: 'DOI/JPA/48/P/2020-21/000001		',
      scheme: 'Shahid Veer Kinariwala College Student',
      startDate: '	1/4/2020',
      endDate: '	31-03-2021',
      numberofBenificiaries: ' 	8546161	',
      premiumAmount: '1750000',
      death: '75520000',
      fiftyDiablity: '	100000	',
      hundredDisablity: '1500000',
      action: '',
    },


    {
      srno: '18',
      plocyNo: 'DOI/JPA/48/P/2020-21/000001			 	',
      scheme: 'Secondary and Higher Secondary Student',
      startDate: '	1/4/2020',
      endDate: '	31-03-2021',
      numberofBenificiaries: ' 	465161	',
      premiumAmount: '2750000',
      death: '7500000',
      fiftyDiablity: '	150000	',
      hundredDisablity: '100000',
      action: '',
    },


    {
      srno: '19',
      plocyNo: 'DOI/JPA/48/P/2020-21/000001		',
      scheme: 'Nominee of Registered Farmer',
      startDate: '	1/4/2020',
      endDate: '	31-03-2021',
      numberofBenificiaries: ' 	8681989 ',
      premiumAmount: '2750000',
      death: '7500000',
      fiftyDiablity: '	200000	',
      hundredDisablity: '50000',
      action: '',
    },


    {
      srno: '20',
      plocyNo: 'DOI/JPA/48/P/2020-21/000001	 	',
      scheme: 'Primary School Student',
      startDate: '	1/4/2020',
      endDate: '	31-03-2021',
      numberofBenificiaries: ' 	16454451	',
      premiumAmount: '2750000',
      death: '7500000',
      fiftyDiablity: '	150000	',
      hundredDisablity: '100000',
      action: '',
    },


    {
      srno: '21',
      plocyNo: 'DOI/JPA/48/P/2020-21/000001	 	',
      scheme: 'Registred Farmer',
      startDate: '	1/4/2020',
      endDate: '	31-03-2021',
      numberofBenificiaries: ' 	38925826 ',
      premiumAmount: '479400000',
      death: '200000',
      fiftyDiablity: '	50000	',
      hundredDisablity: '100000',
      action: '',
    },


    {
      srno: '22',
      plocyNo: 'DOI/JPA/48/P/2020-21/000001			 	',
      scheme: 'Unorganised Landless Labours',
      startDate: '	1/4/2020',
      endDate: '	31-03-2021',
      numberofBenificiaries: ' 	564651465	',
      premiumAmount: '6839000	',
      death: '100000000',
      fiftyDiablity: '	150000	',
      hundredDisablity: '100000',
      action: '',
    },


  ];

  displayedColumns: any[] = [
    'srno',
    'plocyNo',
    'scheme',
    'startDate',
    'endDate',
    'numberofBenificiaries',
    'premiumAmount',
    'death',
    'fiftyDiablity',
    'hundredDisablity',
    'action'

  ];

  dataSource = new MatTableDataSource<any>(this.Element_Data);

  constructor(private router: Router, public dialog: MatDialog, private fb: FormBuilder,) { }

  ngOnInit() {
    this.jpaClaimEntry = this.fb.group({
      startDate: [''],
      endDate: [''],
      ploicyNo: [''],
      schemeType: [''],
      numberOfBenificiaries: [''],
      premiumAmount: [''],
      ClaimAmountonDeath: [''],
      fiftyDisablity: [''],
      hunDisablity: ['']
    });
  }

  // Navigation Route
  navigate() {
    this.router.navigate(['./doi/jpa/jpa-claim-entry-view']);
  }
}
