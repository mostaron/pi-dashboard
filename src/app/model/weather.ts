export class Basic {
  cid: string;
  location: string;
  parent_city: string;
  admin_area: string;
  cnty: string;
  lat: number;
  lon: number;
  tz: string;
}

export class Update {
  loc: Date;
  utc: Date;
}

export class NowWeather {
  cloud: number; //云量
  cond_code: number; //天气代码
  cond_txt: string; //天气描述
  fl: number; //体感温度
  hum: number; //相对湿度
  pcpn: number; //降水量
  pres: number; //大气压强
  tmp: number; //温度
  vis: number; //能见度
  wind_deg: number; //风向360角度
  wind_dir: string; //风向
  wind_sc: number; //风力
  wind_spd: number; //风速，公里/小时
}

export class DayWeather {
  cond_code_d: number; //白天天气状况代码
  cond_code_n: number; //夜间天气状况代码
  cond_txt_d: string; //白天天气状况描述
  cond_txt_n: string; //晚间天气状况描述
  date: Date; //预报日期
  hum: number; //相对湿度
  mr: string; //月升时间
  ms: string; //月落时间
  pcpn: number; //降水量
  pop: number;
  pres: number; //大气压强
  sr: string; //日出时间
  ss: string; //日落时间
  tmp_max: number; //最高温度
  tmp_min: number; //最低温度
  vis: number; //能见度
  wind_deg: number; //风向360角度
  wind_dir: string; //风向
  wind_sc: number; //风力
  wind_spd: number; //风速，公里/小时
}

export class HourWeather {
  cloud: number; //云量
  cond_code: number; //天气代码
  cond_txt: string; //天气描述
  dew: number; //露点温度
  hum: number; //相对湿度
  pop: number; //降水概率，百分比
  pcpn: number; //降水量
  pres: number; //大气压强
  time: Date; //预报时间
  tmp: number; //温度
  wind_deg: number; //风向360角度
  wind_dir: string; //风向
  wind_sc: number; //风力
  wind_spd: number; //风速，公里/小时
}

export class LifeStyle {
  type: string; //comf：舒适度指数、cw：洗车指数、drsg：穿衣指数、flu：感冒指数、
  // sport：运动指数、trav：旅游指数、uv：紫外线指数、air：空气污染扩散条件指数、
  // ac：空调开启指数、ag：过敏指数、gl：太阳镜指数、mu：化妆指数、airc：晾晒指数、
  // ptfc：交通指数、fsh：钓鱼指数、spi：防晒指数

  brf: string; //生活指数简介
  txt: string; //生活指数详细描述
}

export class NowWeatherBox {
  basic: Basic;
  update: Update;
  status: string;
  now: NowWeather;
}

export class NowWeatherResult {
  HeWeather6: NowWeatherBox[];
}

export class ForecastWeatherBox {
  basic: Basic;
  update: Update;
  status: string;
  daily_forecast: DayWeather[];
}

export class ForecastWeatherResult {
  HeWeather6: ForecastWeatherBox[];
}

export class HourWeatherBox {
  basic: Basic;
  update: Update;
  status: string;
  hourly: HourWeather[];
}

export class HourWeatherResult {
  HeWeather6: HourWeatherBox[];
}

export class LifeStyleBox {
  basic: Basic;
  update: Update;
  status: string;
  lifestyle: LifeStyle[];
}

export class LifeStyleResult {
  HeWeather6: LifeStyleBox[];
}
