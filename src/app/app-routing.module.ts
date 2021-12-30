import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './features/search/search.component';
import { LoginComponent } from './features/login/login.component';
import { CartComponent } from './features/cart/cart.component';

const routes: Routes = [
  
 
  { path: 'login', component: LoginComponent },
  { path: 'search', component: SearchComponent  },
  { path: 'cart', component: CartComponent }, 
  { path: '**', redirectTo: 'login'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
