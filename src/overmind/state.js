export const state = {
  filters: {
    experience: false,
    loisir: false
  },
  users: [
    {
      id: "1",
      firstName: "Pierre",
      lastName: "Durand",
      age: 25,
      experiences: [
        {
          annee: 2018,
          entreprise: "BlablaCar",
          poste: "Développeur Frond-End"
        },
        {
          annee: 2017,
          entreprise: "Leboncoin",
          poste: "Développeur Frond-End"
        }
      ],
      loisirs: [{ name: "lire" }]
    },
    {
      id: "2",
      firstName: "Paul",
      lastName: "Dupond",
      age: 26,
      experiences: [
        {
          annee: 2018,
          entreprise: "BlablaCar",
          poste: "Développeur Frond-End"
        },
        {
          annee: 2017,
          entreprise: "Leboncoin",
          poste: "Développeur Frond-End"
        }
      ],
      loisirs: [{ name: "sport" }]
    },
    {
      id: "3",
      firstName: "Jacques",
      lastName: "Dupuis",
      age: 30,
      experiences: [],
      loisirs: []
    },
    {
      id: "4",
      firstName: "Zinedine",
      lastName: "Zidane",
      age: 28,
      experiences: [],
      loisirs: [{ name: "sport" }]
    },
    {
      id: "5",
      firstName: "Kylian",
      lastName: "Mbappe",
      age: 21,
      experiences: [
        {
          annee: 2018,
          entreprise: "BlablaCar",
          poste: "Développeur Frond-End"
        }
      ],
      loisirs: []
    }
  ],
  filteredUsers: state => {
    return state.users
      .filter(user => {
        if (state.filters.experience) {
          return user.experiences.length !== 0;
        }
        return true;
      })
      .filter(user => {
        if (state.filters.loisir) {
          return user.loisirs.length !== 0;
        }
        return true;
      });
  }
};
