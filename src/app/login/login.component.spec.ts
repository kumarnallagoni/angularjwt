import {HttpClientModule}                 from '@angular/common/http';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {FormsModule}                      from '@angular/forms';
import {RouterTestingModule}              from '@angular/router/testing';
import {LoginComponent}                   from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    const userbody = {
      Usermail: 'vinodsrinum@gmail.com',
      Userpassword: 'vinod@b54'
    };
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [HttpClientModule, FormsModule, RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should create submituserlogindetails function', () => {
    spyOn(component, 'submituserlogindetails').and.callThrough();
    component.submituserlogindetails({
      Usermail: 'vinodsrinum@gmail.com',
      Userpassword: 'vinod@b54'
    });
    expect(component.submituserlogindetails).toBeDefined();
    expect(component.submituserlogindetails).toHaveBeenCalled();
    // expect(component.submituserlogindetails.calls.count().toEqual(1);
  });

});
