import { ComponentFixture, TestBed, fakeAsync, getTestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RegisterComponent } from './register/register.component';
import { routes } from './app-routing.module';
import { LoginComponent } from './Login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppRoutingModule, HttpClientTestingModule, FormsModule, ReactiveFormsModule, RouterTestingModule.withRoutes(routes)],
      declarations: [AppComponent]
    });
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create the app', () => {
    expect(component).toBeTruthy();
  });
  it(`should have as title 'UI-task'`, () => {
    expect(component.title).toEqual('UI-task');
  });
  it('tobe and toequal test case', () => {
    var a = 5;
    var b = "hii";
    expect(a).toBe(5);
  });
  it('check the matchers', () => {
    expect('foo').toBeInstanceOf(String);
  });
  it('should contain route for register', () => {
    const expeectedRoute = { path: 'register', component: RegisterComponent };
    expect(routes).toContain(expeectedRoute);
  });
  it('should contain route for login', () => {
    const expeectedRoute = { path: 'login', component: LoginComponent };
    expect(routes).toContain(expeectedRoute);
  });
  it('should contain route for profile', () => {
    const expeectedRoute = { path: 'profile', component: ProfileComponent };
    expect(routes).toContain(expeectedRoute);
  });
  it('should contain route for profile', () => {
    const expeectedRoute = { path: '', component: LoginComponent };
    expect(routes).toContain(expeectedRoute);
  });
  it('should fail', () => {
    expect(false).toBe(false);
  });
  // beforeEach(() => {
  //   TestBed.configureTestingModule({ providers: [FormService] });
  // });
  // it('should use ValueService', () => {
  //   service = TestBed.inject(FormService);
  //   expect(service.getValue()).toBe('real value');
  // });
  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('.content span')?.textContent).toContain('UI-task app is running!');
  // });
  // it('should be able to navigate to `/`',fakeAsync(() => {
  //   const injector = getTestBed();
  //   const router = injector.get(Router);
  //   const fixture = TestBed.createComponent(LoginComponent);
  //   fixture.detectChanges();
  //   // initial navigation
  //   router.navigate(['/login']).then(() => {
  //     expect(router.url).toEqual('/login');
  //   });
  // }));
});
