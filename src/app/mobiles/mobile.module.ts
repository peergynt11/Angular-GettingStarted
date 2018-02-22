import { NgModule } from '@angular/core';
import { MobileListComponent } from './mobile-list.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { MobileService } from './mobile.service';
import { MobileDetailComponent } from './mobile-detail/mobile-detail.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'mobiles', component: MobileListComponent },
      { path: 'mobiles/:id', component: MobileDetailComponent }
    ]),
    SharedModule,
  ],
    declarations: [MobileListComponent, MobileDetailComponent],
    providers: [MobileService]
})

export class MobileModule { }
