const generateSTYLES = () => {
  return `<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    background-color: black;
  }

  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;


  }
 img {
      width: 100%;
     height: 100%;
 }

 </style>`;
};

 const generateHTML = (pageName) => {
  return `

  <div class="container">
 <img src="https://c.tenor.com/QH4Gt1rbA4cAAAAC/essp-galahad.gif" alt="">
 </div>
 
   `;
};

switch (window.location.hostname) {
  case "www.google.com":
    document.head.innerHTML = generateSTYLES();
    document.body.innerHTML = generateHTML("Google");
    break;
  
}
