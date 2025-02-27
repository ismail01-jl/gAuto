// src/app/etudiants/components/etudiant-list/etudiant-list.component.ts
import { Component, OnInit } from '@angular/core';
import { EtudiantService } from '../../services/etudiant.service';

@Component({
  selector: 'app-etudiant-list',
  //standalone : false ,
  templateUrl: './etudiant-list.component.html',
  styleUrls: ['./etudiant-list.component.scss']
})
export class EtudiantListComponent implements OnInit {
  etudiants: any[] = [];

  constructor(private etudiantService: EtudiantService) {}

  ngOnInit(): void {
    this.etudiantService.getEtudiants().subscribe({
      next: (data) => this.etudiants = data,
      error: (err) => console.error('Erreur de chargement des étudiants', err)
    });
  }
}
