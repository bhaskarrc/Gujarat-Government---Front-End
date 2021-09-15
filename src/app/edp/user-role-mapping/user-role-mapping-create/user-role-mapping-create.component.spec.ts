import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRoleMappingCreateComponent } from './user-role-mapping-create.component';

describe('UserRollMappingCreateComponent', () => {
    let component: UserRoleMappingCreateComponent;
    let fixture: ComponentFixture<UserRoleMappingCreateComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [UserRoleMappingCreateComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(UserRoleMappingCreateComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
