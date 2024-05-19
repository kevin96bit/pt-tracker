'use client'
import { useState } from 'react';
import Image from 'next/image';
import { useLanguages } from '../../context/LanguageContext';

const DefaultSwitchITEN = () => {
  const [isChecked, setIsChecked] = useState(false);
  const { setLanguage } = useLanguages();

  const handleInputChange = () => {
    setIsChecked(!isChecked);
    setLanguage(isChecked ? 'it' : 'en');
  };

  return (
    <div className="relative inline-block w-20 h-8 rounded-full cursor-pointer">
      <input id="switch-component" type="checkbox"
        className="absolute w-16 h-8 transition-colors duration-300 rounded-full appearance-none cursor-pointer peer bg-blue-gray-100 bg-green-600 checked:bg-blue-500 "
        checked={isChecked} onChange={handleInputChange} />
      <label htmlFor="switch-component"
        className="before:content[''] absolute top-2/4 -left-1 h-10 w-10 -translate-y-2/4 cursor-pointer rounded-full border border-blue-gray-100 bg-white shadow-md transition-all duration-300 before:absolute before:top-2/4 before:left-2/4 before:block before:h-20 before:w-20 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity hover:before:opacity-10 peer-checked:translate-x-full peer-checked:border-gray-900 peer-checked:before:bg-gray-900">
        {isChecked ? <Image src='/english.svg' width={500} height={500} alt='ita' className="h-full w-full" /> : <Image src='/italian.svg' width={500} height={500} alt='eng' className="h-full w-full" />}
      </label>
    </div>
  )
}

export default DefaultSwitchITEN;



  