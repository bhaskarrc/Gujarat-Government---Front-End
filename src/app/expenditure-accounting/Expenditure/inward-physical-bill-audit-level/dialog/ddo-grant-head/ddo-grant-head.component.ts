import { Inject, Component } from '@angular/core';
import { MatTableDataSource, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogData } from 'src/app/model/standing-charge';




const ELEMENT_DATA2 = [
    {
        fundType: 'Consolidated',
        voted: 'Voted',
        stateCss: 'State',
        bSubHeadSt: '017:2054:00:097:01:00:C2',
        subHeadDes: 'Treasuries',
        expenditure: 'Standing Charges',
        itemName: '-',
        schemeNo: '000000'
    },
    {
        fundType: 'Consolidated',
        voted: 'Voted',
        stateCss: 'State',
        bSubHeadSt: '017:2054:00:096:01:00:C5  ',
        subHeadDes: 'Treasuries',
        expenditure: 'New Item',
        itemName: 'Purchase of new car for Director of Agriculture',
        schemeNo: '000000'
    }
];

@Component({
    selector: 'app-ddo-grant-head',
    templateUrl: './ddo-grant-head.component.html',
    styleUrls: ['./ddo-grant-head.component.css']
})
export class DdoGrantHeadPaoComponent {

    ddoDisplayedColumns: string[] = ['fundType',
        'voted',
        'stateCss',
        'bSubHeadSt',
        'subHeadDes',
        'expenditure',
        'itemName',
        'schemeNo'];
    ddoDataSource = new MatTableDataSource<any>(ELEMENT_DATA2);

    constructor(public dialogRef: MatDialogRef<DdoGrantHeadPaoComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

    selectBudgetHead(data) {

        this.dialogRef.close(data);
    }

    goToDashboard(): void {
        this.dialogRef.close('no');
    }
}
