import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { environment } from "environments/environment";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit {
  userobj = {};

  constructor(public http: HttpClient, public _router: Router) {}

  submituserdetails(userdata: any) {
    userdata.umobilenum = "9494437121";
    this.userobj = {
      username: userdata.uname,
      usermobilenum: userdata.umobilenum,
      usermail: userdata.usermmail,
      userpassword: userdata.upassword
    };

    console.log(this.userobj);

    this.http.post("/userdata", this.userobj).subscribe((res: any) => {
      const data = res;
      console.log(data);
      this._router.navigate(["/login"]);
    });
  }

  ngOnInit() {}
}
