window.addEventListener("DOMContentLoaded", async () => {
  let res = await axios.get("http://localhost:3003/");

  for (let i = 0; i < res.data.length; i++) {
    let newdiv = document.createElement("div");
    let newli = document.createElement("li");
    let delete_btn = document.createElement("button");
    let edit_btn = document.createElement("button");

    delete_btn.onclick = deleted;
    delete_btn.type = "submit";
    delete_btn.textContent = "delete";

    delete_btn.setAttribute("productid", res.data[i].id);

    console.log(res.data);

    newli.textContent = `${res.data[i].name}-${res.data[i].description}- on ${res.data[i].tableno}`;

    newli.appendChild(delete_btn);

    newdiv.appendChild(newli);
    if (res.data[i].tableno === "table1") {
      document.getElementById("table1").appendChild(newdiv);
    } else if (res.data[i].tableno === "table2") {
      document.getElementById("table2").appendChild(newdiv);
    } else {
      document.getElementById("table3").appendChild(newdiv);
    }
  }
});

async function submitform() {
  const name = document.getElementById("name").value;
  const description = document.getElementById("description").value;

  const tableno = document.getElementById("tableno").value;

  myobj = {
    name,
    description,
    tableno,
  };

  let res = await axios.post("http://localhost:3003/submitform", myobj);
  window.location.reload();
}

async function deleted(e) {
  e.preventDefault();
  let id = e.target.getAttribute("productid");
  let res = await axios.get(`http://localhost:3003/deleted/${id}`);
  window.location.reload();
}
