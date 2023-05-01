(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,n){if("object"!==t(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(i)?i:String(i)),o)}var i}var n=function(){function t(e,n,r){var o=e.data,i=e.handleCardClick,u=e.handleLikeClick,a=e.handleDeleteClick;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._link=o.link,this._name=o.name,this._cardId=o._id,this._userId=o.owner._id,this._profileId=r,this._likesOnCard=o.likes,this._templateSelector=n,this._handleCardClick=i,this._handleLikeClick=u,this._handleDeleteClick=a,this._popupImageSrc=document.querySelector(".popup__image-photo"),this._popupImageAlt=document.querySelector(".popup__image-photo"),this._popupImageName=document.querySelector(".popup__image-title")}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".card").cloneNode(!0)}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._cardImage=this._element.querySelector(".card__image"),this._setEventListeners(),this._cardImage.src=this._link,this._cardImage.alt=this._name,this._element.querySelector(".card__title").textContent=this._name,this._card=this._element,this._likeButton=this._element.querySelector(".card__like-button"),this._likeCaption=this._element.querySelector(".card__like-sum"),this._deleteButton=this._element.querySelector(".card__delete-button"),this.setLikesCount(this._likesOnCard),this._likeStatus(),this.deleteTrashButton(),this._element}},{key:"_setEventListeners",value:function(){var t=this;this._element.querySelector(".card__like-button").addEventListener("click",(function(){t._handleLikeClick(t._cardId)})),this._element.querySelector(".card__delete-button").addEventListener("click",(function(){t._handleDeleteClick(t._cardId)})),this._element.querySelector(".card__image").addEventListener("click",(function(){t._handleCardClick(t._link,t._name)}))}},{key:"addLike",value:function(){this._likeButton.classList.add("card__like-button_active")}},{key:"deleteLike",value:function(){this._likeButton.classList.remove("card__like-button_active")}},{key:"setLikesCount",value:function(t){this.likeArray=t,this._likeCaption.textContent=t.length}},{key:"isCardLiked",value:function(){var t=this;return this.likeArray.some((function(e){return e._id===t._profileId}))}},{key:"_likeStatus",value:function(){this.isCardLiked()?this.addLike():this.deleteLike()}},{key:"trashCard",value:function(){this._card.remove(),this._card=null}},{key:"deleteTrashButton",value:function(){this._profileId!==this._userId&&this._deleteButton.remove()}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,e){if("object"!==r(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===r(i)?i:String(i)),o)}var i}var i=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._config=e,this._form=n,this._buttonSubmit=this._form.querySelector(this._config.submitButtonSelector)}var e,n;return e=t,(n=[{key:"enableValidation",value:function(){this._addInputListeners(),this._toggleButton()}},{key:"resetValidation",value:function(){this._toggleButton()}},{key:"_showInputError",value:function(t){this._inputId=t.id,this._errorElement=this._form.querySelector("#".concat(this._inputId,"-error")),t.classList.add(this._config.errorClass),this._errorElement.textContent=t.validationMessage}},{key:"_hideInputError",value:function(t){this._inputId=t.id,this._errorElement=this._form.querySelector("#".concat(this._inputId,"-error")),t.classList.remove(this._config.errorClass),this._errorElement.textContent=""}},{key:"_handleFormInput",value:function(t){t.validity.valid?this._hideInputError(t):this._showInputError(t)}},{key:"_toggleButton",value:function(){var t=this._form.checkValidity();this._buttonSubmit.disabled=!t,this._buttonSubmit.classList.toggle(this._config.inactiveButtonClass,!t)}},{key:"_addInputListeners",value:function(){var t=this;this._form.querySelectorAll(this._config.inputSelector).forEach((function(e){e.addEventListener("input",(function(){t._handleFormInput(e),t._toggleButton()}))})),this._form.addEventListener("reset",(function(){setTimeout((function(){t._toggleButton()}),0)}))}}])&&o(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==u(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==u(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===u(o)?o:String(o)),r)}var o}var c=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popup=document.querySelector(e),this._escClose=this._handleEscClose.bind(this),this._closeByClickOnOverlay=this._closePopupOverlay.bind(this)}var e,n;return e=t,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._escClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._escClose)}},{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.close()}},{key:"_closePopupOverlay",value:function(t){t.target===t.currentTarget&&this.close()}},{key:"setEventListeners",value:function(){var t=this;this._popup.querySelector(".popup__close-icon").addEventListener("click",(function(){return t.close()})),this._popup.addEventListener("mousedown",this._closeByClickOnOverlay)}}])&&a(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==l(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===l(o)?o:String(o)),r)}var o}function f(){return f="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=y(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},f.apply(this,arguments)}function p(t,e){return p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},p(t,e)}function y(t){return y=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},y(t)}var h=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&p(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=y(r);if(o){var n=y(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===l(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n,r=e.callbackSubmitForm;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._callbackSubmitForm=r,n._form=n._popup.querySelector(".popup__form"),n._inputs=n._form.querySelectorAll(".popup__input"),n._saveButton=n._form.querySelector(".popup__button"),n}return e=u,(n=[{key:"_getInputValues",value:function(){var t=this;return this._inputValues={},this._inputs.forEach((function(e){t._inputValues[e.name]=e.value})),this._inputValues}},{key:"setinputValues",value:function(t){this._inputs.forEach((function(e){e.value=t[e.name]}))}},{key:"setEventListeners",value:function(){var t=this;f(y(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._callbackSubmitForm(t._getInputValues()),t.close()}))}},{key:"close",value:function(){f(y(u.prototype),"close",this).call(this),this._form.reset()}},{key:"setButtonLoading",value:function(t){this._saveButton.textContent=t}}])&&s(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(c);function d(t){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(t)}function m(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==d(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==d(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===d(o)?o:String(o)),r)}var o}function v(){return v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=_(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},v.apply(this,arguments)}function b(t,e){return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},b(t,e)}function _(t){return _=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},_(t)}var g=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&b(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=_(r);if(o){var n=_(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===d(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._popupImageSrc=e._popup.querySelector(".popup__image-photo"),e._popupImageName=e._popup.querySelector(".popup__image-title"),e}return e=u,(n=[{key:"openImagePopup",value:function(t,e){this._popupImageSrc.src=t,this._popupImageName.alt=e,this._popupImageName.textContent=e,v(_(u.prototype),"open",this).call(this)}}])&&m(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(c);function S(t){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},S(t)}function k(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==S(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==S(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===S(o)?o:String(o)),r)}var o}var w=function(){function t(e,n){var r=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=r,this._container=document.querySelector(n)}var e,n;return e=t,(n=[{key:"addItem",value:function(t){this._container.prepend(t)}},{key:"renderItems",value:function(t){var e=this;t.forEach((function(t){e._renderer(t)}))}}])&&k(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function O(t){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},O(t)}function j(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==O(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==O(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===O(o)?o:String(o)),r)}var o}var E=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._profileName=document.querySelector(e.profileNameSelector),this._description=document.querySelector(e.descriptionSelector),this._avatar=document.querySelector(e.avatarSelector)}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return{name:this._profileName.textContent,description:this._description.textContent}}},{key:"setUserInfo",value:function(t){this._profileName.textContent=t.name,this._description.textContent=t.about,this._avatar.src=t.avatar}}])&&j(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function P(t){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},P(t)}function C(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==P(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==P(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===P(o)?o:String(o)),r)}var o}var L=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._url=e.url,this._headers=e.headers}var e,n;return e=t,(n=[{key:"_getResponseData",value:function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}},{key:"getAllCards",value:function(){var t=this;return fetch("".concat(this._url,"/cards"),{method:"GET",headers:this._headers}).then((function(e){return t._getResponseData(e)}))}},{key:"saveCard",value:function(t){var e=this;return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify(t)}).then((function(t){return e._getResponseData(t)}))}},{key:"deleteCard",value:function(t){var e=this;return fetch("".concat(this._url,"/cards/").concat(t),{method:"DELETE",headers:this._headers}).then((function(t){return e._getResponseData(t)}))}},{key:"getUserInfo",value:function(){var t=this;return fetch("".concat(this._url,"/users/me"),{method:"GET",headers:this._headers}).then((function(e){return t._getResponseData(e)}))}},{key:"editUserInfo",value:function(t){var e=this;return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify(t)}).then((function(t){return e._getResponseData(t)}))}},{key:"editAvatar",value:function(t){var e=this;return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify(t)}).then((function(t){return e._getResponseData(t)}))}},{key:"putLike",value:function(t){var e=this;return fetch("".concat(this._url,"/cards/").concat(t,"/likes"),{method:"PUT",headers:this._headers}).then((function(t){return e._getResponseData(t)}))}},{key:"removeLike",value:function(t){var e=this;return fetch("".concat(this._url,"/cards/").concat(t,"/likes"),{method:"DELETE",headers:this._headers}).then((function(t){return e._getResponseData(t)}))}}])&&C(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function I(t){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},I(t)}function T(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==I(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==I(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===I(o)?o:String(o)),r)}var o}function R(){return R="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=q(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},R.apply(this,arguments)}function B(t,e){return B=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},B(t,e)}function q(t){return q=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},q(t)}var D=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&B(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=q(r);if(o){var n=q(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===I(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n,r=e.functionWithSubmit;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._functionWithSubmit=r,n._form=n._popup.querySelector(".popup__form"),n}return e=u,(n=[{key:"open",value:function(t,e){R(q(u.prototype),"open",this).call(this),this._card=e,this._id=t}},{key:"setEventListeners",value:function(){var t=this;R(q(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._functionWithSubmit(t._id,t._card)}))}}])&&T(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(c);function x(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var A=document.forms["form-place"],V=document.forms["form-profile"],N=document.forms["form-avatar"],U=document.querySelector(".profile__edit-button"),F=document.querySelector(".profile__avatar-button"),W=document.querySelector(".profile__add-button"),J={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",errorClass:"popup__input_type_error"},G=new i(J,V);G.enableValidation(),new i(J,A).enableValidation(),new i(J,N).enableValidation();var H=null,M=new L({url:"https://mesto.nomoreparties.co/v1/cohort-64",headers:{authorization:"4130b02e-b786-4f80-b6e6-56f64d995bcf","content-type":"application/json"}}),z=M.getAllCards(),$=M.getUserInfo(),K=new D(".popup-delete",{functionWithSubmit:function(t,e){M.deleteCard(t).then((function(){K.close(),e.trashCard()})).catch((function(t){alert(t)}))}});function Q(t){var e=function(t){var e=new n({data:t,handleCardClick:Z,handleLikeClick:function(t){e.isCardLiked()?M.removeLike(t).then((function(t){e.deleteLike(),e.setLikesCount(t.likes)})).catch((function(t){alert(t)})):M.putLike(t).then((function(t){e.addLike(),e.setLikesCount(t.likes)})).catch((function(t){alert(t)}))},handleDeleteClick:function(t){K.open(t,e)}},"#card-template",H);return e.generateCard()}(t);X.addItem(e)}K.setEventListeners();var X=new w({renderer:Q},".cards__list"),Y=new g(".popup-image");function Z(t,e){Y.openImagePopup(t,e)}Y.setEventListeners(),U.addEventListener("click",(function(){var t=et.getUserInfo();nt.setinputValues(t),G.resetValidation(),nt.open()}));var tt=new h(".popup-place",{callbackSubmitForm:function(t){tt.setButtonLoading("Сохранение..."),M.saveCard(t).then((function(t){tt.close(),Q(t)})).catch((function(t){alert(t)})).finally((function(){tt.setButtonLoading("Создать")}))}});W.addEventListener("click",(function(){tt.open()})),tt.setEventListeners();var et=new E({profileNameSelector:".profile__title",descriptionSelector:".profile__description",avatarSelector:".profile__avatar"}),nt=new h(".popup-profile",{callbackSubmitForm:function(t){nt.setButtonLoading("Сохранение..."),M.editUserInfo({name:t.name,about:t.description}).then((function(t){nt.close(),et.setUserInfo(t)})).catch((function(t){return console.log(t)})).finally((function(){nt.setButtonLoading("Сохранить")}))}});nt.setEventListeners();var rt=new h(".popup-avatar",{callbackSubmitForm:function(t){rt.setButtonLoading("Сохранение..."),M.editAvatar({avatar:t.avatar}).then((function(t){rt.close(),et.setUserInfo(t)})).catch((function(t){return console.log(t)})).finally((function(){rt.setButtonLoading("Сохранить")}))}});F.addEventListener("click",(function(){rt.open()})),rt.setEventListeners(),Promise.all([$,z]).then((function(t){var e,n,r=(n=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,u,a=[],c=!0,l=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(a.push(r.value),a.length!==e);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(e,n)||function(t,e){if(t){if("string"==typeof t)return x(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?x(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];et.setUserInfo(o),H=o._id,X.renderItems(i)})).catch((function(t){alert(t)}))})();