import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddparcelsComponent } from './addparcels.component';

describe('AddparcelsComponent', () => {
  let component: AddparcelsComponent;
  let fixture: ComponentFixture<AddparcelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddparcelsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddparcelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
