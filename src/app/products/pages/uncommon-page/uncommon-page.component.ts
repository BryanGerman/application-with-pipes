import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable, interval } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css',
})
export class UncommonPageComponent { 
  //i18NSelect

  public name: string = 'Bryan'
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  }

  changeClient():void{
    this.name = 'Melissa';
    this.gender = 'female';
  }

  public clients: string[] = ['Maria', 'Bryan', 'Andres']
  public clientsMap = {
    '=0': "no tenemos ningún cliente esperando",
    '=1': "tenemos un cliente esperando",
    '=2': "tenemos 2 clientes esperando",
    'other': "tenemos # clientes esperando"
  }

  deleteClient(): void{
    this.clients.shift();
  }

  public person = {
    name: 'Bryan',
    age: 28,
    address: 'Quito'
  }

  public myObservableTimer: Observable<number> = interval(2000);

  public myPromise: Promise<string> = new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve("Tenemos data en la promesa")
    }, 3500)
  } )
}
