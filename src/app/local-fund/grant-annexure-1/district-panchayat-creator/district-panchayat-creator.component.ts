import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { lfMessage } from 'src/app/common/error-message/common-message.constants';
import { DistrictPanchayatCreator, TalukaList } from 'src/app/model/local-fund';
import { LocalFundDirective } from 'src/app/common/directive/local-fund-directive';



@Component({
  selector: 'app-district-panchayat-creator',
  templateUrl: './district-panchayat-creator.component.html',
  styleUrls: ['./district-panchayat-creator.component.css']
})
export class DistrictPanchayatCreatorComponent implements OnInit {

  // variables
  referenceNumber = 'Reference Number:';
  referenceNumberDate = 'Reference Date:';
  id = 0;
  totalOpeningBalance = 0;
  totalGrantReceived = 0;
  totalActualExpenditure = 0;
  totalGrantRefund = 0;
  totalCloseingBalance = 0;
  totalGrantSaved = 0;
  totalOverExpenses = 0;
  totalTalukaTransfer = 0;
  negativeClosingBalance = '';
  positiveClosingBalance = '';
  errorMessages = lfMessage;
  isSubmitted = false;
  closingBalanceRevenue = 0;
  closingBalance = 0;
  talukaNameList: TalukaList[];
  // date
  todayDate = Date.now();
  // form group
  districtPanchayatCreator: FormGroup;
  // form control
  financialYearCtrl: FormControl = new FormControl();
  districtNameCtrl: FormControl = new FormControl();
  talukaNameCtrl: FormControl = new FormControl();
  instituteTypeCtrl: FormControl = new FormControl();
  instituteNameCtrl: FormControl = new FormControl();
  majorHeadCtrl: FormControl = new FormControl();

  // directive object for workflow details
  directiveObject = new LocalFundDirective(this.dialog);

  // lists start
  financialYearList: ListValue[] = [
    { value: '2017-18', viewValue: '2017-2018' },
    { value: '2018-19', viewValue: '2018-2019' },
    { value: '2019-20', viewValue: '2019-2020' },
    { value: '2020-21', viewValue: '2020-2021' },
    { value: '2021-22', viewValue: '2021-2022' },
    { value: '2022-23', viewValue: '2022-2023' },
  ];

  districtNameList: ListValue[] = [
    { value: '00', viewValue: 'Ahmedabad' },
    { value: '01', viewValue: 'Amreli' },
    { value: '02', viewValue: 'Anand' },
    { value: '03', viewValue: 'Aravalli' },
    { value: '04', viewValue: 'Banaskantha' },
    { value: '05', viewValue: 'Bharuch' },
    { value: '06', viewValue: 'Bhavnagar' },
    { value: '07', viewValue: 'Botad' },
    { value: '08', viewValue: 'Chhota Udaipur' },
    { value: '09', viewValue: 'Dahod' },
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
    { value: '01', districtName: '00', viewValue: 'City East' },
    { value: '02', districtName: '00', viewValue: 'City West' },
    { value: '03', districtName: '00', viewValue: 'Bavla' },
    { value: '04', districtName: '00', viewValue: 'Daskroi' },
    { value: '05', districtName: '00', viewValue: 'Detroj-Rampura' },
    { value: '06', districtName: '00', viewValue: 'Dhandhuka' },
    { value: '07', districtName: '00', viewValue: 'Dholera' },
    { value: '08', districtName: '00', viewValue: 'Dholka' },
    { value: '09', districtName: '00', viewValue: 'Mandal' },
    { value: '10', districtName: '00', viewValue: 'Sanand' },
    { value: '11', districtName: '00', viewValue: 'Viramgam' },
    { value: '01', districtName: '01', viewValue: 'Amreli' },
    { value: '02', districtName: '01', viewValue: 'Babra' },
    { value: '03', districtName: '01', viewValue: 'Bagasara' },
    { value: '04', districtName: '01', viewValue: 'Dhari' },
    { value: '05', districtName: '01', viewValue: 'Jafrabad' },
    { value: '06', districtName: '01', viewValue: 'Khambha' },
    { value: '07', districtName: '01', viewValue: 'Kunkavav vadia' },
    { value: '08', districtName: '01', viewValue: 'Lathi' },
    { value: '09', districtName: '01', viewValue: 'Lilia' },
    { value: '10', districtName: '01', viewValue: 'Rajula' },
    { value: '11', districtName: '01', viewValue: 'Savarkundla' },
    { value: '01', districtName: '02', viewValue: 'Anand' },
    { value: '02', districtName: '02', viewValue: 'Anklav' },
    { value: '03', districtName: '02', viewValue: 'Borsad' },
    { value: '04', districtName: '02', viewValue: 'Khambhat' },
    { value: '05', districtName: '02', viewValue: 'Petlad' },
    { value: '06', districtName: '02', viewValue: 'Sojitra' },
    { value: '07', districtName: '02', viewValue: 'Tarapur' },
    { value: '08', districtName: '02', viewValue: 'Umreth' },
    { value: '01', districtName: '03', viewValue: 'Bayad' },
    { value: '02', districtName: '03', viewValue: 'Bhiloda' },
    { value: '03', districtName: '03', viewValue: 'Dhansura' },
    { value: '04', districtName: '03', viewValue: 'Malpur' },
    { value: '05', districtName: '03', viewValue: 'Meghraj' },
    { value: '06', districtName: '03', viewValue: 'Modasa' },
    { value: '01', districtName: '04', viewValue: 'Amirgadh' },
    { value: '02', districtName: '04', viewValue: 'Bhabhar' },
    { value: '03', districtName: '04', viewValue: 'Danta' },
    { value: '04', districtName: '04', viewValue: 'Dantiwada' },
    { value: '05', districtName: '04', viewValue: 'Deesa' },
    { value: '06', districtName: '04', viewValue: 'Deodar' },
    { value: '07', districtName: '04', viewValue: 'Dhanera' },
    { value: '08', districtName: '04', viewValue: 'Kankrej' },
    { value: '09', districtName: '04', viewValue: 'Lakhani' },
    { value: '10', districtName: '04', viewValue: 'Palanpur' },
    { value: '11', districtName: '04', viewValue: 'Suigam' },
    { value: '12', districtName: '04', viewValue: 'Tharad' },
    { value: '13', districtName: '04', viewValue: 'Vadgam' },
    { value: '14', districtName: '04', viewValue: 'Vav' },
    { value: '01', districtName: '05', viewValue: 'Bharuch' },
    { value: '02', districtName: '05', viewValue: 'Amod' },
    { value: '03', districtName: '05', viewValue: 'Ankleshwar' },
    { value: '04', districtName: '05', viewValue: 'Hansot' },
    { value: '05', districtName: '05', viewValue: 'Jambusar' },
    { value: '06', districtName: '05', viewValue: 'Jhagadia' },
    { value: '07', districtName: '05', viewValue: 'Netrang' },
    { value: '08', districtName: '05', viewValue: 'Vagra' },
    { value: '09', districtName: '05', viewValue: 'Valia' },
    { value: '01', districtName: '06', viewValue: 'Bhavnagar' },
    { value: '02', districtName: '06', viewValue: 'Gariadhar' },
    { value: '03', districtName: '06', viewValue: 'Ghogha' },
    { value: '04', districtName: '06', viewValue: 'Jesar' },
    { value: '05', districtName: '06', viewValue: 'Mahuva' },
    { value: '06', districtName: '06', viewValue: 'Palitana' },
    { value: '07', districtName: '06', viewValue: 'Sihor' },
    { value: '08', districtName: '06', viewValue: 'Talaja' },
    { value: '09', districtName: '06', viewValue: 'Umrala' },
    { value: '10', districtName: '06', viewValue: 'Vallabhipur' },
    { value: '01', districtName: '07', viewValue: 'Botad' },
    { value: '02', districtName: '07', viewValue: 'Barwala' },
    { value: '03', districtName: '07', viewValue: 'Gadhada' },
    { value: '04', districtName: '07', viewValue: 'Ranpur' },
    { value: '01', districtName: '08', viewValue: 'Chhota Udepur' },
    { value: '02', districtName: '08', viewValue: 'Bodeli' },
    { value: '03', districtName: '08', viewValue: 'Jetpur pavi' },
    { value: '04', districtName: '08', viewValue: 'Kavant' },
    { value: '05', districtName: '08', viewValue: 'Nasvadi' },
    { value: '06', districtName: '08', viewValue: 'Sankheda' },
    { value: '01', districtName: '09', viewValue: 'Dahod' },
    { value: '02', districtName: '09', viewValue: 'Devgadh baria' },
    { value: '03', districtName: '09', viewValue: 'Dhanpur' },
    { value: '04', districtName: '09', viewValue: 'Fatepura' },
    { value: '05', districtName: '09', viewValue: 'Garbada' },
    { value: '06', districtName: '09', viewValue: 'Limkheda' },
    { value: '07', districtName: '09', viewValue: 'Sanjeli' },
    { value: '08', districtName: '09', viewValue: 'Jhalod' },
    { value: '09', districtName: '09', viewValue: 'Singvad' },
    { value: '01', districtName: '10', viewValue: 'Ahwa' },
    { value: '02', districtName: '10', viewValue: 'Subir' },
    { value: '03', districtName: '10', viewValue: 'Waghai' },
    { value: '01', districtName: '11', viewValue: 'Bhanvad' },
    { value: '02', districtName: '11', viewValue: 'Kalyanpur' },
    { value: '03', districtName: '11', viewValue: 'Khambhalia' },
    { value: '04', districtName: '11', viewValue: 'Okhamandal' },
    { value: '01', districtName: '12', viewValue: 'Gandhinagar' },
    { value: '02', districtName: '12', viewValue: 'Dehgam' },
    { value: '03', districtName: '12', viewValue: 'Kalol' },
    { value: '04', districtName: '12', viewValue: 'Mansa' },
    { value: '01', districtName: '13', viewValue: 'Gir-Gadhada' },
    { value: '02', districtName: '13', viewValue: 'Kodinar' },
    { value: '03', districtName: '13', viewValue: 'Sutrapada' },
    { value: '04', districtName: '13', viewValue: 'Talala' },
    { value: '05', districtName: '13', viewValue: 'Una' },
    { value: '06', districtName: '13', viewValue: 'Patan-Veraval' },
    { value: '01', districtName: '14', viewValue: 'Jamnagar' },
    { value: '02', districtName: '14', viewValue: 'Dhrol' },
    { value: '03', districtName: '14', viewValue: 'Jamjodhpur' },
    { value: '04', districtName: '14', viewValue: 'Jodiya' },
    { value: '05', districtName: '14', viewValue: 'Kalavad' },
    { value: '06', districtName: '14', viewValue: 'Lalpur' },
    { value: '01', districtName: '15', viewValue: 'Junagadh City' },
    { value: '02', districtName: '15', viewValue: 'Bhesana' },
    { value: '03', districtName: '15', viewValue: 'Junagadh Rural' },
    { value: '04', districtName: '15', viewValue: 'Keshod' },
    { value: '05', districtName: '15', viewValue: 'Malia' },
    { value: '06', districtName: '15', viewValue: 'Manavadar' },
    { value: '07', districtName: '15', viewValue: 'Mangrol' },
    { value: '08', districtName: '15', viewValue: 'Mendarda' },
    { value: '09', districtName: '15', viewValue: 'Vanthali' },
    { value: '10', districtName: '15', viewValue: 'Visavadar' },
    { value: '01', districtName: '16', viewValue: 'Abdasa' },
    { value: '02', districtName: '16', viewValue: 'Anjar' },
    { value: '03', districtName: '16', viewValue: 'Bhachau' },
    { value: '04', districtName: '16', viewValue: 'Bhuj' },
    { value: '05', districtName: '16', viewValue: 'Gandhidham' },
    { value: '06', districtName: '16', viewValue: 'Lakhpat' },
    { value: '07', districtName: '16', viewValue: 'Mandvi' },
    { value: '08', districtName: '16', viewValue: 'Mundra' },
    { value: '09', districtName: '16', viewValue: 'Nakhatrana' },
    { value: '10', districtName: '16', viewValue: 'Rapar' },
    { value: '01', districtName: '17', viewValue: 'Kheda' },
    { value: '02', districtName: '17', viewValue: 'Galteshwar' },
    { value: '03', districtName: '17', viewValue: 'Kapadvanj' },
    { value: '04', districtName: '17', viewValue: 'Kathlal' },
    { value: '05', districtName: '17', viewValue: 'Mahudha' },
    { value: '06', districtName: '17', viewValue: 'Matar' },
    { value: '07', districtName: '17', viewValue: 'Mehmedabad' },
    { value: '08', districtName: '17', viewValue: 'Nadiad' },
    { value: '09', districtName: '17', viewValue: 'Thasra' },
    { value: '10', districtName: '17', viewValue: 'Vaso' },
    { value: '01', districtName: '18', viewValue: 'Balasinor' },
    { value: '02', districtName: '18', viewValue: 'Kadana' },
    { value: '03', districtName: '18', viewValue: 'Khanpur' },
    { value: '04', districtName: '18', viewValue: 'Lunawada' },
    { value: '05', districtName: '18', viewValue: 'Santrampur' },
    { value: '06', districtName: '18', viewValue: 'Virpur' },
    { value: '01', districtName: '19', viewValue: 'Mehsana' },
    { value: '02', districtName: '19', viewValue: 'Becharaji' },
    { value: '03', districtName: '19', viewValue: 'Jotana' },
    { value: '04', districtName: '19', viewValue: 'Kadi' },
    { value: '05', districtName: '19', viewValue: 'Kheralu' },
    { value: '06', districtName: '19', viewValue: 'Satlasana' },
    { value: '07', districtName: '19', viewValue: 'Unjha' },
    { value: '08', districtName: '19', viewValue: 'Vadnagar' },
    { value: '09', districtName: '19', viewValue: 'Vijapur' },
    { value: '10', districtName: '19', viewValue: 'Visnagar' },
    { value: '11', districtName: '19', viewValue: 'Gojariya' },
    { value: '01', districtName: '20', viewValue: 'Halvad' },
    { value: '02', districtName: '20', viewValue: 'Maliya' },
    { value: '03', districtName: '20', viewValue: 'Morbi' },
    { value: '04', districtName: '20', viewValue: 'Tankara' },
    { value: '05', districtName: '20', viewValue: 'Wankaner' },
    { value: '01', districtName: '21', viewValue: 'Dediapada' },
    { value: '02', districtName: '21', viewValue: 'Garudeshwar' },
    { value: '03', districtName: '21', viewValue: 'Nandod' },
    { value: '04', districtName: '21', viewValue: 'Sagbara' },
    { value: '05', districtName: '21', viewValue: 'Tilakwada' },
    { value: '01', districtName: '22', viewValue: 'Navsari' },
    { value: '02', districtName: '22', viewValue: 'Vansda' },
    { value: '03', districtName: '22', viewValue: 'Chikhli' },
    { value: '04', districtName: '22', viewValue: 'Gandevi' },
    { value: '05', districtName: '22', viewValue: 'Jalalpore' },
    { value: '06', districtName: '22', viewValue: 'Khergam' },
    { value: '01', districtName: '23', viewValue: 'Ghoghamba' },
    { value: '02', districtName: '23', viewValue: 'Godhra' },
    { value: '03', districtName: '23', viewValue: 'Halol' },
    { value: '04', districtName: '23', viewValue: 'Jambughoda' },
    { value: '05', districtName: '23', viewValue: 'Kalol' },
    { value: '06', districtName: '23', viewValue: 'Morwa Hadaf' },
    { value: '07', districtName: '23', viewValue: 'Shehera' },
    { value: '01', districtName: '24', viewValue: 'Patan' },
    { value: '02', districtName: '24', viewValue: 'Chanasma' },
    { value: '03', districtName: '24', viewValue: 'Harij' },
    { value: '04', districtName: '24', viewValue: 'Radhanpur' },
    { value: '05', districtName: '24', viewValue: 'Sami' },
    { value: '06', districtName: '24', viewValue: 'Sankheswar' },
    { value: '07', districtName: '24', viewValue: 'Santalpur' },
    { value: '08', districtName: '24', viewValue: 'Sarasvati' },
    { value: '09', districtName: '24', viewValue: 'Sidhpur' },
    { value: '01', districtName: '25', viewValue: 'Porbandar' },
    { value: '02', districtName: '25', viewValue: 'Kutiyana' },
    { value: '03', districtName: '25', viewValue: 'Ranavav' },
    { value: '01', districtName: '26', viewValue: 'Rajkot' },
    { value: '02', districtName: '26', viewValue: 'Dhoraji' },
    { value: '03', districtName: '26', viewValue: 'Gondal' },
    { value: '04', districtName: '26', viewValue: 'Jamkandorna' },
    { value: '05', districtName: '26', viewValue: 'Jasdan' },
    { value: '06', districtName: '26', viewValue: 'Jetpur' },
    { value: '07', districtName: '26', viewValue: 'Kotada Sangani' },
    { value: '08', districtName: '26', viewValue: 'Lodhika' },
    { value: '09', districtName: '26', viewValue: 'Paddhari' },
    { value: '10', districtName: '26', viewValue: 'Upleta' },
    { value: '11', districtName: '26', viewValue: 'Vinchchiya' },
    { value: '01', districtName: '27', viewValue: 'Himatnagar' },
    { value: '02', districtName: '27', viewValue: 'Idar' },
    { value: '03', districtName: '27', viewValue: 'Khedbrahma' },
    { value: '04', districtName: '27', viewValue: 'Poshina' },
    { value: '05', districtName: '27', viewValue: 'Prantij' },
    { value: '06', districtName: '27', viewValue: 'Talod' },
    { value: '07', districtName: '27', viewValue: 'Vadali' },
    { value: '08', districtName: '27', viewValue: 'Vijaynagar' },
    { value: '01', districtName: '28', viewValue: 'Surat' },
    { value: '02', districtName: '28', viewValue: 'Bardoli' },
    { value: '03', districtName: '28', viewValue: 'Choryasi' },
    { value: '04', districtName: '28', viewValue: 'Kamrej' },
    { value: '05', districtName: '28', viewValue: 'Mahuva' },
    { value: '06', districtName: '28', viewValue: 'Mandvi' },
    { value: '07', districtName: '28', viewValue: 'Mangrol' },
    { value: '08', districtName: '28', viewValue: 'Olpad' },
    { value: '09', districtName: '28', viewValue: 'Palsana' },
    { value: '10', districtName: '28', viewValue: 'Umarpada' },
    { value: '01', districtName: '29', viewValue: 'Chotila' },
    { value: '02', districtName: '29', viewValue: 'Chuda' },
    { value: '03', districtName: '29', viewValue: 'Dasada' },
    { value: '04', districtName: '29', viewValue: 'Dhrangadhra' },
    { value: '05', districtName: '29', viewValue: 'Lakhtar' },
    { value: '06', districtName: '29', viewValue: 'Limbdi' },
    { value: '07', districtName: '29', viewValue: 'Muli ' },
    { value: '08', districtName: '29', viewValue: 'Sayla' },
    { value: '09', districtName: '29', viewValue: 'Thangadh' },
    { value: '10', districtName: '29', viewValue: 'Wadhwan' },
    { value: '01', districtName: '30', viewValue: 'Nizar' },
    { value: '02', districtName: '30', viewValue: 'Songadh' },
    { value: '03', districtName: '30', viewValue: 'Uchhal' },
    { value: '04', districtName: '30', viewValue: 'Valod' },
    { value: '05', districtName: '30', viewValue: 'Vyara' },
    { value: '06', districtName: '30', viewValue: 'Kukarmunda' },
    { value: '07', districtName: '30', viewValue: 'Dolvan' },
    { value: '01', districtName: '31', viewValue: 'Vadodara' },
    { value: '02', districtName: '31', viewValue: 'Dabhoi' },
    { value: '03', districtName: '31', viewValue: 'Desar' },
    { value: '04', districtName: '31', viewValue: 'Karjan' },
    { value: '05', districtName: '31', viewValue: 'Padra' },
    { value: '06', districtName: '31', viewValue: 'Savli' },
    { value: '07', districtName: '31', viewValue: 'Sinor' },
    { value: '08', districtName: '31', viewValue: 'Vaghodia' },
    { value: '01', districtName: '32', viewValue: 'Valsad' },
    { value: '02', districtName: '32', viewValue: 'Dharampur' },
    { value: '03', districtName: '32', viewValue: 'Kaprada' },
    { value: '04', districtName: '32', viewValue: 'Pardi' },
    { value: '05', districtName: '32', viewValue: 'Umbergaon' },
    { value: '06', districtName: '32', viewValue: 'Vapi' },
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
  instituteNameList: ListValue[] = [
    { value: '0', viewValue: 'Dahegam Nagarpalika' },
    { value: '1', viewValue: 'DMDG' },
  ];

  majorHeadList: ListValue[] = [
    { value: '0', viewValue: '2202 Education' },
    { value: '1', viewValue: '2210 Public Health' },
  ];
  // lists end

  // table data start
  elementData: DistrictPanchayatCreator[] = [
    {
      financialYear: '2018-19',
      district: 'Surat',
      taluka: 'Surat',
      id: 1,
      instituteType: 'District Panchayat',
      instituteName: 'Surat District Panchayat',
      majorHead: '2202 Education',
      totalOpeningBalance: 10000,
      totalGrantReceived: 15000,
      totalActualExpenditure: 21000,
      totalGrantRefund: 3000,
      totalClosingBalance: 7000,
      totalGrantSaved: 3000,
      totalOverExpenses: 0,
    },
    {
      financialYear: '2018-19',
      district: 'Surat',
      taluka: 'Kamrej',
      id: 4,
      instituteType: 'Taluka Panchayat',
      instituteName: 'Kamrej Taluka Panchayat',
      majorHead: '2210 Public Health',
      totalOpeningBalance: 15000,
      totalGrantReceived: 10000,
      totalActualExpenditure: 20000,
      totalGrantRefund: 3000,
      totalClosingBalance: 8000,
      totalGrantSaved: 3000,
      totalOverExpenses: 0,
    },
  ];
  dataSource = new MatTableDataSource<DistrictPanchayatCreator>(this.elementData);
  displayedColumns: string[] = [
    'serialNo',
    'financialYear',
    'district',
    'taluka',
    'id',
    'instituteType',
    'instituteName',
    'majorHead',
    'totalOpeningBalance',
    'totalGrantReceived',
    'totalActualExpenditure',
    'totalGrantRefund',
    'totalClosingBalance',
    'totalGrantSaved',
    'totalOverExpenses',
    'action'
  ];
  // table data end

  // constructor
  constructor(private fb: FormBuilder, public dialog: MatDialog) { }

  ngOnInit() {
    this.submitFormData();
  }

  // form data
  submitFormData() {
    this.districtPanchayatCreator = this.fb.group({
      financialYear: ['3'],
      districtName: [''],
      talukaName: [''],
      instituteType: [''],
      instituteName: [''],
      id: [''],
      majorHead: [''],
      openingBalancePlan: [''],
      openingBalanceNonPlan: [''],
      totalOpeningBalance: [''],
      receivedGrantPlan: [''],
      receivedNonPlan: [''],
      totalGrantReceived: [''],
      expenseDistrictPanchayatPlan: [''],
      expenseDistrictPanchayatNonPlan: [''],
      totalActualExpenditure: [''],
      transferToTalukaPlan: [''],
      transferToTalukaNonPlan: [''],
      totalTransferToTaluka: [''],
      grantRefundedPlan: [''],
      grantRefundedNonPlan: [''],
      totalGrantRefund: [''],
      closingBalance: [''],
      closingBalanceRevenue: [''],
      totalClosingBalance: [''],
      grantSavedCapital: [''],
      grantSavedRevenue: [''],
      toalGrantSaved: [''],
      overExpenseCapital: [''],
      overExpenseRevenue: [''],
      totalOverExpenses: [''],
      remarkCapital: [''],
      remarkRevenue: [''],
      remarksByCreator: [''],

    });
  }

  // enable table data for editing
  edit(index) {
    const financialYearValue = this.elementData[index].financialYear;
    const districtNameValue = this.elementData[index].district;
    const majorHeadValue = this.elementData[index].majorHead;
    const instituteTypeValue = this.elementData[index].instituteType;
    const instituteNameValue = this.elementData[index].instituteName;
    const talukaValue = this.elementData[index].taluka;
    const length = Object.keys(this.financialYearList).length;
    const length1 = Object.keys(this.districtNameList).length;
    const length2 = Object.keys(this.majorHeadList).length;
    const length3 = Object.keys(this.instituteNameList).length;
    const length4 = Object.keys(this.instituteTypeList).length;
    const length5 = Object.keys(this.talukaNameList).length;

    let financialYear;
    let districtName;
    let majorHead;
    let instituteName;
    let instituteType;
    let talukaName;

    for (let i = 0; i < length4; i++) {
      if (instituteTypeValue === this.instituteTypeList[i].viewValue) {
        instituteType = this.instituteTypeList[i].value;
      }
    }
    for (let i = 0; i < length5; i++) {
      if (instituteNameValue === this.instituteNameList[i].viewValue) {
        instituteName = this.instituteNameList[i].value;
      }
    }
    for (let i = 0; i < length1; i++) {
      if (districtNameValue === this.districtNameList[i].viewValue) {
        districtName = this.districtNameList[i].value;
      }
    }
    for (let i = 0; i < length; i++) {
      if (financialYearValue === this.financialYearList[i].viewValue) {
        financialYear = this.financialYearList[i].value;
      }
    }
    for (let i = 0; i < length2; i++) {
      if (majorHeadValue === this.majorHeadList[i].viewValue) {
        majorHead = this.majorHeadList[i].value;
      }
    }
    for (let i = 0; i < length3; i++) {
      if (talukaName === this.talukaNameList[i].viewValue) {
        talukaName = this.talukaNameList[i].value;
      }
    }
    this.districtPanchayatCreator.patchValue({
      financialYear: financialYear,
      district: districtName,
      taluka: talukaValue,
      id: '1',
      instituteType: instituteType,
      instituteName: instituteName,
      majorHead: majorHead,
      totalOpeningBalance: this.totalOpeningBalance,
      totalGrantReceived: this.totalGrantReceived,
      totalActualExpenditure: this.totalActualExpenditure,
      totalGrantRefund: this.totalGrantRefund,
      totalClosingBalance: this.totalCloseingBalance,
      totalGrantSaved: this.totalGrantReceived,
      totalOverExpenses: this.totalOverExpenses,
    });
  }

  // select taluka on basis of district
  selectDistrict() {
    const district = this.districtPanchayatCreator.value.districtName;
    if (district !== '' && district != null) {
      this.talukaNameList = this.talukaList.filter(
        searchBy => searchBy.districtName.toLowerCase() === district.toLowerCase());

    }
  }

  // increase id
  idCreation() {
    const id = Number(this.id) + 1;
    return id;

  }

  // add table entry
  add() {

    if (this.districtPanchayatCreator.valid) {
      this.isSubmitted = false;
    } else {
      this.isSubmitted = true;
    }
    let serialNo = 3;
    this.elementData.push({
      financialYear: this.financialYearList[this.districtPanchayatCreator.value.financialYear].viewValue,
      district: this.districtNameList[this.districtPanchayatCreator.value.districtName].viewValue,
      taluka: this.talukaNameList[this.districtPanchayatCreator.value.talukaName].viewValue,
      id: serialNo,
      instituteType: this.instituteTypeList[this.districtPanchayatCreator.value.instituteType].viewValue,
      instituteName: this.instituteNameList[this.districtPanchayatCreator.value.instituteName].viewValue,
      majorHead: this.majorHeadList[this.districtPanchayatCreator.value.majorHead].viewValue,
      totalOpeningBalance: this.totalOpeningBalance,
      totalGrantReceived: this.totalGrantReceived,
      totalActualExpenditure: this.totalActualExpenditure,
      totalGrantRefund: this.totalGrantReceived,
      totalClosingBalance: this.totalCloseingBalance,
      totalGrantSaved: this.totalGrantReceived,
      totalOverExpenses: this.totalOverExpenses
    });

    this.dataSource = new MatTableDataSource<DistrictPanchayatCreator>(this.elementData);
    serialNo = serialNo + 1;

  }

  // reset form
  resetForm() {

  }

  // common reset form
  reset() { }


  // calculate total opening balance
  totalOpeningBalanceValue() {
    const openingPlanValue = this.districtPanchayatCreator.value.openingBalancePlan;
    const openingNonPlanValue = this.districtPanchayatCreator.value.openingBalanceNonPlan;

    if (openingPlanValue !== '' && openingNonPlanValue !== '') {
      this.totalOpeningBalance = Number(openingPlanValue) + Number(openingNonPlanValue);
    }
    return this.totalOpeningBalance;
  }


  // calculate total grant received value
  totalGrantReceivedValue() {
    const openingPlanValue = this.districtPanchayatCreator.value.receivedGrantPlan;
    const openingNonPlanValue = this.districtPanchayatCreator.value.receivedNonPlan;

    if (openingPlanValue !== '' && openingNonPlanValue !== '') {
      this.totalGrantReceived = Number(openingPlanValue) + Number(openingNonPlanValue);
    }
    return this.totalGrantReceived;
  }

  // calculate total taluka transfer value
  totalTalukaTransferValue() {
    const openingPlanValue = this.districtPanchayatCreator.value.transferToTalukaPlan;
    const openingNonPlanValue = this.districtPanchayatCreator.value.transferToTalukaNonPlan;

    if (openingPlanValue !== '' && openingNonPlanValue !== '') {
      this.totalTalukaTransfer = Number(openingPlanValue) + Number(openingNonPlanValue);
    }
    return this.totalTalukaTransfer;
  }

  // calculate grant refund value
  totalGrantRefundValue() {
    const openingPlanValue = this.districtPanchayatCreator.value.grantRefundedPlan;
    const openingNonPlanValue = this.districtPanchayatCreator.value.grantRefundedNonPlan;

    if (openingPlanValue !== '' && openingNonPlanValue !== '') {
      this.totalGrantRefund = Number(openingPlanValue) + Number(openingNonPlanValue);
    }
    return this.totalGrantRefund;
  }

  // calculate total closing balance
  totalCloseingBalanceValue() {
    this.totalCloseingBalance = Number(this.closingBalance) + Number(this.closingBalanceRevenue);


    if (this.totalCloseingBalance > 0) {
      this.positiveClosingBalance = String(this.totalCloseingBalance);
    }
    if (this.totalCloseingBalance < 0) {
      this.negativeClosingBalance = String(this.totalCloseingBalance);
    }
    return this.totalCloseingBalance;
  }

  // calculate closing balance
  calculateClosingBalance() {
    const openingPlanValue = this.districtPanchayatCreator.value.openingBalancePlan;
    const receivedValue = this.districtPanchayatCreator.value.receivedGrantPlan;
    const expenseValue = this.districtPanchayatCreator.value.expenseDistrictPanchayatPlan;
    const refundValue = this.districtPanchayatCreator.value.grantRefundedPlan;

    if (openingPlanValue !== '' && receivedValue !== '' && expenseValue !== '' && refundValue !== '') {
      this.closingBalance = Number(openingPlanValue) + Number(receivedValue) - Number(expenseValue) - Number(refundValue);
    }

    return this.closingBalance;

  }


  // calculate closing balance revenue
  calculateClosingBalanceRevenue() {
    const openingPlanValue = this.districtPanchayatCreator.value.openingBalanceNonPlan;
    const receivedValue = this.districtPanchayatCreator.value.receivedNonPlan;
    const expenseValue = this.districtPanchayatCreator.value.expenseDistrictPanchayatNonPlan;
    const refundValue = this.districtPanchayatCreator.value.grantRefundedNonPlan;

    if (openingPlanValue !== '' && receivedValue !== '' && expenseValue !== '' && refundValue !== '') {
      this.closingBalanceRevenue = Number(openingPlanValue) + Number(receivedValue) - Number(expenseValue) - Number(refundValue);
    }

    return this.closingBalanceRevenue;

  }

  // calculate total grant saved value
  totalGrantSavedValue() {
    const openingPlanValue = this.districtPanchayatCreator.value.grantSavedCapital;
    const openingNonPlanValue = this.districtPanchayatCreator.value.grantSavedRevenue;

    if (openingPlanValue !== '' && openingNonPlanValue !== '') {
      this.totalGrantSaved = Number(openingPlanValue) + Number(openingNonPlanValue);
    }
    return this.totalGrantSaved;
  }

  // calculate total expenses value
  totalOverExpensesValue() {
    const openingPlanValue = this.districtPanchayatCreator.value.overExpenseCapital;
    const openingNonPlanValue = this.districtPanchayatCreator.value.overExpenseRevenue;

    if (openingPlanValue !== '' && openingNonPlanValue !== '') {
      this.totalOverExpenses = Number(openingPlanValue) + Number(openingNonPlanValue);
    }
    return this.totalOverExpenses;
  }


  // calculate total actual expenditure
  totalActualExpenditureValue() {
    const openingPlanValue = this.districtPanchayatCreator.value.expenseDistrictPanchayatPlan;
    const openingNonPlanValue = this.districtPanchayatCreator.value.expenseDistrictPanchayatNonPlan;

    if (openingPlanValue !== '' && openingNonPlanValue !== '') {
      this.totalActualExpenditure = Number(openingPlanValue) + Number(openingNonPlanValue);
    }
    return this.totalActualExpenditure;
  }

}
