import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeUpdationListEDPComponent } from './office-updation-list-edp.component';

describe('OfficeUpdationListEDPComponent', () => {
    let component: OfficeUpdationListEDPComponent;
    let fixture: ComponentFixture<OfficeUpdationListEDPComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [OfficeUpdationListEDPComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(OfficeUpdationListEDPComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
