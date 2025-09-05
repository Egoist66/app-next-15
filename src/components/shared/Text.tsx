
import { FC, HTMLAttributes, ReactNode } from "react";


type TextVariants = {
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
    children: ReactNode
    attr?: HTMLAttributes<HTMLElement>
};

export const Text: FC<TextVariants> = ({variant = 'p', children, attr}) => {
    
    switch (variant) {
        case 'h1':
            return <h1 {...attr} className="text-4xl font-bold">{children}</h1>
        case 'h2':
            return <h2 {...attr} className="text-3xl font-bold">{children}</h2>
        case 'h3':
            return <h3 {...attr} className="text-2xl font-bold">{children}</h3>
        case 'h4':
            return <h4 {...attr} className="text-xl font-bold">{children}</h4>
        case 'h5':
            return <h5 {...attr} className="text-lg font-bold">{children}</h5>
        case 'h6':
            return <h6 {...attr} className="text-base font-bold">{children}</h6>
        case 'p':
            return <p {...attr} className="text-base">{children}</p>
        case 'span':
            return <span {...attr} className="text-base">{children}</span>
        default:
            return <p  {...attr} className="text-base">{children}</p>
    }
}