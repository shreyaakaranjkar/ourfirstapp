import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypicodetaskComponent } from './typicodetask.component';

describe('TypicodetaskComponent', () => {
  let component: TypicodetaskComponent;
  let fixture: ComponentFixture<TypicodetaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypicodetaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypicodetaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
