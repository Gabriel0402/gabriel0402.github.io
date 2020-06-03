import React from 'react';

export default {
  'zh-cn': {
    brand: {
      brandName: '开源产品品牌名称',
      briefIntroduction: '关于开源产品的简单介绍',
      buttons: [
        {
          text: '立即开始',
          link: '/zh-cn/docs/demo1.html',
          type: 'primary',
        },
        {
          text: '查看Github',
          link: '',
          type: 'normal',
        },
      ],
    },
    introduction: {
      title: '开源产品的介绍',
      desc: '开源产品的简单介绍，提供一些该产品的优点、特性描述等',
      img: '/img/architecture.png',
    },
    features: {
      title: '特性一览',
      list: [
        {
          img: '/img/feature_transpart.png',
          title: '特性1',
          content: '特性1的简单概括',
        },
        {
          img: '/img/feature_loadbalances.png',
          title: '特性2',
          content: '特性2的简单概括',
        },
        {
          img: '/img/feature_service.png',
          title: '特性3',
          content: '特性3的简单概括',
        },
        {
          img: '/img/feature_hogh.png',
          title: '特性4',
          content: '特性4的简单概括',
        },
        {
          img: '/img/feature_runtime.png',
          title: '特性5',
          content: '特性5的简单概括',
        },
        {
          img: '/img/feature_maintenance.png',
          title: '特性6',
          content: '特性6的简单概括',
        },
      ],
    },
    start: {
      title: '快速开始',
      desc: '简单描述',
      img: '/img/quick_start.png',
      button: {
        text: '阅读更多',
        link: '/zh-cn/docs/demo1.html',
      },
    },
    // users: {
    //   title: '用户',
    //   desc: <span>简单描述</span>,
    //   list: [
    //     '/img/users_alibaba.png',
    //     '/img/users_alibaba.png',
    //     '/img/users_alibaba.png',
    //     '/img/users_alibaba.png',
    //     '/img/users_alibaba.png',
    //     '/img/users_alibaba.png',
    //     '/img/users_alibaba.png',
    //     '/img/users_alibaba.png',
    //     '/img/users_alibaba.png',
    //     '/img/users_alibaba.png',
    //     '/img/users_alibaba.png',
    //     '/img/users_alibaba.png',
    //     '/img/users_alibaba.png',
    //     '/img/users_alibaba.png',
    //     '/img/users_alibaba.png',
    //     '/img/users_alibaba.png',
    //   ],
    // },
  },
  'en-us': {
    brand: {
      brandName: 'Event-B',
      briefIntroduction: 'A formal method for system-level modelling and analysis',
      buttons: [
        {
          text: 'Quick Start',
          link: 'https://wiki.event-b.org/index.php/Event-B_Language',
          type: 'primary',
        },
        {
          text: 'Rodin Tool Set',
          link: 'https://sourceforge.net/projects/rodin-b-sharp/',
          type: 'normal',
        },
      ],
    },
    introduction: {
      title: 'introduction title',
      desc: 'some introduction of your product',
      img: '/img/architecture.png',
    },
    features: {
        title: 'Feature List',
        list: [
          {
            img: '/img/feature_transpart.png',
            title: 'modelling notation',
            content: 'set theory as a modelling notation',
          },
          {
            img: '/img/feature_loadbalances.png',
            title: 'refinement',
            content: 'use of refinement to represent systems at different abstraction levels',
          },
          {
            img: '/img/feature_service.png',
            title: 'proof',
            content: 'use of mathematical proof to verify consistency between refinement levels',
          },
          {
            img: '/img/feature_hogh.png',
            title: 'tool support',
            content: 'The Rodin Platform is an Eclipse-based IDE for Event-B that provides effective support for refinement and mathematical proof',
          }
          // {
          //   img: '/img/feature_runtime.png',
          //   title: 'feature5',
          //   content: 'feature description',
          // },
          // {
          //   img: '/img/feature_maintenance.png',
          //   title: 'feature6',
          //   content: 'feature description',
          // }
        ]
    },
    start: {
      title: 'Quick start',
      desc: 'some description text',
      img: '/img/quick_start.png',
      button: {
        text: 'READ MORE',
        link: '/en-us/docs/demo1.html',
      },
    },
    // users: {
    //   title: 'users',
    //   desc: <span>some description</span>,
    //   list: [
    //     '/img/users_alibaba.png',
    //     '/img/users_alibaba.png',
    //     '/img/users_alibaba.png',
    //     '/img/users_alibaba.png',
    //     '/img/users_alibaba.png',
    //     '/img/users_alibaba.png',
    //     '/img/users_alibaba.png',
    //     '/img/users_alibaba.png',
    //     '/img/users_alibaba.png',
    //     '/img/users_alibaba.png',
    //     '/img/users_alibaba.png',
    //     '/img/users_alibaba.png',
    //     '/img/users_alibaba.png',
    //     '/img/users_alibaba.png',
    //     '/img/users_alibaba.png',
    //     '/img/users_alibaba.png',
    //   ],
    // },
  },
};
