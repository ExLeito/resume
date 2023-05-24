// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

var header = {
  name: {
    first: 'Max',
    last: 'Dorofieiev',
  },
  address: 'Borshagivska st. 37',
  position: 'Junior Fullstack JS Developer',
  salary: '700$ в місяць',
}

var footer = {
  social: {
    email: {
      text: 'dmytro@mail.com',
      href: 'mailto:dmytro@mail.com',
    },

    phone: {
      text: '+380670000123',
      href: 'tel:+380670000123',
    },

    linkedin: {
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/in/dmytro-test',
    },
  },
}

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: '| Resume | Title',
    },

    header,

    main: {
      summary: {
        title: 'Summary',

        text: `Open-minded for new technologies, with 1 years of experience in development. Whenever I start towork
       on a new project I learn the domain and try to understand the idea of the project. Good teamplayer, every 
       colleague is a friend to mez`,
      },

      experience: {
        title: 'Other experience',

        text: `Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics 
        (tournament position, goals etc), analyzing by simple mathematics models and preparing probability
        for such events like: money line - first win / draw / second win, totals etc.`,
      },
    },

    footer,
  })
})

// ================================================================

router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: '| Resume | Skills',
    },

    header,

    main: {
      skills: [
        {
          name: 'HTML',
          point: 10,
          isTop: true,
        },
        {
          name: 'Handlebars',
          point: 9,
          isTop: false,
        },
        {
          name: 'VS Code',
          point: 10,
          isTop: true,
        },
        {
          name: 'Git & Terminal',
          point: 7,
        },
        {
          name: 'NPM',
          point: 3,
        },
        {
          name: 'React.js',
          point: 0,
        },
        {
          name: 'PHP',
          point: null,
        },
      ],
      hobbies: [
        {
          name: 'малювання',
          isMain: true,
        },
        {
          name: 'плавання',
          isMain: false,
        },
        {
          name: 'вейкбордінг',
          isMain: true,
        },
      ],
    },

    footer,
  })
})

// ================================================================

router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: '| Resume | Education',
    },

    header,

    main: {
      educations: [
        {
          name: 'specialized school№17',
          isEnd: true,
        },
        {
          name: 'B.E.Patons name institute',
          isEnd: true,
        },
        {
          name: 'The best IT school - IT-BRAINS',
          isEnd: false,
        },
      ],

      certificates: [
        {
          name: 'Vasil',
          id: 1,
        },
        {
          name: 'Petro',
          id: 2,
        },
        {
          name: 'Pavlo',
          id: 3,
        },
      ],
    },

    footer,
  })
})

router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {
    // ↙ сюди вводимо JSON дані

    layout: 'big',

    page: {
      title: '| Resume | Work',
    },

    header,

    main: {
      works: [
        {
          position: 'Junior Fullstak Developer',

          company: {
            name: 'IT Brains',
            url: 'https//it-brains.com.ua',
          },

          duration: {
            from: '10.10.2022',
            to: null,
          },

          projectAmount: 3,

          projects: [
            {
              name: 'Resume',
              url: 'https//resume.com.ua',
              stackAmount: 3,
              awardAmount: 2,

              about: 'somethin about',

              stacks: [
                {
                  name: 'React.js',
                },
                {
                  name: 'HTML',
                },
                {
                  name: 'Nodejs',
                },
              ],
              awards: [
                {
                  name: 'name of awards',
                },
                {
                  name: 'other award',
                },
              ],
            },
          ],
        },
      ],
    },

    footer,
  })
})
// Підключаємо роутер до бек-енду
module.exports = router
