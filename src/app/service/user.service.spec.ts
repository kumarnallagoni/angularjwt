import {HttpClientModule} from '@angular/common/http';
import {TestBed}          from '@angular/core/testing';
import {UserdataService}  from './user.service';

fdescribe('UsersService', () => {
  let usersService: UserdataService; // Add this

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [UserdataService]
    });

    usersService = TestBed.get(UserdataService); // Add this
  });

  it('should be created', () => { // Remove inject()
    expect(usersService).toBeTruthy();
  });
});
