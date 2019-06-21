import { Component, Input, OnChanges, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit, OnChanges {
  @Input() name: string;

  constructor() {}

  ngOnChanges(changes) {}

  ngOnInit() {}
}
