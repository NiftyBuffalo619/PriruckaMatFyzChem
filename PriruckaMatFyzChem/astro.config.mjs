import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: 'Příručka MatFyzChem',
    social: {
      github: 'https://github.com/withastro/starlight'
    },
    sidebar: [{
      label: "📚O Příručce",
      items: [{
        label: "Úvod",
        link: "uvod/uvod"
      }]
    }, {
      label: "Tabulky",
      items: [{
        label: "Úvod",
        link: "tabulky/uvod"
      },{
        label: "Měrná tepelná kapacita",
        link: "tabulky/mernatepelnakapacita"
      }, {
        label: "Tření",
        link: "tabulky/treni"
      }]
    },{
      label: 'πMatematika',
      items: [
      // Each item here is one entry in the navigation menu.
      {
        label: "Množiny a Logika",
        items: [{
          label: "Symboly",
          link: "matematika/mnozinyalogika/symboly"
        },{
          label: "Číselné obory",
          link: "matematika/mnozinyalogika/ciselneobory",
        }, {
          label: "Alfabeta",
          link: "matematika/mnozinyalogika/alfabeta",
        }, {
          label: "Množiny Příklady",
          items: [{
            label: "Příklady",
            link: "matematika/mnozinyalogika/prikladymnozinylehke",
          }]
        }]
      },
      {
        label: "Elementární teorie čísel",
        items: [{
         label: "Dělitelnost",
         link: "matematika/elementarniteoriecisel/delitelnost"
        }, {
          label: "Největší společná dělitel",
          link: "matematika/elementarniteoriecisel/nejvetsispolecnydelitel"
        }, {
          label: "Nejmenší společný násobek",
          link: "matematika/elementarniteoriecisel/nejmensispolecnynasobek"
        }]
     },
      {
        label: 'Funkce',
        items: [{
          label: 'Úvod',
          link: 'matematika/goniometrickefuknce/uvod',
          badge: {
            text: "Nové",
            variant: "success"
          }
        }, {
          label: 'Funkce Sinus',
          link: 'matematika/goniometrickefunkce/sinus'
        }, {
          label: 'Funkce Cosinus',
          link: 'matematika/goniometrickefunkce/cosinus'
        },
        {
          label: 'Funkce Tangens',
          link: 'matematika/goniometrickefunkce/tangens'
        },
        {
          label: 'Funkce Cotangens',
          link: 'matematika/goniometrickefunkce/cotangens'
        }]
      },
      {
        label: "Algebra",
        items: [{
          label: "Výrazy",
          items: [{
            label: "Práce s mnohočleny",
            link: "matematika/vyrazy/pracesmnohocleny"
          }]
        },{
          label: "Logaritmy",
          items: [{
              label: 'Úvod',
              link: 'matematika/logaritmy/uvod',
              badge: {
                text: "Experimentální",
                variant: "caution"
              }
          }, {
            label: 'Přirozený logaritmus',
            link: 'matematika/logaritmy/prirozenylogaritmus'
          }, {
            label: 'Věty o logaritmech',
            link: 'matematika/logaritmy/vetyologaritmech'
          }, {
            label: "Příklady",
            items: [{
                label: 'Příklady',
                link: 'matematika/logaritmy/priklady/lehke',
                badge: {
                  text: "Lehké",
                  variant: "success",
                }
              }, {
                label: 'Příklady',
                link: 'matematika/logaritmy/priklady/stredni',
                badge: {
                  text: "Střední",
                  variant: "caution",
                }
              }, {
                label: 'Příklady',
                link: 'matematika/logaritmy/priklady/tezke',
                badge: {
                  text: "Těžké",
                  variant: "danger",
                },
              }]
          }]
        }, {
          label: "Komplexní čísla",
          items: [{
            label: "Úvod",
            link: "matematika/komplexnicisla/uvod"
          }, {
            label: "Imaginární jednotka",
            link: "matematika/komplexnicisla/imaginarnijednotka"
          }, {
            label: "Gaussova rovina",
            link: "matematika/komplexnicisla/gaussovarovina"
          }]
        }], 
      },{
        label: "Matematická Analýza",
        items: [{
          label: "Úvod",
          link: "matematika/matematickaanalyza/uvod"
        }, {
          label: "Posloupnosti",
          items: [{
            label: "Úvod",
            link: "matematika/matematickaanalyza/posloupnosti/uvod"
          }, {
            label: "Zápis pomocí n-týho členu",
            link: "matematika/matematickaanalyza/posloupnosti/zapispomocintyhoclenu"
          }, {
            label: "Rekurentní zápis",
            link: "matematika/matematickaanalyza/posloupnosti/rekurentnizapis"
          }, {
            label: "Aritmetická posloupnost",
            link: "matematika/matematickaanalyza/posloupnosti/aritmetickaposloupnost"
          }, {
            label: "Geometrická posloupnost",
            link: "matematika/matematickaanalyza/posloupnosti/geometrickaposloupnost"
          }]
        }, {
          label: "Limity Posloupnosti",
          items: [{
            label: "Úvod",
            link: "matematika/matematickaanalyza/limityposloupnosti/uvod"
          },{
            label: "Popis Limity Posloupnosti",
            link: "matematika/matematickaanalyza/limityposloupnosti/popislimity"
          }, {
            label: "Definice Limity",
            link: "matematika/matematickaanalyza/limityposloupnosti/definicelimity"
          },{
            label: "Základní Limity",
            link: "matematika/matematickaanalyza/limityposloupnosti/zakladnilimity"
          },{
            label: "Neurčité výrazy", 
            link: "matematika/matematickaanalyza/limityposloupnosti/neurcitevyrazy"
          },{
            label: "Věty o Limitách",
            link: "matematika/matematickaanalyza/limityposloupnosti/vetyolimitach"
          }]
        }]
      }]
    }, {
      label: '⚛Fyzika',
      items: [{
        label: 'Mechanika',
        items: [{
          label: "Úvod",
          link: "fyzika/mechanika/uvod",
        }, {
          label: "Klasická Mechanika",
          items: [{
            label: "Úvod",
            link: "fyzika/mechanika/klasickamechanika/uvod"
          }, {
            label: "Kinematika",
            items: [{
              label: "Úvod",
              link: "fyzika/mechanika/kinematika/uvod",
            }]
          }, {
            label: "Dynamika",
            items: [{
              label: "Úvod",
              link: "fyzika/mechanika/dynamika/uvod",
            }, {
              label: "Newtonovy zákony",
              items: [{
                label: "1. Zákon setrvačnosti",
                link: "fyzika/mechanika/klasickamechanika/dynamika/newtonovyzakony/zakonsetrvacnosti"
              }, {
                label: "2. Zákon Síly",
                link: "fyzika/mechanika/klasickamechanika/dynamika/newtonovyzakony/zakonsily",
                badge: {
                  text: "Lehké",
                  variant: "success"
                }
              }, {
                label: "3. Akce a reakce",
                link: "fyzika/mechanika/klasickamechanika/dynamika/newtonovyzakony/zakonakceareakce"
              }, {
                label: "Hybnost",
                link: "fyzika/mechanika/klasickamechanika/dynamika/newtonovyzakony/hybnost"
              },{
                label: "Příklady",
                items: [{
                  label: "Příklady",
                  link: "fyzika/mechanika/klasickamechanika/dynamika/newtonovyzakony/prikladylehke",
                  badge: {
                    text: "Lehké",
                    variant: "success"
                  }
                },]
              }]
            }]
          },]
        }, {
          label: "Kvantová Mechanika",
          items: [{
            label: "Úvod",
            link: "fyzika/mechanika/kvantovamechanika"
          }]
        },]
      }, {
        label: "AstroFyzika",
        items: [{
          label: "Úvod",
          link: "fyzika/astrofyzika/uvod"
        }, {
          label: 'Keplerovy Zákony',
          items: [{
            label: "Úvod",
            link: "fyzika/keplerovyzakony/uvod"
          }]
        }]
      }]
    }, {
      label: "🧪Chemie",
      items: [{
        label: "Organická Chemie",
        items: [{
          label: "Úvod",
          link: "chemie/organickachemie/uvod"
        }]
      }, {
        label: "Fyzikální Chemie",
        items: [{
          label: "Termochemie",
          items: [{
            label: "Úvod",
            link: "chemie/termochemie/uvod"
          },{
            label: "Entalpie",
            link: "chemie/termochemie/entalpie"
          },{
            label: "Termochické zákony",
            link: "chemie/termochemie/termochemickezakony"
          },{
            label: "Standartní slučovací teplo",
            link: "chemie/termochemie/standartnislucovaciteplo"
          },{
            label: "Standarní spalovací teplo",
            link: "chemie/termochemie/standartnispalneteplo"
          },{
            label: "Disociační Energie",
            link: "chemie/termochemie/disociacnienergie"
          }]
        }]
      }]
    }]
  }), mdx()]
});