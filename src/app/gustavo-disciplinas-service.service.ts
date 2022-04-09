import { Injectable } from '@angular/core';
import { listData } from './lista';

interface Disciplinas {
  id: string;
  nome: string;
  diaDaSemana: string;
  horario: string;
  ementa: string;
}

@Injectable()
export class GustavoDisciplinasServiceService {
  list: Array<Disciplinas> = listData;

  constructor() {}

  getList() {
    return this.list;
  }

  add(disciplina: Disciplinas) {
    this.list.push(disciplina);
  }

  delete(index: number) {
    this.list.splice(index, 1);
  }
}
