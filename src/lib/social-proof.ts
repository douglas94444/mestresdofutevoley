export type SocialEvent = {
  name: string;
  city: string;
  ago: string;
};

const NAMES = [
  { name: "Marcos", city: "SP" },
  { name: "Fernanda", city: "RJ" },
  { name: "Diego", city: "BH" },
  { name: "Rafael", city: "Curitiba" },
  { name: "Camila", city: "Recife" },
  { name: "Lucas", city: "Porto Alegre" },
  { name: "Juliana", city: "Salvador" },
  { name: "Bruno", city: "Fortaleza" },
  { name: "Amanda", city: "Brasília" },
  { name: "Thiago", city: "Campinas" },
];

const AGOS = ["agora", "há 1 min", "há 2 min", "há 3 min", "há 5 min", "há 8 min"];

function daySeed(): number {
  const d = new Date();
  return d.getFullYear() * 10000 + (d.getMonth() + 1) * 100 + d.getDate();
}

/** Stable "acessos liberados hoje" for the calendar day (client-side framing). */
export function getAccessesLiberatedToday(): number {
  const seed = daySeed();
  // 38–72 range, stable per day
  return 38 + (seed % 35);
}

export function buildSocialFeed(): SocialEvent[] {
  const seed = daySeed();
  return NAMES.map((person, i) => ({
    name: person.name,
    city: person.city,
    ago: AGOS[(seed + i * 3) % AGOS.length] ?? "há 2 min",
  }));
}

export function formatSocialLine(event: SocialEvent): string {
  return `${event.name} de ${event.city} acabou de garantir · ${event.ago}`;
}
