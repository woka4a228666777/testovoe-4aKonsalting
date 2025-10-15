'use client';

import { useState, useEffect } from 'react';
import Card, { CardProps } from '../Card/Card';
import { getTariffs, Tariff } from '../../services/tariffService';

export default function TariffsList() {
  const [tariffs, setTariffs] = useState<Tariff[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedTariffId, setSelectedTariffId] = useState<string | null>(null);

  useEffect(() => {
    const fetchTariffs = async () => {
      try {
        setLoading(true);
        const data = await getTariffs();
        setTariffs(data);
        
        // Находим best карточку и устанавливаем ее как выбранную по умолчанию
        const bestTariff = data.find(tariff => tariff.is_best);
        if (bestTariff) {
          // Создаем уникальный ключ для best карточки
          const bestTariffKey = `${bestTariff.id}-${bestTariff.period}-${bestTariff.price}-0`;
          setSelectedTariffId(bestTariffKey);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch tariffs');
      } finally {
        setLoading(false);
      }
    };

    fetchTariffs();
  }, []);

  if (loading) {
    return <div className="mx-auto my-[200px]">
      <div className="loader"></div>
    </div>;
  }

  if (error) {
    return <div className="text-center py-8 text-red-500">Ошибка: {error}</div>;
  }

  const handleTariffSelect = (tariffId: string) => {
    setSelectedTariffId(tariffId);
  };

  // Sort tariffs: best cards first, then regular cards
  const sortedTariffs = [...tariffs].sort((a, b) => {
    if (a.is_best && !b.is_best) return -1;
    if (!a.is_best && b.is_best) return 1;
    return 0;
  });

  // Create unique keys for each card to avoid conflicts with duplicate IDs from API
  const cardsWithUniqueKeys = sortedTariffs.map((tariff, index) => ({
    ...tariff,
    uniqueKey: `${tariff.id}-${tariff.period}-${tariff.price}-${index}`
  }));

  // Разделяем карточки на best и обычные
  const bestCards = cardsWithUniqueKeys.filter(tariff => tariff.is_best);
  const regularCards = cardsWithUniqueKeys.filter(tariff => !tariff.is_best);

  return (
    <div className="w-full py-8 max-w-[748px]">
      {/* Отображаем best карточки вверху */}
      {bestCards.map((tariff) => (
        <div 
          key={tariff.uniqueKey} 
          className="w-full mb-6"
        >
          <Card
            period={tariff.period}
            price={tariff.price}
            full_price={tariff.full_price}
            is_best={tariff.is_best}
            text={tariff.text}
            isSelected={selectedTariffId === tariff.uniqueKey}
            onSelect={() => handleTariffSelect(tariff.uniqueKey)}
          />
        </div>
      ))}
      
      {/* Отображаем обычные карточки в grid */}
      <div className="grid grid-cols-3 gap-4 min-h-[335px]">
        {regularCards.map((tariff) => (
          <div 
            key={tariff.uniqueKey}
          >
            <Card
              period={tariff.period}
              price={tariff.price}
              full_price={tariff.full_price}
              is_best={tariff.is_best}
              text={tariff.text}
              isSelected={selectedTariffId === tariff.uniqueKey}
              onSelect={() => handleTariffSelect(tariff.uniqueKey)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}