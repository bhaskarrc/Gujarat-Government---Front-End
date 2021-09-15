import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocietyMasterComponent } from './society-master.component';

describe('SocietyMasterComponent', () => {
  let component: SocietyMasterComponent;
  let fixture: ComponentFixture<SocietyMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocietyMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocietyMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
