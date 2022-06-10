import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { TableOfflineComponent } from '../table-offline/table-offline.component';
import { TableModule } from './../table/table.module';

@NgModule({
  declarations: [TableOfflineComponent],
  imports: [CommonModule, MatPaginatorModule, TableModule],
  exports: [TableOfflineComponent],
  providers: []
})
export class TableOfflineModule {}
