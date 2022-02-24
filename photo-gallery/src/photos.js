const photos = [
  {
    src: "/photos/japan_1.jpg",
    width: 3,
    height: 2,
    location: "japan",
    "year": "2019"
  },
  {
    src: "/photos/japan_2.jpg",
    width: 4,
    height: 5,
    location: "japan",
    "year": "2019"
  },
  {
    src: "/photos/japan_3.jpg",
    width: 3,
    height: 2,
    location: "japan",
    "year": "2019"
  },
  {
    src: "/photos/japan_4.jpg",
    width: 2,
    height: 3,
    location: "japan",
    "year": "2019"
  },
  {
    src: "/photos/japan_5.jpg",
    width: 5,
    height: 4,
    location: "japan",
    "year": "2019"
  },
  {
    src: "/photos/japan_6.jpg",
    width: 4,
    height: 3,
    location: "japan",
    "year": "2019"
  },
  {
    src: "/photos/dallas.jpg",
    width: 3,
    height: 5,
    location: "texas",
    "year": "2018"
  },
  {
    src: "/photos/bar.jpg",
    width: 4,
    height: 3,
    location: "texas",
    "year": "2018"
  },
  {
    src: "/photos/athens_1.jpg",
    width: 4,
    height: 3,
    location: "texas",
    "year": "2020"
  },
  {
    src: "/photos/athens_2.jpg",
    width: 4,
    height: 3,
    location: "texas",
    "year": "2020"
  },
  {
    src: "/photos/broken_bow.jpg",
    width: 2,
    height: 1,
    location: "oklahoma",
    "year": "2018"
  },
  {
    src: "/photos/sunflowers.jpg",
    width: 4,
    height: 3,
    location: "texas",
    "year": "2019"
  },
  {
    src: "/photos/fw.jpg",
    width: 4,
    height: 3,
    location: "texas",
    "year": "2018"
  },
  {
    src: "/photos/shell.jpg",
    width: 1,
    height: 1,
    location: "california",
    "year": "2018"
  },
  {
    src: "/photos/sunset.jpg",
    width: 3,
    height: 2,
    location: "oklahoma",
    "year": "2018"
  },
  {
    src: "/photos/flying.jpg",
    width: 4,
    height: 5,
    location: "california",
    "year": "2018"
  },
  {
    src: "/photos/sf_1.jpg",
    width: 4,
    height: 3,
    location: "california",
    "year": "2018"
  },
  {
    src: "/photos/sf_2.jpg",
    width: 4,
    height: 3,
    location: "california",
    "year": "2018"
  },
  {
    src: "/photos/sf_4.jpg",
    width: 4,
    height: 3,
    location: "california",
    "year": "2018"
  },
  {
    src: "/photos/sf_5.jpg",
    width: 3,
    height: 4,
    location: "california",
    "year": "2018"
  },
  {
    src: "/photos/sf_3.jpg",
    width: 4,
    height: 3,
    location: "california",
    "year": "2018"
  },
  {
    src: "/photos/sf_7.jpg",
    width: 4,
    height: 4,
    location: "california",
    "year": "2018"
  },
  {
    src: "/photos/sf_6.jpg",
    width: 4,
    height: 3,
    location: "california",
    "year": "2018"
  },
  {
    src: "/photos/cruise.jpg",
    width: 5,
    height: 4,
    location: "mexico",
    "year": "2018"
  },
  {
    src: "/photos/rollercoaster.jpg",
    width: 3,
    height: 2,
    location: "california",
    "year": "2018"
  },
  {
    src: "/photos/beach_1.jpg",
    width: 4,
    height: 3,
    location: "mexico",
    "year": "2018"
  },
  {
    src: "/photos/europe_1.jpg",
    width: 3,
    height: 2,
    location: "europe",
    "year": "2012"
  },
  {
    src: "/photos/europe_2.jpg",
    width: 3,
    height: 2,
    location: "europe",
    "year": "2012"
  },
  {
    src: "/photos/tn_1.jpg",
    width: 4,
    height: 3,
    location: "tennessee",
    "year": "2019"
  },
  {
    src: "/photos/tn_3.jpg",
    width: 3,
    height: 2,
    location: "tennessee",
    "year": "2019"
  },
  {
    src: "/photos/tn_2.jpg",
    width: 4,
    height: 3,
    location: "tennessee",
    "year": "2019"
  },
  {
    src: "/photos/tn_4.jpg",
    width: 3,
    height: 4,
    location: "tennessee",
    "year": "2019"
  },
  {
    src: "/photos/tn_5.jpg",
    width: 4,
    height: 3,
    location: "tennessee",
    "year": "2019"
  },
  {
    src: "/photos/tn_7.jpg",
    width: 5,
    height: 4,
    location: "tennessee",
    "year": "2019"
  },
  {
    src: "/photos/austin.jpg",
    width: 4,
    height: 3,
    location: "texas",
    "year": "2018"

  },
  {
    src: "/photos/seattle_2.jpg",
    width: 3,
    height: 4,
    location: "washington",
    "year": "2021"
  },
  {
    src: "/photos/seattle_3.jpg",
    width: 3,
    height: 5,
    location: "washington",
    "year": "2021"
  },
  {
    src: "/photos/seattle_5.jpg",
    width: 4,
    height: 3,
    location: "washington",
    "year": "2021"
  },
  {
    src: "/photos/seattle_4.jpg",
    width: 3,
    height: 4,
    location: "washington",
    "year": "2021"
  },
  {
    src: "/photos/seattle_1.jpg",
    width: 4,
    height: 3,
    location: "washington",
    "year": "2021"
  },
  {
    src: "/photos/flowers.jpg",
    width: 4,
    height: 3,
    location: "washington",
    "year": "2021"
  },
  {
    src: "/photos/beach_2.jpg",
    width: 4,
    height: 3,
    location: "texas",
    "year": "2021"
  },
  {
    src: "/photos/co_2.jpg",
    width: 4,
    height: 3,
    location: "colorado",
    "year": "2021"
  },
  {
    src: "/photos/co.jpg",
    width: 5,
    height: 3,
    location: "colorado",
    "year": "2021"
  },
  {
    src: "/photos/beach_3.jpg",
    width: 5,
    height: 3,
    location: "florida",
    "year": "2019"
  },
];

export default photos;