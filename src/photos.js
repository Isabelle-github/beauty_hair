const picsArr = [
  {
    id: 1,
    imgSrc: process.env.PUBLIC_URL + "/pics/pic1.jpeg",
    imgDetail:
      " Beautiful box braids. Colour: gray. Lenght: passed the Shoulders. Styling time: 4 Hours; Keeping: till 3 Months; Suitable: Winter, Autumn",
  },
  {
    id: 2,
    imgSrc: process.env.PUBLIC_URL + "/pics/pic2.jpeg",
    imgDetail:
      " Beautiful cornrows with extensions. Colour: light braun (blond). Lenght: Short. Styling time: 2.5 Hours; Keeping: till 1.5 Months; Suitable: Sommer, Winter, Autumn, Spring",
  },
  {
    id: 3,
    imgSrc: process.env.PUBLIC_URL + "/pics/pic3.jpeg",
    imgDetail:
      " Beautiful box braids. Colour: black, light braun (blond). Length: waist and beyond. Styling time: 4-5 Hours; Keeping: till 3 Months; Suitable: Winter, Autumn",
  },
  {
    id: 4,
    imgSrc: process.env.PUBLIC_URL + "/pics/pic4.jpeg",
    imgDetail:
      " Beautiful cornrows with alternate thickness. Colour: black. Length: Shoulders and beyond. Styling time: 2 Hours; Keeping: till 1.5 Months; Suitable: Winter, Autumn, Spring, Sommer",
  },
  {
    id: 5,
    imgSrc: process.env.PUBLIC_URL + "/pics/pic5.jpeg",
    imgDetail:
      " Beautiful simple big cornrows with extensions. Colour: white / ligth gray. Length: Beyond shoulders. Styling time: 0.5 Hours; Keeping: till 4 Weeks; Suitable: All seasons",
  },
  {
    id: 6,
    imgSrc: process.env.PUBLIC_URL + "/pics/pic6.jpeg",
    imgDetail:
      " Beautiful box braids and different cornrows-styles for children. Colour: dark red. Length: Shoulders, natural hair-length. Styling time: 1-3 Hours; Keeping: 1-2 Months; Suitable: All Seasons",
  },
  {
    id: 7,
    imgSrc: process.env.PUBLIC_URL + "/pics/pic7.jpeg",
    imgDetail:
      " Beautiful box braids. Colour: blue, purple. Length: passed the Shoulders. Styling time: 3 Hours; Keeping: till 2 Months; Suitable: Winter, Autumn",
  },
  {
    id: 8,
    imgSrc: process.env.PUBLIC_URL + "/pics/pic8.jpeg",
    imgDetail:
      " Beautiful big long box braids. Colour: black. Length: waist. Styling time: 3-4 Hours; Keeping: till 2.5 Months; Suitable: Winter, Autumn",
  },
  {
    id: 9,
    imgSrc: process.env.PUBLIC_URL + "/pics/pic9.jpeg",
    imgDetail:
      " Beautiful cornrows in diefferent styles, with and without extensions. Colour: black. Length: Shoulders, natural hair-length. Styling time: 1.5 - 2 Hours; Keeping: till 1.5 Months; Suitable: Spring, Sommer",
  },
  {
    id: 10,
    imgSrc: process.env.PUBLIC_URL + "/pics/pic10.jpeg",
    imgDetail:
      " Beautiful children box braids, middle thickness. Colour: black. Length: passed the Shoulders. Styling time: 2 Hours; Keeping: till 2 Months; Suitable: Winter, Autumn",
  },
  {
    id: 11,
    imgSrc: process.env.PUBLIC_URL + "/pics/pic11.jpeg",
    imgDetail:
      " Beautiful short children box-braids with extensions. Colour: black. Length: Short, Neck-length, natural hair-length. Styling time: 1.5 - 2 Hours; Keeping: till 2 Months; Suitable: All Seasons",
  },
  {
    id: 12,
    imgSrc: process.env.PUBLIC_URL + "/pics/pic12.jpeg",
    imgDetail:
      " Beautiful cornrows with extensions. Colour: black. Length: natural hair-length. Styling time: 1.5 Hours; Keeping: till 1.5 Months; Suitable: Spring, Sommer",
  },
  {
    id: 13,
    imgSrc: process.env.PUBLIC_URL + "/pics/pic13.jpeg",
    imgDetail:
      " Beautiful long thin box braids. Colour: black. Length: Waist and beyond. Styling time: 4 Hours; Keeping: till 2-3 Months; Suitable: Winter, Autumn",
  },
  {
    id: 14,
    imgSrc: process.env.PUBLIC_URL + "/pics/pic14.jpeg",
    imgDetail:
      " Beautiful middle-thick box braids. Colour: blond, white. Length: passed the Shoulders. Styling time: 3 Hours; Keeping: till 2 Months; Suitable: Winter, Autumn",
  },
  {
    id: 15,
    imgSrc: process.env.PUBLIC_URL + "/pics/pic15.jpeg",
    imgDetail:
      " Beautiful box braids with cornrows on the front. Colour: ligth purple. Length: middle of the back. Styling time: 3 Hours; Keeping: till 2 Months; Suitable: Winter, Autumn, Spring",
  },
  {
    id: 16,
    imgSrc: process.env.PUBLIC_URL + "/pics/pic16.jpeg",
    imgDetail:
      " Beautiful long box braids. Colour: bright red. Length: Waist and beyond. Styling time: 3 Hours; Keeping: till 2.5 Months; Suitable: Winter, Autumn",
  },
  {
    id: 17,
    imgSrc: process.env.PUBLIC_URL + "/pics/pic17.jpeg",
    imgDetail:
      " Beautiful big cornrows with extensions, in ponytail style. Colour: black. Length: Short. Styling time: 1 Hours; Keeping: till 1.5 Months; Suitable: Sommer, All Seasons",
  },
  {
    id: 18,
    imgSrc: process.env.PUBLIC_URL + "/pics/pic18.jpeg",
    imgDetail:
      " Beautiful cornrows with alternate thickness, pony-tail. Colour: black. Length: Shoulders and beyond. Styling time: 2 Hours; Keeping: till 1.5 Months; Suitable: Winter, Autumn, Spring, Sommer",
  },
  {
    id: 19,
    imgSrc: process.env.PUBLIC_URL + "/pics/pic19.jpeg",
    imgDetail:
      " Beautiful box braids. Colour: black. Length: Beyond Shoulders. Styling time: 3 Hours; Keeping: till 2 Months; Suitable: Winter, Autumn",
  },
  {
    id: 20,
    imgSrc: process.env.PUBLIC_URL + "/pics/pic20.jpeg",
    imgDetail:
      " Beautiful real dreadlocks with extensions. Colour: black. Length: Short, bob. Styling time: 3 Hours; Keeping: till 3 Months, renewable; Suitable: Winter, Autumn",
  },
  {
    id: 21,
    imgSrc: process.env.PUBLIC_URL + "/pics/pic21.jpeg",
    imgDetail:
      " Beautiful box braids. Colour: blond. Length: very Long. Styling time: 3.5 Hours; Keeping: till 3 Months; Suitable: Winter, Autumn",
  },
  {
    id: 22,
    imgSrc: process.env.PUBLIC_URL + "/pics/pic22.jpeg",
    imgDetail:
      " Beautiful box braids. Colour: blond. Length: very Long. Styling time: 3.5 Hours; Keeping: till 3 Months; Suitable: Winter, Autumn",
  },
  {
    id: 23,
    imgSrc: process.env.PUBLIC_URL + "/pics/pic23.jpeg",
    imgDetail:
      " Beautiful box braids. Colour: blue. Length: Shoulders. Styling time: 2.5 Hours; Keeping: till 2 Months; Suitable: Winter, Autumn",
  },
  {
    id: 24,
    imgSrc: process.env.PUBLIC_URL + "/pics/pic24.jpeg",
    imgDetail:
      " Beautiful box braids. Colour: dark braun. Length: beyond Shoulders. Styling time: 3 Hours; Keeping: till 2 Months; Suitable: Winter, Autumn",
  },
  {
    id: 25,
    imgSrc: process.env.PUBLIC_URL + "/pics/pic25.jpeg",
    imgDetail:
      " Beautiful fake dreadlocks with extensions. Colour: braun. Length: Long, bob. Styling time: 3 Hours; Keeping: till 3 Months, renewable; Suitable: Winter, Autumn",
  },
  {
    id: 26,
    imgSrc: process.env.PUBLIC_URL + "/pics/pic26.jpeg",
    imgDetail:
      " Beautiful box braids. Colour: dark red. Length: Shoulders. Styling time: 3 Hours; Keeping: till 2 Months; Suitable:Winter, Autumn",
  },
  {
    id: 27,
    imgSrc: process.env.PUBLIC_URL + "/pics/pic27.jpeg",
    imgDetail:
      " Beautiful box braids. Colour: dark red. Length: Shoulders. Styling time: 3 Hours; Keeping: till 2 Months; Suitable:Winter, Autumn",
  },
  {
    id: 28,
    imgSrc: process.env.PUBLIC_URL + "/pics/pic28.jpeg",
    imgDetail:
      " Beautiful box braids. Colour: dark red. Length: Shoulders. Styling time: 3 Hours; Keeping: till 2 Months; Suitable:Winter, Autumn",
  },
  {
    id: 29,
    imgSrc: process.env.PUBLIC_URL + "/pics/pic29.jpeg",
    imgDetail:
      " Beautiful box braids. Colour: dark red. Length: Shoulders. Styling time: 3 Hours; Keeping: till 2 Months; Suitable:Winter, Autumn",
  },
  {
    id: 30,
    imgSrc: process.env.PUBLIC_URL + "/pics/pic30.jpeg",
    imgDetail:
      " Beautiful box braids. Colour: dark red. Length: Shoulders. Styling time: 3 Hours; Keeping: till 2 Months; Suitable:Winter, Autumn",
  },
  {
    id: 31,
    imgSrc: process.env.PUBLIC_URL + "/pics/pic31.jpeg",
    imgDetail:
      " Beautiful box braids. Colour: dark red. Length: Shoulders. Styling time: 3 Hours; Keeping: till 2 Months; Suitable:Winter, Autumn",
  },
  {
    id: 32,
    imgSrc: process.env.PUBLIC_URL + "/pics/pic32.jpeg",
    imgDetail:
      " Beautiful box braids. Colour: dark red. Length: Shoulders. Styling time: 3 Hours; Keeping: till 2 Months; Suitable:Winter, Autumn",
  },
  {
    id: 33,
    imgSrc: process.env.PUBLIC_URL + "/pics/pic33.jpeg",
    imgDetail:
      " Beautiful box braids. Colour: dark red. Length: Shoulders. Styling time: 3 Hours; Keeping: till 2 Months; Suitable:Winter, Autumn",
  },
  {
    id: 34,
    imgSrc: process.env.PUBLIC_URL + "/pics/pic34.jpeg",
    imgDetail:
      " Beautiful box braids. Colour: dark red. Length: Shoulders. Styling time: 3 Hours; Keeping: till 2 Months; Suitable:Winter, Autumn",
  },
  {
    id: 35,
    imgSrc: process.env.PUBLIC_URL + "/pics/pic35.jpeg",
    imgDetail:
      " Beautiful box braids. Colour: dark red. Length: Shoulders. Styling time: 3 Hours; Keeping: till 2 Months; Suitable:Winter, Autumn",
  },
  {
    id: 36,
    imgSrc: process.env.PUBLIC_URL + "/pics/pic36.jpeg",
    imgDetail:
      " Beautiful box braids. Colour: dark red. Length: Shoulders. Styling time: 3 Hours; Keeping: till 2 Months; Suitable:Winter, Autumn",
  },
  {
    id: 37,
    imgSrc: process.env.PUBLIC_URL + "/pics/pic37.jpeg",
    imgDetail:
      " Beautiful box braids. Colour: dark red. Length: Shoulders. Styling time: 3 Hours; Keeping: till 2 Months; Suitable:Winter, Autumn",
  },
  {
    id: 38,
    imgSrc: process.env.PUBLIC_URL + "/pics/pic38.jpeg",
    imgDetail:
      " Beautiful box braids. Colour: dark red. Length: Shoulders. Styling time: 3 Hours; Keeping: till 2 Months; Suitable:Winter, Autumn",
  },
  {
    id: 39,
    imgSrc: process.env.PUBLIC_URL + "/pics/pic39.jpeg",
    imgDetail:
      " Beautiful box braids. Colour: dark red. Length: Shoulders. Styling time: 3 Hours; Keeping: till 2 Months; Suitable:Winter, Autumn",
  },
  {
    id: 40,
    imgSrc: process.env.PUBLIC_URL + "/pics/pic40.jpeg",
    imgDetail:
      " Beautiful box braids. Colour: dark red. Length: Shoulders. Styling time: 3 Hours; Keeping: till 2 Months; Suitable:Winter, Autumn",
  },
  {
    id: 41,
    imgSrc: process.env.PUBLIC_URL + "/pics/pic41.jpeg",
    imgDetail:
      " Beautiful box braids. Colour: dark red. Length: Shoulders. Styling time: 3 Hours; Keeping: till 2 Months; Suitable:Winter, Autumn",
  },
  {
    id: 42,
    imgSrc: process.env.PUBLIC_URL + "/pics/pic42.jpeg",
    imgDetail:
      " Beautiful box braids. Colour: dark red. Length: Shoulders. Styling time: 3 Hours; Keeping: till 2 Months; Suitable:Winter, Autumn",
  },
  {
    id: 43,
    imgSrc: process.env.PUBLIC_URL + "/pics/pic43.jpeg",
    imgDetail:
      " Beautiful box braids. Colour: dark red. Length: Shoulders. Styling time: 3 Hours; Keeping: till 2 Months; Suitable:Winter, Autumn",
  },
  {
    id: 44,
    imgSrc: process.env.PUBLIC_URL + "/pics/pic44.jpeg",
    imgDetail:
      " Beautiful box braids. Colour: dark red. Length: Shoulders. Styling time: 3 Hours; Keeping: till 2 Months; Suitable:Winter, Autumn",
  },
  {
    id: 45,
    imgSrc: process.env.PUBLIC_URL + "/pics/pic45.jpeg",
    imgDetail:
      " Beautiful box braids. Colour: dark red. Length: Shoulders. Styling time: 3 Hours; Keeping: till 2 Months; Suitable:Winter, Autumn",
  },
  {
    id: 46,
    imgSrc: process.env.PUBLIC_URL + "/pics/pic46.jpeg",
    imgDetail:
      " Beautiful box braids. Colour: dark red. Length: Shoulders. Styling time: 3 Hours; Keeping: till 2 Months; Suitable:Winter, Autumn",
  },
  {
    id: 47,
    imgSrc: process.env.PUBLIC_URL + "/pics/pic47.jpeg",
    imgDetail:
      " Beautiful box braids. Colour: dark red. Length: Shoulders. Styling time: 3 Hours; Keeping: till 2 Months; Suitable:Winter, Autumn",
  },
  {
    id: 48,
    imgSrc: process.env.PUBLIC_URL + "/pics/pic48.jpeg",
    imgDetail:
      " Beautiful box braids. Colour: dark red. Length: Shoulders. Styling time: 3 Hours; Keeping: till 2 Months; Suitable:Winter, Autumn",
  },
  {
    id: 49,
    imgSrc: process.env.PUBLIC_URL + "/pics/pic49.jpeg",
    imgDetail:
      " Beautiful box braids. Colour: dark red. Length: Shoulders. Styling time: 3 Hours; Keeping: till 2 Months; Suitable:Winter, Autumn",
  },
  {
    id: 50,
    imgSrc: process.env.PUBLIC_URL + "/pics/pic50.jpeg",
    imgDetail:
      " Beautiful box braids. Colour: dark red. Length: Shoulders. Styling time: 3 Hours; Keeping: till 2 Months; Suitable:Winter, Autumn",
  },
];
export default picsArr;
