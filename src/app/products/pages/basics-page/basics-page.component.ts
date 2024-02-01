import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';



@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css',
})
export class BasicsPageComponent {

  public lowerName: string = 'bryan';
  public upperName: string = 'BRYAN';
  public fullName: string = 'bRyAn lEmA';

  public customDate = new Date();

 }
