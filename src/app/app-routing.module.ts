import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {UserComponent} from './user/component/user/user.component';
import {UserCanActivateService} from './services/guards/user-can-activate.service';


const routes: Routes = [
  {path: 'users/:id', component: UserComponent, canActivate: [UserCanActivateService]}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
