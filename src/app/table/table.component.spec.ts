import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Location } from "@angular/common";
import { TableComponent } from './table.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, routes } from '../app-routing.module';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;
  let location: Location;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableComponent],
      imports: [HttpClientModule, AppRoutingModule, RouterTestingModule.withRoutes(routes)],
    });
    router = TestBed.get(Router);
    location = TestBed.get(Location);
    router.initialNavigation();

    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call the router link',()=>{
    const router = TestBed.get(Router);
    const spy = spyOn(router, 'navigate');
    const ele = fixture.debugElement.nativeElement.querySelector('#home');
    // const link = router.navigate(["/login"]);
    ele.click();
    expect(spy).toEqual('/login');

  })

});
