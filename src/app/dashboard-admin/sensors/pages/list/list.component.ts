import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { SensorsService } from '../../services/sensors.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public feedConductivityData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [],
        label: 'Conductividad de alimentación',
        backgroundColor: 'rgba(148,159,177,0.2)',
        borderColor: 'rgba(148,159,177,1)',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        fill: 'origin',
      }
    ],
    labels: []
  };

  public conductivityPermeateMembranesData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [],
        label: 'Conductividad de permeado de membranas',
        backgroundColor: 'rgba(148,159,177,0.2)',
        borderColor: 'rgba(148,159,177,1)',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        fill: 'origin',
      }
    ],
    labels: []
  };

  public conductivityPermeateVesselsData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [],
        label: 'Conductividad de permeado de vasijas',
        backgroundColor: 'rgba(148,159,177,0.2)',
        borderColor: 'rgba(148,159,177,1)',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        fill: 'origin',
      }
    ],
    labels: []
  };

  public feedPressureVesselsData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [],
        label: 'Presión de alimentación de vasijas',
        backgroundColor: 'rgba(148,159,177,0.2)',
        borderColor: 'rgba(148,159,177,1)',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        fill: 'origin',
      }
    ],
    labels: []
  };

  public feedTemperatureData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [],
        label: 'Temperatura de alimentación',
        backgroundColor: 'rgba(148,159,177,0.2)',
        borderColor: 'rgba(148,159,177,1)',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        fill: 'origin',
      }
    ],
    labels: []
  };

  public membraneFeedPressureData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [],
        label: 'Presión de alimentación de membranas',
        backgroundColor: 'rgba(148,159,177,0.2)',
        borderColor: 'rgba(148,159,177,1)',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        fill: 'origin',
      }
    ],
    labels: []
  };

  public membranePermeateData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [],
        label: 'Caudal de permeado de membranas',
        backgroundColor: 'rgba(148,159,177,0.2)',
        borderColor: 'rgba(148,159,177,1)',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        fill: 'origin',
      }
    ],
    labels: []
  };

  public membraneRejectionFlowData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [],
        label: 'Caudal de rechazo de membranas',
        backgroundColor: 'rgba(148,159,177,0.2)',
        borderColor: 'rgba(148,159,177,1)',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        fill: 'origin',
      }
    ],
    labels: []
  };

  public membraneRejectionPressureData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [],
        label: 'Presión de rechazo de membranas',
        backgroundColor: 'rgba(148,159,177,0.2)',
        borderColor: 'rgba(148,159,177,1)',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        fill: 'origin',
      }
    ],
    labels: []
  };

  public rejectPressureVesselsData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [],
        label: 'Presión de rechazo de vasijas',
        backgroundColor: 'rgba(148,159,177,0.2)',
        borderColor: 'rgba(148,159,177,1)',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        fill: 'origin',
      }
    ],
    labels: []
  };

  public vesselsFeedingFlowData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [],
        label: 'Caudal de alimentación de vasijas',
        backgroundColor: 'rgba(148,159,177,0.2)',
        borderColor: 'rgba(148,159,177,1)',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        fill: 'origin',
      }
    ],
    labels: []
  };

  public vesselsPermeateFlowData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [],
        label: 'Flujo de permeado de vasijas',
        backgroundColor: 'rgba(148,159,177,0.2)',
        borderColor: 'rgba(148,159,177,1)',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        fill: 'origin',
      }
    ],
    labels: []
  };

  constructor( private sensorsService: SensorsService, private datePipe: DatePipe ) { }

  ngOnInit(): void {
    this.getDataFeedConductivity();
    this.getDataConductivityPermeatemembranes();
    this.getDataConductivityPermeateVessels();
    this.getDataFeedPressureVessels();
    this.getDataFeedTemperature();
    this.getDataMembraneFeedPressure();
    this.getDataMembranePermeate();
    this.getDataMembraneRejectionFlow();
    this.getDataMembraneRejectionPressure()
    this.getDataRejectPressureVessels()
    this.getDataVesselsFeedingFlow()
    this.getDataVesselsPermeateFlow()
  }

  getDataFeedConductivity(){
    this.sensorsService.getFeedConductivity().subscribe(
      result => {
        for (let x in result) {
          this.feedConductivityData.datasets[0].data.push(result[x].number)
          this.feedConductivityData.labels?.push(this.datePipe.transform(result[x].time, 'yyyy-MM-dd - HH:mm:ss'))
        }
      }
    )
  }

  getDataConductivityPermeatemembranes(){
    this.sensorsService.getConductivityPermeatemembranes().subscribe(
      result => {
        for (let x in result) {
          this.conductivityPermeateMembranesData.datasets[0].data.push(result[x].number)
          this.conductivityPermeateMembranesData.labels?.push(this.datePipe.transform(result[x].time, 'yyyy-MM-dd - HH:mm:ss'))
        }
      }
    )
  }

  getDataConductivityPermeateVessels(){
    this.sensorsService.getConductivityPermeateVessels().subscribe(
      result => {
        for (let x in result) {
          this.conductivityPermeateVesselsData.datasets[0].data.push(result[x].number)
          this.conductivityPermeateVesselsData.labels?.push(this.datePipe.transform(result[x].time, 'yyyy-MM-dd - HH:mm:ss'))
        }
      }
    )
  }

  getDataFeedPressureVessels(){
    this.sensorsService.getFeedPressureVessels().subscribe(
      result => {
        for (let x in result) {
          this.feedPressureVesselsData.datasets[0].data.push(result[x].number)
          this.feedPressureVesselsData.labels?.push(this.datePipe.transform(result[x].time, 'yyyy-MM-dd - HH:mm:ss'))
        }
      }
    )
  }

  getDataFeedTemperature(){
    this.sensorsService.getFeedTemperature().subscribe(
      result => {
        for (let x in result) {
          this.feedTemperatureData.datasets[0].data.push(result[x].number)
          this.feedTemperatureData.labels?.push(this.datePipe.transform(result[x].time, 'yyyy-MM-dd - HH:mm:ss'))
        }
      }
    )
  }

  getDataMembraneFeedPressure(){
    this.sensorsService.getMembraneFeedPressure().subscribe(
      result => {
        for (let x in result) {
          this.membraneFeedPressureData.datasets[0].data.push(result[x].number)
          this.membraneFeedPressureData.labels?.push(this.datePipe.transform(result[x].time, 'yyyy-MM-dd - HH:mm:ss'))
        }
      }
    )
  }

  getDataMembranePermeate(){
    this.sensorsService.getMembranePermeate().subscribe(
      result => {
        for (let x in result) {
          this.membranePermeateData.datasets[0].data.push(result[x].number)
          this.membranePermeateData.labels?.push(this.datePipe.transform(result[x].time, 'yyyy-MM-dd - HH:mm:ss'))
        }
      }
    )
  }

  getDataMembraneRejectionFlow(){
    this.sensorsService.getMembraneRejectionFlow().subscribe(
      result => {
        for (let x in result) {
          this.membraneRejectionFlowData.datasets[0].data.push(result[x].number)
          this.membraneRejectionFlowData.labels?.push(this.datePipe.transform(result[x].time, 'yyyy-MM-dd - HH:mm:ss'))
        }
      }
    )
  }

  getDataMembraneRejectionPressure(){
    this.sensorsService.getMembraneRejectionPressure().subscribe(
      result => {
        for (let x in result) {
          this.membraneRejectionPressureData.datasets[0].data.push(result[x].number)
          this.membraneRejectionPressureData.labels?.push(this.datePipe.transform(result[x].time, 'yyyy-MM-dd - HH:mm:ss'))
        }
      }
    )
  }

  getDataRejectPressureVessels(){
    this.sensorsService.getRejectPressureVessels().subscribe(
      result => {
        for (let x in result) {
          this.rejectPressureVesselsData.datasets[0].data.push(result[x].number)
          this.rejectPressureVesselsData.labels?.push(this.datePipe.transform(result[x].time, 'yyyy-MM-dd - HH:mm:ss'))
        }
      }
    )
  }

  getDataVesselsFeedingFlow(){
    this.sensorsService.getVesselsFeedingFlow().subscribe(
      result => {
        for (let x in result) {
          this.vesselsFeedingFlowData.datasets[0].data.push(result[x].number)
          this.vesselsFeedingFlowData.labels?.push(this.datePipe.transform(result[x].time, 'yyyy-MM-dd - HH:mm:ss'))
        }
      }
    )
  }

  getDataVesselsPermeateFlow(){
    this.sensorsService.getVesselsPermeateFlow().subscribe(
      result => {
        for (let x in result) {
          this.vesselsPermeateFlowData.datasets[0].data.push(result[x].number)
          this.vesselsPermeateFlowData.labels?.push(this.datePipe.transform(result[x].time, 'yyyy-MM-dd - HH:mm:ss'))
        }
      }
    )
  }
}
