let films = {
    comedy:[
      {
        title: "My Big Fat Greek Wedding",
        Director:"Joel Zwick", 
        Year:2002
      },
      {
        title: "Shrek",
        Director:" Andrew Adamson and Vicky Jenson", 
        Year:2001
      }, 
      {
        title: "Fun with Dick and Jane", 
        Director:"Dean Parisot",
        Year:2005
      }],
    action:[
            {
              title: "World War Z",
              Director:"Marc Forster", 
              Year:2013
            },
            {
              title: "Busanhaeng",
              Director:" Yeon Sang-ho", 
              Year:2016
            }, 
            {
              title: "Lucy", 
              Director:"Luc Besson",
              Year:2014
      }],
    fantasy:[
        {
          title: "The Addams Family",
          Director:"Barry Sonnenfeld", 
          Year:1991
        },
        {
          title: "Harry Potter and the Half-Blood Prince",
          Director:"David Yates", 
          Year:2009
        }, 
        {
          title: "Everything Everywhere All at Once", 
          Director:"Daniel Kwan and Daniel Scheinert",
          Year:2022
  }],
};
//console.log(films)
if(films.fantasy.title === "Everything Everywhere All at Once"){
    console.log("you will love")
}else{
  console.log("cool movie")
}
