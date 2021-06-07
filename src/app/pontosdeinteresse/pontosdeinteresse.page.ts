import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pontosdeinteresse',
  templateUrl: './pontosdeinteresse.page.html',
  styleUrls: ['./pontosdeinteresse.page.scss'],
})
export class PontosdeinteressePage{

  constructor(private router: Router) {
  }

  public voltar(){
    this.router.navigate(["criarpercursos"]);
  }

}
