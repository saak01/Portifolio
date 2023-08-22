import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data_text_pt_br = {
    presentation: "Olá, sou o",
    about_me: "Olá, sou João Victor, um apaixonado programador Front-end. Minha jornada começou no ensino médio e desde então venho combinando minha habilidade técnica com criatividade para criar designs impressionantes que não só atendem clientes, mas os deixam maravilhados. Além do código, encontro empolgação na leitura, jogos com amigos e no constante desejo de aprender e conectar com novas pessoas. Vamos juntos criar experiências incríveis.",
  };

  data_text_en = {
    presentation: "Hello, I'm",
    about_me: "Hello, I'm João Victor, a passionate Front-end programmer. My journey began in high school and since then, I've been blending my technical skills with creativity to craft impressive designs that not only meet clients' needs but also leave them amazed. Beyond the code, I find excitement in reading, gaming with friends, and the constant desire to learn and connect with new individuals. Let's collaborate to build incredible experiences together.",
  };

  skills_images = [
    '../../../../../assets/icons/html-icon.png',
    '../../../../../assets/icons/css-icon.png',
    '../../../../../assets/icons/ts-icon.png',
    '../../../../../assets/icons/js-icon.png',
    '../../../../../assets/icons/angular-icon.png',
    '../../../../../assets/icons/flutter-icon.png',
    '../../../../../assets/icons/nodejs-icon.png',
    '../../../../../assets/icons/firebase-icon.png',

  ]

  title_data_pt = ['Sobre mim', 'Habilidades', 'Projetos', 'Contatos']
  title_data_en = ['About me', 'Skills', 'Projects', 'Contacts']

  data_project_pt = [{
    title: "Pokedex Web Version",
    details: "Pokedex é um aplicativo criado por mim em Angular, projetado especificamente para fornecer informações sobre vários Pokémons.",
    language: ['ts-icon.png', 'html-icon.png', 'css-icon.png', 'angular-icon.png'],
    link: 'https://www.youtube.com/embed/O94jVpxO0ng'
  },
  {
    title: "Pokedex Flutter Version",
    details: "O Pokedex Flutter é um aplicativo desenvolvido por mim usando o Flutter framework. Ele foi projetado especificamente para fornecer informações sobre vários Pokémons.",
    language: ['dart-icon.png', 'flutter-icon.png'],
    link: 'https://www.youtube.com/embed/Snls1fbEI7I'
  }
  ]

  data_project_en = [{
    title: "Pokedex Web Version",
    details: "Pokedex is an application created by me in Angular, designed specifically to provide information about various Pokémon.",
    language: ["ts-icon.png", "html-icon.png", "css-icon.png", "angular-icon.png"],
    link: 'https://www.youtube.com/embed/O94jVpxO0ng'
  },
  {
    title: "Pokedex Flutter Version",
    details: "Pokedex Flutter is an application developed by me using the Flutter framework. It is designed specifically to provide information about various Pokémon.",
    language: ["dart-icon.png", "flutter-icon.png"],
    link: 'https://www.youtube.com/embed/Snls1fbEI7I'

  }
  ]


  constructor() { }
}
