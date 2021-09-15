import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { lfMessage } from 'src/app/common/error-message/common-message.constants';
import { MatTableDataSource, MatPaginator, MatDialog } from '@angular/material';
import { DatePipe } from '@angular/common';
import { WorkflowDetailsLfComponent } from '../../workflow-details-lf/workflow-details-lf.component';
import { StampRegisterListing } from 'src/app/model/local-fund';
import { LocalFundDirective } from 'src/app/common/directive/local-fund-directive';

@Component({
  selector: 'app-stamp-register-entry',
  templateUrl: './stamp-register-entry.component.html',
  styleUrls: ['./stamp-register-entry.component.css']
})
export class StampRegisterEntryComponent implements OnInit {
  id = 1;
  errorMessages = lfMessage;
  stampRegisterEntry: FormGroup;
  directiveObject = new LocalFundDirective(this.dialog);
  elementData: StampRegisterListing[] = [
    {
      date: '1-May-2019', openingBalance: '1000.00', amtOfReceivedTickets: '10000.00', totalAmtOfTickets: '11000.00',
      utilizationAmountOfTickets: '0.00', closingBalance: '11000.00', remarks: ''
    },
    {
      date: '8-May-2019', openingBalance: '500.00', amtOfReceivedTickets: '10000.00', totalAmtOfTickets: '11000.00',
      utilizationAmountOfTickets: '200.00', closingBalance: '10300.00', remarks: ''
    },
    {
      date: '10-May-2019', openingBalance: '10300.00', amtOfReceivedTickets: '0.00', totalAmtOfTickets: '10300.00',
      utilizationAmountOfTickets: '500.00', closingBalance: '9800.00', remarks: ''
    },
    {
      date: '15-May-2019', openingBalance: '9800.00', amtOfReceivedTickets: '0.00', totalAmtOfTickets: '9800.00',
      utilizationAmountOfTickets: '800.00', closingBalance: '9000.00', remarks: ''
    },
  ];
  dataSource = new MatTableDataSource<StampRegisterListing>(this.elementData);
  displayedColumns: string[] = ['position', 'date', 'openingBalance', 'amtOfReceivedTickets', 'totalAmtOfTickets',
    'utilizationAmountOfTickets', 'closingBalance', 'remarks', 'action'];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private fb: FormBuilder, private datePipe: DatePipe, public dialog: MatDialog) { }

  ngOnInit() {
    this.stampRegisterEntry = this.fb.group({
      date: [''],
      openingBalance: [''],
      amtOfReceivedTickets: [''],
      totalAmtOfTickets: [''],
      utilizationAmountOfTickets: [''],
      closingBalance: [''],
      remarks: ['']
    });
    this.dataSource.paginator = this.paginator;

  }

  // on click on add button
  onAdd() {
    this.dataSource.data.push({
      amtOfReceivedTickets: this.stampRegisterEntry.get('amtOfReceivedTickets').value,
      closingBalance: this.stampRegisterEntry.get('closingBalance').value,
      date: this.datePipe.transform(this.stampRegisterEntry.get('date').value, 'dd-MMM-yyyy'),
      openingBalance: this.stampRegisterEntry.get('openingBalance').value,
      remarks: this.stampRegisterEntry.get('remarks').value,
      totalAmtOfTickets: this.stampRegisterEntry.get('totalAmtOfTickets').value,
      utilizationAmountOfTickets: this.stampRegisterEntry.get('utilizationAmountOfTickets').value
    });
    this.dataSource.data = this.dataSource.data;

    // increment Id No
    this.id++;
  }

}
