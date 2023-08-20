"use client"

import React, { useEffect, useState } from 'react'

export type Item = {
    value: number;
    label: string;
}

type ToggleProps = {
    items: Array<Item>;
    defaultValue: Item;
    onClick: (val: Item) => any;
}

const Toggle: React.FC<ToggleProps> = ({ items, onClick, defaultValue }) => {
    const [selectedItem, setSelectedItem] = useState<number>(defaultValue.value);

    const handleOnClick = (val: Item) => {
        onClick(val);
        setSelectedItem(val.value)
    }

    return (
        <span className='font-medium text-sm tracking-wide'>
            {
                items.map((item, index) => {
                    return (
                        <span key={index + '_Toggle'}
                            onClick={() => { handleOnClick(item) }}
                            className={`p-2 cursor-pointer ${selectedItem == item.value ? 'bg-white text-primary shadow-lg' : 'text-textLabel bg-primary'} bg-opacity-10`}>{item.label}
                        </span>
                    )
                })
            }
        </span>
    )
}

export default Toggle