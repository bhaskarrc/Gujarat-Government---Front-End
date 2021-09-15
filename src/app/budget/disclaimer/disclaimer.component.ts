
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { CommonListing } from 'src/app/model/common-listing';
import { budgetMessage } from '../../common/error-message/common-message.constants';
import { validateVerticalPosition } from '@angular/cdk/overlay';
import { Router } from '@angular/router';

declare function SetEnglish();
declare function SetGujarati();

@Component({
  selector: 'app-disclaimer',
  templateUrl: './disclaimer.component.html',
  styleUrls: ['./disclaimer.component.css']
})
export class DisclaimerComponent implements OnInit {
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  currentLang = new BehaviorSubject<string>('Eng');
  isLangChange = false;
  hasFocusSet: number;
  gujaratiType: Boolean = true;
  engAtiveClass: Boolean = false;
  gujAtiveClass: Boolean = false;
  expendCharges: boolean;
  // Descriptions in Eng and Guj starts
  discEnglish = 'Various Government schemes under their respective demand heads are contained' +
                ' in this document after detailed consultations. Hence, summation of any budget head or department' +
                ' may not be compared with actual provisions/outlays. Utmost care has been taken for data accuracy in' +
                ' this document. However, in case of any discrepancy, the budget publication of concerned department' +
                ' published by Finance Department, Government of Gujarat may be considered. As regards the provision of' +
                ' budget estimates in this document, figures shown in budget publication of Finance Department should be treated as final.';
                // tslint:disable-next-line: no-trailing-whitespace

  introEng = 'The Outcome Budget 2020-21 is thefourth of its kind since the Government of Gujarat initiated an' +
                '  Outcome Budget in the year 2017-18.The Outcome Budget also aims at changing the perspective of the Departments' +
                '  by shifting the focus from ‘outlays’ to measurable ‘outcomes’ and can be viewed as a tangible expression of a' +
                '  Government’s priorities, performances, decisions and intentions. The budget publication no. 56 is attributed to' +
                '  Outcome Budget. The Outcome Budget establishes linkage between budgetary provision and socially viable development' +
                '  outcome across schemes and programmes. In the context of UN 2030 Agenda of Sustainable Development Goals (SDGs),' +
                '  the State Government has prepared “Gujarat Sustainable Vision 2030”which comprises of State Indicator Framework (SIF).' +
                '  The schemes and programmes of Outcome Budget have been linked with State Indicator Framework. The State Dashboard' +
                '  is prepared to monitor the progress and schemes of Outcome Budget. Generally, schemes having large outlays,' +
                '  schemes related to physical output such as construction and procurement, schemes intended to improve developmental' +
                '  indicators and schemes designed to extend subsidies or benefits to individuals, have been included. Thereafter' +
                '  indicators have been rationalized by the respective Department for each of these schemes and physical targets' +
                '  have been indicated for the next 3 years. These targets are projections and are subject to modifications based' +
                '  on actual requirements and budgetary provisions of the relevant year.A special attempt has been made to indicate' +
                '  Macro Outcomes for each Department. Planning Division, General Administration Department of the State has carried' +
                '  out extensive consultations with Departments to rationalize targets and priorities for Outcome Budget 2020-21.';

  discGuj = '{ુદા {ુદા િવભાગોની સાથે ચચા9 િવચારણા બાદ આ દZતાવેજમા સમાિવ}ટ ત ં ેઓને સંબંિધત િવિવધ સદરોની' +
            '   માગણીઓ તગ ં 9ત િવગતવાર ચચા9 બાદ યોજનાઓનો  સમાવેશ કરવામા આવ ં ેલ છે. આ કાશનમા સમાિવ}ટ માહતીની' +
            '   ચોસા ં ઈ ગે કાળ લેવામા આવ ં ેલ છે તેમ છતાં કોઈ િવસવાદતતાના કZસામા ં Gં જરાત સરકારના ુ' +
            '   નાણા ં િવભાગ ‚ારા ƒ ત ં ે િવભાગના કાિશત કરવામા આવ ં ેલ દાજપ આખર‑ ગણાશે. આ દZતાવેજમા' +
            '   દાજપીય જોગવા ં ઈઓમા દશા ં 9વેલ રકમ માટ* નાણા િવભાગ1 ં ં ુ દાજપ કાશન આખર‑ ગણાશે.';
            // tslint:disable-next-line: no-trailing-whitespace
            
  introGuj = 'ગજરાત સરકાર દ્વારા ુ પરરણામલક્ષી અંદાજપત્રની શરૂઆત વર્ષ :ર૦૧૭-૧૮થી કરવામા આવેલ અને પ્રસ્ત ાં ત ુ પરરણામલક્ષી' +
    '   અંદાજપત્ર:૨૦૨૦-૨૦૨૧એ આ પ્રકારનુચોથુપરરણામલક્ષી અંદાજપત્ર છે. પરરણામલક્ષી અંદાજપત્રનો મખ્ય હેત ુ અંદાજપત્રીય જોગવાઇઓને ુ' +
    '   વવવવધ યોજનાઓના વવકાસના પરરણામો સાથે સાકળવાનો છે. પરરણામલક્ષી ાં અંદાજપત્ર સરકારની અગ્રતાઓ, વનણયો ષ , ઉદ્દેશો' +
    '   અને કાયષક્રમોને મતૂ ષ સ્વરૂપ આપવામા મદદરૂપ બનશે. ગ ાં જરાત રાજ્ય ુ દ્વારા અંદાજપત્ર પ્રકાશન નબર ાં -પ૬ તરીકે પરરણામલક્ષ' +
    '  ી અંદાજપત્ર બહાર પાડવામા આવે છે. પરર ાં ણામલક્ષી અંદાજપત્ર દ્વારા માત્ર યોજનાઓની નાણાકીય જોગવાઇની પ્રગવત સધી વસવમત' +
    '   ના રહેતા વનયત ભૌવતક લક્ષયા ુ કોની વસદ્ધિ તેમજ ાં ઉદ્દેશો અંગેનો પણ વનદેશ મળે છે. આ પરરપ્રેક્ષમાાં સયાં કતુ રાષ્ટ્રસઘાં ના' +
    '   એજ્ન્ડા ૨૦૩૦ દ્વારા વનધાષરરત કરેલ સસ્ટેનેબલ ડેવલપમે્ટ ગોલ અંતગષત રાજ્ય સરકાર દ્વારા “ગજરાત સસ્ટેનેબલ વવઝન ુ ૨૦૩૦”' +
    '   તૈયાર કરવામા આવેલ છે ાં જેમા સ્ટેટ ઈ્ડીકેટર ફ્ર ાં ેમવકષનો સમાવેશ કરવામા આવેલ છે. ાં પરરણામલક્ષી અંદાજપત્રની યોજનાઓ' +
    '   અને કાયષક્રમોનેસ્ટેટ ઇ્ડીકેટર ફ્રેમવકષ સાથે જોડવામા આવેલ છે ાં .પરરણામલક્ષી અંદાજપત્રની પ્રગવત અને યોજનાઓ પર દેખરેખ' +
    '   અને વનયત્રણ અથે સ્ટેટ ડેશબોડ ાં ષ પણ તૈયાર કરવામાાં આવેલ છે. સામા્યતઃ મોટી જોગવાઇઓ ધરાવતી યોજનાઓ, બાધકામ' +
    '   અને ખરીદીને સ ાં બાં વધત યોજનાઓ ાં , વવકાસના સચકા ૂ કોને સ ાં ધારવા માટે ઘડાયેલી યોજનાઓ તેમજ વ્યક્તતગત લાભોને' +
    '   લગતી યોજનાઓને ુ પરરણામલક્ષી અંદાજપત્રમા સમાવવષ્ટ્ટ કરવામા ાં આવેલ છે. તદ ાં ુપરાત દરેક યોજના માટે જે તે વવભાગ દ્વારા' +
    '   યોજનાને લગતા વનદેશક ાં 3 નક્કી કરી આગામી ત્રણ વર્ષ માટે વનદેશકને લગતા ભૌવતક લક્ષયાકો ાં વનયત કરવામાાં આવેલ છે.' +
    '   જો કે,આ લક્ષયાકો જે ાં તે વર્ષની ખરેખર આવશ્યકતા અને અંદાજપત્રીય જોગવાઇને અધીન રહેશે. પરરણામલક્ષી અંદાજપત્રમા' +
    '   વવવવધ ાં વવભાગોના મખ્ય ુ ઉદ્દેશોનો ખાસ સમાવેશ કરવામાાં આવેલ છે. સામા્ય વહીવટ વવભાગના આયોજન પ્રભાગ દ્વારા ' +
    '  ૨૦૨૦-૨૧ન ુાં પરરણામલક્ષી અંદાજપત્ર રાજ્ય સરકારના વવવવધ વવભાગો સાથે સઘન પરામશષ દ્વારા તૈયાર કરવામા આવેલ છે.' +
    '   આ પરરણામલક્ષી અંદાજપત્રની સાથે વવભાગોના વવકાસલક્ષી ઉદ્દેશો અને તે પણૂ કરવા માટેની ઘડી કાઢેલ ષ વ્યહરચના' +
    '   સમાવવામા ુ આવેલ છે. યોજનાઓની વવગતોમા ાં યોજનાન ાં નામ ુ , ઘટકો અને પ્રવવિઓૃ , સભવવત લાભાથીઓ ાં ,' +
    '   એજ્સીઓ અને અપેક્ષક્ષત આઉટકમને પસદ કરેલી યોજનાઓને અંદાજપત્ર પ્રકાશન ન ાં . ાં – ૩પમા ભાગ ાં –ર તરીકે સમાવેલ છે.' +
    '   દરેક વવભાગના અપેક્ષક્ષત પરરણામો સચવવા અને તે માટેની ગ્રા્ટ દરેક વવભાગ સામે દશા ૂ ષવવા માટે ખાસ પ્રયાસ કરવામા આવેલ છે.' +
    '   ાં પરરણામલક્ષી અંદાજપત્ર, સરકારી નાણાાં પ્રજાના રહતમા વધ ાં સક્ષમ રીતે વપરાય અને નાગરરકોને તેનો મહિમ ુ લાભ મળે તેઅંગેની નીવત' +
    '   ઘડતરમા સહાયરૂપ થશે અને ક્ષબનજરૂરી અથવા ઓછા ઉપયોગી ખચને ટાળી શકાશે. ષ રાજ્ય સરકારના ખચને વવકાસ ષ ના ' +
    '  કાયમા ષ યોગ્ય રીતે મ ાં લવવા માટે ુ પરરણામલક્ષી અંદાજપત્રને વધ અસરકારક ુ અને અથષસભર બનાવવા માટેના સચનો અને પ્રવતભાવો આવકાય ૂ ષ છે.';
    // Descriptions in Eng and Guj Ends
  public errorMessages;

  // Entry section details
  filteredDisclaimerPublicationNumber: CommonListing[] = [
    { value: '1', viewValue: '56:Outcome budget' },
  ];
  @ViewChild('codeInput') codeInput: ElementRef<HTMLInputElement>;

  disclaimerForm: FormGroup;
  disclaimerPublicationNumberCtrl: FormControl = new FormControl();

  @ViewChild('scrollChargeMe') private myScrollContainer: ElementRef;
  @ViewChild('parentGrids') private parentGrid: ElementRef;
  @ViewChild('codeGJ') codeGJ: ElementRef;
  constructor(
    private fb: FormBuilder,
    private elem: ElementRef,
    private router: Router,
  ) { }

  date: any = new Date();

  ngOnInit() {
    this.createForm();
    this.errorMessages = budgetMessage;
  }

  createForm() {
    this.disclaimerForm = this.fb.group({
      finYear: ['2020-2021'],
      disclaimerPublicationNumber: ['1'],
      disclaimerMessage: ['', Validators.required],
      writeUpGuj: ['', Validators.required],
      introMessage: ['', Validators.required],
      introWriteUpGuj: ['', Validators.required],
    });
  }

  saveDisclaimerForm() {
    console.log(this.disclaimerForm.value);
  }

  gotoListing() {
    this.router.navigate(['./budget/disclaimer-list']);
  }

  // Eng Guj functions starts
    setEnglishOnFocusOut() {
      SetEnglish();
    }
    setGujaratiDefault() {
      if (!this.isLangChange) {
        SetGujarati();
        this.currentLang.next('Eng');
      }
    }
    toggleLanguage() {
      this.isLangChange = true;
      const elements = this.elem.nativeElement.querySelectorAll('.hasfocus')[0];
      if (elements != undefined) {
        if (this.currentLang.value == 'Guj') {
          SetEnglish();
          this.currentLang.next('Eng');
        } else {
          SetGujarati();
          this.currentLang.next('Guj');
        }
        elements.focus();
      }
    }
  // Eng Guj functions Ends
  submitDetails() { }

}
