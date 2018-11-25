import { Component, OnInit } from "@angular/core";
import { InputTextModule } from "primeng/inputtext";
import { MenuItem } from "primeng/api";
import { MenuService } from "../_services/menu.service";
@Component({
  selector: "app-prime-test",
  templateUrl: "./prime-test.component.html",
  styleUrls: ["./prime-test.component.css"]
})
export class PrimeTestComponent implements OnInit {
  text: string;
  items: MenuItem[];
  disabled: boolean = true;

  constructor(private menuService: MenuService) {}

  ngOnInit() {
    this.items = this.menuService.getAllMenues();
  }
  toggleDisabled() {
    this.disabled = !this.disabled;
  }
}
