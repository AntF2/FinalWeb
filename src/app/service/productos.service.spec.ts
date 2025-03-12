import { TestBed } from '@angular/core/testing';

import { ProducosService } from './producos.service';

describe('ProducosService', () => {
  let service: ProducosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProducosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
