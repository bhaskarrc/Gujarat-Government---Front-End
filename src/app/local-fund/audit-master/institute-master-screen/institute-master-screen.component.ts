
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { DialogData } from 'src/app/model/standing-charge';
import { lfMessage } from 'src/app/common/error-message/common-message.constants';


@Component({
  selector: 'app-generate-institute-code',
  templateUrl: 'generate-institute-code.html',

})
export class GenerateInstituteCodeComponent {

  generateInstituteCode: string;
  districtCode: string;
  talukaCode: string;
  instituteTypeCode: string;
  instituteNameCode: string;
  generateInstituteCodeCtrl: FormControl = new FormControl();

  // injects data into dialog po-up
  constructor(
    public dialogRef: MatDialogRef<GenerateInstituteCodeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    this.districtCode = data['districtCode'];
    this.talukaCode = data['talukaCode'];
    this.instituteTypeCode = data['instituteTypeCode'];
    this.instituteNameCode = data['instituteNameCode'];

  }

  // calculate institute code
  calculateInstituteCode() {
    if (this.districtCode !== '' && this.talukaCode !== '' && this.instituteTypeCode !== '' && this.instituteNameCode !== '') {
      this.generateInstituteCode = (this.districtCode + this.talukaCode + this.instituteTypeCode + this.instituteNameCode);
    }
    return this.generateInstituteCode;
  }

  // closes dialog pop-up
  close() {
    this.dialogRef.close();
  }

}
@Component({
  selector: 'app-institute-master-screen',
  templateUrl: './institute-master-screen.component.html',
  styleUrls: ['./institute-master-screen.component.css']
})
export class InstituteMasterScreenComponent implements OnInit {
  isSubmitted = false;
  errorMessages = lfMessage;
  referenceNumber = 'Reference Number:';
  referenceNumberDate = 'Reference Date:';
  todayDate = Date.now();
  instituteMasterScreenForm: FormGroup;
  instituteMasterScreenFormInfo = 'Institute Master Screen';
  totalMandaysValue: number;
  generateInstituteCode = '';
  index = '001';
  arrayIndex = 0;
  financialYearList: ListValue[] = [
    { value: '2017-18', viewValue: '2017-18' },
    { value: '2018-19', viewValue: '2018-19' },
    { value: '2019-20', viewValue: '2019-20' },
    { value: '2020-21', viewValue: '2020-21' },
    { value: '2021-22', viewValue: '2021-22' },
    { value: '2022-23', viewValue: '2022-23' },
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

  talukaList: any[] = [
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
  talukaNameList: any[];

  instituteCodeList: any[] = [];

  instituteTypeList: ListValue[] = [
    { value: 'MP', viewValue: 'MahaNagar Palika' },
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

  financialYearCtrl: FormControl = new FormControl();
  districtNameCtrl: FormControl = new FormControl();
  talukaNameCtrl: FormControl = new FormControl();
  instituteTypeCtrl: FormControl = new FormControl();
  auditChargableCtrl: FormControl = new FormControl();

  constructor(private fb: FormBuilder, public dialog: MatDialog) { }

  ngOnInit() {
    this.submitFormData();
  }

  submitFormData() {
    this.instituteMasterScreenForm = this.fb.group({
      financialYear: [''],
      workingDays: [''],
      districtName: [''],
      talukaName: [''],
      instituteType: [''],
      instituteName: [''],
      others: [''],
      emailId: ['', Validators.email],
      sanctionedMandays: [''],
      auditChargable: [''],
      additionalMandays: [''],
      totalMandays: [''],
      generateInstituteCode: ['']
    });
  }

  // calculate total mandays
  calculateTotalMandays($event?: any) {
    this.totalMandaysValue = (Number(this.instituteMasterScreenForm.value.sanctionedMandays)
      + Number(this.instituteMasterScreenForm.value.additionalMandays));

    return this.totalMandaysValue;
  }

  // reset form
  resetForm() {
    this.instituteMasterScreenForm.reset();
  }



  // select taluka on basis of district
  selectDistrict() {
    const district = this.instituteMasterScreenForm.value.districtName;
    if (district !== '' && district != null) {
      this.talukaNameList = this.talukaList.filter(
        searchBy => searchBy.districtName.toLowerCase() === district.toLowerCase());
    }
  }

  // on click on save as draft
  onSaveAsDraft() {
  }

  // submit form data
  submitForm() {
    if (this.instituteMasterScreenForm.valid) {
      this.isSubmitted = false;
      const instituteName = this.instituteMasterScreenForm.value.instituteName;
      this.instituteCodeList.push({
        value: this.index, viewValue: instituteName
      });
      const districtCode = this.instituteMasterScreenForm.value.districtName;
      const talukaCode = this.instituteMasterScreenForm.value.talukaName;
      const instituteTypeCode = this.instituteMasterScreenForm.value.instituteType;
      const instituteNameCode = this.instituteCodeList[this.arrayIndex].value;
      let indexIncrease;

      indexIncrease = Number(this.index) + 1;
      if (indexIncrease < 10) {
        this.index = '00' + indexIncrease;
      } else {
        this.index = '0' + indexIncrease;
      }
      this.arrayIndex = this.arrayIndex + 1;
      const dialogRef = this.dialog.open(GenerateInstituteCodeComponent, {
        width: '250px', data: { districtCode, talukaCode, instituteTypeCode, instituteNameCode }
      });
    } else {
      this.isSubmitted = true;
    }
  }
}


