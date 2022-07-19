import React from 'react'
import { IconWebsite, IconMoon, IconSun } from '../../constants/images'
import useDarkMode from '../../hooks/useDarkMode'

const Header = () => {
  const [colorTheme, setTheme] = useDarkMode();
  return (
    <header className='flex justify-between items-center mb-9'>
        <h1 className='text-fs_h1 font-fw_h1 leading-lh_h1 lg:text-fs_h1_lg'>
            <a href="/" className='focus:outline-dashed focus:outline-2 focus:outline-queenBlue dark:focus:outline-white focus:outline-offset-1 rounded-md'>devfinder</a>
        </h1>

        <button className='flex justify-between items-center gap-4 focus:outline-dashed focus:outline-2 focus:outline-queenBlue dark:focus:outline-white focus:outline-offset-1 rounded-sm' onClick={() => setTheme(colorTheme)}>
            <p className='uppercase font-bold text-[13px] tracking-[2.5px] text-queenBlue dark:text-white'>
              {colorTheme === 'light' ? "light" : "dark"}
            </p>
            {colorTheme === 'light' ? <IconSun /> : <IconMoon />}
        </button>
    </header>
  )
}

export default Header