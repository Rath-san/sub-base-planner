import { TestBed, inject } from '@angular/core/testing';

import { MaterialsBarService } from './materials-bar.service';

describe('MaterialsBarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MaterialsBarService]
    });
  });

  it('should be created', inject([MaterialsBarService], (service: MaterialsBarService) => {
    expect(service).toBeTruthy();
  }));
});
