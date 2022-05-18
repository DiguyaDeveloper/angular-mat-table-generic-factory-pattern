import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatTableModule } from "@angular/material/table";
import { MatSortModule } from "@angular/material/sort";
import { TableComponent } from "./table.component";
import { HeaderModule } from "../header/header.module";
import { PaginatorModule } from "../paginator/paginator.module";
import { CellModule } from "../cell/cell.module";
import { MatSelectModule } from "@angular/material/select";
import {
  MatCheckboxDefaultOptions,
  MatCheckboxModule,
  MAT_CHECKBOX_DEFAULT_OPTIONS,
} from "@angular/material/checkbox";
import { MatIconModule } from "@angular/material/icon";
@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule,
    HeaderModule,
    PaginatorModule,
    CellModule,
    MatSelectModule,
    MatCheckboxModule,
    MatIconModule,
  ],
  exports: [TableComponent],
  providers: [],
})
export class TableModule {}
