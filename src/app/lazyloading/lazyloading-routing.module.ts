import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LazycomponentComponent} from './lazycomponent/lazycomponent.component';
import { SublazycomponentComponent } from './sublazycomponent/sublazycomponent.component';

const routes: Routes = [{ 
	  path: '',
          component: LazycomponentComponent,
           children: [ 
			    {
			       path: 'lazysub',
			       component: SublazycomponentComponent
			    }
	  		]

          }]
       

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyloadingRoutingModule { }
