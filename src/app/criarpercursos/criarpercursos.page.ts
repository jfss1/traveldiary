import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-criarpercursos',
  templateUrl: './criarpercursos.page.html',
  styleUrls: ['./criarpercursos.page.scss'],
})
export class CriarpercursosPage{

  constructor(private router: Router) {
  }

  public criarPercurso(){
    this.router.navigate(['percursos']);
  }

  public criarPonto(){
    this.router.navigate(['pontosdeinteresse']);
  }
}
