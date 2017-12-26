import { TestBed, inject } from '@angular/core/testing';

import { TeacherListDataService } from './teacher-list-data.service';

describe('TeacherListDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TeacherListDataService]
    });
  });

  it('should be created', inject([TeacherListDataService], (service: TeacherListDataService) => {
    expect(service).toBeTruthy();
  }));
});
