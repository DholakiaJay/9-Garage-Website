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
    <div class="message-content" style="margin-top:10px;">
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

  console.log(event.target.parentElement.parentElement.parentElement.children);

  custPhoto =
    event.target.parentElement.parentElement.parentElement.children[1].getAttribute(
      "src"
    );

  custName =
    event.target.parentElement.parentElement.parentElement.children[2]
      .innerText;
  custCity =
    event.target.parentElement.parentElement.parentElement.children[3]
      .innerText;
  carName =
    event.target.parentElement.parentElement.parentElement.children[0]
      .children[0].innerText;
  carNumber =
    event.target.parentElement.parentElement.parentElement.children[0]
      .children[1].innerText;
  service =
    event.target.parentElement.parentElement.parentElement.children[0]
      .children[2].innerText;
  visit =
    event.target.parentElement.parentElement.parentElement.children[0]
      .children[3].innerText;
  custAddress =
    event.target.parentElement.parentElement.parentElement.children[0]
      .children[4].innerText;

  newEle = document.createElement("div");
  newEle.classList.add("card");
  newEle.innerHTML = `
       
       
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
              
          <a href="#" class="email">Contact</a>
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
  customerBoxForDelete = event.target.parentElement.parentElement.parentElement;
  customerBoxForDelete.style.cssText = `display:none;`;
  console.log(customerBoxForDelete);
}

// Add Customer
function addCustomer() {
  // userBOx = document.getElementsByClassName("users")[0];
  // userBOx.style.cssText = `display:none;`;

  // form = document.getElementsByClassName("customer-form-container")[0];
  // form.style.cssText=`display:initial;`;

  customerFormContainer = document.getElementsByClassName(
    "all-customer-form-container"
  )[0];
  customerForm = document.getElementsByClassName("customer-form-container")[0];
  customerHeader = document.getElementById("customerHeader");
  customerNav = document.getElementById("customerNav");
  customerMainSection = document.getElementById("customerMainSection");
  customerCon = document.getElementById("customerUserContainer");

  customerFormContainer.style.cssText = `display:flex;`;
  customerForm.style.cssText = `display:initial; margin:50px auto;`;
  customerHeader.style.cssText = `display:none`;
  customerNav.style.cssText = `display:none`;
  customerMainSection.style.cssText = `display:none`;
  customerCon.style.cssText = `display:none`;
}

function customerAddViaForm() {
  userBox = document.getElementsByClassName("users")[0];
  cName = document.getElementsByName("customerName")[0];
  cCity = document.getElementsByName("customerCity")[0];
  cAddress = document.getElementsByName("customerAddress")[0];
  cCarName = document.getElementsByName("customerCarName")[0];
  cCarNumber = document.getElementsByName("customerCarNumber")[0];
  cCustomerService = document.getElementsByName("customerService")[0];

  console.log("hiii");
  newEle = document.createElement("div");
  newEle.classList.add("user-card");
  newEle.style.cssText = `border:1px solid skyblue; box-shadow: rgba(0, 0, 0, 0.35) 0px 1px 3px;`;

  newEle.innerHTML = `
     
  
  
              <div class="details-customers">

                <span>${cCarName.value}</span>
                <span>${cCarNumber.value}</span>
                <span>${cCustomerService.value}</span>
                <span>1</span>
                <span>${cAddress.value}</span>
              </div>
              
              <img
                src="/images/user-1.png"
                alt="User 1"
                class="user-avatar"
              />
              <h3>${cName.value}</h3>
              <p>${cCity.value}</p>
              <div class="user-actions">
                <button class="action-btn" onclick="viewDetailsCutomers(event)">
                  <i class="fa-solid fa-pen"></i>
                </button>
                <button class="action-btn" onclick="customerDelete(event)">
                  <i class="fa-solid fa-trash"></i>
                </button>
              </div>
     
           
    `;

  customerFormContainer = document.getElementsByClassName(
    "all-customer-form-container"
  )[0];
  customerForm = document.getElementsByClassName("customer-form-container")[0];
  customerHeader = document.getElementById("customerHeader");
  customerNav = document.getElementById("customerNav");
  customerMainSection = document.getElementById("customerMainSection");
  customerCon = document.getElementById("customerUserContainer");

  userBox.prepend(newEle);
  customerFormContainer.style.cssText = `display:none;`;
  customerForm.style.cssText = `display:none;`;
  customerHeader.style.cssText = `display:flex`;
  customerNav.style.cssText = `display:flex`;
  customerMainSection.style.cssText = `display:inherit`;
  customerCon.style.cssText = `display:grid`;
}

function closeCustomerForm() {
  customerFormContainer = document.getElementsByClassName(
    "all-customer-form-container"
  )[0];
  customerForm = document.getElementsByClassName("customer-form-container")[0];
  customerHeader = document.getElementById("customerHeader");
  customerNav = document.getElementById("customerNav");
  customerMainSection = document.getElementById("customerMainSection");
  customerCon = document.getElementsByClassName("customerUserContainer")[0];

  customerFormContainer.style.cssText = `display:none;`;
  customerForm.style.cssText = `display:none;`;
  customerHeader.style.cssText = `display:flex`;
  customerNav.style.cssText = `display:flex`;
  customerMainSection.style.cssText = `display:inherit`;
  customerCon.style.cssText = `display:grid`;
}

// Feedbacknoti

function updateFdNoti() {
  feedbackNoti = document.getElementById("feedbacknoti");
  fbList = document.getElementById("fblist");
  console.log(fbList.childElementCount);
  feedbackNoti.innerText = fbList.childElementCount;
}

// Services
function serviceViewPage(event) {
  backServciePage = document.getElementsByClassName("service-container")[0];
  backServciePage.style.cssText = `display:none`;
  servicePageBox = document.getElementsByClassName("service-view")[0];
  servicePageBox.style.cssText = `z-index:1; display:flex; justify-content:center; align-items:center;`;

  console.log(event.target.parentElement.parentElement.parentElement);

  serviceImg =
    event.target.parentElement.parentElement.parentElement.children[0];
  serviceName =
    event.target.parentElement.parentElement.parentElement.children[1];
  servcieDec =
    event.target.parentElement.parentElement.parentElement.children[2];

  newEle = document.createElement("div");
  newEle.innerHTML = `
       <div class="card">
       
      <button class="closecardbtn" onclick="closeServiceBox()">
        <i class="fa-solid fa-xmark"></i>
      </button>
      <div class="card-header">
          <img src="${serviceImg.getAttribute("src")}" alt="Profile Picture">
      </div>
      <div class="card-body">
          <h2>${serviceName.textContent}</h2>
          <p class="title">${servcieDec.innerHTML}</p>        
      </div>
  </div>

   `;
  servicePageBox.replaceChildren(newEle);
  servicePageBox.append(newEle);
}

function closeServiceBox() {
  backServciePage = document.getElementsByClassName("service-container")[0];
  backServciePage.style.cssText = `display:inital`;
  page = document.getElementsByClassName("service-view")[0];
  page.style.cssText = ` z-index:-1; display:none;`;
}

// Service Delete
function serviceDelete(event) {
  serviceCardBox = event.target.parentElement.parentElement.parentElement;
  
  serviceCardBox.style.cssText = `display:none;`;
}
function openServiceForm() {
  servcieFormContainer = document.getElementsByClassName(
    "all-service-form-container"
  )[0];
  servcieForm = document.getElementsByClassName("service-form-container")[0];
  servcieHeader = document.getElementById("serviceHeader");
  servcieNav = document.getElementById("serviceNav");
  servcieMainSection = document.getElementById("serviceMainSection");
  servcieCon = document.getElementsByClassName("service-container")[0];

  servcieFormContainer.style.cssText = `display:flex;`;
  servcieForm.style.cssText = `display:block;`;
  servcieHeader.style.cssText = `display:none`;
  servcieNav.style.cssText = `display:none`;
  servcieMainSection.style.cssText = `display:none`;
  servcieCon.style.cssText = `display:none`;
}

function closeServiceForm() {
  servcieFormContainer = document.getElementsByClassName(
    "all-service-form-container"
  )[0];
  servcieForm = document.getElementsByClassName("service-form-container")[0];
  servcieHeader = document.getElementById("serviceHeader");
  servcieNav = document.getElementById("serviceNav");
  servcieMainSection = document.getElementById("serviceMainSection");
  servcieCon = document.getElementsByClassName("service-container")[0];

  servcieFormContainer.style.cssText = `display:none;`;
  servcieForm.style.cssText = `display:none;`;
  serviceHeader.style.cssText = `display:flex`;
  serviceMainSection.style.cssText = `display:inital`;
  serviceNav.style.cssText = `display:flex`;
  servcieCon.style.cssText = `display:grid`;
}

// Payment
function viewBalance(event) {
  let viewBalance = event.target.parentElement.parentElement.children[1];
  let dontViewBalance = event.target.parentElement.parentElement.children[2];
  let balanceAmount = event.target.parentElement.parentElement.children[3];
  console.log(event.target.parentElement.parentElement.children);
  console.log(viewBalance, dontViewBalance, balanceAmount);
  viewBalance.style.cssText = `transition: all 300ms; display:none`;
  balanceAmount.style.cssText = `transition: all 300ms; display:flex`;
  dontViewBalance.style.cssText = `transition: all 300ms; display:flex`;
}

function dontViewBalance(event) {
  let viewBalance = event.target.parentElement.parentElement.children[1];
  let dontViewBalance = event.target.parentElement.parentElement.children[2];
  let balanceAmount = event.target.parentElement.parentElement.children[3];
  viewBalance.style.cssText = `transition: all 300ms; display:flex`;
  balanceAmount.style.cssText = `transition: all 300ms; display:none`;
  dontViewBalance.style.cssText = `transition: all 300ms; display:none`;
}
function closePaymentCard() {
  paymentCard = event.target.parentElement.parentElement;
  paymentCard.style.cssText = `display:none;`;
}

function viewBankBalance(event) {
  viewBankBalanceBtn = event.target.parentElement.parentElement.children[1];
  dontViewBankBalanceBtn = event.target.parentElement.parentElement.children[2];
  viewBankBalanceAmountBtn =
    event.target.parentElement.parentElement.children[3];

  viewBankBalanceBtn.style.cssText = `display:none;`;
  dontViewBankBalanceBtn.style.cssText = `display:flex;`;
  viewBankBalanceAmountBtn.style.cssText = `color:white;`;
}

function dontViewBankBalance(event) {
  viewBankBalanceBtn = event.target.parentElement.parentElement.children[1];
  dontViewBankBalanceBtn = event.target.parentElement.parentElement.children[2];
  viewBankBalanceAmountBtn =
    event.target.parentElement.parentElement.children[3];

  viewBankBalanceBtn.style.cssText = `display:flex;`;
  dontViewBankBalanceBtn.style.cssText = `display:none;`;
  viewBankBalanceAmountBtn.style.cssText = `color:transparent;`;
}
function bankCardClose(event) {
  bankCard = event.target.parentElement.parentElement;
  bankCard.style.cssText = `display:none;`;
}

// Appointment / Booking

function cancleAppointment(event) {
  appointBox = event.target.parentElement.parentElement;
  appointBox.style.cssText = `display:none;`;
}

function openBookingForm() {
  appFormContainer = document.getElementsByClassName(
    "all-app-form-container"
  )[0];
  appForm = document.getElementsByClassName("app-form-container")[0];
  appHeader = document.getElementById("appHeader");
  appNav = document.getElementById("appNav");
  appMainSection = document.getElementById("appMainSection");
  appContent = document.getElementById("appContent");

  appFormContainer.style.cssText = `display:flex;`;
  appForm.style.cssText = `display:block;`;
  appHeader.style.cssText = `display:none`;
  appNav.style.cssText = `display:none`;
  appMainSection.style.cssText = `display:none`;
  appContent.style.cssText = `display:none`;
}
function closeAppointmentForm() {
  appFormContainer = document.getElementsByClassName(
    "all-app-form-container"
  )[0];
  appForm = document.getElementsByClassName("app-form-container")[0];
  appHeader = document.getElementById("appHeader");
  appNav = document.getElementById("appNav");
  appMainSection = document.getElementById("appMainSection");
  appContent = document.getElementById("appContent");

  appFormContainer.style.cssText = `display:none;`;
  appForm.style.cssText = `display:none;`;
  appHeader.style.cssText = `display:flex`;
  appNav.style.cssText = `display:flex`;
  appMainSection.style.cssText = `display:inital`;
  appContent.style.cssText = `display:flex`;
}

function addAppointmentBtn() {
  appFormContainer = document.getElementsByClassName(
    "all-app-form-container"
  )[0];
  appForm = document.getElementsByClassName("app-form-container")[0];
  appHeader = document.getElementById("appHeader");
  appNav = document.getElementById("appNav");
  appMainSection = document.getElementById("appMainSection");
  appContent = document.getElementById("appContent");

  workCat = document.getElementById("appcustworkcat");
  appCustName = document.getElementsByName("appcustname")[0];
  appCustDate = document.getElementsByName("appcustdate")[0];
  appCustTime = document.getElementsByName("appcusttime")[0];
  appCustCar = document.getElementsByName("appcustcar")[0];
  appCustNumber = document.getElementsByName("appcustnumber")[0];

  console.log(workCat.value);
  newEle = document.createElement("div");
  newEle.classList.add("appointment-card");
  newEle.innerHTML = `
    
          <div class="header">
            <h2>Work : <span>${workCat.value}</span></h2>
          </div>
          <div class="booking-card-content">
            <div class="booking-card-row">
              <label for="name"><i class="fa-solid fa-user"></i></label>
              <p>${appCustName.value}</p>
            </div>
            <div class="booking-card-row">
              <label for="date"><i class="fa-solid fa-calendar-days"></i></label>
              <p>${appCustDate.value}</p>
            </div>
            <div class="booking-card-row">
              <label for="time"><i class="fa-regular fa-clock"></i></label>
              <p>${appCustTime.value}</p>
            </div>
            <div class="booking-card-row">
              <label for="car"><i class="fa-solid fa-car"></i></label>
              <p>${appCustCar.value}</p>
            </div>
          </div>
          <div class="footer">
            <p>
              For more information, contact at: <a href="#">+91 ${appCustNumber.value}</a>
            </p>
          </div>
          <div class="button-container">
            <button class="btn accept">Accept</button>
            <button class="btn cancel" onclick="cancleAppointment(event)">
              Cancel
            </button>
          </div>
        
       
    `;

  appFormContainer.style.cssText = `display:none;`;
  appForm.style.cssText = `display:none;`;
  appContent.prepend(newEle);
  appHeader.style.cssText = `display:flex`;
  appNav.style.cssText = `display:flex`;
  appMainSection.style.cssText = `display:inital`;
  appContent.style.cssText = `display:flex`;
}

// Service Add Form

function addNewServcieViaForm() {
  servcieFormContainer = document.getElementsByClassName(
    "all-service-form-container"
  )[0];
  serviceForm = document.getElementsByClassName("service-form-container")[0];
  serviceHeader = document.getElementById("serviceHeader");
  serviceNav = document.getElementById("serviceNav");
  serviceMainSection = document.getElementById("serviceMainSection");
  serviceContainer = document.getElementById("serviceContainer");
  serviceBox = document.getElementsByClassName("services")[0];

  serviceImg = document.getElementsByName("serviceImg")[0];
  serviceName = document.getElementsByName("serviceName")[0];
  serviceDec = document.getElementsByName("serviceDec")[0];
  serviceCharge = document.getElementsByName("serviceCharge")[0];

  newEle = document.createElement("div");
  newEle.classList.add("service-card");
  newEle.innerHTML = `
          <img
            src="${serviceImg.value}"
            alt="User 1"
            class="service-avatar"
          />
          <h3>${serviceName.value}</h3>
          <div class="service-dec">
            ${serviceDec.value}
            <p><b>₹ ${serviceCharge.value}/-</b></p>
          </div>

          <div class="service-actions">
            <button class="action-btn" onclick="serviceViewPage(event)">
              <i class="fa-solid fa-pen"></i>
            </button>
            <button class="action-btn" onclick="serviceDelete(event)">
              <i class="fa-solid fa-trash"></i>
            </button>
          </div>
   

  `;

  console.log("hiii");
  servcieFormContainer.style.cssText = `display:none;`;
  serviceForm.style.cssText = `display:none;`;
  serviceBox.prepend(newEle);
  serviceHeader.style.cssText = `display:flex;`;
  serviceNav.style.cssText = `display:flex;`;
  serviceMainSection.style.cssText = `display:inherit;`;
  serviceContainer.style.cssText = `display:grid;`;
  serviceBox.style.cssText = `display:grid;`;
}

// Work Form

function openWorkForm() {
  workForm = document.getElementsByClassName("work-form-container")[0];
  workHeader = document.getElementById("workHeader");
  workNav = document.getElementById("workNav");
  workMainSection = document.getElementById("workMainSection");
  workContent = document.getElementById("workContent");

  workForm.style.cssText = `display:block;`;
  workHeader.style.cssText = `display:none`;
  workNav.style.cssText = `display:none`;
  workMainSection.style.cssText = `display:none`;
  workContent.style.cssText = `display:none`;
}

function closeWorkForm() {
  workForm = document.getElementsByClassName("work-form-container")[0];
  workHeader = document.getElementById("workHeader");
  workNav = document.getElementById("workNav");
  workMainSection = document.getElementById("workMainSection");
  workContent = document.getElementById("workContent");

  workForm.style.cssText = `display:none;`;
  workHeader.style.cssText = `display:flex;`;
  workNav.style.cssText = `display:flex;`;
  workMainSection.style.cssText = `display:inherit;`;
  workContent.style.cssText = `display:flex;`;
}

function addWorkInWorkList() {
  workForm = document.getElementsByClassName("work-form-container")[0];
  workHeader = document.getElementById("workHeader");
  workNav = document.getElementById("workNav");
  workMainSection = document.getElementById("workMainSection");
  workContent = document.getElementById("workContent");

  workService = document.getElementsByName("workservice")[0];
  workDec = document.getElementsByName("workDec")[0];
  workCarName = document.getElementsByName("workCarName")[0];
  workCarNumber = document.getElementsByName("workCarNumber")[0];
  workDate = document.getElementsByName("workDate")[0];
  workStatus = document.getElementsByName("workStatus")[0];

  newEle = document.createElement("div");
  newEle.classList.add("work-card");
  newEle.innerHTML = `
  
          
          <div class="workCloseBtn">
            <i class="fa-solid fa-square-xmark"></i>
          </div>
          <img
            src="/images/pngegg.png"
            alt="Work Image"
            class="work-card-img"
          />
          <div class="work-card-content">
            <h3>${workService.value}</h3>
            <h6>${workCarName.value} &nbsp; &nbsp; <span>${workCarNumber.value}</span></h6>
            <p style="font-size: 1rem; color: silver; margin-bottom: 15px;">
            ${workDec.value}
            </p>
            <h6>${workDate.value}</h6>
            <div class="work-status-container">
              <span class="work-status work-pending">${workStatus.value}</span>
              <!-- <span class="work-status work-in-progress">In Progress</span> -->
              <!-- <span class="work-status work-done">Done</span> -->
            </div>
          </div>
  
        
  `;

  workContent.prepend(newEle);
  workForm.style.cssText = `display:none;`;
  workHeader.style.cssText = `display:flex;`;
  workNav.style.cssText = `display:flex;`;
  workMainSection.style.cssText = `display:inherit;`;

  workContent.style.cssText = `display:flex;`;
}

// index

function viewBal() {
  viewBalAmt = document.getElementsByClassName("viewbal")[0];
  notViewBalAmt = document.getElementsByClassName("notviewbal")[0];
  balAmt = document.getElementsByClassName("bal")[0];

  viewBalAmt.style.cssText = `display:none;`;
  notViewBalAmt.style.cssText = `display:block;`;
  balAmt.style.cssText = `transition:all 300ms; color:black;`;
}

function notViewBal() {
  viewBalAmt = document.getElementsByClassName("viewbal")[0];
  notViewBalAmt = document.getElementsByClassName("notviewbal")[0];
  balAmt = document.getElementsByClassName("bal")[0];

  viewBalAmt.style.cssText = `display:block;`;
  notViewBalAmt.style.cssText = `display:none;`;
  balAmt.style.cssText = `transition:all 300ms; color:transparent;`;
}
function displayDateTime() {
  const currentDateTime = new Date();

  // Get components of the date and time
  const year = currentDateTime.getFullYear();
  const month = (currentDateTime.getMonth() + 1).toString().padStart(2, "0"); // Months are 0-indexed
  const day = currentDateTime.getDate().toString().padStart(2, "0");

  // Get hours in 12-hour format (AM/PM)
  let hours = currentDateTime.getHours();
  const minutes = currentDateTime.getMinutes().toString().padStart(2, "0");
  const seconds = currentDateTime.getSeconds().toString().padStart(2, "0");

  // Determine AM or PM
  const ampm = hours >= 12 ? "PM" : "AM";

  // Convert hours to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12; // 12:00 instead of 0:00

  // Format date and time as: YYYY-MM-DD hh:mm:ss AM/PM
  const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds} ${ampm}`;

  // Set the formatted date and time in the <p> element with id "datetime"
  document.getElementById("datetime").textContent = formattedDateTime;
}

// Call the function to display the date and time immediately
displayDateTime();

// Optionally, update the time every second
setInterval(displayDateTime, 1000);
