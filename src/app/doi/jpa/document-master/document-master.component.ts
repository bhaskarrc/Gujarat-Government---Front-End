
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog, MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { jpaMessage } from 'src/app/common/error-message/common-message.constants';
import { ListValue, DOcumentElement, DocumentCasu, DocumentRequirement } from 'src/app/model/doiModel';
@Component({
  selector: 'app-document-master',
  templateUrl: './document-master.component.html',
  styleUrls: ['./document-master.component.css']
})
export class DocumentMasterComponent implements OnInit {
  errorMessages = jpaMessage;
  isSubmitted: boolean = false;
  todayDate = new Date();
  // Form Group
  documentMasterForm: FormGroup;
  // Control
  requirementCtrl: FormControl = new FormControl();
  schemeCtrl: FormControl = new FormControl();
  documentRequirementCtrl: FormControl = new FormControl();
  causeOfLossCtrl: FormControl = new FormControl();
  causeRequirementCtrl: FormControl = new FormControl();
  // List

  requirementList: ListValue[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' },
  ];
  documentRequirementList: ListValue[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' },
  ];

  causeRequirementList: ListValue[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' },
  ];

  schemeList: ListValue[] = [
    { value: '1', viewValue: 'Registered Farmer' },
    { value: '2', viewValue: 'ITI Students ' },
    { value: '3', viewValue: 'Unorganised Landless Labours' },
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

  causeOfLossList: ListValue[] = [
    {
      value: '1', viewValue: 'Cause of Loss '
    },
    { value: '2', viewValue: 'Burn ' },
    { value: '3', viewValue: 'Drowning ' },
    { value: '4', viewValue: ' Electric Shock ' },
    { value: '5', viewValue: 'Fall Down ' },
    { value: '6', viewValue: 'Head Injury  ' },
    { value: '7', viewValue: 'Lighting Accident  ' },
    { value: '8', viewValue: ' Murder' },
    { value: '9', viewValue: ' Natural Death ' },
    { value: '10', viewValue: 'Other   ' },
    { value: '11', viewValue: 'Other Injury' },
    { value: '12', viewValue: 'Poisoning  ' },
    { value: '12', viewValue: 'Poisoning Bites  ' },
    { value: '14', viewValue: 'Snake Bite ' },
    { value: '15', viewValue: 'Suicide' },
    { value: '16', viewValue: 'Train Accident ' },
    { value: '17', viewValue: 'Vehicle Accident' },

  ];


  // Table Source

  Element_Data: DocumentRequirement[] = [
    {
      document: 'Aadhar Card',
      requirement: 'Yes',
    },
    {
      document: 'Police Spot Panchnama',
      requirement: 'Yes',
    },
    {
      document: 'Aadhar Card for Applicant',
      requirement: 'Yes',
    },

    {
      document: 'Legible Bank Passbook/ Camcle Cheque with IFSC Code, Bank & Branch Name of applicant with bank officeal seal',
      requirement: 'Yes',
    },

    {
      document: 'Ration Card of Deceased/Disabled',
      requirement: 'No',
    },
    {
      document: 'Police Inquest Panchnama',
      requirement: 'No',
    },
  ];

  Document_Element_Data: DOcumentElement[] = [
    {
      scheme: 'NOMINEE OF REGISTERED FARMER',
      policy: 'DOI/JPA/48/P/2019-20/000001',
      document: 'Aadhar Card',
      requirement: 'Yes',
    },

    {
      scheme: 'NOMINEE OF REGISTERED FARMER',
      policy: 'DOI/JPA/48/P/2019-20/000002',
      document: 'Bank Passbook',
      requirement: 'Yes',
    },

    {
      scheme: 'NOMINEE OF REGISTERED FARMER',
      policy: 'DOI/JPA/48/P/2019-20/000006',
      document: 'Driving Licence',
      requirement: 'Yes',
    },

    {
      scheme: 'UNORGANISED LANDLESS LABOURS',
      policy: 'DOI/JPA/48/P/2019-20/000001',
      document: 'E-dhara Certificate',
      requirement: 'Yes',
    },

  ];

  Cause_Element_Data: DocumentCasu[] = [
    {
      causeName: 'Vehicle Accident',
      document: 'Valid Driving Licence',
      requirement: 'Yes',
    },

    {
      causeName: 'Natural Death',
      document: 'PM Report',
      requirement: 'Yes',
    },

    {
      causeName: 'Murder',
      document: 'FIR Copy',
      requirement: 'Yes',
    },

    {
      causeName: 'Murder',
      document: 'PM Report',
      requirement: 'Yes',
    },

  ];

  displayedColumnsCommon: any[] = [
    'srno',
    'document',
    'requirement',
    'action'

  ];

  displayedColumnsDocument: any[] = [
    'srno',
    'scheme',
    'policy',
    'document',
    'requirement',
    'action'

  ];

  displayedColumnsCause: any[] = [
    'srno',
    'causeName',
    'document',
    'requirement',
    'action'

  ];

  dataSourceCommon = new MatTableDataSource<any>(this.Element_Data);
  dataSourceDocument = new MatTableDataSource<any>(this.Document_Element_Data);
  dataSourceCause = new MatTableDataSource<any>(this.Cause_Element_Data);

  constructor(private router: Router, public dialog: MatDialog, private fb: FormBuilder,) { }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  ngOnInit() {
    this.dataSourceCommon.paginator = this.paginator;
    this.dataSourceCommon.sort = this.sort;

    this.documentMasterForm = this.fb.group({
      requirement: [''],
      document: [''],

      scheme: [''],
      policy: [''],
      schemeDocument: [''],
      documentRequirement: [''],

      causeOfLoss: [''],
      causeDocument: [''],
      causeRequirement: [''],
    });
  }
  //function to show errormessages
  onSave() {
    if (this.documentMasterForm.valid) {
      this.isSubmitted = false;
    } else {
      this.isSubmitted = true;
    }
  }


  // function to delete row from table
  delete(element) {
    this.dataSourceCommon.data.splice(element, 1);
    this.dataSourceCommon = new MatTableDataSource(this.dataSourceCommon.data);
  }

  // function to delete row from table
  deleteDocument(element) {
    this.dataSourceDocument.data.splice(element, 1);
    this.dataSourceDocument = new MatTableDataSource(this.dataSourceDocument.data);
  }

  // function to delete row from table
  deleteCause(element) {
    this.dataSourceCause.data.splice(element, 1);
    this.dataSourceCause = new MatTableDataSource(this.dataSourceCause.data);
  }


}
