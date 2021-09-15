import { Component, OnInit, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog, MatTableDataSource } from '@angular/material'
import { jpaMessage } from 'src/app/common/error-message/common-message.constants';
import { ToastrService } from 'ngx-toastr';
import { ListValue, JPLLegalReq } from 'src/app/model/doiModel';

@Component({
  selector: 'app-jpa-legal-entry-for-request-listing',
  templateUrl: './jpa-legal-entry-for-request-listing.component.html',
  styleUrls: ['./jpa-legal-entry-for-request-listing.component.css']
})
export class JpaLegalEntryForRequestListingComponent implements OnInit {

  todayDate = new Date();
  // Form Group
  jpaLegalEntry: FormGroup;
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
  courtDetails_list: ListValue[] = [
    { value: '1', viewValue: 'Forum' },
    { value: '2', viewValue: 'State Commission' },
    { value: '3', viewValue: 'National Commission' },


  ];
  districtList: ListValue[] = [
    { value: '00', viewValue: 'Ahmedabad' },
    { value: '01', viewValue: 'Amreli' },
    { value: '02', viewValue: 'Anand' },
    { value: '03', viewValue: 'Aravalli' },
    { value: '04', viewValue: 'Banaskantha' },
    { value: '05', viewValue: 'Bharuch' },
    { value: '06', viewValue: 'Bhavnagar' },
  ];
  attachmentTypeCode: any[] = [
    { value: '01', viewValue: 'Supporting Document' },
    { value: '02', viewValue: 'Sanction Order' },
    { value: '03', viewValue: 'Others' },
    // { type: 'view' }
  ];
  // control
  districtCtrl: FormControl = new FormControl();
  schemeTypeCtrl: FormControl = new FormControl();
  errorMessage: any;
  courtDetailsCtrl: FormControl = new FormControl();
  // Table Source

  Element_Data: JPLLegalReq[] = [

    {
      srno: '1',
      district: 'Morbi',
      courtCaseNo: '	1234',
      courtCaseDate: '	25/10/2019',
      courtDetail: '	Forum',
      claimId: '	JPA/KK/1004455',
      ploicyNo: '	DOI/JPA/KK/10000',
      scheme: '	Khatedar Khedut	',
      applicantName: 'Maganbhai Chhanabhai Patel	',
      detailofQuery: '',
      nameofDeceasedPerson: 'Chhanabhai Jinabhai Patel',
      dateOfAci: '	26/04/2019	',
      courtDecision: 'Pending Case	 ',
      status: 'Request Not accepted',
      action: '',
    },
    {
      srno: '2',
      district: 'Ahmedabad	',
      courtCaseNo: '	2345',
      courtCaseDate: '	1/11/2019	',
      courtDetail: '	Forum',
      claimId: '		JPA/RF/1003455	',
      ploicyNo: '	DOI/JPA/RF/10000',
      scheme: '		Register Farmer		',
      applicantName: 'Hiralal Ravjibhai Patel	',
      detailofQuery: '	Ravjibhai Lalbhai Patel',
      nameofDeceasedPerson: 'Ravjibhai Lalbhai Patel',
      dateOfAci: '	10/2/2019	',
      courtDecision: 'Pending Case	 ',
      status: 'Request Not accepted',
      action: '',
    },

    {
      srno: '3',
      district: 'Jamngar',
      courtCaseNo: '		4567',

      courtCaseDate: '28/10/2019',
      courtDetail: '		State Commission',
      claimId: '		JPA/UOL/1000345	',
      ploicyNo: '	DOI/JPA/UOL/10000',
      scheme: '		Unorganized Labour		',
      applicantName: 'Rambhai Ratanbhai Parmar	',
      detailofQuery: '	',
      nameofDeceasedPerson: '	Ratanbhai Ravjibhai Parmar',
      dateOfAci: '			13/08/2019	',
      courtDecision: 'Forum Decision favour on DOI',
      status: 'Approve',
      action: '',
    },

  ];
  displayedColumns: any[] = [
    'srno',
    'courtCaseNo',
    'courtCaseDate',
    'claimId',
    'ploicyNo',
    'district',
    'applicantName',
    'nameofDeceasedPerson',
    'dateOfAci',
    'status',
    'action'

  ];

  dataSource = new MatTableDataSource<any>(this.Element_Data);


  constructor(private router: Router, private el: ElementRef,
    public dialog: MatDialog, private fb: FormBuilder, private toastr: ToastrService,) { }

  ngOnInit() {
    this.errorMessage = jpaMessage;

    this.jpaLegalEntry = this.fb.group({
      inwardNo: [''],
      inwardDate: [''],
      caseNo: [''],
      applicantName: [''],
      claimNo: [''],
      dateOfAccident: [''],
      schemeType: [''],
      district: [''],
      courtCaseDate: [''],
      policyNo: [''],
      courtDetails: [''],
      courtDesc: [''],
      nameOfDese: [''],
      dateAcc: [''],
      detailOfQuery: ['']
    });
  }
  // Route Link
  navigate() {
    this.router.navigate(['./doi/jpa-legal-entry-for-request-listing']);
  }


}
