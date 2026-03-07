// src/documents/hcai-models/sviluppo-bambino/useSviluppoBambino.ts
import rawData from "./Assi strutturali.json";
import { parseAxesFromJson, type Axis } from "@/documents/hcai-models/utils/parseAxesFromJson";

// Eseguito una volta sola a import time (nessun fetch, è un JSON bundled)
export const sviluppoBambinoAxes: Axis[] = parseAxesFromJson(rawData);