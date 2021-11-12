

  

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
      window.location.href = 'homePage.html';
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
                  <img src="./Images/t2W1.PNG" alt="" width=35% height=35%>
                  <div>Him</div>
                </div>
              </td>
              <td>
                <div>
                <img src="./Images/t2W2.PNG" alt="" width=35% height=35%>
                  <div>Casual</div>
                </div>
              </td>
              <td>
                <div>
                <img src="./Images/t2W3.PNG" alt="" width=35% height=35%>
                  <div>Coca Cola Edition</div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div>
                <img src="./Images/t2W4.PNG" alt="" width=35% height=35%>
                  <div>Her</div>
                </div>              
              </td>
              <td>
                <div>
                <img src="./Images/t2W5.PNG" alt="" width=35% height=35%>
                  <div>Fashion</div>
                </div>
              </td>
              <td>
                <div>
                <img src="./Images/t2W6.PNG" alt="" width=35% height=35%>
                  <div>Avengers</div>                
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div>
                <img src="./Images/t2W7.PNG" alt="" width=35% height=35%>
                  <div>Them</div>
                </div>
              </td>
              <td>
                <div>
                <img src="./Images/t2W8.PNG" alt="" width=35% height=35%>
                  <div>Sporty</div>
                </div>
              </td>
              <td>
                <div>
                <img src="./Images/t2W9.PNG" alt="" width=35% height=35%>
                  <div>Game Of Thrones</div>
                </div>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <div>
                <img src="./Images/t2W10.PNG" alt="" width=35% height=35%>
                  <div>Tees</div>
                </div>
              </td>
              <td>
                <div>
                <img src="./Images/t2W11.PNG" alt="" width=35% height=35%>
                  <div>Sunburn</div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>     
        <button>View All</button>                  
      </div>
      <div id="ho9Right">
      <img src="./Images/t2W12.PNG" alt="" width=100% height=100%>
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
          e.path[4].children[1].addEventListener(
            "mouseleave",
            function (event) {
              event.path[0].remove();
            }
          );
        }
      });
    }
  }
  

  //productListing script

  {

    let fastrackData=JSON.parse(localStorage.getItem('fastrackData'))||[];
    var plComp3atempArr=[],filterApplied=0;
    let plComp3b=document.getElementById('plComp3b');
    // console.log(fastrackData)

    // VVVVVVVVVVVVVV Change as per filter VVVVVVVVVVVVVV
     document.querySelectorAll('#plComp2a span')[0].textContent=fastrackData.length+' ';    

    let plComp2bDivs= document.querySelectorAll('#plComp2b>div');
    let priceClicked=0,discClicked=0,rateClicked=0;
    //price sorting

    plComp2bDivs[0].addEventListener('click',function(){
      if(priceClicked==0){
        priceClicked = 1;        
        // plComp2bDivs[0].children[0].innerHTML = '<i class="fas fa-chevron-up"></i>'
          
        //sort in asc order
        let tempArr=fastrackData.map(function(el){
          return el;
        })    
        

        if(plComp3atempArr.length!=0 || filterApplied==1) tempArr=plComp3atempArr.map(function(el){
          return el;
        });

        tempArr=tempArr.sort(function(a,b){
          return a.pMRP-b.pMRP;
        })

        pldisplayItems(tempArr);
        console.log(tempArr)
        
        
      }else{
        priceClicked=0;
        // plComp2bDivs[0].children[0].innerHTML='<i class="fas fa-chevron-down"></i>'
        //sort in desc order
        let tempArr=fastrackData.map(function(el){
          return el;
        })       

        if(plComp3atempArr.length!=0 || filterApplied==1) tempArr=plComp3atempArr.map(function(el){
          return el;
        });

        tempArr=tempArr.sort(function(a,b){
          return b.pMRP-a.pMRP;
        })

        pldisplayItems(tempArr);
        console.log(tempArr)
      }
    })

    //discount sorting

    plComp2bDivs[1].addEventListener('click',function(){      
      if(discClicked==0){
        discClicked=1;
        // plComp2bDivs[1].children[0].innerHTML='<i class="fas fa-chevron-up"></i>'    
                //sort in asc order
                let tempArr=fastrackData.map(function(el){
                  return el;
                })                

                if(plComp3atempArr.length!=0 || filterApplied==1) tempArr=plComp3atempArr.map(function(el){
                  return el;
                });

                tempArr=tempArr.sort(function(a,b){
                  return a.pOffer-b.pOffer;
                })

                console.log(tempArr)
                pldisplayItems(tempArr);
                
    
      }else{
        discClicked=0;
        // plComp2bDivs[1].children[0].innerHTML='<i class="fas fa-chevron-down"></i>'
                //sort in desc order
                let tempArr=fastrackData.map(function(el){
                  return el;
                })
                

                if(plComp3atempArr.length!=0 || filterApplied==1) tempArr=plComp3atempArr.map(function(el){
                  return el;
                });

                tempArr=tempArr.sort(function(a,b){
                  return b.pOffer-a.pOffer;
                })

                pldisplayItems(tempArr);
                console.log(tempArr)
                

      }
    })

    //rating sorting
    {
      // plComp2bDivs[2].addEventListener('click',function(){
      //   if(rateClicked==0){
      //     rateClicked=1;
      //     plComp2bDivs[2].children[0].innerHTML='<i class="fas fa-chevron-up"></i>'  
      //             //sort in asc order
      //             let tempArr=fastrackData.map(function(el){
      //               return el;
      //             })
      //             tempArr=tempArr.sort(function(a,b){
      //               return b.pMRP-a.pMRP;
      //             })
      //             pldisplayItems(tempArr);
      //             console.log(tempArr)
                  
        
      //   }else{
      //     rateClicked=0;
      //     plComp2bDivs[2].children[0].innerHTML='<i class="fas fa-chevron-down"></i>'
      //             //sort in desc order
      //             let tempArr=fastrackData.map(function(el){
      //             return el;
      //           })
      //           console.log(tempArr)
                  
  
      //   }
      // })

    }


// comp 3b
    pldisplayItems(fastrackData);

    
    
    function pldisplayItems(arr){
      plComp3b.innerHTML=null;
      let plComp3bFlexBox=document.createElement('div');
      plComp3bFlexBox.setAttribute('class','plComp3bFlexBox');
      for(let i=0;i<arr.length;i++){
        // console.log(prod)
        let plProdCard=document.createElement('div');
        let plCardImage=document.createElement('img');
        plCardImage.src=arr[i].pImageArray[0];
        plCardImage.setAttribute('class','plCardImage')
        let plCardName=document.createElement('h4');
        plCardName.textContent=arr[i].pName;
        let plCardPrice=document.createElement('p');        
        if(arr[i].pOffer){
          plCardPrice.innerHTML=`<i class="fas fa-rupee-sign"></i>${arr[i].pMRP*(1-arr[i].pOffer/100)} <span><i class="fas fa-rupee-sign"></i>${arr[i].pMRP}</span>  <span>(${arr[i].pOffer}% Off)</span> `;          

          plCardPrice.children[1].style.textDecorationLine='line-through';          
          plCardPrice.children[1].style.margin='0px 10px';          
          plCardPrice.children[2].style.color='red';
          plCardPrice.children[2].style.fontWeight='600';
        }else{
          plCardPrice.textContent=arr[i].pMRP;
        }

        // let plProdCardArea=document.createElement('div');
        let plCardBtn=document.createElement('button');
        plCardBtn.setAttribute('class', 'plCardBtn');
        
        plCardBtn.textContent='Quick View';
        plCardBtn.addEventListener('click',function(e){
          let plCardBtnView=document.createElement('div');
          plCardBtnView.setAttribute('class','plCardBtnView');                    

            plCardBtnView.innerHTML=
            `<div id="proComp2" class='bor'>
              <div id="proComp2a" class='bor'>
                <div id="proComp2a1" class='bor'>
                  <div>
                    <i class=" chevronIcons fa-2x fas fa-chevron-left"></i></div>
                  <div>              
                    <img width='100%' height='100%' src="https://via.placeholder.com/200" alt="">
                  </div>
                  <div>
                    <i class="chevronIcons fa-2x fas fa-chevron-right"></i></div>
                </div>
                <div id="proComp2a2" class='bor'>
                  <div class='bor'>
                    <img width='100%' height='100%' src="https://via.placeholder.com/200" alt="">
                  </div>
                  <div class='bor'>
                    <img width='100%' height='100%' src="https://via.placeholder.com/200" alt="">
                  </div>
                  <div class='bor'>
                    <img width='100%' height='100%' src="https://via.placeholder.com/200" alt="">
                  </div>
                  <div class='bor'>
                    <img width='100%' height='100%' src="https://via.placeholder.com/200" alt="">
                  </div>
                </div>
              </div>
              <div id="proComp2b" class='bor'>
                <div id="proComp2b1" class='bor'>
                  <h2 class='bor'>Product Name</h2>                           
                </div>
                <h4 id="proComp2b2" class='bor'>
                  Product Code
                </h4>
                <div id="proComp2b3" class='bor'>
                  <span>0</span> <span>0</span> <span>(<span>0</span>% Off)</span>
                </div>
                <div id="proComp2b4" class='bor'>
                  Product Text
                </div>
                <div id="proComp2b5" class='bor'>        
                  <div class='bor'>
                    <div class='bor'>-</div>
                    <div class='bor'>1</div>
                    <div class='bor'>+</div>
                  </div>
                </div>   
                <div id="proComp2b6" class='bor'>
                  <div>In Stock</div>        
                  <div>Add to Cart</div>
                  <p>Please close this window before opening another Quick View window</p>
                </div>      
              </div>
              <div id="proComp2c" class='bor'>
                <i class="fas fa-times"></i>
              </div>
            </div> 
          `          
            e.path[2].after(plCardBtnView)
            // console.log(e.path[3].children[1])
            // console.log(arr[i])
            plPopulateViewCard(plCardBtnView,arr[i])
          })
        plProdCard.append(plCardImage, plCardName, plCardPrice, plCardBtn);
        //button should appear and dispppear on hover
        plProdCard.addEventListener('mouseover', function (e) {
          console.log(e.target.children[3].style.display = 'block');                    
        })
        plProdCard.addEventListener('mouseleave', function (e) {
          console.log(e.target.children[3].style.display = 'none');                    
        })


        // card creation done
        plComp3bFlexBox.append(plProdCard);        
        for (let i = 0; i < 3; i++){
          plProdCard.children[i].addEventListener('click', function () {
            console.log(arr[i])
            localStorage.setItem('currItem', JSON.stringify(arr[i]));
            window.location.href = 'product.html';
          })
        }
        
        
        if(plComp3bFlexBox.children.length==3 || i==arr.length-1){
          plComp3b.append(plComp3bFlexBox);
          plComp3bFlexBox=document.createElement('div');
          plComp3bFlexBox.setAttribute('class','plComp3bFlexBox');          
        }

      }      
    }


    function plPopulateViewCard(currEl,item){
      let product=item;
  // console.log(product) 

  // ****all data filled***

  let proComp2a1MainImage=document.querySelector('#proComp2a1>div:nth-child(2)>img');
  let proComp2a2ImageArr=document.querySelectorAll('#proComp2a2>div>img');
  // console.log(proComp2a1MainImage,proComp2a2ImageArr)
  proComp2a1MainImage.src=product.pImageArray[0];
  for(let i=0;i<proComp2a2ImageArr.length;i++){
    proComp2a2ImageArr[i].src=product.pImageArray[i];
  }
  document.querySelector('#proComp2b1>h2').textContent=product.pName;
  document.querySelector('#proComp2b1>h2').style.fontWeight='800'
  document.querySelector('#proComp2b2').textContent=product.pCode;
  document.querySelector('#proComp2b1').style.fontWeight='800'
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
  
  // ****all data filled***

  let proComp2a1ImgCounter=0;

  document.querySelectorAll('#proComp2a1>div>i')[0].addEventListener('click',function(){
    document.querySelectorAll('#proComp2a2>div>img')[proComp2a1ImgCounter].removeAttribute('class','proComp2a2Circles')
    if(proComp2a1ImgCounter==0)proComp2a1ImgCounter=3;
    else
    proComp2a1ImgCounter--;
    document.querySelectorAll('#proComp2a1>div')[1].children[0].src=document.querySelectorAll('#proComp2a2>div')[proComp2a1ImgCounter].children[0].src
    document.querySelectorAll('#proComp2a2>div>img')[proComp2a1ImgCounter].setAttribute('class','proComp2a2Circles')
    
  })
  document.querySelectorAll('#proComp2a1>div>i')[1].addEventListener('click',function(){ 
    document.querySelectorAll('#proComp2a2>div>img')[proComp2a1ImgCounter].removeAttribute('class','proComp2a2Circles')
    proComp2a1ImgCounter=(proComp2a1ImgCounter+1)%4;
    document.querySelectorAll('#proComp2a1>div')[1].children[0].src=document.querySelectorAll('#proComp2a2>div')[proComp2a1ImgCounter].children[0].src
    document.querySelectorAll('#proComp2a2>div>img')[proComp2a1ImgCounter].setAttribute('class','proComp2a2Circles')
    
  })

  document.querySelectorAll('#proComp2b5>div>div')[0].addEventListener('click',function(){
    let temp=Number(document.querySelectorAll('#proComp2b5>div>div')[1].textContent);    
    if(temp>1)
    document.querySelectorAll('#proComp2b5>div>div')[1].textContent=temp-1;
  })
  document.querySelectorAll('#proComp2b5>div>div')[2].addEventListener('click',function(){
    let temp=Number(document.querySelectorAll('#proComp2b5>div>div')[1].textContent);    
    document.querySelectorAll('#proComp2b5>div>div')[1].textContent=temp+1;
  })


  document.querySelector('#proComp2b6>div:nth-child(2)').addEventListener('click',function(){
    
    let tempQty=document.querySelectorAll('#proComp2b5>div>div')[1].textContent;
    let tempProd=product;
    let tempObj={
      prod:tempProd,
      qty:tempQty
    }    
    let tempArr = JSON.parse(localStorage.getItem('cartArr'))||[];    
    tempArr.push(tempObj);
    // console.log(tempArr)
    localStorage.setItem('cartArr', JSON.stringify(tempArr));
    window.location.reload();
  })

  document.getElementById('proComp2c').addEventListener('click',function(){
    // alert('Time to go!')
    currEl.remove();
  })


    }

//comp 3a
{
  let plComp3aOptions= document.querySelectorAll('#plComp3a>.plComp3afilter')
  console.log(plComp3aOptions[0].children)



  plComp3aOptions[0].children[1].addEventListener('click',function(){
    window.location.reload();
  })

  for(let i=1;i<plComp3aOptions.length;i++){
    plComp3aOptions[i].children[1].addEventListener('click',function(){     

      if(plComp3aOptions[i].children[1].innerHTML=='<i class="fas fa-minus" aria-hidden="true"></i>')
      {
        // alert('close')
        plComp3aOptions[i].children[1].innerHTML='<i class="fas fa-plus" aria-hidden="true"></i>'
        plComp3aOptions[i].nextElementSibling.style.display='none'

      }
      else if(plComp3aOptions[i].children[1].innerHTML=='<i class="fas fa-plus" aria-hidden="true"></i>'){
        // alert('open')
        plComp3aOptions[i].children[1].innerHTML='<i class="fas fa-minus" aria-hidden="true"></i>';


        if(i==3)                    
        plComp3aOptions[i].nextElementSibling.style.display='flex'
        else
        plComp3aOptions[i].nextElementSibling.style.display='block'
      }

                
  })
    
    
  }
  

  // implementing filters

  let plComp3a2TextAreaFilters= document.querySelectorAll('#plComp3a2TextArea table input');
  for(let i=0;i<plComp3a2TextAreaFilters.length;i++){
    plComp3a2TextAreaFilters[i].addEventListener('click',function(e){
      // this loop 
      for(let j=0;j<plComp3a2TextAreaFilters.length;j++){
        if(j!=i)
        plComp3a2TextAreaFilters[j].checked=false;
      }
      //ensures only one radio is checked at one time
      // console.log(e.path[2].children[1].textContent)
      console.log(e.target.value)

      if(e.target.value=='1500'){
        filterApplied=1;
        plComp3atempArr=fastrackData.filter(function(el){
          return el.pMRP<1500;
        })
        console.log(plComp3atempArr)
        document.querySelectorAll('#plComp2a span')[0].textContent=plComp3atempArr.length+' ';    
        pldisplayItems(plComp3atempArr);

      }else if(e.target.value=='1500-2000'){
        filterApplied=1;
        plComp3atempArr=fastrackData.filter(function(el){
          return (el.pMRP>1500 && el.pMRP<2000);
        })
        console.log(plComp3atempArr)
        document.querySelectorAll('#plComp2a span')[0].textContent=plComp3atempArr.length+' ';    
        pldisplayItems(plComp3atempArr);

      }else if(e.target.value=='2000'){
        filterApplied=1;

        plComp3atempArr=fastrackData.filter(function(el){
          return el.pMRP>2000;
        })
        console.log(plComp3atempArr)
        document.querySelectorAll('#plComp2a span')[0].textContent=plComp3atempArr.length+' ';    
        pldisplayItems(plComp3atempArr);

      }else if(e.target.value=='M' || e.target.value=='W'){
        filterApplied=1;

        plComp3atempArr=fastrackData.filter(function(el){
          return el.pGender==e.target.value;
        })
        console.log(plComp3atempArr)
        document.querySelectorAll('#plComp2a span')[0].textContent=plComp3atempArr.length+' ';    
        pldisplayItems(plComp3atempArr);

      }else if(e.target.value==10||e.target.value==15||e.target.value==20){
        filterApplied=1;

        plComp3atempArr=fastrackData.filter(function(el){
          return el.pOffer==e.target.value;
        })
        console.log(plComp3atempArr)
        document.querySelectorAll('#plComp2a span')[0].textContent=plComp3atempArr.length+' ';    
        pldisplayItems(plComp3atempArr);

      }else{
        filterApplied=1;
        plComp3atempArr=fastrackData.filter(function(el){
          return el.pColor==e.target.value;
        })
        console.log(plComp3atempArr)
        document.querySelectorAll('#plComp2a span')[0].textContent=plComp3atempArr.length+' ';    
        pldisplayItems(plComp3atempArr);

      }

      
      
      
      
      

    })    
  }


}

  }
  

  
