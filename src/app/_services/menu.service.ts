import { Injectable } from "@angular/core";

import { menuItemsList } from "../_data/menu";

@Injectable({
  providedIn: "root"
})
export class MenuService {
  constructor() {}

  getAllMenues(): any[] {
    return menuItemsList;
  }
}
