

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
              alert("Goal:To change all the prices to the other currency");
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
          document
            .getElementsByClassName("ho3BlackBox")[0]
            .children[0].remove();
          ho5clicked = (ho5clicked + 1) % 2;
        }
      });
  
      currUser = JSON.parse(localStorage.getItem('currUser'));  
      if (currUser) {
        document
          .querySelector("#ho2TopBar>ul>li:nth-child(3)").innerHTML = currUser.si3firstName + '&nbsp;&nbsp;&nbsp;<span>LOGOUT</span>';
        
          document
          .querySelector("#ho2TopBar>ul>li:nth-child(3)").children[0].addEventListener('click', function () {
            localStorage.removeItem('currUser');
            window.location.reload();      
          })
        
      } else {
        document
          .querySelector("#ho2TopBar>ul>li:nth-child(3)").innerHTML = 'LOGIN';
      }
      
      if (!currUser) {
        document
          .querySelector("#ho2TopBar>ul>li:nth-child(3)")
          .addEventListener("click", function () {
            // alert("Welcome to Login page!");
            window.location.href = 'login.html';
          });
      }
  
  
    document
      .querySelector("#ho2TopBar>ul>li:nth-child(4)")
      .addEventListener("click", function () {
        alert("Welcome to WishList page!");
      });
        cartArr = JSON.parse(localStorage.getItem('cartArr'));
        if (cartArr) {
          document
            .querySelector("#ho2TopBar>ul>li:nth-child(6)").children[0].textContent = cartArr.reduce(function (acc, el) {
              return acc + Number(el.qty);
            },0);
        } else {
          document
          .querySelector("#ho2TopBar>ul>li:nth-child(6)").children[0].textContent=0    
        }
    document
      .querySelector("#ho2TopBar>ul>li:nth-child(6)")
      .addEventListener("click", function () {
        // alert("Welcome to cart page!");
        window.location.href='cart.html'
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
      window.location.href='productListing.html'
    });
    ho6Temp[2].addEventListener("click", function () {
      alert("smart clicked");
    });
    ho6Temp[3].addEventListener("click", function () {
      alert("eyewear clicked");
    });
    ho6Temp[4].addEventListener("click", function () {
      // alert("image clicked");
      window.location.href = 'index.html';
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

  //   for (let i = 0; i < ho6Temp.length; i++) {
  //     ho6Temp[i].addEventListener("mouseover", function (e) {
  //       if (e.target.textContent == "WATCHES") {
  //         let ho8Temp = document.createElement("div");
  //         ho8Temp.setAttribute("class", "ho8Temp");
  //         ho8Temp.innerHTML = `
  //         <div id='ho10Temp'>
  //     <div id="ho9Left">
  //       <table>
  //         <thead>
  //           <tr>
  //             <th>Shop For</th>
  //             <th>Shop By Style</th>
  //             <th>Shop Collectibles</th>
  //           </tr>
  //         </thead>
  //         <tbody>
  //           <tr>
  //             <td>              
  //               <div>
  //                 <img src="./Images/t2W1.PNG" alt="" width=35% height=35%>
  //                 <div>Him</div>
  //               </div>
  //             </td>
  //             <td>
  //               <div>
  //               <img src="./Images/t2W2.PNG" alt="" width=35% height=35%>
  //                 <div>Casual</div>
  //               </div>
  //             </td>
  //             <td>
  //               <div>
  //               <img src="./Images/t2W3.PNG" alt="" width=35% height=35%>
  //                 <div>Coca Cola Edition</div>
  //               </div>
  //             </td>
  //           </tr>
  //           <tr>
  //             <td>
  //               <div>
  //               <img src="./Images/t2W4.PNG" alt="" width=35% height=35%>
  //                 <div>Her</div>
  //               </div>              
  //             </td>
  //             <td>
  //               <div>
  //               <img src="./Images/t2W5.PNG" alt="" width=35% height=35%>
  //                 <div>Fashion</div>
  //               </div>
  //             </td>
  //             <td>
  //               <div>
  //               <img src="./Images/t2W6.PNG" alt="" width=35% height=35%>
  //                 <div>Avengers</div>                
  //               </div>
  //             </td>
  //           </tr>
  //           <tr>
  //             <td>
  //               <div>
  //               <img src="./Images/t2W7.PNG" alt="" width=35% height=35%>
  //                 <div>Them</div>
  //               </div>
  //             </td>
  //             <td>
  //               <div>
  //               <img src="./Images/t2W8.PNG" alt="" width=35% height=35%>
  //                 <div>Sporty</div>
  //               </div>
  //             </td>
  //             <td>
  //               <div>
  //               <img src="./Images/t2W9.PNG" alt="" width=35% height=35%>
  //                 <div>Game Of Thrones</div>
  //               </div>
  //             </td>
  //           </tr>
  //           <tr>
  //             <td></td>
  //             <td>
  //               <div>
  //               <img src="./Images/t2W10.PNG" alt="" width=35% height=35%>
  //                 <div>Tees</div>
  //               </div>
  //             </td>
  //             <td>
  //               <div>
  //               <img src="./Images/t2W11.PNG" alt="" width=35% height=35%>
  //                 <div>Sunburn</div>
  //               </div>
  //             </td>
  //           </tr>
  //         </tbody>
  //       </table>     
  //       <button>View All</button>                  
  //     </div>
  //     <div id="ho9Right">
  //     <img src="./Images/t2W12.PNG" alt="" width=100% height=100%>
  //       <h5>FLEX YOUR BEST GAME</h5>
  //     </div> 
  // </div>
  //         `;
  //         if (e.path[4].children.length == 1) e.path[3].after(ho8Temp);
  //       } else {
  //         if (i == 0 && e.path[5].children.length == 2) {
  //           e.path[5].children[1].remove();
  //         } else if (e.path[4].children.length == 2) {
  //           e.path[4].children[1].remove();
  //         }
  //       }
  //     });
  //     ho6Temp[i].addEventListener("mouseleave", function (e) {
  //       if (e.target.textContent == "WATCHES") {
  //         e.path[4].children[1].addEventListener(
  //           "mouseleave",
  //           function (event) {
  //             event.path[0].remove();
  //           }
  //         );
  //       }
  //     });
  //   }
  }
  
  //product functionality
  {
    let product=JSON.parse(localStorage.getItem('currItem'));
    // console.log(product)
    let proComp2a1ImgCounter=0;
    let proComp2a1Left=document.querySelectorAll('#proComp2a1>div>i')[0]
    let proComp2a1Right=document.querySelectorAll('#proComp2a1>div>i')[1]
    let proComp2a1MainImage=document.querySelector('#proComp2a1>div:nth-child(2)>img');
    let proComp2a2Images=document.querySelectorAll('#proComp2a2>div>img')

    for(let i=0;i<proComp2a2Images.length;i++){
      proComp2a2Images[i].src=product.pImageArray[i];
      proComp2a2Images[i].setAttribute('class','proComp2a2Images')
    }

    proComp2a1MainImage.src=product.pImageArray[0];
    //on clicking on left button
    proComp2a1Left.addEventListener('click',function(){
      proComp2a2Images[proComp2a1ImgCounter].style.border='none';
      if(proComp2a1ImgCounter==0)proComp2a1ImgCounter=3;
      else
      proComp2a1ImgCounter--;
      proComp2a1MainImage.src=product.pImageArray[proComp2a1ImgCounter];
      proComp2a2Images[proComp2a1ImgCounter].style.border='1px solid black';    
    })
    //on clicking on right button
    proComp2a1Right.addEventListener('click',function(){
      proComp2a2Images[proComp2a1ImgCounter].style.border='none';
      proComp2a1ImgCounter=(proComp2a1ImgCounter+1)%4;
      proComp2a1MainImage.src=product.pImageArray[proComp2a1ImgCounter];
      proComp2a2Images[proComp2a1ImgCounter].style.border='1px solid black';    
      
    })

    // console.log(document.querySelectorAll('#proComp2b3>h2'))


    document.querySelectorAll('#proComp2b1>div')[0].children[0].textContent=product.pName;
    document.querySelectorAll('#proComp2b1>div')[0].children[0].style.fontWeight='800'
    document.querySelector('#proComp2b2>h3').textContent=product.pCode;

    document.querySelectorAll('#proComp2b3>span')[0].innerHTML='<i class="fas fa-rupee-sign"></i>'+product.pMRP;
    document.querySelectorAll('#proComp2b3>span')[0].style.fontSize='25px'
    document.querySelectorAll('#proComp2b3>span')[0].style.fontWeight='600'
    document.querySelectorAll('#proComp2b3>span')[0].style.marginRight='10px'
    document.querySelectorAll('#proComp2b3>span')[1].innerHTML='<i class="fas fa-rupee-sign"></i>'+product.pMRP*(1-product.pOffer/100);
    document.querySelectorAll('#proComp2b3>span')[1].style.textDecorationLine='line-through'
    document.querySelectorAll('#proComp2b3>span')[1].style.color='grey';
    document.querySelectorAll('#proComp2b3>span')[2].children[0].innerHTML='<i class="fas fa-rupee-sign"></i>'+product.pOffer;
    document.querySelectorAll('#proComp2b3>span')[2].style.color='red'
    document.querySelector('#proComp2b4').textContent=product.pText;
// data filled


//implementing the quantity buttons
document.querySelectorAll('#proComp2b5>div>div')[0].addEventListener('click',function(){
    let temp=Number(document.querySelectorAll('#proComp2b5>div>div')[1].textContent);    
    if(temp>1)
    document.querySelectorAll('#proComp2b5>div>div')[1].textContent=temp-1;
  })
  document.querySelectorAll('#proComp2b5>div>div')[2].addEventListener('click',function(){
    let temp=Number(document.querySelectorAll('#proComp2b5>div>div')[1].textContent);    
    document.querySelectorAll('#proComp2b5>div>div')[1].textContent=temp+1;
  })

  //implementing Add to cart
  document.querySelector('#proComp2b6>div:nth-child(2)>div:nth-child(1)').addEventListener('click',function(){
    
    let tempQty=document.querySelectorAll('#proComp2b5>div>div')[1].textContent;
    let tempProd=product;
    let tempObj={
      prod:tempProd,
      qty:tempQty
    }    
    let tempArr = JSON.parse(localStorage.getItem('cartArr')) || [];
    tempArr.push(tempObj);
    // console.log(tempArr)
    localStorage.setItem('cartArr', JSON.stringify(tempArr));
    window.location.reload();
  })

  }