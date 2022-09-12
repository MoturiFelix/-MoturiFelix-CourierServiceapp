import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlldeliveryComponent } from './alldelivery.component';

describe('AlldeliveryComponent', () => {
  let component: AlldeliveryComponent;
  let fixture: ComponentFixture<AlldeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlldeliveryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlldeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
