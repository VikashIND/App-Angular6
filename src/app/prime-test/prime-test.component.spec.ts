import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeTestComponent } from './prime-test.component';

describe('PrimeTestComponent', () => {
  let component: PrimeTestComponent;
  let fixture: ComponentFixture<PrimeTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimeTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimeTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
