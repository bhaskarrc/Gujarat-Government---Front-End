import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-gpf-interest-calculation',
  templateUrl: './gpf-interest-calculation.component.html',
  styleUrls: ['./gpf-interest-calculation.component.css']
})
export class GpfInterestCalculationComponent implements OnInit {
  // Date
  todayDate = Date.now();
  maxDate = new Date();
  // Form Group
  calculateInterest: FormGroup;
  // VAriable
  aprilTotalAmount = null;
  mayTotalAmount = null;
  juneTotalAmount = null;
  julyTotalAmount = null;
  augustTotalAmount = null;
  septemberTotalAmount = null;
  octoberTotalAmount = null;
  novemberTotalAmount = null;
  decemberTotalAmount = null;
  januaryTotalAmount = null;
  februaryTotalAmount = null;
  marchTotalAmount = null;
  totalCredit = null;
  totalDebit = null;
  totalValue = null;
  aprilInterest = null;
  mayInterest = null;
  juneInterest = null;
  julyInterest = null;
  augustInterest = null;
  septemberInterest = null;
  octoberInterest = null;
  novemberInterest = null;
  decemberInterest = null;
  januaryInterest = null;
  februaryInterest = null;
  marchInterest = null;
  totalInteresValue = null;



  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.calculateInterest = this.fb.group({
      openingBalance: [''],
      monthMay: [''],
      monthApril: [''],
      monthJune: [''],
      monthJuly: [''],
      monthAugust: [''],
      monthSeptember: [''],
      monthOctober: [''],
      monthNovember: [''],
      monthDecember: [''],
      monthJanuary: [''],
      monthFebruary: [''],
      monthMarch: [''],
      aprilCredit: [''],
      aprilDebit: [''],
      aprilTotal: [''],
      aprilInterestRate: [''],
      aprilInterest: [''],
      mayCredit: [''],
      mayDebit: [''],
      mayTotal: [''],
      mayInterestRate: [''],
      mayInterest: [''],
      juneCredit: [''],
      juneDebit: [''],
      juneTotal: [''],
      juneInterestRate: [''],
      juneInterest: [''],
      julyCredit: [''],
      julyDebit: [''],
      julyTotal: [''],
      julyInterestRate: [''],
      julyInterest: [''],
      augustCredit: [''],
      augustDebit: [''],
      augustTotal: [''],
      augustInterestRate: [''],
      augustInterest: [''],
      septemberCredit: [''],
      septemberDebit: [''],
      septemberTotal: [''],
      septemberInterestRate: [''],
      septemberInterest: [''],
      octoberCredit: [''],
      octoberDebit: [''],
      octoberTotal: [''],
      octoberInterestRate: [''],
      octoberInterest: [''],
      novemberCredit: [''],
      novemberDebit: [''],
      novemberTotal: [''],
      novemberInterestRate: [''],
      novemberInterest: [''],
      decemberCredit: [''],
      decemberDebit: [''],
      decemberTotal: [''],
      decemberInterestRate: [''],
      decemberInterest: [''],
      januaryCredit: [''],
      januaryDebit: [''],
      januaryTotal: [''],
      januaryInterestRate: [''],
      januaryInterest: [''],
      februaryCredit: [''],
      februaryDebit: [''],
      februaryTotal: [''],
      februaryInterestRate: [''],
      februaryInterest: [''],
      marchCredit: [''],
      marchDebit: [''],
      marchTotal: [''],
      marchInterestRate: [''],
      marchInterest: [''],
      total: [''],
      totalCredit: [''],
      totalDebit: [''],
      totalTotal: [''],
      totalInterest: [''],
      closingBalance: ['']

    });
  }

  aprilInterestChange() {

    const credit = this.calculateInterest.value.aprilInterestRate;
    this.calculateInterest.patchValue({
      mayInterestRate: credit,
      juneInterestRate: credit,
      julyInterestRate: credit,
      augustInterestRate: credit,
      septemberInterestRate: credit,
      octoberInterestRate: credit,
      novemberInterestRate: credit,
      decemberInterestRate: credit,
      januaryInterestRate: credit,
      februaryInterestRate: credit,
      marchInterestRate: credit,
    });
  }

  mayInterestChange() {

    const credit = this.calculateInterest.value.mayInterestRate;
    this.calculateInterest.patchValue({
      juneInterestRate: credit,
      julyInterestRate: credit,
      augustInterestRate: credit,
      septemberInterestRate: credit,
      octoberInterestRate: credit,
      novemberInterestRate: credit,
      decemberInterestRate: credit,
      januaryInterestRate: credit,
      februaryInterestRate: credit,
      marchInterestRate: credit,
    });
  }

  juneInterestChange() {

    const credit = this.calculateInterest.value.juneInterestRate;
    this.calculateInterest.patchValue({
      julyInterestRate: credit,
      augustInterestRate: credit,
      septemberInterestRate: credit,
      octoberInterestRate: credit,
      novemberInterestRate: credit,
      decemberInterestRate: credit,
      januaryInterestRate: credit,
      februaryInterestRate: credit,
      marchInterestRate: credit,
    });
  }

  julyInterestChange() {

    const credit = this.calculateInterest.value.julyInterestRate;
    this.calculateInterest.patchValue({
      augustInterestRate: credit,
      septemberInterestRate: credit,
      octoberInterestRate: credit,
      novemberInterestRate: credit,
      decemberInterestRate: credit,
      januaryInterestRate: credit,
      februaryInterestRate: credit,
      marchInterestRate: credit,
    });
  }

  augustInterestChange() {

    const credit = this.calculateInterest.value.augustInterestRate;

    this.calculateInterest.patchValue({
      septemberInterestRate: credit,
      octoberInterestRate: credit,
      novemberInterestRate: credit,
      decemberInterestRate: credit,
      januaryInterestRate: credit,
      februaryInterestRate: credit,
      marchInterestRate: credit,
    });
  }

  septemberInterestChange() {

    const credit = this.calculateInterest.value.septemberInterestRate;

    this.calculateInterest.patchValue({
      octoberInterestRate: credit,
      novemberInterestRate: credit,
      decemberInterestRate: credit,
      januaryInterestRate: credit,
      februaryInterestRate: credit,
      marchInterestRate: credit,
    });
  }

  octoberInterestChange() {

    const credit = this.calculateInterest.value.octoberInterestRate;

    this.calculateInterest.patchValue({
      novemberInterestRate: credit,
      decemberInterestRate: credit,
      januaryInterestRate: credit,
      februaryInterestRate: credit,
      marchInterestRate: credit,
    });
  }
  novemberInterestChange() {

    const credit = this.calculateInterest.value.novemberInterestRate;

    this.calculateInterest.patchValue({
      decemberInterestRate: credit,
      januaryInterestRate: credit,
      februaryInterestRate: credit,
      marchInterestRate: credit,
    });
  }

  decemberInterestChange() {

    const credit = this.calculateInterest.value.decemberInterestRate;

    this.calculateInterest.patchValue({
      januaryInterestRate: credit,
      februaryInterestRate: credit,
      marchInterestRate: credit,
    });
  }

  januaryInterestChange() {

    const credit = this.calculateInterest.value.januaryInterestRate;

    this.calculateInterest.patchValue({
      februaryInterestRate: credit,
      marchInterestRate: credit,
    });
  }

  februaryInterestChange() {

    const credit = this.calculateInterest.value.februaryInterestRate;

    this.calculateInterest.patchValue({
      marchInterestRate: credit,
    });
  }


  // credit change method start
  aprilCreditChange() {

    const credit = this.calculateInterest.value.aprilCredit;

    this.calculateInterest.patchValue({
      mayCredit: credit,
      juneCredit: credit,
      julyCredit: credit,
      augustCredit: credit,
      septemberCredit: credit,
      octoberCredit: credit,
      novemberCredit: credit,
      decemberCredit: credit,
      januaryCredit: credit,
      februaryCredit: credit,
      marchCredit: credit,
    });
  }

  mayCreditChange() {

    const credit = this.calculateInterest.value.mayCredit;

    this.calculateInterest.patchValue({
      juneCredit: credit,
      julyCredit: credit,
      augustCredit: credit,
      septemberCredit: credit,
      octoberCredit: credit,
      novemberCredit: credit,
      decemberCredit: credit,
      januaryCredit: credit,
      februaryCredit: credit,
      marchCredit: credit,
    });
  }

  juneCreditChange() {

    const credit = this.calculateInterest.value.juneCredit;

    this.calculateInterest.patchValue({
      julyCredit: credit,
      augustCredit: credit,
      septemberCredit: credit,
      octoberCredit: credit,
      novemberCredit: credit,
      decemberCredit: credit,
      januaryCredit: credit,
      februaryCredit: credit,
      marchCredit: credit,
    });
  }

  julyCreditChange() {

    const credit = this.calculateInterest.value.julyCredit;

    this.calculateInterest.patchValue({
      augustCredit: credit,
      septemberCredit: credit,
      octoberCredit: credit,
      novemberCredit: credit,
      decemberCredit: credit,
      januaryCredit: credit,
      februaryCredit: credit,
      marchCredit: credit,
    });
  }

  augustCreditChange() {

    const credit = this.calculateInterest.value.augustCredit;

    this.calculateInterest.patchValue({
      septemberCredit: credit,
      octoberCredit: credit,
      novemberCredit: credit,
      decemberCredit: credit,
      januaryCredit: credit,
      februaryCredit: credit,
      marchCredit: credit,
    });
  }

  septemberCreditChange() {

    const credit = this.calculateInterest.value.septemberCredit;

    this.calculateInterest.patchValue({
      octoberCredit: credit,
      novemberCredit: credit,
      decemberCredit: credit,
      januaryCredit: credit,
      februaryCredit: credit,
      marchCredit: credit,
    });
  }

  octoberCreditChange() {

    const credit = this.calculateInterest.value.octoberCredit;

    this.calculateInterest.patchValue({
      novemberCredit: credit,
      decemberCredit: credit,
      januaryCredit: credit,
      februaryCredit: credit,
      marchCredit: credit,
    });
  }
  novemberCreditChange() {

    const credit = this.calculateInterest.value.novemberCredit;

    this.calculateInterest.patchValue({
      decemberCredit: credit,
      januaryCredit: credit,
      februaryCredit: credit,
      marchCredit: credit,
    });
  }

  decemberCreditChange() {

    const credit = this.calculateInterest.value.decemberCredit;

    this.calculateInterest.patchValue({
      januaryCredit: credit,
      februaryCredit: credit,
      marchCredit: credit,
    });
  }

  januaryCreditChange() {

    const credit = this.calculateInterest.value.januaryCredit;

    this.calculateInterest.patchValue({
      februaryCredit: credit,
      marchCredit: credit,
    });
  }

  februaryCreditChange() {

    const credit = this.calculateInterest.value.februaryCredit;

    this.calculateInterest.patchValue({
      marchCredit: credit,
    });
  }


  aprilTotal(): number {
    const credit = this.calculateInterest.value.aprilCredit;
    const debit = this.calculateInterest.value.aprilDebit;
    const openingBalance = this.calculateInterest.value.openingBalance;
    let total = null;
    if (openingBalance !== '' && credit !== '' && debit !== '') {
      total = Number(openingBalance) + Number(credit) - Number(debit);
    }

    this.aprilTotalAmount = total;
    return total;
  }

  mayTotal(): number {
    const credit = this.calculateInterest.value.mayCredit;
    const debit = this.calculateInterest.value.mayDebit;
    let total = null;
    if (credit !== '' && debit !== '') {
      total = Number(credit) - Number(debit);
    }

    this.mayTotalAmount = total;
    return total;
  }

  juneTotal(): number {
    const credit = this.calculateInterest.value.juneCredit;
    const debit = this.calculateInterest.value.juneDebit;
    let total = null;
    if (credit !== '' && debit !== '') {
      total = Number(credit) - Number(debit);
    }
    this.juneTotalAmount = total;
    return total;
  }

  julyTotal(): number {
    const credit = this.calculateInterest.value.julyCredit;
    const debit = this.calculateInterest.value.julyDebit;
    let total = null;
    if (credit !== '' && debit !== '') {
      total = Number(credit) - Number(debit);
    }
    this.julyTotalAmount = total;
    return total;
  }

  augustTotal(): number {
    const credit = this.calculateInterest.value.augustCredit;
    const debit = this.calculateInterest.value.augustDebit;
    let total = null;
    if (credit !== '' && debit !== '') {
      total = Number(credit) - Number(debit);
    }
    this.augustTotalAmount = total;
    return total;
  }

  septemberTotal(): number {
    const credit = this.calculateInterest.value.septemberCredit;
    const debit = this.calculateInterest.value.septemberDebit;
    let total = null;
    if (credit !== '' && debit !== '') {
      total = Number(credit) - Number(debit);
    }
    this.septemberTotalAmount = total;
    return total;
  }

  octoberTotal(): number {
    const credit = this.calculateInterest.value.octoberCredit;
    const debit = this.calculateInterest.value.octoberDebit;
    let total = null;
    if (credit !== '' && debit !== '') {
      total = Number(credit) - Number(debit);
    }
    this.octoberTotalAmount = total;
    return total;
  }

  novemberTotal(): number {
    const credit = this.calculateInterest.value.novemberCredit;
    const debit = this.calculateInterest.value.novemberDebit;
    let total = null;
    if (credit !== '' && debit !== '') {
      total = Number(credit) - Number(debit);
    }
    this.novemberTotalAmount = total;
    return total;
  }

  decemberTotal(): number {
    const credit = this.calculateInterest.value.decemberCredit;
    const debit = this.calculateInterest.value.decemberDebit;
    let total = null;
    if (credit !== '' && debit !== '') {
      total = Number(credit) - Number(debit);
    }
    this.decemberTotalAmount = total;
    return total;
  }

  januaryTotal(): number {
    const credit = this.calculateInterest.value.januaryCredit;
    const debit = this.calculateInterest.value.januaryDebit;
    let total = null;
    if (credit !== '' && debit !== '') {
      total = Number(credit) - Number(debit);
    }
    this.januaryTotalAmount = total;
    return total;
  }

  februaryTotal(): number {
    const credit = this.calculateInterest.value.februaryCredit;
    const debit = this.calculateInterest.value.februaryDebit;
    let total = null;
    if (credit !== '' && debit !== '') {
      total = Number(credit) - Number(debit);
    }
    this.februaryTotalAmount = total;
    return total;
  }

  marchTotal(): number {
    const credit = this.calculateInterest.value.marchCredit;
    const debit = this.calculateInterest.value.marchDebit;
    let total = null;
    if (credit !== '' && debit !== '') {
      total = Number(credit) - Number(debit);
    }
    this.marchTotalAmount = total;
    return total;
  }

  totalCreditamount(): number {
    const april = this.calculateInterest.value.aprilCredit;
    const may = this.calculateInterest.value.mayCredit;
    const june = this.calculateInterest.value.juneCredit;
    const july = this.calculateInterest.value.julyCredit;
    const august = this.calculateInterest.value.augustCredit;
    const september = this.calculateInterest.value.septemberCredit;
    const october = this.calculateInterest.value.octoberCredit;
    const november = this.calculateInterest.value.novemberCredit;
    const december = this.calculateInterest.value.decemberCredit;
    const january = this.calculateInterest.value.januaryCredit;
    const february = this.calculateInterest.value.februaryCredit;
    const march = this.calculateInterest.value.marchCredit;

    let total = null;

    if (april !== '' || may !== '' || june !== '' || july !== '' || august !== '' || september !== '' || october !== '' ||
      november !== '' ||
      december !== '' || january !== '' || february !== '' || march !== '') {

      total = (Number(april) + Number(may) + Number(june) + Number(july) + Number(august) + Number(september) + Number(october) +
        Number(november) +
        Number(december) + Number(january) + Number(february) + Number(march));
    }

    this.totalCredit = total;
    return total;
  }

  totalDebitamount(): number {
    const april = this.calculateInterest.value.aprilDebit;
    const may = this.calculateInterest.value.mayDebit;
    const june = this.calculateInterest.value.juneDebit;
    const july = this.calculateInterest.value.julyDebit;
    const august = this.calculateInterest.value.augustDebit;
    const september = this.calculateInterest.value.septemberDebit;
    const october = this.calculateInterest.value.octoberDebit;
    const november = this.calculateInterest.value.novemberDebit;
    const december = this.calculateInterest.value.decemberDebit;
    const january = this.calculateInterest.value.januaryDebit;
    const february = this.calculateInterest.value.februaryDebit;
    const march = this.calculateInterest.value.marchDebit;

    let total = null;

    if (april !== '' || may !== '' || june !== '' || july !== '' || august !== '' || september !== '' || october !== '' ||
      november !== '' ||
      december !== '' || january !== '' || february !== '' || march !== '') {

      total = (Number(april) + Number(may) + Number(june) + Number(july) + Number(august) + Number(september) + Number(october) +
        Number(november) +
        Number(december) + Number(january) + Number(february) + Number(march));
    }

    this.totalDebit = total;
    return total;
  }

  totalAmountValue(): number {
    const april = this.aprilTotalAmount;
    const may = this.mayTotalAmount;
    const june = this.juneTotalAmount;
    const july = this.julyTotalAmount;
    const august = this.augustTotalAmount;
    const september = this.septemberTotalAmount;
    const october = this.octoberTotalAmount;
    const november = this.novemberTotalAmount;
    const december = this.decemberTotalAmount;
    const january = this.januaryTotalAmount;
    const february = this.februaryTotalAmount;
    const march = this.marchTotalAmount;

    let total = null;

    total = (Number(april) + Number(may) + Number(june) + Number(july) + Number(august) + Number(september) + Number(october) +
      Number(november) +
      Number(december) + Number(january) + Number(february) + Number(march));

    this.totalValue = total;
    return total;
  }

  interestApril(): number {
    let interest = null;
    const rate = this.calculateInterest.value.aprilInterestRate;
    if (this.aprilTotalAmount !== null && rate !== '') {
      interest = (Number(this.aprilTotalAmount) * Number(rate)) / 100;
    }

    this.aprilInterest = interest;
    return interest;
  }

  interestMay() {
    let interest = null;
    const rate = this.calculateInterest.value.mayInterestRate;

    if (this.mayTotalAmount !== null && rate !== '') {
      interest = (Number(this.mayTotalAmount) * Number(rate) * 11) / (12 * 100);
    }
    Math.floor(interest);
    this.mayInterest = interest;
    return interest;
  }

  interestJune(): number {
    let interest = null;
    const rate = this.calculateInterest.value.juneInterestRate;

    if (this.juneTotalAmount !== null && rate !== '') {
      interest = (Number(this.juneTotalAmount) * Number(rate) * 10) / (12 * 100);
    }

    this.juneInterest = interest;
    return interest;
  }

  interestJuly(): number {
    let interest = null;
    const rate = this.calculateInterest.value.julyInterestRate;

    if (this.julyTotalAmount !== null && rate !== '') {
      interest = (Number(this.julyTotalAmount) * Number(rate) * 9) / (12 * 100);
    }

    this.julyInterest = interest;
    return interest;
  }

  interestAugust(): number {
    let interest = null;
    const rate = this.calculateInterest.value.augustInterestRate;

    if (this.augustTotalAmount !== null && rate !== '') {
      interest = (Number(this.augustTotalAmount) * Number(rate) * 8) / (12 * 100);
    }

    this.augustInterest = interest;
    return interest;
  }

  interestSeptember(): number {
    let interest = null;
    const rate = this.calculateInterest.value.septemberInterestRate;

    if (this.septemberTotalAmount !== null && rate !== '') {
      interest = (Number(this.septemberTotalAmount) * Number(rate) * 7) / (12 * 100);
    }

    this.septemberInterest = interest;
    return interest;
  }

  interestOctober(): number {
    let interest = null;
    const rate = this.calculateInterest.value.octoberInterestRate;

    if (this.octoberTotalAmount !== null && rate !== '') {
      interest = (Number(this.octoberTotalAmount) * Number(rate) * 6) / (12 * 100);
    }

    this.octoberInterest = interest;
    return interest;
  }

  interestNovember(): number {
    let interest = null;
    const rate = this.calculateInterest.value.novemberInterestRate;

    if (this.novemberTotalAmount !== null && rate !== '') {
      interest = (Number(this.novemberTotalAmount) * Number(rate) * 5) / (12 * 100);
    }

    this.novemberInterest = interest;
    return interest;
  }

  interestDecember(): number {
    let interest = null;
    const rate = this.calculateInterest.value.decemberInterestRate;

    if (this.decemberTotalAmount !== null && rate !== '') {
      interest = (Number(this.decemberTotalAmount) * Number(rate) * 4) / (12 * 100);
    }

    this.decemberInterest = interest;
    return interest;
  }

  interestJanuary(): number {
    let interest = null;
    const rate = this.calculateInterest.value.januaryInterestRate;

    if (this.januaryTotalAmount !== null && rate !== '') {
      interest = (Number(this.januaryTotalAmount) * Number(rate) * 3) / (12 * 100);
    }

    this.januaryInterest = interest;
    return interest;
  }

  interestFebruary(): number {
    let interest = null;
    const rate = this.calculateInterest.value.februaryInterestRate;

    if (this.februaryTotalAmount !== null && rate !== '') {
      interest = (Number(this.februaryTotalAmount) * Number(rate) * 2) / (12 * 100);
    }

    this.februaryInterest = interest;
    return interest;
  }

  interestMarch(): number {
    let interest = null;
    const rate = this.calculateInterest.value.marchInterestRate;

    if (this.marchTotalAmount !== null && rate !== '') {
      interest = (Number(this.marchTotalAmount) * Number(rate) * 1) / (12 * 100);
    }

    this.marchInterest = interest;

    return interest;
  }

  calculate() {

    this.interestApril();
    this.interestAugust();
    this.interestDecember();
    this.interestFebruary();
    this.interestJanuary();
    this.interestJuly();
    this.interestJune();
    this.interestSeptember();
    this.interestOctober();
    this.interestNovember();
    this.interestMarch();
    this.interestMay();
    this.calculateInterest.patchValue({
      aprilInterest: Math.round(this.aprilInterest),
      mayInterest: Math.round(this.mayInterest),
      juneInterest: Math.round(this.juneInterest),
      julyInterest: Math.round(this.julyInterest),
      augustInterest: Math.round(this.augustInterest),
      septemberInterest: Math.round(this.septemberInterest),
      octoberInterest: Math.round(this.octoberInterest),
      novemberInterest: Math.round(this.novemberInterest),
      decemberInterest: Math.round(this.decemberInterest),
      januaryInterest: Math.round(this.januaryInterest),
      februaryInterest: Math.round(this.februaryInterest),
      marchInterest: Math.round(this.marchInterest)
    });
  }

  totalInterest() {
    const total = (
      Number(this.aprilInterest) +
      Number(this.mayInterest) +
      Number(this.juneInterest) +
      Number(this.julyInterest) +
      Number(this.augustInterest) +
      Number(this.septemberInterest) +
      Number(this.octoberInterest) +
      Number(this.novemberInterest) +
      Number(this.decemberInterest) +
      Number(this.januaryInterest) +
      Number(this.februaryInterest) +
      Number(this.marchInterest)

    );

    this.totalInteresValue = Math.round(total);

    return Math.round(total);
  }

  closingBalanceAmount() {
    let amount = 0;

    if (this.totalValue !== null && this.totalInteresValue !== null) {
      amount = Number(this.totalValue) + Number(this.totalInteresValue);
    }


    return amount;
  }
}
