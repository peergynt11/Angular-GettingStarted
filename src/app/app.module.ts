import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductModule } from './products/product.module';
import { MobileModule } from './mobiles/mobile.module';
import { Form1Component } from './tryforms/form1/form1.component';
import { Form2Component } from './tryforms/form2/form2.component';
import { NgxBootstrapModule } from './shared/ngx-bootstrap/ngx-bootstrap.module';
import { Form3Component } from './tryforms/form3/form3.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    Form1Component,
    Form2Component,
    Form3Component
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent},
      { path: 'form1', component: Form1Component },
      { path: 'form2', component: Form2Component },
      { path: 'form3', component: Form3Component },
      { path: '', redirectTo: 'welcome', pathMatch: 'full'},
      { path: '**', redirectTo: 'welcome', pathMatch: 'full'}
    ]),
    ProductModule,
    MobileModule,
    NgxBootstrapModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
