import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalhepercurso',
  templateUrl: './detalhepercurso.page.html',
  styleUrls: ['./detalhepercurso.page.scss'],
})
export class DetalhepercursoPage implements OnInit {
  dadospercurso: any;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.dadospercurso = this.router.getCurrentNavigation().extras.state.dadospercurso;
      }
    });
  }

  ngOnInit() {
  }

}
