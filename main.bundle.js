webpackJsonp([1,4],{

/***/ 151:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 151;


/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(165);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__books_model__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__books_service__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__edit_book_edit_book_component__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__delete_book_delete_book_component__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__add_book_add_book_component__ = __webpack_require__(85);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AppComponent = (function (_super) {
    __extends(AppComponent, _super);
    function AppComponent(booksService, dialog) {
        var _this = _super.call(this) || this;
        _this.booksService = booksService;
        _this.dialog = dialog;
        _this.fetchBooks = function () {
            _this.booksService.fetchBooks().subscribe(function (res) {
                _this.books = res;
            }, function (error) { return alert("Bummer, there was an error : " + error); });
        };
        _this.editBook = function (book, originalBookIndex) {
            var bookInstance = book;
            var bookData = { data: bookInstance, bookIndex: originalBookIndex };
            _this.dialogRef = _this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__edit_book_edit_book_component__["a" /* EditBookComponent */], {
                data: bookData,
                disableClose: true
            });
            _this.dialogRef.afterClosed().subscribe(function (result) {
                if (result) {
                    var bookIndex = result.bookIndex;
                    _this.books[bookIndex].title = (result.title) ? result.title : _this.books[bookIndex].title;
                    _this.books[bookIndex].author = (result.author) ? result.author : _this.books[bookIndex].author;
                    _this.books[bookIndex].date = (result.date) ? result.date : _this.books[bookIndex].date;
                }
            });
        };
        _this.deleteBook = function (book) {
            _this.deleteBookDialogRef = _this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__delete_book_delete_book_component__["a" /* DeleteBookComponent */], {
                data: book,
                disableClose: true
            });
            _this.deleteBookDialogRef.afterClosed().subscribe(function (result) {
                if (result) {
                    console.log(result);
                    var bookIndex = _this.books.indexOf(book);
                    _this.books.splice(bookIndex, 1);
                }
            });
        };
        _this.addBook = function (newBook) {
            _this.addBookDialogRef = _this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__add_book_add_book_component__["a" /* AddBookComponent */], {
                data: newBook,
                disableClose: true
            });
            _this.addBookDialogRef.afterClosed().subscribe(function (result) {
                if (result) {
                    console.log(result);
                    result.image = 'assets/images/newBook.jpg';
                    var bookAlreadyExist = _this.books.map(function (book) {
                        return book.title.toLowerCase() === result.title.toLowerCase();
                    });
                    console.log(bookAlreadyExist);
                    if (bookAlreadyExist.indexOf(true) == -1) {
                        _this.books.push(result);
                    }
                    else {
                        alert("can not add " + result.title + " because it already exists");
                    }
                }
                ;
            });
        };
        return _this;
    }
    ;
    AppComponent.prototype.ngOnInit = function () {
        this.fetchBooks();
    };
    return AppComponent;
}(__WEBPACK_IMPORTED_MODULE_1__books_model__["a" /* Books */]));
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(227),
        styles: [__webpack_require__(222)],
        providers: [__WEBPACK_IMPORTED_MODULE_2__books_service__["a" /* BooksService */]],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_4__edit_book_edit_book_component__["a" /* EditBookComponent */], __WEBPACK_IMPORTED_MODULE_5__delete_book_delete_book_component__["a" /* DeleteBookComponent */], __WEBPACK_IMPORTED_MODULE_6__add_book_add_book_component__["a" /* AddBookComponent */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__books_service__["a" /* BooksService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__books_service__["a" /* BooksService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["h" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["h" /* MdDialog */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__edit_book_edit_book_component__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__delete_book_delete_book_component__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__add_book_add_book_component__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__title_case_pipe__ = __webpack_require__(164);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__edit_book_edit_book_component__["a" /* EditBookComponent */],
            __WEBPACK_IMPORTED_MODULE_8__delete_book_delete_book_component__["a" /* DeleteBookComponent */],
            __WEBPACK_IMPORTED_MODULE_9__add_book_add_book_component__["a" /* AddBookComponent */],
            __WEBPACK_IMPORTED_MODULE_10__title_case_pipe__["a" /* TitleCasePipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["a" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["b" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["c" /* MdDialogModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["d" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["e" /* MdToolbarModule */]
        ],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_5__edit_book_edit_book_component__["a" /* EditBookComponent */], __WEBPACK_IMPORTED_MODULE_8__delete_book_delete_book_component__["a" /* DeleteBookComponent */], __WEBPACK_IMPORTED_MODULE_9__add_book_add_book_component__["a" /* AddBookComponent */]],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BooksService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BooksService = (function () {
    function BooksService(http) {
        this.http = http;
    }
    BooksService.prototype.fetchBooks = function () {
        var booksUri = './assets/books.json';
        return this.http.get(booksUri)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error, could not fetch the books'); });
    };
    return BooksService;
}());
BooksService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], BooksService);

var _a;
//# sourceMappingURL=books.service.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TitleCasePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TitleCasePipe = (function () {
    function TitleCasePipe() {
    }
    TitleCasePipe.prototype.transform = function (input, length) {
        var titleCase = input.length > 0 ? input.replace(/\w\S*/g, (function (txt) { return txt[0].toUpperCase() + txt.substr(1).toLowerCase(); })) : '';
        return (titleCase.replace(/[^a-zA-Z ]/g, ""));
    };
    return TitleCasePipe;
}());
TitleCasePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Pipe */])({ name: 'titleCase', pure: false })
], TitleCasePipe);

//# sourceMappingURL=title-case.pipe.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(25)();
// imports


// module
exports.push([module.i, "md-input-container{\n  width: 90%;\n}\n#save-btn{\n  margin-right: 15px;\n  color: white;\n  background-color: dodgerblue;\n}\n#save-btn:hover{\n  background-color: crimson;\n}\n#save-btn:disabled{\n  background-color: #999999;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 222:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(25)();
// imports


// module
exports.push([module.i, ".delete-btn{\n  background-color: crimson;\n  color: white;\n}\n#add-btn{\n  background-color: crimson;\n  color: white;\n  font-weight: 800;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 223:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(25)();
// imports


// module
exports.push([module.i, "#delete-btn{\n  background-color: crimson;\n  color: white;\n}\n#delete-btn:hover{\n  background-color: red;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 224:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(25)();
// imports


// module
exports.push([module.i, "md-input-container{\n  width: 90% !important;\n}\n#save-btn{\n  background-color: dodgerblue;\n  color: white;\n  margin-right: 15px;\n}\n#save-btn:hover{\n  background-color: darkslateblue;\n}\n#cancel-btn:hover{\n  background-color: crimson;\n  color: white;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 226:
/***/ (function(module, exports) {

module.exports = "\n<h2 md-dialog-title style=\"color: #666\">{{book.title}}</h2>\n\n<md-dialog-content layout=\"column\" layout-align=\"center center\">\n\n  <md-input-container>\n    <input mdInput placeholder=\"Book Title\"  type=\"text\" [(ngModel)]=\"book.title\">\n  </md-input-container>\n\n  <md-input-container>\n    <input mdInput placeholder=\"Book Author\"  type=\"text\" [(ngModel)]=\"book.author\">\n  </md-input-container>\n\n  <md-input-container>\n    <input mdInput placeholder=\"Release Date\"  type=\"date\" [(ngModel)]=\"book.date\">\n  </md-input-container>\n\n</md-dialog-content>\n<md-dialog-actions>\n  <button md-raised-button [disabled]=\"!fieldsNotSet()\" [md-dialog-close]=\"book\" id=\"save-btn\" >SAVE</button>\n  <button md-raised-button md-dialog-close id=\"cancel-btn\">CANCEL</button>\n</md-dialog-actions>\n"

/***/ }),

/***/ 227:
/***/ (function(module, exports) {

module.exports = "<div layout=\"column\" layout-align=\"center center\" style=\"height: 100%\">\n  <div layout=\"row\" layout-md=\"column\" layout-xs=\"column\" layout-sm=\"column\" layout-align=\"space-around start\">\n    <md-card *ngFor=\"let book of books\">\n      <md-card-header>\n        <md-card-title>{{book.title | titleCase}}</md-card-title>\n        <md-card-subtitle style=\"color: #666\">{{book.author | titleCase}}</md-card-subtitle>\n        <md-card-subtitle style=\"color: #999\">Date: {{book.date}}</md-card-subtitle>\n      </md-card-header>\n      <img md-card-image src=\"{{book.image}}\">\n      <md-card-actions>\n        <button md-raised-button (click)=\"editBook(book, books.indexOf(book))\">EDIT</button>\n        <button md-raised-button class=\"delete-btn\" (click)=\"deleteBook(book)\">DELETE</button>\n      </md-card-actions>\n    </md-card>\n  </div>\n</div>\n<div layout=\"row\" layout-align=\"end end\" style=\"position: fixed; bottom: 10px; right: 10px\">\n  <button id=\"add-btn\" md-fab (click)=\"addBook()\">+</button>\n</div>\n"

/***/ }),

/***/ 228:
/***/ (function(module, exports) {

module.exports = "\n<h2 md-dialog-title style=\"color: #666\">Delete this Book ?</h2>\n\n<md-dialog-content>Are you sure you want to delete <span style=\"color: red; font-weight: 700\">{{data.title}}</span>? this action is irreversible</md-dialog-content>\n<md-dialog-actions>\n  <button md-raised-button  md-dialog-close style=\"margin-right: 15px\">Cancel</button>\n  <button md-raised-button [md-dialog-close]=\"data\" id=\"delete-btn\">Delete</button>\n</md-dialog-actions>\n"

/***/ }),

/***/ 229:
/***/ (function(module, exports) {

module.exports = "\n<h2 md-dialog-title style=\"color: #666\">{{bookInstance.data.title}}</h2>\n\n<md-dialog-content layout=\"column\" layout-align=\"center center\">\n\n  <md-input-container>\n    <input mdInput placeholder=\"Book Title\"  type=\"text\" [(ngModel)]=\"bookInstance.title\">\n  </md-input-container>\n\n  <md-input-container>\n    <input mdInput placeholder=\"Book Author\"  type=\"text\" [(ngModel)]=\"bookInstance.author\">\n  </md-input-container>\n\n  <md-input-container>\n    <input mdInput placeholder=\"Release Date\"  type=\"date\" [(ngModel)]=\"bookInstance.date\">\n  </md-input-container>\n\n</md-dialog-content>\n<md-dialog-actions>\n  <button md-raised-button [md-dialog-close]=\"bookInstance\" id=\"save-btn\">SAVE</button>\n  <button md-raised-button md-dialog-close id=\"cancel-btn\">CANCEL</button>\n</md-dialog-actions>\n"

/***/ }),

/***/ 491:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(152);


/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__books_model__ = __webpack_require__(86);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddBookComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddBookComponent = (function () {
    function AddBookComponent(dialogRef) {
        this.dialogRef = dialogRef;
        this.book = new __WEBPACK_IMPORTED_MODULE_2__books_model__["a" /* Books */];
    }
    AddBookComponent.prototype.fieldsNotSet = function () {
        return (this.book.title && this.book.author && this.book.date);
    };
    ;
    return AddBookComponent;
}());
AddBookComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Component */])({
        selector: 'app-add-book',
        template: __webpack_require__(226),
        styles: [__webpack_require__(221)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MdDialogRef */]) === "function" && _a || Object])
], AddBookComponent);

var _a;
//# sourceMappingURL=add-book.component.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Books; });
/* unused harmony export BookInstanceModel */
/**
 * Created by if_found_call_0586288454 on 04/07/2017 ap. J.-C..
 */
var Books = (function () {
    function Books() {
    }
    return Books;
}());

var BookInstanceModel = (function () {
    function BookInstanceModel() {
    }
    return BookInstanceModel;
}());

//# sourceMappingURL=books.model.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeleteBookComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var DeleteBookComponent = (function () {
    function DeleteBookComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    return DeleteBookComponent;
}());
DeleteBookComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Component */])({
        selector: 'app-delete-book',
        template: __webpack_require__(228),
        styles: [__webpack_require__(223)]
    }),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MD_DIALOG_DATA */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MdDialogRef */]) === "function" && _a || Object, Object])
], DeleteBookComponent);

var _a;
//# sourceMappingURL=delete-book.component.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditBookComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/**
 * Created by if_found_call_0586288454 on 05/07/2017 ap. J.-C..
 */



var EditBookComponent = (function () {
    function EditBookComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.bookInstance = data;
    }
    return EditBookComponent;
}());
EditBookComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Component */])({
        selector: 'app-edit-book',
        template: __webpack_require__(229),
        styles: [__webpack_require__(224)]
    }),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MD_DIALOG_DATA */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MdDialogRef */]) === "function" && _a || Object, Object])
], EditBookComponent);

var _a;
//# sourceMappingURL=edit-book.component.js.map

/***/ })

},[491]);
//# sourceMappingURL=main.bundle.js.map