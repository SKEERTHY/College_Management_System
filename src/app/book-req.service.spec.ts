import { TestBed } from '@angular/core/testing';

import { BookReqService } from './book-req.service';

describe('BookReqService', () => {
  let service: BookReqService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookReqService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
