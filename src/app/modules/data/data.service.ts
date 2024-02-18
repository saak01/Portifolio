import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  experience_pt = [
    {
      data_inital: "12/04/2022",
      data_end: "12/05/2023",
      name: "Pacto Soluções",
      role: "Analista de dados/ Desenvolvedor Front-end",
      description: "Durante o meu estágio na Pacto Soluções, atuei como Analista de Dados e desenvolvedor Front-End. Um dos projetos em destaque foi a criação de um dashboard de análise de dados, no qual desempenhei um papel fundamental. Utilizando o framework Angular, desenvolvi uma interface intuitiva e responsiva, além de integrar o sistema de pagamento com o gateway Stripe. Além disso, trabalhei com o back-end em Node e utilizei o Git para versionamento de código.Além das minhas habilidades em Angular, também tive a oportunidade de expandir meu conhecimento no desenvolvimento mobile, explorando a plataforma Flutter. Durante essa experiência, adquiri proficiência no desenvolvimento de aplicativos móveis, demonstrando a minha capacidade de me adaptar e aprender novas tecnologias rapidamente."
    }
  ];

  experience_en = [
    {
      data_inital: "12/04/2022",
      data_end: "12/05/2023",
      name: "Pacto Soluções",
      role: "Data Analyst / Front-end Developer",
      description: "During my internship at Pacto Soluções, I worked as a Data Analyst and Front-end Developer. One of the standout projects was the creation of a data analysis dashboard, in which I played a key role. Using the Angular framework, I developed an intuitive and responsive interface, as well as integrated the payment system with the Stripe gateway. Additionally, I collaborated on the back-end using Node and utilized Git for code versioning. In addition to my Angular skills, I also had the opportunity to expand my knowledge in mobile development by exploring the Flutter platform. Through this experience, I gained proficiency in mobile app development, showcasing my ability to adapt and quickly learn new technologies."
    }
];


  data_text_pt_br = {
    presentation: "Olá, sou o",
    about_me: "Olá, sou João Victor, um apaixonado programador Front-end. Minha jornada começou no ensino médio e desde então venho combinando minha habilidade técnica com criatividade para criar designs impressionantes que não só atendem clientes, mas os deixam maravilhados. Além do código, encontro empolgação na leitura, jogos com amigos e no constante desejo de aprender e conectar com novas pessoas. Vamos juntos criar experiências incríveis.",
  };

  data_text_en = {
    presentation: "Hello, I'm",
    about_me: "Hello, I'm João Victor, a passionate Front-end programmer. My journey began in high school and since then, I've been blending my technical skills with creativity to craft impressive designs that not only meet clients' needs but also leave them amazed. Beyond the code, I find excitement in reading, gaming with friends, and the constant desire to learn and connect with new individuals. Let's collaborate to build incredible experiences together.",
  };

  skills_images = [
    {
      name: "Html",
      url: '../../../../../assets/icons/html-icon.png'
    },
    {
      name: "Css",
      url: '../../../../../assets/icons/css-icon.png'
    },
    {
      name: "Typescript",
      url: '../../../../../assets/icons/ts-icon.png'
    },
    {
      name: "Javascript",
      url: '../../../../../assets/icons/js-icon.png'
    },
    {
      name: "Angular",
      url: '../../../../../assets/icons/angular-icon.png'
    },
    {
      name: "Flutter",
      url: '../../../../../assets/icons/flutter-icon.png'
    },
    {
      name: "Nodejs",
      url: '../../../../../assets/icons/nodejs-icon.png'
    },
    {
      name: "Firebase",
      url: '../../../../../assets/icons/firebase-icon.png'
    },

  ]

  title_data_pt = ['Sobre mim', 'Habilidades', 'Projetos', 'Contatos']
  title_data_en = ['About me', 'Skills', 'Projects', 'Contacts']

  data_project_pt = [
    {
      title: "Holambra-LP",
      details: "A Holambra Landing Page é um projeto desenvolvido em Angular. O objetivo é criar uma landing page atraente, seguindo os padrões de design.",
      language: ["angular-icon.png", "html-icon.png","css-icon.png"],
      link: 'https://www.youtube.com/embed/C8kYSJquaXM?si=oePpUxtK0G5bdFil',
      github: 'https://github.com/saak01/Holambra-LP',
      demo:"https://holambra-a22c0.web.app/",
    },
    {
      title: "Easy-Bank-LP",
      details: "A Easy Bank Landing Page é um projeto desenvolvido em Angular como parte do desafio Front End Mentor. O objetivo é criar uma landing page atraente para promover o Easy Bank. ",
      language: ["angular-icon.png", "html-icon.png","css-icon.png"],
      link: 'https://www.youtube.com/embed/P_zn2Kraxbg?si=4QmzpKhXK-o9IRSo',
      github: 'https://github.com/saak01/Easy-Bank-LP',
      demo:"https://easy-bank-99c59.web.app/welcome",
    },
    {
      title: "Rick and Morty SPA",
      details: "O Rick and Morty SPA é uma Single Page Application desenvolvida para proporcionar uma experiência única na exploração do universo da série. Utilizando a API Rick & Morty para o consumo de dados, a aplicação segue o modelo de dashboard, apresentando listagens e detalhes dos personagens.",
      language: ["angular-icon.png", "html-icon.png","css-icon.png"],
      link: 'https://www.youtube.com/embed/ug-HXczp1Ng?si=zNzJSO-nnb4e5t8z',
      github: 'https://github.com/saak01/Desafio-Rick-Morty',
      demo:"https://central-rick-morr.web.app/login",
    },
    {
      title: "Sushi App",
      details: "Sushi-App é um cardápio digital inovador para pedidos de sushi e bebidas. Com um design intuitivo, os usuários exploram opções, veem imagens e descrições, fazem pedidos com facilidade. Uma solução eficiente para restaurantes de sushi com opções de pagamento integradas, tornando o processo de pedido conveniente.",
      language: ["dart-icon.png", "flutter-icon.png","firebase-icon.png"],
      link: 'https://www.youtube.com/embed/VIzN_N6eDWs?si=Ff0Fa0JpQvy3-53R',
      github: 'https://github.com/saak01',
      demo:"",
    },
    {
    title: "Pokedex Web Version",
    details: "Pokedex é um aplicativo criado por mim em Angular, projetado especificamente para fornecer informações sobre vários Pokémons.",
    language: ['ts-icon.png', 'html-icon.png', 'css-icon.png', 'angular-icon.png'],
    link: 'https://www.youtube.com/embed/O94jVpxO0ng?si=KVxPdZdlKo5PkS_a',
    github: 'https://github.com/saak01/Pokedex-Angular',
    demo:"https://pokedex-d6bc0.web.app/pokedex",

  },
  {
    title: "Pokedex Flutter Version",
    details: "O Pokedex Flutter é um aplicativo desenvolvido por mim usando o Flutter framework. Ele foi projetado especificamente para fornecer informações sobre vários Pokémons.",
    language: ['dart-icon.png', 'flutter-icon.png'],
    link: 'https://www.youtube.com/embed/Snls1fbEI7I?si=BgzafM7RUGVe9UQ8',
    github: 'https://github.com/saak01/Pokedex-Flutter',
    demo:"",
  },
  {
    title: "Card Perfume",
    details: "Perfume Card é um site cuidadosamente elaborado para apresentar um perfume exclusivo de maneira sofisticada e informativa. Desenvolvido com dedicação, este site oferece a chance de mergulhar nas nuances e detalhes únicos desse perfume excepcional.",
    language: ['ts-icon.png', 'html-icon.png', 'css-icon.png', 'angular-icon.png'],
    link: 'https://www.youtube.com/embed/nseKPz94I2k?si=nWgYhRxcenO8SoAV',
    github: 'https://github.com/saak01/Product-Preview-Card',
    demo:"https://card-perfume-2.netlify.app/",
  },
  {
    title: "Weather App",
    details: "O Weather App é uma aplicação inovadora desenvolvida para fornecer informações meteorológicas em tempo real para diversas localizações. Com esta aplicação, você terá acesso a atualizações precisas sobre as condições climáticas, previsões e muito mais.",
    language: ['js-icon.png', 'html-icon.png', 'css-icon.png', ],
    link: 'https://www.youtube.com/embed/LHdhV5tAAkY?si=FvchE99i4Bsjv3wI',
    github: 'https://github.com/saak01/Weather-App',
    demo:"https://weather-app-sak.netlify.app/",

  }
  ]



  data_project_en = [
    {
      title: "Holambra-LP",
      details: "Holambra Landing Page is a project developed in Angular. The objective is to create an attractive landing page, following design standards.",
      language: ["angular-icon.png", "html-icon.png","css-icon.png"],
      link: 'https://www.youtube.com/embed/C8kYSJquaXM?si=oePpUxtK0G5bdFil',
      github: 'https://github.com/saak01/Holambra-LP',
      demo:"https://holambra-a22c0.web.app/",
    },
    {
      title: "Easy-Bank-LP",
      details: "A Easy Bank Landing Page is a project developed in Angular as part of the Front End Mentor challenge. The goal is to create an attractive landing page to promote Easy Bank.",
      language: ["angular-icon.png", "html-icon.png","css-icon.png"],
      link: 'https://www.youtube.com/embed/P_zn2Kraxbg?si=4QmzpKhXK-o9IRSo',
      github: 'https://github.com/saak01/Easy-Bank-LP',
      demo:"https://easy-bank-99c59.web.app/welcome",

    },
    {
      title: "Rick and Morty SPA",
      details: "The Rick and Morty SPA is a Single Page Application designed to provide a unique experience in exploring the universe of the series. Utilizing the Rick & Morty API for data consumption, the application follows the dashboard model, showcasing listings and details of the characters.",
      language: ["angular-icon.png", "html-icon.png","css-icon.png"],
      link: 'https://www.youtube.com/embed/ug-HXczp1Ng?si=zNzJSO-nnb4e5t8z',
      github: 'https://github.com/saak01/Desafio-Rick-Morty',
      demo:"https://central-rick-morr.web.app/login",
    },
    {
      title: "Sushi App",
      details: "Sushi-App is an innovative digital menu for sushi and beverage orders. With an intuitive design, users explore options, view images and descriptions, and place orders easily. An efficient solution for sushi restaurants with integrated payment options, making the ordering process convenient.",
      language: ["dart-icon.png", "flutter-icon.png","firebase-icon.png"],
      link: 'https://www.youtube.com/embed/VIzN_N6eDWs?si=Ff0Fa0JpQvy3-53R',
      github: 'https://github.com/saak01',
      demo:"",
    },

    {
    title: "Pokedex Web Version",
    details: "Pokedex is an application created by me in Angular, designed specifically to provide information about various Pokémon.",
    language: ["ts-icon.png", "html-icon.png", "css-icon.png", "angular-icon.png"],
    link: 'https://www.youtube.com/embed/O94jVpxO0ng?si=KVxPdZdlKo5PkS_a',
    github: 'https://github.com/saak01/Pokedex-Angular',
    demo:"https://pokedex-d6bc0.web.app/pokedex",

  },
  {
    title: "Pokedex Flutter Version",
    details: "Pokedex Flutter is an application developed by me using the Flutter framework. It is designed specifically to provide information about various Pokémon.",
    language: ["dart-icon.png", "flutter-icon.png"],
    link: 'https://www.youtube.com/embed/Snls1fbEI7I?si=BgzafM7RUGVe9UQ8',
    github: 'https://github.com/saak01/Pokedex-Flutter',
    demo:"",

  },
  {
    title: "Card Perfume",
    details: "Perfume Card is a meticulously crafted website designed to showcase a unique fragrance in a sophisticated and informative manner. Developed with dedication, this site offers you the opportunity to delve into the nuances and distinct details of this exceptional perfume.",
    language: ['ts-icon.png', 'html-icon.png', 'css-icon.png', 'angular-icon.png'],
    link: 'https://www.youtube.com/embed/nseKPz94I2k?si=nWgYhRxcenO8SoAV',
    github: 'https://github.com/saak01/Product-Preview-Card',
    demo:"https://card-perfume-2.netlify.app/",

  },
  {
    title: "Weather App",
    details: "The Weather App is an innovative application developed to provide real-time weather information for various locations. With this application, you will have access to accurate updates on weather conditions, forecasts, and more.",
    language: ['js-icon.png', 'html-icon.png', 'css-icon.png', ],
    link: 'https://www.youtube.com/embed/LHdhV5tAAkY?si=FvchE99i4Bsjv3wI',
    github: 'https://github.com/saak01/Weather-App',
    demo:"https://weather-app-sak.netlify.app/",
  }



  ]


  constructor() { }
}

