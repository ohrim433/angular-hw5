import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SizePipe } from './size.pipe';
import { RedDirective } from './red.directive';
import { FilterPipe } from './filter.pipe';
import { RandomBackDirective } from './random-back.directive';

@NgModule({
  declarations: [
    AppComponent,
    SizePipe,
    RedDirective,
    FilterPipe,
    RandomBackDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
