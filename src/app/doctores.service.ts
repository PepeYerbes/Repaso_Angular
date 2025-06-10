import { Injectable } from '@angular/core';
import doctores from './data/doctores.json';
import { Medicos } from './models/medicos';

@Injectable({
  providedIn: 'root'
})
export class MedicosService {

  medicos:Medicos[]=doctores;

  constructor() { }

  ngOnInit(): void {

}

getAll(): Medicos[] {
    const recuperaDatos: Medicos[] = JSON.parse(localStorage.getItem('medicos') ?? '[]');
    if (recuperaDatos.length === 0) {
      this.medicos = doctores;
    } else {
      this.medicos = recuperaDatos;
    } 
    return this.medicos;
  }

  getById(id:number): Medicos | null {
    const encontrado = this.medicos.find(medico => medico.id === id);
    return encontrado || null;
  }
  create(objeto:Medicos):void{
    this.medicos.push(objeto);
    localStorage.setItem('medicos', JSON.stringify(this.medicos));
  }
  update(objeto: Medicos):void{
    const index = this.medicos.findIndex(medico => medico.id === objeto.id);
    if (index !== -1) {
      this.medicos[index] = objeto;
      localStorage.setItem('medicos', JSON.stringify(this.medicos));
    } else {
      console.error('Medico not found for update');
    }
  }
  delete(id:number):void {
    const index = this.medicos.findIndex(medico => medico.id === id);
    if (index !== -1) {
      this.medicos.splice(index, 1);
      localStorage.setItem('medicos', JSON.stringify(this.medicos));
    }
  }

}
