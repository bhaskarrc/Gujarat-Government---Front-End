import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRoleMappingToComponent } from './user-role-mapping-to.component';

describe('UserRoleMappingToComponent', () => {
    let component: UserRoleMappingToComponent;
    let fixture: ComponentFixture<UserRoleMappingToComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [UserRoleMappingToComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(UserRoleMappingToComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
