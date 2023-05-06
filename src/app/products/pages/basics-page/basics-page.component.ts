import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css'],
})
export class BasicsPageComponent {
  public wordLower: string = 'ejemplo';
  public wordUpper: string = 'EJEMPLO';
  public fullWord: string = 'eJEmpLo';

  public customDate: Date = new Date();
}
