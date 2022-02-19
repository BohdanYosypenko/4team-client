import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from '../components/admin/admin.component';
import { BodyComponent } from '../components/body/body.component';

const routes: Routes = [  
  { path: 'main', component: BodyComponent },
  { path: 'admin', component: AdminComponent },
  { path: '**', component:  BodyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }