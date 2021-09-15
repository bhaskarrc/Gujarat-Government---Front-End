import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DdoOfficesToComponent } from './ddo-offices-to.component';

describe('DdoOfficesToComponent', () => {
    let component: DdoOfficesToComponent;
    let fixture: ComponentFixture<DdoOfficesToComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DdoOfficesToComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DdoOfficesToComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
