import React, { createContext, useContext, useMemo, useState } from 'react'
import { Pencil } from './tools/Pencil';
import { Eracer } from './tools/Eracer';
import { Rect } from './tools/Rect';
import { Color } from './tools/Color';

type Props = {
    children?: React.ReactNode;
    // type: 'color' | 'button';
    defaultTool?: 'pencil';
}
type PensilProps = {
    label?: string;
}
//TODO fix type
type ToolsComposition = {
    Pensil: React.FC<PensilProps>;
    Eracer: React.FC<PensilProps>;
    Rect: React.FC<PensilProps>;
    Color: React.FC<PensilProps>;
};

// TODO context не нужен здесь
const ToolContext = createContext({});

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
Tools.Rect = Rect;
Tools.Color = Color;
