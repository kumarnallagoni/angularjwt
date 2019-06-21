import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UserdataService } from "../service/user.service";

@Component({
  selector: "app-videocenter",
  templateUrl: "./videocenter.component.html",
  styleUrls: ["./videocenter.component.css"]
})
export class VideocenterComponent implements OnInit {
  data: any;
  userdatas: any;

  constructor(
    public http: HttpClient,
    public _router: Router,
    private _userservice: UserdataService
  ) {}

  ngOnInit() {
    const uid = sessionStorage.getItem("uid");
    const token = sessionStorage.getItem("jwttoken");
    console.log(uid);
    console.log(token);
    this._userservice.getUserdetails().subscribe(userdata => {
      this.userdatas = userdata;
      console.log(this.userdatas);
    });
  }
}
