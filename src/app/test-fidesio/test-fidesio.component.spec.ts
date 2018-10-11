import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestFidesioComponent } from './test-fidesio.component';

describe('TestFidesioComponent', () => {
  let component: TestFidesioComponent;
  let fixture: ComponentFixture<TestFidesioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestFidesioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestFidesioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
