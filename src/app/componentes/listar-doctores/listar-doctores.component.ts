import { Component } from '@angular/core';
import { MedicosService } from '../../doctores.service';
import { Medicos } from '../../models/medicos';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listar-doctores',
  imports: [CommonModule],
  templateUrl: './listar-doctores.component.html',
  styleUrl: './listar-doctores.component.css'
})
export class ListardoctoresComponent {

  mismedicos!: Medicos[];
  constructor(private medicosService:MedicosService) {
    
  }
  ngOnInit(): void {
    this.mismedicos = this.medicosService.getAll();
    console.log(this.medicosService);
  let doctores = this.medicosService.getById(1004);
  console.log(doctores);
  doctores= this.medicosService.getById(1003);
  console.log(doctores);

  this.medicosService.delete(1003);
  this.medicosService.delete(1004);
   
  }
}
