const mintedSVG = `<svg height="18" width="17" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="sc-7134c05b-0 iXLuvF"><path d="M0 15.1622V6.78378C0 6.2973 0.162162 5.86486 0.486486 5.54054C0.810811 5.21622 1.24324 5 1.72973 5H2.64865C3.13513 5 3.56757 5.16216 3.89189 5.54054C4.21622 5.91892 4.43243 6.2973 4.43243 6.78378V15.1622C4.43243 15.6486 4.27027 16.0811 3.89189 16.4054C3.51351 16.7297 3.13513 16.9459 2.64865 16.9459H1.78378C1.2973 16.9459 0.864865 16.7838 0.54054 16.4054C0.216216 16.027 0 15.6486 0 15.1622ZM14.1622 17.9189L6.16216 15.6486V5.05405H8.64865C8.81081 5.05405 8.97297 5.05405 9.13514 5.10811C9.2973 5.16216 9.40541 5.16216 9.56757 5.21622L15.4595 7.43243C16.2703 7.7027 16.9189 8.18919 17.4595 8.83784C17.9459 9.48649 18.2162 10.1351 18.2162 10.7838C18.2162 10.8378 18.2162 10.8378 18.2162 10.8919C18.2162 10.9459 18.1622 10.9459 18.1081 10.9459H15.9459C15.2973 10.9459 14.7027 10.8919 14.1081 10.8378C13.5135 10.7838 12.9189 10.6216 12.2703 10.4054L10.7568 9.91892C10.5946 9.86486 10.3784 9.86486 10.2162 9.97297C10.0541 10.027 9.94595 10.1892 9.89189 10.4054C9.83784 10.6216 9.83784 10.7838 9.89189 10.9459C9.94595 11.1081 10.1081 11.2162 10.3243 11.3243L11.6216 11.7568C12.1081 11.9189 12.7568 12.0811 13.4595 12.1892C14.1622 12.2973 15.027 12.3514 16.0541 12.3514H20.8649C22.2162 12.3514 23.0811 12.6216 23.4595 13.1081C23.8378 13.5946 24 14.4595 24 15.7027L15.5135 17.9189C15.2973 18.027 15.027 18.027 14.8649 18.027C14.6486 18.027 14.3784 17.973 14.1622 17.9189Z"></path></svg>`

const offerSVG = `<svg height="18" width="17" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="sc-7134c05b-0 iXLuvF" style={{marginRight: "6px"}}><path d="M0 15.1622V6.78378C0 6.2973 0.162162 5.86486 0.486486 5.54054C0.810811 5.21622 1.24324 5 1.72973 5H2.64865C3.13513 5 3.56757 5.16216 3.89189 5.54054C4.21622 5.91892 4.43243 6.2973 4.43243 6.78378V15.1622C4.43243 15.6486 4.27027 16.0811 3.89189 16.4054C3.51351 16.7297 3.13513 16.9459 2.64865 16.9459H1.78378C1.2973 16.9459 0.864865 16.7838 0.54054 16.4054C0.216216 16.027 0 15.6486 0 15.1622ZM14.1622 17.9189L6.16216 15.6486V5.05405H8.64865C8.81081 5.05405 8.97297 5.05405 9.13514 5.10811C9.2973 5.16216 9.40541 5.16216 9.56757 5.21622L15.4595 7.43243C16.2703 7.7027 16.9189 8.18919 17.4595 8.83784C17.9459 9.48649 18.2162 10.1351 18.2162 10.7838C18.2162 10.8378 18.2162 10.8378 18.2162 10.8919C18.2162 10.9459 18.1622 10.9459 18.1081 10.9459H15.9459C15.2973 10.9459 14.7027 10.8919 14.1081 10.8378C13.5135 10.7838 12.9189 10.6216 12.2703 10.4054L10.7568 9.91892C10.5946 9.86486 10.3784 9.86486 10.2162 9.97297C10.0541 10.027 9.94595 10.1892 9.89189 10.4054C9.83784 10.6216 9.83784 10.7838 9.89189 10.9459C9.94595 11.1081 10.1081 11.2162 10.3243 11.3243L11.6216 11.7568C12.1081 11.9189 12.7568 12.0811 13.4595 12.1892C14.1622 12.2973 15.027 12.3514 16.0541 12.3514H20.8649C22.2162 12.3514 23.0811 12.6216 23.4595 13.1081C23.8378 13.5946 24 14.4595 24 15.7027L15.5135 17.9189C15.2973 18.027 15.027 18.027 14.8649 18.027C14.6486 18.027 14.3784 17.973 14.1622 17.9189Z"></path></svg>`

const collectionOfferSVG = `<svg height="18" width="17" viewBox="0 0 20 21" xmlns="http://www.w3.org/2000/svg" class="sc-160eede9-0 bOhYvL"><path d="M9.0625 0.734375C9.64844 0.460938 10.3125 0.460938 10.8984 0.734375L19.4531 4.67969C19.7656 4.83594 20 5.14844 20 5.5C20 5.89062 19.7656 6.20312 19.4531 6.35938L10.8984 10.3047C10.3125 10.5781 9.64844 10.5781 9.0625 10.3047L0.507812 6.35938C0.195312 6.20312 0 5.89062 0 5.5C0 5.14844 0.195312 4.83594 0.507812 4.67969L9.0625 0.734375ZM19.4531 9.67969C19.7656 9.83594 20 10.1484 20 10.5C20 10.8906 19.7656 11.2031 19.4531 11.3594L10.8984 15.3047C10.3125 15.5781 9.64844 15.5781 9.0625 15.3047L0.507812 11.3594C0.195312 11.2031 0 10.8906 0 10.5C0 10.1484 0.195312 9.83594 0.507812 9.67969L2.61719 8.70312L8.55469 11.4375C9.45312 11.8672 10.5078 11.8672 11.4062 11.4375L17.3438 8.70312L19.4531 9.67969ZM11.4062 16.4375L17.3438 13.7031L19.4531 14.6797C19.7656 14.8359 20 15.1484 20 15.5C20 15.8906 19.7656 16.2031 19.4531 16.3594L10.8984 20.3047C10.3125 20.5781 9.64844 20.5781 9.0625 20.3047L0.507812 16.3594C0.195312 16.2031 0 15.8906 0 15.5C0 15.1484 0.195312 14.8359 0.507812 14.6797L2.61719 13.7031L8.55469 16.4375C9.45312 16.8672 10.5078 16.8672 11.4062 16.4375Z"></path></svg>`

export const data = [
  {
    image: 'https://i.seadn.io/gae/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB?auto=format&w=1920',
    creator: "NFTCreator",
    collection: 'Bored Ape Yacht Club',
    itemTitle: "Loser Ape #9544",
    floorPrice: 3.63,
    volume: '8,998 SOL',
    decrease: '-8%',
    verified: true,
    uniqueOwner: 6420,
    totalItem: 10000,
    listedItem: 5000,
    sales: 32,
    quantity: 1,
    activity: {
      label: "Offer",
      svg: offerSVG
    }
  },
  {
    image: 'https://i.seadn.io/gae/BdxvLseXcfl57BiuQcQYdJ64v-aI8din7WPk0Pgo3qQFhAUH-B6i-dCqqc_mCkRIzULmwzwecnohLhrcH8A9mpWIZqA7ygc52Sr81hE?auto=format&w=256',
    collection: 'CryptoPunks',
    creator: "NFTCreator",
    itemTitle: "Loser Ape #9544",
    floorPrice: 3.63,
    volume: '8,998 SOL',
    increase: '+205%',
    verified: true,
    uniqueOwner: 12110,
    totalItem: 10000,
    listedItem: 5000,
    sales: 32,
    quantity: 1,
    activity: {
      label: "List",
      svg: "list"
    }
  },
  {
    image: 'https://i.seadn.io/gcs/files/998b7cb32192509c7db87f74f8043d5f.jpg?auto=format&w=256',
    collection: 'y00ts mint t00b',
    creator: "NFTCreator",
    itemTitle: "Loser Ape #9544",
    floorPrice: 3.63,
    volume: '8,998 SOL',
    uniqueOwner: 4820,
    totalItem: 10000,
    listedItem: 5000,
    sales: 32,
    quantity: 1,
    activity: {
      label: "Offer",
      svg: offerSVG
    }
  },
  {
    image: 'https://i.seadn.io/gcs/files/0303d12a13c8145fba2e809ab1c477a0.jpg?auto=format&w=256',
    collection: 'StreetMachine',
    creator: "NFTCreator",
    itemTitle: "Loser Ape #9544",
    floorPrice: 3.63,
    volume: '0.337 ETH',
    decrease: '-20%',
    uniqueOwner: 33451,
    totalItem: 10000,
    listedItem: 5000,
    sales: 32,
    quantity: 1,
    activity: {
      label: "Collection Offer",
      svg: collectionOfferSVG
    }
  },
  {
    image: 'https://i.seadn.io/gcs/files/a32911166edade7e640fdcbed5adf088.png?w=500&auto=format',
    collection: 'RadCats',
    creator: "NFTCreator",
    itemTitle: "Loser Ape #9544",
    floorPrice: 3.63,
    volume: '8,998 SOL',
    verified: true,
    uniqueOwner: 8262,
    totalItem: 10000,
    listedItem: 5000,
    sales: 32,
    quantity: 1,
    activity: {
      label: "Offer",
      svg: offerSVG
    }
  },
  {
    image: 'https://i.seadn.io/gcs/files/f3b11e36be14a5d31c75b19d03996fed.gif?auto=format&w=256',
    collection: 'RENGA',
    creator: "NFTCreator",
    itemTitle: "Loser Ape #9544",
    floorPrice: 3.63,
    volume: '8,998 SOL',
    uniqueOwner: 8425,
    totalItem: 10000,
    listedItem: 5000,
    sales: 32,
    quantity: 1,
    activity: {
      label: "List",
      svg: "list"
    }
  },
  {
    image: 'https://i.seadn.io/gcs/files/4fd5f7865dbcf99cfdf1c498552765b5.jpg?auto=format&w=256',
    collection: 'Looki',
    creator: "NFTCreator",
    itemTitle: "Loser Ape #9544",
    floorPrice: 3.63,
    volume: '8,998 SOL',
    uniqueOwner: 11205,
    totalItem: 10000,
    listedItem: 5000,
    sales: 32,
    quantity: 1,
    activity: {
      label: "Minted",
      svg: mintedSVG
    }
  },
  {
    image: 'https://i.seadn.io/gae/2Ncgvu0R9uBKVzdZqZysqbh-1za13pFcu54eN0KAjnTblmlPh5n8eLugublIU3C-z-YznpX6BTqKJKofInVSUtYFgSiCZNoffxb0_Q?w=500&auto=format',
    collection: 'RadCats',
    creator: "NFTCreator",
    itemTitle: "Loser Ape #9544",
    floorPrice: 3.63,
    volume: '8,998 SOL',
    increase: '+84%',
    uniqueOwner: 1205,
    totalItem: 10000,
    listedItem: 5000,
    sales: 32,
    quantity: 1,
    activity: {
      label: "Collection Offer",
      svg: collectionOfferSVG
    }
  },
  {
    image: 'https://i.seadn.io/gae/2Ncgvu0R9uBKVzdZqZysqbh-1za13pFcu54eN0KAjnTblmlPh5n8eLugublIU3C-z-YznpX6BTqKJKofInVSUtYFgSiCZNoffxb0_Q?w=500&auto=format',
    collection: 'RadCats',
    creator: "NFTCreator",
    itemTitle: "Loser Ape #9544",
    floorPrice: 3.63,
    volume: '8,998 SOL',
    increase: '+57%',
    verified: true,
    uniqueOwner: 9653,
    totalItem: 10000,
    listedItem: 5000,
    sales: 32,
    quantity: 1,
    activity: {
      label: "Minted",
      svg: mintedSVG
    }
  },
  {
    image: 'https://i.seadn.io/gcs/files/a32911166edade7e640fdcbed5adf088.png?w=500&auto=format',
    collection: 'RadCats',
    creator: "NFTCreator",
    itemTitle: "Loser Ape #9544",
    floorPrice: 3.63,
    volume: '8,998 SOL',
    uniqueOwner: 16574,
    totalItem: 10000,
    listedItem: 5000,
    sales: 32,
    quantity: 1,
    activity: {
      label: "List",
      svg: "list"
    }
  }
]

