const express = require('express')
const app = express()
const logger = require('./loggerMiddleware')
const cors = require('cors')

app.use(express.json())
app.use(cors()) // IMPORTANT: It allows the access from any origens.
app.use(logger)

let notes = [
  {
    imgUrl: 'images/apple_ipadAir.webp',
    imgDescription: {
      img1: 'images/default_image.jpeg',
      img2: 'images/default_image.jpeg',
      img3: 'images/default_image.jpeg',
      img4: 'images/default_image.jpeg',
      img5: 'images/default_image.jpeg',
      img6: 'images/default_image.jpeg'
    },
    id: 'ipadAir',
    alt: 'Apple iPad Air',
    value: 'main_promo',
    category: 'tablets',
    promoTitle: 'Supercharged by the Apple M1 chip',
    productName: 'Ipad Air',
    shortDescription: 'iPad Air lets you immerse yourself in whatever you’re reading, watching, or creating. The 10.9-inch Liquid Retina display features advanced technologies like True Tone, P3 wide color, and an antireflective coating.',
    fullDescriptionTitle: 'Title here...',
    fullDescription: 'Reprehenderit consequat excepteur enim nulla in eiusmod. In commodo ea ut Lorem fugiat excepteur cupidatat fugiat ad enim. Aliqua commodo cupidatat et duis irure sint officia laborum velit ex ullamco aute reprehenderit voluptate. Minim ipsum qui do Lorem eu irure. Dolore velit sint et officia non esse mollit reprehenderit ex labore. Est occaecat elit anim quis. Ipsum tempor ipsum fugiat eu dolore non proident ullamco reprehenderit laboris ea enim laboris occaecat.',
    price: '999',
    available: true,
    delivery: 'Free',
    favorite: false,
    inCart: false,
    counter: 1,
    ratingStars: 2
  },
  {
    imgUrl: 'images/apple_studio_display.png',
    imgDescription: {
      img1: 'images/default_image.jpeg',
      img2: 'images/default_image.jpeg',
      img3: 'images/default_image.jpeg',
      img4: 'images/default_image.jpeg',
      img5: 'images/default_image.jpeg',
      img6: 'images/default_image.jpeg'
    },
    id: 'studioDisplay',
    alt: 'Apple Studio Display',
    value: 'main_promo',
    category: 'monitor',
    promoTitle: 'Immerse yourself in a 5K dream',
    productName: 'Studio Display',
    shortDescription: 'A big, beautiful window into new worlds, Studio Display draws you in from the moment you turn it on. It has a slim, all-screen design. And it’s packed with a phenomenal set of features so everything you do springs to life with gorgeous color and spectacular detail.',
    fullDescriptionTitle: 'Title here...',
    fullDescription: 'Reprehenderit consequat excepteur enim nulla in eiusmod. In commodo ea ut Lorem fugiat excepteur cupidatat fugiat ad enim. Aliqua commodo cupidatat et duis irure sint officia laborum velit ex ullamco aute reprehenderit voluptate. Minim ipsum qui do Lorem eu irure. Dolore velit sint et officia non esse mollit reprehenderit ex labore. Est occaecat elit anim quis. Ipsum tempor ipsum fugiat eu dolore non proident ullamco reprehenderit laboris ea enim laboris occaecat.',
    price: 1599,
    available: true,
    delivery: 'Free',
    favorite: false,
    inCart: false,
    counter: 1,
    ratingStars: 4
  },
  {
    imgUrl: 'images/apple_airPodsMax.png',
    imgDescription: {
      img1: 'images/default_image.jpeg',
      img2: 'images/default_image.jpeg',
      img3: 'images/default_image.jpeg',
      img4: 'images/default_image.jpeg',
      img5: 'images/default_image.jpeg',
      img6: 'images/default_image.jpeg'
    },
    id: 'airPodsMax',
    alt: 'Apple AirPods Max',
    value: 'main_promo',
    category: 'audio',
    promoTitle: 'Sounds like an epiphany',
    productName: 'AirPods Max',
    shortDescription: 'AirPods Max combine high-fidelity audio with industry-leading Active Noise Cancellation to deliver an unparalleled listening experience. Each part of their custom-built driver works to produce sound with ultra-low distortion across the audible range. From deep, rich bass to accurate mids and crisp, clean highs, you’ll hear every note with a new sense of clarity.',
    fullDescriptionTitle: 'Title here...',
    fullDescription: 'Reprehenderit consequat excepteur enim nulla in eiusmod. In commodo ea ut Lorem fugiat excepteur cupidatat fugiat ad enim. Aliqua commodo cupidatat et duis irure sint officia laborum velit ex ullamco aute reprehenderit voluptate. Minim ipsum qui do Lorem eu irure. Dolore velit sint et officia non esse mollit reprehenderit ex labore. Est occaecat elit anim quis. Ipsum tempor ipsum fugiat eu dolore non proident ullamco reprehenderit laboris ea enim laboris occaecat.',
    price: 549,
    available: true,
    delivery: 'Free',
    favorite: false,
    inCart: false,
    counter: 1,
    ratingStars: 4
  },
  // NEW ARRIVALS
  {
    imgUrl: 'images/apple_watchSeries7.png',
    imgDescription: {
      img1: 'images/default_image.jpeg',
      img2: 'images/default_image.jpeg',
      img3: 'images/default_image.jpeg',
      img4: 'images/default_image.jpeg',
      img5: 'images/default_image.jpeg',
      img6: 'images/default_image.jpeg'
    },
    id: 'watchSeries7',
    alt: 'Apple Watch',
    value: 'new arrivals',
    category: 'watch',
    productName: 'Apple Watch 7',
    shortDescription: 'The biggest, most advanced Always‑On Retina display. Measure your blood oxygen and take an ECG. With the most crack-resistant front crystal ever and dust resistance certification, it’s the most durable Apple Watch ever.',
    fullDescriptionTitle: 'Title here...',
    fullDescription: 'Reprehenderit consequat excepteur enim nulla in eiusmod. In commodo ea ut Lorem fugiat excepteur cupidatat fugiat ad enim. Aliqua commodo cupidatat et duis irure sint officia laborum velit ex ullamco aute reprehenderit voluptate. Minim ipsum qui do Lorem eu irure. Dolore velit sint et officia non esse mollit reprehenderit ex labore. Est occaecat elit anim quis. Ipsum tempor ipsum fugiat eu dolore non proident ullamco reprehenderit laboris ea enim laboris occaecat.',
    price: 499,
    available: true,
    delivery: 'Free',
    deliveryPrice: '',
    favorite: false,
    inCart: false,
    counter: 1,
    ratingStars: 4
  },
  {
    imgUrl: 'images/apple_iphone13.png',
    imgDescription: {
      img1: 'images/default_image.jpeg',
      img2: 'images/default_image.jpeg',
      img3: 'images/default_image.jpeg',
      img4: 'images/default_image.jpeg',
      img5: 'images/default_image.jpeg',
      img6: 'images/default_image.jpeg'
    },
    id: 'iPhone13',
    alt: 'Apple iPhone 13',
    value: 'new arrivals',
    category: 'phone',
    productName: 'iPhone 13',
    shortDescription: 'A dramatically more powerful camera system. A display so responsive, every interaction feels new again. The world’s fastest smartphone chip. Exceptional durability. And a huge leap in battery life.',
    fullDescriptionTitle: 'Title here...',
    fullDescription: 'Reprehenderit consequat excepteur enim nulla in eiusmod. In commodo ea ut Lorem fugiat excepteur cupidatat fugiat ad enim. Aliqua commodo cupidatat et duis irure sint officia laborum velit ex ullamco aute reprehenderit voluptate. Minim ipsum qui do Lorem eu irure. Dolore velit sint et officia non esse mollit reprehenderit ex labore. Est occaecat elit anim quis. Ipsum tempor ipsum fugiat eu dolore non proident ullamco reprehenderit laboris ea enim laboris occaecat.',
    price: 999,
    available: true,
    delivery: 'Free',
    deliveryPrice: '',
    favorite: false,
    inCart: false,
    counter: 1,
    ratingStars: 5
  },
  {
    imgUrl: 'images/apple_airPodsPro.png',
    imgDescription: {
      img1: 'images/default_image.jpeg',
      img2: 'images/default_image.jpeg',
      img3: 'images/default_image.jpeg',
      img4: 'images/default_image.jpeg',
      img5: 'images/default_image.jpeg',
      img6: 'images/default_image.jpeg'
    },
    id: 'airPodsPro',
    alt: 'Apple AirPods Pro',
    value: 'new arrivals',
    category: 'audio',
    productName: 'AirPods Pro',
    shortDescription: 'We refined the details of comfort, creating a new class of in-ear headphones with a customizable fit that forms an exceptional seal for Active Noise Cancellation. You’ll feel your music, not your headphones.',
    fullDescriptionTitle: 'Title here...',
    fullDescription: 'Reprehenderit consequat excepteur enim nulla in eiusmod. In commodo ea ut Lorem fugiat excepteur cupidatat fugiat ad enim. Aliqua commodo cupidatat et duis irure sint officia laborum velit ex ullamco aute reprehenderit voluptate. Minim ipsum qui do Lorem eu irure. Dolore velit sint et officia non esse mollit reprehenderit ex labore. Est occaecat elit anim quis. Ipsum tempor ipsum fugiat eu dolore non proident ullamco reprehenderit laboris ea enim laboris occaecat.',
    price: 249,
    available: true,
    delivery: 'Free',
    deliveryPrice: '',
    favorite: false,
    inCart: false,
    counter: 1,
    ratingStars: 5
  },
  {
    imgUrl: 'images/apple_airTag.webp',
    imgDescription: {
      img1: 'images/default_image.jpeg',
      img2: 'images/default_image.jpeg',
      img3: 'images/default_image.jpeg',
      img4: 'images/default_image.jpeg',
      img5: 'images/default_image.jpeg',
      img6: 'images/default_image.jpeg'
    },
    id: 'airTag',
    alt: 'Apple AirTag',
    value: 'new arrivals',
    category: 'accesories',
    productName: 'AirTag',
    shortDescription: 'AirTag is an easy way to keep track of your stuff. Attach one to your keys, slip another one in your backpack. And just like that, they’re on your radar in the Find My app. AirTag has your back.',
    fullDescriptionTitle: 'Title here...',
    fullDescription: 'Reprehenderit consequat excepteur enim nulla in eiusmod. In commodo ea ut Lorem fugiat excepteur cupidatat fugiat ad enim. Aliqua commodo cupidatat et duis irure sint officia laborum velit ex ullamco aute reprehenderit voluptate. Minim ipsum qui do Lorem eu irure. Dolore velit sint et officia non esse mollit reprehenderit ex labore. Est occaecat elit anim quis. Ipsum tempor ipsum fugiat eu dolore non proident ullamco reprehenderit laboris ea enim laboris occaecat.',
    price: 29,
    available: true,
    delivery: 'Free',
    deliveryPrice: '',
    favorite: false,
    inCart: false,
    counter: 1,
    ratingStars: 5
  },
  // GENERAL PRODUCTS
  {
    imgUrl: 'images/apple_macPro.png',
    imgDescription: {
      img1: 'images/default_image.jpeg',
      img2: 'images/default_image.jpeg',
      img3: 'images/default_image.jpeg',
      img4: 'images/default_image.jpeg',
      img5: 'images/default_image.jpeg',
      img6: 'images/default_image.jpeg'
    },
    id: 'macPro',
    alt: 'Apple Mac Pro',
    value: 'GeneralProducts',
    category: 'mac',
    productName: 'Mac Pro',
    shortDescription: 'Power to change everything. Say hello to a Mac that is extreme in every way. With the greatest performance, expansion, and configurability yet, it is a system created to let a wide range of professionals push the limits of what is possible.',
    fullDescriptionTitle: 'Title here...',
    fullDescription: 'Reprehenderit consequat excepteur enim nulla in eiusmod. In commodo ea ut Lorem fugiat excepteur cupidatat fugiat ad enim. Aliqua commodo cupidatat et duis irure sint officia laborum velit ex ullamco aute reprehenderit voluptate. Minim ipsum qui do Lorem eu irure. Dolore velit sint et officia non esse mollit reprehenderit ex labore. Est occaecat elit anim quis. Ipsum tempor ipsum fugiat eu dolore non proident ullamco reprehenderit laboris ea enim laboris occaecat.',
    price: 6400,
    available: true,
    delivery: 'Free',
    deliveryPrice: '',
    favorite: false,
    inCart: false,
    counter: 1,
    ratingStars: 3
  },
  {
    imgUrl: 'images/apple_airPods3.png',
    imgDescription: {
      img1: 'images/default_image.jpeg',
      img2: 'images/default_image.jpeg',
      img3: 'images/default_image.jpeg',
      img4: 'images/default_image.jpeg',
      img5: 'images/default_image.jpeg',
      img6: 'images/default_image.jpeg'
    },
    id: 'airPods3',
    alt: 'Apple Air Pods 3',
    category: 'audio',
    value: 'GeneralProducts',
    productName: 'AirPods 3',
    shortDescription: 'Spatial audio with dynamic head tracking places sounds all around you to create a three-dimensional listening experience for music, TV shows, movies, and more — immersing you in sounds from every direction so it feels like you’re in your very own concert hall or theater.',
    fullDescriptionTitle: 'Title here...',
    fullDescription: 'Reprehenderit consequat excepteur enim nulla in eiusmod. In commodo ea ut Lorem fugiat excepteur cupidatat fugiat ad enim. Aliqua commodo cupidatat et duis irure sint officia laborum velit ex ullamco aute reprehenderit voluptate. Minim ipsum qui do Lorem eu irure. Dolore velit sint et officia non esse mollit reprehenderit ex labore. Est occaecat elit anim quis. Ipsum tempor ipsum fugiat eu dolore non proident ullamco reprehenderit laboris ea enim laboris occaecat.',
    price: 179,
    available: true,
    delivery: 'Free',
    deliveryPrice: '',
    favorite: false,
    inCart: false,
    counter: 1,
    ratingStars: 5
  },
  {
    imgUrl: 'images/apple_homePodMini.png',
    imgDescription: {
      img1: 'images/default_image.jpeg',
      img2: 'images/default_image.jpeg',
      img3: 'images/default_image.jpeg',
      img4: 'images/default_image.jpeg',
      img5: 'images/default_image.jpeg',
      img6: 'images/default_image.jpeg'
    },
    id: 'homePodMini',
    alt: 'Apple HomePod Mini',
    value: 'GeneralProducts',
    category: 'audio',
    productName: 'HomePod Mini',
    shortDescription: 'Jam-packed with innovation, HomePod mini delivers unexpectedly big sound for a speaker of its size. At just 3.3 inches tall, it takes up almost no space but fills the entire room with rich 360-degree audio that sounds amazing from every angle.',
    fullDescriptionTitle: 'Title here...',
    fullDescription: 'Reprehenderit consequat excepteur enim nulla in eiusmod. In commodo ea ut Lorem fugiat excepteur cupidatat fugiat ad enim. Aliqua commodo cupidatat et duis irure sint officia laborum velit ex ullamco aute reprehenderit voluptate. Minim ipsum qui do Lorem eu irure. Dolore velit sint et officia non esse mollit reprehenderit ex labore. Est occaecat elit anim quis. Ipsum tempor ipsum fugiat eu dolore non proident ullamco reprehenderit laboris ea enim laboris occaecat.',
    price: 99,
    available: true,
    delivery: 'Free',
    deliveryPrice: '',
    favorite: false,
    inCart: false,
    counter: 1,
    ratingStars: 4
  },
  {
    imgUrl: 'images/apple_iMac.png',
    imgDescription: {
      img1: 'images/default_image.jpeg',
      img2: 'images/default_image.jpeg',
      img3: 'images/default_image.jpeg',
      img4: 'images/default_image.jpeg',
      img5: 'images/default_image.jpeg',
      img6: 'images/default_image.jpeg'
    },
    id: 'iMac',
    alt: 'Apple iMac',
    value: 'GeneralProducts',
    category: 'mac',
    productName: 'iMac',
    shortDescription: 'This extraordinary design is only possible thanks to M1, the first system on a chip for Mac. It makes iMac so thin and compact that it fits in more places than ever.',
    fullDescriptionTitle: 'Title here...',
    fullDescription: 'Reprehenderit consequat excepteur enim nulla in eiusmod. In commodo ea ut Lorem fugiat excepteur cupidatat fugiat ad enim. Aliqua commodo cupidatat et duis irure sint officia laborum velit ex ullamco aute reprehenderit voluptate. Minim ipsum qui do Lorem eu irure. Dolore velit sint et officia non esse mollit reprehenderit ex labore. Est occaecat elit anim quis. Ipsum tempor ipsum fugiat eu dolore non proident ullamco reprehenderit laboris ea enim laboris occaecat.',
    price: 1299,
    available: true,
    delivery: 'Free',
    deliveryPrice: '',
    favorite: false,
    inCart: false,
    counter: 1,
    ratingStars: 5
  },
  {
    imgUrl: 'images/apple_iPadMagicKeyBoard.png',
    id: 'iPadMagicKeyBoard',
    alt: 'Apple iPad Magic Keyboard',
    value: 'GeneralProducts',
    category: 'accesories',
    productName: 'iPad Magic Keyboard',
    shortDescription: 'The Magic Keyboard is an amazing companion for iPad Pro and iPad Air. It features a great typing experience, a trackpad that opens up new ways to work with iPadOS, a USB-C port for pass-through charging, and front and back protection.',
    fullDescriptionTitle: 'Title here...',
    fullDescription: 'Reprehenderit consequat excepteur enim nulla in eiusmod. In commodo ea ut Lorem fugiat excepteur cupidatat fugiat ad enim. Aliqua commodo cupidatat et duis irure sint officia laborum velit ex ullamco aute reprehenderit voluptate. Minim ipsum qui do Lorem eu irure. Dolore velit sint et officia non esse mollit reprehenderit ex labore. Est occaecat elit anim quis. Ipsum tempor ipsum fugiat eu dolore non proident ullamco reprehenderit laboris ea enim laboris occaecat.',
    price: 299,
    available: true,
    delivery: 'Free',
    deliveryPrice: '',
    favorite: false,
    inCart: false,
    counter: 1,
    ratingStars: 3
  },
  {
    imgUrl: 'images/apple_iPadMini.png',
    imgDescription: {
      img1: 'images/default_image.jpeg',
      img2: 'images/default_image.jpeg',
      img3: 'images/default_image.jpeg',
      img4: 'images/default_image.jpeg',
      img5: 'images/default_image.jpeg',
      img6: 'images/default_image.jpeg'
    },
    id: 'iPadMini',
    alt: 'Apple iPad Mini',
    value: 'GeneralProducts',
    category: 'tablets',
    productName: 'iPad Mini',
    shortDescription: 'iPad mini is meticulously designed to be absolutely beautiful. An all-new enclosure features a new, larger edge-to-edge screen, along with narrow borders and elegant rounded corners.',
    fullDescriptionTitle: 'Title here...',
    fullDescription: 'Reprehenderit consequat excepteur enim nulla in eiusmod. In commodo ea ut Lorem fugiat excepteur cupidatat fugiat ad enim. Aliqua commodo cupidatat et duis irure sint officia laborum velit ex ullamco aute reprehenderit voluptate. Minim ipsum qui do Lorem eu irure. Dolore velit sint et officia non esse mollit reprehenderit ex labore. Est occaecat elit anim quis. Ipsum tempor ipsum fugiat eu dolore non proident ullamco reprehenderit laboris ea enim laboris occaecat.',
    price: 299,
    available: true,
    delivery: 'Free',
    deliveryPrice: '',
    favorite: false,
    inCart: false,
    counter: 1,
    ratingStars: 3
  },
  {
    imgUrl: 'images/apple_iPhoneCase.png',
    imgDescription: {
      img1: 'images/default_image.jpeg',
      img2: 'images/default_image.jpeg',
      img3: 'images/default_image.jpeg',
      img4: 'images/default_image.jpeg',
      img5: 'images/default_image.jpeg',
      img6: 'images/default_image.jpeg'
    },
    id: 'iPhoneCase',
    alt: 'Apple iPhone Case',
    value: 'GeneralProducts',
    category: 'accesories',
    productName: 'iPhone 13 Cases',
    shortDescription: 'Designed by Apple to complement iPhone 13 Pro, the Silicone Case with MagSafe is a delightful way to protect your iPhone. The silky, soft-touch finish of the silicone exterior feels great in your hand. And on the inside, there’s a soft microfiber lining for even more protection.',
    fullDescriptionTitle: 'Title here...',
    fullDescription: 'Reprehenderit consequat excepteur enim nulla in eiusmod. In commodo ea ut Lorem fugiat excepteur cupidatat fugiat ad enim. Aliqua commodo cupidatat et duis irure sint officia laborum velit ex ullamco aute reprehenderit voluptate. Minim ipsum qui do Lorem eu irure. Dolore velit sint et officia non esse mollit reprehenderit ex labore. Est occaecat elit anim quis. Ipsum tempor ipsum fugiat eu dolore non proident ullamco reprehenderit laboris ea enim laboris occaecat.',
    price: 49,
    available: true,
    delivery: 'Free',
    deliveryPrice: '',
    favorite: false,
    inCart: false,
    counter: 1,
    ratingStars: 4
  },
  {
    imgUrl: 'images/apple_macBookPro.png',
    imgDescription: {
      img1: 'images/default_image.jpeg',
      img2: 'images/default_image.jpeg',
      img3: 'images/default_image.jpeg',
      img4: 'images/default_image.jpeg',
      img5: 'images/default_image.jpeg',
      img6: 'images/default_image.jpeg'
    },
    id: 'macBookPro',
    alt: 'Apple MacBook Pro',
    value: 'GeneralProducts',
    category: 'mac',
    productName: 'MacBook Pro M1',
    shortDescription: 'The most powerful MacBook Pro ever is here. With the blazing-fast M1 Pro or M1 Max chip — the first Apple silicon designed for pros — you get groundbreaking performance and amazing battery life. Add to that a stunning Liquid Retina XDR display, the best camera and audio ever in a Mac notebook, and all the ports you need.',
    fullDescriptionTitle: 'Title here...',
    fullDescription: 'Reprehenderit consequat excepteur enim nulla in eiusmod. In commodo ea ut Lorem fugiat excepteur cupidatat fugiat ad enim. Aliqua commodo cupidatat et duis irure sint officia laborum velit ex ullamco aute reprehenderit voluptate. Minim ipsum qui do Lorem eu irure. Dolore velit sint et officia non esse mollit reprehenderit ex labore. Est occaecat elit anim quis. Ipsum tempor ipsum fugiat eu dolore non proident ullamco reprehenderit laboris ea enim laboris occaecat.',
    price: 1999,
    available: true,
    delivery: 'Free',
    deliveryPrice: '',
    favorite: false,
    inCart: false,
    counter: 1,
    ratingStars: 4
  },
  {
    imgUrl: 'images/apple_macMini.png',
    imgDescription: {
      img1: 'images/default_image.jpeg',
      img2: 'images/default_image.jpeg',
      img3: 'images/default_image.jpeg',
      img4: 'images/default_image.jpeg',
      img5: 'images/default_image.jpeg',
      img6: 'images/default_image.jpeg'
    },
    id: 'macMini',
    alt: 'Apple Mac Mini',
    value: 'GeneralProducts',
    category: 'mac',
    productName: 'Mac mini',
    shortDescription: 'The Apple M1 chip takes our most versatile, do-it-all desktop into another dimension. With up to 3x faster CPU performance. Up to 6x faster graphics. An advanced Neural Engine for up to 15x faster machine learning. Get ready to work, play, and create on Mac mini with speed and power beyond anything you ever imagined.',
    fullDescriptionTitle: 'Title here...',
    fullDescription: 'Reprehenderit consequat excepteur enim nulla in eiusmod. In commodo ea ut Lorem fugiat excepteur cupidatat fugiat ad enim. Aliqua commodo cupidatat et duis irure sint officia laborum velit ex ullamco aute reprehenderit voluptate. Minim ipsum qui do Lorem eu irure. Dolore velit sint et officia non esse mollit reprehenderit ex labore. Est occaecat elit anim quis. Ipsum tempor ipsum fugiat eu dolore non proident ullamco reprehenderit laboris ea enim laboris occaecat.',
    price: 699,
    available: true,
    delivery: 'Free',
    deliveryPrice: '',
    favorite: false,
    inCart: false,
    counter: 1,
    ratingStars: 4
  },
  {
    imgUrl: 'images/apple_macStudio.png',
    imgDescription: {
      img1: 'images/default_image.jpeg',
      img2: 'images/default_image.jpeg',
      img3: 'images/default_image.jpeg',
      img4: 'images/default_image.jpeg',
      img5: 'images/default_image.jpeg',
      img6: 'images/default_image.jpeg'
    },
    id: 'macStudio',
    alt: 'Apple Mac Studio',
    value: 'GeneralProducts',
    category: 'mac',
    productName: 'Mac Studio',
    shortDescription: 'Mac Studio is an entirely new Mac desktop. It packs outrageous performance, extensive connectivity, and new capabilities into an unbelievably compact form, putting everything you need within easy reach and transforming any space into a studio.',
    fullDescriptionTitle: 'Title here...',
    fullDescription: 'Our Pro camera system gets its biggest upgrade ever. With next-level hardware that captures so much more detail. Superintelligent software for new photo and filmmaking techniques. And a mind-blowingly fast chip that makes it all possible. It’ll change the way you shoot.\n iPhone 13 Pro was made for low light. The Wide camera adds a wider aperture and our largest sensor yet and it leverages the LiDAR Scanner for Night mode portraits. Ultra Wide gets a wider aperture, a faster sensor, and all-new autofocus. And Telephoto now has Night mode.',
    price: 1999,
    available: true,
    delivery: 'Free',
    deliveryPrice: '',
    favorite: false,
    inCart: false,
    counter: 1,
    ratingStars: 3
  },
  {
    imgUrl: 'images/apple_tv.png',
    imgDescription: {
      img1: 'images/default_image.jpeg',
      img2: 'images/default_image.jpeg',
      img3: 'images/default_image.jpeg',
      img4: 'images/default_image.jpeg',
      img5: 'images/default_image.jpeg',
      img6: 'images/default_image.jpeg'
    },
    id: 'appleTv',
    alt: 'Apple TV',
    value: 'GeneralProducts',
    category: 'tv',
    productName: 'Apple TV',
    shortDescription: 'MTrue-to-life picture and sound.Look no further than Apple TV 4K with Dolby Vision to elevate your entertainment to its most vivid.Then fully immerse yourself in three-dimensional audio with a Dolby Atmos-scompatible sound system,1 and you’ll see how Apple TV 4K brings home a truly cinematic experience.',
    fullDescriptionTitle: 'Title here...',
    fullDescription: 'Reprehenderit consequat excepteur enim nulla in eiusmod. In commodo ea ut Lorem fugiat excepteur cupidatat fugiat ad enim. Aliqua commodo cupidatat et duis irure sint officia laborum velit ex ullamco aute reprehenderit voluptate. Minim ipsum qui do Lorem eu irure. Dolore velit sint et officia non esse mollit reprehenderit ex labore. Est occaecat elit anim quis. Ipsum tempor ipsum fugiat eu dolore non proident ullamco reprehenderit laboris ea enim laboris occaecat.',
    price: 179,
    available: true,
    delivery: 'Free',
    deliveryPrice: '',
    favorite: false,
    inCart: false,
    counter: 1,
    ratingStars: 3
  }
]

app.get('/api/notes', (request, response) => {
  if (notes) {
    response.json(notes)
  } else {
    response.status(404).end()
  }
})

app.get('/api/notes/:id', (request, response) => {
  const id = Number(request.params.id)
  const note = notes.find(note => note.id === id)
  if (note) {
    response.json(note)
  } else {
    response.status(404).end()
  }
})

app.delete('/api/notes/:id', (request, response) => {
  const id = Number(request.params.id)
  notes = notes.filter(note => note.id !== id)
  response.status(204).end()
})

app.post('/api/notes', (request, response) => {
  const note = request.body

  if (!note || !note.content) {
    return response.status(400).json({
      error: 'note.content is missing'
    })
  }

  const ids = notes.map(note => note.id)
  const maxId = Math.max(...ids) // It is not the best practice. --> nanoid() is the best solution.

  const newNote = {
    id: maxId + 1,
    content: note.content,
    important: typeof note.important !== 'undefined' ? note.important : false,
    date: new Date().toISOString()
  }
  notes = [...notes, newNote]

  response.status(201).json(newNote)
})

app.use((request, response) => {
  response.status(404).json({
    error: 'Not found'
  })
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Sercer running on port ${PORT}`)
})
