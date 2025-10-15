'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import TariffsList from '../TariffsList/TariffsList';
import CustomCheckbox from './CustomCheckbox';
import Garanty from '@/components/Garanty/Garanty';

interface SectionMainProps {
  manImage: any;
}

export default function SectionMain({ manImage }: SectionMainProps) {
  const [isAgreementChecked, setIsAgreementChecked] = useState(false);
  const [showError, setShowError] = useState(false);
  const handleBuyClick = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isAgreementChecked) {
      setShowError(true);
      return;
    }
    
    // Здесь будет логика покупки
    setShowError(false);
    console.log('Покупка выполнена!');
  };

  return (
    <section id="section-main" className="w-full">
      <h1 className="text-[32px] font-bold py-8">Выбери подходящий для себя тариф</h1>
      <div className="w-full flex flex-row gap-[87.27px] ">
        <Image 
          src={manImage} 
          alt="man" 
          className="w-[35%] h-auto max-w-[380.73px] object-contain"
        />
        <div className='flex flex-col items-start'>
          <TariffsList />
          <div className='flex flex-row gap-2 bg-[#2D3233] py-[18px] px-[20px] rounded-[20px]'>
            <svg width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.8775 16.6437C10.8869 17.2578 11.3885 17.75 12.0025 17.75C12.6166 17.75 13.1181 17.2531 13.1275 16.6437L13.5025 6.5375C13.526 6.15313 13.3853 5.77813 13.1135 5.4875C12.8228 5.17813 12.4197 5 12.0025 5C11.5853 5 11.1822 5.17813 10.8916 5.4875C10.6197 5.77813 10.4791 6.15313 10.5025 6.5375L10.8775 16.6437Z" fill="#FDB056"/>
            <path d="M12 23C12.8284 23 13.5 22.3284 13.5 21.5C13.5 20.6716 12.8284 20 12 20C11.1716 20 10.5 20.6716 10.5 21.5C10.5 22.3284 11.1716 23 12 23Z" fill="#FDB056"/>
            </svg>
            <p className='text-[16px] font-[#FFFFFF] font-normal max-w-[427px]'>
              Следуя плану на 3 месяца и более, люди получают в 2 раза лучший результат, чем за 1 месяц
            </p>
          </div>
          <form className='flex flex-col gap-4 mt-6 w-full'>
            <label className='flex items-center gap-3'>
              <CustomCheckbox 
                checked={isAgreementChecked}
                onChange={setIsAgreementChecked}
              />
              <p className='text-[16px] font-normal text-[#CDCDCD] max-w-[605px]'>Я согласен с{' '}
                <Link href={'#!'} className='underline hover:text-[#FDB056] transition-colors'>
                  офертой рекуррентных платежей
                </Link>{' '}
                и{' '}
                <Link href={'#!'} className='underline hover:text-[#FDB056] transition-colors'>
                  Политикой конфиденциальности
                </Link>
              </p>
            </label>
            <button 
              type='submit'
              className='w-full h-[56px] bg-[#FDB056] max-w-[352px] text-[#191E1F] text-[20px] font-bold rounded-[8px] hover:bg-[#fdaf56c9] active:scale-[0.98] cursor-pointer transition-all'
              onClick={handleBuyClick}
            >
              Купить
            </button>
            {showError && (
              <div className='text-red-500 text-[14px] font-medium mt-2 text-center'>
                вам нужно согласится с офертой
              </div>
            )}
            <p className='text-[14px] font-normal text-[#9B9B9B] leading-tight'>
              Нажимая кнопку «Купить», Пользователь соглашается на разовое списание денежных средств для получения пожизненного доступа к приложению. Пользователь соглашается, что данные кредитной/дебетовой карты будут сохранены для осуществления покупок дополнительных услуг сервиса в случае желания пользователя.
            </p>
          </form>
        </div> 
      </div>
      <Garanty/>
    </section>
  );
}