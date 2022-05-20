import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    if (window.innerWidth < 610){
      (document.querySelector('.items')as HTMLElement).style.display = 'none';
      // (document.querySelector('.items_mobile')as HTMLElement).style.display = 'block';
    }
  }

}
