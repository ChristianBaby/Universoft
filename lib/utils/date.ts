const SPANISH_MONTHS: Record<string, number> = {
  enero: 0,
  febrero: 1,
  marzo: 2,
  abril: 3,
  mayo: 4,
  junio: 5,
  julio: 6,
  agosto: 7,
  septiembre: 8,
  octubre: 9,
  noviembre: 10,
  diciembre: 11,
};

/** Parsea fechas en formato "15 de mayo, 2025" a un Date real. */
export function parseSpanishDate(text: string): Date {
  const match = text.match(/(\d{1,2})\s+de\s+(\w+),?\s+(\d{4})/i);
  if (!match) return new Date();

  const [, day, monthName, year] = match;
  const month = SPANISH_MONTHS[monthName.toLowerCase()];
  if (month === undefined) return new Date();

  return new Date(Number(year), month, Number(day));
}
