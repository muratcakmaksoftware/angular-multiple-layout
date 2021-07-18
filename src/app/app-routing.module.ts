import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { RegisterComponent } from './components/register/register.component';
import { Layout1Component } from './layouts/layout1/layout1.component';
import { Layout2Component } from './layouts/layout2/layout2.component';

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "admin", redirectTo: "admin/home", pathMatch: "full" },
  { //Default Layout
    path: "", component: Layout1Component, children: [
      { path: "home", component: HomeComponent },
      { path: "login", component: LoginComponent },
      { path: "register", component: RegisterComponent },
    ]
  },
  { //Admin Layout
    path: "admin", component: Layout2Component, children: [
      { path: "home", component: HomeComponent },
      { path: "logout", component: LogoutComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
