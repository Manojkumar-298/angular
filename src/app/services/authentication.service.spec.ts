import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './authentication.service';

describe('AuthenticationService', () => {
    let service: AuthService;
    
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule], 
        });
        service = TestBed.inject(AuthService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
    it('should call the function login',()=>{
        let func = spyOn(service, 'login');
        const username = "jane";
        const password = "jane298";
        service.login(username,password);
        expect(func).toHaveBeenCalled();
    });
    it('should call the function register',()=>{
        let func = spyOn(service, 'register');
        const username = "jane";
        const password = "jane298";
        const  email = "hello"; 
        const phone = 928908765 ;
        const address = "54,street,city";
        service['register'](username, email, phone, password, address);
        expect(func).toHaveBeenCalled();
    });
    it('should call the function edit',()=>{
        let func = spyOn(service, 'edit');
        const username = "jane";
        const password = "jane298";
        const  email = "hello";
        const phone = 928908765 ;
        const address = "54,street,city";
        service['edit'](username, email, phone, password, address);
        expect(func).toHaveBeenCalled();
    });
    it('should call the function getusers',()=>{
        let func = spyOn(service, 'getusers');
        service['getusers']();
        expect(func).toHaveBeenCalled();
    });
    it('should call the function profile',()=>{
        let func = spyOn(service, 'profile');
        const username = "jane";
        service['profile'](username);
        expect(func).toHaveBeenCalled();
    });
    it('should call the function password',()=>{
        let func = spyOn(service, 'password');
        const username = "jane";
        const password = "jane298";
        service.password(username,password);
        expect(func).toHaveBeenCalled();
    });
    it('should call the function logout',()=>{
        let func = spyOn(service, 'logout');
        service['logout']();
        expect(func).toHaveBeenCalled();
    });
});
export { AuthService };

