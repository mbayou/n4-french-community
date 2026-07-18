export type Locale = 'en' | 'fr';

export type ActivityIconName = 'coffee' | 'family' | 'walk' | 'tip' | 'sport' | 'idea';

type Activity = {
  readonly icon: ActivityIconName;
  readonly title: string;
  readonly description: string;
};

export type SiteContent = {
  readonly locale: Locale;
  readonly htmlLang: string;
  readonly path: '/' | '/fr/';
  readonly alternatePath: '/' | '/fr/';
  readonly seo: {
    readonly title: string;
    readonly description: string;
  };
  readonly skipLink: string;
  readonly brandSubtitle: string;
  readonly nav: {
    readonly label: string;
    readonly community: string;
    readonly activities: string;
    readonly parents: string;
    readonly join: string;
  };
  readonly languageLabel: string;
  readonly hero: {
    readonly eyebrow: string;
    readonly titleStart: string;
    readonly titleAccent: string;
    readonly description: string;
    readonly primaryCta: string;
    readonly secondaryCta: string;
    readonly imageAlt: string;
    readonly imageNote: string;
    readonly trustNote: string;
  };
  readonly welcome: {
    readonly kicker: string;
    readonly title: string;
    readonly paragraphs: readonly string[];
    readonly note: string;
  };
  readonly activities: {
    readonly kicker: string;
    readonly title: string;
    readonly introduction: string;
    readonly items: readonly Activity[];
  };
  readonly parents: {
    readonly kicker: string;
    readonly title: string;
    readonly paragraphs: readonly string[];
    readonly imageAlt: string;
    readonly note: string;
  };
  readonly closing: {
    readonly eyebrow: string;
    readonly title: string;
    readonly description: string;
    readonly cta: string;
    readonly footnote: string;
  };
  readonly footer: {
    readonly line: string;
    readonly location: string;
  };
};

const en = {
  locale: 'en',
  htmlLang: 'en-GB',
  path: '/',
  alternatePath: '/fr/',
  seo: {
    title: 'N4 French Community | French-speaking and North London rooted',
    description:
      'Connect with French and French-speaking neighbours in North London N4. Share culture, meet locally and help children grow up confidently bilingual.',
  },
  skipLink: 'Skip to content',
  brandSubtitle: 'French community',
  nav: {
    label: 'Main navigation',
    community: 'Our community',
    activities: 'What we share',
    parents: 'Parents',
    join: 'Join us',
  },
  languageLabel: 'Change language',
  hero: {
    eyebrow: 'French-speaking · Rooted in North London',
    titleStart: 'French-speaking.',
    titleAccent: 'North London rooted.',
    description:
      'A local community brought together by the French language and culture, and by a shared love of North London. Meet neighbours, exchange ideas and help the next generation grow up confidently bilingual.',
    primaryCta: 'Join the WhatsApp community',
    secondaryCta: 'Discover the community',
    imageAlt:
      'French-speaking neighbours and families meeting on a leafy North London N4 street',
    imageNote: 'Stroud Green · Finsbury Park · N4',
    trustNote: 'Open, local and free to join',
  },
  welcome: {
    kicker: 'A shared language, a shared neighbourhood',
    title: 'Shared culture. Local connections.',
    paragraphs: [
      'French brings us together, but North London is what we share. This is a place to meet neighbours, exchange ideas and create gatherings and projects that add something positive to local life.',
      'French nationals, francophones, bilingual households and mixed families are all welcome. Whether you have lived here for years or have just arrived, bring an idea, join a conversation or simply come and meet people.',
    ],
    note: 'French-speaking, part of London and open to the neighbourhood.',
  },
  activities: {
    kicker: 'Created by the community',
    title: 'Ideas worth sharing. Things worth doing.',
    introduction:
      'From casual meetups to family activities and local projects, the group grows around what members choose to create.',
    items: [
      { icon: 'coffee', title: 'Coffee & apéros', description: 'Easy, informal chances to meet nearby.' },
      { icon: 'family', title: 'Families', description: 'Playdates, parks and support between parents.' },
      { icon: 'walk', title: 'Out & about', description: 'Walks, outings and discoveries around London.' },
      { icon: 'tip', title: 'Local tips', description: 'Recommendations, useful contacts and good finds.' },
      { icon: 'sport', title: 'Sports', description: 'Find neighbours to play, train or cheer with.' },
      { icon: 'idea', title: 'Your next idea', description: 'Games, culture, or whatever brings people together.' },
    ],
  },
  parents: {
    kicker: 'Growing up with French',
    title: 'Confidence, friendships and a living language.',
    paragraphs: [
      'Our parents’ group helps families give French a natural place in children’s everyday lives through playdates, shared activities, conversation and friendship.',
      'French-speaking, bilingual and mixed-language families are all welcome. Parents can exchange advice and organise activities, while children gain more opportunities to use French confidently as part of growing up in London.',
    ],
    imageAlt:
      'Illustration of parents and children gathering outside a café on Stroud Green Road in N4',
    note: 'More opportunities to speak, play and build friendships in French.',
  },
  closing: {
    eyebrow: 'Bring an idea',
    title: 'Meet locally. Create something together.',
    description:
      'Join neighbours who share the French language and culture, and who want to contribute to life in North London.',
    cta: 'Open WhatsApp',
    footnote: 'WhatsApp will open in a new tab.',
  },
  footer: {
    line: 'Made with care by neighbours, for neighbours.',
    location: 'North London · N4',
  },
} as const satisfies SiteContent;

const fr = {
  locale: 'fr',
  htmlLang: 'fr-FR',
  path: '/fr/',
  alternatePath: '/',
  seo: {
    title: 'Communauté Française N4 | Francophones du nord de Londres',
    description:
      'Rencontrez les Français et francophones du nord de Londres N4. Partagez une culture, créez des liens et aidez les enfants à grandir avec le français.',
  },
  skipLink: 'Aller au contenu',
  brandSubtitle: 'Communauté française',
  nav: {
    label: 'Navigation principale',
    community: 'La communauté',
    activities: 'Nos idées',
    parents: 'Parents',
    join: 'Nous rejoindre',
  },
  languageLabel: 'Changer de langue',
  hero: {
    eyebrow: 'Francophones · Ancrés dans le nord de Londres',
    titleStart: 'Le français nous rassemble,',
    titleAccent: 'le nord de Londres nous relie.',
    description:
      'Une communauté locale réunie autour de la langue et de la culture françaises, avec un même attachement au nord de Londres. Pour se rencontrer, partager des idées et aider les enfants à grandir avec le français.',
    primaryCta: 'Rejoindre la communauté WhatsApp',
    secondaryCta: 'Découvrir la communauté',
    imageAlt:
      'Voisins et familles francophones se retrouvant dans une rue arborée du nord de Londres, dans le N4',
    imageNote: 'Stroud Green · Finsbury Park · N4',
    trustNote: 'Ouvert, local et gratuit',
  },
  welcome: {
    kicker: 'Une langue en partage, un quartier en commun',
    title: 'Une culture partagée. Des liens locaux.',
    paragraphs: [
      'Le français nous rassemble, et le nord de Londres est notre quotidien. Cette communauté permet de rencontrer ses voisins, de partager des idées et de créer des rendez-vous ou des projets qui contribuent positivement à la vie locale.',
      'Français, francophones, foyers bilingues et familles mixtes sont les bienvenus. Que vous soyez installé ici depuis des années ou que vous veniez d’arriver, proposez une idée, participez à une discussion ou venez simplement rencontrer du monde.',
    ],
    note: 'Francophone, londonienne et ouverte sur son quartier.',
  },
  activities: {
    kicker: 'Créé par la communauté',
    title: 'Des idées à partager. Des projets à faire vivre.',
    introduction:
      'Des rencontres informelles aux activités familiales et aux projets locaux, le groupe grandit autour de ce que ses membres choisissent de créer.',
    items: [
      { icon: 'coffee', title: 'Cafés & apéros', description: 'Des occasions simples de se retrouver près de chez soi.' },
      { icon: 'family', title: 'Familles', description: 'Playdates, sorties au parc et entraide entre parents.' },
      { icon: 'walk', title: 'Balades & sorties', description: 'Des découvertes dans le quartier et à travers Londres.' },
      { icon: 'tip', title: 'Bons plans', description: 'Adresses, contacts utiles et recommandations locales.' },
      { icon: 'sport', title: 'Sport', description: 'Des voisins avec qui jouer, s’entraîner ou encourager.' },
      { icon: 'idea', title: 'Votre prochaine idée', description: 'Jeux, culture… ou tout ce qui rassemble.' },
    ],
  },
  parents: {
    kicker: 'Grandir avec le français',
    title: 'Confiance, amitiés et langue vivante.',
    paragraphs: [
      'Notre groupe de parents aide les familles à donner au français une place naturelle dans le quotidien des enfants, grâce aux playdates, aux activités partagées, aux conversations et aux amitiés.',
      'Familles francophones, bilingues ou mixtes, tout le monde est bienvenu. Les parents peuvent échanger et organiser des activités, tandis que les enfants trouvent davantage d’occasions de parler français avec confiance tout en grandissant à Londres.',
    ],
    imageAlt:
      'Illustration de parents et d’enfants réunis devant un café à Stroud Green, dans le N4',
    note: 'Plus d’occasions de parler, de jouer et de créer des liens en français.',
  },
  closing: {
    eyebrow: 'Proposez une idée',
    title: 'Se rencontrer ici. Construire ensemble.',
    description:
      'Rejoignez des voisins qui partagent la langue et la culture françaises, avec l’envie de contribuer à la vie du nord de Londres.',
    cta: 'Ouvrir WhatsApp',
    footnote: 'WhatsApp s’ouvrira dans un nouvel onglet.',
  },
  footer: {
    line: 'Créé avec soin par des voisins, pour leurs voisins.',
    location: 'North London · N4',
  },
} as const satisfies SiteContent;

export const translations: Readonly<Record<Locale, SiteContent>> = { en, fr };
