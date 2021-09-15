import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPostMappingToComponent } from './user-post-mapping-to.component';

describe('UserPostMappingToComponent', () => {
    let component: UserPostMappingToComponent;
    let fixture: ComponentFixture<UserPostMappingToComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [UserPostMappingToComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(UserPostMappingToComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
