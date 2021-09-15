import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPostMappingDtailComponent } from './user-post-mapping-detail.component';

describe('UserPostMappingDtailComponent', () => {
    let component: UserPostMappingDtailComponent;
    let fixture: ComponentFixture<UserPostMappingDtailComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [UserPostMappingDtailComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(UserPostMappingDtailComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
