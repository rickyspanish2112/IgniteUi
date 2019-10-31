import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/error-routing/not-found.component';
import { HeaderComponent } from './components/cds-declaration/header/header.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: { text: 'Home' } },
  { path: 'declarations', component: HeaderComponent, data: { text: 'CDS Declaration Editor' } },
  { path: '**', component: NotFoundComponent } // must always be last
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
