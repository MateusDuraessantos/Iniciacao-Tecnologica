<template>
  <div>
    <BannerInfos :conteudos="conteudos" />
    <MainContent
      :ferramentas="ferramentas"
      :conteudos="conteudos"
      :asideInfos="asideInfos"
    />
  </div>
</template>

<script>
import BannerInfos from "../components/BannerInfos.vue";
import MainContent from "../components/Main.vue";

export default {
  name: "MaquetariaPage",
  components: {
    BannerInfos,
    MainContent,
  },
  data() {
    return {
      asideInfos: {
        horarioDeFuncionamento: "13h às 16h",
        campus: "Campus Higienópolis",
        localizacao: "Prédio 9 - Arquitetura e Design",
        end: "R. da Consolação, 930 - Consolação, São Paulo - SP, 01302-907",
        /* Sobre o cordenador */
        cordenadorPerfil: "/img/eli.jpg",
        cordenadorNome: "Eli",
        cordenadorContato: "+55 (11) 0000-0000",
        cordenadorEmail: "mackenzie@mackenzie.com.br",

        tecnico: [
          {
            tecnicoImg: "/img/jake-sully.jpg",
            tecnicoName: "Jake Sully",
            tecnicoEmail: "avatar2brabo@century.com",
          },
          {
            tecnicoImg: "/img/walter-white.jpg",
            tecnicoName: "Walter White - Heisenberg",
            tecnicoEmail: "breakingbad@netflix.com",
          },
          {
            tecnicoImg: "/img/final-space.jpg",
            tecnicoName: "Final Space",
            tecnicoEmail: "finalspace@netflix.com",
          },
        ],
      },
      conteudos: {
        bannerImg: "/img/lab/maquetaria/image8.jpg",
        pageName: "Laboratório de maquetaria",
        apresentacao:
          "A maquetaria é o espaço destinado para confecção de modelos físicos (maquetes). Nos cursos de Arquitetura e Design, os modelos físicos são amplamente utilizados nas componentes curriculares, portanto é considero o local adequado para produção das atividades prezando a qualidade e segurança.",
        video: "/img/lab/maquetaria/video_maquetaria_1.MP4",
        none: "display: none;",
        imgVideo: "/img/lab/maquetaria/image6.jpg",
        carrosselOne: "Imagens do carrossel",
        carrosselTwo: "Imagens do carrossel",
        carrosselThree: "/img/lab/marcenaria/Teste.jpg",
        /* Todas as imagens do laboratório */
        gridTeste: [
          {
            imagensTeste: "/img/lab/maquetaria/image5.jpg",
          },
          {
            imagensTeste: "/img/lab/maquetaria/MAQUETARIA_01.jpg",
          },
          {
            imagensTeste: "/img/lab/maquetaria/maquetaria_02.jpg",
          },
          {
            imagensTeste: "/img/lab/maquetaria/m.jpg",
          },
          {
            imagensTeste: "/img/lab/maquetaria/image14.jpg",
          },
          {
            imagensTeste: "/img/lab/maquetaria/image12.jpg",
          },
          {
            imagensTeste: "/img/lab/maquetaria/image10.jpg",
          },
        ],
      },

      /*  */

      ferramentas: [
        {
          ferramenta: "Réguas",
          sobre: "Para auxiliar em cortes retos, deve se utilizar a régua de acrílico, pois a transparência auxilia a verificar se a posição do corte está correta referente ao desenho, e deve se usar as costas desta régua, a parte graduada em centímetros deve ser usada apenas para desenhos. Não é recomendado o uso de réguas metálicas para os cortes, pois estas podem oferecer riscos ao usuário, pois caso a lâmina passe pela régua, ela escorregara e poderá atingir a mão do usuário, com a régua de acrílico, devido ao seu material, ela oferecer mais atrito contra a lamina caso isso ocorra, diminuindo o risco de acidentes.",
          linkButton1: "#reguas",
          linkButton2: "reguas",

          tumble: "/img/lab/maquetaria/equipamentos/reguas.webp",
          gridInfosImg: [
            {
              url: "/img/lab/maquetaria/equipamentos/reguas.webp",
            },
            {
              url: "/img/lab/maquetaria/equipamentos/reguasacrilico.jpg",
            },
            {
              url: "/img/lab/maquetaria/equipamentos/27901768_1GG.webp",
            },
            {
              url: "/img/lab/maquetaria/equipamentos/regua.jpg",
            },
          ],
        },
        {
          ferramenta: "Estiletes",
          sobre:
            "Uma das principais ferramentas para maquetistas é o estilete, vastamente utilizado em diversas áreas do trabalho manual. Nas maquetes o seu uso tem uma grande utilida de desde cortes mais pesados em materiais mais espessos ou um detalhamento de peças delicadas. E para o uso correto e principalmente seguro, existem certos procedimentos a serem seguidos para um trabalho sem riscos, visto que ainda sim se trata de um instrumento cortante.",
          linkButton1: "#estilete",
          linkButton2: "estilete",

          tumble: "/img/lab/maquetaria/equipamentos/estilete.jpg",
          gridInfosImg: [
            {
              url: "/img/lab/maquetaria/equipamentos/estilete.jpg",
            },
            {
              url: "/img/lab/maquetaria/equipamentos/estileteprofissional.webp",
            },
          ],
        },
      ],
    };
  },
};
</script>
