import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PDetailsComponent } from './p-details.component';

describe('PDetailsComponent', () => {
  let component: PDetailsComponent;
  let fixture: ComponentFixture<PDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
