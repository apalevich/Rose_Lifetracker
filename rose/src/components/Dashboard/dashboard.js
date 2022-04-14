import React, { useEffect } from "react";
import * as d3 from "d3";

import './dashboard.css'

const weekData = [
  {
    number: 13,
    activities: [
      {
        area: "Финансы",
        type: "Анализ",
        name: "Чтение новостей",
        trackedTime: [30, 90, 120, 15],
      },
      { area: "Финансы", type: "Анализ", name: "Учебники", trackedTime: [0] },
      { area: "Финансы", type: "Анализ", name: "Лекции", trackedTime: [24, 23, 12, 24, 40, 39, 45] },
      {
        area: "Финансы",
        type: "Действие",
        name: "Учёт расходов",
        trackedTime: [60],
      },
      { area: "Финансы", type: "Действие", name: "Портфель", trackedTime: [0] },
      {
        area: "Самореализация",
        type: "Действие",
        name: "Работа",
        trackedTime: [90],
      },
      {
        area: "Самореализация",
        type: "Анализ",
        name: "Курсы и CS",
        trackedTime: [13, 38, 79],
      },
      {
        area: "Самореализация",
        type: "Действие",
        name: "Проекты на гитхаб",
        trackedTime: [128],
      },
      {
        area: "Самореализация",
        type: "Коммуникация",
        name: "Собеседования и митинги",
        trackedTime: [90, 15, 29, 7],
      },
      {
        area: "Самореализация",
        type: "Анализ",
        name: "Планирование на неделю",
        trackedTime: [1],
      },
      {
        area: "Социум",
        type: "Коммуникация",
        name: "Переписка и аудио",
        trackedTime: [69],
      },
      {
        area: "Социум",
        type: "Коммуникация",
        name: "Звонки близким",
        trackedTime: [65],
      },
      {
        area: "Социум",
        type: "Коммуникация",
        name: "Нетворкинг",
        trackedTime: [380],
      },
      {
        area: "Социум",
        type: "Коммуникация",
        name: "Соцсети и посты",
        trackedTime: [25],
      },
      {
        area: "Отношения",
        type: "Коммуникация",
        name: "Свидания",
        trackedTime: [960],
      },
      {
        area: "Отношения",
        type: "Коммуникация",
        name: "Секс",
        trackedTime: [40, 40, 40],
      },
      { area: "Отдых", type: "Анализ", name: "Стендап", trackedTime: [45, 60] },
      { area: "Отдых", type: "Анализ", name: "Фильмы", trackedTime: [100] },
      { area: "Отдых", type: "Действие", name: "Творчество", trackedTime: [240] },
      { area: "Здоровье", type: "Анализ", name: "Массаж", trackedTime: [65] },
      { area: "Здоровье", type: "Анализ", name: "Прогулка", trackedTime: [37, 295, 160, 184, 117, 249, 106] },
      {
        area: "Здоровье",
        type: "Действие",
        name: "Тренировка",
        trackedTime: [60, 25, 43, 53],
      },
      {
        area: "Духовность",
        type: "Анализ",
        name: "Медитация",
        trackedTime: [16, 12,27,32],
      },
      {
        area: "Личность",
        type: "Коммуникация",
        name: "Психолог",
        trackedTime: [55],
      },
      {
        area: "Личность",
        type: "Анализ",
        name: "Изучение психологии",
        trackedTime: [40,18,40,5],
      },
      { area: "Личность", type: "Действие", name: "Дневник", trackedTime: [8] },
      {
        area: "Личность",
        type: "Анализ",
        name: "Курс по отношениям",
        trackedTime: [0],
      },
    ],
  },
];

const projectSettings = {
    areas: [
        { label: 'Финансы', target: 12 },
        { label: 'Самореализация', target: 43 },
        { label: 'Социум', target: 6 },
        { label: 'Отношения', target: 4 },
        { label: 'Отдых', target: 6 },
        { label: 'Здоровье', target: 13 },
        { label: 'Духовность', target: 4 },
        { label: 'Личность', target: 9 }
    ],
    types: [
        { label: 'Анализ', target: 42 },
        { label: 'Действие', target: 42 },
        { label: 'Коммуникация', target: 13 },
    ]
};

const sumTrackedTime = (arr) => arr.reduce((acc, cur) => acc+cur, 0);

const curTypeVsTarget = weekData[0].activities
.reduce((acc, cur) => {
    if (acc.find(el => el.label === cur.type)) {
        const idx = acc.findIndex(el => el.label === cur.type);
        acc[idx].value += sumTrackedTime(cur.trackedTime)
    } else {
        acc.push({ label: cur.type, value: sumTrackedTime(cur.trackedTime) });
    }
    return acc
}, [])

const Pulse = () => {
    useEffect(() => {

        const xScale = d3
                        .scaleBand()
                        .domain(curTypeVsTarget.map(el => el.label))
                        .rangeRound([0, 250])
                        .padding(0.1);
        const yScale = d3.scaleLinear().domain([0,2300]).range([200,0]);

        const container = d3.select('.bar-chart')
        .classed('bar-chart-decoration', true)

        container
          .selectAll(".bar")
          .data(curTypeVsTarget)
          .enter()
          .append("rect")
          .classed("bar", true)
          .attr("width", xScale.bandwidth())
          .attr("height", (data) => 200 - yScale(data.value))
          .attr("x", (data) => xScale(data.label))
          .attr("y", (data) => yScale(data.value));

    }, curTypeVsTarget)

    console.log(curTypeVsTarget);

    return (
        <div className="row">
            <div className="col-12 border p-3">
                <h3 className="text-decoration-underline">Week: {weekData[0].number}</h3>
                <div>
                    <h3>Absolute stats</h3>
                    <svg className="bar-chart"></svg>
                </div>
            </div>
        </div>
    );
};

const Dashboard = () => {
  return (
    <div className="container">
      <Pulse />
    </div>
  );
};



export default Dashboard;
