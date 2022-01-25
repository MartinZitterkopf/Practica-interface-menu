import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-juegodados',
	templateUrl: './juegodados.component.html',
	styleUrls: ['./juegodados.component.css']
})
export class JuegodadosComponent implements OnInit {
	public valor1: number;
	public valor2: number;
	public valor3: number;
	public resultado: string = "";

	constructor() {
		this.valor1 = this.retornarAleatorio();
		this.valor2 = this.retornarAleatorio();
		this.valor3 = this.retornarAleatorio();
	}

	retornarAleatorio() {
		return Math.trunc(Math.random() * 6) + 1;
	  }
	
	tirar() {
		this.valor1 = this.retornarAleatorio();
		this.valor2 = this.retornarAleatorio();
		this.valor3 = this.retornarAleatorio();
		if (this.valor1==this.valor2 && this.valor1==this.valor3)    
		  this.resultado='Ganó';
		else
		  this.resultado='Perdió';
	  }

	ngOnInit(): void {
	}

}
