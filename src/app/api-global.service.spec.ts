import { TestBed } from '@angular/core/testing';

import { ApiGlobalService } from './api-global.service';

describe('ApiGlobalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiGlobalService = TestBed.get(ApiGlobalService);
    expect(service).toBeTruthy();
  });
});
