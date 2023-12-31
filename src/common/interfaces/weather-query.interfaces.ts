export interface ForecastDay {
    date: string;
    day: {
        avgtemp_c: number;
        avgtemp_f: number;
        condition: {
            text: string;
            icon: string;
        },
        maxtemp_c: number;
        maxtemp_f: number;
        maxwind_kph: number;
        maxwind_mph: number;
        avghumidity: number;
    }
}

export interface WeatherQueryResponse {
    current: {
        condition: {
            text: string;
            icon: string;
        },
        humidity: number;
        temp_c: number;
        temp_f: number;
        wind_kph: number;
        wind_mph: number;
        wind_dir: string;
        last_updated: string;
    },
    forecast: {
        forecastday: ForecastDay[];
    },
    location: {
        name: string;
        country: string;
    }
}