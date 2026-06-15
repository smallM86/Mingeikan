/* ============================================================
   Mingei — LocalStorage Utilities
   ============================================================ */

import { SavedWork, RegionColorMap } from '@/types/types';

const STORAGE_KEY = 'mingei_saved_works';

/** Check if localStorage is available */
function isStorageAvailable(): boolean {
  try {
    const test = '__storage_test__';
    localStorage.setItem(test, test);
    localStorage.removeItem(test);
    return true;
  } catch {
    return false;
  }
}

/** Get all saved works */
export function getSavedWorks(): SavedWork[] {
  if (!isStorageAvailable()) return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as SavedWork[];
  } catch {
    return [];
  }
}

/** Get a single saved work by id */
export function getSavedWork(id: string): SavedWork | null {
  const works = getSavedWorks();
  return works.find((w) => w.id === id) ?? null;
}

/** Get a saved work by template id (most recent) */
export function getSavedWorkByTemplate(templateId: string): SavedWork | null {
  const works = getSavedWorks();
  const matches = works
    .filter((w) => w.templateId === templateId)
    .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());
  return matches[0] ?? null;
}

/** Save or update a work */
export function saveWork(work: SavedWork): void {
  if (!isStorageAvailable()) return;
  const works = getSavedWorks();
  const index = works.findIndex((w) => w.id === work.id);
  if (index >= 0) {
    works[index] = { ...work, updatedAt: new Date().toISOString() };
  } else {
    works.push(work);
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(works));
}

/** Delete a saved work */
export function deleteWork(id: string): void {
  if (!isStorageAvailable()) return;
  const works = getSavedWorks().filter((w) => w.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(works));
}

/** Generate a unique ID */
export function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

/** Create a new SavedWork from a template */
export function createNewWork(
  templateId: string,
  templateName: string,
  initialColors: RegionColorMap
): SavedWork {
  const now = new Date().toISOString();
  return {
    id: generateId(),
    templateId,
    templateName,
    colors: initialColors,
    createdAt: now,
    updatedAt: now,
  };
}
