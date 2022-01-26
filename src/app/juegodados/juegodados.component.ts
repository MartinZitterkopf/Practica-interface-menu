import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-juegodados',
	templateUrl: './juegodados.component.html',
	styleUrls: ['./juegodados.component.css']
})
export class JuegodadosComponent implements OnInit {
	public valor1: number = 6;
	public valor2: number = 6;
	public valor3: number = 6;
	public resultado: string = "Tire los dados para empezar a jugar";

	constructor() {
	}

	retornarAleatorio() {
		return Math.trunc(Math.random() * 6) + 1;
	  }
	
	tirar() {
		this.valor1 = this.retornarAleatorio();
		this.valor2 = this.retornarAleatorio();
		this.valor3 = this.retornarAleatorio();
		if (this.valor1==this.valor2 && this.valor1==this.valor3)    
		  this.resultado='Usted Ganó felicidades';
		else
		  this.resultado='Desafortunadamente Perdió';
	  }

	ngOnInit(): void {
	}

}
