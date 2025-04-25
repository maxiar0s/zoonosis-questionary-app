import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-front-page',
  imports: [RouterLink],
  templateUrl: './front-page.component.html',
  standalone: true,
})
export class FrontPageComponent {}
