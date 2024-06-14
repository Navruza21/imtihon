"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var filter = document.querySelector(".filter");
var filteradmin = document.querySelector(".filteradminpage");
var home = document.querySelector(".home");
var admin = document.querySelector(".admin");
var saveLogin = document.querySelector(".loginPageSave");
var questions = document.querySelector(".questions-body");
var sidebarBody = document.querySelector(".offcanvas-body");
var adminpageques = document.querySelector(".questions-body-admin");
var htmlSavollar = document.querySelector(".HTML.savollar");
var cssSavollar = document.querySelector(".CSS.savollar");
var jsSavollar = document.querySelector(".JS.savollar");
var htmlSavol = document.querySelector(".HTML.savol");
var cssSavol = document.querySelector(".CSS.savol");
var jsSavol = document.querySelector(".JS.savol");
var password = document.querySelector("#Password");
var email = document.querySelector("#Email");
function test() {
    return __awaiter(this, void 0, void 0, function () {
        var response, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios.get("https://64020af9dbe8f55e.mokky.dev/test")];
                case 1:
                    response = _a.sent();
                    console.log(response.data);
                    filter.innerHTML = "";
                    response.data.map(function (test) {
                        filter.className = "filter d-flex justify-content-around";
                        var button = document.createElement("button");
                        button.innerHTML = "".concat(test.name);
                        button.className = "".concat(test.name, " savollar btn btn-primary");
                        filter.appendChild(button);
                    });
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    console.log(error_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function htmlquestion() {
    return __awaiter(this, void 0, void 0, function () {
        var response, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("htmlquestion");
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, axios.get("https://64020af9dbe8f55e.mokky.dev/HTML")];
                case 2:
                    response = _a.sent();
                    console.log(response.data);
                    questions.innerHTML = "";
                    response.data.map(function (ques) {
                        var tr = document.createElement("tr");
                        tr.innerHTML = "<th scope=\"row\">".concat(ques.id, "</th>\n                    <td>\n                    ").concat(ques.question, "\n                    </td>\n                    <td>").concat(ques.a, "</td>\n                    <td>").concat(ques.b, "</td>\n                    <td>").concat(ques.c, "</td>\n                    <td>").concat(ques.d, "</td>\n                    ");
                        questions.appendChild(tr);
                    });
                    return [3 /*break*/, 4];
                case 3:
                    error_2 = _a.sent();
                    console.log(error_2);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function cssquestion() {
    return __awaiter(this, void 0, void 0, function () {
        var response, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("cssquestion");
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, axios.get("https://64020af9dbe8f55e.mokky.dev/css")];
                case 2:
                    response = _a.sent();
                    console.log(response.data);
                    questions.innerHTML = "";
                    response.data.map(function (ques) {
                        var tr = document.createElement("tr");
                        tr.innerHTML = "<th scope=\"row\">".concat(ques.id, "</th>\n                    <td>\n                    ").concat(ques.question, "\n                    </td>\n                    <td>").concat(ques.a, "</td>\n                    <td>").concat(ques.b, "</td>\n                    <td>").concat(ques.c, "</td>\n                    <td>").concat(ques.d, "</td>\n                    ");
                        questions.appendChild(tr);
                    });
                    return [3 /*break*/, 4];
                case 3:
                    error_3 = _a.sent();
                    console.log(error_3);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function jsquestion() {
    return __awaiter(this, void 0, void 0, function () {
        var response, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("jsquestion");
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, axios.get("https://64020af9dbe8f55e.mokky.dev/js")];
                case 2:
                    response = _a.sent();
                    console.log(response.data);
                    questions.innerHTML = "";
                    response.data.map(function (ques) {
                        var tr = document.createElement("tr");
                        tr.innerHTML = "<th scope=\"row\">".concat(ques.id, "</th>\n                    <td>\n                    ").concat(ques.question, "\n                    </td>\n                    <td>").concat(ques.a, "</td>\n                    <td>").concat(ques.b, "</td>\n                    <td>").concat(ques.c, "</td>\n                    <td>").concat(ques.d, "</td>\n                    ");
                        questions.appendChild(tr);
                    });
                    return [3 /*break*/, 4];
                case 3:
                    error_4 = _a.sent();
                    console.log(error_4);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
var sidebar = function () {
    sidebarBody.innerHTML = "";
    sidebarBody.innerHTML = " <div class=\"mb-3\">\n          <label for=\"exampleInputEmail1\" class=\"form-label\"\n            >Email address</label\n          >\n          <input\n            type=\"email\"\n            class=\"form-control\"\n            id=\"Email\"\n            aria-describedby=\"emailHelp\"\n            placeholder=\"test@mail.ru\"\n          />\n        </div>\n        <div class=\"mb-3\">\n          <label for=\"exampleInputPassword1\" class=\"form-label\">Password</label>\n          <input\n            type=\"password\"\n            class=\"form-control\"\n            id=\"Password\"\n            placeholder=\"123456\"\n          />\n        </div>\n\n       ";
    var button1 = document.createElement("button");
    button1.innerHTML = "save";
    button1.className = "loginPageSave btn btn-primary";
    sidebarBody.appendChild(button1);
};
var saveLoginPage = function () {
    if (password.value == "123456" && email.value == "test@mail.ru") {
        home.className = "home d-none";
        admin.className = "admin d-block";
    }
    else {
        console.log("parol yoki email xato");
    }
};
function adminPagefilter() {
    return __awaiter(this, void 0, void 0, function () {
        var response, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios.get("https://64020af9dbe8f55e.mokky.dev/test")];
                case 1:
                    response = _a.sent();
                    console.log(response.data);
                    filteradmin.innerHTML = "";
                    response.data.map(function (test) {
                        filteradmin.className = "filter d-flex justify-content-around";
                        var button = document.createElement("button");
                        button.innerHTML = "".concat(test.name);
                        button.className = "".concat(test.name, " savol btn btn-primary");
                        filteradmin.appendChild(button);
                    });
                    return [3 /*break*/, 3];
                case 2:
                    error_5 = _a.sent();
                    console.log(error_5);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function adminPagehtml() {
    return __awaiter(this, void 0, void 0, function () {
        var response, error_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("htmlquestion");
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, axios.get("https://64020af9dbe8f55e.mokky.dev/HTML")];
                case 2:
                    response = _a.sent();
                    console.log(response.data);
                    adminpageques.innerHTML = "";
                    response.data.map(function (ques) {
                        var tr = document.createElement("tr");
                        tr.innerHTML = "<td>".concat(ques.id, "</td>\n              <td>\n              ").concat(ques.question, "\n              </td>\n              <td>").concat(ques.trueQuestion, "</td>\n              <td>\n                <button class=\"btn\"><i class=\"fa-solid fa-plus\"></i></button>\n                <button class=\"btn\">\n                  <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n                </button>\n                <button class=\"btn\">\n                  <i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\n                </button>\n              </td>\n                    ");
                        adminpageques.appendChild(tr);
                    });
                    return [3 /*break*/, 4];
                case 3:
                    error_6 = _a.sent();
                    console.log(error_6);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function adminPagecss() {
    return __awaiter(this, void 0, void 0, function () {
        var response, error_7;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("cssquestion");
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, axios.get("https://64020af9dbe8f55e.mokky.dev/css")];
                case 2:
                    response = _a.sent();
                    console.log(response.data);
                    adminpageques.innerHTML = "";
                    response.data.map(function (ques) {
                        var tr = document.createElement("tr");
                        tr.innerHTML = "<td>".concat(ques.id, "</td>\n              <td>\n              ").concat(ques.question, "\n              </td>\n              <td>").concat(ques.trueQuestion, "</td>\n              <td>\n                <button class=\"btn\"><i class=\"fa-solid fa-plus\"></i></button>\n                <button class=\"btn\">\n                  <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n                </button>\n                <button class=\"btn\">\n                  <i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\n                </button>\n              </td>\n                    ");
                        adminpageques.appendChild(tr);
                    });
                    return [3 /*break*/, 4];
                case 3:
                    error_7 = _a.sent();
                    console.log(error_7);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function adminPagejs() {
    return __awaiter(this, void 0, void 0, function () {
        var response, error_8;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("jsquestion");
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, axios.get("https://64020af9dbe8f55e.mokky.dev/js")];
                case 2:
                    response = _a.sent();
                    console.log(response.data);
                    adminpageques.innerHTML = "";
                    response.data.map(function (ques) {
                        var tr = document.createElement("tr");
                        tr.innerHTML = "<td>".concat(ques.id, "</td>\n              <td>\n              ").concat(ques.question, "\n              </td>\n              <td>").concat(ques.trueQuestion, "</td>\n              <td>\n                <button class=\"btn\"><i class=\"fa-solid fa-plus\"></i></button>\n                <button class=\"btn\">\n                  <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n                </button>\n                <button class=\"btn\">\n                  <i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\n                </button>\n              </td>\n                    ");
                        adminpageques.appendChild(tr);
                    });
                    return [3 /*break*/, 4];
                case 3:
                    error_8 = _a.sent();
                    console.log(error_8);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
window.onload = function () {
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
System.register("modal", [], function (exports_1, context_1) {
    "use strict";
    var mySidebarUcer, mySidebarCourse;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            // @ts-ignore
            exports_1("mySidebarUcer", mySidebarUcer = new bootstrap.Offcanvas("#offcanvasUcer"));
            // @ts-ignore
            exports_1("mySidebarCourse", mySidebarCourse = new bootstrap.Offcanvas("#offcanvasCourse"));
        }
    };
});
