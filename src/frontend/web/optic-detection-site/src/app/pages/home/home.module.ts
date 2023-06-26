import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

import { IndexComponent } from './components/index/index.component';

@NgModule({
  declarations: [ IndexComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
  ],
  providers: [],
  exports: []
})
export class HomeModule {}
