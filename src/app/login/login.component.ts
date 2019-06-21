import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  loginobject = {};

  constructor(public http: HttpClient, public _router: Router) {}

  submituserlogindetails(logindetails: any): void {
    this.loginobject = {
      Usermail: logindetails.usermail,
      Userpassword: logindetails.userpassword
    };

    this.http.post("/login", this.loginobject).subscribe((res: any) => {
      const data = res;
      console.log(data.token);
      console.log(data.userid);
      sessionStorage.setItem("jwttoken", data.token);
      sessionStorage.setItem("uid", data.userid);
      if (data.status === false) {
        this._router.navigate(["/login"]);
      } else {
        this._router.navigate(["/videos"]);
      }
    });
  }

  ngOnInit() {}
}
