import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SharedModule } from "./shared/shared.module";
import { HttpClientModule } from "@angular/common/http";
import { CeccoffMockApiModule } from "./core/mocks/mock-api/mock-api.module";
import { mockApiServices } from "./core/mocks";
import { MatPaginator, MatPaginatorModule } from "@angular/material/paginator";

@NgModule({
  declarations: [AppComponent],
  imports: [
    MatPaginatorModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    CeccoffMockApiModule.forRoot(mockApiServices),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
