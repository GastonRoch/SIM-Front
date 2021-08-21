import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegundotpComponent } from './segundotp.component';

describe('SegundotpComponent', () => {
  let component: SegundotpComponent;
  let fixture: ComponentFixture<SegundotpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SegundotpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SegundotpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
