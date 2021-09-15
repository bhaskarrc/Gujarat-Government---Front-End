import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { CommonListing } from 'src/app/model/common-listing';
import { BankList } from 'src/app/model/ppo';

@Component({
  selector: 'app-auditor-bank-branch-mapping',
  templateUrl: './auditor-bank-branch-mapping.component.html',
  styleUrls: ['./auditor-bank-branch-mapping.component.css']
})
export class AuditorBankBranchMappingComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  // variables
  selectedAuditor: any;
  selectedBankName: any;
  selectedBranchName: any;
  subList: Boolean;
  menuCheckbox: Boolean;
  auditorBankMapping: FormGroup;
  allComplete = false;
  allCompleteBranch = false;

  // lists
  billType_list: CommonListing[] = [
    { value: 1, viewValue: 'Pension' },
    { value: 2, viewValue: 'MR' },
    { value: 3, viewValue: 'Both' }
  ];

  pensionScheme_list: CommonListing[] = [
    { value: 1, viewValue: 'IRLA' },
  ];

  auditor_list: CommonListing[] = [
    { value: 1, viewValue: 'T A Thakkar' },
    { value: 2, viewValue: 'YOGIRAJ JADEJA' },
    { value: 3, viewValue: ' s r desai' },
    { value: 4, viewValue: 'h h vaghela' }
  ];

  bank_list: BankList[] = [
    { value: 1, viewValue: 'HDFC', completed: false },
    { value: 2, viewValue: 'SBI', completed: false }
  ];

  branch_list: BankList[] = [
    { value: 1, viewValue: 'Chankheda', completed: false },
    { value: 2, viewValue: 'Ahmedabad', completed: false },
    { value: 3, viewValue: 'Vadodara', completed: false }
  ];

  //  form controls
  billTypeCtrl: FormControl = new FormControl();
  pensionSchemeTypeCtrl: FormControl = new FormControl();

  // selects menu
  menuList(item) {
    this.selectedBranchName = item.viewValue;
  }

  // selects sub menu
  subMenu(item) {
    this.selectedBankName = item.viewValue;
    this.menuCheckbox = true;
  }

  // selects auditor
  clickOnAuditor(item) {
    this.subList = true;
    this.selectedAuditor = item.viewValue;
  }

  ngOnInit() {
    this.auditorBankMapping = this.fb.group({
      pensionScheme: this.pensionScheme_list[0].viewValue,
      billType: this.billType_list[0].viewValue,
    });
  }


  // methods for checkbox for bank

  updateAllComplete() {
    this.allComplete = this.bank_list != null && this.bank_list.every(t => t.completed);
  }

  someComplete(): boolean {
    if (this.bank_list == null) {
      return false;
    }
    return this.bank_list.filter(t => t.completed).length > 0 && !this.allComplete;
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    if (this.bank_list == null) {
      return;
    }
    this.bank_list.forEach(t => t.completed = completed);
  }

  // checkbox methods for branch

  updateAllCompleteBranch() {
    this.allCompleteBranch = this.branch_list != null && this.branch_list.every(t => t.completed);
  }

  someCompleteBranch(): boolean {
    if (this.branch_list == null) {
      return false;
    }
    return this.branch_list.filter(t => t.completed).length > 0 && !this.allCompleteBranch;
  }

  setAllBranch(completed: boolean) {
    this.allCompleteBranch = completed;
    if (this.branch_list == null) {
      return;
    }
    this.branch_list.forEach(t => t.completed = completed);
  }
}
