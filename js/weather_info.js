"use strict";

const WEATHER_SYMBOLS = [
    {
        icon: "1.png",
        desc: "Klart"
    },
    {
        icon: "2.png",
        desc: "Lätt molnighet"
    },
    {
        icon: "3.png",
        desc: "Halvklart"
    },
    {
        icon: "4.png",
        desc: "Molnigt"
    },
    {
        icon: "5.png",
        desc: "Mycket moln"
    },
    {
        icon: "6.png",
        desc: "Mulet"
    },
    {
        icon: "7.png",
        desc: "Dimma"
    },
    {
        icon: "8.png",
        desc: "Lätt regnskur"
    },
    {
        icon: "9.png",
        desc: "Regnskur"
    },
    {
        icon: "10.png",
        desc: "Kraftig regnskur"
    },
    {
        icon: "11.png",
        desc: "Åskskur"
    },
    {
        icon: "12.png",
        desc: "Lätt by av regn och snö"
    },
    {
        icon: "13.png",
        desc: "By av regn och snö"
    },
    {
        icon: "14.png",
        desc: "Kraftig by av regn och snö"
    },
    {
        icon: "15.png",
        desc: "Lätt snöby"
    },
    {
        icon: "16.png",
        desc: "Snöby"
    },
    {
        icon: "17.png",
        desc: "Kraftig snöby"
    },
    {
        icon: "18.png",
        desc: "Lätt regn"
    },
    {
        icon: "19.png",
        desc: "Regn"
    },
    {
        icon: "20.png",
        desc: "Kraftigt regn"
    },
    {
        icon: "21.png",
        desc: "Åska"
    },
    {
        icon: "22.png",
        desc: "Lätt snöblandat regn"
    },
    {
        icon: "23.png",
        desc: "Snöblandat regn"
    },
    {
        icon: "24.png",
        desc: "Kraftigt snöblandat regn"
    },
    {
        icon: "25.png",
        desc: "Lätt snöfall"
    },
    {
        icon: "26.png",
        desc: "Snöfall"
    },
    {
        icon: "27.png",
        desc: "Ymnigt snöfall"
    }
];

function getWeatherData(value) {
    return WEATHER_SYMBOLS[value +1]
}

export default getWeatherData;
