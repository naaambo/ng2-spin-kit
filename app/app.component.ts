import {Component, OnInit} from '@angular/core';
import * as spinner from './spinners';

@Component({
  moduleId: module.id,
  selector: 'app',
  directives: [
    spinner.RotatingPlaneComponent,
    spinner.DoubleBounceComponent,
    spinner.WaveComponent,
    spinner.WanderingCubesComponent,
    spinner.PulseComponent,
    spinner.ChasingDotsComponent,
    spinner.CircleComponent,
    spinner.ThreeBounceComponent,
    spinner.CubeGridComponent,
    spinner.WordPressComponent,
    spinner.FadingCircleComponent,
    spinner.FoldingCubeComponent
  ],
  styleUrls: ['app.css'],
  templateUrl: './app.html'
})

export class AppComponent implements OnInit {
  ngOnInit(): any {
    console.log('App initialized!');
  }
}
