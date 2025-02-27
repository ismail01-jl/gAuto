// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';  
import { AppComponent } from './app.component';
import { EtudiantListComponent } from './etudiant/components/etudiant-list/etudiant-list.component';
import { EtudiantDetailComponent } from './etudiant/components/etudiant-detail/etudiant-detail.component';
import { HeaderComponent } from './shared/header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'etudiants', component: EtudiantListComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EtudiantListComponent,
    EtudiantDetailComponent,
    DashboardComponent   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes), 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
