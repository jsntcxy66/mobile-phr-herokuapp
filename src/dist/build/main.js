webpackJsonp([43],{

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiagnosticProcedureClassificationProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/*
  Generated class for the DiagnosticProcedureClassificationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DiagnosticProcedureClassificationProvider = (function () {
    function DiagnosticProcedureClassificationProvider() {
    }
    DiagnosticProcedureClassificationProvider.prototype.getMenu = function (id) {
        var arr = [];
        if (id === 0) {
            arr = [
                { id: 1, name: 'ECG', menu: 'diagnostic-procedure', end: true },
                { id: 2, name: 'X-Ray', menu: 'diagnostic-procedure', end: true },
                { id: 3, name: 'CT Scan', menu: 'diagnostic-procedure', end: true },
                { id: 4, name: 'MRI', menu: 'diagnostic-procedure', end: true },
                { id: 5, name: 'Ultrasound', menu: 'diagnostic-procedure', end: true },
                { id: 6, name: 'Sleep Study', menu: 'diagnostic-procedure', end: true },
                { id: 7, name: 'Pulmonary Function Tests', menu: 'diagnostic-procedure', end: true },
                { id: 8, name: 'Miscellaneous', menu: 'diagnostic-procedure', end: true }
            ];
        }
        // else if (id === 1) {
        //   arr = [
        //     { id: 101, name: 'ECG', menu: 'diagnostic-procedure', end: true },
        //     { id: 102, name: 'Echocardiogram', menu: 'diagnostic-procedure', end: true },
        //     { id: 103, name: '24 Hour Holter', menu: 'diagnostic-procedure', end: true },
        //     { id: 104, name: '30 Day Event Monitor', menu: 'diagnostic-procedure', end: true },
        //     { id: 105, name: 'Nuclear exercise stress test - Lexiscan', menu: 'diagnostic-procedure', end: true },
        //     { id: 106, name: 'Nuclear stress test - Adenosine', menu: 'diagnostic-procedure', end: true },
        //     { id: 107, name: 'Stress echocardiogram', menu: 'diagnostic-procedure', end: true }
        //   ];
        // }
        // else if (id === 2) {
        //   arr = [
        //     { id: 200, name: 'Mammogram', menu: 'diagnostic-procedure', end: true },
        //     { id: 201, name: 'CXR', menu: 'diagnostic-procedure', end: true },
        //     { id: 202, name: 'AXR - KUB', menu: 'diagnostic-procedure', end: true },
        //     { id: 203, name: 'AXR - 4 View', menu: 'diagnostic-procedure', end: true },
        //     { id: 204, name: 'X- Ray', menu: 'diagnostic-procedure', end: true },
        //     { id: 205, name: 'CT Scan', menu: 'diagnostic-procedure', end: true },
        //     { id: 206, name: 'MRI', menu: 'diagnostic-procedure', end: true },
        //     { id: 207, name: 'Ultrasound', menu: 'diagnostic-procedure', end: true },
        //     { id: 208, name: 'Venous Dopplers', menu: 'diagnostic-procedure', end: true },
        //     { id: 209, name: 'Arterial Dopllers', menu: 'diagnostic-procedure', end: true },
        //     { id: 210, name: 'Dexa Scan', menu: 'diagnostic-procedure', end: true },
        //     { id: 211, name: 'Bone Scan', menu: 'diagnostic-procedure', end: true },
        //     { id: 212, name: 'CT Angiogram', menu: 'diagnostic-procedure', end: true }
        //   ];
        // }
        // else if (id === 3) {
        //   arr = [
        //     { id: 302, name: 'Sleep Study', menu: 'diagnostic-procedure', end: true },
        //     { id: 303, name: 'Pulmonary Function Tests', menu: 'diagnostic-procedure', end: true }
        //   ];
        // }
        // else if (id === 4) {
        //   arr = [
        //     { id: 401, name: "EMG and NCV's", menu: 'diagnostic-procedure', end: true },
        //     { id: 402, name: 'Other Tests', menu: 'diagnostic-procedure', end: true }
        //   ];
        // }
        return arr;
    };
    DiagnosticProcedureClassificationProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], DiagnosticProcedureClassificationProvider);
    return DiagnosticProcedureClassificationProvider;
}());

//# sourceMappingURL=diagnostic-procedure-classification.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_baseurl__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__process_httpmsg_process_httpmsg__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var UserProvider = (function () {
    function UserProvider(http, processHttpmsgService) {
        this.http = http;
        this.processHttpmsgService = processHttpmsgService;
    }
    UserProvider.prototype.getProfile = function (id) {
        var _this = this;
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__shared_baseurl__["a" /* baseurl */] + 'users/profile/' + id)
            .catch(function (error) { return _this.processHttpmsgService.handleError(error); });
    };
    UserProvider.prototype.editProfile = function (id, profile) {
        var _this = this;
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__shared_baseurl__["a" /* baseurl */] + 'users/profile/' + id, profile)
            .catch(function (error) { return _this.processHttpmsgService.handleError(error); });
    };
    UserProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__process_httpmsg_process_httpmsg__["a" /* ProcessHttpmsgProvider */]])
    ], UserProvider);
    return UserProvider;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllergyDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_question_question__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_question_control_question_control__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_service_auth_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_history_history__ = __webpack_require__(24);
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
 * Generated class for the AllergyDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AllergyDetailPage = (function () {
    function AllergyDetailPage(navCtrl, navParams, qcp, qp, viewCtrl, loadingCtrl, toastCtrl, historyProvider, auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.qcp = qcp;
        this.qp = qp;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.historyProvider = historyProvider;
        this.auth = auth;
        this.form = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({});
        this.color = ['dark-salmon', 'rosy-brown', 'slate-grey'];
        this.title = navParams.get('title');
        this.id = navParams.get('id');
        this.questions = this.qp.getAllergyQuestions();
        this.form = this.qcp.toFormGroup(this.questions);
        this.navcolor = this.color[(this.id - 1) % 3];
    }
    AllergyDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AllergyDetailPage');
    };
    AllergyDetailPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    AllergyDetailPage.prototype.onSubmit = function () {
        var _this = this;
        this.showLoader('Adding...');
        var payLoad = this.form.value;
        payLoad['category'] = this.title;
        console.log(payLoad);
        this.historyProvider.addAllergy(this.auth.userId, payLoad)
            .subscribe(function (res) {
            _this.loading.dismiss();
            _this.presentToast('Successfully added!');
            _this.viewCtrl.dismiss();
        }, function (err) {
            _this.loading.dismiss();
            _this.presentToast('Failed to add allergy record.');
        });
    };
    AllergyDetailPage.prototype.showLoader = function (msg) {
        this.loading = this.loadingCtrl.create({
            content: msg
        });
        this.loading.present();
    };
    AllergyDetailPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: false
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    AllergyDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-allergy-detail',template:/*ion-inline-start:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/allergy-detail/allergy-detail.html"*/'<!--\n  Generated template for the AllergyDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-toolbar [color]="navcolor">\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="white" showWhen="ios">Cancel</span>\n        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>{{title}}</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-content>\n      <div>\n        <form [formGroup]=\'form\' (ngSubmit)="onSubmit()">\n      \n          <div *ngFor="let question of questions">\n            <ion-item>\n              <dynamic-form-question [question]="question" [form]="form"></dynamic-form-question>\n            </ion-item>\n          </div>\n      \n          <div>\n            <button ion-button type="submit" [disabled]="!form.valid" color="slate-grey">Record</button>\n          </div>\n      \n        </form>\n      </div>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/allergy-detail/allergy-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_4__providers_question_control_question_control__["a" /* QuestionControlProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_question_question__["a" /* QuestionProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["ViewController"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_6__providers_history_history__["a" /* HistoryProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], AllergyDetailPage);
    return AllergyDetailPage;
}());

//# sourceMappingURL=allergy-detail.js.map

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllergyHistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__allergy_allergy__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__welcome_welcome__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_history_history__ = __webpack_require__(24);
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
 * Generated class for the AllergyHistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AllergyHistoryPage = (function () {
    function AllergyHistoryPage(navCtrl, navParams, historyProvider, auth, alertCtrl, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.historyProvider = historyProvider;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.records = [];
        if (!this.auth.userId) {
            this.presentAlert('Please login first.');
        }
        // this.records = [
        //   {
        //     category: 'Food Allergy',
        //     trigger: 'Eggs',
        //     symptom: 'Shortness of breath',
        //     threatening: true,
        //     date: '2018/01/09'
        //   },
        //   {
        //     category: 'Pet Allergy',
        //     trigger: 'Cat',
        //     symptom: 'Sneezing',
        //     threatening: false,
        //     date: '2017/10/21'
        //   },
        //   {
        //     category: 'Drug Allergy',
        //     trigger: 'Penicillin and related antibiotics',
        //     symptom: 'Skin rash',
        //     threatening: false,
        //     date: '2017/12/12'
        //   }
        // ];
        // get sorted records
        this.historyProvider.getAllergy(this.auth.userId)
            .subscribe(function (allergy) { return _this.records = allergy; }, function (errmess) { return _this.errMess = errmess; });
    }
    AllergyHistoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AllergyHistoryPage');
    };
    AllergyHistoryPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.historyProvider.getAllergy(this.auth.userId)
            .subscribe(function (allergy) { return _this.records = allergy; }, function (errmess) { return _this.errMess = errmess; });
    };
    AllergyHistoryPage.prototype.checkLifeThreatening = function (i) {
        return this.records[i].threatening;
    };
    AllergyHistoryPage.prototype.addAllergy = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__allergy_allergy__["a" /* AllergyPage */]);
    };
    AllergyHistoryPage.prototype.deleteRecord = function (i) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirm Delete',
            message: 'Are you sure you want to delete this record?',
            enableBackdropDismiss: true,
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel'
                },
                {
                    text: 'Delete',
                    handler: function () {
                        _this.historyProvider.deleteAllergy(_this.auth.userId, i)
                            .subscribe(function (res) {
                            _this.presentToast('Delete successfully.');
                            _this.historyProvider.getAllergy(_this.auth.userId)
                                .subscribe(function (allergy) { return _this.records = allergy; }, function (errmess) { return _this.errMess = errmess; });
                        }, function (err) { return _this.presentToast('Error: ' + err); });
                    }
                }
            ]
        });
        alert.present();
    };
    AllergyHistoryPage.prototype.presentAlert = function (msg) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Oops!',
            message: msg,
            enableBackdropDismiss: false,
            buttons: [
                {
                    text: 'Ok',
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__welcome_welcome__["a" /* WelcomePage */]);
                    }
                }
            ]
        });
        alert.present();
    };
    AllergyHistoryPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: false
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    AllergyHistoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-allergy-history',template:/*ion-inline-start:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/allergy-history/allergy-history.html"*/'<!--\n  Generated template for the AllergyHistoryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>ALLERGY</ion-title>\n  </ion-navbar>\n\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list *ngIf="records.length!=0">\n    <ion-list-header>Allergy History</ion-list-header>\n    <ion-item-sliding *ngFor="let record of records; let i = index">\n      <ion-item>\n        <div class="white-space">\n          <h3 *ngIf="checkLifeThreatening(i)">Symptom:\n            <span style="color:red">{{record.symptom}}</span>\n          </h3>\n          <h3 *ngIf="!checkLifeThreatening(i)">Symptom: {{record.symptom}}</h3>\n          <h3 *ngIf="checkLifeThreatening(i)">Trigger:\n            <span style="color:red">{{record.trigger}}</span>\n          </h3>\n          <h3 *ngIf="!checkLifeThreatening(i)">Trigger: {{record.trigger}}</h3>\n          <p>{{record.date | date}}</p>\n        </div>\n        <p item-end>{{record.category}}</p>\n      </ion-item>\n      <ion-item-options side="right" icon-start>\n        <button ion-button color="danger" (click)="deleteRecord(i)">\n          <ion-icon name="trash"></ion-icon>\n          Delete\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n\n  <ion-card [hidden]="records.length!=0">\n    <ion-card-header>No allergy record.</ion-card-header>\n  </ion-card>\n\n  <ion-fab right bottom>\n    <button ion-fab color="primary" (click)="addAllergy()">\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/allergy-history/allergy-history.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_5__providers_history_history__["a" /* HistoryProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"]])
    ], AllergyHistoryPage);
    return AllergyHistoryPage;
}());

//# sourceMappingURL=allergy-history.js.map

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllergyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_allergy_classification_allergy_classification__ = __webpack_require__(350);
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
 * Generated class for the AllergyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AllergyPage = (function () {
    function AllergyPage(navCtrl, navParams, acp) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.acp = acp;
        // get Main Menu
        this.tiles = this.acp.getMenu(0);
    }
    AllergyPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AllergyPage');
    };
    AllergyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-allergy',template:/*ion-inline-start:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/allergy/allergy.html"*/'<!--\n  Generated template for the AllergyPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>ALLERGY</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <tile [tiles]="tiles"></tile>\n\n</ion-content>\n'/*ion-inline-end:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/allergy/allergy.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__providers_allergy_classification_allergy_classification__["a" /* AllergyClassificationProvider */]])
    ], AllergyPage);
    return AllergyPage;
}());

//# sourceMappingURL=allergy.js.map

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard__ = __webpack_require__(61);
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
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, fb, menuCtrl, toastCtrl, loadingCtrl, authService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fb = fb;
        this.menuCtrl = menuCtrl;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.authService = authService;
        this.loginForm = this.fb.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]
        });
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.ionViewWillEnter = function () {
        this.menuCtrl.enable(false);
    };
    LoginPage.prototype.onSubmit = function () {
        var _this = this;
        this.showLoader('Authenticating...');
        var credentials = this.loginForm.value;
        credentials['username'] = this.loginForm.value.username.toLowerCase();
        console.log(credentials);
        this.authService.login(credentials)
            .subscribe(function (res) {
            _this.loading.dismiss();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard__["a" /* DashboardPage */]);
            _this.menuCtrl.enable(true);
        }, function (err) {
            _this.loading.dismiss();
            _this.presentToast('Login failed! Please try again. ' + err);
            console.log(err);
        });
    };
    LoginPage.prototype.showLoader = function (msg) {
        this.loading = this.loadingCtrl.create({
            content: msg
        });
        this.loading.present();
    };
    LoginPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: false
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>LOGIN</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form [formGroup]=\'loginForm\' (ngSubmit)="onSubmit()">\n    <ion-item>\n      <ion-label floating>Username</ion-label>\n      <ion-input type="text" formControlName="username"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Password</ion-label>\n      <ion-input type="password" formControlName="password"></ion-input>\n    </ion-item>\n    <button ion-button block class="btn" type="submit" [disabled]="!loginForm.valid">Signin</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["MenuController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppointmentAddAppointmentsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_add_contacts_contact_add_contacts__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_contacts_contacts__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_appointment_appointment__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_service_auth_service__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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







/**
 * Generated class for the AppointmentAddAppointmentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AppointmentAddAppointmentsPage = (function () {
    function AppointmentAddAppointmentsPage(navCtrl, navParams, modalCtrl, fb, viewCtrl, toastCtrl, loadingCtrl, contactsProvider, ap, auth) {
        // this.storage.get('userId').then(userId => {
        //   if (userId)
        //     this.userId = userId;
        //   else
        //     console.log('userId not defined');
        // });
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.fb = fb;
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.contactsProvider = contactsProvider;
        this.ap = ap;
        this.auth = auth;
        this.doctors = [];
        this.newAppointmentForm = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormGroup"]({});
        this.locations = [];
        //get doctors in such structure
        // this.doctors = [
        //   {
        //     id: 0,
        //     firstname: "Scott",
        //     lastname: "Williamson",
        //     locations: [
        //       "1100 Fifth Ave",
        //       "1090 Centre Ave"
        //     ]
        //   },
        //   {
        //     id: 1,
        //     firstname: "Aaric",
        //     lastname: "Falconi",
        //     locations: [
        //       "5542 Walnut St",
        //       "5819 Elwood St",
        //       "1001 Fifth Ave"
        //     ]
        //   }
        // ];
        this.newAppointmentForm = this.fb.group({
            time: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
            doctor: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required]],
            location: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required]]
        });
    }
    AppointmentAddAppointmentsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AppointmentAddAppointmentsPage');
    };
    AppointmentAddAppointmentsPage.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.contactsProvider.getDoctors(this.auth.userId).toPromise()];
                    case 1:
                        _a.doctors = (_b.sent());
                        return [2 /*return*/];
                }
            });
        });
    };
    AppointmentAddAppointmentsPage.prototype.selectDate = function ($event) {
        this.date = $event;
        console.log(this.date);
    };
    AppointmentAddAppointmentsPage.prototype.selectDoctor = function ($event) {
        var _this = this;
        //reset location formContrl value
        this.newAppointmentForm.patchValue({
            location: ''
        });
        this.locations = [];
        this.doctors.forEach(function (doctor) {
            if (doctor.id == $event)
                _this.locations = doctor.locations;
        });
        console.log(this.locations);
    };
    AppointmentAddAppointmentsPage.prototype.addContact = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__contact_add_contacts_contact_add_contacts__["a" /* ContactAddContactsPage */]);
        modal.present();
        modal.onWillDismiss(function () { return __awaiter(_this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.contactsProvider.getDoctors(this.auth.userId).toPromise()];
                    case 1:
                        _a.doctors = (_b.sent());
                        return [2 /*return*/];
                }
            });
        }); });
    };
    AppointmentAddAppointmentsPage.prototype.check_valid = function () {
        if (this.date == undefined)
            return false;
        else
            return true;
    };
    AppointmentAddAppointmentsPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    AppointmentAddAppointmentsPage.prototype.onSubmit = function () {
        var _this = this;
        this.showLoader('Adding...');
        //http post date + form.value
        var appForm = this.newAppointmentForm.value;
        var firstname, lastname;
        this.doctors.forEach(function (doctor) {
            if (doctor.id == appForm.doctor) {
                firstname = doctor.firstname;
                lastname = doctor.lastname;
            }
        });
        var app = {
            date: this.date,
            time: appForm.time,
            firstname: firstname,
            lastname: lastname,
            location: appForm.location
        };
        console.log(app);
        this.ap.addAppointment(this.auth.userId, app)
            .subscribe(function (app) {
            _this.loading.dismiss();
            _this.presentToast('Successfully added a new appointment.');
            _this.viewCtrl.dismiss();
        }, function (error) {
            _this.loading.dismiss();
            _this.presentToast('Failed to add a new appointment.');
        });
    };
    AppointmentAddAppointmentsPage.prototype.showLoader = function (msg) {
        this.loading = this.loadingCtrl.create({
            content: msg
        });
        this.loading.present();
    };
    AppointmentAddAppointmentsPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: false
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    AppointmentAddAppointmentsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-appointment-add-appointments',template:/*ion-inline-start:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/appointment-add-appointments/appointment-add-appointments.html"*/'<!--\n  Generated template for the AppointmentAddAppointmentsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-toolbar color="primary">\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="white" showWhen="ios">Cancel</span>\n        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>New Appointment</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-list-header>Choose a Date</ion-list-header>\n    <ion-card>\n      <calendar (selectDate)="selectDate($event)"></calendar>\n    </ion-card>\n  </ion-list>\n  <form [formGroup]="newAppointmentForm" (ngSubmit)="onSubmit()">\n    <ion-list>\n      <ion-list-header>Choose the time</ion-list-header>\n      <ion-item>\n        <ion-label fixed>Time</ion-label>\n        <ion-datetime displayFormat="hh:mm A" formControlName="time"></ion-datetime>\n      </ion-item>\n    </ion-list>\n    <ion-list radio-group formControlName="doctor">\n      <ion-list-header>Choose one doctor</ion-list-header>\n      <ion-item *ngFor="let doctor of doctors">\n        <ion-label>\n          <h2>{{doctor.firstname | titlecase}} {{doctor.lastname | titlecase}}</h2>\n        </ion-label>\n        <ion-radio value="{{doctor.id}}" (ionSelect)="selectDoctor($event)"></ion-radio>\n      </ion-item>\n      <button ion-button type="button" clear color="primary" (click)="addContact()">Add Contact</button>\n    </ion-list>\n    <ion-list radio-group formControlName="location">\n      <ion-list-header>Choose one Location</ion-list-header>\n      <ion-item *ngFor="let location of locations">\n        <ion-label text-wrap>\n          <h2>{{location}}</h2>\n        </ion-label>\n        <ion-radio value="{{location}}"></ion-radio>\n      </ion-item>\n    </ion-list>\n    <button ion-button block type="submit" [disabled]="!check_valid() || !newAppointmentForm.valid">Create</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/appointment-add-appointments/appointment-add-appointments.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_4__providers_contacts_contacts__["a" /* ContactsProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_appointment_appointment__["a" /* AppointmentProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], AppointmentAddAppointmentsPage);
    return AppointmentAddAppointmentsPage;
}());

//# sourceMappingURL=appointment-add-appointments.js.map

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MedicationDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_question_question__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_question_control_question_control__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_health_records_health_records__ = __webpack_require__(25);
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
 * Generated class for the MedicationDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MedicationDetailPage = (function () {
    function MedicationDetailPage(navCtrl, navParams, qp, qcp, loadingCtrl, toastCtrl, viewCtrl, auth, hrp) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.qp = qp;
        this.qcp = qcp;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.viewCtrl = viewCtrl;
        this.auth = auth;
        this.hrp = hrp;
        this.form = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({});
        this.questions = this.qp.getMedicationQuestions();
        this.form = this.qcp.toFormGroup(this.questions);
    }
    MedicationDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MedicationDetailPage');
    };
    MedicationDetailPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    MedicationDetailPage.prototype.onSubmit = function () {
        var _this = this;
        this.showLoader('Adding...');
        var payLoad = this.form.value;
        console.log(payLoad);
        this.hrp.addMedication(this.auth.userId, payLoad)
            .subscribe(function (res) {
            _this.loading.dismiss();
            _this.presentToast('Successfully added!');
            _this.viewCtrl.dismiss();
        }, function (err) {
            _this.loading.dismiss();
            _this.presentToast('Failed to add the record.');
        });
    };
    MedicationDetailPage.prototype.showLoader = function (msg) {
        this.loading = this.loadingCtrl.create({
            content: msg
        });
        this.loading.present();
    };
    MedicationDetailPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: false
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    MedicationDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-medication-detail',template:/*ion-inline-start:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/medication-detail/medication-detail.html"*/'<!--\n  Generated template for the MedicationDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-toolbar color="primary">\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="white" showWhen="ios">Cancel</span>\n        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Add Medication</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-content>\n      <div>\n        <form [formGroup]=\'form\' (ngSubmit)="onSubmit()">\n\n          <div *ngFor="let question of questions">\n            <ion-item>\n              <dynamic-form-question [question]="question" [form]="form"></dynamic-form-question>\n            </ion-item>\n          </div>\n\n          <div>\n            <button ion-button type="submit" [disabled]="!form.valid" color="slate-grey">Record</button>\n          </div>\n\n        </form>\n      </div>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/medication-detail/medication-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_3__providers_question_question__["a" /* QuestionProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_question_control_question_control__["a" /* QuestionControlProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["ViewController"],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_health_records_health_records__["a" /* HealthRecordsProvider */]])
    ], MedicationDetailPage);
    return MedicationDetailPage;
}());

//# sourceMappingURL=medication-detail.js.map

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImmunizationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_immunization_classification_immunization_classification__ = __webpack_require__(351);
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
 * Generated class for the ImmunizationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ImmunizationPage = (function () {
    function ImmunizationPage(navCtrl, navParams, icp) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.icp = icp;
        this.tiles = this.icp.getMenu(0);
    }
    ImmunizationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ImmunizationPage');
    };
    ImmunizationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-immunization',template:/*ion-inline-start:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/immunization/immunization.html"*/'<!--\n  Generated template for the ImmunizationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>IMMUNIZATION</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <tile [tiles]="tiles"></tile>\n</ion-content>\n'/*ion-inline-end:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/immunization/immunization.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__providers_immunization_classification_immunization_classification__["a" /* ImmunizationClassificationProvider */]])
    ], ImmunizationPage);
    return ImmunizationPage;
}());

//# sourceMappingURL=immunization.js.map

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoctorVisitNotesDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_question_question__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_question_control_question_control__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__contact_add_contacts_contact_add_contacts__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_service_auth_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_health_records_health_records__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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








/**
 * Generated class for the DoctorVisitNotesDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DoctorVisitNotesDetailPage = (function () {
    function DoctorVisitNotesDetailPage(navCtrl, navParams, qp, qcp, modalCtrl, loadingCtrl, toastCtrl, viewCtrl, hrp, auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.qp = qp;
        this.qcp = qcp;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.viewCtrl = viewCtrl;
        this.hrp = hrp;
        this.auth = auth;
        this.form = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({});
    }
    DoctorVisitNotesDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DoctorVisitNotesDetailPage');
    };
    DoctorVisitNotesDetailPage.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.qp.getDoctorVisitNotesQuestions(this.auth.userId)];
                    case 1:
                        _a.questions = (_b.sent());
                        this.form = this.qcp.toFormGroup(this.questions);
                        return [2 /*return*/];
                }
            });
        });
    };
    DoctorVisitNotesDetailPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    DoctorVisitNotesDetailPage.prototype.addContact = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__contact_add_contacts_contact_add_contacts__["a" /* ContactAddContactsPage */]);
        modal.present();
        modal.onWillDismiss(function () { return __awaiter(_this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.qp.getDoctorVisitNotesQuestions(this.auth.userId)];
                    case 1:
                        _a.questions = (_b.sent());
                        this.form = this.qcp.toFormGroup(this.questions);
                        return [2 /*return*/];
                }
            });
        }); });
    };
    DoctorVisitNotesDetailPage.prototype.onSubmit = function () {
        var _this = this;
        this.showLoader('Adding...');
        var payLoad = this.form.value;
        console.log(payLoad);
        this.hrp.addDoctorVisitNotes(this.auth.userId, payLoad)
            .subscribe(function (res) {
            _this.loading.dismiss();
            _this.presentToast('Successfully added!');
            _this.viewCtrl.dismiss();
        }, function (err) {
            _this.loading.dismiss();
            _this.presentToast('Failed to add the record.');
        });
    };
    DoctorVisitNotesDetailPage.prototype.showLoader = function (msg) {
        this.loading = this.loadingCtrl.create({
            content: msg
        });
        this.loading.present();
    };
    DoctorVisitNotesDetailPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: false
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    DoctorVisitNotesDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-doctor-visit-notes-detail',template:/*ion-inline-start:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/doctor-visit-notes-detail/doctor-visit-notes-detail.html"*/'<!--\n  Generated template for the DoctorVisitNotesDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-toolbar color="primary">\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="white" showWhen="ios">Cancel</span>\n        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Add Visit Notes</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-content>\n      <div>\n        <form [formGroup]=\'form\' (ngSubmit)="onSubmit()">\n\n          <div *ngFor="let question of questions">\n            <ion-item>\n              <dynamic-form-question [question]="question" [form]="form"></dynamic-form-question>\n            </ion-item>\n          </div>\n\n          <div>\n            <button ion-button type="submit" [disabled]="!form.valid" color="slate-grey">Record</button>\n            <button ion-button type="button" clear color="primary" (click)="addContact()">Add Contact</button>\n          </div>\n\n        </form>\n      </div>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/doctor-visit-notes-detail/doctor-visit-notes-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_3__providers_question_question__["a" /* QuestionProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_question_control_question_control__["a" /* QuestionControlProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"],
            __WEBPACK_IMPORTED_MODULE_7__providers_health_records_health_records__["a" /* HealthRecordsProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], DoctorVisitNotesDetailPage);
    return DoctorVisitNotesDetailPage;
}());

//# sourceMappingURL=doctor-visit-notes-detail.js.map

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__ = __webpack_require__(6);
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
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignupPage = (function () {
    function SignupPage(navCtrl, navParams, fb, menuCtrl, toastCtrl, loadingCtrl, authService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fb = fb;
        this.menuCtrl = menuCtrl;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.authService = authService;
        this.formErrors = {
            "username": '',
            "password": '',
            "confirmPassword": '',
            "email": '',
            "securityQuestion": '',
            "securityAnswer": '',
            "firstname": '',
            "lastname": '',
            "tel": '',
            "birthday": ''
        };
        this.validationMessages = {
            "username": {
                "required": "Username is required.",
                "minlength": "Username must be at least 2 characters long.",
                "maxlength": "Username cannot be more than 25 characters long."
            },
            "password": {
                "required": "Password is required.",
                "pattern": "Password must be 8-17 characters long and contains at least one number, one letter and one unique character such as !@#$%^&*?\"';:"
            },
            "confirmPassword": {
                "required": "Confirm password is required.",
                "notEquivalent": "Password doesn't match."
            },
            "email": {
                "required": "Email is required.",
                "email": "Please enter a valid email address."
            },
            "securityQuestion": {
                "required": "Please choose a security question."
            },
            "securityAnswer": {
                "required": "Please enter the question's answer."
            },
            "firstname": {
                "minlength": "Firstname must be at least 2 characters long.",
                "maxlength": "Firstname cannot be more than 25 characters long."
            },
            "lastname": {
                "minlength": "Lastname must be at least 2 characters long.",
                "maxlength": "Lastname cannot be more than 25 characters long."
            },
            "tel": {
                "pattern": "Please enter a valid 10-digit phone number. For example: 4123456789."
            },
            "birthday": {
                "pattern": "Please enter your birthday in MM/DD/YYYY format."
            }
        };
        this.secQuestions = [
            {
                "quesNum": 0,
                "question": "What is the first and last name of your first boyfriend or girlfriend?"
            },
            {
                "quesNum": 1,
                "question": "What is the name of your favorite pet?"
            },
            {
                "quesNum": 2,
                "question": "In what city were you born?"
            },
            {
                "quesNum": 3,
                "question": "What is the name of your first school?"
            },
            {
                "quesNum": 4,
                "question": "What is your favorite movie?"
            },
            {
                "quesNum": 5,
                "question": "What is your mother's maiden name?"
            },
            {
                "quesNum": 6,
                "question": "What is your favorite color?"
            }
        ];
        this.registerForm = this.fb.group({
            username: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(2), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(25)]],
            password: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].pattern('^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\\d)(?=.*[\!\@\#\$\%\^\&\*\?\"\'\;\:]).*$')]],
            confirmPassword: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            email: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].email]],
            securityQuestion: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            securityAnswer: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            firstname: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(2), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(25)]],
            lastname: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(2), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(25)]],
            tel: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].pattern('[0-9]{10}')],
            address: [''],
            birthday: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].pattern('(^(((0[1-9]|1[012])/(0[1-9]|1[0-9]|2[0-8]))|((0[13578]|1[02])/(29|30|31))|((0[469]|11)/(29|30)))/(19|20)\\d\\d$)|(^02/29/(19(04|08|12|16|20|24|28|32|36|40|44|48|52|56|60|64|68|72|76|80|84|88|92|96)|20(([02468][048])|([13579][26])))$)')],
            gender: [''],
            race: ['']
        }, { validator: this.pwdMatchValidator('password', 'confirmPassword') });
        this.registerForm.valueChanges.subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged();
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    SignupPage.prototype.ionViewWillEnter = function () {
        this.menuCtrl.enable(false);
    };
    SignupPage.prototype.onValueChanged = function (data) {
        if (!this.registerForm) {
            return;
        }
        var form = this.registerForm;
        for (var field in this.formErrors) {
            this.formErrors[field] = '';
            var control = form.get(field);
            if (control && control.dirty && !control.valid) {
                var messages = this.validationMessages[field];
                for (var key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    };
    SignupPage.prototype.pwdMatchValidator = function (passwordKey, passwordConfirmationKey) {
        return function (group) {
            var passwordInput = group.controls[passwordKey], passwordConfirmationInput = group.controls[passwordConfirmationKey];
            if (passwordInput.value !== passwordConfirmationInput.value) {
                return passwordConfirmationInput.setErrors({ notEquivalent: true });
            }
            else {
                return passwordConfirmationInput.setErrors(null);
            }
        };
    };
    SignupPage.prototype.onSubmit = function () {
        var _this = this;
        this.showLoader('Registering...');
        var register = this.registerForm.value;
        register['username'] = this.registerForm.value.username.toLowerCase();
        delete register.confirmPassword;
        console.log(register);
        this.authService.register(register)
            .subscribe(function (res) {
            _this.loading.dismiss();
            if (res.exist == false) {
                _this.presentToast('Successfully registered!');
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard__["a" /* DashboardPage */]);
                _this.menuCtrl.enable(true);
            }
            else {
                _this.presentToast('Username already exists. Please enter another one.');
            }
        }, function (err) {
            _this.loading.dismiss();
            _this.presentToast('Connection Error! ' + err);
            console.log(err);
        });
    };
    SignupPage.prototype.showLoader = function (msg) {
        this.loading = this.loadingCtrl.create({
            content: msg
        });
        this.loading.present();
    };
    SignupPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: false
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-signup',template:/*ion-inline-start:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/signup/signup.html"*/'<!--\n  Generated template for the SignupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Register</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form novalidate [formGroup]="registerForm" (ngSubmit)="onSubmit()">\n    <ion-card>\n      <ion-card-content>\n        <ion-item>\n          <ion-label floating>Username<span class="color-red">*</span></ion-label>\n          <ion-input type="text" formControlName="username"></ion-input>\n        </ion-item>\n        <div class="pull-right color-red">\n          <span [hidden]="!(formErrors.username)">{{formErrors.username}}</span>\n        </div>\n        <ion-item>\n          <ion-label floating>Password<span class="color-red">*</span></ion-label>\n          <ion-input type="password" formControlName="password"></ion-input>\n        </ion-item>\n        <div class="pull-right color-red">\n          <span [hidden]="!(formErrors.password)">{{formErrors.password}}</span>\n        </div>\n        <ion-item>\n          <ion-label floating>Confirm Password<span class="color-red">*</span></ion-label>\n          <ion-input type="password" formControlName="confirmPassword"></ion-input>\n        </ion-item>\n        <div class="pull-right color-red">\n          <span [hidden]="!(formErrors.confirmPassword)">{{formErrors.confirmPassword}}</span>\n        </div>\n      </ion-card-content>\n    </ion-card>\n    <ion-card>\n      <ion-card-header text-wrap color="primary">\n        <div class="pull-right">The information below are only used to record your health data.</div>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-item>\n          <ion-label stacked>Email<span class="color-red">*</span></ion-label>\n          <ion-input type="email" formControlName="email" email></ion-input>\n        </ion-item>\n        <div class="pull-right color-red">\n          <span [hidden]="!(formErrors.email)">{{formErrors.email}}</span>\n        </div>\n        <ion-item>\n          <ion-label stacked>Security Question<span class="color-red">*</span></ion-label>\n          <ion-select formControlName="securityQuestion">\n            <ion-option *ngFor="let sq of secQuestions" [value]="sq.question">\n              {{sq.question}}\n            </ion-option>\n          </ion-select>\n        </ion-item>\n        <div class="pull-right color-red">\n          <span [hidden]="!(formErrors.securityQuestion)">{{formErrors.securityQuestion}}</span>\n        </div>\n        <ion-item>\n          <ion-label stacked>Security Answer<span class="color-red">*</span></ion-label>\n          <ion-input type="text" formControlName="securityAnswer"></ion-input>\n        </ion-item>\n        <div class="pull-right color-red">\n          <span [hidden]="!(formErrors.securityAnswer)">{{formErrors.securityAnswer}}</span>\n        </div>\n        <ion-item>\n          <ion-label stacked>First Name</ion-label>\n          <ion-input type="text" formControlName="firstname"></ion-input>\n        </ion-item>\n        <div class="pull-right color-red">\n          <span [hidden]="!(formErrors.firstname)">{{formErrors.firstname}}</span>\n        </div>\n        <ion-item>\n          <ion-label stacked>Last Name</ion-label>\n          <ion-input type="text" formControlName="lastname"></ion-input>\n        </ion-item>\n        <div class="pull-right color-red">\n          <span [hidden]="!(formErrors.lastname)">{{formErrors.lastname}}</span>\n        </div>\n        <ion-item>\n          <ion-label stacked>Tel. Number</ion-label>\n          <ion-input type="tel" formControlName="tel" placeholder="XXXXXXXXXX"></ion-input>\n        </ion-item>\n        <div class="pull-right color-red">\n          <span [hidden]="!(formErrors.tel)">{{formErrors.tel}}</span>\n        </div>\n        <ion-item>\n          <ion-label stacked>Address</ion-label>\n          <ion-textarea type="text" formControlName="address"></ion-textarea>\n        </ion-item>\n        <ion-item>\n          <ion-label stacked>Birthday</ion-label>\n          <ion-input type="text" formControlName="birthday" placeholder="MM/DD/YYYY"></ion-input>\n        </ion-item>\n        <div class="pull-right color-red">\n          <span [hidden]="!(formErrors.birthday)">{{formErrors.birthday}}</span>\n        </div>\n        <ion-item>\n          <ion-label stacked>Gender</ion-label>\n          <ion-select formControlName="gender">\n            <ion-option value="female">Female</ion-option>\n            <ion-option value="male">Male</ion-option>\n          </ion-select>\n        </ion-item>\n        <ion-item>\n          <ion-label stacked>Race and Ethnicity</ion-label>\n          <ion-select formControlName="race">\n            <ion-option>Hispanic or Latino</ion-option>\n            <ion-option>White</ion-option>\n            <ion-option>Black or African American</ion-option>\n            <ion-option>Native Hawaiian or Other Pacific Islander</ion-option>\n            <ion-option>Asian</ion-option>\n            <ion-option>American Indian or Alaskan Native</ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-card-content>\n    </ion-card>\n    <button ion-button block type="submit" [disabled]="!registerForm.valid">Register</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/signup/signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["MenuController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordResetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(6);
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
 * Generated class for the PasswordResetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PasswordResetPage = (function () {
    function PasswordResetPage(navCtrl, navParams, fb, viewCtrl, loadingCtrl, toastCtrl, auth) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fb = fb;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.auth = auth;
        this.emailAddress = '';
        this.securityQuestion = '';
        this.securityAnswer = '';
        this.validEmail = false;
        this.validSecQues = false;
        this.formErrors = {
            "password": '',
            "confirmPassword": ''
        };
        this.validationMessages = {
            "password": {
                "required": "New password is required.",
                "pattern": "Password must be 8-17 characters long and contains at least one number, one letter and one unique character such as !@#$%^&*?\"';:"
            },
            "confirmPassword": {
                "required": "Please enter your password again.",
                "notEquivalent": "Password doesn't match."
            }
        };
        this.resetpasswordForm = this.fb.group({
            password: ['', [__WEBPACK_IMPORTED_MODULE_0__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_0__angular_forms__["Validators"].pattern('^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\\d)(?=.*[\!\@\#\$\%\^\&\*\?\"\'\;\:]).*$')]],
            confirmPassword: ['', __WEBPACK_IMPORTED_MODULE_0__angular_forms__["Validators"].required]
        }, { validator: this.pwdMatchValidator('password', 'confirmPassword') });
        this.resetpasswordForm.valueChanges.subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged();
    }
    PasswordResetPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PasswordResetPage');
    };
    PasswordResetPage.prototype.onValueChanged = function (data) {
        if (!this.resetpasswordForm) {
            return;
        }
        var form = this.resetpasswordForm;
        for (var field in this.formErrors) {
            this.formErrors[field] = '';
            var control = form.get(field);
            if (control && control.dirty && !control.valid) {
                var messages = this.validationMessages[field];
                for (var key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    };
    PasswordResetPage.prototype.pwdMatchValidator = function (passwordKey, passwordConfirmationKey) {
        return function (group) {
            var passwordInput = group.controls[passwordKey], passwordConfirmationInput = group.controls[passwordConfirmationKey];
            if (passwordInput.value !== passwordConfirmationInput.value) {
                return passwordConfirmationInput.setErrors({ notEquivalent: true });
            }
            else {
                return passwordConfirmationInput.setErrors(null);
            }
        };
    };
    PasswordResetPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    PasswordResetPage.prototype.verifyEmail = function () {
        var _this = this;
        this.showLoader('Authenticating...');
        console.log(this.emailAddress);
        this.auth.verifyEmail_getSecQues(this.emailAddress)
            .subscribe(function (res) {
            if (res == -1) {
                _this.loading.dismiss();
                _this.presentToast("Email address doesn't exist!");
            }
            else {
                _this.loading.dismiss();
                _this.securityQuestion = res.securityQuestion;
                _this.userId = res.id;
                _this.validEmail = true;
            }
        }, function (err) {
            _this.loading.dismiss();
            _this.presentToast('Error: ' + err);
        });
    };
    PasswordResetPage.prototype.verifySecQues = function () {
        var _this = this;
        this.showLoader('Authenticating...');
        console.log(this.securityAnswer);
        this.auth.verifySecAns(this.userId, this.securityAnswer)
            .subscribe(function (res) {
            if (res == -1) {
                _this.loading.dismiss();
                _this.presentToast("Wrong answer. Please try again.");
            }
            else {
                _this.loading.dismiss();
                _this.validEmail = false;
                _this.validSecQues = true;
            }
        }, function (err) {
            _this.loading.dismiss();
            _this.presentToast('Error: ' + err);
        });
    };
    PasswordResetPage.prototype.onSubmit = function () {
        var _this = this;
        this.showLoader('Authenticating...');
        var payLoad = this.resetpasswordForm.value;
        delete payLoad.confirmPassword;
        console.log(payLoad);
        this.auth.resetPassword(this.userId, payLoad)
            .subscribe(function (res) {
            _this.loading.dismiss();
            _this.presentToast('Successful!');
            _this.viewCtrl.dismiss();
        }, function (err) {
            _this.loading.dismiss();
            _this.presentToast('Error: ' + err);
        });
    };
    PasswordResetPage.prototype.showLoader = function (msg) {
        this.loading = this.loadingCtrl.create({
            content: msg
        });
        this.loading.present();
    };
    PasswordResetPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: false
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    PasswordResetPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-password-reset',template:/*ion-inline-start:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/password-reset/password-reset.html"*/'<!--\n  Generated template for the PasswordResetPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-toolbar color="primary">\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="white" showWhen="ios">Cancel</span>\n        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Reset Password</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form *ngIf="!validEmail && !validSecQues" #emailVerification="ngForm" (ngSubmit)="verifyEmail()">\n    <ion-item>\n      <ion-label stacked color="primary">Registered Email\n        <span class="color-red">*</span>\n      </ion-label>\n      <ion-input type="email" [(ngModel)]="emailAddress" name="email" #email="ngModel" required email></ion-input>\n    </ion-item>\n    <div class="pull-right color-red">\n      <span [hidden]="email.pristine">\n        <span [hidden]="!email.errors?.required">Email is required.</span>\n        <span [hidden]="!email.errors?.email">Please enter a valid email address.</span>\n      </span>\n    </div>\n    <button ion-button block type="submit" [disabled]="!emailVerification.form.valid">Next</button>\n  </form>\n\n  <form *ngIf="validEmail" #secQuesVerification="ngForm" (ngSubmit)="verifySecQues()">\n    <ion-item>\n      <ion-label stacked color="primary">Security Question\n        <span class="color-red">*</span>\n      </ion-label>\n      <ion-input type="text" placeholder={{securityQuestion}} value={{securityQuestion}} readonly></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked color="primary">Security Answer\n        <span class="color-red">*</span>\n      </ion-label>\n      <ion-input type="text" [(ngModel)]="securityAnswer" name="secAns" #secAns="ngModel" required></ion-input>\n    </ion-item>\n    <div class="pull-right color-red">\n      <span [hidden]="secAns.pristine">\n        <span [hidden]="!secAns.errors?.required">Security answer is required.</span>\n      </span>\n    </div>\n    <button ion-button block type="submit" [disabled]="!secQuesVerification.form.valid">Next</button>\n  </form>\n\n  <form *ngIf="validSecQues" [formGroup]=\'resetpasswordForm\' (ngSubmit)="onSubmit()">\n    <ion-item>\n      <ion-label stacked color="primary">New Password\n        <span class="color-red">*</span>\n      </ion-label>\n      <ion-input type="password" formControlName="password"></ion-input>\n    </ion-item>\n    <div class="pull-right color-red">\n      <span [hidden]="!(formErrors.password)">{{formErrors.password}}</span>\n    </div>\n    <ion-item>\n      <ion-label stacked color="primary">Confirm Password\n        <span class="color-red">*</span>\n      </ion-label>\n      <ion-input type="password" formControlName="confirmPassword"></ion-input>\n    </ion-item>\n    <div class="pull-right color-red">\n      <span [hidden]="!(formErrors.confirmPassword)">{{formErrors.confirmPassword}}</span>\n    </div>\n    <button ion-button block type="submit" [disabled]="!resetpasswordForm.valid">Submit</button>\n  </form>\n\n</ion-content>\n'/*ion-inline-end:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/password-reset/password-reset.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_0__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["ViewController"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], PasswordResetPage);
    return PasswordResetPage;
}());

//# sourceMappingURL=password-reset.js.map

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_contacts_contacts__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__welcome_welcome__ = __webpack_require__(16);
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
 * Generated class for the ContactDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ContactDetailPage = (function () {
    function ContactDetailPage(navCtrl, navParams, auth, alertCtrl, contactsProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.contactsProvider = contactsProvider;
        this.contacts = [];
        this.tel = [];
        this.fax = [];
        if (!this.auth.userId) {
            this.presentAlert('Please login first.');
        }
        this.category = this.navParams.get('name');
        console.log(this.category);
        // this.contacts = [
        //   {
        //     firstname: "Aaric",
        //     lastname: "Falconi",
        //     tel: "4123457680",
        //     fax: "4123457680",
        //     relationship: "",
        //     specialty: "physician",
        //     location1: "5542 Walnut St",
        //     location2: "5819 Elwood St",
        //     location3: "1001 Fifth Ave",
        //     group: "friend,doctor"
        //   },
        //   {
        //     firstname: "Alivia",
        //     lastname: "Ryan",
        //     tel: "4123457680",
        //     fax: "",
        //     relationship: "husband",
        //     specialty: "",
        //     location1: "999 N Negley Str",
        //     location2: "",
        //     location3: "",
        //     group: "family,emergency"
        //   },
        //   {
        //     firstname: "Martin",
        //     lastname: "DOUGLAS",
        //     tel: "4123457680",
        //     fax: "",
        //     relationship: "father",
        //     specialty: "",
        //     location1: "132 Centre Ave",
        //     location2: "",
        //     location3: "",
        //     group: "family"
        //   },
        //   {
        //     firstname: "Scott",
        //     lastname: "Williamson",
        //     tel: "4123457680",
        //     fax: "4123457680",
        //     relationship: "",
        //     specialty: "dermatologist",
        //     location1: "1100 Fifth Ave",
        //     location2: "1090 Centre Ave",
        //     location3: "",
        //     group: "doctor"
        //   },
        // ];
        // get all contacts' data
        this.contactsProvider.getContactsDetail(this.auth.userId)
            .subscribe(function (contacts) {
            _this.contacts = contacts;
            _this.getTelArray();
            _this.getFaxArray();
        }, function (errmess) { return _this.errMess = errmess; });
    }
    ContactDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ContactDetailPage');
    };
    ContactDetailPage.prototype.getTelArray = function () {
        var arr;
        for (var i = 0; i < this.contacts.length; i++) {
            arr = ("" + this.contacts[i].tel).split("");
            this.tel.push("(" + arr[0] + arr[1] + arr[2] + ") " + arr[3] + arr[4] + arr[5] + "-" + arr[6] + arr[7] + arr[8] + arr[9]);
        }
    };
    ContactDetailPage.prototype.getFaxArray = function () {
        var arr = [];
        for (var i = 0; i < this.contacts.length; i++) {
            if (this.contacts[i].fax != "") {
                arr = ("" + this.contacts[i].fax).split("");
                this.fax.push("(" + arr[0] + arr[1] + arr[2] + ") " + arr[3] + arr[4] + arr[5] + "-" + arr[6] + arr[7] + arr[8] + arr[9]);
            }
            else {
                this.fax.push("");
            }
        }
    };
    ContactDetailPage.prototype.isCategory = function (i) {
        var groups = this.contacts[i].group.split(",");
        for (var j = 0; j < groups.length; j++) {
            if (this.category == groups[j])
                return true;
        }
        return false;
    };
    ContactDetailPage.prototype.checkFamilyorEmergency = function (i) {
        var groups = this.contacts[i].group.split(",");
        for (var j = 0; j < groups.length; j++) {
            if (groups[j] == "family" || groups[j] == "emergency")
                return true;
        }
        return false;
    };
    ContactDetailPage.prototype.checkDoctor = function (i) {
        var groups = this.contacts[i].group.split(",");
        for (var j = 0; j < groups.length; j++) {
            if (groups[j] == "doctor")
                return true;
        }
        return false;
    };
    ContactDetailPage.prototype.presentAlert = function (msg) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Oops!',
            message: msg,
            enableBackdropDismiss: false,
            buttons: [
                {
                    text: 'Ok',
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__welcome_welcome__["a" /* WelcomePage */]);
                    }
                }
            ]
        });
        alert.present();
    };
    ContactDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-contact-detail',template:/*ion-inline-start:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/contact-detail/contact-detail.html"*/'<!--\n  Generated template for the ContactDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Contacts</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list *ngFor="let contact of contacts; let i = index">\n    <div *ngIf="isCategory(i)">\n      <ion-list-header>{{contact.firstname}} {{contact.lastname}}</ion-list-header>\n      <ion-item>\n        Tel: {{tel[i]}}\n        <a href="tel:{{contact.tel}}" item-end>\n          <ion-icon name="call"></ion-icon>\n        </a>\n      </ion-item>\n      <ion-item *ngIf="contact.fax&&contact.fax!=\'\'">Fax: {{fax[i]}}</ion-item>\n      <ion-item *ngIf="checkDoctor(i)" text-wrap>Specialty: {{contact.specialty}}</ion-item>\n      <ion-item *ngIf="!((contact.location2&&contact.location2!=\'\') || (contact.location3&&contact.location3!=\'\'))" text-wrap>Address: {{contact.location1}}</ion-item>\n      <ion-item *ngIf="(contact.location2&&contact.location2!=\'\') || (contact.location3&&contact.location3!=\'\')" text-wrap>Address1: {{contact.location1}}</ion-item>\n      <ion-item *ngIf="contact.location2&&contact.location2!=\'\'" text-wrap>Address2: {{contact.location2}}</ion-item>\n      <ion-item *ngIf="contact.location3&&contact.location3!=\'\'" text-wrap>Address3: {{contact.location3}}</ion-item>\n      <ion-item *ngIf="checkFamilyorEmergency(i)" text-wrap>Relationship: {{contact.relationship}}</ion-item>\n    </div>\n  </ion-list>\n  <!-- <ion-card [hidden]="matchCategory">\n    <ion-card-header>\n      No record!\n    </ion-card-header>\n  </ion-card> -->\n</ion-content>\n'/*ion-inline-end:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/contact-detail/contact-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_2__providers_contacts_contacts__["a" /* ContactsProvider */]])
    ], ContactDetailPage);
    return ContactDetailPage;
}());

//# sourceMappingURL=contact-detail.js.map

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_detail_contact_detail__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contact_add_contacts_contact_add_contacts__ = __webpack_require__(48);
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
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ContactPage = (function () {
    function ContactPage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.contacts = [
            {
                category: 'Emergency Contacts',
                name: 'emergency'
            },
            {
                category: 'Friend',
                name: 'friend'
            },
            {
                category: 'Family Members',
                name: 'family'
            },
            {
                category: 'Doctor',
                name: 'doctor'
            }
        ];
    }
    ContactPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ContactPage');
    };
    ContactPage.prototype.openPage = function (name) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__contact_detail_contact_detail__["a" /* ContactDetailPage */], { name: name });
    };
    ContactPage.prototype.addContact = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__contact_add_contacts_contact_add_contacts__["a" /* ContactAddContactsPage */]);
        modal.present();
        modal.onDidDismiss(function () {
            console.log("add contact");
        });
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-contact',template:/*ion-inline-start:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/contact/contact.html"*/'<!--\n  Generated template for the ContactPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Contacts</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n      <ion-list-header>\n        Category\n      </ion-list-header>\n    <button ion-item *ngFor="let contact of contacts" (click)="openPage(contact.name)">\n      {{contact.category}}\n    </button>\n  </ion-list>\n  <button ion-button block (click)="addContact()">Add Contacts</button>\n</ion-content>\n'/*ion-inline-end:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/contact/contact.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomtrackerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_trackers_trackers__ = __webpack_require__(82);
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
 * Generated class for the CustomtrackerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CustomtrackerPage = (function () {
    function CustomtrackerPage(navCtrl, navParams, storage, fb, trackerService, viewCtrl, statusBar) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.fb = fb;
        this.trackerService = trackerService;
        this.viewCtrl = viewCtrl;
        this.statusBar = statusBar;
        this.tracker = "track";
        this.statusBar.overlaysWebView(false);
        this.storage.get('mytracker').then(function (mytracker) {
            if (mytracker) {
                _this.trackername = mytracker.name;
            }
            else {
                _this.trackername = 'My Tracker';
            }
        });
        this.createForm();
    }
    CustomtrackerPage.prototype.createForm = function () {
        this.nowTime = new Date().toISOString();
        this.myForm = this.fb.group({
            date: [this.nowTime, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
            note: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required]
        });
    };
    CustomtrackerPage.prototype.ngOnInit = function () {
        // this.trackerService.getMytrackers()
        //   .subscribe(mytrackers => {
        //     mytrackers.sort((a: Mytracker, b: Mytracker) => {
        //       var shortdate_a = new Date(new Date(a.date).getFullYear(), new Date(a.date).getMonth() - 1, new Date(a.date).getDate());
        //       var shortdate_b = new Date(new Date(b.date).getFullYear(), new Date(b.date).getMonth() - 1, new Date(b.date).getDate());
        //       if (shortdate_a > shortdate_b) {
        //         return -1;
        //       }
        //       if (shortdate_a < shortdate_b) {
        //         return 1;
        //       }
        //     });
        //     this.mytrackers = mytrackers;
        //   }, errmess => this.errMess = <any>errmess);
    };
    CustomtrackerPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CustomtrackerPage');
    };
    CustomtrackerPage.prototype.doRefresh = function (refresher) {
        // console.log('Begin async operation', refresher);
        // setTimeout(() => {
        //   this.trackerService.getMytrackers()
        //     .subscribe(mytrackers => {
        //       mytrackers.sort((a: Mytracker, b: Mytracker) => {
        //         var shortdate_a = new Date(new Date(a.date).getFullYear(), new Date(a.date).getMonth() - 1, new Date(a.date).getDate());
        //         var shortdate_b = new Date(new Date(b.date).getFullYear(), new Date(b.date).getMonth() - 1, new Date(b.date).getDate());
        //         if (shortdate_a > shortdate_b) {
        //           return -1;
        //         }
        //         if (shortdate_a < shortdate_b) {
        //           return 1;
        //         }
        //       });
        //       this.mytrackers = mytrackers;
        //     }, errmess => this.errMess = <any>errmess);
        //   console.log('Async operation has ended');
        //   refresher.complete();
        // }, 1500);
    };
    CustomtrackerPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    CustomtrackerPage.prototype.onSubmit = function () {
        this.mytracker = this.myForm.value;
        this.createForm();
    };
    CustomtrackerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-customtracker',template:/*ion-inline-start:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/customtracker/customtracker.html"*/'<!--\n  Generated template for the CustomtrackerPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>{{trackername | uppercase}}</ion-title>\n  </ion-navbar>\n\n  <ion-toolbar>\n    <ion-segment [(ngModel)]="tracker">\n      <ion-segment-button value="track">\n        TRACK\n      </ion-segment-button>\n      <ion-segment-button value="history">\n        HISTORY\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content color="primary" pullingIcon="arrow-dropdown" pullingText="Pull to refresh" refreshingSpinner="circles"\n      refreshingText="Refreshing..."></ion-refresher-content>\n  </ion-refresher>\n  <div [ngSwitch]="tracker">\n    <div *ngSwitchCase="\'track\'">\n      <ion-card>\n        <ion-card-content>\n          <form [formGroup]=\'myForm\' (ngSubmit)="onSubmit()">\n            <ion-item class="fix-underline">\n              <ion-label color="primary" fixed>Date</ion-label>\n              <ion-datetime displayFormat="MM/DD/YYYY" formControlName="date"></ion-datetime>\n            </ion-item>\n            <ion-item class="fix-underline">\n              <ion-label color="primary" floating>Note</ion-label>\n              <ion-textarea rows="12" formControlName="note"></ion-textarea>\n            </ion-item>\n            <button ion-button type="submit" [disabled]="!myForm.valid">Record</button>\n          </form>\n        </ion-card-content>\n      </ion-card>\n    </div>\n    <div *ngSwitchCase="\'history\'">\n      <ion-list *ngIf="mytrackers">\n        <ion-card *ngFor="let mt of mytrackers">\n          <ion-item>\n            <ion-row class="color-primary-darker">\n              {{mt.note}}\n            </ion-row>\n            <ion-row>\n              <ion-note>\n                {{mt.date | date}}\n              </ion-note>\n            </ion-row>\n          </ion-item>\n        </ion-card>\n      </ion-list>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/customtracker/customtracker.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_5__providers_trackers_trackers__["a" /* TrackersProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */]])
    ], CustomtrackerPage);
    return CustomtrackerPage;
}());

//# sourceMappingURL=customtracker.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiagnosticProcedureDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_question_question__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_question_control_question_control__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__welcome_welcome__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_health_records_health_records__ = __webpack_require__(25);
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
 * Generated class for the DiagnosticProcedureDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DiagnosticProcedureDetailPage = (function () {
    function DiagnosticProcedureDetailPage(navCtrl, navParams, qp, qcp, auth, loadingCtrl, toastCtrl, alertCtrl, hrp) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.qp = qp;
        this.qcp = qcp;
        this.auth = auth;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.hrp = hrp;
        this.tab = 'form';
        this.color = ['dark-salmon', 'rosy-brown', 'slate-grey'];
        this.records = [];
        if (!this.auth.userId) {
            this.presentAlert('Please login first.');
        }
        this.title = navParams.get('title');
        this.id = navParams.get('id');
        this.questions = this.qp.getDiagnosticProcedureQuestions(this.title, this.id);
        this.form = this.qcp.toFormGroup(this.questions);
        this.navcolor = this.color[(this.id + 1) % 3];
        // if (this.id == 2 || this.id == 5) {
        //   this.records = [
        //     {
        //       "organ": "liver",
        //       "results": [
        //         {
        //           "result": "BB",
        //           "date": "2018-06-15T01:37:58-04:00",
        //           "note": ""
        //         },
        //         {
        //           "result": "BBB",
        //           "date": "2018-06-12T01:37:58-04:00",
        //           "note": ""
        //         }
        //       ]
        //     },
        //     {
        //       "organ": "lung",
        //       "results": [
        //         {
        //           "result": "BB",
        //           "date": "2018-06-15T01:37:58-04:00",
        //           "note": ""
        //         }
        //       ]
        //     }
        //   ];
        // }
        // else if (this.id == 3 || this.id == 4) {
        //   this.records = [
        //     {
        //       "organ": "liver",
        //       "results": [
        //         {
        //           "result": "AA",
        //           "contrast": true,
        //           "date": "2018-06-15T01:37:58-04:00",
        //           "note": ":("
        //         },
        //         {
        //           "result": "AAA",
        //           "contrast": false,
        //           "date": "2018-06-12T01:37:58-04:00",
        //           "note": ""
        //         }
        //       ]
        //     },
        //     {
        //       "organ": "lung",
        //       "results": [
        //         {
        //           "result": "AA",
        //           "contrast": true,
        //           "date": "2018-06-15T01:37:58-04:00",
        //           "note": ""
        //         }
        //       ]
        //     }
        //   ]
        // }
        // else {
        //   this.records = [
        //     {
        //       "name": "Sleep Study",
        //       "results": [
        //         {
        //           "result": "AAA",
        //           "date": "2018-06-15T01:37:58-04:00",
        //           "note": ""
        //         },
        //         {
        //           "result": "BBB",
        //           "date": "2018-06-12T01:37:58-04:00",
        //           "note": ""
        //         }
        //       ]
        //     }
        //   ];
        // }
        // this.records[0]['open'] = true;
        // for (let i = 1; i < this.records.length; i++) {
        //   this.records[i]['open'] = false;
        // }
        this.hrp.getDiagnosticProcedure(this.auth.userId, this.id)
            .subscribe(function (records) {
            _this.records = records;
            _this.records[0]['open'] = true;
            console.log(_this.records);
            if (_this.records.length > 1) {
                for (var i = 1; i < _this.records.length; i++) {
                    _this.records[i]['open'] = false;
                }
            }
        }, function (errmess) { return _this.errMess = errmess; });
        console.log(this.records);
    }
    DiagnosticProcedureDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DiagnosticProcedureDetailPage');
    };
    DiagnosticProcedureDetailPage.prototype.toggleSection = function (i) {
        this.records[i].open = !this.records[i].open;
    };
    DiagnosticProcedureDetailPage.prototype.showNotes = function (i, j) {
        var alert = this.alertCtrl.create({
            message: 'Notes: ' + this.records[i].results[j].note,
            enableBackdropDismiss: true
        });
        alert.present();
    };
    DiagnosticProcedureDetailPage.prototype.onSubmit = function () {
        var _this = this;
        this.showLoader('Adding...');
        var payLoad = this.form.value;
        console.log(payLoad);
        this.hrp.addDiagnosticProcedure(this.auth.userId, this.id, payLoad)
            .subscribe(function (res) {
            _this.loading.dismiss();
            _this.presentToast('Successfully added!');
            _this.hrp.getDiagnosticProcedure(_this.auth.userId, _this.id)
                .subscribe(function (records) {
                _this.records = records;
                _this.records[0]['open'] = true;
                if (_this.records.length > 1) {
                    for (var i = 1; i < _this.records.length; i++) {
                        _this.records[i]['open'] = false;
                    }
                }
                _this.tab = 'history';
            }, function (errmess) { return _this.errMess = errmess; });
        }, function (err) {
            _this.loading.dismiss();
            _this.presentToast('Error: ' + err);
        });
    };
    DiagnosticProcedureDetailPage.prototype.deleteRecord = function (i, j) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirm Delete',
            message: 'Are you sure you want to delete this record?',
            enableBackdropDismiss: true,
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel'
                },
                {
                    text: 'Delete',
                    handler: function () {
                        _this.hrp.deleteDiagnosticProcedure(_this.auth.userId, _this.id, i, j)
                            .subscribe(function (res) {
                            _this.presentToast('Delete successfully.');
                            _this.hrp.getDiagnosticProcedure(_this.auth.userId, _this.id)
                                .subscribe(function (records) {
                                _this.records = records;
                                _this.records[0]['open'] = true;
                                if (_this.records.length > 1) {
                                    for (var i_1 = 1; i_1 < _this.records.length; i_1++) {
                                        _this.records[i_1]['open'] = false;
                                    }
                                }
                                _this.tab = 'history';
                            }, function (errmess) { return _this.errMess = errmess; });
                        }, function (err) { return _this.presentToast('Error: ' + err); });
                    }
                }
            ]
        });
        alert.present();
    };
    DiagnosticProcedureDetailPage.prototype.showLoader = function (msg) {
        this.loading = this.loadingCtrl.create({
            content: msg
        });
        this.loading.present();
    };
    DiagnosticProcedureDetailPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: false
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    DiagnosticProcedureDetailPage.prototype.presentAlert = function (msg) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Oops!',
            message: msg,
            enableBackdropDismiss: false,
            buttons: [
                {
                    text: 'Ok',
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__welcome_welcome__["a" /* WelcomePage */]);
                    }
                }
            ]
        });
        alert.present();
    };
    DiagnosticProcedureDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-diagnostic-procedure-detail',template:/*ion-inline-start:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/diagnostic-procedure-detail/diagnostic-procedure-detail.html"*/'<!--\n  Generated template for the DiagnosticProcedureDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar [color]="navcolor">\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n\n  <ion-toolbar [color]="navcolor">\n    <ion-segment color="light" [(ngModel)]="tab">\n      <ion-segment-button value="form">\n        TRACK\n      </ion-segment-button>\n      <ion-segment-button value="history">\n        HISTORY\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div [ngSwitch]="tab">\n    <div *ngSwitchCase="\'form\'">\n      <ion-card>\n        <ion-card-content>\n          <div>\n            <form [formGroup]=\'form\' (ngSubmit)="onSubmit()">\n\n              <div *ngFor="let question of questions">\n                <ion-item>\n                  <dynamic-form-question [question]="question" [form]="form"></dynamic-form-question>\n                </ion-item>\n              </div>\n\n              <div>\n                <button ion-button type="submit" [disabled]="!form.valid" color="slate-grey">Record</button>\n              </div>\n\n            </form>\n          </div>\n        </ion-card-content>\n      </ion-card>\n    </div>\n    <div *ngSwitchCase="\'history\'">\n      <ion-list *ngIf="records.length!=0">\n        <div>\n          <ion-card *ngFor="let d of records; let i = index">\n            <ion-card-header>\n              <ion-item (click)="toggleSection(i)" no-padding>\n                <ion-label *ngIf="d.organ" text-wrap>{{d.organ}}</ion-label>\n                <ion-label *ngIf="d.name" text-wrap>{{d.name}}</ion-label>\n                <ion-icon item-right name="arrow-forward" *ngIf="!d.open"></ion-icon>\n                <ion-icon item-right name="arrow-down" *ngIf="d.open"></ion-icon>\n              </ion-item>\n            </ion-card-header>\n            <ion-list *ngIf="d.open && d.results" no-padding>\n              <ion-item-sliding *ngFor="let r of d.results; let j = index">\n                <ion-item (click)="showNotes(i, j)">\n                  <div>\n                    <h3 text-wrap>{{r.result}}</h3>\n                    <ion-note *ngIf="r.contrast!=undefined">{{r.date | date}}</ion-note>\n                  </div>\n                  <ion-note *ngIf="r.contrast==undefined" item-right>{{r.date | date}}</ion-note>\n                  <ion-note *ngIf="r.contrast==true" item-right>With Contrast</ion-note>\n                </ion-item>\n                <ion-item-options side="right" icon-start>\n                  <button ion-button color="danger" (click)="deleteRecord(i, j)">\n                    <ion-icon name="trash"></ion-icon>\n                    Delete\n                  </button>\n                </ion-item-options>\n              </ion-item-sliding>\n            </ion-list>\n          </ion-card>\n        </div>\n      </ion-list>\n      <ion-card [hidden]="records.length!=0">\n        <ion-card-header>No record.</ion-card-header>\n      </ion-card>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/diagnostic-procedure-detail/diagnostic-procedure-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_3__providers_question_question__["a" /* QuestionProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_question_control_question_control__["a" /* QuestionControlProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_6__providers_health_records_health_records__["a" /* HealthRecordsProvider */]])
    ], DiagnosticProcedureDetailPage);
    return DiagnosticProcedureDetailPage;
}());

//# sourceMappingURL=diagnostic-procedure-detail.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiagnosticProcedurePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_diagnostic_procedure_classification_diagnostic_procedure_classification__ = __webpack_require__(113);
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
 * Generated class for the DiagnosticProcedurePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DiagnosticProcedurePage = (function () {
    function DiagnosticProcedurePage(navCtrl, navParams, dpcp) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dpcp = dpcp;
        this.tiles = this.dpcp.getMenu(0);
    }
    DiagnosticProcedurePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DiagnosticProcedurePage');
    };
    DiagnosticProcedurePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-diagnostic-procedure',template:/*ion-inline-start:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/diagnostic-procedure/diagnostic-procedure.html"*/'<!--\n  Generated template for the DiagnosticProcedurePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Diagnostic Procedure</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <tile [tiles]="tiles"></tile>\n\n</ion-content>\n'/*ion-inline-end:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/diagnostic-procedure/diagnostic-procedure.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__providers_diagnostic_procedure_classification_diagnostic_procedure_classification__["a" /* DiagnosticProcedureClassificationProvider */]])
    ], DiagnosticProcedurePage);
    return DiagnosticProcedurePage;
}());

//# sourceMappingURL=diagnostic-procedure.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FamilyHistoryDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_question_question__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_question_control_question_control__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_history_history__ = __webpack_require__(24);
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
 * Generated class for the FamilyHistoryDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FamilyHistoryDetailPage = (function () {
    function FamilyHistoryDetailPage(navCtrl, navParams, qp, qcp, viewCtrl, loadingCtrl, toastCtrl, historyProvider, auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.qp = qp;
        this.qcp = qcp;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.historyProvider = historyProvider;
        this.auth = auth;
        this.form = new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["FormGroup"]({});
        this.questions = this.qp.getFamilyHistoryQuestions();
        this.form = this.qcp.toFormGroup(this.questions);
    }
    FamilyHistoryDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FamilyHistoryDetailPage');
    };
    FamilyHistoryDetailPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    FamilyHistoryDetailPage.prototype.onSubmit = function () {
        var _this = this;
        this.showLoader('Adding...');
        var payLoad = this.form.value;
        console.log(payLoad);
        this.historyProvider.addFamilyHistory(this.auth.userId, payLoad)
            .subscribe(function (res) {
            _this.loading.dismiss();
            _this.presentToast('Successfully added!');
            _this.viewCtrl.dismiss();
        }, function (err) {
            _this.loading.dismiss();
            _this.presentToast('Failed to add medical history record.');
        });
    };
    FamilyHistoryDetailPage.prototype.showLoader = function (msg) {
        this.loading = this.loadingCtrl.create({
            content: msg
        });
        this.loading.present();
    };
    FamilyHistoryDetailPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: false
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    FamilyHistoryDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-family-history-detail',template:/*ion-inline-start:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/family-history-detail/family-history-detail.html"*/'<!--\n  Generated template for the FamilyHistoryDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-toolbar color="primary">\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="white" showWhen="ios">Cancel</span>\n        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Add Family History</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-content>\n      <div>\n        <form [formGroup]=\'form\' (ngSubmit)="onSubmit()">\n\n          <div *ngFor="let question of questions">\n            <ion-item>\n              <dynamic-form-question [question]="question" [form]="form"></dynamic-form-question>\n            </ion-item>\n          </div>\n\n          <div>\n            <button ion-button type="submit" [disabled]="!form.valid" color="slate-grey">Record</button>\n          </div>\n\n        </form>\n      </div>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/family-history-detail/family-history-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_3__providers_question_question__["a" /* QuestionProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_question_control_question_control__["a" /* QuestionControlProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["ViewController"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_6__providers_history_history__["a" /* HistoryProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], FamilyHistoryDetailPage);
    return FamilyHistoryDetailPage;
}());

//# sourceMappingURL=family-history-detail.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FamilyHistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__family_history_detail_family_history_detail__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__welcome_welcome__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_history_history__ = __webpack_require__(24);
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
 * Generated class for the FamilyHistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FamilyHistoryPage = (function () {
    function FamilyHistoryPage(navCtrl, navParams, modalCtrl, auth, alertCtrl, toastCtrl, historyProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.historyProvider = historyProvider;
        this.records = [];
        if (!this.auth.userId) {
            this.presentAlert('Please login first.');
        }
        // get sorted records
        // this.records = [
        //   {
        //     relationship: 'Father',
        //     name: 'Martin Perkins',
        //     alive: true,
        //     disease: 'diabetes',
        //     date: '2008/08/26'
        //   },
        //   {
        //     relationship: 'Sister',
        //     name: 'Ross Perkins',
        //     alive: true,
        //     disease: 'hypertension',
        //     date: '2017/02/19'
        //   }
        // ];
        this.historyProvider.getFamilyHistory(this.auth.userId)
            .subscribe(function (record) { return _this.records = record; }, function (errmess) { return _this.errMess = errmess; });
    }
    FamilyHistoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FamilyHistoryPage');
    };
    FamilyHistoryPage.prototype.addFamilyHistory = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__family_history_detail_family_history_detail__["a" /* FamilyHistoryDetailPage */]);
        modal.present();
        modal.onWillDismiss(function () {
            _this.historyProvider.getFamilyHistory(_this.auth.userId)
                .subscribe(function (record) { return _this.records = record; }, function (errmess) { return _this.errMess = errmess; });
        });
    };
    FamilyHistoryPage.prototype.deleteRecord = function (i) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirm Delete',
            message: 'Are you sure you want to delete this record?',
            enableBackdropDismiss: true,
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel'
                },
                {
                    text: 'Delete',
                    handler: function () {
                        _this.historyProvider.deleteFamilyHistory(_this.auth.userId, i)
                            .subscribe(function (res) {
                            _this.presentToast('Delete successfully.');
                            _this.historyProvider.getFamilyHistory(_this.auth.userId)
                                .subscribe(function (record) { return _this.records = record; }, function (errmess) { return _this.errMess = errmess; });
                        }, function (err) { return _this.presentToast('Error: ' + err); });
                    }
                }
            ]
        });
        alert.present();
    };
    FamilyHistoryPage.prototype.presentAlert = function (msg) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Oops!',
            message: msg,
            enableBackdropDismiss: false,
            buttons: [
                {
                    text: 'Ok',
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__welcome_welcome__["a" /* WelcomePage */]);
                    }
                }
            ]
        });
        alert.present();
    };
    FamilyHistoryPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: false
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    FamilyHistoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-family-history',template:/*ion-inline-start:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/family-history/family-history.html"*/'<!--\n  Generated template for the FamilyHistoryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>FAMILY HISTORY</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list *ngIf="records.length!=0">\n    <ion-list-header>Family History</ion-list-header>\n    <ion-item-sliding *ngFor="let record of records; let i = index">\n      <ion-item>\n        <div class="white-space">\n          <h3 *ngIf="record.name">Name: {{record.name | titlecase}}</h3>\n          <h3>Disease: {{record.disease}}</h3>\n          <p>{{record.date | date}}</p>\n        </div>\n        <p item-end>{{record.relationship}}</p>\n      </ion-item>\n      <ion-item-options side="right" icon-start>\n        <button ion-button color="danger" (click)="deleteRecord(i)">\n          <ion-icon name="trash"></ion-icon>\n          Delete\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n\n  <ion-card [hidden]="records.length!=0">\n    <ion-card-header>No family history record.</ion-card-header>\n  </ion-card>\n\n  <ion-fab right bottom>\n    <button ion-fab color="primary" (click)="addFamilyHistory()">\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/family-history/family-history.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_5__providers_history_history__["a" /* HistoryProvider */]])
    ], FamilyHistoryPage);
    return FamilyHistoryPage;
}());

//# sourceMappingURL=family-history.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImmunizationDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_question_question__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_health_records_health_records__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_moment__);
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
 * Generated class for the ImmunizationDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ImmunizationDetailPage = (function () {
    function ImmunizationDetailPage(navCtrl, navParams, qp, loadingCtrl, toastCtrl, viewCtrl, auth, hrp) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.qp = qp;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.viewCtrl = viewCtrl;
        this.auth = auth;
        this.hrp = hrp;
        this.form = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({});
        this.color = ['dark-salmon', 'rosy-brown', 'slate-grey'];
        this.title = navParams.get('title');
        this.id = navParams.get('id');
        this.questions = this.qp.getImmunizationQuestions(this.title);
        this.form = this.toFormGroup();
        this.navcolor = this.color[(this.id - 1) % 3];
    }
    ImmunizationDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ImmunizationDetailPage');
    };
    ImmunizationDetailPage.prototype.toFormGroup = function () {
        var group = {};
        for (var i = 0; i < this.questions.length; i++) {
            var val = (this.questions[i].value == undefined) ? '' : this.questions[i].value;
            if (i == 1) {
                group[this.questions[i].selectkey] = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](this.questions[i].selectvalue, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required);
                group[this.questions[i].inputkey] = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](this.questions[i].inputvalue, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required);
                group[this.questions[i].datetimekey] = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](this.questions[i].datetimevalue, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required);
            }
            else {
                group[this.questions[i].key] = this.questions[i].required ? new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](val, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required) : new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](val);
            }
        }
        return new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"](group);
    };
    ImmunizationDetailPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ImmunizationDetailPage.prototype.onSubmit = function () {
        var _this = this;
        this.showLoader('Adding...');
        var payLoad = this.form.value;
        payLoad['date'] = __WEBPACK_IMPORTED_MODULE_6_moment__().format();
        console.log(payLoad);
        this.hrp.addImmunization(this.auth.userId, payLoad)
            .subscribe(function (res) {
            _this.loading.dismiss();
            _this.presentToast('Successfully added!');
            _this.viewCtrl.dismiss();
        }, function (err) {
            _this.loading.dismiss();
            _this.presentToast('Error: ' + err);
        });
    };
    ImmunizationDetailPage.prototype.showLoader = function (msg) {
        this.loading = this.loadingCtrl.create({
            content: msg
        });
        this.loading.present();
    };
    ImmunizationDetailPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: false
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    ImmunizationDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-immunization-detail',template:/*ion-inline-start:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/immunization-detail/immunization-detail.html"*/'<!--\n  Generated template for the ImmunizationDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-toolbar [color]="navcolor">\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="white" showWhen="ios">Cancel</span>\n        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>{{title}}</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-content>\n      <div>\n        <form [formGroup]=\'form\' (ngSubmit)="onSubmit()">\n\n          <div *ngFor="let question of questions">\n            <ion-item>\n              <dynamic-form-question [question]="question" [form]="form"></dynamic-form-question>\n            </ion-item>\n          </div>\n\n          <div>\n            <button ion-button type="submit" [disabled]="!form.valid" color="slate-grey">Record</button>\n          </div>\n\n        </form>\n      </div>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/immunization-detail/immunization-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_3__providers_question_question__["a" /* QuestionProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["ViewController"],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_health_records_health_records__["a" /* HealthRecordsProvider */]])
    ], ImmunizationDetailPage);
    return ImmunizationDetailPage;
}());

//# sourceMappingURL=immunization-detail.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LabTestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lab_test_detail_lab_test_detail__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_health_records_health_records__ = __webpack_require__(25);
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
 * Generated class for the LabTestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LabTestPage = (function () {
    function LabTestPage(navCtrl, navParams, hrp) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.hrp = hrp;
        this.list = [];
        // set an empty array with 26 initials.
        for (var i = 0; i < 26; i++) {
            this.list.push({ initial: String.fromCharCode(65 + i), category: new Array(0) });
        }
        console.log(this.list);
        // get common lab test list
        this.hrp.getLabTestCategory()
            .subscribe(function (list) {
            console.log(list);
            list.forEach(function (title) {
                // insert each category into corresponding initial
                if (title.name.charCodeAt(0) > 90) {
                    _this.list[title.name.charCodeAt(0) - 97].category.push(title);
                }
                else {
                    _this.list[title.name.charCodeAt(0) - 65].category.push(title);
                }
            });
            // delete empty initials
            for (var i = 0; i < _this.list.length; i++) {
                if (_this.list[i].category.length == 0) {
                    _this.list.splice(i, 1);
                    i--;
                }
            }
        }, function (errmess) { return _this.errMess = errmess; });
    }
    LabTestPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LabTestPage');
    };
    LabTestPage.prototype.goToCategory = function (i, j) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__lab_test_detail_lab_test_detail__["a" /* LabTestDetailPage */], {
            'id': this.list[i].category[j].id,
            'title': this.list[i].category[j].name,
            'subtest': this.list[i].category[j].subtest
        });
    };
    LabTestPage.prototype.goToOtherTest = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__lab_test_detail_lab_test_detail__["a" /* LabTestDetailPage */], {
            'id': 0,
            'title': 'Other Tests',
            'subtest': []
        });
    };
    LabTestPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-lab-test',template:/*ion-inline-start:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/lab-test/lab-test.html"*/'<!--\n  Generated template for the MedicalrecordPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Lab Test</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <!-- <ion-alpha-scroll *ngIf="breeds" [listData]="breeds" key="name" [itemTemplate]="alphaScrollItemTemplate" [currentPageClass]="currentPageClass"\n    [highlight]="true" [triggerChange]="triggerAlphaScrollChange">\n  </ion-alpha-scroll> -->\n  <ion-list>\n    <ion-list-header>Common Tests</ion-list-header>\n    <ion-item-group *ngFor="let l of list; let i = index">\n      <ion-item-divider color="light">{{l.initial}}</ion-item-divider>\n      <div *ngFor="let c of l.category; let j = index">\n        <button ion-item (click)="goToCategory(i,j)" text-wrap>{{c.name}}</button>\n      </div>\n    </ion-item-group>\n  </ion-list>\n  <ion-list>\n    <ion-list-header>Other Tests</ion-list-header>\n    <button ion-item color="light" (click)="goToOtherTest()">Add other tests\' records</button>\n  </ion-list>\n\n  <!-- <ion-fab right bottom>\n    <button ion-fab color="primary" (click)="goToHome($event)">\n      <ion-icon name="home"></ion-icon>\n    </button>\n  </ion-fab> -->\n</ion-content>\n'/*ion-inline-end:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/lab-test/lab-test.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_3__providers_health_records_health_records__["a" /* HealthRecordsProvider */]])
    ], LabTestPage);
    return LabTestPage;
}());

//# sourceMappingURL=lab-test.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MedicalHistoryDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_question_question__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_question_control_question_control__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_history_history__ = __webpack_require__(24);
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
 * Generated class for the MedicalHistoryDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MedicalHistoryDetailPage = (function () {
    function MedicalHistoryDetailPage(navCtrl, navParams, qp, qcp, viewCtrl, loadingCtrl, toastCtrl, historyProvider, auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.qp = qp;
        this.qcp = qcp;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.historyProvider = historyProvider;
        this.auth = auth;
        this.form = new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["FormGroup"]({});
        this.questions = this.qp.getMedicalHistoryQuestions();
        this.form = this.qcp.toFormGroup(this.questions);
    }
    MedicalHistoryDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MedicalHistoryDetailPage');
    };
    MedicalHistoryDetailPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    MedicalHistoryDetailPage.prototype.onSubmit = function () {
        var _this = this;
        this.showLoader('Adding...');
        var payLoad = this.form.value;
        console.log(payLoad);
        this.historyProvider.addMedicalHistory(this.auth.userId, payLoad)
            .subscribe(function (res) {
            _this.loading.dismiss();
            _this.presentToast('Successfully added!');
            _this.viewCtrl.dismiss();
        }, function (err) {
            _this.loading.dismiss();
            _this.presentToast('Failed to add medical history record.');
        });
    };
    MedicalHistoryDetailPage.prototype.showLoader = function (msg) {
        this.loading = this.loadingCtrl.create({
            content: msg
        });
        this.loading.present();
    };
    MedicalHistoryDetailPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: false
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    MedicalHistoryDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-medical-history-detail',template:/*ion-inline-start:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/medical-history-detail/medical-history-detail.html"*/'<!--\n  Generated template for the MedicalHistoryDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-toolbar color="primary">\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="white" showWhen="ios">Cancel</span>\n        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Add Medical History</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-content>\n      <div>\n        <form [formGroup]=\'form\' (ngSubmit)="onSubmit()">\n\n          <div *ngFor="let question of questions">\n            <ion-item>\n              <dynamic-form-question [question]="question" [form]="form"></dynamic-form-question>\n            </ion-item>\n          </div>\n\n          <div>\n            <button ion-button type="submit" [disabled]="!form.valid" color="slate-grey">Record</button>\n          </div>\n\n        </form>\n      </div>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/medical-history-detail/medical-history-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_3__providers_question_question__["a" /* QuestionProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_question_control_question_control__["a" /* QuestionControlProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["ViewController"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_6__providers_history_history__["a" /* HistoryProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], MedicalHistoryDetailPage);
    return MedicalHistoryDetailPage;
}());

//# sourceMappingURL=medical-history-detail.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MedicalHistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__medical_history_detail_medical_history_detail__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__welcome_welcome__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_history_history__ = __webpack_require__(24);
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
 * Generated class for the MedicalHistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MedicalHistoryPage = (function () {
    function MedicalHistoryPage(navCtrl, navParams, modalCtrl, auth, alertCtrl, toastCtrl, historyProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.historyProvider = historyProvider;
        this.records = [];
        if (!this.auth.userId) {
            this.presentAlert('Please login first.');
        }
        // this.records = [
        //   {
        //     diagnosis: 'diabetes',
        //     date: '2008/08/26'
        //   },
        //   {
        //     diagnosis: 'hypertension',
        //     date: '2017/02/19'
        //   }
        // ];
        // get sorted records
        this.historyProvider.getMedicalHistory(this.auth.userId)
            .subscribe(function (record) { return _this.records = record; }, function (errmess) { return _this.errMess = errmess; });
    }
    MedicalHistoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MedicalHistoryPage');
    };
    MedicalHistoryPage.prototype.addMedicalHistory = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__medical_history_detail_medical_history_detail__["a" /* MedicalHistoryDetailPage */]);
        modal.present();
        modal.onWillDismiss(function () {
            _this.historyProvider.getMedicalHistory(_this.auth.userId)
                .subscribe(function (allergy) { return _this.records = allergy; }, function (errmess) { return _this.errMess = errmess; });
        });
    };
    MedicalHistoryPage.prototype.deleteRecord = function (i) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirm Delete',
            message: 'Are you sure you want to delete this record?',
            enableBackdropDismiss: true,
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel'
                },
                {
                    text: 'Delete',
                    handler: function () {
                        _this.historyProvider.deleteMedicalHistory(_this.auth.userId, i)
                            .subscribe(function (res) {
                            _this.presentToast('Delete successfully.');
                            _this.historyProvider.getMedicalHistory(_this.auth.userId)
                                .subscribe(function (record) { return _this.records = record; }, function (errmess) { return _this.errMess = errmess; });
                        }, function (err) { return _this.presentToast('Error: ' + err); });
                    }
                }
            ]
        });
        alert.present();
    };
    MedicalHistoryPage.prototype.presentAlert = function (msg) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Oops!',
            message: msg,
            enableBackdropDismiss: false,
            buttons: [
                {
                    text: 'Ok',
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__welcome_welcome__["a" /* WelcomePage */]);
                    }
                }
            ]
        });
        alert.present();
    };
    MedicalHistoryPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: false
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    MedicalHistoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-medical-history',template:/*ion-inline-start:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/medical-history/medical-history.html"*/'<!--\n  Generated template for the MedicalHistoryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>MEDICAL HISTORY</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list *ngIf="records.length!=0">\n    <ion-list-header>My Medical History</ion-list-header>\n    <ion-item-sliding *ngFor="let record of records; let i = index">\n      <ion-item>\n        <div class="white-space">\n          <h3>Diagnosis: {{record.diagnosis}}</h3>\n          <p>{{record.date | date}}</p>\n        </div>\n      </ion-item>\n      <ion-item-options side="right" icon-start>\n        <button ion-button color="danger" (click)="deleteRecord(i)">\n          <ion-icon name="trash"></ion-icon>\n          Delete\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n\n  <ion-card [hidden]="records.length!=0">\n    <ion-card-header>No medical history record.</ion-card-header>\n  </ion-card>\n\n  <ion-fab right bottom>\n    <button ion-fab color="primary" (click)="addMedicalHistory()">\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/medical-history/medical-history.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_5__providers_history_history__["a" /* HistoryProvider */]])
    ], MedicalHistoryPage);
    return MedicalHistoryPage;
}());

//# sourceMappingURL=medical-history.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(6);
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
 * Generated class for the PasswordEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PasswordEditPage = (function () {
    function PasswordEditPage(navCtrl, navParams, fb, viewCtrl, loadingCtrl, toastCtrl, auth) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fb = fb;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.auth = auth;
        this.formErrors = {
            "currentPassword": '',
            "newPassword": '',
            "confirmPassword": ''
        };
        this.validationMessages = {
            "currentPassword": {
                "required": "Current password is required."
            },
            "newPassword": {
                "required": "New password is required.",
                "pattern": "Password must be 8-17 characters long and contains at least one number, one letter and one unique character such as !@#$%^&*?\"';:"
            },
            "confirmPassword": {
                "required": "Please enter your password again.",
                "notEquivalent": "Password doesn't match."
            }
        };
        this.editpasswordForm = this.fb.group({
            currentPassword: ['', __WEBPACK_IMPORTED_MODULE_0__angular_forms__["Validators"].required],
            newPassword: ['', [__WEBPACK_IMPORTED_MODULE_0__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_0__angular_forms__["Validators"].pattern('^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\\d)(?=.*[\!\@\#\$\%\^\&\*\?\"\'\;\:]).*$')]],
            confirmPassword: ['', __WEBPACK_IMPORTED_MODULE_0__angular_forms__["Validators"].required]
        }, { validator: this.pwdMatchValidator('newPassword', 'confirmPassword') });
        this.editpasswordForm.valueChanges.subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged();
    }
    PasswordEditPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PasswordEditPage');
    };
    PasswordEditPage.prototype.onValueChanged = function (data) {
        if (!this.editpasswordForm) {
            return;
        }
        var form = this.editpasswordForm;
        for (var field in this.formErrors) {
            this.formErrors[field] = '';
            var control = form.get(field);
            if (control && control.dirty && !control.valid) {
                var messages = this.validationMessages[field];
                for (var key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    };
    PasswordEditPage.prototype.pwdMatchValidator = function (passwordKey, passwordConfirmationKey) {
        return function (group) {
            var passwordInput = group.controls[passwordKey], passwordConfirmationInput = group.controls[passwordConfirmationKey];
            if (passwordInput.value !== passwordConfirmationInput.value) {
                return passwordConfirmationInput.setErrors({ notEquivalent: true });
            }
            else {
                return passwordConfirmationInput.setErrors(null);
            }
        };
    };
    PasswordEditPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    PasswordEditPage.prototype.onSubmit = function () {
        var _this = this;
        this.showLoader('Editing...');
        var payLoad = this.editpasswordForm.value;
        delete payLoad.confirmPassword;
        console.log(payLoad);
        this.auth.editPassword(this.auth.userId, payLoad)
            .subscribe(function (res) {
            if (res == -1) {
                _this.loading.dismiss();
                _this.presentToast("Wrong password.");
            }
            else {
                _this.loading.dismiss();
                _this.presentToast('Successfully edited!');
                _this.viewCtrl.dismiss();
            }
        }, function (err) {
            _this.loading.dismiss();
            _this.presentToast('Error: ' + err);
        });
    };
    PasswordEditPage.prototype.showLoader = function (msg) {
        this.loading = this.loadingCtrl.create({
            content: msg
        });
        this.loading.present();
    };
    PasswordEditPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: false
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    PasswordEditPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-password-edit',template:/*ion-inline-start:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/password-edit/password-edit.html"*/'<!--\n  Generated template for the PasswordEditPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-toolbar color="primary">\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="white" showWhen="ios">Cancel</span>\n        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Edit Password</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form [formGroup]=\'editpasswordForm\' (ngSubmit)="onSubmit()">\n    <ion-list>\n      <ion-item>\n        <ion-label stacked color="primary">Current Password\n          <span class="color-red">*</span>\n        </ion-label>\n        <ion-input type="password" formControlName="currentPassword"></ion-input>\n      </ion-item>\n      <div class="pull-right color-red">\n        <span [hidden]="!(formErrors.currentPassword)">{{formErrors.currentPassword}}</span>\n      </div>\n      <ion-item>\n        <ion-label stacked color="primary">New Password\n          <span class="color-red">*</span>\n        </ion-label>\n        <ion-input type="password" formControlName="newPassword"></ion-input>\n      </ion-item>\n      <div class="pull-right color-red">\n        <span [hidden]="!(formErrors.newPassword)">{{formErrors.newPassword}}</span>\n      </div>\n      <ion-item>\n        <ion-label stacked color="primary">Confirm Password\n          <span class="color-red">*</span>\n        </ion-label>\n        <ion-input type="password" formControlName="confirmPassword"></ion-input>\n      </ion-item>\n      <div class="pull-right color-red">\n        <span [hidden]="!(formErrors.confirmPassword)">{{formErrors.confirmPassword}}</span>\n      </div>\n    </ion-list>\n    <button ion-button block type="submit" [disabled]="!editpasswordForm.valid">Submit</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/password-edit/password-edit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_0__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["ViewController"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], PasswordEditPage);
    return PasswordEditPage;
}());

//# sourceMappingURL=password-edit.js.map

/***/ }),

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__password_reset_password_reset__ = __webpack_require__(147);
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
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WelcomePage = (function () {
    function WelcomePage(navCtrl, navParams, menuCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.modalCtrl = modalCtrl;
    }
    WelcomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WelcomePage');
    };
    WelcomePage.prototype.ionViewWillEnter = function () {
        this.menuCtrl.enable(false);
    };
    WelcomePage.prototype.ionViewWillLeave = function () {
        this.menuCtrl.enable(true);
    };
    WelcomePage.prototype.signup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__signup_signup__["a" /* SignupPage */]);
    };
    WelcomePage.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    WelcomePage.prototype.resetPassword = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__password_reset_password_reset__["a" /* PasswordResetPage */]);
        modal.present();
    };
    WelcomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-welcome',template:/*ion-inline-start:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/welcome/welcome.html"*/'<ion-content padding class="content">\n  <div class="title-wrapper">\n    <div>\n      <a>PITT</a>\n      <br>\n      <a>MOBILE</a>\n      <br>\n      <a>PHR</a>\n    </div>\n    <p class="font">A way to manage your health data</p>\n  </div>\n\n  <div class="botton-wrapper">\n    <button ion-button block (click)="signup()">SIGNUP</button>\n    <button ion-button class="botton-space" block color="primary-pale" (click)="login()">LOGIN</button>\n    <button ion-button clear color="primary" (click)="resetPassword()" no-padding>Forget password?</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/welcome/welcome.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["MenuController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"]])
    ], WelcomePage);
    return WelcomePage;
}());

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileEditablePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_user__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__ = __webpack_require__(6);
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
 * Generated class for the ProfileEditablePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfileEditablePage = (function () {
    function ProfileEditablePage(navCtrl, navParams, fb, viewCtrl, toastCtrl, userProvider, auth) {
        // this.profile = {
        //   username: "km111",
        //   firstname: "Kelly",
        //   lastname: "Marsh",
        //   gender: "male",
        //   email: "KellyM@gmail.com",
        //   tel: "4125890011",
        //   address: "100 Fifth Ave\nApt 119",
        //   birthday: "11/11/1911",
        //   race: "White"
        // };
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fb = fb;
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.userProvider = userProvider;
        this.auth = auth;
        this.profile = {};
        this.formErrors = {
            "firstname": '',
            "lastname": '',
            "email": '',
            "tel": '',
            "birthday": ''
        };
        this.validationMessages = {
            "firstname": {
                "minlength": "Firstname must be at least 2 characters long.",
                "maxlength": "Firstname cannot be more than 25 characters long."
            },
            "lastname": {
                "minlength": "Lastname must be at least 2 characters long.",
                "maxlength": "Lastname cannot be more than 25 characters long."
            },
            "email": {
                "required": "Email is required.",
                "email": "Please enter a valid email address."
            },
            "tel": {
                "pattern": "Please enter a valid phone number."
            },
            "birthday": {
                "pattern": "Please enter your birthday in MM/DD/YYYY format."
            }
        };
        // get profile from database
        this.userProvider.getProfile(this.auth.userId)
            .subscribe(function (profile) { return _this.profile = profile; }, function (errmess) { return _this.errMess = errmess; });
        this.profileForm = this.fb.group({
            firstname: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(2), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(25)]],
            lastname: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(2), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(25)]],
            gender: [this.profile.gender],
            race: [this.profile.race],
            email: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].email]],
            tel: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].pattern('[0-9]{10}')],
            address: [''],
            birthday: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].pattern('(^(((0[1-9]|1[012])/(0[1-9]|1[0-9]|2[0-8]))|((0[13578]|1[02])/(29|30|31))|((0[469]|11)/(29|30)))/(19|20)\\d\\d$)|(^02/29/(19(04|08|12|16|20|24|28|32|36|40|44|48|52|56|60|64|68|72|76|80|84|88|92|96)|20(([02468][048])|([13579][26])))$)')]
        });
        this.profileForm.valueChanges.subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged();
    }
    ProfileEditablePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfileEditablePage');
    };
    ProfileEditablePage.prototype.onValueChanged = function (data) {
        if (!this.profileForm) {
            return;
        }
        var form = this.profileForm;
        for (var field in this.formErrors) {
            this.formErrors[field] = '';
            var control = form.get(field);
            if (control && control.dirty && !control.valid) {
                var messages = this.validationMessages[field];
                for (var key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    };
    ProfileEditablePage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ProfileEditablePage.prototype.onSubmit = function () {
        var _this = this;
        var profile = this.profileForm.value;
        console.log(profile);
        // post edited profile
        this.userProvider.editProfile(this.auth.userId, profile)
            .subscribe(function (profile) {
            _this.toastCtrl.create({
                message: 'Successfully edited.',
                position: 'bottom',
                duration: 2000
            }).present();
            _this.viewCtrl.dismiss();
        }, function (error) {
            _this.toastCtrl.create({
                message: 'Failed to edit.',
                position: 'bottom',
                duration: 2000
            }).present();
        });
    };
    ProfileEditablePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-profile-editable',template:/*ion-inline-start:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/profile-editable/profile-editable.html"*/'<!--\n  Generated template for the ProfileEditablePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-toolbar color="primary">\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="white" showWhen="ios">Cancel</span>\n        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Edit Profile</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form novalidate [formGroup]="profileForm" (ngSubmit)="onSubmit()">\n    <ion-list>\n      <ion-item>\n        <ion-label stacked color="primary">Firstname<span class="color-red">*</span></ion-label>\n        <ion-input value="{{profile.firstname | titlecase}}" type="text" formControlName="firstname"></ion-input>\n      </ion-item>\n      <div class="pull-right color-red">\n        <span [hidden]="!(formErrors.firstname)">{{formErrors.firstname}}</span>\n      </div>\n      <ion-item>\n        <ion-label stacked color="primary">Lastname<span class="color-red">*</span></ion-label>\n        <ion-input value="{{profile.lastname | titlecase}}" type="text" formControlName="lastname"></ion-input>\n      </ion-item>\n      <div class="pull-right color-red">\n        <span [hidden]="!(formErrors.lastname)">{{formErrors.lastname}}</span>\n      </div>\n      <ion-item>\n        <ion-label stacked color="primary">Gender</ion-label>\n        <ion-select formControlName="gender">\n          <ion-option value="female">Female</ion-option>\n          <ion-option value="male">Male</ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-label stacked color="primary">Race and Ethnicity</ion-label>\n        <ion-select formControlName="race">\n          <ion-option>Hispanic or Latino</ion-option>\n          <ion-option>White</ion-option>\n          <ion-option>Black or African American</ion-option>\n          <ion-option>Native Hawaiian or Other Pacific Islander</ion-option>\n          <ion-option>Asian</ion-option>\n          <ion-option>American Indian or Alaskan Native</ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-label stacked color="primary">Email<span class="color-red">*</span></ion-label>\n        <ion-input value="{{profile.email}}" type="email" formControlName="email"></ion-input>\n      </ion-item>\n      <div class="pull-right color-red">\n        <span [hidden]="!(formErrors.email)">{{formErrors.email}}</span>\n      </div>\n      <ion-item>\n        <ion-label stacked color="primary">Phone</ion-label>\n        <ion-input value="{{profile.tel}}" type="tel" formControlName="tel"></ion-input>\n      </ion-item>\n      <div class="pull-right color-red">\n        <span [hidden]="!(formErrors.tel)">{{formErrors.tel}}</span>\n      </div>\n      <ion-item>\n        <ion-label stacked color="primary">Address</ion-label>\n        <ion-textarea value="{{profile.address}}" type="text" formControlName="address"></ion-textarea>\n      </ion-item>\n      <ion-item>\n        <ion-label stacked color="primary">Birthday</ion-label>\n        <ion-input value="{{profile.birthday | date:\'MM/dd/yyyy\'}}" type="text" formControlName="birthday"></ion-input>\n      </ion-item>\n      <div class="pull-right color-red">\n        <span [hidden]="!(formErrors.birthday)">{{formErrors.birthday}}</span>\n      </div>\n    </ion-list>\n    <button ion-button block type="submit" [disabled]="!profileForm.valid">Edit</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/profile-editable/profile-editable.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_3__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], ProfileEditablePage);
    return ProfileEditablePage;
}());

//# sourceMappingURL=profile-editable.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_editable_profile_editable__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_user__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__welcome_welcome__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__password_edit_password_edit__ = __webpack_require__(159);
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
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = (function () {
    function ProfilePage(navCtrl, navParams, modalCtrl, userProvider, auth, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.userProvider = userProvider;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.profile = {};
        if (!this.auth.userId) {
            this.presentAlert('Please login first.');
        }
        //get profile from database
        this.userProvider.getProfile(this.auth.userId)
            .subscribe(function (profile) { return _this.profile = profile; }, function (errmess) { return _this.errMess = errmess; });
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    ProfilePage.prototype.editProfile = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__profile_editable_profile_editable__["a" /* ProfileEditablePage */]);
        modal.present();
        modal.onWillDismiss(function () {
            _this.userProvider.getProfile(_this.auth.userId)
                .subscribe(function (profile) { return _this.profile = profile; }, function (errmess) { return _this.errMess = errmess; });
        });
    };
    ProfilePage.prototype.editPassword = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__password_edit_password_edit__["a" /* PasswordEditPage */]);
        modal.present();
    };
    ProfilePage.prototype.presentAlert = function (msg) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Oops!',
            message: msg,
            enableBackdropDismiss: false,
            buttons: [
                {
                    text: 'Ok',
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__welcome_welcome__["a" /* WelcomePage */]);
                    }
                }
            ]
        });
        alert.present();
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-profile',template:/*ion-inline-start:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/profile/profile.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Profile</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-item no-lines>\n      <ion-icon name="contact" color="primary" item-start></ion-icon>\n      <ion-label>\n        <b>{{profile.username}}</b>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked color="primary">Name</ion-label>\n      <ion-input value="{{profile.firstname | titlecase}} {{profile.lastname | titlecase}}" readonly></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked color="primary">Gender</ion-label>\n      <ion-input value="{{profile.gender | titlecase}}" readonly></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked color="primary">Race and Ethnicity</ion-label>\n      <ion-input value="{{profile.race}}" readonly></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked color="primary">Email</ion-label>\n      <ion-input value="{{profile.email}}" readonly></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked color="primary">Phone</ion-label>\n      <ion-input value="{{profile.tel}}" readonly></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked color="primary">Address</ion-label>\n      <ion-textarea value="{{profile.address}}" readonly></ion-textarea>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked color="primary">Birthday</ion-label>\n      <ion-input value="{{profile.birthday | date}}" readonly></ion-input>\n    </ion-item>\n    <button ion-item (click)="editProfile()">\n      <ion-label color="primary">Edit Profile</ion-label>\n    </button>\n    <button ion-item (click)="editPassword()">\n      <ion-label color="primary">Edit Password</ion-label>\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/profile/profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_3__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResourcesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(353);
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
 * Generated class for the ResourcesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ResourcesPage = (function () {
    function ResourcesPage(navCtrl, navParams, iab) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.iab = iab;
        this.resources = [];
        this.resources = [
            {
                title: "Immunization Schedules",
                link: "https://www.cdc.gov/vaccines/schedules/index.html"
            },
            {
                title: "Weight Management",
                link: "https://www.nutrition.gov/weight-management"
            },
            {
                title: "Physical Activity Guidelines",
                link: "https://health.gov/paguidelines/"
            },
            {
                title: "Lab Tests",
                link: "https://labtestsonline.org/"
            },
            {
                title: "Lab Test Reference Ranges",
                link: "http://laboratory.uchealth.com/tests/reference-ranges-pdf/"
            }
        ];
    }
    ResourcesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ResourcesPage');
    };
    ResourcesPage.prototype.openLink = function (i) {
        this.iab.create(this.resources[i].link, '_blank', 'location=yes');
    };
    ResourcesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-resources',template:/*ion-inline-start:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/resources/resources.html"*/'<!--\n  Generated template for the ResourcesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Resources</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-header>Reference Links</ion-card-header>\n    <ion-card-content>\n      <ion-list *ngFor="let r of resources; let i = index;" no-padding>\n        <ion-item text-wrap>\n          <h3>\n            <a href="#" (click)="openLink(i)">{{r.title}}</a>\n          </h3>\n        </ion-item>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/resources/resources.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], ResourcesPage);
    return ResourcesPage;
}());

//# sourceMappingURL=resources.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocialHistoryDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_question_question__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_question_control_question_control__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_history_history__ = __webpack_require__(24);
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
 * Generated class for the SocialHistoryDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SocialHistoryDetailPage = (function () {
    function SocialHistoryDetailPage(navCtrl, navParams, qp, qcp, viewCtrl, loadingCtrl, toastCtrl, historyProvider, auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.qp = qp;
        this.qcp = qcp;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.historyProvider = historyProvider;
        this.auth = auth;
        this.form = new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["FormGroup"]({});
        this.color = ['dark-salmon', 'rosy-brown', 'slate-grey'];
        this.title = navParams.get('title');
        this.id = navParams.get('id');
        console.log(this.id);
        this.questions = this.qp.getSocialHistoryQuestions(this.id);
        this.form = this.qcp.toFormGroup(this.questions);
        this.navcolor = this.color[(this.id - 1) % 3];
    }
    SocialHistoryDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SocialHistoryDetailPage');
    };
    SocialHistoryDetailPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    SocialHistoryDetailPage.prototype.onSubmit = function () {
        var _this = this;
        this.showLoader('Adding...');
        var payLoad = this.form.value;
        console.log(payLoad);
        this.historyProvider.addSocialHistory(this.auth.userId, this.title, payLoad)
            .subscribe(function (res) {
            _this.loading.dismiss();
            _this.presentToast('Successfully added!');
            _this.viewCtrl.dismiss();
        }, function (err) {
            _this.loading.dismiss();
            _this.presentToast('Error: ' + err);
            console.log(err);
        });
    };
    SocialHistoryDetailPage.prototype.showLoader = function (msg) {
        this.loading = this.loadingCtrl.create({
            content: msg
        });
        this.loading.present();
    };
    SocialHistoryDetailPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: false
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    SocialHistoryDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-social-history-detail',template:/*ion-inline-start:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/social-history-detail/social-history-detail.html"*/'<!--\n  Generated template for the SocialHistoryDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-toolbar [color]="navcolor">\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="white" showWhen="ios">Cancel</span>\n        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>{{title}}</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-content>\n      <div>\n        <form [formGroup]=\'form\' (ngSubmit)="onSubmit()">\n\n          <div *ngFor="let question of questions">\n            <ion-item>\n              <dynamic-form-question [question]="question" [form]="form"></dynamic-form-question>\n            </ion-item>\n          </div>\n\n          <div>\n            <button ion-button type="submit" [disabled]="!form.valid" color="slate-grey">Record</button>\n          </div>\n\n        </form>\n      </div>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/social-history-detail/social-history-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_3__providers_question_question__["a" /* QuestionProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_question_control_question_control__["a" /* QuestionControlProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["ViewController"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_6__providers_history_history__["a" /* HistoryProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], SocialHistoryDetailPage);
    return SocialHistoryDetailPage;
}());

//# sourceMappingURL=social-history-detail.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocialHistoryCategoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_social_history_classification_social_history_classification__ = __webpack_require__(354);
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
 * Generated class for the SocialHistoryCategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SocialHistoryCategoryPage = (function () {
    function SocialHistoryCategoryPage(navCtrl, navParams, scp) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.scp = scp;
        // get Main Menu
        this.tiles = this.scp.getMenu(0);
    }
    SocialHistoryCategoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SocialHistoryCategoryPage');
    };
    SocialHistoryCategoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-social-history-category',template:/*ion-inline-start:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/social-history-category/social-history-category.html"*/'<!--\n  Generated template for the SocialHistoryCategoryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Social History</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <tile [tiles]="tiles"></tile>\n\n</ion-content>\n'/*ion-inline-end:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/social-history-category/social-history-category.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__providers_social_history_classification_social_history_classification__["a" /* SocialHistoryClassificationProvider */]])
    ], SocialHistoryCategoryPage);
    return SocialHistoryCategoryPage;
}());

//# sourceMappingURL=social-history-category.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurgicalHistoryDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_question_question__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contact_add_contacts_contact_add_contacts__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_question_control_question_control__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_service_auth_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_history_history__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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








/**
 * Generated class for the SurgicalHistoryDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SurgicalHistoryDetailPage = (function () {
    function SurgicalHistoryDetailPage(navCtrl, navParams, qp, qcp, viewCtrl, modalCtrl, loadingCtrl, toastCtrl, historyProvider, auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.qp = qp;
        this.qcp = qcp;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.historyProvider = historyProvider;
        this.auth = auth;
        this.form = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({});
    }
    SurgicalHistoryDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SurgicalHistoryDetailPage');
    };
    SurgicalHistoryDetailPage.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.qp.getSurgicalHistoryQuestions(this.auth.userId)];
                    case 1:
                        _a.questions = (_b.sent());
                        this.form = this.qcp.toFormGroup(this.questions);
                        return [2 /*return*/];
                }
            });
        });
    };
    SurgicalHistoryDetailPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    SurgicalHistoryDetailPage.prototype.addContact = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__contact_add_contacts_contact_add_contacts__["a" /* ContactAddContactsPage */]);
        modal.present();
        modal.onWillDismiss(function () { return __awaiter(_this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.qp.getSurgicalHistoryQuestions(this.auth.userId)];
                    case 1:
                        _a.questions = (_b.sent());
                        this.form = this.qcp.toFormGroup(this.questions);
                        return [2 /*return*/];
                }
            });
        }); });
    };
    SurgicalHistoryDetailPage.prototype.onSubmit = function () {
        var _this = this;
        this.showLoader('Adding...');
        var payLoad = this.form.value;
        console.log(payLoad);
        this.historyProvider.addSurgicalHistory(this.auth.userId, payLoad)
            .subscribe(function (res) {
            _this.loading.dismiss();
            _this.presentToast('Successfully added!');
            _this.viewCtrl.dismiss();
        }, function (err) {
            _this.loading.dismiss();
            _this.presentToast('Failed to add the record.');
        });
    };
    SurgicalHistoryDetailPage.prototype.showLoader = function (msg) {
        this.loading = this.loadingCtrl.create({
            content: msg
        });
        this.loading.present();
    };
    SurgicalHistoryDetailPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: false
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    SurgicalHistoryDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-surgical-history-detail',template:/*ion-inline-start:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/surgical-history-detail/surgical-history-detail.html"*/'<!--\n  Generated template for the SurgicalHistoryDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-toolbar color="primary">\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="white" showWhen="ios">Cancel</span>\n        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Add Surgical History</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-content>\n      <div>\n        <form [formGroup]=\'form\' (ngSubmit)="onSubmit()">\n\n          <div *ngFor="let question of questions">\n            <ion-item>\n              <dynamic-form-question [question]="question" [form]="form"></dynamic-form-question>\n            </ion-item>\n          </div>\n\n          <div>\n            <button ion-button type="submit" [disabled]="!form.valid" color="slate-grey">Record</button>\n            <button ion-button type="button" clear color="primary" (click)="addContact()">Add Contact</button>\n          </div>\n\n        </form>\n      </div>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/surgical-history-detail/surgical-history-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_3__providers_question_question__["a" /* QuestionProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_question_control_question_control__["a" /* QuestionControlProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_7__providers_history_history__["a" /* HistoryProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], SurgicalHistoryDetailPage);
    return SurgicalHistoryDetailPage;
}());

//# sourceMappingURL=surgical-history-detail.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurgicalHistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__surgical_history_detail_surgical_history_detail__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__welcome_welcome__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_history_history__ = __webpack_require__(24);
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
 * Generated class for the SurgicalHistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SurgicalHistoryPage = (function () {
    function SurgicalHistoryPage(navCtrl, navParams, modalCtrl, historyProvider, auth, alertCtrl, toastCtrl) {
        // get sorted records
        // this.records = [
        //   {
        //     surgery: 'appendectomy',
        //     doctor: 'Aaric Falconi',
        //     date: '2018/04/26'
        //   },
        //   {
        //     surgery: 'arthrodesis',
        //     doctor: 'Scott Williamson',
        //     date: '2017/09/11'
        //   }
        // ];
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.historyProvider = historyProvider;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.records = [];
        this.historyProvider.getSurgicalHistory(this.auth.userId)
            .subscribe(function (records) { return _this.records = records; }, function (errmess) { return _this.errMess = errmess; });
    }
    SurgicalHistoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SurgicalHistoryPage');
    };
    SurgicalHistoryPage.prototype.addSurgicalHistory = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__surgical_history_detail_surgical_history_detail__["a" /* SurgicalHistoryDetailPage */]);
        modal.present();
        modal.onWillDismiss(function () { return _this.historyProvider.getSurgicalHistory(_this.auth.userId)
            .subscribe(function (records) { return _this.records = records; }, function (errmess) { return _this.errMess = errmess; }); });
    };
    SurgicalHistoryPage.prototype.deleteRecord = function (i) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirm Delete',
            message: 'Are you sure you want to delete this record?',
            enableBackdropDismiss: true,
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel'
                },
                {
                    text: 'Delete',
                    handler: function () {
                        _this.historyProvider.deleteSurgicalHistory(_this.auth.userId, i)
                            .subscribe(function (res) {
                            _this.presentToast('Delete successfully.');
                            _this.historyProvider.getSurgicalHistory(_this.auth.userId)
                                .subscribe(function (records) { return _this.records = records; }, function (errmess) { return _this.errMess = errmess; });
                        }, function (err) { return _this.presentToast('Error: ' + err); });
                    }
                }
            ]
        });
        alert.present();
    };
    SurgicalHistoryPage.prototype.presentAlert = function (msg) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Oops!',
            message: msg,
            enableBackdropDismiss: false,
            buttons: [
                {
                    text: 'Ok',
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__welcome_welcome__["a" /* WelcomePage */]);
                    }
                }
            ]
        });
        alert.present();
    };
    SurgicalHistoryPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: false
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    SurgicalHistoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-surgical-history',template:/*ion-inline-start:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/surgical-history/surgical-history.html"*/'<!--\n  Generated template for the SurgicalHistoryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>SURGICAL HISTORY</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list *ngIf="records.length!=0">\n    <ion-list-header>Surgical History</ion-list-header>\n    <ion-item-sliding *ngFor="let record of records; let i = index">\n      <ion-item>\n        <div class="white-space">\n          <h3>Surgery: {{record.surgery}}</h3>\n          <h3>Doctor: {{record.doctor}}</h3>\n          <p>{{record.date | date}}</p>\n        </div>\n      </ion-item>\n      <ion-item-options side="right" icon-start>\n        <button ion-button color="danger" (click)="deleteRecord(i)">\n          <ion-icon name="trash"></ion-icon>\n          Delete\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n\n  <ion-card [hidden]="records.length!=0">\n    <ion-card-header>No surgical history record.</ion-card-header>\n  </ion-card>\n\n  <ion-fab right bottom>\n    <button ion-fab color="primary" (click)="addSurgicalHistory()">\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/surgical-history/surgical-history.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_5__providers_history_history__["a" /* HistoryProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"]])
    ], SurgicalHistoryPage);
    return SurgicalHistoryPage;
}());

//# sourceMappingURL=surgical-history.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocialHistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__social_history_category_social_history_category__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__welcome_welcome__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_history_history__ = __webpack_require__(24);
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
 * Generated class for the SocialHistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SocialHistoryPage = (function () {
    function SocialHistoryPage(navCtrl, navParams, auth, alertCtrl, toastCtrl, historyProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.historyProvider = historyProvider;
        this.records = { smoking: [], alcohol: [], drug: [], travel: [], housing: [] };
        if (!this.auth.userId) {
            this.presentAlert('Please login first.');
        }
        // get sorted records
        // this.records = {
        //   smoking: [
        //     {
        //       amount: 3,
        //       date: '2018/01/09'
        //     },
        //     {
        //       amount: 7,
        //       date: '2018/01/01'
        //     }
        //   ],
        //   alcohol: [
        //     {
        //       name: 'wine',
        //       amount: '6',
        //       alcohol: '13.8',
        //       date: '2018/04/18'
        //     }
        //   ],
        //   drug: [],
        //   travel: [
        //     {
        //       location: 'New York City',
        //       note: 'Nice experience',
        //       date: '2018/05/01'
        //     }
        //   ],
        //   housing: [
        //     {
        //       type: 'apartment',
        //       moveindate: '2017/08/01',
        //       moveoutdate: '2018/01/01',
        //       note: ''
        //     }
        //   ]
        // };
        this.historyProvider.getSocialHistory(this.auth.userId)
            .subscribe(function (record) { return _this.records = record; }, function (errmess) { return _this.errMess = errmess; });
    }
    SocialHistoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SocialHistoryPage');
    };
    SocialHistoryPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.historyProvider.getSocialHistory(this.auth.userId)
            .subscribe(function (record) { return _this.records = record; }, function (errmess) { return _this.errMess = errmess; });
    };
    SocialHistoryPage.prototype.addSocialHistory = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__social_history_category_social_history_category__["a" /* SocialHistoryCategoryPage */]);
    };
    SocialHistoryPage.prototype.deleteRecord = function (type, i) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirm Delete',
            message: 'Are you sure you want to delete this record?',
            enableBackdropDismiss: true,
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel'
                },
                {
                    text: 'Delete',
                    handler: function () {
                        _this.historyProvider.deleteSocialHistory(_this.auth.userId, type, i)
                            .subscribe(function (res) {
                            _this.presentToast('Delete successfully.');
                            _this.historyProvider.getSocialHistory(_this.auth.userId)
                                .subscribe(function (record) { return _this.records = record; }, function (errmess) { return _this.errMess = errmess; });
                        }, function (err) { return _this.presentToast('Error: ' + err); });
                    }
                }
            ]
        });
        alert.present();
    };
    SocialHistoryPage.prototype.presentAlert = function (msg) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Oops!',
            message: msg,
            enableBackdropDismiss: false,
            buttons: [
                {
                    text: 'Ok',
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__welcome_welcome__["a" /* WelcomePage */]);
                    }
                }
            ]
        });
        alert.present();
    };
    SocialHistoryPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: false
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    SocialHistoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-social-history',template:/*ion-inline-start:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/social-history/social-history.html"*/'<!--\n  Generated template for the SocialHistoryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>SOCIAL HISTORY</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list *ngIf="records.smoking.length!=0">\n    <ion-list-header>Smoking History</ion-list-header>\n    <ion-item-sliding *ngFor="let s of records.smoking; let i = index">\n      <ion-item>\n        <div class="white-space">\n          <h3>Cigarettes: {{s.amount}}</h3>\n          <p>{{s.date | date}}</p>\n        </div>\n      </ion-item>\n      <ion-item-options side="right" icon-start>\n        <button ion-button color="danger" (click)="deleteRecord(\'smoking\', i)">\n          <ion-icon name="trash"></ion-icon>\n          Delete\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n  <ion-list *ngIf="records.alcohol.length!=0">\n    <ion-list-header>Alcohol History</ion-list-header>\n    <ion-item-sliding *ngFor="let a of records.alcohol; let j = index">\n      <ion-item>\n        <div class="white-space">\n          <h3>Name: {{a.name}}</h3>\n          <h3>Amount: {{a.amount}} oz</h3>\n          <h3>Alcohol: {{a.alcohol}} %</h3>\n          <p>{{a.date | date}}</p>\n        </div>\n      </ion-item>\n      <ion-item-options side="right" icon-start>\n        <button ion-button color="danger" (click)="deleteRecord(\'alcohol\', j)">\n          <ion-icon name="trash"></ion-icon>\n          Delete\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n  <ion-list *ngIf="records.drug.length!=0">\n    <ion-list-header>Drug History</ion-list-header>\n    <ion-item-sliding *ngFor="let p of records.drug; let k = index">\n      <ion-item>\n        <div class="white-space">\n          <h3>Name: {{p.name}}</h3>\n          <h3>Amount: {{p.amount}}</h3>\n          <h3>Notes: {{p.note}}</h3>\n          <p>{{p.date | date}}</p>\n        </div>\n      </ion-item>\n      <ion-item-options side="right" icon-start>\n        <button ion-button color="danger" (click)="deleteRecord(\'drug\', k)">\n          <ion-icon name="trash"></ion-icon>\n          Delete\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n  <ion-list *ngIf="records.travel.length!=0">\n    <ion-list-header>Travel History</ion-list-header>\n    <ion-item-sliding *ngFor="let t of records.travel; let u = index">\n      <ion-item>\n        <div class="white-space">\n          <h3>Location: {{t.location}}</h3>\n          <h3>Notes: {{t.note}}</h3>\n          <p>{{t.date | date}}</p>\n        </div>\n      </ion-item>\n      <ion-item-options side="right" icon-start>\n        <button ion-button color="danger" (click)="deleteRecord(\'travel\', u)">\n          <ion-icon name="trash"></ion-icon>\n          Delete\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n  <ion-list *ngIf="records.housing.length!=0">\n    <ion-list-header>Housing History</ion-list-header>\n    <ion-item-sliding *ngFor="let h of records.housing; let v = index">\n      <ion-item>\n        <div class="white-space">\n          <h3>Housing Type: {{h.type | titlecase}}</h3>\n          <h3>Move in: {{h.moveindate | date}}</h3>\n          <h3>Move out: {{h.moveoutdate | date}}</h3>\n          <p>Notes: {{h.note}}</p>\n        </div>\n      </ion-item>\n      <ion-item-options side="right" icon-start>\n        <button ion-button color="danger" (click)="deleteRecord(\'housing\', v)">\n          <ion-icon name="trash"></ion-icon>\n          Delete\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n\n  <ion-card [hidden]="records.smoking.length!=0 || records.alcohol.length!=0 || records.drug.length!=0 || records.travel.length!=0 || records.housing.length!=0">\n    <ion-card-header>No record.</ion-card-header>\n  </ion-card>\n\n  <ion-fab right bottom>\n    <button ion-fab color="primary" (click)="addSocialHistory()">\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/social-history/social-history.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_5__providers_history_history__["a" /* HistoryProvider */]])
    ], SocialHistoryPage);
    return SocialHistoryPage;
}());

//# sourceMappingURL=social-history.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestResultsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__diagnostic_procedure_diagnostic_procedure__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lab_test_lab_test__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__welcome_welcome__ = __webpack_require__(16);
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
 * Generated class for the TestResultsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TestResultsPage = (function () {
    function TestResultsPage(navCtrl, navParams, auth, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        if (!this.auth.userId) {
            this.presentAlert('Please login first.');
        }
    }
    TestResultsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TestResultsPage');
    };
    TestResultsPage.prototype.goToLabTest = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__lab_test_lab_test__["a" /* LabTestPage */]);
    };
    TestResultsPage.prototype.goToDiagnosticProcedure = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__diagnostic_procedure_diagnostic_procedure__["a" /* DiagnosticProcedurePage */]);
    };
    TestResultsPage.prototype.presentAlert = function (msg) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Oops!',
            message: msg,
            enableBackdropDismiss: false,
            buttons: [
                {
                    text: 'Ok',
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__welcome_welcome__["a" /* WelcomePage */]);
                    }
                }
            ]
        });
        alert.present();
    };
    TestResultsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-test-results',template:/*ion-inline-start:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/test-results/test-results.html"*/'<!--\n  Generated template for the TestResultsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>TEST RESULTS</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <button ion-button block (click)="goToLabTest()">Lab Test Results</button>\n  <button ion-button block (click)="goToDiagnosticProcedure()">Diagnostic Procedure Results</button>\n</ion-content>\n'/*ion-inline-end:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/test-results/test-results.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"]])
    ], TestResultsPage);
    return TestResultsPage;
}());

//# sourceMappingURL=test-results.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrackerDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_question_question__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_question_control_question_control__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_trackers_trackers__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_service_auth_service__ = __webpack_require__(6);
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
 * Generated class for the TrackerDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TrackerDetailPage = (function () {
    function TrackerDetailPage(navCtrl, navParams, qp, qcp, loadingCtrl, toastCtrl, trackerProvider, auth, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.qp = qp;
        this.qcp = qcp;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.trackerProvider = trackerProvider;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.tracker = "track";
        this.records = [];
        this.title = navParams.get('title');
        this.id = navParams.get('id');
        this.questions = this.qp.getTrackersQuestions(this.id);
        this.form = this.qcp.toFormGroup(this.questions);
        // get particular records sorted by date from database
        this.trackerProvider.getRecords(this.auth.userId, this.id)
            .subscribe(function (records) { return _this.records = records; }, function (errmess) { return _this.errMess = errmess; });
    }
    TrackerDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TrackerDetailPage');
    };
    TrackerDetailPage.prototype.showNotes = function (i) {
        var alert = this.alertCtrl.create({
            message: 'Notes: ' + this.records[i].note,
            enableBackdropDismiss: true
        });
        alert.present();
    };
    TrackerDetailPage.prototype.onSubmit = function () {
        var _this = this;
        this.showLoader('Adding...');
        var payLoad = this.form.value;
        console.log(payLoad);
        this.trackerProvider.addRecord(this.auth.userId, this.id, payLoad)
            .subscribe(function (res) {
            _this.loading.dismiss();
            _this.presentToast('Successfully added!');
            _this.trackerProvider.getRecords(_this.auth.userId, _this.id)
                .subscribe(function (records) { return _this.records = records; }, function (errmess) { return _this.errMess = errmess; });
            _this.tracker = 'history';
        }, function (err) {
            _this.loading.dismiss();
            _this.presentToast('Error: ' + err);
        });
    };
    TrackerDetailPage.prototype.showLoader = function (msg) {
        this.loading = this.loadingCtrl.create({
            content: msg
        });
        this.loading.present();
    };
    TrackerDetailPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: false
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    TrackerDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-tracker-detail',template:/*ion-inline-start:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/tracker-detail/tracker-detail.html"*/'<!--\n  Generated template for the TrackerDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>{{title | uppercase}}</ion-title>\n  </ion-navbar>\n\n  <ion-toolbar color="primary">\n    <ion-segment color="light" [(ngModel)]="tracker">\n      <ion-segment-button value="track">\n        TRACK\n      </ion-segment-button>\n      <ion-segment-button value="history">\n        HISTORY\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <!-- <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content color="primary" pullingIcon="arrow-dropdown" pullingText="Pull to refresh" refreshingSpinner="circles"\n      refreshingText="Refreshing..."></ion-refresher-content>\n  </ion-refresher> -->\n  <div [ngSwitch]="tracker">\n    <div *ngSwitchCase="\'track\'">\n      <ion-card>\n        <ion-card-content>\n          <div>\n            <form [formGroup]=\'form\' (ngSubmit)="onSubmit()">\n\n              <div *ngFor="let question of questions">\n                <ion-item>\n                  <dynamic-form-question [question]="question" [form]="form"></dynamic-form-question>\n                </ion-item>\n              </div>\n\n              <div>\n                <button ion-button type="submit" [disabled]="!form.valid" color="slate-grey">Record</button>\n              </div>\n\n            </form>\n          </div>\n        </ion-card-content>\n      </ion-card>\n    </div>\n    <div *ngSwitchCase="\'history\'">\n      <ion-list *ngIf="records.length!=0">\n        <ion-card *ngFor="let record of records; let i = index">\n\n          <ion-item *ngIf="id==1" (click)="showNotes(i)">\n            <h2>{{record.food}} {{record.amount}}</h2>\n            <h2 *ngIf="record.calories.length!=0">{{record.calories}}</h2>\n            <ion-note>{{record.timeperiod | titlecase}} - {{record.datetime | date:\'mediumDate\'}} {{record.datetime | date:\'shortTime\'}}</ion-note>\n          </ion-item>\n\n          <ion-item *ngIf="id==2" (click)="showNotes(i)">\n            <h2>{{record.drink}} {{record.amount}}{{record.unit}}</h2>\n            <ion-note>{{record.datetime | date:\'mediumDate\'}} {{record.datetime | date:\'shortTime\'}}</ion-note>\n          </ion-item>\n\n          <ion-item *ngIf="id==3" (click)="showNotes(i)">\n            <h2>{{record.weight}} lb</h2>\n            <ion-note item-right>{{record.date | date}}</ion-note>\n          </ion-item>\n\n          <ion-item *ngIf="id==4" (click)="showNotes(i)">\n            <h2>{{record.height}}</h2>\n            <ion-note item-right>{{record.datetime | date:\'mediumDate\'}} {{record.datetime | date:\'shortTime\'}}</ion-note>\n          </ion-item>\n\n          <ion-item *ngIf="id==5" (click)="showNotes(i)">\n            <h2>{{record.bedtime | date: \'shortTime\'}} ~ {{record.wakeuptime | date: \'shortTime\'}}</h2>\n            <ion-note>{{record.bedtime | date: \'mediumDate\'}}</ion-note>\n          </ion-item>\n\n          <ion-item *ngIf="id==6" (click)="showNotes(i)">\n            <h2>{{record.exercise}} {{record.duration}}</h2>\n            <ion-note>{{record.datetime | date:\'mediumDate\'}} {{record.datetime | date:\'shortTime\'}}</ion-note>\n          </ion-item>\n\n          <ion-item *ngIf="id==7" (click)="showNotes(i)">\n            <h2>{{record.SBP}}/{{record.DBP}}</h2>\n            <ion-note item-right>{{record.date | date}}</ion-note>\n          </ion-item>\n\n          <ion-item *ngIf="id==8" (click)="showNotes(i)">\n            <h2>{{record.bloodsugar}} mg/dl</h2>\n            <ion-note item-right>{{record.date | date}}</ion-note>\n          </ion-item>\n\n          <ion-item *ngIf="id==9" (click)="showNotes(i)">\n            <h2>level {{record.pain}}</h2>\n            <ion-note item-right>{{record.date | date}}</ion-note>\n          </ion-item>\n\n          <ion-item *ngIf="id==10">\n            <ion-note>{{record.datetime | date:\'mediumDate\'}} {{record.datetime | date:\'shortTime\'}}</ion-note>\n            <h2 text-wrap>{{record.note}}</h2>\n          </ion-item>\n\n          <ion-item *ngIf="id==11" (click)="showNotes(i)">\n            <h2 text-wrap>{{record.mood}}</h2>\n            <ion-note>{{record.date | date}}</ion-note>\n          </ion-item>\n\n          <ion-item *ngIf="id==12" (click)="showNotes(i)">\n            <h2>{{record.begindate | date}} ~ {{record.enddate | date}}</h2>\n          </ion-item>\n\n        </ion-card>\n      </ion-list>\n      <ion-card [hidden]="records.length!=0">\n        <ion-card-header>No {{title}} record.</ion-card-header>\n      </ion-card>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/tracker-detail/tracker-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__providers_question_question__["a" /* QuestionProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_question_control_question_control__["a" /* QuestionControlProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_4__providers_trackers_trackers__["a" /* TrackersProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"]])
    ], TrackerDetailPage);
    return TrackerDetailPage;
}());

//# sourceMappingURL=tracker-detail.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TrackersPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PanelPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tracker_detail_tracker_detail__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_service_auth_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__welcome_welcome__ = __webpack_require__(16);
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
 * Generated class for the TrackersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TrackersPage = (function () {
    function TrackersPage(navCtrl, navParams, popoverCtrl, alertCtrl, storage, auth) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.auth = auth;
        this.panels = {
            "food": true,
            "drink": true,
            "weight": true,
            "height": true,
            "sleep": true,
            "exercise": true,
            "blood pressure": true,
            "blood sugar": true,
            "pain": true,
            "health log": true,
            "mood": true,
            "period": true
        };
        this.trackers = [
            { id: 1, name: 'food', icon: "fas fa-utensils" },
            { id: 2, name: 'drink', icon: "fas fa-glass-martini" },
            { id: 3, name: 'weight', icon: "fas fa-weight" },
            { id: 4, name: 'height', icon: "fas fa-male" },
            { id: 5, name: 'sleep', icon: "far fa-clock" },
            { id: 6, name: 'exercise', icon: "fas fa-basketball-ball" },
            { id: 7, name: 'blood pressure', icon: "far fa-chart-bar" },
            { id: 8, name: 'blood sugar', icon: "far fa-chart-bar" },
            { id: 9, name: 'pain', icon: "fas fa-diagnoses" },
            { id: 10, name: 'health log', icon: "fas fa-briefcase-medical" },
            { id: 11, name: 'mood', icon: "far fa-heart" },
            { id: 12, name: 'period', icon: "fas fa-venus" }
        ];
        this.customtrackers = this.trackers;
        if (!this.auth.userId) {
            this.presentAlert('Please login first.');
        }
        this.storage.get('panels').then(function (panels) {
            if (panels) {
                _this.panels = panels;
            }
            console.log(_this.panels);
            _this.customtrackers = [];
            var keys = Object.keys(_this.panels);
            var values = new Array;
            keys.forEach(function (key) {
                values.push(_this.panels[key]);
            });
            var _loop_1 = function (i) {
                if (values[i] == true) {
                    _this.trackers.forEach(function (tracker) {
                        if (tracker.name == keys[i]) {
                            _this.customtrackers.push(tracker);
                        }
                    });
                }
            };
            for (var i = 0; i < keys.length; i++) {
                _loop_1(i);
            }
        });
    }
    TrackersPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TrackersPage');
    };
    TrackersPage.prototype.selectTracker = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__tracker_detail_tracker_detail__["a" /* TrackerDetailPage */], {
            'id': id,
            'title': this.trackers[id - 1].name
        });
        // this.navCtrl.push(this.customtrackers[index].component);
    };
    TrackersPage.prototype.presentPopover = function (ev) {
        var _this = this;
        var popover = this.popoverCtrl.create(PanelPage, this.panels);
        popover.present({
            ev: ev
        });
        popover.onDidDismiss(function (panels) {
            if (panels != null) {
                _this.panels = panels;
                _this.customtrackers = [];
                var keys_1 = Object.keys(_this.panels);
                var values_1 = new Array;
                keys_1.forEach(function (key) {
                    values_1.push(_this.panels[key]);
                });
                console.log(keys_1);
                console.log(values_1);
                var _loop_2 = function (i) {
                    if (values_1[i] == true) {
                        _this.trackers.forEach(function (tracker) {
                            if (tracker.name == keys_1[i]) {
                                _this.customtrackers.push(tracker);
                            }
                        });
                        console.log(_this.customtrackers);
                    }
                };
                for (var i = 0; i < keys_1.length; i++) {
                    _loop_2(i);
                }
                // for (let i = 0; i < keys.length; i++) {
                //   if (this.customtrackers[i].name == keys[i]) {
                //   }
                // }
            }
        });
    };
    TrackersPage.prototype.presentAlert = function (msg) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Oops!',
            message: msg,
            enableBackdropDismiss: false,
            buttons: [
                {
                    text: 'Ok',
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__welcome_welcome__["a" /* WelcomePage */]);
                    }
                }
            ]
        });
        alert.present();
    };
    TrackersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-trackers',template:/*ion-inline-start:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/trackers/trackers.html"*/'<!--\n  Generated template for the TrackersPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>TRACKERS</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="presentPopover($event)">\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-6 *ngFor="let t of customtrackers">\n        <ion-card color="primary" (click)="selectTracker(t.id)">\n          <ion-item class="item-size" color="primary">\n            <i class="{{t.icon}}"></i>\n            <p text-wrap>{{t.name | uppercase}}</p>\n          </ion-item>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/trackers/trackers.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["PopoverController"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_5__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], TrackersPage);
    return TrackersPage;
}());

var PanelPage = (function () {
    function PanelPage(navParams, viewCtrl, fb, storage, modalCtrl) {
        var _this = this;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.fb = fb;
        this.storage = storage;
        this.modalCtrl = modalCtrl;
        this.formgrouparray = [];
        this.panels = this.navParams.data;
        console.log(this.panels);
        this.formgroupvalue = {
            "food": this.panels["food"],
            "drink": this.panels["drink"],
            "weight": this.panels["weight"],
            "height": this.panels["height"],
            "sleep": this.panels["sleep"],
            "exercise": this.panels["exercise"],
            "blood pressure": this.panels["blood pressure"],
            "blood sugar": this.panels["blood sugar"],
            "pain": this.panels["pain"],
            "health log": this.panels["health log"],
            "mood": this.panels["mood"],
            "period": this.panels["period"]
        };
        this.custompanel = this.fb.group(this.formgroupvalue);
        // let keys1 = Object.keys(this.formgroupvalue);
        this.storage.get('mytracker').then(function (mytracker) {
            if (mytracker != null) {
                _this.formgroupvalue[mytracker.name] = true;
                console.log(_this.formgroupvalue);
            }
            var keys = Object.keys(_this.formgroupvalue);
            var values = new Array;
            keys.forEach(function (key) {
                values.push(_this.formgroupvalue[key]);
            });
            for (var i = 0; i < keys.length; i++) {
                _this.formgrouparray.push({
                    name: keys[i],
                    check: values[i]
                });
            }
            console.log(_this.formgroupvalue);
            _this.custompanel = _this.fb.group(_this.formgroupvalue);
        });
    }
    PanelPage.prototype.onSubmit = function () {
        this.panels = this.custompanel.value;
        this.storage.set('panels', this.panels);
        console.log(this.panels);
        this.viewCtrl.dismiss(this.panels);
    };
    PanelPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            template: "\n  <form [formGroup]='custompanel' (ngSubmit)=\"onSubmit()\">\n    <ion-list no-lines>\n      <ion-list-header>Custom Panel</ion-list-header>\n      <ion-item *ngFor=\"let f of formgrouparray\">\n        <ion-label>{{f.name | titlecase}}</ion-label>\n        <ion-checkbox formControlName=\"{{f.name}}\"></ion-checkbox>\n      </ion-item>\n      <button ion-button clear type=\"submit\">OK</button>\n      <!-- <button ion-button clear (click)=\"createTracker()\">Create My Tracker</button> -->\n    </ion-list>\n  </form>\n  "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["ViewController"],
            __WEBPACK_IMPORTED_MODULE_0__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["ModalController"]])
    ], PanelPage);
    return PanelPage;
}());

//# sourceMappingURL=trackers.js.map

/***/ }),

/***/ 182:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 182;

/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__question_option_question_option__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_dynamic_form_types_question_textbox__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_dynamic_form_types_question_datetime__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_dynamic_form_types_question_dropdown__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_dynamic_form_types_question_textarea__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_dynamic_form_types_question_toggle__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_dynamic_form_types_question_range__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_dynamic_form_types_question_complex__ = __webpack_require__(468);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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










/*
  Generated class for the QuestionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var QuestionProvider = (function () {
    function QuestionProvider(qop) {
        this.qop = qop;
    }
    QuestionProvider.prototype.getTrackersQuestions = function (id) {
        var questions;
        if (id == 1) {
            questions = [
                new __WEBPACK_IMPORTED_MODULE_3__components_dynamic_form_types_question_textbox__["a" /* TextboxQuestion */]({
                    key: 'food',
                    label: 'Food',
                    type: 'text',
                    value: '',
                    required: true,
                    order: 1
                }),
                new __WEBPACK_IMPORTED_MODULE_3__components_dynamic_form_types_question_textbox__["a" /* TextboxQuestion */]({
                    key: 'amount',
                    label: 'Amount',
                    type: 'text',
                    value: '',
                    required: true,
                    order: 2
                }),
                new __WEBPACK_IMPORTED_MODULE_3__components_dynamic_form_types_question_textbox__["a" /* TextboxQuestion */]({
                    key: 'calories',
                    label: 'Calories',
                    type: 'number',
                    value: '',
                    required: false,
                    order: 3
                }),
                new __WEBPACK_IMPORTED_MODULE_5__components_dynamic_form_types_question_dropdown__["a" /* DropdownQuestion */]({
                    key: 'timeperiod',
                    label: 'Time Period',
                    value: 'breakfast',
                    multiple: false,
                    options: [
                        { key: 'breakfast', value: 'Breakfast' },
                        { key: 'lunch', value: 'Lunch' },
                        { key: 'dinner', value: 'Dinner' },
                        { key: 'snack', value: 'Snack' }
                    ],
                    required: true,
                    order: 4
                }),
                new __WEBPACK_IMPORTED_MODULE_4__components_dynamic_form_types_question_datetime__["a" /* DatetimeQuestion */]({
                    key: 'datetime',
                    label: 'Date',
                    display: 'MMM DD, YYYY HH:mm',
                    value: __WEBPACK_IMPORTED_MODULE_1_moment__().format(),
                    required: true,
                    order: 5
                }),
                new __WEBPACK_IMPORTED_MODULE_6__components_dynamic_form_types_question_textarea__["a" /* TextareaQuestion */]({
                    key: 'note',
                    label: 'Notes',
                    rows: 3,
                    required: false,
                    order: 6
                }),
            ];
        }
        else if (id == 2) {
            questions = [
                new __WEBPACK_IMPORTED_MODULE_3__components_dynamic_form_types_question_textbox__["a" /* TextboxQuestion */]({
                    key: 'drink',
                    label: 'Drink',
                    type: 'text',
                    value: '',
                    required: true,
                    order: 1
                }),
                new __WEBPACK_IMPORTED_MODULE_3__components_dynamic_form_types_question_textbox__["a" /* TextboxQuestion */]({
                    key: 'amount',
                    label: 'Amount',
                    type: 'text',
                    value: '',
                    required: true,
                    order: 2
                }),
                new __WEBPACK_IMPORTED_MODULE_3__components_dynamic_form_types_question_textbox__["a" /* TextboxQuestion */]({
                    key: 'unit',
                    label: 'Unit',
                    type: 'text',
                    value: '',
                    required: true,
                    order: 3
                }),
                new __WEBPACK_IMPORTED_MODULE_4__components_dynamic_form_types_question_datetime__["a" /* DatetimeQuestion */]({
                    key: 'datetime',
                    label: 'Date',
                    display: 'MMM DD, YYYY HH:mm',
                    value: __WEBPACK_IMPORTED_MODULE_1_moment__().format(),
                    required: true,
                    order: 4
                }),
                new __WEBPACK_IMPORTED_MODULE_6__components_dynamic_form_types_question_textarea__["a" /* TextareaQuestion */]({
                    key: 'note',
                    label: 'Notes',
                    rows: 3,
                    required: false,
                    order: 5
                }),
            ];
        }
        else if (id == 3) {
            questions = [
                new __WEBPACK_IMPORTED_MODULE_3__components_dynamic_form_types_question_textbox__["a" /* TextboxQuestion */]({
                    key: 'weight',
                    label: 'Weight',
                    type: 'number',
                    unit: 'lb',
                    value: '',
                    required: true,
                    order: 1
                }),
                new __WEBPACK_IMPORTED_MODULE_4__components_dynamic_form_types_question_datetime__["a" /* DatetimeQuestion */]({
                    key: 'date',
                    label: 'Date',
                    display: 'MM/DD/YYYY',
                    value: __WEBPACK_IMPORTED_MODULE_1_moment__().format(),
                    required: true,
                    order: 2
                }),
                new __WEBPACK_IMPORTED_MODULE_6__components_dynamic_form_types_question_textarea__["a" /* TextareaQuestion */]({
                    key: 'note',
                    label: 'Notes',
                    rows: 3,
                    required: false,
                    order: 3
                }),
            ];
        }
        else if (id == 4) {
            questions = [
                new __WEBPACK_IMPORTED_MODULE_3__components_dynamic_form_types_question_textbox__["a" /* TextboxQuestion */]({
                    key: 'height',
                    label: 'Height',
                    type: 'text',
                    value: '',
                    required: true,
                    order: 1
                }),
                new __WEBPACK_IMPORTED_MODULE_4__components_dynamic_form_types_question_datetime__["a" /* DatetimeQuestion */]({
                    key: 'date',
                    label: 'Date',
                    display: 'MM/DD/YYYY',
                    value: __WEBPACK_IMPORTED_MODULE_1_moment__().format(),
                    required: true,
                    order: 2
                }),
                new __WEBPACK_IMPORTED_MODULE_6__components_dynamic_form_types_question_textarea__["a" /* TextareaQuestion */]({
                    key: 'note',
                    label: 'Notes',
                    rows: 3,
                    required: false,
                    order: 3
                }),
            ];
        }
        else if (id == 5) {
            questions = [
                new __WEBPACK_IMPORTED_MODULE_4__components_dynamic_form_types_question_datetime__["a" /* DatetimeQuestion */]({
                    key: 'bedtime',
                    label: 'Bedtime',
                    display: 'MMM DD, YYYY HH:mm',
                    value: '',
                    required: true,
                    order: 1
                }),
                new __WEBPACK_IMPORTED_MODULE_4__components_dynamic_form_types_question_datetime__["a" /* DatetimeQuestion */]({
                    key: 'wakeuptime',
                    label: 'Wake-up time',
                    display: 'MMM DD, YYYY HH:mm',
                    value: '',
                    required: true,
                    order: 2
                }),
                new __WEBPACK_IMPORTED_MODULE_6__components_dynamic_form_types_question_textarea__["a" /* TextareaQuestion */]({
                    key: 'note',
                    label: 'Notes',
                    rows: 3,
                    required: false,
                    order: 3
                }),
            ];
        }
        else if (id == 6) {
            questions = [
                new __WEBPACK_IMPORTED_MODULE_3__components_dynamic_form_types_question_textbox__["a" /* TextboxQuestion */]({
                    key: 'exercise',
                    label: 'Exercise',
                    type: 'text',
                    value: '',
                    required: true,
                    order: 1
                }),
                new __WEBPACK_IMPORTED_MODULE_3__components_dynamic_form_types_question_textbox__["a" /* TextboxQuestion */]({
                    key: 'duration',
                    label: 'Duration',
                    type: 'text',
                    value: '',
                    required: true,
                    order: 2
                }),
                new __WEBPACK_IMPORTED_MODULE_4__components_dynamic_form_types_question_datetime__["a" /* DatetimeQuestion */]({
                    key: 'datetime',
                    label: 'Date',
                    display: 'MMM DD, YYYY HH:mm',
                    value: __WEBPACK_IMPORTED_MODULE_1_moment__().format(),
                    required: true,
                    order: 3
                }),
                new __WEBPACK_IMPORTED_MODULE_6__components_dynamic_form_types_question_textarea__["a" /* TextareaQuestion */]({
                    key: 'note',
                    label: 'Notes',
                    rows: 3,
                    required: false,
                    order: 4
                }),
            ];
        }
        else if (id == 7) {
            questions = [
                new __WEBPACK_IMPORTED_MODULE_3__components_dynamic_form_types_question_textbox__["a" /* TextboxQuestion */]({
                    key: 'SBP',
                    label: 'Systolic pressure (SBP)',
                    type: 'number',
                    unit: 'mm Hg',
                    value: '',
                    required: true,
                    order: 1
                }),
                new __WEBPACK_IMPORTED_MODULE_3__components_dynamic_form_types_question_textbox__["a" /* TextboxQuestion */]({
                    key: 'DBP',
                    label: 'Diastolic pressure (DBP)',
                    type: 'number',
                    unit: 'mm Hg',
                    value: '',
                    required: true,
                    order: 2
                }),
                new __WEBPACK_IMPORTED_MODULE_4__components_dynamic_form_types_question_datetime__["a" /* DatetimeQuestion */]({
                    key: 'date',
                    label: 'Date',
                    display: 'MM/DD/YYYY',
                    value: __WEBPACK_IMPORTED_MODULE_1_moment__().format(),
                    required: true,
                    order: 3
                }),
                new __WEBPACK_IMPORTED_MODULE_6__components_dynamic_form_types_question_textarea__["a" /* TextareaQuestion */]({
                    key: 'note',
                    label: 'Notes',
                    rows: 3,
                    required: false,
                    order: 4
                }),
            ];
        }
        else if (id == 8) {
            questions = [
                new __WEBPACK_IMPORTED_MODULE_3__components_dynamic_form_types_question_textbox__["a" /* TextboxQuestion */]({
                    key: 'bloodsugar',
                    label: 'Blood sugar',
                    type: 'number',
                    unit: 'mg/dl',
                    value: '',
                    required: true,
                    order: 1
                }),
                new __WEBPACK_IMPORTED_MODULE_4__components_dynamic_form_types_question_datetime__["a" /* DatetimeQuestion */]({
                    key: 'date',
                    label: 'Date',
                    display: 'MM/DD/YYYY',
                    value: __WEBPACK_IMPORTED_MODULE_1_moment__().format(),
                    required: true,
                    order: 2
                }),
                new __WEBPACK_IMPORTED_MODULE_6__components_dynamic_form_types_question_textarea__["a" /* TextareaQuestion */]({
                    key: 'note',
                    label: 'Notes',
                    rows: 3,
                    required: false,
                    order: 3
                }),
            ];
        }
        else if (id == 9) {
            questions = [
                new __WEBPACK_IMPORTED_MODULE_8__components_dynamic_form_types_question_range__["a" /* RangeQuestion */]({
                    key: 'pain',
                    label: 'Pain level',
                    min: 0,
                    max: 10,
                    step: 1,
                    snaps: true,
                    pin: true,
                    color: 'primary',
                    iconleft: 'sad',
                    iconright: 'happy',
                    required: true,
                    order: 1
                }),
                new __WEBPACK_IMPORTED_MODULE_4__components_dynamic_form_types_question_datetime__["a" /* DatetimeQuestion */]({
                    key: 'date',
                    label: 'Date',
                    display: 'MM/DD/YYYY',
                    value: __WEBPACK_IMPORTED_MODULE_1_moment__().format(),
                    required: true,
                    order: 2
                }),
                new __WEBPACK_IMPORTED_MODULE_6__components_dynamic_form_types_question_textarea__["a" /* TextareaQuestion */]({
                    key: 'note',
                    label: 'Notes',
                    rows: 3,
                    required: false,
                    order: 3
                }),
            ];
        }
        else if (id == 10) {
            questions = [
                new __WEBPACK_IMPORTED_MODULE_4__components_dynamic_form_types_question_datetime__["a" /* DatetimeQuestion */]({
                    key: 'datetime',
                    label: 'Date',
                    display: 'MMM DD, YYYY HH:mm',
                    value: __WEBPACK_IMPORTED_MODULE_1_moment__().format(),
                    required: true,
                    order: 1
                }),
                new __WEBPACK_IMPORTED_MODULE_6__components_dynamic_form_types_question_textarea__["a" /* TextareaQuestion */]({
                    key: 'note',
                    label: 'Notes',
                    rows: 5,
                    required: true,
                    order: 2
                }),
            ];
        }
        else if (id == 11) {
            questions = [
                new __WEBPACK_IMPORTED_MODULE_5__components_dynamic_form_types_question_dropdown__["a" /* DropdownQuestion */]({
                    key: 'mood',
                    label: 'Mood',
                    value: '',
                    multiple: false,
                    options: [
                        { key: "1 - Everything's OK. I'm maintaining.", value: "1 - Everything's OK. I'm maintaining." },
                        { key: "2 - I've had a rough day.", value: "2 - I've had a rough day." },
                        { key: "3 - Significant life event/stress. It may take longer time to cope.", value: "3 - Significant life event/stress. It may take longer time to cope." },
                        { key: "4 - I've been down for a while and I don't exactly know why.", value: "4 - I've been down for a while and I don't exactly know why." },
                        { key: "5 - I'm not doing well and I'd like someone to keep an eye on me/check-in regularly.", value: "5 - I'm not doing well and I'd like someone to keep an eye on me/check-in regularly." },
                        { key: "6 - I'm in crisis. Please call or come over right away.", value: "6 - I'm in crisis. Please call or come over right away." },
                        { key: "7 - Call 911. I may hurt myself or others. Do NOT wait.", value: "7 - Call 911. I may hurt myself or others. Do NOT wait." }
                    ],
                    required: true,
                    order: 1
                }),
                new __WEBPACK_IMPORTED_MODULE_4__components_dynamic_form_types_question_datetime__["a" /* DatetimeQuestion */]({
                    key: 'date',
                    label: 'Date',
                    display: 'MM/DD/YYYY',
                    value: __WEBPACK_IMPORTED_MODULE_1_moment__().format(),
                    required: true,
                    order: 2
                }),
                new __WEBPACK_IMPORTED_MODULE_6__components_dynamic_form_types_question_textarea__["a" /* TextareaQuestion */]({
                    key: 'note',
                    label: 'Notes',
                    rows: 3,
                    required: false,
                    order: 3
                }),
            ];
        }
        else if (id == 12) {
            questions = [
                new __WEBPACK_IMPORTED_MODULE_4__components_dynamic_form_types_question_datetime__["a" /* DatetimeQuestion */]({
                    key: 'begindate',
                    label: 'Begin date',
                    display: 'MM/DD/YYYY',
                    value: '',
                    required: true,
                    order: 1
                }),
                new __WEBPACK_IMPORTED_MODULE_4__components_dynamic_form_types_question_datetime__["a" /* DatetimeQuestion */]({
                    key: 'enddate',
                    label: 'End date',
                    display: 'MM/DD/YYYY',
                    value: '',
                    required: true,
                    order: 2
                }),
                new __WEBPACK_IMPORTED_MODULE_6__components_dynamic_form_types_question_textarea__["a" /* TextareaQuestion */]({
                    key: 'note',
                    label: 'Notes',
                    rows: 3,
                    required: false,
                    order: 3
                }),
            ];
        }
        return questions.sort(function (a, b) { return a.order - b.order; });
    };
    QuestionProvider.prototype.getAllergyQuestions = function () {
        var questions = [
            new __WEBPACK_IMPORTED_MODULE_3__components_dynamic_form_types_question_textbox__["a" /* TextboxQuestion */]({
                key: 'trigger',
                label: 'Trigger',
                type: 'text',
                value: '',
                required: false,
                order: 2
            }),
            new __WEBPACK_IMPORTED_MODULE_3__components_dynamic_form_types_question_textbox__["a" /* TextboxQuestion */]({
                key: 'symptom',
                label: 'Symptom',
                type: 'text',
                value: '',
                required: true,
                order: 1
            }),
            new __WEBPACK_IMPORTED_MODULE_7__components_dynamic_form_types_question_toggle__["a" /* ToggleQuestion */]({
                key: 'threatening',
                label: 'Life Threatening',
                value: false,
                required: true,
                order: 3
            }),
            new __WEBPACK_IMPORTED_MODULE_4__components_dynamic_form_types_question_datetime__["a" /* DatetimeQuestion */]({
                key: 'date',
                label: 'Onset Date',
                display: 'MM/DD/YYYY',
                value: __WEBPACK_IMPORTED_MODULE_1_moment__().format(),
                required: true,
                order: 4
            }),
        ];
        return questions.sort(function (a, b) { return a.order - b.order; });
    };
    QuestionProvider.prototype.getFamilyHistoryQuestions = function () {
        var questions = [
            new __WEBPACK_IMPORTED_MODULE_3__components_dynamic_form_types_question_textbox__["a" /* TextboxQuestion */]({
                key: 'relationship',
                label: 'Relationship',
                type: 'text',
                value: '',
                required: true,
                order: 1
            }),
            new __WEBPACK_IMPORTED_MODULE_3__components_dynamic_form_types_question_textbox__["a" /* TextboxQuestion */]({
                key: 'name',
                label: 'Name',
                type: 'text',
                value: '',
                required: false,
                order: 2
            }),
            new __WEBPACK_IMPORTED_MODULE_7__components_dynamic_form_types_question_toggle__["a" /* ToggleQuestion */]({
                key: 'alive',
                label: 'Alive',
                value: true,
                order: 3
            }),
            new __WEBPACK_IMPORTED_MODULE_3__components_dynamic_form_types_question_textbox__["a" /* TextboxQuestion */]({
                key: 'disease',
                label: 'Disease',
                type: 'text',
                value: '',
                required: true,
                order: 4
            }),
            new __WEBPACK_IMPORTED_MODULE_4__components_dynamic_form_types_question_datetime__["a" /* DatetimeQuestion */]({
                key: 'date',
                label: 'Onset Date',
                display: 'MM/DD/YYYY',
                value: __WEBPACK_IMPORTED_MODULE_1_moment__().format(),
                required: true,
                order: 5
            }),
        ];
        return questions.sort(function (a, b) { return a.order - b.order; });
    };
    QuestionProvider.prototype.getMedicalHistoryQuestions = function () {
        var questions = [
            new __WEBPACK_IMPORTED_MODULE_3__components_dynamic_form_types_question_textbox__["a" /* TextboxQuestion */]({
                key: 'diagnosis',
                label: 'Diagnosis',
                type: 'text',
                value: '',
                required: true,
                order: 1
            }),
            new __WEBPACK_IMPORTED_MODULE_4__components_dynamic_form_types_question_datetime__["a" /* DatetimeQuestion */]({
                key: 'date',
                label: 'Onset Date',
                display: 'MM/DD/YYYY',
                value: __WEBPACK_IMPORTED_MODULE_1_moment__().format(),
                required: true,
                order: 2
            }),
        ];
        return questions.sort(function (a, b) { return a.order - b.order; });
    };
    QuestionProvider.prototype.getSurgicalHistoryQuestions = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var option, questions;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.qop.getDoctorOption(id)];
                    case 1:
                        option = _a.sent();
                        if (option.length != 0) {
                            questions = [
                                new __WEBPACK_IMPORTED_MODULE_3__components_dynamic_form_types_question_textbox__["a" /* TextboxQuestion */]({
                                    key: 'surgery',
                                    label: 'Surgery',
                                    type: 'text',
                                    value: '',
                                    required: true,
                                    order: 1
                                }),
                                new __WEBPACK_IMPORTED_MODULE_5__components_dynamic_form_types_question_dropdown__["a" /* DropdownQuestion */]({
                                    key: 'doctor',
                                    label: 'Doctor',
                                    value: '',
                                    multiple: false,
                                    options: option,
                                    required: true,
                                    order: 2
                                }),
                                new __WEBPACK_IMPORTED_MODULE_4__components_dynamic_form_types_question_datetime__["a" /* DatetimeQuestion */]({
                                    key: 'date',
                                    label: 'Onset Date',
                                    display: 'MM/DD/YYYY',
                                    value: __WEBPACK_IMPORTED_MODULE_1_moment__().format(),
                                    required: true,
                                    order: 3
                                }),
                            ];
                        }
                        else {
                            questions = [
                                new __WEBPACK_IMPORTED_MODULE_3__components_dynamic_form_types_question_textbox__["a" /* TextboxQuestion */]({
                                    key: 'surgery',
                                    label: 'Surgery',
                                    type: 'text',
                                    value: '',
                                    required: true,
                                    order: 1
                                }),
                                new __WEBPACK_IMPORTED_MODULE_6__components_dynamic_form_types_question_textarea__["a" /* TextareaQuestion */]({
                                    key: 'doctor',
                                    label: 'Doctor',
                                    readonly: true,
                                    placeholder: 'Doctor contact not found.',
                                    rows: 1,
                                    required: true,
                                    order: 2
                                }),
                                new __WEBPACK_IMPORTED_MODULE_4__components_dynamic_form_types_question_datetime__["a" /* DatetimeQuestion */]({
                                    key: 'date',
                                    label: 'Onset Date',
                                    display: 'MM/DD/YYYY',
                                    value: __WEBPACK_IMPORTED_MODULE_1_moment__().format(),
                                    required: true,
                                    order: 3
                                }),
                            ];
                        }
                        return [2 /*return*/, questions.sort(function (a, b) { return a.order - b.order; })];
                }
            });
        });
    };
    QuestionProvider.prototype.getImmunizationQuestions = function (vaccine) {
        var questions = [
            new __WEBPACK_IMPORTED_MODULE_3__components_dynamic_form_types_question_textbox__["a" /* TextboxQuestion */]({
                key: 'vaccine',
                label: 'Vaccine',
                type: 'text',
                value: vaccine,
                required: true,
                order: 1
            }),
            new __WEBPACK_IMPORTED_MODULE_9__components_dynamic_form_types_question_complex__["a" /* ComplexQuestion */]({
                selectkey: 'recordtype',
                selectlabel: 'Record option',
                selectvalue: 'age',
                selectrequired: true,
                multiple: false,
                options: [
                    { key: 'age', value: 'Age' },
                    { key: 'scheduledate', value: 'Date' }
                ],
                inputkey: 'age',
                inputlabel: 'Age',
                inputvalue: '',
                inputrequired: true,
                type: 'number',
                datetimekey: 'scheduledate',
                datetimelabel: 'Schedule date',
                datetimevalue: '',
                datetimerequired: true,
                display: 'MMM YYYY',
                required: true,
                order: 2
            }),
            new __WEBPACK_IMPORTED_MODULE_6__components_dynamic_form_types_question_textarea__["a" /* TextareaQuestion */]({
                key: 'note',
                label: 'Notes',
                rows: 3,
                required: false,
                order: 3
            }),
        ];
        return questions.sort(function (a, b) { return a.order - b.order; });
    };
    QuestionProvider.prototype.getDoctorVisitNotesQuestions = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var option, questions;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.qop.getDoctorOption(id)];
                    case 1:
                        option = _a.sent();
                        if (option.length != 0) {
                            questions = [
                                new __WEBPACK_IMPORTED_MODULE_3__components_dynamic_form_types_question_textbox__["a" /* TextboxQuestion */]({
                                    key: 'diagnosis',
                                    label: 'Diagnosis',
                                    type: 'text',
                                    value: '',
                                    required: true,
                                    order: 1
                                }),
                                new __WEBPACK_IMPORTED_MODULE_5__components_dynamic_form_types_question_dropdown__["a" /* DropdownQuestion */]({
                                    key: 'doctor',
                                    label: 'Doctor',
                                    value: '',
                                    multiple: false,
                                    options: option,
                                    required: true,
                                    order: 2
                                }),
                                new __WEBPACK_IMPORTED_MODULE_3__components_dynamic_form_types_question_textbox__["a" /* TextboxQuestion */]({
                                    key: 'prescription',
                                    label: 'Prescription',
                                    type: 'text',
                                    value: '',
                                    required: true,
                                    order: 3
                                }),
                                new __WEBPACK_IMPORTED_MODULE_4__components_dynamic_form_types_question_datetime__["a" /* DatetimeQuestion */]({
                                    key: 'date',
                                    label: 'Date',
                                    display: 'MM/DD/YYYY',
                                    value: __WEBPACK_IMPORTED_MODULE_1_moment__().format(),
                                    required: true,
                                    order: 4
                                }),
                                new __WEBPACK_IMPORTED_MODULE_6__components_dynamic_form_types_question_textarea__["a" /* TextareaQuestion */]({
                                    key: 'reason',
                                    label: 'Reason of Visit',
                                    value: '',
                                    rows: 7,
                                    required: false,
                                    order: 5
                                }),
                            ];
                        }
                        else {
                            questions = [
                                new __WEBPACK_IMPORTED_MODULE_3__components_dynamic_form_types_question_textbox__["a" /* TextboxQuestion */]({
                                    key: 'diagnosis',
                                    label: 'Diagnosis',
                                    type: 'text',
                                    value: '',
                                    required: true,
                                    order: 1
                                }),
                                new __WEBPACK_IMPORTED_MODULE_6__components_dynamic_form_types_question_textarea__["a" /* TextareaQuestion */]({
                                    key: 'doctor',
                                    label: 'Doctor',
                                    readonly: true,
                                    placeholder: 'Doctor contact not found.',
                                    rows: 1,
                                    required: true,
                                    order: 2
                                }),
                                new __WEBPACK_IMPORTED_MODULE_3__components_dynamic_form_types_question_textbox__["a" /* TextboxQuestion */]({
                                    key: 'prescription',
                                    label: 'Prescription',
                                    type: 'text',
                                    value: '',
                                    required: true,
                                    order: 3
                                }),
                                new __WEBPACK_IMPORTED_MODULE_4__components_dynamic_form_types_question_datetime__["a" /* DatetimeQuestion */]({
                                    key: 'date',
                                    label: 'Date',
                                    display: 'MM/DD/YYYY',
                                    value: __WEBPACK_IMPORTED_MODULE_1_moment__().format(),
                                    required: true,
                                    order: 4
                                }),
                                new __WEBPACK_IMPORTED_MODULE_6__components_dynamic_form_types_question_textarea__["a" /* TextareaQuestion */]({
                                    key: 'reason',
                                    label: 'Reason of Visit',
                                    value: '',
                                    rows: 7,
                                    required: false,
                                    order: 5
                                }),
                            ];
                        }
                        return [2 /*return*/, questions.sort(function (a, b) { return a.order - b.order; })];
                }
            });
        });
    };
    QuestionProvider.prototype.getSocialHistoryQuestions = function (id) {
        if (id == 1) {
            var questions = [
                new __WEBPACK_IMPORTED_MODULE_3__components_dynamic_form_types_question_textbox__["a" /* TextboxQuestion */]({
                    key: 'amount',
                    label: 'Amount',
                    type: 'number',
                    value: '',
                    required: true,
                    order: 1
                }),
                new __WEBPACK_IMPORTED_MODULE_4__components_dynamic_form_types_question_datetime__["a" /* DatetimeQuestion */]({
                    key: 'date',
                    label: 'Date',
                    display: 'MM/DD/YYYY',
                    value: __WEBPACK_IMPORTED_MODULE_1_moment__().format(),
                    required: true,
                    order: 2
                }),
            ];
            return questions.sort(function (a, b) { return a.order - b.order; });
        }
        else if (id == 2) {
            var questions = [
                new __WEBPACK_IMPORTED_MODULE_3__components_dynamic_form_types_question_textbox__["a" /* TextboxQuestion */]({
                    key: 'name',
                    label: 'Name',
                    type: 'text',
                    value: '',
                    required: true,
                    order: 1
                }),
                new __WEBPACK_IMPORTED_MODULE_3__components_dynamic_form_types_question_textbox__["a" /* TextboxQuestion */]({
                    key: 'amount',
                    label: 'Amount(oz)',
                    type: 'number',
                    value: '',
                    required: true,
                    order: 2
                }),
                new __WEBPACK_IMPORTED_MODULE_3__components_dynamic_form_types_question_textbox__["a" /* TextboxQuestion */]({
                    key: 'alcohol',
                    label: 'Alcohol(%)',
                    type: 'number',
                    value: '',
                    required: true,
                    order: 3
                }),
                new __WEBPACK_IMPORTED_MODULE_4__components_dynamic_form_types_question_datetime__["a" /* DatetimeQuestion */]({
                    key: 'date',
                    label: 'Date',
                    display: 'MM/DD/YYYY',
                    value: __WEBPACK_IMPORTED_MODULE_1_moment__().format(),
                    required: true,
                    order: 4
                }),
            ];
            return questions.sort(function (a, b) { return a.order - b.order; });
        }
        else if (id == 3) {
            var questions = [
                new __WEBPACK_IMPORTED_MODULE_3__components_dynamic_form_types_question_textbox__["a" /* TextboxQuestion */]({
                    key: 'name',
                    label: 'Name',
                    type: 'text',
                    value: '',
                    required: true,
                    order: 1
                }),
                new __WEBPACK_IMPORTED_MODULE_3__components_dynamic_form_types_question_textbox__["a" /* TextboxQuestion */]({
                    key: 'amount',
                    label: 'Amount',
                    type: 'number',
                    value: '',
                    required: true,
                    order: 2
                }),
                new __WEBPACK_IMPORTED_MODULE_4__components_dynamic_form_types_question_datetime__["a" /* DatetimeQuestion */]({
                    key: 'date',
                    label: 'Date',
                    display: 'MM/DD/YYYY',
                    value: __WEBPACK_IMPORTED_MODULE_1_moment__().format(),
                    required: true,
                    order: 3
                }),
                new __WEBPACK_IMPORTED_MODULE_6__components_dynamic_form_types_question_textarea__["a" /* TextareaQuestion */]({
                    key: 'note',
                    label: 'Notes',
                    value: '',
                    rows: 3,
                    required: false,
                    order: 4
                }),
            ];
            return questions.sort(function (a, b) { return a.order - b.order; });
        }
        else if (id == 4) {
            var questions = [
                new __WEBPACK_IMPORTED_MODULE_3__components_dynamic_form_types_question_textbox__["a" /* TextboxQuestion */]({
                    key: 'location',
                    label: 'Location',
                    type: 'text',
                    value: '',
                    required: true,
                    order: 1
                }),
                new __WEBPACK_IMPORTED_MODULE_6__components_dynamic_form_types_question_textarea__["a" /* TextareaQuestion */]({
                    key: 'note',
                    label: 'Notes',
                    value: '',
                    rows: 5,
                    required: false,
                    order: 3
                }),
                new __WEBPACK_IMPORTED_MODULE_4__components_dynamic_form_types_question_datetime__["a" /* DatetimeQuestion */]({
                    key: 'date',
                    label: 'Date',
                    display: 'MM/DD/YYYY',
                    value: __WEBPACK_IMPORTED_MODULE_1_moment__().format(),
                    required: true,
                    order: 2
                }),
            ];
            return questions.sort(function (a, b) { return a.order - b.order; });
        }
        else if (id == 5) {
            var questions = [
                new __WEBPACK_IMPORTED_MODULE_3__components_dynamic_form_types_question_textbox__["a" /* TextboxQuestion */]({
                    key: 'type',
                    label: 'Type',
                    type: 'text',
                    value: '',
                    required: true,
                    order: 1
                }),
                new __WEBPACK_IMPORTED_MODULE_4__components_dynamic_form_types_question_datetime__["a" /* DatetimeQuestion */]({
                    key: 'moveindate',
                    label: 'Move in',
                    display: 'MM/DD/YYYY',
                    value: __WEBPACK_IMPORTED_MODULE_1_moment__().format(),
                    required: true,
                    order: 2
                }),
                new __WEBPACK_IMPORTED_MODULE_4__components_dynamic_form_types_question_datetime__["a" /* DatetimeQuestion */]({
                    key: 'moveoutdate',
                    label: 'Move out',
                    display: 'MM/DD/YYYY',
                    value: '',
                    required: false,
                    order: 3
                }),
                new __WEBPACK_IMPORTED_MODULE_6__components_dynamic_form_types_question_textarea__["a" /* TextareaQuestion */]({
                    key: 'note',
                    label: 'Notes',
                    value: '',
                    rows: 3,
                    required: false,
                    order: 4
                }),
            ];
            return questions.sort(function (a, b) { return a.order - b.order; });
        }
    };
    QuestionProvider.prototype.getMedicationQuestions = function () {
        var questions = [
            new __WEBPACK_IMPORTED_MODULE_3__components_dynamic_form_types_question_textbox__["a" /* TextboxQuestion */]({
                key: 'name',
                label: 'Medication Name',
                type: 'text',
                value: '',
                required: true,
                order: 1
            }),
            new __WEBPACK_IMPORTED_MODULE_6__components_dynamic_form_types_question_textarea__["a" /* TextareaQuestion */]({
                key: 'frequency',
                label: 'Frequency',
                value: '',
                rows: 2,
                required: true,
                order: 2
            }),
            new __WEBPACK_IMPORTED_MODULE_4__components_dynamic_form_types_question_datetime__["a" /* DatetimeQuestion */]({
                key: 'date',
                label: 'Date',
                display: 'MM/DD/YYYY',
                value: __WEBPACK_IMPORTED_MODULE_1_moment__().format(),
                required: true,
                order: 3
            }),
        ];
        return questions.sort(function (a, b) { return a.order - b.order; });
    };
    QuestionProvider.prototype.getLabTestQuestions = function (title) {
        var questions = [
            new __WEBPACK_IMPORTED_MODULE_3__components_dynamic_form_types_question_textbox__["a" /* TextboxQuestion */]({
                key: 'subtest',
                label: 'Test Name',
                type: 'text',
                value: title,
                required: true,
                order: 1
            }),
            new __WEBPACK_IMPORTED_MODULE_4__components_dynamic_form_types_question_datetime__["a" /* DatetimeQuestion */]({
                key: 'date',
                label: 'Date',
                display: 'MM/DD/YYYY',
                value: __WEBPACK_IMPORTED_MODULE_1_moment__().format(),
                required: true,
                order: 2
            }),
            new __WEBPACK_IMPORTED_MODULE_3__components_dynamic_form_types_question_textbox__["a" /* TextboxQuestion */]({
                key: 'result',
                label: 'Result',
                type: 'text',
                value: '',
                required: true,
                order: 3
            }),
            new __WEBPACK_IMPORTED_MODULE_3__components_dynamic_form_types_question_textbox__["a" /* TextboxQuestion */]({
                key: 'unit',
                label: 'Unit',
                type: 'text',
                value: '',
                required: false,
                order: 4
            }),
            new __WEBPACK_IMPORTED_MODULE_7__components_dynamic_form_types_question_toggle__["a" /* ToggleQuestion */]({
                key: 'abnormal',
                label: 'Abnormal?',
                value: false,
                order: 5
            }),
            new __WEBPACK_IMPORTED_MODULE_6__components_dynamic_form_types_question_textarea__["a" /* TextareaQuestion */]({
                key: 'note',
                label: 'Notes',
                value: '',
                rows: 4,
                required: false,
                order: 6
            }),
        ];
        return questions.sort(function (a, b) { return a.order - b.order; });
    };
    QuestionProvider.prototype.getDiagnosticProcedureQuestions = function (title, id) {
        var questions;
        if (id == 1 || id == 6 || id == 7 || id == 8) {
            questions = [
                new __WEBPACK_IMPORTED_MODULE_3__components_dynamic_form_types_question_textbox__["a" /* TextboxQuestion */]({
                    key: 'name',
                    label: 'Test Name',
                    type: 'text',
                    value: title,
                    required: true,
                    order: 1
                }),
                new __WEBPACK_IMPORTED_MODULE_3__components_dynamic_form_types_question_textbox__["a" /* TextboxQuestion */]({
                    key: 'result',
                    label: 'Result',
                    type: 'text',
                    value: '',
                    required: true,
                    order: 2
                }),
                new __WEBPACK_IMPORTED_MODULE_4__components_dynamic_form_types_question_datetime__["a" /* DatetimeQuestion */]({
                    key: 'date',
                    label: 'Date',
                    display: 'MM/DD/YYYY',
                    value: __WEBPACK_IMPORTED_MODULE_1_moment__().format(),
                    required: true,
                    order: 3
                }),
                new __WEBPACK_IMPORTED_MODULE_6__components_dynamic_form_types_question_textarea__["a" /* TextareaQuestion */]({
                    key: 'note',
                    label: 'Notes',
                    value: '',
                    rows: 5,
                    required: false,
                    order: 4
                }),
            ];
        }
        else if (id == 2 || id == 5) {
            questions = [
                new __WEBPACK_IMPORTED_MODULE_3__components_dynamic_form_types_question_textbox__["a" /* TextboxQuestion */]({
                    key: 'organ',
                    label: 'Body Part',
                    type: 'text',
                    value: '',
                    required: true,
                    order: 1
                }),
                new __WEBPACK_IMPORTED_MODULE_3__components_dynamic_form_types_question_textbox__["a" /* TextboxQuestion */]({
                    key: 'result',
                    label: 'Result',
                    type: 'text',
                    value: '',
                    required: true,
                    order: 2
                }),
                new __WEBPACK_IMPORTED_MODULE_4__components_dynamic_form_types_question_datetime__["a" /* DatetimeQuestion */]({
                    key: 'date',
                    label: 'Date',
                    display: 'MM/DD/YYYY',
                    value: __WEBPACK_IMPORTED_MODULE_1_moment__().format(),
                    required: true,
                    order: 3
                }),
                new __WEBPACK_IMPORTED_MODULE_6__components_dynamic_form_types_question_textarea__["a" /* TextareaQuestion */]({
                    key: 'note',
                    label: 'Notes',
                    value: '',
                    rows: 5,
                    required: false,
                    order: 4
                }),
            ];
        }
        else if (id == 3 || id == 4) {
            questions = [
                new __WEBPACK_IMPORTED_MODULE_3__components_dynamic_form_types_question_textbox__["a" /* TextboxQuestion */]({
                    key: 'organ',
                    label: 'Body Part',
                    type: 'text',
                    value: '',
                    required: true,
                    order: 1
                }),
                new __WEBPACK_IMPORTED_MODULE_3__components_dynamic_form_types_question_textbox__["a" /* TextboxQuestion */]({
                    key: 'result',
                    label: 'Result',
                    type: 'text',
                    value: '',
                    required: true,
                    order: 2
                }),
                new __WEBPACK_IMPORTED_MODULE_7__components_dynamic_form_types_question_toggle__["a" /* ToggleQuestion */]({
                    key: 'contrast',
                    label: 'With Contrast?',
                    value: false,
                    required: true,
                    order: 3
                }),
                new __WEBPACK_IMPORTED_MODULE_4__components_dynamic_form_types_question_datetime__["a" /* DatetimeQuestion */]({
                    key: 'date',
                    label: 'Date',
                    display: 'MM/DD/YYYY',
                    value: __WEBPACK_IMPORTED_MODULE_1_moment__().format(),
                    required: true,
                    order: 4
                }),
                new __WEBPACK_IMPORTED_MODULE_6__components_dynamic_form_types_question_textarea__["a" /* TextareaQuestion */]({
                    key: 'note',
                    label: 'Notes',
                    value: '',
                    rows: 5,
                    required: false,
                    order: 5
                }),
            ];
        }
        return questions.sort(function (a, b) { return a.order - b.order; });
    };
    QuestionProvider.prototype.getResetPasswordQuestion = function (typeid) {
        var questions;
        if (typeid == 0) {
            var secQues = "What is your first pet's name sadasdadasdassadasdadasdasda ???????";
            questions = [
                new __WEBPACK_IMPORTED_MODULE_3__components_dynamic_form_types_question_textbox__["a" /* TextboxQuestion */]({
                    key: 'email',
                    label: 'Email Address',
                    type: 'email',
                    value: '',
                    required: true,
                    order: 1
                }),
                new __WEBPACK_IMPORTED_MODULE_6__components_dynamic_form_types_question_textarea__["a" /* TextareaQuestion */]({
                    key: 'securityQuestion',
                    label: 'Security Question',
                    type: 'text',
                    value: secQues,
                    rows: 1,
                    readonly: true,
                    order: 2
                }),
                new __WEBPACK_IMPORTED_MODULE_6__components_dynamic_form_types_question_textarea__["a" /* TextareaQuestion */]({
                    key: 'securityAnswer',
                    label: 'Security Answer',
                    type: 'text',
                    value: '',
                    rows: 1,
                    required: true,
                    order: 3
                }),
            ];
            return questions.sort(function (a, b) { return a.order - b.order; });
        }
        else if (typeid == 1) {
            questions = [
                new __WEBPACK_IMPORTED_MODULE_3__components_dynamic_form_types_question_textbox__["a" /* TextboxQuestion */]({
                    key: 'currentPassword',
                    label: 'Current Password',
                    type: 'password',
                    value: '',
                    required: true,
                    order: 1
                }),
                new __WEBPACK_IMPORTED_MODULE_3__components_dynamic_form_types_question_textbox__["a" /* TextboxQuestion */]({
                    key: 'newPassword',
                    label: 'New Password',
                    type: 'password',
                    value: '',
                    required: true,
                    order: 2
                }),
                new __WEBPACK_IMPORTED_MODULE_3__components_dynamic_form_types_question_textbox__["a" /* TextboxQuestion */]({
                    key: 'confirmPassword',
                    label: 'Confirm Password',
                    type: 'password',
                    value: '',
                    required: true,
                    order: 3
                }),
            ];
            return questions.sort(function (a, b) { return a.order - b.order; });
        }
    };
    QuestionProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__question_option_question_option__["a" /* QuestionOptionProvider */]])
    ], QuestionProvider);
    return QuestionProvider;
}());

//# sourceMappingURL=question.js.map

/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionControlProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the QuestionControlProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var QuestionControlProvider = (function () {
    function QuestionControlProvider() {
    }
    QuestionControlProvider.prototype.toFormGroup = function (questions) {
        var group = {};
        questions.forEach(function (question) {
            var val = (question.value == undefined) ? '' : question.value;
            group[question.key] = question.required ? new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["FormControl"](val, __WEBPACK_IMPORTED_MODULE_0__angular_forms__["Validators"].required) : new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["FormControl"](val);
        });
        return new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["FormGroup"](group);
    };
    QuestionControlProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], QuestionControlProvider);
    return QuestionControlProvider;
}());

//# sourceMappingURL=question-control.js.map

/***/ }),

/***/ 223:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/allergy-detail/allergy-detail.module": [
		555,
		42
	],
	"../pages/allergy-history/allergy-history.module": [
		556,
		41
	],
	"../pages/allergy/allergy.module": [
		557,
		40
	],
	"../pages/appointment-add-appointments/appointment-add-appointments.module": [
		558,
		39
	],
	"../pages/appointment/appointment.module": [
		559,
		38
	],
	"../pages/contact-add-contacts/contact-add-contacts.module": [
		560,
		37
	],
	"../pages/contact-detail/contact-detail.module": [
		561,
		36
	],
	"../pages/contact/contact.module": [
		562,
		35
	],
	"../pages/create-tracker/create-tracker.module": [
		563,
		34
	],
	"../pages/customtracker/customtracker.module": [
		564,
		33
	],
	"../pages/dashboard/dashboard.module": [
		565,
		32
	],
	"../pages/diagnostic-procedure-detail/diagnostic-procedure-detail.module": [
		566,
		31
	],
	"../pages/diagnostic-procedure/diagnostic-procedure.module": [
		567,
		30
	],
	"../pages/doctor-visit-notes-detail/doctor-visit-notes-detail.module": [
		568,
		29
	],
	"../pages/doctor-visit-notes/doctor-visit-notes.module": [
		569,
		28
	],
	"../pages/family-history-detail/family-history-detail.module": [
		570,
		27
	],
	"../pages/family-history/family-history.module": [
		571,
		26
	],
	"../pages/foodtracker/foodtracker.module": [
		572,
		0
	],
	"../pages/immunization-detail/immunization-detail.module": [
		573,
		25
	],
	"../pages/immunization-history/immunization-history.module": [
		574,
		24
	],
	"../pages/immunization/immunization.module": [
		575,
		23
	],
	"../pages/lab-test-detail/lab-test-detail.module": [
		576,
		22
	],
	"../pages/lab-test/lab-test.module": [
		577,
		21
	],
	"../pages/login/login.module": [
		578,
		20
	],
	"../pages/medical-history-detail/medical-history-detail.module": [
		579,
		19
	],
	"../pages/medical-history/medical-history.module": [
		580,
		18
	],
	"../pages/medication-detail/medication-detail.module": [
		581,
		17
	],
	"../pages/medication/medication.module": [
		582,
		16
	],
	"../pages/password-edit/password-edit.module": [
		583,
		15
	],
	"../pages/password-reset/password-reset.module": [
		584,
		14
	],
	"../pages/profile-editable/profile-editable.module": [
		585,
		13
	],
	"../pages/profile/profile.module": [
		586,
		12
	],
	"../pages/resources/resources.module": [
		587,
		11
	],
	"../pages/signup/signup.module": [
		588,
		10
	],
	"../pages/social-history-category/social-history-category.module": [
		590,
		9
	],
	"../pages/social-history-detail/social-history-detail.module": [
		589,
		8
	],
	"../pages/social-history/social-history.module": [
		593,
		7
	],
	"../pages/surgical-history-detail/surgical-history-detail.module": [
		591,
		6
	],
	"../pages/surgical-history/surgical-history.module": [
		592,
		5
	],
	"../pages/test-results/test-results.module": [
		594,
		4
	],
	"../pages/tracker-detail/tracker-detail.module": [
		595,
		3
	],
	"../pages/trackers/trackers.module": [
		596,
		2
	],
	"../pages/welcome/welcome.module": [
		597,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 223;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_baseurl__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__process_httpmsg_process_httpmsg__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the HistoryProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var HistoryProvider = (function () {
    function HistoryProvider(http, processHttpmsgService) {
        this.http = http;
        this.processHttpmsgService = processHttpmsgService;
        console.log('Hello HistoryProvider Provider');
    }
    HistoryProvider.prototype.getAllergy = function (id) {
        var _this = this;
        return this.http.get(__WEBPACK_IMPORTED_MODULE_0__shared_baseurl__["a" /* baseurl */] + 'history/allergy/' + id)
            .catch(function (error) { return _this.processHttpmsgService.handleError(error); });
    };
    HistoryProvider.prototype.addAllergy = function (id, record) {
        var _this = this;
        return this.http.post(__WEBPACK_IMPORTED_MODULE_0__shared_baseurl__["a" /* baseurl */] + 'history/allergy/' + id, record)
            .catch(function (error) { return _this.processHttpmsgService.handleError(error); });
    };
    HistoryProvider.prototype.deleteAllergy = function (id, recordid) {
        var _this = this;
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_0__shared_baseurl__["a" /* baseurl */] + 'history/allergy/' + recordid + '/' + id)
            .catch(function (error) { return _this.processHttpmsgService.handleError(error); });
    };
    HistoryProvider.prototype.getMedicalHistory = function (id) {
        var _this = this;
        return this.http.get(__WEBPACK_IMPORTED_MODULE_0__shared_baseurl__["a" /* baseurl */] + 'history/medical/' + id)
            .catch(function (error) { return _this.processHttpmsgService.handleError(error); });
    };
    HistoryProvider.prototype.addMedicalHistory = function (id, record) {
        var _this = this;
        return this.http.post(__WEBPACK_IMPORTED_MODULE_0__shared_baseurl__["a" /* baseurl */] + 'history/medical/' + id, record)
            .catch(function (error) { return _this.processHttpmsgService.handleError(error); });
    };
    HistoryProvider.prototype.deleteMedicalHistory = function (id, recordid) {
        var _this = this;
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_0__shared_baseurl__["a" /* baseurl */] + 'history/medical/' + recordid + '/' + id)
            .catch(function (error) { return _this.processHttpmsgService.handleError(error); });
    };
    HistoryProvider.prototype.getSocialHistory = function (id) {
        var _this = this;
        return this.http.get(__WEBPACK_IMPORTED_MODULE_0__shared_baseurl__["a" /* baseurl */] + 'history/social/' + id)
            .catch(function (error) { return _this.processHttpmsgService.handleError(error); });
    };
    HistoryProvider.prototype.addSocialHistory = function (id, title, record) {
        var _this = this;
        return this.http.post(__WEBPACK_IMPORTED_MODULE_0__shared_baseurl__["a" /* baseurl */] + 'history/social/' + title + '/' + id, record, { responseType: "text" })
            .catch(function (error) { return _this.processHttpmsgService.handleError(error); });
    };
    HistoryProvider.prototype.deleteSocialHistory = function (id, type, recordid) {
        var _this = this;
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_0__shared_baseurl__["a" /* baseurl */] + 'history/medical/' + type + '/' + recordid + '/' + id)
            .catch(function (error) { return _this.processHttpmsgService.handleError(error); });
    };
    HistoryProvider.prototype.getSurgicalHistory = function (id) {
        var _this = this;
        return this.http.get(__WEBPACK_IMPORTED_MODULE_0__shared_baseurl__["a" /* baseurl */] + 'history/surgical/' + id)
            .catch(function (error) { return _this.processHttpmsgService.handleError(error); });
    };
    HistoryProvider.prototype.addSurgicalHistory = function (id, record) {
        var _this = this;
        return this.http.post(__WEBPACK_IMPORTED_MODULE_0__shared_baseurl__["a" /* baseurl */] + 'history/surgical/' + id, record)
            .catch(function (error) { return _this.processHttpmsgService.handleError(error); });
    };
    HistoryProvider.prototype.deleteSurgicalHistory = function (id, recordid) {
        var _this = this;
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_0__shared_baseurl__["a" /* baseurl */] + 'history/surgical/' + recordid + '/' + id)
            .catch(function (error) { return _this.processHttpmsgService.handleError(error); });
    };
    HistoryProvider.prototype.getFamilyHistory = function (id) {
        var _this = this;
        return this.http.get(__WEBPACK_IMPORTED_MODULE_0__shared_baseurl__["a" /* baseurl */] + 'history/family/' + id)
            .catch(function (error) { return _this.processHttpmsgService.handleError(error); });
    };
    HistoryProvider.prototype.addFamilyHistory = function (id, record) {
        var _this = this;
        return this.http.post(__WEBPACK_IMPORTED_MODULE_0__shared_baseurl__["a" /* baseurl */] + 'history/family/' + id, record)
            .catch(function (error) { return _this.processHttpmsgService.handleError(error); });
    };
    HistoryProvider.prototype.deleteFamilyHistory = function (id, recordid) {
        var _this = this;
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_0__shared_baseurl__["a" /* baseurl */] + 'history/family/' + recordid + '/' + id)
            .catch(function (error) { return _this.processHttpmsgService.handleError(error); });
    };
    HistoryProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__process_httpmsg_process_httpmsg__["a" /* ProcessHttpmsgProvider */]])
    ], HistoryProvider);
    return HistoryProvider;
}());

//# sourceMappingURL=history.js.map

/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HealthRecordsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_baseurl__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__process_httpmsg_process_httpmsg__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the HealthRecordsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var HealthRecordsProvider = (function () {
    function HealthRecordsProvider(http, processHttpmsgService) {
        this.http = http;
        this.processHttpmsgService = processHttpmsgService;
        console.log('Hello HealthRecordsProvider Provider');
    }
    HealthRecordsProvider.prototype.getLabTestCategory = function () {
        var _this = this;
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__shared_baseurl__["a" /* baseurl */] + 'records/labtest/category')
            .catch(function (error) { return _this.processHttpmsgService.handleError(error); });
    };
    HealthRecordsProvider.prototype.getLabTest = function (userid, testid) {
        var _this = this;
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__shared_baseurl__["a" /* baseurl */] + 'records/labtest/' + testid + '/' + userid)
            .catch(function (error) { return _this.processHttpmsgService.handleError(error); });
    };
    HealthRecordsProvider.prototype.addLabTest = function (userid, testid, record) {
        var _this = this;
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__shared_baseurl__["a" /* baseurl */] + 'records/labtest/' + testid + '/' + userid, record)
            .catch(function (error) { return _this.processHttpmsgService.handleError(error); });
    };
    HealthRecordsProvider.prototype.deleteLabTest = function (id, testid, subtestid, recordid) {
        var _this = this;
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_2__shared_baseurl__["a" /* baseurl */] + 'records/labtest/' + testid + '/' + subtestid + '/' + recordid + '/' + id)
            .catch(function (error) { return _this.processHttpmsgService.handleError(error); });
    };
    HealthRecordsProvider.prototype.getRecentLabTest = function (userid, duration) {
        var _this = this;
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__shared_baseurl__["a" /* baseurl */] + 'records/labtest/days/' + duration + '/' + userid)
            .catch(function (error) { return _this.processHttpmsgService.handleError(error); });
    };
    HealthRecordsProvider.prototype.getDiagnosticProcedure = function (userid, testid) {
        var _this = this;
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__shared_baseurl__["a" /* baseurl */] + 'records/diagnosticprocedure/' + testid + '/' + userid)
            .catch(function (error) { return _this.processHttpmsgService.handleError(error); });
    };
    HealthRecordsProvider.prototype.addDiagnosticProcedure = function (userid, testid, record) {
        var _this = this;
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__shared_baseurl__["a" /* baseurl */] + 'records/diagnosticprocedure/' + testid + '/' + userid, record)
            .catch(function (error) { return _this.processHttpmsgService.handleError(error); });
    };
    HealthRecordsProvider.prototype.deleteDiagnosticProcedure = function (id, testid, subtestid, recordid) {
        var _this = this;
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_2__shared_baseurl__["a" /* baseurl */] + 'records/diagnosticprocedure/' + testid + '/' + subtestid + '/' + recordid + '/' + id)
            .catch(function (error) { return _this.processHttpmsgService.handleError(error); });
    };
    HealthRecordsProvider.prototype.getDoctorVisitNotes = function (id) {
        var _this = this;
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__shared_baseurl__["a" /* baseurl */] + 'records/doctorvisitnotes/' + id)
            .catch(function (error) { return _this.processHttpmsgService.handleError(error); });
    };
    HealthRecordsProvider.prototype.addDoctorVisitNotes = function (id, record) {
        var _this = this;
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__shared_baseurl__["a" /* baseurl */] + 'records/doctorvisitnotes/' + id, record)
            .catch(function (error) { return _this.processHttpmsgService.handleError(error); });
    };
    HealthRecordsProvider.prototype.deleteDoctorVisitNotes = function (id, recordid) {
        var _this = this;
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_2__shared_baseurl__["a" /* baseurl */] + 'records/doctorvisitnotes/' + recordid + '/' + id)
            .catch(function (error) { return _this.processHttpmsgService.handleError(error); });
    };
    HealthRecordsProvider.prototype.getMedication = function (id) {
        var _this = this;
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__shared_baseurl__["a" /* baseurl */] + 'records/medication/' + id)
            .catch(function (error) { return _this.processHttpmsgService.handleError(error); });
    };
    HealthRecordsProvider.prototype.addMedication = function (id, record) {
        var _this = this;
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__shared_baseurl__["a" /* baseurl */] + 'records/medication/' + id, record)
            .catch(function (error) { return _this.processHttpmsgService.handleError(error); });
    };
    HealthRecordsProvider.prototype.deleteMedication = function (id, recordid) {
        var _this = this;
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_2__shared_baseurl__["a" /* baseurl */] + 'records/medication/' + recordid + '/' + id)
            .catch(function (error) { return _this.processHttpmsgService.handleError(error); });
    };
    HealthRecordsProvider.prototype.getImmunization = function (id) {
        var _this = this;
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__shared_baseurl__["a" /* baseurl */] + 'records/immunization/' + id)
            .catch(function (error) { return _this.processHttpmsgService.handleError(error); });
    };
    HealthRecordsProvider.prototype.addImmunization = function (id, record) {
        var _this = this;
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__shared_baseurl__["a" /* baseurl */] + 'records/immunization/' + id, record)
            .catch(function (error) { return _this.processHttpmsgService.handleError(error); });
    };
    HealthRecordsProvider.prototype.deleteImmunization = function (id, recordid) {
        var _this = this;
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_2__shared_baseurl__["a" /* baseurl */] + 'records/immunization/' + recordid + '/' + id)
            .catch(function (error) { return _this.processHttpmsgService.handleError(error); });
    };
    HealthRecordsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__process_httpmsg_process_httpmsg__["a" /* ProcessHttpmsgProvider */]])
    ], HealthRecordsProvider);
    return HealthRecordsProvider;
}());

//# sourceMappingURL=health-records.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionOptionProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contacts_contacts__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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



/*
  Generated class for the QuestionOptionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var QuestionOptionProvider = (function () {
    function QuestionOptionProvider(http, contactsProvider) {
        this.http = http;
        this.contactsProvider = contactsProvider;
    }
    //get surgical history question Doctor options
    QuestionOptionProvider.prototype.getDoctorOption = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var doctors, option, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        doctors = [];
                        option = [];
                        return [4 /*yield*/, this.contactsProvider.getDoctors(id).toPromise()];
                    case 1:
                        doctors = (_a.sent());
                        for (i = 0; i < doctors.length; i++) {
                            option[i] = {
                                key: doctors[i].firstname + ' ' + doctors[i].lastname,
                                value: doctors[i].firstname + ' ' + doctors[i].lastname
                            };
                        }
                        console.log(option);
                        return [2 /*return*/, option];
                }
            });
        });
    };
    QuestionOptionProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__contacts_contacts__["a" /* ContactsProvider */]])
    ], QuestionOptionProvider);
    return QuestionOptionProvider;
}());

//# sourceMappingURL=question-option.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllergyClassificationProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/*
  Generated class for the AllergyClassificationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AllergyClassificationProvider = (function () {
    function AllergyClassificationProvider() {
        console.log('Hello AllergyClassificationProvider Provider');
    }
    AllergyClassificationProvider.prototype.getMenu = function (id) {
        var arr = [];
        if (id === 0) {
            arr = [
                { id: 1, name: 'Food Allergy', menu: 'allergy', end: true },
                { id: 2, name: 'Skin Allergy', menu: 'allergy', end: true },
                { id: 3, name: 'Dust Allergy', menu: 'allergy', end: true },
                { id: 4, name: 'Insect Sting Allergy', menu: 'allergy', end: true },
                { id: 5, name: 'Pet Allergies', menu: 'allergy', end: true },
                { id: 6, name: 'Eye Allergy', menu: 'allergy', end: true },
                { id: 7, name: 'Drug Allergies', menu: 'allergy', end: true },
                { id: 8, name: 'Allergic Rhinitis', menu: 'allergy', end: true },
                { id: 9, name: 'Latex Allergy', menu: 'allergy', end: true },
                { id: 10, name: 'Mold Allergy', menu: 'allergy', end: true },
                { id: 11, name: 'Sinus Infection', menu: 'allergy', end: true },
                { id: 12, name: 'Cockroach Allergy', menu: 'allergy', end: true }
            ];
        }
        return arr;
    };
    AllergyClassificationProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], AllergyClassificationProvider);
    return AllergyClassificationProvider;
}());

//# sourceMappingURL=allergy-classification.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImmunizationClassificationProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/*
  Generated class for the ImmunizationClassificationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ImmunizationClassificationProvider = (function () {
    function ImmunizationClassificationProvider() {
        console.log('Hello ImmunizationClassificationProvider Provider');
    }
    ImmunizationClassificationProvider.prototype.getMenu = function (id) {
        // get categories from database
        var arr = [];
        if (id === 0) {
            arr = [
                { id: 1, name: 'Influenza', menu: 'immunization', end: true },
                { id: 2, name: 'Tdap or Td', menu: 'immunization', end: true },
                { id: 3, name: 'MMR', menu: 'immunization', end: true },
                { id: 4, name: 'VAR', menu: 'immunization', end: true },
                { id: 5, name: 'RZV or ZVL', menu: 'immunization', end: true },
                { id: 6, name: 'HPV-Female', menu: 'immunization', end: true },
                { id: 7, name: 'HPV-Male', menu: 'immunization', end: true },
                { id: 8, name: 'PCV13', menu: 'immunization', end: true },
                { id: 9, name: 'PPSV23', menu: 'immunization', end: true },
                { id: 10, name: 'HepA', menu: 'immunization', end: true },
                { id: 11, name: 'HepB', menu: 'immunization', end: true },
                { id: 12, name: 'MenACWY', menu: 'immunization', end: true },
                { id: 13, name: 'MenB', menu: 'immunization', end: true },
                { id: 14, name: 'Hib', menu: 'immunization', end: true },
                { id: 15, name: 'DTaP', menu: 'immunization', end: true },
                { id: 16, name: 'Rotavirus (RV)', menu: 'immunization', end: true },
                { id: 17, name: 'IPV', menu: 'immunization', end: true },
                { id: 18, name: 'Other Vaccine', menu: 'immunization', end: true }
            ];
        }
        return arr;
    };
    ImmunizationClassificationProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ImmunizationClassificationProvider);
    return ImmunizationClassificationProvider;
}());

//# sourceMappingURL=immunization-classification.js.map

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocialHistoryClassificationProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/*
  Generated class for the SocialHistoryClassificationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var SocialHistoryClassificationProvider = (function () {
    function SocialHistoryClassificationProvider() {
        console.log('Hello SocialHistoryClassificationProvider Provider');
    }
    SocialHistoryClassificationProvider.prototype.getMenu = function (id) {
        var arr = [];
        if (id === 0) {
            arr = [
                { id: 1, name: 'smoking', menu: 'socialhistory', end: true },
                { id: 2, name: 'alcohol', menu: 'socialhistory', end: true },
                { id: 3, name: 'drug', menu: 'socialhistory', end: true },
                { id: 4, name: 'travel', menu: 'socialhistory', end: true },
                { id: 5, name: 'housing', menu: 'socialhistory', end: true }
            ];
        }
        return arr;
    };
    SocialHistoryClassificationProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], SocialHistoryClassificationProvider);
    return SocialHistoryClassificationProvider;
}());

//# sourceMappingURL=social-history-classification.js.map

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProcessHttpmsgProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the ProcessHttpmsgProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ProcessHttpmsgProvider = (function () {
    function ProcessHttpmsgProvider(http) {
        this.http = http;
        console.log('Hello ProcessHttpmsgProvider Provider');
    }
    ProcessHttpmsgProvider.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    ProcessHttpmsgProvider.prototype.handleError = function (error) {
        var errMsg = '';
        if (error instanceof __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    ProcessHttpmsgProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */]])
    ], ProcessHttpmsgProvider);
    return ProcessHttpmsgProvider;
}());

//# sourceMappingURL=process-httpmsg.js.map

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionBase; });
var QuestionBase = (function () {
    function QuestionBase(options) {
        if (options === void 0) { options = {}; }
        this.value = options.value;
        this.key = options.key || '';
        this.label = options.label || '';
        this.required = !!options.required;
        this.order = options.order === undefined ? 1 : options.order;
        this.controlType = options.controlType || '';
    }
    return QuestionBase;
}());

//# sourceMappingURL=question-base.js.map

/***/ }),

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateTrackerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_storage__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__customtracker_customtracker__ = __webpack_require__(150);
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
 * Generated class for the CreateTrackerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CreateTrackerPage = (function () {
    function CreateTrackerPage(navCtrl, navParams, fb, viewCtrl, storage, appCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fb = fb;
        this.viewCtrl = viewCtrl;
        this.storage = storage;
        this.appCtrl = appCtrl;
        this.tracker = this.fb.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            time: true
        });
    }
    CreateTrackerPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreateTrackerPage');
    };
    CreateTrackerPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    CreateTrackerPage.prototype.onSubmit = function () {
        var _this = this;
        this.mytracker = {
            name: this.tracker.value.name,
            time: this.tracker.value.time
        };
        this.viewCtrl.dismiss(this.mytracker);
        this.storage.get('panels').then(function (panels) {
            var newpanels = panels;
            newpanels["mytracker"] = true;
            _this.storage.set('panels', newpanels);
        });
        this.appCtrl.getRootNav().push(__WEBPACK_IMPORTED_MODULE_4__customtracker_customtracker__["a" /* CustomtrackerPage */]);
    };
    CreateTrackerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'page-create-tracker',template:/*ion-inline-start:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/create-tracker/create-tracker.html"*/'<!--\n  Generated template for the CreateTrackerPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-toolbar color="primary">\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="white" showWhen="ios">Cancel</span>\n        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>CREATE TRACKER</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form [formGroup]="tracker" (ngSubmit)="onSubmit()">\n    <ion-item>\n      <ion-label floating>What would you like to track?</ion-label>\n      <ion-input formControlName="name"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Add Time?</ion-label>\n      <ion-toggle formControlName="time" checked="true"></ion-toggle>\n    </ion-item>\n    <button ion-button type="submit" [disabled]="!tracker.valid">Create</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/create-tracker/create-tracker.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["ViewController"],
            __WEBPACK_IMPORTED_MODULE_0__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["App"]])
    ], CreateTrackerPage);
    return CreateTrackerPage;
}());

//# sourceMappingURL=create-tracker.js.map

/***/ }),

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(428);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 428:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ion2_calendar__ = __webpack_require__(495);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ion2_calendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ion2_calendar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_charts__ = __webpack_require__(499);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_in_app_browser__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(546);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_trackers_trackers__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_tracker_detail_tracker_detail__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_create_tracker_create_tracker__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_customtracker_customtracker__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_dashboard_dashboard__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_welcome_welcome__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_login_login__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_signup_signup__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_contact_contact__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_contact_detail_contact_detail__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_contact_add_contacts_contact_add_contacts__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_appointment_appointment__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_appointment_add_appointments_appointment_add_appointments__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_profile_profile__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_profile_editable_profile_editable__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_resources_resources__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_allergy_allergy__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_allergy_detail_allergy_detail__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_allergy_history_allergy_history__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_family_history_family_history__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_family_history_detail_family_history_detail__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_medical_history_medical_history__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_medical_history_detail_medical_history_detail__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_surgical_history_surgical_history__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_surgical_history_detail_surgical_history_detail__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_immunization_immunization__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_immunization_detail_immunization_detail__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_immunization_history_immunization_history__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_social_history_social_history__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_social_history_category_social_history_category__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_social_history_detail_social_history_detail__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_doctor_visit_notes_doctor_visit_notes__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_doctor_visit_notes_detail_doctor_visit_notes_detail__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_medication_medication__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pages_medication_detail_medication_detail__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__pages_test_results_test_results__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__pages_diagnostic_procedure_diagnostic_procedure__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__pages_diagnostic_procedure_detail_diagnostic_procedure_detail__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__pages_lab_test_lab_test__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__pages_lab_test_detail_lab_test_detail__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__pages_password_edit_password_edit__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__pages_password_reset_password_reset__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__ionic_native_status_bar__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__ionic_native_splash_screen__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__providers_trackers_trackers__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__providers_process_httpmsg_process_httpmsg__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__providers_question_option_question_option__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__providers_question_control_question_control__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__providers_question_question__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__providers_contacts_contacts__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__providers_allergy_classification_allergy_classification__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__providers_immunization_classification_immunization_classification__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__providers_user_user__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__providers_appointment_appointment__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__providers_social_history_classification_social_history_classification__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__providers_auth_service_auth_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__providers_history_history__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__providers_diagnostic_procedure_classification_diagnostic_procedure_classification__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68__providers_health_records_health_records__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_69__components_tile_tile__ = __webpack_require__(547);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_70__components_dynamic_form_question_dynamic_form_question__ = __webpack_require__(548);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_71__components_dynamic_form_dynamic_form__ = __webpack_require__(549);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_72__components_calendar_calendar__ = __webpack_require__(550);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_73_rxjs_add_operator_catch__ = __webpack_require__(551);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_73_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_73_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_74_rxjs_add_operator_map__ = __webpack_require__(554);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_74_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_74_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











































































var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_trackers_trackers__["b" /* TrackersPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_tracker_detail_tracker_detail__["a" /* TrackerDetailPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_trackers_trackers__["a" /* PanelPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_create_tracker_create_tracker__["a" /* CreateTrackerPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_customtracker_customtracker__["a" /* CustomtrackerPage */],
                __WEBPACK_IMPORTED_MODULE_69__components_tile_tile__["a" /* TileComponent */],
                __WEBPACK_IMPORTED_MODULE_14__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_allergy_allergy__["a" /* AllergyPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_allergy_detail_allergy_detail__["a" /* AllergyDetailPage */],
                __WEBPACK_IMPORTED_MODULE_71__components_dynamic_form_dynamic_form__["a" /* DynamicFormComponent */],
                __WEBPACK_IMPORTED_MODULE_70__components_dynamic_form_question_dynamic_form_question__["a" /* DynamicFormQuestionComponent */],
                __WEBPACK_IMPORTED_MODULE_15__pages_welcome_welcome__["a" /* WelcomePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_contact_detail_contact_detail__["a" /* ContactDetailPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_contact_add_contacts_contact_add_contacts__["a" /* ContactAddContactsPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_appointment_appointment__["a" /* AppointmentPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_appointment_add_appointments_appointment_add_appointments__["a" /* AppointmentAddAppointmentsPage */],
                __WEBPACK_IMPORTED_MODULE_72__components_calendar_calendar__["a" /* CalendarComponent */],
                __WEBPACK_IMPORTED_MODULE_23__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_profile_editable_profile_editable__["a" /* ProfileEditablePage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_resources_resources__["a" /* ResourcesPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_allergy_history_allergy_history__["a" /* AllergyHistoryPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_family_history_family_history__["a" /* FamilyHistoryPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_family_history_detail_family_history_detail__["a" /* FamilyHistoryDetailPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_medical_history_medical_history__["a" /* MedicalHistoryPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_medical_history_detail_medical_history_detail__["a" /* MedicalHistoryDetailPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_surgical_history_surgical_history__["a" /* SurgicalHistoryPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_surgical_history_detail_surgical_history_detail__["a" /* SurgicalHistoryDetailPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_immunization_immunization__["a" /* ImmunizationPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_immunization_history_immunization_history__["a" /* ImmunizationHistoryPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_immunization_detail_immunization_detail__["a" /* ImmunizationDetailPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_social_history_social_history__["a" /* SocialHistoryPage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_social_history_category_social_history_category__["a" /* SocialHistoryCategoryPage */],
                __WEBPACK_IMPORTED_MODULE_40__pages_social_history_detail_social_history_detail__["a" /* SocialHistoryDetailPage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_doctor_visit_notes_doctor_visit_notes__["a" /* DoctorVisitNotesPage */],
                __WEBPACK_IMPORTED_MODULE_42__pages_doctor_visit_notes_detail_doctor_visit_notes_detail__["a" /* DoctorVisitNotesDetailPage */],
                __WEBPACK_IMPORTED_MODULE_43__pages_medication_medication__["a" /* MedicationPage */],
                __WEBPACK_IMPORTED_MODULE_44__pages_medication_detail_medication_detail__["a" /* MedicationDetailPage */],
                __WEBPACK_IMPORTED_MODULE_45__pages_test_results_test_results__["a" /* TestResultsPage */],
                __WEBPACK_IMPORTED_MODULE_46__pages_diagnostic_procedure_diagnostic_procedure__["a" /* DiagnosticProcedurePage */],
                __WEBPACK_IMPORTED_MODULE_47__pages_diagnostic_procedure_detail_diagnostic_procedure_detail__["a" /* DiagnosticProcedureDetailPage */],
                __WEBPACK_IMPORTED_MODULE_48__pages_lab_test_lab_test__["a" /* LabTestPage */],
                __WEBPACK_IMPORTED_MODULE_49__pages_lab_test_detail_lab_test_detail__["a" /* LabTestDetailPage */],
                __WEBPACK_IMPORTED_MODULE_50__pages_password_edit_password_edit__["a" /* PasswordEditPage */],
                __WEBPACK_IMPORTED_MODULE_51__pages_password_reset_password_reset__["a" /* PasswordResetPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicModule"].forRoot(__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/allergy-detail/allergy-detail.module#AllergyDetailPageModule', name: 'AllergyDetailPage', segment: 'allergy-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/allergy-history/allergy-history.module#AllergyHistoryPageModule', name: 'AllergyHistoryPage', segment: 'allergy-history', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/allergy/allergy.module#AllergyPageModule', name: 'AllergyPage', segment: 'allergy', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/appointment-add-appointments/appointment-add-appointments.module#AppointmentAddAppointmentsPageModule', name: 'AppointmentAddAppointmentsPage', segment: 'appointment-add-appointments', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/appointment/appointment.module#AppointmentPageModule', name: 'AppointmentPage', segment: 'appointment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contact-add-contacts/contact-add-contacts.module#ContactAddContactsPageModule', name: 'ContactAddContactsPage', segment: 'contact-add-contacts', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contact-detail/contact-detail.module#ContactDetailPageModule', name: 'ContactDetailPage', segment: 'contact-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contact/contact.module#ContactPageModule', name: 'ContactPage', segment: 'contact', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/create-tracker/create-tracker.module#CreateTrackerPageModule', name: 'CreateTrackerPage', segment: 'create-tracker', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/customtracker/customtracker.module#CustomtrackerPageModule', name: 'CustomtrackerPage', segment: 'customtracker', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dashboard/dashboard.module#DashboardPageModule', name: 'DashboardPage', segment: 'dashboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/diagnostic-procedure-detail/diagnostic-procedure-detail.module#DiagnosticProcedureDetailPageModule', name: 'DiagnosticProcedureDetailPage', segment: 'diagnostic-procedure-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/diagnostic-procedure/diagnostic-procedure.module#DiagnosticProcedurePageModule', name: 'DiagnosticProcedurePage', segment: 'diagnostic-procedure', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/doctor-visit-notes-detail/doctor-visit-notes-detail.module#DoctorVisitNotesDetailPageModule', name: 'DoctorVisitNotesDetailPage', segment: 'doctor-visit-notes-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/doctor-visit-notes/doctor-visit-notes.module#DoctorVisitNotesPageModule', name: 'DoctorVisitNotesPage', segment: 'doctor-visit-notes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/family-history-detail/family-history-detail.module#FamilyHistoryDetailPageModule', name: 'FamilyHistoryDetailPage', segment: 'family-history-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/family-history/family-history.module#FamilyHistoryPageModule', name: 'FamilyHistoryPage', segment: 'family-history', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/foodtracker/foodtracker.module#FoodtrackerPageModule', name: 'FoodtrackerPage', segment: 'foodtracker', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/immunization-detail/immunization-detail.module#ImmunizationDetailPageModule', name: 'ImmunizationDetailPage', segment: 'immunization-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/immunization-history/immunization-history.module#ImmunizationHistoryPageModule', name: 'ImmunizationHistoryPage', segment: 'immunization-history', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/immunization/immunization.module#ImmunizationPageModule', name: 'ImmunizationPage', segment: 'immunization', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lab-test-detail/lab-test-detail.module#LabTestDetailPageModule', name: 'LabTestDetailPage', segment: 'lab-test-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lab-test/lab-test.module#LabTestPageModule', name: 'LabTestPage', segment: 'lab-test', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/medical-history-detail/medical-history-detail.module#MedicalHistoryDetailPageModule', name: 'MedicalHistoryDetailPage', segment: 'medical-history-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/medical-history/medical-history.module#MedicalHistoryPageModule', name: 'MedicalHistoryPage', segment: 'medical-history', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/medication-detail/medication-detail.module#MedicationDetailPageModule', name: 'MedicationDetailPage', segment: 'medication-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/medication/medication.module#MedicationPageModule', name: 'MedicationPage', segment: 'medication', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/password-edit/password-edit.module#PasswordEditPageModule', name: 'PasswordEditPage', segment: 'password-edit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/password-reset/password-reset.module#PasswordResetPageModule', name: 'PasswordResetPage', segment: 'password-reset', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile-editable/profile-editable.module#ProfileEditablePageModule', name: 'ProfileEditablePage', segment: 'profile-editable', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/resources/resources.module#ResourcesPageModule', name: 'ResourcesPage', segment: 'resources', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/social-history-detail/social-history-detail.module#SocialHistoryDetailPageModule', name: 'SocialHistoryDetailPage', segment: 'social-history-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/social-history-category/social-history-category.module#SocialHistoryCategoryPageModule', name: 'SocialHistoryCategoryPage', segment: 'social-history-category', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/surgical-history-detail/surgical-history-detail.module#SurgicalHistoryDetailPageModule', name: 'SurgicalHistoryDetailPage', segment: 'surgical-history-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/surgical-history/surgical-history.module#SurgicalHistoryPageModule', name: 'SurgicalHistoryPage', segment: 'surgical-history', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/social-history/social-history.module#SocialHistoryPageModule', name: 'SocialHistoryPage', segment: 'social-history', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/test-results/test-results.module#TestResultsPageModule', name: 'TestResultsPage', segment: 'test-results', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tracker-detail/tracker-detail.module#TrackerDetailPageModule', name: 'TrackerDetailPage', segment: 'tracker-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/trackers/trackers.module#TrackersPageModule', name: 'TrackersPage', segment: 'trackers', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/welcome/welcome.module#WelcomePageModule', name: 'WelcomePage', segment: 'welcome', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_6_ion2_calendar__["CalendarModule"],
                __WEBPACK_IMPORTED_MODULE_7_ng2_charts__["ChartsModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicApp"]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_trackers_trackers__["b" /* TrackersPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_tracker_detail_tracker_detail__["a" /* TrackerDetailPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_trackers_trackers__["a" /* PanelPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_create_tracker_create_tracker__["a" /* CreateTrackerPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_customtracker_customtracker__["a" /* CustomtrackerPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_allergy_allergy__["a" /* AllergyPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_allergy_detail_allergy_detail__["a" /* AllergyDetailPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_welcome_welcome__["a" /* WelcomePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_contact_detail_contact_detail__["a" /* ContactDetailPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_contact_add_contacts_contact_add_contacts__["a" /* ContactAddContactsPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_appointment_appointment__["a" /* AppointmentPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_appointment_add_appointments_appointment_add_appointments__["a" /* AppointmentAddAppointmentsPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_profile_editable_profile_editable__["a" /* ProfileEditablePage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_resources_resources__["a" /* ResourcesPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_allergy_history_allergy_history__["a" /* AllergyHistoryPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_family_history_family_history__["a" /* FamilyHistoryPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_family_history_detail_family_history_detail__["a" /* FamilyHistoryDetailPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_medical_history_medical_history__["a" /* MedicalHistoryPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_medical_history_detail_medical_history_detail__["a" /* MedicalHistoryDetailPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_surgical_history_surgical_history__["a" /* SurgicalHistoryPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_surgical_history_detail_surgical_history_detail__["a" /* SurgicalHistoryDetailPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_immunization_immunization__["a" /* ImmunizationPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_immunization_history_immunization_history__["a" /* ImmunizationHistoryPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_immunization_detail_immunization_detail__["a" /* ImmunizationDetailPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_social_history_social_history__["a" /* SocialHistoryPage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_social_history_category_social_history_category__["a" /* SocialHistoryCategoryPage */],
                __WEBPACK_IMPORTED_MODULE_40__pages_social_history_detail_social_history_detail__["a" /* SocialHistoryDetailPage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_doctor_visit_notes_doctor_visit_notes__["a" /* DoctorVisitNotesPage */],
                __WEBPACK_IMPORTED_MODULE_42__pages_doctor_visit_notes_detail_doctor_visit_notes_detail__["a" /* DoctorVisitNotesDetailPage */],
                __WEBPACK_IMPORTED_MODULE_43__pages_medication_medication__["a" /* MedicationPage */],
                __WEBPACK_IMPORTED_MODULE_44__pages_medication_detail_medication_detail__["a" /* MedicationDetailPage */],
                __WEBPACK_IMPORTED_MODULE_45__pages_test_results_test_results__["a" /* TestResultsPage */],
                __WEBPACK_IMPORTED_MODULE_46__pages_diagnostic_procedure_diagnostic_procedure__["a" /* DiagnosticProcedurePage */],
                __WEBPACK_IMPORTED_MODULE_47__pages_diagnostic_procedure_detail_diagnostic_procedure_detail__["a" /* DiagnosticProcedureDetailPage */],
                __WEBPACK_IMPORTED_MODULE_48__pages_lab_test_lab_test__["a" /* LabTestPage */],
                __WEBPACK_IMPORTED_MODULE_49__pages_lab_test_detail_lab_test_detail__["a" /* LabTestDetailPage */],
                __WEBPACK_IMPORTED_MODULE_50__pages_password_edit_password_edit__["a" /* PasswordEditPage */],
                __WEBPACK_IMPORTED_MODULE_51__pages_password_reset_password_reset__["a" /* PasswordResetPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_52__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_53__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicErrorHandler"] },
                __WEBPACK_IMPORTED_MODULE_54__providers_trackers_trackers__["a" /* TrackersProvider */],
                __WEBPACK_IMPORTED_MODULE_55__providers_process_httpmsg_process_httpmsg__["a" /* ProcessHttpmsgProvider */],
                __WEBPACK_IMPORTED_MODULE_60__providers_allergy_classification_allergy_classification__["a" /* AllergyClassificationProvider */],
                __WEBPACK_IMPORTED_MODULE_61__providers_immunization_classification_immunization_classification__["a" /* ImmunizationClassificationProvider */],
                __WEBPACK_IMPORTED_MODULE_57__providers_question_control_question_control__["a" /* QuestionControlProvider */],
                __WEBPACK_IMPORTED_MODULE_58__providers_question_question__["a" /* QuestionProvider */],
                __WEBPACK_IMPORTED_MODULE_59__providers_contacts_contacts__["a" /* ContactsProvider */],
                __WEBPACK_IMPORTED_MODULE_56__providers_question_option_question_option__["a" /* QuestionOptionProvider */],
                __WEBPACK_IMPORTED_MODULE_62__providers_user_user__["a" /* UserProvider */],
                __WEBPACK_IMPORTED_MODULE_63__providers_appointment_appointment__["a" /* AppointmentProvider */],
                __WEBPACK_IMPORTED_MODULE_64__providers_social_history_classification_social_history_classification__["a" /* SocialHistoryClassificationProvider */],
                __WEBPACK_IMPORTED_MODULE_65__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_66__providers_history_history__["a" /* HistoryProvider */],
                __WEBPACK_IMPORTED_MODULE_67__providers_diagnostic_procedure_classification_diagnostic_procedure_classification__["a" /* DiagnosticProcedureClassificationProvider */],
                __WEBPACK_IMPORTED_MODULE_68__providers_health_records_health_records__["a" /* HealthRecordsProvider */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_in_app_browser__["a" /* InAppBrowser */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return baseurl; });
var baseurl = 'https://phrbackend.herokuapp.com/api/';
//# sourceMappingURL=baseurl.js.map

/***/ }),

/***/ 454:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 224,
	"./af.js": 224,
	"./ar": 225,
	"./ar-dz": 226,
	"./ar-dz.js": 226,
	"./ar-kw": 227,
	"./ar-kw.js": 227,
	"./ar-ly": 228,
	"./ar-ly.js": 228,
	"./ar-ma": 229,
	"./ar-ma.js": 229,
	"./ar-sa": 230,
	"./ar-sa.js": 230,
	"./ar-tn": 231,
	"./ar-tn.js": 231,
	"./ar.js": 225,
	"./az": 232,
	"./az.js": 232,
	"./be": 233,
	"./be.js": 233,
	"./bg": 234,
	"./bg.js": 234,
	"./bm": 235,
	"./bm.js": 235,
	"./bn": 236,
	"./bn.js": 236,
	"./bo": 237,
	"./bo.js": 237,
	"./br": 238,
	"./br.js": 238,
	"./bs": 239,
	"./bs.js": 239,
	"./ca": 240,
	"./ca.js": 240,
	"./cs": 241,
	"./cs.js": 241,
	"./cv": 242,
	"./cv.js": 242,
	"./cy": 243,
	"./cy.js": 243,
	"./da": 244,
	"./da.js": 244,
	"./de": 245,
	"./de-at": 246,
	"./de-at.js": 246,
	"./de-ch": 247,
	"./de-ch.js": 247,
	"./de.js": 245,
	"./dv": 248,
	"./dv.js": 248,
	"./el": 249,
	"./el.js": 249,
	"./en-au": 250,
	"./en-au.js": 250,
	"./en-ca": 251,
	"./en-ca.js": 251,
	"./en-gb": 252,
	"./en-gb.js": 252,
	"./en-ie": 253,
	"./en-ie.js": 253,
	"./en-il": 254,
	"./en-il.js": 254,
	"./en-nz": 255,
	"./en-nz.js": 255,
	"./eo": 256,
	"./eo.js": 256,
	"./es": 257,
	"./es-do": 258,
	"./es-do.js": 258,
	"./es-us": 259,
	"./es-us.js": 259,
	"./es.js": 257,
	"./et": 260,
	"./et.js": 260,
	"./eu": 261,
	"./eu.js": 261,
	"./fa": 262,
	"./fa.js": 262,
	"./fi": 263,
	"./fi.js": 263,
	"./fo": 264,
	"./fo.js": 264,
	"./fr": 265,
	"./fr-ca": 266,
	"./fr-ca.js": 266,
	"./fr-ch": 267,
	"./fr-ch.js": 267,
	"./fr.js": 265,
	"./fy": 268,
	"./fy.js": 268,
	"./gd": 269,
	"./gd.js": 269,
	"./gl": 270,
	"./gl.js": 270,
	"./gom-latn": 271,
	"./gom-latn.js": 271,
	"./gu": 272,
	"./gu.js": 272,
	"./he": 273,
	"./he.js": 273,
	"./hi": 274,
	"./hi.js": 274,
	"./hr": 275,
	"./hr.js": 275,
	"./hu": 276,
	"./hu.js": 276,
	"./hy-am": 277,
	"./hy-am.js": 277,
	"./id": 278,
	"./id.js": 278,
	"./is": 279,
	"./is.js": 279,
	"./it": 280,
	"./it.js": 280,
	"./ja": 281,
	"./ja.js": 281,
	"./jv": 282,
	"./jv.js": 282,
	"./ka": 283,
	"./ka.js": 283,
	"./kk": 284,
	"./kk.js": 284,
	"./km": 285,
	"./km.js": 285,
	"./kn": 286,
	"./kn.js": 286,
	"./ko": 287,
	"./ko.js": 287,
	"./ky": 288,
	"./ky.js": 288,
	"./lb": 289,
	"./lb.js": 289,
	"./lo": 290,
	"./lo.js": 290,
	"./lt": 291,
	"./lt.js": 291,
	"./lv": 292,
	"./lv.js": 292,
	"./me": 293,
	"./me.js": 293,
	"./mi": 294,
	"./mi.js": 294,
	"./mk": 295,
	"./mk.js": 295,
	"./ml": 296,
	"./ml.js": 296,
	"./mn": 297,
	"./mn.js": 297,
	"./mr": 298,
	"./mr.js": 298,
	"./ms": 299,
	"./ms-my": 300,
	"./ms-my.js": 300,
	"./ms.js": 299,
	"./mt": 301,
	"./mt.js": 301,
	"./my": 302,
	"./my.js": 302,
	"./nb": 303,
	"./nb.js": 303,
	"./ne": 304,
	"./ne.js": 304,
	"./nl": 305,
	"./nl-be": 306,
	"./nl-be.js": 306,
	"./nl.js": 305,
	"./nn": 307,
	"./nn.js": 307,
	"./pa-in": 308,
	"./pa-in.js": 308,
	"./pl": 309,
	"./pl.js": 309,
	"./pt": 310,
	"./pt-br": 311,
	"./pt-br.js": 311,
	"./pt.js": 310,
	"./ro": 312,
	"./ro.js": 312,
	"./ru": 313,
	"./ru.js": 313,
	"./sd": 314,
	"./sd.js": 314,
	"./se": 315,
	"./se.js": 315,
	"./si": 316,
	"./si.js": 316,
	"./sk": 317,
	"./sk.js": 317,
	"./sl": 318,
	"./sl.js": 318,
	"./sq": 319,
	"./sq.js": 319,
	"./sr": 320,
	"./sr-cyrl": 321,
	"./sr-cyrl.js": 321,
	"./sr.js": 320,
	"./ss": 322,
	"./ss.js": 322,
	"./sv": 323,
	"./sv.js": 323,
	"./sw": 324,
	"./sw.js": 324,
	"./ta": 325,
	"./ta.js": 325,
	"./te": 326,
	"./te.js": 326,
	"./tet": 327,
	"./tet.js": 327,
	"./tg": 328,
	"./tg.js": 328,
	"./th": 329,
	"./th.js": 329,
	"./tl-ph": 330,
	"./tl-ph.js": 330,
	"./tlh": 331,
	"./tlh.js": 331,
	"./tr": 332,
	"./tr.js": 332,
	"./tzl": 333,
	"./tzl.js": 333,
	"./tzm": 334,
	"./tzm-latn": 335,
	"./tzm-latn.js": 335,
	"./tzm.js": 334,
	"./ug-cn": 336,
	"./ug-cn.js": 336,
	"./uk": 337,
	"./uk.js": 337,
	"./ur": 338,
	"./ur.js": 338,
	"./uz": 339,
	"./uz-latn": 340,
	"./uz-latn.js": 340,
	"./uz.js": 339,
	"./vi": 341,
	"./vi.js": 341,
	"./x-pseudo": 342,
	"./x-pseudo.js": 342,
	"./yo": 343,
	"./yo.js": 343,
	"./zh-cn": 344,
	"./zh-cn.js": 344,
	"./zh-hk": 345,
	"./zh-hk.js": 345,
	"./zh-tw": 346,
	"./zh-tw.js": 346
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 454;

/***/ }),

/***/ 462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextboxQuestion; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_question_base__ = __webpack_require__(39);
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

var TextboxQuestion = (function (_super) {
    __extends(TextboxQuestion, _super);
    function TextboxQuestion(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        _this.controlType = 'textbox';
        _this.type = options['type'] || '';
        _this.unit = options['unit'] || '';
        _this.readonly = options['readonly'] || false;
        return _this;
    }
    return TextboxQuestion;
}(__WEBPACK_IMPORTED_MODULE_0__shared_question_base__["a" /* QuestionBase */]));

//# sourceMappingURL=question-textbox.js.map

/***/ }),

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatetimeQuestion; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_question_base__ = __webpack_require__(39);
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

var DatetimeQuestion = (function (_super) {
    __extends(DatetimeQuestion, _super);
    function DatetimeQuestion(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        _this.controlType = 'datetime';
        _this.display = options['display'] || 'MM/DD/YYYY';
        return _this;
    }
    return DatetimeQuestion;
}(__WEBPACK_IMPORTED_MODULE_0__shared_question_base__["a" /* QuestionBase */]));

//# sourceMappingURL=question-datetime.js.map

/***/ }),

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropdownQuestion; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_question_base__ = __webpack_require__(39);
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

var DropdownQuestion = (function (_super) {
    __extends(DropdownQuestion, _super);
    function DropdownQuestion(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        _this.controlType = 'dropdown';
        _this.options = [];
        _this.multiple = options['multiple'] || false;
        _this.options = options['options'] || [];
        return _this;
    }
    return DropdownQuestion;
}(__WEBPACK_IMPORTED_MODULE_0__shared_question_base__["a" /* QuestionBase */]));

//# sourceMappingURL=question-dropdown.js.map

/***/ }),

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextareaQuestion; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_question_base__ = __webpack_require__(39);
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

var TextareaQuestion = (function (_super) {
    __extends(TextareaQuestion, _super);
    function TextareaQuestion(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        _this.controlType = 'textarea';
        _this.rows = options['rows'] || 3;
        _this.readonly = options['readonly'] || false;
        _this.placeholder = options['placeholder'] || '';
        return _this;
    }
    return TextareaQuestion;
}(__WEBPACK_IMPORTED_MODULE_0__shared_question_base__["a" /* QuestionBase */]));

//# sourceMappingURL=question-textarea.js.map

/***/ }),

/***/ 466:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToggleQuestion; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_question_base__ = __webpack_require__(39);
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

var ToggleQuestion = (function (_super) {
    __extends(ToggleQuestion, _super);
    function ToggleQuestion(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        _this.controlType = 'toggle';
        return _this;
    }
    return ToggleQuestion;
}(__WEBPACK_IMPORTED_MODULE_0__shared_question_base__["a" /* QuestionBase */]));

//# sourceMappingURL=question-toggle.js.map

/***/ }),

/***/ 467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RangeQuestion; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_question_base__ = __webpack_require__(39);
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

var RangeQuestion = (function (_super) {
    __extends(RangeQuestion, _super);
    function RangeQuestion(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        _this.controlType = 'range';
        _this.min = options['min'] || 0;
        _this.max = options['max'] || 100;
        _this.step = options['step'] || 1;
        _this.snaps = options['snaps'] || false;
        _this.pin = options['pin'] || false;
        _this.color = options['color'] || 'primary';
        _this.iconleft = options['iconleft'] || '';
        _this.iconright = options['iconright'] || '';
        return _this;
    }
    return RangeQuestion;
}(__WEBPACK_IMPORTED_MODULE_0__shared_question_base__["a" /* QuestionBase */]));

//# sourceMappingURL=question-range.js.map

/***/ }),

/***/ 468:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComplexQuestion; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_question_base__ = __webpack_require__(39);
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

var ComplexQuestion = (function (_super) {
    __extends(ComplexQuestion, _super);
    function ComplexQuestion(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        _this.controlType = 'complex';
        _this.options = [];
        _this.selectvalue = options['selectvalue'] || '';
        _this.selectkey = options['selectkey'] || '';
        _this.selectlabel = options['selectlabel'] || '';
        _this.selectrequired = !!options['selectrequired'];
        _this.multiple = options['multiple'] || false;
        _this.options = options['options'] || [];
        _this.inputvalue = options['inputvalue'] || '';
        _this.inputkey = options['inputkey'] || '';
        _this.inputlabel = options['inputlabel'] || '';
        _this.inputrequired = !!options['inputrequired'];
        _this.type = options['type'] || '';
        _this.unit = options['unit'] || '';
        _this.readonly = options['readonly'] || false;
        _this.datetimevalue = options['datetimevalue'] || '';
        _this.datetimekey = options['datetimekey'] || '';
        _this.datetimelabel = options['datetimelabel'] || '';
        _this.datetimerequired = !!options['datetimerequired'];
        _this.display = options['display'] || 'MM/DD/YYYY';
        return _this;
    }
    return ComplexQuestion;
}(__WEBPACK_IMPORTED_MODULE_0__shared_question_base__["a" /* QuestionBase */]));

//# sourceMappingURL=question-complex.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactAddContactsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_contacts_contacts__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__ = __webpack_require__(6);
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
 * Generated class for the ContactAddContactsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ContactAddContactsPage = (function () {
    function ContactAddContactsPage(navCtrl, navParams, fb, viewCtrl, toastCtrl, loadingCtrl, contactsProvider, auth) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fb = fb;
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.contactsProvider = contactsProvider;
        this.auth = auth;
        this.groups = [];
        this.isDoctor = false;
        this.isFamilyorEmergency = false;
        this.address = [];
        this.formErrors = {
            "firstname": '',
            "lastname": '',
            "relationship": '',
            "tel": '',
            "fax": '',
            "specialty": '',
            "location1": '',
            "group": ''
        };
        this.validationMessages = {
            "firstname": {
                "required": "Firstname is required.",
                "minlength": "Firstname must be at least 2 characters long.",
                "maxlength": "Firstname cannot be more than 25 characters long."
            },
            "lastname": {
                "required": "Lastname is required.",
                "minlength": "Lastname must be at least 2 characters long.",
                "maxlength": "Lastname cannot be more than 25 characters long."
            },
            "relationship": {
                "required": "Relationship is required."
            },
            "specialty": {
                "required": "Specialty is required."
            },
            "tel": {
                "required": "Tel number is required.",
                "pattern": "Please enter a valid 10-digit phone number. For example: 4123456789."
            },
            "fax": {
                "pattern": "Please enter a valid fax number."
            },
            "location1": {
                "required": "Address is required."
            },
            "group": {
                "required": "Contact group is required."
            }
        };
        this.addContactForm = this.fb.group({
            firstname: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(2), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(25)]],
            lastname: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(2), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(25)]],
            relationship: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            tel: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].pattern('[0-9]{10}')]],
            fax: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].pattern('[0-9]{10}')],
            specialty: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            location1: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            location2: [''],
            location3: [''],
            group: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]
        });
        this.addContactForm.valueChanges.subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged();
        this.addContactForm.controls["group"].valueChanges.subscribe(function (value) { return _this.onGroupValueChanged(value); });
    }
    ContactAddContactsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ContactAddContactsPage');
    };
    ContactAddContactsPage.prototype.onValueChanged = function (data) {
        if (!this.addContactForm) {
            return;
        }
        var form = this.addContactForm;
        for (var field in this.formErrors) {
            this.formErrors[field] = '';
            var control = form.get(field);
            if (control && control.dirty && !control.valid) {
                var messages = this.validationMessages[field];
                for (var key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    };
    ContactAddContactsPage.prototype.onGroupValueChanged = function (value) {
        this.isDoctor = false;
        this.isFamilyorEmergency = false;
        this.groups = value;
        if (this.groups.includes("doctor")) {
            this.isDoctor = true;
            this.addContactForm.patchValue({
                specialty: ""
            });
        }
        else {
            this.isDoctor = false;
            this.addContactForm.patchValue({
                specialty: "0"
            });
        }
        if (this.groups.includes("family") || this.groups.includes("emergency")) {
            this.isFamilyorEmergency = true;
            this.addContactForm.patchValue({
                relationship: ""
            });
        }
        else {
            this.isFamilyorEmergency = false;
            this.addContactForm.patchValue({
                relationship: "0"
            });
        }
    };
    ContactAddContactsPage.prototype.addAddress = function () {
        if (this.address.length < 2)
            this.address.push(1);
    };
    ContactAddContactsPage.prototype.deleteAddress = function () {
        if (this.address.length > 0)
            this.address.pop();
    };
    ContactAddContactsPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ContactAddContactsPage.prototype.onSubmit = function () {
        var _this = this;
        this.showLoader('Adding...');
        var contact = this.addContactForm.value;
        contact.group = this.addContactForm.get("group").value.toString();
        console.log(contact);
        // post new contact info
        this.contactsProvider.addContacts(this.auth.userId, contact)
            .subscribe(function (contact) {
            _this.loading.dismiss();
            _this.presentToast('Successfully added a new contact.');
            _this.viewCtrl.dismiss();
        }, function (error) {
            _this.loading.dismiss();
            _this.presentToast('Failed to add a new contact.');
        });
    };
    ContactAddContactsPage.prototype.showLoader = function (msg) {
        this.loading = this.loadingCtrl.create({
            content: msg
        });
        this.loading.present();
    };
    ContactAddContactsPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: false
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    ContactAddContactsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-contact-add-contacts',template:/*ion-inline-start:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/contact-add-contacts/contact-add-contacts.html"*/'<!--\n  Generated template for the ContactAddContactsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-toolbar color="primary">\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="white" showWhen="ios">Cancel</span>\n        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Add Contacts</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form [formGroup]=\'addContactForm\' (ngSubmit)="onSubmit()">\n    <ion-item>\n      <ion-label>Contact Group<span class="color-red">*</span></ion-label>\n      <ion-select formControlName="group" (value)="group" multiple="true">\n        <ion-option value="emergency">Emergency</ion-option>\n        <ion-option value="friend">Friend</ion-option>\n        <ion-option value="family">Family</ion-option>\n        <ion-option value="doctor">Doctor</ion-option>\n      </ion-select>\n    </ion-item>\n    <div class="pull-right color-red">\n      <span [hidden]="!(formErrors.group)">{{formErrors.group}}</span>\n    </div>\n    <ion-item>\n      <ion-label floating>First Name<span class="color-red">*</span></ion-label>\n      <ion-input formControlName="firstname"></ion-input>\n    </ion-item>\n    <div class="pull-right color-red">\n      <span [hidden]="!(formErrors.firstname)">{{formErrors.firstname}}</span>\n    </div>\n    <ion-item>\n      <ion-label floating>Last Name<span class="color-red">*</span></ion-label>\n      <ion-input formControlName="lastname"></ion-input>\n    </ion-item>\n    <div class="pull-right color-red">\n      <span [hidden]="!(formErrors.lastname)">{{formErrors.lastname}}</span>\n    </div>\n    <ion-item *ngIf="isFamilyorEmergency">\n      <ion-label floating>Relationship<span class="color-red">*</span></ion-label>\n      <ion-input formControlName="relationship"></ion-input>\n    </ion-item>\n    <div class="pull-right color-red" *ngIf="isFamilyorEmergency">\n      <span [hidden]="!(formErrors.relationship)">{{formErrors.relationship}}</span>\n    </div>\n    <ion-item>\n      <ion-label floating>Tel<span class="color-red">*</span></ion-label>\n      <ion-input type="tel" formControlName="tel" placeholder="XXXXXXXXXX"></ion-input>\n    </ion-item>\n    <div class="pull-right color-red">\n      <span [hidden]="!(formErrors.tel)">{{formErrors.tel}}</span>\n    </div>\n    <ion-item *ngIf="isDoctor">\n      <ion-label floating>Fax</ion-label>\n      <ion-input type="tel" formControlName="fax"></ion-input>\n    </ion-item>\n    <div class="pull-right color-red" *ngIf="isDoctor">\n      <span [hidden]="!(formErrors.fax)">{{formErrors.fax}}</span>\n    </div>\n    <ion-item *ngIf="isDoctor">\n      <ion-label floating>Specialty<span class="color-red">*</span></ion-label>\n      <ion-input formControlName="specialty"></ion-input>\n    </ion-item>\n    <div class="pull-right color-red" *ngIf="isDoctor">\n      <span [hidden]="!(formErrors.specialty)">{{formErrors.specialty}}</span>\n    </div>\n    <ion-item *ngIf="!isDoctor">\n      <ion-label floating>Address<span class="color-red">*</span></ion-label>\n      <ion-input formControlName="location1"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="isDoctor">\n      <ion-label floating>Address1<span class="color-red">*</span></ion-label>\n      <ion-input formControlName="location1"></ion-input>\n      <ion-icon color="primary" name="add-circle" (click)="addAddress()" item-right></ion-icon>\n    </ion-item>\n    <ion-item *ngIf="address[0] && isDoctor">\n      <ion-label floating>Address2</ion-label>\n      <ion-input formControlName="location2"></ion-input>\n      <ion-icon color="danger" name="remove-circle" (click)="deleteAddress()" item-end></ion-icon>\n    </ion-item>\n    <ion-item *ngIf="address[1] && isDoctor">\n      <ion-label floating>Address3</ion-label>\n      <ion-input formControlName="location3"></ion-input>\n      <ion-icon color="danger" name="remove-circle" (click)="deleteAddress()" item-end></ion-icon>\n    </ion-item>\n    <button ion-button block type="submit" [disabled]="!addContactForm.valid">Create</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/contact-add-contacts/contact-add-contacts.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_3__providers_contacts_contacts__["a" /* ContactsProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], ContactAddContactsPage);
    return ContactAddContactsPage;
}());

//# sourceMappingURL=contact-add-contacts.js.map

/***/ }),

/***/ 546:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_trackers_trackers__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_welcome_welcome__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_appointment_appointment__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_dashboard_dashboard__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_profile_profile__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_resources_resources__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_allergy_history_allergy_history__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_family_history_family_history__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_medical_history_medical_history__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_surgical_history_surgical_history__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_immunization_history_immunization_history__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_social_history_social_history__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_doctor_visit_notes_doctor_visit_notes__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_medication_medication__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_test_results_test_results__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_auth_service_auth_service__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





















var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, app, auth, alertCtrl, toastCtrl, loadingCtrl) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.app = app;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_welcome_welcome__["a" /* WelcomePage */];
        this.initializeApp();
        // used for ngFor and navigation
        this.pages = [
            {
                title: 'Health Records',
                icon: 'leaf',
                open: false,
                children: [
                    {
                        title: 'Test Results',
                        icon: 'medkit-outline',
                        component: __WEBPACK_IMPORTED_MODULE_19__pages_test_results_test_results__["a" /* TestResultsPage */]
                    },
                    {
                        title: 'Doctor Visit Notes',
                        icon: 'medkit-outline',
                        component: __WEBPACK_IMPORTED_MODULE_17__pages_doctor_visit_notes_doctor_visit_notes__["a" /* DoctorVisitNotesPage */]
                    },
                    {
                        title: 'Medication',
                        icon: 'medkit-outline',
                        component: __WEBPACK_IMPORTED_MODULE_18__pages_medication_medication__["a" /* MedicationPage */]
                    },
                    {
                        title: 'Immunization',
                        icon: 'medkit-outline',
                        component: __WEBPACK_IMPORTED_MODULE_15__pages_immunization_history_immunization_history__["a" /* ImmunizationHistoryPage */]
                    }
                ]
            },
            {
                title: 'History',
                icon: 'leaf',
                open: false,
                children: [
                    {
                        title: 'Allergy',
                        icon: 'medkit-outline',
                        component: __WEBPACK_IMPORTED_MODULE_11__pages_allergy_history_allergy_history__["a" /* AllergyHistoryPage */]
                    },
                    {
                        title: 'Medical History',
                        icon: 'medkit-outline',
                        component: __WEBPACK_IMPORTED_MODULE_13__pages_medical_history_medical_history__["a" /* MedicalHistoryPage */]
                    },
                    {
                        title: 'Social History',
                        icon: 'medkit-outline',
                        component: __WEBPACK_IMPORTED_MODULE_16__pages_social_history_social_history__["a" /* SocialHistoryPage */]
                    },
                    {
                        title: 'Surgical History',
                        icon: 'medkit-outline',
                        component: __WEBPACK_IMPORTED_MODULE_14__pages_surgical_history_surgical_history__["a" /* SurgicalHistoryPage */]
                    },
                    {
                        title: 'Family History',
                        icon: 'medkit-outline',
                        component: __WEBPACK_IMPORTED_MODULE_12__pages_family_history_family_history__["a" /* FamilyHistoryPage */]
                    }
                ]
            }
        ];
        this.onelevelPages = [
            {
                title: 'Trackers',
                icon: 'infinite',
                component: __WEBPACK_IMPORTED_MODULE_4__pages_trackers_trackers__["b" /* TrackersPage */]
            },
            {
                title: 'Appointment',
                icon: 'calendar',
                component: __WEBPACK_IMPORTED_MODULE_7__pages_appointment_appointment__["a" /* AppointmentPage */]
            },
            {
                title: 'Profile',
                icon: 'person',
                component: __WEBPACK_IMPORTED_MODULE_9__pages_profile_profile__["a" /* ProfilePage */]
            },
            {
                title: 'Contacts Info',
                icon: 'contacts',
                component: __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */]
            },
            {
                title: 'Resources',
                icon: 'link',
                component: __WEBPACK_IMPORTED_MODULE_10__pages_resources_resources__["a" /* ResourcesPage */]
            }
        ];
    }
    MyApp.prototype.toggleSection = function (i) {
        this.pages[i].open = !this.pages[i].open;
    };
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.goToDashboard = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_8__pages_dashboard_dashboard__["a" /* DashboardPage */]);
    };
    MyApp.prototype.logout = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirm Logout',
            message: 'Are you sure to log out?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('logout cancelled');
                    }
                },
                {
                    text: 'Logout',
                    handler: function () {
                        _this.showLoader('Logging out...');
                        _this.auth.logout();
                        _this.loading.dismiss();
                        _this.presentToast('Log out successfully');
                        _this.nav.push(__WEBPACK_IMPORTED_MODULE_5__pages_welcome_welcome__["a" /* WelcomePage */]);
                    }
                }
            ]
        });
        alert.present();
    };
    MyApp.prototype.showLoader = function (msg) {
        this.loading = this.loadingCtrl.create({
            content: msg
        });
        this.loading.present();
    };
    MyApp.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: false
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/app/app.html"*/'<ion-split-pane>\n\n  <ion-menu [content]="content">\n    <ion-header>\n      <ion-toolbar color="primary">\n        <ion-title>PHR</ion-title>\n      </ion-toolbar>\n    </ion-header>\n\n    <ion-content>\n      <div class="sidemenu">\n        <button class="font" menuClose ion-item color="primary-pale" (click)="goToDashboard()">\n          <ion-icon item-left name="analytics"></ion-icon>\n          Dashboard\n        </button>\n        <!-- Two levels buttons -->\n        <ion-list *ngFor="let page of pages; let i = index" class="section" no-lines no-padding>\n          <button class="font" ion-item (click)="toggleSection(i)" detail-none [ngClass]="{\'section-open\': page.open, \'section-close\': !page.open}">\n            <ion-icon item-left name="arrow-forward" *ngIf="!page.open"></ion-icon>\n            <ion-icon item-left name="arrow-down" *ngIf="page.open"></ion-icon>\n            {{page.title}}\n          </button>\n          <ion-list *ngIf="page.children && page.open" class="section" no-padding>\n            <button class="font" menuClose ion-item *ngFor="let p of page.children" (click)="openPage(p)">\n              <ion-icon [name]="p.icon" item-left></ion-icon>\n              {{p.title}}\n            </button>\n          </ion-list>\n        </ion-list>\n        <!-- One level buttons -->\n        <ion-list class="section" *ngFor="let page of onelevelPages; let i = index" no-lines no-padding>\n          <button class="font" menuClose ion-item color="primary-pale" (click)="openPage(page)">\n            <ion-icon item-left [name]=\'page.icon\'></ion-icon>\n            {{page.title}}\n          </button>\n        </ion-list>\n      </div>\n      <button class="logout font" menuClose ion-button icon-start clear (click)="logout()">\n        <ion-icon item-left name="log-out"></ion-icon>\n        Logout\n      </button>\n    </ion-content>\n\n  </ion-menu>\n\n  <!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n  <ion-nav [root]="rootPage" #content #myNav swipeBackEnabled="false" main></ion-nav>\n\n</ion-split-pane>\n'/*ion-inline-end:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["App"],
            __WEBPACK_IMPORTED_MODULE_20__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 547:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_allergy_detail_allergy_detail__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_immunization_detail_immunization_detail__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_social_history_detail_social_history_detail__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_diagnostic_procedure_detail_diagnostic_procedure_detail__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_diagnostic_procedure_classification_diagnostic_procedure_classification__ = __webpack_require__(113);
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
 * Generated class for the TileComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var TileComponent = (function () {
    function TileComponent(navCtrl, modalCtrl, dpcp) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.dpcp = dpcp;
        this.color = ['darksalmon', 'rosybrown', 'slategrey'];
        console.log('Hello TileComponent Component');
    }
    TileComponent.prototype.getSub = function (id) {
        this.tiles = this.dpcp.getMenu(id);
    };
    TileComponent.prototype.goToRecord = function (tile) {
        if (tile.menu == "diagnostic-procedure") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_diagnostic_procedure_detail_diagnostic_procedure_detail__["a" /* DiagnosticProcedureDetailPage */], {
                'id': tile.id,
                'title': tile.name
            });
        }
        else if (tile.menu == "allergy") {
            var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__pages_allergy_detail_allergy_detail__["a" /* AllergyDetailPage */], {
                'id': tile.id,
                'title': tile.name
            });
            modal.present();
        }
        else if (tile.menu == "immunization") {
            var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__pages_immunization_detail_immunization_detail__["a" /* ImmunizationDetailPage */], {
                'id': tile.id,
                'title': tile.name
            });
            modal.present();
        }
        else if (tile.menu == "socialhistory") {
            var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__pages_social_history_detail_social_history_detail__["a" /* SocialHistoryDetailPage */], {
                'id': tile.id,
                'title': tile.name
            });
            modal.present();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], TileComponent.prototype, "tiles", void 0);
    TileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'tile',template:/*ion-inline-start:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/components/tile/tile.html"*/'<!-- Generated template for the TileComponent component -->\n<ion-grid>\n  <ion-row>\n    <ion-col col-4 *ngFor="let tile of tiles; let i = index">\n      <ion-card class="fix-card" *ngIf="!tile.end" [ngStyle]="{\'background-color\': color[i%3]}" (click)="getSub(tile.id)">\n        <div class="item-size" color="primary">\n          <p class="break">{{tile.name}}</p>\n        </div>\n      </ion-card>\n      <ion-card class="fix-card" *ngIf="tile.end" [ngStyle]="{\'background-color\': color[i%3]}" (click)="goToRecord(tile)">\n        <div class="item-size" color="primary">\n          <p class="break">{{tile.name}}</p>\n        </div>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n'/*ion-inline-end:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/components/tile/tile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_6__providers_diagnostic_procedure_classification_diagnostic_procedure_classification__["a" /* DiagnosticProcedureClassificationProvider */]])
    ], TileComponent);
    return TileComponent;
}());

//# sourceMappingURL=tile.js.map

/***/ }),

/***/ 548:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DynamicFormQuestionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_question_base__ = __webpack_require__(39);
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
 * Generated class for the DynamicFormQuestionComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var DynamicFormQuestionComponent = (function () {
    function DynamicFormQuestionComponent() {
        this.selectedOption = 'age';
    }
    Object.defineProperty(DynamicFormQuestionComponent.prototype, "isValid", {
        get: function () {
            if (this.form.controls[this.question.key]) {
                return this.form.controls[this.question.key].valid;
            }
            else
                return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicFormQuestionComponent.prototype, "controlUnderline", {
        get: function () {
            if (this.form.controls[this.question.key]) {
                return ((!this.form.controls[this.question.key].pristine) && (!this.isValid));
            }
            else
                return false;
        },
        enumerable: true,
        configurable: true
    });
    DynamicFormQuestionComponent.prototype.ngOnInit = function () {
        if (this.question.controlType == 'complex') {
            this.form.get('scheduledate').setValidators(null);
            this.form.get('scheduledate').updateValueAndValidity();
        }
        console.log(this.question);
    };
    DynamicFormQuestionComponent.prototype.selectedValue = function (ev) {
        console.log(ev);
        this.selectedOption = ev;
        if (this.selectedOption == 'age') {
            this.form.get('scheduledate').setValidators(null);
            this.form.get('age').setValidators(__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required);
        }
        else {
            this.form.get('age').setValidators(null);
            this.form.get('scheduledate').setValidators(__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required);
        }
        this.form.get('scheduledate').updateValueAndValidity();
        this.form.get('age').updateValueAndValidity();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__shared_question_base__["a" /* QuestionBase */])
    ], DynamicFormQuestionComponent.prototype, "question", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"])
    ], DynamicFormQuestionComponent.prototype, "form", void 0);
    DynamicFormQuestionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'dynamic-form-question',template:/*ion-inline-start:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/components/dynamic-form-question/dynamic-form-question.html"*/'<!-- Generated template for the DynamicFormQuestionComponent component -->\n<div [formGroup]="form" [ngClass]="{\'fix-underline\': (question.controlType!=\'complex\')}" [ngClass]="{\'red-underline\': controlUnderline}">\n  <label class="width color" *ngIf="question.controlType!=\'complex\'" [attr.for]="question.key" [ngClass]="{\'full-width\': (question.controlType==\'textarea\' || question.controlType==\'range\')}">{{question.label}}\n    <span *ngIf="question.required" class="color-red">*</span>\n  </label>\n  <div [ngClass]="{\'width\': (question.controlType!=\'complex\')}" [ngSwitch]="question.controlType" [ngClass]="{\'full-width\': (question.controlType==\'textarea\' || question.controlType==\'range\')}">\n\n    <div class="flexlayout" *ngSwitchCase="\'textbox\'">\n      <input [formControlName]="question.key" [id]="question.key" [type]="question.type">\n      <div class="right-justify" *ngIf="question.unit.length!=0">{{question.unit}}</div>\n    </div>\n\n    <ion-select class="select-width left-pull" [id]="question.key" *ngSwitchCase="\'dropdown\'" [formControlName]="question.key"\n      [multiple]="question.multiple">\n      <ion-option *ngFor="let opt of question.options" [value]="opt.key">{{opt.value}}</ion-option>\n    </ion-select>\n\n    <ion-datetime class="left-pull" *ngSwitchCase="\'datetime\'" [formControlName]="question.key" [id]="question.key" [displayFormat]="question.display"></ion-datetime>\n\n    <textarea *ngSwitchCase="\'textarea\'" [formControlName]="question.key" [id]="question.key" [rows]="question.rows" [placeholder]="question.placeholder"\n      [readonly]="question.readonly"></textarea>\n\n    <div *ngSwitchCase="\'toggle\'" style="text-align: right">\n      <ion-toggle style="display:inline-block; vertical-align: middle" [formControlName]="question.key" [id]="question.key" color="slate-grey"></ion-toggle>\n    </div>\n\n    <!-- <ion-range *ngSwitchCase="\'range\'" [formControlName]="question.key" [id]="question.key" min="0" max="10" step="1" snaps="true" pin="true" color="primary"> -->\n    <ion-range *ngSwitchCase="\'range\'" [formControlName]="question.key" [id]="question.key" [min]="question.min" [max]="question.max"\n      [step]="question.step" [snaps]="question.snaps" [pin]="question.pin" [color]="question.color">\n      <ion-icon range-left [name]="question.iconleft"></ion-icon>\n      <ion-icon range-right [name]="question.iconright"></ion-icon>\n    </ion-range>\n\n    <div *ngSwitchCase="\'complex\'">\n      <div class="position fix-underline">\n        <label class="width color" [attr.for]="question.selectkey">{{question.selectlabel}}\n          <span *ngIf="question.selectrequired" class="color-red">*</span>\n        </label>\n        <div class="width">\n          <ion-select class="select-width left-pull" [formControlName]="question.selectkey" [id]="question.selectkey" [multiple]="question.selectmultiple">\n            <ion-option *ngFor="let opt of question.options" [value]="opt.key" (ionSelect)="selectedValue($event)">{{opt.value}}</ion-option>\n          </ion-select>\n        </div>\n      </div>\n\n      <div class="position fix-underline" *ngIf="selectedOption==\'age\'">\n        <label class="width color" [attr.for]="question.inputkey">{{question.inputlabel}}\n          <span *ngIf="question.inputrequired" class="color-red">*</span>\n        </label>\n        <div class="width">\n          <input [formControlName]="question.inputkey" [id]="question.inputkey" [type]="question.type">\n        </div>\n      </div>\n\n      <div class="position fix-underline" *ngIf="selectedOption==\'scheduledate\'">\n        <label class="width color" [attr.for]="question.datetimekey">{{question.datetimelabel}}\n          <span *ngIf="question.datetimerequired" class="color-red">*</span>\n        </label>\n        <div class="width">\n          <ion-datetime class="left-pull" [formControlName]="question.datetimekey" [id]="question.datetimekey" [displayFormat]="question.datetimedisplay"></ion-datetime>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- <div *ngIf="(!form.controls[question.key].pristine) && (!isValid)">{{question.label}} is required</div> -->\n</div>\n'/*ion-inline-end:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/components/dynamic-form-question/dynamic-form-question.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], DynamicFormQuestionComponent);
    return DynamicFormQuestionComponent;
}());

//# sourceMappingURL=dynamic-form-question.js.map

/***/ }),

/***/ 549:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DynamicFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_question_control_question_control__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
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
 * Generated class for the DynamicFormComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var DynamicFormComponent = (function () {
    function DynamicFormComponent(qcp, viewCtrl, toastCtrl) {
        this.qcp = qcp;
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.questions = [];
        console.log('Hello DynamicFormComponent Component');
    }
    DynamicFormComponent.prototype.ngOnInit = function () {
        this.form = this.qcp.toFormGroup(this.questions);
    };
    DynamicFormComponent.prototype.onSubmit = function () {
        var payLoad = this.form.value;
        console.log(payLoad);
        this.toastCtrl.create({
            message: 'Successfully added',
            position: 'bottom',
            duration: 2000
        }).present();
        this.viewCtrl.dismiss();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], DynamicFormComponent.prototype, "questions", void 0);
    DynamicFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'dynamic-form',template:/*ion-inline-start:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/components/dynamic-form/dynamic-form.html"*/'<!-- Generated template for the DynamicFormComponent component -->\n<div>\n  <form [formGroup]=\'form\' (ngSubmit)="onSubmit()">\n\n    <div *ngFor="let question of questions">\n      <ion-item>\n        <dynamic-form-question [question]="question" [form]="form"></dynamic-form-question>\n      </ion-item>\n    </div>\n\n    <div>\n      <button ion-button type="submit" [disabled]="!form.valid" color="slate-grey">Record</button>\n    </div>\n\n  </form>\n</div>\n'/*ion-inline-end:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/components/dynamic-form/dynamic-form.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_question_control_question_control__["a" /* QuestionControlProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["ViewController"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["ToastController"]])
    ], DynamicFormComponent);
    return DynamicFormComponent;
}());

//# sourceMappingURL=dynamic-form.js.map

/***/ }),

/***/ 550:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
 * Generated class for the CalendarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var CalendarComponent = (function () {
    function CalendarComponent() {
        this.options = {
            from: new Date(2000, 0, 1),
        };
        this.selectDate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        console.log('Hello CalendarComponent Component');
    }
    CalendarComponent.prototype.onChange = function ($event) {
        this.selectDate.emit($event.format());
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], CalendarComponent.prototype, "selectDate", void 0);
    CalendarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'calendar',template:/*ion-inline-start:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/components/calendar/calendar.html"*/'<ion-calendar [(ngModel)]="date" (onChange)="onChange($event)" [options]="options" [type]="type" format="YYYY-MM-DD">\n</ion-calendar>\n'/*ion-inline-end:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/components/calendar/calendar.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], CalendarComponent);
    return CalendarComponent;
}());

//# sourceMappingURL=calendar.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_baseurl__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__process_httpmsg_process_httpmsg__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the ContactsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ContactsProvider = (function () {
    function ContactsProvider(http, processHttpmsgService) {
        this.http = http;
        this.processHttpmsgService = processHttpmsgService;
        console.log('Hello ContactsProvider Provider');
    }
    ContactsProvider.prototype.getContactsDetail = function (id) {
        var _this = this;
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__shared_baseurl__["a" /* baseurl */] + 'contacts/' + id)
            .catch(function (error) { return _this.processHttpmsgService.handleError(error); });
    };
    ContactsProvider.prototype.addContacts = function (id, contact) {
        var _this = this;
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__shared_baseurl__["a" /* baseurl */] + 'contacts/' + id, contact)
            .catch(function (error) { return _this.processHttpmsgService.handleError(error); });
    };
    ContactsProvider.prototype.getDoctors = function (id) {
        var _this = this;
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__shared_baseurl__["a" /* baseurl */] + 'contacts/doctors/' + id)
            .catch(function (error) { return _this.processHttpmsgService.handleError(error); });
    };
    ContactsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__process_httpmsg_process_httpmsg__["a" /* ProcessHttpmsgProvider */]])
    ], ContactsProvider);
    return ContactsProvider;
}());

//# sourceMappingURL=contacts.js.map

/***/ }),

/***/ 6:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_baseurl__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__process_httpmsg_process_httpmsg__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AuthServiceProvider = (function () {
    function AuthServiceProvider(http, processHttpmsgService) {
        this.http = http;
        this.processHttpmsgService = processHttpmsgService;
        console.log('Hello AuthServiceProvider Provider');
    }
    AuthServiceProvider.prototype.login = function (credentials) {
        var _this = this;
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__shared_baseurl__["a" /* baseurl */] + 'users/login', credentials)
            .map(function (res) { return _this.userId = res; })
            .catch(function (error) { return _this.processHttpmsgService.handleError(error); });
    };
    AuthServiceProvider.prototype.register = function (data) {
        var _this = this;
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__shared_baseurl__["a" /* baseurl */] + 'users/signup', data)
            .map(function (res) {
            if (res.exist == false)
                _this.userId = res.id;
            else
                _this.userId = undefined;
            return res;
        })
            .catch(function (error) { return _this.processHttpmsgService.handleError(error); });
    };
    AuthServiceProvider.prototype.logout = function () {
        this.userId = undefined;
    };
    AuthServiceProvider.prototype.editPassword = function (id, password) {
        var _this = this;
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__shared_baseurl__["a" /* baseurl */] + 'users/editpassword/' + id, password)
            .catch(function (error) { return _this.processHttpmsgService.handleError(error); });
    };
    AuthServiceProvider.prototype.resetPassword = function (id, password) {
        var _this = this;
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__shared_baseurl__["a" /* baseurl */] + 'users/resetpassword/' + id, password)
            .catch(function (error) { return _this.processHttpmsgService.handleError(error); });
    };
    AuthServiceProvider.prototype.verifyEmail_getSecQues = function (email) {
        var _this = this;
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__shared_baseurl__["a" /* baseurl */] + 'users/email/', email)
            .catch(function (error) { return _this.processHttpmsgService.handleError(error); });
    };
    AuthServiceProvider.prototype.verifySecAns = function (id, secAns) {
        var _this = this;
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__shared_baseurl__["a" /* baseurl */] + 'users/securityanswer/' + id, secAns)
            .catch(function (error) { return _this.processHttpmsgService.handleError(error); });
    };
    AuthServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__process_httpmsg_process_httpmsg__["a" /* ProcessHttpmsgProvider */]])
    ], AuthServiceProvider);
    return AuthServiceProvider;
}());

//# sourceMappingURL=auth-service.js.map

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__appointment_appointment__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lab_test_detail_lab_test_detail__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__medication_medication__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__immunization_history_immunization_history__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__welcome_welcome__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__doctor_visit_notes_doctor_visit_notes__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_appointment_appointment__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_auth_service_auth_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_health_records_health_records__ = __webpack_require__(25);
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
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DashboardPage = (function () {
    function DashboardPage(navCtrl, navParams, ap, hrp, auth, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ap = ap;
        this.hrp = hrp;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.appointments = [];
        this.labtests = [];
        this.medications = [];
        this.immunizations = [];
        this.dvnotes = [];
        if (!this.auth.userId) {
            this.presentAlert('Please login first.');
        }
    }
    DashboardPage.prototype.ionViewCanEnter = function () {
        var _this = this;
        this.ap.getAppointment(this.auth.userId)
            .subscribe(function (app) {
            _this.appointments = app;
        }, function (errmess) { return _this.errMess = errmess; });
        this.hrp.getRecentLabTest(this.auth.userId, 30)
            .subscribe(function (records) {
            _this.labtests = records;
        }, function (errmess) { return _this.errMess = errmess; });
        this.hrp.getMedication(this.auth.userId)
            .subscribe(function (records) {
            _this.medications = records;
        }, function (errmess) { return _this.errMess = errmess; });
        this.hrp.getImmunization(this.auth.userId)
            .subscribe(function (records) {
            _this.immunizations = records;
            _this.immunizations.forEach(function (immunization) {
                if (immunization.age > 18)
                    immunization['ageGroup'] = "Adult";
                else
                    immunization['ageGroup'] = "Child and Adolescent";
            });
        }, function (errmess) { return _this.errMess = errmess; });
        this.hrp.getDoctorVisitNotes(this.auth.userId)
            .subscribe(function (records) {
            _this.dvnotes = records;
        }, function (errmess) { return _this.errMess = errmess; });
        return true;
    };
    DashboardPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DashboardPage');
    };
    DashboardPage.prototype.goToAppointment = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__appointment_appointment__["a" /* AppointmentPage */]);
    };
    DashboardPage.prototype.goToLabtest = function (i) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__lab_test_detail_lab_test_detail__["a" /* LabTestDetailPage */], {
            'title': this.labtests[i].name,
            'id': this.labtests[i].id,
            'unit': this.labtests[i].unit,
            'tab': 'history'
        });
    };
    DashboardPage.prototype.goToMedication = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__medication_medication__["a" /* MedicationPage */]);
    };
    DashboardPage.prototype.goToImmunization = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__immunization_history_immunization_history__["a" /* ImmunizationHistoryPage */]);
    };
    DashboardPage.prototype.goToDoctorVisitNotes = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__doctor_visit_notes_doctor_visit_notes__["a" /* DoctorVisitNotesPage */]);
    };
    DashboardPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        console.log('Begin async operation', refresher);
        setTimeout(function () {
            _this.ap.getAppointment(_this.auth.userId)
                .subscribe(function (app) { return _this.appointments = app; }, function (errmess) { return _this.errMess = errmess; });
            _this.hrp.getRecentLabTest(_this.auth.userId, 30)
                .subscribe(function (records) { return _this.labtests = records; }, function (errmess) { return _this.errMess = errmess; });
            _this.hrp.getMedication(_this.auth.userId)
                .subscribe(function (records) { return _this.medications = records; }, function (errmess) { return _this.errMess = errmess; });
            _this.hrp.getImmunization(_this.auth.userId)
                .subscribe(function (records) {
                _this.immunizations = records;
                _this.immunizations.forEach(function (immunization) {
                    if (immunization.age > 18)
                        immunization['ageGroup'] = "Adult";
                    else
                        immunization['ageGroup'] = "Child and Adolescent";
                });
            }, function (errmess) { return _this.errMess = errmess; });
            _this.hrp.getDoctorVisitNotes(_this.auth.userId)
                .subscribe(function (records) { return _this.dvnotes = records; }, function (errmess) { return _this.errMess = errmess; });
            console.log('Async operation has ended');
            refresher.complete();
        }, 1500);
    };
    DashboardPage.prototype.presentAlert = function (msg) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Oops!',
            message: msg,
            enableBackdropDismiss: false,
            buttons: [
                {
                    text: 'Ok',
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__welcome_welcome__["a" /* WelcomePage */]);
                    }
                }
            ]
        });
        alert.present();
    };
    DashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-dashboard',template:/*ion-inline-start:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/dashboard/dashboard.html"*/'<!--\n  Generated template for the DashboardPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>DASHBOARD</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content color="primary" pullingIcon="arrow-dropdown" pullingText="Pull to refresh" refreshingSpinner="circles"\n      refreshingText="Refreshing..."></ion-refresher-content>\n  </ion-refresher>\n  <ion-list>\n    <ion-list-header>Recent Events</ion-list-header>\n    <ion-card *ngIf="appointments.length!=0">\n      <ion-card-content>\n        <ion-card-title>\n          <ion-item no-padding>\n            <ion-icon item-start>\n              <i class="far fa-calendar-alt"></i>\n            </ion-icon>\n            <span>Appointment</span>\n          </ion-item>\n        </ion-card-title>\n        <ion-list *ngFor="let appointment of appointments">\n          <ion-item (click)="goToAppointment()">\n            <h2>{{appointment.date | date}} at {{appointment.time}}</h2>\n            <h3>{{appointment.location}}</h3>\n            <p>{{appointment.firstname | titlecase}} {{appointment.lastname | titlecase}}</p>\n          </ion-item>\n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n    <ion-card *ngIf="labtests.length!=0">\n      <ion-card-content>\n        <ion-card-title>\n          <ion-item no-padding>\n            <ion-icon item-start>\n              <i class="fas fa-file-medical-alt"></i>\n            </ion-icon>\n            <span>Abnormal Lab Test</span>\n          </ion-item>\n        </ion-card-title>\n        <ion-list *ngFor="let labtest of labtests; let i = index;">\n          <ion-item (click)="goToLabtest(i)">\n            <h2>{{labtest.subtest}}</h2>\n            <h3>{{labtest.result}}\n              <span *ngIf="labtest.unit.length!=0"> {{labtest.unit}}</span>\n            </h3>\n            <p>{{labtest.date | date}}</p>\n          </ion-item>\n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n    <ion-card *ngIf="medications.length!=0">\n      <ion-card-content>\n        <ion-card-title>\n          <ion-item no-padding>\n            <ion-icon item-start>\n              <i class="fas fa-capsules"></i>\n            </ion-icon>\n            <span>Medication</span>\n          </ion-item>\n        </ion-card-title>\n        <ion-list *ngFor="let medication of medications">\n          <ion-item (click)="goToMedication()">\n            <h2>{{medication.name}}</h2>\n            <h3>{{medication.frequency}}</h3>\n            <p>{{medication.date | date}}</p>\n          </ion-item>\n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n    <ion-card *ngIf="immunizations.length!=0">\n      <ion-card-content>\n        <ion-card-title>\n          <ion-item no-padding>\n            <ion-icon item-start>\n              <i class="fas fa-syringe"></i>\n            </ion-icon>\n            <span>Immunization</span>\n          </ion-item>\n        </ion-card-title>\n        <ion-list *ngFor="let immunization of immunizations">\n          <ion-item (click)="goToImmunization()">\n            <h2>{{immunization.vaccine}}</h2>\n            <h3>{{immunization.schedule}}</h3>\n            <p>{{immunization.date | date}}</p>\n          </ion-item>\n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n    <ion-card *ngIf="dvnotes.length!=0">\n      <ion-card-content>\n        <ion-card-title>\n          <ion-item no-padding>\n            <ion-icon item-start>\n              <i class="fas fa-notes-medical"></i>\n            </ion-icon>\n            <span>Doctor Visit Notes</span>\n          </ion-item>\n        </ion-card-title>\n        <ion-list *ngFor="let d of dvnotes">\n          <ion-item (click)="goToDoctorVisitNotes()">\n            <h2>{{d.diagnosis}}</h2>\n            <h3>{{d.doctor}}</h3>\n            <p>{{d.date | date}}</p>\n          </ion-item>\n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/dashboard/dashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_8__providers_appointment_appointment__["a" /* AppointmentProvider */],
            __WEBPACK_IMPORTED_MODULE_10__providers_health_records_health_records__["a" /* HealthRecordsProvider */],
            __WEBPACK_IMPORTED_MODULE_9__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"]])
    ], DashboardPage);
    return DashboardPage;
}());

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppointmentProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_baseurl__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__process_httpmsg_process_httpmsg__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the AppointmentProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AppointmentProvider = (function () {
    function AppointmentProvider(http, processHttpmsgService) {
        this.http = http;
        this.processHttpmsgService = processHttpmsgService;
    }
    AppointmentProvider.prototype.getAppointment = function (id) {
        var _this = this;
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__shared_baseurl__["a" /* baseurl */] + 'appointment/' + id)
            .catch(function (error) { return _this.processHttpmsgService.handleError(error); });
    };
    AppointmentProvider.prototype.addAppointment = function (id, appointment) {
        var _this = this;
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__shared_baseurl__["a" /* baseurl */] + 'appointment/' + id, appointment)
            .catch(function (error) { return _this.processHttpmsgService.handleError(error); });
    };
    AppointmentProvider.prototype.deleteAppointment = function (id, recordid) {
        var _this = this;
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_2__shared_baseurl__["a" /* baseurl */] + 'appointment/' + recordid + '/' + id)
            .catch(function (error) { return _this.processHttpmsgService.handleError(error); });
    };
    AppointmentProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__process_httpmsg_process_httpmsg__["a" /* ProcessHttpmsgProvider */]])
    ], AppointmentProvider);
    return AppointmentProvider;
}());

//# sourceMappingURL=appointment.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppointmentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__appointment_add_appointments_appointment_add_appointments__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appointment_appointment__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__welcome_welcome__ = __webpack_require__(16);
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
 * Generated class for the AppointmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AppointmentPage = (function () {
    function AppointmentPage(navCtrl, navParams, modalCtrl, ap, auth, alertCtrl, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.ap = ap;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.appointments = [];
        if (!this.auth.userId) {
            this.presentAlert('Please login first.');
        }
        //get appointments which have already been sorted by time
        this.ap.getAppointment(this.auth.userId)
            .subscribe(function (app) { return _this.appointments = app; }, function (errmess) { return _this.errMess = errmess; });
    }
    AppointmentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AppointmentPage');
    };
    AppointmentPage.prototype.addAppointment = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__appointment_add_appointments_appointment_add_appointments__["a" /* AppointmentAddAppointmentsPage */]);
        modal.present();
        modal.onWillDismiss(function () {
            _this.ap.getAppointment(_this.auth.userId)
                .subscribe(function (app) { return _this.appointments = app; }, function (errmess) { return _this.errMess = errmess; });
        });
    };
    AppointmentPage.prototype.deleteRecord = function (i) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirm Delete',
            message: 'Are you sure you want to delete this record?',
            enableBackdropDismiss: true,
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel'
                },
                {
                    text: 'Delete',
                    handler: function () {
                        _this.ap.deleteAppointment(_this.auth.userId, i)
                            .subscribe(function (res) {
                            _this.presentToast('Delete successfully.');
                            _this.ap.getAppointment(_this.auth.userId)
                                .subscribe(function (app) { return _this.appointments = app; }, function (errmess) { return _this.errMess = errmess; });
                        }, function (err) { return _this.presentToast('Error: ' + err); });
                    }
                }
            ]
        });
        alert.present();
    };
    AppointmentPage.prototype.presentAlert = function (msg) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Oops!',
            message: msg,
            enableBackdropDismiss: false,
            buttons: [
                {
                    text: 'Ok',
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__welcome_welcome__["a" /* WelcomePage */]);
                    }
                }
            ]
        });
        alert.present();
    };
    AppointmentPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: false
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    AppointmentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-appointment',template:/*ion-inline-start:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/appointment/appointment.html"*/'<!--\n  Generated template for the AppointmentPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Appointment</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-list-header>My Appointments</ion-list-header>\n    <ion-item-sliding *ngFor="let appointment of appointments; let i = index">\n      <ion-item>\n        <h2>{{appointment.date | date}} at {{appointment.time}}</h2>\n        <h3>{{appointment.location}}</h3>\n        <p>{{appointment.firstname | titlecase}} {{appointment.lastname | titlecase}}</p>\n        <!-- <ion-note item-end>{{appointment.gender | titlecase}}</ion-note> -->\n      </ion-item>\n      <ion-item-options side="right" icon-start>\n        <button ion-button color="danger" (click)="deleteRecord(i)">\n          <ion-icon name="trash"></ion-icon>\n          Delete\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n  <div>\n    <button ion-button block (click)="addAppointment()">Schedule New One</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/appointment/appointment.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_3__providers_appointment_appointment__["a" /* AppointmentProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"]])
    ], AppointmentPage);
    return AppointmentPage;
}());

//# sourceMappingURL=appointment.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LabTestDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_question_question__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__welcome_welcome__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_question_control_question_control__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_health_records_health_records__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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








/**
 * Generated class for the LabTestDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LabTestDetailPage = (function () {
    function LabTestDetailPage(navCtrl, navParams, qp, qcp, auth, loadingCtrl, toastCtrl, alertCtrl, hrp) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.qp = qp;
        this.qcp = qcp;
        this.auth = auth;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.hrp = hrp;
        this.unit = [];
        this.showChart = false;
        this.tab = 'form';
        this.color = ['dark-salmon', 'rosy-brown', 'slate-grey'];
        this.data = [];
        this.date = [];
        this.results = [];
        this.abnormalColor = [];
        this.lineChartOptions = { responsive: true };
        this.lineChartLabels = [];
        this.lineChartLegend = true;
        this.lineChartType = 'line';
        this.charts = [];
        if (!this.auth.userId) {
            this.presentAlert('Please login first.');
        }
        this.title = navParams.get('title');
        var shortTitle;
        if (this.title.indexOf('(') != -1) {
            shortTitle = this.title.slice(0, this.title.indexOf('(') - 1);
        }
        else
            shortTitle = this.title;
        this.id = navParams.get('id');
        this.subtest = navParams.get('subtest');
        this.questions = this.qp.getLabTestQuestions(shortTitle);
        this.form = this.qcp.toFormGroup(this.questions);
        this.navcolor = this.color[(this.id + 1) % 3];
        // if (this.id == 2) {
        //   this.data = [
        //     {
        //       "subtest": "BMP (Basic Metabolic Panel)",
        //       "open": true,
        //       "unit": "mg/dL",
        //       "results": [
        //         {
        //           "result": "22",
        //           "abnormal": true,
        //           "note": 'XDXDXDXDXDXDXDXDXDXDXDXDXDXDXDXD',
        //           "date": "2011-12-10T17:57:28.556094Z"
        //         },
        //         {
        //           "result": "30",
        //           "abnormal": false,
        //           "note": ':):):)',
        //           "date": "2011-12-09T17:57:28.556094Z"
        //         },
        //         {
        //           "result": "40",
        //           "abnormal": false,
        //           "note": '',
        //           "date": "2011-12-08T17:57:28.556094Z"
        //         },
        //         {
        //           "result": "24",
        //           "abnormal": true,
        //           "note": ':D',
        //           "date": "2011-12-07T17:57:28.556094Z"
        //         },
        //         {
        //           "result": "18",
        //           "abnormal": true,
        //           "note": '',
        //           "date": "2011-12-06T02:08:21.199Z"
        //         },
        //         {
        //           "result": "26",
        //           "abnormal": false,
        //           "note": '',
        //           "date": "2011-12-05T02:14:16.365Z"
        //         },
        //         {
        //           "result": "36",
        //           "abnormal": false,
        //           "note": '',
        //           "date": "2011-12-04T02:30:10.570Z"
        //         },
        //         {
        //           "result": "45",
        //           "abnormal": false,
        //           "note": '',
        //           "date": "2011-12-03T02:52:17.718Z"
        //         },
        //         {
        //           "result": "35",
        //           "abnormal": false,
        //           "note": '',
        //           "date": "2011-12-02T01:38:47.452Z"
        //         }
        //       ]
        //     },
        //     {
        //       "subtest": "BMP 3",
        //       "open": false,
        //       "unit": "",
        //       "results": [
        //         {
        //           "result": "negative",
        //           "abnormal": true,
        //           "note": 'XDXDXDXDXDXDXDXDXDXDXDXDXDXDXDXD',
        //           "date": "2011-12-10T17:57:28.556094Z"
        //         },
        //         {
        //           "result": "positive",
        //           "abnormal": false,
        //           "note": ':):):)',
        //           "date": "2011-12-09T17:57:28.556094Z"
        //         },
        //         {
        //           "result": "positive",
        //           "abnormal": false,
        //           "note": '',
        //           "date": "2011-12-08T17:57:28.556094Z"
        //         }
        //       ]
        //     },
        //     {
        //       "subtest": "BMP (Basic Metabolic Panel) (Other)",
        //       "open": false,
        //       "unit": "mg/dL",
        //       "results": [
        //         {
        //           "result": "12",
        //           "abnormal": true,
        //           "note": 'XDXDXDXDXDXDXDXDXDXDXDXDXDXDXDXD',
        //           "date": "2011-12-10T17:57:28.556094Z"
        //         },
        //         {
        //           "result": "53",
        //           "abnormal": false,
        //           "note": ':):):)',
        //           "date": "2011-12-09T17:57:28.556094Z"
        //         },
        //         {
        //           "result": "88",
        //           "abnormal": false,
        //           "note": '',
        //           "date": "2011-12-08T17:57:28.556094Z"
        //         },
        //         {
        //           "result": "26",
        //           "abnormal": true,
        //           "note": ':D',
        //           "date": "2011-12-07T17:57:28.556094Z"
        //         },
        //         {
        //           "result": "40",
        //           "abnormal": true,
        //           "note": '',
        //           "date": "2011-12-06T02:08:21.199Z"
        //         },
        //         {
        //           "result": "30",
        //           "abnormal": false,
        //           "note": '',
        //           "date": "2011-12-05T02:14:16.365Z"
        //         }
        //       ]
        //     },
        //   ];
        // }
        // this.unit = [];
        // this.data.forEach(record => {
        //   this.unit.push(record.unit);
        // });
        // console.log(this.unit);
        // this.drawcanvas();
        // this.hrp.getLabtTest(this.auth.userId, this.id)
        //   .subscribe(records => {
        //     this.records = records;
        //     console.log(this.records);
        //     if (this.records.length != 0) {
        //       // set extension panel of first category in record history in 'open' status
        //       this.records[0]['open'] = true;
        //       for (let i = 1; i < this.records.length; i++) {
        //         this.records[i]['open'] = false;
        //       }
        //       //get unit array
        //       this.unit = [];
        //       this.records.forEach(record => {
        //         this.unit.push(record.unit);
        //       });
        //     }
        //     this.data = this.records;
        //     console.log(this.data);
        //     if (this.data.length != 0) this.drawcanvas();
        //   },
        //     errmess => this.errMess = <any>errmess);
    }
    LabTestDetailPage.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _a, i;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.hrp.getLabTest(this.auth.userId, this.id).toPromise()];
                    case 1:
                        _a.records = (_b.sent());
                        console.log(this.records);
                        if (this.records.length != 0) {
                            // set extension panel of first category in record history in 'open' status
                            this.records[0]['open'] = true;
                            for (i = 1; i < this.records.length; i++) {
                                this.records[i]['open'] = false;
                            }
                            this.unit = [];
                            this.records.forEach(function (record) {
                                // get unit array
                                _this.unit.push(record.unit);
                                // control chart display
                                if (record.unit.length != 0)
                                    _this.showChart = true;
                            });
                            console.log(this.showChart);
                        }
                        this.data = this.records;
                        console.log(this.data);
                        if (this.data.length != 0)
                            this.drawcanvas();
                        return [2 /*return*/];
                }
            });
        });
    };
    LabTestDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LabTestDetailPage');
    };
    LabTestDetailPage.prototype.drawcanvas = function () {
        var _this = this;
        this.charts = [];
        for (var i = 0; i < this.data.length; i++) {
            this.date = [];
            this.results = [];
            this.abnormalColor = [];
            if (this.data[i].unit.length != 0) {
                this.data[i].results.forEach(function (result) {
                    _this.date.push(__WEBPACK_IMPORTED_MODULE_6_moment__(result.date).format('MM/DD'));
                    _this.results.push(result.result);
                    if (result.abnormal == true)
                        _this.abnormalColor.push('red');
                    else
                        _this.abnormalColor.push('rgba(148,159,177,1)');
                });
                this.date.reverse();
                this.results.reverse();
                this.abnormalColor.reverse();
                console.log(this.abnormalColor);
                this.lineChartLabels = this.date;
                this.lineChartData = [{ data: this.results, label: this.data[i].subtest }];
                this.lineChartColors = [{
                        backgroundColor: 'rgba(148,159,177,0.2)',
                        borderColor: 'rgba(148,159,177,1)',
                        pointBackgroundColor: this.abnormalColor,
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: 'rgba(148,159,177,0.8)'
                    }];
                this.charts.push({
                    lineChartData: this.lineChartData,
                    lineChartLabels: this.lineChartLabels,
                    lineChartOptions: this.lineChartOptions,
                    lineChartColors: this.lineChartColors,
                    lineChartLegend: this.lineChartLegend,
                    lineChartType: this.lineChartType
                });
            }
            console.log(this.charts);
        }
    };
    LabTestDetailPage.prototype.toggleSection = function (i) {
        this.data[i].open = !this.data[i].open;
    };
    LabTestDetailPage.prototype.showNotes = function (i, j) {
        var alert = this.alertCtrl.create({
            message: 'Notes: ' + this.data[i].results[j].note,
            enableBackdropDismiss: true
        });
        alert.present();
    };
    LabTestDetailPage.prototype.chartHovered = function ($event) {
    };
    LabTestDetailPage.prototype.chartClicked = function ($event) {
    };
    LabTestDetailPage.prototype.onSubmit = function () {
        var _this = this;
        this.showLoader('Adding...');
        var payLoad = this.form.value;
        console.log(payLoad);
        this.hrp.addLabTest(this.auth.userId, this.id, payLoad)
            .subscribe(function (res) {
            _this.loading.dismiss();
            _this.presentToast('Successfully added!');
            _this.hrp.getLabTest(_this.auth.userId, _this.id)
                .subscribe(function (records) {
                _this.records = records;
                console.log(_this.records);
                if (_this.records.length != 0) {
                    // set extension panel of first category in record history in 'open' status
                    _this.records[0]['open'] = true;
                    for (var i = 1; i < _this.records.length; i++) {
                        _this.records[i]['open'] = false;
                    }
                    _this.unit = [];
                    _this.records.forEach(function (record) {
                        // get unit array
                        _this.unit.push(record.unit);
                        // control chart display
                        if (record.unit.length != 0)
                            _this.showChart = true;
                    });
                }
                _this.data = _this.records;
                console.log(_this.data);
                if (_this.data.length != 0)
                    _this.drawcanvas();
                _this.tab = 'history';
            }, function (errmess) { return _this.errMess = errmess; });
        }, function (err) {
            _this.loading.dismiss();
            _this.presentToast('Error: ' + err);
        });
    };
    LabTestDetailPage.prototype.deleteRecord = function (i, j) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirm Delete',
            message: 'Are you sure you want to delete this record?',
            enableBackdropDismiss: true,
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel'
                },
                {
                    text: 'Delete',
                    handler: function () {
                        _this.hrp.deleteLabTest(_this.auth.userId, _this.id, i, j)
                            .subscribe(function (res) {
                            _this.presentToast('Delete successfully.');
                            _this.hrp.getLabTest(_this.auth.userId, _this.id)
                                .subscribe(function (records) {
                                _this.records = records;
                                console.log(_this.records);
                                if (_this.records.length != 0) {
                                    // set extension panel of first category in record history in 'open' status
                                    _this.records[0]['open'] = true;
                                    for (var i_1 = 1; i_1 < _this.records.length; i_1++) {
                                        _this.records[i_1]['open'] = false;
                                    }
                                    _this.unit = [];
                                    _this.records.forEach(function (record) {
                                        // get unit array
                                        _this.unit.push(record.unit);
                                        // control chart display
                                        if (record.unit.length != 0)
                                            _this.showChart = true;
                                    });
                                }
                                _this.data = _this.records;
                                console.log(_this.data);
                                if (_this.data.length != 0)
                                    _this.drawcanvas();
                                _this.tab = 'history';
                            }, function (errmess) { return _this.errMess = errmess; });
                        }, function (err) { return _this.presentToast('Error: ' + err); });
                    }
                }
            ]
        });
        alert.present();
    };
    LabTestDetailPage.prototype.showLoader = function (msg) {
        this.loading = this.loadingCtrl.create({
            content: msg
        });
        this.loading.present();
    };
    LabTestDetailPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: false
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    LabTestDetailPage.prototype.presentAlert = function (msg) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Oops!',
            message: msg,
            enableBackdropDismiss: false,
            buttons: [
                {
                    text: 'Ok',
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__welcome_welcome__["a" /* WelcomePage */]);
                    }
                }
            ]
        });
        alert.present();
    };
    LabTestDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-lab-test-detail',template:/*ion-inline-start:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/lab-test-detail/lab-test-detail.html"*/'<!--\n  Generated template for the MedicalRecordDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar [color]="navcolor">\n    <ion-title>{{title | titlecase}}</ion-title>\n  </ion-navbar>\n\n  <ion-toolbar [color]="navcolor">\n    <ion-segment color="light" [(ngModel)]="tab">\n      <ion-segment-button value="form">\n        TRACK\n      </ion-segment-button>\n      <ion-segment-button value="history">\n        HISTORY\n      </ion-segment-button>\n      <ion-segment-button value="chart">\n        CHART\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div [ngSwitch]="tab">\n    <div *ngSwitchCase="\'form\'">\n      <ion-card>\n        <ion-card-content>\n          <div>\n            <form [formGroup]=\'form\' (ngSubmit)="onSubmit()">\n\n              <div *ngFor="let question of questions">\n                <ion-item>\n                  <dynamic-form-question [question]="question" [form]="form"></dynamic-form-question>\n                </ion-item>\n              </div>\n\n              <div>\n                <button ion-button type="submit" [disabled]="!form.valid" color="slate-grey">Record</button>\n              </div>\n\n            </form>\n          </div>\n        </ion-card-content>\n      </ion-card>\n    </div>\n    <div *ngSwitchCase="\'history\'">\n      <ion-list *ngIf="data.length!=0">\n        <ion-card *ngFor="let d of data; let i = index">\n          <ion-card-header>\n            <ion-item (click)="toggleSection(i)" no-padding>\n              <ion-label text-wrap>{{d.subtest}}</ion-label>\n              <ion-icon item-right name="arrow-forward" *ngIf="!d.open"></ion-icon>\n              <ion-icon item-right name="arrow-down" *ngIf="d.open"></ion-icon>\n            </ion-item>\n          </ion-card-header>\n          <ion-list *ngIf="d.open && d.results" no-padding>\n            <ion-item-sliding *ngFor="let r of d.results; let j = index">\n              <ion-item (click)="showNotes(i, j)">\n                <h3 *ngIf="!r.abnormal">{{r.result}} {{unit[i]}}</h3>\n                <h3 *ngIf="r.abnormal" style="color:red">{{r.result}} {{unit[i]}}</h3>\n                <ion-note item-right>{{r.date | date}}</ion-note>\n              </ion-item>\n              <ion-item-options side="right" icon-start>\n                <button ion-button color="danger" (click)="deleteRecord(i, j)">\n                  <ion-icon name="trash"></ion-icon>\n                  Delete\n                </button>\n              </ion-item-options>\n            </ion-item-sliding>\n          </ion-list>\n        </ion-card>\n      </ion-list>\n      <ion-card [hidden]="data.length!=0">\n        <ion-card-header>No record.</ion-card-header>\n      </ion-card>\n    </div>\n    <div *ngSwitchCase="\'chart\'">\n      <div *ngIf="showChart">\n        <div *ngFor="let chart of charts" style="display: block;">\n          <canvas baseChart [datasets]="chart.lineChartData" [labels]="chart.lineChartLabels" [options]="chart.lineChartOptions" [colors]="chart.lineChartColors"\n            [legend]="chart.lineChartLegend" [chartType]="chart.lineChartType" (chartHover)="chartHovered($event)" (chartClick)="chartClicked($event)"></canvas>\n        </div>\n      </div>\n      <ion-card [hidden]="showChart">\n        <ion-card-header>No record.</ion-card-header>\n      </ion-card>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/lab-test-detail/lab-test-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__providers_question_question__["a" /* QuestionProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_question_control_question_control__["a" /* QuestionControlProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_7__providers_health_records_health_records__["a" /* HealthRecordsProvider */]])
    ], LabTestDetailPage);
    return LabTestDetailPage;
}());

//# sourceMappingURL=lab-test-detail.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MedicationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__medication_detail_medication_detail__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__welcome_welcome__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_health_records_health_records__ = __webpack_require__(25);
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
 * Generated class for the MedicationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MedicationPage = (function () {
    function MedicationPage(navCtrl, navParams, modalCtrl, auth, alertCtrl, toastCtrl, hrp) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.hrp = hrp;
        this.records = [];
        if (!this.auth.userId) {
            this.presentAlert('Please login first.');
        }
        // this.records = [
        //   {
        //     name: 'Aspirin',
        //     frequency: 'Take 1 with food',
        //     date: '2018/02/08'
        //   },
        //   {
        //     name: 'Lyrica',
        //     frequency: '75mg, Take 1 with food',
        //     date: '2018/04/03'
        //   }
        // ];
        // get records
        this.hrp.getMedication(this.auth.userId)
            .subscribe(function (records) { return _this.records = records; }, function (errmess) { return _this.errMess = errmess; });
    }
    MedicationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MedicationPage');
    };
    MedicationPage.prototype.addMedication = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__medication_detail_medication_detail__["a" /* MedicationDetailPage */]);
        modal.present();
        modal.onWillDismiss(function () {
            _this.hrp.getMedication(_this.auth.userId)
                .subscribe(function (records) { return _this.records = records; }, function (errmess) { return _this.errMess = errmess; });
        });
    };
    MedicationPage.prototype.deleteRecord = function (i) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirm Delete',
            message: 'Are you sure you want to delete this record?',
            enableBackdropDismiss: true,
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel'
                },
                {
                    text: 'Delete',
                    handler: function () {
                        _this.hrp.deleteMedication(_this.auth.userId, i)
                            .subscribe(function (res) {
                            _this.presentToast('Delete successfully.');
                            _this.hrp.getMedication(_this.auth.userId)
                                .subscribe(function (records) { return _this.records = records; }, function (errmess) { return _this.errMess = errmess; });
                        }, function (err) { return _this.presentToast('Error: ' + err); });
                    }
                }
            ]
        });
        alert.present();
    };
    MedicationPage.prototype.presentAlert = function (msg) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Oops!',
            message: msg,
            enableBackdropDismiss: false,
            buttons: [
                {
                    text: 'Ok',
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__welcome_welcome__["a" /* WelcomePage */]);
                    }
                }
            ]
        });
        alert.present();
    };
    MedicationPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: false
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    MedicationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-medication',template:/*ion-inline-start:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/medication/medication.html"*/'<!--\n  Generated template for the MedicationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>MEDICATION</ion-title>\n  </ion-navbar>\n\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list *ngIf="records.length!=0">\n    <ion-list-header>Medication History</ion-list-header>\n    <ion-item-sliding *ngFor="let record of records; let i = index">\n      <ion-item>\n        <h3>Medication: {{record.name}}</h3>\n        <h3>Frequency: {{record.frequency}}</h3>\n        <p>Date: {{record.date | date}}</p>\n      </ion-item>\n      <ion-item-options side="right" icon-start>\n        <button ion-button color="danger" (click)="deleteRecord(i)">\n          <ion-icon name="trash"></ion-icon>\n          Delete\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n\n  <ion-card [hidden]="records.length!=0">\n    <ion-card-header>No medication record.</ion-card-header>\n  </ion-card>\n\n  <ion-fab right bottom>\n    <button ion-fab color="primary" (click)="addMedication()">\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/medication/medication.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_5__providers_health_records_health_records__["a" /* HealthRecordsProvider */]])
    ], MedicationPage);
    return MedicationPage;
}());

//# sourceMappingURL=medication.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImmunizationHistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__immunization_immunization__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__welcome_welcome__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_health_records_health_records__ = __webpack_require__(25);
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
 * Generated class for the ImmunizationHistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ImmunizationHistoryPage = (function () {
    function ImmunizationHistoryPage(navCtrl, navParams, auth, alertCtrl, toastCtrl, hrp) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.hrp = hrp;
        this.records = [];
        if (!this.auth.userId) {
            this.presentAlert('Please login first.');
        }
        // this.records = [
        //   {
        //     vaccine: 'MMR',
        //     schedule: '1 or 2 doses depending on indication',
        //     ageGroup: 'Adult',
        //     date: '2018/02/08',
        //     age: 30
        //   },
        //   {
        //     vaccine: 'Influenza',
        //     schedule: 'Annual vaccination (IIV) 1 or 2 doses',
        //     ageGroup: 'Child and Adolescent',
        //     date: '2018/04/15',
        //     age: 12
        //   }
        // ];
        // get records
        this.hrp.getImmunization(this.auth.userId)
            .subscribe(function (records) {
            _this.records = records;
            _this.records.forEach(function (record) {
                if (record.age > 18)
                    record['ageGroup'] = "Adult";
                else
                    record['ageGroup'] = "Child and Adolescent";
            });
        }, function (errmess) { return _this.errMess = errmess; });
    }
    ImmunizationHistoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ImmunizationHistoryPage');
    };
    ImmunizationHistoryPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.hrp.getImmunization(this.auth.userId)
            .subscribe(function (records) {
            _this.records = records;
            _this.records.forEach(function (record) {
                if (record.age > 18)
                    record['ageGroup'] = "Adult";
                else
                    record['ageGroup'] = "Child and Adolescent";
            });
        }, function (errmess) { return _this.errMess = errmess; });
    };
    ImmunizationHistoryPage.prototype.addImmunization = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__immunization_immunization__["a" /* ImmunizationPage */]);
    };
    ImmunizationHistoryPage.prototype.deleteRecord = function (i) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirm Delete',
            message: 'Are you sure you want to delete this record?',
            enableBackdropDismiss: true,
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel'
                },
                {
                    text: 'Delete',
                    handler: function () {
                        _this.hrp.deleteImmunization(_this.auth.userId, i)
                            .subscribe(function (res) {
                            _this.presentToast('Delete successfully.');
                            _this.hrp.getImmunization(_this.auth.userId)
                                .subscribe(function (records) {
                                _this.records = records;
                                _this.records.forEach(function (record) {
                                    if (record.age > 18)
                                        record['ageGroup'] = "Adult";
                                    else
                                        record['ageGroup'] = "Child and Adolescent";
                                });
                            }, function (errmess) { return _this.errMess = errmess; });
                        }, function (err) { return _this.presentToast('Error: ' + err); });
                    }
                }
            ]
        });
        alert.present();
    };
    ImmunizationHistoryPage.prototype.presentAlert = function (msg) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Oops!',
            message: msg,
            enableBackdropDismiss: false,
            buttons: [
                {
                    text: 'Ok',
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__welcome_welcome__["a" /* WelcomePage */]);
                    }
                }
            ]
        });
        alert.present();
    };
    ImmunizationHistoryPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: false
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    ImmunizationHistoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-immunization-history',template:/*ion-inline-start:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/immunization-history/immunization-history.html"*/'<!--\n  Generated template for the AllergyHistoryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>IMMUNIZATION</ion-title>\n  </ion-navbar>\n\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list *ngIf="records.length!=0">\n    <ion-list-header>Immunization History</ion-list-header>\n    <ion-item-sliding *ngFor="let record of records; let i = index">\n      <ion-item>\n        <div class="white-space">\n          <h3>Vaccine: {{record.vaccine}}</h3>\n          <h3 *ngIf="record.age.length!=0">Age: {{record.age}}</h3>\n          <h3 *ngIf="record.scheduledate.length!=0">Schedule Date: {{record.scheduledate | date: \'MMM yyyy\'}}</h3>\n          <h3>Note: {{record.note}}</h3>\n        </div>\n      </ion-item>\n      <ion-item-options side="right" icon-start>\n        <button ion-button color="danger" (click)="deleteRecord(i)">\n          <ion-icon name="trash"></ion-icon>\n          Delete\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n\n  <ion-card [hidden]="records.length!=0">\n    <ion-card-header>No immunization record.</ion-card-header>\n  </ion-card>\n\n  <ion-fab right bottom>\n    <button ion-fab color="primary" (click)="addImmunization()">\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/immunization-history/immunization-history.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_5__providers_health_records_health_records__["a" /* HealthRecordsProvider */]])
    ], ImmunizationHistoryPage);
    return ImmunizationHistoryPage;
}());

//# sourceMappingURL=immunization-history.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoctorVisitNotesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__doctor_visit_notes_detail_doctor_visit_notes_detail__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__welcome_welcome__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_health_records_health_records__ = __webpack_require__(25);
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
 * Generated class for the DoctorVisitNotesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DoctorVisitNotesPage = (function () {
    function DoctorVisitNotesPage(navCtrl, navParams, modalCtrl, auth, alertCtrl, toastCtrl, hrp) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.hrp = hrp;
        this.records = [];
        if (!this.auth.userId) {
            this.presentAlert('Please login first.');
        }
        // this.records = [
        //   {
        //     diagnosis: 'influenza',
        //     doctor: 'Aaric Falconi',
        //     prescription: 'Have some rest',
        //     date: '2018/05/21',
        //     reason: 'feel a headache'
        //   }
        // ];
        this.hrp.getDoctorVisitNotes(this.auth.userId)
            .subscribe(function (records) { return _this.records = records; }, function (errmess) { return _this.errMess = errmess; });
    }
    DoctorVisitNotesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DoctorVisitNotesPage');
    };
    DoctorVisitNotesPage.prototype.addNotes = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__doctor_visit_notes_detail_doctor_visit_notes_detail__["a" /* DoctorVisitNotesDetailPage */]);
        modal.present();
        modal.onWillDismiss(function () {
            _this.hrp.getDoctorVisitNotes(_this.auth.userId)
                .subscribe(function (records) { return _this.records = records; }, function (errmess) { return _this.errMess = errmess; });
        });
    };
    DoctorVisitNotesPage.prototype.deleteRecord = function (i) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirm Delete',
            message: 'Are you sure you want to delete this record?',
            enableBackdropDismiss: true,
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel'
                },
                {
                    text: 'Delete',
                    handler: function () {
                        _this.hrp.deleteDoctorVisitNotes(_this.auth.userId, i)
                            .subscribe(function (res) {
                            _this.presentToast('Delete successfully.');
                            _this.hrp.getDoctorVisitNotes(_this.auth.userId)
                                .subscribe(function (records) { return _this.records = records; }, function (errmess) { return _this.errMess = errmess; });
                        }, function (err) { return _this.presentToast('Error: ' + err); });
                    }
                }
            ]
        });
        alert.present();
    };
    DoctorVisitNotesPage.prototype.presentAlert = function (msg) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Oops!',
            message: msg,
            enableBackdropDismiss: false,
            buttons: [
                {
                    text: 'Ok',
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__welcome_welcome__["a" /* WelcomePage */]);
                    }
                }
            ]
        });
        alert.present();
    };
    DoctorVisitNotesPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: false
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    DoctorVisitNotesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-doctor-visit-notes',template:/*ion-inline-start:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/doctor-visit-notes/doctor-visit-notes.html"*/'<!--\n  Generated template for the DoctorVisitNotesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>DOCTOR VISIT NOTES</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list *ngIf="records.length!=0">\n    <ion-list-header>Doctor Visit Notes</ion-list-header>\n    <ion-item-sliding *ngFor="let record of records; let i = index">\n      <ion-item>\n        <p>{{record.date | date}}</p>\n        <h3>Diagnosis: {{record.diagnosis}}</h3>\n        <h3>Doctor: {{record.doctor}}</h3>\n        <h3>Prescription: {{record.prescription}}</h3>\n        <h3>Reason of Visit: {{record.reason}}</h3>\n      </ion-item>\n      <ion-item-options side="right" icon-start>\n        <button ion-button color="danger" (click)="deleteRecord(i)">\n          <ion-icon name="trash"></ion-icon>\n          Delete\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n\n  <ion-card [hidden]="records.length!=0">\n    <ion-card-header>No doctor visit notes.</ion-card-header>\n  </ion-card>\n\n  <ion-fab right bottom>\n    <button ion-fab color="primary" (click)="addNotes()">\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/doctor-visit-notes/doctor-visit-notes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_5__providers_health_records_health_records__["a" /* HealthRecordsProvider */]])
    ], DoctorVisitNotesPage);
    return DoctorVisitNotesPage;
}());

//# sourceMappingURL=doctor-visit-notes.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrackersProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__process_httpmsg_process_httpmsg__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_baseurl__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the TrackersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var TrackersProvider = (function () {
    function TrackersProvider(http, processHttpmsgService) {
        this.http = http;
        this.processHttpmsgService = processHttpmsgService;
        console.log('Hello TrackersProvider Provider');
    }
    TrackersProvider.prototype.getRecords = function (userid, id) {
        var _this = this;
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__shared_baseurl__["a" /* baseurl */] + 'trackers/' + id + '/' + userid)
            .catch(function (error) { return _this.processHttpmsgService.handleError(error); });
    };
    TrackersProvider.prototype.addRecord = function (userid, id, data) {
        var _this = this;
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__shared_baseurl__["a" /* baseurl */] + 'trackers/' + id + '/' + userid, data)
            .catch(function (error) { return _this.processHttpmsgService.handleError(error); });
    };
    TrackersProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__process_httpmsg_process_httpmsg__["a" /* ProcessHttpmsgProvider */]])
    ], TrackersProvider);
    return TrackersProvider;
}());

//# sourceMappingURL=trackers.js.map

/***/ })

},[406]);
//# sourceMappingURL=main.js.map