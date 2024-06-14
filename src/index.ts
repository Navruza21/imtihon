let filter = document.querySelector(".filter") as HTMLDivElement;
let filteradmin = document.querySelector(".filteradminpage") as HTMLDivElement;
let home = document.querySelector(".home") as HTMLDivElement;
let admin = document.querySelector(".admin") as HTMLDivElement;
let saveLogin = document.querySelector(".loginPageSave") as HTMLDivElement;
let questions = document.querySelector(".questions-body") as HTMLDivElement;
let sidebarBody = document.querySelector(".offcanvas-body") as HTMLDivElement;
let adminpageques = document.querySelector(
  ".questions-body-admin"
) as HTMLTableElement;

let htmlSavollar = document.querySelector(
  ".HTML.savollar"
) as HTMLButtonElement;
let cssSavollar = document.querySelector(".CSS.savollar") as HTMLButtonElement;
let jsSavollar = document.querySelector(".JS.savollar") as HTMLButtonElement;
let htmlSavol = document.querySelector(".HTML.savol") as HTMLButtonElement;
let cssSavol = document.querySelector(".CSS.savol") as HTMLButtonElement;
let jsSavol = document.querySelector(".JS.savol") as HTMLButtonElement;
let password = document.querySelector("#Password") as HTMLInputElement;
let email = document.querySelector("#Email") as HTMLInputElement;
type Question = {
  questionId: number;
  id: number;
  question: string;
  a: string;
  b: string;
  c: string;
  d: string;
  trueQuestion: string;
};

async function test() {
  try {
    //@ts-ignore
    const response = await axios.get("https://64020af9dbe8f55e.mokky.dev/test");
    console.log(response.data);
    filter.innerHTML = "";
    response.data.map((test: { id: number; name: string }) => {
      filter.className = "filter d-flex justify-content-around";
      let button = document.createElement("button");
      button.innerHTML = `${test.name}`;
      button.className = `${test.name} savollar btn btn-primary`;
      filter.appendChild(button);
    });
  } catch (error) {
    console.log(error);
  }
}

async function htmlquestion() {
  console.log("htmlquestion");
  try {
    // @ts-ignore
    const response = await axios.get("https://64020af9dbe8f55e.mokky.dev/HTML");
    console.log(response.data);
    questions.innerHTML = "";
    response.data.map((ques: Question) => {
      let tr = document.createElement("tr");
      tr.innerHTML = `<th scope="row">${ques.id}</th>
                    <td>
                    ${ques.question}
                    </td>
                    <td>${ques.a}</td>
                    <td>${ques.b}</td>
                    <td>${ques.c}</td>
                    <td>${ques.d}</td>
                    `;

      questions.appendChild(tr);
    });
  } catch (error) {
    console.log(error);
  }
}

async function cssquestion() {
  console.log("cssquestion");
  try {
    // @ts-ignore
    const response = await axios.get("https://64020af9dbe8f55e.mokky.dev/css");
    console.log(response.data);
    questions.innerHTML = "";
    response.data.map((ques: Question) => {
      let tr = document.createElement("tr");
      tr.innerHTML = `<th scope="row">${ques.id}</th>
                    <td>
                    ${ques.question}
                    </td>
                    <td>${ques.a}</td>
                    <td>${ques.b}</td>
                    <td>${ques.c}</td>
                    <td>${ques.d}</td>
                    `;

      questions.appendChild(tr);
    });
  } catch (error) {
    console.log(error);
  }
}
async function jsquestion() {
  console.log("jsquestion");
  try {
    // @ts-ignore
    const response = await axios.get("https://64020af9dbe8f55e.mokky.dev/js");
    console.log(response.data);
    questions.innerHTML = "";
    response.data.map((ques: Question) => {
      let tr = document.createElement("tr");
      tr.innerHTML = `<th scope="row">${ques.id}</th>
                    <td>
                    ${ques.question}
                    </td>
                    <td>${ques.a}</td>
                    <td>${ques.b}</td>
                    <td>${ques.c}</td>
                    <td>${ques.d}</td>
                    `;

      questions.appendChild(tr);
    });
  } catch (error) {
    console.log(error);
  }
}

const sidebar = () => {
  sidebarBody.innerHTML = "";
  sidebarBody.innerHTML = ` <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label"
            >Email address</label
          >
          <input
            type="email"
            class="form-control"
            id="Email"
            aria-describedby="emailHelp"
            placeholder="test@mail.ru"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input
            type="password"
            class="form-control"
            id="Password"
            placeholder="123456"
          />
        </div>

       `;
  let button1 = document.createElement("button");
  button1.innerHTML = "save";
  button1.className = "loginPageSave btn btn-primary";
  sidebarBody.appendChild(button1);
};

const saveLoginPage = () => {
  if (password.value == "123456" && email.value == "test@mail.ru") {
    home.className = "home d-none";
    admin.className = "admin d-block";
  } else {
    console.log("parol yoki email xato");
  }
};
async function adminPagefilter() {
  try {
    //@ts-ignore
    const response = await axios.get("https://64020af9dbe8f55e.mokky.dev/test");
    console.log(response.data);
    filteradmin.innerHTML = "";
    response.data.map((test: { id: number; name: string }) => {
      filteradmin.className = "filter d-flex justify-content-around";
      let button = document.createElement("button");
      button.innerHTML = `${test.name}`;
      button.className = `${test.name} savol btn btn-primary`;
      filteradmin.appendChild(button);
    });
  } catch (error) {
    console.log(error);
  }
}
async function adminPagehtml() {
  console.log("htmlquestion");
  try {
    // @ts-ignore
    const response = await axios.get("https://64020af9dbe8f55e.mokky.dev/HTML");
    console.log(response.data);
    adminpageques.innerHTML = "";
    response.data.map((ques: Question) => {
      let tr = document.createElement("tr");
      tr.innerHTML = `<td>${ques.id}</td>
              <td>
              ${ques.question}
              </td>
              <td>${ques.trueQuestion}</td>
              <td>
                <button class="btn"><i class="fa-solid fa-plus"></i></button>
                <button class="btn">
                  <i class="fa fa-pencil" aria-hidden="true"></i>
                </button>
                <button class="btn">
                  <i class="fa fa-trash" aria-hidden="true"></i>
                </button>
              </td>
                    `;

      adminpageques.appendChild(tr);
    });
  } catch (error) {
    console.log(error);
  }
}

async function adminPagecss() {
  console.log("cssquestion");
  try {
    // @ts-ignore
    const response = await axios.get("https://64020af9dbe8f55e.mokky.dev/css");
    console.log(response.data);
    adminpageques.innerHTML = "";
    response.data.map((ques: Question) => {
      let tr = document.createElement("tr");
      tr.innerHTML = `<td>${ques.id}</td>
              <td>
              ${ques.question}
              </td>
              <td>${ques.trueQuestion}</td>
              <td>
                <button class="btn"><i class="fa-solid fa-plus"></i></button>
                <button class="btn">
                  <i class="fa fa-pencil" aria-hidden="true"></i>
                </button>
                <button class="btn">
                  <i class="fa fa-trash" aria-hidden="true"></i>
                </button>
              </td>
                    `;

      adminpageques.appendChild(tr);
    });
  } catch (error) {
    console.log(error);
  }
}
async function adminPagejs() {
  console.log("jsquestion");
  try {
    // @ts-ignore
    const response = await axios.get("https://64020af9dbe8f55e.mokky.dev/js");
    console.log(response.data);
    adminpageques.innerHTML = "";
    response.data.map((ques: Question) => {
      let tr = document.createElement("tr");
      tr.innerHTML = `<td>${ques.id}</td>
              <td>
              ${ques.question}
              </td>
              <td>${ques.trueQuestion}</td>
              <td>
                <button class="btn"><i class="fa-solid fa-plus"></i></button>
                <button class="btn">
                  <i class="fa fa-pencil" aria-hidden="true"></i>
                </button>
                <button class="btn">
                  <i class="fa fa-trash" aria-hidden="true"></i>
                </button>
              </td>
                    `;

      adminpageques.appendChild(tr);
    });
  } catch (error) {
    console.log(error);
  }
}
window.onload = () => {
  test();
  sidebar();
  adminPagefilter();
};

htmlSavollar.addEventListener("click", htmlquestion);
cssSavollar.addEventListener("click", cssquestion);
jsSavollar.addEventListener("click", jsquestion);
htmlSavol.addEventListener("click", adminPagehtml);
cssSavol.addEventListener("click", adminPagecss);
jsSavol.addEventListener("click", adminPagejs);
saveLogin.addEventListener("click", saveLoginPage);
