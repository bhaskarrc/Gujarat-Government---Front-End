import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalResetPasswordComponent } from './global-reset-password.component';

describe('GlobalResetPasswordComponent', () => {
    let component: GlobalResetPasswordComponent;
    let fixture: ComponentFixture<GlobalResetPasswordComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [GlobalResetPasswordComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(GlobalResetPasswordComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
