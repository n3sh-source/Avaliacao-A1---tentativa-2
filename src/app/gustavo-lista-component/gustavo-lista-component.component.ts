import { Component, OnInit } from '@angular/core';
import { GustavoDisciplinasServiceService } from '../gustavo-disciplinas-service.service';

@Component({
  selector: 'app-gustavo-lista-component',
  templateUrl: './gustavo-lista-component.component.html',
  styleUrls: ['./gustavo-lista-component.component.css'],
})
export class GustavoListaComponentComponent implements OnInit {
  id;
  nome;
  diaDaSemana;
  horario;
  ementa;

  constructor(public disciplinas: GustavoDisciplinasServiceService) {}

  ngOnInit() {}
}
