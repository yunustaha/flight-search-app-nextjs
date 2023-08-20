import React from 'react'

type BigCardProps = {
    children: React.ReactNode
}

const BigCard: React.FC<BigCardProps> = ({ children }) => {
    return (
        <div className="flex flex-col items-center w-[90vw] lg:w-[50vw] justify-center bg-white rounded shadow-2xl p-6">
            <div className="flex items-center gap-4 text-4xl ">
                {children}
            </div>
        </div>
    )
}

export default BigCard