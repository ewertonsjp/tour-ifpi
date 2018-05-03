import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AreaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-area',
  templateUrl: 'area.html',
})
export class AreaPage {

  sources;
  note;

  index;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.index = -1;
    
    this.sources = [
      {
        'src' : 'mercado_01.png',
        'title' : 'Mercado de TI no Brasil deve crescer 5,8% em 2018.',
        'text' : 'No mundo, aposta-se que em 2018 os investimentos globais devem atingir os US$ 3,7 trilhões.'
      },
      {
        'src' : 'mercado_02.png',
        'title' : 'Crise? Que crise?',
        'text' : 'A crise assolou o país, o desemprego aumentou, algumas empresas fecharam, mas o setor de tecnologia da informação (TI), entretanto, continuou crescendo, contratando e recebendo demandas.'
      },
      {
        'src' : 'mercado_03.jpg',
        'title' : 'Há vagas',
        'text' : 'Oportunidades....'
      },
      {
        'src' : 'curso_01.png',
        'title' : 'No entanto, Falta de profissionais no setor de TI preocupa o mercado',
        'text' : 'Os cursos de TI estão focados atualmente em tecnologias tradicionais e não dá tempo de um aluno se atualizar sobre um mercado que evolui tão rápido.'
      },
      {
        'src' : 'curso_02.jpg',
        'title' : 'É aí que...',
        'text' : 'Curso de tecnologia focado nas necessidades do mercado.'
      },
      {
        'src' : 'curso_03.jpg',
        'title' : 'Tecnologias para criar Sites e Sistemas WEB',
        'text' : '[...]'
      },
      {
        'src' : 'curso_04.jpg',
        'title' : 'Infraestrutura de TI',
        'text' : '[...]'
      },
      {
        'src' : 'curso_05.jpg',
        'title' : 'Tecnologias para criar Aplicativos para Smartphone.',
        'text' : '[...]'
      },
      {
        'src' : 'estrutura_01.jpg',
        'title' : 'Infraestrutura de Qualidade',
        'text' : 'Laboratórios [...]'
      },
      {
        'src' : 'evento_01.png',
        'title' : 'O #IFPI faz eventos',
        'text' : 'Os alunos participam do planejamento e organização de eventos [...]. Em 2018, a SEMINFO vai para sua 3º Edição. Contamos com VC ;)'
      },
      {
        'src' : '',
        'title' : 'O alunos do #IFPI participam de eventos',
        'text' : 'Os alunos participam de eventos [congressos, simpósios ...]'
      },
      {
        'src' : '...',
        'title' : 'O #IFPI proporciona Visitas Técnicas',
        'text' : '...'
      },
      {
        'src' : '...',
        'title' : 'No #IFPI os alunos são desafiados a desenvolver o seu melhor!',
        'text' : 'stigma, manasch, prime...'
      },
      {
        'src' : 'desafio_03.jpg',
        'title' : 'Mais um [grande] desafio: Infoway Summer JOBs',
        'text' : 'Alunos do IFPI - Campus PAULISTANA foram desafiados pela empresa Infoway Tecnologia e Gestão em Saúde, sediada em Teresina-PI, a desenvolver um aplicativo em um período de 28 dias para ajudar no atendimento do SAMU.'
      },
      {
        'src' : 'desafio_04.jpg',
        'title' : 'Infoway Summer JOBs',
        'text' : 'Os alunos tiveram a oportunidade de conversar sobre Inovação com o Diretor de Pesquisa e Desenvolvimento da Infoway, Prof. Pedro de Alcantâra.'
      },
      {
        'src' : 'desafio_05.jpg',
        'title' : 'Infoway Summer JOBs',
        'text' : 'Os alunos experimentaram na prática o dia a dia de empresas de desenvolvimento de software, relacionando-se com um cliente real e tendo o suporte, acompanhamento e experiência da Infoway.'
      },
      {
        'src' : 'desafio_06.jpg',
        'title' : 'Infoway Summer JOBs',
        'text' : 'Botaram a mão na massa!'
      },
      {
        'src' : 'desafio_07.jpg',
        'title' : 'Infoway Summer JOBs',
        'text' : 'E ao final do 2º dia, já estavam com a ideia do aplicativo desenhada. Voltaram para PAULISTANA e, em 25 dias, desenvolveram o que fora prometido! ;|'
      },
      {
        'src' : 'desafio_08.jpg',
        'title' : 'Infoway Summer JOBs',
        'text' : 'Ainda deu tempo para dar entrevistas [...]'
      },
      {
        'src' : 'desafio_09.jpg',
        'title' : 'Infoway Summer JOBs',
        'text' : '[...] e se divertir!'
      },
      {
        'src' : 'desafio_10.jpg',
        'title' : 'Infoway Summer JOBs',
        'text' : 'Parabéns campeões! Quer fazer parte da próxima equipe?'
      }
    ];
    this.next();
  }

  next() {
    if (this.index < this.sources.length-1) {      
      ++this.index;
      this.note = this.sources[this.index];
    } else {
      this.navCtrl.pop();
      this.index = -1;
    }
  }

  previous() {
    if (this.index > 0) {      
      --this.index;
      this.note = this.sources[this.index];
    } else {
      this.navCtrl.pop();
      this.index = -1;
    }
  }

}
