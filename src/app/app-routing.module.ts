import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeclarationHostComponent } from './components/cds-declaration/declaration-host.component';
import { NotFoundComponent } from './components/error-routing/not-found.component';
import { HeaderComponent } from './components/cds-declaration/header/header.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: DeclarationHostComponent, data: { text: 'Home' } },
  { path: 'declarations', component: HeaderComponent, data: { text: 'Declarations' } },
  { path: '**', component: NotFoundComponent } // must always be last
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
