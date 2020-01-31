(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<table border=\"1\" class=\"table\">\n  <tr>\n      <th colspan=\"3\" style=\"text-align:center\">THÔNG TIN PHIM</th>\n  </tr>\n  <tr>\n    <td>id</td>\n    <td>name</td>\n    <td>category</td>\n    <td>release_year</td>\n    <td>run_time</td>\n    <td>rate</td>\n    <td>name_image</td>\n    <td>vice_name_image</td>\n    <td>genre</td>\n    <td>real_name</td>\n    <td>status</td>\n    <td>director</td>\n    <td>country</td>\n    <td>episode</td>\n    <td>views</td>\n    <td style=\"width:150px;\">actor ( dien vien) </td>\n    <th colspan=\"2\" style=\"text-align:center\">Edit</th>\n</tr>\n  <tr *ngFor = \"let eachmovie of pagedItems\">\n      <td>{{eachmovie.id}}</td>\n      <td>{{eachmovie.name}}</td>\n      <td>{{eachmovie.category}}</td>\n      <td>{{eachmovie.release_year}}</td>\n      <td>{{eachmovie.run_time}}</td>\n      <td>{{eachmovie.rate}}</td>\n      <td>{{eachmovie.name_image}}</td>\n      <td>{{eachmovie.vice_name_image}}</td>\n      <td>{{eachmovie.genre}}</td>\n      <td>{{eachmovie.real_name}}</td>\n      <td>{{eachmovie.status}}</td>\n      <td>{{eachmovie.director}}</td>\n      <td>{{eachmovie.country}}</td>\n      <td>{{eachmovie.episode}}</td>\n      <td>{{eachmovie.views}}</td>\n      <td style=\"width:150px;\">{{eachmovie.actor}}</td>\n      <button type=\"button\" class=\"btn btn-danger\" (click)=\"delete(eachmovie.id)\">Delete</button>\n      <button type=\"button\" class=\"btn btn-success\" routerLink=\"/edit/{{eachmovie.id}}\">Edit</button>\n      <button type=\"button\" class=\"btn btn-success\" routerLink=\"/create\">create</button>\n  </tr>\n</table>\n\n<div class=\"flexbox-center-end\">\n  <div class=\"\">\n    <div class=\"whitecolor\">\n      <ul *ngIf=\"pager.pages && pager.pages.length\" class=\"pagination\">\n        <li class=\"border page-item\" [ngClass]=\"{disabled:pager.currentPage === 1}\">\n          <a class=\"page-link\" (click)=\"setPage(1)\">First</a>\n        </li>\n        <li class=\"border page-item\" [ngClass]=\"{disabled:pager.currentPage === 1}\">\n          <a class=\"page-link\" (click)=\"setPage(pager.currentPage - 1)\"><i class=\"fas fa-caret-left\"></i></a>\n        </li>\n        <li class=\"border page-item\" *ngFor=\"let page of pager.pages\" [ngClass]=\"{active:pager.currentPage === page}\">\n          <a class=\"page-link\" (click)=\"setPage(page)\">{{page}}</a>\n        </li>\n        <li class=\"border page-item\" [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\n          <a class=\"page-link\" (click)=\"setPage(pager.currentPage + 1)\"><i class=\"fas fa-caret-right\"></i></a>\n        </li>\n        <li class=\"border page-item\" [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\n          <a class=\"page-link\" (click)=\"setPage(pager.totalPages)\">Last</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/create/create.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/create/create.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h3>FormBuilder</h3>\n<form [formGroup]=\"movieFormGroup\" novalidate (ngSubmit)=\"onSubmit()\">\n    <div class=\"form-group\">\n        <label class=\"center-block\">Name:\n            <input class=\"form-control\" formControlName=\"name\">\n        </label>\n    </div>\n    <div class=\"form-group\">\n        <label class=\"center-block\">Email:\n            <input class=\"form-control\" formControlName=\"email\">\n        </label>\n    </div>\n    <div class=\"form-group\">\n        <button class=\"btn btn-success btn-lg btn-block\" type=\"submit\">Update</button>\n      </div>\n    <p>Form Value: {{movieFormGroup.value | json}} </p>\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/edit/edit.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/edit/edit.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row justify-content-center\">\n  <div class=\"col-md-4 register-employee\">\n    <!-- form card register -->\n    <div class=\"card card-outline-secondary\">\n      <div class=\"card-header\">\n        <h3 class=\"mb-0\">Edit Movie</h3>\n      </div>\n      <div class=\"card-body\">\n        <form [formGroup]=\"editForm\" (ngSubmit)=\"onSubmit()\">\n\n          <div class=\"form-group\">\n            <label for=\"inputId\">id</label>\n            <input class=\"form-control\" type=\"text\" formControlName=\"id\">\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"inputName\">name</label>\n            <input class=\"form-control\" type=\"text\" formControlName=\"name\">\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"inputPassword3\">Genre</label>\n            <select class=\"custom-select form-control\"\n              formControlName=\"genre\">\n              <option value=\"\">Choose...</option>\n              <option *ngFor=\"let eachgenre of genre\" value=\"{{genre}}\">{{genre}}\n              </option>\n            </select>\n          </div>\n\n          <div class=\"form-group\">\n            <button class=\"btn btn-success btn-lg btn-block\" type=\"submit\">Update</button>\n          </div>\n        </form>\n      </div>\n    </div><!-- form  -->\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<app-content></app-content>\n<app-footer></app-footer>\n\n<div class=\"\" id=\"btn-returnToTop\">\n  <button class=\"\" (click)=\"scrollTop()\">\n    <i class=\"fas fa-cloud-upload-alt fs-37\"></i>\n  </button>\n</div>\n\n\n\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/allmovie/allmovie.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/allmovie/allmovie.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button (click)=\"goBack()\">Go Back</button>\n\n<h4 class=\"caption flexbox-center-between\">\n  <span><i class=\"fa fa-plus-square marr-5 fs-19\"></i>{{type | uppercase}}</span>\n</h4>\n\n<div class=\"flexbox-center-start\">\n  <div class=\"movie-item\" *ngFor=\"let eachmovie of pagedItems\">\n    <label class=\"current-status\">{{eachmovie.status}}</label>\n    <a routerLink=\"/detailmovie/{{eachmovie.id}}\" title=\"{{eachmovie.name}}\">\n      <img alt=\"{{eachmovie.name}}\" src=\"./../../../assets/image/{{eachmovie.name_image}}.jpg\" class=\"movie\">\n    </a>\n    <span class=\"title marb-50\">\n      <p class=\"name\">{{eachmovie.name}}</p>\n      <p class=\"real-name\">{{eachmovie.real_name}} ({{eachmovie.release_year}})</p>\n      <p class=\"whitecolor\">{{eachmovie.run_time}} Phút</p>\n    </span>\n  </div>\n</div>\n\n<div class=\"flexbox-center-end\">\n  <div class=\"\">\n    <div class=\"whitecolor\">\n      <ul *ngIf=\"pager.pages && pager.pages.length\" class=\"pagination\">\n        <li class=\"border page-item\" [ngClass]=\"{disabled:pager.currentPage === 1}\">\n          <a class=\"page-link\" (click)=\"setPage(1)\">First</a>\n        </li>\n        <li class=\"border page-item\" [ngClass]=\"{disabled:pager.currentPage === 1}\">\n          <a class=\"page-link\" (click)=\"setPage(pager.currentPage - 1)\"><i class=\"fas fa-caret-left\"></i></a>\n        </li>\n        <li class=\"border page-item\" *ngFor=\"let page of pager.pages\" [ngClass]=\"{active:pager.currentPage === page}\">\n          <a class=\"page-link\" (click)=\"setPage(page)\">{{page}}</a>\n        </li>\n        <li class=\"border page-item\" [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\n          <a class=\"page-link\" (click)=\"setPage(pager.currentPage + 1)\"><i class=\"fas fa-caret-right\"></i></a>\n        </li>\n        <li class=\"border page-item\" [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\n          <a class=\"page-link\" (click)=\"setPage(pager.totalPages)\">Last</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/content.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/content.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"relative\">\n  <div class=\"container mart-5 marb-10 pad-0\">\n    <a routerLink=\"#\" class=\"\">\n      <img style=\"width:100%\" src=\"./../../assets/1224.gif\">\n    </a>\n    <a routerLink=\"#\" class=\"\">\n      <img class=\"ad\" src=\"./../../assets/1187.gif\">\n    </a>\n    <a routerLink=\"#\" class=\"\">\n      <img class=\"ad\" src=\"./../../assets/1204.gif\">\n    </a>\n  </div>\n\n  <div class=\"content\">\n    <div class=\"container flexbox-start-center padt-15\" style=\"background-color:rgb(37, 35, 35)\">\n      <div class=\"left-content\">\n        <router-outlet></router-outlet>\n      </div>\n      <div class=\"right-content marl-30\">\n        <a routerLink=\"\">\n          <img style=\"width:100%\" src=\"./../../assets/1228.gif\">\n        </a>\n        <a routerLink=\"\">\n          <img style=\"width:100%\" src=\"./../../assets/1228.gif\">\n        </a>\n        <div class=\"caption mart-20\">\n          <span class=\"fw-700 fs-19\" style=\"color:#73ff00;\">BẢNG XẾP HẠNG</span>\n        </div>\n        <div class=\"\">\n          <mat-tab-group animationDuration=\"0ms\">\n            <mat-tab style=\"width:60px !important;\" label=\"Phim Bộ\">\n              <div class=\"phim\">\n                <a href=\"/detailmovie/{{eachmovie.id}}\" class=\"list-movie\" *ngFor=\"let eachmovie of moviebo\" >\n                  <div class=\"flexbox-center-start item-list-movie\" title=\"Nhất Dạ Tân Nương\">\n                    <img class=\"img-list-movie\" src=\"./../../assets/image/{{eachmovie.name_image}}.jpg\">\n                    <div class=\"marl-5 overflow\">\n                      <p class=\"name\">{{eachmovie.name}}</p>\n                      <p class=\"real-name\">{{eachmovie.real_name}}</p>\n                      <div class=\"whitecolor\"><i class=\"fa fa-eye marl-5 marr-5\"></i>{{eachmovie.views}} views</div>\n                    </div>\n                  </div>\n                </a>\n              </div>\n            </mat-tab>\n            <mat-tab label=\"Phim Lẻ\">\n              <div class=\"phim\">\n                <a href=\"/detailmovie/{{eachmovie.id}}\" class=\"list-movie\" *ngFor=\"let eachmovie of moviele\" (click)=\"movieDetail()\">\n                  <div class=\"flexbox-center-start item-list-movie\" title=\"Nhất Dạ Tân Nương\">\n                    <img class=\"img-list-movie\" src=\"./../../assets/image/{{eachmovie.name_image}}.jpg\">\n                    <div class=\"marl-5 overflow\">\n                      <p class=\"name\">{{eachmovie.name}}</p>\n                      <p class=\"real-name\">{{eachmovie.real_name}}</p>\n                      <div class=\"whitecolor\"><i class=\"fa fa-eye marl-5 marr-5\"></i>{{eachmovie.views}} views</div>\n                    </div>\n                  </div>\n                </a>\n              </div>\n            </mat-tab>\n          </mat-tab-group>\n        </div>\n\n        <div class=\"caption mart-20\">\n          <span class=\"fw-700 fs-19\" style=\"color:#73ff00\">Phim Sắp Chiếu</span>\n        </div>\n        <div class=\"phim\">\n          <a href=\"/detailmovie/{{eachmovie.id}}\" class=\"list-movie\" *ngFor=\"let eachmovie of moviele\">\n            <div class=\"flexbox-center-start item-list-movie\" title=\"Nhất Dạ Tân Nương\">\n              <img class=\"img-list-movie\" src=\"./../../assets/image/{{eachmovie.name_image}}.jpg\">\n              <div class=\"marl-5 overflow\">\n                <p class=\"name\">{{eachmovie.name}}</p>\n                <p class=\"real-name\">{{eachmovie.real_name}}</p>\n                <div class=\"whitecolor\"><i class=\"fa fa-eye marl-5 marr-5\"></i>{{eachmovie.views}} views</div>\n              </div>\n            </div>\n          </a>\n        </div>\n        <div class=\"caption mart-30\">\n          <span class=\"fs-20\"><i class=\"fa fa-tags fs-16 marr-5\"></i>Tags:</span>\n        </div>\n        <div class=\"phim\" style=\"height:200px\">\n          <span class=\"flexbox-center-start padt-1 padl-10\" style=\"background:#141313\" *ngFor=\"let eachmovie of moviele\">\n            <a href=\"https://bilumoi.com/tag/toi-pham.html\" class=\"flexbox-center-start tag marr-5\" rel=\"nofollow\" title=\"{{eachmovie.name}}\">\n              <i class=\"fas fa-caret-left\"></i>\n              <span class=\"text-tag blackcolor fw-700\">{{eachmovie.name}}</span>\n            </a>\n            <a href=\"https://bilumoi.com/tag/toi-pham.html\" class=\"flexbox-center-start tag marr-5\" rel=\"nofollow\" title=\"{{eachmovie.real_name}}\">\n              <i class=\"fas fa-caret-left\"></i>\n              <span class=\"text-tag blackcolor fw-700\">{{eachmovie.real_name}}</span>\n            </a>\n          </span>\n        </div>\n        <div class=\"actor marb-10 mart-20\">\n          <div class=\"fs-20 fw-700\">Diễn Viên</div>\n          <img src=\"./../../assets/image/20160909170353-0909-jason-statham-001.jpg\">\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"adver1\">\n    <a routerLink=\"#\">\n      <img src=\"./../../assets/1145.gif\">\n    </a>\n  </div>\n  <div class=\"adver2\">\n    <a routerLink=\"#\">\n      <img src=\"./../../assets/1222.gif\">\n    </a>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/detailmovie/detailmovie.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/detailmovie/detailmovie.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"flexbox-start-start\" *ngFor=\"let movie of movie\">\n  <a href=\"/watchmovie/{{movie.id}}\" class=\"poster\">\n    <img style=\"width:264px;height:344px\" src=\"./../../../assets/image/{{movie.name_image}}.jpg\">\n    <div class=\"xemphim flexbox-center-center\">\n      <div class=\"button flexbox-center-center blackcolor fs-20\">\n        <i class=\"fa fa-play-circle-o\"></i>\n        Watch Movie\n      </div>\n    </div>\n  </a>\n  <div class=\"padl-20 whitecolor\">\n    <h1 class=\"name-movie moviename\">{{movie.name}}</h1>\n    <h3 class=\"fw-700\">{{movie.real_name}}</h3>\n    <div class=\"info\">\n      <p class=\"fs-16 fw-700\">Current Status: <strong class=\"status\">{{movie.status}}</strong></p>\n      <p class=\"fs-16 fw-700\">Director: <a href=\"#\" class=\"\" style=\"color:#729dc7 !important\">{{movie.director}}</a></p>\n      <p class=\"fs-16 actor fw-700\">Actor: <a href=\"#\" class=\"\" style=\"color:#729dc7 !important\">{{movie.actor}}</a></p>\n      <p class=\"fs-16 fw-700 genre\">Category: <a class=\"\" href=\"\" style=\"color:#729dc7 !important\">{{movie.genre}}</a></p>\n      <p class=\"fs-16 fw-700\">Country: <a class=\"\" href=\"\" style=\"color:#729dc7 !important\">{{movie.country}}</a></p>\n      <p class=\" fs-16 fw-700\">Time: <strong class=\"status\">{{movie.run_time}} phút</strong></p>\n      <p class=\"fs-16 fw-700\">Views: <strong class=\"status\">{{movie.views}}</strong></p>\n      <p class=\"fs-16 fw-700\">Release_year: <a class=\"status\" href=\"\" style=\"color:#729dc7 !important\">{{movie.release_year}}</a></p>\n    </div>\n    <div class=\"underline mart-13 marb-13 boxshadow-white\"></div>\n    <div class=\"flexbox-center-start\">\n      <span class=\"rate\">{{movie.rate}}</span>\n      <div class=\"marl-15\">\n        <img src=\"https://bilutv.org/Theme/images/star-on-20.png\" alt=\"1\" title=\"\">\n        <img src=\"https://bilutv.org/Theme/images/star-on-20.png\" alt=\"1\" title=\"\">\n        <img src=\"https://bilutv.org/Theme/images/star-on-20.png\" alt=\"1\" title=\"\">\n        <img src=\"https://bilutv.org/Theme/images/star-on-20.png\" alt=\"1\" title=\"\">\n        <img src=\"https://bilutv.org/Theme/images/star-on-20.png\" alt=\"1\" title=\"\">\n        <img src=\"https://bilutv.org/Theme/images/star-on-20.png\" alt=\"1\" title=\"\">\n        <img src=\"https://bilutv.org/Theme/images/star-on-20.png\" alt=\"1\" title=\"\">\n        <img src=\"https://bilutv.org/Theme/images/star-off-20.png\" alt=\"10\" title=\"Tuyệt vời\">\n        <img src=\"https://bilutv.org/Theme/images/star-off-20.png\" alt=\"10\" title=\"Tuyệt vời\">\n        <img src=\"https://bilutv.org/Theme/images/star-off-20.png\" alt=\"10\" title=\"Tuyệt vời\"><br/>\n        <i class=\"fa fa-bar-chart mart-15\"> 20 lượt đánh giá</i>\n      </div>\n    </div>\n  </div>\n</div>\n\n<app-slidemovie></app-slidemovie>\n\n<div class=\"\" *ngFor=\"let movie of movie\">\n  <h4 class=\"caption mart-15\">\n    <span><i class=\"fa fa-plus-square marr-5 fs-19\"></i>movie's content</span>\n  </h4>\n  <p class=\"fs-16\" style=\"color:rgb(207, 207, 207)\">\n    {{movie.content}}\n  </p>\n  <div class=\"flexbox-start-center\">\n    <img class=\"mart-20 marb-20\" style=\"width:95%\" src=\"./../../../assets/image/{{movie.vice_name_image}}.jpg\">\n  </div>\n</div>\n\n<div class=\"\">\n  <app-samemovie [movie]=\"movies\"></app-samemovie>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/index/carousel/carousel.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/index/carousel/carousel.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div class=\"slide hi-slide marl-15\">\n  <div class=\"hi-prev\"><i class=\"fas fa-backward fs-16\"></i></div>\n  <div class=\"hi-next\"><i class=\"fas fa-forward fs-16\"></i></div>\n  <ul>\n    <li>\n      <a routerLink=\"#\">\n        <img src=\"./../../../../assets/image/avatar-2-2017.jpg\">\n      </a>\n    </li>\n    <li>\n      <a routerLink=\"#\">\n        <img src=\"./../../../../assets/image/avengers-cuoc-chien-vo-cuc-2018_1547736377.jpg\">\n      </a>\n    </li>\n    <li>\n      <a routerLink=\"#\">\n        <img src=\"./../../../../assets/image/dia-dao-ca-sau-tu-than-2019_1577348105.jpg\">\n      </a>\n    </li>\n    <li>\n      <a routerLink=\"#\">\n        <img src=\"./../../../../assets/image/hon-ma-theo-duoi-2004.jpg\">\n      </a>\n    </li>\n    <li>\n      <a routerLink=\"#\">\n        <img src=\"./../../../../assets/image/tan-so-chet-2019_1577525937.jpg\">\n      </a>\n    </li>\n    <li>\n      <a routerLink=\"#\">\n        <img src=\"./../../../../assets/image/vua-su-tu-2019_1578022113.jpg\">\n      </a>\n    </li>\n    <li>\n      <a routerLink=\"#\">\n        <img src=\"./../../../../assets/image/thong-long-ma-2018_1577368759.jpg\">\n      </a>\n    </li>\n    <li>\n      <a routerLink=\"#\">\n        <img src=\"./../../../../assets/image/loi-nguyen-8-chan-2019_1577351385.jpg\">\n      </a>\n    </li>\n  </ul>\n</div> -->\n\n\n<div class=\"frame\">\n  <div class=\"khoi-slide marb-20\">\n    <div class=\"cac-slide\">\n      <div class=\"slide active\"><img src=\"./../../../../assets/image/chien-nao-ma-kia-2016-big.jpg\"></div>\n      <div class=\"slide\"><img src=\"./../../../../assets/image/biet-doi-sieu-anh-hung-3-cuoc-chien-vo-cuc-2018-big.jpg\"></div>\n      <div class=\"slide\"><img src=\"./../../../../assets/image/bo-ba-tu-dia-nguc-2019_1577337406-big.jpg\"></div>\n      <div class=\"slide\"><img src=\"./../../../../assets/image/chien-nao-ma-kia-2016-big.jpg\"></div>\n      <div class=\"slide\"><img src=\"./../../../../assets/image/cung-thu-sieu-pham-2011-big.jpg\"></div>\n      <div class=\"slide\"><img src=\"./../../../../assets/image/cung-thu-sieu-pham-2011-big.jpg\"></div>\n      <div class=\"slide\"><img src=\"./../../../../assets/image/cung-thu-sieu-pham-2011-big.jpg\"></div>\n    </div>\n    <ul>\n      <li class=\"active_nut\"></li>\n      <li></li>\n      <li></li>\n      <li></li>\n      <li></li>\n      <li></li>\n      <li></li>\n    </ul>\n  </div>\n  <div class=\"nut-slide\">\n    <span id=\"btn-prev\"><i class=\"fas fa-backward\"></i></span>\n    <span id=\"btn-next\"><i class=\"fas fa-forward\"></i></span>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/index/index.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/index/index.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<app-carousel></app-carousel>\n<h4 class=\"caption flexbox-center-between\">\n  <span><i class=\"fa fa-plus-square marr-5 fs-19\"></i>phim bộ cập nhật</span>\n  <a class=\"\" style=\"color:#73ff00;text-shadow: 1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue;\" title=\"Phim bộ mới cập nhật\" routerLink=\"/movietype/phim bộ\">Xem tất cả\n    <i class=\"fa fa-angle-double-right\"></i>\n  </a>\n</h4>\n<div class=\"flexbox-center-between\">\n  <div class=\"movie-item\" *ngFor=\"let eachmovie of moviebo\">\n    <label class=\"current-status\">{{eachmovie.status}}</label>\n    <a routerLink=\"/detailmovie/{{eachmovie.id}}\" title=\"{{eachmovie.name}}\">\n      <img alt=\"{{eachmovie.name}}\" src=\"./../../../assets/image/{{eachmovie.name_image}}.jpg\" class=\"movie\">\n    </a>\n    <div class=\"title\">\n      <p class=\"name\">{{eachmovie.name}}</p>\n      <p class=\"real-name\">{{eachmovie.real_name}}</p>\n      <p class=\"whitecolor\">{{eachmovie.run_time}} Phút / Tập</p>\n    </div>\n  </div>\n</div>\n\n<a routerLink=\"#\" class=\"flexbox-center-center\">\n  <img style=\"width:100%\" class=\"mart-20 marb-20\" src=\"./../../../assets/1224.gif\">\n</a>\n\n<h4 class=\"caption flexbox-center-between\">\n  <span><i class=\"fa fa-plus-square marr-5 fs-19\"></i>phim lẻ cập nhật</span>\n  <a class=\"\" style=\"color:#73ff00;text-shadow: 1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue;\" title=\"Phim bộ mới cập nhật\" routerLink=\"/movietype/phim lẻ\">Xem tất cả\n    <i class=\"fa fa-angle-double-right\"></i>\n  </a>\n</h4>\n\n<div class=\"flexbox-center-between\">\n  <div class=\"movie-item\" *ngFor=\"let eachmovie of moviele\">\n    <label class=\"current-status\">{{eachmovie.status}}</label>\n    <a routerLink=\"/detailmovie/{{eachmovie.id}}\" title=\"{{eachmovie.name}}\">\n      <img alt=\"{{eachmovie.name}}\" src=\"./../../../assets/image/{{eachmovie.name_image}}.jpg\" class=\"movie\">\n    </a>\n    <div class=\"title\">\n      <p class=\"name\">{{eachmovie.name}}</p>\n      <p class=\"real-name\">{{eachmovie.real_name}}</p>\n      <p class=\"whitecolor\">{{eachmovie.run_time}} Phút</p>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/watchmovie/watchmovie.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/watchmovie/watchmovie.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"pad-5 whitecolor fs-16 marb-10\" style=\"background-color:rgb(0, 0, 0)\">\n  <a routerLink=\"#\" class=\"yellowcolor fs-16\"> Home </a>/\n  <a routerLink=\"#\" class=\"yellowcolor fs-16\"> Phim Lẻ </a>/\n  <a routerLink=\"#\" class=\"yellowcolor fs-16\"> Avatar </a>/\n  WatchMovie\n</div>\n\n<div class=\"frame\">\n  <div class=\"videoPlayer showControls\">\n    <video src=\"./../../../assets/videoplayback.webm\"></video>\n    <div class=\"controls active\">\n      <!-- top controls -->\n      <div class=\"topControls\">\n        <div class=\"seekbar\">\n          <div class=\"progressBar\"></div>\n        </div>\n      </div>\n      <!-- bottom controls -->\n      <div class=\"bottomControls flexbox-center-between\">\n        <div class=\"flexbox-center-around\" style=\"width:45%\">\n          <!-- playCtrl -->\n          <div class=\"playback\">\n            <button class=\"bt playPauseBtn play\">\n              <i class=\"fa fa-play\"></i>\n              <i class=\"fa fa-pause\"></i>\n            </button>\n          </div>\n\n          <!-- volume -->\n          <div class=\"volume\">\n            <i class=\"fa fa-volume-up\"></i>\n            <span class=\"seekbarSection\">\n              <span class=\"seekbar\">\n                <div class=\"progressBar\"></div>\n              </span>\n            </span>\n          </div>\n\n          <div class=\"time\">\n            <span class=\"startTime fs-20\">00:00:00</span>\n            <span class=\"marl-5 marr-5 fs-20\">/</span>\n            <span class=\"endTime fs-20\">00:00:00</span>\n          </div>\n        </div>\n\n        <div class=\"flexbox-center-around\" style=\"width:30%\">\n          <div class=\"setting\">\n            <i class=\"fa fa-cog\"></i>\n          </div>\n\n          <div class=\"speed fs-20\">\n              1x\n          </div>\n\n          <div class=\"miniplayer\">\n              <i class=\"fas fa-video\"></i>\n          </div>\n\n          <!-- full screen -->\n          <div class=\"fullscreenCtrl\">\n            <button class=\"fullscreen\">\n              <i class=\"fas fa-compress\"></i>\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"boxshadow\"></div>\n\n<div class=\"\" *ngFor=\"let eachmovie of movie\">\n  <h2 class=\"name-movie mart-40\">{{eachmovie.name}}</h2>\n  <h4 class=\"whitecolor\">{{eachmovie.real_name}}</h4>\n</div>\n\n<div class=\"mart-20 marb-15 flexbox-center-between\">\n  <div class=\"\">\n    <span class=\"vietsub\">\n      <span class=\"spinner-grow\" style=\"width: 15px; height: 15px\" role=\"status\">\n        <span class=\"sr-only\">Loading...</span>\n      </span>\n      VietSub\n    </span>\n    <span class=\"vietsub marl-10\" style=\"border:none !important\">Thuyết Minh</span>\n  </div>\n  <div class=\"\">\n    <span class=\"Turn-off marl-10 whitecolor\"><i class=\"fas fa-lightbulb marr-3\" style=\"color:rgb(214, 218, 0);font-size:14px !important\"></i>Light Off</span>\n  </div>\n</div>\n\n<div class=\"server flexbox-center-start pad-10 mart-15 marb-15\">\n  <span class=\"flexbox-center-center whitecolor fs-18 marr-30\"><i class=\"fas fa-server greencolor marr-3\"></i>Server</span>\n  <span class=\"hdd marr-10\">#1 HDD</span>\n  <span class=\"ssd marr-10\">#2 SSHD</span>\n  <span class=\"ssd marr-10\">#3 SSD</span>\n</div>\n\n<div class=\"flexbox-center-between pad-15 mart-10\" style=\"background:rgb(27, 27, 27)\">\n  <div class=\"fs-18\">\n    <p class=\"fs-20\" style=\"color:rgb(216, 213, 48)\">Đánh giá phim <span>(5 lượt)</span></p>\n    <i class=\"fas fa-star\" style=\"color:rgb(218, 131, 0)\"></i>\n    <i class=\"fas fa-star\" style=\"color:rgb(218, 131, 0)\"></i>\n    <i class=\"fas fa-star\" style=\"color:rgb(218, 131, 0)\"></i>\n    <i class=\"fas fa-star\" style=\"color:rgb(218, 131, 0)\"></i>\n    <i class=\"fas fa-star\" style=\"color:rgb(218, 131, 0)\"></i>\n    <i class=\"fas fa-star\" style=\"color:rgb(218, 131, 0)\"></i>\n    <i class=\"fas fa-star\" style=\"color:rgb(206, 204, 201)\"></i>\n    <i class=\"fas fa-star\" style=\"color:rgb(206, 204, 201)\"></i>\n    <i class=\"fas fa-star\" style=\"color:rgb(206, 204, 201)\"></i>\n    <i class=\"fas fa-star\" style=\"color:rgb(206, 204, 201)\"></i>\n  </div>\n  <div class=\"\">\n    <div class=\"flexbox-center-center top pad-5\">349</div>\n    <div class=\"flexbox-center-center bottom pad-5\"><i class=\"fab fa-facebook-square marr-3\"></i>Shared</div>\n  </div>\n</div>\n\n<div class=\"flexbox-center-start\">\n  <div class=\"whitecolor fs-16 marr-5\" style=\"margin-top:-3px\">Search: </div>\n  <a href=\"https://bilumoi.com/tag/toi-pham.html\" class=\"flexbox-center-start tag marr-5\" rel=\"nofollow\" title=\"tội phạm\">\n    <i class=\"fas fa-caret-left\"></i>\n    <span class=\"text-tag blackcolor fw-700\">Tội Phạm</span>\n  </a>\n  <a href=\"https://bilumoi.com/tag/toi-pham.html\" class=\"flexbox-center-start tag marr-5\" rel=\"nofollow\" title=\"tội phạm\">\n    <i class=\"fas fa-caret-left\"></i>\n    <span class=\"text-tag blackcolor fw-700\">Tội Phạm</span>\n  </a>\n  <a href=\"https://bilumoi.com/tag/toi-pham.html\" class=\"flexbox-center-start tag marr-5\" rel=\"nofollow\" title=\"tội phạm\">\n    <i class=\"fas fa-caret-left\"></i>\n    <span class=\"text-tag blackcolor fw-700\">Tội Phạm</span>\n  </a>\n  <a href=\"https://bilumoi.com/tag/toi-pham.html\" class=\"flexbox-center-start tag marr-5\" rel=\"nofollow\" title=\"tội phạm\">\n    <i class=\"fas fa-caret-left\"></i>\n    <span class=\"text-tag blackcolor fw-700\">Tội Phạm</span>\n  </a>\n  <a href=\"https://bilumoi.com/tag/toi-pham.html\" class=\"flexbox-center-start tag marr-5\" rel=\"nofollow\" title=\"tội phạm\">\n    <i class=\"fas fa-caret-left\"></i>\n    <span class=\"text-tag blackcolor fw-700\">Tội Phạm</span>\n  </a>\n  <a href=\"https://bilumoi.com/tag/toi-pham.html\" class=\"flexbox-center-start tag marr-5\" rel=\"nofollow\" title=\"tội phạm\">\n    <i class=\"fas fa-caret-left\"></i>\n    <span class=\"text-tag blackcolor fw-700\">Tội Phạm</span>\n  </a>\n</div>\n\n<a routerLink=\"#\" class=\"flexbox-center-center\">\n  <img style=\"width:100%\" class=\"mart-20 marb-20\" src=\"./../../../assets/1224.gif\">\n</a>\n\n\n<div class=\"fb-comments background mart-10 marb-20\" data-href=\"http://localhost:4200/watchmovie/\" data-width=\"100%\" data-numposts=\"5\"></div>\n\n\n<app-samemovie [movie]=\"movies\"></app-samemovie>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- footer -->\n<div class=\"footer\">\n  <div class=\"container flexbox-start-between padt-50 padb-50\">\n    <div class=\"footer1\">\n      <img src=\"https://bilumoi.com/Theme/images/bilumoi-logo-new.png\">\n      <p>\n          Copyright ® 2019 Bilu Mới All Rights Reserved.\n      </p>\n    </div>\n    <div class=\"footer2\">\n      <p style=\"font-size:18px\">Quốc Gia Nổi Bật</p>\n      <p>Phim Hàn Quốc</p>\n      <p>Phim Trung Quốc</p>\n      <p>Phim Thái Lan</p>\n      <p>Phim Nhật Bản</p>\n    </div>\n    <div class=\"footer2\">\n      <p style=\"font-size:18px\">Danh Sách Phim</p>\n      <p>Phim Chiếu Rạp</p>\n      <p>Phim Mới</p>\n      <p>Phim Xem Nhiều</p>\n    </div>\n    <div class=\"footer2\">\n      <p style=\"font-size:18px\">Điều Khoản Sử Dụng</p>\n      <p>Chính Sách Riêng Tư</p>\n      <p>Khiếu Nại Bản Quyền</p>\n      <p>Giới Thiệu</p>\n      <p>Liên hệ</p>\n    </div>\n    <div class=\"footer2\">\n      <p style=\"font-size:18px\">Liên Hệ</p>\n      <a routerLink=\"#\" class=\"yellowcolor fs-16\">Email: bilutv.org@gmail.com</a><br/>\n      <a routerLink=\"#\" class=\"bluecolor fs-16\">FaceBook<i class=\"fab fa-facebook-square marl-3\"></i></a><br>\n      <a routerLink=\"#\" class=\"fs-16\" style=\"color:#1da1f2 !important\">Twitter<i class=\"fab fa-twitter-square marl-3\"></i></a><br>\n      <a routerLink=\"#\" class=\"fs-16\" style=\"color:#ff0000 !important\">Youtube<i class=\"fab fa-youtube marl-3\"></i></a><br>\n      <a routerLink=\"#\" class=\"fs-16\" style=\"color:#d30ca1 !important\">Instagram<i class=\"fab fa-instagram marl-3\"></i></a><br>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- header -->\n<div class=\"header\">\n  <div class=\"container flexbox-center-between\">\n    <!-- logo website -->\n    <a routerLink=\"\" title=\"Home\">\n      <img src=\"https://bilumoi.com/Theme/images/bilutv-logo-noel.png\" alt=\"BiluTV - Xem Phim Mới, Phim VietSub, Phim Chiếu Rạp Hay HD\">\n    </a>\n    <!-- search -->\n    <div class=\"relative\">\n      <input class=\"form-control form-search\" id=\"s\" type=\"search\" placeholder=\"Write the name of movie, actor...\" aria-label=\"Search\" autocomplete=\"false\" [(ngModel)]=\"movieName\">\n      <a routerLink=\"/search/{{movieName}}\" title=\"search\">\n        <i class=\"fa fa-search\"></i>\n      </a>\n    </div>\n    <!-- contact -->\n    <div class=\"flexbox-center-between\">\n      <a class=\"contact flexbox-center-center\" target=\"_blank\" routerLink=\"#\" title=\"Contact\">\n        <i class=\"fa fa-envelope fs-18 marr-5\"></i>\n        <span>Contact</span>\n      </a>\n      <a class=\"contact marl-5\" routerLink=\"#\" title=\"login\">\n        <span>Login</span>\n      </a>\n      <a class=\"contact marl-5\" routerLink=\"/admin\" title=\"admin\">\n        <span>Admin</span>\n      </a>\n    </div>\n  </div>\n</div>\n\n<app-menu></app-menu>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/menu/menu.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/menu/menu.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"menu\">\n  <nav class=\"navbar stick navbar-expand-lg fw-600 sticky-top boxshadow-white\">\n    <div class=\"container\">\n      <div class=\"\">\n        <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n          <ul class=\"navbar-nav mr-auto\">\n            <li class=\"marr-10 mart-7\">\n              <a routerLink=\"/movie\" title=\"Home\">\n                <i class=\"fa fa-home fs-18\"></i>\n              </a>\n            </li>\n            <li class=\"nav-item dropdown\">\n              <div class=\"nav-link dropdown-toggle whitecolor pointer\"  id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                <i class=\"fa fa-clone marl-10\"></i>\n                CATEGORIES\n              </div>\n              <div class=\"dropdown-content\" aria-labelledby=\"navbarDropdown\">\n                <a class=\"dropdown-item fs-16\" routerLink=\"/movietype/{{eachCategory.name}}\" *ngFor=\"let eachCategory of Category\">\n                  {{eachCategory.name}}\n                </a>\n              </div>\n            </li>\n            <li class=\"nav-item dropdown\">\n              <div class=\"nav-link dropdown-toggle whitecolor pointer\"  id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                <i class=\"fa fa-globe marl-10\"></i>\n                COUNTRY\n              </div>\n              <div class=\"dropdown-content\" aria-labelledby=\"navbarDropdown\">\n                <a class=\"dropdown-item fs-16\" routerLink=\"/movietype/{{eachCountry.name}}\" *ngFor=\"let eachCountry of Country\">\n                  {{eachCountry.name}}\n                </a>\n              </div>\n            </li>\n            <li class=\"nav-item dropdown\">\n              <div class=\"nav-link dropdown-toggle whitecolor pointer\"  id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                <i class=\"fa fa-film marl-10\"></i>\n                PHIM LẺ\n              </div>\n              <div class=\"dropdown-content\" aria-labelledby=\"navbarDropdown\" *ngFor=\"let eachCategory of Category\">\n                <a class=\"dropdown-item fs-16\" routerLink=\"/movietype/phim lẻ/2019\">Phim lẻ 2019</a>\n                <a class=\"dropdown-item fs-16\" href=\"#\">Phim lẻ 2018</a>\n                <a class=\"dropdown-item fs-16\" href=\"#\">Phim lẻ 2017</a>\n                <a class=\"dropdown-item fs-16\" href=\"#\">Phim lẻ 2016</a>\n              </div>\n            </li>\n            <li class=\"nav-item dropdown\">\n              <div class=\"nav-link dropdown-toggle whitecolor pointer\"  id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                <i class=\"fa fa-th-list marl-10\"></i>\n                PHIM BỘ\n              </div>\n              <div class=\"dropdown-content\" aria-labelledby=\"navbarDropdown\">\n                <a class=\"dropdown-item fs-16\" href=\"#\">Phim bộ 2019</a>\n                <a class=\"dropdown-item fs-16\" href=\"#\">Phim bộ 2018</a>\n                <a class=\"dropdown-item fs-16\" href=\"#\">Phim bộ 2017</a>\n                <a class=\"dropdown-item fs-16\" href=\"#\">Phim bộ 2016</a>\n              </div>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link whitecolor\" href=\"#\">\n                <i class=\"fas fa-paw marl-10\"></i>\n                ANIME\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link whitecolor\" href=\"#\">\n                <i class=\"fa fa-bolt marl-10\"></i>\n                HOẠT HÌNH\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link whitecolor\" href=\"\">\n                <i class=\"fa fa-tasks marl-10\"></i>\n                PHIM CHIẾU RẠP\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link whitecolor\" href=\"\">\n                <i class=\"fa fa-bolt marl-10\"></i>\n                TV SHOW\n              </a>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </nav>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/samemovie/samemovie.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/samemovie/samemovie.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h4 class=\"caption flexbox-center-between\">\n  <span>\n    <i class=\"fa fa-plus-square marr-5 fs-19\"></i>\n    có thể bạn muốn xem\n  </span>\n</h4>\n<div class=\"flexbox-center-start\">\n  <div class=\"movie-item marr-4\" *ngFor=\"let eachmovie of movie\">\n    <label class=\"current-status\">{{eachmovie.status}}</label>\n    <a href=\"/detailmovie/{{eachmovie.id}}\" title=\"{{eachmovie.name}}\">\n      <img alt=\"Nhat da tan nuong\" src=\"./../../assets/image/{{eachmovie.name_image}}.jpg\" class=\"movie\">\n    </a>\n    <div class=\"title\">\n      <p class=\"name\">{{eachmovie.name}}</p>\n      <p class=\"real-name\">{{eachmovie.real_name}}</p>\n      <p class=\"whitecolor\">{{eachmovie.run_time}} phút</p>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/slidemovie/slidemovie.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/slidemovie/slidemovie.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<div class=\"frame mart-10\">\n  <div class=\"pad-10 fs-20 fw-700\" style=\"color:#d8ca00\">Diễn Viên</div>\n  <div class=\"khoi-slide\">\n    <div class=\"cac-slide\">\n      <div class=\"slide active flexbox-center-between\">\n        <div class=\"actor\">\n          <a routerLink=\"#\">\n            <div class=\"\">\n              <img class=\"img1\" src=\"./../../assets/image/duong.jpg\">\n              <div class=\"fs-16\" style=\"color:rgb(0, 70, 221)\">Name</div>\n              <div class=\"fs-14\" style=\"color:rgb(218, 218, 218)\">Real_Name</div>\n            </div>\n          </a>\n        </div>\n        <div class=\"actor\">\n          <a routerLink=\"#\">\n            <div class=\"\">\n              <img class=\"img1\" src=\"./../../assets/image/Bae-Suzy.jpg\">\n              <div class=\"fs-16\" style=\"color:rgb(206, 221, 0)\">Name</div>\n              <div class=\"fs-15\" style=\"color:rgb(218, 218, 218)\">Real_Name</div>\n            </div>\n          </a>\n        </div>\n        <div class=\"actor\">\n          <a routerLink=\"#\">\n            <div class=\"\">\n              <img class=\"img1\" src=\"./../../assets/image/-Lee-Jong-Suk-lee-jong-suk-39593106-456-810.jpg\">\n              <div class=\"fs-16\" style=\"color:rgb(206, 221, 0)\">Name</div>\n              <div class=\"fs-15\" style=\"color:rgb(218, 218, 218)\">Real_Name</div>\n            </div>\n          </a>\n        </div>\n        <div class=\"actor\">\n          <a routerLink=\"#\">\n            <div class=\"\">\n              <img class=\"img1\" src=\"./../../assets/image/4rmnKUGykuYKBDPsmypYKrklw64.jpg\">\n              <div class=\"fs-16\" style=\"color:rgb(206, 221, 0)\">Name</div>\n              <div class=\"fs-15\" style=\"color:rgb(218, 218, 218)\">Real_Name</div>\n            </div>\n          </a>\n        </div>\n        <div class=\"actor\">\n          <a routerLink=\"#\">\n            <div class=\"\">\n              <img class=\"img1\" src=\"./../../assets/image/Lee-Min-Ho-1.jpg\">\n              <div class=\"fs-16\" style=\"color:rgb(206, 221, 0)\">Name</div>\n              <div class=\"fs-15\" style=\"color:rgb(218, 218, 218)\">Real_Name</div>\n            </div>\n          </a>\n        </div>\n        <div class=\"actor\">\n          <a routerLink=\"#\">\n            <div class=\"\">\n              <img class=\"img1\" src=\"./../../assets/image/dich-le-nhiet-ba-la-ai-6.jpg\">\n              <div class=\"fs-16\" style=\"color:rgb(206, 221, 0)\">Name</div>\n              <div class=\"fs-15\" style=\"color:rgb(218, 218, 218)\">Real_Name</div>\n            </div>\n          </a>\n        </div>\n      </div>\n      <div class=\"slide flexbox-center-around\">\n        <div class=\"actor\">\n          <a routerLink=\"#\">\n            <div class=\"\">\n              <img class=\"img1\" src=\"./../../assets/image/07-1503378214986.jpg\">\n              <div class=\"fs-16\" style=\"color:rgb(206, 221, 0)\">Name</div>\n              <div class=\"fs-15\" style=\"color:rgb(218, 218, 218)\">Real_Name</div>\n            </div>\n          </a>\n        </div>\n        <div class=\"actor\">\n          <a routerLink=\"#\">\n            <div class=\"\">\n              <img class=\"img1\" src=\"./../../assets/image/1575819964-136-trinh-sang-8-1575258724-width643height960-1041.jpeg\">\n              <div class=\"fs-16\" style=\"color:rgb(206, 221, 0)\">Name</div>\n              <div class=\"fs-15\" style=\"color:rgb(218, 218, 218)\">Real_Name</div>\n            </div>\n          </a>\n        </div>\n        <div class=\"actor\">\n          <a routerLink=\"#\">\n            <div class=\"\">\n              <img class=\"img1\" src=\"./../../assets/image/6a6967a8543c1892ca68ebdb585ed465.jpg\">\n              <div class=\"fs-16\" style=\"color:rgb(206, 221, 0)\">Name</div>\n              <div class=\"fs-15\" style=\"color:rgb(218, 218, 218)\">Real_Name</div>\n            </div>\n          </a>\n        </div>\n        <div class=\"actor\">\n          <a routerLink=\"#\">\n            <div class=\"\">\n              <img class=\"img1\" src=\"./../../assets/image/duong-mich-30-1551631746897440917975.jpg\">\n              <div class=\"fs-16\" style=\"color:rgb(206, 221, 0)\">Name</div>\n              <div class=\"fs-15\" style=\"color:rgb(218, 218, 218)\">Real_Name</div>\n            </div>\n          </a>\n        </div>\n        <div class=\"actor\">\n          <a routerLink=\"#\">\n            <div class=\"\">\n              <img class=\"img1\" src=\"./../../assets/image/8d95d2f806b74250c94f7d8bab73b9d7.jpg\">\n              <div class=\"fs-16\" style=\"color:rgb(206, 221, 0)\">Name</div>\n              <div class=\"fs-15\" style=\"color:rgb(218, 218, 218)\">Real_Name</div>\n            </div>\n          </a>\n        </div>\n        <div class=\"actor\">\n          <a routerLink=\"#\">\n            <div class=\"\">\n              <img class=\"img1\" src=\"./../../assets/image/toc-nam-2-mai-lech-8-2.jpg\">\n              <div class=\"fs-16\" style=\"color:rgb(206, 221, 0)\">Name</div>\n              <div class=\"fs-15\" style=\"color:rgb(218, 218, 218)\">Real_Name</div>\n            </div>\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"nut-slide\">\n    <span id=\"btn-prev\"><i class=\"fas fa-backward\"></i></span>\n    <span id=\"btn-next\"><i class=\"fas fa-forward\"></i></span>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
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
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/admin/admin.component.scss":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".table {\n  position: relative;\n  z-index: 10000000;\n  color: white !important;\n  background-color: black;\n  margin-left: -200px;\n  margin-top: -260px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vRDpcXGRvd25ublxcYW5ndWxhcm1vdmllL3NyY1xcYXBwXFxhZG1pblxcYWRtaW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FkbWluL2FkbWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9hZG1pbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJsZXtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDoxMDAwMDAwMDtcclxuICBjb2xvcjp3aGl0ZSAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6YmxhY2s7XHJcbiAgbWFyZ2luLWxlZnQ6LTIwMHB4O1xyXG4gIG1hcmdpbi10b3A6LTI2MHB4O1xyXG59XHJcbiIsIi50YWJsZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTAwMDAwMDA7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgbWFyZ2luLWxlZnQ6IC0yMDBweDtcbiAgbWFyZ2luLXRvcDogLTI2MHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _movie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../movie.service */ "./src/app/movie.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");





let AdminComponent = class AdminComponent {
    constructor(movieService, fb, router, ngZone) {
        this.movieService = movieService;
        this.fb = fb;
        this.router = router;
        this.ngZone = ngZone;
        this.pager = {};
    }
    ngOnInit() {
        this.getAllMovie();
    }
    getAllMovie() {
        this.movieService.getAllMovie().subscribe((Movie) => {
            this.movies = Movie;
            this.setPage(1);
        });
    }
    delete(id) {
        console.log("delete");
        this.movieService.deleteMovie(id).subscribe((res) => {
            console.log('Movie successfully delete!');
            this.ngZone.run(() => this.router.navigateByUrl('/admin'));
        }, (error) => {
            console.log(error);
        });
    }
    setPage(page) {
        // get pager object from service
        this.pager = this.movieService.getPager(this.movies.length, page);
        // get current page of items
        this.pagedItems = this.movies.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }
};
AdminComponent.ctorParameters = () => [
    { type: _movie_service__WEBPACK_IMPORTED_MODULE_1__["MovieService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] }
];
AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-admin',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin.component.scss */ "./src/app/admin/admin.component.scss")).default]
    })
], AdminComponent);



/***/ }),

/***/ "./src/app/admin/create/create.component.scss":
/*!****************************************************!*\
  !*** ./src/app/admin/create/create.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NyZWF0ZS9jcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/admin/create/create.component.ts":
/*!**************************************************!*\
  !*** ./src/app/admin/create/create.component.ts ***!
  \**************************************************/
/*! exports provided: CreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateComponent", function() { return CreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");


 //Mỗi FormGroup chứa nhiều FormControll, mỗi FormControl lại điều khiển 1 trường của mình
let CreateComponent = class CreateComponent {
    constructor(formBuilder //formBuilder có thể tạo ra các FormControl
    ) {
        this.formBuilder = formBuilder;
        this.createForm();
    }
    ngOnInit() {
    }
    createForm() {
        this.movieFormGroup = this.formBuilder.group({
            name: ["Quyet Anh", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4)]],
            email: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    onSubmit() {
        console.log(this.movieFormGroup.value);
    }
};
CreateComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] //formBuilder có thể tạo ra các FormControl
     }
];
CreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/create/create.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./create.component.scss */ "./src/app/admin/create/create.component.scss")).default]
    })
], CreateComponent);



/***/ }),

/***/ "./src/app/admin/edit/edit.component.scss":
/*!************************************************!*\
  !*** ./src/app/admin/edit/edit.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card-body {\n  background: #000000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vZWRpdC9EOlxcZG93bm5uXFxhbmd1bGFybW92aWUvc3JjXFxhcHBcXGFkbWluXFxlZGl0XFxlZGl0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hZG1pbi9lZGl0L2VkaXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vZWRpdC9lZGl0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtYm9keXtcclxuICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xyXG59XHJcbiIsIi5jYXJkLWJvZHkge1xuICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/admin/edit/edit.component.ts":
/*!**********************************************!*\
  !*** ./src/app/admin/edit/edit.component.ts ***!
  \**********************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _movie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../movie.service */ "./src/app/movie.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");





let EditComponent = class EditComponent {
    constructor(movieService, fb, actRoute, router) {
        this.movieService = movieService;
        this.fb = fb;
        this.actRoute = actRoute;
        this.router = router;
        this.Genre = ["phim hành động", "phim viễn tưởng", "phim chiến tranh", "phim võ thuật", "phim hài hước"];
    }
    ngOnInit() {
        this.updateMovie();
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.getMovie(id);
    }
    updateMovie() {
        this.editForm = this.fb.group({
            id: [''],
            name: [''],
            genre: [''],
        });
    }
    getMovie(id) {
        this.movieService.getMovieFromId(id).subscribe(data => {
            console.log(data);
            this.editForm.setValue({
                id: data['id'],
                name: data['name'],
                genre: data['genre'],
            });
        });
        console.log(id);
        console.log(name);
    }
    onSubmit() {
        if (window.confirm('Are you sure?')) {
            let id = this.actRoute.snapshot.paramMap.get('id');
            this.movieService.updateMovie(id, this.editForm.value)
                .subscribe(res => {
                this.router.navigateByUrl('/admin');
                console.log('Content updated successfully!');
            }, (error) => {
                console.log(error);
            });
        }
    }
};
EditComponent.ctorParameters = () => [
    { type: _movie_service__WEBPACK_IMPORTED_MODULE_2__["MovieService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
EditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/edit/edit.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit.component.scss */ "./src/app/admin/edit/edit.component.scss")).default]
    })
], EditComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _content_index_index_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./content/index/index.component */ "./src/app/content/index/index.component.ts");
/* harmony import */ var _content_detailmovie_detailmovie_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./content/detailmovie/detailmovie.component */ "./src/app/content/detailmovie/detailmovie.component.ts");
/* harmony import */ var _content_allmovie_allmovie_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./content/allmovie/allmovie.component */ "./src/app/content/allmovie/allmovie.component.ts");
/* harmony import */ var _admin_edit_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin/edit/edit.component */ "./src/app/admin/edit/edit.component.ts");
/* harmony import */ var _admin_create_create_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin/create/create.component */ "./src/app/admin/create/create.component.ts");
/* harmony import */ var _content_watchmovie_watchmovie_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./content/watchmovie/watchmovie.component */ "./src/app/content/watchmovie/watchmovie.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");










const routes = [
    { path: '', redirectTo: '/movie', pathMatch: 'full' },
    { path: 'movie', component: _content_index_index_component__WEBPACK_IMPORTED_MODULE_3__["IndexComponent"] },
    { path: 'admin', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_9__["AdminComponent"] },
    { path: 'detailmovie/:id', component: _content_detailmovie_detailmovie_component__WEBPACK_IMPORTED_MODULE_4__["DetailmovieComponent"] },
    { path: 'edit/:id', component: _admin_edit_edit_component__WEBPACK_IMPORTED_MODULE_6__["EditComponent"] },
    { path: 'create', component: _admin_create_create_component__WEBPACK_IMPORTED_MODULE_7__["CreateComponent"] },
    { path: 'movietype/:type', component: _content_allmovie_allmovie_component__WEBPACK_IMPORTED_MODULE_5__["AllmovieComponent"] },
    { path: 'search/:type', component: _content_allmovie_allmovie_component__WEBPACK_IMPORTED_MODULE_5__["AllmovieComponent"] },
    { path: 'movietype/:type/2019', component: _content_allmovie_allmovie_component__WEBPACK_IMPORTED_MODULE_5__["AllmovieComponent"] },
    { path: 'watchmovie/:id', component: _content_watchmovie_watchmovie_component__WEBPACK_IMPORTED_MODULE_8__["WatchmovieComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#btn-returnToTop {\n  position: fixed;\n  bottom: 40px;\n  right: 12px;\n  display: none;\n  z-index: 1;\n}\n\n.show {\n  display: block !important;\n}\n\n.hide {\n  display: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXGRvd25ublxcYW5ndWxhcm1vdmllL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtBQ0NGOztBREVBO0VBQ0Usd0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNidG4tcmV0dXJuVG9Ub3B7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogNDBweDtcclxuICByaWdodDogMTJweDtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi5zaG93IHtcclxuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaGlkZSB7XHJcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuXHJcbiIsIiNidG4tcmV0dXJuVG9Ub3Age1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogNDBweDtcbiAgcmlnaHQ6IDEycHg7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5zaG93IHtcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbn1cblxuLmhpZGUge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let AppComponent = class AppComponent {
    constructor() {
        this.title = 'angularmovie';
    }
    scrollTop() {
        window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
    }
    scrollHandler(event) {
        const height = window.scrollY;
        const el = document.getElementById('btn-returnToTop');
        height >= 500 ? el.className = 'show' : el.className = 'hide';
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:scroll', ['$event'])
], AppComponent.prototype, "scrollHandler", null);
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm2015/a11y.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm2015/drag-drop.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm2015/portal.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm2015/scrolling.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/esm2015/stepper.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm2015/table.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm2015/tree.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm2015/autocomplete.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm2015/badge.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/esm2015/bottom-sheet.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm2015/button-toggle.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm2015/checkbox.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm2015/chips.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm2015/stepper.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm2015/datepicker.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm2015/divider.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm2015/expansion.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm2015/grid-list.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm2015/progress-bar.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm2015/progress-spinner.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm2015/radio.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm2015/slider.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm2015/slide-toggle.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/esm2015/tree.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _content_content_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./content/content.component */ "./src/app/content/content.component.ts");
/* harmony import */ var _header_menu_menu_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./header/menu/menu.component */ "./src/app/header/menu/menu.component.ts");
/* harmony import */ var _content_detailmovie_detailmovie_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./content/detailmovie/detailmovie.component */ "./src/app/content/detailmovie/detailmovie.component.ts");
/* harmony import */ var _content_watchmovie_watchmovie_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./content/watchmovie/watchmovie.component */ "./src/app/content/watchmovie/watchmovie.component.ts");
/* harmony import */ var _content_index_index_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./content/index/index.component */ "./src/app/content/index/index.component.ts");
/* harmony import */ var _content_allmovie_allmovie_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./content/allmovie/allmovie.component */ "./src/app/content/allmovie/allmovie.component.ts");
/* harmony import */ var _admin_edit_edit_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./admin/edit/edit.component */ "./src/app/admin/edit/edit.component.ts");
/* harmony import */ var _admin_create_create_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./admin/create/create.component */ "./src/app/admin/create/create.component.ts");
/* harmony import */ var _content_index_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./content/index/carousel/carousel.component */ "./src/app/content/index/carousel/carousel.component.ts");
/* harmony import */ var _samemovie_samemovie_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./samemovie/samemovie.component */ "./src/app/samemovie/samemovie.component.ts");
/* harmony import */ var _slidemovie_slidemovie_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./slidemovie/slidemovie.component */ "./src/app/slidemovie/slidemovie.component.ts");
/* harmony import */ var _movie_service__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./movie.service */ "./src/app/movie.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");

































































let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_47__["HeaderComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_48__["FooterComponent"],
            _content_content_component__WEBPACK_IMPORTED_MODULE_49__["ContentComponent"],
            _header_menu_menu_component__WEBPACK_IMPORTED_MODULE_50__["MenuComponent"],
            _content_detailmovie_detailmovie_component__WEBPACK_IMPORTED_MODULE_51__["DetailmovieComponent"],
            _content_index_index_component__WEBPACK_IMPORTED_MODULE_53__["IndexComponent"],
            _content_watchmovie_watchmovie_component__WEBPACK_IMPORTED_MODULE_52__["WatchmovieComponent"],
            _content_index_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_57__["CarouselComponent"],
            _samemovie_samemovie_component__WEBPACK_IMPORTED_MODULE_58__["SamemovieComponent"],
            _content_allmovie_allmovie_component__WEBPACK_IMPORTED_MODULE_54__["AllmovieComponent"],
            _slidemovie_slidemovie_component__WEBPACK_IMPORTED_MODULE_59__["SlidemovieComponent"],
            _admin_admin_component__WEBPACK_IMPORTED_MODULE_63__["AdminComponent"],
            _admin_edit_edit_component__WEBPACK_IMPORTED_MODULE_55__["EditComponent"],
            _admin_create_create_component__WEBPACK_IMPORTED_MODULE_56__["CreateComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["A11yModule"],
            _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_10__["CdkStepperModule"],
            _angular_cdk_table__WEBPACK_IMPORTED_MODULE_11__["CdkTableModule"],
            _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_12__["CdkTreeModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__["DragDropModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__["MatAutocompleteModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_14__["MatBadgeModule"],
            _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_15__["MatBottomSheetModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButtonModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_17__["MatButtonToggleModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCardModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__["MatCheckboxModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_20__["MatChipsModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_21__["MatStepperModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_22__["MatDatepickerModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__["MatDialogModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_24__["MatDividerModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_25__["MatExpansionModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_26__["MatGridListModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__["MatIconModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_28__["MatInputModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_29__["MatListModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_30__["MatMenuModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_31__["MatNativeDateModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_32__["MatPaginatorModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_33__["MatProgressBarModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_34__["MatProgressSpinnerModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_35__["MatRadioModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_31__["MatRippleModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_36__["MatSelectModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_37__["MatSidenavModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_38__["MatSliderModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_39__["MatSlideToggleModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_40__["MatSnackBarModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_41__["MatSortModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_42__["MatTableModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_43__["MatTabsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_44__["MatToolbarModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_45__["MatTooltipModule"],
            _angular_material_tree__WEBPACK_IMPORTED_MODULE_46__["MatTreeModule"],
            _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_8__["PortalModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_9__["ScrollingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_61__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_62__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_62__["FormsModule"]
        ],
        providers: [
            _movie_service__WEBPACK_IMPORTED_MODULE_60__["MovieService"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/content/allmovie/allmovie.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/content/allmovie/allmovie.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".caption span {\n  text-transform: uppercase;\n  border-bottom: dashed 2px #000000;\n}\n\n.caption span {\n  font-size: 22px;\n  font-weight: 600;\n  color: #d8ca00 !important;\n}\n\n.movie-item {\n  width: 24.4%;\n  position: relative;\n  background-color: #141313;\n  margin-bottom: 30px;\n  padding: 2px;\n  margin-right: 4.6px;\n}\n\n.current-status {\n  position: absolute;\n  color: white;\n  font-size: 13px;\n  font-weight: 700;\n  left: 11px;\n  top: 8px;\n  background-color: #ac0d0d;\n  padding: 3px 5px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  max-width: 55%;\n  z-index: 100;\n}\n\n.movie {\n  width: 100%;\n  height: 260px;\n  border: 1px solid #131111;\n  margin-bottom: 10px;\n}\n\n.title {\n  overflow: hidden;\n}\n\np {\n  margin-bottom: 2px !important;\n  padding-left: 5px;\n}\n\n.name {\n  font-weight: 700;\n  color: #585ad4;\n  font-size: 15px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n\n.real-name {\n  font-size: 14px;\n  color: #d3c500;\n  font-weight: 400;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n\n.page-link {\n  background: #111010 !important;\n  border: none !important;\n  outline: none !important;\n  cursor: pointer !important;\n}\n\n.page-item.active .page-link {\n  z-index: 1 !important;\n  color: black !important;\n  background-color: #dfdfdf !important;\n}\n\n.border.disabled {\n  border: 1px solid #353434 !important;\n}\n\n.border {\n  border: 1px solid #afafaf !important;\n}\n\n.page-item:first-child .page-link {\n  border-top-left-radius: 0 !important;\n  border-bottom-left-radius: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGVudC9hbGxtb3ZpZS9EOlxcZG93bm5uXFxhbmd1bGFybW92aWUvc3JjXFxhcHBcXGNvbnRlbnRcXGFsbG1vdmllXFxhbGxtb3ZpZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29udGVudC9hbGxtb3ZpZS9hbGxtb3ZpZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLHlCQUFBO0VBQ0EsaUNBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FDQUY7O0FER0E7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDQUY7O0FER0E7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQ0FGOztBREdBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FDQUY7O0FER0E7RUFDRSxnQkFBQTtBQ0FGOztBREdBO0VBQ0UsNkJBQUE7RUFDQSxpQkFBQTtBQ0FGOztBREdBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQ0FGOztBREdBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQ0FGOztBREdBO0VBQ0UsOEJBQUE7RUFDQSx1QkFBQTtFQUNBLHdCQUFBO0VBQ0EsMEJBQUE7QUNBRjs7QURHQTtFQUNFLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQ0FBQTtBQ0FGOztBREdBO0VBQ0Usb0NBQUE7QUNBRjs7QURPQTtFQUNFLG9DQUFBO0FDSkY7O0FET0E7RUFDRSxvQ0FBQTtFQUNBLHVDQUFBO0FDSkYiLCJmaWxlIjoic3JjL2FwcC9jb250ZW50L2FsbG1vdmllL2FsbG1vdmllLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5jYXB0aW9uIHNwYW57XHJcbiAgdGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO1xyXG4gIGJvcmRlci1ib3R0b206ZGFzaGVkIDJweCAjMDAwMDAwO1xyXG59XHJcblxyXG4uY2FwdGlvbiBzcGFue1xyXG4gIGZvbnQtc2l6ZToyMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OjYwMDtcclxuICBjb2xvcjojZDhjYTAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tb3ZpZS1pdGVte1xyXG4gIHdpZHRoOjI0LjQlO1xyXG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IzE0MTMxMztcclxuICBtYXJnaW4tYm90dG9tOjMwcHg7XHJcbiAgcGFkZGluZzoycHg7XHJcbiAgbWFyZ2luLXJpZ2h0OjQuNnB4O1xyXG59XHJcblxyXG4uY3VycmVudC1zdGF0dXN7XHJcbiAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgY29sb3I6d2hpdGU7XHJcbiAgZm9udC1zaXplOjEzcHg7XHJcbiAgZm9udC13ZWlnaHQ6NzAwO1xyXG4gIGxlZnQ6MTFweDtcclxuICB0b3A6OHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6I2FjMGQwZDtcclxuICBwYWRkaW5nOjNweCA1cHg7XHJcbiAgd2hpdGUtc3BhY2U6bm93cmFwO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIG92ZXJmbG93OmhpZGRlbjtcclxuICBtYXgtd2lkdGg6NTUlO1xyXG4gIHotaW5kZXg6MTAwO1xyXG59XHJcblxyXG4ubW92aWV7XHJcbiAgd2lkdGg6MTAwJTtcclxuICBoZWlnaHQ6MjYwcHg7XHJcbiAgYm9yZGVyOjFweCBzb2xpZCAjMTMxMTExO1xyXG4gIG1hcmdpbi1ib3R0b206MTBweDtcclxufVxyXG5cclxuLnRpdGxle1xyXG4gIG92ZXJmbG93OmhpZGRlbjtcclxufVxyXG5cclxucHtcclxuICBtYXJnaW4tYm90dG9tOjJweCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmctbGVmdDo1cHg7XHJcbn1cclxuXHJcbi5uYW1le1xyXG4gIGZvbnQtd2VpZ2h0OjcwMDtcclxuICBjb2xvcjojNTg1YWQ0O1xyXG4gIGZvbnQtc2l6ZToxNXB4O1xyXG4gIHdoaXRlLXNwYWNlOm5vd3JhcDtcclxuICB0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO1xyXG4gIG92ZXJmbG93OmhpZGRlbjtcclxufVxyXG5cclxuLnJlYWwtbmFtZXtcclxuICBmb250LXNpemU6MTRweDtcclxuICBjb2xvcjpyZ2IoMjExLCAxOTcsIDApO1xyXG4gIGZvbnQtd2VpZ2h0OjQwMDtcclxuICB3aGl0ZS1zcGFjZTpub3dyYXA7XHJcbiAgdGV4dC1vdmVyZmxvdzplbGxpcHNpcztcclxuICBvdmVyZmxvdzpoaWRkZW47XHJcbn1cclxuXHJcbi5wYWdlLWxpbmt7XHJcbiAgYmFja2dyb3VuZDojMTExMDEwICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyOm5vbmUgIWltcG9ydGFudDtcclxuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgY3Vyc29yOnBvaW50ZXIgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnBhZ2UtaXRlbS5hY3RpdmUgLnBhZ2UtbGluayB7XHJcbiAgei1pbmRleDogMSFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IHJnYigwLCAwLCAwKSFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RmZGZkZiFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5ib3JkZXIuZGlzYWJsZWR7XHJcbiAgYm9yZGVyOjFweCBzb2xpZCAjMzUzNDM0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8vIC5wYWdlLWl0ZW0uZGlzYWJsZWQgLnBhZ2UtbGluayB7XHJcbi8vICAgZm9udC1zaXplOjExcHggIWltcG9ydGFudDtcclxuLy8gfVxyXG5cclxuLmJvcmRlcntcclxuICBib3JkZXI6MXB4IHNvbGlkICNhZmFmYWYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnBhZ2UtaXRlbTpmaXJzdC1jaGlsZCAucGFnZS1saW5rIHtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMCAhaW1wb3J0YW50O1xyXG59XHJcbiIsIi5jYXB0aW9uIHNwYW4ge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBib3JkZXItYm90dG9tOiBkYXNoZWQgMnB4ICMwMDAwMDA7XG59XG5cbi5jYXB0aW9uIHNwYW4ge1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjZDhjYTAwICFpbXBvcnRhbnQ7XG59XG5cbi5tb3ZpZS1pdGVtIHtcbiAgd2lkdGg6IDI0LjQlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNDEzMTM7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIHBhZGRpbmc6IDJweDtcbiAgbWFyZ2luLXJpZ2h0OiA0LjZweDtcbn1cblxuLmN1cnJlbnQtc3RhdHVzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGVmdDogMTFweDtcbiAgdG9wOiA4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhYzBkMGQ7XG4gIHBhZGRpbmc6IDNweCA1cHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXgtd2lkdGg6IDU1JTtcbiAgei1pbmRleDogMTAwO1xufVxuXG4ubW92aWUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyNjBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzEzMTExMTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLnRpdGxlIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxucCB7XG4gIG1hcmdpbi1ib3R0b206IDJweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbn1cblxuLm5hbWUge1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogIzU4NWFkNDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnJlYWwtbmFtZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICNkM2M1MDA7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ucGFnZS1saW5rIHtcbiAgYmFja2dyb3VuZDogIzExMTAxMCAhaW1wb3J0YW50O1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xuICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcbn1cblxuLnBhZ2UtaXRlbS5hY3RpdmUgLnBhZ2UtbGluayB7XG4gIHotaW5kZXg6IDEgIWltcG9ydGFudDtcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZmRmZGYgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci5kaXNhYmxlZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzNTM0MzQgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNhZmFmYWYgIWltcG9ydGFudDtcbn1cblxuLnBhZ2UtaXRlbTpmaXJzdC1jaGlsZCAucGFnZS1saW5rIHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMCAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/content/allmovie/allmovie.component.ts":
/*!********************************************************!*\
  !*** ./src/app/content/allmovie/allmovie.component.ts ***!
  \********************************************************/
/*! exports provided: AllmovieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllmovieComponent", function() { return AllmovieComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _movie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../movie.service */ "./src/app/movie.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");





let AllmovieComponent = class AllmovieComponent {
    constructor(movieService, route, location) {
        this.movieService = movieService;
        this.route = route;
        this.location = location;
        this.pager = {};
    }
    ngOnInit() {
        this.getType();
        this.getSearchMovie();
        this.getTypeYear();
    }
    getType() {
        this.route.paramMap.subscribe((params) => {
            const type = params.get('type');
            this.type = type;
            this.movieService.getMovieFromType(type).subscribe((movie) => {
                // console.log(movie);
                // this.movieType = movie;
                this.movies = movie;
                this.setPage(1);
            });
        });
    }
    getSearchMovie() {
        this.route.paramMap.subscribe((params) => {
            const type = params.get('type');
            this.type = type;
            console.log(this.type);
            this.movieService.getMovieFromSearch(type).subscribe((movie) => {
                this.movies = movie;
                this.setPage(1);
            });
        });
    }
    getTypeYear() {
        this.route.paramMap.subscribe((params) => {
            const type = params.get('type');
            this.type = type;
            this.movieService.getMovieFromTypeYear(type).subscribe((movie) => {
                console.log("movie");
                // this.movieType = movie;
                this.movies = movie;
                this.setPage(1);
            });
        });
    }
    goBack() {
        this.location.back();
    }
    setPage(page) {
        // get pager object from service
        this.pager = this.movieService.getPager(this.movies.length, page);
        // get current page of items
        this.pagedItems = this.movies.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }
};
AllmovieComponent.ctorParameters = () => [
    { type: _movie_service__WEBPACK_IMPORTED_MODULE_2__["MovieService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] }
];
AllmovieComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-allmovie',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./allmovie.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/allmovie/allmovie.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./allmovie.component.scss */ "./src/app/content/allmovie/allmovie.component.scss")).default]
    })
], AllmovieComponent);



/***/ }),

/***/ "./src/app/content/content.component.scss":
/*!************************************************!*\
  !*** ./src/app/content/content.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".ad {\n  width: 50%;\n}\n\n.left-content {\n  width: 768px;\n}\n\n.right-content .caption {\n  text-align: center;\n  padding-bottom: 3px;\n  color: #73ff00;\n  font-size: 20px;\n  border-bottom: 2px dashed #0e0c0c;\n  margin-bottom: 10px;\n}\n\n.right-content .caption a {\n  font-size: 20px;\n}\n\n.caption span {\n  text-shadow: 1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue;\n}\n\n.list-movie {\n  width: 100%;\n  height: 80px;\n}\n\n.item-list-movie {\n  border-bottom: 1px solid #0f0c0c;\n  padding: 5px 5px 5px 0px;\n  background-color: #141313 !important;\n  padding: 10px;\n}\n\n.phim {\n  max-width: 100%;\n  max-height: 400px;\n  -webkit-overflow-scrolling: touch;\n  overflow: auto;\n}\n\n.img-list-movie {\n  width: 60px;\n  height: 60px;\n  border: 1px solid white;\n}\n\n.fa-caret-left {\n  font-size: 35px !important;\n  color: #ebe1e1;\n}\n\n.text-tag {\n  padding: 3px 7px 3px 0px;\n  background-color: #ebe1e1;\n  margin-left: -2px;\n  font-size: 11px;\n  border-radius: 0px 3px 3px 0px;\n}\n\n.tag:hover {\n  opacity: 0.5;\n}\n\n.right-content {\n  width: 312px;\n}\n\np {\n  margin-bottom: 2px !important;\n  padding-left: 5px;\n}\n\n.name {\n  font-weight: 700;\n  color: #585ad4;\n  font-size: 15px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n\n.overflow p {\n  width: 200px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n\n.real-name {\n  font-size: 14px;\n  color: #d3c500;\n  font-weight: 400;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n\n.adver1 {\n  position: absolute;\n  top: 0px;\n  left: 25px;\n}\n\n.adver2 {\n  position: absolute;\n  top: 0px;\n  right: 25px;\n}\n\n.fixed {\n  position: fixed;\n  top: 45px;\n  z-index: 10000;\n}\n\n.actor {\n  color: #d8ca00;\n}\n\n.actor img {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGVudC9EOlxcZG93bm5uXFxhbmd1bGFybW92aWUvc3JjXFxhcHBcXGNvbnRlbnRcXGNvbnRlbnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbnRlbnQvY29udGVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlDQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7QUNDRjs7QURFQTtFQUNFLCtEQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsZ0NBQUE7RUFDQSx3QkFBQTtFQUNBLG9DQUFBO0VBQ0EsYUFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUNBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRSwwQkFBQTtFQUNBLGNBQUE7QUNDRjs7QURFQTtFQUNFLHdCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0UsNkJBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jb250ZW50L2NvbnRlbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWR7XHJcbiAgd2lkdGg6NTAlO1xyXG59XHJcblxyXG4ubGVmdC1jb250ZW50e1xyXG4gIHdpZHRoOjc2OHB4O1xyXG59XHJcblxyXG4ucmlnaHQtY29udGVudCAuY2FwdGlvbntcclxuICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICBwYWRkaW5nLWJvdHRvbTozcHg7XHJcbiAgY29sb3I6IzczZmYwMDtcclxuICBmb250LXNpemU6MjBweDtcclxuICBib3JkZXItYm90dG9tOjJweCBkYXNoZWQgIzBlMGMwYztcclxuICBtYXJnaW4tYm90dG9tOjEwcHg7XHJcbn1cclxuXHJcbi5yaWdodC1jb250ZW50IC5jYXB0aW9uIGF7XHJcbiAgZm9udC1zaXplOjIwcHg7XHJcbn1cclxuXHJcbi5jYXB0aW9uIHNwYW57XHJcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMnB4IGJsYWNrLCAwIDAgMjVweCBibHVlLCAwIDAgNXB4IGRhcmtibHVlO1xyXG59XHJcblxyXG4ubGlzdC1tb3ZpZXtcclxuICB3aWR0aDoxMDAlO1xyXG4gIGhlaWdodDo4MHB4O1xyXG59XHJcblxyXG4uaXRlbS1saXN0LW1vdmlle1xyXG4gIGJvcmRlci1ib3R0b206MXB4IHNvbGlkICMwZjBjMGM7XHJcbiAgcGFkZGluZzo1cHggNXB4IDVweCAwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjojMTQxMzEzICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZzoxMHB4O1xyXG59XHJcblxyXG4ucGhpbXtcclxuICBtYXgtd2lkdGg6MTAwJTtcclxuICBtYXgtaGVpZ2h0OjQwMHB4O1xyXG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOnRvdWNoO1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG4uaW1nLWxpc3QtbW92aWV7XHJcbiAgd2lkdGg6NjBweDtcclxuICBoZWlnaHQ6NjBweDtcclxuICBib3JkZXI6MXB4IHNvbGlkIHdoaXRlO1xyXG59XHJcblxyXG4uZmEtY2FyZXQtbGVmdHtcclxuICBmb250LXNpemU6MzVweCAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiByZ2IoMjM1LCAyMjUsIDIyNSk7XHJcbn1cclxuXHJcbi50ZXh0LXRhZ3tcclxuICBwYWRkaW5nOjNweCA3cHggM3B4IDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM1LCAyMjUsIDIyNSk7XHJcbiAgbWFyZ2luLWxlZnQ6LTJweDtcclxuICBmb250LXNpemU6MTFweDtcclxuICBib3JkZXItcmFkaXVzOjBweCAzcHggM3B4IDBweDtcclxufVxyXG5cclxuLnRhZzpob3ZlcntcclxuICBvcGFjaXR5OjAuNTtcclxufVxyXG5cclxuLnJpZ2h0LWNvbnRlbnR7XHJcbiAgd2lkdGg6MzEycHg7XHJcbn1cclxuXHJcbnB7XHJcbiAgbWFyZ2luLWJvdHRvbToycHggIWltcG9ydGFudDtcclxuICBwYWRkaW5nLWxlZnQ6NXB4O1xyXG59XHJcblxyXG4ubmFtZXtcclxuICBmb250LXdlaWdodDo3MDA7XHJcbiAgY29sb3I6IzU4NWFkNDtcclxuICBmb250LXNpemU6MTVweDtcclxuICB3aGl0ZS1zcGFjZTpub3dyYXA7XHJcbiAgdGV4dC1vdmVyZmxvdzplbGxpcHNpcztcclxuICBvdmVyZmxvdzpoaWRkZW47XHJcbn1cclxuXHJcbi5vdmVyZmxvdyBwe1xyXG4gIHdpZHRoOjIwMHB4O1xyXG4gIHdoaXRlLXNwYWNlOm5vd3JhcDtcclxuICB0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO1xyXG4gIG92ZXJmbG93OmhpZGRlbjtcclxufVxyXG5cclxuLnJlYWwtbmFtZXtcclxuICBmb250LXNpemU6MTRweDtcclxuICBjb2xvcjojZDNjNTAwO1xyXG4gIGZvbnQtd2VpZ2h0OjQwMDtcclxuICB3aGl0ZS1zcGFjZTpub3dyYXA7XHJcbiAgdGV4dC1vdmVyZmxvdzplbGxpcHNpcztcclxuICBvdmVyZmxvdzpoaWRkZW47XHJcbn1cclxuXHJcbi5hZHZlcjF7XHJcbiAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgdG9wOjBweDtcclxuICBsZWZ0OjI1cHg7XHJcbn1cclxuXHJcbi5hZHZlcjJ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlOztcclxuICB0b3A6MHB4O1xyXG4gIHJpZ2h0OjI1cHg7XHJcbn1cclxuXHJcbi5maXhlZHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiA0NXB4O1xyXG4gIHotaW5kZXg6IDEwMDAwO1xyXG59XHJcblxyXG4uYWN0b3J7XHJcbiAgY29sb3I6I2Q4Y2EwMDtcclxufVxyXG5cclxuLmFjdG9yIGltZ3tcclxuICB3aWR0aDoxMDAlO1xyXG59XHJcbiIsIi5hZCB7XG4gIHdpZHRoOiA1MCU7XG59XG5cbi5sZWZ0LWNvbnRlbnQge1xuICB3aWR0aDogNzY4cHg7XG59XG5cbi5yaWdodC1jb250ZW50IC5jYXB0aW9uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLWJvdHRvbTogM3B4O1xuICBjb2xvcjogIzczZmYwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBib3JkZXItYm90dG9tOiAycHggZGFzaGVkICMwZTBjMGM7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5yaWdodC1jb250ZW50IC5jYXB0aW9uIGEge1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5jYXB0aW9uIHNwYW4ge1xuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAycHggYmxhY2ssIDAgMCAyNXB4IGJsdWUsIDAgMCA1cHggZGFya2JsdWU7XG59XG5cbi5saXN0LW1vdmllIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogODBweDtcbn1cblxuLml0ZW0tbGlzdC1tb3ZpZSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMGYwYzBjO1xuICBwYWRkaW5nOiA1cHggNXB4IDVweCAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNDEzMTMgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLnBoaW0ge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDQwMHB4O1xuICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4uaW1nLWxpc3QtbW92aWUge1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbn1cblxuLmZhLWNhcmV0LWxlZnQge1xuICBmb250LXNpemU6IDM1cHggIWltcG9ydGFudDtcbiAgY29sb3I6ICNlYmUxZTE7XG59XG5cbi50ZXh0LXRhZyB7XG4gIHBhZGRpbmc6IDNweCA3cHggM3B4IDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ViZTFlMTtcbiAgbWFyZ2luLWxlZnQ6IC0ycHg7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDNweCAzcHggMHB4O1xufVxuXG4udGFnOmhvdmVyIHtcbiAgb3BhY2l0eTogMC41O1xufVxuXG4ucmlnaHQtY29udGVudCB7XG4gIHdpZHRoOiAzMTJweDtcbn1cblxucCB7XG4gIG1hcmdpbi1ib3R0b206IDJweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbn1cblxuLm5hbWUge1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogIzU4NWFkNDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLm92ZXJmbG93IHAge1xuICB3aWR0aDogMjAwcHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ucmVhbC1uYW1lIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogI2QzYzUwMDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5hZHZlcjEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICBsZWZ0OiAyNXB4O1xufVxuXG4uYWR2ZXIyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgcmlnaHQ6IDI1cHg7XG59XG5cbi5maXhlZCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA0NXB4O1xuICB6LWluZGV4OiAxMDAwMDtcbn1cblxuLmFjdG9yIHtcbiAgY29sb3I6ICNkOGNhMDA7XG59XG5cbi5hY3RvciBpbWcge1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/content/content.component.ts":
/*!**********************************************!*\
  !*** ./src/app/content/content.component.ts ***!
  \**********************************************/
/*! exports provided: ContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentComponent", function() { return ContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _movie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../movie.service */ "./src/app/movie.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let ContentComponent = class ContentComponent {
    constructor(movieService, ngZone, router) {
        this.movieService = movieService;
        this.ngZone = ngZone;
        this.router = router;
    }
    ngOnInit() {
        this.get10Moviebo();
        this.get10Moviele();
    }
    get10Moviebo() {
        this.movieService.get10Moviebo().subscribe((Movie) => {
            this.moviebo = Movie;
        });
    }
    get10Moviele() {
        this.movieService.get10Moviele().subscribe((Movie) => {
            this.moviele = Movie;
        });
    }
};
ContentComponent.ctorParameters = () => [
    { type: _movie_service__WEBPACK_IMPORTED_MODULE_2__["MovieService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
ContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-content',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./content.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/content.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./content.component.scss */ "./src/app/content/content.component.scss")).default]
    })
], ContentComponent);



/***/ }),

/***/ "./src/app/content/detailmovie/detailmovie.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/content/detailmovie/detailmovie.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".poster {\n  position: relative;\n  border: 1px solid white;\n}\n\na:hover {\n  opacity: 1 !important;\n}\n\n.xemphim {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  height: 70px;\n  background-color: rgba(0, 0, 0, 0.219);\n}\n\n.actor {\n  width: 400px;\n  white-space: wrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n\n.genre {\n  width: 450px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n\n.button {\n  background-color: #d30700;\n  padding: 5px;\n  position: absolute;\n  font-weight: 700;\n  text-shadow: black -1px -2px 0.5em;\n}\n\n.button:hover {\n  border: 1px solid #FFFFFF;\n}\n\n.fa-play-circle-o {\n  font-size: 25px !important;\n  color: #FFFFFF;\n}\n\n.name-movie {\n  color: #0094fc;\n  font-weight: 700;\n  text-shadow: blue -1px -2px 0.5em;\n  white-space: wrap;\n  width: 450px;\n}\n\n.category {\n  white-space: wrap;\n  width: 450px;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n\n.status {\n  color: #cac300;\n  font-weight: 700;\n}\n\n.info {\n  max-width: 100%;\n  max-height: 179px;\n  -webkit-overflow-scrolling: touch;\n  overflow: auto;\n}\n\n.movie-info {\n  max-width: 300px;\n}\n\n.underline {\n  border-bottom: 2px solid #000000;\n}\n\n.rate {\n  color: #fff601;\n  font-size: 25px;\n  font-weight: 700;\n  padding: 10px;\n  background-color: #404040;\n}\n\np {\n  margin-bottom: 0px !important;\n  line-height: 23.14px !important;\n}\n\n.caption span {\n  text-transform: uppercase;\n  border-bottom: dashed 2px #000000;\n  text-shadow: 1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue;\n}\n\n.caption span {\n  font-size: 22px;\n  font-weight: 600;\n  color: #73ff00;\n}\n\n.caption a:hover {\n  color: white !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGVudC9kZXRhaWxtb3ZpZS9EOlxcZG93bm5uXFxhbmd1bGFybW92aWUvc3JjXFxhcHBcXGNvbnRlbnRcXGRldGFpbG1vdmllXFxkZXRhaWxtb3ZpZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29udGVudC9kZXRhaWxtb3ZpZS9kZXRhaWxtb3ZpZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsdUJBQUE7QUNDRjs7QURFQTtFQUNFLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxzQ0FBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQ0NGOztBRFNBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtDQUFBO0FDTkY7O0FEU0E7RUFFRSx5QkFBQTtBQ1BGOztBRFVBO0VBQ0UsMEJBQUE7RUFDQSxjQUFBO0FDUEY7O0FEVUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ1BGOztBRFVBO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQ1BGOztBRFVBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FDUEY7O0FEVUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQ0FBQTtFQUNBLGNBQUE7QUNQRjs7QURVQTtFQUNFLGdCQUFBO0FDUEY7O0FEVUE7RUFDRSxnQ0FBQTtBQ1BGOztBRFVBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtBQ1BGOztBRFVBO0VBQ0UsNkJBQUE7RUFDQSwrQkFBQTtBQ1BGOztBRFVBO0VBQ0UseUJBQUE7RUFDQSxpQ0FBQTtFQUNBLCtEQUFBO0FDUEY7O0FEVUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDUEY7O0FEVUE7RUFDRSx1QkFBQTtBQ1BGIiwiZmlsZSI6InNyYy9hcHAvY29udGVudC9kZXRhaWxtb3ZpZS9kZXRhaWxtb3ZpZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wb3N0ZXJ7XHJcbiAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgYm9yZGVyOjFweCBzb2xpZCB3aGl0ZTtcclxufVxyXG5cclxuYTpob3ZlcntcclxuICBvcGFjaXR5OjEgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnhlbXBoaW17XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTowO1xyXG4gIHJpZ2h0OjA7XHJcbiAgbGVmdDowO1xyXG4gIGhlaWdodDo3MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6cmdiYSgwLCAwLCAwLCAwLjIxOSk7XHJcbn1cclxuXHJcbi5hY3RvcntcclxuICB3aWR0aDo0MDBweDtcclxuICB3aGl0ZS1zcGFjZTp3cmFwO1xyXG4gIHRleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7XHJcbiAgb3ZlcmZsb3c6aGlkZGVuO1xyXG59XHJcblxyXG4uZ2VucmV7XHJcbiAgd2lkdGg6NDUwcHg7XHJcbiAgd2hpdGUtc3BhY2U6bm93cmFwO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIG92ZXJmbG93OmhpZGRlbjtcclxufVxyXG5cclxuLy8gLm1vdmllbmFtZXtcclxuLy8gICB3aWR0aDo1MDBweDtcclxuLy8gICB3aGl0ZS1zcGFjZTp3cmFwO1xyXG4vLyAgIHRleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7XHJcbi8vICAgb3ZlcmZsb3c6aGlkZGVuO1xyXG4vLyB9XHJcblxyXG4uYnV0dG9ue1xyXG4gIGJhY2tncm91bmQtY29sb3I6I2QzMDcwMDtcclxuICBwYWRkaW5nOjVweDtcclxuICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICBmb250LXdlaWdodDo3MDA7XHJcbiAgdGV4dC1zaGFkb3c6IHJnYigwLCAwLCAwKSAtMXB4IC0ycHggMC41ZW07XHJcbn1cclxuXHJcbi5idXR0b246aG92ZXJ7XHJcbiAgLy8gb3BhY2l0eTowLjg7XHJcbiAgYm9yZGVyOjFweCBzb2xpZCAjRkZGRkZGO1xyXG59XHJcblxyXG4uZmEtcGxheS1jaXJjbGUtb3tcclxuICBmb250LXNpemU6MjVweCAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiNGRkZGRkY7XHJcbn1cclxuXHJcbi5uYW1lLW1vdmlle1xyXG4gIGNvbG9yOiMwMDk0ZmM7XHJcbiAgZm9udC13ZWlnaHQ6NzAwO1xyXG4gIHRleHQtc2hhZG93OiByZ2JhKDAsMCwyNTUsMSkgLTFweCAtMnB4IDAuNWVtO1xyXG4gIHdoaXRlLXNwYWNlOndyYXA7XHJcbiAgd2lkdGg6NDUwcHg7XHJcbn1cclxuXHJcbi5jYXRlZ29yeXtcclxuICB3aGl0ZS1zcGFjZTp3cmFwO1xyXG4gIHdpZHRoOjQ1MHB4O1xyXG4gIHRleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7XHJcbiAgb3ZlcmZsb3c6aGlkZGVuO1xyXG59XHJcblxyXG4uc3RhdHVze1xyXG4gIGNvbG9yOiNjYWMzMDA7XHJcbiAgZm9udC13ZWlnaHQ6NzAwO1xyXG59XHJcblxyXG4uaW5mb3tcclxuICBtYXgtd2lkdGg6MTAwJTtcclxuICBtYXgtaGVpZ2h0OjE3OXB4O1xyXG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcclxuICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuLm1vdmllLWluZm97XHJcbiAgbWF4LXdpZHRoOjMwMHB4O1xyXG59XHJcblxyXG4udW5kZXJsaW5le1xyXG4gIGJvcmRlci1ib3R0b206MnB4IHNvbGlkICMwMDAwMDA7XHJcbn1cclxuXHJcbi5yYXRle1xyXG4gIGNvbG9yOiNmZmY2MDE7XHJcbiAgZm9udC1zaXplOjI1cHg7XHJcbiAgZm9udC13ZWlnaHQ6NzAwO1xyXG4gIHBhZGRpbmc6MTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiM0MDQwNDA7XHJcbn1cclxuXHJcbnB7XHJcbiAgbWFyZ2luLWJvdHRvbTowcHggIWltcG9ydGFudDtcclxuICBsaW5lLWhlaWdodDoyMy4xNHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jYXB0aW9uIHNwYW57XHJcbiAgdGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO1xyXG4gIGJvcmRlci1ib3R0b206ZGFzaGVkIDJweCAjMDAwMDAwO1xyXG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDJweCBibGFjaywgMCAwIDI1cHggYmx1ZSwgMCAwIDVweCBkYXJrYmx1ZTtcclxufVxyXG5cclxuLmNhcHRpb24gc3BhbntcclxuICBmb250LXNpemU6MjJweDtcclxuICBmb250LXdlaWdodDo2MDA7XHJcbiAgY29sb3I6IzczZmYwMDtcclxufVxyXG5cclxuLmNhcHRpb24gYTpob3ZlcntcclxuICBjb2xvcjp3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcbiIsIi5wb3N0ZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xufVxuXG5hOmhvdmVyIHtcbiAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xufVxuXG4ueGVtcGhpbSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiA3MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMjE5KTtcbn1cblxuLmFjdG9yIHtcbiAgd2lkdGg6IDQwMHB4O1xuICB3aGl0ZS1zcGFjZTogd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5nZW5yZSB7XG4gIHdpZHRoOiA0NTBweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDMwNzAwO1xuICBwYWRkaW5nOiA1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgdGV4dC1zaGFkb3c6IGJsYWNrIC0xcHggLTJweCAwLjVlbTtcbn1cblxuLmJ1dHRvbjpob3ZlciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNGRkZGRkY7XG59XG5cbi5mYS1wbGF5LWNpcmNsZS1vIHtcbiAgZm9udC1zaXplOiAyNXB4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjRkZGRkZGO1xufVxuXG4ubmFtZS1tb3ZpZSB7XG4gIGNvbG9yOiAjMDA5NGZjO1xuICBmb250LXdlaWdodDogNzAwO1xuICB0ZXh0LXNoYWRvdzogYmx1ZSAtMXB4IC0ycHggMC41ZW07XG4gIHdoaXRlLXNwYWNlOiB3cmFwO1xuICB3aWR0aDogNDUwcHg7XG59XG5cbi5jYXRlZ29yeSB7XG4gIHdoaXRlLXNwYWNlOiB3cmFwO1xuICB3aWR0aDogNDUwcHg7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uc3RhdHVzIHtcbiAgY29sb3I6ICNjYWMzMDA7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5pbmZvIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAxNzlweDtcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLm1vdmllLWluZm8ge1xuICBtYXgtd2lkdGg6IDMwMHB4O1xufVxuXG4udW5kZXJsaW5lIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwMDAwMDA7XG59XG5cbi5yYXRlIHtcbiAgY29sb3I6ICNmZmY2MDE7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQwNDA0MDtcbn1cblxucCB7XG4gIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xuICBsaW5lLWhlaWdodDogMjMuMTRweCAhaW1wb3J0YW50O1xufVxuXG4uY2FwdGlvbiBzcGFuIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgYm9yZGVyLWJvdHRvbTogZGFzaGVkIDJweCAjMDAwMDAwO1xuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAycHggYmxhY2ssIDAgMCAyNXB4IGJsdWUsIDAgMCA1cHggZGFya2JsdWU7XG59XG5cbi5jYXB0aW9uIHNwYW4ge1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjNzNmZjAwO1xufVxuXG4uY2FwdGlvbiBhOmhvdmVyIHtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/content/detailmovie/detailmovie.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/content/detailmovie/detailmovie.component.ts ***!
  \**************************************************************/
/*! exports provided: DetailmovieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailmovieComponent", function() { return DetailmovieComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _movie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../movie.service */ "./src/app/movie.service.ts");





let DetailmovieComponent = class DetailmovieComponent {
    constructor(route, movieService, location) {
        this.route = route;
        this.movieService = movieService;
        this.location = location;
    }
    ngOnInit() {
        this.movieDetail();
    }
    movieDetail() {
        const id = +this.route.snapshot.paramMap.get('id');
        // console.log("11");
        this.movieService.getMovieFromId(id).subscribe((movie) => {
            this.movie = movie;
            console.log(this.movie);
            const category = this.movie[0].release_year;
            // console.log(id);
            this.movieService.getMovieFromCategory(category).subscribe((category) => {
                this.movies = category;
            });
        });
        // console.log(this.movie);//hàm sẽ chạy dòng 28 trước 27 vì bất đồng bộ
        // this.movieService.getMovieFromCategory(id).subscribe((movies) => {this.movies = movies});
        // console.log(this.movie);
        // console.log(id);
    }
};
DetailmovieComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _movie_service__WEBPACK_IMPORTED_MODULE_4__["MovieService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
];
DetailmovieComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-detailmovie',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./detailmovie.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/detailmovie/detailmovie.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./detailmovie.component.scss */ "./src/app/content/detailmovie/detailmovie.component.scss")).default]
    })
], DetailmovieComponent);



/***/ }),

/***/ "./src/app/content/index/carousel/carousel.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/content/index/carousel/carousel.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".frame {\n  position: relative;\n}\n\n.khoi-slide {\n  width: 100%;\n  height: 300px;\n  position: relative;\n  overflow: hidden;\n  border: 1px solid #FFFFFF;\n}\n\n.cac-slide {\n  overflow: hidden;\n}\n\n.slide {\n  position: absolute;\n  top: 0;\n  left: 0;\n  opacity: 0;\n  visibility: hidden;\n}\n\nimg {\n  width: 768px;\n  height: 300px;\n}\n\n.slide.active {\n  opacity: 1;\n  visibility: visible;\n}\n\n.nut-slide i {\n  color: white;\n  font-size: 30px !important;\n  font-weight: 700;\n  opacity: 0.6;\n  padding: 15px 10px 15px 8px;\n  background-color: #353232;\n  border: 1px solid #FFFFFF;\n}\n\n.nut-slide i:hover {\n  opacity: 1;\n  background-color: black;\n}\n\n#btn-prev {\n  position: absolute;\n  top: 120px;\n  left: -10px;\n  z-index: 1000;\n  cursor: pointer;\n}\n\n#btn-next {\n  position: absolute;\n  top: 120px;\n  right: -10px;\n  z-index: 1000;\n  cursor: pointer;\n}\n\nul {\n  position: absolute;\n  z-index: 10000;\n  width: 100px;\n  bottom: 10px;\n  left: 50%;\n  display: -webkit-box;\n  display: flex;\n  margin-left: -50px;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n\nul li {\n  width: 10px;\n  height: 10px;\n  background: #FFFFFF;\n  border-radius: 50%;\n  cursor: pointer;\n  -webkit-transition: 0.6s;\n  transition: 0.6s;\n}\n\n.bienmatbentrai {\n  -webkit-animation: bienmatbentrai 1s forwards;\n          animation: bienmatbentrai 1s forwards;\n}\n\n@-webkit-keyframes bienmatbentrai {\n  from {\n    -webkit-transform: translateX(0%);\n            transform: translateX(0%);\n  }\n  to {\n    -webkit-transform: translateX(-100%);\n            transform: translateX(-100%);\n  }\n}\n\n.divaobenphai {\n  -webkit-animation: divaobenphai 1s forwards;\n          animation: divaobenphai 1s forwards;\n}\n\n@-webkit-keyframes divaobenphai {\n  from {\n    -webkit-transform: translateX(100%);\n            transform: translateX(100%);\n  }\n  to {\n    -webkit-transform: translateX(0%);\n            transform: translateX(0%);\n  }\n}\n\n.bienmatbenphai {\n  -webkit-animation: bienmatbenphai 1s forwards;\n          animation: bienmatbenphai 1s forwards;\n}\n\n@-webkit-keyframes bienmatbenphai {\n  from {\n    -webkit-transform: translateX(0%);\n            transform: translateX(0%);\n  }\n  to {\n    -webkit-transform: translateX(100%);\n            transform: translateX(100%);\n  }\n}\n\n.divaobentrai {\n  -webkit-animation: divaobentrai 1s forwards;\n          animation: divaobentrai 1s forwards;\n}\n\n@-webkit-keyframes divaobentrai {\n  from {\n    -webkit-transform: translateX(-100%);\n            transform: translateX(-100%);\n  }\n  to {\n    -webkit-transform: translateX(0%);\n            transform: translateX(0%);\n  }\n}\n\n.active_nut {\n  width: 15px !important;\n  height: 15px !important;\n  background-color: #db0000 !important;\n  border: 1px solid #FFFFFF;\n  margin-top: -2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGVudC9pbmRleC9jYXJvdXNlbC9EOlxcZG93bm5uXFxhbmd1bGFybW92aWUvc3JjXFxhcHBcXGNvbnRlbnRcXGluZGV4XFxjYXJvdXNlbFxcY2Fyb3VzZWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbnRlbnQvaW5kZXgvY2Fyb3VzZWwvY2Fyb3VzZWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUVBO0VBQ0Usa0JBQUE7QUNsRUY7O0FEcUVBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUNsRUY7O0FEcUVBO0VBQ0UsZ0JBQUE7QUNsRUY7O0FEcUVBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQ2xFRjs7QURxRUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBQ2xFRjs7QURxRUE7RUFDRSxVQUFBO0VBQ0EsbUJBQUE7QUNsRUY7O0FEcUVBO0VBQ0UsWUFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0FDbEVGOztBRHFFQTtFQUNFLFVBQUE7RUFDQSx1QkFBQTtBQ2xFRjs7QURxRUE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUNsRUY7O0FEcUVBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FDbEVGOztBRHFFQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtBQ2xFRjs7QURxRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esd0JBQUE7RUFBQSxnQkFBQTtBQ2xFRjs7QURxRUE7RUFDRSw2Q0FBQTtVQUFBLHFDQUFBO0FDbEVGOztBRHFFQTtFQUNFO0lBQU0saUNBQUE7WUFBQSx5QkFBQTtFQ2pFTjtFRGtFQTtJQUFLLG9DQUFBO1lBQUEsNEJBQUE7RUMvREw7QUFDRjs7QURpRUE7RUFDRSwyQ0FBQTtVQUFBLG1DQUFBO0FDL0RGOztBRGtFQTtFQUNFO0lBQU0sbUNBQUE7WUFBQSwyQkFBQTtFQzlETjtFRCtEQTtJQUFLLGlDQUFBO1lBQUEseUJBQUE7RUM1REw7QUFDRjs7QUQ4REE7RUFDRSw2Q0FBQTtVQUFBLHFDQUFBO0FDNURGOztBRCtEQTtFQUNFO0lBQU0saUNBQUE7WUFBQSx5QkFBQTtFQzNETjtFRDREQTtJQUFLLG1DQUFBO1lBQUEsMkJBQUE7RUN6REw7QUFDRjs7QUQyREE7RUFDRSwyQ0FBQTtVQUFBLG1DQUFBO0FDekRGOztBRDREQTtFQUNFO0lBQU0sb0NBQUE7WUFBQSw0QkFBQTtFQ3hETjtFRHlEQTtJQUFLLGlDQUFBO1lBQUEseUJBQUE7RUN0REw7QUFDRjs7QUR3REE7RUFDRSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0NBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FDdERGIiwiZmlsZSI6InNyYy9hcHAvY29udGVudC9pbmRleC9jYXJvdXNlbC9jYXJvdXNlbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIC5oaS1zbGlkZXtcclxuLy8gICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuLy8gICB3aWR0aDo3NTRweDtcclxuLy8gICBoZWlnaHQ6MjkycHg7XHJcbi8vIH1cclxuXHJcbi8vIC5oaS1wcmV2LCAuaGktbmV4dHtcclxuLy8gICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuLy8gICB0b3A6NTAlO1xyXG4vLyAgIHdpZHRoOjQwcHg7XHJcbi8vICAgaGVpZ2h0OjQwcHg7XHJcbi8vICAgbWFyZ2luLXRvcDotMjBweDtcclxuLy8gICBib3JkZXItcmFkaXVzOjUwJTtcclxuLy8gICBsaW5lLWhlaWdodDo0MHB4O1xyXG4vLyAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4vLyAgIGN1cnNvcjpwb2ludGVyO1xyXG4vLyAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbi8vICAgY29sb3I6YmxhY2s7XHJcbi8vICAgdHJhbnNpdGlvbjphbGwgMC43cztcclxuLy8gICBmb250LXNpemU6MjBweDtcclxuLy8gICBmb250LXdlaWdodDpib2xkO1xyXG4vLyAgIG9wYWNpdHk6MC42O1xyXG4vLyAgIHotaW5kZXg6MTAwO1xyXG4vLyB9XHJcblxyXG4vLyAuaGktbmV4dDpob3ZlciwgLmhpLXByZXY6aG92ZXJ7XHJcbi8vICAgb3BhY2l0eToxO1xyXG4vLyAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbi8vIH1cclxuXHJcbi8vIC5oaS1wcmV2e1xyXG4vLyAgIGxlZnQ6LTIwcHg7XHJcbi8vIH1cclxuXHJcbi8vIC5oaS1uZXh0e1xyXG4vLyAgIHJpZ2h0Oi0yMHB4O1xyXG4vLyB9XHJcblxyXG4vLyAuaGktc2xpZGUgPiB1bHtcclxuLy8gICBsaXN0LXN0eWxlOm5vbmU7XHJcbi8vICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbi8vICAgd2lkdGg6NzU0cHg7XHJcbi8vICAgaGVpZ2h0OjI5MnB4O1xyXG4vLyAgIG1hcmdpbjowO1xyXG4vLyAgIHBhZGRpbmc6MDtcclxuLy8gfVxyXG5cclxuLy8gLmhpLXNsaWRlID4gdWwgPiBsaXtcclxuLy8gICBvdmVyZmxvdzpoaWRkZW47XHJcbi8vICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbi8vICAgei1pbmRleDowO1xyXG4vLyAgIGxlZnQ6Mzc3cHg7XHJcbi8vICAgdG9wOjE0N3B4O1xyXG4vLyAgIHdpZHRoOjA7XHJcbi8vICAgaGVpZ2h0OjA7XHJcbi8vICAgbWFyZ2luOjA7XHJcbi8vICAgcGFkZGluZzowO1xyXG4vLyAgIGJvcmRlcjozcHggc29saWQgd2hpdGU7XHJcbi8vICAgYmFja2dyb3VuZC1jb2xvcjojMzMzO1xyXG4vLyAgIGN1cnNvcjpwb2ludGVyO1xyXG4vLyB9XHJcblxyXG4vLyAuaGktc2xpZGUgPiB1bCA+IGxpID4gYSA+IGltZ3tcclxuLy8gICB3aWR0aDoxMDAlO1xyXG4vLyAgIGhlaWdodDoxMDAlO1xyXG4vLyAgIGJhY2tncm91bmQtcG9zaXRpb246Y2VudGVyO1xyXG4vLyB9XHJcbi5mcmFtZXtcclxuICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxufVxyXG5cclxuLmtob2ktc2xpZGV7XHJcbiAgd2lkdGg6MTAwJTtcclxuICBoZWlnaHQ6MzAwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG92ZXJmbG93OmhpZGRlbjtcclxuICBib3JkZXI6MXB4IHNvbGlkICNGRkZGRkY7XHJcbn1cclxuXHJcbi5jYWMtc2xpZGV7XHJcbiAgb3ZlcmZsb3c6aGlkZGVuO1xyXG59XHJcblxyXG4uc2xpZGV7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDowO1xyXG4gIGxlZnQ6MDtcclxuICBvcGFjaXR5OjA7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcblxyXG5pbWd7XHJcbiAgd2lkdGg6NzY4cHg7XHJcbiAgaGVpZ2h0OjMwMHB4O1xyXG59XHJcblxyXG4uc2xpZGUuYWN0aXZle1xyXG4gIG9wYWNpdHk6MTtcclxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG59XHJcblxyXG4ubnV0LXNsaWRlIGl7XHJcbiAgY29sb3I6d2hpdGU7XHJcbiAgZm9udC1zaXplOjMwcHggIWltcG9ydGFudDtcclxuICBmb250LXdlaWdodDo3MDA7XHJcbiAgb3BhY2l0eTogMC42O1xyXG4gIHBhZGRpbmc6MTVweCAxMHB4IDE1cHggOHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6cmdiKDUzLCA1MCwgNTApO1xyXG4gIGJvcmRlcjoxcHggc29saWQgI0ZGRkZGRjtcclxufVxyXG5cclxuLm51dC1zbGlkZSBpOmhvdmVye1xyXG4gIG9wYWNpdHk6MTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigwLCAwLCAwKTtcclxufVxyXG5cclxuI2J0bi1wcmV2e1xyXG4gIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gIHRvcDoxMjBweDtcclxuICBsZWZ0Oi0xMHB4O1xyXG4gIHotaW5kZXg6MTAwMDtcclxuICBjdXJzb3I6cG9pbnRlcjtcclxufVxyXG5cclxuI2J0bi1uZXh0e1xyXG4gIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gIHRvcDoxMjBweDtcclxuICByaWdodDotMTBweDtcclxuICB6LWluZGV4OjEwMDA7XHJcbiAgY3Vyc29yOnBvaW50ZXI7XHJcbn1cclxuXHJcbnVse1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OjEwMDAwO1xyXG4gIHdpZHRoOjEwMHB4O1xyXG4gIGJvdHRvbToxMHB4O1xyXG4gIGxlZnQ6NTAlO1xyXG4gIGRpc3BsYXk6ZmxleDtcclxuICBtYXJnaW4tbGVmdDotNTBweDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbnVsIGxpe1xyXG4gIHdpZHRoOjEwcHg7XHJcbiAgaGVpZ2h0OjEwcHg7XHJcbiAgYmFja2dyb3VuZDojRkZGRkZGO1xyXG4gIGJvcmRlci1yYWRpdXM6NTAlO1xyXG4gIGN1cnNvcjpwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246MC42cztcclxufVxyXG5cclxuLmJpZW5tYXRiZW50cmFpe1xyXG4gIGFuaW1hdGlvbjpiaWVubWF0YmVudHJhaSAxcyBmb3J3YXJkcztcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIGJpZW5tYXRiZW50cmFpe1xyXG4gIGZyb20ge3RyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7fVxyXG4gIHRvIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTt9XHJcbn1cclxuXHJcbi5kaXZhb2JlbnBoYWl7XHJcbiAgYW5pbWF0aW9uOmRpdmFvYmVucGhhaSAxcyBmb3J3YXJkcztcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIGRpdmFvYmVucGhhaXtcclxuICBmcm9tIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7fVxyXG4gIHRvIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTt9XHJcbn1cclxuXHJcbi5iaWVubWF0YmVucGhhaXtcclxuICBhbmltYXRpb246Ymllbm1hdGJlbnBoYWkgMXMgZm9yd2FyZHM7XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBiaWVubWF0YmVucGhhaXtcclxuICBmcm9tIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO31cclxuICB0byB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTt9XHJcbn1cclxuXHJcbi5kaXZhb2JlbnRyYWl7XHJcbiAgYW5pbWF0aW9uOmRpdmFvYmVudHJhaSAxcyBmb3J3YXJkcztcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIGRpdmFvYmVudHJhaXtcclxuICBmcm9tIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO31cclxuICB0byB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7fVxyXG59XHJcblxyXG4uYWN0aXZlX251dHtcclxuICB3aWR0aDoxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OjE1cHggIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigyMTksIDAsIDApICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyOjFweCBzb2xpZCAjRkZGRkZGO1xyXG4gIG1hcmdpbi10b3A6LTJweDtcclxufVxyXG4iLCIuZnJhbWUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5raG9pLXNsaWRlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyOiAxcHggc29saWQgI0ZGRkZGRjtcbn1cblxuLmNhYy1zbGlkZSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5zbGlkZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBvcGFjaXR5OiAwO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbmltZyB7XG4gIHdpZHRoOiA3NjhweDtcbiAgaGVpZ2h0OiAzMDBweDtcbn1cblxuLnNsaWRlLmFjdGl2ZSB7XG4gIG9wYWNpdHk6IDE7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbi5udXQtc2xpZGUgaSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAzMHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIG9wYWNpdHk6IDAuNjtcbiAgcGFkZGluZzogMTVweCAxMHB4IDE1cHggOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzUzMjMyO1xuICBib3JkZXI6IDFweCBzb2xpZCAjRkZGRkZGO1xufVxuXG4ubnV0LXNsaWRlIGk6aG92ZXIge1xuICBvcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cblxuI2J0bi1wcmV2IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEyMHB4O1xuICBsZWZ0OiAtMTBweDtcbiAgei1pbmRleDogMTAwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4jYnRuLW5leHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTIwcHg7XG4gIHJpZ2h0OiAtMTBweDtcbiAgei1pbmRleDogMTAwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG51bCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTAwMDA7XG4gIHdpZHRoOiAxMDBweDtcbiAgYm90dG9tOiAxMHB4O1xuICBsZWZ0OiA1MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1sZWZ0OiAtNTBweDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG51bCBsaSB7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiAwLjZzO1xufVxuXG4uYmllbm1hdGJlbnRyYWkge1xuICBhbmltYXRpb246IGJpZW5tYXRiZW50cmFpIDFzIGZvcndhcmRzO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgYmllbm1hdGJlbnRyYWkge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICB9XG59XG4uZGl2YW9iZW5waGFpIHtcbiAgYW5pbWF0aW9uOiBkaXZhb2JlbnBoYWkgMXMgZm9yd2FyZHM7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBkaXZhb2JlbnBoYWkge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XG4gIH1cbn1cbi5iaWVubWF0YmVucGhhaSB7XG4gIGFuaW1hdGlvbjogYmllbm1hdGJlbnBoYWkgMXMgZm9yd2FyZHM7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBiaWVubWF0YmVucGhhaSB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgfVxufVxuLmRpdmFvYmVudHJhaSB7XG4gIGFuaW1hdGlvbjogZGl2YW9iZW50cmFpIDFzIGZvcndhcmRzO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgZGl2YW9iZW50cmFpIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcbiAgfVxufVxuLmFjdGl2ZV9udXQge1xuICB3aWR0aDogMTVweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDE1cHggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RiMDAwMCAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBzb2xpZCAjRkZGRkZGO1xuICBtYXJnaW4tdG9wOiAtMnB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/content/index/carousel/carousel.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/content/index/carousel/carousel.component.ts ***!
  \**************************************************************/
/*! exports provided: CarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CarouselComponent = class CarouselComponent {
    constructor() { }
    ngOnInit() {
    }
};
CarouselComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-carousel',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./carousel.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/index/carousel/carousel.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./carousel.component.scss */ "./src/app/content/index/carousel/carousel.component.scss")).default]
    })
], CarouselComponent);



/***/ }),

/***/ "./src/app/content/index/index.component.scss":
/*!****************************************************!*\
  !*** ./src/app/content/index/index.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".caption span {\n  text-transform: uppercase;\n  border-bottom: dashed 2px #000000;\n}\n\n.caption span {\n  font-size: 22px;\n  font-weight: 600;\n  color: #73ff00 !important;\n  text-shadow: 1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue;\n}\n\n.movie-item {\n  width: 24.4%;\n  position: relative;\n  background-color: #141313;\n  margin-bottom: 30px;\n  padding: 2px;\n}\n\n.current-status {\n  position: absolute;\n  color: white;\n  font-size: 13px;\n  font-weight: 700;\n  left: 11px;\n  top: 8px;\n  background-color: #ac0d0d;\n  padding: 3px 5px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  max-width: 55%;\n  z-index: 100;\n}\n\n.movie {\n  width: 100%;\n  height: 260px;\n  border: 1px solid #131111;\n  margin-bottom: 10px;\n}\n\n.title {\n  overflow: hidden;\n}\n\np {\n  margin-bottom: 2px !important;\n  padding-left: 5px;\n}\n\n.name {\n  font-weight: 700;\n  color: #585ad4;\n  font-size: 15px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n\n.real-name {\n  font-size: 14px;\n  color: #d3c500;\n  font-weight: 400;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGVudC9pbmRleC9EOlxcZG93bm5uXFxhbmd1bGFybW92aWUvc3JjXFxhcHBcXGNvbnRlbnRcXGluZGV4XFxpbmRleC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29udGVudC9pbmRleC9pbmRleC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLHlCQUFBO0VBQ0EsaUNBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBR0EsK0RBQUE7QUNGRjs7QURLQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDRkY7O0FES0E7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQ0ZGOztBREtBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FDRkY7O0FES0E7RUFDRSxnQkFBQTtBQ0ZGOztBREtBO0VBQ0UsNkJBQUE7RUFDQSxpQkFBQTtBQ0ZGOztBREtBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQ0ZGOztBREtBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQ0ZGIiwiZmlsZSI6InNyYy9hcHAvY29udGVudC9pbmRleC9pbmRleC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uY2FwdGlvbiBzcGFue1xyXG4gIHRleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtcclxuICBib3JkZXItYm90dG9tOmRhc2hlZCAycHggIzAwMDAwMDtcclxufVxyXG5cclxuLmNhcHRpb24gc3BhbntcclxuICBmb250LXNpemU6MjJweDtcclxuICBmb250LXdlaWdodDo2MDA7XHJcbiAgY29sb3I6IzczZmYwMCAhaW1wb3J0YW50O1xyXG4gIC8vIHRleHQtc2hhZG93OiAwIDAgMC4yZW0gcmdiKDM0LCAwLCAyNTUpO1xyXG4gIC8vIHRleHQtc2hhZG93OiByZ2IoMjU1LCAyNTUsIDI1NSkgLTFweCAtMnB4IDAuNWVtO1xyXG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDJweCBibGFjaywgMCAwIDI1cHggYmx1ZSwgMCAwIDVweCBkYXJrYmx1ZTtcclxufVxyXG5cclxuLm1vdmllLWl0ZW17XHJcbiAgd2lkdGg6MjQuNCU7XHJcbiAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjojMTQxMzEzO1xyXG4gIG1hcmdpbi1ib3R0b206MzBweDtcclxuICBwYWRkaW5nOjJweDtcclxufVxyXG5cclxuLmN1cnJlbnQtc3RhdHVze1xyXG4gIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gIGNvbG9yOndoaXRlO1xyXG4gIGZvbnQtc2l6ZToxM3B4O1xyXG4gIGZvbnQtd2VpZ2h0OjcwMDtcclxuICBsZWZ0OjExcHg7XHJcbiAgdG9wOjhweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiNhYzBkMGQ7XHJcbiAgcGFkZGluZzozcHggNXB4O1xyXG4gIHdoaXRlLXNwYWNlOm5vd3JhcDtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICBvdmVyZmxvdzpoaWRkZW47XHJcbiAgbWF4LXdpZHRoOjU1JTtcclxuICB6LWluZGV4OjEwMDtcclxufVxyXG5cclxuLm1vdmlle1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgaGVpZ2h0OjI2MHB4O1xyXG4gIGJvcmRlcjoxcHggc29saWQgIzEzMTExMTtcclxuICBtYXJnaW4tYm90dG9tOjEwcHg7XHJcbn1cclxuXHJcbi50aXRsZXtcclxuICBvdmVyZmxvdzpoaWRkZW47XHJcbn1cclxuXHJcbnB7XHJcbiAgbWFyZ2luLWJvdHRvbToycHggIWltcG9ydGFudDtcclxuICBwYWRkaW5nLWxlZnQ6NXB4O1xyXG59XHJcblxyXG4ubmFtZXtcclxuICBmb250LXdlaWdodDo3MDA7XHJcbiAgY29sb3I6IzU4NWFkNDtcclxuICBmb250LXNpemU6MTVweDtcclxuICB3aGl0ZS1zcGFjZTpub3dyYXA7XHJcbiAgdGV4dC1vdmVyZmxvdzplbGxpcHNpcztcclxuICBvdmVyZmxvdzpoaWRkZW47XHJcbn1cclxuXHJcbi5yZWFsLW5hbWV7XHJcbiAgZm9udC1zaXplOjE0cHg7XHJcbiAgY29sb3I6cmdiKDIxMSwgMTk3LCAwKTtcclxuICBmb250LXdlaWdodDo0MDA7XHJcbiAgd2hpdGUtc3BhY2U6bm93cmFwO1xyXG4gIHRleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7XHJcbiAgb3ZlcmZsb3c6aGlkZGVuO1xyXG59XHJcbiIsIi5jYXB0aW9uIHNwYW4ge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBib3JkZXItYm90dG9tOiBkYXNoZWQgMnB4ICMwMDAwMDA7XG59XG5cbi5jYXB0aW9uIHNwYW4ge1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjNzNmZjAwICFpbXBvcnRhbnQ7XG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDJweCBibGFjaywgMCAwIDI1cHggYmx1ZSwgMCAwIDVweCBkYXJrYmx1ZTtcbn1cblxuLm1vdmllLWl0ZW0ge1xuICB3aWR0aDogMjQuNCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE0MTMxMztcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgcGFkZGluZzogMnB4O1xufVxuXG4uY3VycmVudC1zdGF0dXMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBsZWZ0OiAxMXB4O1xuICB0b3A6IDhweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FjMGQwZDtcbiAgcGFkZGluZzogM3B4IDVweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1heC13aWR0aDogNTUlO1xuICB6LWluZGV4OiAxMDA7XG59XG5cbi5tb3ZpZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDI2MHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMTMxMTExO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4udGl0bGUge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5wIHtcbiAgbWFyZ2luLWJvdHRvbTogMnB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xufVxuXG4ubmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjNTg1YWQ0O1xuICBmb250LXNpemU6IDE1cHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ucmVhbC1uYW1lIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogI2QzYzUwMDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59Il19 */");

/***/ }),

/***/ "./src/app/content/index/index.component.ts":
/*!**************************************************!*\
  !*** ./src/app/content/index/index.component.ts ***!
  \**************************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _movie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../movie.service */ "./src/app/movie.service.ts");



let IndexComponent = class IndexComponent {
    constructor(movieService) {
        this.movieService = movieService;
    }
    ngOnInit() {
        this.get8Moviebo();
        this.get8Moviele();
    }
    get8Moviebo() {
        this.movieService.get8Moviebo().subscribe((Movie) => {
            this.moviebo = Movie;
        });
    }
    get8Moviele() {
        this.movieService.get8Moviele().subscribe((Movie) => {
            this.moviele = Movie;
        });
    }
};
IndexComponent.ctorParameters = () => [
    { type: _movie_service__WEBPACK_IMPORTED_MODULE_2__["MovieService"] }
];
IndexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-index',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./index.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/index/index.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./index.component.scss */ "./src/app/content/index/index.component.scss")).default]
    })
], IndexComponent);



/***/ }),

/***/ "./src/app/content/watchmovie/watchmovie.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/content/watchmovie/watchmovie.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css?family=Questrial\");\n.frame {\n  width: 100%;\n  height: auto;\n  margin: auto;\n}\n.frame.showControls .controls {\n  bottom: 0;\n  position: absolute;\n  z-index: 200;\n}\n.videoPlayer {\n  width: 100%;\n  height: auto;\n  position: relative;\n  z-index: 100;\n  background-color: black;\n}\n.videoPlayer video {\n  width: 100%;\n}\n.videoPlayer .controls {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n  color: white;\n}\n.videoPlayer .controls .topControls {\n  padding: 5px;\n  position: relative;\n}\n.seekbar {\n  height: 3px;\n  background-color: #837c7c;\n  flex-basis: 90%;\n}\n.seekbar .progressBar {\n  height: 100%;\n  width: 0px;\n  background-color: red;\n  position: relative;\n}\n.seekbar .progressBar::after {\n  content: \"\";\n  position: absolute;\n  right: -5px;\n  border-radius: 500px;\n}\n.seekbar:hover {\n  cursor: pointer;\n  height: 6px;\n}\n.seekbar:hover .progressBar {\n  height: 6px;\n}\n.seekbar:hover .progressBar::after {\n  height: 15px;\n  width: 15px;\n  background-color: red;\n  margin-top: -4px;\n}\n.bottomControls .volume {\n  display: -webkit-inline-box;\n  display: inline-flex;\n  -webkit-box-align: center;\n          align-items: center;\n  flex-basis: 25%;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n.bottomControls .volume .seekbarSection {\n  display: -webkit-inline-box;\n  display: inline-flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  flex-basis: 80%;\n}\n.bottomControls .volume .seekbarSection .seekbar {\n  height: 4px !important;\n  margin-left: 5px;\n  flex-basis: 80%;\n}\n.bottomControls .volume .seekbarSection .seekbar .progressBar {\n  height: 4px;\n  width: 100%;\n  background-color: red;\n  position: relative;\n}\n.bottomControls .volume .seekbarSection .seekbar .progressBar::after {\n  content: \"\";\n  position: absolute;\n  right: -6px;\n  margin-top: -6px;\n  border-radius: 500px;\n}\n.bottomControls .volume .seekbarSection:hover {\n  cursor: pointer;\n}\n.bottomControls .volume .seekbarSection:hover .progressBar {\n  position: relative;\n  height: 6px;\n}\n.bottomControls .volume .seekbarSection:hover .progressBar::after {\n  height: 15px;\n  width: 15px;\n  background-color: red;\n}\n.fa {\n  font-size: 20px !important;\n}\n.fas {\n  font-size: 20px !important;\n}\n.bt {\n  color: red !important;\n  -webkit-transition: all ease 0.2s;\n  transition: all ease 0.2s;\n}\n.bt.play .fa-pause {\n  display: none;\n}\n.bt.pause {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n.bt.pause .fa-play {\n  display: none;\n}\n.boxshadow {\n  background: #646262;\n  width: 500px;\n  height: 1px;\n  margin: auto;\n  box-shadow: 0px 22px 12px white, 0px 22px 12px white, 0px 22px 12px white;\n}\n.top {\n  background-color: #ffffff;\n  color: #000000;\n}\n.bottom {\n  background-color: #002fff;\n  color: #ffffff;\n  cursor: pointer;\n}\n.name-movie {\n  color: #0094fc;\n  font-weight: 700;\n  text-shadow: blue -1px -2px 0.5em;\n}\n.vietsub {\n  background: #0e0e0e;\n  color: #d6da00;\n  padding: 10px;\n  font-weight: 600;\n  border: 1px solid white;\n  cursor: pointer;\n}\n.Turn-off {\n  background: #0e0e0e;\n  padding: 10px;\n  font-weight: 600;\n  cursor: pointer;\n}\n.server {\n  background: #0e0e0e;\n}\n.hdd {\n  padding: 5px;\n  background: #d67474;\n  color: #d80000;\n  font-weight: 700;\n  font-size: 18px;\n  border-radius: 3px;\n  cursor: pointer;\n}\n.ssd {\n  padding: 5px;\n  background: #ffffff;\n  color: #d80000;\n  font-weight: 700;\n  font-size: 18px;\n  border-radius: 3px;\n  cursor: pointer;\n}\n.fa-caret-left {\n  font-size: 35px !important;\n  color: #ebe1e1;\n}\n.text-tag {\n  padding: 3px 7px 3px 0px;\n  background-color: #ebe1e1;\n  margin-left: -2px;\n  font-size: 11px;\n  border-radius: 0px 3px 3px 0px;\n}\n.tag:hover {\n  opacity: 0.5;\n}\n.background {\n  background-color: #ffffff;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGVudC93YXRjaG1vdmllL0Q6XFxkb3dubm5cXGFuZ3VsYXJtb3ZpZS9zcmNcXGFwcFxcY29udGVudFxcd2F0Y2htb3ZpZVxcd2F0Y2htb3ZpZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29udGVudC93YXRjaG1vdmllL3dhdGNobW92aWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsZ0VBQUE7QUFVUjtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ1JGO0FEVUk7RUFDRSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDUk47QURhQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBMUJNO0FDZ0JSO0FEV0U7RUFDRSxXQUFBO0FDVEo7QUQwQkE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxZQWpESztBQzBCUDtBRHdCRTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQ3RCSjtBRDBCQTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QUN2QkY7QUR3QkU7RUFDRSxZQUFBO0VBQ0EsVUFBQTtFQUNBLHFCQWhFRTtFQWlFRixrQkFBQTtBQ3RCSjtBRHVCSTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtBQ3JCTjtBRHdCRTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FDdEJKO0FEdUJJO0VBQ0UsV0FBQTtBQ3JCTjtBRHNCTTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EscUJBakZGO0VBa0ZFLGdCQUFBO0FDcEJSO0FEcUNBO0VBQ0UsMkJBQUE7RUFBQSxvQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxlQUFBO0VBRUEseUJBQUE7VUFBQSw4QkFBQTtBQ25DRjtBRG9DRTtFQUNFLDJCQUFBO0VBQUEsb0JBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSxlQUFBO0FDbENKO0FEbUNJO0VBQ0Usc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNqQ047QURvQ007RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQXRIRjtFQXVIRSxrQkFBQTtBQ2xDUjtBRG9DUTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FDbENWO0FEc0NJO0VBQ0UsZUFBQTtBQ3BDTjtBRHFDTTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtBQ25DUjtBRG9DUTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EscUJBMUlKO0FDd0dOO0FEMENBO0VBQ0UsMEJBQUE7QUN2Q0Y7QUQwQ0E7RUFDRSwwQkFBQTtBQ3ZDRjtBRDBDQTtFQUNFLHFCQUFBO0VBdkpELGlDQUFBO0VBQUEseUJBQUE7QUNpSEQ7QUR5Q0k7RUFDRSxhQUFBO0FDdkNOO0FEMENFO0VBQ0UsaUNBQUE7VUFBQSx5QkFBQTtBQ3hDSjtBRHlDSTtFQUNFLGFBQUE7QUN2Q047QUQ0Q0E7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlFQUFBO0FDekNGO0FENENBO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0FDekNGO0FENENBO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ3pDRjtBRDRDQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlDQUFBO0FDekNGO0FENENBO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FDekNGO0FENENBO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDekNGO0FENENBO0VBQ0UsbUJBQUE7QUN6Q0Y7QUQ0Q0E7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDekNGO0FENENBO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ3pDRjtBRDRDQTtFQUNFLDBCQUFBO0VBQ0EsY0FBQTtBQ3pDRjtBRDRDQTtFQUNFLHdCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtBQ3pDRjtBRDRDQTtFQUNFLFlBQUE7QUN6Q0Y7QUQ0Q0E7RUFDRSx5QkFBQTtFQUNBLFdBQUE7QUN6Q0YiLCJmaWxlIjoic3JjL2FwcC9jb250ZW50L3dhdGNobW92aWUvd2F0Y2htb3ZpZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVF1ZXN0cmlhbFwiKTtcclxuJGZvbnRGYW1pbHk6XCJRdWVzdHJpYWxcIiwgc2Fucy1zZXJpZjtcclxuJGJsYWNrOiByZ2IoMCwgMCwgMCk7XHJcbiRyZWQ6IHJnYigyNTUsIDAsIDApO1xyXG4kd2hpdGU6cmdiKDI1NSwgMjU1LCAyNTUpO1xyXG5cclxuQG1peGluIHRyYW5zaXRpb257XHJcblx0dHJhbnNpdGlvbjogYWxsIGVhc2UgMC4ycztcclxufVxyXG5cclxuLmZyYW1le1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgaGVpZ2h0OmF1dG87XHJcbiAgbWFyZ2luOmF1dG87XHJcbiAgJi5zaG93Q29udHJvbHN7XHJcbiAgICAuY29udHJvbHN7XHJcbiAgICAgIGJvdHRvbTowO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHotaW5kZXg6IDIwMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi52aWRlb1BsYXllcntcclxuICB3aWR0aDoxMDAlO1xyXG4gIGhlaWdodDphdXRvO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OjEwMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiRibGFjaztcclxuICB2aWRlb3tcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgfVxyXG59XHJcblxyXG4vLyAuY29udHJvbHM6OmFmdGVyIHtcclxuLy8gICBjb250ZW50OiAnJztcclxuLy8gICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgei1pbmRleDogLTExMTsgLyog4bqpbiBzaGFkb3cgcGjDrWEgc2F1IGjDrG5oIOG6o25oICovXHJcbi8vICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDE1cHggMjBweCByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbi8vICAgLW1vei1ib3gtc2hhZG93OiAwIDE1cHggMjBweCByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbi8vICAgYm94LXNoYWRvdzogMCAxNXB4IDIwcHggcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4vLyAgIHdpZHRoOiA3MCU7XHJcbi8vICAgbGVmdDoxNSU7IC8qIG3hu5l0IG7hu61hIGPhu6dhIDMwJSBjw7JuIGzhuqFpICovXHJcbi8vICAgaGVpZ2h0OiA0MXB4O1xyXG4vLyAgIGJvdHRvbTogMDtcclxuLy8gfVxyXG5cclxuLnZpZGVvUGxheWVyIC5jb250cm9sc3tcclxuICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICBib3R0b206MDtcclxuICBsZWZ0OjA7XHJcbiAgcmlnaHQ6MDtcclxuICBtYXJnaW46YXV0bztcclxuICBjb2xvcjokd2hpdGU7XHJcbiAgLnRvcENvbnRyb2xze1xyXG4gICAgcGFkZGluZzo1cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG59XHJcblxyXG4uc2Vla2JhcntcclxuICBoZWlnaHQ6M3B4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6cmdiKDEzMSwgMTI0LCAxMjQpO1xyXG4gIGZsZXgtYmFzaXM6OTAlO1xyXG4gIC5wcm9ncmVzc0JhcntcclxuICAgIGhlaWdodDoxMDAlO1xyXG4gICAgd2lkdGg6MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjokcmVkO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgJjo6YWZ0ZXJ7XHJcbiAgICAgIGNvbnRlbnQ6XCJcIjtcclxuICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgIHJpZ2h0Oi01cHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6NTAwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gICY6aG92ZXJ7XHJcbiAgICBjdXJzb3I6cG9pbnRlcjtcclxuICAgIGhlaWdodDo2cHg7XHJcbiAgICAucHJvZ3Jlc3NCYXJ7XHJcbiAgICAgIGhlaWdodDo2cHg7XHJcbiAgICAgICY6OmFmdGVye1xyXG4gICAgICAgIGhlaWdodDoxNXB4O1xyXG4gICAgICAgIHdpZHRoOjE1cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjokcmVkO1xyXG4gICAgICAgIG1hcmdpbi10b3A6LTRweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gLnZvbHVtZXtcclxuLy8gICBkaXNwbGF5Om5vbmU7XHJcbi8vIH1cclxuXHJcbi8vIC52b2x1bWU6aG92ZXJ7XHJcbi8vICAgZGlzcGxheTpibG9jaztcclxuLy8gfVxyXG5cclxuLmJvdHRvbUNvbnRyb2xze1xyXG59XHJcblxyXG4uYm90dG9tQ29udHJvbHMgLnZvbHVtZXtcclxuICBkaXNwbGF5OmlubGluZS1mbGV4O1xyXG4gIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICBmbGV4LWJhc2lzOjI1JTtcclxuICAvLyBib3JkZXI6IDFweCBzb2xpZCAkd2hpdGU7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIC5zZWVrYmFyU2VjdGlvbntcclxuICAgIGRpc3BsYXk6aW5saW5lLWZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZmxleC1iYXNpczogODAlO1xyXG4gICAgLnNlZWtiYXJ7XHJcbiAgICAgIGhlaWdodDo0cHggIWltcG9ydGFudDtcclxuICAgICAgbWFyZ2luLWxlZnQ6NXB4O1xyXG4gICAgICBmbGV4LWJhc2lzOjgwJTtcclxuICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjojRkZGRkZGO1xyXG4gICAgICAvLyBib3JkZXI6IDFweCBzb2xpZCAkcmVkO1xyXG4gICAgICAucHJvZ3Jlc3NCYXJ7XHJcbiAgICAgICAgaGVpZ2h0OjRweDtcclxuICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRyZWQ7XHJcbiAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICAgICAgLy8gbWFyZ2luLXRvcDo3cHg7XHJcbiAgICAgICAgJjo6YWZ0ZXJ7XHJcbiAgICAgICAgICBjb250ZW50OlwiXCI7XHJcbiAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICAgIHJpZ2h0Oi02cHg7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOi02cHg7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOjUwMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJjpob3ZlcntcclxuICAgICAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgICAgIC5wcm9ncmVzc0JhcntcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgaGVpZ2h0OjZweDtcclxuICAgICAgICAmOjphZnRlcntcclxuICAgICAgICAgIGhlaWdodDoxNXB4O1xyXG4gICAgICAgICAgd2lkdGg6MTVweDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6JHJlZDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG4uZmF7XHJcbiAgZm9udC1zaXplOjIwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZhc3tcclxuICBmb250LXNpemU6MjBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYnR7XHJcbiAgY29sb3I6cmdiKDI1NSwgMCwgMCkgIWltcG9ydGFudDtcclxuICBAaW5jbHVkZSB0cmFuc2l0aW9uKCk7XHJcbiAgJi5wbGF5IHtcclxuICAgIC5mYS1wYXVzZXtcclxuICAgICAgZGlzcGxheTpub25lO1xyXG4gICAgfVxyXG4gIH1cclxuICAmLnBhdXNle1xyXG4gICAgdHJhbnNmb3JtOnJvdGF0ZSgxODBkZWcpO1xyXG4gICAgLmZhLXBsYXl7XHJcbiAgICAgIGRpc3BsYXk6bm9uZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5ib3hzaGFkb3d7XHJcbiAgYmFja2dyb3VuZDojNjQ2MjYyO1xyXG4gIHdpZHRoOjUwMHB4O1xyXG4gIGhlaWdodDoxcHg7XHJcbiAgbWFyZ2luOmF1dG87XHJcbiAgYm94LXNoYWRvdzogMHB4IDIycHggMTJweCByZ2IoMjU1LCAyNTUsIDI1NSksIDBweCAyMnB4IDEycHggcmdiKDI1NSwgMjU1LCAyNTUpLCAwcHggMjJweCAxMnB4IHJnYigyNTUsIDI1NSwgMjU1KTtcclxufVxyXG5cclxuLnRvcHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gIGNvbG9yOiMwMDAwMDA7XHJcbn1cclxuXHJcbi5ib3R0b217XHJcbiAgYmFja2dyb3VuZC1jb2xvcjojMDAyZmZmO1xyXG4gIGNvbG9yOiNmZmZmZmY7XHJcbiAgY3Vyc29yOnBvaW50ZXI7XHJcbn1cclxuXHJcbi5uYW1lLW1vdmlle1xyXG4gIGNvbG9yOiMwMDk0ZmM7XHJcbiAgZm9udC13ZWlnaHQ6NzAwO1xyXG4gIHRleHQtc2hhZG93OiByZ2JhKDAsMCwyNTUsMSkgLTFweCAtMnB4IDAuNWVtO1xyXG59XHJcblxyXG4udmlldHN1YntcclxuICBiYWNrZ3JvdW5kOiAjMGUwZTBlO1xyXG4gIGNvbG9yOnJnYigyMTQsIDIxOCwgMCk7XHJcbiAgcGFkZGluZzoxMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OjYwMDtcclxuICBib3JkZXI6MXB4IHNvbGlkIHdoaXRlO1xyXG4gIGN1cnNvcjpwb2ludGVyO1xyXG59XHJcblxyXG4uVHVybi1vZmZ7XHJcbiAgYmFja2dyb3VuZDogIzBlMGUwZTtcclxuICBwYWRkaW5nOjEwcHg7XHJcbiAgZm9udC13ZWlnaHQ6NjAwO1xyXG4gIGN1cnNvcjpwb2ludGVyO1xyXG59XHJcblxyXG4uc2VydmVye1xyXG4gIGJhY2tncm91bmQ6IzBlMGUwZTtcclxufVxyXG5cclxuLmhkZHtcclxuICBwYWRkaW5nOjVweDtcclxuICBiYWNrZ3JvdW5kOiAjZDY3NDc0O1xyXG4gIGNvbG9yOnJnYigyMTYsIDAsIDApO1xyXG4gIGZvbnQtd2VpZ2h0OjcwMDtcclxuICBmb250LXNpemU6MThweDtcclxuICBib3JkZXItcmFkaXVzOjNweDtcclxuICBjdXJzb3I6cG9pbnRlcjtcclxufVxyXG5cclxuLnNzZHtcclxuICBwYWRkaW5nOjVweDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIGNvbG9yOnJnYigyMTYsIDAsIDApO1xyXG4gIGZvbnQtd2VpZ2h0OjcwMDtcclxuICBmb250LXNpemU6MThweDtcclxuICBib3JkZXItcmFkaXVzOjNweDtcclxuICBjdXJzb3I6cG9pbnRlcjtcclxufVxyXG5cclxuLmZhLWNhcmV0LWxlZnR7XHJcbiAgZm9udC1zaXplOjM1cHggIWltcG9ydGFudDtcclxuICBjb2xvcjogcmdiKDIzNSwgMjI1LCAyMjUpO1xyXG59XHJcblxyXG4udGV4dC10YWd7XHJcbiAgcGFkZGluZzozcHggN3B4IDNweCAwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNSwgMjI1LCAyMjUpO1xyXG4gIG1hcmdpbi1sZWZ0Oi0ycHg7XHJcbiAgZm9udC1zaXplOjExcHg7XHJcbiAgYm9yZGVyLXJhZGl1czowcHggM3B4IDNweCAwcHg7XHJcbn1cclxuXHJcbi50YWc6aG92ZXJ7XHJcbiAgb3BhY2l0eTowLjU7XHJcbn1cclxuXHJcbi5iYWNrZ3JvdW5ke1xyXG4gIGJhY2tncm91bmQtY29sb3I6I2ZmZmZmZjtcclxuICB3aWR0aDoxMDAlO1xyXG59XHJcblxyXG5cclxuIiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UXVlc3RyaWFsXCIpO1xuLmZyYW1lIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiBhdXRvO1xufVxuLmZyYW1lLnNob3dDb250cm9scyAuY29udHJvbHMge1xuICBib3R0b206IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMjAwO1xufVxuXG4udmlkZW9QbGF5ZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDEwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG4udmlkZW9QbGF5ZXIgdmlkZW8ge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnZpZGVvUGxheWVyIC5jb250cm9scyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgbWFyZ2luOiBhdXRvO1xuICBjb2xvcjogd2hpdGU7XG59XG4udmlkZW9QbGF5ZXIgLmNvbnRyb2xzIC50b3BDb250cm9scyB7XG4gIHBhZGRpbmc6IDVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uc2Vla2JhciB7XG4gIGhlaWdodDogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODM3YzdjO1xuICBmbGV4LWJhc2lzOiA5MCU7XG59XG4uc2Vla2JhciAucHJvZ3Jlc3NCYXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnNlZWtiYXIgLnByb2dyZXNzQmFyOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IC01cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwMHB4O1xufVxuLnNlZWtiYXI6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGhlaWdodDogNnB4O1xufVxuLnNlZWtiYXI6aG92ZXIgLnByb2dyZXNzQmFyIHtcbiAgaGVpZ2h0OiA2cHg7XG59XG4uc2Vla2Jhcjpob3ZlciAucHJvZ3Jlc3NCYXI6OmFmdGVyIHtcbiAgaGVpZ2h0OiAxNXB4O1xuICB3aWR0aDogMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBtYXJnaW4tdG9wOiAtNHB4O1xufVxuXG4uYm90dG9tQ29udHJvbHMgLnZvbHVtZSB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWJhc2lzOiAyNSU7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5ib3R0b21Db250cm9scyAudm9sdW1lIC5zZWVrYmFyU2VjdGlvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4LWJhc2lzOiA4MCU7XG59XG4uYm90dG9tQ29udHJvbHMgLnZvbHVtZSAuc2Vla2JhclNlY3Rpb24gLnNlZWtiYXIge1xuICBoZWlnaHQ6IDRweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBmbGV4LWJhc2lzOiA4MCU7XG59XG4uYm90dG9tQ29udHJvbHMgLnZvbHVtZSAuc2Vla2JhclNlY3Rpb24gLnNlZWtiYXIgLnByb2dyZXNzQmFyIHtcbiAgaGVpZ2h0OiA0cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5ib3R0b21Db250cm9scyAudm9sdW1lIC5zZWVrYmFyU2VjdGlvbiAuc2Vla2JhciAucHJvZ3Jlc3NCYXI6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogLTZweDtcbiAgbWFyZ2luLXRvcDogLTZweDtcbiAgYm9yZGVyLXJhZGl1czogNTAwcHg7XG59XG4uYm90dG9tQ29udHJvbHMgLnZvbHVtZSAuc2Vla2JhclNlY3Rpb246aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYm90dG9tQ29udHJvbHMgLnZvbHVtZSAuc2Vla2JhclNlY3Rpb246aG92ZXIgLnByb2dyZXNzQmFyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDZweDtcbn1cbi5ib3R0b21Db250cm9scyAudm9sdW1lIC5zZWVrYmFyU2VjdGlvbjpob3ZlciAucHJvZ3Jlc3NCYXI6OmFmdGVyIHtcbiAgaGVpZ2h0OiAxNXB4O1xuICB3aWR0aDogMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuXG4uZmEge1xuICBmb250LXNpemU6IDIwcHggIWltcG9ydGFudDtcbn1cblxuLmZhcyB7XG4gIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50O1xufVxuXG4uYnQge1xuICBjb2xvcjogcmVkICFpbXBvcnRhbnQ7XG4gIHRyYW5zaXRpb246IGFsbCBlYXNlIDAuMnM7XG59XG4uYnQucGxheSAuZmEtcGF1c2Uge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmJ0LnBhdXNlIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbn1cbi5idC5wYXVzZSAuZmEtcGxheSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5ib3hzaGFkb3cge1xuICBiYWNrZ3JvdW5kOiAjNjQ2MjYyO1xuICB3aWR0aDogNTAwcHg7XG4gIGhlaWdodDogMXB4O1xuICBtYXJnaW46IGF1dG87XG4gIGJveC1zaGFkb3c6IDBweCAyMnB4IDEycHggd2hpdGUsIDBweCAyMnB4IDEycHggd2hpdGUsIDBweCAyMnB4IDEycHggd2hpdGU7XG59XG5cbi50b3Age1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBjb2xvcjogIzAwMDAwMDtcbn1cblxuLmJvdHRvbSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDJmZmY7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5uYW1lLW1vdmllIHtcbiAgY29sb3I6ICMwMDk0ZmM7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHRleHQtc2hhZG93OiBibHVlIC0xcHggLTJweCAwLjVlbTtcbn1cblxuLnZpZXRzdWIge1xuICBiYWNrZ3JvdW5kOiAjMGUwZTBlO1xuICBjb2xvcjogI2Q2ZGEwMDtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLlR1cm4tb2ZmIHtcbiAgYmFja2dyb3VuZDogIzBlMGUwZTtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc2VydmVyIHtcbiAgYmFja2dyb3VuZDogIzBlMGUwZTtcbn1cblxuLmhkZCB7XG4gIHBhZGRpbmc6IDVweDtcbiAgYmFja2dyb3VuZDogI2Q2NzQ3NDtcbiAgY29sb3I6ICNkODAwMDA7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zc2Qge1xuICBwYWRkaW5nOiA1cHg7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGNvbG9yOiAjZDgwMDAwO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZmEtY2FyZXQtbGVmdCB7XG4gIGZvbnQtc2l6ZTogMzVweCAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ViZTFlMTtcbn1cblxuLnRleHQtdGFnIHtcbiAgcGFkZGluZzogM3B4IDdweCAzcHggMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWJlMWUxO1xuICBtYXJnaW4tbGVmdDogLTJweDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBib3JkZXItcmFkaXVzOiAwcHggM3B4IDNweCAwcHg7XG59XG5cbi50YWc6aG92ZXIge1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbi5iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */");

/***/ }),

/***/ "./src/app/content/watchmovie/watchmovie.component.ts":
/*!************************************************************!*\
  !*** ./src/app/content/watchmovie/watchmovie.component.ts ***!
  \************************************************************/
/*! exports provided: WatchmovieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WatchmovieComponent", function() { return WatchmovieComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _movie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../movie.service */ "./src/app/movie.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let WatchmovieComponent = class WatchmovieComponent {
    constructor(route, movieService) {
        this.route = route;
        this.movieService = movieService;
    }
    ngOnInit() {
        this.movieDetail();
    }
    movieDetail() {
        const id = +this.route.snapshot.paramMap.get('id');
        this.movieService.getMovieFromId(id).subscribe((movie) => {
            this.movie = movie; //console.log(this.movie[0].genre)
            const category = this.movie[0].release_year;
            console.log(category);
            this.movieService.getMovieFromCategory(category).subscribe((category) => {
                this.movies = category;
            });
        });
        // console.log(this.movie);//hàm sẽ chạy dòng 28 trước 27 vì bất đồng bộ
        // this.movieService.getMovieFromCategory(id).subscribe((movies) => {this.movies = movies});
        // console.log(this.movie);
        // console.log(id);
    }
};
WatchmovieComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _movie_service__WEBPACK_IMPORTED_MODULE_2__["MovieService"] }
];
WatchmovieComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-watchmovie',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./watchmovie.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/watchmovie/watchmovie.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./watchmovie.component.scss */ "./src/app/content/watchmovie/watchmovie.component.scss")).default]
    })
], WatchmovieComponent);



/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".footer {\n  background-color: #0f0c0c;\n  color: #cfcfcf;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL0Q6XFxkb3dubm5cXGFuZ3VsYXJtb3ZpZS9zcmNcXGFwcFxcZm9vdGVyXFxmb290ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUNBLGNBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6IzBmMGMwYztcclxuICBjb2xvcjojY2ZjZmNmO1xyXG59XHJcbiIsIi5mb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGYwYzBjO1xuICBjb2xvcjogI2NmY2ZjZjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header {\n  width: 100%;\n  height: 59px;\n  background-color: #6442d1;\n}\n\n.form-search {\n  width: 330px;\n  height: 35px;\n  background: #ffffff;\n  border: none;\n  outline: none;\n  border-radius: 5px;\n  padding-left: 20px;\n}\n\n.fa-search {\n  position: absolute;\n  right: -42px;\n  top: 0px;\n  font-size: 18px !important;\n  color: #1a1616;\n  cursor: pointer;\n  background: #370dc0;\n  padding: 9px;\n  border-radius: 50%;\n}\n\n.contact {\n  padding: 9px;\n  background: #1b490162;\n  Color: white !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL0Q6XFxkb3dubm5cXGFuZ3VsYXJtb3ZpZS9zcmNcXGFwcFxcaGVhZGVyXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXJ7XHJcbiAgd2lkdGg6MTAwJTtcclxuICBoZWlnaHQ6NTlweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiM2NDQyZDE7XHJcbn1cclxuXHJcbi5mb3JtLXNlYXJjaHtcclxuICB3aWR0aDozMzBweDtcclxuICBoZWlnaHQ6MzVweDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIGJvcmRlcjpub25lO1xyXG4gIG91dGxpbmU6bm9uZTtcclxuICBib3JkZXItcmFkaXVzOjVweDtcclxuICBwYWRkaW5nLWxlZnQ6MjBweDtcclxufVxyXG5cclxuLmZhLXNlYXJjaHtcclxuICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICByaWdodDotNDJweDtcclxuICB0b3A6MHB4O1xyXG4gIGZvbnQtc2l6ZToxOHB4ICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6cmdiKDI2LCAyMiwgMjIpO1xyXG4gIGN1cnNvcjpwb2ludGVyO1xyXG4gIGJhY2tncm91bmQ6IzM3MGRjMDtcclxuICBwYWRkaW5nOjlweDtcclxuICBib3JkZXItcmFkaXVzOjUwJTtcclxufVxyXG5cclxuLmNvbnRhY3R7XHJcbiAgcGFkZGluZzo5cHg7XHJcbiAgYmFja2dyb3VuZDojMWI0OTAxNjI7XHJcbiAgQ29sb3I6d2hpdGUgIWltcG9ydGFudDtcclxufVxyXG4iLCIuaGVhZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTlweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY0NDJkMTtcbn1cblxuLmZvcm0tc2VhcmNoIHtcbiAgd2lkdGg6IDMzMHB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG59XG5cbi5mYS1zZWFyY2gge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAtNDJweDtcbiAgdG9wOiAwcHg7XG4gIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xuICBjb2xvcjogIzFhMTYxNjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kOiAjMzcwZGMwO1xuICBwYWRkaW5nOiA5cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmNvbnRhY3Qge1xuICBwYWRkaW5nOiA5cHg7XG4gIGJhY2tncm91bmQ6ICMxYjQ5MDE2MjtcbiAgQ29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    constructor() { }
    ngOnInit() {
        this.movieName = "";
    }
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/header/menu/menu.component.scss":
/*!*************************************************!*\
  !*** ./src/app/header/menu/menu.component.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".menu {\n  width: 100%;\n  background: #202020 !important;\n  position: relative;\n}\n\n.navbar {\n  padding: 3px !important;\n}\n\n.menu.fixed {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 10000;\n}\n\n.nav-item {\n  border-left: 1px solid #0f0f0f;\n  margin-right: 10px;\n}\n\n.dropdown {\n  position: relative;\n  display: inline-block;\n}\n\n.dropdown-content {\n  display: none;\n  position: absolute;\n  z-index: 1;\n  background-color: #1d1c1c;\n}\n\n.dropdown-item {\n  color: #dfdfdf !important;\n}\n\n.dropdown:hover .dropdown-content {\n  display: block;\n}\n\n.dropdown-item:hover {\n  color: #141414 !important;\n}\n\n.dropdown:hover .dropdown-item {\n  border-bottom: 1px solid #141414;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL21lbnUvRDpcXGRvd25ublxcYW5ndWxhcm1vdmllL3NyY1xcYXBwXFxoZWFkZXJcXG1lbnVcXG1lbnUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hlYWRlci9tZW51L21lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsdUJBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSw4QkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDQyxrQkFBQTtFQUNBLHFCQUFBO0FDQ0Q7O0FERUE7RUFDQyxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7QUNDRDs7QURFQTtFQUNFLHlCQUFBO0FDQ0Y7O0FERUE7RUFDQyxjQUFBO0FDQ0Q7O0FERUE7RUFDRSx5QkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0NBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9tZW51L21lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVudXtcclxuICB3aWR0aDoxMDAlO1xyXG4gIGJhY2tncm91bmQ6IzIwMjAyMCAhaW1wb3J0YW50O1xyXG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG59XHJcblxyXG4ubmF2YmFye1xyXG4gIHBhZGRpbmc6M3B4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tZW51LmZpeGVke1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDowO1xyXG4gIHotaW5kZXg6IDEwMDAwO1xyXG59XHJcblxyXG4ubmF2LWl0ZW17XHJcbiAgYm9yZGVyLWxlZnQ6MXB4IHNvbGlkICMwZjBmMGY7XHJcbiAgbWFyZ2luLXJpZ2h0OjEwcHg7XHJcbn1cclxuXHJcbi5kcm9wZG93bntcclxuXHRwb3NpdGlvbjpyZWxhdGl2ZTtcclxuXHRkaXNwbGF5OmlubGluZS1ibG9jaztcclxufVxyXG5cclxuLmRyb3Bkb3duLWNvbnRlbnR7XHJcblx0ZGlzcGxheTpub25lO1xyXG5cdHBvc2l0aW9uOmFic29sdXRlO1xyXG5cdHotaW5kZXg6MTtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiMxZDFjMWM7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1pdGVte1xyXG4gIGNvbG9yOnJnYigyMjMsIDIyMywgMjIzKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZHJvcGRvd246aG92ZXIgLmRyb3Bkb3duLWNvbnRlbnR7XHJcblx0ZGlzcGxheTpibG9jaztcclxufVxyXG5cclxuLmRyb3Bkb3duLWl0ZW06aG92ZXJ7XHJcbiAgY29sb3I6IzE0MTQxNCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZHJvcGRvd246aG92ZXIgLmRyb3Bkb3duLWl0ZW17XHJcbiAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgIzE0MTQxNDtcclxufVxyXG5cclxuXHJcbiIsIi5tZW51IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICMyMDIwMjAgIWltcG9ydGFudDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubmF2YmFyIHtcbiAgcGFkZGluZzogM3B4ICFpbXBvcnRhbnQ7XG59XG5cbi5tZW51LmZpeGVkIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB6LWluZGV4OiAxMDAwMDtcbn1cblxuLm5hdi1pdGVtIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjMGYwZjBmO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5kcm9wZG93biB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uZHJvcGRvd24tY29udGVudCB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFkMWMxYztcbn1cblxuLmRyb3Bkb3duLWl0ZW0ge1xuICBjb2xvcjogI2RmZGZkZiAhaW1wb3J0YW50O1xufVxuXG4uZHJvcGRvd246aG92ZXIgLmRyb3Bkb3duLWNvbnRlbnQge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmRyb3Bkb3duLWl0ZW06aG92ZXIge1xuICBjb2xvcjogIzE0MTQxNCAhaW1wb3J0YW50O1xufVxuXG4uZHJvcGRvd246aG92ZXIgLmRyb3Bkb3duLWl0ZW0ge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzE0MTQxNDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/header/menu/menu.component.ts":
/*!***********************************************!*\
  !*** ./src/app/header/menu/menu.component.ts ***!
  \***********************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _movie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../movie.service */ "./src/app/movie.service.ts");



let MenuComponent = class MenuComponent {
    constructor(movieService) {
        this.movieService = movieService;
    }
    ngOnInit() {
        this.getCategoryFromServer();
        this.getCountryFromServer();
    }
    getCategoryFromServer() {
        this.movieService.getCategory().subscribe((updateCategory) => {
            this.Category = updateCategory;
        });
    }
    getCountryFromServer() {
        this.movieService.getCountry().subscribe((updateCountry) => {
            this.Country = updateCountry;
        });
    }
};
MenuComponent.ctorParameters = () => [
    { type: _movie_service__WEBPACK_IMPORTED_MODULE_2__["MovieService"] }
];
MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-menu',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/menu/menu.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./menu.component.scss */ "./src/app/header/menu/menu.component.scss")).default]
    })
], MenuComponent);



/***/ }),

/***/ "./src/app/movie.service.ts":
/*!**********************************!*\
  !*** ./src/app/movie.service.ts ***!
  \**********************************/
/*! exports provided: MovieService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieService", function() { return MovieService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");





let MovieService = class MovieService {
    constructor(http) {
        this.http = http;
        this.moviesURL = 'http://localhost:4000/movie';
        this.countryURL = 'http://localhost:4000/country';
        this.categoryURL = 'http://localhost:4000/category';
    }
    // Get All Category
    getCategory() {
        return this.http.get(`${this.categoryURL}`);
    }
    getCountry() {
        return this.http.get(`${this.countryURL}`);
    }
    get8Moviebo() {
        return this.http.get(`${this.moviesURL}/get8phimbo`);
    }
    get8Moviele() {
        return this.http.get(`${this.moviesURL}/get8phimle`);
    }
    get10Moviebo() {
        return this.http.get(`${this.moviesURL}/get10phimbo`);
    }
    get10Moviele() {
        return this.http.get(`${this.moviesURL}/get10phimle`);
    }
    //update
    updateMovie(id, data) {
        console.log(data);
        return this.http.put(`${this.moviesURL}/update/${id}`, data);
    }
    // Create
    createMovie(data) {
        console.log(data);
        let url = `${this.moviesURL}/create`;
        return this.http.post(url, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorMgmt));
    }
    getMovieFromTypeYear(typeName) {
        return this.http.get(`${this.moviesURL}/type/${typeName}/2019`);
    }
    getMovieFromId(id) {
        // const url=`${this.moviesURL}/${id}`;//gọi đến đường dẫn phim
        // console.log("run");
        return this.http.get(`${this.moviesURL}/detailmovie/${id}`);
    }
    getMovieFromCategory(release_year) {
        return this.http.get(`${this.moviesURL}/detailmovie/samemovie/${release_year}`);
    }
    getMovieFromSearch(name) {
        console.log(name);
        return this.http.get(`${this.moviesURL}/search?name_like=${name}`);
    }
    getMovieFromType(typeName) {
        return this.http.get(`${this.moviesURL}/type/${typeName}`);
    }
    getMovieFromTheater() {
        return this.http.get(`${this.moviesURL}/theater`);
    }
    deleteMovie(id) {
        // console.log("movie service");
        // console.log(id);
        return this.http.get(`${this.moviesURL}/delete/${id}`);
    }
    // Get all employees
    getAllMovie() {
        return this.http.get(`${this.moviesURL}`);
    }
    // Error handling
    errorMgmt(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        }
        else {
            // Get server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.log(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorMessage);
    }
    getPager(totalItems, currentPage = 1, pageSize = 20) {
        // calculate total pages
        let totalPages = Math.ceil(totalItems / pageSize);
        // ensure current page isn't out of range
        if (currentPage < 1) {
            currentPage = 1;
        }
        else if (currentPage > totalPages) {
            currentPage = totalPages;
        }
        let startPage, endPage;
        if (totalPages <= 10) {
            // less than 10 total pages so show all
            startPage = 1;
            endPage = totalPages;
        }
        else {
            // more than 10 total pages so calculate start and end pages
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            }
            else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            }
            else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }
        // calculate start and end item indexes
        let startIndex = (currentPage - 1) * pageSize;
        let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
        // create an array of pages to ng-repeat in the pager control
        let pages = Array.from(Array((endPage + 1) - startPage).keys()).map(i => startPage + i);
        // return object with all pager properties required by the view
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    }
};
MovieService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
];
MovieService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MovieService);



/***/ }),

/***/ "./src/app/samemovie/samemovie.component.scss":
/*!****************************************************!*\
  !*** ./src/app/samemovie/samemovie.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".caption span {\n  text-transform: uppercase;\n  border-bottom: dashed 2px #000000;\n}\n\n.caption span {\n  font-size: 22px;\n  font-weight: 600;\n  color: #73ff00 !important;\n  text-shadow: 1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue;\n}\n\n.movie-item {\n  width: 24.4%;\n  position: relative;\n  background-color: #141313;\n  margin-bottom: 30px;\n  padding: 2px;\n}\n\n.current-status {\n  position: absolute;\n  color: white;\n  font-size: 13px;\n  font-weight: 700;\n  left: 11px;\n  top: 8px;\n  background-color: #ac0d0d;\n  padding: 3px 5px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  max-width: 55%;\n  z-index: 100;\n}\n\n.movie {\n  width: 100%;\n  height: 260px;\n  border: 1px solid #131111;\n  margin-bottom: 10px;\n}\n\n.title {\n  overflow: hidden;\n}\n\np {\n  margin-bottom: 2px !important;\n  padding-left: 5px;\n}\n\n.name {\n  font-weight: 700;\n  color: #585ad4;\n  font-size: 15px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n\n.real-name {\n  font-size: 14px;\n  color: #d3c500;\n  font-weight: 400;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2FtZW1vdmllL0Q6XFxkb3dubm5cXGFuZ3VsYXJtb3ZpZS9zcmNcXGFwcFxcc2FtZW1vdmllXFxzYW1lbW92aWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NhbWVtb3ZpZS9zYW1lbW92aWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSx5QkFBQTtFQUNBLGlDQUFBO0FDQUY7O0FER0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLCtEQUFBO0FDQUY7O0FER0E7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ0FGOztBREdBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUNBRjs7QURHQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQ0FGOztBREdBO0VBQ0UsZ0JBQUE7QUNBRjs7QURHQTtFQUNFLDZCQUFBO0VBQ0EsaUJBQUE7QUNBRjs7QURHQTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL3NhbWVtb3ZpZS9zYW1lbW92aWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmNhcHRpb24gc3BhbntcclxuICB0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7XHJcbiAgYm9yZGVyLWJvdHRvbTpkYXNoZWQgMnB4ICMwMDAwMDA7XHJcbn1cclxuXHJcbi5jYXB0aW9uIHNwYW57XHJcbiAgZm9udC1zaXplOjIycHg7XHJcbiAgZm9udC13ZWlnaHQ6NjAwO1xyXG4gIGNvbG9yOiM3M2ZmMDAgIWltcG9ydGFudDtcclxuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAycHggYmxhY2ssIDAgMCAyNXB4IGJsdWUsIDAgMCA1cHggZGFya2JsdWU7XHJcbn1cclxuXHJcbi5tb3ZpZS1pdGVte1xyXG4gIHdpZHRoOjI0LjQlO1xyXG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IzE0MTMxMztcclxuICBtYXJnaW4tYm90dG9tOjMwcHg7XHJcbiAgcGFkZGluZzoycHg7XHJcbn1cclxuXHJcbi5jdXJyZW50LXN0YXR1c3tcclxuICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICBjb2xvcjp3aGl0ZTtcclxuICBmb250LXNpemU6MTNweDtcclxuICBmb250LXdlaWdodDo3MDA7XHJcbiAgbGVmdDoxMXB4O1xyXG4gIHRvcDo4cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjojYWMwZDBkO1xyXG4gIHBhZGRpbmc6M3B4IDVweDtcclxuICB3aGl0ZS1zcGFjZTpub3dyYXA7XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgb3ZlcmZsb3c6aGlkZGVuO1xyXG4gIG1heC13aWR0aDo1NSU7XHJcbiAgei1pbmRleDoxMDA7XHJcbn1cclxuXHJcbi5tb3ZpZXtcclxuICB3aWR0aDoxMDAlO1xyXG4gIGhlaWdodDoyNjBweDtcclxuICBib3JkZXI6MXB4IHNvbGlkICMxMzExMTE7XHJcbiAgbWFyZ2luLWJvdHRvbToxMHB4O1xyXG59XHJcblxyXG4udGl0bGV7XHJcbiAgb3ZlcmZsb3c6aGlkZGVuO1xyXG59XHJcblxyXG5we1xyXG4gIG1hcmdpbi1ib3R0b206MnB4ICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZy1sZWZ0OjVweDtcclxufVxyXG5cclxuLm5hbWV7XHJcbiAgZm9udC13ZWlnaHQ6NzAwO1xyXG4gIGNvbG9yOiM1ODVhZDQ7XHJcbiAgZm9udC1zaXplOjE1cHg7XHJcbiAgd2hpdGUtc3BhY2U6bm93cmFwO1xyXG4gIHRleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7XHJcbiAgb3ZlcmZsb3c6aGlkZGVuO1xyXG59XHJcblxyXG4ucmVhbC1uYW1le1xyXG4gIGZvbnQtc2l6ZToxNHB4O1xyXG4gIGNvbG9yOnJnYigyMTEsIDE5NywgMCk7XHJcbiAgZm9udC13ZWlnaHQ6NDAwO1xyXG4gIHdoaXRlLXNwYWNlOm5vd3JhcDtcclxuICB0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO1xyXG4gIG92ZXJmbG93OmhpZGRlbjtcclxufVxyXG4iLCIuY2FwdGlvbiBzcGFuIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgYm9yZGVyLWJvdHRvbTogZGFzaGVkIDJweCAjMDAwMDAwO1xufVxuXG4uY2FwdGlvbiBzcGFuIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzczZmYwMCAhaW1wb3J0YW50O1xuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAycHggYmxhY2ssIDAgMCAyNXB4IGJsdWUsIDAgMCA1cHggZGFya2JsdWU7XG59XG5cbi5tb3ZpZS1pdGVtIHtcbiAgd2lkdGg6IDI0LjQlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNDEzMTM7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIHBhZGRpbmc6IDJweDtcbn1cblxuLmN1cnJlbnQtc3RhdHVzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGVmdDogMTFweDtcbiAgdG9wOiA4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhYzBkMGQ7XG4gIHBhZGRpbmc6IDNweCA1cHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXgtd2lkdGg6IDU1JTtcbiAgei1pbmRleDogMTAwO1xufVxuXG4ubW92aWUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyNjBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzEzMTExMTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLnRpdGxlIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxucCB7XG4gIG1hcmdpbi1ib3R0b206IDJweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbn1cblxuLm5hbWUge1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogIzU4NWFkNDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnJlYWwtbmFtZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICNkM2M1MDA7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/samemovie/samemovie.component.ts":
/*!**************************************************!*\
  !*** ./src/app/samemovie/samemovie.component.ts ***!
  \**************************************************/
/*! exports provided: SamemovieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SamemovieComponent", function() { return SamemovieComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SamemovieComponent = class SamemovieComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SamemovieComponent.prototype, "movie", void 0);
SamemovieComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-samemovie',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./samemovie.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/samemovie/samemovie.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./samemovie.component.scss */ "./src/app/samemovie/samemovie.component.scss")).default]
    })
], SamemovieComponent);



/***/ }),

/***/ "./src/app/slidemovie/slidemovie.component.scss":
/*!******************************************************!*\
  !*** ./src/app/slidemovie/slidemovie.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".frame {\n  position: relative;\n}\n\n.khoi-slide {\n  width: 100%;\n  height: 200px;\n  position: relative;\n  overflow: hidden;\n}\n\n.cac-slide {\n  overflow: hidden;\n}\n\n.slide {\n  position: absolute;\n  top: 0;\n  left: 0;\n  opacity: 0;\n  visibility: hidden;\n  width: 100%;\n}\n\nimg {\n  width: 114px;\n  height: 150px;\n}\n\n.slide.active {\n  opacity: 1;\n  visibility: visible;\n}\n\n.actor {\n  background: #0f0f0f;\n  padding: 5px;\n}\n\n.nut-slide i {\n  color: white;\n  font-size: 15px !important;\n  font-weight: 700;\n  opacity: 0.6;\n  padding: 5px;\n  background-color: #353232;\n  border: 1px solid #FFFFFF;\n}\n\n.nut-slide i:hover {\n  opacity: 1;\n  background-color: black;\n}\n\n#btn-prev {\n  position: absolute;\n  top: 132px;\n  left: 0px;\n  z-index: 1000;\n  cursor: pointer;\n}\n\n#btn-next {\n  position: absolute;\n  top: 132px;\n  right: 0px;\n  z-index: 1000;\n  cursor: pointer;\n}\n\n.bienmatbentrai {\n  -webkit-animation: bienmatbentrai 1s forwards;\n          animation: bienmatbentrai 1s forwards;\n}\n\n@-webkit-keyframes bienmatbentrai {\n  from {\n    -webkit-transform: translateX(0%);\n            transform: translateX(0%);\n  }\n  to {\n    -webkit-transform: translateX(-100%);\n            transform: translateX(-100%);\n  }\n}\n\n.divaobenphai {\n  -webkit-animation: divaobenphai 1s forwards;\n          animation: divaobenphai 1s forwards;\n}\n\n@-webkit-keyframes divaobenphai {\n  from {\n    -webkit-transform: translateX(100%);\n            transform: translateX(100%);\n  }\n  to {\n    -webkit-transform: translateX(0%);\n            transform: translateX(0%);\n  }\n}\n\n.bienmatbenphai {\n  -webkit-animation: bienmatbenphai 1s forwards;\n          animation: bienmatbenphai 1s forwards;\n}\n\n@-webkit-keyframes bienmatbenphai {\n  from {\n    -webkit-transform: translateX(0%);\n            transform: translateX(0%);\n  }\n  to {\n    -webkit-transform: translateX(100%);\n            transform: translateX(100%);\n  }\n}\n\n.divaobentrai {\n  -webkit-animation: divaobentrai 1s forwards;\n          animation: divaobentrai 1s forwards;\n}\n\n@-webkit-keyframes divaobentrai {\n  from {\n    -webkit-transform: translateX(-100%);\n            transform: translateX(-100%);\n  }\n  to {\n    -webkit-transform: translateX(0%);\n            transform: translateX(0%);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2xpZGVtb3ZpZS9EOlxcZG93bm5uXFxhbmd1bGFybW92aWUvc3JjXFxhcHBcXHNsaWRlbW92aWVcXHNsaWRlbW92aWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NsaWRlbW92aWUvc2xpZGVtb3ZpZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURNQTtFQUNFLGdCQUFBO0FDSEY7O0FETUE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ0hGOztBRE1BO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUNIRjs7QURNQTtFQUNFLFVBQUE7RUFDQSxtQkFBQTtBQ0hGOztBRE1BO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0FDSEY7O0FETUE7RUFDRSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtBQ0hGOztBRE1BO0VBQ0UsVUFBQTtFQUNBLHVCQUFBO0FDSEY7O0FETUE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUNIRjs7QURNQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQ0hGOztBRE1BO0VBQ0UsNkNBQUE7VUFBQSxxQ0FBQTtBQ0hGOztBRE1BO0VBQ0U7SUFBTSxpQ0FBQTtZQUFBLHlCQUFBO0VDRk47RURHQTtJQUFLLG9DQUFBO1lBQUEsNEJBQUE7RUNBTDtBQUNGOztBREVBO0VBQ0UsMkNBQUE7VUFBQSxtQ0FBQTtBQ0FGOztBREdBO0VBQ0U7SUFBTSxtQ0FBQTtZQUFBLDJCQUFBO0VDQ047RURBQTtJQUFLLGlDQUFBO1lBQUEseUJBQUE7RUNHTDtBQUNGOztBRERBO0VBQ0UsNkNBQUE7VUFBQSxxQ0FBQTtBQ0dGOztBREFBO0VBQ0U7SUFBTSxpQ0FBQTtZQUFBLHlCQUFBO0VDSU47RURIQTtJQUFLLG1DQUFBO1lBQUEsMkJBQUE7RUNNTDtBQUNGOztBREpBO0VBQ0UsMkNBQUE7VUFBQSxtQ0FBQTtBQ01GOztBREhBO0VBQ0U7SUFBTSxvQ0FBQTtZQUFBLDRCQUFBO0VDT047RUROQTtJQUFLLGlDQUFBO1lBQUEseUJBQUE7RUNTTDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc2xpZGVtb3ZpZS9zbGlkZW1vdmllLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZyYW1le1xyXG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG59XHJcblxyXG4ua2hvaS1zbGlkZXtcclxuICB3aWR0aDoxMDAlO1xyXG4gIGhlaWdodDoyMDBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3ZlcmZsb3c6aGlkZGVuO1xyXG59XHJcblxyXG5oNHtcclxuXHJcbn1cclxuXHJcbi5jYWMtc2xpZGV7XHJcbiAgb3ZlcmZsb3c6aGlkZGVuO1xyXG59XHJcblxyXG4uc2xpZGV7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDowO1xyXG4gIGxlZnQ6MDtcclxuICBvcGFjaXR5OjA7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIHdpZHRoOjEwMCU7XHJcbn1cclxuXHJcbmltZ3tcclxuICB3aWR0aDoxMTRweDtcclxuICBoZWlnaHQ6MTUwcHg7XHJcbn1cclxuXHJcbi5zbGlkZS5hY3RpdmV7XHJcbiAgb3BhY2l0eToxO1xyXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbn1cclxuXHJcbi5hY3RvcntcclxuICBiYWNrZ3JvdW5kOiAjMGYwZjBmO1xyXG4gIHBhZGRpbmc6NXB4O1xyXG59XHJcblxyXG4ubnV0LXNsaWRlIGl7XHJcbiAgY29sb3I6d2hpdGU7XHJcbiAgZm9udC1zaXplOjE1cHggIWltcG9ydGFudDtcclxuICBmb250LXdlaWdodDo3MDA7XHJcbiAgb3BhY2l0eTogMC42O1xyXG4gIHBhZGRpbmc6NXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6cmdiKDUzLCA1MCwgNTApO1xyXG4gIGJvcmRlcjoxcHggc29saWQgI0ZGRkZGRjtcclxufVxyXG5cclxuLm51dC1zbGlkZSBpOmhvdmVye1xyXG4gIG9wYWNpdHk6MTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigwLCAwLCAwKTtcclxufVxyXG5cclxuI2J0bi1wcmV2e1xyXG4gIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gIHRvcDoxMzJweDtcclxuICBsZWZ0OjBweDtcclxuICB6LWluZGV4OjEwMDA7XHJcbiAgY3Vyc29yOnBvaW50ZXI7XHJcbn1cclxuXHJcbiNidG4tbmV4dHtcclxuICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICB0b3A6MTMycHg7XHJcbiAgcmlnaHQ6MHB4O1xyXG4gIHotaW5kZXg6MTAwMDtcclxuICBjdXJzb3I6cG9pbnRlcjtcclxufVxyXG5cclxuLmJpZW5tYXRiZW50cmFpe1xyXG4gIGFuaW1hdGlvbjpiaWVubWF0YmVudHJhaSAxcyBmb3J3YXJkcztcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIGJpZW5tYXRiZW50cmFpe1xyXG4gIGZyb20ge3RyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7fVxyXG4gIHRvIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTt9XHJcbn1cclxuXHJcbi5kaXZhb2JlbnBoYWl7XHJcbiAgYW5pbWF0aW9uOmRpdmFvYmVucGhhaSAxcyBmb3J3YXJkcztcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIGRpdmFvYmVucGhhaXtcclxuICBmcm9tIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7fVxyXG4gIHRvIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTt9XHJcbn1cclxuXHJcbi5iaWVubWF0YmVucGhhaXtcclxuICBhbmltYXRpb246Ymllbm1hdGJlbnBoYWkgMXMgZm9yd2FyZHM7XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBiaWVubWF0YmVucGhhaXtcclxuICBmcm9tIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO31cclxuICB0byB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTt9XHJcbn1cclxuXHJcbi5kaXZhb2JlbnRyYWl7XHJcbiAgYW5pbWF0aW9uOmRpdmFvYmVudHJhaSAxcyBmb3J3YXJkcztcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIGRpdmFvYmVudHJhaXtcclxuICBmcm9tIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO31cclxuICB0byB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7fVxyXG59XHJcbiIsIi5mcmFtZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmtob2ktc2xpZGUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uY2FjLXNsaWRlIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnNsaWRlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIG9wYWNpdHk6IDA7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmltZyB7XG4gIHdpZHRoOiAxMTRweDtcbiAgaGVpZ2h0OiAxNTBweDtcbn1cblxuLnNsaWRlLmFjdGl2ZSB7XG4gIG9wYWNpdHk6IDE7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbi5hY3RvciB7XG4gIGJhY2tncm91bmQ6ICMwZjBmMGY7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuLm51dC1zbGlkZSBpIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgb3BhY2l0eTogMC42O1xuICBwYWRkaW5nOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNTMyMzI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNGRkZGRkY7XG59XG5cbi5udXQtc2xpZGUgaTpob3ZlciB7XG4gIG9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuXG4jYnRuLXByZXYge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTMycHg7XG4gIGxlZnQ6IDBweDtcbiAgei1pbmRleDogMTAwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4jYnRuLW5leHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTMycHg7XG4gIHJpZ2h0OiAwcHg7XG4gIHotaW5kZXg6IDEwMDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmJpZW5tYXRiZW50cmFpIHtcbiAgYW5pbWF0aW9uOiBiaWVubWF0YmVudHJhaSAxcyBmb3J3YXJkcztcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIGJpZW5tYXRiZW50cmFpIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgfVxufVxuLmRpdmFvYmVucGhhaSB7XG4gIGFuaW1hdGlvbjogZGl2YW9iZW5waGFpIDFzIGZvcndhcmRzO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgZGl2YW9iZW5waGFpIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xuICB9XG59XG4uYmllbm1hdGJlbnBoYWkge1xuICBhbmltYXRpb246IGJpZW5tYXRiZW5waGFpIDFzIGZvcndhcmRzO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgYmllbm1hdGJlbnBoYWkge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gIH1cbn1cbi5kaXZhb2JlbnRyYWkge1xuICBhbmltYXRpb246IGRpdmFvYmVudHJhaSAxcyBmb3J3YXJkcztcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIGRpdmFvYmVudHJhaSB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/slidemovie/slidemovie.component.ts":
/*!****************************************************!*\
  !*** ./src/app/slidemovie/slidemovie.component.ts ***!
  \****************************************************/
/*! exports provided: SlidemovieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlidemovieComponent", function() { return SlidemovieComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SlidemovieComponent = class SlidemovieComponent {
    constructor() { }
    ngOnInit() {
    }
};
SlidemovieComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-slidemovie',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./slidemovie.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/slidemovie/slidemovie.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./slidemovie.component.scss */ "./src/app/slidemovie/slidemovie.component.scss")).default]
    })
], SlidemovieComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\downnn\angularmovie\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map