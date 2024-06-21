import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForgotpasswordComponent } from './forgotpassword.component';

describe('ForgotpasswordComponent', () => {
  let component: ForgotpasswordComponent;
  let fixture: ComponentFixture<ForgotpasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForgotpasswordComponent],
      imports: [HttpClientTestingModule, FormsModule, ReactiveFormsModule],
    });
    fixture = TestBed.createComponent(ForgotpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
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
    expect(element.innerText.trim()).toEqual('forget password');
  });
  it('should display the text present in p tag', () => {
    const element = fixture.debugElement.nativeElement.querySelector('#heading');
    expect(element.innerText.trim()).not.toEqual('forget passwor');
  });
});
