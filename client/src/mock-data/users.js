// src/mock-data/users.js
export const mockUsers = [
  {
    id: 1,
    email: 'leo.messi@example.com',
    role: 'player',
    is_verified: true,
    profile: {
      displayName: 'Leo Messi',
      profilePicture: 'https://img.a.transfermarkt.technology/portrait/header/28003-1710182518.jpg?lm=1',
      coverPhoto: 'https://icdn.football-espana.net/wp-content/uploads/2023/06/Lionel-Messi-2.jpeg',
      position: 'Forward - Right Winger',
      height_cm: 170,
      preferred_foot: 'Left',
      stats: { "Goals": 837, "Assists": 372 },
      videos: ["https://www.youtube.com/embed/k7D8aL3K_OQ"]
    }
  },
  {
    id: 2,
    email: 'bayern.munich@example.com',
    role: 'club',
    is_verified: true,
    profile: {
      displayName: 'FC Bayern München',
      profilePicture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg/1200px-FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg.png',
      coverPhoto: 'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/i4jPhW15x2D8/v1/1200x-1.jpg',
      stadium: 'Allianz Arena',
      founded: 1900,
      stats: { "League Titles": 33, "Champions Leagues": 6 },
      videos: ["https://www.youtube.com/embed/5a-T_2sNe9A"]
    }
  },
  {
    id: 3,
    email: 'jorge.mendes@example.com',
    role: 'agent',
    is_verified: true,
    profile: {
      displayName: 'Jorge Mendes',
      profilePicture: 'https://images.english.elpais.com/resizer/9LcFQjYUnqR3Y5K0E3Bw8y3S_gs=/1200x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/5ZDEQLGG3ZCHNBOKP3BIE7YV5A.jpg',
      coverPhoto: 'https://e0.365dm.com/22/08/2048x1152/skysports-cristiano-ronaldo_5870020.jpg',
      agency: 'Gestifute',
      stats: { "Represented Players": 150, "Total Market Value": "€1.2B" },
      videos: []
    }
  },
    {
    id: 4,
    email: 'scout.person@example.com',
    role: 'scout',
    is_verified: false,
    profile: {
      displayName: 'Alex Schmidt',
      profilePicture: 'https://www.fakepersongenerator.com/Face/male/male2016108625577171.jpg',
      coverPhoto: 'https://media.istockphoto.com/id/1345099363/photo/stadium.jpg?s=612x612&w=0&k=20&c=PKb1ej21YYs5T5z9s9g2e_DBZp1fTr3XyM5ax7UH3x0=',
      stats: { "Talents Discovered": 12, "Regions": "South America" },
      videos: []
    }
  },
];