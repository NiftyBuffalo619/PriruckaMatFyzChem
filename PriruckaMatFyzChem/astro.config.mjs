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
      label: 'Matematika',
      items: [
      // Each item here is one entry in the navigation menu.
      {
        label: 'Logaritmy',
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
        }]
      }, {
        label: 'Komplexní čísla',
        items: [{
          label: 'Úvod',
          link: 'matematika/komplexnicisla/uvod'
        }]
      }]
    }, {
      label: 'Fyzika',
      items: [{
        label: 'Newtonovy Zákony',
        items: [{
          label: "Úvod",
          link: "fyzika/newtonovyzakony/uvod"
        }]
      }, {
        label: 'Keplerovy Zákony',
        items: [{
          label: "Úvod",
          link: "fyzika/keplerovyzakony/uvod"
        }]
      }]
    }]
  }), mdx()]
});