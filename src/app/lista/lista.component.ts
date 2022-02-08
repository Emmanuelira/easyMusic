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
    "estiloMusical": new FormControl(localStorage.getItem("estiloMusical"), Validators.required)
  });

  buscarNomeForm: FormGroup = new FormGroup({
    "nomeArtista": new FormControl(null, Validators.required)
  });

  artistasTotal: artista[] = [];

  artistas: artista[] = [];

  quantidadeCards: number = 10;

  exibirMais: boolean = false;

  loading: boolean = true;

  constructor() {}

  ngOnInit(): void {
    this.loadingFunction();
    this.carregarCards();
  }

  loadingFunction(): void {
    this.loading = true;
    setTimeout(()=>{
      this.loading = false;
    }, 1000);
  }

  carregarCards(tipoPesquisa: string = 'estilo'): void {
    if(tipoPesquisa === 'estilo') {
      this.buscarNomeForm.get('nomeArtista')?.setValue(null);
      this.artistasTotal = MOCK_ARTISTAS;
      if(this.estiloMusical !== 'all') {
        this.artistasTotal = MOCK_ARTISTAS.filter(art => art.estiloMusical === this.estiloMusical);
      }
    } else {
      this.buscarEstiloForm.get('estiloMusical')?.setValue(null);
      this.artistasTotal = [];
      for(let art of MOCK_ARTISTAS) {
        if(art.nome.toLowerCase().includes(this.nomeArtista.toLowerCase())) {
          this.artistasTotal.push(art);
        }
      }
    }
    this.artistasTotal.forEach(art => art.nomeImagem = `../../assets/images/${art.nomeImagem}`);
    this.controleQuantidade();
  }

  controleQuantidade(): void {
    this.loadingFunction();
    this.artistas = this.artistasTotal.slice(0,this.quantidadeCards);
    this.showMore();
  }

  showMore(): void {
    if(this.artistasTotal.length > this.artistas.length) {
      this.exibirMais = true;
    } else {
      this.exibirMais = false;
    }
  }

  aumentarQuantidadeCards(): void {
    this.quantidadeCards += 10;
    this.controleQuantidade();
  }

  pesquisar(tipoPesquisa: string): void {
    this.quantidadeCards = 10;
    this.carregarCards(tipoPesquisa);
  }

  get estiloMusical() {
    return this.buscarEstiloForm.get('estiloMusical')?.value;
  }

  get nomeArtista() {
    return this.buscarNomeForm.get('nomeArtista')?.value;
  }

}