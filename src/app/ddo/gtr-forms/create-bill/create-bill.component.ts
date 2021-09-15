import { Component, OnInit } from '@angular/core';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { CreatNewBillComponent } from '../../creat-new-bill/creat-new-bill.component';
import { HeadDataDetails } from 'src/app/model/ddo-forms';

@Component({
  selector: 'app-create-bill',
  templateUrl: './create-bill.component.html',
  styleUrls: ['./create-bill.component.css']
})
export class CreateBillComponent implements OnInit {
  // variables
  createBillGtr44 = 'List of Head Structure in which Grant received';
  createBill = 'List Of Head Structure';
  home = 'Home';
  ddo = 'DDO';

  // table data start
  elementData: HeadDataDetails[] = [
    {
      fundType: 'Consolidated',
      voted: 'Voted',
      stateCss: 'State',
      bSubHeadSt: '017:2054:00:095:01:00:C2 ',
      subHeadDes: 'Treasuries',
      expenditure: 'Standing Charges',
      itemName: '-',
      schemeNo: '000000',
      grantRecievedTillDate: '1000',
      GrantUsedBills: '0',
      Balance: '1000',
      GrantUsedSaved: '2500',
      MoreGrant: '1500'
    },
    {
      fundType: 'Consolidated',
      voted: 'Voted',
      stateCss: 'State',
      bSubHeadSt: '017:2054:00:095:01:00:C2 ',
      subHeadDes: 'Treasuries',
      expenditure: 'Standing Charges',
      itemName: '-',
      schemeNo: '000000',
      grantRecievedTillDate: '1000',
      GrantUsedBills: '100',
      Balance: '900',
      GrantUsedSaved: '2400',
      MoreGrant: '1500'
    },
    {
      fundType: 'Consolidated',
      voted: 'Voted',
      stateCss: 'State',
      bSubHeadSt: '017:2054:00:095:01:00:C2 ',
      subHeadDes: 'Treasuries',
      expenditure: 'Standing Charges',
      itemName: '-',
      schemeNo: '000000',
      grantRecievedTillDate: '1000',
      GrantUsedBills: '900',
      Balance: '100',
      GrantUsedSaved: '1600',
      MoreGrant: '1500'
    },
    {
      fundType: 'Consolidated',
      voted: 'Voted',
      stateCss: 'State',
      bSubHeadSt: '017:2054:00:095:01:00:C2 ',
      subHeadDes: 'Treasuries',
      expenditure: 'Standing Charges',
      itemName: '-',
      schemeNo: '000000',
      grantRecievedTillDate: '3000',
      GrantUsedBills: '1700',
      Balance: '1300',
      GrantUsedSaved: '800',
      MoreGrant: '-'
    }
  ];
  dataSource = new MatTableDataSource(this.elementData);
  displayedColumns: string[] = [
    'fundType',
    'voted',
    'stateCss',
    'bSubHeadSt',
    'subHeadDes',
    'expenditure',
    'itemName',
    'schemeNo',
    'grantRecievedTillDate',
    'GrantUsedBills',
    'Balance',
    'GrantUsedSaved',
    'MoreGrant'
  ];
  // table data end

  // constructor
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }


  // open dilaog box when clicked on create bill button
  openDialogGtr44(): void {
    const dialogRef = this.dialog.open(CreatNewBillComponent, {
      width: '1500px'
    });

  }


}
