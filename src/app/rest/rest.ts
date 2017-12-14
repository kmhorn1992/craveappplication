export interface IRestaurant{
    id: number;
    name: string;
    address: string;
    phone: string;
    hours: string;
    type:string;
    pic: string;      
  
}
export const Restaurants: Array<IRestaurant> =[
    { id: 1,
        name: "El Barrio Restaurante y Bar", 
       address: "2211 2nd Ave", 
       phone: "205.868.3737",
       hours:  "11AM–3PM, 5–10PM",
       type: "Mexican",
       pic: "http://bit.ly/2l1AKOd" 
       },
       { id: 2,
         name: "Cantina Laredo",
        address: "2301 Richard Arrington Jr Blvd N Birmingham, Al 35203",
        phone: "205.502.0915",
        hours: "11AM–10PM",
        type: "Mexican",
        pic: "http://bit.ly/2BU3dbD"
      },
      { id: 3,
        name: "Los Juanae's Mexican Restaurant",
        address: "401 19th St S. Birmingham, Al 35233",
        phone: "205.214.0964",
        hours: "10:30AM–9PM",
        type: "Mexican",
        pic: "http://bit.ly/2nOJGHs"
      },
      { id: 4,
        name: "Los Amigos Mexican Restaurant",
        address: "3324 Clairmont Ave, Birmingham, AL 35222",
        phone: "205.243.5896",
        hours: "10:30AM–9PM",
        type:"Mexican",
        pic: "http://bit.ly/2ASFXLX"
      },
      {
        id: 5,
        name: "Rojo",
        address: "2921 Highland Ave, Birmingham, AL 35205",
        phone: "205.328.4733",
        hours: "11AM–10PM ",
        type:"Mexican",
        pic: "http://bit.ly/2nZ9ot0"
      },
      {
        id: 6,
        name: "The Fish Market On Southside",
        address: "612 22nd St S, Birmingham, AL 35233",
        phone: "205.322.3330",
        hours: "10AM–9PM ",
        type:"Seafood",
        pic: "http://bit.ly/2C6esOh"
      },
      {
        id: 7,
        name: "Ocean Restaurant",
        address: "1218 20th St S, Birmingham, AL 35205",
        phone: "205.933.0999",
        hours: "5:30PM–10PM",
        type:"Seafood",
        pic: "http://bit.ly/2C11ocZ",

      },
      {
        id: 8 ,
        name: "Trattoria Centrale",
        address: "207 20th St N, Birmingham, AL 35203",
        phone: "205.202.5612",
        hours: "7:30–10AM, 11AM–3PM",
        type:"Italian",
        pic: "http://bit.ly/2C7BYKT",
      },
      {
        id: 9 ,
        name: "Gianmarco's Restaurant",
        address: "721 Broadway St, Birmingham, AL 35209",
        phone: "205.871.9622",
        hours: "11AM–2PM, 5–10PM",
        type:"Italian",
        pic: "http://bit.ly/2B02uGX",
      },
      {
        id: 10 ,
        name: "Giuseppe's Cafe",
        address: "925 8th St S, Birmingham, AL 35205",
        phone: "205.324.2626",
        hours: "11AM–9:30PM",
        type:"Italian",
        pic: "http://bit.ly/2CjMmAf",
      },
      {
        id: 11 ,
        name: "Mellow Mushroom",
        address: "1200 20th St S Ste 100, Birmingham, AL 35205",
        phone: "205.212.9420",
        hours: " 11AM–10PM",
        type:"Italian",
        pic: "http://bit.ly/2kuter1",
      },
      {
        id: 12 ,
        name: "Bettola",
        address: "2901 2nd Ave S, Birmingham, AL 35233",
        phone: "(205) 731-6499",
        hours: "11AM–2PM, 5:30–9PM",
        type:"Italian",
        pic: "http://bit.ly/2CjOvfh",
      },
      {
        id: 13 ,
        name: "China Master Express",
        address: "1801 4th Ave S #35233, Birmingham, AL 35233",
        phone: "205.321.9039",
        hours: "10:30AM–8:30PM",
        type:"Chinese",
        pic: "http://bit.ly/2BlsBuz",
      }, 
      {
        id: 14 ,
        name: "Magic  Wok",
        address: "401 19th St S, Birmingham, AL 35233",
        phone: "205.327.5000",
        hours: "10:30AM–9PM",
        type:"Chinese",
        pic: "http://bit.ly/2yueg9A",
      },
      {
        id: 15 ,
        name: "New China Town",
        address: "1020 20th St S, Birmingham, AL 35205",
        phone: "205.251.2373",
        hours: "11AM–10PM",
        type:"Chinese",
        pic: "http://bit.ly/2CjVGny",
      },
      {
        id: 16 ,
        name: "Chan Lee's",
        address: "21901 6th Ave N #256, Birmingham, AL 35203",
        phone: "205.252.2426",
        hours: "10AM–3PM",
        type:"Chinese",
        pic: "http://bit.ly/2kt4TSA",
      },
    ];

export const chickenDishes = [
  {
    id: 1,
    restaurantId: 16,
    name: 'Chicken Lomein',
    ingredients: ['chicken', 'pasta', 'snap peas', 'water chestnuts', 'soy sauce']
  },
  {
    id: 2,
    restaurantId: 2,
    name: 'Chicken Quesadilla',
    ingredients: ['chicken', 'tortilla', 'cheese']
  },
  {
    id: 3,
    restaurantId: 1,
    name: 'Chicken Tacos',
    ingredients: ['chicken']
  }
];  
