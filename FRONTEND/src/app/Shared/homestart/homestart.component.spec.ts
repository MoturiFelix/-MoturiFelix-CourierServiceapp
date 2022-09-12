import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomestartComponent } from './homestart.component';

describe('HomestartComponent', () => {
  let component: HomestartComponent;
  let fixture: ComponentFixture<HomestartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomestartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomestartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
