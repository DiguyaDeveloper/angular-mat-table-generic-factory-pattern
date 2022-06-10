import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SharedModule } from "./shared/shared.module";
import { HttpClientModule } from "@angular/common/http";
import { CeccoffMockApiModule } from "./core/mocks/mock-api/mock-api.module";
import { mockApiServices } from "./core/mocks";
import { MatPaginatorModule } from "@angular/material/paginator";
import { ExampleTableOnlineComponent } from "./modules/example-table-online/example-table-online.component";
import { ExampleTableOfflineComponent } from "./modules/example-table-offline/example-table-offline.component";
import { TableOnlineModule } from "./shared/components/table-online/table-online.module";
import { TableOfflineModule } from "./shared/components/table-offline/table-offline.module";
import { TableVerticalBadgeModule } from "./shared/components/table-vertical-badge/table-vertical-badge.module";

@NgModule({
  declarations: [
    AppComponent,
    ExampleTableOnlineComponent,
    ExampleTableOfflineComponent,
  ],
  imports: [
    MatPaginatorModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    CeccoffMockApiModule.forRoot(mockApiServices),
    TableOnlineModule,
    TableOfflineModule,
    TableVerticalBadgeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
