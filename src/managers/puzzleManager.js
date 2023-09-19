const uniqid = require ('uniqid')

const puzzles = [
    {
        id: '5c39f1851ab3b24f5c03e181',
        name:'OUR SOLAR SYSTEM',
        pieces:'5000',
        imageUrl:'https://cdn.ozone.bg/media/catalog/product/cache/1/image/800x996/a4e40ebdc3e371adff845072e1c73f37/p/a/1b974f7524451674370dbdf9fa2a23fd/pazel-ravensburger-ot-5000-chasti---slanchevata-sistema-30.jpg',
    description: 'Our earth is not alone in the universe! Discover all the planets in our solar system with this large 5,000-piece puzzle!',
        }
    ,
    {
    id: '5c39f1851ab3b24f5c03e182',
    name:'RUCHANITSA',
    pieces:'2000',
    imageUrl:"https://www.blackseapuzzles.com/cdn/shop/products/pazel-black-sea-ot-2000-chasti---rachenitsa--ivan-markvichka-33.jpg?v=1678110195&width=600",
    description: 'James D. Bourchier, a correspondent for The Times in Bulgaria, was a vivid fan of the country. Perhaps it was fate that brought him together with two other distinguished men in the tavern in the village of Bistritsa: famous Czech-born painter Jan Mrkvicka and brave Bulgarian general Vladimir Vazov. This is how one of the best-known images of the Bulgarian spirit and folklore was born. Bourchier is among the few Europeans that championed the Bulgarian cause and created a positive image of the Bulgarian people for the world.',
    }, 
    
    {
    id: '5c39f1851ab3b24f5c03e183',
    name:'THE LORD OF THE RINGS SAGA',
    pieces:'3000',
    imageUrl:"https://www.toynk.com/cdn/shop/products/NMR-68520-CA_1000x.jpg?v=1647690664",
    description: 'FUN CHALLENGE: Forged to rule over all other puzzles, this challenging 3000 piece puzzle of the epic Lord of the Rings movie trilogy awaits you. Unite the Fellowship and complete the journey of a lifetime.',
    },
    
    {
    id: '5c39f1851ab3b24f5c03e184',
    name:'Antique World Map',
    pieces:'1000',
    imageUrl:"https://shop.getty.edu/cdn/shop/products/9780764950902_1_300x.jpg?v=1594847004",
    description: "This popular baroque-style map was originally designed as a frontispiece to Henricus Hondius’s 1630 revision of the long-lived Mercator/Hondius atlas, a work then being challenged by rival map publishers. The decorations include depictions of the four elements—earth, air, fire, and water—and portraits of Julius Caesar and cartographers Claudius Ptolemy, Gerard Mercator, and Jodocus Hondius Sr.",
    }, 

{
    id: '5c39f1851ab3b24f5c03e185',
    name:'World Map',
    pieces:'500',
    imageUrl:"https://www.hinkler.com.au/images/product/P04835_Puzzlebilities_Box_World.jpg",
    description: "The World Map 500 Piece Jigsaw Puzzle features a detailed modern map of the world. Puzzlers will not only enjoy the challenge of putting the jigsaw together, but will learn interesting facts at the same time in this fun educational tool! Features a detailed world map and a handy reference image on both the front and back of the jigsaw puzzle box, making the puzzle easy to complete in a group.",
    }, 
    {
    id: '5c39f1851ab3b24f5c03e186',
    name:'Madagascar Poster',
    pieces:'200',
    imageUrl:"https://media.entertainmentearth.com/assets/images/6dbcefbe30d84791b157785b8c35bbe0lg.jpg",
    description: "200 pieces of Madagascar poster puzzle fun!",
    }, 

];

exports.getAll = () => puzzles.slice();

exports.create = (puzzleData) => {
    const newPuzzle = {
        id: uniqid,
        ...puzzleData,
    };

    puzzles.push(newPuzzle);

}



