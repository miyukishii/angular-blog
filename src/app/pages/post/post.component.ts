import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Posts } from 'src/app/data/posts';

@Component({
  selector: 'post-content',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  pictureCover: string = ""
  title: string = ""
  text: string = ""
  private slug: string | null = ""

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      value => this.slug = value.get("slug")
    )
    this.setValuesToComponent(this.slug)
  }
  setValuesToComponent(slug: string | null): void {
    const post = Posts.find((post) => post.slug === slug)
    if (post) {
      console.log(post)
      this.pictureCover = post.picture
      this.title = post.title
      this.text = post.text
    }
  }
}
