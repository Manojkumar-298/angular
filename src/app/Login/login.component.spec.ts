import { ComponentFixture, TestBed, async, fakeAsync, inject, tick } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { AppRoutingModule, routes } from '../app-routing.module';
import { Router } from '@angular/router';
import { By } from '@angular/platform-browser';
import { Location } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from '../register/register.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { AuthService } from '../services/authentication.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let router: Routes

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppRoutingModule, HttpClientTestingModule, FormsModule],
      declarations: [LoginComponent, RegisterComponent],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
      ]
    });
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('querySelector', () => {

    it('should get the element by class', () => {
      const element = fixture.debugElement.nativeElement.querySelector('#username');
      expect(element).toBeTruthy();
    });
    it('should get the element by class', () => {
      const element = fixture.debugElement.nativeElement.querySelector('#password');
      expect(element).toBeTruthy();
    });
    it('should display the text present in p tag', () => {
      const element = fixture.debugElement.nativeElement.querySelector('#heading');
      expect(element.innerText.trim()).toEqual('Login');
    });
    it('should display the text present in p tag', () => {
      const element = fixture.debugElement.nativeElement.querySelector('#heading');
      expect(element.innerText.trim()).not.toEqual('kkkk');
    });
    it('should contain equal no.of input element', () => {
      const formelement = fixture.debugElement.nativeElement.querySelector('#form');
      const inputelement = formelement.querySelectorAll('input');
      expect(inputelement.length).toEqual(2);
    });
  });
  describe('validations', () => {
    it('should check the input value of username is valid', () => {
      const element = fixture.nativeElement.querySelector('#username');
      element.value = '';
      fixture.detectChanges();
      expect(element.value).toBeFalsy();
    });
    it('should check the input value of username is valid', () => {
      const element = fixture.nativeElement.querySelector('#password');
      element.value = 'h';
      fixture.detectChanges();
      expect(element.value).toBeTruthy();
    });
    it('should contain equal no.of input element', () => {
      const formelement = fixture.debugElement.nativeElement.querySelector('#form');
      const inputelement = formelement.querySelector('#username');
      inputelement.value = 'h';
      expect(inputelement.value).toBeTruthy();
    });
  })
  describe('Navigation', () => {
    let location: Location;
    let router: Router;
    beforeEach(() => {
      location = TestBed.get(Location);
      router = TestBed.get(Router);
      fixture.detectChanges();
    });
    it('Should navigate to / before + button click', () => {
      // find DebugElements with an attached RouterLinkStubDirective
      expect(location.path()).toBe('');
    });
  });
  // it('Should navigate to / before + button click',()=>{
  //   const link = fixture.debugElement.query(By.css('#rlink'));
  //   const link1 = link.nativeElement.click();
  //   //We wait for all pending promises to be resolved.
  //   expect(link1).toBe('/forgetpassword');
  // });
  // it('link should be called', async () => {
  //   fixture.detectChanges();
  //   const link = fixture.debugElement.query(By.css('#rlink')).nativeElement;
  //   const link1 = link.click();
  //   fixture.whenStable().then(() => {
  //     // expect(link).toHaveBeenCalled();
  //     expect(link1).toHaveBeenCalledWith('http://localhost:4200/forgetpassword');
  //   });
  // });
  // it('should match ul children number and its text', fakeAsync (() => {
  //   const ul = fixture.debugElement.query(By.css('.linklist'));
  //   fixture.detectChanges();
  //   const noOfli = 1;
  //   expect(ul.children.length).toEqual(noOfli);
  // }));
  // describe('Routing integration test', () => {
  //   const createComponent : createRoutingFactory({
  //     component: LoginComponent,
  //     declarations: [LoginComponent],
  //     stubsEnabled: false,
  //     routes: [
  //       {path: '',component: LoginComponent},
  //       {path: 'register',component: RegisterComponent}]
  //     });
  //     it('should navigate away using router link', async () => {
  //       const spectator = createComponent();
  //       // wait for promises to resolve...
  //       await spectator.fixture.whenStable();
  //       // test the current route by asserting the location
  //       expect(spectator.inject(Location).path()).toBe('/');
  //       // click on a router link
  //       spectator.click('.click');
  //       // don't forget to wait for promises to resolve...
  //       await spectator.fixture.whenStable();
  //       // test the new route by asserting the location
  //       expect(spectator.inject(Location).path()).toBe('/register');
  //     });
  //   });
  //   it('User input field', fakeAsync(() => {
  //     const email= fixture.nativeElement.querySelector("#typeEmailX");
  //     email.value = 'I am Testing';
  //     email.dispatchEvent(new Event('input'));
  //     fixture.detectChanges();
  //     tick();
  //     const message= fixture.nativeElement.querySelector("p");
  //     expect(message.textContent).toMatch("I am Testing");
  //   }));
  //   it('should contain tr element', () => {
  //     const el :HTMLElement =fixture.nativeElement;
  //     expect(el.querySelectorAll("tr").length).toBe(3);
  //   });
  //   it('execptional of tr element', () => {
  //     const el :HTMLElement =fixture.nativeElement;
  //     expect(el.querySelectorAll("tr").length).not.toBe(2);
  //   });
  //   it('should contain section element', () => {
  //     const el :HTMLElement =fixture.nativeElement;
  //     expect(el.querySelectorAll("section").length).toBe(1);
  //   });
  //   it('execptional of section element', () => {
  //     const el :HTMLElement =fixture.nativeElement;
  //     expect(el.querySelectorAll("section").length).not.toBe(2);
  //   });
  //   it('should contain div element', () => {
  //     const el :HTMLElement =fixture.nativeElement;
  //     expect(el.querySelectorAll("div").length).toBe(8);
  //   });
  //   it('execptional of div element', () => {
  //     const el :HTMLElement =fixture.nativeElement;
  //     expect(el.querySelectorAll("div").length).not.toBe(7);
  //   });
  //   it('Should minimum be one button on the page', () => {
  //     const el :HTMLElement =fixture.nativeElement;
  //     expect(el.querySelectorAll('button').length).toBeGreaterThanOrEqual(1);
  //   });
  //   it('should go to url',
  //   async(inject([Router, Location], (router: Router, location: Location) => {
  //     let fixture = TestBed.createComponent(LoginComponent);
  //     fixture.detectChanges();
  //     fixture.debugElement.query(By.css('a')).nativeElement.click();
  //     fixture.whenStable().then(() => {
  //       expect(location.path()).toEqual('/settings/testing/edit/1');
  //       console.log('after expect');
  //     });
  //   })));
});
