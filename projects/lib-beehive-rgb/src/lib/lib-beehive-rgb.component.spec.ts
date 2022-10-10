import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibBeehiveRGBComponent } from './lib-beehive-rgb.component';

describe('LibBeehiveRGBComponent', () => {
  let component: LibBeehiveRGBComponent;
  let fixture: ComponentFixture<LibBeehiveRGBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibBeehiveRGBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibBeehiveRGBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
