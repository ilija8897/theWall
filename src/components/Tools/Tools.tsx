import React, { createContext, useContext, useMemo, useState } from 'react'
import { Pencil } from './tools/Pencil';
import { Eracer } from './tools/Eracer';

type Props = {
    children?: React.ReactNode;
    // type: 'color' | 'button';
    defaultTool?: 'pencil';
}
type PensilProps = {
    label?: string;
}
type ToolsComposition = {
    Pensil: React.FC<PensilProps>;
    Eracer: React.FC<PensilProps>;
};

const ToolContext = createContext({});

export function useAccordionContext() {
    const context = useContext(ToolContext);
    if (!context) {
        // Error message should be more descriptive
        throw new Error("No context found for Accordion");
    }
    return context;
}

export const Tools: React.FC & ToolsComposition = ({ defaultTool = 'pencil', children }: Props) => {
    const [activeTool, setActiveTool] = useState(defaultTool);
    const value = useMemo(
        () => ({
            activeTool,
        }),
        [activeTool, setActiveTool, defaultTool]
    );
    return (
        <ToolContext.Provider value={value}>{children}</ToolContext.Provider>
    )
}

Tools.Pensil = Pencil;
Tools.Eracer = Eracer;
