import { Component } from '@angular/core';
import { HeaderComponent } from '../../layout/header/header.component';
import { FooterComponent } from '../../discover/footer/footer.component';
import { MainJoinComponent } from '../main-join/main-join.component';

@Component({
  selector: 'app-join',
  standalone: true,
  imports: [MainJoinComponent, HeaderComponent, FooterComponent],
  templateUrl: './join.component.html',
  styleUrl: './join.component.scss'
})
export class JoinComponent {

}
