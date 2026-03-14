// Type pour une carte d'information (ex: Nationalité, Métier)
export type InfoCard = {
  title: string; // Le titre de l'info (ex: "Nationalité")
  value: string; // La valeur de l'info (ex: "Britannique")
};

// Type pour un événement de la timeline (filmographie, moments clés)
export type TimelineEvent = {
  year: string; // Année de l'événement
  title: string; // Titre du film ou de l'événement
  description: string; // Description courte
  quote?: string; // Citation optionnelle liée à cet événement
  image: string; // URL ou chemin de l'image
};

// Type pour une citation générale
export type Quote = {
  text: string; // Le texte de la citation
  source?: string; // Source optionnelle (ex: interview, média)
};

// Type principal représentant une personne complète
export type Person = {
  name: string; // Nom de la personne
  image: string; // URL ou chemin de l'image
  description: string; // Biographie courte
  infoCards: InfoCard[]; // Liste des cartes d'infos
  timeline: TimelineEvent[]; // Liste des événements chronologiques
  quotes: Quote[]; // Liste des citations
};