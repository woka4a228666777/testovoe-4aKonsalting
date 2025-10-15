'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface TimerContextType {
  timeLeft: number;
  hasExpired: boolean;
}

const TimerContext = createContext<TimerContextType | undefined>(undefined);

export function TimerProvider({ children }: { children: ReactNode }) {
  const [timeLeft, setTimeLeft] = useState(2 * 60); // 2 минуты в секундах
  const [hasExpired, setHasExpired] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      const savedTime = localStorage.getItem('timerTime');
      if (savedTime) {
        const parsedTime = parseInt(savedTime);
        setTimeLeft(parsedTime);
        setHasExpired(parsedTime <= 0);
      }
    }
  }, [isClient]);

  useEffect(() => {
    if (isClient) {
      localStorage.setItem('timerTime', timeLeft.toString());
      if (timeLeft <= 0 && !hasExpired) {
        setHasExpired(true);
      }
    }
  }, [timeLeft, isClient, hasExpired]);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft(prevTime => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  return (
    <TimerContext.Provider value={{ timeLeft, hasExpired }}>
      {children}
    </TimerContext.Provider>
  );
}

export function useTimer() {
  const context = useContext(TimerContext);
  if (context === undefined) {
    throw new Error('useTimer must be used within a TimerProvider');
  }
  return context;
}