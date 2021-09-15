import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from 'src/app/model/standing-charge';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
import { Section, SerialForm } from 'src/app/model/ddo-forms';
import { ListValue } from 'src/app/model/common-grant';


let billoption85 = false;
let billoption35 = false;

/** CreateBillDialogComponent start */
@Component({

  selector: 'app-create-bill-dialog',
  templateUrl: 'create-bill-dialog.html'
})

export class CreateBillDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<CreateBillDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private router: Router
  ) { }

  // variables
  localBillOption35 = billoption35;
  localBillOption85 = billoption85;

  billType85ListList: SerialForm[] = [
    { srNo: '1', form: 'L.T.C.' },
    { srNo: '2', form: 'Normal Bill' },
    { srNo: '3', form: 'Fix Pay' },
    { srNo: '4', form: 'Outer Bill' },
  ];

  billType35ListList: SerialForm[] = [
    { srNo: '1', form: 'H.B.A. / M.C.A.' },
    { srNo: '2', form: 'Others' },
  ];

  billType85Column: string[] = [
    'form'
  ];

  billType35Column: string[] = [
    'form'
  ];

  billType85DataSource = new MatTableDataSource(this.billType85ListList);
  billType35DataSource = new MatTableDataSource(this.billType35ListList);

  // go to page 35
  goToPage35(event) {
    this.dialogRef.close();
    if (event === 'L.T.C.') {
      this.router.navigate(['./ddo/gtr-35-ltc']);
    } else if (event === 'Normal Bill') {
      this.router.navigate(['./ddo/gtr-35-normal']);
    } else if (event === 'Fix Pay') {
      this.router.navigate(['./ddo/gtr-35-tabill-fixpay']);
    } else if (event === 'Outer Bill') {
      this.router.navigate(['./ddo/gtr-35-tabill-outer']);
    }
  }

  // go to page 85
  goToPage85(event) {
    this.dialogRef.close();
    if (event === 'H.B.A. / M.C.A.') {
      this.router.navigate(['./ddo/gtr-85']);
    } else if (event === 'Others') {
      this.router.navigate(['./ddo/gtr-85-other']);
    }
  }

  // closes dialog on click of close button
  onNoClick(): void {
    this.dialogRef.close();
  }


}
/** CreateBillDialogComponent end */

/** CreatNewBillComponent start */
@Component({
  selector: 'app-creat-new-bill',
  templateUrl: './creat-new-bill.component.html',
  styleUrls: ['./creat-new-bill.component.css']
})
export class CreatNewBillComponent implements OnInit {
  // Date
  todayDate = Date.now();

  // Form Group
  creatnewbillform: FormGroup;

  // variable
  selectedBillName: string;

  // bill type
  createEmpBillColumn: string[] = [
    'srNo', 'form'
  ];
  createEmpBillList: SerialForm[] = [
    { srNo: '1', form: 'Advance Bill (GTR  85)' },
    { srNo: '2', form: 'Bill for Withdrawal of Final/Dav/Other GPF (Class IV) (GTR - 76)' },
    { srNo: '3', form: 'Bill for Withdrawal of Final/Dav/Other GPF (Other than Class IV) (GTR -75)' },
    { srNo: '4', form: 'G I S Insu & Saving Fund on Ones Demise (GTR – 78)' },
    { srNo: '5', form: 'G I S Saving fund on Ones Retirement & Resi (GTR – 79)' },
    { srNo: '6', form: 'Group Insu Scheme (GTR -77)' },
  ];
  createEmpBillDataSource = new MatTableDataSource(this.createEmpBillList);
  // bill type end


  // personal claim
  createPersonalBillColumn: string[] = [
    'srNo', 'form'
  ];
  createPersonalBillList: SerialForm[] = [
    { srNo: '1', form: 'Pay Bill (GTR -30)' },
    { srNo: '2', form: 'Scholarship/Stipend (GTR -63)' },
    { srNo: '3', form: 'Pay Bill Arrear Bill (GTR 110)' },
    { srNo: '4', form: 'Medical Bill (GTR -29)' },
    { srNo: '5', form: 'T A Bill (GTR – 35)' },
  ];
  createPersonalBillDataSource = new MatTableDataSource(this.createPersonalBillList);
  // personal claim end


  // refund bill
  createRefundBillColumn: string[] = [
    'srNo', 'form'
  ];
  createRefundBillList: SerialForm[] = [
    { srNo: '1', form: 'Refund of Deposit (GTR – 81)' },
    { srNo: '2', form: 'Refund of Lapsed Deposit (GTR -83)' },
    { srNo: '3', form: 'Refund of Revenue (GTR 61)' },
    { srNo: '4', form: 'Court Fee Refund (CFR)' },
  ];
  createRefundBillDataSource = new MatTableDataSource(this.createRefundBillList);
  // refund bill end


  // other bill start
  createOtherBillColumn: string[] = [
    'srNo', 'form'
  ];
  createOtherBillList: SerialForm[] = [
    { srNo: '1', form: 'Abstract Bill for the Contingent Charges (GTR - 45)' },
    { srNo: '2', form: 'Detailed Bill of Contingent Charges of (GTR - 46)' },
    { srNo: '3', form: 'Services Postage Stamp (GTR – 48)' },
    { srNo: '4', form: 'Simple Receipt for Online Bill (SR)' },
    { srNo: '5', form: 'Detailed bill for Contingent Charges (GTR – 44)' },
    { srNo: '6', form: 'Grant in Aid Local Bodies (GTR – 62B)' },
    { srNo: '7', form: 'Grant in Aid Others (GTR – 62C)' },
    { srNo: '8', form: 'Grant in Aid Panchayat (GTR – 62A)' },
  ];
  createOtherBillDataSource = new MatTableDataSource(this.createOtherBillList);
  // other bill end


  // constructor
  constructor(private fb: FormBuilder, public dialog: MatDialog, private router: Router) { }

  ngOnInit() {
    this.cretnewbillformData();
  }

  // go to page
  goToPage(event) {

    if (event === 'Bill for Withdrawal of Final/Dav/Other GPF (Class IV) (GTR - 76)') {
      this.router.navigate(['./ddo/gtr-76']);
    } else if (event === 'Bill for Withdrawal of Final/Dav/Other GPF (Other than Class IV) (GTR -75)') {
      this.router.navigate(['./ddo/gtr-75']);
    } else if (event === 'G I S Insu & Saving Fund on Ones Demise (GTR – 78)') {
      this.router.navigate(['./ddo/gtr-78']);
    } else if (event === 'G I S Saving fund on Ones Retirement & Resi (GTR – 79)') {
      this.router.navigate(['./ddo/gtr-79']);
    } else if (event === 'Group Insu Scheme (GTR -77)') {
      this.router.navigate(['./ddo/gtr-77']);
    } else if (event === 'Pay Bill (GTR -30)') {
      this.router.navigate(['./ddo/gtr-30']);
    } else if (event === 'Scholarship/Stipend (GTR -63)') {
      this.router.navigate(['./ddo/gtr-63']);
    } else if (event === 'Pay Bill Arrear Bill (GTR 110)') {
      this.router.navigate(['./ddo/gtr-110']);
    } else if (event === 'Medical Bill (GTR -29)') {
      this.router.navigate(['./ddo/gtr-29']);
    } else if (event === 'Refund of Deposit (GTR – 81)') {
      this.router.navigate(['./ddo/gtr-81']);
    } else if (event === 'Refund of Lapsed Deposit (GTR -83)') {
      this.router.navigate(['./ddo/gtr-83']);
    } else if (event === 'Refund of Revenue (GTR 61)') {
      this.router.navigate(['./ddo/gtr-61']);
    } else if (event === 'Court Fee Refund (CFR)') {
      this.router.navigate(['./ddo/gtr-cfr']);
    } else if (event === 'Abstract Bill for the Contingent Charges (GTR - 45)') {
      this.router.navigate(['./ddo/gtr-45']);
    } else if (event === 'Detailed Bill of Contingent Charges of (GTR - 46)') {
      this.router.navigate(['./ddo/saved-bill-46']);
    } else if (event === 'Services Postage Stamp (GTR – 48)') {
      this.router.navigate(['./ddo/gtr-48']);
    } else if (event === 'Simple Receipt for Online Bill (SR)') {
      this.router.navigate(['./ddo/sr']);
    } else if (event === 'Detailed bill for Contingent Charges (GTR – 44)') {
      this.router.navigate(['./ddo/gtr-44']);
    } else if (event === 'Grant in Aid Local Bodies (GTR – 62B)') {
      this.router.navigate(['./ddo/gtr-62-b']);
    } else if (event === 'Grant in Aid Others (GTR – 62C)') {
      this.router.navigate(['./ddo/gtr-62-c']);
    } else if (event === 'Grant in Aid Panchayat (GTR – 62A)') {
      this.router.navigate(['./ddo/gtr-62-a']);
    }
  }

  // create new bill
  cretnewbillformData() {
    this.creatnewbillform = this.fb.group({

    });
  }

  // open dialog
  openDialog(event) {
    if (event === 'Advance Bill (GTR  85)') {
      billoption85 = true;
      billoption35 = false;
    } else if (event === 'T A Bill (GTR – 35)') {
      billoption85 = false;
      billoption35 = true;
    } else {
      billoption85 = false;
      billoption35 = false;
    }

    const dialogRef = this.dialog.open(CreateBillDialogComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }

}

/** dialog box for gtr-85 and gtr-35 */
/** CreatNewBillComponent end */
