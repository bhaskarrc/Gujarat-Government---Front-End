import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { SelectionModel } from '@angular/cdk/collections';
import { ListValue } from 'src/app/model/common-grant';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { GrantAnnexureOneRegisterSearchCriteria, TalukaList } from 'src/app/model/local-fund';
import { CommonDirective } from 'src/app/common/directive/validation.directive';
import { Router } from '@angular/router';




@Component({
  selector: 'app-grant-annexure-one-register-search-criteria',
  templateUrl: './grant-annexure-one-register-search-criteria.component.html',
  styleUrls: ['./grant-annexure-one-register-search-criteria.component.css']
})
export class GrantAnnexureOneRegisterSearchCriteriaComponent implements OnInit {
  // variables
  referenceNumber = 'Reference Number:';
  referenceNumberDate = 'Reference Date:';
  filterElement_Data: GrantAnnexureOneRegisterSearchCriteria[];
  selection = new SelectionModel<GrantAnnexureOneRegisterSearchCriteria>(true, []);
  // date
  todayDate = Date.now();
  // directive object for workflow dialog
  directiveObj = new CommonDirective(this.route);
  // form group
  searchForm: FormGroup;
  // form control
  instituteTypeCtrl: FormControl = new FormControl();
  instituteNameCtrl: FormControl = new FormControl();
  financialYearCtrl: FormControl = new FormControl();
  districtNameCtrl: FormControl = new FormControl();
  talukaNameCtrl: FormControl = new FormControl();
  majorHeadCtrl: FormControl = new FormControl();
  idCtrl: FormControl = new FormControl();
  statusCtrl: FormControl = new FormControl();
  // lists start
  districtNameList: ListValue[] = [
    { value: '0', viewValue: 'Ahmedabad' },
    { value: '1', viewValue: 'Amreli' },
    { value: '2', viewValue: 'Anand' },
    { value: '3', viewValue: 'Aravalli' },
    { value: '4', viewValue: 'Banaskantha' },
    { value: '5', viewValue: 'Bharuch' },
    { value: '6', viewValue: 'Bhavnagar' },
    { value: '7', viewValue: 'Botad' },
    { value: '8', viewValue: 'Chhota Udaipur' },
    { value: '9', viewValue: 'Dahod' },
    { value: '10', viewValue: 'Dang' },
    { value: '11', viewValue: 'Devbhoomi Dwarka' },
    { value: '12', viewValue: 'Gandhinagar' },
    { value: '13', viewValue: 'Gir Somnath' },
    { value: '14', viewValue: 'Jamnagar' },
    { value: '15', viewValue: 'Junagadh' },
    { value: '16', viewValue: 'Kutch' },
    { value: '17', viewValue: 'Kheda' },
    { value: '18', viewValue: 'Mahisagar' },
    { value: '19', viewValue: 'Mehsana' },
    { value: '20', viewValue: 'Morbi' },
    { value: '21', viewValue: 'Narmada' },
    { value: '22', viewValue: 'Navsari' },
    { value: '23', viewValue: 'Panchmahal' },
    { value: '24', viewValue: 'Patan' },
    { value: '25', viewValue: 'Porbandar' },
    { value: '26', viewValue: 'Rajkot' },
    { value: '27', viewValue: 'Sabarkantha' },
    { value: '28', viewValue: 'Surat' },
    { value: '29', viewValue: 'Surendranagar' },
    { value: '30', viewValue: 'Tapi' },
    { value: '31', viewValue: 'Vadodara' },
    { value: '32', viewValue: 'Valsad' },
  ];

  talukaList: TalukaList[] = [
    { value: '0', districtName: '0', viewValue: 'City East' },
    { value: '1', districtName: '0', viewValue: 'City West' },
    { value: '2', districtName: '0', viewValue: 'Bavla' },
    { value: '3', districtName: '0', viewValue: 'Daskoi' },
    { value: '4', districtName: '0', viewValue: 'Detroj-Rampura' },
    { value: '5', districtName: '0', viewValue: 'Dhandhuka' },
    { value: '6', districtName: '0', viewValue: 'Dholera' },
    { value: '7', districtName: '0', viewValue: 'Dholka' },
    { value: '8', districtName: '0', viewValue: 'Mandal' },
    { value: '9', districtName: '0', viewValue: 'Sanand' },
    { value: '10', districtName: '0', viewValue: 'Viramgam' },
    { value: '0', districtName: '1', viewValue: 'Amreli' },
    { value: '1', districtName: '1', viewValue: 'Babra' },
    { value: '2', districtName: '1', viewValue: 'Bagasara' },
    { value: '3', districtName: '1', viewValue: 'Dhari' },
    { value: '4', districtName: '1', viewValue: 'Jafrabad' },
    { value: '5', districtName: '1', viewValue: 'Khambha' },
    { value: '6', districtName: '1', viewValue: 'Kunkavav vadia' },
    { value: '7', districtName: '1', viewValue: 'Lathi' },
    { value: '8', districtName: '1', viewValue: 'Lilia' },
    { value: '9', districtName: '1', viewValue: 'Rajula' },
    { value: '10', districtName: '1', viewValue: 'Savarkundla' },
    { value: '0', districtName: '2', viewValue: 'Anand' },
    { value: '1', districtName: '2', viewValue: 'Anklav' },
    { value: '2', districtName: '2', viewValue: 'Borsad' },
    { value: '3', districtName: '2', viewValue: 'Khambhat' },
    { value: '4', districtName: '2', viewValue: 'Petlad' },
    { value: '5', districtName: '2', viewValue: 'Sojitra' },
    { value: '6', districtName: '2', viewValue: 'Tarapur' },
    { value: '7', districtName: '2', viewValue: 'Umreth' },
    { value: '0', districtName: '3', viewValue: 'Bayad' },
    { value: '1', districtName: '3', viewValue: 'Bhiloda' },
    { value: '2', districtName: '3', viewValue: 'Dhansura' },
    { value: '3', districtName: '3', viewValue: 'Malpur' },
    { value: '4', districtName: '3', viewValue: 'Meghraj' },
    { value: '5', districtName: '3', viewValue: 'Modasa' },
    { value: '0', districtName: '4', viewValue: 'Amirgadh' },
    { value: '1', districtName: '4', viewValue: 'Bhabhar' },
    { value: '2', districtName: '4', viewValue: 'Danta' },
    { value: '3', districtName: '4', viewValue: 'Dantiwada' },
    { value: '4', districtName: '4', viewValue: 'Deesa' },
    { value: '5', districtName: '4', viewValue: 'Deodar' },
    { value: '6', districtName: '4', viewValue: 'Dhanera' },
    { value: '7', districtName: '4', viewValue: 'Kankrej' },
    { value: '8', districtName: '4', viewValue: 'Lakhani' },
    { value: '9', districtName: '4', viewValue: 'Palanpur' },
    { value: '10', districtName: '4', viewValue: 'Suigam' },
    { value: '11', districtName: '4', viewValue: 'Tharad' },
    { value: '12', districtName: '4', viewValue: 'Vadgam' },
    { value: '13', districtName: '4', viewValue: 'Vav' },
    { value: '0', districtName: '5', viewValue: 'Bharuch' },
    { value: '1', districtName: '5', viewValue: 'Amod' },
    { value: '2', districtName: '5', viewValue: 'Ankleshwar' },
    { value: '3', districtName: '5', viewValue: 'Hansot' },
    { value: '4', districtName: '5', viewValue: 'Jambusar' },
    { value: '5', districtName: '5', viewValue: 'Jhagadia' },
    { value: '6', districtName: '5', viewValue: 'Netrang' },
    { value: '7', districtName: '5', viewValue: 'Vagra' },
    { value: '9', districtName: '5', viewValue: 'Valia' },
    { value: '0', districtName: '6', viewValue: 'Bhavnagar' },
    { value: '1', districtName: '6', viewValue: 'Gariadhar' },
    { value: '2', districtName: '6', viewValue: 'Ghogha' },
    { value: '3', districtName: '6', viewValue: 'Jesar' },
    { value: '4', districtName: '6', viewValue: 'Mahuva' },
    { value: '5', districtName: '6', viewValue: 'Palitana' },
    { value: '6', districtName: '6', viewValue: 'Sihor' },
    { value: '7', districtName: '6', viewValue: 'Talaja' },
    { value: '8', districtName: '6', viewValue: 'Umrala' },
    { value: '9', districtName: '6', viewValue: 'Vallabhipur' },
    { value: '0', districtName: '7', viewValue: 'Botad' },
    { value: '1', districtName: '7', viewValue: 'Barwala' },
    { value: '2', districtName: '7', viewValue: 'Gadhada' },
    { value: '3', districtName: '7', viewValue: 'Ranpur' },
    { value: '0', districtName: '8', viewValue: 'Chhota Udepur' },
    { value: '1', districtName: '8', viewValue: 'Bodeli' },
    { value: '2', districtName: '8', viewValue: 'Jetpur pavi' },
    { value: '3', districtName: '8', viewValue: 'Kavant' },
    { value: '4', districtName: '8', viewValue: 'Nasvadi' },
    { value: '5', districtName: '8', viewValue: 'Sankheda' },
    { value: '0', districtName: '9', viewValue: 'Dahod' },
    { value: '1', districtName: '9', viewValue: 'Devgadh baria' },
    { value: '2', districtName: '9', viewValue: 'Dhanpur' },
    { value: '3', districtName: '9', viewValue: 'Fatepura' },
    { value: '4', districtName: '9', viewValue: 'Garbada' },
    { value: '5', districtName: '9', viewValue: 'Limkheda' },
    { value: '6', districtName: '9', viewValue: 'Sanjeli' },
    { value: '7', districtName: '9', viewValue: 'Jhalod' },
    { value: '8', districtName: '9', viewValue: 'Singvad' },
    { value: '0', districtName: '10', viewValue: 'Ahwa' },
    { value: '1', districtName: '10', viewValue: 'Subir' },
    { value: '2', districtName: '10', viewValue: 'Waghai' },
    { value: '0', districtName: '11', viewValue: 'Bhanvad' },
    { value: '1', districtName: '11', viewValue: 'Kalyanpur' },
    { value: '2', districtName: '11', viewValue: 'Khambhalia' },
    { value: '3', districtName: '11', viewValue: 'Okhamandal' },
    { value: '0', districtName: '12', viewValue: 'Gandhinagar' },
    { value: '1', districtName: '12', viewValue: 'Dehgam' },
    { value: '2', districtName: '12', viewValue: 'Kalol' },
    { value: '3', districtName: '12', viewValue: 'Mansa' },
    { value: '0', districtName: '13', viewValue: 'Gir-Gadhada' },
    { value: '1', districtName: '13', viewValue: 'Kodinar' },
    { value: '2', districtName: '13', viewValue: 'Sutrapada' },
    { value: '3', districtName: '13', viewValue: 'Talala' },
    { value: '4', districtName: '13', viewValue: 'Una' },
    { value: '5', districtName: '13', viewValue: 'Patan-Veraval' },
    { value: '0', districtName: '14', viewValue: 'Jamnagar' },
    { value: '1', districtName: '14', viewValue: 'Dhrol' },
    { value: '2', districtName: '14', viewValue: 'Jamjodhpur' },
    { value: '3', districtName: '14', viewValue: 'Jodiya' },
    { value: '4', districtName: '14', viewValue: 'Kalavad' },
    { value: '5', districtName: '14', viewValue: 'Lalpur' },
    { value: '0', districtName: '15', viewValue: 'Junagadh City' },
    { value: '1', districtName: '15', viewValue: 'Bhesana' },
    { value: '2', districtName: '15', viewValue: 'Junagadh Rural' },
    { value: '3', districtName: '15', viewValue: 'Keshod' },
    { value: '4', districtName: '15', viewValue: 'Malia' },
    { value: '5', districtName: '15', viewValue: 'Manavadar' },
    { value: '6', districtName: '15', viewValue: 'Mangrol' },
    { value: '7', districtName: '15', viewValue: 'Mendarda' },
    { value: '8', districtName: '15', viewValue: 'Vanthali' },
    { value: '9', districtName: '15', viewValue: 'Visavadar' },
    { value: '0', districtName: '16', viewValue: 'Abdasa' },
    { value: '1', districtName: '16', viewValue: 'Anjar' },
    { value: '2', districtName: '16', viewValue: 'Bhachau' },
    { value: '3', districtName: '16', viewValue: 'Bhuj' },
    { value: '4', districtName: '16', viewValue: 'Gandhidham' },
    { value: '5', districtName: '16', viewValue: 'Lakhpat' },
    { value: '6', districtName: '16', viewValue: 'Mandvi' },
    { value: '7', districtName: '16', viewValue: 'Mundra' },
    { value: '8', districtName: '16', viewValue: 'Nakhatrana' },
    { value: '9', districtName: '16', viewValue: 'Rapar' },
    { value: '0', districtName: '17', viewValue: 'Kheda' },
    { value: '1', districtName: '17', viewValue: 'Galteshwar' },
    { value: '2', districtName: '17', viewValue: 'Kapadvanj' },
    { value: '3', districtName: '17', viewValue: 'Kathlal' },
    { value: '4', districtName: '17', viewValue: 'Mahudha' },
    { value: '5', districtName: '17', viewValue: 'Matar' },
    { value: '6', districtName: '17', viewValue: 'Mehmedabad' },
    { value: '7', districtName: '17', viewValue: 'Nadiad' },
    { value: '8', districtName: '17', viewValue: 'Thasra' },
    { value: '9', districtName: '17', viewValue: 'Vaso' },
    { value: '0', districtName: '18', viewValue: 'Balasinor' },
    { value: '1', districtName: '18', viewValue: 'Kadana' },
    { value: '2', districtName: '18', viewValue: 'Khanpur' },
    { value: '3', districtName: '18', viewValue: 'Lunawada' },
    { value: '4', districtName: '18', viewValue: 'Santrampur' },
    { value: '5', districtName: '18', viewValue: 'Virpur' },
    { value: '0', districtName: '19', viewValue: 'Mehsana' },
    { value: '1', districtName: '19', viewValue: 'Becharaji' },
    { value: '2', districtName: '19', viewValue: 'Jotana' },
    { value: '3', districtName: '19', viewValue: 'Kadi' },
    { value: '4', districtName: '19', viewValue: 'Kheralu' },
    { value: '5', districtName: '19', viewValue: 'Satlasana' },
    { value: '6', districtName: '19', viewValue: 'Unjha' },
    { value: '7', districtName: '19', viewValue: 'Vadnagar' },
    { value: '8', districtName: '19', viewValue: 'Vijapur' },
    { value: '9', districtName: '19', viewValue: 'Visnagar' },
    { value: '10', districtName: '19', viewValue: 'Gojariya' },
    { value: '0', districtName: '20', viewValue: 'Halvad' },
    { value: '1', districtName: '20', viewValue: 'Maliya' },
    { value: '2', districtName: '20', viewValue: 'Morbi' },
    { value: '3', districtName: '20', viewValue: 'Tankara' },
    { value: '4', districtName: '20', viewValue: 'Wankaner' },
    { value: '0', districtName: '21', viewValue: 'Dediapada' },
    { value: '1', districtName: '21', viewValue: 'Garudeshwar' },
    { value: '2', districtName: '21', viewValue: 'Nandod' },
    { value: '3', districtName: '21', viewValue: 'Sagbara' },
    { value: '4', districtName: '21', viewValue: 'Tilakwada' },
    { value: '0', districtName: '22', viewValue: 'Navsari' },
    { value: '1', districtName: '22', viewValue: 'Vansda' },
    { value: '2', districtName: '22', viewValue: 'Chikhli' },
    { value: '3', districtName: '22', viewValue: 'Gandevi' },
    { value: '4', districtName: '22', viewValue: 'Jalalpore' },
    { value: '5', districtName: '22', viewValue: 'Khergam' },
    { value: '0', districtName: '23', viewValue: 'Ghoghamba' },
    { value: '1', districtName: '23', viewValue: 'Godhra' },
    { value: '2', districtName: '23', viewValue: 'Halol' },
    { value: '3', districtName: '23', viewValue: 'Jambughoda' },
    { value: '4', districtName: '23', viewValue: 'Kalol' },
    { value: '5', districtName: '23', viewValue: 'Morwa Hadaf' },
    { value: '6', districtName: '23', viewValue: 'Shehera' },
    { value: '0', districtName: '24', viewValue: 'Patan' },
    { value: '1', districtName: '24', viewValue: 'Chanasma' },
    { value: '2', districtName: '24', viewValue: 'Harij' },
    { value: '3', districtName: '24', viewValue: 'Radhanpur' },
    { value: '4', districtName: '24', viewValue: 'Sami' },
    { value: '5', districtName: '24', viewValue: 'Sankheswar' },
    { value: '6', districtName: '24', viewValue: 'Santalpur' },
    { value: '7', districtName: '24', viewValue: 'Sarasvati' },
    { value: '8', districtName: '24', viewValue: 'Sidhpur' },
    { value: '0', districtName: '25', viewValue: 'Porbandar' },
    { value: '1', districtName: '25', viewValue: 'Kutiyana' },
    { value: '2', districtName: '25', viewValue: 'Ranavav' },
    { value: '0', districtName: '26', viewValue: 'Rajkot' },
    { value: '1', districtName: '26', viewValue: 'Dhoraji' },
    { value: '2', districtName: '26', viewValue: 'Gondal' },
    { value: '3', districtName: '26', viewValue: 'Jamkandorna' },
    { value: '4', districtName: '26', viewValue: 'Jasdan' },
    { value: '5', districtName: '26', viewValue: 'Jetpur' },
    { value: '6', districtName: '26', viewValue: 'Kotada Sangani' },
    { value: '7', districtName: '26', viewValue: 'Lodhika' },
    { value: '8', districtName: '26', viewValue: 'Paddhari' },
    { value: '9', districtName: '26', viewValue: 'Upleta' },
    { value: '10', districtName: '26', viewValue: 'Vinchchiya' },
    { value: '0', districtName: '27', viewValue: 'Himatnagar' },
    { value: '1', districtName: '27', viewValue: 'Idar' },
    { value: '2', districtName: '27', viewValue: 'Khedbrahma' },
    { value: '3', districtName: '27', viewValue: 'Poshina' },
    { value: '4', districtName: '27', viewValue: 'Prantij' },
    { value: '5', districtName: '27', viewValue: 'Talod' },
    { value: '6', districtName: '27', viewValue: 'Vadali' },
    { value: '7', districtName: '27', viewValue: 'Vijaynagar' },
    { value: '0', districtName: '28', viewValue: 'Surat' },
    { value: '1', districtName: '28', viewValue: 'Bardoli' },
    { value: '2', districtName: '28', viewValue: 'Choryasi' },
    { value: '3', districtName: '28', viewValue: 'Kamrej' },
    { value: '4', districtName: '28', viewValue: 'Mahuva' },
    { value: '5', districtName: '28', viewValue: 'Mandvi' },
    { value: '6', districtName: '28', viewValue: 'Mangrol' },
    { value: '7', districtName: '28', viewValue: 'Olpad' },
    { value: '8', districtName: '28', viewValue: 'Palsana' },
    { value: '9', districtName: '28', viewValue: 'Umarpada' },
    { value: '0', districtName: '29', viewValue: 'Chotila' },
    { value: '1', districtName: '29', viewValue: 'Chuda' },
    { value: '2', districtName: '29', viewValue: 'Dasada' },
    { value: '3', districtName: '29', viewValue: 'Dhrangadhra' },
    { value: '4', districtName: '29', viewValue: 'Lakhtar' },
    { value: '5', districtName: '29', viewValue: 'Limbdi' },
    { value: '6', districtName: '29', viewValue: 'Muli ' },
    { value: '7', districtName: '29', viewValue: 'Sayla' },
    { value: '8', districtName: '29', viewValue: 'Thangadh' },
    { value: '9', districtName: '29', viewValue: 'Wadhwan' },
    { value: '0', districtName: '30', viewValue: 'Nizar' },
    { value: '1', districtName: '30', viewValue: 'Songadh' },
    { value: '2', districtName: '30', viewValue: 'Uchhal' },
    { value: '3', districtName: '30', viewValue: 'Valod' },
    { value: '4', districtName: '30', viewValue: 'Vyara' },
    { value: '5', districtName: '30', viewValue: 'Kukarmunda' },
    { value: '6', districtName: '30', viewValue: 'Dolvan' },
    { value: '0', districtName: '31', viewValue: 'Vadodara' },
    { value: '1', districtName: '31', viewValue: 'Dabhoi' },
    { value: '2', districtName: '31', viewValue: 'Desar' },
    { value: '3', districtName: '31', viewValue: 'Karjan' },
    { value: '4', districtName: '31', viewValue: 'Padra' },
    { value: '5', districtName: '31', viewValue: 'Savli' },
    { value: '6', districtName: '31', viewValue: 'Sinor' },
    { value: '7', districtName: '31', viewValue: 'Vaghodia' },
    { value: '0', districtName: '32', viewValue: 'Valsad' },
    { value: '1', districtName: '32', viewValue: 'Dharampur' },
    { value: '2', districtName: '32', viewValue: 'Kaprada' },
    { value: '3', districtName: '32', viewValue: 'Pardi' },
    { value: '4', districtName: '32', viewValue: 'Umbergaon' },
    { value: '5', districtName: '32', viewValue: 'Vapi' },


  ];
  financialYearList: ListValue[] = [
    { value: '0', viewValue: '2017-18' },
    { value: '1', viewValue: '2018-19' },
    { value: '2', viewValue: '2019-20' },
    { value: '3', viewValue: '2020-21' },
  ];

  instituteTypeList: ListValue[] = [
    { value: '0', viewValue: 'Maha Nagarpalika' },
    { value: '1', viewValue: 'Nagarpalika' },
    { value: '2', viewValue: 'District Panchayat' },
    { value: '3', viewValue: 'Taluka Panchayat' },
    { value: '4', viewValue: 'University' },
    { value: '5', viewValue: 'Municiple School Board' },
    { value: '6', viewValue: 'Village Panchayat' },
    { value: '7', viewValue: 'Police Welfare Fund' },
    { value: '8', viewValue: 'Provident Fund of District Panchayat' },
    { value: '9', viewValue: 'Provident Fund of Secondary Education office' },
    { value: '10', viewValue: 'Ambaji Temple Trust' },
    { value: '11', viewValue: 'Others' },
  ];
  instituteNameList: ListValue[] = [
    { value: '0', viewValue: 'Dahegam Nagarpalika' },
    { value: '1', viewValue: 'DMDG' },
    { value: '2', viewValue: 'District Panchayat - Gandhinagar' },
    { value: '3', viewValue: 'GMC' },
    { value: '4', viewValue: 'GPCB' },
    { value: '5', viewValue: 'Village Panchayat' },
    { value: '6', viewValue: 'District Panchayat - Ahmedabad' },
  ];

  majorHeadList: ListValue[] = [
    { value: '0', viewValue: '2202 Education' },
    { value: '1', viewValue: '2210 Public Health' },
  ];

  talukaNameList: TalukaList[];
  // lists end

  // table data start
  elementData: GrantAnnexureOneRegisterSearchCriteria[] = [
    {
      financialYear: '2017-18',
      district: 'Surat',
      taluka: 'Surat',
      id: '1',
      instituteType: 'District Panchayat',
      instituteName: 'Surat District Panchayat',
      majorHead: '2202 Education',
      openingBalanceCapital: 8000,
      openingBalanceRevenue: 2000,
      totalOpeningBalance: 10000,
      grantReceivedCapital: 10000,
      grantReceivedRevenue: 5000,
      totalGrantReceived: 15000,
      expenseCapital: 15000,
      expenseRevenue: 6000,
      totalActualExpenditure: 21000,
      talukaCapital: 4500,
      talukaRevenue: 2400,
      totalTalukaTransfer: 6900,
      grantCapital: 2500,
      grantRevenue: 500,
      totalGrantRefund: 3000,
      closingBalanceCapital: 5500,
      closingBalanceRevenue: 1500,
      totalClosingBalance: 7000,
      grantSavedCapital: 2500,
      grantSavedRevenue: 500,
      totalGrantSaved: 3000,
      overExpensesCapital: 0,
      overExpensesRevenue: 0,
      totalOverExpenses: 0,
      remarksCapital: 'NA',
      remarksRevenue: 'NA'

    },
    {
      financialYear: '2017-18',
      district: 'Surat',
      taluka: 'Kamrej',
      id: '4',
      instituteType: 'Taluka Panchayat',
      instituteName: 'Kamrej Taluka Panchayat',
      majorHead: '2210 Public Health',
      openingBalanceCapital: 12000,
      openingBalanceRevenue: 3000,
      totalOpeningBalance: 15000,
      grantReceivedCapital: 7500,
      grantReceivedRevenue: 2500,
      totalGrantReceived: 10000,
      expenseCapital: 16000,
      expenseRevenue: 4000,
      totalActualExpenditure: 20000,
      talukaCapital: 12000,
      talukaRevenue: 5000,
      totalTalukaTransfer: 17000,
      grantCapital: 2500,
      grantRevenue: 500,
      totalGrantRefund: 3000,
      closingBalanceCapital: 6000,
      closingBalanceRevenue: 2000,
      totalClosingBalance: 8000,
      grantSavedCapital: 2500,
      grantSavedRevenue: 500,
      totalGrantSaved: 3000,
      overExpensesCapital: 0,
      overExpensesRevenue: 0,
      totalOverExpenses: 0,
      remarksCapital: 'NA',
      remarksRevenue: 'NA'
    },
    {
      financialYear: '2018-19',
      district: 'Ahmedabad',
      taluka: 'Bavla',
      id: '5',
      instituteType: 'Taluka Panchayat',
      instituteName: 'Bavla Taluka Panchayat',
      majorHead: '2210 Public Health',
      openingBalanceCapital: 15000,
      openingBalanceRevenue: 5000,
      totalOpeningBalance: 20000,
      grantReceivedCapital: 6000,
      grantReceivedRevenue: 4000,
      totalGrantReceived: 10000,
      expenseCapital: 23000,
      expenseRevenue: 7000,
      totalActualExpenditure: 30000,
      talukaCapital: 10969,
      talukaRevenue: 2500,
      totalTalukaTransfer: 13469,
      grantCapital: 2000,
      grantRevenue: 0,
      totalGrantRefund: 2000,
      closingBalanceCapital: 0,
      closingBalanceRevenue: 2000,
      totalClosingBalance: 2000,
      grantSavedCapital: 2000,
      grantSavedRevenue: 0,
      totalGrantSaved: 2000,
      overExpensesCapital: 0,
      overExpensesRevenue: 0,
      totalOverExpenses: 0,
      remarksCapital: 'NA',
      remarksRevenue: 'NA'
    },
    {
      financialYear: '2018-19',
      district: 'Ahmedabad',
      taluka: 'Dholka',
      id: '7',
      instituteType: 'Taluka Panchayat',
      instituteName: 'Dholka Taluka Panchayat',
      majorHead: '2210 Public Health',
      openingBalanceCapital: 10000,
      openingBalanceRevenue: 2000,
      totalOpeningBalance: 12000,
      grantReceivedCapital: 5000,
      grantReceivedRevenue: 0,
      totalGrantReceived: 5000,
      expenseCapital: 10000,
      expenseRevenue: 5000,
      totalActualExpenditure: 15000,
      talukaCapital: 45367,
      talukaRevenue: 12000,
      totalTalukaTransfer: 57367,
      grantCapital: 500,
      grantRevenue: 0,
      totalGrantRefund: 500,
      closingBalanceCapital: 5500,
      closingBalanceRevenue: -3000,
      totalClosingBalance: 2500,
      grantSavedCapital: 500,
      grantSavedRevenue: 0,
      totalGrantSaved: 500,
      overExpensesCapital: 0,
      overExpensesRevenue: 0,
      totalOverExpenses: 0,
      remarksCapital: 'NA',
      remarksRevenue: 'NA'
    },
    {
      financialYear: '2018-19',
      district: 'Gandhinagar',
      taluka: 'Kalol',
      id: '9',
      instituteType: 'Taluka Panchayat',
      instituteName: 'Kalol Taluka Panchayat',
      majorHead: '2202 Education',
      openingBalanceCapital: 30000,
      openingBalanceRevenue: 6000,
      totalOpeningBalance: 36000,
      grantReceivedCapital: 12000,
      grantReceivedRevenue: 3000,
      totalGrantReceived: 15000,
      expenseCapital: 38000,
      expenseRevenue: 7000,
      totalActualExpenditure: 45000,
      talukaCapital: 23649,
      talukaRevenue: 18500,
      totalTalukaTransfer: 42149,
      grantCapital: 3000,
      grantRevenue: 1000,
      totalGrantRefund: 4000,
      closingBalanceCapital: 7000,
      closingBalanceRevenue: 3000,
      totalClosingBalance: 10000,
      grantSavedCapital: 3000,
      grantSavedRevenue: 1000,
      totalGrantSaved: 4000,
      overExpensesCapital: 0,
      overExpensesRevenue: 0,
      totalOverExpenses: 0,
      remarksCapital: 'NA',
      remarksRevenue: 'NA'
    },
    {
      financialYear: '2019-20',
      district: 'Gandhinagar',
      taluka: 'Gandhinagar',
      id: '12',
      instituteType: 'District Panchayat',
      instituteName: 'Gandhinagar District Panchayat',
      majorHead: '2202 Education',
      openingBalanceCapital: 40000,
      openingBalanceRevenue: 10000,
      totalOpeningBalance: 50000,
      grantReceivedCapital: 17000,
      grantReceivedRevenue: 3000,
      totalGrantReceived: 20000,
      expenseCapital: 58460,
      expenseRevenue: 6540,
      totalActualExpenditure: 65000,
      talukaCapital: 12000,
      talukaRevenue: 6500,
      totalTalukaTransfer: 18500,
      grantCapital: 2500,
      grantRevenue: 1000,
      totalGrantRefund: 3500,
      closingBalanceCapital: 1040,
      closingBalanceRevenue: 7460,
      totalClosingBalance: 8500,
      grantSavedCapital: 2500,
      grantSavedRevenue: 1000,
      totalGrantSaved: 3500,
      overExpensesCapital: 0,
      overExpensesRevenue: 0,
      totalOverExpenses: 0,
      remarksCapital: 'NA',
      remarksRevenue: 'NA'
    },
    {
      financialYear: '2019-20',
      district: 'Morbi',
      taluka: 'Jetpar',
      id: '10',
      instituteType: 'Nagar Palika',
      instituteName: 'Jetpar Nagar Palika',
      majorHead: '2210 Public Health',
      openingBalanceCapital: 7000,
      openingBalanceRevenue: 3000,
      totalOpeningBalance: 10000,
      grantReceivedCapital: 4000,
      grantReceivedRevenue: 1000,
      totalGrantReceived: 5000,
      expenseCapital: 8950,
      expenseRevenue: 5050,
      totalActualExpenditure: 14000,
      talukaCapital: 5000,
      talukaRevenue: 2500,
      totalTalukaTransfer: 7500,
      grantCapital: 100,
      grantRevenue: 0,
      totalGrantRefund: 100,
      closingBalanceCapital: 2150,
      closingBalanceRevenue: -1050,
      totalClosingBalance: 1100,
      grantSavedCapital: 100,
      grantSavedRevenue: 0,
      totalGrantSaved: 100,
      overExpensesCapital: 0,
      overExpensesRevenue: 0,
      totalOverExpenses: 0,
      remarksCapital: 'NA',
      remarksRevenue: 'NA'
    },
    {
      financialYear: '2019-20',
      district: 'Morbi',
      taluka: 'Halvad',
      id: '18',
      instituteType: 'Nagar Palika',
      instituteName: 'Halvad Nagar Palika',
      majorHead: '2210 Public Health',
      openingBalanceCapital: 6540,
      openingBalanceRevenue: 3460,
      totalOpeningBalance: 10000,
      grantReceivedCapital: 5000,
      grantReceivedRevenue: 0,
      totalGrantReceived: 5000,
      expenseCapital: 10940,
      expenseRevenue: 1560,
      totalActualExpenditure: 12500,
      talukaCapital: 2467,
      talukaRevenue: 0,
      totalTalukaTransfer: 2467,
      grantCapital: 100,
      grantRevenue: 0,
      totalGrantRefund: 100,
      closingBalanceCapital: 700,
      closingBalanceRevenue: 1900,
      totalClosingBalance: 2600,
      grantSavedCapital: 100,
      grantSavedRevenue: 0,
      totalGrantSaved: 100,
      overExpensesCapital: 0,
      overExpensesRevenue: 0,
      totalOverExpenses: 0,
      remarksCapital: 'NA',
      remarksRevenue: 'NA'
    },
  ];
  dataSource = new MatTableDataSource<GrantAnnexureOneRegisterSearchCriteria>(this.elementData);
  displayedColumns: string[] = [
    'select',
    'serialNo',
    'financialYear',
    'district',
    'taluka',
    'id',
    'instituteType',
    'instituteName',
    'majorHead',
    'openingBalanceCapital',
    'openingBalanceRevenue',
    'totalOpeningBalance',
    'grantReceivedCapital',
    'grantReceivedRevenue',
    'totalGrantReceived',
    'expenseCapital',
    'expenseRevenue',
    'totalActualExpenditure',
    'talukaCapital',
    'talukaRevenue',
    'totalTalukaTransfer',
    'grantCapital',
    'grantRevenue',
    'totalGrantRefund',
    'closingBalanceCapital',
    'closingBalanceRevenue',
    'totalClosingBalance',
    'grantSavedCapital',
    'grantSavedRevenue',
    'totalGrantSaved',
    'overExpensesCapital',
    'overExpensesRevenue',
    'totalOverExpenses',
    'remarksCapital',
    'remarksRevenue',
    'action'
  ];
  // table data end

  // constructor
  constructor(private fb: FormBuilder, public dialog: MatDialog, private route: Router) { }

  ngOnInit() {
    this.searchFormData();
  }

  // form data
  searchFormData() {
    this.searchForm = this.fb.group({
      financialYear: [''],
      districtName: [''],
      talukaName: [''],
      instituteType: [''],
      instituteName: [''],
      majorHead: [''],
      id: [''],
      status: [''],

    });
  }

  // search data on basis of search fields
  onSearch() {
    const formVal = this.searchForm.value;

    const instituteTypeValue = formVal.instituteType;
    const instituteNameValue = formVal.instituteName;
    const financialYearValue = formVal.financialYear;
    const districtNameValue = formVal.districtName;
    const talukaNameValue = formVal.talukaName;
    const majorHeadValue = formVal.majorHead;


    if (formVal.instituteType !== '' && formVal.instituteType != null) {
      const instituteType = this.instituteTypeList[instituteTypeValue].viewValue;
      this.filterElement_Data = this.elementData.filter(
        searchBy => searchBy.instituteType.toLowerCase() === instituteType.toLowerCase());
      this.dataSource = new MatTableDataSource<GrantAnnexureOneRegisterSearchCriteria>(this.filterElement_Data);
    }

    if (formVal.instituteName !== '' && formVal.instituteName != null) {
      const instituteName = this.instituteNameList[instituteNameValue].viewValue;
      this.filterElement_Data = this.elementData.filter(
        searchBy => searchBy.instituteName.toLowerCase() === instituteName.toLowerCase());
      this.dataSource = new MatTableDataSource<GrantAnnexureOneRegisterSearchCriteria>(this.filterElement_Data);
    }

    if (formVal.financialYear !== '' && formVal.financialYear != null) {
      const financialYear = this.financialYearList[financialYearValue].viewValue;
      this.filterElement_Data = this.elementData.filter(
        searchBy => searchBy.financialYear.toLowerCase() === financialYear.toLowerCase());
      this.dataSource = new MatTableDataSource<GrantAnnexureOneRegisterSearchCriteria>(this.filterElement_Data);
    }

    if (formVal.districtName !== '' && formVal.districtName != null) {
      const districtName = this.districtNameList[districtNameValue].viewValue;
      this.filterElement_Data = this.elementData.filter(
        searchBy => searchBy.district.toLowerCase() === districtName.toLowerCase());
      this.dataSource = new MatTableDataSource<GrantAnnexureOneRegisterSearchCriteria>(this.filterElement_Data);
    }

    if (formVal.talukaName !== '' && formVal.talukaName != null) {
      const talukaName = this.talukaNameList[talukaNameValue].viewValue;
      this.filterElement_Data = this.elementData.filter(
        searchBy => searchBy.taluka.toLowerCase() === talukaName.toLowerCase());
      this.dataSource = new MatTableDataSource<GrantAnnexureOneRegisterSearchCriteria>(this.filterElement_Data);
    }

    if (formVal.majorHead !== '' && formVal.majorHead != null) {
      const majorHead = this.majorHeadList[majorHeadValue].viewValue;
      this.filterElement_Data = this.elementData.filter(
        searchBy => searchBy.majorHead.toLowerCase() === majorHead.toLowerCase());
      this.dataSource = new MatTableDataSource<GrantAnnexureOneRegisterSearchCriteria>(this.filterElement_Data);
    }

    if ((formVal.talukaName === '' || formVal.talukaName == null) &&
      (formVal.instituteName === '' || formVal.instituteName == null) &&
      (formVal.instituteType === '' || formVal.instituteType == null) &&
      (formVal.financialYear === '' || formVal.financialYear == null) &&
      (formVal.districtName === '' || formVal.districtName == null) &&
      (formVal.majorHead === '' || formVal.majorHead == null)
    ) {
      this.dataSource = new MatTableDataSource<GrantAnnexureOneRegisterSearchCriteria>(this.elementData);
    }

  }

  // fiter taluka on basis of district
  selectDistrict() {
    const district = this.searchForm.value.districtName;
    if (district !== '' && district != null) {
      this.talukaNameList = this.talukaList.filter(
        searchBy => searchBy.districtName.toLowerCase() === district.toLowerCase());
    }
  }

  // reset form
  clearForm() {
    this.searchForm.reset();
  }

  // common reset button
  reset() {
  }

}
