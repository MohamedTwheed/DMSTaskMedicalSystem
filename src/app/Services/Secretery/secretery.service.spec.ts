import { TestBed } from '@angular/core/testing';

import { SecreteryService } from './secretery.service';

describe('SecreteryService', () => {
  let service: SecreteryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SecreteryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
