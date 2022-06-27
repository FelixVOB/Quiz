fetch ("/api/quiz")
  .then((response)=> {
    return response.json();
  })
  .then((vragen) => {
    let i = -1;
    let gekozenAntwoord = 0;
    var antwoorden = [];
    function displayVolgendeVraag(){
      i++;
      if (i <= 19){
      var button1 = document.getElementById("btn-1");
      var button2 = document.getElementById("btn-2");
      var button3 = document.getElementById("btn-3");
      var button4 = document.getElementById("btn-4");

      document.getElementById("vraag").innerHTML = vragen[i].vraag;
      button1.innerHTML = "<btn class='btn bg-success'><h4>" + vragen[i].mogelijkeAntwoorden[0] + "</h4></btn>";
      button2.innerHTML = "<btn class='btn bg-danger'><h4>" + vragen[i].mogelijkeAntwoorden[1] + "</h4></btn>";
      button3.innerHTML = "<btn class='btn bg-warning'><h4>" + vragen[i].mogelijkeAntwoorden[2] + "</h4></btn>";
      button4.innerHTML = "<btn class='btn bg-info'><h4>" + vragen[i].mogelijkeAntwoorden[3] + "</h4></btn>";
      button1.addEventListener("click", () => {
        gekozenAntwoord = 0;
      });
      button1.addEventListener("click", displayVolgendeVraag);
      button2.addEventListener("click", () => {
        gekozenAntwoord = 1;
      });
      button2.addEventListener("click", displayVolgendeVraag);
      button3.addEventListener("click", () => {
        gekozenAntwoord = 2;
      });
      button3.addEventListener("click", displayVolgendeVraag);
      button4.addEventListener("click", () => {
        gekozenAntwoord = 3;
      });
      button4.addEventListener("click", displayVolgendeVraag);
      if (i > 0)
      {let antwoord = {
              "vraagId" : i - 1,
              "gekozenAntwoordIndex" : gekozenAntwoord
            }
      antwoorden.push(antwoord)
      }} else {
        

        fetch("/api/quiz",{
        method: "post",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(antwoorden)

      })
      .then((response)=> {
        return response.json();
      })
      .then ((resultaat) => {
        document.getElementById("buttonsChoice").innerHTML = "";
        document.getElementById("vraag").innerHTML = "Einde van quiz";
        if (resultaat.score > 80) {
          document.getElementById("geslaagdOfNiet").innerHTML = "Geslaagd!"
          document.body.style.backgroundColor = "green";
        } else {
          document.getElementById("geslaagdOfNiet").innerHTML = "Niet Geslaagd :("
          document.body.style.backgroundColor = "red";
        }
        document.getElementById("score").innerHTML = "Score: ";
        document.getElementById("score").innerHTML += resultaat.score + "%";
        
      })
    }
    }
  document.getElementById("start-btn").addEventListener("click", () => {
  document.getElementById("intro-text").innerHTML = "";
  document.getElementById("letButtonDissapear").innerHTML = "";
  displayVolgendeVraag();
})
})