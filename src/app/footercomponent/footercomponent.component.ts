import { Component, Input, OnChanges, OnInit } from "@angular/core";

@Component({
  selector: "app-footercomponent",
  templateUrl: "./footercomponent.component.html",
  styleUrls: ["./footercomponent.component.css"]
})
export class FootercomponentComponent implements OnInit, OnChanges {
  @Input() name: string;
  templatehide = true;

  constructor() {}

  ngOnChanges(changes) {
    if (name !== "vinod") {
      this.templatehide = false;
    }
  }

  ngOnInit() {}
}
