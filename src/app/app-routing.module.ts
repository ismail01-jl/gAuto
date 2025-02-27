// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EtudiantListComponent } from './etudiant/components/etudiant-list/etudiant-list.component';
import { EtudiantDetailComponent } from './etudiant/components/etudiant-detail/etudiant-detail.component';

const routes: Routes = [
  { path: 'etudiants', component: EtudiantListComponent },
  { path: 'etudiants/:id', component: EtudiantDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
