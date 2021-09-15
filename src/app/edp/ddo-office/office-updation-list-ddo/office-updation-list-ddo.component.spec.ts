import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeUpdationListDdoComponent } from './office-updation-list-ddo.component';

describe('OfficeUpdationListDdoComponent', () => {
    let component: OfficeUpdationListDdoComponent;
    let fixture: ComponentFixture<OfficeUpdationListDdoComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [OfficeUpdationListDdoComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(OfficeUpdationListDdoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
