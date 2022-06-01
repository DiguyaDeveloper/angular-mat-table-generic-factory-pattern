import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
} from "@angular/core";
import { TableColumns } from "./core/interfaces/table-columns.interface";
import { TablePaginationAbstract } from "./core/models/table.abstract";
import { InventoryProduct, TableService } from "./core/services/list.service";
import { Table } from "./shared/components/table/table.class";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
