import React, { JSX } from 'react'

type TProps = {
    children: React.ReactNode,
    variant: 'fill' | 'border',
    icon?: JSX.Element,
}

function ButtonBuy({ variant, children, icon } : TProps) {

    const currentColorBtn = () => {
        if(variant == 'fill') return 'bg-green-light text-green-bg py-3 px-6 rounded-full cursor-pointer hover:bg-green-bg hover:text-white transition-all'
    }

    const currentColor = currentColorBtn()

  return (
    <button className={`${currentColor} flex gap-x-2`}>{icon}{children}</button>
  )
}

export default ButtonBuy