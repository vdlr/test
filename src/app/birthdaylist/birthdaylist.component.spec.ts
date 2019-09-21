import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthdaylistComponent } from './birthdaylist.component';

describe('BirthdaylistComponent', () => {
  let component: BirthdaylistComponent;
  let fixture: ComponentFixture<BirthdaylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BirthdaylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BirthdaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
