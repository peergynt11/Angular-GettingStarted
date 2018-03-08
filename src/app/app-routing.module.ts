import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { WelcomeComponent } from './home/welcome.component';
import { MobileListComponent } from './mobiles/mobile-list/mobile-list.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'mobiles',  component: MobileListComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'full'},
  { path: '**', redirectTo: 'welcome', pathMatch: 'full'}
];

@NgModule({
  imports: [ 
    RouterModule.forRoot(routes) 
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
