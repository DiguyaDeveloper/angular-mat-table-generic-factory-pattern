import { CommonModule } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
import { MatTableModule } from "@angular/material/table";
import { TableColumns } from "src/app/core/interfaces/table-columns.interface";

@Component({
  selector: "ceccoff-table-cell",
  templateUrl: "./cell.component.html",
  styleUrls: ["./cell.component.scss"],
  standalone: true,
  imports: [CommonModule, MatTableModule],
})
export class CellComponent<T> implements OnInit {
  @Input() column: TableColumns<T>;
  @Input() row: T;

  constructor() {}

  ngOnInit(): void {}
}
