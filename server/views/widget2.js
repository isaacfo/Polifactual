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

  <div class="upload-title">Upload A Photo</div>

  <br>
  <br>

  <div class="upload">
    <div class="child">
    <form action="/submit-form" method="POST" enctype="multipart/form-data">
    Before 1<input type="file" name="before1" accept="image/*">
    <form action="/submit-form" method="POST" enctype="multipart/form-data">
    After 1<input type="file" name="after1" accept="image/*">
    </div>
    <br>
    <div class="child">
    <form action="/submit-form" method="POST" enctype="multipart/form-data">
    Before 2<input type="file" name="before2" accept="image/*">
    <form action="/submit-form" method="POST" enctype="multipart/form-data">
    After 2<input type="file" name="after2" accept="image/*">
    </div>
    <br>
    <div class="child">
    <form action="/submit-form" method="POST" enctype="multipart/form-data">
    Before 3<input type="file" name="before3" accept="image/*">
    <form action="/submit-form" method="POST" enctype="multipart/form-data">
    After 3<input type="file" name="after3" accept="image/*">
    </div>
    <br>
    <div class="child">
    <form action="/submit-form" method="POST" enctype="multipart/form-data">
    Before 4<input type="file" name="before4" accept="image/*">
    <form action="/submit-form" method="POST" enctype="multipart/form-data">
    After 4<input type="file" name="after4" accept="image/*">
    </div>
    <br>
    <div class="child">
    <form action="/submit-form" method="POST" enctype="multipart/form-data">
    Before 5<input type="file" name="before5" accept="image/*">
    <form action="/submit-form" method="POST" enctype="multipart/form-data">
    After 5<input type="file" name="after5" accept="image/*">
    </div>

    <div class="submit"><input type="submit" name="submit"></div>

    </form>
  </div>
  

 

  <br>
  <br>

  <div class="siema">
    <div class="item">
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


{/* <div class="companylogo"><img src="images/logo.png" alt="Logo" height="42" width="42"><h3>We Get Around Network</h3></div>
 */}
