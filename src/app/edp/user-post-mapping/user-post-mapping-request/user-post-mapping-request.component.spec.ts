import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPostMappingRequestComponent } from './user-post-mapping-request.component';

describe('UserPostMappingRequestComponent', () => {
    let component: UserPostMappingRequestComponent;
    let fixture: ComponentFixture<UserPostMappingRequestComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [UserPostMappingRequestComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(UserPostMappingRequestComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
