/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FilterTextService } from '../filter-text/filter-text.service';

describe('FilterTextService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FilterTextService]
    });
  });

  it('should create', inject([FilterTextService], (service: FilterTextService) => {
    expect(service).toBeTruthy();
  }));
});
