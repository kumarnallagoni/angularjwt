import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyloadingRoutingModule } from './lazyloading-routing.module';
import { LazycomponentComponent } from './lazycomponent/lazycomponent.component';
import { SublazycomponentComponent } from './sublazycomponent/sublazycomponent.component';


@NgModule({
  imports: [
    CommonModule,
    LazyloadingRoutingModule
  ],
  declarations: [LazycomponentComponent, SublazycomponentComponent]
})
export class LazyloadingModule { }
