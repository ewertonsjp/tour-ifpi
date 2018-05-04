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
        'title' : 'VOCÊ precisa se atualizar!',
        'text' : 'Se a tecnologia elimina alguns postos de trabalho, ela também cria novas profissões. Aliás, no mundo das novas profissões, articulador virou palavra-chave. Aqueles que souberem unir diferentes áreas do conhecimento para gerar novos serviços, passam a valer ouro.'
      },
      {
        'src' : 'curso_01.png',
        'title' : 'Falta de profissionais no setor de TI preocupa o mercado',
        'text' : 'Uma das razões apontadas é que os cursos de Tecnologia estão focados atualmente em tecnologias tradicionais e não dá tempo de um aluno se atualizar sobre um mercado que evolui tão rápido.'
      },
      {
        'src' : 'curso_02.jpg',
        'title' : '#IFPI',
        'text' : 'Educação gratuita e de qualidade.'
      },
      {
        'src' : 'curso_03.jpg',
        'title' : 'Tecnologias para criar Sites e Sistemas WEB',
        'text' : 'Desenvolva sites e sistemas WEB que podem ser aplicados às necessidades da sua região.'
      },
      {
        'src' : 'curso_04.jpg',
        'title' : 'Infraestrutura de TI',
        'text' : 'Implantação e manutenção de serviços de informática necessários ao bom funcionamento de uma empresa, como backup, gerência de internet e virtualização.'
      },
      {
        'src' : 'curso_05.jpg',
        'title' : 'Tecnologias para criar Aplicativos para Smartphone.',
        'text' : 'Crie sistemas que rodam em dispositivos móveis e que sempre estão disponíveis aos usuário, em qualquer lugar, a qualquer momento.'
      },
      {
        'src' : 'estrutura_01.jpg',
        'title' : 'Infraestrutura de Qualidade',
        'text' : 'O IFPI dispõe de estruturas de alta qualidade, como salas de aulas climatizadas, laboratórios equipados, refeitório e biblioteca.'
      },
      {
        'src' : 'evento_01.png',
        'title' : 'O #IFPI faz eventos',
        'text' : 'Os alunos participam do planejamento e organização de eventos. Em 2018, a SEMINFO - Semana de INFORMÁTICA do Campus PAULISTANA - vai para sua 3º Edição. Contamos com VC ;)'
      },
      {
        'src' : 'evento_02.jpg',
        'title' : 'Participe de Visitas Técnicas',
        'text' : 'Visite e compreenda como empresas de tecnologia funcionam NA PRÁTICA.'
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
