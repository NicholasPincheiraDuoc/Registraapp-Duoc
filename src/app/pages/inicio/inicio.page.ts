import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {


  //datos = null;
  
  constructor(private menuController: MenuController) {
    
  }
 

  ngOnInit() {
    
  }
  async Logout(){
    

    if(localStorage.getItem('ingresado')){
      localStorage.removeItem('ingresado')
       return true; 
    }
   
    
  }


  

  mostrarMenu(){
    this.menuController.open('first');
  }


}
