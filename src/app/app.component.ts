import { Component } from '@angular/core';
import { HeaderComponent } from "./shared/header/header.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { EtudiantDetailComponent } from "./etudiant/components/etudiant-detail/etudiant-detail.component";

@Component({
  selector: 'app-root',
  //standalone : false ,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [HeaderComponent, DashboardComponent, EtudiantDetailComponent]
})
export class AppComponent {
  title = 'gAuto';
}