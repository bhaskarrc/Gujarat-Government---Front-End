import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillTypewiseObjectclassMappingComponent } from './bill-typewise-objectclass-mapping.component';

describe('BillTypewiseObjectclassMappingComponent', () => {
    let component: BillTypewiseObjectclassMappingComponent;
    let fixture: ComponentFixture<BillTypewiseObjectclassMappingComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [BillTypewiseObjectclassMappingComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BillTypewiseObjectclassMappingComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
