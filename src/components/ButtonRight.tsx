import React, { JSX } from 'react'

type TProps = {
    children: React.ReactNode,
    variant: 'fill' | 'white',
    icon?: JSX.Element,
}

function ButtonRight({ variant, children, icon } : TProps) {

    const currentColorBtn = () => {
        if(variant == 'fill') return 'bg-green-bg text-white py-3 px-6 rounded-full cursor-pointer hover:bg-white hover:text-green-bg transition-all'

        if(variant == 'white') return 'bg-white text-green-bg py-3 px-6 rounded-full cursor-pointer hover:bg-black hover:text-green-bg transition-all cursor-pointer z-40'
    }

    const currentColor = currentColorBtn()

  return (
    <button className={`${currentColor} flex gap-x-2`}>{children}{icon}</button>
  )
}

export default ButtonRight