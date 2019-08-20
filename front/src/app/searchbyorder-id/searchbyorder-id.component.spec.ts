import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchbyorderIdComponent } from './searchbyorder-id.component';

describe('SearchbyorderIdComponent', () => {
  let component: SearchbyorderIdComponent;
  let fixture: ComponentFixture<SearchbyorderIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchbyorderIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchbyorderIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
