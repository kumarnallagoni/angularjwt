import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SublazycomponentComponent } from './sublazycomponent.component';

describe('SublazycomponentComponent', () => {
  let component: SublazycomponentComponent;
  let fixture: ComponentFixture<SublazycomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SublazycomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SublazycomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
