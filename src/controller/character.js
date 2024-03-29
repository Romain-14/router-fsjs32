const characters = [
    {
        id: 1,
        title1: "Gambit",
        title2: "le joueur de poker",
        content:
            "Remy LeBeau naît à La Nouvelle-Orléans en Louisiane. Enlevé de l'hôpital où il est né, il est remis à l'Antiquaire (Antiquary) en cadeau. L'enfant est qualifié comme « Le Diable Blanc » (en français dans le texte), croyant qu'il a été prophétisé pour unir les guildes des voleurs et des assassins de la Nouvelle-Orléans, alors en guerre. Peu de temps après, l’enfant est confié aux soins du Fagan's Mob, une bande de voleurs de rue qui l’élèvent et lui apprennent les voies du vol à la tire.",
        src: "/gambit.jpg",
        alt: "dans sa tenue de super hero, il tient une carte de poker et son baton",
        category_id: [1, 3],
    },
    {
        id: 2,
        title1: "Goku",
        title2: "Le superhero Sayan",
        content:
            "Kakarot est un Saiyan qui est né sur la planète Vegeta en l'an 737 de la chronologie de Dragon Ball. Il est le fils de Bardock et Gine. Étant donné que Kakarotto n'avait qu'une force de combat de 2 à la naissance, il a été mis dans la sous-classe des Saiyans. Les Saiyans avaient pour rituel initiatique d'envoyer leurs enfants conquérir les planètes où les habitants avaient un faible potentiel de combat. Kakarotto fut envoyé sur Terre à bord d'un vaisseau spatial, alors qu'il n'était encore qu'un bébé, et ceci juste avant que sa planète natale ne soit détruite par Freezer après la suggestion du dieu de la destruction Beerus.",
        src: "/goku.jpg",
        alt: "vu plongeante sur goku, transformé en super sayan",
        category_id: [2, 5],
    },
    {
        id: 3,
        title1: "Jessica",
        title2: "La super heroine made in whisky",
        content:
            "Jessica Campbell Jones (dont le véritable nom de famille n'est pas dévoilé) était une jeune fille impopulaire, voire inconnue pour ses camarades dans le lycée Midtown High School qu'elle fréquentait1. Elle craquait à l'époque pour Peter Parker2. Au cours d'un voyage en voiture, une dispute de la famille de Jessica provoque un accident avec un camion de l'armée. Un conteneur de produits radioactifs est projeté à ce moment sur Jessica. Seule survivante de ce drame, l'accident la plonge dans le coma.",
        src: "/jessicaJones.jpg",
        alt: "sourire radieux, elle vole haut dans les airs",
        category_id: [1,3],
    },
    {
        id: 4,
        title1: "Spiderman",
        title2: "L'homme araignée",
        content:
            "Peter Parker est un adolescent vivant à Forest Hills, dans le quartier de Queens à New York. Il est élevé par sa tante May et son oncle Ben depuis la mort de ses parents, Richard et Mary Parker. Peter est un élève doué, mais peu populaire. Lors d'une visite d'étude au laboratoire Oscorp, il est mordu par une araignée génétiquement modifiée. Il découvre peu après qu'il a développé des capacités surhumaines : force et agilité accrues, adhérence aux parois, et un « sens d'araignée » l'avertissant des dangers imminents.",
        src: "/spiderman.jpg",
        alt: "Spiderman lance sa toile pour se balancer entre les immeubles",
        category_id: [1,3],
    },
    {
        id: 5,
        title1: "Superman",
        title2: "L'homme d'acier",
        content:
            "Kal-El est le dernier fils de Jor-El et Lara Lor-Van, et le dernier kryptonien. Ses parents le placent dans une fusée et l'envoient sur Terre alors que Krypton est sur le point d'exploser. Il atterrit dans le Kansas, où il est recueilli par Jonathan et Martha Kent, qui l'élèvent comme leur propre fils et lui donnent le nom de Clark Kent. Clark grandit en sachant qu'il est différent des autres enfants et qu'il possède des pouvoirs extraordinaires, mais il ignore tout de ses origines. Il découvre ses origines extraterrestres à l'adolescence, après avoir développé ses pouvoirs.",
        src: "/superman.jpg",
        alt: "Superman vole dans le ciel, droit en position stationnaire",
        category_id: [1,4],
    },
    {
        id: 6,
        title1: "Wolverine",
        title2: "Le mutant griffu",
        content:
            "James Howlett est né en 1832 au Canada, dans la province de l'Alberta. Il est le fils illégitime de John Howlett, propriétaire terrien anglais, et d'Elizabeth Howlett, son épouse. Il est le demi-frère de John Howlett Jr. et le cousin de Rutherford B. Howlett. Il est également le petit-fils de Thomas Logan, le jardinier de la famille Howlett. Thomas Logan est un homme brutal et alcoolique qui bat régulièrement son fils, John Howlett Jr. Il est également le père de James Howlett, né de sa liaison avec Elizabeth Howlett.",
        src: "/wolverine.jpg",
        alt: "Wolverine, griffes sorties, prêt à se battre",
        category_id: [1,3],
    },
    {
        id: 7,
        title1: "Guts",
        title2: "Le guerrier noir",
        content:
            "Guts est né d'une prostituée qui meurt en le mettant au monde. Il est recueilli par une femme nommée Shisu, qui l'élève comme son propre fils. Celle-ci est tuée par des mercenaires alors que Guts est encore enfant. Il est ensuite recueilli par Gambino, le chef de la troupe de mercenaires qui a tué Shisu. Gambino est un homme violent et alcoolique qui ne voit en Guts qu'un moyen de gagner de l'argent. Il le maltraite et le viole régulièrement. Guts est contraint de se battre contre des adultes dès son plus jeune âge, et il devient un guerrier hors pair.",
        src: "/guts.webp",
        alt: "Guts, les mains sur son épée, prêt à se battre",
        category_id: [2, 6],
    },
    {
        id: 8,
        title1: "Batman",
        title2: "Le chevalier noir",
        content:
            "Bruce Wayne est le fils unique de Thomas et Martha Wayne, deux médecins philanthropes et fortunés de Gotham City. Alors qu'il est encore enfant, ses parents sont assassinés par un voleur, Joe Chill, dans une ruelle de Gotham. Le jeune Bruce est alors recueilli par son majordome Alfred Pennyworth, qui devient son tuteur légal et son confident. Bruce Wayne grandit avec la conviction que Gotham City est une ville corrompue, qui a besoin d'être purgée du crime et de la corruption. Il décide de consacrer sa vie à lutter contre le crime et à protéger les innocents.",
        src: "/batman.jpg",
        alt: "Batman énervé, sous la pluie, prêt à se battre",
        category_id: [1, 4],
    },
    {
        id: 9,
        title1: "Thor",
        title2: "Le dieu du tonnerre",
        content:
            "Thor est le fils d'Odin et de la déesse Gaea. Il est le dieu du tonnerre et de la foudre, et possède une force et une endurance surhumaines. Il est également capable de contrôler les éléments, notamment la météo. Il est le demi-frère de Loki, le dieu de la malice. Thor est un guerrier courageux et loyal, qui se bat pour défendre Asgard et les Neuf Royaumes. Il est également connu pour son arrogance et son impulsivité. Il est banni d'Asgard par Odin après avoir déclenché une guerre contre les Géants de Glace. Il est alors envoyé sur Terre, où il est transformé en humain par Odin.",
        src: "/thor.jpg",
        alt: "Thor frappant le sol avec son marteau Mjolnir",
        category_id: [1,3],
    },
];

const getAll = (req, res) => {
    res.json(characters);
}

const getById = (req, res) => {
    const id = parseInt(req.params.id);
    const data = characters.find((data) => data.id === id);
    res.json(data);
}

export { getAll, getById };