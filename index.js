// jquery is the javascript library that will prevent our fingers from breaking

// document.querySelector("h1")   in javascript

// $("h1")                        using jquery we can write above line this much short .

// $("h1").css("color" , "red")

// // in jquery if we have one properety , it means get the value , if 2 properties , it means set the value

// console.log(  $("h1").css("font-size")  );    // getting font size 34px

// $("h1").css("color" , "red")               //setting color to red

// $("h1").addClass("big-title")
//                                          // add and remove single class
// $("h1").removeClass("big-title")

// $("h1").addClass("big-title line")
//                                          // add and remove multiple classes
// $("h1").removeClass("big-title line")

// $("h1").text("bye")      // changing text

// $("button").html("<em>Hey</em>")

// manipulate attributes with jQuery

// console.log(  $("a").attr("href")  )        get attribute

// $("a").attr("href","https://www.amazon.com")   set attribute

// $("a").attr("class")          it will print all the classes assinged to a

//adding event listners

// $("h1").click(function(){
//     $("h1").css("color" , "purple")
// });  


// for (var i=0;i<5;i++){
//     document.querySelectorAll("button")[i].addEventListener("click" , function(){
//         document.querySelector("h1").style.color = "purple";
//     });
// }

// see how short we can write above code in jquery

// $("button").click(function(){
//     $("h1").css("color" , "purple")
// })


// $("input").keypress(function(event){
//     console.log(event.key)
// })

// $(document).keypress(function(event){
//     $("h1").text(event.key)
// })

// //another way of events

// $("h1").on("mouseover" , function(){
//     $("h1").css("color","green")
// })


// $("h1").before("<button>new</button>")
// $("h1").after("<button>new</button>")
// $("h1").prepend("<button>new</button>")
// $("h1").append("<button>new</button>")


//animations using jquery

// $("h1").on("click" , function(){
//         $("h1").hide();
//     })

//     $("h1").on("click" , function(){
//         $("h1").fadeIn();
//     })

    // $("h1").on("click" , function(){
    //     $("h1").slideToggle();
    // })

    // $("h1").on("click" , function(){
    //     $("h1").animate({opacity:0.5});
    // })

    $("h1").on("click" , function(){
        $("h1").slideUp().slideDown().animate({opacity:0.5});
    })