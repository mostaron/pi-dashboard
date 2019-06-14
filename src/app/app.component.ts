import { Component } from '@angular/core';
import {CalendarService} from "./services/calendar.service";
import {WeatherService} from "./services/weather.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pi-dashboard';
  now = new Date();
  today = new Date();
  calc: Date[] = [];
  constructor(public calendarService: CalendarService,
              public weatherService: WeatherService) {
    setInterval(()=>{
      let temp = new Date();
      if(temp.getDate() != this.now.getDate()){
        this.today = temp;
      }
      this.now = temp;
    }, 1000);

    this.initCalc();
    this.weatherService.getNowWeather()
      .subscribe(item => {
      console.log(item);
    })
    this.weatherService.getForecast()
      .subscribe(item => {
        console.log(item);
      })
  }

  public initCalc(){
    let date = new Date();
    date.setDate(1);
    for(let i=0; i<date.getDay(); i++){
      this.calc.push(null);
    }
    for(let i=this.calc.length - 1, j=0; i>=0; i--, j++){
      const c = new Date();
      c.setDate(0 - i)
      this.calc[j] = c;
    }

    for(let month = date.getMonth(), i=1; date.getMonth() == month; date.setDate(date.getDate() + 1), i++){
      const c = new Date();
      c.setDate(date.getDate())
      this.calc.push(c);
    }
    for(;date.getDay() != 0; date.setDate(date.getDate() + 1)){
      const c = new Date();
      c.setMonth(date.getMonth())
      c.setDate(date.getDate())
      this.calc.push(c);
    }
  }

  public getDay(date: Date){
	  switch(date.getDay()){
		  case 0: return "星期日";
		  case 1: return "星期一";
		  case 2: return "星期二";
		  case 3: return "星期三";
		  case 4: return "星期四";
		  case 5: return "星期五";
		  case 6: return "星期六";
	  }
  }

  public formatDate(date: Date, fmt: string): string{ 
     var o = { 
        "M+" : date.getMonth()+1,                 //月份 
        "d+" : date.getDate(),                    //日 
        "h+" : date.getHours(),                   //小时 
        "m+" : date.getMinutes(),                 //分 
        "s+" : date.getSeconds(),                 //秒 
        "q+" : Math.floor((date.getMonth()+3)/3), //季度 
        "S"  : date.getMilliseconds()             //毫秒 
    }; 
    if(/(y+)/.test(fmt)) {
            fmt=fmt.replace(RegExp.$1, (date.getFullYear()+"").substr(4 - RegExp.$1.length)); 
    }
     for(let k in o) {
        if(new RegExp("("+ k +")").test(fmt)){
             fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
         }
     }
    return fmt; 
}        
}
