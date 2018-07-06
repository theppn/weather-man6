import { TestBed, inject } from '@angular/core/testing';
import { fakeBackendProvider} from '../interceptors/fakeBackend.interceptor';
import { ApiService } from './api.service';
import {HttpClientModule} from '@angular/common/http';

describe('ApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [ApiService, fakeBackendProvider]
    });
  });

  it('should be created', inject([ApiService], (service: ApiService) => {
    expect(service).toBeTruthy();
  }));
  it('should request and get cod:"200" as answer', inject([ApiService], (service: ApiService) => {
    service.getForecast('testCity', 'testCc').subscribe(response => {
      expect(response['cod']).toBe('200');
    });
  }));
});
