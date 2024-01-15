export type InputType = {
	'MSR_TIME': string;                                    // Measure Time        (hh:mm)
	'W_TN'?: number | undefined;                           // Total Nitrogen      (mg/L)
	'W_PHEN'?: number | undefined;                         // Phenol              (mg/L)
	'W_TP'?: number | undefined;                           // Total Phosphorus    (mg/L)
	'RNUM'?: number | undefined;                           // Order Number? (idk)
	'SITE_ID'?: `${string}_${string}`;                     // Where had measure   (korean)
	'MSR_DATE': string;                                    // Measure Date        (YYYYMMDD)
	'W_TEMP'?: number | undefined;                         // Water Temperature   (Celcius degrees)
	'W_CN'?: number | undefined;                           // Water Cyanide       (mg/L)
	'W_GUBUN': string;                                     // Water Category      (korean)
	'W_DO'?: number | undefined;                           // Dissolved Oxygen    (mg/L)
	'W_PH'?: number | undefined;                           // Acidity             (pH)
};

export class MeasureDateTimeData {
	date?: string;
	time?: string;

	constructor(json:any) {
		this.date = json['MSR_DATE'];
		this.time = json['MSR_TIME'];
	}
	toString(){
		return JSON.stringify(this);
	}
}

export class WaterData {
	nitrogen?: number | undefined;
	phenol?: number | undefined;
	phosphorus?: number | undefined;
	temperature?: number | undefined;
	cyanide?: number | undefined;
	category?: string;
	dissolvedOxygen?: number | undefined;
	acidity?: number | undefined;

	constructor(json:any) {
		this.nitrogen = json['W_TN'];
		this.phenol = json['W_PHEN'];
		this.phosphorus = json['W_TP'];
		this.temperature = json['W_TEMP'];
		this.cyanide = json['W_CN'];
		this.category = json['W_GUBUN'];
		this.dissolvedOxygen = json['W_DO'];
		this.acidity = json['W_PH'];
	}
	toString(){
		return JSON.stringify(this);
	}
}

export class SiteData {
	id?:string;
	constructor(json:any) {
		this.id = json['SITE_ID'];
	}
	toString(){
		return JSON.stringify(this);
	}
}

export class OrderData {
	id?: number;
	constructor(json:any) {
		this.id = json['RNUM'];
	}
	toString(){
		return JSON.stringify(this);
	}
}

export class MeasureData {
	datetime?:MeasureDateTimeData;
	water?:WaterData;
	site?:SiteData;
	order?:OrderData;
	constructor(json:any) {
		this.datetime = new MeasureDateTimeData(json);
		this.water = new WaterData(json);
		this.site = new SiteData(json);
		this.order = new OrderData(json);
	}
	toString(){
		return JSON.stringify(this);
	}
}

