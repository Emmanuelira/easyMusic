import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { artista, estiloMusical, MOCK_ARTISTAS, MOCK_ESTILOS_MUSICAIS } from '../shared/mocks';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  estilosMusicais: estiloMusical[] = MOCK_ESTILOS_MUSICAIS;

  buscarEstiloForm: FormGroup = new FormGroup({
    "estiloMusical": new FormControl(null, Validators.required)
  });

  buscarNomeForm: FormGroup = new FormGroup({
    "nomeArtista": new FormControl(null, Validators.required)
  });

  artistasTotal: artista[] = MOCK_ARTISTAS;

  artistas: artista[] = [];

  quantidadeCards: number = 10;

  exibirMais: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.carregarCardsEstilo();
  }

  carregarCardsEstilo() {
    this.artistasTotal = MOCK_ARTISTAS;
    if(!this.estiloMusical) {
      this.buscarEstiloForm.get('estiloMusical')?.setValue(localStorage.getItem("estiloMusical"));
    }
    if(this.estiloMusical !== 'all') {
      this.artistasTotal = MOCK_ARTISTAS.filter(art => art.estiloMusical === this.estiloMusical);
    }
    this.artistasTotal.forEach(art => art.nomeImagem = `../../assets/images/${art.nomeImagem}`);
    this.controleQuantidade();
  }

  controleQuantidade() {
    this.artistas = this.artistasTotal.slice(0,this.quantidadeCards);
    this.showMore();
  }

  showMore() {
    if(this.estiloMusical !== 'all') {
      const total = this.artistas.filter(art => art.estiloMusical === this.estiloMusical);
      if (total.length > this.artistas.length) {
        this.exibirMais = true;
      } else {
        this.exibirMais = false;
      }
    } else {
      if(MOCK_ARTISTAS.length > this.artistas.length) {
        this.exibirMais = true;
      } else {
        this.exibirMais = false;
      }
    }
  }

  aumentarQuantidadeCards() {
    this.quantidadeCards += 10;
    this.controleQuantidade();
  }

  pesquisar() {
    this.quantidadeCards = 10;
    this.carregarCardsEstilo();
  }

  carregarCardsNome() {
    this.artistasTotal = MOCK_ARTISTAS.filter(art => art.nome === this.nomeArtista);
    this.artistasTotal.forEach(art => art.nomeImagem = `../../assets/images/${art.nomeImagem}`);
    this.controleQuantidade();
  }

  get estiloMusical() {
    return this.buscarEstiloForm.get('estiloMusical')?.value;
  }

  get nomeArtista() {
    return this.buscarNomeForm.get('nomeArtista')?.value;
  }

}