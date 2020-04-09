import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OnPushComponentComponent } from './on-push-component/on-push-component.component';

@NgModule({
  declarations: [
    AppComponent,
    OnPushComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
