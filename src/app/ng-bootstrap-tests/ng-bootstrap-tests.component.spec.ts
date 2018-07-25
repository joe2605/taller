import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgBootstrapTestsComponent } from './ng-bootstrap-tests.component';

describe('NgBootstrapTestsComponent', () => {
  let component: NgBootstrapTestsComponent;
  let fixture: ComponentFixture<NgBootstrapTestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgBootstrapTestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgBootstrapTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
