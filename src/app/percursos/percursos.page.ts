import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-percursos',
  templateUrl: './percursos.page.html',
  styleUrls: ['./percursos.page.scss'],
})
export class PercursosPage{

  percursos = {
    TNI:{
      "nome" : "Turismo No Inverno",
      "destino" : "Sevilha",
      "pontos" : [{
          "nome" : "Torre del Oro",
          "img" : "torreDelOro.png",
          "descricao" : "A Torre del Oro é um dos monumentos mais emblemáticos de Sevilha, uma antiga construção defensiva que atualmente abriga o Museu Naval."
      },
      {
          "nome" : "Giralda",
          "img" : "giralda.png",
          "descricao" : "Nascida como minarete da mesquita e, mais tarde, convertida em campanário da Catedral, a Giralda é o monumento mais emblemático de Sevilha."
      },
      {
          "nome" : "Plaza de España",
          "img" : "plazaDeEspana.png",
          "descricao" : "Construída para a Exposição Ibero-americana de 1929, a Praça de Espanha é um espaço monumental e um dos principais símbolos da identidade de Sevilha. "
      }
      ]
    }
  }

  constructor(private router: Router) {
  }

  public verPercurso(nome: string) {
    console.log(this.percursos[nome]);
    let navigationExtras: NavigationExtras;

    
    navigationExtras = {
      state: {
        dadospercurso: this.percursos[nome]
      }
    };
    
    // Utilização de Extras State (novo desde o Angular 7.2)
    this.router.navigate(['detalhepercurso'], navigationExtras);
  }

  public criarPercurso(){
    this.router.navigate(['criarpercursos']);
  }
}
