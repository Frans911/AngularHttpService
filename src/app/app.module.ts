import { HttpModule } from '@angular/http';
import { InfoService } from './service/info.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [InfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
