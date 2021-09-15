import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-claim-note',
  templateUrl: './claim-note.component.html',
  styleUrls: ['./claim-note.component.css']
})
export class ClaimNoteComponent implements OnInit {
  // Report Table Details
  reportDetails: any[] = [
    { entry: 'Claim No.', value: 'NMN FARMER/2020-21/000140'},
    { entry: 'Policy No.', value: 'DOI/JPA/48/P/2020-21/000001'},
    { entry: 'Policy Period', value: '01-04-2020 TO 31-03-2021'},
    { entry: 'Scheme Covered', value: 'NOMINEE OF REGISTEREDFARMER'},
    { entry: 'Name of Deceased / Disabled', value: 'BHALIYA SHUBHASBHAI'},
    { entry: 'Name of Beneficiary /Applicant', value: 'BHALIYA BHIKHABHAIJAGABHAI'},
    { entry: 'Date of Accident', value: '20-04-2020'},
    { entry: 'Date of Death / Disablement', value: '20-04-2020'},
    { entry: 'Claim Type (Death /Disablement)', value: 'DEATH'},
    { entry: 'Claim Amount', value: '200000'},
    { entry: 'Cause of Accident', value: 'VEHICLE ACCIDENT'},
    { entry: 'District Nodal Officer', value: 'GIR SOMNATH'},
    { entry: 'Recommendation For Claim', value: 'GENERATE QUERY'},
    { entry: 'Remarks', value: ''},
  ];

  constructor() { }

  ngOnInit() {
  }

}
