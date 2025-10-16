import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./header/header";
import { Hero } from "./hero/hero";
import { Landing } from "./landing/landing";
import { Counter } from "./counter/counter";
import { Testimonial } from "./testimonial/testimonial";
import { Footer } from "./footer/footer";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Hero, Landing, Counter, Testimonial, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('nexcent');
}
