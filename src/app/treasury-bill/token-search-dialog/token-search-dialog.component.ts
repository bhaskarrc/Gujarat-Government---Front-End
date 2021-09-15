import { Component, OnInit, ElementRef, Inject } from '@angular/core';
import { TokenStatus, ListValue } from 'src/app/model/treasury-bill';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { DialogData } from 'src/app/model/standing-charge';
const ELEMENT_DATAN: TokenStatus[] = [
  { tokenstatusdata: 'Available', totakeno: '8563' },
  { tokenstatusdata: 'Used', totakeno: '8569' },
  { tokenstatusdata: 'Lost', totakeno: ' 4795' },
];
@Component({
  selector: 'app-token-search-dialog',
  templateUrl: './token-search-dialog.component.html',
  styleUrls: ['./token-search-dialog.component.css']
})
export class TokenSearchDialogComponent implements OnInit {


  constructor(private elem: ElementRef,
    private toastr: ToastrService,
    private router: Router,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<TokenSearchDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private el: ElementRef,
  ) { }
  isSearch: Boolean = false;

  displayedColumns: string[] = ['srno', 'tokenstatusdata', 'totakeno'];

  dataSource = ELEMENT_DATAN;

  tokensearchForm: FormGroup;

  tokenstatusCtrl: FormControl = new FormControl();

  tokenstatus_list: ListValue[] = [
    { value: '1', viewValue: 'ALL' },
    { value: '2', viewValue: 'Available' },
    { value: '3', viewValue: 'Used' },
    { value: '4', viewValue: 'Lost' }
  ];


  tokensearchFormData() {
    this.tokensearchForm = this.fb.group({
      tokenstatus: [''],
      fromtokennumber: [''],
      totokennumber: ['']

    });
  }
  ngOnInit() {
    this.tokensearchFormData();
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  search() {
    this.isSearch = true;
  }

}
