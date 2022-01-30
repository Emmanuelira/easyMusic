import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { estiloMusical } from '../shared/models/estiloMusical';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'easyMusic';

  estilosMusicais: estiloMusical[] = [
    {
      label: "Forró",
      nome: "forro"
    },
    {
      label: "Rock",
      nome: "rock"
    },
    {
      label: "Samba",
      nome: "samba"
    },
    {
      label: "Outros",
      nome: "outros"
    }
  ];

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
      this.exibirMensagemAlerta = false; //REDIRECIONAR PARA NOVA PÁGINA
      this.router.navigate(['/lista', this.buscarForm.get('estiloMusical')!.value])
    }
  }

}
