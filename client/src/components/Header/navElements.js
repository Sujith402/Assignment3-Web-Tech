const nav_items = [
  {
    title: 'Categories',
    url: '#',
    dropDown : [
      {
        title: 'Labradors',
        url: '/category=Labrador'
      },
      {
        title: 'Retriever',
        url: '/category=GoldenRetriever'
      },
      {
        title: 'Pomerians',
        url: '/category=Pomerian'
      },
      {
        title: 'Others',
        url: '/category=Others'
      },
    ]
  },
  {
    title: 'About Us',
    url: '/about',
    dropDown : []
  },
  {
    title: 'Contact Us',
    url: '#',
    dropDown : [
      {
        title:'Email : kuttadopt@ktindia.org',
        url: '#'
      },
      {
        title: 'Phone:+91 9999999999',
        url: '#'
      }
    ]
  },
  {
    title: 'Location',
    url: '#',
    dropDown: [
      {
        title: 'Bengaluru',
        url: '#'
      },
      {
        title: 'Bombay',
        url: '#'
      }
    ]
  },
  {
    title: 'Donate',
    url: '#',
    dropDown : []
  }
]

const other_items = [
  {
    title: 'Kuttadopt',
    url: '/',
    dropDown : []
  }
]

export  {nav_items,other_items};