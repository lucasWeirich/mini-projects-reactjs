import { useEffect, useState } from "react";
import { ProjectsProps } from "../../@types/projects.types";
import usePageTitle from "../../hook/usePageTitle";
import TemplateDefault from "../../templates/Default.template";
import './theme.styles.css'
import * as CSS from './Project12.styles'

export default function Project12({ title }: ProjectsProps) {
  usePageTitle('Theme Clock');

  const [themeDark, setThemeDark] = useState(true);
  const [clock, setClock] = useState({ hour: 0, minute: 0, second: 0, clockFull: '' })
  const [date, setDate] = useState({ day: 'day', week: 'week', month: 'month' });

  function handleThemeDark() {
    setThemeDark(prev => !prev);
  }

  useEffect(() => {
    const newDate = new Date();

    function getDateNow() {
      const dateNow = {
        day: newDate.toLocaleDateString('en-US', { day: '2-digit' }),
        week: newDate.toLocaleDateString('en-US', { weekday: 'long' }),
        month: newDate.toLocaleDateString('en-US', { month: 'short' }),
      }

      setDate(dateNow);
    } getDateNow();
  }, [])

  useEffect(() => {
    const newDate = new Date();

    function getDataClock() {
      const clockNow = {
        hour: newDate.getHours(),
        minute: newDate.getMinutes(),
        second: newDate.getSeconds(),
        clockFull: newDate.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
      }

      setClock(clockNow);
    }

    setTimeout(() => {
      getDataClock();
    }, 1000);

    console.log(clock)
  }, [clock])

  function updateRotatePointers(needle?: string) {
    switch (needle) {
      case 'hour':
        return `${(clock.hour * 30 - 90) + (clock.minute * 0.5)}deg`;
      case 'minute':
        return `${clock.minute * 6 - 90}deg`;
      case 'second':
        return `${clock.second * 6 - 90}deg`;
      default:
        return `${0}deg`
    }
  }

  return <TemplateDefault title={title}>
    <CSS.Wrapper className={themeDark ? 'darkTheme' : ''}>
      <CSS.ButtonTheme
        onClick={handleThemeDark}
      >
        {themeDark ? 'Light' : 'Dark'} Theme
      </CSS.ButtonTheme>

      <CSS.AnalogClock>
        {
          clock.hour !== 0 && <>
            <CSS.Pointer needle="hour" style={{ rotate: updateRotatePointers('hour') }} />
            <CSS.Pointer needle="minute" style={{ rotate: updateRotatePointers('minute') }} />
            <CSS.Pointer needle="second" style={{ rotate: updateRotatePointers('second') }} />
          </>
        }

        <CSS.MacroClock>12</CSS.MacroClock>
        <CSS.MacroClock>3</CSS.MacroClock>
        <CSS.MacroClock>6</CSS.MacroClock>
        <CSS.MacroClock>9</CSS.MacroClock>

      </CSS.AnalogClock>

      <div>
        <CSS.DigitalWatch>
          {clock.clockFull}
        </CSS.DigitalWatch>

        <CSS.Date>
          {date.week}, {date.month} <span className="--Day">{date.day}</span>
        </CSS.Date>
      </div>

    </CSS.Wrapper>
  </TemplateDefault>
}

/* 
  MINHA LÓGICA PARA CALCULAR A ROTACAO DOS PONTEIROS

  h / deg
  1   300deg
  2   330deg
  3   0deg
  4   30 deg
  5   60 deg
  6   90deg
  7   120deg
  8   150deg
  9   180deg
  10  210deg
  11  240deg
  12  270deg

  ---------------
  360 = 60
  1 = x

  360x = 60
  x = 360/60
  x = 6

  ---------------
  1h === 300deg
  2h === 330deg

  30deg !== 1h

  30 / 60 = 0.5
*/