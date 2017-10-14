import { TestBed, async } from '@angular/core/testing';
import { Router, ActivatedRoute, NavigationEnd, RoutesRecognized, Event } from '@angular/router';
import { Route } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';


import { CoreModule } from './core/core.module';
import { SiteRootComponent } from './site-root.component';

describe('SiteRootComponent', () => {

  const config: Route[] = [
    { path: 'home', component: SiteRootComponent }
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CoreModule, RouterTestingModule.withRoutes(config)],
      declarations: [
        SiteRootComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(SiteRootComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
