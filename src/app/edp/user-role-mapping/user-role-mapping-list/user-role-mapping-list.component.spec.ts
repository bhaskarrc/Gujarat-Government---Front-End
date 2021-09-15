import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRoleMappingListComponent } from './user-role-mapping-list.component';

describe('UserRoleMappingListComponent', () => {
    let component: UserRoleMappingListComponent;
    let fixture: ComponentFixture<UserRoleMappingListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [UserRoleMappingListComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(UserRoleMappingListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
