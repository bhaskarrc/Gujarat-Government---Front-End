import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstituteMasterScreenComponent } from './institute-master-screen.component';

describe('InstituteMasterScreenComponent', () => {
  let component: InstituteMasterScreenComponent;
  let fixture: ComponentFixture<InstituteMasterScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstituteMasterScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstituteMasterScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
