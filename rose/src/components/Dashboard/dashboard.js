import React from "react";
import * as d3 from "d3";

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
    if (!acc[cur.type]) acc[cur.type] = 0
    acc[cur.type] += sumTrackedTime(cur.trackedTime)
    return acc
}, {})



const Pulse = () => {
    const data  = weekData[0];

    console.log(curTypeVsTarget);

    d3
    .select('.bar-chart')
    .selectAll('p')
    .data(curTypeVsTarget)
    .enter()
    .append('p')
    .text(data => data);

    return (
        <div className="row">
            <div className="col-12 border p-3">
                <h3 className="text-decoration-underline">Week: {data.number}</h3>
                <div>
                    <h3>Absolute stats</h3>
                    <div className="bar-chart"></div>
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
