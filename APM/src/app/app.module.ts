import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import {ConvertDashesToSpacesPipe, ConvertToSpacesPipe, StringReplacementPipe} from './shared/string-replacement.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ConvertDashesToSpacesPipe,
    ConvertToSpacesPipe,
    ProductListComponent,
    StringReplacementPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
