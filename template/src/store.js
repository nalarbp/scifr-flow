import { atom } from "jotai";

const initialState = { scatterInputData: null, scatterNodeSize: 8, scatterIsInteractive: true, scatterColorScheme: 'nivo', scatterLegendPosition: 'bottom-right', scatterLegendOffsetX: 120, scatterLegendOffsetY: 0 };

// Scatter plot states
export const scatterInputDataStore = atom(initialState.scatterInputData);
export const scatterNodeSizeStore = atom(initialState.scatterNodeSize);
export const scatterIsInteractiveStore = atom(initialState.scatterIsInteractive);
export const scatterColorSchemeStore = atom(initialState.scatterColorScheme);
export const scatterLegendPositionStore = atom(initialState.scatterLegendPosition);
export const scatterLegendOffsetXStore = atom(initialState.scatterLegendOffsetX);
export const scatterLegendOffsetYStore = atom(initialState.scatterLegendOffsetY);

