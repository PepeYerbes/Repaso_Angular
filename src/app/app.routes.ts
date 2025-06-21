import { Routes } from '@angular/router';
import { ListardoctoresComponent } from './componentes/listar-doctores/listar-doctores.component';
import { AgrearDoctorComponent } from './componentes/agrear-doctor/agrear-doctor.component';


export const routes: Routes = [
    {path: 'listar', component: ListardoctoresComponent},
    {path: 'agregar', component: AgrearDoctorComponent},
    {path: '', redirectTo: 'listar', pathMatch: 'full'},
    {path: '**', redirectTo: 'listar'}
    
];
