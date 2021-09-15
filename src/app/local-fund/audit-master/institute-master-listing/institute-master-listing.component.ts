import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import { MatTableDataSource, throwToolbarMixedModesError, MatPaginator, MatDialog } from '@angular/material';
import { isContextDirty } from '@angular/core/src/render3/styling';
import { SelectionModel } from '@angular/cdk/collections';
import { WorkflowDetailsLfComponent } from '../../workflow-details-lf/workflow-details-lf.component';
import { InstituteMasterListing } from 'src/app/model/local-fund';
import { CommonDirective } from 'src/app/common/directive/validation.directive';
import { Router } from '@angular/router';
import { LocalFundDirective } from 'src/app/common/directive/local-fund-directive';

@Component({
  selector: 'app-institute-master-listing',
  templateUrl: './institute-master-listing.component.html',
  styleUrls: ['./institute-master-listing.component.css']
})
export class InstituteMasterListingComponent implements OnInit {

  isEditClicked = false;
  isViewClicked = false;
  searchForm: FormGroup;
  instituteMasterListingForm: FormGroup;
  instituteMasterListingEditForm: FormGroup;
  totalMandaysValue = 0;
  indexValue: number;
  filterElement_Data: any[];
  talukaNameList: any[];
  changedAdditionalMandays = 0;
  selection = new SelectionModel<InstituteMasterListing>(true, []);

  directiveObj = new CommonDirective(this.route);
  directiveObject = new LocalFundDirective(this.dialog);


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

  talukaList: any[] = [
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
    { value: '1', districtName: '1', viewValue: 'Amreli' },
    { value: '2', districtName: '1', viewValue: 'Babra' },
    { value: '3', districtName: '1', viewValue: 'Bagasara' },
    { value: '4', districtName: '1', viewValue: 'Dhari' },
    { value: '5', districtName: '1', viewValue: 'Jafrabad' },
    { value: '6', districtName: '1', viewValue: 'Khambha' },
    { value: '7', districtName: '1', viewValue: 'Kunkavav vadia' },
    { value: '8', districtName: '1', viewValue: 'Lathi' },
    { value: '9', districtName: '1', viewValue: 'Lilia' },
    { value: '10', districtName: '1', viewValue: 'Rajula' },
    { value: '11', districtName: '1', viewValue: 'Savarkundla' },
    { value: '1', districtName: '2', viewValue: 'Anand' },
    { value: '2', districtName: '2', viewValue: 'Anklav' },
    { value: '3', districtName: '2', viewValue: 'Borsad' },
    { value: '4', districtName: '2', viewValue: 'Khambhat' },
    { value: '5', districtName: '2', viewValue: 'Petlad' },
    { value: '6', districtName: '2', viewValue: 'Sojitra' },
    { value: '7', districtName: '2', viewValue: 'Tarapur' },
    { value: '8', districtName: '2', viewValue: 'Umreth' },
    { value: '1', districtName: '3', viewValue: 'Bayad' },
    { value: '2', districtName: '3', viewValue: 'Bhiloda' },
    { value: '3', districtName: '3', viewValue: 'Dhansura' },
    { value: '4', districtName: '3', viewValue: 'Malpur' },
    { value: '5', districtName: '3', viewValue: 'Meghraj' },
    { value: '6', districtName: '3', viewValue: 'Modasa' },
    { value: '1', districtName: '4', viewValue: 'Amirgadh' },
    { value: '2', districtName: '4', viewValue: 'Bhabhar' },
    { value: '3', districtName: '4', viewValue: 'Danta' },
    { value: '4', districtName: '4', viewValue: 'Dantiwada' },
    { value: '5', districtName: '4', viewValue: 'Deesa' },
    { value: '6', districtName: '4', viewValue: 'Deodar' },
    { value: '7', districtName: '4', viewValue: 'Dhanera' },
    { value: '8', districtName: '4', viewValue: 'Kankrej' },
    { value: '9', districtName: '4', viewValue: 'Lakhani' },
    { value: '10', districtName: '4', viewValue: 'Palanpur' },
    { value: '11', districtName: '4', viewValue: 'Suigam' },
    { value: '12', districtName: '4', viewValue: 'Tharad' },
    { value: '13', districtName: '4', viewValue: 'Vadgam' },
    { value: '14', districtName: '4', viewValue: 'Vav' },
    { value: '1', districtName: '5', viewValue: 'Bharuch' },
    { value: '2', districtName: '5', viewValue: 'Amod' },
    { value: '3', districtName: '5', viewValue: 'Ankleshwar' },
    { value: '4', districtName: '5', viewValue: 'Hansot' },
    { value: '5', districtName: '5', viewValue: 'Jambusar' },
    { value: '6', districtName: '5', viewValue: 'Jhagadia' },
    { value: '7', districtName: '5', viewValue: 'Netrang' },
    { value: '8', districtName: '5', viewValue: 'Vagra' },
    { value: '9', districtName: '5', viewValue: 'Valia' },
    { value: '1', districtName: '6', viewValue: 'Bhavnagar' },
    { value: '2', districtName: '6', viewValue: 'Gariadhar' },
    { value: '3', districtName: '6', viewValue: 'Ghogha' },
    { value: '4', districtName: '6', viewValue: 'Jesar' },
    { value: '5', districtName: '6', viewValue: 'Mahuva' },
    { value: '6', districtName: '6', viewValue: 'Palitana' },
    { value: '7', districtName: '6', viewValue: 'Sihor' },
    { value: '8', districtName: '6', viewValue: 'Talaja' },
    { value: '9', districtName: '6', viewValue: 'Umrala' },
    { value: '10', districtName: '6', viewValue: 'Vallabhipur' },
    { value: '1', districtName: '7', viewValue: 'Botad' },
    { value: '2', districtName: '7', viewValue: 'Barwala' },
    { value: '3', districtName: '7', viewValue: 'Gadhada' },
    { value: '4', districtName: '7', viewValue: 'Ranpur' },
    { value: '1', districtName: '8', viewValue: 'Chhota Udepur' },
    { value: '2', districtName: '8', viewValue: 'Bodeli' },
    { value: '3', districtName: '8', viewValue: 'Jetpur pavi' },
    { value: '4', districtName: '8', viewValue: 'Kavant' },
    { value: '5', districtName: '8', viewValue: 'Nasvadi' },
    { value: '6', districtName: '8', viewValue: 'Sankheda' },
    { value: '1', districtName: '9', viewValue: 'Dahod' },
    { value: '2', districtName: '9', viewValue: 'Devgadh baria' },
    { value: '3', districtName: '9', viewValue: 'Dhanpur' },
    { value: '4', districtName: '9', viewValue: 'Fatepura' },
    { value: '5', districtName: '9', viewValue: 'Garbada' },
    { value: '6', districtName: '9', viewValue: 'Limkheda' },
    { value: '7', districtName: '9', viewValue: 'Sanjeli' },
    { value: '8', districtName: '9', viewValue: 'Jhalod' },
    { value: '9', districtName: '9', viewValue: 'Singvad' },
    { value: '1', districtName: '10', viewValue: 'Ahwa' },
    { value: '2', districtName: '10', viewValue: 'Subir' },
    { value: '3', districtName: '10', viewValue: 'Waghai' },
    { value: '1', districtName: '11', viewValue: 'Bhanvad' },
    { value: '2', districtName: '11', viewValue: 'Kalyanpur' },
    { value: '3', districtName: '11', viewValue: 'Khambhalia' },
    { value: '4', districtName: '11', viewValue: 'Okhamandal' },
    { value: '1', districtName: '12', viewValue: 'Gandhinagar' },
    { value: '2', districtName: '12', viewValue: 'Dehgam' },
    { value: '3', districtName: '12', viewValue: 'Kalol' },
    { value: '4', districtName: '12', viewValue: 'Mansa' },
    { value: '1', districtName: '13', viewValue: 'Gir-Gadhada' },
    { value: '2', districtName: '13', viewValue: 'Kodinar' },
    { value: '3', districtName: '13', viewValue: 'Sutrapada' },
    { value: '4', districtName: '13', viewValue: 'Talala' },
    { value: '5', districtName: '13', viewValue: 'Una' },
    { value: '6', districtName: '13', viewValue: 'Patan-Veraval' },
    { value: '1', districtName: '14', viewValue: 'Jamnagar' },
    { value: '2', districtName: '14', viewValue: 'Dhrol' },
    { value: '3', districtName: '14', viewValue: 'Jamjodhpur' },
    { value: '4', districtName: '14', viewValue: 'Jodiya' },
    { value: '5', districtName: '14', viewValue: 'Kalavad' },
    { value: '6', districtName: '14', viewValue: 'Lalpur' },
    { value: '1', districtName: '15', viewValue: 'Junagadh City' },
    { value: '2', districtName: '15', viewValue: 'Bhesana' },
    { value: '3', districtName: '15', viewValue: 'Junagadh Rural' },
    { value: '4', districtName: '15', viewValue: 'Keshod' },
    { value: '5', districtName: '15', viewValue: 'Malia' },
    { value: '6', districtName: '15', viewValue: 'Manavadar' },
    { value: '7', districtName: '15', viewValue: 'Mangrol' },
    { value: '8', districtName: '15', viewValue: 'Mendarda' },
    { value: '9', districtName: '15', viewValue: 'Vanthali' },
    { value: '10', districtName: '15', viewValue: 'Visavadar' },
    { value: '1', districtName: '16', viewValue: 'Abdasa' },
    { value: '2', districtName: '16', viewValue: 'Anjar' },
    { value: '3', districtName: '16', viewValue: 'Bhachau' },
    { value: '4', districtName: '16', viewValue: 'Bhuj' },
    { value: '5', districtName: '16', viewValue: 'Gandhidham' },
    { value: '6', districtName: '16', viewValue: 'Lakhpat' },
    { value: '7', districtName: '16', viewValue: 'Mandvi' },
    { value: '8', districtName: '16', viewValue: 'Mundra' },
    { value: '9', districtName: '16', viewValue: 'Nakhatrana' },
    { value: '10', districtName: '16', viewValue: 'Rapar' },
    { value: '1', districtName: '17', viewValue: 'Kheda' },
    { value: '2', districtName: '17', viewValue: 'Galteshwar' },
    { value: '3', districtName: '17', viewValue: 'Kapadvanj' },
    { value: '4', districtName: '17', viewValue: 'Kathlal' },
    { value: '5', districtName: '17', viewValue: 'Mahudha' },
    { value: '6', districtName: '17', viewValue: 'Matar' },
    { value: '7', districtName: '17', viewValue: 'Mehmedabad' },
    { value: '8', districtName: '17', viewValue: 'Nadiad' },
    { value: '9', districtName: '17', viewValue: 'Thasra' },
    { value: '10', districtName: '17', viewValue: 'Vaso' },
    { value: '1', districtName: '18', viewValue: 'Balasinor' },
    { value: '2', districtName: '18', viewValue: 'Kadana' },
    { value: '3', districtName: '18', viewValue: 'Khanpur' },
    { value: '4', districtName: '18', viewValue: 'Lunawada' },
    { value: '5', districtName: '18', viewValue: 'Santrampur' },
    { value: '6', districtName: '18', viewValue: 'Virpur' },
    { value: '1', districtName: '19', viewValue: 'Mehsana' },
    { value: '2', districtName: '19', viewValue: 'Becharaji' },
    { value: '3', districtName: '19', viewValue: 'Jotana' },
    { value: '4', districtName: '19', viewValue: 'Kadi' },
    { value: '5', districtName: '19', viewValue: 'Kheralu' },
    { value: '6', districtName: '19', viewValue: 'Satlasana' },
    { value: '7', districtName: '19', viewValue: 'Unjha' },
    { value: '8', districtName: '19', viewValue: 'Vadnagar' },
    { value: '9', districtName: '19', viewValue: 'Vijapur' },
    { value: '10', districtName: '19', viewValue: 'Visnagar' },
    { value: '11', districtName: '19', viewValue: 'Gojariya' },
    { value: '1', districtName: '20', viewValue: 'Halvad' },
    { value: '2', districtName: '20', viewValue: 'Maliya' },
    { value: '3', districtName: '20', viewValue: 'Morbi' },
    { value: '4', districtName: '20', viewValue: 'Tankara' },
    { value: '5', districtName: '20', viewValue: 'Wankaner' },
    { value: '1', districtName: '21', viewValue: 'Dediapada' },
    { value: '2', districtName: '21', viewValue: 'Garudeshwar' },
    { value: '3', districtName: '21', viewValue: 'Nandod' },
    { value: '4', districtName: '21', viewValue: 'Sagbara' },
    { value: '5', districtName: '21', viewValue: 'Tilakwada' },
    { value: '1', districtName: '22', viewValue: 'Navsari' },
    { value: '2', districtName: '22', viewValue: 'Vansda' },
    { value: '3', districtName: '22', viewValue: 'Chikhli' },
    { value: '4', districtName: '22', viewValue: 'Gandevi' },
    { value: '5', districtName: '22', viewValue: 'Jalalpore' },
    { value: '6', districtName: '22', viewValue: 'Khergam' },
    { value: '1', districtName: '23', viewValue: 'Ghoghamba' },
    { value: '2', districtName: '23', viewValue: 'Godhra' },
    { value: '3', districtName: '23', viewValue: 'Halol' },
    { value: '4', districtName: '23', viewValue: 'Jambughoda' },
    { value: '5', districtName: '23', viewValue: 'Kalol' },
    { value: '6', districtName: '23', viewValue: 'Morwa Hadaf' },
    { value: '7', districtName: '23', viewValue: 'Shehera' },
    { value: '1', districtName: '24', viewValue: 'Patan' },
    { value: '2', districtName: '24', viewValue: 'Chanasma' },
    { value: '3', districtName: '24', viewValue: 'Harij' },
    { value: '4', districtName: '24', viewValue: 'Radhanpur' },
    { value: '5', districtName: '24', viewValue: 'Sami' },
    { value: '6', districtName: '24', viewValue: 'Sankheswar' },
    { value: '7', districtName: '24', viewValue: 'Santalpur' },
    { value: '8', districtName: '24', viewValue: 'Sarasvati' },
    { value: '9', districtName: '24', viewValue: 'Sidhpur' },
    { value: '1', districtName: '25', viewValue: 'Porbandar' },
    { value: '2', districtName: '25', viewValue: 'Kutiyana' },
    { value: '3', districtName: '25', viewValue: 'Ranavav' },
    { value: '1', districtName: '26', viewValue: 'Rajkot' },
    { value: '2', districtName: '26', viewValue: 'Dhoraji' },
    { value: '3', districtName: '26', viewValue: 'Gondal' },
    { value: '4', districtName: '26', viewValue: 'Jamkandorna' },
    { value: '5', districtName: '26', viewValue: 'Jasdan' },
    { value: '6', districtName: '26', viewValue: 'Jetpur' },
    { value: '7', districtName: '26', viewValue: 'Kotada Sangani' },
    { value: '8', districtName: '26', viewValue: 'Lodhika' },
    { value: '9', districtName: '26', viewValue: 'Paddhari' },
    { value: '10', districtName: '26', viewValue: 'Upleta' },
    { value: '11', districtName: '26', viewValue: 'Vinchchiya' },
    { value: '1', districtName: '27', viewValue: 'Himatnagar' },
    { value: '2', districtName: '27', viewValue: 'Idar' },
    { value: '3', districtName: '27', viewValue: 'Khedbrahma' },
    { value: '4', districtName: '27', viewValue: 'Poshina' },
    { value: '5', districtName: '27', viewValue: 'Prantij' },
    { value: '6', districtName: '27', viewValue: 'Talod' },
    { value: '7', districtName: '27', viewValue: 'Vadali' },
    { value: '8', districtName: '27', viewValue: 'Vijaynagar' },
    { value: '1', districtName: '28', viewValue: 'Surat' },
    { value: '2', districtName: '28', viewValue: 'Bardoli' },
    { value: '3', districtName: '28', viewValue: 'Choryasi' },
    { value: '4', districtName: '28', viewValue: 'Kamrej' },
    { value: '5', districtName: '28', viewValue: 'Mahuva' },
    { value: '6', districtName: '28', viewValue: 'Mandvi' },
    { value: '7', districtName: '28', viewValue: 'Mangrol' },
    { value: '8', districtName: '28', viewValue: 'Olpad' },
    { value: '9', districtName: '28', viewValue: 'Palsana' },
    { value: '10', districtName: '28', viewValue: 'Umarpada' },
    { value: '1', districtName: '29', viewValue: 'Chotila' },
    { value: '2', districtName: '29', viewValue: 'Chuda' },
    { value: '3', districtName: '29', viewValue: 'Dasada' },
    { value: '4', districtName: '29', viewValue: 'Dhrangadhra' },
    { value: '5', districtName: '29', viewValue: 'Lakhtar' },
    { value: '6', districtName: '29', viewValue: 'Limbdi' },
    { value: '7', districtName: '29', viewValue: 'Muli ' },
    { value: '8', districtName: '29', viewValue: 'Sayla' },
    { value: '9', districtName: '29', viewValue: 'Thangadh' },
    { value: '10', districtName: '29', viewValue: 'Wadhwan' },
    { value: '1', districtName: '30', viewValue: 'Nizar' },
    { value: '2', districtName: '30', viewValue: 'Songadh' },
    { value: '3', districtName: '30', viewValue: 'Uchhal' },
    { value: '4', districtName: '30', viewValue: 'Valod' },
    { value: '5', districtName: '30', viewValue: 'Vyara' },
    { value: '6', districtName: '30', viewValue: 'Kukarmunda' },
    { value: '7', districtName: '30', viewValue: 'Dolvan' },
    { value: '1', districtName: '31', viewValue: 'Vadodara' },
    { value: '2', districtName: '31', viewValue: 'Dabhoi' },
    { value: '3', districtName: '31', viewValue: 'Desar' },
    { value: '4', districtName: '31', viewValue: 'Karjan' },
    { value: '5', districtName: '31', viewValue: 'Padra' },
    { value: '6', districtName: '31', viewValue: 'Savli' },
    { value: '7', districtName: '31', viewValue: 'Sinor' },
    { value: '8', districtName: '31', viewValue: 'Vaghodia' },
    { value: '1', districtName: '32', viewValue: 'Valsad' },
    { value: '2', districtName: '32', viewValue: 'Dharampur' },
    { value: '3', districtName: '32', viewValue: 'Kaprada' },
    { value: '4', districtName: '32', viewValue: 'Pardi' },
    { value: '5', districtName: '32', viewValue: 'Umbergaon' },
    { value: '6', districtName: '32', viewValue: 'Vapi' },


  ];

  instituteTypeList: ListValue[] = [
    { value: 'MP', viewValue: 'Maha Nagar Palika' },
    { value: 'NP', viewValue: 'Nagarpalika' },
    { value: 'DP', viewValue: 'District Panchayat' },
    { value: 'TP', viewValue: 'Taluka Panchayat' },
    { value: 'UN', viewValue: 'University' },
    { value: 'MS', viewValue: 'Municiple School Board' },
    { value: 'VP', viewValue: 'Village Panchayat' },
    { value: 'PW', viewValue: 'Police Welfare Fund' },
    { value: 'PD', viewValue: 'Provident Fund of District Panchayat' },
    { value: 'PS', viewValue: 'Provident Fund of Secondary Education office' },
    { value: 'AT', viewValue: 'Ambaji Temple Trust' },
    { value: 'OTH', viewValue: 'Others' },

  ];

  auditChargableList: ListValue[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' },
  ];

  ElementData: InstituteMasterListing[] = [
    {
      district: 'Ahmedabad',
      taluka: 'Daskoi',
      instituteCode: '108VP21',
      instituteName: 'abcd',
      instituteType: 'Nagarpalika',
      sanctionedMandays: 23,
      additionalMandays: 0,
      totalMandays: 23,
      auditChargableOrNot: 'No',
      status: 'Pending For Verify'
    },
    {
      district: 'Gandhinagar',
      taluka: 'Dahegam',
      instituteCode: '108VP21',
      instituteName: 'Dahegam Nagarpalika',
      instituteType: 'Nagarpalika',
      sanctionedMandays: 10,
      additionalMandays: 2,
      totalMandays: 12,
      auditChargableOrNot: 'No',
      status: 'Approved'
    },
    {
      district: 'Gandhinagar',
      taluka: 'Kalol',
      instituteCode: '108VP25',
      instituteName: 'DMDG',
      instituteType: 'University',
      sanctionedMandays: 30,
      additionalMandays: 12,
      totalMandays: 42,
      auditChargableOrNot: 'Yes',
      status: 'Pending For Approval'
    },

  ];

  auditChargableCtrl: FormControl = new FormControl();
  districtNameCtrl: FormControl = new FormControl();
  talukaNameCtrl: FormControl = new FormControl();
  instituteTypeCtrl: FormControl = new FormControl();

  dataSource = new MatTableDataSource<InstituteMasterListing>(this.ElementData);
  displayedColumns: any[] = [
    'select',
    'serialNo',
    'district',
    'taluka',
    'instituteCode',
    'instituteName',
    'instituteType',
    'sanctionedMandays',
    'additionalMandays',
    'totalMandays',
    'auditChargableOrNot',
    'status',
    'action'
  ];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private fb: FormBuilder, public dialog: MatDialog, private route: Router) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.searchFormData();
    this.submitFormData();
    this.instituteMasterListingEditForm = this.fb.group({
      financialYear: [''],
      workingDays: [''],
      districtName: [''],
      talukaName: [''],
      instituteType: [''],
      instituteName: [''],
      others: [''],
      emailId: [''],
      sanctionedMandays: [''],
      auditChargable: [''],
      additionalMandays: [''],
      totalMandays: [''],
    });
  }

  // form data
  searchFormData() {
    this.searchForm = this.fb.group({
      districtName: [''],
      talukaName: [''],
      instituteName: [''],
      instituteType: [''],
      instituteCode: [''],
    });
  }

  // if edit is clicked form
  submitFormData() {
    this.instituteMasterListingForm = this.fb.group({
      financialYear: [''],
      workingDays: [''],
      districtName: [''],
      talukaName: [''],
      instituteType: [''],
      instituteName: [''],
      others: [''],
      emailId: [''],
      sanctionedMandays: [''],
      auditChargable: [''],
      additionalMandays: [''],
      totalMandays: [''],
    });
  }

  // checkbox related method
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;

  }

  // for enabling data editing to user wrt row
  edit(index) {
    this.isEditClicked = true;
    this.isViewClicked = false;
    this.indexValue = index;

    const data = this.dataSource.data;

    if (index === 0) {
      this.instituteMasterListingForm.patchValue({
        financialYear: '2017-18',
        workingDays: 200,
        districtName: data[index].district,
        talukaName: data[index].taluka,
        instituteType: data[index].instituteType,
        instituteName: data[index].instituteName,
        emailId: 'Text@xyz.com',
        sanctionedMandays: data[index].sanctionedMandays,
        auditChargable: '2',
        additionalMandays: data[index].additionalMandays
      });
    }
    if (index === 1) {

      this.instituteMasterListingForm.patchValue({
        financialYear: '2018-19',
        workingDays: 250,
        districtName: data[index].district,
        talukaName: data[index].taluka,
        instituteType: data[index].instituteType,
        instituteName: data[index].instituteName,
        emailId: 'Text@xyz.com',
        sanctionedMandays: data[index].sanctionedMandays,
        auditChargable: '2',
        additionalMandays: data[index].additionalMandays
      });
    }
    if (index === 2) {
      this.instituteMasterListingForm.patchValue({
        financialYear: '2019-20',
        workingDays: 225,
        districtName: data[index].district,
        talukaName: data[index].taluka,
        instituteType: data[index].instituteType,
        instituteName: data[index].instituteName,
        emailId: 'Text@xyz.com',
        sanctionedMandays: data[index].sanctionedMandays,
        auditChargable: '1',
        additionalMandays: data[index].additionalMandays
      });
    }



    return this.isEditClicked;
  }

  // for showing taluka wrt district name
  selectDistrict() {
    const district = this.searchForm.value.districtName;

    if (district !== '' && district != null) {
      this.talukaNameList = this.talukaList.filter(
        searchBy => searchBy.districtName.toLowerCase() === district.toLowerCase());

    }
  }

  // for search operation
  onSearch() {
    const formVal = this.searchForm.value;

    if (formVal.districtName !== '' && formVal.districtName !== null) {
      const districtName = formVal.districtName;
      const district = this.districtNameList[districtName].viewValue;
      this.filterElement_Data = this.ElementData.filter(
        searchBy => searchBy.district.toLowerCase() === district.toLowerCase());
      this.dataSource = new MatTableDataSource<InstituteMasterListing>(this.filterElement_Data);

      if (formVal.talukaName !== '' && formVal.talukaName !== null) {
        const talukaName = formVal.talukaName;
        const taluka = this.talukaNameList[talukaName].viewValue;
        this.filterElement_Data = this.ElementData.filter(
          searchBy => searchBy.taluka.toLowerCase() === taluka.toLowerCase());
        this.dataSource = new MatTableDataSource<InstituteMasterListing>(this.filterElement_Data);
      }
    }

    if (formVal.instituteName !== '' && formVal.instituteName !== null) {
      this.filterElement_Data = this.ElementData.filter(
        searchBy => searchBy.instituteName.toLowerCase() === formVal.instituteName.toLowerCase());
      this.dataSource = new MatTableDataSource<InstituteMasterListing>(this.filterElement_Data);
    }

    if (formVal.instituteType !== '' && formVal.instituteType !== null) {
      const instituteType = formVal.instituteType;
      if (instituteType === 'MP') {
        const institute = this.instituteTypeList[0].viewValue;

        this.filterElement_Data = this.ElementData.filter(
          searchBy => searchBy.instituteType.toLowerCase() === institute.toLowerCase());
        this.dataSource = new MatTableDataSource<InstituteMasterListing>(this.filterElement_Data);

      }
      if (instituteType === 'NP') {
        const institute = this.instituteTypeList[1].viewValue;
        this.filterElement_Data = this.ElementData.filter(
          searchBy => searchBy.instituteType.toLowerCase() === institute.toLowerCase());
        this.dataSource = new MatTableDataSource<InstituteMasterListing>(this.filterElement_Data);

      }
      if (instituteType === 'DP') {
        const institute = this.instituteTypeList[2].viewValue;
        this.filterElement_Data = this.ElementData.filter(
          searchBy => searchBy.instituteType.toLowerCase() === institute.toLowerCase());
        this.dataSource = new MatTableDataSource<InstituteMasterListing>(this.filterElement_Data);
      }
      if (instituteType === 'TP') {
        const institute = this.instituteTypeList[3].viewValue;

        this.filterElement_Data = this.ElementData.filter(
          searchBy => searchBy.instituteType.toLowerCase() === institute.toLowerCase());
        this.dataSource = new MatTableDataSource<InstituteMasterListing>(this.filterElement_Data);

      }
      if (instituteType === 'UN') {
        const institute = this.instituteTypeList[4].viewValue;

        this.filterElement_Data = this.ElementData.filter(
          searchBy => searchBy.instituteType.toLowerCase() === institute.toLowerCase());
        this.dataSource = new MatTableDataSource<InstituteMasterListing>(this.filterElement_Data);

      }
      if (instituteType === 'MS') {
        const institute = this.instituteTypeList[5].viewValue;

        this.filterElement_Data = this.ElementData.filter(
          searchBy => searchBy.instituteType.toLowerCase() === institute.toLowerCase());
        this.dataSource = new MatTableDataSource<InstituteMasterListing>(this.filterElement_Data);

      }
      if (instituteType === 'VP') {
        const institute = this.instituteTypeList[6].viewValue;
        this.filterElement_Data = this.ElementData.filter(
          searchBy => searchBy.instituteType.toLowerCase() === institute.toLowerCase());
        this.dataSource = new MatTableDataSource<InstituteMasterListing>(this.filterElement_Data);
      }
      if (instituteType === 'PW') {
        const institute = this.instituteTypeList[7].viewValue;

        this.filterElement_Data = this.ElementData.filter(
          searchBy => searchBy.instituteType.toLowerCase() === institute.toLowerCase());
        this.dataSource = new MatTableDataSource<InstituteMasterListing>(this.filterElement_Data);

      }
      if (instituteType === 'PD') {
        const institute = this.instituteTypeList[8].viewValue;

        this.filterElement_Data = this.ElementData.filter(
          searchBy => searchBy.instituteType.toLowerCase() === institute.toLowerCase());
        this.dataSource = new MatTableDataSource<InstituteMasterListing>(this.filterElement_Data);

      }
      if (instituteType === 'PS') {
        const institute = this.instituteTypeList[9].viewValue;

        this.filterElement_Data = this.ElementData.filter(
          searchBy => searchBy.instituteType.toLowerCase() === institute.toLowerCase());
        this.dataSource = new MatTableDataSource<InstituteMasterListing>(this.filterElement_Data);

      }
      if (instituteType === 'AT') {
        const institute = this.instituteTypeList[10].viewValue;

        this.filterElement_Data = this.ElementData.filter(
          searchBy => searchBy.instituteType.toLowerCase() === institute.toLowerCase());
        this.dataSource = new MatTableDataSource<InstituteMasterListing>(this.filterElement_Data);

      }
      if (instituteType === 'OTH') {
        const institute = this.instituteTypeList[11].viewValue;

        this.filterElement_Data = this.ElementData.filter(
          searchBy => searchBy.instituteType.toLowerCase() === institute.toLowerCase());
        this.dataSource = new MatTableDataSource<InstituteMasterListing>(this.filterElement_Data);

      }
    }


    if (formVal.instituteCode !== '' && formVal.instituteCode !== null) {

      this.filterElement_Data = this.ElementData.filter(
        searchBy => searchBy.instituteCode.toLowerCase() === formVal.instituteCode.toLowerCase());
      this.dataSource = new MatTableDataSource<InstituteMasterListing>(this.filterElement_Data);

    }

    if ((formVal.districtName === '' || formVal.districtName == null) &&
      (formVal.talukaName === '' || formVal.talukaName == null) &&
      (formVal.instituteName === '' || formVal.instituteName == null) &&
      (formVal.instituteType === '' || formVal.instituteType == null) &&
      (formVal.instituteCode === '' || formVal.instituteCode == null)
    ) {
      this.dataSource = new MatTableDataSource<any>(this.ElementData);
    }
  }

  // clear form
  clearForm() {
    this.searchForm.reset();
  }

  // reset form
  resetForm() {
    this.instituteMasterListingForm.reset();
  }


  // to calculate total mandays
  calculateTotalMandays($event?: any) {
    const additionalMandaysValue = this.instituteMasterListingForm.value.additionalMandays;
    if (additionalMandaysValue !== '') {
      this.totalMandaysValue = (Number(this.instituteMasterListingForm.value.sanctionedMandays)
        + Number(this.instituteMasterListingForm.value.additionalMandays));
    } else {
      this.totalMandaysValue = (Number(this.instituteMasterListingForm.value.sanctionedMandays));
    }
    return this.totalMandaysValue;
  }

  // to access changed additional mandays if any
  changedAdditionalManday() {
    this.changedAdditionalMandays = this.instituteMasterListingForm.value.additionalMandays;

  }

  // updates table data if user edit additional man-days and submit data
  updateTable() {
    this.dataSource.data[this.indexValue].additionalMandays = this.changedAdditionalMandays;
    this.dataSource.data[this.indexValue].totalMandays = this.totalMandaysValue;
  }

  deleteRow(index) {
    this.dataSource.data.splice(index, 1);
    this.dataSource.data = this.dataSource.data;
    this.isEditClicked = false;
    this.isViewClicked = false;

  }

  // for enabling data view wrt row
  viewRow(index) {
    this.isViewClicked = true;
    this.isEditClicked = false;
    this.indexValue = index;
    const data = this.dataSource.data;

    if (index === 0) {
      this.instituteMasterListingEditForm.patchValue({
        financialYear: '2017-18',
        workingDays: 200,
        districtName: data[index].district,
        talukaName: data[index].taluka,
        instituteType: data[index].instituteType,
        others: '',
        instituteName: data[index].instituteName,
        emailId: 'Text@xyz.com',
        sanctionedMandays: data[index].sanctionedMandays,
        auditChargable: '2',
        additionalMandays: data[index].additionalMandays
      });
    }
    if (index === 1) {

      this.instituteMasterListingEditForm.patchValue({
        financialYear: '2018-19',
        workingDays: 250,
        districtName: data[index].district,
        talukaName: data[index].taluka,
        instituteType: data[index].instituteType,
        others: '',
        instituteName: data[index].instituteName,
        emailId: 'Text@xyz.com',
        sanctionedMandays: data[index].sanctionedMandays,
        auditChargable: '2',
        additionalMandays: data[index].additionalMandays
      });
    }
    if (index === 2) {
      this.instituteMasterListingEditForm.patchValue({
        financialYear: '2019-20',
        workingDays: 225,
        districtName: data[index].district,
        talukaName: data[index].taluka,
        instituteType: data[index].instituteType,
        others: '',
        instituteName: data[index].instituteName,
        emailId: 'Text@xyz.com',
        sanctionedMandays: data[index].sanctionedMandays,
        auditChargable: '1',
        additionalMandays: data[index].additionalMandays
      });
    }

    return this.isViewClicked;
  }

}
