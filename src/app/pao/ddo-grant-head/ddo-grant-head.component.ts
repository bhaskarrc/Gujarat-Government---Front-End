
import { SelectionModel } from '@angular/cdk/collections';
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
]

@Component({
    selector: 'app-ddo-grant-head',
    templateUrl: './ddo-grant-head.component.html',
    styleUrls: ['./ddo-grant-head.component.css']
})
export class DdoGrantHeadComponent {

    ddoDisplayedColumns: string[] = ['fundType',
        'voted',
        'stateCss',
        'bSubHeadSt',
        'subHeadDes',
        'expenditure',
        'itemName',
        'schemeNo'];
    ddoDataSource = new MatTableDataSource<any>(ELEMENT_DATA2);

    constructor(public dialogRef: MatDialogRef<DdoGrantHeadComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData,) { }

    selection = new SelectionModel<any>(true, []);


    isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.ddoDataSource.data.length;
        return numSelected === numRows;
    }

    // onNoClick(): void {
    //   this.dialogRef.close();
    // }
    selectBudgetHead(data) {

        // console.log("abc in selectrBudgetHead");

        // this.billinwardform.patchValue({
        //   // class: 'Class I',
        //   demand: '1',
        //   majorHead: '1',
        //   subMajorHead: '1',
        //   minorHead: '1',
        //   subHead: '1',
        //   detailHead: '1',
        //   objectClass: '2',
        //   headChargeable: '2054:00:096:01:00',
        //   schemeNo: '000000'
        // });
        this.dialogRef.close(data);
    }
    masterToggle() {
        this.isAllSelected() ?
            this.selection.clear() :
            this.ddoDataSource.data.forEach(row => this.selection.select(row));
    }

    checkboxLabel(row?: any): string {
        if (!row) {
            return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
        }
        return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
    }
    goToDashboard(): void {
        this.dialogRef.close('no');
    }
}