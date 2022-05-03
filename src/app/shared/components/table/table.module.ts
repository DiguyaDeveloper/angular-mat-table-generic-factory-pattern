import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatTableModule } from "@angular/material/table";
import { MatSortModule } from "@angular/material/sort";
import { TableComponent } from "./table.component";
import { HeaderModule } from "../header/header.module";
import { PaginatorModule } from "../paginator/paginator.module";
import { CellModule } from "../cell/cell.module";

@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule,
    HeaderModule,
    PaginatorModule,
    CellModule,
  ],
  exports: [TableComponent],
})
export class TableModule {}
