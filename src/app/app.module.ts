import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NbCardModule, NbInputModule, NbThemeModule } from '@nebular/theme';
import {
  NbSidebarModule,
  NbLayoutModule,
  NbButtonModule,
  NbSearchModule,
} from '@nebular/theme';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ListProductComponent } from './list-product/list-product.component';

@NgModule({
  declarations: [AppComponent, AddProductComponent, ListProductComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NbThemeModule.forRoot(),
    NbLayoutModule,
    NbSidebarModule.forRoot(), // NbSidebarModule.forRoot(), //if this is your app.module
    NbButtonModule,
    NbSearchModule,
    NbCardModule,
    NbInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
