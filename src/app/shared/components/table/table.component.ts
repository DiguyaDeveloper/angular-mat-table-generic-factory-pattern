import { Component, EventEmitter, Input, Output } from "@angular/core";
import { PageEvent } from "@angular/material/paginator";
import { Contracts } from "src/app/core/interfaces/contract.interface";
import { DataSource } from "./models/data-source";
import { Table } from "./models/table.class";

@Component({
  selector: "ceccoff-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.scss"],
})
export class TableComponent<S, T> {
  @Input() dataSource: DataSource<S, T>;
  @Output() eventPagination = new EventEmitter<PageEvent>();

  pageEvents(event: PageEvent): void {
    this.eventPagination.emit(event);
  }
}
