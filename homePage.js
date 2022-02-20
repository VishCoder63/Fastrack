//store the master product data on localStorage
var fastrackData1 = [
  {
    pImageArray: [
      "https://staticimg.titan.co.in/Fastrack/Catalog/6234NL01_1.jpg?pView=pdp",
      "https://staticimg.titan.co.in/Fastrack/Catalog/6234NL01_3.jpg?pView=pdp",
      "https://staticimg.titan.co.in/Fastrack/Catalog/6234NL01_4.jpg?pView=pdp",
      "https://staticimg.titan.co.in/Fastrack/Catalog/6234NL01_5.jpg?pView=pdp",
    ],
    pName: "GLITCH BLACK DIAL BLACK LEATHER STRAP WATCH",
    pMRP: 2195,
    pText: "Fastrack Glitch Black Dial Analog Watch for Girls",
    pOffer: 10,
    pCode: "6234NL01",
    pColor: "Black",
    pGender: "W",
  },
  {
    pImageArray: [
      "https://staticimg.titan.co.in/Fastrack/Catalog/6234QL01_1.jpg?pView=pdp",
      "https://staticimg.titan.co.in/Fastrack/Catalog/6234QL01_3.jpg?pView=pdp",
      "https://staticimg.titan.co.in/Fastrack/Catalog/6234QL01_4.jpg?pView=pdp",
      "https://staticimg.titan.co.in/Fastrack/Catalog/6234QL01_5.jpg?pView=pdp",
    ],
    pName: "GLITCH SILVER DIAL BLUE LEATHER STRAP WATCH",
    pMRP: 2395,
    pText: "Fastrack Glitch Silver Dial Analog Watch for Girls",
    pOffer: 10,
    pCode: "6234QL01",
    pColor: "Blue",
    pGender: "W",
  },
  {
    pImageArray: [
      "https://staticimg.titan.co.in/Fastrack/Catalog/6234QL02_1.jpg?pView=pdp",
      "https://staticimg.titan.co.in/Fastrack/Catalog/6234QL02_3.jpg?pView=pdp",
      "https://staticimg.titan.co.in/Fastrack/Catalog/6234QL02_4.jpg?pView=pdp",
      "https://staticimg.titan.co.in/Fastrack/Catalog/6234QL02_5.jpg?pView=pdp",
    ],
    pName: "GLITCH BLUE DIAL GREEN LEATHER STRAP WATCH",
    pMRP: 2595,
    pText: "Fastrack Glitch blue Dial Analog Watch for Girls",
    pOffer: 20,
    pCode: "6234QL02",
    pGender: "W",
    pColor: "Green",
  },
  {
    pImageArray: [
      "https://staticimg.titan.co.in/Fastrack/Catalog/6234SL01_1.jpg?pView=pdp",
      "https://staticimg.titan.co.in/Fastrack/Catalog/6234SL01_3.jpg?pView=pdp",
      "https://staticimg.titan.co.in/Fastrack/Catalog/6234SL01_4.jpg?pView=pdp",
      "https://staticimg.titan.co.in/Fastrack/Catalog/6234SL01_5.jpg?pView=pdp",
    ],
    pName: "GLITCH SILVER DIAL SILVER LEATHER STRAP WATCH",
    pMRP: 1995,
    pText: "Fastrack Glitch Silver Dial Analog Watch for Girls",
    pOffer: 15,
    pCode: "6234SL01",
    pGender: "W",
    pColor: "White",
  },
  {
    pImageArray: [
      "https://staticimg.titan.co.in/Fastrack/Catalog/6234WL01_1.jpg?pView=pdp",
      "https://staticimg.titan.co.in/Fastrack/Catalog/6234WL01_3.jpg?pView=pdp",
      "https://staticimg.titan.co.in/Fastrack/Catalog/6234WL01_4.jpg?pView=pdp",
      "https://staticimg.titan.co.in/Fastrack/Catalog/6234WL01_5.jpg?pView=pdp",
    ],
    pName: "GLITCH ROSE GOLD DIAL ROSE GOLD LEATHER STRAP WATCH",
    pMRP: 2395,
    pText: "Fastrack Glitch Rose Gold Dial Analog Watch for Girls",
    pOffer: 15,
    pCode: "6234WL01",
    pGender: "W",
    pColor: "Gold",
  },
  {
    pImageArray: [
      "https://staticimg.titan.co.in/Fastrack/Catalog/6237NM01_1.jpg?pView=pdp",
      "https://staticimg.titan.co.in/Fastrack/Catalog/6237NM01_3.jpg?pView=pdp",
      "https://staticimg.titan.co.in/Fastrack/Catalog/6237NM01_4.jpg?pView=pdp",
      "https://staticimg.titan.co.in/Fastrack/Catalog/6237NM01_5.jpg?pView=pdp",
    ],
    pName: "GLITCH GREY DIAL BLACK BRASS STRAP WATCH",
    pMRP: 2995,
    pText: "Fastrack Glitch Grey Dial Analog Watch for Girls",
    pOffer: 10,
    pCode: "6237NM01",
    pGender: "W",
    pColor: "Black",
  },
  {
    pImageArray: [
      "https://staticimg.titan.co.in/Fastrack/Catalog/6237QM01_1.jpg?pView=pdp",
      "https://staticimg.titan.co.in/Fastrack/Catalog/6237QM01_3.jpg?pView=pdp",
      "https://staticimg.titan.co.in/Fastrack/Catalog/6237QM01_4.jpg?pView=pdp",
      "https://staticimg.titan.co.in/Fastrack/Catalog/6237QM01_5.jpg?pView=pdp",
    ],
    pName: "GLITCH BROWN DIAL BROWN BRASS STRAP WATCH",
    pMRP: 3265,
    pText: "Fastrack Glitch Brown Dial Analog Watch for Girls",
    pOffer: 20,
    pCode: "6237QM01",
    pGender: "W",
    pColor: "Brown",
  },
  {
    pImageArray: [
      "https://staticimg.titan.co.in/Fastrack/Catalog/6237SM01_1.jpg?pView=pdp",
      "https://staticimg.titan.co.in/Fastrack/Catalog/6237SM01_3.jpg?pView=pdp",
      "https://staticimg.titan.co.in/Fastrack/Catalog/6237SM01_4.jpg?pView=pdp",
      "https://staticimg.titan.co.in/Fastrack/Catalog/6237SM01_5.jpg?pView=pdp",
    ],
    pName: "GLITCH SILVER DIAL SILVER BRASS STRAP WATCH",
    pMRP: 2795,
    pText: "Fastrack Glitch Silver Dial Analog Watch for Girls",
    pOffer: 15,
    pCode: "6237SM01",
    pGender: "W",
    pColor: "Silver",
  },
  {
    pImageArray: [
      "https://staticimg.titan.co.in/Fastrack/Catalog/68026NM01_1.jpg?pView=pdp",
      "https://staticimg.titan.co.in/Fastrack/Catalog/68026NM01_3.jpg?pView=pdp",
      "https://staticimg.titan.co.in/Fastrack/Catalog/68026NM01_4.jpg?pView=pdp",
      "https://staticimg.titan.co.in/Fastrack/Catalog/68026NM01_5.jpg?pView=pdp",
    ],
    pName: "GLITCH BLACK DIAL BLACK BRASS STRAP WATCH",
    pMRP: 5395,
    pText: "Fastrack Glitch Black Dial Analog Watch for Girls",
    pOffer: 20,
    pCode: "68026NM01",
    pGender: "W",
    pColor: "Black",
  },
  {
    pImageArray: [
      "https://staticimg.titan.co.in/Fastrack/Catalog/68026SM01_1.jpg?pView=pdp",
      "https://staticimg.titan.co.in/Fastrack/Catalog/68026SM01_3.jpg?pView=pdp",
      "https://staticimg.titan.co.in/Fastrack/Catalog/68026SM01_4.jpg?pView=pdp",
      "https://staticimg.titan.co.in/Fastrack/Catalog/68026SM01_5.jpg?pView=pdp",
    ],
    pName: "GLITCH SILVER DIAL SILVER BRASS STRAP WATCH",
    pMRP: 4995,
    pText: "Fastrack Glitch Silver Dial Analog Watch for Girls",
    pOffer: 10,
    pCode: "68026SM01",
    pGender: "W",
    pColor: "Silver",
  },
  //***********************************Men's Watches data below***********************************************************************

  {
    pImageArray: [
      "https://staticimg.titan.co.in/Fastrack/Catalog/3220SL03_1.jpg?pView=pdp",
      "https://staticimg.titan.co.in/Fastrack/Catalog/3220SL03_3.jpg?pView=pdp",
      "https://staticimg.titan.co.in/Fastrack/Catalog/3220SL03_4.jpg?pView=pdp",
      "https://staticimg.titan.co.in/Fastrack/Catalog/3220SL03_5.jpg?pView=pdp",
    ],
    pName: "STUNNERS MULTICOLOUR DIAL YELLOW LEATHER STRAP WATCH",
    pMRP: 2095,
    pText: "Fastrack Stunners Multicolour Dial Analog Watch for Guys",
    pOffer: 10,
    pCode: "3220SL03",
    pGender: "M",
    pColor: "Yellow",
  },
  {
    pImageArray: [
      "https://staticimg.titan.co.in/Fastrack/Catalog/3220NM01_1.jpg?pView=pdp",
      "https://staticimg.titan.co.in/Fastrack/Catalog/3220NM01_3.jpg?pView=pdp",
      "https://staticimg.titan.co.in/Fastrack/Catalog/3220NM01_4.jpg?pView=pdp",
      "https://staticimg.titan.co.in/Fastrack/Catalog/3220NM01_5.jpg?pView=pdp",
    ],
    pName: "STUNNERS MULTICOLOUR DIAL BLACK METAL STRAP WATCH",
    pMRP: 2595,
    pText: "Fastrack Stunners Multicolour Dial Analog Watch for Guys",
    pOffer: 15,
    pCode: "3220NM01",
    pGender: "M",
    pColor: "Black",
  },
  {
    pImageArray: [
      "https://staticimg.titan.co.in/Fastrack/Catalog/3245NL02_1.jpg?pView=pdp",
      "https://staticimg.titan.co.in/Fastrack/Catalog/3245NL02_3.jpg?pView=pdp",
      "https://staticimg.titan.co.in/Fastrack/Catalog/3245NL02_4.jpg?pView=pdp",
      "https://staticimg.titan.co.in/Fastrack/Catalog/3245NL02_5.jpg?pView=pdp",
    ],
    pName: "STUNNERS ORANGE DIAL BROWN LEATHER STRAP WATCH",
    pMRP: 2395,
    pText: "Fastrack Stunners Orange Dial Analog Watch for Guys",
    pOffer: 20,
    pCode: "3245NL02",
    pGender: "M",
    pColor: "Brown",
  },
  {
    pImageArray: [
      "https://staticimg.titan.co.in/Fastrack/Catalog/3245NM02_1.jpg?pView=pdp",
      "https://staticimg.titan.co.in/Fastrack/Catalog/3245NM02_3.jpg?pView=pdp",
      "https://staticimg.titan.co.in/Fastrack/Catalog/3245NM02_4.jpg?pView=pdp",
      "https://staticimg.titan.co.in/Fastrack/Catalog/3245NM02_5.jpg?pView=pdp",
    ],
    pName: "STUNNERS BLACK DIAL BLACK METAL STRAP WATCH",
    pMRP: 2595,
    pText: "Fastrack Stunners Black Dial Analog Watch for Guys",
    pOffer: 15,
    pCode: "3245NM02",
    pGender: "M",
    pColor: "Black",
  },
  {
    pImageArray: [
      "https://staticimg.titan.co.in/Fastrack/Catalog/38064PP01_1.jpg?pView=pdp",
      "https://staticimg.titan.co.in/Fastrack/Catalog/38064PP01_3.jpg?pView=pdp",
      "https://staticimg.titan.co.in/Fastrack/Catalog/38064PP01_4.jpg?pView=pdp",
      "https://staticimg.titan.co.in/Fastrack/Catalog/38064PP01_5.jpg?pView=pdp",
    ],
    pName: "STREETWEAR ANA DIGI WATCH",
    pMRP: 2795,
    pText: "Fastrack Streetwear Ana Digi Watch for Men",
    pOffer: 10,
    pCode: "38064PP01",
    pGender: "M",
    pColor: "Black",
  },
  {
    pImageArray: [
      "https://staticimg.titan.co.in/Fastrack/Catalog/3254SM01_1.jpg?pView=pdp",
      "https://staticimg.titan.co.in/Fastrack/Catalog/3254SM01_2.jpg?pView=pdp",
      "https://staticimg.titan.co.in/Fastrack/Catalog/3254SM01_4.jpg?pView=pdp",
      "https://staticimg.titan.co.in/Fastrack/Catalog/3254SM01_5.jpg?pView=pdp",
    ],
    pName: "STUNNER IN SILVER DIAL & METAL STRAP",
    pMRP: 1795,
    pText: "Fastrack Stunners - Silver Dial Analog Watch for Guys",
    pOffer: 15,
    pCode: "3254SM01",
    pGender: "M",
    pColor: "Silver",
  },
  {
    pImageArray: [
      "https://staticimg.titan.co.in/Fastrack/Catalog/3251KL01_1.jpg?pView=pdp",
      "https://staticimg.titan.co.in/Fastrack/Catalog/3251KL01_3.jpg?pView=pdp",
      "https://staticimg.titan.co.in/Fastrack/Catalog/3251KL01_4.jpg?pView=pdp",
      "https://staticimg.titan.co.in/Fastrack/Catalog/3251KL01_5.jpg?pView=pdp",
    ],
    pName: "GAMIFY WATCH WITH BLACK DIAL",
    pMRP: 4395,
    pText: "Fastrack Gamify Watch - Black Dial Analog for Guys",
    pOffer: 10,
    pCode: "3251KL01",
    pGender: "M",
    pColor: "Green",
  },
  {
    pImageArray: [
      "https://staticimg.titan.co.in/Fastrack/Catalog/3251KM01_1.jpg?pView=pdp",
      "https://staticimg.titan.co.in/Fastrack/Catalog/3251KM01_3.jpg?pView=pdp",
      "https://staticimg.titan.co.in/Fastrack/Catalog/3251KM01_4.jpg?pView=pdp",
      "https://staticimg.titan.co.in/Fastrack/Catalog/3251KM01_5.jpg?pView=pdp",
    ],
    pName: "GAMIFY WATCH WITH BLACK DIAL",
    pMRP: 5295,
    pText: "Fastrack Gamify Watch - Black Dial Analog for Guys",
    pOffer: 15,
    pCode: "3251KM01",
    pGender: "M",
    pColor: "Silver",
  },
  {
    pImageArray: [
      "https://staticimg.titan.co.in/Fastrack/Catalog/3232SL01_1.jpg?pView=pdp",
      "https://staticimg.titan.co.in/Fastrack/Catalog/3232SL01_3.jpg?pView=pdp",
      "https://staticimg.titan.co.in/Fastrack/Catalog/3232SL01_4.jpg?pView=pdp",
      "https://staticimg.titan.co.in/Fastrack/Catalog/3232SL01_5.jpg?pView=pdp",
    ],
    pName: "SILVER DIAL ANALOG WATCH",
    pMRP: 1755,
    pText: "Fastrack Silver Dial Analog Watch for Guys",
    pOffer: 20,
    pCode: "3232SL01",
    pGender: "M",
    pColor: "Brown",
  },
  {
    pImageArray: [
      "https://staticimg.titan.co.in/Fastrack/Catalog/3246SM01_1.jpg?pView=pdp",
      "https://staticimg.titan.co.in/Fastrack/Catalog/3246SM01_2.jpg?pView=pdp",
      "https://staticimg.titan.co.in/Fastrack/Catalog/3246SM01_4.jpg?pView=pdp",
      "https://staticimg.titan.co.in/Fastrack/Catalog/3246SM01_5.jpg?pView=pdp",
    ],
    pName: "WHITE DIAL STAINLESS STEEL STRAP WATCH",
    pMRP: 2450,
    pText:
      "Fastrack Bare Basics White Dial Analog Watch for Guys with Date function",
    pOffer: 20,
    pCode: "3246SM01",
    pGender: "M",
    pColor: "Silver",
  },
];

localStorage.setItem("fastrackData", JSON.stringify(fastrackData1));
//*************************MASTER DATA STORED******************************************* */

let fastrackData = JSON.parse(localStorage.getItem("fastrackData"));

//top bar #1
{
  document
    .querySelectorAll(
      "#ho2TopBar>ul>li:nth-child(5),#ho2TopBar>ul>li:nth-child(1)"
    )
    .forEach(function (el) {
      el.addEventListener("click", function () {
        alert("In Contruction!🚧🚧🚧");
      });
    });
  var ho5clicked = 1;
  document
    .querySelector("#ho2TopBar>ul>li:nth-child(2)")
    .addEventListener("click", function (e) {
      // alert("Welcome to currency changer!");
      if (ho5clicked == 1) {
        document.querySelector("#ho2TopBar>ul>li:nth-child(2)").innerHTML =
          'CURRENCY SELECTOR &nbsp;&nbsp;<i class="fas fa-chevron-up"></i>';

        var ho4CurrBox = document.createElement("div");
        let ho4flexBox = document.createElement("div");
        let ho4heading = document.createElement("p");
        ho4heading.textContent = "SELECT A CURRENCY";
        let ho4box1 = document.createElement("div");
        ho4box1.innerHTML = 'INR &nbsp <i class="fas fa-rupee-sign"></i>';
        let ho4box2 = document.createElement("div");
        ho4box2.textContent = "USD $";
        ho4flexBox.append(ho4box1, ho4box2);
        ho4CurrBox.append(ho4heading, ho4flexBox);
        ho4CurrBox.setAttribute("class", "ho4CurrBox");
        e.path[3].before(ho4CurrBox);
        //appended the INR and USD boxes ^

        let ho4Temp = document.querySelectorAll(".ho4CurrBox>div>div");
        for (let i = 0; i < ho4Temp.length; i++) {
          ho4Temp[i].addEventListener("click", function () {
            ho4Temp[i].setAttribute("id", "ho4BoxesClicked");
            // alert("Goal:To change all the prices to the other currency");
            ho4Temp[(i + 1) % ho4Temp.length].removeAttribute(
              "id",
              "ho4BoxesClicked"
            );
          });
        }

        // the INR and USD boxes will alternate their border when clicked
        ho5clicked = (ho5clicked + 1) % 2;
      } else {
        document.querySelector("#ho2TopBar>ul>li:nth-child(2)").innerHTML =
          'CURRENCY SELECTOR &nbsp;&nbsp;<i class="fas fa-chevron-down"></i>';
        document.getElementsByClassName("ho3BlackBox")[0].children[0].remove();
        ho5clicked = (ho5clicked + 1) % 2;
      }
    });

  currUser = JSON.parse(localStorage.getItem("currUser"));
  if (currUser) {
    document.querySelector("#ho2TopBar>ul>li:nth-child(3)").innerHTML =
      currUser.si3firstName + "&nbsp;&nbsp;&nbsp;<span>LOGOUT</span>";

    document
      .querySelector("#ho2TopBar>ul>li:nth-child(3)")
      .children[0].addEventListener("click", function () {
        localStorage.removeItem("currUser");
        window.location.reload();
      });
  } else {
    document.querySelector("#ho2TopBar>ul>li:nth-child(3)").innerHTML = "LOGIN";
  }

  if (!currUser) {
    document
      .querySelector("#ho2TopBar>ul>li:nth-child(3)")
      .addEventListener("click", function () {
        // alert("Welcome to Login page!");
        window.location.href = "login.html";
      });
  }

  document
    .querySelector("#ho2TopBar>ul>li:nth-child(4)")
    .addEventListener("click", function () {
      alert("Welcome to WishList page!");
    });

  cartArr = JSON.parse(localStorage.getItem("cartArr"));
  if (cartArr) {
    document.querySelector(
      "#ho2TopBar>ul>li:nth-child(6)"
    ).children[0].textContent = cartArr.reduce(function (acc, el) {
      return acc + Number(el.qty);
    }, 0);
  } else {
    document.querySelector(
      "#ho2TopBar>ul>li:nth-child(6)"
    ).children[0].textContent = 0;
  }

  document
    .querySelector("#ho2TopBar>ul>li:nth-child(6)")
    .addEventListener("click", function () {
      // alert("Welcome to cart page!");
      window.location.href = "cart.html";
    });
}

// topbar#2
{
  document
    .querySelector("#ho2TopBar")
    .addEventListener("mouseover", function (e) {
      e.path[4].children[1].children[1].remove();
    });

  let ho6Temp = document.querySelectorAll("#ho7TopBar>ul>li");
  ho6Temp[0].addEventListener("click", function () {
    alert("map clicked");
  });
  ho6Temp[1].addEventListener("click", function () {
    // alert("watch clicked");
    window.location.href = "productListing.html";
  });
  ho6Temp[2].addEventListener("click", function () {
    alert("smart clicked");
  });
  ho6Temp[3].addEventListener("click", function () {
    alert("eyewear clicked");
  });
  ho6Temp[4].addEventListener("click", function () {
    // alert("image clicked");
    window.location.href = "index.html";
  });
  ho6Temp[5].addEventListener("click", function () {
    alert("bag clicked");
  });
  ho6Temp[6].addEventListener("click", function () {
    alert("perfume clicked");
  });
  ho6Temp[7].addEventListener("click", function () {
    alert("offers clicked");
  });
  ho6Temp[8].addEventListener("click", function () {
    alert("search clicked");
  });

  for (let i = 0; i < ho6Temp.length; i++) {
    ho6Temp[i].addEventListener("mouseover", function (e) {
      if (e.target.textContent == "WATCHES") {
        let ho8Temp = document.createElement("div");
        ho8Temp.setAttribute("class", "ho8Temp");

        ho8Temp.innerHTML = `
          <div id='ho10Temp'>
      <div id="ho9Left">
        <table>
          <thead>
            <tr>
              <th>Shop For</th>
              <th>Shop By Style</th>
              <th>Shop Collectibles</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>              
                <div>
                  <img src="./Images/t2W1.png" alt="" width=35% height=35%>
                  <div>Him</div>
                </div>
              </td>
              <td>
                <div>
                <img src="./Images/t2W2.png" alt="" width=35% height=35%>
                  <div>Casual</div>
                </div>
              </td>
              <td>
                <div>
                <img src="./Images/t2W3.png" alt="" width=35% height=35%>
                  <div>Coca Cola Edition</div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div>
                <img src="./Images/t2W4.png" alt="" width=35% height=35%>
                  <div>Her</div>
                </div>              
              </td>
              <td>
                <div>
                <img src="./Images/t2W5.png" alt="" width=35% height=35%>
                  <div>Fashion</div>
                </div>
              </td>
              <td>
                <div>
                <img src="./Images/t2W6.png" alt="" width=35% height=35%>
                  <div>Avengers</div>                
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div>
                <img src="./Images/t2W7.png" alt="" width=35% height=35%>
                  <div>Them</div>
                </div>
              </td>
              <td>
                <div>
                <img src="./Images/t2W8.png" alt="" width=35% height=35%>
                  <div>Sporty</div>
                </div>
              </td>
              <td>
                <div>
                <img src="./Images/t2W9.png" alt="" width=35% height=35%>
                  <div>Game Of Thrones</div>
                </div>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <div>
                <img src="./Images/t2W10.png" alt="" width=35% height=35%>
                  <div>Tees</div>
                </div>
              </td>
              <td>
                <div>
                <img src="./Images/t2W11.png" alt="" width=35% height=35%>
                  <div>Sunburn</div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>     
        <button id='viewallBtn'>View All</button>                  
      </div>
      <div id="ho9Right">
      <img src="./Images/t2W12.png" alt="" width=100% height=100%>
        <h5>FLEX YOUR BEST GAME</h5>
      </div> 
  </div>
          `;

        if (e.path[4].children.length == 1) e.path[3].after(ho8Temp);
      } else {
        if (i == 0 && e.path[5].children.length == 2) {
          e.path[5].children[1].remove();
        } else if (e.path[4].children.length == 2) {
          e.path[4].children[1].remove();
        }
      }
    });
    ho6Temp[i].addEventListener("mouseleave", function (e) {
      if (e.target.textContent == "WATCHES") {
        e.path[4].children[1].addEventListener("mouseleave", function (event) {
          event.path[0].remove();
        });
      }
    });
  }
}
//Comp#3
{
  let ho15Images = [
    "./Images/1900x600.jpg",
    "./Images/1920-X-600.jpg",
    "./Images/1920x600.jpg",
    "./Images/1920x600A.jpg",
    "./Images/1920x600B.jpg",
    "./Images/FT+Girls+Bags+EOSS+2021_1920x600+px.jpg",
  ];
  let ho16Index = 0;
  document.querySelector(".ho14Comp3").style.backgroundImage =
    "url(./Images/1900x600.jpg)";
  document.querySelectorAll(".ho14Comp3>div>div")[
    ho16Index
  ].style.backgroundColor = "red";
  ho16Index = (ho16Index + 1) % ho15Images.length;
  setInterval(function () {
    if (ho16Index == 0) {
      document.querySelectorAll(".ho14Comp3>div>div")[5].style.backgroundColor =
        "white";
      document.querySelector(
        ".ho14Comp3"
      ).style.backgroundImage = `url(${ho15Images[ho16Index]})`;
      document.querySelectorAll(".ho14Comp3>div>div")[
        ho16Index
      ].style.backgroundColor = "red";
      ho16Index = (ho16Index + 1) % ho15Images.length;
    } else {
      document.querySelectorAll(".ho14Comp3>div>div")[
        ho16Index - 1
      ].style.backgroundColor = "white";
      document.querySelector(
        ".ho14Comp3"
      ).style.backgroundImage = `url(${ho15Images[ho16Index]})`;
      document.querySelectorAll(".ho14Comp3>div>div")[
        ho16Index
      ].style.backgroundColor = "red";
      ho16Index = (ho16Index + 1) % ho15Images.length;
    }
  }, 2000);
}
//comp#4
{
  let ho19FlexBox = document.querySelectorAll("#ho19FlexBox>div");
  let ho20EssentialsArr = [
    { img: "./Images/W1.jpg", name: "GIRLS WATCHES" },
    { img: "./Images/W2.jpg", name: "GUYS WATCHES" },
    { img: "./Images/w3.jpg", name: "SMART BAND" },
    { img: "./Images/w4.jpg", name: "TEES WATCHES" },
    { img: "./Images/m1.jpg", name: "FACE MASKS" },
    { img: "./Images/b1.jpg", name: "BAGS" },
    { img: "./Images/e1.jpg", name: "EYEWEAR" },
    { img: "./Images/p1.jpg", name: "PERFUMES" },
  ];
  ho19FlexBox[0].setAttribute("class", "ho19FlexBoxC");
  document.querySelectorAll(".ho21FlexBox>div")[0].style.backgroundColor =
    "red";
  // setAttribute('class','ho21color');
  hoDisplayEssential(ho20EssentialsArr, 0);

  ho19FlexBox[ho19FlexBox.length - 1].addEventListener("click", function () {
    // alert('asd')
    document.querySelectorAll(".ho21FlexBox>div")[0].style.backgroundColor =
      "black";
    document.querySelectorAll(".ho21FlexBox>div")[1].style.backgroundColor =
      "red";
    hoDisplayEssential(ho20EssentialsArr, 2);
    ho19FlexBox[ho19FlexBox.length - 1].setAttribute("class", "ho19FlexBoxC");
    ho19FlexBox[0].removeAttribute("class", "ho19FlexBoxC");
    // console.log(document.querySelectorAll('.ho21FlexBox>div'))
  });

  ho19FlexBox[0].addEventListener("click", function () {
    // alert('asd')
    document.querySelectorAll(".ho21FlexBox>div")[1].style.backgroundColor =
      "black";
    document.querySelectorAll(".ho21FlexBox>div")[0].style.backgroundColor =
      "red";
    hoDisplayEssential(ho20EssentialsArr, 0);
    ho19FlexBox[0].setAttribute("class", "ho19FlexBoxC");
    ho19FlexBox[ho19FlexBox.length - 1].removeAttribute(
      "class",
      "ho19FlexBoxC"
    );
  });

  function hoDisplayEssential(arr, s) {
    for (let i = 1; i < ho19FlexBox.length - 1; i++) {
      // console.log(ho19FlexBox[i].children)
      ho19FlexBox[i].children[0].src = arr[s].img;
      ho19FlexBox[i].children[1].textContent = arr[s].name;
      s++;
    }
  }
}
//comp7
{
  let ho24FlexBox = document.querySelectorAll("#ho24FlexBox>div");

  let ho25EssentialsArr = [
    { img: "./Images/W1.jpg", name: "GIRLS WATCHES" },
    { img: "./Images/W2.jpg", name: "GUYS WATCHES" },
    { img: "./Images/w3.jpg", name: "SMART BAND" },
    { img: "./Images/w4.jpg", name: "TEES WATCHES" },
    { img: "./Images/m1.jpg", name: "FACE MASKS" },
    { img: "./Images/b1.jpg", name: "BAGS" },
    { img: "./Images/e1.jpg", name: "EYEWEAR" },
    { img: "./Images/p1.jpg", name: "PERFUMES" },
  ];

  //random starting point for the trending items index
  let ho25EssentialsArrCounter = Math.floor(
    Math.random() * (fastrackData.length - 1)
  );

  for (let i = 0; i < 8; i++) {
    ho25EssentialsArr[i].img =
      fastrackData[ho25EssentialsArrCounter].pImageArray[0];
    ho25EssentialsArr[i].name = fastrackData[ho25EssentialsArrCounter].pName;
    ho25EssentialsArrCounter =
      (ho25EssentialsArrCounter + 2) % fastrackData.length;
  }

  ho24FlexBox[0].setAttribute("class", "ho24FlexBoxC");
  document.querySelectorAll(".ho21FlexBox>div")[0].style.backgroundColor =
    "red";
  // setAttribute('class','ho21color');
  hoDisplayEssential(ho25EssentialsArr, 0);

  ho24FlexBox[ho24FlexBox.length - 1].addEventListener("click", function () {
    // alert('asd')
    document.querySelectorAll(".ho21FlexBox>div")[0].style.backgroundColor =
      "black";
    document.querySelectorAll(".ho21FlexBox>div")[1].style.backgroundColor =
      "red";
    hoDisplayEssential(ho25EssentialsArr, 2);
    ho24FlexBox[ho24FlexBox.length - 1].setAttribute("class", "ho24FlexBoxC");
    ho24FlexBox[0].removeAttribute("class", "ho24FlexBoxC");
    // console.log(document.querySelectorAll('.ho21FlexBox>div'))
  });

  ho24FlexBox[0].addEventListener("click", function () {
    // alert('asd')
    document.querySelectorAll(".ho21FlexBox>div")[1].style.backgroundColor =
      "black";
    document.querySelectorAll(".ho21FlexBox>div")[0].style.backgroundColor =
      "red";
    hoDisplayEssential(ho25EssentialsArr, 0);
    ho24FlexBox[0].setAttribute("class", "ho24FlexBoxC");
    ho24FlexBox[ho24FlexBox.length - 1].removeAttribute(
      "class",
      "ho24FlexBoxC"
    );
  });

  function hoDisplayEssential(arr, s) {
    for (let i = 1; i < ho24FlexBox.length - 1; i++) {
      // console.log(ho24FlexBox[i].children)
      ho24FlexBox[i].children[0].src = arr[s].img;
      ho24FlexBox[i].children[1].textContent = arr[s].name;
      s++;
    }
  }
}

//comp9
{
  let ho27FlexBox = document.querySelectorAll("#ho27FlexBox>div");
  let ho27EssentialsArr = [
    { img: "./Images/W1.jpg", name: "GIRLS WATCHES" },
    { img: "./Images/W2.jpg", name: "GUYS WATCHES" },
    { img: "./Images/w3.jpg", name: "SMART BAND" },
    { img: "./Images/w4.jpg", name: "TEES WATCHES" },
    { img: "./Images/m1.jpg", name: "FACE MASKS" },
    { img: "./Images/b1.jpg", name: "BAGS" },
    { img: "./Images/e1.jpg", name: "EYEWEAR" },
    { img: "./Images/p1.jpg", name: "PERFUMES" },
  ];

  //random starting point for the trending items index
  let ho27EssentialsArrCounter = Math.floor(
    Math.random() * (fastrackData.length - 1)
  );

  for (let i = 0; i < 8; i++) {
    ho27EssentialsArr[i].img =
      fastrackData[ho27EssentialsArrCounter].pImageArray[0];
    ho27EssentialsArr[i].name = fastrackData[ho27EssentialsArrCounter].pName;
    ho27EssentialsArrCounter =
      (ho27EssentialsArrCounter + 2) % fastrackData.length;
  }

  ho27FlexBox[0].setAttribute("class", "ho27FlexBoxC");
  document.querySelectorAll(".ho21FlexBox>div")[0].style.backgroundColor =
    "red";
  // setAttribute('class','ho21color');
  hoDisplayEssential(ho27EssentialsArr, 0);

  ho27FlexBox[ho27FlexBox.length - 1].addEventListener("click", function () {
    // alert('asd')
    document.querySelectorAll(".ho21FlexBox>div")[0].style.backgroundColor =
      "black";
    document.querySelectorAll(".ho21FlexBox>div")[1].style.backgroundColor =
      "red";
    hoDisplayEssential(ho27EssentialsArr, 2);
    ho27FlexBox[ho27FlexBox.length - 1].setAttribute("class", "ho27FlexBoxC");
    ho27FlexBox[0].removeAttribute("class", "ho27FlexBoxC");
    // console.log(document.querySelectorAll('.ho21FlexBox>div'))
  });

  ho27FlexBox[0].addEventListener("click", function () {
    // alert('asd')
    document.querySelectorAll(".ho21FlexBox>div")[1].style.backgroundColor =
      "black";
    document.querySelectorAll(".ho21FlexBox>div")[0].style.backgroundColor =
      "red";
    hoDisplayEssential(ho27EssentialsArr, 0);
    ho27FlexBox[0].setAttribute("class", "ho27FlexBoxC");
    ho27FlexBox[ho27FlexBox.length - 1].removeAttribute(
      "class",
      "ho27FlexBoxC"
    );
  });

  function hoDisplayEssential(arr, s) {
    for (let i = 1; i < ho27FlexBox.length - 1; i++) {
      // console.log(ho27FlexBox[i].children)
      ho27FlexBox[i].children[0].src = arr[s].img;
      ho27FlexBox[i].children[1].textContent = arr[s].name;
      s++;
    }
  }
}

//comp12
{
  // `${Math.floor(Math.random()*30)}/${Math.floor(Math.random()*12)}/2021`
  let ho34ReviewArr = [
    {
      topic: "Awesome",
      image: "./Images/Comp12_10.jpg",
      comment: "Very good watch",
      name: "suman",
      date: "01/01/21",
    },
    {
      topic: "Suprr",
      image: "./Images/Comp12_9.jpg",
      comment: "Superb built quality and look's premium",
      name: "Prashant",
      date: "01/12/21",
    },
    {
      topic: "best",
      image: "./Images/Comp12_8.jpg",
      comment: "Fastrack has been maintaining this image",
      name: "Ajay",
      date: "03/07/21",
    },
    {
      topic: "Nice",
      image: "./Images/Comp12_7.jpg",
      comment: "Best",
      name: "Punit",
      date: "04/06/21",
    },
    {
      topic: "Astonishing",
      image: "./Images/Comp12_6.jpg",
      comment: "It is soo good and I love it",
      name: "Aman",
      date: "08/10/21",
    },
    {
      topic: "The very Best",
      image: "./Images/Comp12_5.jpg",
      comment: "The very Best",
      name: "Priya",
      date: "25/06/21",
    },
    {
      topic: "Nice",
      image: "./Images/Comp12_4.jpg",
      comment: "Nice",
      name: "Raj",
      date: "09/09/21",
    },
    {
      topic: "Supr!!",
      image: "./Images/Comp12_3.jpg",
      comment: "Super watch",
      name: "Ram",
      date: "13/11/21",
    },
    {
      topic: "Adipoli Sadhanam!!",
      image: "./Images/Comp12_2.jpg",
      comment: "Adipooooli!!😍",
      name: "Sreejith",
      date: "14/04/21",
    },
    {
      topic: "Mass!!",
      image: "./Images/Comp12_1.jpg",
      comment: "Suprr product!!",
      name: "Murugan",
      date: "05/05/21",
    },
  ];

  //setting starting point for the comment items index
  let ho34EssentialsArrCounter = 3;

  for (let i = 0; i < ho34ReviewArr.length; i++) {
    ho34ReviewArr[i].image =
      fastrackData[ho34EssentialsArrCounter].pImageArray[0];
    ho34EssentialsArrCounter =
      (ho34EssentialsArrCounter + 2) % fastrackData.length;
  }
  var ho32Pos = ho34ReviewArr.length - 1;

  ho32PopulateArray(ho34ReviewArr, ho32Pos);

  var ho32CommentsTimer = setInterval(ho32RightClicked, 1000);
  document.querySelector("#ho32CommenTop>div:nth-child(3)>span").textContent =
    ho34ReviewArr.length;

  document
    .getElementById("ho31Comments")
    .addEventListener("mouseover", function () {
      clearInterval(ho32CommentsTimer);
    });
  document
    .getElementById("ho31Comments")
    .addEventListener("mouseleave", function () {
      ho32CommentsTimer = setInterval(ho32RightClicked, 1000);
    });

  // console.log(document.querySelectorAll('#ho33CommenBottom>div'))

  document
    .querySelectorAll("#ho32CommenTop>div:nth-child(4)>span")[0]
    .addEventListener("click", function () {
      // alert('left');
      if (ho32Pos == 0) ho32Pos = ho34ReviewArr.length - 1;
      else ho32Pos = (ho32Pos - 1) % ho34ReviewArr.length;
      ho32PopulateArray(ho34ReviewArr, ho32Pos);
    });
  document
    .querySelectorAll("#ho32CommenTop>div:nth-child(4)>span")[1]
    .addEventListener("click", ho32RightClicked);

  function ho32RightClicked() {
    // alert('right')
    ho32Pos = (ho32Pos + 1) % ho34ReviewArr.length;
    ho32PopulateArray(ho34ReviewArr, ho32Pos);
    // console.log(document.querySelectorAll('#ho33CommenBottom>div'))
  }

  function ho32PopulateArray(arr, pos) {
    // console.log(document.querySelectorAll('#ho33CommenBottom>div'))
    let ho35CommenBottom = document.querySelectorAll("#ho33CommenBottom>div");

    for (let i = 0; i < 3; i++) {
      ho35CommenBottom[i].children[0].children[1].innerHTML =
        "&nbsp;&nbsp;" + arr[pos].date;
      ho35CommenBottom[i].children[1].textContent = arr[pos].topic;
      // .textContent=arr[pos].topic;
      ho35CommenBottom[i].children[2].children[0].src = arr[pos].image;
      ho35CommenBottom[i].children[2].children[0].style.width = "90%";
      ho35CommenBottom[i].children[2].children[0].style.height = "100%";

      // .src=arr[pos].image;
      ho35CommenBottom[i].children[2].children[1].innerHTML = `
        <p>
        &nbsp;&nbsp;${arr[pos].comment}
          <br />
          &nbsp;&nbsp;<span><strong>${arr[pos].name}</strong></span>
        </p>`;
      pos = (pos + 1) % arr.length;
      // ho32Pos=pos;
      // console.log(pos)
    }
  }
}
