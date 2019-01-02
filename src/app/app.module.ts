import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { filter } from 'rxjs/operators';
import { AppComponent } from './app.component';
import { DisplaydataComponent } from './displaydata/displaydata.component';
import {PicserviceService} from './picservice.service';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    DisplaydataComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [PicserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
