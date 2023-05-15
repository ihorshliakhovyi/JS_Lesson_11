'use strict';

const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];

  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const ref = {
    body: document.querySelector("body"),
    startBtn: document.querySelector('button[data-action=start]'),
    stopBtn: document.querySelector('button[data-action=stop]')
  };

  const colorSwitcher = {
    start () {
        if(this.isActive) {
            return;
        }
        this.isActive = true;
        this.colorSwitcherID = setInterval (() => {
            ref.body.style.backgroundColor = 
            colors[randomIntegerFromInterval(0, colors.length)];
        }, 1000);
    },
    stop () {
        clearInterval(this.colorSwitcherID);
        this.isActive = false;
    }
  };

  console.log(ref);
  ref.startBtn.addEventListener("click", colorSwitcher.start.bind(colorSwitcher));
  ref.stopBtn.addEventListener("click", colorSwitcher.stop.bind(colorSwitcher));