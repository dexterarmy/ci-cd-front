import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllUsersComponent } from './all-users/all-users.component';
import { HomeComponent } from './home/home.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { StockFormComponent } from './stock-form/stock-form.component';

const routes: Routes = [
  {path:"", redirectTo: "login", pathMatch: "full"},
  {path: "login", component: LoginFormComponent},
  {path: "stock", component: StockFormComponent},
  {path: "home", component: HomeComponent},
  {path: "all-users", component: AllUsersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
