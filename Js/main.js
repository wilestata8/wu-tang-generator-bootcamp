let firstName = [
  "Inspectah",
  "Masta",
  "Poppa",
  "Five Foot",
  "Ghostface",
  "Old Dirty",
];

let lastName = [
  "God",
  "the Killah",
  "the Chef",
  "Be Allah",
  "Nazareth",
  "Digital",
  "Wise",
  "Knight",
  "Wrecka",
  "the Genius",
  "the Zoo Keeper",
  "the Monk",
  "the Scientist",
  "the Disciple",
  "the Darkman",
  "Pellegrino",
  "the Ill Figure",
  "Rocks The World",
  "the Baptist",
  "Dirty Bastard",
];

document.querySelector("button").addEventListener("click", generateName);

function generateName() {
  let show = document.getElementById("show").value;
  let holiday = document.getElementById("holiday").value;
  let vacation = document.getElementById("vacation").value;
  let eyes = document.getElementById("eyes").value;
  let dev = document.getElementById("dev").value;

  let firstNameIndex =
    Number(show) +
    Number(holiday) +
    Number(vacation) +
    Number(eyes) +
    Number(dev);
  //create a varible for last name index with the same outputs
  let lastNameIndex =
    Number(show) +
    Number(holiday) +
    Number(vacation) +
    Number(eyes) +
    Number(dev);

  console.log( firstName [firstNameIndex] + lastName[lastNameIndex]);

  document.querySelector('.finalName').innerHTML = firstName[firstNameIndex]+ ' ' +lastName[lastNameIndex]
}


