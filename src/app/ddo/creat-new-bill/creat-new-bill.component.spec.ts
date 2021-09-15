import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatNewBillComponent } from './creat-new-bill.component';

describe('CreatNewBillComponent', () => {
  let component: CreatNewBillComponent;
  let fixture: ComponentFixture<CreatNewBillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatNewBillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatNewBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
