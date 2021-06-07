var Skill = [];
// var detailstable = document.getElementById("details-table");
// var tablesss = detailstable.children[0];
// var entry = document.createElement("tr");
// const m = `  <tr>
//     <td>Gulshan</td>
//     <td>Image</td>
//   </tr>`;
// entry.innerHTML = m;
// tablesss.appendChild(entry);

add = (e) => {
  var Name = document.getElementById("Name").value;
  var Email = document.getElementById("Email").value;
  var Website = document.getElementById("Website").value;
  var ImageLink = document.getElementById("ImageLink").value;
  var gender = document.getElementsByName("Gender");
  var HTML = document.getElementById("HTML");
  var CSS = document.getElementById("CSS");
  var Javascript = document.getElementById("Javascript");
  for (i = 0; i < gender.length; i++) {
    if (gender[i].checked) {
      var Gender = gender[i].value;
    }
  }

  var checkboxes = document.querySelectorAll("input[type=checkbox]:checked");
  for (var i = 0; i < checkboxes.length; i++) {
    Skill.push(checkboxes[i].value);
  }
  var validWebsite = Website.match(
    /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
  );
  var validImage = ImageLink.match(
    /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
  );

  clear = (e) => {
    document.querySelector("form").reset();
  };

  if (Name === "") {
    document.getElementById("nerror").innerHTML = "Enter Name";
  } else if (Email === "") {
    document.getElementById("emerror").innerHTML = "Enter Email";
  } else if (Website === "") {
    document.getElementById("weberror").innerHTML = "Enter Website";
  } else if (ImageLink === "") {
    document.getElementById("ierror").innerHTML = "Enter Image link";
  } else if (Email.indexOf("@") <= 0 || Email.charAt(Email.length - 4) != ".") {
    document.getElementById("emerror").innerHTML = "Invalid Email";
  } else if (validWebsite === false || validWebsite === null) {
    document.getElementById("weberror").innerHTML = "Invalid Website Link";
  } else if (validImage === false || validImage === null) {
    document.getElementById("ierror").innerHTML = "Invalid Image Link";
  } else {
    var detailstable = document.getElementById("details-table");
    var thead = detailstable.children[0];

    var entry = document.createElement("tr");

    console.log(detailstable);

    const markup = `<tr>
                        <td>${Name}<br> ${Gender}<br> ${Email}<br> <a href=${validWebsite}>${validWebsite}</a><br><br>${Skill.map((skill) => skill)}</td>
                        <td>
                        

                        <img class="imageSize" src=${validImage}></img>
                        </td>
                    </tr>`;

    entry.innerHTML = markup;
    thead.append(entry);
  }
};
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("enrollbtn").addEventListener("click", add);
});
