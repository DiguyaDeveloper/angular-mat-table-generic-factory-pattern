import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatTableModule } from "@angular/material/table";
import { MatSortModule } from "@angular/material/sort";
import { TableComponent } from "./table.component";
import { HeaderModule } from "./header/header.module";
import { MatSelectModule } from "@angular/material/select";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatIconModule } from "@angular/material/icon";
import { CellModule } from "./cell/cell.module";
import { TableOnlineComponent } from "../table-online/table-online.component";
import { TableOfflineComponent } from "../table-offline/table-offline.component";
import { MatPaginator, MatPaginatorModule } from "@angular/material/paginator";
import { FooterComponent } from "./footer/footer.component";
import { FooterModule } from "./footer/footer.module";
@NgModule({
  declarations: [TableComponent, TableOfflineComponent, TableOnlineComponent],
  imports: [
    CommonModule,
    MatTableModule,
    HeaderModule,
    CellModule,
    FooterModule,
    MatSelectModule,
    MatCheckboxModule,
    MatIconModule,
    MatSortModule,
    MatPaginatorModule,
  ],
  exports: [TableComponent, TableOfflineComponent, TableOnlineComponent],
  providers: [],
})
export class TableModule {}
