const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector("nav ul");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// About Page
// Open Msg Box

function openMsgBox(event) {
  backSide = document.getElementsByClassName("about-us")[0];
  backSide.style.cssText = `opacity:0.369;`;

  function botMsg() {
    bot = document.getElementById("computerMsg");
    bot.style.transition = "all 300ms";
    bot.style.display = "initial";
  }

  botmsgFun = setTimeout(botMsg, 600);
  chatBox = document.getElementsByClassName("chat-container")[0];
  chatBox.style.cssText = `display:flex; flex-direction: column;`;
  nameOfPerson = event.target.parentElement.children[1];
  photoOfPerson = event.target.parentElement.children[0].getAttribute("src");
  boxOfMsg = document.getElementsByClassName("chat-box")[0];
  newEle = document.createElement("span");
  newEle.style.cssText = `font-size: small; color:grey; margin : 10px auto; width:100%; display:flex; justify-content:center; align-items:center;`;
  newEle.innerHTML = `Send your message to Mr . <b style="color:blue; font-size:medium; font-weight:bold;">${nameOfPerson.innerText}</b><img src="${photoOfPerson}" style="height:45px; width:45px; object-fit:cover; border:1px solid silver; margin-left:10px; border-radius:100%; padding:1px;">`;
  boxOfMsg.prepend(newEle);
}

// Close Box
function closeMsgBox() {
  chatBox = document.getElementsByClassName("chat-container")[0];
  chatBox.style.cssText = `display:none`;
  window.location.reload();
}

// Send Msg
function sendMSG() {
  msg = document.getElementById("typemsg");

  if (msg.value == "") {
    alert("Enter Message. . .");
  } else {
    newEle = document.createElement("div");
    newEle.classList.add("message", "bot-message");
    newEle.innerHTML = `
    <div class="message-content">
      <p>${msg.value}</p>
    </div>
  `;

    msgBox = document.getElementsByClassName("messages")[0];
    msgBox.append(newEle);
    msg.value = "";
  }
}
// Feed Back Page

function feedbackDelete(element) {
  deleteFeedBack = element.parentElement;
  deleteFeedBack.style.cssText = `display:none;`;

  // noDataFBPage = document.getElementsByClassName('feedback-list')[0];

  //  console.log(noDataFBPage.childElementCount);

  // if(noDataFBPage.childElementCount == 0)
  //   {

  //     newEle = document.createElement('div');
  //     newEle.style.cssText =`height:100%; width:100%; align-content:center; font-size:36px; color:red;`;
  //     newEle.innerHTML =`<span>No Data Found</span>`;

  //     noDataFBPage.append(newEle);

  //   }
}

function feedbackLove(element) {
  loveFeedBack = element.parentElement;
  loveFeedBack.style.cssText = `background-color:black;`;
  loveFeedBack.children[0].style.cssText = `color:white;`;
  loveFeedBack.children[1].style.cssText = `color:silver;`;
  element.style.cssText = `background-color:red; border-radius:50%; color:white;`;
}

// Cutomer View

function viewDetailsCutomers(event) {
  userBOx = document.getElementsByClassName("users")[0];
  userBOx.style.cssText = `display:none;`;

  custPhoto =
    event.target.parentElement.parentElement.children[1].getAttribute("src");
  custName = event.target.parentElement.parentElement.children[2].innerText;
  custCity = event.target.parentElement.parentElement.children[3].innerText;
  carName =
    event.target.parentElement.parentElement.children[0].children[0].innerText;
  carNumber =
    event.target.parentElement.parentElement.children[0].children[1].innerText;
  service =
    event.target.parentElement.parentElement.children[0].children[2].innerText;
  visit =
    event.target.parentElement.parentElement.children[0].children[3].innerText;
  custAddress =
    event.target.parentElement.parentElement.children[0].children[4].innerText;
  console.log(carName, carNumber, service, visit, custAddress);

  newEle = document.createElement("div");
  newEle.innerHTML = `
       <div class="card">
       
      <button class="closecardbtn" onclick="closeCardBox()">
        <i class="fa-solid fa-xmark"></i>
      </button>
      <div class="card-header">
          <img src="${custPhoto}" alt="Profile Picture">
      </div>
      <div class="card-body">
          <h2>${custName}</h2>
          <p class="title">${custCity}</p>
          <div class="customercarddetails">
                <span><span class="cardtitle">Car Name</span><span><b>${carName}</b></span></span>
                <span><span class="cardtitle">Car Number</span><span><b>${carNumber}</b></span></span>                
                <span><span class="cardtitle">Car Service</span><span><b>${service}</b></span></span>
                <span><span class="cardtitle">Visit Garage</span><span><b>${visit}</b></span></span>
                <span><span class="cardtitle">Address</span><span><b>${custAddress}</b></span></span>

              </div>
              
          <a href="mailto:john.doe@example.com" class="email">Contact</a>
      </div>
  </div>

   `;

  displayCard = document.getElementsByClassName("customerDetailsView")[0];
  displayCard.style.cssText = `display:initial;`;

  displayCard.replaceChildren(newEle);
  displayCard.append(newEle);
}
function closeCardBox() {
  userBOx = document.getElementsByClassName("users")[0];
  userBOx.style.cssText = `display:inital;`;
  displayCard = document.getElementsByClassName("customerDetailsView")[0];
  displayCard.style.cssText = `display:none;`;
}

// Delete Customer
function customerDelete(event) {
  event.target.parentElement.parentElement.style.cssText = `display:none;`;
}

// Add Customer
function addCustomer() {
  // userBOx = document.getElementsByClassName("users")[0];
  // userBOx.style.cssText = `display:none;`;

  form = document.getElementsByClassName("customerform")[0];
  form.style.cssText = `
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;`;
}

customerAddBtn = document.getElementById("customerAddBtn");

customerAddBtn.addEventListener("click", (e) => {
  e.preventDefault();
  userBox = document.getElementsByClassName("users")[0];
  cName = document.getElementsByName("customerName")[0];
  cCity = document.getElementsByName("customerCity")[0];
  cAddress = document.getElementsByName("customerAddress")[0];
  cCarName = document.getElementsByName("customerCarName")[0];
  cCarNumber = document.getElementsByName("customerCarNumber")[0];
  cCustomerService = document.getElementsByName("customerService")[0];

  newEle = document.createElement("div");
  newEle.classList.add("user-card");
  newEle.style.cssText = `border:1px solid silver; box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;`;

  newEle.innerHTML = `
     
  
              <div class="details-customers">

                <span>${cCarName.value}</span>
                <span>${cCarNumber.value}</span>
                <span>${cCustomerService.value}</span>
                <span>1</span>
                <span>${cAddress.value}</span>
              </div>
              
              <img
                src="https://elasticbeanstalk-us-east-1-911267631614.s3.amazonaws.com/imagenes/dts/silueta-dirigente.png?pfdrid_c=true"
                alt="User 1"
                class="user-avatar"
              />
              <h3>${cName.value}</h3>
              <p>${cCity.value}</p>
              <div class="user-actions">
                <button class="action-btn" onclick="viewDetailsCutomers(event)">
                  View
                </button>
                <button class="action-btn" onclick="customerDelete(event)">
                  Delete
                </button>
              </div>
     
           
    `;
  userBox.prepend(newEle);
  form = document.getElementsByClassName("customerform")[0];
  form.style.cssText = `display:none;`;
});

function closeCustomerForm() {
  form = document.getElementsByClassName("customerform")[0];
  form.style.cssText = `display:none;`;
}

// Feedbacknoti

 
function updateFdNoti()
{
  
feedbackNoti =  document.getElementById('feedbacknoti');
fbList =  document.getElementById('fblist');
console.log(fbList.childElementCount);
feedbackNoti.innerText = fbList.childElementCount;


}