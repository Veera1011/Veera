import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {

  location:string='Chidambaram, Tamil Nadu'
  github:string='https://github.com/VEERA5603'
  phone:string='+91 9360015478'
  email:string='eveera5603@gmail.com'
  linkedin:string='https://www.linkedin.com/in/veeramanikandan-e-335559312'
  resume:string='https://drive.google.com/file/d/1Knn_RDyicSCN3nl89-D3THJ0X-NAF29e/view'

}
