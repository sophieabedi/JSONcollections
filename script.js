let outputElement = document.getElementById('outputElement');
let outputParagraph = document.getElementById('outputParagraph');
let contentGridElement = document.getElementById('contentGrid');


function printToPage(incoming) {
  outputParagraph.innerHTML = incoming;
}

let jsonDatabase = [
  {
    "title" : "Happier than Ever",
    "picture" : "https://www.hellomagazine.com/imagenes/fashion/celebrity-style/20210921122191/billie-eilish-stuns-appearance-incredible-news-air-jordan/0-589-982/billie-eilish-solo-t.jpg",
    "usedColor" : "#5053BE",
    "singers" : ["Billie Eilish", "Finneas"],
  },
  {
    "title" : "Stargazing",
    "picture" : "https://thetenaflyecho.com/wp-content/uploads/2018/11/71a-bnVt9NL.jpg",
    "usedColor" : "#0b006b",
    "singers" : ["Jesse Rutherford", "Jeremy Freedman", "Zach Abels", "Mikey Margott", "Brandon Alexander Fried"],
  },
  {
    "title" : "Brutal",
    "picture" : "https://www.billboard.com/wp-content/uploads/2021/05/feature-olivia-rodrigo-billboard-2021-bb7-david-needleman-1-1548-1620693241.jpg?w=1024",
    "usedColor" : "#AC64EC",
    "singers" : ["Olivia Rodrigo"],
  },
  {
    "title" : "Let It Happen",
    "picture" : "https://cdn.statically.io/img/muzotakt.pl/wp-content/uploads/2019/03/TameImpalacreditMattSav-696x465.jpg?quality=80&f=auto",
    "usedColor" : "#f45a49",
    "singers" : ["Tame Impala", "Kevin Parker", "Dominic Simper", "Jay Watson", "Cam Avery", "Julien Barbagallo"],
  }
]

for (var i = 0; i < jsonDatabase.length; i++) {
  createElementProper(jsonDatabase[i]);
}

function createElementMessy(incomingJSON) {

  var incompleteHTML = "<div class=\"contentItem\" style=\"background-color: " + incomingJSON['usedColor'] + "\"> <h3 class=\"contentTitle\">" + incomingJSON['title'] + "</h3><h4>My Pets:</h4><ul class=\"petList\">";

  for (var i = 0; i < incomingJSON['singers'].length; i++) {
    var singersString = "<li>" + incomingJSON['singers'][i] + "</li>";
    incompleteHTML += singersString;
  }

  incompleteHTML += "</ul></div>";
    contentGridElement.innerHTML = incompleteHTML;
    console.log(incompleteHTML);
  }

  function createElementProper(incomingJSON) {

    let newContentElement = document.createElement("div");
    newContentElement.style.backgroundColor = incomingJSON['usedColor'];
    newContentElement.classList.add('contentItem');

    let newContentHeading = document.createElement("H3");
    newContentHeading.classList.add('contentTitle');
    newContentHeading.innerText = incomingJSON['title'];
    newContentElement.appendChild(newContentHeading);

    let newContentSubhead = document.createElement("H4");
    newContentSubhead.innerText = "the singers/producers:";
    newContentElement.appendChild(newContentSubhead);

    let newContentSingersList = document.createElement("UL");
    newContentElement.appendChild(newContentSingersList);

    for (var i = 0; i < incomingJSON['singers'].length; i++) {
   var currentSingersString = incomingJSON['singers'][i];
   var newSingerItem = document.createElement("LI");
   newSingerItem.innerText = currentSingersString;
   newContentSingersList.appendChild(newSingerItem);

   contentGridElement.appendChild(newContentElement);
  }
  let newImage = document.createElement("img");
  newImage.classList.add("footerImage");
  newImage.src = incomingJSON['picture'];
  newContentElement.appendChild(newImage);
}
