import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { estiloMusical, MOCK_ESTILOS_MUSICAIS } from '../shared/mocks';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'easyMusic';

  estilosMusicais: estiloMusical[] = MOCK_ESTILOS_MUSICAIS;

  buscarForm: FormGroup = new FormGroup({
    "estiloMusical": new FormControl(null, Validators.required)
  });

  exibirMensagemAlerta: boolean = false;

  constructor(
    private router: Router
  ) {}
  
  ngOnInit(): void {}

  permitirAvancar() {
    if(null === this.buscarForm.get('estiloMusical')!.value) {
      this.exibirMensagemAlerta = true;
    } else {
      this.router.navigate(['/lista', this.buscarForm.get('estiloMusical')!.value])
    }
  }

}
