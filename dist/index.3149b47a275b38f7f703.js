/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../node_modules/dom7/dom7.esm.js":
/*!****************************************!*\
  !*** ../node_modules/dom7/dom7.esm.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "$": () => (/* binding */ $),
/* harmony export */   "add": () => (/* binding */ add),
/* harmony export */   "addClass": () => (/* binding */ addClass),
/* harmony export */   "animate": () => (/* binding */ animate),
/* harmony export */   "animationEnd": () => (/* binding */ animationEnd),
/* harmony export */   "append": () => (/* binding */ append),
/* harmony export */   "appendTo": () => (/* binding */ appendTo),
/* harmony export */   "attr": () => (/* binding */ attr),
/* harmony export */   "blur": () => (/* binding */ blur),
/* harmony export */   "change": () => (/* binding */ change),
/* harmony export */   "children": () => (/* binding */ children),
/* harmony export */   "click": () => (/* binding */ click),
/* harmony export */   "closest": () => (/* binding */ closest),
/* harmony export */   "css": () => (/* binding */ css),
/* harmony export */   "data": () => (/* binding */ data),
/* harmony export */   "dataset": () => (/* binding */ dataset),
/* harmony export */   "detach": () => (/* binding */ detach),
/* harmony export */   "each": () => (/* binding */ each),
/* harmony export */   "empty": () => (/* binding */ empty),
/* harmony export */   "eq": () => (/* binding */ eq),
/* harmony export */   "filter": () => (/* binding */ filter),
/* harmony export */   "find": () => (/* binding */ find),
/* harmony export */   "focus": () => (/* binding */ focus),
/* harmony export */   "focusin": () => (/* binding */ focusin),
/* harmony export */   "focusout": () => (/* binding */ focusout),
/* harmony export */   "hasClass": () => (/* binding */ hasClass),
/* harmony export */   "height": () => (/* binding */ height),
/* harmony export */   "hide": () => (/* binding */ hide),
/* harmony export */   "html": () => (/* binding */ html),
/* harmony export */   "index": () => (/* binding */ index),
/* harmony export */   "insertAfter": () => (/* binding */ insertAfter),
/* harmony export */   "insertBefore": () => (/* binding */ insertBefore),
/* harmony export */   "is": () => (/* binding */ is),
/* harmony export */   "keydown": () => (/* binding */ keydown),
/* harmony export */   "keypress": () => (/* binding */ keypress),
/* harmony export */   "keyup": () => (/* binding */ keyup),
/* harmony export */   "mousedown": () => (/* binding */ mousedown),
/* harmony export */   "mouseenter": () => (/* binding */ mouseenter),
/* harmony export */   "mouseleave": () => (/* binding */ mouseleave),
/* harmony export */   "mousemove": () => (/* binding */ mousemove),
/* harmony export */   "mouseout": () => (/* binding */ mouseout),
/* harmony export */   "mouseover": () => (/* binding */ mouseover),
/* harmony export */   "mouseup": () => (/* binding */ mouseup),
/* harmony export */   "next": () => (/* binding */ next),
/* harmony export */   "nextAll": () => (/* binding */ nextAll),
/* harmony export */   "off": () => (/* binding */ off),
/* harmony export */   "offset": () => (/* binding */ offset),
/* harmony export */   "on": () => (/* binding */ on),
/* harmony export */   "once": () => (/* binding */ once),
/* harmony export */   "outerHeight": () => (/* binding */ outerHeight),
/* harmony export */   "outerWidth": () => (/* binding */ outerWidth),
/* harmony export */   "parent": () => (/* binding */ parent),
/* harmony export */   "parents": () => (/* binding */ parents),
/* harmony export */   "prepend": () => (/* binding */ prepend),
/* harmony export */   "prependTo": () => (/* binding */ prependTo),
/* harmony export */   "prev": () => (/* binding */ prev),
/* harmony export */   "prevAll": () => (/* binding */ prevAll),
/* harmony export */   "prop": () => (/* binding */ prop),
/* harmony export */   "remove": () => (/* binding */ remove),
/* harmony export */   "removeAttr": () => (/* binding */ removeAttr),
/* harmony export */   "removeClass": () => (/* binding */ removeClass),
/* harmony export */   "removeData": () => (/* binding */ removeData),
/* harmony export */   "resize": () => (/* binding */ resize),
/* harmony export */   "scroll": () => (/* binding */ scroll),
/* harmony export */   "scrollLeft": () => (/* binding */ scrollLeft),
/* harmony export */   "scrollTo": () => (/* binding */ scrollTo),
/* harmony export */   "scrollTop": () => (/* binding */ scrollTop),
/* harmony export */   "show": () => (/* binding */ show),
/* harmony export */   "siblings": () => (/* binding */ siblings),
/* harmony export */   "stop": () => (/* binding */ stop),
/* harmony export */   "styles": () => (/* binding */ styles),
/* harmony export */   "submit": () => (/* binding */ submit),
/* harmony export */   "text": () => (/* binding */ text),
/* harmony export */   "toggleClass": () => (/* binding */ toggleClass),
/* harmony export */   "touchend": () => (/* binding */ touchend),
/* harmony export */   "touchmove": () => (/* binding */ touchmove),
/* harmony export */   "touchstart": () => (/* binding */ touchstart),
/* harmony export */   "transform": () => (/* binding */ transform),
/* harmony export */   "transition": () => (/* binding */ transition),
/* harmony export */   "transitionEnd": () => (/* binding */ transitionEnd),
/* harmony export */   "trigger": () => (/* binding */ trigger),
/* harmony export */   "val": () => (/* binding */ val),
/* harmony export */   "value": () => (/* binding */ value),
/* harmony export */   "width": () => (/* binding */ width)
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "../node_modules/ssr-window/ssr-window.esm.js");
/**
 * Dom7 3.0.0
 * Minimalistic JavaScript library for DOM manipulation, with a jQuery-compatible API
 * https://framework7.io/docs/dom7.html
 *
 * Copyright 2020, Vladimir Kharlampidi
 *
 * Licensed under MIT
 *
 * Released on: November 9, 2020
 */


function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/* eslint-disable no-proto */
function makeReactive(obj) {
  var proto = obj.__proto__;
  Object.defineProperty(obj, '__proto__', {
    get: function get() {
      return proto;
    },
    set: function set(value) {
      proto.__proto__ = value;
    }
  });
}

var Dom7 = /*#__PURE__*/function (_Array) {
  _inheritsLoose(Dom7, _Array);

  function Dom7(items) {
    var _this;

    _this = _Array.call.apply(_Array, [this].concat(items)) || this;
    makeReactive(_assertThisInitialized(_this));
    return _this;
  }

  return Dom7;
}( /*#__PURE__*/_wrapNativeSuper(Array));

function arrayFlat(arr) {
  if (arr === void 0) {
    arr = [];
  }

  var res = [];
  arr.forEach(function (el) {
    if (Array.isArray(el)) {
      res.push.apply(res, arrayFlat(el));
    } else {
      res.push(el);
    }
  });
  return res;
}
function arrayFilter(arr, callback) {
  return Array.prototype.filter.call(arr, callback);
}
function arrayUnique(arr) {
  var uniqueArray = [];

  for (var i = 0; i < arr.length; i += 1) {
    if (uniqueArray.indexOf(arr[i]) === -1) uniqueArray.push(arr[i]);
  }

  return uniqueArray;
}
function toCamelCase(string) {
  return string.toLowerCase().replace(/-(.)/g, function (match, group) {
    return group.toUpperCase();
  });
}

function qsa(selector, context) {
  if (typeof selector !== 'string') {
    return [selector];
  }

  var a = [];
  var res = context.querySelectorAll(selector);

  for (var i = 0; i < res.length; i += 1) {
    a.push(res[i]);
  }

  return a;
}

function $(selector, context) {
  var window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  var document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
  var arr = [];

  if (!context && selector instanceof Dom7) {
    return selector;
  }

  if (!selector) {
    return new Dom7(arr);
  }

  if (typeof selector === 'string') {
    var html = selector.trim();

    if (html.indexOf('<') >= 0 && html.indexOf('>') >= 0) {
      var toCreate = 'div';
      if (html.indexOf('<li') === 0) toCreate = 'ul';
      if (html.indexOf('<tr') === 0) toCreate = 'tbody';
      if (html.indexOf('<td') === 0 || html.indexOf('<th') === 0) toCreate = 'tr';
      if (html.indexOf('<tbody') === 0) toCreate = 'table';
      if (html.indexOf('<option') === 0) toCreate = 'select';
      var tempParent = document.createElement(toCreate);
      tempParent.innerHTML = html;

      for (var i = 0; i < tempParent.childNodes.length; i += 1) {
        arr.push(tempParent.childNodes[i]);
      }
    } else {
      arr = qsa(selector.trim(), context || document);
    } // arr = qsa(selector, document);

  } else if (selector.nodeType || selector === window || selector === document) {
    arr.push(selector);
  } else if (Array.isArray(selector)) {
    if (selector instanceof Dom7) return selector;
    arr = selector;
  }

  return new Dom7(arrayUnique(arr));
}

$.fn = Dom7.prototype;

function addClass() {
  for (var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++) {
    classes[_key] = arguments[_key];
  }

  var classNames = arrayFlat(classes.map(function (c) {
    return c.split(' ');
  }));
  this.forEach(function (el) {
    var _el$classList;

    (_el$classList = el.classList).add.apply(_el$classList, classNames);
  });
  return this;
}

function removeClass() {
  for (var _len2 = arguments.length, classes = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    classes[_key2] = arguments[_key2];
  }

  var classNames = arrayFlat(classes.map(function (c) {
    return c.split(' ');
  }));
  this.forEach(function (el) {
    var _el$classList2;

    (_el$classList2 = el.classList).remove.apply(_el$classList2, classNames);
  });
  return this;
}

function toggleClass() {
  for (var _len3 = arguments.length, classes = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    classes[_key3] = arguments[_key3];
  }

  var classNames = arrayFlat(classes.map(function (c) {
    return c.split(' ');
  }));
  this.forEach(function (el) {
    classNames.forEach(function (className) {
      el.classList.toggle(className);
    });
  });
}

function hasClass() {
  for (var _len4 = arguments.length, classes = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    classes[_key4] = arguments[_key4];
  }

  var classNames = arrayFlat(classes.map(function (c) {
    return c.split(' ');
  }));
  return arrayFilter(this, function (el) {
    return classNames.filter(function (className) {
      return el.classList.contains(className);
    }).length > 0;
  }).length > 0;
}

function attr(attrs, value) {
  if (arguments.length === 1 && typeof attrs === 'string') {
    // Get attr
    if (this[0]) return this[0].getAttribute(attrs);
    return undefined;
  } // Set attrs


  for (var i = 0; i < this.length; i += 1) {
    if (arguments.length === 2) {
      // String
      this[i].setAttribute(attrs, value);
    } else {
      // Object
      for (var attrName in attrs) {
        this[i][attrName] = attrs[attrName];
        this[i].setAttribute(attrName, attrs[attrName]);
      }
    }
  }

  return this;
}

function removeAttr(attr) {
  for (var i = 0; i < this.length; i += 1) {
    this[i].removeAttribute(attr);
  }

  return this;
}

function prop(props, value) {
  if (arguments.length === 1 && typeof props === 'string') {
    // Get prop
    if (this[0]) return this[0][props];
  } else {
    // Set props
    for (var i = 0; i < this.length; i += 1) {
      if (arguments.length === 2) {
        // String
        this[i][props] = value;
      } else {
        // Object
        for (var propName in props) {
          this[i][propName] = props[propName];
        }
      }
    }

    return this;
  }

  return this;
}

function data(key, value) {
  var el;

  if (typeof value === 'undefined') {
    el = this[0];
    if (!el) return undefined; // Get value

    if (el.dom7ElementDataStorage && key in el.dom7ElementDataStorage) {
      return el.dom7ElementDataStorage[key];
    }

    var dataKey = el.getAttribute("data-" + key);

    if (dataKey) {
      return dataKey;
    }

    return undefined;
  } // Set value


  for (var i = 0; i < this.length; i += 1) {
    el = this[i];
    if (!el.dom7ElementDataStorage) el.dom7ElementDataStorage = {};
    el.dom7ElementDataStorage[key] = value;
  }

  return this;
}

function removeData(key) {
  for (var i = 0; i < this.length; i += 1) {
    var el = this[i];

    if (el.dom7ElementDataStorage && el.dom7ElementDataStorage[key]) {
      el.dom7ElementDataStorage[key] = null;
      delete el.dom7ElementDataStorage[key];
    }
  }
}

function dataset() {
  var el = this[0];
  if (!el) return undefined;
  var dataset = {}; // eslint-disable-line

  if (el.dataset) {
    for (var dataKey in el.dataset) {
      dataset[dataKey] = el.dataset[dataKey];
    }
  } else {
    for (var i = 0; i < el.attributes.length; i += 1) {
      var _attr = el.attributes[i];

      if (_attr.name.indexOf('data-') >= 0) {
        dataset[toCamelCase(_attr.name.split('data-')[1])] = _attr.value;
      }
    }
  }

  for (var key in dataset) {
    if (dataset[key] === 'false') dataset[key] = false;else if (dataset[key] === 'true') dataset[key] = true;else if (parseFloat(dataset[key]) === dataset[key] * 1) dataset[key] *= 1;
  }

  return dataset;
}

function val(value) {
  if (typeof value === 'undefined') {
    // get value
    var el = this[0];
    if (!el) return undefined;

    if (el.multiple && el.nodeName.toLowerCase() === 'select') {
      var values = [];

      for (var i = 0; i < el.selectedOptions.length; i += 1) {
        values.push(el.selectedOptions[i].value);
      }

      return values;
    }

    return el.value;
  } // set value


  for (var _i = 0; _i < this.length; _i += 1) {
    var _el = this[_i];

    if (Array.isArray(value) && _el.multiple && _el.nodeName.toLowerCase() === 'select') {
      for (var j = 0; j < _el.options.length; j += 1) {
        _el.options[j].selected = value.indexOf(_el.options[j].value) >= 0;
      }
    } else {
      _el.value = value;
    }
  }

  return this;
}

function value(value) {
  return this.val(value);
}

function transform(transform) {
  for (var i = 0; i < this.length; i += 1) {
    this[i].style.transform = transform;
  }

  return this;
}

function transition(duration) {
  for (var i = 0; i < this.length; i += 1) {
    this[i].style.transitionDuration = typeof duration !== 'string' ? duration + "ms" : duration;
  }

  return this;
}

function on() {
  for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
    args[_key5] = arguments[_key5];
  }

  var eventType = args[0],
      targetSelector = args[1],
      listener = args[2],
      capture = args[3];

  if (typeof args[1] === 'function') {
    eventType = args[0];
    listener = args[1];
    capture = args[2];
    targetSelector = undefined;
  }

  if (!capture) capture = false;

  function handleLiveEvent(e) {
    var target = e.target;
    if (!target) return;
    var eventData = e.target.dom7EventData || [];

    if (eventData.indexOf(e) < 0) {
      eventData.unshift(e);
    }

    if ($(target).is(targetSelector)) listener.apply(target, eventData);else {
      var _parents = $(target).parents(); // eslint-disable-line


      for (var k = 0; k < _parents.length; k += 1) {
        if ($(_parents[k]).is(targetSelector)) listener.apply(_parents[k], eventData);
      }
    }
  }

  function handleEvent(e) {
    var eventData = e && e.target ? e.target.dom7EventData || [] : [];

    if (eventData.indexOf(e) < 0) {
      eventData.unshift(e);
    }

    listener.apply(this, eventData);
  }

  var events = eventType.split(' ');
  var j;

  for (var i = 0; i < this.length; i += 1) {
    var el = this[i];

    if (!targetSelector) {
      for (j = 0; j < events.length; j += 1) {
        var event = events[j];
        if (!el.dom7Listeners) el.dom7Listeners = {};
        if (!el.dom7Listeners[event]) el.dom7Listeners[event] = [];
        el.dom7Listeners[event].push({
          listener: listener,
          proxyListener: handleEvent
        });
        el.addEventListener(event, handleEvent, capture);
      }
    } else {
      // Live events
      for (j = 0; j < events.length; j += 1) {
        var _event = events[j];
        if (!el.dom7LiveListeners) el.dom7LiveListeners = {};
        if (!el.dom7LiveListeners[_event]) el.dom7LiveListeners[_event] = [];

        el.dom7LiveListeners[_event].push({
          listener: listener,
          proxyListener: handleLiveEvent
        });

        el.addEventListener(_event, handleLiveEvent, capture);
      }
    }
  }

  return this;
}

function off() {
  for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
    args[_key6] = arguments[_key6];
  }

  var eventType = args[0],
      targetSelector = args[1],
      listener = args[2],
      capture = args[3];

  if (typeof args[1] === 'function') {
    eventType = args[0];
    listener = args[1];
    capture = args[2];
    targetSelector = undefined;
  }

  if (!capture) capture = false;
  var events = eventType.split(' ');

  for (var i = 0; i < events.length; i += 1) {
    var event = events[i];

    for (var j = 0; j < this.length; j += 1) {
      var el = this[j];
      var handlers = void 0;

      if (!targetSelector && el.dom7Listeners) {
        handlers = el.dom7Listeners[event];
      } else if (targetSelector && el.dom7LiveListeners) {
        handlers = el.dom7LiveListeners[event];
      }

      if (handlers && handlers.length) {
        for (var k = handlers.length - 1; k >= 0; k -= 1) {
          var handler = handlers[k];

          if (listener && handler.listener === listener) {
            el.removeEventListener(event, handler.proxyListener, capture);
            handlers.splice(k, 1);
          } else if (listener && handler.listener && handler.listener.dom7proxy && handler.listener.dom7proxy === listener) {
            el.removeEventListener(event, handler.proxyListener, capture);
            handlers.splice(k, 1);
          } else if (!listener) {
            el.removeEventListener(event, handler.proxyListener, capture);
            handlers.splice(k, 1);
          }
        }
      }
    }
  }

  return this;
}

function once() {
  var dom = this;

  for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
    args[_key7] = arguments[_key7];
  }

  var eventName = args[0],
      targetSelector = args[1],
      listener = args[2],
      capture = args[3];

  if (typeof args[1] === 'function') {
    eventName = args[0];
    listener = args[1];
    capture = args[2];
    targetSelector = undefined;
  }

  function onceHandler() {
    for (var _len8 = arguments.length, eventArgs = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
      eventArgs[_key8] = arguments[_key8];
    }

    listener.apply(this, eventArgs);
    dom.off(eventName, targetSelector, onceHandler, capture);

    if (onceHandler.dom7proxy) {
      delete onceHandler.dom7proxy;
    }
  }

  onceHandler.dom7proxy = listener;
  return dom.on(eventName, targetSelector, onceHandler, capture);
}

function trigger() {
  var window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();

  for (var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
    args[_key9] = arguments[_key9];
  }

  var events = args[0].split(' ');
  var eventData = args[1];

  for (var i = 0; i < events.length; i += 1) {
    var event = events[i];

    for (var j = 0; j < this.length; j += 1) {
      var el = this[j];

      if (window.CustomEvent) {
        var evt = new window.CustomEvent(event, {
          detail: eventData,
          bubbles: true,
          cancelable: true
        });
        el.dom7EventData = args.filter(function (data, dataIndex) {
          return dataIndex > 0;
        });
        el.dispatchEvent(evt);
        el.dom7EventData = [];
        delete el.dom7EventData;
      }
    }
  }

  return this;
}

function transitionEnd(callback) {
  var dom = this;

  function fireCallBack(e) {
    if (e.target !== this) return;
    callback.call(this, e);
    dom.off('transitionend', fireCallBack);
  }

  if (callback) {
    dom.on('transitionend', fireCallBack);
  }

  return this;
}

function animationEnd(callback) {
  var dom = this;

  function fireCallBack(e) {
    if (e.target !== this) return;
    callback.call(this, e);
    dom.off('animationend', fireCallBack);
  }

  if (callback) {
    dom.on('animationend', fireCallBack);
  }

  return this;
}

function width() {
  var window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();

  if (this[0] === window) {
    return window.innerWidth;
  }

  if (this.length > 0) {
    return parseFloat(this.css('width'));
  }

  return null;
}

function outerWidth(includeMargins) {
  if (this.length > 0) {
    if (includeMargins) {
      var _styles = this.styles();

      return this[0].offsetWidth + parseFloat(_styles.getPropertyValue('margin-right')) + parseFloat(_styles.getPropertyValue('margin-left'));
    }

    return this[0].offsetWidth;
  }

  return null;
}

function height() {
  var window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();

  if (this[0] === window) {
    return window.innerHeight;
  }

  if (this.length > 0) {
    return parseFloat(this.css('height'));
  }

  return null;
}

function outerHeight(includeMargins) {
  if (this.length > 0) {
    if (includeMargins) {
      var _styles2 = this.styles();

      return this[0].offsetHeight + parseFloat(_styles2.getPropertyValue('margin-top')) + parseFloat(_styles2.getPropertyValue('margin-bottom'));
    }

    return this[0].offsetHeight;
  }

  return null;
}

function offset() {
  if (this.length > 0) {
    var window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
    var document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
    var el = this[0];
    var box = el.getBoundingClientRect();
    var body = document.body;
    var clientTop = el.clientTop || body.clientTop || 0;
    var clientLeft = el.clientLeft || body.clientLeft || 0;
    var scrollTop = el === window ? window.scrollY : el.scrollTop;
    var scrollLeft = el === window ? window.scrollX : el.scrollLeft;
    return {
      top: box.top + scrollTop - clientTop,
      left: box.left + scrollLeft - clientLeft
    };
  }

  return null;
}

function hide() {
  for (var i = 0; i < this.length; i += 1) {
    this[i].style.display = 'none';
  }

  return this;
}

function show() {
  var window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();

  for (var i = 0; i < this.length; i += 1) {
    var el = this[i];

    if (el.style.display === 'none') {
      el.style.display = '';
    }

    if (window.getComputedStyle(el, null).getPropertyValue('display') === 'none') {
      // Still not visible
      el.style.display = 'block';
    }
  }

  return this;
}

function styles() {
  var window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  if (this[0]) return window.getComputedStyle(this[0], null);
  return {};
}

function css(props, value) {
  var window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  var i;

  if (arguments.length === 1) {
    if (typeof props === 'string') {
      // .css('width')
      if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(props);
    } else {
      // .css({ width: '100px' })
      for (i = 0; i < this.length; i += 1) {
        for (var _prop in props) {
          this[i].style[_prop] = props[_prop];
        }
      }

      return this;
    }
  }

  if (arguments.length === 2 && typeof props === 'string') {
    // .css('width', '100px')
    for (i = 0; i < this.length; i += 1) {
      this[i].style[props] = value;
    }

    return this;
  }

  return this;
}

function each(callback) {
  if (!callback) return this;
  this.forEach(function (el, index) {
    callback.apply(el, [el, index]);
  });
  return this;
}

function filter(callback) {
  var result = arrayFilter(this, callback);
  return $(result);
}

function html(html) {
  if (typeof html === 'undefined') {
    return this[0] ? this[0].innerHTML : null;
  }

  for (var i = 0; i < this.length; i += 1) {
    this[i].innerHTML = html;
  }

  return this;
}

function text(text) {
  if (typeof text === 'undefined') {
    return this[0] ? this[0].textContent.trim() : null;
  }

  for (var i = 0; i < this.length; i += 1) {
    this[i].textContent = text;
  }

  return this;
}

function is(selector) {
  var window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  var document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
  var el = this[0];
  var compareWith;
  var i;
  if (!el || typeof selector === 'undefined') return false;

  if (typeof selector === 'string') {
    if (el.matches) return el.matches(selector);
    if (el.webkitMatchesSelector) return el.webkitMatchesSelector(selector);
    if (el.msMatchesSelector) return el.msMatchesSelector(selector);
    compareWith = $(selector);

    for (i = 0; i < compareWith.length; i += 1) {
      if (compareWith[i] === el) return true;
    }

    return false;
  }

  if (selector === document) {
    return el === document;
  }

  if (selector === window) {
    return el === window;
  }

  if (selector.nodeType || selector instanceof Dom7) {
    compareWith = selector.nodeType ? [selector] : selector;

    for (i = 0; i < compareWith.length; i += 1) {
      if (compareWith[i] === el) return true;
    }

    return false;
  }

  return false;
}

function index() {
  var child = this[0];
  var i;

  if (child) {
    i = 0; // eslint-disable-next-line

    while ((child = child.previousSibling) !== null) {
      if (child.nodeType === 1) i += 1;
    }

    return i;
  }

  return undefined;
}

function eq(index) {
  if (typeof index === 'undefined') return this;
  var length = this.length;

  if (index > length - 1) {
    return $([]);
  }

  if (index < 0) {
    var returnIndex = length + index;
    if (returnIndex < 0) return $([]);
    return $([this[returnIndex]]);
  }

  return $([this[index]]);
}

function append() {
  var newChild;
  var document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();

  for (var k = 0; k < arguments.length; k += 1) {
    newChild = k < 0 || arguments.length <= k ? undefined : arguments[k];

    for (var i = 0; i < this.length; i += 1) {
      if (typeof newChild === 'string') {
        var tempDiv = document.createElement('div');
        tempDiv.innerHTML = newChild;

        while (tempDiv.firstChild) {
          this[i].appendChild(tempDiv.firstChild);
        }
      } else if (newChild instanceof Dom7) {
        for (var j = 0; j < newChild.length; j += 1) {
          this[i].appendChild(newChild[j]);
        }
      } else {
        this[i].appendChild(newChild);
      }
    }
  }

  return this;
}

function appendTo(parent) {
  $(parent).append(this);
  return this;
}

function prepend(newChild) {
  var document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
  var i;
  var j;

  for (i = 0; i < this.length; i += 1) {
    if (typeof newChild === 'string') {
      var tempDiv = document.createElement('div');
      tempDiv.innerHTML = newChild;

      for (j = tempDiv.childNodes.length - 1; j >= 0; j -= 1) {
        this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);
      }
    } else if (newChild instanceof Dom7) {
      for (j = 0; j < newChild.length; j += 1) {
        this[i].insertBefore(newChild[j], this[i].childNodes[0]);
      }
    } else {
      this[i].insertBefore(newChild, this[i].childNodes[0]);
    }
  }

  return this;
}

function prependTo(parent) {
  $(parent).prepend(this);
  return this;
}

function insertBefore(selector) {
  var before = $(selector);

  for (var i = 0; i < this.length; i += 1) {
    if (before.length === 1) {
      before[0].parentNode.insertBefore(this[i], before[0]);
    } else if (before.length > 1) {
      for (var j = 0; j < before.length; j += 1) {
        before[j].parentNode.insertBefore(this[i].cloneNode(true), before[j]);
      }
    }
  }
}

function insertAfter(selector) {
  var after = $(selector);

  for (var i = 0; i < this.length; i += 1) {
    if (after.length === 1) {
      after[0].parentNode.insertBefore(this[i], after[0].nextSibling);
    } else if (after.length > 1) {
      for (var j = 0; j < after.length; j += 1) {
        after[j].parentNode.insertBefore(this[i].cloneNode(true), after[j].nextSibling);
      }
    }
  }
}

function next(selector) {
  if (this.length > 0) {
    if (selector) {
      if (this[0].nextElementSibling && $(this[0].nextElementSibling).is(selector)) {
        return $([this[0].nextElementSibling]);
      }

      return $([]);
    }

    if (this[0].nextElementSibling) return $([this[0].nextElementSibling]);
    return $([]);
  }

  return $([]);
}

function nextAll(selector) {
  var nextEls = [];
  var el = this[0];
  if (!el) return $([]);

  while (el.nextElementSibling) {
    var _next = el.nextElementSibling; // eslint-disable-line

    if (selector) {
      if ($(_next).is(selector)) nextEls.push(_next);
    } else nextEls.push(_next);

    el = _next;
  }

  return $(nextEls);
}

function prev(selector) {
  if (this.length > 0) {
    var el = this[0];

    if (selector) {
      if (el.previousElementSibling && $(el.previousElementSibling).is(selector)) {
        return $([el.previousElementSibling]);
      }

      return $([]);
    }

    if (el.previousElementSibling) return $([el.previousElementSibling]);
    return $([]);
  }

  return $([]);
}

function prevAll(selector) {
  var prevEls = [];
  var el = this[0];
  if (!el) return $([]);

  while (el.previousElementSibling) {
    var _prev = el.previousElementSibling; // eslint-disable-line

    if (selector) {
      if ($(_prev).is(selector)) prevEls.push(_prev);
    } else prevEls.push(_prev);

    el = _prev;
  }

  return $(prevEls);
}

function siblings(selector) {
  return this.nextAll(selector).add(this.prevAll(selector));
}

function parent(selector) {
  var parents = []; // eslint-disable-line

  for (var i = 0; i < this.length; i += 1) {
    if (this[i].parentNode !== null) {
      if (selector) {
        if ($(this[i].parentNode).is(selector)) parents.push(this[i].parentNode);
      } else {
        parents.push(this[i].parentNode);
      }
    }
  }

  return $(parents);
}

function parents(selector) {
  var parents = []; // eslint-disable-line

  for (var i = 0; i < this.length; i += 1) {
    var _parent = this[i].parentNode; // eslint-disable-line

    while (_parent) {
      if (selector) {
        if ($(_parent).is(selector)) parents.push(_parent);
      } else {
        parents.push(_parent);
      }

      _parent = _parent.parentNode;
    }
  }

  return $(parents);
}

function closest(selector) {
  var closest = this; // eslint-disable-line

  if (typeof selector === 'undefined') {
    return $([]);
  }

  if (!closest.is(selector)) {
    closest = closest.parents(selector).eq(0);
  }

  return closest;
}

function find(selector) {
  var foundElements = [];

  for (var i = 0; i < this.length; i += 1) {
    var found = this[i].querySelectorAll(selector);

    for (var j = 0; j < found.length; j += 1) {
      foundElements.push(found[j]);
    }
  }

  return $(foundElements);
}

function children(selector) {
  var children = []; // eslint-disable-line

  for (var i = 0; i < this.length; i += 1) {
    var childNodes = this[i].children;

    for (var j = 0; j < childNodes.length; j += 1) {
      if (!selector || $(childNodes[j]).is(selector)) {
        children.push(childNodes[j]);
      }
    }
  }

  return $(children);
}

function remove() {
  for (var i = 0; i < this.length; i += 1) {
    if (this[i].parentNode) this[i].parentNode.removeChild(this[i]);
  }

  return this;
}

function detach() {
  return this.remove();
}

function add() {
  var dom = this;
  var i;
  var j;

  for (var _len10 = arguments.length, els = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
    els[_key10] = arguments[_key10];
  }

  for (i = 0; i < els.length; i += 1) {
    var toAdd = $(els[i]);

    for (j = 0; j < toAdd.length; j += 1) {
      dom.push(toAdd[j]);
    }
  }

  return dom;
}

function empty() {
  for (var i = 0; i < this.length; i += 1) {
    var el = this[i];

    if (el.nodeType === 1) {
      for (var j = 0; j < el.childNodes.length; j += 1) {
        if (el.childNodes[j].parentNode) {
          el.childNodes[j].parentNode.removeChild(el.childNodes[j]);
        }
      }

      el.textContent = '';
    }
  }

  return this;
}

function scrollTo() {
  var window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();

  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var left = args[0],
      top = args[1],
      duration = args[2],
      easing = args[3],
      callback = args[4];

  if (args.length === 4 && typeof easing === 'function') {
    callback = easing;
    left = args[0];
    top = args[1];
    duration = args[2];
    callback = args[3];
    easing = args[4];
  }

  if (typeof easing === 'undefined') easing = 'swing';
  return this.each(function animate() {
    var el = this;
    var currentTop;
    var currentLeft;
    var maxTop;
    var maxLeft;
    var newTop;
    var newLeft;
    var scrollTop; // eslint-disable-line

    var scrollLeft; // eslint-disable-line

    var animateTop = top > 0 || top === 0;
    var animateLeft = left > 0 || left === 0;

    if (typeof easing === 'undefined') {
      easing = 'swing';
    }

    if (animateTop) {
      currentTop = el.scrollTop;

      if (!duration) {
        el.scrollTop = top;
      }
    }

    if (animateLeft) {
      currentLeft = el.scrollLeft;

      if (!duration) {
        el.scrollLeft = left;
      }
    }

    if (!duration) return;

    if (animateTop) {
      maxTop = el.scrollHeight - el.offsetHeight;
      newTop = Math.max(Math.min(top, maxTop), 0);
    }

    if (animateLeft) {
      maxLeft = el.scrollWidth - el.offsetWidth;
      newLeft = Math.max(Math.min(left, maxLeft), 0);
    }

    var startTime = null;
    if (animateTop && newTop === currentTop) animateTop = false;
    if (animateLeft && newLeft === currentLeft) animateLeft = false;

    function render(time) {
      if (time === void 0) {
        time = new Date().getTime();
      }

      if (startTime === null) {
        startTime = time;
      }

      var progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
      var easeProgress = easing === 'linear' ? progress : 0.5 - Math.cos(progress * Math.PI) / 2;
      var done;
      if (animateTop) scrollTop = currentTop + easeProgress * (newTop - currentTop);
      if (animateLeft) scrollLeft = currentLeft + easeProgress * (newLeft - currentLeft);

      if (animateTop && newTop > currentTop && scrollTop >= newTop) {
        el.scrollTop = newTop;
        done = true;
      }

      if (animateTop && newTop < currentTop && scrollTop <= newTop) {
        el.scrollTop = newTop;
        done = true;
      }

      if (animateLeft && newLeft > currentLeft && scrollLeft >= newLeft) {
        el.scrollLeft = newLeft;
        done = true;
      }

      if (animateLeft && newLeft < currentLeft && scrollLeft <= newLeft) {
        el.scrollLeft = newLeft;
        done = true;
      }

      if (done) {
        if (callback) callback();
        return;
      }

      if (animateTop) el.scrollTop = scrollTop;
      if (animateLeft) el.scrollLeft = scrollLeft;
      window.requestAnimationFrame(render);
    }

    window.requestAnimationFrame(render);
  });
} // scrollTop(top, duration, easing, callback) {


function scrollTop() {
  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  var top = args[0],
      duration = args[1],
      easing = args[2],
      callback = args[3];

  if (args.length === 3 && typeof easing === 'function') {
    top = args[0];
    duration = args[1];
    callback = args[2];
    easing = args[3];
  }

  var dom = this;

  if (typeof top === 'undefined') {
    if (dom.length > 0) return dom[0].scrollTop;
    return null;
  }

  return dom.scrollTo(undefined, top, duration, easing, callback);
}

function scrollLeft() {
  for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    args[_key3] = arguments[_key3];
  }

  var left = args[0],
      duration = args[1],
      easing = args[2],
      callback = args[3];

  if (args.length === 3 && typeof easing === 'function') {
    left = args[0];
    duration = args[1];
    callback = args[2];
    easing = args[3];
  }

  var dom = this;

  if (typeof left === 'undefined') {
    if (dom.length > 0) return dom[0].scrollLeft;
    return null;
  }

  return dom.scrollTo(left, undefined, duration, easing, callback);
}

function animate(initialProps, initialParams) {
  var window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  var els = this;
  var a = {
    props: Object.assign({}, initialProps),
    params: Object.assign({
      duration: 300,
      easing: 'swing' // or 'linear'

      /* Callbacks
      begin(elements)
      complete(elements)
      progress(elements, complete, remaining, start, tweenValue)
      */

    }, initialParams),
    elements: els,
    animating: false,
    que: [],
    easingProgress: function easingProgress(easing, progress) {
      if (easing === 'swing') {
        return 0.5 - Math.cos(progress * Math.PI) / 2;
      }

      if (typeof easing === 'function') {
        return easing(progress);
      }

      return progress;
    },
    stop: function stop() {
      if (a.frameId) {
        window.cancelAnimationFrame(a.frameId);
      }

      a.animating = false;
      a.elements.each(function (el) {
        var element = el;
        delete element.dom7AnimateInstance;
      });
      a.que = [];
    },
    done: function done(complete) {
      a.animating = false;
      a.elements.each(function (el) {
        var element = el;
        delete element.dom7AnimateInstance;
      });
      if (complete) complete(els);

      if (a.que.length > 0) {
        var que = a.que.shift();
        a.animate(que[0], que[1]);
      }
    },
    animate: function animate(props, params) {
      if (a.animating) {
        a.que.push([props, params]);
        return a;
      }

      var elements = []; // Define & Cache Initials & Units

      a.elements.each(function (el, index) {
        var initialFullValue;
        var initialValue;
        var unit;
        var finalValue;
        var finalFullValue;
        if (!el.dom7AnimateInstance) a.elements[index].dom7AnimateInstance = a;
        elements[index] = {
          container: el
        };
        Object.keys(props).forEach(function (prop) {
          initialFullValue = window.getComputedStyle(el, null).getPropertyValue(prop).replace(',', '.');
          initialValue = parseFloat(initialFullValue);
          unit = initialFullValue.replace(initialValue, '');
          finalValue = parseFloat(props[prop]);
          finalFullValue = props[prop] + unit;
          elements[index][prop] = {
            initialFullValue: initialFullValue,
            initialValue: initialValue,
            unit: unit,
            finalValue: finalValue,
            finalFullValue: finalFullValue,
            currentValue: initialValue
          };
        });
      });
      var startTime = null;
      var time;
      var elementsDone = 0;
      var propsDone = 0;
      var done;
      var began = false;
      a.animating = true;

      function render() {
        time = new Date().getTime();
        var progress;
        var easeProgress; // let el;

        if (!began) {
          began = true;
          if (params.begin) params.begin(els);
        }

        if (startTime === null) {
          startTime = time;
        }

        if (params.progress) {
          // eslint-disable-next-line
          params.progress(els, Math.max(Math.min((time - startTime) / params.duration, 1), 0), startTime + params.duration - time < 0 ? 0 : startTime + params.duration - time, startTime);
        }

        elements.forEach(function (element) {
          var el = element;
          if (done || el.done) return;
          Object.keys(props).forEach(function (prop) {
            if (done || el.done) return;
            progress = Math.max(Math.min((time - startTime) / params.duration, 1), 0);
            easeProgress = a.easingProgress(params.easing, progress);
            var _el$prop = el[prop],
                initialValue = _el$prop.initialValue,
                finalValue = _el$prop.finalValue,
                unit = _el$prop.unit;
            el[prop].currentValue = initialValue + easeProgress * (finalValue - initialValue);
            var currentValue = el[prop].currentValue;

            if (finalValue > initialValue && currentValue >= finalValue || finalValue < initialValue && currentValue <= finalValue) {
              el.container.style[prop] = finalValue + unit;
              propsDone += 1;

              if (propsDone === Object.keys(props).length) {
                el.done = true;
                elementsDone += 1;
              }

              if (elementsDone === elements.length) {
                done = true;
              }
            }

            if (done) {
              a.done(params.complete);
              return;
            }

            el.container.style[prop] = currentValue + unit;
          });
        });
        if (done) return; // Then call

        a.frameId = window.requestAnimationFrame(render);
      }

      a.frameId = window.requestAnimationFrame(render);
      return a;
    }
  };

  if (a.elements.length === 0) {
    return els;
  }

  var animateInstance;

  for (var i = 0; i < a.elements.length; i += 1) {
    if (a.elements[i].dom7AnimateInstance) {
      animateInstance = a.elements[i].dom7AnimateInstance;
    } else a.elements[i].dom7AnimateInstance = a;
  }

  if (!animateInstance) {
    animateInstance = a;
  }

  if (initialProps === 'stop') {
    animateInstance.stop();
  } else {
    animateInstance.animate(a.props, a.params);
  }

  return els;
}

function stop() {
  var els = this;

  for (var i = 0; i < els.length; i += 1) {
    if (els[i].dom7AnimateInstance) {
      els[i].dom7AnimateInstance.stop();
    }
  }
}

var noTrigger = 'resize scroll'.split(' ');

function shortcut(name) {
  function eventHandler() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (typeof args[0] === 'undefined') {
      for (var i = 0; i < this.length; i += 1) {
        if (noTrigger.indexOf(name) < 0) {
          if (name in this[i]) this[i][name]();else {
            $(this[i]).trigger(name);
          }
        }
      }

      return this;
    }

    return this.on.apply(this, [name].concat(args));
  }

  return eventHandler;
}

var click = shortcut('click');
var blur = shortcut('blur');
var focus = shortcut('focus');
var focusin = shortcut('focusin');
var focusout = shortcut('focusout');
var keyup = shortcut('keyup');
var keydown = shortcut('keydown');
var keypress = shortcut('keypress');
var submit = shortcut('submit');
var change = shortcut('change');
var mousedown = shortcut('mousedown');
var mousemove = shortcut('mousemove');
var mouseup = shortcut('mouseup');
var mouseenter = shortcut('mouseenter');
var mouseleave = shortcut('mouseleave');
var mouseout = shortcut('mouseout');
var mouseover = shortcut('mouseover');
var touchstart = shortcut('touchstart');
var touchend = shortcut('touchend');
var touchmove = shortcut('touchmove');
var resize = shortcut('resize');
var scroll = shortcut('scroll');

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ($);



/***/ }),

/***/ "./index.html":
/*!********************!*\
  !*** ./index.html ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "../node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts-icons.css */ "./assets/fonts-icons.css"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./img/svg/logo.svg */ "./img/svg/logo.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./img/png/logo.png */ "./img/png/logo.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./img/jpeg/picture-dest.avif */ "./img/jpeg/picture-dest.avif"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./img/jpeg/picture-tab.avif */ "./img/jpeg/picture-tab.avif"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./img/jpeg/picture-mob.avif */ "./img/jpeg/picture-mob.avif"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./img/jpeg/picture-dest.webp */ "./img/jpeg/picture-dest.webp"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ./img/jpeg/picture-tab.webp */ "./img/jpeg/picture-tab.webp"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ./img/jpeg/picture-mob.webp */ "./img/jpeg/picture-mob.webp"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ./img/jpeg/picture-dest.jpg */ "./img/jpeg/picture-dest.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ./img/jpeg/picture-tab.jpg */ "./img/jpeg/picture-tab.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ./img/jpeg/picture-mob.jpg */ "./img/jpeg/picture-mob.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(/*! ./img/jpeg/cps-dest.avif */ "./img/jpeg/cps-dest.avif"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_13___ = new URL(/* asset import */ __webpack_require__(/*! ./img/jpeg/cps-tab.avif */ "./img/jpeg/cps-tab.avif"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_14___ = new URL(/* asset import */ __webpack_require__(/*! ./img/jpeg/cps-mob.avif */ "./img/jpeg/cps-mob.avif"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_15___ = new URL(/* asset import */ __webpack_require__(/*! ./img/jpeg/cps-dest.webp */ "./img/jpeg/cps-dest.webp"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_16___ = new URL(/* asset import */ __webpack_require__(/*! ./img/jpeg/cps-tab.webp */ "./img/jpeg/cps-tab.webp"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_17___ = new URL(/* asset import */ __webpack_require__(/*! ./img/jpeg/cps-mob.webp */ "./img/jpeg/cps-mob.webp"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_18___ = new URL(/* asset import */ __webpack_require__(/*! ./img/jpeg/cps-dest.jpg */ "./img/jpeg/cps-dest.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_19___ = new URL(/* asset import */ __webpack_require__(/*! ./img/jpeg/cps-tab.jpg */ "./img/jpeg/cps-tab.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_20___ = new URL(/* asset import */ __webpack_require__(/*! ./img/jpeg/cps-mob.jpg */ "./img/jpeg/cps-mob.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_21___ = new URL(/* asset import */ __webpack_require__(/*! ./img/jpeg/cpse-dest.avif */ "./img/jpeg/cpse-dest.avif"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_22___ = new URL(/* asset import */ __webpack_require__(/*! ./img/jpeg/cpse-tab.avif */ "./img/jpeg/cpse-tab.avif"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_23___ = new URL(/* asset import */ __webpack_require__(/*! ./img/jpeg/cpse-mob.avif */ "./img/jpeg/cpse-mob.avif"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_24___ = new URL(/* asset import */ __webpack_require__(/*! ./img/jpeg/cpse-dest.webp */ "./img/jpeg/cpse-dest.webp"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_25___ = new URL(/* asset import */ __webpack_require__(/*! ./img/jpeg/cpse-tab.webp */ "./img/jpeg/cpse-tab.webp"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_26___ = new URL(/* asset import */ __webpack_require__(/*! ./img/jpeg/cpse-mob.webp */ "./img/jpeg/cpse-mob.webp"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_27___ = new URL(/* asset import */ __webpack_require__(/*! ./img/jpeg/cpse-mob.jpg */ "./img/jpeg/cpse-mob.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_28___ = new URL(/* asset import */ __webpack_require__(/*! ./img/jpeg/es-dest.avif */ "./img/jpeg/es-dest.avif"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_29___ = new URL(/* asset import */ __webpack_require__(/*! ./img/jpeg/es-tab.avif */ "./img/jpeg/es-tab.avif"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_30___ = new URL(/* asset import */ __webpack_require__(/*! ./img/jpeg/es-mob.avif */ "./img/jpeg/es-mob.avif"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_31___ = new URL(/* asset import */ __webpack_require__(/*! ./img/jpeg/es-dest.webp */ "./img/jpeg/es-dest.webp"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_32___ = new URL(/* asset import */ __webpack_require__(/*! ./img/jpeg/es-tab.webp */ "./img/jpeg/es-tab.webp"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_33___ = new URL(/* asset import */ __webpack_require__(/*! ./img/jpeg/es-mob.webp */ "./img/jpeg/es-mob.webp"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_34___ = new URL(/* asset import */ __webpack_require__(/*! ./img/jpeg/es-dest.jpg */ "./img/jpeg/es-dest.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_35___ = new URL(/* asset import */ __webpack_require__(/*! ./img/jpeg/es-tab.jpg */ "./img/jpeg/es-tab.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_36___ = new URL(/* asset import */ __webpack_require__(/*! ./img/jpeg/es-mob.jpg */ "./img/jpeg/es-mob.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_37___ = new URL(/* asset import */ __webpack_require__(/*! ./img/jpeg/сursera-dest.avif */ "./img/jpeg/сursera-dest.avif"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_38___ = new URL(/* asset import */ __webpack_require__(/*! ./img/jpeg/сursera-tab.avif */ "./img/jpeg/сursera-tab.avif"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_39___ = new URL(/* asset import */ __webpack_require__(/*! ./img/jpeg/сursera-mob.avif */ "./img/jpeg/сursera-mob.avif"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_40___ = new URL(/* asset import */ __webpack_require__(/*! ./img/jpeg/сursera-dest.webp */ "./img/jpeg/сursera-dest.webp"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_41___ = new URL(/* asset import */ __webpack_require__(/*! ./img/jpeg/сursera-tab.webp */ "./img/jpeg/сursera-tab.webp"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_42___ = new URL(/* asset import */ __webpack_require__(/*! ./img/jpeg/сursera-mob.webp */ "./img/jpeg/сursera-mob.webp"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_43___ = new URL(/* asset import */ __webpack_require__(/*! ./img/jpeg/сursera-dest.jpg */ "./img/jpeg/сursera-dest.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_44___ = new URL(/* asset import */ __webpack_require__(/*! ./img/jpeg/сursera-tab.jpg */ "./img/jpeg/сursera-tab.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_45___ = new URL(/* asset import */ __webpack_require__(/*! ./img/jpeg/max-mob.jpg */ "./img/jpeg/max-mob.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_46___ = new URL(/* asset import */ __webpack_require__(/*! ./img/jpeg/nexus-dest.avif */ "./img/jpeg/nexus-dest.avif"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_47___ = new URL(/* asset import */ __webpack_require__(/*! ./img/jpeg/nexus-tab.avif */ "./img/jpeg/nexus-tab.avif"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_48___ = new URL(/* asset import */ __webpack_require__(/*! ./img/jpeg/nexus-mob.avif */ "./img/jpeg/nexus-mob.avif"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_49___ = new URL(/* asset import */ __webpack_require__(/*! ./img/jpeg/nexus-dest.webp */ "./img/jpeg/nexus-dest.webp"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_50___ = new URL(/* asset import */ __webpack_require__(/*! ./img/jpeg/nexus-tab.webp */ "./img/jpeg/nexus-tab.webp"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_51___ = new URL(/* asset import */ __webpack_require__(/*! ./img/jpeg/nexus-mob.webp */ "./img/jpeg/nexus-mob.webp"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_52___ = new URL(/* asset import */ __webpack_require__(/*! ./img/jpeg/nexus-dest.jpg */ "./img/jpeg/nexus-dest.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_53___ = new URL(/* asset import */ __webpack_require__(/*! ./img/jpeg/nexus-tab.jpg */ "./img/jpeg/nexus-tab.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_54___ = new URL(/* asset import */ __webpack_require__(/*! ./img/jpeg/nexus-mob.jpg */ "./img/jpeg/nexus-mob.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_55___ = new URL(/* asset import */ __webpack_require__(/*! ./img/png/lenova.png */ "./img/png/lenova.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_56___ = new URL(/* asset import */ __webpack_require__(/*! ./img/png/samsung.png */ "./img/png/samsung.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_57___ = new URL(/* asset import */ __webpack_require__(/*! ./img/png/apple.png */ "./img/png/apple.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_58___ = new URL(/* asset import */ __webpack_require__(/*! ./img/png/viewsonick.png */ "./img/png/viewsonick.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_59___ = new URL(/* asset import */ __webpack_require__(/*! ./img/png/bosch.png */ "./img/png/bosch.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_60___ = new URL(/* asset import */ __webpack_require__(/*! ./img/png/hp.png */ "./img/png/hp.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_61___ = new URL(/* asset import */ __webpack_require__(/*! ./img/png/acer.png */ "./img/png/acer.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_62___ = new URL(/* asset import */ __webpack_require__(/*! ./img/png/sony.png */ "./img/png/sony.png"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);
var ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);
var ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);
var ___HTML_LOADER_REPLACEMENT_7___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_7___);
var ___HTML_LOADER_REPLACEMENT_8___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_8___);
var ___HTML_LOADER_REPLACEMENT_9___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_9___);
var ___HTML_LOADER_REPLACEMENT_10___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_10___);
var ___HTML_LOADER_REPLACEMENT_11___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_11___);
var ___HTML_LOADER_REPLACEMENT_12___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_12___);
var ___HTML_LOADER_REPLACEMENT_13___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_13___);
var ___HTML_LOADER_REPLACEMENT_14___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_14___);
var ___HTML_LOADER_REPLACEMENT_15___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_15___);
var ___HTML_LOADER_REPLACEMENT_16___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_16___);
var ___HTML_LOADER_REPLACEMENT_17___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_17___);
var ___HTML_LOADER_REPLACEMENT_18___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_18___);
var ___HTML_LOADER_REPLACEMENT_19___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_19___);
var ___HTML_LOADER_REPLACEMENT_20___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_20___);
var ___HTML_LOADER_REPLACEMENT_21___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_21___);
var ___HTML_LOADER_REPLACEMENT_22___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_22___);
var ___HTML_LOADER_REPLACEMENT_23___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_23___);
var ___HTML_LOADER_REPLACEMENT_24___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_24___);
var ___HTML_LOADER_REPLACEMENT_25___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_25___);
var ___HTML_LOADER_REPLACEMENT_26___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_26___);
var ___HTML_LOADER_REPLACEMENT_27___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_27___);
var ___HTML_LOADER_REPLACEMENT_28___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_28___);
var ___HTML_LOADER_REPLACEMENT_29___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_29___);
var ___HTML_LOADER_REPLACEMENT_30___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_30___);
var ___HTML_LOADER_REPLACEMENT_31___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_31___);
var ___HTML_LOADER_REPLACEMENT_32___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_32___);
var ___HTML_LOADER_REPLACEMENT_33___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_33___);
var ___HTML_LOADER_REPLACEMENT_34___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_34___);
var ___HTML_LOADER_REPLACEMENT_35___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_35___);
var ___HTML_LOADER_REPLACEMENT_36___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_36___);
var ___HTML_LOADER_REPLACEMENT_37___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_37___);
var ___HTML_LOADER_REPLACEMENT_38___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_38___);
var ___HTML_LOADER_REPLACEMENT_39___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_39___);
var ___HTML_LOADER_REPLACEMENT_40___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_40___);
var ___HTML_LOADER_REPLACEMENT_41___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_41___);
var ___HTML_LOADER_REPLACEMENT_42___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_42___);
var ___HTML_LOADER_REPLACEMENT_43___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_43___);
var ___HTML_LOADER_REPLACEMENT_44___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_44___);
var ___HTML_LOADER_REPLACEMENT_45___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_45___);
var ___HTML_LOADER_REPLACEMENT_46___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_46___);
var ___HTML_LOADER_REPLACEMENT_47___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_47___);
var ___HTML_LOADER_REPLACEMENT_48___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_48___);
var ___HTML_LOADER_REPLACEMENT_49___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_49___);
var ___HTML_LOADER_REPLACEMENT_50___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_50___);
var ___HTML_LOADER_REPLACEMENT_51___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_51___);
var ___HTML_LOADER_REPLACEMENT_52___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_52___);
var ___HTML_LOADER_REPLACEMENT_53___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_53___);
var ___HTML_LOADER_REPLACEMENT_54___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_54___);
var ___HTML_LOADER_REPLACEMENT_55___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_55___);
var ___HTML_LOADER_REPLACEMENT_56___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_56___);
var ___HTML_LOADER_REPLACEMENT_57___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_57___);
var ___HTML_LOADER_REPLACEMENT_58___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_58___);
var ___HTML_LOADER_REPLACEMENT_59___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_59___);
var ___HTML_LOADER_REPLACEMENT_60___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_60___);
var ___HTML_LOADER_REPLACEMENT_61___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_61___);
var ___HTML_LOADER_REPLACEMENT_62___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_62___);
var code = "<!DOCTYPE html>\r\n<html lang=\"ru\">\r\n<head>\r\n\t<meta charset=\"UTF-8\">\r\n\t<meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\r\n\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n\t<meta name=\"keywords\" content=\"HTML CSS JS test-task\"> \r\n\t<meta name=\"description\" content=\"Тестовое задание по модуля Web core\"> \r\n\t<title>Block 1.6/Savinov А.О.</title>\r\n\t<link rel=\"stylesheet\" href=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\">\r\n</head>\r\n<body>\r\n\r\n\t<!-- Хедер -->\r\n\t<header class=\"cps-header\">\r\n\t\t<a class=\"cps-header__logo cps-logo\" href=\"index.html\">\r\n\t\t\t<picture>\r\n\t\t\t\t<source srcset=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" type=\"image/svg\">\r\n\t\t\t\t<img class=\"cps-logo__img\" src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"Логотип CPS\" width=\"97\" height=\"51\">\r\n\t\t\t</picture>\r\n\t\t</a>\r\n\t\t<ul class=\"cps-header__fb fb-conteiner\">\r\n\t\t\t<li class=\"fb-conteiner__item\">\r\n\t\t\t\t<button class=\"fb-conteiner__link fb-conteiner__link-fb button-js-open icon-repair\" data-path=\"one-btn\">\r\n\t\t\t\t\t<span class=\"fb-conteiner__text visually-hidden\">Оставить заявку</span>\r\n\t\t\t\t</button>  \r\n\t\t\t</li>\r\n\t\t\t<li class=\"fb-conteiner__item\">\r\n\t\t\t\t<button class=\"fb-conteiner__link fb-conteiner__link-call button-js-open icon-search-header\" data-path=\"two-btn\">\r\n\t\t\t\t\t<span class=\"fb-conteiner__text visually-hidden\">Статус ремонта</span>\r\n\t\t\t\t</button>\r\n\t\t\t</li>\r\n\t\t</ul>\r\n\t\t<ul class=\"cps-header__contacts contacts-conteiner\">\r\n\t\t\t<li class=\"contacts-conteiner__item\">\r\n\t\t\t\t<button class=\"button-js-open contacts-conteiner__link icon-phone\" data-path=\"three-btn\">\r\n\t\t\t\t\t<span class=\"visually-hidden\">Заказать звонок</span>\r\n\t\t\t\t</button>\r\n\t\t\t</li>\r\n\t\t\t<li class=\"contacts-conteiner__item\">\r\n\t\t\t\t<button class=\"button-js-open contacts-conteiner__link icon-chat\" data-path=\"four-btn\">\r\n\t\t\t\t\t<span class=\"visually-hidden\">Начать чат</span>\r\n\t\t\t\t</button>\r\n\t\t\t</li> \r\n\t\t\t<li class=\"contacts-conteiner__item\">\r\n\t\t\t\t<button class=\"button-js-open contacts-conteiner__link icon-profile\" data-path=\"five-btn\">\r\n\t\t\t\t\t<span class=\"visually-hidden\">Вход Личный кабинет</span>\r\n\t\t\t\t</button>\r\n\t\t\t</li>\r\n\t\t</ul>\r\n\t\t<button class=\"button-js-open cps-header__btn btn-open\" data-path=\"six-btn\">\r\n\t\t\t<span class=\"visually-hidden\">Открыть меню</span>\r\n\t\t\t<span class=\"btn-open__elm-btn\"></span>\r\n\t\t</button>\r\n\t</header>\r\n\r\n\t<!-- боковая панель навигации -->\r\n\t<aside class=\"cps-aside blok-js-active\" data-target=\"six-btn\">\r\n\t\t<div class=\"cps-aside__header\">\r\n\t\t\t<button class=\"cps-aside__btn-close button-js-open btn-close\" data-path=\"btn-close-one\">\r\n\t\t\t\t<span class=\"visually-hidden\">Закрыть меню</span>\r\n\t\t\t\t<span class=\"btn-close__elm-btn\"></span>\r\n\t\t\t</button>\r\n\t\t\t<a class=\"cps-aside__logo cps-logo\" href=\"index.html\">\r\n\t\t\t\t<picture>\r\n\t\t\t\t\t<source srcset=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" type=\"image/svg\">\r\n\t\t\t\t\t<img class=\"cps-logo__img\" src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"Логотип CPS\" width=\"97\" height=\"51\">\r\n\t\t\t\t</picture>\r\n\t\t\t</a>\r\n\t\t\t<button class=\"cps-aside__search button icon-search-aside button-js-open\" data-path=\"seven-btn\">\r\n\t\t\t\t<span class=\"visually-hidden\">поиск</span>\r\n\t\t\t</button>\r\n\t\t</div>\r\n\t\t<nav class=\"cps-aside__nav-aside nav-menu\">\r\n\t\t\t<ul class=\"nav-menu__list\">\r\n\t\t\t\t<li class=\"nav-menu__item\">\r\n\t\t\t\t\t<a class=\"nav-menu__link nav-menu__link--active\" href=\"index.html\">Ремонт техники</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"nav-menu__item\">\r\n\t\t\t\t\t<a class=\"nav-menu__link\" href=\"#\">Услуги и Сервисы</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"nav-menu__item\">\r\n\t\t\t\t\t<a class=\"nav-menu__link\" href=\"#\">Корпоративным клиенты</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"nav-menu__item\">\r\n\t\t\t\t\t<a class=\"nav-menu__link\" href=\"#\">Продавцам техники</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"nav-menu__item\">\r\n\t\t\t\t\t<a class=\"nav-menu__link\" href=\"#\">Партнерам</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"nav-menu__item\">\r\n\t\t\t\t\t<a class=\"nav-menu__link\" href=\"#\">Производителям</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"nav-menu__item\">\r\n\t\t\t\t\t<a class=\"nav-menu__link\" href=\"#\">Наши сервесные центры</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"nav-menu__item\">\r\n\t\t\t\t\t<a class=\"nav-menu__link\" href=\"#\">Контакты</a>\r\n\t\t\t\t</li>\r\n\t\t\t</ul>\r\n\t\t</nav>\r\n\t\t<ul class=\"cps-aside__contacts contacts-conteiner\">\r\n\t\t\t<li class=\"contacts-conteiner__item\">\r\n\t\t\t\t<button class=\"button-js-open contacts-conteiner__link icon-phone\" data-path=\"three-btn\">\r\n\t\t\t\t\t<span class=\"visually-hidden\">Заказать звонок</span>\r\n\t\t\t\t</button>\r\n\t\t\t</li>\r\n\t\t\t<li class=\"contacts-conteiner__item\">\r\n\t\t\t\t<button class=\"button-js-open contacts-conteiner__link icon-chat\" data-path=\"four-btn\">\r\n\t\t\t\t\t<span class=\"visually-hidden\">Начать чат</span>\r\n\t\t\t\t</button>\r\n\t\t\t</li> \r\n\t\t\t<li class=\"contacts-conteiner__item\">\r\n\t\t\t\t<button class=\"button-js-open contacts-conteiner__link icon-profile\" data-path=\"five-btn\">\r\n\t\t\t\t\t<span class=\"visually-hidden\">Вход Личный кабинет</span>\r\n\t\t\t\t</button>\r\n\t\t\t</li>\r\n\t\t</ul>\r\n\t\t<ul class=\"cps-aside__contacts-list contacts-list\">\r\n\t\t\t<li class=\"contacts-list__item\">\r\n\t\t\t\t<a class=\"contacts-list__link contacts-list__email\" href=\"mailto:mail@cps.com\">mail@cps.com</a>\r\n\t\t\t</li>\r\n\t\t\t<li class=\"contacts-list__item\">\r\n\t\t\t\t<a class=\"contacts-list__link contacts-list__phone\" href=\"tel:88008908900\">8 800 890 8900</a>\r\n\t\t\t</li>\r\n\t\t</ul>\r\n\t\t<ul class=\"cps-aside__language-conteiner language-list\">\r\n\t\t\t<li class=\"language-list__item\">\r\n\t\t\t\t<a class=\"language-list__link language-list__link--active\" href=\"index.html\">ru</a>\r\n\t\t\t</li>\r\n\t\t\t<li class=\"language-list__item\">\r\n\t\t\t\t<a class=\"language-list__link\" href=\"#\">en</a>\r\n\t\t\t</li>\r\n\t\t\t<li class=\"language-list__item\">\r\n\t\t\t\t<a class=\"language-list__link\" href=\"#\">ch</a>\r\n\t\t\t</li>\r\n\t\t</ul>\r\n\t\t<div class=\"cps-js-bg cps-aside__bg\"></div>\r\n\t</aside>\r\n\r\n\t<!-- Главный контейнер -->\r\n\t<main class=\"cps-main\">\r\n\r\n\t\t<!-- Секция контента -->\r\n\t\t<section class=\"servec-content\">\r\n\r\n\t\t\t<div class=\"servec-content__header\">\r\n\t\t\t\t<h1 class=\"servec-content__title\">Услуги и сервисы</h1>\r\n\t\t\t\t<ul class=\"servec-content__feedback-servec feedback-servec\">\r\n\t\t\t\t\t<li class=\"feedback-servec__item\">\r\n\t\t\t\t\t\t<button class=\"feedback-servec__link button-js-open\" data-path=\"one-btn\">\r\n\t\t\t\t\t\t\t<span class=\"feedback-servec__text\">Оставить заявку</span>\r\n\t\t\t\t\t\t\t<i class=\"feedback-servec__icon icon-repair\"></i>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"feedback-servec__item\">\r\n\t\t\t\t\t\t<button class=\"feedback-servec__link button-js-open\" data-path=\"two-btn\">\r\n\t\t\t\t\t\t\t<span class=\"feedback-servec__text\">Статус ремонта</span>\r\n\t\t\t\t\t\t\t<i class=\"feedback-servec__icon icon-search-header\"></i>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ul>\r\n\t\t\t</div>\r\n\t\t\t\r\n\t\t\t<div class=\"swiper-container swiper-container--service\">\r\n\t\t\t\t<ul class=\"swiper-wrapper servec-content__service-list service-list\">\r\n\t\t\t\t\t<li class=\"service-list__item swiper-slide\">\r\n\t\t\t\t\t\t<a class=\"service-list__link service-list__link--active\" href=\"#\" data-path=\"one\">Ремонтируемые бренды</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"service-list__item swiper-slide\">\r\n\t\t\t\t\t\t<a class=\"service-list__link\" href=\"#\" data-path=\"two\">Ремонтируемые устрой</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"service-list__item swiper-slide\">\r\n\t\t\t\t\t\t<a class=\"service-list__link\" href=\"#\" data-path=\"three\">Цены на услуги</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"service-list__item swiper-slide\">\r\n\t\t\t\t\t\t<a class=\"service-list__link\" href=\"#\" data-path=\"four\">Адреса сервесных центров</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"service-list__item swiper-slide\">\r\n\t\t\t\t\t\t<a class=\"service-list__link\" href=\"#\" data-path=\"five\">Специальные цены</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"service-list__item swiper-slide\">\r\n\t\t\t\t\t\t<a class=\"service-list__link\" href=\"#\" data-path=\"six\">Отзовы</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ul>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"servec-content__service-item service-item services-item--active\" data-target=\"one\">\r\n\t\t\t\t<div>\r\n\t\t\t\t<div class=\"service-item__wrapp\" data-target=\"three-allopen\">\r\n\t\t\t\t\t<p class=\"service-item__text\">\r\n\t\t\t\t\t\tМы являемся авторизованным сервисным центром по ремонту техники Dell. Только у нас вы можете отремонтировать свой ноутбук Dell с официальной гарантией производителя.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"service-item__text service-item__text--visually-hidden\">\r\n\t\t\t\t\t\tМы успешно работаем с 1992 года и заслужили репутацию надежного партнера, что подтверждает большое количество постоянных клиентов. Мы гордимся тем, что к нам обращаются по рекомендациям и, в свою очередь, советуют нас родным и близким.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"service-item__text\">\r\n\t\t\t\t\t\tМы являемся авторизованным сервисным центром по ремонту техники Dell. Только у нас вы можете отремонтировать свой ноутбук Dell с официальной гарантией производителя.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"service-item__text\">\r\n\t\t\t\t\t\tМы успешно работаем с 1992 года и заслужили репутацию надежного партнера, что подтверждает большое количество постоянных клиентов. Мы гордимся тем, что к нам обращаются по рекомендациям и, в свою очередь, советуют нас родным и близким.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t</div>\r\n\t\t\t\t<button class=\"service-brands__link service-item__link icon-expand\" data-path=\"three-allopen\" >Читать дальше</button>\r\n\t\t\t</div>\r\n\t\t\t\t<picture class=\"service-item__img\">\r\n\t\t\t\t\t<source type=\"image/avif\" srcset=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" media=\"(min-width: 1120px)\">\r\n\t\t\t\t\t<source type=\"image/avif\" srcset=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" media=\"(min-width: 768px)\">\r\n\t\t\t\t\t<source type=\"image/avif\" srcset=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\">\r\n\t\t\t\t\t<source type=\"image/webp\" srcset=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\" media=\"(min-width: 1120px)\">\r\n\t\t\t\t\t<source type=\"image/webp\" srcset=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" media=\"(min-width: 768px)\">\r\n\t\t\t\t\t<source type=\"image/webp\" srcset=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\">\r\n\t\t\t\t\t<source srcset=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\" media=\"(min-width: 1120px)\">\r\n\t\t\t\t\t<source srcset=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\" media=\"(min-width: 768px)\">\r\n\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\" alt=\"фото\"/>\r\n\t\t\t\t</picture>\t\t\t\t\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"servec-content__service-item service-item\" data-target=\"two\">\r\n\t\t\t\t<div>\r\n\t\t\t\t<div class=\"service-item__wrapp\" data-target=\"three-allopen\">\r\n\t\t\t\t\t<p class=\"service-item__text\">\r\n\t\t\t\t\t\tМы являемся авторизованным сервисным центром по ремонту техники Dell. Только у нас вы можете отремонтировать свой ноутбук Dell с официальной гарантией производителя.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"service-item__text service-item__text--visually-hidden\">\r\n\t\t\t\t\t\tМы успешно работаем с 1992 года и заслужили репутацию надежного партнера, что подтверждает большое количество постоянных клиентов. Мы гордимся тем, что к нам обращаются по рекомендациям и, в свою очередь, советуют нас родным и близким.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"service-item__text\">\r\n\t\t\t\t\t\tМы являемся авторизованным сервисным центром по ремонту техники Dell. Только у нас вы можете отремонтировать свой ноутбук Dell с официальной гарантией производителя.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"service-item__text\">\r\n\t\t\t\t\t\tМы успешно работаем с 1992 года и заслужили репутацию надежного партнера, что подтверждает большое количество постоянных клиентов. Мы гордимся тем, что к нам обращаются по рекомендациям и, в свою очередь, советуют нас родным и близким.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t</div>\r\n\t\t\t\t<button class=\"service-brands__link service-item__link icon-expand\" data-path=\"three-allopen\" >Читать дальше</button>\r\n\t\t\t</div>\r\n\t\t\t<picture class=\"service-item__img\">\r\n\t\t\t\t<source type=\"image/avif\" srcset=\"" + ___HTML_LOADER_REPLACEMENT_12___ + "\" media=\"(min-width: 1120px)\">\r\n\t\t\t\t<source type=\"image/avif\" srcset=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\" media=\"(min-width: 768px)\">\r\n\t\t\t\t<source type=\"image/avif\" srcset=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\">\r\n\t\t\t\t<source type=\"image/webp\" srcset=\"" + ___HTML_LOADER_REPLACEMENT_15___ + "\" media=\"(min-width: 1120px)\">\r\n\t\t\t\t<source type=\"image/webp\" srcset=\"" + ___HTML_LOADER_REPLACEMENT_16___ + "\" media=\"(min-width: 768px)\">\r\n\t\t\t\t<source type=\"image/webp\" srcset=\"" + ___HTML_LOADER_REPLACEMENT_17___ + "\">\r\n\t\t\t\t<source srcset=\"" + ___HTML_LOADER_REPLACEMENT_18___ + "\" media=\"(min-width: 1120px)\">\r\n\t\t\t\t<source srcset=\"" + ___HTML_LOADER_REPLACEMENT_19___ + "\" media=\"(min-width: 768px)\">\r\n\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_20___ + "\" alt=\"фото\"/>\r\n\t\t\t</picture>\t\t\t\t\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"servec-content__service-item service-item\" data-target=\"three\">\r\n\t\t\t\t<div>\r\n\t\t\t\t\t<div class=\"service-item__wrapp\" data-target=\"three-allopen\">\r\n\t\t\t\t\t\t<p class=\"service-item__text\">\r\n\t\t\t\t\t\t\tМы являемся авторизованным сервисным центром по ремонту техники Dell. Только у нас вы можете отремонтировать свой ноутбук Dell с официальной гарантией производителя.\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t<p class=\"service-item__text service-item__text--visually-hidden\">\r\n\t\t\t\t\t\t\tМы успешно работаем с 1992 года и заслужили репутацию надежного партнера, что подтверждает большое количество постоянных клиентов. Мы гордимся тем, что к нам обращаются по рекомендациям и, в свою очередь, советуют нас родным и близким.\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t<p class=\"service-item__text\">\r\n\t\t\t\t\t\t\tМы являемся авторизованным сервисным центром по ремонту техники Dell. Только у нас вы можете отремонтировать свой ноутбук Dell с официальной гарантией производителя.\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t<p class=\"service-item__text\">\r\n\t\t\t\t\t\t\tМы успешно работаем с 1992 года и заслужили репутацию надежного партнера, что подтверждает большое количество постоянных клиентов. Мы гордимся тем, что к нам обращаются по рекомендациям и, в свою очередь, советуют нас родным и близким.\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<button class=\"service-brands__link service-item__link icon-expand\" data-path=\"three-allopen\" >Читать дальше</button>\r\n\t\t\t\t</div>\r\n\t\t\t\t<picture class=\"service-item__img\">\r\n\t\t\t\t\t<source type=\"image/avif\" srcset=\"" + ___HTML_LOADER_REPLACEMENT_21___ + "\" media=\"(min-width: 1120px)\">\r\n\t\t\t\t\t<source type=\"image/avif\" srcset=\"" + ___HTML_LOADER_REPLACEMENT_22___ + "\" media=\"(min-width: 768px)\">\r\n\t\t\t\t\t<source type=\"image/avif\" srcset=\"" + ___HTML_LOADER_REPLACEMENT_23___ + "\">\r\n\t\t\t\t\t<source type=\"image/webp\" srcset=\"" + ___HTML_LOADER_REPLACEMENT_24___ + "\" media=\"(min-width: 1120px)\">\r\n\t\t\t\t\t<source type=\"image/webp\" srcset=\"" + ___HTML_LOADER_REPLACEMENT_25___ + "\" media=\"(min-width: 768px)\">\r\n\t\t\t\t\t<source type=\"image/webp\" srcset=\"" + ___HTML_LOADER_REPLACEMENT_26___ + "\">\r\n\t\t\t\t\t<source srcset=\"" + ___HTML_LOADER_REPLACEMENT_18___ + "\" media=\"(min-width: 1120px)\">\r\n\t\t\t\t\t<source srcset=\"" + ___HTML_LOADER_REPLACEMENT_19___ + "\" media=\"(min-width: 768px)\">\r\n\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_27___ + "\" alt=\"фото\"/>\r\n\t\t\t\t</picture>\t\t\t\t\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"servec-content__service-item service-item\" data-target=\"four\">\r\n\t\t\t\t<div>\r\n\t\t\t\t<div class=\"service-item__wrapp\" data-target=\"three-allopen\">\r\n\t\t\t\t\t<p class=\"service-item__text\">\r\n\t\t\t\t\t\tМы являемся авторизованным сервисным центром по ремонту техники Dell. Только у нас вы можете отремонтировать свой ноутбук Dell с официальной гарантией производителя.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"service-item__text service-item__text--visually-hidden\">\r\n\t\t\t\t\t\tМы успешно работаем с 1992 года и заслужили репутацию надежного партнера, что подтверждает большое количество постоянных клиентов. Мы гордимся тем, что к нам обращаются по рекомендациям и, в свою очередь, советуют нас родным и близким.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"service-item__text\">\r\n\t\t\t\t\t\tМы являемся авторизованным сервисным центром по ремонту техники Dell. Только у нас вы можете отремонтировать свой ноутбук Dell с официальной гарантией производителя.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"service-item__text\">\r\n\t\t\t\t\t\tМы успешно работаем с 1992 года и заслужили репутацию надежного партнера, что подтверждает большое количество постоянных клиентов. Мы гордимся тем, что к нам обращаются по рекомендациям и, в свою очередь, советуют нас родным и близким.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t</div>\r\n\t\t\t\t<button class=\"service-brands__link service-item__link icon-expand\" data-path=\"three-allopen\" >Читать дальше</button>\r\n\t\t\t</div>\r\n\t\t\t\t<picture class=\"service-item__img\">\r\n\t\t\t\t\t<source type=\"image/avif\" srcset=\"" + ___HTML_LOADER_REPLACEMENT_28___ + "\" media=\"(min-width: 1120px)\">\r\n\t\t\t\t\t<source type=\"image/avif\" srcset=\"" + ___HTML_LOADER_REPLACEMENT_29___ + "\" media=\"(min-width: 768px)\">\r\n\t\t\t\t\t<source type=\"image/avif\" srcset=\"" + ___HTML_LOADER_REPLACEMENT_30___ + "\">\r\n\t\t\t\t\t<source type=\"image/webp\" srcset=\"" + ___HTML_LOADER_REPLACEMENT_31___ + "\" media=\"(min-width: 1120px)\">\r\n\t\t\t\t\t<source type=\"image/webp\" srcset=\"" + ___HTML_LOADER_REPLACEMENT_32___ + "\" media=\"(min-width: 768px)\">\r\n\t\t\t\t\t<source type=\"image/webp\" srcset=\"" + ___HTML_LOADER_REPLACEMENT_33___ + "\">\r\n\t\t\t\t\t<source srcset=\"" + ___HTML_LOADER_REPLACEMENT_34___ + "\" media=\"(min-width: 1120px)\">\r\n\t\t\t\t\t<source srcset=\"" + ___HTML_LOADER_REPLACEMENT_35___ + "\" media=\"(min-width: 768px)\">\r\n\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_36___ + "\" alt=\"фото\"/>\r\n\t\t\t\t</picture>\t\t\t\t\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"servec-content__service-item service-item\" data-target=\"five\">\r\n\t\t\t\t<div>\r\n\t\t\t\t<div class=\"service-item__wrapp\" data-target=\"three-allopen\">\r\n\t\t\t\t\t<p class=\"service-item__text\">\r\n\t\t\t\t\t\tМы являемся авторизованным сервисным центром по ремонту техники Dell. Только у нас вы можете отремонтировать свой ноутбук Dell с официальной гарантией производителя.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"service-item__text service-item__text--visually-hidden\">\r\n\t\t\t\t\t\tМы успешно работаем с 1992 года и заслужили репутацию надежного партнера, что подтверждает большое количество постоянных клиентов. Мы гордимся тем, что к нам обращаются по рекомендациям и, в свою очередь, советуют нас родным и близким.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"service-item__text\">\r\n\t\t\t\t\t\tМы являемся авторизованным сервисным центром по ремонту техники Dell. Только у нас вы можете отремонтировать свой ноутбук Dell с официальной гарантией производителя.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"service-item__text\">\r\n\t\t\t\t\t\tМы успешно работаем с 1992 года и заслужили репутацию надежного партнера, что подтверждает большое количество постоянных клиентов. Мы гордимся тем, что к нам обращаются по рекомендациям и, в свою очередь, советуют нас родным и близким.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t</div>\r\n\t\t\t\t<button class=\"service-brands__link service-item__link icon-expand\" data-path=\"three-allopen\" >Читать дальше</button>\r\n\t\t\t</div>\r\n\t\t\t\t<picture class=\"service-item__img\">\r\n\t\t\t\t\t<source type=\"image/avif\" srcset=\"" + ___HTML_LOADER_REPLACEMENT_37___ + "\" media=\"(min-width: 1120px)\">\r\n\t\t\t\t\t<source type=\"image/avif\" srcset=\"" + ___HTML_LOADER_REPLACEMENT_38___ + "\" media=\"(min-width: 768px)\">\r\n\t\t\t\t\t<source type=\"image/avif\" srcset=\"" + ___HTML_LOADER_REPLACEMENT_39___ + "\">\r\n\t\t\t\t\t<source type=\"image/webp\" srcset=\"" + ___HTML_LOADER_REPLACEMENT_40___ + "\" media=\"(min-width: 1120px)\">\r\n\t\t\t\t\t<source type=\"image/webp\" srcset=\"" + ___HTML_LOADER_REPLACEMENT_41___ + "\" media=\"(min-width: 768px)\">\r\n\t\t\t\t\t<source type=\"image/webp\" srcset=\"" + ___HTML_LOADER_REPLACEMENT_42___ + "\">\r\n\t\t\t\t\t<source srcset=\"" + ___HTML_LOADER_REPLACEMENT_43___ + "\" media=\"(min-width: 1120px)\">\r\n\t\t\t\t\t<source srcset=\"" + ___HTML_LOADER_REPLACEMENT_44___ + "\" media=\"(min-width: 768px)\">\r\n\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_45___ + "\" alt=\"фото\"/>\r\n\t\t\t\t</picture>\t\t\t\t\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"servec-content__service-item service-item\" data-target=\"six\">\r\n\t\t\t\t<div>\r\n\t\t\t\t<div class=\"service-item__wrapp\" data-target=\"three-allopen\">\r\n\t\t\t\t\t<p class=\"service-item__text\">\r\n\t\t\t\t\t\tМы являемся авторизованным сервисным центром по ремонту техники Dell. Только у нас вы можете отремонтировать свой ноутбук Dell с официальной гарантией производителя.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"service-item__text service-item__text--visually-hidden\">\r\n\t\t\t\t\t\tМы успешно работаем с 1992 года и заслужили репутацию надежного партнера, что подтверждает большое количество постоянных клиентов. Мы гордимся тем, что к нам обращаются по рекомендациям и, в свою очередь, советуют нас родным и близким.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"service-item__text\">\r\n\t\t\t\t\t\tМы являемся авторизованным сервисным центром по ремонту техники Dell. Только у нас вы можете отремонтировать свой ноутбук Dell с официальной гарантией производителя.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"service-item__text\">\r\n\t\t\t\t\t\tМы успешно работаем с 1992 года и заслужили репутацию надежного партнера, что подтверждает большое количество постоянных клиентов. Мы гордимся тем, что к нам обращаются по рекомендациям и, в свою очередь, советуют нас родным и близким.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t</div>\r\n\t\t\t\t<button class=\"service-brands__link service-item__link icon-expand\" data-path=\"three-allopen\" >Читать дальше</button>\r\n\t\t\t</div>\r\n\t\t\t\t<picture class=\"service-item__img\">\r\n\t\t\t\t\t<source type=\"image/avif\" srcset=\"" + ___HTML_LOADER_REPLACEMENT_46___ + "\" media=\"(min-width: 1120px)\">\r\n\t\t\t\t\t<source type=\"image/avif\" srcset=\"" + ___HTML_LOADER_REPLACEMENT_47___ + "\" media=\"(min-width: 768px)\">\r\n\t\t\t\t\t<source type=\"image/avif\" srcset=\"" + ___HTML_LOADER_REPLACEMENT_48___ + "\">\r\n\t\t\t\t\t<source type=\"image/webp\" srcset=\"" + ___HTML_LOADER_REPLACEMENT_49___ + "\" media=\"(min-width: 1120px)\">\r\n\t\t\t\t\t<source type=\"image/webp\" srcset=\"" + ___HTML_LOADER_REPLACEMENT_50___ + "\" media=\"(min-width: 768px)\">\r\n\t\t\t\t\t<source type=\"image/webp\" srcset=\"" + ___HTML_LOADER_REPLACEMENT_51___ + "\">\r\n\t\t\t\t\t<source srcset=\"" + ___HTML_LOADER_REPLACEMENT_52___ + "\" media=\"(min-width: 1120px)\">\r\n\t\t\t\t\t<source srcset=\"" + ___HTML_LOADER_REPLACEMENT_53___ + "\" media=\"(min-width: 768px)\">\r\n\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_54___ + "\" alt=\"фото\"/>\r\n\t\t\t\t</picture>\t\r\n\t\t\t</div>\r\n\r\n\t\t</section>\r\n\r\n\t\t<!-- Секция брендов -->\r\n\t\t<section class=\"service-brands\">\r\n\t\t\t<h2 class=\"service-brands__title\">Ремонт техники различных брендов</h2>\r\n\t\t\t\r\n\t\t\t<div class=\"swiper-container swiper-container--brands service-brands__container\">\t\t\t\t\r\n\t\t\t\t<ul class=\"swiper-wrapper service-brands__wrapp\">\r\n\t\t\t\t\t<li class=\"swiper-slide service-brands__slide-list slide-list\">\r\n\t\t\t\t\t\t<a class=\"slide-list__link\" href=\"#\">\r\n\t\t\t\t\t\t\t<img class=\"slide-list__logo\" src=\"" + ___HTML_LOADER_REPLACEMENT_55___ + "\" alt=\"Lenova\" width=\"108\" height=\"32\">\r\n\t\t\t\t\t\t\t<span class=\"slide-list__btn icon-dropdown\"></span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"swiper-slide service-brands__slide-list slide-list\">\r\n\t\t\t\t\t\t<a class=\"slide-list__link\" href=\"#\">\r\n\t\t\t\t\t\t\t<img class=\"slide-list__logo\" src=\"" + ___HTML_LOADER_REPLACEMENT_56___ + "\" alt=\"samsung\" width=\"116\" height=\"38\">\r\n\t\t\t\t\t\t\t<span class=\"slide-list__btn icon-dropdown\"></span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"swiper-slide service-brands__slide-list slide-list\">\r\n\t\t\t\t\t\t<a class=\"slide-list__link\" href=\"#\">\r\n\t\t\t\t\t\t\t<img class=\"slide-list__logo\" src=\"" + ___HTML_LOADER_REPLACEMENT_57___ + "\" alt=\"apple\" width=\"44\" height=\"44\">\r\n\t\t\t\t\t\t\t<span class=\"slide-list__btn icon-dropdown\"></span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"swiper-slide service-brands__slide-list slide-list\">\r\n\t\t\t\t\t\t<a class=\"slide-list__link\" href=\"#\">\r\n\t\t\t\t\t\t\t<img class=\"slide-list__logo\" src=\"" + ___HTML_LOADER_REPLACEMENT_58___ + "\" alt=\"viewsonick\" width=\"128\" height=\"21\">\r\n\t\t\t\t\t\t\t<span class=\"slide-list__btn icon-dropdown\"></span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"swiper-slide service-brands__slide-list slide-list\">\r\n\t\t\t\t\t\t<a class=\"slide-list__link\" href=\"#\">\r\n\t\t\t\t\t\t\t<img class=\"slide-list__logo\" src=\"" + ___HTML_LOADER_REPLACEMENT_59___ + "\" alt=\"bosch\" width=\"128\" height=\"28\">\r\n\t\t\t\t\t\t\t<span class=\"slide-list__btn icon-dropdown\"></span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"swiper-slide service-brands__slide-list slide-list\">\r\n\t\t\t\t\t\t<a class=\"slide-list__link\" href=\"#\">\r\n\t\t\t\t\t\t\t<img class=\"slide-list__logo\" src=\"" + ___HTML_LOADER_REPLACEMENT_60___ + "\" alt=\"hp\" width=\"52\" height=\"52\">\r\n\t\t\t\t\t\t\t<span class=\"slide-list__btn icon-dropdown\"></span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"swiper-slide service-brands__slide-list slide-list\">\r\n\t\t\t\t\t\t<a class=\"slide-list__link\" href=\"#\">\r\n\t\t\t\t\t\t\t<img class=\"slide-list__logo\" src=\"" + ___HTML_LOADER_REPLACEMENT_61___ + "\" alt=\"acer\" width=\"94\" height=\"24\">\r\n\t\t\t\t\t\t\t<span class=\"slide-list__btn icon-dropdown\"></span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"swiper-slide service-brands__slide-list slide-list\">\r\n\t\t\t\t\t\t<a class=\"slide-list__link\" href=\"#\">\r\n\t\t\t\t\t\t\t<img class=\"slide-list__logo\" src=\"" + ___HTML_LOADER_REPLACEMENT_62___ + "\" alt=\"sony\" width=\"128\" height=\"26\">\r\n\t\t\t\t\t\t\t<span class=\"slide-list__btn icon-dropdown\"></span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ul>\r\n\t\t\t\t<div class=\"swiper-pagination service-brands__pagination\"></div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<ul class=\"service-brands__wrapp-tab all-open\" data-target=\"one-allopen\">\r\n\t\t\t\t<li class=\"service-brands__slide-list-tab slide-list-tab\">\r\n\t\t\t\t\t<a class=\"slide-list-tab__link\" href=\"#\">\r\n\t\t\t\t\t\t<img class=\"slide-list-tab__logo\" src=\"" + ___HTML_LOADER_REPLACEMENT_55___ + "\" alt=\"Lenova\" width=\"108\" height=\"32\">\r\n\t\t\t\t\t\t<span class=\"slide-list-tab__btn icon-dropdown\"></span>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"service-brands__slide-list-tab slide-list-tab\">\r\n\t\t\t\t\t<a class=\"slide-list-tab__link\" href=\"#\">\r\n\t\t\t\t\t\t<img class=\"slide-list-tab__logo\" src=\"" + ___HTML_LOADER_REPLACEMENT_56___ + "\" alt=\"samsung\" width=\"116\" height=\"38\">\r\n\t\t\t\t\t\t<span class=\"slide-list-tab__btn icon-dropdown\"></span>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"service-brands__slide-list-tab slide-list-tab\">\r\n\t\t\t\t\t<a class=\"slide-list-tab__link\" href=\"#\">\r\n\t\t\t\t\t\t<img class=\"slide-list-tab__logo\" src=\"" + ___HTML_LOADER_REPLACEMENT_57___ + "\" alt=\"apple\" width=\"44\" height=\"44\">\r\n\t\t\t\t\t\t<span class=\"slide-list-tab__btn icon-dropdown\"></span>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"service-brands__slide-list-tab slide-list-tab\">\r\n\t\t\t\t\t<a class=\"slide-list-tab__link\" href=\"#\">\r\n\t\t\t\t\t\t<img class=\"slide-list-tab__logo\" src=\"" + ___HTML_LOADER_REPLACEMENT_58___ + "\" alt=\"viewsonick\" width=\"128\" height=\"21\">\r\n\t\t\t\t\t\t<span class=\"slide-list-tab__btn icon-dropdown\"></span>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"service-brands__slide-list-tab slide-list-tab\">\r\n\t\t\t\t\t<a class=\"slide-list-tab__link\" href=\"#\">\r\n\t\t\t\t\t\t<img class=\"slide-list-tab__logo\" src=\"" + ___HTML_LOADER_REPLACEMENT_59___ + "\" alt=\"bosch\" width=\"128\" height=\"28\">\r\n\t\t\t\t\t\t<span class=\"slide-list-tab__btn icon-dropdown\"></span>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"service-brands__slide-list-tab slide-list-tab\">\r\n\t\t\t\t\t<a class=\"slide-list-tab__link\" href=\"#\">\r\n\t\t\t\t\t\t<img class=\"slide-list-tab__logo\" src=\"" + ___HTML_LOADER_REPLACEMENT_60___ + "\" alt=\"hp\" width=\"52\" height=\"52\">\r\n\t\t\t\t\t\t<span class=\"slide-list-tab__btn icon-dropdown\"></span>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"service-brands__slide-list-tab slide-list-tab\">\r\n\t\t\t\t\t<a class=\"slide-list-tab__link\" href=\"#\">\r\n\t\t\t\t\t\t<img class=\"slide-list-tab__logo\" src=\"" + ___HTML_LOADER_REPLACEMENT_61___ + "\" alt=\"acer\" width=\"94\" height=\"24\">\r\n\t\t\t\t\t\t<span class=\"slide-list-tab__btn icon-dropdown\"></span>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"service-brands__slide-list-tab slide-list-tab\">\r\n\t\t\t\t\t<a class=\"slide-list-tab__link\" href=\"#\">\r\n\t\t\t\t\t\t<img class=\"slide-list-tab__logo\" src=\"" + ___HTML_LOADER_REPLACEMENT_62___ + "\" alt=\"sony\" width=\"128\" height=\"26\">\r\n\t\t\t\t\t\t<span class=\"slide-list-tab__btn icon-dropdown\"></span>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"service-brands__slide-list-tab slide-list-tab\">\r\n\t\t\t\t\t<a class=\"slide-list-tab__link\" href=\"#\">\r\n\t\t\t\t\t\t<img class=\"slide-list-tab__logo\" src=\"" + ___HTML_LOADER_REPLACEMENT_55___ + "\" alt=\"Lenova\" width=\"108\" height=\"32\">\r\n\t\t\t\t\t\t<span class=\"slide-list-tab__btn icon-dropdown\"></span>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"service-brands__slide-list-tab slide-list-tab\">\r\n\t\t\t\t\t<a class=\"slide-list-tab__link\" href=\"#\">\r\n\t\t\t\t\t\t<img class=\"slide-list-tab__logo\" src=\"" + ___HTML_LOADER_REPLACEMENT_56___ + "\" alt=\"samsung\" width=\"116\" height=\"38\">\r\n\t\t\t\t\t\t<span class=\"slide-list-tab__btn icon-dropdown\"></span>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"service-brands__slide-list-tab slide-list-tab\">\r\n\t\t\t\t\t<a class=\"slide-list-tab__link\" href=\"#\">\r\n\t\t\t\t\t\t<img class=\"slide-list-tab__logo\" src=\"" + ___HTML_LOADER_REPLACEMENT_57___ + "\" alt=\"apple\" width=\"44\" height=\"44\">\r\n\t\t\t\t\t\t<span class=\"slide-list-tab__btn icon-dropdown\"></span>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"service-brands__slide-list-tab slide-list-tab\">\r\n\t\t\t\t\t<a class=\"slide-list-tab__link\" href=\"#\">\r\n\t\t\t\t\t\t<img class=\"slide-list-tab__logo\" src=\"" + ___HTML_LOADER_REPLACEMENT_58___ + "\" alt=\"viewsonick\" width=\"128\" height=\"21\">\r\n\t\t\t\t\t\t<span class=\"slide-list-tab__btn icon-dropdown\"></span>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"service-brands__slide-list-tab slide-list-tab\">\r\n\t\t\t\t\t<a class=\"slide-list-tab__link\" href=\"#\">\r\n\t\t\t\t\t\t<img class=\"slide-list-tab__logo\" src=\"" + ___HTML_LOADER_REPLACEMENT_59___ + "\" alt=\"bosch\" width=\"128\" height=\"28\">\r\n\t\t\t\t\t\t<span class=\"slide-list-tab__btn icon-dropdown\"></span>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"service-brands__slide-list-tab slide-list-tab\">\r\n\t\t\t\t\t<a class=\"slide-list-tab__link\" href=\"#\">\r\n\t\t\t\t\t\t<img class=\"slide-list-tab__logo\" src=\"" + ___HTML_LOADER_REPLACEMENT_60___ + "\" alt=\"hp\" width=\"52\" height=\"52\">\r\n\t\t\t\t\t\t<span class=\"slide-list-tab__btn icon-dropdown\"></span>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"service-brands__slide-list-tab slide-list-tab\">\r\n\t\t\t\t\t<a class=\"slide-list-tab__link\" href=\"#\">\r\n\t\t\t\t\t\t<img class=\"slide-list-tab__logo\" src=\"" + ___HTML_LOADER_REPLACEMENT_61___ + "\" alt=\"acer\" width=\"94\" height=\"24\">\r\n\t\t\t\t\t\t<span class=\"slide-list-tab__btn icon-dropdown\"></span>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"service-brands__slide-list-tab slide-list-tab\">\r\n\t\t\t\t\t<a class=\"slide-list-tab__link\" href=\"#\">\r\n\t\t\t\t\t\t<img class=\"slide-list-tab__logo\" src=\"" + ___HTML_LOADER_REPLACEMENT_62___ + "\" alt=\"sony\" width=\"128\" height=\"26\">\r\n\t\t\t\t\t\t<span class=\"slide-list-tab__btn icon-dropdown\"></span>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t</ul>\r\n\t\t\t<button class=\"service-brands__link service-item__link icon-expand\" data-path=\"one-allopen\">Показать все</button>\r\n\t\t</section>\r\n\r\n\t\t<!-- Секция вида услуг -->\r\n\t\t<section class=\"service-type\">\r\n\t\t\t<h2 class=\"service-type__title\">Ремонт различных видов техники</h2>\r\n\r\n\t\t\t<div class=\"swiper-container swiper-container--type\">\r\n\t\t\t\t<ul class=\"swiper-wrapper service-type__service-list-type service-list-type\">\r\n\t\t\t\t\t<li class=\"swiper-slide service-list-type__item\">\r\n\t\t\t\t\t\t<a class=\"service-list-type__link\" href=\"#\">\r\n\t\t\t\t\t\t\t<h3 class=\"service-list-type__title\">Ремонт ноутбуков</h3>\r\n\t\t\t\t\t\t\t<span class=\"service-list-type__btn icon-dropdown\"></span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"swiper-slide service-list-type__item\">\r\n\t\t\t\t\t\t<a class=\"service-list-type__link\" href=\"#\">\r\n\t\t\t\t\t\t\t<h3 class=\"service-list-type__title\">Ремонт планшетов</h3>\r\n\t\t\t\t\t\t\t<span class=\"service-list-type__btn icon-dropdown\"></span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"swiper-slide service-list-type__item\">\r\n\t\t\t\t\t\t<a class=\"service-list-type__link\" href=\"#\">\r\n\t\t\t\t\t\t\t<h3 class=\"service-list-type__title\">Ремонт ПК</h3>\r\n\t\t\t\t\t\t\t<span class=\"service-list-type__btn icon-dropdown\"></span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"swiper-slide service-list-type__item\">\r\n\t\t\t\t\t\t<a class=\"service-list-type__link\" href=\"#\">\r\n\t\t\t\t\t\t\t<h3 class=\"service-list-type__title\">Ремонт ПК</h3>\r\n\t\t\t\t\t\t\t<span class=\"service-list-type__btn icon-dropdown\"></span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"swiper-slide service-list-type__item\">\r\n\t\t\t\t\t\t<a class=\"service-list-type__link\" href=\"#\">\r\n\t\t\t\t\t\t\t<h3 class=\"service-list-type__title\">Ремонт ПК</h3>\r\n\t\t\t\t\t\t\t<span class=\"service-list-type__btn icon-dropdown\"></span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"swiper-slide service-list-type__item\">\r\n\t\t\t\t\t\t<a class=\"service-list-type__link\" href=\"#\">\r\n\t\t\t\t\t\t\t<h3 class=\"service-list-type__title\">Ремонт ПК</h3>\r\n\t\t\t\t\t\t\t<span class=\"service-list-type__btn icon-dropdown\"></span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"swiper-slide service-list-type__item\">\r\n\t\t\t\t\t\t<a class=\"service-list-type__link\" href=\"#\">\r\n\t\t\t\t\t\t\t<h3 class=\"service-list-type__title\">Ремонт ПК</h3>\r\n\t\t\t\t\t\t\t<span class=\"service-list-type__btn icon-dropdown\"></span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ul>\r\n\t\t\t\t<div class=\"swiper-pagination service-type__pagination\"></div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<ul class=\"service-type__service-list-type-tab service-list-type-tab all-open\" data-target=\"two-allopen\">\r\n\t\t\t\t<li class=\"service-list-type-tab__item\">\r\n\t\t\t\t\t<a class=\"service-list-type-tab__link\" href=\"#\">\r\n\t\t\t\t\t\t<h3 class=\"service-list-type-tab__title\">Ремонт ноутбуков</h3>\r\n\t\t\t\t\t\t<span class=\"service-list-type-tab__btn icon-dropdown\"></span>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"service-list-type-tab__item\">\r\n\t\t\t\t\t<a class=\"service-list-type-tab__link\" href=\"#\">\r\n\t\t\t\t\t\t<h3 class=\"service-list-type-tab__title\">Ремонт планшетов</h3>\r\n\t\t\t\t\t\t<span class=\"service-list-type-tab__btn icon-dropdown\"></span>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"service-list-type-tab__item\">\r\n\t\t\t\t\t<a class=\"service-list-type-tab__link\" href=\"#\">\r\n\t\t\t\t\t\t<h3 class=\"service-list-type-tab__title\">Ремонт ПК</h3>\r\n\t\t\t\t\t\t<span class=\"service-list-type-tab__btn icon-dropdown\"></span>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"service-list-type-tab__item\">\r\n\t\t\t\t\t<a class=\"service-list-type-tab__link\" href=\"#\">\r\n\t\t\t\t\t\t<h3 class=\"service-list-type-tab__title\">Ремонт ноутбуков</h3>\r\n\t\t\t\t\t\t<span class=\"service-list-type-tab__btn icon-dropdown\"></span>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"service-list-type-tab__item\">\r\n\t\t\t\t\t<a class=\"service-list-type-tab__link\" href=\"#\">\r\n\t\t\t\t\t\t<h3 class=\"service-list-type-tab__title\">Ремонт планшетов</h3>\r\n\t\t\t\t\t\t<span class=\"service-list-type-tab__btn icon-dropdown\"></span>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"service-list-type-tab__item\">\r\n\t\t\t\t\t<a class=\"service-list-type-tab__link\" href=\"#\">\r\n\t\t\t\t\t\t<h3 class=\"service-list-type-tab__title\">Ремонт ПК</h3>\r\n\t\t\t\t\t\t<span class=\"service-list-type-tab__btn icon-dropdown\"></span>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t</ul>\r\n\r\n\t\t\t<button class=\"service-brands__link service-item__link icon-expand\" data-path=\"two-allopen\" >Показать все</button>\r\n\t\t</section>\r\n\r\n\t\t<!-- Секция Стоимости услуг -->\r\n\t\t<section class=\"service-price\"> \r\n\t\t\t<h2 class=\"service-price__title\">Цены на услуги</h2>\r\n\r\n\t\t\t<div class=\"swiper-container swiper-container--price\">\r\n\t\t\t\t<ul class=\"swiper-wrapper service-price__price-list price-list\">\r\n\t\t\t\t\t<li class=\"swiper-slide price-list__item\">\r\n\t\t\t\t\t\t<ul class=\"price-list__item-list\">\r\n\t\t\t\t\t\t\t<li class=\"price-list__item-header\">\r\n\t\t\t\t\t\t\t\t<h3 class=\"price-list__title\">Ремонтные услуги</h3>\r\n\t\t\t\t\t\t\t\t<span class=\"price-list__text\">Диагностика</span>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class=\"price-list__item-main\">\r\n\t\t\t\t\t\t\t\t<h3 class=\"price-list__title\">Цена</h3>\r\n\t\t\t\t\t\t\t\t<span class=\"price-list__text\">Бесплатно</span>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class=\"price-list__item-footer\">\r\n\t\t\t\t\t\t\t\t<div class=\"price-list__item-footer-wrap\">\r\n\t\t\t\t\t\t\t\t\t<h3 class=\"price-list__title\">Срок</h3>\r\n\t\t\t\t\t\t\t\t\t<span class=\"price-list__text\">30 мин</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<a class=\"price-list__link icon-dropdown\" href=\"#\">Заказать</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"swiper-slide price-list__item\">\r\n\t\t\t\t\t\t<ul class=\"price-list__item-list\">\r\n\t\t\t\t\t\t\t<li class=\"price-list__item-header\">\r\n\t\t\t\t\t\t\t\t<h3 class=\"price-list__title\">Ремонтные услуги</h3>\r\n\t\t\t\t\t\t\t\t<span class=\"price-list__text\">Диагностика</span>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class=\"price-list__item-main\">\r\n\t\t\t\t\t\t\t\t<h3 class=\"price-list__title\">Цена</h3>\r\n\t\t\t\t\t\t\t\t<span class=\"price-list__text\">Бесплатно</span>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class=\"price-list__item-footer\">\r\n\t\t\t\t\t\t\t\t<div class=\"price-list__item-footer-wrap\">\r\n\t\t\t\t\t\t\t\t\t<h3 class=\"price-list__title\">Срок</h3>\r\n\t\t\t\t\t\t\t\t\t<span class=\"price-list__text\">30 мин</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<a class=\"price-list__link icon-dropdown\" href=\"#\">Заказать</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"swiper-slide price-list__item\">\r\n\t\t\t\t\t\t<ul class=\"price-list__item-list\">\r\n\t\t\t\t\t\t\t<li class=\"price-list__item-header\">\r\n\t\t\t\t\t\t\t\t<h3 class=\"price-list__title\">Ремонтные услуги</h3>\r\n\t\t\t\t\t\t\t\t<span class=\"price-list__text\">Диагностика</span>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class=\"price-list__item-main\">\r\n\t\t\t\t\t\t\t\t<h3 class=\"price-list__title\">Цена</h3>\r\n\t\t\t\t\t\t\t\t<span class=\"price-list__text\">Бесплатно</span>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class=\"price-list__item-footer\">\r\n\t\t\t\t\t\t\t\t<div class=\"price-list__item-footer-wrap\">\r\n\t\t\t\t\t\t\t\t\t<h3 class=\"price-list__title\">Срок</h3>\r\n\t\t\t\t\t\t\t\t\t<span class=\"price-list__text\">30 мин</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<a class=\"price-list__link icon-dropdown\" href=\"#\">Заказать</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"swiper-slide price-list__item\">\r\n\t\t\t\t\t\t<ul class=\"price-list__item-list\">\r\n\t\t\t\t\t\t\t<li class=\"price-list__item-header\">\r\n\t\t\t\t\t\t\t\t<h3 class=\"price-list__title\">Ремонтные услуги</h3>\r\n\t\t\t\t\t\t\t\t<span class=\"price-list__text\">Диагностика</span>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class=\"price-list__item-main\">\r\n\t\t\t\t\t\t\t\t<h3 class=\"price-list__title\">Цена</h3>\r\n\t\t\t\t\t\t\t\t<span class=\"price-list__text\">Бесплатно</span>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class=\"price-list__item-footer\">\r\n\t\t\t\t\t\t\t\t<div class=\"price-list__item-footer-wrap\">\r\n\t\t\t\t\t\t\t\t\t<h3 class=\"price-list__title\">Срок</h3>\r\n\t\t\t\t\t\t\t\t\t<span class=\"price-list__text\">30 мин</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<a class=\"price-list__link icon-dropdown\" href=\"#\">Заказать</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"swiper-slide price-list__item\">\r\n\t\t\t\t\t\t<ul class=\"price-list__item-list\">\r\n\t\t\t\t\t\t\t<li class=\"price-list__item-header\">\r\n\t\t\t\t\t\t\t\t<h3 class=\"price-list__title\">Ремонтные услуги</h3>\r\n\t\t\t\t\t\t\t\t<span class=\"price-list__text\">Диагностика</span>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class=\"price-list__item-main\">\r\n\t\t\t\t\t\t\t\t<h3 class=\"price-list__title\">Цена</h3>\r\n\t\t\t\t\t\t\t\t<span class=\"price-list__text\">Бесплатно</span>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class=\"price-list__item-footer\">\r\n\t\t\t\t\t\t\t\t<div class=\"price-list__item-footer-wrap\">\r\n\t\t\t\t\t\t\t\t\t<h3 class=\"price-list__title\">Срок</h3>\r\n\t\t\t\t\t\t\t\t\t<span class=\"price-list__text\">30 мин</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<a class=\"price-list__link icon-dropdown\" href=\"#\">Заказать</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"swiper-slide price-list__item\">\r\n\t\t\t\t\t\t<ul class=\"price-list__item-list\">\r\n\t\t\t\t\t\t\t<li class=\"price-list__item-header\">\r\n\t\t\t\t\t\t\t\t<h3 class=\"price-list__title\">Ремонтные услуги</h3>\r\n\t\t\t\t\t\t\t\t<span class=\"price-list__text\">Диагностика</span>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class=\"price-list__item-main\">\r\n\t\t\t\t\t\t\t\t<h3 class=\"price-list__title\">Цена</h3>\r\n\t\t\t\t\t\t\t\t<span class=\"price-list__text\">Бесплатно</span>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class=\"price-list__item-footer\">\r\n\t\t\t\t\t\t\t\t<div class=\"price-list__item-footer-wrap\">\r\n\t\t\t\t\t\t\t\t\t<h3 class=\"price-list__title\">Срок</h3>\r\n\t\t\t\t\t\t\t\t\t<span class=\"price-list__text\">30 мин</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<a class=\"price-list__link icon-dropdown\" href=\"#\">Заказать</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ul>\r\n\t\t\t\t<div class=\"swiper-pagination service-price__pagination\"></div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<table class=\"service-price__table-price table-price\">\r\n\t\t\t\t<tr class=\"table-price__header\">\r\n\t\t\t\t\t<th class=\"table-price__header-item\">Ремонтные услуги</th>\r\n\t\t\t\t\t<th class=\"table-price__header-item\">Цена</th>\r\n\t\t\t\t\t<th class=\"table-price__header-item\">Срок</th>\r\n\t\t\t\t\t<th class=\"table-price__header-item\"></th>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr class=\"table-price__list\">\r\n\t\t\t\t\t<td class=\"table-price__item\">Диагностика</td>\r\n\t\t\t\t\t<td class=\"table-price__item\">Бесплатно</td>\r\n\t\t\t\t\t<td class=\"table-price__item\">30 мин</td>\r\n\t\t\t\t\t<td class=\"table-price__item\"><a class=\"table-price__link icon-dropdown\" href=\"#\">Заказать</a></td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr class=\"table-price__list\">\r\n\t\t\t\t\t<td class=\"table-price__item\">Замена дисплея</td>\r\n\t\t\t\t\t<td class=\"table-price__item\">1000 &#8381;</td>\r\n\t\t\t\t\t<td class=\"table-price__item\">30-120 мин</td>\r\n\t\t\t\t\t<td class=\"table-price__item\"><a class=\"table-price__link icon-dropdown\" href=\"#\">Заказать</a></td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr class=\"table-price__list\">\r\n\t\t\t\t\t<td class=\"table-price__item\">Замена полифонического динамика</td>\r\n\t\t\t\t\t<td class=\"table-price__item\">1000 &#8381;</td>\r\n\t\t\t\t\t<td class=\"table-price__item\">30-120 мин</td>\r\n\t\t\t\t\t<td class=\"table-price__item\"><a class=\"table-price__link icon-dropdown\" href=\"#\">Заказать</a></td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr class=\"table-price__list\">\r\n\t\t\t\t\t<td class=\"table-price__item\">Тестирование с выдачей технического заключения</td>\r\n\t\t\t\t\t<td class=\"table-price__item\">1000 &#8381;</td>\r\n\t\t\t\t\t<td class=\"table-price__item\">30-120 мин</td>\r\n\t\t\t\t\t<td class=\"table-price__item\"><a class=\"table-price__link icon-dropdown\" href=\"#\">Заказать</a></td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr class=\"table-price__list\">\r\n\t\t\t\t\t<td class=\"table-price__item\">Замена программного обеспечения</td>\r\n\t\t\t\t\t<td class=\"table-price__item\">1000 &#8381;</td>\r\n\t\t\t\t\t<td class=\"table-price__item\">30-120 мин</td>\r\n\t\t\t\t\t<td class=\"table-price__item\"><a class=\"table-price__link icon-dropdown\" href=\"#\">Заказать</a></td>\r\n\t\t\t\t</tr>\r\n\t\t\t</table>\r\n\t\t\t\r\n\t\t\t<p class=\"service-price__text\">\r\n\t\t\t\tВсе цены указаны с учетом НДС. Стоимость ремонта указана на единичную услугу. Для получения коммерческого предложения на постоянное обслуживание, оставьте заявку.\r\n\t\t\t</p>\r\n\r\n\t\t\t<a class=\"service-price__link icon-dropdown\" href=\"#\">Получить коммерческое предложение</a>\r\n\r\n\t\t</section>\r\n\r\n\t</main>\r\n\r\n\t<!-- Обратная связь -->\r\n\t<section class=\"cps-popap cps-popap--none blok-js-active\" data-target=\"one-btn\">\r\n\t\t<h2 class=\"cps-popap__title\">Обратная связь</h2>\r\n\t\t<form class=\"cps-popap__fb-form fb-form\" action=\"#\" method=\"POST\" enctype=\"multipart/form-data\">\r\n\t\t\t<label for=\"fb-name\">\r\n\t\t\t\t<span class=\"visually-hidden\">Имя</span>\r\n\t\t\t\t<input class=\"fb-form__input\" type=\"text\" name=\"name\" placeholder=\"Имя\" required=\"required\" id=\"fb-name\">\r\n\t\t\t</label>\r\n\t\t\t<label for=\"fb-phone\">\r\n\t\t\t\t<span class=\"visually-hidden\">Телефон</span>\r\n\t\t\t\t<input class=\"fb-form__input\" type=\"text\" name=\"phone\" placeholder=\"Телефон\" required=\"required\" id=\"fb-phone\">\r\n\t\t\t</label>\r\n\t\t\t<label for=\"fb-email\">\r\n\t\t\t\t<span class=\"visually-hidden\">Элетронная почта</span>\r\n\t\t\t\t<input class=\"fb-form__input\" type=\"text\" name=\"email\" placeholder=\"Элетронная почта\" required=\"required\" id=\"fb-email\">\r\n\t\t\t</label>\r\n\t\t\t<label for=\"fb-message\">\r\n\t\t\t\t<span class=\"visually-hidden\">Сообщение</span>\r\n\t\t\t\t<textarea class=\"fb-form__input fb-form__textarea\" placeholder=\"Сообщение\" id=\"fb-message\"></textarea>\r\n\t\t\t</label>\r\n\t\t\t<p class=\"fb-form__text\">\r\n\t\t\t\tНажимая “отправить”, вы даете согласие на <strong class=\"fb-form__text--color-radical-red\">обработку персональных данных</strong> и соглашаетесь с нашей <a class=\"fb-form__text--color-radical-red\" href=\"#\">политикой конфиденциальности</a>\r\n\t\t\t</p>\r\n\t\t\t<button class=\"fb-form__btn icon-dropdown\" type=\"submit\">Отправить</button>\r\n\t\t</form>\r\n\t\t<button class=\"cps-popap__btn btn-close button-js-open\">\r\n\t\t\t<span class=\"visually-hidden\">Закрыть меню</span>\r\n\t\t\t<span class=\"btn-close__elm-btn\"></span>\r\n\t\t</button>\r\n\t\t<div class=\"cps-js-bg cps-popap__bg\"></div>\r\n\t</section>\r\n\r\n\t<!-- Статус ремонта -->\r\n\t<section class=\"cps-popap cps-popap--none blok-js-active\"  data-target=\"two-btn\">\r\n\t\t<h2 class=\"cps-popap__title\">Статус ремонта</h2>\r\n\t\t<form class=\"cps-popap__fb-form fb-form\" action=\"#\" method=\"POST\" enctype=\"multipart/form-data\">\r\n\t\t\t<label>\r\n\t\t\t\t<span class=\"visually-hidden\">Телефон</span>\r\n\t\t\t\t<input class=\"fb-form__input\" type=\"tel\" name=\"phone\" placeholder=\"Телефон\" required=\"required\">\r\n\t\t\t</label>\r\n\t\t\t<p class=\"fb-form__text\">\r\n\t\t\t\tНажимая “отправить”, вы даете согласие на <strong class=\"fb-form__text--color-radical-red\">обработку персональных данных</strong> и соглашаетесь с нашей <a class=\"fb-form__text--color-radical-red\" href=\"#\" target=\"_blank\">политикой конфиденциальности</a>\r\n\t\t\t</p>\r\n\t\t\t<button class=\"fb-form__btn icon-dropdown\" type=\"submit\">Отправить</button>\r\n\t\t</form>\r\n\t\t<button class=\"cps-popap__btn btn-close button-js-open\">\r\n\t\t\t<span class=\"visually-hidden\">Закрыть меню</span>\r\n\t\t\t<span class=\"btn-close__elm-btn\"></span>\r\n\t\t</button>\r\n\t\r\n\t\r\n\t\t<div class=\"cps-js-bg cps-popap__bg\"></div>\r\n\t</section>\r\n\t<!-- Заказать звонок -->\r\n\t<section class=\"cps-popap cps-popap--none blok-js-active\"  data-target=\"three-btn\">\r\n\t\t<h2 class=\"cps-popap__title\">Заказать звонок</h2>\r\n\t\t<form class=\"cps-popap__fb-form fb-form\" action=\"#\" method=\"POST\" enctype=\"multipart/form-data\">\r\n\t\t\t<label>\r\n\t\t\t\t<span class=\"visually-hidden\">Телефон</span>\r\n\t\t\t\t<input class=\"fb-form__input\" type=\"tel\" name=\"phone\" placeholder=\"Телефон\" required=\"required\">\r\n\t\t\t</label>\r\n\t\t\t<p class=\"fb-form__text\">\r\n\t\t\t\tНажимая “отправить”, вы даете согласие на <strong class=\"fb-form__text--color-radical-red\">обработку персональных данных</strong> и соглашаетесь с нашей <a class=\"fb-form__text--color-radical-red\" href=\"#\" target=\"_blank\">политикой конфиденциальности</a>\r\n\t\t\t</p>\r\n\t\t\t<button class=\"fb-form__btn icon-dropdown\" type=\"submit\">Отправить</button>\r\n\t\t</form>\r\n\t\t<button class=\"cps-popap__btn btn-close button-js-open\">\r\n\t\t\t<span class=\"visually-hidden\">Закрыть меню</span>\r\n\t\t\t<span class=\"btn-close__elm-btn\"></span>\r\n\t\t</button>\r\n\t\r\n\t\r\n\t\t<div class=\"cps-js-bg cps-popap__bg\"></div>\r\n\t</section>\r\n\t<!-- Заказать звонок -->\r\n\t<section class=\"cps-popap cps-popap--none blok-js-active\"  data-target=\"three-btn\">\r\n\t\t<h2 class=\"cps-popap__title\">Заказать звонок</h2>\r\n\t\t<form class=\"cps-popap__fb-form fb-form\" action=\"#\" method=\"POST\" enctype=\"multipart/form-data\">\r\n\t\t\t<label>\r\n\t\t\t\t<span class=\"visually-hidden\">Телефон</span>\r\n\t\t\t\t<input class=\"fb-form__input\" type=\"tel\" name=\"phone\" placeholder=\"Телефон\" required=\"required\">\r\n\t\t\t</label>\r\n\t\t\t<p class=\"fb-form__text\">\r\n\t\t\t\tНажимая “отправить”, вы даете согласие на <strong class=\"fb-form__text--color-radical-red\">обработку персональных данных</strong> и соглашаетесь с нашей <a class=\"fb-form__text--color-radical-red\" href=\"#\" target=\"_blank\">политикой конфиденциальности</a>\r\n\t\t\t</p>\r\n\t\t\t<button class=\"fb-form__btn icon-dropdown\" type=\"submit\">Отправить</button>\r\n\t\t</form>\r\n\t\t<button class=\"cps-popap__btn btn-close button-js-open\">\r\n\t\t\t<span class=\"visually-hidden\">Закрыть меню</span>\r\n\t\t\t<span class=\"btn-close__elm-btn\"></span>\r\n\t\t</button>\r\n\t\r\n\t\r\n\t\t<div class=\"cps-js-bg cps-popap__bg\"></div>\r\n\t</section>\r\n\t<!-- Начать чат -->\r\n\t<section class=\"cps-popap cps-popap--none blok-js-active\"  data-target=\"four-btn\">\r\n\t\t<h2 class=\"cps-popap__title\">Начать чат</h2>\r\n\t\t<form class=\"cps-popap__fb-form fb-form\" action=\"#\" method=\"POST\" enctype=\"multipart/form-data\">\r\n\t\t\t<label>\r\n\t\t\t\t<span class=\"visually-hidden\">Телефон</span>\r\n\t\t\t\t<input class=\"fb-form__input\" type=\"tel\" name=\"phone\" placeholder=\"Телефон\" required=\"required\">\r\n\t\t\t</label>\r\n\t\t\t<p class=\"fb-form__text\">\r\n\t\t\t\tНажимая “отправить”, вы даете согласие на <strong class=\"fb-form__text--color-radical-red\">обработку персональных данных</strong> и соглашаетесь с нашей <a class=\"fb-form__text--color-radical-red\" href=\"#\" target=\"_blank\">политикой конфиденциальности</a>\r\n\t\t\t</p>\r\n\t\t\t<button class=\"fb-form__btn icon-dropdown\" type=\"submit\">Отправить</button>\r\n\t\t</form>\r\n\t\t<button class=\"cps-popap__btn btn-close button-js-open\">\r\n\t\t\t<span class=\"visually-hidden\">Закрыть меню</span>\r\n\t\t\t<span class=\"btn-close__elm-btn\"></span>\r\n\t\t</button>\r\n\t\r\n\t\r\n\t\t<div class=\"cps-js-bg cps-popap__bg\"></div>\r\n\t</section>\r\n\t<!-- Вход Личный кабинет -->\r\n\t<section class=\"cps-popap cps-popap--none blok-js-active\"  data-target=\"five-btn\">\r\n\t\t<h2 class=\"cps-popap__title\">Вход Личный кабинетк</h2>\r\n\t\t<form class=\"cps-popap__fb-form fb-form\" action=\"#\" method=\"POST\" enctype=\"multipart/form-data\">\r\n\t\t\t<label>\r\n\t\t\t\t<span class=\"visually-hidden\">Телефон</span>\r\n\t\t\t\t<input class=\"fb-form__input\" type=\"tel\" name=\"phone\" placeholder=\"Телефон\" required=\"required\">\r\n\t\t\t</label>\r\n\t\t\t<p class=\"fb-form__text\">\r\n\t\t\t\tНажимая “отправить”, вы даете согласие на <strong class=\"fb-form__text--color-radical-red\">обработку персональных данных</strong> и соглашаетесь с нашей <a class=\"fb-form__text--color-radical-red\" href=\"#\" target=\"_blank\">политикой конфиденциальности</a>\r\n\t\t\t</p>\r\n\t\t\t<button class=\"fb-form__btn icon-dropdown\" type=\"submit\">Отправить</button>\r\n\t\t</form>\r\n\t\t<button class=\"cps-popap__btn btn-close button-js-open\">\r\n\t\t\t<span class=\"visually-hidden\">Закрыть меню</span>\r\n\t\t\t<span class=\"btn-close__elm-btn\"></span>\r\n\t\t</button>\r\n\t\r\n\t\r\n\t\t<div class=\"cps-js-bg cps-popap__bg\"></div>\r\n\t</section>\r\n\t<!-- Поиск -->\r\n\t<section class=\"cps-popap cps-popap--none blok-js-active\"  data-target=\"seven-btn\">\r\n\t\t<h2 class=\"cps-popap__title\">Поиск</h2>\r\n\t\t<form class=\"cps-popap__fb-form fb-form\" action=\"#\" method=\"POST\" enctype=\"multipart/form-data\">\r\n\t\t\t<label>\r\n\t\t\t\t<span class=\"visually-hidden\">Телефон</span>\r\n\t\t\t\t<input class=\"fb-form__input\" type=\"tel\" name=\"phone\" placeholder=\"Телефон\" required=\"required\">\r\n\t\t\t</label>\r\n\t\t\t<p class=\"fb-form__text\">\r\n\t\t\t\tНажимая “отправить”, вы даете согласие на <strong class=\"fb-form__text--color-radical-red\">обработку персональных данных</strong> и соглашаетесь с нашей <a class=\"fb-form__text--color-radical-red\" href=\"#\" target=\"_blank\">политикой конфиденциальности</a>\r\n\t\t\t</p>\r\n\t\t\t<button class=\"fb-form__btn icon-dropdown\" type=\"submit\">Отправить</button>\r\n\t\t</form>\r\n\t\t<button class=\"cps-popap__btn btn-close button-js-open\">\r\n\t\t\t<span class=\"visually-hidden\">Закрыть меню</span>\r\n\t\t\t<span class=\"btn-close__elm-btn\"></span>\r\n\t\t</button>\r\n\t\r\n\t\r\n\t\t<div class=\"cps-js-bg cps-popap__bg\"></div>\r\n\t</section>\r\n\t<!-- Подвал -->\r\n\t<footer class=\"cps-footer\">\r\n\t\t<ul class=\"cps-footer__footer-list footer-list\">\r\n\t\t\t<li class=\"footer-list__item footer-list__wrapp\">\r\n\t\t\t\t<span>&#169; 2019 CPS</span>\r\n\t\t\t\t<span>Разработано командой <a class=\"footer-list__link\" href=\"https://apesong.ru/\" target=\"_blank\">Apesong</a></span>\r\n\t\t\t</li>\r\n\t\t\t<li class=\"footer-list__item\">\r\n\t\t\t\t<a class=\"footer-list__link\" href=\"#\">Политика конфиденциальности</a>\r\n\t\t\t</li>\r\n\t\t\t<li class=\"footer-list__item\">\r\n\t\t\t\tИнформация, размещена на данной странице, не является публичной офертой\r\n\t\t\t</li>\r\n\t\t</ul>\t\r\n\t</footer>\r\n\r\n</body>\r\n</html>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "../node_modules/html-loader/dist/runtime/getUrl.js":
/*!**********************************************************!*\
  !*** ../node_modules/html-loader/dist/runtime/getUrl.js ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url);

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

/***/ }),

/***/ "./scss/main.scss":
/*!************************!*\
  !*** ./scss/main.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../node_modules/ssr-window/ssr-window.esm.js":
/*!****************************************************!*\
  !*** ../node_modules/ssr-window/ssr-window.esm.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "extend": () => (/* binding */ extend),
/* harmony export */   "getDocument": () => (/* binding */ getDocument),
/* harmony export */   "getWindow": () => (/* binding */ getWindow),
/* harmony export */   "ssrDocument": () => (/* binding */ ssrDocument),
/* harmony export */   "ssrWindow": () => (/* binding */ ssrWindow)
/* harmony export */ });
/**
 * SSR Window 3.0.0
 * Better handling for window object in SSR environment
 * https://github.com/nolimits4web/ssr-window
 *
 * Copyright 2020, Vladimir Kharlampidi
 *
 * Licensed under MIT
 *
 * Released on: November 9, 2020
 */
/* eslint-disable no-param-reassign */
function isObject(obj) {
    return (obj !== null &&
        typeof obj === 'object' &&
        'constructor' in obj &&
        obj.constructor === Object);
}
function extend(target, src) {
    if (target === void 0) { target = {}; }
    if (src === void 0) { src = {}; }
    Object.keys(src).forEach(function (key) {
        if (typeof target[key] === 'undefined')
            target[key] = src[key];
        else if (isObject(src[key]) &&
            isObject(target[key]) &&
            Object.keys(src[key]).length > 0) {
            extend(target[key], src[key]);
        }
    });
}

var ssrDocument = {
    body: {},
    addEventListener: function () { },
    removeEventListener: function () { },
    activeElement: {
        blur: function () { },
        nodeName: '',
    },
    querySelector: function () {
        return null;
    },
    querySelectorAll: function () {
        return [];
    },
    getElementById: function () {
        return null;
    },
    createEvent: function () {
        return {
            initEvent: function () { },
        };
    },
    createElement: function () {
        return {
            children: [],
            childNodes: [],
            style: {},
            setAttribute: function () { },
            getElementsByTagName: function () {
                return [];
            },
        };
    },
    createElementNS: function () {
        return {};
    },
    importNode: function () {
        return null;
    },
    location: {
        hash: '',
        host: '',
        hostname: '',
        href: '',
        origin: '',
        pathname: '',
        protocol: '',
        search: '',
    },
};
function getDocument() {
    var doc = typeof document !== 'undefined' ? document : {};
    extend(doc, ssrDocument);
    return doc;
}

var ssrWindow = {
    document: ssrDocument,
    navigator: {
        userAgent: '',
    },
    location: {
        hash: '',
        host: '',
        hostname: '',
        href: '',
        origin: '',
        pathname: '',
        protocol: '',
        search: '',
    },
    history: {
        replaceState: function () { },
        pushState: function () { },
        go: function () { },
        back: function () { },
    },
    CustomEvent: function CustomEvent() {
        return this;
    },
    addEventListener: function () { },
    removeEventListener: function () { },
    getComputedStyle: function () {
        return {
            getPropertyValue: function () {
                return '';
            },
        };
    },
    Image: function () { },
    Date: function () { },
    screen: {},
    setTimeout: function () { },
    clearTimeout: function () { },
    matchMedia: function () {
        return {};
    },
    requestAnimationFrame: function (callback) {
        if (typeof setTimeout === 'undefined') {
            callback();
            return null;
        }
        return setTimeout(callback, 0);
    },
    cancelAnimationFrame: function (id) {
        if (typeof setTimeout === 'undefined') {
            return;
        }
        clearTimeout(id);
    },
};
function getWindow() {
    var win = typeof window !== 'undefined' ? window : {};
    extend(win, ssrWindow);
    return win;
}




/***/ }),

/***/ "../node_modules/swiper/esm/components/core/breakpoints/getBreakpoint.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/swiper/esm/components/core/breakpoints/getBreakpoint.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getBreakpoint)
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "../node_modules/ssr-window/ssr-window.esm.js");

function getBreakpoint(breakpoints, base, containerEl) {
  if (base === void 0) {
    base = 'window';
  }

  if (!breakpoints || base === 'container' && !containerEl) return undefined;
  var breakpoint = false;
  var window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  var currentHeight = base === 'window' ? window.innerHeight : containerEl.clientHeight;
  var points = Object.keys(breakpoints).map(function (point) {
    if (typeof point === 'string' && point.indexOf('@') === 0) {
      var minRatio = parseFloat(point.substr(1));
      var value = currentHeight * minRatio;
      return {
        value: value,
        point: point
      };
    }

    return {
      value: point,
      point: point
    };
  });
  points.sort(function (a, b) {
    return parseInt(a.value, 10) - parseInt(b.value, 10);
  });

  for (var i = 0; i < points.length; i += 1) {
    var _points$i = points[i],
        point = _points$i.point,
        value = _points$i.value;

    if (base === 'window') {
      if (window.matchMedia("(min-width: " + value + "px)").matches) {
        breakpoint = point;
      }
    } else if (value <= containerEl.clientWidth) {
      breakpoint = point;
    }
  }

  return breakpoint || 'max';
}

/***/ }),

/***/ "../node_modules/swiper/esm/components/core/breakpoints/index.js":
/*!***********************************************************************!*\
  !*** ../node_modules/swiper/esm/components/core/breakpoints/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _setBreakpoint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setBreakpoint */ "../node_modules/swiper/esm/components/core/breakpoints/setBreakpoint.js");
/* harmony import */ var _getBreakpoint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getBreakpoint */ "../node_modules/swiper/esm/components/core/breakpoints/getBreakpoint.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  setBreakpoint: _setBreakpoint__WEBPACK_IMPORTED_MODULE_0__.default,
  getBreakpoint: _getBreakpoint__WEBPACK_IMPORTED_MODULE_1__.default
});

/***/ }),

/***/ "../node_modules/swiper/esm/components/core/breakpoints/setBreakpoint.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/swiper/esm/components/core/breakpoints/setBreakpoint.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ setBreakpoint)
/* harmony export */ });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/utils */ "../node_modules/swiper/esm/utils/utils.js");

function setBreakpoint() {
  var swiper = this;
  var activeIndex = swiper.activeIndex,
      initialized = swiper.initialized,
      _swiper$loopedSlides = swiper.loopedSlides,
      loopedSlides = _swiper$loopedSlides === void 0 ? 0 : _swiper$loopedSlides,
      params = swiper.params,
      $el = swiper.$el;
  var breakpoints = params.breakpoints;
  if (!breakpoints || breakpoints && Object.keys(breakpoints).length === 0) return; // Get breakpoint for window width and update parameters

  var breakpoint = swiper.getBreakpoint(breakpoints, swiper.params.breakpointsBase, swiper.el);
  if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;
  var breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : undefined;

  if (breakpointOnlyParams) {
    ['slidesPerView', 'spaceBetween', 'slidesPerGroup', 'slidesPerGroupSkip', 'slidesPerColumn'].forEach(function (param) {
      var paramValue = breakpointOnlyParams[param];
      if (typeof paramValue === 'undefined') return;

      if (param === 'slidesPerView' && (paramValue === 'AUTO' || paramValue === 'auto')) {
        breakpointOnlyParams[param] = 'auto';
      } else if (param === 'slidesPerView') {
        breakpointOnlyParams[param] = parseFloat(paramValue);
      } else {
        breakpointOnlyParams[param] = parseInt(paramValue, 10);
      }
    });
  }

  var breakpointParams = breakpointOnlyParams || swiper.originalParams;
  var wasMultiRow = params.slidesPerColumn > 1;
  var isMultiRow = breakpointParams.slidesPerColumn > 1;
  var wasEnabled = params.enabled;

  if (wasMultiRow && !isMultiRow) {
    $el.removeClass(params.containerModifierClass + "multirow " + params.containerModifierClass + "multirow-column");
    swiper.emitContainerClasses();
  } else if (!wasMultiRow && isMultiRow) {
    $el.addClass(params.containerModifierClass + "multirow");

    if (breakpointParams.slidesPerColumnFill && breakpointParams.slidesPerColumnFill === 'column' || !breakpointParams.slidesPerColumnFill && params.slidesPerColumnFill === 'column') {
      $el.addClass(params.containerModifierClass + "multirow-column");
    }

    swiper.emitContainerClasses();
  }

  var directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
  var needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);

  if (directionChanged && initialized) {
    swiper.changeDirection();
  }

  (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.extend)(swiper.params, breakpointParams);
  var isEnabled = swiper.params.enabled;
  (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.extend)(swiper, {
    allowTouchMove: swiper.params.allowTouchMove,
    allowSlideNext: swiper.params.allowSlideNext,
    allowSlidePrev: swiper.params.allowSlidePrev
  });

  if (wasEnabled && !isEnabled) {
    swiper.disable();
  } else if (!wasEnabled && isEnabled) {
    swiper.enable();
  }

  swiper.currentBreakpoint = breakpoint;
  swiper.emit('_beforeBreakpoint', breakpointParams);

  if (needsReLoop && initialized) {
    swiper.loopDestroy();
    swiper.loopCreate();
    swiper.updateSlides();
    swiper.slideTo(activeIndex - loopedSlides + swiper.loopedSlides, 0, false);
  }

  swiper.emit('breakpoint', breakpointParams);
}

/***/ }),

/***/ "../node_modules/swiper/esm/components/core/check-overflow/index.js":
/*!**************************************************************************!*\
  !*** ../node_modules/swiper/esm/components/core/check-overflow/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function checkOverflow() {
  var swiper = this;
  var params = swiper.params;
  var wasLocked = swiper.isLocked;
  var lastSlidePosition = swiper.slides.length > 0 && params.slidesOffsetBefore + params.spaceBetween * (swiper.slides.length - 1) + swiper.slides[0].offsetWidth * swiper.slides.length;

  if (params.slidesOffsetBefore && params.slidesOffsetAfter && lastSlidePosition) {
    swiper.isLocked = lastSlidePosition <= swiper.size;
  } else {
    swiper.isLocked = swiper.snapGrid.length === 1;
  }

  swiper.allowSlideNext = !swiper.isLocked;
  swiper.allowSlidePrev = !swiper.isLocked; // events

  if (wasLocked !== swiper.isLocked) swiper.emit(swiper.isLocked ? 'lock' : 'unlock');

  if (wasLocked && wasLocked !== swiper.isLocked) {
    swiper.isEnd = false;
    if (swiper.navigation) swiper.navigation.update();
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  checkOverflow: checkOverflow
});

/***/ }),

/***/ "../node_modules/swiper/esm/components/core/classes/addClasses.js":
/*!************************************************************************!*\
  !*** ../node_modules/swiper/esm/components/core/classes/addClasses.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addClasses)
/* harmony export */ });
function prepareClasses(entries, prefix) {
  var resultClasses = [];
  entries.forEach(function (item) {
    if (typeof item === 'object') {
      Object.keys(item).forEach(function (classNames) {
        if (item[classNames]) {
          resultClasses.push(prefix + classNames);
        }
      });
    } else if (typeof item === 'string') {
      resultClasses.push(prefix + item);
    }
  });
  return resultClasses;
}

function addClasses() {
  var swiper = this;
  var classNames = swiper.classNames,
      params = swiper.params,
      rtl = swiper.rtl,
      $el = swiper.$el,
      device = swiper.device,
      support = swiper.support; // prettier-ignore

  var suffixes = prepareClasses(['initialized', params.direction, {
    'pointer-events': support.pointerEvents && !support.touch
  }, {
    'free-mode': params.freeMode
  }, {
    'autoheight': params.autoHeight
  }, {
    'rtl': rtl
  }, {
    'multirow': params.slidesPerColumn > 1
  }, {
    'multirow-column': params.slidesPerColumn > 1 && params.slidesPerColumnFill === 'column'
  }, {
    'android': device.android
  }, {
    'ios': device.ios
  }, {
    'css-mode': params.cssMode
  }], params.containerModifierClass);
  classNames.push.apply(classNames, suffixes);
  $el.addClass([].concat(classNames).join(' '));
  swiper.emitContainerClasses();
}

/***/ }),

/***/ "../node_modules/swiper/esm/components/core/classes/index.js":
/*!*******************************************************************!*\
  !*** ../node_modules/swiper/esm/components/core/classes/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _addClasses__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addClasses */ "../node_modules/swiper/esm/components/core/classes/addClasses.js");
/* harmony import */ var _removeClasses__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./removeClasses */ "../node_modules/swiper/esm/components/core/classes/removeClasses.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  addClasses: _addClasses__WEBPACK_IMPORTED_MODULE_0__.default,
  removeClasses: _removeClasses__WEBPACK_IMPORTED_MODULE_1__.default
});

/***/ }),

/***/ "../node_modules/swiper/esm/components/core/classes/removeClasses.js":
/*!***************************************************************************!*\
  !*** ../node_modules/swiper/esm/components/core/classes/removeClasses.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ removeClasses)
/* harmony export */ });
function removeClasses() {
  var swiper = this;
  var $el = swiper.$el,
      classNames = swiper.classNames;
  $el.removeClass(classNames.join(' '));
  swiper.emitContainerClasses();
}

/***/ }),

/***/ "../node_modules/swiper/esm/components/core/core-class.js":
/*!****************************************************************!*\
  !*** ../node_modules/swiper/esm/components/core/core-class.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "../node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/dom */ "../node_modules/swiper/esm/utils/dom.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../utils/utils */ "../node_modules/swiper/esm/utils/utils.js");
/* harmony import */ var _utils_get_support__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../utils/get-support */ "../node_modules/swiper/esm/utils/get-support.js");
/* harmony import */ var _utils_get_device__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../utils/get-device */ "../node_modules/swiper/esm/utils/get-device.js");
/* harmony import */ var _utils_get_browser__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../utils/get-browser */ "../node_modules/swiper/esm/utils/get-browser.js");
/* harmony import */ var _modules_resize_resize__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../modules/resize/resize */ "../node_modules/swiper/esm/modules/resize/resize.js");
/* harmony import */ var _modules_observer_observer__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../modules/observer/observer */ "../node_modules/swiper/esm/modules/observer/observer.js");
/* harmony import */ var _modular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modular */ "../node_modules/swiper/esm/components/core/modular.js");
/* harmony import */ var _events_emitter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./events-emitter */ "../node_modules/swiper/esm/components/core/events-emitter.js");
/* harmony import */ var _update_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./update/index */ "../node_modules/swiper/esm/components/core/update/index.js");
/* harmony import */ var _translate_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./translate/index */ "../node_modules/swiper/esm/components/core/translate/index.js");
/* harmony import */ var _transition_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./transition/index */ "../node_modules/swiper/esm/components/core/transition/index.js");
/* harmony import */ var _slide_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./slide/index */ "../node_modules/swiper/esm/components/core/slide/index.js");
/* harmony import */ var _loop_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./loop/index */ "../node_modules/swiper/esm/components/core/loop/index.js");
/* harmony import */ var _grab_cursor_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./grab-cursor/index */ "../node_modules/swiper/esm/components/core/grab-cursor/index.js");
/* harmony import */ var _manipulation_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./manipulation/index */ "../node_modules/swiper/esm/components/core/manipulation/index.js");
/* harmony import */ var _events_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./events/index */ "../node_modules/swiper/esm/components/core/events/index.js");
/* harmony import */ var _breakpoints_index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./breakpoints/index */ "../node_modules/swiper/esm/components/core/breakpoints/index.js");
/* harmony import */ var _classes_index__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./classes/index */ "../node_modules/swiper/esm/components/core/classes/index.js");
/* harmony import */ var _images_index__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./images/index */ "../node_modules/swiper/esm/components/core/images/index.js");
/* harmony import */ var _check_overflow_index__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./check-overflow/index */ "../node_modules/swiper/esm/components/core/check-overflow/index.js");
/* harmony import */ var _defaults__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./defaults */ "../node_modules/swiper/esm/components/core/defaults.js");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* eslint no-param-reassign: "off" */























var prototypes = {
  modular: _modular__WEBPACK_IMPORTED_MODULE_2__.default,
  eventsEmitter: _events_emitter__WEBPACK_IMPORTED_MODULE_3__.default,
  update: _update_index__WEBPACK_IMPORTED_MODULE_4__.default,
  translate: _translate_index__WEBPACK_IMPORTED_MODULE_5__.default,
  transition: _transition_index__WEBPACK_IMPORTED_MODULE_6__.default,
  slide: _slide_index__WEBPACK_IMPORTED_MODULE_7__.default,
  loop: _loop_index__WEBPACK_IMPORTED_MODULE_8__.default,
  grabCursor: _grab_cursor_index__WEBPACK_IMPORTED_MODULE_9__.default,
  manipulation: _manipulation_index__WEBPACK_IMPORTED_MODULE_10__.default,
  events: _events_index__WEBPACK_IMPORTED_MODULE_11__.default,
  breakpoints: _breakpoints_index__WEBPACK_IMPORTED_MODULE_12__.default,
  checkOverflow: _check_overflow_index__WEBPACK_IMPORTED_MODULE_13__.default,
  classes: _classes_index__WEBPACK_IMPORTED_MODULE_14__.default,
  images: _images_index__WEBPACK_IMPORTED_MODULE_15__.default
};
var extendedDefaults = {};

var Swiper = /*#__PURE__*/function () {
  function Swiper() {
    var el;
    var params;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === 'Object') {
      params = args[0];
    } else {
      el = args[0];
      params = args[1];
    }

    if (!params) params = {};
    params = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_16__.extend)({}, params);
    if (el && !params.el) params.el = el;

    if (params.el && (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.default)(params.el).length > 1) {
      var swipers = [];
      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.default)(params.el).each(function (containerEl) {
        var newParams = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_16__.extend)({}, params, {
          el: containerEl
        });
        swipers.push(new Swiper(newParams));
      });
      return swipers;
    } // Swiper Instance


    var swiper = this;
    swiper.__swiper__ = true;
    swiper.support = (0,_utils_get_support__WEBPACK_IMPORTED_MODULE_17__.getSupport)();
    swiper.device = (0,_utils_get_device__WEBPACK_IMPORTED_MODULE_18__.getDevice)({
      userAgent: params.userAgent
    });
    swiper.browser = (0,_utils_get_browser__WEBPACK_IMPORTED_MODULE_19__.getBrowser)();
    swiper.eventsListeners = {};
    swiper.eventsAnyListeners = [];

    if (typeof swiper.modules === 'undefined') {
      swiper.modules = {};
    }

    Object.keys(swiper.modules).forEach(function (moduleName) {
      var module = swiper.modules[moduleName];

      if (module.params) {
        var moduleParamName = Object.keys(module.params)[0];
        var moduleParams = module.params[moduleParamName];
        if (typeof moduleParams !== 'object' || moduleParams === null) return;

        if (['navigation', 'pagination', 'scrollbar'].indexOf(moduleParamName) >= 0 && params[moduleParamName] === true) {
          params[moduleParamName] = {
            auto: true
          };
        }

        if (!(moduleParamName in params && 'enabled' in moduleParams)) return;

        if (params[moduleParamName] === true) {
          params[moduleParamName] = {
            enabled: true
          };
        }

        if (typeof params[moduleParamName] === 'object' && !('enabled' in params[moduleParamName])) {
          params[moduleParamName].enabled = true;
        }

        if (!params[moduleParamName]) params[moduleParamName] = {
          enabled: false
        };
      }
    }); // Extend defaults with modules params

    var swiperParams = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_16__.extend)({}, _defaults__WEBPACK_IMPORTED_MODULE_20__.default);
    swiper.useParams(swiperParams); // Extend defaults with passed params

    swiper.params = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_16__.extend)({}, swiperParams, extendedDefaults, params);
    swiper.originalParams = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_16__.extend)({}, swiper.params);
    swiper.passedParams = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_16__.extend)({}, params); // add event listeners

    if (swiper.params && swiper.params.on) {
      Object.keys(swiper.params.on).forEach(function (eventName) {
        swiper.on(eventName, swiper.params.on[eventName]);
      });
    }

    if (swiper.params && swiper.params.onAny) {
      swiper.onAny(swiper.params.onAny);
    } // Save Dom lib


    swiper.$ = _utils_dom__WEBPACK_IMPORTED_MODULE_1__.default; // Extend Swiper

    (0,_utils_utils__WEBPACK_IMPORTED_MODULE_16__.extend)(swiper, {
      enabled: swiper.params.enabled,
      el: el,
      // Classes
      classNames: [],
      // Slides
      slides: (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.default)(),
      slidesGrid: [],
      snapGrid: [],
      slidesSizesGrid: [],
      // isDirection
      isHorizontal: function isHorizontal() {
        return swiper.params.direction === 'horizontal';
      },
      isVertical: function isVertical() {
        return swiper.params.direction === 'vertical';
      },
      // Indexes
      activeIndex: 0,
      realIndex: 0,
      //
      isBeginning: true,
      isEnd: false,
      // Props
      translate: 0,
      previousTranslate: 0,
      progress: 0,
      velocity: 0,
      animating: false,
      // Locks
      allowSlideNext: swiper.params.allowSlideNext,
      allowSlidePrev: swiper.params.allowSlidePrev,
      // Touch Events
      touchEvents: function touchEvents() {
        var touch = ['touchstart', 'touchmove', 'touchend', 'touchcancel'];
        var desktop = ['mousedown', 'mousemove', 'mouseup'];

        if (swiper.support.pointerEvents) {
          desktop = ['pointerdown', 'pointermove', 'pointerup'];
        }

        swiper.touchEventsTouch = {
          start: touch[0],
          move: touch[1],
          end: touch[2],
          cancel: touch[3]
        };
        swiper.touchEventsDesktop = {
          start: desktop[0],
          move: desktop[1],
          end: desktop[2]
        };
        return swiper.support.touch || !swiper.params.simulateTouch ? swiper.touchEventsTouch : swiper.touchEventsDesktop;
      }(),
      touchEventsData: {
        isTouched: undefined,
        isMoved: undefined,
        allowTouchCallbacks: undefined,
        touchStartTime: undefined,
        isScrolling: undefined,
        currentTranslate: undefined,
        startTranslate: undefined,
        allowThresholdMove: undefined,
        // Form elements to match
        focusableElements: swiper.params.focusableElements,
        // Last click time
        lastClickTime: (0,_utils_utils__WEBPACK_IMPORTED_MODULE_16__.now)(),
        clickTimeout: undefined,
        // Velocities
        velocities: [],
        allowMomentumBounce: undefined,
        isTouchEvent: undefined,
        startMoving: undefined
      },
      // Clicks
      allowClick: true,
      // Touches
      allowTouchMove: swiper.params.allowTouchMove,
      touches: {
        startX: 0,
        startY: 0,
        currentX: 0,
        currentY: 0,
        diff: 0
      },
      // Images
      imagesToLoad: [],
      imagesLoaded: 0
    }); // Install Modules

    swiper.useModules();
    swiper.emit('_swiper'); // Init

    if (swiper.params.init) {
      swiper.init();
    } // Return app instance


    return swiper;
  }

  var _proto = Swiper.prototype;

  _proto.enable = function enable() {
    var swiper = this;
    if (swiper.enabled) return;
    swiper.enabled = true;

    if (swiper.params.grabCursor) {
      swiper.setGrabCursor();
    }

    swiper.emit('enable');
  };

  _proto.disable = function disable() {
    var swiper = this;
    if (!swiper.enabled) return;
    swiper.enabled = false;

    if (swiper.params.grabCursor) {
      swiper.unsetGrabCursor();
    }

    swiper.emit('disable');
  };

  _proto.setProgress = function setProgress(progress, speed) {
    var swiper = this;
    progress = Math.min(Math.max(progress, 0), 1);
    var min = swiper.minTranslate();
    var max = swiper.maxTranslate();
    var current = (max - min) * progress + min;
    swiper.translateTo(current, typeof speed === 'undefined' ? 0 : speed);
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  };

  _proto.emitContainerClasses = function emitContainerClasses() {
    var swiper = this;
    if (!swiper.params._emitClasses || !swiper.el) return;
    var classes = swiper.el.className.split(' ').filter(function (className) {
      return className.indexOf('swiper-container') === 0 || className.indexOf(swiper.params.containerModifierClass) === 0;
    });
    swiper.emit('_containerClasses', classes.join(' '));
  };

  _proto.getSlideClasses = function getSlideClasses(slideEl) {
    var swiper = this;
    return slideEl.className.split(' ').filter(function (className) {
      return className.indexOf('swiper-slide') === 0 || className.indexOf(swiper.params.slideClass) === 0;
    }).join(' ');
  };

  _proto.emitSlidesClasses = function emitSlidesClasses() {
    var swiper = this;
    if (!swiper.params._emitClasses || !swiper.el) return;
    var updates = [];
    swiper.slides.each(function (slideEl) {
      var classNames = swiper.getSlideClasses(slideEl);
      updates.push({
        slideEl: slideEl,
        classNames: classNames
      });
      swiper.emit('_slideClass', slideEl, classNames);
    });
    swiper.emit('_slideClasses', updates);
  };

  _proto.slidesPerViewDynamic = function slidesPerViewDynamic() {
    var swiper = this;
    var params = swiper.params,
        slides = swiper.slides,
        slidesGrid = swiper.slidesGrid,
        swiperSize = swiper.size,
        activeIndex = swiper.activeIndex;
    var spv = 1;

    if (params.centeredSlides) {
      var slideSize = slides[activeIndex].swiperSlideSize;
      var breakLoop;

      for (var i = activeIndex + 1; i < slides.length; i += 1) {
        if (slides[i] && !breakLoop) {
          slideSize += slides[i].swiperSlideSize;
          spv += 1;
          if (slideSize > swiperSize) breakLoop = true;
        }
      }

      for (var _i = activeIndex - 1; _i >= 0; _i -= 1) {
        if (slides[_i] && !breakLoop) {
          slideSize += slides[_i].swiperSlideSize;
          spv += 1;
          if (slideSize > swiperSize) breakLoop = true;
        }
      }
    } else {
      for (var _i2 = activeIndex + 1; _i2 < slides.length; _i2 += 1) {
        if (slidesGrid[_i2] - slidesGrid[activeIndex] < swiperSize) {
          spv += 1;
        }
      }
    }

    return spv;
  };

  _proto.update = function update() {
    var swiper = this;
    if (!swiper || swiper.destroyed) return;
    var snapGrid = swiper.snapGrid,
        params = swiper.params; // Breakpoints

    if (params.breakpoints) {
      swiper.setBreakpoint();
    }

    swiper.updateSize();
    swiper.updateSlides();
    swiper.updateProgress();
    swiper.updateSlidesClasses();

    function setTranslate() {
      var translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
      var newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
      swiper.setTranslate(newTranslate);
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }

    var translated;

    if (swiper.params.freeMode) {
      setTranslate();

      if (swiper.params.autoHeight) {
        swiper.updateAutoHeight();
      }
    } else {
      if ((swiper.params.slidesPerView === 'auto' || swiper.params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) {
        translated = swiper.slideTo(swiper.slides.length - 1, 0, false, true);
      } else {
        translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
      }

      if (!translated) {
        setTranslate();
      }
    }

    if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
      swiper.checkOverflow();
    }

    swiper.emit('update');
  };

  _proto.changeDirection = function changeDirection(newDirection, needUpdate) {
    if (needUpdate === void 0) {
      needUpdate = true;
    }

    var swiper = this;
    var currentDirection = swiper.params.direction;

    if (!newDirection) {
      // eslint-disable-next-line
      newDirection = currentDirection === 'horizontal' ? 'vertical' : 'horizontal';
    }

    if (newDirection === currentDirection || newDirection !== 'horizontal' && newDirection !== 'vertical') {
      return swiper;
    }

    swiper.$el.removeClass("" + swiper.params.containerModifierClass + currentDirection).addClass("" + swiper.params.containerModifierClass + newDirection);
    swiper.emitContainerClasses();
    swiper.params.direction = newDirection;
    swiper.slides.each(function (slideEl) {
      if (newDirection === 'vertical') {
        slideEl.style.width = '';
      } else {
        slideEl.style.height = '';
      }
    });
    swiper.emit('changeDirection');
    if (needUpdate) swiper.update();
    return swiper;
  };

  _proto.mount = function mount(el) {
    var swiper = this;
    if (swiper.mounted) return true; // Find el

    var $el = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.default)(el || swiper.params.el);
    el = $el[0];

    if (!el) {
      return false;
    }

    el.swiper = swiper;

    var getWrapperSelector = function getWrapperSelector() {
      return "." + (swiper.params.wrapperClass || '').trim().split(' ').join('.');
    };

    var getWrapper = function getWrapper() {
      if (el && el.shadowRoot && el.shadowRoot.querySelector) {
        var res = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.default)(el.shadowRoot.querySelector(getWrapperSelector())); // Children needs to return slot items

        res.children = function (options) {
          return $el.children(options);
        };

        return res;
      }

      return $el.children(getWrapperSelector());
    }; // Find Wrapper


    var $wrapperEl = getWrapper();

    if ($wrapperEl.length === 0 && swiper.params.createElements) {
      var document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
      var wrapper = document.createElement('div');
      $wrapperEl = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.default)(wrapper);
      wrapper.className = swiper.params.wrapperClass;
      $el.append(wrapper);
      $el.children("." + swiper.params.slideClass).each(function (slideEl) {
        $wrapperEl.append(slideEl);
      });
    }

    (0,_utils_utils__WEBPACK_IMPORTED_MODULE_16__.extend)(swiper, {
      $el: $el,
      el: el,
      $wrapperEl: $wrapperEl,
      wrapperEl: $wrapperEl[0],
      mounted: true,
      // RTL
      rtl: el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl',
      rtlTranslate: swiper.params.direction === 'horizontal' && (el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl'),
      wrongRTL: $wrapperEl.css('display') === '-webkit-box'
    });
    return true;
  };

  _proto.init = function init(el) {
    var swiper = this;
    if (swiper.initialized) return swiper;
    var mounted = swiper.mount(el);
    if (mounted === false) return swiper;
    swiper.emit('beforeInit'); // Set breakpoint

    if (swiper.params.breakpoints) {
      swiper.setBreakpoint();
    } // Add Classes


    swiper.addClasses(); // Create loop

    if (swiper.params.loop) {
      swiper.loopCreate();
    } // Update size


    swiper.updateSize(); // Update slides

    swiper.updateSlides();

    if (swiper.params.watchOverflow) {
      swiper.checkOverflow();
    } // Set Grab Cursor


    if (swiper.params.grabCursor && swiper.enabled) {
      swiper.setGrabCursor();
    }

    if (swiper.params.preloadImages) {
      swiper.preloadImages();
    } // Slide To Initial Slide


    if (swiper.params.loop) {
      swiper.slideTo(swiper.params.initialSlide + swiper.loopedSlides, 0, swiper.params.runCallbacksOnInit, false, true);
    } else {
      swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
    } // Attach events


    swiper.attachEvents(); // Init Flag

    swiper.initialized = true; // Emit

    swiper.emit('init');
    swiper.emit('afterInit');
    return swiper;
  };

  _proto.destroy = function destroy(deleteInstance, cleanStyles) {
    if (deleteInstance === void 0) {
      deleteInstance = true;
    }

    if (cleanStyles === void 0) {
      cleanStyles = true;
    }

    var swiper = this;
    var params = swiper.params,
        $el = swiper.$el,
        $wrapperEl = swiper.$wrapperEl,
        slides = swiper.slides;

    if (typeof swiper.params === 'undefined' || swiper.destroyed) {
      return null;
    }

    swiper.emit('beforeDestroy'); // Init Flag

    swiper.initialized = false; // Detach events

    swiper.detachEvents(); // Destroy loop

    if (params.loop) {
      swiper.loopDestroy();
    } // Cleanup styles


    if (cleanStyles) {
      swiper.removeClasses();
      $el.removeAttr('style');
      $wrapperEl.removeAttr('style');

      if (slides && slides.length) {
        slides.removeClass([params.slideVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass].join(' ')).removeAttr('style').removeAttr('data-swiper-slide-index');
      }
    }

    swiper.emit('destroy'); // Detach emitter events

    Object.keys(swiper.eventsListeners).forEach(function (eventName) {
      swiper.off(eventName);
    });

    if (deleteInstance !== false) {
      swiper.$el[0].swiper = null;
      (0,_utils_utils__WEBPACK_IMPORTED_MODULE_16__.deleteProps)(swiper);
    }

    swiper.destroyed = true;
    return null;
  };

  Swiper.extendDefaults = function extendDefaults(newDefaults) {
    (0,_utils_utils__WEBPACK_IMPORTED_MODULE_16__.extend)(extendedDefaults, newDefaults);
  };

  Swiper.installModule = function installModule(module) {
    if (!Swiper.prototype.modules) Swiper.prototype.modules = {};
    var name = module.name || Object.keys(Swiper.prototype.modules).length + "_" + (0,_utils_utils__WEBPACK_IMPORTED_MODULE_16__.now)();
    Swiper.prototype.modules[name] = module;
  };

  Swiper.use = function use(module) {
    if (Array.isArray(module)) {
      module.forEach(function (m) {
        return Swiper.installModule(m);
      });
      return Swiper;
    }

    Swiper.installModule(module);
    return Swiper;
  };

  _createClass(Swiper, null, [{
    key: "extendedDefaults",
    get: function get() {
      return extendedDefaults;
    }
  }, {
    key: "defaults",
    get: function get() {
      return _defaults__WEBPACK_IMPORTED_MODULE_20__.default;
    }
  }]);

  return Swiper;
}();

Object.keys(prototypes).forEach(function (prototypeGroup) {
  Object.keys(prototypes[prototypeGroup]).forEach(function (protoMethod) {
    Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
  });
});
Swiper.use([_modules_resize_resize__WEBPACK_IMPORTED_MODULE_21__.default, _modules_observer_observer__WEBPACK_IMPORTED_MODULE_22__.default]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Swiper);

/***/ }),

/***/ "../node_modules/swiper/esm/components/core/defaults.js":
/*!**************************************************************!*\
  !*** ../node_modules/swiper/esm/components/core/defaults.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  init: true,
  direction: 'horizontal',
  touchEventsTarget: 'container',
  initialSlide: 0,
  speed: 300,
  cssMode: false,
  updateOnWindowResize: true,
  resizeObserver: false,
  nested: false,
  createElements: false,
  enabled: true,
  focusableElements: 'input, select, option, textarea, button, video, label',
  // Overrides
  width: null,
  height: null,
  //
  preventInteractionOnTransition: false,
  // ssr
  userAgent: null,
  url: null,
  // To support iOS's swipe-to-go-back gesture (when being used in-app).
  edgeSwipeDetection: false,
  edgeSwipeThreshold: 20,
  // Free mode
  freeMode: false,
  freeModeMomentum: true,
  freeModeMomentumRatio: 1,
  freeModeMomentumBounce: true,
  freeModeMomentumBounceRatio: 1,
  freeModeMomentumVelocityRatio: 1,
  freeModeSticky: false,
  freeModeMinimumVelocity: 0.02,
  // Autoheight
  autoHeight: false,
  // Set wrapper width
  setWrapperSize: false,
  // Virtual Translate
  virtualTranslate: false,
  // Effects
  effect: 'slide',
  // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
  // Breakpoints
  breakpoints: undefined,
  breakpointsBase: 'window',
  // Slides grid
  spaceBetween: 0,
  slidesPerView: 1,
  slidesPerColumn: 1,
  slidesPerColumnFill: 'column',
  slidesPerGroup: 1,
  slidesPerGroupSkip: 0,
  centeredSlides: false,
  centeredSlidesBounds: false,
  slidesOffsetBefore: 0,
  // in px
  slidesOffsetAfter: 0,
  // in px
  normalizeSlideIndex: true,
  centerInsufficientSlides: false,
  // Disable swiper and hide navigation when container not overflow
  watchOverflow: false,
  // Round length
  roundLengths: false,
  // Touches
  touchRatio: 1,
  touchAngle: 45,
  simulateTouch: true,
  shortSwipes: true,
  longSwipes: true,
  longSwipesRatio: 0.5,
  longSwipesMs: 300,
  followFinger: true,
  allowTouchMove: true,
  threshold: 0,
  touchMoveStopPropagation: false,
  touchStartPreventDefault: true,
  touchStartForcePreventDefault: false,
  touchReleaseOnEdges: false,
  // Unique Navigation Elements
  uniqueNavElements: true,
  // Resistance
  resistance: true,
  resistanceRatio: 0.85,
  // Progress
  watchSlidesProgress: false,
  watchSlidesVisibility: false,
  // Cursor
  grabCursor: false,
  // Clicks
  preventClicks: true,
  preventClicksPropagation: true,
  slideToClickedSlide: false,
  // Images
  preloadImages: true,
  updateOnImagesReady: true,
  // loop
  loop: false,
  loopAdditionalSlides: 0,
  loopedSlides: null,
  loopFillGroupWithBlank: false,
  loopPreventsSlide: true,
  // Swiping/no swiping
  allowSlidePrev: true,
  allowSlideNext: true,
  swipeHandler: null,
  // '.swipe-handler',
  noSwiping: true,
  noSwipingClass: 'swiper-no-swiping',
  noSwipingSelector: null,
  // Passive Listeners
  passiveListeners: true,
  // NS
  containerModifierClass: 'swiper-container-',
  // NEW
  slideClass: 'swiper-slide',
  slideBlankClass: 'swiper-slide-invisible-blank',
  slideActiveClass: 'swiper-slide-active',
  slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
  slideVisibleClass: 'swiper-slide-visible',
  slideDuplicateClass: 'swiper-slide-duplicate',
  slideNextClass: 'swiper-slide-next',
  slideDuplicateNextClass: 'swiper-slide-duplicate-next',
  slidePrevClass: 'swiper-slide-prev',
  slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
  wrapperClass: 'swiper-wrapper',
  // Callbacks
  runCallbacksOnInit: true,
  // Internals
  _emitClasses: false
});

/***/ }),

/***/ "../node_modules/swiper/esm/components/core/events-emitter.js":
/*!********************************************************************!*\
  !*** ../node_modules/swiper/esm/components/core/events-emitter.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* eslint-disable no-underscore-dangle */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  on: function on(events, handler, priority) {
    var self = this;
    if (typeof handler !== 'function') return self;
    var method = priority ? 'unshift' : 'push';
    events.split(' ').forEach(function (event) {
      if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
      self.eventsListeners[event][method](handler);
    });
    return self;
  },
  once: function once(events, handler, priority) {
    var self = this;
    if (typeof handler !== 'function') return self;

    function onceHandler() {
      self.off(events, onceHandler);

      if (onceHandler.__emitterProxy) {
        delete onceHandler.__emitterProxy;
      }

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      handler.apply(self, args);
    }

    onceHandler.__emitterProxy = handler;
    return self.on(events, onceHandler, priority);
  },
  onAny: function onAny(handler, priority) {
    var self = this;
    if (typeof handler !== 'function') return self;
    var method = priority ? 'unshift' : 'push';

    if (self.eventsAnyListeners.indexOf(handler) < 0) {
      self.eventsAnyListeners[method](handler);
    }

    return self;
  },
  offAny: function offAny(handler) {
    var self = this;
    if (!self.eventsAnyListeners) return self;
    var index = self.eventsAnyListeners.indexOf(handler);

    if (index >= 0) {
      self.eventsAnyListeners.splice(index, 1);
    }

    return self;
  },
  off: function off(events, handler) {
    var self = this;
    if (!self.eventsListeners) return self;
    events.split(' ').forEach(function (event) {
      if (typeof handler === 'undefined') {
        self.eventsListeners[event] = [];
      } else if (self.eventsListeners[event]) {
        self.eventsListeners[event].forEach(function (eventHandler, index) {
          if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) {
            self.eventsListeners[event].splice(index, 1);
          }
        });
      }
    });
    return self;
  },
  emit: function emit() {
    var self = this;
    if (!self.eventsListeners) return self;
    var events;
    var data;
    var context;

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    if (typeof args[0] === 'string' || Array.isArray(args[0])) {
      events = args[0];
      data = args.slice(1, args.length);
      context = self;
    } else {
      events = args[0].events;
      data = args[0].data;
      context = args[0].context || self;
    }

    data.unshift(context);
    var eventsArray = Array.isArray(events) ? events : events.split(' ');
    eventsArray.forEach(function (event) {
      if (self.eventsAnyListeners && self.eventsAnyListeners.length) {
        self.eventsAnyListeners.forEach(function (eventHandler) {
          eventHandler.apply(context, [event].concat(data));
        });
      }

      if (self.eventsListeners && self.eventsListeners[event]) {
        self.eventsListeners[event].forEach(function (eventHandler) {
          eventHandler.apply(context, data);
        });
      }
    });
    return self;
  }
});

/***/ }),

/***/ "../node_modules/swiper/esm/components/core/events/index.js":
/*!******************************************************************!*\
  !*** ../node_modules/swiper/esm/components/core/events/index.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "../node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _onTouchStart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./onTouchStart */ "../node_modules/swiper/esm/components/core/events/onTouchStart.js");
/* harmony import */ var _onTouchMove__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./onTouchMove */ "../node_modules/swiper/esm/components/core/events/onTouchMove.js");
/* harmony import */ var _onTouchEnd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./onTouchEnd */ "../node_modules/swiper/esm/components/core/events/onTouchEnd.js");
/* harmony import */ var _onResize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./onResize */ "../node_modules/swiper/esm/components/core/events/onResize.js");
/* harmony import */ var _onClick__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./onClick */ "../node_modules/swiper/esm/components/core/events/onClick.js");
/* harmony import */ var _onScroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./onScroll */ "../node_modules/swiper/esm/components/core/events/onScroll.js");







var dummyEventAttached = false;

function dummyEventListener() {}

function attachEvents() {
  var swiper = this;
  var document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
  var params = swiper.params,
      touchEvents = swiper.touchEvents,
      el = swiper.el,
      wrapperEl = swiper.wrapperEl,
      device = swiper.device,
      support = swiper.support;
  swiper.onTouchStart = _onTouchStart__WEBPACK_IMPORTED_MODULE_1__.default.bind(swiper);
  swiper.onTouchMove = _onTouchMove__WEBPACK_IMPORTED_MODULE_2__.default.bind(swiper);
  swiper.onTouchEnd = _onTouchEnd__WEBPACK_IMPORTED_MODULE_3__.default.bind(swiper);

  if (params.cssMode) {
    swiper.onScroll = _onScroll__WEBPACK_IMPORTED_MODULE_4__.default.bind(swiper);
  }

  swiper.onClick = _onClick__WEBPACK_IMPORTED_MODULE_5__.default.bind(swiper);
  var capture = !!params.nested; // Touch Events

  if (!support.touch && support.pointerEvents) {
    el.addEventListener(touchEvents.start, swiper.onTouchStart, false);
    document.addEventListener(touchEvents.move, swiper.onTouchMove, capture);
    document.addEventListener(touchEvents.end, swiper.onTouchEnd, false);
  } else {
    if (support.touch) {
      var passiveListener = touchEvents.start === 'touchstart' && support.passiveListener && params.passiveListeners ? {
        passive: true,
        capture: false
      } : false;
      el.addEventListener(touchEvents.start, swiper.onTouchStart, passiveListener);
      el.addEventListener(touchEvents.move, swiper.onTouchMove, support.passiveListener ? {
        passive: false,
        capture: capture
      } : capture);
      el.addEventListener(touchEvents.end, swiper.onTouchEnd, passiveListener);

      if (touchEvents.cancel) {
        el.addEventListener(touchEvents.cancel, swiper.onTouchEnd, passiveListener);
      }

      if (!dummyEventAttached) {
        document.addEventListener('touchstart', dummyEventListener);
        dummyEventAttached = true;
      }
    }

    if (params.simulateTouch && !device.ios && !device.android || params.simulateTouch && !support.touch && device.ios) {
      el.addEventListener('mousedown', swiper.onTouchStart, false);
      document.addEventListener('mousemove', swiper.onTouchMove, capture);
      document.addEventListener('mouseup', swiper.onTouchEnd, false);
    }
  } // Prevent Links Clicks


  if (params.preventClicks || params.preventClicksPropagation) {
    el.addEventListener('click', swiper.onClick, true);
  }

  if (params.cssMode) {
    wrapperEl.addEventListener('scroll', swiper.onScroll);
  } // Resize handler


  if (params.updateOnWindowResize) {
    swiper.on(device.ios || device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', _onResize__WEBPACK_IMPORTED_MODULE_6__.default, true);
  } else {
    swiper.on('observerUpdate', _onResize__WEBPACK_IMPORTED_MODULE_6__.default, true);
  }
}

function detachEvents() {
  var swiper = this;
  var document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
  var params = swiper.params,
      touchEvents = swiper.touchEvents,
      el = swiper.el,
      wrapperEl = swiper.wrapperEl,
      device = swiper.device,
      support = swiper.support;
  var capture = !!params.nested; // Touch Events

  if (!support.touch && support.pointerEvents) {
    el.removeEventListener(touchEvents.start, swiper.onTouchStart, false);
    document.removeEventListener(touchEvents.move, swiper.onTouchMove, capture);
    document.removeEventListener(touchEvents.end, swiper.onTouchEnd, false);
  } else {
    if (support.touch) {
      var passiveListener = touchEvents.start === 'onTouchStart' && support.passiveListener && params.passiveListeners ? {
        passive: true,
        capture: false
      } : false;
      el.removeEventListener(touchEvents.start, swiper.onTouchStart, passiveListener);
      el.removeEventListener(touchEvents.move, swiper.onTouchMove, capture);
      el.removeEventListener(touchEvents.end, swiper.onTouchEnd, passiveListener);

      if (touchEvents.cancel) {
        el.removeEventListener(touchEvents.cancel, swiper.onTouchEnd, passiveListener);
      }
    }

    if (params.simulateTouch && !device.ios && !device.android || params.simulateTouch && !support.touch && device.ios) {
      el.removeEventListener('mousedown', swiper.onTouchStart, false);
      document.removeEventListener('mousemove', swiper.onTouchMove, capture);
      document.removeEventListener('mouseup', swiper.onTouchEnd, false);
    }
  } // Prevent Links Clicks


  if (params.preventClicks || params.preventClicksPropagation) {
    el.removeEventListener('click', swiper.onClick, true);
  }

  if (params.cssMode) {
    wrapperEl.removeEventListener('scroll', swiper.onScroll);
  } // Resize handler


  swiper.off(device.ios || device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', _onResize__WEBPACK_IMPORTED_MODULE_6__.default);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  attachEvents: attachEvents,
  detachEvents: detachEvents
});

/***/ }),

/***/ "../node_modules/swiper/esm/components/core/events/onClick.js":
/*!********************************************************************!*\
  !*** ../node_modules/swiper/esm/components/core/events/onClick.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ onClick)
/* harmony export */ });
function onClick(e) {
  var swiper = this;
  if (!swiper.enabled) return;

  if (!swiper.allowClick) {
    if (swiper.params.preventClicks) e.preventDefault();

    if (swiper.params.preventClicksPropagation && swiper.animating) {
      e.stopPropagation();
      e.stopImmediatePropagation();
    }
  }
}

/***/ }),

/***/ "../node_modules/swiper/esm/components/core/events/onResize.js":
/*!*********************************************************************!*\
  !*** ../node_modules/swiper/esm/components/core/events/onResize.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ onResize)
/* harmony export */ });
function onResize() {
  var swiper = this;
  var params = swiper.params,
      el = swiper.el;
  if (el && el.offsetWidth === 0) return; // Breakpoints

  if (params.breakpoints) {
    swiper.setBreakpoint();
  } // Save locks


  var allowSlideNext = swiper.allowSlideNext,
      allowSlidePrev = swiper.allowSlidePrev,
      snapGrid = swiper.snapGrid; // Disable locks on resize

  swiper.allowSlideNext = true;
  swiper.allowSlidePrev = true;
  swiper.updateSize();
  swiper.updateSlides();
  swiper.updateSlidesClasses();

  if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides) {
    swiper.slideTo(swiper.slides.length - 1, 0, false, true);
  } else {
    swiper.slideTo(swiper.activeIndex, 0, false, true);
  }

  if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
    swiper.autoplay.run();
  } // Return locks after resize


  swiper.allowSlidePrev = allowSlidePrev;
  swiper.allowSlideNext = allowSlideNext;

  if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
    swiper.checkOverflow();
  }
}

/***/ }),

/***/ "../node_modules/swiper/esm/components/core/events/onScroll.js":
/*!*********************************************************************!*\
  !*** ../node_modules/swiper/esm/components/core/events/onScroll.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ onScroll)
/* harmony export */ });
function onScroll() {
  var swiper = this;
  var wrapperEl = swiper.wrapperEl,
      rtlTranslate = swiper.rtlTranslate,
      enabled = swiper.enabled;
  if (!enabled) return;
  swiper.previousTranslate = swiper.translate;

  if (swiper.isHorizontal()) {
    if (rtlTranslate) {
      swiper.translate = wrapperEl.scrollWidth - wrapperEl.offsetWidth - wrapperEl.scrollLeft;
    } else {
      swiper.translate = -wrapperEl.scrollLeft;
    }
  } else {
    swiper.translate = -wrapperEl.scrollTop;
  } // eslint-disable-next-line


  if (swiper.translate === -0) swiper.translate = 0;
  swiper.updateActiveIndex();
  swiper.updateSlidesClasses();
  var newProgress;
  var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();

  if (translatesDiff === 0) {
    newProgress = 0;
  } else {
    newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
  }

  if (newProgress !== swiper.progress) {
    swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
  }

  swiper.emit('setTranslate', swiper.translate, false);
}

/***/ }),

/***/ "../node_modules/swiper/esm/components/core/events/onTouchEnd.js":
/*!***********************************************************************!*\
  !*** ../node_modules/swiper/esm/components/core/events/onTouchEnd.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ onTouchEnd)
/* harmony export */ });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/utils */ "../node_modules/swiper/esm/utils/utils.js");

function onTouchEnd(event) {
  var swiper = this;
  var data = swiper.touchEventsData;
  var params = swiper.params,
      touches = swiper.touches,
      rtl = swiper.rtlTranslate,
      $wrapperEl = swiper.$wrapperEl,
      slidesGrid = swiper.slidesGrid,
      snapGrid = swiper.snapGrid,
      enabled = swiper.enabled;
  if (!enabled) return;
  var e = event;
  if (e.originalEvent) e = e.originalEvent;

  if (data.allowTouchCallbacks) {
    swiper.emit('touchEnd', e);
  }

  data.allowTouchCallbacks = false;

  if (!data.isTouched) {
    if (data.isMoved && params.grabCursor) {
      swiper.setGrabCursor(false);
    }

    data.isMoved = false;
    data.startMoving = false;
    return;
  } // Return Grab Cursor


  if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
    swiper.setGrabCursor(false);
  } // Time diff


  var touchEndTime = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.now)();
  var timeDiff = touchEndTime - data.touchStartTime; // Tap, doubleTap, Click

  if (swiper.allowClick) {
    swiper.updateClickedSlide(e);
    swiper.emit('tap click', e);

    if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) {
      swiper.emit('doubleTap doubleClick', e);
    }
  }

  data.lastClickTime = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.now)();
  (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.nextTick)(function () {
    if (!swiper.destroyed) swiper.allowClick = true;
  });

  if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 || data.currentTranslate === data.startTranslate) {
    data.isTouched = false;
    data.isMoved = false;
    data.startMoving = false;
    return;
  }

  data.isTouched = false;
  data.isMoved = false;
  data.startMoving = false;
  var currentPos;

  if (params.followFinger) {
    currentPos = rtl ? swiper.translate : -swiper.translate;
  } else {
    currentPos = -data.currentTranslate;
  }

  if (params.cssMode) {
    return;
  }

  if (params.freeMode) {
    if (currentPos < -swiper.minTranslate()) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }

    if (currentPos > -swiper.maxTranslate()) {
      if (swiper.slides.length < snapGrid.length) {
        swiper.slideTo(snapGrid.length - 1);
      } else {
        swiper.slideTo(swiper.slides.length - 1);
      }

      return;
    }

    if (params.freeModeMomentum) {
      if (data.velocities.length > 1) {
        var lastMoveEvent = data.velocities.pop();
        var velocityEvent = data.velocities.pop();
        var distance = lastMoveEvent.position - velocityEvent.position;
        var time = lastMoveEvent.time - velocityEvent.time;
        swiper.velocity = distance / time;
        swiper.velocity /= 2;

        if (Math.abs(swiper.velocity) < params.freeModeMinimumVelocity) {
          swiper.velocity = 0;
        } // this implies that the user stopped moving a finger then released.
        // There would be no events with distance zero, so the last event is stale.


        if (time > 150 || (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.now)() - lastMoveEvent.time > 300) {
          swiper.velocity = 0;
        }
      } else {
        swiper.velocity = 0;
      }

      swiper.velocity *= params.freeModeMomentumVelocityRatio;
      data.velocities.length = 0;
      var momentumDuration = 1000 * params.freeModeMomentumRatio;
      var momentumDistance = swiper.velocity * momentumDuration;
      var newPosition = swiper.translate + momentumDistance;
      if (rtl) newPosition = -newPosition;
      var doBounce = false;
      var afterBouncePosition;
      var bounceAmount = Math.abs(swiper.velocity) * 20 * params.freeModeMomentumBounceRatio;
      var needsLoopFix;

      if (newPosition < swiper.maxTranslate()) {
        if (params.freeModeMomentumBounce) {
          if (newPosition + swiper.maxTranslate() < -bounceAmount) {
            newPosition = swiper.maxTranslate() - bounceAmount;
          }

          afterBouncePosition = swiper.maxTranslate();
          doBounce = true;
          data.allowMomentumBounce = true;
        } else {
          newPosition = swiper.maxTranslate();
        }

        if (params.loop && params.centeredSlides) needsLoopFix = true;
      } else if (newPosition > swiper.minTranslate()) {
        if (params.freeModeMomentumBounce) {
          if (newPosition - swiper.minTranslate() > bounceAmount) {
            newPosition = swiper.minTranslate() + bounceAmount;
          }

          afterBouncePosition = swiper.minTranslate();
          doBounce = true;
          data.allowMomentumBounce = true;
        } else {
          newPosition = swiper.minTranslate();
        }

        if (params.loop && params.centeredSlides) needsLoopFix = true;
      } else if (params.freeModeSticky) {
        var nextSlide;

        for (var j = 0; j < snapGrid.length; j += 1) {
          if (snapGrid[j] > -newPosition) {
            nextSlide = j;
            break;
          }
        }

        if (Math.abs(snapGrid[nextSlide] - newPosition) < Math.abs(snapGrid[nextSlide - 1] - newPosition) || swiper.swipeDirection === 'next') {
          newPosition = snapGrid[nextSlide];
        } else {
          newPosition = snapGrid[nextSlide - 1];
        }

        newPosition = -newPosition;
      }

      if (needsLoopFix) {
        swiper.once('transitionEnd', function () {
          swiper.loopFix();
        });
      } // Fix duration


      if (swiper.velocity !== 0) {
        if (rtl) {
          momentumDuration = Math.abs((-newPosition - swiper.translate) / swiper.velocity);
        } else {
          momentumDuration = Math.abs((newPosition - swiper.translate) / swiper.velocity);
        }

        if (params.freeModeSticky) {
          // If freeModeSticky is active and the user ends a swipe with a slow-velocity
          // event, then durations can be 20+ seconds to slide one (or zero!) slides.
          // It's easy to see this when simulating touch with mouse events. To fix this,
          // limit single-slide swipes to the default slide duration. This also has the
          // nice side effect of matching slide speed if the user stopped moving before
          // lifting finger or mouse vs. moving slowly before lifting the finger/mouse.
          // For faster swipes, also apply limits (albeit higher ones).
          var moveDistance = Math.abs((rtl ? -newPosition : newPosition) - swiper.translate);
          var currentSlideSize = swiper.slidesSizesGrid[swiper.activeIndex];

          if (moveDistance < currentSlideSize) {
            momentumDuration = params.speed;
          } else if (moveDistance < 2 * currentSlideSize) {
            momentumDuration = params.speed * 1.5;
          } else {
            momentumDuration = params.speed * 2.5;
          }
        }
      } else if (params.freeModeSticky) {
        swiper.slideToClosest();
        return;
      }

      if (params.freeModeMomentumBounce && doBounce) {
        swiper.updateProgress(afterBouncePosition);
        swiper.setTransition(momentumDuration);
        swiper.setTranslate(newPosition);
        swiper.transitionStart(true, swiper.swipeDirection);
        swiper.animating = true;
        $wrapperEl.transitionEnd(function () {
          if (!swiper || swiper.destroyed || !data.allowMomentumBounce) return;
          swiper.emit('momentumBounce');
          swiper.setTransition(params.speed);
          setTimeout(function () {
            swiper.setTranslate(afterBouncePosition);
            $wrapperEl.transitionEnd(function () {
              if (!swiper || swiper.destroyed) return;
              swiper.transitionEnd();
            });
          }, 0);
        });
      } else if (swiper.velocity) {
        swiper.updateProgress(newPosition);
        swiper.setTransition(momentumDuration);
        swiper.setTranslate(newPosition);
        swiper.transitionStart(true, swiper.swipeDirection);

        if (!swiper.animating) {
          swiper.animating = true;
          $wrapperEl.transitionEnd(function () {
            if (!swiper || swiper.destroyed) return;
            swiper.transitionEnd();
          });
        }
      } else {
        swiper.emit('_freeModeNoMomentumRelease');
        swiper.updateProgress(newPosition);
      }

      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    } else if (params.freeModeSticky) {
      swiper.slideToClosest();
      return;
    } else if (params.freeMode) {
      swiper.emit('_freeModeNoMomentumRelease');
    }

    if (!params.freeModeMomentum || timeDiff >= params.longSwipesMs) {
      swiper.updateProgress();
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }

    return;
  } // Find current slide


  var stopIndex = 0;
  var groupSize = swiper.slidesSizesGrid[0];

  for (var i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
    var _increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;

    if (typeof slidesGrid[i + _increment] !== 'undefined') {
      if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + _increment]) {
        stopIndex = i;
        groupSize = slidesGrid[i + _increment] - slidesGrid[i];
      }
    } else if (currentPos >= slidesGrid[i]) {
      stopIndex = i;
      groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
    }
  } // Find current slide size


  var ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
  var increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;

  if (timeDiff > params.longSwipesMs) {
    // Long touches
    if (!params.longSwipes) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }

    if (swiper.swipeDirection === 'next') {
      if (ratio >= params.longSwipesRatio) swiper.slideTo(stopIndex + increment);else swiper.slideTo(stopIndex);
    }

    if (swiper.swipeDirection === 'prev') {
      if (ratio > 1 - params.longSwipesRatio) swiper.slideTo(stopIndex + increment);else swiper.slideTo(stopIndex);
    }
  } else {
    // Short swipes
    if (!params.shortSwipes) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }

    var isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);

    if (!isNavButtonTarget) {
      if (swiper.swipeDirection === 'next') {
        swiper.slideTo(stopIndex + increment);
      }

      if (swiper.swipeDirection === 'prev') {
        swiper.slideTo(stopIndex);
      }
    } else if (e.target === swiper.navigation.nextEl) {
      swiper.slideTo(stopIndex + increment);
    } else {
      swiper.slideTo(stopIndex);
    }
  }
}

/***/ }),

/***/ "../node_modules/swiper/esm/components/core/events/onTouchMove.js":
/*!************************************************************************!*\
  !*** ../node_modules/swiper/esm/components/core/events/onTouchMove.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ onTouchMove)
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "../node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/dom */ "../node_modules/swiper/esm/utils/dom.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/utils */ "../node_modules/swiper/esm/utils/utils.js");



function onTouchMove(event) {
  var document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
  var swiper = this;
  var data = swiper.touchEventsData;
  var params = swiper.params,
      touches = swiper.touches,
      rtl = swiper.rtlTranslate,
      enabled = swiper.enabled;
  if (!enabled) return;
  var e = event;
  if (e.originalEvent) e = e.originalEvent;

  if (!data.isTouched) {
    if (data.startMoving && data.isScrolling) {
      swiper.emit('touchMoveOpposite', e);
    }

    return;
  }

  if (data.isTouchEvent && e.type !== 'touchmove') return;
  var targetTouch = e.type === 'touchmove' && e.targetTouches && (e.targetTouches[0] || e.changedTouches[0]);
  var pageX = e.type === 'touchmove' ? targetTouch.pageX : e.pageX;
  var pageY = e.type === 'touchmove' ? targetTouch.pageY : e.pageY;

  if (e.preventedByNestedSwiper) {
    touches.startX = pageX;
    touches.startY = pageY;
    return;
  }

  if (!swiper.allowTouchMove) {
    // isMoved = true;
    swiper.allowClick = false;

    if (data.isTouched) {
      (0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.extend)(touches, {
        startX: pageX,
        startY: pageY,
        currentX: pageX,
        currentY: pageY
      });
      data.touchStartTime = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.now)();
    }

    return;
  }

  if (data.isTouchEvent && params.touchReleaseOnEdges && !params.loop) {
    if (swiper.isVertical()) {
      // Vertical
      if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
        data.isTouched = false;
        data.isMoved = false;
        return;
      }
    } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) {
      return;
    }
  }

  if (data.isTouchEvent && document.activeElement) {
    if (e.target === document.activeElement && (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.default)(e.target).is(data.focusableElements)) {
      data.isMoved = true;
      swiper.allowClick = false;
      return;
    }
  }

  if (data.allowTouchCallbacks) {
    swiper.emit('touchMove', e);
  }

  if (e.targetTouches && e.targetTouches.length > 1) return;
  touches.currentX = pageX;
  touches.currentY = pageY;
  var diffX = touches.currentX - touches.startX;
  var diffY = touches.currentY - touches.startY;
  if (swiper.params.threshold && Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2)) < swiper.params.threshold) return;

  if (typeof data.isScrolling === 'undefined') {
    var touchAngle;

    if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) {
      data.isScrolling = false;
    } else {
      // eslint-disable-next-line
      if (diffX * diffX + diffY * diffY >= 25) {
        touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
        data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
      }
    }
  }

  if (data.isScrolling) {
    swiper.emit('touchMoveOpposite', e);
  }

  if (typeof data.startMoving === 'undefined') {
    if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
      data.startMoving = true;
    }
  }

  if (data.isScrolling) {
    data.isTouched = false;
    return;
  }

  if (!data.startMoving) {
    return;
  }

  swiper.allowClick = false;

  if (!params.cssMode && e.cancelable) {
    e.preventDefault();
  }

  if (params.touchMoveStopPropagation && !params.nested) {
    e.stopPropagation();
  }

  if (!data.isMoved) {
    if (params.loop) {
      swiper.loopFix();
    }

    data.startTranslate = swiper.getTranslate();
    swiper.setTransition(0);

    if (swiper.animating) {
      swiper.$wrapperEl.trigger('webkitTransitionEnd transitionend');
    }

    data.allowMomentumBounce = false; // Grab Cursor

    if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
      swiper.setGrabCursor(true);
    }

    swiper.emit('sliderFirstMove', e);
  }

  swiper.emit('sliderMove', e);
  data.isMoved = true;
  var diff = swiper.isHorizontal() ? diffX : diffY;
  touches.diff = diff;
  diff *= params.touchRatio;
  if (rtl) diff = -diff;
  swiper.swipeDirection = diff > 0 ? 'prev' : 'next';
  data.currentTranslate = diff + data.startTranslate;
  var disableParentSwiper = true;
  var resistanceRatio = params.resistanceRatio;

  if (params.touchReleaseOnEdges) {
    resistanceRatio = 0;
  }

  if (diff > 0 && data.currentTranslate > swiper.minTranslate()) {
    disableParentSwiper = false;
    if (params.resistance) data.currentTranslate = swiper.minTranslate() - 1 + Math.pow(-swiper.minTranslate() + data.startTranslate + diff, resistanceRatio);
  } else if (diff < 0 && data.currentTranslate < swiper.maxTranslate()) {
    disableParentSwiper = false;
    if (params.resistance) data.currentTranslate = swiper.maxTranslate() + 1 - Math.pow(swiper.maxTranslate() - data.startTranslate - diff, resistanceRatio);
  }

  if (disableParentSwiper) {
    e.preventedByNestedSwiper = true;
  } // Directions locks


  if (!swiper.allowSlideNext && swiper.swipeDirection === 'next' && data.currentTranslate < data.startTranslate) {
    data.currentTranslate = data.startTranslate;
  }

  if (!swiper.allowSlidePrev && swiper.swipeDirection === 'prev' && data.currentTranslate > data.startTranslate) {
    data.currentTranslate = data.startTranslate;
  }

  if (!swiper.allowSlidePrev && !swiper.allowSlideNext) {
    data.currentTranslate = data.startTranslate;
  } // Threshold


  if (params.threshold > 0) {
    if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
      if (!data.allowThresholdMove) {
        data.allowThresholdMove = true;
        touches.startX = touches.currentX;
        touches.startY = touches.currentY;
        data.currentTranslate = data.startTranslate;
        touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
        return;
      }
    } else {
      data.currentTranslate = data.startTranslate;
      return;
    }
  }

  if (!params.followFinger || params.cssMode) return; // Update active index in free mode

  if (params.freeMode || params.watchSlidesProgress || params.watchSlidesVisibility) {
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  }

  if (params.freeMode) {
    // Velocity
    if (data.velocities.length === 0) {
      data.velocities.push({
        position: touches[swiper.isHorizontal() ? 'startX' : 'startY'],
        time: data.touchStartTime
      });
    }

    data.velocities.push({
      position: touches[swiper.isHorizontal() ? 'currentX' : 'currentY'],
      time: (0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.now)()
    });
  } // Update progress


  swiper.updateProgress(data.currentTranslate); // Update translate

  swiper.setTranslate(data.currentTranslate);
}

/***/ }),

/***/ "../node_modules/swiper/esm/components/core/events/onTouchStart.js":
/*!*************************************************************************!*\
  !*** ../node_modules/swiper/esm/components/core/events/onTouchStart.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ onTouchStart)
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "../node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/dom */ "../node_modules/swiper/esm/utils/dom.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/utils */ "../node_modules/swiper/esm/utils/utils.js");


 // Modified from https://stackoverflow.com/questions/54520554/custom-element-getrootnode-closest-function-crossing-multiple-parent-shadowd

function closestElement(selector, base) {
  if (base === void 0) {
    base = this;
  }

  function __closestFrom(el) {
    if (!el || el === (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)() || el === (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)()) return null;
    if (el.assignedSlot) el = el.assignedSlot;
    var found = el.closest(selector);
    return found || __closestFrom(el.getRootNode().host);
  }

  return __closestFrom(base);
}

function onTouchStart(event) {
  var swiper = this;
  var document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
  var window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  var data = swiper.touchEventsData;
  var params = swiper.params,
      touches = swiper.touches,
      enabled = swiper.enabled;
  if (!enabled) return;

  if (swiper.animating && params.preventInteractionOnTransition) {
    return;
  }

  var e = event;
  if (e.originalEvent) e = e.originalEvent;
  var $targetEl = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.default)(e.target);

  if (params.touchEventsTarget === 'wrapper') {
    if (!$targetEl.closest(swiper.wrapperEl).length) return;
  }

  data.isTouchEvent = e.type === 'touchstart';
  if (!data.isTouchEvent && 'which' in e && e.which === 3) return;
  if (!data.isTouchEvent && 'button' in e && e.button > 0) return;
  if (data.isTouched && data.isMoved) return; // change target el for shadow root component

  var swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== '';

  if (swipingClassHasValue && e.target && e.target.shadowRoot && event.path && event.path[0]) {
    $targetEl = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.default)(event.path[0]);
  }

  var noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : "." + params.noSwipingClass;
  var isTargetShadow = !!(e.target && e.target.shadowRoot); // use closestElement for shadow root element to get the actual closest for nested shadow root element

  if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, e.target) : $targetEl.closest(noSwipingSelector)[0])) {
    swiper.allowClick = true;
    return;
  }

  if (params.swipeHandler) {
    if (!$targetEl.closest(params.swipeHandler)[0]) return;
  }

  touches.currentX = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
  touches.currentY = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
  var startX = touches.currentX;
  var startY = touches.currentY; // Do NOT start if iOS edge swipe is detected. Otherwise iOS app cannot swipe-to-go-back anymore

  var edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
  var edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;

  if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window.innerWidth - edgeSwipeThreshold)) {
    if (edgeSwipeDetection === 'prevent') {
      event.preventDefault();
    } else {
      return;
    }
  }

  (0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.extend)(data, {
    isTouched: true,
    isMoved: false,
    allowTouchCallbacks: true,
    isScrolling: undefined,
    startMoving: undefined
  });
  touches.startX = startX;
  touches.startY = startY;
  data.touchStartTime = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.now)();
  swiper.allowClick = true;
  swiper.updateSize();
  swiper.swipeDirection = undefined;
  if (params.threshold > 0) data.allowThresholdMove = false;

  if (e.type !== 'touchstart') {
    var preventDefault = true;
    if ($targetEl.is(data.focusableElements)) preventDefault = false;

    if (document.activeElement && (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.default)(document.activeElement).is(data.focusableElements) && document.activeElement !== $targetEl[0]) {
      document.activeElement.blur();
    }

    var shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;

    if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !$targetEl[0].isContentEditable) {
      e.preventDefault();
    }
  }

  swiper.emit('touchStart', e);
}

/***/ }),

/***/ "../node_modules/swiper/esm/components/core/grab-cursor/index.js":
/*!***********************************************************************!*\
  !*** ../node_modules/swiper/esm/components/core/grab-cursor/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _setGrabCursor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setGrabCursor */ "../node_modules/swiper/esm/components/core/grab-cursor/setGrabCursor.js");
/* harmony import */ var _unsetGrabCursor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./unsetGrabCursor */ "../node_modules/swiper/esm/components/core/grab-cursor/unsetGrabCursor.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  setGrabCursor: _setGrabCursor__WEBPACK_IMPORTED_MODULE_0__.default,
  unsetGrabCursor: _unsetGrabCursor__WEBPACK_IMPORTED_MODULE_1__.default
});

/***/ }),

/***/ "../node_modules/swiper/esm/components/core/grab-cursor/setGrabCursor.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/swiper/esm/components/core/grab-cursor/setGrabCursor.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ setGrabCursor)
/* harmony export */ });
function setGrabCursor(moving) {
  var swiper = this;
  if (swiper.support.touch || !swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
  var el = swiper.el;
  el.style.cursor = 'move';
  el.style.cursor = moving ? '-webkit-grabbing' : '-webkit-grab';
  el.style.cursor = moving ? '-moz-grabbin' : '-moz-grab';
  el.style.cursor = moving ? 'grabbing' : 'grab';
}

/***/ }),

/***/ "../node_modules/swiper/esm/components/core/grab-cursor/unsetGrabCursor.js":
/*!*********************************************************************************!*\
  !*** ../node_modules/swiper/esm/components/core/grab-cursor/unsetGrabCursor.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ unsetGrabCursor)
/* harmony export */ });
function unsetGrabCursor() {
  var swiper = this;

  if (swiper.support.touch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) {
    return;
  }

  swiper.el.style.cursor = '';
}

/***/ }),

/***/ "../node_modules/swiper/esm/components/core/images/index.js":
/*!******************************************************************!*\
  !*** ../node_modules/swiper/esm/components/core/images/index.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _loadImage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadImage */ "../node_modules/swiper/esm/components/core/images/loadImage.js");
/* harmony import */ var _preloadImages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./preloadImages */ "../node_modules/swiper/esm/components/core/images/preloadImages.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  loadImage: _loadImage__WEBPACK_IMPORTED_MODULE_0__.default,
  preloadImages: _preloadImages__WEBPACK_IMPORTED_MODULE_1__.default
});

/***/ }),

/***/ "../node_modules/swiper/esm/components/core/images/loadImage.js":
/*!**********************************************************************!*\
  !*** ../node_modules/swiper/esm/components/core/images/loadImage.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadImage)
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "../node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/dom */ "../node_modules/swiper/esm/utils/dom.js");


function loadImage(imageEl, src, srcset, sizes, checkForComplete, callback) {
  var window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  var image;

  function onReady() {
    if (callback) callback();
  }

  var isPicture = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.default)(imageEl).parent('picture')[0];

  if (!isPicture && (!imageEl.complete || !checkForComplete)) {
    if (src) {
      image = new window.Image();
      image.onload = onReady;
      image.onerror = onReady;

      if (sizes) {
        image.sizes = sizes;
      }

      if (srcset) {
        image.srcset = srcset;
      }

      if (src) {
        image.src = src;
      }
    } else {
      onReady();
    }
  } else {
    // image already loaded...
    onReady();
  }
}

/***/ }),

/***/ "../node_modules/swiper/esm/components/core/images/preloadImages.js":
/*!**************************************************************************!*\
  !*** ../node_modules/swiper/esm/components/core/images/preloadImages.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ preloadImages)
/* harmony export */ });
function preloadImages() {
  var swiper = this;
  swiper.imagesToLoad = swiper.$el.find('img');

  function onReady() {
    if (typeof swiper === 'undefined' || swiper === null || !swiper || swiper.destroyed) return;
    if (swiper.imagesLoaded !== undefined) swiper.imagesLoaded += 1;

    if (swiper.imagesLoaded === swiper.imagesToLoad.length) {
      if (swiper.params.updateOnImagesReady) swiper.update();
      swiper.emit('imagesReady');
    }
  }

  for (var i = 0; i < swiper.imagesToLoad.length; i += 1) {
    var imageEl = swiper.imagesToLoad[i];
    swiper.loadImage(imageEl, imageEl.currentSrc || imageEl.getAttribute('src'), imageEl.srcset || imageEl.getAttribute('srcset'), imageEl.sizes || imageEl.getAttribute('sizes'), true, onReady);
  }
}

/***/ }),

/***/ "../node_modules/swiper/esm/components/core/loop/index.js":
/*!****************************************************************!*\
  !*** ../node_modules/swiper/esm/components/core/loop/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _loopCreate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loopCreate */ "../node_modules/swiper/esm/components/core/loop/loopCreate.js");
/* harmony import */ var _loopFix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loopFix */ "../node_modules/swiper/esm/components/core/loop/loopFix.js");
/* harmony import */ var _loopDestroy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loopDestroy */ "../node_modules/swiper/esm/components/core/loop/loopDestroy.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  loopCreate: _loopCreate__WEBPACK_IMPORTED_MODULE_0__.default,
  loopFix: _loopFix__WEBPACK_IMPORTED_MODULE_1__.default,
  loopDestroy: _loopDestroy__WEBPACK_IMPORTED_MODULE_2__.default
});

/***/ }),

/***/ "../node_modules/swiper/esm/components/core/loop/loopCreate.js":
/*!*********************************************************************!*\
  !*** ../node_modules/swiper/esm/components/core/loop/loopCreate.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loopCreate)
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "../node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/dom */ "../node_modules/swiper/esm/utils/dom.js");


function loopCreate() {
  var swiper = this;
  var document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
  var params = swiper.params,
      $wrapperEl = swiper.$wrapperEl; // Remove duplicated slides

  $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass).remove();
  var slides = $wrapperEl.children("." + params.slideClass);

  if (params.loopFillGroupWithBlank) {
    var blankSlidesNum = params.slidesPerGroup - slides.length % params.slidesPerGroup;

    if (blankSlidesNum !== params.slidesPerGroup) {
      for (var i = 0; i < blankSlidesNum; i += 1) {
        var blankNode = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.default)(document.createElement('div')).addClass(params.slideClass + " " + params.slideBlankClass);
        $wrapperEl.append(blankNode);
      }

      slides = $wrapperEl.children("." + params.slideClass);
    }
  }

  if (params.slidesPerView === 'auto' && !params.loopedSlides) params.loopedSlides = slides.length;
  swiper.loopedSlides = Math.ceil(parseFloat(params.loopedSlides || params.slidesPerView, 10));
  swiper.loopedSlides += params.loopAdditionalSlides;

  if (swiper.loopedSlides > slides.length) {
    swiper.loopedSlides = slides.length;
  }

  var prependSlides = [];
  var appendSlides = [];
  slides.each(function (el, index) {
    var slide = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.default)(el);

    if (index < swiper.loopedSlides) {
      appendSlides.push(el);
    }

    if (index < slides.length && index >= slides.length - swiper.loopedSlides) {
      prependSlides.push(el);
    }

    slide.attr('data-swiper-slide-index', index);
  });

  for (var _i = 0; _i < appendSlides.length; _i += 1) {
    $wrapperEl.append((0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.default)(appendSlides[_i].cloneNode(true)).addClass(params.slideDuplicateClass));
  }

  for (var _i2 = prependSlides.length - 1; _i2 >= 0; _i2 -= 1) {
    $wrapperEl.prepend((0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.default)(prependSlides[_i2].cloneNode(true)).addClass(params.slideDuplicateClass));
  }
}

/***/ }),

/***/ "../node_modules/swiper/esm/components/core/loop/loopDestroy.js":
/*!**********************************************************************!*\
  !*** ../node_modules/swiper/esm/components/core/loop/loopDestroy.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loopDestroy)
/* harmony export */ });
function loopDestroy() {
  var swiper = this;
  var $wrapperEl = swiper.$wrapperEl,
      params = swiper.params,
      slides = swiper.slides;
  $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass + ",." + params.slideClass + "." + params.slideBlankClass).remove();
  slides.removeAttr('data-swiper-slide-index');
}

/***/ }),

/***/ "../node_modules/swiper/esm/components/core/loop/loopFix.js":
/*!******************************************************************!*\
  !*** ../node_modules/swiper/esm/components/core/loop/loopFix.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loopFix)
/* harmony export */ });
function loopFix() {
  var swiper = this;
  swiper.emit('beforeLoopFix');
  var activeIndex = swiper.activeIndex,
      slides = swiper.slides,
      loopedSlides = swiper.loopedSlides,
      allowSlidePrev = swiper.allowSlidePrev,
      allowSlideNext = swiper.allowSlideNext,
      snapGrid = swiper.snapGrid,
      rtl = swiper.rtlTranslate;
  var newIndex;
  swiper.allowSlidePrev = true;
  swiper.allowSlideNext = true;
  var snapTranslate = -snapGrid[activeIndex];
  var diff = snapTranslate - swiper.getTranslate(); // Fix For Negative Oversliding

  if (activeIndex < loopedSlides) {
    newIndex = slides.length - loopedSlides * 3 + activeIndex;
    newIndex += loopedSlides;
    var slideChanged = swiper.slideTo(newIndex, 0, false, true);

    if (slideChanged && diff !== 0) {
      swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
    }
  } else if (activeIndex >= slides.length - loopedSlides) {
    // Fix For Positive Oversliding
    newIndex = -slides.length + activeIndex + loopedSlides;
    newIndex += loopedSlides;

    var _slideChanged = swiper.slideTo(newIndex, 0, false, true);

    if (_slideChanged && diff !== 0) {
      swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
    }
  }

  swiper.allowSlidePrev = allowSlidePrev;
  swiper.allowSlideNext = allowSlideNext;
  swiper.emit('loopFix');
}

/***/ }),

/***/ "../node_modules/swiper/esm/components/core/manipulation/addSlide.js":
/*!***************************************************************************!*\
  !*** ../node_modules/swiper/esm/components/core/manipulation/addSlide.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addSlide)
/* harmony export */ });
function addSlide(index, slides) {
  var swiper = this;
  var $wrapperEl = swiper.$wrapperEl,
      params = swiper.params,
      activeIndex = swiper.activeIndex;
  var activeIndexBuffer = activeIndex;

  if (params.loop) {
    activeIndexBuffer -= swiper.loopedSlides;
    swiper.loopDestroy();
    swiper.slides = $wrapperEl.children("." + params.slideClass);
  }

  var baseLength = swiper.slides.length;

  if (index <= 0) {
    swiper.prependSlide(slides);
    return;
  }

  if (index >= baseLength) {
    swiper.appendSlide(slides);
    return;
  }

  var newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + 1 : activeIndexBuffer;
  var slidesBuffer = [];

  for (var i = baseLength - 1; i >= index; i -= 1) {
    var currentSlide = swiper.slides.eq(i);
    currentSlide.remove();
    slidesBuffer.unshift(currentSlide);
  }

  if (typeof slides === 'object' && 'length' in slides) {
    for (var _i = 0; _i < slides.length; _i += 1) {
      if (slides[_i]) $wrapperEl.append(slides[_i]);
    }

    newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + slides.length : activeIndexBuffer;
  } else {
    $wrapperEl.append(slides);
  }

  for (var _i2 = 0; _i2 < slidesBuffer.length; _i2 += 1) {
    $wrapperEl.append(slidesBuffer[_i2]);
  }

  if (params.loop) {
    swiper.loopCreate();
  }

  if (!(params.observer && swiper.support.observer)) {
    swiper.update();
  }

  if (params.loop) {
    swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
  } else {
    swiper.slideTo(newActiveIndex, 0, false);
  }
}

/***/ }),

/***/ "../node_modules/swiper/esm/components/core/manipulation/appendSlide.js":
/*!******************************************************************************!*\
  !*** ../node_modules/swiper/esm/components/core/manipulation/appendSlide.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ appendSlide)
/* harmony export */ });
function appendSlide(slides) {
  var swiper = this;
  var $wrapperEl = swiper.$wrapperEl,
      params = swiper.params;

  if (params.loop) {
    swiper.loopDestroy();
  }

  if (typeof slides === 'object' && 'length' in slides) {
    for (var i = 0; i < slides.length; i += 1) {
      if (slides[i]) $wrapperEl.append(slides[i]);
    }
  } else {
    $wrapperEl.append(slides);
  }

  if (params.loop) {
    swiper.loopCreate();
  }

  if (!(params.observer && swiper.support.observer)) {
    swiper.update();
  }
}

/***/ }),

/***/ "../node_modules/swiper/esm/components/core/manipulation/index.js":
/*!************************************************************************!*\
  !*** ../node_modules/swiper/esm/components/core/manipulation/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _appendSlide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appendSlide */ "../node_modules/swiper/esm/components/core/manipulation/appendSlide.js");
/* harmony import */ var _prependSlide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prependSlide */ "../node_modules/swiper/esm/components/core/manipulation/prependSlide.js");
/* harmony import */ var _addSlide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addSlide */ "../node_modules/swiper/esm/components/core/manipulation/addSlide.js");
/* harmony import */ var _removeSlide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./removeSlide */ "../node_modules/swiper/esm/components/core/manipulation/removeSlide.js");
/* harmony import */ var _removeAllSlides__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./removeAllSlides */ "../node_modules/swiper/esm/components/core/manipulation/removeAllSlides.js");





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  appendSlide: _appendSlide__WEBPACK_IMPORTED_MODULE_0__.default,
  prependSlide: _prependSlide__WEBPACK_IMPORTED_MODULE_1__.default,
  addSlide: _addSlide__WEBPACK_IMPORTED_MODULE_2__.default,
  removeSlide: _removeSlide__WEBPACK_IMPORTED_MODULE_3__.default,
  removeAllSlides: _removeAllSlides__WEBPACK_IMPORTED_MODULE_4__.default
});

/***/ }),

/***/ "../node_modules/swiper/esm/components/core/manipulation/prependSlide.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/swiper/esm/components/core/manipulation/prependSlide.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ prependSlide)
/* harmony export */ });
function prependSlide(slides) {
  var swiper = this;
  var params = swiper.params,
      $wrapperEl = swiper.$wrapperEl,
      activeIndex = swiper.activeIndex;

  if (params.loop) {
    swiper.loopDestroy();
  }

  var newActiveIndex = activeIndex + 1;

  if (typeof slides === 'object' && 'length' in slides) {
    for (var i = 0; i < slides.length; i += 1) {
      if (slides[i]) $wrapperEl.prepend(slides[i]);
    }

    newActiveIndex = activeIndex + slides.length;
  } else {
    $wrapperEl.prepend(slides);
  }

  if (params.loop) {
    swiper.loopCreate();
  }

  if (!(params.observer && swiper.support.observer)) {
    swiper.update();
  }

  swiper.slideTo(newActiveIndex, 0, false);
}

/***/ }),

/***/ "../node_modules/swiper/esm/components/core/manipulation/removeAllSlides.js":
/*!**********************************************************************************!*\
  !*** ../node_modules/swiper/esm/components/core/manipulation/removeAllSlides.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ removeAllSlides)
/* harmony export */ });
function removeAllSlides() {
  var swiper = this;
  var slidesIndexes = [];

  for (var i = 0; i < swiper.slides.length; i += 1) {
    slidesIndexes.push(i);
  }

  swiper.removeSlide(slidesIndexes);
}

/***/ }),

/***/ "../node_modules/swiper/esm/components/core/manipulation/removeSlide.js":
/*!******************************************************************************!*\
  !*** ../node_modules/swiper/esm/components/core/manipulation/removeSlide.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ removeSlide)
/* harmony export */ });
function removeSlide(slidesIndexes) {
  var swiper = this;
  var params = swiper.params,
      $wrapperEl = swiper.$wrapperEl,
      activeIndex = swiper.activeIndex;
  var activeIndexBuffer = activeIndex;

  if (params.loop) {
    activeIndexBuffer -= swiper.loopedSlides;
    swiper.loopDestroy();
    swiper.slides = $wrapperEl.children("." + params.slideClass);
  }

  var newActiveIndex = activeIndexBuffer;
  var indexToRemove;

  if (typeof slidesIndexes === 'object' && 'length' in slidesIndexes) {
    for (var i = 0; i < slidesIndexes.length; i += 1) {
      indexToRemove = slidesIndexes[i];
      if (swiper.slides[indexToRemove]) swiper.slides.eq(indexToRemove).remove();
      if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
    }

    newActiveIndex = Math.max(newActiveIndex, 0);
  } else {
    indexToRemove = slidesIndexes;
    if (swiper.slides[indexToRemove]) swiper.slides.eq(indexToRemove).remove();
    if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
    newActiveIndex = Math.max(newActiveIndex, 0);
  }

  if (params.loop) {
    swiper.loopCreate();
  }

  if (!(params.observer && swiper.support.observer)) {
    swiper.update();
  }

  if (params.loop) {
    swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
  } else {
    swiper.slideTo(newActiveIndex, 0, false);
  }
}

/***/ }),

/***/ "../node_modules/swiper/esm/components/core/modular.js":
/*!*************************************************************!*\
  !*** ../node_modules/swiper/esm/components/core/modular.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/utils */ "../node_modules/swiper/esm/utils/utils.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  useParams: function useParams(instanceParams) {
    var instance = this;
    if (!instance.modules) return;
    Object.keys(instance.modules).forEach(function (moduleName) {
      var module = instance.modules[moduleName]; // Extend params

      if (module.params) {
        (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.extend)(instanceParams, module.params);
      }
    });
  },
  useModules: function useModules(modulesParams) {
    if (modulesParams === void 0) {
      modulesParams = {};
    }

    var instance = this;
    if (!instance.modules) return;
    Object.keys(instance.modules).forEach(function (moduleName) {
      var module = instance.modules[moduleName];
      var moduleParams = modulesParams[moduleName] || {}; // Add event listeners

      if (module.on && instance.on) {
        Object.keys(module.on).forEach(function (moduleEventName) {
          instance.on(moduleEventName, module.on[moduleEventName]);
        });
      } // Module create callback


      if (module.create) {
        module.create.bind(instance)(moduleParams);
      }
    });
  }
});

/***/ }),

/***/ "../node_modules/swiper/esm/components/core/slide/index.js":
/*!*****************************************************************!*\
  !*** ../node_modules/swiper/esm/components/core/slide/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _slideTo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slideTo */ "../node_modules/swiper/esm/components/core/slide/slideTo.js");
/* harmony import */ var _slideToLoop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slideToLoop */ "../node_modules/swiper/esm/components/core/slide/slideToLoop.js");
/* harmony import */ var _slideNext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slideNext */ "../node_modules/swiper/esm/components/core/slide/slideNext.js");
/* harmony import */ var _slidePrev__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./slidePrev */ "../node_modules/swiper/esm/components/core/slide/slidePrev.js");
/* harmony import */ var _slideReset__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./slideReset */ "../node_modules/swiper/esm/components/core/slide/slideReset.js");
/* harmony import */ var _slideToClosest__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./slideToClosest */ "../node_modules/swiper/esm/components/core/slide/slideToClosest.js");
/* harmony import */ var _slideToClickedSlide__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./slideToClickedSlide */ "../node_modules/swiper/esm/components/core/slide/slideToClickedSlide.js");







/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  slideTo: _slideTo__WEBPACK_IMPORTED_MODULE_0__.default,
  slideToLoop: _slideToLoop__WEBPACK_IMPORTED_MODULE_1__.default,
  slideNext: _slideNext__WEBPACK_IMPORTED_MODULE_2__.default,
  slidePrev: _slidePrev__WEBPACK_IMPORTED_MODULE_3__.default,
  slideReset: _slideReset__WEBPACK_IMPORTED_MODULE_4__.default,
  slideToClosest: _slideToClosest__WEBPACK_IMPORTED_MODULE_5__.default,
  slideToClickedSlide: _slideToClickedSlide__WEBPACK_IMPORTED_MODULE_6__.default
});

/***/ }),

/***/ "../node_modules/swiper/esm/components/core/slide/slideNext.js":
/*!*********************************************************************!*\
  !*** ../node_modules/swiper/esm/components/core/slide/slideNext.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ slideNext)
/* harmony export */ });
/* eslint no-unused-vars: "off" */
function slideNext(speed, runCallbacks, internal) {
  if (speed === void 0) {
    speed = this.params.speed;
  }

  if (runCallbacks === void 0) {
    runCallbacks = true;
  }

  var swiper = this;
  var params = swiper.params,
      animating = swiper.animating,
      enabled = swiper.enabled;
  if (!enabled) return swiper;
  var increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup;

  if (params.loop) {
    if (animating && params.loopPreventsSlide) return false;
    swiper.loopFix(); // eslint-disable-next-line

    swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
  }

  return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
}

/***/ }),

/***/ "../node_modules/swiper/esm/components/core/slide/slidePrev.js":
/*!*********************************************************************!*\
  !*** ../node_modules/swiper/esm/components/core/slide/slidePrev.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ slidePrev)
/* harmony export */ });
/* eslint no-unused-vars: "off" */
function slidePrev(speed, runCallbacks, internal) {
  if (speed === void 0) {
    speed = this.params.speed;
  }

  if (runCallbacks === void 0) {
    runCallbacks = true;
  }

  var swiper = this;
  var params = swiper.params,
      animating = swiper.animating,
      snapGrid = swiper.snapGrid,
      slidesGrid = swiper.slidesGrid,
      rtlTranslate = swiper.rtlTranslate,
      enabled = swiper.enabled;
  if (!enabled) return swiper;

  if (params.loop) {
    if (animating && params.loopPreventsSlide) return false;
    swiper.loopFix(); // eslint-disable-next-line

    swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
  }

  var translate = rtlTranslate ? swiper.translate : -swiper.translate;

  function normalize(val) {
    if (val < 0) return -Math.floor(Math.abs(val));
    return Math.floor(val);
  }

  var normalizedTranslate = normalize(translate);
  var normalizedSnapGrid = snapGrid.map(function (val) {
    return normalize(val);
  });
  var prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];

  if (typeof prevSnap === 'undefined' && params.cssMode) {
    snapGrid.forEach(function (snap) {
      if (!prevSnap && normalizedTranslate >= snap) prevSnap = snap;
    });
  }

  var prevIndex;

  if (typeof prevSnap !== 'undefined') {
    prevIndex = slidesGrid.indexOf(prevSnap);
    if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
  }

  return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
}

/***/ }),

/***/ "../node_modules/swiper/esm/components/core/slide/slideReset.js":
/*!**********************************************************************!*\
  !*** ../node_modules/swiper/esm/components/core/slide/slideReset.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ slideReset)
/* harmony export */ });
/* eslint no-unused-vars: "off" */
function slideReset(speed, runCallbacks, internal) {
  if (speed === void 0) {
    speed = this.params.speed;
  }

  if (runCallbacks === void 0) {
    runCallbacks = true;
  }

  var swiper = this;
  return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
}

/***/ }),

/***/ "../node_modules/swiper/esm/components/core/slide/slideTo.js":
/*!*******************************************************************!*\
  !*** ../node_modules/swiper/esm/components/core/slide/slideTo.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ slideTo)
/* harmony export */ });
function slideTo(index, speed, runCallbacks, internal, initial) {
  if (index === void 0) {
    index = 0;
  }

  if (speed === void 0) {
    speed = this.params.speed;
  }

  if (runCallbacks === void 0) {
    runCallbacks = true;
  }

  if (typeof index !== 'number' && typeof index !== 'string') {
    throw new Error("The 'index' argument cannot have type other than 'number' or 'string'. [" + typeof index + "] given.");
  }

  if (typeof index === 'string') {
    /**
     * The `index` argument converted from `string` to `number`.
     * @type {number}
     */
    var indexAsNumber = parseInt(index, 10);
    /**
     * Determines whether the `index` argument is a valid `number`
     * after being converted from the `string` type.
     * @type {boolean}
     */

    var isValidNumber = isFinite(indexAsNumber);

    if (!isValidNumber) {
      throw new Error("The passed-in 'index' (string) couldn't be converted to 'number'. [" + index + "] given.");
    } // Knowing that the converted `index` is a valid number,
    // we can update the original argument's value.


    index = indexAsNumber;
  }

  var swiper = this;
  var slideIndex = index;
  if (slideIndex < 0) slideIndex = 0;
  var params = swiper.params,
      snapGrid = swiper.snapGrid,
      slidesGrid = swiper.slidesGrid,
      previousIndex = swiper.previousIndex,
      activeIndex = swiper.activeIndex,
      rtl = swiper.rtlTranslate,
      wrapperEl = swiper.wrapperEl,
      enabled = swiper.enabled;

  if (swiper.animating && params.preventInteractionOnTransition || !enabled && !internal && !initial) {
    return false;
  }

  var skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
  var snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
  if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;

  if ((activeIndex || params.initialSlide || 0) === (previousIndex || 0) && runCallbacks) {
    swiper.emit('beforeSlideChangeStart');
  }

  var translate = -snapGrid[snapIndex]; // Update progress

  swiper.updateProgress(translate); // Normalize slideIndex

  if (params.normalizeSlideIndex) {
    for (var i = 0; i < slidesGrid.length; i += 1) {
      var normalizedTranslate = -Math.floor(translate * 100);
      var normalizedGird = Math.floor(slidesGrid[i] * 100);
      var normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);

      if (typeof slidesGrid[i + 1] !== 'undefined') {
        if (normalizedTranslate >= normalizedGird && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGird) / 2) {
          slideIndex = i;
        } else if (normalizedTranslate >= normalizedGird && normalizedTranslate < normalizedGridNext) {
          slideIndex = i + 1;
        }
      } else if (normalizedTranslate >= normalizedGird) {
        slideIndex = i;
      }
    }
  } // Directions locks


  if (swiper.initialized && slideIndex !== activeIndex) {
    if (!swiper.allowSlideNext && translate < swiper.translate && translate < swiper.minTranslate()) {
      return false;
    }

    if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) {
      if ((activeIndex || 0) !== slideIndex) return false;
    }
  }

  var direction;
  if (slideIndex > activeIndex) direction = 'next';else if (slideIndex < activeIndex) direction = 'prev';else direction = 'reset'; // Update Index

  if (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate) {
    swiper.updateActiveIndex(slideIndex); // Update Height

    if (params.autoHeight) {
      swiper.updateAutoHeight();
    }

    swiper.updateSlidesClasses();

    if (params.effect !== 'slide') {
      swiper.setTranslate(translate);
    }

    if (direction !== 'reset') {
      swiper.transitionStart(runCallbacks, direction);
      swiper.transitionEnd(runCallbacks, direction);
    }

    return false;
  }

  if (params.cssMode) {
    var isH = swiper.isHorizontal();
    var t = -translate;

    if (rtl) {
      t = wrapperEl.scrollWidth - wrapperEl.offsetWidth - t;
    }

    if (speed === 0) {
      wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;
    } else {
      // eslint-disable-next-line
      if (wrapperEl.scrollTo) {
        var _wrapperEl$scrollTo;

        wrapperEl.scrollTo((_wrapperEl$scrollTo = {}, _wrapperEl$scrollTo[isH ? 'left' : 'top'] = t, _wrapperEl$scrollTo.behavior = 'smooth', _wrapperEl$scrollTo));
      } else {
        wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;
      }
    }

    return true;
  }

  if (speed === 0) {
    swiper.setTransition(0);
    swiper.setTranslate(translate);
    swiper.updateActiveIndex(slideIndex);
    swiper.updateSlidesClasses();
    swiper.emit('beforeTransitionStart', speed, internal);
    swiper.transitionStart(runCallbacks, direction);
    swiper.transitionEnd(runCallbacks, direction);
  } else {
    swiper.setTransition(speed);
    swiper.setTranslate(translate);
    swiper.updateActiveIndex(slideIndex);
    swiper.updateSlidesClasses();
    swiper.emit('beforeTransitionStart', speed, internal);
    swiper.transitionStart(runCallbacks, direction);

    if (!swiper.animating) {
      swiper.animating = true;

      if (!swiper.onSlideToWrapperTransitionEnd) {
        swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
          if (!swiper || swiper.destroyed) return;
          if (e.target !== this) return;
          swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
          swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
          swiper.onSlideToWrapperTransitionEnd = null;
          delete swiper.onSlideToWrapperTransitionEnd;
          swiper.transitionEnd(runCallbacks, direction);
        };
      }

      swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
      swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
    }
  }

  return true;
}

/***/ }),

/***/ "../node_modules/swiper/esm/components/core/slide/slideToClickedSlide.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/swiper/esm/components/core/slide/slideToClickedSlide.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ slideToClickedSlide)
/* harmony export */ });
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/dom */ "../node_modules/swiper/esm/utils/dom.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/utils */ "../node_modules/swiper/esm/utils/utils.js");


function slideToClickedSlide() {
  var swiper = this;
  var params = swiper.params,
      $wrapperEl = swiper.$wrapperEl;
  var slidesPerView = params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : params.slidesPerView;
  var slideToIndex = swiper.clickedIndex;
  var realIndex;

  if (params.loop) {
    if (swiper.animating) return;
    realIndex = parseInt((0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.default)(swiper.clickedSlide).attr('data-swiper-slide-index'), 10);

    if (params.centeredSlides) {
      if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
        swiper.loopFix();
        slideToIndex = $wrapperEl.children("." + params.slideClass + "[data-swiper-slide-index=\"" + realIndex + "\"]:not(." + params.slideDuplicateClass + ")").eq(0).index();
        (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.nextTick)(function () {
          swiper.slideTo(slideToIndex);
        });
      } else {
        swiper.slideTo(slideToIndex);
      }
    } else if (slideToIndex > swiper.slides.length - slidesPerView) {
      swiper.loopFix();
      slideToIndex = $wrapperEl.children("." + params.slideClass + "[data-swiper-slide-index=\"" + realIndex + "\"]:not(." + params.slideDuplicateClass + ")").eq(0).index();
      (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.nextTick)(function () {
        swiper.slideTo(slideToIndex);
      });
    } else {
      swiper.slideTo(slideToIndex);
    }
  } else {
    swiper.slideTo(slideToIndex);
  }
}

/***/ }),

/***/ "../node_modules/swiper/esm/components/core/slide/slideToClosest.js":
/*!**************************************************************************!*\
  !*** ../node_modules/swiper/esm/components/core/slide/slideToClosest.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ slideToClosest)
/* harmony export */ });
/* eslint no-unused-vars: "off" */
function slideToClosest(speed, runCallbacks, internal, threshold) {
  if (speed === void 0) {
    speed = this.params.speed;
  }

  if (runCallbacks === void 0) {
    runCallbacks = true;
  }

  if (threshold === void 0) {
    threshold = 0.5;
  }

  var swiper = this;
  var index = swiper.activeIndex;
  var skip = Math.min(swiper.params.slidesPerGroupSkip, index);
  var snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
  var translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;

  if (translate >= swiper.snapGrid[snapIndex]) {
    // The current translate is on or after the current snap index, so the choice
    // is between the current index and the one after it.
    var currentSnap = swiper.snapGrid[snapIndex];
    var nextSnap = swiper.snapGrid[snapIndex + 1];

    if (translate - currentSnap > (nextSnap - currentSnap) * threshold) {
      index += swiper.params.slidesPerGroup;
    }
  } else {
    // The current translate is before the current snap index, so the choice
    // is between the current index and the one before it.
    var prevSnap = swiper.snapGrid[snapIndex - 1];
    var _currentSnap = swiper.snapGrid[snapIndex];

    if (translate - prevSnap <= (_currentSnap - prevSnap) * threshold) {
      index -= swiper.params.slidesPerGroup;
    }
  }

  index = Math.max(index, 0);
  index = Math.min(index, swiper.slidesGrid.length - 1);
  return swiper.slideTo(index, speed, runCallbacks, internal);
}

/***/ }),

/***/ "../node_modules/swiper/esm/components/core/slide/slideToLoop.js":
/*!***********************************************************************!*\
  !*** ../node_modules/swiper/esm/components/core/slide/slideToLoop.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ slideToLoop)
/* harmony export */ });
function slideToLoop(index, speed, runCallbacks, internal) {
  if (index === void 0) {
    index = 0;
  }

  if (speed === void 0) {
    speed = this.params.speed;
  }

  if (runCallbacks === void 0) {
    runCallbacks = true;
  }

  var swiper = this;
  var newIndex = index;

  if (swiper.params.loop) {
    newIndex += swiper.loopedSlides;
  }

  return swiper.slideTo(newIndex, speed, runCallbacks, internal);
}

/***/ }),

/***/ "../node_modules/swiper/esm/components/core/transition/index.js":
/*!**********************************************************************!*\
  !*** ../node_modules/swiper/esm/components/core/transition/index.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _setTransition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setTransition */ "../node_modules/swiper/esm/components/core/transition/setTransition.js");
/* harmony import */ var _transitionStart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transitionStart */ "../node_modules/swiper/esm/components/core/transition/transitionStart.js");
/* harmony import */ var _transitionEnd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transitionEnd */ "../node_modules/swiper/esm/components/core/transition/transitionEnd.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  setTransition: _setTransition__WEBPACK_IMPORTED_MODULE_0__.default,
  transitionStart: _transitionStart__WEBPACK_IMPORTED_MODULE_1__.default,
  transitionEnd: _transitionEnd__WEBPACK_IMPORTED_MODULE_2__.default
});

/***/ }),

/***/ "../node_modules/swiper/esm/components/core/transition/setTransition.js":
/*!******************************************************************************!*\
  !*** ../node_modules/swiper/esm/components/core/transition/setTransition.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ setTransition)
/* harmony export */ });
function setTransition(duration, byController) {
  var swiper = this;

  if (!swiper.params.cssMode) {
    swiper.$wrapperEl.transition(duration);
  }

  swiper.emit('setTransition', duration, byController);
}

/***/ }),

/***/ "../node_modules/swiper/esm/components/core/transition/transitionEnd.js":
/*!******************************************************************************!*\
  !*** ../node_modules/swiper/esm/components/core/transition/transitionEnd.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ transitionEnd)
/* harmony export */ });
function transitionEnd(runCallbacks, direction) {
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }

  var swiper = this;
  var activeIndex = swiper.activeIndex,
      previousIndex = swiper.previousIndex,
      params = swiper.params;
  swiper.animating = false;
  if (params.cssMode) return;
  swiper.setTransition(0);
  var dir = direction;

  if (!dir) {
    if (activeIndex > previousIndex) dir = 'next';else if (activeIndex < previousIndex) dir = 'prev';else dir = 'reset';
  }

  swiper.emit('transitionEnd');

  if (runCallbacks && activeIndex !== previousIndex) {
    if (dir === 'reset') {
      swiper.emit('slideResetTransitionEnd');
      return;
    }

    swiper.emit('slideChangeTransitionEnd');

    if (dir === 'next') {
      swiper.emit('slideNextTransitionEnd');
    } else {
      swiper.emit('slidePrevTransitionEnd');
    }
  }
}

/***/ }),

/***/ "../node_modules/swiper/esm/components/core/transition/transitionStart.js":
/*!********************************************************************************!*\
  !*** ../node_modules/swiper/esm/components/core/transition/transitionStart.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ transitionStart)
/* harmony export */ });
function transitionStart(runCallbacks, direction) {
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }

  var swiper = this;
  var activeIndex = swiper.activeIndex,
      params = swiper.params,
      previousIndex = swiper.previousIndex;
  if (params.cssMode) return;

  if (params.autoHeight) {
    swiper.updateAutoHeight();
  }

  var dir = direction;

  if (!dir) {
    if (activeIndex > previousIndex) dir = 'next';else if (activeIndex < previousIndex) dir = 'prev';else dir = 'reset';
  }

  swiper.emit('transitionStart');

  if (runCallbacks && activeIndex !== previousIndex) {
    if (dir === 'reset') {
      swiper.emit('slideResetTransitionStart');
      return;
    }

    swiper.emit('slideChangeTransitionStart');

    if (dir === 'next') {
      swiper.emit('slideNextTransitionStart');
    } else {
      swiper.emit('slidePrevTransitionStart');
    }
  }
}

/***/ }),

/***/ "../node_modules/swiper/esm/components/core/translate/getTranslate.js":
/*!****************************************************************************!*\
  !*** ../node_modules/swiper/esm/components/core/translate/getTranslate.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getSwiperTranslate)
/* harmony export */ });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/utils */ "../node_modules/swiper/esm/utils/utils.js");

function getSwiperTranslate(axis) {
  if (axis === void 0) {
    axis = this.isHorizontal() ? 'x' : 'y';
  }

  var swiper = this;
  var params = swiper.params,
      rtl = swiper.rtlTranslate,
      translate = swiper.translate,
      $wrapperEl = swiper.$wrapperEl;

  if (params.virtualTranslate) {
    return rtl ? -translate : translate;
  }

  if (params.cssMode) {
    return translate;
  }

  var currentTranslate = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.getTranslate)($wrapperEl[0], axis);
  if (rtl) currentTranslate = -currentTranslate;
  return currentTranslate || 0;
}

/***/ }),

/***/ "../node_modules/swiper/esm/components/core/translate/index.js":
/*!*********************************************************************!*\
  !*** ../node_modules/swiper/esm/components/core/translate/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getTranslate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getTranslate */ "../node_modules/swiper/esm/components/core/translate/getTranslate.js");
/* harmony import */ var _setTranslate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setTranslate */ "../node_modules/swiper/esm/components/core/translate/setTranslate.js");
/* harmony import */ var _minTranslate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./minTranslate */ "../node_modules/swiper/esm/components/core/translate/minTranslate.js");
/* harmony import */ var _maxTranslate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./maxTranslate */ "../node_modules/swiper/esm/components/core/translate/maxTranslate.js");
/* harmony import */ var _translateTo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./translateTo */ "../node_modules/swiper/esm/components/core/translate/translateTo.js");





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  getTranslate: _getTranslate__WEBPACK_IMPORTED_MODULE_0__.default,
  setTranslate: _setTranslate__WEBPACK_IMPORTED_MODULE_1__.default,
  minTranslate: _minTranslate__WEBPACK_IMPORTED_MODULE_2__.default,
  maxTranslate: _maxTranslate__WEBPACK_IMPORTED_MODULE_3__.default,
  translateTo: _translateTo__WEBPACK_IMPORTED_MODULE_4__.default
});

/***/ }),

/***/ "../node_modules/swiper/esm/components/core/translate/maxTranslate.js":
/*!****************************************************************************!*\
  !*** ../node_modules/swiper/esm/components/core/translate/maxTranslate.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ maxTranslate)
/* harmony export */ });
function maxTranslate() {
  return -this.snapGrid[this.snapGrid.length - 1];
}

/***/ }),

/***/ "../node_modules/swiper/esm/components/core/translate/minTranslate.js":
/*!****************************************************************************!*\
  !*** ../node_modules/swiper/esm/components/core/translate/minTranslate.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ minTranslate)
/* harmony export */ });
function minTranslate() {
  return -this.snapGrid[0];
}

/***/ }),

/***/ "../node_modules/swiper/esm/components/core/translate/setTranslate.js":
/*!****************************************************************************!*\
  !*** ../node_modules/swiper/esm/components/core/translate/setTranslate.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ setTranslate)
/* harmony export */ });
function setTranslate(translate, byController) {
  var swiper = this;
  var rtl = swiper.rtlTranslate,
      params = swiper.params,
      $wrapperEl = swiper.$wrapperEl,
      wrapperEl = swiper.wrapperEl,
      progress = swiper.progress;
  var x = 0;
  var y = 0;
  var z = 0;

  if (swiper.isHorizontal()) {
    x = rtl ? -translate : translate;
  } else {
    y = translate;
  }

  if (params.roundLengths) {
    x = Math.floor(x);
    y = Math.floor(y);
  }

  if (params.cssMode) {
    wrapperEl[swiper.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = swiper.isHorizontal() ? -x : -y;
  } else if (!params.virtualTranslate) {
    $wrapperEl.transform("translate3d(" + x + "px, " + y + "px, " + z + "px)");
  }

  swiper.previousTranslate = swiper.translate;
  swiper.translate = swiper.isHorizontal() ? x : y; // Check if we need to update progress

  var newProgress;
  var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();

  if (translatesDiff === 0) {
    newProgress = 0;
  } else {
    newProgress = (translate - swiper.minTranslate()) / translatesDiff;
  }

  if (newProgress !== progress) {
    swiper.updateProgress(translate);
  }

  swiper.emit('setTranslate', swiper.translate, byController);
}

/***/ }),

/***/ "../node_modules/swiper/esm/components/core/translate/translateTo.js":
/*!***************************************************************************!*\
  !*** ../node_modules/swiper/esm/components/core/translate/translateTo.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ translateTo)
/* harmony export */ });
function translateTo(translate, speed, runCallbacks, translateBounds, internal) {
  if (translate === void 0) {
    translate = 0;
  }

  if (speed === void 0) {
    speed = this.params.speed;
  }

  if (runCallbacks === void 0) {
    runCallbacks = true;
  }

  if (translateBounds === void 0) {
    translateBounds = true;
  }

  var swiper = this;
  var params = swiper.params,
      wrapperEl = swiper.wrapperEl;

  if (swiper.animating && params.preventInteractionOnTransition) {
    return false;
  }

  var minTranslate = swiper.minTranslate();
  var maxTranslate = swiper.maxTranslate();
  var newTranslate;
  if (translateBounds && translate > minTranslate) newTranslate = minTranslate;else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate;else newTranslate = translate; // Update progress

  swiper.updateProgress(newTranslate);

  if (params.cssMode) {
    var isH = swiper.isHorizontal();

    if (speed === 0) {
      wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -newTranslate;
    } else {
      // eslint-disable-next-line
      if (wrapperEl.scrollTo) {
        var _wrapperEl$scrollTo;

        wrapperEl.scrollTo((_wrapperEl$scrollTo = {}, _wrapperEl$scrollTo[isH ? 'left' : 'top'] = -newTranslate, _wrapperEl$scrollTo.behavior = 'smooth', _wrapperEl$scrollTo));
      } else {
        wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -newTranslate;
      }
    }

    return true;
  }

  if (speed === 0) {
    swiper.setTransition(0);
    swiper.setTranslate(newTranslate);

    if (runCallbacks) {
      swiper.emit('beforeTransitionStart', speed, internal);
      swiper.emit('transitionEnd');
    }
  } else {
    swiper.setTransition(speed);
    swiper.setTranslate(newTranslate);

    if (runCallbacks) {
      swiper.emit('beforeTransitionStart', speed, internal);
      swiper.emit('transitionStart');
    }

    if (!swiper.animating) {
      swiper.animating = true;

      if (!swiper.onTranslateToWrapperTransitionEnd) {
        swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
          if (!swiper || swiper.destroyed) return;
          if (e.target !== this) return;
          swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
          swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onTranslateToWrapperTransitionEnd);
          swiper.onTranslateToWrapperTransitionEnd = null;
          delete swiper.onTranslateToWrapperTransitionEnd;

          if (runCallbacks) {
            swiper.emit('transitionEnd');
          }
        };
      }

      swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
      swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onTranslateToWrapperTransitionEnd);
    }
  }

  return true;
}

/***/ }),

/***/ "../node_modules/swiper/esm/components/core/update/index.js":
/*!******************************************************************!*\
  !*** ../node_modules/swiper/esm/components/core/update/index.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _updateSize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updateSize */ "../node_modules/swiper/esm/components/core/update/updateSize.js");
/* harmony import */ var _updateSlides__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updateSlides */ "../node_modules/swiper/esm/components/core/update/updateSlides.js");
/* harmony import */ var _updateAutoHeight__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./updateAutoHeight */ "../node_modules/swiper/esm/components/core/update/updateAutoHeight.js");
/* harmony import */ var _updateSlidesOffset__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./updateSlidesOffset */ "../node_modules/swiper/esm/components/core/update/updateSlidesOffset.js");
/* harmony import */ var _updateSlidesProgress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./updateSlidesProgress */ "../node_modules/swiper/esm/components/core/update/updateSlidesProgress.js");
/* harmony import */ var _updateProgress__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./updateProgress */ "../node_modules/swiper/esm/components/core/update/updateProgress.js");
/* harmony import */ var _updateSlidesClasses__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./updateSlidesClasses */ "../node_modules/swiper/esm/components/core/update/updateSlidesClasses.js");
/* harmony import */ var _updateActiveIndex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./updateActiveIndex */ "../node_modules/swiper/esm/components/core/update/updateActiveIndex.js");
/* harmony import */ var _updateClickedSlide__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./updateClickedSlide */ "../node_modules/swiper/esm/components/core/update/updateClickedSlide.js");









/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  updateSize: _updateSize__WEBPACK_IMPORTED_MODULE_0__.default,
  updateSlides: _updateSlides__WEBPACK_IMPORTED_MODULE_1__.default,
  updateAutoHeight: _updateAutoHeight__WEBPACK_IMPORTED_MODULE_2__.default,
  updateSlidesOffset: _updateSlidesOffset__WEBPACK_IMPORTED_MODULE_3__.default,
  updateSlidesProgress: _updateSlidesProgress__WEBPACK_IMPORTED_MODULE_4__.default,
  updateProgress: _updateProgress__WEBPACK_IMPORTED_MODULE_5__.default,
  updateSlidesClasses: _updateSlidesClasses__WEBPACK_IMPORTED_MODULE_6__.default,
  updateActiveIndex: _updateActiveIndex__WEBPACK_IMPORTED_MODULE_7__.default,
  updateClickedSlide: _updateClickedSlide__WEBPACK_IMPORTED_MODULE_8__.default
});

/***/ }),

/***/ "../node_modules/swiper/esm/components/core/update/updateActiveIndex.js":
/*!******************************************************************************!*\
  !*** ../node_modules/swiper/esm/components/core/update/updateActiveIndex.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ updateActiveIndex)
/* harmony export */ });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/utils */ "../node_modules/swiper/esm/utils/utils.js");

function updateActiveIndex(newActiveIndex) {
  var swiper = this;
  var translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
  var slidesGrid = swiper.slidesGrid,
      snapGrid = swiper.snapGrid,
      params = swiper.params,
      previousIndex = swiper.activeIndex,
      previousRealIndex = swiper.realIndex,
      previousSnapIndex = swiper.snapIndex;
  var activeIndex = newActiveIndex;
  var snapIndex;

  if (typeof activeIndex === 'undefined') {
    for (var i = 0; i < slidesGrid.length; i += 1) {
      if (typeof slidesGrid[i + 1] !== 'undefined') {
        if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) {
          activeIndex = i;
        } else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) {
          activeIndex = i + 1;
        }
      } else if (translate >= slidesGrid[i]) {
        activeIndex = i;
      }
    } // Normalize slideIndex


    if (params.normalizeSlideIndex) {
      if (activeIndex < 0 || typeof activeIndex === 'undefined') activeIndex = 0;
    }
  }

  if (snapGrid.indexOf(translate) >= 0) {
    snapIndex = snapGrid.indexOf(translate);
  } else {
    var skip = Math.min(params.slidesPerGroupSkip, activeIndex);
    snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
  }

  if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;

  if (activeIndex === previousIndex) {
    if (snapIndex !== previousSnapIndex) {
      swiper.snapIndex = snapIndex;
      swiper.emit('snapIndexChange');
    }

    return;
  } // Get real index


  var realIndex = parseInt(swiper.slides.eq(activeIndex).attr('data-swiper-slide-index') || activeIndex, 10);
  (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.extend)(swiper, {
    snapIndex: snapIndex,
    realIndex: realIndex,
    previousIndex: previousIndex,
    activeIndex: activeIndex
  });
  swiper.emit('activeIndexChange');
  swiper.emit('snapIndexChange');

  if (previousRealIndex !== realIndex) {
    swiper.emit('realIndexChange');
  }

  if (swiper.initialized || swiper.params.runCallbacksOnInit) {
    swiper.emit('slideChange');
  }
}

/***/ }),

/***/ "../node_modules/swiper/esm/components/core/update/updateAutoHeight.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/swiper/esm/components/core/update/updateAutoHeight.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ updateAutoHeight)
/* harmony export */ });
function updateAutoHeight(speed) {
  var swiper = this;
  var activeSlides = [];
  var isVirtual = swiper.virtual && swiper.params.virtual.enabled;
  var newHeight = 0;
  var i;

  if (typeof speed === 'number') {
    swiper.setTransition(speed);
  } else if (speed === true) {
    swiper.setTransition(swiper.params.speed);
  }

  var getSlideByIndex = function getSlideByIndex(index) {
    if (isVirtual) {
      return swiper.slides.filter(function (el) {
        return parseInt(el.getAttribute('data-swiper-slide-index'), 10) === index;
      })[0];
    }

    return swiper.slides.eq(index)[0];
  }; // Find slides currently in view


  if (swiper.params.slidesPerView !== 'auto' && swiper.params.slidesPerView > 1) {
    if (swiper.params.centeredSlides) {
      swiper.visibleSlides.each(function (slide) {
        activeSlides.push(slide);
      });
    } else {
      for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
        var index = swiper.activeIndex + i;
        if (index > swiper.slides.length && !isVirtual) break;
        activeSlides.push(getSlideByIndex(index));
      }
    }
  } else {
    activeSlides.push(getSlideByIndex(swiper.activeIndex));
  } // Find new height from highest slide in view


  for (i = 0; i < activeSlides.length; i += 1) {
    if (typeof activeSlides[i] !== 'undefined') {
      var height = activeSlides[i].offsetHeight;
      newHeight = height > newHeight ? height : newHeight;
    }
  } // Update Height


  if (newHeight) swiper.$wrapperEl.css('height', newHeight + "px");
}

/***/ }),

/***/ "../node_modules/swiper/esm/components/core/update/updateClickedSlide.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/swiper/esm/components/core/update/updateClickedSlide.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ updateClickedSlide)
/* harmony export */ });
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/dom */ "../node_modules/swiper/esm/utils/dom.js");

function updateClickedSlide(e) {
  var swiper = this;
  var params = swiper.params;
  var slide = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.default)(e.target).closest("." + params.slideClass)[0];
  var slideFound = false;
  var slideIndex;

  if (slide) {
    for (var i = 0; i < swiper.slides.length; i += 1) {
      if (swiper.slides[i] === slide) {
        slideFound = true;
        slideIndex = i;
        break;
      }
    }
  }

  if (slide && slideFound) {
    swiper.clickedSlide = slide;

    if (swiper.virtual && swiper.params.virtual.enabled) {
      swiper.clickedIndex = parseInt((0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.default)(slide).attr('data-swiper-slide-index'), 10);
    } else {
      swiper.clickedIndex = slideIndex;
    }
  } else {
    swiper.clickedSlide = undefined;
    swiper.clickedIndex = undefined;
    return;
  }

  if (params.slideToClickedSlide && swiper.clickedIndex !== undefined && swiper.clickedIndex !== swiper.activeIndex) {
    swiper.slideToClickedSlide();
  }
}

/***/ }),

/***/ "../node_modules/swiper/esm/components/core/update/updateProgress.js":
/*!***************************************************************************!*\
  !*** ../node_modules/swiper/esm/components/core/update/updateProgress.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ updateProgress)
/* harmony export */ });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/utils */ "../node_modules/swiper/esm/utils/utils.js");

function updateProgress(translate) {
  var swiper = this;

  if (typeof translate === 'undefined') {
    var multiplier = swiper.rtlTranslate ? -1 : 1; // eslint-disable-next-line

    translate = swiper && swiper.translate && swiper.translate * multiplier || 0;
  }

  var params = swiper.params;
  var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  var progress = swiper.progress,
      isBeginning = swiper.isBeginning,
      isEnd = swiper.isEnd;
  var wasBeginning = isBeginning;
  var wasEnd = isEnd;

  if (translatesDiff === 0) {
    progress = 0;
    isBeginning = true;
    isEnd = true;
  } else {
    progress = (translate - swiper.minTranslate()) / translatesDiff;
    isBeginning = progress <= 0;
    isEnd = progress >= 1;
  }

  (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.extend)(swiper, {
    progress: progress,
    isBeginning: isBeginning,
    isEnd: isEnd
  });
  if (params.watchSlidesProgress || params.watchSlidesVisibility || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate);

  if (isBeginning && !wasBeginning) {
    swiper.emit('reachBeginning toEdge');
  }

  if (isEnd && !wasEnd) {
    swiper.emit('reachEnd toEdge');
  }

  if (wasBeginning && !isBeginning || wasEnd && !isEnd) {
    swiper.emit('fromEdge');
  }

  swiper.emit('progress', progress);
}

/***/ }),

/***/ "../node_modules/swiper/esm/components/core/update/updateSize.js":
/*!***********************************************************************!*\
  !*** ../node_modules/swiper/esm/components/core/update/updateSize.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ updateSize)
/* harmony export */ });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/utils */ "../node_modules/swiper/esm/utils/utils.js");

function updateSize() {
  var swiper = this;
  var width;
  var height;
  var $el = swiper.$el;

  if (typeof swiper.params.width !== 'undefined' && swiper.params.width !== null) {
    width = swiper.params.width;
  } else {
    width = $el[0].clientWidth;
  }

  if (typeof swiper.params.height !== 'undefined' && swiper.params.height !== null) {
    height = swiper.params.height;
  } else {
    height = $el[0].clientHeight;
  }

  if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) {
    return;
  } // Subtract paddings


  width = width - parseInt($el.css('padding-left') || 0, 10) - parseInt($el.css('padding-right') || 0, 10);
  height = height - parseInt($el.css('padding-top') || 0, 10) - parseInt($el.css('padding-bottom') || 0, 10);
  if (Number.isNaN(width)) width = 0;
  if (Number.isNaN(height)) height = 0;
  (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.extend)(swiper, {
    width: width,
    height: height,
    size: swiper.isHorizontal() ? width : height
  });
}

/***/ }),

/***/ "../node_modules/swiper/esm/components/core/update/updateSlides.js":
/*!*************************************************************************!*\
  !*** ../node_modules/swiper/esm/components/core/update/updateSlides.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ updateSlides)
/* harmony export */ });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/utils */ "../node_modules/swiper/esm/utils/utils.js");

function updateSlides() {
  var swiper = this;

  function getDirectionLabel(property) {
    if (swiper.isHorizontal()) {
      return property;
    } // prettier-ignore


    return {
      'width': 'height',
      'margin-top': 'margin-left',
      'margin-bottom ': 'margin-right',
      'margin-left': 'margin-top',
      'margin-right': 'margin-bottom',
      'padding-left': 'padding-top',
      'padding-right': 'padding-bottom',
      'marginRight': 'marginBottom'
    }[property];
  }

  function getDirectionPropertyValue(node, label) {
    return parseFloat(node.getPropertyValue(getDirectionLabel(label)) || 0);
  }

  var params = swiper.params;
  var $wrapperEl = swiper.$wrapperEl,
      swiperSize = swiper.size,
      rtl = swiper.rtlTranslate,
      wrongRTL = swiper.wrongRTL;
  var isVirtual = swiper.virtual && params.virtual.enabled;
  var previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
  var slides = $wrapperEl.children("." + swiper.params.slideClass);
  var slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
  var snapGrid = [];
  var slidesGrid = [];
  var slidesSizesGrid = [];
  var offsetBefore = params.slidesOffsetBefore;

  if (typeof offsetBefore === 'function') {
    offsetBefore = params.slidesOffsetBefore.call(swiper);
  }

  var offsetAfter = params.slidesOffsetAfter;

  if (typeof offsetAfter === 'function') {
    offsetAfter = params.slidesOffsetAfter.call(swiper);
  }

  var previousSnapGridLength = swiper.snapGrid.length;
  var previousSlidesGridLength = swiper.slidesGrid.length;
  var spaceBetween = params.spaceBetween;
  var slidePosition = -offsetBefore;
  var prevSlideSize = 0;
  var index = 0;

  if (typeof swiperSize === 'undefined') {
    return;
  }

  if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
    spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * swiperSize;
  }

  swiper.virtualSize = -spaceBetween; // reset margins

  if (rtl) slides.css({
    marginLeft: '',
    marginBottom: '',
    marginTop: ''
  });else slides.css({
    marginRight: '',
    marginBottom: '',
    marginTop: ''
  });
  var slidesNumberEvenToRows;

  if (params.slidesPerColumn > 1) {
    if (Math.floor(slidesLength / params.slidesPerColumn) === slidesLength / swiper.params.slidesPerColumn) {
      slidesNumberEvenToRows = slidesLength;
    } else {
      slidesNumberEvenToRows = Math.ceil(slidesLength / params.slidesPerColumn) * params.slidesPerColumn;
    }

    if (params.slidesPerView !== 'auto' && params.slidesPerColumnFill === 'row') {
      slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, params.slidesPerView * params.slidesPerColumn);
    }
  } // Calc slides


  var slideSize;
  var slidesPerColumn = params.slidesPerColumn;
  var slidesPerRow = slidesNumberEvenToRows / slidesPerColumn;
  var numFullColumns = Math.floor(slidesLength / params.slidesPerColumn);

  for (var i = 0; i < slidesLength; i += 1) {
    slideSize = 0;
    var slide = slides.eq(i);

    if (params.slidesPerColumn > 1) {
      // Set slides order
      var newSlideOrderIndex = void 0;
      var column = void 0;
      var row = void 0;

      if (params.slidesPerColumnFill === 'row' && params.slidesPerGroup > 1) {
        var groupIndex = Math.floor(i / (params.slidesPerGroup * params.slidesPerColumn));
        var slideIndexInGroup = i - params.slidesPerColumn * params.slidesPerGroup * groupIndex;
        var columnsInGroup = groupIndex === 0 ? params.slidesPerGroup : Math.min(Math.ceil((slidesLength - groupIndex * slidesPerColumn * params.slidesPerGroup) / slidesPerColumn), params.slidesPerGroup);
        row = Math.floor(slideIndexInGroup / columnsInGroup);
        column = slideIndexInGroup - row * columnsInGroup + groupIndex * params.slidesPerGroup;
        newSlideOrderIndex = column + row * slidesNumberEvenToRows / slidesPerColumn;
        slide.css({
          '-webkit-box-ordinal-group': newSlideOrderIndex,
          '-moz-box-ordinal-group': newSlideOrderIndex,
          '-ms-flex-order': newSlideOrderIndex,
          '-webkit-order': newSlideOrderIndex,
          order: newSlideOrderIndex
        });
      } else if (params.slidesPerColumnFill === 'column') {
        column = Math.floor(i / slidesPerColumn);
        row = i - column * slidesPerColumn;

        if (column > numFullColumns || column === numFullColumns && row === slidesPerColumn - 1) {
          row += 1;

          if (row >= slidesPerColumn) {
            row = 0;
            column += 1;
          }
        }
      } else {
        row = Math.floor(i / slidesPerRow);
        column = i - row * slidesPerRow;
      }

      slide.css(getDirectionLabel('margin-top'), row !== 0 ? params.spaceBetween && params.spaceBetween + "px" : '');
    }

    if (slide.css('display') === 'none') continue; // eslint-disable-line

    if (params.slidesPerView === 'auto') {
      var slideStyles = getComputedStyle(slide[0]);
      var currentTransform = slide[0].style.transform;
      var currentWebKitTransform = slide[0].style.webkitTransform;

      if (currentTransform) {
        slide[0].style.transform = 'none';
      }

      if (currentWebKitTransform) {
        slide[0].style.webkitTransform = 'none';
      }

      if (params.roundLengths) {
        slideSize = swiper.isHorizontal() ? slide.outerWidth(true) : slide.outerHeight(true);
      } else {
        // eslint-disable-next-line
        var width = getDirectionPropertyValue(slideStyles, 'width');
        var paddingLeft = getDirectionPropertyValue(slideStyles, 'padding-left');
        var paddingRight = getDirectionPropertyValue(slideStyles, 'padding-right');
        var marginLeft = getDirectionPropertyValue(slideStyles, 'margin-left');
        var marginRight = getDirectionPropertyValue(slideStyles, 'margin-right');
        var boxSizing = slideStyles.getPropertyValue('box-sizing');

        if (boxSizing && boxSizing === 'border-box') {
          slideSize = width + marginLeft + marginRight;
        } else {
          var _slide$ = slide[0],
              clientWidth = _slide$.clientWidth,
              offsetWidth = _slide$.offsetWidth;
          slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
        }
      }

      if (currentTransform) {
        slide[0].style.transform = currentTransform;
      }

      if (currentWebKitTransform) {
        slide[0].style.webkitTransform = currentWebKitTransform;
      }

      if (params.roundLengths) slideSize = Math.floor(slideSize);
    } else {
      slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
      if (params.roundLengths) slideSize = Math.floor(slideSize);

      if (slides[i]) {
        slides[i].style[getDirectionLabel('width')] = slideSize + "px";
      }
    }

    if (slides[i]) {
      slides[i].swiperSlideSize = slideSize;
    }

    slidesSizesGrid.push(slideSize);

    if (params.centeredSlides) {
      slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
      if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
      if (i === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
      if (Math.abs(slidePosition) < 1 / 1000) slidePosition = 0;
      if (params.roundLengths) slidePosition = Math.floor(slidePosition);
      if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
      slidesGrid.push(slidePosition);
    } else {
      if (params.roundLengths) slidePosition = Math.floor(slidePosition);
      if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
      slidesGrid.push(slidePosition);
      slidePosition = slidePosition + slideSize + spaceBetween;
    }

    swiper.virtualSize += slideSize + spaceBetween;
    prevSlideSize = slideSize;
    index += 1;
  }

  swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
  var newSlidesGrid;

  if (rtl && wrongRTL && (params.effect === 'slide' || params.effect === 'coverflow')) {
    $wrapperEl.css({
      width: swiper.virtualSize + params.spaceBetween + "px"
    });
  }

  if (params.setWrapperSize) {
    var _$wrapperEl$css;

    $wrapperEl.css((_$wrapperEl$css = {}, _$wrapperEl$css[getDirectionLabel('width')] = swiper.virtualSize + params.spaceBetween + "px", _$wrapperEl$css));
  }

  if (params.slidesPerColumn > 1) {
    var _$wrapperEl$css2;

    swiper.virtualSize = (slideSize + params.spaceBetween) * slidesNumberEvenToRows;
    swiper.virtualSize = Math.ceil(swiper.virtualSize / params.slidesPerColumn) - params.spaceBetween;
    $wrapperEl.css((_$wrapperEl$css2 = {}, _$wrapperEl$css2[getDirectionLabel('width')] = swiper.virtualSize + params.spaceBetween + "px", _$wrapperEl$css2));

    if (params.centeredSlides) {
      newSlidesGrid = [];

      for (var _i = 0; _i < snapGrid.length; _i += 1) {
        var slidesGridItem = snapGrid[_i];
        if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
        if (snapGrid[_i] < swiper.virtualSize + snapGrid[0]) newSlidesGrid.push(slidesGridItem);
      }

      snapGrid = newSlidesGrid;
    }
  } // Remove last grid elements depending on width


  if (!params.centeredSlides) {
    newSlidesGrid = [];

    for (var _i2 = 0; _i2 < snapGrid.length; _i2 += 1) {
      var _slidesGridItem = snapGrid[_i2];
      if (params.roundLengths) _slidesGridItem = Math.floor(_slidesGridItem);

      if (snapGrid[_i2] <= swiper.virtualSize - swiperSize) {
        newSlidesGrid.push(_slidesGridItem);
      }
    }

    snapGrid = newSlidesGrid;

    if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
      snapGrid.push(swiper.virtualSize - swiperSize);
    }
  }

  if (snapGrid.length === 0) snapGrid = [0];

  if (params.spaceBetween !== 0) {
    var _slides$filter$css;

    var key = swiper.isHorizontal() && rtl ? 'marginLeft' : getDirectionLabel('marginRight');
    slides.filter(function (_, slideIndex) {
      if (!params.cssMode) return true;

      if (slideIndex === slides.length - 1) {
        return false;
      }

      return true;
    }).css((_slides$filter$css = {}, _slides$filter$css[key] = spaceBetween + "px", _slides$filter$css));
  }

  if (params.centeredSlides && params.centeredSlidesBounds) {
    var allSlidesSize = 0;
    slidesSizesGrid.forEach(function (slideSizeValue) {
      allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
    });
    allSlidesSize -= params.spaceBetween;
    var maxSnap = allSlidesSize - swiperSize;
    snapGrid = snapGrid.map(function (snap) {
      if (snap < 0) return -offsetBefore;
      if (snap > maxSnap) return maxSnap + offsetAfter;
      return snap;
    });
  }

  if (params.centerInsufficientSlides) {
    var _allSlidesSize = 0;
    slidesSizesGrid.forEach(function (slideSizeValue) {
      _allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
    });
    _allSlidesSize -= params.spaceBetween;

    if (_allSlidesSize < swiperSize) {
      var allSlidesOffset = (swiperSize - _allSlidesSize) / 2;
      snapGrid.forEach(function (snap, snapIndex) {
        snapGrid[snapIndex] = snap - allSlidesOffset;
      });
      slidesGrid.forEach(function (snap, snapIndex) {
        slidesGrid[snapIndex] = snap + allSlidesOffset;
      });
    }
  }

  (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.extend)(swiper, {
    slides: slides,
    snapGrid: snapGrid,
    slidesGrid: slidesGrid,
    slidesSizesGrid: slidesSizesGrid
  });

  if (slidesLength !== previousSlidesLength) {
    swiper.emit('slidesLengthChange');
  }

  if (snapGrid.length !== previousSnapGridLength) {
    if (swiper.params.watchOverflow) swiper.checkOverflow();
    swiper.emit('snapGridLengthChange');
  }

  if (slidesGrid.length !== previousSlidesGridLength) {
    swiper.emit('slidesGridLengthChange');
  }

  if (params.watchSlidesProgress || params.watchSlidesVisibility) {
    swiper.updateSlidesOffset();
  }
}

/***/ }),

/***/ "../node_modules/swiper/esm/components/core/update/updateSlidesClasses.js":
/*!********************************************************************************!*\
  !*** ../node_modules/swiper/esm/components/core/update/updateSlidesClasses.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ updateSlidesClasses)
/* harmony export */ });
function updateSlidesClasses() {
  var swiper = this;
  var slides = swiper.slides,
      params = swiper.params,
      $wrapperEl = swiper.$wrapperEl,
      activeIndex = swiper.activeIndex,
      realIndex = swiper.realIndex;
  var isVirtual = swiper.virtual && params.virtual.enabled;
  slides.removeClass(params.slideActiveClass + " " + params.slideNextClass + " " + params.slidePrevClass + " " + params.slideDuplicateActiveClass + " " + params.slideDuplicateNextClass + " " + params.slideDuplicatePrevClass);
  var activeSlide;

  if (isVirtual) {
    activeSlide = swiper.$wrapperEl.find("." + params.slideClass + "[data-swiper-slide-index=\"" + activeIndex + "\"]");
  } else {
    activeSlide = slides.eq(activeIndex);
  } // Active classes


  activeSlide.addClass(params.slideActiveClass);

  if (params.loop) {
    // Duplicate to all looped slides
    if (activeSlide.hasClass(params.slideDuplicateClass)) {
      $wrapperEl.children("." + params.slideClass + ":not(." + params.slideDuplicateClass + ")[data-swiper-slide-index=\"" + realIndex + "\"]").addClass(params.slideDuplicateActiveClass);
    } else {
      $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass + "[data-swiper-slide-index=\"" + realIndex + "\"]").addClass(params.slideDuplicateActiveClass);
    }
  } // Next Slide


  var nextSlide = activeSlide.nextAll("." + params.slideClass).eq(0).addClass(params.slideNextClass);

  if (params.loop && nextSlide.length === 0) {
    nextSlide = slides.eq(0);
    nextSlide.addClass(params.slideNextClass);
  } // Prev Slide


  var prevSlide = activeSlide.prevAll("." + params.slideClass).eq(0).addClass(params.slidePrevClass);

  if (params.loop && prevSlide.length === 0) {
    prevSlide = slides.eq(-1);
    prevSlide.addClass(params.slidePrevClass);
  }

  if (params.loop) {
    // Duplicate to all looped slides
    if (nextSlide.hasClass(params.slideDuplicateClass)) {
      $wrapperEl.children("." + params.slideClass + ":not(." + params.slideDuplicateClass + ")[data-swiper-slide-index=\"" + nextSlide.attr('data-swiper-slide-index') + "\"]").addClass(params.slideDuplicateNextClass);
    } else {
      $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass + "[data-swiper-slide-index=\"" + nextSlide.attr('data-swiper-slide-index') + "\"]").addClass(params.slideDuplicateNextClass);
    }

    if (prevSlide.hasClass(params.slideDuplicateClass)) {
      $wrapperEl.children("." + params.slideClass + ":not(." + params.slideDuplicateClass + ")[data-swiper-slide-index=\"" + prevSlide.attr('data-swiper-slide-index') + "\"]").addClass(params.slideDuplicatePrevClass);
    } else {
      $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass + "[data-swiper-slide-index=\"" + prevSlide.attr('data-swiper-slide-index') + "\"]").addClass(params.slideDuplicatePrevClass);
    }
  }

  swiper.emitSlidesClasses();
}

/***/ }),

/***/ "../node_modules/swiper/esm/components/core/update/updateSlidesOffset.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/swiper/esm/components/core/update/updateSlidesOffset.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ updateSlidesOffset)
/* harmony export */ });
function updateSlidesOffset() {
  var swiper = this;
  var slides = swiper.slides;

  for (var i = 0; i < slides.length; i += 1) {
    slides[i].swiperSlideOffset = swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop;
  }
}

/***/ }),

/***/ "../node_modules/swiper/esm/components/core/update/updateSlidesProgress.js":
/*!*********************************************************************************!*\
  !*** ../node_modules/swiper/esm/components/core/update/updateSlidesProgress.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ updateSlidesProgress)
/* harmony export */ });
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/dom */ "../node_modules/swiper/esm/utils/dom.js");

function updateSlidesProgress(translate) {
  if (translate === void 0) {
    translate = this && this.translate || 0;
  }

  var swiper = this;
  var params = swiper.params;
  var slides = swiper.slides,
      rtl = swiper.rtlTranslate;
  if (slides.length === 0) return;
  if (typeof slides[0].swiperSlideOffset === 'undefined') swiper.updateSlidesOffset();
  var offsetCenter = -translate;
  if (rtl) offsetCenter = translate; // Visible Slides

  slides.removeClass(params.slideVisibleClass);
  swiper.visibleSlidesIndexes = [];
  swiper.visibleSlides = [];

  for (var i = 0; i < slides.length; i += 1) {
    var slide = slides[i];
    var slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slide.swiperSlideOffset) / (slide.swiperSlideSize + params.spaceBetween);

    if (params.watchSlidesVisibility || params.centeredSlides && params.autoHeight) {
      var slideBefore = -(offsetCenter - slide.swiperSlideOffset);
      var slideAfter = slideBefore + swiper.slidesSizesGrid[i];
      var isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;

      if (isVisible) {
        swiper.visibleSlides.push(slide);
        swiper.visibleSlidesIndexes.push(i);
        slides.eq(i).addClass(params.slideVisibleClass);
      }
    }

    slide.progress = rtl ? -slideProgress : slideProgress;
  }

  swiper.visibleSlides = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.default)(swiper.visibleSlides);
}

/***/ }),

/***/ "../node_modules/swiper/esm/components/navigation/navigation.js":
/*!**********************************************************************!*\
  !*** ../node_modules/swiper/esm/components/navigation/navigation.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/dom */ "../node_modules/swiper/esm/utils/dom.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/utils */ "../node_modules/swiper/esm/utils/utils.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var Navigation = {
  toggleEl: function toggleEl($el, disabled) {
    $el[disabled ? 'addClass' : 'removeClass'](this.params.navigation.disabledClass);
    if ($el[0] && $el[0].tagName === 'BUTTON') $el[0].disabled = disabled;
  },
  update: function update() {
    // Update Navigation Buttons
    var swiper = this;
    var params = swiper.params.navigation;
    var toggleEl = swiper.navigation.toggleEl;
    if (swiper.params.loop) return;
    var _swiper$navigation = swiper.navigation,
        $nextEl = _swiper$navigation.$nextEl,
        $prevEl = _swiper$navigation.$prevEl;

    if ($prevEl && $prevEl.length > 0) {
      if (swiper.isBeginning) {
        toggleEl($prevEl, true);
      } else {
        toggleEl($prevEl, false);
      }

      if (swiper.params.watchOverflow && swiper.enabled) {
        $prevEl[swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
      }
    }

    if ($nextEl && $nextEl.length > 0) {
      if (swiper.isEnd) {
        toggleEl($nextEl, true);
      } else {
        toggleEl($nextEl, false);
      }

      if (swiper.params.watchOverflow && swiper.enabled) {
        $nextEl[swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
      }
    }
  },
  onPrevClick: function onPrevClick(e) {
    var swiper = this;
    e.preventDefault();
    if (swiper.isBeginning && !swiper.params.loop) return;
    swiper.slidePrev();
  },
  onNextClick: function onNextClick(e) {
    var swiper = this;
    e.preventDefault();
    if (swiper.isEnd && !swiper.params.loop) return;
    swiper.slideNext();
  },
  init: function init() {
    var swiper = this;
    var params = swiper.params.navigation;
    swiper.params.navigation = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.createElementIfNotDefined)(swiper.$el, swiper.params.navigation, swiper.params.createElements, {
      nextEl: 'swiper-button-next',
      prevEl: 'swiper-button-prev'
    });
    if (!(params.nextEl || params.prevEl)) return;
    var $nextEl;
    var $prevEl;

    if (params.nextEl) {
      $nextEl = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.default)(params.nextEl);

      if (swiper.params.uniqueNavElements && typeof params.nextEl === 'string' && $nextEl.length > 1 && swiper.$el.find(params.nextEl).length === 1) {
        $nextEl = swiper.$el.find(params.nextEl);
      }
    }

    if (params.prevEl) {
      $prevEl = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.default)(params.prevEl);

      if (swiper.params.uniqueNavElements && typeof params.prevEl === 'string' && $prevEl.length > 1 && swiper.$el.find(params.prevEl).length === 1) {
        $prevEl = swiper.$el.find(params.prevEl);
      }
    }

    if ($nextEl && $nextEl.length > 0) {
      $nextEl.on('click', swiper.navigation.onNextClick);
    }

    if ($prevEl && $prevEl.length > 0) {
      $prevEl.on('click', swiper.navigation.onPrevClick);
    }

    (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.extend)(swiper.navigation, {
      $nextEl: $nextEl,
      nextEl: $nextEl && $nextEl[0],
      $prevEl: $prevEl,
      prevEl: $prevEl && $prevEl[0]
    });

    if (!swiper.enabled) {
      if ($nextEl) $nextEl.addClass(params.lockClass);
      if ($prevEl) $prevEl.addClass(params.lockClass);
    }
  },
  destroy: function destroy() {
    var swiper = this;
    var _swiper$navigation2 = swiper.navigation,
        $nextEl = _swiper$navigation2.$nextEl,
        $prevEl = _swiper$navigation2.$prevEl;

    if ($nextEl && $nextEl.length) {
      $nextEl.off('click', swiper.navigation.onNextClick);
      $nextEl.removeClass(swiper.params.navigation.disabledClass);
    }

    if ($prevEl && $prevEl.length) {
      $prevEl.off('click', swiper.navigation.onPrevClick);
      $prevEl.removeClass(swiper.params.navigation.disabledClass);
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'navigation',
  params: {
    navigation: {
      nextEl: null,
      prevEl: null,
      hideOnClick: false,
      disabledClass: 'swiper-button-disabled',
      hiddenClass: 'swiper-button-hidden',
      lockClass: 'swiper-button-lock'
    }
  },
  create: function create() {
    var swiper = this;
    (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.bindModuleMethods)(swiper, {
      navigation: _extends({}, Navigation)
    });
  },
  on: {
    init: function init(swiper) {
      swiper.navigation.init();
      swiper.navigation.update();
    },
    toEdge: function toEdge(swiper) {
      swiper.navigation.update();
    },
    fromEdge: function fromEdge(swiper) {
      swiper.navigation.update();
    },
    destroy: function destroy(swiper) {
      swiper.navigation.destroy();
    },
    'enable disable': function enableDisable(swiper) {
      var _swiper$navigation3 = swiper.navigation,
          $nextEl = _swiper$navigation3.$nextEl,
          $prevEl = _swiper$navigation3.$prevEl;

      if ($nextEl) {
        $nextEl[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.navigation.lockClass);
      }

      if ($prevEl) {
        $prevEl[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.navigation.lockClass);
      }
    },
    click: function click(swiper, e) {
      var _swiper$navigation4 = swiper.navigation,
          $nextEl = _swiper$navigation4.$nextEl,
          $prevEl = _swiper$navigation4.$prevEl;
      var targetEl = e.target;

      if (swiper.params.navigation.hideOnClick && !(0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.default)(targetEl).is($prevEl) && !(0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.default)(targetEl).is($nextEl)) {
        if (swiper.pagination && swiper.params.pagination && swiper.params.pagination.clickable && (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl))) return;
        var isHidden;

        if ($nextEl) {
          isHidden = $nextEl.hasClass(swiper.params.navigation.hiddenClass);
        } else if ($prevEl) {
          isHidden = $prevEl.hasClass(swiper.params.navigation.hiddenClass);
        }

        if (isHidden === true) {
          swiper.emit('navigationShow');
        } else {
          swiper.emit('navigationHide');
        }

        if ($nextEl) {
          $nextEl.toggleClass(swiper.params.navigation.hiddenClass);
        }

        if ($prevEl) {
          $prevEl.toggleClass(swiper.params.navigation.hiddenClass);
        }
      }
    }
  }
});

/***/ }),

/***/ "../node_modules/swiper/esm/components/pagination/pagination.js":
/*!**********************************************************************!*\
  !*** ../node_modules/swiper/esm/components/pagination/pagination.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/dom */ "../node_modules/swiper/esm/utils/dom.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/utils */ "../node_modules/swiper/esm/utils/utils.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var Pagination = {
  update: function update() {
    // Render || Update Pagination bullets/items
    var swiper = this;
    var rtl = swiper.rtl;
    var params = swiper.params.pagination;
    if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) return;
    var slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
    var $el = swiper.pagination.$el; // Current/Total

    var current;
    var total = swiper.params.loop ? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;

    if (swiper.params.loop) {
      current = Math.ceil((swiper.activeIndex - swiper.loopedSlides) / swiper.params.slidesPerGroup);

      if (current > slidesLength - 1 - swiper.loopedSlides * 2) {
        current -= slidesLength - swiper.loopedSlides * 2;
      }

      if (current > total - 1) current -= total;
      if (current < 0 && swiper.params.paginationType !== 'bullets') current = total + current;
    } else if (typeof swiper.snapIndex !== 'undefined') {
      current = swiper.snapIndex;
    } else {
      current = swiper.activeIndex || 0;
    } // Types


    if (params.type === 'bullets' && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
      var bullets = swiper.pagination.bullets;
      var firstIndex;
      var lastIndex;
      var midIndex;

      if (params.dynamicBullets) {
        swiper.pagination.bulletSize = bullets.eq(0)[swiper.isHorizontal() ? 'outerWidth' : 'outerHeight'](true);
        $el.css(swiper.isHorizontal() ? 'width' : 'height', swiper.pagination.bulletSize * (params.dynamicMainBullets + 4) + "px");

        if (params.dynamicMainBullets > 1 && swiper.previousIndex !== undefined) {
          swiper.pagination.dynamicBulletIndex += current - swiper.previousIndex;

          if (swiper.pagination.dynamicBulletIndex > params.dynamicMainBullets - 1) {
            swiper.pagination.dynamicBulletIndex = params.dynamicMainBullets - 1;
          } else if (swiper.pagination.dynamicBulletIndex < 0) {
            swiper.pagination.dynamicBulletIndex = 0;
          }
        }

        firstIndex = current - swiper.pagination.dynamicBulletIndex;
        lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
        midIndex = (lastIndex + firstIndex) / 2;
      }

      bullets.removeClass(params.bulletActiveClass + " " + params.bulletActiveClass + "-next " + params.bulletActiveClass + "-next-next " + params.bulletActiveClass + "-prev " + params.bulletActiveClass + "-prev-prev " + params.bulletActiveClass + "-main");

      if ($el.length > 1) {
        bullets.each(function (bullet) {
          var $bullet = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.default)(bullet);
          var bulletIndex = $bullet.index();

          if (bulletIndex === current) {
            $bullet.addClass(params.bulletActiveClass);
          }

          if (params.dynamicBullets) {
            if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {
              $bullet.addClass(params.bulletActiveClass + "-main");
            }

            if (bulletIndex === firstIndex) {
              $bullet.prev().addClass(params.bulletActiveClass + "-prev").prev().addClass(params.bulletActiveClass + "-prev-prev");
            }

            if (bulletIndex === lastIndex) {
              $bullet.next().addClass(params.bulletActiveClass + "-next").next().addClass(params.bulletActiveClass + "-next-next");
            }
          }
        });
      } else {
        var $bullet = bullets.eq(current);
        var bulletIndex = $bullet.index();
        $bullet.addClass(params.bulletActiveClass);

        if (params.dynamicBullets) {
          var $firstDisplayedBullet = bullets.eq(firstIndex);
          var $lastDisplayedBullet = bullets.eq(lastIndex);

          for (var i = firstIndex; i <= lastIndex; i += 1) {
            bullets.eq(i).addClass(params.bulletActiveClass + "-main");
          }

          if (swiper.params.loop) {
            if (bulletIndex >= bullets.length - params.dynamicMainBullets) {
              for (var _i = params.dynamicMainBullets; _i >= 0; _i -= 1) {
                bullets.eq(bullets.length - _i).addClass(params.bulletActiveClass + "-main");
              }

              bullets.eq(bullets.length - params.dynamicMainBullets - 1).addClass(params.bulletActiveClass + "-prev");
            } else {
              $firstDisplayedBullet.prev().addClass(params.bulletActiveClass + "-prev").prev().addClass(params.bulletActiveClass + "-prev-prev");
              $lastDisplayedBullet.next().addClass(params.bulletActiveClass + "-next").next().addClass(params.bulletActiveClass + "-next-next");
            }
          } else {
            $firstDisplayedBullet.prev().addClass(params.bulletActiveClass + "-prev").prev().addClass(params.bulletActiveClass + "-prev-prev");
            $lastDisplayedBullet.next().addClass(params.bulletActiveClass + "-next").next().addClass(params.bulletActiveClass + "-next-next");
          }
        }
      }

      if (params.dynamicBullets) {
        var dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
        var bulletsOffset = (swiper.pagination.bulletSize * dynamicBulletsLength - swiper.pagination.bulletSize) / 2 - midIndex * swiper.pagination.bulletSize;
        var offsetProp = rtl ? 'right' : 'left';
        bullets.css(swiper.isHorizontal() ? offsetProp : 'top', bulletsOffset + "px");
      }
    }

    if (params.type === 'fraction') {
      $el.find((0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.classesToSelector)(params.currentClass)).text(params.formatFractionCurrent(current + 1));
      $el.find((0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.classesToSelector)(params.totalClass)).text(params.formatFractionTotal(total));
    }

    if (params.type === 'progressbar') {
      var progressbarDirection;

      if (params.progressbarOpposite) {
        progressbarDirection = swiper.isHorizontal() ? 'vertical' : 'horizontal';
      } else {
        progressbarDirection = swiper.isHorizontal() ? 'horizontal' : 'vertical';
      }

      var scale = (current + 1) / total;
      var scaleX = 1;
      var scaleY = 1;

      if (progressbarDirection === 'horizontal') {
        scaleX = scale;
      } else {
        scaleY = scale;
      }

      $el.find((0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.classesToSelector)(params.progressbarFillClass)).transform("translate3d(0,0,0) scaleX(" + scaleX + ") scaleY(" + scaleY + ")").transition(swiper.params.speed);
    }

    if (params.type === 'custom' && params.renderCustom) {
      $el.html(params.renderCustom(swiper, current + 1, total));
      swiper.emit('paginationRender', $el[0]);
    } else {
      swiper.emit('paginationUpdate', $el[0]);
    }

    if (swiper.params.watchOverflow && swiper.enabled) {
      $el[swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
    }
  },
  render: function render() {
    // Render Container
    var swiper = this;
    var params = swiper.params.pagination;
    if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) return;
    var slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
    var $el = swiper.pagination.$el;
    var paginationHTML = '';

    if (params.type === 'bullets') {
      var numberOfBullets = swiper.params.loop ? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;

      if (swiper.params.freeMode && !swiper.params.loop && numberOfBullets > slidesLength) {
        numberOfBullets = slidesLength;
      }

      for (var i = 0; i < numberOfBullets; i += 1) {
        if (params.renderBullet) {
          paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass);
        } else {
          paginationHTML += "<" + params.bulletElement + " class=\"" + params.bulletClass + "\"></" + params.bulletElement + ">";
        }
      }

      $el.html(paginationHTML);
      swiper.pagination.bullets = $el.find((0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.classesToSelector)(params.bulletClass));
    }

    if (params.type === 'fraction') {
      if (params.renderFraction) {
        paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
      } else {
        paginationHTML = "<span class=\"" + params.currentClass + "\"></span>" + ' / ' + ("<span class=\"" + params.totalClass + "\"></span>");
      }

      $el.html(paginationHTML);
    }

    if (params.type === 'progressbar') {
      if (params.renderProgressbar) {
        paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);
      } else {
        paginationHTML = "<span class=\"" + params.progressbarFillClass + "\"></span>";
      }

      $el.html(paginationHTML);
    }

    if (params.type !== 'custom') {
      swiper.emit('paginationRender', swiper.pagination.$el[0]);
    }
  },
  init: function init() {
    var swiper = this;
    swiper.params.pagination = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.createElementIfNotDefined)(swiper.$el, swiper.params.pagination, swiper.params.createElements, {
      el: 'swiper-pagination'
    });
    var params = swiper.params.pagination;
    if (!params.el) return;
    var $el = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.default)(params.el);
    if ($el.length === 0) return;

    if (swiper.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1) {
      $el = swiper.$el.find(params.el);
    }

    if (params.type === 'bullets' && params.clickable) {
      $el.addClass(params.clickableClass);
    }

    $el.addClass(params.modifierClass + params.type);

    if (params.type === 'bullets' && params.dynamicBullets) {
      $el.addClass("" + params.modifierClass + params.type + "-dynamic");
      swiper.pagination.dynamicBulletIndex = 0;

      if (params.dynamicMainBullets < 1) {
        params.dynamicMainBullets = 1;
      }
    }

    if (params.type === 'progressbar' && params.progressbarOpposite) {
      $el.addClass(params.progressbarOppositeClass);
    }

    if (params.clickable) {
      $el.on('click', (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.classesToSelector)(params.bulletClass), function onClick(e) {
        e.preventDefault();
        var index = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.default)(this).index() * swiper.params.slidesPerGroup;
        if (swiper.params.loop) index += swiper.loopedSlides;
        swiper.slideTo(index);
      });
    }

    (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.extend)(swiper.pagination, {
      $el: $el,
      el: $el[0]
    });

    if (!swiper.enabled) {
      $el.addClass(params.lockClass);
    }
  },
  destroy: function destroy() {
    var swiper = this;
    var params = swiper.params.pagination;
    if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) return;
    var $el = swiper.pagination.$el;
    $el.removeClass(params.hiddenClass);
    $el.removeClass(params.modifierClass + params.type);
    if (swiper.pagination.bullets) swiper.pagination.bullets.removeClass(params.bulletActiveClass);

    if (params.clickable) {
      $el.off('click', (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.classesToSelector)(params.bulletClass));
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'pagination',
  params: {
    pagination: {
      el: null,
      bulletElement: 'span',
      clickable: false,
      hideOnClick: false,
      renderBullet: null,
      renderProgressbar: null,
      renderFraction: null,
      renderCustom: null,
      progressbarOpposite: false,
      type: 'bullets',
      // 'bullets' or 'progressbar' or 'fraction' or 'custom'
      dynamicBullets: false,
      dynamicMainBullets: 1,
      formatFractionCurrent: function formatFractionCurrent(number) {
        return number;
      },
      formatFractionTotal: function formatFractionTotal(number) {
        return number;
      },
      bulletClass: 'swiper-pagination-bullet',
      bulletActiveClass: 'swiper-pagination-bullet-active',
      modifierClass: 'swiper-pagination-',
      // NEW
      currentClass: 'swiper-pagination-current',
      totalClass: 'swiper-pagination-total',
      hiddenClass: 'swiper-pagination-hidden',
      progressbarFillClass: 'swiper-pagination-progressbar-fill',
      progressbarOppositeClass: 'swiper-pagination-progressbar-opposite',
      clickableClass: 'swiper-pagination-clickable',
      // NEW
      lockClass: 'swiper-pagination-lock'
    }
  },
  create: function create() {
    var swiper = this;
    (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.bindModuleMethods)(swiper, {
      pagination: _extends({
        dynamicBulletIndex: 0
      }, Pagination)
    });
  },
  on: {
    init: function init(swiper) {
      swiper.pagination.init();
      swiper.pagination.render();
      swiper.pagination.update();
    },
    activeIndexChange: function activeIndexChange(swiper) {
      if (swiper.params.loop) {
        swiper.pagination.update();
      } else if (typeof swiper.snapIndex === 'undefined') {
        swiper.pagination.update();
      }
    },
    snapIndexChange: function snapIndexChange(swiper) {
      if (!swiper.params.loop) {
        swiper.pagination.update();
      }
    },
    slidesLengthChange: function slidesLengthChange(swiper) {
      if (swiper.params.loop) {
        swiper.pagination.render();
        swiper.pagination.update();
      }
    },
    snapGridLengthChange: function snapGridLengthChange(swiper) {
      if (!swiper.params.loop) {
        swiper.pagination.render();
        swiper.pagination.update();
      }
    },
    destroy: function destroy(swiper) {
      swiper.pagination.destroy();
    },
    'enable disable': function enableDisable(swiper) {
      var $el = swiper.pagination.$el;

      if ($el) {
        $el[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.pagination.lockClass);
      }
    },
    click: function click(swiper, e) {
      var targetEl = e.target;

      if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && swiper.pagination.$el.length > 0 && !(0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.default)(targetEl).hasClass(swiper.params.pagination.bulletClass)) {
        if (swiper.navigation && (swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl || swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl)) return;
        var isHidden = swiper.pagination.$el.hasClass(swiper.params.pagination.hiddenClass);

        if (isHidden === true) {
          swiper.emit('paginationShow');
        } else {
          swiper.emit('paginationHide');
        }

        swiper.pagination.$el.toggleClass(swiper.params.pagination.hiddenClass);
      }
    }
  }
});

/***/ }),

/***/ "../node_modules/swiper/esm/modules/observer/observer.js":
/*!***************************************************************!*\
  !*** ../node_modules/swiper/esm/modules/observer/observer.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "../node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/utils */ "../node_modules/swiper/esm/utils/utils.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var Observer = {
  attach: function attach(target, options) {
    if (options === void 0) {
      options = {};
    }

    var window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
    var swiper = this;
    var ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
    var observer = new ObserverFunc(function (mutations) {
      // The observerUpdate event should only be triggered
      // once despite the number of mutations.  Additional
      // triggers are redundant and are very costly
      if (mutations.length === 1) {
        swiper.emit('observerUpdate', mutations[0]);
        return;
      }

      var observerUpdate = function observerUpdate() {
        swiper.emit('observerUpdate', mutations[0]);
      };

      if (window.requestAnimationFrame) {
        window.requestAnimationFrame(observerUpdate);
      } else {
        window.setTimeout(observerUpdate, 0);
      }
    });
    observer.observe(target, {
      attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
      childList: typeof options.childList === 'undefined' ? true : options.childList,
      characterData: typeof options.characterData === 'undefined' ? true : options.characterData
    });
    swiper.observer.observers.push(observer);
  },
  init: function init() {
    var swiper = this;
    if (!swiper.support.observer || !swiper.params.observer) return;

    if (swiper.params.observeParents) {
      var containerParents = swiper.$el.parents();

      for (var i = 0; i < containerParents.length; i += 1) {
        swiper.observer.attach(containerParents[i]);
      }
    } // Observe container


    swiper.observer.attach(swiper.$el[0], {
      childList: swiper.params.observeSlideChildren
    }); // Observe wrapper

    swiper.observer.attach(swiper.$wrapperEl[0], {
      attributes: false
    });
  },
  destroy: function destroy() {
    var swiper = this;
    swiper.observer.observers.forEach(function (observer) {
      observer.disconnect();
    });
    swiper.observer.observers = [];
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'observer',
  params: {
    observer: false,
    observeParents: false,
    observeSlideChildren: false
  },
  create: function create() {
    var swiper = this;
    (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.bindModuleMethods)(swiper, {
      observer: _extends({}, Observer, {
        observers: []
      })
    });
  },
  on: {
    init: function init(swiper) {
      swiper.observer.init();
    },
    destroy: function destroy(swiper) {
      swiper.observer.destroy();
    }
  }
});

/***/ }),

/***/ "../node_modules/swiper/esm/modules/resize/resize.js":
/*!***********************************************************!*\
  !*** ../node_modules/swiper/esm/modules/resize/resize.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "../node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/utils */ "../node_modules/swiper/esm/utils/utils.js");



var supportsResizeObserver = function supportsResizeObserver() {
  var window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  return typeof window.ResizeObserver !== 'undefined';
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'resize',
  create: function create() {
    var swiper = this;
    (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.extend)(swiper, {
      resize: {
        observer: null,
        createObserver: function createObserver() {
          if (!swiper || swiper.destroyed || !swiper.initialized) return;
          swiper.resize.observer = new ResizeObserver(function (entries) {
            var width = swiper.width,
                height = swiper.height;
            var newWidth = width;
            var newHeight = height;
            entries.forEach(function (_ref) {
              var contentBoxSize = _ref.contentBoxSize,
                  contentRect = _ref.contentRect,
                  target = _ref.target;
              if (target && target !== swiper.el) return;
              newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
              newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
            });

            if (newWidth !== width || newHeight !== height) {
              swiper.resize.resizeHandler();
            }
          });
          swiper.resize.observer.observe(swiper.el);
        },
        removeObserver: function removeObserver() {
          if (swiper.resize.observer && swiper.resize.observer.unobserve && swiper.el) {
            swiper.resize.observer.unobserve(swiper.el);
            swiper.resize.observer = null;
          }
        },
        resizeHandler: function resizeHandler() {
          if (!swiper || swiper.destroyed || !swiper.initialized) return;
          swiper.emit('beforeResize');
          swiper.emit('resize');
        },
        orientationChangeHandler: function orientationChangeHandler() {
          if (!swiper || swiper.destroyed || !swiper.initialized) return;
          swiper.emit('orientationchange');
        }
      }
    });
  },
  on: {
    init: function init(swiper) {
      var window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();

      if (swiper.params.resizeObserver && supportsResizeObserver()) {
        swiper.resize.createObserver();
        return;
      } // Emit resize


      window.addEventListener('resize', swiper.resize.resizeHandler); // Emit orientationchange

      window.addEventListener('orientationchange', swiper.resize.orientationChangeHandler);
    },
    destroy: function destroy(swiper) {
      var window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
      swiper.resize.removeObserver();
      window.removeEventListener('resize', swiper.resize.resizeHandler);
      window.removeEventListener('orientationchange', swiper.resize.orientationChangeHandler);
    }
  }
});

/***/ }),

/***/ "../node_modules/swiper/esm/utils/dom.js":
/*!***********************************************!*\
  !*** ../node_modules/swiper/esm/utils/dom.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var dom7__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dom7 */ "../node_modules/dom7/dom7.esm.js");

var Methods = {
  addClass: dom7__WEBPACK_IMPORTED_MODULE_0__.addClass,
  removeClass: dom7__WEBPACK_IMPORTED_MODULE_0__.removeClass,
  hasClass: dom7__WEBPACK_IMPORTED_MODULE_0__.hasClass,
  toggleClass: dom7__WEBPACK_IMPORTED_MODULE_0__.toggleClass,
  attr: dom7__WEBPACK_IMPORTED_MODULE_0__.attr,
  removeAttr: dom7__WEBPACK_IMPORTED_MODULE_0__.removeAttr,
  transform: dom7__WEBPACK_IMPORTED_MODULE_0__.transform,
  transition: dom7__WEBPACK_IMPORTED_MODULE_0__.transition,
  on: dom7__WEBPACK_IMPORTED_MODULE_0__.on,
  off: dom7__WEBPACK_IMPORTED_MODULE_0__.off,
  trigger: dom7__WEBPACK_IMPORTED_MODULE_0__.trigger,
  transitionEnd: dom7__WEBPACK_IMPORTED_MODULE_0__.transitionEnd,
  outerWidth: dom7__WEBPACK_IMPORTED_MODULE_0__.outerWidth,
  outerHeight: dom7__WEBPACK_IMPORTED_MODULE_0__.outerHeight,
  styles: dom7__WEBPACK_IMPORTED_MODULE_0__.styles,
  offset: dom7__WEBPACK_IMPORTED_MODULE_0__.offset,
  css: dom7__WEBPACK_IMPORTED_MODULE_0__.css,
  each: dom7__WEBPACK_IMPORTED_MODULE_0__.each,
  html: dom7__WEBPACK_IMPORTED_MODULE_0__.html,
  text: dom7__WEBPACK_IMPORTED_MODULE_0__.text,
  is: dom7__WEBPACK_IMPORTED_MODULE_0__.is,
  index: dom7__WEBPACK_IMPORTED_MODULE_0__.index,
  eq: dom7__WEBPACK_IMPORTED_MODULE_0__.eq,
  append: dom7__WEBPACK_IMPORTED_MODULE_0__.append,
  prepend: dom7__WEBPACK_IMPORTED_MODULE_0__.prepend,
  next: dom7__WEBPACK_IMPORTED_MODULE_0__.next,
  nextAll: dom7__WEBPACK_IMPORTED_MODULE_0__.nextAll,
  prev: dom7__WEBPACK_IMPORTED_MODULE_0__.prev,
  prevAll: dom7__WEBPACK_IMPORTED_MODULE_0__.prevAll,
  parent: dom7__WEBPACK_IMPORTED_MODULE_0__.parent,
  parents: dom7__WEBPACK_IMPORTED_MODULE_0__.parents,
  closest: dom7__WEBPACK_IMPORTED_MODULE_0__.closest,
  find: dom7__WEBPACK_IMPORTED_MODULE_0__.find,
  children: dom7__WEBPACK_IMPORTED_MODULE_0__.children,
  filter: dom7__WEBPACK_IMPORTED_MODULE_0__.filter,
  remove: dom7__WEBPACK_IMPORTED_MODULE_0__.remove
};
Object.keys(Methods).forEach(function (methodName) {
  Object.defineProperty(dom7__WEBPACK_IMPORTED_MODULE_0__.$.fn, methodName, {
    value: Methods[methodName],
    writable: true
  });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dom7__WEBPACK_IMPORTED_MODULE_0__.$);

/***/ }),

/***/ "../node_modules/swiper/esm/utils/get-browser.js":
/*!*******************************************************!*\
  !*** ../node_modules/swiper/esm/utils/get-browser.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getBrowser": () => (/* binding */ getBrowser)
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "../node_modules/ssr-window/ssr-window.esm.js");

var browser;

function calcBrowser() {
  var window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();

  function isSafari() {
    var ua = window.navigator.userAgent.toLowerCase();
    return ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0;
  }

  return {
    isEdge: !!window.navigator.userAgent.match(/Edge/g),
    isSafari: isSafari(),
    isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent)
  };
}

function getBrowser() {
  if (!browser) {
    browser = calcBrowser();
  }

  return browser;
}



/***/ }),

/***/ "../node_modules/swiper/esm/utils/get-device.js":
/*!******************************************************!*\
  !*** ../node_modules/swiper/esm/utils/get-device.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDevice": () => (/* binding */ getDevice)
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "../node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _get_support__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-support */ "../node_modules/swiper/esm/utils/get-support.js");


var device;

function calcDevice(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      userAgent = _ref.userAgent;

  var support = (0,_get_support__WEBPACK_IMPORTED_MODULE_1__.getSupport)();
  var window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  var platform = window.navigator.platform;
  var ua = userAgent || window.navigator.userAgent;
  var device = {
    ios: false,
    android: false
  };
  var screenWidth = window.screen.width;
  var screenHeight = window.screen.height;
  var android = ua.match(/(Android);?[\s\/]+([\d.]+)?/); // eslint-disable-line

  var ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
  var ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
  var iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
  var windows = platform === 'Win32';
  var macos = platform === 'MacIntel'; // iPadOs 13 fix

  var iPadScreens = ['1024x1366', '1366x1024', '834x1194', '1194x834', '834x1112', '1112x834', '768x1024', '1024x768', '820x1180', '1180x820', '810x1080', '1080x810'];

  if (!ipad && macos && support.touch && iPadScreens.indexOf(screenWidth + "x" + screenHeight) >= 0) {
    ipad = ua.match(/(Version)\/([\d.]+)/);
    if (!ipad) ipad = [0, 1, '13_0_0'];
    macos = false;
  } // Android


  if (android && !windows) {
    device.os = 'android';
    device.android = true;
  }

  if (ipad || iphone || ipod) {
    device.os = 'ios';
    device.ios = true;
  } // Export object


  return device;
}

function getDevice(overrides) {
  if (overrides === void 0) {
    overrides = {};
  }

  if (!device) {
    device = calcDevice(overrides);
  }

  return device;
}



/***/ }),

/***/ "../node_modules/swiper/esm/utils/get-support.js":
/*!*******************************************************!*\
  !*** ../node_modules/swiper/esm/utils/get-support.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getSupport": () => (/* binding */ getSupport)
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "../node_modules/ssr-window/ssr-window.esm.js");

var support;

function calcSupport() {
  var window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  var document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
  return {
    touch: !!('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch),
    pointerEvents: !!window.PointerEvent && 'maxTouchPoints' in window.navigator && window.navigator.maxTouchPoints >= 0,
    observer: function checkObserver() {
      return 'MutationObserver' in window || 'WebkitMutationObserver' in window;
    }(),
    passiveListener: function checkPassiveListener() {
      var supportsPassive = false;

      try {
        var opts = Object.defineProperty({}, 'passive', {
          // eslint-disable-next-line
          get: function get() {
            supportsPassive = true;
          }
        });
        window.addEventListener('testPassiveListener', null, opts);
      } catch (e) {// No support
      }

      return supportsPassive;
    }(),
    gestures: function checkGestures() {
      return 'ongesturestart' in window;
    }()
  };
}

function getSupport() {
  if (!support) {
    support = calcSupport();
  }

  return support;
}



/***/ }),

/***/ "../node_modules/swiper/esm/utils/utils.js":
/*!*************************************************!*\
  !*** ../node_modules/swiper/esm/utils/utils.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deleteProps": () => (/* binding */ deleteProps),
/* harmony export */   "nextTick": () => (/* binding */ nextTick),
/* harmony export */   "now": () => (/* binding */ now),
/* harmony export */   "getTranslate": () => (/* binding */ getTranslate),
/* harmony export */   "isObject": () => (/* binding */ isObject),
/* harmony export */   "extend": () => (/* binding */ extend),
/* harmony export */   "bindModuleMethods": () => (/* binding */ bindModuleMethods),
/* harmony export */   "getComputedStyle": () => (/* binding */ getComputedStyle),
/* harmony export */   "classesToSelector": () => (/* binding */ classesToSelector),
/* harmony export */   "createElementIfNotDefined": () => (/* binding */ createElementIfNotDefined)
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "../node_modules/ssr-window/ssr-window.esm.js");


function deleteProps(obj) {
  var object = obj;
  Object.keys(object).forEach(function (key) {
    try {
      object[key] = null;
    } catch (e) {// no getter for object
    }

    try {
      delete object[key];
    } catch (e) {// something got wrong
    }
  });
}

function nextTick(callback, delay) {
  if (delay === void 0) {
    delay = 0;
  }

  return setTimeout(callback, delay);
}

function now() {
  return Date.now();
}

function getComputedStyle(el) {
  var window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  var style;

  if (window.getComputedStyle) {
    style = window.getComputedStyle(el, null);
  }

  if (!style && el.currentStyle) {
    style = el.currentStyle;
  }

  if (!style) {
    style = el.style;
  }

  return style;
}

function getTranslate(el, axis) {
  if (axis === void 0) {
    axis = 'x';
  }

  var window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  var matrix;
  var curTransform;
  var transformMatrix;
  var curStyle = getComputedStyle(el, null);

  if (window.WebKitCSSMatrix) {
    curTransform = curStyle.transform || curStyle.webkitTransform;

    if (curTransform.split(',').length > 6) {
      curTransform = curTransform.split(', ').map(function (a) {
        return a.replace(',', '.');
      }).join(', ');
    } // Some old versions of Webkit choke when 'none' is passed; pass
    // empty string instead in this case


    transformMatrix = new window.WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
  } else {
    transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
    matrix = transformMatrix.toString().split(',');
  }

  if (axis === 'x') {
    // Latest Chrome and webkits Fix
    if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41; // Crazy IE10 Matrix
    else if (matrix.length === 16) curTransform = parseFloat(matrix[12]); // Normal Browsers
      else curTransform = parseFloat(matrix[4]);
  }

  if (axis === 'y') {
    // Latest Chrome and webkits Fix
    if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42; // Crazy IE10 Matrix
    else if (matrix.length === 16) curTransform = parseFloat(matrix[13]); // Normal Browsers
      else curTransform = parseFloat(matrix[5]);
  }

  return curTransform || 0;
}

function isObject(o) {
  return typeof o === 'object' && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === 'Object';
}

function isNode(node) {
  // eslint-disable-next-line
  if (typeof window !== 'undefined' && typeof window.HTMLElement !== 'undefined') {
    return node instanceof HTMLElement;
  }

  return node && (node.nodeType === 1 || node.nodeType === 11);
}

function extend() {
  var to = Object(arguments.length <= 0 ? undefined : arguments[0]);
  var noExtend = ['__proto__', 'constructor', 'prototype'];

  for (var i = 1; i < arguments.length; i += 1) {
    var nextSource = i < 0 || arguments.length <= i ? undefined : arguments[i];

    if (nextSource !== undefined && nextSource !== null && !isNode(nextSource)) {
      var keysArray = Object.keys(Object(nextSource)).filter(function (key) {
        return noExtend.indexOf(key) < 0;
      });

      for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
        var nextKey = keysArray[nextIndex];
        var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);

        if (desc !== undefined && desc.enumerable) {
          if (isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
            if (nextSource[nextKey].__swiper__) {
              to[nextKey] = nextSource[nextKey];
            } else {
              extend(to[nextKey], nextSource[nextKey]);
            }
          } else if (!isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
            to[nextKey] = {};

            if (nextSource[nextKey].__swiper__) {
              to[nextKey] = nextSource[nextKey];
            } else {
              extend(to[nextKey], nextSource[nextKey]);
            }
          } else {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
    }
  }

  return to;
}

function bindModuleMethods(instance, obj) {
  Object.keys(obj).forEach(function (key) {
    if (isObject(obj[key])) {
      Object.keys(obj[key]).forEach(function (subKey) {
        if (typeof obj[key][subKey] === 'function') {
          obj[key][subKey] = obj[key][subKey].bind(instance);
        }
      });
    }

    instance[key] = obj[key];
  });
}

function classesToSelector(classes) {
  if (classes === void 0) {
    classes = '';
  }

  return "." + classes.trim().replace(/([\.:\/])/g, '\\$1') // eslint-disable-line
  .replace(/ /g, '.');
}

function createElementIfNotDefined($container, params, createElements, checkProps) {
  var document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();

  if (createElements) {
    Object.keys(checkProps).forEach(function (key) {
      if (!params[key] && params.auto === true) {
        var element = document.createElement('div');
        element.className = checkProps[key];
        $container.append(element);
        params[key] = element;
      }
    });
  }

  return params;
}



/***/ }),

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/***/ (() => {

document.addEventListener('DOMContentLoaded', function() {
	//Табы
	document.querySelectorAll('.service-list__link').forEach(function(tabsBtn) {
		tabsBtn.addEventListener('click', function(event) {
			const path = event.currentTarget.dataset.path
	
			document.querySelectorAll('.service-item').forEach(function(tabContent) {
				tabContent.classList.remove('services-item--active')
			})
	
			document.querySelectorAll('.service-list__link').forEach(function(tabContent) {
				tabContent.classList.remove('service-list__link--active')
			})
	
			document.querySelector(`[data-path="${path}"]`).classList.add('service-list__link--active')
			document.querySelector(`[data-target="${path}"]`).classList.add('services-item--active')
			})
		})

	// Кнопки Попап
	document.querySelectorAll('.button-js-open').forEach(function(tabsBtn) {
		tabsBtn.addEventListener('click', function(event) {
			let path = event.currentTarget.dataset.path
			
			document.querySelectorAll('.blok-js-active').forEach(function(tabContent) {
				tabContent.classList.remove('btn--active','btn--menu')
			})
	
			let test = document.querySelector(`[data-target="${path}"]`).getAttribute('data-target')
			
			if (test === 'six-btn') {
				let activeAsaid =	document.querySelector(`[data-target="${path}"]`)
				activeAsaid.classList.add('btn--menu')
			} else {
				let activePopup =	document.querySelector(`[data-target="${path}"]`)
				activePopup.classList.add('btn--active')
			}
			

		})
		document.querySelectorAll('.cps-js-bg').forEach(function(closeElem) {
			closeElem.addEventListener('click', function() {
				document.querySelectorAll('.blok-js-active').forEach(function(tabContent) {
					tabContent.classList.remove('btn--active','btn--menu')
				})
			})
		})
	})


	// Кнопки Показать все
	document.querySelectorAll('.service-brands__link').forEach(function(tabsBtn) {
		tabsBtn.addEventListener('click', function(event) {
			let path = event.currentTarget.dataset.path
				
			let test = document.querySelector(`[data-target="${path}"]`).getAttribute('data-target')
			
			if (test === 'three-allopen') {
				document.querySelector(`[data-target="${path}"]`).classList.toggle('all-open-content--active')
				tabsBtn.classList.toggle('qqoo')
			} else {
				document.querySelector(`[data-target="${path}"]`).classList.toggle('all-open--active')
				tabsBtn.classList.toggle('qqoo')
			}
			})
		})

	// Ссылки Показать все
	document.querySelectorAll('.nav-menu__link').forEach(function(tabsBtn) {
		tabsBtn.addEventListener('click', function() {
			
			document.querySelectorAll('.nav-menu__link').forEach(function(tabContent) {
				tabContent.classList.remove('nav-menu__link--active')
			})

			tabsBtn.classList.add('nav-menu__link--active')
			})
		})
	
})
	






/***/ }),

/***/ "./assets/fonts-icons.css":
/*!********************************!*\
  !*** ./assets/fonts-icons.css ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "78ed35d545d8cb9b72da.css";

/***/ }),

/***/ "./img/jpeg/cps-dest.avif":
/*!********************************!*\
  !*** ./img/jpeg/cps-dest.avif ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "f59d2a8b9b2c51f6d144.avif";

/***/ }),

/***/ "./img/jpeg/cps-dest.jpg":
/*!*******************************!*\
  !*** ./img/jpeg/cps-dest.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "780f32374a43f985aad5.jpg";

/***/ }),

/***/ "./img/jpeg/cps-dest.webp":
/*!********************************!*\
  !*** ./img/jpeg/cps-dest.webp ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "54f7b0b2fe981b946e22.webp";

/***/ }),

/***/ "./img/jpeg/cps-mob.avif":
/*!*******************************!*\
  !*** ./img/jpeg/cps-mob.avif ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "b3dac61eb3d70ee5ca67.avif";

/***/ }),

/***/ "./img/jpeg/cps-mob.jpg":
/*!******************************!*\
  !*** ./img/jpeg/cps-mob.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "debe58c9baee44984e52.jpg";

/***/ }),

/***/ "./img/jpeg/cps-mob.webp":
/*!*******************************!*\
  !*** ./img/jpeg/cps-mob.webp ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "cd6e56ad4ee2f109ca8b.webp";

/***/ }),

/***/ "./img/jpeg/cps-tab.avif":
/*!*******************************!*\
  !*** ./img/jpeg/cps-tab.avif ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "e81be35baabb2ef75dd6.avif";

/***/ }),

/***/ "./img/jpeg/cps-tab.jpg":
/*!******************************!*\
  !*** ./img/jpeg/cps-tab.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "5bb9a38c34e8cf2509d6.jpg";

/***/ }),

/***/ "./img/jpeg/cps-tab.webp":
/*!*******************************!*\
  !*** ./img/jpeg/cps-tab.webp ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "1c3ac63ab19ea7355463.webp";

/***/ }),

/***/ "./img/jpeg/cpse-dest.avif":
/*!*********************************!*\
  !*** ./img/jpeg/cpse-dest.avif ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "92003dac2f694626906d.avif";

/***/ }),

/***/ "./img/jpeg/cpse-dest.webp":
/*!*********************************!*\
  !*** ./img/jpeg/cpse-dest.webp ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "009735a46eeea9688def.webp";

/***/ }),

/***/ "./img/jpeg/cpse-mob.avif":
/*!********************************!*\
  !*** ./img/jpeg/cpse-mob.avif ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "e571ea5cdeae32507648.avif";

/***/ }),

/***/ "./img/jpeg/cpse-mob.jpg":
/*!*******************************!*\
  !*** ./img/jpeg/cpse-mob.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "4669b6f359b8d9a1a5ca.jpg";

/***/ }),

/***/ "./img/jpeg/cpse-mob.webp":
/*!********************************!*\
  !*** ./img/jpeg/cpse-mob.webp ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "920f4b328f8fae2f6259.webp";

/***/ }),

/***/ "./img/jpeg/cpse-tab.avif":
/*!********************************!*\
  !*** ./img/jpeg/cpse-tab.avif ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "56e6f5693944ae4ddffa.avif";

/***/ }),

/***/ "./img/jpeg/cpse-tab.webp":
/*!********************************!*\
  !*** ./img/jpeg/cpse-tab.webp ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "f2ccabbde077dca7dcf9.webp";

/***/ }),

/***/ "./img/jpeg/es-dest.avif":
/*!*******************************!*\
  !*** ./img/jpeg/es-dest.avif ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "3ba6e8635cfe7aee7260.avif";

/***/ }),

/***/ "./img/jpeg/es-dest.jpg":
/*!******************************!*\
  !*** ./img/jpeg/es-dest.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "252210150a4ae82e4221.jpg";

/***/ }),

/***/ "./img/jpeg/es-dest.webp":
/*!*******************************!*\
  !*** ./img/jpeg/es-dest.webp ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "14f426019d9df3796476.webp";

/***/ }),

/***/ "./img/jpeg/es-mob.avif":
/*!******************************!*\
  !*** ./img/jpeg/es-mob.avif ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "376255220b92cbd3db0b.avif";

/***/ }),

/***/ "./img/jpeg/es-mob.jpg":
/*!*****************************!*\
  !*** ./img/jpeg/es-mob.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "d4d610f4d26d43971927.jpg";

/***/ }),

/***/ "./img/jpeg/es-mob.webp":
/*!******************************!*\
  !*** ./img/jpeg/es-mob.webp ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ca72274a2ff77d72aa5a.webp";

/***/ }),

/***/ "./img/jpeg/es-tab.avif":
/*!******************************!*\
  !*** ./img/jpeg/es-tab.avif ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "c16747d9f2a2ed9d7479.avif";

/***/ }),

/***/ "./img/jpeg/es-tab.jpg":
/*!*****************************!*\
  !*** ./img/jpeg/es-tab.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "b6b0e4fec9e967ce8c5a.jpg";

/***/ }),

/***/ "./img/jpeg/es-tab.webp":
/*!******************************!*\
  !*** ./img/jpeg/es-tab.webp ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "17fab38c90c1a0bd7d9e.webp";

/***/ }),

/***/ "./img/jpeg/max-mob.jpg":
/*!******************************!*\
  !*** ./img/jpeg/max-mob.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "e744aebf0ac1d44e1833.jpg";

/***/ }),

/***/ "./img/jpeg/nexus-dest.avif":
/*!**********************************!*\
  !*** ./img/jpeg/nexus-dest.avif ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "eec8745e842233d87a47.avif";

/***/ }),

/***/ "./img/jpeg/nexus-dest.jpg":
/*!*********************************!*\
  !*** ./img/jpeg/nexus-dest.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "2d5e421068fe23a9f444.jpg";

/***/ }),

/***/ "./img/jpeg/nexus-dest.webp":
/*!**********************************!*\
  !*** ./img/jpeg/nexus-dest.webp ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "0c268edb180020f661e7.webp";

/***/ }),

/***/ "./img/jpeg/nexus-mob.avif":
/*!*********************************!*\
  !*** ./img/jpeg/nexus-mob.avif ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "37fe45c89eb2e80311c8.avif";

/***/ }),

/***/ "./img/jpeg/nexus-mob.jpg":
/*!********************************!*\
  !*** ./img/jpeg/nexus-mob.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "05ea743496f570992a92.jpg";

/***/ }),

/***/ "./img/jpeg/nexus-mob.webp":
/*!*********************************!*\
  !*** ./img/jpeg/nexus-mob.webp ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "390072a2bb34f105ad17.webp";

/***/ }),

/***/ "./img/jpeg/nexus-tab.avif":
/*!*********************************!*\
  !*** ./img/jpeg/nexus-tab.avif ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "b9181fafe90b2ff7faad.avif";

/***/ }),

/***/ "./img/jpeg/nexus-tab.jpg":
/*!********************************!*\
  !*** ./img/jpeg/nexus-tab.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "70edc0029efe0dfeb1c2.jpg";

/***/ }),

/***/ "./img/jpeg/nexus-tab.webp":
/*!*********************************!*\
  !*** ./img/jpeg/nexus-tab.webp ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "edd750b4a84f87628a65.webp";

/***/ }),

/***/ "./img/jpeg/picture-dest.avif":
/*!************************************!*\
  !*** ./img/jpeg/picture-dest.avif ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "8f5e19161462954075a7.avif";

/***/ }),

/***/ "./img/jpeg/picture-dest.jpg":
/*!***********************************!*\
  !*** ./img/jpeg/picture-dest.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "b4908f9f6466908cade5.jpg";

/***/ }),

/***/ "./img/jpeg/picture-dest.webp":
/*!************************************!*\
  !*** ./img/jpeg/picture-dest.webp ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "9a0da43fe95eb93dbd07.webp";

/***/ }),

/***/ "./img/jpeg/picture-mob.avif":
/*!***********************************!*\
  !*** ./img/jpeg/picture-mob.avif ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "c0da493562b5f1d6fb27.avif";

/***/ }),

/***/ "./img/jpeg/picture-mob.jpg":
/*!**********************************!*\
  !*** ./img/jpeg/picture-mob.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "9a46567a76ab186f29e1.jpg";

/***/ }),

/***/ "./img/jpeg/picture-mob.webp":
/*!***********************************!*\
  !*** ./img/jpeg/picture-mob.webp ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "b9782f8d9c504cf12226.webp";

/***/ }),

/***/ "./img/jpeg/picture-tab.avif":
/*!***********************************!*\
  !*** ./img/jpeg/picture-tab.avif ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "30d2d49f33a4e2c579a2.avif";

/***/ }),

/***/ "./img/jpeg/picture-tab.jpg":
/*!**********************************!*\
  !*** ./img/jpeg/picture-tab.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "3dc0fd8d4acc1b65f406.jpg";

/***/ }),

/***/ "./img/jpeg/picture-tab.webp":
/*!***********************************!*\
  !*** ./img/jpeg/picture-tab.webp ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "4d0909710bee102e2e5b.webp";

/***/ }),

/***/ "./img/jpeg/сursera-dest.avif":
/*!************************************!*\
  !*** ./img/jpeg/сursera-dest.avif ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "0390b11f96eed4b87bb5.avif";

/***/ }),

/***/ "./img/jpeg/сursera-dest.jpg":
/*!***********************************!*\
  !*** ./img/jpeg/сursera-dest.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "2047c2ce425f51075959.jpg";

/***/ }),

/***/ "./img/jpeg/сursera-dest.webp":
/*!************************************!*\
  !*** ./img/jpeg/сursera-dest.webp ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "6abf1590e0d66e2ae203.webp";

/***/ }),

/***/ "./img/jpeg/сursera-mob.avif":
/*!***********************************!*\
  !*** ./img/jpeg/сursera-mob.avif ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "801e80449fc64ab3e571.avif";

/***/ }),

/***/ "./img/jpeg/сursera-mob.webp":
/*!***********************************!*\
  !*** ./img/jpeg/сursera-mob.webp ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "4d4917a003d1e651bbf2.webp";

/***/ }),

/***/ "./img/jpeg/сursera-tab.avif":
/*!***********************************!*\
  !*** ./img/jpeg/сursera-tab.avif ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "1ebe281af32f614146da.avif";

/***/ }),

/***/ "./img/jpeg/сursera-tab.jpg":
/*!**********************************!*\
  !*** ./img/jpeg/сursera-tab.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "5f51b1a6cc710a74d9fe.jpg";

/***/ }),

/***/ "./img/jpeg/сursera-tab.webp":
/*!***********************************!*\
  !*** ./img/jpeg/сursera-tab.webp ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "481e924edd9ad3e3749f.webp";

/***/ }),

/***/ "./img/png/acer.png":
/*!**************************!*\
  !*** ./img/png/acer.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "49c7b50ffb129b36b921.png";

/***/ }),

/***/ "./img/png/apple.png":
/*!***************************!*\
  !*** ./img/png/apple.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "3c896aa53cdbd5b96393.png";

/***/ }),

/***/ "./img/png/bosch.png":
/*!***************************!*\
  !*** ./img/png/bosch.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "855cba088fda8bed3940.png";

/***/ }),

/***/ "./img/png/hp.png":
/*!************************!*\
  !*** ./img/png/hp.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "f2c0477a81b9b2920566.png";

/***/ }),

/***/ "./img/png/lenova.png":
/*!****************************!*\
  !*** ./img/png/lenova.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "2480e5711f895a420665.png";

/***/ }),

/***/ "./img/png/logo.png":
/*!**************************!*\
  !*** ./img/png/logo.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "21bc8211db656d69b68f.png";

/***/ }),

/***/ "./img/png/samsung.png":
/*!*****************************!*\
  !*** ./img/png/samsung.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "0ee2a38acbf05b09a5a6.png";

/***/ }),

/***/ "./img/png/sony.png":
/*!**************************!*\
  !*** ./img/png/sony.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "8a19a4f0983a366a004a.png";

/***/ }),

/***/ "./img/png/viewsonick.png":
/*!********************************!*\
  !*** ./img/png/viewsonick.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "bc5268554637645d6428.png";

/***/ }),

/***/ "./img/svg/logo.svg":
/*!**************************!*\
  !*** ./img/svg/logo.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "1d8f9aff8d47d23370f6.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./index.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/core */ "../node_modules/swiper/esm/components/core/core-class.js");
/* harmony import */ var swiper_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/core */ "../node_modules/swiper/esm/components/navigation/navigation.js");
/* harmony import */ var swiper_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper/core */ "../node_modules/swiper/esm/components/pagination/pagination.js");
/* harmony import */ var _js_app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/app.js */ "./js/app.js");
/* harmony import */ var _js_app_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_app_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scss/main.scss */ "./scss/main.scss");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../index.html */ "./index.html");






swiper_core__WEBPACK_IMPORTED_MODULE_3__.default.use([swiper_core__WEBPACK_IMPORTED_MODULE_4__.default, swiper_core__WEBPACK_IMPORTED_MODULE_5__.default]);

const swiperService = new swiper_core__WEBPACK_IMPORTED_MODULE_3__.default('.swiper-container--service', {
	width: 250,
	spaceBetween: 10,
	centeredSlides: true,


	// And if we need scrollbar
	// scrollbar: {
	// 	el: '.swiper-scrollbar'	
	// },
	// breakpoints: {
	// 	1140: {
	// 		scrollbar: {
	// 			el: ''
	// 		},
	// 	}
	// }
});

const swiperBrands = new swiper_core__WEBPACK_IMPORTED_MODULE_3__.default('.swiper-container--brands', {
	// Optional parameters
	// loop: true,
	width: 240,
	spaceBetween: 10,
	centeredSlides: true,


	// If we need pagination
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: 'true',
		},

	// And if we need scrollbar
	scrollbar: {
		el: '.swiper-scrollbar',
	},
});

const swiperType = new swiper_core__WEBPACK_IMPORTED_MODULE_3__.default('.swiper-container--type', {
	// Optional parameters
	// loop: true,
	width: 240,
	spaceBetween: 10,
	centeredSlides: true,


	// If we need pagination
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: 'true',
		},

	// And if we need scrollbar
	scrollbar: {
		el: '.swiper-scrollbar',
	},
});

const swiperPrice = new swiper_core__WEBPACK_IMPORTED_MODULE_3__.default('.swiper-container--price', {
	// Optional parameters
	// loop: true,
	width: 260,
	spaceBetween: 40,
	centeredSlides: true,


	// If we need pagination
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: 'true',
		},

	// And if we need scrollbar
	scrollbar: {
		el: '.swiper-scrollbar',
	},
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9pbmRleC4zMTQ5YjQ3YTI3NWIzOGY3ZjcwMy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ29EOztBQUVwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyRUFBMkU7QUFDM0U7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QTtBQUNBLE1BQU07OztBQUdOLGVBQWUsK0NBQUMsRUFBRTs7QUFFbEIsSUFBSSxxREFBTTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLG1EQUFDO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsa0RBQUc7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUssR0FBRzs7QUFFUjtBQUNBLDRCQUE0Qjs7QUFFNUI7QUFDQTtBQUNBLE1BQU07OztBQUdOO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtB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ckIsaUVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNsSUQ7QUFDQSxpRUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSwwRUFBMEUsYUFBYTtBQUN2RjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7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QUFDQSxvREFBYyxFQUFFLGdEQUFVLEVBQUUsZ0RBQVU7QUFDdEM7QUFDQSwwQkFBMEIsZ0RBQU07QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EseUJBQXlCLGdEQUFNO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRixDQUFDO0FBQ0Q7QUFDQSx1QkFBdUIsZ0RBQU07QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGLENBQUM7QUFDRDtBQUNBLHdCQUF3QixnREFBTTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0YsQ0FBQyxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9kb203L2RvbTcuZXNtLmpzIiwid2VicGFjazovLy8uL2luZGV4Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9odG1sLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovLy8uL3Njc3MvbWFpbi5zY3NzP2NjYjIiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9zc3Itd2luZG93L3Nzci13aW5kb3cuZXNtLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvc3dpcGVyL2VzbS9jb21wb25lbnRzL2NvcmUvYnJlYWtwb2ludHMvZ2V0QnJlYWtwb2ludC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3N3aXBlci9lc20vY29tcG9uZW50cy9jb3JlL2JyZWFrcG9pbnRzL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvc3dpcGVyL2VzbS9jb21wb25lbnRzL2NvcmUvYnJlYWtwb2ludHMvc2V0QnJlYWtwb2ludC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3N3aXBlci9lc20vY29tcG9uZW50cy9jb3JlL2NoZWNrLW92ZXJmbG93L2luZGV4LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvc3dpcGVyL2VzbS9jb21wb25lbnRzL2NvcmUvY2xhc3Nlcy9hZGRDbGFzc2VzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvc3dpcGVyL2VzbS9jb21wb25lbnRzL2NvcmUvY2xhc3Nlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3N3aXBlci9lc20vY29tcG9uZW50cy9jb3JlL2NsYXNzZXMvcmVtb3ZlQ2xhc3Nlcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3N3aXBlci9lc20vY29tcG9uZW50cy9jb3JlL2NvcmUtY2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9zd2lwZXIvZXNtL2NvbXBvbmVudHMvY29yZS9kZWZhdWx0cy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3N3aXBlci9lc20vY29tcG9uZW50cy9jb3JlL2V2ZW50cy1lbWl0dGVyLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvc3dpcGVyL2VzbS9jb21wb25lbnRzL2NvcmUvZXZlbnRzL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvc3dpcGVyL2VzbS9jb21wb25lbnRzL2NvcmUvZXZlbnRzL29uQ2xpY2suanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9zd2lwZXIvZXNtL2NvbXBvbmVudHMvY29yZS9ldmVudHMvb25SZXNpemUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9zd2lwZXIvZXNtL2NvbXBvbmVudHMvY29yZS9ldmVudHMvb25TY3JvbGwuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9zd2lwZXIvZXNtL2NvbXBvbmVudHMvY29yZS9ldmVudHMvb25Ub3VjaEVuZC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3N3aXBlci9lc20vY29tcG9uZW50cy9jb3JlL2V2ZW50cy9vblRvdWNoTW92ZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3N3aXBlci9lc20vY29tcG9uZW50cy9jb3JlL2V2ZW50cy9vblRvdWNoU3RhcnQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9zd2lwZXIvZXNtL2NvbXBvbmVudHMvY29yZS9ncmFiLWN1cnNvci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3N3aXBlci9lc20vY29tcG9uZW50cy9jb3JlL2dyYWItY3Vyc29yL3NldEdyYWJDdXJzb3IuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9zd2lwZXIvZXNtL2NvbXBvbmVudHMvY29yZS9ncmFiLWN1cnNvci91bnNldEdyYWJDdXJzb3IuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9zd2lwZXIvZXNtL2NvbXBvbmVudHMvY29yZS9pbWFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9zd2lwZXIvZXNtL2NvbXBvbmVudHMvY29yZS9pbWFnZXMvbG9hZEltYWdlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvc3dpcGVyL2VzbS9jb21wb25lbnRzL2NvcmUvaW1hZ2VzL3ByZWxvYWRJbWFnZXMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9zd2lwZXIvZXNtL2NvbXBvbmVudHMvY29yZS9sb29wL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvc3dpcGVyL2VzbS9jb21wb25lbnRzL2NvcmUvbG9vcC9sb29wQ3JlYXRlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvc3dpcGVyL2VzbS9jb21wb25lbnRzL2NvcmUvbG9vcC9sb29wRGVzdHJveS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3N3aXBlci9lc20vY29tcG9uZW50cy9jb3JlL2xvb3AvbG9vcEZpeC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3N3aXBlci9lc20vY29tcG9uZW50cy9jb3JlL21hbmlwdWxhdGlvbi9hZGRTbGlkZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3N3aXBlci9lc20vY29tcG9uZW50cy9jb3JlL21hbmlwdWxhdGlvbi9hcHBlbmRTbGlkZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3N3aXBlci9lc20vY29tcG9uZW50cy9jb3JlL21hbmlwdWxhdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3N3aXBlci9lc20vY29tcG9uZW50cy9jb3JlL21hbmlwdWxhdGlvbi9wcmVwZW5kU2xpZGUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9zd2lwZXIvZXNtL2NvbXBvbmVudHMvY29yZS9tYW5pcHVsYXRpb24vcmVtb3ZlQWxsU2xpZGVzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvc3dpcGVyL2VzbS9jb21wb25lbnRzL2NvcmUvbWFuaXB1bGF0aW9uL3JlbW92ZVNsaWRlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvc3dpcGVyL2VzbS9jb21wb25lbnRzL2NvcmUvbW9kdWxhci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3N3aXBlci9lc20vY29tcG9uZW50cy9jb3JlL3NsaWRlL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvc3dpcGVyL2VzbS9jb21wb25lbnRzL2NvcmUvc2xpZGUvc2xpZGVOZXh0LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvc3dpcGVyL2VzbS9jb21wb25lbnRzL2NvcmUvc2xpZGUvc2xpZGVQcmV2LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvc3dpcGVyL2VzbS9jb21wb25lbnRzL2NvcmUvc2xpZGUvc2xpZGVSZXNldC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3N3aXBlci9lc20vY29tcG9uZW50cy9jb3JlL3NsaWRlL3NsaWRlVG8uanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9zd2lwZXIvZXNtL2NvbXBvbmVudHMvY29yZS9zbGlkZS9zbGlkZVRvQ2xpY2tlZFNsaWRlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvc3dpcGVyL2VzbS9jb21wb25lbnRzL2NvcmUvc2xpZGUvc2xpZGVUb0Nsb3Nlc3QuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9zd2lwZXIvZXNtL2NvbXBvbmVudHMvY29yZS9zbGlkZS9zbGlkZVRvTG9vcC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3N3aXBlci9lc20vY29tcG9uZW50cy9jb3JlL3RyYW5zaXRpb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9zd2lwZXIvZXNtL2NvbXBvbmVudHMvY29yZS90cmFuc2l0aW9uL3NldFRyYW5zaXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9zd2lwZXIvZXNtL2NvbXBvbmVudHMvY29yZS90cmFuc2l0aW9uL3RyYW5zaXRpb25FbmQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9zd2lwZXIvZXNtL2NvbXBvbmVudHMvY29yZS90cmFuc2l0aW9uL3RyYW5zaXRpb25TdGFydC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3N3aXBlci9lc20vY29tcG9uZW50cy9jb3JlL3RyYW5zbGF0ZS9nZXRUcmFuc2xhdGUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9zd2lwZXIvZXNtL2NvbXBvbmVudHMvY29yZS90cmFuc2xhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9zd2lwZXIvZXNtL2NvbXBvbmVudHMvY29yZS90cmFuc2xhdGUvbWF4VHJhbnNsYXRlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvc3dpcGVyL2VzbS9jb21wb25lbnRzL2NvcmUvdHJhbnNsYXRlL21pblRyYW5zbGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3N3aXBlci9lc20vY29tcG9uZW50cy9jb3JlL3RyYW5zbGF0ZS9zZXRUcmFuc2xhdGUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9zd2lwZXIvZXNtL2NvbXBvbmVudHMvY29yZS90cmFuc2xhdGUvdHJhbnNsYXRlVG8uanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9zd2lwZXIvZXNtL2NvbXBvbmVudHMvY29yZS91cGRhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9zd2lwZXIvZXNtL2NvbXBvbmVudHMvY29yZS91cGRhdGUvdXBkYXRlQWN0aXZlSW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9zd2lwZXIvZXNtL2NvbXBvbmVudHMvY29yZS91cGRhdGUvdXBkYXRlQXV0b0hlaWdodC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3N3aXBlci9lc20vY29tcG9uZW50cy9jb3JlL3VwZGF0ZS91cGRhdGVDbGlja2VkU2xpZGUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9zd2lwZXIvZXNtL2NvbXBvbmVudHMvY29yZS91cGRhdGUvdXBkYXRlUHJvZ3Jlc3MuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9zd2lwZXIvZXNtL2NvbXBvbmVudHMvY29yZS91cGRhdGUvdXBkYXRlU2l6ZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3N3aXBlci9lc20vY29tcG9uZW50cy9jb3JlL3VwZGF0ZS91cGRhdGVTbGlkZXMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9zd2lwZXIvZXNtL2NvbXBvbmVudHMvY29yZS91cGRhdGUvdXBkYXRlU2xpZGVzQ2xhc3Nlcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3N3aXBlci9lc20vY29tcG9uZW50cy9jb3JlL3VwZGF0ZS91cGRhdGVTbGlkZXNPZmZzZXQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9zd2lwZXIvZXNtL2NvbXBvbmVudHMvY29yZS91cGRhdGUvdXBkYXRlU2xpZGVzUHJvZ3Jlc3MuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9zd2lwZXIvZXNtL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvc3dpcGVyL2VzbS9jb21wb25lbnRzL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3N3aXBlci9lc20vbW9kdWxlcy9vYnNlcnZlci9vYnNlcnZlci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3N3aXBlci9lc20vbW9kdWxlcy9yZXNpemUvcmVzaXplLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvc3dpcGVyL2VzbS91dGlscy9kb20uanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9zd2lwZXIvZXNtL3V0aWxzL2dldC1icm93c2VyLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvc3dpcGVyL2VzbS91dGlscy9nZXQtZGV2aWNlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvc3dpcGVyL2VzbS91dGlscy9nZXQtc3VwcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3N3aXBlci9lc20vdXRpbHMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vanMvYXBwLmpzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovLy8uL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogRG9tNyAzLjAuMFxuICogTWluaW1hbGlzdGljIEphdmFTY3JpcHQgbGlicmFyeSBmb3IgRE9NIG1hbmlwdWxhdGlvbiwgd2l0aCBhIGpRdWVyeS1jb21wYXRpYmxlIEFQSVxuICogaHR0cHM6Ly9mcmFtZXdvcms3LmlvL2RvY3MvZG9tNy5odG1sXG4gKlxuICogQ29weXJpZ2h0IDIwMjAsIFZsYWRpbWlyIEtoYXJsYW1waWRpXG4gKlxuICogTGljZW5zZWQgdW5kZXIgTUlUXG4gKlxuICogUmVsZWFzZWQgb246IE5vdmVtYmVyIDksIDIwMjBcbiAqL1xuaW1wb3J0IHsgZ2V0V2luZG93LCBnZXREb2N1bWVudCB9IGZyb20gJ3Nzci13aW5kb3cnO1xuXG5mdW5jdGlvbiBfaW5oZXJpdHNMb29zZShzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MucHJvdG90eXBlKTtcbiAgc3ViQ2xhc3MucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gc3ViQ2xhc3M7XG4gIHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7XG59XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gIF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgfTtcbiAgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTtcbn1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9O1xuXG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7XG4gIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTtcbiAgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTtcbiAgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTtcblxuICB0cnkge1xuICAgIERhdGUucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoRGF0ZSwgW10sIGZ1bmN0aW9uICgpIHt9KSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NvbnN0cnVjdChQYXJlbnQsIGFyZ3MsIENsYXNzKSB7XG4gIGlmIChfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkpIHtcbiAgICBfY29uc3RydWN0ID0gUmVmbGVjdC5jb25zdHJ1Y3Q7XG4gIH0gZWxzZSB7XG4gICAgX2NvbnN0cnVjdCA9IGZ1bmN0aW9uIF9jb25zdHJ1Y3QoUGFyZW50LCBhcmdzLCBDbGFzcykge1xuICAgICAgdmFyIGEgPSBbbnVsbF07XG4gICAgICBhLnB1c2guYXBwbHkoYSwgYXJncyk7XG4gICAgICB2YXIgQ29uc3RydWN0b3IgPSBGdW5jdGlvbi5iaW5kLmFwcGx5KFBhcmVudCwgYSk7XG4gICAgICB2YXIgaW5zdGFuY2UgPSBuZXcgQ29uc3RydWN0b3IoKTtcbiAgICAgIGlmIChDbGFzcykgX3NldFByb3RvdHlwZU9mKGluc3RhbmNlLCBDbGFzcy5wcm90b3R5cGUpO1xuICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX2NvbnN0cnVjdC5hcHBseShudWxsLCBhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVGdW5jdGlvbihmbikge1xuICByZXR1cm4gRnVuY3Rpb24udG9TdHJpbmcuY2FsbChmbikuaW5kZXhPZihcIltuYXRpdmUgY29kZV1cIikgIT09IC0xO1xufVxuXG5mdW5jdGlvbiBfd3JhcE5hdGl2ZVN1cGVyKENsYXNzKSB7XG4gIHZhciBfY2FjaGUgPSB0eXBlb2YgTWFwID09PSBcImZ1bmN0aW9uXCIgPyBuZXcgTWFwKCkgOiB1bmRlZmluZWQ7XG5cbiAgX3dyYXBOYXRpdmVTdXBlciA9IGZ1bmN0aW9uIF93cmFwTmF0aXZlU3VwZXIoQ2xhc3MpIHtcbiAgICBpZiAoQ2xhc3MgPT09IG51bGwgfHwgIV9pc05hdGl2ZUZ1bmN0aW9uKENsYXNzKSkgcmV0dXJuIENsYXNzO1xuXG4gICAgaWYgKHR5cGVvZiBDbGFzcyAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBfY2FjaGUgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIGlmIChfY2FjaGUuaGFzKENsYXNzKSkgcmV0dXJuIF9jYWNoZS5nZXQoQ2xhc3MpO1xuXG4gICAgICBfY2FjaGUuc2V0KENsYXNzLCBXcmFwcGVyKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBXcmFwcGVyKCkge1xuICAgICAgcmV0dXJuIF9jb25zdHJ1Y3QoQ2xhc3MsIGFyZ3VtZW50cywgX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yKTtcbiAgICB9XG5cbiAgICBXcmFwcGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgICB2YWx1ZTogV3JhcHBlcixcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gX3NldFByb3RvdHlwZU9mKFdyYXBwZXIsIENsYXNzKTtcbiAgfTtcblxuICByZXR1cm4gX3dyYXBOYXRpdmVTdXBlcihDbGFzcyk7XG59XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIHNlbGY7XG59XG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXByb3RvICovXG5mdW5jdGlvbiBtYWtlUmVhY3RpdmUob2JqKSB7XG4gIHZhciBwcm90byA9IG9iai5fX3Byb3RvX187XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosICdfX3Byb3RvX18nLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gcHJvdG87XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWx1ZSkge1xuICAgICAgcHJvdG8uX19wcm90b19fID0gdmFsdWU7XG4gICAgfVxuICB9KTtcbn1cblxudmFyIERvbTcgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9BcnJheSkge1xuICBfaW5oZXJpdHNMb29zZShEb203LCBfQXJyYXkpO1xuXG4gIGZ1bmN0aW9uIERvbTcoaXRlbXMpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfdGhpcyA9IF9BcnJheS5jYWxsLmFwcGx5KF9BcnJheSwgW3RoaXNdLmNvbmNhdChpdGVtcykpIHx8IHRoaXM7XG4gICAgbWFrZVJlYWN0aXZlKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICByZXR1cm4gRG9tNztcbn0oIC8qI19fUFVSRV9fKi9fd3JhcE5hdGl2ZVN1cGVyKEFycmF5KSk7XG5cbmZ1bmN0aW9uIGFycmF5RmxhdChhcnIpIHtcbiAgaWYgKGFyciA9PT0gdm9pZCAwKSB7XG4gICAgYXJyID0gW107XG4gIH1cblxuICB2YXIgcmVzID0gW107XG4gIGFyci5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGVsKSkge1xuICAgICAgcmVzLnB1c2guYXBwbHkocmVzLCBhcnJheUZsYXQoZWwpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzLnB1c2goZWwpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiByZXM7XG59XG5mdW5jdGlvbiBhcnJheUZpbHRlcihhcnIsIGNhbGxiYWNrKSB7XG4gIHJldHVybiBBcnJheS5wcm90b3R5cGUuZmlsdGVyLmNhbGwoYXJyLCBjYWxsYmFjayk7XG59XG5mdW5jdGlvbiBhcnJheVVuaXF1ZShhcnIpIHtcbiAgdmFyIHVuaXF1ZUFycmF5ID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAodW5pcXVlQXJyYXkuaW5kZXhPZihhcnJbaV0pID09PSAtMSkgdW5pcXVlQXJyYXkucHVzaChhcnJbaV0pO1xuICB9XG5cbiAgcmV0dXJuIHVuaXF1ZUFycmF5O1xufVxuZnVuY3Rpb24gdG9DYW1lbENhc2Uoc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmcudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC8tKC4pL2csIGZ1bmN0aW9uIChtYXRjaCwgZ3JvdXApIHtcbiAgICByZXR1cm4gZ3JvdXAudG9VcHBlckNhc2UoKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHFzYShzZWxlY3RvciwgY29udGV4dCkge1xuICBpZiAodHlwZW9mIHNlbGVjdG9yICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBbc2VsZWN0b3JdO1xuICB9XG5cbiAgdmFyIGEgPSBbXTtcbiAgdmFyIHJlcyA9IGNvbnRleHQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBhLnB1c2gocmVzW2ldKTtcbiAgfVxuXG4gIHJldHVybiBhO1xufVxuXG5mdW5jdGlvbiAkKHNlbGVjdG9yLCBjb250ZXh0KSB7XG4gIHZhciB3aW5kb3cgPSBnZXRXaW5kb3coKTtcbiAgdmFyIGRvY3VtZW50ID0gZ2V0RG9jdW1lbnQoKTtcbiAgdmFyIGFyciA9IFtdO1xuXG4gIGlmICghY29udGV4dCAmJiBzZWxlY3RvciBpbnN0YW5jZW9mIERvbTcpIHtcbiAgICByZXR1cm4gc2VsZWN0b3I7XG4gIH1cblxuICBpZiAoIXNlbGVjdG9yKSB7XG4gICAgcmV0dXJuIG5ldyBEb203KGFycik7XG4gIH1cblxuICBpZiAodHlwZW9mIHNlbGVjdG9yID09PSAnc3RyaW5nJykge1xuICAgIHZhciBodG1sID0gc2VsZWN0b3IudHJpbSgpO1xuXG4gICAgaWYgKGh0bWwuaW5kZXhPZignPCcpID49IDAgJiYgaHRtbC5pbmRleE9mKCc+JykgPj0gMCkge1xuICAgICAgdmFyIHRvQ3JlYXRlID0gJ2Rpdic7XG4gICAgICBpZiAoaHRtbC5pbmRleE9mKCc8bGknKSA9PT0gMCkgdG9DcmVhdGUgPSAndWwnO1xuICAgICAgaWYgKGh0bWwuaW5kZXhPZignPHRyJykgPT09IDApIHRvQ3JlYXRlID0gJ3Rib2R5JztcbiAgICAgIGlmIChodG1sLmluZGV4T2YoJzx0ZCcpID09PSAwIHx8IGh0bWwuaW5kZXhPZignPHRoJykgPT09IDApIHRvQ3JlYXRlID0gJ3RyJztcbiAgICAgIGlmIChodG1sLmluZGV4T2YoJzx0Ym9keScpID09PSAwKSB0b0NyZWF0ZSA9ICd0YWJsZSc7XG4gICAgICBpZiAoaHRtbC5pbmRleE9mKCc8b3B0aW9uJykgPT09IDApIHRvQ3JlYXRlID0gJ3NlbGVjdCc7XG4gICAgICB2YXIgdGVtcFBhcmVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodG9DcmVhdGUpO1xuICAgICAgdGVtcFBhcmVudC5pbm5lckhUTUwgPSBodG1sO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRlbXBQYXJlbnQuY2hpbGROb2Rlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBhcnIucHVzaCh0ZW1wUGFyZW50LmNoaWxkTm9kZXNbaV0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBhcnIgPSBxc2Eoc2VsZWN0b3IudHJpbSgpLCBjb250ZXh0IHx8IGRvY3VtZW50KTtcbiAgICB9IC8vIGFyciA9IHFzYShzZWxlY3RvciwgZG9jdW1lbnQpO1xuXG4gIH0gZWxzZSBpZiAoc2VsZWN0b3Iubm9kZVR5cGUgfHwgc2VsZWN0b3IgPT09IHdpbmRvdyB8fCBzZWxlY3RvciA9PT0gZG9jdW1lbnQpIHtcbiAgICBhcnIucHVzaChzZWxlY3Rvcik7XG4gIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShzZWxlY3RvcikpIHtcbiAgICBpZiAoc2VsZWN0b3IgaW5zdGFuY2VvZiBEb203KSByZXR1cm4gc2VsZWN0b3I7XG4gICAgYXJyID0gc2VsZWN0b3I7XG4gIH1cblxuICByZXR1cm4gbmV3IERvbTcoYXJyYXlVbmlxdWUoYXJyKSk7XG59XG5cbiQuZm4gPSBEb203LnByb3RvdHlwZTtcblxuZnVuY3Rpb24gYWRkQ2xhc3MoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBjbGFzc2VzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGNsYXNzZXNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICB2YXIgY2xhc3NOYW1lcyA9IGFycmF5RmxhdChjbGFzc2VzLm1hcChmdW5jdGlvbiAoYykge1xuICAgIHJldHVybiBjLnNwbGl0KCcgJyk7XG4gIH0pKTtcbiAgdGhpcy5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgIHZhciBfZWwkY2xhc3NMaXN0O1xuXG4gICAgKF9lbCRjbGFzc0xpc3QgPSBlbC5jbGFzc0xpc3QpLmFkZC5hcHBseShfZWwkY2xhc3NMaXN0LCBjbGFzc05hbWVzKTtcbiAgfSk7XG4gIHJldHVybiB0aGlzO1xufVxuXG5mdW5jdGlvbiByZW1vdmVDbGFzcygpIHtcbiAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBjbGFzc2VzID0gbmV3IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgY2xhc3Nlc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICB9XG5cbiAgdmFyIGNsYXNzTmFtZXMgPSBhcnJheUZsYXQoY2xhc3Nlcy5tYXAoZnVuY3Rpb24gKGMpIHtcbiAgICByZXR1cm4gYy5zcGxpdCgnICcpO1xuICB9KSk7XG4gIHRoaXMuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICB2YXIgX2VsJGNsYXNzTGlzdDI7XG5cbiAgICAoX2VsJGNsYXNzTGlzdDIgPSBlbC5jbGFzc0xpc3QpLnJlbW92ZS5hcHBseShfZWwkY2xhc3NMaXN0MiwgY2xhc3NOYW1lcyk7XG4gIH0pO1xuICByZXR1cm4gdGhpcztcbn1cblxuZnVuY3Rpb24gdG9nZ2xlQ2xhc3MoKSB7XG4gIGZvciAodmFyIF9sZW4zID0gYXJndW1lbnRzLmxlbmd0aCwgY2xhc3NlcyA9IG5ldyBBcnJheShfbGVuMyksIF9rZXkzID0gMDsgX2tleTMgPCBfbGVuMzsgX2tleTMrKykge1xuICAgIGNsYXNzZXNbX2tleTNdID0gYXJndW1lbnRzW19rZXkzXTtcbiAgfVxuXG4gIHZhciBjbGFzc05hbWVzID0gYXJyYXlGbGF0KGNsYXNzZXMubWFwKGZ1bmN0aW9uIChjKSB7XG4gICAgcmV0dXJuIGMuc3BsaXQoJyAnKTtcbiAgfSkpO1xuICB0aGlzLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgY2xhc3NOYW1lcy5mb3JFYWNoKGZ1bmN0aW9uIChjbGFzc05hbWUpIHtcbiAgICAgIGVsLmNsYXNzTGlzdC50b2dnbGUoY2xhc3NOYW1lKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGhhc0NsYXNzKCkge1xuICBmb3IgKHZhciBfbGVuNCA9IGFyZ3VtZW50cy5sZW5ndGgsIGNsYXNzZXMgPSBuZXcgQXJyYXkoX2xlbjQpLCBfa2V5NCA9IDA7IF9rZXk0IDwgX2xlbjQ7IF9rZXk0KyspIHtcbiAgICBjbGFzc2VzW19rZXk0XSA9IGFyZ3VtZW50c1tfa2V5NF07XG4gIH1cblxuICB2YXIgY2xhc3NOYW1lcyA9IGFycmF5RmxhdChjbGFzc2VzLm1hcChmdW5jdGlvbiAoYykge1xuICAgIHJldHVybiBjLnNwbGl0KCcgJyk7XG4gIH0pKTtcbiAgcmV0dXJuIGFycmF5RmlsdGVyKHRoaXMsIGZ1bmN0aW9uIChlbCkge1xuICAgIHJldHVybiBjbGFzc05hbWVzLmZpbHRlcihmdW5jdGlvbiAoY2xhc3NOYW1lKSB7XG4gICAgICByZXR1cm4gZWwuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSk7XG4gICAgfSkubGVuZ3RoID4gMDtcbiAgfSkubGVuZ3RoID4gMDtcbn1cblxuZnVuY3Rpb24gYXR0cihhdHRycywgdmFsdWUpIHtcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEgJiYgdHlwZW9mIGF0dHJzID09PSAnc3RyaW5nJykge1xuICAgIC8vIEdldCBhdHRyXG4gICAgaWYgKHRoaXNbMF0pIHJldHVybiB0aGlzWzBdLmdldEF0dHJpYnV0ZShhdHRycyk7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfSAvLyBTZXQgYXR0cnNcblxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAyKSB7XG4gICAgICAvLyBTdHJpbmdcbiAgICAgIHRoaXNbaV0uc2V0QXR0cmlidXRlKGF0dHJzLCB2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIE9iamVjdFxuICAgICAgZm9yICh2YXIgYXR0ck5hbWUgaW4gYXR0cnMpIHtcbiAgICAgICAgdGhpc1tpXVthdHRyTmFtZV0gPSBhdHRyc1thdHRyTmFtZV07XG4gICAgICAgIHRoaXNbaV0uc2V0QXR0cmlidXRlKGF0dHJOYW1lLCBhdHRyc1thdHRyTmFtZV0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufVxuXG5mdW5jdGlvbiByZW1vdmVBdHRyKGF0dHIpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgdGhpc1tpXS5yZW1vdmVBdHRyaWJ1dGUoYXR0cik7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn1cblxuZnVuY3Rpb24gcHJvcChwcm9wcywgdmFsdWUpIHtcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEgJiYgdHlwZW9mIHByb3BzID09PSAnc3RyaW5nJykge1xuICAgIC8vIEdldCBwcm9wXG4gICAgaWYgKHRoaXNbMF0pIHJldHVybiB0aGlzWzBdW3Byb3BzXTtcbiAgfSBlbHNlIHtcbiAgICAvLyBTZXQgcHJvcHNcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAyKSB7XG4gICAgICAgIC8vIFN0cmluZ1xuICAgICAgICB0aGlzW2ldW3Byb3BzXSA9IHZhbHVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gT2JqZWN0XG4gICAgICAgIGZvciAodmFyIHByb3BOYW1lIGluIHByb3BzKSB7XG4gICAgICAgICAgdGhpc1tpXVtwcm9wTmFtZV0gPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufVxuXG5mdW5jdGlvbiBkYXRhKGtleSwgdmFsdWUpIHtcbiAgdmFyIGVsO1xuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgZWwgPSB0aGlzWzBdO1xuICAgIGlmICghZWwpIHJldHVybiB1bmRlZmluZWQ7IC8vIEdldCB2YWx1ZVxuXG4gICAgaWYgKGVsLmRvbTdFbGVtZW50RGF0YVN0b3JhZ2UgJiYga2V5IGluIGVsLmRvbTdFbGVtZW50RGF0YVN0b3JhZ2UpIHtcbiAgICAgIHJldHVybiBlbC5kb203RWxlbWVudERhdGFTdG9yYWdlW2tleV07XG4gICAgfVxuXG4gICAgdmFyIGRhdGFLZXkgPSBlbC5nZXRBdHRyaWJ1dGUoXCJkYXRhLVwiICsga2V5KTtcblxuICAgIGlmIChkYXRhS2V5KSB7XG4gICAgICByZXR1cm4gZGF0YUtleTtcbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9IC8vIFNldCB2YWx1ZVxuXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgZWwgPSB0aGlzW2ldO1xuICAgIGlmICghZWwuZG9tN0VsZW1lbnREYXRhU3RvcmFnZSkgZWwuZG9tN0VsZW1lbnREYXRhU3RvcmFnZSA9IHt9O1xuICAgIGVsLmRvbTdFbGVtZW50RGF0YVN0b3JhZ2Vba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZURhdGEoa2V5KSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIHZhciBlbCA9IHRoaXNbaV07XG5cbiAgICBpZiAoZWwuZG9tN0VsZW1lbnREYXRhU3RvcmFnZSAmJiBlbC5kb203RWxlbWVudERhdGFTdG9yYWdlW2tleV0pIHtcbiAgICAgIGVsLmRvbTdFbGVtZW50RGF0YVN0b3JhZ2Vba2V5XSA9IG51bGw7XG4gICAgICBkZWxldGUgZWwuZG9tN0VsZW1lbnREYXRhU3RvcmFnZVtrZXldO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBkYXRhc2V0KCkge1xuICB2YXIgZWwgPSB0aGlzWzBdO1xuICBpZiAoIWVsKSByZXR1cm4gdW5kZWZpbmVkO1xuICB2YXIgZGF0YXNldCA9IHt9OyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cbiAgaWYgKGVsLmRhdGFzZXQpIHtcbiAgICBmb3IgKHZhciBkYXRhS2V5IGluIGVsLmRhdGFzZXQpIHtcbiAgICAgIGRhdGFzZXRbZGF0YUtleV0gPSBlbC5kYXRhc2V0W2RhdGFLZXldO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVsLmF0dHJpYnV0ZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIHZhciBfYXR0ciA9IGVsLmF0dHJpYnV0ZXNbaV07XG5cbiAgICAgIGlmIChfYXR0ci5uYW1lLmluZGV4T2YoJ2RhdGEtJykgPj0gMCkge1xuICAgICAgICBkYXRhc2V0W3RvQ2FtZWxDYXNlKF9hdHRyLm5hbWUuc3BsaXQoJ2RhdGEtJylbMV0pXSA9IF9hdHRyLnZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZvciAodmFyIGtleSBpbiBkYXRhc2V0KSB7XG4gICAgaWYgKGRhdGFzZXRba2V5XSA9PT0gJ2ZhbHNlJykgZGF0YXNldFtrZXldID0gZmFsc2U7ZWxzZSBpZiAoZGF0YXNldFtrZXldID09PSAndHJ1ZScpIGRhdGFzZXRba2V5XSA9IHRydWU7ZWxzZSBpZiAocGFyc2VGbG9hdChkYXRhc2V0W2tleV0pID09PSBkYXRhc2V0W2tleV0gKiAxKSBkYXRhc2V0W2tleV0gKj0gMTtcbiAgfVxuXG4gIHJldHVybiBkYXRhc2V0O1xufVxuXG5mdW5jdGlvbiB2YWwodmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvLyBnZXQgdmFsdWVcbiAgICB2YXIgZWwgPSB0aGlzWzBdO1xuICAgIGlmICghZWwpIHJldHVybiB1bmRlZmluZWQ7XG5cbiAgICBpZiAoZWwubXVsdGlwbGUgJiYgZWwubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ3NlbGVjdCcpIHtcbiAgICAgIHZhciB2YWx1ZXMgPSBbXTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbC5zZWxlY3RlZE9wdGlvbnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgdmFsdWVzLnB1c2goZWwuc2VsZWN0ZWRPcHRpb25zW2ldLnZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHZhbHVlcztcbiAgICB9XG5cbiAgICByZXR1cm4gZWwudmFsdWU7XG4gIH0gLy8gc2V0IHZhbHVlXG5cblxuICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgdGhpcy5sZW5ndGg7IF9pICs9IDEpIHtcbiAgICB2YXIgX2VsID0gdGhpc1tfaV07XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgX2VsLm11bHRpcGxlICYmIF9lbC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnc2VsZWN0Jykge1xuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBfZWwub3B0aW9ucy5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgICBfZWwub3B0aW9uc1tqXS5zZWxlY3RlZCA9IHZhbHVlLmluZGV4T2YoX2VsLm9wdGlvbnNbal0udmFsdWUpID49IDA7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIF9lbC52YWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufVxuXG5mdW5jdGlvbiB2YWx1ZSh2YWx1ZSkge1xuICByZXR1cm4gdGhpcy52YWwodmFsdWUpO1xufVxuXG5mdW5jdGlvbiB0cmFuc2Zvcm0odHJhbnNmb3JtKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIHRoaXNbaV0uc3R5bGUudHJhbnNmb3JtID0gdHJhbnNmb3JtO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59XG5cbmZ1bmN0aW9uIHRyYW5zaXRpb24oZHVyYXRpb24pIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgdGhpc1tpXS5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSB0eXBlb2YgZHVyYXRpb24gIT09ICdzdHJpbmcnID8gZHVyYXRpb24gKyBcIm1zXCIgOiBkdXJhdGlvbjtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufVxuXG5mdW5jdGlvbiBvbigpIHtcbiAgZm9yICh2YXIgX2xlbjUgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW41KSwgX2tleTUgPSAwOyBfa2V5NSA8IF9sZW41OyBfa2V5NSsrKSB7XG4gICAgYXJnc1tfa2V5NV0gPSBhcmd1bWVudHNbX2tleTVdO1xuICB9XG5cbiAgdmFyIGV2ZW50VHlwZSA9IGFyZ3NbMF0sXG4gICAgICB0YXJnZXRTZWxlY3RvciA9IGFyZ3NbMV0sXG4gICAgICBsaXN0ZW5lciA9IGFyZ3NbMl0sXG4gICAgICBjYXB0dXJlID0gYXJnc1szXTtcblxuICBpZiAodHlwZW9mIGFyZ3NbMV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICBldmVudFR5cGUgPSBhcmdzWzBdO1xuICAgIGxpc3RlbmVyID0gYXJnc1sxXTtcbiAgICBjYXB0dXJlID0gYXJnc1syXTtcbiAgICB0YXJnZXRTZWxlY3RvciA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGlmICghY2FwdHVyZSkgY2FwdHVyZSA9IGZhbHNlO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZUxpdmVFdmVudChlKSB7XG4gICAgdmFyIHRhcmdldCA9IGUudGFyZ2V0O1xuICAgIGlmICghdGFyZ2V0KSByZXR1cm47XG4gICAgdmFyIGV2ZW50RGF0YSA9IGUudGFyZ2V0LmRvbTdFdmVudERhdGEgfHwgW107XG5cbiAgICBpZiAoZXZlbnREYXRhLmluZGV4T2YoZSkgPCAwKSB7XG4gICAgICBldmVudERhdGEudW5zaGlmdChlKTtcbiAgICB9XG5cbiAgICBpZiAoJCh0YXJnZXQpLmlzKHRhcmdldFNlbGVjdG9yKSkgbGlzdGVuZXIuYXBwbHkodGFyZ2V0LCBldmVudERhdGEpO2Vsc2Uge1xuICAgICAgdmFyIF9wYXJlbnRzID0gJCh0YXJnZXQpLnBhcmVudHMoKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXG5cbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgX3BhcmVudHMubGVuZ3RoOyBrICs9IDEpIHtcbiAgICAgICAgaWYgKCQoX3BhcmVudHNba10pLmlzKHRhcmdldFNlbGVjdG9yKSkgbGlzdGVuZXIuYXBwbHkoX3BhcmVudHNba10sIGV2ZW50RGF0YSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlRXZlbnQoZSkge1xuICAgIHZhciBldmVudERhdGEgPSBlICYmIGUudGFyZ2V0ID8gZS50YXJnZXQuZG9tN0V2ZW50RGF0YSB8fCBbXSA6IFtdO1xuXG4gICAgaWYgKGV2ZW50RGF0YS5pbmRleE9mKGUpIDwgMCkge1xuICAgICAgZXZlbnREYXRhLnVuc2hpZnQoZSk7XG4gICAgfVxuXG4gICAgbGlzdGVuZXIuYXBwbHkodGhpcywgZXZlbnREYXRhKTtcbiAgfVxuXG4gIHZhciBldmVudHMgPSBldmVudFR5cGUuc3BsaXQoJyAnKTtcbiAgdmFyIGo7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgdmFyIGVsID0gdGhpc1tpXTtcblxuICAgIGlmICghdGFyZ2V0U2VsZWN0b3IpIHtcbiAgICAgIGZvciAoaiA9IDA7IGogPCBldmVudHMubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgICAgdmFyIGV2ZW50ID0gZXZlbnRzW2pdO1xuICAgICAgICBpZiAoIWVsLmRvbTdMaXN0ZW5lcnMpIGVsLmRvbTdMaXN0ZW5lcnMgPSB7fTtcbiAgICAgICAgaWYgKCFlbC5kb203TGlzdGVuZXJzW2V2ZW50XSkgZWwuZG9tN0xpc3RlbmVyc1tldmVudF0gPSBbXTtcbiAgICAgICAgZWwuZG9tN0xpc3RlbmVyc1tldmVudF0ucHVzaCh7XG4gICAgICAgICAgbGlzdGVuZXI6IGxpc3RlbmVyLFxuICAgICAgICAgIHByb3h5TGlzdGVuZXI6IGhhbmRsZUV2ZW50XG4gICAgICAgIH0pO1xuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVFdmVudCwgY2FwdHVyZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIExpdmUgZXZlbnRzXG4gICAgICBmb3IgKGogPSAwOyBqIDwgZXZlbnRzLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgIHZhciBfZXZlbnQgPSBldmVudHNbal07XG4gICAgICAgIGlmICghZWwuZG9tN0xpdmVMaXN0ZW5lcnMpIGVsLmRvbTdMaXZlTGlzdGVuZXJzID0ge307XG4gICAgICAgIGlmICghZWwuZG9tN0xpdmVMaXN0ZW5lcnNbX2V2ZW50XSkgZWwuZG9tN0xpdmVMaXN0ZW5lcnNbX2V2ZW50XSA9IFtdO1xuXG4gICAgICAgIGVsLmRvbTdMaXZlTGlzdGVuZXJzW19ldmVudF0ucHVzaCh7XG4gICAgICAgICAgbGlzdGVuZXI6IGxpc3RlbmVyLFxuICAgICAgICAgIHByb3h5TGlzdGVuZXI6IGhhbmRsZUxpdmVFdmVudFxuICAgICAgICB9KTtcblxuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKF9ldmVudCwgaGFuZGxlTGl2ZUV2ZW50LCBjYXB0dXJlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn1cblxuZnVuY3Rpb24gb2ZmKCkge1xuICBmb3IgKHZhciBfbGVuNiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjYpLCBfa2V5NiA9IDA7IF9rZXk2IDwgX2xlbjY7IF9rZXk2KyspIHtcbiAgICBhcmdzW19rZXk2XSA9IGFyZ3VtZW50c1tfa2V5Nl07XG4gIH1cblxuICB2YXIgZXZlbnRUeXBlID0gYXJnc1swXSxcbiAgICAgIHRhcmdldFNlbGVjdG9yID0gYXJnc1sxXSxcbiAgICAgIGxpc3RlbmVyID0gYXJnc1syXSxcbiAgICAgIGNhcHR1cmUgPSBhcmdzWzNdO1xuXG4gIGlmICh0eXBlb2YgYXJnc1sxXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGV2ZW50VHlwZSA9IGFyZ3NbMF07XG4gICAgbGlzdGVuZXIgPSBhcmdzWzFdO1xuICAgIGNhcHR1cmUgPSBhcmdzWzJdO1xuICAgIHRhcmdldFNlbGVjdG9yID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgaWYgKCFjYXB0dXJlKSBjYXB0dXJlID0gZmFsc2U7XG4gIHZhciBldmVudHMgPSBldmVudFR5cGUuc3BsaXQoJyAnKTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGV2ZW50cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIHZhciBldmVudCA9IGV2ZW50c1tpXTtcblxuICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgdmFyIGVsID0gdGhpc1tqXTtcbiAgICAgIHZhciBoYW5kbGVycyA9IHZvaWQgMDtcblxuICAgICAgaWYgKCF0YXJnZXRTZWxlY3RvciAmJiBlbC5kb203TGlzdGVuZXJzKSB7XG4gICAgICAgIGhhbmRsZXJzID0gZWwuZG9tN0xpc3RlbmVyc1tldmVudF07XG4gICAgICB9IGVsc2UgaWYgKHRhcmdldFNlbGVjdG9yICYmIGVsLmRvbTdMaXZlTGlzdGVuZXJzKSB7XG4gICAgICAgIGhhbmRsZXJzID0gZWwuZG9tN0xpdmVMaXN0ZW5lcnNbZXZlbnRdO1xuICAgICAgfVxuXG4gICAgICBpZiAoaGFuZGxlcnMgJiYgaGFuZGxlcnMubGVuZ3RoKSB7XG4gICAgICAgIGZvciAodmFyIGsgPSBoYW5kbGVycy5sZW5ndGggLSAxOyBrID49IDA7IGsgLT0gMSkge1xuICAgICAgICAgIHZhciBoYW5kbGVyID0gaGFuZGxlcnNba107XG5cbiAgICAgICAgICBpZiAobGlzdGVuZXIgJiYgaGFuZGxlci5saXN0ZW5lciA9PT0gbGlzdGVuZXIpIHtcbiAgICAgICAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIucHJveHlMaXN0ZW5lciwgY2FwdHVyZSk7XG4gICAgICAgICAgICBoYW5kbGVycy5zcGxpY2UoaywgMSk7XG4gICAgICAgICAgfSBlbHNlIGlmIChsaXN0ZW5lciAmJiBoYW5kbGVyLmxpc3RlbmVyICYmIGhhbmRsZXIubGlzdGVuZXIuZG9tN3Byb3h5ICYmIGhhbmRsZXIubGlzdGVuZXIuZG9tN3Byb3h5ID09PSBsaXN0ZW5lcikge1xuICAgICAgICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlci5wcm94eUxpc3RlbmVyLCBjYXB0dXJlKTtcbiAgICAgICAgICAgIGhhbmRsZXJzLnNwbGljZShrLCAxKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKCFsaXN0ZW5lcikge1xuICAgICAgICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlci5wcm94eUxpc3RlbmVyLCBjYXB0dXJlKTtcbiAgICAgICAgICAgIGhhbmRsZXJzLnNwbGljZShrLCAxKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn1cblxuZnVuY3Rpb24gb25jZSgpIHtcbiAgdmFyIGRvbSA9IHRoaXM7XG5cbiAgZm9yICh2YXIgX2xlbjcgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW43KSwgX2tleTcgPSAwOyBfa2V5NyA8IF9sZW43OyBfa2V5NysrKSB7XG4gICAgYXJnc1tfa2V5N10gPSBhcmd1bWVudHNbX2tleTddO1xuICB9XG5cbiAgdmFyIGV2ZW50TmFtZSA9IGFyZ3NbMF0sXG4gICAgICB0YXJnZXRTZWxlY3RvciA9IGFyZ3NbMV0sXG4gICAgICBsaXN0ZW5lciA9IGFyZ3NbMl0sXG4gICAgICBjYXB0dXJlID0gYXJnc1szXTtcblxuICBpZiAodHlwZW9mIGFyZ3NbMV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICBldmVudE5hbWUgPSBhcmdzWzBdO1xuICAgIGxpc3RlbmVyID0gYXJnc1sxXTtcbiAgICBjYXB0dXJlID0gYXJnc1syXTtcbiAgICB0YXJnZXRTZWxlY3RvciA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uY2VIYW5kbGVyKCkge1xuICAgIGZvciAodmFyIF9sZW44ID0gYXJndW1lbnRzLmxlbmd0aCwgZXZlbnRBcmdzID0gbmV3IEFycmF5KF9sZW44KSwgX2tleTggPSAwOyBfa2V5OCA8IF9sZW44OyBfa2V5OCsrKSB7XG4gICAgICBldmVudEFyZ3NbX2tleThdID0gYXJndW1lbnRzW19rZXk4XTtcbiAgICB9XG5cbiAgICBsaXN0ZW5lci5hcHBseSh0aGlzLCBldmVudEFyZ3MpO1xuICAgIGRvbS5vZmYoZXZlbnROYW1lLCB0YXJnZXRTZWxlY3Rvciwgb25jZUhhbmRsZXIsIGNhcHR1cmUpO1xuXG4gICAgaWYgKG9uY2VIYW5kbGVyLmRvbTdwcm94eSkge1xuICAgICAgZGVsZXRlIG9uY2VIYW5kbGVyLmRvbTdwcm94eTtcbiAgICB9XG4gIH1cblxuICBvbmNlSGFuZGxlci5kb203cHJveHkgPSBsaXN0ZW5lcjtcbiAgcmV0dXJuIGRvbS5vbihldmVudE5hbWUsIHRhcmdldFNlbGVjdG9yLCBvbmNlSGFuZGxlciwgY2FwdHVyZSk7XG59XG5cbmZ1bmN0aW9uIHRyaWdnZXIoKSB7XG4gIHZhciB3aW5kb3cgPSBnZXRXaW5kb3coKTtcblxuICBmb3IgKHZhciBfbGVuOSA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjkpLCBfa2V5OSA9IDA7IF9rZXk5IDwgX2xlbjk7IF9rZXk5KyspIHtcbiAgICBhcmdzW19rZXk5XSA9IGFyZ3VtZW50c1tfa2V5OV07XG4gIH1cblxuICB2YXIgZXZlbnRzID0gYXJnc1swXS5zcGxpdCgnICcpO1xuICB2YXIgZXZlbnREYXRhID0gYXJnc1sxXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGV2ZW50cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIHZhciBldmVudCA9IGV2ZW50c1tpXTtcblxuICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgdmFyIGVsID0gdGhpc1tqXTtcblxuICAgICAgaWYgKHdpbmRvdy5DdXN0b21FdmVudCkge1xuICAgICAgICB2YXIgZXZ0ID0gbmV3IHdpbmRvdy5DdXN0b21FdmVudChldmVudCwge1xuICAgICAgICAgIGRldGFpbDogZXZlbnREYXRhLFxuICAgICAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgICAgICAgY2FuY2VsYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgZWwuZG9tN0V2ZW50RGF0YSA9IGFyZ3MuZmlsdGVyKGZ1bmN0aW9uIChkYXRhLCBkYXRhSW5kZXgpIHtcbiAgICAgICAgICByZXR1cm4gZGF0YUluZGV4ID4gMDtcbiAgICAgICAgfSk7XG4gICAgICAgIGVsLmRpc3BhdGNoRXZlbnQoZXZ0KTtcbiAgICAgICAgZWwuZG9tN0V2ZW50RGF0YSA9IFtdO1xuICAgICAgICBkZWxldGUgZWwuZG9tN0V2ZW50RGF0YTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn1cblxuZnVuY3Rpb24gdHJhbnNpdGlvbkVuZChjYWxsYmFjaykge1xuICB2YXIgZG9tID0gdGhpcztcblxuICBmdW5jdGlvbiBmaXJlQ2FsbEJhY2soZSkge1xuICAgIGlmIChlLnRhcmdldCAhPT0gdGhpcykgcmV0dXJuO1xuICAgIGNhbGxiYWNrLmNhbGwodGhpcywgZSk7XG4gICAgZG9tLm9mZigndHJhbnNpdGlvbmVuZCcsIGZpcmVDYWxsQmFjayk7XG4gIH1cblxuICBpZiAoY2FsbGJhY2spIHtcbiAgICBkb20ub24oJ3RyYW5zaXRpb25lbmQnLCBmaXJlQ2FsbEJhY2spO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59XG5cbmZ1bmN0aW9uIGFuaW1hdGlvbkVuZChjYWxsYmFjaykge1xuICB2YXIgZG9tID0gdGhpcztcblxuICBmdW5jdGlvbiBmaXJlQ2FsbEJhY2soZSkge1xuICAgIGlmIChlLnRhcmdldCAhPT0gdGhpcykgcmV0dXJuO1xuICAgIGNhbGxiYWNrLmNhbGwodGhpcywgZSk7XG4gICAgZG9tLm9mZignYW5pbWF0aW9uZW5kJywgZmlyZUNhbGxCYWNrKTtcbiAgfVxuXG4gIGlmIChjYWxsYmFjaykge1xuICAgIGRvbS5vbignYW5pbWF0aW9uZW5kJywgZmlyZUNhbGxCYWNrKTtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufVxuXG5mdW5jdGlvbiB3aWR0aCgpIHtcbiAgdmFyIHdpbmRvdyA9IGdldFdpbmRvdygpO1xuXG4gIGlmICh0aGlzWzBdID09PSB3aW5kb3cpIHtcbiAgICByZXR1cm4gd2luZG93LmlubmVyV2lkdGg7XG4gIH1cblxuICBpZiAodGhpcy5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIHBhcnNlRmxvYXQodGhpcy5jc3MoJ3dpZHRoJykpO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbmZ1bmN0aW9uIG91dGVyV2lkdGgoaW5jbHVkZU1hcmdpbnMpIHtcbiAgaWYgKHRoaXMubGVuZ3RoID4gMCkge1xuICAgIGlmIChpbmNsdWRlTWFyZ2lucykge1xuICAgICAgdmFyIF9zdHlsZXMgPSB0aGlzLnN0eWxlcygpO1xuXG4gICAgICByZXR1cm4gdGhpc1swXS5vZmZzZXRXaWR0aCArIHBhcnNlRmxvYXQoX3N0eWxlcy5nZXRQcm9wZXJ0eVZhbHVlKCdtYXJnaW4tcmlnaHQnKSkgKyBwYXJzZUZsb2F0KF9zdHlsZXMuZ2V0UHJvcGVydHlWYWx1ZSgnbWFyZ2luLWxlZnQnKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXNbMF0ub2Zmc2V0V2lkdGg7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuZnVuY3Rpb24gaGVpZ2h0KCkge1xuICB2YXIgd2luZG93ID0gZ2V0V2luZG93KCk7XG5cbiAgaWYgKHRoaXNbMF0gPT09IHdpbmRvdykge1xuICAgIHJldHVybiB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gIH1cblxuICBpZiAodGhpcy5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIHBhcnNlRmxvYXQodGhpcy5jc3MoJ2hlaWdodCcpKTtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG5mdW5jdGlvbiBvdXRlckhlaWdodChpbmNsdWRlTWFyZ2lucykge1xuICBpZiAodGhpcy5sZW5ndGggPiAwKSB7XG4gICAgaWYgKGluY2x1ZGVNYXJnaW5zKSB7XG4gICAgICB2YXIgX3N0eWxlczIgPSB0aGlzLnN0eWxlcygpO1xuXG4gICAgICByZXR1cm4gdGhpc1swXS5vZmZzZXRIZWlnaHQgKyBwYXJzZUZsb2F0KF9zdHlsZXMyLmdldFByb3BlcnR5VmFsdWUoJ21hcmdpbi10b3AnKSkgKyBwYXJzZUZsb2F0KF9zdHlsZXMyLmdldFByb3BlcnR5VmFsdWUoJ21hcmdpbi1ib3R0b20nKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXNbMF0ub2Zmc2V0SGVpZ2h0O1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbmZ1bmN0aW9uIG9mZnNldCgpIHtcbiAgaWYgKHRoaXMubGVuZ3RoID4gMCkge1xuICAgIHZhciB3aW5kb3cgPSBnZXRXaW5kb3coKTtcbiAgICB2YXIgZG9jdW1lbnQgPSBnZXREb2N1bWVudCgpO1xuICAgIHZhciBlbCA9IHRoaXNbMF07XG4gICAgdmFyIGJveCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHZhciBib2R5ID0gZG9jdW1lbnQuYm9keTtcbiAgICB2YXIgY2xpZW50VG9wID0gZWwuY2xpZW50VG9wIHx8IGJvZHkuY2xpZW50VG9wIHx8IDA7XG4gICAgdmFyIGNsaWVudExlZnQgPSBlbC5jbGllbnRMZWZ0IHx8IGJvZHkuY2xpZW50TGVmdCB8fCAwO1xuICAgIHZhciBzY3JvbGxUb3AgPSBlbCA9PT0gd2luZG93ID8gd2luZG93LnNjcm9sbFkgOiBlbC5zY3JvbGxUb3A7XG4gICAgdmFyIHNjcm9sbExlZnQgPSBlbCA9PT0gd2luZG93ID8gd2luZG93LnNjcm9sbFggOiBlbC5zY3JvbGxMZWZ0O1xuICAgIHJldHVybiB7XG4gICAgICB0b3A6IGJveC50b3AgKyBzY3JvbGxUb3AgLSBjbGllbnRUb3AsXG4gICAgICBsZWZ0OiBib3gubGVmdCArIHNjcm9sbExlZnQgLSBjbGllbnRMZWZ0XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG5mdW5jdGlvbiBoaWRlKCkge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICB0aGlzW2ldLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn1cblxuZnVuY3Rpb24gc2hvdygpIHtcbiAgdmFyIHdpbmRvdyA9IGdldFdpbmRvdygpO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIHZhciBlbCA9IHRoaXNbaV07XG5cbiAgICBpZiAoZWwuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG4gICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gJyc7XG4gICAgfVxuXG4gICAgaWYgKHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsLCBudWxsKS5nZXRQcm9wZXJ0eVZhbHVlKCdkaXNwbGF5JykgPT09ICdub25lJykge1xuICAgICAgLy8gU3RpbGwgbm90IHZpc2libGVcbiAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufVxuXG5mdW5jdGlvbiBzdHlsZXMoKSB7XG4gIHZhciB3aW5kb3cgPSBnZXRXaW5kb3coKTtcbiAgaWYgKHRoaXNbMF0pIHJldHVybiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzWzBdLCBudWxsKTtcbiAgcmV0dXJuIHt9O1xufVxuXG5mdW5jdGlvbiBjc3MocHJvcHMsIHZhbHVlKSB7XG4gIHZhciB3aW5kb3cgPSBnZXRXaW5kb3coKTtcbiAgdmFyIGk7XG5cbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEpIHtcbiAgICBpZiAodHlwZW9mIHByb3BzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gLmNzcygnd2lkdGgnKVxuICAgICAgaWYgKHRoaXNbMF0pIHJldHVybiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzWzBdLCBudWxsKS5nZXRQcm9wZXJ0eVZhbHVlKHByb3BzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gLmNzcyh7IHdpZHRoOiAnMTAwcHgnIH0pXG4gICAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBmb3IgKHZhciBfcHJvcCBpbiBwcm9wcykge1xuICAgICAgICAgIHRoaXNbaV0uc3R5bGVbX3Byb3BdID0gcHJvcHNbX3Byb3BdO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfVxuXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAyICYmIHR5cGVvZiBwcm9wcyA9PT0gJ3N0cmluZycpIHtcbiAgICAvLyAuY3NzKCd3aWR0aCcsICcxMDBweCcpXG4gICAgZm9yIChpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIHRoaXNbaV0uc3R5bGVbcHJvcHNdID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn1cblxuZnVuY3Rpb24gZWFjaChjYWxsYmFjaykge1xuICBpZiAoIWNhbGxiYWNrKSByZXR1cm4gdGhpcztcbiAgdGhpcy5mb3JFYWNoKGZ1bmN0aW9uIChlbCwgaW5kZXgpIHtcbiAgICBjYWxsYmFjay5hcHBseShlbCwgW2VsLCBpbmRleF0pO1xuICB9KTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbmZ1bmN0aW9uIGZpbHRlcihjYWxsYmFjaykge1xuICB2YXIgcmVzdWx0ID0gYXJyYXlGaWx0ZXIodGhpcywgY2FsbGJhY2spO1xuICByZXR1cm4gJChyZXN1bHQpO1xufVxuXG5mdW5jdGlvbiBodG1sKGh0bWwpIHtcbiAgaWYgKHR5cGVvZiBodG1sID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiB0aGlzWzBdID8gdGhpc1swXS5pbm5lckhUTUwgOiBudWxsO1xuICB9XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgdGhpc1tpXS5pbm5lckhUTUwgPSBodG1sO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59XG5cbmZ1bmN0aW9uIHRleHQodGV4dCkge1xuICBpZiAodHlwZW9mIHRleHQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIHRoaXNbMF0gPyB0aGlzWzBdLnRleHRDb250ZW50LnRyaW0oKSA6IG51bGw7XG4gIH1cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICB0aGlzW2ldLnRleHRDb250ZW50ID0gdGV4dDtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufVxuXG5mdW5jdGlvbiBpcyhzZWxlY3Rvcikge1xuICB2YXIgd2luZG93ID0gZ2V0V2luZG93KCk7XG4gIHZhciBkb2N1bWVudCA9IGdldERvY3VtZW50KCk7XG4gIHZhciBlbCA9IHRoaXNbMF07XG4gIHZhciBjb21wYXJlV2l0aDtcbiAgdmFyIGk7XG4gIGlmICghZWwgfHwgdHlwZW9mIHNlbGVjdG9yID09PSAndW5kZWZpbmVkJykgcmV0dXJuIGZhbHNlO1xuXG4gIGlmICh0eXBlb2Ygc2VsZWN0b3IgPT09ICdzdHJpbmcnKSB7XG4gICAgaWYgKGVsLm1hdGNoZXMpIHJldHVybiBlbC5tYXRjaGVzKHNlbGVjdG9yKTtcbiAgICBpZiAoZWwud2Via2l0TWF0Y2hlc1NlbGVjdG9yKSByZXR1cm4gZWwud2Via2l0TWF0Y2hlc1NlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICBpZiAoZWwubXNNYXRjaGVzU2VsZWN0b3IpIHJldHVybiBlbC5tc01hdGNoZXNTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgY29tcGFyZVdpdGggPSAkKHNlbGVjdG9yKTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBjb21wYXJlV2l0aC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKGNvbXBhcmVXaXRoW2ldID09PSBlbCkgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKHNlbGVjdG9yID09PSBkb2N1bWVudCkge1xuICAgIHJldHVybiBlbCA9PT0gZG9jdW1lbnQ7XG4gIH1cblxuICBpZiAoc2VsZWN0b3IgPT09IHdpbmRvdykge1xuICAgIHJldHVybiBlbCA9PT0gd2luZG93O1xuICB9XG5cbiAgaWYgKHNlbGVjdG9yLm5vZGVUeXBlIHx8IHNlbGVjdG9yIGluc3RhbmNlb2YgRG9tNykge1xuICAgIGNvbXBhcmVXaXRoID0gc2VsZWN0b3Iubm9kZVR5cGUgPyBbc2VsZWN0b3JdIDogc2VsZWN0b3I7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgY29tcGFyZVdpdGgubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmIChjb21wYXJlV2l0aFtpXSA9PT0gZWwpIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gaW5kZXgoKSB7XG4gIHZhciBjaGlsZCA9IHRoaXNbMF07XG4gIHZhciBpO1xuXG4gIGlmIChjaGlsZCkge1xuICAgIGkgPSAwOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcblxuICAgIHdoaWxlICgoY2hpbGQgPSBjaGlsZC5wcmV2aW91c1NpYmxpbmcpICE9PSBudWxsKSB7XG4gICAgICBpZiAoY2hpbGQubm9kZVR5cGUgPT09IDEpIGkgKz0gMTtcbiAgICB9XG5cbiAgICByZXR1cm4gaTtcbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGVxKGluZGV4KSB7XG4gIGlmICh0eXBlb2YgaW5kZXggPT09ICd1bmRlZmluZWQnKSByZXR1cm4gdGhpcztcbiAgdmFyIGxlbmd0aCA9IHRoaXMubGVuZ3RoO1xuXG4gIGlmIChpbmRleCA+IGxlbmd0aCAtIDEpIHtcbiAgICByZXR1cm4gJChbXSk7XG4gIH1cblxuICBpZiAoaW5kZXggPCAwKSB7XG4gICAgdmFyIHJldHVybkluZGV4ID0gbGVuZ3RoICsgaW5kZXg7XG4gICAgaWYgKHJldHVybkluZGV4IDwgMCkgcmV0dXJuICQoW10pO1xuICAgIHJldHVybiAkKFt0aGlzW3JldHVybkluZGV4XV0pO1xuICB9XG5cbiAgcmV0dXJuICQoW3RoaXNbaW5kZXhdXSk7XG59XG5cbmZ1bmN0aW9uIGFwcGVuZCgpIHtcbiAgdmFyIG5ld0NoaWxkO1xuICB2YXIgZG9jdW1lbnQgPSBnZXREb2N1bWVudCgpO1xuXG4gIGZvciAodmFyIGsgPSAwOyBrIDwgYXJndW1lbnRzLmxlbmd0aDsgayArPSAxKSB7XG4gICAgbmV3Q2hpbGQgPSBrIDwgMCB8fCBhcmd1bWVudHMubGVuZ3RoIDw9IGsgPyB1bmRlZmluZWQgOiBhcmd1bWVudHNba107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmICh0eXBlb2YgbmV3Q2hpbGQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHZhciB0ZW1wRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRlbXBEaXYuaW5uZXJIVE1MID0gbmV3Q2hpbGQ7XG5cbiAgICAgICAgd2hpbGUgKHRlbXBEaXYuZmlyc3RDaGlsZCkge1xuICAgICAgICAgIHRoaXNbaV0uYXBwZW5kQ2hpbGQodGVtcERpdi5maXJzdENoaWxkKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChuZXdDaGlsZCBpbnN0YW5jZW9mIERvbTcpIHtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBuZXdDaGlsZC5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgICAgIHRoaXNbaV0uYXBwZW5kQ2hpbGQobmV3Q2hpbGRbal0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzW2ldLmFwcGVuZENoaWxkKG5ld0NoaWxkKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn1cblxuZnVuY3Rpb24gYXBwZW5kVG8ocGFyZW50KSB7XG4gICQocGFyZW50KS5hcHBlbmQodGhpcyk7XG4gIHJldHVybiB0aGlzO1xufVxuXG5mdW5jdGlvbiBwcmVwZW5kKG5ld0NoaWxkKSB7XG4gIHZhciBkb2N1bWVudCA9IGdldERvY3VtZW50KCk7XG4gIHZhciBpO1xuICB2YXIgajtcblxuICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGlmICh0eXBlb2YgbmV3Q2hpbGQgPT09ICdzdHJpbmcnKSB7XG4gICAgICB2YXIgdGVtcERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdGVtcERpdi5pbm5lckhUTUwgPSBuZXdDaGlsZDtcblxuICAgICAgZm9yIChqID0gdGVtcERpdi5jaGlsZE5vZGVzLmxlbmd0aCAtIDE7IGogPj0gMDsgaiAtPSAxKSB7XG4gICAgICAgIHRoaXNbaV0uaW5zZXJ0QmVmb3JlKHRlbXBEaXYuY2hpbGROb2Rlc1tqXSwgdGhpc1tpXS5jaGlsZE5vZGVzWzBdKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG5ld0NoaWxkIGluc3RhbmNlb2YgRG9tNykge1xuICAgICAgZm9yIChqID0gMDsgaiA8IG5ld0NoaWxkLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgIHRoaXNbaV0uaW5zZXJ0QmVmb3JlKG5ld0NoaWxkW2pdLCB0aGlzW2ldLmNoaWxkTm9kZXNbMF0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzW2ldLmluc2VydEJlZm9yZShuZXdDaGlsZCwgdGhpc1tpXS5jaGlsZE5vZGVzWzBdKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn1cblxuZnVuY3Rpb24gcHJlcGVuZFRvKHBhcmVudCkge1xuICAkKHBhcmVudCkucHJlcGVuZCh0aGlzKTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydEJlZm9yZShzZWxlY3Rvcikge1xuICB2YXIgYmVmb3JlID0gJChzZWxlY3Rvcik7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgaWYgKGJlZm9yZS5sZW5ndGggPT09IDEpIHtcbiAgICAgIGJlZm9yZVswXS5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0aGlzW2ldLCBiZWZvcmVbMF0pO1xuICAgIH0gZWxzZSBpZiAoYmVmb3JlLmxlbmd0aCA+IDEpIHtcbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgYmVmb3JlLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgIGJlZm9yZVtqXS5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0aGlzW2ldLmNsb25lTm9kZSh0cnVlKSwgYmVmb3JlW2pdKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gaW5zZXJ0QWZ0ZXIoc2VsZWN0b3IpIHtcbiAgdmFyIGFmdGVyID0gJChzZWxlY3Rvcik7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgaWYgKGFmdGVyLmxlbmd0aCA9PT0gMSkge1xuICAgICAgYWZ0ZXJbMF0ucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodGhpc1tpXSwgYWZ0ZXJbMF0ubmV4dFNpYmxpbmcpO1xuICAgIH0gZWxzZSBpZiAoYWZ0ZXIubGVuZ3RoID4gMSkge1xuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBhZnRlci5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgICBhZnRlcltqXS5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0aGlzW2ldLmNsb25lTm9kZSh0cnVlKSwgYWZ0ZXJbal0ubmV4dFNpYmxpbmcpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBuZXh0KHNlbGVjdG9yKSB7XG4gIGlmICh0aGlzLmxlbmd0aCA+IDApIHtcbiAgICBpZiAoc2VsZWN0b3IpIHtcbiAgICAgIGlmICh0aGlzWzBdLm5leHRFbGVtZW50U2libGluZyAmJiAkKHRoaXNbMF0ubmV4dEVsZW1lbnRTaWJsaW5nKS5pcyhzZWxlY3RvcikpIHtcbiAgICAgICAgcmV0dXJuICQoW3RoaXNbMF0ubmV4dEVsZW1lbnRTaWJsaW5nXSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAkKFtdKTtcbiAgICB9XG5cbiAgICBpZiAodGhpc1swXS5uZXh0RWxlbWVudFNpYmxpbmcpIHJldHVybiAkKFt0aGlzWzBdLm5leHRFbGVtZW50U2libGluZ10pO1xuICAgIHJldHVybiAkKFtdKTtcbiAgfVxuXG4gIHJldHVybiAkKFtdKTtcbn1cblxuZnVuY3Rpb24gbmV4dEFsbChzZWxlY3Rvcikge1xuICB2YXIgbmV4dEVscyA9IFtdO1xuICB2YXIgZWwgPSB0aGlzWzBdO1xuICBpZiAoIWVsKSByZXR1cm4gJChbXSk7XG5cbiAgd2hpbGUgKGVsLm5leHRFbGVtZW50U2libGluZykge1xuICAgIHZhciBfbmV4dCA9IGVsLm5leHRFbGVtZW50U2libGluZzsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXG4gICAgaWYgKHNlbGVjdG9yKSB7XG4gICAgICBpZiAoJChfbmV4dCkuaXMoc2VsZWN0b3IpKSBuZXh0RWxzLnB1c2goX25leHQpO1xuICAgIH0gZWxzZSBuZXh0RWxzLnB1c2goX25leHQpO1xuXG4gICAgZWwgPSBfbmV4dDtcbiAgfVxuXG4gIHJldHVybiAkKG5leHRFbHMpO1xufVxuXG5mdW5jdGlvbiBwcmV2KHNlbGVjdG9yKSB7XG4gIGlmICh0aGlzLmxlbmd0aCA+IDApIHtcbiAgICB2YXIgZWwgPSB0aGlzWzBdO1xuXG4gICAgaWYgKHNlbGVjdG9yKSB7XG4gICAgICBpZiAoZWwucHJldmlvdXNFbGVtZW50U2libGluZyAmJiAkKGVsLnByZXZpb3VzRWxlbWVudFNpYmxpbmcpLmlzKHNlbGVjdG9yKSkge1xuICAgICAgICByZXR1cm4gJChbZWwucHJldmlvdXNFbGVtZW50U2libGluZ10pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gJChbXSk7XG4gICAgfVxuXG4gICAgaWYgKGVsLnByZXZpb3VzRWxlbWVudFNpYmxpbmcpIHJldHVybiAkKFtlbC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nXSk7XG4gICAgcmV0dXJuICQoW10pO1xuICB9XG5cbiAgcmV0dXJuICQoW10pO1xufVxuXG5mdW5jdGlvbiBwcmV2QWxsKHNlbGVjdG9yKSB7XG4gIHZhciBwcmV2RWxzID0gW107XG4gIHZhciBlbCA9IHRoaXNbMF07XG4gIGlmICghZWwpIHJldHVybiAkKFtdKTtcblxuICB3aGlsZSAoZWwucHJldmlvdXNFbGVtZW50U2libGluZykge1xuICAgIHZhciBfcHJldiA9IGVsLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcblxuICAgIGlmIChzZWxlY3Rvcikge1xuICAgICAgaWYgKCQoX3ByZXYpLmlzKHNlbGVjdG9yKSkgcHJldkVscy5wdXNoKF9wcmV2KTtcbiAgICB9IGVsc2UgcHJldkVscy5wdXNoKF9wcmV2KTtcblxuICAgIGVsID0gX3ByZXY7XG4gIH1cblxuICByZXR1cm4gJChwcmV2RWxzKTtcbn1cblxuZnVuY3Rpb24gc2libGluZ3Moc2VsZWN0b3IpIHtcbiAgcmV0dXJuIHRoaXMubmV4dEFsbChzZWxlY3RvcikuYWRkKHRoaXMucHJldkFsbChzZWxlY3RvcikpO1xufVxuXG5mdW5jdGlvbiBwYXJlbnQoc2VsZWN0b3IpIHtcbiAgdmFyIHBhcmVudHMgPSBbXTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGlmICh0aGlzW2ldLnBhcmVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgIGlmIChzZWxlY3Rvcikge1xuICAgICAgICBpZiAoJCh0aGlzW2ldLnBhcmVudE5vZGUpLmlzKHNlbGVjdG9yKSkgcGFyZW50cy5wdXNoKHRoaXNbaV0ucGFyZW50Tm9kZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJlbnRzLnB1c2godGhpc1tpXS5wYXJlbnROb2RlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gJChwYXJlbnRzKTtcbn1cblxuZnVuY3Rpb24gcGFyZW50cyhzZWxlY3Rvcikge1xuICB2YXIgcGFyZW50cyA9IFtdOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgdmFyIF9wYXJlbnQgPSB0aGlzW2ldLnBhcmVudE5vZGU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcblxuICAgIHdoaWxlIChfcGFyZW50KSB7XG4gICAgICBpZiAoc2VsZWN0b3IpIHtcbiAgICAgICAgaWYgKCQoX3BhcmVudCkuaXMoc2VsZWN0b3IpKSBwYXJlbnRzLnB1c2goX3BhcmVudCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJlbnRzLnB1c2goX3BhcmVudCk7XG4gICAgICB9XG5cbiAgICAgIF9wYXJlbnQgPSBfcGFyZW50LnBhcmVudE5vZGU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuICQocGFyZW50cyk7XG59XG5cbmZ1bmN0aW9uIGNsb3Nlc3Qoc2VsZWN0b3IpIHtcbiAgdmFyIGNsb3Nlc3QgPSB0aGlzOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cbiAgaWYgKHR5cGVvZiBzZWxlY3RvciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gJChbXSk7XG4gIH1cblxuICBpZiAoIWNsb3Nlc3QuaXMoc2VsZWN0b3IpKSB7XG4gICAgY2xvc2VzdCA9IGNsb3Nlc3QucGFyZW50cyhzZWxlY3RvcikuZXEoMCk7XG4gIH1cblxuICByZXR1cm4gY2xvc2VzdDtcbn1cblxuZnVuY3Rpb24gZmluZChzZWxlY3Rvcikge1xuICB2YXIgZm91bmRFbGVtZW50cyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIHZhciBmb3VuZCA9IHRoaXNbaV0ucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG5cbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IGZvdW5kLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICBmb3VuZEVsZW1lbnRzLnB1c2goZm91bmRbal0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAkKGZvdW5kRWxlbWVudHMpO1xufVxuXG5mdW5jdGlvbiBjaGlsZHJlbihzZWxlY3Rvcikge1xuICB2YXIgY2hpbGRyZW4gPSBbXTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIHZhciBjaGlsZE5vZGVzID0gdGhpc1tpXS5jaGlsZHJlbjtcblxuICAgIGZvciAodmFyIGogPSAwOyBqIDwgY2hpbGROb2Rlcy5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgaWYgKCFzZWxlY3RvciB8fCAkKGNoaWxkTm9kZXNbal0pLmlzKHNlbGVjdG9yKSkge1xuICAgICAgICBjaGlsZHJlbi5wdXNoKGNoaWxkTm9kZXNbal0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAkKGNoaWxkcmVuKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlKCkge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAodGhpc1tpXS5wYXJlbnROb2RlKSB0aGlzW2ldLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpc1tpXSk7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn1cblxuZnVuY3Rpb24gZGV0YWNoKCkge1xuICByZXR1cm4gdGhpcy5yZW1vdmUoKTtcbn1cblxuZnVuY3Rpb24gYWRkKCkge1xuICB2YXIgZG9tID0gdGhpcztcbiAgdmFyIGk7XG4gIHZhciBqO1xuXG4gIGZvciAodmFyIF9sZW4xMCA9IGFyZ3VtZW50cy5sZW5ndGgsIGVscyA9IG5ldyBBcnJheShfbGVuMTApLCBfa2V5MTAgPSAwOyBfa2V5MTAgPCBfbGVuMTA7IF9rZXkxMCsrKSB7XG4gICAgZWxzW19rZXkxMF0gPSBhcmd1bWVudHNbX2tleTEwXTtcbiAgfVxuXG4gIGZvciAoaSA9IDA7IGkgPCBlbHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICB2YXIgdG9BZGQgPSAkKGVsc1tpXSk7XG5cbiAgICBmb3IgKGogPSAwOyBqIDwgdG9BZGQubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgIGRvbS5wdXNoKHRvQWRkW2pdKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZG9tO1xufVxuXG5mdW5jdGlvbiBlbXB0eSgpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgdmFyIGVsID0gdGhpc1tpXTtcblxuICAgIGlmIChlbC5ub2RlVHlwZSA9PT0gMSkge1xuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBlbC5jaGlsZE5vZGVzLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgIGlmIChlbC5jaGlsZE5vZGVzW2pdLnBhcmVudE5vZGUpIHtcbiAgICAgICAgICBlbC5jaGlsZE5vZGVzW2pdLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWwuY2hpbGROb2Rlc1tqXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZWwudGV4dENvbnRlbnQgPSAnJztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn1cblxuZnVuY3Rpb24gc2Nyb2xsVG8oKSB7XG4gIHZhciB3aW5kb3cgPSBnZXRXaW5kb3coKTtcblxuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgdmFyIGxlZnQgPSBhcmdzWzBdLFxuICAgICAgdG9wID0gYXJnc1sxXSxcbiAgICAgIGR1cmF0aW9uID0gYXJnc1syXSxcbiAgICAgIGVhc2luZyA9IGFyZ3NbM10sXG4gICAgICBjYWxsYmFjayA9IGFyZ3NbNF07XG5cbiAgaWYgKGFyZ3MubGVuZ3RoID09PSA0ICYmIHR5cGVvZiBlYXNpbmcgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjYWxsYmFjayA9IGVhc2luZztcbiAgICBsZWZ0ID0gYXJnc1swXTtcbiAgICB0b3AgPSBhcmdzWzFdO1xuICAgIGR1cmF0aW9uID0gYXJnc1syXTtcbiAgICBjYWxsYmFjayA9IGFyZ3NbM107XG4gICAgZWFzaW5nID0gYXJnc1s0XTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgZWFzaW5nID09PSAndW5kZWZpbmVkJykgZWFzaW5nID0gJ3N3aW5nJztcbiAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiBhbmltYXRlKCkge1xuICAgIHZhciBlbCA9IHRoaXM7XG4gICAgdmFyIGN1cnJlbnRUb3A7XG4gICAgdmFyIGN1cnJlbnRMZWZ0O1xuICAgIHZhciBtYXhUb3A7XG4gICAgdmFyIG1heExlZnQ7XG4gICAgdmFyIG5ld1RvcDtcbiAgICB2YXIgbmV3TGVmdDtcbiAgICB2YXIgc2Nyb2xsVG9wOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cbiAgICB2YXIgc2Nyb2xsTGVmdDsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXG4gICAgdmFyIGFuaW1hdGVUb3AgPSB0b3AgPiAwIHx8IHRvcCA9PT0gMDtcbiAgICB2YXIgYW5pbWF0ZUxlZnQgPSBsZWZ0ID4gMCB8fCBsZWZ0ID09PSAwO1xuXG4gICAgaWYgKHR5cGVvZiBlYXNpbmcgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBlYXNpbmcgPSAnc3dpbmcnO1xuICAgIH1cblxuICAgIGlmIChhbmltYXRlVG9wKSB7XG4gICAgICBjdXJyZW50VG9wID0gZWwuc2Nyb2xsVG9wO1xuXG4gICAgICBpZiAoIWR1cmF0aW9uKSB7XG4gICAgICAgIGVsLnNjcm9sbFRvcCA9IHRvcDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoYW5pbWF0ZUxlZnQpIHtcbiAgICAgIGN1cnJlbnRMZWZ0ID0gZWwuc2Nyb2xsTGVmdDtcblxuICAgICAgaWYgKCFkdXJhdGlvbikge1xuICAgICAgICBlbC5zY3JvbGxMZWZ0ID0gbGVmdDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWR1cmF0aW9uKSByZXR1cm47XG5cbiAgICBpZiAoYW5pbWF0ZVRvcCkge1xuICAgICAgbWF4VG9wID0gZWwuc2Nyb2xsSGVpZ2h0IC0gZWwub2Zmc2V0SGVpZ2h0O1xuICAgICAgbmV3VG9wID0gTWF0aC5tYXgoTWF0aC5taW4odG9wLCBtYXhUb3ApLCAwKTtcbiAgICB9XG5cbiAgICBpZiAoYW5pbWF0ZUxlZnQpIHtcbiAgICAgIG1heExlZnQgPSBlbC5zY3JvbGxXaWR0aCAtIGVsLm9mZnNldFdpZHRoO1xuICAgICAgbmV3TGVmdCA9IE1hdGgubWF4KE1hdGgubWluKGxlZnQsIG1heExlZnQpLCAwKTtcbiAgICB9XG5cbiAgICB2YXIgc3RhcnRUaW1lID0gbnVsbDtcbiAgICBpZiAoYW5pbWF0ZVRvcCAmJiBuZXdUb3AgPT09IGN1cnJlbnRUb3ApIGFuaW1hdGVUb3AgPSBmYWxzZTtcbiAgICBpZiAoYW5pbWF0ZUxlZnQgJiYgbmV3TGVmdCA9PT0gY3VycmVudExlZnQpIGFuaW1hdGVMZWZ0ID0gZmFsc2U7XG5cbiAgICBmdW5jdGlvbiByZW5kZXIodGltZSkge1xuICAgICAgaWYgKHRpbWUgPT09IHZvaWQgMCkge1xuICAgICAgICB0aW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGFydFRpbWUgPT09IG51bGwpIHtcbiAgICAgICAgc3RhcnRUaW1lID0gdGltZTtcbiAgICAgIH1cblxuICAgICAgdmFyIHByb2dyZXNzID0gTWF0aC5tYXgoTWF0aC5taW4oKHRpbWUgLSBzdGFydFRpbWUpIC8gZHVyYXRpb24sIDEpLCAwKTtcbiAgICAgIHZhciBlYXNlUHJvZ3Jlc3MgPSBlYXNpbmcgPT09ICdsaW5lYXInID8gcHJvZ3Jlc3MgOiAwLjUgLSBNYXRoLmNvcyhwcm9ncmVzcyAqIE1hdGguUEkpIC8gMjtcbiAgICAgIHZhciBkb25lO1xuICAgICAgaWYgKGFuaW1hdGVUb3ApIHNjcm9sbFRvcCA9IGN1cnJlbnRUb3AgKyBlYXNlUHJvZ3Jlc3MgKiAobmV3VG9wIC0gY3VycmVudFRvcCk7XG4gICAgICBpZiAoYW5pbWF0ZUxlZnQpIHNjcm9sbExlZnQgPSBjdXJyZW50TGVmdCArIGVhc2VQcm9ncmVzcyAqIChuZXdMZWZ0IC0gY3VycmVudExlZnQpO1xuXG4gICAgICBpZiAoYW5pbWF0ZVRvcCAmJiBuZXdUb3AgPiBjdXJyZW50VG9wICYmIHNjcm9sbFRvcCA+PSBuZXdUb3ApIHtcbiAgICAgICAgZWwuc2Nyb2xsVG9wID0gbmV3VG9wO1xuICAgICAgICBkb25lID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGFuaW1hdGVUb3AgJiYgbmV3VG9wIDwgY3VycmVudFRvcCAmJiBzY3JvbGxUb3AgPD0gbmV3VG9wKSB7XG4gICAgICAgIGVsLnNjcm9sbFRvcCA9IG5ld1RvcDtcbiAgICAgICAgZG9uZSA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChhbmltYXRlTGVmdCAmJiBuZXdMZWZ0ID4gY3VycmVudExlZnQgJiYgc2Nyb2xsTGVmdCA+PSBuZXdMZWZ0KSB7XG4gICAgICAgIGVsLnNjcm9sbExlZnQgPSBuZXdMZWZ0O1xuICAgICAgICBkb25lID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGFuaW1hdGVMZWZ0ICYmIG5ld0xlZnQgPCBjdXJyZW50TGVmdCAmJiBzY3JvbGxMZWZ0IDw9IG5ld0xlZnQpIHtcbiAgICAgICAgZWwuc2Nyb2xsTGVmdCA9IG5ld0xlZnQ7XG4gICAgICAgIGRvbmUgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoZG9uZSkge1xuICAgICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGFuaW1hdGVUb3ApIGVsLnNjcm9sbFRvcCA9IHNjcm9sbFRvcDtcbiAgICAgIGlmIChhbmltYXRlTGVmdCkgZWwuc2Nyb2xsTGVmdCA9IHNjcm9sbExlZnQ7XG4gICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlcik7XG4gICAgfVxuXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShyZW5kZXIpO1xuICB9KTtcbn0gLy8gc2Nyb2xsVG9wKHRvcCwgZHVyYXRpb24sIGVhc2luZywgY2FsbGJhY2spIHtcblxuXG5mdW5jdGlvbiBzY3JvbGxUb3AoKSB7XG4gIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgIGFyZ3NbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgfVxuXG4gIHZhciB0b3AgPSBhcmdzWzBdLFxuICAgICAgZHVyYXRpb24gPSBhcmdzWzFdLFxuICAgICAgZWFzaW5nID0gYXJnc1syXSxcbiAgICAgIGNhbGxiYWNrID0gYXJnc1szXTtcblxuICBpZiAoYXJncy5sZW5ndGggPT09IDMgJiYgdHlwZW9mIGVhc2luZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHRvcCA9IGFyZ3NbMF07XG4gICAgZHVyYXRpb24gPSBhcmdzWzFdO1xuICAgIGNhbGxiYWNrID0gYXJnc1syXTtcbiAgICBlYXNpbmcgPSBhcmdzWzNdO1xuICB9XG5cbiAgdmFyIGRvbSA9IHRoaXM7XG5cbiAgaWYgKHR5cGVvZiB0b3AgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgaWYgKGRvbS5sZW5ndGggPiAwKSByZXR1cm4gZG9tWzBdLnNjcm9sbFRvcDtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBkb20uc2Nyb2xsVG8odW5kZWZpbmVkLCB0b3AsIGR1cmF0aW9uLCBlYXNpbmcsIGNhbGxiYWNrKTtcbn1cblxuZnVuY3Rpb24gc2Nyb2xsTGVmdCgpIHtcbiAgZm9yICh2YXIgX2xlbjMgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4zKSwgX2tleTMgPSAwOyBfa2V5MyA8IF9sZW4zOyBfa2V5MysrKSB7XG4gICAgYXJnc1tfa2V5M10gPSBhcmd1bWVudHNbX2tleTNdO1xuICB9XG5cbiAgdmFyIGxlZnQgPSBhcmdzWzBdLFxuICAgICAgZHVyYXRpb24gPSBhcmdzWzFdLFxuICAgICAgZWFzaW5nID0gYXJnc1syXSxcbiAgICAgIGNhbGxiYWNrID0gYXJnc1szXTtcblxuICBpZiAoYXJncy5sZW5ndGggPT09IDMgJiYgdHlwZW9mIGVhc2luZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGxlZnQgPSBhcmdzWzBdO1xuICAgIGR1cmF0aW9uID0gYXJnc1sxXTtcbiAgICBjYWxsYmFjayA9IGFyZ3NbMl07XG4gICAgZWFzaW5nID0gYXJnc1szXTtcbiAgfVxuXG4gIHZhciBkb20gPSB0aGlzO1xuXG4gIGlmICh0eXBlb2YgbGVmdCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBpZiAoZG9tLmxlbmd0aCA+IDApIHJldHVybiBkb21bMF0uc2Nyb2xsTGVmdDtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBkb20uc2Nyb2xsVG8obGVmdCwgdW5kZWZpbmVkLCBkdXJhdGlvbiwgZWFzaW5nLCBjYWxsYmFjayk7XG59XG5cbmZ1bmN0aW9uIGFuaW1hdGUoaW5pdGlhbFByb3BzLCBpbml0aWFsUGFyYW1zKSB7XG4gIHZhciB3aW5kb3cgPSBnZXRXaW5kb3coKTtcbiAgdmFyIGVscyA9IHRoaXM7XG4gIHZhciBhID0ge1xuICAgIHByb3BzOiBPYmplY3QuYXNzaWduKHt9LCBpbml0aWFsUHJvcHMpLFxuICAgIHBhcmFtczogT2JqZWN0LmFzc2lnbih7XG4gICAgICBkdXJhdGlvbjogMzAwLFxuICAgICAgZWFzaW5nOiAnc3dpbmcnIC8vIG9yICdsaW5lYXInXG5cbiAgICAgIC8qIENhbGxiYWNrc1xuICAgICAgYmVnaW4oZWxlbWVudHMpXG4gICAgICBjb21wbGV0ZShlbGVtZW50cylcbiAgICAgIHByb2dyZXNzKGVsZW1lbnRzLCBjb21wbGV0ZSwgcmVtYWluaW5nLCBzdGFydCwgdHdlZW5WYWx1ZSlcbiAgICAgICovXG5cbiAgICB9LCBpbml0aWFsUGFyYW1zKSxcbiAgICBlbGVtZW50czogZWxzLFxuICAgIGFuaW1hdGluZzogZmFsc2UsXG4gICAgcXVlOiBbXSxcbiAgICBlYXNpbmdQcm9ncmVzczogZnVuY3Rpb24gZWFzaW5nUHJvZ3Jlc3MoZWFzaW5nLCBwcm9ncmVzcykge1xuICAgICAgaWYgKGVhc2luZyA9PT0gJ3N3aW5nJykge1xuICAgICAgICByZXR1cm4gMC41IC0gTWF0aC5jb3MocHJvZ3Jlc3MgKiBNYXRoLlBJKSAvIDI7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgZWFzaW5nID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBlYXNpbmcocHJvZ3Jlc3MpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJvZ3Jlc3M7XG4gICAgfSxcbiAgICBzdG9wOiBmdW5jdGlvbiBzdG9wKCkge1xuICAgICAgaWYgKGEuZnJhbWVJZCkge1xuICAgICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUoYS5mcmFtZUlkKTtcbiAgICAgIH1cblxuICAgICAgYS5hbmltYXRpbmcgPSBmYWxzZTtcbiAgICAgIGEuZWxlbWVudHMuZWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgdmFyIGVsZW1lbnQgPSBlbDtcbiAgICAgICAgZGVsZXRlIGVsZW1lbnQuZG9tN0FuaW1hdGVJbnN0YW5jZTtcbiAgICAgIH0pO1xuICAgICAgYS5xdWUgPSBbXTtcbiAgICB9LFxuICAgIGRvbmU6IGZ1bmN0aW9uIGRvbmUoY29tcGxldGUpIHtcbiAgICAgIGEuYW5pbWF0aW5nID0gZmFsc2U7XG4gICAgICBhLmVsZW1lbnRzLmVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgIHZhciBlbGVtZW50ID0gZWw7XG4gICAgICAgIGRlbGV0ZSBlbGVtZW50LmRvbTdBbmltYXRlSW5zdGFuY2U7XG4gICAgICB9KTtcbiAgICAgIGlmIChjb21wbGV0ZSkgY29tcGxldGUoZWxzKTtcblxuICAgICAgaWYgKGEucXVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdmFyIHF1ZSA9IGEucXVlLnNoaWZ0KCk7XG4gICAgICAgIGEuYW5pbWF0ZShxdWVbMF0sIHF1ZVsxXSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBhbmltYXRlOiBmdW5jdGlvbiBhbmltYXRlKHByb3BzLCBwYXJhbXMpIHtcbiAgICAgIGlmIChhLmFuaW1hdGluZykge1xuICAgICAgICBhLnF1ZS5wdXNoKFtwcm9wcywgcGFyYW1zXSk7XG4gICAgICAgIHJldHVybiBhO1xuICAgICAgfVxuXG4gICAgICB2YXIgZWxlbWVudHMgPSBbXTsgLy8gRGVmaW5lICYgQ2FjaGUgSW5pdGlhbHMgJiBVbml0c1xuXG4gICAgICBhLmVsZW1lbnRzLmVhY2goZnVuY3Rpb24gKGVsLCBpbmRleCkge1xuICAgICAgICB2YXIgaW5pdGlhbEZ1bGxWYWx1ZTtcbiAgICAgICAgdmFyIGluaXRpYWxWYWx1ZTtcbiAgICAgICAgdmFyIHVuaXQ7XG4gICAgICAgIHZhciBmaW5hbFZhbHVlO1xuICAgICAgICB2YXIgZmluYWxGdWxsVmFsdWU7XG4gICAgICAgIGlmICghZWwuZG9tN0FuaW1hdGVJbnN0YW5jZSkgYS5lbGVtZW50c1tpbmRleF0uZG9tN0FuaW1hdGVJbnN0YW5jZSA9IGE7XG4gICAgICAgIGVsZW1lbnRzW2luZGV4XSA9IHtcbiAgICAgICAgICBjb250YWluZXI6IGVsXG4gICAgICAgIH07XG4gICAgICAgIE9iamVjdC5rZXlzKHByb3BzKS5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgICAgICAgaW5pdGlhbEZ1bGxWYWx1ZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsLCBudWxsKS5nZXRQcm9wZXJ0eVZhbHVlKHByb3ApLnJlcGxhY2UoJywnLCAnLicpO1xuICAgICAgICAgIGluaXRpYWxWYWx1ZSA9IHBhcnNlRmxvYXQoaW5pdGlhbEZ1bGxWYWx1ZSk7XG4gICAgICAgICAgdW5pdCA9IGluaXRpYWxGdWxsVmFsdWUucmVwbGFjZShpbml0aWFsVmFsdWUsICcnKTtcbiAgICAgICAgICBmaW5hbFZhbHVlID0gcGFyc2VGbG9hdChwcm9wc1twcm9wXSk7XG4gICAgICAgICAgZmluYWxGdWxsVmFsdWUgPSBwcm9wc1twcm9wXSArIHVuaXQ7XG4gICAgICAgICAgZWxlbWVudHNbaW5kZXhdW3Byb3BdID0ge1xuICAgICAgICAgICAgaW5pdGlhbEZ1bGxWYWx1ZTogaW5pdGlhbEZ1bGxWYWx1ZSxcbiAgICAgICAgICAgIGluaXRpYWxWYWx1ZTogaW5pdGlhbFZhbHVlLFxuICAgICAgICAgICAgdW5pdDogdW5pdCxcbiAgICAgICAgICAgIGZpbmFsVmFsdWU6IGZpbmFsVmFsdWUsXG4gICAgICAgICAgICBmaW5hbEZ1bGxWYWx1ZTogZmluYWxGdWxsVmFsdWUsXG4gICAgICAgICAgICBjdXJyZW50VmFsdWU6IGluaXRpYWxWYWx1ZVxuICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICB2YXIgc3RhcnRUaW1lID0gbnVsbDtcbiAgICAgIHZhciB0aW1lO1xuICAgICAgdmFyIGVsZW1lbnRzRG9uZSA9IDA7XG4gICAgICB2YXIgcHJvcHNEb25lID0gMDtcbiAgICAgIHZhciBkb25lO1xuICAgICAgdmFyIGJlZ2FuID0gZmFsc2U7XG4gICAgICBhLmFuaW1hdGluZyA9IHRydWU7XG5cbiAgICAgIGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgdGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICB2YXIgcHJvZ3Jlc3M7XG4gICAgICAgIHZhciBlYXNlUHJvZ3Jlc3M7IC8vIGxldCBlbDtcblxuICAgICAgICBpZiAoIWJlZ2FuKSB7XG4gICAgICAgICAgYmVnYW4gPSB0cnVlO1xuICAgICAgICAgIGlmIChwYXJhbXMuYmVnaW4pIHBhcmFtcy5iZWdpbihlbHMpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHN0YXJ0VGltZSA9PT0gbnVsbCkge1xuICAgICAgICAgIHN0YXJ0VGltZSA9IHRpbWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGFyYW1zLnByb2dyZXNzKSB7XG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgcGFyYW1zLnByb2dyZXNzKGVscywgTWF0aC5tYXgoTWF0aC5taW4oKHRpbWUgLSBzdGFydFRpbWUpIC8gcGFyYW1zLmR1cmF0aW9uLCAxKSwgMCksIHN0YXJ0VGltZSArIHBhcmFtcy5kdXJhdGlvbiAtIHRpbWUgPCAwID8gMCA6IHN0YXJ0VGltZSArIHBhcmFtcy5kdXJhdGlvbiAtIHRpbWUsIHN0YXJ0VGltZSk7XG4gICAgICAgIH1cblxuICAgICAgICBlbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgdmFyIGVsID0gZWxlbWVudDtcbiAgICAgICAgICBpZiAoZG9uZSB8fCBlbC5kb25lKSByZXR1cm47XG4gICAgICAgICAgT2JqZWN0LmtleXMocHJvcHMpLmZvckVhY2goZnVuY3Rpb24gKHByb3ApIHtcbiAgICAgICAgICAgIGlmIChkb25lIHx8IGVsLmRvbmUpIHJldHVybjtcbiAgICAgICAgICAgIHByb2dyZXNzID0gTWF0aC5tYXgoTWF0aC5taW4oKHRpbWUgLSBzdGFydFRpbWUpIC8gcGFyYW1zLmR1cmF0aW9uLCAxKSwgMCk7XG4gICAgICAgICAgICBlYXNlUHJvZ3Jlc3MgPSBhLmVhc2luZ1Byb2dyZXNzKHBhcmFtcy5lYXNpbmcsIHByb2dyZXNzKTtcbiAgICAgICAgICAgIHZhciBfZWwkcHJvcCA9IGVsW3Byb3BdLFxuICAgICAgICAgICAgICAgIGluaXRpYWxWYWx1ZSA9IF9lbCRwcm9wLmluaXRpYWxWYWx1ZSxcbiAgICAgICAgICAgICAgICBmaW5hbFZhbHVlID0gX2VsJHByb3AuZmluYWxWYWx1ZSxcbiAgICAgICAgICAgICAgICB1bml0ID0gX2VsJHByb3AudW5pdDtcbiAgICAgICAgICAgIGVsW3Byb3BdLmN1cnJlbnRWYWx1ZSA9IGluaXRpYWxWYWx1ZSArIGVhc2VQcm9ncmVzcyAqIChmaW5hbFZhbHVlIC0gaW5pdGlhbFZhbHVlKTtcbiAgICAgICAgICAgIHZhciBjdXJyZW50VmFsdWUgPSBlbFtwcm9wXS5jdXJyZW50VmFsdWU7XG5cbiAgICAgICAgICAgIGlmIChmaW5hbFZhbHVlID4gaW5pdGlhbFZhbHVlICYmIGN1cnJlbnRWYWx1ZSA+PSBmaW5hbFZhbHVlIHx8IGZpbmFsVmFsdWUgPCBpbml0aWFsVmFsdWUgJiYgY3VycmVudFZhbHVlIDw9IGZpbmFsVmFsdWUpIHtcbiAgICAgICAgICAgICAgZWwuY29udGFpbmVyLnN0eWxlW3Byb3BdID0gZmluYWxWYWx1ZSArIHVuaXQ7XG4gICAgICAgICAgICAgIHByb3BzRG9uZSArPSAxO1xuXG4gICAgICAgICAgICAgIGlmIChwcm9wc0RvbmUgPT09IE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBlbC5kb25lID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBlbGVtZW50c0RvbmUgKz0gMTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmIChlbGVtZW50c0RvbmUgPT09IGVsZW1lbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGRvbmUgPSB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChkb25lKSB7XG4gICAgICAgICAgICAgIGEuZG9uZShwYXJhbXMuY29tcGxldGUpO1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGVsLmNvbnRhaW5lci5zdHlsZVtwcm9wXSA9IGN1cnJlbnRWYWx1ZSArIHVuaXQ7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoZG9uZSkgcmV0dXJuOyAvLyBUaGVuIGNhbGxcblxuICAgICAgICBhLmZyYW1lSWQgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlcik7XG4gICAgICB9XG5cbiAgICAgIGEuZnJhbWVJZCA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyKTtcbiAgICAgIHJldHVybiBhO1xuICAgIH1cbiAgfTtcblxuICBpZiAoYS5lbGVtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gZWxzO1xuICB9XG5cbiAgdmFyIGFuaW1hdGVJbnN0YW5jZTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGEuZWxlbWVudHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAoYS5lbGVtZW50c1tpXS5kb203QW5pbWF0ZUluc3RhbmNlKSB7XG4gICAgICBhbmltYXRlSW5zdGFuY2UgPSBhLmVsZW1lbnRzW2ldLmRvbTdBbmltYXRlSW5zdGFuY2U7XG4gICAgfSBlbHNlIGEuZWxlbWVudHNbaV0uZG9tN0FuaW1hdGVJbnN0YW5jZSA9IGE7XG4gIH1cblxuICBpZiAoIWFuaW1hdGVJbnN0YW5jZSkge1xuICAgIGFuaW1hdGVJbnN0YW5jZSA9IGE7XG4gIH1cblxuICBpZiAoaW5pdGlhbFByb3BzID09PSAnc3RvcCcpIHtcbiAgICBhbmltYXRlSW5zdGFuY2Uuc3RvcCgpO1xuICB9IGVsc2Uge1xuICAgIGFuaW1hdGVJbnN0YW5jZS5hbmltYXRlKGEucHJvcHMsIGEucGFyYW1zKTtcbiAgfVxuXG4gIHJldHVybiBlbHM7XG59XG5cbmZ1bmN0aW9uIHN0b3AoKSB7XG4gIHZhciBlbHMgPSB0aGlzO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZWxzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgaWYgKGVsc1tpXS5kb203QW5pbWF0ZUluc3RhbmNlKSB7XG4gICAgICBlbHNbaV0uZG9tN0FuaW1hdGVJbnN0YW5jZS5zdG9wKCk7XG4gICAgfVxuICB9XG59XG5cbnZhciBub1RyaWdnZXIgPSAncmVzaXplIHNjcm9sbCcuc3BsaXQoJyAnKTtcblxuZnVuY3Rpb24gc2hvcnRjdXQobmFtZSkge1xuICBmdW5jdGlvbiBldmVudEhhbmRsZXIoKSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgYXJnc1swXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBpZiAobm9UcmlnZ2VyLmluZGV4T2YobmFtZSkgPCAwKSB7XG4gICAgICAgICAgaWYgKG5hbWUgaW4gdGhpc1tpXSkgdGhpc1tpXVtuYW1lXSgpO2Vsc2Uge1xuICAgICAgICAgICAgJCh0aGlzW2ldKS50cmlnZ2VyKG5hbWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5vbi5hcHBseSh0aGlzLCBbbmFtZV0uY29uY2F0KGFyZ3MpKTtcbiAgfVxuXG4gIHJldHVybiBldmVudEhhbmRsZXI7XG59XG5cbnZhciBjbGljayA9IHNob3J0Y3V0KCdjbGljaycpO1xudmFyIGJsdXIgPSBzaG9ydGN1dCgnYmx1cicpO1xudmFyIGZvY3VzID0gc2hvcnRjdXQoJ2ZvY3VzJyk7XG52YXIgZm9jdXNpbiA9IHNob3J0Y3V0KCdmb2N1c2luJyk7XG52YXIgZm9jdXNvdXQgPSBzaG9ydGN1dCgnZm9jdXNvdXQnKTtcbnZhciBrZXl1cCA9IHNob3J0Y3V0KCdrZXl1cCcpO1xudmFyIGtleWRvd24gPSBzaG9ydGN1dCgna2V5ZG93bicpO1xudmFyIGtleXByZXNzID0gc2hvcnRjdXQoJ2tleXByZXNzJyk7XG52YXIgc3VibWl0ID0gc2hvcnRjdXQoJ3N1Ym1pdCcpO1xudmFyIGNoYW5nZSA9IHNob3J0Y3V0KCdjaGFuZ2UnKTtcbnZhciBtb3VzZWRvd24gPSBzaG9ydGN1dCgnbW91c2Vkb3duJyk7XG52YXIgbW91c2Vtb3ZlID0gc2hvcnRjdXQoJ21vdXNlbW92ZScpO1xudmFyIG1vdXNldXAgPSBzaG9ydGN1dCgnbW91c2V1cCcpO1xudmFyIG1vdXNlZW50ZXIgPSBzaG9ydGN1dCgnbW91c2VlbnRlcicpO1xudmFyIG1vdXNlbGVhdmUgPSBzaG9ydGN1dCgnbW91c2VsZWF2ZScpO1xudmFyIG1vdXNlb3V0ID0gc2hvcnRjdXQoJ21vdXNlb3V0Jyk7XG52YXIgbW91c2VvdmVyID0gc2hvcnRjdXQoJ21vdXNlb3ZlcicpO1xudmFyIHRvdWNoc3RhcnQgPSBzaG9ydGN1dCgndG91Y2hzdGFydCcpO1xudmFyIHRvdWNoZW5kID0gc2hvcnRjdXQoJ3RvdWNoZW5kJyk7XG52YXIgdG91Y2htb3ZlID0gc2hvcnRjdXQoJ3RvdWNobW92ZScpO1xudmFyIHJlc2l6ZSA9IHNob3J0Y3V0KCdyZXNpemUnKTtcbnZhciBzY3JvbGwgPSBzaG9ydGN1dCgnc2Nyb2xsJyk7XG5cbmV4cG9ydCBkZWZhdWx0ICQ7XG5leHBvcnQgeyAkLCBhZGQsIGFkZENsYXNzLCBhbmltYXRlLCBhbmltYXRpb25FbmQsIGFwcGVuZCwgYXBwZW5kVG8sIGF0dHIsIGJsdXIsIGNoYW5nZSwgY2hpbGRyZW4sIGNsaWNrLCBjbG9zZXN0LCBjc3MsIGRhdGEsIGRhdGFzZXQsIGRldGFjaCwgZWFjaCwgZW1wdHksIGVxLCBmaWx0ZXIsIGZpbmQsIGZvY3VzLCBmb2N1c2luLCBmb2N1c291dCwgaGFzQ2xhc3MsIGhlaWdodCwgaGlkZSwgaHRtbCwgaW5kZXgsIGluc2VydEFmdGVyLCBpbnNlcnRCZWZvcmUsIGlzLCBrZXlkb3duLCBrZXlwcmVzcywga2V5dXAsIG1vdXNlZG93biwgbW91c2VlbnRlciwgbW91c2VsZWF2ZSwgbW91c2Vtb3ZlLCBtb3VzZW91dCwgbW91c2VvdmVyLCBtb3VzZXVwLCBuZXh0LCBuZXh0QWxsLCBvZmYsIG9mZnNldCwgb24sIG9uY2UsIG91dGVySGVpZ2h0LCBvdXRlcldpZHRoLCBwYXJlbnQsIHBhcmVudHMsIHByZXBlbmQsIHByZXBlbmRUbywgcHJldiwgcHJldkFsbCwgcHJvcCwgcmVtb3ZlLCByZW1vdmVBdHRyLCByZW1vdmVDbGFzcywgcmVtb3ZlRGF0YSwgcmVzaXplLCBzY3JvbGwsIHNjcm9sbExlZnQsIHNjcm9sbFRvLCBzY3JvbGxUb3AsIHNob3csIHNpYmxpbmdzLCBzdG9wLCBzdHlsZXMsIHN1Ym1pdCwgdGV4dCwgdG9nZ2xlQ2xhc3MsIHRvdWNoZW5kLCB0b3VjaG1vdmUsIHRvdWNoc3RhcnQsIHRyYW5zZm9ybSwgdHJhbnNpdGlvbiwgdHJhbnNpdGlvbkVuZCwgdHJpZ2dlciwgdmFsLCB2YWx1ZSwgd2lkdGggfTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvaHRtbC1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2ZvbnRzLWljb25zLmNzc1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vaW1nL3N2Zy9sb2dvLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vaW1nL3BuZy9sb2dvLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4vaW1nL2pwZWcvcGljdHVyZS1kZXN0LmF2aWZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfNF9fXyA9IG5ldyBVUkwoXCIuL2ltZy9qcGVnL3BpY3R1cmUtdGFiLmF2aWZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfNV9fXyA9IG5ldyBVUkwoXCIuL2ltZy9qcGVnL3BpY3R1cmUtbW9iLmF2aWZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfNl9fXyA9IG5ldyBVUkwoXCIuL2ltZy9qcGVnL3BpY3R1cmUtZGVzdC53ZWJwXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzdfX18gPSBuZXcgVVJMKFwiLi9pbWcvanBlZy9waWN0dXJlLXRhYi53ZWJwXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzhfX18gPSBuZXcgVVJMKFwiLi9pbWcvanBlZy9waWN0dXJlLW1vYi53ZWJwXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzlfX18gPSBuZXcgVVJMKFwiLi9pbWcvanBlZy9waWN0dXJlLWRlc3QuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzEwX19fID0gbmV3IFVSTChcIi4vaW1nL2pwZWcvcGljdHVyZS10YWIuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzExX19fID0gbmV3IFVSTChcIi4vaW1nL2pwZWcvcGljdHVyZS1tb2IuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzEyX19fID0gbmV3IFVSTChcIi4vaW1nL2pwZWcvY3BzLWRlc3QuYXZpZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8xM19fXyA9IG5ldyBVUkwoXCIuL2ltZy9qcGVnL2Nwcy10YWIuYXZpZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8xNF9fXyA9IG5ldyBVUkwoXCIuL2ltZy9qcGVnL2Nwcy1tb2IuYXZpZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8xNV9fXyA9IG5ldyBVUkwoXCIuL2ltZy9qcGVnL2Nwcy1kZXN0LndlYnBcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfMTZfX18gPSBuZXcgVVJMKFwiLi9pbWcvanBlZy9jcHMtdGFiLndlYnBcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfMTdfX18gPSBuZXcgVVJMKFwiLi9pbWcvanBlZy9jcHMtbW9iLndlYnBcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfMThfX18gPSBuZXcgVVJMKFwiLi9pbWcvanBlZy9jcHMtZGVzdC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfMTlfX18gPSBuZXcgVVJMKFwiLi9pbWcvanBlZy9jcHMtdGFiLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8yMF9fXyA9IG5ldyBVUkwoXCIuL2ltZy9qcGVnL2Nwcy1tb2IuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzIxX19fID0gbmV3IFVSTChcIi4vaW1nL2pwZWcvY3BzZS1kZXN0LmF2aWZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfMjJfX18gPSBuZXcgVVJMKFwiLi9pbWcvanBlZy9jcHNlLXRhYi5hdmlmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzIzX19fID0gbmV3IFVSTChcIi4vaW1nL2pwZWcvY3BzZS1tb2IuYXZpZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8yNF9fXyA9IG5ldyBVUkwoXCIuL2ltZy9qcGVnL2Nwc2UtZGVzdC53ZWJwXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzI1X19fID0gbmV3IFVSTChcIi4vaW1nL2pwZWcvY3BzZS10YWIud2VicFwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8yNl9fXyA9IG5ldyBVUkwoXCIuL2ltZy9qcGVnL2Nwc2UtbW9iLndlYnBcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfMjdfX18gPSBuZXcgVVJMKFwiLi9pbWcvanBlZy9jcHNlLW1vYi5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfMjhfX18gPSBuZXcgVVJMKFwiLi9pbWcvanBlZy9lcy1kZXN0LmF2aWZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfMjlfX18gPSBuZXcgVVJMKFwiLi9pbWcvanBlZy9lcy10YWIuYXZpZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8zMF9fXyA9IG5ldyBVUkwoXCIuL2ltZy9qcGVnL2VzLW1vYi5hdmlmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzMxX19fID0gbmV3IFVSTChcIi4vaW1nL2pwZWcvZXMtZGVzdC53ZWJwXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzMyX19fID0gbmV3IFVSTChcIi4vaW1nL2pwZWcvZXMtdGFiLndlYnBcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfMzNfX18gPSBuZXcgVVJMKFwiLi9pbWcvanBlZy9lcy1tb2Iud2VicFwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8zNF9fXyA9IG5ldyBVUkwoXCIuL2ltZy9qcGVnL2VzLWRlc3QuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzM1X19fID0gbmV3IFVSTChcIi4vaW1nL2pwZWcvZXMtdGFiLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8zNl9fXyA9IG5ldyBVUkwoXCIuL2ltZy9qcGVnL2VzLW1vYi5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfMzdfX18gPSBuZXcgVVJMKFwiLi9pbWcvanBlZy/RgXVyc2VyYS1kZXN0LmF2aWZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfMzhfX18gPSBuZXcgVVJMKFwiLi9pbWcvanBlZy/RgXVyc2VyYS10YWIuYXZpZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8zOV9fXyA9IG5ldyBVUkwoXCIuL2ltZy9qcGVnL9GBdXJzZXJhLW1vYi5hdmlmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzQwX19fID0gbmV3IFVSTChcIi4vaW1nL2pwZWcv0YF1cnNlcmEtZGVzdC53ZWJwXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzQxX19fID0gbmV3IFVSTChcIi4vaW1nL2pwZWcv0YF1cnNlcmEtdGFiLndlYnBcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfNDJfX18gPSBuZXcgVVJMKFwiLi9pbWcvanBlZy/RgXVyc2VyYS1tb2Iud2VicFwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF80M19fXyA9IG5ldyBVUkwoXCIuL2ltZy9qcGVnL9GBdXJzZXJhLWRlc3QuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzQ0X19fID0gbmV3IFVSTChcIi4vaW1nL2pwZWcv0YF1cnNlcmEtdGFiLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF80NV9fXyA9IG5ldyBVUkwoXCIuL2ltZy9qcGVnL21heC1tb2IuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzQ2X19fID0gbmV3IFVSTChcIi4vaW1nL2pwZWcvbmV4dXMtZGVzdC5hdmlmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzQ3X19fID0gbmV3IFVSTChcIi4vaW1nL2pwZWcvbmV4dXMtdGFiLmF2aWZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfNDhfX18gPSBuZXcgVVJMKFwiLi9pbWcvanBlZy9uZXh1cy1tb2IuYXZpZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF80OV9fXyA9IG5ldyBVUkwoXCIuL2ltZy9qcGVnL25leHVzLWRlc3Qud2VicFwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF81MF9fXyA9IG5ldyBVUkwoXCIuL2ltZy9qcGVnL25leHVzLXRhYi53ZWJwXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzUxX19fID0gbmV3IFVSTChcIi4vaW1nL2pwZWcvbmV4dXMtbW9iLndlYnBcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfNTJfX18gPSBuZXcgVVJMKFwiLi9pbWcvanBlZy9uZXh1cy1kZXN0LmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF81M19fXyA9IG5ldyBVUkwoXCIuL2ltZy9qcGVnL25leHVzLXRhYi5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfNTRfX18gPSBuZXcgVVJMKFwiLi9pbWcvanBlZy9uZXh1cy1tb2IuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzU1X19fID0gbmV3IFVSTChcIi4vaW1nL3BuZy9sZW5vdmEucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzU2X19fID0gbmV3IFVSTChcIi4vaW1nL3BuZy9zYW1zdW5nLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF81N19fXyA9IG5ldyBVUkwoXCIuL2ltZy9wbmcvYXBwbGUucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzU4X19fID0gbmV3IFVSTChcIi4vaW1nL3BuZy92aWV3c29uaWNrLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF81OV9fXyA9IG5ldyBVUkwoXCIuL2ltZy9wbmcvYm9zY2gucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzYwX19fID0gbmV3IFVSTChcIi4vaW1nL3BuZy9ocC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfNjFfX18gPSBuZXcgVVJMKFwiLi9pbWcvcG5nL2FjZXIucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzYyX19fID0gbmV3IFVSTChcIi4vaW1nL3BuZy9zb255LnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xuLy8gTW9kdWxlXG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzBfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzFfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF8xX19fKTtcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8yX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMl9fXyk7XG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzNfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzRfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF80X19fKTtcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF81X19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfNV9fXyk7XG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfNl9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzZfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzdfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF83X19fKTtcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF84X19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfOF9fXyk7XG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfOV9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzlfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzEwX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMTBfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzExX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMTFfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzEyX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMTJfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzEzX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMTNfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzE0X19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMTRfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzE1X19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMTVfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzE2X19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMTZfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzE3X19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMTdfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzE4X19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMThfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzE5X19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMTlfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzIwX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMjBfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzIxX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMjFfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzIyX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMjJfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzIzX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMjNfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzI0X19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMjRfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzI1X19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMjVfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzI2X19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMjZfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzI3X19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMjdfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzI4X19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMjhfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzI5X19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMjlfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzMwX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMzBfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzMxX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMzFfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzMyX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMzJfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzMzX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMzNfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzM0X19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMzRfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzM1X19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMzVfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzM2X19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMzZfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzM3X19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMzdfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzM4X19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMzhfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzM5X19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMzlfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzQwX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfNDBfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzQxX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfNDFfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzQyX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfNDJfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzQzX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfNDNfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzQ0X19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfNDRfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzQ1X19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfNDVfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzQ2X19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfNDZfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzQ3X19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfNDdfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzQ4X19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfNDhfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzQ5X19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfNDlfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzUwX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfNTBfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzUxX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfNTFfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzUyX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfNTJfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzUzX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfNTNfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzU0X19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfNTRfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzU1X19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfNTVfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzU2X19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfNTZfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzU3X19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfNTdfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzU4X19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfNThfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzU5X19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfNTlfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzYwX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfNjBfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzYxX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfNjFfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzYyX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfNjJfX18pO1xudmFyIGNvZGUgPSBcIjwhRE9DVFlQRSBodG1sPlxcclxcbjxodG1sIGxhbmc9XFxcInJ1XFxcIj5cXHJcXG48aGVhZD5cXHJcXG5cXHQ8bWV0YSBjaGFyc2V0PVxcXCJVVEYtOFxcXCI+XFxyXFxuXFx0PG1ldGEgaHR0cC1lcXVpdj1cXFwiWC1VQS1Db21wYXRpYmxlXFxcIiBjb250ZW50PVxcXCJJRT1lZGdlXFxcIj5cXHJcXG5cXHQ8bWV0YSBuYW1lPVxcXCJ2aWV3cG9ydFxcXCIgY29udGVudD1cXFwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFxcXCI+XFxyXFxuXFx0PG1ldGEgbmFtZT1cXFwia2V5d29yZHNcXFwiIGNvbnRlbnQ9XFxcIkhUTUwgQ1NTIEpTIHRlc3QtdGFza1xcXCI+IFxcclxcblxcdDxtZXRhIG5hbWU9XFxcImRlc2NyaXB0aW9uXFxcIiBjb250ZW50PVxcXCLQotC10YHRgtC+0LLQvtC1INC30LDQtNCw0L3QuNC1INC/0L4g0LzQvtC00YPQu9GPIFdlYiBjb3JlXFxcIj4gXFxyXFxuXFx0PHRpdGxlPkJsb2NrIDEuNi9TYXZpbm92INCQLtCeLjwvdGl0bGU+XFxyXFxuXFx0PGxpbmsgcmVsPVxcXCJzdHlsZXNoZWV0XFxcIiBocmVmPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzBfX18gKyBcIlxcXCI+XFxyXFxuPC9oZWFkPlxcclxcbjxib2R5PlxcclxcblxcclxcblxcdDwhLS0g0KXQtdC00LXRgCAtLT5cXHJcXG5cXHQ8aGVhZGVyIGNsYXNzPVxcXCJjcHMtaGVhZGVyXFxcIj5cXHJcXG5cXHRcXHQ8YSBjbGFzcz1cXFwiY3BzLWhlYWRlcl9fbG9nbyBjcHMtbG9nb1xcXCIgaHJlZj1cXFwiaW5kZXguaHRtbFxcXCI+XFxyXFxuXFx0XFx0XFx0PHBpY3R1cmU+XFxyXFxuXFx0XFx0XFx0XFx0PHNvdXJjZSBzcmNzZXQ9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMV9fXyArIFwiXFxcIiB0eXBlPVxcXCJpbWFnZS9zdmdcXFwiPlxcclxcblxcdFxcdFxcdFxcdDxpbWcgY2xhc3M9XFxcImNwcy1sb2dvX19pbWdcXFwiIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8yX19fICsgXCJcXFwiIGFsdD1cXFwi0JvQvtCz0L7RgtC40L8gQ1BTXFxcIiB3aWR0aD1cXFwiOTdcXFwiIGhlaWdodD1cXFwiNTFcXFwiPlxcclxcblxcdFxcdFxcdDwvcGljdHVyZT5cXHJcXG5cXHRcXHQ8L2E+XFxyXFxuXFx0XFx0PHVsIGNsYXNzPVxcXCJjcHMtaGVhZGVyX19mYiBmYi1jb250ZWluZXJcXFwiPlxcclxcblxcdFxcdFxcdDxsaSBjbGFzcz1cXFwiZmItY29udGVpbmVyX19pdGVtXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHQ8YnV0dG9uIGNsYXNzPVxcXCJmYi1jb250ZWluZXJfX2xpbmsgZmItY29udGVpbmVyX19saW5rLWZiIGJ1dHRvbi1qcy1vcGVuIGljb24tcmVwYWlyXFxcIiBkYXRhLXBhdGg9XFxcIm9uZS1idG5cXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdDxzcGFuIGNsYXNzPVxcXCJmYi1jb250ZWluZXJfX3RleHQgdmlzdWFsbHktaGlkZGVuXFxcIj7QntGB0YLQsNCy0LjRgtGMINC30LDRj9Cy0LrRgzwvc3Bhbj5cXHJcXG5cXHRcXHRcXHRcXHQ8L2J1dHRvbj4gIFxcclxcblxcdFxcdFxcdDwvbGk+XFxyXFxuXFx0XFx0XFx0PGxpIGNsYXNzPVxcXCJmYi1jb250ZWluZXJfX2l0ZW1cXFwiPlxcclxcblxcdFxcdFxcdFxcdDxidXR0b24gY2xhc3M9XFxcImZiLWNvbnRlaW5lcl9fbGluayBmYi1jb250ZWluZXJfX2xpbmstY2FsbCBidXR0b24tanMtb3BlbiBpY29uLXNlYXJjaC1oZWFkZXJcXFwiIGRhdGEtcGF0aD1cXFwidHdvLWJ0blxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PHNwYW4gY2xhc3M9XFxcImZiLWNvbnRlaW5lcl9fdGV4dCB2aXN1YWxseS1oaWRkZW5cXFwiPtCh0YLQsNGC0YPRgSDRgNC10LzQvtC90YLQsDwvc3Bhbj5cXHJcXG5cXHRcXHRcXHRcXHQ8L2J1dHRvbj5cXHJcXG5cXHRcXHRcXHQ8L2xpPlxcclxcblxcdFxcdDwvdWw+XFxyXFxuXFx0XFx0PHVsIGNsYXNzPVxcXCJjcHMtaGVhZGVyX19jb250YWN0cyBjb250YWN0cy1jb250ZWluZXJcXFwiPlxcclxcblxcdFxcdFxcdDxsaSBjbGFzcz1cXFwiY29udGFjdHMtY29udGVpbmVyX19pdGVtXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHQ8YnV0dG9uIGNsYXNzPVxcXCJidXR0b24tanMtb3BlbiBjb250YWN0cy1jb250ZWluZXJfX2xpbmsgaWNvbi1waG9uZVxcXCIgZGF0YS1wYXRoPVxcXCJ0aHJlZS1idG5cXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdDxzcGFuIGNsYXNzPVxcXCJ2aXN1YWxseS1oaWRkZW5cXFwiPtCX0LDQutCw0LfQsNGC0Ywg0LfQstC+0L3QvtC6PC9zcGFuPlxcclxcblxcdFxcdFxcdFxcdDwvYnV0dG9uPlxcclxcblxcdFxcdFxcdDwvbGk+XFxyXFxuXFx0XFx0XFx0PGxpIGNsYXNzPVxcXCJjb250YWN0cy1jb250ZWluZXJfX2l0ZW1cXFwiPlxcclxcblxcdFxcdFxcdFxcdDxidXR0b24gY2xhc3M9XFxcImJ1dHRvbi1qcy1vcGVuIGNvbnRhY3RzLWNvbnRlaW5lcl9fbGluayBpY29uLWNoYXRcXFwiIGRhdGEtcGF0aD1cXFwiZm91ci1idG5cXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdDxzcGFuIGNsYXNzPVxcXCJ2aXN1YWxseS1oaWRkZW5cXFwiPtCd0LDRh9Cw0YLRjCDRh9Cw0YI8L3NwYW4+XFxyXFxuXFx0XFx0XFx0XFx0PC9idXR0b24+XFxyXFxuXFx0XFx0XFx0PC9saT4gXFxyXFxuXFx0XFx0XFx0PGxpIGNsYXNzPVxcXCJjb250YWN0cy1jb250ZWluZXJfX2l0ZW1cXFwiPlxcclxcblxcdFxcdFxcdFxcdDxidXR0b24gY2xhc3M9XFxcImJ1dHRvbi1qcy1vcGVuIGNvbnRhY3RzLWNvbnRlaW5lcl9fbGluayBpY29uLXByb2ZpbGVcXFwiIGRhdGEtcGF0aD1cXFwiZml2ZS1idG5cXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdDxzcGFuIGNsYXNzPVxcXCJ2aXN1YWxseS1oaWRkZW5cXFwiPtCS0YXQvtC0INCb0LjRh9C90YvQuSDQutCw0LHQuNC90LXRgjwvc3Bhbj5cXHJcXG5cXHRcXHRcXHRcXHQ8L2J1dHRvbj5cXHJcXG5cXHRcXHRcXHQ8L2xpPlxcclxcblxcdFxcdDwvdWw+XFxyXFxuXFx0XFx0PGJ1dHRvbiBjbGFzcz1cXFwiYnV0dG9uLWpzLW9wZW4gY3BzLWhlYWRlcl9fYnRuIGJ0bi1vcGVuXFxcIiBkYXRhLXBhdGg9XFxcInNpeC1idG5cXFwiPlxcclxcblxcdFxcdFxcdDxzcGFuIGNsYXNzPVxcXCJ2aXN1YWxseS1oaWRkZW5cXFwiPtCe0YLQutGA0YvRgtGMINC80LXQvdGOPC9zcGFuPlxcclxcblxcdFxcdFxcdDxzcGFuIGNsYXNzPVxcXCJidG4tb3Blbl9fZWxtLWJ0blxcXCI+PC9zcGFuPlxcclxcblxcdFxcdDwvYnV0dG9uPlxcclxcblxcdDwvaGVhZGVyPlxcclxcblxcclxcblxcdDwhLS0g0LHQvtC60L7QstCw0Y8g0L/QsNC90LXQu9GMINC90LDQstC40LPQsNGG0LjQuCAtLT5cXHJcXG5cXHQ8YXNpZGUgY2xhc3M9XFxcImNwcy1hc2lkZSBibG9rLWpzLWFjdGl2ZVxcXCIgZGF0YS10YXJnZXQ9XFxcInNpeC1idG5cXFwiPlxcclxcblxcdFxcdDxkaXYgY2xhc3M9XFxcImNwcy1hc2lkZV9faGVhZGVyXFxcIj5cXHJcXG5cXHRcXHRcXHQ8YnV0dG9uIGNsYXNzPVxcXCJjcHMtYXNpZGVfX2J0bi1jbG9zZSBidXR0b24tanMtb3BlbiBidG4tY2xvc2VcXFwiIGRhdGEtcGF0aD1cXFwiYnRuLWNsb3NlLW9uZVxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0PHNwYW4gY2xhc3M9XFxcInZpc3VhbGx5LWhpZGRlblxcXCI+0JfQsNC60YDRi9GC0Ywg0LzQtdC90Y48L3NwYW4+XFxyXFxuXFx0XFx0XFx0XFx0PHNwYW4gY2xhc3M9XFxcImJ0bi1jbG9zZV9fZWxtLWJ0blxcXCI+PC9zcGFuPlxcclxcblxcdFxcdFxcdDwvYnV0dG9uPlxcclxcblxcdFxcdFxcdDxhIGNsYXNzPVxcXCJjcHMtYXNpZGVfX2xvZ28gY3BzLWxvZ29cXFwiIGhyZWY9XFxcImluZGV4Lmh0bWxcXFwiPlxcclxcblxcdFxcdFxcdFxcdDxwaWN0dXJlPlxcclxcblxcdFxcdFxcdFxcdFxcdDxzb3VyY2Ugc3Jjc2V0PVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzFfX18gKyBcIlxcXCIgdHlwZT1cXFwiaW1hZ2Uvc3ZnXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8aW1nIGNsYXNzPVxcXCJjcHMtbG9nb19faW1nXFxcIiBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMl9fXyArIFwiXFxcIiBhbHQ9XFxcItCb0L7Qs9C+0YLQuNC/IENQU1xcXCIgd2lkdGg9XFxcIjk3XFxcIiBoZWlnaHQ9XFxcIjUxXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHQ8L3BpY3R1cmU+XFxyXFxuXFx0XFx0XFx0PC9hPlxcclxcblxcdFxcdFxcdDxidXR0b24gY2xhc3M9XFxcImNwcy1hc2lkZV9fc2VhcmNoIGJ1dHRvbiBpY29uLXNlYXJjaC1hc2lkZSBidXR0b24tanMtb3BlblxcXCIgZGF0YS1wYXRoPVxcXCJzZXZlbi1idG5cXFwiPlxcclxcblxcdFxcdFxcdFxcdDxzcGFuIGNsYXNzPVxcXCJ2aXN1YWxseS1oaWRkZW5cXFwiPtC/0L7QuNGB0Lo8L3NwYW4+XFxyXFxuXFx0XFx0XFx0PC9idXR0b24+XFxyXFxuXFx0XFx0PC9kaXY+XFxyXFxuXFx0XFx0PG5hdiBjbGFzcz1cXFwiY3BzLWFzaWRlX19uYXYtYXNpZGUgbmF2LW1lbnVcXFwiPlxcclxcblxcdFxcdFxcdDx1bCBjbGFzcz1cXFwibmF2LW1lbnVfX2xpc3RcXFwiPlxcclxcblxcdFxcdFxcdFxcdDxsaSBjbGFzcz1cXFwibmF2LW1lbnVfX2l0ZW1cXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdDxhIGNsYXNzPVxcXCJuYXYtbWVudV9fbGluayBuYXYtbWVudV9fbGluay0tYWN0aXZlXFxcIiBocmVmPVxcXCJpbmRleC5odG1sXFxcIj7QoNC10LzQvtC90YIg0YLQtdGF0L3QuNC60Lg8L2E+XFxyXFxuXFx0XFx0XFx0XFx0PC9saT5cXHJcXG5cXHRcXHRcXHRcXHQ8bGkgY2xhc3M9XFxcIm5hdi1tZW51X19pdGVtXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8YSBjbGFzcz1cXFwibmF2LW1lbnVfX2xpbmtcXFwiIGhyZWY9XFxcIiNcXFwiPtCj0YHQu9GD0LPQuCDQuCDQodC10YDQstC40YHRizwvYT5cXHJcXG5cXHRcXHRcXHRcXHQ8L2xpPlxcclxcblxcdFxcdFxcdFxcdDxsaSBjbGFzcz1cXFwibmF2LW1lbnVfX2l0ZW1cXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdDxhIGNsYXNzPVxcXCJuYXYtbWVudV9fbGlua1xcXCIgaHJlZj1cXFwiI1xcXCI+0JrQvtGA0L/QvtGA0LDRgtC40LLQvdGL0Lwg0LrQu9C40LXQvdGC0Ys8L2E+XFxyXFxuXFx0XFx0XFx0XFx0PC9saT5cXHJcXG5cXHRcXHRcXHRcXHQ8bGkgY2xhc3M9XFxcIm5hdi1tZW51X19pdGVtXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8YSBjbGFzcz1cXFwibmF2LW1lbnVfX2xpbmtcXFwiIGhyZWY9XFxcIiNcXFwiPtCf0YDQvtC00LDQstGG0LDQvCDRgtC10YXQvdC40LrQuDwvYT5cXHJcXG5cXHRcXHRcXHRcXHQ8L2xpPlxcclxcblxcdFxcdFxcdFxcdDxsaSBjbGFzcz1cXFwibmF2LW1lbnVfX2l0ZW1cXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdDxhIGNsYXNzPVxcXCJuYXYtbWVudV9fbGlua1xcXCIgaHJlZj1cXFwiI1xcXCI+0J/QsNGA0YLQvdC10YDQsNC8PC9hPlxcclxcblxcdFxcdFxcdFxcdDwvbGk+XFxyXFxuXFx0XFx0XFx0XFx0PGxpIGNsYXNzPVxcXCJuYXYtbWVudV9faXRlbVxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PGEgY2xhc3M9XFxcIm5hdi1tZW51X19saW5rXFxcIiBocmVmPVxcXCIjXFxcIj7Qn9GA0L7QuNC30LLQvtC00LjRgtC10LvRj9C8PC9hPlxcclxcblxcdFxcdFxcdFxcdDwvbGk+XFxyXFxuXFx0XFx0XFx0XFx0PGxpIGNsYXNzPVxcXCJuYXYtbWVudV9faXRlbVxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PGEgY2xhc3M9XFxcIm5hdi1tZW51X19saW5rXFxcIiBocmVmPVxcXCIjXFxcIj7QndCw0YjQuCDRgdC10YDQstC10YHQvdGL0LUg0YbQtdC90YLRgNGLPC9hPlxcclxcblxcdFxcdFxcdFxcdDwvbGk+XFxyXFxuXFx0XFx0XFx0XFx0PGxpIGNsYXNzPVxcXCJuYXYtbWVudV9faXRlbVxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PGEgY2xhc3M9XFxcIm5hdi1tZW51X19saW5rXFxcIiBocmVmPVxcXCIjXFxcIj7QmtC+0L3RgtCw0LrRgtGLPC9hPlxcclxcblxcdFxcdFxcdFxcdDwvbGk+XFxyXFxuXFx0XFx0XFx0PC91bD5cXHJcXG5cXHRcXHQ8L25hdj5cXHJcXG5cXHRcXHQ8dWwgY2xhc3M9XFxcImNwcy1hc2lkZV9fY29udGFjdHMgY29udGFjdHMtY29udGVpbmVyXFxcIj5cXHJcXG5cXHRcXHRcXHQ8bGkgY2xhc3M9XFxcImNvbnRhY3RzLWNvbnRlaW5lcl9faXRlbVxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0PGJ1dHRvbiBjbGFzcz1cXFwiYnV0dG9uLWpzLW9wZW4gY29udGFjdHMtY29udGVpbmVyX19saW5rIGljb24tcGhvbmVcXFwiIGRhdGEtcGF0aD1cXFwidGhyZWUtYnRuXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8c3BhbiBjbGFzcz1cXFwidmlzdWFsbHktaGlkZGVuXFxcIj7Ql9Cw0LrQsNC30LDRgtGMINC30LLQvtC90L7Qujwvc3Bhbj5cXHJcXG5cXHRcXHRcXHRcXHQ8L2J1dHRvbj5cXHJcXG5cXHRcXHRcXHQ8L2xpPlxcclxcblxcdFxcdFxcdDxsaSBjbGFzcz1cXFwiY29udGFjdHMtY29udGVpbmVyX19pdGVtXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHQ8YnV0dG9uIGNsYXNzPVxcXCJidXR0b24tanMtb3BlbiBjb250YWN0cy1jb250ZWluZXJfX2xpbmsgaWNvbi1jaGF0XFxcIiBkYXRhLXBhdGg9XFxcImZvdXItYnRuXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8c3BhbiBjbGFzcz1cXFwidmlzdWFsbHktaGlkZGVuXFxcIj7QndCw0YfQsNGC0Ywg0YfQsNGCPC9zcGFuPlxcclxcblxcdFxcdFxcdFxcdDwvYnV0dG9uPlxcclxcblxcdFxcdFxcdDwvbGk+IFxcclxcblxcdFxcdFxcdDxsaSBjbGFzcz1cXFwiY29udGFjdHMtY29udGVpbmVyX19pdGVtXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHQ8YnV0dG9uIGNsYXNzPVxcXCJidXR0b24tanMtb3BlbiBjb250YWN0cy1jb250ZWluZXJfX2xpbmsgaWNvbi1wcm9maWxlXFxcIiBkYXRhLXBhdGg9XFxcImZpdmUtYnRuXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8c3BhbiBjbGFzcz1cXFwidmlzdWFsbHktaGlkZGVuXFxcIj7QktGF0L7QtCDQm9C40YfQvdGL0Lkg0LrQsNCx0LjQvdC10YI8L3NwYW4+XFxyXFxuXFx0XFx0XFx0XFx0PC9idXR0b24+XFxyXFxuXFx0XFx0XFx0PC9saT5cXHJcXG5cXHRcXHQ8L3VsPlxcclxcblxcdFxcdDx1bCBjbGFzcz1cXFwiY3BzLWFzaWRlX19jb250YWN0cy1saXN0IGNvbnRhY3RzLWxpc3RcXFwiPlxcclxcblxcdFxcdFxcdDxsaSBjbGFzcz1cXFwiY29udGFjdHMtbGlzdF9faXRlbVxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0PGEgY2xhc3M9XFxcImNvbnRhY3RzLWxpc3RfX2xpbmsgY29udGFjdHMtbGlzdF9fZW1haWxcXFwiIGhyZWY9XFxcIm1haWx0bzptYWlsQGNwcy5jb21cXFwiPm1haWxAY3BzLmNvbTwvYT5cXHJcXG5cXHRcXHRcXHQ8L2xpPlxcclxcblxcdFxcdFxcdDxsaSBjbGFzcz1cXFwiY29udGFjdHMtbGlzdF9faXRlbVxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0PGEgY2xhc3M9XFxcImNvbnRhY3RzLWxpc3RfX2xpbmsgY29udGFjdHMtbGlzdF9fcGhvbmVcXFwiIGhyZWY9XFxcInRlbDo4ODAwODkwODkwMFxcXCI+OCA4MDAgODkwIDg5MDA8L2E+XFxyXFxuXFx0XFx0XFx0PC9saT5cXHJcXG5cXHRcXHQ8L3VsPlxcclxcblxcdFxcdDx1bCBjbGFzcz1cXFwiY3BzLWFzaWRlX19sYW5ndWFnZS1jb250ZWluZXIgbGFuZ3VhZ2UtbGlzdFxcXCI+XFxyXFxuXFx0XFx0XFx0PGxpIGNsYXNzPVxcXCJsYW5ndWFnZS1saXN0X19pdGVtXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHQ8YSBjbGFzcz1cXFwibGFuZ3VhZ2UtbGlzdF9fbGluayBsYW5ndWFnZS1saXN0X19saW5rLS1hY3RpdmVcXFwiIGhyZWY9XFxcImluZGV4Lmh0bWxcXFwiPnJ1PC9hPlxcclxcblxcdFxcdFxcdDwvbGk+XFxyXFxuXFx0XFx0XFx0PGxpIGNsYXNzPVxcXCJsYW5ndWFnZS1saXN0X19pdGVtXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHQ8YSBjbGFzcz1cXFwibGFuZ3VhZ2UtbGlzdF9fbGlua1xcXCIgaHJlZj1cXFwiI1xcXCI+ZW48L2E+XFxyXFxuXFx0XFx0XFx0PC9saT5cXHJcXG5cXHRcXHRcXHQ8bGkgY2xhc3M9XFxcImxhbmd1YWdlLWxpc3RfX2l0ZW1cXFwiPlxcclxcblxcdFxcdFxcdFxcdDxhIGNsYXNzPVxcXCJsYW5ndWFnZS1saXN0X19saW5rXFxcIiBocmVmPVxcXCIjXFxcIj5jaDwvYT5cXHJcXG5cXHRcXHRcXHQ8L2xpPlxcclxcblxcdFxcdDwvdWw+XFxyXFxuXFx0XFx0PGRpdiBjbGFzcz1cXFwiY3BzLWpzLWJnIGNwcy1hc2lkZV9fYmdcXFwiPjwvZGl2PlxcclxcblxcdDwvYXNpZGU+XFxyXFxuXFxyXFxuXFx0PCEtLSDQk9C70LDQstC90YvQuSDQutC+0L3RgtC10LnQvdC10YAgLS0+XFxyXFxuXFx0PG1haW4gY2xhc3M9XFxcImNwcy1tYWluXFxcIj5cXHJcXG5cXHJcXG5cXHRcXHQ8IS0tINCh0LXQutGG0LjRjyDQutC+0L3RgtC10L3RgtCwIC0tPlxcclxcblxcdFxcdDxzZWN0aW9uIGNsYXNzPVxcXCJzZXJ2ZWMtY29udGVudFxcXCI+XFxyXFxuXFxyXFxuXFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwic2VydmVjLWNvbnRlbnRfX2hlYWRlclxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0PGgxIGNsYXNzPVxcXCJzZXJ2ZWMtY29udGVudF9fdGl0bGVcXFwiPtCj0YHQu9GD0LPQuCDQuCDRgdC10YDQstC40YHRizwvaDE+XFxyXFxuXFx0XFx0XFx0XFx0PHVsIGNsYXNzPVxcXCJzZXJ2ZWMtY29udGVudF9fZmVlZGJhY2stc2VydmVjIGZlZWRiYWNrLXNlcnZlY1xcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PGxpIGNsYXNzPVxcXCJmZWVkYmFjay1zZXJ2ZWNfX2l0ZW1cXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDxidXR0b24gY2xhc3M9XFxcImZlZWRiYWNrLXNlcnZlY19fbGluayBidXR0b24tanMtb3BlblxcXCIgZGF0YS1wYXRoPVxcXCJvbmUtYnRuXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQ8c3BhbiBjbGFzcz1cXFwiZmVlZGJhY2stc2VydmVjX190ZXh0XFxcIj7QntGB0YLQsNCy0LjRgtGMINC30LDRj9Cy0LrRgzwvc3Bhbj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQ8aSBjbGFzcz1cXFwiZmVlZGJhY2stc2VydmVjX19pY29uIGljb24tcmVwYWlyXFxcIj48L2k+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PC9idXR0b24+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PC9saT5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8bGkgY2xhc3M9XFxcImZlZWRiYWNrLXNlcnZlY19faXRlbVxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PGJ1dHRvbiBjbGFzcz1cXFwiZmVlZGJhY2stc2VydmVjX19saW5rIGJ1dHRvbi1qcy1vcGVuXFxcIiBkYXRhLXBhdGg9XFxcInR3by1idG5cXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdDxzcGFuIGNsYXNzPVxcXCJmZWVkYmFjay1zZXJ2ZWNfX3RleHRcXFwiPtCh0YLQsNGC0YPRgSDRgNC10LzQvtC90YLQsDwvc3Bhbj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQ8aSBjbGFzcz1cXFwiZmVlZGJhY2stc2VydmVjX19pY29uIGljb24tc2VhcmNoLWhlYWRlclxcXCI+PC9pPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDwvYnV0dG9uPlxcclxcblxcdFxcdFxcdFxcdFxcdDwvbGk+XFxyXFxuXFx0XFx0XFx0XFx0PC91bD5cXHJcXG5cXHRcXHRcXHQ8L2Rpdj5cXHJcXG5cXHRcXHRcXHRcXHJcXG5cXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJzd2lwZXItY29udGFpbmVyIHN3aXBlci1jb250YWluZXItLXNlcnZpY2VcXFwiPlxcclxcblxcdFxcdFxcdFxcdDx1bCBjbGFzcz1cXFwic3dpcGVyLXdyYXBwZXIgc2VydmVjLWNvbnRlbnRfX3NlcnZpY2UtbGlzdCBzZXJ2aWNlLWxpc3RcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdDxsaSBjbGFzcz1cXFwic2VydmljZS1saXN0X19pdGVtIHN3aXBlci1zbGlkZVxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PGEgY2xhc3M9XFxcInNlcnZpY2UtbGlzdF9fbGluayBzZXJ2aWNlLWxpc3RfX2xpbmstLWFjdGl2ZVxcXCIgaHJlZj1cXFwiI1xcXCIgZGF0YS1wYXRoPVxcXCJvbmVcXFwiPtCg0LXQvNC+0L3RgtC40YDRg9C10LzRi9C1INCx0YDQtdC90LTRizwvYT5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8L2xpPlxcclxcblxcdFxcdFxcdFxcdFxcdDxsaSBjbGFzcz1cXFwic2VydmljZS1saXN0X19pdGVtIHN3aXBlci1zbGlkZVxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PGEgY2xhc3M9XFxcInNlcnZpY2UtbGlzdF9fbGlua1xcXCIgaHJlZj1cXFwiI1xcXCIgZGF0YS1wYXRoPVxcXCJ0d29cXFwiPtCg0LXQvNC+0L3RgtC40YDRg9C10LzRi9C1INGD0YHRgtGA0L7QuTwvYT5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8L2xpPlxcclxcblxcdFxcdFxcdFxcdFxcdDxsaSBjbGFzcz1cXFwic2VydmljZS1saXN0X19pdGVtIHN3aXBlci1zbGlkZVxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PGEgY2xhc3M9XFxcInNlcnZpY2UtbGlzdF9fbGlua1xcXCIgaHJlZj1cXFwiI1xcXCIgZGF0YS1wYXRoPVxcXCJ0aHJlZVxcXCI+0KbQtdC90Ysg0L3QsCDRg9GB0LvRg9Cz0Lg8L2E+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PC9saT5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8bGkgY2xhc3M9XFxcInNlcnZpY2UtbGlzdF9faXRlbSBzd2lwZXItc2xpZGVcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDxhIGNsYXNzPVxcXCJzZXJ2aWNlLWxpc3RfX2xpbmtcXFwiIGhyZWY9XFxcIiNcXFwiIGRhdGEtcGF0aD1cXFwiZm91clxcXCI+0JDQtNGA0LXRgdCwINGB0LXRgNCy0LXRgdC90YvRhSDRhtC10L3RgtGA0L7QsjwvYT5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8L2xpPlxcclxcblxcdFxcdFxcdFxcdFxcdDxsaSBjbGFzcz1cXFwic2VydmljZS1saXN0X19pdGVtIHN3aXBlci1zbGlkZVxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PGEgY2xhc3M9XFxcInNlcnZpY2UtbGlzdF9fbGlua1xcXCIgaHJlZj1cXFwiI1xcXCIgZGF0YS1wYXRoPVxcXCJmaXZlXFxcIj7QodC/0LXRhtC40LDQu9GM0L3Ri9C1INGG0LXQvdGLPC9hPlxcclxcblxcdFxcdFxcdFxcdFxcdDwvbGk+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PGxpIGNsYXNzPVxcXCJzZXJ2aWNlLWxpc3RfX2l0ZW0gc3dpcGVyLXNsaWRlXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8YSBjbGFzcz1cXFwic2VydmljZS1saXN0X19saW5rXFxcIiBocmVmPVxcXCIjXFxcIiBkYXRhLXBhdGg9XFxcInNpeFxcXCI+0J7RgtC30L7QstGLPC9hPlxcclxcblxcdFxcdFxcdFxcdFxcdDwvbGk+XFxyXFxuXFx0XFx0XFx0XFx0PC91bD5cXHJcXG5cXHRcXHRcXHQ8L2Rpdj5cXHJcXG5cXHJcXG5cXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJzZXJ2ZWMtY29udGVudF9fc2VydmljZS1pdGVtIHNlcnZpY2UtaXRlbSBzZXJ2aWNlcy1pdGVtLS1hY3RpdmVcXFwiIGRhdGEtdGFyZ2V0PVxcXCJvbmVcXFwiPlxcclxcblxcdFxcdFxcdFxcdDxkaXY+XFxyXFxuXFx0XFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwic2VydmljZS1pdGVtX193cmFwcFxcXCIgZGF0YS10YXJnZXQ9XFxcInRocmVlLWFsbG9wZW5cXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdDxwIGNsYXNzPVxcXCJzZXJ2aWNlLWl0ZW1fX3RleHRcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdNCc0Ysg0Y/QstC70Y/QtdC80YHRjyDQsNCy0YLQvtGA0LjQt9C+0LLQsNC90L3Ri9C8INGB0LXRgNCy0LjRgdC90YvQvCDRhtC10L3RgtGA0L7QvCDQv9C+INGA0LXQvNC+0L3RgtGDINGC0LXRhdC90LjQutC4IERlbGwuINCi0L7Qu9GM0LrQviDRgyDQvdCw0YEg0LLRiyDQvNC+0LbQtdGC0LUg0L7RgtGA0LXQvNC+0L3RgtC40YDQvtCy0LDRgtGMINGB0LLQvtC5INC90L7Rg9GC0LHRg9C6IERlbGwg0YEg0L7RhNC40YbQuNCw0LvRjNC90L7QuSDQs9Cw0YDQsNC90YLQuNC10Lkg0L/RgNC+0LjQt9Cy0L7QtNC40YLQtdC70Y8uXFxyXFxuXFx0XFx0XFx0XFx0XFx0PC9wPlxcclxcblxcdFxcdFxcdFxcdFxcdDxwIGNsYXNzPVxcXCJzZXJ2aWNlLWl0ZW1fX3RleHQgc2VydmljZS1pdGVtX190ZXh0LS12aXN1YWxseS1oaWRkZW5cXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdNCc0Ysg0YPRgdC/0LXRiNC90L4g0YDQsNCx0L7RgtCw0LXQvCDRgSAxOTkyINCz0L7QtNCwINC4INC30LDRgdC70YPQttC40LvQuCDRgNC10L/Rg9GC0LDRhtC40Y4g0L3QsNC00LXQttC90L7Qs9C+INC/0LDRgNGC0L3QtdGA0LAsINGH0YLQviDQv9C+0LTRgtCy0LXRgNC20LTQsNC10YIg0LHQvtC70YzRiNC+0LUg0LrQvtC70LjRh9C10YHRgtCy0L4g0L/QvtGB0YLQvtGP0L3QvdGL0YUg0LrQu9C40LXQvdGC0L7Qsi4g0JzRiyDQs9C+0YDQtNC40LzRgdGPINGC0LXQvCwg0YfRgtC+INC6INC90LDQvCDQvtCx0YDQsNGJ0LDRjtGC0YHRjyDQv9C+INGA0LXQutC+0LzQtdC90LTQsNGG0LjRj9C8INC4LCDQsiDRgdCy0L7RjiDQvtGH0LXRgNC10LTRjCwg0YHQvtCy0LXRgtGD0Y7RgiDQvdCw0YEg0YDQvtC00L3Ri9C8INC4INCx0LvQuNC30LrQuNC8LlxcclxcblxcdFxcdFxcdFxcdFxcdDwvcD5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8cCBjbGFzcz1cXFwic2VydmljZS1pdGVtX190ZXh0XFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHTQnNGLINGP0LLQu9GP0LXQvNGB0Y8g0LDQstGC0L7RgNC40LfQvtCy0LDQvdC90YvQvCDRgdC10YDQstC40YHQvdGL0Lwg0YbQtdC90YLRgNC+0Lwg0L/QviDRgNC10LzQvtC90YLRgyDRgtC10YXQvdC40LrQuCBEZWxsLiDQotC+0LvRjNC60L4g0YMg0L3QsNGBINCy0Ysg0LzQvtC20LXRgtC1INC+0YLRgNC10LzQvtC90YLQuNGA0L7QstCw0YLRjCDRgdCy0L7QuSDQvdC+0YPRgtCx0YPQuiBEZWxsINGBINC+0YTQuNGG0LjQsNC70YzQvdC+0Lkg0LPQsNGA0LDQvdGC0LjQtdC5INC/0YDQvtC40LfQstC+0LTQuNGC0LXQu9GPLlxcclxcblxcdFxcdFxcdFxcdFxcdDwvcD5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8cCBjbGFzcz1cXFwic2VydmljZS1pdGVtX190ZXh0XFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHTQnNGLINGD0YHQv9C10YjQvdC+INGA0LDQsdC+0YLQsNC10Lwg0YEgMTk5MiDQs9C+0LTQsCDQuCDQt9Cw0YHQu9GD0LbQuNC70Lgg0YDQtdC/0YPRgtCw0YbQuNGOINC90LDQtNC10LbQvdC+0LPQviDQv9Cw0YDRgtC90LXRgNCwLCDRh9GC0L4g0L/QvtC00YLQstC10YDQttC00LDQtdGCINCx0L7Qu9GM0YjQvtC1INC60L7Qu9C40YfQtdGB0YLQstC+INC/0L7RgdGC0L7Rj9C90L3Ri9GFINC60LvQuNC10L3RgtC+0LIuINCc0Ysg0LPQvtGA0LTQuNC80YHRjyDRgtC10LwsINGH0YLQviDQuiDQvdCw0Lwg0L7QsdGA0LDRidCw0Y7RgtGB0Y8g0L/QviDRgNC10LrQvtC80LXQvdC00LDRhtC40Y/QvCDQuCwg0LIg0YHQstC+0Y4g0L7Rh9C10YDQtdC00YwsINGB0L7QstC10YLRg9GO0YIg0L3QsNGBINGA0L7QtNC90YvQvCDQuCDQsdC70LjQt9C60LjQvC5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8L3A+XFxyXFxuXFx0XFx0XFx0XFx0PC9kaXY+XFxyXFxuXFx0XFx0XFx0XFx0PGJ1dHRvbiBjbGFzcz1cXFwic2VydmljZS1icmFuZHNfX2xpbmsgc2VydmljZS1pdGVtX19saW5rIGljb24tZXhwYW5kXFxcIiBkYXRhLXBhdGg9XFxcInRocmVlLWFsbG9wZW5cXFwiID7Qp9C40YLQsNGC0Ywg0LTQsNC70YzRiNC1PC9idXR0b24+XFxyXFxuXFx0XFx0XFx0PC9kaXY+XFxyXFxuXFx0XFx0XFx0XFx0PHBpY3R1cmUgY2xhc3M9XFxcInNlcnZpY2UtaXRlbV9faW1nXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8c291cmNlIHR5cGU9XFxcImltYWdlL2F2aWZcXFwiIHNyY3NldD1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8zX19fICsgXCJcXFwiIG1lZGlhPVxcXCIobWluLXdpZHRoOiAxMTIwcHgpXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8c291cmNlIHR5cGU9XFxcImltYWdlL2F2aWZcXFwiIHNyY3NldD1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF80X19fICsgXCJcXFwiIG1lZGlhPVxcXCIobWluLXdpZHRoOiA3NjhweClcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdDxzb3VyY2UgdHlwZT1cXFwiaW1hZ2UvYXZpZlxcXCIgc3Jjc2V0PVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzVfX18gKyBcIlxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PHNvdXJjZSB0eXBlPVxcXCJpbWFnZS93ZWJwXFxcIiBzcmNzZXQ9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfNl9fXyArIFwiXFxcIiBtZWRpYT1cXFwiKG1pbi13aWR0aDogMTEyMHB4KVxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PHNvdXJjZSB0eXBlPVxcXCJpbWFnZS93ZWJwXFxcIiBzcmNzZXQ9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfN19fXyArIFwiXFxcIiBtZWRpYT1cXFwiKG1pbi13aWR0aDogNzY4cHgpXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8c291cmNlIHR5cGU9XFxcImltYWdlL3dlYnBcXFwiIHNyY3NldD1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF84X19fICsgXCJcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdDxzb3VyY2Ugc3Jjc2V0PVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzlfX18gKyBcIlxcXCIgbWVkaWE9XFxcIihtaW4td2lkdGg6IDExMjBweClcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdDxzb3VyY2Ugc3Jjc2V0PVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzEwX19fICsgXCJcXFwiIG1lZGlhPVxcXCIobWluLXdpZHRoOiA3NjhweClcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdDxpbWcgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzExX19fICsgXCJcXFwiIGFsdD1cXFwi0YTQvtGC0L5cXFwiLz5cXHJcXG5cXHRcXHRcXHRcXHQ8L3BpY3R1cmU+XFx0XFx0XFx0XFx0XFxyXFxuXFx0XFx0XFx0PC9kaXY+XFxyXFxuXFxyXFxuXFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwic2VydmVjLWNvbnRlbnRfX3NlcnZpY2UtaXRlbSBzZXJ2aWNlLWl0ZW1cXFwiIGRhdGEtdGFyZ2V0PVxcXCJ0d29cXFwiPlxcclxcblxcdFxcdFxcdFxcdDxkaXY+XFxyXFxuXFx0XFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwic2VydmljZS1pdGVtX193cmFwcFxcXCIgZGF0YS10YXJnZXQ9XFxcInRocmVlLWFsbG9wZW5cXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdDxwIGNsYXNzPVxcXCJzZXJ2aWNlLWl0ZW1fX3RleHRcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdNCc0Ysg0Y/QstC70Y/QtdC80YHRjyDQsNCy0YLQvtGA0LjQt9C+0LLQsNC90L3Ri9C8INGB0LXRgNCy0LjRgdC90YvQvCDRhtC10L3RgtGA0L7QvCDQv9C+INGA0LXQvNC+0L3RgtGDINGC0LXRhdC90LjQutC4IERlbGwuINCi0L7Qu9GM0LrQviDRgyDQvdCw0YEg0LLRiyDQvNC+0LbQtdGC0LUg0L7RgtGA0LXQvNC+0L3RgtC40YDQvtCy0LDRgtGMINGB0LLQvtC5INC90L7Rg9GC0LHRg9C6IERlbGwg0YEg0L7RhNC40YbQuNCw0LvRjNC90L7QuSDQs9Cw0YDQsNC90YLQuNC10Lkg0L/RgNC+0LjQt9Cy0L7QtNC40YLQtdC70Y8uXFxyXFxuXFx0XFx0XFx0XFx0XFx0PC9wPlxcclxcblxcdFxcdFxcdFxcdFxcdDxwIGNsYXNzPVxcXCJzZXJ2aWNlLWl0ZW1fX3RleHQgc2VydmljZS1pdGVtX190ZXh0LS12aXN1YWxseS1oaWRkZW5cXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdNCc0Ysg0YPRgdC/0LXRiNC90L4g0YDQsNCx0L7RgtCw0LXQvCDRgSAxOTkyINCz0L7QtNCwINC4INC30LDRgdC70YPQttC40LvQuCDRgNC10L/Rg9GC0LDRhtC40Y4g0L3QsNC00LXQttC90L7Qs9C+INC/0LDRgNGC0L3QtdGA0LAsINGH0YLQviDQv9C+0LTRgtCy0LXRgNC20LTQsNC10YIg0LHQvtC70YzRiNC+0LUg0LrQvtC70LjRh9C10YHRgtCy0L4g0L/QvtGB0YLQvtGP0L3QvdGL0YUg0LrQu9C40LXQvdGC0L7Qsi4g0JzRiyDQs9C+0YDQtNC40LzRgdGPINGC0LXQvCwg0YfRgtC+INC6INC90LDQvCDQvtCx0YDQsNGJ0LDRjtGC0YHRjyDQv9C+INGA0LXQutC+0LzQtdC90LTQsNGG0LjRj9C8INC4LCDQsiDRgdCy0L7RjiDQvtGH0LXRgNC10LTRjCwg0YHQvtCy0LXRgtGD0Y7RgiDQvdCw0YEg0YDQvtC00L3Ri9C8INC4INCx0LvQuNC30LrQuNC8LlxcclxcblxcdFxcdFxcdFxcdFxcdDwvcD5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8cCBjbGFzcz1cXFwic2VydmljZS1pdGVtX190ZXh0XFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHTQnNGLINGP0LLQu9GP0LXQvNGB0Y8g0LDQstGC0L7RgNC40LfQvtCy0LDQvdC90YvQvCDRgdC10YDQstC40YHQvdGL0Lwg0YbQtdC90YLRgNC+0Lwg0L/QviDRgNC10LzQvtC90YLRgyDRgtC10YXQvdC40LrQuCBEZWxsLiDQotC+0LvRjNC60L4g0YMg0L3QsNGBINCy0Ysg0LzQvtC20LXRgtC1INC+0YLRgNC10LzQvtC90YLQuNGA0L7QstCw0YLRjCDRgdCy0L7QuSDQvdC+0YPRgtCx0YPQuiBEZWxsINGBINC+0YTQuNGG0LjQsNC70YzQvdC+0Lkg0LPQsNGA0LDQvdGC0LjQtdC5INC/0YDQvtC40LfQstC+0LTQuNGC0LXQu9GPLlxcclxcblxcdFxcdFxcdFxcdFxcdDwvcD5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8cCBjbGFzcz1cXFwic2VydmljZS1pdGVtX190ZXh0XFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHTQnNGLINGD0YHQv9C10YjQvdC+INGA0LDQsdC+0YLQsNC10Lwg0YEgMTk5MiDQs9C+0LTQsCDQuCDQt9Cw0YHQu9GD0LbQuNC70Lgg0YDQtdC/0YPRgtCw0YbQuNGOINC90LDQtNC10LbQvdC+0LPQviDQv9Cw0YDRgtC90LXRgNCwLCDRh9GC0L4g0L/QvtC00YLQstC10YDQttC00LDQtdGCINCx0L7Qu9GM0YjQvtC1INC60L7Qu9C40YfQtdGB0YLQstC+INC/0L7RgdGC0L7Rj9C90L3Ri9GFINC60LvQuNC10L3RgtC+0LIuINCc0Ysg0LPQvtGA0LTQuNC80YHRjyDRgtC10LwsINGH0YLQviDQuiDQvdCw0Lwg0L7QsdGA0LDRidCw0Y7RgtGB0Y8g0L/QviDRgNC10LrQvtC80LXQvdC00LDRhtC40Y/QvCDQuCwg0LIg0YHQstC+0Y4g0L7Rh9C10YDQtdC00YwsINGB0L7QstC10YLRg9GO0YIg0L3QsNGBINGA0L7QtNC90YvQvCDQuCDQsdC70LjQt9C60LjQvC5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8L3A+XFxyXFxuXFx0XFx0XFx0XFx0PC9kaXY+XFxyXFxuXFx0XFx0XFx0XFx0PGJ1dHRvbiBjbGFzcz1cXFwic2VydmljZS1icmFuZHNfX2xpbmsgc2VydmljZS1pdGVtX19saW5rIGljb24tZXhwYW5kXFxcIiBkYXRhLXBhdGg9XFxcInRocmVlLWFsbG9wZW5cXFwiID7Qp9C40YLQsNGC0Ywg0LTQsNC70YzRiNC1PC9idXR0b24+XFxyXFxuXFx0XFx0XFx0PC9kaXY+XFxyXFxuXFx0XFx0XFx0PHBpY3R1cmUgY2xhc3M9XFxcInNlcnZpY2UtaXRlbV9faW1nXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHQ8c291cmNlIHR5cGU9XFxcImltYWdlL2F2aWZcXFwiIHNyY3NldD1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8xMl9fXyArIFwiXFxcIiBtZWRpYT1cXFwiKG1pbi13aWR0aDogMTEyMHB4KVxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0PHNvdXJjZSB0eXBlPVxcXCJpbWFnZS9hdmlmXFxcIiBzcmNzZXQ9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMTNfX18gKyBcIlxcXCIgbWVkaWE9XFxcIihtaW4td2lkdGg6IDc2OHB4KVxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0PHNvdXJjZSB0eXBlPVxcXCJpbWFnZS9hdmlmXFxcIiBzcmNzZXQ9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMTRfX18gKyBcIlxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0PHNvdXJjZSB0eXBlPVxcXCJpbWFnZS93ZWJwXFxcIiBzcmNzZXQ9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMTVfX18gKyBcIlxcXCIgbWVkaWE9XFxcIihtaW4td2lkdGg6IDExMjBweClcXFwiPlxcclxcblxcdFxcdFxcdFxcdDxzb3VyY2UgdHlwZT1cXFwiaW1hZ2Uvd2VicFxcXCIgc3Jjc2V0PVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzE2X19fICsgXCJcXFwiIG1lZGlhPVxcXCIobWluLXdpZHRoOiA3NjhweClcXFwiPlxcclxcblxcdFxcdFxcdFxcdDxzb3VyY2UgdHlwZT1cXFwiaW1hZ2Uvd2VicFxcXCIgc3Jjc2V0PVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzE3X19fICsgXCJcXFwiPlxcclxcblxcdFxcdFxcdFxcdDxzb3VyY2Ugc3Jjc2V0PVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzE4X19fICsgXCJcXFwiIG1lZGlhPVxcXCIobWluLXdpZHRoOiAxMTIwcHgpXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHQ8c291cmNlIHNyY3NldD1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8xOV9fXyArIFwiXFxcIiBtZWRpYT1cXFwiKG1pbi13aWR0aDogNzY4cHgpXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHQ8aW1nIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8yMF9fXyArIFwiXFxcIiBhbHQ9XFxcItGE0L7RgtC+XFxcIi8+XFxyXFxuXFx0XFx0XFx0PC9waWN0dXJlPlxcdFxcdFxcdFxcdFxcclxcblxcdFxcdFxcdDwvZGl2PlxcclxcblxcclxcblxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcInNlcnZlYy1jb250ZW50X19zZXJ2aWNlLWl0ZW0gc2VydmljZS1pdGVtXFxcIiBkYXRhLXRhcmdldD1cXFwidGhyZWVcXFwiPlxcclxcblxcdFxcdFxcdFxcdDxkaXY+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwic2VydmljZS1pdGVtX193cmFwcFxcXCIgZGF0YS10YXJnZXQ9XFxcInRocmVlLWFsbG9wZW5cXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDxwIGNsYXNzPVxcXCJzZXJ2aWNlLWl0ZW1fX3RleHRcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdNCc0Ysg0Y/QstC70Y/QtdC80YHRjyDQsNCy0YLQvtGA0LjQt9C+0LLQsNC90L3Ri9C8INGB0LXRgNCy0LjRgdC90YvQvCDRhtC10L3RgtGA0L7QvCDQv9C+INGA0LXQvNC+0L3RgtGDINGC0LXRhdC90LjQutC4IERlbGwuINCi0L7Qu9GM0LrQviDRgyDQvdCw0YEg0LLRiyDQvNC+0LbQtdGC0LUg0L7RgtGA0LXQvNC+0L3RgtC40YDQvtCy0LDRgtGMINGB0LLQvtC5INC90L7Rg9GC0LHRg9C6IERlbGwg0YEg0L7RhNC40YbQuNCw0LvRjNC90L7QuSDQs9Cw0YDQsNC90YLQuNC10Lkg0L/RgNC+0LjQt9Cy0L7QtNC40YLQtdC70Y8uXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PC9wPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDxwIGNsYXNzPVxcXCJzZXJ2aWNlLWl0ZW1fX3RleHQgc2VydmljZS1pdGVtX190ZXh0LS12aXN1YWxseS1oaWRkZW5cXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdNCc0Ysg0YPRgdC/0LXRiNC90L4g0YDQsNCx0L7RgtCw0LXQvCDRgSAxOTkyINCz0L7QtNCwINC4INC30LDRgdC70YPQttC40LvQuCDRgNC10L/Rg9GC0LDRhtC40Y4g0L3QsNC00LXQttC90L7Qs9C+INC/0LDRgNGC0L3QtdGA0LAsINGH0YLQviDQv9C+0LTRgtCy0LXRgNC20LTQsNC10YIg0LHQvtC70YzRiNC+0LUg0LrQvtC70LjRh9C10YHRgtCy0L4g0L/QvtGB0YLQvtGP0L3QvdGL0YUg0LrQu9C40LXQvdGC0L7Qsi4g0JzRiyDQs9C+0YDQtNC40LzRgdGPINGC0LXQvCwg0YfRgtC+INC6INC90LDQvCDQvtCx0YDQsNGJ0LDRjtGC0YHRjyDQv9C+INGA0LXQutC+0LzQtdC90LTQsNGG0LjRj9C8INC4LCDQsiDRgdCy0L7RjiDQvtGH0LXRgNC10LTRjCwg0YHQvtCy0LXRgtGD0Y7RgiDQvdCw0YEg0YDQvtC00L3Ri9C8INC4INCx0LvQuNC30LrQuNC8LlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDwvcD5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8cCBjbGFzcz1cXFwic2VydmljZS1pdGVtX190ZXh0XFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHTQnNGLINGP0LLQu9GP0LXQvNGB0Y8g0LDQstGC0L7RgNC40LfQvtCy0LDQvdC90YvQvCDRgdC10YDQstC40YHQvdGL0Lwg0YbQtdC90YLRgNC+0Lwg0L/QviDRgNC10LzQvtC90YLRgyDRgtC10YXQvdC40LrQuCBEZWxsLiDQotC+0LvRjNC60L4g0YMg0L3QsNGBINCy0Ysg0LzQvtC20LXRgtC1INC+0YLRgNC10LzQvtC90YLQuNGA0L7QstCw0YLRjCDRgdCy0L7QuSDQvdC+0YPRgtCx0YPQuiBEZWxsINGBINC+0YTQuNGG0LjQsNC70YzQvdC+0Lkg0LPQsNGA0LDQvdGC0LjQtdC5INC/0YDQvtC40LfQstC+0LTQuNGC0LXQu9GPLlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDwvcD5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8cCBjbGFzcz1cXFwic2VydmljZS1pdGVtX190ZXh0XFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHTQnNGLINGD0YHQv9C10YjQvdC+INGA0LDQsdC+0YLQsNC10Lwg0YEgMTk5MiDQs9C+0LTQsCDQuCDQt9Cw0YHQu9GD0LbQuNC70Lgg0YDQtdC/0YPRgtCw0YbQuNGOINC90LDQtNC10LbQvdC+0LPQviDQv9Cw0YDRgtC90LXRgNCwLCDRh9GC0L4g0L/QvtC00YLQstC10YDQttC00LDQtdGCINCx0L7Qu9GM0YjQvtC1INC60L7Qu9C40YfQtdGB0YLQstC+INC/0L7RgdGC0L7Rj9C90L3Ri9GFINC60LvQuNC10L3RgtC+0LIuINCc0Ysg0LPQvtGA0LTQuNC80YHRjyDRgtC10LwsINGH0YLQviDQuiDQvdCw0Lwg0L7QsdGA0LDRidCw0Y7RgtGB0Y8g0L/QviDRgNC10LrQvtC80LXQvdC00LDRhtC40Y/QvCDQuCwg0LIg0YHQstC+0Y4g0L7Rh9C10YDQtdC00YwsINGB0L7QstC10YLRg9GO0YIg0L3QsNGBINGA0L7QtNC90YvQvCDQuCDQsdC70LjQt9C60LjQvC5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8L3A+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PC9kaXY+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PGJ1dHRvbiBjbGFzcz1cXFwic2VydmljZS1icmFuZHNfX2xpbmsgc2VydmljZS1pdGVtX19saW5rIGljb24tZXhwYW5kXFxcIiBkYXRhLXBhdGg9XFxcInRocmVlLWFsbG9wZW5cXFwiID7Qp9C40YLQsNGC0Ywg0LTQsNC70YzRiNC1PC9idXR0b24+XFxyXFxuXFx0XFx0XFx0XFx0PC9kaXY+XFxyXFxuXFx0XFx0XFx0XFx0PHBpY3R1cmUgY2xhc3M9XFxcInNlcnZpY2UtaXRlbV9faW1nXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8c291cmNlIHR5cGU9XFxcImltYWdlL2F2aWZcXFwiIHNyY3NldD1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8yMV9fXyArIFwiXFxcIiBtZWRpYT1cXFwiKG1pbi13aWR0aDogMTEyMHB4KVxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PHNvdXJjZSB0eXBlPVxcXCJpbWFnZS9hdmlmXFxcIiBzcmNzZXQ9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMjJfX18gKyBcIlxcXCIgbWVkaWE9XFxcIihtaW4td2lkdGg6IDc2OHB4KVxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PHNvdXJjZSB0eXBlPVxcXCJpbWFnZS9hdmlmXFxcIiBzcmNzZXQ9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMjNfX18gKyBcIlxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PHNvdXJjZSB0eXBlPVxcXCJpbWFnZS93ZWJwXFxcIiBzcmNzZXQ9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMjRfX18gKyBcIlxcXCIgbWVkaWE9XFxcIihtaW4td2lkdGg6IDExMjBweClcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdDxzb3VyY2UgdHlwZT1cXFwiaW1hZ2Uvd2VicFxcXCIgc3Jjc2V0PVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzI1X19fICsgXCJcXFwiIG1lZGlhPVxcXCIobWluLXdpZHRoOiA3NjhweClcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdDxzb3VyY2UgdHlwZT1cXFwiaW1hZ2Uvd2VicFxcXCIgc3Jjc2V0PVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzI2X19fICsgXCJcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdDxzb3VyY2Ugc3Jjc2V0PVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzE4X19fICsgXCJcXFwiIG1lZGlhPVxcXCIobWluLXdpZHRoOiAxMTIwcHgpXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8c291cmNlIHNyY3NldD1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8xOV9fXyArIFwiXFxcIiBtZWRpYT1cXFwiKG1pbi13aWR0aDogNzY4cHgpXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8aW1nIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8yN19fXyArIFwiXFxcIiBhbHQ9XFxcItGE0L7RgtC+XFxcIi8+XFxyXFxuXFx0XFx0XFx0XFx0PC9waWN0dXJlPlxcdFxcdFxcdFxcdFxcclxcblxcdFxcdFxcdDwvZGl2PlxcclxcblxcclxcblxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcInNlcnZlYy1jb250ZW50X19zZXJ2aWNlLWl0ZW0gc2VydmljZS1pdGVtXFxcIiBkYXRhLXRhcmdldD1cXFwiZm91clxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0PGRpdj5cXHJcXG5cXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJzZXJ2aWNlLWl0ZW1fX3dyYXBwXFxcIiBkYXRhLXRhcmdldD1cXFwidGhyZWUtYWxsb3BlblxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PHAgY2xhc3M9XFxcInNlcnZpY2UtaXRlbV9fdGV4dFxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx00JzRiyDRj9Cy0LvRj9C10LzRgdGPINCw0LLRgtC+0YDQuNC30L7QstCw0L3QvdGL0Lwg0YHQtdGA0LLQuNGB0L3Ri9C8INGG0LXQvdGC0YDQvtC8INC/0L4g0YDQtdC80L7QvdGC0YMg0YLQtdGF0L3QuNC60LggRGVsbC4g0KLQvtC70YzQutC+INGDINC90LDRgSDQstGLINC80L7QttC10YLQtSDQvtGC0YDQtdC80L7QvdGC0LjRgNC+0LLQsNGC0Ywg0YHQstC+0Lkg0L3QvtGD0YLQsdGD0LogRGVsbCDRgSDQvtGE0LjRhtC40LDQu9GM0L3QvtC5INCz0LDRgNCw0L3RgtC40LXQuSDQv9GA0L7QuNC30LLQvtC00LjRgtC10LvRjy5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8L3A+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PHAgY2xhc3M9XFxcInNlcnZpY2UtaXRlbV9fdGV4dCBzZXJ2aWNlLWl0ZW1fX3RleHQtLXZpc3VhbGx5LWhpZGRlblxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx00JzRiyDRg9GB0L/QtdGI0L3QviDRgNCw0LHQvtGC0LDQtdC8INGBIDE5OTIg0LPQvtC00LAg0Lgg0LfQsNGB0LvRg9C20LjQu9C4INGA0LXQv9GD0YLQsNGG0LjRjiDQvdCw0LTQtdC20L3QvtCz0L4g0L/QsNGA0YLQvdC10YDQsCwg0YfRgtC+INC/0L7QtNGC0LLQtdGA0LbQtNCw0LXRgiDQsdC+0LvRjNGI0L7QtSDQutC+0LvQuNGH0LXRgdGC0LLQviDQv9C+0YHRgtC+0Y/QvdC90YvRhSDQutC70LjQtdC90YLQvtCyLiDQnNGLINCz0L7RgNC00LjQvNGB0Y8g0YLQtdC8LCDRh9GC0L4g0Log0L3QsNC8INC+0LHRgNCw0YnQsNGO0YLRgdGPINC/0L4g0YDQtdC60L7QvNC10L3QtNCw0YbQuNGP0Lwg0LgsINCyINGB0LLQvtGOINC+0YfQtdGA0LXQtNGMLCDRgdC+0LLQtdGC0YPRjtGCINC90LDRgSDRgNC+0LTQvdGL0Lwg0Lgg0LHQu9C40LfQutC40LwuXFxyXFxuXFx0XFx0XFx0XFx0XFx0PC9wPlxcclxcblxcdFxcdFxcdFxcdFxcdDxwIGNsYXNzPVxcXCJzZXJ2aWNlLWl0ZW1fX3RleHRcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdNCc0Ysg0Y/QstC70Y/QtdC80YHRjyDQsNCy0YLQvtGA0LjQt9C+0LLQsNC90L3Ri9C8INGB0LXRgNCy0LjRgdC90YvQvCDRhtC10L3RgtGA0L7QvCDQv9C+INGA0LXQvNC+0L3RgtGDINGC0LXRhdC90LjQutC4IERlbGwuINCi0L7Qu9GM0LrQviDRgyDQvdCw0YEg0LLRiyDQvNC+0LbQtdGC0LUg0L7RgtGA0LXQvNC+0L3RgtC40YDQvtCy0LDRgtGMINGB0LLQvtC5INC90L7Rg9GC0LHRg9C6IERlbGwg0YEg0L7RhNC40YbQuNCw0LvRjNC90L7QuSDQs9Cw0YDQsNC90YLQuNC10Lkg0L/RgNC+0LjQt9Cy0L7QtNC40YLQtdC70Y8uXFxyXFxuXFx0XFx0XFx0XFx0XFx0PC9wPlxcclxcblxcdFxcdFxcdFxcdFxcdDxwIGNsYXNzPVxcXCJzZXJ2aWNlLWl0ZW1fX3RleHRcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdNCc0Ysg0YPRgdC/0LXRiNC90L4g0YDQsNCx0L7RgtCw0LXQvCDRgSAxOTkyINCz0L7QtNCwINC4INC30LDRgdC70YPQttC40LvQuCDRgNC10L/Rg9GC0LDRhtC40Y4g0L3QsNC00LXQttC90L7Qs9C+INC/0LDRgNGC0L3QtdGA0LAsINGH0YLQviDQv9C+0LTRgtCy0LXRgNC20LTQsNC10YIg0LHQvtC70YzRiNC+0LUg0LrQvtC70LjRh9C10YHRgtCy0L4g0L/QvtGB0YLQvtGP0L3QvdGL0YUg0LrQu9C40LXQvdGC0L7Qsi4g0JzRiyDQs9C+0YDQtNC40LzRgdGPINGC0LXQvCwg0YfRgtC+INC6INC90LDQvCDQvtCx0YDQsNGJ0LDRjtGC0YHRjyDQv9C+INGA0LXQutC+0LzQtdC90LTQsNGG0LjRj9C8INC4LCDQsiDRgdCy0L7RjiDQvtGH0LXRgNC10LTRjCwg0YHQvtCy0LXRgtGD0Y7RgiDQvdCw0YEg0YDQvtC00L3Ri9C8INC4INCx0LvQuNC30LrQuNC8LlxcclxcblxcdFxcdFxcdFxcdFxcdDwvcD5cXHJcXG5cXHRcXHRcXHRcXHQ8L2Rpdj5cXHJcXG5cXHRcXHRcXHRcXHQ8YnV0dG9uIGNsYXNzPVxcXCJzZXJ2aWNlLWJyYW5kc19fbGluayBzZXJ2aWNlLWl0ZW1fX2xpbmsgaWNvbi1leHBhbmRcXFwiIGRhdGEtcGF0aD1cXFwidGhyZWUtYWxsb3BlblxcXCIgPtCn0LjRgtCw0YLRjCDQtNCw0LvRjNGI0LU8L2J1dHRvbj5cXHJcXG5cXHRcXHRcXHQ8L2Rpdj5cXHJcXG5cXHRcXHRcXHRcXHQ8cGljdHVyZSBjbGFzcz1cXFwic2VydmljZS1pdGVtX19pbWdcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdDxzb3VyY2UgdHlwZT1cXFwiaW1hZ2UvYXZpZlxcXCIgc3Jjc2V0PVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzI4X19fICsgXCJcXFwiIG1lZGlhPVxcXCIobWluLXdpZHRoOiAxMTIwcHgpXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8c291cmNlIHR5cGU9XFxcImltYWdlL2F2aWZcXFwiIHNyY3NldD1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8yOV9fXyArIFwiXFxcIiBtZWRpYT1cXFwiKG1pbi13aWR0aDogNzY4cHgpXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8c291cmNlIHR5cGU9XFxcImltYWdlL2F2aWZcXFwiIHNyY3NldD1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8zMF9fXyArIFwiXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8c291cmNlIHR5cGU9XFxcImltYWdlL3dlYnBcXFwiIHNyY3NldD1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8zMV9fXyArIFwiXFxcIiBtZWRpYT1cXFwiKG1pbi13aWR0aDogMTEyMHB4KVxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PHNvdXJjZSB0eXBlPVxcXCJpbWFnZS93ZWJwXFxcIiBzcmNzZXQ9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMzJfX18gKyBcIlxcXCIgbWVkaWE9XFxcIihtaW4td2lkdGg6IDc2OHB4KVxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PHNvdXJjZSB0eXBlPVxcXCJpbWFnZS93ZWJwXFxcIiBzcmNzZXQ9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMzNfX18gKyBcIlxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PHNvdXJjZSBzcmNzZXQ9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMzRfX18gKyBcIlxcXCIgbWVkaWE9XFxcIihtaW4td2lkdGg6IDExMjBweClcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdDxzb3VyY2Ugc3Jjc2V0PVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzM1X19fICsgXCJcXFwiIG1lZGlhPVxcXCIobWluLXdpZHRoOiA3NjhweClcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdDxpbWcgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzM2X19fICsgXCJcXFwiIGFsdD1cXFwi0YTQvtGC0L5cXFwiLz5cXHJcXG5cXHRcXHRcXHRcXHQ8L3BpY3R1cmU+XFx0XFx0XFx0XFx0XFxyXFxuXFx0XFx0XFx0PC9kaXY+XFxyXFxuXFxyXFxuXFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwic2VydmVjLWNvbnRlbnRfX3NlcnZpY2UtaXRlbSBzZXJ2aWNlLWl0ZW1cXFwiIGRhdGEtdGFyZ2V0PVxcXCJmaXZlXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHQ8ZGl2PlxcclxcblxcdFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcInNlcnZpY2UtaXRlbV9fd3JhcHBcXFwiIGRhdGEtdGFyZ2V0PVxcXCJ0aHJlZS1hbGxvcGVuXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8cCBjbGFzcz1cXFwic2VydmljZS1pdGVtX190ZXh0XFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHTQnNGLINGP0LLQu9GP0LXQvNGB0Y8g0LDQstGC0L7RgNC40LfQvtCy0LDQvdC90YvQvCDRgdC10YDQstC40YHQvdGL0Lwg0YbQtdC90YLRgNC+0Lwg0L/QviDRgNC10LzQvtC90YLRgyDRgtC10YXQvdC40LrQuCBEZWxsLiDQotC+0LvRjNC60L4g0YMg0L3QsNGBINCy0Ysg0LzQvtC20LXRgtC1INC+0YLRgNC10LzQvtC90YLQuNGA0L7QstCw0YLRjCDRgdCy0L7QuSDQvdC+0YPRgtCx0YPQuiBEZWxsINGBINC+0YTQuNGG0LjQsNC70YzQvdC+0Lkg0LPQsNGA0LDQvdGC0LjQtdC5INC/0YDQvtC40LfQstC+0LTQuNGC0LXQu9GPLlxcclxcblxcdFxcdFxcdFxcdFxcdDwvcD5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8cCBjbGFzcz1cXFwic2VydmljZS1pdGVtX190ZXh0IHNlcnZpY2UtaXRlbV9fdGV4dC0tdmlzdWFsbHktaGlkZGVuXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHTQnNGLINGD0YHQv9C10YjQvdC+INGA0LDQsdC+0YLQsNC10Lwg0YEgMTk5MiDQs9C+0LTQsCDQuCDQt9Cw0YHQu9GD0LbQuNC70Lgg0YDQtdC/0YPRgtCw0YbQuNGOINC90LDQtNC10LbQvdC+0LPQviDQv9Cw0YDRgtC90LXRgNCwLCDRh9GC0L4g0L/QvtC00YLQstC10YDQttC00LDQtdGCINCx0L7Qu9GM0YjQvtC1INC60L7Qu9C40YfQtdGB0YLQstC+INC/0L7RgdGC0L7Rj9C90L3Ri9GFINC60LvQuNC10L3RgtC+0LIuINCc0Ysg0LPQvtGA0LTQuNC80YHRjyDRgtC10LwsINGH0YLQviDQuiDQvdCw0Lwg0L7QsdGA0LDRidCw0Y7RgtGB0Y8g0L/QviDRgNC10LrQvtC80LXQvdC00LDRhtC40Y/QvCDQuCwg0LIg0YHQstC+0Y4g0L7Rh9C10YDQtdC00YwsINGB0L7QstC10YLRg9GO0YIg0L3QsNGBINGA0L7QtNC90YvQvCDQuCDQsdC70LjQt9C60LjQvC5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8L3A+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PHAgY2xhc3M9XFxcInNlcnZpY2UtaXRlbV9fdGV4dFxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx00JzRiyDRj9Cy0LvRj9C10LzRgdGPINCw0LLRgtC+0YDQuNC30L7QstCw0L3QvdGL0Lwg0YHQtdGA0LLQuNGB0L3Ri9C8INGG0LXQvdGC0YDQvtC8INC/0L4g0YDQtdC80L7QvdGC0YMg0YLQtdGF0L3QuNC60LggRGVsbC4g0KLQvtC70YzQutC+INGDINC90LDRgSDQstGLINC80L7QttC10YLQtSDQvtGC0YDQtdC80L7QvdGC0LjRgNC+0LLQsNGC0Ywg0YHQstC+0Lkg0L3QvtGD0YLQsdGD0LogRGVsbCDRgSDQvtGE0LjRhtC40LDQu9GM0L3QvtC5INCz0LDRgNCw0L3RgtC40LXQuSDQv9GA0L7QuNC30LLQvtC00LjRgtC10LvRjy5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8L3A+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PHAgY2xhc3M9XFxcInNlcnZpY2UtaXRlbV9fdGV4dFxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx00JzRiyDRg9GB0L/QtdGI0L3QviDRgNCw0LHQvtGC0LDQtdC8INGBIDE5OTIg0LPQvtC00LAg0Lgg0LfQsNGB0LvRg9C20LjQu9C4INGA0LXQv9GD0YLQsNGG0LjRjiDQvdCw0LTQtdC20L3QvtCz0L4g0L/QsNGA0YLQvdC10YDQsCwg0YfRgtC+INC/0L7QtNGC0LLQtdGA0LbQtNCw0LXRgiDQsdC+0LvRjNGI0L7QtSDQutC+0LvQuNGH0LXRgdGC0LLQviDQv9C+0YHRgtC+0Y/QvdC90YvRhSDQutC70LjQtdC90YLQvtCyLiDQnNGLINCz0L7RgNC00LjQvNGB0Y8g0YLQtdC8LCDRh9GC0L4g0Log0L3QsNC8INC+0LHRgNCw0YnQsNGO0YLRgdGPINC/0L4g0YDQtdC60L7QvNC10L3QtNCw0YbQuNGP0Lwg0LgsINCyINGB0LLQvtGOINC+0YfQtdGA0LXQtNGMLCDRgdC+0LLQtdGC0YPRjtGCINC90LDRgSDRgNC+0LTQvdGL0Lwg0Lgg0LHQu9C40LfQutC40LwuXFxyXFxuXFx0XFx0XFx0XFx0XFx0PC9wPlxcclxcblxcdFxcdFxcdFxcdDwvZGl2PlxcclxcblxcdFxcdFxcdFxcdDxidXR0b24gY2xhc3M9XFxcInNlcnZpY2UtYnJhbmRzX19saW5rIHNlcnZpY2UtaXRlbV9fbGluayBpY29uLWV4cGFuZFxcXCIgZGF0YS1wYXRoPVxcXCJ0aHJlZS1hbGxvcGVuXFxcIiA+0KfQuNGC0LDRgtGMINC00LDQu9GM0YjQtTwvYnV0dG9uPlxcclxcblxcdFxcdFxcdDwvZGl2PlxcclxcblxcdFxcdFxcdFxcdDxwaWN0dXJlIGNsYXNzPVxcXCJzZXJ2aWNlLWl0ZW1fX2ltZ1xcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PHNvdXJjZSB0eXBlPVxcXCJpbWFnZS9hdmlmXFxcIiBzcmNzZXQ9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMzdfX18gKyBcIlxcXCIgbWVkaWE9XFxcIihtaW4td2lkdGg6IDExMjBweClcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdDxzb3VyY2UgdHlwZT1cXFwiaW1hZ2UvYXZpZlxcXCIgc3Jjc2V0PVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzM4X19fICsgXCJcXFwiIG1lZGlhPVxcXCIobWluLXdpZHRoOiA3NjhweClcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdDxzb3VyY2UgdHlwZT1cXFwiaW1hZ2UvYXZpZlxcXCIgc3Jjc2V0PVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzM5X19fICsgXCJcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdDxzb3VyY2UgdHlwZT1cXFwiaW1hZ2Uvd2VicFxcXCIgc3Jjc2V0PVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzQwX19fICsgXCJcXFwiIG1lZGlhPVxcXCIobWluLXdpZHRoOiAxMTIwcHgpXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8c291cmNlIHR5cGU9XFxcImltYWdlL3dlYnBcXFwiIHNyY3NldD1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF80MV9fXyArIFwiXFxcIiBtZWRpYT1cXFwiKG1pbi13aWR0aDogNzY4cHgpXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8c291cmNlIHR5cGU9XFxcImltYWdlL3dlYnBcXFwiIHNyY3NldD1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF80Ml9fXyArIFwiXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8c291cmNlIHNyY3NldD1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF80M19fXyArIFwiXFxcIiBtZWRpYT1cXFwiKG1pbi13aWR0aDogMTEyMHB4KVxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PHNvdXJjZSBzcmNzZXQ9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfNDRfX18gKyBcIlxcXCIgbWVkaWE9XFxcIihtaW4td2lkdGg6IDc2OHB4KVxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PGltZyBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfNDVfX18gKyBcIlxcXCIgYWx0PVxcXCLRhNC+0YLQvlxcXCIvPlxcclxcblxcdFxcdFxcdFxcdDwvcGljdHVyZT5cXHRcXHRcXHRcXHRcXHJcXG5cXHRcXHRcXHQ8L2Rpdj5cXHJcXG5cXHJcXG5cXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJzZXJ2ZWMtY29udGVudF9fc2VydmljZS1pdGVtIHNlcnZpY2UtaXRlbVxcXCIgZGF0YS10YXJnZXQ9XFxcInNpeFxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0PGRpdj5cXHJcXG5cXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJzZXJ2aWNlLWl0ZW1fX3dyYXBwXFxcIiBkYXRhLXRhcmdldD1cXFwidGhyZWUtYWxsb3BlblxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PHAgY2xhc3M9XFxcInNlcnZpY2UtaXRlbV9fdGV4dFxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx00JzRiyDRj9Cy0LvRj9C10LzRgdGPINCw0LLRgtC+0YDQuNC30L7QstCw0L3QvdGL0Lwg0YHQtdGA0LLQuNGB0L3Ri9C8INGG0LXQvdGC0YDQvtC8INC/0L4g0YDQtdC80L7QvdGC0YMg0YLQtdGF0L3QuNC60LggRGVsbC4g0KLQvtC70YzQutC+INGDINC90LDRgSDQstGLINC80L7QttC10YLQtSDQvtGC0YDQtdC80L7QvdGC0LjRgNC+0LLQsNGC0Ywg0YHQstC+0Lkg0L3QvtGD0YLQsdGD0LogRGVsbCDRgSDQvtGE0LjRhtC40LDQu9GM0L3QvtC5INCz0LDRgNCw0L3RgtC40LXQuSDQv9GA0L7QuNC30LLQvtC00LjRgtC10LvRjy5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8L3A+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PHAgY2xhc3M9XFxcInNlcnZpY2UtaXRlbV9fdGV4dCBzZXJ2aWNlLWl0ZW1fX3RleHQtLXZpc3VhbGx5LWhpZGRlblxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx00JzRiyDRg9GB0L/QtdGI0L3QviDRgNCw0LHQvtGC0LDQtdC8INGBIDE5OTIg0LPQvtC00LAg0Lgg0LfQsNGB0LvRg9C20LjQu9C4INGA0LXQv9GD0YLQsNGG0LjRjiDQvdCw0LTQtdC20L3QvtCz0L4g0L/QsNGA0YLQvdC10YDQsCwg0YfRgtC+INC/0L7QtNGC0LLQtdGA0LbQtNCw0LXRgiDQsdC+0LvRjNGI0L7QtSDQutC+0LvQuNGH0LXRgdGC0LLQviDQv9C+0YHRgtC+0Y/QvdC90YvRhSDQutC70LjQtdC90YLQvtCyLiDQnNGLINCz0L7RgNC00LjQvNGB0Y8g0YLQtdC8LCDRh9GC0L4g0Log0L3QsNC8INC+0LHRgNCw0YnQsNGO0YLRgdGPINC/0L4g0YDQtdC60L7QvNC10L3QtNCw0YbQuNGP0Lwg0LgsINCyINGB0LLQvtGOINC+0YfQtdGA0LXQtNGMLCDRgdC+0LLQtdGC0YPRjtGCINC90LDRgSDRgNC+0LTQvdGL0Lwg0Lgg0LHQu9C40LfQutC40LwuXFxyXFxuXFx0XFx0XFx0XFx0XFx0PC9wPlxcclxcblxcdFxcdFxcdFxcdFxcdDxwIGNsYXNzPVxcXCJzZXJ2aWNlLWl0ZW1fX3RleHRcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdNCc0Ysg0Y/QstC70Y/QtdC80YHRjyDQsNCy0YLQvtGA0LjQt9C+0LLQsNC90L3Ri9C8INGB0LXRgNCy0LjRgdC90YvQvCDRhtC10L3RgtGA0L7QvCDQv9C+INGA0LXQvNC+0L3RgtGDINGC0LXRhdC90LjQutC4IERlbGwuINCi0L7Qu9GM0LrQviDRgyDQvdCw0YEg0LLRiyDQvNC+0LbQtdGC0LUg0L7RgtGA0LXQvNC+0L3RgtC40YDQvtCy0LDRgtGMINGB0LLQvtC5INC90L7Rg9GC0LHRg9C6IERlbGwg0YEg0L7RhNC40YbQuNCw0LvRjNC90L7QuSDQs9Cw0YDQsNC90YLQuNC10Lkg0L/RgNC+0LjQt9Cy0L7QtNC40YLQtdC70Y8uXFxyXFxuXFx0XFx0XFx0XFx0XFx0PC9wPlxcclxcblxcdFxcdFxcdFxcdFxcdDxwIGNsYXNzPVxcXCJzZXJ2aWNlLWl0ZW1fX3RleHRcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdNCc0Ysg0YPRgdC/0LXRiNC90L4g0YDQsNCx0L7RgtCw0LXQvCDRgSAxOTkyINCz0L7QtNCwINC4INC30LDRgdC70YPQttC40LvQuCDRgNC10L/Rg9GC0LDRhtC40Y4g0L3QsNC00LXQttC90L7Qs9C+INC/0LDRgNGC0L3QtdGA0LAsINGH0YLQviDQv9C+0LTRgtCy0LXRgNC20LTQsNC10YIg0LHQvtC70YzRiNC+0LUg0LrQvtC70LjRh9C10YHRgtCy0L4g0L/QvtGB0YLQvtGP0L3QvdGL0YUg0LrQu9C40LXQvdGC0L7Qsi4g0JzRiyDQs9C+0YDQtNC40LzRgdGPINGC0LXQvCwg0YfRgtC+INC6INC90LDQvCDQvtCx0YDQsNGJ0LDRjtGC0YHRjyDQv9C+INGA0LXQutC+0LzQtdC90LTQsNGG0LjRj9C8INC4LCDQsiDRgdCy0L7RjiDQvtGH0LXRgNC10LTRjCwg0YHQvtCy0LXRgtGD0Y7RgiDQvdCw0YEg0YDQvtC00L3Ri9C8INC4INCx0LvQuNC30LrQuNC8LlxcclxcblxcdFxcdFxcdFxcdFxcdDwvcD5cXHJcXG5cXHRcXHRcXHRcXHQ8L2Rpdj5cXHJcXG5cXHRcXHRcXHRcXHQ8YnV0dG9uIGNsYXNzPVxcXCJzZXJ2aWNlLWJyYW5kc19fbGluayBzZXJ2aWNlLWl0ZW1fX2xpbmsgaWNvbi1leHBhbmRcXFwiIGRhdGEtcGF0aD1cXFwidGhyZWUtYWxsb3BlblxcXCIgPtCn0LjRgtCw0YLRjCDQtNCw0LvRjNGI0LU8L2J1dHRvbj5cXHJcXG5cXHRcXHRcXHQ8L2Rpdj5cXHJcXG5cXHRcXHRcXHRcXHQ8cGljdHVyZSBjbGFzcz1cXFwic2VydmljZS1pdGVtX19pbWdcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdDxzb3VyY2UgdHlwZT1cXFwiaW1hZ2UvYXZpZlxcXCIgc3Jjc2V0PVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzQ2X19fICsgXCJcXFwiIG1lZGlhPVxcXCIobWluLXdpZHRoOiAxMTIwcHgpXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8c291cmNlIHR5cGU9XFxcImltYWdlL2F2aWZcXFwiIHNyY3NldD1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF80N19fXyArIFwiXFxcIiBtZWRpYT1cXFwiKG1pbi13aWR0aDogNzY4cHgpXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8c291cmNlIHR5cGU9XFxcImltYWdlL2F2aWZcXFwiIHNyY3NldD1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF80OF9fXyArIFwiXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8c291cmNlIHR5cGU9XFxcImltYWdlL3dlYnBcXFwiIHNyY3NldD1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF80OV9fXyArIFwiXFxcIiBtZWRpYT1cXFwiKG1pbi13aWR0aDogMTEyMHB4KVxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PHNvdXJjZSB0eXBlPVxcXCJpbWFnZS93ZWJwXFxcIiBzcmNzZXQ9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfNTBfX18gKyBcIlxcXCIgbWVkaWE9XFxcIihtaW4td2lkdGg6IDc2OHB4KVxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PHNvdXJjZSB0eXBlPVxcXCJpbWFnZS93ZWJwXFxcIiBzcmNzZXQ9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfNTFfX18gKyBcIlxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PHNvdXJjZSBzcmNzZXQ9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfNTJfX18gKyBcIlxcXCIgbWVkaWE9XFxcIihtaW4td2lkdGg6IDExMjBweClcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdDxzb3VyY2Ugc3Jjc2V0PVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzUzX19fICsgXCJcXFwiIG1lZGlhPVxcXCIobWluLXdpZHRoOiA3NjhweClcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdDxpbWcgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzU0X19fICsgXCJcXFwiIGFsdD1cXFwi0YTQvtGC0L5cXFwiLz5cXHJcXG5cXHRcXHRcXHRcXHQ8L3BpY3R1cmU+XFx0XFxyXFxuXFx0XFx0XFx0PC9kaXY+XFxyXFxuXFxyXFxuXFx0XFx0PC9zZWN0aW9uPlxcclxcblxcclxcblxcdFxcdDwhLS0g0KHQtdC60YbQuNGPINCx0YDQtdC90LTQvtCyIC0tPlxcclxcblxcdFxcdDxzZWN0aW9uIGNsYXNzPVxcXCJzZXJ2aWNlLWJyYW5kc1xcXCI+XFxyXFxuXFx0XFx0XFx0PGgyIGNsYXNzPVxcXCJzZXJ2aWNlLWJyYW5kc19fdGl0bGVcXFwiPtCg0LXQvNC+0L3RgiDRgtC10YXQvdC40LrQuCDRgNCw0LfQu9C40YfQvdGL0YUg0LHRgNC10L3QtNC+0LI8L2gyPlxcclxcblxcdFxcdFxcdFxcclxcblxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcInN3aXBlci1jb250YWluZXIgc3dpcGVyLWNvbnRhaW5lci0tYnJhbmRzIHNlcnZpY2UtYnJhbmRzX19jb250YWluZXJcXFwiPlxcdFxcdFxcdFxcdFxcclxcblxcdFxcdFxcdFxcdDx1bCBjbGFzcz1cXFwic3dpcGVyLXdyYXBwZXIgc2VydmljZS1icmFuZHNfX3dyYXBwXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8bGkgY2xhc3M9XFxcInN3aXBlci1zbGlkZSBzZXJ2aWNlLWJyYW5kc19fc2xpZGUtbGlzdCBzbGlkZS1saXN0XFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8YSBjbGFzcz1cXFwic2xpZGUtbGlzdF9fbGlua1xcXCIgaHJlZj1cXFwiI1xcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0PGltZyBjbGFzcz1cXFwic2xpZGUtbGlzdF9fbG9nb1xcXCIgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzU1X19fICsgXCJcXFwiIGFsdD1cXFwiTGVub3ZhXFxcIiB3aWR0aD1cXFwiMTA4XFxcIiBoZWlnaHQ9XFxcIjMyXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQ8c3BhbiBjbGFzcz1cXFwic2xpZGUtbGlzdF9fYnRuIGljb24tZHJvcGRvd25cXFwiPjwvc3Bhbj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8L2E+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PC9saT5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8bGkgY2xhc3M9XFxcInN3aXBlci1zbGlkZSBzZXJ2aWNlLWJyYW5kc19fc2xpZGUtbGlzdCBzbGlkZS1saXN0XFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8YSBjbGFzcz1cXFwic2xpZGUtbGlzdF9fbGlua1xcXCIgaHJlZj1cXFwiI1xcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0PGltZyBjbGFzcz1cXFwic2xpZGUtbGlzdF9fbG9nb1xcXCIgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzU2X19fICsgXCJcXFwiIGFsdD1cXFwic2Ftc3VuZ1xcXCIgd2lkdGg9XFxcIjExNlxcXCIgaGVpZ2h0PVxcXCIzOFxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0PHNwYW4gY2xhc3M9XFxcInNsaWRlLWxpc3RfX2J0biBpY29uLWRyb3Bkb3duXFxcIj48L3NwYW4+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PC9hPlxcclxcblxcdFxcdFxcdFxcdFxcdDwvbGk+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PGxpIGNsYXNzPVxcXCJzd2lwZXItc2xpZGUgc2VydmljZS1icmFuZHNfX3NsaWRlLWxpc3Qgc2xpZGUtbGlzdFxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PGEgY2xhc3M9XFxcInNsaWRlLWxpc3RfX2xpbmtcXFwiIGhyZWY9XFxcIiNcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdDxpbWcgY2xhc3M9XFxcInNsaWRlLWxpc3RfX2xvZ29cXFwiIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF81N19fXyArIFwiXFxcIiBhbHQ9XFxcImFwcGxlXFxcIiB3aWR0aD1cXFwiNDRcXFwiIGhlaWdodD1cXFwiNDRcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdDxzcGFuIGNsYXNzPVxcXCJzbGlkZS1saXN0X19idG4gaWNvbi1kcm9wZG93blxcXCI+PC9zcGFuPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDwvYT5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8L2xpPlxcclxcblxcdFxcdFxcdFxcdFxcdDxsaSBjbGFzcz1cXFwic3dpcGVyLXNsaWRlIHNlcnZpY2UtYnJhbmRzX19zbGlkZS1saXN0IHNsaWRlLWxpc3RcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDxhIGNsYXNzPVxcXCJzbGlkZS1saXN0X19saW5rXFxcIiBocmVmPVxcXCIjXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQ8aW1nIGNsYXNzPVxcXCJzbGlkZS1saXN0X19sb2dvXFxcIiBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfNThfX18gKyBcIlxcXCIgYWx0PVxcXCJ2aWV3c29uaWNrXFxcIiB3aWR0aD1cXFwiMTI4XFxcIiBoZWlnaHQ9XFxcIjIxXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQ8c3BhbiBjbGFzcz1cXFwic2xpZGUtbGlzdF9fYnRuIGljb24tZHJvcGRvd25cXFwiPjwvc3Bhbj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8L2E+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PC9saT5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8bGkgY2xhc3M9XFxcInN3aXBlci1zbGlkZSBzZXJ2aWNlLWJyYW5kc19fc2xpZGUtbGlzdCBzbGlkZS1saXN0XFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8YSBjbGFzcz1cXFwic2xpZGUtbGlzdF9fbGlua1xcXCIgaHJlZj1cXFwiI1xcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0PGltZyBjbGFzcz1cXFwic2xpZGUtbGlzdF9fbG9nb1xcXCIgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzU5X19fICsgXCJcXFwiIGFsdD1cXFwiYm9zY2hcXFwiIHdpZHRoPVxcXCIxMjhcXFwiIGhlaWdodD1cXFwiMjhcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdDxzcGFuIGNsYXNzPVxcXCJzbGlkZS1saXN0X19idG4gaWNvbi1kcm9wZG93blxcXCI+PC9zcGFuPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDwvYT5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8L2xpPlxcclxcblxcdFxcdFxcdFxcdFxcdDxsaSBjbGFzcz1cXFwic3dpcGVyLXNsaWRlIHNlcnZpY2UtYnJhbmRzX19zbGlkZS1saXN0IHNsaWRlLWxpc3RcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDxhIGNsYXNzPVxcXCJzbGlkZS1saXN0X19saW5rXFxcIiBocmVmPVxcXCIjXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQ8aW1nIGNsYXNzPVxcXCJzbGlkZS1saXN0X19sb2dvXFxcIiBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfNjBfX18gKyBcIlxcXCIgYWx0PVxcXCJocFxcXCIgd2lkdGg9XFxcIjUyXFxcIiBoZWlnaHQ9XFxcIjUyXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQ8c3BhbiBjbGFzcz1cXFwic2xpZGUtbGlzdF9fYnRuIGljb24tZHJvcGRvd25cXFwiPjwvc3Bhbj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8L2E+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PC9saT5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8bGkgY2xhc3M9XFxcInN3aXBlci1zbGlkZSBzZXJ2aWNlLWJyYW5kc19fc2xpZGUtbGlzdCBzbGlkZS1saXN0XFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8YSBjbGFzcz1cXFwic2xpZGUtbGlzdF9fbGlua1xcXCIgaHJlZj1cXFwiI1xcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0PGltZyBjbGFzcz1cXFwic2xpZGUtbGlzdF9fbG9nb1xcXCIgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzYxX19fICsgXCJcXFwiIGFsdD1cXFwiYWNlclxcXCIgd2lkdGg9XFxcIjk0XFxcIiBoZWlnaHQ9XFxcIjI0XFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQ8c3BhbiBjbGFzcz1cXFwic2xpZGUtbGlzdF9fYnRuIGljb24tZHJvcGRvd25cXFwiPjwvc3Bhbj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8L2E+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PC9saT5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8bGkgY2xhc3M9XFxcInN3aXBlci1zbGlkZSBzZXJ2aWNlLWJyYW5kc19fc2xpZGUtbGlzdCBzbGlkZS1saXN0XFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8YSBjbGFzcz1cXFwic2xpZGUtbGlzdF9fbGlua1xcXCIgaHJlZj1cXFwiI1xcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0PGltZyBjbGFzcz1cXFwic2xpZGUtbGlzdF9fbG9nb1xcXCIgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzYyX19fICsgXCJcXFwiIGFsdD1cXFwic29ueVxcXCIgd2lkdGg9XFxcIjEyOFxcXCIgaGVpZ2h0PVxcXCIyNlxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0PHNwYW4gY2xhc3M9XFxcInNsaWRlLWxpc3RfX2J0biBpY29uLWRyb3Bkb3duXFxcIj48L3NwYW4+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PC9hPlxcclxcblxcdFxcdFxcdFxcdFxcdDwvbGk+XFxyXFxuXFx0XFx0XFx0XFx0PC91bD5cXHJcXG5cXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJzd2lwZXItcGFnaW5hdGlvbiBzZXJ2aWNlLWJyYW5kc19fcGFnaW5hdGlvblxcXCI+PC9kaXY+XFxyXFxuXFx0XFx0XFx0PC9kaXY+XFxyXFxuXFxyXFxuXFx0XFx0XFx0PHVsIGNsYXNzPVxcXCJzZXJ2aWNlLWJyYW5kc19fd3JhcHAtdGFiIGFsbC1vcGVuXFxcIiBkYXRhLXRhcmdldD1cXFwib25lLWFsbG9wZW5cXFwiPlxcclxcblxcdFxcdFxcdFxcdDxsaSBjbGFzcz1cXFwic2VydmljZS1icmFuZHNfX3NsaWRlLWxpc3QtdGFiIHNsaWRlLWxpc3QtdGFiXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8YSBjbGFzcz1cXFwic2xpZGUtbGlzdC10YWJfX2xpbmtcXFwiIGhyZWY9XFxcIiNcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDxpbWcgY2xhc3M9XFxcInNsaWRlLWxpc3QtdGFiX19sb2dvXFxcIiBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfNTVfX18gKyBcIlxcXCIgYWx0PVxcXCJMZW5vdmFcXFwiIHdpZHRoPVxcXCIxMDhcXFwiIGhlaWdodD1cXFwiMzJcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDxzcGFuIGNsYXNzPVxcXCJzbGlkZS1saXN0LXRhYl9fYnRuIGljb24tZHJvcGRvd25cXFwiPjwvc3Bhbj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8L2E+XFxyXFxuXFx0XFx0XFx0XFx0PC9saT5cXHJcXG5cXHRcXHRcXHRcXHQ8bGkgY2xhc3M9XFxcInNlcnZpY2UtYnJhbmRzX19zbGlkZS1saXN0LXRhYiBzbGlkZS1saXN0LXRhYlxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PGEgY2xhc3M9XFxcInNsaWRlLWxpc3QtdGFiX19saW5rXFxcIiBocmVmPVxcXCIjXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8aW1nIGNsYXNzPVxcXCJzbGlkZS1saXN0LXRhYl9fbG9nb1xcXCIgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzU2X19fICsgXCJcXFwiIGFsdD1cXFwic2Ftc3VuZ1xcXCIgd2lkdGg9XFxcIjExNlxcXCIgaGVpZ2h0PVxcXCIzOFxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PHNwYW4gY2xhc3M9XFxcInNsaWRlLWxpc3QtdGFiX19idG4gaWNvbi1kcm9wZG93blxcXCI+PC9zcGFuPlxcclxcblxcdFxcdFxcdFxcdFxcdDwvYT5cXHJcXG5cXHRcXHRcXHRcXHQ8L2xpPlxcclxcblxcdFxcdFxcdFxcdDxsaSBjbGFzcz1cXFwic2VydmljZS1icmFuZHNfX3NsaWRlLWxpc3QtdGFiIHNsaWRlLWxpc3QtdGFiXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8YSBjbGFzcz1cXFwic2xpZGUtbGlzdC10YWJfX2xpbmtcXFwiIGhyZWY9XFxcIiNcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDxpbWcgY2xhc3M9XFxcInNsaWRlLWxpc3QtdGFiX19sb2dvXFxcIiBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfNTdfX18gKyBcIlxcXCIgYWx0PVxcXCJhcHBsZVxcXCIgd2lkdGg9XFxcIjQ0XFxcIiBoZWlnaHQ9XFxcIjQ0XFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8c3BhbiBjbGFzcz1cXFwic2xpZGUtbGlzdC10YWJfX2J0biBpY29uLWRyb3Bkb3duXFxcIj48L3NwYW4+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PC9hPlxcclxcblxcdFxcdFxcdFxcdDwvbGk+XFxyXFxuXFx0XFx0XFx0XFx0PGxpIGNsYXNzPVxcXCJzZXJ2aWNlLWJyYW5kc19fc2xpZGUtbGlzdC10YWIgc2xpZGUtbGlzdC10YWJcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdDxhIGNsYXNzPVxcXCJzbGlkZS1saXN0LXRhYl9fbGlua1xcXCIgaHJlZj1cXFwiI1xcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PGltZyBjbGFzcz1cXFwic2xpZGUtbGlzdC10YWJfX2xvZ29cXFwiIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF81OF9fXyArIFwiXFxcIiBhbHQ9XFxcInZpZXdzb25pY2tcXFwiIHdpZHRoPVxcXCIxMjhcXFwiIGhlaWdodD1cXFwiMjFcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDxzcGFuIGNsYXNzPVxcXCJzbGlkZS1saXN0LXRhYl9fYnRuIGljb24tZHJvcGRvd25cXFwiPjwvc3Bhbj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8L2E+XFxyXFxuXFx0XFx0XFx0XFx0PC9saT5cXHJcXG5cXHRcXHRcXHRcXHQ8bGkgY2xhc3M9XFxcInNlcnZpY2UtYnJhbmRzX19zbGlkZS1saXN0LXRhYiBzbGlkZS1saXN0LXRhYlxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PGEgY2xhc3M9XFxcInNsaWRlLWxpc3QtdGFiX19saW5rXFxcIiBocmVmPVxcXCIjXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8aW1nIGNsYXNzPVxcXCJzbGlkZS1saXN0LXRhYl9fbG9nb1xcXCIgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzU5X19fICsgXCJcXFwiIGFsdD1cXFwiYm9zY2hcXFwiIHdpZHRoPVxcXCIxMjhcXFwiIGhlaWdodD1cXFwiMjhcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDxzcGFuIGNsYXNzPVxcXCJzbGlkZS1saXN0LXRhYl9fYnRuIGljb24tZHJvcGRvd25cXFwiPjwvc3Bhbj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8L2E+XFxyXFxuXFx0XFx0XFx0XFx0PC9saT5cXHJcXG5cXHRcXHRcXHRcXHQ8bGkgY2xhc3M9XFxcInNlcnZpY2UtYnJhbmRzX19zbGlkZS1saXN0LXRhYiBzbGlkZS1saXN0LXRhYlxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PGEgY2xhc3M9XFxcInNsaWRlLWxpc3QtdGFiX19saW5rXFxcIiBocmVmPVxcXCIjXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8aW1nIGNsYXNzPVxcXCJzbGlkZS1saXN0LXRhYl9fbG9nb1xcXCIgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzYwX19fICsgXCJcXFwiIGFsdD1cXFwiaHBcXFwiIHdpZHRoPVxcXCI1MlxcXCIgaGVpZ2h0PVxcXCI1MlxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PHNwYW4gY2xhc3M9XFxcInNsaWRlLWxpc3QtdGFiX19idG4gaWNvbi1kcm9wZG93blxcXCI+PC9zcGFuPlxcclxcblxcdFxcdFxcdFxcdFxcdDwvYT5cXHJcXG5cXHRcXHRcXHRcXHQ8L2xpPlxcclxcblxcdFxcdFxcdFxcdDxsaSBjbGFzcz1cXFwic2VydmljZS1icmFuZHNfX3NsaWRlLWxpc3QtdGFiIHNsaWRlLWxpc3QtdGFiXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8YSBjbGFzcz1cXFwic2xpZGUtbGlzdC10YWJfX2xpbmtcXFwiIGhyZWY9XFxcIiNcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDxpbWcgY2xhc3M9XFxcInNsaWRlLWxpc3QtdGFiX19sb2dvXFxcIiBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfNjFfX18gKyBcIlxcXCIgYWx0PVxcXCJhY2VyXFxcIiB3aWR0aD1cXFwiOTRcXFwiIGhlaWdodD1cXFwiMjRcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDxzcGFuIGNsYXNzPVxcXCJzbGlkZS1saXN0LXRhYl9fYnRuIGljb24tZHJvcGRvd25cXFwiPjwvc3Bhbj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8L2E+XFxyXFxuXFx0XFx0XFx0XFx0PC9saT5cXHJcXG5cXHRcXHRcXHRcXHQ8bGkgY2xhc3M9XFxcInNlcnZpY2UtYnJhbmRzX19zbGlkZS1saXN0LXRhYiBzbGlkZS1saXN0LXRhYlxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PGEgY2xhc3M9XFxcInNsaWRlLWxpc3QtdGFiX19saW5rXFxcIiBocmVmPVxcXCIjXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8aW1nIGNsYXNzPVxcXCJzbGlkZS1saXN0LXRhYl9fbG9nb1xcXCIgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzYyX19fICsgXCJcXFwiIGFsdD1cXFwic29ueVxcXCIgd2lkdGg9XFxcIjEyOFxcXCIgaGVpZ2h0PVxcXCIyNlxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PHNwYW4gY2xhc3M9XFxcInNsaWRlLWxpc3QtdGFiX19idG4gaWNvbi1kcm9wZG93blxcXCI+PC9zcGFuPlxcclxcblxcdFxcdFxcdFxcdFxcdDwvYT5cXHJcXG5cXHRcXHRcXHRcXHQ8L2xpPlxcclxcblxcdFxcdFxcdFxcdDxsaSBjbGFzcz1cXFwic2VydmljZS1icmFuZHNfX3NsaWRlLWxpc3QtdGFiIHNsaWRlLWxpc3QtdGFiXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8YSBjbGFzcz1cXFwic2xpZGUtbGlzdC10YWJfX2xpbmtcXFwiIGhyZWY9XFxcIiNcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDxpbWcgY2xhc3M9XFxcInNsaWRlLWxpc3QtdGFiX19sb2dvXFxcIiBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfNTVfX18gKyBcIlxcXCIgYWx0PVxcXCJMZW5vdmFcXFwiIHdpZHRoPVxcXCIxMDhcXFwiIGhlaWdodD1cXFwiMzJcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDxzcGFuIGNsYXNzPVxcXCJzbGlkZS1saXN0LXRhYl9fYnRuIGljb24tZHJvcGRvd25cXFwiPjwvc3Bhbj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8L2E+XFxyXFxuXFx0XFx0XFx0XFx0PC9saT5cXHJcXG5cXHRcXHRcXHRcXHQ8bGkgY2xhc3M9XFxcInNlcnZpY2UtYnJhbmRzX19zbGlkZS1saXN0LXRhYiBzbGlkZS1saXN0LXRhYlxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PGEgY2xhc3M9XFxcInNsaWRlLWxpc3QtdGFiX19saW5rXFxcIiBocmVmPVxcXCIjXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8aW1nIGNsYXNzPVxcXCJzbGlkZS1saXN0LXRhYl9fbG9nb1xcXCIgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzU2X19fICsgXCJcXFwiIGFsdD1cXFwic2Ftc3VuZ1xcXCIgd2lkdGg9XFxcIjExNlxcXCIgaGVpZ2h0PVxcXCIzOFxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PHNwYW4gY2xhc3M9XFxcInNsaWRlLWxpc3QtdGFiX19idG4gaWNvbi1kcm9wZG93blxcXCI+PC9zcGFuPlxcclxcblxcdFxcdFxcdFxcdFxcdDwvYT5cXHJcXG5cXHRcXHRcXHRcXHQ8L2xpPlxcclxcblxcdFxcdFxcdFxcdDxsaSBjbGFzcz1cXFwic2VydmljZS1icmFuZHNfX3NsaWRlLWxpc3QtdGFiIHNsaWRlLWxpc3QtdGFiXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8YSBjbGFzcz1cXFwic2xpZGUtbGlzdC10YWJfX2xpbmtcXFwiIGhyZWY9XFxcIiNcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDxpbWcgY2xhc3M9XFxcInNsaWRlLWxpc3QtdGFiX19sb2dvXFxcIiBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfNTdfX18gKyBcIlxcXCIgYWx0PVxcXCJhcHBsZVxcXCIgd2lkdGg9XFxcIjQ0XFxcIiBoZWlnaHQ9XFxcIjQ0XFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8c3BhbiBjbGFzcz1cXFwic2xpZGUtbGlzdC10YWJfX2J0biBpY29uLWRyb3Bkb3duXFxcIj48L3NwYW4+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PC9hPlxcclxcblxcdFxcdFxcdFxcdDwvbGk+XFxyXFxuXFx0XFx0XFx0XFx0PGxpIGNsYXNzPVxcXCJzZXJ2aWNlLWJyYW5kc19fc2xpZGUtbGlzdC10YWIgc2xpZGUtbGlzdC10YWJcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdDxhIGNsYXNzPVxcXCJzbGlkZS1saXN0LXRhYl9fbGlua1xcXCIgaHJlZj1cXFwiI1xcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PGltZyBjbGFzcz1cXFwic2xpZGUtbGlzdC10YWJfX2xvZ29cXFwiIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF81OF9fXyArIFwiXFxcIiBhbHQ9XFxcInZpZXdzb25pY2tcXFwiIHdpZHRoPVxcXCIxMjhcXFwiIGhlaWdodD1cXFwiMjFcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDxzcGFuIGNsYXNzPVxcXCJzbGlkZS1saXN0LXRhYl9fYnRuIGljb24tZHJvcGRvd25cXFwiPjwvc3Bhbj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8L2E+XFxyXFxuXFx0XFx0XFx0XFx0PC9saT5cXHJcXG5cXHRcXHRcXHRcXHQ8bGkgY2xhc3M9XFxcInNlcnZpY2UtYnJhbmRzX19zbGlkZS1saXN0LXRhYiBzbGlkZS1saXN0LXRhYlxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PGEgY2xhc3M9XFxcInNsaWRlLWxpc3QtdGFiX19saW5rXFxcIiBocmVmPVxcXCIjXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8aW1nIGNsYXNzPVxcXCJzbGlkZS1saXN0LXRhYl9fbG9nb1xcXCIgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzU5X19fICsgXCJcXFwiIGFsdD1cXFwiYm9zY2hcXFwiIHdpZHRoPVxcXCIxMjhcXFwiIGhlaWdodD1cXFwiMjhcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDxzcGFuIGNsYXNzPVxcXCJzbGlkZS1saXN0LXRhYl9fYnRuIGljb24tZHJvcGRvd25cXFwiPjwvc3Bhbj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8L2E+XFxyXFxuXFx0XFx0XFx0XFx0PC9saT5cXHJcXG5cXHRcXHRcXHRcXHQ8bGkgY2xhc3M9XFxcInNlcnZpY2UtYnJhbmRzX19zbGlkZS1saXN0LXRhYiBzbGlkZS1saXN0LXRhYlxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PGEgY2xhc3M9XFxcInNsaWRlLWxpc3QtdGFiX19saW5rXFxcIiBocmVmPVxcXCIjXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8aW1nIGNsYXNzPVxcXCJzbGlkZS1saXN0LXRhYl9fbG9nb1xcXCIgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzYwX19fICsgXCJcXFwiIGFsdD1cXFwiaHBcXFwiIHdpZHRoPVxcXCI1MlxcXCIgaGVpZ2h0PVxcXCI1MlxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PHNwYW4gY2xhc3M9XFxcInNsaWRlLWxpc3QtdGFiX19idG4gaWNvbi1kcm9wZG93blxcXCI+PC9zcGFuPlxcclxcblxcdFxcdFxcdFxcdFxcdDwvYT5cXHJcXG5cXHRcXHRcXHRcXHQ8L2xpPlxcclxcblxcdFxcdFxcdFxcdDxsaSBjbGFzcz1cXFwic2VydmljZS1icmFuZHNfX3NsaWRlLWxpc3QtdGFiIHNsaWRlLWxpc3QtdGFiXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8YSBjbGFzcz1cXFwic2xpZGUtbGlzdC10YWJfX2xpbmtcXFwiIGhyZWY9XFxcIiNcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDxpbWcgY2xhc3M9XFxcInNsaWRlLWxpc3QtdGFiX19sb2dvXFxcIiBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfNjFfX18gKyBcIlxcXCIgYWx0PVxcXCJhY2VyXFxcIiB3aWR0aD1cXFwiOTRcXFwiIGhlaWdodD1cXFwiMjRcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDxzcGFuIGNsYXNzPVxcXCJzbGlkZS1saXN0LXRhYl9fYnRuIGljb24tZHJvcGRvd25cXFwiPjwvc3Bhbj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8L2E+XFxyXFxuXFx0XFx0XFx0XFx0PC9saT5cXHJcXG5cXHRcXHRcXHRcXHQ8bGkgY2xhc3M9XFxcInNlcnZpY2UtYnJhbmRzX19zbGlkZS1saXN0LXRhYiBzbGlkZS1saXN0LXRhYlxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PGEgY2xhc3M9XFxcInNsaWRlLWxpc3QtdGFiX19saW5rXFxcIiBocmVmPVxcXCIjXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8aW1nIGNsYXNzPVxcXCJzbGlkZS1saXN0LXRhYl9fbG9nb1xcXCIgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzYyX19fICsgXCJcXFwiIGFsdD1cXFwic29ueVxcXCIgd2lkdGg9XFxcIjEyOFxcXCIgaGVpZ2h0PVxcXCIyNlxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PHNwYW4gY2xhc3M9XFxcInNsaWRlLWxpc3QtdGFiX19idG4gaWNvbi1kcm9wZG93blxcXCI+PC9zcGFuPlxcclxcblxcdFxcdFxcdFxcdFxcdDwvYT5cXHJcXG5cXHRcXHRcXHRcXHQ8L2xpPlxcclxcblxcdFxcdFxcdDwvdWw+XFxyXFxuXFx0XFx0XFx0PGJ1dHRvbiBjbGFzcz1cXFwic2VydmljZS1icmFuZHNfX2xpbmsgc2VydmljZS1pdGVtX19saW5rIGljb24tZXhwYW5kXFxcIiBkYXRhLXBhdGg9XFxcIm9uZS1hbGxvcGVuXFxcIj7Qn9C+0LrQsNC30LDRgtGMINCy0YHQtTwvYnV0dG9uPlxcclxcblxcdFxcdDwvc2VjdGlvbj5cXHJcXG5cXHJcXG5cXHRcXHQ8IS0tINCh0LXQutGG0LjRjyDQstC40LTQsCDRg9GB0LvRg9CzIC0tPlxcclxcblxcdFxcdDxzZWN0aW9uIGNsYXNzPVxcXCJzZXJ2aWNlLXR5cGVcXFwiPlxcclxcblxcdFxcdFxcdDxoMiBjbGFzcz1cXFwic2VydmljZS10eXBlX190aXRsZVxcXCI+0KDQtdC80L7QvdGCINGA0LDQt9C70LjRh9C90YvRhSDQstC40LTQvtCyINGC0LXRhdC90LjQutC4PC9oMj5cXHJcXG5cXHJcXG5cXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJzd2lwZXItY29udGFpbmVyIHN3aXBlci1jb250YWluZXItLXR5cGVcXFwiPlxcclxcblxcdFxcdFxcdFxcdDx1bCBjbGFzcz1cXFwic3dpcGVyLXdyYXBwZXIgc2VydmljZS10eXBlX19zZXJ2aWNlLWxpc3QtdHlwZSBzZXJ2aWNlLWxpc3QtdHlwZVxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PGxpIGNsYXNzPVxcXCJzd2lwZXItc2xpZGUgc2VydmljZS1saXN0LXR5cGVfX2l0ZW1cXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDxhIGNsYXNzPVxcXCJzZXJ2aWNlLWxpc3QtdHlwZV9fbGlua1xcXCIgaHJlZj1cXFwiI1xcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0PGgzIGNsYXNzPVxcXCJzZXJ2aWNlLWxpc3QtdHlwZV9fdGl0bGVcXFwiPtCg0LXQvNC+0L3RgiDQvdC+0YPRgtCx0YPQutC+0LI8L2gzPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdDxzcGFuIGNsYXNzPVxcXCJzZXJ2aWNlLWxpc3QtdHlwZV9fYnRuIGljb24tZHJvcGRvd25cXFwiPjwvc3Bhbj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8L2E+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PC9saT5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8bGkgY2xhc3M9XFxcInN3aXBlci1zbGlkZSBzZXJ2aWNlLWxpc3QtdHlwZV9faXRlbVxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PGEgY2xhc3M9XFxcInNlcnZpY2UtbGlzdC10eXBlX19saW5rXFxcIiBocmVmPVxcXCIjXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQ8aDMgY2xhc3M9XFxcInNlcnZpY2UtbGlzdC10eXBlX190aXRsZVxcXCI+0KDQtdC80L7QvdGCINC/0LvQsNC90YjQtdGC0L7QsjwvaDM+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0PHNwYW4gY2xhc3M9XFxcInNlcnZpY2UtbGlzdC10eXBlX19idG4gaWNvbi1kcm9wZG93blxcXCI+PC9zcGFuPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDwvYT5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8L2xpPlxcclxcblxcdFxcdFxcdFxcdFxcdDxsaSBjbGFzcz1cXFwic3dpcGVyLXNsaWRlIHNlcnZpY2UtbGlzdC10eXBlX19pdGVtXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8YSBjbGFzcz1cXFwic2VydmljZS1saXN0LXR5cGVfX2xpbmtcXFwiIGhyZWY9XFxcIiNcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdDxoMyBjbGFzcz1cXFwic2VydmljZS1saXN0LXR5cGVfX3RpdGxlXFxcIj7QoNC10LzQvtC90YIg0J/QmjwvaDM+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0PHNwYW4gY2xhc3M9XFxcInNlcnZpY2UtbGlzdC10eXBlX19idG4gaWNvbi1kcm9wZG93blxcXCI+PC9zcGFuPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDwvYT5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8L2xpPlxcclxcblxcdFxcdFxcdFxcdFxcdDxsaSBjbGFzcz1cXFwic3dpcGVyLXNsaWRlIHNlcnZpY2UtbGlzdC10eXBlX19pdGVtXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8YSBjbGFzcz1cXFwic2VydmljZS1saXN0LXR5cGVfX2xpbmtcXFwiIGhyZWY9XFxcIiNcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdDxoMyBjbGFzcz1cXFwic2VydmljZS1saXN0LXR5cGVfX3RpdGxlXFxcIj7QoNC10LzQvtC90YIg0J/QmjwvaDM+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0PHNwYW4gY2xhc3M9XFxcInNlcnZpY2UtbGlzdC10eXBlX19idG4gaWNvbi1kcm9wZG93blxcXCI+PC9zcGFuPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDwvYT5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8L2xpPlxcclxcblxcdFxcdFxcdFxcdFxcdDxsaSBjbGFzcz1cXFwic3dpcGVyLXNsaWRlIHNlcnZpY2UtbGlzdC10eXBlX19pdGVtXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8YSBjbGFzcz1cXFwic2VydmljZS1saXN0LXR5cGVfX2xpbmtcXFwiIGhyZWY9XFxcIiNcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdDxoMyBjbGFzcz1cXFwic2VydmljZS1saXN0LXR5cGVfX3RpdGxlXFxcIj7QoNC10LzQvtC90YIg0J/QmjwvaDM+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0PHNwYW4gY2xhc3M9XFxcInNlcnZpY2UtbGlzdC10eXBlX19idG4gaWNvbi1kcm9wZG93blxcXCI+PC9zcGFuPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDwvYT5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8L2xpPlxcclxcblxcdFxcdFxcdFxcdFxcdDxsaSBjbGFzcz1cXFwic3dpcGVyLXNsaWRlIHNlcnZpY2UtbGlzdC10eXBlX19pdGVtXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8YSBjbGFzcz1cXFwic2VydmljZS1saXN0LXR5cGVfX2xpbmtcXFwiIGhyZWY9XFxcIiNcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdDxoMyBjbGFzcz1cXFwic2VydmljZS1saXN0LXR5cGVfX3RpdGxlXFxcIj7QoNC10LzQvtC90YIg0J/QmjwvaDM+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0PHNwYW4gY2xhc3M9XFxcInNlcnZpY2UtbGlzdC10eXBlX19idG4gaWNvbi1kcm9wZG93blxcXCI+PC9zcGFuPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDwvYT5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8L2xpPlxcclxcblxcdFxcdFxcdFxcdFxcdDxsaSBjbGFzcz1cXFwic3dpcGVyLXNsaWRlIHNlcnZpY2UtbGlzdC10eXBlX19pdGVtXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8YSBjbGFzcz1cXFwic2VydmljZS1saXN0LXR5cGVfX2xpbmtcXFwiIGhyZWY9XFxcIiNcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdDxoMyBjbGFzcz1cXFwic2VydmljZS1saXN0LXR5cGVfX3RpdGxlXFxcIj7QoNC10LzQvtC90YIg0J/QmjwvaDM+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0PHNwYW4gY2xhc3M9XFxcInNlcnZpY2UtbGlzdC10eXBlX19idG4gaWNvbi1kcm9wZG93blxcXCI+PC9zcGFuPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDwvYT5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8L2xpPlxcclxcblxcdFxcdFxcdFxcdDwvdWw+XFxyXFxuXFx0XFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwic3dpcGVyLXBhZ2luYXRpb24gc2VydmljZS10eXBlX19wYWdpbmF0aW9uXFxcIj48L2Rpdj5cXHJcXG5cXHRcXHRcXHQ8L2Rpdj5cXHJcXG5cXHJcXG5cXHRcXHRcXHQ8dWwgY2xhc3M9XFxcInNlcnZpY2UtdHlwZV9fc2VydmljZS1saXN0LXR5cGUtdGFiIHNlcnZpY2UtbGlzdC10eXBlLXRhYiBhbGwtb3BlblxcXCIgZGF0YS10YXJnZXQ9XFxcInR3by1hbGxvcGVuXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHQ8bGkgY2xhc3M9XFxcInNlcnZpY2UtbGlzdC10eXBlLXRhYl9faXRlbVxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PGEgY2xhc3M9XFxcInNlcnZpY2UtbGlzdC10eXBlLXRhYl9fbGlua1xcXCIgaHJlZj1cXFwiI1xcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PGgzIGNsYXNzPVxcXCJzZXJ2aWNlLWxpc3QtdHlwZS10YWJfX3RpdGxlXFxcIj7QoNC10LzQvtC90YIg0L3QvtGD0YLQsdGD0LrQvtCyPC9oMz5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8c3BhbiBjbGFzcz1cXFwic2VydmljZS1saXN0LXR5cGUtdGFiX19idG4gaWNvbi1kcm9wZG93blxcXCI+PC9zcGFuPlxcclxcblxcdFxcdFxcdFxcdFxcdDwvYT5cXHJcXG5cXHRcXHRcXHRcXHQ8L2xpPlxcclxcblxcdFxcdFxcdFxcdDxsaSBjbGFzcz1cXFwic2VydmljZS1saXN0LXR5cGUtdGFiX19pdGVtXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8YSBjbGFzcz1cXFwic2VydmljZS1saXN0LXR5cGUtdGFiX19saW5rXFxcIiBocmVmPVxcXCIjXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8aDMgY2xhc3M9XFxcInNlcnZpY2UtbGlzdC10eXBlLXRhYl9fdGl0bGVcXFwiPtCg0LXQvNC+0L3RgiDQv9C70LDQvdGI0LXRgtC+0LI8L2gzPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDxzcGFuIGNsYXNzPVxcXCJzZXJ2aWNlLWxpc3QtdHlwZS10YWJfX2J0biBpY29uLWRyb3Bkb3duXFxcIj48L3NwYW4+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PC9hPlxcclxcblxcdFxcdFxcdFxcdDwvbGk+XFxyXFxuXFx0XFx0XFx0XFx0PGxpIGNsYXNzPVxcXCJzZXJ2aWNlLWxpc3QtdHlwZS10YWJfX2l0ZW1cXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdDxhIGNsYXNzPVxcXCJzZXJ2aWNlLWxpc3QtdHlwZS10YWJfX2xpbmtcXFwiIGhyZWY9XFxcIiNcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDxoMyBjbGFzcz1cXFwic2VydmljZS1saXN0LXR5cGUtdGFiX190aXRsZVxcXCI+0KDQtdC80L7QvdGCINCf0Jo8L2gzPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDxzcGFuIGNsYXNzPVxcXCJzZXJ2aWNlLWxpc3QtdHlwZS10YWJfX2J0biBpY29uLWRyb3Bkb3duXFxcIj48L3NwYW4+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PC9hPlxcclxcblxcdFxcdFxcdFxcdDwvbGk+XFxyXFxuXFx0XFx0XFx0XFx0PGxpIGNsYXNzPVxcXCJzZXJ2aWNlLWxpc3QtdHlwZS10YWJfX2l0ZW1cXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdDxhIGNsYXNzPVxcXCJzZXJ2aWNlLWxpc3QtdHlwZS10YWJfX2xpbmtcXFwiIGhyZWY9XFxcIiNcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDxoMyBjbGFzcz1cXFwic2VydmljZS1saXN0LXR5cGUtdGFiX190aXRsZVxcXCI+0KDQtdC80L7QvdGCINC90L7Rg9GC0LHRg9C60L7QsjwvaDM+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PHNwYW4gY2xhc3M9XFxcInNlcnZpY2UtbGlzdC10eXBlLXRhYl9fYnRuIGljb24tZHJvcGRvd25cXFwiPjwvc3Bhbj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8L2E+XFxyXFxuXFx0XFx0XFx0XFx0PC9saT5cXHJcXG5cXHRcXHRcXHRcXHQ8bGkgY2xhc3M9XFxcInNlcnZpY2UtbGlzdC10eXBlLXRhYl9faXRlbVxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PGEgY2xhc3M9XFxcInNlcnZpY2UtbGlzdC10eXBlLXRhYl9fbGlua1xcXCIgaHJlZj1cXFwiI1xcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PGgzIGNsYXNzPVxcXCJzZXJ2aWNlLWxpc3QtdHlwZS10YWJfX3RpdGxlXFxcIj7QoNC10LzQvtC90YIg0L/Qu9Cw0L3RiNC10YLQvtCyPC9oMz5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8c3BhbiBjbGFzcz1cXFwic2VydmljZS1saXN0LXR5cGUtdGFiX19idG4gaWNvbi1kcm9wZG93blxcXCI+PC9zcGFuPlxcclxcblxcdFxcdFxcdFxcdFxcdDwvYT5cXHJcXG5cXHRcXHRcXHRcXHQ8L2xpPlxcclxcblxcdFxcdFxcdFxcdDxsaSBjbGFzcz1cXFwic2VydmljZS1saXN0LXR5cGUtdGFiX19pdGVtXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8YSBjbGFzcz1cXFwic2VydmljZS1saXN0LXR5cGUtdGFiX19saW5rXFxcIiBocmVmPVxcXCIjXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8aDMgY2xhc3M9XFxcInNlcnZpY2UtbGlzdC10eXBlLXRhYl9fdGl0bGVcXFwiPtCg0LXQvNC+0L3RgiDQn9CaPC9oMz5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8c3BhbiBjbGFzcz1cXFwic2VydmljZS1saXN0LXR5cGUtdGFiX19idG4gaWNvbi1kcm9wZG93blxcXCI+PC9zcGFuPlxcclxcblxcdFxcdFxcdFxcdFxcdDwvYT5cXHJcXG5cXHRcXHRcXHRcXHQ8L2xpPlxcclxcblxcdFxcdFxcdDwvdWw+XFxyXFxuXFxyXFxuXFx0XFx0XFx0PGJ1dHRvbiBjbGFzcz1cXFwic2VydmljZS1icmFuZHNfX2xpbmsgc2VydmljZS1pdGVtX19saW5rIGljb24tZXhwYW5kXFxcIiBkYXRhLXBhdGg9XFxcInR3by1hbGxvcGVuXFxcIiA+0J/QvtC60LDQt9Cw0YLRjCDQstGB0LU8L2J1dHRvbj5cXHJcXG5cXHRcXHQ8L3NlY3Rpb24+XFxyXFxuXFxyXFxuXFx0XFx0PCEtLSDQodC10LrRhtC40Y8g0KHRgtC+0LjQvNC+0YHRgtC4INGD0YHQu9GD0LMgLS0+XFxyXFxuXFx0XFx0PHNlY3Rpb24gY2xhc3M9XFxcInNlcnZpY2UtcHJpY2VcXFwiPiBcXHJcXG5cXHRcXHRcXHQ8aDIgY2xhc3M9XFxcInNlcnZpY2UtcHJpY2VfX3RpdGxlXFxcIj7QptC10L3RiyDQvdCwINGD0YHQu9GD0LPQuDwvaDI+XFxyXFxuXFxyXFxuXFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwic3dpcGVyLWNvbnRhaW5lciBzd2lwZXItY29udGFpbmVyLS1wcmljZVxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0PHVsIGNsYXNzPVxcXCJzd2lwZXItd3JhcHBlciBzZXJ2aWNlLXByaWNlX19wcmljZS1saXN0IHByaWNlLWxpc3RcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdDxsaSBjbGFzcz1cXFwic3dpcGVyLXNsaWRlIHByaWNlLWxpc3RfX2l0ZW1cXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDx1bCBjbGFzcz1cXFwicHJpY2UtbGlzdF9faXRlbS1saXN0XFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQ8bGkgY2xhc3M9XFxcInByaWNlLWxpc3RfX2l0ZW0taGVhZGVyXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8aDMgY2xhc3M9XFxcInByaWNlLWxpc3RfX3RpdGxlXFxcIj7QoNC10LzQvtC90YLQvdGL0LUg0YPRgdC70YPQs9C4PC9oMz5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8c3BhbiBjbGFzcz1cXFwicHJpY2UtbGlzdF9fdGV4dFxcXCI+0JTQuNCw0LPQvdC+0YHRgtC40LrQsDwvc3Bhbj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQ8L2xpPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdDxsaSBjbGFzcz1cXFwicHJpY2UtbGlzdF9faXRlbS1tYWluXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8aDMgY2xhc3M9XFxcInByaWNlLWxpc3RfX3RpdGxlXFxcIj7QptC10L3QsDwvaDM+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PHNwYW4gY2xhc3M9XFxcInByaWNlLWxpc3RfX3RleHRcXFwiPtCR0LXRgdC/0LvQsNGC0L3Qvjwvc3Bhbj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQ8L2xpPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdDxsaSBjbGFzcz1cXFwicHJpY2UtbGlzdF9faXRlbS1mb290ZXJcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcInByaWNlLWxpc3RfX2l0ZW0tZm9vdGVyLXdyYXBcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDxoMyBjbGFzcz1cXFwicHJpY2UtbGlzdF9fdGl0bGVcXFwiPtCh0YDQvtC6PC9oMz5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8c3BhbiBjbGFzcz1cXFwicHJpY2UtbGlzdF9fdGV4dFxcXCI+MzAg0LzQuNC9PC9zcGFuPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDwvZGl2PlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDxhIGNsYXNzPVxcXCJwcmljZS1saXN0X19saW5rIGljb24tZHJvcGRvd25cXFwiIGhyZWY9XFxcIiNcXFwiPtCX0LDQutCw0LfQsNGC0Yw8L2E+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0PC9saT5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8L3VsPlxcclxcblxcdFxcdFxcdFxcdFxcdDwvbGk+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PGxpIGNsYXNzPVxcXCJzd2lwZXItc2xpZGUgcHJpY2UtbGlzdF9faXRlbVxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PHVsIGNsYXNzPVxcXCJwcmljZS1saXN0X19pdGVtLWxpc3RcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdDxsaSBjbGFzcz1cXFwicHJpY2UtbGlzdF9faXRlbS1oZWFkZXJcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDxoMyBjbGFzcz1cXFwicHJpY2UtbGlzdF9fdGl0bGVcXFwiPtCg0LXQvNC+0L3RgtC90YvQtSDRg9GB0LvRg9Cz0Lg8L2gzPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDxzcGFuIGNsYXNzPVxcXCJwcmljZS1saXN0X190ZXh0XFxcIj7QlNC40LDQs9C90L7RgdGC0LjQutCwPC9zcGFuPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdDwvbGk+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0PGxpIGNsYXNzPVxcXCJwcmljZS1saXN0X19pdGVtLW1haW5cXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDxoMyBjbGFzcz1cXFwicHJpY2UtbGlzdF9fdGl0bGVcXFwiPtCm0LXQvdCwPC9oMz5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8c3BhbiBjbGFzcz1cXFwicHJpY2UtbGlzdF9fdGV4dFxcXCI+0JHQtdGB0L/Qu9Cw0YLQvdC+PC9zcGFuPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdDwvbGk+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0PGxpIGNsYXNzPVxcXCJwcmljZS1saXN0X19pdGVtLWZvb3RlclxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwicHJpY2UtbGlzdF9faXRlbS1mb290ZXItd3JhcFxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PGgzIGNsYXNzPVxcXCJwcmljZS1saXN0X190aXRsZVxcXCI+0KHRgNC+0Lo8L2gzPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDxzcGFuIGNsYXNzPVxcXCJwcmljZS1saXN0X190ZXh0XFxcIj4zMCDQvNC40L08L3NwYW4+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PC9kaXY+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PGEgY2xhc3M9XFxcInByaWNlLWxpc3RfX2xpbmsgaWNvbi1kcm9wZG93blxcXCIgaHJlZj1cXFwiI1xcXCI+0JfQsNC60LDQt9Cw0YLRjDwvYT5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQ8L2xpPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDwvdWw+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PC9saT5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8bGkgY2xhc3M9XFxcInN3aXBlci1zbGlkZSBwcmljZS1saXN0X19pdGVtXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8dWwgY2xhc3M9XFxcInByaWNlLWxpc3RfX2l0ZW0tbGlzdFxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0PGxpIGNsYXNzPVxcXCJwcmljZS1saXN0X19pdGVtLWhlYWRlclxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PGgzIGNsYXNzPVxcXCJwcmljZS1saXN0X190aXRsZVxcXCI+0KDQtdC80L7QvdGC0L3Ri9C1INGD0YHQu9GD0LPQuDwvaDM+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PHNwYW4gY2xhc3M9XFxcInByaWNlLWxpc3RfX3RleHRcXFwiPtCU0LjQsNCz0L3QvtGB0YLQuNC60LA8L3NwYW4+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0PC9saT5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQ8bGkgY2xhc3M9XFxcInByaWNlLWxpc3RfX2l0ZW0tbWFpblxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PGgzIGNsYXNzPVxcXCJwcmljZS1saXN0X190aXRsZVxcXCI+0KbQtdC90LA8L2gzPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDxzcGFuIGNsYXNzPVxcXCJwcmljZS1saXN0X190ZXh0XFxcIj7QkdC10YHQv9C70LDRgtC90L48L3NwYW4+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0PC9saT5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQ8bGkgY2xhc3M9XFxcInByaWNlLWxpc3RfX2l0ZW0tZm9vdGVyXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJwcmljZS1saXN0X19pdGVtLWZvb3Rlci13cmFwXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8aDMgY2xhc3M9XFxcInByaWNlLWxpc3RfX3RpdGxlXFxcIj7QodGA0L7QujwvaDM+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PHNwYW4gY2xhc3M9XFxcInByaWNlLWxpc3RfX3RleHRcXFwiPjMwINC80LjQvTwvc3Bhbj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8L2Rpdj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8YSBjbGFzcz1cXFwicHJpY2UtbGlzdF9fbGluayBpY29uLWRyb3Bkb3duXFxcIiBocmVmPVxcXCIjXFxcIj7Ql9Cw0LrQsNC30LDRgtGMPC9hPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdDwvbGk+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PC91bD5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8L2xpPlxcclxcblxcdFxcdFxcdFxcdFxcdDxsaSBjbGFzcz1cXFwic3dpcGVyLXNsaWRlIHByaWNlLWxpc3RfX2l0ZW1cXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDx1bCBjbGFzcz1cXFwicHJpY2UtbGlzdF9faXRlbS1saXN0XFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQ8bGkgY2xhc3M9XFxcInByaWNlLWxpc3RfX2l0ZW0taGVhZGVyXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8aDMgY2xhc3M9XFxcInByaWNlLWxpc3RfX3RpdGxlXFxcIj7QoNC10LzQvtC90YLQvdGL0LUg0YPRgdC70YPQs9C4PC9oMz5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8c3BhbiBjbGFzcz1cXFwicHJpY2UtbGlzdF9fdGV4dFxcXCI+0JTQuNCw0LPQvdC+0YHRgtC40LrQsDwvc3Bhbj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQ8L2xpPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdDxsaSBjbGFzcz1cXFwicHJpY2UtbGlzdF9faXRlbS1tYWluXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8aDMgY2xhc3M9XFxcInByaWNlLWxpc3RfX3RpdGxlXFxcIj7QptC10L3QsDwvaDM+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PHNwYW4gY2xhc3M9XFxcInByaWNlLWxpc3RfX3RleHRcXFwiPtCR0LXRgdC/0LvQsNGC0L3Qvjwvc3Bhbj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQ8L2xpPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdDxsaSBjbGFzcz1cXFwicHJpY2UtbGlzdF9faXRlbS1mb290ZXJcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcInByaWNlLWxpc3RfX2l0ZW0tZm9vdGVyLXdyYXBcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDxoMyBjbGFzcz1cXFwicHJpY2UtbGlzdF9fdGl0bGVcXFwiPtCh0YDQvtC6PC9oMz5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8c3BhbiBjbGFzcz1cXFwicHJpY2UtbGlzdF9fdGV4dFxcXCI+MzAg0LzQuNC9PC9zcGFuPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDwvZGl2PlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDxhIGNsYXNzPVxcXCJwcmljZS1saXN0X19saW5rIGljb24tZHJvcGRvd25cXFwiIGhyZWY9XFxcIiNcXFwiPtCX0LDQutCw0LfQsNGC0Yw8L2E+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0PC9saT5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8L3VsPlxcclxcblxcdFxcdFxcdFxcdFxcdDwvbGk+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PGxpIGNsYXNzPVxcXCJzd2lwZXItc2xpZGUgcHJpY2UtbGlzdF9faXRlbVxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PHVsIGNsYXNzPVxcXCJwcmljZS1saXN0X19pdGVtLWxpc3RcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdDxsaSBjbGFzcz1cXFwicHJpY2UtbGlzdF9faXRlbS1oZWFkZXJcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDxoMyBjbGFzcz1cXFwicHJpY2UtbGlzdF9fdGl0bGVcXFwiPtCg0LXQvNC+0L3RgtC90YvQtSDRg9GB0LvRg9Cz0Lg8L2gzPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDxzcGFuIGNsYXNzPVxcXCJwcmljZS1saXN0X190ZXh0XFxcIj7QlNC40LDQs9C90L7RgdGC0LjQutCwPC9zcGFuPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdDwvbGk+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0PGxpIGNsYXNzPVxcXCJwcmljZS1saXN0X19pdGVtLW1haW5cXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDxoMyBjbGFzcz1cXFwicHJpY2UtbGlzdF9fdGl0bGVcXFwiPtCm0LXQvdCwPC9oMz5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8c3BhbiBjbGFzcz1cXFwicHJpY2UtbGlzdF9fdGV4dFxcXCI+0JHQtdGB0L/Qu9Cw0YLQvdC+PC9zcGFuPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdDwvbGk+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0PGxpIGNsYXNzPVxcXCJwcmljZS1saXN0X19pdGVtLWZvb3RlclxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwicHJpY2UtbGlzdF9faXRlbS1mb290ZXItd3JhcFxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PGgzIGNsYXNzPVxcXCJwcmljZS1saXN0X190aXRsZVxcXCI+0KHRgNC+0Lo8L2gzPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDxzcGFuIGNsYXNzPVxcXCJwcmljZS1saXN0X190ZXh0XFxcIj4zMCDQvNC40L08L3NwYW4+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PC9kaXY+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PGEgY2xhc3M9XFxcInByaWNlLWxpc3RfX2xpbmsgaWNvbi1kcm9wZG93blxcXCIgaHJlZj1cXFwiI1xcXCI+0JfQsNC60LDQt9Cw0YLRjDwvYT5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQ8L2xpPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDwvdWw+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PC9saT5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8bGkgY2xhc3M9XFxcInN3aXBlci1zbGlkZSBwcmljZS1saXN0X19pdGVtXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8dWwgY2xhc3M9XFxcInByaWNlLWxpc3RfX2l0ZW0tbGlzdFxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0PGxpIGNsYXNzPVxcXCJwcmljZS1saXN0X19pdGVtLWhlYWRlclxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PGgzIGNsYXNzPVxcXCJwcmljZS1saXN0X190aXRsZVxcXCI+0KDQtdC80L7QvdGC0L3Ri9C1INGD0YHQu9GD0LPQuDwvaDM+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PHNwYW4gY2xhc3M9XFxcInByaWNlLWxpc3RfX3RleHRcXFwiPtCU0LjQsNCz0L3QvtGB0YLQuNC60LA8L3NwYW4+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0PC9saT5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQ8bGkgY2xhc3M9XFxcInByaWNlLWxpc3RfX2l0ZW0tbWFpblxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PGgzIGNsYXNzPVxcXCJwcmljZS1saXN0X190aXRsZVxcXCI+0KbQtdC90LA8L2gzPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDxzcGFuIGNsYXNzPVxcXCJwcmljZS1saXN0X190ZXh0XFxcIj7QkdC10YHQv9C70LDRgtC90L48L3NwYW4+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0PC9saT5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQ8bGkgY2xhc3M9XFxcInByaWNlLWxpc3RfX2l0ZW0tZm9vdGVyXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJwcmljZS1saXN0X19pdGVtLWZvb3Rlci13cmFwXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8aDMgY2xhc3M9XFxcInByaWNlLWxpc3RfX3RpdGxlXFxcIj7QodGA0L7QujwvaDM+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PHNwYW4gY2xhc3M9XFxcInByaWNlLWxpc3RfX3RleHRcXFwiPjMwINC80LjQvTwvc3Bhbj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8L2Rpdj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8YSBjbGFzcz1cXFwicHJpY2UtbGlzdF9fbGluayBpY29uLWRyb3Bkb3duXFxcIiBocmVmPVxcXCIjXFxcIj7Ql9Cw0LrQsNC30LDRgtGMPC9hPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdDwvbGk+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PC91bD5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8L2xpPlxcclxcblxcdFxcdFxcdFxcdDwvdWw+XFxyXFxuXFx0XFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwic3dpcGVyLXBhZ2luYXRpb24gc2VydmljZS1wcmljZV9fcGFnaW5hdGlvblxcXCI+PC9kaXY+XFxyXFxuXFx0XFx0XFx0PC9kaXY+XFxyXFxuXFxyXFxuXFx0XFx0XFx0PHRhYmxlIGNsYXNzPVxcXCJzZXJ2aWNlLXByaWNlX190YWJsZS1wcmljZSB0YWJsZS1wcmljZVxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0PHRyIGNsYXNzPVxcXCJ0YWJsZS1wcmljZV9faGVhZGVyXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8dGggY2xhc3M9XFxcInRhYmxlLXByaWNlX19oZWFkZXItaXRlbVxcXCI+0KDQtdC80L7QvdGC0L3Ri9C1INGD0YHQu9GD0LPQuDwvdGg+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PHRoIGNsYXNzPVxcXCJ0YWJsZS1wcmljZV9faGVhZGVyLWl0ZW1cXFwiPtCm0LXQvdCwPC90aD5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8dGggY2xhc3M9XFxcInRhYmxlLXByaWNlX19oZWFkZXItaXRlbVxcXCI+0KHRgNC+0Lo8L3RoPlxcclxcblxcdFxcdFxcdFxcdFxcdDx0aCBjbGFzcz1cXFwidGFibGUtcHJpY2VfX2hlYWRlci1pdGVtXFxcIj48L3RoPlxcclxcblxcdFxcdFxcdFxcdDwvdHI+XFxyXFxuXFx0XFx0XFx0XFx0PHRyIGNsYXNzPVxcXCJ0YWJsZS1wcmljZV9fbGlzdFxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PHRkIGNsYXNzPVxcXCJ0YWJsZS1wcmljZV9faXRlbVxcXCI+0JTQuNCw0LPQvdC+0YHRgtC40LrQsDwvdGQ+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PHRkIGNsYXNzPVxcXCJ0YWJsZS1wcmljZV9faXRlbVxcXCI+0JHQtdGB0L/Qu9Cw0YLQvdC+PC90ZD5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8dGQgY2xhc3M9XFxcInRhYmxlLXByaWNlX19pdGVtXFxcIj4zMCDQvNC40L08L3RkPlxcclxcblxcdFxcdFxcdFxcdFxcdDx0ZCBjbGFzcz1cXFwidGFibGUtcHJpY2VfX2l0ZW1cXFwiPjxhIGNsYXNzPVxcXCJ0YWJsZS1wcmljZV9fbGluayBpY29uLWRyb3Bkb3duXFxcIiBocmVmPVxcXCIjXFxcIj7Ql9Cw0LrQsNC30LDRgtGMPC9hPjwvdGQ+XFxyXFxuXFx0XFx0XFx0XFx0PC90cj5cXHJcXG5cXHRcXHRcXHRcXHQ8dHIgY2xhc3M9XFxcInRhYmxlLXByaWNlX19saXN0XFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8dGQgY2xhc3M9XFxcInRhYmxlLXByaWNlX19pdGVtXFxcIj7Ql9Cw0LzQtdC90LAg0LTQuNGB0L/Qu9C10Y88L3RkPlxcclxcblxcdFxcdFxcdFxcdFxcdDx0ZCBjbGFzcz1cXFwidGFibGUtcHJpY2VfX2l0ZW1cXFwiPjEwMDAgJiM4MzgxOzwvdGQ+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PHRkIGNsYXNzPVxcXCJ0YWJsZS1wcmljZV9faXRlbVxcXCI+MzAtMTIwINC80LjQvTwvdGQ+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PHRkIGNsYXNzPVxcXCJ0YWJsZS1wcmljZV9faXRlbVxcXCI+PGEgY2xhc3M9XFxcInRhYmxlLXByaWNlX19saW5rIGljb24tZHJvcGRvd25cXFwiIGhyZWY9XFxcIiNcXFwiPtCX0LDQutCw0LfQsNGC0Yw8L2E+PC90ZD5cXHJcXG5cXHRcXHRcXHRcXHQ8L3RyPlxcclxcblxcdFxcdFxcdFxcdDx0ciBjbGFzcz1cXFwidGFibGUtcHJpY2VfX2xpc3RcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdDx0ZCBjbGFzcz1cXFwidGFibGUtcHJpY2VfX2l0ZW1cXFwiPtCX0LDQvNC10L3QsCDQv9C+0LvQuNGE0L7QvdC40YfQtdGB0LrQvtCz0L4g0LTQuNC90LDQvNC40LrQsDwvdGQ+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PHRkIGNsYXNzPVxcXCJ0YWJsZS1wcmljZV9faXRlbVxcXCI+MTAwMCAmIzgzODE7PC90ZD5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8dGQgY2xhc3M9XFxcInRhYmxlLXByaWNlX19pdGVtXFxcIj4zMC0xMjAg0LzQuNC9PC90ZD5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8dGQgY2xhc3M9XFxcInRhYmxlLXByaWNlX19pdGVtXFxcIj48YSBjbGFzcz1cXFwidGFibGUtcHJpY2VfX2xpbmsgaWNvbi1kcm9wZG93blxcXCIgaHJlZj1cXFwiI1xcXCI+0JfQsNC60LDQt9Cw0YLRjDwvYT48L3RkPlxcclxcblxcdFxcdFxcdFxcdDwvdHI+XFxyXFxuXFx0XFx0XFx0XFx0PHRyIGNsYXNzPVxcXCJ0YWJsZS1wcmljZV9fbGlzdFxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PHRkIGNsYXNzPVxcXCJ0YWJsZS1wcmljZV9faXRlbVxcXCI+0KLQtdGB0YLQuNGA0L7QstCw0L3QuNC1INGBINCy0YvQtNCw0YfQtdC5INGC0LXRhdC90LjRh9C10YHQutC+0LPQviDQt9Cw0LrQu9GO0YfQtdC90LjRjzwvdGQ+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PHRkIGNsYXNzPVxcXCJ0YWJsZS1wcmljZV9faXRlbVxcXCI+MTAwMCAmIzgzODE7PC90ZD5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8dGQgY2xhc3M9XFxcInRhYmxlLXByaWNlX19pdGVtXFxcIj4zMC0xMjAg0LzQuNC9PC90ZD5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8dGQgY2xhc3M9XFxcInRhYmxlLXByaWNlX19pdGVtXFxcIj48YSBjbGFzcz1cXFwidGFibGUtcHJpY2VfX2xpbmsgaWNvbi1kcm9wZG93blxcXCIgaHJlZj1cXFwiI1xcXCI+0JfQsNC60LDQt9Cw0YLRjDwvYT48L3RkPlxcclxcblxcdFxcdFxcdFxcdDwvdHI+XFxyXFxuXFx0XFx0XFx0XFx0PHRyIGNsYXNzPVxcXCJ0YWJsZS1wcmljZV9fbGlzdFxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PHRkIGNsYXNzPVxcXCJ0YWJsZS1wcmljZV9faXRlbVxcXCI+0JfQsNC80LXQvdCwINC/0YDQvtCz0YDQsNC80LzQvdC+0LPQviDQvtCx0LXRgdC/0LXRh9C10L3QuNGPPC90ZD5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8dGQgY2xhc3M9XFxcInRhYmxlLXByaWNlX19pdGVtXFxcIj4xMDAwICYjODM4MTs8L3RkPlxcclxcblxcdFxcdFxcdFxcdFxcdDx0ZCBjbGFzcz1cXFwidGFibGUtcHJpY2VfX2l0ZW1cXFwiPjMwLTEyMCDQvNC40L08L3RkPlxcclxcblxcdFxcdFxcdFxcdFxcdDx0ZCBjbGFzcz1cXFwidGFibGUtcHJpY2VfX2l0ZW1cXFwiPjxhIGNsYXNzPVxcXCJ0YWJsZS1wcmljZV9fbGluayBpY29uLWRyb3Bkb3duXFxcIiBocmVmPVxcXCIjXFxcIj7Ql9Cw0LrQsNC30LDRgtGMPC9hPjwvdGQ+XFxyXFxuXFx0XFx0XFx0XFx0PC90cj5cXHJcXG5cXHRcXHRcXHQ8L3RhYmxlPlxcclxcblxcdFxcdFxcdFxcclxcblxcdFxcdFxcdDxwIGNsYXNzPVxcXCJzZXJ2aWNlLXByaWNlX190ZXh0XFxcIj5cXHJcXG5cXHRcXHRcXHRcXHTQktGB0LUg0YbQtdC90Ysg0YPQutCw0LfQsNC90Ysg0YEg0YPRh9C10YLQvtC8INCd0JTQoS4g0KHRgtC+0LjQvNC+0YHRgtGMINGA0LXQvNC+0L3RgtCwINGD0LrQsNC30LDQvdCwINC90LAg0LXQtNC40L3QuNGH0L3Rg9GOINGD0YHQu9GD0LPRgy4g0JTQu9GPINC/0L7Qu9GD0YfQtdC90LjRjyDQutC+0LzQvNC10YDRh9C10YHQutC+0LPQviDQv9GA0LXQtNC70L7QttC10L3QuNGPINC90LAg0L/QvtGB0YLQvtGP0L3QvdC+0LUg0L7QsdGB0LvRg9C20LjQstCw0L3QuNC1LCDQvtGB0YLQsNCy0YzRgtC1INC30LDRj9Cy0LrRgy5cXHJcXG5cXHRcXHRcXHQ8L3A+XFxyXFxuXFxyXFxuXFx0XFx0XFx0PGEgY2xhc3M9XFxcInNlcnZpY2UtcHJpY2VfX2xpbmsgaWNvbi1kcm9wZG93blxcXCIgaHJlZj1cXFwiI1xcXCI+0J/QvtC70YPRh9C40YLRjCDQutC+0LzQvNC10YDRh9C10YHQutC+0LUg0L/RgNC10LTQu9C+0LbQtdC90LjQtTwvYT5cXHJcXG5cXHJcXG5cXHRcXHQ8L3NlY3Rpb24+XFxyXFxuXFxyXFxuXFx0PC9tYWluPlxcclxcblxcclxcblxcdDwhLS0g0J7QsdGA0LDRgtC90LDRjyDRgdCy0Y/Qt9GMIC0tPlxcclxcblxcdDxzZWN0aW9uIGNsYXNzPVxcXCJjcHMtcG9wYXAgY3BzLXBvcGFwLS1ub25lIGJsb2stanMtYWN0aXZlXFxcIiBkYXRhLXRhcmdldD1cXFwib25lLWJ0blxcXCI+XFxyXFxuXFx0XFx0PGgyIGNsYXNzPVxcXCJjcHMtcG9wYXBfX3RpdGxlXFxcIj7QntCx0YDQsNGC0L3QsNGPINGB0LLRj9C30Yw8L2gyPlxcclxcblxcdFxcdDxmb3JtIGNsYXNzPVxcXCJjcHMtcG9wYXBfX2ZiLWZvcm0gZmItZm9ybVxcXCIgYWN0aW9uPVxcXCIjXFxcIiBtZXRob2Q9XFxcIlBPU1RcXFwiIGVuY3R5cGU9XFxcIm11bHRpcGFydC9mb3JtLWRhdGFcXFwiPlxcclxcblxcdFxcdFxcdDxsYWJlbCBmb3I9XFxcImZiLW5hbWVcXFwiPlxcclxcblxcdFxcdFxcdFxcdDxzcGFuIGNsYXNzPVxcXCJ2aXN1YWxseS1oaWRkZW5cXFwiPtCY0LzRjzwvc3Bhbj5cXHJcXG5cXHRcXHRcXHRcXHQ8aW5wdXQgY2xhc3M9XFxcImZiLWZvcm1fX2lucHV0XFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJuYW1lXFxcIiBwbGFjZWhvbGRlcj1cXFwi0JjQvNGPXFxcIiByZXF1aXJlZD1cXFwicmVxdWlyZWRcXFwiIGlkPVxcXCJmYi1uYW1lXFxcIj5cXHJcXG5cXHRcXHRcXHQ8L2xhYmVsPlxcclxcblxcdFxcdFxcdDxsYWJlbCBmb3I9XFxcImZiLXBob25lXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHQ8c3BhbiBjbGFzcz1cXFwidmlzdWFsbHktaGlkZGVuXFxcIj7QotC10LvQtdGE0L7QvTwvc3Bhbj5cXHJcXG5cXHRcXHRcXHRcXHQ8aW5wdXQgY2xhc3M9XFxcImZiLWZvcm1fX2lucHV0XFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJwaG9uZVxcXCIgcGxhY2Vob2xkZXI9XFxcItCi0LXQu9C10YTQvtC9XFxcIiByZXF1aXJlZD1cXFwicmVxdWlyZWRcXFwiIGlkPVxcXCJmYi1waG9uZVxcXCI+XFxyXFxuXFx0XFx0XFx0PC9sYWJlbD5cXHJcXG5cXHRcXHRcXHQ8bGFiZWwgZm9yPVxcXCJmYi1lbWFpbFxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0PHNwYW4gY2xhc3M9XFxcInZpc3VhbGx5LWhpZGRlblxcXCI+0K3Qu9C10YLRgNC+0L3QvdCw0Y8g0L/QvtGH0YLQsDwvc3Bhbj5cXHJcXG5cXHRcXHRcXHRcXHQ8aW5wdXQgY2xhc3M9XFxcImZiLWZvcm1fX2lucHV0XFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJlbWFpbFxcXCIgcGxhY2Vob2xkZXI9XFxcItCt0LvQtdGC0YDQvtC90L3QsNGPINC/0L7Rh9GC0LBcXFwiIHJlcXVpcmVkPVxcXCJyZXF1aXJlZFxcXCIgaWQ9XFxcImZiLWVtYWlsXFxcIj5cXHJcXG5cXHRcXHRcXHQ8L2xhYmVsPlxcclxcblxcdFxcdFxcdDxsYWJlbCBmb3I9XFxcImZiLW1lc3NhZ2VcXFwiPlxcclxcblxcdFxcdFxcdFxcdDxzcGFuIGNsYXNzPVxcXCJ2aXN1YWxseS1oaWRkZW5cXFwiPtCh0L7QvtCx0YnQtdC90LjQtTwvc3Bhbj5cXHJcXG5cXHRcXHRcXHRcXHQ8dGV4dGFyZWEgY2xhc3M9XFxcImZiLWZvcm1fX2lucHV0IGZiLWZvcm1fX3RleHRhcmVhXFxcIiBwbGFjZWhvbGRlcj1cXFwi0KHQvtC+0LHRidC10L3QuNC1XFxcIiBpZD1cXFwiZmItbWVzc2FnZVxcXCI+PC90ZXh0YXJlYT5cXHJcXG5cXHRcXHRcXHQ8L2xhYmVsPlxcclxcblxcdFxcdFxcdDxwIGNsYXNzPVxcXCJmYi1mb3JtX190ZXh0XFxcIj5cXHJcXG5cXHRcXHRcXHRcXHTQndCw0LbQuNC80LDRjyDigJzQvtGC0L/RgNCw0LLQuNGC0YzigJ0sINCy0Ysg0LTQsNC10YLQtSDRgdC+0LPQu9Cw0YHQuNC1INC90LAgPHN0cm9uZyBjbGFzcz1cXFwiZmItZm9ybV9fdGV4dC0tY29sb3ItcmFkaWNhbC1yZWRcXFwiPtC+0LHRgNCw0LHQvtGC0LrRgyDQv9C10YDRgdC+0L3QsNC70YzQvdGL0YUg0LTQsNC90L3Ri9GFPC9zdHJvbmc+INC4INGB0L7Qs9C70LDRiNCw0LXRgtC10YHRjCDRgSDQvdCw0YjQtdC5IDxhIGNsYXNzPVxcXCJmYi1mb3JtX190ZXh0LS1jb2xvci1yYWRpY2FsLXJlZFxcXCIgaHJlZj1cXFwiI1xcXCI+0L/QvtC70LjRgtC40LrQvtC5INC60L7QvdGE0LjQtNC10L3RhtC40LDQu9GM0L3QvtGB0YLQuDwvYT5cXHJcXG5cXHRcXHRcXHQ8L3A+XFxyXFxuXFx0XFx0XFx0PGJ1dHRvbiBjbGFzcz1cXFwiZmItZm9ybV9fYnRuIGljb24tZHJvcGRvd25cXFwiIHR5cGU9XFxcInN1Ym1pdFxcXCI+0J7RgtC/0YDQsNCy0LjRgtGMPC9idXR0b24+XFxyXFxuXFx0XFx0PC9mb3JtPlxcclxcblxcdFxcdDxidXR0b24gY2xhc3M9XFxcImNwcy1wb3BhcF9fYnRuIGJ0bi1jbG9zZSBidXR0b24tanMtb3BlblxcXCI+XFxyXFxuXFx0XFx0XFx0PHNwYW4gY2xhc3M9XFxcInZpc3VhbGx5LWhpZGRlblxcXCI+0JfQsNC60YDRi9GC0Ywg0LzQtdC90Y48L3NwYW4+XFxyXFxuXFx0XFx0XFx0PHNwYW4gY2xhc3M9XFxcImJ0bi1jbG9zZV9fZWxtLWJ0blxcXCI+PC9zcGFuPlxcclxcblxcdFxcdDwvYnV0dG9uPlxcclxcblxcdFxcdDxkaXYgY2xhc3M9XFxcImNwcy1qcy1iZyBjcHMtcG9wYXBfX2JnXFxcIj48L2Rpdj5cXHJcXG5cXHQ8L3NlY3Rpb24+XFxyXFxuXFxyXFxuXFx0PCEtLSDQodGC0LDRgtGD0YEg0YDQtdC80L7QvdGC0LAgLS0+XFxyXFxuXFx0PHNlY3Rpb24gY2xhc3M9XFxcImNwcy1wb3BhcCBjcHMtcG9wYXAtLW5vbmUgYmxvay1qcy1hY3RpdmVcXFwiICBkYXRhLXRhcmdldD1cXFwidHdvLWJ0blxcXCI+XFxyXFxuXFx0XFx0PGgyIGNsYXNzPVxcXCJjcHMtcG9wYXBfX3RpdGxlXFxcIj7QodGC0LDRgtGD0YEg0YDQtdC80L7QvdGC0LA8L2gyPlxcclxcblxcdFxcdDxmb3JtIGNsYXNzPVxcXCJjcHMtcG9wYXBfX2ZiLWZvcm0gZmItZm9ybVxcXCIgYWN0aW9uPVxcXCIjXFxcIiBtZXRob2Q9XFxcIlBPU1RcXFwiIGVuY3R5cGU9XFxcIm11bHRpcGFydC9mb3JtLWRhdGFcXFwiPlxcclxcblxcdFxcdFxcdDxsYWJlbD5cXHJcXG5cXHRcXHRcXHRcXHQ8c3BhbiBjbGFzcz1cXFwidmlzdWFsbHktaGlkZGVuXFxcIj7QotC10LvQtdGE0L7QvTwvc3Bhbj5cXHJcXG5cXHRcXHRcXHRcXHQ8aW5wdXQgY2xhc3M9XFxcImZiLWZvcm1fX2lucHV0XFxcIiB0eXBlPVxcXCJ0ZWxcXFwiIG5hbWU9XFxcInBob25lXFxcIiBwbGFjZWhvbGRlcj1cXFwi0KLQtdC70LXRhNC+0L1cXFwiIHJlcXVpcmVkPVxcXCJyZXF1aXJlZFxcXCI+XFxyXFxuXFx0XFx0XFx0PC9sYWJlbD5cXHJcXG5cXHRcXHRcXHQ8cCBjbGFzcz1cXFwiZmItZm9ybV9fdGV4dFxcXCI+XFxyXFxuXFx0XFx0XFx0XFx00J3QsNC20LjQvNCw0Y8g4oCc0L7RgtC/0YDQsNCy0LjRgtGM4oCdLCDQstGLINC00LDQtdGC0LUg0YHQvtCz0LvQsNGB0LjQtSDQvdCwIDxzdHJvbmcgY2xhc3M9XFxcImZiLWZvcm1fX3RleHQtLWNvbG9yLXJhZGljYWwtcmVkXFxcIj7QvtCx0YDQsNCx0L7RgtC60YMg0L/QtdGA0YHQvtC90LDQu9GM0L3Ri9GFINC00LDQvdC90YvRhTwvc3Ryb25nPiDQuCDRgdC+0LPQu9Cw0YjQsNC10YLQtdGB0Ywg0YEg0L3QsNGI0LXQuSA8YSBjbGFzcz1cXFwiZmItZm9ybV9fdGV4dC0tY29sb3ItcmFkaWNhbC1yZWRcXFwiIGhyZWY9XFxcIiNcXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIj7Qv9C+0LvQuNGC0LjQutC+0Lkg0LrQvtC90YTQuNC00LXQvdGG0LjQsNC70YzQvdC+0YHRgtC4PC9hPlxcclxcblxcdFxcdFxcdDwvcD5cXHJcXG5cXHRcXHRcXHQ8YnV0dG9uIGNsYXNzPVxcXCJmYi1mb3JtX19idG4gaWNvbi1kcm9wZG93blxcXCIgdHlwZT1cXFwic3VibWl0XFxcIj7QntGC0L/RgNCw0LLQuNGC0Yw8L2J1dHRvbj5cXHJcXG5cXHRcXHQ8L2Zvcm0+XFxyXFxuXFx0XFx0PGJ1dHRvbiBjbGFzcz1cXFwiY3BzLXBvcGFwX19idG4gYnRuLWNsb3NlIGJ1dHRvbi1qcy1vcGVuXFxcIj5cXHJcXG5cXHRcXHRcXHQ8c3BhbiBjbGFzcz1cXFwidmlzdWFsbHktaGlkZGVuXFxcIj7Ql9Cw0LrRgNGL0YLRjCDQvNC10L3Rjjwvc3Bhbj5cXHJcXG5cXHRcXHRcXHQ8c3BhbiBjbGFzcz1cXFwiYnRuLWNsb3NlX19lbG0tYnRuXFxcIj48L3NwYW4+XFxyXFxuXFx0XFx0PC9idXR0b24+XFxyXFxuXFx0XFxyXFxuXFx0XFxyXFxuXFx0XFx0PGRpdiBjbGFzcz1cXFwiY3BzLWpzLWJnIGNwcy1wb3BhcF9fYmdcXFwiPjwvZGl2PlxcclxcblxcdDwvc2VjdGlvbj5cXHJcXG5cXHQ8IS0tINCX0LDQutCw0LfQsNGC0Ywg0LfQstC+0L3QvtC6IC0tPlxcclxcblxcdDxzZWN0aW9uIGNsYXNzPVxcXCJjcHMtcG9wYXAgY3BzLXBvcGFwLS1ub25lIGJsb2stanMtYWN0aXZlXFxcIiAgZGF0YS10YXJnZXQ9XFxcInRocmVlLWJ0blxcXCI+XFxyXFxuXFx0XFx0PGgyIGNsYXNzPVxcXCJjcHMtcG9wYXBfX3RpdGxlXFxcIj7Ql9Cw0LrQsNC30LDRgtGMINC30LLQvtC90L7QujwvaDI+XFxyXFxuXFx0XFx0PGZvcm0gY2xhc3M9XFxcImNwcy1wb3BhcF9fZmItZm9ybSBmYi1mb3JtXFxcIiBhY3Rpb249XFxcIiNcXFwiIG1ldGhvZD1cXFwiUE9TVFxcXCIgZW5jdHlwZT1cXFwibXVsdGlwYXJ0L2Zvcm0tZGF0YVxcXCI+XFxyXFxuXFx0XFx0XFx0PGxhYmVsPlxcclxcblxcdFxcdFxcdFxcdDxzcGFuIGNsYXNzPVxcXCJ2aXN1YWxseS1oaWRkZW5cXFwiPtCi0LXQu9C10YTQvtC9PC9zcGFuPlxcclxcblxcdFxcdFxcdFxcdDxpbnB1dCBjbGFzcz1cXFwiZmItZm9ybV9faW5wdXRcXFwiIHR5cGU9XFxcInRlbFxcXCIgbmFtZT1cXFwicGhvbmVcXFwiIHBsYWNlaG9sZGVyPVxcXCLQotC10LvQtdGE0L7QvVxcXCIgcmVxdWlyZWQ9XFxcInJlcXVpcmVkXFxcIj5cXHJcXG5cXHRcXHRcXHQ8L2xhYmVsPlxcclxcblxcdFxcdFxcdDxwIGNsYXNzPVxcXCJmYi1mb3JtX190ZXh0XFxcIj5cXHJcXG5cXHRcXHRcXHRcXHTQndCw0LbQuNC80LDRjyDigJzQvtGC0L/RgNCw0LLQuNGC0YzigJ0sINCy0Ysg0LTQsNC10YLQtSDRgdC+0LPQu9Cw0YHQuNC1INC90LAgPHN0cm9uZyBjbGFzcz1cXFwiZmItZm9ybV9fdGV4dC0tY29sb3ItcmFkaWNhbC1yZWRcXFwiPtC+0LHRgNCw0LHQvtGC0LrRgyDQv9C10YDRgdC+0L3QsNC70YzQvdGL0YUg0LTQsNC90L3Ri9GFPC9zdHJvbmc+INC4INGB0L7Qs9C70LDRiNCw0LXRgtC10YHRjCDRgSDQvdCw0YjQtdC5IDxhIGNsYXNzPVxcXCJmYi1mb3JtX190ZXh0LS1jb2xvci1yYWRpY2FsLXJlZFxcXCIgaHJlZj1cXFwiI1xcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiPtC/0L7Qu9C40YLQuNC60L7QuSDQutC+0L3RhNC40LTQtdC90YbQuNCw0LvRjNC90L7RgdGC0Lg8L2E+XFxyXFxuXFx0XFx0XFx0PC9wPlxcclxcblxcdFxcdFxcdDxidXR0b24gY2xhc3M9XFxcImZiLWZvcm1fX2J0biBpY29uLWRyb3Bkb3duXFxcIiB0eXBlPVxcXCJzdWJtaXRcXFwiPtCe0YLQv9GA0LDQstC40YLRjDwvYnV0dG9uPlxcclxcblxcdFxcdDwvZm9ybT5cXHJcXG5cXHRcXHQ8YnV0dG9uIGNsYXNzPVxcXCJjcHMtcG9wYXBfX2J0biBidG4tY2xvc2UgYnV0dG9uLWpzLW9wZW5cXFwiPlxcclxcblxcdFxcdFxcdDxzcGFuIGNsYXNzPVxcXCJ2aXN1YWxseS1oaWRkZW5cXFwiPtCX0LDQutGA0YvRgtGMINC80LXQvdGOPC9zcGFuPlxcclxcblxcdFxcdFxcdDxzcGFuIGNsYXNzPVxcXCJidG4tY2xvc2VfX2VsbS1idG5cXFwiPjwvc3Bhbj5cXHJcXG5cXHRcXHQ8L2J1dHRvbj5cXHJcXG5cXHRcXHJcXG5cXHRcXHJcXG5cXHRcXHQ8ZGl2IGNsYXNzPVxcXCJjcHMtanMtYmcgY3BzLXBvcGFwX19iZ1xcXCI+PC9kaXY+XFxyXFxuXFx0PC9zZWN0aW9uPlxcclxcblxcdDwhLS0g0JfQsNC60LDQt9Cw0YLRjCDQt9Cy0L7QvdC+0LogLS0+XFxyXFxuXFx0PHNlY3Rpb24gY2xhc3M9XFxcImNwcy1wb3BhcCBjcHMtcG9wYXAtLW5vbmUgYmxvay1qcy1hY3RpdmVcXFwiICBkYXRhLXRhcmdldD1cXFwidGhyZWUtYnRuXFxcIj5cXHJcXG5cXHRcXHQ8aDIgY2xhc3M9XFxcImNwcy1wb3BhcF9fdGl0bGVcXFwiPtCX0LDQutCw0LfQsNGC0Ywg0LfQstC+0L3QvtC6PC9oMj5cXHJcXG5cXHRcXHQ8Zm9ybSBjbGFzcz1cXFwiY3BzLXBvcGFwX19mYi1mb3JtIGZiLWZvcm1cXFwiIGFjdGlvbj1cXFwiI1xcXCIgbWV0aG9kPVxcXCJQT1NUXFxcIiBlbmN0eXBlPVxcXCJtdWx0aXBhcnQvZm9ybS1kYXRhXFxcIj5cXHJcXG5cXHRcXHRcXHQ8bGFiZWw+XFxyXFxuXFx0XFx0XFx0XFx0PHNwYW4gY2xhc3M9XFxcInZpc3VhbGx5LWhpZGRlblxcXCI+0KLQtdC70LXRhNC+0L08L3NwYW4+XFxyXFxuXFx0XFx0XFx0XFx0PGlucHV0IGNsYXNzPVxcXCJmYi1mb3JtX19pbnB1dFxcXCIgdHlwZT1cXFwidGVsXFxcIiBuYW1lPVxcXCJwaG9uZVxcXCIgcGxhY2Vob2xkZXI9XFxcItCi0LXQu9C10YTQvtC9XFxcIiByZXF1aXJlZD1cXFwicmVxdWlyZWRcXFwiPlxcclxcblxcdFxcdFxcdDwvbGFiZWw+XFxyXFxuXFx0XFx0XFx0PHAgY2xhc3M9XFxcImZiLWZvcm1fX3RleHRcXFwiPlxcclxcblxcdFxcdFxcdFxcdNCd0LDQttC40LzQsNGPIOKAnNC+0YLQv9GA0LDQstC40YLRjOKAnSwg0LLRiyDQtNCw0LXRgtC1INGB0L7Qs9C70LDRgdC40LUg0L3QsCA8c3Ryb25nIGNsYXNzPVxcXCJmYi1mb3JtX190ZXh0LS1jb2xvci1yYWRpY2FsLXJlZFxcXCI+0L7QsdGA0LDQsdC+0YLQutGDINC/0LXRgNGB0L7QvdCw0LvRjNC90YvRhSDQtNCw0L3QvdGL0YU8L3N0cm9uZz4g0Lgg0YHQvtCz0LvQsNGI0LDQtdGC0LXRgdGMINGBINC90LDRiNC10LkgPGEgY2xhc3M9XFxcImZiLWZvcm1fX3RleHQtLWNvbG9yLXJhZGljYWwtcmVkXFxcIiBocmVmPVxcXCIjXFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCI+0L/QvtC70LjRgtC40LrQvtC5INC60L7QvdGE0LjQtNC10L3RhtC40LDQu9GM0L3QvtGB0YLQuDwvYT5cXHJcXG5cXHRcXHRcXHQ8L3A+XFxyXFxuXFx0XFx0XFx0PGJ1dHRvbiBjbGFzcz1cXFwiZmItZm9ybV9fYnRuIGljb24tZHJvcGRvd25cXFwiIHR5cGU9XFxcInN1Ym1pdFxcXCI+0J7RgtC/0YDQsNCy0LjRgtGMPC9idXR0b24+XFxyXFxuXFx0XFx0PC9mb3JtPlxcclxcblxcdFxcdDxidXR0b24gY2xhc3M9XFxcImNwcy1wb3BhcF9fYnRuIGJ0bi1jbG9zZSBidXR0b24tanMtb3BlblxcXCI+XFxyXFxuXFx0XFx0XFx0PHNwYW4gY2xhc3M9XFxcInZpc3VhbGx5LWhpZGRlblxcXCI+0JfQsNC60YDRi9GC0Ywg0LzQtdC90Y48L3NwYW4+XFxyXFxuXFx0XFx0XFx0PHNwYW4gY2xhc3M9XFxcImJ0bi1jbG9zZV9fZWxtLWJ0blxcXCI+PC9zcGFuPlxcclxcblxcdFxcdDwvYnV0dG9uPlxcclxcblxcdFxcclxcblxcdFxcclxcblxcdFxcdDxkaXYgY2xhc3M9XFxcImNwcy1qcy1iZyBjcHMtcG9wYXBfX2JnXFxcIj48L2Rpdj5cXHJcXG5cXHQ8L3NlY3Rpb24+XFxyXFxuXFx0PCEtLSDQndCw0YfQsNGC0Ywg0YfQsNGCIC0tPlxcclxcblxcdDxzZWN0aW9uIGNsYXNzPVxcXCJjcHMtcG9wYXAgY3BzLXBvcGFwLS1ub25lIGJsb2stanMtYWN0aXZlXFxcIiAgZGF0YS10YXJnZXQ9XFxcImZvdXItYnRuXFxcIj5cXHJcXG5cXHRcXHQ8aDIgY2xhc3M9XFxcImNwcy1wb3BhcF9fdGl0bGVcXFwiPtCd0LDRh9Cw0YLRjCDRh9Cw0YI8L2gyPlxcclxcblxcdFxcdDxmb3JtIGNsYXNzPVxcXCJjcHMtcG9wYXBfX2ZiLWZvcm0gZmItZm9ybVxcXCIgYWN0aW9uPVxcXCIjXFxcIiBtZXRob2Q9XFxcIlBPU1RcXFwiIGVuY3R5cGU9XFxcIm11bHRpcGFydC9mb3JtLWRhdGFcXFwiPlxcclxcblxcdFxcdFxcdDxsYWJlbD5cXHJcXG5cXHRcXHRcXHRcXHQ8c3BhbiBjbGFzcz1cXFwidmlzdWFsbHktaGlkZGVuXFxcIj7QotC10LvQtdGE0L7QvTwvc3Bhbj5cXHJcXG5cXHRcXHRcXHRcXHQ8aW5wdXQgY2xhc3M9XFxcImZiLWZvcm1fX2lucHV0XFxcIiB0eXBlPVxcXCJ0ZWxcXFwiIG5hbWU9XFxcInBob25lXFxcIiBwbGFjZWhvbGRlcj1cXFwi0KLQtdC70LXRhNC+0L1cXFwiIHJlcXVpcmVkPVxcXCJyZXF1aXJlZFxcXCI+XFxyXFxuXFx0XFx0XFx0PC9sYWJlbD5cXHJcXG5cXHRcXHRcXHQ8cCBjbGFzcz1cXFwiZmItZm9ybV9fdGV4dFxcXCI+XFxyXFxuXFx0XFx0XFx0XFx00J3QsNC20LjQvNCw0Y8g4oCc0L7RgtC/0YDQsNCy0LjRgtGM4oCdLCDQstGLINC00LDQtdGC0LUg0YHQvtCz0LvQsNGB0LjQtSDQvdCwIDxzdHJvbmcgY2xhc3M9XFxcImZiLWZvcm1fX3RleHQtLWNvbG9yLXJhZGljYWwtcmVkXFxcIj7QvtCx0YDQsNCx0L7RgtC60YMg0L/QtdGA0YHQvtC90LDQu9GM0L3Ri9GFINC00LDQvdC90YvRhTwvc3Ryb25nPiDQuCDRgdC+0LPQu9Cw0YjQsNC10YLQtdGB0Ywg0YEg0L3QsNGI0LXQuSA8YSBjbGFzcz1cXFwiZmItZm9ybV9fdGV4dC0tY29sb3ItcmFkaWNhbC1yZWRcXFwiIGhyZWY9XFxcIiNcXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIj7Qv9C+0LvQuNGC0LjQutC+0Lkg0LrQvtC90YTQuNC00LXQvdGG0LjQsNC70YzQvdC+0YHRgtC4PC9hPlxcclxcblxcdFxcdFxcdDwvcD5cXHJcXG5cXHRcXHRcXHQ8YnV0dG9uIGNsYXNzPVxcXCJmYi1mb3JtX19idG4gaWNvbi1kcm9wZG93blxcXCIgdHlwZT1cXFwic3VibWl0XFxcIj7QntGC0L/RgNCw0LLQuNGC0Yw8L2J1dHRvbj5cXHJcXG5cXHRcXHQ8L2Zvcm0+XFxyXFxuXFx0XFx0PGJ1dHRvbiBjbGFzcz1cXFwiY3BzLXBvcGFwX19idG4gYnRuLWNsb3NlIGJ1dHRvbi1qcy1vcGVuXFxcIj5cXHJcXG5cXHRcXHRcXHQ8c3BhbiBjbGFzcz1cXFwidmlzdWFsbHktaGlkZGVuXFxcIj7Ql9Cw0LrRgNGL0YLRjCDQvNC10L3Rjjwvc3Bhbj5cXHJcXG5cXHRcXHRcXHQ8c3BhbiBjbGFzcz1cXFwiYnRuLWNsb3NlX19lbG0tYnRuXFxcIj48L3NwYW4+XFxyXFxuXFx0XFx0PC9idXR0b24+XFxyXFxuXFx0XFxyXFxuXFx0XFxyXFxuXFx0XFx0PGRpdiBjbGFzcz1cXFwiY3BzLWpzLWJnIGNwcy1wb3BhcF9fYmdcXFwiPjwvZGl2PlxcclxcblxcdDwvc2VjdGlvbj5cXHJcXG5cXHQ8IS0tINCS0YXQvtC0INCb0LjRh9C90YvQuSDQutCw0LHQuNC90LXRgiAtLT5cXHJcXG5cXHQ8c2VjdGlvbiBjbGFzcz1cXFwiY3BzLXBvcGFwIGNwcy1wb3BhcC0tbm9uZSBibG9rLWpzLWFjdGl2ZVxcXCIgIGRhdGEtdGFyZ2V0PVxcXCJmaXZlLWJ0blxcXCI+XFxyXFxuXFx0XFx0PGgyIGNsYXNzPVxcXCJjcHMtcG9wYXBfX3RpdGxlXFxcIj7QktGF0L7QtCDQm9C40YfQvdGL0Lkg0LrQsNCx0LjQvdC10YLQujwvaDI+XFxyXFxuXFx0XFx0PGZvcm0gY2xhc3M9XFxcImNwcy1wb3BhcF9fZmItZm9ybSBmYi1mb3JtXFxcIiBhY3Rpb249XFxcIiNcXFwiIG1ldGhvZD1cXFwiUE9TVFxcXCIgZW5jdHlwZT1cXFwibXVsdGlwYXJ0L2Zvcm0tZGF0YVxcXCI+XFxyXFxuXFx0XFx0XFx0PGxhYmVsPlxcclxcblxcdFxcdFxcdFxcdDxzcGFuIGNsYXNzPVxcXCJ2aXN1YWxseS1oaWRkZW5cXFwiPtCi0LXQu9C10YTQvtC9PC9zcGFuPlxcclxcblxcdFxcdFxcdFxcdDxpbnB1dCBjbGFzcz1cXFwiZmItZm9ybV9faW5wdXRcXFwiIHR5cGU9XFxcInRlbFxcXCIgbmFtZT1cXFwicGhvbmVcXFwiIHBsYWNlaG9sZGVyPVxcXCLQotC10LvQtdGE0L7QvVxcXCIgcmVxdWlyZWQ9XFxcInJlcXVpcmVkXFxcIj5cXHJcXG5cXHRcXHRcXHQ8L2xhYmVsPlxcclxcblxcdFxcdFxcdDxwIGNsYXNzPVxcXCJmYi1mb3JtX190ZXh0XFxcIj5cXHJcXG5cXHRcXHRcXHRcXHTQndCw0LbQuNC80LDRjyDigJzQvtGC0L/RgNCw0LLQuNGC0YzigJ0sINCy0Ysg0LTQsNC10YLQtSDRgdC+0LPQu9Cw0YHQuNC1INC90LAgPHN0cm9uZyBjbGFzcz1cXFwiZmItZm9ybV9fdGV4dC0tY29sb3ItcmFkaWNhbC1yZWRcXFwiPtC+0LHRgNCw0LHQvtGC0LrRgyDQv9C10YDRgdC+0L3QsNC70YzQvdGL0YUg0LTQsNC90L3Ri9GFPC9zdHJvbmc+INC4INGB0L7Qs9C70LDRiNCw0LXRgtC10YHRjCDRgSDQvdCw0YjQtdC5IDxhIGNsYXNzPVxcXCJmYi1mb3JtX190ZXh0LS1jb2xvci1yYWRpY2FsLXJlZFxcXCIgaHJlZj1cXFwiI1xcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiPtC/0L7Qu9C40YLQuNC60L7QuSDQutC+0L3RhNC40LTQtdC90YbQuNCw0LvRjNC90L7RgdGC0Lg8L2E+XFxyXFxuXFx0XFx0XFx0PC9wPlxcclxcblxcdFxcdFxcdDxidXR0b24gY2xhc3M9XFxcImZiLWZvcm1fX2J0biBpY29uLWRyb3Bkb3duXFxcIiB0eXBlPVxcXCJzdWJtaXRcXFwiPtCe0YLQv9GA0LDQstC40YLRjDwvYnV0dG9uPlxcclxcblxcdFxcdDwvZm9ybT5cXHJcXG5cXHRcXHQ8YnV0dG9uIGNsYXNzPVxcXCJjcHMtcG9wYXBfX2J0biBidG4tY2xvc2UgYnV0dG9uLWpzLW9wZW5cXFwiPlxcclxcblxcdFxcdFxcdDxzcGFuIGNsYXNzPVxcXCJ2aXN1YWxseS1oaWRkZW5cXFwiPtCX0LDQutGA0YvRgtGMINC80LXQvdGOPC9zcGFuPlxcclxcblxcdFxcdFxcdDxzcGFuIGNsYXNzPVxcXCJidG4tY2xvc2VfX2VsbS1idG5cXFwiPjwvc3Bhbj5cXHJcXG5cXHRcXHQ8L2J1dHRvbj5cXHJcXG5cXHRcXHJcXG5cXHRcXHJcXG5cXHRcXHQ8ZGl2IGNsYXNzPVxcXCJjcHMtanMtYmcgY3BzLXBvcGFwX19iZ1xcXCI+PC9kaXY+XFxyXFxuXFx0PC9zZWN0aW9uPlxcclxcblxcdDwhLS0g0J/QvtC40YHQuiAtLT5cXHJcXG5cXHQ8c2VjdGlvbiBjbGFzcz1cXFwiY3BzLXBvcGFwIGNwcy1wb3BhcC0tbm9uZSBibG9rLWpzLWFjdGl2ZVxcXCIgIGRhdGEtdGFyZ2V0PVxcXCJzZXZlbi1idG5cXFwiPlxcclxcblxcdFxcdDxoMiBjbGFzcz1cXFwiY3BzLXBvcGFwX190aXRsZVxcXCI+0J/QvtC40YHQujwvaDI+XFxyXFxuXFx0XFx0PGZvcm0gY2xhc3M9XFxcImNwcy1wb3BhcF9fZmItZm9ybSBmYi1mb3JtXFxcIiBhY3Rpb249XFxcIiNcXFwiIG1ldGhvZD1cXFwiUE9TVFxcXCIgZW5jdHlwZT1cXFwibXVsdGlwYXJ0L2Zvcm0tZGF0YVxcXCI+XFxyXFxuXFx0XFx0XFx0PGxhYmVsPlxcclxcblxcdFxcdFxcdFxcdDxzcGFuIGNsYXNzPVxcXCJ2aXN1YWxseS1oaWRkZW5cXFwiPtCi0LXQu9C10YTQvtC9PC9zcGFuPlxcclxcblxcdFxcdFxcdFxcdDxpbnB1dCBjbGFzcz1cXFwiZmItZm9ybV9faW5wdXRcXFwiIHR5cGU9XFxcInRlbFxcXCIgbmFtZT1cXFwicGhvbmVcXFwiIHBsYWNlaG9sZGVyPVxcXCLQotC10LvQtdGE0L7QvVxcXCIgcmVxdWlyZWQ9XFxcInJlcXVpcmVkXFxcIj5cXHJcXG5cXHRcXHRcXHQ8L2xhYmVsPlxcclxcblxcdFxcdFxcdDxwIGNsYXNzPVxcXCJmYi1mb3JtX190ZXh0XFxcIj5cXHJcXG5cXHRcXHRcXHRcXHTQndCw0LbQuNC80LDRjyDigJzQvtGC0L/RgNCw0LLQuNGC0YzigJ0sINCy0Ysg0LTQsNC10YLQtSDRgdC+0LPQu9Cw0YHQuNC1INC90LAgPHN0cm9uZyBjbGFzcz1cXFwiZmItZm9ybV9fdGV4dC0tY29sb3ItcmFkaWNhbC1yZWRcXFwiPtC+0LHRgNCw0LHQvtGC0LrRgyDQv9C10YDRgdC+0L3QsNC70YzQvdGL0YUg0LTQsNC90L3Ri9GFPC9zdHJvbmc+INC4INGB0L7Qs9C70LDRiNCw0LXRgtC10YHRjCDRgSDQvdCw0YjQtdC5IDxhIGNsYXNzPVxcXCJmYi1mb3JtX190ZXh0LS1jb2xvci1yYWRpY2FsLXJlZFxcXCIgaHJlZj1cXFwiI1xcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiPtC/0L7Qu9C40YLQuNC60L7QuSDQutC+0L3RhNC40LTQtdC90YbQuNCw0LvRjNC90L7RgdGC0Lg8L2E+XFxyXFxuXFx0XFx0XFx0PC9wPlxcclxcblxcdFxcdFxcdDxidXR0b24gY2xhc3M9XFxcImZiLWZvcm1fX2J0biBpY29uLWRyb3Bkb3duXFxcIiB0eXBlPVxcXCJzdWJtaXRcXFwiPtCe0YLQv9GA0LDQstC40YLRjDwvYnV0dG9uPlxcclxcblxcdFxcdDwvZm9ybT5cXHJcXG5cXHRcXHQ8YnV0dG9uIGNsYXNzPVxcXCJjcHMtcG9wYXBfX2J0biBidG4tY2xvc2UgYnV0dG9uLWpzLW9wZW5cXFwiPlxcclxcblxcdFxcdFxcdDxzcGFuIGNsYXNzPVxcXCJ2aXN1YWxseS1oaWRkZW5cXFwiPtCX0LDQutGA0YvRgtGMINC80LXQvdGOPC9zcGFuPlxcclxcblxcdFxcdFxcdDxzcGFuIGNsYXNzPVxcXCJidG4tY2xvc2VfX2VsbS1idG5cXFwiPjwvc3Bhbj5cXHJcXG5cXHRcXHQ8L2J1dHRvbj5cXHJcXG5cXHRcXHJcXG5cXHRcXHJcXG5cXHRcXHQ8ZGl2IGNsYXNzPVxcXCJjcHMtanMtYmcgY3BzLXBvcGFwX19iZ1xcXCI+PC9kaXY+XFxyXFxuXFx0PC9zZWN0aW9uPlxcclxcblxcdDwhLS0g0J/QvtC00LLQsNC7IC0tPlxcclxcblxcdDxmb290ZXIgY2xhc3M9XFxcImNwcy1mb290ZXJcXFwiPlxcclxcblxcdFxcdDx1bCBjbGFzcz1cXFwiY3BzLWZvb3Rlcl9fZm9vdGVyLWxpc3QgZm9vdGVyLWxpc3RcXFwiPlxcclxcblxcdFxcdFxcdDxsaSBjbGFzcz1cXFwiZm9vdGVyLWxpc3RfX2l0ZW0gZm9vdGVyLWxpc3RfX3dyYXBwXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHQ8c3Bhbj4mIzE2OTsgMjAxOSBDUFM8L3NwYW4+XFxyXFxuXFx0XFx0XFx0XFx0PHNwYW4+0KDQsNC30YDQsNCx0L7RgtCw0L3QviDQutC+0LzQsNC90LTQvtC5IDxhIGNsYXNzPVxcXCJmb290ZXItbGlzdF9fbGlua1xcXCIgaHJlZj1cXFwiaHR0cHM6Ly9hcGVzb25nLnJ1L1xcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiPkFwZXNvbmc8L2E+PC9zcGFuPlxcclxcblxcdFxcdFxcdDwvbGk+XFxyXFxuXFx0XFx0XFx0PGxpIGNsYXNzPVxcXCJmb290ZXItbGlzdF9faXRlbVxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0PGEgY2xhc3M9XFxcImZvb3Rlci1saXN0X19saW5rXFxcIiBocmVmPVxcXCIjXFxcIj7Qn9C+0LvQuNGC0LjQutCwINC60L7QvdGE0LjQtNC10L3RhtC40LDQu9GM0L3QvtGB0YLQuDwvYT5cXHJcXG5cXHRcXHRcXHQ8L2xpPlxcclxcblxcdFxcdFxcdDxsaSBjbGFzcz1cXFwiZm9vdGVyLWxpc3RfX2l0ZW1cXFwiPlxcclxcblxcdFxcdFxcdFxcdNCY0L3RhNC+0YDQvNCw0YbQuNGPLCDRgNCw0LfQvNC10YnQtdC90LAg0L3QsCDQtNCw0L3QvdC+0Lkg0YHRgtGA0LDQvdC40YbQtSwg0L3QtSDRj9Cy0LvRj9C10YLRgdGPINC/0YPQsdC70LjRh9C90L7QuSDQvtGE0LXRgNGC0L7QuVxcclxcblxcdFxcdFxcdDwvbGk+XFxyXFxuXFx0XFx0PC91bD5cXHRcXHJcXG5cXHQ8L2Zvb3Rlcj5cXHJcXG5cXHJcXG48L2JvZHk+XFxyXFxuPC9odG1sPlwiO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgY29kZTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGUsIG5vLXBhcmFtLXJlYXNzaWduXG5cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICBpZiAob3B0aW9ucy5tYXliZU5lZWRRdW90ZXMgJiYgL1tcXHRcXG5cXGZcXHIgXCInPTw+YF0vLnRlc3QodXJsKSkge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvKipcbiAqIFNTUiBXaW5kb3cgMy4wLjBcbiAqIEJldHRlciBoYW5kbGluZyBmb3Igd2luZG93IG9iamVjdCBpbiBTU1IgZW52aXJvbm1lbnRcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9ub2xpbWl0czR3ZWIvc3NyLXdpbmRvd1xuICpcbiAqIENvcHlyaWdodCAyMDIwLCBWbGFkaW1pciBLaGFybGFtcGlkaVxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVFxuICpcbiAqIFJlbGVhc2VkIG9uOiBOb3ZlbWJlciA5LCAyMDIwXG4gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG5mdW5jdGlvbiBpc09iamVjdChvYmopIHtcbiAgICByZXR1cm4gKG9iaiAhPT0gbnVsbCAmJlxuICAgICAgICB0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyAmJlxuICAgICAgICAnY29uc3RydWN0b3InIGluIG9iaiAmJlxuICAgICAgICBvYmouY29uc3RydWN0b3IgPT09IE9iamVjdCk7XG59XG5mdW5jdGlvbiBleHRlbmQodGFyZ2V0LCBzcmMpIHtcbiAgICBpZiAodGFyZ2V0ID09PSB2b2lkIDApIHsgdGFyZ2V0ID0ge307IH1cbiAgICBpZiAoc3JjID09PSB2b2lkIDApIHsgc3JjID0ge307IH1cbiAgICBPYmplY3Qua2V5cyhzcmMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBpZiAodHlwZW9mIHRhcmdldFtrZXldID09PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgIHRhcmdldFtrZXldID0gc3JjW2tleV07XG4gICAgICAgIGVsc2UgaWYgKGlzT2JqZWN0KHNyY1trZXldKSAmJlxuICAgICAgICAgICAgaXNPYmplY3QodGFyZ2V0W2tleV0pICYmXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhzcmNba2V5XSkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZXh0ZW5kKHRhcmdldFtrZXldLCBzcmNba2V5XSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxudmFyIHNzckRvY3VtZW50ID0ge1xuICAgIGJvZHk6IHt9LFxuICAgIGFkZEV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uICgpIHsgfSxcbiAgICByZW1vdmVFdmVudExpc3RlbmVyOiBmdW5jdGlvbiAoKSB7IH0sXG4gICAgYWN0aXZlRWxlbWVudDoge1xuICAgICAgICBibHVyOiBmdW5jdGlvbiAoKSB7IH0sXG4gICAgICAgIG5vZGVOYW1lOiAnJyxcbiAgICB9LFxuICAgIHF1ZXJ5U2VsZWN0b3I6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSxcbiAgICBxdWVyeVNlbGVjdG9yQWxsOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9LFxuICAgIGdldEVsZW1lbnRCeUlkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH0sXG4gICAgY3JlYXRlRXZlbnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGluaXRFdmVudDogZnVuY3Rpb24gKCkgeyB9LFxuICAgICAgICB9O1xuICAgIH0sXG4gICAgY3JlYXRlRWxlbWVudDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY2hpbGRyZW46IFtdLFxuICAgICAgICAgICAgY2hpbGROb2RlczogW10sXG4gICAgICAgICAgICBzdHlsZToge30sXG4gICAgICAgICAgICBzZXRBdHRyaWJ1dGU6IGZ1bmN0aW9uICgpIHsgfSxcbiAgICAgICAgICAgIGdldEVsZW1lbnRzQnlUYWdOYW1lOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIGNyZWF0ZUVsZW1lbnROUzogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge307XG4gICAgfSxcbiAgICBpbXBvcnROb2RlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH0sXG4gICAgbG9jYXRpb246IHtcbiAgICAgICAgaGFzaDogJycsXG4gICAgICAgIGhvc3Q6ICcnLFxuICAgICAgICBob3N0bmFtZTogJycsXG4gICAgICAgIGhyZWY6ICcnLFxuICAgICAgICBvcmlnaW46ICcnLFxuICAgICAgICBwYXRobmFtZTogJycsXG4gICAgICAgIHByb3RvY29sOiAnJyxcbiAgICAgICAgc2VhcmNoOiAnJyxcbiAgICB9LFxufTtcbmZ1bmN0aW9uIGdldERvY3VtZW50KCkge1xuICAgIHZhciBkb2MgPSB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnID8gZG9jdW1lbnQgOiB7fTtcbiAgICBleHRlbmQoZG9jLCBzc3JEb2N1bWVudCk7XG4gICAgcmV0dXJuIGRvYztcbn1cblxudmFyIHNzcldpbmRvdyA9IHtcbiAgICBkb2N1bWVudDogc3NyRG9jdW1lbnQsXG4gICAgbmF2aWdhdG9yOiB7XG4gICAgICAgIHVzZXJBZ2VudDogJycsXG4gICAgfSxcbiAgICBsb2NhdGlvbjoge1xuICAgICAgICBoYXNoOiAnJyxcbiAgICAgICAgaG9zdDogJycsXG4gICAgICAgIGhvc3RuYW1lOiAnJyxcbiAgICAgICAgaHJlZjogJycsXG4gICAgICAgIG9yaWdpbjogJycsXG4gICAgICAgIHBhdGhuYW1lOiAnJyxcbiAgICAgICAgcHJvdG9jb2w6ICcnLFxuICAgICAgICBzZWFyY2g6ICcnLFxuICAgIH0sXG4gICAgaGlzdG9yeToge1xuICAgICAgICByZXBsYWNlU3RhdGU6IGZ1bmN0aW9uICgpIHsgfSxcbiAgICAgICAgcHVzaFN0YXRlOiBmdW5jdGlvbiAoKSB7IH0sXG4gICAgICAgIGdvOiBmdW5jdGlvbiAoKSB7IH0sXG4gICAgICAgIGJhY2s6IGZ1bmN0aW9uICgpIHsgfSxcbiAgICB9LFxuICAgIEN1c3RvbUV2ZW50OiBmdW5jdGlvbiBDdXN0b21FdmVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICBhZGRFdmVudExpc3RlbmVyOiBmdW5jdGlvbiAoKSB7IH0sXG4gICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcjogZnVuY3Rpb24gKCkgeyB9LFxuICAgIGdldENvbXB1dGVkU3R5bGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGdldFByb3BlcnR5VmFsdWU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgIH0sXG4gICAgSW1hZ2U6IGZ1bmN0aW9uICgpIHsgfSxcbiAgICBEYXRlOiBmdW5jdGlvbiAoKSB7IH0sXG4gICAgc2NyZWVuOiB7fSxcbiAgICBzZXRUaW1lb3V0OiBmdW5jdGlvbiAoKSB7IH0sXG4gICAgY2xlYXJUaW1lb3V0OiBmdW5jdGlvbiAoKSB7IH0sXG4gICAgbWF0Y2hNZWRpYTogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge307XG4gICAgfSxcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWU6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoY2FsbGJhY2ssIDApO1xuICAgIH0sXG4gICAgY2FuY2VsQW5pbWF0aW9uRnJhbWU6IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY2xlYXJUaW1lb3V0KGlkKTtcbiAgICB9LFxufTtcbmZ1bmN0aW9uIGdldFdpbmRvdygpIHtcbiAgICB2YXIgd2luID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiB7fTtcbiAgICBleHRlbmQod2luLCBzc3JXaW5kb3cpO1xuICAgIHJldHVybiB3aW47XG59XG5cbmV4cG9ydCB7IGV4dGVuZCwgZ2V0RG9jdW1lbnQsIGdldFdpbmRvdywgc3NyRG9jdW1lbnQsIHNzcldpbmRvdyB9O1xuIiwiaW1wb3J0IHsgZ2V0V2luZG93IH0gZnJvbSAnc3NyLXdpbmRvdyc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRCcmVha3BvaW50KGJyZWFrcG9pbnRzLCBiYXNlLCBjb250YWluZXJFbCkge1xuICBpZiAoYmFzZSA9PT0gdm9pZCAwKSB7XG4gICAgYmFzZSA9ICd3aW5kb3cnO1xuICB9XG5cbiAgaWYgKCFicmVha3BvaW50cyB8fCBiYXNlID09PSAnY29udGFpbmVyJyAmJiAhY29udGFpbmVyRWwpIHJldHVybiB1bmRlZmluZWQ7XG4gIHZhciBicmVha3BvaW50ID0gZmFsc2U7XG4gIHZhciB3aW5kb3cgPSBnZXRXaW5kb3coKTtcbiAgdmFyIGN1cnJlbnRIZWlnaHQgPSBiYXNlID09PSAnd2luZG93JyA/IHdpbmRvdy5pbm5lckhlaWdodCA6IGNvbnRhaW5lckVsLmNsaWVudEhlaWdodDtcbiAgdmFyIHBvaW50cyA9IE9iamVjdC5rZXlzKGJyZWFrcG9pbnRzKS5tYXAoZnVuY3Rpb24gKHBvaW50KSB7XG4gICAgaWYgKHR5cGVvZiBwb2ludCA9PT0gJ3N0cmluZycgJiYgcG9pbnQuaW5kZXhPZignQCcpID09PSAwKSB7XG4gICAgICB2YXIgbWluUmF0aW8gPSBwYXJzZUZsb2F0KHBvaW50LnN1YnN0cigxKSk7XG4gICAgICB2YXIgdmFsdWUgPSBjdXJyZW50SGVpZ2h0ICogbWluUmF0aW87XG4gICAgICByZXR1cm4ge1xuICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgIHBvaW50OiBwb2ludFxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHBvaW50LFxuICAgICAgcG9pbnQ6IHBvaW50XG4gICAgfTtcbiAgfSk7XG4gIHBvaW50cy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgcmV0dXJuIHBhcnNlSW50KGEudmFsdWUsIDEwKSAtIHBhcnNlSW50KGIudmFsdWUsIDEwKTtcbiAgfSk7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwb2ludHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICB2YXIgX3BvaW50cyRpID0gcG9pbnRzW2ldLFxuICAgICAgICBwb2ludCA9IF9wb2ludHMkaS5wb2ludCxcbiAgICAgICAgdmFsdWUgPSBfcG9pbnRzJGkudmFsdWU7XG5cbiAgICBpZiAoYmFzZSA9PT0gJ3dpbmRvdycpIHtcbiAgICAgIGlmICh3aW5kb3cubWF0Y2hNZWRpYShcIihtaW4td2lkdGg6IFwiICsgdmFsdWUgKyBcInB4KVwiKS5tYXRjaGVzKSB7XG4gICAgICAgIGJyZWFrcG9pbnQgPSBwb2ludDtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHZhbHVlIDw9IGNvbnRhaW5lckVsLmNsaWVudFdpZHRoKSB7XG4gICAgICBicmVha3BvaW50ID0gcG9pbnQ7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGJyZWFrcG9pbnQgfHwgJ21heCc7XG59IiwiaW1wb3J0IHNldEJyZWFrcG9pbnQgZnJvbSAnLi9zZXRCcmVha3BvaW50JztcbmltcG9ydCBnZXRCcmVha3BvaW50IGZyb20gJy4vZ2V0QnJlYWtwb2ludCc7XG5leHBvcnQgZGVmYXVsdCB7XG4gIHNldEJyZWFrcG9pbnQ6IHNldEJyZWFrcG9pbnQsXG4gIGdldEJyZWFrcG9pbnQ6IGdldEJyZWFrcG9pbnRcbn07IiwiaW1wb3J0IHsgZXh0ZW5kIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvdXRpbHMnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2V0QnJlYWtwb2ludCgpIHtcbiAgdmFyIHN3aXBlciA9IHRoaXM7XG4gIHZhciBhY3RpdmVJbmRleCA9IHN3aXBlci5hY3RpdmVJbmRleCxcbiAgICAgIGluaXRpYWxpemVkID0gc3dpcGVyLmluaXRpYWxpemVkLFxuICAgICAgX3N3aXBlciRsb29wZWRTbGlkZXMgPSBzd2lwZXIubG9vcGVkU2xpZGVzLFxuICAgICAgbG9vcGVkU2xpZGVzID0gX3N3aXBlciRsb29wZWRTbGlkZXMgPT09IHZvaWQgMCA/IDAgOiBfc3dpcGVyJGxvb3BlZFNsaWRlcyxcbiAgICAgIHBhcmFtcyA9IHN3aXBlci5wYXJhbXMsXG4gICAgICAkZWwgPSBzd2lwZXIuJGVsO1xuICB2YXIgYnJlYWtwb2ludHMgPSBwYXJhbXMuYnJlYWtwb2ludHM7XG4gIGlmICghYnJlYWtwb2ludHMgfHwgYnJlYWtwb2ludHMgJiYgT2JqZWN0LmtleXMoYnJlYWtwb2ludHMpLmxlbmd0aCA9PT0gMCkgcmV0dXJuOyAvLyBHZXQgYnJlYWtwb2ludCBmb3Igd2luZG93IHdpZHRoIGFuZCB1cGRhdGUgcGFyYW1ldGVyc1xuXG4gIHZhciBicmVha3BvaW50ID0gc3dpcGVyLmdldEJyZWFrcG9pbnQoYnJlYWtwb2ludHMsIHN3aXBlci5wYXJhbXMuYnJlYWtwb2ludHNCYXNlLCBzd2lwZXIuZWwpO1xuICBpZiAoIWJyZWFrcG9pbnQgfHwgc3dpcGVyLmN1cnJlbnRCcmVha3BvaW50ID09PSBicmVha3BvaW50KSByZXR1cm47XG4gIHZhciBicmVha3BvaW50T25seVBhcmFtcyA9IGJyZWFrcG9pbnQgaW4gYnJlYWtwb2ludHMgPyBicmVha3BvaW50c1ticmVha3BvaW50XSA6IHVuZGVmaW5lZDtcblxuICBpZiAoYnJlYWtwb2ludE9ubHlQYXJhbXMpIHtcbiAgICBbJ3NsaWRlc1BlclZpZXcnLCAnc3BhY2VCZXR3ZWVuJywgJ3NsaWRlc1Blckdyb3VwJywgJ3NsaWRlc1Blckdyb3VwU2tpcCcsICdzbGlkZXNQZXJDb2x1bW4nXS5mb3JFYWNoKGZ1bmN0aW9uIChwYXJhbSkge1xuICAgICAgdmFyIHBhcmFtVmFsdWUgPSBicmVha3BvaW50T25seVBhcmFtc1twYXJhbV07XG4gICAgICBpZiAodHlwZW9mIHBhcmFtVmFsdWUgPT09ICd1bmRlZmluZWQnKSByZXR1cm47XG5cbiAgICAgIGlmIChwYXJhbSA9PT0gJ3NsaWRlc1BlclZpZXcnICYmIChwYXJhbVZhbHVlID09PSAnQVVUTycgfHwgcGFyYW1WYWx1ZSA9PT0gJ2F1dG8nKSkge1xuICAgICAgICBicmVha3BvaW50T25seVBhcmFtc1twYXJhbV0gPSAnYXV0byc7XG4gICAgICB9IGVsc2UgaWYgKHBhcmFtID09PSAnc2xpZGVzUGVyVmlldycpIHtcbiAgICAgICAgYnJlYWtwb2ludE9ubHlQYXJhbXNbcGFyYW1dID0gcGFyc2VGbG9hdChwYXJhbVZhbHVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJyZWFrcG9pbnRPbmx5UGFyYW1zW3BhcmFtXSA9IHBhcnNlSW50KHBhcmFtVmFsdWUsIDEwKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHZhciBicmVha3BvaW50UGFyYW1zID0gYnJlYWtwb2ludE9ubHlQYXJhbXMgfHwgc3dpcGVyLm9yaWdpbmFsUGFyYW1zO1xuICB2YXIgd2FzTXVsdGlSb3cgPSBwYXJhbXMuc2xpZGVzUGVyQ29sdW1uID4gMTtcbiAgdmFyIGlzTXVsdGlSb3cgPSBicmVha3BvaW50UGFyYW1zLnNsaWRlc1BlckNvbHVtbiA+IDE7XG4gIHZhciB3YXNFbmFibGVkID0gcGFyYW1zLmVuYWJsZWQ7XG5cbiAgaWYgKHdhc011bHRpUm93ICYmICFpc011bHRpUm93KSB7XG4gICAgJGVsLnJlbW92ZUNsYXNzKHBhcmFtcy5jb250YWluZXJNb2RpZmllckNsYXNzICsgXCJtdWx0aXJvdyBcIiArIHBhcmFtcy5jb250YWluZXJNb2RpZmllckNsYXNzICsgXCJtdWx0aXJvdy1jb2x1bW5cIik7XG4gICAgc3dpcGVyLmVtaXRDb250YWluZXJDbGFzc2VzKCk7XG4gIH0gZWxzZSBpZiAoIXdhc011bHRpUm93ICYmIGlzTXVsdGlSb3cpIHtcbiAgICAkZWwuYWRkQ2xhc3MocGFyYW1zLmNvbnRhaW5lck1vZGlmaWVyQ2xhc3MgKyBcIm11bHRpcm93XCIpO1xuXG4gICAgaWYgKGJyZWFrcG9pbnRQYXJhbXMuc2xpZGVzUGVyQ29sdW1uRmlsbCAmJiBicmVha3BvaW50UGFyYW1zLnNsaWRlc1BlckNvbHVtbkZpbGwgPT09ICdjb2x1bW4nIHx8ICFicmVha3BvaW50UGFyYW1zLnNsaWRlc1BlckNvbHVtbkZpbGwgJiYgcGFyYW1zLnNsaWRlc1BlckNvbHVtbkZpbGwgPT09ICdjb2x1bW4nKSB7XG4gICAgICAkZWwuYWRkQ2xhc3MocGFyYW1zLmNvbnRhaW5lck1vZGlmaWVyQ2xhc3MgKyBcIm11bHRpcm93LWNvbHVtblwiKTtcbiAgICB9XG5cbiAgICBzd2lwZXIuZW1pdENvbnRhaW5lckNsYXNzZXMoKTtcbiAgfVxuXG4gIHZhciBkaXJlY3Rpb25DaGFuZ2VkID0gYnJlYWtwb2ludFBhcmFtcy5kaXJlY3Rpb24gJiYgYnJlYWtwb2ludFBhcmFtcy5kaXJlY3Rpb24gIT09IHBhcmFtcy5kaXJlY3Rpb247XG4gIHZhciBuZWVkc1JlTG9vcCA9IHBhcmFtcy5sb29wICYmIChicmVha3BvaW50UGFyYW1zLnNsaWRlc1BlclZpZXcgIT09IHBhcmFtcy5zbGlkZXNQZXJWaWV3IHx8IGRpcmVjdGlvbkNoYW5nZWQpO1xuXG4gIGlmIChkaXJlY3Rpb25DaGFuZ2VkICYmIGluaXRpYWxpemVkKSB7XG4gICAgc3dpcGVyLmNoYW5nZURpcmVjdGlvbigpO1xuICB9XG5cbiAgZXh0ZW5kKHN3aXBlci5wYXJhbXMsIGJyZWFrcG9pbnRQYXJhbXMpO1xuICB2YXIgaXNFbmFibGVkID0gc3dpcGVyLnBhcmFtcy5lbmFibGVkO1xuICBleHRlbmQoc3dpcGVyLCB7XG4gICAgYWxsb3dUb3VjaE1vdmU6IHN3aXBlci5wYXJhbXMuYWxsb3dUb3VjaE1vdmUsXG4gICAgYWxsb3dTbGlkZU5leHQ6IHN3aXBlci5wYXJhbXMuYWxsb3dTbGlkZU5leHQsXG4gICAgYWxsb3dTbGlkZVByZXY6IHN3aXBlci5wYXJhbXMuYWxsb3dTbGlkZVByZXZcbiAgfSk7XG5cbiAgaWYgKHdhc0VuYWJsZWQgJiYgIWlzRW5hYmxlZCkge1xuICAgIHN3aXBlci5kaXNhYmxlKCk7XG4gIH0gZWxzZSBpZiAoIXdhc0VuYWJsZWQgJiYgaXNFbmFibGVkKSB7XG4gICAgc3dpcGVyLmVuYWJsZSgpO1xuICB9XG5cbiAgc3dpcGVyLmN1cnJlbnRCcmVha3BvaW50ID0gYnJlYWtwb2ludDtcbiAgc3dpcGVyLmVtaXQoJ19iZWZvcmVCcmVha3BvaW50JywgYnJlYWtwb2ludFBhcmFtcyk7XG5cbiAgaWYgKG5lZWRzUmVMb29wICYmIGluaXRpYWxpemVkKSB7XG4gICAgc3dpcGVyLmxvb3BEZXN0cm95KCk7XG4gICAgc3dpcGVyLmxvb3BDcmVhdGUoKTtcbiAgICBzd2lwZXIudXBkYXRlU2xpZGVzKCk7XG4gICAgc3dpcGVyLnNsaWRlVG8oYWN0aXZlSW5kZXggLSBsb29wZWRTbGlkZXMgKyBzd2lwZXIubG9vcGVkU2xpZGVzLCAwLCBmYWxzZSk7XG4gIH1cblxuICBzd2lwZXIuZW1pdCgnYnJlYWtwb2ludCcsIGJyZWFrcG9pbnRQYXJhbXMpO1xufSIsImZ1bmN0aW9uIGNoZWNrT3ZlcmZsb3coKSB7XG4gIHZhciBzd2lwZXIgPSB0aGlzO1xuICB2YXIgcGFyYW1zID0gc3dpcGVyLnBhcmFtcztcbiAgdmFyIHdhc0xvY2tlZCA9IHN3aXBlci5pc0xvY2tlZDtcbiAgdmFyIGxhc3RTbGlkZVBvc2l0aW9uID0gc3dpcGVyLnNsaWRlcy5sZW5ndGggPiAwICYmIHBhcmFtcy5zbGlkZXNPZmZzZXRCZWZvcmUgKyBwYXJhbXMuc3BhY2VCZXR3ZWVuICogKHN3aXBlci5zbGlkZXMubGVuZ3RoIC0gMSkgKyBzd2lwZXIuc2xpZGVzWzBdLm9mZnNldFdpZHRoICogc3dpcGVyLnNsaWRlcy5sZW5ndGg7XG5cbiAgaWYgKHBhcmFtcy5zbGlkZXNPZmZzZXRCZWZvcmUgJiYgcGFyYW1zLnNsaWRlc09mZnNldEFmdGVyICYmIGxhc3RTbGlkZVBvc2l0aW9uKSB7XG4gICAgc3dpcGVyLmlzTG9ja2VkID0gbGFzdFNsaWRlUG9zaXRpb24gPD0gc3dpcGVyLnNpemU7XG4gIH0gZWxzZSB7XG4gICAgc3dpcGVyLmlzTG9ja2VkID0gc3dpcGVyLnNuYXBHcmlkLmxlbmd0aCA9PT0gMTtcbiAgfVxuXG4gIHN3aXBlci5hbGxvd1NsaWRlTmV4dCA9ICFzd2lwZXIuaXNMb2NrZWQ7XG4gIHN3aXBlci5hbGxvd1NsaWRlUHJldiA9ICFzd2lwZXIuaXNMb2NrZWQ7IC8vIGV2ZW50c1xuXG4gIGlmICh3YXNMb2NrZWQgIT09IHN3aXBlci5pc0xvY2tlZCkgc3dpcGVyLmVtaXQoc3dpcGVyLmlzTG9ja2VkID8gJ2xvY2snIDogJ3VubG9jaycpO1xuXG4gIGlmICh3YXNMb2NrZWQgJiYgd2FzTG9ja2VkICE9PSBzd2lwZXIuaXNMb2NrZWQpIHtcbiAgICBzd2lwZXIuaXNFbmQgPSBmYWxzZTtcbiAgICBpZiAoc3dpcGVyLm5hdmlnYXRpb24pIHN3aXBlci5uYXZpZ2F0aW9uLnVwZGF0ZSgpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY2hlY2tPdmVyZmxvdzogY2hlY2tPdmVyZmxvd1xufTsiLCJmdW5jdGlvbiBwcmVwYXJlQ2xhc3NlcyhlbnRyaWVzLCBwcmVmaXgpIHtcbiAgdmFyIHJlc3VsdENsYXNzZXMgPSBbXTtcbiAgZW50cmllcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgaWYgKHR5cGVvZiBpdGVtID09PSAnb2JqZWN0Jykge1xuICAgICAgT2JqZWN0LmtleXMoaXRlbSkuZm9yRWFjaChmdW5jdGlvbiAoY2xhc3NOYW1lcykge1xuICAgICAgICBpZiAoaXRlbVtjbGFzc05hbWVzXSkge1xuICAgICAgICAgIHJlc3VsdENsYXNzZXMucHVzaChwcmVmaXggKyBjbGFzc05hbWVzKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgaXRlbSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJlc3VsdENsYXNzZXMucHVzaChwcmVmaXggKyBpdGVtKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0Q2xhc3Nlcztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkQ2xhc3NlcygpIHtcbiAgdmFyIHN3aXBlciA9IHRoaXM7XG4gIHZhciBjbGFzc05hbWVzID0gc3dpcGVyLmNsYXNzTmFtZXMsXG4gICAgICBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLFxuICAgICAgcnRsID0gc3dpcGVyLnJ0bCxcbiAgICAgICRlbCA9IHN3aXBlci4kZWwsXG4gICAgICBkZXZpY2UgPSBzd2lwZXIuZGV2aWNlLFxuICAgICAgc3VwcG9ydCA9IHN3aXBlci5zdXBwb3J0OyAvLyBwcmV0dGllci1pZ25vcmVcblxuICB2YXIgc3VmZml4ZXMgPSBwcmVwYXJlQ2xhc3NlcyhbJ2luaXRpYWxpemVkJywgcGFyYW1zLmRpcmVjdGlvbiwge1xuICAgICdwb2ludGVyLWV2ZW50cyc6IHN1cHBvcnQucG9pbnRlckV2ZW50cyAmJiAhc3VwcG9ydC50b3VjaFxuICB9LCB7XG4gICAgJ2ZyZWUtbW9kZSc6IHBhcmFtcy5mcmVlTW9kZVxuICB9LCB7XG4gICAgJ2F1dG9oZWlnaHQnOiBwYXJhbXMuYXV0b0hlaWdodFxuICB9LCB7XG4gICAgJ3J0bCc6IHJ0bFxuICB9LCB7XG4gICAgJ211bHRpcm93JzogcGFyYW1zLnNsaWRlc1BlckNvbHVtbiA+IDFcbiAgfSwge1xuICAgICdtdWx0aXJvdy1jb2x1bW4nOiBwYXJhbXMuc2xpZGVzUGVyQ29sdW1uID4gMSAmJiBwYXJhbXMuc2xpZGVzUGVyQ29sdW1uRmlsbCA9PT0gJ2NvbHVtbidcbiAgfSwge1xuICAgICdhbmRyb2lkJzogZGV2aWNlLmFuZHJvaWRcbiAgfSwge1xuICAgICdpb3MnOiBkZXZpY2UuaW9zXG4gIH0sIHtcbiAgICAnY3NzLW1vZGUnOiBwYXJhbXMuY3NzTW9kZVxuICB9XSwgcGFyYW1zLmNvbnRhaW5lck1vZGlmaWVyQ2xhc3MpO1xuICBjbGFzc05hbWVzLnB1c2guYXBwbHkoY2xhc3NOYW1lcywgc3VmZml4ZXMpO1xuICAkZWwuYWRkQ2xhc3MoW10uY29uY2F0KGNsYXNzTmFtZXMpLmpvaW4oJyAnKSk7XG4gIHN3aXBlci5lbWl0Q29udGFpbmVyQ2xhc3NlcygpO1xufSIsImltcG9ydCBhZGRDbGFzc2VzIGZyb20gJy4vYWRkQ2xhc3Nlcyc7XG5pbXBvcnQgcmVtb3ZlQ2xhc3NlcyBmcm9tICcuL3JlbW92ZUNsYXNzZXMnO1xuZXhwb3J0IGRlZmF1bHQge1xuICBhZGRDbGFzc2VzOiBhZGRDbGFzc2VzLFxuICByZW1vdmVDbGFzc2VzOiByZW1vdmVDbGFzc2VzXG59OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbW92ZUNsYXNzZXMoKSB7XG4gIHZhciBzd2lwZXIgPSB0aGlzO1xuICB2YXIgJGVsID0gc3dpcGVyLiRlbCxcbiAgICAgIGNsYXNzTmFtZXMgPSBzd2lwZXIuY2xhc3NOYW1lcztcbiAgJGVsLnJlbW92ZUNsYXNzKGNsYXNzTmFtZXMuam9pbignICcpKTtcbiAgc3dpcGVyLmVtaXRDb250YWluZXJDbGFzc2VzKCk7XG59IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG4vKiBlc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246IFwib2ZmXCIgKi9cbmltcG9ydCB7IGdldERvY3VtZW50IH0gZnJvbSAnc3NyLXdpbmRvdyc7XG5pbXBvcnQgJCBmcm9tICcuLi8uLi91dGlscy9kb20nO1xuaW1wb3J0IHsgZXh0ZW5kLCBub3csIGRlbGV0ZVByb3BzIH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbHMnO1xuaW1wb3J0IHsgZ2V0U3VwcG9ydCB9IGZyb20gJy4uLy4uL3V0aWxzL2dldC1zdXBwb3J0JztcbmltcG9ydCB7IGdldERldmljZSB9IGZyb20gJy4uLy4uL3V0aWxzL2dldC1kZXZpY2UnO1xuaW1wb3J0IHsgZ2V0QnJvd3NlciB9IGZyb20gJy4uLy4uL3V0aWxzL2dldC1icm93c2VyJztcbmltcG9ydCBSZXNpemUgZnJvbSAnLi4vLi4vbW9kdWxlcy9yZXNpemUvcmVzaXplJztcbmltcG9ydCBPYnNlcnZlciBmcm9tICcuLi8uLi9tb2R1bGVzL29ic2VydmVyL29ic2VydmVyJztcbmltcG9ydCBtb2R1bGFyIGZyb20gJy4vbW9kdWxhcic7XG5pbXBvcnQgZXZlbnRzRW1pdHRlciBmcm9tICcuL2V2ZW50cy1lbWl0dGVyJztcbmltcG9ydCB1cGRhdGUgZnJvbSAnLi91cGRhdGUvaW5kZXgnO1xuaW1wb3J0IHRyYW5zbGF0ZSBmcm9tICcuL3RyYW5zbGF0ZS9pbmRleCc7XG5pbXBvcnQgdHJhbnNpdGlvbiBmcm9tICcuL3RyYW5zaXRpb24vaW5kZXgnO1xuaW1wb3J0IHNsaWRlIGZyb20gJy4vc2xpZGUvaW5kZXgnO1xuaW1wb3J0IGxvb3AgZnJvbSAnLi9sb29wL2luZGV4JztcbmltcG9ydCBncmFiQ3Vyc29yIGZyb20gJy4vZ3JhYi1jdXJzb3IvaW5kZXgnO1xuaW1wb3J0IG1hbmlwdWxhdGlvbiBmcm9tICcuL21hbmlwdWxhdGlvbi9pbmRleCc7XG5pbXBvcnQgZXZlbnRzIGZyb20gJy4vZXZlbnRzL2luZGV4JztcbmltcG9ydCBicmVha3BvaW50cyBmcm9tICcuL2JyZWFrcG9pbnRzL2luZGV4JztcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vY2xhc3Nlcy9pbmRleCc7XG5pbXBvcnQgaW1hZ2VzIGZyb20gJy4vaW1hZ2VzL2luZGV4JztcbmltcG9ydCBjaGVja092ZXJmbG93IGZyb20gJy4vY2hlY2stb3ZlcmZsb3cvaW5kZXgnO1xuaW1wb3J0IGRlZmF1bHRzIGZyb20gJy4vZGVmYXVsdHMnO1xudmFyIHByb3RvdHlwZXMgPSB7XG4gIG1vZHVsYXI6IG1vZHVsYXIsXG4gIGV2ZW50c0VtaXR0ZXI6IGV2ZW50c0VtaXR0ZXIsXG4gIHVwZGF0ZTogdXBkYXRlLFxuICB0cmFuc2xhdGU6IHRyYW5zbGF0ZSxcbiAgdHJhbnNpdGlvbjogdHJhbnNpdGlvbixcbiAgc2xpZGU6IHNsaWRlLFxuICBsb29wOiBsb29wLFxuICBncmFiQ3Vyc29yOiBncmFiQ3Vyc29yLFxuICBtYW5pcHVsYXRpb246IG1hbmlwdWxhdGlvbixcbiAgZXZlbnRzOiBldmVudHMsXG4gIGJyZWFrcG9pbnRzOiBicmVha3BvaW50cyxcbiAgY2hlY2tPdmVyZmxvdzogY2hlY2tPdmVyZmxvdyxcbiAgY2xhc3NlczogY2xhc3NlcyxcbiAgaW1hZ2VzOiBpbWFnZXNcbn07XG52YXIgZXh0ZW5kZWREZWZhdWx0cyA9IHt9O1xuXG52YXIgU3dpcGVyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gU3dpcGVyKCkge1xuICAgIHZhciBlbDtcbiAgICB2YXIgcGFyYW1zO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIGlmIChhcmdzLmxlbmd0aCA9PT0gMSAmJiBhcmdzWzBdLmNvbnN0cnVjdG9yICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmdzWzBdKS5zbGljZSg4LCAtMSkgPT09ICdPYmplY3QnKSB7XG4gICAgICBwYXJhbXMgPSBhcmdzWzBdO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbCA9IGFyZ3NbMF07XG4gICAgICBwYXJhbXMgPSBhcmdzWzFdO1xuICAgIH1cblxuICAgIGlmICghcGFyYW1zKSBwYXJhbXMgPSB7fTtcbiAgICBwYXJhbXMgPSBleHRlbmQoe30sIHBhcmFtcyk7XG4gICAgaWYgKGVsICYmICFwYXJhbXMuZWwpIHBhcmFtcy5lbCA9IGVsO1xuXG4gICAgaWYgKHBhcmFtcy5lbCAmJiAkKHBhcmFtcy5lbCkubGVuZ3RoID4gMSkge1xuICAgICAgdmFyIHN3aXBlcnMgPSBbXTtcbiAgICAgICQocGFyYW1zLmVsKS5lYWNoKGZ1bmN0aW9uIChjb250YWluZXJFbCkge1xuICAgICAgICB2YXIgbmV3UGFyYW1zID0gZXh0ZW5kKHt9LCBwYXJhbXMsIHtcbiAgICAgICAgICBlbDogY29udGFpbmVyRWxcbiAgICAgICAgfSk7XG4gICAgICAgIHN3aXBlcnMucHVzaChuZXcgU3dpcGVyKG5ld1BhcmFtcykpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gc3dpcGVycztcbiAgICB9IC8vIFN3aXBlciBJbnN0YW5jZVxuXG5cbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICBzd2lwZXIuX19zd2lwZXJfXyA9IHRydWU7XG4gICAgc3dpcGVyLnN1cHBvcnQgPSBnZXRTdXBwb3J0KCk7XG4gICAgc3dpcGVyLmRldmljZSA9IGdldERldmljZSh7XG4gICAgICB1c2VyQWdlbnQ6IHBhcmFtcy51c2VyQWdlbnRcbiAgICB9KTtcbiAgICBzd2lwZXIuYnJvd3NlciA9IGdldEJyb3dzZXIoKTtcbiAgICBzd2lwZXIuZXZlbnRzTGlzdGVuZXJzID0ge307XG4gICAgc3dpcGVyLmV2ZW50c0FueUxpc3RlbmVycyA9IFtdO1xuXG4gICAgaWYgKHR5cGVvZiBzd2lwZXIubW9kdWxlcyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHN3aXBlci5tb2R1bGVzID0ge307XG4gICAgfVxuXG4gICAgT2JqZWN0LmtleXMoc3dpcGVyLm1vZHVsZXMpLmZvckVhY2goZnVuY3Rpb24gKG1vZHVsZU5hbWUpIHtcbiAgICAgIHZhciBtb2R1bGUgPSBzd2lwZXIubW9kdWxlc1ttb2R1bGVOYW1lXTtcblxuICAgICAgaWYgKG1vZHVsZS5wYXJhbXMpIHtcbiAgICAgICAgdmFyIG1vZHVsZVBhcmFtTmFtZSA9IE9iamVjdC5rZXlzKG1vZHVsZS5wYXJhbXMpWzBdO1xuICAgICAgICB2YXIgbW9kdWxlUGFyYW1zID0gbW9kdWxlLnBhcmFtc1ttb2R1bGVQYXJhbU5hbWVdO1xuICAgICAgICBpZiAodHlwZW9mIG1vZHVsZVBhcmFtcyAhPT0gJ29iamVjdCcgfHwgbW9kdWxlUGFyYW1zID09PSBudWxsKSByZXR1cm47XG5cbiAgICAgICAgaWYgKFsnbmF2aWdhdGlvbicsICdwYWdpbmF0aW9uJywgJ3Njcm9sbGJhciddLmluZGV4T2YobW9kdWxlUGFyYW1OYW1lKSA+PSAwICYmIHBhcmFtc1ttb2R1bGVQYXJhbU5hbWVdID09PSB0cnVlKSB7XG4gICAgICAgICAgcGFyYW1zW21vZHVsZVBhcmFtTmFtZV0gPSB7XG4gICAgICAgICAgICBhdXRvOiB0cnVlXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghKG1vZHVsZVBhcmFtTmFtZSBpbiBwYXJhbXMgJiYgJ2VuYWJsZWQnIGluIG1vZHVsZVBhcmFtcykpIHJldHVybjtcblxuICAgICAgICBpZiAocGFyYW1zW21vZHVsZVBhcmFtTmFtZV0gPT09IHRydWUpIHtcbiAgICAgICAgICBwYXJhbXNbbW9kdWxlUGFyYW1OYW1lXSA9IHtcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWVcbiAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBwYXJhbXNbbW9kdWxlUGFyYW1OYW1lXSA9PT0gJ29iamVjdCcgJiYgISgnZW5hYmxlZCcgaW4gcGFyYW1zW21vZHVsZVBhcmFtTmFtZV0pKSB7XG4gICAgICAgICAgcGFyYW1zW21vZHVsZVBhcmFtTmFtZV0uZW5hYmxlZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXBhcmFtc1ttb2R1bGVQYXJhbU5hbWVdKSBwYXJhbXNbbW9kdWxlUGFyYW1OYW1lXSA9IHtcbiAgICAgICAgICBlbmFibGVkOiBmYWxzZVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH0pOyAvLyBFeHRlbmQgZGVmYXVsdHMgd2l0aCBtb2R1bGVzIHBhcmFtc1xuXG4gICAgdmFyIHN3aXBlclBhcmFtcyA9IGV4dGVuZCh7fSwgZGVmYXVsdHMpO1xuICAgIHN3aXBlci51c2VQYXJhbXMoc3dpcGVyUGFyYW1zKTsgLy8gRXh0ZW5kIGRlZmF1bHRzIHdpdGggcGFzc2VkIHBhcmFtc1xuXG4gICAgc3dpcGVyLnBhcmFtcyA9IGV4dGVuZCh7fSwgc3dpcGVyUGFyYW1zLCBleHRlbmRlZERlZmF1bHRzLCBwYXJhbXMpO1xuICAgIHN3aXBlci5vcmlnaW5hbFBhcmFtcyA9IGV4dGVuZCh7fSwgc3dpcGVyLnBhcmFtcyk7XG4gICAgc3dpcGVyLnBhc3NlZFBhcmFtcyA9IGV4dGVuZCh7fSwgcGFyYW1zKTsgLy8gYWRkIGV2ZW50IGxpc3RlbmVyc1xuXG4gICAgaWYgKHN3aXBlci5wYXJhbXMgJiYgc3dpcGVyLnBhcmFtcy5vbikge1xuICAgICAgT2JqZWN0LmtleXMoc3dpcGVyLnBhcmFtcy5vbikuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnROYW1lKSB7XG4gICAgICAgIHN3aXBlci5vbihldmVudE5hbWUsIHN3aXBlci5wYXJhbXMub25bZXZlbnROYW1lXSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoc3dpcGVyLnBhcmFtcyAmJiBzd2lwZXIucGFyYW1zLm9uQW55KSB7XG4gICAgICBzd2lwZXIub25Bbnkoc3dpcGVyLnBhcmFtcy5vbkFueSk7XG4gICAgfSAvLyBTYXZlIERvbSBsaWJcblxuXG4gICAgc3dpcGVyLiQgPSAkOyAvLyBFeHRlbmQgU3dpcGVyXG5cbiAgICBleHRlbmQoc3dpcGVyLCB7XG4gICAgICBlbmFibGVkOiBzd2lwZXIucGFyYW1zLmVuYWJsZWQsXG4gICAgICBlbDogZWwsXG4gICAgICAvLyBDbGFzc2VzXG4gICAgICBjbGFzc05hbWVzOiBbXSxcbiAgICAgIC8vIFNsaWRlc1xuICAgICAgc2xpZGVzOiAkKCksXG4gICAgICBzbGlkZXNHcmlkOiBbXSxcbiAgICAgIHNuYXBHcmlkOiBbXSxcbiAgICAgIHNsaWRlc1NpemVzR3JpZDogW10sXG4gICAgICAvLyBpc0RpcmVjdGlvblxuICAgICAgaXNIb3Jpem9udGFsOiBmdW5jdGlvbiBpc0hvcml6b250YWwoKSB7XG4gICAgICAgIHJldHVybiBzd2lwZXIucGFyYW1zLmRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnO1xuICAgICAgfSxcbiAgICAgIGlzVmVydGljYWw6IGZ1bmN0aW9uIGlzVmVydGljYWwoKSB7XG4gICAgICAgIHJldHVybiBzd2lwZXIucGFyYW1zLmRpcmVjdGlvbiA9PT0gJ3ZlcnRpY2FsJztcbiAgICAgIH0sXG4gICAgICAvLyBJbmRleGVzXG4gICAgICBhY3RpdmVJbmRleDogMCxcbiAgICAgIHJlYWxJbmRleDogMCxcbiAgICAgIC8vXG4gICAgICBpc0JlZ2lubmluZzogdHJ1ZSxcbiAgICAgIGlzRW5kOiBmYWxzZSxcbiAgICAgIC8vIFByb3BzXG4gICAgICB0cmFuc2xhdGU6IDAsXG4gICAgICBwcmV2aW91c1RyYW5zbGF0ZTogMCxcbiAgICAgIHByb2dyZXNzOiAwLFxuICAgICAgdmVsb2NpdHk6IDAsXG4gICAgICBhbmltYXRpbmc6IGZhbHNlLFxuICAgICAgLy8gTG9ja3NcbiAgICAgIGFsbG93U2xpZGVOZXh0OiBzd2lwZXIucGFyYW1zLmFsbG93U2xpZGVOZXh0LFxuICAgICAgYWxsb3dTbGlkZVByZXY6IHN3aXBlci5wYXJhbXMuYWxsb3dTbGlkZVByZXYsXG4gICAgICAvLyBUb3VjaCBFdmVudHNcbiAgICAgIHRvdWNoRXZlbnRzOiBmdW5jdGlvbiB0b3VjaEV2ZW50cygpIHtcbiAgICAgICAgdmFyIHRvdWNoID0gWyd0b3VjaHN0YXJ0JywgJ3RvdWNobW92ZScsICd0b3VjaGVuZCcsICd0b3VjaGNhbmNlbCddO1xuICAgICAgICB2YXIgZGVza3RvcCA9IFsnbW91c2Vkb3duJywgJ21vdXNlbW92ZScsICdtb3VzZXVwJ107XG5cbiAgICAgICAgaWYgKHN3aXBlci5zdXBwb3J0LnBvaW50ZXJFdmVudHMpIHtcbiAgICAgICAgICBkZXNrdG9wID0gWydwb2ludGVyZG93bicsICdwb2ludGVybW92ZScsICdwb2ludGVydXAnXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN3aXBlci50b3VjaEV2ZW50c1RvdWNoID0ge1xuICAgICAgICAgIHN0YXJ0OiB0b3VjaFswXSxcbiAgICAgICAgICBtb3ZlOiB0b3VjaFsxXSxcbiAgICAgICAgICBlbmQ6IHRvdWNoWzJdLFxuICAgICAgICAgIGNhbmNlbDogdG91Y2hbM11cbiAgICAgICAgfTtcbiAgICAgICAgc3dpcGVyLnRvdWNoRXZlbnRzRGVza3RvcCA9IHtcbiAgICAgICAgICBzdGFydDogZGVza3RvcFswXSxcbiAgICAgICAgICBtb3ZlOiBkZXNrdG9wWzFdLFxuICAgICAgICAgIGVuZDogZGVza3RvcFsyXVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gc3dpcGVyLnN1cHBvcnQudG91Y2ggfHwgIXN3aXBlci5wYXJhbXMuc2ltdWxhdGVUb3VjaCA/IHN3aXBlci50b3VjaEV2ZW50c1RvdWNoIDogc3dpcGVyLnRvdWNoRXZlbnRzRGVza3RvcDtcbiAgICAgIH0oKSxcbiAgICAgIHRvdWNoRXZlbnRzRGF0YToge1xuICAgICAgICBpc1RvdWNoZWQ6IHVuZGVmaW5lZCxcbiAgICAgICAgaXNNb3ZlZDogdW5kZWZpbmVkLFxuICAgICAgICBhbGxvd1RvdWNoQ2FsbGJhY2tzOiB1bmRlZmluZWQsXG4gICAgICAgIHRvdWNoU3RhcnRUaW1lOiB1bmRlZmluZWQsXG4gICAgICAgIGlzU2Nyb2xsaW5nOiB1bmRlZmluZWQsXG4gICAgICAgIGN1cnJlbnRUcmFuc2xhdGU6IHVuZGVmaW5lZCxcbiAgICAgICAgc3RhcnRUcmFuc2xhdGU6IHVuZGVmaW5lZCxcbiAgICAgICAgYWxsb3dUaHJlc2hvbGRNb3ZlOiB1bmRlZmluZWQsXG4gICAgICAgIC8vIEZvcm0gZWxlbWVudHMgdG8gbWF0Y2hcbiAgICAgICAgZm9jdXNhYmxlRWxlbWVudHM6IHN3aXBlci5wYXJhbXMuZm9jdXNhYmxlRWxlbWVudHMsXG4gICAgICAgIC8vIExhc3QgY2xpY2sgdGltZVxuICAgICAgICBsYXN0Q2xpY2tUaW1lOiBub3coKSxcbiAgICAgICAgY2xpY2tUaW1lb3V0OiB1bmRlZmluZWQsXG4gICAgICAgIC8vIFZlbG9jaXRpZXNcbiAgICAgICAgdmVsb2NpdGllczogW10sXG4gICAgICAgIGFsbG93TW9tZW50dW1Cb3VuY2U6IHVuZGVmaW5lZCxcbiAgICAgICAgaXNUb3VjaEV2ZW50OiB1bmRlZmluZWQsXG4gICAgICAgIHN0YXJ0TW92aW5nOiB1bmRlZmluZWRcbiAgICAgIH0sXG4gICAgICAvLyBDbGlja3NcbiAgICAgIGFsbG93Q2xpY2s6IHRydWUsXG4gICAgICAvLyBUb3VjaGVzXG4gICAgICBhbGxvd1RvdWNoTW92ZTogc3dpcGVyLnBhcmFtcy5hbGxvd1RvdWNoTW92ZSxcbiAgICAgIHRvdWNoZXM6IHtcbiAgICAgICAgc3RhcnRYOiAwLFxuICAgICAgICBzdGFydFk6IDAsXG4gICAgICAgIGN1cnJlbnRYOiAwLFxuICAgICAgICBjdXJyZW50WTogMCxcbiAgICAgICAgZGlmZjogMFxuICAgICAgfSxcbiAgICAgIC8vIEltYWdlc1xuICAgICAgaW1hZ2VzVG9Mb2FkOiBbXSxcbiAgICAgIGltYWdlc0xvYWRlZDogMFxuICAgIH0pOyAvLyBJbnN0YWxsIE1vZHVsZXNcblxuICAgIHN3aXBlci51c2VNb2R1bGVzKCk7XG4gICAgc3dpcGVyLmVtaXQoJ19zd2lwZXInKTsgLy8gSW5pdFxuXG4gICAgaWYgKHN3aXBlci5wYXJhbXMuaW5pdCkge1xuICAgICAgc3dpcGVyLmluaXQoKTtcbiAgICB9IC8vIFJldHVybiBhcHAgaW5zdGFuY2VcblxuXG4gICAgcmV0dXJuIHN3aXBlcjtcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBTd2lwZXIucHJvdG90eXBlO1xuXG4gIF9wcm90by5lbmFibGUgPSBmdW5jdGlvbiBlbmFibGUoKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgaWYgKHN3aXBlci5lbmFibGVkKSByZXR1cm47XG4gICAgc3dpcGVyLmVuYWJsZWQgPSB0cnVlO1xuXG4gICAgaWYgKHN3aXBlci5wYXJhbXMuZ3JhYkN1cnNvcikge1xuICAgICAgc3dpcGVyLnNldEdyYWJDdXJzb3IoKTtcbiAgICB9XG5cbiAgICBzd2lwZXIuZW1pdCgnZW5hYmxlJyk7XG4gIH07XG5cbiAgX3Byb3RvLmRpc2FibGUgPSBmdW5jdGlvbiBkaXNhYmxlKCkge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIGlmICghc3dpcGVyLmVuYWJsZWQpIHJldHVybjtcbiAgICBzd2lwZXIuZW5hYmxlZCA9IGZhbHNlO1xuXG4gICAgaWYgKHN3aXBlci5wYXJhbXMuZ3JhYkN1cnNvcikge1xuICAgICAgc3dpcGVyLnVuc2V0R3JhYkN1cnNvcigpO1xuICAgIH1cblxuICAgIHN3aXBlci5lbWl0KCdkaXNhYmxlJyk7XG4gIH07XG5cbiAgX3Byb3RvLnNldFByb2dyZXNzID0gZnVuY3Rpb24gc2V0UHJvZ3Jlc3MocHJvZ3Jlc3MsIHNwZWVkKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgcHJvZ3Jlc3MgPSBNYXRoLm1pbihNYXRoLm1heChwcm9ncmVzcywgMCksIDEpO1xuICAgIHZhciBtaW4gPSBzd2lwZXIubWluVHJhbnNsYXRlKCk7XG4gICAgdmFyIG1heCA9IHN3aXBlci5tYXhUcmFuc2xhdGUoKTtcbiAgICB2YXIgY3VycmVudCA9IChtYXggLSBtaW4pICogcHJvZ3Jlc3MgKyBtaW47XG4gICAgc3dpcGVyLnRyYW5zbGF0ZVRvKGN1cnJlbnQsIHR5cGVvZiBzcGVlZCA9PT0gJ3VuZGVmaW5lZCcgPyAwIDogc3BlZWQpO1xuICAgIHN3aXBlci51cGRhdGVBY3RpdmVJbmRleCgpO1xuICAgIHN3aXBlci51cGRhdGVTbGlkZXNDbGFzc2VzKCk7XG4gIH07XG5cbiAgX3Byb3RvLmVtaXRDb250YWluZXJDbGFzc2VzID0gZnVuY3Rpb24gZW1pdENvbnRhaW5lckNsYXNzZXMoKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgaWYgKCFzd2lwZXIucGFyYW1zLl9lbWl0Q2xhc3NlcyB8fCAhc3dpcGVyLmVsKSByZXR1cm47XG4gICAgdmFyIGNsYXNzZXMgPSBzd2lwZXIuZWwuY2xhc3NOYW1lLnNwbGl0KCcgJykuZmlsdGVyKGZ1bmN0aW9uIChjbGFzc05hbWUpIHtcbiAgICAgIHJldHVybiBjbGFzc05hbWUuaW5kZXhPZignc3dpcGVyLWNvbnRhaW5lcicpID09PSAwIHx8IGNsYXNzTmFtZS5pbmRleE9mKHN3aXBlci5wYXJhbXMuY29udGFpbmVyTW9kaWZpZXJDbGFzcykgPT09IDA7XG4gICAgfSk7XG4gICAgc3dpcGVyLmVtaXQoJ19jb250YWluZXJDbGFzc2VzJywgY2xhc3Nlcy5qb2luKCcgJykpO1xuICB9O1xuXG4gIF9wcm90by5nZXRTbGlkZUNsYXNzZXMgPSBmdW5jdGlvbiBnZXRTbGlkZUNsYXNzZXMoc2xpZGVFbCkge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIHJldHVybiBzbGlkZUVsLmNsYXNzTmFtZS5zcGxpdCgnICcpLmZpbHRlcihmdW5jdGlvbiAoY2xhc3NOYW1lKSB7XG4gICAgICByZXR1cm4gY2xhc3NOYW1lLmluZGV4T2YoJ3N3aXBlci1zbGlkZScpID09PSAwIHx8IGNsYXNzTmFtZS5pbmRleE9mKHN3aXBlci5wYXJhbXMuc2xpZGVDbGFzcykgPT09IDA7XG4gICAgfSkuam9pbignICcpO1xuICB9O1xuXG4gIF9wcm90by5lbWl0U2xpZGVzQ2xhc3NlcyA9IGZ1bmN0aW9uIGVtaXRTbGlkZXNDbGFzc2VzKCkge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIGlmICghc3dpcGVyLnBhcmFtcy5fZW1pdENsYXNzZXMgfHwgIXN3aXBlci5lbCkgcmV0dXJuO1xuICAgIHZhciB1cGRhdGVzID0gW107XG4gICAgc3dpcGVyLnNsaWRlcy5lYWNoKGZ1bmN0aW9uIChzbGlkZUVsKSB7XG4gICAgICB2YXIgY2xhc3NOYW1lcyA9IHN3aXBlci5nZXRTbGlkZUNsYXNzZXMoc2xpZGVFbCk7XG4gICAgICB1cGRhdGVzLnB1c2goe1xuICAgICAgICBzbGlkZUVsOiBzbGlkZUVsLFxuICAgICAgICBjbGFzc05hbWVzOiBjbGFzc05hbWVzXG4gICAgICB9KTtcbiAgICAgIHN3aXBlci5lbWl0KCdfc2xpZGVDbGFzcycsIHNsaWRlRWwsIGNsYXNzTmFtZXMpO1xuICAgIH0pO1xuICAgIHN3aXBlci5lbWl0KCdfc2xpZGVDbGFzc2VzJywgdXBkYXRlcyk7XG4gIH07XG5cbiAgX3Byb3RvLnNsaWRlc1BlclZpZXdEeW5hbWljID0gZnVuY3Rpb24gc2xpZGVzUGVyVmlld0R5bmFtaWMoKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgdmFyIHBhcmFtcyA9IHN3aXBlci5wYXJhbXMsXG4gICAgICAgIHNsaWRlcyA9IHN3aXBlci5zbGlkZXMsXG4gICAgICAgIHNsaWRlc0dyaWQgPSBzd2lwZXIuc2xpZGVzR3JpZCxcbiAgICAgICAgc3dpcGVyU2l6ZSA9IHN3aXBlci5zaXplLFxuICAgICAgICBhY3RpdmVJbmRleCA9IHN3aXBlci5hY3RpdmVJbmRleDtcbiAgICB2YXIgc3B2ID0gMTtcblxuICAgIGlmIChwYXJhbXMuY2VudGVyZWRTbGlkZXMpIHtcbiAgICAgIHZhciBzbGlkZVNpemUgPSBzbGlkZXNbYWN0aXZlSW5kZXhdLnN3aXBlclNsaWRlU2l6ZTtcbiAgICAgIHZhciBicmVha0xvb3A7XG5cbiAgICAgIGZvciAodmFyIGkgPSBhY3RpdmVJbmRleCArIDE7IGkgPCBzbGlkZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKHNsaWRlc1tpXSAmJiAhYnJlYWtMb29wKSB7XG4gICAgICAgICAgc2xpZGVTaXplICs9IHNsaWRlc1tpXS5zd2lwZXJTbGlkZVNpemU7XG4gICAgICAgICAgc3B2ICs9IDE7XG4gICAgICAgICAgaWYgKHNsaWRlU2l6ZSA+IHN3aXBlclNpemUpIGJyZWFrTG9vcCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgX2kgPSBhY3RpdmVJbmRleCAtIDE7IF9pID49IDA7IF9pIC09IDEpIHtcbiAgICAgICAgaWYgKHNsaWRlc1tfaV0gJiYgIWJyZWFrTG9vcCkge1xuICAgICAgICAgIHNsaWRlU2l6ZSArPSBzbGlkZXNbX2ldLnN3aXBlclNsaWRlU2l6ZTtcbiAgICAgICAgICBzcHYgKz0gMTtcbiAgICAgICAgICBpZiAoc2xpZGVTaXplID4gc3dpcGVyU2l6ZSkgYnJlYWtMb29wID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKHZhciBfaTIgPSBhY3RpdmVJbmRleCArIDE7IF9pMiA8IHNsaWRlcy5sZW5ndGg7IF9pMiArPSAxKSB7XG4gICAgICAgIGlmIChzbGlkZXNHcmlkW19pMl0gLSBzbGlkZXNHcmlkW2FjdGl2ZUluZGV4XSA8IHN3aXBlclNpemUpIHtcbiAgICAgICAgICBzcHYgKz0gMTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzcHY7XG4gIH07XG5cbiAgX3Byb3RvLnVwZGF0ZSA9IGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICBpZiAoIXN3aXBlciB8fCBzd2lwZXIuZGVzdHJveWVkKSByZXR1cm47XG4gICAgdmFyIHNuYXBHcmlkID0gc3dpcGVyLnNuYXBHcmlkLFxuICAgICAgICBwYXJhbXMgPSBzd2lwZXIucGFyYW1zOyAvLyBCcmVha3BvaW50c1xuXG4gICAgaWYgKHBhcmFtcy5icmVha3BvaW50cykge1xuICAgICAgc3dpcGVyLnNldEJyZWFrcG9pbnQoKTtcbiAgICB9XG5cbiAgICBzd2lwZXIudXBkYXRlU2l6ZSgpO1xuICAgIHN3aXBlci51cGRhdGVTbGlkZXMoKTtcbiAgICBzd2lwZXIudXBkYXRlUHJvZ3Jlc3MoKTtcbiAgICBzd2lwZXIudXBkYXRlU2xpZGVzQ2xhc3NlcygpO1xuXG4gICAgZnVuY3Rpb24gc2V0VHJhbnNsYXRlKCkge1xuICAgICAgdmFyIHRyYW5zbGF0ZVZhbHVlID0gc3dpcGVyLnJ0bFRyYW5zbGF0ZSA/IHN3aXBlci50cmFuc2xhdGUgKiAtMSA6IHN3aXBlci50cmFuc2xhdGU7XG4gICAgICB2YXIgbmV3VHJhbnNsYXRlID0gTWF0aC5taW4oTWF0aC5tYXgodHJhbnNsYXRlVmFsdWUsIHN3aXBlci5tYXhUcmFuc2xhdGUoKSksIHN3aXBlci5taW5UcmFuc2xhdGUoKSk7XG4gICAgICBzd2lwZXIuc2V0VHJhbnNsYXRlKG5ld1RyYW5zbGF0ZSk7XG4gICAgICBzd2lwZXIudXBkYXRlQWN0aXZlSW5kZXgoKTtcbiAgICAgIHN3aXBlci51cGRhdGVTbGlkZXNDbGFzc2VzKCk7XG4gICAgfVxuXG4gICAgdmFyIHRyYW5zbGF0ZWQ7XG5cbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5mcmVlTW9kZSkge1xuICAgICAgc2V0VHJhbnNsYXRlKCk7XG5cbiAgICAgIGlmIChzd2lwZXIucGFyYW1zLmF1dG9IZWlnaHQpIHtcbiAgICAgICAgc3dpcGVyLnVwZGF0ZUF1dG9IZWlnaHQoKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKChzd2lwZXIucGFyYW1zLnNsaWRlc1BlclZpZXcgPT09ICdhdXRvJyB8fCBzd2lwZXIucGFyYW1zLnNsaWRlc1BlclZpZXcgPiAxKSAmJiBzd2lwZXIuaXNFbmQgJiYgIXN3aXBlci5wYXJhbXMuY2VudGVyZWRTbGlkZXMpIHtcbiAgICAgICAgdHJhbnNsYXRlZCA9IHN3aXBlci5zbGlkZVRvKHN3aXBlci5zbGlkZXMubGVuZ3RoIC0gMSwgMCwgZmFsc2UsIHRydWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJhbnNsYXRlZCA9IHN3aXBlci5zbGlkZVRvKHN3aXBlci5hY3RpdmVJbmRleCwgMCwgZmFsc2UsIHRydWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXRyYW5zbGF0ZWQpIHtcbiAgICAgICAgc2V0VHJhbnNsYXRlKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHBhcmFtcy53YXRjaE92ZXJmbG93ICYmIHNuYXBHcmlkICE9PSBzd2lwZXIuc25hcEdyaWQpIHtcbiAgICAgIHN3aXBlci5jaGVja092ZXJmbG93KCk7XG4gICAgfVxuXG4gICAgc3dpcGVyLmVtaXQoJ3VwZGF0ZScpO1xuICB9O1xuXG4gIF9wcm90by5jaGFuZ2VEaXJlY3Rpb24gPSBmdW5jdGlvbiBjaGFuZ2VEaXJlY3Rpb24obmV3RGlyZWN0aW9uLCBuZWVkVXBkYXRlKSB7XG4gICAgaWYgKG5lZWRVcGRhdGUgPT09IHZvaWQgMCkge1xuICAgICAgbmVlZFVwZGF0ZSA9IHRydWU7XG4gICAgfVxuXG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgdmFyIGN1cnJlbnREaXJlY3Rpb24gPSBzd2lwZXIucGFyYW1zLmRpcmVjdGlvbjtcblxuICAgIGlmICghbmV3RGlyZWN0aW9uKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgIG5ld0RpcmVjdGlvbiA9IGN1cnJlbnREaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJyA/ICd2ZXJ0aWNhbCcgOiAnaG9yaXpvbnRhbCc7XG4gICAgfVxuXG4gICAgaWYgKG5ld0RpcmVjdGlvbiA9PT0gY3VycmVudERpcmVjdGlvbiB8fCBuZXdEaXJlY3Rpb24gIT09ICdob3Jpem9udGFsJyAmJiBuZXdEaXJlY3Rpb24gIT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgIHJldHVybiBzd2lwZXI7XG4gICAgfVxuXG4gICAgc3dpcGVyLiRlbC5yZW1vdmVDbGFzcyhcIlwiICsgc3dpcGVyLnBhcmFtcy5jb250YWluZXJNb2RpZmllckNsYXNzICsgY3VycmVudERpcmVjdGlvbikuYWRkQ2xhc3MoXCJcIiArIHN3aXBlci5wYXJhbXMuY29udGFpbmVyTW9kaWZpZXJDbGFzcyArIG5ld0RpcmVjdGlvbik7XG4gICAgc3dpcGVyLmVtaXRDb250YWluZXJDbGFzc2VzKCk7XG4gICAgc3dpcGVyLnBhcmFtcy5kaXJlY3Rpb24gPSBuZXdEaXJlY3Rpb247XG4gICAgc3dpcGVyLnNsaWRlcy5lYWNoKGZ1bmN0aW9uIChzbGlkZUVsKSB7XG4gICAgICBpZiAobmV3RGlyZWN0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgICAgIHNsaWRlRWwuc3R5bGUud2lkdGggPSAnJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNsaWRlRWwuc3R5bGUuaGVpZ2h0ID0gJyc7XG4gICAgICB9XG4gICAgfSk7XG4gICAgc3dpcGVyLmVtaXQoJ2NoYW5nZURpcmVjdGlvbicpO1xuICAgIGlmIChuZWVkVXBkYXRlKSBzd2lwZXIudXBkYXRlKCk7XG4gICAgcmV0dXJuIHN3aXBlcjtcbiAgfTtcblxuICBfcHJvdG8ubW91bnQgPSBmdW5jdGlvbiBtb3VudChlbCkge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIGlmIChzd2lwZXIubW91bnRlZCkgcmV0dXJuIHRydWU7IC8vIEZpbmQgZWxcblxuICAgIHZhciAkZWwgPSAkKGVsIHx8IHN3aXBlci5wYXJhbXMuZWwpO1xuICAgIGVsID0gJGVsWzBdO1xuXG4gICAgaWYgKCFlbCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGVsLnN3aXBlciA9IHN3aXBlcjtcblxuICAgIHZhciBnZXRXcmFwcGVyU2VsZWN0b3IgPSBmdW5jdGlvbiBnZXRXcmFwcGVyU2VsZWN0b3IoKSB7XG4gICAgICByZXR1cm4gXCIuXCIgKyAoc3dpcGVyLnBhcmFtcy53cmFwcGVyQ2xhc3MgfHwgJycpLnRyaW0oKS5zcGxpdCgnICcpLmpvaW4oJy4nKTtcbiAgICB9O1xuXG4gICAgdmFyIGdldFdyYXBwZXIgPSBmdW5jdGlvbiBnZXRXcmFwcGVyKCkge1xuICAgICAgaWYgKGVsICYmIGVsLnNoYWRvd1Jvb3QgJiYgZWwuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKSB7XG4gICAgICAgIHZhciByZXMgPSAkKGVsLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcihnZXRXcmFwcGVyU2VsZWN0b3IoKSkpOyAvLyBDaGlsZHJlbiBuZWVkcyB0byByZXR1cm4gc2xvdCBpdGVtc1xuXG4gICAgICAgIHJlcy5jaGlsZHJlbiA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgICAgcmV0dXJuICRlbC5jaGlsZHJlbihvcHRpb25zKTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gJGVsLmNoaWxkcmVuKGdldFdyYXBwZXJTZWxlY3RvcigpKTtcbiAgICB9OyAvLyBGaW5kIFdyYXBwZXJcblxuXG4gICAgdmFyICR3cmFwcGVyRWwgPSBnZXRXcmFwcGVyKCk7XG5cbiAgICBpZiAoJHdyYXBwZXJFbC5sZW5ndGggPT09IDAgJiYgc3dpcGVyLnBhcmFtcy5jcmVhdGVFbGVtZW50cykge1xuICAgICAgdmFyIGRvY3VtZW50ID0gZ2V0RG9jdW1lbnQoKTtcbiAgICAgIHZhciB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAkd3JhcHBlckVsID0gJCh3cmFwcGVyKTtcbiAgICAgIHdyYXBwZXIuY2xhc3NOYW1lID0gc3dpcGVyLnBhcmFtcy53cmFwcGVyQ2xhc3M7XG4gICAgICAkZWwuYXBwZW5kKHdyYXBwZXIpO1xuICAgICAgJGVsLmNoaWxkcmVuKFwiLlwiICsgc3dpcGVyLnBhcmFtcy5zbGlkZUNsYXNzKS5lYWNoKGZ1bmN0aW9uIChzbGlkZUVsKSB7XG4gICAgICAgICR3cmFwcGVyRWwuYXBwZW5kKHNsaWRlRWwpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZXh0ZW5kKHN3aXBlciwge1xuICAgICAgJGVsOiAkZWwsXG4gICAgICBlbDogZWwsXG4gICAgICAkd3JhcHBlckVsOiAkd3JhcHBlckVsLFxuICAgICAgd3JhcHBlckVsOiAkd3JhcHBlckVsWzBdLFxuICAgICAgbW91bnRlZDogdHJ1ZSxcbiAgICAgIC8vIFJUTFxuICAgICAgcnRsOiBlbC5kaXIudG9Mb3dlckNhc2UoKSA9PT0gJ3J0bCcgfHwgJGVsLmNzcygnZGlyZWN0aW9uJykgPT09ICdydGwnLFxuICAgICAgcnRsVHJhbnNsYXRlOiBzd2lwZXIucGFyYW1zLmRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnICYmIChlbC5kaXIudG9Mb3dlckNhc2UoKSA9PT0gJ3J0bCcgfHwgJGVsLmNzcygnZGlyZWN0aW9uJykgPT09ICdydGwnKSxcbiAgICAgIHdyb25nUlRMOiAkd3JhcHBlckVsLmNzcygnZGlzcGxheScpID09PSAnLXdlYmtpdC1ib3gnXG4gICAgfSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgX3Byb3RvLmluaXQgPSBmdW5jdGlvbiBpbml0KGVsKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgaWYgKHN3aXBlci5pbml0aWFsaXplZCkgcmV0dXJuIHN3aXBlcjtcbiAgICB2YXIgbW91bnRlZCA9IHN3aXBlci5tb3VudChlbCk7XG4gICAgaWYgKG1vdW50ZWQgPT09IGZhbHNlKSByZXR1cm4gc3dpcGVyO1xuICAgIHN3aXBlci5lbWl0KCdiZWZvcmVJbml0Jyk7IC8vIFNldCBicmVha3BvaW50XG5cbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5icmVha3BvaW50cykge1xuICAgICAgc3dpcGVyLnNldEJyZWFrcG9pbnQoKTtcbiAgICB9IC8vIEFkZCBDbGFzc2VzXG5cblxuICAgIHN3aXBlci5hZGRDbGFzc2VzKCk7IC8vIENyZWF0ZSBsb29wXG5cbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5sb29wKSB7XG4gICAgICBzd2lwZXIubG9vcENyZWF0ZSgpO1xuICAgIH0gLy8gVXBkYXRlIHNpemVcblxuXG4gICAgc3dpcGVyLnVwZGF0ZVNpemUoKTsgLy8gVXBkYXRlIHNsaWRlc1xuXG4gICAgc3dpcGVyLnVwZGF0ZVNsaWRlcygpO1xuXG4gICAgaWYgKHN3aXBlci5wYXJhbXMud2F0Y2hPdmVyZmxvdykge1xuICAgICAgc3dpcGVyLmNoZWNrT3ZlcmZsb3coKTtcbiAgICB9IC8vIFNldCBHcmFiIEN1cnNvclxuXG5cbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5ncmFiQ3Vyc29yICYmIHN3aXBlci5lbmFibGVkKSB7XG4gICAgICBzd2lwZXIuc2V0R3JhYkN1cnNvcigpO1xuICAgIH1cblxuICAgIGlmIChzd2lwZXIucGFyYW1zLnByZWxvYWRJbWFnZXMpIHtcbiAgICAgIHN3aXBlci5wcmVsb2FkSW1hZ2VzKCk7XG4gICAgfSAvLyBTbGlkZSBUbyBJbml0aWFsIFNsaWRlXG5cblxuICAgIGlmIChzd2lwZXIucGFyYW1zLmxvb3ApIHtcbiAgICAgIHN3aXBlci5zbGlkZVRvKHN3aXBlci5wYXJhbXMuaW5pdGlhbFNsaWRlICsgc3dpcGVyLmxvb3BlZFNsaWRlcywgMCwgc3dpcGVyLnBhcmFtcy5ydW5DYWxsYmFja3NPbkluaXQsIGZhbHNlLCB0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3dpcGVyLnNsaWRlVG8oc3dpcGVyLnBhcmFtcy5pbml0aWFsU2xpZGUsIDAsIHN3aXBlci5wYXJhbXMucnVuQ2FsbGJhY2tzT25Jbml0LCBmYWxzZSwgdHJ1ZSk7XG4gICAgfSAvLyBBdHRhY2ggZXZlbnRzXG5cblxuICAgIHN3aXBlci5hdHRhY2hFdmVudHMoKTsgLy8gSW5pdCBGbGFnXG5cbiAgICBzd2lwZXIuaW5pdGlhbGl6ZWQgPSB0cnVlOyAvLyBFbWl0XG5cbiAgICBzd2lwZXIuZW1pdCgnaW5pdCcpO1xuICAgIHN3aXBlci5lbWl0KCdhZnRlckluaXQnKTtcbiAgICByZXR1cm4gc3dpcGVyO1xuICB9O1xuXG4gIF9wcm90by5kZXN0cm95ID0gZnVuY3Rpb24gZGVzdHJveShkZWxldGVJbnN0YW5jZSwgY2xlYW5TdHlsZXMpIHtcbiAgICBpZiAoZGVsZXRlSW5zdGFuY2UgPT09IHZvaWQgMCkge1xuICAgICAgZGVsZXRlSW5zdGFuY2UgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChjbGVhblN0eWxlcyA9PT0gdm9pZCAwKSB7XG4gICAgICBjbGVhblN0eWxlcyA9IHRydWU7XG4gICAgfVxuXG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgdmFyIHBhcmFtcyA9IHN3aXBlci5wYXJhbXMsXG4gICAgICAgICRlbCA9IHN3aXBlci4kZWwsXG4gICAgICAgICR3cmFwcGVyRWwgPSBzd2lwZXIuJHdyYXBwZXJFbCxcbiAgICAgICAgc2xpZGVzID0gc3dpcGVyLnNsaWRlcztcblxuICAgIGlmICh0eXBlb2Ygc3dpcGVyLnBhcmFtcyA9PT0gJ3VuZGVmaW5lZCcgfHwgc3dpcGVyLmRlc3Ryb3llZCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgc3dpcGVyLmVtaXQoJ2JlZm9yZURlc3Ryb3knKTsgLy8gSW5pdCBGbGFnXG5cbiAgICBzd2lwZXIuaW5pdGlhbGl6ZWQgPSBmYWxzZTsgLy8gRGV0YWNoIGV2ZW50c1xuXG4gICAgc3dpcGVyLmRldGFjaEV2ZW50cygpOyAvLyBEZXN0cm95IGxvb3BcblxuICAgIGlmIChwYXJhbXMubG9vcCkge1xuICAgICAgc3dpcGVyLmxvb3BEZXN0cm95KCk7XG4gICAgfSAvLyBDbGVhbnVwIHN0eWxlc1xuXG5cbiAgICBpZiAoY2xlYW5TdHlsZXMpIHtcbiAgICAgIHN3aXBlci5yZW1vdmVDbGFzc2VzKCk7XG4gICAgICAkZWwucmVtb3ZlQXR0cignc3R5bGUnKTtcbiAgICAgICR3cmFwcGVyRWwucmVtb3ZlQXR0cignc3R5bGUnKTtcblxuICAgICAgaWYgKHNsaWRlcyAmJiBzbGlkZXMubGVuZ3RoKSB7XG4gICAgICAgIHNsaWRlcy5yZW1vdmVDbGFzcyhbcGFyYW1zLnNsaWRlVmlzaWJsZUNsYXNzLCBwYXJhbXMuc2xpZGVBY3RpdmVDbGFzcywgcGFyYW1zLnNsaWRlTmV4dENsYXNzLCBwYXJhbXMuc2xpZGVQcmV2Q2xhc3NdLmpvaW4oJyAnKSkucmVtb3ZlQXR0cignc3R5bGUnKS5yZW1vdmVBdHRyKCdkYXRhLXN3aXBlci1zbGlkZS1pbmRleCcpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHN3aXBlci5lbWl0KCdkZXN0cm95Jyk7IC8vIERldGFjaCBlbWl0dGVyIGV2ZW50c1xuXG4gICAgT2JqZWN0LmtleXMoc3dpcGVyLmV2ZW50c0xpc3RlbmVycykuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnROYW1lKSB7XG4gICAgICBzd2lwZXIub2ZmKGV2ZW50TmFtZSk7XG4gICAgfSk7XG5cbiAgICBpZiAoZGVsZXRlSW5zdGFuY2UgIT09IGZhbHNlKSB7XG4gICAgICBzd2lwZXIuJGVsWzBdLnN3aXBlciA9IG51bGw7XG4gICAgICBkZWxldGVQcm9wcyhzd2lwZXIpO1xuICAgIH1cblxuICAgIHN3aXBlci5kZXN0cm95ZWQgPSB0cnVlO1xuICAgIHJldHVybiBudWxsO1xuICB9O1xuXG4gIFN3aXBlci5leHRlbmREZWZhdWx0cyA9IGZ1bmN0aW9uIGV4dGVuZERlZmF1bHRzKG5ld0RlZmF1bHRzKSB7XG4gICAgZXh0ZW5kKGV4dGVuZGVkRGVmYXVsdHMsIG5ld0RlZmF1bHRzKTtcbiAgfTtcblxuICBTd2lwZXIuaW5zdGFsbE1vZHVsZSA9IGZ1bmN0aW9uIGluc3RhbGxNb2R1bGUobW9kdWxlKSB7XG4gICAgaWYgKCFTd2lwZXIucHJvdG90eXBlLm1vZHVsZXMpIFN3aXBlci5wcm90b3R5cGUubW9kdWxlcyA9IHt9O1xuICAgIHZhciBuYW1lID0gbW9kdWxlLm5hbWUgfHwgT2JqZWN0LmtleXMoU3dpcGVyLnByb3RvdHlwZS5tb2R1bGVzKS5sZW5ndGggKyBcIl9cIiArIG5vdygpO1xuICAgIFN3aXBlci5wcm90b3R5cGUubW9kdWxlc1tuYW1lXSA9IG1vZHVsZTtcbiAgfTtcblxuICBTd2lwZXIudXNlID0gZnVuY3Rpb24gdXNlKG1vZHVsZSkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KG1vZHVsZSkpIHtcbiAgICAgIG1vZHVsZS5mb3JFYWNoKGZ1bmN0aW9uIChtKSB7XG4gICAgICAgIHJldHVybiBTd2lwZXIuaW5zdGFsbE1vZHVsZShtKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIFN3aXBlcjtcbiAgICB9XG5cbiAgICBTd2lwZXIuaW5zdGFsbE1vZHVsZShtb2R1bGUpO1xuICAgIHJldHVybiBTd2lwZXI7XG4gIH07XG5cbiAgX2NyZWF0ZUNsYXNzKFN3aXBlciwgbnVsbCwgW3tcbiAgICBrZXk6IFwiZXh0ZW5kZWREZWZhdWx0c1wiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIGV4dGVuZGVkRGVmYXVsdHM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImRlZmF1bHRzXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gZGVmYXVsdHM7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFN3aXBlcjtcbn0oKTtcblxuT2JqZWN0LmtleXMocHJvdG90eXBlcykuZm9yRWFjaChmdW5jdGlvbiAocHJvdG90eXBlR3JvdXApIHtcbiAgT2JqZWN0LmtleXMocHJvdG90eXBlc1twcm90b3R5cGVHcm91cF0pLmZvckVhY2goZnVuY3Rpb24gKHByb3RvTWV0aG9kKSB7XG4gICAgU3dpcGVyLnByb3RvdHlwZVtwcm90b01ldGhvZF0gPSBwcm90b3R5cGVzW3Byb3RvdHlwZUdyb3VwXVtwcm90b01ldGhvZF07XG4gIH0pO1xufSk7XG5Td2lwZXIudXNlKFtSZXNpemUsIE9ic2VydmVyXSk7XG5leHBvcnQgZGVmYXVsdCBTd2lwZXI7IiwiZXhwb3J0IGRlZmF1bHQge1xuICBpbml0OiB0cnVlLFxuICBkaXJlY3Rpb246ICdob3Jpem9udGFsJyxcbiAgdG91Y2hFdmVudHNUYXJnZXQ6ICdjb250YWluZXInLFxuICBpbml0aWFsU2xpZGU6IDAsXG4gIHNwZWVkOiAzMDAsXG4gIGNzc01vZGU6IGZhbHNlLFxuICB1cGRhdGVPbldpbmRvd1Jlc2l6ZTogdHJ1ZSxcbiAgcmVzaXplT2JzZXJ2ZXI6IGZhbHNlLFxuICBuZXN0ZWQ6IGZhbHNlLFxuICBjcmVhdGVFbGVtZW50czogZmFsc2UsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIGZvY3VzYWJsZUVsZW1lbnRzOiAnaW5wdXQsIHNlbGVjdCwgb3B0aW9uLCB0ZXh0YXJlYSwgYnV0dG9uLCB2aWRlbywgbGFiZWwnLFxuICAvLyBPdmVycmlkZXNcbiAgd2lkdGg6IG51bGwsXG4gIGhlaWdodDogbnVsbCxcbiAgLy9cbiAgcHJldmVudEludGVyYWN0aW9uT25UcmFuc2l0aW9uOiBmYWxzZSxcbiAgLy8gc3NyXG4gIHVzZXJBZ2VudDogbnVsbCxcbiAgdXJsOiBudWxsLFxuICAvLyBUbyBzdXBwb3J0IGlPUydzIHN3aXBlLXRvLWdvLWJhY2sgZ2VzdHVyZSAod2hlbiBiZWluZyB1c2VkIGluLWFwcCkuXG4gIGVkZ2VTd2lwZURldGVjdGlvbjogZmFsc2UsXG4gIGVkZ2VTd2lwZVRocmVzaG9sZDogMjAsXG4gIC8vIEZyZWUgbW9kZVxuICBmcmVlTW9kZTogZmFsc2UsXG4gIGZyZWVNb2RlTW9tZW50dW06IHRydWUsXG4gIGZyZWVNb2RlTW9tZW50dW1SYXRpbzogMSxcbiAgZnJlZU1vZGVNb21lbnR1bUJvdW5jZTogdHJ1ZSxcbiAgZnJlZU1vZGVNb21lbnR1bUJvdW5jZVJhdGlvOiAxLFxuICBmcmVlTW9kZU1vbWVudHVtVmVsb2NpdHlSYXRpbzogMSxcbiAgZnJlZU1vZGVTdGlja3k6IGZhbHNlLFxuICBmcmVlTW9kZU1pbmltdW1WZWxvY2l0eTogMC4wMixcbiAgLy8gQXV0b2hlaWdodFxuICBhdXRvSGVpZ2h0OiBmYWxzZSxcbiAgLy8gU2V0IHdyYXBwZXIgd2lkdGhcbiAgc2V0V3JhcHBlclNpemU6IGZhbHNlLFxuICAvLyBWaXJ0dWFsIFRyYW5zbGF0ZVxuICB2aXJ0dWFsVHJhbnNsYXRlOiBmYWxzZSxcbiAgLy8gRWZmZWN0c1xuICBlZmZlY3Q6ICdzbGlkZScsXG4gIC8vICdzbGlkZScgb3IgJ2ZhZGUnIG9yICdjdWJlJyBvciAnY292ZXJmbG93JyBvciAnZmxpcCdcbiAgLy8gQnJlYWtwb2ludHNcbiAgYnJlYWtwb2ludHM6IHVuZGVmaW5lZCxcbiAgYnJlYWtwb2ludHNCYXNlOiAnd2luZG93JyxcbiAgLy8gU2xpZGVzIGdyaWRcbiAgc3BhY2VCZXR3ZWVuOiAwLFxuICBzbGlkZXNQZXJWaWV3OiAxLFxuICBzbGlkZXNQZXJDb2x1bW46IDEsXG4gIHNsaWRlc1BlckNvbHVtbkZpbGw6ICdjb2x1bW4nLFxuICBzbGlkZXNQZXJHcm91cDogMSxcbiAgc2xpZGVzUGVyR3JvdXBTa2lwOiAwLFxuICBjZW50ZXJlZFNsaWRlczogZmFsc2UsXG4gIGNlbnRlcmVkU2xpZGVzQm91bmRzOiBmYWxzZSxcbiAgc2xpZGVzT2Zmc2V0QmVmb3JlOiAwLFxuICAvLyBpbiBweFxuICBzbGlkZXNPZmZzZXRBZnRlcjogMCxcbiAgLy8gaW4gcHhcbiAgbm9ybWFsaXplU2xpZGVJbmRleDogdHJ1ZSxcbiAgY2VudGVySW5zdWZmaWNpZW50U2xpZGVzOiBmYWxzZSxcbiAgLy8gRGlzYWJsZSBzd2lwZXIgYW5kIGhpZGUgbmF2aWdhdGlvbiB3aGVuIGNvbnRhaW5lciBub3Qgb3ZlcmZsb3dcbiAgd2F0Y2hPdmVyZmxvdzogZmFsc2UsXG4gIC8vIFJvdW5kIGxlbmd0aFxuICByb3VuZExlbmd0aHM6IGZhbHNlLFxuICAvLyBUb3VjaGVzXG4gIHRvdWNoUmF0aW86IDEsXG4gIHRvdWNoQW5nbGU6IDQ1LFxuICBzaW11bGF0ZVRvdWNoOiB0cnVlLFxuICBzaG9ydFN3aXBlczogdHJ1ZSxcbiAgbG9uZ1N3aXBlczogdHJ1ZSxcbiAgbG9uZ1N3aXBlc1JhdGlvOiAwLjUsXG4gIGxvbmdTd2lwZXNNczogMzAwLFxuICBmb2xsb3dGaW5nZXI6IHRydWUsXG4gIGFsbG93VG91Y2hNb3ZlOiB0cnVlLFxuICB0aHJlc2hvbGQ6IDAsXG4gIHRvdWNoTW92ZVN0b3BQcm9wYWdhdGlvbjogZmFsc2UsXG4gIHRvdWNoU3RhcnRQcmV2ZW50RGVmYXVsdDogdHJ1ZSxcbiAgdG91Y2hTdGFydEZvcmNlUHJldmVudERlZmF1bHQ6IGZhbHNlLFxuICB0b3VjaFJlbGVhc2VPbkVkZ2VzOiBmYWxzZSxcbiAgLy8gVW5pcXVlIE5hdmlnYXRpb24gRWxlbWVudHNcbiAgdW5pcXVlTmF2RWxlbWVudHM6IHRydWUsXG4gIC8vIFJlc2lzdGFuY2VcbiAgcmVzaXN0YW5jZTogdHJ1ZSxcbiAgcmVzaXN0YW5jZVJhdGlvOiAwLjg1LFxuICAvLyBQcm9ncmVzc1xuICB3YXRjaFNsaWRlc1Byb2dyZXNzOiBmYWxzZSxcbiAgd2F0Y2hTbGlkZXNWaXNpYmlsaXR5OiBmYWxzZSxcbiAgLy8gQ3Vyc29yXG4gIGdyYWJDdXJzb3I6IGZhbHNlLFxuICAvLyBDbGlja3NcbiAgcHJldmVudENsaWNrczogdHJ1ZSxcbiAgcHJldmVudENsaWNrc1Byb3BhZ2F0aW9uOiB0cnVlLFxuICBzbGlkZVRvQ2xpY2tlZFNsaWRlOiBmYWxzZSxcbiAgLy8gSW1hZ2VzXG4gIHByZWxvYWRJbWFnZXM6IHRydWUsXG4gIHVwZGF0ZU9uSW1hZ2VzUmVhZHk6IHRydWUsXG4gIC8vIGxvb3BcbiAgbG9vcDogZmFsc2UsXG4gIGxvb3BBZGRpdGlvbmFsU2xpZGVzOiAwLFxuICBsb29wZWRTbGlkZXM6IG51bGwsXG4gIGxvb3BGaWxsR3JvdXBXaXRoQmxhbms6IGZhbHNlLFxuICBsb29wUHJldmVudHNTbGlkZTogdHJ1ZSxcbiAgLy8gU3dpcGluZy9ubyBzd2lwaW5nXG4gIGFsbG93U2xpZGVQcmV2OiB0cnVlLFxuICBhbGxvd1NsaWRlTmV4dDogdHJ1ZSxcbiAgc3dpcGVIYW5kbGVyOiBudWxsLFxuICAvLyAnLnN3aXBlLWhhbmRsZXInLFxuICBub1N3aXBpbmc6IHRydWUsXG4gIG5vU3dpcGluZ0NsYXNzOiAnc3dpcGVyLW5vLXN3aXBpbmcnLFxuICBub1N3aXBpbmdTZWxlY3RvcjogbnVsbCxcbiAgLy8gUGFzc2l2ZSBMaXN0ZW5lcnNcbiAgcGFzc2l2ZUxpc3RlbmVyczogdHJ1ZSxcbiAgLy8gTlNcbiAgY29udGFpbmVyTW9kaWZpZXJDbGFzczogJ3N3aXBlci1jb250YWluZXItJyxcbiAgLy8gTkVXXG4gIHNsaWRlQ2xhc3M6ICdzd2lwZXItc2xpZGUnLFxuICBzbGlkZUJsYW5rQ2xhc3M6ICdzd2lwZXItc2xpZGUtaW52aXNpYmxlLWJsYW5rJyxcbiAgc2xpZGVBY3RpdmVDbGFzczogJ3N3aXBlci1zbGlkZS1hY3RpdmUnLFxuICBzbGlkZUR1cGxpY2F0ZUFjdGl2ZUNsYXNzOiAnc3dpcGVyLXNsaWRlLWR1cGxpY2F0ZS1hY3RpdmUnLFxuICBzbGlkZVZpc2libGVDbGFzczogJ3N3aXBlci1zbGlkZS12aXNpYmxlJyxcbiAgc2xpZGVEdXBsaWNhdGVDbGFzczogJ3N3aXBlci1zbGlkZS1kdXBsaWNhdGUnLFxuICBzbGlkZU5leHRDbGFzczogJ3N3aXBlci1zbGlkZS1uZXh0JyxcbiAgc2xpZGVEdXBsaWNhdGVOZXh0Q2xhc3M6ICdzd2lwZXItc2xpZGUtZHVwbGljYXRlLW5leHQnLFxuICBzbGlkZVByZXZDbGFzczogJ3N3aXBlci1zbGlkZS1wcmV2JyxcbiAgc2xpZGVEdXBsaWNhdGVQcmV2Q2xhc3M6ICdzd2lwZXItc2xpZGUtZHVwbGljYXRlLXByZXYnLFxuICB3cmFwcGVyQ2xhc3M6ICdzd2lwZXItd3JhcHBlcicsXG4gIC8vIENhbGxiYWNrc1xuICBydW5DYWxsYmFja3NPbkluaXQ6IHRydWUsXG4gIC8vIEludGVybmFsc1xuICBfZW1pdENsYXNzZXM6IGZhbHNlXG59OyIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVyc2NvcmUtZGFuZ2xlICovXG5leHBvcnQgZGVmYXVsdCB7XG4gIG9uOiBmdW5jdGlvbiBvbihldmVudHMsIGhhbmRsZXIsIHByaW9yaXR5KSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIGlmICh0eXBlb2YgaGFuZGxlciAhPT0gJ2Z1bmN0aW9uJykgcmV0dXJuIHNlbGY7XG4gICAgdmFyIG1ldGhvZCA9IHByaW9yaXR5ID8gJ3Vuc2hpZnQnIDogJ3B1c2gnO1xuICAgIGV2ZW50cy5zcGxpdCgnICcpLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoIXNlbGYuZXZlbnRzTGlzdGVuZXJzW2V2ZW50XSkgc2VsZi5ldmVudHNMaXN0ZW5lcnNbZXZlbnRdID0gW107XG4gICAgICBzZWxmLmV2ZW50c0xpc3RlbmVyc1tldmVudF1bbWV0aG9kXShoYW5kbGVyKTtcbiAgICB9KTtcbiAgICByZXR1cm4gc2VsZjtcbiAgfSxcbiAgb25jZTogZnVuY3Rpb24gb25jZShldmVudHMsIGhhbmRsZXIsIHByaW9yaXR5KSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIGlmICh0eXBlb2YgaGFuZGxlciAhPT0gJ2Z1bmN0aW9uJykgcmV0dXJuIHNlbGY7XG5cbiAgICBmdW5jdGlvbiBvbmNlSGFuZGxlcigpIHtcbiAgICAgIHNlbGYub2ZmKGV2ZW50cywgb25jZUhhbmRsZXIpO1xuXG4gICAgICBpZiAob25jZUhhbmRsZXIuX19lbWl0dGVyUHJveHkpIHtcbiAgICAgICAgZGVsZXRlIG9uY2VIYW5kbGVyLl9fZW1pdHRlclByb3h5O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgIH1cblxuICAgICAgaGFuZGxlci5hcHBseShzZWxmLCBhcmdzKTtcbiAgICB9XG5cbiAgICBvbmNlSGFuZGxlci5fX2VtaXR0ZXJQcm94eSA9IGhhbmRsZXI7XG4gICAgcmV0dXJuIHNlbGYub24oZXZlbnRzLCBvbmNlSGFuZGxlciwgcHJpb3JpdHkpO1xuICB9LFxuICBvbkFueTogZnVuY3Rpb24gb25BbnkoaGFuZGxlciwgcHJpb3JpdHkpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgaWYgKHR5cGVvZiBoYW5kbGVyICE9PSAnZnVuY3Rpb24nKSByZXR1cm4gc2VsZjtcbiAgICB2YXIgbWV0aG9kID0gcHJpb3JpdHkgPyAndW5zaGlmdCcgOiAncHVzaCc7XG5cbiAgICBpZiAoc2VsZi5ldmVudHNBbnlMaXN0ZW5lcnMuaW5kZXhPZihoYW5kbGVyKSA8IDApIHtcbiAgICAgIHNlbGYuZXZlbnRzQW55TGlzdGVuZXJzW21ldGhvZF0oaGFuZGxlcik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNlbGY7XG4gIH0sXG4gIG9mZkFueTogZnVuY3Rpb24gb2ZmQW55KGhhbmRsZXIpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgaWYgKCFzZWxmLmV2ZW50c0FueUxpc3RlbmVycykgcmV0dXJuIHNlbGY7XG4gICAgdmFyIGluZGV4ID0gc2VsZi5ldmVudHNBbnlMaXN0ZW5lcnMuaW5kZXhPZihoYW5kbGVyKTtcblxuICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICBzZWxmLmV2ZW50c0FueUxpc3RlbmVycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cblxuICAgIHJldHVybiBzZWxmO1xuICB9LFxuICBvZmY6IGZ1bmN0aW9uIG9mZihldmVudHMsIGhhbmRsZXIpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgaWYgKCFzZWxmLmV2ZW50c0xpc3RlbmVycykgcmV0dXJuIHNlbGY7XG4gICAgZXZlbnRzLnNwbGl0KCcgJykuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmICh0eXBlb2YgaGFuZGxlciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgc2VsZi5ldmVudHNMaXN0ZW5lcnNbZXZlbnRdID0gW107XG4gICAgICB9IGVsc2UgaWYgKHNlbGYuZXZlbnRzTGlzdGVuZXJzW2V2ZW50XSkge1xuICAgICAgICBzZWxmLmV2ZW50c0xpc3RlbmVyc1tldmVudF0uZm9yRWFjaChmdW5jdGlvbiAoZXZlbnRIYW5kbGVyLCBpbmRleCkge1xuICAgICAgICAgIGlmIChldmVudEhhbmRsZXIgPT09IGhhbmRsZXIgfHwgZXZlbnRIYW5kbGVyLl9fZW1pdHRlclByb3h5ICYmIGV2ZW50SGFuZGxlci5fX2VtaXR0ZXJQcm94eSA9PT0gaGFuZGxlcikge1xuICAgICAgICAgICAgc2VsZi5ldmVudHNMaXN0ZW5lcnNbZXZlbnRdLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gc2VsZjtcbiAgfSxcbiAgZW1pdDogZnVuY3Rpb24gZW1pdCgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgaWYgKCFzZWxmLmV2ZW50c0xpc3RlbmVycykgcmV0dXJuIHNlbGY7XG4gICAgdmFyIGV2ZW50cztcbiAgICB2YXIgZGF0YTtcbiAgICB2YXIgY29udGV4dDtcblxuICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgYXJnc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgYXJnc1swXSA9PT0gJ3N0cmluZycgfHwgQXJyYXkuaXNBcnJheShhcmdzWzBdKSkge1xuICAgICAgZXZlbnRzID0gYXJnc1swXTtcbiAgICAgIGRhdGEgPSBhcmdzLnNsaWNlKDEsIGFyZ3MubGVuZ3RoKTtcbiAgICAgIGNvbnRleHQgPSBzZWxmO1xuICAgIH0gZWxzZSB7XG4gICAgICBldmVudHMgPSBhcmdzWzBdLmV2ZW50cztcbiAgICAgIGRhdGEgPSBhcmdzWzBdLmRhdGE7XG4gICAgICBjb250ZXh0ID0gYXJnc1swXS5jb250ZXh0IHx8IHNlbGY7XG4gICAgfVxuXG4gICAgZGF0YS51bnNoaWZ0KGNvbnRleHQpO1xuICAgIHZhciBldmVudHNBcnJheSA9IEFycmF5LmlzQXJyYXkoZXZlbnRzKSA/IGV2ZW50cyA6IGV2ZW50cy5zcGxpdCgnICcpO1xuICAgIGV2ZW50c0FycmF5LmZvckVhY2goZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoc2VsZi5ldmVudHNBbnlMaXN0ZW5lcnMgJiYgc2VsZi5ldmVudHNBbnlMaXN0ZW5lcnMubGVuZ3RoKSB7XG4gICAgICAgIHNlbGYuZXZlbnRzQW55TGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50SGFuZGxlcikge1xuICAgICAgICAgIGV2ZW50SGFuZGxlci5hcHBseShjb250ZXh0LCBbZXZlbnRdLmNvbmNhdChkYXRhKSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoc2VsZi5ldmVudHNMaXN0ZW5lcnMgJiYgc2VsZi5ldmVudHNMaXN0ZW5lcnNbZXZlbnRdKSB7XG4gICAgICAgIHNlbGYuZXZlbnRzTGlzdGVuZXJzW2V2ZW50XS5mb3JFYWNoKGZ1bmN0aW9uIChldmVudEhhbmRsZXIpIHtcbiAgICAgICAgICBldmVudEhhbmRsZXIuYXBwbHkoY29udGV4dCwgZGF0YSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBzZWxmO1xuICB9XG59OyIsImltcG9ydCB7IGdldERvY3VtZW50IH0gZnJvbSAnc3NyLXdpbmRvdyc7XG5pbXBvcnQgb25Ub3VjaFN0YXJ0IGZyb20gJy4vb25Ub3VjaFN0YXJ0JztcbmltcG9ydCBvblRvdWNoTW92ZSBmcm9tICcuL29uVG91Y2hNb3ZlJztcbmltcG9ydCBvblRvdWNoRW5kIGZyb20gJy4vb25Ub3VjaEVuZCc7XG5pbXBvcnQgb25SZXNpemUgZnJvbSAnLi9vblJlc2l6ZSc7XG5pbXBvcnQgb25DbGljayBmcm9tICcuL29uQ2xpY2snO1xuaW1wb3J0IG9uU2Nyb2xsIGZyb20gJy4vb25TY3JvbGwnO1xudmFyIGR1bW15RXZlbnRBdHRhY2hlZCA9IGZhbHNlO1xuXG5mdW5jdGlvbiBkdW1teUV2ZW50TGlzdGVuZXIoKSB7fVxuXG5mdW5jdGlvbiBhdHRhY2hFdmVudHMoKSB7XG4gIHZhciBzd2lwZXIgPSB0aGlzO1xuICB2YXIgZG9jdW1lbnQgPSBnZXREb2N1bWVudCgpO1xuICB2YXIgcGFyYW1zID0gc3dpcGVyLnBhcmFtcyxcbiAgICAgIHRvdWNoRXZlbnRzID0gc3dpcGVyLnRvdWNoRXZlbnRzLFxuICAgICAgZWwgPSBzd2lwZXIuZWwsXG4gICAgICB3cmFwcGVyRWwgPSBzd2lwZXIud3JhcHBlckVsLFxuICAgICAgZGV2aWNlID0gc3dpcGVyLmRldmljZSxcbiAgICAgIHN1cHBvcnQgPSBzd2lwZXIuc3VwcG9ydDtcbiAgc3dpcGVyLm9uVG91Y2hTdGFydCA9IG9uVG91Y2hTdGFydC5iaW5kKHN3aXBlcik7XG4gIHN3aXBlci5vblRvdWNoTW92ZSA9IG9uVG91Y2hNb3ZlLmJpbmQoc3dpcGVyKTtcbiAgc3dpcGVyLm9uVG91Y2hFbmQgPSBvblRvdWNoRW5kLmJpbmQoc3dpcGVyKTtcblxuICBpZiAocGFyYW1zLmNzc01vZGUpIHtcbiAgICBzd2lwZXIub25TY3JvbGwgPSBvblNjcm9sbC5iaW5kKHN3aXBlcik7XG4gIH1cblxuICBzd2lwZXIub25DbGljayA9IG9uQ2xpY2suYmluZChzd2lwZXIpO1xuICB2YXIgY2FwdHVyZSA9ICEhcGFyYW1zLm5lc3RlZDsgLy8gVG91Y2ggRXZlbnRzXG5cbiAgaWYgKCFzdXBwb3J0LnRvdWNoICYmIHN1cHBvcnQucG9pbnRlckV2ZW50cykge1xuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuc3RhcnQsIHN3aXBlci5vblRvdWNoU3RhcnQsIGZhbHNlKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLm1vdmUsIHN3aXBlci5vblRvdWNoTW92ZSwgY2FwdHVyZSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5lbmQsIHN3aXBlci5vblRvdWNoRW5kLCBmYWxzZSk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKHN1cHBvcnQudG91Y2gpIHtcbiAgICAgIHZhciBwYXNzaXZlTGlzdGVuZXIgPSB0b3VjaEV2ZW50cy5zdGFydCA9PT0gJ3RvdWNoc3RhcnQnICYmIHN1cHBvcnQucGFzc2l2ZUxpc3RlbmVyICYmIHBhcmFtcy5wYXNzaXZlTGlzdGVuZXJzID8ge1xuICAgICAgICBwYXNzaXZlOiB0cnVlLFxuICAgICAgICBjYXB0dXJlOiBmYWxzZVxuICAgICAgfSA6IGZhbHNlO1xuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5zdGFydCwgc3dpcGVyLm9uVG91Y2hTdGFydCwgcGFzc2l2ZUxpc3RlbmVyKTtcbiAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMubW92ZSwgc3dpcGVyLm9uVG91Y2hNb3ZlLCBzdXBwb3J0LnBhc3NpdmVMaXN0ZW5lciA/IHtcbiAgICAgICAgcGFzc2l2ZTogZmFsc2UsXG4gICAgICAgIGNhcHR1cmU6IGNhcHR1cmVcbiAgICAgIH0gOiBjYXB0dXJlKTtcbiAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuZW5kLCBzd2lwZXIub25Ub3VjaEVuZCwgcGFzc2l2ZUxpc3RlbmVyKTtcblxuICAgICAgaWYgKHRvdWNoRXZlbnRzLmNhbmNlbCkge1xuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLmNhbmNlbCwgc3dpcGVyLm9uVG91Y2hFbmQsIHBhc3NpdmVMaXN0ZW5lcik7XG4gICAgICB9XG5cbiAgICAgIGlmICghZHVtbXlFdmVudEF0dGFjaGVkKSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBkdW1teUV2ZW50TGlzdGVuZXIpO1xuICAgICAgICBkdW1teUV2ZW50QXR0YWNoZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwYXJhbXMuc2ltdWxhdGVUb3VjaCAmJiAhZGV2aWNlLmlvcyAmJiAhZGV2aWNlLmFuZHJvaWQgfHwgcGFyYW1zLnNpbXVsYXRlVG91Y2ggJiYgIXN1cHBvcnQudG91Y2ggJiYgZGV2aWNlLmlvcykge1xuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgc3dpcGVyLm9uVG91Y2hTdGFydCwgZmFsc2UpO1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgc3dpcGVyLm9uVG91Y2hNb3ZlLCBjYXB0dXJlKTtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBzd2lwZXIub25Ub3VjaEVuZCwgZmFsc2UpO1xuICAgIH1cbiAgfSAvLyBQcmV2ZW50IExpbmtzIENsaWNrc1xuXG5cbiAgaWYgKHBhcmFtcy5wcmV2ZW50Q2xpY2tzIHx8IHBhcmFtcy5wcmV2ZW50Q2xpY2tzUHJvcGFnYXRpb24pIHtcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN3aXBlci5vbkNsaWNrLCB0cnVlKTtcbiAgfVxuXG4gIGlmIChwYXJhbXMuY3NzTW9kZSkge1xuICAgIHdyYXBwZXJFbC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBzd2lwZXIub25TY3JvbGwpO1xuICB9IC8vIFJlc2l6ZSBoYW5kbGVyXG5cblxuICBpZiAocGFyYW1zLnVwZGF0ZU9uV2luZG93UmVzaXplKSB7XG4gICAgc3dpcGVyLm9uKGRldmljZS5pb3MgfHwgZGV2aWNlLmFuZHJvaWQgPyAncmVzaXplIG9yaWVudGF0aW9uY2hhbmdlIG9ic2VydmVyVXBkYXRlJyA6ICdyZXNpemUgb2JzZXJ2ZXJVcGRhdGUnLCBvblJlc2l6ZSwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3dpcGVyLm9uKCdvYnNlcnZlclVwZGF0ZScsIG9uUmVzaXplLCB0cnVlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkZXRhY2hFdmVudHMoKSB7XG4gIHZhciBzd2lwZXIgPSB0aGlzO1xuICB2YXIgZG9jdW1lbnQgPSBnZXREb2N1bWVudCgpO1xuICB2YXIgcGFyYW1zID0gc3dpcGVyLnBhcmFtcyxcbiAgICAgIHRvdWNoRXZlbnRzID0gc3dpcGVyLnRvdWNoRXZlbnRzLFxuICAgICAgZWwgPSBzd2lwZXIuZWwsXG4gICAgICB3cmFwcGVyRWwgPSBzd2lwZXIud3JhcHBlckVsLFxuICAgICAgZGV2aWNlID0gc3dpcGVyLmRldmljZSxcbiAgICAgIHN1cHBvcnQgPSBzd2lwZXIuc3VwcG9ydDtcbiAgdmFyIGNhcHR1cmUgPSAhIXBhcmFtcy5uZXN0ZWQ7IC8vIFRvdWNoIEV2ZW50c1xuXG4gIGlmICghc3VwcG9ydC50b3VjaCAmJiBzdXBwb3J0LnBvaW50ZXJFdmVudHMpIHtcbiAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLnN0YXJ0LCBzd2lwZXIub25Ub3VjaFN0YXJ0LCBmYWxzZSk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5tb3ZlLCBzd2lwZXIub25Ub3VjaE1vdmUsIGNhcHR1cmUpO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuZW5kLCBzd2lwZXIub25Ub3VjaEVuZCwgZmFsc2UpO1xuICB9IGVsc2Uge1xuICAgIGlmIChzdXBwb3J0LnRvdWNoKSB7XG4gICAgICB2YXIgcGFzc2l2ZUxpc3RlbmVyID0gdG91Y2hFdmVudHMuc3RhcnQgPT09ICdvblRvdWNoU3RhcnQnICYmIHN1cHBvcnQucGFzc2l2ZUxpc3RlbmVyICYmIHBhcmFtcy5wYXNzaXZlTGlzdGVuZXJzID8ge1xuICAgICAgICBwYXNzaXZlOiB0cnVlLFxuICAgICAgICBjYXB0dXJlOiBmYWxzZVxuICAgICAgfSA6IGZhbHNlO1xuICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5zdGFydCwgc3dpcGVyLm9uVG91Y2hTdGFydCwgcGFzc2l2ZUxpc3RlbmVyKTtcbiAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMubW92ZSwgc3dpcGVyLm9uVG91Y2hNb3ZlLCBjYXB0dXJlKTtcbiAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuZW5kLCBzd2lwZXIub25Ub3VjaEVuZCwgcGFzc2l2ZUxpc3RlbmVyKTtcblxuICAgICAgaWYgKHRvdWNoRXZlbnRzLmNhbmNlbCkge1xuICAgICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLmNhbmNlbCwgc3dpcGVyLm9uVG91Y2hFbmQsIHBhc3NpdmVMaXN0ZW5lcik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHBhcmFtcy5zaW11bGF0ZVRvdWNoICYmICFkZXZpY2UuaW9zICYmICFkZXZpY2UuYW5kcm9pZCB8fCBwYXJhbXMuc2ltdWxhdGVUb3VjaCAmJiAhc3VwcG9ydC50b3VjaCAmJiBkZXZpY2UuaW9zKSB7XG4gICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBzd2lwZXIub25Ub3VjaFN0YXJ0LCBmYWxzZSk7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBzd2lwZXIub25Ub3VjaE1vdmUsIGNhcHR1cmUpO1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHN3aXBlci5vblRvdWNoRW5kLCBmYWxzZSk7XG4gICAgfVxuICB9IC8vIFByZXZlbnQgTGlua3MgQ2xpY2tzXG5cblxuICBpZiAocGFyYW1zLnByZXZlbnRDbGlja3MgfHwgcGFyYW1zLnByZXZlbnRDbGlja3NQcm9wYWdhdGlvbikge1xuICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3dpcGVyLm9uQ2xpY2ssIHRydWUpO1xuICB9XG5cbiAgaWYgKHBhcmFtcy5jc3NNb2RlKSB7XG4gICAgd3JhcHBlckVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHN3aXBlci5vblNjcm9sbCk7XG4gIH0gLy8gUmVzaXplIGhhbmRsZXJcblxuXG4gIHN3aXBlci5vZmYoZGV2aWNlLmlvcyB8fCBkZXZpY2UuYW5kcm9pZCA/ICdyZXNpemUgb3JpZW50YXRpb25jaGFuZ2Ugb2JzZXJ2ZXJVcGRhdGUnIDogJ3Jlc2l6ZSBvYnNlcnZlclVwZGF0ZScsIG9uUmVzaXplKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBhdHRhY2hFdmVudHM6IGF0dGFjaEV2ZW50cyxcbiAgZGV0YWNoRXZlbnRzOiBkZXRhY2hFdmVudHNcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gb25DbGljayhlKSB7XG4gIHZhciBzd2lwZXIgPSB0aGlzO1xuICBpZiAoIXN3aXBlci5lbmFibGVkKSByZXR1cm47XG5cbiAgaWYgKCFzd2lwZXIuYWxsb3dDbGljaykge1xuICAgIGlmIChzd2lwZXIucGFyYW1zLnByZXZlbnRDbGlja3MpIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGlmIChzd2lwZXIucGFyYW1zLnByZXZlbnRDbGlja3NQcm9wYWdhdGlvbiAmJiBzd2lwZXIuYW5pbWF0aW5nKSB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICB9XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBvblJlc2l6ZSgpIHtcbiAgdmFyIHN3aXBlciA9IHRoaXM7XG4gIHZhciBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLFxuICAgICAgZWwgPSBzd2lwZXIuZWw7XG4gIGlmIChlbCAmJiBlbC5vZmZzZXRXaWR0aCA9PT0gMCkgcmV0dXJuOyAvLyBCcmVha3BvaW50c1xuXG4gIGlmIChwYXJhbXMuYnJlYWtwb2ludHMpIHtcbiAgICBzd2lwZXIuc2V0QnJlYWtwb2ludCgpO1xuICB9IC8vIFNhdmUgbG9ja3NcblxuXG4gIHZhciBhbGxvd1NsaWRlTmV4dCA9IHN3aXBlci5hbGxvd1NsaWRlTmV4dCxcbiAgICAgIGFsbG93U2xpZGVQcmV2ID0gc3dpcGVyLmFsbG93U2xpZGVQcmV2LFxuICAgICAgc25hcEdyaWQgPSBzd2lwZXIuc25hcEdyaWQ7IC8vIERpc2FibGUgbG9ja3Mgb24gcmVzaXplXG5cbiAgc3dpcGVyLmFsbG93U2xpZGVOZXh0ID0gdHJ1ZTtcbiAgc3dpcGVyLmFsbG93U2xpZGVQcmV2ID0gdHJ1ZTtcbiAgc3dpcGVyLnVwZGF0ZVNpemUoKTtcbiAgc3dpcGVyLnVwZGF0ZVNsaWRlcygpO1xuICBzd2lwZXIudXBkYXRlU2xpZGVzQ2xhc3NlcygpO1xuXG4gIGlmICgocGFyYW1zLnNsaWRlc1BlclZpZXcgPT09ICdhdXRvJyB8fCBwYXJhbXMuc2xpZGVzUGVyVmlldyA+IDEpICYmIHN3aXBlci5pc0VuZCAmJiAhc3dpcGVyLmlzQmVnaW5uaW5nICYmICFzd2lwZXIucGFyYW1zLmNlbnRlcmVkU2xpZGVzKSB7XG4gICAgc3dpcGVyLnNsaWRlVG8oc3dpcGVyLnNsaWRlcy5sZW5ndGggLSAxLCAwLCBmYWxzZSwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3dpcGVyLnNsaWRlVG8oc3dpcGVyLmFjdGl2ZUluZGV4LCAwLCBmYWxzZSwgdHJ1ZSk7XG4gIH1cblxuICBpZiAoc3dpcGVyLmF1dG9wbGF5ICYmIHN3aXBlci5hdXRvcGxheS5ydW5uaW5nICYmIHN3aXBlci5hdXRvcGxheS5wYXVzZWQpIHtcbiAgICBzd2lwZXIuYXV0b3BsYXkucnVuKCk7XG4gIH0gLy8gUmV0dXJuIGxvY2tzIGFmdGVyIHJlc2l6ZVxuXG5cbiAgc3dpcGVyLmFsbG93U2xpZGVQcmV2ID0gYWxsb3dTbGlkZVByZXY7XG4gIHN3aXBlci5hbGxvd1NsaWRlTmV4dCA9IGFsbG93U2xpZGVOZXh0O1xuXG4gIGlmIChzd2lwZXIucGFyYW1zLndhdGNoT3ZlcmZsb3cgJiYgc25hcEdyaWQgIT09IHN3aXBlci5zbmFwR3JpZCkge1xuICAgIHN3aXBlci5jaGVja092ZXJmbG93KCk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBvblNjcm9sbCgpIHtcbiAgdmFyIHN3aXBlciA9IHRoaXM7XG4gIHZhciB3cmFwcGVyRWwgPSBzd2lwZXIud3JhcHBlckVsLFxuICAgICAgcnRsVHJhbnNsYXRlID0gc3dpcGVyLnJ0bFRyYW5zbGF0ZSxcbiAgICAgIGVuYWJsZWQgPSBzd2lwZXIuZW5hYmxlZDtcbiAgaWYgKCFlbmFibGVkKSByZXR1cm47XG4gIHN3aXBlci5wcmV2aW91c1RyYW5zbGF0ZSA9IHN3aXBlci50cmFuc2xhdGU7XG5cbiAgaWYgKHN3aXBlci5pc0hvcml6b250YWwoKSkge1xuICAgIGlmIChydGxUcmFuc2xhdGUpIHtcbiAgICAgIHN3aXBlci50cmFuc2xhdGUgPSB3cmFwcGVyRWwuc2Nyb2xsV2lkdGggLSB3cmFwcGVyRWwub2Zmc2V0V2lkdGggLSB3cmFwcGVyRWwuc2Nyb2xsTGVmdDtcbiAgICB9IGVsc2Uge1xuICAgICAgc3dpcGVyLnRyYW5zbGF0ZSA9IC13cmFwcGVyRWwuc2Nyb2xsTGVmdDtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgc3dpcGVyLnRyYW5zbGF0ZSA9IC13cmFwcGVyRWwuc2Nyb2xsVG9wO1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuXG5cbiAgaWYgKHN3aXBlci50cmFuc2xhdGUgPT09IC0wKSBzd2lwZXIudHJhbnNsYXRlID0gMDtcbiAgc3dpcGVyLnVwZGF0ZUFjdGl2ZUluZGV4KCk7XG4gIHN3aXBlci51cGRhdGVTbGlkZXNDbGFzc2VzKCk7XG4gIHZhciBuZXdQcm9ncmVzcztcbiAgdmFyIHRyYW5zbGF0ZXNEaWZmID0gc3dpcGVyLm1heFRyYW5zbGF0ZSgpIC0gc3dpcGVyLm1pblRyYW5zbGF0ZSgpO1xuXG4gIGlmICh0cmFuc2xhdGVzRGlmZiA9PT0gMCkge1xuICAgIG5ld1Byb2dyZXNzID0gMDtcbiAgfSBlbHNlIHtcbiAgICBuZXdQcm9ncmVzcyA9IChzd2lwZXIudHJhbnNsYXRlIC0gc3dpcGVyLm1pblRyYW5zbGF0ZSgpKSAvIHRyYW5zbGF0ZXNEaWZmO1xuICB9XG5cbiAgaWYgKG5ld1Byb2dyZXNzICE9PSBzd2lwZXIucHJvZ3Jlc3MpIHtcbiAgICBzd2lwZXIudXBkYXRlUHJvZ3Jlc3MocnRsVHJhbnNsYXRlID8gLXN3aXBlci50cmFuc2xhdGUgOiBzd2lwZXIudHJhbnNsYXRlKTtcbiAgfVxuXG4gIHN3aXBlci5lbWl0KCdzZXRUcmFuc2xhdGUnLCBzd2lwZXIudHJhbnNsYXRlLCBmYWxzZSk7XG59IiwiaW1wb3J0IHsgbm93LCBuZXh0VGljayB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL3V0aWxzJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG9uVG91Y2hFbmQoZXZlbnQpIHtcbiAgdmFyIHN3aXBlciA9IHRoaXM7XG4gIHZhciBkYXRhID0gc3dpcGVyLnRvdWNoRXZlbnRzRGF0YTtcbiAgdmFyIHBhcmFtcyA9IHN3aXBlci5wYXJhbXMsXG4gICAgICB0b3VjaGVzID0gc3dpcGVyLnRvdWNoZXMsXG4gICAgICBydGwgPSBzd2lwZXIucnRsVHJhbnNsYXRlLFxuICAgICAgJHdyYXBwZXJFbCA9IHN3aXBlci4kd3JhcHBlckVsLFxuICAgICAgc2xpZGVzR3JpZCA9IHN3aXBlci5zbGlkZXNHcmlkLFxuICAgICAgc25hcEdyaWQgPSBzd2lwZXIuc25hcEdyaWQsXG4gICAgICBlbmFibGVkID0gc3dpcGVyLmVuYWJsZWQ7XG4gIGlmICghZW5hYmxlZCkgcmV0dXJuO1xuICB2YXIgZSA9IGV2ZW50O1xuICBpZiAoZS5vcmlnaW5hbEV2ZW50KSBlID0gZS5vcmlnaW5hbEV2ZW50O1xuXG4gIGlmIChkYXRhLmFsbG93VG91Y2hDYWxsYmFja3MpIHtcbiAgICBzd2lwZXIuZW1pdCgndG91Y2hFbmQnLCBlKTtcbiAgfVxuXG4gIGRhdGEuYWxsb3dUb3VjaENhbGxiYWNrcyA9IGZhbHNlO1xuXG4gIGlmICghZGF0YS5pc1RvdWNoZWQpIHtcbiAgICBpZiAoZGF0YS5pc01vdmVkICYmIHBhcmFtcy5ncmFiQ3Vyc29yKSB7XG4gICAgICBzd2lwZXIuc2V0R3JhYkN1cnNvcihmYWxzZSk7XG4gICAgfVxuXG4gICAgZGF0YS5pc01vdmVkID0gZmFsc2U7XG4gICAgZGF0YS5zdGFydE1vdmluZyA9IGZhbHNlO1xuICAgIHJldHVybjtcbiAgfSAvLyBSZXR1cm4gR3JhYiBDdXJzb3JcblxuXG4gIGlmIChwYXJhbXMuZ3JhYkN1cnNvciAmJiBkYXRhLmlzTW92ZWQgJiYgZGF0YS5pc1RvdWNoZWQgJiYgKHN3aXBlci5hbGxvd1NsaWRlTmV4dCA9PT0gdHJ1ZSB8fCBzd2lwZXIuYWxsb3dTbGlkZVByZXYgPT09IHRydWUpKSB7XG4gICAgc3dpcGVyLnNldEdyYWJDdXJzb3IoZmFsc2UpO1xuICB9IC8vIFRpbWUgZGlmZlxuXG5cbiAgdmFyIHRvdWNoRW5kVGltZSA9IG5vdygpO1xuICB2YXIgdGltZURpZmYgPSB0b3VjaEVuZFRpbWUgLSBkYXRhLnRvdWNoU3RhcnRUaW1lOyAvLyBUYXAsIGRvdWJsZVRhcCwgQ2xpY2tcblxuICBpZiAoc3dpcGVyLmFsbG93Q2xpY2spIHtcbiAgICBzd2lwZXIudXBkYXRlQ2xpY2tlZFNsaWRlKGUpO1xuICAgIHN3aXBlci5lbWl0KCd0YXAgY2xpY2snLCBlKTtcblxuICAgIGlmICh0aW1lRGlmZiA8IDMwMCAmJiB0b3VjaEVuZFRpbWUgLSBkYXRhLmxhc3RDbGlja1RpbWUgPCAzMDApIHtcbiAgICAgIHN3aXBlci5lbWl0KCdkb3VibGVUYXAgZG91YmxlQ2xpY2snLCBlKTtcbiAgICB9XG4gIH1cblxuICBkYXRhLmxhc3RDbGlja1RpbWUgPSBub3coKTtcbiAgbmV4dFRpY2soZnVuY3Rpb24gKCkge1xuICAgIGlmICghc3dpcGVyLmRlc3Ryb3llZCkgc3dpcGVyLmFsbG93Q2xpY2sgPSB0cnVlO1xuICB9KTtcblxuICBpZiAoIWRhdGEuaXNUb3VjaGVkIHx8ICFkYXRhLmlzTW92ZWQgfHwgIXN3aXBlci5zd2lwZURpcmVjdGlvbiB8fCB0b3VjaGVzLmRpZmYgPT09IDAgfHwgZGF0YS5jdXJyZW50VHJhbnNsYXRlID09PSBkYXRhLnN0YXJ0VHJhbnNsYXRlKSB7XG4gICAgZGF0YS5pc1RvdWNoZWQgPSBmYWxzZTtcbiAgICBkYXRhLmlzTW92ZWQgPSBmYWxzZTtcbiAgICBkYXRhLnN0YXJ0TW92aW5nID0gZmFsc2U7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgZGF0YS5pc1RvdWNoZWQgPSBmYWxzZTtcbiAgZGF0YS5pc01vdmVkID0gZmFsc2U7XG4gIGRhdGEuc3RhcnRNb3ZpbmcgPSBmYWxzZTtcbiAgdmFyIGN1cnJlbnRQb3M7XG5cbiAgaWYgKHBhcmFtcy5mb2xsb3dGaW5nZXIpIHtcbiAgICBjdXJyZW50UG9zID0gcnRsID8gc3dpcGVyLnRyYW5zbGF0ZSA6IC1zd2lwZXIudHJhbnNsYXRlO1xuICB9IGVsc2Uge1xuICAgIGN1cnJlbnRQb3MgPSAtZGF0YS5jdXJyZW50VHJhbnNsYXRlO1xuICB9XG5cbiAgaWYgKHBhcmFtcy5jc3NNb2RlKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKHBhcmFtcy5mcmVlTW9kZSkge1xuICAgIGlmIChjdXJyZW50UG9zIDwgLXN3aXBlci5taW5UcmFuc2xhdGUoKSkge1xuICAgICAgc3dpcGVyLnNsaWRlVG8oc3dpcGVyLmFjdGl2ZUluZGV4KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoY3VycmVudFBvcyA+IC1zd2lwZXIubWF4VHJhbnNsYXRlKCkpIHtcbiAgICAgIGlmIChzd2lwZXIuc2xpZGVzLmxlbmd0aCA8IHNuYXBHcmlkLmxlbmd0aCkge1xuICAgICAgICBzd2lwZXIuc2xpZGVUbyhzbmFwR3JpZC5sZW5ndGggLSAxKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN3aXBlci5zbGlkZVRvKHN3aXBlci5zbGlkZXMubGVuZ3RoIC0gMSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAocGFyYW1zLmZyZWVNb2RlTW9tZW50dW0pIHtcbiAgICAgIGlmIChkYXRhLnZlbG9jaXRpZXMubGVuZ3RoID4gMSkge1xuICAgICAgICB2YXIgbGFzdE1vdmVFdmVudCA9IGRhdGEudmVsb2NpdGllcy5wb3AoKTtcbiAgICAgICAgdmFyIHZlbG9jaXR5RXZlbnQgPSBkYXRhLnZlbG9jaXRpZXMucG9wKCk7XG4gICAgICAgIHZhciBkaXN0YW5jZSA9IGxhc3RNb3ZlRXZlbnQucG9zaXRpb24gLSB2ZWxvY2l0eUV2ZW50LnBvc2l0aW9uO1xuICAgICAgICB2YXIgdGltZSA9IGxhc3RNb3ZlRXZlbnQudGltZSAtIHZlbG9jaXR5RXZlbnQudGltZTtcbiAgICAgICAgc3dpcGVyLnZlbG9jaXR5ID0gZGlzdGFuY2UgLyB0aW1lO1xuICAgICAgICBzd2lwZXIudmVsb2NpdHkgLz0gMjtcblxuICAgICAgICBpZiAoTWF0aC5hYnMoc3dpcGVyLnZlbG9jaXR5KSA8IHBhcmFtcy5mcmVlTW9kZU1pbmltdW1WZWxvY2l0eSkge1xuICAgICAgICAgIHN3aXBlci52ZWxvY2l0eSA9IDA7XG4gICAgICAgIH0gLy8gdGhpcyBpbXBsaWVzIHRoYXQgdGhlIHVzZXIgc3RvcHBlZCBtb3ZpbmcgYSBmaW5nZXIgdGhlbiByZWxlYXNlZC5cbiAgICAgICAgLy8gVGhlcmUgd291bGQgYmUgbm8gZXZlbnRzIHdpdGggZGlzdGFuY2UgemVybywgc28gdGhlIGxhc3QgZXZlbnQgaXMgc3RhbGUuXG5cblxuICAgICAgICBpZiAodGltZSA+IDE1MCB8fCBub3coKSAtIGxhc3RNb3ZlRXZlbnQudGltZSA+IDMwMCkge1xuICAgICAgICAgIHN3aXBlci52ZWxvY2l0eSA9IDA7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN3aXBlci52ZWxvY2l0eSA9IDA7XG4gICAgICB9XG5cbiAgICAgIHN3aXBlci52ZWxvY2l0eSAqPSBwYXJhbXMuZnJlZU1vZGVNb21lbnR1bVZlbG9jaXR5UmF0aW87XG4gICAgICBkYXRhLnZlbG9jaXRpZXMubGVuZ3RoID0gMDtcbiAgICAgIHZhciBtb21lbnR1bUR1cmF0aW9uID0gMTAwMCAqIHBhcmFtcy5mcmVlTW9kZU1vbWVudHVtUmF0aW87XG4gICAgICB2YXIgbW9tZW50dW1EaXN0YW5jZSA9IHN3aXBlci52ZWxvY2l0eSAqIG1vbWVudHVtRHVyYXRpb247XG4gICAgICB2YXIgbmV3UG9zaXRpb24gPSBzd2lwZXIudHJhbnNsYXRlICsgbW9tZW50dW1EaXN0YW5jZTtcbiAgICAgIGlmIChydGwpIG5ld1Bvc2l0aW9uID0gLW5ld1Bvc2l0aW9uO1xuICAgICAgdmFyIGRvQm91bmNlID0gZmFsc2U7XG4gICAgICB2YXIgYWZ0ZXJCb3VuY2VQb3NpdGlvbjtcbiAgICAgIHZhciBib3VuY2VBbW91bnQgPSBNYXRoLmFicyhzd2lwZXIudmVsb2NpdHkpICogMjAgKiBwYXJhbXMuZnJlZU1vZGVNb21lbnR1bUJvdW5jZVJhdGlvO1xuICAgICAgdmFyIG5lZWRzTG9vcEZpeDtcblxuICAgICAgaWYgKG5ld1Bvc2l0aW9uIDwgc3dpcGVyLm1heFRyYW5zbGF0ZSgpKSB7XG4gICAgICAgIGlmIChwYXJhbXMuZnJlZU1vZGVNb21lbnR1bUJvdW5jZSkge1xuICAgICAgICAgIGlmIChuZXdQb3NpdGlvbiArIHN3aXBlci5tYXhUcmFuc2xhdGUoKSA8IC1ib3VuY2VBbW91bnQpIHtcbiAgICAgICAgICAgIG5ld1Bvc2l0aW9uID0gc3dpcGVyLm1heFRyYW5zbGF0ZSgpIC0gYm91bmNlQW1vdW50O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGFmdGVyQm91bmNlUG9zaXRpb24gPSBzd2lwZXIubWF4VHJhbnNsYXRlKCk7XG4gICAgICAgICAgZG9Cb3VuY2UgPSB0cnVlO1xuICAgICAgICAgIGRhdGEuYWxsb3dNb21lbnR1bUJvdW5jZSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmV3UG9zaXRpb24gPSBzd2lwZXIubWF4VHJhbnNsYXRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGFyYW1zLmxvb3AgJiYgcGFyYW1zLmNlbnRlcmVkU2xpZGVzKSBuZWVkc0xvb3BGaXggPSB0cnVlO1xuICAgICAgfSBlbHNlIGlmIChuZXdQb3NpdGlvbiA+IHN3aXBlci5taW5UcmFuc2xhdGUoKSkge1xuICAgICAgICBpZiAocGFyYW1zLmZyZWVNb2RlTW9tZW50dW1Cb3VuY2UpIHtcbiAgICAgICAgICBpZiAobmV3UG9zaXRpb24gLSBzd2lwZXIubWluVHJhbnNsYXRlKCkgPiBib3VuY2VBbW91bnQpIHtcbiAgICAgICAgICAgIG5ld1Bvc2l0aW9uID0gc3dpcGVyLm1pblRyYW5zbGF0ZSgpICsgYm91bmNlQW1vdW50O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGFmdGVyQm91bmNlUG9zaXRpb24gPSBzd2lwZXIubWluVHJhbnNsYXRlKCk7XG4gICAgICAgICAgZG9Cb3VuY2UgPSB0cnVlO1xuICAgICAgICAgIGRhdGEuYWxsb3dNb21lbnR1bUJvdW5jZSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmV3UG9zaXRpb24gPSBzd2lwZXIubWluVHJhbnNsYXRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGFyYW1zLmxvb3AgJiYgcGFyYW1zLmNlbnRlcmVkU2xpZGVzKSBuZWVkc0xvb3BGaXggPSB0cnVlO1xuICAgICAgfSBlbHNlIGlmIChwYXJhbXMuZnJlZU1vZGVTdGlja3kpIHtcbiAgICAgICAgdmFyIG5leHRTbGlkZTtcblxuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHNuYXBHcmlkLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgICAgaWYgKHNuYXBHcmlkW2pdID4gLW5ld1Bvc2l0aW9uKSB7XG4gICAgICAgICAgICBuZXh0U2xpZGUgPSBqO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKE1hdGguYWJzKHNuYXBHcmlkW25leHRTbGlkZV0gLSBuZXdQb3NpdGlvbikgPCBNYXRoLmFicyhzbmFwR3JpZFtuZXh0U2xpZGUgLSAxXSAtIG5ld1Bvc2l0aW9uKSB8fCBzd2lwZXIuc3dpcGVEaXJlY3Rpb24gPT09ICduZXh0Jykge1xuICAgICAgICAgIG5ld1Bvc2l0aW9uID0gc25hcEdyaWRbbmV4dFNsaWRlXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXdQb3NpdGlvbiA9IHNuYXBHcmlkW25leHRTbGlkZSAtIDFdO1xuICAgICAgICB9XG5cbiAgICAgICAgbmV3UG9zaXRpb24gPSAtbmV3UG9zaXRpb247XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkc0xvb3BGaXgpIHtcbiAgICAgICAgc3dpcGVyLm9uY2UoJ3RyYW5zaXRpb25FbmQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgc3dpcGVyLmxvb3BGaXgoKTtcbiAgICAgICAgfSk7XG4gICAgICB9IC8vIEZpeCBkdXJhdGlvblxuXG5cbiAgICAgIGlmIChzd2lwZXIudmVsb2NpdHkgIT09IDApIHtcbiAgICAgICAgaWYgKHJ0bCkge1xuICAgICAgICAgIG1vbWVudHVtRHVyYXRpb24gPSBNYXRoLmFicygoLW5ld1Bvc2l0aW9uIC0gc3dpcGVyLnRyYW5zbGF0ZSkgLyBzd2lwZXIudmVsb2NpdHkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG1vbWVudHVtRHVyYXRpb24gPSBNYXRoLmFicygobmV3UG9zaXRpb24gLSBzd2lwZXIudHJhbnNsYXRlKSAvIHN3aXBlci52ZWxvY2l0eSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGFyYW1zLmZyZWVNb2RlU3RpY2t5KSB7XG4gICAgICAgICAgLy8gSWYgZnJlZU1vZGVTdGlja3kgaXMgYWN0aXZlIGFuZCB0aGUgdXNlciBlbmRzIGEgc3dpcGUgd2l0aCBhIHNsb3ctdmVsb2NpdHlcbiAgICAgICAgICAvLyBldmVudCwgdGhlbiBkdXJhdGlvbnMgY2FuIGJlIDIwKyBzZWNvbmRzIHRvIHNsaWRlIG9uZSAob3IgemVybyEpIHNsaWRlcy5cbiAgICAgICAgICAvLyBJdCdzIGVhc3kgdG8gc2VlIHRoaXMgd2hlbiBzaW11bGF0aW5nIHRvdWNoIHdpdGggbW91c2UgZXZlbnRzLiBUbyBmaXggdGhpcyxcbiAgICAgICAgICAvLyBsaW1pdCBzaW5nbGUtc2xpZGUgc3dpcGVzIHRvIHRoZSBkZWZhdWx0IHNsaWRlIGR1cmF0aW9uLiBUaGlzIGFsc28gaGFzIHRoZVxuICAgICAgICAgIC8vIG5pY2Ugc2lkZSBlZmZlY3Qgb2YgbWF0Y2hpbmcgc2xpZGUgc3BlZWQgaWYgdGhlIHVzZXIgc3RvcHBlZCBtb3ZpbmcgYmVmb3JlXG4gICAgICAgICAgLy8gbGlmdGluZyBmaW5nZXIgb3IgbW91c2UgdnMuIG1vdmluZyBzbG93bHkgYmVmb3JlIGxpZnRpbmcgdGhlIGZpbmdlci9tb3VzZS5cbiAgICAgICAgICAvLyBGb3IgZmFzdGVyIHN3aXBlcywgYWxzbyBhcHBseSBsaW1pdHMgKGFsYmVpdCBoaWdoZXIgb25lcykuXG4gICAgICAgICAgdmFyIG1vdmVEaXN0YW5jZSA9IE1hdGguYWJzKChydGwgPyAtbmV3UG9zaXRpb24gOiBuZXdQb3NpdGlvbikgLSBzd2lwZXIudHJhbnNsYXRlKTtcbiAgICAgICAgICB2YXIgY3VycmVudFNsaWRlU2l6ZSA9IHN3aXBlci5zbGlkZXNTaXplc0dyaWRbc3dpcGVyLmFjdGl2ZUluZGV4XTtcblxuICAgICAgICAgIGlmIChtb3ZlRGlzdGFuY2UgPCBjdXJyZW50U2xpZGVTaXplKSB7XG4gICAgICAgICAgICBtb21lbnR1bUR1cmF0aW9uID0gcGFyYW1zLnNwZWVkO1xuICAgICAgICAgIH0gZWxzZSBpZiAobW92ZURpc3RhbmNlIDwgMiAqIGN1cnJlbnRTbGlkZVNpemUpIHtcbiAgICAgICAgICAgIG1vbWVudHVtRHVyYXRpb24gPSBwYXJhbXMuc3BlZWQgKiAxLjU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vbWVudHVtRHVyYXRpb24gPSBwYXJhbXMuc3BlZWQgKiAyLjU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHBhcmFtcy5mcmVlTW9kZVN0aWNreSkge1xuICAgICAgICBzd2lwZXIuc2xpZGVUb0Nsb3Nlc3QoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAocGFyYW1zLmZyZWVNb2RlTW9tZW50dW1Cb3VuY2UgJiYgZG9Cb3VuY2UpIHtcbiAgICAgICAgc3dpcGVyLnVwZGF0ZVByb2dyZXNzKGFmdGVyQm91bmNlUG9zaXRpb24pO1xuICAgICAgICBzd2lwZXIuc2V0VHJhbnNpdGlvbihtb21lbnR1bUR1cmF0aW9uKTtcbiAgICAgICAgc3dpcGVyLnNldFRyYW5zbGF0ZShuZXdQb3NpdGlvbik7XG4gICAgICAgIHN3aXBlci50cmFuc2l0aW9uU3RhcnQodHJ1ZSwgc3dpcGVyLnN3aXBlRGlyZWN0aW9uKTtcbiAgICAgICAgc3dpcGVyLmFuaW1hdGluZyA9IHRydWU7XG4gICAgICAgICR3cmFwcGVyRWwudHJhbnNpdGlvbkVuZChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKCFzd2lwZXIgfHwgc3dpcGVyLmRlc3Ryb3llZCB8fCAhZGF0YS5hbGxvd01vbWVudHVtQm91bmNlKSByZXR1cm47XG4gICAgICAgICAgc3dpcGVyLmVtaXQoJ21vbWVudHVtQm91bmNlJyk7XG4gICAgICAgICAgc3dpcGVyLnNldFRyYW5zaXRpb24ocGFyYW1zLnNwZWVkKTtcbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHN3aXBlci5zZXRUcmFuc2xhdGUoYWZ0ZXJCb3VuY2VQb3NpdGlvbik7XG4gICAgICAgICAgICAkd3JhcHBlckVsLnRyYW5zaXRpb25FbmQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBpZiAoIXN3aXBlciB8fCBzd2lwZXIuZGVzdHJveWVkKSByZXR1cm47XG4gICAgICAgICAgICAgIHN3aXBlci50cmFuc2l0aW9uRW5kKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9LCAwKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKHN3aXBlci52ZWxvY2l0eSkge1xuICAgICAgICBzd2lwZXIudXBkYXRlUHJvZ3Jlc3MobmV3UG9zaXRpb24pO1xuICAgICAgICBzd2lwZXIuc2V0VHJhbnNpdGlvbihtb21lbnR1bUR1cmF0aW9uKTtcbiAgICAgICAgc3dpcGVyLnNldFRyYW5zbGF0ZShuZXdQb3NpdGlvbik7XG4gICAgICAgIHN3aXBlci50cmFuc2l0aW9uU3RhcnQodHJ1ZSwgc3dpcGVyLnN3aXBlRGlyZWN0aW9uKTtcblxuICAgICAgICBpZiAoIXN3aXBlci5hbmltYXRpbmcpIHtcbiAgICAgICAgICBzd2lwZXIuYW5pbWF0aW5nID0gdHJ1ZTtcbiAgICAgICAgICAkd3JhcHBlckVsLnRyYW5zaXRpb25FbmQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCFzd2lwZXIgfHwgc3dpcGVyLmRlc3Ryb3llZCkgcmV0dXJuO1xuICAgICAgICAgICAgc3dpcGVyLnRyYW5zaXRpb25FbmQoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3dpcGVyLmVtaXQoJ19mcmVlTW9kZU5vTW9tZW50dW1SZWxlYXNlJyk7XG4gICAgICAgIHN3aXBlci51cGRhdGVQcm9ncmVzcyhuZXdQb3NpdGlvbik7XG4gICAgICB9XG5cbiAgICAgIHN3aXBlci51cGRhdGVBY3RpdmVJbmRleCgpO1xuICAgICAgc3dpcGVyLnVwZGF0ZVNsaWRlc0NsYXNzZXMoKTtcbiAgICB9IGVsc2UgaWYgKHBhcmFtcy5mcmVlTW9kZVN0aWNreSkge1xuICAgICAgc3dpcGVyLnNsaWRlVG9DbG9zZXN0KCk7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIGlmIChwYXJhbXMuZnJlZU1vZGUpIHtcbiAgICAgIHN3aXBlci5lbWl0KCdfZnJlZU1vZGVOb01vbWVudHVtUmVsZWFzZScpO1xuICAgIH1cblxuICAgIGlmICghcGFyYW1zLmZyZWVNb2RlTW9tZW50dW0gfHwgdGltZURpZmYgPj0gcGFyYW1zLmxvbmdTd2lwZXNNcykge1xuICAgICAgc3dpcGVyLnVwZGF0ZVByb2dyZXNzKCk7XG4gICAgICBzd2lwZXIudXBkYXRlQWN0aXZlSW5kZXgoKTtcbiAgICAgIHN3aXBlci51cGRhdGVTbGlkZXNDbGFzc2VzKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuO1xuICB9IC8vIEZpbmQgY3VycmVudCBzbGlkZVxuXG5cbiAgdmFyIHN0b3BJbmRleCA9IDA7XG4gIHZhciBncm91cFNpemUgPSBzd2lwZXIuc2xpZGVzU2l6ZXNHcmlkWzBdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc2xpZGVzR3JpZC5sZW5ndGg7IGkgKz0gaSA8IHBhcmFtcy5zbGlkZXNQZXJHcm91cFNraXAgPyAxIDogcGFyYW1zLnNsaWRlc1Blckdyb3VwKSB7XG4gICAgdmFyIF9pbmNyZW1lbnQgPSBpIDwgcGFyYW1zLnNsaWRlc1Blckdyb3VwU2tpcCAtIDEgPyAxIDogcGFyYW1zLnNsaWRlc1Blckdyb3VwO1xuXG4gICAgaWYgKHR5cGVvZiBzbGlkZXNHcmlkW2kgKyBfaW5jcmVtZW50XSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGlmIChjdXJyZW50UG9zID49IHNsaWRlc0dyaWRbaV0gJiYgY3VycmVudFBvcyA8IHNsaWRlc0dyaWRbaSArIF9pbmNyZW1lbnRdKSB7XG4gICAgICAgIHN0b3BJbmRleCA9IGk7XG4gICAgICAgIGdyb3VwU2l6ZSA9IHNsaWRlc0dyaWRbaSArIF9pbmNyZW1lbnRdIC0gc2xpZGVzR3JpZFtpXTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGN1cnJlbnRQb3MgPj0gc2xpZGVzR3JpZFtpXSkge1xuICAgICAgc3RvcEluZGV4ID0gaTtcbiAgICAgIGdyb3VwU2l6ZSA9IHNsaWRlc0dyaWRbc2xpZGVzR3JpZC5sZW5ndGggLSAxXSAtIHNsaWRlc0dyaWRbc2xpZGVzR3JpZC5sZW5ndGggLSAyXTtcbiAgICB9XG4gIH0gLy8gRmluZCBjdXJyZW50IHNsaWRlIHNpemVcblxuXG4gIHZhciByYXRpbyA9IChjdXJyZW50UG9zIC0gc2xpZGVzR3JpZFtzdG9wSW5kZXhdKSAvIGdyb3VwU2l6ZTtcbiAgdmFyIGluY3JlbWVudCA9IHN0b3BJbmRleCA8IHBhcmFtcy5zbGlkZXNQZXJHcm91cFNraXAgLSAxID8gMSA6IHBhcmFtcy5zbGlkZXNQZXJHcm91cDtcblxuICBpZiAodGltZURpZmYgPiBwYXJhbXMubG9uZ1N3aXBlc01zKSB7XG4gICAgLy8gTG9uZyB0b3VjaGVzXG4gICAgaWYgKCFwYXJhbXMubG9uZ1N3aXBlcykge1xuICAgICAgc3dpcGVyLnNsaWRlVG8oc3dpcGVyLmFjdGl2ZUluZGV4KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoc3dpcGVyLnN3aXBlRGlyZWN0aW9uID09PSAnbmV4dCcpIHtcbiAgICAgIGlmIChyYXRpbyA+PSBwYXJhbXMubG9uZ1N3aXBlc1JhdGlvKSBzd2lwZXIuc2xpZGVUbyhzdG9wSW5kZXggKyBpbmNyZW1lbnQpO2Vsc2Ugc3dpcGVyLnNsaWRlVG8oc3RvcEluZGV4KTtcbiAgICB9XG5cbiAgICBpZiAoc3dpcGVyLnN3aXBlRGlyZWN0aW9uID09PSAncHJldicpIHtcbiAgICAgIGlmIChyYXRpbyA+IDEgLSBwYXJhbXMubG9uZ1N3aXBlc1JhdGlvKSBzd2lwZXIuc2xpZGVUbyhzdG9wSW5kZXggKyBpbmNyZW1lbnQpO2Vsc2Ugc3dpcGVyLnNsaWRlVG8oc3RvcEluZGV4KTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gU2hvcnQgc3dpcGVzXG4gICAgaWYgKCFwYXJhbXMuc2hvcnRTd2lwZXMpIHtcbiAgICAgIHN3aXBlci5zbGlkZVRvKHN3aXBlci5hY3RpdmVJbmRleCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGlzTmF2QnV0dG9uVGFyZ2V0ID0gc3dpcGVyLm5hdmlnYXRpb24gJiYgKGUudGFyZ2V0ID09PSBzd2lwZXIubmF2aWdhdGlvbi5uZXh0RWwgfHwgZS50YXJnZXQgPT09IHN3aXBlci5uYXZpZ2F0aW9uLnByZXZFbCk7XG5cbiAgICBpZiAoIWlzTmF2QnV0dG9uVGFyZ2V0KSB7XG4gICAgICBpZiAoc3dpcGVyLnN3aXBlRGlyZWN0aW9uID09PSAnbmV4dCcpIHtcbiAgICAgICAgc3dpcGVyLnNsaWRlVG8oc3RvcEluZGV4ICsgaW5jcmVtZW50KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN3aXBlci5zd2lwZURpcmVjdGlvbiA9PT0gJ3ByZXYnKSB7XG4gICAgICAgIHN3aXBlci5zbGlkZVRvKHN0b3BJbmRleCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChlLnRhcmdldCA9PT0gc3dpcGVyLm5hdmlnYXRpb24ubmV4dEVsKSB7XG4gICAgICBzd2lwZXIuc2xpZGVUbyhzdG9wSW5kZXggKyBpbmNyZW1lbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzd2lwZXIuc2xpZGVUbyhzdG9wSW5kZXgpO1xuICAgIH1cbiAgfVxufSIsImltcG9ydCB7IGdldERvY3VtZW50IH0gZnJvbSAnc3NyLXdpbmRvdyc7XG5pbXBvcnQgJCBmcm9tICcuLi8uLi8uLi91dGlscy9kb20nO1xuaW1wb3J0IHsgZXh0ZW5kLCBub3cgfSBmcm9tICcuLi8uLi8uLi91dGlscy91dGlscyc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBvblRvdWNoTW92ZShldmVudCkge1xuICB2YXIgZG9jdW1lbnQgPSBnZXREb2N1bWVudCgpO1xuICB2YXIgc3dpcGVyID0gdGhpcztcbiAgdmFyIGRhdGEgPSBzd2lwZXIudG91Y2hFdmVudHNEYXRhO1xuICB2YXIgcGFyYW1zID0gc3dpcGVyLnBhcmFtcyxcbiAgICAgIHRvdWNoZXMgPSBzd2lwZXIudG91Y2hlcyxcbiAgICAgIHJ0bCA9IHN3aXBlci5ydGxUcmFuc2xhdGUsXG4gICAgICBlbmFibGVkID0gc3dpcGVyLmVuYWJsZWQ7XG4gIGlmICghZW5hYmxlZCkgcmV0dXJuO1xuICB2YXIgZSA9IGV2ZW50O1xuICBpZiAoZS5vcmlnaW5hbEV2ZW50KSBlID0gZS5vcmlnaW5hbEV2ZW50O1xuXG4gIGlmICghZGF0YS5pc1RvdWNoZWQpIHtcbiAgICBpZiAoZGF0YS5zdGFydE1vdmluZyAmJiBkYXRhLmlzU2Nyb2xsaW5nKSB7XG4gICAgICBzd2lwZXIuZW1pdCgndG91Y2hNb3ZlT3Bwb3NpdGUnLCBlKTtcbiAgICB9XG5cbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoZGF0YS5pc1RvdWNoRXZlbnQgJiYgZS50eXBlICE9PSAndG91Y2htb3ZlJykgcmV0dXJuO1xuICB2YXIgdGFyZ2V0VG91Y2ggPSBlLnR5cGUgPT09ICd0b3VjaG1vdmUnICYmIGUudGFyZ2V0VG91Y2hlcyAmJiAoZS50YXJnZXRUb3VjaGVzWzBdIHx8IGUuY2hhbmdlZFRvdWNoZXNbMF0pO1xuICB2YXIgcGFnZVggPSBlLnR5cGUgPT09ICd0b3VjaG1vdmUnID8gdGFyZ2V0VG91Y2gucGFnZVggOiBlLnBhZ2VYO1xuICB2YXIgcGFnZVkgPSBlLnR5cGUgPT09ICd0b3VjaG1vdmUnID8gdGFyZ2V0VG91Y2gucGFnZVkgOiBlLnBhZ2VZO1xuXG4gIGlmIChlLnByZXZlbnRlZEJ5TmVzdGVkU3dpcGVyKSB7XG4gICAgdG91Y2hlcy5zdGFydFggPSBwYWdlWDtcbiAgICB0b3VjaGVzLnN0YXJ0WSA9IHBhZ2VZO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmICghc3dpcGVyLmFsbG93VG91Y2hNb3ZlKSB7XG4gICAgLy8gaXNNb3ZlZCA9IHRydWU7XG4gICAgc3dpcGVyLmFsbG93Q2xpY2sgPSBmYWxzZTtcblxuICAgIGlmIChkYXRhLmlzVG91Y2hlZCkge1xuICAgICAgZXh0ZW5kKHRvdWNoZXMsIHtcbiAgICAgICAgc3RhcnRYOiBwYWdlWCxcbiAgICAgICAgc3RhcnRZOiBwYWdlWSxcbiAgICAgICAgY3VycmVudFg6IHBhZ2VYLFxuICAgICAgICBjdXJyZW50WTogcGFnZVlcbiAgICAgIH0pO1xuICAgICAgZGF0YS50b3VjaFN0YXJ0VGltZSA9IG5vdygpO1xuICAgIH1cblxuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChkYXRhLmlzVG91Y2hFdmVudCAmJiBwYXJhbXMudG91Y2hSZWxlYXNlT25FZGdlcyAmJiAhcGFyYW1zLmxvb3ApIHtcbiAgICBpZiAoc3dpcGVyLmlzVmVydGljYWwoKSkge1xuICAgICAgLy8gVmVydGljYWxcbiAgICAgIGlmIChwYWdlWSA8IHRvdWNoZXMuc3RhcnRZICYmIHN3aXBlci50cmFuc2xhdGUgPD0gc3dpcGVyLm1heFRyYW5zbGF0ZSgpIHx8IHBhZ2VZID4gdG91Y2hlcy5zdGFydFkgJiYgc3dpcGVyLnRyYW5zbGF0ZSA+PSBzd2lwZXIubWluVHJhbnNsYXRlKCkpIHtcbiAgICAgICAgZGF0YS5pc1RvdWNoZWQgPSBmYWxzZTtcbiAgICAgICAgZGF0YS5pc01vdmVkID0gZmFsc2U7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHBhZ2VYIDwgdG91Y2hlcy5zdGFydFggJiYgc3dpcGVyLnRyYW5zbGF0ZSA8PSBzd2lwZXIubWF4VHJhbnNsYXRlKCkgfHwgcGFnZVggPiB0b3VjaGVzLnN0YXJ0WCAmJiBzd2lwZXIudHJhbnNsYXRlID49IHN3aXBlci5taW5UcmFuc2xhdGUoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG4gIGlmIChkYXRhLmlzVG91Y2hFdmVudCAmJiBkb2N1bWVudC5hY3RpdmVFbGVtZW50KSB7XG4gICAgaWYgKGUudGFyZ2V0ID09PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50ICYmICQoZS50YXJnZXQpLmlzKGRhdGEuZm9jdXNhYmxlRWxlbWVudHMpKSB7XG4gICAgICBkYXRhLmlzTW92ZWQgPSB0cnVlO1xuICAgICAgc3dpcGVyLmFsbG93Q2xpY2sgPSBmYWxzZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cblxuICBpZiAoZGF0YS5hbGxvd1RvdWNoQ2FsbGJhY2tzKSB7XG4gICAgc3dpcGVyLmVtaXQoJ3RvdWNoTW92ZScsIGUpO1xuICB9XG5cbiAgaWYgKGUudGFyZ2V0VG91Y2hlcyAmJiBlLnRhcmdldFRvdWNoZXMubGVuZ3RoID4gMSkgcmV0dXJuO1xuICB0b3VjaGVzLmN1cnJlbnRYID0gcGFnZVg7XG4gIHRvdWNoZXMuY3VycmVudFkgPSBwYWdlWTtcbiAgdmFyIGRpZmZYID0gdG91Y2hlcy5jdXJyZW50WCAtIHRvdWNoZXMuc3RhcnRYO1xuICB2YXIgZGlmZlkgPSB0b3VjaGVzLmN1cnJlbnRZIC0gdG91Y2hlcy5zdGFydFk7XG4gIGlmIChzd2lwZXIucGFyYW1zLnRocmVzaG9sZCAmJiBNYXRoLnNxcnQoTWF0aC5wb3coZGlmZlgsIDIpICsgTWF0aC5wb3coZGlmZlksIDIpKSA8IHN3aXBlci5wYXJhbXMudGhyZXNob2xkKSByZXR1cm47XG5cbiAgaWYgKHR5cGVvZiBkYXRhLmlzU2Nyb2xsaW5nID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciB0b3VjaEFuZ2xlO1xuXG4gICAgaWYgKHN3aXBlci5pc0hvcml6b250YWwoKSAmJiB0b3VjaGVzLmN1cnJlbnRZID09PSB0b3VjaGVzLnN0YXJ0WSB8fCBzd2lwZXIuaXNWZXJ0aWNhbCgpICYmIHRvdWNoZXMuY3VycmVudFggPT09IHRvdWNoZXMuc3RhcnRYKSB7XG4gICAgICBkYXRhLmlzU2Nyb2xsaW5nID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgICAgaWYgKGRpZmZYICogZGlmZlggKyBkaWZmWSAqIGRpZmZZID49IDI1KSB7XG4gICAgICAgIHRvdWNoQW5nbGUgPSBNYXRoLmF0YW4yKE1hdGguYWJzKGRpZmZZKSwgTWF0aC5hYnMoZGlmZlgpKSAqIDE4MCAvIE1hdGguUEk7XG4gICAgICAgIGRhdGEuaXNTY3JvbGxpbmcgPSBzd2lwZXIuaXNIb3Jpem9udGFsKCkgPyB0b3VjaEFuZ2xlID4gcGFyYW1zLnRvdWNoQW5nbGUgOiA5MCAtIHRvdWNoQW5nbGUgPiBwYXJhbXMudG91Y2hBbmdsZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoZGF0YS5pc1Njcm9sbGluZykge1xuICAgIHN3aXBlci5lbWl0KCd0b3VjaE1vdmVPcHBvc2l0ZScsIGUpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBkYXRhLnN0YXJ0TW92aW5nID09PSAndW5kZWZpbmVkJykge1xuICAgIGlmICh0b3VjaGVzLmN1cnJlbnRYICE9PSB0b3VjaGVzLnN0YXJ0WCB8fCB0b3VjaGVzLmN1cnJlbnRZICE9PSB0b3VjaGVzLnN0YXJ0WSkge1xuICAgICAgZGF0YS5zdGFydE1vdmluZyA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgaWYgKGRhdGEuaXNTY3JvbGxpbmcpIHtcbiAgICBkYXRhLmlzVG91Y2hlZCA9IGZhbHNlO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmICghZGF0YS5zdGFydE1vdmluZykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHN3aXBlci5hbGxvd0NsaWNrID0gZmFsc2U7XG5cbiAgaWYgKCFwYXJhbXMuY3NzTW9kZSAmJiBlLmNhbmNlbGFibGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICBpZiAocGFyYW1zLnRvdWNoTW92ZVN0b3BQcm9wYWdhdGlvbiAmJiAhcGFyYW1zLm5lc3RlZCkge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cblxuICBpZiAoIWRhdGEuaXNNb3ZlZCkge1xuICAgIGlmIChwYXJhbXMubG9vcCkge1xuICAgICAgc3dpcGVyLmxvb3BGaXgoKTtcbiAgICB9XG5cbiAgICBkYXRhLnN0YXJ0VHJhbnNsYXRlID0gc3dpcGVyLmdldFRyYW5zbGF0ZSgpO1xuICAgIHN3aXBlci5zZXRUcmFuc2l0aW9uKDApO1xuXG4gICAgaWYgKHN3aXBlci5hbmltYXRpbmcpIHtcbiAgICAgIHN3aXBlci4kd3JhcHBlckVsLnRyaWdnZXIoJ3dlYmtpdFRyYW5zaXRpb25FbmQgdHJhbnNpdGlvbmVuZCcpO1xuICAgIH1cblxuICAgIGRhdGEuYWxsb3dNb21lbnR1bUJvdW5jZSA9IGZhbHNlOyAvLyBHcmFiIEN1cnNvclxuXG4gICAgaWYgKHBhcmFtcy5ncmFiQ3Vyc29yICYmIChzd2lwZXIuYWxsb3dTbGlkZU5leHQgPT09IHRydWUgfHwgc3dpcGVyLmFsbG93U2xpZGVQcmV2ID09PSB0cnVlKSkge1xuICAgICAgc3dpcGVyLnNldEdyYWJDdXJzb3IodHJ1ZSk7XG4gICAgfVxuXG4gICAgc3dpcGVyLmVtaXQoJ3NsaWRlckZpcnN0TW92ZScsIGUpO1xuICB9XG5cbiAgc3dpcGVyLmVtaXQoJ3NsaWRlck1vdmUnLCBlKTtcbiAgZGF0YS5pc01vdmVkID0gdHJ1ZTtcbiAgdmFyIGRpZmYgPSBzd2lwZXIuaXNIb3Jpem9udGFsKCkgPyBkaWZmWCA6IGRpZmZZO1xuICB0b3VjaGVzLmRpZmYgPSBkaWZmO1xuICBkaWZmICo9IHBhcmFtcy50b3VjaFJhdGlvO1xuICBpZiAocnRsKSBkaWZmID0gLWRpZmY7XG4gIHN3aXBlci5zd2lwZURpcmVjdGlvbiA9IGRpZmYgPiAwID8gJ3ByZXYnIDogJ25leHQnO1xuICBkYXRhLmN1cnJlbnRUcmFuc2xhdGUgPSBkaWZmICsgZGF0YS5zdGFydFRyYW5zbGF0ZTtcbiAgdmFyIGRpc2FibGVQYXJlbnRTd2lwZXIgPSB0cnVlO1xuICB2YXIgcmVzaXN0YW5jZVJhdGlvID0gcGFyYW1zLnJlc2lzdGFuY2VSYXRpbztcblxuICBpZiAocGFyYW1zLnRvdWNoUmVsZWFzZU9uRWRnZXMpIHtcbiAgICByZXNpc3RhbmNlUmF0aW8gPSAwO1xuICB9XG5cbiAgaWYgKGRpZmYgPiAwICYmIGRhdGEuY3VycmVudFRyYW5zbGF0ZSA+IHN3aXBlci5taW5UcmFuc2xhdGUoKSkge1xuICAgIGRpc2FibGVQYXJlbnRTd2lwZXIgPSBmYWxzZTtcbiAgICBpZiAocGFyYW1zLnJlc2lzdGFuY2UpIGRhdGEuY3VycmVudFRyYW5zbGF0ZSA9IHN3aXBlci5taW5UcmFuc2xhdGUoKSAtIDEgKyBNYXRoLnBvdygtc3dpcGVyLm1pblRyYW5zbGF0ZSgpICsgZGF0YS5zdGFydFRyYW5zbGF0ZSArIGRpZmYsIHJlc2lzdGFuY2VSYXRpbyk7XG4gIH0gZWxzZSBpZiAoZGlmZiA8IDAgJiYgZGF0YS5jdXJyZW50VHJhbnNsYXRlIDwgc3dpcGVyLm1heFRyYW5zbGF0ZSgpKSB7XG4gICAgZGlzYWJsZVBhcmVudFN3aXBlciA9IGZhbHNlO1xuICAgIGlmIChwYXJhbXMucmVzaXN0YW5jZSkgZGF0YS5jdXJyZW50VHJhbnNsYXRlID0gc3dpcGVyLm1heFRyYW5zbGF0ZSgpICsgMSAtIE1hdGgucG93KHN3aXBlci5tYXhUcmFuc2xhdGUoKSAtIGRhdGEuc3RhcnRUcmFuc2xhdGUgLSBkaWZmLCByZXNpc3RhbmNlUmF0aW8pO1xuICB9XG5cbiAgaWYgKGRpc2FibGVQYXJlbnRTd2lwZXIpIHtcbiAgICBlLnByZXZlbnRlZEJ5TmVzdGVkU3dpcGVyID0gdHJ1ZTtcbiAgfSAvLyBEaXJlY3Rpb25zIGxvY2tzXG5cblxuICBpZiAoIXN3aXBlci5hbGxvd1NsaWRlTmV4dCAmJiBzd2lwZXIuc3dpcGVEaXJlY3Rpb24gPT09ICduZXh0JyAmJiBkYXRhLmN1cnJlbnRUcmFuc2xhdGUgPCBkYXRhLnN0YXJ0VHJhbnNsYXRlKSB7XG4gICAgZGF0YS5jdXJyZW50VHJhbnNsYXRlID0gZGF0YS5zdGFydFRyYW5zbGF0ZTtcbiAgfVxuXG4gIGlmICghc3dpcGVyLmFsbG93U2xpZGVQcmV2ICYmIHN3aXBlci5zd2lwZURpcmVjdGlvbiA9PT0gJ3ByZXYnICYmIGRhdGEuY3VycmVudFRyYW5zbGF0ZSA+IGRhdGEuc3RhcnRUcmFuc2xhdGUpIHtcbiAgICBkYXRhLmN1cnJlbnRUcmFuc2xhdGUgPSBkYXRhLnN0YXJ0VHJhbnNsYXRlO1xuICB9XG5cbiAgaWYgKCFzd2lwZXIuYWxsb3dTbGlkZVByZXYgJiYgIXN3aXBlci5hbGxvd1NsaWRlTmV4dCkge1xuICAgIGRhdGEuY3VycmVudFRyYW5zbGF0ZSA9IGRhdGEuc3RhcnRUcmFuc2xhdGU7XG4gIH0gLy8gVGhyZXNob2xkXG5cblxuICBpZiAocGFyYW1zLnRocmVzaG9sZCA+IDApIHtcbiAgICBpZiAoTWF0aC5hYnMoZGlmZikgPiBwYXJhbXMudGhyZXNob2xkIHx8IGRhdGEuYWxsb3dUaHJlc2hvbGRNb3ZlKSB7XG4gICAgICBpZiAoIWRhdGEuYWxsb3dUaHJlc2hvbGRNb3ZlKSB7XG4gICAgICAgIGRhdGEuYWxsb3dUaHJlc2hvbGRNb3ZlID0gdHJ1ZTtcbiAgICAgICAgdG91Y2hlcy5zdGFydFggPSB0b3VjaGVzLmN1cnJlbnRYO1xuICAgICAgICB0b3VjaGVzLnN0YXJ0WSA9IHRvdWNoZXMuY3VycmVudFk7XG4gICAgICAgIGRhdGEuY3VycmVudFRyYW5zbGF0ZSA9IGRhdGEuc3RhcnRUcmFuc2xhdGU7XG4gICAgICAgIHRvdWNoZXMuZGlmZiA9IHN3aXBlci5pc0hvcml6b250YWwoKSA/IHRvdWNoZXMuY3VycmVudFggLSB0b3VjaGVzLnN0YXJ0WCA6IHRvdWNoZXMuY3VycmVudFkgLSB0b3VjaGVzLnN0YXJ0WTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBkYXRhLmN1cnJlbnRUcmFuc2xhdGUgPSBkYXRhLnN0YXJ0VHJhbnNsYXRlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG4gIGlmICghcGFyYW1zLmZvbGxvd0ZpbmdlciB8fCBwYXJhbXMuY3NzTW9kZSkgcmV0dXJuOyAvLyBVcGRhdGUgYWN0aXZlIGluZGV4IGluIGZyZWUgbW9kZVxuXG4gIGlmIChwYXJhbXMuZnJlZU1vZGUgfHwgcGFyYW1zLndhdGNoU2xpZGVzUHJvZ3Jlc3MgfHwgcGFyYW1zLndhdGNoU2xpZGVzVmlzaWJpbGl0eSkge1xuICAgIHN3aXBlci51cGRhdGVBY3RpdmVJbmRleCgpO1xuICAgIHN3aXBlci51cGRhdGVTbGlkZXNDbGFzc2VzKCk7XG4gIH1cblxuICBpZiAocGFyYW1zLmZyZWVNb2RlKSB7XG4gICAgLy8gVmVsb2NpdHlcbiAgICBpZiAoZGF0YS52ZWxvY2l0aWVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgZGF0YS52ZWxvY2l0aWVzLnB1c2goe1xuICAgICAgICBwb3NpdGlvbjogdG91Y2hlc1tzd2lwZXIuaXNIb3Jpem9udGFsKCkgPyAnc3RhcnRYJyA6ICdzdGFydFknXSxcbiAgICAgICAgdGltZTogZGF0YS50b3VjaFN0YXJ0VGltZVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZGF0YS52ZWxvY2l0aWVzLnB1c2goe1xuICAgICAgcG9zaXRpb246IHRvdWNoZXNbc3dpcGVyLmlzSG9yaXpvbnRhbCgpID8gJ2N1cnJlbnRYJyA6ICdjdXJyZW50WSddLFxuICAgICAgdGltZTogbm93KClcbiAgICB9KTtcbiAgfSAvLyBVcGRhdGUgcHJvZ3Jlc3NcblxuXG4gIHN3aXBlci51cGRhdGVQcm9ncmVzcyhkYXRhLmN1cnJlbnRUcmFuc2xhdGUpOyAvLyBVcGRhdGUgdHJhbnNsYXRlXG5cbiAgc3dpcGVyLnNldFRyYW5zbGF0ZShkYXRhLmN1cnJlbnRUcmFuc2xhdGUpO1xufSIsImltcG9ydCB7IGdldFdpbmRvdywgZ2V0RG9jdW1lbnQgfSBmcm9tICdzc3Itd2luZG93JztcbmltcG9ydCAkIGZyb20gJy4uLy4uLy4uL3V0aWxzL2RvbSc7XG5pbXBvcnQgeyBleHRlbmQsIG5vdyB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL3V0aWxzJzsgLy8gTW9kaWZpZWQgZnJvbSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy81NDUyMDU1NC9jdXN0b20tZWxlbWVudC1nZXRyb290bm9kZS1jbG9zZXN0LWZ1bmN0aW9uLWNyb3NzaW5nLW11bHRpcGxlLXBhcmVudC1zaGFkb3dkXG5cbmZ1bmN0aW9uIGNsb3Nlc3RFbGVtZW50KHNlbGVjdG9yLCBiYXNlKSB7XG4gIGlmIChiYXNlID09PSB2b2lkIDApIHtcbiAgICBiYXNlID0gdGhpcztcbiAgfVxuXG4gIGZ1bmN0aW9uIF9fY2xvc2VzdEZyb20oZWwpIHtcbiAgICBpZiAoIWVsIHx8IGVsID09PSBnZXREb2N1bWVudCgpIHx8IGVsID09PSBnZXRXaW5kb3coKSkgcmV0dXJuIG51bGw7XG4gICAgaWYgKGVsLmFzc2lnbmVkU2xvdCkgZWwgPSBlbC5hc3NpZ25lZFNsb3Q7XG4gICAgdmFyIGZvdW5kID0gZWwuY2xvc2VzdChzZWxlY3Rvcik7XG4gICAgcmV0dXJuIGZvdW5kIHx8IF9fY2xvc2VzdEZyb20oZWwuZ2V0Um9vdE5vZGUoKS5ob3N0KTtcbiAgfVxuXG4gIHJldHVybiBfX2Nsb3Nlc3RGcm9tKGJhc2UpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBvblRvdWNoU3RhcnQoZXZlbnQpIHtcbiAgdmFyIHN3aXBlciA9IHRoaXM7XG4gIHZhciBkb2N1bWVudCA9IGdldERvY3VtZW50KCk7XG4gIHZhciB3aW5kb3cgPSBnZXRXaW5kb3coKTtcbiAgdmFyIGRhdGEgPSBzd2lwZXIudG91Y2hFdmVudHNEYXRhO1xuICB2YXIgcGFyYW1zID0gc3dpcGVyLnBhcmFtcyxcbiAgICAgIHRvdWNoZXMgPSBzd2lwZXIudG91Y2hlcyxcbiAgICAgIGVuYWJsZWQgPSBzd2lwZXIuZW5hYmxlZDtcbiAgaWYgKCFlbmFibGVkKSByZXR1cm47XG5cbiAgaWYgKHN3aXBlci5hbmltYXRpbmcgJiYgcGFyYW1zLnByZXZlbnRJbnRlcmFjdGlvbk9uVHJhbnNpdGlvbikge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBlID0gZXZlbnQ7XG4gIGlmIChlLm9yaWdpbmFsRXZlbnQpIGUgPSBlLm9yaWdpbmFsRXZlbnQ7XG4gIHZhciAkdGFyZ2V0RWwgPSAkKGUudGFyZ2V0KTtcblxuICBpZiAocGFyYW1zLnRvdWNoRXZlbnRzVGFyZ2V0ID09PSAnd3JhcHBlcicpIHtcbiAgICBpZiAoISR0YXJnZXRFbC5jbG9zZXN0KHN3aXBlci53cmFwcGVyRWwpLmxlbmd0aCkgcmV0dXJuO1xuICB9XG5cbiAgZGF0YS5pc1RvdWNoRXZlbnQgPSBlLnR5cGUgPT09ICd0b3VjaHN0YXJ0JztcbiAgaWYgKCFkYXRhLmlzVG91Y2hFdmVudCAmJiAnd2hpY2gnIGluIGUgJiYgZS53aGljaCA9PT0gMykgcmV0dXJuO1xuICBpZiAoIWRhdGEuaXNUb3VjaEV2ZW50ICYmICdidXR0b24nIGluIGUgJiYgZS5idXR0b24gPiAwKSByZXR1cm47XG4gIGlmIChkYXRhLmlzVG91Y2hlZCAmJiBkYXRhLmlzTW92ZWQpIHJldHVybjsgLy8gY2hhbmdlIHRhcmdldCBlbCBmb3Igc2hhZG93IHJvb3QgY29tcG9uZW50XG5cbiAgdmFyIHN3aXBpbmdDbGFzc0hhc1ZhbHVlID0gISFwYXJhbXMubm9Td2lwaW5nQ2xhc3MgJiYgcGFyYW1zLm5vU3dpcGluZ0NsYXNzICE9PSAnJztcblxuICBpZiAoc3dpcGluZ0NsYXNzSGFzVmFsdWUgJiYgZS50YXJnZXQgJiYgZS50YXJnZXQuc2hhZG93Um9vdCAmJiBldmVudC5wYXRoICYmIGV2ZW50LnBhdGhbMF0pIHtcbiAgICAkdGFyZ2V0RWwgPSAkKGV2ZW50LnBhdGhbMF0pO1xuICB9XG5cbiAgdmFyIG5vU3dpcGluZ1NlbGVjdG9yID0gcGFyYW1zLm5vU3dpcGluZ1NlbGVjdG9yID8gcGFyYW1zLm5vU3dpcGluZ1NlbGVjdG9yIDogXCIuXCIgKyBwYXJhbXMubm9Td2lwaW5nQ2xhc3M7XG4gIHZhciBpc1RhcmdldFNoYWRvdyA9ICEhKGUudGFyZ2V0ICYmIGUudGFyZ2V0LnNoYWRvd1Jvb3QpOyAvLyB1c2UgY2xvc2VzdEVsZW1lbnQgZm9yIHNoYWRvdyByb290IGVsZW1lbnQgdG8gZ2V0IHRoZSBhY3R1YWwgY2xvc2VzdCBmb3IgbmVzdGVkIHNoYWRvdyByb290IGVsZW1lbnRcblxuICBpZiAocGFyYW1zLm5vU3dpcGluZyAmJiAoaXNUYXJnZXRTaGFkb3cgPyBjbG9zZXN0RWxlbWVudChub1N3aXBpbmdTZWxlY3RvciwgZS50YXJnZXQpIDogJHRhcmdldEVsLmNsb3Nlc3Qobm9Td2lwaW5nU2VsZWN0b3IpWzBdKSkge1xuICAgIHN3aXBlci5hbGxvd0NsaWNrID0gdHJ1ZTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAocGFyYW1zLnN3aXBlSGFuZGxlcikge1xuICAgIGlmICghJHRhcmdldEVsLmNsb3Nlc3QocGFyYW1zLnN3aXBlSGFuZGxlcilbMF0pIHJldHVybjtcbiAgfVxuXG4gIHRvdWNoZXMuY3VycmVudFggPSBlLnR5cGUgPT09ICd0b3VjaHN0YXJ0JyA/IGUudGFyZ2V0VG91Y2hlc1swXS5wYWdlWCA6IGUucGFnZVg7XG4gIHRvdWNoZXMuY3VycmVudFkgPSBlLnR5cGUgPT09ICd0b3VjaHN0YXJ0JyA/IGUudGFyZ2V0VG91Y2hlc1swXS5wYWdlWSA6IGUucGFnZVk7XG4gIHZhciBzdGFydFggPSB0b3VjaGVzLmN1cnJlbnRYO1xuICB2YXIgc3RhcnRZID0gdG91Y2hlcy5jdXJyZW50WTsgLy8gRG8gTk9UIHN0YXJ0IGlmIGlPUyBlZGdlIHN3aXBlIGlzIGRldGVjdGVkLiBPdGhlcndpc2UgaU9TIGFwcCBjYW5ub3Qgc3dpcGUtdG8tZ28tYmFjayBhbnltb3JlXG5cbiAgdmFyIGVkZ2VTd2lwZURldGVjdGlvbiA9IHBhcmFtcy5lZGdlU3dpcGVEZXRlY3Rpb24gfHwgcGFyYW1zLmlPU0VkZ2VTd2lwZURldGVjdGlvbjtcbiAgdmFyIGVkZ2VTd2lwZVRocmVzaG9sZCA9IHBhcmFtcy5lZGdlU3dpcGVUaHJlc2hvbGQgfHwgcGFyYW1zLmlPU0VkZ2VTd2lwZVRocmVzaG9sZDtcblxuICBpZiAoZWRnZVN3aXBlRGV0ZWN0aW9uICYmIChzdGFydFggPD0gZWRnZVN3aXBlVGhyZXNob2xkIHx8IHN0YXJ0WCA+PSB3aW5kb3cuaW5uZXJXaWR0aCAtIGVkZ2VTd2lwZVRocmVzaG9sZCkpIHtcbiAgICBpZiAoZWRnZVN3aXBlRGV0ZWN0aW9uID09PSAncHJldmVudCcpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cblxuICBleHRlbmQoZGF0YSwge1xuICAgIGlzVG91Y2hlZDogdHJ1ZSxcbiAgICBpc01vdmVkOiBmYWxzZSxcbiAgICBhbGxvd1RvdWNoQ2FsbGJhY2tzOiB0cnVlLFxuICAgIGlzU2Nyb2xsaW5nOiB1bmRlZmluZWQsXG4gICAgc3RhcnRNb3Zpbmc6IHVuZGVmaW5lZFxuICB9KTtcbiAgdG91Y2hlcy5zdGFydFggPSBzdGFydFg7XG4gIHRvdWNoZXMuc3RhcnRZID0gc3RhcnRZO1xuICBkYXRhLnRvdWNoU3RhcnRUaW1lID0gbm93KCk7XG4gIHN3aXBlci5hbGxvd0NsaWNrID0gdHJ1ZTtcbiAgc3dpcGVyLnVwZGF0ZVNpemUoKTtcbiAgc3dpcGVyLnN3aXBlRGlyZWN0aW9uID0gdW5kZWZpbmVkO1xuICBpZiAocGFyYW1zLnRocmVzaG9sZCA+IDApIGRhdGEuYWxsb3dUaHJlc2hvbGRNb3ZlID0gZmFsc2U7XG5cbiAgaWYgKGUudHlwZSAhPT0gJ3RvdWNoc3RhcnQnKSB7XG4gICAgdmFyIHByZXZlbnREZWZhdWx0ID0gdHJ1ZTtcbiAgICBpZiAoJHRhcmdldEVsLmlzKGRhdGEuZm9jdXNhYmxlRWxlbWVudHMpKSBwcmV2ZW50RGVmYXVsdCA9IGZhbHNlO1xuXG4gICAgaWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgJiYgJChkb2N1bWVudC5hY3RpdmVFbGVtZW50KS5pcyhkYXRhLmZvY3VzYWJsZUVsZW1lbnRzKSAmJiBkb2N1bWVudC5hY3RpdmVFbGVtZW50ICE9PSAkdGFyZ2V0RWxbMF0pIHtcbiAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuYmx1cigpO1xuICAgIH1cblxuICAgIHZhciBzaG91bGRQcmV2ZW50RGVmYXVsdCA9IHByZXZlbnREZWZhdWx0ICYmIHN3aXBlci5hbGxvd1RvdWNoTW92ZSAmJiBwYXJhbXMudG91Y2hTdGFydFByZXZlbnREZWZhdWx0O1xuXG4gICAgaWYgKChwYXJhbXMudG91Y2hTdGFydEZvcmNlUHJldmVudERlZmF1bHQgfHwgc2hvdWxkUHJldmVudERlZmF1bHQpICYmICEkdGFyZ2V0RWxbMF0uaXNDb250ZW50RWRpdGFibGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH1cblxuICBzd2lwZXIuZW1pdCgndG91Y2hTdGFydCcsIGUpO1xufSIsImltcG9ydCBzZXRHcmFiQ3Vyc29yIGZyb20gJy4vc2V0R3JhYkN1cnNvcic7XG5pbXBvcnQgdW5zZXRHcmFiQ3Vyc29yIGZyb20gJy4vdW5zZXRHcmFiQ3Vyc29yJztcbmV4cG9ydCBkZWZhdWx0IHtcbiAgc2V0R3JhYkN1cnNvcjogc2V0R3JhYkN1cnNvcixcbiAgdW5zZXRHcmFiQ3Vyc29yOiB1bnNldEdyYWJDdXJzb3Jcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2V0R3JhYkN1cnNvcihtb3ZpbmcpIHtcbiAgdmFyIHN3aXBlciA9IHRoaXM7XG4gIGlmIChzd2lwZXIuc3VwcG9ydC50b3VjaCB8fCAhc3dpcGVyLnBhcmFtcy5zaW11bGF0ZVRvdWNoIHx8IHN3aXBlci5wYXJhbXMud2F0Y2hPdmVyZmxvdyAmJiBzd2lwZXIuaXNMb2NrZWQgfHwgc3dpcGVyLnBhcmFtcy5jc3NNb2RlKSByZXR1cm47XG4gIHZhciBlbCA9IHN3aXBlci5lbDtcbiAgZWwuc3R5bGUuY3Vyc29yID0gJ21vdmUnO1xuICBlbC5zdHlsZS5jdXJzb3IgPSBtb3ZpbmcgPyAnLXdlYmtpdC1ncmFiYmluZycgOiAnLXdlYmtpdC1ncmFiJztcbiAgZWwuc3R5bGUuY3Vyc29yID0gbW92aW5nID8gJy1tb3otZ3JhYmJpbicgOiAnLW1vei1ncmFiJztcbiAgZWwuc3R5bGUuY3Vyc29yID0gbW92aW5nID8gJ2dyYWJiaW5nJyA6ICdncmFiJztcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1bnNldEdyYWJDdXJzb3IoKSB7XG4gIHZhciBzd2lwZXIgPSB0aGlzO1xuXG4gIGlmIChzd2lwZXIuc3VwcG9ydC50b3VjaCB8fCBzd2lwZXIucGFyYW1zLndhdGNoT3ZlcmZsb3cgJiYgc3dpcGVyLmlzTG9ja2VkIHx8IHN3aXBlci5wYXJhbXMuY3NzTW9kZSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHN3aXBlci5lbC5zdHlsZS5jdXJzb3IgPSAnJztcbn0iLCJpbXBvcnQgbG9hZEltYWdlIGZyb20gJy4vbG9hZEltYWdlJztcbmltcG9ydCBwcmVsb2FkSW1hZ2VzIGZyb20gJy4vcHJlbG9hZEltYWdlcyc7XG5leHBvcnQgZGVmYXVsdCB7XG4gIGxvYWRJbWFnZTogbG9hZEltYWdlLFxuICBwcmVsb2FkSW1hZ2VzOiBwcmVsb2FkSW1hZ2VzXG59OyIsImltcG9ydCB7IGdldFdpbmRvdyB9IGZyb20gJ3Nzci13aW5kb3cnO1xuaW1wb3J0ICQgZnJvbSAnLi4vLi4vLi4vdXRpbHMvZG9tJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRJbWFnZShpbWFnZUVsLCBzcmMsIHNyY3NldCwgc2l6ZXMsIGNoZWNrRm9yQ29tcGxldGUsIGNhbGxiYWNrKSB7XG4gIHZhciB3aW5kb3cgPSBnZXRXaW5kb3coKTtcbiAgdmFyIGltYWdlO1xuXG4gIGZ1bmN0aW9uIG9uUmVhZHkoKSB7XG4gICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjaygpO1xuICB9XG5cbiAgdmFyIGlzUGljdHVyZSA9ICQoaW1hZ2VFbCkucGFyZW50KCdwaWN0dXJlJylbMF07XG5cbiAgaWYgKCFpc1BpY3R1cmUgJiYgKCFpbWFnZUVsLmNvbXBsZXRlIHx8ICFjaGVja0ZvckNvbXBsZXRlKSkge1xuICAgIGlmIChzcmMpIHtcbiAgICAgIGltYWdlID0gbmV3IHdpbmRvdy5JbWFnZSgpO1xuICAgICAgaW1hZ2Uub25sb2FkID0gb25SZWFkeTtcbiAgICAgIGltYWdlLm9uZXJyb3IgPSBvblJlYWR5O1xuXG4gICAgICBpZiAoc2l6ZXMpIHtcbiAgICAgICAgaW1hZ2Uuc2l6ZXMgPSBzaXplcztcbiAgICAgIH1cblxuICAgICAgaWYgKHNyY3NldCkge1xuICAgICAgICBpbWFnZS5zcmNzZXQgPSBzcmNzZXQ7XG4gICAgICB9XG5cbiAgICAgIGlmIChzcmMpIHtcbiAgICAgICAgaW1hZ2Uuc3JjID0gc3JjO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBvblJlYWR5KCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIGltYWdlIGFscmVhZHkgbG9hZGVkLi4uXG4gICAgb25SZWFkeSgpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJlbG9hZEltYWdlcygpIHtcbiAgdmFyIHN3aXBlciA9IHRoaXM7XG4gIHN3aXBlci5pbWFnZXNUb0xvYWQgPSBzd2lwZXIuJGVsLmZpbmQoJ2ltZycpO1xuXG4gIGZ1bmN0aW9uIG9uUmVhZHkoKSB7XG4gICAgaWYgKHR5cGVvZiBzd2lwZXIgPT09ICd1bmRlZmluZWQnIHx8IHN3aXBlciA9PT0gbnVsbCB8fCAhc3dpcGVyIHx8IHN3aXBlci5kZXN0cm95ZWQpIHJldHVybjtcbiAgICBpZiAoc3dpcGVyLmltYWdlc0xvYWRlZCAhPT0gdW5kZWZpbmVkKSBzd2lwZXIuaW1hZ2VzTG9hZGVkICs9IDE7XG5cbiAgICBpZiAoc3dpcGVyLmltYWdlc0xvYWRlZCA9PT0gc3dpcGVyLmltYWdlc1RvTG9hZC5sZW5ndGgpIHtcbiAgICAgIGlmIChzd2lwZXIucGFyYW1zLnVwZGF0ZU9uSW1hZ2VzUmVhZHkpIHN3aXBlci51cGRhdGUoKTtcbiAgICAgIHN3aXBlci5lbWl0KCdpbWFnZXNSZWFkeScpO1xuICAgIH1cbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3dpcGVyLmltYWdlc1RvTG9hZC5sZW5ndGg7IGkgKz0gMSkge1xuICAgIHZhciBpbWFnZUVsID0gc3dpcGVyLmltYWdlc1RvTG9hZFtpXTtcbiAgICBzd2lwZXIubG9hZEltYWdlKGltYWdlRWwsIGltYWdlRWwuY3VycmVudFNyYyB8fCBpbWFnZUVsLmdldEF0dHJpYnV0ZSgnc3JjJyksIGltYWdlRWwuc3Jjc2V0IHx8IGltYWdlRWwuZ2V0QXR0cmlidXRlKCdzcmNzZXQnKSwgaW1hZ2VFbC5zaXplcyB8fCBpbWFnZUVsLmdldEF0dHJpYnV0ZSgnc2l6ZXMnKSwgdHJ1ZSwgb25SZWFkeSk7XG4gIH1cbn0iLCJpbXBvcnQgbG9vcENyZWF0ZSBmcm9tICcuL2xvb3BDcmVhdGUnO1xuaW1wb3J0IGxvb3BGaXggZnJvbSAnLi9sb29wRml4JztcbmltcG9ydCBsb29wRGVzdHJveSBmcm9tICcuL2xvb3BEZXN0cm95JztcbmV4cG9ydCBkZWZhdWx0IHtcbiAgbG9vcENyZWF0ZTogbG9vcENyZWF0ZSxcbiAgbG9vcEZpeDogbG9vcEZpeCxcbiAgbG9vcERlc3Ryb3k6IGxvb3BEZXN0cm95XG59OyIsImltcG9ydCB7IGdldERvY3VtZW50IH0gZnJvbSAnc3NyLXdpbmRvdyc7XG5pbXBvcnQgJCBmcm9tICcuLi8uLi8uLi91dGlscy9kb20nO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9vcENyZWF0ZSgpIHtcbiAgdmFyIHN3aXBlciA9IHRoaXM7XG4gIHZhciBkb2N1bWVudCA9IGdldERvY3VtZW50KCk7XG4gIHZhciBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLFxuICAgICAgJHdyYXBwZXJFbCA9IHN3aXBlci4kd3JhcHBlckVsOyAvLyBSZW1vdmUgZHVwbGljYXRlZCBzbGlkZXNcblxuICAkd3JhcHBlckVsLmNoaWxkcmVuKFwiLlwiICsgcGFyYW1zLnNsaWRlQ2xhc3MgKyBcIi5cIiArIHBhcmFtcy5zbGlkZUR1cGxpY2F0ZUNsYXNzKS5yZW1vdmUoKTtcbiAgdmFyIHNsaWRlcyA9ICR3cmFwcGVyRWwuY2hpbGRyZW4oXCIuXCIgKyBwYXJhbXMuc2xpZGVDbGFzcyk7XG5cbiAgaWYgKHBhcmFtcy5sb29wRmlsbEdyb3VwV2l0aEJsYW5rKSB7XG4gICAgdmFyIGJsYW5rU2xpZGVzTnVtID0gcGFyYW1zLnNsaWRlc1Blckdyb3VwIC0gc2xpZGVzLmxlbmd0aCAlIHBhcmFtcy5zbGlkZXNQZXJHcm91cDtcblxuICAgIGlmIChibGFua1NsaWRlc051bSAhPT0gcGFyYW1zLnNsaWRlc1Blckdyb3VwKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJsYW5rU2xpZGVzTnVtOyBpICs9IDEpIHtcbiAgICAgICAgdmFyIGJsYW5rTm9kZSA9ICQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpLmFkZENsYXNzKHBhcmFtcy5zbGlkZUNsYXNzICsgXCIgXCIgKyBwYXJhbXMuc2xpZGVCbGFua0NsYXNzKTtcbiAgICAgICAgJHdyYXBwZXJFbC5hcHBlbmQoYmxhbmtOb2RlKTtcbiAgICAgIH1cblxuICAgICAgc2xpZGVzID0gJHdyYXBwZXJFbC5jaGlsZHJlbihcIi5cIiArIHBhcmFtcy5zbGlkZUNsYXNzKTtcbiAgICB9XG4gIH1cblxuICBpZiAocGFyYW1zLnNsaWRlc1BlclZpZXcgPT09ICdhdXRvJyAmJiAhcGFyYW1zLmxvb3BlZFNsaWRlcykgcGFyYW1zLmxvb3BlZFNsaWRlcyA9IHNsaWRlcy5sZW5ndGg7XG4gIHN3aXBlci5sb29wZWRTbGlkZXMgPSBNYXRoLmNlaWwocGFyc2VGbG9hdChwYXJhbXMubG9vcGVkU2xpZGVzIHx8IHBhcmFtcy5zbGlkZXNQZXJWaWV3LCAxMCkpO1xuICBzd2lwZXIubG9vcGVkU2xpZGVzICs9IHBhcmFtcy5sb29wQWRkaXRpb25hbFNsaWRlcztcblxuICBpZiAoc3dpcGVyLmxvb3BlZFNsaWRlcyA+IHNsaWRlcy5sZW5ndGgpIHtcbiAgICBzd2lwZXIubG9vcGVkU2xpZGVzID0gc2xpZGVzLmxlbmd0aDtcbiAgfVxuXG4gIHZhciBwcmVwZW5kU2xpZGVzID0gW107XG4gIHZhciBhcHBlbmRTbGlkZXMgPSBbXTtcbiAgc2xpZGVzLmVhY2goZnVuY3Rpb24gKGVsLCBpbmRleCkge1xuICAgIHZhciBzbGlkZSA9ICQoZWwpO1xuXG4gICAgaWYgKGluZGV4IDwgc3dpcGVyLmxvb3BlZFNsaWRlcykge1xuICAgICAgYXBwZW5kU2xpZGVzLnB1c2goZWwpO1xuICAgIH1cblxuICAgIGlmIChpbmRleCA8IHNsaWRlcy5sZW5ndGggJiYgaW5kZXggPj0gc2xpZGVzLmxlbmd0aCAtIHN3aXBlci5sb29wZWRTbGlkZXMpIHtcbiAgICAgIHByZXBlbmRTbGlkZXMucHVzaChlbCk7XG4gICAgfVxuXG4gICAgc2xpZGUuYXR0cignZGF0YS1zd2lwZXItc2xpZGUtaW5kZXgnLCBpbmRleCk7XG4gIH0pO1xuXG4gIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcHBlbmRTbGlkZXMubGVuZ3RoOyBfaSArPSAxKSB7XG4gICAgJHdyYXBwZXJFbC5hcHBlbmQoJChhcHBlbmRTbGlkZXNbX2ldLmNsb25lTm9kZSh0cnVlKSkuYWRkQ2xhc3MocGFyYW1zLnNsaWRlRHVwbGljYXRlQ2xhc3MpKTtcbiAgfVxuXG4gIGZvciAodmFyIF9pMiA9IHByZXBlbmRTbGlkZXMubGVuZ3RoIC0gMTsgX2kyID49IDA7IF9pMiAtPSAxKSB7XG4gICAgJHdyYXBwZXJFbC5wcmVwZW5kKCQocHJlcGVuZFNsaWRlc1tfaTJdLmNsb25lTm9kZSh0cnVlKSkuYWRkQ2xhc3MocGFyYW1zLnNsaWRlRHVwbGljYXRlQ2xhc3MpKTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvb3BEZXN0cm95KCkge1xuICB2YXIgc3dpcGVyID0gdGhpcztcbiAgdmFyICR3cmFwcGVyRWwgPSBzd2lwZXIuJHdyYXBwZXJFbCxcbiAgICAgIHBhcmFtcyA9IHN3aXBlci5wYXJhbXMsXG4gICAgICBzbGlkZXMgPSBzd2lwZXIuc2xpZGVzO1xuICAkd3JhcHBlckVsLmNoaWxkcmVuKFwiLlwiICsgcGFyYW1zLnNsaWRlQ2xhc3MgKyBcIi5cIiArIHBhcmFtcy5zbGlkZUR1cGxpY2F0ZUNsYXNzICsgXCIsLlwiICsgcGFyYW1zLnNsaWRlQ2xhc3MgKyBcIi5cIiArIHBhcmFtcy5zbGlkZUJsYW5rQ2xhc3MpLnJlbW92ZSgpO1xuICBzbGlkZXMucmVtb3ZlQXR0cignZGF0YS1zd2lwZXItc2xpZGUtaW5kZXgnKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb29wRml4KCkge1xuICB2YXIgc3dpcGVyID0gdGhpcztcbiAgc3dpcGVyLmVtaXQoJ2JlZm9yZUxvb3BGaXgnKTtcbiAgdmFyIGFjdGl2ZUluZGV4ID0gc3dpcGVyLmFjdGl2ZUluZGV4LFxuICAgICAgc2xpZGVzID0gc3dpcGVyLnNsaWRlcyxcbiAgICAgIGxvb3BlZFNsaWRlcyA9IHN3aXBlci5sb29wZWRTbGlkZXMsXG4gICAgICBhbGxvd1NsaWRlUHJldiA9IHN3aXBlci5hbGxvd1NsaWRlUHJldixcbiAgICAgIGFsbG93U2xpZGVOZXh0ID0gc3dpcGVyLmFsbG93U2xpZGVOZXh0LFxuICAgICAgc25hcEdyaWQgPSBzd2lwZXIuc25hcEdyaWQsXG4gICAgICBydGwgPSBzd2lwZXIucnRsVHJhbnNsYXRlO1xuICB2YXIgbmV3SW5kZXg7XG4gIHN3aXBlci5hbGxvd1NsaWRlUHJldiA9IHRydWU7XG4gIHN3aXBlci5hbGxvd1NsaWRlTmV4dCA9IHRydWU7XG4gIHZhciBzbmFwVHJhbnNsYXRlID0gLXNuYXBHcmlkW2FjdGl2ZUluZGV4XTtcbiAgdmFyIGRpZmYgPSBzbmFwVHJhbnNsYXRlIC0gc3dpcGVyLmdldFRyYW5zbGF0ZSgpOyAvLyBGaXggRm9yIE5lZ2F0aXZlIE92ZXJzbGlkaW5nXG5cbiAgaWYgKGFjdGl2ZUluZGV4IDwgbG9vcGVkU2xpZGVzKSB7XG4gICAgbmV3SW5kZXggPSBzbGlkZXMubGVuZ3RoIC0gbG9vcGVkU2xpZGVzICogMyArIGFjdGl2ZUluZGV4O1xuICAgIG5ld0luZGV4ICs9IGxvb3BlZFNsaWRlcztcbiAgICB2YXIgc2xpZGVDaGFuZ2VkID0gc3dpcGVyLnNsaWRlVG8obmV3SW5kZXgsIDAsIGZhbHNlLCB0cnVlKTtcblxuICAgIGlmIChzbGlkZUNoYW5nZWQgJiYgZGlmZiAhPT0gMCkge1xuICAgICAgc3dpcGVyLnNldFRyYW5zbGF0ZSgocnRsID8gLXN3aXBlci50cmFuc2xhdGUgOiBzd2lwZXIudHJhbnNsYXRlKSAtIGRpZmYpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChhY3RpdmVJbmRleCA+PSBzbGlkZXMubGVuZ3RoIC0gbG9vcGVkU2xpZGVzKSB7XG4gICAgLy8gRml4IEZvciBQb3NpdGl2ZSBPdmVyc2xpZGluZ1xuICAgIG5ld0luZGV4ID0gLXNsaWRlcy5sZW5ndGggKyBhY3RpdmVJbmRleCArIGxvb3BlZFNsaWRlcztcbiAgICBuZXdJbmRleCArPSBsb29wZWRTbGlkZXM7XG5cbiAgICB2YXIgX3NsaWRlQ2hhbmdlZCA9IHN3aXBlci5zbGlkZVRvKG5ld0luZGV4LCAwLCBmYWxzZSwgdHJ1ZSk7XG5cbiAgICBpZiAoX3NsaWRlQ2hhbmdlZCAmJiBkaWZmICE9PSAwKSB7XG4gICAgICBzd2lwZXIuc2V0VHJhbnNsYXRlKChydGwgPyAtc3dpcGVyLnRyYW5zbGF0ZSA6IHN3aXBlci50cmFuc2xhdGUpIC0gZGlmZik7XG4gICAgfVxuICB9XG5cbiAgc3dpcGVyLmFsbG93U2xpZGVQcmV2ID0gYWxsb3dTbGlkZVByZXY7XG4gIHN3aXBlci5hbGxvd1NsaWRlTmV4dCA9IGFsbG93U2xpZGVOZXh0O1xuICBzd2lwZXIuZW1pdCgnbG9vcEZpeCcpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZFNsaWRlKGluZGV4LCBzbGlkZXMpIHtcbiAgdmFyIHN3aXBlciA9IHRoaXM7XG4gIHZhciAkd3JhcHBlckVsID0gc3dpcGVyLiR3cmFwcGVyRWwsXG4gICAgICBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLFxuICAgICAgYWN0aXZlSW5kZXggPSBzd2lwZXIuYWN0aXZlSW5kZXg7XG4gIHZhciBhY3RpdmVJbmRleEJ1ZmZlciA9IGFjdGl2ZUluZGV4O1xuXG4gIGlmIChwYXJhbXMubG9vcCkge1xuICAgIGFjdGl2ZUluZGV4QnVmZmVyIC09IHN3aXBlci5sb29wZWRTbGlkZXM7XG4gICAgc3dpcGVyLmxvb3BEZXN0cm95KCk7XG4gICAgc3dpcGVyLnNsaWRlcyA9ICR3cmFwcGVyRWwuY2hpbGRyZW4oXCIuXCIgKyBwYXJhbXMuc2xpZGVDbGFzcyk7XG4gIH1cblxuICB2YXIgYmFzZUxlbmd0aCA9IHN3aXBlci5zbGlkZXMubGVuZ3RoO1xuXG4gIGlmIChpbmRleCA8PSAwKSB7XG4gICAgc3dpcGVyLnByZXBlbmRTbGlkZShzbGlkZXMpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChpbmRleCA+PSBiYXNlTGVuZ3RoKSB7XG4gICAgc3dpcGVyLmFwcGVuZFNsaWRlKHNsaWRlcyk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIG5ld0FjdGl2ZUluZGV4ID0gYWN0aXZlSW5kZXhCdWZmZXIgPiBpbmRleCA/IGFjdGl2ZUluZGV4QnVmZmVyICsgMSA6IGFjdGl2ZUluZGV4QnVmZmVyO1xuICB2YXIgc2xpZGVzQnVmZmVyID0gW107XG5cbiAgZm9yICh2YXIgaSA9IGJhc2VMZW5ndGggLSAxOyBpID49IGluZGV4OyBpIC09IDEpIHtcbiAgICB2YXIgY3VycmVudFNsaWRlID0gc3dpcGVyLnNsaWRlcy5lcShpKTtcbiAgICBjdXJyZW50U2xpZGUucmVtb3ZlKCk7XG4gICAgc2xpZGVzQnVmZmVyLnVuc2hpZnQoY3VycmVudFNsaWRlKTtcbiAgfVxuXG4gIGlmICh0eXBlb2Ygc2xpZGVzID09PSAnb2JqZWN0JyAmJiAnbGVuZ3RoJyBpbiBzbGlkZXMpIHtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgc2xpZGVzLmxlbmd0aDsgX2kgKz0gMSkge1xuICAgICAgaWYgKHNsaWRlc1tfaV0pICR3cmFwcGVyRWwuYXBwZW5kKHNsaWRlc1tfaV0pO1xuICAgIH1cblxuICAgIG5ld0FjdGl2ZUluZGV4ID0gYWN0aXZlSW5kZXhCdWZmZXIgPiBpbmRleCA/IGFjdGl2ZUluZGV4QnVmZmVyICsgc2xpZGVzLmxlbmd0aCA6IGFjdGl2ZUluZGV4QnVmZmVyO1xuICB9IGVsc2Uge1xuICAgICR3cmFwcGVyRWwuYXBwZW5kKHNsaWRlcyk7XG4gIH1cblxuICBmb3IgKHZhciBfaTIgPSAwOyBfaTIgPCBzbGlkZXNCdWZmZXIubGVuZ3RoOyBfaTIgKz0gMSkge1xuICAgICR3cmFwcGVyRWwuYXBwZW5kKHNsaWRlc0J1ZmZlcltfaTJdKTtcbiAgfVxuXG4gIGlmIChwYXJhbXMubG9vcCkge1xuICAgIHN3aXBlci5sb29wQ3JlYXRlKCk7XG4gIH1cblxuICBpZiAoIShwYXJhbXMub2JzZXJ2ZXIgJiYgc3dpcGVyLnN1cHBvcnQub2JzZXJ2ZXIpKSB7XG4gICAgc3dpcGVyLnVwZGF0ZSgpO1xuICB9XG5cbiAgaWYgKHBhcmFtcy5sb29wKSB7XG4gICAgc3dpcGVyLnNsaWRlVG8obmV3QWN0aXZlSW5kZXggKyBzd2lwZXIubG9vcGVkU2xpZGVzLCAwLCBmYWxzZSk7XG4gIH0gZWxzZSB7XG4gICAgc3dpcGVyLnNsaWRlVG8obmV3QWN0aXZlSW5kZXgsIDAsIGZhbHNlKTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFwcGVuZFNsaWRlKHNsaWRlcykge1xuICB2YXIgc3dpcGVyID0gdGhpcztcbiAgdmFyICR3cmFwcGVyRWwgPSBzd2lwZXIuJHdyYXBwZXJFbCxcbiAgICAgIHBhcmFtcyA9IHN3aXBlci5wYXJhbXM7XG5cbiAgaWYgKHBhcmFtcy5sb29wKSB7XG4gICAgc3dpcGVyLmxvb3BEZXN0cm95KCk7XG4gIH1cblxuICBpZiAodHlwZW9mIHNsaWRlcyA9PT0gJ29iamVjdCcgJiYgJ2xlbmd0aCcgaW4gc2xpZGVzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzbGlkZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmIChzbGlkZXNbaV0pICR3cmFwcGVyRWwuYXBwZW5kKHNsaWRlc1tpXSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgICR3cmFwcGVyRWwuYXBwZW5kKHNsaWRlcyk7XG4gIH1cblxuICBpZiAocGFyYW1zLmxvb3ApIHtcbiAgICBzd2lwZXIubG9vcENyZWF0ZSgpO1xuICB9XG5cbiAgaWYgKCEocGFyYW1zLm9ic2VydmVyICYmIHN3aXBlci5zdXBwb3J0Lm9ic2VydmVyKSkge1xuICAgIHN3aXBlci51cGRhdGUoKTtcbiAgfVxufSIsImltcG9ydCBhcHBlbmRTbGlkZSBmcm9tICcuL2FwcGVuZFNsaWRlJztcbmltcG9ydCBwcmVwZW5kU2xpZGUgZnJvbSAnLi9wcmVwZW5kU2xpZGUnO1xuaW1wb3J0IGFkZFNsaWRlIGZyb20gJy4vYWRkU2xpZGUnO1xuaW1wb3J0IHJlbW92ZVNsaWRlIGZyb20gJy4vcmVtb3ZlU2xpZGUnO1xuaW1wb3J0IHJlbW92ZUFsbFNsaWRlcyBmcm9tICcuL3JlbW92ZUFsbFNsaWRlcyc7XG5leHBvcnQgZGVmYXVsdCB7XG4gIGFwcGVuZFNsaWRlOiBhcHBlbmRTbGlkZSxcbiAgcHJlcGVuZFNsaWRlOiBwcmVwZW5kU2xpZGUsXG4gIGFkZFNsaWRlOiBhZGRTbGlkZSxcbiAgcmVtb3ZlU2xpZGU6IHJlbW92ZVNsaWRlLFxuICByZW1vdmVBbGxTbGlkZXM6IHJlbW92ZUFsbFNsaWRlc1xufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcmVwZW5kU2xpZGUoc2xpZGVzKSB7XG4gIHZhciBzd2lwZXIgPSB0aGlzO1xuICB2YXIgcGFyYW1zID0gc3dpcGVyLnBhcmFtcyxcbiAgICAgICR3cmFwcGVyRWwgPSBzd2lwZXIuJHdyYXBwZXJFbCxcbiAgICAgIGFjdGl2ZUluZGV4ID0gc3dpcGVyLmFjdGl2ZUluZGV4O1xuXG4gIGlmIChwYXJhbXMubG9vcCkge1xuICAgIHN3aXBlci5sb29wRGVzdHJveSgpO1xuICB9XG5cbiAgdmFyIG5ld0FjdGl2ZUluZGV4ID0gYWN0aXZlSW5kZXggKyAxO1xuXG4gIGlmICh0eXBlb2Ygc2xpZGVzID09PSAnb2JqZWN0JyAmJiAnbGVuZ3RoJyBpbiBzbGlkZXMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNsaWRlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKHNsaWRlc1tpXSkgJHdyYXBwZXJFbC5wcmVwZW5kKHNsaWRlc1tpXSk7XG4gICAgfVxuXG4gICAgbmV3QWN0aXZlSW5kZXggPSBhY3RpdmVJbmRleCArIHNsaWRlcy5sZW5ndGg7XG4gIH0gZWxzZSB7XG4gICAgJHdyYXBwZXJFbC5wcmVwZW5kKHNsaWRlcyk7XG4gIH1cblxuICBpZiAocGFyYW1zLmxvb3ApIHtcbiAgICBzd2lwZXIubG9vcENyZWF0ZSgpO1xuICB9XG5cbiAgaWYgKCEocGFyYW1zLm9ic2VydmVyICYmIHN3aXBlci5zdXBwb3J0Lm9ic2VydmVyKSkge1xuICAgIHN3aXBlci51cGRhdGUoKTtcbiAgfVxuXG4gIHN3aXBlci5zbGlkZVRvKG5ld0FjdGl2ZUluZGV4LCAwLCBmYWxzZSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVtb3ZlQWxsU2xpZGVzKCkge1xuICB2YXIgc3dpcGVyID0gdGhpcztcbiAgdmFyIHNsaWRlc0luZGV4ZXMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN3aXBlci5zbGlkZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBzbGlkZXNJbmRleGVzLnB1c2goaSk7XG4gIH1cblxuICBzd2lwZXIucmVtb3ZlU2xpZGUoc2xpZGVzSW5kZXhlcyk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVtb3ZlU2xpZGUoc2xpZGVzSW5kZXhlcykge1xuICB2YXIgc3dpcGVyID0gdGhpcztcbiAgdmFyIHBhcmFtcyA9IHN3aXBlci5wYXJhbXMsXG4gICAgICAkd3JhcHBlckVsID0gc3dpcGVyLiR3cmFwcGVyRWwsXG4gICAgICBhY3RpdmVJbmRleCA9IHN3aXBlci5hY3RpdmVJbmRleDtcbiAgdmFyIGFjdGl2ZUluZGV4QnVmZmVyID0gYWN0aXZlSW5kZXg7XG5cbiAgaWYgKHBhcmFtcy5sb29wKSB7XG4gICAgYWN0aXZlSW5kZXhCdWZmZXIgLT0gc3dpcGVyLmxvb3BlZFNsaWRlcztcbiAgICBzd2lwZXIubG9vcERlc3Ryb3koKTtcbiAgICBzd2lwZXIuc2xpZGVzID0gJHdyYXBwZXJFbC5jaGlsZHJlbihcIi5cIiArIHBhcmFtcy5zbGlkZUNsYXNzKTtcbiAgfVxuXG4gIHZhciBuZXdBY3RpdmVJbmRleCA9IGFjdGl2ZUluZGV4QnVmZmVyO1xuICB2YXIgaW5kZXhUb1JlbW92ZTtcblxuICBpZiAodHlwZW9mIHNsaWRlc0luZGV4ZXMgPT09ICdvYmplY3QnICYmICdsZW5ndGgnIGluIHNsaWRlc0luZGV4ZXMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNsaWRlc0luZGV4ZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGluZGV4VG9SZW1vdmUgPSBzbGlkZXNJbmRleGVzW2ldO1xuICAgICAgaWYgKHN3aXBlci5zbGlkZXNbaW5kZXhUb1JlbW92ZV0pIHN3aXBlci5zbGlkZXMuZXEoaW5kZXhUb1JlbW92ZSkucmVtb3ZlKCk7XG4gICAgICBpZiAoaW5kZXhUb1JlbW92ZSA8IG5ld0FjdGl2ZUluZGV4KSBuZXdBY3RpdmVJbmRleCAtPSAxO1xuICAgIH1cblxuICAgIG5ld0FjdGl2ZUluZGV4ID0gTWF0aC5tYXgobmV3QWN0aXZlSW5kZXgsIDApO1xuICB9IGVsc2Uge1xuICAgIGluZGV4VG9SZW1vdmUgPSBzbGlkZXNJbmRleGVzO1xuICAgIGlmIChzd2lwZXIuc2xpZGVzW2luZGV4VG9SZW1vdmVdKSBzd2lwZXIuc2xpZGVzLmVxKGluZGV4VG9SZW1vdmUpLnJlbW92ZSgpO1xuICAgIGlmIChpbmRleFRvUmVtb3ZlIDwgbmV3QWN0aXZlSW5kZXgpIG5ld0FjdGl2ZUluZGV4IC09IDE7XG4gICAgbmV3QWN0aXZlSW5kZXggPSBNYXRoLm1heChuZXdBY3RpdmVJbmRleCwgMCk7XG4gIH1cblxuICBpZiAocGFyYW1zLmxvb3ApIHtcbiAgICBzd2lwZXIubG9vcENyZWF0ZSgpO1xuICB9XG5cbiAgaWYgKCEocGFyYW1zLm9ic2VydmVyICYmIHN3aXBlci5zdXBwb3J0Lm9ic2VydmVyKSkge1xuICAgIHN3aXBlci51cGRhdGUoKTtcbiAgfVxuXG4gIGlmIChwYXJhbXMubG9vcCkge1xuICAgIHN3aXBlci5zbGlkZVRvKG5ld0FjdGl2ZUluZGV4ICsgc3dpcGVyLmxvb3BlZFNsaWRlcywgMCwgZmFsc2UpO1xuICB9IGVsc2Uge1xuICAgIHN3aXBlci5zbGlkZVRvKG5ld0FjdGl2ZUluZGV4LCAwLCBmYWxzZSk7XG4gIH1cbn0iLCJpbXBvcnQgeyBleHRlbmQgfSBmcm9tICcuLi8uLi91dGlscy91dGlscyc7XG5leHBvcnQgZGVmYXVsdCB7XG4gIHVzZVBhcmFtczogZnVuY3Rpb24gdXNlUGFyYW1zKGluc3RhbmNlUGFyYW1zKSB7XG4gICAgdmFyIGluc3RhbmNlID0gdGhpcztcbiAgICBpZiAoIWluc3RhbmNlLm1vZHVsZXMpIHJldHVybjtcbiAgICBPYmplY3Qua2V5cyhpbnN0YW5jZS5tb2R1bGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChtb2R1bGVOYW1lKSB7XG4gICAgICB2YXIgbW9kdWxlID0gaW5zdGFuY2UubW9kdWxlc1ttb2R1bGVOYW1lXTsgLy8gRXh0ZW5kIHBhcmFtc1xuXG4gICAgICBpZiAobW9kdWxlLnBhcmFtcykge1xuICAgICAgICBleHRlbmQoaW5zdGFuY2VQYXJhbXMsIG1vZHVsZS5wYXJhbXMpO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxuICB1c2VNb2R1bGVzOiBmdW5jdGlvbiB1c2VNb2R1bGVzKG1vZHVsZXNQYXJhbXMpIHtcbiAgICBpZiAobW9kdWxlc1BhcmFtcyA9PT0gdm9pZCAwKSB7XG4gICAgICBtb2R1bGVzUGFyYW1zID0ge307XG4gICAgfVxuXG4gICAgdmFyIGluc3RhbmNlID0gdGhpcztcbiAgICBpZiAoIWluc3RhbmNlLm1vZHVsZXMpIHJldHVybjtcbiAgICBPYmplY3Qua2V5cyhpbnN0YW5jZS5tb2R1bGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChtb2R1bGVOYW1lKSB7XG4gICAgICB2YXIgbW9kdWxlID0gaW5zdGFuY2UubW9kdWxlc1ttb2R1bGVOYW1lXTtcbiAgICAgIHZhciBtb2R1bGVQYXJhbXMgPSBtb2R1bGVzUGFyYW1zW21vZHVsZU5hbWVdIHx8IHt9OyAvLyBBZGQgZXZlbnQgbGlzdGVuZXJzXG5cbiAgICAgIGlmIChtb2R1bGUub24gJiYgaW5zdGFuY2Uub24pIHtcbiAgICAgICAgT2JqZWN0LmtleXMobW9kdWxlLm9uKS5mb3JFYWNoKGZ1bmN0aW9uIChtb2R1bGVFdmVudE5hbWUpIHtcbiAgICAgICAgICBpbnN0YW5jZS5vbihtb2R1bGVFdmVudE5hbWUsIG1vZHVsZS5vblttb2R1bGVFdmVudE5hbWVdKTtcbiAgICAgICAgfSk7XG4gICAgICB9IC8vIE1vZHVsZSBjcmVhdGUgY2FsbGJhY2tcblxuXG4gICAgICBpZiAobW9kdWxlLmNyZWF0ZSkge1xuICAgICAgICBtb2R1bGUuY3JlYXRlLmJpbmQoaW5zdGFuY2UpKG1vZHVsZVBhcmFtcyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn07IiwiaW1wb3J0IHNsaWRlVG8gZnJvbSAnLi9zbGlkZVRvJztcbmltcG9ydCBzbGlkZVRvTG9vcCBmcm9tICcuL3NsaWRlVG9Mb29wJztcbmltcG9ydCBzbGlkZU5leHQgZnJvbSAnLi9zbGlkZU5leHQnO1xuaW1wb3J0IHNsaWRlUHJldiBmcm9tICcuL3NsaWRlUHJldic7XG5pbXBvcnQgc2xpZGVSZXNldCBmcm9tICcuL3NsaWRlUmVzZXQnO1xuaW1wb3J0IHNsaWRlVG9DbG9zZXN0IGZyb20gJy4vc2xpZGVUb0Nsb3Nlc3QnO1xuaW1wb3J0IHNsaWRlVG9DbGlja2VkU2xpZGUgZnJvbSAnLi9zbGlkZVRvQ2xpY2tlZFNsaWRlJztcbmV4cG9ydCBkZWZhdWx0IHtcbiAgc2xpZGVUbzogc2xpZGVUbyxcbiAgc2xpZGVUb0xvb3A6IHNsaWRlVG9Mb29wLFxuICBzbGlkZU5leHQ6IHNsaWRlTmV4dCxcbiAgc2xpZGVQcmV2OiBzbGlkZVByZXYsXG4gIHNsaWRlUmVzZXQ6IHNsaWRlUmVzZXQsXG4gIHNsaWRlVG9DbG9zZXN0OiBzbGlkZVRvQ2xvc2VzdCxcbiAgc2xpZGVUb0NsaWNrZWRTbGlkZTogc2xpZGVUb0NsaWNrZWRTbGlkZVxufTsiLCIvKiBlc2xpbnQgbm8tdW51c2VkLXZhcnM6IFwib2ZmXCIgKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNsaWRlTmV4dChzcGVlZCwgcnVuQ2FsbGJhY2tzLCBpbnRlcm5hbCkge1xuICBpZiAoc3BlZWQgPT09IHZvaWQgMCkge1xuICAgIHNwZWVkID0gdGhpcy5wYXJhbXMuc3BlZWQ7XG4gIH1cblxuICBpZiAocnVuQ2FsbGJhY2tzID09PSB2b2lkIDApIHtcbiAgICBydW5DYWxsYmFja3MgPSB0cnVlO1xuICB9XG5cbiAgdmFyIHN3aXBlciA9IHRoaXM7XG4gIHZhciBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLFxuICAgICAgYW5pbWF0aW5nID0gc3dpcGVyLmFuaW1hdGluZyxcbiAgICAgIGVuYWJsZWQgPSBzd2lwZXIuZW5hYmxlZDtcbiAgaWYgKCFlbmFibGVkKSByZXR1cm4gc3dpcGVyO1xuICB2YXIgaW5jcmVtZW50ID0gc3dpcGVyLmFjdGl2ZUluZGV4IDwgcGFyYW1zLnNsaWRlc1Blckdyb3VwU2tpcCA/IDEgOiBwYXJhbXMuc2xpZGVzUGVyR3JvdXA7XG5cbiAgaWYgKHBhcmFtcy5sb29wKSB7XG4gICAgaWYgKGFuaW1hdGluZyAmJiBwYXJhbXMubG9vcFByZXZlbnRzU2xpZGUpIHJldHVybiBmYWxzZTtcbiAgICBzd2lwZXIubG9vcEZpeCgpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcblxuICAgIHN3aXBlci5fY2xpZW50TGVmdCA9IHN3aXBlci4kd3JhcHBlckVsWzBdLmNsaWVudExlZnQ7XG4gIH1cblxuICByZXR1cm4gc3dpcGVyLnNsaWRlVG8oc3dpcGVyLmFjdGl2ZUluZGV4ICsgaW5jcmVtZW50LCBzcGVlZCwgcnVuQ2FsbGJhY2tzLCBpbnRlcm5hbCk7XG59IiwiLyogZXNsaW50IG5vLXVudXNlZC12YXJzOiBcIm9mZlwiICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzbGlkZVByZXYoc3BlZWQsIHJ1bkNhbGxiYWNrcywgaW50ZXJuYWwpIHtcbiAgaWYgKHNwZWVkID09PSB2b2lkIDApIHtcbiAgICBzcGVlZCA9IHRoaXMucGFyYW1zLnNwZWVkO1xuICB9XG5cbiAgaWYgKHJ1bkNhbGxiYWNrcyA9PT0gdm9pZCAwKSB7XG4gICAgcnVuQ2FsbGJhY2tzID0gdHJ1ZTtcbiAgfVxuXG4gIHZhciBzd2lwZXIgPSB0aGlzO1xuICB2YXIgcGFyYW1zID0gc3dpcGVyLnBhcmFtcyxcbiAgICAgIGFuaW1hdGluZyA9IHN3aXBlci5hbmltYXRpbmcsXG4gICAgICBzbmFwR3JpZCA9IHN3aXBlci5zbmFwR3JpZCxcbiAgICAgIHNsaWRlc0dyaWQgPSBzd2lwZXIuc2xpZGVzR3JpZCxcbiAgICAgIHJ0bFRyYW5zbGF0ZSA9IHN3aXBlci5ydGxUcmFuc2xhdGUsXG4gICAgICBlbmFibGVkID0gc3dpcGVyLmVuYWJsZWQ7XG4gIGlmICghZW5hYmxlZCkgcmV0dXJuIHN3aXBlcjtcblxuICBpZiAocGFyYW1zLmxvb3ApIHtcbiAgICBpZiAoYW5pbWF0aW5nICYmIHBhcmFtcy5sb29wUHJldmVudHNTbGlkZSkgcmV0dXJuIGZhbHNlO1xuICAgIHN3aXBlci5sb29wRml4KCk7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuXG4gICAgc3dpcGVyLl9jbGllbnRMZWZ0ID0gc3dpcGVyLiR3cmFwcGVyRWxbMF0uY2xpZW50TGVmdDtcbiAgfVxuXG4gIHZhciB0cmFuc2xhdGUgPSBydGxUcmFuc2xhdGUgPyBzd2lwZXIudHJhbnNsYXRlIDogLXN3aXBlci50cmFuc2xhdGU7XG5cbiAgZnVuY3Rpb24gbm9ybWFsaXplKHZhbCkge1xuICAgIGlmICh2YWwgPCAwKSByZXR1cm4gLU1hdGguZmxvb3IoTWF0aC5hYnModmFsKSk7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IodmFsKTtcbiAgfVxuXG4gIHZhciBub3JtYWxpemVkVHJhbnNsYXRlID0gbm9ybWFsaXplKHRyYW5zbGF0ZSk7XG4gIHZhciBub3JtYWxpemVkU25hcEdyaWQgPSBzbmFwR3JpZC5tYXAoZnVuY3Rpb24gKHZhbCkge1xuICAgIHJldHVybiBub3JtYWxpemUodmFsKTtcbiAgfSk7XG4gIHZhciBwcmV2U25hcCA9IHNuYXBHcmlkW25vcm1hbGl6ZWRTbmFwR3JpZC5pbmRleE9mKG5vcm1hbGl6ZWRUcmFuc2xhdGUpIC0gMV07XG5cbiAgaWYgKHR5cGVvZiBwcmV2U25hcCA9PT0gJ3VuZGVmaW5lZCcgJiYgcGFyYW1zLmNzc01vZGUpIHtcbiAgICBzbmFwR3JpZC5mb3JFYWNoKGZ1bmN0aW9uIChzbmFwKSB7XG4gICAgICBpZiAoIXByZXZTbmFwICYmIG5vcm1hbGl6ZWRUcmFuc2xhdGUgPj0gc25hcCkgcHJldlNuYXAgPSBzbmFwO1xuICAgIH0pO1xuICB9XG5cbiAgdmFyIHByZXZJbmRleDtcblxuICBpZiAodHlwZW9mIHByZXZTbmFwICE9PSAndW5kZWZpbmVkJykge1xuICAgIHByZXZJbmRleCA9IHNsaWRlc0dyaWQuaW5kZXhPZihwcmV2U25hcCk7XG4gICAgaWYgKHByZXZJbmRleCA8IDApIHByZXZJbmRleCA9IHN3aXBlci5hY3RpdmVJbmRleCAtIDE7XG4gIH1cblxuICByZXR1cm4gc3dpcGVyLnNsaWRlVG8ocHJldkluZGV4LCBzcGVlZCwgcnVuQ2FsbGJhY2tzLCBpbnRlcm5hbCk7XG59IiwiLyogZXNsaW50IG5vLXVudXNlZC12YXJzOiBcIm9mZlwiICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzbGlkZVJlc2V0KHNwZWVkLCBydW5DYWxsYmFja3MsIGludGVybmFsKSB7XG4gIGlmIChzcGVlZCA9PT0gdm9pZCAwKSB7XG4gICAgc3BlZWQgPSB0aGlzLnBhcmFtcy5zcGVlZDtcbiAgfVxuXG4gIGlmIChydW5DYWxsYmFja3MgPT09IHZvaWQgMCkge1xuICAgIHJ1bkNhbGxiYWNrcyA9IHRydWU7XG4gIH1cblxuICB2YXIgc3dpcGVyID0gdGhpcztcbiAgcmV0dXJuIHN3aXBlci5zbGlkZVRvKHN3aXBlci5hY3RpdmVJbmRleCwgc3BlZWQsIHJ1bkNhbGxiYWNrcywgaW50ZXJuYWwpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNsaWRlVG8oaW5kZXgsIHNwZWVkLCBydW5DYWxsYmFja3MsIGludGVybmFsLCBpbml0aWFsKSB7XG4gIGlmIChpbmRleCA9PT0gdm9pZCAwKSB7XG4gICAgaW5kZXggPSAwO1xuICB9XG5cbiAgaWYgKHNwZWVkID09PSB2b2lkIDApIHtcbiAgICBzcGVlZCA9IHRoaXMucGFyYW1zLnNwZWVkO1xuICB9XG5cbiAgaWYgKHJ1bkNhbGxiYWNrcyA9PT0gdm9pZCAwKSB7XG4gICAgcnVuQ2FsbGJhY2tzID0gdHJ1ZTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgaW5kZXggIT09ICdudW1iZXInICYmIHR5cGVvZiBpbmRleCAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgJ2luZGV4JyBhcmd1bWVudCBjYW5ub3QgaGF2ZSB0eXBlIG90aGVyIHRoYW4gJ251bWJlcicgb3IgJ3N0cmluZycuIFtcIiArIHR5cGVvZiBpbmRleCArIFwiXSBnaXZlbi5cIik7XG4gIH1cblxuICBpZiAodHlwZW9mIGluZGV4ID09PSAnc3RyaW5nJykge1xuICAgIC8qKlxuICAgICAqIFRoZSBgaW5kZXhgIGFyZ3VtZW50IGNvbnZlcnRlZCBmcm9tIGBzdHJpbmdgIHRvIGBudW1iZXJgLlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgdmFyIGluZGV4QXNOdW1iZXIgPSBwYXJzZUludChpbmRleCwgMTApO1xuICAgIC8qKlxuICAgICAqIERldGVybWluZXMgd2hldGhlciB0aGUgYGluZGV4YCBhcmd1bWVudCBpcyBhIHZhbGlkIGBudW1iZXJgXG4gICAgICogYWZ0ZXIgYmVpbmcgY29udmVydGVkIGZyb20gdGhlIGBzdHJpbmdgIHR5cGUuXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG5cbiAgICB2YXIgaXNWYWxpZE51bWJlciA9IGlzRmluaXRlKGluZGV4QXNOdW1iZXIpO1xuXG4gICAgaWYgKCFpc1ZhbGlkTnVtYmVyKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgcGFzc2VkLWluICdpbmRleCcgKHN0cmluZykgY291bGRuJ3QgYmUgY29udmVydGVkIHRvICdudW1iZXInLiBbXCIgKyBpbmRleCArIFwiXSBnaXZlbi5cIik7XG4gICAgfSAvLyBLbm93aW5nIHRoYXQgdGhlIGNvbnZlcnRlZCBgaW5kZXhgIGlzIGEgdmFsaWQgbnVtYmVyLFxuICAgIC8vIHdlIGNhbiB1cGRhdGUgdGhlIG9yaWdpbmFsIGFyZ3VtZW50J3MgdmFsdWUuXG5cblxuICAgIGluZGV4ID0gaW5kZXhBc051bWJlcjtcbiAgfVxuXG4gIHZhciBzd2lwZXIgPSB0aGlzO1xuICB2YXIgc2xpZGVJbmRleCA9IGluZGV4O1xuICBpZiAoc2xpZGVJbmRleCA8IDApIHNsaWRlSW5kZXggPSAwO1xuICB2YXIgcGFyYW1zID0gc3dpcGVyLnBhcmFtcyxcbiAgICAgIHNuYXBHcmlkID0gc3dpcGVyLnNuYXBHcmlkLFxuICAgICAgc2xpZGVzR3JpZCA9IHN3aXBlci5zbGlkZXNHcmlkLFxuICAgICAgcHJldmlvdXNJbmRleCA9IHN3aXBlci5wcmV2aW91c0luZGV4LFxuICAgICAgYWN0aXZlSW5kZXggPSBzd2lwZXIuYWN0aXZlSW5kZXgsXG4gICAgICBydGwgPSBzd2lwZXIucnRsVHJhbnNsYXRlLFxuICAgICAgd3JhcHBlckVsID0gc3dpcGVyLndyYXBwZXJFbCxcbiAgICAgIGVuYWJsZWQgPSBzd2lwZXIuZW5hYmxlZDtcblxuICBpZiAoc3dpcGVyLmFuaW1hdGluZyAmJiBwYXJhbXMucHJldmVudEludGVyYWN0aW9uT25UcmFuc2l0aW9uIHx8ICFlbmFibGVkICYmICFpbnRlcm5hbCAmJiAhaW5pdGlhbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBza2lwID0gTWF0aC5taW4oc3dpcGVyLnBhcmFtcy5zbGlkZXNQZXJHcm91cFNraXAsIHNsaWRlSW5kZXgpO1xuICB2YXIgc25hcEluZGV4ID0gc2tpcCArIE1hdGguZmxvb3IoKHNsaWRlSW5kZXggLSBza2lwKSAvIHN3aXBlci5wYXJhbXMuc2xpZGVzUGVyR3JvdXApO1xuICBpZiAoc25hcEluZGV4ID49IHNuYXBHcmlkLmxlbmd0aCkgc25hcEluZGV4ID0gc25hcEdyaWQubGVuZ3RoIC0gMTtcblxuICBpZiAoKGFjdGl2ZUluZGV4IHx8IHBhcmFtcy5pbml0aWFsU2xpZGUgfHwgMCkgPT09IChwcmV2aW91c0luZGV4IHx8IDApICYmIHJ1bkNhbGxiYWNrcykge1xuICAgIHN3aXBlci5lbWl0KCdiZWZvcmVTbGlkZUNoYW5nZVN0YXJ0Jyk7XG4gIH1cblxuICB2YXIgdHJhbnNsYXRlID0gLXNuYXBHcmlkW3NuYXBJbmRleF07IC8vIFVwZGF0ZSBwcm9ncmVzc1xuXG4gIHN3aXBlci51cGRhdGVQcm9ncmVzcyh0cmFuc2xhdGUpOyAvLyBOb3JtYWxpemUgc2xpZGVJbmRleFxuXG4gIGlmIChwYXJhbXMubm9ybWFsaXplU2xpZGVJbmRleCkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2xpZGVzR3JpZC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgdmFyIG5vcm1hbGl6ZWRUcmFuc2xhdGUgPSAtTWF0aC5mbG9vcih0cmFuc2xhdGUgKiAxMDApO1xuICAgICAgdmFyIG5vcm1hbGl6ZWRHaXJkID0gTWF0aC5mbG9vcihzbGlkZXNHcmlkW2ldICogMTAwKTtcbiAgICAgIHZhciBub3JtYWxpemVkR3JpZE5leHQgPSBNYXRoLmZsb29yKHNsaWRlc0dyaWRbaSArIDFdICogMTAwKTtcblxuICAgICAgaWYgKHR5cGVvZiBzbGlkZXNHcmlkW2kgKyAxXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgaWYgKG5vcm1hbGl6ZWRUcmFuc2xhdGUgPj0gbm9ybWFsaXplZEdpcmQgJiYgbm9ybWFsaXplZFRyYW5zbGF0ZSA8IG5vcm1hbGl6ZWRHcmlkTmV4dCAtIChub3JtYWxpemVkR3JpZE5leHQgLSBub3JtYWxpemVkR2lyZCkgLyAyKSB7XG4gICAgICAgICAgc2xpZGVJbmRleCA9IGk7XG4gICAgICAgIH0gZWxzZSBpZiAobm9ybWFsaXplZFRyYW5zbGF0ZSA+PSBub3JtYWxpemVkR2lyZCAmJiBub3JtYWxpemVkVHJhbnNsYXRlIDwgbm9ybWFsaXplZEdyaWROZXh0KSB7XG4gICAgICAgICAgc2xpZGVJbmRleCA9IGkgKyAxO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKG5vcm1hbGl6ZWRUcmFuc2xhdGUgPj0gbm9ybWFsaXplZEdpcmQpIHtcbiAgICAgICAgc2xpZGVJbmRleCA9IGk7XG4gICAgICB9XG4gICAgfVxuICB9IC8vIERpcmVjdGlvbnMgbG9ja3NcblxuXG4gIGlmIChzd2lwZXIuaW5pdGlhbGl6ZWQgJiYgc2xpZGVJbmRleCAhPT0gYWN0aXZlSW5kZXgpIHtcbiAgICBpZiAoIXN3aXBlci5hbGxvd1NsaWRlTmV4dCAmJiB0cmFuc2xhdGUgPCBzd2lwZXIudHJhbnNsYXRlICYmIHRyYW5zbGF0ZSA8IHN3aXBlci5taW5UcmFuc2xhdGUoKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmICghc3dpcGVyLmFsbG93U2xpZGVQcmV2ICYmIHRyYW5zbGF0ZSA+IHN3aXBlci50cmFuc2xhdGUgJiYgdHJhbnNsYXRlID4gc3dpcGVyLm1heFRyYW5zbGF0ZSgpKSB7XG4gICAgICBpZiAoKGFjdGl2ZUluZGV4IHx8IDApICE9PSBzbGlkZUluZGV4KSByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgdmFyIGRpcmVjdGlvbjtcbiAgaWYgKHNsaWRlSW5kZXggPiBhY3RpdmVJbmRleCkgZGlyZWN0aW9uID0gJ25leHQnO2Vsc2UgaWYgKHNsaWRlSW5kZXggPCBhY3RpdmVJbmRleCkgZGlyZWN0aW9uID0gJ3ByZXYnO2Vsc2UgZGlyZWN0aW9uID0gJ3Jlc2V0JzsgLy8gVXBkYXRlIEluZGV4XG5cbiAgaWYgKHJ0bCAmJiAtdHJhbnNsYXRlID09PSBzd2lwZXIudHJhbnNsYXRlIHx8ICFydGwgJiYgdHJhbnNsYXRlID09PSBzd2lwZXIudHJhbnNsYXRlKSB7XG4gICAgc3dpcGVyLnVwZGF0ZUFjdGl2ZUluZGV4KHNsaWRlSW5kZXgpOyAvLyBVcGRhdGUgSGVpZ2h0XG5cbiAgICBpZiAocGFyYW1zLmF1dG9IZWlnaHQpIHtcbiAgICAgIHN3aXBlci51cGRhdGVBdXRvSGVpZ2h0KCk7XG4gICAgfVxuXG4gICAgc3dpcGVyLnVwZGF0ZVNsaWRlc0NsYXNzZXMoKTtcblxuICAgIGlmIChwYXJhbXMuZWZmZWN0ICE9PSAnc2xpZGUnKSB7XG4gICAgICBzd2lwZXIuc2V0VHJhbnNsYXRlKHRyYW5zbGF0ZSk7XG4gICAgfVxuXG4gICAgaWYgKGRpcmVjdGlvbiAhPT0gJ3Jlc2V0Jykge1xuICAgICAgc3dpcGVyLnRyYW5zaXRpb25TdGFydChydW5DYWxsYmFja3MsIGRpcmVjdGlvbik7XG4gICAgICBzd2lwZXIudHJhbnNpdGlvbkVuZChydW5DYWxsYmFja3MsIGRpcmVjdGlvbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKHBhcmFtcy5jc3NNb2RlKSB7XG4gICAgdmFyIGlzSCA9IHN3aXBlci5pc0hvcml6b250YWwoKTtcbiAgICB2YXIgdCA9IC10cmFuc2xhdGU7XG5cbiAgICBpZiAocnRsKSB7XG4gICAgICB0ID0gd3JhcHBlckVsLnNjcm9sbFdpZHRoIC0gd3JhcHBlckVsLm9mZnNldFdpZHRoIC0gdDtcbiAgICB9XG5cbiAgICBpZiAoc3BlZWQgPT09IDApIHtcbiAgICAgIHdyYXBwZXJFbFtpc0ggPyAnc2Nyb2xsTGVmdCcgOiAnc2Nyb2xsVG9wJ10gPSB0O1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgIGlmICh3cmFwcGVyRWwuc2Nyb2xsVG8pIHtcbiAgICAgICAgdmFyIF93cmFwcGVyRWwkc2Nyb2xsVG87XG5cbiAgICAgICAgd3JhcHBlckVsLnNjcm9sbFRvKChfd3JhcHBlckVsJHNjcm9sbFRvID0ge30sIF93cmFwcGVyRWwkc2Nyb2xsVG9baXNIID8gJ2xlZnQnIDogJ3RvcCddID0gdCwgX3dyYXBwZXJFbCRzY3JvbGxUby5iZWhhdmlvciA9ICdzbW9vdGgnLCBfd3JhcHBlckVsJHNjcm9sbFRvKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3cmFwcGVyRWxbaXNIID8gJ3Njcm9sbExlZnQnIDogJ3Njcm9sbFRvcCddID0gdDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmIChzcGVlZCA9PT0gMCkge1xuICAgIHN3aXBlci5zZXRUcmFuc2l0aW9uKDApO1xuICAgIHN3aXBlci5zZXRUcmFuc2xhdGUodHJhbnNsYXRlKTtcbiAgICBzd2lwZXIudXBkYXRlQWN0aXZlSW5kZXgoc2xpZGVJbmRleCk7XG4gICAgc3dpcGVyLnVwZGF0ZVNsaWRlc0NsYXNzZXMoKTtcbiAgICBzd2lwZXIuZW1pdCgnYmVmb3JlVHJhbnNpdGlvblN0YXJ0Jywgc3BlZWQsIGludGVybmFsKTtcbiAgICBzd2lwZXIudHJhbnNpdGlvblN0YXJ0KHJ1bkNhbGxiYWNrcywgZGlyZWN0aW9uKTtcbiAgICBzd2lwZXIudHJhbnNpdGlvbkVuZChydW5DYWxsYmFja3MsIGRpcmVjdGlvbik7XG4gIH0gZWxzZSB7XG4gICAgc3dpcGVyLnNldFRyYW5zaXRpb24oc3BlZWQpO1xuICAgIHN3aXBlci5zZXRUcmFuc2xhdGUodHJhbnNsYXRlKTtcbiAgICBzd2lwZXIudXBkYXRlQWN0aXZlSW5kZXgoc2xpZGVJbmRleCk7XG4gICAgc3dpcGVyLnVwZGF0ZVNsaWRlc0NsYXNzZXMoKTtcbiAgICBzd2lwZXIuZW1pdCgnYmVmb3JlVHJhbnNpdGlvblN0YXJ0Jywgc3BlZWQsIGludGVybmFsKTtcbiAgICBzd2lwZXIudHJhbnNpdGlvblN0YXJ0KHJ1bkNhbGxiYWNrcywgZGlyZWN0aW9uKTtcblxuICAgIGlmICghc3dpcGVyLmFuaW1hdGluZykge1xuICAgICAgc3dpcGVyLmFuaW1hdGluZyA9IHRydWU7XG5cbiAgICAgIGlmICghc3dpcGVyLm9uU2xpZGVUb1dyYXBwZXJUcmFuc2l0aW9uRW5kKSB7XG4gICAgICAgIHN3aXBlci5vblNsaWRlVG9XcmFwcGVyVHJhbnNpdGlvbkVuZCA9IGZ1bmN0aW9uIHRyYW5zaXRpb25FbmQoZSkge1xuICAgICAgICAgIGlmICghc3dpcGVyIHx8IHN3aXBlci5kZXN0cm95ZWQpIHJldHVybjtcbiAgICAgICAgICBpZiAoZS50YXJnZXQgIT09IHRoaXMpIHJldHVybjtcbiAgICAgICAgICBzd2lwZXIuJHdyYXBwZXJFbFswXS5yZW1vdmVFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgc3dpcGVyLm9uU2xpZGVUb1dyYXBwZXJUcmFuc2l0aW9uRW5kKTtcbiAgICAgICAgICBzd2lwZXIuJHdyYXBwZXJFbFswXS5yZW1vdmVFdmVudExpc3RlbmVyKCd3ZWJraXRUcmFuc2l0aW9uRW5kJywgc3dpcGVyLm9uU2xpZGVUb1dyYXBwZXJUcmFuc2l0aW9uRW5kKTtcbiAgICAgICAgICBzd2lwZXIub25TbGlkZVRvV3JhcHBlclRyYW5zaXRpb25FbmQgPSBudWxsO1xuICAgICAgICAgIGRlbGV0ZSBzd2lwZXIub25TbGlkZVRvV3JhcHBlclRyYW5zaXRpb25FbmQ7XG4gICAgICAgICAgc3dpcGVyLnRyYW5zaXRpb25FbmQocnVuQ2FsbGJhY2tzLCBkaXJlY3Rpb24pO1xuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBzd2lwZXIuJHdyYXBwZXJFbFswXS5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgc3dpcGVyLm9uU2xpZGVUb1dyYXBwZXJUcmFuc2l0aW9uRW5kKTtcbiAgICAgIHN3aXBlci4kd3JhcHBlckVsWzBdLmFkZEV2ZW50TGlzdGVuZXIoJ3dlYmtpdFRyYW5zaXRpb25FbmQnLCBzd2lwZXIub25TbGlkZVRvV3JhcHBlclRyYW5zaXRpb25FbmQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufSIsImltcG9ydCAkIGZyb20gJy4uLy4uLy4uL3V0aWxzL2RvbSc7XG5pbXBvcnQgeyBuZXh0VGljayB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL3V0aWxzJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNsaWRlVG9DbGlja2VkU2xpZGUoKSB7XG4gIHZhciBzd2lwZXIgPSB0aGlzO1xuICB2YXIgcGFyYW1zID0gc3dpcGVyLnBhcmFtcyxcbiAgICAgICR3cmFwcGVyRWwgPSBzd2lwZXIuJHdyYXBwZXJFbDtcbiAgdmFyIHNsaWRlc1BlclZpZXcgPSBwYXJhbXMuc2xpZGVzUGVyVmlldyA9PT0gJ2F1dG8nID8gc3dpcGVyLnNsaWRlc1BlclZpZXdEeW5hbWljKCkgOiBwYXJhbXMuc2xpZGVzUGVyVmlldztcbiAgdmFyIHNsaWRlVG9JbmRleCA9IHN3aXBlci5jbGlja2VkSW5kZXg7XG4gIHZhciByZWFsSW5kZXg7XG5cbiAgaWYgKHBhcmFtcy5sb29wKSB7XG4gICAgaWYgKHN3aXBlci5hbmltYXRpbmcpIHJldHVybjtcbiAgICByZWFsSW5kZXggPSBwYXJzZUludCgkKHN3aXBlci5jbGlja2VkU2xpZGUpLmF0dHIoJ2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4JyksIDEwKTtcblxuICAgIGlmIChwYXJhbXMuY2VudGVyZWRTbGlkZXMpIHtcbiAgICAgIGlmIChzbGlkZVRvSW5kZXggPCBzd2lwZXIubG9vcGVkU2xpZGVzIC0gc2xpZGVzUGVyVmlldyAvIDIgfHwgc2xpZGVUb0luZGV4ID4gc3dpcGVyLnNsaWRlcy5sZW5ndGggLSBzd2lwZXIubG9vcGVkU2xpZGVzICsgc2xpZGVzUGVyVmlldyAvIDIpIHtcbiAgICAgICAgc3dpcGVyLmxvb3BGaXgoKTtcbiAgICAgICAgc2xpZGVUb0luZGV4ID0gJHdyYXBwZXJFbC5jaGlsZHJlbihcIi5cIiArIHBhcmFtcy5zbGlkZUNsYXNzICsgXCJbZGF0YS1zd2lwZXItc2xpZGUtaW5kZXg9XFxcIlwiICsgcmVhbEluZGV4ICsgXCJcXFwiXTpub3QoLlwiICsgcGFyYW1zLnNsaWRlRHVwbGljYXRlQ2xhc3MgKyBcIilcIikuZXEoMCkuaW5kZXgoKTtcbiAgICAgICAgbmV4dFRpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHN3aXBlci5zbGlkZVRvKHNsaWRlVG9JbmRleCk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3dpcGVyLnNsaWRlVG8oc2xpZGVUb0luZGV4KTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHNsaWRlVG9JbmRleCA+IHN3aXBlci5zbGlkZXMubGVuZ3RoIC0gc2xpZGVzUGVyVmlldykge1xuICAgICAgc3dpcGVyLmxvb3BGaXgoKTtcbiAgICAgIHNsaWRlVG9JbmRleCA9ICR3cmFwcGVyRWwuY2hpbGRyZW4oXCIuXCIgKyBwYXJhbXMuc2xpZGVDbGFzcyArIFwiW2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4PVxcXCJcIiArIHJlYWxJbmRleCArIFwiXFxcIl06bm90KC5cIiArIHBhcmFtcy5zbGlkZUR1cGxpY2F0ZUNsYXNzICsgXCIpXCIpLmVxKDApLmluZGV4KCk7XG4gICAgICBuZXh0VGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIHN3aXBlci5zbGlkZVRvKHNsaWRlVG9JbmRleCk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3dpcGVyLnNsaWRlVG8oc2xpZGVUb0luZGV4KTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgc3dpcGVyLnNsaWRlVG8oc2xpZGVUb0luZGV4KTtcbiAgfVxufSIsIi8qIGVzbGludCBuby11bnVzZWQtdmFyczogXCJvZmZcIiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2xpZGVUb0Nsb3Nlc3Qoc3BlZWQsIHJ1bkNhbGxiYWNrcywgaW50ZXJuYWwsIHRocmVzaG9sZCkge1xuICBpZiAoc3BlZWQgPT09IHZvaWQgMCkge1xuICAgIHNwZWVkID0gdGhpcy5wYXJhbXMuc3BlZWQ7XG4gIH1cblxuICBpZiAocnVuQ2FsbGJhY2tzID09PSB2b2lkIDApIHtcbiAgICBydW5DYWxsYmFja3MgPSB0cnVlO1xuICB9XG5cbiAgaWYgKHRocmVzaG9sZCA9PT0gdm9pZCAwKSB7XG4gICAgdGhyZXNob2xkID0gMC41O1xuICB9XG5cbiAgdmFyIHN3aXBlciA9IHRoaXM7XG4gIHZhciBpbmRleCA9IHN3aXBlci5hY3RpdmVJbmRleDtcbiAgdmFyIHNraXAgPSBNYXRoLm1pbihzd2lwZXIucGFyYW1zLnNsaWRlc1Blckdyb3VwU2tpcCwgaW5kZXgpO1xuICB2YXIgc25hcEluZGV4ID0gc2tpcCArIE1hdGguZmxvb3IoKGluZGV4IC0gc2tpcCkgLyBzd2lwZXIucGFyYW1zLnNsaWRlc1Blckdyb3VwKTtcbiAgdmFyIHRyYW5zbGF0ZSA9IHN3aXBlci5ydGxUcmFuc2xhdGUgPyBzd2lwZXIudHJhbnNsYXRlIDogLXN3aXBlci50cmFuc2xhdGU7XG5cbiAgaWYgKHRyYW5zbGF0ZSA+PSBzd2lwZXIuc25hcEdyaWRbc25hcEluZGV4XSkge1xuICAgIC8vIFRoZSBjdXJyZW50IHRyYW5zbGF0ZSBpcyBvbiBvciBhZnRlciB0aGUgY3VycmVudCBzbmFwIGluZGV4LCBzbyB0aGUgY2hvaWNlXG4gICAgLy8gaXMgYmV0d2VlbiB0aGUgY3VycmVudCBpbmRleCBhbmQgdGhlIG9uZSBhZnRlciBpdC5cbiAgICB2YXIgY3VycmVudFNuYXAgPSBzd2lwZXIuc25hcEdyaWRbc25hcEluZGV4XTtcbiAgICB2YXIgbmV4dFNuYXAgPSBzd2lwZXIuc25hcEdyaWRbc25hcEluZGV4ICsgMV07XG5cbiAgICBpZiAodHJhbnNsYXRlIC0gY3VycmVudFNuYXAgPiAobmV4dFNuYXAgLSBjdXJyZW50U25hcCkgKiB0aHJlc2hvbGQpIHtcbiAgICAgIGluZGV4ICs9IHN3aXBlci5wYXJhbXMuc2xpZGVzUGVyR3JvdXA7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIFRoZSBjdXJyZW50IHRyYW5zbGF0ZSBpcyBiZWZvcmUgdGhlIGN1cnJlbnQgc25hcCBpbmRleCwgc28gdGhlIGNob2ljZVxuICAgIC8vIGlzIGJldHdlZW4gdGhlIGN1cnJlbnQgaW5kZXggYW5kIHRoZSBvbmUgYmVmb3JlIGl0LlxuICAgIHZhciBwcmV2U25hcCA9IHN3aXBlci5zbmFwR3JpZFtzbmFwSW5kZXggLSAxXTtcbiAgICB2YXIgX2N1cnJlbnRTbmFwID0gc3dpcGVyLnNuYXBHcmlkW3NuYXBJbmRleF07XG5cbiAgICBpZiAodHJhbnNsYXRlIC0gcHJldlNuYXAgPD0gKF9jdXJyZW50U25hcCAtIHByZXZTbmFwKSAqIHRocmVzaG9sZCkge1xuICAgICAgaW5kZXggLT0gc3dpcGVyLnBhcmFtcy5zbGlkZXNQZXJHcm91cDtcbiAgICB9XG4gIH1cblxuICBpbmRleCA9IE1hdGgubWF4KGluZGV4LCAwKTtcbiAgaW5kZXggPSBNYXRoLm1pbihpbmRleCwgc3dpcGVyLnNsaWRlc0dyaWQubGVuZ3RoIC0gMSk7XG4gIHJldHVybiBzd2lwZXIuc2xpZGVUbyhpbmRleCwgc3BlZWQsIHJ1bkNhbGxiYWNrcywgaW50ZXJuYWwpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNsaWRlVG9Mb29wKGluZGV4LCBzcGVlZCwgcnVuQ2FsbGJhY2tzLCBpbnRlcm5hbCkge1xuICBpZiAoaW5kZXggPT09IHZvaWQgMCkge1xuICAgIGluZGV4ID0gMDtcbiAgfVxuXG4gIGlmIChzcGVlZCA9PT0gdm9pZCAwKSB7XG4gICAgc3BlZWQgPSB0aGlzLnBhcmFtcy5zcGVlZDtcbiAgfVxuXG4gIGlmIChydW5DYWxsYmFja3MgPT09IHZvaWQgMCkge1xuICAgIHJ1bkNhbGxiYWNrcyA9IHRydWU7XG4gIH1cblxuICB2YXIgc3dpcGVyID0gdGhpcztcbiAgdmFyIG5ld0luZGV4ID0gaW5kZXg7XG5cbiAgaWYgKHN3aXBlci5wYXJhbXMubG9vcCkge1xuICAgIG5ld0luZGV4ICs9IHN3aXBlci5sb29wZWRTbGlkZXM7XG4gIH1cblxuICByZXR1cm4gc3dpcGVyLnNsaWRlVG8obmV3SW5kZXgsIHNwZWVkLCBydW5DYWxsYmFja3MsIGludGVybmFsKTtcbn0iLCJpbXBvcnQgc2V0VHJhbnNpdGlvbiBmcm9tICcuL3NldFRyYW5zaXRpb24nO1xuaW1wb3J0IHRyYW5zaXRpb25TdGFydCBmcm9tICcuL3RyYW5zaXRpb25TdGFydCc7XG5pbXBvcnQgdHJhbnNpdGlvbkVuZCBmcm9tICcuL3RyYW5zaXRpb25FbmQnO1xuZXhwb3J0IGRlZmF1bHQge1xuICBzZXRUcmFuc2l0aW9uOiBzZXRUcmFuc2l0aW9uLFxuICB0cmFuc2l0aW9uU3RhcnQ6IHRyYW5zaXRpb25TdGFydCxcbiAgdHJhbnNpdGlvbkVuZDogdHJhbnNpdGlvbkVuZFxufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXRUcmFuc2l0aW9uKGR1cmF0aW9uLCBieUNvbnRyb2xsZXIpIHtcbiAgdmFyIHN3aXBlciA9IHRoaXM7XG5cbiAgaWYgKCFzd2lwZXIucGFyYW1zLmNzc01vZGUpIHtcbiAgICBzd2lwZXIuJHdyYXBwZXJFbC50cmFuc2l0aW9uKGR1cmF0aW9uKTtcbiAgfVxuXG4gIHN3aXBlci5lbWl0KCdzZXRUcmFuc2l0aW9uJywgZHVyYXRpb24sIGJ5Q29udHJvbGxlcik7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdHJhbnNpdGlvbkVuZChydW5DYWxsYmFja3MsIGRpcmVjdGlvbikge1xuICBpZiAocnVuQ2FsbGJhY2tzID09PSB2b2lkIDApIHtcbiAgICBydW5DYWxsYmFja3MgPSB0cnVlO1xuICB9XG5cbiAgdmFyIHN3aXBlciA9IHRoaXM7XG4gIHZhciBhY3RpdmVJbmRleCA9IHN3aXBlci5hY3RpdmVJbmRleCxcbiAgICAgIHByZXZpb3VzSW5kZXggPSBzd2lwZXIucHJldmlvdXNJbmRleCxcbiAgICAgIHBhcmFtcyA9IHN3aXBlci5wYXJhbXM7XG4gIHN3aXBlci5hbmltYXRpbmcgPSBmYWxzZTtcbiAgaWYgKHBhcmFtcy5jc3NNb2RlKSByZXR1cm47XG4gIHN3aXBlci5zZXRUcmFuc2l0aW9uKDApO1xuICB2YXIgZGlyID0gZGlyZWN0aW9uO1xuXG4gIGlmICghZGlyKSB7XG4gICAgaWYgKGFjdGl2ZUluZGV4ID4gcHJldmlvdXNJbmRleCkgZGlyID0gJ25leHQnO2Vsc2UgaWYgKGFjdGl2ZUluZGV4IDwgcHJldmlvdXNJbmRleCkgZGlyID0gJ3ByZXYnO2Vsc2UgZGlyID0gJ3Jlc2V0JztcbiAgfVxuXG4gIHN3aXBlci5lbWl0KCd0cmFuc2l0aW9uRW5kJyk7XG5cbiAgaWYgKHJ1bkNhbGxiYWNrcyAmJiBhY3RpdmVJbmRleCAhPT0gcHJldmlvdXNJbmRleCkge1xuICAgIGlmIChkaXIgPT09ICdyZXNldCcpIHtcbiAgICAgIHN3aXBlci5lbWl0KCdzbGlkZVJlc2V0VHJhbnNpdGlvbkVuZCcpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHN3aXBlci5lbWl0KCdzbGlkZUNoYW5nZVRyYW5zaXRpb25FbmQnKTtcblxuICAgIGlmIChkaXIgPT09ICduZXh0Jykge1xuICAgICAgc3dpcGVyLmVtaXQoJ3NsaWRlTmV4dFRyYW5zaXRpb25FbmQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3dpcGVyLmVtaXQoJ3NsaWRlUHJldlRyYW5zaXRpb25FbmQnKTtcbiAgICB9XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0cmFuc2l0aW9uU3RhcnQocnVuQ2FsbGJhY2tzLCBkaXJlY3Rpb24pIHtcbiAgaWYgKHJ1bkNhbGxiYWNrcyA9PT0gdm9pZCAwKSB7XG4gICAgcnVuQ2FsbGJhY2tzID0gdHJ1ZTtcbiAgfVxuXG4gIHZhciBzd2lwZXIgPSB0aGlzO1xuICB2YXIgYWN0aXZlSW5kZXggPSBzd2lwZXIuYWN0aXZlSW5kZXgsXG4gICAgICBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLFxuICAgICAgcHJldmlvdXNJbmRleCA9IHN3aXBlci5wcmV2aW91c0luZGV4O1xuICBpZiAocGFyYW1zLmNzc01vZGUpIHJldHVybjtcblxuICBpZiAocGFyYW1zLmF1dG9IZWlnaHQpIHtcbiAgICBzd2lwZXIudXBkYXRlQXV0b0hlaWdodCgpO1xuICB9XG5cbiAgdmFyIGRpciA9IGRpcmVjdGlvbjtcblxuICBpZiAoIWRpcikge1xuICAgIGlmIChhY3RpdmVJbmRleCA+IHByZXZpb3VzSW5kZXgpIGRpciA9ICduZXh0JztlbHNlIGlmIChhY3RpdmVJbmRleCA8IHByZXZpb3VzSW5kZXgpIGRpciA9ICdwcmV2JztlbHNlIGRpciA9ICdyZXNldCc7XG4gIH1cblxuICBzd2lwZXIuZW1pdCgndHJhbnNpdGlvblN0YXJ0Jyk7XG5cbiAgaWYgKHJ1bkNhbGxiYWNrcyAmJiBhY3RpdmVJbmRleCAhPT0gcHJldmlvdXNJbmRleCkge1xuICAgIGlmIChkaXIgPT09ICdyZXNldCcpIHtcbiAgICAgIHN3aXBlci5lbWl0KCdzbGlkZVJlc2V0VHJhbnNpdGlvblN0YXJ0Jyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc3dpcGVyLmVtaXQoJ3NsaWRlQ2hhbmdlVHJhbnNpdGlvblN0YXJ0Jyk7XG5cbiAgICBpZiAoZGlyID09PSAnbmV4dCcpIHtcbiAgICAgIHN3aXBlci5lbWl0KCdzbGlkZU5leHRUcmFuc2l0aW9uU3RhcnQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3dpcGVyLmVtaXQoJ3NsaWRlUHJldlRyYW5zaXRpb25TdGFydCcpO1xuICAgIH1cbiAgfVxufSIsImltcG9ydCB7IGdldFRyYW5zbGF0ZSB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL3V0aWxzJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFN3aXBlclRyYW5zbGF0ZShheGlzKSB7XG4gIGlmIChheGlzID09PSB2b2lkIDApIHtcbiAgICBheGlzID0gdGhpcy5pc0hvcml6b250YWwoKSA/ICd4JyA6ICd5JztcbiAgfVxuXG4gIHZhciBzd2lwZXIgPSB0aGlzO1xuICB2YXIgcGFyYW1zID0gc3dpcGVyLnBhcmFtcyxcbiAgICAgIHJ0bCA9IHN3aXBlci5ydGxUcmFuc2xhdGUsXG4gICAgICB0cmFuc2xhdGUgPSBzd2lwZXIudHJhbnNsYXRlLFxuICAgICAgJHdyYXBwZXJFbCA9IHN3aXBlci4kd3JhcHBlckVsO1xuXG4gIGlmIChwYXJhbXMudmlydHVhbFRyYW5zbGF0ZSkge1xuICAgIHJldHVybiBydGwgPyAtdHJhbnNsYXRlIDogdHJhbnNsYXRlO1xuICB9XG5cbiAgaWYgKHBhcmFtcy5jc3NNb2RlKSB7XG4gICAgcmV0dXJuIHRyYW5zbGF0ZTtcbiAgfVxuXG4gIHZhciBjdXJyZW50VHJhbnNsYXRlID0gZ2V0VHJhbnNsYXRlKCR3cmFwcGVyRWxbMF0sIGF4aXMpO1xuICBpZiAocnRsKSBjdXJyZW50VHJhbnNsYXRlID0gLWN1cnJlbnRUcmFuc2xhdGU7XG4gIHJldHVybiBjdXJyZW50VHJhbnNsYXRlIHx8IDA7XG59IiwiaW1wb3J0IGdldFRyYW5zbGF0ZSBmcm9tICcuL2dldFRyYW5zbGF0ZSc7XG5pbXBvcnQgc2V0VHJhbnNsYXRlIGZyb20gJy4vc2V0VHJhbnNsYXRlJztcbmltcG9ydCBtaW5UcmFuc2xhdGUgZnJvbSAnLi9taW5UcmFuc2xhdGUnO1xuaW1wb3J0IG1heFRyYW5zbGF0ZSBmcm9tICcuL21heFRyYW5zbGF0ZSc7XG5pbXBvcnQgdHJhbnNsYXRlVG8gZnJvbSAnLi90cmFuc2xhdGVUbyc7XG5leHBvcnQgZGVmYXVsdCB7XG4gIGdldFRyYW5zbGF0ZTogZ2V0VHJhbnNsYXRlLFxuICBzZXRUcmFuc2xhdGU6IHNldFRyYW5zbGF0ZSxcbiAgbWluVHJhbnNsYXRlOiBtaW5UcmFuc2xhdGUsXG4gIG1heFRyYW5zbGF0ZTogbWF4VHJhbnNsYXRlLFxuICB0cmFuc2xhdGVUbzogdHJhbnNsYXRlVG9cbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWF4VHJhbnNsYXRlKCkge1xuICByZXR1cm4gLXRoaXMuc25hcEdyaWRbdGhpcy5zbmFwR3JpZC5sZW5ndGggLSAxXTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaW5UcmFuc2xhdGUoKSB7XG4gIHJldHVybiAtdGhpcy5zbmFwR3JpZFswXTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXRUcmFuc2xhdGUodHJhbnNsYXRlLCBieUNvbnRyb2xsZXIpIHtcbiAgdmFyIHN3aXBlciA9IHRoaXM7XG4gIHZhciBydGwgPSBzd2lwZXIucnRsVHJhbnNsYXRlLFxuICAgICAgcGFyYW1zID0gc3dpcGVyLnBhcmFtcyxcbiAgICAgICR3cmFwcGVyRWwgPSBzd2lwZXIuJHdyYXBwZXJFbCxcbiAgICAgIHdyYXBwZXJFbCA9IHN3aXBlci53cmFwcGVyRWwsXG4gICAgICBwcm9ncmVzcyA9IHN3aXBlci5wcm9ncmVzcztcbiAgdmFyIHggPSAwO1xuICB2YXIgeSA9IDA7XG4gIHZhciB6ID0gMDtcblxuICBpZiAoc3dpcGVyLmlzSG9yaXpvbnRhbCgpKSB7XG4gICAgeCA9IHJ0bCA/IC10cmFuc2xhdGUgOiB0cmFuc2xhdGU7XG4gIH0gZWxzZSB7XG4gICAgeSA9IHRyYW5zbGF0ZTtcbiAgfVxuXG4gIGlmIChwYXJhbXMucm91bmRMZW5ndGhzKSB7XG4gICAgeCA9IE1hdGguZmxvb3IoeCk7XG4gICAgeSA9IE1hdGguZmxvb3IoeSk7XG4gIH1cblxuICBpZiAocGFyYW1zLmNzc01vZGUpIHtcbiAgICB3cmFwcGVyRWxbc3dpcGVyLmlzSG9yaXpvbnRhbCgpID8gJ3Njcm9sbExlZnQnIDogJ3Njcm9sbFRvcCddID0gc3dpcGVyLmlzSG9yaXpvbnRhbCgpID8gLXggOiAteTtcbiAgfSBlbHNlIGlmICghcGFyYW1zLnZpcnR1YWxUcmFuc2xhdGUpIHtcbiAgICAkd3JhcHBlckVsLnRyYW5zZm9ybShcInRyYW5zbGF0ZTNkKFwiICsgeCArIFwicHgsIFwiICsgeSArIFwicHgsIFwiICsgeiArIFwicHgpXCIpO1xuICB9XG5cbiAgc3dpcGVyLnByZXZpb3VzVHJhbnNsYXRlID0gc3dpcGVyLnRyYW5zbGF0ZTtcbiAgc3dpcGVyLnRyYW5zbGF0ZSA9IHN3aXBlci5pc0hvcml6b250YWwoKSA/IHggOiB5OyAvLyBDaGVjayBpZiB3ZSBuZWVkIHRvIHVwZGF0ZSBwcm9ncmVzc1xuXG4gIHZhciBuZXdQcm9ncmVzcztcbiAgdmFyIHRyYW5zbGF0ZXNEaWZmID0gc3dpcGVyLm1heFRyYW5zbGF0ZSgpIC0gc3dpcGVyLm1pblRyYW5zbGF0ZSgpO1xuXG4gIGlmICh0cmFuc2xhdGVzRGlmZiA9PT0gMCkge1xuICAgIG5ld1Byb2dyZXNzID0gMDtcbiAgfSBlbHNlIHtcbiAgICBuZXdQcm9ncmVzcyA9ICh0cmFuc2xhdGUgLSBzd2lwZXIubWluVHJhbnNsYXRlKCkpIC8gdHJhbnNsYXRlc0RpZmY7XG4gIH1cblxuICBpZiAobmV3UHJvZ3Jlc3MgIT09IHByb2dyZXNzKSB7XG4gICAgc3dpcGVyLnVwZGF0ZVByb2dyZXNzKHRyYW5zbGF0ZSk7XG4gIH1cblxuICBzd2lwZXIuZW1pdCgnc2V0VHJhbnNsYXRlJywgc3dpcGVyLnRyYW5zbGF0ZSwgYnlDb250cm9sbGVyKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0cmFuc2xhdGVUbyh0cmFuc2xhdGUsIHNwZWVkLCBydW5DYWxsYmFja3MsIHRyYW5zbGF0ZUJvdW5kcywgaW50ZXJuYWwpIHtcbiAgaWYgKHRyYW5zbGF0ZSA9PT0gdm9pZCAwKSB7XG4gICAgdHJhbnNsYXRlID0gMDtcbiAgfVxuXG4gIGlmIChzcGVlZCA9PT0gdm9pZCAwKSB7XG4gICAgc3BlZWQgPSB0aGlzLnBhcmFtcy5zcGVlZDtcbiAgfVxuXG4gIGlmIChydW5DYWxsYmFja3MgPT09IHZvaWQgMCkge1xuICAgIHJ1bkNhbGxiYWNrcyA9IHRydWU7XG4gIH1cblxuICBpZiAodHJhbnNsYXRlQm91bmRzID09PSB2b2lkIDApIHtcbiAgICB0cmFuc2xhdGVCb3VuZHMgPSB0cnVlO1xuICB9XG5cbiAgdmFyIHN3aXBlciA9IHRoaXM7XG4gIHZhciBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLFxuICAgICAgd3JhcHBlckVsID0gc3dpcGVyLndyYXBwZXJFbDtcblxuICBpZiAoc3dpcGVyLmFuaW1hdGluZyAmJiBwYXJhbXMucHJldmVudEludGVyYWN0aW9uT25UcmFuc2l0aW9uKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIG1pblRyYW5zbGF0ZSA9IHN3aXBlci5taW5UcmFuc2xhdGUoKTtcbiAgdmFyIG1heFRyYW5zbGF0ZSA9IHN3aXBlci5tYXhUcmFuc2xhdGUoKTtcbiAgdmFyIG5ld1RyYW5zbGF0ZTtcbiAgaWYgKHRyYW5zbGF0ZUJvdW5kcyAmJiB0cmFuc2xhdGUgPiBtaW5UcmFuc2xhdGUpIG5ld1RyYW5zbGF0ZSA9IG1pblRyYW5zbGF0ZTtlbHNlIGlmICh0cmFuc2xhdGVCb3VuZHMgJiYgdHJhbnNsYXRlIDwgbWF4VHJhbnNsYXRlKSBuZXdUcmFuc2xhdGUgPSBtYXhUcmFuc2xhdGU7ZWxzZSBuZXdUcmFuc2xhdGUgPSB0cmFuc2xhdGU7IC8vIFVwZGF0ZSBwcm9ncmVzc1xuXG4gIHN3aXBlci51cGRhdGVQcm9ncmVzcyhuZXdUcmFuc2xhdGUpO1xuXG4gIGlmIChwYXJhbXMuY3NzTW9kZSkge1xuICAgIHZhciBpc0ggPSBzd2lwZXIuaXNIb3Jpem9udGFsKCk7XG5cbiAgICBpZiAoc3BlZWQgPT09IDApIHtcbiAgICAgIHdyYXBwZXJFbFtpc0ggPyAnc2Nyb2xsTGVmdCcgOiAnc2Nyb2xsVG9wJ10gPSAtbmV3VHJhbnNsYXRlO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgIGlmICh3cmFwcGVyRWwuc2Nyb2xsVG8pIHtcbiAgICAgICAgdmFyIF93cmFwcGVyRWwkc2Nyb2xsVG87XG5cbiAgICAgICAgd3JhcHBlckVsLnNjcm9sbFRvKChfd3JhcHBlckVsJHNjcm9sbFRvID0ge30sIF93cmFwcGVyRWwkc2Nyb2xsVG9baXNIID8gJ2xlZnQnIDogJ3RvcCddID0gLW5ld1RyYW5zbGF0ZSwgX3dyYXBwZXJFbCRzY3JvbGxUby5iZWhhdmlvciA9ICdzbW9vdGgnLCBfd3JhcHBlckVsJHNjcm9sbFRvKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3cmFwcGVyRWxbaXNIID8gJ3Njcm9sbExlZnQnIDogJ3Njcm9sbFRvcCddID0gLW5ld1RyYW5zbGF0ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmIChzcGVlZCA9PT0gMCkge1xuICAgIHN3aXBlci5zZXRUcmFuc2l0aW9uKDApO1xuICAgIHN3aXBlci5zZXRUcmFuc2xhdGUobmV3VHJhbnNsYXRlKTtcblxuICAgIGlmIChydW5DYWxsYmFja3MpIHtcbiAgICAgIHN3aXBlci5lbWl0KCdiZWZvcmVUcmFuc2l0aW9uU3RhcnQnLCBzcGVlZCwgaW50ZXJuYWwpO1xuICAgICAgc3dpcGVyLmVtaXQoJ3RyYW5zaXRpb25FbmQnKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgc3dpcGVyLnNldFRyYW5zaXRpb24oc3BlZWQpO1xuICAgIHN3aXBlci5zZXRUcmFuc2xhdGUobmV3VHJhbnNsYXRlKTtcblxuICAgIGlmIChydW5DYWxsYmFja3MpIHtcbiAgICAgIHN3aXBlci5lbWl0KCdiZWZvcmVUcmFuc2l0aW9uU3RhcnQnLCBzcGVlZCwgaW50ZXJuYWwpO1xuICAgICAgc3dpcGVyLmVtaXQoJ3RyYW5zaXRpb25TdGFydCcpO1xuICAgIH1cblxuICAgIGlmICghc3dpcGVyLmFuaW1hdGluZykge1xuICAgICAgc3dpcGVyLmFuaW1hdGluZyA9IHRydWU7XG5cbiAgICAgIGlmICghc3dpcGVyLm9uVHJhbnNsYXRlVG9XcmFwcGVyVHJhbnNpdGlvbkVuZCkge1xuICAgICAgICBzd2lwZXIub25UcmFuc2xhdGVUb1dyYXBwZXJUcmFuc2l0aW9uRW5kID0gZnVuY3Rpb24gdHJhbnNpdGlvbkVuZChlKSB7XG4gICAgICAgICAgaWYgKCFzd2lwZXIgfHwgc3dpcGVyLmRlc3Ryb3llZCkgcmV0dXJuO1xuICAgICAgICAgIGlmIChlLnRhcmdldCAhPT0gdGhpcykgcmV0dXJuO1xuICAgICAgICAgIHN3aXBlci4kd3JhcHBlckVsWzBdLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBzd2lwZXIub25UcmFuc2xhdGVUb1dyYXBwZXJUcmFuc2l0aW9uRW5kKTtcbiAgICAgICAgICBzd2lwZXIuJHdyYXBwZXJFbFswXS5yZW1vdmVFdmVudExpc3RlbmVyKCd3ZWJraXRUcmFuc2l0aW9uRW5kJywgc3dpcGVyLm9uVHJhbnNsYXRlVG9XcmFwcGVyVHJhbnNpdGlvbkVuZCk7XG4gICAgICAgICAgc3dpcGVyLm9uVHJhbnNsYXRlVG9XcmFwcGVyVHJhbnNpdGlvbkVuZCA9IG51bGw7XG4gICAgICAgICAgZGVsZXRlIHN3aXBlci5vblRyYW5zbGF0ZVRvV3JhcHBlclRyYW5zaXRpb25FbmQ7XG5cbiAgICAgICAgICBpZiAocnVuQ2FsbGJhY2tzKSB7XG4gICAgICAgICAgICBzd2lwZXIuZW1pdCgndHJhbnNpdGlvbkVuZCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgc3dpcGVyLiR3cmFwcGVyRWxbMF0uYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIHN3aXBlci5vblRyYW5zbGF0ZVRvV3JhcHBlclRyYW5zaXRpb25FbmQpO1xuICAgICAgc3dpcGVyLiR3cmFwcGVyRWxbMF0uYWRkRXZlbnRMaXN0ZW5lcignd2Via2l0VHJhbnNpdGlvbkVuZCcsIHN3aXBlci5vblRyYW5zbGF0ZVRvV3JhcHBlclRyYW5zaXRpb25FbmQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufSIsImltcG9ydCB1cGRhdGVTaXplIGZyb20gJy4vdXBkYXRlU2l6ZSc7XG5pbXBvcnQgdXBkYXRlU2xpZGVzIGZyb20gJy4vdXBkYXRlU2xpZGVzJztcbmltcG9ydCB1cGRhdGVBdXRvSGVpZ2h0IGZyb20gJy4vdXBkYXRlQXV0b0hlaWdodCc7XG5pbXBvcnQgdXBkYXRlU2xpZGVzT2Zmc2V0IGZyb20gJy4vdXBkYXRlU2xpZGVzT2Zmc2V0JztcbmltcG9ydCB1cGRhdGVTbGlkZXNQcm9ncmVzcyBmcm9tICcuL3VwZGF0ZVNsaWRlc1Byb2dyZXNzJztcbmltcG9ydCB1cGRhdGVQcm9ncmVzcyBmcm9tICcuL3VwZGF0ZVByb2dyZXNzJztcbmltcG9ydCB1cGRhdGVTbGlkZXNDbGFzc2VzIGZyb20gJy4vdXBkYXRlU2xpZGVzQ2xhc3Nlcyc7XG5pbXBvcnQgdXBkYXRlQWN0aXZlSW5kZXggZnJvbSAnLi91cGRhdGVBY3RpdmVJbmRleCc7XG5pbXBvcnQgdXBkYXRlQ2xpY2tlZFNsaWRlIGZyb20gJy4vdXBkYXRlQ2xpY2tlZFNsaWRlJztcbmV4cG9ydCBkZWZhdWx0IHtcbiAgdXBkYXRlU2l6ZTogdXBkYXRlU2l6ZSxcbiAgdXBkYXRlU2xpZGVzOiB1cGRhdGVTbGlkZXMsXG4gIHVwZGF0ZUF1dG9IZWlnaHQ6IHVwZGF0ZUF1dG9IZWlnaHQsXG4gIHVwZGF0ZVNsaWRlc09mZnNldDogdXBkYXRlU2xpZGVzT2Zmc2V0LFxuICB1cGRhdGVTbGlkZXNQcm9ncmVzczogdXBkYXRlU2xpZGVzUHJvZ3Jlc3MsXG4gIHVwZGF0ZVByb2dyZXNzOiB1cGRhdGVQcm9ncmVzcyxcbiAgdXBkYXRlU2xpZGVzQ2xhc3NlczogdXBkYXRlU2xpZGVzQ2xhc3NlcyxcbiAgdXBkYXRlQWN0aXZlSW5kZXg6IHVwZGF0ZUFjdGl2ZUluZGV4LFxuICB1cGRhdGVDbGlja2VkU2xpZGU6IHVwZGF0ZUNsaWNrZWRTbGlkZVxufTsiLCJpbXBvcnQgeyBleHRlbmQgfSBmcm9tICcuLi8uLi8uLi91dGlscy91dGlscyc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1cGRhdGVBY3RpdmVJbmRleChuZXdBY3RpdmVJbmRleCkge1xuICB2YXIgc3dpcGVyID0gdGhpcztcbiAgdmFyIHRyYW5zbGF0ZSA9IHN3aXBlci5ydGxUcmFuc2xhdGUgPyBzd2lwZXIudHJhbnNsYXRlIDogLXN3aXBlci50cmFuc2xhdGU7XG4gIHZhciBzbGlkZXNHcmlkID0gc3dpcGVyLnNsaWRlc0dyaWQsXG4gICAgICBzbmFwR3JpZCA9IHN3aXBlci5zbmFwR3JpZCxcbiAgICAgIHBhcmFtcyA9IHN3aXBlci5wYXJhbXMsXG4gICAgICBwcmV2aW91c0luZGV4ID0gc3dpcGVyLmFjdGl2ZUluZGV4LFxuICAgICAgcHJldmlvdXNSZWFsSW5kZXggPSBzd2lwZXIucmVhbEluZGV4LFxuICAgICAgcHJldmlvdXNTbmFwSW5kZXggPSBzd2lwZXIuc25hcEluZGV4O1xuICB2YXIgYWN0aXZlSW5kZXggPSBuZXdBY3RpdmVJbmRleDtcbiAgdmFyIHNuYXBJbmRleDtcblxuICBpZiAodHlwZW9mIGFjdGl2ZUluZGV4ID09PSAndW5kZWZpbmVkJykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2xpZGVzR3JpZC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKHR5cGVvZiBzbGlkZXNHcmlkW2kgKyAxXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgaWYgKHRyYW5zbGF0ZSA+PSBzbGlkZXNHcmlkW2ldICYmIHRyYW5zbGF0ZSA8IHNsaWRlc0dyaWRbaSArIDFdIC0gKHNsaWRlc0dyaWRbaSArIDFdIC0gc2xpZGVzR3JpZFtpXSkgLyAyKSB7XG4gICAgICAgICAgYWN0aXZlSW5kZXggPSBpO1xuICAgICAgICB9IGVsc2UgaWYgKHRyYW5zbGF0ZSA+PSBzbGlkZXNHcmlkW2ldICYmIHRyYW5zbGF0ZSA8IHNsaWRlc0dyaWRbaSArIDFdKSB7XG4gICAgICAgICAgYWN0aXZlSW5kZXggPSBpICsgMTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0cmFuc2xhdGUgPj0gc2xpZGVzR3JpZFtpXSkge1xuICAgICAgICBhY3RpdmVJbmRleCA9IGk7XG4gICAgICB9XG4gICAgfSAvLyBOb3JtYWxpemUgc2xpZGVJbmRleFxuXG5cbiAgICBpZiAocGFyYW1zLm5vcm1hbGl6ZVNsaWRlSW5kZXgpIHtcbiAgICAgIGlmIChhY3RpdmVJbmRleCA8IDAgfHwgdHlwZW9mIGFjdGl2ZUluZGV4ID09PSAndW5kZWZpbmVkJykgYWN0aXZlSW5kZXggPSAwO1xuICAgIH1cbiAgfVxuXG4gIGlmIChzbmFwR3JpZC5pbmRleE9mKHRyYW5zbGF0ZSkgPj0gMCkge1xuICAgIHNuYXBJbmRleCA9IHNuYXBHcmlkLmluZGV4T2YodHJhbnNsYXRlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgc2tpcCA9IE1hdGgubWluKHBhcmFtcy5zbGlkZXNQZXJHcm91cFNraXAsIGFjdGl2ZUluZGV4KTtcbiAgICBzbmFwSW5kZXggPSBza2lwICsgTWF0aC5mbG9vcigoYWN0aXZlSW5kZXggLSBza2lwKSAvIHBhcmFtcy5zbGlkZXNQZXJHcm91cCk7XG4gIH1cblxuICBpZiAoc25hcEluZGV4ID49IHNuYXBHcmlkLmxlbmd0aCkgc25hcEluZGV4ID0gc25hcEdyaWQubGVuZ3RoIC0gMTtcblxuICBpZiAoYWN0aXZlSW5kZXggPT09IHByZXZpb3VzSW5kZXgpIHtcbiAgICBpZiAoc25hcEluZGV4ICE9PSBwcmV2aW91c1NuYXBJbmRleCkge1xuICAgICAgc3dpcGVyLnNuYXBJbmRleCA9IHNuYXBJbmRleDtcbiAgICAgIHN3aXBlci5lbWl0KCdzbmFwSW5kZXhDaGFuZ2UnKTtcbiAgICB9XG5cbiAgICByZXR1cm47XG4gIH0gLy8gR2V0IHJlYWwgaW5kZXhcblxuXG4gIHZhciByZWFsSW5kZXggPSBwYXJzZUludChzd2lwZXIuc2xpZGVzLmVxKGFjdGl2ZUluZGV4KS5hdHRyKCdkYXRhLXN3aXBlci1zbGlkZS1pbmRleCcpIHx8IGFjdGl2ZUluZGV4LCAxMCk7XG4gIGV4dGVuZChzd2lwZXIsIHtcbiAgICBzbmFwSW5kZXg6IHNuYXBJbmRleCxcbiAgICByZWFsSW5kZXg6IHJlYWxJbmRleCxcbiAgICBwcmV2aW91c0luZGV4OiBwcmV2aW91c0luZGV4LFxuICAgIGFjdGl2ZUluZGV4OiBhY3RpdmVJbmRleFxuICB9KTtcbiAgc3dpcGVyLmVtaXQoJ2FjdGl2ZUluZGV4Q2hhbmdlJyk7XG4gIHN3aXBlci5lbWl0KCdzbmFwSW5kZXhDaGFuZ2UnKTtcblxuICBpZiAocHJldmlvdXNSZWFsSW5kZXggIT09IHJlYWxJbmRleCkge1xuICAgIHN3aXBlci5lbWl0KCdyZWFsSW5kZXhDaGFuZ2UnKTtcbiAgfVxuXG4gIGlmIChzd2lwZXIuaW5pdGlhbGl6ZWQgfHwgc3dpcGVyLnBhcmFtcy5ydW5DYWxsYmFja3NPbkluaXQpIHtcbiAgICBzd2lwZXIuZW1pdCgnc2xpZGVDaGFuZ2UnKTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVwZGF0ZUF1dG9IZWlnaHQoc3BlZWQpIHtcbiAgdmFyIHN3aXBlciA9IHRoaXM7XG4gIHZhciBhY3RpdmVTbGlkZXMgPSBbXTtcbiAgdmFyIGlzVmlydHVhbCA9IHN3aXBlci52aXJ0dWFsICYmIHN3aXBlci5wYXJhbXMudmlydHVhbC5lbmFibGVkO1xuICB2YXIgbmV3SGVpZ2h0ID0gMDtcbiAgdmFyIGk7XG5cbiAgaWYgKHR5cGVvZiBzcGVlZCA9PT0gJ251bWJlcicpIHtcbiAgICBzd2lwZXIuc2V0VHJhbnNpdGlvbihzcGVlZCk7XG4gIH0gZWxzZSBpZiAoc3BlZWQgPT09IHRydWUpIHtcbiAgICBzd2lwZXIuc2V0VHJhbnNpdGlvbihzd2lwZXIucGFyYW1zLnNwZWVkKTtcbiAgfVxuXG4gIHZhciBnZXRTbGlkZUJ5SW5kZXggPSBmdW5jdGlvbiBnZXRTbGlkZUJ5SW5kZXgoaW5kZXgpIHtcbiAgICBpZiAoaXNWaXJ0dWFsKSB7XG4gICAgICByZXR1cm4gc3dpcGVyLnNsaWRlcy5maWx0ZXIoZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgIHJldHVybiBwYXJzZUludChlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4JyksIDEwKSA9PT0gaW5kZXg7XG4gICAgICB9KVswXTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3dpcGVyLnNsaWRlcy5lcShpbmRleClbMF07XG4gIH07IC8vIEZpbmQgc2xpZGVzIGN1cnJlbnRseSBpbiB2aWV3XG5cblxuICBpZiAoc3dpcGVyLnBhcmFtcy5zbGlkZXNQZXJWaWV3ICE9PSAnYXV0bycgJiYgc3dpcGVyLnBhcmFtcy5zbGlkZXNQZXJWaWV3ID4gMSkge1xuICAgIGlmIChzd2lwZXIucGFyYW1zLmNlbnRlcmVkU2xpZGVzKSB7XG4gICAgICBzd2lwZXIudmlzaWJsZVNsaWRlcy5lYWNoKGZ1bmN0aW9uIChzbGlkZSkge1xuICAgICAgICBhY3RpdmVTbGlkZXMucHVzaChzbGlkZSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChpID0gMDsgaSA8IE1hdGguY2VpbChzd2lwZXIucGFyYW1zLnNsaWRlc1BlclZpZXcpOyBpICs9IDEpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gc3dpcGVyLmFjdGl2ZUluZGV4ICsgaTtcbiAgICAgICAgaWYgKGluZGV4ID4gc3dpcGVyLnNsaWRlcy5sZW5ndGggJiYgIWlzVmlydHVhbCkgYnJlYWs7XG4gICAgICAgIGFjdGl2ZVNsaWRlcy5wdXNoKGdldFNsaWRlQnlJbmRleChpbmRleCkpO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBhY3RpdmVTbGlkZXMucHVzaChnZXRTbGlkZUJ5SW5kZXgoc3dpcGVyLmFjdGl2ZUluZGV4KSk7XG4gIH0gLy8gRmluZCBuZXcgaGVpZ2h0IGZyb20gaGlnaGVzdCBzbGlkZSBpbiB2aWV3XG5cblxuICBmb3IgKGkgPSAwOyBpIDwgYWN0aXZlU2xpZGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgaWYgKHR5cGVvZiBhY3RpdmVTbGlkZXNbaV0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgaGVpZ2h0ID0gYWN0aXZlU2xpZGVzW2ldLm9mZnNldEhlaWdodDtcbiAgICAgIG5ld0hlaWdodCA9IGhlaWdodCA+IG5ld0hlaWdodCA/IGhlaWdodCA6IG5ld0hlaWdodDtcbiAgICB9XG4gIH0gLy8gVXBkYXRlIEhlaWdodFxuXG5cbiAgaWYgKG5ld0hlaWdodCkgc3dpcGVyLiR3cmFwcGVyRWwuY3NzKCdoZWlnaHQnLCBuZXdIZWlnaHQgKyBcInB4XCIpO1xufSIsImltcG9ydCAkIGZyb20gJy4uLy4uLy4uL3V0aWxzL2RvbSc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1cGRhdGVDbGlja2VkU2xpZGUoZSkge1xuICB2YXIgc3dpcGVyID0gdGhpcztcbiAgdmFyIHBhcmFtcyA9IHN3aXBlci5wYXJhbXM7XG4gIHZhciBzbGlkZSA9ICQoZS50YXJnZXQpLmNsb3Nlc3QoXCIuXCIgKyBwYXJhbXMuc2xpZGVDbGFzcylbMF07XG4gIHZhciBzbGlkZUZvdW5kID0gZmFsc2U7XG4gIHZhciBzbGlkZUluZGV4O1xuXG4gIGlmIChzbGlkZSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3dpcGVyLnNsaWRlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKHN3aXBlci5zbGlkZXNbaV0gPT09IHNsaWRlKSB7XG4gICAgICAgIHNsaWRlRm91bmQgPSB0cnVlO1xuICAgICAgICBzbGlkZUluZGV4ID0gaTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKHNsaWRlICYmIHNsaWRlRm91bmQpIHtcbiAgICBzd2lwZXIuY2xpY2tlZFNsaWRlID0gc2xpZGU7XG5cbiAgICBpZiAoc3dpcGVyLnZpcnR1YWwgJiYgc3dpcGVyLnBhcmFtcy52aXJ0dWFsLmVuYWJsZWQpIHtcbiAgICAgIHN3aXBlci5jbGlja2VkSW5kZXggPSBwYXJzZUludCgkKHNsaWRlKS5hdHRyKCdkYXRhLXN3aXBlci1zbGlkZS1pbmRleCcpLCAxMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN3aXBlci5jbGlja2VkSW5kZXggPSBzbGlkZUluZGV4O1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBzd2lwZXIuY2xpY2tlZFNsaWRlID0gdW5kZWZpbmVkO1xuICAgIHN3aXBlci5jbGlja2VkSW5kZXggPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKHBhcmFtcy5zbGlkZVRvQ2xpY2tlZFNsaWRlICYmIHN3aXBlci5jbGlja2VkSW5kZXggIT09IHVuZGVmaW5lZCAmJiBzd2lwZXIuY2xpY2tlZEluZGV4ICE9PSBzd2lwZXIuYWN0aXZlSW5kZXgpIHtcbiAgICBzd2lwZXIuc2xpZGVUb0NsaWNrZWRTbGlkZSgpO1xuICB9XG59IiwiaW1wb3J0IHsgZXh0ZW5kIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvdXRpbHMnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXBkYXRlUHJvZ3Jlc3ModHJhbnNsYXRlKSB7XG4gIHZhciBzd2lwZXIgPSB0aGlzO1xuXG4gIGlmICh0eXBlb2YgdHJhbnNsYXRlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBtdWx0aXBsaWVyID0gc3dpcGVyLnJ0bFRyYW5zbGF0ZSA/IC0xIDogMTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG5cbiAgICB0cmFuc2xhdGUgPSBzd2lwZXIgJiYgc3dpcGVyLnRyYW5zbGF0ZSAmJiBzd2lwZXIudHJhbnNsYXRlICogbXVsdGlwbGllciB8fCAwO1xuICB9XG5cbiAgdmFyIHBhcmFtcyA9IHN3aXBlci5wYXJhbXM7XG4gIHZhciB0cmFuc2xhdGVzRGlmZiA9IHN3aXBlci5tYXhUcmFuc2xhdGUoKSAtIHN3aXBlci5taW5UcmFuc2xhdGUoKTtcbiAgdmFyIHByb2dyZXNzID0gc3dpcGVyLnByb2dyZXNzLFxuICAgICAgaXNCZWdpbm5pbmcgPSBzd2lwZXIuaXNCZWdpbm5pbmcsXG4gICAgICBpc0VuZCA9IHN3aXBlci5pc0VuZDtcbiAgdmFyIHdhc0JlZ2lubmluZyA9IGlzQmVnaW5uaW5nO1xuICB2YXIgd2FzRW5kID0gaXNFbmQ7XG5cbiAgaWYgKHRyYW5zbGF0ZXNEaWZmID09PSAwKSB7XG4gICAgcHJvZ3Jlc3MgPSAwO1xuICAgIGlzQmVnaW5uaW5nID0gdHJ1ZTtcbiAgICBpc0VuZCA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgcHJvZ3Jlc3MgPSAodHJhbnNsYXRlIC0gc3dpcGVyLm1pblRyYW5zbGF0ZSgpKSAvIHRyYW5zbGF0ZXNEaWZmO1xuICAgIGlzQmVnaW5uaW5nID0gcHJvZ3Jlc3MgPD0gMDtcbiAgICBpc0VuZCA9IHByb2dyZXNzID49IDE7XG4gIH1cblxuICBleHRlbmQoc3dpcGVyLCB7XG4gICAgcHJvZ3Jlc3M6IHByb2dyZXNzLFxuICAgIGlzQmVnaW5uaW5nOiBpc0JlZ2lubmluZyxcbiAgICBpc0VuZDogaXNFbmRcbiAgfSk7XG4gIGlmIChwYXJhbXMud2F0Y2hTbGlkZXNQcm9ncmVzcyB8fCBwYXJhbXMud2F0Y2hTbGlkZXNWaXNpYmlsaXR5IHx8IHBhcmFtcy5jZW50ZXJlZFNsaWRlcyAmJiBwYXJhbXMuYXV0b0hlaWdodCkgc3dpcGVyLnVwZGF0ZVNsaWRlc1Byb2dyZXNzKHRyYW5zbGF0ZSk7XG5cbiAgaWYgKGlzQmVnaW5uaW5nICYmICF3YXNCZWdpbm5pbmcpIHtcbiAgICBzd2lwZXIuZW1pdCgncmVhY2hCZWdpbm5pbmcgdG9FZGdlJyk7XG4gIH1cblxuICBpZiAoaXNFbmQgJiYgIXdhc0VuZCkge1xuICAgIHN3aXBlci5lbWl0KCdyZWFjaEVuZCB0b0VkZ2UnKTtcbiAgfVxuXG4gIGlmICh3YXNCZWdpbm5pbmcgJiYgIWlzQmVnaW5uaW5nIHx8IHdhc0VuZCAmJiAhaXNFbmQpIHtcbiAgICBzd2lwZXIuZW1pdCgnZnJvbUVkZ2UnKTtcbiAgfVxuXG4gIHN3aXBlci5lbWl0KCdwcm9ncmVzcycsIHByb2dyZXNzKTtcbn0iLCJpbXBvcnQgeyBleHRlbmQgfSBmcm9tICcuLi8uLi8uLi91dGlscy91dGlscyc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1cGRhdGVTaXplKCkge1xuICB2YXIgc3dpcGVyID0gdGhpcztcbiAgdmFyIHdpZHRoO1xuICB2YXIgaGVpZ2h0O1xuICB2YXIgJGVsID0gc3dpcGVyLiRlbDtcblxuICBpZiAodHlwZW9mIHN3aXBlci5wYXJhbXMud2lkdGggIT09ICd1bmRlZmluZWQnICYmIHN3aXBlci5wYXJhbXMud2lkdGggIT09IG51bGwpIHtcbiAgICB3aWR0aCA9IHN3aXBlci5wYXJhbXMud2lkdGg7XG4gIH0gZWxzZSB7XG4gICAgd2lkdGggPSAkZWxbMF0uY2xpZW50V2lkdGg7XG4gIH1cblxuICBpZiAodHlwZW9mIHN3aXBlci5wYXJhbXMuaGVpZ2h0ICE9PSAndW5kZWZpbmVkJyAmJiBzd2lwZXIucGFyYW1zLmhlaWdodCAhPT0gbnVsbCkge1xuICAgIGhlaWdodCA9IHN3aXBlci5wYXJhbXMuaGVpZ2h0O1xuICB9IGVsc2Uge1xuICAgIGhlaWdodCA9ICRlbFswXS5jbGllbnRIZWlnaHQ7XG4gIH1cblxuICBpZiAod2lkdGggPT09IDAgJiYgc3dpcGVyLmlzSG9yaXpvbnRhbCgpIHx8IGhlaWdodCA9PT0gMCAmJiBzd2lwZXIuaXNWZXJ0aWNhbCgpKSB7XG4gICAgcmV0dXJuO1xuICB9IC8vIFN1YnRyYWN0IHBhZGRpbmdzXG5cblxuICB3aWR0aCA9IHdpZHRoIC0gcGFyc2VJbnQoJGVsLmNzcygncGFkZGluZy1sZWZ0JykgfHwgMCwgMTApIC0gcGFyc2VJbnQoJGVsLmNzcygncGFkZGluZy1yaWdodCcpIHx8IDAsIDEwKTtcbiAgaGVpZ2h0ID0gaGVpZ2h0IC0gcGFyc2VJbnQoJGVsLmNzcygncGFkZGluZy10b3AnKSB8fCAwLCAxMCkgLSBwYXJzZUludCgkZWwuY3NzKCdwYWRkaW5nLWJvdHRvbScpIHx8IDAsIDEwKTtcbiAgaWYgKE51bWJlci5pc05hTih3aWR0aCkpIHdpZHRoID0gMDtcbiAgaWYgKE51bWJlci5pc05hTihoZWlnaHQpKSBoZWlnaHQgPSAwO1xuICBleHRlbmQoc3dpcGVyLCB7XG4gICAgd2lkdGg6IHdpZHRoLFxuICAgIGhlaWdodDogaGVpZ2h0LFxuICAgIHNpemU6IHN3aXBlci5pc0hvcml6b250YWwoKSA/IHdpZHRoIDogaGVpZ2h0XG4gIH0pO1xufSIsImltcG9ydCB7IGV4dGVuZCB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL3V0aWxzJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVwZGF0ZVNsaWRlcygpIHtcbiAgdmFyIHN3aXBlciA9IHRoaXM7XG5cbiAgZnVuY3Rpb24gZ2V0RGlyZWN0aW9uTGFiZWwocHJvcGVydHkpIHtcbiAgICBpZiAoc3dpcGVyLmlzSG9yaXpvbnRhbCgpKSB7XG4gICAgICByZXR1cm4gcHJvcGVydHk7XG4gICAgfSAvLyBwcmV0dGllci1pZ25vcmVcblxuXG4gICAgcmV0dXJuIHtcbiAgICAgICd3aWR0aCc6ICdoZWlnaHQnLFxuICAgICAgJ21hcmdpbi10b3AnOiAnbWFyZ2luLWxlZnQnLFxuICAgICAgJ21hcmdpbi1ib3R0b20gJzogJ21hcmdpbi1yaWdodCcsXG4gICAgICAnbWFyZ2luLWxlZnQnOiAnbWFyZ2luLXRvcCcsXG4gICAgICAnbWFyZ2luLXJpZ2h0JzogJ21hcmdpbi1ib3R0b20nLFxuICAgICAgJ3BhZGRpbmctbGVmdCc6ICdwYWRkaW5nLXRvcCcsXG4gICAgICAncGFkZGluZy1yaWdodCc6ICdwYWRkaW5nLWJvdHRvbScsXG4gICAgICAnbWFyZ2luUmlnaHQnOiAnbWFyZ2luQm90dG9tJ1xuICAgIH1bcHJvcGVydHldO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0RGlyZWN0aW9uUHJvcGVydHlWYWx1ZShub2RlLCBsYWJlbCkge1xuICAgIHJldHVybiBwYXJzZUZsb2F0KG5vZGUuZ2V0UHJvcGVydHlWYWx1ZShnZXREaXJlY3Rpb25MYWJlbChsYWJlbCkpIHx8IDApO1xuICB9XG5cbiAgdmFyIHBhcmFtcyA9IHN3aXBlci5wYXJhbXM7XG4gIHZhciAkd3JhcHBlckVsID0gc3dpcGVyLiR3cmFwcGVyRWwsXG4gICAgICBzd2lwZXJTaXplID0gc3dpcGVyLnNpemUsXG4gICAgICBydGwgPSBzd2lwZXIucnRsVHJhbnNsYXRlLFxuICAgICAgd3JvbmdSVEwgPSBzd2lwZXIud3JvbmdSVEw7XG4gIHZhciBpc1ZpcnR1YWwgPSBzd2lwZXIudmlydHVhbCAmJiBwYXJhbXMudmlydHVhbC5lbmFibGVkO1xuICB2YXIgcHJldmlvdXNTbGlkZXNMZW5ndGggPSBpc1ZpcnR1YWwgPyBzd2lwZXIudmlydHVhbC5zbGlkZXMubGVuZ3RoIDogc3dpcGVyLnNsaWRlcy5sZW5ndGg7XG4gIHZhciBzbGlkZXMgPSAkd3JhcHBlckVsLmNoaWxkcmVuKFwiLlwiICsgc3dpcGVyLnBhcmFtcy5zbGlkZUNsYXNzKTtcbiAgdmFyIHNsaWRlc0xlbmd0aCA9IGlzVmlydHVhbCA/IHN3aXBlci52aXJ0dWFsLnNsaWRlcy5sZW5ndGggOiBzbGlkZXMubGVuZ3RoO1xuICB2YXIgc25hcEdyaWQgPSBbXTtcbiAgdmFyIHNsaWRlc0dyaWQgPSBbXTtcbiAgdmFyIHNsaWRlc1NpemVzR3JpZCA9IFtdO1xuICB2YXIgb2Zmc2V0QmVmb3JlID0gcGFyYW1zLnNsaWRlc09mZnNldEJlZm9yZTtcblxuICBpZiAodHlwZW9mIG9mZnNldEJlZm9yZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9mZnNldEJlZm9yZSA9IHBhcmFtcy5zbGlkZXNPZmZzZXRCZWZvcmUuY2FsbChzd2lwZXIpO1xuICB9XG5cbiAgdmFyIG9mZnNldEFmdGVyID0gcGFyYW1zLnNsaWRlc09mZnNldEFmdGVyO1xuXG4gIGlmICh0eXBlb2Ygb2Zmc2V0QWZ0ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvZmZzZXRBZnRlciA9IHBhcmFtcy5zbGlkZXNPZmZzZXRBZnRlci5jYWxsKHN3aXBlcik7XG4gIH1cblxuICB2YXIgcHJldmlvdXNTbmFwR3JpZExlbmd0aCA9IHN3aXBlci5zbmFwR3JpZC5sZW5ndGg7XG4gIHZhciBwcmV2aW91c1NsaWRlc0dyaWRMZW5ndGggPSBzd2lwZXIuc2xpZGVzR3JpZC5sZW5ndGg7XG4gIHZhciBzcGFjZUJldHdlZW4gPSBwYXJhbXMuc3BhY2VCZXR3ZWVuO1xuICB2YXIgc2xpZGVQb3NpdGlvbiA9IC1vZmZzZXRCZWZvcmU7XG4gIHZhciBwcmV2U2xpZGVTaXplID0gMDtcbiAgdmFyIGluZGV4ID0gMDtcblxuICBpZiAodHlwZW9mIHN3aXBlclNpemUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBzcGFjZUJldHdlZW4gPT09ICdzdHJpbmcnICYmIHNwYWNlQmV0d2Vlbi5pbmRleE9mKCclJykgPj0gMCkge1xuICAgIHNwYWNlQmV0d2VlbiA9IHBhcnNlRmxvYXQoc3BhY2VCZXR3ZWVuLnJlcGxhY2UoJyUnLCAnJykpIC8gMTAwICogc3dpcGVyU2l6ZTtcbiAgfVxuXG4gIHN3aXBlci52aXJ0dWFsU2l6ZSA9IC1zcGFjZUJldHdlZW47IC8vIHJlc2V0IG1hcmdpbnNcblxuICBpZiAocnRsKSBzbGlkZXMuY3NzKHtcbiAgICBtYXJnaW5MZWZ0OiAnJyxcbiAgICBtYXJnaW5Cb3R0b206ICcnLFxuICAgIG1hcmdpblRvcDogJydcbiAgfSk7ZWxzZSBzbGlkZXMuY3NzKHtcbiAgICBtYXJnaW5SaWdodDogJycsXG4gICAgbWFyZ2luQm90dG9tOiAnJyxcbiAgICBtYXJnaW5Ub3A6ICcnXG4gIH0pO1xuICB2YXIgc2xpZGVzTnVtYmVyRXZlblRvUm93cztcblxuICBpZiAocGFyYW1zLnNsaWRlc1BlckNvbHVtbiA+IDEpIHtcbiAgICBpZiAoTWF0aC5mbG9vcihzbGlkZXNMZW5ndGggLyBwYXJhbXMuc2xpZGVzUGVyQ29sdW1uKSA9PT0gc2xpZGVzTGVuZ3RoIC8gc3dpcGVyLnBhcmFtcy5zbGlkZXNQZXJDb2x1bW4pIHtcbiAgICAgIHNsaWRlc051bWJlckV2ZW5Ub1Jvd3MgPSBzbGlkZXNMZW5ndGg7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNsaWRlc051bWJlckV2ZW5Ub1Jvd3MgPSBNYXRoLmNlaWwoc2xpZGVzTGVuZ3RoIC8gcGFyYW1zLnNsaWRlc1BlckNvbHVtbikgKiBwYXJhbXMuc2xpZGVzUGVyQ29sdW1uO1xuICAgIH1cblxuICAgIGlmIChwYXJhbXMuc2xpZGVzUGVyVmlldyAhPT0gJ2F1dG8nICYmIHBhcmFtcy5zbGlkZXNQZXJDb2x1bW5GaWxsID09PSAncm93Jykge1xuICAgICAgc2xpZGVzTnVtYmVyRXZlblRvUm93cyA9IE1hdGgubWF4KHNsaWRlc051bWJlckV2ZW5Ub1Jvd3MsIHBhcmFtcy5zbGlkZXNQZXJWaWV3ICogcGFyYW1zLnNsaWRlc1BlckNvbHVtbik7XG4gICAgfVxuICB9IC8vIENhbGMgc2xpZGVzXG5cblxuICB2YXIgc2xpZGVTaXplO1xuICB2YXIgc2xpZGVzUGVyQ29sdW1uID0gcGFyYW1zLnNsaWRlc1BlckNvbHVtbjtcbiAgdmFyIHNsaWRlc1BlclJvdyA9IHNsaWRlc051bWJlckV2ZW5Ub1Jvd3MgLyBzbGlkZXNQZXJDb2x1bW47XG4gIHZhciBudW1GdWxsQ29sdW1ucyA9IE1hdGguZmxvb3Ioc2xpZGVzTGVuZ3RoIC8gcGFyYW1zLnNsaWRlc1BlckNvbHVtbik7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzbGlkZXNMZW5ndGg7IGkgKz0gMSkge1xuICAgIHNsaWRlU2l6ZSA9IDA7XG4gICAgdmFyIHNsaWRlID0gc2xpZGVzLmVxKGkpO1xuXG4gICAgaWYgKHBhcmFtcy5zbGlkZXNQZXJDb2x1bW4gPiAxKSB7XG4gICAgICAvLyBTZXQgc2xpZGVzIG9yZGVyXG4gICAgICB2YXIgbmV3U2xpZGVPcmRlckluZGV4ID0gdm9pZCAwO1xuICAgICAgdmFyIGNvbHVtbiA9IHZvaWQgMDtcbiAgICAgIHZhciByb3cgPSB2b2lkIDA7XG5cbiAgICAgIGlmIChwYXJhbXMuc2xpZGVzUGVyQ29sdW1uRmlsbCA9PT0gJ3JvdycgJiYgcGFyYW1zLnNsaWRlc1Blckdyb3VwID4gMSkge1xuICAgICAgICB2YXIgZ3JvdXBJbmRleCA9IE1hdGguZmxvb3IoaSAvIChwYXJhbXMuc2xpZGVzUGVyR3JvdXAgKiBwYXJhbXMuc2xpZGVzUGVyQ29sdW1uKSk7XG4gICAgICAgIHZhciBzbGlkZUluZGV4SW5Hcm91cCA9IGkgLSBwYXJhbXMuc2xpZGVzUGVyQ29sdW1uICogcGFyYW1zLnNsaWRlc1Blckdyb3VwICogZ3JvdXBJbmRleDtcbiAgICAgICAgdmFyIGNvbHVtbnNJbkdyb3VwID0gZ3JvdXBJbmRleCA9PT0gMCA/IHBhcmFtcy5zbGlkZXNQZXJHcm91cCA6IE1hdGgubWluKE1hdGguY2VpbCgoc2xpZGVzTGVuZ3RoIC0gZ3JvdXBJbmRleCAqIHNsaWRlc1BlckNvbHVtbiAqIHBhcmFtcy5zbGlkZXNQZXJHcm91cCkgLyBzbGlkZXNQZXJDb2x1bW4pLCBwYXJhbXMuc2xpZGVzUGVyR3JvdXApO1xuICAgICAgICByb3cgPSBNYXRoLmZsb29yKHNsaWRlSW5kZXhJbkdyb3VwIC8gY29sdW1uc0luR3JvdXApO1xuICAgICAgICBjb2x1bW4gPSBzbGlkZUluZGV4SW5Hcm91cCAtIHJvdyAqIGNvbHVtbnNJbkdyb3VwICsgZ3JvdXBJbmRleCAqIHBhcmFtcy5zbGlkZXNQZXJHcm91cDtcbiAgICAgICAgbmV3U2xpZGVPcmRlckluZGV4ID0gY29sdW1uICsgcm93ICogc2xpZGVzTnVtYmVyRXZlblRvUm93cyAvIHNsaWRlc1BlckNvbHVtbjtcbiAgICAgICAgc2xpZGUuY3NzKHtcbiAgICAgICAgICAnLXdlYmtpdC1ib3gtb3JkaW5hbC1ncm91cCc6IG5ld1NsaWRlT3JkZXJJbmRleCxcbiAgICAgICAgICAnLW1vei1ib3gtb3JkaW5hbC1ncm91cCc6IG5ld1NsaWRlT3JkZXJJbmRleCxcbiAgICAgICAgICAnLW1zLWZsZXgtb3JkZXInOiBuZXdTbGlkZU9yZGVySW5kZXgsXG4gICAgICAgICAgJy13ZWJraXQtb3JkZXInOiBuZXdTbGlkZU9yZGVySW5kZXgsXG4gICAgICAgICAgb3JkZXI6IG5ld1NsaWRlT3JkZXJJbmRleFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAocGFyYW1zLnNsaWRlc1BlckNvbHVtbkZpbGwgPT09ICdjb2x1bW4nKSB7XG4gICAgICAgIGNvbHVtbiA9IE1hdGguZmxvb3IoaSAvIHNsaWRlc1BlckNvbHVtbik7XG4gICAgICAgIHJvdyA9IGkgLSBjb2x1bW4gKiBzbGlkZXNQZXJDb2x1bW47XG5cbiAgICAgICAgaWYgKGNvbHVtbiA+IG51bUZ1bGxDb2x1bW5zIHx8IGNvbHVtbiA9PT0gbnVtRnVsbENvbHVtbnMgJiYgcm93ID09PSBzbGlkZXNQZXJDb2x1bW4gLSAxKSB7XG4gICAgICAgICAgcm93ICs9IDE7XG5cbiAgICAgICAgICBpZiAocm93ID49IHNsaWRlc1BlckNvbHVtbikge1xuICAgICAgICAgICAgcm93ID0gMDtcbiAgICAgICAgICAgIGNvbHVtbiArPSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcm93ID0gTWF0aC5mbG9vcihpIC8gc2xpZGVzUGVyUm93KTtcbiAgICAgICAgY29sdW1uID0gaSAtIHJvdyAqIHNsaWRlc1BlclJvdztcbiAgICAgIH1cblxuICAgICAgc2xpZGUuY3NzKGdldERpcmVjdGlvbkxhYmVsKCdtYXJnaW4tdG9wJyksIHJvdyAhPT0gMCA/IHBhcmFtcy5zcGFjZUJldHdlZW4gJiYgcGFyYW1zLnNwYWNlQmV0d2VlbiArIFwicHhcIiA6ICcnKTtcbiAgICB9XG5cbiAgICBpZiAoc2xpZGUuY3NzKCdkaXNwbGF5JykgPT09ICdub25lJykgY29udGludWU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcblxuICAgIGlmIChwYXJhbXMuc2xpZGVzUGVyVmlldyA9PT0gJ2F1dG8nKSB7XG4gICAgICB2YXIgc2xpZGVTdHlsZXMgPSBnZXRDb21wdXRlZFN0eWxlKHNsaWRlWzBdKTtcbiAgICAgIHZhciBjdXJyZW50VHJhbnNmb3JtID0gc2xpZGVbMF0uc3R5bGUudHJhbnNmb3JtO1xuICAgICAgdmFyIGN1cnJlbnRXZWJLaXRUcmFuc2Zvcm0gPSBzbGlkZVswXS5zdHlsZS53ZWJraXRUcmFuc2Zvcm07XG5cbiAgICAgIGlmIChjdXJyZW50VHJhbnNmb3JtKSB7XG4gICAgICAgIHNsaWRlWzBdLnN0eWxlLnRyYW5zZm9ybSA9ICdub25lJztcbiAgICAgIH1cblxuICAgICAgaWYgKGN1cnJlbnRXZWJLaXRUcmFuc2Zvcm0pIHtcbiAgICAgICAgc2xpZGVbMF0uc3R5bGUud2Via2l0VHJhbnNmb3JtID0gJ25vbmUnO1xuICAgICAgfVxuXG4gICAgICBpZiAocGFyYW1zLnJvdW5kTGVuZ3Rocykge1xuICAgICAgICBzbGlkZVNpemUgPSBzd2lwZXIuaXNIb3Jpem9udGFsKCkgPyBzbGlkZS5vdXRlcldpZHRoKHRydWUpIDogc2xpZGUub3V0ZXJIZWlnaHQodHJ1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgdmFyIHdpZHRoID0gZ2V0RGlyZWN0aW9uUHJvcGVydHlWYWx1ZShzbGlkZVN0eWxlcywgJ3dpZHRoJyk7XG4gICAgICAgIHZhciBwYWRkaW5nTGVmdCA9IGdldERpcmVjdGlvblByb3BlcnR5VmFsdWUoc2xpZGVTdHlsZXMsICdwYWRkaW5nLWxlZnQnKTtcbiAgICAgICAgdmFyIHBhZGRpbmdSaWdodCA9IGdldERpcmVjdGlvblByb3BlcnR5VmFsdWUoc2xpZGVTdHlsZXMsICdwYWRkaW5nLXJpZ2h0Jyk7XG4gICAgICAgIHZhciBtYXJnaW5MZWZ0ID0gZ2V0RGlyZWN0aW9uUHJvcGVydHlWYWx1ZShzbGlkZVN0eWxlcywgJ21hcmdpbi1sZWZ0Jyk7XG4gICAgICAgIHZhciBtYXJnaW5SaWdodCA9IGdldERpcmVjdGlvblByb3BlcnR5VmFsdWUoc2xpZGVTdHlsZXMsICdtYXJnaW4tcmlnaHQnKTtcbiAgICAgICAgdmFyIGJveFNpemluZyA9IHNsaWRlU3R5bGVzLmdldFByb3BlcnR5VmFsdWUoJ2JveC1zaXppbmcnKTtcblxuICAgICAgICBpZiAoYm94U2l6aW5nICYmIGJveFNpemluZyA9PT0gJ2JvcmRlci1ib3gnKSB7XG4gICAgICAgICAgc2xpZGVTaXplID0gd2lkdGggKyBtYXJnaW5MZWZ0ICsgbWFyZ2luUmlnaHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIF9zbGlkZSQgPSBzbGlkZVswXSxcbiAgICAgICAgICAgICAgY2xpZW50V2lkdGggPSBfc2xpZGUkLmNsaWVudFdpZHRoLFxuICAgICAgICAgICAgICBvZmZzZXRXaWR0aCA9IF9zbGlkZSQub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgc2xpZGVTaXplID0gd2lkdGggKyBwYWRkaW5nTGVmdCArIHBhZGRpbmdSaWdodCArIG1hcmdpbkxlZnQgKyBtYXJnaW5SaWdodCArIChvZmZzZXRXaWR0aCAtIGNsaWVudFdpZHRoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoY3VycmVudFRyYW5zZm9ybSkge1xuICAgICAgICBzbGlkZVswXS5zdHlsZS50cmFuc2Zvcm0gPSBjdXJyZW50VHJhbnNmb3JtO1xuICAgICAgfVxuXG4gICAgICBpZiAoY3VycmVudFdlYktpdFRyYW5zZm9ybSkge1xuICAgICAgICBzbGlkZVswXS5zdHlsZS53ZWJraXRUcmFuc2Zvcm0gPSBjdXJyZW50V2ViS2l0VHJhbnNmb3JtO1xuICAgICAgfVxuXG4gICAgICBpZiAocGFyYW1zLnJvdW5kTGVuZ3Rocykgc2xpZGVTaXplID0gTWF0aC5mbG9vcihzbGlkZVNpemUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzbGlkZVNpemUgPSAoc3dpcGVyU2l6ZSAtIChwYXJhbXMuc2xpZGVzUGVyVmlldyAtIDEpICogc3BhY2VCZXR3ZWVuKSAvIHBhcmFtcy5zbGlkZXNQZXJWaWV3O1xuICAgICAgaWYgKHBhcmFtcy5yb3VuZExlbmd0aHMpIHNsaWRlU2l6ZSA9IE1hdGguZmxvb3Ioc2xpZGVTaXplKTtcblxuICAgICAgaWYgKHNsaWRlc1tpXSkge1xuICAgICAgICBzbGlkZXNbaV0uc3R5bGVbZ2V0RGlyZWN0aW9uTGFiZWwoJ3dpZHRoJyldID0gc2xpZGVTaXplICsgXCJweFwiO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzbGlkZXNbaV0pIHtcbiAgICAgIHNsaWRlc1tpXS5zd2lwZXJTbGlkZVNpemUgPSBzbGlkZVNpemU7XG4gICAgfVxuXG4gICAgc2xpZGVzU2l6ZXNHcmlkLnB1c2goc2xpZGVTaXplKTtcblxuICAgIGlmIChwYXJhbXMuY2VudGVyZWRTbGlkZXMpIHtcbiAgICAgIHNsaWRlUG9zaXRpb24gPSBzbGlkZVBvc2l0aW9uICsgc2xpZGVTaXplIC8gMiArIHByZXZTbGlkZVNpemUgLyAyICsgc3BhY2VCZXR3ZWVuO1xuICAgICAgaWYgKHByZXZTbGlkZVNpemUgPT09IDAgJiYgaSAhPT0gMCkgc2xpZGVQb3NpdGlvbiA9IHNsaWRlUG9zaXRpb24gLSBzd2lwZXJTaXplIC8gMiAtIHNwYWNlQmV0d2VlbjtcbiAgICAgIGlmIChpID09PSAwKSBzbGlkZVBvc2l0aW9uID0gc2xpZGVQb3NpdGlvbiAtIHN3aXBlclNpemUgLyAyIC0gc3BhY2VCZXR3ZWVuO1xuICAgICAgaWYgKE1hdGguYWJzKHNsaWRlUG9zaXRpb24pIDwgMSAvIDEwMDApIHNsaWRlUG9zaXRpb24gPSAwO1xuICAgICAgaWYgKHBhcmFtcy5yb3VuZExlbmd0aHMpIHNsaWRlUG9zaXRpb24gPSBNYXRoLmZsb29yKHNsaWRlUG9zaXRpb24pO1xuICAgICAgaWYgKGluZGV4ICUgcGFyYW1zLnNsaWRlc1Blckdyb3VwID09PSAwKSBzbmFwR3JpZC5wdXNoKHNsaWRlUG9zaXRpb24pO1xuICAgICAgc2xpZGVzR3JpZC5wdXNoKHNsaWRlUG9zaXRpb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAocGFyYW1zLnJvdW5kTGVuZ3Rocykgc2xpZGVQb3NpdGlvbiA9IE1hdGguZmxvb3Ioc2xpZGVQb3NpdGlvbik7XG4gICAgICBpZiAoKGluZGV4IC0gTWF0aC5taW4oc3dpcGVyLnBhcmFtcy5zbGlkZXNQZXJHcm91cFNraXAsIGluZGV4KSkgJSBzd2lwZXIucGFyYW1zLnNsaWRlc1Blckdyb3VwID09PSAwKSBzbmFwR3JpZC5wdXNoKHNsaWRlUG9zaXRpb24pO1xuICAgICAgc2xpZGVzR3JpZC5wdXNoKHNsaWRlUG9zaXRpb24pO1xuICAgICAgc2xpZGVQb3NpdGlvbiA9IHNsaWRlUG9zaXRpb24gKyBzbGlkZVNpemUgKyBzcGFjZUJldHdlZW47XG4gICAgfVxuXG4gICAgc3dpcGVyLnZpcnR1YWxTaXplICs9IHNsaWRlU2l6ZSArIHNwYWNlQmV0d2VlbjtcbiAgICBwcmV2U2xpZGVTaXplID0gc2xpZGVTaXplO1xuICAgIGluZGV4ICs9IDE7XG4gIH1cblxuICBzd2lwZXIudmlydHVhbFNpemUgPSBNYXRoLm1heChzd2lwZXIudmlydHVhbFNpemUsIHN3aXBlclNpemUpICsgb2Zmc2V0QWZ0ZXI7XG4gIHZhciBuZXdTbGlkZXNHcmlkO1xuXG4gIGlmIChydGwgJiYgd3JvbmdSVEwgJiYgKHBhcmFtcy5lZmZlY3QgPT09ICdzbGlkZScgfHwgcGFyYW1zLmVmZmVjdCA9PT0gJ2NvdmVyZmxvdycpKSB7XG4gICAgJHdyYXBwZXJFbC5jc3Moe1xuICAgICAgd2lkdGg6IHN3aXBlci52aXJ0dWFsU2l6ZSArIHBhcmFtcy5zcGFjZUJldHdlZW4gKyBcInB4XCJcbiAgICB9KTtcbiAgfVxuXG4gIGlmIChwYXJhbXMuc2V0V3JhcHBlclNpemUpIHtcbiAgICB2YXIgXyR3cmFwcGVyRWwkY3NzO1xuXG4gICAgJHdyYXBwZXJFbC5jc3MoKF8kd3JhcHBlckVsJGNzcyA9IHt9LCBfJHdyYXBwZXJFbCRjc3NbZ2V0RGlyZWN0aW9uTGFiZWwoJ3dpZHRoJyldID0gc3dpcGVyLnZpcnR1YWxTaXplICsgcGFyYW1zLnNwYWNlQmV0d2VlbiArIFwicHhcIiwgXyR3cmFwcGVyRWwkY3NzKSk7XG4gIH1cblxuICBpZiAocGFyYW1zLnNsaWRlc1BlckNvbHVtbiA+IDEpIHtcbiAgICB2YXIgXyR3cmFwcGVyRWwkY3NzMjtcblxuICAgIHN3aXBlci52aXJ0dWFsU2l6ZSA9IChzbGlkZVNpemUgKyBwYXJhbXMuc3BhY2VCZXR3ZWVuKSAqIHNsaWRlc051bWJlckV2ZW5Ub1Jvd3M7XG4gICAgc3dpcGVyLnZpcnR1YWxTaXplID0gTWF0aC5jZWlsKHN3aXBlci52aXJ0dWFsU2l6ZSAvIHBhcmFtcy5zbGlkZXNQZXJDb2x1bW4pIC0gcGFyYW1zLnNwYWNlQmV0d2VlbjtcbiAgICAkd3JhcHBlckVsLmNzcygoXyR3cmFwcGVyRWwkY3NzMiA9IHt9LCBfJHdyYXBwZXJFbCRjc3MyW2dldERpcmVjdGlvbkxhYmVsKCd3aWR0aCcpXSA9IHN3aXBlci52aXJ0dWFsU2l6ZSArIHBhcmFtcy5zcGFjZUJldHdlZW4gKyBcInB4XCIsIF8kd3JhcHBlckVsJGNzczIpKTtcblxuICAgIGlmIChwYXJhbXMuY2VudGVyZWRTbGlkZXMpIHtcbiAgICAgIG5ld1NsaWRlc0dyaWQgPSBbXTtcblxuICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IHNuYXBHcmlkLmxlbmd0aDsgX2kgKz0gMSkge1xuICAgICAgICB2YXIgc2xpZGVzR3JpZEl0ZW0gPSBzbmFwR3JpZFtfaV07XG4gICAgICAgIGlmIChwYXJhbXMucm91bmRMZW5ndGhzKSBzbGlkZXNHcmlkSXRlbSA9IE1hdGguZmxvb3Ioc2xpZGVzR3JpZEl0ZW0pO1xuICAgICAgICBpZiAoc25hcEdyaWRbX2ldIDwgc3dpcGVyLnZpcnR1YWxTaXplICsgc25hcEdyaWRbMF0pIG5ld1NsaWRlc0dyaWQucHVzaChzbGlkZXNHcmlkSXRlbSk7XG4gICAgICB9XG5cbiAgICAgIHNuYXBHcmlkID0gbmV3U2xpZGVzR3JpZDtcbiAgICB9XG4gIH0gLy8gUmVtb3ZlIGxhc3QgZ3JpZCBlbGVtZW50cyBkZXBlbmRpbmcgb24gd2lkdGhcblxuXG4gIGlmICghcGFyYW1zLmNlbnRlcmVkU2xpZGVzKSB7XG4gICAgbmV3U2xpZGVzR3JpZCA9IFtdO1xuXG4gICAgZm9yICh2YXIgX2kyID0gMDsgX2kyIDwgc25hcEdyaWQubGVuZ3RoOyBfaTIgKz0gMSkge1xuICAgICAgdmFyIF9zbGlkZXNHcmlkSXRlbSA9IHNuYXBHcmlkW19pMl07XG4gICAgICBpZiAocGFyYW1zLnJvdW5kTGVuZ3RocykgX3NsaWRlc0dyaWRJdGVtID0gTWF0aC5mbG9vcihfc2xpZGVzR3JpZEl0ZW0pO1xuXG4gICAgICBpZiAoc25hcEdyaWRbX2kyXSA8PSBzd2lwZXIudmlydHVhbFNpemUgLSBzd2lwZXJTaXplKSB7XG4gICAgICAgIG5ld1NsaWRlc0dyaWQucHVzaChfc2xpZGVzR3JpZEl0ZW0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHNuYXBHcmlkID0gbmV3U2xpZGVzR3JpZDtcblxuICAgIGlmIChNYXRoLmZsb29yKHN3aXBlci52aXJ0dWFsU2l6ZSAtIHN3aXBlclNpemUpIC0gTWF0aC5mbG9vcihzbmFwR3JpZFtzbmFwR3JpZC5sZW5ndGggLSAxXSkgPiAxKSB7XG4gICAgICBzbmFwR3JpZC5wdXNoKHN3aXBlci52aXJ0dWFsU2l6ZSAtIHN3aXBlclNpemUpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChzbmFwR3JpZC5sZW5ndGggPT09IDApIHNuYXBHcmlkID0gWzBdO1xuXG4gIGlmIChwYXJhbXMuc3BhY2VCZXR3ZWVuICE9PSAwKSB7XG4gICAgdmFyIF9zbGlkZXMkZmlsdGVyJGNzcztcblxuICAgIHZhciBrZXkgPSBzd2lwZXIuaXNIb3Jpem9udGFsKCkgJiYgcnRsID8gJ21hcmdpbkxlZnQnIDogZ2V0RGlyZWN0aW9uTGFiZWwoJ21hcmdpblJpZ2h0Jyk7XG4gICAgc2xpZGVzLmZpbHRlcihmdW5jdGlvbiAoXywgc2xpZGVJbmRleCkge1xuICAgICAgaWYgKCFwYXJhbXMuY3NzTW9kZSkgcmV0dXJuIHRydWU7XG5cbiAgICAgIGlmIChzbGlkZUluZGV4ID09PSBzbGlkZXMubGVuZ3RoIC0gMSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pLmNzcygoX3NsaWRlcyRmaWx0ZXIkY3NzID0ge30sIF9zbGlkZXMkZmlsdGVyJGNzc1trZXldID0gc3BhY2VCZXR3ZWVuICsgXCJweFwiLCBfc2xpZGVzJGZpbHRlciRjc3MpKTtcbiAgfVxuXG4gIGlmIChwYXJhbXMuY2VudGVyZWRTbGlkZXMgJiYgcGFyYW1zLmNlbnRlcmVkU2xpZGVzQm91bmRzKSB7XG4gICAgdmFyIGFsbFNsaWRlc1NpemUgPSAwO1xuICAgIHNsaWRlc1NpemVzR3JpZC5mb3JFYWNoKGZ1bmN0aW9uIChzbGlkZVNpemVWYWx1ZSkge1xuICAgICAgYWxsU2xpZGVzU2l6ZSArPSBzbGlkZVNpemVWYWx1ZSArIChwYXJhbXMuc3BhY2VCZXR3ZWVuID8gcGFyYW1zLnNwYWNlQmV0d2VlbiA6IDApO1xuICAgIH0pO1xuICAgIGFsbFNsaWRlc1NpemUgLT0gcGFyYW1zLnNwYWNlQmV0d2VlbjtcbiAgICB2YXIgbWF4U25hcCA9IGFsbFNsaWRlc1NpemUgLSBzd2lwZXJTaXplO1xuICAgIHNuYXBHcmlkID0gc25hcEdyaWQubWFwKGZ1bmN0aW9uIChzbmFwKSB7XG4gICAgICBpZiAoc25hcCA8IDApIHJldHVybiAtb2Zmc2V0QmVmb3JlO1xuICAgICAgaWYgKHNuYXAgPiBtYXhTbmFwKSByZXR1cm4gbWF4U25hcCArIG9mZnNldEFmdGVyO1xuICAgICAgcmV0dXJuIHNuYXA7XG4gICAgfSk7XG4gIH1cblxuICBpZiAocGFyYW1zLmNlbnRlckluc3VmZmljaWVudFNsaWRlcykge1xuICAgIHZhciBfYWxsU2xpZGVzU2l6ZSA9IDA7XG4gICAgc2xpZGVzU2l6ZXNHcmlkLmZvckVhY2goZnVuY3Rpb24gKHNsaWRlU2l6ZVZhbHVlKSB7XG4gICAgICBfYWxsU2xpZGVzU2l6ZSArPSBzbGlkZVNpemVWYWx1ZSArIChwYXJhbXMuc3BhY2VCZXR3ZWVuID8gcGFyYW1zLnNwYWNlQmV0d2VlbiA6IDApO1xuICAgIH0pO1xuICAgIF9hbGxTbGlkZXNTaXplIC09IHBhcmFtcy5zcGFjZUJldHdlZW47XG5cbiAgICBpZiAoX2FsbFNsaWRlc1NpemUgPCBzd2lwZXJTaXplKSB7XG4gICAgICB2YXIgYWxsU2xpZGVzT2Zmc2V0ID0gKHN3aXBlclNpemUgLSBfYWxsU2xpZGVzU2l6ZSkgLyAyO1xuICAgICAgc25hcEdyaWQuZm9yRWFjaChmdW5jdGlvbiAoc25hcCwgc25hcEluZGV4KSB7XG4gICAgICAgIHNuYXBHcmlkW3NuYXBJbmRleF0gPSBzbmFwIC0gYWxsU2xpZGVzT2Zmc2V0O1xuICAgICAgfSk7XG4gICAgICBzbGlkZXNHcmlkLmZvckVhY2goZnVuY3Rpb24gKHNuYXAsIHNuYXBJbmRleCkge1xuICAgICAgICBzbGlkZXNHcmlkW3NuYXBJbmRleF0gPSBzbmFwICsgYWxsU2xpZGVzT2Zmc2V0O1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZXh0ZW5kKHN3aXBlciwge1xuICAgIHNsaWRlczogc2xpZGVzLFxuICAgIHNuYXBHcmlkOiBzbmFwR3JpZCxcbiAgICBzbGlkZXNHcmlkOiBzbGlkZXNHcmlkLFxuICAgIHNsaWRlc1NpemVzR3JpZDogc2xpZGVzU2l6ZXNHcmlkXG4gIH0pO1xuXG4gIGlmIChzbGlkZXNMZW5ndGggIT09IHByZXZpb3VzU2xpZGVzTGVuZ3RoKSB7XG4gICAgc3dpcGVyLmVtaXQoJ3NsaWRlc0xlbmd0aENoYW5nZScpO1xuICB9XG5cbiAgaWYgKHNuYXBHcmlkLmxlbmd0aCAhPT0gcHJldmlvdXNTbmFwR3JpZExlbmd0aCkge1xuICAgIGlmIChzd2lwZXIucGFyYW1zLndhdGNoT3ZlcmZsb3cpIHN3aXBlci5jaGVja092ZXJmbG93KCk7XG4gICAgc3dpcGVyLmVtaXQoJ3NuYXBHcmlkTGVuZ3RoQ2hhbmdlJyk7XG4gIH1cblxuICBpZiAoc2xpZGVzR3JpZC5sZW5ndGggIT09IHByZXZpb3VzU2xpZGVzR3JpZExlbmd0aCkge1xuICAgIHN3aXBlci5lbWl0KCdzbGlkZXNHcmlkTGVuZ3RoQ2hhbmdlJyk7XG4gIH1cblxuICBpZiAocGFyYW1zLndhdGNoU2xpZGVzUHJvZ3Jlc3MgfHwgcGFyYW1zLndhdGNoU2xpZGVzVmlzaWJpbGl0eSkge1xuICAgIHN3aXBlci51cGRhdGVTbGlkZXNPZmZzZXQoKTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVwZGF0ZVNsaWRlc0NsYXNzZXMoKSB7XG4gIHZhciBzd2lwZXIgPSB0aGlzO1xuICB2YXIgc2xpZGVzID0gc3dpcGVyLnNsaWRlcyxcbiAgICAgIHBhcmFtcyA9IHN3aXBlci5wYXJhbXMsXG4gICAgICAkd3JhcHBlckVsID0gc3dpcGVyLiR3cmFwcGVyRWwsXG4gICAgICBhY3RpdmVJbmRleCA9IHN3aXBlci5hY3RpdmVJbmRleCxcbiAgICAgIHJlYWxJbmRleCA9IHN3aXBlci5yZWFsSW5kZXg7XG4gIHZhciBpc1ZpcnR1YWwgPSBzd2lwZXIudmlydHVhbCAmJiBwYXJhbXMudmlydHVhbC5lbmFibGVkO1xuICBzbGlkZXMucmVtb3ZlQ2xhc3MocGFyYW1zLnNsaWRlQWN0aXZlQ2xhc3MgKyBcIiBcIiArIHBhcmFtcy5zbGlkZU5leHRDbGFzcyArIFwiIFwiICsgcGFyYW1zLnNsaWRlUHJldkNsYXNzICsgXCIgXCIgKyBwYXJhbXMuc2xpZGVEdXBsaWNhdGVBY3RpdmVDbGFzcyArIFwiIFwiICsgcGFyYW1zLnNsaWRlRHVwbGljYXRlTmV4dENsYXNzICsgXCIgXCIgKyBwYXJhbXMuc2xpZGVEdXBsaWNhdGVQcmV2Q2xhc3MpO1xuICB2YXIgYWN0aXZlU2xpZGU7XG5cbiAgaWYgKGlzVmlydHVhbCkge1xuICAgIGFjdGl2ZVNsaWRlID0gc3dpcGVyLiR3cmFwcGVyRWwuZmluZChcIi5cIiArIHBhcmFtcy5zbGlkZUNsYXNzICsgXCJbZGF0YS1zd2lwZXItc2xpZGUtaW5kZXg9XFxcIlwiICsgYWN0aXZlSW5kZXggKyBcIlxcXCJdXCIpO1xuICB9IGVsc2Uge1xuICAgIGFjdGl2ZVNsaWRlID0gc2xpZGVzLmVxKGFjdGl2ZUluZGV4KTtcbiAgfSAvLyBBY3RpdmUgY2xhc3Nlc1xuXG5cbiAgYWN0aXZlU2xpZGUuYWRkQ2xhc3MocGFyYW1zLnNsaWRlQWN0aXZlQ2xhc3MpO1xuXG4gIGlmIChwYXJhbXMubG9vcCkge1xuICAgIC8vIER1cGxpY2F0ZSB0byBhbGwgbG9vcGVkIHNsaWRlc1xuICAgIGlmIChhY3RpdmVTbGlkZS5oYXNDbGFzcyhwYXJhbXMuc2xpZGVEdXBsaWNhdGVDbGFzcykpIHtcbiAgICAgICR3cmFwcGVyRWwuY2hpbGRyZW4oXCIuXCIgKyBwYXJhbXMuc2xpZGVDbGFzcyArIFwiOm5vdCguXCIgKyBwYXJhbXMuc2xpZGVEdXBsaWNhdGVDbGFzcyArIFwiKVtkYXRhLXN3aXBlci1zbGlkZS1pbmRleD1cXFwiXCIgKyByZWFsSW5kZXggKyBcIlxcXCJdXCIpLmFkZENsYXNzKHBhcmFtcy5zbGlkZUR1cGxpY2F0ZUFjdGl2ZUNsYXNzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJHdyYXBwZXJFbC5jaGlsZHJlbihcIi5cIiArIHBhcmFtcy5zbGlkZUNsYXNzICsgXCIuXCIgKyBwYXJhbXMuc2xpZGVEdXBsaWNhdGVDbGFzcyArIFwiW2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4PVxcXCJcIiArIHJlYWxJbmRleCArIFwiXFxcIl1cIikuYWRkQ2xhc3MocGFyYW1zLnNsaWRlRHVwbGljYXRlQWN0aXZlQ2xhc3MpO1xuICAgIH1cbiAgfSAvLyBOZXh0IFNsaWRlXG5cblxuICB2YXIgbmV4dFNsaWRlID0gYWN0aXZlU2xpZGUubmV4dEFsbChcIi5cIiArIHBhcmFtcy5zbGlkZUNsYXNzKS5lcSgwKS5hZGRDbGFzcyhwYXJhbXMuc2xpZGVOZXh0Q2xhc3MpO1xuXG4gIGlmIChwYXJhbXMubG9vcCAmJiBuZXh0U2xpZGUubGVuZ3RoID09PSAwKSB7XG4gICAgbmV4dFNsaWRlID0gc2xpZGVzLmVxKDApO1xuICAgIG5leHRTbGlkZS5hZGRDbGFzcyhwYXJhbXMuc2xpZGVOZXh0Q2xhc3MpO1xuICB9IC8vIFByZXYgU2xpZGVcblxuXG4gIHZhciBwcmV2U2xpZGUgPSBhY3RpdmVTbGlkZS5wcmV2QWxsKFwiLlwiICsgcGFyYW1zLnNsaWRlQ2xhc3MpLmVxKDApLmFkZENsYXNzKHBhcmFtcy5zbGlkZVByZXZDbGFzcyk7XG5cbiAgaWYgKHBhcmFtcy5sb29wICYmIHByZXZTbGlkZS5sZW5ndGggPT09IDApIHtcbiAgICBwcmV2U2xpZGUgPSBzbGlkZXMuZXEoLTEpO1xuICAgIHByZXZTbGlkZS5hZGRDbGFzcyhwYXJhbXMuc2xpZGVQcmV2Q2xhc3MpO1xuICB9XG5cbiAgaWYgKHBhcmFtcy5sb29wKSB7XG4gICAgLy8gRHVwbGljYXRlIHRvIGFsbCBsb29wZWQgc2xpZGVzXG4gICAgaWYgKG5leHRTbGlkZS5oYXNDbGFzcyhwYXJhbXMuc2xpZGVEdXBsaWNhdGVDbGFzcykpIHtcbiAgICAgICR3cmFwcGVyRWwuY2hpbGRyZW4oXCIuXCIgKyBwYXJhbXMuc2xpZGVDbGFzcyArIFwiOm5vdCguXCIgKyBwYXJhbXMuc2xpZGVEdXBsaWNhdGVDbGFzcyArIFwiKVtkYXRhLXN3aXBlci1zbGlkZS1pbmRleD1cXFwiXCIgKyBuZXh0U2xpZGUuYXR0cignZGF0YS1zd2lwZXItc2xpZGUtaW5kZXgnKSArIFwiXFxcIl1cIikuYWRkQ2xhc3MocGFyYW1zLnNsaWRlRHVwbGljYXRlTmV4dENsYXNzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJHdyYXBwZXJFbC5jaGlsZHJlbihcIi5cIiArIHBhcmFtcy5zbGlkZUNsYXNzICsgXCIuXCIgKyBwYXJhbXMuc2xpZGVEdXBsaWNhdGVDbGFzcyArIFwiW2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4PVxcXCJcIiArIG5leHRTbGlkZS5hdHRyKCdkYXRhLXN3aXBlci1zbGlkZS1pbmRleCcpICsgXCJcXFwiXVwiKS5hZGRDbGFzcyhwYXJhbXMuc2xpZGVEdXBsaWNhdGVOZXh0Q2xhc3MpO1xuICAgIH1cblxuICAgIGlmIChwcmV2U2xpZGUuaGFzQ2xhc3MocGFyYW1zLnNsaWRlRHVwbGljYXRlQ2xhc3MpKSB7XG4gICAgICAkd3JhcHBlckVsLmNoaWxkcmVuKFwiLlwiICsgcGFyYW1zLnNsaWRlQ2xhc3MgKyBcIjpub3QoLlwiICsgcGFyYW1zLnNsaWRlRHVwbGljYXRlQ2xhc3MgKyBcIilbZGF0YS1zd2lwZXItc2xpZGUtaW5kZXg9XFxcIlwiICsgcHJldlNsaWRlLmF0dHIoJ2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4JykgKyBcIlxcXCJdXCIpLmFkZENsYXNzKHBhcmFtcy5zbGlkZUR1cGxpY2F0ZVByZXZDbGFzcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICR3cmFwcGVyRWwuY2hpbGRyZW4oXCIuXCIgKyBwYXJhbXMuc2xpZGVDbGFzcyArIFwiLlwiICsgcGFyYW1zLnNsaWRlRHVwbGljYXRlQ2xhc3MgKyBcIltkYXRhLXN3aXBlci1zbGlkZS1pbmRleD1cXFwiXCIgKyBwcmV2U2xpZGUuYXR0cignZGF0YS1zd2lwZXItc2xpZGUtaW5kZXgnKSArIFwiXFxcIl1cIikuYWRkQ2xhc3MocGFyYW1zLnNsaWRlRHVwbGljYXRlUHJldkNsYXNzKTtcbiAgICB9XG4gIH1cblxuICBzd2lwZXIuZW1pdFNsaWRlc0NsYXNzZXMoKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1cGRhdGVTbGlkZXNPZmZzZXQoKSB7XG4gIHZhciBzd2lwZXIgPSB0aGlzO1xuICB2YXIgc2xpZGVzID0gc3dpcGVyLnNsaWRlcztcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHNsaWRlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIHNsaWRlc1tpXS5zd2lwZXJTbGlkZU9mZnNldCA9IHN3aXBlci5pc0hvcml6b250YWwoKSA/IHNsaWRlc1tpXS5vZmZzZXRMZWZ0IDogc2xpZGVzW2ldLm9mZnNldFRvcDtcbiAgfVxufSIsImltcG9ydCAkIGZyb20gJy4uLy4uLy4uL3V0aWxzL2RvbSc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1cGRhdGVTbGlkZXNQcm9ncmVzcyh0cmFuc2xhdGUpIHtcbiAgaWYgKHRyYW5zbGF0ZSA9PT0gdm9pZCAwKSB7XG4gICAgdHJhbnNsYXRlID0gdGhpcyAmJiB0aGlzLnRyYW5zbGF0ZSB8fCAwO1xuICB9XG5cbiAgdmFyIHN3aXBlciA9IHRoaXM7XG4gIHZhciBwYXJhbXMgPSBzd2lwZXIucGFyYW1zO1xuICB2YXIgc2xpZGVzID0gc3dpcGVyLnNsaWRlcyxcbiAgICAgIHJ0bCA9IHN3aXBlci5ydGxUcmFuc2xhdGU7XG4gIGlmIChzbGlkZXMubGVuZ3RoID09PSAwKSByZXR1cm47XG4gIGlmICh0eXBlb2Ygc2xpZGVzWzBdLnN3aXBlclNsaWRlT2Zmc2V0ID09PSAndW5kZWZpbmVkJykgc3dpcGVyLnVwZGF0ZVNsaWRlc09mZnNldCgpO1xuICB2YXIgb2Zmc2V0Q2VudGVyID0gLXRyYW5zbGF0ZTtcbiAgaWYgKHJ0bCkgb2Zmc2V0Q2VudGVyID0gdHJhbnNsYXRlOyAvLyBWaXNpYmxlIFNsaWRlc1xuXG4gIHNsaWRlcy5yZW1vdmVDbGFzcyhwYXJhbXMuc2xpZGVWaXNpYmxlQ2xhc3MpO1xuICBzd2lwZXIudmlzaWJsZVNsaWRlc0luZGV4ZXMgPSBbXTtcbiAgc3dpcGVyLnZpc2libGVTbGlkZXMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHNsaWRlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIHZhciBzbGlkZSA9IHNsaWRlc1tpXTtcbiAgICB2YXIgc2xpZGVQcm9ncmVzcyA9IChvZmZzZXRDZW50ZXIgKyAocGFyYW1zLmNlbnRlcmVkU2xpZGVzID8gc3dpcGVyLm1pblRyYW5zbGF0ZSgpIDogMCkgLSBzbGlkZS5zd2lwZXJTbGlkZU9mZnNldCkgLyAoc2xpZGUuc3dpcGVyU2xpZGVTaXplICsgcGFyYW1zLnNwYWNlQmV0d2Vlbik7XG5cbiAgICBpZiAocGFyYW1zLndhdGNoU2xpZGVzVmlzaWJpbGl0eSB8fCBwYXJhbXMuY2VudGVyZWRTbGlkZXMgJiYgcGFyYW1zLmF1dG9IZWlnaHQpIHtcbiAgICAgIHZhciBzbGlkZUJlZm9yZSA9IC0ob2Zmc2V0Q2VudGVyIC0gc2xpZGUuc3dpcGVyU2xpZGVPZmZzZXQpO1xuICAgICAgdmFyIHNsaWRlQWZ0ZXIgPSBzbGlkZUJlZm9yZSArIHN3aXBlci5zbGlkZXNTaXplc0dyaWRbaV07XG4gICAgICB2YXIgaXNWaXNpYmxlID0gc2xpZGVCZWZvcmUgPj0gMCAmJiBzbGlkZUJlZm9yZSA8IHN3aXBlci5zaXplIC0gMSB8fCBzbGlkZUFmdGVyID4gMSAmJiBzbGlkZUFmdGVyIDw9IHN3aXBlci5zaXplIHx8IHNsaWRlQmVmb3JlIDw9IDAgJiYgc2xpZGVBZnRlciA+PSBzd2lwZXIuc2l6ZTtcblxuICAgICAgaWYgKGlzVmlzaWJsZSkge1xuICAgICAgICBzd2lwZXIudmlzaWJsZVNsaWRlcy5wdXNoKHNsaWRlKTtcbiAgICAgICAgc3dpcGVyLnZpc2libGVTbGlkZXNJbmRleGVzLnB1c2goaSk7XG4gICAgICAgIHNsaWRlcy5lcShpKS5hZGRDbGFzcyhwYXJhbXMuc2xpZGVWaXNpYmxlQ2xhc3MpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHNsaWRlLnByb2dyZXNzID0gcnRsID8gLXNsaWRlUHJvZ3Jlc3MgOiBzbGlkZVByb2dyZXNzO1xuICB9XG5cbiAgc3dpcGVyLnZpc2libGVTbGlkZXMgPSAkKHN3aXBlci52aXNpYmxlU2xpZGVzKTtcbn0iLCJmdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG5pbXBvcnQgJCBmcm9tICcuLi8uLi91dGlscy9kb20nO1xuaW1wb3J0IHsgZXh0ZW5kLCBiaW5kTW9kdWxlTWV0aG9kcywgY3JlYXRlRWxlbWVudElmTm90RGVmaW5lZCB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWxzJztcbnZhciBOYXZpZ2F0aW9uID0ge1xuICB0b2dnbGVFbDogZnVuY3Rpb24gdG9nZ2xlRWwoJGVsLCBkaXNhYmxlZCkge1xuICAgICRlbFtkaXNhYmxlZCA/ICdhZGRDbGFzcycgOiAncmVtb3ZlQ2xhc3MnXSh0aGlzLnBhcmFtcy5uYXZpZ2F0aW9uLmRpc2FibGVkQ2xhc3MpO1xuICAgIGlmICgkZWxbMF0gJiYgJGVsWzBdLnRhZ05hbWUgPT09ICdCVVRUT04nKSAkZWxbMF0uZGlzYWJsZWQgPSBkaXNhYmxlZDtcbiAgfSxcbiAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7XG4gICAgLy8gVXBkYXRlIE5hdmlnYXRpb24gQnV0dG9uc1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIHZhciBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLm5hdmlnYXRpb247XG4gICAgdmFyIHRvZ2dsZUVsID0gc3dpcGVyLm5hdmlnYXRpb24udG9nZ2xlRWw7XG4gICAgaWYgKHN3aXBlci5wYXJhbXMubG9vcCkgcmV0dXJuO1xuICAgIHZhciBfc3dpcGVyJG5hdmlnYXRpb24gPSBzd2lwZXIubmF2aWdhdGlvbixcbiAgICAgICAgJG5leHRFbCA9IF9zd2lwZXIkbmF2aWdhdGlvbi4kbmV4dEVsLFxuICAgICAgICAkcHJldkVsID0gX3N3aXBlciRuYXZpZ2F0aW9uLiRwcmV2RWw7XG5cbiAgICBpZiAoJHByZXZFbCAmJiAkcHJldkVsLmxlbmd0aCA+IDApIHtcbiAgICAgIGlmIChzd2lwZXIuaXNCZWdpbm5pbmcpIHtcbiAgICAgICAgdG9nZ2xlRWwoJHByZXZFbCwgdHJ1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0b2dnbGVFbCgkcHJldkVsLCBmYWxzZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChzd2lwZXIucGFyYW1zLndhdGNoT3ZlcmZsb3cgJiYgc3dpcGVyLmVuYWJsZWQpIHtcbiAgICAgICAgJHByZXZFbFtzd2lwZXIuaXNMb2NrZWQgPyAnYWRkQ2xhc3MnIDogJ3JlbW92ZUNsYXNzJ10ocGFyYW1zLmxvY2tDbGFzcyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCRuZXh0RWwgJiYgJG5leHRFbC5sZW5ndGggPiAwKSB7XG4gICAgICBpZiAoc3dpcGVyLmlzRW5kKSB7XG4gICAgICAgIHRvZ2dsZUVsKCRuZXh0RWwsIHRydWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdG9nZ2xlRWwoJG5leHRFbCwgZmFsc2UpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3dpcGVyLnBhcmFtcy53YXRjaE92ZXJmbG93ICYmIHN3aXBlci5lbmFibGVkKSB7XG4gICAgICAgICRuZXh0RWxbc3dpcGVyLmlzTG9ja2VkID8gJ2FkZENsYXNzJyA6ICdyZW1vdmVDbGFzcyddKHBhcmFtcy5sb2NrQ2xhc3MpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgb25QcmV2Q2xpY2s6IGZ1bmN0aW9uIG9uUHJldkNsaWNrKGUpIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKHN3aXBlci5pc0JlZ2lubmluZyAmJiAhc3dpcGVyLnBhcmFtcy5sb29wKSByZXR1cm47XG4gICAgc3dpcGVyLnNsaWRlUHJldigpO1xuICB9LFxuICBvbk5leHRDbGljazogZnVuY3Rpb24gb25OZXh0Q2xpY2soZSkge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoc3dpcGVyLmlzRW5kICYmICFzd2lwZXIucGFyYW1zLmxvb3ApIHJldHVybjtcbiAgICBzd2lwZXIuc2xpZGVOZXh0KCk7XG4gIH0sXG4gIGluaXQ6IGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgdmFyIHBhcmFtcyA9IHN3aXBlci5wYXJhbXMubmF2aWdhdGlvbjtcbiAgICBzd2lwZXIucGFyYW1zLm5hdmlnYXRpb24gPSBjcmVhdGVFbGVtZW50SWZOb3REZWZpbmVkKHN3aXBlci4kZWwsIHN3aXBlci5wYXJhbXMubmF2aWdhdGlvbiwgc3dpcGVyLnBhcmFtcy5jcmVhdGVFbGVtZW50cywge1xuICAgICAgbmV4dEVsOiAnc3dpcGVyLWJ1dHRvbi1uZXh0JyxcbiAgICAgIHByZXZFbDogJ3N3aXBlci1idXR0b24tcHJldidcbiAgICB9KTtcbiAgICBpZiAoIShwYXJhbXMubmV4dEVsIHx8IHBhcmFtcy5wcmV2RWwpKSByZXR1cm47XG4gICAgdmFyICRuZXh0RWw7XG4gICAgdmFyICRwcmV2RWw7XG5cbiAgICBpZiAocGFyYW1zLm5leHRFbCkge1xuICAgICAgJG5leHRFbCA9ICQocGFyYW1zLm5leHRFbCk7XG5cbiAgICAgIGlmIChzd2lwZXIucGFyYW1zLnVuaXF1ZU5hdkVsZW1lbnRzICYmIHR5cGVvZiBwYXJhbXMubmV4dEVsID09PSAnc3RyaW5nJyAmJiAkbmV4dEVsLmxlbmd0aCA+IDEgJiYgc3dpcGVyLiRlbC5maW5kKHBhcmFtcy5uZXh0RWwpLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAkbmV4dEVsID0gc3dpcGVyLiRlbC5maW5kKHBhcmFtcy5uZXh0RWwpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwYXJhbXMucHJldkVsKSB7XG4gICAgICAkcHJldkVsID0gJChwYXJhbXMucHJldkVsKTtcblxuICAgICAgaWYgKHN3aXBlci5wYXJhbXMudW5pcXVlTmF2RWxlbWVudHMgJiYgdHlwZW9mIHBhcmFtcy5wcmV2RWwgPT09ICdzdHJpbmcnICYmICRwcmV2RWwubGVuZ3RoID4gMSAmJiBzd2lwZXIuJGVsLmZpbmQocGFyYW1zLnByZXZFbCkubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICRwcmV2RWwgPSBzd2lwZXIuJGVsLmZpbmQocGFyYW1zLnByZXZFbCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCRuZXh0RWwgJiYgJG5leHRFbC5sZW5ndGggPiAwKSB7XG4gICAgICAkbmV4dEVsLm9uKCdjbGljaycsIHN3aXBlci5uYXZpZ2F0aW9uLm9uTmV4dENsaWNrKTtcbiAgICB9XG5cbiAgICBpZiAoJHByZXZFbCAmJiAkcHJldkVsLmxlbmd0aCA+IDApIHtcbiAgICAgICRwcmV2RWwub24oJ2NsaWNrJywgc3dpcGVyLm5hdmlnYXRpb24ub25QcmV2Q2xpY2spO1xuICAgIH1cblxuICAgIGV4dGVuZChzd2lwZXIubmF2aWdhdGlvbiwge1xuICAgICAgJG5leHRFbDogJG5leHRFbCxcbiAgICAgIG5leHRFbDogJG5leHRFbCAmJiAkbmV4dEVsWzBdLFxuICAgICAgJHByZXZFbDogJHByZXZFbCxcbiAgICAgIHByZXZFbDogJHByZXZFbCAmJiAkcHJldkVsWzBdXG4gICAgfSk7XG5cbiAgICBpZiAoIXN3aXBlci5lbmFibGVkKSB7XG4gICAgICBpZiAoJG5leHRFbCkgJG5leHRFbC5hZGRDbGFzcyhwYXJhbXMubG9ja0NsYXNzKTtcbiAgICAgIGlmICgkcHJldkVsKSAkcHJldkVsLmFkZENsYXNzKHBhcmFtcy5sb2NrQ2xhc3MpO1xuICAgIH1cbiAgfSxcbiAgZGVzdHJveTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICB2YXIgX3N3aXBlciRuYXZpZ2F0aW9uMiA9IHN3aXBlci5uYXZpZ2F0aW9uLFxuICAgICAgICAkbmV4dEVsID0gX3N3aXBlciRuYXZpZ2F0aW9uMi4kbmV4dEVsLFxuICAgICAgICAkcHJldkVsID0gX3N3aXBlciRuYXZpZ2F0aW9uMi4kcHJldkVsO1xuXG4gICAgaWYgKCRuZXh0RWwgJiYgJG5leHRFbC5sZW5ndGgpIHtcbiAgICAgICRuZXh0RWwub2ZmKCdjbGljaycsIHN3aXBlci5uYXZpZ2F0aW9uLm9uTmV4dENsaWNrKTtcbiAgICAgICRuZXh0RWwucmVtb3ZlQ2xhc3Moc3dpcGVyLnBhcmFtcy5uYXZpZ2F0aW9uLmRpc2FibGVkQ2xhc3MpO1xuICAgIH1cblxuICAgIGlmICgkcHJldkVsICYmICRwcmV2RWwubGVuZ3RoKSB7XG4gICAgICAkcHJldkVsLm9mZignY2xpY2snLCBzd2lwZXIubmF2aWdhdGlvbi5vblByZXZDbGljayk7XG4gICAgICAkcHJldkVsLnJlbW92ZUNsYXNzKHN3aXBlci5wYXJhbXMubmF2aWdhdGlvbi5kaXNhYmxlZENsYXNzKTtcbiAgICB9XG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICduYXZpZ2F0aW9uJyxcbiAgcGFyYW1zOiB7XG4gICAgbmF2aWdhdGlvbjoge1xuICAgICAgbmV4dEVsOiBudWxsLFxuICAgICAgcHJldkVsOiBudWxsLFxuICAgICAgaGlkZU9uQ2xpY2s6IGZhbHNlLFxuICAgICAgZGlzYWJsZWRDbGFzczogJ3N3aXBlci1idXR0b24tZGlzYWJsZWQnLFxuICAgICAgaGlkZGVuQ2xhc3M6ICdzd2lwZXItYnV0dG9uLWhpZGRlbicsXG4gICAgICBsb2NrQ2xhc3M6ICdzd2lwZXItYnV0dG9uLWxvY2snXG4gICAgfVxuICB9LFxuICBjcmVhdGU6IGZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICBiaW5kTW9kdWxlTWV0aG9kcyhzd2lwZXIsIHtcbiAgICAgIG5hdmlnYXRpb246IF9leHRlbmRzKHt9LCBOYXZpZ2F0aW9uKVxuICAgIH0pO1xuICB9LFxuICBvbjoge1xuICAgIGluaXQ6IGZ1bmN0aW9uIGluaXQoc3dpcGVyKSB7XG4gICAgICBzd2lwZXIubmF2aWdhdGlvbi5pbml0KCk7XG4gICAgICBzd2lwZXIubmF2aWdhdGlvbi51cGRhdGUoKTtcbiAgICB9LFxuICAgIHRvRWRnZTogZnVuY3Rpb24gdG9FZGdlKHN3aXBlcikge1xuICAgICAgc3dpcGVyLm5hdmlnYXRpb24udXBkYXRlKCk7XG4gICAgfSxcbiAgICBmcm9tRWRnZTogZnVuY3Rpb24gZnJvbUVkZ2Uoc3dpcGVyKSB7XG4gICAgICBzd2lwZXIubmF2aWdhdGlvbi51cGRhdGUoKTtcbiAgICB9LFxuICAgIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3koc3dpcGVyKSB7XG4gICAgICBzd2lwZXIubmF2aWdhdGlvbi5kZXN0cm95KCk7XG4gICAgfSxcbiAgICAnZW5hYmxlIGRpc2FibGUnOiBmdW5jdGlvbiBlbmFibGVEaXNhYmxlKHN3aXBlcikge1xuICAgICAgdmFyIF9zd2lwZXIkbmF2aWdhdGlvbjMgPSBzd2lwZXIubmF2aWdhdGlvbixcbiAgICAgICAgICAkbmV4dEVsID0gX3N3aXBlciRuYXZpZ2F0aW9uMy4kbmV4dEVsLFxuICAgICAgICAgICRwcmV2RWwgPSBfc3dpcGVyJG5hdmlnYXRpb24zLiRwcmV2RWw7XG5cbiAgICAgIGlmICgkbmV4dEVsKSB7XG4gICAgICAgICRuZXh0RWxbc3dpcGVyLmVuYWJsZWQgPyAncmVtb3ZlQ2xhc3MnIDogJ2FkZENsYXNzJ10oc3dpcGVyLnBhcmFtcy5uYXZpZ2F0aW9uLmxvY2tDbGFzcyk7XG4gICAgICB9XG5cbiAgICAgIGlmICgkcHJldkVsKSB7XG4gICAgICAgICRwcmV2RWxbc3dpcGVyLmVuYWJsZWQgPyAncmVtb3ZlQ2xhc3MnIDogJ2FkZENsYXNzJ10oc3dpcGVyLnBhcmFtcy5uYXZpZ2F0aW9uLmxvY2tDbGFzcyk7XG4gICAgICB9XG4gICAgfSxcbiAgICBjbGljazogZnVuY3Rpb24gY2xpY2soc3dpcGVyLCBlKSB7XG4gICAgICB2YXIgX3N3aXBlciRuYXZpZ2F0aW9uNCA9IHN3aXBlci5uYXZpZ2F0aW9uLFxuICAgICAgICAgICRuZXh0RWwgPSBfc3dpcGVyJG5hdmlnYXRpb240LiRuZXh0RWwsXG4gICAgICAgICAgJHByZXZFbCA9IF9zd2lwZXIkbmF2aWdhdGlvbjQuJHByZXZFbDtcbiAgICAgIHZhciB0YXJnZXRFbCA9IGUudGFyZ2V0O1xuXG4gICAgICBpZiAoc3dpcGVyLnBhcmFtcy5uYXZpZ2F0aW9uLmhpZGVPbkNsaWNrICYmICEkKHRhcmdldEVsKS5pcygkcHJldkVsKSAmJiAhJCh0YXJnZXRFbCkuaXMoJG5leHRFbCkpIHtcbiAgICAgICAgaWYgKHN3aXBlci5wYWdpbmF0aW9uICYmIHN3aXBlci5wYXJhbXMucGFnaW5hdGlvbiAmJiBzd2lwZXIucGFyYW1zLnBhZ2luYXRpb24uY2xpY2thYmxlICYmIChzd2lwZXIucGFnaW5hdGlvbi5lbCA9PT0gdGFyZ2V0RWwgfHwgc3dpcGVyLnBhZ2luYXRpb24uZWwuY29udGFpbnModGFyZ2V0RWwpKSkgcmV0dXJuO1xuICAgICAgICB2YXIgaXNIaWRkZW47XG5cbiAgICAgICAgaWYgKCRuZXh0RWwpIHtcbiAgICAgICAgICBpc0hpZGRlbiA9ICRuZXh0RWwuaGFzQ2xhc3Moc3dpcGVyLnBhcmFtcy5uYXZpZ2F0aW9uLmhpZGRlbkNsYXNzKTtcbiAgICAgICAgfSBlbHNlIGlmICgkcHJldkVsKSB7XG4gICAgICAgICAgaXNIaWRkZW4gPSAkcHJldkVsLmhhc0NsYXNzKHN3aXBlci5wYXJhbXMubmF2aWdhdGlvbi5oaWRkZW5DbGFzcyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNIaWRkZW4gPT09IHRydWUpIHtcbiAgICAgICAgICBzd2lwZXIuZW1pdCgnbmF2aWdhdGlvblNob3cnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzd2lwZXIuZW1pdCgnbmF2aWdhdGlvbkhpZGUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgkbmV4dEVsKSB7XG4gICAgICAgICAgJG5leHRFbC50b2dnbGVDbGFzcyhzd2lwZXIucGFyYW1zLm5hdmlnYXRpb24uaGlkZGVuQ2xhc3MpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCRwcmV2RWwpIHtcbiAgICAgICAgICAkcHJldkVsLnRvZ2dsZUNsYXNzKHN3aXBlci5wYXJhbXMubmF2aWdhdGlvbi5oaWRkZW5DbGFzcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn07IiwiZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxuaW1wb3J0ICQgZnJvbSAnLi4vLi4vdXRpbHMvZG9tJztcbmltcG9ydCB7IGV4dGVuZCwgYmluZE1vZHVsZU1ldGhvZHMsIGNsYXNzZXNUb1NlbGVjdG9yLCBjcmVhdGVFbGVtZW50SWZOb3REZWZpbmVkIH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbHMnO1xudmFyIFBhZ2luYXRpb24gPSB7XG4gIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgIC8vIFJlbmRlciB8fCBVcGRhdGUgUGFnaW5hdGlvbiBidWxsZXRzL2l0ZW1zXG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgdmFyIHJ0bCA9IHN3aXBlci5ydGw7XG4gICAgdmFyIHBhcmFtcyA9IHN3aXBlci5wYXJhbXMucGFnaW5hdGlvbjtcbiAgICBpZiAoIXBhcmFtcy5lbCB8fCAhc3dpcGVyLnBhZ2luYXRpb24uZWwgfHwgIXN3aXBlci5wYWdpbmF0aW9uLiRlbCB8fCBzd2lwZXIucGFnaW5hdGlvbi4kZWwubGVuZ3RoID09PSAwKSByZXR1cm47XG4gICAgdmFyIHNsaWRlc0xlbmd0aCA9IHN3aXBlci52aXJ0dWFsICYmIHN3aXBlci5wYXJhbXMudmlydHVhbC5lbmFibGVkID8gc3dpcGVyLnZpcnR1YWwuc2xpZGVzLmxlbmd0aCA6IHN3aXBlci5zbGlkZXMubGVuZ3RoO1xuICAgIHZhciAkZWwgPSBzd2lwZXIucGFnaW5hdGlvbi4kZWw7IC8vIEN1cnJlbnQvVG90YWxcblxuICAgIHZhciBjdXJyZW50O1xuICAgIHZhciB0b3RhbCA9IHN3aXBlci5wYXJhbXMubG9vcCA/IE1hdGguY2VpbCgoc2xpZGVzTGVuZ3RoIC0gc3dpcGVyLmxvb3BlZFNsaWRlcyAqIDIpIC8gc3dpcGVyLnBhcmFtcy5zbGlkZXNQZXJHcm91cCkgOiBzd2lwZXIuc25hcEdyaWQubGVuZ3RoO1xuXG4gICAgaWYgKHN3aXBlci5wYXJhbXMubG9vcCkge1xuICAgICAgY3VycmVudCA9IE1hdGguY2VpbCgoc3dpcGVyLmFjdGl2ZUluZGV4IC0gc3dpcGVyLmxvb3BlZFNsaWRlcykgLyBzd2lwZXIucGFyYW1zLnNsaWRlc1Blckdyb3VwKTtcblxuICAgICAgaWYgKGN1cnJlbnQgPiBzbGlkZXNMZW5ndGggLSAxIC0gc3dpcGVyLmxvb3BlZFNsaWRlcyAqIDIpIHtcbiAgICAgICAgY3VycmVudCAtPSBzbGlkZXNMZW5ndGggLSBzd2lwZXIubG9vcGVkU2xpZGVzICogMjtcbiAgICAgIH1cblxuICAgICAgaWYgKGN1cnJlbnQgPiB0b3RhbCAtIDEpIGN1cnJlbnQgLT0gdG90YWw7XG4gICAgICBpZiAoY3VycmVudCA8IDAgJiYgc3dpcGVyLnBhcmFtcy5wYWdpbmF0aW9uVHlwZSAhPT0gJ2J1bGxldHMnKSBjdXJyZW50ID0gdG90YWwgKyBjdXJyZW50O1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHN3aXBlci5zbmFwSW5kZXggIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjdXJyZW50ID0gc3dpcGVyLnNuYXBJbmRleDtcbiAgICB9IGVsc2Uge1xuICAgICAgY3VycmVudCA9IHN3aXBlci5hY3RpdmVJbmRleCB8fCAwO1xuICAgIH0gLy8gVHlwZXNcblxuXG4gICAgaWYgKHBhcmFtcy50eXBlID09PSAnYnVsbGV0cycgJiYgc3dpcGVyLnBhZ2luYXRpb24uYnVsbGV0cyAmJiBzd2lwZXIucGFnaW5hdGlvbi5idWxsZXRzLmxlbmd0aCA+IDApIHtcbiAgICAgIHZhciBidWxsZXRzID0gc3dpcGVyLnBhZ2luYXRpb24uYnVsbGV0cztcbiAgICAgIHZhciBmaXJzdEluZGV4O1xuICAgICAgdmFyIGxhc3RJbmRleDtcbiAgICAgIHZhciBtaWRJbmRleDtcblxuICAgICAgaWYgKHBhcmFtcy5keW5hbWljQnVsbGV0cykge1xuICAgICAgICBzd2lwZXIucGFnaW5hdGlvbi5idWxsZXRTaXplID0gYnVsbGV0cy5lcSgwKVtzd2lwZXIuaXNIb3Jpem9udGFsKCkgPyAnb3V0ZXJXaWR0aCcgOiAnb3V0ZXJIZWlnaHQnXSh0cnVlKTtcbiAgICAgICAgJGVsLmNzcyhzd2lwZXIuaXNIb3Jpem9udGFsKCkgPyAnd2lkdGgnIDogJ2hlaWdodCcsIHN3aXBlci5wYWdpbmF0aW9uLmJ1bGxldFNpemUgKiAocGFyYW1zLmR5bmFtaWNNYWluQnVsbGV0cyArIDQpICsgXCJweFwiKTtcblxuICAgICAgICBpZiAocGFyYW1zLmR5bmFtaWNNYWluQnVsbGV0cyA+IDEgJiYgc3dpcGVyLnByZXZpb3VzSW5kZXggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHN3aXBlci5wYWdpbmF0aW9uLmR5bmFtaWNCdWxsZXRJbmRleCArPSBjdXJyZW50IC0gc3dpcGVyLnByZXZpb3VzSW5kZXg7XG5cbiAgICAgICAgICBpZiAoc3dpcGVyLnBhZ2luYXRpb24uZHluYW1pY0J1bGxldEluZGV4ID4gcGFyYW1zLmR5bmFtaWNNYWluQnVsbGV0cyAtIDEpIHtcbiAgICAgICAgICAgIHN3aXBlci5wYWdpbmF0aW9uLmR5bmFtaWNCdWxsZXRJbmRleCA9IHBhcmFtcy5keW5hbWljTWFpbkJ1bGxldHMgLSAxO1xuICAgICAgICAgIH0gZWxzZSBpZiAoc3dpcGVyLnBhZ2luYXRpb24uZHluYW1pY0J1bGxldEluZGV4IDwgMCkge1xuICAgICAgICAgICAgc3dpcGVyLnBhZ2luYXRpb24uZHluYW1pY0J1bGxldEluZGV4ID0gMDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmaXJzdEluZGV4ID0gY3VycmVudCAtIHN3aXBlci5wYWdpbmF0aW9uLmR5bmFtaWNCdWxsZXRJbmRleDtcbiAgICAgICAgbGFzdEluZGV4ID0gZmlyc3RJbmRleCArIChNYXRoLm1pbihidWxsZXRzLmxlbmd0aCwgcGFyYW1zLmR5bmFtaWNNYWluQnVsbGV0cykgLSAxKTtcbiAgICAgICAgbWlkSW5kZXggPSAobGFzdEluZGV4ICsgZmlyc3RJbmRleCkgLyAyO1xuICAgICAgfVxuXG4gICAgICBidWxsZXRzLnJlbW92ZUNsYXNzKHBhcmFtcy5idWxsZXRBY3RpdmVDbGFzcyArIFwiIFwiICsgcGFyYW1zLmJ1bGxldEFjdGl2ZUNsYXNzICsgXCItbmV4dCBcIiArIHBhcmFtcy5idWxsZXRBY3RpdmVDbGFzcyArIFwiLW5leHQtbmV4dCBcIiArIHBhcmFtcy5idWxsZXRBY3RpdmVDbGFzcyArIFwiLXByZXYgXCIgKyBwYXJhbXMuYnVsbGV0QWN0aXZlQ2xhc3MgKyBcIi1wcmV2LXByZXYgXCIgKyBwYXJhbXMuYnVsbGV0QWN0aXZlQ2xhc3MgKyBcIi1tYWluXCIpO1xuXG4gICAgICBpZiAoJGVsLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgYnVsbGV0cy5lYWNoKGZ1bmN0aW9uIChidWxsZXQpIHtcbiAgICAgICAgICB2YXIgJGJ1bGxldCA9ICQoYnVsbGV0KTtcbiAgICAgICAgICB2YXIgYnVsbGV0SW5kZXggPSAkYnVsbGV0LmluZGV4KCk7XG5cbiAgICAgICAgICBpZiAoYnVsbGV0SW5kZXggPT09IGN1cnJlbnQpIHtcbiAgICAgICAgICAgICRidWxsZXQuYWRkQ2xhc3MocGFyYW1zLmJ1bGxldEFjdGl2ZUNsYXNzKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAocGFyYW1zLmR5bmFtaWNCdWxsZXRzKSB7XG4gICAgICAgICAgICBpZiAoYnVsbGV0SW5kZXggPj0gZmlyc3RJbmRleCAmJiBidWxsZXRJbmRleCA8PSBsYXN0SW5kZXgpIHtcbiAgICAgICAgICAgICAgJGJ1bGxldC5hZGRDbGFzcyhwYXJhbXMuYnVsbGV0QWN0aXZlQ2xhc3MgKyBcIi1tYWluXCIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoYnVsbGV0SW5kZXggPT09IGZpcnN0SW5kZXgpIHtcbiAgICAgICAgICAgICAgJGJ1bGxldC5wcmV2KCkuYWRkQ2xhc3MocGFyYW1zLmJ1bGxldEFjdGl2ZUNsYXNzICsgXCItcHJldlwiKS5wcmV2KCkuYWRkQ2xhc3MocGFyYW1zLmJ1bGxldEFjdGl2ZUNsYXNzICsgXCItcHJldi1wcmV2XCIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoYnVsbGV0SW5kZXggPT09IGxhc3RJbmRleCkge1xuICAgICAgICAgICAgICAkYnVsbGV0Lm5leHQoKS5hZGRDbGFzcyhwYXJhbXMuYnVsbGV0QWN0aXZlQ2xhc3MgKyBcIi1uZXh0XCIpLm5leHQoKS5hZGRDbGFzcyhwYXJhbXMuYnVsbGV0QWN0aXZlQ2xhc3MgKyBcIi1uZXh0LW5leHRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciAkYnVsbGV0ID0gYnVsbGV0cy5lcShjdXJyZW50KTtcbiAgICAgICAgdmFyIGJ1bGxldEluZGV4ID0gJGJ1bGxldC5pbmRleCgpO1xuICAgICAgICAkYnVsbGV0LmFkZENsYXNzKHBhcmFtcy5idWxsZXRBY3RpdmVDbGFzcyk7XG5cbiAgICAgICAgaWYgKHBhcmFtcy5keW5hbWljQnVsbGV0cykge1xuICAgICAgICAgIHZhciAkZmlyc3REaXNwbGF5ZWRCdWxsZXQgPSBidWxsZXRzLmVxKGZpcnN0SW5kZXgpO1xuICAgICAgICAgIHZhciAkbGFzdERpc3BsYXllZEJ1bGxldCA9IGJ1bGxldHMuZXEobGFzdEluZGV4KTtcblxuICAgICAgICAgIGZvciAodmFyIGkgPSBmaXJzdEluZGV4OyBpIDw9IGxhc3RJbmRleDsgaSArPSAxKSB7XG4gICAgICAgICAgICBidWxsZXRzLmVxKGkpLmFkZENsYXNzKHBhcmFtcy5idWxsZXRBY3RpdmVDbGFzcyArIFwiLW1haW5cIik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHN3aXBlci5wYXJhbXMubG9vcCkge1xuICAgICAgICAgICAgaWYgKGJ1bGxldEluZGV4ID49IGJ1bGxldHMubGVuZ3RoIC0gcGFyYW1zLmR5bmFtaWNNYWluQnVsbGV0cykge1xuICAgICAgICAgICAgICBmb3IgKHZhciBfaSA9IHBhcmFtcy5keW5hbWljTWFpbkJ1bGxldHM7IF9pID49IDA7IF9pIC09IDEpIHtcbiAgICAgICAgICAgICAgICBidWxsZXRzLmVxKGJ1bGxldHMubGVuZ3RoIC0gX2kpLmFkZENsYXNzKHBhcmFtcy5idWxsZXRBY3RpdmVDbGFzcyArIFwiLW1haW5cIik7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBidWxsZXRzLmVxKGJ1bGxldHMubGVuZ3RoIC0gcGFyYW1zLmR5bmFtaWNNYWluQnVsbGV0cyAtIDEpLmFkZENsYXNzKHBhcmFtcy5idWxsZXRBY3RpdmVDbGFzcyArIFwiLXByZXZcIik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAkZmlyc3REaXNwbGF5ZWRCdWxsZXQucHJldigpLmFkZENsYXNzKHBhcmFtcy5idWxsZXRBY3RpdmVDbGFzcyArIFwiLXByZXZcIikucHJldigpLmFkZENsYXNzKHBhcmFtcy5idWxsZXRBY3RpdmVDbGFzcyArIFwiLXByZXYtcHJldlwiKTtcbiAgICAgICAgICAgICAgJGxhc3REaXNwbGF5ZWRCdWxsZXQubmV4dCgpLmFkZENsYXNzKHBhcmFtcy5idWxsZXRBY3RpdmVDbGFzcyArIFwiLW5leHRcIikubmV4dCgpLmFkZENsYXNzKHBhcmFtcy5idWxsZXRBY3RpdmVDbGFzcyArIFwiLW5leHQtbmV4dFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJGZpcnN0RGlzcGxheWVkQnVsbGV0LnByZXYoKS5hZGRDbGFzcyhwYXJhbXMuYnVsbGV0QWN0aXZlQ2xhc3MgKyBcIi1wcmV2XCIpLnByZXYoKS5hZGRDbGFzcyhwYXJhbXMuYnVsbGV0QWN0aXZlQ2xhc3MgKyBcIi1wcmV2LXByZXZcIik7XG4gICAgICAgICAgICAkbGFzdERpc3BsYXllZEJ1bGxldC5uZXh0KCkuYWRkQ2xhc3MocGFyYW1zLmJ1bGxldEFjdGl2ZUNsYXNzICsgXCItbmV4dFwiKS5uZXh0KCkuYWRkQ2xhc3MocGFyYW1zLmJ1bGxldEFjdGl2ZUNsYXNzICsgXCItbmV4dC1uZXh0XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAocGFyYW1zLmR5bmFtaWNCdWxsZXRzKSB7XG4gICAgICAgIHZhciBkeW5hbWljQnVsbGV0c0xlbmd0aCA9IE1hdGgubWluKGJ1bGxldHMubGVuZ3RoLCBwYXJhbXMuZHluYW1pY01haW5CdWxsZXRzICsgNCk7XG4gICAgICAgIHZhciBidWxsZXRzT2Zmc2V0ID0gKHN3aXBlci5wYWdpbmF0aW9uLmJ1bGxldFNpemUgKiBkeW5hbWljQnVsbGV0c0xlbmd0aCAtIHN3aXBlci5wYWdpbmF0aW9uLmJ1bGxldFNpemUpIC8gMiAtIG1pZEluZGV4ICogc3dpcGVyLnBhZ2luYXRpb24uYnVsbGV0U2l6ZTtcbiAgICAgICAgdmFyIG9mZnNldFByb3AgPSBydGwgPyAncmlnaHQnIDogJ2xlZnQnO1xuICAgICAgICBidWxsZXRzLmNzcyhzd2lwZXIuaXNIb3Jpem9udGFsKCkgPyBvZmZzZXRQcm9wIDogJ3RvcCcsIGJ1bGxldHNPZmZzZXQgKyBcInB4XCIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwYXJhbXMudHlwZSA9PT0gJ2ZyYWN0aW9uJykge1xuICAgICAgJGVsLmZpbmQoY2xhc3Nlc1RvU2VsZWN0b3IocGFyYW1zLmN1cnJlbnRDbGFzcykpLnRleHQocGFyYW1zLmZvcm1hdEZyYWN0aW9uQ3VycmVudChjdXJyZW50ICsgMSkpO1xuICAgICAgJGVsLmZpbmQoY2xhc3Nlc1RvU2VsZWN0b3IocGFyYW1zLnRvdGFsQ2xhc3MpKS50ZXh0KHBhcmFtcy5mb3JtYXRGcmFjdGlvblRvdGFsKHRvdGFsKSk7XG4gICAgfVxuXG4gICAgaWYgKHBhcmFtcy50eXBlID09PSAncHJvZ3Jlc3NiYXInKSB7XG4gICAgICB2YXIgcHJvZ3Jlc3NiYXJEaXJlY3Rpb247XG5cbiAgICAgIGlmIChwYXJhbXMucHJvZ3Jlc3NiYXJPcHBvc2l0ZSkge1xuICAgICAgICBwcm9ncmVzc2JhckRpcmVjdGlvbiA9IHN3aXBlci5pc0hvcml6b250YWwoKSA/ICd2ZXJ0aWNhbCcgOiAnaG9yaXpvbnRhbCc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcm9ncmVzc2JhckRpcmVjdGlvbiA9IHN3aXBlci5pc0hvcml6b250YWwoKSA/ICdob3Jpem9udGFsJyA6ICd2ZXJ0aWNhbCc7XG4gICAgICB9XG5cbiAgICAgIHZhciBzY2FsZSA9IChjdXJyZW50ICsgMSkgLyB0b3RhbDtcbiAgICAgIHZhciBzY2FsZVggPSAxO1xuICAgICAgdmFyIHNjYWxlWSA9IDE7XG5cbiAgICAgIGlmIChwcm9ncmVzc2JhckRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgIHNjYWxlWCA9IHNjYWxlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2NhbGVZID0gc2NhbGU7XG4gICAgICB9XG5cbiAgICAgICRlbC5maW5kKGNsYXNzZXNUb1NlbGVjdG9yKHBhcmFtcy5wcm9ncmVzc2JhckZpbGxDbGFzcykpLnRyYW5zZm9ybShcInRyYW5zbGF0ZTNkKDAsMCwwKSBzY2FsZVgoXCIgKyBzY2FsZVggKyBcIikgc2NhbGVZKFwiICsgc2NhbGVZICsgXCIpXCIpLnRyYW5zaXRpb24oc3dpcGVyLnBhcmFtcy5zcGVlZCk7XG4gICAgfVxuXG4gICAgaWYgKHBhcmFtcy50eXBlID09PSAnY3VzdG9tJyAmJiBwYXJhbXMucmVuZGVyQ3VzdG9tKSB7XG4gICAgICAkZWwuaHRtbChwYXJhbXMucmVuZGVyQ3VzdG9tKHN3aXBlciwgY3VycmVudCArIDEsIHRvdGFsKSk7XG4gICAgICBzd2lwZXIuZW1pdCgncGFnaW5hdGlvblJlbmRlcicsICRlbFswXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN3aXBlci5lbWl0KCdwYWdpbmF0aW9uVXBkYXRlJywgJGVsWzBdKTtcbiAgICB9XG5cbiAgICBpZiAoc3dpcGVyLnBhcmFtcy53YXRjaE92ZXJmbG93ICYmIHN3aXBlci5lbmFibGVkKSB7XG4gICAgICAkZWxbc3dpcGVyLmlzTG9ja2VkID8gJ2FkZENsYXNzJyA6ICdyZW1vdmVDbGFzcyddKHBhcmFtcy5sb2NrQ2xhc3MpO1xuICAgIH1cbiAgfSxcbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgLy8gUmVuZGVyIENvbnRhaW5lclxuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIHZhciBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLnBhZ2luYXRpb247XG4gICAgaWYgKCFwYXJhbXMuZWwgfHwgIXN3aXBlci5wYWdpbmF0aW9uLmVsIHx8ICFzd2lwZXIucGFnaW5hdGlvbi4kZWwgfHwgc3dpcGVyLnBhZ2luYXRpb24uJGVsLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuICAgIHZhciBzbGlkZXNMZW5ndGggPSBzd2lwZXIudmlydHVhbCAmJiBzd2lwZXIucGFyYW1zLnZpcnR1YWwuZW5hYmxlZCA/IHN3aXBlci52aXJ0dWFsLnNsaWRlcy5sZW5ndGggOiBzd2lwZXIuc2xpZGVzLmxlbmd0aDtcbiAgICB2YXIgJGVsID0gc3dpcGVyLnBhZ2luYXRpb24uJGVsO1xuICAgIHZhciBwYWdpbmF0aW9uSFRNTCA9ICcnO1xuXG4gICAgaWYgKHBhcmFtcy50eXBlID09PSAnYnVsbGV0cycpIHtcbiAgICAgIHZhciBudW1iZXJPZkJ1bGxldHMgPSBzd2lwZXIucGFyYW1zLmxvb3AgPyBNYXRoLmNlaWwoKHNsaWRlc0xlbmd0aCAtIHN3aXBlci5sb29wZWRTbGlkZXMgKiAyKSAvIHN3aXBlci5wYXJhbXMuc2xpZGVzUGVyR3JvdXApIDogc3dpcGVyLnNuYXBHcmlkLmxlbmd0aDtcblxuICAgICAgaWYgKHN3aXBlci5wYXJhbXMuZnJlZU1vZGUgJiYgIXN3aXBlci5wYXJhbXMubG9vcCAmJiBudW1iZXJPZkJ1bGxldHMgPiBzbGlkZXNMZW5ndGgpIHtcbiAgICAgICAgbnVtYmVyT2ZCdWxsZXRzID0gc2xpZGVzTGVuZ3RoO1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bWJlck9mQnVsbGV0czsgaSArPSAxKSB7XG4gICAgICAgIGlmIChwYXJhbXMucmVuZGVyQnVsbGV0KSB7XG4gICAgICAgICAgcGFnaW5hdGlvbkhUTUwgKz0gcGFyYW1zLnJlbmRlckJ1bGxldC5jYWxsKHN3aXBlciwgaSwgcGFyYW1zLmJ1bGxldENsYXNzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwYWdpbmF0aW9uSFRNTCArPSBcIjxcIiArIHBhcmFtcy5idWxsZXRFbGVtZW50ICsgXCIgY2xhc3M9XFxcIlwiICsgcGFyYW1zLmJ1bGxldENsYXNzICsgXCJcXFwiPjwvXCIgKyBwYXJhbXMuYnVsbGV0RWxlbWVudCArIFwiPlwiO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICRlbC5odG1sKHBhZ2luYXRpb25IVE1MKTtcbiAgICAgIHN3aXBlci5wYWdpbmF0aW9uLmJ1bGxldHMgPSAkZWwuZmluZChjbGFzc2VzVG9TZWxlY3RvcihwYXJhbXMuYnVsbGV0Q2xhc3MpKTtcbiAgICB9XG5cbiAgICBpZiAocGFyYW1zLnR5cGUgPT09ICdmcmFjdGlvbicpIHtcbiAgICAgIGlmIChwYXJhbXMucmVuZGVyRnJhY3Rpb24pIHtcbiAgICAgICAgcGFnaW5hdGlvbkhUTUwgPSBwYXJhbXMucmVuZGVyRnJhY3Rpb24uY2FsbChzd2lwZXIsIHBhcmFtcy5jdXJyZW50Q2xhc3MsIHBhcmFtcy50b3RhbENsYXNzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhZ2luYXRpb25IVE1MID0gXCI8c3BhbiBjbGFzcz1cXFwiXCIgKyBwYXJhbXMuY3VycmVudENsYXNzICsgXCJcXFwiPjwvc3Bhbj5cIiArICcgLyAnICsgKFwiPHNwYW4gY2xhc3M9XFxcIlwiICsgcGFyYW1zLnRvdGFsQ2xhc3MgKyBcIlxcXCI+PC9zcGFuPlwiKTtcbiAgICAgIH1cblxuICAgICAgJGVsLmh0bWwocGFnaW5hdGlvbkhUTUwpO1xuICAgIH1cblxuICAgIGlmIChwYXJhbXMudHlwZSA9PT0gJ3Byb2dyZXNzYmFyJykge1xuICAgICAgaWYgKHBhcmFtcy5yZW5kZXJQcm9ncmVzc2Jhcikge1xuICAgICAgICBwYWdpbmF0aW9uSFRNTCA9IHBhcmFtcy5yZW5kZXJQcm9ncmVzc2Jhci5jYWxsKHN3aXBlciwgcGFyYW1zLnByb2dyZXNzYmFyRmlsbENsYXNzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhZ2luYXRpb25IVE1MID0gXCI8c3BhbiBjbGFzcz1cXFwiXCIgKyBwYXJhbXMucHJvZ3Jlc3NiYXJGaWxsQ2xhc3MgKyBcIlxcXCI+PC9zcGFuPlwiO1xuICAgICAgfVxuXG4gICAgICAkZWwuaHRtbChwYWdpbmF0aW9uSFRNTCk7XG4gICAgfVxuXG4gICAgaWYgKHBhcmFtcy50eXBlICE9PSAnY3VzdG9tJykge1xuICAgICAgc3dpcGVyLmVtaXQoJ3BhZ2luYXRpb25SZW5kZXInLCBzd2lwZXIucGFnaW5hdGlvbi4kZWxbMF0pO1xuICAgIH1cbiAgfSxcbiAgaW5pdDogZnVuY3Rpb24gaW5pdCgpIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICBzd2lwZXIucGFyYW1zLnBhZ2luYXRpb24gPSBjcmVhdGVFbGVtZW50SWZOb3REZWZpbmVkKHN3aXBlci4kZWwsIHN3aXBlci5wYXJhbXMucGFnaW5hdGlvbiwgc3dpcGVyLnBhcmFtcy5jcmVhdGVFbGVtZW50cywge1xuICAgICAgZWw6ICdzd2lwZXItcGFnaW5hdGlvbidcbiAgICB9KTtcbiAgICB2YXIgcGFyYW1zID0gc3dpcGVyLnBhcmFtcy5wYWdpbmF0aW9uO1xuICAgIGlmICghcGFyYW1zLmVsKSByZXR1cm47XG4gICAgdmFyICRlbCA9ICQocGFyYW1zLmVsKTtcbiAgICBpZiAoJGVsLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuXG4gICAgaWYgKHN3aXBlci5wYXJhbXMudW5pcXVlTmF2RWxlbWVudHMgJiYgdHlwZW9mIHBhcmFtcy5lbCA9PT0gJ3N0cmluZycgJiYgJGVsLmxlbmd0aCA+IDEpIHtcbiAgICAgICRlbCA9IHN3aXBlci4kZWwuZmluZChwYXJhbXMuZWwpO1xuICAgIH1cblxuICAgIGlmIChwYXJhbXMudHlwZSA9PT0gJ2J1bGxldHMnICYmIHBhcmFtcy5jbGlja2FibGUpIHtcbiAgICAgICRlbC5hZGRDbGFzcyhwYXJhbXMuY2xpY2thYmxlQ2xhc3MpO1xuICAgIH1cblxuICAgICRlbC5hZGRDbGFzcyhwYXJhbXMubW9kaWZpZXJDbGFzcyArIHBhcmFtcy50eXBlKTtcblxuICAgIGlmIChwYXJhbXMudHlwZSA9PT0gJ2J1bGxldHMnICYmIHBhcmFtcy5keW5hbWljQnVsbGV0cykge1xuICAgICAgJGVsLmFkZENsYXNzKFwiXCIgKyBwYXJhbXMubW9kaWZpZXJDbGFzcyArIHBhcmFtcy50eXBlICsgXCItZHluYW1pY1wiKTtcbiAgICAgIHN3aXBlci5wYWdpbmF0aW9uLmR5bmFtaWNCdWxsZXRJbmRleCA9IDA7XG5cbiAgICAgIGlmIChwYXJhbXMuZHluYW1pY01haW5CdWxsZXRzIDwgMSkge1xuICAgICAgICBwYXJhbXMuZHluYW1pY01haW5CdWxsZXRzID0gMTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocGFyYW1zLnR5cGUgPT09ICdwcm9ncmVzc2JhcicgJiYgcGFyYW1zLnByb2dyZXNzYmFyT3Bwb3NpdGUpIHtcbiAgICAgICRlbC5hZGRDbGFzcyhwYXJhbXMucHJvZ3Jlc3NiYXJPcHBvc2l0ZUNsYXNzKTtcbiAgICB9XG5cbiAgICBpZiAocGFyYW1zLmNsaWNrYWJsZSkge1xuICAgICAgJGVsLm9uKCdjbGljaycsIGNsYXNzZXNUb1NlbGVjdG9yKHBhcmFtcy5idWxsZXRDbGFzcyksIGZ1bmN0aW9uIG9uQ2xpY2soZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHZhciBpbmRleCA9ICQodGhpcykuaW5kZXgoKSAqIHN3aXBlci5wYXJhbXMuc2xpZGVzUGVyR3JvdXA7XG4gICAgICAgIGlmIChzd2lwZXIucGFyYW1zLmxvb3ApIGluZGV4ICs9IHN3aXBlci5sb29wZWRTbGlkZXM7XG4gICAgICAgIHN3aXBlci5zbGlkZVRvKGluZGV4KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGV4dGVuZChzd2lwZXIucGFnaW5hdGlvbiwge1xuICAgICAgJGVsOiAkZWwsXG4gICAgICBlbDogJGVsWzBdXG4gICAgfSk7XG5cbiAgICBpZiAoIXN3aXBlci5lbmFibGVkKSB7XG4gICAgICAkZWwuYWRkQ2xhc3MocGFyYW1zLmxvY2tDbGFzcyk7XG4gICAgfVxuICB9LFxuICBkZXN0cm95OiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIHZhciBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLnBhZ2luYXRpb247XG4gICAgaWYgKCFwYXJhbXMuZWwgfHwgIXN3aXBlci5wYWdpbmF0aW9uLmVsIHx8ICFzd2lwZXIucGFnaW5hdGlvbi4kZWwgfHwgc3dpcGVyLnBhZ2luYXRpb24uJGVsLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuICAgIHZhciAkZWwgPSBzd2lwZXIucGFnaW5hdGlvbi4kZWw7XG4gICAgJGVsLnJlbW92ZUNsYXNzKHBhcmFtcy5oaWRkZW5DbGFzcyk7XG4gICAgJGVsLnJlbW92ZUNsYXNzKHBhcmFtcy5tb2RpZmllckNsYXNzICsgcGFyYW1zLnR5cGUpO1xuICAgIGlmIChzd2lwZXIucGFnaW5hdGlvbi5idWxsZXRzKSBzd2lwZXIucGFnaW5hdGlvbi5idWxsZXRzLnJlbW92ZUNsYXNzKHBhcmFtcy5idWxsZXRBY3RpdmVDbGFzcyk7XG5cbiAgICBpZiAocGFyYW1zLmNsaWNrYWJsZSkge1xuICAgICAgJGVsLm9mZignY2xpY2snLCBjbGFzc2VzVG9TZWxlY3RvcihwYXJhbXMuYnVsbGV0Q2xhc3MpKTtcbiAgICB9XG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdwYWdpbmF0aW9uJyxcbiAgcGFyYW1zOiB7XG4gICAgcGFnaW5hdGlvbjoge1xuICAgICAgZWw6IG51bGwsXG4gICAgICBidWxsZXRFbGVtZW50OiAnc3BhbicsXG4gICAgICBjbGlja2FibGU6IGZhbHNlLFxuICAgICAgaGlkZU9uQ2xpY2s6IGZhbHNlLFxuICAgICAgcmVuZGVyQnVsbGV0OiBudWxsLFxuICAgICAgcmVuZGVyUHJvZ3Jlc3NiYXI6IG51bGwsXG4gICAgICByZW5kZXJGcmFjdGlvbjogbnVsbCxcbiAgICAgIHJlbmRlckN1c3RvbTogbnVsbCxcbiAgICAgIHByb2dyZXNzYmFyT3Bwb3NpdGU6IGZhbHNlLFxuICAgICAgdHlwZTogJ2J1bGxldHMnLFxuICAgICAgLy8gJ2J1bGxldHMnIG9yICdwcm9ncmVzc2Jhcicgb3IgJ2ZyYWN0aW9uJyBvciAnY3VzdG9tJ1xuICAgICAgZHluYW1pY0J1bGxldHM6IGZhbHNlLFxuICAgICAgZHluYW1pY01haW5CdWxsZXRzOiAxLFxuICAgICAgZm9ybWF0RnJhY3Rpb25DdXJyZW50OiBmdW5jdGlvbiBmb3JtYXRGcmFjdGlvbkN1cnJlbnQobnVtYmVyKSB7XG4gICAgICAgIHJldHVybiBudW1iZXI7XG4gICAgICB9LFxuICAgICAgZm9ybWF0RnJhY3Rpb25Ub3RhbDogZnVuY3Rpb24gZm9ybWF0RnJhY3Rpb25Ub3RhbChudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIG51bWJlcjtcbiAgICAgIH0sXG4gICAgICBidWxsZXRDbGFzczogJ3N3aXBlci1wYWdpbmF0aW9uLWJ1bGxldCcsXG4gICAgICBidWxsZXRBY3RpdmVDbGFzczogJ3N3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmUnLFxuICAgICAgbW9kaWZpZXJDbGFzczogJ3N3aXBlci1wYWdpbmF0aW9uLScsXG4gICAgICAvLyBORVdcbiAgICAgIGN1cnJlbnRDbGFzczogJ3N3aXBlci1wYWdpbmF0aW9uLWN1cnJlbnQnLFxuICAgICAgdG90YWxDbGFzczogJ3N3aXBlci1wYWdpbmF0aW9uLXRvdGFsJyxcbiAgICAgIGhpZGRlbkNsYXNzOiAnc3dpcGVyLXBhZ2luYXRpb24taGlkZGVuJyxcbiAgICAgIHByb2dyZXNzYmFyRmlsbENsYXNzOiAnc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXItZmlsbCcsXG4gICAgICBwcm9ncmVzc2Jhck9wcG9zaXRlQ2xhc3M6ICdzd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2Jhci1vcHBvc2l0ZScsXG4gICAgICBjbGlja2FibGVDbGFzczogJ3N3aXBlci1wYWdpbmF0aW9uLWNsaWNrYWJsZScsXG4gICAgICAvLyBORVdcbiAgICAgIGxvY2tDbGFzczogJ3N3aXBlci1wYWdpbmF0aW9uLWxvY2snXG4gICAgfVxuICB9LFxuICBjcmVhdGU6IGZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICBiaW5kTW9kdWxlTWV0aG9kcyhzd2lwZXIsIHtcbiAgICAgIHBhZ2luYXRpb246IF9leHRlbmRzKHtcbiAgICAgICAgZHluYW1pY0J1bGxldEluZGV4OiAwXG4gICAgICB9LCBQYWdpbmF0aW9uKVxuICAgIH0pO1xuICB9LFxuICBvbjoge1xuICAgIGluaXQ6IGZ1bmN0aW9uIGluaXQoc3dpcGVyKSB7XG4gICAgICBzd2lwZXIucGFnaW5hdGlvbi5pbml0KCk7XG4gICAgICBzd2lwZXIucGFnaW5hdGlvbi5yZW5kZXIoKTtcbiAgICAgIHN3aXBlci5wYWdpbmF0aW9uLnVwZGF0ZSgpO1xuICAgIH0sXG4gICAgYWN0aXZlSW5kZXhDaGFuZ2U6IGZ1bmN0aW9uIGFjdGl2ZUluZGV4Q2hhbmdlKHN3aXBlcikge1xuICAgICAgaWYgKHN3aXBlci5wYXJhbXMubG9vcCkge1xuICAgICAgICBzd2lwZXIucGFnaW5hdGlvbi51cGRhdGUoKTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHN3aXBlci5zbmFwSW5kZXggPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHN3aXBlci5wYWdpbmF0aW9uLnVwZGF0ZSgpO1xuICAgICAgfVxuICAgIH0sXG4gICAgc25hcEluZGV4Q2hhbmdlOiBmdW5jdGlvbiBzbmFwSW5kZXhDaGFuZ2Uoc3dpcGVyKSB7XG4gICAgICBpZiAoIXN3aXBlci5wYXJhbXMubG9vcCkge1xuICAgICAgICBzd2lwZXIucGFnaW5hdGlvbi51cGRhdGUoKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHNsaWRlc0xlbmd0aENoYW5nZTogZnVuY3Rpb24gc2xpZGVzTGVuZ3RoQ2hhbmdlKHN3aXBlcikge1xuICAgICAgaWYgKHN3aXBlci5wYXJhbXMubG9vcCkge1xuICAgICAgICBzd2lwZXIucGFnaW5hdGlvbi5yZW5kZXIoKTtcbiAgICAgICAgc3dpcGVyLnBhZ2luYXRpb24udXBkYXRlKCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBzbmFwR3JpZExlbmd0aENoYW5nZTogZnVuY3Rpb24gc25hcEdyaWRMZW5ndGhDaGFuZ2Uoc3dpcGVyKSB7XG4gICAgICBpZiAoIXN3aXBlci5wYXJhbXMubG9vcCkge1xuICAgICAgICBzd2lwZXIucGFnaW5hdGlvbi5yZW5kZXIoKTtcbiAgICAgICAgc3dpcGVyLnBhZ2luYXRpb24udXBkYXRlKCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBkZXN0cm95OiBmdW5jdGlvbiBkZXN0cm95KHN3aXBlcikge1xuICAgICAgc3dpcGVyLnBhZ2luYXRpb24uZGVzdHJveSgpO1xuICAgIH0sXG4gICAgJ2VuYWJsZSBkaXNhYmxlJzogZnVuY3Rpb24gZW5hYmxlRGlzYWJsZShzd2lwZXIpIHtcbiAgICAgIHZhciAkZWwgPSBzd2lwZXIucGFnaW5hdGlvbi4kZWw7XG5cbiAgICAgIGlmICgkZWwpIHtcbiAgICAgICAgJGVsW3N3aXBlci5lbmFibGVkID8gJ3JlbW92ZUNsYXNzJyA6ICdhZGRDbGFzcyddKHN3aXBlci5wYXJhbXMucGFnaW5hdGlvbi5sb2NrQ2xhc3MpO1xuICAgICAgfVxuICAgIH0sXG4gICAgY2xpY2s6IGZ1bmN0aW9uIGNsaWNrKHN3aXBlciwgZSkge1xuICAgICAgdmFyIHRhcmdldEVsID0gZS50YXJnZXQ7XG5cbiAgICAgIGlmIChzd2lwZXIucGFyYW1zLnBhZ2luYXRpb24uZWwgJiYgc3dpcGVyLnBhcmFtcy5wYWdpbmF0aW9uLmhpZGVPbkNsaWNrICYmIHN3aXBlci5wYWdpbmF0aW9uLiRlbC5sZW5ndGggPiAwICYmICEkKHRhcmdldEVsKS5oYXNDbGFzcyhzd2lwZXIucGFyYW1zLnBhZ2luYXRpb24uYnVsbGV0Q2xhc3MpKSB7XG4gICAgICAgIGlmIChzd2lwZXIubmF2aWdhdGlvbiAmJiAoc3dpcGVyLm5hdmlnYXRpb24ubmV4dEVsICYmIHRhcmdldEVsID09PSBzd2lwZXIubmF2aWdhdGlvbi5uZXh0RWwgfHwgc3dpcGVyLm5hdmlnYXRpb24ucHJldkVsICYmIHRhcmdldEVsID09PSBzd2lwZXIubmF2aWdhdGlvbi5wcmV2RWwpKSByZXR1cm47XG4gICAgICAgIHZhciBpc0hpZGRlbiA9IHN3aXBlci5wYWdpbmF0aW9uLiRlbC5oYXNDbGFzcyhzd2lwZXIucGFyYW1zLnBhZ2luYXRpb24uaGlkZGVuQ2xhc3MpO1xuXG4gICAgICAgIGlmIChpc0hpZGRlbiA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHN3aXBlci5lbWl0KCdwYWdpbmF0aW9uU2hvdycpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN3aXBlci5lbWl0KCdwYWdpbmF0aW9uSGlkZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3dpcGVyLnBhZ2luYXRpb24uJGVsLnRvZ2dsZUNsYXNzKHN3aXBlci5wYXJhbXMucGFnaW5hdGlvbi5oaWRkZW5DbGFzcyk7XG4gICAgICB9XG4gICAgfVxuICB9XG59OyIsImZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbmltcG9ydCB7IGdldFdpbmRvdyB9IGZyb20gJ3Nzci13aW5kb3cnO1xuaW1wb3J0IHsgYmluZE1vZHVsZU1ldGhvZHMgfSBmcm9tICcuLi8uLi91dGlscy91dGlscyc7XG52YXIgT2JzZXJ2ZXIgPSB7XG4gIGF0dGFjaDogZnVuY3Rpb24gYXR0YWNoKHRhcmdldCwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICB9XG5cbiAgICB2YXIgd2luZG93ID0gZ2V0V2luZG93KCk7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgdmFyIE9ic2VydmVyRnVuYyA9IHdpbmRvdy5NdXRhdGlvbk9ic2VydmVyIHx8IHdpbmRvdy5XZWJraXRNdXRhdGlvbk9ic2VydmVyO1xuICAgIHZhciBvYnNlcnZlciA9IG5ldyBPYnNlcnZlckZ1bmMoZnVuY3Rpb24gKG11dGF0aW9ucykge1xuICAgICAgLy8gVGhlIG9ic2VydmVyVXBkYXRlIGV2ZW50IHNob3VsZCBvbmx5IGJlIHRyaWdnZXJlZFxuICAgICAgLy8gb25jZSBkZXNwaXRlIHRoZSBudW1iZXIgb2YgbXV0YXRpb25zLiAgQWRkaXRpb25hbFxuICAgICAgLy8gdHJpZ2dlcnMgYXJlIHJlZHVuZGFudCBhbmQgYXJlIHZlcnkgY29zdGx5XG4gICAgICBpZiAobXV0YXRpb25zLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICBzd2lwZXIuZW1pdCgnb2JzZXJ2ZXJVcGRhdGUnLCBtdXRhdGlvbnNbMF0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBvYnNlcnZlclVwZGF0ZSA9IGZ1bmN0aW9uIG9ic2VydmVyVXBkYXRlKCkge1xuICAgICAgICBzd2lwZXIuZW1pdCgnb2JzZXJ2ZXJVcGRhdGUnLCBtdXRhdGlvbnNbMF0pO1xuICAgICAgfTtcblxuICAgICAgaWYgKHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUpIHtcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShvYnNlcnZlclVwZGF0ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3aW5kb3cuc2V0VGltZW91dChvYnNlcnZlclVwZGF0ZSwgMCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgb2JzZXJ2ZXIub2JzZXJ2ZSh0YXJnZXQsIHtcbiAgICAgIGF0dHJpYnV0ZXM6IHR5cGVvZiBvcHRpb25zLmF0dHJpYnV0ZXMgPT09ICd1bmRlZmluZWQnID8gdHJ1ZSA6IG9wdGlvbnMuYXR0cmlidXRlcyxcbiAgICAgIGNoaWxkTGlzdDogdHlwZW9mIG9wdGlvbnMuY2hpbGRMaXN0ID09PSAndW5kZWZpbmVkJyA/IHRydWUgOiBvcHRpb25zLmNoaWxkTGlzdCxcbiAgICAgIGNoYXJhY3RlckRhdGE6IHR5cGVvZiBvcHRpb25zLmNoYXJhY3RlckRhdGEgPT09ICd1bmRlZmluZWQnID8gdHJ1ZSA6IG9wdGlvbnMuY2hhcmFjdGVyRGF0YVxuICAgIH0pO1xuICAgIHN3aXBlci5vYnNlcnZlci5vYnNlcnZlcnMucHVzaChvYnNlcnZlcik7XG4gIH0sXG4gIGluaXQ6IGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgaWYgKCFzd2lwZXIuc3VwcG9ydC5vYnNlcnZlciB8fCAhc3dpcGVyLnBhcmFtcy5vYnNlcnZlcikgcmV0dXJuO1xuXG4gICAgaWYgKHN3aXBlci5wYXJhbXMub2JzZXJ2ZVBhcmVudHMpIHtcbiAgICAgIHZhciBjb250YWluZXJQYXJlbnRzID0gc3dpcGVyLiRlbC5wYXJlbnRzKCk7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29udGFpbmVyUGFyZW50cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBzd2lwZXIub2JzZXJ2ZXIuYXR0YWNoKGNvbnRhaW5lclBhcmVudHNbaV0pO1xuICAgICAgfVxuICAgIH0gLy8gT2JzZXJ2ZSBjb250YWluZXJcblxuXG4gICAgc3dpcGVyLm9ic2VydmVyLmF0dGFjaChzd2lwZXIuJGVsWzBdLCB7XG4gICAgICBjaGlsZExpc3Q6IHN3aXBlci5wYXJhbXMub2JzZXJ2ZVNsaWRlQ2hpbGRyZW5cbiAgICB9KTsgLy8gT2JzZXJ2ZSB3cmFwcGVyXG5cbiAgICBzd2lwZXIub2JzZXJ2ZXIuYXR0YWNoKHN3aXBlci4kd3JhcHBlckVsWzBdLCB7XG4gICAgICBhdHRyaWJ1dGVzOiBmYWxzZVxuICAgIH0pO1xuICB9LFxuICBkZXN0cm95OiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIHN3aXBlci5vYnNlcnZlci5vYnNlcnZlcnMuZm9yRWFjaChmdW5jdGlvbiAob2JzZXJ2ZXIpIHtcbiAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICB9KTtcbiAgICBzd2lwZXIub2JzZXJ2ZXIub2JzZXJ2ZXJzID0gW107XG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdvYnNlcnZlcicsXG4gIHBhcmFtczoge1xuICAgIG9ic2VydmVyOiBmYWxzZSxcbiAgICBvYnNlcnZlUGFyZW50czogZmFsc2UsXG4gICAgb2JzZXJ2ZVNsaWRlQ2hpbGRyZW46IGZhbHNlXG4gIH0sXG4gIGNyZWF0ZTogZnVuY3Rpb24gY3JlYXRlKCkge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIGJpbmRNb2R1bGVNZXRob2RzKHN3aXBlciwge1xuICAgICAgb2JzZXJ2ZXI6IF9leHRlbmRzKHt9LCBPYnNlcnZlciwge1xuICAgICAgICBvYnNlcnZlcnM6IFtdXG4gICAgICB9KVxuICAgIH0pO1xuICB9LFxuICBvbjoge1xuICAgIGluaXQ6IGZ1bmN0aW9uIGluaXQoc3dpcGVyKSB7XG4gICAgICBzd2lwZXIub2JzZXJ2ZXIuaW5pdCgpO1xuICAgIH0sXG4gICAgZGVzdHJveTogZnVuY3Rpb24gZGVzdHJveShzd2lwZXIpIHtcbiAgICAgIHN3aXBlci5vYnNlcnZlci5kZXN0cm95KCk7XG4gICAgfVxuICB9XG59OyIsImltcG9ydCB7IGdldFdpbmRvdyB9IGZyb20gJ3Nzci13aW5kb3cnO1xuaW1wb3J0IHsgZXh0ZW5kIH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbHMnO1xuXG52YXIgc3VwcG9ydHNSZXNpemVPYnNlcnZlciA9IGZ1bmN0aW9uIHN1cHBvcnRzUmVzaXplT2JzZXJ2ZXIoKSB7XG4gIHZhciB3aW5kb3cgPSBnZXRXaW5kb3coKTtcbiAgcmV0dXJuIHR5cGVvZiB3aW5kb3cuUmVzaXplT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnO1xufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAncmVzaXplJyxcbiAgY3JlYXRlOiBmdW5jdGlvbiBjcmVhdGUoKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgZXh0ZW5kKHN3aXBlciwge1xuICAgICAgcmVzaXplOiB7XG4gICAgICAgIG9ic2VydmVyOiBudWxsLFxuICAgICAgICBjcmVhdGVPYnNlcnZlcjogZnVuY3Rpb24gY3JlYXRlT2JzZXJ2ZXIoKSB7XG4gICAgICAgICAgaWYgKCFzd2lwZXIgfHwgc3dpcGVyLmRlc3Ryb3llZCB8fCAhc3dpcGVyLmluaXRpYWxpemVkKSByZXR1cm47XG4gICAgICAgICAgc3dpcGVyLnJlc2l6ZS5vYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcihmdW5jdGlvbiAoZW50cmllcykge1xuICAgICAgICAgICAgdmFyIHdpZHRoID0gc3dpcGVyLndpZHRoLFxuICAgICAgICAgICAgICAgIGhlaWdodCA9IHN3aXBlci5oZWlnaHQ7XG4gICAgICAgICAgICB2YXIgbmV3V2lkdGggPSB3aWR0aDtcbiAgICAgICAgICAgIHZhciBuZXdIZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgICAgICBlbnRyaWVzLmZvckVhY2goZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgICAgICAgICAgdmFyIGNvbnRlbnRCb3hTaXplID0gX3JlZi5jb250ZW50Qm94U2l6ZSxcbiAgICAgICAgICAgICAgICAgIGNvbnRlbnRSZWN0ID0gX3JlZi5jb250ZW50UmVjdCxcbiAgICAgICAgICAgICAgICAgIHRhcmdldCA9IF9yZWYudGFyZ2V0O1xuICAgICAgICAgICAgICBpZiAodGFyZ2V0ICYmIHRhcmdldCAhPT0gc3dpcGVyLmVsKSByZXR1cm47XG4gICAgICAgICAgICAgIG5ld1dpZHRoID0gY29udGVudFJlY3QgPyBjb250ZW50UmVjdC53aWR0aCA6IChjb250ZW50Qm94U2l6ZVswXSB8fCBjb250ZW50Qm94U2l6ZSkuaW5saW5lU2l6ZTtcbiAgICAgICAgICAgICAgbmV3SGVpZ2h0ID0gY29udGVudFJlY3QgPyBjb250ZW50UmVjdC5oZWlnaHQgOiAoY29udGVudEJveFNpemVbMF0gfHwgY29udGVudEJveFNpemUpLmJsb2NrU2l6ZTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAobmV3V2lkdGggIT09IHdpZHRoIHx8IG5ld0hlaWdodCAhPT0gaGVpZ2h0KSB7XG4gICAgICAgICAgICAgIHN3aXBlci5yZXNpemUucmVzaXplSGFuZGxlcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHN3aXBlci5yZXNpemUub2JzZXJ2ZXIub2JzZXJ2ZShzd2lwZXIuZWwpO1xuICAgICAgICB9LFxuICAgICAgICByZW1vdmVPYnNlcnZlcjogZnVuY3Rpb24gcmVtb3ZlT2JzZXJ2ZXIoKSB7XG4gICAgICAgICAgaWYgKHN3aXBlci5yZXNpemUub2JzZXJ2ZXIgJiYgc3dpcGVyLnJlc2l6ZS5vYnNlcnZlci51bm9ic2VydmUgJiYgc3dpcGVyLmVsKSB7XG4gICAgICAgICAgICBzd2lwZXIucmVzaXplLm9ic2VydmVyLnVub2JzZXJ2ZShzd2lwZXIuZWwpO1xuICAgICAgICAgICAgc3dpcGVyLnJlc2l6ZS5vYnNlcnZlciA9IG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICByZXNpemVIYW5kbGVyOiBmdW5jdGlvbiByZXNpemVIYW5kbGVyKCkge1xuICAgICAgICAgIGlmICghc3dpcGVyIHx8IHN3aXBlci5kZXN0cm95ZWQgfHwgIXN3aXBlci5pbml0aWFsaXplZCkgcmV0dXJuO1xuICAgICAgICAgIHN3aXBlci5lbWl0KCdiZWZvcmVSZXNpemUnKTtcbiAgICAgICAgICBzd2lwZXIuZW1pdCgncmVzaXplJyk7XG4gICAgICAgIH0sXG4gICAgICAgIG9yaWVudGF0aW9uQ2hhbmdlSGFuZGxlcjogZnVuY3Rpb24gb3JpZW50YXRpb25DaGFuZ2VIYW5kbGVyKCkge1xuICAgICAgICAgIGlmICghc3dpcGVyIHx8IHN3aXBlci5kZXN0cm95ZWQgfHwgIXN3aXBlci5pbml0aWFsaXplZCkgcmV0dXJuO1xuICAgICAgICAgIHN3aXBlci5lbWl0KCdvcmllbnRhdGlvbmNoYW5nZScpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG4gIG9uOiB7XG4gICAgaW5pdDogZnVuY3Rpb24gaW5pdChzd2lwZXIpIHtcbiAgICAgIHZhciB3aW5kb3cgPSBnZXRXaW5kb3coKTtcblxuICAgICAgaWYgKHN3aXBlci5wYXJhbXMucmVzaXplT2JzZXJ2ZXIgJiYgc3VwcG9ydHNSZXNpemVPYnNlcnZlcigpKSB7XG4gICAgICAgIHN3aXBlci5yZXNpemUuY3JlYXRlT2JzZXJ2ZXIoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSAvLyBFbWl0IHJlc2l6ZVxuXG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBzd2lwZXIucmVzaXplLnJlc2l6ZUhhbmRsZXIpOyAvLyBFbWl0IG9yaWVudGF0aW9uY2hhbmdlXG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdvcmllbnRhdGlvbmNoYW5nZScsIHN3aXBlci5yZXNpemUub3JpZW50YXRpb25DaGFuZ2VIYW5kbGVyKTtcbiAgICB9LFxuICAgIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3koc3dpcGVyKSB7XG4gICAgICB2YXIgd2luZG93ID0gZ2V0V2luZG93KCk7XG4gICAgICBzd2lwZXIucmVzaXplLnJlbW92ZU9ic2VydmVyKCk7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgc3dpcGVyLnJlc2l6ZS5yZXNpemVIYW5kbGVyKTtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdvcmllbnRhdGlvbmNoYW5nZScsIHN3aXBlci5yZXNpemUub3JpZW50YXRpb25DaGFuZ2VIYW5kbGVyKTtcbiAgICB9XG4gIH1cbn07IiwiaW1wb3J0IHsgJCwgYWRkQ2xhc3MsIHJlbW92ZUNsYXNzLCBoYXNDbGFzcywgdG9nZ2xlQ2xhc3MsIGF0dHIsIHJlbW92ZUF0dHIsIHRyYW5zZm9ybSwgdHJhbnNpdGlvbiwgb24sIG9mZiwgdHJpZ2dlciwgdHJhbnNpdGlvbkVuZCwgb3V0ZXJXaWR0aCwgb3V0ZXJIZWlnaHQsIHN0eWxlcywgb2Zmc2V0LCBjc3MsIGVhY2gsIGh0bWwsIHRleHQsIGlzLCBpbmRleCwgZXEsIGFwcGVuZCwgcHJlcGVuZCwgbmV4dCwgbmV4dEFsbCwgcHJldiwgcHJldkFsbCwgcGFyZW50LCBwYXJlbnRzLCBjbG9zZXN0LCBmaW5kLCBjaGlsZHJlbiwgZmlsdGVyLCByZW1vdmUgfSBmcm9tICdkb203JztcbnZhciBNZXRob2RzID0ge1xuICBhZGRDbGFzczogYWRkQ2xhc3MsXG4gIHJlbW92ZUNsYXNzOiByZW1vdmVDbGFzcyxcbiAgaGFzQ2xhc3M6IGhhc0NsYXNzLFxuICB0b2dnbGVDbGFzczogdG9nZ2xlQ2xhc3MsXG4gIGF0dHI6IGF0dHIsXG4gIHJlbW92ZUF0dHI6IHJlbW92ZUF0dHIsXG4gIHRyYW5zZm9ybTogdHJhbnNmb3JtLFxuICB0cmFuc2l0aW9uOiB0cmFuc2l0aW9uLFxuICBvbjogb24sXG4gIG9mZjogb2ZmLFxuICB0cmlnZ2VyOiB0cmlnZ2VyLFxuICB0cmFuc2l0aW9uRW5kOiB0cmFuc2l0aW9uRW5kLFxuICBvdXRlcldpZHRoOiBvdXRlcldpZHRoLFxuICBvdXRlckhlaWdodDogb3V0ZXJIZWlnaHQsXG4gIHN0eWxlczogc3R5bGVzLFxuICBvZmZzZXQ6IG9mZnNldCxcbiAgY3NzOiBjc3MsXG4gIGVhY2g6IGVhY2gsXG4gIGh0bWw6IGh0bWwsXG4gIHRleHQ6IHRleHQsXG4gIGlzOiBpcyxcbiAgaW5kZXg6IGluZGV4LFxuICBlcTogZXEsXG4gIGFwcGVuZDogYXBwZW5kLFxuICBwcmVwZW5kOiBwcmVwZW5kLFxuICBuZXh0OiBuZXh0LFxuICBuZXh0QWxsOiBuZXh0QWxsLFxuICBwcmV2OiBwcmV2LFxuICBwcmV2QWxsOiBwcmV2QWxsLFxuICBwYXJlbnQ6IHBhcmVudCxcbiAgcGFyZW50czogcGFyZW50cyxcbiAgY2xvc2VzdDogY2xvc2VzdCxcbiAgZmluZDogZmluZCxcbiAgY2hpbGRyZW46IGNoaWxkcmVuLFxuICBmaWx0ZXI6IGZpbHRlcixcbiAgcmVtb3ZlOiByZW1vdmVcbn07XG5PYmplY3Qua2V5cyhNZXRob2RzKS5mb3JFYWNoKGZ1bmN0aW9uIChtZXRob2ROYW1lKSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSgkLmZuLCBtZXRob2ROYW1lLCB7XG4gICAgdmFsdWU6IE1ldGhvZHNbbWV0aG9kTmFtZV0sXG4gICAgd3JpdGFibGU6IHRydWVcbiAgfSk7XG59KTtcbmV4cG9ydCBkZWZhdWx0ICQ7IiwiaW1wb3J0IHsgZ2V0V2luZG93IH0gZnJvbSAnc3NyLXdpbmRvdyc7XG52YXIgYnJvd3NlcjtcblxuZnVuY3Rpb24gY2FsY0Jyb3dzZXIoKSB7XG4gIHZhciB3aW5kb3cgPSBnZXRXaW5kb3coKTtcblxuICBmdW5jdGlvbiBpc1NhZmFyaSgpIHtcbiAgICB2YXIgdWEgPSB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpO1xuICAgIHJldHVybiB1YS5pbmRleE9mKCdzYWZhcmknKSA+PSAwICYmIHVhLmluZGV4T2YoJ2Nocm9tZScpIDwgMCAmJiB1YS5pbmRleE9mKCdhbmRyb2lkJykgPCAwO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBpc0VkZ2U6ICEhd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL0VkZ2UvZyksXG4gICAgaXNTYWZhcmk6IGlzU2FmYXJpKCksXG4gICAgaXNXZWJWaWV3OiAvKGlQaG9uZXxpUG9kfGlQYWQpLipBcHBsZVdlYktpdCg/IS4qU2FmYXJpKS9pLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpXG4gIH07XG59XG5cbmZ1bmN0aW9uIGdldEJyb3dzZXIoKSB7XG4gIGlmICghYnJvd3Nlcikge1xuICAgIGJyb3dzZXIgPSBjYWxjQnJvd3NlcigpO1xuICB9XG5cbiAgcmV0dXJuIGJyb3dzZXI7XG59XG5cbmV4cG9ydCB7IGdldEJyb3dzZXIgfTsiLCJpbXBvcnQgeyBnZXRXaW5kb3cgfSBmcm9tICdzc3Itd2luZG93JztcbmltcG9ydCB7IGdldFN1cHBvcnQgfSBmcm9tICcuL2dldC1zdXBwb3J0JztcbnZhciBkZXZpY2U7XG5cbmZ1bmN0aW9uIGNhbGNEZXZpY2UoX3RlbXApIHtcbiAgdmFyIF9yZWYgPSBfdGVtcCA9PT0gdm9pZCAwID8ge30gOiBfdGVtcCxcbiAgICAgIHVzZXJBZ2VudCA9IF9yZWYudXNlckFnZW50O1xuXG4gIHZhciBzdXBwb3J0ID0gZ2V0U3VwcG9ydCgpO1xuICB2YXIgd2luZG93ID0gZ2V0V2luZG93KCk7XG4gIHZhciBwbGF0Zm9ybSA9IHdpbmRvdy5uYXZpZ2F0b3IucGxhdGZvcm07XG4gIHZhciB1YSA9IHVzZXJBZ2VudCB8fCB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudDtcbiAgdmFyIGRldmljZSA9IHtcbiAgICBpb3M6IGZhbHNlLFxuICAgIGFuZHJvaWQ6IGZhbHNlXG4gIH07XG4gIHZhciBzY3JlZW5XaWR0aCA9IHdpbmRvdy5zY3JlZW4ud2lkdGg7XG4gIHZhciBzY3JlZW5IZWlnaHQgPSB3aW5kb3cuc2NyZWVuLmhlaWdodDtcbiAgdmFyIGFuZHJvaWQgPSB1YS5tYXRjaCgvKEFuZHJvaWQpOz9bXFxzXFwvXSsoW1xcZC5dKyk/Lyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcblxuICB2YXIgaXBhZCA9IHVhLm1hdGNoKC8oaVBhZCkuKk9TXFxzKFtcXGRfXSspLyk7XG4gIHZhciBpcG9kID0gdWEubWF0Y2goLyhpUG9kKSguKk9TXFxzKFtcXGRfXSspKT8vKTtcbiAgdmFyIGlwaG9uZSA9ICFpcGFkICYmIHVhLm1hdGNoKC8oaVBob25lXFxzT1N8aU9TKVxccyhbXFxkX10rKS8pO1xuICB2YXIgd2luZG93cyA9IHBsYXRmb3JtID09PSAnV2luMzInO1xuICB2YXIgbWFjb3MgPSBwbGF0Zm9ybSA9PT0gJ01hY0ludGVsJzsgLy8gaVBhZE9zIDEzIGZpeFxuXG4gIHZhciBpUGFkU2NyZWVucyA9IFsnMTAyNHgxMzY2JywgJzEzNjZ4MTAyNCcsICc4MzR4MTE5NCcsICcxMTk0eDgzNCcsICc4MzR4MTExMicsICcxMTEyeDgzNCcsICc3Njh4MTAyNCcsICcxMDI0eDc2OCcsICc4MjB4MTE4MCcsICcxMTgweDgyMCcsICc4MTB4MTA4MCcsICcxMDgweDgxMCddO1xuXG4gIGlmICghaXBhZCAmJiBtYWNvcyAmJiBzdXBwb3J0LnRvdWNoICYmIGlQYWRTY3JlZW5zLmluZGV4T2Yoc2NyZWVuV2lkdGggKyBcInhcIiArIHNjcmVlbkhlaWdodCkgPj0gMCkge1xuICAgIGlwYWQgPSB1YS5tYXRjaCgvKFZlcnNpb24pXFwvKFtcXGQuXSspLyk7XG4gICAgaWYgKCFpcGFkKSBpcGFkID0gWzAsIDEsICcxM18wXzAnXTtcbiAgICBtYWNvcyA9IGZhbHNlO1xuICB9IC8vIEFuZHJvaWRcblxuXG4gIGlmIChhbmRyb2lkICYmICF3aW5kb3dzKSB7XG4gICAgZGV2aWNlLm9zID0gJ2FuZHJvaWQnO1xuICAgIGRldmljZS5hbmRyb2lkID0gdHJ1ZTtcbiAgfVxuXG4gIGlmIChpcGFkIHx8IGlwaG9uZSB8fCBpcG9kKSB7XG4gICAgZGV2aWNlLm9zID0gJ2lvcyc7XG4gICAgZGV2aWNlLmlvcyA9IHRydWU7XG4gIH0gLy8gRXhwb3J0IG9iamVjdFxuXG5cbiAgcmV0dXJuIGRldmljZTtcbn1cblxuZnVuY3Rpb24gZ2V0RGV2aWNlKG92ZXJyaWRlcykge1xuICBpZiAob3ZlcnJpZGVzID09PSB2b2lkIDApIHtcbiAgICBvdmVycmlkZXMgPSB7fTtcbiAgfVxuXG4gIGlmICghZGV2aWNlKSB7XG4gICAgZGV2aWNlID0gY2FsY0RldmljZShvdmVycmlkZXMpO1xuICB9XG5cbiAgcmV0dXJuIGRldmljZTtcbn1cblxuZXhwb3J0IHsgZ2V0RGV2aWNlIH07IiwiaW1wb3J0IHsgZ2V0V2luZG93LCBnZXREb2N1bWVudCB9IGZyb20gJ3Nzci13aW5kb3cnO1xudmFyIHN1cHBvcnQ7XG5cbmZ1bmN0aW9uIGNhbGNTdXBwb3J0KCkge1xuICB2YXIgd2luZG93ID0gZ2V0V2luZG93KCk7XG4gIHZhciBkb2N1bWVudCA9IGdldERvY3VtZW50KCk7XG4gIHJldHVybiB7XG4gICAgdG91Y2g6ICEhKCdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdyB8fCB3aW5kb3cuRG9jdW1lbnRUb3VjaCAmJiBkb2N1bWVudCBpbnN0YW5jZW9mIHdpbmRvdy5Eb2N1bWVudFRvdWNoKSxcbiAgICBwb2ludGVyRXZlbnRzOiAhIXdpbmRvdy5Qb2ludGVyRXZlbnQgJiYgJ21heFRvdWNoUG9pbnRzJyBpbiB3aW5kb3cubmF2aWdhdG9yICYmIHdpbmRvdy5uYXZpZ2F0b3IubWF4VG91Y2hQb2ludHMgPj0gMCxcbiAgICBvYnNlcnZlcjogZnVuY3Rpb24gY2hlY2tPYnNlcnZlcigpIHtcbiAgICAgIHJldHVybiAnTXV0YXRpb25PYnNlcnZlcicgaW4gd2luZG93IHx8ICdXZWJraXRNdXRhdGlvbk9ic2VydmVyJyBpbiB3aW5kb3c7XG4gICAgfSgpLFxuICAgIHBhc3NpdmVMaXN0ZW5lcjogZnVuY3Rpb24gY2hlY2tQYXNzaXZlTGlzdGVuZXIoKSB7XG4gICAgICB2YXIgc3VwcG9ydHNQYXNzaXZlID0gZmFsc2U7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIHZhciBvcHRzID0gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAncGFzc2l2ZScsIHtcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgIHN1cHBvcnRzUGFzc2l2ZSA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Rlc3RQYXNzaXZlTGlzdGVuZXInLCBudWxsLCBvcHRzKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHsvLyBObyBzdXBwb3J0XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzdXBwb3J0c1Bhc3NpdmU7XG4gICAgfSgpLFxuICAgIGdlc3R1cmVzOiBmdW5jdGlvbiBjaGVja0dlc3R1cmVzKCkge1xuICAgICAgcmV0dXJuICdvbmdlc3R1cmVzdGFydCcgaW4gd2luZG93O1xuICAgIH0oKVxuICB9O1xufVxuXG5mdW5jdGlvbiBnZXRTdXBwb3J0KCkge1xuICBpZiAoIXN1cHBvcnQpIHtcbiAgICBzdXBwb3J0ID0gY2FsY1N1cHBvcnQoKTtcbiAgfVxuXG4gIHJldHVybiBzdXBwb3J0O1xufVxuXG5leHBvcnQgeyBnZXRTdXBwb3J0IH07IiwiaW1wb3J0IHsgZ2V0RG9jdW1lbnQsIGdldFdpbmRvdyB9IGZyb20gJ3Nzci13aW5kb3cnO1xuXG5mdW5jdGlvbiBkZWxldGVQcm9wcyhvYmopIHtcbiAgdmFyIG9iamVjdCA9IG9iajtcbiAgT2JqZWN0LmtleXMob2JqZWN0KS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICB0cnkge1xuICAgICAgb2JqZWN0W2tleV0gPSBudWxsO1xuICAgIH0gY2F0Y2ggKGUpIHsvLyBubyBnZXR0ZXIgZm9yIG9iamVjdFxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBkZWxldGUgb2JqZWN0W2tleV07XG4gICAgfSBjYXRjaCAoZSkgey8vIHNvbWV0aGluZyBnb3Qgd3JvbmdcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBuZXh0VGljayhjYWxsYmFjaywgZGVsYXkpIHtcbiAgaWYgKGRlbGF5ID09PSB2b2lkIDApIHtcbiAgICBkZWxheSA9IDA7XG4gIH1cblxuICByZXR1cm4gc2V0VGltZW91dChjYWxsYmFjaywgZGVsYXkpO1xufVxuXG5mdW5jdGlvbiBub3coKSB7XG4gIHJldHVybiBEYXRlLm5vdygpO1xufVxuXG5mdW5jdGlvbiBnZXRDb21wdXRlZFN0eWxlKGVsKSB7XG4gIHZhciB3aW5kb3cgPSBnZXRXaW5kb3coKTtcbiAgdmFyIHN0eWxlO1xuXG4gIGlmICh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSkge1xuICAgIHN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWwsIG51bGwpO1xuICB9XG5cbiAgaWYgKCFzdHlsZSAmJiBlbC5jdXJyZW50U3R5bGUpIHtcbiAgICBzdHlsZSA9IGVsLmN1cnJlbnRTdHlsZTtcbiAgfVxuXG4gIGlmICghc3R5bGUpIHtcbiAgICBzdHlsZSA9IGVsLnN0eWxlO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBnZXRUcmFuc2xhdGUoZWwsIGF4aXMpIHtcbiAgaWYgKGF4aXMgPT09IHZvaWQgMCkge1xuICAgIGF4aXMgPSAneCc7XG4gIH1cblxuICB2YXIgd2luZG93ID0gZ2V0V2luZG93KCk7XG4gIHZhciBtYXRyaXg7XG4gIHZhciBjdXJUcmFuc2Zvcm07XG4gIHZhciB0cmFuc2Zvcm1NYXRyaXg7XG4gIHZhciBjdXJTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoZWwsIG51bGwpO1xuXG4gIGlmICh3aW5kb3cuV2ViS2l0Q1NTTWF0cml4KSB7XG4gICAgY3VyVHJhbnNmb3JtID0gY3VyU3R5bGUudHJhbnNmb3JtIHx8IGN1clN0eWxlLndlYmtpdFRyYW5zZm9ybTtcblxuICAgIGlmIChjdXJUcmFuc2Zvcm0uc3BsaXQoJywnKS5sZW5ndGggPiA2KSB7XG4gICAgICBjdXJUcmFuc2Zvcm0gPSBjdXJUcmFuc2Zvcm0uc3BsaXQoJywgJykubWFwKGZ1bmN0aW9uIChhKSB7XG4gICAgICAgIHJldHVybiBhLnJlcGxhY2UoJywnLCAnLicpO1xuICAgICAgfSkuam9pbignLCAnKTtcbiAgICB9IC8vIFNvbWUgb2xkIHZlcnNpb25zIG9mIFdlYmtpdCBjaG9rZSB3aGVuICdub25lJyBpcyBwYXNzZWQ7IHBhc3NcbiAgICAvLyBlbXB0eSBzdHJpbmcgaW5zdGVhZCBpbiB0aGlzIGNhc2VcblxuXG4gICAgdHJhbnNmb3JtTWF0cml4ID0gbmV3IHdpbmRvdy5XZWJLaXRDU1NNYXRyaXgoY3VyVHJhbnNmb3JtID09PSAnbm9uZScgPyAnJyA6IGN1clRyYW5zZm9ybSk7XG4gIH0gZWxzZSB7XG4gICAgdHJhbnNmb3JtTWF0cml4ID0gY3VyU3R5bGUuTW96VHJhbnNmb3JtIHx8IGN1clN0eWxlLk9UcmFuc2Zvcm0gfHwgY3VyU3R5bGUuTXNUcmFuc2Zvcm0gfHwgY3VyU3R5bGUubXNUcmFuc2Zvcm0gfHwgY3VyU3R5bGUudHJhbnNmb3JtIHx8IGN1clN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ3RyYW5zZm9ybScpLnJlcGxhY2UoJ3RyYW5zbGF0ZSgnLCAnbWF0cml4KDEsIDAsIDAsIDEsJyk7XG4gICAgbWF0cml4ID0gdHJhbnNmb3JtTWF0cml4LnRvU3RyaW5nKCkuc3BsaXQoJywnKTtcbiAgfVxuXG4gIGlmIChheGlzID09PSAneCcpIHtcbiAgICAvLyBMYXRlc3QgQ2hyb21lIGFuZCB3ZWJraXRzIEZpeFxuICAgIGlmICh3aW5kb3cuV2ViS2l0Q1NTTWF0cml4KSBjdXJUcmFuc2Zvcm0gPSB0cmFuc2Zvcm1NYXRyaXgubTQxOyAvLyBDcmF6eSBJRTEwIE1hdHJpeFxuICAgIGVsc2UgaWYgKG1hdHJpeC5sZW5ndGggPT09IDE2KSBjdXJUcmFuc2Zvcm0gPSBwYXJzZUZsb2F0KG1hdHJpeFsxMl0pOyAvLyBOb3JtYWwgQnJvd3NlcnNcbiAgICAgIGVsc2UgY3VyVHJhbnNmb3JtID0gcGFyc2VGbG9hdChtYXRyaXhbNF0pO1xuICB9XG5cbiAgaWYgKGF4aXMgPT09ICd5Jykge1xuICAgIC8vIExhdGVzdCBDaHJvbWUgYW5kIHdlYmtpdHMgRml4XG4gICAgaWYgKHdpbmRvdy5XZWJLaXRDU1NNYXRyaXgpIGN1clRyYW5zZm9ybSA9IHRyYW5zZm9ybU1hdHJpeC5tNDI7IC8vIENyYXp5IElFMTAgTWF0cml4XG4gICAgZWxzZSBpZiAobWF0cml4Lmxlbmd0aCA9PT0gMTYpIGN1clRyYW5zZm9ybSA9IHBhcnNlRmxvYXQobWF0cml4WzEzXSk7IC8vIE5vcm1hbCBCcm93c2Vyc1xuICAgICAgZWxzZSBjdXJUcmFuc2Zvcm0gPSBwYXJzZUZsb2F0KG1hdHJpeFs1XSk7XG4gIH1cblxuICByZXR1cm4gY3VyVHJhbnNmb3JtIHx8IDA7XG59XG5cbmZ1bmN0aW9uIGlzT2JqZWN0KG8pIHtcbiAgcmV0dXJuIHR5cGVvZiBvID09PSAnb2JqZWN0JyAmJiBvICE9PSBudWxsICYmIG8uY29uc3RydWN0b3IgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKSA9PT0gJ09iamVjdCc7XG59XG5cbmZ1bmN0aW9uIGlzTm9kZShub2RlKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHdpbmRvdy5IVE1MRWxlbWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gbm9kZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50O1xuICB9XG5cbiAgcmV0dXJuIG5vZGUgJiYgKG5vZGUubm9kZVR5cGUgPT09IDEgfHwgbm9kZS5ub2RlVHlwZSA9PT0gMTEpO1xufVxuXG5mdW5jdGlvbiBleHRlbmQoKSB7XG4gIHZhciB0byA9IE9iamVjdChhcmd1bWVudHMubGVuZ3RoIDw9IDAgPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbMF0pO1xuICB2YXIgbm9FeHRlbmQgPSBbJ19fcHJvdG9fXycsICdjb25zdHJ1Y3RvcicsICdwcm90b3R5cGUnXTtcblxuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIHZhciBuZXh0U291cmNlID0gaSA8IDAgfHwgYXJndW1lbnRzLmxlbmd0aCA8PSBpID8gdW5kZWZpbmVkIDogYXJndW1lbnRzW2ldO1xuXG4gICAgaWYgKG5leHRTb3VyY2UgIT09IHVuZGVmaW5lZCAmJiBuZXh0U291cmNlICE9PSBudWxsICYmICFpc05vZGUobmV4dFNvdXJjZSkpIHtcbiAgICAgIHZhciBrZXlzQXJyYXkgPSBPYmplY3Qua2V5cyhPYmplY3QobmV4dFNvdXJjZSkpLmZpbHRlcihmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHJldHVybiBub0V4dGVuZC5pbmRleE9mKGtleSkgPCAwO1xuICAgICAgfSk7XG5cbiAgICAgIGZvciAodmFyIG5leHRJbmRleCA9IDAsIGxlbiA9IGtleXNBcnJheS5sZW5ndGg7IG5leHRJbmRleCA8IGxlbjsgbmV4dEluZGV4ICs9IDEpIHtcbiAgICAgICAgdmFyIG5leHRLZXkgPSBrZXlzQXJyYXlbbmV4dEluZGV4XTtcbiAgICAgICAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG5leHRTb3VyY2UsIG5leHRLZXkpO1xuXG4gICAgICAgIGlmIChkZXNjICE9PSB1bmRlZmluZWQgJiYgZGVzYy5lbnVtZXJhYmxlKSB7XG4gICAgICAgICAgaWYgKGlzT2JqZWN0KHRvW25leHRLZXldKSAmJiBpc09iamVjdChuZXh0U291cmNlW25leHRLZXldKSkge1xuICAgICAgICAgICAgaWYgKG5leHRTb3VyY2VbbmV4dEtleV0uX19zd2lwZXJfXykge1xuICAgICAgICAgICAgICB0b1tuZXh0S2V5XSA9IG5leHRTb3VyY2VbbmV4dEtleV07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBleHRlbmQodG9bbmV4dEtleV0sIG5leHRTb3VyY2VbbmV4dEtleV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAoIWlzT2JqZWN0KHRvW25leHRLZXldKSAmJiBpc09iamVjdChuZXh0U291cmNlW25leHRLZXldKSkge1xuICAgICAgICAgICAgdG9bbmV4dEtleV0gPSB7fTtcblxuICAgICAgICAgICAgaWYgKG5leHRTb3VyY2VbbmV4dEtleV0uX19zd2lwZXJfXykge1xuICAgICAgICAgICAgICB0b1tuZXh0S2V5XSA9IG5leHRTb3VyY2VbbmV4dEtleV07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBleHRlbmQodG9bbmV4dEtleV0sIG5leHRTb3VyY2VbbmV4dEtleV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0b1tuZXh0S2V5XSA9IG5leHRTb3VyY2VbbmV4dEtleV07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRvO1xufVxuXG5mdW5jdGlvbiBiaW5kTW9kdWxlTWV0aG9kcyhpbnN0YW5jZSwgb2JqKSB7XG4gIE9iamVjdC5rZXlzKG9iaikuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgaWYgKGlzT2JqZWN0KG9ialtrZXldKSkge1xuICAgICAgT2JqZWN0LmtleXMob2JqW2tleV0pLmZvckVhY2goZnVuY3Rpb24gKHN1YktleSkge1xuICAgICAgICBpZiAodHlwZW9mIG9ialtrZXldW3N1YktleV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBvYmpba2V5XVtzdWJLZXldID0gb2JqW2tleV1bc3ViS2V5XS5iaW5kKGluc3RhbmNlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaW5zdGFuY2Vba2V5XSA9IG9ialtrZXldO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gY2xhc3Nlc1RvU2VsZWN0b3IoY2xhc3Nlcykge1xuICBpZiAoY2xhc3NlcyA9PT0gdm9pZCAwKSB7XG4gICAgY2xhc3NlcyA9ICcnO1xuICB9XG5cbiAgcmV0dXJuIFwiLlwiICsgY2xhc3Nlcy50cmltKCkucmVwbGFjZSgvKFtcXC46XFwvXSkvZywgJ1xcXFwkMScpIC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgLnJlcGxhY2UoLyAvZywgJy4nKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudElmTm90RGVmaW5lZCgkY29udGFpbmVyLCBwYXJhbXMsIGNyZWF0ZUVsZW1lbnRzLCBjaGVja1Byb3BzKSB7XG4gIHZhciBkb2N1bWVudCA9IGdldERvY3VtZW50KCk7XG5cbiAgaWYgKGNyZWF0ZUVsZW1lbnRzKSB7XG4gICAgT2JqZWN0LmtleXMoY2hlY2tQcm9wcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBpZiAoIXBhcmFtc1trZXldICYmIHBhcmFtcy5hdXRvID09PSB0cnVlKSB7XG4gICAgICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gY2hlY2tQcm9wc1trZXldO1xuICAgICAgICAkY29udGFpbmVyLmFwcGVuZChlbGVtZW50KTtcbiAgICAgICAgcGFyYW1zW2tleV0gPSBlbGVtZW50O1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHBhcmFtcztcbn1cblxuZXhwb3J0IHsgZGVsZXRlUHJvcHMsIG5leHRUaWNrLCBub3csIGdldFRyYW5zbGF0ZSwgaXNPYmplY3QsIGV4dGVuZCwgYmluZE1vZHVsZU1ldGhvZHMsIGdldENvbXB1dGVkU3R5bGUsIGNsYXNzZXNUb1NlbGVjdG9yLCBjcmVhdGVFbGVtZW50SWZOb3REZWZpbmVkIH07IiwiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xyXG5cdC8v0KLQsNCx0YtcclxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2VydmljZS1saXN0X19saW5rJykuZm9yRWFjaChmdW5jdGlvbih0YWJzQnRuKSB7XHJcblx0XHR0YWJzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRcdFx0Y29uc3QgcGF0aCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldC5wYXRoXHJcblx0XHJcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZXJ2aWNlLWl0ZW0nKS5mb3JFYWNoKGZ1bmN0aW9uKHRhYkNvbnRlbnQpIHtcclxuXHRcdFx0XHR0YWJDb250ZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3NlcnZpY2VzLWl0ZW0tLWFjdGl2ZScpXHJcblx0XHRcdH0pXHJcblx0XHJcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZXJ2aWNlLWxpc3RfX2xpbmsnKS5mb3JFYWNoKGZ1bmN0aW9uKHRhYkNvbnRlbnQpIHtcclxuXHRcdFx0XHR0YWJDb250ZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3NlcnZpY2UtbGlzdF9fbGluay0tYWN0aXZlJylcclxuXHRcdFx0fSlcclxuXHRcclxuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtcGF0aD1cIiR7cGF0aH1cIl1gKS5jbGFzc0xpc3QuYWRkKCdzZXJ2aWNlLWxpc3RfX2xpbmstLWFjdGl2ZScpXHJcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXRhcmdldD1cIiR7cGF0aH1cIl1gKS5jbGFzc0xpc3QuYWRkKCdzZXJ2aWNlcy1pdGVtLS1hY3RpdmUnKVxyXG5cdFx0XHR9KVxyXG5cdFx0fSlcclxuXHJcblx0Ly8g0JrQvdC+0L/QutC4INCf0L7Qv9Cw0L9cclxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnV0dG9uLWpzLW9wZW4nKS5mb3JFYWNoKGZ1bmN0aW9uKHRhYnNCdG4pIHtcclxuXHRcdHRhYnNCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xyXG5cdFx0XHRsZXQgcGF0aCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldC5wYXRoXHJcblx0XHRcdFxyXG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYmxvay1qcy1hY3RpdmUnKS5mb3JFYWNoKGZ1bmN0aW9uKHRhYkNvbnRlbnQpIHtcclxuXHRcdFx0XHR0YWJDb250ZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2J0bi0tYWN0aXZlJywnYnRuLS1tZW51JylcclxuXHRcdFx0fSlcclxuXHRcclxuXHRcdFx0bGV0IHRlc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS10YXJnZXQ9XCIke3BhdGh9XCJdYCkuZ2V0QXR0cmlidXRlKCdkYXRhLXRhcmdldCcpXHJcblx0XHRcdFxyXG5cdFx0XHRpZiAodGVzdCA9PT0gJ3NpeC1idG4nKSB7XHJcblx0XHRcdFx0bGV0IGFjdGl2ZUFzYWlkID1cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXRhcmdldD1cIiR7cGF0aH1cIl1gKVxyXG5cdFx0XHRcdGFjdGl2ZUFzYWlkLmNsYXNzTGlzdC5hZGQoJ2J0bi0tbWVudScpXHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0bGV0IGFjdGl2ZVBvcHVwID1cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXRhcmdldD1cIiR7cGF0aH1cIl1gKVxyXG5cdFx0XHRcdGFjdGl2ZVBvcHVwLmNsYXNzTGlzdC5hZGQoJ2J0bi0tYWN0aXZlJylcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHJcblx0XHR9KVxyXG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNwcy1qcy1iZycpLmZvckVhY2goZnVuY3Rpb24oY2xvc2VFbGVtKSB7XHJcblx0XHRcdGNsb3NlRWxlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ibG9rLWpzLWFjdGl2ZScpLmZvckVhY2goZnVuY3Rpb24odGFiQ29udGVudCkge1xyXG5cdFx0XHRcdFx0dGFiQ29udGVudC5jbGFzc0xpc3QucmVtb3ZlKCdidG4tLWFjdGl2ZScsJ2J0bi0tbWVudScpXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSlcclxuXHRcdH0pXHJcblx0fSlcclxuXHJcblxyXG5cdC8vINCa0L3QvtC/0LrQuCDQn9C+0LrQsNC30LDRgtGMINCy0YHQtVxyXG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZXJ2aWNlLWJyYW5kc19fbGluaycpLmZvckVhY2goZnVuY3Rpb24odGFic0J0bikge1xyXG5cdFx0dGFic0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcblx0XHRcdGxldCBwYXRoID0gZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0LnBhdGhcclxuXHRcdFx0XHRcclxuXHRcdFx0bGV0IHRlc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS10YXJnZXQ9XCIke3BhdGh9XCJdYCkuZ2V0QXR0cmlidXRlKCdkYXRhLXRhcmdldCcpXHJcblx0XHRcdFxyXG5cdFx0XHRpZiAodGVzdCA9PT0gJ3RocmVlLWFsbG9wZW4nKSB7XHJcblx0XHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtdGFyZ2V0PVwiJHtwYXRofVwiXWApLmNsYXNzTGlzdC50b2dnbGUoJ2FsbC1vcGVuLWNvbnRlbnQtLWFjdGl2ZScpXHJcblx0XHRcdFx0dGFic0J0bi5jbGFzc0xpc3QudG9nZ2xlKCdxcW9vJylcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS10YXJnZXQ9XCIke3BhdGh9XCJdYCkuY2xhc3NMaXN0LnRvZ2dsZSgnYWxsLW9wZW4tLWFjdGl2ZScpXHJcblx0XHRcdFx0dGFic0J0bi5jbGFzc0xpc3QudG9nZ2xlKCdxcW9vJylcclxuXHRcdFx0fVxyXG5cdFx0XHR9KVxyXG5cdFx0fSlcclxuXHJcblx0Ly8g0KHRgdGL0LvQutC4INCf0L7QutCw0LfQsNGC0Ywg0LLRgdC1XHJcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdi1tZW51X19saW5rJykuZm9yRWFjaChmdW5jdGlvbih0YWJzQnRuKSB7XHJcblx0XHR0YWJzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFxyXG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2LW1lbnVfX2xpbmsnKS5mb3JFYWNoKGZ1bmN0aW9uKHRhYkNvbnRlbnQpIHtcclxuXHRcdFx0XHR0YWJDb250ZW50LmNsYXNzTGlzdC5yZW1vdmUoJ25hdi1tZW51X19saW5rLS1hY3RpdmUnKVxyXG5cdFx0XHR9KVxyXG5cclxuXHRcdFx0dGFic0J0bi5jbGFzc0xpc3QuYWRkKCduYXYtbWVudV9fbGluay0tYWN0aXZlJylcclxuXHRcdFx0fSlcclxuXHRcdH0pXHJcblx0XHJcbn0pXHJcblx0XHJcblxyXG5cclxuXHJcblxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJpbmRleFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiaW1wb3J0IFN3aXBlciBmcm9tICdzd2lwZXInO1xyXG5pbXBvcnQgU3dpcGVyQ29yZSwgeyBOYXZpZ2F0aW9uLCBQYWdpbmF0aW9uIH0gZnJvbSAnc3dpcGVyL2NvcmUnO1xyXG5pbXBvcnQgJy4vanMvYXBwLmpzJztcclxuaW1wb3J0ICcuL3Njc3MvbWFpbi5zY3NzJztcclxuaW1wb3J0ICcvaW5kZXguaHRtbCc7XHJcblxyXG5Td2lwZXJDb3JlLnVzZShbTmF2aWdhdGlvbiwgUGFnaW5hdGlvbl0pO1xyXG5cclxuY29uc3Qgc3dpcGVyU2VydmljZSA9IG5ldyBTd2lwZXIoJy5zd2lwZXItY29udGFpbmVyLS1zZXJ2aWNlJywge1xyXG5cdHdpZHRoOiAyNTAsXHJcblx0c3BhY2VCZXR3ZWVuOiAxMCxcclxuXHRjZW50ZXJlZFNsaWRlczogdHJ1ZSxcclxuXHJcblxyXG5cdC8vIEFuZCBpZiB3ZSBuZWVkIHNjcm9sbGJhclxyXG5cdC8vIHNjcm9sbGJhcjoge1xyXG5cdC8vIFx0ZWw6ICcuc3dpcGVyLXNjcm9sbGJhcidcdFxyXG5cdC8vIH0sXHJcblx0Ly8gYnJlYWtwb2ludHM6IHtcclxuXHQvLyBcdDExNDA6IHtcclxuXHQvLyBcdFx0c2Nyb2xsYmFyOiB7XHJcblx0Ly8gXHRcdFx0ZWw6ICcnXHJcblx0Ly8gXHRcdH0sXHJcblx0Ly8gXHR9XHJcblx0Ly8gfVxyXG59KTtcclxuXHJcbmNvbnN0IHN3aXBlckJyYW5kcyA9IG5ldyBTd2lwZXIoJy5zd2lwZXItY29udGFpbmVyLS1icmFuZHMnLCB7XHJcblx0Ly8gT3B0aW9uYWwgcGFyYW1ldGVyc1xyXG5cdC8vIGxvb3A6IHRydWUsXHJcblx0d2lkdGg6IDI0MCxcclxuXHRzcGFjZUJldHdlZW46IDEwLFxyXG5cdGNlbnRlcmVkU2xpZGVzOiB0cnVlLFxyXG5cclxuXHJcblx0Ly8gSWYgd2UgbmVlZCBwYWdpbmF0aW9uXHJcblx0XHRwYWdpbmF0aW9uOiB7XHJcblx0XHRcdGVsOiAnLnN3aXBlci1wYWdpbmF0aW9uJyxcclxuXHRcdFx0dHlwZTogJ2J1bGxldHMnLFxyXG5cdFx0XHRjbGlja2FibGU6ICd0cnVlJyxcclxuXHRcdH0sXHJcblxyXG5cdC8vIEFuZCBpZiB3ZSBuZWVkIHNjcm9sbGJhclxyXG5cdHNjcm9sbGJhcjoge1xyXG5cdFx0ZWw6ICcuc3dpcGVyLXNjcm9sbGJhcicsXHJcblx0fSxcclxufSk7XHJcblxyXG5jb25zdCBzd2lwZXJUeXBlID0gbmV3IFN3aXBlcignLnN3aXBlci1jb250YWluZXItLXR5cGUnLCB7XHJcblx0Ly8gT3B0aW9uYWwgcGFyYW1ldGVyc1xyXG5cdC8vIGxvb3A6IHRydWUsXHJcblx0d2lkdGg6IDI0MCxcclxuXHRzcGFjZUJldHdlZW46IDEwLFxyXG5cdGNlbnRlcmVkU2xpZGVzOiB0cnVlLFxyXG5cclxuXHJcblx0Ly8gSWYgd2UgbmVlZCBwYWdpbmF0aW9uXHJcblx0XHRwYWdpbmF0aW9uOiB7XHJcblx0XHRcdGVsOiAnLnN3aXBlci1wYWdpbmF0aW9uJyxcclxuXHRcdFx0dHlwZTogJ2J1bGxldHMnLFxyXG5cdFx0XHRjbGlja2FibGU6ICd0cnVlJyxcclxuXHRcdH0sXHJcblxyXG5cdC8vIEFuZCBpZiB3ZSBuZWVkIHNjcm9sbGJhclxyXG5cdHNjcm9sbGJhcjoge1xyXG5cdFx0ZWw6ICcuc3dpcGVyLXNjcm9sbGJhcicsXHJcblx0fSxcclxufSk7XHJcblxyXG5jb25zdCBzd2lwZXJQcmljZSA9IG5ldyBTd2lwZXIoJy5zd2lwZXItY29udGFpbmVyLS1wcmljZScsIHtcclxuXHQvLyBPcHRpb25hbCBwYXJhbWV0ZXJzXHJcblx0Ly8gbG9vcDogdHJ1ZSxcclxuXHR3aWR0aDogMjYwLFxyXG5cdHNwYWNlQmV0d2VlbjogNDAsXHJcblx0Y2VudGVyZWRTbGlkZXM6IHRydWUsXHJcblxyXG5cclxuXHQvLyBJZiB3ZSBuZWVkIHBhZ2luYXRpb25cclxuXHRcdHBhZ2luYXRpb246IHtcclxuXHRcdFx0ZWw6ICcuc3dpcGVyLXBhZ2luYXRpb24nLFxyXG5cdFx0XHR0eXBlOiAnYnVsbGV0cycsXHJcblx0XHRcdGNsaWNrYWJsZTogJ3RydWUnLFxyXG5cdFx0fSxcclxuXHJcblx0Ly8gQW5kIGlmIHdlIG5lZWQgc2Nyb2xsYmFyXHJcblx0c2Nyb2xsYmFyOiB7XHJcblx0XHRlbDogJy5zd2lwZXItc2Nyb2xsYmFyJyxcclxuXHR9LFxyXG59KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=