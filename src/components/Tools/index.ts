import { eracer, EracerUtils } from './tools/Eracer/utils';
import { pencil, PencilUtils } from './tools/Pencil/utils';
import { rect, RectUtils } from './tools/Rect/utils';
import { circle, CircleUtils } from './tools/Circle/utils';
import { line, LinelUtils } from './tools/Line/utils';

export enum ShapeToolsEnums {
    eracer,
    pencil,
    rect,
    circle,
    line,
}
export const SHAPE_TOOLS = 'eracer' || 'pencil' || 'rect' || 'circle' || 'line';
export type ShapeTools = typeof SHAPE_TOOLS;
export type AdditionalTools = 'undo' | 'redo';
type ToolsUtils = Record<ShapeTools, UtilsObject>;
export type UtilsObject = CircleUtils | EracerUtils | PencilUtils | RectUtils | LinelUtils;
export const toolsUtils: ToolsUtils = {
    eracer,
    pencil,
    rect,
    circle,
    line,
};
