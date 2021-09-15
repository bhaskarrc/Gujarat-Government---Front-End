import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { GroupInsuranceDirective } from 'src/app/common/directive/group-insurance-directive';
import { Statement } from 'src/app/model/group-insurance';

@Component({
  selector: 'app-gi-statement-one',
  templateUrl: './gi-statement-one.component.html',
  styleUrls: ['./gi-statement-one.component.css']
})
export class GiStatementOneComponent implements OnInit {

  directiveObject = new GroupInsuranceDirective(this.dialog);


  // Table Data for statement one table
  statementOne: Statement[] = [
    { year: '1982-1983', aprData: '52244', mayData: '52625', juneData: '53007' },
    { year: '1983-1984', aprData: '49046', mayData: '49406', juneData: '49766' },
    { year: '1984-1985', aprData: '46161', mayData: '46502', juneData: '46843' },
    { year: '1985-1986', aprData: '43537', mayData: '43860', juneData: '44184' },
    { year: '1986-1987', aprData: '41203', mayData: '41511', juneData: '41819' },
    { year: '1987-1988', aprData: '39103', mayData: '39397', juneData: '39691' },
    { year: '1988-1989', aprData: '37246', mayData: '37528', juneData: '37810' },
    { year: '1989-1990', aprData: '35546', mayData: '35816', juneData: '36087' },
    { year: '1990-1991', aprData: '34051', mayData: '34312', juneData: '34573' },
    { year: '1991-1992', aprData: '32046', mayData: '32297', juneData: '32540' },
    { year: '1992-1993', aprData: '30277', mayData: '30513', juneData: '30749' },
    { year: '1993-1994', aprData: '28692', mayData: '28917', juneData: '29142' },
    { year: '1994-1995', aprData: '26356', mayData: '26565', juneData: '26775' },
    { year: '1995-1996', aprData: '24828', mayData: '24787', juneData: '24674' },
    { year: '1996-1997', aprData: '22431', mayData: '22614', juneData: '22798' },
    { year: '1997-1998', aprData: '20792', mayData: '20965', juneData: '21138' },
    { year: '1998-1999', aprData: '19335', mayData: '19498', juneData: '19662' },
    { year: '1999-2000', aprData: '18050', mayData: '18204', juneData: '18359' },
    { year: '2000-2001', aprData: '16902', mayData: '17049', juneData: '17196' },
    { year: '2001-2002', aprData: '15867', mayData: '16007', juneData: '16147' },
    { year: '2002-2003', aprData: '14971', mayData: '15108', juneData: '15243' },
    { year: '2003-2004', aprData: '12461', mayData: '12579', juneData: '12696' },
    { year: '2004-2005', aprData: '11902', mayData: '11201', juneData: '11310' },
    { year: '2005-2006', aprData: '9820', mayData: '9920', juneData: '10020' },
    { year: '2006-2007', aprData: '8651', mayData: '8743', juneData: '8835' },
    { year: '2007-2008', aprData: '7576', mayData: '7661', juneData: '7746' },
    { year: '2008-2009', aprData: '6582', mayData: '6660', juneData: '6739' },
    { year: '2009-2010', aprData: '5658', mayData: '5730', juneData: '5803' },
    { year: '2010-2011', aprData: '4807', mayData: '4874', juneData: '4941' },
    { year: '2011-2012', aprData: '4019', mayData: '4081', juneData: '4142' },
    { year: '2012-2013', aprData: '3294', mayData: '3351', juneData: '3408' },
    { year: '2013-2014', aprData: '2629', mayData: '2682', juneData: '2734' },
    { year: '2014-2015', aprData: '2019', mayData: '2068', juneData: '2116' },
    { year: '2015-2016', aprData: '1460', mayData: '1505', juneData: '1549' },
    { year: '2016-2017', aprData: '947', mayData: '988', juneData: '1029' },
    { year: '2017-2018', aprData: '473', mayData: '512', juneData: '550' },
    { year: '2018-2019', aprData: '337', mayData: '412', juneData: '502' },
    { year: '2019-2020', aprData: '96', mayData: '102', juneData: '127' },
  ];

  todayDate = new Date();

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

}
