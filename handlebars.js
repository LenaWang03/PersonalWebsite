function start(){
    fill_templateProj();
    fill_templateWork();
}


function fill_template() {
    var data = {
        list: [
           {piece: {
                image: "Final.jpg",
                link: "roseTinted",
                title: "Rose-Tinted Glasses",
                number: "01"}
            },
            {piece: {
                image: "House.jpg",
                link: "house",
                title: "Up House",
                number: "02"}},
            {piece: {
                image: "ludis.png",
                link: "ludis",
                title: "Ludis",
                number: "03"}
            },
            {piece: {
                image: "Andy.JPG",
                link: "andy",
                title: "Andy",
                number: "04"}
            },
            {piece: {
                image: "Underwater.jpg",
                link: "underwater",
                title: "Tip Of The Iceberg",
                number: "05"}
            },
            {piece: {
                image: "spillSquare.jpg",
                link: "spill",
                title: "Spill",
                number: "06"}
            },
            {piece: {
                image: "Product.png",
                link: "product",
                title: "Express Yourself",
                number: "07"}
            },
            {piece: {
                image: "connie.jpg",
                link: "connie",
                title: "Connie",
                number: "08"}
            },
            {piece: {
                image: "Happy.jpg",
                link: "happy",
                title: "Happy",
                number: "09"}
            },
            {piece: {
                image: "among.png",
                link: "among",
                title: "Surprise Box Product Design",
                number: "10"}
            },
            {piece: {
                image: "robo.jpg",
                link: "robotics",
                title: "Robotics Branding",
                number: "11"}
            },
            {piece: {
                image: "Midterm.JPG",
                link: "greetings",
                title: "Greetings From The Dead",
                number: "12"}
            },
            

           
           
        ]
    }
   
     var template = Handlebars.compile(document.querySelector ("#template").innerHTML);
     var filled = template(data);
     document.querySelector("#output").innerHTML = filled;
   }

function fill_templateProj() {
    var dataProj = {
        listProj: [
           {piece: {
                image: "Final.jpg",
                link: "roseTinted",
                title: "Rose-Tinted Glasses"}
           },
            {piece: {
                image: "among.png",
                link: "among",
                title: "Surprise Box Product Design"}
            },

        ]
    };
    var dataProj2 = {
        listProj: [
            {piece: {
                image: "c.JPG",
                link: "connie",
                title: "Connie"}
            },
            {piece: {
                image: "Product.png",
                link: "product",
                title: "Express Yourself"}
            },
        ]
    };
    var dataProj3 = {
        listProj: [
            {piece: {
                image: "robo.jpg",
                link: "robotics",
                title: "Robotics Branding"}
                },
        ]
    };
    var dataProj4 = {
        listProj: [
            {piece: {
                image: "ludis.png",
                link: "ludis",
                title: "Ludis"}
            },
            {piece: {
                image: "Midterm.JPG",
                link: "greetings",
                title: "Greetings From The Dead"}
            },
        ]
    };
   
     var template = Handlebars.compile(document.querySelector ("#templatep").innerHTML);
     var filled = template(dataProj);
     var filled2 = template(dataProj2);
     var filled3 = template(dataProj3);
     var filled4 = template(dataProj4);
     document.querySelector("#output").innerHTML = filled;
     document.querySelector("#output2").innerHTML = filled2;
     document.querySelector("#output3").innerHTML = filled3;
     document.querySelector("#output4").innerHTML = filled4;
   }

   function fill_templateWork() {
    var dataWork = {
        listWork: [
            {piece: {
                image: "BobRoss.jpg",
                link: "bob",
                title: "Towering Peaks"}
            },
            {piece: {
                image: "House1.jpg",
                link: "house",
                title: "Up House"}
            },
            
            {piece: {
                image: "SciFi.png",
                link: "last",
                title: "Last One Standing"}
            },
            {piece: {
                image: "space.jpg",
                link: "space",
                title: "Head In The Stars"}
            },
            
            {piece: {
                image: "kiki.jpg",
                link: "kiki",
                title: "Kiki's Delivery Service"}
            },
            
        ]
    };
    var dataWork2 = {
        listWork: [
            {piece: {
                image: "Yearbook.png",
                link: "yearbook",
                title: "2021 Yearbook Cover Winner"}
            },
            {piece: {
                image: "Soldier.jpg",
                link: "soldier",
                title: "The Unforgotten Soldier"}
            },
            {piece: {
                image: "artboard 0.jpg",
                link: "spill",
                title: "Spill"}
            },
            {piece: {
                image: "Happy.jpg",
                link: "happy",
                title: "Happy"}
            },
            {piece: {
                image: "Lord.JPG",
                link: "lord",
                title: "Lord Of The Flies Book Cover"}
            },
        ]
    };
    var dataWork3 = {
        listWork: [
            {piece: {
                image: "Lady.JPG",
                link: "lady",
                title: "Lady On A Chair"},
            },
            {piece: {
                image: "field.jpg",
                link: "field",
                title: "Central Experimental Farm"}
            },
            {piece: {
                image: "Andy.JPG",
                link: "andy",
                title: "Andy"}
            },
            {piece: {
                image: "Underwater.jpg",
                link: "underwater",
                title: "Tip Of The Iceberg"}
            },
            {piece: {
                image: "rfc.jpg",
                link: "reach",
                title: "Reaching For Contact"}
            },
            
        ]
    };
    var dataWork4 = {
        listWork: [
            {piece: {
                image: "Eye.jpg",
                link: "eye",
                title: "Window To The Soul"}
            },
            {piece: {
                image: "Mary Poppins JPEG(resized).jpg",
                link: "mary",
                title: "Mary Poppins Poster"}
            },
            
            {piece: {
                image: "noEyes.JPG",
                link: "noEyes",
                title: "Fortune Teller"}
            },
            {piece: {
                image: "dandy.jpg",
                link: "dandy",
                title: "Weeds Are Flowers Too"}
            },
        ]
    };
   
     var template = Handlebars.compile(document.querySelector ("#templatew").innerHTML);
     var filled = template(dataWork);
     var filled2 = template(dataWork2);
     var filled3 = template(dataWork3);
     var filled4 = template(dataWork4);
     document.querySelector("#output1").innerHTML = filled;
     document.querySelector("#output12").innerHTML = filled2;
     document.querySelector("#output13").innerHTML = filled3;
     document.querySelector("#output14").innerHTML = filled4;
   }

   function fill_templatePaint() {
    var data = {
        list: [
            {piece: {
                image: "Eye.jpg",
                link: "eye",
                title: "Window To The Soul"}
            },
           {piece: {
                image: "Final.jpg",
                link: "roseTinted",
                title: "Rose-Tinted Glasses"}
           },
           {piece: {
                image: "dandy.jpg",
                link: "dandy",
                title: "Weeds Are Flowers Too"}
            },
        ]
    };
    var data2 = {
        list: [
            {piece: {
                image: "artboard 0.jpg",
                link: "spill",
                title: "Spill"}
            },
            {piece: {
                image: "Product.png",
                link: "product",
                title: "Express Yourself"}
            },
            {piece: {
                image: "field.jpg",
                link: "field",
                title: "Central Experimental Farm"}
            },
        ]
    };
    var data3 = {
        list: [
            {piece: {
                image: "rfc.jpg",
                link: "reach",
                title: "Reaching For Contact"}
            },
            {piece: {
                image: "c.JPG",
                link: "connie",
                title: "Connie"}
            },
            {piece: {
                image: "kiki.jpg",
                link: "kiki",
                title: "Kiki's Delivery Service"}
            },
        ]
    };
    var data4 = {
        list: [
            {piece: {
                image: "BobRoss.jpg",
                link: "bob",
                title: "Towering Peaks"}
            },
            {piece: {
                image: "noEyes.JPG",
                link: "noEyes",
                title: "Fortune Teller"}
            },
            
            
        ]
    };
   
     var template = Handlebars.compile(document.querySelector ("#template").innerHTML);
     var filled = template(data);
     var filled2 = template(data2);
     var filled3 = template(data3);
     var filled4 = template(data4);
     document.querySelector("#output").innerHTML = filled;
     document.querySelector("#output2").innerHTML = filled2;
     document.querySelector("#output3").innerHTML = filled3;
     document.querySelector("#output4").innerHTML = filled4;
   }

   function fill_templateDry() {
    var data = {
        list: [
            {piece: {
                image: "connie.jpg",
                link: "connie",
                title: "Connie"}
            },
        ]
    };
    var data2 = {
        list: [
            {piece: {
                image: "Happy.jpg",
                link: "happy",
                title: "Happy"}
            },
        ]
    };
    var data3 = {
        list: [
            {piece: {
                image: "Midterm.JPG",
                link: "greetings",
                title: "Greetings From The Dead"}
            },
        ]
    };
    var data4 = {
        list: [
           {piece: {
                image: "House1.jpg",
                link: "house",
                title: "Up House",
                date: "01/01/01"},
           },
           {piece: {
                image: "Lady.JPG",
                link: "lady",
                title: "Lady On A Chair"},
            },
        ]
    };
   
     var template = Handlebars.compile(document.querySelector ("#template").innerHTML);
     var filled = template(data);
     var filled2 = template(data2);
     var filled3 = template(data3);
     var filled4 = template(data4);
     document.querySelector("#output").innerHTML = filled;
     document.querySelector("#output2").innerHTML = filled2;
     document.querySelector("#output3").innerHTML = filled3;
     document.querySelector("#output4").innerHTML = filled4;
   }

   function fill_templateDigital() {
    var data = {
        list: [
            {piece: {
                image: "Andy.JPG",
                link: "andy",
                title: "Andy"}
            },
            {piece: {
                image: "Soldier.jpg",
                link: "soldier",
                title: "The Unforgotten Soldier"}
            },
        ]
    };
    var data2 = {
        list: [
            {piece: {
                image: "Space.jpg",
                link: "space",
                title: "Head In The Stars"}
            },
            {piece: {
                image: "Yearbook.png",
                link: "yearbook",
                title: "2021 Yearbook Cover Winner"}
            },
            
        ]
    };
    var data3 = {
        list: [
            {piece: {
                image: "SciFi.png",
                link: "last",
                title: "Last One Standing"}
            },
        ]
    };
    var data4 = {
        list: [
            {piece: {
                image: "Lord.JPG",
                link: "lord",
                title: "Lord Of The Flies Book Cover"}
            },
        ]
    };
   
     var template = Handlebars.compile(document.querySelector ("#template").innerHTML);
     var filled = template(data);
     var filled2 = template(data2);
     var filled3 = template(data3);
     var filled4 = template(data4);
     document.querySelector("#output").innerHTML = filled;
     document.querySelector("#output2").innerHTML = filled2;
     document.querySelector("#output3").innerHTML = filled3;
     document.querySelector("#output4").innerHTML = filled4;
   }

   function fill_templateCode() {
    var data = {
        list: [
            {piece: {
                image: "ludis.png",
                link: "ludis",
                title: "Ludis"}
            },
            {piece: {
                image: "Mary Poppins JPEG(resized).jpg",
                link: "mary",
                title: "Mary Poppins Poster"}
            },
        ]
    };
    var data2 = {
        list: [
            {piece: {
                image: "robo.jpg",
                link: "robotics",
                title: "Robotics Branding"}
            },
        ]
    };
    var data3 = {
        list: [
            {piece: {
                image: "Product.png",
                link: "product",
                title: "Express Yourself"}
            },
        ]
    };
    var data4 = {
        list: [
            {piece: {
                image: "among.png",
                link: "among",
                title: "Surprise Box Product Design"}
            },
        ]
    };
   
     var template = Handlebars.compile(document.querySelector ("#template").innerHTML);
     var filled = template(data);
     var filled2 = template(data2);
     var filled3 = template(data3);
     var filled4 = template(data4);
     document.querySelector("#output").innerHTML = filled;
     document.querySelector("#output2").innerHTML = filled2;
     document.querySelector("#output3").innerHTML = filled3;
     document.querySelector("#output4").innerHTML = filled4;
   }

   function fill_templateMisc() {
    var data = {
        list: [
           
        ]
    };
    var data2 = {
        list: [
           
        ]
    };
    var data3 = {
        list: [
           
        ]
    };
    var data4 = {
        list: [
           
        ]
    };
   
     var template = Handlebars.compile(document.querySelector ("#template").innerHTML);
     var filled = template(data);
     var filled2 = template(data2);
     var filled3 = template(data3);
     var filled4 = template(data4);
     document.querySelector("#output").innerHTML = filled;
     document.querySelector("#output2").innerHTML = filled2;
     document.querySelector("#output3").innerHTML = filled3;
     document.querySelector("#output4").innerHTML = filled4;
   }