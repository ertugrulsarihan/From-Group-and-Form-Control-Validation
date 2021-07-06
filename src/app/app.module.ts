import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SignComponent } from './Sign/sign.component';
import { appRoutes } from './router';
import { RouterModule } from '@angular/router';
import { GoodJobComponent } from './gj/Goodjob.component';
import { Service } from './Service/users.service';

@NgModule({
  declarations: [
    AppComponent,
    SignComponent,
    GoodJobComponent


  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
