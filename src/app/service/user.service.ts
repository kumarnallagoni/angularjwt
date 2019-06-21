import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable}              from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class UserdataService {
  uid: any = sessionStorage.getItem('uid');
  token: any = sessionStorage.getItem('jwttoken');
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'uid': this.uid,
      'token': this.token
    })
  };

  constructor(private http: HttpClient) {

  }

  getUserdetails() {
    console.log('user data service calling', this.httpOptions);
    return this.http.get('/getuserdetails', this.httpOptions)
      .map((res: Response) => {
        console.log(res);
        return res;
      });

  }
}
