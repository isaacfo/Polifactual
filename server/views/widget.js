const {
    logoutButton,
  } = require('./helper');
  
  
  function widget () {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
  
    <link rel="stylesheet" href="/stylesheets/main.css"/>
    <link rel="stylesheet" href="/stylesheets/custom-range-input.css"/>
  
    <link rel="stylesheet" href="/stylesheets/index.css" />
    <title>Image Comparison Slider | Helen </title>
  
  </head>
  <body>
    ${logoutButton()}
  
    <br>
    <br>
  
    <div class="upload"> Upload A Photo: <br>
      <form action="upload.php" method="POST" enctype="multipart/form-data">
      <input type="file" name="pic" accept="image/*">
      <input type="submit" name="submit">
      </form>
    </div>
  
    <br>
    <br>
    
    <div class="companylogo"><img src="images/logo.png" alt="Logo" height="42" width="42"><h3>We Get Around Network</h3></div>
  
    <div class="siema">
      <div class="item active">
        <div class="slider-before-after">
          <div class="slider-before-image"><img class="img" img src="/images/1.png"></div>
          <div class="slider-after-image"><img class="img" img src="/images/2.png"></div>
          <input type="range" class="slider-track"/>
        </div>
      </div>
  
      <div class="item">
        <div class="slider-before-after">
          <div class="slider-before-image"><img class="img" img src="/images/2.png"></div>
          <div class="slider-after-image"><img class="img" img src="/images/3.png"></div>
          <input type="range" class="slider-track"/>
        </div>
      </div>
  
      <div class="item">
        <div class="slider-before-after">
          <div class="slider-before-image"><img class="img" img src="/images/3.png"></div>
          <div class="slider-after-image"><img class="img" img src="/images/4.png"></div>
          <input type="range" class="slider-track"/>
        </div>
      </div>
  
      <div class="item">
        <div class="slider-before-after">
          <div class="slider-before-image"><img class="img" img src="/images/4.png"></div>
          <div class="slider-after-image"><img class="img" img src="/images/5.png"></div>
          <input type="range" class="slider-track"/>
        </div>
      </div>
  
      <div class="item">
        <div class="slider-before-after">
          <div class="slider-before-image"><img class="img" img src="/images/5.png"></div>
          <div class="slider-after-image"><img class="img" img src="/images/1.png"></div>
          <input type="range" class="slider-track"/>
        </div>
      </div>
  
    </div>
      
    <div class="wrapper">
      <button class="prevbutton">Previous</button>
      <button class="nextbutton">Next</button>
    </div>
  
    <script src="/scripts/slider-before-after.js"></script> 
    <script src="/scripts/siema.min.js"></script>
    <script>
    const mySiema = new Siema ({
      draggable:false
    });
    document.querySelector('.prevbutton').addEventListener('click', () => mySiema.prev());
    document.querySelector('.nextbutton').addEventListener('click', () => mySiema.next());
    </script>
  
  </body>
  </html>
  `
  
  }
  
  
  module.exports = widget;
  
  