import React from 'react';

function Button({onClick, children}:{
    onClick: () => void;
    children: React.ReactNode;
}) {
    return (
        <button onClick={onClick}
                className={'w-full h-58 bg-[#C4282D] text-white text-20 font-semibold flex justify-center items-center'}>{children}</button>
    );
}

export default Button;