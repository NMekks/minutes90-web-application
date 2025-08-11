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
      position: 'Forward - Right Winger',
      height_cm: 170,
      preferred_foot: 'Left',
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
      stadium: 'Allianz Arena',
      founded: 1900,
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
      agency: 'Gestifute',
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
    }
  },
];