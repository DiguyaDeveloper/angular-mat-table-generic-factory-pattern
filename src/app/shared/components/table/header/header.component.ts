import { CommonModule } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
import { MatTableModule } from "@angular/material/table";
import { TableColumns } from "src/app/core/interfaces/table-columns.interface";

@Component({
  selector: "ceccoff-table-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
  standalone: true,
  imports: [CommonModule, MatTableModule],
})
export class HeaderComponent<T> implements OnInit {
  @Input() column: TableColumns<T>;

  constructor() {}

  ngOnInit(): void {}
}
