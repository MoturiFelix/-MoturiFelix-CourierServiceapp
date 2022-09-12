import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyparcelComponent } from './myparcel.component';

describe('MyparcelComponent', () => {
  let component: MyparcelComponent;
  let fixture: ComponentFixture<MyparcelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyparcelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyparcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
