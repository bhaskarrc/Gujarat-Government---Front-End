import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DdoOfficeHodComponent } from './ddo-office-hod.component';

describe('DdoOfficeHodComponent', () => {
    let component: DdoOfficeHodComponent;
    let fixture: ComponentFixture<DdoOfficeHodComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DdoOfficeHodComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DdoOfficeHodComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
