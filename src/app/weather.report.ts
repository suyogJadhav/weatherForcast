export class WeatherReport {
  name: string;
  htemp : string;
  ltemp: string;

  constructor(private name:string,private htemp:string,private ltemp:string){
    this.name=name;
    this.htemp=htemp;
    this.ltemp=ltemp;
  }
}
