import { TestBed, inject } from '@angular/core/testing';

import { TravisCompletionService } from './travis-completion.service';

describe('TravisCompletionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TravisCompletionService]
    });
  });

  it('should be created', inject([TravisCompletionService], (service: TravisCompletionService) => {
    expect(service).toBeTruthy();
  }));
});
