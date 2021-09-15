import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardexMappingNewComponent } from './cardex-mapping-new.component';

describe('CardexMappingNewComponent', () => {
  let component: CardexMappingNewComponent;
  let fixture: ComponentFixture<CardexMappingNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardexMappingNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardexMappingNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
