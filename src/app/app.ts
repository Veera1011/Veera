import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App implements OnInit {
  protected readonly title = signal('Hi, I’m Veeramanikandan');

   date=new Date();

  ngOnInit(): void {
      console.log(this.date);
  }
  
}
