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
        name: "",
        address: "207 20th St N, Birmingham, AL 35203",
        phone: "205.933.0999",
        hours: "5:30PM–10PM",
        type:"Italian",
        pic: "http://bit.ly/2C11ocZ",
      }
] 
