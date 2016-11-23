"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var rotating_plane_component_1 = require('./spinner/rotating-plane.component');
var double_bounce_component_1 = require('./spinner/double-bounce.component');
var wave_1 = require('./spinner/wave');
var wandering_cubes_1 = require('./spinner/wandering-cubes');
var pulse_1 = require('./spinner/pulse');
var chasing_dots_1 = require('./spinner/chasing-dots');
var circle_1 = require('./spinner/circle');
var three_bounce_1 = require('./spinner/three-bounce');
var cube_grid_1 = require('./spinner/cube-grid');
var word_press_1 = require('./spinner/word-press');
var fading_circle_1 = require('./spinner/fading-circle');
var folding_cube_1 = require('./spinner/folding-cube');
var core_1 = require("@angular/core");
var SpinnerModule = (function () {
    function SpinnerModule() {
    }
    SpinnerModule = __decorate([
        core_1.NgModule({
            declarations: [
                rotating_plane_component_1.RotatingPlaneComponent,
                double_bounce_component_1.DoubleBounceComponent,
                wave_1.WaveComponent,
                wandering_cubes_1.WanderingCubesComponent,
                pulse_1.PulseComponent,
                chasing_dots_1.ChasingDotsComponent,
                circle_1.CircleComponent,
                three_bounce_1.ThreeBounceComponent,
                cube_grid_1.CubeGridComponent,
                word_press_1.WordPressComponent,
                fading_circle_1.FadingCircleComponent,
                folding_cube_1.FoldingCubeComponent
            ],
            exports: [
                rotating_plane_component_1.RotatingPlaneComponent,
                double_bounce_component_1.DoubleBounceComponent,
                wave_1.WaveComponent,
                wandering_cubes_1.WanderingCubesComponent,
                pulse_1.PulseComponent,
                chasing_dots_1.ChasingDotsComponent,
                circle_1.CircleComponent,
                three_bounce_1.ThreeBounceComponent,
                cube_grid_1.CubeGridComponent,
                word_press_1.WordPressComponent,
                fading_circle_1.FadingCircleComponent,
                folding_cube_1.FoldingCubeComponent
            ]
        })
    ], SpinnerModule);
    return SpinnerModule;
}());
exports.SpinnerModule = SpinnerModule;
