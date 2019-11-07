import { TestBed } from '@angular/core/testing';

import { SampleAppService } from './sample-app.service';

describe('SampleAppService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SampleAppService = TestBed.get(SampleAppService);
    expect(service).toBeTruthy();
  });
});
