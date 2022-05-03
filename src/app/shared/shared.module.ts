import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TableModule } from "./components/table/table.module";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { PaginatorComponent } from "./components/paginator/paginator.component";
import { HeaderComponent } from "./components/header/header.component";
import { CellComponent } from "./components/cell/cell.component";

@NgModule({
  declarations: [],
  imports: [CommonModule, TableModule, MatPaginatorModule, MatSortModule],
  exports: [TableModule],
})
export class SharedModule {}
