document.addEventListener("DOMContentLoaded", function() {

    const teamOne = document.getElementById("team1");
    const teamOnePts = document.getElementById("points1");
    const teamTwo = document.getElementById("team2");
    const teamTwoPts = document.getElementById("points2");
    const btn = document.querySelector(".btn");
    const tableBoard = document.querySelector(".table");

    btn.addEventListener("click", function (e){
        e.preventDefault();
        if(teamOne.value !== teamTwo.value && (teamOnePts.value + teamTwoPts.value) >= 0){
            const newTr = document.createElement("tr");
            const newTdOne = document.createElement("td");
            const newTdTwo = document.createElement("td");
            const newTdTrhee = document.createElement("td");

            newTdOne.textContent = teamOne.value;
            newTdTwo.textContent = teamTwo.value;
            newTdTrhee.textContent = `${teamOnePts.value} - ${teamTwoPts.value}`;


            tableBoard.appendChild(newTr);
            newTr.appendChild(newTdOne);
            newTr.appendChild(newTdTwo);
            newTr.appendChild(newTdTrhee);
            this.submit();
        } else if(teamOne.value === teamTwo.value){
            alert("Drużyny muszą mieć rózne nazwy")
        } else if((teamOnePts.value + teamTwoPts.value) <0){
            alert("Wynik nie może być ujemny")
        }

    });

});
