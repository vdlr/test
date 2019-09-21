import { TestBed } from '@angular/core/testing';

import { BirthdaysService } from './birthdays.service';

describe('BirthdaysService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BirthdaysService = TestBed.get(BirthdaysService);
    expect(service).toBeTruthy();
  });
});
