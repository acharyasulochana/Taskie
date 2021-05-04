import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './authentication/layout/layout.component';
import { SigninComponent } from './authentication/layout/pages/signin/signin.component';
// import { LoginComponent } from './Authentication/Layouts/login/login.component';

const routes: Routes = [
  { path: '',pathMatch:'full', redirectTo:'auth' },
  {
    path:'auth',
    component: LayoutComponent,
    children:[
      { path:'', pathMatch:'full', redirectTo:'signin' },
      { path: 'signin',component:SigninComponent },
      { path: '**', redirectTo:'signin'}
    ]
  },
  { path: '**', redirectTo:'signin'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
