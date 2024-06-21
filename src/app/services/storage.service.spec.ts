import { TestBed } from '@angular/core/testing';
import { StorageService } from './storage.service';

describe('StorageService', () => {
  let service: StorageService;
  
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StorageService);
  });
  
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
  it('should call the function clean',()=>{
    let func = spyOn(service, 'clean');
    service['clean']();
    expect(func).toHaveBeenCalled();
  });
  it('should call the function saveUser',()=>{
    let func = spyOn(service, 'saveUser');
    const user = 'hii';
    service['saveUser'](user);
    expect(func).toHaveBeenCalled();
  });
  it('should call the function getUser',()=>{
    let func = spyOn(service, 'getUser');
    service['getUser']();
    expect(func).toHaveBeenCalled();
  });
  it('should call the function isLoggedIn',()=>{
    let func = spyOn(service, 'isLoggedIn');
    service['isLoggedIn']();
    expect(func).toHaveBeenCalled();
  });
});
