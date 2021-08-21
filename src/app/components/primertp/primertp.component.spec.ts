import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimertpComponent } from './primertp.component';

describe('PrimertpComponent', () => {
  let component: PrimertpComponent;
  let fixture: ComponentFixture<PrimertpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimertpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimertpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
