import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferEntryListComponent } from './transfer-entry-list.component';

describe('TransferEntryListComponent', () => {
  let component: TransferEntryListComponent;
  let fixture: ComponentFixture<TransferEntryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferEntryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferEntryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
