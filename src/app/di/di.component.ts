import { Component, OnInit, Injector } from "@angular/core";
import { LoggerBase } from "../_utility/LoggerUtility";

@Component({
  selector: "app-di",
  templateUrl: "./di.component.html",
  styleUrls: ["./di.component.css"]
})
export class DIComponent implements OnInit {
  inector: LoggerBase;

  constructor(private _objLog: LoggerBase, private _injector: Injector) {
    _objLog.Log();
    this.inector = _injector.get("db");
    this.inector.Log();
  }

  ngOnInit() {}
}
