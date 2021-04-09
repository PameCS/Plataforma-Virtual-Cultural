import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-youtubelive',
  templateUrl: './youtubelive.component.html',
  styleUrls: ['./youtubelive.component.css']
})
export class YoutubeliveComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }

}
