import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { MainDiscoverComponent } from '../main-discover/main-discover.component';
import { HeaderComponent } from '../../layout/header/header.component';

@Component({
  selector: 'app-discover',
  standalone: true,
  imports: [MainDiscoverComponent, FooterComponent],
  templateUrl: './discover.component.html',
  styleUrl: './discover.component.scss'
})
export class DiscoverComponent {

}
