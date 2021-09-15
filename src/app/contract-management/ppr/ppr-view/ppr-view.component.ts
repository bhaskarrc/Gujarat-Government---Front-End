import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';





const DATA = [
  { srNo: '1', item: 'Name of the Project ', details: 'Gujarat Apex Training Institute (GATI) ', },
  { srNo: '2', item: 'Name of the Project ', details: 'ESD-Education and Skill Development', },
  {
    srNo: '3', item: 'Central Line Ministry or Department for the Project ',
    details: 'Ministry of Skill Development & Entrepreneurship ',
  },
  { srNo: '4', item: 'State Line Department for the Project.', details: 'Gujarat' },
  { srNo: '5', item: 'Proposed Project Implementation Agency ', details: '-Gujarat Skill Development Mission -' },
  { srNo: '6', item: 'Institutional Structure for Delivery ', details: 'Gujarat Skill Development Mission' },
  { srNo: '7', item: 'Basic Design of the Project', details: ' ', },
  {
    srNo: '', item: 'Goals and Objectives',
    // tslint:disable-next-line: max-line-length
    details: 'GATI has been envisaged as an apex institute for training of trainers. The focus is on enhancing the quality of vocational training in Gujarat through training of trainers. 1 & develop a cadre of specialized trainers/professionals having adequate knowledge about formulating and conducting effective skiing activities in the stat trainers to use new pedagogical tools for effective training 3. Creating new institution at state and regional level with state of art facilities for training in latest eines i optimize its activities through strong industry partnership '
  },
  {
    srNo: '', item: 'Activities Involved ',
    // tslint:disable-next-line: max-line-length
    details: 'Phase 1: 1. Identify training needs of ITI instructors of various trades and develop training curriculun/modules. Trainings to be organized within identified ITis. These training programs will be affliated with Craftsman Instructor Training Scheme (CITS) of Director General of Training (DGT). 2. Organize international/ national trainings of ITI officers! instructors Phase 2: Development of conceptual framework, institutional framework and financial plan for GATI. This includes identification of sectors, courses and number of trainees in courses to be run, administrative structure for GATI   '
  },
  {
    srNo: '', item: 'Outputs of the Project',
    // tslint:disable-next-line: max-line-length
    details: 'Establishment of vocational trainer training institute on hub and spoke model with a strong industry orientation to aid vocational training in the State '
  },
  {
    srNo: '', item: 'Outputs of the Project',
    // tslint:disable-next-line: max-line-length
    details: 'Goal Siete os is to enhance quality of vocational fons in the state. GATI wil act as a trainer training institution. It will train trainers withthe range of new updated skills necessary to fequirements of technological gr dustry. Though trainees will largely be ITI instructors and supervisory officers, itis also envisaged that GATI will provide a ing to master trainers! supervisors Froth in industry. This will ensure superior vocational training in the industry itself and also provide a regular industry connect for GAT! '
  },
  { srNo: '8', item: 'Finance Plus Element', details: '' },
  {
    srNo: '',
    item: 'System and Transformational Impact',
    // tslint:disable-next-line: max-line-length
    details: ' of vocational trainers with industrial partners along with supervisors working advanced training will keep trainers up to date with requirements of the industry which wil ete will provide industry relevant exposure and certification to trainers. Such impact training imparted to trainees in a significant way.'
  },
  {
    srNo: '',
    item: 'Innovations and Piloting of New Approaches',
    // tslint:disable-next-line: max-line-length
    details: 'GATI pahse 1 pilots basic training of ITI instructors at State level as per requirements of NCVT/ Craftsman Instructor Training Scheme (CITS) syllabus. CITS certification of DGT, MSDE will be provided to such trainers. GATI phase 2 pilots advanced training of ITI trainers in partnership with industry along with supervisors working in industry'
  },
  {
    srNo: '', item: 'Innovations in Financing Leveraging ',
    details: 'Only Technical Cooperation is being sought as funds are already available with State Government'
  },
  {
    srNo: '',
    item: 'International Best Practices Proposed to be Adopted ',
    details: 'Dual System of Training (OST) from Germany with strong industry connect to be adopted for GATI'
  },
  { srNo: '9', item: 'Other Element{if any) ', details: '' },
  {
    srNo: '',
    item: 'Private Sector Engagement (| oar ‘Supply Side,Involvement,Pro\ ion Services) ',
    // tslint:disable-next-line: max-line-length
    details: 'Participation of industry is critical to success of project. Trainers have to be trained on pedagogy and requirement of industry soft skill and technology adopted by private sector industry. Moreover, some of the trainers shall be employed by industry as well. Industry partnership will be sought as industry partner for GATI. Moreover, regular consultations shall be held with industry through workshops and seminars.'
  },
  { srNo: '', item: 'Climate Mitigation/Adaptation ', details: 'NA' },
  {
    srNo: '',
    item: 'Beneficiary Engagement/Community Involvement/Community Monitoring ',
    // tslint:disable-next-line: max-line-length
    details: '‘The project involves partnership with industry to establish an industrial training of trainer center. It is envisaged that govemance structure of GATI will comprise of a Governing Board including representatives from industry and technology experts from various selected trades'
  },
  {
    srNo: '',
    item: 'Mainstreaming of Gender ',
    // tslint:disable-next-line: max-line-length
    details: 'Currently 33% reservation for women in all Gujarat state government jobs. Women newiy recruited in ITI will get benefit of high-tech training '
  },
  { srNo: '10', item: 'Name/Names of the State/Statesinvolved', details: 'Gujarat' },
  {
    srNo: '11',
    item: 'NameiNames of the DistrictDistricts Involved',
    details: 'Hub institute will be in Spoke institutes are in Rajkot, Jamnagar, Mehsana, Vadodara, Wara districts of Gujarat.  '
  },
  { srNo: '12', item: 'Proposed Project Duration', details: '' },
  { srNo: '', item: 'From - ', details: '01/04/2020' },
  { srNo: '', item: 'To -', details: '34/03/2024 ' },
  { srNo: '', item: 'Year - ', details: '3' },
  { srNo: '', item: 'Month - ', details: '11' },
  { srNo: '13', item: 'Type of Project', details: 'State Sector ' },
  { srNo: '14', item: 'Category of State  ', details: 'General' },
];

const DATALOWER = [
  { srNo: '17', item: 'Name of the Multilateral Development Bank/ International Financial Instit  ', details: '—GIZ-GIZ ' },
  { srNo: '18', item: ' Previous Phase, If any ', details: 'No' },
  { srNo: '19', item: 'Whether Feasibility Study for the project  is available? ', details: 'No' },
  { srNo: '20', item: 'Whether Detailed Project Report(DPR) or Detailed Engineering Design for the project is available ?', details: 'No' },
  { srNo: '21', item: 'Whether following clearances are involved in the project ', details: '' },
  { srNo: '', item: 'Environment', details: 'No' },
  { srNo: '', item: 'Coastal Regulation Zone ', details: 'No' },
  { srNo: '', item: 'Forest', details: 'No' },
  { srNo: '', item: 'Heritage', details: 'No' },
  { srNo: '', item: 'Any Other(Please Specify)', details: 'No' },
  { srNo: '22', item: 'Whether any court or tribunal pro cee JS are pending that could impact the project? ', details: 'No' },
  { srNo: '23', item: 'Whether Land pooling/land acquisition/Resettlement and Rehaltation is involved in the project? ', details: 'No' },
  { srNo: '', item: 'Land Pooling ', details: 'No' },
  { srNo: '', item: 'Land acquisition  ', details: 'No' },
  { srNo: '', item: 'Resettlement & Rehaltation ', details: 'No' },
  { srNo: '', item: 'Any Other(Please Specify)', details: 'NA' },
  {
    srNo: '24',
    item: 'Whether External Assistance has been availed in the past for similar project(i.e... earlier phase etc.) ?- No ', details: ''
  },
  { srNo: '25', item: 'Details of externally aided projectes ', details: '' },
  { srNo: 'NO', item: '  ', details: '' },
  { srNo: '26', item: ' Upload relevant documents(including Feasi ', details: '' },
  { srNo: '', item: ' REvelant Documnet ', details: '' },
];
// tranche ELEMENT_DATA
const ELEMENT_DATAtrancheup: any[] = [
  { tranche: 'tranche-1', assistance: '0', implementing: 0, stategov: '0', centralgov: '0', any: '0', totalcost: '0' },
  { tranche: 'tranche-2', assistance: '0', implementing: 0, stategov: '0', centralgov: '0', any: '0', totalcost: '0' },
  { tranche: 'tranche-3', assistance: '0', implementing: 0, stategov: '0', centralgov: '0', any: '0', totalcost: '0' },
  { tranche: 'Total', assistance: '0', implementing: 0, stategov: '0', centralgov: '0', any: '0', totalcost: '0' },
  { tranche: 'Percentage', assistance: 'NaN', implementing: 'NaN', stategov: 'NaN', centralgov: 'NaN', any: 'NaN', totalcost: 'NaN' },

];
// ELEMENT_DATAM tranche
const ELEMENT_DATAtranche: any[] = [
  { tranche: 'tranche-1', assistance: '0', implementing: 0, stategov: '0', centralgov: '0', any: '0', totalcost: '0' },
  { tranche: 'tranche-2', assistance: '0', implementing: 0, stategov: '0', centralgov: '0', any: '0', totalcost: '0' },
  { tranche: 'tranche-3', assistance: '0', implementing: 0, stategov: '0', centralgov: '0', any: '0', totalcost: '0' },
  { tranche: 'Total', assistance: '0', implementing: 0, stategov: '0', centralgov: '0', any: '0', totalcost: '0' },
  { tranche: 'Percentage', assistance: 'NaN', implementing: 'NaN', stategov: 'NaN', centralgov: 'NaN', any: 'NaN', totalcost: 'NaN' },
];

// Financial
const Financial: any[] = [
  { position: 15, name: 'Financial Arrangement', },
];
// Utilisation
const Utilisation: any[] = [
  { position: 16, name: 'Hydrogen' },

];
// year
const year: any[] = [
  { year: 'INR', yearone: '0', yeartwo: '0', yearthree: '0', yearfour: '0', yearfive: '0', yearsix: '0', yearsev: '0', total: '0' },
  { year: 'USD', yearone: '0', yeartwo: '0', yearthree: '0', yearfour: '0', yearfive: '0', yearsix: '0', yearsev: '0', total: '0' }
];


@Component({
  selector: 'app-ppr-view',
  templateUrl: './ppr-view.component.html',
  styleUrls: ['./ppr-view.component.css']
})
export class PprViewComponent implements OnInit {
  // table related data
  displayedColumns = ['srNo', 'item', 'details'];
  dataSource = new MatTableDataSource(DATA);

  // lower table related data
  displayedColumnslower = ['srNo', 'item', 'details'];
  dataSourcelower = new MatTableDataSource(DATALOWER);

  // ppr financial tranche first table related data
  displayedColumns1: string[] = ['tranche', 'assistance', 'implementing', 'stategov', 'centralgov', 'any', 'totalcost'];
  dataSource1 = new MatTableDataSource(ELEMENT_DATAtrancheup);

  //  ppr financial tranche second table related data
  displayedColumnstranche: string[] = ['tranche', 'assistance', 'implementing', 'stategov', 'centralgov', 'any', 'totalcost'];
  dataSourcetranche = new MatTableDataSource(ELEMENT_DATAtranche);

  // table containing ppr financial tranche first  and ppr financial tranche second table
  displayedFinancial: string[] = ['position', 'name'];
  dataSourceFinancial = new MatTableDataSource(Financial);

  // table containing year table
  displayedColumnsUtilisation: string[] = ['position', 'name'];
  dataSourceUtilisation = new MatTableDataSource(Utilisation);

  // year table related data
  displayedColumnsyear: string[] = ['year', 'yearone', 'yeartwo', 'yearthree', 'yearfour', 'yearfive', 'yearsix', 'yearsev', 'total'];
  dataSourceyear = new MatTableDataSource(year);

  headerview: any[] = [
    {
      label: 'Created BY :',
      value: ['Shri suupreet singh Gulati IAS,Director, Gujarat ', 'Shri suupreet singh Gulati IAS,Director, Gujarat ']
    },
    { label: 'Contact Details -', value: 'director-det@gujarat.gov.in, 079-23253805, 9978408552' },
    { label: 'Nodal Officer - ', value: 'Sanjeev Kumar, Secretary, secea@gujarat.gov.in, 079-23250603' },
  ];
  date: any = new Date();
  constructor() { }
  ngOnInit() { }


}

