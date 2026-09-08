export const products = [
  {
    id: 1,
    name: "Apple iPhone 15",  image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSJzIw4StaOkgbD9xr3xU7qH-1KpxXps54hxs5_nCJzqU3dkm2h1gYU1YPiBHtyeKp2LABUjo3op_AFHYQBnwclLn8Bjz1UXidxqKiYMyPT74Edt1sOqqfI",
    price: 69999,

    variants: [
      {
        id: 1,
        name: "128 GB",
        price: 69999
      },
      {
        id: 2,
        name: "256 GB",
        price: 79999
      }
    ],

    emiPlans: [
      {
        id: 1,
        duration: 3,
        monthlyAmount: 23333
      },
      {
        id: 2,
        duration: 6,
        monthlyAmount: 11667
      },
      {
        id: 3,
        duration: 12,
        monthlyAmount: 5833
      }
    ]
  },

  {
    id: 2,
    name: "Samsung Galaxy S24",
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=600&q=80",
    price: 74999,

    variants: [
      {
        id: 1,
        name: "128 GB",
        price: 74999
      },
      {
        id: 2,
        name: "256 GB",
        price: 84999
      }
    ],

    emiPlans: [
      {
        id: 1,
        duration: 3,
        monthlyAmount: 25000
      },
      {
        id: 2,
        duration: 6,
        monthlyAmount: 12500
      },
      {
        id: 3,
        duration: 12,
        monthlyAmount: 6250
      }
    ]
  },

  {
    id: 3,
    name: "OnePlus 12",
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=600&q=80",
    price: 64999,

    variants: [
      {
        id: 1,
        name: "256 GB",
        price: 64999
      },
      {
        id: 2,
        name: "512 GB",
        price: 69999
      }
    ],

    emiPlans: [
      {
        id: 1,
        duration: 3,
        monthlyAmount: 21667
      },
      {
        id: 2,
        duration: 6,
        monthlyAmount: 10833
      },
      {
        id: 3,
        duration: 12,
        monthlyAmount: 5417
      }
    ]
  }
];