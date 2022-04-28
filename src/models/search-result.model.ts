export interface SearchResult {
  count: number;
  matches: Match[];
}

export interface Match {
  numberInSurah: number;
  text: string;
  surah: Surah;
}

export interface Surah {
  number: number;
  englishName: string;
  englishNameTranslation: string;
}
