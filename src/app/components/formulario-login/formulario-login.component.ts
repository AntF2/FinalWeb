import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProducosService } from '../../service/producos.service';

@Component({
  selector: 'app-formulario-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario-login.component.html',
  styleUrl: './formulario-login.component.css'
})
export class FormularioLoginComponent {

  constructor( private servicio:ProducosService){}
  email:any;
  password:any;

  login(formulario:any){
    this.servicio.getBellezaJoyeria(formulario.value).subscribe(acceso=>{
      //console.log(acceso)
      let token=acceso.accessToken
    if(token!=''){
      localStorage.setItem("login", "true")
    }
    })
    //console.log(formulario.value)
    
   
 
  }

  ngOnit(){
    this.servicio.getUtilesEscolares().subscribe(),
    this.servicio.getAccesoriosMascotas().subscribe(),
    this.servicio.getBellezaJoyeria().subscribe(),
    this.servicio.getInstrumentosMusicales().subscribe(),
    this.servicio.getTecnologia().subscribe(),
    this.servicio.getUtilesEscolares().subscribe()
  }

}
