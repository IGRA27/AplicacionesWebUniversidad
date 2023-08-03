import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { LibroComponent } from './libro/libro.component';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ExternoComponent } from './externo/externo.component';
import { ZapatillaComponent } from './zapatilla/zapatilla.component';
//Array de routes- rutas
const routes: Routes=[
    {path:'home', component:HomeComponent},
    {path:'libro', component:LibroComponent},
    {path:'zapatilla', component:ZapatillaComponent},
    {path:'contacto', component:ContactoComponent},    
    {path:'externo', component:ExternoComponent},
    {path:'**', component:HomeComponent} //ruta 404 no se carga el componente
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}