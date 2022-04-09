import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { listData } from '../lista';

@Component({
  selector: 'app-gustavo-detalhes-component',
  templateUrl: './gustavo-detalhes-component.component.html',
  styleUrls: ['./gustavo-detalhes-component.component.css'],
})
export class GustavoDetalhesComponentComponent implements OnInit {
  item;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((par) => {
      this.item = listData[par.get('index')];
    });
  }
}
