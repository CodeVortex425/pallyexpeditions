const translations = {
  en: {
      title: "Explore Breathtaking Adventures with Pally Expeditions",
      description: "Discover the world’s most exciting destinations with us!",
      bookNow: "Book Your Tour Now",
      tourCategories: "Our Popular Tour Categories",
      adventure: "Adventure Tours",
      cultural: "Cultural Tours",
      luxury: "Luxury Tours",
      budget: "Budget-Friendly Tours"
  },
  sw: {
    title: "Gundua Matukio ya Kuvutia na Pally Expeditions",
    description: "Gundua maeneo ya kusisimua zaidi duniani pamoja nasi!",
    bookNow: "Weka Nafasi ya Safari Yako Sasa",
    tourCategories: "Aina Zetu Maarufu za Safari",
    adventure: "Safari za Kivumbuzi",
    cultural: "Safari za Kitamaduni",
    luxury: "Safari za Kifahari",
    budget: "Safari Nafuu"
},
fr: {
    title: "Explorez des aventures à couper le souffle avec Pally Expeditions",
    description: "Découvrez les destinations les plus passionnantes du monde avec nous !",
    bookNow: "Réservez votre voyage maintenant",
    tourCategories: "Nos catégories de circuits populaires",
    adventure: "Circuits d'aventure",
    cultural: "Circuits culturels",
    luxury: "Circuits de luxe",
    budget: "Circuits économiques"
},
es: {
    title: "Explora Aventuras Impresionantes con Pally Expeditions",
    description: "¡Descubre los destinos más emocionantes del mundo con nosotros!",
    bookNow: "Reserva Tu Tour Ahora",
    tourCategories: "Nuestras Categorías de Tours Populares",
    adventure: "Tours de Aventura",
    cultural: "Tours Culturales",
    luxury: "Tours de Lujo",
    budget: "Tours Económicos"
},
de: {
    title: "Erlebe Atemberaubende Abenteuer mit Pally Expeditions",
    description: "Entdecke die aufregendsten Reiseziele der Welt mit uns!",
    bookNow: "Buche Deine Tour Jetzt",
    tourCategories: "Unsere Beliebten Tour-Kategorien",
    adventure: "Abenteuerreisen",
    cultural: "Kulturelle Touren",
    luxury: "Luxusreisen",
    budget: "Preiswerte Touren"
},
zh: {
    title: "与 Pally Expeditions 探索惊艳冒险",
    description: "与我们一起探索世界上最令人兴奋的目的地！",
    bookNow: "立即预订您的旅行",
    tourCategories: "我们受欢迎的旅行类别",
    adventure: "探险之旅",
    cultural: "文化之旅",
    luxury: "豪华之旅",
    budget: "经济实惠之旅"
},
ru: {
    title: "Исследуйте захватывающие приключения с Pally Expeditions",
    description: "Откройте для себя самые захватывающие направления мира вместе с нами!",
    bookNow: "Забронируйте свой тур сейчас",
    tourCategories: "Популярные категории туров",
    adventure: "Приключенческие туры",
    cultural: "Культурные туры",
    luxury: "Роскошные туры",
    budget: "Бюджетные туры"
},
ar: {
    title: "استكشف مغامرات مذهلة مع Pally Expeditions",
    description: "اكتشف معنا أكثر الوجهات إثارة في العالم!",
    bookNow: "احجز جولتك الآن",
    tourCategories: "فئات الجولات الشهيرة لدينا",
    adventure: "جولات المغامرات",
    cultural: "الجولات الثقافية",
    luxury: "الجولات الفاخرة",
    budget: "الجولات الاقتصادية"
},
ja: {
    title: "Pally Expeditions で息をのむような冒険を探索",
    description: "私たちと一緒に世界で最もエキサイティングな目的地を発見しましょう！",
    bookNow: "今すぐツアーを予約",
    tourCategories: "人気のツアーカテゴリー",
    adventure: "アドベンチャーツアー",
    cultural: "文化ツアー",
    luxury: "ラグジュアリーツアー",
    budget: "お手頃ツアー"
}
};

function changeLanguage(lang) {
  document.querySelector(".hero-content h1").textContent = translations[lang].title;
  document.querySelector(".hero-content p").textContent = translations[lang].description;
  document.querySelector(".cta-button").textContent = translations[lang].bookNow;
  document.querySelector(".tour-categories h2").textContent = translations[lang].tourCategories;

  let selectedLanguage = document.getElementById("languageSelector").value;
            alert("Language changed to: " + selectedLanguage);

  const categories = document.querySelectorAll(".category h3");
  categories[0].textContent = translations[lang].adventure;
  categories[1].textContent = translations[lang].cultural;
  categories[2].textContent = translations[lang].luxury;
  categories[3].textContent = translations[lang].budget;
}