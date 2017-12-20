import { Component, OnInit, ViewChild } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

declare var $: any;
declare var Morris: any;

@Component({
  selector: 'app-donutchart',
  encapsulation: ViewEncapsulation.None,
  providers: [],
  template: `
    <div class="col-lg-4">
      <div class="panel panel-default">
          <div class="panel-heading">
              <i class="fa fa-bar-chart-o fa-fw"></i>Agent Donut Chart 
          </div>
          <div class="panel-body">
              <div id="morris-donut-chart"></div>
          </div>
      </div>
    </div>
  `

})
export class DonutChartComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    Morris.Donut({
      element: 'morris-donut-chart',
      data: [{
        label: "Jimmy",
        value: 12
      }, {
        label: "Trump",
        value: 30
      }, {
        label: "Hillary",
        value: 1
      }],
      resize: true
    });
  }


}
