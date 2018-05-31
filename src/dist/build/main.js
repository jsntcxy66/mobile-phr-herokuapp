webpackJsonp([42],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_baseurl__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__process_httpmsg_process_httpmsg__ = __webpack_require__(47);
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
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__shared_baseurl__["a" /* baseurl */] + 'profile/' + id)
            .catch(function (error) { return _this.processHttpmsgService.handleError(error); });
    };
    UserProvider.prototype.editProfile = function (profile, id) {
        var _this = this;
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__shared_baseurl__["a" /* baseurl */] + 'profile/' + id, profile)
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

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllergyDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_question_question__ = __webpack_require__(15);
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
    function AllergyDetailPage(navCtrl, navParams, qp, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.qp = qp;
        this.viewCtrl = viewCtrl;
        this.color = ['dark-salmon', 'rosy-brown', 'slate-grey'];
        this.title = navParams.get('title');
        this.id = navParams.get('id');
        this.questions = qp.getAllergyQuestions();
        this.navcolor = this.color[(this.id - 1) % 3];
    }
    AllergyDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AllergyDetailPage');
    };
    AllergyDetailPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    AllergyDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-allergy-detail',template:/*ion-inline-start:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/allergy-detail/allergy-detail.html"*/'<!--\n  Generated template for the AllergyDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-toolbar [color]="navcolor">\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="white" showWhen="ios">Cancel</span>\n        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>{{title}}</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-content>\n      <dynamic-form [questions]="questions"></dynamic-form>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/allergy-detail/allergy-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__providers_question_question__["a" /* QuestionProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"]])
    ], AllergyDetailPage);
    return AllergyDetailPage;
}());

//# sourceMappingURL=allergy-detail.js.map

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllergyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_allergy_classification_allergy_classification__ = __webpack_require__(215);
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
        this.tiles = acp.getMenu(0);
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

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllergyHistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__allergy_allergy__ = __webpack_require__(125);
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
    function AllergyHistoryPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // get sorted records
        this.records = [
            {
                category: 'Food Allergy',
                trigger: 'Eggs',
                symptom: 'Shortness of breath',
                threatening: true,
                date: '2018/01/09'
            },
            {
                category: 'Pet Allergy',
                trigger: 'Cat',
                symptom: 'Sneezing',
                threatening: false,
                date: '2017/10/21'
            },
            {
                category: 'Drug Allergy',
                trigger: 'Penicillin and related antibiotics',
                symptom: 'Skin rash',
                threatening: false,
                date: '2017/12/12'
            }
        ];
    }
    AllergyHistoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AllergyHistoryPage');
    };
    AllergyHistoryPage.prototype.checkLifeThreatening = function (i) {
        return this.records[i].threatening;
    };
    AllergyHistoryPage.prototype.addAllergy = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__allergy_allergy__["a" /* AllergyPage */]);
    };
    AllergyHistoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-allergy-history',template:/*ion-inline-start:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/allergy-history/allergy-history.html"*/'<!--\n  Generated template for the AllergyHistoryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>ALLERGY</ion-title>\n  </ion-navbar>\n\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list *ngIf="records">\n    <ion-list-header>Allergy History</ion-list-header>\n    <ion-item *ngFor="let record of records; let i = index">\n      <div class="white-space">\n        <h3 *ngIf="checkLifeThreatening(i)">Symptom:\n          <span style="color:red">{{record.symptom}}</span>\n        </h3>\n        <h3 *ngIf="!checkLifeThreatening(i)">Symptom: {{record.symptom}}</h3>\n        <h3 *ngIf="checkLifeThreatening(i)">Trigger:\n          <span style="color:red">{{record.trigger}}</span>\n        </h3>\n        <h3 *ngIf="!checkLifeThreatening(i)">Trigger: {{record.trigger}}</h3>\n        <p>{{record.date | date}}</p>\n      </div>\n      <p item-end>{{record.category}}</p>\n    </ion-item>\n  </ion-list>\n\n  <ion-card [hidden]="records">\n    <ion-card-header>No allergy record.</ion-card-header>\n  </ion-card>\n\n  <ion-fab right bottom>\n    <button ion-fab color="primary" (click)="addAllergy()">\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/allergy-history/allergy-history.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], AllergyHistoryPage);
    return AllergyHistoryPage;
}());

//# sourceMappingURL=allergy-history.js.map

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppointmentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__appointment_add_appointments_appointment_add_appointments__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appointment_appointment__ = __webpack_require__(95);
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
    function AppointmentPage(navCtrl, navParams, modalCtrl, ap) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.ap = ap;
        this.appointments = [];
        this.userId = 1;
        this.appointments = [
            {
                date: "2018-06-01",
                time: "21:00",
                firstname: "Scott",
                lastname: "Williamson",
                location: "111 Fifth Ave"
            },
            {
                date: "2018-06-03",
                time: "10:30",
                firstname: "Aaric",
                lastname: "Falconi",
                location: "515 S Aiken Ave",
            },
            {
                date: "2018-06-19",
                time: "09:20",
                firstname: "Scott",
                lastname: "Williamson",
                location: "111 Fifth Ave"
            }
        ];
        //get appointments which have already been sorted by time
        this.ap.getAppointment(this.userId)
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
            _this.ap.getAppointment(_this.userId)
                .subscribe(function (app) { return _this.appointments = app; }, function (errmess) { return _this.errMess = errmess; });
        });
    };
    AppointmentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-appointment',template:/*ion-inline-start:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/appointment/appointment.html"*/'<!--\n  Generated template for the AppointmentPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Appointment</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-list-header>My Appointments</ion-list-header>\n    <ion-item *ngFor="let appointment of appointments">\n      <h2>{{appointment.date | date}} at {{appointment.time}}</h2>\n      <h3>{{appointment.location}}</h3>\n      <p>{{appointment.firstname | titlecase}} {{appointment.lastname | titlecase}}</p>\n      <!-- <ion-note item-end>{{appointment.gender | titlecase}}</ion-note> -->\n    </ion-item>\n  </ion-list>\n  <div>\n    <button ion-button block (click)="addAppointment()">Schedule New One</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/appointment/appointment.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_3__providers_appointment_appointment__["a" /* AppointmentProvider */]])
    ], AppointmentPage);
    return AppointmentPage;
}());

//# sourceMappingURL=appointment.js.map

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppointmentAddAppointmentsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_add_contacts_contact_add_contacts__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_contacts_contacts__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_appointment_appointment__ = __webpack_require__(95);
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
 * Generated class for the AppointmentAddAppointmentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AppointmentAddAppointmentsPage = (function () {
    function AppointmentAddAppointmentsPage(navCtrl, navParams, modalCtrl, fb, viewCtrl, toastCtrl, contactsProvider, ap) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.fb = fb;
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.contactsProvider = contactsProvider;
        this.ap = ap;
        this.doctors = [];
        this.locations = [];
        this.userId = 1;
        //get doctors in such structure
        this.contactsProvider.getDoctors(this.userId)
            .subscribe(function (doctors) { return _this.doctors = doctors; }, function (errmess) { return _this.errMess = errmess; });
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
        modal.onWillDismiss(function () {
            _this.contactsProvider.getDoctors(_this.userId)
                .subscribe(function (doctors) { return _this.doctors = doctors; }, function (errmess) { return _this.errMess = errmess; });
        });
        this.dismiss();
    };
    AppointmentAddAppointmentsPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    AppointmentAddAppointmentsPage.prototype.onSubmit = function () {
        var _this = this;
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
        this.ap.addAppointment(app, this.userId)
            .subscribe(function (app) {
            _this.toastCtrl.create({
                message: 'Successfully added a new appointment',
                position: 'bottom',
                duration: 2000
            }).present();
            _this.viewCtrl.dismiss();
        }, function (error) {
            _this.toastCtrl.create({
                message: 'Failed to add a new appointment',
                position: 'bottom',
                duration: 2000
            }).present();
        });
    };
    AppointmentAddAppointmentsPage.prototype.check_valid = function () {
        if (this.date == undefined)
            return false;
        else
            return true;
    };
    AppointmentAddAppointmentsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-appointment-add-appointments',template:/*ion-inline-start:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/appointment-add-appointments/appointment-add-appointments.html"*/'<!--\n  Generated template for the AppointmentAddAppointmentsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-toolbar color="primary">\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="white" showWhen="ios">Cancel</span>\n        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>New Appointment</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-list-header>Choose a Date</ion-list-header>\n    <ion-card>\n      <calendar (selectDate)="selectDate($event)"></calendar>\n    </ion-card>\n  </ion-list>\n  <form [formGroup]="newAppointmentForm" (ngSubmit)="onSubmit()">\n    <ion-list>\n      <ion-list-header>Choose the time</ion-list-header>\n      <ion-item>\n        <ion-label fixed>Time</ion-label>\n        <ion-datetime displayFormat="hh:mm A" formControlName="time"></ion-datetime>\n      </ion-item>\n    </ion-list>\n    <ion-list radio-group formControlName="doctor">\n      <ion-list-header>Choose one doctor</ion-list-header>\n      <ion-item *ngFor="let doctor of doctors">\n        <ion-label>\n          <h2>{{doctor.firstname | titlecase}} {{doctor.lastname | titlecase}}</h2>\n        </ion-label>\n        <ion-radio value="{{doctor.id}}" (ionSelect)="selectDoctor($event)"></ion-radio>\n      </ion-item>\n      <div *ngIf="!doctors || doctors==\'\'">\n        <ion-item>\n          <h2>No Doctor Record!</h2>\n          <button ion-button block type="button" (click)="addContact()">Add Contacts</button>\n        </ion-item>\n      </div>\n    </ion-list>\n    <ion-list radio-group formControlName="location">\n      <ion-list-header>Choose one Location</ion-list-header>\n      <ion-item *ngFor="let location of locations">\n        <ion-label>\n          <h2>{{location}}</h2>\n        </ion-label>\n        <ion-radio value="{{location}}"></ion-radio>\n      </ion-item>\n    </ion-list>\n    <button ion-button block type="submit" [disabled]="!check_valid() || !newAppointmentForm.valid">Create</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/appointment-add-appointments/appointment-add-appointments.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_4__providers_contacts_contacts__["a" /* ContactsProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_appointment_appointment__["a" /* AppointmentProvider */]])
    ], AppointmentAddAppointmentsPage);
    return AppointmentAddAppointmentsPage;
}());

//# sourceMappingURL=appointment-add-appointments.js.map

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_call_number__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_contacts_contacts__ = __webpack_require__(58);
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
    function ContactDetailPage(navCtrl, navParams, call, storage, contactsProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.call = call;
        this.storage = storage;
        this.contactsProvider = contactsProvider;
        this.contacts = [];
        this.tel = [];
        this.fax = [];
        this.category = this.navParams.get('name');
        console.log(this.category);
        // get userId from local storage
        // this.storage.get('id').then(id => {
        //   if (id) {
        //     this.userId = id;
        //   } else {
        //     console.log('UserId not defined');
        //   }
        // });
        this.userId = 1;
        this.contacts = [
            {
                firstname: "Aaric",
                lastname: "Falconi",
                tel: "4123457680",
                fax: "4123457680",
                relation: "",
                specialization: "physician",
                location1: "5542 Walnut St",
                location2: "5819 Elwood St",
                location3: "1001 Fifth Ave",
                group: "friends,doctors"
            },
            {
                firstname: "Alivia",
                lastname: "Ryan",
                tel: "4123457680",
                fax: "",
                relation: "husband",
                specialization: "",
                location1: "999 N Negley Str",
                location2: "",
                location3: "",
                group: "family,emergency"
            },
            {
                firstname: "Martin",
                lastname: "DOUGLAS",
                tel: "4123457680",
                fax: "",
                relation: "father",
                specialization: "",
                location1: "132 Centre Ave",
                location2: "",
                location3: "",
                group: "family"
            },
            {
                firstname: "Scott",
                lastname: "Williamson",
                tel: "4123457680",
                fax: "4123457680",
                relation: "",
                specialization: "dermatologist",
                location1: "1100 Fifth Ave",
                location2: "1090 Centre Ave",
                location3: "",
                group: "doctors"
            },
        ];
        // get all contacts' data
        this.contactsProvider.getContactsDetail(this.userId)
            .subscribe(function (contacts) { return _this.contacts = contacts; }, function (errmess) { return _this.errMess = errmess; });
        this.getTelArray();
        this.getFaxArray();
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
            if (groups[j] == "doctors")
                return true;
        }
        return false;
    };
    ContactDetailPage.prototype.callNumber = function (i) {
        this.call.callNumber(this.contacts[i].tel, true)
            .then(function (res) { return console.log('Launched dialer!', res); })
            .catch(function (err) { return console.log('Error launching dialer', err); });
    };
    ContactDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-contact-detail',template:/*ion-inline-start:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/contact-detail/contact-detail.html"*/'<!--\n  Generated template for the ContactDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Contacts</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list *ngFor="let contact of contacts; let i = index">\n    <div *ngIf="isCategory(i)">\n      <ion-list-header>{{contact.firstname}} {{contact.lastname}}</ion-list-header>\n      <ion-item>\n        Tel: {{tel[i]}}\n        <ion-icon item-end name="call" (click)="callNumber(i)"></ion-icon>\n      </ion-item>\n      <ion-item *ngIf="contact.fax&&contact.fax!=\'\'">Fax: {{fax[i]}}</ion-item>\n      <ion-item *ngIf="checkDoctor(i)">Specialization: {{contact.specialization}}</ion-item>\n      <ion-item *ngIf="!((contact.location2&&contact.location2!=\'\') || (contact.location3&&contact.location3!=\'\'))">Address: {{contact.location1}}</ion-item>\n      <ion-item *ngIf="(contact.location2&&contact.location2!=\'\') || (contact.location3&&contact.location3!=\'\')">Address1: {{contact.location1}}</ion-item>\n      <ion-item *ngIf="contact.location2&&contact.location2!=\'\'">Address2: {{contact.location2}}</ion-item>\n      <ion-item *ngIf="contact.location3&&contact.location3!=\'\'">Address3: {{contact.location3}}</ion-item>\n      <ion-item *ngIf="checkFamilyorEmergency(i)">Relation: {{contact.relation}}</ion-item>\n    </div>\n  </ion-list>\n  <!-- <ion-card [hidden]="matchCategory">\n    <ion-card-header>\n      No record!\n    </ion-card-header>\n  </ion-card> -->\n</ion-content>\n'/*ion-inline-end:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/contact-detail/contact-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_call_number__["a" /* CallNumber */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4__providers_contacts_contacts__["a" /* ContactsProvider */]])
    ], ContactDetailPage);
    return ContactDetailPage;
}());

//# sourceMappingURL=contact-detail.js.map

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateTrackerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_storage__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__customtracker_customtracker__ = __webpack_require__(131);
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

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomtrackerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_trackers_trackers__ = __webpack_require__(56);
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
        var _this = this;
        this.trackerService.getMytrackers()
            .subscribe(function (mytrackers) {
            mytrackers.sort(function (a, b) {
                var shortdate_a = new Date(new Date(a.date).getFullYear(), new Date(a.date).getMonth() - 1, new Date(a.date).getDate());
                var shortdate_b = new Date(new Date(b.date).getFullYear(), new Date(b.date).getMonth() - 1, new Date(b.date).getDate());
                if (shortdate_a > shortdate_b) {
                    return -1;
                }
                if (shortdate_a < shortdate_b) {
                    return 1;
                }
            });
            _this.mytrackers = mytrackers;
        }, function (errmess) { return _this.errMess = errmess; });
    };
    CustomtrackerPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CustomtrackerPage');
    };
    CustomtrackerPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        console.log('Begin async operation', refresher);
        setTimeout(function () {
            _this.trackerService.getMytrackers()
                .subscribe(function (mytrackers) {
                mytrackers.sort(function (a, b) {
                    var shortdate_a = new Date(new Date(a.date).getFullYear(), new Date(a.date).getMonth() - 1, new Date(a.date).getDate());
                    var shortdate_b = new Date(new Date(b.date).getFullYear(), new Date(b.date).getMonth() - 1, new Date(b.date).getDate());
                    if (shortdate_a > shortdate_b) {
                        return -1;
                    }
                    if (shortdate_a < shortdate_b) {
                        return 1;
                    }
                });
                _this.mytrackers = mytrackers;
            }, function (errmess) { return _this.errMess = errmess; });
            console.log('Async operation has ended');
            refresher.complete();
        }, 1500);
    };
    CustomtrackerPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    CustomtrackerPage.prototype.onSubmit = function () {
        this.mytracker = this.myForm.value;
        this.trackerService.addMytracker(this.mytracker);
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

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_detail_contact_detail__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contact_add_contacts_contact_add_contacts__ = __webpack_require__(64);
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
                category: 'Friends',
                name: 'friends'
            },
            {
                category: 'Family Members',
                name: 'family'
            },
            {
                category: 'Doctors',
                name: 'doctors'
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

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomPanelPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__create_tracker_create_tracker__ = __webpack_require__(130);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// import { CustomtrackerPage } from './../customtracker/customtracker';





/**
 * Generated class for the CustomPanelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CustomPanelPage = (function () {
    function CustomPanelPage(navCtrl, navParams, fb, viewCtrl, storage, modalCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fb = fb;
        this.viewCtrl = viewCtrl;
        this.storage = storage;
        this.modalCtrl = modalCtrl;
        this.formgrouparray = [];
        this.panels = navParams.data;
        this.formgroupvalue = {
            food: this.panels.food,
            exercise: this.panels.exercise,
            weight: this.panels.weight,
            height: this.panels.height
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
    CustomPanelPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CustomPanelPage');
    };
    CustomPanelPage.prototype.onSubmit = function () {
        this.panels = this.custompanel.value;
        this.storage.set('panels', this.panels);
        console.log(this.panels);
        this.viewCtrl.dismiss(this.panels);
    };
    CustomPanelPage.prototype.createTracker = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__create_tracker_create_tracker__["a" /* CreateTrackerPage */]);
        modal.present();
        modal.onDidDismiss(function (mytracker) {
            console.log(mytracker);
            _this.storage.set('mytracker', mytracker);
        });
    };
    CustomPanelPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-custom-panel',template:/*ion-inline-start:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/custom-panel/custom-panel.html"*/'<!--\n  Generated template for the CustomPanelPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<form [formGroup]=\'custompanel\' (ngSubmit)="onSubmit()">\n  <ion-list no-lines>\n    <ion-list-header>Custom Panel</ion-list-header>\n    <ion-item *ngFor="let f of formgrouparray">\n      <ion-label>{{f.name | titlecase}}</ion-label>\n      <ion-checkbox formControlName="{{f.name}}"></ion-checkbox>\n    </ion-item>\n    <button ion-button clear type="submit">OK</button>\n    <!-- <button ion-button clear (click)="createTracker()">Create My Tracker</button> -->\n  </ion-list>\n</form>\n'/*ion-inline-end:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/custom-panel/custom-panel.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"]])
    ], CustomPanelPage);
    return CustomPanelPage;
}());

//# sourceMappingURL=custom-panel.js.map

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiagnosticProcedurePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
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
    function DiagnosticProcedurePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DiagnosticProcedurePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DiagnosticProcedurePage');
    };
    DiagnosticProcedurePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-diagnostic-procedure',template:/*ion-inline-start:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/diagnostic-procedure/diagnostic-procedure.html"*/'<!--\n  Generated template for the DiagnosticProcedurePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Diagnostic Procedure</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/diagnostic-procedure/diagnostic-procedure.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], DiagnosticProcedurePage);
    return DiagnosticProcedurePage;
}());

//# sourceMappingURL=diagnostic-procedure.js.map

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoctorVisitNotesDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_question_question__ = __webpack_require__(15);
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
 * Generated class for the DoctorVisitNotesDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DoctorVisitNotesDetailPage = (function () {
    function DoctorVisitNotesDetailPage(navCtrl, navParams, qp, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.qp = qp;
        this.viewCtrl = viewCtrl;
        this.questions = qp.getDoctorVisitNotesQuestions();
    }
    DoctorVisitNotesDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DoctorVisitNotesDetailPage');
    };
    DoctorVisitNotesDetailPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    DoctorVisitNotesDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-doctor-visit-notes-detail',template:/*ion-inline-start:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/doctor-visit-notes-detail/doctor-visit-notes-detail.html"*/'<!--\n  Generated template for the DoctorVisitNotesDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-toolbar color="primary">\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="white" showWhen="ios">Cancel</span>\n        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Add Visit Notes</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-content>\n      <dynamic-form [questions]="questions"></dynamic-form>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/doctor-visit-notes-detail/doctor-visit-notes-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__providers_question_question__["a" /* QuestionProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"]])
    ], DoctorVisitNotesDetailPage);
    return DoctorVisitNotesDetailPage;
}());

//# sourceMappingURL=doctor-visit-notes-detail.js.map

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoctorVisitNotesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__doctor_visit_notes_detail_doctor_visit_notes_detail__ = __webpack_require__(135);
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
    function DoctorVisitNotesPage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.records = [
            {
                diagnosis: 'influenza',
                doctor: 'Aaric Falconi',
                prescription: 'Have some rest',
                date: '2018/05/21',
                reason: 'feel a headache'
            }
        ];
    }
    DoctorVisitNotesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DoctorVisitNotesPage');
    };
    DoctorVisitNotesPage.prototype.addNotes = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__doctor_visit_notes_detail_doctor_visit_notes_detail__["a" /* DoctorVisitNotesDetailPage */]);
        modal.present();
    };
    DoctorVisitNotesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-doctor-visit-notes',template:/*ion-inline-start:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/doctor-visit-notes/doctor-visit-notes.html"*/'<!--\n  Generated template for the DoctorVisitNotesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>DOCTOR VISIT NOTES</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list *ngIf="records">\n    <ion-list-header>Doctor Visit Notes</ion-list-header>\n    <ion-item *ngFor="let record of records">\n      <p>{{record.date | date}}</p>\n      <h3>Diagnosis: {{record.diagnosis}}</h3>\n      <h3>Doctor: {{record.doctor}}</h3>\n      <h3>Prescription: {{record.prescription}}</h3>\n      <h3>Reason of Visit: {{record.reason}}</h3>\n    </ion-item>\n  </ion-list>\n\n  <ion-card [hidden]="records">\n    <ion-card-header>No doctor visit notes.</ion-card-header>\n  </ion-card>\n\n  <ion-fab right bottom>\n    <button ion-fab color="primary" (click)="addNotes()">\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/doctor-visit-notes/doctor-visit-notes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"]])
    ], DoctorVisitNotesPage);
    return DoctorVisitNotesPage;
}());

//# sourceMappingURL=doctor-visit-notes.js.map

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FamilyHistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__family_history_detail_family_history_detail__ = __webpack_require__(138);
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
    function FamilyHistoryPage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        // get sorted records
        this.records = [
            {
                relationship: 'Father',
                name: 'Martin Perkins',
                alive: true,
                disease: 'diabetes',
                date: '2008/08/26'
            },
            {
                relationship: 'Sister',
                name: 'Ross Perkins',
                alive: true,
                disease: 'hypertension',
                date: '2017/02/19'
            }
        ];
    }
    FamilyHistoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FamilyHistoryPage');
    };
    FamilyHistoryPage.prototype.addFamilyHistory = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__family_history_detail_family_history_detail__["a" /* FamilyHistoryDetailPage */]);
        modal.present();
    };
    FamilyHistoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-family-history',template:/*ion-inline-start:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/family-history/family-history.html"*/'<!--\n  Generated template for the FamilyHistoryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>FAMILY HISTORY</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list *ngIf="records">\n    <ion-list-header>Family History</ion-list-header>\n    <ion-item *ngFor="let record of records; let i = index">\n      <div class="white-space">\n        <h3 *ngIf="record.name">Name: {{record.name | titlecase}}</h3>\n        <h3>Disease: {{record.disease}}</h3>\n        <p>{{record.date | date}}</p>\n      </div>\n      <p item-end>{{record.relationship}}</p>\n    </ion-item>\n  </ion-list>\n\n  <ion-card [hidden]="records">\n    <ion-card-header>No family history record.</ion-card-header>\n  </ion-card>\n\n  <ion-fab right bottom>\n    <button ion-fab color="primary" (click)="addFamilyHistory()">\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/family-history/family-history.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"]])
    ], FamilyHistoryPage);
    return FamilyHistoryPage;
}());

//# sourceMappingURL=family-history.js.map

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FamilyHistoryDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_question_question__ = __webpack_require__(15);
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
    function FamilyHistoryDetailPage(navCtrl, navParams, qp, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.qp = qp;
        this.viewCtrl = viewCtrl;
        this.questions = qp.getFamilyHistoryQuestions();
    }
    FamilyHistoryDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FamilyHistoryDetailPage');
    };
    FamilyHistoryDetailPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    FamilyHistoryDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-family-history-detail',template:/*ion-inline-start:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/family-history-detail/family-history-detail.html"*/'<!--\n  Generated template for the FamilyHistoryDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-toolbar color="primary">\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="white" showWhen="ios">Cancel</span>\n        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Add Family History</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-content>\n      <dynamic-form [questions]="questions"></dynamic-form>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/family-history-detail/family-history-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__providers_question_question__["a" /* QuestionProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"]])
    ], FamilyHistoryDetailPage);
    return FamilyHistoryDetailPage;
}());

//# sourceMappingURL=family-history-detail.js.map

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImmunizationDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_question_question__ = __webpack_require__(15);
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
    function ImmunizationDetailPage(navCtrl, navParams, qp, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.qp = qp;
        this.viewCtrl = viewCtrl;
        this.color = ['dark-salmon', 'rosy-brown', 'slate-grey'];
        this.title = navParams.get('title');
        this.id = navParams.get('id');
        this.questions = qp.getImmunizationQuestions();
        this.navcolor = this.color[(this.id - 1) % 3];
    }
    ImmunizationDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ImmunizationDetailPage');
    };
    ImmunizationDetailPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ImmunizationDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-immunization-detail',template:/*ion-inline-start:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/immunization-detail/immunization-detail.html"*/'<!--\n  Generated template for the ImmunizationDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-toolbar [color]="navcolor">\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="white" showWhen="ios">Cancel</span>\n        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>{{title}}</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-content>\n      <dynamic-form [questions]="questions"></dynamic-form>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/immunization-detail/immunization-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__providers_question_question__["a" /* QuestionProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"]])
    ], ImmunizationDetailPage);
    return ImmunizationDetailPage;
}());

//# sourceMappingURL=immunization-detail.js.map

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImmunizationHistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__immunization_immunization__ = __webpack_require__(141);
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
    function ImmunizationHistoryPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        //get records
        this.records = [
            {
                vaccine: 'MMR',
                schedule: '1 or 2 doses depending on indication',
                ageGroup: 'Adult',
                date: '2018/02/08'
            },
            {
                vaccine: 'Influenza',
                schedule: 'Annual vaccination (IIV) 1 or 2 doses',
                ageGroup: 'Child and Adolescent',
                date: '2018/04/15'
            }
        ];
    }
    ImmunizationHistoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ImmunizationHistoryPage');
    };
    ImmunizationHistoryPage.prototype.addImmunization = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__immunization_immunization__["a" /* ImmunizationPage */]);
    };
    ImmunizationHistoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-immunization-history',template:/*ion-inline-start:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/immunization-history/immunization-history.html"*/'<!--\n  Generated template for the AllergyHistoryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>IMMUNIZATION</ion-title>\n  </ion-navbar>\n\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list *ngIf="records">\n    <ion-list-header>Immunization History</ion-list-header>\n    <ion-item *ngFor="let record of records">\n      <div class="white-space">\n        <h3>Vaccine: {{record.vaccine}}</h3>\n        <h3>Schedule: {{record.schedule}}</h3>\n        <p>Date: {{record.date}}</p>\n      </div>\n      <p item-end>{{record.ageGroup}}</p>\n    </ion-item>\n  </ion-list>\n\n  <ion-card [hidden]="records">\n    <ion-card-header>No immunization record.</ion-card-header>\n  </ion-card>\n\n  <ion-fab right bottom>\n    <button ion-fab color="primary" (click)="addImmunization()">\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/immunization-history/immunization-history.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], ImmunizationHistoryPage);
    return ImmunizationHistoryPage;
}());

//# sourceMappingURL=immunization-history.js.map

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImmunizationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_immunization_classification_immunization_classification__ = __webpack_require__(218);
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
        this.tiles = icp.getMenu(0);
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

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dashboard_dashboard__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(8);
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
    function LoginPage(navCtrl, navParams, fb, menuCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fb = fb;
        this.menuCtrl = menuCtrl;
        this.loginForm = this.fb.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required]
        });
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.ionViewWillEnter = function () {
        this.menuCtrl.enable(false);
    };
    LoginPage.prototype.onSubmit = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__dashboard_dashboard__["a" /* DashboardPage */]);
        this.menuCtrl.enable(true);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>LOGIN</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form [formGroup]=\'loginForm\' (ngSubmit)="onSubmit()">\n    <ion-item>\n      <ion-label floating>Username</ion-label>\n      <ion-input type="text" formControlName="username"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Password</ion-label>\n      <ion-input type="password" formControlName="password"></ion-input>\n    </ion-item>\n    <button ion-button block class="btn" type="submit" [disabled]="!loginForm.valid">Signin</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["MenuController"]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MedicalHistoryDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_question_question__ = __webpack_require__(15);
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
    function MedicalHistoryDetailPage(navCtrl, navParams, qp, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.qp = qp;
        this.viewCtrl = viewCtrl;
        this.questions = qp.getMedicalHistoryQuestions();
    }
    MedicalHistoryDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MedicalHistoryDetailPage');
    };
    MedicalHistoryDetailPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    MedicalHistoryDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-medical-history-detail',template:/*ion-inline-start:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/medical-history-detail/medical-history-detail.html"*/'<!--\n  Generated template for the MedicalHistoryDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-toolbar color="primary">\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="white" showWhen="ios">Cancel</span>\n        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Add Medical History</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-content>\n      <dynamic-form [questions]="questions"></dynamic-form>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/medical-history-detail/medical-history-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__providers_question_question__["a" /* QuestionProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"]])
    ], MedicalHistoryDetailPage);
    return MedicalHistoryDetailPage;
}());

//# sourceMappingURL=medical-history-detail.js.map

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MedicalHistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__medical_history_detail_medical_history_detail__ = __webpack_require__(143);
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
    function MedicalHistoryPage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        // get sorted records
        this.records = [
            {
                diagnosis: 'diabetes',
                date: '2008/08/26'
            },
            {
                diagnosis: 'hypertension',
                date: '2017/02/19'
            }
        ];
    }
    MedicalHistoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MedicalHistoryPage');
    };
    MedicalHistoryPage.prototype.addMedicalHistory = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__medical_history_detail_medical_history_detail__["a" /* MedicalHistoryDetailPage */]);
        modal.present();
    };
    MedicalHistoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-medical-history',template:/*ion-inline-start:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/medical-history/medical-history.html"*/'<!--\n  Generated template for the MedicalHistoryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>MEDICAL HISTORY</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list *ngIf="records">\n    <ion-list-header>My Medical History</ion-list-header>\n    <ion-item *ngFor="let record of records">\n      <div class="white-space">\n        <h3>Diagnosis: {{record.diagnosis}}</h3>\n        <p>{{record.date | date}}</p>\n      </div>\n    </ion-item>\n  </ion-list>\n\n  <ion-card [hidden]="records">\n    <ion-card-header>No medical history record.</ion-card-header>\n  </ion-card>\n\n  <ion-fab right bottom>\n    <button ion-fab color="primary" (click)="addMedicalHistory()">\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/medical-history/medical-history.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"]])
    ], MedicalHistoryPage);
    return MedicalHistoryPage;
}());

//# sourceMappingURL=medical-history.js.map

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MedicalrecordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_medical_classification_medical_classification__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__medical_record_detail_medical_record_detail__ = __webpack_require__(65);
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
 * Generated class for the MedicalrecordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MedicalrecordPage = (function () {
    function MedicalrecordPage(navCtrl, navParams, mcp) {
        // get default Main Menu
        // this.tiles = mcp.getMenu(0);
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.mcp = mcp;
        this.list = [
            {
                initial: "A",
                category: ["ANA", "Antigenic"]
            },
            {
                initial: "B",
                category: ["BMP (Basic Metabolic Panel)"]
            },
            {
                initial: "C",
                category: ["CBC (Complete Blood Count)", "CMP (Comprehensive Metabolic Panel)"]
            },
            {
                initial: "E",
                category: ["ESR (Sedimentation Rate)"]
            },
            {
                initial: "F",
                category: ["Flu (Influenza A and B Screen)"]
            },
            {
                initial: "G",
                category: ["Glycohemoglobin (Hemoglobin A1C)", "Glucose Level"]
            },
            {
                initial: "H",
                category: ["hCG", "HIV Antibody (HIV 1/2 Ag/Ab 4th Generation with Reflex)"]
            },
            {
                initial: "L",
                category: ["Lipid Panel (or Lipid Profile)", "Liver Function Panel (LFT)", "Lyme Antibody w/Reflex Immunoblot"]
            },
        ];
    }
    MedicalrecordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MedicalrecordPage');
    };
    MedicalrecordPage.prototype.goToCategory = function (i, j) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__medical_record_detail_medical_record_detail__["a" /* MedicalRecordDetailPage */], {
            'id': j,
            'title': this.list[i].category[j]
        });
    };
    MedicalrecordPage.prototype.goToOtherTest = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__medical_record_detail_medical_record_detail__["a" /* MedicalRecordDetailPage */], {
            'id': 0,
            'title': 'Other Tests'
        });
    };
    MedicalrecordPage.prototype.goToHome = function (ev) {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard__["a" /* DashboardPage */]);
        this.navCtrl.popToRoot();
    };
    MedicalrecordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-medicalrecord',template:/*ion-inline-start:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/medicalrecord/medicalrecord.html"*/'<!--\n  Generated template for the MedicalrecordPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Lab Test</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <!-- <tile [tiles]="tiles"></tile> -->\n<ion-list>\n  <ion-list-header>Common Tests</ion-list-header>\n  <ion-item-group *ngFor="let l of list; let i = index">\n    <ion-item-divider color="light">{{l.initial}}</ion-item-divider>\n    <div *ngFor="let c of l.category; let j = index">\n      <ion-item (click)="goToCategory(i,j)" text-wrap>{{c}}</ion-item>\n    </div>\n  </ion-item-group>\n</ion-list>\n<ion-list>\n  <ion-list-header>Other Tests</ion-list-header>\n  <button ion-item color="light" (click)="goToOtherTest()">Add other tests\' records</button>\n</ion-list>\n\n  <ion-fab right bottom>\n    <button ion-fab color="primary" (click)="goToHome($event)">\n      <ion-icon name="home"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/medicalrecord/medicalrecord.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_medical_classification_medical_classification__["a" /* MedicalClassificationProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__providers_medical_classification_medical_classification__["a" /* MedicalClassificationProvider */]])
    ], MedicalrecordPage);
    return MedicalrecordPage;
}());

//# sourceMappingURL=medicalrecord.js.map

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MedicationDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_question_question__ = __webpack_require__(15);
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
    function MedicationDetailPage(navCtrl, navParams, qp, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.qp = qp;
        this.viewCtrl = viewCtrl;
        this.questions = qp.getMedicationQuestions();
    }
    MedicationDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MedicationDetailPage');
    };
    MedicationDetailPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    MedicationDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-medication-detail',template:/*ion-inline-start:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/medication-detail/medication-detail.html"*/'<!--\n  Generated template for the MedicationDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-toolbar color="primary">\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="white" showWhen="ios">Cancel</span>\n        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Add Medication</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-content>\n      <dynamic-form [questions]="questions"></dynamic-form>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/medication-detail/medication-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__providers_question_question__["a" /* QuestionProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"]])
    ], MedicationDetailPage);
    return MedicationDetailPage;
}());

//# sourceMappingURL=medication-detail.js.map

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MedicationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__medication_detail_medication_detail__ = __webpack_require__(146);
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
    function MedicationPage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        //get records
        this.records = [
            {
                name: 'Aspirin',
                frequency: 'Take 1 with food',
                date: '2018/02/08'
            },
            {
                name: 'Lyrica',
                frequency: '75mg, Take 1 with food',
                date: '2018/04/03'
            }
        ];
    }
    MedicationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MedicationPage');
    };
    MedicationPage.prototype.addMedication = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__medication_detail_medication_detail__["a" /* MedicationDetailPage */]);
        modal.present();
    };
    MedicationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-medication',template:/*ion-inline-start:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/medication/medication.html"*/'<!--\n  Generated template for the MedicationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>MEDICATION</ion-title>\n  </ion-navbar>\n\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list *ngIf="records">\n    <ion-list-header>Medication History</ion-list-header>\n    <ion-item *ngFor="let record of records">\n      <h3>Medication: {{record.name}}</h3>\n      <h3>Frequency: {{record.frequency}}</h3>\n      <p>Date: {{record.date}}</p>\n    </ion-item>\n  </ion-list>\n\n  <ion-card [hidden]="records">\n    <ion-card-header>No medication record.</ion-card-header>\n  </ion-card>\n\n  <ion-fab right bottom>\n    <button ion-fab color="primary" (click)="addMedication()">\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/medication/medication.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"]])
    ], MedicationPage);
    return MedicationPage;
}());

//# sourceMappingURL=medication.js.map

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileEditablePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_user__ = __webpack_require__(100);
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
    function ProfileEditablePage(navCtrl, navParams, fb, viewCtrl, toastCtrl, userProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fb = fb;
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.userProvider = userProvider;
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
        this.userId = 1;
        this.profile = {
            username: "km111",
            firstname: "Kelly",
            lastname: "Marsh",
            gender: "male",
            email: "KellyM@gmail.com",
            tel: "4125890011",
            address: "100 Fifth Ave\nApt 119",
            birthday: "11/11/1911",
            race: "White"
        };
        // get profile from database
        this.userProvider.getProfile(this.userId)
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
        this.userProvider.editProfile(profile, this.userId)
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
            selector: 'page-profile-editable',template:/*ion-inline-start:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/profile-editable/profile-editable.html"*/'<!--\n  Generated template for the ProfileEditablePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-toolbar color="primary">\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="white" showWhen="ios">Cancel</span>\n        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Edit Profile</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form novalidate [formGroup]="profileForm" (ngSubmit)="onSubmit()">\n    <ion-list>\n      <ion-item>\n        <ion-label stacked color="primary">Firstname<span class="color-red">*</span></ion-label>\n        <ion-input value="{{profile.firstname | titlecase}}" type="text" formControlName="firstname"></ion-input>\n      </ion-item>\n      <div class="pull-right color-red">\n        <span [hidden]="!(formErrors.firstname)">{{formErrors.firstname}}</span>\n      </div>\n      <ion-item>\n        <ion-label stacked color="primary">Lastname<span class="color-red">*</span></ion-label>\n        <ion-input value="{{profile.lastname | titlecase}}" type="text" formControlName="lastname"></ion-input>\n      </ion-item>\n      <div class="pull-right color-red">\n        <span [hidden]="!(formErrors.lastname)">{{formErrors.lastname}}</span>\n      </div>\n      <ion-item>\n        <ion-label stacked color="primary">Gender</ion-label>\n        <ion-select formControlName="gender">\n          <ion-option value="female">Female</ion-option>\n          <ion-option value="male">Male</ion-option>\n          <ion-option value="other">Other</ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-label stacked color="primary">Race and Ethnicity</ion-label>\n        <ion-select formControlName="race">\n          <ion-option>Hispanic or Latino</ion-option>\n          <ion-option>White</ion-option>\n          <ion-option>Black or African American</ion-option>\n          <ion-option>Native Hawaiian or Other Pacific Islander</ion-option>\n          <ion-option>Asian</ion-option>\n          <ion-option>American Indian or Alaskan Native</ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-label stacked color="primary">Email<span class="color-red">*</span></ion-label>\n        <ion-input value="{{profile.email}}" type="email" formControlName="email"></ion-input>\n      </ion-item>\n      <div class="pull-right color-red">\n        <span [hidden]="!(formErrors.email)">{{formErrors.email}}</span>\n      </div>\n      <ion-item>\n        <ion-label stacked color="primary">Phone</ion-label>\n        <ion-input value="{{profile.tel}}" type="tel" formControlName="tel"></ion-input>\n      </ion-item>\n      <div class="pull-right color-red">\n        <span [hidden]="!(formErrors.tel)">{{formErrors.tel}}</span>\n      </div>\n      <ion-item>\n        <ion-label stacked color="primary">Address</ion-label>\n        <ion-textarea value="{{profile.address}}" type="text" formControlName="address"></ion-textarea>\n      </ion-item>\n      <ion-item>\n        <ion-label stacked color="primary">Birthday</ion-label>\n        <ion-input value="{{profile.birthday | date:\'MM/dd/yyyy\'}}" type="text" formControlName="birthday"></ion-input>\n      </ion-item>\n      <div class="pull-right color-red">\n        <span [hidden]="!(formErrors.birthday)">{{formErrors.birthday}}</span>\n      </div>\n    </ion-list>\n    <button ion-button block type="submit" [disabled]="!profileForm.valid">Edit</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/profile-editable/profile-editable.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_3__providers_user_user__["a" /* UserProvider */]])
    ], ProfileEditablePage);
    return ProfileEditablePage;
}());

//# sourceMappingURL=profile-editable.js.map

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_editable_profile_editable__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_user__ = __webpack_require__(100);
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
    function ProfilePage(navCtrl, navParams, modalCtrl, userProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.userProvider = userProvider;
        this.profile = {};
        this.userId = 1;
        this.profile = {
            username: "km111",
            firstname: "Kelly",
            lastname: "Marsh",
            gender: "male",
            race: "White",
            email: "KellyM@gmail.com",
            tel: "4125890011",
            address: "100 Fifth Ave\nApt 119",
            birthday: "11/11/1911"
        };
        //get profile from database
        this.userProvider.getProfile(this.userId)
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
            _this.userProvider.getProfile(_this.userId)
                .subscribe(function (profile) { return _this.profile = profile; }, function (errmess) { return _this.errMess = errmess; });
        });
    };
    ProfilePage.prototype.resetPassword = function () {
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-profile',template:/*ion-inline-start:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/profile/profile.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Profile</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-item no-lines>\n      <ion-icon name="contact" color="primary" item-start></ion-icon>\n      <ion-label>\n        <b>{{profile.username}}</b>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked color="primary">Name</ion-label>\n      <ion-input value="{{profile.firstname | titlecase}} {{profile.lastname | titlecase}}" readonly></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked color="primary">Gender</ion-label>\n      <ion-input value="{{profile.gender | titlecase}}" readonly></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked color="primary">Race and Ethnicity</ion-label>\n      <ion-input value="{{profile.race}}" readonly></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked color="primary">Email</ion-label>\n      <ion-input value="{{profile.email}}" readonly></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked color="primary">Phone</ion-label>\n      <ion-input value="{{profile.tel}}" readonly></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked color="primary">Address</ion-label>\n      <ion-textarea value="{{profile.address}}" readonly></ion-textarea>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked color="primary">Birthday</ion-label>\n      <ion-input value="{{profile.birthday | date}}" readonly></ion-input>\n    </ion-item>\n    <button ion-item (click)="editProfile()">\n      <ion-label color="primary">Edit Profile</ion-label>\n    </button>\n    <button ion-item (click)="resetPassword()">\n      <ion-label color="primary">Reset Password</ion-label>\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/profile/profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_3__providers_user_user__["a" /* UserProvider */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__question_option_question_option__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_dynamic_form_types_question_textbox__ = __webpack_require__(445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_dynamic_form_types_question_datetime__ = __webpack_require__(446);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_dynamic_form_types_question_dropdown__ = __webpack_require__(447);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_dynamic_form_types_question_textarea__ = __webpack_require__(448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_dynamic_form_types_question_toggle__ = __webpack_require__(449);
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
  Generated class for the QuestionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var QuestionProvider = (function () {
    function QuestionProvider(qop) {
        this.qop = qop;
    }
    QuestionProvider.prototype.getTrackersQuestions = function (id) {
        if (id == 1) {
            var questions = [
                new __WEBPACK_IMPORTED_MODULE_2__components_dynamic_form_types_question_textbox__["a" /* TextboxQuestion */]({
                    key: 'food',
                    label: 'Food',
                    type: 'text',
                    value: '',
                    required: true,
                    order: 1
                }),
                new __WEBPACK_IMPORTED_MODULE_2__components_dynamic_form_types_question_textbox__["a" /* TextboxQuestion */]({
                    key: 'amount',
                    label: 'Amount',
                    type: 'text',
                    value: '',
                    required: true,
                    order: 2
                }),
                new __WEBPACK_IMPORTED_MODULE_4__components_dynamic_form_types_question_dropdown__["a" /* DropdownQuestion */]({
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
                    order: 3
                }),
                new __WEBPACK_IMPORTED_MODULE_3__components_dynamic_form_types_question_datetime__["a" /* DatetimeQuestion */]({
                    key: 'date',
                    label: 'Date',
                    value: new Date(),
                    required: true,
                    order: 4
                }),
            ];
            return questions.sort(function (a, b) { return a.order - b.order; });
        }
        else if (id == 2) {
            var questions = [
                new __WEBPACK_IMPORTED_MODULE_2__components_dynamic_form_types_question_textbox__["a" /* TextboxQuestion */]({
                    key: 'exercise',
                    label: 'Exercise',
                    type: 'text',
                    value: '',
                    required: true,
                    order: 1
                }),
                new __WEBPACK_IMPORTED_MODULE_2__components_dynamic_form_types_question_textbox__["a" /* TextboxQuestion */]({
                    key: 'duration',
                    label: 'Duration',
                    type: 'text',
                    value: '',
                    required: true,
                    order: 2
                }),
                new __WEBPACK_IMPORTED_MODULE_3__components_dynamic_form_types_question_datetime__["a" /* DatetimeQuestion */]({
                    key: 'date',
                    label: 'Date',
                    value: new Date(),
                    required: true,
                    order: 3
                }),
            ];
            return questions.sort(function (a, b) { return a.order - b.order; });
        }
        else if (id == 3) {
            var questions = [
                new __WEBPACK_IMPORTED_MODULE_2__components_dynamic_form_types_question_textbox__["a" /* TextboxQuestion */]({
                    key: 'weight',
                    label: 'Weight(kg)',
                    type: 'number',
                    value: '',
                    required: true,
                    order: 1
                }),
                new __WEBPACK_IMPORTED_MODULE_3__components_dynamic_form_types_question_datetime__["a" /* DatetimeQuestion */]({
                    key: 'date',
                    label: 'Date',
                    value: new Date(),
                    required: true,
                    order: 2
                }),
            ];
            return questions.sort(function (a, b) { return a.order - b.order; });
        }
        else if (id == 4) {
            var questions = [
                new __WEBPACK_IMPORTED_MODULE_2__components_dynamic_form_types_question_textbox__["a" /* TextboxQuestion */]({
                    key: 'height',
                    label: 'Height(inch)',
                    type: 'text',
                    value: '',
                    required: true,
                    order: 1
                }),
                new __WEBPACK_IMPORTED_MODULE_3__components_dynamic_form_types_question_datetime__["a" /* DatetimeQuestion */]({
                    key: 'date',
                    label: 'Date',
                    value: new Date(),
                    required: true,
                    order: 2
                }),
            ];
            return questions.sort(function (a, b) { return a.order - b.order; });
        }
    };
    QuestionProvider.prototype.getAllergyQuestions = function () {
        var questions = [
            new __WEBPACK_IMPORTED_MODULE_2__components_dynamic_form_types_question_textbox__["a" /* TextboxQuestion */]({
                key: 'trigger',
                label: 'Trigger',
                type: 'text',
                value: '',
                required: false,
                order: 2
            }),
            new __WEBPACK_IMPORTED_MODULE_2__components_dynamic_form_types_question_textbox__["a" /* TextboxQuestion */]({
                key: 'symptom',
                label: 'Symptom',
                type: 'text',
                value: '',
                required: true,
                order: 1
            }),
            new __WEBPACK_IMPORTED_MODULE_6__components_dynamic_form_types_question_toggle__["a" /* ToggleQuestion */]({
                key: 'threatening',
                label: 'Life Threatening',
                value: false,
                order: 3
            }),
            new __WEBPACK_IMPORTED_MODULE_3__components_dynamic_form_types_question_datetime__["a" /* DatetimeQuestion */]({
                key: 'datetime',
                label: 'Onset Date',
                value: '',
                required: true,
                order: 4
            }),
        ];
        return questions.sort(function (a, b) { return a.order - b.order; });
    };
    QuestionProvider.prototype.getFamilyHistoryQuestions = function () {
        var questions = [
            new __WEBPACK_IMPORTED_MODULE_2__components_dynamic_form_types_question_textbox__["a" /* TextboxQuestion */]({
                key: 'relationship',
                label: 'Relationship',
                type: 'text',
                value: '',
                required: true,
                order: 1
            }),
            new __WEBPACK_IMPORTED_MODULE_2__components_dynamic_form_types_question_textbox__["a" /* TextboxQuestion */]({
                key: 'name',
                label: 'Name',
                type: 'text',
                value: '',
                required: false,
                order: 2
            }),
            new __WEBPACK_IMPORTED_MODULE_6__components_dynamic_form_types_question_toggle__["a" /* ToggleQuestion */]({
                key: 'alive',
                label: 'Alive',
                value: true,
                order: 3
            }),
            new __WEBPACK_IMPORTED_MODULE_2__components_dynamic_form_types_question_textbox__["a" /* TextboxQuestion */]({
                key: 'disease',
                label: 'Disease',
                type: 'text',
                value: '',
                required: true,
                order: 4
            }),
            new __WEBPACK_IMPORTED_MODULE_3__components_dynamic_form_types_question_datetime__["a" /* DatetimeQuestion */]({
                key: 'date',
                label: 'Onset Date',
                value: '',
                required: true,
                order: 5
            }),
        ];
        return questions.sort(function (a, b) { return a.order - b.order; });
    };
    QuestionProvider.prototype.getMedicalHistoryQuestions = function () {
        var questions = [
            new __WEBPACK_IMPORTED_MODULE_2__components_dynamic_form_types_question_textbox__["a" /* TextboxQuestion */]({
                key: 'diagnosis',
                label: 'Diagnosis',
                type: 'text',
                value: '',
                required: true,
                order: 1
            }),
            new __WEBPACK_IMPORTED_MODULE_3__components_dynamic_form_types_question_datetime__["a" /* DatetimeQuestion */]({
                key: 'date',
                label: 'Onset Date',
                value: '',
                required: true,
                order: 2
            }),
        ];
        return questions.sort(function (a, b) { return a.order - b.order; });
    };
    QuestionProvider.prototype.getSurgicalHistoryQuestions = function () {
        var option = this.qop.getDoctorOption();
        var questions = [
            new __WEBPACK_IMPORTED_MODULE_2__components_dynamic_form_types_question_textbox__["a" /* TextboxQuestion */]({
                key: 'sugery',
                label: 'Sugery',
                type: 'text',
                value: '',
                required: true,
                order: 1
            }),
            new __WEBPACK_IMPORTED_MODULE_4__components_dynamic_form_types_question_dropdown__["a" /* DropdownQuestion */]({
                key: 'doctor',
                label: 'Doctor',
                value: '',
                multiple: false,
                options: option,
                order: 2
            }),
            new __WEBPACK_IMPORTED_MODULE_3__components_dynamic_form_types_question_datetime__["a" /* DatetimeQuestion */]({
                key: 'date',
                label: 'Onset Date',
                value: '',
                required: true,
                order: 3
            }),
        ];
        return questions.sort(function (a, b) { return a.order - b.order; });
    };
    QuestionProvider.prototype.getImmunizationQuestions = function () {
        var questions = [
            new __WEBPACK_IMPORTED_MODULE_2__components_dynamic_form_types_question_textbox__["a" /* TextboxQuestion */]({
                key: 'vaccine',
                label: 'Vaccine',
                type: 'text',
                value: '',
                required: true,
                order: 1
            }),
            new __WEBPACK_IMPORTED_MODULE_2__components_dynamic_form_types_question_textbox__["a" /* TextboxQuestion */]({
                key: 'age',
                label: 'Age',
                type: 'number',
                value: '',
                required: true,
                order: 2
            }),
            new __WEBPACK_IMPORTED_MODULE_2__components_dynamic_form_types_question_textbox__["a" /* TextboxQuestion */]({
                key: 'schedule',
                label: 'Schedule',
                type: 'text',
                value: '',
                required: true,
                order: 3
            }),
            new __WEBPACK_IMPORTED_MODULE_3__components_dynamic_form_types_question_datetime__["a" /* DatetimeQuestion */]({
                key: 'date',
                label: 'Date',
                value: '',
                required: true,
                order: 4
            }),
        ];
        return questions.sort(function (a, b) { return a.order - b.order; });
    };
    QuestionProvider.prototype.getDoctorVisitNotesQuestions = function () {
        var option = this.qop.getDoctorOption();
        var questions = [
            new __WEBPACK_IMPORTED_MODULE_2__components_dynamic_form_types_question_textbox__["a" /* TextboxQuestion */]({
                key: 'diagnosis',
                label: 'Diagnosis',
                type: 'text',
                value: '',
                required: true,
                order: 1
            }),
            new __WEBPACK_IMPORTED_MODULE_4__components_dynamic_form_types_question_dropdown__["a" /* DropdownQuestion */]({
                key: 'doctor',
                label: 'Doctor',
                value: '',
                multiple: false,
                options: option,
                order: 2
            }),
            new __WEBPACK_IMPORTED_MODULE_2__components_dynamic_form_types_question_textbox__["a" /* TextboxQuestion */]({
                key: 'prescription',
                label: 'Prescription',
                type: 'text',
                value: '',
                required: true,
                order: 3
            }),
            new __WEBPACK_IMPORTED_MODULE_3__components_dynamic_form_types_question_datetime__["a" /* DatetimeQuestion */]({
                key: 'date',
                label: 'Date',
                value: '',
                required: true,
                order: 4
            }),
            new __WEBPACK_IMPORTED_MODULE_5__components_dynamic_form_types_question_textarea__["a" /* TextareaQuestion */]({
                key: 'reason',
                label: 'Reason of Visit',
                value: '',
                rows: 9,
                required: false,
                order: 5
            }),
        ];
        return questions.sort(function (a, b) { return a.order - b.order; });
    };
    QuestionProvider.prototype.getSocialHistoryQuestions = function (id) {
        if (id == 1) {
            var questions = [
                new __WEBPACK_IMPORTED_MODULE_2__components_dynamic_form_types_question_textbox__["a" /* TextboxQuestion */]({
                    key: 'amount',
                    label: 'Amount',
                    type: 'number',
                    value: '',
                    required: true,
                    order: 1
                }),
                new __WEBPACK_IMPORTED_MODULE_3__components_dynamic_form_types_question_datetime__["a" /* DatetimeQuestion */]({
                    key: 'date',
                    label: 'Date',
                    value: '',
                    required: true,
                    order: 2
                }),
            ];
            return questions.sort(function (a, b) { return a.order - b.order; });
        }
        else if (id == 2) {
            var questions = [
                new __WEBPACK_IMPORTED_MODULE_2__components_dynamic_form_types_question_textbox__["a" /* TextboxQuestion */]({
                    key: 'name',
                    label: 'Name',
                    type: 'text',
                    value: '',
                    required: true,
                    order: 1
                }),
                new __WEBPACK_IMPORTED_MODULE_2__components_dynamic_form_types_question_textbox__["a" /* TextboxQuestion */]({
                    key: 'amount',
                    label: 'Amount(oz)',
                    type: 'number',
                    value: '',
                    required: true,
                    order: 2
                }),
                new __WEBPACK_IMPORTED_MODULE_2__components_dynamic_form_types_question_textbox__["a" /* TextboxQuestion */]({
                    key: 'alcohol',
                    label: 'Alcohol(%)',
                    type: 'number',
                    value: '',
                    required: true,
                    order: 3
                }),
                new __WEBPACK_IMPORTED_MODULE_3__components_dynamic_form_types_question_datetime__["a" /* DatetimeQuestion */]({
                    key: 'date',
                    label: 'Date',
                    value: '',
                    required: true,
                    order: 4
                }),
            ];
            return questions.sort(function (a, b) { return a.order - b.order; });
        }
        else if (id == 3) {
            var questions = [
                new __WEBPACK_IMPORTED_MODULE_2__components_dynamic_form_types_question_textbox__["a" /* TextboxQuestion */]({
                    key: 'name',
                    label: 'Name',
                    type: 'text',
                    value: '',
                    required: true,
                    order: 1
                }),
                new __WEBPACK_IMPORTED_MODULE_2__components_dynamic_form_types_question_textbox__["a" /* TextboxQuestion */]({
                    key: 'amount',
                    label: 'Amount',
                    type: 'number',
                    value: '',
                    required: true,
                    order: 2
                }),
                new __WEBPACK_IMPORTED_MODULE_3__components_dynamic_form_types_question_datetime__["a" /* DatetimeQuestion */]({
                    key: 'date',
                    label: 'Date',
                    value: '',
                    required: true,
                    order: 3
                }),
            ];
            return questions.sort(function (a, b) { return a.order - b.order; });
        }
        else if (id == 4) {
            var questions = [
                new __WEBPACK_IMPORTED_MODULE_2__components_dynamic_form_types_question_textbox__["a" /* TextboxQuestion */]({
                    key: 'location',
                    label: 'Location',
                    type: 'text',
                    value: '',
                    required: true,
                    order: 1
                }),
                new __WEBPACK_IMPORTED_MODULE_5__components_dynamic_form_types_question_textarea__["a" /* TextareaQuestion */]({
                    key: 'note',
                    label: 'Note',
                    value: '',
                    rows: 5,
                    required: false,
                    order: 2
                }),
                new __WEBPACK_IMPORTED_MODULE_3__components_dynamic_form_types_question_datetime__["a" /* DatetimeQuestion */]({
                    key: 'date',
                    label: 'Date',
                    value: '',
                    required: true,
                    order: 3
                }),
            ];
            return questions.sort(function (a, b) { return a.order - b.order; });
        }
        else if (id == 5) {
            var questions = [
                new __WEBPACK_IMPORTED_MODULE_2__components_dynamic_form_types_question_textbox__["a" /* TextboxQuestion */]({
                    key: 'type',
                    label: 'Type',
                    type: 'text',
                    value: '',
                    required: true,
                    order: 1
                }),
                new __WEBPACK_IMPORTED_MODULE_3__components_dynamic_form_types_question_datetime__["a" /* DatetimeQuestion */]({
                    key: 'moveindate',
                    label: 'Move in',
                    value: '',
                    required: true,
                    order: 2
                }),
                new __WEBPACK_IMPORTED_MODULE_3__components_dynamic_form_types_question_datetime__["a" /* DatetimeQuestion */]({
                    key: 'moveoutdate',
                    label: 'Move out',
                    value: '',
                    required: true,
                    order: 3
                }),
            ];
            return questions.sort(function (a, b) { return a.order - b.order; });
        }
    };
    QuestionProvider.prototype.getMedicationQuestions = function () {
        var questions = [
            new __WEBPACK_IMPORTED_MODULE_2__components_dynamic_form_types_question_textbox__["a" /* TextboxQuestion */]({
                key: 'name',
                label: 'Medication Name',
                type: 'text',
                value: '',
                required: true,
                order: 1
            }),
            new __WEBPACK_IMPORTED_MODULE_5__components_dynamic_form_types_question_textarea__["a" /* TextareaQuestion */]({
                key: 'frequency',
                label: 'Frequency',
                value: '',
                rows: 2,
                required: true,
                order: 2
            }),
            new __WEBPACK_IMPORTED_MODULE_3__components_dynamic_form_types_question_datetime__["a" /* DatetimeQuestion */]({
                key: 'date',
                label: 'Date',
                value: new Date(),
                required: true,
                order: 3
            }),
        ];
        return questions.sort(function (a, b) { return a.order - b.order; });
    };
    QuestionProvider.prototype.getLabTestQuestions = function () {
        var questions = [
            new __WEBPACK_IMPORTED_MODULE_2__components_dynamic_form_types_question_textbox__["a" /* TextboxQuestion */]({
                key: 'name',
                label: 'Test Name',
                type: 'text',
                value: '',
                required: true,
                order: 1
            }),
            new __WEBPACK_IMPORTED_MODULE_3__components_dynamic_form_types_question_datetime__["a" /* DatetimeQuestion */]({
                key: 'date',
                label: 'Date',
                value: new Date(),
                required: true,
                order: 2
            }),
            new __WEBPACK_IMPORTED_MODULE_2__components_dynamic_form_types_question_textbox__["a" /* TextboxQuestion */]({
                key: 'result',
                label: 'Result',
                type: 'text',
                value: '',
                required: true,
                order: 3
            }),
            new __WEBPACK_IMPORTED_MODULE_6__components_dynamic_form_types_question_toggle__["a" /* ToggleQuestion */]({
                key: 'abnormal',
                label: 'Abnormal?',
                value: false,
                order: 4
            }),
            new __WEBPACK_IMPORTED_MODULE_5__components_dynamic_form_types_question_textarea__["a" /* TextareaQuestion */]({
                key: 'note',
                label: 'Notes',
                value: '',
                rows: 4,
                required: false,
                order: 5
            }),
        ];
        return questions.sort(function (a, b) { return a.order - b.order; });
    };
    QuestionProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__question_option_question_option__["a" /* QuestionOptionProvider */]])
    ], QuestionProvider);
    return QuestionProvider;
}());

//# sourceMappingURL=question.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard__ = __webpack_require__(32);
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
    function SignupPage(navCtrl, navParams, fb, menuCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fb = fb;
        this.menuCtrl = menuCtrl;
        this.formErrors = {
            "username": '',
            "password": '',
            "email": '',
            "secQues": '',
            "secAns": '',
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
            "email": {
                "required": "Email is required.",
                "email": "Please enter a valid email address."
            },
            "secQues": {
                "required": "Please choose a security question."
            },
            "secAns": {
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
                "pattern": "Please enter a valid phone number."
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
            email: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].email]],
            secQues: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            secAns: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            firstname: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(2), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(25)]],
            lastname: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(2), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(25)]],
            tel: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].pattern('[0-9]{10}')],
            address: [''],
            birthday: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].pattern('(^(((0[1-9]|1[012])/(0[1-9]|1[0-9]|2[0-8]))|((0[13578]|1[02])/(29|30|31))|((0[469]|11)/(29|30)))/(19|20)\\d\\d$)|(^02/29/(19(04|08|12|16|20|24|28|32|36|40|44|48|52|56|60|64|68|72|76|80|84|88|92|96)|20(([02468][048])|([13579][26])))$)')],
            gender: [''],
            race: ['']
        });
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
    SignupPage.prototype.onSubmit = function () {
        console.log(this.registerForm.value);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard__["a" /* DashboardPage */]);
        this.menuCtrl.enable(true);
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-signup',template:/*ion-inline-start:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/signup/signup.html"*/'<!--\n  Generated template for the SignupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Register</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form novalidate [formGroup]="registerForm" (ngSubmit)="onSubmit()">\n    <ion-card>\n      <ion-card-content>\n        <ion-item>\n          <ion-label floating>Username<span class="color-red">*</span></ion-label>\n          <ion-input type="text" formControlName="username"></ion-input>\n        </ion-item>\n        <div class="pull-right color-red">\n          <span [hidden]="!(formErrors.username)">{{formErrors.username}}</span>\n        </div>\n        <ion-item>\n          <ion-label floating>Password<span class="color-red">*</span></ion-label>\n          <ion-input type="password" formControlName="password"></ion-input>\n        </ion-item>\n        <div class="pull-right color-red">\n          <span [hidden]="!(formErrors.password)">{{formErrors.password}}</span>\n        </div>\n      </ion-card-content>\n    </ion-card>\n    <ion-card>\n      <ion-card-header text-wrap color="primary">\n        <div class="pull-right">The information below are only used to record your health data.</div>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-item>\n          <ion-label stacked>Email<span class="color-red">*</span></ion-label>\n          <ion-input type="email" formControlName="email" email></ion-input>\n        </ion-item>\n        <div class="pull-right color-red">\n          <span [hidden]="!(formErrors.email)">{{formErrors.email}}</span>\n        </div>\n        <ion-item>\n          <ion-label stacked>Security Question<span class="color-red">*</span></ion-label>\n          <ion-select formControlName="secQues">\n            <ion-option *ngFor="let sq of secQuestions" [value]="sq.question">\n              {{sq.question}}\n            </ion-option>\n          </ion-select>\n        </ion-item>\n        <div class="pull-right color-red">\n          <span [hidden]="!(formErrors.secQues)">{{formErrors.secQues}}</span>\n        </div>\n        <ion-item>\n          <ion-label stacked>Security Answer<span class="color-red">*</span></ion-label>\n          <ion-input type="text" formControlName="secAns"></ion-input>\n        </ion-item>\n        <div class="pull-right color-red">\n          <span [hidden]="!(formErrors.secAns)">{{formErrors.secAns}}</span>\n        </div>\n        <ion-item>\n          <ion-label stacked>First Name</ion-label>\n          <ion-input type="text" formControlName="firstname"></ion-input>\n        </ion-item>\n        <div class="pull-right color-red">\n          <span [hidden]="!(formErrors.firstname)">{{formErrors.firstname}}</span>\n        </div>\n        <ion-item>\n          <ion-label stacked>Last Name</ion-label>\n          <ion-input type="text" formControlName="lastname"></ion-input>\n        </ion-item>\n        <div class="pull-right color-red">\n          <span [hidden]="!(formErrors.lastname)">{{formErrors.lastname}}</span>\n        </div>\n        <ion-item>\n          <ion-label stacked>Tel. Number</ion-label>\n          <ion-input type="tel" formControlName="tel"></ion-input>\n        </ion-item>\n        <div class="pull-right color-red">\n          <span [hidden]="!(formErrors.tel)">{{formErrors.tel}}</span>\n        </div>\n        <ion-item>\n          <ion-label stacked>Address</ion-label>\n          <ion-textarea type="text" formControlName="address"></ion-textarea>\n        </ion-item>\n        <ion-item>\n          <ion-label stacked>Birthday</ion-label>\n          <ion-input type="text" formControlName="birthday" placeholder="MM/DD/YYYY"></ion-input>\n        </ion-item>\n        <div class="pull-right color-red">\n          <span [hidden]="!(formErrors.birthday)">{{formErrors.birthday}}</span>\n        </div>\n        <ion-item>\n          <ion-label stacked>Gender</ion-label>\n          <ion-select formControlName="gender">\n            <ion-option value="female">Female</ion-option>\n            <ion-option value="male">Male</ion-option>\n            <ion-option value="other">Other</ion-option>\n          </ion-select>\n        </ion-item>\n        <ion-item>\n          <ion-label stacked>Race and Ethnicity</ion-label>\n          <ion-select formControlName="race">\n            <ion-option>Hispanic or Latino</ion-option>\n            <ion-option>White</ion-option>\n            <ion-option>Black or African American</ion-option>\n            <ion-option>Native Hawaiian or Other Pacific Islander</ion-option>\n            <ion-option>Asian</ion-option>\n            <ion-option>American Indian or Alaskan Native</ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-card-content>\n    </ion-card>\n    <button ion-button block type="submit" [disabled]="!registerForm.valid">Register</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/signup/signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["MenuController"]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResourcesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
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
    function ResourcesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ResourcesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ResourcesPage');
    };
    ResourcesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-resources',template:/*ion-inline-start:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/resources/resources.html"*/'<!--\n  Generated template for the ResourcesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Resources</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>Here are some related links for references.</ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/resources/resources.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], ResourcesPage);
    return ResourcesPage;
}());

//# sourceMappingURL=resources.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocialHistoryDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_question_question__ = __webpack_require__(15);
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
    function SocialHistoryDetailPage(navCtrl, navParams, qp, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.qp = qp;
        this.viewCtrl = viewCtrl;
        this.color = ['dark-salmon', 'rosy-brown', 'slate-grey'];
        this.title = navParams.get('title');
        this.id = navParams.get('id');
        console.log(this.id);
        this.questions = qp.getSocialHistoryQuestions(this.id);
        this.navcolor = this.color[(this.id - 1) % 3];
    }
    SocialHistoryDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SocialHistoryDetailPage');
    };
    SocialHistoryDetailPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    SocialHistoryDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-social-history-detail',template:/*ion-inline-start:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/social-history-detail/social-history-detail.html"*/'<!--\n  Generated template for the SocialHistoryDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-toolbar [color]="navcolor">\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="white" showWhen="ios">Cancel</span>\n        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>{{title}}</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-content>\n      <dynamic-form [questions]="questions"></dynamic-form>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/social-history-detail/social-history-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__providers_question_question__["a" /* QuestionProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"]])
    ], SocialHistoryDetailPage);
    return SocialHistoryDetailPage;
}());

//# sourceMappingURL=social-history-detail.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocialHistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__social_history_category_social_history_category__ = __webpack_require__(154);
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
    function SocialHistoryPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.smoking = [];
        this.alcohol = [];
        this.pill = [];
        this.travel = [];
        this.housing = [];
        // get sorted records
        this.smoking = [
            {
                amount: 3,
                date: '2018/01/09'
            },
            {
                amount: 7,
                date: '2018/01/01'
            }
        ];
        this.alcohol = [
            {
                name: 'wine',
                amount: '6',
                alcohol: '13.8',
                date: '2018/04/18'
            }
        ];
        this.travel = [
            {
                location: 'New York City',
                note: 'Nice experience',
                date: '2018/05/01'
            }
        ];
        this.housing = [
            {
                type: 'apartment',
                moveindate: '2017/08/01',
                moveoutdate: '2018/01/01'
            }
        ];
    }
    SocialHistoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SocialHistoryPage');
    };
    SocialHistoryPage.prototype.addSocialHistory = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__social_history_category_social_history_category__["a" /* SocialHistoryCategoryPage */]);
    };
    SocialHistoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-social-history',template:/*ion-inline-start:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/social-history/social-history.html"*/'<!--\n  Generated template for the SocialHistoryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>SOCIAL HISTORY</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list *ngIf="smoking != \'\'">\n    <ion-list-header>Smoking History</ion-list-header>\n    <ion-item *ngFor="let s of smoking">\n      <div class="white-space">\n        <h3>Cigarettes: {{s.amount}}</h3>\n        <p>{{s.date | date}}</p>\n      </div>\n    </ion-item>\n  </ion-list>\n  <ion-list *ngIf="alcohol != \'\'">\n    <ion-list-header>Alcohol History</ion-list-header>\n    <ion-item *ngFor="let a of alcohol">\n      <div class="white-space">\n        <h3>Name: {{a.name}}</h3>\n        <h3>Amount: {{a.amount}} oz</h3>\n        <h3>Alcohol: {{a.alcohol}} %</h3>\n        <p>{{a.date | date}}</p>\n      </div>\n    </ion-item>\n  </ion-list>\n  <ion-list *ngIf="pill != \'\'">\n    <ion-list-header>Pill History</ion-list-header>\n    <ion-item *ngFor="let p of pill">\n      <div class="white-space">\n        <h3>Name: {{p.name}}</h3>\n        <h3>Amount: {{p.amount}}</h3>\n        <p>{{p.date | date}}</p>\n      </div>\n    </ion-item>\n  </ion-list>\n  <ion-list *ngIf="travel != \'\'">\n    <ion-list-header>Travel History</ion-list-header>\n    <ion-item *ngFor="let t of travel">\n      <div class="white-space">\n        <h3>Location: {{t.location}}</h3>\n        <h3>Note: {{t.note}}</h3>\n        <p>{{t.date | date}}</p>\n      </div>\n    </ion-item>\n  </ion-list>\n  <ion-list *ngIf="housing != \'\'">\n    <ion-list-header>Housing History</ion-list-header>\n    <ion-item *ngFor="let h of housing">\n      <div class="white-space">\n        <h3>Housing Type: {{h.type | titlecase}}</h3>\n        <h3>Move in: {{h.moveindate | date}}</h3>\n        <h3>Move out: {{h.moveoutdate | date}}</h3>\n      </div>\n    </ion-item>\n  </ion-list>\n\n  <ion-card [hidden]="smoking!=\'\' || alcohol!=\'\' || pill!=\'\' || travel!=\'\' || housing!=\'\'">\n    <ion-card-header>No record.</ion-card-header>\n  </ion-card>\n\n  <ion-fab right bottom>\n    <button ion-fab color="primary" (click)="addSocialHistory()">\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/social-history/social-history.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], SocialHistoryPage);
    return SocialHistoryPage;
}());

//# sourceMappingURL=social-history.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocialHistoryCategoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_social_history_classification_social_history_classification__ = __webpack_require__(219);
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
        this.tiles = scp.getMenu(0);
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

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurgicalHistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__surgical_history_detail_surgical_history_detail__ = __webpack_require__(156);
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
    function SurgicalHistoryPage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        // get sorted records
        this.records = [
            {
                sugery: 'appendectomy',
                doctor: 'Aaric Falconi',
                date: '2018/04/26'
            },
            {
                sugery: 'arthrodesis',
                doctor: 'Scott Williamson',
                date: '2017/09/11'
            }
        ];
    }
    SurgicalHistoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SurgicalHistoryPage');
    };
    SurgicalHistoryPage.prototype.addSurgicalHistory = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__surgical_history_detail_surgical_history_detail__["a" /* SurgicalHistoryDetailPage */]);
        modal.present();
    };
    SurgicalHistoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-surgical-history',template:/*ion-inline-start:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/surgical-history/surgical-history.html"*/'<!--\n  Generated template for the SurgicalHistoryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>SURGICAL HISTORY</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list *ngIf="records">\n    <ion-list-header>Surgical History</ion-list-header>\n    <ion-item *ngFor="let record of records">\n      <div class="white-space">\n        <h3>Sugery: {{record.sugery}}</h3>\n        <h3>Doctor: {{record.doctor}}</h3>\n        <p>{{record.date | date}}</p>\n      </div>\n    </ion-item>\n  </ion-list>\n\n  <ion-card [hidden]="records">\n    <ion-card-header>No surgical history record.</ion-card-header>\n  </ion-card>\n\n  <ion-fab right bottom>\n    <button ion-fab color="primary" (click)="addSurgicalHistory()">\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/surgical-history/surgical-history.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"]])
    ], SurgicalHistoryPage);
    return SurgicalHistoryPage;
}());

//# sourceMappingURL=surgical-history.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurgicalHistoryDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_question_question__ = __webpack_require__(15);
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
 * Generated class for the SurgicalHistoryDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SurgicalHistoryDetailPage = (function () {
    function SurgicalHistoryDetailPage(navCtrl, navParams, qp, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.qp = qp;
        this.viewCtrl = viewCtrl;
        this.questions = qp.getSurgicalHistoryQuestions();
    }
    SurgicalHistoryDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SurgicalHistoryDetailPage');
    };
    SurgicalHistoryDetailPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    SurgicalHistoryDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-surgical-history-detail',template:/*ion-inline-start:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/surgical-history-detail/surgical-history-detail.html"*/'<!--\n  Generated template for the SurgicalHistoryDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-toolbar color="primary">\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="white" showWhen="ios">Cancel</span>\n        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Add Surgical History</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-content>\n      <dynamic-form [questions]="questions"></dynamic-form>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/surgical-history-detail/surgical-history-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__providers_question_question__["a" /* QuestionProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"]])
    ], SurgicalHistoryDetailPage);
    return SurgicalHistoryDetailPage;
}());

//# sourceMappingURL=surgical-history-detail.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestResultsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__medicalrecord_medicalrecord__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__diagnostic_procedure_diagnostic_procedure__ = __webpack_require__(134);
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
    function TestResultsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TestResultsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TestResultsPage');
    };
    TestResultsPage.prototype.goToLabTest = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__medicalrecord_medicalrecord__["a" /* MedicalrecordPage */]);
    };
    TestResultsPage.prototype.goToDiagnosticProcedure = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__diagnostic_procedure_diagnostic_procedure__["a" /* DiagnosticProcedurePage */]);
    };
    TestResultsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-test-results',template:/*ion-inline-start:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/test-results/test-results.html"*/'<!--\n  Generated template for the TestResultsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>TEST RESULTS</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <button ion-button block (click)="goToLabTest()">Lab Test Results</button>\n  <button ion-button block (click)="goToDiagnosticProcedure()">Diagnostic Procedure Results</button>\n</ion-content>\n'/*ion-inline-end:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/test-results/test-results.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], TestResultsPage);
    return TestResultsPage;
}());

//# sourceMappingURL=test-results.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrackerDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_question_question__ = __webpack_require__(15);
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
    function TrackerDetailPage(navCtrl, navParams, qp, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.qp = qp;
        this.viewCtrl = viewCtrl;
        this.tracker = "history";
        this.title = navParams.get('title');
        this.id = navParams.get('id');
        this.questions = qp.getTrackersQuestions(this.id);
        // get particular records from database
        if (this.id == 1) {
            this.records = [
                {
                    food: 'Burger',
                    amount: '300g',
                    timeperiod: 'lunch',
                    date: '2018/05/29'
                },
                {
                    food: 'Jelly',
                    amount: '15g',
                    timeperiod: 'snack',
                    date: '2018/05/25'
                },
                {
                    food: 'Milk',
                    amount: '150ml',
                    timeperiod: 'breakfast',
                    date: '2018/05/29'
                }
            ];
        }
    }
    TrackerDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TrackerDetailPage');
    };
    TrackerDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-tracker-detail',template:/*ion-inline-start:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/tracker-detail/tracker-detail.html"*/'<!--\n  Generated template for the TrackerDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>{{title | uppercase}}</ion-title>\n  </ion-navbar>\n\n  <ion-toolbar color="primary">\n    <ion-segment color="light" [(ngModel)]="tracker">\n      <ion-segment-button value="history">\n        HISTORY\n      </ion-segment-button>\n      <ion-segment-button value="track">\n        TRACK\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <!-- <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content color="primary" pullingIcon="arrow-dropdown" pullingText="Pull to refresh" refreshingSpinner="circles"\n      refreshingText="Refreshing..."></ion-refresher-content>\n  </ion-refresher> -->\n  <div [ngSwitch]="tracker">\n    <div *ngSwitchCase="\'history\'">\n      <ion-list *ngIf="records">\n        <ion-card *ngFor="let record of records">\n          <ion-item>\n            <ion-row>\n              <h2>{{record.food}} {{record.amount}}</h2>\n            </ion-row>\n            <ion-row>\n              <ion-note>\n                {{record.timeperiod}} - {{record.date | date}}\n              </ion-note>\n            </ion-row>\n          </ion-item>\n        </ion-card>\n      </ion-list>\n      <ion-card [hidden]="records">\n        <ion-card-header>No {{title}} record.</ion-card-header>\n      </ion-card>\n    </div>\n    <div *ngSwitchCase="\'track\'">\n      <ion-card>\n        <ion-card-content>\n          <dynamic-form [questions]="questions"></dynamic-form>\n        </ion-card-content>\n      </ion-card>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/tracker-detail/tracker-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__providers_question_question__["a" /* QuestionProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"]])
    ], TrackerDetailPage);
    return TrackerDetailPage;
}());

//# sourceMappingURL=tracker-detail.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrackersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__custom_panel_custom_panel__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tracker_detail_tracker_detail__ = __webpack_require__(158);
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
    function TrackersPage(navCtrl, navParams, popoverCtrl, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.storage = storage;
        this.panels = {
            food: true,
            exercise: true,
            weight: true,
            height: true
        };
        this.trackers = [
            { id: 1, name: 'food', icon: 'restaurant' },
            { id: 2, name: 'exercise', icon: 'walk' },
            { id: 3, name: 'weight', icon: 'speedometer' },
            { id: 4, name: 'height', icon: 'speedometer' }
        ];
        this.customtrackers = this.trackers;
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
    TrackersPage.prototype.selectTracker = function (i) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__tracker_detail_tracker_detail__["a" /* TrackerDetailPage */], {
            'id': this.trackers[i].id,
            'title': this.trackers[i].name
        });
        // this.navCtrl.push(this.customtrackers[index].component);
    };
    TrackersPage.prototype.presentPopover = function (ev) {
        var _this = this;
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_3__custom_panel_custom_panel__["a" /* CustomPanelPage */], this.panels);
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
    TrackersPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        console.log("DidEnter");
        this.storage.get('mytracker').then(function (mytracker) {
            if (mytracker != null) {
                for (var _i = 0, _a = _this.customtrackers; _i < _a.length; _i++) {
                    var trackers = _a[_i];
                    if (trackers.name == mytracker.name) {
                        return;
                    }
                }
                _this.customtrackers.push({
                    id: 5,
                    name: mytracker.name,
                    icon: 'analytics'
                });
            }
        });
    };
    TrackersPage.prototype.goToHome = function (ev) {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard__["a" /* DashboardPage */]);
        this.navCtrl.popToRoot();
    };
    TrackersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-trackers',template:/*ion-inline-start:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/trackers/trackers.html"*/'<!--\n  Generated template for the TrackersPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>TRACKERS</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="presentPopover($event)">\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-6 *ngFor="let t of customtrackers; let i = index">\n        <ion-card color="primary" (click)="selectTracker(i)">\n          <ion-item class="item_size" color="primary">\n            <ion-icon name="{{t.icon}}"></ion-icon>\n            <p>{{t.name | uppercase}}</p>\n          </ion-item>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n<!-- \n  <ion-fab right bottom>\n    <button ion-fab color="fab" (click)="goToHome($event)">\n      <ion-icon name="home"></ion-icon>\n    </button>\n  </ion-fab> -->\n</ion-content>\n'/*ion-inline-end:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/trackers/trackers.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["PopoverController"],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], TrackersPage);
    return TrackersPage;
}());

//# sourceMappingURL=trackers.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup__ = __webpack_require__(150);
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
    function WelcomePage(navCtrl, navParams, menuCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
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
    WelcomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-welcome',template:/*ion-inline-start:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/welcome/welcome.html"*/'<ion-content padding class="content">\n  <div class="title">\n    <a>PITT</a>\n    <br>\n    <a>MOBILE</a>\n    <br>\n    <a>PHR</a>\n  </div>\n  <h5>A way to manage your health data</h5>\n\n  <div class="btns">\n    <button ion-button block small (click)="signup()">SIGNUP</button>\n    <button ion-button block small color="primary-pale" (click)="login()">LOGIN</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/welcome/welcome.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["MenuController"]])
    ], WelcomePage);
    return WelcomePage;
}());

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 171:
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
webpackEmptyAsyncContext.id = 171;

/***/ }),

/***/ 212:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/alcoholtracker/alcoholtracker.module": [
		493,
		41
	],
	"../pages/allergy-detail/allergy-detail.module": [
		494,
		40
	],
	"../pages/allergy-history/allergy-history.module": [
		496,
		39
	],
	"../pages/allergy/allergy.module": [
		495,
		38
	],
	"../pages/appointment-add-appointments/appointment-add-appointments.module": [
		498,
		37
	],
	"../pages/appointment/appointment.module": [
		497,
		36
	],
	"../pages/contact-add-contacts/contact-add-contacts.module": [
		499,
		35
	],
	"../pages/contact-detail/contact-detail.module": [
		500,
		34
	],
	"../pages/contact/contact.module": [
		502,
		33
	],
	"../pages/create-tracker/create-tracker.module": [
		501,
		32
	],
	"../pages/custom-panel/custom-panel.module": [
		503,
		31
	],
	"../pages/customtracker/customtracker.module": [
		504,
		30
	],
	"../pages/dashboard/dashboard.module": [
		505,
		29
	],
	"../pages/diagnostic-procedure/diagnostic-procedure.module": [
		506,
		28
	],
	"../pages/doctor-visit-notes-detail/doctor-visit-notes-detail.module": [
		507,
		27
	],
	"../pages/doctor-visit-notes/doctor-visit-notes.module": [
		508,
		26
	],
	"../pages/family-history-detail/family-history-detail.module": [
		510,
		25
	],
	"../pages/family-history/family-history.module": [
		509,
		24
	],
	"../pages/foodtracker/foodtracker.module": [
		511,
		23
	],
	"../pages/immunization-detail/immunization-detail.module": [
		512,
		22
	],
	"../pages/immunization-history/immunization-history.module": [
		513,
		21
	],
	"../pages/immunization/immunization.module": [
		514,
		20
	],
	"../pages/login/login.module": [
		515,
		19
	],
	"../pages/medical-history-detail/medical-history-detail.module": [
		516,
		18
	],
	"../pages/medical-history/medical-history.module": [
		517,
		17
	],
	"../pages/medical-record-detail/medical-record-detail.module": [
		520,
		16
	],
	"../pages/medicalrecord/medicalrecord.module": [
		518,
		15
	],
	"../pages/medication-detail/medication-detail.module": [
		519,
		14
	],
	"../pages/medication/medication.module": [
		521,
		13
	],
	"../pages/profile-editable/profile-editable.module": [
		522,
		12
	],
	"../pages/profile/profile.module": [
		523,
		11
	],
	"../pages/resources/resources.module": [
		525,
		10
	],
	"../pages/signup/signup.module": [
		524,
		9
	],
	"../pages/social-history-category/social-history-category.module": [
		529,
		8
	],
	"../pages/social-history-detail/social-history-detail.module": [
		526,
		7
	],
	"../pages/social-history/social-history.module": [
		527,
		6
	],
	"../pages/surgical-history-detail/surgical-history-detail.module": [
		533,
		5
	],
	"../pages/surgical-history/surgical-history.module": [
		528,
		4
	],
	"../pages/test-results/test-results.module": [
		530,
		3
	],
	"../pages/tracker-detail/tracker-detail.module": [
		531,
		2
	],
	"../pages/trackers/trackers.module": [
		532,
		1
	],
	"../pages/welcome/welcome.module": [
		534,
		0
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
webpackAsyncContext.id = 212;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionOptionProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(48);
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
  Generated class for the QuestionOptionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var QuestionOptionProvider = (function () {
    function QuestionOptionProvider(http) {
        this.http = http;
    }
    //get surgical history question Doctor options
    QuestionOptionProvider.prototype.getDoctorOption = function () {
        var doctors = [
            {
                id: 0,
                firstname: "Scott",
                lastname: "Williamson",
            },
            {
                id: 1,
                firstname: "Aaric",
                lastname: "Falconi"
            }
        ];
        var option = [];
        for (var i = 0; i < doctors.length; i++) {
            option[i] = {
                key: doctors[i].id,
                value: doctors[i].firstname + doctors[i].lastname
            };
        }
        console.log(option);
        return option;
    };
    QuestionOptionProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], QuestionOptionProvider);
    return QuestionOptionProvider;
}());

//# sourceMappingURL=question-option.js.map

/***/ }),

/***/ 215:
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

/***/ 218:
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
                { id: 14, name: 'Hib', menu: 'immunization', end: true }
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

/***/ 219:
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
                { id: 1, name: 'Smoking', menu: 'socialhistory', end: true },
                { id: 2, name: 'Alcohol', menu: 'socialhistory', end: true },
                { id: 3, name: 'Pill', menu: 'socialhistory', end: true },
                { id: 4, name: 'Travel', menu: 'socialhistory', end: true },
                { id: 5, name: 'Housing', menu: 'socialhistory', end: true }
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

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
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
    function DashboardPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DashboardPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DashboardPage');
    };
    DashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-dashboard',template:/*ion-inline-start:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/dashboard/dashboard.html"*/'<!--\n  Generated template for the DashboardPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>DASHBOARD</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-list-header>Recent Events</ion-list-header>\n    <ion-card>\n      <ion-card-content>\n        <ion-card-title>\n          <ion-item no-padding>\n            <ion-icon item-start>\n              <i class="far fa-calendar-alt"></i>\n            </ion-icon>\n            <span>Appointment</span>\n          </ion-item>\n        </ion-card-title>\n        <h2>May 29, 2018 at 10:30</h2>\n        <h3>111 Fifth Ave</h3>\n        <p>Scott Williamson</p>\n      </ion-card-content>\n    </ion-card>\n    <ion-card>\n      <ion-card-content>\n        <ion-card-title>\n          <ion-item no-padding>\n            <ion-icon item-start>\n              <i class="fas fa-file-medical-alt"></i>\n            </ion-icon>\n            <span>Lab Test</span>\n          </ion-item>\n        </ion-card-title>\n        <h2>Antigenic</h2>\n        <h3>May 1, 2018</h3>\n        <p>18 mg/dl</p>\n      </ion-card-content>\n    </ion-card>\n    <ion-card>\n      <ion-card-content>\n        <ion-card-title>\n          <ion-item no-padding>\n            <ion-icon item-start>\n              <i class="fas fa-capsules"></i>\n            </ion-icon>\n            <span>Medication</span>\n          </ion-item>\n        </ion-card-title>\n        <h2>Antigenic</h2>\n        <h3>18 mg/dl</h3>\n        <p>3 times per day</p>\n      </ion-card-content>\n    </ion-card>\n    <ion-card>\n      <ion-card-content>\n        <ion-card-title>\n          <ion-item no-padding>\n            <ion-icon item-start>\n              <i class="fas fa-syringe"></i>\n            </ion-icon>\n            <span>Immunization</span>\n          </ion-item>\n        </ion-card-title>\n        <h2>MMR</h2>\n        <h3>1st dose</h3>\n        <p>A week later</p>\n      </ion-card-content>\n    </ion-card>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/dashboard/dashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], DashboardPage);
    return DashboardPage;
}());

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 35:
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

/***/ 387:
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

/***/ 388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlcoholtrackerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_trackers_trackers__ = __webpack_require__(56);
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
 * Generated class for the AlcoholtrackerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AlcoholtrackerPage = (function () {
    function AlcoholtrackerPage(navCtrl, navParams, fb, trackerService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fb = fb;
        this.trackerService = trackerService;
        this.alcoholtracker = "track";
        this.createForm();
    }
    AlcoholtrackerPage.prototype.createForm = function () {
        this.nowTime = new Date().toISOString();
        this.alcoholForm = this.fb.group({
            percentage: ['', __WEBPACK_IMPORTED_MODULE_0__angular_forms__["Validators"].required],
            volume: ['', __WEBPACK_IMPORTED_MODULE_0__angular_forms__["Validators"].required],
            date: [this.nowTime, __WEBPACK_IMPORTED_MODULE_0__angular_forms__["Validators"].required]
        });
    };
    AlcoholtrackerPage.prototype.ngOnInit = function () {
        var _this = this;
        this.trackerService.getAlcohols()
            .subscribe(function (alcohols) {
            alcohols.sort(function (a, b) {
                var shortdate_a = new Date(new Date(a.date).getFullYear(), new Date(a.date).getMonth() - 1, new Date(a.date).getDate());
                var shortdate_b = new Date(new Date(b.date).getFullYear(), new Date(b.date).getMonth() - 1, new Date(b.date).getDate());
                if (shortdate_a > shortdate_b) {
                    return -1;
                }
                if (shortdate_a < shortdate_b) {
                    return 1;
                }
            });
            _this.alcohols = alcohols;
        }, function (errmess) { return _this.errMess = errmess; });
    };
    AlcoholtrackerPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AlcoholtrackerPage');
    };
    AlcoholtrackerPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        console.log('Begin async operation', refresher);
        setTimeout(function () {
            _this.trackerService.getAlcohols()
                .subscribe(function (alcohols) {
                alcohols.sort(function (a, b) {
                    var shortdate_a = new Date(new Date(a.date).getFullYear(), new Date(a.date).getMonth() - 1, new Date(a.date).getDate());
                    var shortdate_b = new Date(new Date(b.date).getFullYear(), new Date(b.date).getMonth() - 1, new Date(b.date).getDate());
                    if (shortdate_a > shortdate_b) {
                        return -1;
                    }
                    if (shortdate_a < shortdate_b) {
                        return 1;
                    }
                });
                _this.alcohols = alcohols;
            }, function (errmess) { return _this.errMess = errmess; });
            console.log('Async operation has ended');
            refresher.complete();
        }, 1500);
    };
    AlcoholtrackerPage.prototype.onSubmit = function () {
        this.alcohol = this.alcoholForm.value;
        this.trackerService.addAlcohol(this.alcohol);
        this.createForm();
    };
    AlcoholtrackerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-alcoholtracker',template:/*ion-inline-start:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/alcoholtracker/alcoholtracker.html"*/'<!--\n  Generated template for the AlcoholtrackerPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>ALCOHOL</ion-title>\n  </ion-navbar>\n\n  <ion-toolbar>\n    <ion-segment [(ngModel)]="alcoholtracker">\n      <ion-segment-button value="track">\n        TRACK\n      </ion-segment-button>\n      <ion-segment-button value="history">\n        HISTORY\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content color="primary" pullingIcon="arrow-dropdown" pullingText="Pull to refresh" refreshingSpinner="circles"\n      refreshingText="Refreshing..."></ion-refresher-content>\n  </ion-refresher>\n  <div [ngSwitch]="alcoholtracker">\n    <div *ngSwitchCase="\'track\'">\n      <ion-card>\n        <ion-card-content>\n          <form [formGroup]=\'alcoholForm\' (ngSubmit)="onSubmit()">\n            <ion-item class="fix-underline">\n              <ion-label color="primary" floating>Alcohol %</ion-label>\n              <ion-input type="text" formControlName="percentage"></ion-input>\n            </ion-item>\n            <ion-item class="fix-underline">\n              <ion-label color="primary" floating>Volume</ion-label>\n              <ion-input type="text" formControlName="volume"></ion-input>\n            </ion-item>\n            <ion-item class="fix-underline">\n              <ion-label color="primary" fixed>Date</ion-label>\n              <ion-datetime displayFormat="MM/DD/YYYY" formControlName="date"></ion-datetime>\n            </ion-item>\n            <button ion-button type="submit" [disabled]="!alcoholForm.valid">Record</button>\n          </form>\n        </ion-card-content>\n      </ion-card>\n    </div>\n    <div *ngSwitchCase="\'history\'">\n      <ion-list *ngIf="alcohols">\n        <ion-card *ngFor="let alcohol of alcohols">\n          <ion-item>\n            <ion-row class="color-primary-darker">\n              {{alcohol.percentage}} {{alcohol.volume}}\n            </ion-row>\n            <ion-row>\n              <ion-note>\n                {{alcohol.date | date}}\n              </ion-note>\n            </ion-row>\n          </ion-item>\n        </ion-card>\n      </ion-list>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/alcoholtracker/alcoholtracker.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_0__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_3__providers_trackers_trackers__["a" /* TrackersProvider */]])
    ], AlcoholtrackerPage);
    return AlcoholtrackerPage;
}());

//# sourceMappingURL=alcoholtracker.js.map

/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FoodtrackerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_trackers_trackers__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_question_question__ = __webpack_require__(15);
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
        var _this = this;
        this.trackerService.getFoods()
            .subscribe(function (foods) {
            foods.sort(function (a, b) {
                var shortdate_a = new Date(new Date(a.date).getFullYear(), new Date(a.date).getMonth() - 1, new Date(a.date).getDate());
                var shortdate_b = new Date(new Date(b.date).getFullYear(), new Date(b.date).getMonth() - 1, new Date(b.date).getDate());
                if (shortdate_a > shortdate_b) {
                    return -1;
                }
                if (shortdate_a < shortdate_b) {
                    return 1;
                }
                if (a.timeperiod.charCodeAt(0) - b.timeperiod.charCodeAt(0) == 8 || a.timeperiod.charCodeAt(0) - b.timeperiod.charCodeAt(0) == -2 || a.timeperiod.charCodeAt(0) - b.timeperiod.charCodeAt(0) == -10) {
                    return -1;
                }
                if (a.timeperiod.charCodeAt(0) - b.timeperiod.charCodeAt(0) == -8 || a.timeperiod.charCodeAt(0) - b.timeperiod.charCodeAt(0) == 2 || a.timeperiod.charCodeAt(0) - b.timeperiod.charCodeAt(0) == 10) {
                    return 1;
                }
            });
            foods.forEach(function (food) {
                console.log(food.timeperiod, food.date);
            });
            console.log('Breakfast'.charCodeAt(0));
            console.log('Lunch'.charCodeAt(0));
            console.log('Dinner'.charCodeAt(0));
            _this.foods = foods;
        }, function (errmess) { return _this.errMess = errmess; });
    };
    FoodtrackerPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FoodtrackerPage');
    };
    FoodtrackerPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        console.log('Begin async operation', refresher);
        setTimeout(function () {
            _this.trackerService.getFoods()
                .subscribe(function (foods) {
                foods.sort(function (a, b) {
                    var shortdate_a = new Date(new Date(a.date).getFullYear(), new Date(a.date).getMonth() - 1, new Date(a.date).getDate());
                    var shortdate_b = new Date(new Date(b.date).getFullYear(), new Date(b.date).getMonth() - 1, new Date(b.date).getDate());
                    if (shortdate_a > shortdate_b) {
                        return -1;
                    }
                    if (shortdate_a < shortdate_b) {
                        return 1;
                    }
                    if (a.timeperiod.charCodeAt(0) - b.timeperiod.charCodeAt(0) == 8 || a.timeperiod.charCodeAt(0) - b.timeperiod.charCodeAt(0) == -2 || a.timeperiod.charCodeAt(0) - b.timeperiod.charCodeAt(0) == -10) {
                        return -1;
                    }
                    if (a.timeperiod.charCodeAt(0) - b.timeperiod.charCodeAt(0) == -8 || a.timeperiod.charCodeAt(0) - b.timeperiod.charCodeAt(0) == 2 || a.timeperiod.charCodeAt(0) - b.timeperiod.charCodeAt(0) == 10) {
                        return 1;
                    }
                });
                _this.foods = foods;
            }, function (errmess) { return _this.errMess = errmess; });
            console.log('Async operation has ended');
            refresher.complete();
        }, 1500);
    };
    FoodtrackerPage.prototype.onSubmit = function () {
        this.food = this.foodForm.value;
        //var tzoffset = (new Date()).getTimezoneOffset() * 60000; //offset in milliseconds
        //var localISOTime = (new Date(Date.now() - tzoffset)).toISOString().slice(0, -1);
        this.trackerService.addFood(this.food);
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

/***/ }),

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(412);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 412:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_echarts__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ion2_calendar__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ion2_calendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ion2_calendar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_call_number__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(488);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_trackers_trackers__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_tracker_detail_tracker_detail__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_medicalrecord_medicalrecord__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_foodtracker_foodtracker__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_custom_panel_custom_panel__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_alcoholtracker_alcoholtracker__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_create_tracker_create_tracker__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_customtracker_customtracker__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_medical_record_detail_medical_record_detail__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_dashboard_dashboard__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_welcome_welcome__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_login_login__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_signup_signup__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_contact_contact__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_contact_detail_contact_detail__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_contact_add_contacts_contact_add_contacts__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_appointment_appointment__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_appointment_add_appointments_appointment_add_appointments__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_profile_profile__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_profile_editable_profile_editable__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_resources_resources__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_allergy_allergy__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_allergy_detail_allergy_detail__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_allergy_history_allergy_history__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_family_history_family_history__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_family_history_detail_family_history_detail__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_medical_history_medical_history__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_medical_history_detail_medical_history_detail__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_surgical_history_surgical_history__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_surgical_history_detail_surgical_history_detail__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_immunization_immunization__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_immunization_detail_immunization_detail__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_immunization_history_immunization_history__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_social_history_social_history__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pages_social_history_category_social_history_category__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__pages_social_history_detail_social_history_detail__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__pages_doctor_visit_notes_doctor_visit_notes__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__pages_doctor_visit_notes_detail_doctor_visit_notes_detail__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__pages_medication_medication__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__pages_medication_detail_medication_detail__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__pages_test_results_test_results__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__pages_diagnostic_procedure_diagnostic_procedure__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__ionic_native_status_bar__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__ionic_native_splash_screen__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__providers_trackers_trackers__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__providers_process_httpmsg_process_httpmsg__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__providers_medical_classification_medical_classification__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__providers_allergy_classification_allergy_classification__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__providers_immunization_classification_immunization_classification__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__providers_user_user__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__providers_appointment_appointment__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__providers_social_history_classification_social_history_classification__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__providers_question_option_question_option__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__providers_question_control_question_control__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__providers_question_question__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__providers_contacts_contacts__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__components_tile_tile__ = __webpack_require__(489);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__components_dynamic_form_question_dynamic_form_question__ = __webpack_require__(490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68__components_dynamic_form_dynamic_form__ = __webpack_require__(491);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_69__components_calendar_calendar__ = __webpack_require__(492);
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
                __WEBPACK_IMPORTED_MODULE_10__pages_trackers_trackers__["a" /* TrackersPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_tracker_detail_tracker_detail__["a" /* TrackerDetailPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_medicalrecord_medicalrecord__["a" /* MedicalrecordPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_medical_record_detail_medical_record_detail__["a" /* MedicalRecordDetailPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_foodtracker_foodtracker__["a" /* FoodtrackerPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_custom_panel_custom_panel__["a" /* CustomPanelPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_alcoholtracker_alcoholtracker__["a" /* AlcoholtrackerPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_create_tracker_create_tracker__["a" /* CreateTrackerPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_customtracker_customtracker__["a" /* CustomtrackerPage */],
                __WEBPACK_IMPORTED_MODULE_66__components_tile_tile__["a" /* TileComponent */],
                __WEBPACK_IMPORTED_MODULE_19__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_allergy_allergy__["a" /* AllergyPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_allergy_detail_allergy_detail__["a" /* AllergyDetailPage */],
                __WEBPACK_IMPORTED_MODULE_68__components_dynamic_form_dynamic_form__["a" /* DynamicFormComponent */],
                __WEBPACK_IMPORTED_MODULE_67__components_dynamic_form_question_dynamic_form_question__["a" /* DynamicFormQuestionComponent */],
                __WEBPACK_IMPORTED_MODULE_20__pages_welcome_welcome__["a" /* WelcomePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_contact_detail_contact_detail__["a" /* ContactDetailPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_contact_add_contacts_contact_add_contacts__["a" /* ContactAddContactsPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_appointment_appointment__["a" /* AppointmentPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_appointment_add_appointments_appointment_add_appointments__["a" /* AppointmentAddAppointmentsPage */],
                __WEBPACK_IMPORTED_MODULE_69__components_calendar_calendar__["a" /* CalendarComponent */],
                __WEBPACK_IMPORTED_MODULE_28__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_profile_editable_profile_editable__["a" /* ProfileEditablePage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_resources_resources__["a" /* ResourcesPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_allergy_history_allergy_history__["a" /* AllergyHistoryPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_family_history_family_history__["a" /* FamilyHistoryPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_family_history_detail_family_history_detail__["a" /* FamilyHistoryDetailPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_medical_history_medical_history__["a" /* MedicalHistoryPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_medical_history_detail_medical_history_detail__["a" /* MedicalHistoryDetailPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_surgical_history_surgical_history__["a" /* SurgicalHistoryPage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_surgical_history_detail_surgical_history_detail__["a" /* SurgicalHistoryDetailPage */],
                __WEBPACK_IMPORTED_MODULE_40__pages_immunization_immunization__["a" /* ImmunizationPage */],
                __WEBPACK_IMPORTED_MODULE_42__pages_immunization_history_immunization_history__["a" /* ImmunizationHistoryPage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_immunization_detail_immunization_detail__["a" /* ImmunizationDetailPage */],
                __WEBPACK_IMPORTED_MODULE_43__pages_social_history_social_history__["a" /* SocialHistoryPage */],
                __WEBPACK_IMPORTED_MODULE_44__pages_social_history_category_social_history_category__["a" /* SocialHistoryCategoryPage */],
                __WEBPACK_IMPORTED_MODULE_45__pages_social_history_detail_social_history_detail__["a" /* SocialHistoryDetailPage */],
                __WEBPACK_IMPORTED_MODULE_46__pages_doctor_visit_notes_doctor_visit_notes__["a" /* DoctorVisitNotesPage */],
                __WEBPACK_IMPORTED_MODULE_47__pages_doctor_visit_notes_detail_doctor_visit_notes_detail__["a" /* DoctorVisitNotesDetailPage */],
                __WEBPACK_IMPORTED_MODULE_48__pages_medication_medication__["a" /* MedicationPage */],
                __WEBPACK_IMPORTED_MODULE_49__pages_medication_detail_medication_detail__["a" /* MedicationDetailPage */],
                __WEBPACK_IMPORTED_MODULE_50__pages_test_results_test_results__["a" /* TestResultsPage */],
                __WEBPACK_IMPORTED_MODULE_51__pages_diagnostic_procedure_diagnostic_procedure__["a" /* DiagnosticProcedurePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicModule"].forRoot(__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/alcoholtracker/alcoholtracker.module#AlcoholtrackerPageModule', name: 'AlcoholtrackerPage', segment: 'alcoholtracker', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/allergy-detail/allergy-detail.module#AllergyDetailPageModule', name: 'AllergyDetailPage', segment: 'allergy-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/allergy/allergy.module#AllergyPageModule', name: 'AllergyPage', segment: 'allergy', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/allergy-history/allergy-history.module#AllergyHistoryPageModule', name: 'AllergyHistoryPage', segment: 'allergy-history', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/appointment/appointment.module#AppointmentPageModule', name: 'AppointmentPage', segment: 'appointment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/appointment-add-appointments/appointment-add-appointments.module#AppointmentAddAppointmentsPageModule', name: 'AppointmentAddAppointmentsPage', segment: 'appointment-add-appointments', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contact-add-contacts/contact-add-contacts.module#ContactAddContactsPageModule', name: 'ContactAddContactsPage', segment: 'contact-add-contacts', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contact-detail/contact-detail.module#ContactDetailPageModule', name: 'ContactDetailPage', segment: 'contact-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/create-tracker/create-tracker.module#CreateTrackerPageModule', name: 'CreateTrackerPage', segment: 'create-tracker', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contact/contact.module#ContactPageModule', name: 'ContactPage', segment: 'contact', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/custom-panel/custom-panel.module#CustomPanelPageModule', name: 'CustomPanelPage', segment: 'custom-panel', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/customtracker/customtracker.module#CustomtrackerPageModule', name: 'CustomtrackerPage', segment: 'customtracker', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dashboard/dashboard.module#DashboardPageModule', name: 'DashboardPage', segment: 'dashboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/diagnostic-procedure/diagnostic-procedure.module#DiagnosticProcedurePageModule', name: 'DiagnosticProcedurePage', segment: 'diagnostic-procedure', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/doctor-visit-notes-detail/doctor-visit-notes-detail.module#DoctorVisitNotesDetailPageModule', name: 'DoctorVisitNotesDetailPage', segment: 'doctor-visit-notes-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/doctor-visit-notes/doctor-visit-notes.module#DoctorVisitNotesPageModule', name: 'DoctorVisitNotesPage', segment: 'doctor-visit-notes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/family-history/family-history.module#FamilyHistoryPageModule', name: 'FamilyHistoryPage', segment: 'family-history', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/family-history-detail/family-history-detail.module#FamilyHistoryDetailPageModule', name: 'FamilyHistoryDetailPage', segment: 'family-history-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/foodtracker/foodtracker.module#FoodtrackerPageModule', name: 'FoodtrackerPage', segment: 'foodtracker', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/immunization-detail/immunization-detail.module#ImmunizationDetailPageModule', name: 'ImmunizationDetailPage', segment: 'immunization-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/immunization-history/immunization-history.module#ImmunizationHistoryPageModule', name: 'ImmunizationHistoryPage', segment: 'immunization-history', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/immunization/immunization.module#ImmunizationPageModule', name: 'ImmunizationPage', segment: 'immunization', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/medical-history-detail/medical-history-detail.module#MedicalHistoryDetailPageModule', name: 'MedicalHistoryDetailPage', segment: 'medical-history-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/medical-history/medical-history.module#MedicalHistoryPageModule', name: 'MedicalHistoryPage', segment: 'medical-history', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/medicalrecord/medicalrecord.module#MedicalrecordPageModule', name: 'MedicalrecordPage', segment: 'medicalrecord', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/medication-detail/medication-detail.module#MedicationDetailPageModule', name: 'MedicationDetailPage', segment: 'medication-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/medical-record-detail/medical-record-detail.module#MedicalRecordDetailPageModule', name: 'MedicalRecordDetailPage', segment: 'medical-record-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/medication/medication.module#MedicationPageModule', name: 'MedicationPage', segment: 'medication', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile-editable/profile-editable.module#ProfileEditablePageModule', name: 'ProfileEditablePage', segment: 'profile-editable', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/resources/resources.module#ResourcesPageModule', name: 'ResourcesPage', segment: 'resources', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/social-history-detail/social-history-detail.module#SocialHistoryDetailPageModule', name: 'SocialHistoryDetailPage', segment: 'social-history-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/social-history/social-history.module#SocialHistoryPageModule', name: 'SocialHistoryPage', segment: 'social-history', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/surgical-history/surgical-history.module#SurgicalHistoryPageModule', name: 'SurgicalHistoryPage', segment: 'surgical-history', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/social-history-category/social-history-category.module#SocialHistoryCategoryPageModule', name: 'SocialHistoryCategoryPage', segment: 'social-history-category', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/test-results/test-results.module#TestResultsPageModule', name: 'TestResultsPage', segment: 'test-results', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tracker-detail/tracker-detail.module#TrackerDetailPageModule', name: 'TrackerDetailPage', segment: 'tracker-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/trackers/trackers.module#TrackersPageModule', name: 'TrackersPage', segment: 'trackers', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/surgical-history-detail/surgical-history-detail.module#SurgicalHistoryDetailPageModule', name: 'SurgicalHistoryDetailPage', segment: 'surgical-history-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/welcome/welcome.module#WelcomePageModule', name: 'WelcomePage', segment: 'welcome', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_6_ngx_echarts__["a" /* NgxEchartsModule */],
                __WEBPACK_IMPORTED_MODULE_7_ion2_calendar__["CalendarModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicApp"]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_trackers_trackers__["a" /* TrackersPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_tracker_detail_tracker_detail__["a" /* TrackerDetailPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_medicalrecord_medicalrecord__["a" /* MedicalrecordPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_medical_record_detail_medical_record_detail__["a" /* MedicalRecordDetailPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_foodtracker_foodtracker__["a" /* FoodtrackerPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_custom_panel_custom_panel__["a" /* CustomPanelPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_alcoholtracker_alcoholtracker__["a" /* AlcoholtrackerPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_create_tracker_create_tracker__["a" /* CreateTrackerPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_customtracker_customtracker__["a" /* CustomtrackerPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_allergy_allergy__["a" /* AllergyPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_allergy_detail_allergy_detail__["a" /* AllergyDetailPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_welcome_welcome__["a" /* WelcomePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_contact_detail_contact_detail__["a" /* ContactDetailPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_contact_add_contacts_contact_add_contacts__["a" /* ContactAddContactsPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_appointment_appointment__["a" /* AppointmentPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_appointment_add_appointments_appointment_add_appointments__["a" /* AppointmentAddAppointmentsPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_profile_editable_profile_editable__["a" /* ProfileEditablePage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_resources_resources__["a" /* ResourcesPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_allergy_history_allergy_history__["a" /* AllergyHistoryPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_family_history_family_history__["a" /* FamilyHistoryPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_family_history_detail_family_history_detail__["a" /* FamilyHistoryDetailPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_medical_history_medical_history__["a" /* MedicalHistoryPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_medical_history_detail_medical_history_detail__["a" /* MedicalHistoryDetailPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_surgical_history_surgical_history__["a" /* SurgicalHistoryPage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_surgical_history_detail_surgical_history_detail__["a" /* SurgicalHistoryDetailPage */],
                __WEBPACK_IMPORTED_MODULE_40__pages_immunization_immunization__["a" /* ImmunizationPage */],
                __WEBPACK_IMPORTED_MODULE_42__pages_immunization_history_immunization_history__["a" /* ImmunizationHistoryPage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_immunization_detail_immunization_detail__["a" /* ImmunizationDetailPage */],
                __WEBPACK_IMPORTED_MODULE_43__pages_social_history_social_history__["a" /* SocialHistoryPage */],
                __WEBPACK_IMPORTED_MODULE_44__pages_social_history_category_social_history_category__["a" /* SocialHistoryCategoryPage */],
                __WEBPACK_IMPORTED_MODULE_45__pages_social_history_detail_social_history_detail__["a" /* SocialHistoryDetailPage */],
                __WEBPACK_IMPORTED_MODULE_46__pages_doctor_visit_notes_doctor_visit_notes__["a" /* DoctorVisitNotesPage */],
                __WEBPACK_IMPORTED_MODULE_47__pages_doctor_visit_notes_detail_doctor_visit_notes_detail__["a" /* DoctorVisitNotesDetailPage */],
                __WEBPACK_IMPORTED_MODULE_48__pages_medication_medication__["a" /* MedicationPage */],
                __WEBPACK_IMPORTED_MODULE_49__pages_medication_detail_medication_detail__["a" /* MedicationDetailPage */],
                __WEBPACK_IMPORTED_MODULE_50__pages_test_results_test_results__["a" /* TestResultsPage */],
                __WEBPACK_IMPORTED_MODULE_51__pages_diagnostic_procedure_diagnostic_procedure__["a" /* DiagnosticProcedurePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_52__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_53__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicErrorHandler"] },
                __WEBPACK_IMPORTED_MODULE_54__providers_trackers_trackers__["a" /* TrackersProvider */],
                __WEBPACK_IMPORTED_MODULE_55__providers_process_httpmsg_process_httpmsg__["a" /* ProcessHttpmsgProvider */],
                __WEBPACK_IMPORTED_MODULE_56__providers_medical_classification_medical_classification__["a" /* MedicalClassificationProvider */],
                __WEBPACK_IMPORTED_MODULE_57__providers_allergy_classification_allergy_classification__["a" /* AllergyClassificationProvider */],
                __WEBPACK_IMPORTED_MODULE_58__providers_immunization_classification_immunization_classification__["a" /* ImmunizationClassificationProvider */],
                __WEBPACK_IMPORTED_MODULE_63__providers_question_control_question_control__["a" /* QuestionControlProvider */],
                __WEBPACK_IMPORTED_MODULE_64__providers_question_question__["a" /* QuestionProvider */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_call_number__["a" /* CallNumber */],
                __WEBPACK_IMPORTED_MODULE_65__providers_contacts_contacts__["a" /* ContactsProvider */],
                __WEBPACK_IMPORTED_MODULE_62__providers_question_option_question_option__["a" /* QuestionOptionProvider */],
                __WEBPACK_IMPORTED_MODULE_59__providers_user_user__["a" /* UserProvider */],
                __WEBPACK_IMPORTED_MODULE_60__providers_appointment_appointment__["a" /* AppointmentProvider */],
                __WEBPACK_IMPORTED_MODULE_61__providers_social_history_classification_social_history_classification__["a" /* SocialHistoryClassificationProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 445:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextboxQuestion; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_question_base__ = __webpack_require__(35);
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
        return _this;
    }
    return TextboxQuestion;
}(__WEBPACK_IMPORTED_MODULE_0__shared_question_base__["a" /* QuestionBase */]));

//# sourceMappingURL=question-textbox.js.map

/***/ }),

/***/ 446:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatetimeQuestion; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_question_base__ = __webpack_require__(35);
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
        return _this;
    }
    return DatetimeQuestion;
}(__WEBPACK_IMPORTED_MODULE_0__shared_question_base__["a" /* QuestionBase */]));

//# sourceMappingURL=question-datetime.js.map

/***/ }),

/***/ 447:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropdownQuestion; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_question_base__ = __webpack_require__(35);
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

/***/ 448:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextareaQuestion; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_question_base__ = __webpack_require__(35);
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
        _this.rows = options['rows'] || 5;
        return _this;
    }
    return TextareaQuestion;
}(__WEBPACK_IMPORTED_MODULE_0__shared_question_base__["a" /* QuestionBase */]));

//# sourceMappingURL=question-textarea.js.map

/***/ }),

/***/ 449:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToggleQuestion; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_question_base__ = __webpack_require__(35);
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

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProcessHttpmsgProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
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
        var errMsg;
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

/***/ 484:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 259,
	"./af.js": 259,
	"./ar": 260,
	"./ar-dz": 261,
	"./ar-dz.js": 261,
	"./ar-kw": 262,
	"./ar-kw.js": 262,
	"./ar-ly": 263,
	"./ar-ly.js": 263,
	"./ar-ma": 264,
	"./ar-ma.js": 264,
	"./ar-sa": 265,
	"./ar-sa.js": 265,
	"./ar-tn": 266,
	"./ar-tn.js": 266,
	"./ar.js": 260,
	"./az": 267,
	"./az.js": 267,
	"./be": 268,
	"./be.js": 268,
	"./bg": 269,
	"./bg.js": 269,
	"./bm": 270,
	"./bm.js": 270,
	"./bn": 271,
	"./bn.js": 271,
	"./bo": 272,
	"./bo.js": 272,
	"./br": 273,
	"./br.js": 273,
	"./bs": 274,
	"./bs.js": 274,
	"./ca": 275,
	"./ca.js": 275,
	"./cs": 276,
	"./cs.js": 276,
	"./cv": 277,
	"./cv.js": 277,
	"./cy": 278,
	"./cy.js": 278,
	"./da": 279,
	"./da.js": 279,
	"./de": 280,
	"./de-at": 281,
	"./de-at.js": 281,
	"./de-ch": 282,
	"./de-ch.js": 282,
	"./de.js": 280,
	"./dv": 283,
	"./dv.js": 283,
	"./el": 284,
	"./el.js": 284,
	"./en-au": 285,
	"./en-au.js": 285,
	"./en-ca": 286,
	"./en-ca.js": 286,
	"./en-gb": 287,
	"./en-gb.js": 287,
	"./en-ie": 288,
	"./en-ie.js": 288,
	"./en-il": 289,
	"./en-il.js": 289,
	"./en-nz": 290,
	"./en-nz.js": 290,
	"./eo": 291,
	"./eo.js": 291,
	"./es": 292,
	"./es-do": 293,
	"./es-do.js": 293,
	"./es-us": 294,
	"./es-us.js": 294,
	"./es.js": 292,
	"./et": 295,
	"./et.js": 295,
	"./eu": 296,
	"./eu.js": 296,
	"./fa": 297,
	"./fa.js": 297,
	"./fi": 298,
	"./fi.js": 298,
	"./fo": 299,
	"./fo.js": 299,
	"./fr": 300,
	"./fr-ca": 301,
	"./fr-ca.js": 301,
	"./fr-ch": 302,
	"./fr-ch.js": 302,
	"./fr.js": 300,
	"./fy": 303,
	"./fy.js": 303,
	"./gd": 304,
	"./gd.js": 304,
	"./gl": 305,
	"./gl.js": 305,
	"./gom-latn": 306,
	"./gom-latn.js": 306,
	"./gu": 307,
	"./gu.js": 307,
	"./he": 308,
	"./he.js": 308,
	"./hi": 309,
	"./hi.js": 309,
	"./hr": 310,
	"./hr.js": 310,
	"./hu": 311,
	"./hu.js": 311,
	"./hy-am": 312,
	"./hy-am.js": 312,
	"./id": 313,
	"./id.js": 313,
	"./is": 314,
	"./is.js": 314,
	"./it": 315,
	"./it.js": 315,
	"./ja": 316,
	"./ja.js": 316,
	"./jv": 317,
	"./jv.js": 317,
	"./ka": 318,
	"./ka.js": 318,
	"./kk": 319,
	"./kk.js": 319,
	"./km": 320,
	"./km.js": 320,
	"./kn": 321,
	"./kn.js": 321,
	"./ko": 322,
	"./ko.js": 322,
	"./ky": 323,
	"./ky.js": 323,
	"./lb": 324,
	"./lb.js": 324,
	"./lo": 325,
	"./lo.js": 325,
	"./lt": 326,
	"./lt.js": 326,
	"./lv": 327,
	"./lv.js": 327,
	"./me": 328,
	"./me.js": 328,
	"./mi": 329,
	"./mi.js": 329,
	"./mk": 330,
	"./mk.js": 330,
	"./ml": 331,
	"./ml.js": 331,
	"./mn": 332,
	"./mn.js": 332,
	"./mr": 333,
	"./mr.js": 333,
	"./ms": 334,
	"./ms-my": 335,
	"./ms-my.js": 335,
	"./ms.js": 334,
	"./mt": 336,
	"./mt.js": 336,
	"./my": 337,
	"./my.js": 337,
	"./nb": 338,
	"./nb.js": 338,
	"./ne": 339,
	"./ne.js": 339,
	"./nl": 340,
	"./nl-be": 341,
	"./nl-be.js": 341,
	"./nl.js": 340,
	"./nn": 342,
	"./nn.js": 342,
	"./pa-in": 343,
	"./pa-in.js": 343,
	"./pl": 344,
	"./pl.js": 344,
	"./pt": 345,
	"./pt-br": 346,
	"./pt-br.js": 346,
	"./pt.js": 345,
	"./ro": 347,
	"./ro.js": 347,
	"./ru": 348,
	"./ru.js": 348,
	"./sd": 349,
	"./sd.js": 349,
	"./se": 350,
	"./se.js": 350,
	"./si": 351,
	"./si.js": 351,
	"./sk": 352,
	"./sk.js": 352,
	"./sl": 353,
	"./sl.js": 353,
	"./sq": 354,
	"./sq.js": 354,
	"./sr": 355,
	"./sr-cyrl": 356,
	"./sr-cyrl.js": 356,
	"./sr.js": 355,
	"./ss": 357,
	"./ss.js": 357,
	"./sv": 358,
	"./sv.js": 358,
	"./sw": 359,
	"./sw.js": 359,
	"./ta": 360,
	"./ta.js": 360,
	"./te": 361,
	"./te.js": 361,
	"./tet": 362,
	"./tet.js": 362,
	"./tg": 363,
	"./tg.js": 363,
	"./th": 364,
	"./th.js": 364,
	"./tl-ph": 365,
	"./tl-ph.js": 365,
	"./tlh": 366,
	"./tlh.js": 366,
	"./tr": 367,
	"./tr.js": 367,
	"./tzl": 368,
	"./tzl.js": 368,
	"./tzm": 369,
	"./tzm-latn": 370,
	"./tzm-latn.js": 370,
	"./tzm.js": 369,
	"./ug-cn": 371,
	"./ug-cn.js": 371,
	"./uk": 372,
	"./uk.js": 372,
	"./ur": 373,
	"./ur.js": 373,
	"./uz": 374,
	"./uz-latn": 375,
	"./uz-latn.js": 375,
	"./uz.js": 374,
	"./vi": 376,
	"./vi.js": 376,
	"./x-pseudo": 377,
	"./x-pseudo.js": 377,
	"./yo": 378,
	"./yo.js": 378,
	"./zh-cn": 379,
	"./zh-cn.js": 379,
	"./zh-hk": 380,
	"./zh-hk.js": 380,
	"./zh-tw": 381,
	"./zh-tw.js": 381
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
webpackContext.id = 484;

/***/ }),

/***/ 488:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_trackers_trackers__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_welcome_welcome__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_appointment_appointment__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_dashboard_dashboard__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_profile_profile__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_resources_resources__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_allergy_history_allergy_history__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_family_history_family_history__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_medical_history_medical_history__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_surgical_history_surgical_history__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_immunization_history_immunization_history__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_social_history_social_history__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_doctor_visit_notes_doctor_visit_notes__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_medication_medication__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_test_results_test_results__ = __webpack_require__(157);
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
    function MyApp(platform, statusBar, splashScreen, app, alertCtrl, toastCtrl) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.app = app;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
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
                component: __WEBPACK_IMPORTED_MODULE_4__pages_trackers_trackers__["a" /* TrackersPage */]
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
        // const root = this.app.getRootNav();
        // root.popToRoot();
        var confirm = this.alertCtrl.create({
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
                        var toast = _this.toastCtrl.create({
                            message: 'Log out successfully',
                            duration: 2000
                        });
                        toast.present();
                        _this.nav.push(__WEBPACK_IMPORTED_MODULE_5__pages_welcome_welcome__["a" /* WelcomePage */]);
                    }
                }
            ]
        });
        confirm.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/app/app.html"*/'<ion-split-pane>\n\n  <ion-menu [content]="content">\n    <ion-header>\n      <ion-toolbar color="primary">\n        <ion-title>Health Manager</ion-title>\n      </ion-toolbar>\n    </ion-header>\n\n    <ion-content>\n      <div class="sidemenu">\n        <button menuClose ion-item color="primary-pale" (click)="goToDashboard()">\n          <ion-icon item-left name="analytics"></ion-icon>\n          Dashboard\n        </button>\n        <!-- Two levels buttons -->\n        <ion-list *ngFor="let page of pages; let i = index" class="section" no-lines no-padding>\n          <button ion-item (click)="toggleSection(i)" detail-none [ngClass]="{\'section-open\': page.open, \'section-close\': !page.open}">\n            <ion-icon item-left name="arrow-forward" *ngIf="!page.open"></ion-icon>\n            <ion-icon item-left name="arrow-down" *ngIf="page.open"></ion-icon>\n            {{page.title}}\n          </button>\n          <ion-list *ngIf="page.children && page.open" class="section" no-padding>\n            <button menuClose ion-item *ngFor="let p of page.children" (click)="openPage(p)">\n              <ion-icon [name]="p.icon" item-left></ion-icon>\n              {{p.title}}\n            </button>\n          </ion-list>\n        </ion-list>\n        <!-- One level buttons -->\n        <ion-list class="section" *ngFor="let page of onelevelPages; let i = index" no-lines no-padding>\n          <button menuClose ion-item color="primary-pale" (click)="openPage(page)">\n            <ion-icon item-left [name]=\'page.icon\'></ion-icon>\n            {{page.title}}\n          </button>\n        </ion-list>\n      </div>\n      <button class="logout" menuClose ion-button icon-start clear (click)="logout()">\n        <ion-icon item-left name="log-out"></ion-icon>\n        Logout\n      </button>\n    </ion-content>\n\n  </ion-menu>\n\n  <!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n  <ion-nav [root]="rootPage" #content #myNav swipeBackEnabled="false" main></ion-nav>\n\n</ion-split-pane>\n'/*ion-inline-end:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["App"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 489:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_medical_classification_medical_classification__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_medical_record_detail_medical_record_detail__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_allergy_detail_allergy_detail__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_immunization_detail_immunization_detail__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_social_history_detail_social_history_detail__ = __webpack_require__(152);
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
    function TileComponent(navCtrl, mcp, modalCtrl) {
        this.navCtrl = navCtrl;
        this.mcp = mcp;
        this.modalCtrl = modalCtrl;
        this.color = ['darksalmon', 'rosybrown', 'slategrey'];
        console.log('Hello TileComponent Component');
    }
    TileComponent.prototype.getSub = function (id) {
        this.tiles = this.mcp.getMenu(id);
    };
    TileComponent.prototype.goToRecord = function (tile) {
        if (tile.menu == "lab_test") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_medical_record_detail_medical_record_detail__["a" /* MedicalRecordDetailPage */], {
                'id': tile.id,
                'title': tile.name
            });
        }
        else if (tile.menu == "allergy") {
            var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__pages_allergy_detail_allergy_detail__["a" /* AllergyDetailPage */], {
                'id': tile.id,
                'title': tile.name
            });
            modal.present();
        }
        else if (tile.menu == "immunization") {
            var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__pages_immunization_detail_immunization_detail__["a" /* ImmunizationDetailPage */], {
                'id': tile.id,
                'title': tile.name
            });
            modal.present();
        }
        else if (tile.menu == "socialhistory") {
            var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__pages_social_history_detail_social_history_detail__["a" /* SocialHistoryDetailPage */], {
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
            selector: 'tile',template:/*ion-inline-start:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/components/tile/tile.html"*/'<!-- Generated template for the TileComponent component -->\n<ion-grid>\n  <ion-row>\n    <ion-col col-4 *ngFor="let tile of tiles; let i = index">\n      <ion-card class="fix-card" *ngIf="!tile.end" [ngStyle]="{\'background-color\': color[i%3]}" (click)="getSub(tile.id)">\n        <div class="item_size" color="primary">\n          <p class="break">{{tile.name | titlecase}}</p>\n        </div>\n      </ion-card>\n      <ion-card class="fix-card" *ngIf="tile.end" [ngStyle]="{\'background-color\': color[i%3]}" (click)="goToRecord(tile)">\n        <div class="item_size" color="primary">\n          <p class="break">{{tile.name | titlecase}}</p>\n        </div>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n'/*ion-inline-end:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/components/tile/tile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_2__providers_medical_classification_medical_classification__["a" /* MedicalClassificationProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"]])
    ], TileComponent);
    return TileComponent;
}());

//# sourceMappingURL=tile.js.map

/***/ }),

/***/ 490:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DynamicFormQuestionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_question_base__ = __webpack_require__(35);
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
    }
    Object.defineProperty(DynamicFormQuestionComponent.prototype, "isValid", {
        get: function () { return this.form.controls[this.question.key].valid; },
        enumerable: true,
        configurable: true
    });
    DynamicFormQuestionComponent.prototype.ngOnInit = function () {
        console.log(this.question);
        this.form.patchValue({
            datetime: new Date().toISOString()
        });
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
            selector: 'dynamic-form-question',template:/*ion-inline-start:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/components/dynamic-form-question/dynamic-form-question.html"*/'<!-- Generated template for the DynamicFormQuestionComponent component -->\n<div [formGroup]="form" class="fix-underline" [ngClass]="{\'red-underline\': ((!form.controls[question.key].pristine) && (!isValid))}">\n  <label class="width color" [attr.for]="question.key" [ngClass]="{\'full-width\': (question.controlType==\'textarea\')}">{{question.label}}</label>\n  <div class="width" [ngSwitch]="question.controlType" [ngClass]="{\'full-width\': (question.controlType==\'textarea\')}">\n\n    <input class="input" *ngSwitchCase="\'textbox\'" [formControlName]="question.key" [id]="question.key" [type]="question.type">\n\n    <ion-select class="select-width left-pull" [id]="question.key" *ngSwitchCase="\'dropdown\'" [formControlName]="question.key" [multiple]="question.multiple">\n      <ion-option *ngFor="let opt of question.options" [value]="opt.key">{{opt.value}}</ion-option>\n    </ion-select>\n\n    <ion-datetime class="left-pull" *ngSwitchCase="\'datetime\'" [formControlName]="question.key" [id]="question.key" displayFormat="MM/DD/YYYY"></ion-datetime>\n\n    <textarea class="input" *ngSwitchCase="\'textarea\'" [formControlName]="question.key" [id]="question.key" [rows]="question.rows"></textarea>\n\n    <ion-toggle class="right-pull" *ngSwitchCase="\'toggle\'" [formControlName]="question.key" [id]="question.key" color="slate-grey"></ion-toggle>\n\n  </div>\n  \n  <!-- <div *ngIf="(!form.controls[question.key].pristine) && (!isValid)">{{question.label}} is required</div> -->\n</div>\n'/*ion-inline-end:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/components/dynamic-form-question/dynamic-form-question.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], DynamicFormQuestionComponent);
    return DynamicFormQuestionComponent;
}());

//# sourceMappingURL=dynamic-form-question.js.map

/***/ }),

/***/ 491:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DynamicFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_question_control_question_control__ = __webpack_require__(387);
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
        this.payLoad = '';
        console.log('Hello DynamicFormComponent Component');
    }
    DynamicFormComponent.prototype.ngOnInit = function () {
        this.form = this.qcp.toFormGroup(this.questions);
    };
    DynamicFormComponent.prototype.onSubmit = function () {
        this.payLoad = this.form.value;
        console.log(this.payLoad);
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

/***/ 492:
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

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrackersProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__process_httpmsg_process_httpmsg__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_baseurl__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
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
    TrackersProvider.prototype.getFoods = function () {
        var _this = this;
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__shared_baseurl__["a" /* baseurl */] + 'foods')
            .map(function (res) { return _this.processHttpmsgService.extractData(res); })
            .catch(function (error) { return _this.processHttpmsgService.handleError(error); });
    };
    TrackersProvider.prototype.addFood = function (food) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__shared_baseurl__["a" /* baseurl */] + 'foods', food)
            .subscribe(function (res) { console.log(res.json()); });
    };
    TrackersProvider.prototype.getAlcohols = function () {
        var _this = this;
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__shared_baseurl__["a" /* baseurl */] + 'alcohols')
            .map(function (res) { return _this.processHttpmsgService.extractData(res); })
            .catch(function (error) { return _this.processHttpmsgService.handleError(error); });
    };
    TrackersProvider.prototype.addAlcohol = function (alcohol) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__shared_baseurl__["a" /* baseurl */] + 'alcohols', alcohol)
            .subscribe(function (res) { console.log(res.json()); });
    };
    TrackersProvider.prototype.getMytrackers = function () {
        var _this = this;
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__shared_baseurl__["a" /* baseurl */] + 'mytrackers')
            .map(function (res) { return _this.processHttpmsgService.extractData(res); })
            .catch(function (error) { return _this.processHttpmsgService.handleError(error); });
    };
    TrackersProvider.prototype.addMytracker = function (mytracker) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__shared_baseurl__["a" /* baseurl */] + 'mytrackers', mytracker)
            .subscribe(function (res) { console.log(res.json()); });
    };
    TrackersProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2__process_httpmsg_process_httpmsg__["a" /* ProcessHttpmsgProvider */]])
    ], TrackersProvider);
    return TrackersProvider;
}());

//# sourceMappingURL=trackers.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return baseurl; });
var baseurl = 'http://localhost:3000/api/';
//# sourceMappingURL=baseurl.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_baseurl__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__process_httpmsg_process_httpmsg__ = __webpack_require__(47);
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
    ContactsProvider.prototype.addContacts = function (contact, id) {
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

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactAddContactsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_contacts_contacts__ = __webpack_require__(58);
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
    function ContactAddContactsPage(navCtrl, navParams, fb, viewCtrl, toastCtrl, contactsProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fb = fb;
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.contactsProvider = contactsProvider;
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
            "specialization": '',
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
            "specialization": {
                "required": "Specialization is required."
            },
            "tel": {
                "required": "Tel number is required.",
                "pattern": "Please enter a valid phone number."
            },
            "fax": {
                "pattern": "Please enter a valid fax number."
            },
            "group": {
                "required": "Contact group is required."
            }
        };
        //get userId from storage
        this.userId = 1;
        this.addContactForm = this.fb.group({
            firstname: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(2), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(25)]],
            lastname: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(2), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(25)]],
            relationship: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            tel: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].pattern('[0-9]{10}')]],
            fax: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].pattern('[0-9]{10}')],
            specialization: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            location1: [''],
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
                specialization: ""
            });
        }
        else {
            this.isDoctor = false;
            this.addContactForm.patchValue({
                specialization: "0"
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
        var contact = this.addContactForm.value;
        contact.group = this.addContactForm.get("group").value.toString();
        console.log(contact);
        // post new contact info
        this.contactsProvider.addContacts(contact, this.userId)
            .subscribe(function (contact) {
            _this.toastCtrl.create({
                message: 'Successfully add new contact',
                position: 'bottom',
                duration: 2000
            }).present();
            _this.viewCtrl.dismiss();
        }, function (error) {
            _this.toastCtrl.create({
                message: 'Failed to add new contact',
                position: 'bottom',
                duration: 2000
            }).present();
        });
    };
    ContactAddContactsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-contact-add-contacts',template:/*ion-inline-start:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/contact-add-contacts/contact-add-contacts.html"*/'<!--\n  Generated template for the ContactAddContactsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-toolbar color="primary">\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="white" showWhen="ios">Cancel</span>\n        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Add Contacts</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form [formGroup]=\'addContactForm\' (ngSubmit)="onSubmit()">\n    <ion-item>\n      <ion-label>Contact Group<span class="color-red">*</span></ion-label>\n      <ion-select formControlName="group" (value)="group" multiple="true">\n        <ion-option value="emergency">Emergency</ion-option>\n        <ion-option value="friend">Friend</ion-option>\n        <ion-option value="family">Family</ion-option>\n        <ion-option value="doctor">Doctor</ion-option>\n      </ion-select>\n    </ion-item>\n    <div class="pull-right color-red">\n      <span [hidden]="!(formErrors.group)">{{formErrors.group}}</span>\n    </div>\n    <ion-item>\n      <ion-label floating>First Name<span class="color-red">*</span></ion-label>\n      <ion-input formControlName="firstname"></ion-input>\n    </ion-item>\n    <div class="pull-right color-red">\n      <span [hidden]="!(formErrors.firstname)">{{formErrors.firstname}}</span>\n    </div>\n    <ion-item>\n      <ion-label floating>Last Name<span class="color-red">*</span></ion-label>\n      <ion-input formControlName="lastname"></ion-input>\n    </ion-item>\n    <div class="pull-right color-red">\n      <span [hidden]="!(formErrors.lastname)">{{formErrors.lastname}}</span>\n    </div>\n    <ion-item *ngIf="isFamilyorEmergency">\n      <ion-label floating>Relationship<span class="color-red">*</span></ion-label>\n      <ion-input formControlName="relationship"></ion-input>\n    </ion-item>\n    <div class="pull-right color-red" *ngIf="isFamilyorEmergency">\n      <span [hidden]="!(formErrors.relationship)">{{formErrors.relationship}}</span>\n    </div>\n    <ion-item>\n      <ion-label floating>Tel<span class="color-red">*</span></ion-label>\n      <ion-input type="tel" formControlName="tel"></ion-input>\n    </ion-item>\n    <div class="pull-right color-red">\n      <span [hidden]="!(formErrors.tel)">{{formErrors.tel}}</span>\n    </div>\n    <ion-item *ngIf="isDoctor">\n      <ion-label floating>Fax</ion-label>\n      <ion-input type="tel" formControlName="fax"></ion-input>\n    </ion-item>\n    <div class="pull-right color-red" *ngIf="isDoctor">\n      <span [hidden]="!(formErrors.fax)">{{formErrors.fax}}</span>\n    </div>\n    <ion-item *ngIf="isDoctor">\n      <ion-label floating>Specialization<span class="color-red">*</span></ion-label>\n      <ion-input formControlName="specialization"></ion-input>\n    </ion-item>\n    <div class="pull-right color-red" *ngIf="isDoctor">\n      <span [hidden]="!(formErrors.specialization)">{{formErrors.specialization}}</span>\n    </div>\n    <ion-item *ngIf="!isDoctor">\n      <ion-label floating>Address</ion-label>\n      <ion-input formControlName="location1"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="isDoctor">\n      <ion-label floating>Address1</ion-label>\n      <ion-input formControlName="location1"></ion-input>\n      <ion-icon color="primary" name="add-circle" (click)="addAddress()" item-end></ion-icon>\n    </ion-item>\n    <ion-item *ngIf="address[0] && isDoctor">\n      <ion-label floating>Address2</ion-label>\n      <ion-input formControlName="location2"></ion-input>\n      <ion-icon color="danger" name="remove-circle" (click)="deleteAddress()" item-end></ion-icon>\n    </ion-item>\n    <ion-item *ngIf="address[1] && isDoctor">\n      <ion-label floating>Address3</ion-label>\n      <ion-input formControlName="location3"></ion-input>\n      <ion-icon color="danger" name="remove-circle" (click)="deleteAddress()" item-end></ion-icon>\n    </ion-item>\n    <button ion-button block type="submit" [disabled]="!addContactForm.valid">Create</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/contact-add-contacts/contact-add-contacts.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_3__providers_contacts_contacts__["a" /* ContactsProvider */]])
    ], ContactAddContactsPage);
    return ContactAddContactsPage;
}());

//# sourceMappingURL=contact-add-contacts.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MedicalRecordDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_question_question__ = __webpack_require__(15);
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
 * Generated class for the MedicalRecordDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MedicalRecordDetailPage = (function () {
    function MedicalRecordDetailPage(navCtrl, navParams, fb, qp, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fb = fb;
        this.qp = qp;
        this.viewCtrl = viewCtrl;
        this.color = ['dark-salmon', 'rosy-brown', 'slate-grey'];
        this.tab = "form";
        this.antigenic = [];
        this.functional = [];
        this.date = [];
        this.antigenicColorList = [];
        this.functionalColorList = [];
        this.antigenicAreaTop = [];
        this.antigenicAreaBottom = [];
        this.functionalAreaTop = [];
        this.functionalAreaBottom = [];
        this.title = navParams.get('title');
        this.id = navParams.get('id');
        this.questions = qp.getLabTestQuestions();
        this.navcolor = this.color[(this.id + 1) % 3];
        this.createForm();
    }
    MedicalRecordDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MedicalRecordDetailPage');
    };
    MedicalRecordDetailPage.prototype.createForm = function () {
        this.nowTime = new Date().toISOString();
        this.recordForm = this.fb.group({
            antigenic: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            date: [this.nowTime, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]
        });
    };
    MedicalRecordDetailPage.prototype.checkRange = function (data, min, max) {
        if ((data >= min) && (data <= max))
            return true;
        return false;
    };
    MedicalRecordDetailPage.prototype.ngOnInit = function () {
        this.data = [
            {
                "id": 0,
                "antigenic": 22,
                "functional": 80,
                "date": "2011-12-02T17:57:28.556094Z"
            },
            {
                "id": 1,
                "antigenic": 30,
                "functional": 120,
                "date": "2011-12-03T17:57:28.556094Z"
            },
            {
                "id": 2,
                "antigenic": 40,
                "functional": 100,
                "date": "2011-12-04T17:57:28.556094Z"
            },
            {
                "id": 3,
                "antigenic": 24,
                "functional": 130,
                "date": "2011-12-05T17:57:28.556094Z"
            },
            {
                "id": 4,
                "antigenic": 18,
                "functional": 70,
                "date": "2011-12-06T02:08:21.199Z"
            },
            {
                "id": 5,
                "antigenic": 26,
                "functional": 150,
                "date": "2011-12-07T02:14:16.365Z"
            },
            {
                "id": 6,
                "antigenic": 36,
                "functional": 110,
                "date": "2011-12-08T02:30:10.570Z"
            },
            {
                "id": 7,
                "antigenic": 45,
                "functional": 132,
                "date": "2011-12-09T02:52:17.718Z"
            },
            {
                "id": 8,
                "antigenic": 35,
                "functional": 123,
                "date": "2011-12-10T01:38:47.452Z"
            }
        ];
        for (var _i = 0, _a = this.data; _i < _a.length; _i++) {
            var d = _a[_i];
            this.date.push(new Date(d.date));
            this.antigenic.push([new Date(d.date), d.antigenic]);
            this.antigenicAreaTop.push([new Date(d.date), 39]);
            this.antigenicAreaBottom.push([new Date(d.date), 22]);
            this.functionalAreaTop.push([new Date(d.date), 130]);
            this.functionalAreaBottom.push([new Date(d.date), 80]);
            this.functional.push([new Date(d.date), d.functional]);
            if (this.checkRange(d.antigenic, 22, 39)) {
                this.antigenicColorList.push("#1A8D1A");
            }
            else {
                this.antigenicColorList.push("#ff0000");
            }
            if (this.checkRange(d.functional, 80, 130)) {
                this.functionalColorList.push("#1A8D1A");
            }
            else {
                this.functionalColorList.push("#ff0000");
            }
        }
        console.log(this.date);
        var self = this;
        this.chartOption = {
            tooltip: {
                trigger: 'axis',
                formatter: function (params) {
                    console.log(params);
                    var res = (params[0].value[0].toISOString().slice(0, 10));
                    for (var i = 4, l = params.length; i < l; i++) {
                        res += '<br/>' + params[i].marker + params[i].seriesName + ' : ' + params[i].value[1];
                        if (params[i].seriesName === 'Antigenic') {
                            res += ' mg/dl';
                        }
                        else if (params[i].seriesName === 'Functional') {
                            res += '%';
                        }
                    }
                    return res;
                }
            },
            legend: {
                data: ['Antigenic', 'Functional']
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'time',
                    splitLine: {
                        show: false
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    splitLine: {
                        show: false
                    }
                }
            ],
            series: [
                // {
                //   type: 'line',
                //   symbol: 'none',
                //   itemStyle: {
                //     color: '#A5A5A5',
                //     normal: {
                //       lineStyle: {
                //         color: '#ffffff',
                //         opacity: 1
                //       },
                //       areaStyle: { type: 'default' }
                //     }
                //   },
                //   data: this.functionalAreaTop
                // },
                // {
                //   type: 'line',
                //   symbol: 'none',
                //   itemStyle: {
                //     color: '#A5A5A5',
                //     normal: {
                //       lineStyle: {
                //         color: '#ffffff',
                //         opacity: 1
                //       },
                //       areaStyle: {
                //         color: '#ffffff',
                //         opacity: 1
                //       }
                //     }
                //   },
                //   data: this.functionalAreaBottom
                // },
                // {
                //   type: 'line',
                //   symbol: 'none',
                //   itemStyle: {
                //     color: '#A5A5A5',
                //     normal: {
                //       lineStyle: {
                //         color: '#ffffff',
                //         opacity: 1
                //       },
                //       areaStyle: { type: 'default' }
                //     }
                //   },
                //   data: this.antigenicAreaTop
                // },
                // {
                //   type: 'line',
                //   symbol: 'none',
                //   itemStyle: {
                //     color: '#A5A5A5',
                //     normal: {
                //       lineStyle: {
                //         color: '#ffffff',
                //         opacity: 1
                //       },
                //       areaStyle: {
                //         color: '#ffffff',
                //         opacity: 1
                //       }
                //     }
                //   },
                //   data: this.antigenicAreaBottom
                // },
                {
                    name: 'Antigenic',
                    type: 'line',
                    data: this.antigenic,
                    itemStyle: {
                        normal: {
                            color: 'rgb(140, 158, 217)'
                            // color: function (params) {
                            //   console.log(params);
                            //   // build a color map as your need.
                            //   return self.antigenicColorList[params.dataIndex]
                            // }
                        }
                    }
                },
            ]
        };
    };
    MedicalRecordDetailPage.prototype.doRefresh = function (refresher) {
        /*
        console.log('Begin async operation', refresher);
        setTimeout(() => {
          this.trackerService.getAlcohols()
            .subscribe(alcohols => {
              alcohols.sort((a: Alcohol, b: Alcohol) => {
                var shortdate_a = new Date(new Date(a.date).getFullYear(), new Date(a.date).getMonth() - 1, new Date(a.date).getDate());
                var shortdate_b = new Date(new Date(b.date).getFullYear(), new Date(b.date).getMonth() - 1, new Date(b.date).getDate());
                if (shortdate_a > shortdate_b) {
                  return -1;
                }
                if (shortdate_a < shortdate_b) {
                  return 1;
                }
              });
              this.alcohols = alcohols;
            }, errmess => this.errMess = <any>errmess);
          console.log('Async operation has ended');
          refresher.complete();
        }, 1500);
        */
    };
    MedicalRecordDetailPage.prototype.onSubmit = function () {
        /*
        this.alcohol = this.alcoholForm.value;
        this.trackerService.addAlcohol(this.alcohol);
        this.createForm();
        */
    };
    MedicalRecordDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-medical-record-detail',template:/*ion-inline-start:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/medical-record-detail/medical-record-detail.html"*/'<!--\n  Generated template for the MedicalRecordDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar [color]="navcolor">\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n\n  <ion-toolbar [color]="navcolor">\n    <ion-segment color="light" [(ngModel)]="tab">\n      <ion-segment-button value="form">\n        TRACK\n      </ion-segment-button>\n      <ion-segment-button value="history">\n        HISTORY\n      </ion-segment-button>\n      <ion-segment-button value="chart">\n        CHART\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <!-- <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content color="primary" pullingIcon="arrow-dropdown" pullingText="Pull to refresh" refreshingSpinner="circles"\n      refreshingText="Refreshing..."></ion-refresher-content>\n  </ion-refresher> -->\n  <div [ngSwitch]="tab">\n    <div *ngSwitchCase="\'form\'">\n      <ion-card>\n        <ion-card-content>\n          <dynamic-form [questions]="questions"></dynamic-form>\n          <!-- <form [formGroup]=\'recordForm\' (ngSubmit)="onSubmit()">\n            <ion-item>\n              <ion-label fixed text-wrap>Antigenic (mg/dl)</ion-label>\n              <ion-input type="text" formControlName="antigenic"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label fixed>Date</ion-label>\n              <ion-datetime displayFormat="MM/DD/YYYY" formControlName="date"></ion-datetime>\n            </ion-item>\n            <button ion-button type="submit" [disabled]="!recordForm.valid">Record</button>\n          </form> -->\n        </ion-card-content>\n      </ion-card>\n    </div>\n    <div *ngSwitchCase="\'history\'">\n      <ion-list>\n        <ion-card *ngFor="let d of data">\n          <ion-item>\n            <ion-col>Antigenic:</ion-col>\n            <ion-col>{{d.antigenic}} mg/dl</ion-col>\n            <p>{{d.date | date}}</p>\n            <!-- <ion-col *ngIf="checkRange(d.antigenic, 22, 39)" style="color:green">\n                {{d.antigenic}} mg/dl\n              </ion-col>\n              <ion-col *ngIf="!checkRange(d.antigenic, 22, 39)" style="color:red">\n                {{d.antigenic}} mg/dl\n              </ion-col> -->\n\n            <!-- <ion-row class="color-primary-darker">\n              <ion-col>\n                Functional:\n              </ion-col>\n              <ion-col *ngIf="checkRange(d.functional, 80, 130)" style="color:green">\n                {{d.functional}}%\n              </ion-col>\n              <ion-col *ngIf="!checkRange(d.functional, 80, 130)" style="color:red">\n                {{d.functional}}%\n              </ion-col>\n            </ion-row> -->\n          </ion-item>\n        </ion-card>\n      </ion-list>\n    </div>\n    <div *ngSwitchCase="\'chart\'">\n      <div echarts [options]="chartOption"></div>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/chracyc/Materials/Projects/mobileProject/MobilePHR/src/pages/medical-record-detail/medical-record-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_3__providers_question_question__["a" /* QuestionProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"]])
    ], MedicalRecordDetailPage);
    return MedicalRecordDetailPage;
}());

//# sourceMappingURL=medical-record-detail.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppointmentProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_baseurl__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__process_httpmsg_process_httpmsg__ = __webpack_require__(47);
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
    AppointmentProvider.prototype.addAppointment = function (appointment, id) {
        var _this = this;
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__shared_baseurl__["a" /* baseurl */] + 'appointment/' + id, appointment)
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

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MedicalClassificationProvider; });
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
  Generated class for the MedicalClassificationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var MedicalClassificationProvider = (function () {
    function MedicalClassificationProvider() {
        console.log('Hello MedicalClassificationProvider Provider');
    }
    MedicalClassificationProvider.prototype.getMenu = function (id) {
        var arr = [];
        if (id === 0) {
            arr = [
                { id: 1, name: 'Hematology and Coagulation', menu: 'lab_test', end: false },
                { id: 2, name: 'Immunology', menu: 'lab_test', end: false },
                { id: 3, name: 'Clinical Chemistry', menu: 'lab_test', end: false },
                { id: 4, name: 'Metabolic and Endocrine Tests', menu: 'lab_test', end: false },
                { id: 5, name: 'Therapeutic-Drug Monitoring and Toxicology', menu: 'lab_test', end: false },
            ];
        }
        else if (id === 1) {
            arr = [
                { id: 11, name: 'Antithrombin III', menu: 'lab_test', end: true },
                { id: 12, name: 'Anti-Xa assay (heparin assay)', menu: 'lab_test', end: true },
                { id: 13, name: 'Carboxyhemoglobin', menu: 'lab_test', end: true },
                { id: 14, name: 'Differential blood count', menu: 'lab_test', end: true },
                { id: 15, name: 'Erythrocyte count', menu: 'lab_test', end: true },
                { id: 16, name: 'Erythrocyte lifespan', menu: 'lab_test', end: true }
            ];
        }
        return arr;
    };
    MedicalClassificationProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], MedicalClassificationProvider);
    return MedicalClassificationProvider;
}());

//# sourceMappingURL=medical-classification.js.map

/***/ })

},[390]);
//# sourceMappingURL=main.js.map