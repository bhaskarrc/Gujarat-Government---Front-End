import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DdoOfficesUpdationComponent } from './ddo-offices-updation.component';

describe('DdoOfficesUpdationComponent', () => {
    let component: DdoOfficesUpdationComponent;
    let fixture: ComponentFixture<DdoOfficesUpdationComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DdoOfficesUpdationComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DdoOfficesUpdationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
