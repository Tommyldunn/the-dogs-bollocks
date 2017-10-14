import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteMediaComponent } from './site-media.component';

describe('SiteMediaComponent', () => {
  let component: SiteMediaComponent;
  let fixture: ComponentFixture<SiteMediaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteMediaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
