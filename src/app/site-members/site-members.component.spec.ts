import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteMembersComponent } from './site-members.component';

describe('SiteMembersComponent', () => {
  let component: SiteMembersComponent;
  let fixture: ComponentFixture<SiteMembersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteMembersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
