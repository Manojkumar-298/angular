import { ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { RegisterComponent } from './register.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { By } from '@angular/platform-browser';
import { Route, Router } from '@angular/router';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, ReactiveFormsModule, FormsModule, AppRoutingModule],
      declarations: [RegisterComponent],
      providers: []
    });
    fixture = TestBed.createComponent(RegisterComponent);

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return proper function', () => {
    component['addition'](25, 25);
    expect(component.total).toBe(50);
  });

  it('should return proper function', () => {
    component['setmsg']();
    expect(component.message).toBe('sample text');
  });

  it('should spyon on the private method with parameters', () => {
    let addspy = spyOn<any>(component, 'addition');
    component['addition'](20, 30);
    expect(addspy).toHaveBeenCalled();
  });

  it('should spyon on the private method with parameters', () => {
    let msgspy = spyOn<any>(component, 'setmsg');
    component['setmsg']();
    expect(msgspy).toHaveBeenCalled();
  });
  it('should call a function during another function', () => {
    const spy = spyOn(component, 'onSubmit');
    expect(spy).not.toHaveBeenCalled();
  });
  it('execptional of tr element', () => {
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelectorAll("table").length).toBe(0);
  });
  it('Should minimum be one button on the page', () => {
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelectorAll('button').length).toBeGreaterThanOrEqual(1);
  });
  it('should contain equal no.of input element', () => {
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelectorAll('input').length).toEqual(5);
  });
  it('should not contain equal no.of input element', () => {
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelectorAll('input').length).not.toEqual(6);
  });
  it('check username before add nothing', () => {
    const formelement: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#username');
    expect(formelement.value).toBeDefined();
  });
  it('check username before add nothing', () => {
    let formelement: any = fixture.debugElement.nativeElement.querySelector('#username').value;
    formelement = 'h';
    expect(formelement).toBeTruthy();
  });
  it('check initial form values of the form', () => {
    const registerformgroup = component.form;
    const formelements = {
      username: null,
      email: null,
      phone: null,
      address: null,
      password: null,
    }
    expect(registerformgroup).toEqual(formelements);
  })
  it('email validation', () => {
    const el: HTMLElement = fixture.nativeElement;
    const useremail = el.querySelectorAll('input')
    useremail[1].value = 'h';
    expect(useremail[1].value).toBeTruthy();
  });
  it('should call the function', () => {
    let msgspy = spyOn(component, 'onSubmit');
    component['onSubmit']();
    expect(msgspy).toHaveBeenCalled();
  });
  // it('should call a function during another function', () => {
  //   const spy = spyOn(component,'setValue');
  //   expect(spy).not.toHaveBeenCalledWith();
  // });
  // it('should match tr children number and its text', fakeAsync (() => {
  //   const ul = fixture.debugElement.query(By.css('.formlist'));
  //   fixture.detectChanges();
  //   const noOfli = 6;
  //   expect(ul.children.length).toEqual(noOfli);
  // }));
  // it('should match tr children number and its text', fakeAsync (() => {
  //   const ul = fixture.debugElement.query(By.css('.formlist'));
  //   fixture.detectChanges();
  //   const name = "username";
  //   expect(ul.childNodes[1].nativeNode.textContent).toBe(name);
  // }));
});
