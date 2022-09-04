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
  name: "MarcenariaPage",
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
        apresentacao: "",
        bannerImg: "/img/lab/marcenaria/marcenaria_1.jpg",
        pageName: "Laboratório de Marcenaria",
        video: "/img/lab/marcenaria/video_marcenaria_1.mp4",
        carrosselOne: "Imagens do carrossel",
        carrosselTwo: "Imagens do carrossel",
        carrosselThree: "/img/lab/marcenaria/Teste.jpg",
        /* Todas as imagens do laboratório */
        gridTeste: [
          {
            imagensTeste: "/img/lab/marcenaria/marcenaria_1.jpg",
          },
          {
            imagensTeste: "/img/lab/marcenaria/marcenaria_2.jpg",
          },
          {
            imagensTeste: "/img/lab/marcenaria/marcenaria_3.jpg",
          },
          {
            imagensTeste: "/img/lab/marcenaria/marcenaria_4.jpg",
          },
        ],
      },

      /*  */

      ferramentas: [
        {
          ferramenta: "Serra de corte",
          sobre:
            "Serra corte rápido construção robusta, morsa de aperto rápido, guia de corte angular, compartimento integrado para chave de ajuste e troca do disco, interruptortipo gatilho com função homem morto e orifício para cadeado. Ideal para trabalhos em serralheiras e departamentos de manutenção em cortes de metais.",
          linkButton1: "#serradecorte",
          linkButton2: "serradecorte",
          tumble: "/img/lab/marcenaria/equipamentos/serradecorte.jpg",

          gridInfosImg: [
            {
              url: "/img/lab/marcenaria/equipamentos/serradecorte.jpg",
            },
          ],
        },
        {
          ferramenta: "CNC Router",
          sobre: "",
          linkButton1: "#cnc-router",
          linkButton2: "cnc-router",
          tumble: "/img/lab/marcenaria/equipamentos/cnc-router.jpg",

          gridInfosImg: [
            {
              url: "/img/lab/marcenaria/equipamentos/cnc-router.jpg",
            },
          ],
        },

        {
          ferramenta: "Furadeira",
          sobre: "",
          linkButton1: "#furadeira",
          linkButton2: "furadeira",
          tumble: "/img/lab/marcenaria/equipamentos/furadeira.jpg",

          gridInfosImg: [
            {
              url: "/img/lab/marcenaria/equipamentos/furadeira.jpg",
            },
          ],
        },
        {
          ferramenta: "Parafusadeira",
          sobre: "",
          linkButton1: "#parafusadeira",
          linkButton2: "parafusadeira",
          tumble: "/img/lab/marcenaria/equipamentos/parafusadeira.jpg",

          gridInfosImg: [
            {
              url: "/img/lab/marcenaria/equipamentos/parafusadeira.jpg",
            },
          ],
        },
        {
          ferramenta: "Tupia",
          sobre: "",
          linkButton1: "#tupia-tupia",
          linkButton2: "tupia-tupia",
          tumble: "/img/lab/marcenaria/equipamentos/tupia.jpg",

          gridInfosImg: [
            {
              url: "/img/lab/marcenaria/equipamentos/tupia.jpg",
            },
          ],
        },
        {
          ferramenta: "Serra Tico Tico",
          sobre: "",
          linkButton1: "#ticotico",
          linkButton2: "ticotico",
          tumble: "/img/lab/marcenaria/equipamentos/ticotico.jpg",

          gridInfosImg: [
            {
              url: "/img/lab/marcenaria/equipamentos/ticotico.jpg",
            },
          ],
        },
      ],
    };
  },
};
</script>
