import {
  animate,
  state,
  style,
  transition,
  trigger
} from "@angular/animations";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  animations: [
    trigger("myanimation", [
      state(
        "small",
        style({
          transform: "scale(1)"
        })
      ),
      state(
        "large",
        style({
          transform: "scale(1.2)"
        })
      ),
      state(
        "extralarge",
        style({
          transform: "scale(2)"
        })
      ),
      // transition('small <=> large',animate('300ms ease-in',style({
      //   transform:'translateY(40px)'
      // }))),
      transition(`* => *`, animate("500ms"))
    ])
  ]
})
export class AppComponent implements OnInit {
  title = "app";
  names = "vinod";
  state = "extralarge";
  showcomponent;

  toggleChild() {
    // alert('ddddd');
    this.showcomponent = !this.showcomponent;
  }

  ngOnInit() {
    this.toggleChild();
  }

  animateme() {
    this.state = this.state === "small" ? "large" : "small";
  }
}
