import { Component } from '@angular/core';
import { Medicos } from '../../models/medicos';
import { MedicosService } from '../../doctores.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-agrear-doctor',
  imports: [FormsModule],
  templateUrl: './agrear-doctor.component.html',
  styleUrl: './agrear-doctor.component.css'
})
export class AgrearDoctorComponent {

  mensajeExito: string = '';

  doctor: Medicos = {
    id: 0,
    nombre: '',
    especialidad: '',
    anios_experiencia: 0,
    ciudad: '',
    telefono: '',
    foto: ''
  };

  constructor(private medicosService: MedicosService) { }

  esFemenino: boolean = false;

  asignarFotoAleatoria() {
    let genero;
    const id = Math.floor(Math.random() * 100);
    if (this.esFemenino) {
      genero = 'women';
    } else {
      genero = 'men';
    }
    this.doctor.foto = `https://randomuser.me/api/portraits/${genero}/${id}.jpg`;

}

guardar() {
  this.medicosService.create(this.doctor);
  this.limpiar();
  console.log('Doctor:', this.doctor);
  console.log('¿Es femenino?:', this.esFemenino);
}

limpiar(): void {
  this.doctor = {
    id: 0,
    nombre: '',
    especialidad: '',
    anios_experiencia: 0,
    ciudad: '',
    telefono: '',
    foto: ''
  };
  this.esFemenino = false;

  this.mensajeExito = '!Formulario enviado Exitosamente!';
  setTimeout(() => {
    this.mensajeExito = '';
  }, 3000);
}
}