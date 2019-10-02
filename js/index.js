"use strict";

import getWeatherData from "./weather_info.js"

const BASE_URL = "https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/18.1489/lat/57.3081/data.json";


function main() {
    fetch(BASE_URL)
        .then(function(response) {
            return response.json();
        })
        .then(function(result) {
            addTemperature(result.timeSeries[0].parameters.find(function(element) {
                if (element.name === "t") {
                    return element;
                }
            }).values[0]);
            forecast(result.timeSeries);
        });
}

function addTemperature(temp) {
    let weatherWidget = document.querySelector("#smhi-widget");
    let h2 = document.createElement("h2");
    let para = document.createElement("p");

    para.innerText = `I Djupvikshamn är det just nu ${temp} grader varmt.`;
    h2.innerText = `Väder`;
    weatherWidget.appendChild(h2);
    weatherWidget.appendChild(para);
}

function forecast(timeSeries) {
    let weatherWidget = document.querySelector("#smhi-widget");
    let container = document.createElement("div");
    let tableToday = document.createElement("table");
    let h3Today = document.createElement("h3");
    let h3Tomorrow = document.createElement("h3");
    let thTime = document.createElement("th");
    let thTemp = document.createElement("th");
    let thWD = document.createElement("th");
    let thWind = document.createElement("th");
    let thSky = document.createElement("th");

    thTime.innerText = "Kl";
    thTemp.innerText = "Temp";
    thWD.innerText = "Vind";
    thWind.innerText = "M/S";
    thSky.innerText = "Himmel";
    h3Today.innerText = "Idag";
    h3Tomorrow.innerText = "Imorgon";

    container.className = "table-overflow";
    tableToday.className = "weatherTable";
    tableToday.appendChild(thTime);
    tableToday.appendChild(thTemp);
    tableToday.appendChild(thWD);
    tableToday.appendChild(thWind);
    tableToday.appendChild(thSky);
    let tableTomorrow = tableToday.cloneNode(true);
    let clnContainer = container.cloneNode(true);


    weatherWidget.appendChild(h3Today);
    weatherWidget.appendChild(container);
    container.appendChild(tableToday);
    weatherWidget.appendChild(h3Tomorrow);
    clnContainer.appendChild(tableTomorrow);
    weatherWidget.appendChild(clnContainer);

    timeSeries.forEach(function(item) {
        let date = new Date(item.validTime);
        let day = date.getDate();
        let time = date.getHours();
        let currentDay = new Date().getDate();

        if (day === currentDay) {
            if (time === 6 || time === 12 || time === 18) {
                createRowElement(item, tableToday);
            }
        }
        if (day === currentDay + 1) {
            if (time === 6 || time === 12 || time === 18) {
                createRowElement(item, tableTomorrow);
            }
        }
    });
}

function createRowElement(value, element) {
    let tableRow = document.createElement("tr");
    let time = document.createElement("td");
    let temp = document.createElement("td");
    let windDir = document.createElement("td");
    let wind = document.createElement("td");
    let sky = document.createElement("td");


    time.innerText = new Date(value.validTime).getHours();
    temp.innerText = value.parameters.find(function(element) {
        if (element.name === "t") {
            return element;
        }
    }).values[0];
    windDir.innerText = value.parameters.find(function(element) {
        if (element.name === "wd") {
            return element;
        }
    }).values[0];
    wind.innerText = value.parameters.find(function(element) {
        if (element.name === "ws") {
            return element;
        }
    }).values[0];
    let weatherObject = getWeatherData(value.parameters.find(function(element) {
        if (element.name === "Wsymb2") {
            return element;
        }
    }).values[0]);
    sky.innerHTML = `<img src="../css/images/weather-icons/${weatherObject.icon}" alt="vädersymbol"> <br/> ${weatherObject.desc}`;


    tableRow.appendChild(time);
    tableRow.appendChild(temp);
    tableRow.appendChild(windDir);
    tableRow.appendChild(wind);
    tableRow.appendChild(sky);
    element.appendChild(tableRow);
}


(function() {
    main();
})();
