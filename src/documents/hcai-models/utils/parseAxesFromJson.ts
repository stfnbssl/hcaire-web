// src/documents/hcai-models/utils/parseAxesFromJson.ts

export interface Chapter {
  title: string;
  chapterNumber: number;
  content: string;
  percorso: string;
}

export interface Axis {
  axisName: string;       // es. "Asse 4 - Separazione e Limite"
  phase: string;          // es. "Fase 1 - Assi Filosofici"
  chapters: Chapter[];
}

interface RawEntry {
  percorso: string;
  testo_markdown: string;
}

// Estrae il numero dal nome del capitolo ("Capitolo 0 - Introduzione" → 0)
function extractChapterNumber(segment: string): number {
  const match = segment.match(/Capitolo\s+(\d+)/i);
  return match ? parseInt(match[1], 10) : 999;
}

// Estrae il titolo pulito dal segmento finale del percorso
function extractChapterTitle(segment: string): string {
  // "Capitolo 0 - Titolo bello" → "Titolo bello"
  // "Capitolo 0 - " → "Capitolo 0" (fallback se titolo vuoto)
  const match = segment.match(/Capitolo\s+\d+\s*-\s*(.+)/i);
  if (match && match[1].trim()) return match[1].trim();
  return segment.trim();
}

export function parseAxesFromJson(raw: RawEntry[]): Axis[] {
  const axesMap = new Map<string, Axis>();

  for (const entry of raw) {
    const parts = entry.percorso.split("/");

    // Struttura attesa: [..., "NomeAsse", "Capitoli", "Capitolo N - Titolo"]
    // Cerchiamo "Capitoli" come penultimo-1 segmento
    const capitoliIndex = parts.findIndex(
      (p) => p.trim().toLowerCase() === "capitoli"
    );

    if (capitoliIndex === -1) continue; // non è un capitolo, skip

    const lastSegment = parts[capitoliIndex + 1];
    if (!lastSegment || !/capitolo/i.test(lastSegment)) continue;

    // Risaliamo all'asse: il folder prima di "Capitoli"
    const axisSegment = parts[capitoliIndex - 1]?.trim() ?? "Senza asse";

    // La fase è il primo segmento
    const phase = parts[0]?.trim() ?? "";

    // Chiave unica per l'asse
    const axisKey = `${phase}::${axisSegment}`;

    if (!axesMap.has(axisKey)) {
      axesMap.set(axisKey, {
        axisName: axisSegment,
        phase,
        chapters: [],
      });
    }

    const axis = axesMap.get(axisKey)!;

    axis.chapters.push({
      title: extractChapterTitle(lastSegment),
      chapterNumber: extractChapterNumber(lastSegment),
      content: entry.testo_markdown,
      percorso: entry.percorso,
    });
  }

  // Ordina i capitoli dentro ogni asse per numero
  for (const axis of axesMap.values()) {
    axis.chapters.sort((a, b) => a.chapterNumber - b.chapterNumber);
  }

  // Restituisce gli assi in ordine di apparizione nel JSON
  return Array.from(axesMap.values());
}