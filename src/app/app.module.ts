import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductModule } from './products/product.module';
import { MobileModule } from './mobiles/mobile.module';
import { Form1Component } from './tryforms/form1/form1.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    Form1Component
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent},
      { path: 'form1', component: Form1Component },
      { path: '', redirectTo: 'welcome', pathMatch: 'full'},
      { path: '**', redirectTo: 'welcome', pathMatch: 'full'}
    ]),
    ProductModule,
    MobileModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
