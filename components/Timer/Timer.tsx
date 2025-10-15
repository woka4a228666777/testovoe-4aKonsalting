'use client';

import { useTimer } from './TimerContext';

export default function Timer() {
  const { timeLeft } = useTimer();



  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  // Определяем цвет в зависимости от оставшегося времени
  let timerColor = "#FFBB00"; // цвет по умолчанию (16мин - 3мин)
  
  if (timeLeft <= 30 && timeLeft > 0) {
    timerColor = "#FF4E4E"; // 30сек
  } else if (timeLeft === 0) {
    timerColor = "#FFFFFF"; // 00:00
  }

  // Добавляем класс для мигания при 30 секундах
  const blinkClass = timeLeft <= 30 && timeLeft > 0 ? 'animate-blink' : '';

  // Обновляем цвет звездочек
  const starFillColor = timeLeft > 0 ? timerColor : "#FFFFFF";

  return (
    <div className={`flex flex-row items-center gap-2 ${blinkClass}`}>
      <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.83399 0.799865C6.06277 0.1816 6.93723 0.181601 7.16601 0.799866L8.27732 3.80312C8.34924 3.9975 8.5025 4.15076 8.69688 4.22268L11.7001 5.33399C12.3184 5.56277 12.3184 6.43723 11.7001 6.66601L8.69688 7.77732C8.5025 7.84924 8.34924 8.0025 8.27732 8.19688L7.16601 11.2001C6.93723 11.8184 6.06277 11.8184 5.83399 11.2001L4.72268 8.19688C4.65076 8.0025 4.4975 7.84924 4.30312 7.77732L1.29986 6.66601C0.6816 6.43723 0.681601 5.56277 1.29987 5.33399L4.30312 4.22268C4.4975 4.15076 4.65076 3.9975 4.72268 3.80312L5.83399 0.799865Z" fill={starFillColor}/>
      </svg>
      <p 
        id="timer-text" 
        className="font-bold text-[40px]"
        style={{ color: timerColor }}
      >
        {formattedTime}
      </p>
      <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.83399 0.799865C6.06277 0.1816 6.93723 0.181601 7.16601 0.799866L8.27732 3.80312C8.34924 3.9975 8.5025 4.15076 8.69688 4.22268L11.7001 5.33399C12.3184 5.56277 12.3184 6.43723 11.7001 6.66601L8.69688 7.77732C8.5025 7.84924 8.34924 8.0025 8.27732 8.19688L7.16601 11.2001C6.93723 11.8184 6.06277 11.8184 5.83399 11.2001L4.72268 8.19688C4.65076 8.0025 4.4975 7.84924 4.30312 7.77732L1.29986 6.66601C0.6816 6.43723 0.681601 5.56277 1.29987 5.33399L4.30312 4.22268C4.4975 4.15076 4.65076 3.9975 4.72268 3.80312L5.83399 0.799865Z" fill={starFillColor}/>
      </svg>
    </div>
  );
}