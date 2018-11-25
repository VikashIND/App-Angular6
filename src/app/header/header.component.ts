import { Component, OnInit } from "@angular/core";
import { MenuService } from "../_services/menu.service";
import { MenuItem } from "primeng/api";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  items: MenuItem[];
  constructor(private menuService: MenuService) {}

  ngOnInit() {
    this.items = this.menuService.getAllMenues();
  }
}
