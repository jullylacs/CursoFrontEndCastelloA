import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { InternaComponent } from './pages/interna/interna.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {path: "", redirectTo: '/home', pathMatch: 'full'},
  {path: "home", component: HomeComponent},
  {path: "login", component: LoginComponent},
  {path: "registro", component: RegistroComponent},
  {path: "interna", component: InternaComponent, canActivate: [AuthGuard]},
  {path: "**", redirectTo: '/home' } //redireciona para home se a rota não for encontrada 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
