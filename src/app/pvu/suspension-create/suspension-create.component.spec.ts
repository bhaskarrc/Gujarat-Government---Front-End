import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuspensionCreateComponent } from './suspension-create.component';

describe('SuspensionCreateComponent', () => {
  let component: SuspensionCreateComponent;
  let fixture: ComponentFixture<SuspensionCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuspensionCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuspensionCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
