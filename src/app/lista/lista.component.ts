import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // title = 'easyMusic';

  // estilosMusicais: estiloMusical[] = MOCK_ESTILOS_MUSICAIS;

  // buscarForm: FormGroup = new FormGroup({
  //   "estiloMusical": new FormControl(null, Validators.required)
  // });

  // exibirMensagemAlerta: boolean = false;

  // constructor(
  //   private router: Router
  // ) {}
  
  // ngOnInit(): void {}

  // permitirAvancar() {
  //   if(null === this.buscarForm.get('estiloMusical')!.value) {
  //     this.exibirMensagemAlerta = true;
  //   } else {
  //     this.router.navigate(['/lista', this.buscarForm.get('estiloMusical')!.value])
  //   }
  // }

}
