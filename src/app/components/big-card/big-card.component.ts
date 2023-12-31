import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {
  @Input()
  pictureCover: string = ""
  @Input()
  cardTitle: string = ""
  @Input()
  postDate: string = ""
  @Input()
  abstract: string = ""
  @Input()
  slug: string = ""

  constructor() {}
  ngOnInit(): void {}
}
