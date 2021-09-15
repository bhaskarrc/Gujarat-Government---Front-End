import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GrantSurrenderProcessComponent } from './grant-surrender-process.component';

describe('GrantSurrenderProcessComponent', () => {
  let component: GrantSurrenderProcessComponent;
  let fixture: ComponentFixture<GrantSurrenderProcessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrantSurrenderProcessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrantSurrenderProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
