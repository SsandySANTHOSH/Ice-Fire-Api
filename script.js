const url = "https://anapioficeandfire.com/api/characters/583";

// COUNTER TO FETCH 
let num = 1;

// DOM NODE
const section = document.getElementById("section");
const subheading = document.getElementById("sub-heading");
const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");

// FUNCTION TO GET DATA FROM SERVER
async function IOOperation(id = 1, cb = () => {}) {
  const response = await fetch(url + id);
  const data = await response.json();

  if (data) {
    cb(data);
  }
}

function updateApp(data = {}) {
  section.innerText = data["sect-eng"] || "NA";
  subheading.innerHTML = data["number"] || "NA";
  line1.innerText = data["line1"] || "NA";
  line2.innerText = data["line2"] || "NA";
  num++;
}