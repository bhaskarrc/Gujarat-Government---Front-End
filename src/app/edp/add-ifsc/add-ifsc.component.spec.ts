import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddIfscComponent } from './add-ifsc.component';

describe('AddIfscComponent', () => {
    let component: AddIfscComponent;
    let fixture: ComponentFixture<AddIfscComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AddIfscComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AddIfscComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
