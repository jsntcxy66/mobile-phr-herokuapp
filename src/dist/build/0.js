webpackJsonp([0],{

/***/ 577:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodtrackerPageModule", function() { return FoodtrackerPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foodtracker__ = __webpack_require__(604);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FoodtrackerPageModule = (function () {
    function FoodtrackerPageModule() {
    }
    FoodtrackerPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__foodtracker__["a" /* FoodtrackerPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__foodtracker__["a" /* FoodtrackerPage */]),
            ],
        })
    ], FoodtrackerPageModule);
    return FoodtrackerPageModule;
}());

//# sourceMappingURL=foodtracker.module.js.map

/***/ }),

/***/ 604:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FoodtrackerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_trackers_trackers__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_question_question__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the FoodtrackerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FoodtrackerPage = (function () {
    function FoodtrackerPage(navCtrl, navParams, fb, trackerService, qp) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fb = fb;
        this.trackerService = trackerService;
        this.qp = qp;
        this.foodtracker = "track";
        this.questions = qp.getTrackersQuestions(1);
        this.createForm();
    }
    FoodtrackerPage.prototype.createForm = function () {
        this.nowTime = new Date().toISOString();
        this.foodForm = this.fb.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            weight: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            timeperiod: ['Breakfast', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            date: [this.nowTime, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]
        });
    };
    FoodtrackerPage.prototype.ngOnInit = function () {
        // this.trackerService.getFoods()
        //   .subscribe(foods => {
        //     foods.sort((a: Food, b: Food) => {
        //       var shortdate_a = new Date(new Date(a.date).getFullYear(), new Date(a.date).getMonth() - 1, new Date(a.date).getDate());
        //       var shortdate_b = new Date(new Date(b.date).getFullYear(), new Date(b.date).getMonth() - 1, new Date(b.date).getDate());
        //       if (shortdate_a > shortdate_b) {
        //         return -1;
        //       }
        //       if (shortdate_a < shortdate_b) {
        //         return 1;
        //       }
        //       if (a.timeperiod.charCodeAt(0) - b.timeperiod.charCodeAt(0) == 8 || a.timeperiod.charCodeAt(0) - b.timeperiod.charCodeAt(0) == -2 || a.timeperiod.charCodeAt(0) - b.timeperiod.charCodeAt(0) == -10) {
        //         return -1;
        //       }
        //       if (a.timeperiod.charCodeAt(0) - b.timeperiod.charCodeAt(0) == -8 || a.timeperiod.charCodeAt(0) - b.timeperiod.charCodeAt(0) == 2 || a.timeperiod.charCodeAt(0) - b.timeperiod.charCodeAt(0) == 10) {
        //         return 1;
        //       }
        //     });
        //     foods.forEach(food => {
        //       console.log(food.timeperiod, food.date);
        //     });
        //     console.log('Breakfast'.charCodeAt(0));
        //     console.log('Lunch'.charCodeAt(0));
        //     console.log('Dinner'.charCodeAt(0));
        //     this.foods = foods;
        //   }, errmess => this.errMess = <any>errmess);
    };
    FoodtrackerPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FoodtrackerPage');
    };
    FoodtrackerPage.prototype.doRefresh = function (refresher) {
        // console.log('Begin async operation', refresher);
        // setTimeout(() => {
        //   this.trackerService.getFoods()
        //     .subscribe(foods => {
        //       foods.sort((a: Food, b: Food) => {
        //         var shortdate_a = new Date(new Date(a.date).getFullYear(), new Date(a.date).getMonth() - 1, new Date(a.date).getDate());
        //         var shortdate_b = new Date(new Date(b.date).getFullYear(), new Date(b.date).getMonth() - 1, new Date(b.date).getDate());
        //         if (shortdate_a > shortdate_b) {
        //           return -1;
        //         }
        //         if (shortdate_a < shortdate_b) {
        //           return 1;
        //         }
        //         if (a.timeperiod.charCodeAt(0) - b.timeperiod.charCodeAt(0) == 8 || a.timeperiod.charCodeAt(0) - b.timeperiod.charCodeAt(0) == -2 || a.timeperiod.charCodeAt(0) - b.timeperiod.charCodeAt(0) == -10) {
        //           return -1;
        //         }
        //         if (a.timeperiod.charCodeAt(0) - b.timeperiod.charCodeAt(0) == -8 || a.timeperiod.charCodeAt(0) - b.timeperiod.charCodeAt(0) == 2 || a.timeperiod.charCodeAt(0) - b.timeperiod.charCodeAt(0) == 10) {
        //           return 1;
        //         }
        //       });
        //       this.foods = foods;
        //     }, errmess => this.errMess = <any>errmess);
        //   console.log('Async operation has ended');
        //   refresher.complete();
        // }, 1500);
    };
    FoodtrackerPage.prototype.onSubmit = function () {
        this.food = this.foodForm.value;
        //var tzoffset = (new Date()).getTimezoneOffset() * 60000; //offset in milliseconds
        //var localISOTime = (new Date(Date.now() - tzoffset)).toISOString().slice(0, -1);
        // this.trackerService.addFood(this.food);
        this.createForm();
    };
    FoodtrackerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-foodtracker',template:/*ion-inline-start:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/foodtracker/foodtracker.html"*/'<!--\n  Generated template for the FoodtrackerPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>FOOD</ion-title>\n  </ion-navbar>\n\n  <ion-toolbar color="primary">\n    <ion-segment color="light" [(ngModel)]="foodtracker">\n      <ion-segment-button value="track">\n        TRACK\n      </ion-segment-button>\n      <ion-segment-button value="history">\n        HISTORY\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content color="primary" pullingIcon="arrow-dropdown" pullingText="Pull to refresh" refreshingSpinner="circles"\n      refreshingText="Refreshing..."></ion-refresher-content>\n  </ion-refresher>\n  <div [ngSwitch]="foodtracker">\n    <div *ngSwitchCase="\'track\'">\n      <ion-card>\n        <ion-card-content>\n          <dynamic-form [questions]="questions"></dynamic-form>\n          <!-- <form [formGroup]=\'foodForm\' (ngSubmit)="onSubmit()">\n            <ion-item class="fix-underline">\n              <ion-label color="primary" floating>Food</ion-label>\n              <ion-input type="text" formControlName="name"></ion-input>\n            </ion-item>\n            <ion-item class="fix-underline">\n              <ion-label color="primary" floating>Weight</ion-label>\n              <ion-input type="text" formControlName="weight"></ion-input>\n            </ion-item>\n            <ion-item class="fix-underline">\n              <ion-label color="primary" fixed>Time Period</ion-label>\n              <ion-select formControlName="timeperiod" text-wrap>\n                <ion-option value="Breakfast">Breakfast</ion-option>\n                <ion-option value="Lunch">Lunch</ion-option>\n                <ion-option value="Dinner">Dinner</ion-option>\n              </ion-select>\n            </ion-item>\n            <ion-item class="fix-underline">\n              <ion-label color="primary" fixed>Date</ion-label>\n              <ion-datetime displayFormat="MM/DD/YYYY" formControlName="date"></ion-datetime>\n            </ion-item>\n            <button ion-button type="submit" [disabled]="!foodForm.valid">Record</button>\n          </form> -->\n        </ion-card-content>\n      </ion-card>\n    </div>\n    <div *ngSwitchCase="\'history\'">\n      <ion-list *ngIf="foods">\n        <ion-card *ngFor="let food of foods">\n          <ion-item>\n            <ion-row class="color-primary-darker">\n              {{food.name}} {{food.weight}}\n            </ion-row>\n            <ion-row>\n              <ion-note>\n                {{food.timeperiod}} - {{food.date | date}}\n              </ion-note>\n            </ion-row>\n          </ion-item>\n        </ion-card>\n      </ion-list>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/foodtracker/foodtracker.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_3__providers_trackers_trackers__["a" /* TrackersProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_question_question__["a" /* QuestionProvider */]])
    ], FoodtrackerPage);
    return FoodtrackerPage;
}());

//# sourceMappingURL=foodtracker.js.map

/***/ })

});
//# sourceMappingURL=0.js.map