import { Component } from '@angular/core';
import { Observable, interval } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css'],
})
export class UncommonPageComponent {
  //i18n Select
  public name: string = 'Marty';
  public gender: 'male' | 'female' = 'male';
  public predicadoMap = {
    male: ' el mejor amigo del Doc',
    female: ' la novia de Marty',
  };

  changeWord(): void {
    this.name = 'Jessica';
    this.gender = 'female';
  }

  // i19nPlural

  public clients: string[] = [
    'Genesis',
    'Osmara',
    'Liliana',
    'Aaron',
    'Fernanda',
    'Ivan',
    'Pedro',
  ];
  public clientsMap = {
    '=0': 'no tenemos clientes',
    '=1': 'tenemos un cliente esperando',
    other: 'tenemos # clientes',
  };

  deleteClient(): void {
    this.clients.shift();
  }

  //key value Pipe
  public person = {
    name: 'Esther',
    age: 23,
    address: 'Madrid, España',
  };

  //Async Pipe
  public myObservableTime: Observable<number> = interval(2000);

  public promiseValue: Promise<string> = new Promise((res, rej) => {
    setTimeout(() => {
      res('Tenemos respuesta en la promesa');
    }, 3000);
  });
}
