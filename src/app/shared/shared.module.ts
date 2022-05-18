import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TableModule } from "./components/table/table.module";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";

@NgModule({
  declarations: [],
  imports: [CommonModule, TableModule, MatPaginatorModule, MatSortModule],
  exports: [TableModule],
})
export class SharedModule {}
