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
var code = "<!DOCTYPE html>\r\n<html lang=\"ru\">\r\n<head>\r\n\t<meta charset=\"UTF-8\">\r\n\t<meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\r\n\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n\t<meta name=\"keywords\" content=\"HTML CSS JS test-task\"> \r\n\t<meta name=\"description\" content=\"Тестовое задание по модуля Web core\"> \r\n\t<title>Block 1.6/Savinov А.О.</title>\r\n\t<link rel=\"stylesheet\" href=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\">\r\n</head>\r\n<body onclick=\"\">\r\n\r\n\t<!-- Хедер -->\r\n\t<header class=\"cps-header\">\r\n\t\t<a class=\"cps-header__logo cps-logo\" href=\"index.html\">\r\n\t\t\t<picture>\r\n\t\t\t\t<source srcset=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" type=\"image/svg\">\r\n\t\t\t\t<img class=\"cps-logo__img\" src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"Логотип CPS\" width=\"97\" height=\"51\">\r\n\t\t\t</picture>\r\n\t\t</a>\r\n\t\t<ul class=\"cps-header__fb fb-conteiner\">\r\n\t\t\t<li class=\"fb-conteiner__item\">\r\n\t\t\t\t<button class=\"fb-conteiner__link fb-conteiner__link-fb button-js-open icon-repair\" data-path=\"one-btn\">\r\n\t\t\t\t\t<span class=\"fb-conteiner__text visually-hidden\">Оставить заявку</span>\r\n\t\t\t\t</button>  \r\n\t\t\t</li>\r\n\t\t\t<li class=\"fb-conteiner__item\">\r\n\t\t\t\t<button class=\"fb-conteiner__link fb-conteiner__link-call button-js-open icon-search-header\" data-path=\"two-btn\">\r\n\t\t\t\t\t<span class=\"fb-conteiner__text visually-hidden\">Статус ремонта</span>\r\n\t\t\t\t</button>\r\n\t\t\t</li>\r\n\t\t</ul>\r\n\t\t<ul class=\"cps-header__contacts contacts-conteiner\">\r\n\t\t\t<li class=\"contacts-conteiner__item\">\r\n\t\t\t\t<button class=\"button-js-open contacts-conteiner__link icon-phone\" data-path=\"three-btn\">\r\n\t\t\t\t\t<span class=\"visually-hidden\">Заказать звонок</span>\r\n\t\t\t\t</button>\r\n\t\t\t</li>\r\n\t\t\t<li class=\"contacts-conteiner__item\">\r\n\t\t\t\t<button class=\"button-js-open contacts-conteiner__link icon-chat\" data-path=\"four-btn\">\r\n\t\t\t\t\t<span class=\"visually-hidden\">Начать чат</span>\r\n\t\t\t\t</button>\r\n\t\t\t</li> \r\n\t\t\t<li class=\"contacts-conteiner__item\">\r\n\t\t\t\t<button class=\"button-js-open contacts-conteiner__link icon-profile\" data-path=\"five-btn\">\r\n\t\t\t\t\t<span class=\"visually-hidden\">Вход Личный кабинет</span>\r\n\t\t\t\t</button>\r\n\t\t\t</li>\r\n\t\t</ul>\r\n\t\t<button class=\"button-js-open cps-header__btn btn-open\" data-path=\"six-btn\">\r\n\t\t\t<span class=\"visually-hidden\">Открыть меню</span>\r\n\t\t\t<span class=\"btn-open__elm-btn\"></span>\r\n\t\t</button>\r\n\t</header>\r\n\r\n\t<!-- боковая панель навигации -->\r\n\t<aside class=\"cps-aside blok-js-active\" data-target=\"six-btn\">\r\n\t\t<div class=\"cps-aside__header\">\r\n\t\t\t<button class=\"cps-aside__btn-close button-js-open btn-close\" data-path=\"btn-close-one\">\r\n\t\t\t\t<span class=\"visually-hidden\">Закрыть меню</span>\r\n\t\t\t\t<span class=\"btn-close__elm-btn\"></span>\r\n\t\t\t</button>\r\n\t\t\t<a class=\"cps-aside__logo cps-logo\" href=\"index.html\">\r\n\t\t\t\t<picture>\r\n\t\t\t\t\t<source srcset=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" type=\"image/svg\">\r\n\t\t\t\t\t<img class=\"cps-logo__img\" src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"Логотип CPS\" width=\"97\" height=\"51\">\r\n\t\t\t\t</picture>\r\n\t\t\t</a>\r\n\t\t\t<button class=\"cps-aside__search button icon-search-aside button-js-open\" data-path=\"seven-btn\">\r\n\t\t\t\t<span class=\"visually-hidden\">поиск</span>\r\n\t\t\t</button>\r\n\t\t</div>\r\n\t\t<nav class=\"cps-aside__nav-aside nav-menu\">\r\n\t\t\t<ul class=\"nav-menu__list\">\r\n\t\t\t\t<li class=\"nav-menu__item\">\r\n\t\t\t\t\t<a class=\"nav-menu__link nav-menu__link--active\" href=\"index.html\">Ремонт техники</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"nav-menu__item\">\r\n\t\t\t\t\t<a class=\"nav-menu__link\" href=\"#\">Услуги и Сервисы</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"nav-menu__item\">\r\n\t\t\t\t\t<a class=\"nav-menu__link\" href=\"#\">Корпоративным клиенты</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"nav-menu__item\">\r\n\t\t\t\t\t<a class=\"nav-menu__link\" href=\"#\">Продавцам техники</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"nav-menu__item\">\r\n\t\t\t\t\t<a class=\"nav-menu__link\" href=\"#\">Партнерам</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"nav-menu__item\">\r\n\t\t\t\t\t<a class=\"nav-menu__link\" href=\"#\">Производителям</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"nav-menu__item\">\r\n\t\t\t\t\t<a class=\"nav-menu__link\" href=\"#\">Наши сервесные центры</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"nav-menu__item\">\r\n\t\t\t\t\t<a class=\"nav-menu__link\" href=\"#\">Контакты</a>\r\n\t\t\t\t</li>\r\n\t\t\t</ul>\r\n\t\t</nav>\r\n\t\t<ul class=\"cps-aside__contacts contacts-conteiner\">\r\n\t\t\t<li class=\"contacts-conteiner__item\">\r\n\t\t\t\t<button class=\"button-js-open contacts-conteiner__link icon-phone\" data-path=\"three-btn\">\r\n\t\t\t\t\t<span class=\"visually-hidden\">Заказать звонок</span>\r\n\t\t\t\t</button>\r\n\t\t\t</li>\r\n\t\t\t<li class=\"contacts-conteiner__item\">\r\n\t\t\t\t<button class=\"button-js-open contacts-conteiner__link icon-chat\" data-path=\"four-btn\">\r\n\t\t\t\t\t<span class=\"visually-hidden\">Начать чат</span>\r\n\t\t\t\t</button>\r\n\t\t\t</li> \r\n\t\t\t<li class=\"contacts-conteiner__item\">\r\n\t\t\t\t<button class=\"button-js-open contacts-conteiner__link icon-profile\" data-path=\"five-btn\">\r\n\t\t\t\t\t<span class=\"visually-hidden\">Вход Личный кабинет</span>\r\n\t\t\t\t</button>\r\n\t\t\t</li>\r\n\t\t</ul>\r\n\t\t<ul class=\"cps-aside__contacts-list contacts-list\">\r\n\t\t\t<li class=\"contacts-list__item\">\r\n\t\t\t\t<a class=\"contacts-list__link contacts-list__email\" href=\"mailto:mail@cps.com\">mail@cps.com</a>\r\n\t\t\t</li>\r\n\t\t\t<li class=\"contacts-list__item\">\r\n\t\t\t\t<a class=\"contacts-list__link contacts-list__phone\" href=\"tel:88008908900\">8 800 890 8900</a>\r\n\t\t\t</li>\r\n\t\t</ul>\r\n\t\t<ul class=\"cps-aside__language-conteiner language-list\">\r\n\t\t\t<li class=\"language-list__item\">\r\n\t\t\t\t<a class=\"language-list__link language-list__link--active\" href=\"index.html\">ru</a>\r\n\t\t\t</li>\r\n\t\t\t<li class=\"language-list__item\">\r\n\t\t\t\t<a class=\"language-list__link\" href=\"#\">en</a>\r\n\t\t\t</li>\r\n\t\t\t<li class=\"language-list__item\">\r\n\t\t\t\t<a class=\"language-list__link\" href=\"#\">ch</a>\r\n\t\t\t</li>\r\n\t\t</ul>\r\n\t\t<div class=\"cps-js-bg cps-aside__bg\"></div>\r\n\t</aside>\r\n\r\n\t<!-- Главный контейнер -->\r\n\t<main class=\"cps-main\">\r\n\r\n\t\t<!-- Секция контента -->\r\n\t\t<section class=\"servec-content\">\r\n\r\n\t\t\t<div class=\"servec-content__header\">\r\n\t\t\t\t<h1 class=\"servec-content__title\">Услуги и сервисы</h1>\r\n\t\t\t\t<ul class=\"servec-content__feedback-servec feedback-servec\">\r\n\t\t\t\t\t<li class=\"feedback-servec__item\">\r\n\t\t\t\t\t\t<button class=\"feedback-servec__link button-js-open\" data-path=\"one-btn\">\r\n\t\t\t\t\t\t\t<span class=\"feedback-servec__text\">Оставить заявку</span>\r\n\t\t\t\t\t\t\t<i class=\"feedback-servec__icon icon-repair\"></i>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"feedback-servec__item\">\r\n\t\t\t\t\t\t<button class=\"feedback-servec__link button-js-open\" data-path=\"two-btn\">\r\n\t\t\t\t\t\t\t<span class=\"feedback-servec__text\">Статус ремонта</span>\r\n\t\t\t\t\t\t\t<i class=\"feedback-servec__icon icon-search-header\"></i>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ul>\r\n\t\t\t</div>\r\n\t\t\t\r\n\t\t\t<div class=\"swiper-container swiper-container--service\">\r\n\t\t\t\t<ul class=\"swiper-wrapper servec-content__service-list service-list\">\r\n\t\t\t\t\t<li class=\"service-list__item swiper-slide\">\r\n\t\t\t\t\t\t<a class=\"service-list__link service-list__link--active\" href=\"#\" data-path=\"one\">Ремонтируемые бренды</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"service-list__item swiper-slide\">\r\n\t\t\t\t\t\t<a class=\"service-list__link\" href=\"#\" data-path=\"two\">Ремонтируемые устрой</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"service-list__item swiper-slide\">\r\n\t\t\t\t\t\t<a class=\"service-list__link\" href=\"#\" data-path=\"three\">Цены на услуги</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"service-list__item swiper-slide\">\r\n\t\t\t\t\t\t<a class=\"service-list__link\" href=\"#\" data-path=\"four\">Адреса сервесных центров</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"service-list__item swiper-slide\">\r\n\t\t\t\t\t\t<a class=\"service-list__link\" href=\"#\" data-path=\"five\">Специальные цены</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"service-list__item swiper-slide\">\r\n\t\t\t\t\t\t<a class=\"service-list__link\" href=\"#\" data-path=\"six\">Отзовы</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ul>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"servec-content__service-item service-item services-item--active\" data-target=\"one\">\r\n\t\t\t\t<div>\r\n\t\t\t\t<div class=\"service-item__wrapp\" data-target=\"three-allopen\">\r\n\t\t\t\t\t<p class=\"service-item__text\">\r\n\t\t\t\t\t\tМы являемся авторизованным сервисным центром по ремонту техники Dell. Только у нас вы можете отремонтировать свой ноутбук Dell с официальной гарантией производителя.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"service-item__text service-item__text--visually-hidden\">\r\n\t\t\t\t\t\tМы успешно работаем с 1992 года и заслужили репутацию надежного партнера, что подтверждает большое количество постоянных клиентов. Мы гордимся тем, что к нам обращаются по рекомендациям и, в свою очередь, советуют нас родным и близким.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t</div>\r\n\t\t\t\t<button class=\"service-brands__link service-item__link icon-expand\" data-path=\"three-allopen\" >Читать дальше</button>\r\n\t\t\t</div>\r\n\t\t\t\t<picture class=\"service-item__img\">\r\n\t\t\t\t\t<source type=\"image/avif\" srcset=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" media=\"(min-width: 1120px)\">\r\n\t\t\t\t\t<source type=\"image/avif\" srcset=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" media=\"(min-width: 768px)\">\r\n\t\t\t\t\t<source type=\"image/avif\" srcset=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\">\r\n\t\t\t\t\t<source type=\"image/webp\" srcset=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\" media=\"(min-width: 1120px)\">\r\n\t\t\t\t\t<source type=\"image/webp\" srcset=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" media=\"(min-width: 768px)\">\r\n\t\t\t\t\t<source type=\"image/webp\" srcset=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\">\r\n\t\t\t\t\t<source srcset=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\" media=\"(min-width: 1120px)\">\r\n\t\t\t\t\t<source srcset=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\" media=\"(min-width: 768px)\">\r\n\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\" alt=\"фото\"/>\r\n\t\t\t\t</picture>\t\t\t\t\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"servec-content__service-item service-item\" data-target=\"two\">\r\n\t\t\t\t<div>\r\n\t\t\t\t<div class=\"service-item__wrapp\" data-target=\"four-allopen\">\r\n\t\t\t\t\t<p class=\"service-item__text\">\r\n\t\t\t\t\t\tМы являемся авторизованным сервисным центром по ремонту техники Dell. Только у нас вы можете отремонтировать свой ноутбук Dell с официальной гарантией производителя.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"service-item__text service-item__text--visually-hidden\">\r\n\t\t\t\t\t\tМы успешно работаем с 1992 года и заслужили репутацию надежного партнера, что подтверждает большое количество постоянных клиентов. Мы гордимся тем, что к нам обращаются по рекомендациям и, в свою очередь, советуют нас родным и близким.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t</div>\r\n\t\t\t\t<button class=\"service-brands__link service-item__link icon-expand\" data-path=\"four-allopen\" >Читать дальше</button>\r\n\t\t\t</div>\r\n\t\t\t\t<picture class=\"service-item__img\">\r\n\t\t\t\t\t<source type=\"image/avif\" srcset=\"" + ___HTML_LOADER_REPLACEMENT_12___ + "\" media=\"(min-width: 1120px)\">\r\n\t\t\t\t\t<source type=\"image/avif\" srcset=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\" media=\"(min-width: 768px)\">\r\n\t\t\t\t\t<source type=\"image/avif\" srcset=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\">\r\n\t\t\t\t\t<source type=\"image/webp\" srcset=\"" + ___HTML_LOADER_REPLACEMENT_15___ + "\" media=\"(min-width: 1120px)\">\r\n\t\t\t\t\t<source type=\"image/webp\" srcset=\"" + ___HTML_LOADER_REPLACEMENT_16___ + "\" media=\"(min-width: 768px)\">\r\n\t\t\t\t\t<source type=\"image/webp\" srcset=\"" + ___HTML_LOADER_REPLACEMENT_17___ + "\">\r\n\t\t\t\t\t<source srcset=\"" + ___HTML_LOADER_REPLACEMENT_18___ + "\" media=\"(min-width: 1120px)\">\r\n\t\t\t\t\t<source srcset=\"" + ___HTML_LOADER_REPLACEMENT_19___ + "\" media=\"(min-width: 768px)\">\r\n\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_20___ + "\" alt=\"фото\"/>\r\n\t\t\t\t</picture>\t\t\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"servec-content__service-item service-item\" data-target=\"three\">\r\n\t\t\t\t<div>\r\n\t\t\t\t<div class=\"service-item__wrapp\" data-target=\"five-allopen\">\r\n\t\t\t\t\t<p class=\"service-item__text\">\r\n\t\t\t\t\t\tМы являемся авторизованным сервисным центром по ремонту техники Dell. Только у нас вы можете отремонтировать свой ноутбук Dell с официальной гарантией производителя.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"service-item__text service-item__text--visually-hidden\">\r\n\t\t\t\t\t\tМы успешно работаем с 1992 года и заслужили репутацию надежного партнера, что подтверждает большое количество постоянных клиентов. Мы гордимся тем, что к нам обращаются по рекомендациям и, в свою очередь, советуют нас родным и близким.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t</div>\r\n\t\t\t\t<button class=\"service-brands__link service-item__link icon-expand\" data-path=\"five-allopen\" >Читать дальше</button>\r\n\t\t\t</div>\r\n\t\t\t\t<picture class=\"service-item__img\">\r\n\t\t\t\t\t<source type=\"image/avif\" srcset=\"" + ___HTML_LOADER_REPLACEMENT_21___ + "\" media=\"(min-width: 1120px)\">\r\n\t\t\t\t\t<source type=\"image/avif\" srcset=\"" + ___HTML_LOADER_REPLACEMENT_22___ + "\" media=\"(min-width: 768px)\">\r\n\t\t\t\t\t<source type=\"image/avif\" srcset=\"" + ___HTML_LOADER_REPLACEMENT_23___ + "\">\r\n\t\t\t\t\t<source type=\"image/webp\" srcset=\"" + ___HTML_LOADER_REPLACEMENT_24___ + "\" media=\"(min-width: 1120px)\">\r\n\t\t\t\t\t<source type=\"image/webp\" srcset=\"" + ___HTML_LOADER_REPLACEMENT_25___ + "\" media=\"(min-width: 768px)\">\r\n\t\t\t\t\t<source type=\"image/webp\" srcset=\"" + ___HTML_LOADER_REPLACEMENT_26___ + "\">\r\n\t\t\t\t\t<source srcset=\"" + ___HTML_LOADER_REPLACEMENT_18___ + "\" media=\"(min-width: 1120px)\">\r\n\t\t\t\t\t<source srcset=\"" + ___HTML_LOADER_REPLACEMENT_19___ + "\" media=\"(min-width: 768px)\">\r\n\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_27___ + "\" alt=\"фото\"/>\r\n\t\t\t\t</picture>\t\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"servec-content__service-item service-item\" data-target=\"four\">\r\n\t\t\t\t<div>\r\n\t\t\t\t<div class=\"service-item__wrapp\" data-target=\"sex-allopen\">\r\n\t\t\t\t\t<p class=\"service-item__text\">\r\n\t\t\t\t\t\tМы являемся авторизованным сервисным центром по ремонту техники Dell. Только у нас вы можете отремонтировать свой ноутбук Dell с официальной гарантией производителя.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"service-item__text service-item__text--visually-hidden\">\r\n\t\t\t\t\t\tМы успешно работаем с 1992 года и заслужили репутацию надежного партнера, что подтверждает большое количество постоянных клиентов. Мы гордимся тем, что к нам обращаются по рекомендациям и, в свою очередь, советуют нас родным и близким.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t</div>\r\n\t\t\t\t<button class=\"service-brands__link service-item__link icon-expand\" data-path=\"sex-allopen\" >Читать дальше</button>\r\n\t\t\t</div>\r\n\t\t\t\t<picture class=\"service-item__img\">\r\n\t\t\t\t\t<source type=\"image/avif\" srcset=\"" + ___HTML_LOADER_REPLACEMENT_28___ + "\" media=\"(min-width: 1120px)\">\r\n\t\t\t\t\t<source type=\"image/avif\" srcset=\"" + ___HTML_LOADER_REPLACEMENT_29___ + "\" media=\"(min-width: 768px)\">\r\n\t\t\t\t\t<source type=\"image/avif\" srcset=\"" + ___HTML_LOADER_REPLACEMENT_30___ + "\">\r\n\t\t\t\t\t<source type=\"image/webp\" srcset=\"" + ___HTML_LOADER_REPLACEMENT_31___ + "\" media=\"(min-width: 1120px)\">\r\n\t\t\t\t\t<source type=\"image/webp\" srcset=\"" + ___HTML_LOADER_REPLACEMENT_32___ + "\" media=\"(min-width: 768px)\">\r\n\t\t\t\t\t<source type=\"image/webp\" srcset=\"" + ___HTML_LOADER_REPLACEMENT_33___ + "\">\r\n\t\t\t\t\t<source srcset=\"" + ___HTML_LOADER_REPLACEMENT_34___ + "\" media=\"(min-width: 1120px)\">\r\n\t\t\t\t\t<source srcset=\"" + ___HTML_LOADER_REPLACEMENT_35___ + "\" media=\"(min-width: 768px)\">\r\n\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_36___ + "\" alt=\"фото\"/>\r\n\t\t\t\t</picture>\t\t\t\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"servec-content__service-item service-item\" data-target=\"five\">\r\n\t\t\t\t<div>\r\n\t\t\t\t<div class=\"service-item__wrapp\" data-target=\"six-allopen\">\r\n\t\t\t\t\t<p class=\"service-item__text\">\r\n\t\t\t\t\t\tМы являемся авторизованным сервисным центром по ремонту техники Dell. Только у нас вы можете отремонтировать свой ноутбук Dell с официальной гарантией производителя.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"service-item__text service-item__text--visually-hidden\">\r\n\t\t\t\t\t\tМы успешно работаем с 1992 года и заслужили репутацию надежного партнера, что подтверждает большое количество постоянных клиентов. Мы гордимся тем, что к нам обращаются по рекомендациям и, в свою очередь, советуют нас родным и близким.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t</div>\r\n\t\t\t\t<button class=\"service-brands__link service-item__link icon-expand\" data-path=\"six-allopen\" >Читать дальше</button>\r\n\t\t\t</div>\r\n\t\t\t\t<picture class=\"service-item__img\">\r\n\t\t\t\t\t<source type=\"image/avif\" srcset=\"" + ___HTML_LOADER_REPLACEMENT_37___ + "\" media=\"(min-width: 1120px)\">\r\n\t\t\t\t\t<source type=\"image/avif\" srcset=\"" + ___HTML_LOADER_REPLACEMENT_38___ + "\" media=\"(min-width: 768px)\">\r\n\t\t\t\t\t<source type=\"image/avif\" srcset=\"" + ___HTML_LOADER_REPLACEMENT_39___ + "\">\r\n\t\t\t\t\t<source type=\"image/webp\" srcset=\"" + ___HTML_LOADER_REPLACEMENT_40___ + "\" media=\"(min-width: 1120px)\">\r\n\t\t\t\t\t<source type=\"image/webp\" srcset=\"" + ___HTML_LOADER_REPLACEMENT_41___ + "\" media=\"(min-width: 768px)\">\r\n\t\t\t\t\t<source type=\"image/webp\" srcset=\"" + ___HTML_LOADER_REPLACEMENT_42___ + "\">\r\n\t\t\t\t\t<source srcset=\"" + ___HTML_LOADER_REPLACEMENT_43___ + "\" media=\"(min-width: 1120px)\">\r\n\t\t\t\t\t<source srcset=\"" + ___HTML_LOADER_REPLACEMENT_44___ + "\" media=\"(min-width: 768px)\">\r\n\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_45___ + "\" alt=\"фото\"/>\r\n\t\t\t\t</picture>\t\t\t\t\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"servec-content__service-item service-item\" data-target=\"six\">\r\n\t\t\t\t<div>\r\n\t\t\t\t<div class=\"service-item__wrapp\" data-target=\"seven-allopen\">\r\n\t\t\t\t\t<p class=\"service-item__text\">\r\n\t\t\t\t\t\tМы являемся авторизованным сервисным центром по ремонту техники Dell. Только у нас вы можете отремонтировать свой ноутбук Dell с официальной гарантией производителя.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"service-item__text service-item__text--visually-hidden\">\r\n\t\t\t\t\t\tМы успешно работаем с 1992 года и заслужили репутацию надежного партнера, что подтверждает большое количество постоянных клиентов. Мы гордимся тем, что к нам обращаются по рекомендациям и, в свою очередь, советуют нас родным и близким.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t</div>\r\n\t\t\t\t<button class=\"service-brands__link service-item__link icon-expand\" data-path=\"seven-allopen\" >Читать дальше</button>\r\n\t\t\t</div>\r\n\t\t\t\t<picture class=\"service-item__img\">\r\n\t\t\t\t\t<source type=\"image/avif\" srcset=\"" + ___HTML_LOADER_REPLACEMENT_46___ + "\" media=\"(min-width: 1120px)\">\r\n\t\t\t\t\t<source type=\"image/avif\" srcset=\"" + ___HTML_LOADER_REPLACEMENT_47___ + "\" media=\"(min-width: 768px)\">\r\n\t\t\t\t\t<source type=\"image/avif\" srcset=\"" + ___HTML_LOADER_REPLACEMENT_48___ + "\">\r\n\t\t\t\t\t<source type=\"image/webp\" srcset=\"" + ___HTML_LOADER_REPLACEMENT_49___ + "\" media=\"(min-width: 1120px)\">\r\n\t\t\t\t\t<source type=\"image/webp\" srcset=\"" + ___HTML_LOADER_REPLACEMENT_50___ + "\" media=\"(min-width: 768px)\">\r\n\t\t\t\t\t<source type=\"image/webp\" srcset=\"" + ___HTML_LOADER_REPLACEMENT_51___ + "\">\r\n\t\t\t\t\t<source srcset=\"" + ___HTML_LOADER_REPLACEMENT_52___ + "\" media=\"(min-width: 1120px)\">\r\n\t\t\t\t\t<source srcset=\"" + ___HTML_LOADER_REPLACEMENT_53___ + "\" media=\"(min-width: 768px)\">\r\n\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_54___ + "\" alt=\"фото\"/>\r\n\t\t\t\t</picture>\t\t\t\t\r\n\t\t\t</div>\r\n\r\n\t\t</section>\r\n\r\n\t\t<!-- Секция брендов -->\r\n\t\t<section class=\"service-brands\">\r\n\t\t\t<h2 class=\"service-brands__title\">Ремонт техники различных брендов</h2>\r\n\t\t\t\r\n\t\t\t<div class=\"swiper-container swiper-container--brands service-brands__container\">\t\t\t\t\r\n\t\t\t\t<ul class=\"swiper-wrapper service-brands__wrapp\">\r\n\t\t\t\t\t<li class=\"swiper-slide service-brands__slide-list slide-list\">\r\n\t\t\t\t\t\t<a class=\"slide-list__link\" href=\"#\">\r\n\t\t\t\t\t\t\t<img class=\"slide-list__logo\" src=\"" + ___HTML_LOADER_REPLACEMENT_55___ + "\" alt=\"Lenova\" width=\"108\" height=\"32\">\r\n\t\t\t\t\t\t\t<span class=\"slide-list__btn icon-dropdown\"></span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"swiper-slide service-brands__slide-list slide-list\">\r\n\t\t\t\t\t\t<a class=\"slide-list__link\" href=\"#\">\r\n\t\t\t\t\t\t\t<img class=\"slide-list__logo\" src=\"" + ___HTML_LOADER_REPLACEMENT_56___ + "\" alt=\"samsung\" width=\"116\" height=\"38\">\r\n\t\t\t\t\t\t\t<span class=\"slide-list__btn icon-dropdown\"></span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"swiper-slide service-brands__slide-list slide-list\">\r\n\t\t\t\t\t\t<a class=\"slide-list__link\" href=\"#\">\r\n\t\t\t\t\t\t\t<img class=\"slide-list__logo\" src=\"" + ___HTML_LOADER_REPLACEMENT_57___ + "\" alt=\"apple\" width=\"44\" height=\"44\">\r\n\t\t\t\t\t\t\t<span class=\"slide-list__btn icon-dropdown\"></span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"swiper-slide service-brands__slide-list slide-list\">\r\n\t\t\t\t\t\t<a class=\"slide-list__link\" href=\"#\">\r\n\t\t\t\t\t\t\t<img class=\"slide-list__logo\" src=\"" + ___HTML_LOADER_REPLACEMENT_58___ + "\" alt=\"viewsonick\" width=\"128\" height=\"21\">\r\n\t\t\t\t\t\t\t<span class=\"slide-list__btn icon-dropdown\"></span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"swiper-slide service-brands__slide-list slide-list\">\r\n\t\t\t\t\t\t<a class=\"slide-list__link\" href=\"#\">\r\n\t\t\t\t\t\t\t<img class=\"slide-list__logo\" src=\"" + ___HTML_LOADER_REPLACEMENT_59___ + "\" alt=\"bosch\" width=\"128\" height=\"28\">\r\n\t\t\t\t\t\t\t<span class=\"slide-list__btn icon-dropdown\"></span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"swiper-slide service-brands__slide-list slide-list\">\r\n\t\t\t\t\t\t<a class=\"slide-list__link\" href=\"#\">\r\n\t\t\t\t\t\t\t<img class=\"slide-list__logo\" src=\"" + ___HTML_LOADER_REPLACEMENT_60___ + "\" alt=\"hp\" width=\"52\" height=\"52\">\r\n\t\t\t\t\t\t\t<span class=\"slide-list__btn icon-dropdown\"></span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"swiper-slide service-brands__slide-list slide-list\">\r\n\t\t\t\t\t\t<a class=\"slide-list__link\" href=\"#\">\r\n\t\t\t\t\t\t\t<img class=\"slide-list__logo\" src=\"" + ___HTML_LOADER_REPLACEMENT_61___ + "\" alt=\"acer\" width=\"94\" height=\"24\">\r\n\t\t\t\t\t\t\t<span class=\"slide-list__btn icon-dropdown\"></span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"swiper-slide service-brands__slide-list slide-list\">\r\n\t\t\t\t\t\t<a class=\"slide-list__link\" href=\"#\">\r\n\t\t\t\t\t\t\t<img class=\"slide-list__logo\" src=\"" + ___HTML_LOADER_REPLACEMENT_62___ + "\" alt=\"sony\" width=\"128\" height=\"26\">\r\n\t\t\t\t\t\t\t<span class=\"slide-list__btn icon-dropdown\"></span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ul>\r\n\t\t\t\t<div class=\"swiper-pagination service-brands__pagination\"></div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<ul class=\"service-brands__wrapp-tab all-open\" data-target=\"one-allopen\">\r\n\t\t\t\t<li class=\"service-brands__slide-list-tab slide-list-tab\">\r\n\t\t\t\t\t<a class=\"slide-list-tab__link\" href=\"#\">\r\n\t\t\t\t\t\t<img class=\"slide-list-tab__logo\" src=\"" + ___HTML_LOADER_REPLACEMENT_55___ + "\" alt=\"Lenova\" width=\"108\" height=\"32\">\r\n\t\t\t\t\t\t<span class=\"slide-list-tab__btn icon-dropdown\"></span>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"service-brands__slide-list-tab slide-list-tab\">\r\n\t\t\t\t\t<a class=\"slide-list-tab__link\" href=\"#\">\r\n\t\t\t\t\t\t<img class=\"slide-list-tab__logo\" src=\"" + ___HTML_LOADER_REPLACEMENT_56___ + "\" alt=\"samsung\" width=\"116\" height=\"38\">\r\n\t\t\t\t\t\t<span class=\"slide-list-tab__btn icon-dropdown\"></span>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"service-brands__slide-list-tab slide-list-tab\">\r\n\t\t\t\t\t<a class=\"slide-list-tab__link\" href=\"#\">\r\n\t\t\t\t\t\t<img class=\"slide-list-tab__logo\" src=\"" + ___HTML_LOADER_REPLACEMENT_57___ + "\" alt=\"apple\" width=\"44\" height=\"44\">\r\n\t\t\t\t\t\t<span class=\"slide-list-tab__btn icon-dropdown\"></span>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"service-brands__slide-list-tab slide-list-tab\">\r\n\t\t\t\t\t<a class=\"slide-list-tab__link\" href=\"#\">\r\n\t\t\t\t\t\t<img class=\"slide-list-tab__logo\" src=\"" + ___HTML_LOADER_REPLACEMENT_58___ + "\" alt=\"viewsonick\" width=\"128\" height=\"21\">\r\n\t\t\t\t\t\t<span class=\"slide-list-tab__btn icon-dropdown\"></span>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"service-brands__slide-list-tab slide-list-tab\">\r\n\t\t\t\t\t<a class=\"slide-list-tab__link\" href=\"#\">\r\n\t\t\t\t\t\t<img class=\"slide-list-tab__logo\" src=\"" + ___HTML_LOADER_REPLACEMENT_59___ + "\" alt=\"bosch\" width=\"128\" height=\"28\">\r\n\t\t\t\t\t\t<span class=\"slide-list-tab__btn icon-dropdown\"></span>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"service-brands__slide-list-tab slide-list-tab\">\r\n\t\t\t\t\t<a class=\"slide-list-tab__link\" href=\"#\">\r\n\t\t\t\t\t\t<img class=\"slide-list-tab__logo\" src=\"" + ___HTML_LOADER_REPLACEMENT_60___ + "\" alt=\"hp\" width=\"52\" height=\"52\">\r\n\t\t\t\t\t\t<span class=\"slide-list-tab__btn icon-dropdown\"></span>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"service-brands__slide-list-tab slide-list-tab\">\r\n\t\t\t\t\t<a class=\"slide-list-tab__link\" href=\"#\">\r\n\t\t\t\t\t\t<img class=\"slide-list-tab__logo\" src=\"" + ___HTML_LOADER_REPLACEMENT_61___ + "\" alt=\"acer\" width=\"94\" height=\"24\">\r\n\t\t\t\t\t\t<span class=\"slide-list-tab__btn icon-dropdown\"></span>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"service-brands__slide-list-tab slide-list-tab\">\r\n\t\t\t\t\t<a class=\"slide-list-tab__link\" href=\"#\">\r\n\t\t\t\t\t\t<img class=\"slide-list-tab__logo\" src=\"" + ___HTML_LOADER_REPLACEMENT_62___ + "\" alt=\"sony\" width=\"128\" height=\"26\">\r\n\t\t\t\t\t\t<span class=\"slide-list-tab__btn icon-dropdown\"></span>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"service-brands__slide-list-tab slide-list-tab\">\r\n\t\t\t\t\t<a class=\"slide-list-tab__link\" href=\"#\">\r\n\t\t\t\t\t\t<img class=\"slide-list-tab__logo\" src=\"" + ___HTML_LOADER_REPLACEMENT_55___ + "\" alt=\"Lenova\" width=\"108\" height=\"32\">\r\n\t\t\t\t\t\t<span class=\"slide-list-tab__btn icon-dropdown\"></span>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"service-brands__slide-list-tab slide-list-tab\">\r\n\t\t\t\t\t<a class=\"slide-list-tab__link\" href=\"#\">\r\n\t\t\t\t\t\t<img class=\"slide-list-tab__logo\" src=\"" + ___HTML_LOADER_REPLACEMENT_56___ + "\" alt=\"samsung\" width=\"116\" height=\"38\">\r\n\t\t\t\t\t\t<span class=\"slide-list-tab__btn icon-dropdown\"></span>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"service-brands__slide-list-tab slide-list-tab\">\r\n\t\t\t\t\t<a class=\"slide-list-tab__link\" href=\"#\">\r\n\t\t\t\t\t\t<img class=\"slide-list-tab__logo\" src=\"" + ___HTML_LOADER_REPLACEMENT_57___ + "\" alt=\"apple\" width=\"44\" height=\"44\">\r\n\t\t\t\t\t\t<span class=\"slide-list-tab__btn icon-dropdown\"></span>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"service-brands__slide-list-tab slide-list-tab\">\r\n\t\t\t\t\t<a class=\"slide-list-tab__link\" href=\"#\">\r\n\t\t\t\t\t\t<img class=\"slide-list-tab__logo\" src=\"" + ___HTML_LOADER_REPLACEMENT_58___ + "\" alt=\"viewsonick\" width=\"128\" height=\"21\">\r\n\t\t\t\t\t\t<span class=\"slide-list-tab__btn icon-dropdown\"></span>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"service-brands__slide-list-tab slide-list-tab\">\r\n\t\t\t\t\t<a class=\"slide-list-tab__link\" href=\"#\">\r\n\t\t\t\t\t\t<img class=\"slide-list-tab__logo\" src=\"" + ___HTML_LOADER_REPLACEMENT_59___ + "\" alt=\"bosch\" width=\"128\" height=\"28\">\r\n\t\t\t\t\t\t<span class=\"slide-list-tab__btn icon-dropdown\"></span>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"service-brands__slide-list-tab slide-list-tab\">\r\n\t\t\t\t\t<a class=\"slide-list-tab__link\" href=\"#\">\r\n\t\t\t\t\t\t<img class=\"slide-list-tab__logo\" src=\"" + ___HTML_LOADER_REPLACEMENT_60___ + "\" alt=\"hp\" width=\"52\" height=\"52\">\r\n\t\t\t\t\t\t<span class=\"slide-list-tab__btn icon-dropdown\"></span>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"service-brands__slide-list-tab slide-list-tab\">\r\n\t\t\t\t\t<a class=\"slide-list-tab__link\" href=\"#\">\r\n\t\t\t\t\t\t<img class=\"slide-list-tab__logo\" src=\"" + ___HTML_LOADER_REPLACEMENT_61___ + "\" alt=\"acer\" width=\"94\" height=\"24\">\r\n\t\t\t\t\t\t<span class=\"slide-list-tab__btn icon-dropdown\"></span>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"service-brands__slide-list-tab slide-list-tab\">\r\n\t\t\t\t\t<a class=\"slide-list-tab__link\" href=\"#\">\r\n\t\t\t\t\t\t<img class=\"slide-list-tab__logo\" src=\"" + ___HTML_LOADER_REPLACEMENT_62___ + "\" alt=\"sony\" width=\"128\" height=\"26\">\r\n\t\t\t\t\t\t<span class=\"slide-list-tab__btn icon-dropdown\"></span>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t</ul>\r\n\t\t\t<button class=\"service-brands__link service-item__link icon-expand\" data-path=\"one-allopen\">Показать все</button>\r\n\t\t</section>\r\n\r\n\t\t<!-- Секция вида услуг -->\r\n\t\t<section class=\"service-type\">\r\n\t\t\t<h2 class=\"service-type__title\">Ремонт различных видов техники</h2>\r\n\r\n\t\t\t<div class=\"swiper-container swiper-container--type\">\r\n\t\t\t\t<ul class=\"swiper-wrapper service-type__service-list-type service-list-type\">\r\n\t\t\t\t\t<li class=\"swiper-slide service-list-type__item\">\r\n\t\t\t\t\t\t<a class=\"service-list-type__link\" href=\"#\">\r\n\t\t\t\t\t\t\t<h3 class=\"service-list-type__title\">Ремонт ноутбуков</h3>\r\n\t\t\t\t\t\t\t<span class=\"service-list-type__btn icon-dropdown\"></span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"swiper-slide service-list-type__item\">\r\n\t\t\t\t\t\t<a class=\"service-list-type__link\" href=\"#\">\r\n\t\t\t\t\t\t\t<h3 class=\"service-list-type__title\">Ремонт планшетов</h3>\r\n\t\t\t\t\t\t\t<span class=\"service-list-type__btn icon-dropdown\"></span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"swiper-slide service-list-type__item\">\r\n\t\t\t\t\t\t<a class=\"service-list-type__link\" href=\"#\">\r\n\t\t\t\t\t\t\t<h3 class=\"service-list-type__title\">Ремонт ПК</h3>\r\n\t\t\t\t\t\t\t<span class=\"service-list-type__btn icon-dropdown\"></span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"swiper-slide service-list-type__item\">\r\n\t\t\t\t\t\t<a class=\"service-list-type__link\" href=\"#\">\r\n\t\t\t\t\t\t\t<h3 class=\"service-list-type__title\">Ремонт ПК</h3>\r\n\t\t\t\t\t\t\t<span class=\"service-list-type__btn icon-dropdown\"></span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"swiper-slide service-list-type__item\">\r\n\t\t\t\t\t\t<a class=\"service-list-type__link\" href=\"#\">\r\n\t\t\t\t\t\t\t<h3 class=\"service-list-type__title\">Ремонт ПК</h3>\r\n\t\t\t\t\t\t\t<span class=\"service-list-type__btn icon-dropdown\"></span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"swiper-slide service-list-type__item\">\r\n\t\t\t\t\t\t<a class=\"service-list-type__link\" href=\"#\">\r\n\t\t\t\t\t\t\t<h3 class=\"service-list-type__title\">Ремонт ПК</h3>\r\n\t\t\t\t\t\t\t<span class=\"service-list-type__btn icon-dropdown\"></span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"swiper-slide service-list-type__item\">\r\n\t\t\t\t\t\t<a class=\"service-list-type__link\" href=\"#\">\r\n\t\t\t\t\t\t\t<h3 class=\"service-list-type__title\">Ремонт ПК</h3>\r\n\t\t\t\t\t\t\t<span class=\"service-list-type__btn icon-dropdown\"></span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ul>\r\n\t\t\t\t<div class=\"swiper-pagination service-type__pagination\"></div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<ul class=\"service-type__service-list-type-tab service-list-type-tab all-open\" data-target=\"two-allopen\">\r\n\t\t\t\t<li class=\"service-list-type-tab__item\">\r\n\t\t\t\t\t<a class=\"service-list-type-tab__link\" href=\"#\">\r\n\t\t\t\t\t\t<h3 class=\"service-list-type-tab__title\">Ремонт ноутбуков</h3>\r\n\t\t\t\t\t\t<span class=\"service-list-type-tab__btn icon-dropdown\"></span>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"service-list-type-tab__item\">\r\n\t\t\t\t\t<a class=\"service-list-type-tab__link\" href=\"#\">\r\n\t\t\t\t\t\t<h3 class=\"service-list-type-tab__title\">Ремонт планшетов</h3>\r\n\t\t\t\t\t\t<span class=\"service-list-type-tab__btn icon-dropdown\"></span>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"service-list-type-tab__item\">\r\n\t\t\t\t\t<a class=\"service-list-type-tab__link\" href=\"#\">\r\n\t\t\t\t\t\t<h3 class=\"service-list-type-tab__title\">Ремонт ПК</h3>\r\n\t\t\t\t\t\t<span class=\"service-list-type-tab__btn icon-dropdown\"></span>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"service-list-type-tab__item\">\r\n\t\t\t\t\t<a class=\"service-list-type-tab__link\" href=\"#\">\r\n\t\t\t\t\t\t<h3 class=\"service-list-type-tab__title\">Ремонт ноутбуков</h3>\r\n\t\t\t\t\t\t<span class=\"service-list-type-tab__btn icon-dropdown\"></span>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"service-list-type-tab__item\">\r\n\t\t\t\t\t<a class=\"service-list-type-tab__link\" href=\"#\">\r\n\t\t\t\t\t\t<h3 class=\"service-list-type-tab__title\">Ремонт планшетов</h3>\r\n\t\t\t\t\t\t<span class=\"service-list-type-tab__btn icon-dropdown\"></span>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"service-list-type-tab__item\">\r\n\t\t\t\t\t<a class=\"service-list-type-tab__link\" href=\"#\">\r\n\t\t\t\t\t\t<h3 class=\"service-list-type-tab__title\">Ремонт ПК</h3>\r\n\t\t\t\t\t\t<span class=\"service-list-type-tab__btn icon-dropdown\"></span>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t</ul>\r\n\r\n\t\t\t<button class=\"service-brands__link service-item__link icon-expand\" data-path=\"two-allopen\" >Показать все</button>\r\n\t\t</section>\r\n\r\n\t\t<!-- Секция Стоимости услуг -->\r\n\t\t<section class=\"service-price\"> \r\n\t\t\t<h2 class=\"service-price__title\">Цены на услуги</h2>\r\n\r\n\t\t\t<div class=\"swiper-container swiper-container--price\">\r\n\t\t\t\t<ul class=\"swiper-wrapper service-price__price-list price-list\">\r\n\t\t\t\t\t<li class=\"swiper-slide price-list__item\">\r\n\t\t\t\t\t\t<ul class=\"price-list__item-list\">\r\n\t\t\t\t\t\t\t<li class=\"price-list__item-header\">\r\n\t\t\t\t\t\t\t\t<h3 class=\"price-list__title\">Ремонтные услуги</h3>\r\n\t\t\t\t\t\t\t\t<span class=\"price-list__text\">Диагностика</span>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class=\"price-list__item-main\">\r\n\t\t\t\t\t\t\t\t<h3 class=\"price-list__title\">Цена</h3>\r\n\t\t\t\t\t\t\t\t<span class=\"price-list__text\">Бесплатно</span>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class=\"price-list__item-footer\">\r\n\t\t\t\t\t\t\t\t<div class=\"price-list__item-footer-wrap\">\r\n\t\t\t\t\t\t\t\t\t<h3 class=\"price-list__title\">Срок</h3>\r\n\t\t\t\t\t\t\t\t\t<span class=\"price-list__text\">30 мин</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<a class=\"price-list__link icon-dropdown\" href=\"#\">Заказать</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"swiper-slide price-list__item\">\r\n\t\t\t\t\t\t<ul class=\"price-list__item-list\">\r\n\t\t\t\t\t\t\t<li class=\"price-list__item-header\">\r\n\t\t\t\t\t\t\t\t<h3 class=\"price-list__title\">Ремонтные услуги</h3>\r\n\t\t\t\t\t\t\t\t<span class=\"price-list__text\">Диагностика</span>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class=\"price-list__item-main\">\r\n\t\t\t\t\t\t\t\t<h3 class=\"price-list__title\">Цена</h3>\r\n\t\t\t\t\t\t\t\t<span class=\"price-list__text\">Бесплатно</span>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class=\"price-list__item-footer\">\r\n\t\t\t\t\t\t\t\t<div class=\"price-list__item-footer-wrap\">\r\n\t\t\t\t\t\t\t\t\t<h3 class=\"price-list__title\">Срок</h3>\r\n\t\t\t\t\t\t\t\t\t<span class=\"price-list__text\">30 мин</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<a class=\"price-list__link icon-dropdown\" href=\"#\">Заказать</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"swiper-slide price-list__item\">\r\n\t\t\t\t\t\t<ul class=\"price-list__item-list\">\r\n\t\t\t\t\t\t\t<li class=\"price-list__item-header\">\r\n\t\t\t\t\t\t\t\t<h3 class=\"price-list__title\">Ремонтные услуги</h3>\r\n\t\t\t\t\t\t\t\t<span class=\"price-list__text\">Диагностика</span>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class=\"price-list__item-main\">\r\n\t\t\t\t\t\t\t\t<h3 class=\"price-list__title\">Цена</h3>\r\n\t\t\t\t\t\t\t\t<span class=\"price-list__text\">Бесплатно</span>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class=\"price-list__item-footer\">\r\n\t\t\t\t\t\t\t\t<div class=\"price-list__item-footer-wrap\">\r\n\t\t\t\t\t\t\t\t\t<h3 class=\"price-list__title\">Срок</h3>\r\n\t\t\t\t\t\t\t\t\t<span class=\"price-list__text\">30 мин</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<a class=\"price-list__link icon-dropdown\" href=\"#\">Заказать</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"swiper-slide price-list__item\">\r\n\t\t\t\t\t\t<ul class=\"price-list__item-list\">\r\n\t\t\t\t\t\t\t<li class=\"price-list__item-header\">\r\n\t\t\t\t\t\t\t\t<h3 class=\"price-list__title\">Ремонтные услуги</h3>\r\n\t\t\t\t\t\t\t\t<span class=\"price-list__text\">Диагностика</span>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class=\"price-list__item-main\">\r\n\t\t\t\t\t\t\t\t<h3 class=\"price-list__title\">Цена</h3>\r\n\t\t\t\t\t\t\t\t<span class=\"price-list__text\">Бесплатно</span>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class=\"price-list__item-footer\">\r\n\t\t\t\t\t\t\t\t<div class=\"price-list__item-footer-wrap\">\r\n\t\t\t\t\t\t\t\t\t<h3 class=\"price-list__title\">Срок</h3>\r\n\t\t\t\t\t\t\t\t\t<span class=\"price-list__text\">30 мин</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<a class=\"price-list__link icon-dropdown\" href=\"#\">Заказать</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"swiper-slide price-list__item\">\r\n\t\t\t\t\t\t<ul class=\"price-list__item-list\">\r\n\t\t\t\t\t\t\t<li class=\"price-list__item-header\">\r\n\t\t\t\t\t\t\t\t<h3 class=\"price-list__title\">Ремонтные услуги</h3>\r\n\t\t\t\t\t\t\t\t<span class=\"price-list__text\">Диагностика</span>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class=\"price-list__item-main\">\r\n\t\t\t\t\t\t\t\t<h3 class=\"price-list__title\">Цена</h3>\r\n\t\t\t\t\t\t\t\t<span class=\"price-list__text\">Бесплатно</span>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class=\"price-list__item-footer\">\r\n\t\t\t\t\t\t\t\t<div class=\"price-list__item-footer-wrap\">\r\n\t\t\t\t\t\t\t\t\t<h3 class=\"price-list__title\">Срок</h3>\r\n\t\t\t\t\t\t\t\t\t<span class=\"price-list__text\">30 мин</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<a class=\"price-list__link icon-dropdown\" href=\"#\">Заказать</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"swiper-slide price-list__item\">\r\n\t\t\t\t\t\t<ul class=\"price-list__item-list\">\r\n\t\t\t\t\t\t\t<li class=\"price-list__item-header\">\r\n\t\t\t\t\t\t\t\t<h3 class=\"price-list__title\">Ремонтные услуги</h3>\r\n\t\t\t\t\t\t\t\t<span class=\"price-list__text\">Диагностика</span>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class=\"price-list__item-main\">\r\n\t\t\t\t\t\t\t\t<h3 class=\"price-list__title\">Цена</h3>\r\n\t\t\t\t\t\t\t\t<span class=\"price-list__text\">Бесплатно</span>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class=\"price-list__item-footer\">\r\n\t\t\t\t\t\t\t\t<div class=\"price-list__item-footer-wrap\">\r\n\t\t\t\t\t\t\t\t\t<h3 class=\"price-list__title\">Срок</h3>\r\n\t\t\t\t\t\t\t\t\t<span class=\"price-list__text\">30 мин</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<a class=\"price-list__link icon-dropdown\" href=\"#\">Заказать</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ul>\r\n\t\t\t\t<div class=\"swiper-pagination service-price__pagination\"></div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<table class=\"service-price__table-price table-price\">\r\n\t\t\t\t<tr class=\"table-price__header\">\r\n\t\t\t\t\t<th class=\"table-price__header-item\">Ремонтные услуги</th>\r\n\t\t\t\t\t<th class=\"table-price__header-item\">Цена</th>\r\n\t\t\t\t\t<th class=\"table-price__header-item\">Срок</th>\r\n\t\t\t\t\t<th class=\"table-price__header-item\"></th>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr class=\"table-price__list\">\r\n\t\t\t\t\t<td class=\"table-price__item\">Диагностика</td>\r\n\t\t\t\t\t<td class=\"table-price__item\">Бесплатно</td>\r\n\t\t\t\t\t<td class=\"table-price__item\">30 мин</td>\r\n\t\t\t\t\t<td class=\"table-price__item\"><a class=\"table-price__link icon-dropdown\" href=\"#\">Заказать</a></td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr class=\"table-price__list\">\r\n\t\t\t\t\t<td class=\"table-price__item\">Замена дисплея</td>\r\n\t\t\t\t\t<td class=\"table-price__item\">1000 &#8381;</td>\r\n\t\t\t\t\t<td class=\"table-price__item\">30-120 мин</td>\r\n\t\t\t\t\t<td class=\"table-price__item\"><a class=\"table-price__link icon-dropdown\" href=\"#\">Заказать</a></td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr class=\"table-price__list\">\r\n\t\t\t\t\t<td class=\"table-price__item\">Замена полифонического динамика</td>\r\n\t\t\t\t\t<td class=\"table-price__item\">1000 &#8381;</td>\r\n\t\t\t\t\t<td class=\"table-price__item\">30-120 мин</td>\r\n\t\t\t\t\t<td class=\"table-price__item\"><a class=\"table-price__link icon-dropdown\" href=\"#\">Заказать</a></td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr class=\"table-price__list\">\r\n\t\t\t\t\t<td class=\"table-price__item\">Тестирование с выдачей технического заключения</td>\r\n\t\t\t\t\t<td class=\"table-price__item\">1000 &#8381;</td>\r\n\t\t\t\t\t<td class=\"table-price__item\">30-120 мин</td>\r\n\t\t\t\t\t<td class=\"table-price__item\"><a class=\"table-price__link icon-dropdown\" href=\"#\">Заказать</a></td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr class=\"table-price__list\">\r\n\t\t\t\t\t<td class=\"table-price__item\">Замена программного обеспечения</td>\r\n\t\t\t\t\t<td class=\"table-price__item\">1000 &#8381;</td>\r\n\t\t\t\t\t<td class=\"table-price__item\">30-120 мин</td>\r\n\t\t\t\t\t<td class=\"table-price__item\"><a class=\"table-price__link icon-dropdown\" href=\"#\">Заказать</a></td>\r\n\t\t\t\t</tr>\r\n\t\t\t</table>\r\n\t\t\t\r\n\t\t\t<p class=\"service-price__text\">\r\n\t\t\t\tВсе цены указаны с учетом НДС. Стоимость ремонта указана на единичную услугу. Для получения коммерческого предложения на постоянное обслуживание, оставьте заявку.\r\n\t\t\t</p>\r\n\r\n\t\t\t<a class=\"service-price__link icon-dropdown\" href=\"#\">Получить коммерческое предложение</a>\r\n\r\n\t\t</section>\r\n\r\n\t</main>\r\n\r\n\t<!-- Обратная связь -->\r\n\t<section class=\"cps-popap cps-popap--none blok-js-active\" data-target=\"one-btn\">\r\n\t\t<h2 class=\"cps-popap__title\">Обратная связь</h2>\r\n\t\t<form class=\"cps-popap__fb-form fb-form\" action=\"#\" method=\"POST\" enctype=\"multipart/form-data\">\r\n\t\t\t<label for=\"fb-name\">\r\n\t\t\t\t<span class=\"visually-hidden\">Имя</span>\r\n\t\t\t\t<input class=\"fb-form__input\" type=\"text\" name=\"name\" placeholder=\"Имя\" required=\"required\" id=\"fb-name\">\r\n\t\t\t</label>\r\n\t\t\t<label for=\"fb-phone\">\r\n\t\t\t\t<span class=\"visually-hidden\">Телефон</span>\r\n\t\t\t\t<input class=\"fb-form__input\" type=\"text\" name=\"phone\" placeholder=\"Телефон\" required=\"required\" id=\"fb-phone\">\r\n\t\t\t</label>\r\n\t\t\t<label for=\"fb-email\">\r\n\t\t\t\t<span class=\"visually-hidden\">Элетронная почта</span>\r\n\t\t\t\t<input class=\"fb-form__input\" type=\"text\" name=\"email\" placeholder=\"Элетронная почта\" required=\"required\" id=\"fb-email\">\r\n\t\t\t</label>\r\n\t\t\t<label for=\"fb-message\">\r\n\t\t\t\t<span class=\"visually-hidden\">Сообщение</span>\r\n\t\t\t\t<textarea class=\"fb-form__input fb-form__textarea\" placeholder=\"Сообщение\" id=\"fb-message\"></textarea>\r\n\t\t\t</label>\r\n\t\t\t<p class=\"fb-form__text\">\r\n\t\t\t\tНажимая “отправить”, вы даете согласие на <strong class=\"fb-form__text--color-radical-red\">обработку персональных данных</strong> и соглашаетесь с нашей <a class=\"fb-form__text--color-radical-red\" href=\"#\">политикой конфиденциальности</a>\r\n\t\t\t</p>\r\n\t\t\t<button class=\"fb-form__btn icon-dropdown\" type=\"submit\">Отправить</button>\r\n\t\t</form>\r\n\t\t<button class=\"cps-popap__btn btn-close button-js-open\">\r\n\t\t\t<span class=\"visually-hidden\">Закрыть меню</span>\r\n\t\t\t<span class=\"btn-close__elm-btn\"></span>\r\n\t\t</button>\r\n\t\t<div class=\"cps-js-bg cps-popap__bg\"></div>\r\n\t</section>\r\n\r\n\t<!-- Статус ремонта -->\r\n\t<section class=\"cps-popap cps-popap--none blok-js-active\"  data-target=\"two-btn\">\r\n\t\t<h2 class=\"cps-popap__title\">Статус ремонта</h2>\r\n\t\t<form class=\"cps-popap__fb-form fb-form\" action=\"#\" method=\"POST\" enctype=\"multipart/form-data\">\r\n\t\t\t<label>\r\n\t\t\t\t<span class=\"visually-hidden\">Телефон</span>\r\n\t\t\t\t<input class=\"fb-form__input\" type=\"tel\" name=\"phone\" placeholder=\"Телефон\" required=\"required\">\r\n\t\t\t</label>\r\n\t\t\t<p class=\"fb-form__text\">\r\n\t\t\t\tНажимая “отправить”, вы даете согласие на <strong class=\"fb-form__text--color-radical-red\">обработку персональных данных</strong> и соглашаетесь с нашей <a class=\"fb-form__text--color-radical-red\" href=\"#\" target=\"_blank\">политикой конфиденциальности</a>\r\n\t\t\t</p>\r\n\t\t\t<button class=\"fb-form__btn icon-dropdown\" type=\"submit\">Отправить</button>\r\n\t\t</form>\r\n\t\t<button class=\"cps-popap__btn btn-close button-js-open\">\r\n\t\t\t<span class=\"visually-hidden\">Закрыть меню</span>\r\n\t\t\t<span class=\"btn-close__elm-btn\"></span>\r\n\t\t</button>\r\n\t\r\n\t\r\n\t\t<div class=\"cps-js-bg cps-popap__bg\"></div>\r\n\t</section>\r\n\t<!-- Заказать звонок -->\r\n\t<section class=\"cps-popap cps-popap--none blok-js-active\"  data-target=\"three-btn\">\r\n\t\t<h2 class=\"cps-popap__title\">Заказать звонок</h2>\r\n\t\t<form class=\"cps-popap__fb-form fb-form\" action=\"#\" method=\"POST\" enctype=\"multipart/form-data\">\r\n\t\t\t<label>\r\n\t\t\t\t<span class=\"visually-hidden\">Телефон</span>\r\n\t\t\t\t<input class=\"fb-form__input\" type=\"tel\" name=\"phone\" placeholder=\"Телефон\" required=\"required\">\r\n\t\t\t</label>\r\n\t\t\t<p class=\"fb-form__text\">\r\n\t\t\t\tНажимая “отправить”, вы даете согласие на <strong class=\"fb-form__text--color-radical-red\">обработку персональных данных</strong> и соглашаетесь с нашей <a class=\"fb-form__text--color-radical-red\" href=\"#\" target=\"_blank\">политикой конфиденциальности</a>\r\n\t\t\t</p>\r\n\t\t\t<button class=\"fb-form__btn icon-dropdown\" type=\"submit\">Отправить</button>\r\n\t\t</form>\r\n\t\t<button class=\"cps-popap__btn btn-close button-js-open\">\r\n\t\t\t<span class=\"visually-hidden\">Закрыть меню</span>\r\n\t\t\t<span class=\"btn-close__elm-btn\"></span>\r\n\t\t</button>\r\n\t\r\n\t\r\n\t\t<div class=\"cps-js-bg cps-popap__bg\"></div>\r\n\t</section>\r\n\t<!-- Заказать звонок -->\r\n\t<section class=\"cps-popap cps-popap--none blok-js-active\"  data-target=\"three-btn\">\r\n\t\t<h2 class=\"cps-popap__title\">Заказать звонок</h2>\r\n\t\t<form class=\"cps-popap__fb-form fb-form\" action=\"#\" method=\"POST\" enctype=\"multipart/form-data\">\r\n\t\t\t<label>\r\n\t\t\t\t<span class=\"visually-hidden\">Телефон</span>\r\n\t\t\t\t<input class=\"fb-form__input\" type=\"tel\" name=\"phone\" placeholder=\"Телефон\" required=\"required\">\r\n\t\t\t</label>\r\n\t\t\t<p class=\"fb-form__text\">\r\n\t\t\t\tНажимая “отправить”, вы даете согласие на <strong class=\"fb-form__text--color-radical-red\">обработку персональных данных</strong> и соглашаетесь с нашей <a class=\"fb-form__text--color-radical-red\" href=\"#\" target=\"_blank\">политикой конфиденциальности</a>\r\n\t\t\t</p>\r\n\t\t\t<button class=\"fb-form__btn icon-dropdown\" type=\"submit\">Отправить</button>\r\n\t\t</form>\r\n\t\t<button class=\"cps-popap__btn btn-close button-js-open\">\r\n\t\t\t<span class=\"visually-hidden\">Закрыть меню</span>\r\n\t\t\t<span class=\"btn-close__elm-btn\"></span>\r\n\t\t</button>\r\n\t\r\n\t\r\n\t\t<div class=\"cps-js-bg cps-popap__bg\"></div>\r\n\t</section>\r\n\t<!-- Начать чат -->\r\n\t<section class=\"cps-popap cps-popap--none blok-js-active\"  data-target=\"four-btn\">\r\n\t\t<h2 class=\"cps-popap__title\">Начать чат</h2>\r\n\t\t<form class=\"cps-popap__fb-form fb-form\" action=\"#\" method=\"POST\" enctype=\"multipart/form-data\">\r\n\t\t\t<label>\r\n\t\t\t\t<span class=\"visually-hidden\">Телефон</span>\r\n\t\t\t\t<input class=\"fb-form__input\" type=\"tel\" name=\"phone\" placeholder=\"Телефон\" required=\"required\">\r\n\t\t\t</label>\r\n\t\t\t<p class=\"fb-form__text\">\r\n\t\t\t\tНажимая “отправить”, вы даете согласие на <strong class=\"fb-form__text--color-radical-red\">обработку персональных данных</strong> и соглашаетесь с нашей <a class=\"fb-form__text--color-radical-red\" href=\"#\" target=\"_blank\">политикой конфиденциальности</a>\r\n\t\t\t</p>\r\n\t\t\t<button class=\"fb-form__btn icon-dropdown\" type=\"submit\">Отправить</button>\r\n\t\t</form>\r\n\t\t<button class=\"cps-popap__btn btn-close button-js-open\">\r\n\t\t\t<span class=\"visually-hidden\">Закрыть меню</span>\r\n\t\t\t<span class=\"btn-close__elm-btn\"></span>\r\n\t\t</button>\r\n\t\r\n\t\r\n\t\t<div class=\"cps-js-bg cps-popap__bg\"></div>\r\n\t</section>\r\n\t<!-- Вход Личный кабинет -->\r\n\t<section class=\"cps-popap cps-popap--none blok-js-active\"  data-target=\"five-btn\">\r\n\t\t<h2 class=\"cps-popap__title\">Вход Личный кабинетк</h2>\r\n\t\t<form class=\"cps-popap__fb-form fb-form\" action=\"#\" method=\"POST\" enctype=\"multipart/form-data\">\r\n\t\t\t<label>\r\n\t\t\t\t<span class=\"visually-hidden\">Телефон</span>\r\n\t\t\t\t<input class=\"fb-form__input\" type=\"tel\" name=\"phone\" placeholder=\"Телефон\" required=\"required\">\r\n\t\t\t</label>\r\n\t\t\t<p class=\"fb-form__text\">\r\n\t\t\t\tНажимая “отправить”, вы даете согласие на <strong class=\"fb-form__text--color-radical-red\">обработку персональных данных</strong> и соглашаетесь с нашей <a class=\"fb-form__text--color-radical-red\" href=\"#\" target=\"_blank\">политикой конфиденциальности</a>\r\n\t\t\t</p>\r\n\t\t\t<button class=\"fb-form__btn icon-dropdown\" type=\"submit\">Отправить</button>\r\n\t\t</form>\r\n\t\t<button class=\"cps-popap__btn btn-close button-js-open\">\r\n\t\t\t<span class=\"visually-hidden\">Закрыть меню</span>\r\n\t\t\t<span class=\"btn-close__elm-btn\"></span>\r\n\t\t</button>\r\n\t\r\n\t\r\n\t\t<div class=\"cps-js-bg cps-popap__bg\"></div>\r\n\t</section>\r\n\t<!-- Поиск -->\r\n\t<section class=\"cps-popap cps-popap--none blok-js-active\"  data-target=\"seven-btn\">\r\n\t\t<h2 class=\"cps-popap__title\">Поиск</h2>\r\n\t\t<form class=\"cps-popap__fb-form fb-form\" action=\"#\" method=\"POST\" enctype=\"multipart/form-data\">\r\n\t\t\t<label>\r\n\t\t\t\t<span class=\"visually-hidden\">Телефон</span>\r\n\t\t\t\t<input class=\"fb-form__input\" type=\"tel\" name=\"phone\" placeholder=\"Телефон\" required=\"required\">\r\n\t\t\t</label>\r\n\t\t\t<p class=\"fb-form__text\">\r\n\t\t\t\tНажимая “отправить”, вы даете согласие на <strong class=\"fb-form__text--color-radical-red\">обработку персональных данных</strong> и соглашаетесь с нашей <a class=\"fb-form__text--color-radical-red\" href=\"#\" target=\"_blank\">политикой конфиденциальности</a>\r\n\t\t\t</p>\r\n\t\t\t<button class=\"fb-form__btn icon-dropdown\" type=\"submit\">Отправить</button>\r\n\t\t</form>\r\n\t\t<button class=\"cps-popap__btn btn-close button-js-open\">\r\n\t\t\t<span class=\"visually-hidden\">Закрыть меню</span>\r\n\t\t\t<span class=\"btn-close__elm-btn\"></span>\r\n\t\t</button>\r\n\t\r\n\t\r\n\t\t<div class=\"cps-js-bg cps-popap__bg\"></div>\r\n\t</section>\r\n\t<!-- Подвал -->\r\n\t<footer class=\"cps-footer\">\r\n\t\t<ul class=\"cps-footer__footer-list footer-list\">\r\n\t\t\t<li class=\"footer-list__item footer-list__wrapp\">\r\n\t\t\t\t<span>&#169; 2019 CPS</span>\r\n\t\t\t\t<span>Разработано командой <a class=\"footer-list__link\" href=\"https://apesong.ru/\" target=\"_blank\">Apesong</a></span>\r\n\t\t\t</li>\r\n\t\t\t<li class=\"footer-list__item\">\r\n\t\t\t\t<a class=\"footer-list__link\" href=\"#\">Политика конфиденциальности</a>\r\n\t\t\t</li>\r\n\t\t\t<li class=\"footer-list__item\">\r\n\t\t\t\tИнформация, размещена на данной странице, не является публичной офертой\r\n\t\t\t</li>\r\n\t\t</ul>\t\r\n\t</footer>\r\n\r\n</body>\r\n</html>";
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

	// Навигация 
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
module.exports = __webpack_require__.p + "3ea6ad8999fef137aa17.svg";

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
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper */ "../node_modules/swiper/esm/components/core/core-class.js");
/* harmony import */ var _js_app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/app.js */ "./js/app.js");
/* harmony import */ var _js_app_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_app_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scss/main.scss */ "./scss/main.scss");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../index.html */ "./index.html");






const swiperService = new swiper__WEBPACK_IMPORTED_MODULE_3__.default('.swiper-container--service', {
	// Optional parameters
	// loop: true,
	width: 250,
	spaceBetween: 10,
	centeredSlides: true,


	// And if we need scrollbar
	scrollbar: {
		el: '.swiper-scrollbar',
	},
});

const swiperBrands = new swiper__WEBPACK_IMPORTED_MODULE_3__.default('.swiper-container--brands', {
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

const swiperType = new swiper__WEBPACK_IMPORTED_MODULE_3__.default('.swiper-container--type', {
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

const swiperPrice = new swiper__WEBPACK_IMPORTED_MODULE_3__.default('.swiper-container--price', {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9pbmRleC5iNWZkYmU5OTgzNjE3NmI4MDFjZi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ29EOztBQUVwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyRUFBMkU7QUFDM0U7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QTtBQUNBLE1BQU07OztBQUdOLGVBQWUsK0NBQUMsRUFBRTs7QUFFbEIsSUFBSSxxREFBTTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLG1EQUFDO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsa0RBQUc7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUssR0FBRzs7QUFFUjtBQUNBLDRCQUE0Qjs7QUFFNUI7QUFDQTtBQUNBLE1BQU07OztBQUdOO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtB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ckIsaUVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNsSUQ7QUFDQSxpRUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSwwRUFBMEUsYUFBYTtBQUN2RjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDL0VEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7O1dDQUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCNEI7QUFDUDtBQUNLO0FBQ0w7QUFDckI7QUFDQTtBQUNBLDBCQUEwQiwyQ0FBTTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRixDQUFDO0FBQ0Q7QUFDQSx5QkFBeUIsMkNBQU07QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGLENBQUM7QUFDRDtBQUNBLHVCQUF1QiwyQ0FBTTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0YsQ0FBQztBQUNEO0FBQ0Esd0JBQXdCLDJDQUFNO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRixDQUFDLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2RvbTcvZG9tNy5lc20uanMiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguaHRtbCIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2h0bWwtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vLy4vc2Nzcy9tYWluLnNjc3M/Y2NiMiIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3Nzci13aW5kb3cvc3NyLXdpbmRvdy5lc20uanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9zd2lwZXIvZXNtL2NvbXBvbmVudHMvY29yZS9icmVha3BvaW50cy9nZXRCcmVha3BvaW50LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvc3dpcGVyL2VzbS9jb21wb25lbnRzL2NvcmUvYnJlYWtwb2ludHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9zd2lwZXIvZXNtL2NvbXBvbmVudHMvY29yZS9icmVha3BvaW50cy9zZXRCcmVha3BvaW50LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvc3dpcGVyL2VzbS9jb21wb25lbnRzL2NvcmUvY2hlY2stb3ZlcmZsb3cvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9zd2lwZXIvZXNtL2NvbXBvbmVudHMvY29yZS9jbGFzc2VzL2FkZENsYXNzZXMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9zd2lwZXIvZXNtL2NvbXBvbmVudHMvY29yZS9jbGFzc2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvc3dpcGVyL2VzbS9jb21wb25lbnRzL2NvcmUvY2xhc3Nlcy9yZW1vdmVDbGFzc2VzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvc3dpcGVyL2VzbS9jb21wb25lbnRzL2NvcmUvY29yZS1jbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3N3aXBlci9lc20vY29tcG9uZW50cy9jb3JlL2RlZmF1bHRzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvc3dpcGVyL2VzbS9jb21wb25lbnRzL2NvcmUvZXZlbnRzLWVtaXR0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9zd2lwZXIvZXNtL2NvbXBvbmVudHMvY29yZS9ldmVudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9zd2lwZXIvZXNtL2NvbXBvbmVudHMvY29yZS9ldmVudHMvb25DbGljay5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3N3aXBlci9lc20vY29tcG9uZW50cy9jb3JlL2V2ZW50cy9vblJlc2l6ZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3N3aXBlci9lc20vY29tcG9uZW50cy9jb3JlL2V2ZW50cy9vblNjcm9sbC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3N3aXBlci9lc20vY29tcG9uZW50cy9jb3JlL2V2ZW50cy9vblRvdWNoRW5kLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvc3dpcGVyL2VzbS9jb21wb25lbnRzL2NvcmUvZXZlbnRzL29uVG91Y2hNb3ZlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvc3dpcGVyL2VzbS9jb21wb25lbnRzL2NvcmUvZXZlbnRzL29uVG91Y2hTdGFydC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3N3aXBlci9lc20vY29tcG9uZW50cy9jb3JlL2dyYWItY3Vyc29yL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvc3dpcGVyL2VzbS9jb21wb25lbnRzL2NvcmUvZ3JhYi1jdXJzb3Ivc2V0R3JhYkN1cnNvci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3N3aXBlci9lc20vY29tcG9uZW50cy9jb3JlL2dyYWItY3Vyc29yL3Vuc2V0R3JhYkN1cnNvci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3N3aXBlci9lc20vY29tcG9uZW50cy9jb3JlL2ltYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3N3aXBlci9lc20vY29tcG9uZW50cy9jb3JlL2ltYWdlcy9sb2FkSW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9zd2lwZXIvZXNtL2NvbXBvbmVudHMvY29yZS9pbWFnZXMvcHJlbG9hZEltYWdlcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3N3aXBlci9lc20vY29tcG9uZW50cy9jb3JlL2xvb3AvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9zd2lwZXIvZXNtL2NvbXBvbmVudHMvY29yZS9sb29wL2xvb3BDcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9zd2lwZXIvZXNtL2NvbXBvbmVudHMvY29yZS9sb29wL2xvb3BEZXN0cm95LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvc3dpcGVyL2VzbS9jb21wb25lbnRzL2NvcmUvbG9vcC9sb29wRml4LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvc3dpcGVyL2VzbS9jb21wb25lbnRzL2NvcmUvbWFuaXB1bGF0aW9uL2FkZFNsaWRlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvc3dpcGVyL2VzbS9jb21wb25lbnRzL2NvcmUvbWFuaXB1bGF0aW9uL2FwcGVuZFNsaWRlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvc3dpcGVyL2VzbS9jb21wb25lbnRzL2NvcmUvbWFuaXB1bGF0aW9uL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvc3dpcGVyL2VzbS9jb21wb25lbnRzL2NvcmUvbWFuaXB1bGF0aW9uL3ByZXBlbmRTbGlkZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3N3aXBlci9lc20vY29tcG9uZW50cy9jb3JlL21hbmlwdWxhdGlvbi9yZW1vdmVBbGxTbGlkZXMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9zd2lwZXIvZXNtL2NvbXBvbmVudHMvY29yZS9tYW5pcHVsYXRpb24vcmVtb3ZlU2xpZGUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9zd2lwZXIvZXNtL2NvbXBvbmVudHMvY29yZS9tb2R1bGFyLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvc3dpcGVyL2VzbS9jb21wb25lbnRzL2NvcmUvc2xpZGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9zd2lwZXIvZXNtL2NvbXBvbmVudHMvY29yZS9zbGlkZS9zbGlkZU5leHQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9zd2lwZXIvZXNtL2NvbXBvbmVudHMvY29yZS9zbGlkZS9zbGlkZVByZXYuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9zd2lwZXIvZXNtL2NvbXBvbmVudHMvY29yZS9zbGlkZS9zbGlkZVJlc2V0LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvc3dpcGVyL2VzbS9jb21wb25lbnRzL2NvcmUvc2xpZGUvc2xpZGVUby5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3N3aXBlci9lc20vY29tcG9uZW50cy9jb3JlL3NsaWRlL3NsaWRlVG9DbGlja2VkU2xpZGUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9zd2lwZXIvZXNtL2NvbXBvbmVudHMvY29yZS9zbGlkZS9zbGlkZVRvQ2xvc2VzdC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3N3aXBlci9lc20vY29tcG9uZW50cy9jb3JlL3NsaWRlL3NsaWRlVG9Mb29wLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvc3dpcGVyL2VzbS9jb21wb25lbnRzL2NvcmUvdHJhbnNpdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3N3aXBlci9lc20vY29tcG9uZW50cy9jb3JlL3RyYW5zaXRpb24vc2V0VHJhbnNpdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3N3aXBlci9lc20vY29tcG9uZW50cy9jb3JlL3RyYW5zaXRpb24vdHJhbnNpdGlvbkVuZC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3N3aXBlci9lc20vY29tcG9uZW50cy9jb3JlL3RyYW5zaXRpb24vdHJhbnNpdGlvblN0YXJ0LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvc3dpcGVyL2VzbS9jb21wb25lbnRzL2NvcmUvdHJhbnNsYXRlL2dldFRyYW5zbGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3N3aXBlci9lc20vY29tcG9uZW50cy9jb3JlL3RyYW5zbGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3N3aXBlci9lc20vY29tcG9uZW50cy9jb3JlL3RyYW5zbGF0ZS9tYXhUcmFuc2xhdGUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9zd2lwZXIvZXNtL2NvbXBvbmVudHMvY29yZS90cmFuc2xhdGUvbWluVHJhbnNsYXRlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvc3dpcGVyL2VzbS9jb21wb25lbnRzL2NvcmUvdHJhbnNsYXRlL3NldFRyYW5zbGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3N3aXBlci9lc20vY29tcG9uZW50cy9jb3JlL3RyYW5zbGF0ZS90cmFuc2xhdGVUby5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3N3aXBlci9lc20vY29tcG9uZW50cy9jb3JlL3VwZGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3N3aXBlci9lc20vY29tcG9uZW50cy9jb3JlL3VwZGF0ZS91cGRhdGVBY3RpdmVJbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3N3aXBlci9lc20vY29tcG9uZW50cy9jb3JlL3VwZGF0ZS91cGRhdGVBdXRvSGVpZ2h0LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvc3dpcGVyL2VzbS9jb21wb25lbnRzL2NvcmUvdXBkYXRlL3VwZGF0ZUNsaWNrZWRTbGlkZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3N3aXBlci9lc20vY29tcG9uZW50cy9jb3JlL3VwZGF0ZS91cGRhdGVQcm9ncmVzcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3N3aXBlci9lc20vY29tcG9uZW50cy9jb3JlL3VwZGF0ZS91cGRhdGVTaXplLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvc3dpcGVyL2VzbS9jb21wb25lbnRzL2NvcmUvdXBkYXRlL3VwZGF0ZVNsaWRlcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3N3aXBlci9lc20vY29tcG9uZW50cy9jb3JlL3VwZGF0ZS91cGRhdGVTbGlkZXNDbGFzc2VzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvc3dpcGVyL2VzbS9jb21wb25lbnRzL2NvcmUvdXBkYXRlL3VwZGF0ZVNsaWRlc09mZnNldC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3N3aXBlci9lc20vY29tcG9uZW50cy9jb3JlL3VwZGF0ZS91cGRhdGVTbGlkZXNQcm9ncmVzcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3N3aXBlci9lc20vbW9kdWxlcy9vYnNlcnZlci9vYnNlcnZlci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3N3aXBlci9lc20vbW9kdWxlcy9yZXNpemUvcmVzaXplLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvc3dpcGVyL2VzbS91dGlscy9kb20uanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9zd2lwZXIvZXNtL3V0aWxzL2dldC1icm93c2VyLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvc3dpcGVyL2VzbS91dGlscy9nZXQtZGV2aWNlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvc3dpcGVyL2VzbS91dGlscy9nZXQtc3VwcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3N3aXBlci9lc20vdXRpbHMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vanMvYXBwLmpzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovLy8uL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogRG9tNyAzLjAuMFxuICogTWluaW1hbGlzdGljIEphdmFTY3JpcHQgbGlicmFyeSBmb3IgRE9NIG1hbmlwdWxhdGlvbiwgd2l0aCBhIGpRdWVyeS1jb21wYXRpYmxlIEFQSVxuICogaHR0cHM6Ly9mcmFtZXdvcms3LmlvL2RvY3MvZG9tNy5odG1sXG4gKlxuICogQ29weXJpZ2h0IDIwMjAsIFZsYWRpbWlyIEtoYXJsYW1waWRpXG4gKlxuICogTGljZW5zZWQgdW5kZXIgTUlUXG4gKlxuICogUmVsZWFzZWQgb246IE5vdmVtYmVyIDksIDIwMjBcbiAqL1xuaW1wb3J0IHsgZ2V0V2luZG93LCBnZXREb2N1bWVudCB9IGZyb20gJ3Nzci13aW5kb3cnO1xuXG5mdW5jdGlvbiBfaW5oZXJpdHNMb29zZShzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MucHJvdG90eXBlKTtcbiAgc3ViQ2xhc3MucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gc3ViQ2xhc3M7XG4gIHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7XG59XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gIF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgfTtcbiAgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTtcbn1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9O1xuXG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7XG4gIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTtcbiAgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTtcbiAgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTtcblxuICB0cnkge1xuICAgIERhdGUucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoRGF0ZSwgW10sIGZ1bmN0aW9uICgpIHt9KSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NvbnN0cnVjdChQYXJlbnQsIGFyZ3MsIENsYXNzKSB7XG4gIGlmIChfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkpIHtcbiAgICBfY29uc3RydWN0ID0gUmVmbGVjdC5jb25zdHJ1Y3Q7XG4gIH0gZWxzZSB7XG4gICAgX2NvbnN0cnVjdCA9IGZ1bmN0aW9uIF9jb25zdHJ1Y3QoUGFyZW50LCBhcmdzLCBDbGFzcykge1xuICAgICAgdmFyIGEgPSBbbnVsbF07XG4gICAgICBhLnB1c2guYXBwbHkoYSwgYXJncyk7XG4gICAgICB2YXIgQ29uc3RydWN0b3IgPSBGdW5jdGlvbi5iaW5kLmFwcGx5KFBhcmVudCwgYSk7XG4gICAgICB2YXIgaW5zdGFuY2UgPSBuZXcgQ29uc3RydWN0b3IoKTtcbiAgICAgIGlmIChDbGFzcykgX3NldFByb3RvdHlwZU9mKGluc3RhbmNlLCBDbGFzcy5wcm90b3R5cGUpO1xuICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX2NvbnN0cnVjdC5hcHBseShudWxsLCBhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVGdW5jdGlvbihmbikge1xuICByZXR1cm4gRnVuY3Rpb24udG9TdHJpbmcuY2FsbChmbikuaW5kZXhPZihcIltuYXRpdmUgY29kZV1cIikgIT09IC0xO1xufVxuXG5mdW5jdGlvbiBfd3JhcE5hdGl2ZVN1cGVyKENsYXNzKSB7XG4gIHZhciBfY2FjaGUgPSB0eXBlb2YgTWFwID09PSBcImZ1bmN0aW9uXCIgPyBuZXcgTWFwKCkgOiB1bmRlZmluZWQ7XG5cbiAgX3dyYXBOYXRpdmVTdXBlciA9IGZ1bmN0aW9uIF93cmFwTmF0aXZlU3VwZXIoQ2xhc3MpIHtcbiAgICBpZiAoQ2xhc3MgPT09IG51bGwgfHwgIV9pc05hdGl2ZUZ1bmN0aW9uKENsYXNzKSkgcmV0dXJuIENsYXNzO1xuXG4gICAgaWYgKHR5cGVvZiBDbGFzcyAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBfY2FjaGUgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIGlmIChfY2FjaGUuaGFzKENsYXNzKSkgcmV0dXJuIF9jYWNoZS5nZXQoQ2xhc3MpO1xuXG4gICAgICBfY2FjaGUuc2V0KENsYXNzLCBXcmFwcGVyKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBXcmFwcGVyKCkge1xuICAgICAgcmV0dXJuIF9jb25zdHJ1Y3QoQ2xhc3MsIGFyZ3VtZW50cywgX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yKTtcbiAgICB9XG5cbiAgICBXcmFwcGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgICB2YWx1ZTogV3JhcHBlcixcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gX3NldFByb3RvdHlwZU9mKFdyYXBwZXIsIENsYXNzKTtcbiAgfTtcblxuICByZXR1cm4gX3dyYXBOYXRpdmVTdXBlcihDbGFzcyk7XG59XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIHNlbGY7XG59XG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXByb3RvICovXG5mdW5jdGlvbiBtYWtlUmVhY3RpdmUob2JqKSB7XG4gIHZhciBwcm90byA9IG9iai5fX3Byb3RvX187XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosICdfX3Byb3RvX18nLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gcHJvdG87XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWx1ZSkge1xuICAgICAgcHJvdG8uX19wcm90b19fID0gdmFsdWU7XG4gICAgfVxuICB9KTtcbn1cblxudmFyIERvbTcgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9BcnJheSkge1xuICBfaW5oZXJpdHNMb29zZShEb203LCBfQXJyYXkpO1xuXG4gIGZ1bmN0aW9uIERvbTcoaXRlbXMpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfdGhpcyA9IF9BcnJheS5jYWxsLmFwcGx5KF9BcnJheSwgW3RoaXNdLmNvbmNhdChpdGVtcykpIHx8IHRoaXM7XG4gICAgbWFrZVJlYWN0aXZlKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICByZXR1cm4gRG9tNztcbn0oIC8qI19fUFVSRV9fKi9fd3JhcE5hdGl2ZVN1cGVyKEFycmF5KSk7XG5cbmZ1bmN0aW9uIGFycmF5RmxhdChhcnIpIHtcbiAgaWYgKGFyciA9PT0gdm9pZCAwKSB7XG4gICAgYXJyID0gW107XG4gIH1cblxuICB2YXIgcmVzID0gW107XG4gIGFyci5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGVsKSkge1xuICAgICAgcmVzLnB1c2guYXBwbHkocmVzLCBhcnJheUZsYXQoZWwpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzLnB1c2goZWwpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiByZXM7XG59XG5mdW5jdGlvbiBhcnJheUZpbHRlcihhcnIsIGNhbGxiYWNrKSB7XG4gIHJldHVybiBBcnJheS5wcm90b3R5cGUuZmlsdGVyLmNhbGwoYXJyLCBjYWxsYmFjayk7XG59XG5mdW5jdGlvbiBhcnJheVVuaXF1ZShhcnIpIHtcbiAgdmFyIHVuaXF1ZUFycmF5ID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAodW5pcXVlQXJyYXkuaW5kZXhPZihhcnJbaV0pID09PSAtMSkgdW5pcXVlQXJyYXkucHVzaChhcnJbaV0pO1xuICB9XG5cbiAgcmV0dXJuIHVuaXF1ZUFycmF5O1xufVxuZnVuY3Rpb24gdG9DYW1lbENhc2Uoc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmcudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC8tKC4pL2csIGZ1bmN0aW9uIChtYXRjaCwgZ3JvdXApIHtcbiAgICByZXR1cm4gZ3JvdXAudG9VcHBlckNhc2UoKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHFzYShzZWxlY3RvciwgY29udGV4dCkge1xuICBpZiAodHlwZW9mIHNlbGVjdG9yICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBbc2VsZWN0b3JdO1xuICB9XG5cbiAgdmFyIGEgPSBbXTtcbiAgdmFyIHJlcyA9IGNvbnRleHQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBhLnB1c2gocmVzW2ldKTtcbiAgfVxuXG4gIHJldHVybiBhO1xufVxuXG5mdW5jdGlvbiAkKHNlbGVjdG9yLCBjb250ZXh0KSB7XG4gIHZhciB3aW5kb3cgPSBnZXRXaW5kb3coKTtcbiAgdmFyIGRvY3VtZW50ID0gZ2V0RG9jdW1lbnQoKTtcbiAgdmFyIGFyciA9IFtdO1xuXG4gIGlmICghY29udGV4dCAmJiBzZWxlY3RvciBpbnN0YW5jZW9mIERvbTcpIHtcbiAgICByZXR1cm4gc2VsZWN0b3I7XG4gIH1cblxuICBpZiAoIXNlbGVjdG9yKSB7XG4gICAgcmV0dXJuIG5ldyBEb203KGFycik7XG4gIH1cblxuICBpZiAodHlwZW9mIHNlbGVjdG9yID09PSAnc3RyaW5nJykge1xuICAgIHZhciBodG1sID0gc2VsZWN0b3IudHJpbSgpO1xuXG4gICAgaWYgKGh0bWwuaW5kZXhPZignPCcpID49IDAgJiYgaHRtbC5pbmRleE9mKCc+JykgPj0gMCkge1xuICAgICAgdmFyIHRvQ3JlYXRlID0gJ2Rpdic7XG4gICAgICBpZiAoaHRtbC5pbmRleE9mKCc8bGknKSA9PT0gMCkgdG9DcmVhdGUgPSAndWwnO1xuICAgICAgaWYgKGh0bWwuaW5kZXhPZignPHRyJykgPT09IDApIHRvQ3JlYXRlID0gJ3Rib2R5JztcbiAgICAgIGlmIChodG1sLmluZGV4T2YoJzx0ZCcpID09PSAwIHx8IGh0bWwuaW5kZXhPZignPHRoJykgPT09IDApIHRvQ3JlYXRlID0gJ3RyJztcbiAgICAgIGlmIChodG1sLmluZGV4T2YoJzx0Ym9keScpID09PSAwKSB0b0NyZWF0ZSA9ICd0YWJsZSc7XG4gICAgICBpZiAoaHRtbC5pbmRleE9mKCc8b3B0aW9uJykgPT09IDApIHRvQ3JlYXRlID0gJ3NlbGVjdCc7XG4gICAgICB2YXIgdGVtcFBhcmVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodG9DcmVhdGUpO1xuICAgICAgdGVtcFBhcmVudC5pbm5lckhUTUwgPSBodG1sO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRlbXBQYXJlbnQuY2hpbGROb2Rlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBhcnIucHVzaCh0ZW1wUGFyZW50LmNoaWxkTm9kZXNbaV0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBhcnIgPSBxc2Eoc2VsZWN0b3IudHJpbSgpLCBjb250ZXh0IHx8IGRvY3VtZW50KTtcbiAgICB9IC8vIGFyciA9IHFzYShzZWxlY3RvciwgZG9jdW1lbnQpO1xuXG4gIH0gZWxzZSBpZiAoc2VsZWN0b3Iubm9kZVR5cGUgfHwgc2VsZWN0b3IgPT09IHdpbmRvdyB8fCBzZWxlY3RvciA9PT0gZG9jdW1lbnQpIHtcbiAgICBhcnIucHVzaChzZWxlY3Rvcik7XG4gIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShzZWxlY3RvcikpIHtcbiAgICBpZiAoc2VsZWN0b3IgaW5zdGFuY2VvZiBEb203KSByZXR1cm4gc2VsZWN0b3I7XG4gICAgYXJyID0gc2VsZWN0b3I7XG4gIH1cblxuICByZXR1cm4gbmV3IERvbTcoYXJyYXlVbmlxdWUoYXJyKSk7XG59XG5cbiQuZm4gPSBEb203LnByb3RvdHlwZTtcblxuZnVuY3Rpb24gYWRkQ2xhc3MoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBjbGFzc2VzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGNsYXNzZXNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICB2YXIgY2xhc3NOYW1lcyA9IGFycmF5RmxhdChjbGFzc2VzLm1hcChmdW5jdGlvbiAoYykge1xuICAgIHJldHVybiBjLnNwbGl0KCcgJyk7XG4gIH0pKTtcbiAgdGhpcy5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgIHZhciBfZWwkY2xhc3NMaXN0O1xuXG4gICAgKF9lbCRjbGFzc0xpc3QgPSBlbC5jbGFzc0xpc3QpLmFkZC5hcHBseShfZWwkY2xhc3NMaXN0LCBjbGFzc05hbWVzKTtcbiAgfSk7XG4gIHJldHVybiB0aGlzO1xufVxuXG5mdW5jdGlvbiByZW1vdmVDbGFzcygpIHtcbiAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBjbGFzc2VzID0gbmV3IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgY2xhc3Nlc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICB9XG5cbiAgdmFyIGNsYXNzTmFtZXMgPSBhcnJheUZsYXQoY2xhc3Nlcy5tYXAoZnVuY3Rpb24gKGMpIHtcbiAgICByZXR1cm4gYy5zcGxpdCgnICcpO1xuICB9KSk7XG4gIHRoaXMuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICB2YXIgX2VsJGNsYXNzTGlzdDI7XG5cbiAgICAoX2VsJGNsYXNzTGlzdDIgPSBlbC5jbGFzc0xpc3QpLnJlbW92ZS5hcHBseShfZWwkY2xhc3NMaXN0MiwgY2xhc3NOYW1lcyk7XG4gIH0pO1xuICByZXR1cm4gdGhpcztcbn1cblxuZnVuY3Rpb24gdG9nZ2xlQ2xhc3MoKSB7XG4gIGZvciAodmFyIF9sZW4zID0gYXJndW1lbnRzLmxlbmd0aCwgY2xhc3NlcyA9IG5ldyBBcnJheShfbGVuMyksIF9rZXkzID0gMDsgX2tleTMgPCBfbGVuMzsgX2tleTMrKykge1xuICAgIGNsYXNzZXNbX2tleTNdID0gYXJndW1lbnRzW19rZXkzXTtcbiAgfVxuXG4gIHZhciBjbGFzc05hbWVzID0gYXJyYXlGbGF0KGNsYXNzZXMubWFwKGZ1bmN0aW9uIChjKSB7XG4gICAgcmV0dXJuIGMuc3BsaXQoJyAnKTtcbiAgfSkpO1xuICB0aGlzLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgY2xhc3NOYW1lcy5mb3JFYWNoKGZ1bmN0aW9uIChjbGFzc05hbWUpIHtcbiAgICAgIGVsLmNsYXNzTGlzdC50b2dnbGUoY2xhc3NOYW1lKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGhhc0NsYXNzKCkge1xuICBmb3IgKHZhciBfbGVuNCA9IGFyZ3VtZW50cy5sZW5ndGgsIGNsYXNzZXMgPSBuZXcgQXJyYXkoX2xlbjQpLCBfa2V5NCA9IDA7IF9rZXk0IDwgX2xlbjQ7IF9rZXk0KyspIHtcbiAgICBjbGFzc2VzW19rZXk0XSA9IGFyZ3VtZW50c1tfa2V5NF07XG4gIH1cblxuICB2YXIgY2xhc3NOYW1lcyA9IGFycmF5RmxhdChjbGFzc2VzLm1hcChmdW5jdGlvbiAoYykge1xuICAgIHJldHVybiBjLnNwbGl0KCcgJyk7XG4gIH0pKTtcbiAgcmV0dXJuIGFycmF5RmlsdGVyKHRoaXMsIGZ1bmN0aW9uIChlbCkge1xuICAgIHJldHVybiBjbGFzc05hbWVzLmZpbHRlcihmdW5jdGlvbiAoY2xhc3NOYW1lKSB7XG4gICAgICByZXR1cm4gZWwuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSk7XG4gICAgfSkubGVuZ3RoID4gMDtcbiAgfSkubGVuZ3RoID4gMDtcbn1cblxuZnVuY3Rpb24gYXR0cihhdHRycywgdmFsdWUpIHtcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEgJiYgdHlwZW9mIGF0dHJzID09PSAnc3RyaW5nJykge1xuICAgIC8vIEdldCBhdHRyXG4gICAgaWYgKHRoaXNbMF0pIHJldHVybiB0aGlzWzBdLmdldEF0dHJpYnV0ZShhdHRycyk7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfSAvLyBTZXQgYXR0cnNcblxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAyKSB7XG4gICAgICAvLyBTdHJpbmdcbiAgICAgIHRoaXNbaV0uc2V0QXR0cmlidXRlKGF0dHJzLCB2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIE9iamVjdFxuICAgICAgZm9yICh2YXIgYXR0ck5hbWUgaW4gYXR0cnMpIHtcbiAgICAgICAgdGhpc1tpXVthdHRyTmFtZV0gPSBhdHRyc1thdHRyTmFtZV07XG4gICAgICAgIHRoaXNbaV0uc2V0QXR0cmlidXRlKGF0dHJOYW1lLCBhdHRyc1thdHRyTmFtZV0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufVxuXG5mdW5jdGlvbiByZW1vdmVBdHRyKGF0dHIpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgdGhpc1tpXS5yZW1vdmVBdHRyaWJ1dGUoYXR0cik7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn1cblxuZnVuY3Rpb24gcHJvcChwcm9wcywgdmFsdWUpIHtcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEgJiYgdHlwZW9mIHByb3BzID09PSAnc3RyaW5nJykge1xuICAgIC8vIEdldCBwcm9wXG4gICAgaWYgKHRoaXNbMF0pIHJldHVybiB0aGlzWzBdW3Byb3BzXTtcbiAgfSBlbHNlIHtcbiAgICAvLyBTZXQgcHJvcHNcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAyKSB7XG4gICAgICAgIC8vIFN0cmluZ1xuICAgICAgICB0aGlzW2ldW3Byb3BzXSA9IHZhbHVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gT2JqZWN0XG4gICAgICAgIGZvciAodmFyIHByb3BOYW1lIGluIHByb3BzKSB7XG4gICAgICAgICAgdGhpc1tpXVtwcm9wTmFtZV0gPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufVxuXG5mdW5jdGlvbiBkYXRhKGtleSwgdmFsdWUpIHtcbiAgdmFyIGVsO1xuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgZWwgPSB0aGlzWzBdO1xuICAgIGlmICghZWwpIHJldHVybiB1bmRlZmluZWQ7IC8vIEdldCB2YWx1ZVxuXG4gICAgaWYgKGVsLmRvbTdFbGVtZW50RGF0YVN0b3JhZ2UgJiYga2V5IGluIGVsLmRvbTdFbGVtZW50RGF0YVN0b3JhZ2UpIHtcbiAgICAgIHJldHVybiBlbC5kb203RWxlbWVudERhdGFTdG9yYWdlW2tleV07XG4gICAgfVxuXG4gICAgdmFyIGRhdGFLZXkgPSBlbC5nZXRBdHRyaWJ1dGUoXCJkYXRhLVwiICsga2V5KTtcblxuICAgIGlmIChkYXRhS2V5KSB7XG4gICAgICByZXR1cm4gZGF0YUtleTtcbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9IC8vIFNldCB2YWx1ZVxuXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgZWwgPSB0aGlzW2ldO1xuICAgIGlmICghZWwuZG9tN0VsZW1lbnREYXRhU3RvcmFnZSkgZWwuZG9tN0VsZW1lbnREYXRhU3RvcmFnZSA9IHt9O1xuICAgIGVsLmRvbTdFbGVtZW50RGF0YVN0b3JhZ2Vba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZURhdGEoa2V5KSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIHZhciBlbCA9IHRoaXNbaV07XG5cbiAgICBpZiAoZWwuZG9tN0VsZW1lbnREYXRhU3RvcmFnZSAmJiBlbC5kb203RWxlbWVudERhdGFTdG9yYWdlW2tleV0pIHtcbiAgICAgIGVsLmRvbTdFbGVtZW50RGF0YVN0b3JhZ2Vba2V5XSA9IG51bGw7XG4gICAgICBkZWxldGUgZWwuZG9tN0VsZW1lbnREYXRhU3RvcmFnZVtrZXldO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBkYXRhc2V0KCkge1xuICB2YXIgZWwgPSB0aGlzWzBdO1xuICBpZiAoIWVsKSByZXR1cm4gdW5kZWZpbmVkO1xuICB2YXIgZGF0YXNldCA9IHt9OyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cbiAgaWYgKGVsLmRhdGFzZXQpIHtcbiAgICBmb3IgKHZhciBkYXRhS2V5IGluIGVsLmRhdGFzZXQpIHtcbiAgICAgIGRhdGFzZXRbZGF0YUtleV0gPSBlbC5kYXRhc2V0W2RhdGFLZXldO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVsLmF0dHJpYnV0ZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIHZhciBfYXR0ciA9IGVsLmF0dHJpYnV0ZXNbaV07XG5cbiAgICAgIGlmIChfYXR0ci5uYW1lLmluZGV4T2YoJ2RhdGEtJykgPj0gMCkge1xuICAgICAgICBkYXRhc2V0W3RvQ2FtZWxDYXNlKF9hdHRyLm5hbWUuc3BsaXQoJ2RhdGEtJylbMV0pXSA9IF9hdHRyLnZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZvciAodmFyIGtleSBpbiBkYXRhc2V0KSB7XG4gICAgaWYgKGRhdGFzZXRba2V5XSA9PT0gJ2ZhbHNlJykgZGF0YXNldFtrZXldID0gZmFsc2U7ZWxzZSBpZiAoZGF0YXNldFtrZXldID09PSAndHJ1ZScpIGRhdGFzZXRba2V5XSA9IHRydWU7ZWxzZSBpZiAocGFyc2VGbG9hdChkYXRhc2V0W2tleV0pID09PSBkYXRhc2V0W2tleV0gKiAxKSBkYXRhc2V0W2tleV0gKj0gMTtcbiAgfVxuXG4gIHJldHVybiBkYXRhc2V0O1xufVxuXG5mdW5jdGlvbiB2YWwodmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvLyBnZXQgdmFsdWVcbiAgICB2YXIgZWwgPSB0aGlzWzBdO1xuICAgIGlmICghZWwpIHJldHVybiB1bmRlZmluZWQ7XG5cbiAgICBpZiAoZWwubXVsdGlwbGUgJiYgZWwubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ3NlbGVjdCcpIHtcbiAgICAgIHZhciB2YWx1ZXMgPSBbXTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbC5zZWxlY3RlZE9wdGlvbnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgdmFsdWVzLnB1c2goZWwuc2VsZWN0ZWRPcHRpb25zW2ldLnZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHZhbHVlcztcbiAgICB9XG5cbiAgICByZXR1cm4gZWwudmFsdWU7XG4gIH0gLy8gc2V0IHZhbHVlXG5cblxuICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgdGhpcy5sZW5ndGg7IF9pICs9IDEpIHtcbiAgICB2YXIgX2VsID0gdGhpc1tfaV07XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgX2VsLm11bHRpcGxlICYmIF9lbC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnc2VsZWN0Jykge1xuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBfZWwub3B0aW9ucy5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgICBfZWwub3B0aW9uc1tqXS5zZWxlY3RlZCA9IHZhbHVlLmluZGV4T2YoX2VsLm9wdGlvbnNbal0udmFsdWUpID49IDA7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIF9lbC52YWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufVxuXG5mdW5jdGlvbiB2YWx1ZSh2YWx1ZSkge1xuICByZXR1cm4gdGhpcy52YWwodmFsdWUpO1xufVxuXG5mdW5jdGlvbiB0cmFuc2Zvcm0odHJhbnNmb3JtKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIHRoaXNbaV0uc3R5bGUudHJhbnNmb3JtID0gdHJhbnNmb3JtO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59XG5cbmZ1bmN0aW9uIHRyYW5zaXRpb24oZHVyYXRpb24pIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgdGhpc1tpXS5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSB0eXBlb2YgZHVyYXRpb24gIT09ICdzdHJpbmcnID8gZHVyYXRpb24gKyBcIm1zXCIgOiBkdXJhdGlvbjtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufVxuXG5mdW5jdGlvbiBvbigpIHtcbiAgZm9yICh2YXIgX2xlbjUgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW41KSwgX2tleTUgPSAwOyBfa2V5NSA8IF9sZW41OyBfa2V5NSsrKSB7XG4gICAgYXJnc1tfa2V5NV0gPSBhcmd1bWVudHNbX2tleTVdO1xuICB9XG5cbiAgdmFyIGV2ZW50VHlwZSA9IGFyZ3NbMF0sXG4gICAgICB0YXJnZXRTZWxlY3RvciA9IGFyZ3NbMV0sXG4gICAgICBsaXN0ZW5lciA9IGFyZ3NbMl0sXG4gICAgICBjYXB0dXJlID0gYXJnc1szXTtcblxuICBpZiAodHlwZW9mIGFyZ3NbMV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICBldmVudFR5cGUgPSBhcmdzWzBdO1xuICAgIGxpc3RlbmVyID0gYXJnc1sxXTtcbiAgICBjYXB0dXJlID0gYXJnc1syXTtcbiAgICB0YXJnZXRTZWxlY3RvciA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGlmICghY2FwdHVyZSkgY2FwdHVyZSA9IGZhbHNlO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZUxpdmVFdmVudChlKSB7XG4gICAgdmFyIHRhcmdldCA9IGUudGFyZ2V0O1xuICAgIGlmICghdGFyZ2V0KSByZXR1cm47XG4gICAgdmFyIGV2ZW50RGF0YSA9IGUudGFyZ2V0LmRvbTdFdmVudERhdGEgfHwgW107XG5cbiAgICBpZiAoZXZlbnREYXRhLmluZGV4T2YoZSkgPCAwKSB7XG4gICAgICBldmVudERhdGEudW5zaGlmdChlKTtcbiAgICB9XG5cbiAgICBpZiAoJCh0YXJnZXQpLmlzKHRhcmdldFNlbGVjdG9yKSkgbGlzdGVuZXIuYXBwbHkodGFyZ2V0LCBldmVudERhdGEpO2Vsc2Uge1xuICAgICAgdmFyIF9wYXJlbnRzID0gJCh0YXJnZXQpLnBhcmVudHMoKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXG5cbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgX3BhcmVudHMubGVuZ3RoOyBrICs9IDEpIHtcbiAgICAgICAgaWYgKCQoX3BhcmVudHNba10pLmlzKHRhcmdldFNlbGVjdG9yKSkgbGlzdGVuZXIuYXBwbHkoX3BhcmVudHNba10sIGV2ZW50RGF0YSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlRXZlbnQoZSkge1xuICAgIHZhciBldmVudERhdGEgPSBlICYmIGUudGFyZ2V0ID8gZS50YXJnZXQuZG9tN0V2ZW50RGF0YSB8fCBbXSA6IFtdO1xuXG4gICAgaWYgKGV2ZW50RGF0YS5pbmRleE9mKGUpIDwgMCkge1xuICAgICAgZXZlbnREYXRhLnVuc2hpZnQoZSk7XG4gICAgfVxuXG4gICAgbGlzdGVuZXIuYXBwbHkodGhpcywgZXZlbnREYXRhKTtcbiAgfVxuXG4gIHZhciBldmVudHMgPSBldmVudFR5cGUuc3BsaXQoJyAnKTtcbiAgdmFyIGo7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgdmFyIGVsID0gdGhpc1tpXTtcblxuICAgIGlmICghdGFyZ2V0U2VsZWN0b3IpIHtcbiAgICAgIGZvciAoaiA9IDA7IGogPCBldmVudHMubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgICAgdmFyIGV2ZW50ID0gZXZlbnRzW2pdO1xuICAgICAgICBpZiAoIWVsLmRvbTdMaXN0ZW5lcnMpIGVsLmRvbTdMaXN0ZW5lcnMgPSB7fTtcbiAgICAgICAgaWYgKCFlbC5kb203TGlzdGVuZXJzW2V2ZW50XSkgZWwuZG9tN0xpc3RlbmVyc1tldmVudF0gPSBbXTtcbiAgICAgICAgZWwuZG9tN0xpc3RlbmVyc1tldmVudF0ucHVzaCh7XG4gICAgICAgICAgbGlzdGVuZXI6IGxpc3RlbmVyLFxuICAgICAgICAgIHByb3h5TGlzdGVuZXI6IGhhbmRsZUV2ZW50XG4gICAgICAgIH0pO1xuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVFdmVudCwgY2FwdHVyZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIExpdmUgZXZlbnRzXG4gICAgICBmb3IgKGogPSAwOyBqIDwgZXZlbnRzLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgIHZhciBfZXZlbnQgPSBldmVudHNbal07XG4gICAgICAgIGlmICghZWwuZG9tN0xpdmVMaXN0ZW5lcnMpIGVsLmRvbTdMaXZlTGlzdGVuZXJzID0ge307XG4gICAgICAgIGlmICghZWwuZG9tN0xpdmVMaXN0ZW5lcnNbX2V2ZW50XSkgZWwuZG9tN0xpdmVMaXN0ZW5lcnNbX2V2ZW50XSA9IFtdO1xuXG4gICAgICAgIGVsLmRvbTdMaXZlTGlzdGVuZXJzW19ldmVudF0ucHVzaCh7XG4gICAgICAgICAgbGlzdGVuZXI6IGxpc3RlbmVyLFxuICAgICAgICAgIHByb3h5TGlzdGVuZXI6IGhhbmRsZUxpdmVFdmVudFxuICAgICAgICB9KTtcblxuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKF9ldmVudCwgaGFuZGxlTGl2ZUV2ZW50LCBjYXB0dXJlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn1cblxuZnVuY3Rpb24gb2ZmKCkge1xuICBmb3IgKHZhciBfbGVuNiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjYpLCBfa2V5NiA9IDA7IF9rZXk2IDwgX2xlbjY7IF9rZXk2KyspIHtcbiAgICBhcmdzW19rZXk2XSA9IGFyZ3VtZW50c1tfa2V5Nl07XG4gIH1cblxuICB2YXIgZXZlbnRUeXBlID0gYXJnc1swXSxcbiAgICAgIHRhcmdldFNlbGVjdG9yID0gYXJnc1sxXSxcbiAgICAgIGxpc3RlbmVyID0gYXJnc1syXSxcbiAgICAgIGNhcHR1cmUgPSBhcmdzWzNdO1xuXG4gIGlmICh0eXBlb2YgYXJnc1sxXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGV2ZW50VHlwZSA9IGFyZ3NbMF07XG4gICAgbGlzdGVuZXIgPSBhcmdzWzFdO1xuICAgIGNhcHR1cmUgPSBhcmdzWzJdO1xuICAgIHRhcmdldFNlbGVjdG9yID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgaWYgKCFjYXB0dXJlKSBjYXB0dXJlID0gZmFsc2U7XG4gIHZhciBldmVudHMgPSBldmVudFR5cGUuc3BsaXQoJyAnKTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGV2ZW50cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIHZhciBldmVudCA9IGV2ZW50c1tpXTtcblxuICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgdmFyIGVsID0gdGhpc1tqXTtcbiAgICAgIHZhciBoYW5kbGVycyA9IHZvaWQgMDtcblxuICAgICAgaWYgKCF0YXJnZXRTZWxlY3RvciAmJiBlbC5kb203TGlzdGVuZXJzKSB7XG4gICAgICAgIGhhbmRsZXJzID0gZWwuZG9tN0xpc3RlbmVyc1tldmVudF07XG4gICAgICB9IGVsc2UgaWYgKHRhcmdldFNlbGVjdG9yICYmIGVsLmRvbTdMaXZlTGlzdGVuZXJzKSB7XG4gICAgICAgIGhhbmRsZXJzID0gZWwuZG9tN0xpdmVMaXN0ZW5lcnNbZXZlbnRdO1xuICAgICAgfVxuXG4gICAgICBpZiAoaGFuZGxlcnMgJiYgaGFuZGxlcnMubGVuZ3RoKSB7XG4gICAgICAgIGZvciAodmFyIGsgPSBoYW5kbGVycy5sZW5ndGggLSAxOyBrID49IDA7IGsgLT0gMSkge1xuICAgICAgICAgIHZhciBoYW5kbGVyID0gaGFuZGxlcnNba107XG5cbiAgICAgICAgICBpZiAobGlzdGVuZXIgJiYgaGFuZGxlci5saXN0ZW5lciA9PT0gbGlzdGVuZXIpIHtcbiAgICAgICAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIucHJveHlMaXN0ZW5lciwgY2FwdHVyZSk7XG4gICAgICAgICAgICBoYW5kbGVycy5zcGxpY2UoaywgMSk7XG4gICAgICAgICAgfSBlbHNlIGlmIChsaXN0ZW5lciAmJiBoYW5kbGVyLmxpc3RlbmVyICYmIGhhbmRsZXIubGlzdGVuZXIuZG9tN3Byb3h5ICYmIGhhbmRsZXIubGlzdGVuZXIuZG9tN3Byb3h5ID09PSBsaXN0ZW5lcikge1xuICAgICAgICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlci5wcm94eUxpc3RlbmVyLCBjYXB0dXJlKTtcbiAgICAgICAgICAgIGhhbmRsZXJzLnNwbGljZShrLCAxKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKCFsaXN0ZW5lcikge1xuICAgICAgICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlci5wcm94eUxpc3RlbmVyLCBjYXB0dXJlKTtcbiAgICAgICAgICAgIGhhbmRsZXJzLnNwbGljZShrLCAxKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn1cblxuZnVuY3Rpb24gb25jZSgpIHtcbiAgdmFyIGRvbSA9IHRoaXM7XG5cbiAgZm9yICh2YXIgX2xlbjcgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW43KSwgX2tleTcgPSAwOyBfa2V5NyA8IF9sZW43OyBfa2V5NysrKSB7XG4gICAgYXJnc1tfa2V5N10gPSBhcmd1bWVudHNbX2tleTddO1xuICB9XG5cbiAgdmFyIGV2ZW50TmFtZSA9IGFyZ3NbMF0sXG4gICAgICB0YXJnZXRTZWxlY3RvciA9IGFyZ3NbMV0sXG4gICAgICBsaXN0ZW5lciA9IGFyZ3NbMl0sXG4gICAgICBjYXB0dXJlID0gYXJnc1szXTtcblxuICBpZiAodHlwZW9mIGFyZ3NbMV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICBldmVudE5hbWUgPSBhcmdzWzBdO1xuICAgIGxpc3RlbmVyID0gYXJnc1sxXTtcbiAgICBjYXB0dXJlID0gYXJnc1syXTtcbiAgICB0YXJnZXRTZWxlY3RvciA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uY2VIYW5kbGVyKCkge1xuICAgIGZvciAodmFyIF9sZW44ID0gYXJndW1lbnRzLmxlbmd0aCwgZXZlbnRBcmdzID0gbmV3IEFycmF5KF9sZW44KSwgX2tleTggPSAwOyBfa2V5OCA8IF9sZW44OyBfa2V5OCsrKSB7XG4gICAgICBldmVudEFyZ3NbX2tleThdID0gYXJndW1lbnRzW19rZXk4XTtcbiAgICB9XG5cbiAgICBsaXN0ZW5lci5hcHBseSh0aGlzLCBldmVudEFyZ3MpO1xuICAgIGRvbS5vZmYoZXZlbnROYW1lLCB0YXJnZXRTZWxlY3Rvciwgb25jZUhhbmRsZXIsIGNhcHR1cmUpO1xuXG4gICAgaWYgKG9uY2VIYW5kbGVyLmRvbTdwcm94eSkge1xuICAgICAgZGVsZXRlIG9uY2VIYW5kbGVyLmRvbTdwcm94eTtcbiAgICB9XG4gIH1cblxuICBvbmNlSGFuZGxlci5kb203cHJveHkgPSBsaXN0ZW5lcjtcbiAgcmV0dXJuIGRvbS5vbihldmVudE5hbWUsIHRhcmdldFNlbGVjdG9yLCBvbmNlSGFuZGxlciwgY2FwdHVyZSk7XG59XG5cbmZ1bmN0aW9uIHRyaWdnZXIoKSB7XG4gIHZhciB3aW5kb3cgPSBnZXRXaW5kb3coKTtcblxuICBmb3IgKHZhciBfbGVuOSA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjkpLCBfa2V5OSA9IDA7IF9rZXk5IDwgX2xlbjk7IF9rZXk5KyspIHtcbiAgICBhcmdzW19rZXk5XSA9IGFyZ3VtZW50c1tfa2V5OV07XG4gIH1cblxuICB2YXIgZXZlbnRzID0gYXJnc1swXS5zcGxpdCgnICcpO1xuICB2YXIgZXZlbnREYXRhID0gYXJnc1sxXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGV2ZW50cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIHZhciBldmVudCA9IGV2ZW50c1tpXTtcblxuICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgdmFyIGVsID0gdGhpc1tqXTtcblxuICAgICAgaWYgKHdpbmRvdy5DdXN0b21FdmVudCkge1xuICAgICAgICB2YXIgZXZ0ID0gbmV3IHdpbmRvdy5DdXN0b21FdmVudChldmVudCwge1xuICAgICAgICAgIGRldGFpbDogZXZlbnREYXRhLFxuICAgICAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgICAgICAgY2FuY2VsYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgZWwuZG9tN0V2ZW50RGF0YSA9IGFyZ3MuZmlsdGVyKGZ1bmN0aW9uIChkYXRhLCBkYXRhSW5kZXgpIHtcbiAgICAgICAgICByZXR1cm4gZGF0YUluZGV4ID4gMDtcbiAgICAgICAgfSk7XG4gICAgICAgIGVsLmRpc3BhdGNoRXZlbnQoZXZ0KTtcbiAgICAgICAgZWwuZG9tN0V2ZW50RGF0YSA9IFtdO1xuICAgICAgICBkZWxldGUgZWwuZG9tN0V2ZW50RGF0YTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn1cblxuZnVuY3Rpb24gdHJhbnNpdGlvbkVuZChjYWxsYmFjaykge1xuICB2YXIgZG9tID0gdGhpcztcblxuICBmdW5jdGlvbiBmaXJlQ2FsbEJhY2soZSkge1xuICAgIGlmIChlLnRhcmdldCAhPT0gdGhpcykgcmV0dXJuO1xuICAgIGNhbGxiYWNrLmNhbGwodGhpcywgZSk7XG4gICAgZG9tLm9mZigndHJhbnNpdGlvbmVuZCcsIGZpcmVDYWxsQmFjayk7XG4gIH1cblxuICBpZiAoY2FsbGJhY2spIHtcbiAgICBkb20ub24oJ3RyYW5zaXRpb25lbmQnLCBmaXJlQ2FsbEJhY2spO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59XG5cbmZ1bmN0aW9uIGFuaW1hdGlvbkVuZChjYWxsYmFjaykge1xuICB2YXIgZG9tID0gdGhpcztcblxuICBmdW5jdGlvbiBmaXJlQ2FsbEJhY2soZSkge1xuICAgIGlmIChlLnRhcmdldCAhPT0gdGhpcykgcmV0dXJuO1xuICAgIGNhbGxiYWNrLmNhbGwodGhpcywgZSk7XG4gICAgZG9tLm9mZignYW5pbWF0aW9uZW5kJywgZmlyZUNhbGxCYWNrKTtcbiAgfVxuXG4gIGlmIChjYWxsYmFjaykge1xuICAgIGRvbS5vbignYW5pbWF0aW9uZW5kJywgZmlyZUNhbGxCYWNrKTtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufVxuXG5mdW5jdGlvbiB3aWR0aCgpIHtcbiAgdmFyIHdpbmRvdyA9IGdldFdpbmRvdygpO1xuXG4gIGlmICh0aGlzWzBdID09PSB3aW5kb3cpIHtcbiAgICByZXR1cm4gd2luZG93LmlubmVyV2lkdGg7XG4gIH1cblxuICBpZiAodGhpcy5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIHBhcnNlRmxvYXQodGhpcy5jc3MoJ3dpZHRoJykpO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbmZ1bmN0aW9uIG91dGVyV2lkdGgoaW5jbHVkZU1hcmdpbnMpIHtcbiAgaWYgKHRoaXMubGVuZ3RoID4gMCkge1xuICAgIGlmIChpbmNsdWRlTWFyZ2lucykge1xuICAgICAgdmFyIF9zdHlsZXMgPSB0aGlzLnN0eWxlcygpO1xuXG4gICAgICByZXR1cm4gdGhpc1swXS5vZmZzZXRXaWR0aCArIHBhcnNlRmxvYXQoX3N0eWxlcy5nZXRQcm9wZXJ0eVZhbHVlKCdtYXJnaW4tcmlnaHQnKSkgKyBwYXJzZUZsb2F0KF9zdHlsZXMuZ2V0UHJvcGVydHlWYWx1ZSgnbWFyZ2luLWxlZnQnKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXNbMF0ub2Zmc2V0V2lkdGg7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuZnVuY3Rpb24gaGVpZ2h0KCkge1xuICB2YXIgd2luZG93ID0gZ2V0V2luZG93KCk7XG5cbiAgaWYgKHRoaXNbMF0gPT09IHdpbmRvdykge1xuICAgIHJldHVybiB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gIH1cblxuICBpZiAodGhpcy5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIHBhcnNlRmxvYXQodGhpcy5jc3MoJ2hlaWdodCcpKTtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG5mdW5jdGlvbiBvdXRlckhlaWdodChpbmNsdWRlTWFyZ2lucykge1xuICBpZiAodGhpcy5sZW5ndGggPiAwKSB7XG4gICAgaWYgKGluY2x1ZGVNYXJnaW5zKSB7XG4gICAgICB2YXIgX3N0eWxlczIgPSB0aGlzLnN0eWxlcygpO1xuXG4gICAgICByZXR1cm4gdGhpc1swXS5vZmZzZXRIZWlnaHQgKyBwYXJzZUZsb2F0KF9zdHlsZXMyLmdldFByb3BlcnR5VmFsdWUoJ21hcmdpbi10b3AnKSkgKyBwYXJzZUZsb2F0KF9zdHlsZXMyLmdldFByb3BlcnR5VmFsdWUoJ21hcmdpbi1ib3R0b20nKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXNbMF0ub2Zmc2V0SGVpZ2h0O1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbmZ1bmN0aW9uIG9mZnNldCgpIHtcbiAgaWYgKHRoaXMubGVuZ3RoID4gMCkge1xuICAgIHZhciB3aW5kb3cgPSBnZXRXaW5kb3coKTtcbiAgICB2YXIgZG9jdW1lbnQgPSBnZXREb2N1bWVudCgpO1xuICAgIHZhciBlbCA9IHRoaXNbMF07XG4gICAgdmFyIGJveCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHZhciBib2R5ID0gZG9jdW1lbnQuYm9keTtcbiAgICB2YXIgY2xpZW50VG9wID0gZWwuY2xpZW50VG9wIHx8IGJvZHkuY2xpZW50VG9wIHx8IDA7XG4gICAgdmFyIGNsaWVudExlZnQgPSBlbC5jbGllbnRMZWZ0IHx8IGJvZHkuY2xpZW50TGVmdCB8fCAwO1xuICAgIHZhciBzY3JvbGxUb3AgPSBlbCA9PT0gd2luZG93ID8gd2luZG93LnNjcm9sbFkgOiBlbC5zY3JvbGxUb3A7XG4gICAgdmFyIHNjcm9sbExlZnQgPSBlbCA9PT0gd2luZG93ID8gd2luZG93LnNjcm9sbFggOiBlbC5zY3JvbGxMZWZ0O1xuICAgIHJldHVybiB7XG4gICAgICB0b3A6IGJveC50b3AgKyBzY3JvbGxUb3AgLSBjbGllbnRUb3AsXG4gICAgICBsZWZ0OiBib3gubGVmdCArIHNjcm9sbExlZnQgLSBjbGllbnRMZWZ0XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG5mdW5jdGlvbiBoaWRlKCkge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICB0aGlzW2ldLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn1cblxuZnVuY3Rpb24gc2hvdygpIHtcbiAgdmFyIHdpbmRvdyA9IGdldFdpbmRvdygpO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIHZhciBlbCA9IHRoaXNbaV07XG5cbiAgICBpZiAoZWwuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG4gICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gJyc7XG4gICAgfVxuXG4gICAgaWYgKHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsLCBudWxsKS5nZXRQcm9wZXJ0eVZhbHVlKCdkaXNwbGF5JykgPT09ICdub25lJykge1xuICAgICAgLy8gU3RpbGwgbm90IHZpc2libGVcbiAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufVxuXG5mdW5jdGlvbiBzdHlsZXMoKSB7XG4gIHZhciB3aW5kb3cgPSBnZXRXaW5kb3coKTtcbiAgaWYgKHRoaXNbMF0pIHJldHVybiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzWzBdLCBudWxsKTtcbiAgcmV0dXJuIHt9O1xufVxuXG5mdW5jdGlvbiBjc3MocHJvcHMsIHZhbHVlKSB7XG4gIHZhciB3aW5kb3cgPSBnZXRXaW5kb3coKTtcbiAgdmFyIGk7XG5cbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEpIHtcbiAgICBpZiAodHlwZW9mIHByb3BzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gLmNzcygnd2lkdGgnKVxuICAgICAgaWYgKHRoaXNbMF0pIHJldHVybiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzWzBdLCBudWxsKS5nZXRQcm9wZXJ0eVZhbHVlKHByb3BzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gLmNzcyh7IHdpZHRoOiAnMTAwcHgnIH0pXG4gICAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBmb3IgKHZhciBfcHJvcCBpbiBwcm9wcykge1xuICAgICAgICAgIHRoaXNbaV0uc3R5bGVbX3Byb3BdID0gcHJvcHNbX3Byb3BdO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfVxuXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAyICYmIHR5cGVvZiBwcm9wcyA9PT0gJ3N0cmluZycpIHtcbiAgICAvLyAuY3NzKCd3aWR0aCcsICcxMDBweCcpXG4gICAgZm9yIChpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIHRoaXNbaV0uc3R5bGVbcHJvcHNdID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn1cblxuZnVuY3Rpb24gZWFjaChjYWxsYmFjaykge1xuICBpZiAoIWNhbGxiYWNrKSByZXR1cm4gdGhpcztcbiAgdGhpcy5mb3JFYWNoKGZ1bmN0aW9uIChlbCwgaW5kZXgpIHtcbiAgICBjYWxsYmFjay5hcHBseShlbCwgW2VsLCBpbmRleF0pO1xuICB9KTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbmZ1bmN0aW9uIGZpbHRlcihjYWxsYmFjaykge1xuICB2YXIgcmVzdWx0ID0gYXJyYXlGaWx0ZXIodGhpcywgY2FsbGJhY2spO1xuICByZXR1cm4gJChyZXN1bHQpO1xufVxuXG5mdW5jdGlvbiBodG1sKGh0bWwpIHtcbiAgaWYgKHR5cGVvZiBodG1sID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiB0aGlzWzBdID8gdGhpc1swXS5pbm5lckhUTUwgOiBudWxsO1xuICB9XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgdGhpc1tpXS5pbm5lckhUTUwgPSBodG1sO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59XG5cbmZ1bmN0aW9uIHRleHQodGV4dCkge1xuICBpZiAodHlwZW9mIHRleHQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIHRoaXNbMF0gPyB0aGlzWzBdLnRleHRDb250ZW50LnRyaW0oKSA6IG51bGw7XG4gIH1cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICB0aGlzW2ldLnRleHRDb250ZW50ID0gdGV4dDtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufVxuXG5mdW5jdGlvbiBpcyhzZWxlY3Rvcikge1xuICB2YXIgd2luZG93ID0gZ2V0V2luZG93KCk7XG4gIHZhciBkb2N1bWVudCA9IGdldERvY3VtZW50KCk7XG4gIHZhciBlbCA9IHRoaXNbMF07XG4gIHZhciBjb21wYXJlV2l0aDtcbiAgdmFyIGk7XG4gIGlmICghZWwgfHwgdHlwZW9mIHNlbGVjdG9yID09PSAndW5kZWZpbmVkJykgcmV0dXJuIGZhbHNlO1xuXG4gIGlmICh0eXBlb2Ygc2VsZWN0b3IgPT09ICdzdHJpbmcnKSB7XG4gICAgaWYgKGVsLm1hdGNoZXMpIHJldHVybiBlbC5tYXRjaGVzKHNlbGVjdG9yKTtcbiAgICBpZiAoZWwud2Via2l0TWF0Y2hlc1NlbGVjdG9yKSByZXR1cm4gZWwud2Via2l0TWF0Y2hlc1NlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICBpZiAoZWwubXNNYXRjaGVzU2VsZWN0b3IpIHJldHVybiBlbC5tc01hdGNoZXNTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgY29tcGFyZVdpdGggPSAkKHNlbGVjdG9yKTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBjb21wYXJlV2l0aC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKGNvbXBhcmVXaXRoW2ldID09PSBlbCkgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKHNlbGVjdG9yID09PSBkb2N1bWVudCkge1xuICAgIHJldHVybiBlbCA9PT0gZG9jdW1lbnQ7XG4gIH1cblxuICBpZiAoc2VsZWN0b3IgPT09IHdpbmRvdykge1xuICAgIHJldHVybiBlbCA9PT0gd2luZG93O1xuICB9XG5cbiAgaWYgKHNlbGVjdG9yLm5vZGVUeXBlIHx8IHNlbGVjdG9yIGluc3RhbmNlb2YgRG9tNykge1xuICAgIGNvbXBhcmVXaXRoID0gc2VsZWN0b3Iubm9kZVR5cGUgPyBbc2VsZWN0b3JdIDogc2VsZWN0b3I7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgY29tcGFyZVdpdGgubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmIChjb21wYXJlV2l0aFtpXSA9PT0gZWwpIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gaW5kZXgoKSB7XG4gIHZhciBjaGlsZCA9IHRoaXNbMF07XG4gIHZhciBpO1xuXG4gIGlmIChjaGlsZCkge1xuICAgIGkgPSAwOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcblxuICAgIHdoaWxlICgoY2hpbGQgPSBjaGlsZC5wcmV2aW91c1NpYmxpbmcpICE9PSBudWxsKSB7XG4gICAgICBpZiAoY2hpbGQubm9kZVR5cGUgPT09IDEpIGkgKz0gMTtcbiAgICB9XG5cbiAgICByZXR1cm4gaTtcbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGVxKGluZGV4KSB7XG4gIGlmICh0eXBlb2YgaW5kZXggPT09ICd1bmRlZmluZWQnKSByZXR1cm4gdGhpcztcbiAgdmFyIGxlbmd0aCA9IHRoaXMubGVuZ3RoO1xuXG4gIGlmIChpbmRleCA+IGxlbmd0aCAtIDEpIHtcbiAgICByZXR1cm4gJChbXSk7XG4gIH1cblxuICBpZiAoaW5kZXggPCAwKSB7XG4gICAgdmFyIHJldHVybkluZGV4ID0gbGVuZ3RoICsgaW5kZXg7XG4gICAgaWYgKHJldHVybkluZGV4IDwgMCkgcmV0dXJuICQoW10pO1xuICAgIHJldHVybiAkKFt0aGlzW3JldHVybkluZGV4XV0pO1xuICB9XG5cbiAgcmV0dXJuICQoW3RoaXNbaW5kZXhdXSk7XG59XG5cbmZ1bmN0aW9uIGFwcGVuZCgpIHtcbiAgdmFyIG5ld0NoaWxkO1xuICB2YXIgZG9jdW1lbnQgPSBnZXREb2N1bWVudCgpO1xuXG4gIGZvciAodmFyIGsgPSAwOyBrIDwgYXJndW1lbnRzLmxlbmd0aDsgayArPSAxKSB7XG4gICAgbmV3Q2hpbGQgPSBrIDwgMCB8fCBhcmd1bWVudHMubGVuZ3RoIDw9IGsgPyB1bmRlZmluZWQgOiBhcmd1bWVudHNba107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmICh0eXBlb2YgbmV3Q2hpbGQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHZhciB0ZW1wRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRlbXBEaXYuaW5uZXJIVE1MID0gbmV3Q2hpbGQ7XG5cbiAgICAgICAgd2hpbGUgKHRlbXBEaXYuZmlyc3RDaGlsZCkge1xuICAgICAgICAgIHRoaXNbaV0uYXBwZW5kQ2hpbGQodGVtcERpdi5maXJzdENoaWxkKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChuZXdDaGlsZCBpbnN0YW5jZW9mIERvbTcpIHtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBuZXdDaGlsZC5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgICAgIHRoaXNbaV0uYXBwZW5kQ2hpbGQobmV3Q2hpbGRbal0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzW2ldLmFwcGVuZENoaWxkKG5ld0NoaWxkKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn1cblxuZnVuY3Rpb24gYXBwZW5kVG8ocGFyZW50KSB7XG4gICQocGFyZW50KS5hcHBlbmQodGhpcyk7XG4gIHJldHVybiB0aGlzO1xufVxuXG5mdW5jdGlvbiBwcmVwZW5kKG5ld0NoaWxkKSB7XG4gIHZhciBkb2N1bWVudCA9IGdldERvY3VtZW50KCk7XG4gIHZhciBpO1xuICB2YXIgajtcblxuICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGlmICh0eXBlb2YgbmV3Q2hpbGQgPT09ICdzdHJpbmcnKSB7XG4gICAgICB2YXIgdGVtcERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdGVtcERpdi5pbm5lckhUTUwgPSBuZXdDaGlsZDtcblxuICAgICAgZm9yIChqID0gdGVtcERpdi5jaGlsZE5vZGVzLmxlbmd0aCAtIDE7IGogPj0gMDsgaiAtPSAxKSB7XG4gICAgICAgIHRoaXNbaV0uaW5zZXJ0QmVmb3JlKHRlbXBEaXYuY2hpbGROb2Rlc1tqXSwgdGhpc1tpXS5jaGlsZE5vZGVzWzBdKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG5ld0NoaWxkIGluc3RhbmNlb2YgRG9tNykge1xuICAgICAgZm9yIChqID0gMDsgaiA8IG5ld0NoaWxkLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgIHRoaXNbaV0uaW5zZXJ0QmVmb3JlKG5ld0NoaWxkW2pdLCB0aGlzW2ldLmNoaWxkTm9kZXNbMF0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzW2ldLmluc2VydEJlZm9yZShuZXdDaGlsZCwgdGhpc1tpXS5jaGlsZE5vZGVzWzBdKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn1cblxuZnVuY3Rpb24gcHJlcGVuZFRvKHBhcmVudCkge1xuICAkKHBhcmVudCkucHJlcGVuZCh0aGlzKTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydEJlZm9yZShzZWxlY3Rvcikge1xuICB2YXIgYmVmb3JlID0gJChzZWxlY3Rvcik7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgaWYgKGJlZm9yZS5sZW5ndGggPT09IDEpIHtcbiAgICAgIGJlZm9yZVswXS5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0aGlzW2ldLCBiZWZvcmVbMF0pO1xuICAgIH0gZWxzZSBpZiAoYmVmb3JlLmxlbmd0aCA+IDEpIHtcbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgYmVmb3JlLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgIGJlZm9yZVtqXS5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0aGlzW2ldLmNsb25lTm9kZSh0cnVlKSwgYmVmb3JlW2pdKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gaW5zZXJ0QWZ0ZXIoc2VsZWN0b3IpIHtcbiAgdmFyIGFmdGVyID0gJChzZWxlY3Rvcik7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgaWYgKGFmdGVyLmxlbmd0aCA9PT0gMSkge1xuICAgICAgYWZ0ZXJbMF0ucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodGhpc1tpXSwgYWZ0ZXJbMF0ubmV4dFNpYmxpbmcpO1xuICAgIH0gZWxzZSBpZiAoYWZ0ZXIubGVuZ3RoID4gMSkge1xuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBhZnRlci5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgICBhZnRlcltqXS5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0aGlzW2ldLmNsb25lTm9kZSh0cnVlKSwgYWZ0ZXJbal0ubmV4dFNpYmxpbmcpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBuZXh0KHNlbGVjdG9yKSB7XG4gIGlmICh0aGlzLmxlbmd0aCA+IDApIHtcbiAgICBpZiAoc2VsZWN0b3IpIHtcbiAgICAgIGlmICh0aGlzWzBdLm5leHRFbGVtZW50U2libGluZyAmJiAkKHRoaXNbMF0ubmV4dEVsZW1lbnRTaWJsaW5nKS5pcyhzZWxlY3RvcikpIHtcbiAgICAgICAgcmV0dXJuICQoW3RoaXNbMF0ubmV4dEVsZW1lbnRTaWJsaW5nXSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAkKFtdKTtcbiAgICB9XG5cbiAgICBpZiAodGhpc1swXS5uZXh0RWxlbWVudFNpYmxpbmcpIHJldHVybiAkKFt0aGlzWzBdLm5leHRFbGVtZW50U2libGluZ10pO1xuICAgIHJldHVybiAkKFtdKTtcbiAgfVxuXG4gIHJldHVybiAkKFtdKTtcbn1cblxuZnVuY3Rpb24gbmV4dEFsbChzZWxlY3Rvcikge1xuICB2YXIgbmV4dEVscyA9IFtdO1xuICB2YXIgZWwgPSB0aGlzWzBdO1xuICBpZiAoIWVsKSByZXR1cm4gJChbXSk7XG5cbiAgd2hpbGUgKGVsLm5leHRFbGVtZW50U2libGluZykge1xuICAgIHZhciBfbmV4dCA9IGVsLm5leHRFbGVtZW50U2libGluZzsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXG4gICAgaWYgKHNlbGVjdG9yKSB7XG4gICAgICBpZiAoJChfbmV4dCkuaXMoc2VsZWN0b3IpKSBuZXh0RWxzLnB1c2goX25leHQpO1xuICAgIH0gZWxzZSBuZXh0RWxzLnB1c2goX25leHQpO1xuXG4gICAgZWwgPSBfbmV4dDtcbiAgfVxuXG4gIHJldHVybiAkKG5leHRFbHMpO1xufVxuXG5mdW5jdGlvbiBwcmV2KHNlbGVjdG9yKSB7XG4gIGlmICh0aGlzLmxlbmd0aCA+IDApIHtcbiAgICB2YXIgZWwgPSB0aGlzWzBdO1xuXG4gICAgaWYgKHNlbGVjdG9yKSB7XG4gICAgICBpZiAoZWwucHJldmlvdXNFbGVtZW50U2libGluZyAmJiAkKGVsLnByZXZpb3VzRWxlbWVudFNpYmxpbmcpLmlzKHNlbGVjdG9yKSkge1xuICAgICAgICByZXR1cm4gJChbZWwucHJldmlvdXNFbGVtZW50U2libGluZ10pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gJChbXSk7XG4gICAgfVxuXG4gICAgaWYgKGVsLnByZXZpb3VzRWxlbWVudFNpYmxpbmcpIHJldHVybiAkKFtlbC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nXSk7XG4gICAgcmV0dXJuICQoW10pO1xuICB9XG5cbiAgcmV0dXJuICQoW10pO1xufVxuXG5mdW5jdGlvbiBwcmV2QWxsKHNlbGVjdG9yKSB7XG4gIHZhciBwcmV2RWxzID0gW107XG4gIHZhciBlbCA9IHRoaXNbMF07XG4gIGlmICghZWwpIHJldHVybiAkKFtdKTtcblxuICB3aGlsZSAoZWwucHJldmlvdXNFbGVtZW50U2libGluZykge1xuICAgIHZhciBfcHJldiA9IGVsLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcblxuICAgIGlmIChzZWxlY3Rvcikge1xuICAgICAgaWYgKCQoX3ByZXYpLmlzKHNlbGVjdG9yKSkgcHJldkVscy5wdXNoKF9wcmV2KTtcbiAgICB9IGVsc2UgcHJldkVscy5wdXNoKF9wcmV2KTtcblxuICAgIGVsID0gX3ByZXY7XG4gIH1cblxuICByZXR1cm4gJChwcmV2RWxzKTtcbn1cblxuZnVuY3Rpb24gc2libGluZ3Moc2VsZWN0b3IpIHtcbiAgcmV0dXJuIHRoaXMubmV4dEFsbChzZWxlY3RvcikuYWRkKHRoaXMucHJldkFsbChzZWxlY3RvcikpO1xufVxuXG5mdW5jdGlvbiBwYXJlbnQoc2VsZWN0b3IpIHtcbiAgdmFyIHBhcmVudHMgPSBbXTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGlmICh0aGlzW2ldLnBhcmVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgIGlmIChzZWxlY3Rvcikge1xuICAgICAgICBpZiAoJCh0aGlzW2ldLnBhcmVudE5vZGUpLmlzKHNlbGVjdG9yKSkgcGFyZW50cy5wdXNoKHRoaXNbaV0ucGFyZW50Tm9kZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJlbnRzLnB1c2godGhpc1tpXS5wYXJlbnROb2RlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gJChwYXJlbnRzKTtcbn1cblxuZnVuY3Rpb24gcGFyZW50cyhzZWxlY3Rvcikge1xuICB2YXIgcGFyZW50cyA9IFtdOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgdmFyIF9wYXJlbnQgPSB0aGlzW2ldLnBhcmVudE5vZGU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcblxuICAgIHdoaWxlIChfcGFyZW50KSB7XG4gICAgICBpZiAoc2VsZWN0b3IpIHtcbiAgICAgICAgaWYgKCQoX3BhcmVudCkuaXMoc2VsZWN0b3IpKSBwYXJlbnRzLnB1c2goX3BhcmVudCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJlbnRzLnB1c2goX3BhcmVudCk7XG4gICAgICB9XG5cbiAgICAgIF9wYXJlbnQgPSBfcGFyZW50LnBhcmVudE5vZGU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuICQocGFyZW50cyk7XG59XG5cbmZ1bmN0aW9uIGNsb3Nlc3Qoc2VsZWN0b3IpIHtcbiAgdmFyIGNsb3Nlc3QgPSB0aGlzOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cbiAgaWYgKHR5cGVvZiBzZWxlY3RvciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gJChbXSk7XG4gIH1cblxuICBpZiAoIWNsb3Nlc3QuaXMoc2VsZWN0b3IpKSB7XG4gICAgY2xvc2VzdCA9IGNsb3Nlc3QucGFyZW50cyhzZWxlY3RvcikuZXEoMCk7XG4gIH1cblxuICByZXR1cm4gY2xvc2VzdDtcbn1cblxuZnVuY3Rpb24gZmluZChzZWxlY3Rvcikge1xuICB2YXIgZm91bmRFbGVtZW50cyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIHZhciBmb3VuZCA9IHRoaXNbaV0ucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG5cbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IGZvdW5kLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICBmb3VuZEVsZW1lbnRzLnB1c2goZm91bmRbal0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAkKGZvdW5kRWxlbWVudHMpO1xufVxuXG5mdW5jdGlvbiBjaGlsZHJlbihzZWxlY3Rvcikge1xuICB2YXIgY2hpbGRyZW4gPSBbXTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIHZhciBjaGlsZE5vZGVzID0gdGhpc1tpXS5jaGlsZHJlbjtcblxuICAgIGZvciAodmFyIGogPSAwOyBqIDwgY2hpbGROb2Rlcy5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgaWYgKCFzZWxlY3RvciB8fCAkKGNoaWxkTm9kZXNbal0pLmlzKHNlbGVjdG9yKSkge1xuICAgICAgICBjaGlsZHJlbi5wdXNoKGNoaWxkTm9kZXNbal0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAkKGNoaWxkcmVuKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlKCkge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAodGhpc1tpXS5wYXJlbnROb2RlKSB0aGlzW2ldLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpc1tpXSk7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn1cblxuZnVuY3Rpb24gZGV0YWNoKCkge1xuICByZXR1cm4gdGhpcy5yZW1vdmUoKTtcbn1cblxuZnVuY3Rpb24gYWRkKCkge1xuICB2YXIgZG9tID0gdGhpcztcbiAgdmFyIGk7XG4gIHZhciBqO1xuXG4gIGZvciAodmFyIF9sZW4xMCA9IGFyZ3VtZW50cy5sZW5ndGgsIGVscyA9IG5ldyBBcnJheShfbGVuMTApLCBfa2V5MTAgPSAwOyBfa2V5MTAgPCBfbGVuMTA7IF9rZXkxMCsrKSB7XG4gICAgZWxzW19rZXkxMF0gPSBhcmd1bWVudHNbX2tleTEwXTtcbiAgfVxuXG4gIGZvciAoaSA9IDA7IGkgPCBlbHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICB2YXIgdG9BZGQgPSAkKGVsc1tpXSk7XG5cbiAgICBmb3IgKGogPSAwOyBqIDwgdG9BZGQubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgIGRvbS5wdXNoKHRvQWRkW2pdKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZG9tO1xufVxuXG5mdW5jdGlvbiBlbXB0eSgpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgdmFyIGVsID0gdGhpc1tpXTtcblxuICAgIGlmIChlbC5ub2RlVHlwZSA9PT0gMSkge1xuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBlbC5jaGlsZE5vZGVzLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgIGlmIChlbC5jaGlsZE5vZGVzW2pdLnBhcmVudE5vZGUpIHtcbiAgICAgICAgICBlbC5jaGlsZE5vZGVzW2pdLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWwuY2hpbGROb2Rlc1tqXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZWwudGV4dENvbnRlbnQgPSAnJztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn1cblxuZnVuY3Rpb24gc2Nyb2xsVG8oKSB7XG4gIHZhciB3aW5kb3cgPSBnZXRXaW5kb3coKTtcblxuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgdmFyIGxlZnQgPSBhcmdzWzBdLFxuICAgICAgdG9wID0gYXJnc1sxXSxcbiAgICAgIGR1cmF0aW9uID0gYXJnc1syXSxcbiAgICAgIGVhc2luZyA9IGFyZ3NbM10sXG4gICAgICBjYWxsYmFjayA9IGFyZ3NbNF07XG5cbiAgaWYgKGFyZ3MubGVuZ3RoID09PSA0ICYmIHR5cGVvZiBlYXNpbmcgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjYWxsYmFjayA9IGVhc2luZztcbiAgICBsZWZ0ID0gYXJnc1swXTtcbiAgICB0b3AgPSBhcmdzWzFdO1xuICAgIGR1cmF0aW9uID0gYXJnc1syXTtcbiAgICBjYWxsYmFjayA9IGFyZ3NbM107XG4gICAgZWFzaW5nID0gYXJnc1s0XTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgZWFzaW5nID09PSAndW5kZWZpbmVkJykgZWFzaW5nID0gJ3N3aW5nJztcbiAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiBhbmltYXRlKCkge1xuICAgIHZhciBlbCA9IHRoaXM7XG4gICAgdmFyIGN1cnJlbnRUb3A7XG4gICAgdmFyIGN1cnJlbnRMZWZ0O1xuICAgIHZhciBtYXhUb3A7XG4gICAgdmFyIG1heExlZnQ7XG4gICAgdmFyIG5ld1RvcDtcbiAgICB2YXIgbmV3TGVmdDtcbiAgICB2YXIgc2Nyb2xsVG9wOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cbiAgICB2YXIgc2Nyb2xsTGVmdDsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXG4gICAgdmFyIGFuaW1hdGVUb3AgPSB0b3AgPiAwIHx8IHRvcCA9PT0gMDtcbiAgICB2YXIgYW5pbWF0ZUxlZnQgPSBsZWZ0ID4gMCB8fCBsZWZ0ID09PSAwO1xuXG4gICAgaWYgKHR5cGVvZiBlYXNpbmcgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBlYXNpbmcgPSAnc3dpbmcnO1xuICAgIH1cblxuICAgIGlmIChhbmltYXRlVG9wKSB7XG4gICAgICBjdXJyZW50VG9wID0gZWwuc2Nyb2xsVG9wO1xuXG4gICAgICBpZiAoIWR1cmF0aW9uKSB7XG4gICAgICAgIGVsLnNjcm9sbFRvcCA9IHRvcDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoYW5pbWF0ZUxlZnQpIHtcbiAgICAgIGN1cnJlbnRMZWZ0ID0gZWwuc2Nyb2xsTGVmdDtcblxuICAgICAgaWYgKCFkdXJhdGlvbikge1xuICAgICAgICBlbC5zY3JvbGxMZWZ0ID0gbGVmdDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWR1cmF0aW9uKSByZXR1cm47XG5cbiAgICBpZiAoYW5pbWF0ZVRvcCkge1xuICAgICAgbWF4VG9wID0gZWwuc2Nyb2xsSGVpZ2h0IC0gZWwub2Zmc2V0SGVpZ2h0O1xuICAgICAgbmV3VG9wID0gTWF0aC5tYXgoTWF0aC5taW4odG9wLCBtYXhUb3ApLCAwKTtcbiAgICB9XG5cbiAgICBpZiAoYW5pbWF0ZUxlZnQpIHtcbiAgICAgIG1heExlZnQgPSBlbC5zY3JvbGxXaWR0aCAtIGVsLm9mZnNldFdpZHRoO1xuICAgICAgbmV3TGVmdCA9IE1hdGgubWF4KE1hdGgubWluKGxlZnQsIG1heExlZnQpLCAwKTtcbiAgICB9XG5cbiAgICB2YXIgc3RhcnRUaW1lID0gbnVsbDtcbiAgICBpZiAoYW5pbWF0ZVRvcCAmJiBuZXdUb3AgPT09IGN1cnJlbnRUb3ApIGFuaW1hdGVUb3AgPSBmYWxzZTtcbiAgICBpZiAoYW5pbWF0ZUxlZnQgJiYgbmV3TGVmdCA9PT0gY3VycmVudExlZnQpIGFuaW1hdGVMZWZ0ID0gZmFsc2U7XG5cbiAgICBmdW5jdGlvbiByZW5kZXIodGltZSkge1xuICAgICAgaWYgKHRpbWUgPT09IHZvaWQgMCkge1xuICAgICAgICB0aW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGFydFRpbWUgPT09IG51bGwpIHtcbiAgICAgICAgc3RhcnRUaW1lID0gdGltZTtcbiAgICAgIH1cblxuICAgICAgdmFyIHByb2dyZXNzID0gTWF0aC5tYXgoTWF0aC5taW4oKHRpbWUgLSBzdGFydFRpbWUpIC8gZHVyYXRpb24sIDEpLCAwKTtcbiAgICAgIHZhciBlYXNlUHJvZ3Jlc3MgPSBlYXNpbmcgPT09ICdsaW5lYXInID8gcHJvZ3Jlc3MgOiAwLjUgLSBNYXRoLmNvcyhwcm9ncmVzcyAqIE1hdGguUEkpIC8gMjtcbiAgICAgIHZhciBkb25lO1xuICAgICAgaWYgKGFuaW1hdGVUb3ApIHNjcm9sbFRvcCA9IGN1cnJlbnRUb3AgKyBlYXNlUHJvZ3Jlc3MgKiAobmV3VG9wIC0gY3VycmVudFRvcCk7XG4gICAgICBpZiAoYW5pbWF0ZUxlZnQpIHNjcm9sbExlZnQgPSBjdXJyZW50TGVmdCArIGVhc2VQcm9ncmVzcyAqIChuZXdMZWZ0IC0gY3VycmVudExlZnQpO1xuXG4gICAgICBpZiAoYW5pbWF0ZVRvcCAmJiBuZXdUb3AgPiBjdXJyZW50VG9wICYmIHNjcm9sbFRvcCA+PSBuZXdUb3ApIHtcbiAgICAgICAgZWwuc2Nyb2xsVG9wID0gbmV3VG9wO1xuICAgICAgICBkb25lID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGFuaW1hdGVUb3AgJiYgbmV3VG9wIDwgY3VycmVudFRvcCAmJiBzY3JvbGxUb3AgPD0gbmV3VG9wKSB7XG4gICAgICAgIGVsLnNjcm9sbFRvcCA9IG5ld1RvcDtcbiAgICAgICAgZG9uZSA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChhbmltYXRlTGVmdCAmJiBuZXdMZWZ0ID4gY3VycmVudExlZnQgJiYgc2Nyb2xsTGVmdCA+PSBuZXdMZWZ0KSB7XG4gICAgICAgIGVsLnNjcm9sbExlZnQgPSBuZXdMZWZ0O1xuICAgICAgICBkb25lID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGFuaW1hdGVMZWZ0ICYmIG5ld0xlZnQgPCBjdXJyZW50TGVmdCAmJiBzY3JvbGxMZWZ0IDw9IG5ld0xlZnQpIHtcbiAgICAgICAgZWwuc2Nyb2xsTGVmdCA9IG5ld0xlZnQ7XG4gICAgICAgIGRvbmUgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoZG9uZSkge1xuICAgICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGFuaW1hdGVUb3ApIGVsLnNjcm9sbFRvcCA9IHNjcm9sbFRvcDtcbiAgICAgIGlmIChhbmltYXRlTGVmdCkgZWwuc2Nyb2xsTGVmdCA9IHNjcm9sbExlZnQ7XG4gICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlcik7XG4gICAgfVxuXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShyZW5kZXIpO1xuICB9KTtcbn0gLy8gc2Nyb2xsVG9wKHRvcCwgZHVyYXRpb24sIGVhc2luZywgY2FsbGJhY2spIHtcblxuXG5mdW5jdGlvbiBzY3JvbGxUb3AoKSB7XG4gIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgIGFyZ3NbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgfVxuXG4gIHZhciB0b3AgPSBhcmdzWzBdLFxuICAgICAgZHVyYXRpb24gPSBhcmdzWzFdLFxuICAgICAgZWFzaW5nID0gYXJnc1syXSxcbiAgICAgIGNhbGxiYWNrID0gYXJnc1szXTtcblxuICBpZiAoYXJncy5sZW5ndGggPT09IDMgJiYgdHlwZW9mIGVhc2luZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHRvcCA9IGFyZ3NbMF07XG4gICAgZHVyYXRpb24gPSBhcmdzWzFdO1xuICAgIGNhbGxiYWNrID0gYXJnc1syXTtcbiAgICBlYXNpbmcgPSBhcmdzWzNdO1xuICB9XG5cbiAgdmFyIGRvbSA9IHRoaXM7XG5cbiAgaWYgKHR5cGVvZiB0b3AgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgaWYgKGRvbS5sZW5ndGggPiAwKSByZXR1cm4gZG9tWzBdLnNjcm9sbFRvcDtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBkb20uc2Nyb2xsVG8odW5kZWZpbmVkLCB0b3AsIGR1cmF0aW9uLCBlYXNpbmcsIGNhbGxiYWNrKTtcbn1cblxuZnVuY3Rpb24gc2Nyb2xsTGVmdCgpIHtcbiAgZm9yICh2YXIgX2xlbjMgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4zKSwgX2tleTMgPSAwOyBfa2V5MyA8IF9sZW4zOyBfa2V5MysrKSB7XG4gICAgYXJnc1tfa2V5M10gPSBhcmd1bWVudHNbX2tleTNdO1xuICB9XG5cbiAgdmFyIGxlZnQgPSBhcmdzWzBdLFxuICAgICAgZHVyYXRpb24gPSBhcmdzWzFdLFxuICAgICAgZWFzaW5nID0gYXJnc1syXSxcbiAgICAgIGNhbGxiYWNrID0gYXJnc1szXTtcblxuICBpZiAoYXJncy5sZW5ndGggPT09IDMgJiYgdHlwZW9mIGVhc2luZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGxlZnQgPSBhcmdzWzBdO1xuICAgIGR1cmF0aW9uID0gYXJnc1sxXTtcbiAgICBjYWxsYmFjayA9IGFyZ3NbMl07XG4gICAgZWFzaW5nID0gYXJnc1szXTtcbiAgfVxuXG4gIHZhciBkb20gPSB0aGlzO1xuXG4gIGlmICh0eXBlb2YgbGVmdCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBpZiAoZG9tLmxlbmd0aCA+IDApIHJldHVybiBkb21bMF0uc2Nyb2xsTGVmdDtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBkb20uc2Nyb2xsVG8obGVmdCwgdW5kZWZpbmVkLCBkdXJhdGlvbiwgZWFzaW5nLCBjYWxsYmFjayk7XG59XG5cbmZ1bmN0aW9uIGFuaW1hdGUoaW5pdGlhbFByb3BzLCBpbml0aWFsUGFyYW1zKSB7XG4gIHZhciB3aW5kb3cgPSBnZXRXaW5kb3coKTtcbiAgdmFyIGVscyA9IHRoaXM7XG4gIHZhciBhID0ge1xuICAgIHByb3BzOiBPYmplY3QuYXNzaWduKHt9LCBpbml0aWFsUHJvcHMpLFxuICAgIHBhcmFtczogT2JqZWN0LmFzc2lnbih7XG4gICAgICBkdXJhdGlvbjogMzAwLFxuICAgICAgZWFzaW5nOiAnc3dpbmcnIC8vIG9yICdsaW5lYXInXG5cbiAgICAgIC8qIENhbGxiYWNrc1xuICAgICAgYmVnaW4oZWxlbWVudHMpXG4gICAgICBjb21wbGV0ZShlbGVtZW50cylcbiAgICAgIHByb2dyZXNzKGVsZW1lbnRzLCBjb21wbGV0ZSwgcmVtYWluaW5nLCBzdGFydCwgdHdlZW5WYWx1ZSlcbiAgICAgICovXG5cbiAgICB9LCBpbml0aWFsUGFyYW1zKSxcbiAgICBlbGVtZW50czogZWxzLFxuICAgIGFuaW1hdGluZzogZmFsc2UsXG4gICAgcXVlOiBbXSxcbiAgICBlYXNpbmdQcm9ncmVzczogZnVuY3Rpb24gZWFzaW5nUHJvZ3Jlc3MoZWFzaW5nLCBwcm9ncmVzcykge1xuICAgICAgaWYgKGVhc2luZyA9PT0gJ3N3aW5nJykge1xuICAgICAgICByZXR1cm4gMC41IC0gTWF0aC5jb3MocHJvZ3Jlc3MgKiBNYXRoLlBJKSAvIDI7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgZWFzaW5nID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBlYXNpbmcocHJvZ3Jlc3MpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJvZ3Jlc3M7XG4gICAgfSxcbiAgICBzdG9wOiBmdW5jdGlvbiBzdG9wKCkge1xuICAgICAgaWYgKGEuZnJhbWVJZCkge1xuICAgICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUoYS5mcmFtZUlkKTtcbiAgICAgIH1cblxuICAgICAgYS5hbmltYXRpbmcgPSBmYWxzZTtcbiAgICAgIGEuZWxlbWVudHMuZWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgdmFyIGVsZW1lbnQgPSBlbDtcbiAgICAgICAgZGVsZXRlIGVsZW1lbnQuZG9tN0FuaW1hdGVJbnN0YW5jZTtcbiAgICAgIH0pO1xuICAgICAgYS5xdWUgPSBbXTtcbiAgICB9LFxuICAgIGRvbmU6IGZ1bmN0aW9uIGRvbmUoY29tcGxldGUpIHtcbiAgICAgIGEuYW5pbWF0aW5nID0gZmFsc2U7XG4gICAgICBhLmVsZW1lbnRzLmVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgIHZhciBlbGVtZW50ID0gZWw7XG4gICAgICAgIGRlbGV0ZSBlbGVtZW50LmRvbTdBbmltYXRlSW5zdGFuY2U7XG4gICAgICB9KTtcbiAgICAgIGlmIChjb21wbGV0ZSkgY29tcGxldGUoZWxzKTtcblxuICAgICAgaWYgKGEucXVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdmFyIHF1ZSA9IGEucXVlLnNoaWZ0KCk7XG4gICAgICAgIGEuYW5pbWF0ZShxdWVbMF0sIHF1ZVsxXSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBhbmltYXRlOiBmdW5jdGlvbiBhbmltYXRlKHByb3BzLCBwYXJhbXMpIHtcbiAgICAgIGlmIChhLmFuaW1hdGluZykge1xuICAgICAgICBhLnF1ZS5wdXNoKFtwcm9wcywgcGFyYW1zXSk7XG4gICAgICAgIHJldHVybiBhO1xuICAgICAgfVxuXG4gICAgICB2YXIgZWxlbWVudHMgPSBbXTsgLy8gRGVmaW5lICYgQ2FjaGUgSW5pdGlhbHMgJiBVbml0c1xuXG4gICAgICBhLmVsZW1lbnRzLmVhY2goZnVuY3Rpb24gKGVsLCBpbmRleCkge1xuICAgICAgICB2YXIgaW5pdGlhbEZ1bGxWYWx1ZTtcbiAgICAgICAgdmFyIGluaXRpYWxWYWx1ZTtcbiAgICAgICAgdmFyIHVuaXQ7XG4gICAgICAgIHZhciBmaW5hbFZhbHVlO1xuICAgICAgICB2YXIgZmluYWxGdWxsVmFsdWU7XG4gICAgICAgIGlmICghZWwuZG9tN0FuaW1hdGVJbnN0YW5jZSkgYS5lbGVtZW50c1tpbmRleF0uZG9tN0FuaW1hdGVJbnN0YW5jZSA9IGE7XG4gICAgICAgIGVsZW1lbnRzW2luZGV4XSA9IHtcbiAgICAgICAgICBjb250YWluZXI6IGVsXG4gICAgICAgIH07XG4gICAgICAgIE9iamVjdC5rZXlzKHByb3BzKS5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgICAgICAgaW5pdGlhbEZ1bGxWYWx1ZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsLCBudWxsKS5nZXRQcm9wZXJ0eVZhbHVlKHByb3ApLnJlcGxhY2UoJywnLCAnLicpO1xuICAgICAgICAgIGluaXRpYWxWYWx1ZSA9IHBhcnNlRmxvYXQoaW5pdGlhbEZ1bGxWYWx1ZSk7XG4gICAgICAgICAgdW5pdCA9IGluaXRpYWxGdWxsVmFsdWUucmVwbGFjZShpbml0aWFsVmFsdWUsICcnKTtcbiAgICAgICAgICBmaW5hbFZhbHVlID0gcGFyc2VGbG9hdChwcm9wc1twcm9wXSk7XG4gICAgICAgICAgZmluYWxGdWxsVmFsdWUgPSBwcm9wc1twcm9wXSArIHVuaXQ7XG4gICAgICAgICAgZWxlbWVudHNbaW5kZXhdW3Byb3BdID0ge1xuICAgICAgICAgICAgaW5pdGlhbEZ1bGxWYWx1ZTogaW5pdGlhbEZ1bGxWYWx1ZSxcbiAgICAgICAgICAgIGluaXRpYWxWYWx1ZTogaW5pdGlhbFZhbHVlLFxuICAgICAgICAgICAgdW5pdDogdW5pdCxcbiAgICAgICAgICAgIGZpbmFsVmFsdWU6IGZpbmFsVmFsdWUsXG4gICAgICAgICAgICBmaW5hbEZ1bGxWYWx1ZTogZmluYWxGdWxsVmFsdWUsXG4gICAgICAgICAgICBjdXJyZW50VmFsdWU6IGluaXRpYWxWYWx1ZVxuICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICB2YXIgc3RhcnRUaW1lID0gbnVsbDtcbiAgICAgIHZhciB0aW1lO1xuICAgICAgdmFyIGVsZW1lbnRzRG9uZSA9IDA7XG4gICAgICB2YXIgcHJvcHNEb25lID0gMDtcbiAgICAgIHZhciBkb25lO1xuICAgICAgdmFyIGJlZ2FuID0gZmFsc2U7XG4gICAgICBhLmFuaW1hdGluZyA9IHRydWU7XG5cbiAgICAgIGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgdGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICB2YXIgcHJvZ3Jlc3M7XG4gICAgICAgIHZhciBlYXNlUHJvZ3Jlc3M7IC8vIGxldCBlbDtcblxuICAgICAgICBpZiAoIWJlZ2FuKSB7XG4gICAgICAgICAgYmVnYW4gPSB0cnVlO1xuICAgICAgICAgIGlmIChwYXJhbXMuYmVnaW4pIHBhcmFtcy5iZWdpbihlbHMpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHN0YXJ0VGltZSA9PT0gbnVsbCkge1xuICAgICAgICAgIHN0YXJ0VGltZSA9IHRpbWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGFyYW1zLnByb2dyZXNzKSB7XG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgcGFyYW1zLnByb2dyZXNzKGVscywgTWF0aC5tYXgoTWF0aC5taW4oKHRpbWUgLSBzdGFydFRpbWUpIC8gcGFyYW1zLmR1cmF0aW9uLCAxKSwgMCksIHN0YXJ0VGltZSArIHBhcmFtcy5kdXJhdGlvbiAtIHRpbWUgPCAwID8gMCA6IHN0YXJ0VGltZSArIHBhcmFtcy5kdXJhdGlvbiAtIHRpbWUsIHN0YXJ0VGltZSk7XG4gICAgICAgIH1cblxuICAgICAgICBlbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgdmFyIGVsID0gZWxlbWVudDtcbiAgICAgICAgICBpZiAoZG9uZSB8fCBlbC5kb25lKSByZXR1cm47XG4gICAgICAgICAgT2JqZWN0LmtleXMocHJvcHMpLmZvckVhY2goZnVuY3Rpb24gKHByb3ApIHtcbiAgICAgICAgICAgIGlmIChkb25lIHx8IGVsLmRvbmUpIHJldHVybjtcbiAgICAgICAgICAgIHByb2dyZXNzID0gTWF0aC5tYXgoTWF0aC5taW4oKHRpbWUgLSBzdGFydFRpbWUpIC8gcGFyYW1zLmR1cmF0aW9uLCAxKSwgMCk7XG4gICAgICAgICAgICBlYXNlUHJvZ3Jlc3MgPSBhLmVhc2luZ1Byb2dyZXNzKHBhcmFtcy5lYXNpbmcsIHByb2dyZXNzKTtcbiAgICAgICAgICAgIHZhciBfZWwkcHJvcCA9IGVsW3Byb3BdLFxuICAgICAgICAgICAgICAgIGluaXRpYWxWYWx1ZSA9IF9lbCRwcm9wLmluaXRpYWxWYWx1ZSxcbiAgICAgICAgICAgICAgICBmaW5hbFZhbHVlID0gX2VsJHByb3AuZmluYWxWYWx1ZSxcbiAgICAgICAgICAgICAgICB1bml0ID0gX2VsJHByb3AudW5pdDtcbiAgICAgICAgICAgIGVsW3Byb3BdLmN1cnJlbnRWYWx1ZSA9IGluaXRpYWxWYWx1ZSArIGVhc2VQcm9ncmVzcyAqIChmaW5hbFZhbHVlIC0gaW5pdGlhbFZhbHVlKTtcbiAgICAgICAgICAgIHZhciBjdXJyZW50VmFsdWUgPSBlbFtwcm9wXS5jdXJyZW50VmFsdWU7XG5cbiAgICAgICAgICAgIGlmIChmaW5hbFZhbHVlID4gaW5pdGlhbFZhbHVlICYmIGN1cnJlbnRWYWx1ZSA+PSBmaW5hbFZhbHVlIHx8IGZpbmFsVmFsdWUgPCBpbml0aWFsVmFsdWUgJiYgY3VycmVudFZhbHVlIDw9IGZpbmFsVmFsdWUpIHtcbiAgICAgICAgICAgICAgZWwuY29udGFpbmVyLnN0eWxlW3Byb3BdID0gZmluYWxWYWx1ZSArIHVuaXQ7XG4gICAgICAgICAgICAgIHByb3BzRG9uZSArPSAxO1xuXG4gICAgICAgICAgICAgIGlmIChwcm9wc0RvbmUgPT09IE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBlbC5kb25lID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBlbGVtZW50c0RvbmUgKz0gMTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmIChlbGVtZW50c0RvbmUgPT09IGVsZW1lbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGRvbmUgPSB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChkb25lKSB7XG4gICAgICAgICAgICAgIGEuZG9uZShwYXJhbXMuY29tcGxldGUpO1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGVsLmNvbnRhaW5lci5zdHlsZVtwcm9wXSA9IGN1cnJlbnRWYWx1ZSArIHVuaXQ7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoZG9uZSkgcmV0dXJuOyAvLyBUaGVuIGNhbGxcblxuICAgICAgICBhLmZyYW1lSWQgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlcik7XG4gICAgICB9XG5cbiAgICAgIGEuZnJhbWVJZCA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyKTtcbiAgICAgIHJldHVybiBhO1xuICAgIH1cbiAgfTtcblxuICBpZiAoYS5lbGVtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gZWxzO1xuICB9XG5cbiAgdmFyIGFuaW1hdGVJbnN0YW5jZTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGEuZWxlbWVudHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAoYS5lbGVtZW50c1tpXS5kb203QW5pbWF0ZUluc3RhbmNlKSB7XG4gICAgICBhbmltYXRlSW5zdGFuY2UgPSBhLmVsZW1lbnRzW2ldLmRvbTdBbmltYXRlSW5zdGFuY2U7XG4gICAgfSBlbHNlIGEuZWxlbWVudHNbaV0uZG9tN0FuaW1hdGVJbnN0YW5jZSA9IGE7XG4gIH1cblxuICBpZiAoIWFuaW1hdGVJbnN0YW5jZSkge1xuICAgIGFuaW1hdGVJbnN0YW5jZSA9IGE7XG4gIH1cblxuICBpZiAoaW5pdGlhbFByb3BzID09PSAnc3RvcCcpIHtcbiAgICBhbmltYXRlSW5zdGFuY2Uuc3RvcCgpO1xuICB9IGVsc2Uge1xuICAgIGFuaW1hdGVJbnN0YW5jZS5hbmltYXRlKGEucHJvcHMsIGEucGFyYW1zKTtcbiAgfVxuXG4gIHJldHVybiBlbHM7XG59XG5cbmZ1bmN0aW9uIHN0b3AoKSB7XG4gIHZhciBlbHMgPSB0aGlzO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZWxzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgaWYgKGVsc1tpXS5kb203QW5pbWF0ZUluc3RhbmNlKSB7XG4gICAgICBlbHNbaV0uZG9tN0FuaW1hdGVJbnN0YW5jZS5zdG9wKCk7XG4gICAgfVxuICB9XG59XG5cbnZhciBub1RyaWdnZXIgPSAncmVzaXplIHNjcm9sbCcuc3BsaXQoJyAnKTtcblxuZnVuY3Rpb24gc2hvcnRjdXQobmFtZSkge1xuICBmdW5jdGlvbiBldmVudEhhbmRsZXIoKSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgYXJnc1swXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBpZiAobm9UcmlnZ2VyLmluZGV4T2YobmFtZSkgPCAwKSB7XG4gICAgICAgICAgaWYgKG5hbWUgaW4gdGhpc1tpXSkgdGhpc1tpXVtuYW1lXSgpO2Vsc2Uge1xuICAgICAgICAgICAgJCh0aGlzW2ldKS50cmlnZ2VyKG5hbWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5vbi5hcHBseSh0aGlzLCBbbmFtZV0uY29uY2F0KGFyZ3MpKTtcbiAgfVxuXG4gIHJldHVybiBldmVudEhhbmRsZXI7XG59XG5cbnZhciBjbGljayA9IHNob3J0Y3V0KCdjbGljaycpO1xudmFyIGJsdXIgPSBzaG9ydGN1dCgnYmx1cicpO1xudmFyIGZvY3VzID0gc2hvcnRjdXQoJ2ZvY3VzJyk7XG52YXIgZm9jdXNpbiA9IHNob3J0Y3V0KCdmb2N1c2luJyk7XG52YXIgZm9jdXNvdXQgPSBzaG9ydGN1dCgnZm9jdXNvdXQnKTtcbnZhciBrZXl1cCA9IHNob3J0Y3V0KCdrZXl1cCcpO1xudmFyIGtleWRvd24gPSBzaG9ydGN1dCgna2V5ZG93bicpO1xudmFyIGtleXByZXNzID0gc2hvcnRjdXQoJ2tleXByZXNzJyk7XG52YXIgc3VibWl0ID0gc2hvcnRjdXQoJ3N1Ym1pdCcpO1xudmFyIGNoYW5nZSA9IHNob3J0Y3V0KCdjaGFuZ2UnKTtcbnZhciBtb3VzZWRvd24gPSBzaG9ydGN1dCgnbW91c2Vkb3duJyk7XG52YXIgbW91c2Vtb3ZlID0gc2hvcnRjdXQoJ21vdXNlbW92ZScpO1xudmFyIG1vdXNldXAgPSBzaG9ydGN1dCgnbW91c2V1cCcpO1xudmFyIG1vdXNlZW50ZXIgPSBzaG9ydGN1dCgnbW91c2VlbnRlcicpO1xudmFyIG1vdXNlbGVhdmUgPSBzaG9ydGN1dCgnbW91c2VsZWF2ZScpO1xudmFyIG1vdXNlb3V0ID0gc2hvcnRjdXQoJ21vdXNlb3V0Jyk7XG52YXIgbW91c2VvdmVyID0gc2hvcnRjdXQoJ21vdXNlb3ZlcicpO1xudmFyIHRvdWNoc3RhcnQgPSBzaG9ydGN1dCgndG91Y2hzdGFydCcpO1xudmFyIHRvdWNoZW5kID0gc2hvcnRjdXQoJ3RvdWNoZW5kJyk7XG52YXIgdG91Y2htb3ZlID0gc2hvcnRjdXQoJ3RvdWNobW92ZScpO1xudmFyIHJlc2l6ZSA9IHNob3J0Y3V0KCdyZXNpemUnKTtcbnZhciBzY3JvbGwgPSBzaG9ydGN1dCgnc2Nyb2xsJyk7XG5cbmV4cG9ydCBkZWZhdWx0ICQ7XG5leHBvcnQgeyAkLCBhZGQsIGFkZENsYXNzLCBhbmltYXRlLCBhbmltYXRpb25FbmQsIGFwcGVuZCwgYXBwZW5kVG8sIGF0dHIsIGJsdXIsIGNoYW5nZSwgY2hpbGRyZW4sIGNsaWNrLCBjbG9zZXN0LCBjc3MsIGRhdGEsIGRhdGFzZXQsIGRldGFjaCwgZWFjaCwgZW1wdHksIGVxLCBmaWx0ZXIsIGZpbmQsIGZvY3VzLCBmb2N1c2luLCBmb2N1c291dCwgaGFzQ2xhc3MsIGhlaWdodCwgaGlkZSwgaHRtbCwgaW5kZXgsIGluc2VydEFmdGVyLCBpbnNlcnRCZWZvcmUsIGlzLCBrZXlkb3duLCBrZXlwcmVzcywga2V5dXAsIG1vdXNlZG93biwgbW91c2VlbnRlciwgbW91c2VsZWF2ZSwgbW91c2Vtb3ZlLCBtb3VzZW91dCwgbW91c2VvdmVyLCBtb3VzZXVwLCBuZXh0LCBuZXh0QWxsLCBvZmYsIG9mZnNldCwgb24sIG9uY2UsIG91dGVySGVpZ2h0LCBvdXRlcldpZHRoLCBwYXJlbnQsIHBhcmVudHMsIHByZXBlbmQsIHByZXBlbmRUbywgcHJldiwgcHJldkFsbCwgcHJvcCwgcmVtb3ZlLCByZW1vdmVBdHRyLCByZW1vdmVDbGFzcywgcmVtb3ZlRGF0YSwgcmVzaXplLCBzY3JvbGwsIHNjcm9sbExlZnQsIHNjcm9sbFRvLCBzY3JvbGxUb3AsIHNob3csIHNpYmxpbmdzLCBzdG9wLCBzdHlsZXMsIHN1Ym1pdCwgdGV4dCwgdG9nZ2xlQ2xhc3MsIHRvdWNoZW5kLCB0b3VjaG1vdmUsIHRvdWNoc3RhcnQsIHRyYW5zZm9ybSwgdHJhbnNpdGlvbiwgdHJhbnNpdGlvbkVuZCwgdHJpZ2dlciwgdmFsLCB2YWx1ZSwgd2lkdGggfTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvaHRtbC1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2ZvbnRzLWljb25zLmNzc1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vaW1nL3N2Zy9sb2dvLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vaW1nL3BuZy9sb2dvLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4vaW1nL2pwZWcvcGljdHVyZS1kZXN0LmF2aWZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfNF9fXyA9IG5ldyBVUkwoXCIuL2ltZy9qcGVnL3BpY3R1cmUtdGFiLmF2aWZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfNV9fXyA9IG5ldyBVUkwoXCIuL2ltZy9qcGVnL3BpY3R1cmUtbW9iLmF2aWZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfNl9fXyA9IG5ldyBVUkwoXCIuL2ltZy9qcGVnL3BpY3R1cmUtZGVzdC53ZWJwXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzdfX18gPSBuZXcgVVJMKFwiLi9pbWcvanBlZy9waWN0dXJlLXRhYi53ZWJwXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzhfX18gPSBuZXcgVVJMKFwiLi9pbWcvanBlZy9waWN0dXJlLW1vYi53ZWJwXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzlfX18gPSBuZXcgVVJMKFwiLi9pbWcvanBlZy9waWN0dXJlLWRlc3QuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzEwX19fID0gbmV3IFVSTChcIi4vaW1nL2pwZWcvcGljdHVyZS10YWIuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzExX19fID0gbmV3IFVSTChcIi4vaW1nL2pwZWcvcGljdHVyZS1tb2IuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzEyX19fID0gbmV3IFVSTChcIi4vaW1nL2pwZWcvY3BzLWRlc3QuYXZpZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8xM19fXyA9IG5ldyBVUkwoXCIuL2ltZy9qcGVnL2Nwcy10YWIuYXZpZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8xNF9fXyA9IG5ldyBVUkwoXCIuL2ltZy9qcGVnL2Nwcy1tb2IuYXZpZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8xNV9fXyA9IG5ldyBVUkwoXCIuL2ltZy9qcGVnL2Nwcy1kZXN0LndlYnBcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfMTZfX18gPSBuZXcgVVJMKFwiLi9pbWcvanBlZy9jcHMtdGFiLndlYnBcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfMTdfX18gPSBuZXcgVVJMKFwiLi9pbWcvanBlZy9jcHMtbW9iLndlYnBcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfMThfX18gPSBuZXcgVVJMKFwiLi9pbWcvanBlZy9jcHMtZGVzdC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfMTlfX18gPSBuZXcgVVJMKFwiLi9pbWcvanBlZy9jcHMtdGFiLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8yMF9fXyA9IG5ldyBVUkwoXCIuL2ltZy9qcGVnL2Nwcy1tb2IuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzIxX19fID0gbmV3IFVSTChcIi4vaW1nL2pwZWcvY3BzZS1kZXN0LmF2aWZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfMjJfX18gPSBuZXcgVVJMKFwiLi9pbWcvanBlZy9jcHNlLXRhYi5hdmlmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzIzX19fID0gbmV3IFVSTChcIi4vaW1nL2pwZWcvY3BzZS1tb2IuYXZpZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8yNF9fXyA9IG5ldyBVUkwoXCIuL2ltZy9qcGVnL2Nwc2UtZGVzdC53ZWJwXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzI1X19fID0gbmV3IFVSTChcIi4vaW1nL2pwZWcvY3BzZS10YWIud2VicFwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8yNl9fXyA9IG5ldyBVUkwoXCIuL2ltZy9qcGVnL2Nwc2UtbW9iLndlYnBcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfMjdfX18gPSBuZXcgVVJMKFwiLi9pbWcvanBlZy9jcHNlLW1vYi5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfMjhfX18gPSBuZXcgVVJMKFwiLi9pbWcvanBlZy9lcy1kZXN0LmF2aWZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfMjlfX18gPSBuZXcgVVJMKFwiLi9pbWcvanBlZy9lcy10YWIuYXZpZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8zMF9fXyA9IG5ldyBVUkwoXCIuL2ltZy9qcGVnL2VzLW1vYi5hdmlmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzMxX19fID0gbmV3IFVSTChcIi4vaW1nL2pwZWcvZXMtZGVzdC53ZWJwXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzMyX19fID0gbmV3IFVSTChcIi4vaW1nL2pwZWcvZXMtdGFiLndlYnBcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfMzNfX18gPSBuZXcgVVJMKFwiLi9pbWcvanBlZy9lcy1tb2Iud2VicFwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8zNF9fXyA9IG5ldyBVUkwoXCIuL2ltZy9qcGVnL2VzLWRlc3QuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzM1X19fID0gbmV3IFVSTChcIi4vaW1nL2pwZWcvZXMtdGFiLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8zNl9fXyA9IG5ldyBVUkwoXCIuL2ltZy9qcGVnL2VzLW1vYi5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfMzdfX18gPSBuZXcgVVJMKFwiLi9pbWcvanBlZy/RgXVyc2VyYS1kZXN0LmF2aWZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfMzhfX18gPSBuZXcgVVJMKFwiLi9pbWcvanBlZy/RgXVyc2VyYS10YWIuYXZpZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8zOV9fXyA9IG5ldyBVUkwoXCIuL2ltZy9qcGVnL9GBdXJzZXJhLW1vYi5hdmlmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzQwX19fID0gbmV3IFVSTChcIi4vaW1nL2pwZWcv0YF1cnNlcmEtZGVzdC53ZWJwXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzQxX19fID0gbmV3IFVSTChcIi4vaW1nL2pwZWcv0YF1cnNlcmEtdGFiLndlYnBcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfNDJfX18gPSBuZXcgVVJMKFwiLi9pbWcvanBlZy/RgXVyc2VyYS1tb2Iud2VicFwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF80M19fXyA9IG5ldyBVUkwoXCIuL2ltZy9qcGVnL9GBdXJzZXJhLWRlc3QuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzQ0X19fID0gbmV3IFVSTChcIi4vaW1nL2pwZWcv0YF1cnNlcmEtdGFiLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF80NV9fXyA9IG5ldyBVUkwoXCIuL2ltZy9qcGVnL21heC1tb2IuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzQ2X19fID0gbmV3IFVSTChcIi4vaW1nL2pwZWcvbmV4dXMtZGVzdC5hdmlmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzQ3X19fID0gbmV3IFVSTChcIi4vaW1nL2pwZWcvbmV4dXMtdGFiLmF2aWZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfNDhfX18gPSBuZXcgVVJMKFwiLi9pbWcvanBlZy9uZXh1cy1tb2IuYXZpZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF80OV9fXyA9IG5ldyBVUkwoXCIuL2ltZy9qcGVnL25leHVzLWRlc3Qud2VicFwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF81MF9fXyA9IG5ldyBVUkwoXCIuL2ltZy9qcGVnL25leHVzLXRhYi53ZWJwXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzUxX19fID0gbmV3IFVSTChcIi4vaW1nL2pwZWcvbmV4dXMtbW9iLndlYnBcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfNTJfX18gPSBuZXcgVVJMKFwiLi9pbWcvanBlZy9uZXh1cy1kZXN0LmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF81M19fXyA9IG5ldyBVUkwoXCIuL2ltZy9qcGVnL25leHVzLXRhYi5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfNTRfX18gPSBuZXcgVVJMKFwiLi9pbWcvanBlZy9uZXh1cy1tb2IuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzU1X19fID0gbmV3IFVSTChcIi4vaW1nL3BuZy9sZW5vdmEucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzU2X19fID0gbmV3IFVSTChcIi4vaW1nL3BuZy9zYW1zdW5nLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF81N19fXyA9IG5ldyBVUkwoXCIuL2ltZy9wbmcvYXBwbGUucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzU4X19fID0gbmV3IFVSTChcIi4vaW1nL3BuZy92aWV3c29uaWNrLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF81OV9fXyA9IG5ldyBVUkwoXCIuL2ltZy9wbmcvYm9zY2gucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzYwX19fID0gbmV3IFVSTChcIi4vaW1nL3BuZy9ocC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfNjFfX18gPSBuZXcgVVJMKFwiLi9pbWcvcG5nL2FjZXIucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzYyX19fID0gbmV3IFVSTChcIi4vaW1nL3BuZy9zb255LnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xuLy8gTW9kdWxlXG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzBfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzFfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF8xX19fKTtcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8yX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMl9fXyk7XG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzNfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzRfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF80X19fKTtcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF81X19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfNV9fXyk7XG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfNl9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzZfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzdfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF83X19fKTtcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF84X19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfOF9fXyk7XG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfOV9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzlfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzEwX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMTBfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzExX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMTFfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzEyX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMTJfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzEzX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMTNfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzE0X19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMTRfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzE1X19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMTVfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzE2X19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMTZfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzE3X19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMTdfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzE4X19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMThfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzE5X19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMTlfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzIwX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMjBfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzIxX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMjFfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzIyX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMjJfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzIzX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMjNfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzI0X19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMjRfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzI1X19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMjVfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzI2X19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMjZfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzI3X19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMjdfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzI4X19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMjhfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzI5X19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMjlfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzMwX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMzBfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzMxX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMzFfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzMyX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMzJfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzMzX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMzNfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzM0X19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMzRfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzM1X19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMzVfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzM2X19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMzZfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzM3X19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMzdfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzM4X19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMzhfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzM5X19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMzlfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzQwX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfNDBfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzQxX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfNDFfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzQyX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfNDJfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzQzX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfNDNfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzQ0X19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfNDRfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzQ1X19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfNDVfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzQ2X19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfNDZfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzQ3X19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfNDdfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzQ4X19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfNDhfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzQ5X19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfNDlfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzUwX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfNTBfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzUxX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfNTFfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzUyX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfNTJfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzUzX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfNTNfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzU0X19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfNTRfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzU1X19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfNTVfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzU2X19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfNTZfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzU3X19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfNTdfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzU4X19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfNThfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzU5X19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfNTlfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzYwX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfNjBfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzYxX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfNjFfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzYyX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfNjJfX18pO1xudmFyIGNvZGUgPSBcIjwhRE9DVFlQRSBodG1sPlxcclxcbjxodG1sIGxhbmc9XFxcInJ1XFxcIj5cXHJcXG48aGVhZD5cXHJcXG5cXHQ8bWV0YSBjaGFyc2V0PVxcXCJVVEYtOFxcXCI+XFxyXFxuXFx0PG1ldGEgaHR0cC1lcXVpdj1cXFwiWC1VQS1Db21wYXRpYmxlXFxcIiBjb250ZW50PVxcXCJJRT1lZGdlXFxcIj5cXHJcXG5cXHQ8bWV0YSBuYW1lPVxcXCJ2aWV3cG9ydFxcXCIgY29udGVudD1cXFwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFxcXCI+XFxyXFxuXFx0PG1ldGEgbmFtZT1cXFwia2V5d29yZHNcXFwiIGNvbnRlbnQ9XFxcIkhUTUwgQ1NTIEpTIHRlc3QtdGFza1xcXCI+IFxcclxcblxcdDxtZXRhIG5hbWU9XFxcImRlc2NyaXB0aW9uXFxcIiBjb250ZW50PVxcXCLQotC10YHRgtC+0LLQvtC1INC30LDQtNCw0L3QuNC1INC/0L4g0LzQvtC00YPQu9GPIFdlYiBjb3JlXFxcIj4gXFxyXFxuXFx0PHRpdGxlPkJsb2NrIDEuNi9TYXZpbm92INCQLtCeLjwvdGl0bGU+XFxyXFxuXFx0PGxpbmsgcmVsPVxcXCJzdHlsZXNoZWV0XFxcIiBocmVmPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzBfX18gKyBcIlxcXCI+XFxyXFxuPC9oZWFkPlxcclxcbjxib2R5IG9uY2xpY2s9XFxcIlxcXCI+XFxyXFxuXFxyXFxuXFx0PCEtLSDQpdC10LTQtdGAIC0tPlxcclxcblxcdDxoZWFkZXIgY2xhc3M9XFxcImNwcy1oZWFkZXJcXFwiPlxcclxcblxcdFxcdDxhIGNsYXNzPVxcXCJjcHMtaGVhZGVyX19sb2dvIGNwcy1sb2dvXFxcIiBocmVmPVxcXCJpbmRleC5odG1sXFxcIj5cXHJcXG5cXHRcXHRcXHQ8cGljdHVyZT5cXHJcXG5cXHRcXHRcXHRcXHQ8c291cmNlIHNyY3NldD1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8xX19fICsgXCJcXFwiIHR5cGU9XFxcImltYWdlL3N2Z1xcXCI+XFxyXFxuXFx0XFx0XFx0XFx0PGltZyBjbGFzcz1cXFwiY3BzLWxvZ29fX2ltZ1xcXCIgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzJfX18gKyBcIlxcXCIgYWx0PVxcXCLQm9C+0LPQvtGC0LjQvyBDUFNcXFwiIHdpZHRoPVxcXCI5N1xcXCIgaGVpZ2h0PVxcXCI1MVxcXCI+XFxyXFxuXFx0XFx0XFx0PC9waWN0dXJlPlxcclxcblxcdFxcdDwvYT5cXHJcXG5cXHRcXHQ8dWwgY2xhc3M9XFxcImNwcy1oZWFkZXJfX2ZiIGZiLWNvbnRlaW5lclxcXCI+XFxyXFxuXFx0XFx0XFx0PGxpIGNsYXNzPVxcXCJmYi1jb250ZWluZXJfX2l0ZW1cXFwiPlxcclxcblxcdFxcdFxcdFxcdDxidXR0b24gY2xhc3M9XFxcImZiLWNvbnRlaW5lcl9fbGluayBmYi1jb250ZWluZXJfX2xpbmstZmIgYnV0dG9uLWpzLW9wZW4gaWNvbi1yZXBhaXJcXFwiIGRhdGEtcGF0aD1cXFwib25lLWJ0blxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PHNwYW4gY2xhc3M9XFxcImZiLWNvbnRlaW5lcl9fdGV4dCB2aXN1YWxseS1oaWRkZW5cXFwiPtCe0YHRgtCw0LLQuNGC0Ywg0LfQsNGP0LLQutGDPC9zcGFuPlxcclxcblxcdFxcdFxcdFxcdDwvYnV0dG9uPiAgXFxyXFxuXFx0XFx0XFx0PC9saT5cXHJcXG5cXHRcXHRcXHQ8bGkgY2xhc3M9XFxcImZiLWNvbnRlaW5lcl9faXRlbVxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0PGJ1dHRvbiBjbGFzcz1cXFwiZmItY29udGVpbmVyX19saW5rIGZiLWNvbnRlaW5lcl9fbGluay1jYWxsIGJ1dHRvbi1qcy1vcGVuIGljb24tc2VhcmNoLWhlYWRlclxcXCIgZGF0YS1wYXRoPVxcXCJ0d28tYnRuXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8c3BhbiBjbGFzcz1cXFwiZmItY29udGVpbmVyX190ZXh0IHZpc3VhbGx5LWhpZGRlblxcXCI+0KHRgtCw0YLRg9GBINGA0LXQvNC+0L3RgtCwPC9zcGFuPlxcclxcblxcdFxcdFxcdFxcdDwvYnV0dG9uPlxcclxcblxcdFxcdFxcdDwvbGk+XFxyXFxuXFx0XFx0PC91bD5cXHJcXG5cXHRcXHQ8dWwgY2xhc3M9XFxcImNwcy1oZWFkZXJfX2NvbnRhY3RzIGNvbnRhY3RzLWNvbnRlaW5lclxcXCI+XFxyXFxuXFx0XFx0XFx0PGxpIGNsYXNzPVxcXCJjb250YWN0cy1jb250ZWluZXJfX2l0ZW1cXFwiPlxcclxcblxcdFxcdFxcdFxcdDxidXR0b24gY2xhc3M9XFxcImJ1dHRvbi1qcy1vcGVuIGNvbnRhY3RzLWNvbnRlaW5lcl9fbGluayBpY29uLXBob25lXFxcIiBkYXRhLXBhdGg9XFxcInRocmVlLWJ0blxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PHNwYW4gY2xhc3M9XFxcInZpc3VhbGx5LWhpZGRlblxcXCI+0JfQsNC60LDQt9Cw0YLRjCDQt9Cy0L7QvdC+0Lo8L3NwYW4+XFxyXFxuXFx0XFx0XFx0XFx0PC9idXR0b24+XFxyXFxuXFx0XFx0XFx0PC9saT5cXHJcXG5cXHRcXHRcXHQ8bGkgY2xhc3M9XFxcImNvbnRhY3RzLWNvbnRlaW5lcl9faXRlbVxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0PGJ1dHRvbiBjbGFzcz1cXFwiYnV0dG9uLWpzLW9wZW4gY29udGFjdHMtY29udGVpbmVyX19saW5rIGljb24tY2hhdFxcXCIgZGF0YS1wYXRoPVxcXCJmb3VyLWJ0blxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PHNwYW4gY2xhc3M9XFxcInZpc3VhbGx5LWhpZGRlblxcXCI+0J3QsNGH0LDRgtGMINGH0LDRgjwvc3Bhbj5cXHJcXG5cXHRcXHRcXHRcXHQ8L2J1dHRvbj5cXHJcXG5cXHRcXHRcXHQ8L2xpPiBcXHJcXG5cXHRcXHRcXHQ8bGkgY2xhc3M9XFxcImNvbnRhY3RzLWNvbnRlaW5lcl9faXRlbVxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0PGJ1dHRvbiBjbGFzcz1cXFwiYnV0dG9uLWpzLW9wZW4gY29udGFjdHMtY29udGVpbmVyX19saW5rIGljb24tcHJvZmlsZVxcXCIgZGF0YS1wYXRoPVxcXCJmaXZlLWJ0blxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PHNwYW4gY2xhc3M9XFxcInZpc3VhbGx5LWhpZGRlblxcXCI+0JLRhdC+0LQg0JvQuNGH0L3Ri9C5INC60LDQsdC40L3QtdGCPC9zcGFuPlxcclxcblxcdFxcdFxcdFxcdDwvYnV0dG9uPlxcclxcblxcdFxcdFxcdDwvbGk+XFxyXFxuXFx0XFx0PC91bD5cXHJcXG5cXHRcXHQ8YnV0dG9uIGNsYXNzPVxcXCJidXR0b24tanMtb3BlbiBjcHMtaGVhZGVyX19idG4gYnRuLW9wZW5cXFwiIGRhdGEtcGF0aD1cXFwic2l4LWJ0blxcXCI+XFxyXFxuXFx0XFx0XFx0PHNwYW4gY2xhc3M9XFxcInZpc3VhbGx5LWhpZGRlblxcXCI+0J7RgtC60YDRi9GC0Ywg0LzQtdC90Y48L3NwYW4+XFxyXFxuXFx0XFx0XFx0PHNwYW4gY2xhc3M9XFxcImJ0bi1vcGVuX19lbG0tYnRuXFxcIj48L3NwYW4+XFxyXFxuXFx0XFx0PC9idXR0b24+XFxyXFxuXFx0PC9oZWFkZXI+XFxyXFxuXFxyXFxuXFx0PCEtLSDQsdC+0LrQvtCy0LDRjyDQv9Cw0L3QtdC70Ywg0L3QsNCy0LjQs9Cw0YbQuNC4IC0tPlxcclxcblxcdDxhc2lkZSBjbGFzcz1cXFwiY3BzLWFzaWRlIGJsb2stanMtYWN0aXZlXFxcIiBkYXRhLXRhcmdldD1cXFwic2l4LWJ0blxcXCI+XFxyXFxuXFx0XFx0PGRpdiBjbGFzcz1cXFwiY3BzLWFzaWRlX19oZWFkZXJcXFwiPlxcclxcblxcdFxcdFxcdDxidXR0b24gY2xhc3M9XFxcImNwcy1hc2lkZV9fYnRuLWNsb3NlIGJ1dHRvbi1qcy1vcGVuIGJ0bi1jbG9zZVxcXCIgZGF0YS1wYXRoPVxcXCJidG4tY2xvc2Utb25lXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHQ8c3BhbiBjbGFzcz1cXFwidmlzdWFsbHktaGlkZGVuXFxcIj7Ql9Cw0LrRgNGL0YLRjCDQvNC10L3Rjjwvc3Bhbj5cXHJcXG5cXHRcXHRcXHRcXHQ8c3BhbiBjbGFzcz1cXFwiYnRuLWNsb3NlX19lbG0tYnRuXFxcIj48L3NwYW4+XFxyXFxuXFx0XFx0XFx0PC9idXR0b24+XFxyXFxuXFx0XFx0XFx0PGEgY2xhc3M9XFxcImNwcy1hc2lkZV9fbG9nbyBjcHMtbG9nb1xcXCIgaHJlZj1cXFwiaW5kZXguaHRtbFxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0PHBpY3R1cmU+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PHNvdXJjZSBzcmNzZXQ9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMV9fXyArIFwiXFxcIiB0eXBlPVxcXCJpbWFnZS9zdmdcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdDxpbWcgY2xhc3M9XFxcImNwcy1sb2dvX19pbWdcXFwiIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8yX19fICsgXCJcXFwiIGFsdD1cXFwi0JvQvtCz0L7RgtC40L8gQ1BTXFxcIiB3aWR0aD1cXFwiOTdcXFwiIGhlaWdodD1cXFwiNTFcXFwiPlxcclxcblxcdFxcdFxcdFxcdDwvcGljdHVyZT5cXHJcXG5cXHRcXHRcXHQ8L2E+XFxyXFxuXFx0XFx0XFx0PGJ1dHRvbiBjbGFzcz1cXFwiY3BzLWFzaWRlX19zZWFyY2ggYnV0dG9uIGljb24tc2VhcmNoLWFzaWRlIGJ1dHRvbi1qcy1vcGVuXFxcIiBkYXRhLXBhdGg9XFxcInNldmVuLWJ0blxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0PHNwYW4gY2xhc3M9XFxcInZpc3VhbGx5LWhpZGRlblxcXCI+0L/QvtC40YHQujwvc3Bhbj5cXHJcXG5cXHRcXHRcXHQ8L2J1dHRvbj5cXHJcXG5cXHRcXHQ8L2Rpdj5cXHJcXG5cXHRcXHQ8bmF2IGNsYXNzPVxcXCJjcHMtYXNpZGVfX25hdi1hc2lkZSBuYXYtbWVudVxcXCI+XFxyXFxuXFx0XFx0XFx0PHVsIGNsYXNzPVxcXCJuYXYtbWVudV9fbGlzdFxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0PGxpIGNsYXNzPVxcXCJuYXYtbWVudV9faXRlbVxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PGEgY2xhc3M9XFxcIm5hdi1tZW51X19saW5rIG5hdi1tZW51X19saW5rLS1hY3RpdmVcXFwiIGhyZWY9XFxcImluZGV4Lmh0bWxcXFwiPtCg0LXQvNC+0L3RgiDRgtC10YXQvdC40LrQuDwvYT5cXHJcXG5cXHRcXHRcXHRcXHQ8L2xpPlxcclxcblxcdFxcdFxcdFxcdDxsaSBjbGFzcz1cXFwibmF2LW1lbnVfX2l0ZW1cXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdDxhIGNsYXNzPVxcXCJuYXYtbWVudV9fbGlua1xcXCIgaHJlZj1cXFwiI1xcXCI+0KPRgdC70YPQs9C4INC4INCh0LXRgNCy0LjRgdGLPC9hPlxcclxcblxcdFxcdFxcdFxcdDwvbGk+XFxyXFxuXFx0XFx0XFx0XFx0PGxpIGNsYXNzPVxcXCJuYXYtbWVudV9faXRlbVxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PGEgY2xhc3M9XFxcIm5hdi1tZW51X19saW5rXFxcIiBocmVmPVxcXCIjXFxcIj7QmtC+0YDQv9C+0YDQsNGC0LjQstC90YvQvCDQutC70LjQtdC90YLRizwvYT5cXHJcXG5cXHRcXHRcXHRcXHQ8L2xpPlxcclxcblxcdFxcdFxcdFxcdDxsaSBjbGFzcz1cXFwibmF2LW1lbnVfX2l0ZW1cXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdDxhIGNsYXNzPVxcXCJuYXYtbWVudV9fbGlua1xcXCIgaHJlZj1cXFwiI1xcXCI+0J/RgNC+0LTQsNCy0YbQsNC8INGC0LXRhdC90LjQutC4PC9hPlxcclxcblxcdFxcdFxcdFxcdDwvbGk+XFxyXFxuXFx0XFx0XFx0XFx0PGxpIGNsYXNzPVxcXCJuYXYtbWVudV9faXRlbVxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PGEgY2xhc3M9XFxcIm5hdi1tZW51X19saW5rXFxcIiBocmVmPVxcXCIjXFxcIj7Qn9Cw0YDRgtC90LXRgNCw0Lw8L2E+XFxyXFxuXFx0XFx0XFx0XFx0PC9saT5cXHJcXG5cXHRcXHRcXHRcXHQ8bGkgY2xhc3M9XFxcIm5hdi1tZW51X19pdGVtXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8YSBjbGFzcz1cXFwibmF2LW1lbnVfX2xpbmtcXFwiIGhyZWY9XFxcIiNcXFwiPtCf0YDQvtC40LfQstC+0LTQuNGC0LXQu9GP0Lw8L2E+XFxyXFxuXFx0XFx0XFx0XFx0PC9saT5cXHJcXG5cXHRcXHRcXHRcXHQ8bGkgY2xhc3M9XFxcIm5hdi1tZW51X19pdGVtXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8YSBjbGFzcz1cXFwibmF2LW1lbnVfX2xpbmtcXFwiIGhyZWY9XFxcIiNcXFwiPtCd0LDRiNC4INGB0LXRgNCy0LXRgdC90YvQtSDRhtC10L3RgtGA0Ys8L2E+XFxyXFxuXFx0XFx0XFx0XFx0PC9saT5cXHJcXG5cXHRcXHRcXHRcXHQ8bGkgY2xhc3M9XFxcIm5hdi1tZW51X19pdGVtXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8YSBjbGFzcz1cXFwibmF2LW1lbnVfX2xpbmtcXFwiIGhyZWY9XFxcIiNcXFwiPtCa0L7QvdGC0LDQutGC0Ys8L2E+XFxyXFxuXFx0XFx0XFx0XFx0PC9saT5cXHJcXG5cXHRcXHRcXHQ8L3VsPlxcclxcblxcdFxcdDwvbmF2PlxcclxcblxcdFxcdDx1bCBjbGFzcz1cXFwiY3BzLWFzaWRlX19jb250YWN0cyBjb250YWN0cy1jb250ZWluZXJcXFwiPlxcclxcblxcdFxcdFxcdDxsaSBjbGFzcz1cXFwiY29udGFjdHMtY29udGVpbmVyX19pdGVtXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHQ8YnV0dG9uIGNsYXNzPVxcXCJidXR0b24tanMtb3BlbiBjb250YWN0cy1jb250ZWluZXJfX2xpbmsgaWNvbi1waG9uZVxcXCIgZGF0YS1wYXRoPVxcXCJ0aHJlZS1idG5cXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdDxzcGFuIGNsYXNzPVxcXCJ2aXN1YWxseS1oaWRkZW5cXFwiPtCX0LDQutCw0LfQsNGC0Ywg0LfQstC+0L3QvtC6PC9zcGFuPlxcclxcblxcdFxcdFxcdFxcdDwvYnV0dG9uPlxcclxcblxcdFxcdFxcdDwvbGk+XFxyXFxuXFx0XFx0XFx0PGxpIGNsYXNzPVxcXCJjb250YWN0cy1jb250ZWluZXJfX2l0ZW1cXFwiPlxcclxcblxcdFxcdFxcdFxcdDxidXR0b24gY2xhc3M9XFxcImJ1dHRvbi1qcy1vcGVuIGNvbnRhY3RzLWNvbnRlaW5lcl9fbGluayBpY29uLWNoYXRcXFwiIGRhdGEtcGF0aD1cXFwiZm91ci1idG5cXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdDxzcGFuIGNsYXNzPVxcXCJ2aXN1YWxseS1oaWRkZW5cXFwiPtCd0LDRh9Cw0YLRjCDRh9Cw0YI8L3NwYW4+XFxyXFxuXFx0XFx0XFx0XFx0PC9idXR0b24+XFxyXFxuXFx0XFx0XFx0PC9saT4gXFxyXFxuXFx0XFx0XFx0PGxpIGNsYXNzPVxcXCJjb250YWN0cy1jb250ZWluZXJfX2l0ZW1cXFwiPlxcclxcblxcdFxcdFxcdFxcdDxidXR0b24gY2xhc3M9XFxcImJ1dHRvbi1qcy1vcGVuIGNvbnRhY3RzLWNvbnRlaW5lcl9fbGluayBpY29uLXByb2ZpbGVcXFwiIGRhdGEtcGF0aD1cXFwiZml2ZS1idG5cXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdDxzcGFuIGNsYXNzPVxcXCJ2aXN1YWxseS1oaWRkZW5cXFwiPtCS0YXQvtC0INCb0LjRh9C90YvQuSDQutCw0LHQuNC90LXRgjwvc3Bhbj5cXHJcXG5cXHRcXHRcXHRcXHQ8L2J1dHRvbj5cXHJcXG5cXHRcXHRcXHQ8L2xpPlxcclxcblxcdFxcdDwvdWw+XFxyXFxuXFx0XFx0PHVsIGNsYXNzPVxcXCJjcHMtYXNpZGVfX2NvbnRhY3RzLWxpc3QgY29udGFjdHMtbGlzdFxcXCI+XFxyXFxuXFx0XFx0XFx0PGxpIGNsYXNzPVxcXCJjb250YWN0cy1saXN0X19pdGVtXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHQ8YSBjbGFzcz1cXFwiY29udGFjdHMtbGlzdF9fbGluayBjb250YWN0cy1saXN0X19lbWFpbFxcXCIgaHJlZj1cXFwibWFpbHRvOm1haWxAY3BzLmNvbVxcXCI+bWFpbEBjcHMuY29tPC9hPlxcclxcblxcdFxcdFxcdDwvbGk+XFxyXFxuXFx0XFx0XFx0PGxpIGNsYXNzPVxcXCJjb250YWN0cy1saXN0X19pdGVtXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHQ8YSBjbGFzcz1cXFwiY29udGFjdHMtbGlzdF9fbGluayBjb250YWN0cy1saXN0X19waG9uZVxcXCIgaHJlZj1cXFwidGVsOjg4MDA4OTA4OTAwXFxcIj44IDgwMCA4OTAgODkwMDwvYT5cXHJcXG5cXHRcXHRcXHQ8L2xpPlxcclxcblxcdFxcdDwvdWw+XFxyXFxuXFx0XFx0PHVsIGNsYXNzPVxcXCJjcHMtYXNpZGVfX2xhbmd1YWdlLWNvbnRlaW5lciBsYW5ndWFnZS1saXN0XFxcIj5cXHJcXG5cXHRcXHRcXHQ8bGkgY2xhc3M9XFxcImxhbmd1YWdlLWxpc3RfX2l0ZW1cXFwiPlxcclxcblxcdFxcdFxcdFxcdDxhIGNsYXNzPVxcXCJsYW5ndWFnZS1saXN0X19saW5rIGxhbmd1YWdlLWxpc3RfX2xpbmstLWFjdGl2ZVxcXCIgaHJlZj1cXFwiaW5kZXguaHRtbFxcXCI+cnU8L2E+XFxyXFxuXFx0XFx0XFx0PC9saT5cXHJcXG5cXHRcXHRcXHQ8bGkgY2xhc3M9XFxcImxhbmd1YWdlLWxpc3RfX2l0ZW1cXFwiPlxcclxcblxcdFxcdFxcdFxcdDxhIGNsYXNzPVxcXCJsYW5ndWFnZS1saXN0X19saW5rXFxcIiBocmVmPVxcXCIjXFxcIj5lbjwvYT5cXHJcXG5cXHRcXHRcXHQ8L2xpPlxcclxcblxcdFxcdFxcdDxsaSBjbGFzcz1cXFwibGFuZ3VhZ2UtbGlzdF9faXRlbVxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0PGEgY2xhc3M9XFxcImxhbmd1YWdlLWxpc3RfX2xpbmtcXFwiIGhyZWY9XFxcIiNcXFwiPmNoPC9hPlxcclxcblxcdFxcdFxcdDwvbGk+XFxyXFxuXFx0XFx0PC91bD5cXHJcXG5cXHRcXHQ8ZGl2IGNsYXNzPVxcXCJjcHMtanMtYmcgY3BzLWFzaWRlX19iZ1xcXCI+PC9kaXY+XFxyXFxuXFx0PC9hc2lkZT5cXHJcXG5cXHJcXG5cXHQ8IS0tINCT0LvQsNCy0L3Ri9C5INC60L7QvdGC0LXQudC90LXRgCAtLT5cXHJcXG5cXHQ8bWFpbiBjbGFzcz1cXFwiY3BzLW1haW5cXFwiPlxcclxcblxcclxcblxcdFxcdDwhLS0g0KHQtdC60YbQuNGPINC60L7QvdGC0LXQvdGC0LAgLS0+XFxyXFxuXFx0XFx0PHNlY3Rpb24gY2xhc3M9XFxcInNlcnZlYy1jb250ZW50XFxcIj5cXHJcXG5cXHJcXG5cXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJzZXJ2ZWMtY29udGVudF9faGVhZGVyXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHQ8aDEgY2xhc3M9XFxcInNlcnZlYy1jb250ZW50X190aXRsZVxcXCI+0KPRgdC70YPQs9C4INC4INGB0LXRgNCy0LjRgdGLPC9oMT5cXHJcXG5cXHRcXHRcXHRcXHQ8dWwgY2xhc3M9XFxcInNlcnZlYy1jb250ZW50X19mZWVkYmFjay1zZXJ2ZWMgZmVlZGJhY2stc2VydmVjXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8bGkgY2xhc3M9XFxcImZlZWRiYWNrLXNlcnZlY19faXRlbVxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PGJ1dHRvbiBjbGFzcz1cXFwiZmVlZGJhY2stc2VydmVjX19saW5rIGJ1dHRvbi1qcy1vcGVuXFxcIiBkYXRhLXBhdGg9XFxcIm9uZS1idG5cXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdDxzcGFuIGNsYXNzPVxcXCJmZWVkYmFjay1zZXJ2ZWNfX3RleHRcXFwiPtCe0YHRgtCw0LLQuNGC0Ywg0LfQsNGP0LLQutGDPC9zcGFuPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdDxpIGNsYXNzPVxcXCJmZWVkYmFjay1zZXJ2ZWNfX2ljb24gaWNvbi1yZXBhaXJcXFwiPjwvaT5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8L2J1dHRvbj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8L2xpPlxcclxcblxcdFxcdFxcdFxcdFxcdDxsaSBjbGFzcz1cXFwiZmVlZGJhY2stc2VydmVjX19pdGVtXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8YnV0dG9uIGNsYXNzPVxcXCJmZWVkYmFjay1zZXJ2ZWNfX2xpbmsgYnV0dG9uLWpzLW9wZW5cXFwiIGRhdGEtcGF0aD1cXFwidHdvLWJ0blxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0PHNwYW4gY2xhc3M9XFxcImZlZWRiYWNrLXNlcnZlY19fdGV4dFxcXCI+0KHRgtCw0YLRg9GBINGA0LXQvNC+0L3RgtCwPC9zcGFuPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdDxpIGNsYXNzPVxcXCJmZWVkYmFjay1zZXJ2ZWNfX2ljb24gaWNvbi1zZWFyY2gtaGVhZGVyXFxcIj48L2k+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PC9idXR0b24+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PC9saT5cXHJcXG5cXHRcXHRcXHRcXHQ8L3VsPlxcclxcblxcdFxcdFxcdDwvZGl2PlxcclxcblxcdFxcdFxcdFxcclxcblxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcInN3aXBlci1jb250YWluZXIgc3dpcGVyLWNvbnRhaW5lci0tc2VydmljZVxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0PHVsIGNsYXNzPVxcXCJzd2lwZXItd3JhcHBlciBzZXJ2ZWMtY29udGVudF9fc2VydmljZS1saXN0IHNlcnZpY2UtbGlzdFxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PGxpIGNsYXNzPVxcXCJzZXJ2aWNlLWxpc3RfX2l0ZW0gc3dpcGVyLXNsaWRlXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8YSBjbGFzcz1cXFwic2VydmljZS1saXN0X19saW5rIHNlcnZpY2UtbGlzdF9fbGluay0tYWN0aXZlXFxcIiBocmVmPVxcXCIjXFxcIiBkYXRhLXBhdGg9XFxcIm9uZVxcXCI+0KDQtdC80L7QvdGC0LjRgNGD0LXQvNGL0LUg0LHRgNC10L3QtNGLPC9hPlxcclxcblxcdFxcdFxcdFxcdFxcdDwvbGk+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PGxpIGNsYXNzPVxcXCJzZXJ2aWNlLWxpc3RfX2l0ZW0gc3dpcGVyLXNsaWRlXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8YSBjbGFzcz1cXFwic2VydmljZS1saXN0X19saW5rXFxcIiBocmVmPVxcXCIjXFxcIiBkYXRhLXBhdGg9XFxcInR3b1xcXCI+0KDQtdC80L7QvdGC0LjRgNGD0LXQvNGL0LUg0YPRgdGC0YDQvtC5PC9hPlxcclxcblxcdFxcdFxcdFxcdFxcdDwvbGk+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PGxpIGNsYXNzPVxcXCJzZXJ2aWNlLWxpc3RfX2l0ZW0gc3dpcGVyLXNsaWRlXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8YSBjbGFzcz1cXFwic2VydmljZS1saXN0X19saW5rXFxcIiBocmVmPVxcXCIjXFxcIiBkYXRhLXBhdGg9XFxcInRocmVlXFxcIj7QptC10L3RiyDQvdCwINGD0YHQu9GD0LPQuDwvYT5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8L2xpPlxcclxcblxcdFxcdFxcdFxcdFxcdDxsaSBjbGFzcz1cXFwic2VydmljZS1saXN0X19pdGVtIHN3aXBlci1zbGlkZVxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PGEgY2xhc3M9XFxcInNlcnZpY2UtbGlzdF9fbGlua1xcXCIgaHJlZj1cXFwiI1xcXCIgZGF0YS1wYXRoPVxcXCJmb3VyXFxcIj7QkNC00YDQtdGB0LAg0YHQtdGA0LLQtdGB0L3Ri9GFINGG0LXQvdGC0YDQvtCyPC9hPlxcclxcblxcdFxcdFxcdFxcdFxcdDwvbGk+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PGxpIGNsYXNzPVxcXCJzZXJ2aWNlLWxpc3RfX2l0ZW0gc3dpcGVyLXNsaWRlXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8YSBjbGFzcz1cXFwic2VydmljZS1saXN0X19saW5rXFxcIiBocmVmPVxcXCIjXFxcIiBkYXRhLXBhdGg9XFxcImZpdmVcXFwiPtCh0L/QtdGG0LjQsNC70YzQvdGL0LUg0YbQtdC90Ys8L2E+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PC9saT5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8bGkgY2xhc3M9XFxcInNlcnZpY2UtbGlzdF9faXRlbSBzd2lwZXItc2xpZGVcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDxhIGNsYXNzPVxcXCJzZXJ2aWNlLWxpc3RfX2xpbmtcXFwiIGhyZWY9XFxcIiNcXFwiIGRhdGEtcGF0aD1cXFwic2l4XFxcIj7QntGC0LfQvtCy0Ys8L2E+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PC9saT5cXHJcXG5cXHRcXHRcXHRcXHQ8L3VsPlxcclxcblxcdFxcdFxcdDwvZGl2PlxcclxcblxcclxcblxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcInNlcnZlYy1jb250ZW50X19zZXJ2aWNlLWl0ZW0gc2VydmljZS1pdGVtIHNlcnZpY2VzLWl0ZW0tLWFjdGl2ZVxcXCIgZGF0YS10YXJnZXQ9XFxcIm9uZVxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0PGRpdj5cXHJcXG5cXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJzZXJ2aWNlLWl0ZW1fX3dyYXBwXFxcIiBkYXRhLXRhcmdldD1cXFwidGhyZWUtYWxsb3BlblxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PHAgY2xhc3M9XFxcInNlcnZpY2UtaXRlbV9fdGV4dFxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx00JzRiyDRj9Cy0LvRj9C10LzRgdGPINCw0LLRgtC+0YDQuNC30L7QstCw0L3QvdGL0Lwg0YHQtdGA0LLQuNGB0L3Ri9C8INGG0LXQvdGC0YDQvtC8INC/0L4g0YDQtdC80L7QvdGC0YMg0YLQtdGF0L3QuNC60LggRGVsbC4g0KLQvtC70YzQutC+INGDINC90LDRgSDQstGLINC80L7QttC10YLQtSDQvtGC0YDQtdC80L7QvdGC0LjRgNC+0LLQsNGC0Ywg0YHQstC+0Lkg0L3QvtGD0YLQsdGD0LogRGVsbCDRgSDQvtGE0LjRhtC40LDQu9GM0L3QvtC5INCz0LDRgNCw0L3RgtC40LXQuSDQv9GA0L7QuNC30LLQvtC00LjRgtC10LvRjy5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8L3A+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PHAgY2xhc3M9XFxcInNlcnZpY2UtaXRlbV9fdGV4dCBzZXJ2aWNlLWl0ZW1fX3RleHQtLXZpc3VhbGx5LWhpZGRlblxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx00JzRiyDRg9GB0L/QtdGI0L3QviDRgNCw0LHQvtGC0LDQtdC8INGBIDE5OTIg0LPQvtC00LAg0Lgg0LfQsNGB0LvRg9C20LjQu9C4INGA0LXQv9GD0YLQsNGG0LjRjiDQvdCw0LTQtdC20L3QvtCz0L4g0L/QsNGA0YLQvdC10YDQsCwg0YfRgtC+INC/0L7QtNGC0LLQtdGA0LbQtNCw0LXRgiDQsdC+0LvRjNGI0L7QtSDQutC+0LvQuNGH0LXRgdGC0LLQviDQv9C+0YHRgtC+0Y/QvdC90YvRhSDQutC70LjQtdC90YLQvtCyLiDQnNGLINCz0L7RgNC00LjQvNGB0Y8g0YLQtdC8LCDRh9GC0L4g0Log0L3QsNC8INC+0LHRgNCw0YnQsNGO0YLRgdGPINC/0L4g0YDQtdC60L7QvNC10L3QtNCw0YbQuNGP0Lwg0LgsINCyINGB0LLQvtGOINC+0YfQtdGA0LXQtNGMLCDRgdC+0LLQtdGC0YPRjtGCINC90LDRgSDRgNC+0LTQvdGL0Lwg0Lgg0LHQu9C40LfQutC40LwuXFxyXFxuXFx0XFx0XFx0XFx0XFx0PC9wPlxcclxcblxcdFxcdFxcdFxcdDwvZGl2PlxcclxcblxcdFxcdFxcdFxcdDxidXR0b24gY2xhc3M9XFxcInNlcnZpY2UtYnJhbmRzX19saW5rIHNlcnZpY2UtaXRlbV9fbGluayBpY29uLWV4cGFuZFxcXCIgZGF0YS1wYXRoPVxcXCJ0aHJlZS1hbGxvcGVuXFxcIiA+0KfQuNGC0LDRgtGMINC00LDQu9GM0YjQtTwvYnV0dG9uPlxcclxcblxcdFxcdFxcdDwvZGl2PlxcclxcblxcdFxcdFxcdFxcdDxwaWN0dXJlIGNsYXNzPVxcXCJzZXJ2aWNlLWl0ZW1fX2ltZ1xcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PHNvdXJjZSB0eXBlPVxcXCJpbWFnZS9hdmlmXFxcIiBzcmNzZXQ9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfM19fXyArIFwiXFxcIiBtZWRpYT1cXFwiKG1pbi13aWR0aDogMTEyMHB4KVxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PHNvdXJjZSB0eXBlPVxcXCJpbWFnZS9hdmlmXFxcIiBzcmNzZXQ9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfNF9fXyArIFwiXFxcIiBtZWRpYT1cXFwiKG1pbi13aWR0aDogNzY4cHgpXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8c291cmNlIHR5cGU9XFxcImltYWdlL2F2aWZcXFwiIHNyY3NldD1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF81X19fICsgXCJcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdDxzb3VyY2UgdHlwZT1cXFwiaW1hZ2Uvd2VicFxcXCIgc3Jjc2V0PVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzZfX18gKyBcIlxcXCIgbWVkaWE9XFxcIihtaW4td2lkdGg6IDExMjBweClcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdDxzb3VyY2UgdHlwZT1cXFwiaW1hZ2Uvd2VicFxcXCIgc3Jjc2V0PVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzdfX18gKyBcIlxcXCIgbWVkaWE9XFxcIihtaW4td2lkdGg6IDc2OHB4KVxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PHNvdXJjZSB0eXBlPVxcXCJpbWFnZS93ZWJwXFxcIiBzcmNzZXQ9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfOF9fXyArIFwiXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8c291cmNlIHNyY3NldD1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF85X19fICsgXCJcXFwiIG1lZGlhPVxcXCIobWluLXdpZHRoOiAxMTIwcHgpXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8c291cmNlIHNyY3NldD1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8xMF9fXyArIFwiXFxcIiBtZWRpYT1cXFwiKG1pbi13aWR0aDogNzY4cHgpXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8aW1nIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8xMV9fXyArIFwiXFxcIiBhbHQ9XFxcItGE0L7RgtC+XFxcIi8+XFxyXFxuXFx0XFx0XFx0XFx0PC9waWN0dXJlPlxcdFxcdFxcdFxcdFxcclxcblxcdFxcdFxcdDwvZGl2PlxcclxcblxcclxcblxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcInNlcnZlYy1jb250ZW50X19zZXJ2aWNlLWl0ZW0gc2VydmljZS1pdGVtXFxcIiBkYXRhLXRhcmdldD1cXFwidHdvXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHQ8ZGl2PlxcclxcblxcdFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcInNlcnZpY2UtaXRlbV9fd3JhcHBcXFwiIGRhdGEtdGFyZ2V0PVxcXCJmb3VyLWFsbG9wZW5cXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdDxwIGNsYXNzPVxcXCJzZXJ2aWNlLWl0ZW1fX3RleHRcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdNCc0Ysg0Y/QstC70Y/QtdC80YHRjyDQsNCy0YLQvtGA0LjQt9C+0LLQsNC90L3Ri9C8INGB0LXRgNCy0LjRgdC90YvQvCDRhtC10L3RgtGA0L7QvCDQv9C+INGA0LXQvNC+0L3RgtGDINGC0LXRhdC90LjQutC4IERlbGwuINCi0L7Qu9GM0LrQviDRgyDQvdCw0YEg0LLRiyDQvNC+0LbQtdGC0LUg0L7RgtGA0LXQvNC+0L3RgtC40YDQvtCy0LDRgtGMINGB0LLQvtC5INC90L7Rg9GC0LHRg9C6IERlbGwg0YEg0L7RhNC40YbQuNCw0LvRjNC90L7QuSDQs9Cw0YDQsNC90YLQuNC10Lkg0L/RgNC+0LjQt9Cy0L7QtNC40YLQtdC70Y8uXFxyXFxuXFx0XFx0XFx0XFx0XFx0PC9wPlxcclxcblxcdFxcdFxcdFxcdFxcdDxwIGNsYXNzPVxcXCJzZXJ2aWNlLWl0ZW1fX3RleHQgc2VydmljZS1pdGVtX190ZXh0LS12aXN1YWxseS1oaWRkZW5cXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdNCc0Ysg0YPRgdC/0LXRiNC90L4g0YDQsNCx0L7RgtCw0LXQvCDRgSAxOTkyINCz0L7QtNCwINC4INC30LDRgdC70YPQttC40LvQuCDRgNC10L/Rg9GC0LDRhtC40Y4g0L3QsNC00LXQttC90L7Qs9C+INC/0LDRgNGC0L3QtdGA0LAsINGH0YLQviDQv9C+0LTRgtCy0LXRgNC20LTQsNC10YIg0LHQvtC70YzRiNC+0LUg0LrQvtC70LjRh9C10YHRgtCy0L4g0L/QvtGB0YLQvtGP0L3QvdGL0YUg0LrQu9C40LXQvdGC0L7Qsi4g0JzRiyDQs9C+0YDQtNC40LzRgdGPINGC0LXQvCwg0YfRgtC+INC6INC90LDQvCDQvtCx0YDQsNGJ0LDRjtGC0YHRjyDQv9C+INGA0LXQutC+0LzQtdC90LTQsNGG0LjRj9C8INC4LCDQsiDRgdCy0L7RjiDQvtGH0LXRgNC10LTRjCwg0YHQvtCy0LXRgtGD0Y7RgiDQvdCw0YEg0YDQvtC00L3Ri9C8INC4INCx0LvQuNC30LrQuNC8LlxcclxcblxcdFxcdFxcdFxcdFxcdDwvcD5cXHJcXG5cXHRcXHRcXHRcXHQ8L2Rpdj5cXHJcXG5cXHRcXHRcXHRcXHQ8YnV0dG9uIGNsYXNzPVxcXCJzZXJ2aWNlLWJyYW5kc19fbGluayBzZXJ2aWNlLWl0ZW1fX2xpbmsgaWNvbi1leHBhbmRcXFwiIGRhdGEtcGF0aD1cXFwiZm91ci1hbGxvcGVuXFxcIiA+0KfQuNGC0LDRgtGMINC00LDQu9GM0YjQtTwvYnV0dG9uPlxcclxcblxcdFxcdFxcdDwvZGl2PlxcclxcblxcdFxcdFxcdFxcdDxwaWN0dXJlIGNsYXNzPVxcXCJzZXJ2aWNlLWl0ZW1fX2ltZ1xcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PHNvdXJjZSB0eXBlPVxcXCJpbWFnZS9hdmlmXFxcIiBzcmNzZXQ9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMTJfX18gKyBcIlxcXCIgbWVkaWE9XFxcIihtaW4td2lkdGg6IDExMjBweClcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdDxzb3VyY2UgdHlwZT1cXFwiaW1hZ2UvYXZpZlxcXCIgc3Jjc2V0PVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzEzX19fICsgXCJcXFwiIG1lZGlhPVxcXCIobWluLXdpZHRoOiA3NjhweClcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdDxzb3VyY2UgdHlwZT1cXFwiaW1hZ2UvYXZpZlxcXCIgc3Jjc2V0PVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzE0X19fICsgXCJcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdDxzb3VyY2UgdHlwZT1cXFwiaW1hZ2Uvd2VicFxcXCIgc3Jjc2V0PVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzE1X19fICsgXCJcXFwiIG1lZGlhPVxcXCIobWluLXdpZHRoOiAxMTIwcHgpXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8c291cmNlIHR5cGU9XFxcImltYWdlL3dlYnBcXFwiIHNyY3NldD1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8xNl9fXyArIFwiXFxcIiBtZWRpYT1cXFwiKG1pbi13aWR0aDogNzY4cHgpXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8c291cmNlIHR5cGU9XFxcImltYWdlL3dlYnBcXFwiIHNyY3NldD1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8xN19fXyArIFwiXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8c291cmNlIHNyY3NldD1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8xOF9fXyArIFwiXFxcIiBtZWRpYT1cXFwiKG1pbi13aWR0aDogMTEyMHB4KVxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PHNvdXJjZSBzcmNzZXQ9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMTlfX18gKyBcIlxcXCIgbWVkaWE9XFxcIihtaW4td2lkdGg6IDc2OHB4KVxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PGltZyBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMjBfX18gKyBcIlxcXCIgYWx0PVxcXCLRhNC+0YLQvlxcXCIvPlxcclxcblxcdFxcdFxcdFxcdDwvcGljdHVyZT5cXHRcXHRcXHJcXG5cXHRcXHRcXHQ8L2Rpdj5cXHJcXG5cXHJcXG5cXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJzZXJ2ZWMtY29udGVudF9fc2VydmljZS1pdGVtIHNlcnZpY2UtaXRlbVxcXCIgZGF0YS10YXJnZXQ9XFxcInRocmVlXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHQ8ZGl2PlxcclxcblxcdFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcInNlcnZpY2UtaXRlbV9fd3JhcHBcXFwiIGRhdGEtdGFyZ2V0PVxcXCJmaXZlLWFsbG9wZW5cXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdDxwIGNsYXNzPVxcXCJzZXJ2aWNlLWl0ZW1fX3RleHRcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdNCc0Ysg0Y/QstC70Y/QtdC80YHRjyDQsNCy0YLQvtGA0LjQt9C+0LLQsNC90L3Ri9C8INGB0LXRgNCy0LjRgdC90YvQvCDRhtC10L3RgtGA0L7QvCDQv9C+INGA0LXQvNC+0L3RgtGDINGC0LXRhdC90LjQutC4IERlbGwuINCi0L7Qu9GM0LrQviDRgyDQvdCw0YEg0LLRiyDQvNC+0LbQtdGC0LUg0L7RgtGA0LXQvNC+0L3RgtC40YDQvtCy0LDRgtGMINGB0LLQvtC5INC90L7Rg9GC0LHRg9C6IERlbGwg0YEg0L7RhNC40YbQuNCw0LvRjNC90L7QuSDQs9Cw0YDQsNC90YLQuNC10Lkg0L/RgNC+0LjQt9Cy0L7QtNC40YLQtdC70Y8uXFxyXFxuXFx0XFx0XFx0XFx0XFx0PC9wPlxcclxcblxcdFxcdFxcdFxcdFxcdDxwIGNsYXNzPVxcXCJzZXJ2aWNlLWl0ZW1fX3RleHQgc2VydmljZS1pdGVtX190ZXh0LS12aXN1YWxseS1oaWRkZW5cXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdNCc0Ysg0YPRgdC/0LXRiNC90L4g0YDQsNCx0L7RgtCw0LXQvCDRgSAxOTkyINCz0L7QtNCwINC4INC30LDRgdC70YPQttC40LvQuCDRgNC10L/Rg9GC0LDRhtC40Y4g0L3QsNC00LXQttC90L7Qs9C+INC/0LDRgNGC0L3QtdGA0LAsINGH0YLQviDQv9C+0LTRgtCy0LXRgNC20LTQsNC10YIg0LHQvtC70YzRiNC+0LUg0LrQvtC70LjRh9C10YHRgtCy0L4g0L/QvtGB0YLQvtGP0L3QvdGL0YUg0LrQu9C40LXQvdGC0L7Qsi4g0JzRiyDQs9C+0YDQtNC40LzRgdGPINGC0LXQvCwg0YfRgtC+INC6INC90LDQvCDQvtCx0YDQsNGJ0LDRjtGC0YHRjyDQv9C+INGA0LXQutC+0LzQtdC90LTQsNGG0LjRj9C8INC4LCDQsiDRgdCy0L7RjiDQvtGH0LXRgNC10LTRjCwg0YHQvtCy0LXRgtGD0Y7RgiDQvdCw0YEg0YDQvtC00L3Ri9C8INC4INCx0LvQuNC30LrQuNC8LlxcclxcblxcdFxcdFxcdFxcdFxcdDwvcD5cXHJcXG5cXHRcXHRcXHRcXHQ8L2Rpdj5cXHJcXG5cXHRcXHRcXHRcXHQ8YnV0dG9uIGNsYXNzPVxcXCJzZXJ2aWNlLWJyYW5kc19fbGluayBzZXJ2aWNlLWl0ZW1fX2xpbmsgaWNvbi1leHBhbmRcXFwiIGRhdGEtcGF0aD1cXFwiZml2ZS1hbGxvcGVuXFxcIiA+0KfQuNGC0LDRgtGMINC00LDQu9GM0YjQtTwvYnV0dG9uPlxcclxcblxcdFxcdFxcdDwvZGl2PlxcclxcblxcdFxcdFxcdFxcdDxwaWN0dXJlIGNsYXNzPVxcXCJzZXJ2aWNlLWl0ZW1fX2ltZ1xcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PHNvdXJjZSB0eXBlPVxcXCJpbWFnZS9hdmlmXFxcIiBzcmNzZXQ9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMjFfX18gKyBcIlxcXCIgbWVkaWE9XFxcIihtaW4td2lkdGg6IDExMjBweClcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdDxzb3VyY2UgdHlwZT1cXFwiaW1hZ2UvYXZpZlxcXCIgc3Jjc2V0PVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzIyX19fICsgXCJcXFwiIG1lZGlhPVxcXCIobWluLXdpZHRoOiA3NjhweClcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdDxzb3VyY2UgdHlwZT1cXFwiaW1hZ2UvYXZpZlxcXCIgc3Jjc2V0PVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzIzX19fICsgXCJcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdDxzb3VyY2UgdHlwZT1cXFwiaW1hZ2Uvd2VicFxcXCIgc3Jjc2V0PVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzI0X19fICsgXCJcXFwiIG1lZGlhPVxcXCIobWluLXdpZHRoOiAxMTIwcHgpXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8c291cmNlIHR5cGU9XFxcImltYWdlL3dlYnBcXFwiIHNyY3NldD1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8yNV9fXyArIFwiXFxcIiBtZWRpYT1cXFwiKG1pbi13aWR0aDogNzY4cHgpXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8c291cmNlIHR5cGU9XFxcImltYWdlL3dlYnBcXFwiIHNyY3NldD1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8yNl9fXyArIFwiXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8c291cmNlIHNyY3NldD1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8xOF9fXyArIFwiXFxcIiBtZWRpYT1cXFwiKG1pbi13aWR0aDogMTEyMHB4KVxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PHNvdXJjZSBzcmNzZXQ9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMTlfX18gKyBcIlxcXCIgbWVkaWE9XFxcIihtaW4td2lkdGg6IDc2OHB4KVxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PGltZyBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMjdfX18gKyBcIlxcXCIgYWx0PVxcXCLRhNC+0YLQvlxcXCIvPlxcclxcblxcdFxcdFxcdFxcdDwvcGljdHVyZT5cXHRcXHJcXG5cXHRcXHRcXHQ8L2Rpdj5cXHJcXG5cXHJcXG5cXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJzZXJ2ZWMtY29udGVudF9fc2VydmljZS1pdGVtIHNlcnZpY2UtaXRlbVxcXCIgZGF0YS10YXJnZXQ9XFxcImZvdXJcXFwiPlxcclxcblxcdFxcdFxcdFxcdDxkaXY+XFxyXFxuXFx0XFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwic2VydmljZS1pdGVtX193cmFwcFxcXCIgZGF0YS10YXJnZXQ9XFxcInNleC1hbGxvcGVuXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8cCBjbGFzcz1cXFwic2VydmljZS1pdGVtX190ZXh0XFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHTQnNGLINGP0LLQu9GP0LXQvNGB0Y8g0LDQstGC0L7RgNC40LfQvtCy0LDQvdC90YvQvCDRgdC10YDQstC40YHQvdGL0Lwg0YbQtdC90YLRgNC+0Lwg0L/QviDRgNC10LzQvtC90YLRgyDRgtC10YXQvdC40LrQuCBEZWxsLiDQotC+0LvRjNC60L4g0YMg0L3QsNGBINCy0Ysg0LzQvtC20LXRgtC1INC+0YLRgNC10LzQvtC90YLQuNGA0L7QstCw0YLRjCDRgdCy0L7QuSDQvdC+0YPRgtCx0YPQuiBEZWxsINGBINC+0YTQuNGG0LjQsNC70YzQvdC+0Lkg0LPQsNGA0LDQvdGC0LjQtdC5INC/0YDQvtC40LfQstC+0LTQuNGC0LXQu9GPLlxcclxcblxcdFxcdFxcdFxcdFxcdDwvcD5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8cCBjbGFzcz1cXFwic2VydmljZS1pdGVtX190ZXh0IHNlcnZpY2UtaXRlbV9fdGV4dC0tdmlzdWFsbHktaGlkZGVuXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHTQnNGLINGD0YHQv9C10YjQvdC+INGA0LDQsdC+0YLQsNC10Lwg0YEgMTk5MiDQs9C+0LTQsCDQuCDQt9Cw0YHQu9GD0LbQuNC70Lgg0YDQtdC/0YPRgtCw0YbQuNGOINC90LDQtNC10LbQvdC+0LPQviDQv9Cw0YDRgtC90LXRgNCwLCDRh9GC0L4g0L/QvtC00YLQstC10YDQttC00LDQtdGCINCx0L7Qu9GM0YjQvtC1INC60L7Qu9C40YfQtdGB0YLQstC+INC/0L7RgdGC0L7Rj9C90L3Ri9GFINC60LvQuNC10L3RgtC+0LIuINCc0Ysg0LPQvtGA0LTQuNC80YHRjyDRgtC10LwsINGH0YLQviDQuiDQvdCw0Lwg0L7QsdGA0LDRidCw0Y7RgtGB0Y8g0L/QviDRgNC10LrQvtC80LXQvdC00LDRhtC40Y/QvCDQuCwg0LIg0YHQstC+0Y4g0L7Rh9C10YDQtdC00YwsINGB0L7QstC10YLRg9GO0YIg0L3QsNGBINGA0L7QtNC90YvQvCDQuCDQsdC70LjQt9C60LjQvC5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8L3A+XFxyXFxuXFx0XFx0XFx0XFx0PC9kaXY+XFxyXFxuXFx0XFx0XFx0XFx0PGJ1dHRvbiBjbGFzcz1cXFwic2VydmljZS1icmFuZHNfX2xpbmsgc2VydmljZS1pdGVtX19saW5rIGljb24tZXhwYW5kXFxcIiBkYXRhLXBhdGg9XFxcInNleC1hbGxvcGVuXFxcIiA+0KfQuNGC0LDRgtGMINC00LDQu9GM0YjQtTwvYnV0dG9uPlxcclxcblxcdFxcdFxcdDwvZGl2PlxcclxcblxcdFxcdFxcdFxcdDxwaWN0dXJlIGNsYXNzPVxcXCJzZXJ2aWNlLWl0ZW1fX2ltZ1xcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PHNvdXJjZSB0eXBlPVxcXCJpbWFnZS9hdmlmXFxcIiBzcmNzZXQ9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMjhfX18gKyBcIlxcXCIgbWVkaWE9XFxcIihtaW4td2lkdGg6IDExMjBweClcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdDxzb3VyY2UgdHlwZT1cXFwiaW1hZ2UvYXZpZlxcXCIgc3Jjc2V0PVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzI5X19fICsgXCJcXFwiIG1lZGlhPVxcXCIobWluLXdpZHRoOiA3NjhweClcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdDxzb3VyY2UgdHlwZT1cXFwiaW1hZ2UvYXZpZlxcXCIgc3Jjc2V0PVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzMwX19fICsgXCJcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdDxzb3VyY2UgdHlwZT1cXFwiaW1hZ2Uvd2VicFxcXCIgc3Jjc2V0PVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzMxX19fICsgXCJcXFwiIG1lZGlhPVxcXCIobWluLXdpZHRoOiAxMTIwcHgpXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8c291cmNlIHR5cGU9XFxcImltYWdlL3dlYnBcXFwiIHNyY3NldD1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8zMl9fXyArIFwiXFxcIiBtZWRpYT1cXFwiKG1pbi13aWR0aDogNzY4cHgpXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8c291cmNlIHR5cGU9XFxcImltYWdlL3dlYnBcXFwiIHNyY3NldD1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8zM19fXyArIFwiXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8c291cmNlIHNyY3NldD1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8zNF9fXyArIFwiXFxcIiBtZWRpYT1cXFwiKG1pbi13aWR0aDogMTEyMHB4KVxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PHNvdXJjZSBzcmNzZXQ9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMzVfX18gKyBcIlxcXCIgbWVkaWE9XFxcIihtaW4td2lkdGg6IDc2OHB4KVxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PGltZyBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMzZfX18gKyBcIlxcXCIgYWx0PVxcXCLRhNC+0YLQvlxcXCIvPlxcclxcblxcdFxcdFxcdFxcdDwvcGljdHVyZT5cXHRcXHRcXHRcXHJcXG5cXHRcXHRcXHQ8L2Rpdj5cXHJcXG5cXHJcXG5cXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJzZXJ2ZWMtY29udGVudF9fc2VydmljZS1pdGVtIHNlcnZpY2UtaXRlbVxcXCIgZGF0YS10YXJnZXQ9XFxcImZpdmVcXFwiPlxcclxcblxcdFxcdFxcdFxcdDxkaXY+XFxyXFxuXFx0XFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwic2VydmljZS1pdGVtX193cmFwcFxcXCIgZGF0YS10YXJnZXQ9XFxcInNpeC1hbGxvcGVuXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8cCBjbGFzcz1cXFwic2VydmljZS1pdGVtX190ZXh0XFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHTQnNGLINGP0LLQu9GP0LXQvNGB0Y8g0LDQstGC0L7RgNC40LfQvtCy0LDQvdC90YvQvCDRgdC10YDQstC40YHQvdGL0Lwg0YbQtdC90YLRgNC+0Lwg0L/QviDRgNC10LzQvtC90YLRgyDRgtC10YXQvdC40LrQuCBEZWxsLiDQotC+0LvRjNC60L4g0YMg0L3QsNGBINCy0Ysg0LzQvtC20LXRgtC1INC+0YLRgNC10LzQvtC90YLQuNGA0L7QstCw0YLRjCDRgdCy0L7QuSDQvdC+0YPRgtCx0YPQuiBEZWxsINGBINC+0YTQuNGG0LjQsNC70YzQvdC+0Lkg0LPQsNGA0LDQvdGC0LjQtdC5INC/0YDQvtC40LfQstC+0LTQuNGC0LXQu9GPLlxcclxcblxcdFxcdFxcdFxcdFxcdDwvcD5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8cCBjbGFzcz1cXFwic2VydmljZS1pdGVtX190ZXh0IHNlcnZpY2UtaXRlbV9fdGV4dC0tdmlzdWFsbHktaGlkZGVuXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHTQnNGLINGD0YHQv9C10YjQvdC+INGA0LDQsdC+0YLQsNC10Lwg0YEgMTk5MiDQs9C+0LTQsCDQuCDQt9Cw0YHQu9GD0LbQuNC70Lgg0YDQtdC/0YPRgtCw0YbQuNGOINC90LDQtNC10LbQvdC+0LPQviDQv9Cw0YDRgtC90LXRgNCwLCDRh9GC0L4g0L/QvtC00YLQstC10YDQttC00LDQtdGCINCx0L7Qu9GM0YjQvtC1INC60L7Qu9C40YfQtdGB0YLQstC+INC/0L7RgdGC0L7Rj9C90L3Ri9GFINC60LvQuNC10L3RgtC+0LIuINCc0Ysg0LPQvtGA0LTQuNC80YHRjyDRgtC10LwsINGH0YLQviDQuiDQvdCw0Lwg0L7QsdGA0LDRidCw0Y7RgtGB0Y8g0L/QviDRgNC10LrQvtC80LXQvdC00LDRhtC40Y/QvCDQuCwg0LIg0YHQstC+0Y4g0L7Rh9C10YDQtdC00YwsINGB0L7QstC10YLRg9GO0YIg0L3QsNGBINGA0L7QtNC90YvQvCDQuCDQsdC70LjQt9C60LjQvC5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8L3A+XFxyXFxuXFx0XFx0XFx0XFx0PC9kaXY+XFxyXFxuXFx0XFx0XFx0XFx0PGJ1dHRvbiBjbGFzcz1cXFwic2VydmljZS1icmFuZHNfX2xpbmsgc2VydmljZS1pdGVtX19saW5rIGljb24tZXhwYW5kXFxcIiBkYXRhLXBhdGg9XFxcInNpeC1hbGxvcGVuXFxcIiA+0KfQuNGC0LDRgtGMINC00LDQu9GM0YjQtTwvYnV0dG9uPlxcclxcblxcdFxcdFxcdDwvZGl2PlxcclxcblxcdFxcdFxcdFxcdDxwaWN0dXJlIGNsYXNzPVxcXCJzZXJ2aWNlLWl0ZW1fX2ltZ1xcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PHNvdXJjZSB0eXBlPVxcXCJpbWFnZS9hdmlmXFxcIiBzcmNzZXQ9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMzdfX18gKyBcIlxcXCIgbWVkaWE9XFxcIihtaW4td2lkdGg6IDExMjBweClcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdDxzb3VyY2UgdHlwZT1cXFwiaW1hZ2UvYXZpZlxcXCIgc3Jjc2V0PVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzM4X19fICsgXCJcXFwiIG1lZGlhPVxcXCIobWluLXdpZHRoOiA3NjhweClcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdDxzb3VyY2UgdHlwZT1cXFwiaW1hZ2UvYXZpZlxcXCIgc3Jjc2V0PVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzM5X19fICsgXCJcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdDxzb3VyY2UgdHlwZT1cXFwiaW1hZ2Uvd2VicFxcXCIgc3Jjc2V0PVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzQwX19fICsgXCJcXFwiIG1lZGlhPVxcXCIobWluLXdpZHRoOiAxMTIwcHgpXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8c291cmNlIHR5cGU9XFxcImltYWdlL3dlYnBcXFwiIHNyY3NldD1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF80MV9fXyArIFwiXFxcIiBtZWRpYT1cXFwiKG1pbi13aWR0aDogNzY4cHgpXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8c291cmNlIHR5cGU9XFxcImltYWdlL3dlYnBcXFwiIHNyY3NldD1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF80Ml9fXyArIFwiXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8c291cmNlIHNyY3NldD1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF80M19fXyArIFwiXFxcIiBtZWRpYT1cXFwiKG1pbi13aWR0aDogMTEyMHB4KVxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PHNvdXJjZSBzcmNzZXQ9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfNDRfX18gKyBcIlxcXCIgbWVkaWE9XFxcIihtaW4td2lkdGg6IDc2OHB4KVxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PGltZyBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfNDVfX18gKyBcIlxcXCIgYWx0PVxcXCLRhNC+0YLQvlxcXCIvPlxcclxcblxcdFxcdFxcdFxcdDwvcGljdHVyZT5cXHRcXHRcXHRcXHRcXHJcXG5cXHRcXHRcXHQ8L2Rpdj5cXHJcXG5cXHJcXG5cXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJzZXJ2ZWMtY29udGVudF9fc2VydmljZS1pdGVtIHNlcnZpY2UtaXRlbVxcXCIgZGF0YS10YXJnZXQ9XFxcInNpeFxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0PGRpdj5cXHJcXG5cXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJzZXJ2aWNlLWl0ZW1fX3dyYXBwXFxcIiBkYXRhLXRhcmdldD1cXFwic2V2ZW4tYWxsb3BlblxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PHAgY2xhc3M9XFxcInNlcnZpY2UtaXRlbV9fdGV4dFxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx00JzRiyDRj9Cy0LvRj9C10LzRgdGPINCw0LLRgtC+0YDQuNC30L7QstCw0L3QvdGL0Lwg0YHQtdGA0LLQuNGB0L3Ri9C8INGG0LXQvdGC0YDQvtC8INC/0L4g0YDQtdC80L7QvdGC0YMg0YLQtdGF0L3QuNC60LggRGVsbC4g0KLQvtC70YzQutC+INGDINC90LDRgSDQstGLINC80L7QttC10YLQtSDQvtGC0YDQtdC80L7QvdGC0LjRgNC+0LLQsNGC0Ywg0YHQstC+0Lkg0L3QvtGD0YLQsdGD0LogRGVsbCDRgSDQvtGE0LjRhtC40LDQu9GM0L3QvtC5INCz0LDRgNCw0L3RgtC40LXQuSDQv9GA0L7QuNC30LLQvtC00LjRgtC10LvRjy5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8L3A+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PHAgY2xhc3M9XFxcInNlcnZpY2UtaXRlbV9fdGV4dCBzZXJ2aWNlLWl0ZW1fX3RleHQtLXZpc3VhbGx5LWhpZGRlblxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx00JzRiyDRg9GB0L/QtdGI0L3QviDRgNCw0LHQvtGC0LDQtdC8INGBIDE5OTIg0LPQvtC00LAg0Lgg0LfQsNGB0LvRg9C20LjQu9C4INGA0LXQv9GD0YLQsNGG0LjRjiDQvdCw0LTQtdC20L3QvtCz0L4g0L/QsNGA0YLQvdC10YDQsCwg0YfRgtC+INC/0L7QtNGC0LLQtdGA0LbQtNCw0LXRgiDQsdC+0LvRjNGI0L7QtSDQutC+0LvQuNGH0LXRgdGC0LLQviDQv9C+0YHRgtC+0Y/QvdC90YvRhSDQutC70LjQtdC90YLQvtCyLiDQnNGLINCz0L7RgNC00LjQvNGB0Y8g0YLQtdC8LCDRh9GC0L4g0Log0L3QsNC8INC+0LHRgNCw0YnQsNGO0YLRgdGPINC/0L4g0YDQtdC60L7QvNC10L3QtNCw0YbQuNGP0Lwg0LgsINCyINGB0LLQvtGOINC+0YfQtdGA0LXQtNGMLCDRgdC+0LLQtdGC0YPRjtGCINC90LDRgSDRgNC+0LTQvdGL0Lwg0Lgg0LHQu9C40LfQutC40LwuXFxyXFxuXFx0XFx0XFx0XFx0XFx0PC9wPlxcclxcblxcdFxcdFxcdFxcdDwvZGl2PlxcclxcblxcdFxcdFxcdFxcdDxidXR0b24gY2xhc3M9XFxcInNlcnZpY2UtYnJhbmRzX19saW5rIHNlcnZpY2UtaXRlbV9fbGluayBpY29uLWV4cGFuZFxcXCIgZGF0YS1wYXRoPVxcXCJzZXZlbi1hbGxvcGVuXFxcIiA+0KfQuNGC0LDRgtGMINC00LDQu9GM0YjQtTwvYnV0dG9uPlxcclxcblxcdFxcdFxcdDwvZGl2PlxcclxcblxcdFxcdFxcdFxcdDxwaWN0dXJlIGNsYXNzPVxcXCJzZXJ2aWNlLWl0ZW1fX2ltZ1xcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PHNvdXJjZSB0eXBlPVxcXCJpbWFnZS9hdmlmXFxcIiBzcmNzZXQ9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfNDZfX18gKyBcIlxcXCIgbWVkaWE9XFxcIihtaW4td2lkdGg6IDExMjBweClcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdDxzb3VyY2UgdHlwZT1cXFwiaW1hZ2UvYXZpZlxcXCIgc3Jjc2V0PVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzQ3X19fICsgXCJcXFwiIG1lZGlhPVxcXCIobWluLXdpZHRoOiA3NjhweClcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdDxzb3VyY2UgdHlwZT1cXFwiaW1hZ2UvYXZpZlxcXCIgc3Jjc2V0PVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzQ4X19fICsgXCJcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdDxzb3VyY2UgdHlwZT1cXFwiaW1hZ2Uvd2VicFxcXCIgc3Jjc2V0PVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzQ5X19fICsgXCJcXFwiIG1lZGlhPVxcXCIobWluLXdpZHRoOiAxMTIwcHgpXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8c291cmNlIHR5cGU9XFxcImltYWdlL3dlYnBcXFwiIHNyY3NldD1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF81MF9fXyArIFwiXFxcIiBtZWRpYT1cXFwiKG1pbi13aWR0aDogNzY4cHgpXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8c291cmNlIHR5cGU9XFxcImltYWdlL3dlYnBcXFwiIHNyY3NldD1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF81MV9fXyArIFwiXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8c291cmNlIHNyY3NldD1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF81Ml9fXyArIFwiXFxcIiBtZWRpYT1cXFwiKG1pbi13aWR0aDogMTEyMHB4KVxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PHNvdXJjZSBzcmNzZXQ9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfNTNfX18gKyBcIlxcXCIgbWVkaWE9XFxcIihtaW4td2lkdGg6IDc2OHB4KVxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PGltZyBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfNTRfX18gKyBcIlxcXCIgYWx0PVxcXCLRhNC+0YLQvlxcXCIvPlxcclxcblxcdFxcdFxcdFxcdDwvcGljdHVyZT5cXHRcXHRcXHRcXHRcXHJcXG5cXHRcXHRcXHQ8L2Rpdj5cXHJcXG5cXHJcXG5cXHRcXHQ8L3NlY3Rpb24+XFxyXFxuXFxyXFxuXFx0XFx0PCEtLSDQodC10LrRhtC40Y8g0LHRgNC10L3QtNC+0LIgLS0+XFxyXFxuXFx0XFx0PHNlY3Rpb24gY2xhc3M9XFxcInNlcnZpY2UtYnJhbmRzXFxcIj5cXHJcXG5cXHRcXHRcXHQ8aDIgY2xhc3M9XFxcInNlcnZpY2UtYnJhbmRzX190aXRsZVxcXCI+0KDQtdC80L7QvdGCINGC0LXRhdC90LjQutC4INGA0LDQt9C70LjRh9C90YvRhSDQsdGA0LXQvdC00L7QsjwvaDI+XFxyXFxuXFx0XFx0XFx0XFxyXFxuXFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwic3dpcGVyLWNvbnRhaW5lciBzd2lwZXItY29udGFpbmVyLS1icmFuZHMgc2VydmljZS1icmFuZHNfX2NvbnRhaW5lclxcXCI+XFx0XFx0XFx0XFx0XFxyXFxuXFx0XFx0XFx0XFx0PHVsIGNsYXNzPVxcXCJzd2lwZXItd3JhcHBlciBzZXJ2aWNlLWJyYW5kc19fd3JhcHBcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdDxsaSBjbGFzcz1cXFwic3dpcGVyLXNsaWRlIHNlcnZpY2UtYnJhbmRzX19zbGlkZS1saXN0IHNsaWRlLWxpc3RcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDxhIGNsYXNzPVxcXCJzbGlkZS1saXN0X19saW5rXFxcIiBocmVmPVxcXCIjXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQ8aW1nIGNsYXNzPVxcXCJzbGlkZS1saXN0X19sb2dvXFxcIiBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfNTVfX18gKyBcIlxcXCIgYWx0PVxcXCJMZW5vdmFcXFwiIHdpZHRoPVxcXCIxMDhcXFwiIGhlaWdodD1cXFwiMzJcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdDxzcGFuIGNsYXNzPVxcXCJzbGlkZS1saXN0X19idG4gaWNvbi1kcm9wZG93blxcXCI+PC9zcGFuPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDwvYT5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8L2xpPlxcclxcblxcdFxcdFxcdFxcdFxcdDxsaSBjbGFzcz1cXFwic3dpcGVyLXNsaWRlIHNlcnZpY2UtYnJhbmRzX19zbGlkZS1saXN0IHNsaWRlLWxpc3RcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDxhIGNsYXNzPVxcXCJzbGlkZS1saXN0X19saW5rXFxcIiBocmVmPVxcXCIjXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQ8aW1nIGNsYXNzPVxcXCJzbGlkZS1saXN0X19sb2dvXFxcIiBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfNTZfX18gKyBcIlxcXCIgYWx0PVxcXCJzYW1zdW5nXFxcIiB3aWR0aD1cXFwiMTE2XFxcIiBoZWlnaHQ9XFxcIjM4XFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQ8c3BhbiBjbGFzcz1cXFwic2xpZGUtbGlzdF9fYnRuIGljb24tZHJvcGRvd25cXFwiPjwvc3Bhbj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8L2E+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PC9saT5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8bGkgY2xhc3M9XFxcInN3aXBlci1zbGlkZSBzZXJ2aWNlLWJyYW5kc19fc2xpZGUtbGlzdCBzbGlkZS1saXN0XFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8YSBjbGFzcz1cXFwic2xpZGUtbGlzdF9fbGlua1xcXCIgaHJlZj1cXFwiI1xcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0PGltZyBjbGFzcz1cXFwic2xpZGUtbGlzdF9fbG9nb1xcXCIgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzU3X19fICsgXCJcXFwiIGFsdD1cXFwiYXBwbGVcXFwiIHdpZHRoPVxcXCI0NFxcXCIgaGVpZ2h0PVxcXCI0NFxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0PHNwYW4gY2xhc3M9XFxcInNsaWRlLWxpc3RfX2J0biBpY29uLWRyb3Bkb3duXFxcIj48L3NwYW4+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PC9hPlxcclxcblxcdFxcdFxcdFxcdFxcdDwvbGk+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PGxpIGNsYXNzPVxcXCJzd2lwZXItc2xpZGUgc2VydmljZS1icmFuZHNfX3NsaWRlLWxpc3Qgc2xpZGUtbGlzdFxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PGEgY2xhc3M9XFxcInNsaWRlLWxpc3RfX2xpbmtcXFwiIGhyZWY9XFxcIiNcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdDxpbWcgY2xhc3M9XFxcInNsaWRlLWxpc3RfX2xvZ29cXFwiIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF81OF9fXyArIFwiXFxcIiBhbHQ9XFxcInZpZXdzb25pY2tcXFwiIHdpZHRoPVxcXCIxMjhcXFwiIGhlaWdodD1cXFwiMjFcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdDxzcGFuIGNsYXNzPVxcXCJzbGlkZS1saXN0X19idG4gaWNvbi1kcm9wZG93blxcXCI+PC9zcGFuPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDwvYT5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8L2xpPlxcclxcblxcdFxcdFxcdFxcdFxcdDxsaSBjbGFzcz1cXFwic3dpcGVyLXNsaWRlIHNlcnZpY2UtYnJhbmRzX19zbGlkZS1saXN0IHNsaWRlLWxpc3RcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDxhIGNsYXNzPVxcXCJzbGlkZS1saXN0X19saW5rXFxcIiBocmVmPVxcXCIjXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQ8aW1nIGNsYXNzPVxcXCJzbGlkZS1saXN0X19sb2dvXFxcIiBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfNTlfX18gKyBcIlxcXCIgYWx0PVxcXCJib3NjaFxcXCIgd2lkdGg9XFxcIjEyOFxcXCIgaGVpZ2h0PVxcXCIyOFxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0PHNwYW4gY2xhc3M9XFxcInNsaWRlLWxpc3RfX2J0biBpY29uLWRyb3Bkb3duXFxcIj48L3NwYW4+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PC9hPlxcclxcblxcdFxcdFxcdFxcdFxcdDwvbGk+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PGxpIGNsYXNzPVxcXCJzd2lwZXItc2xpZGUgc2VydmljZS1icmFuZHNfX3NsaWRlLWxpc3Qgc2xpZGUtbGlzdFxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PGEgY2xhc3M9XFxcInNsaWRlLWxpc3RfX2xpbmtcXFwiIGhyZWY9XFxcIiNcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdDxpbWcgY2xhc3M9XFxcInNsaWRlLWxpc3RfX2xvZ29cXFwiIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF82MF9fXyArIFwiXFxcIiBhbHQ9XFxcImhwXFxcIiB3aWR0aD1cXFwiNTJcXFwiIGhlaWdodD1cXFwiNTJcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdDxzcGFuIGNsYXNzPVxcXCJzbGlkZS1saXN0X19idG4gaWNvbi1kcm9wZG93blxcXCI+PC9zcGFuPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDwvYT5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8L2xpPlxcclxcblxcdFxcdFxcdFxcdFxcdDxsaSBjbGFzcz1cXFwic3dpcGVyLXNsaWRlIHNlcnZpY2UtYnJhbmRzX19zbGlkZS1saXN0IHNsaWRlLWxpc3RcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDxhIGNsYXNzPVxcXCJzbGlkZS1saXN0X19saW5rXFxcIiBocmVmPVxcXCIjXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQ8aW1nIGNsYXNzPVxcXCJzbGlkZS1saXN0X19sb2dvXFxcIiBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfNjFfX18gKyBcIlxcXCIgYWx0PVxcXCJhY2VyXFxcIiB3aWR0aD1cXFwiOTRcXFwiIGhlaWdodD1cXFwiMjRcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdDxzcGFuIGNsYXNzPVxcXCJzbGlkZS1saXN0X19idG4gaWNvbi1kcm9wZG93blxcXCI+PC9zcGFuPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDwvYT5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8L2xpPlxcclxcblxcdFxcdFxcdFxcdFxcdDxsaSBjbGFzcz1cXFwic3dpcGVyLXNsaWRlIHNlcnZpY2UtYnJhbmRzX19zbGlkZS1saXN0IHNsaWRlLWxpc3RcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDxhIGNsYXNzPVxcXCJzbGlkZS1saXN0X19saW5rXFxcIiBocmVmPVxcXCIjXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQ8aW1nIGNsYXNzPVxcXCJzbGlkZS1saXN0X19sb2dvXFxcIiBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfNjJfX18gKyBcIlxcXCIgYWx0PVxcXCJzb255XFxcIiB3aWR0aD1cXFwiMTI4XFxcIiBoZWlnaHQ9XFxcIjI2XFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQ8c3BhbiBjbGFzcz1cXFwic2xpZGUtbGlzdF9fYnRuIGljb24tZHJvcGRvd25cXFwiPjwvc3Bhbj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8L2E+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PC9saT5cXHJcXG5cXHRcXHRcXHRcXHQ8L3VsPlxcclxcblxcdFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcInN3aXBlci1wYWdpbmF0aW9uIHNlcnZpY2UtYnJhbmRzX19wYWdpbmF0aW9uXFxcIj48L2Rpdj5cXHJcXG5cXHRcXHRcXHQ8L2Rpdj5cXHJcXG5cXHJcXG5cXHRcXHRcXHQ8dWwgY2xhc3M9XFxcInNlcnZpY2UtYnJhbmRzX193cmFwcC10YWIgYWxsLW9wZW5cXFwiIGRhdGEtdGFyZ2V0PVxcXCJvbmUtYWxsb3BlblxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0PGxpIGNsYXNzPVxcXCJzZXJ2aWNlLWJyYW5kc19fc2xpZGUtbGlzdC10YWIgc2xpZGUtbGlzdC10YWJcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdDxhIGNsYXNzPVxcXCJzbGlkZS1saXN0LXRhYl9fbGlua1xcXCIgaHJlZj1cXFwiI1xcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PGltZyBjbGFzcz1cXFwic2xpZGUtbGlzdC10YWJfX2xvZ29cXFwiIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF81NV9fXyArIFwiXFxcIiBhbHQ9XFxcIkxlbm92YVxcXCIgd2lkdGg9XFxcIjEwOFxcXCIgaGVpZ2h0PVxcXCIzMlxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PHNwYW4gY2xhc3M9XFxcInNsaWRlLWxpc3QtdGFiX19idG4gaWNvbi1kcm9wZG93blxcXCI+PC9zcGFuPlxcclxcblxcdFxcdFxcdFxcdFxcdDwvYT5cXHJcXG5cXHRcXHRcXHRcXHQ8L2xpPlxcclxcblxcdFxcdFxcdFxcdDxsaSBjbGFzcz1cXFwic2VydmljZS1icmFuZHNfX3NsaWRlLWxpc3QtdGFiIHNsaWRlLWxpc3QtdGFiXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8YSBjbGFzcz1cXFwic2xpZGUtbGlzdC10YWJfX2xpbmtcXFwiIGhyZWY9XFxcIiNcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDxpbWcgY2xhc3M9XFxcInNsaWRlLWxpc3QtdGFiX19sb2dvXFxcIiBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfNTZfX18gKyBcIlxcXCIgYWx0PVxcXCJzYW1zdW5nXFxcIiB3aWR0aD1cXFwiMTE2XFxcIiBoZWlnaHQ9XFxcIjM4XFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8c3BhbiBjbGFzcz1cXFwic2xpZGUtbGlzdC10YWJfX2J0biBpY29uLWRyb3Bkb3duXFxcIj48L3NwYW4+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PC9hPlxcclxcblxcdFxcdFxcdFxcdDwvbGk+XFxyXFxuXFx0XFx0XFx0XFx0PGxpIGNsYXNzPVxcXCJzZXJ2aWNlLWJyYW5kc19fc2xpZGUtbGlzdC10YWIgc2xpZGUtbGlzdC10YWJcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdDxhIGNsYXNzPVxcXCJzbGlkZS1saXN0LXRhYl9fbGlua1xcXCIgaHJlZj1cXFwiI1xcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PGltZyBjbGFzcz1cXFwic2xpZGUtbGlzdC10YWJfX2xvZ29cXFwiIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF81N19fXyArIFwiXFxcIiBhbHQ9XFxcImFwcGxlXFxcIiB3aWR0aD1cXFwiNDRcXFwiIGhlaWdodD1cXFwiNDRcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDxzcGFuIGNsYXNzPVxcXCJzbGlkZS1saXN0LXRhYl9fYnRuIGljb24tZHJvcGRvd25cXFwiPjwvc3Bhbj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8L2E+XFxyXFxuXFx0XFx0XFx0XFx0PC9saT5cXHJcXG5cXHRcXHRcXHRcXHQ8bGkgY2xhc3M9XFxcInNlcnZpY2UtYnJhbmRzX19zbGlkZS1saXN0LXRhYiBzbGlkZS1saXN0LXRhYlxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PGEgY2xhc3M9XFxcInNsaWRlLWxpc3QtdGFiX19saW5rXFxcIiBocmVmPVxcXCIjXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8aW1nIGNsYXNzPVxcXCJzbGlkZS1saXN0LXRhYl9fbG9nb1xcXCIgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzU4X19fICsgXCJcXFwiIGFsdD1cXFwidmlld3Nvbmlja1xcXCIgd2lkdGg9XFxcIjEyOFxcXCIgaGVpZ2h0PVxcXCIyMVxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PHNwYW4gY2xhc3M9XFxcInNsaWRlLWxpc3QtdGFiX19idG4gaWNvbi1kcm9wZG93blxcXCI+PC9zcGFuPlxcclxcblxcdFxcdFxcdFxcdFxcdDwvYT5cXHJcXG5cXHRcXHRcXHRcXHQ8L2xpPlxcclxcblxcdFxcdFxcdFxcdDxsaSBjbGFzcz1cXFwic2VydmljZS1icmFuZHNfX3NsaWRlLWxpc3QtdGFiIHNsaWRlLWxpc3QtdGFiXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8YSBjbGFzcz1cXFwic2xpZGUtbGlzdC10YWJfX2xpbmtcXFwiIGhyZWY9XFxcIiNcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDxpbWcgY2xhc3M9XFxcInNsaWRlLWxpc3QtdGFiX19sb2dvXFxcIiBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfNTlfX18gKyBcIlxcXCIgYWx0PVxcXCJib3NjaFxcXCIgd2lkdGg9XFxcIjEyOFxcXCIgaGVpZ2h0PVxcXCIyOFxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PHNwYW4gY2xhc3M9XFxcInNsaWRlLWxpc3QtdGFiX19idG4gaWNvbi1kcm9wZG93blxcXCI+PC9zcGFuPlxcclxcblxcdFxcdFxcdFxcdFxcdDwvYT5cXHJcXG5cXHRcXHRcXHRcXHQ8L2xpPlxcclxcblxcdFxcdFxcdFxcdDxsaSBjbGFzcz1cXFwic2VydmljZS1icmFuZHNfX3NsaWRlLWxpc3QtdGFiIHNsaWRlLWxpc3QtdGFiXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8YSBjbGFzcz1cXFwic2xpZGUtbGlzdC10YWJfX2xpbmtcXFwiIGhyZWY9XFxcIiNcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDxpbWcgY2xhc3M9XFxcInNsaWRlLWxpc3QtdGFiX19sb2dvXFxcIiBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfNjBfX18gKyBcIlxcXCIgYWx0PVxcXCJocFxcXCIgd2lkdGg9XFxcIjUyXFxcIiBoZWlnaHQ9XFxcIjUyXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8c3BhbiBjbGFzcz1cXFwic2xpZGUtbGlzdC10YWJfX2J0biBpY29uLWRyb3Bkb3duXFxcIj48L3NwYW4+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PC9hPlxcclxcblxcdFxcdFxcdFxcdDwvbGk+XFxyXFxuXFx0XFx0XFx0XFx0PGxpIGNsYXNzPVxcXCJzZXJ2aWNlLWJyYW5kc19fc2xpZGUtbGlzdC10YWIgc2xpZGUtbGlzdC10YWJcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdDxhIGNsYXNzPVxcXCJzbGlkZS1saXN0LXRhYl9fbGlua1xcXCIgaHJlZj1cXFwiI1xcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PGltZyBjbGFzcz1cXFwic2xpZGUtbGlzdC10YWJfX2xvZ29cXFwiIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF82MV9fXyArIFwiXFxcIiBhbHQ9XFxcImFjZXJcXFwiIHdpZHRoPVxcXCI5NFxcXCIgaGVpZ2h0PVxcXCIyNFxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PHNwYW4gY2xhc3M9XFxcInNsaWRlLWxpc3QtdGFiX19idG4gaWNvbi1kcm9wZG93blxcXCI+PC9zcGFuPlxcclxcblxcdFxcdFxcdFxcdFxcdDwvYT5cXHJcXG5cXHRcXHRcXHRcXHQ8L2xpPlxcclxcblxcdFxcdFxcdFxcdDxsaSBjbGFzcz1cXFwic2VydmljZS1icmFuZHNfX3NsaWRlLWxpc3QtdGFiIHNsaWRlLWxpc3QtdGFiXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8YSBjbGFzcz1cXFwic2xpZGUtbGlzdC10YWJfX2xpbmtcXFwiIGhyZWY9XFxcIiNcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDxpbWcgY2xhc3M9XFxcInNsaWRlLWxpc3QtdGFiX19sb2dvXFxcIiBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfNjJfX18gKyBcIlxcXCIgYWx0PVxcXCJzb255XFxcIiB3aWR0aD1cXFwiMTI4XFxcIiBoZWlnaHQ9XFxcIjI2XFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8c3BhbiBjbGFzcz1cXFwic2xpZGUtbGlzdC10YWJfX2J0biBpY29uLWRyb3Bkb3duXFxcIj48L3NwYW4+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PC9hPlxcclxcblxcdFxcdFxcdFxcdDwvbGk+XFxyXFxuXFx0XFx0XFx0XFx0PGxpIGNsYXNzPVxcXCJzZXJ2aWNlLWJyYW5kc19fc2xpZGUtbGlzdC10YWIgc2xpZGUtbGlzdC10YWJcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdDxhIGNsYXNzPVxcXCJzbGlkZS1saXN0LXRhYl9fbGlua1xcXCIgaHJlZj1cXFwiI1xcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PGltZyBjbGFzcz1cXFwic2xpZGUtbGlzdC10YWJfX2xvZ29cXFwiIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF81NV9fXyArIFwiXFxcIiBhbHQ9XFxcIkxlbm92YVxcXCIgd2lkdGg9XFxcIjEwOFxcXCIgaGVpZ2h0PVxcXCIzMlxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PHNwYW4gY2xhc3M9XFxcInNsaWRlLWxpc3QtdGFiX19idG4gaWNvbi1kcm9wZG93blxcXCI+PC9zcGFuPlxcclxcblxcdFxcdFxcdFxcdFxcdDwvYT5cXHJcXG5cXHRcXHRcXHRcXHQ8L2xpPlxcclxcblxcdFxcdFxcdFxcdDxsaSBjbGFzcz1cXFwic2VydmljZS1icmFuZHNfX3NsaWRlLWxpc3QtdGFiIHNsaWRlLWxpc3QtdGFiXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8YSBjbGFzcz1cXFwic2xpZGUtbGlzdC10YWJfX2xpbmtcXFwiIGhyZWY9XFxcIiNcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDxpbWcgY2xhc3M9XFxcInNsaWRlLWxpc3QtdGFiX19sb2dvXFxcIiBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfNTZfX18gKyBcIlxcXCIgYWx0PVxcXCJzYW1zdW5nXFxcIiB3aWR0aD1cXFwiMTE2XFxcIiBoZWlnaHQ9XFxcIjM4XFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8c3BhbiBjbGFzcz1cXFwic2xpZGUtbGlzdC10YWJfX2J0biBpY29uLWRyb3Bkb3duXFxcIj48L3NwYW4+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PC9hPlxcclxcblxcdFxcdFxcdFxcdDwvbGk+XFxyXFxuXFx0XFx0XFx0XFx0PGxpIGNsYXNzPVxcXCJzZXJ2aWNlLWJyYW5kc19fc2xpZGUtbGlzdC10YWIgc2xpZGUtbGlzdC10YWJcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdDxhIGNsYXNzPVxcXCJzbGlkZS1saXN0LXRhYl9fbGlua1xcXCIgaHJlZj1cXFwiI1xcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PGltZyBjbGFzcz1cXFwic2xpZGUtbGlzdC10YWJfX2xvZ29cXFwiIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF81N19fXyArIFwiXFxcIiBhbHQ9XFxcImFwcGxlXFxcIiB3aWR0aD1cXFwiNDRcXFwiIGhlaWdodD1cXFwiNDRcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDxzcGFuIGNsYXNzPVxcXCJzbGlkZS1saXN0LXRhYl9fYnRuIGljb24tZHJvcGRvd25cXFwiPjwvc3Bhbj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8L2E+XFxyXFxuXFx0XFx0XFx0XFx0PC9saT5cXHJcXG5cXHRcXHRcXHRcXHQ8bGkgY2xhc3M9XFxcInNlcnZpY2UtYnJhbmRzX19zbGlkZS1saXN0LXRhYiBzbGlkZS1saXN0LXRhYlxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PGEgY2xhc3M9XFxcInNsaWRlLWxpc3QtdGFiX19saW5rXFxcIiBocmVmPVxcXCIjXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8aW1nIGNsYXNzPVxcXCJzbGlkZS1saXN0LXRhYl9fbG9nb1xcXCIgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzU4X19fICsgXCJcXFwiIGFsdD1cXFwidmlld3Nvbmlja1xcXCIgd2lkdGg9XFxcIjEyOFxcXCIgaGVpZ2h0PVxcXCIyMVxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PHNwYW4gY2xhc3M9XFxcInNsaWRlLWxpc3QtdGFiX19idG4gaWNvbi1kcm9wZG93blxcXCI+PC9zcGFuPlxcclxcblxcdFxcdFxcdFxcdFxcdDwvYT5cXHJcXG5cXHRcXHRcXHRcXHQ8L2xpPlxcclxcblxcdFxcdFxcdFxcdDxsaSBjbGFzcz1cXFwic2VydmljZS1icmFuZHNfX3NsaWRlLWxpc3QtdGFiIHNsaWRlLWxpc3QtdGFiXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8YSBjbGFzcz1cXFwic2xpZGUtbGlzdC10YWJfX2xpbmtcXFwiIGhyZWY9XFxcIiNcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDxpbWcgY2xhc3M9XFxcInNsaWRlLWxpc3QtdGFiX19sb2dvXFxcIiBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfNTlfX18gKyBcIlxcXCIgYWx0PVxcXCJib3NjaFxcXCIgd2lkdGg9XFxcIjEyOFxcXCIgaGVpZ2h0PVxcXCIyOFxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PHNwYW4gY2xhc3M9XFxcInNsaWRlLWxpc3QtdGFiX19idG4gaWNvbi1kcm9wZG93blxcXCI+PC9zcGFuPlxcclxcblxcdFxcdFxcdFxcdFxcdDwvYT5cXHJcXG5cXHRcXHRcXHRcXHQ8L2xpPlxcclxcblxcdFxcdFxcdFxcdDxsaSBjbGFzcz1cXFwic2VydmljZS1icmFuZHNfX3NsaWRlLWxpc3QtdGFiIHNsaWRlLWxpc3QtdGFiXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8YSBjbGFzcz1cXFwic2xpZGUtbGlzdC10YWJfX2xpbmtcXFwiIGhyZWY9XFxcIiNcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDxpbWcgY2xhc3M9XFxcInNsaWRlLWxpc3QtdGFiX19sb2dvXFxcIiBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfNjBfX18gKyBcIlxcXCIgYWx0PVxcXCJocFxcXCIgd2lkdGg9XFxcIjUyXFxcIiBoZWlnaHQ9XFxcIjUyXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8c3BhbiBjbGFzcz1cXFwic2xpZGUtbGlzdC10YWJfX2J0biBpY29uLWRyb3Bkb3duXFxcIj48L3NwYW4+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PC9hPlxcclxcblxcdFxcdFxcdFxcdDwvbGk+XFxyXFxuXFx0XFx0XFx0XFx0PGxpIGNsYXNzPVxcXCJzZXJ2aWNlLWJyYW5kc19fc2xpZGUtbGlzdC10YWIgc2xpZGUtbGlzdC10YWJcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdDxhIGNsYXNzPVxcXCJzbGlkZS1saXN0LXRhYl9fbGlua1xcXCIgaHJlZj1cXFwiI1xcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PGltZyBjbGFzcz1cXFwic2xpZGUtbGlzdC10YWJfX2xvZ29cXFwiIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF82MV9fXyArIFwiXFxcIiBhbHQ9XFxcImFjZXJcXFwiIHdpZHRoPVxcXCI5NFxcXCIgaGVpZ2h0PVxcXCIyNFxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PHNwYW4gY2xhc3M9XFxcInNsaWRlLWxpc3QtdGFiX19idG4gaWNvbi1kcm9wZG93blxcXCI+PC9zcGFuPlxcclxcblxcdFxcdFxcdFxcdFxcdDwvYT5cXHJcXG5cXHRcXHRcXHRcXHQ8L2xpPlxcclxcblxcdFxcdFxcdFxcdDxsaSBjbGFzcz1cXFwic2VydmljZS1icmFuZHNfX3NsaWRlLWxpc3QtdGFiIHNsaWRlLWxpc3QtdGFiXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8YSBjbGFzcz1cXFwic2xpZGUtbGlzdC10YWJfX2xpbmtcXFwiIGhyZWY9XFxcIiNcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDxpbWcgY2xhc3M9XFxcInNsaWRlLWxpc3QtdGFiX19sb2dvXFxcIiBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfNjJfX18gKyBcIlxcXCIgYWx0PVxcXCJzb255XFxcIiB3aWR0aD1cXFwiMTI4XFxcIiBoZWlnaHQ9XFxcIjI2XFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8c3BhbiBjbGFzcz1cXFwic2xpZGUtbGlzdC10YWJfX2J0biBpY29uLWRyb3Bkb3duXFxcIj48L3NwYW4+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PC9hPlxcclxcblxcdFxcdFxcdFxcdDwvbGk+XFxyXFxuXFx0XFx0XFx0PC91bD5cXHJcXG5cXHRcXHRcXHQ8YnV0dG9uIGNsYXNzPVxcXCJzZXJ2aWNlLWJyYW5kc19fbGluayBzZXJ2aWNlLWl0ZW1fX2xpbmsgaWNvbi1leHBhbmRcXFwiIGRhdGEtcGF0aD1cXFwib25lLWFsbG9wZW5cXFwiPtCf0L7QutCw0LfQsNGC0Ywg0LLRgdC1PC9idXR0b24+XFxyXFxuXFx0XFx0PC9zZWN0aW9uPlxcclxcblxcclxcblxcdFxcdDwhLS0g0KHQtdC60YbQuNGPINCy0LjQtNCwINGD0YHQu9GD0LMgLS0+XFxyXFxuXFx0XFx0PHNlY3Rpb24gY2xhc3M9XFxcInNlcnZpY2UtdHlwZVxcXCI+XFxyXFxuXFx0XFx0XFx0PGgyIGNsYXNzPVxcXCJzZXJ2aWNlLXR5cGVfX3RpdGxlXFxcIj7QoNC10LzQvtC90YIg0YDQsNC30LvQuNGH0L3Ri9GFINCy0LjQtNC+0LIg0YLQtdGF0L3QuNC60Lg8L2gyPlxcclxcblxcclxcblxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcInN3aXBlci1jb250YWluZXIgc3dpcGVyLWNvbnRhaW5lci0tdHlwZVxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0PHVsIGNsYXNzPVxcXCJzd2lwZXItd3JhcHBlciBzZXJ2aWNlLXR5cGVfX3NlcnZpY2UtbGlzdC10eXBlIHNlcnZpY2UtbGlzdC10eXBlXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8bGkgY2xhc3M9XFxcInN3aXBlci1zbGlkZSBzZXJ2aWNlLWxpc3QtdHlwZV9faXRlbVxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PGEgY2xhc3M9XFxcInNlcnZpY2UtbGlzdC10eXBlX19saW5rXFxcIiBocmVmPVxcXCIjXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQ8aDMgY2xhc3M9XFxcInNlcnZpY2UtbGlzdC10eXBlX190aXRsZVxcXCI+0KDQtdC80L7QvdGCINC90L7Rg9GC0LHRg9C60L7QsjwvaDM+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0PHNwYW4gY2xhc3M9XFxcInNlcnZpY2UtbGlzdC10eXBlX19idG4gaWNvbi1kcm9wZG93blxcXCI+PC9zcGFuPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDwvYT5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8L2xpPlxcclxcblxcdFxcdFxcdFxcdFxcdDxsaSBjbGFzcz1cXFwic3dpcGVyLXNsaWRlIHNlcnZpY2UtbGlzdC10eXBlX19pdGVtXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8YSBjbGFzcz1cXFwic2VydmljZS1saXN0LXR5cGVfX2xpbmtcXFwiIGhyZWY9XFxcIiNcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdDxoMyBjbGFzcz1cXFwic2VydmljZS1saXN0LXR5cGVfX3RpdGxlXFxcIj7QoNC10LzQvtC90YIg0L/Qu9Cw0L3RiNC10YLQvtCyPC9oMz5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQ8c3BhbiBjbGFzcz1cXFwic2VydmljZS1saXN0LXR5cGVfX2J0biBpY29uLWRyb3Bkb3duXFxcIj48L3NwYW4+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PC9hPlxcclxcblxcdFxcdFxcdFxcdFxcdDwvbGk+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PGxpIGNsYXNzPVxcXCJzd2lwZXItc2xpZGUgc2VydmljZS1saXN0LXR5cGVfX2l0ZW1cXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDxhIGNsYXNzPVxcXCJzZXJ2aWNlLWxpc3QtdHlwZV9fbGlua1xcXCIgaHJlZj1cXFwiI1xcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0PGgzIGNsYXNzPVxcXCJzZXJ2aWNlLWxpc3QtdHlwZV9fdGl0bGVcXFwiPtCg0LXQvNC+0L3RgiDQn9CaPC9oMz5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQ8c3BhbiBjbGFzcz1cXFwic2VydmljZS1saXN0LXR5cGVfX2J0biBpY29uLWRyb3Bkb3duXFxcIj48L3NwYW4+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PC9hPlxcclxcblxcdFxcdFxcdFxcdFxcdDwvbGk+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PGxpIGNsYXNzPVxcXCJzd2lwZXItc2xpZGUgc2VydmljZS1saXN0LXR5cGVfX2l0ZW1cXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDxhIGNsYXNzPVxcXCJzZXJ2aWNlLWxpc3QtdHlwZV9fbGlua1xcXCIgaHJlZj1cXFwiI1xcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0PGgzIGNsYXNzPVxcXCJzZXJ2aWNlLWxpc3QtdHlwZV9fdGl0bGVcXFwiPtCg0LXQvNC+0L3RgiDQn9CaPC9oMz5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQ8c3BhbiBjbGFzcz1cXFwic2VydmljZS1saXN0LXR5cGVfX2J0biBpY29uLWRyb3Bkb3duXFxcIj48L3NwYW4+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PC9hPlxcclxcblxcdFxcdFxcdFxcdFxcdDwvbGk+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PGxpIGNsYXNzPVxcXCJzd2lwZXItc2xpZGUgc2VydmljZS1saXN0LXR5cGVfX2l0ZW1cXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDxhIGNsYXNzPVxcXCJzZXJ2aWNlLWxpc3QtdHlwZV9fbGlua1xcXCIgaHJlZj1cXFwiI1xcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0PGgzIGNsYXNzPVxcXCJzZXJ2aWNlLWxpc3QtdHlwZV9fdGl0bGVcXFwiPtCg0LXQvNC+0L3RgiDQn9CaPC9oMz5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQ8c3BhbiBjbGFzcz1cXFwic2VydmljZS1saXN0LXR5cGVfX2J0biBpY29uLWRyb3Bkb3duXFxcIj48L3NwYW4+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PC9hPlxcclxcblxcdFxcdFxcdFxcdFxcdDwvbGk+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PGxpIGNsYXNzPVxcXCJzd2lwZXItc2xpZGUgc2VydmljZS1saXN0LXR5cGVfX2l0ZW1cXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDxhIGNsYXNzPVxcXCJzZXJ2aWNlLWxpc3QtdHlwZV9fbGlua1xcXCIgaHJlZj1cXFwiI1xcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0PGgzIGNsYXNzPVxcXCJzZXJ2aWNlLWxpc3QtdHlwZV9fdGl0bGVcXFwiPtCg0LXQvNC+0L3RgiDQn9CaPC9oMz5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQ8c3BhbiBjbGFzcz1cXFwic2VydmljZS1saXN0LXR5cGVfX2J0biBpY29uLWRyb3Bkb3duXFxcIj48L3NwYW4+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PC9hPlxcclxcblxcdFxcdFxcdFxcdFxcdDwvbGk+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PGxpIGNsYXNzPVxcXCJzd2lwZXItc2xpZGUgc2VydmljZS1saXN0LXR5cGVfX2l0ZW1cXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDxhIGNsYXNzPVxcXCJzZXJ2aWNlLWxpc3QtdHlwZV9fbGlua1xcXCIgaHJlZj1cXFwiI1xcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0PGgzIGNsYXNzPVxcXCJzZXJ2aWNlLWxpc3QtdHlwZV9fdGl0bGVcXFwiPtCg0LXQvNC+0L3RgiDQn9CaPC9oMz5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQ8c3BhbiBjbGFzcz1cXFwic2VydmljZS1saXN0LXR5cGVfX2J0biBpY29uLWRyb3Bkb3duXFxcIj48L3NwYW4+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PC9hPlxcclxcblxcdFxcdFxcdFxcdFxcdDwvbGk+XFxyXFxuXFx0XFx0XFx0XFx0PC91bD5cXHJcXG5cXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJzd2lwZXItcGFnaW5hdGlvbiBzZXJ2aWNlLXR5cGVfX3BhZ2luYXRpb25cXFwiPjwvZGl2PlxcclxcblxcdFxcdFxcdDwvZGl2PlxcclxcblxcclxcblxcdFxcdFxcdDx1bCBjbGFzcz1cXFwic2VydmljZS10eXBlX19zZXJ2aWNlLWxpc3QtdHlwZS10YWIgc2VydmljZS1saXN0LXR5cGUtdGFiIGFsbC1vcGVuXFxcIiBkYXRhLXRhcmdldD1cXFwidHdvLWFsbG9wZW5cXFwiPlxcclxcblxcdFxcdFxcdFxcdDxsaSBjbGFzcz1cXFwic2VydmljZS1saXN0LXR5cGUtdGFiX19pdGVtXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8YSBjbGFzcz1cXFwic2VydmljZS1saXN0LXR5cGUtdGFiX19saW5rXFxcIiBocmVmPVxcXCIjXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8aDMgY2xhc3M9XFxcInNlcnZpY2UtbGlzdC10eXBlLXRhYl9fdGl0bGVcXFwiPtCg0LXQvNC+0L3RgiDQvdC+0YPRgtCx0YPQutC+0LI8L2gzPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDxzcGFuIGNsYXNzPVxcXCJzZXJ2aWNlLWxpc3QtdHlwZS10YWJfX2J0biBpY29uLWRyb3Bkb3duXFxcIj48L3NwYW4+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PC9hPlxcclxcblxcdFxcdFxcdFxcdDwvbGk+XFxyXFxuXFx0XFx0XFx0XFx0PGxpIGNsYXNzPVxcXCJzZXJ2aWNlLWxpc3QtdHlwZS10YWJfX2l0ZW1cXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdDxhIGNsYXNzPVxcXCJzZXJ2aWNlLWxpc3QtdHlwZS10YWJfX2xpbmtcXFwiIGhyZWY9XFxcIiNcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDxoMyBjbGFzcz1cXFwic2VydmljZS1saXN0LXR5cGUtdGFiX190aXRsZVxcXCI+0KDQtdC80L7QvdGCINC/0LvQsNC90YjQtdGC0L7QsjwvaDM+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PHNwYW4gY2xhc3M9XFxcInNlcnZpY2UtbGlzdC10eXBlLXRhYl9fYnRuIGljb24tZHJvcGRvd25cXFwiPjwvc3Bhbj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8L2E+XFxyXFxuXFx0XFx0XFx0XFx0PC9saT5cXHJcXG5cXHRcXHRcXHRcXHQ8bGkgY2xhc3M9XFxcInNlcnZpY2UtbGlzdC10eXBlLXRhYl9faXRlbVxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PGEgY2xhc3M9XFxcInNlcnZpY2UtbGlzdC10eXBlLXRhYl9fbGlua1xcXCIgaHJlZj1cXFwiI1xcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PGgzIGNsYXNzPVxcXCJzZXJ2aWNlLWxpc3QtdHlwZS10YWJfX3RpdGxlXFxcIj7QoNC10LzQvtC90YIg0J/QmjwvaDM+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PHNwYW4gY2xhc3M9XFxcInNlcnZpY2UtbGlzdC10eXBlLXRhYl9fYnRuIGljb24tZHJvcGRvd25cXFwiPjwvc3Bhbj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8L2E+XFxyXFxuXFx0XFx0XFx0XFx0PC9saT5cXHJcXG5cXHRcXHRcXHRcXHQ8bGkgY2xhc3M9XFxcInNlcnZpY2UtbGlzdC10eXBlLXRhYl9faXRlbVxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PGEgY2xhc3M9XFxcInNlcnZpY2UtbGlzdC10eXBlLXRhYl9fbGlua1xcXCIgaHJlZj1cXFwiI1xcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PGgzIGNsYXNzPVxcXCJzZXJ2aWNlLWxpc3QtdHlwZS10YWJfX3RpdGxlXFxcIj7QoNC10LzQvtC90YIg0L3QvtGD0YLQsdGD0LrQvtCyPC9oMz5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8c3BhbiBjbGFzcz1cXFwic2VydmljZS1saXN0LXR5cGUtdGFiX19idG4gaWNvbi1kcm9wZG93blxcXCI+PC9zcGFuPlxcclxcblxcdFxcdFxcdFxcdFxcdDwvYT5cXHJcXG5cXHRcXHRcXHRcXHQ8L2xpPlxcclxcblxcdFxcdFxcdFxcdDxsaSBjbGFzcz1cXFwic2VydmljZS1saXN0LXR5cGUtdGFiX19pdGVtXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8YSBjbGFzcz1cXFwic2VydmljZS1saXN0LXR5cGUtdGFiX19saW5rXFxcIiBocmVmPVxcXCIjXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8aDMgY2xhc3M9XFxcInNlcnZpY2UtbGlzdC10eXBlLXRhYl9fdGl0bGVcXFwiPtCg0LXQvNC+0L3RgiDQv9C70LDQvdGI0LXRgtC+0LI8L2gzPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDxzcGFuIGNsYXNzPVxcXCJzZXJ2aWNlLWxpc3QtdHlwZS10YWJfX2J0biBpY29uLWRyb3Bkb3duXFxcIj48L3NwYW4+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PC9hPlxcclxcblxcdFxcdFxcdFxcdDwvbGk+XFxyXFxuXFx0XFx0XFx0XFx0PGxpIGNsYXNzPVxcXCJzZXJ2aWNlLWxpc3QtdHlwZS10YWJfX2l0ZW1cXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdDxhIGNsYXNzPVxcXCJzZXJ2aWNlLWxpc3QtdHlwZS10YWJfX2xpbmtcXFwiIGhyZWY9XFxcIiNcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDxoMyBjbGFzcz1cXFwic2VydmljZS1saXN0LXR5cGUtdGFiX190aXRsZVxcXCI+0KDQtdC80L7QvdGCINCf0Jo8L2gzPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDxzcGFuIGNsYXNzPVxcXCJzZXJ2aWNlLWxpc3QtdHlwZS10YWJfX2J0biBpY29uLWRyb3Bkb3duXFxcIj48L3NwYW4+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PC9hPlxcclxcblxcdFxcdFxcdFxcdDwvbGk+XFxyXFxuXFx0XFx0XFx0PC91bD5cXHJcXG5cXHJcXG5cXHRcXHRcXHQ8YnV0dG9uIGNsYXNzPVxcXCJzZXJ2aWNlLWJyYW5kc19fbGluayBzZXJ2aWNlLWl0ZW1fX2xpbmsgaWNvbi1leHBhbmRcXFwiIGRhdGEtcGF0aD1cXFwidHdvLWFsbG9wZW5cXFwiID7Qn9C+0LrQsNC30LDRgtGMINCy0YHQtTwvYnV0dG9uPlxcclxcblxcdFxcdDwvc2VjdGlvbj5cXHJcXG5cXHJcXG5cXHRcXHQ8IS0tINCh0LXQutGG0LjRjyDQodGC0L7QuNC80L7RgdGC0Lgg0YPRgdC70YPQsyAtLT5cXHJcXG5cXHRcXHQ8c2VjdGlvbiBjbGFzcz1cXFwic2VydmljZS1wcmljZVxcXCI+IFxcclxcblxcdFxcdFxcdDxoMiBjbGFzcz1cXFwic2VydmljZS1wcmljZV9fdGl0bGVcXFwiPtCm0LXQvdGLINC90LAg0YPRgdC70YPQs9C4PC9oMj5cXHJcXG5cXHJcXG5cXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJzd2lwZXItY29udGFpbmVyIHN3aXBlci1jb250YWluZXItLXByaWNlXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHQ8dWwgY2xhc3M9XFxcInN3aXBlci13cmFwcGVyIHNlcnZpY2UtcHJpY2VfX3ByaWNlLWxpc3QgcHJpY2UtbGlzdFxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PGxpIGNsYXNzPVxcXCJzd2lwZXItc2xpZGUgcHJpY2UtbGlzdF9faXRlbVxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PHVsIGNsYXNzPVxcXCJwcmljZS1saXN0X19pdGVtLWxpc3RcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdDxsaSBjbGFzcz1cXFwicHJpY2UtbGlzdF9faXRlbS1oZWFkZXJcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDxoMyBjbGFzcz1cXFwicHJpY2UtbGlzdF9fdGl0bGVcXFwiPtCg0LXQvNC+0L3RgtC90YvQtSDRg9GB0LvRg9Cz0Lg8L2gzPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDxzcGFuIGNsYXNzPVxcXCJwcmljZS1saXN0X190ZXh0XFxcIj7QlNC40LDQs9C90L7RgdGC0LjQutCwPC9zcGFuPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdDwvbGk+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0PGxpIGNsYXNzPVxcXCJwcmljZS1saXN0X19pdGVtLW1haW5cXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDxoMyBjbGFzcz1cXFwicHJpY2UtbGlzdF9fdGl0bGVcXFwiPtCm0LXQvdCwPC9oMz5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8c3BhbiBjbGFzcz1cXFwicHJpY2UtbGlzdF9fdGV4dFxcXCI+0JHQtdGB0L/Qu9Cw0YLQvdC+PC9zcGFuPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdDwvbGk+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0PGxpIGNsYXNzPVxcXCJwcmljZS1saXN0X19pdGVtLWZvb3RlclxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwicHJpY2UtbGlzdF9faXRlbS1mb290ZXItd3JhcFxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PGgzIGNsYXNzPVxcXCJwcmljZS1saXN0X190aXRsZVxcXCI+0KHRgNC+0Lo8L2gzPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDxzcGFuIGNsYXNzPVxcXCJwcmljZS1saXN0X190ZXh0XFxcIj4zMCDQvNC40L08L3NwYW4+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PC9kaXY+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PGEgY2xhc3M9XFxcInByaWNlLWxpc3RfX2xpbmsgaWNvbi1kcm9wZG93blxcXCIgaHJlZj1cXFwiI1xcXCI+0JfQsNC60LDQt9Cw0YLRjDwvYT5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQ8L2xpPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDwvdWw+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PC9saT5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8bGkgY2xhc3M9XFxcInN3aXBlci1zbGlkZSBwcmljZS1saXN0X19pdGVtXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8dWwgY2xhc3M9XFxcInByaWNlLWxpc3RfX2l0ZW0tbGlzdFxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0PGxpIGNsYXNzPVxcXCJwcmljZS1saXN0X19pdGVtLWhlYWRlclxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PGgzIGNsYXNzPVxcXCJwcmljZS1saXN0X190aXRsZVxcXCI+0KDQtdC80L7QvdGC0L3Ri9C1INGD0YHQu9GD0LPQuDwvaDM+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PHNwYW4gY2xhc3M9XFxcInByaWNlLWxpc3RfX3RleHRcXFwiPtCU0LjQsNCz0L3QvtGB0YLQuNC60LA8L3NwYW4+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0PC9saT5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQ8bGkgY2xhc3M9XFxcInByaWNlLWxpc3RfX2l0ZW0tbWFpblxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PGgzIGNsYXNzPVxcXCJwcmljZS1saXN0X190aXRsZVxcXCI+0KbQtdC90LA8L2gzPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDxzcGFuIGNsYXNzPVxcXCJwcmljZS1saXN0X190ZXh0XFxcIj7QkdC10YHQv9C70LDRgtC90L48L3NwYW4+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0PC9saT5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQ8bGkgY2xhc3M9XFxcInByaWNlLWxpc3RfX2l0ZW0tZm9vdGVyXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJwcmljZS1saXN0X19pdGVtLWZvb3Rlci13cmFwXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8aDMgY2xhc3M9XFxcInByaWNlLWxpc3RfX3RpdGxlXFxcIj7QodGA0L7QujwvaDM+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PHNwYW4gY2xhc3M9XFxcInByaWNlLWxpc3RfX3RleHRcXFwiPjMwINC80LjQvTwvc3Bhbj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8L2Rpdj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8YSBjbGFzcz1cXFwicHJpY2UtbGlzdF9fbGluayBpY29uLWRyb3Bkb3duXFxcIiBocmVmPVxcXCIjXFxcIj7Ql9Cw0LrQsNC30LDRgtGMPC9hPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdDwvbGk+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PC91bD5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8L2xpPlxcclxcblxcdFxcdFxcdFxcdFxcdDxsaSBjbGFzcz1cXFwic3dpcGVyLXNsaWRlIHByaWNlLWxpc3RfX2l0ZW1cXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDx1bCBjbGFzcz1cXFwicHJpY2UtbGlzdF9faXRlbS1saXN0XFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQ8bGkgY2xhc3M9XFxcInByaWNlLWxpc3RfX2l0ZW0taGVhZGVyXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8aDMgY2xhc3M9XFxcInByaWNlLWxpc3RfX3RpdGxlXFxcIj7QoNC10LzQvtC90YLQvdGL0LUg0YPRgdC70YPQs9C4PC9oMz5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8c3BhbiBjbGFzcz1cXFwicHJpY2UtbGlzdF9fdGV4dFxcXCI+0JTQuNCw0LPQvdC+0YHRgtC40LrQsDwvc3Bhbj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQ8L2xpPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdDxsaSBjbGFzcz1cXFwicHJpY2UtbGlzdF9faXRlbS1tYWluXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8aDMgY2xhc3M9XFxcInByaWNlLWxpc3RfX3RpdGxlXFxcIj7QptC10L3QsDwvaDM+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PHNwYW4gY2xhc3M9XFxcInByaWNlLWxpc3RfX3RleHRcXFwiPtCR0LXRgdC/0LvQsNGC0L3Qvjwvc3Bhbj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQ8L2xpPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdDxsaSBjbGFzcz1cXFwicHJpY2UtbGlzdF9faXRlbS1mb290ZXJcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcInByaWNlLWxpc3RfX2l0ZW0tZm9vdGVyLXdyYXBcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDxoMyBjbGFzcz1cXFwicHJpY2UtbGlzdF9fdGl0bGVcXFwiPtCh0YDQvtC6PC9oMz5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8c3BhbiBjbGFzcz1cXFwicHJpY2UtbGlzdF9fdGV4dFxcXCI+MzAg0LzQuNC9PC9zcGFuPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDwvZGl2PlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDxhIGNsYXNzPVxcXCJwcmljZS1saXN0X19saW5rIGljb24tZHJvcGRvd25cXFwiIGhyZWY9XFxcIiNcXFwiPtCX0LDQutCw0LfQsNGC0Yw8L2E+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0PC9saT5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8L3VsPlxcclxcblxcdFxcdFxcdFxcdFxcdDwvbGk+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PGxpIGNsYXNzPVxcXCJzd2lwZXItc2xpZGUgcHJpY2UtbGlzdF9faXRlbVxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PHVsIGNsYXNzPVxcXCJwcmljZS1saXN0X19pdGVtLWxpc3RcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdDxsaSBjbGFzcz1cXFwicHJpY2UtbGlzdF9faXRlbS1oZWFkZXJcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDxoMyBjbGFzcz1cXFwicHJpY2UtbGlzdF9fdGl0bGVcXFwiPtCg0LXQvNC+0L3RgtC90YvQtSDRg9GB0LvRg9Cz0Lg8L2gzPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDxzcGFuIGNsYXNzPVxcXCJwcmljZS1saXN0X190ZXh0XFxcIj7QlNC40LDQs9C90L7RgdGC0LjQutCwPC9zcGFuPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdDwvbGk+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0PGxpIGNsYXNzPVxcXCJwcmljZS1saXN0X19pdGVtLW1haW5cXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDxoMyBjbGFzcz1cXFwicHJpY2UtbGlzdF9fdGl0bGVcXFwiPtCm0LXQvdCwPC9oMz5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8c3BhbiBjbGFzcz1cXFwicHJpY2UtbGlzdF9fdGV4dFxcXCI+0JHQtdGB0L/Qu9Cw0YLQvdC+PC9zcGFuPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdDwvbGk+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0PGxpIGNsYXNzPVxcXCJwcmljZS1saXN0X19pdGVtLWZvb3RlclxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwicHJpY2UtbGlzdF9faXRlbS1mb290ZXItd3JhcFxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PGgzIGNsYXNzPVxcXCJwcmljZS1saXN0X190aXRsZVxcXCI+0KHRgNC+0Lo8L2gzPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDxzcGFuIGNsYXNzPVxcXCJwcmljZS1saXN0X190ZXh0XFxcIj4zMCDQvNC40L08L3NwYW4+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PC9kaXY+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PGEgY2xhc3M9XFxcInByaWNlLWxpc3RfX2xpbmsgaWNvbi1kcm9wZG93blxcXCIgaHJlZj1cXFwiI1xcXCI+0JfQsNC60LDQt9Cw0YLRjDwvYT5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQ8L2xpPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDwvdWw+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PC9saT5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8bGkgY2xhc3M9XFxcInN3aXBlci1zbGlkZSBwcmljZS1saXN0X19pdGVtXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8dWwgY2xhc3M9XFxcInByaWNlLWxpc3RfX2l0ZW0tbGlzdFxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0PGxpIGNsYXNzPVxcXCJwcmljZS1saXN0X19pdGVtLWhlYWRlclxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PGgzIGNsYXNzPVxcXCJwcmljZS1saXN0X190aXRsZVxcXCI+0KDQtdC80L7QvdGC0L3Ri9C1INGD0YHQu9GD0LPQuDwvaDM+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PHNwYW4gY2xhc3M9XFxcInByaWNlLWxpc3RfX3RleHRcXFwiPtCU0LjQsNCz0L3QvtGB0YLQuNC60LA8L3NwYW4+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0PC9saT5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQ8bGkgY2xhc3M9XFxcInByaWNlLWxpc3RfX2l0ZW0tbWFpblxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PGgzIGNsYXNzPVxcXCJwcmljZS1saXN0X190aXRsZVxcXCI+0KbQtdC90LA8L2gzPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDxzcGFuIGNsYXNzPVxcXCJwcmljZS1saXN0X190ZXh0XFxcIj7QkdC10YHQv9C70LDRgtC90L48L3NwYW4+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0PC9saT5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQ8bGkgY2xhc3M9XFxcInByaWNlLWxpc3RfX2l0ZW0tZm9vdGVyXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJwcmljZS1saXN0X19pdGVtLWZvb3Rlci13cmFwXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8aDMgY2xhc3M9XFxcInByaWNlLWxpc3RfX3RpdGxlXFxcIj7QodGA0L7QujwvaDM+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PHNwYW4gY2xhc3M9XFxcInByaWNlLWxpc3RfX3RleHRcXFwiPjMwINC80LjQvTwvc3Bhbj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8L2Rpdj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8YSBjbGFzcz1cXFwicHJpY2UtbGlzdF9fbGluayBpY29uLWRyb3Bkb3duXFxcIiBocmVmPVxcXCIjXFxcIj7Ql9Cw0LrQsNC30LDRgtGMPC9hPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdDwvbGk+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PC91bD5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8L2xpPlxcclxcblxcdFxcdFxcdFxcdFxcdDxsaSBjbGFzcz1cXFwic3dpcGVyLXNsaWRlIHByaWNlLWxpc3RfX2l0ZW1cXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDx1bCBjbGFzcz1cXFwicHJpY2UtbGlzdF9faXRlbS1saXN0XFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQ8bGkgY2xhc3M9XFxcInByaWNlLWxpc3RfX2l0ZW0taGVhZGVyXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8aDMgY2xhc3M9XFxcInByaWNlLWxpc3RfX3RpdGxlXFxcIj7QoNC10LzQvtC90YLQvdGL0LUg0YPRgdC70YPQs9C4PC9oMz5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8c3BhbiBjbGFzcz1cXFwicHJpY2UtbGlzdF9fdGV4dFxcXCI+0JTQuNCw0LPQvdC+0YHRgtC40LrQsDwvc3Bhbj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQ8L2xpPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdDxsaSBjbGFzcz1cXFwicHJpY2UtbGlzdF9faXRlbS1tYWluXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8aDMgY2xhc3M9XFxcInByaWNlLWxpc3RfX3RpdGxlXFxcIj7QptC10L3QsDwvaDM+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PHNwYW4gY2xhc3M9XFxcInByaWNlLWxpc3RfX3RleHRcXFwiPtCR0LXRgdC/0LvQsNGC0L3Qvjwvc3Bhbj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQ8L2xpPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdDxsaSBjbGFzcz1cXFwicHJpY2UtbGlzdF9faXRlbS1mb290ZXJcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcInByaWNlLWxpc3RfX2l0ZW0tZm9vdGVyLXdyYXBcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDxoMyBjbGFzcz1cXFwicHJpY2UtbGlzdF9fdGl0bGVcXFwiPtCh0YDQvtC6PC9oMz5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8c3BhbiBjbGFzcz1cXFwicHJpY2UtbGlzdF9fdGV4dFxcXCI+MzAg0LzQuNC9PC9zcGFuPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDwvZGl2PlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDxhIGNsYXNzPVxcXCJwcmljZS1saXN0X19saW5rIGljb24tZHJvcGRvd25cXFwiIGhyZWY9XFxcIiNcXFwiPtCX0LDQutCw0LfQsNGC0Yw8L2E+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0PC9saT5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8L3VsPlxcclxcblxcdFxcdFxcdFxcdFxcdDwvbGk+XFxyXFxuXFx0XFx0XFx0XFx0PC91bD5cXHJcXG5cXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJzd2lwZXItcGFnaW5hdGlvbiBzZXJ2aWNlLXByaWNlX19wYWdpbmF0aW9uXFxcIj48L2Rpdj5cXHJcXG5cXHRcXHRcXHQ8L2Rpdj5cXHJcXG5cXHJcXG5cXHRcXHRcXHQ8dGFibGUgY2xhc3M9XFxcInNlcnZpY2UtcHJpY2VfX3RhYmxlLXByaWNlIHRhYmxlLXByaWNlXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHQ8dHIgY2xhc3M9XFxcInRhYmxlLXByaWNlX19oZWFkZXJcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdDx0aCBjbGFzcz1cXFwidGFibGUtcHJpY2VfX2hlYWRlci1pdGVtXFxcIj7QoNC10LzQvtC90YLQvdGL0LUg0YPRgdC70YPQs9C4PC90aD5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8dGggY2xhc3M9XFxcInRhYmxlLXByaWNlX19oZWFkZXItaXRlbVxcXCI+0KbQtdC90LA8L3RoPlxcclxcblxcdFxcdFxcdFxcdFxcdDx0aCBjbGFzcz1cXFwidGFibGUtcHJpY2VfX2hlYWRlci1pdGVtXFxcIj7QodGA0L7QujwvdGg+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PHRoIGNsYXNzPVxcXCJ0YWJsZS1wcmljZV9faGVhZGVyLWl0ZW1cXFwiPjwvdGg+XFxyXFxuXFx0XFx0XFx0XFx0PC90cj5cXHJcXG5cXHRcXHRcXHRcXHQ8dHIgY2xhc3M9XFxcInRhYmxlLXByaWNlX19saXN0XFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8dGQgY2xhc3M9XFxcInRhYmxlLXByaWNlX19pdGVtXFxcIj7QlNC40LDQs9C90L7RgdGC0LjQutCwPC90ZD5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8dGQgY2xhc3M9XFxcInRhYmxlLXByaWNlX19pdGVtXFxcIj7QkdC10YHQv9C70LDRgtC90L48L3RkPlxcclxcblxcdFxcdFxcdFxcdFxcdDx0ZCBjbGFzcz1cXFwidGFibGUtcHJpY2VfX2l0ZW1cXFwiPjMwINC80LjQvTwvdGQ+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PHRkIGNsYXNzPVxcXCJ0YWJsZS1wcmljZV9faXRlbVxcXCI+PGEgY2xhc3M9XFxcInRhYmxlLXByaWNlX19saW5rIGljb24tZHJvcGRvd25cXFwiIGhyZWY9XFxcIiNcXFwiPtCX0LDQutCw0LfQsNGC0Yw8L2E+PC90ZD5cXHJcXG5cXHRcXHRcXHRcXHQ8L3RyPlxcclxcblxcdFxcdFxcdFxcdDx0ciBjbGFzcz1cXFwidGFibGUtcHJpY2VfX2xpc3RcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdDx0ZCBjbGFzcz1cXFwidGFibGUtcHJpY2VfX2l0ZW1cXFwiPtCX0LDQvNC10L3QsCDQtNC40YHQv9C70LXRjzwvdGQ+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PHRkIGNsYXNzPVxcXCJ0YWJsZS1wcmljZV9faXRlbVxcXCI+MTAwMCAmIzgzODE7PC90ZD5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8dGQgY2xhc3M9XFxcInRhYmxlLXByaWNlX19pdGVtXFxcIj4zMC0xMjAg0LzQuNC9PC90ZD5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8dGQgY2xhc3M9XFxcInRhYmxlLXByaWNlX19pdGVtXFxcIj48YSBjbGFzcz1cXFwidGFibGUtcHJpY2VfX2xpbmsgaWNvbi1kcm9wZG93blxcXCIgaHJlZj1cXFwiI1xcXCI+0JfQsNC60LDQt9Cw0YLRjDwvYT48L3RkPlxcclxcblxcdFxcdFxcdFxcdDwvdHI+XFxyXFxuXFx0XFx0XFx0XFx0PHRyIGNsYXNzPVxcXCJ0YWJsZS1wcmljZV9fbGlzdFxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PHRkIGNsYXNzPVxcXCJ0YWJsZS1wcmljZV9faXRlbVxcXCI+0JfQsNC80LXQvdCwINC/0L7Qu9C40YTQvtC90LjRh9C10YHQutC+0LPQviDQtNC40L3QsNC80LjQutCwPC90ZD5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8dGQgY2xhc3M9XFxcInRhYmxlLXByaWNlX19pdGVtXFxcIj4xMDAwICYjODM4MTs8L3RkPlxcclxcblxcdFxcdFxcdFxcdFxcdDx0ZCBjbGFzcz1cXFwidGFibGUtcHJpY2VfX2l0ZW1cXFwiPjMwLTEyMCDQvNC40L08L3RkPlxcclxcblxcdFxcdFxcdFxcdFxcdDx0ZCBjbGFzcz1cXFwidGFibGUtcHJpY2VfX2l0ZW1cXFwiPjxhIGNsYXNzPVxcXCJ0YWJsZS1wcmljZV9fbGluayBpY29uLWRyb3Bkb3duXFxcIiBocmVmPVxcXCIjXFxcIj7Ql9Cw0LrQsNC30LDRgtGMPC9hPjwvdGQ+XFxyXFxuXFx0XFx0XFx0XFx0PC90cj5cXHJcXG5cXHRcXHRcXHRcXHQ8dHIgY2xhc3M9XFxcInRhYmxlLXByaWNlX19saXN0XFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8dGQgY2xhc3M9XFxcInRhYmxlLXByaWNlX19pdGVtXFxcIj7QotC10YHRgtC40YDQvtCy0LDQvdC40LUg0YEg0LLRi9C00LDRh9C10Lkg0YLQtdGF0L3QuNGH0LXRgdC60L7Qs9C+INC30LDQutC70Y7Rh9C10L3QuNGPPC90ZD5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8dGQgY2xhc3M9XFxcInRhYmxlLXByaWNlX19pdGVtXFxcIj4xMDAwICYjODM4MTs8L3RkPlxcclxcblxcdFxcdFxcdFxcdFxcdDx0ZCBjbGFzcz1cXFwidGFibGUtcHJpY2VfX2l0ZW1cXFwiPjMwLTEyMCDQvNC40L08L3RkPlxcclxcblxcdFxcdFxcdFxcdFxcdDx0ZCBjbGFzcz1cXFwidGFibGUtcHJpY2VfX2l0ZW1cXFwiPjxhIGNsYXNzPVxcXCJ0YWJsZS1wcmljZV9fbGluayBpY29uLWRyb3Bkb3duXFxcIiBocmVmPVxcXCIjXFxcIj7Ql9Cw0LrQsNC30LDRgtGMPC9hPjwvdGQ+XFxyXFxuXFx0XFx0XFx0XFx0PC90cj5cXHJcXG5cXHRcXHRcXHRcXHQ8dHIgY2xhc3M9XFxcInRhYmxlLXByaWNlX19saXN0XFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8dGQgY2xhc3M9XFxcInRhYmxlLXByaWNlX19pdGVtXFxcIj7Ql9Cw0LzQtdC90LAg0L/RgNC+0LPRgNCw0LzQvNC90L7Qs9C+INC+0LHQtdGB0L/QtdGH0LXQvdC40Y88L3RkPlxcclxcblxcdFxcdFxcdFxcdFxcdDx0ZCBjbGFzcz1cXFwidGFibGUtcHJpY2VfX2l0ZW1cXFwiPjEwMDAgJiM4MzgxOzwvdGQ+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PHRkIGNsYXNzPVxcXCJ0YWJsZS1wcmljZV9faXRlbVxcXCI+MzAtMTIwINC80LjQvTwvdGQ+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PHRkIGNsYXNzPVxcXCJ0YWJsZS1wcmljZV9faXRlbVxcXCI+PGEgY2xhc3M9XFxcInRhYmxlLXByaWNlX19saW5rIGljb24tZHJvcGRvd25cXFwiIGhyZWY9XFxcIiNcXFwiPtCX0LDQutCw0LfQsNGC0Yw8L2E+PC90ZD5cXHJcXG5cXHRcXHRcXHRcXHQ8L3RyPlxcclxcblxcdFxcdFxcdDwvdGFibGU+XFxyXFxuXFx0XFx0XFx0XFxyXFxuXFx0XFx0XFx0PHAgY2xhc3M9XFxcInNlcnZpY2UtcHJpY2VfX3RleHRcXFwiPlxcclxcblxcdFxcdFxcdFxcdNCS0YHQtSDRhtC10L3RiyDRg9C60LDQt9Cw0L3RiyDRgSDRg9GH0LXRgtC+0Lwg0J3QlNChLiDQodGC0L7QuNC80L7RgdGC0Ywg0YDQtdC80L7QvdGC0LAg0YPQutCw0LfQsNC90LAg0L3QsCDQtdC00LjQvdC40YfQvdGD0Y4g0YPRgdC70YPQs9GDLiDQlNC70Y8g0L/QvtC70YPRh9C10L3QuNGPINC60L7QvNC80LXRgNGH0LXRgdC60L7Qs9C+INC/0YDQtdC00LvQvtC20LXQvdC40Y8g0L3QsCDQv9C+0YHRgtC+0Y/QvdC90L7QtSDQvtCx0YHQu9GD0LbQuNCy0LDQvdC40LUsINC+0YHRgtCw0LLRjNGC0LUg0LfQsNGP0LLQutGDLlxcclxcblxcdFxcdFxcdDwvcD5cXHJcXG5cXHJcXG5cXHRcXHRcXHQ8YSBjbGFzcz1cXFwic2VydmljZS1wcmljZV9fbGluayBpY29uLWRyb3Bkb3duXFxcIiBocmVmPVxcXCIjXFxcIj7Qn9C+0LvRg9GH0LjRgtGMINC60L7QvNC80LXRgNGH0LXRgdC60L7QtSDQv9GA0LXQtNC70L7QttC10L3QuNC1PC9hPlxcclxcblxcclxcblxcdFxcdDwvc2VjdGlvbj5cXHJcXG5cXHJcXG5cXHQ8L21haW4+XFxyXFxuXFxyXFxuXFx0PCEtLSDQntCx0YDQsNGC0L3QsNGPINGB0LLRj9C30YwgLS0+XFxyXFxuXFx0PHNlY3Rpb24gY2xhc3M9XFxcImNwcy1wb3BhcCBjcHMtcG9wYXAtLW5vbmUgYmxvay1qcy1hY3RpdmVcXFwiIGRhdGEtdGFyZ2V0PVxcXCJvbmUtYnRuXFxcIj5cXHJcXG5cXHRcXHQ8aDIgY2xhc3M9XFxcImNwcy1wb3BhcF9fdGl0bGVcXFwiPtCe0LHRgNCw0YLQvdCw0Y8g0YHQstGP0LfRjDwvaDI+XFxyXFxuXFx0XFx0PGZvcm0gY2xhc3M9XFxcImNwcy1wb3BhcF9fZmItZm9ybSBmYi1mb3JtXFxcIiBhY3Rpb249XFxcIiNcXFwiIG1ldGhvZD1cXFwiUE9TVFxcXCIgZW5jdHlwZT1cXFwibXVsdGlwYXJ0L2Zvcm0tZGF0YVxcXCI+XFxyXFxuXFx0XFx0XFx0PGxhYmVsIGZvcj1cXFwiZmItbmFtZVxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0PHNwYW4gY2xhc3M9XFxcInZpc3VhbGx5LWhpZGRlblxcXCI+0JjQvNGPPC9zcGFuPlxcclxcblxcdFxcdFxcdFxcdDxpbnB1dCBjbGFzcz1cXFwiZmItZm9ybV9faW5wdXRcXFwiIHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcIm5hbWVcXFwiIHBsYWNlaG9sZGVyPVxcXCLQmNC80Y9cXFwiIHJlcXVpcmVkPVxcXCJyZXF1aXJlZFxcXCIgaWQ9XFxcImZiLW5hbWVcXFwiPlxcclxcblxcdFxcdFxcdDwvbGFiZWw+XFxyXFxuXFx0XFx0XFx0PGxhYmVsIGZvcj1cXFwiZmItcGhvbmVcXFwiPlxcclxcblxcdFxcdFxcdFxcdDxzcGFuIGNsYXNzPVxcXCJ2aXN1YWxseS1oaWRkZW5cXFwiPtCi0LXQu9C10YTQvtC9PC9zcGFuPlxcclxcblxcdFxcdFxcdFxcdDxpbnB1dCBjbGFzcz1cXFwiZmItZm9ybV9faW5wdXRcXFwiIHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcInBob25lXFxcIiBwbGFjZWhvbGRlcj1cXFwi0KLQtdC70LXRhNC+0L1cXFwiIHJlcXVpcmVkPVxcXCJyZXF1aXJlZFxcXCIgaWQ9XFxcImZiLXBob25lXFxcIj5cXHJcXG5cXHRcXHRcXHQ8L2xhYmVsPlxcclxcblxcdFxcdFxcdDxsYWJlbCBmb3I9XFxcImZiLWVtYWlsXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHQ8c3BhbiBjbGFzcz1cXFwidmlzdWFsbHktaGlkZGVuXFxcIj7QrdC70LXRgtGA0L7QvdC90LDRjyDQv9C+0YfRgtCwPC9zcGFuPlxcclxcblxcdFxcdFxcdFxcdDxpbnB1dCBjbGFzcz1cXFwiZmItZm9ybV9faW5wdXRcXFwiIHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcImVtYWlsXFxcIiBwbGFjZWhvbGRlcj1cXFwi0K3Qu9C10YLRgNC+0L3QvdCw0Y8g0L/QvtGH0YLQsFxcXCIgcmVxdWlyZWQ9XFxcInJlcXVpcmVkXFxcIiBpZD1cXFwiZmItZW1haWxcXFwiPlxcclxcblxcdFxcdFxcdDwvbGFiZWw+XFxyXFxuXFx0XFx0XFx0PGxhYmVsIGZvcj1cXFwiZmItbWVzc2FnZVxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0PHNwYW4gY2xhc3M9XFxcInZpc3VhbGx5LWhpZGRlblxcXCI+0KHQvtC+0LHRidC10L3QuNC1PC9zcGFuPlxcclxcblxcdFxcdFxcdFxcdDx0ZXh0YXJlYSBjbGFzcz1cXFwiZmItZm9ybV9faW5wdXQgZmItZm9ybV9fdGV4dGFyZWFcXFwiIHBsYWNlaG9sZGVyPVxcXCLQodC+0L7QsdGJ0LXQvdC40LVcXFwiIGlkPVxcXCJmYi1tZXNzYWdlXFxcIj48L3RleHRhcmVhPlxcclxcblxcdFxcdFxcdDwvbGFiZWw+XFxyXFxuXFx0XFx0XFx0PHAgY2xhc3M9XFxcImZiLWZvcm1fX3RleHRcXFwiPlxcclxcblxcdFxcdFxcdFxcdNCd0LDQttC40LzQsNGPIOKAnNC+0YLQv9GA0LDQstC40YLRjOKAnSwg0LLRiyDQtNCw0LXRgtC1INGB0L7Qs9C70LDRgdC40LUg0L3QsCA8c3Ryb25nIGNsYXNzPVxcXCJmYi1mb3JtX190ZXh0LS1jb2xvci1yYWRpY2FsLXJlZFxcXCI+0L7QsdGA0LDQsdC+0YLQutGDINC/0LXRgNGB0L7QvdCw0LvRjNC90YvRhSDQtNCw0L3QvdGL0YU8L3N0cm9uZz4g0Lgg0YHQvtCz0LvQsNGI0LDQtdGC0LXRgdGMINGBINC90LDRiNC10LkgPGEgY2xhc3M9XFxcImZiLWZvcm1fX3RleHQtLWNvbG9yLXJhZGljYWwtcmVkXFxcIiBocmVmPVxcXCIjXFxcIj7Qv9C+0LvQuNGC0LjQutC+0Lkg0LrQvtC90YTQuNC00LXQvdGG0LjQsNC70YzQvdC+0YHRgtC4PC9hPlxcclxcblxcdFxcdFxcdDwvcD5cXHJcXG5cXHRcXHRcXHQ8YnV0dG9uIGNsYXNzPVxcXCJmYi1mb3JtX19idG4gaWNvbi1kcm9wZG93blxcXCIgdHlwZT1cXFwic3VibWl0XFxcIj7QntGC0L/RgNCw0LLQuNGC0Yw8L2J1dHRvbj5cXHJcXG5cXHRcXHQ8L2Zvcm0+XFxyXFxuXFx0XFx0PGJ1dHRvbiBjbGFzcz1cXFwiY3BzLXBvcGFwX19idG4gYnRuLWNsb3NlIGJ1dHRvbi1qcy1vcGVuXFxcIj5cXHJcXG5cXHRcXHRcXHQ8c3BhbiBjbGFzcz1cXFwidmlzdWFsbHktaGlkZGVuXFxcIj7Ql9Cw0LrRgNGL0YLRjCDQvNC10L3Rjjwvc3Bhbj5cXHJcXG5cXHRcXHRcXHQ8c3BhbiBjbGFzcz1cXFwiYnRuLWNsb3NlX19lbG0tYnRuXFxcIj48L3NwYW4+XFxyXFxuXFx0XFx0PC9idXR0b24+XFxyXFxuXFx0XFx0PGRpdiBjbGFzcz1cXFwiY3BzLWpzLWJnIGNwcy1wb3BhcF9fYmdcXFwiPjwvZGl2PlxcclxcblxcdDwvc2VjdGlvbj5cXHJcXG5cXHJcXG5cXHQ8IS0tINCh0YLQsNGC0YPRgSDRgNC10LzQvtC90YLQsCAtLT5cXHJcXG5cXHQ8c2VjdGlvbiBjbGFzcz1cXFwiY3BzLXBvcGFwIGNwcy1wb3BhcC0tbm9uZSBibG9rLWpzLWFjdGl2ZVxcXCIgIGRhdGEtdGFyZ2V0PVxcXCJ0d28tYnRuXFxcIj5cXHJcXG5cXHRcXHQ8aDIgY2xhc3M9XFxcImNwcy1wb3BhcF9fdGl0bGVcXFwiPtCh0YLQsNGC0YPRgSDRgNC10LzQvtC90YLQsDwvaDI+XFxyXFxuXFx0XFx0PGZvcm0gY2xhc3M9XFxcImNwcy1wb3BhcF9fZmItZm9ybSBmYi1mb3JtXFxcIiBhY3Rpb249XFxcIiNcXFwiIG1ldGhvZD1cXFwiUE9TVFxcXCIgZW5jdHlwZT1cXFwibXVsdGlwYXJ0L2Zvcm0tZGF0YVxcXCI+XFxyXFxuXFx0XFx0XFx0PGxhYmVsPlxcclxcblxcdFxcdFxcdFxcdDxzcGFuIGNsYXNzPVxcXCJ2aXN1YWxseS1oaWRkZW5cXFwiPtCi0LXQu9C10YTQvtC9PC9zcGFuPlxcclxcblxcdFxcdFxcdFxcdDxpbnB1dCBjbGFzcz1cXFwiZmItZm9ybV9faW5wdXRcXFwiIHR5cGU9XFxcInRlbFxcXCIgbmFtZT1cXFwicGhvbmVcXFwiIHBsYWNlaG9sZGVyPVxcXCLQotC10LvQtdGE0L7QvVxcXCIgcmVxdWlyZWQ9XFxcInJlcXVpcmVkXFxcIj5cXHJcXG5cXHRcXHRcXHQ8L2xhYmVsPlxcclxcblxcdFxcdFxcdDxwIGNsYXNzPVxcXCJmYi1mb3JtX190ZXh0XFxcIj5cXHJcXG5cXHRcXHRcXHRcXHTQndCw0LbQuNC80LDRjyDigJzQvtGC0L/RgNCw0LLQuNGC0YzigJ0sINCy0Ysg0LTQsNC10YLQtSDRgdC+0LPQu9Cw0YHQuNC1INC90LAgPHN0cm9uZyBjbGFzcz1cXFwiZmItZm9ybV9fdGV4dC0tY29sb3ItcmFkaWNhbC1yZWRcXFwiPtC+0LHRgNCw0LHQvtGC0LrRgyDQv9C10YDRgdC+0L3QsNC70YzQvdGL0YUg0LTQsNC90L3Ri9GFPC9zdHJvbmc+INC4INGB0L7Qs9C70LDRiNCw0LXRgtC10YHRjCDRgSDQvdCw0YjQtdC5IDxhIGNsYXNzPVxcXCJmYi1mb3JtX190ZXh0LS1jb2xvci1yYWRpY2FsLXJlZFxcXCIgaHJlZj1cXFwiI1xcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiPtC/0L7Qu9C40YLQuNC60L7QuSDQutC+0L3RhNC40LTQtdC90YbQuNCw0LvRjNC90L7RgdGC0Lg8L2E+XFxyXFxuXFx0XFx0XFx0PC9wPlxcclxcblxcdFxcdFxcdDxidXR0b24gY2xhc3M9XFxcImZiLWZvcm1fX2J0biBpY29uLWRyb3Bkb3duXFxcIiB0eXBlPVxcXCJzdWJtaXRcXFwiPtCe0YLQv9GA0LDQstC40YLRjDwvYnV0dG9uPlxcclxcblxcdFxcdDwvZm9ybT5cXHJcXG5cXHRcXHQ8YnV0dG9uIGNsYXNzPVxcXCJjcHMtcG9wYXBfX2J0biBidG4tY2xvc2UgYnV0dG9uLWpzLW9wZW5cXFwiPlxcclxcblxcdFxcdFxcdDxzcGFuIGNsYXNzPVxcXCJ2aXN1YWxseS1oaWRkZW5cXFwiPtCX0LDQutGA0YvRgtGMINC80LXQvdGOPC9zcGFuPlxcclxcblxcdFxcdFxcdDxzcGFuIGNsYXNzPVxcXCJidG4tY2xvc2VfX2VsbS1idG5cXFwiPjwvc3Bhbj5cXHJcXG5cXHRcXHQ8L2J1dHRvbj5cXHJcXG5cXHRcXHJcXG5cXHRcXHJcXG5cXHRcXHQ8ZGl2IGNsYXNzPVxcXCJjcHMtanMtYmcgY3BzLXBvcGFwX19iZ1xcXCI+PC9kaXY+XFxyXFxuXFx0PC9zZWN0aW9uPlxcclxcblxcdDwhLS0g0JfQsNC60LDQt9Cw0YLRjCDQt9Cy0L7QvdC+0LogLS0+XFxyXFxuXFx0PHNlY3Rpb24gY2xhc3M9XFxcImNwcy1wb3BhcCBjcHMtcG9wYXAtLW5vbmUgYmxvay1qcy1hY3RpdmVcXFwiICBkYXRhLXRhcmdldD1cXFwidGhyZWUtYnRuXFxcIj5cXHJcXG5cXHRcXHQ8aDIgY2xhc3M9XFxcImNwcy1wb3BhcF9fdGl0bGVcXFwiPtCX0LDQutCw0LfQsNGC0Ywg0LfQstC+0L3QvtC6PC9oMj5cXHJcXG5cXHRcXHQ8Zm9ybSBjbGFzcz1cXFwiY3BzLXBvcGFwX19mYi1mb3JtIGZiLWZvcm1cXFwiIGFjdGlvbj1cXFwiI1xcXCIgbWV0aG9kPVxcXCJQT1NUXFxcIiBlbmN0eXBlPVxcXCJtdWx0aXBhcnQvZm9ybS1kYXRhXFxcIj5cXHJcXG5cXHRcXHRcXHQ8bGFiZWw+XFxyXFxuXFx0XFx0XFx0XFx0PHNwYW4gY2xhc3M9XFxcInZpc3VhbGx5LWhpZGRlblxcXCI+0KLQtdC70LXRhNC+0L08L3NwYW4+XFxyXFxuXFx0XFx0XFx0XFx0PGlucHV0IGNsYXNzPVxcXCJmYi1mb3JtX19pbnB1dFxcXCIgdHlwZT1cXFwidGVsXFxcIiBuYW1lPVxcXCJwaG9uZVxcXCIgcGxhY2Vob2xkZXI9XFxcItCi0LXQu9C10YTQvtC9XFxcIiByZXF1aXJlZD1cXFwicmVxdWlyZWRcXFwiPlxcclxcblxcdFxcdFxcdDwvbGFiZWw+XFxyXFxuXFx0XFx0XFx0PHAgY2xhc3M9XFxcImZiLWZvcm1fX3RleHRcXFwiPlxcclxcblxcdFxcdFxcdFxcdNCd0LDQttC40LzQsNGPIOKAnNC+0YLQv9GA0LDQstC40YLRjOKAnSwg0LLRiyDQtNCw0LXRgtC1INGB0L7Qs9C70LDRgdC40LUg0L3QsCA8c3Ryb25nIGNsYXNzPVxcXCJmYi1mb3JtX190ZXh0LS1jb2xvci1yYWRpY2FsLXJlZFxcXCI+0L7QsdGA0LDQsdC+0YLQutGDINC/0LXRgNGB0L7QvdCw0LvRjNC90YvRhSDQtNCw0L3QvdGL0YU8L3N0cm9uZz4g0Lgg0YHQvtCz0LvQsNGI0LDQtdGC0LXRgdGMINGBINC90LDRiNC10LkgPGEgY2xhc3M9XFxcImZiLWZvcm1fX3RleHQtLWNvbG9yLXJhZGljYWwtcmVkXFxcIiBocmVmPVxcXCIjXFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCI+0L/QvtC70LjRgtC40LrQvtC5INC60L7QvdGE0LjQtNC10L3RhtC40LDQu9GM0L3QvtGB0YLQuDwvYT5cXHJcXG5cXHRcXHRcXHQ8L3A+XFxyXFxuXFx0XFx0XFx0PGJ1dHRvbiBjbGFzcz1cXFwiZmItZm9ybV9fYnRuIGljb24tZHJvcGRvd25cXFwiIHR5cGU9XFxcInN1Ym1pdFxcXCI+0J7RgtC/0YDQsNCy0LjRgtGMPC9idXR0b24+XFxyXFxuXFx0XFx0PC9mb3JtPlxcclxcblxcdFxcdDxidXR0b24gY2xhc3M9XFxcImNwcy1wb3BhcF9fYnRuIGJ0bi1jbG9zZSBidXR0b24tanMtb3BlblxcXCI+XFxyXFxuXFx0XFx0XFx0PHNwYW4gY2xhc3M9XFxcInZpc3VhbGx5LWhpZGRlblxcXCI+0JfQsNC60YDRi9GC0Ywg0LzQtdC90Y48L3NwYW4+XFxyXFxuXFx0XFx0XFx0PHNwYW4gY2xhc3M9XFxcImJ0bi1jbG9zZV9fZWxtLWJ0blxcXCI+PC9zcGFuPlxcclxcblxcdFxcdDwvYnV0dG9uPlxcclxcblxcdFxcclxcblxcdFxcclxcblxcdFxcdDxkaXYgY2xhc3M9XFxcImNwcy1qcy1iZyBjcHMtcG9wYXBfX2JnXFxcIj48L2Rpdj5cXHJcXG5cXHQ8L3NlY3Rpb24+XFxyXFxuXFx0PCEtLSDQl9Cw0LrQsNC30LDRgtGMINC30LLQvtC90L7QuiAtLT5cXHJcXG5cXHQ8c2VjdGlvbiBjbGFzcz1cXFwiY3BzLXBvcGFwIGNwcy1wb3BhcC0tbm9uZSBibG9rLWpzLWFjdGl2ZVxcXCIgIGRhdGEtdGFyZ2V0PVxcXCJ0aHJlZS1idG5cXFwiPlxcclxcblxcdFxcdDxoMiBjbGFzcz1cXFwiY3BzLXBvcGFwX190aXRsZVxcXCI+0JfQsNC60LDQt9Cw0YLRjCDQt9Cy0L7QvdC+0Lo8L2gyPlxcclxcblxcdFxcdDxmb3JtIGNsYXNzPVxcXCJjcHMtcG9wYXBfX2ZiLWZvcm0gZmItZm9ybVxcXCIgYWN0aW9uPVxcXCIjXFxcIiBtZXRob2Q9XFxcIlBPU1RcXFwiIGVuY3R5cGU9XFxcIm11bHRpcGFydC9mb3JtLWRhdGFcXFwiPlxcclxcblxcdFxcdFxcdDxsYWJlbD5cXHJcXG5cXHRcXHRcXHRcXHQ8c3BhbiBjbGFzcz1cXFwidmlzdWFsbHktaGlkZGVuXFxcIj7QotC10LvQtdGE0L7QvTwvc3Bhbj5cXHJcXG5cXHRcXHRcXHRcXHQ8aW5wdXQgY2xhc3M9XFxcImZiLWZvcm1fX2lucHV0XFxcIiB0eXBlPVxcXCJ0ZWxcXFwiIG5hbWU9XFxcInBob25lXFxcIiBwbGFjZWhvbGRlcj1cXFwi0KLQtdC70LXRhNC+0L1cXFwiIHJlcXVpcmVkPVxcXCJyZXF1aXJlZFxcXCI+XFxyXFxuXFx0XFx0XFx0PC9sYWJlbD5cXHJcXG5cXHRcXHRcXHQ8cCBjbGFzcz1cXFwiZmItZm9ybV9fdGV4dFxcXCI+XFxyXFxuXFx0XFx0XFx0XFx00J3QsNC20LjQvNCw0Y8g4oCc0L7RgtC/0YDQsNCy0LjRgtGM4oCdLCDQstGLINC00LDQtdGC0LUg0YHQvtCz0LvQsNGB0LjQtSDQvdCwIDxzdHJvbmcgY2xhc3M9XFxcImZiLWZvcm1fX3RleHQtLWNvbG9yLXJhZGljYWwtcmVkXFxcIj7QvtCx0YDQsNCx0L7RgtC60YMg0L/QtdGA0YHQvtC90LDQu9GM0L3Ri9GFINC00LDQvdC90YvRhTwvc3Ryb25nPiDQuCDRgdC+0LPQu9Cw0YjQsNC10YLQtdGB0Ywg0YEg0L3QsNGI0LXQuSA8YSBjbGFzcz1cXFwiZmItZm9ybV9fdGV4dC0tY29sb3ItcmFkaWNhbC1yZWRcXFwiIGhyZWY9XFxcIiNcXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIj7Qv9C+0LvQuNGC0LjQutC+0Lkg0LrQvtC90YTQuNC00LXQvdGG0LjQsNC70YzQvdC+0YHRgtC4PC9hPlxcclxcblxcdFxcdFxcdDwvcD5cXHJcXG5cXHRcXHRcXHQ8YnV0dG9uIGNsYXNzPVxcXCJmYi1mb3JtX19idG4gaWNvbi1kcm9wZG93blxcXCIgdHlwZT1cXFwic3VibWl0XFxcIj7QntGC0L/RgNCw0LLQuNGC0Yw8L2J1dHRvbj5cXHJcXG5cXHRcXHQ8L2Zvcm0+XFxyXFxuXFx0XFx0PGJ1dHRvbiBjbGFzcz1cXFwiY3BzLXBvcGFwX19idG4gYnRuLWNsb3NlIGJ1dHRvbi1qcy1vcGVuXFxcIj5cXHJcXG5cXHRcXHRcXHQ8c3BhbiBjbGFzcz1cXFwidmlzdWFsbHktaGlkZGVuXFxcIj7Ql9Cw0LrRgNGL0YLRjCDQvNC10L3Rjjwvc3Bhbj5cXHJcXG5cXHRcXHRcXHQ8c3BhbiBjbGFzcz1cXFwiYnRuLWNsb3NlX19lbG0tYnRuXFxcIj48L3NwYW4+XFxyXFxuXFx0XFx0PC9idXR0b24+XFxyXFxuXFx0XFxyXFxuXFx0XFxyXFxuXFx0XFx0PGRpdiBjbGFzcz1cXFwiY3BzLWpzLWJnIGNwcy1wb3BhcF9fYmdcXFwiPjwvZGl2PlxcclxcblxcdDwvc2VjdGlvbj5cXHJcXG5cXHQ8IS0tINCd0LDRh9Cw0YLRjCDRh9Cw0YIgLS0+XFxyXFxuXFx0PHNlY3Rpb24gY2xhc3M9XFxcImNwcy1wb3BhcCBjcHMtcG9wYXAtLW5vbmUgYmxvay1qcy1hY3RpdmVcXFwiICBkYXRhLXRhcmdldD1cXFwiZm91ci1idG5cXFwiPlxcclxcblxcdFxcdDxoMiBjbGFzcz1cXFwiY3BzLXBvcGFwX190aXRsZVxcXCI+0J3QsNGH0LDRgtGMINGH0LDRgjwvaDI+XFxyXFxuXFx0XFx0PGZvcm0gY2xhc3M9XFxcImNwcy1wb3BhcF9fZmItZm9ybSBmYi1mb3JtXFxcIiBhY3Rpb249XFxcIiNcXFwiIG1ldGhvZD1cXFwiUE9TVFxcXCIgZW5jdHlwZT1cXFwibXVsdGlwYXJ0L2Zvcm0tZGF0YVxcXCI+XFxyXFxuXFx0XFx0XFx0PGxhYmVsPlxcclxcblxcdFxcdFxcdFxcdDxzcGFuIGNsYXNzPVxcXCJ2aXN1YWxseS1oaWRkZW5cXFwiPtCi0LXQu9C10YTQvtC9PC9zcGFuPlxcclxcblxcdFxcdFxcdFxcdDxpbnB1dCBjbGFzcz1cXFwiZmItZm9ybV9faW5wdXRcXFwiIHR5cGU9XFxcInRlbFxcXCIgbmFtZT1cXFwicGhvbmVcXFwiIHBsYWNlaG9sZGVyPVxcXCLQotC10LvQtdGE0L7QvVxcXCIgcmVxdWlyZWQ9XFxcInJlcXVpcmVkXFxcIj5cXHJcXG5cXHRcXHRcXHQ8L2xhYmVsPlxcclxcblxcdFxcdFxcdDxwIGNsYXNzPVxcXCJmYi1mb3JtX190ZXh0XFxcIj5cXHJcXG5cXHRcXHRcXHRcXHTQndCw0LbQuNC80LDRjyDigJzQvtGC0L/RgNCw0LLQuNGC0YzigJ0sINCy0Ysg0LTQsNC10YLQtSDRgdC+0LPQu9Cw0YHQuNC1INC90LAgPHN0cm9uZyBjbGFzcz1cXFwiZmItZm9ybV9fdGV4dC0tY29sb3ItcmFkaWNhbC1yZWRcXFwiPtC+0LHRgNCw0LHQvtGC0LrRgyDQv9C10YDRgdC+0L3QsNC70YzQvdGL0YUg0LTQsNC90L3Ri9GFPC9zdHJvbmc+INC4INGB0L7Qs9C70LDRiNCw0LXRgtC10YHRjCDRgSDQvdCw0YjQtdC5IDxhIGNsYXNzPVxcXCJmYi1mb3JtX190ZXh0LS1jb2xvci1yYWRpY2FsLXJlZFxcXCIgaHJlZj1cXFwiI1xcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiPtC/0L7Qu9C40YLQuNC60L7QuSDQutC+0L3RhNC40LTQtdC90YbQuNCw0LvRjNC90L7RgdGC0Lg8L2E+XFxyXFxuXFx0XFx0XFx0PC9wPlxcclxcblxcdFxcdFxcdDxidXR0b24gY2xhc3M9XFxcImZiLWZvcm1fX2J0biBpY29uLWRyb3Bkb3duXFxcIiB0eXBlPVxcXCJzdWJtaXRcXFwiPtCe0YLQv9GA0LDQstC40YLRjDwvYnV0dG9uPlxcclxcblxcdFxcdDwvZm9ybT5cXHJcXG5cXHRcXHQ8YnV0dG9uIGNsYXNzPVxcXCJjcHMtcG9wYXBfX2J0biBidG4tY2xvc2UgYnV0dG9uLWpzLW9wZW5cXFwiPlxcclxcblxcdFxcdFxcdDxzcGFuIGNsYXNzPVxcXCJ2aXN1YWxseS1oaWRkZW5cXFwiPtCX0LDQutGA0YvRgtGMINC80LXQvdGOPC9zcGFuPlxcclxcblxcdFxcdFxcdDxzcGFuIGNsYXNzPVxcXCJidG4tY2xvc2VfX2VsbS1idG5cXFwiPjwvc3Bhbj5cXHJcXG5cXHRcXHQ8L2J1dHRvbj5cXHJcXG5cXHRcXHJcXG5cXHRcXHJcXG5cXHRcXHQ8ZGl2IGNsYXNzPVxcXCJjcHMtanMtYmcgY3BzLXBvcGFwX19iZ1xcXCI+PC9kaXY+XFxyXFxuXFx0PC9zZWN0aW9uPlxcclxcblxcdDwhLS0g0JLRhdC+0LQg0JvQuNGH0L3Ri9C5INC60LDQsdC40L3QtdGCIC0tPlxcclxcblxcdDxzZWN0aW9uIGNsYXNzPVxcXCJjcHMtcG9wYXAgY3BzLXBvcGFwLS1ub25lIGJsb2stanMtYWN0aXZlXFxcIiAgZGF0YS10YXJnZXQ9XFxcImZpdmUtYnRuXFxcIj5cXHJcXG5cXHRcXHQ8aDIgY2xhc3M9XFxcImNwcy1wb3BhcF9fdGl0bGVcXFwiPtCS0YXQvtC0INCb0LjRh9C90YvQuSDQutCw0LHQuNC90LXRgtC6PC9oMj5cXHJcXG5cXHRcXHQ8Zm9ybSBjbGFzcz1cXFwiY3BzLXBvcGFwX19mYi1mb3JtIGZiLWZvcm1cXFwiIGFjdGlvbj1cXFwiI1xcXCIgbWV0aG9kPVxcXCJQT1NUXFxcIiBlbmN0eXBlPVxcXCJtdWx0aXBhcnQvZm9ybS1kYXRhXFxcIj5cXHJcXG5cXHRcXHRcXHQ8bGFiZWw+XFxyXFxuXFx0XFx0XFx0XFx0PHNwYW4gY2xhc3M9XFxcInZpc3VhbGx5LWhpZGRlblxcXCI+0KLQtdC70LXRhNC+0L08L3NwYW4+XFxyXFxuXFx0XFx0XFx0XFx0PGlucHV0IGNsYXNzPVxcXCJmYi1mb3JtX19pbnB1dFxcXCIgdHlwZT1cXFwidGVsXFxcIiBuYW1lPVxcXCJwaG9uZVxcXCIgcGxhY2Vob2xkZXI9XFxcItCi0LXQu9C10YTQvtC9XFxcIiByZXF1aXJlZD1cXFwicmVxdWlyZWRcXFwiPlxcclxcblxcdFxcdFxcdDwvbGFiZWw+XFxyXFxuXFx0XFx0XFx0PHAgY2xhc3M9XFxcImZiLWZvcm1fX3RleHRcXFwiPlxcclxcblxcdFxcdFxcdFxcdNCd0LDQttC40LzQsNGPIOKAnNC+0YLQv9GA0LDQstC40YLRjOKAnSwg0LLRiyDQtNCw0LXRgtC1INGB0L7Qs9C70LDRgdC40LUg0L3QsCA8c3Ryb25nIGNsYXNzPVxcXCJmYi1mb3JtX190ZXh0LS1jb2xvci1yYWRpY2FsLXJlZFxcXCI+0L7QsdGA0LDQsdC+0YLQutGDINC/0LXRgNGB0L7QvdCw0LvRjNC90YvRhSDQtNCw0L3QvdGL0YU8L3N0cm9uZz4g0Lgg0YHQvtCz0LvQsNGI0LDQtdGC0LXRgdGMINGBINC90LDRiNC10LkgPGEgY2xhc3M9XFxcImZiLWZvcm1fX3RleHQtLWNvbG9yLXJhZGljYWwtcmVkXFxcIiBocmVmPVxcXCIjXFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCI+0L/QvtC70LjRgtC40LrQvtC5INC60L7QvdGE0LjQtNC10L3RhtC40LDQu9GM0L3QvtGB0YLQuDwvYT5cXHJcXG5cXHRcXHRcXHQ8L3A+XFxyXFxuXFx0XFx0XFx0PGJ1dHRvbiBjbGFzcz1cXFwiZmItZm9ybV9fYnRuIGljb24tZHJvcGRvd25cXFwiIHR5cGU9XFxcInN1Ym1pdFxcXCI+0J7RgtC/0YDQsNCy0LjRgtGMPC9idXR0b24+XFxyXFxuXFx0XFx0PC9mb3JtPlxcclxcblxcdFxcdDxidXR0b24gY2xhc3M9XFxcImNwcy1wb3BhcF9fYnRuIGJ0bi1jbG9zZSBidXR0b24tanMtb3BlblxcXCI+XFxyXFxuXFx0XFx0XFx0PHNwYW4gY2xhc3M9XFxcInZpc3VhbGx5LWhpZGRlblxcXCI+0JfQsNC60YDRi9GC0Ywg0LzQtdC90Y48L3NwYW4+XFxyXFxuXFx0XFx0XFx0PHNwYW4gY2xhc3M9XFxcImJ0bi1jbG9zZV9fZWxtLWJ0blxcXCI+PC9zcGFuPlxcclxcblxcdFxcdDwvYnV0dG9uPlxcclxcblxcdFxcclxcblxcdFxcclxcblxcdFxcdDxkaXYgY2xhc3M9XFxcImNwcy1qcy1iZyBjcHMtcG9wYXBfX2JnXFxcIj48L2Rpdj5cXHJcXG5cXHQ8L3NlY3Rpb24+XFxyXFxuXFx0PCEtLSDQn9C+0LjRgdC6IC0tPlxcclxcblxcdDxzZWN0aW9uIGNsYXNzPVxcXCJjcHMtcG9wYXAgY3BzLXBvcGFwLS1ub25lIGJsb2stanMtYWN0aXZlXFxcIiAgZGF0YS10YXJnZXQ9XFxcInNldmVuLWJ0blxcXCI+XFxyXFxuXFx0XFx0PGgyIGNsYXNzPVxcXCJjcHMtcG9wYXBfX3RpdGxlXFxcIj7Qn9C+0LjRgdC6PC9oMj5cXHJcXG5cXHRcXHQ8Zm9ybSBjbGFzcz1cXFwiY3BzLXBvcGFwX19mYi1mb3JtIGZiLWZvcm1cXFwiIGFjdGlvbj1cXFwiI1xcXCIgbWV0aG9kPVxcXCJQT1NUXFxcIiBlbmN0eXBlPVxcXCJtdWx0aXBhcnQvZm9ybS1kYXRhXFxcIj5cXHJcXG5cXHRcXHRcXHQ8bGFiZWw+XFxyXFxuXFx0XFx0XFx0XFx0PHNwYW4gY2xhc3M9XFxcInZpc3VhbGx5LWhpZGRlblxcXCI+0KLQtdC70LXRhNC+0L08L3NwYW4+XFxyXFxuXFx0XFx0XFx0XFx0PGlucHV0IGNsYXNzPVxcXCJmYi1mb3JtX19pbnB1dFxcXCIgdHlwZT1cXFwidGVsXFxcIiBuYW1lPVxcXCJwaG9uZVxcXCIgcGxhY2Vob2xkZXI9XFxcItCi0LXQu9C10YTQvtC9XFxcIiByZXF1aXJlZD1cXFwicmVxdWlyZWRcXFwiPlxcclxcblxcdFxcdFxcdDwvbGFiZWw+XFxyXFxuXFx0XFx0XFx0PHAgY2xhc3M9XFxcImZiLWZvcm1fX3RleHRcXFwiPlxcclxcblxcdFxcdFxcdFxcdNCd0LDQttC40LzQsNGPIOKAnNC+0YLQv9GA0LDQstC40YLRjOKAnSwg0LLRiyDQtNCw0LXRgtC1INGB0L7Qs9C70LDRgdC40LUg0L3QsCA8c3Ryb25nIGNsYXNzPVxcXCJmYi1mb3JtX190ZXh0LS1jb2xvci1yYWRpY2FsLXJlZFxcXCI+0L7QsdGA0LDQsdC+0YLQutGDINC/0LXRgNGB0L7QvdCw0LvRjNC90YvRhSDQtNCw0L3QvdGL0YU8L3N0cm9uZz4g0Lgg0YHQvtCz0LvQsNGI0LDQtdGC0LXRgdGMINGBINC90LDRiNC10LkgPGEgY2xhc3M9XFxcImZiLWZvcm1fX3RleHQtLWNvbG9yLXJhZGljYWwtcmVkXFxcIiBocmVmPVxcXCIjXFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCI+0L/QvtC70LjRgtC40LrQvtC5INC60L7QvdGE0LjQtNC10L3RhtC40LDQu9GM0L3QvtGB0YLQuDwvYT5cXHJcXG5cXHRcXHRcXHQ8L3A+XFxyXFxuXFx0XFx0XFx0PGJ1dHRvbiBjbGFzcz1cXFwiZmItZm9ybV9fYnRuIGljb24tZHJvcGRvd25cXFwiIHR5cGU9XFxcInN1Ym1pdFxcXCI+0J7RgtC/0YDQsNCy0LjRgtGMPC9idXR0b24+XFxyXFxuXFx0XFx0PC9mb3JtPlxcclxcblxcdFxcdDxidXR0b24gY2xhc3M9XFxcImNwcy1wb3BhcF9fYnRuIGJ0bi1jbG9zZSBidXR0b24tanMtb3BlblxcXCI+XFxyXFxuXFx0XFx0XFx0PHNwYW4gY2xhc3M9XFxcInZpc3VhbGx5LWhpZGRlblxcXCI+0JfQsNC60YDRi9GC0Ywg0LzQtdC90Y48L3NwYW4+XFxyXFxuXFx0XFx0XFx0PHNwYW4gY2xhc3M9XFxcImJ0bi1jbG9zZV9fZWxtLWJ0blxcXCI+PC9zcGFuPlxcclxcblxcdFxcdDwvYnV0dG9uPlxcclxcblxcdFxcclxcblxcdFxcclxcblxcdFxcdDxkaXYgY2xhc3M9XFxcImNwcy1qcy1iZyBjcHMtcG9wYXBfX2JnXFxcIj48L2Rpdj5cXHJcXG5cXHQ8L3NlY3Rpb24+XFxyXFxuXFx0PCEtLSDQn9C+0LTQstCw0LsgLS0+XFxyXFxuXFx0PGZvb3RlciBjbGFzcz1cXFwiY3BzLWZvb3RlclxcXCI+XFxyXFxuXFx0XFx0PHVsIGNsYXNzPVxcXCJjcHMtZm9vdGVyX19mb290ZXItbGlzdCBmb290ZXItbGlzdFxcXCI+XFxyXFxuXFx0XFx0XFx0PGxpIGNsYXNzPVxcXCJmb290ZXItbGlzdF9faXRlbSBmb290ZXItbGlzdF9fd3JhcHBcXFwiPlxcclxcblxcdFxcdFxcdFxcdDxzcGFuPiYjMTY5OyAyMDE5IENQUzwvc3Bhbj5cXHJcXG5cXHRcXHRcXHRcXHQ8c3Bhbj7QoNCw0LfRgNCw0LHQvtGC0LDQvdC+INC60L7QvNCw0L3QtNC+0LkgPGEgY2xhc3M9XFxcImZvb3Rlci1saXN0X19saW5rXFxcIiBocmVmPVxcXCJodHRwczovL2FwZXNvbmcucnUvXFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCI+QXBlc29uZzwvYT48L3NwYW4+XFxyXFxuXFx0XFx0XFx0PC9saT5cXHJcXG5cXHRcXHRcXHQ8bGkgY2xhc3M9XFxcImZvb3Rlci1saXN0X19pdGVtXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHQ8YSBjbGFzcz1cXFwiZm9vdGVyLWxpc3RfX2xpbmtcXFwiIGhyZWY9XFxcIiNcXFwiPtCf0L7Qu9C40YLQuNC60LAg0LrQvtC90YTQuNC00LXQvdGG0LjQsNC70YzQvdC+0YHRgtC4PC9hPlxcclxcblxcdFxcdFxcdDwvbGk+XFxyXFxuXFx0XFx0XFx0PGxpIGNsYXNzPVxcXCJmb290ZXItbGlzdF9faXRlbVxcXCI+XFxyXFxuXFx0XFx0XFx0XFx00JjQvdGE0L7RgNC80LDRhtC40Y8sINGA0LDQt9C80LXRidC10L3QsCDQvdCwINC00LDQvdC90L7QuSDRgdGC0YDQsNC90LjRhtC1LCDQvdC1INGP0LLQu9GP0LXRgtGB0Y8g0L/Rg9Cx0LvQuNGH0L3QvtC5INC+0YTQtdGA0YLQvtC5XFxyXFxuXFx0XFx0XFx0PC9saT5cXHJcXG5cXHRcXHQ8L3VsPlxcdFxcclxcblxcdDwvZm9vdGVyPlxcclxcblxcclxcbjwvYm9keT5cXHJcXG48L2h0bWw+XCI7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBjb2RlOyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZSwgbm8tcGFyYW0tcmVhc3NpZ25cblxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIGlmIChvcHRpb25zLm1heWJlTmVlZFF1b3RlcyAmJiAvW1xcdFxcblxcZlxcciBcIic9PD5gXS8udGVzdCh1cmwpKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwsIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8qKlxuICogU1NSIFdpbmRvdyAzLjAuMFxuICogQmV0dGVyIGhhbmRsaW5nIGZvciB3aW5kb3cgb2JqZWN0IGluIFNTUiBlbnZpcm9ubWVudFxuICogaHR0cHM6Ly9naXRodWIuY29tL25vbGltaXRzNHdlYi9zc3Itd2luZG93XG4gKlxuICogQ29weXJpZ2h0IDIwMjAsIFZsYWRpbWlyIEtoYXJsYW1waWRpXG4gKlxuICogTGljZW5zZWQgdW5kZXIgTUlUXG4gKlxuICogUmVsZWFzZWQgb246IE5vdmVtYmVyIDksIDIwMjBcbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KG9iaikge1xuICAgIHJldHVybiAob2JqICE9PSBudWxsICYmXG4gICAgICAgIHR5cGVvZiBvYmogPT09ICdvYmplY3QnICYmXG4gICAgICAgICdjb25zdHJ1Y3RvcicgaW4gb2JqICYmXG4gICAgICAgIG9iai5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0KTtcbn1cbmZ1bmN0aW9uIGV4dGVuZCh0YXJnZXQsIHNyYykge1xuICAgIGlmICh0YXJnZXQgPT09IHZvaWQgMCkgeyB0YXJnZXQgPSB7fTsgfVxuICAgIGlmIChzcmMgPT09IHZvaWQgMCkgeyBzcmMgPSB7fTsgfVxuICAgIE9iamVjdC5rZXlzKHNyYykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0W2tleV0gPT09ICd1bmRlZmluZWQnKVxuICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSBzcmNba2V5XTtcbiAgICAgICAgZWxzZSBpZiAoaXNPYmplY3Qoc3JjW2tleV0pICYmXG4gICAgICAgICAgICBpc09iamVjdCh0YXJnZXRba2V5XSkgJiZcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHNyY1trZXldKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBleHRlbmQodGFyZ2V0W2tleV0sIHNyY1trZXldKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG52YXIgc3NyRG9jdW1lbnQgPSB7XG4gICAgYm9keToge30sXG4gICAgYWRkRXZlbnRMaXN0ZW5lcjogZnVuY3Rpb24gKCkgeyB9LFxuICAgIHJlbW92ZUV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uICgpIHsgfSxcbiAgICBhY3RpdmVFbGVtZW50OiB7XG4gICAgICAgIGJsdXI6IGZ1bmN0aW9uICgpIHsgfSxcbiAgICAgICAgbm9kZU5hbWU6ICcnLFxuICAgIH0sXG4gICAgcXVlcnlTZWxlY3RvcjogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9LFxuICAgIHF1ZXJ5U2VsZWN0b3JBbGw6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH0sXG4gICAgZ2V0RWxlbWVudEJ5SWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSxcbiAgICBjcmVhdGVFdmVudDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaW5pdEV2ZW50OiBmdW5jdGlvbiAoKSB7IH0sXG4gICAgICAgIH07XG4gICAgfSxcbiAgICBjcmVhdGVFbGVtZW50OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjaGlsZHJlbjogW10sXG4gICAgICAgICAgICBjaGlsZE5vZGVzOiBbXSxcbiAgICAgICAgICAgIHN0eWxlOiB7fSxcbiAgICAgICAgICAgIHNldEF0dHJpYnV0ZTogZnVuY3Rpb24gKCkgeyB9LFxuICAgICAgICAgICAgZ2V0RWxlbWVudHNCeVRhZ05hbWU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgIH0sXG4gICAgY3JlYXRlRWxlbWVudE5TOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9LFxuICAgIGltcG9ydE5vZGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSxcbiAgICBsb2NhdGlvbjoge1xuICAgICAgICBoYXNoOiAnJyxcbiAgICAgICAgaG9zdDogJycsXG4gICAgICAgIGhvc3RuYW1lOiAnJyxcbiAgICAgICAgaHJlZjogJycsXG4gICAgICAgIG9yaWdpbjogJycsXG4gICAgICAgIHBhdGhuYW1lOiAnJyxcbiAgICAgICAgcHJvdG9jb2w6ICcnLFxuICAgICAgICBzZWFyY2g6ICcnLFxuICAgIH0sXG59O1xuZnVuY3Rpb24gZ2V0RG9jdW1lbnQoKSB7XG4gICAgdmFyIGRvYyA9IHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgPyBkb2N1bWVudCA6IHt9O1xuICAgIGV4dGVuZChkb2MsIHNzckRvY3VtZW50KTtcbiAgICByZXR1cm4gZG9jO1xufVxuXG52YXIgc3NyV2luZG93ID0ge1xuICAgIGRvY3VtZW50OiBzc3JEb2N1bWVudCxcbiAgICBuYXZpZ2F0b3I6IHtcbiAgICAgICAgdXNlckFnZW50OiAnJyxcbiAgICB9LFxuICAgIGxvY2F0aW9uOiB7XG4gICAgICAgIGhhc2g6ICcnLFxuICAgICAgICBob3N0OiAnJyxcbiAgICAgICAgaG9zdG5hbWU6ICcnLFxuICAgICAgICBocmVmOiAnJyxcbiAgICAgICAgb3JpZ2luOiAnJyxcbiAgICAgICAgcGF0aG5hbWU6ICcnLFxuICAgICAgICBwcm90b2NvbDogJycsXG4gICAgICAgIHNlYXJjaDogJycsXG4gICAgfSxcbiAgICBoaXN0b3J5OiB7XG4gICAgICAgIHJlcGxhY2VTdGF0ZTogZnVuY3Rpb24gKCkgeyB9LFxuICAgICAgICBwdXNoU3RhdGU6IGZ1bmN0aW9uICgpIHsgfSxcbiAgICAgICAgZ286IGZ1bmN0aW9uICgpIHsgfSxcbiAgICAgICAgYmFjazogZnVuY3Rpb24gKCkgeyB9LFxuICAgIH0sXG4gICAgQ3VzdG9tRXZlbnQ6IGZ1bmN0aW9uIEN1c3RvbUV2ZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIGFkZEV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uICgpIHsgfSxcbiAgICByZW1vdmVFdmVudExpc3RlbmVyOiBmdW5jdGlvbiAoKSB7IH0sXG4gICAgZ2V0Q29tcHV0ZWRTdHlsZTogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZ2V0UHJvcGVydHlWYWx1ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgfSxcbiAgICBJbWFnZTogZnVuY3Rpb24gKCkgeyB9LFxuICAgIERhdGU6IGZ1bmN0aW9uICgpIHsgfSxcbiAgICBzY3JlZW46IHt9LFxuICAgIHNldFRpbWVvdXQ6IGZ1bmN0aW9uICgpIHsgfSxcbiAgICBjbGVhclRpbWVvdXQ6IGZ1bmN0aW9uICgpIHsgfSxcbiAgICBtYXRjaE1lZGlhOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9LFxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZTogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2V0VGltZW91dChjYWxsYmFjaywgMCk7XG4gICAgfSxcbiAgICBjYW5jZWxBbmltYXRpb25GcmFtZTogZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjbGVhclRpbWVvdXQoaWQpO1xuICAgIH0sXG59O1xuZnVuY3Rpb24gZ2V0V2luZG93KCkge1xuICAgIHZhciB3aW4gPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IHt9O1xuICAgIGV4dGVuZCh3aW4sIHNzcldpbmRvdyk7XG4gICAgcmV0dXJuIHdpbjtcbn1cblxuZXhwb3J0IHsgZXh0ZW5kLCBnZXREb2N1bWVudCwgZ2V0V2luZG93LCBzc3JEb2N1bWVudCwgc3NyV2luZG93IH07XG4iLCJpbXBvcnQgeyBnZXRXaW5kb3cgfSBmcm9tICdzc3Itd2luZG93JztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldEJyZWFrcG9pbnQoYnJlYWtwb2ludHMsIGJhc2UsIGNvbnRhaW5lckVsKSB7XG4gIGlmIChiYXNlID09PSB2b2lkIDApIHtcbiAgICBiYXNlID0gJ3dpbmRvdyc7XG4gIH1cblxuICBpZiAoIWJyZWFrcG9pbnRzIHx8IGJhc2UgPT09ICdjb250YWluZXInICYmICFjb250YWluZXJFbCkgcmV0dXJuIHVuZGVmaW5lZDtcbiAgdmFyIGJyZWFrcG9pbnQgPSBmYWxzZTtcbiAgdmFyIHdpbmRvdyA9IGdldFdpbmRvdygpO1xuICB2YXIgY3VycmVudEhlaWdodCA9IGJhc2UgPT09ICd3aW5kb3cnID8gd2luZG93LmlubmVySGVpZ2h0IDogY29udGFpbmVyRWwuY2xpZW50SGVpZ2h0O1xuICB2YXIgcG9pbnRzID0gT2JqZWN0LmtleXMoYnJlYWtwb2ludHMpLm1hcChmdW5jdGlvbiAocG9pbnQpIHtcbiAgICBpZiAodHlwZW9mIHBvaW50ID09PSAnc3RyaW5nJyAmJiBwb2ludC5pbmRleE9mKCdAJykgPT09IDApIHtcbiAgICAgIHZhciBtaW5SYXRpbyA9IHBhcnNlRmxvYXQocG9pbnQuc3Vic3RyKDEpKTtcbiAgICAgIHZhciB2YWx1ZSA9IGN1cnJlbnRIZWlnaHQgKiBtaW5SYXRpbztcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgcG9pbnQ6IHBvaW50XG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogcG9pbnQsXG4gICAgICBwb2ludDogcG9pbnRcbiAgICB9O1xuICB9KTtcbiAgcG9pbnRzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICByZXR1cm4gcGFyc2VJbnQoYS52YWx1ZSwgMTApIC0gcGFyc2VJbnQoYi52YWx1ZSwgMTApO1xuICB9KTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHBvaW50cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIHZhciBfcG9pbnRzJGkgPSBwb2ludHNbaV0sXG4gICAgICAgIHBvaW50ID0gX3BvaW50cyRpLnBvaW50LFxuICAgICAgICB2YWx1ZSA9IF9wb2ludHMkaS52YWx1ZTtcblxuICAgIGlmIChiYXNlID09PSAnd2luZG93Jykge1xuICAgICAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1pbi13aWR0aDogXCIgKyB2YWx1ZSArIFwicHgpXCIpLm1hdGNoZXMpIHtcbiAgICAgICAgYnJlYWtwb2ludCA9IHBvaW50O1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodmFsdWUgPD0gY29udGFpbmVyRWwuY2xpZW50V2lkdGgpIHtcbiAgICAgIGJyZWFrcG9pbnQgPSBwb2ludDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYnJlYWtwb2ludCB8fCAnbWF4Jztcbn0iLCJpbXBvcnQgc2V0QnJlYWtwb2ludCBmcm9tICcuL3NldEJyZWFrcG9pbnQnO1xuaW1wb3J0IGdldEJyZWFrcG9pbnQgZnJvbSAnLi9nZXRCcmVha3BvaW50JztcbmV4cG9ydCBkZWZhdWx0IHtcbiAgc2V0QnJlYWtwb2ludDogc2V0QnJlYWtwb2ludCxcbiAgZ2V0QnJlYWtwb2ludDogZ2V0QnJlYWtwb2ludFxufTsiLCJpbXBvcnQgeyBleHRlbmQgfSBmcm9tICcuLi8uLi8uLi91dGlscy91dGlscyc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXRCcmVha3BvaW50KCkge1xuICB2YXIgc3dpcGVyID0gdGhpcztcbiAgdmFyIGFjdGl2ZUluZGV4ID0gc3dpcGVyLmFjdGl2ZUluZGV4LFxuICAgICAgaW5pdGlhbGl6ZWQgPSBzd2lwZXIuaW5pdGlhbGl6ZWQsXG4gICAgICBfc3dpcGVyJGxvb3BlZFNsaWRlcyA9IHN3aXBlci5sb29wZWRTbGlkZXMsXG4gICAgICBsb29wZWRTbGlkZXMgPSBfc3dpcGVyJGxvb3BlZFNsaWRlcyA9PT0gdm9pZCAwID8gMCA6IF9zd2lwZXIkbG9vcGVkU2xpZGVzLFxuICAgICAgcGFyYW1zID0gc3dpcGVyLnBhcmFtcyxcbiAgICAgICRlbCA9IHN3aXBlci4kZWw7XG4gIHZhciBicmVha3BvaW50cyA9IHBhcmFtcy5icmVha3BvaW50cztcbiAgaWYgKCFicmVha3BvaW50cyB8fCBicmVha3BvaW50cyAmJiBPYmplY3Qua2V5cyhicmVha3BvaW50cykubGVuZ3RoID09PSAwKSByZXR1cm47IC8vIEdldCBicmVha3BvaW50IGZvciB3aW5kb3cgd2lkdGggYW5kIHVwZGF0ZSBwYXJhbWV0ZXJzXG5cbiAgdmFyIGJyZWFrcG9pbnQgPSBzd2lwZXIuZ2V0QnJlYWtwb2ludChicmVha3BvaW50cywgc3dpcGVyLnBhcmFtcy5icmVha3BvaW50c0Jhc2UsIHN3aXBlci5lbCk7XG4gIGlmICghYnJlYWtwb2ludCB8fCBzd2lwZXIuY3VycmVudEJyZWFrcG9pbnQgPT09IGJyZWFrcG9pbnQpIHJldHVybjtcbiAgdmFyIGJyZWFrcG9pbnRPbmx5UGFyYW1zID0gYnJlYWtwb2ludCBpbiBicmVha3BvaW50cyA/IGJyZWFrcG9pbnRzW2JyZWFrcG9pbnRdIDogdW5kZWZpbmVkO1xuXG4gIGlmIChicmVha3BvaW50T25seVBhcmFtcykge1xuICAgIFsnc2xpZGVzUGVyVmlldycsICdzcGFjZUJldHdlZW4nLCAnc2xpZGVzUGVyR3JvdXAnLCAnc2xpZGVzUGVyR3JvdXBTa2lwJywgJ3NsaWRlc1BlckNvbHVtbiddLmZvckVhY2goZnVuY3Rpb24gKHBhcmFtKSB7XG4gICAgICB2YXIgcGFyYW1WYWx1ZSA9IGJyZWFrcG9pbnRPbmx5UGFyYW1zW3BhcmFtXTtcbiAgICAgIGlmICh0eXBlb2YgcGFyYW1WYWx1ZSA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybjtcblxuICAgICAgaWYgKHBhcmFtID09PSAnc2xpZGVzUGVyVmlldycgJiYgKHBhcmFtVmFsdWUgPT09ICdBVVRPJyB8fCBwYXJhbVZhbHVlID09PSAnYXV0bycpKSB7XG4gICAgICAgIGJyZWFrcG9pbnRPbmx5UGFyYW1zW3BhcmFtXSA9ICdhdXRvJztcbiAgICAgIH0gZWxzZSBpZiAocGFyYW0gPT09ICdzbGlkZXNQZXJWaWV3Jykge1xuICAgICAgICBicmVha3BvaW50T25seVBhcmFtc1twYXJhbV0gPSBwYXJzZUZsb2F0KHBhcmFtVmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYnJlYWtwb2ludE9ubHlQYXJhbXNbcGFyYW1dID0gcGFyc2VJbnQocGFyYW1WYWx1ZSwgMTApO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgdmFyIGJyZWFrcG9pbnRQYXJhbXMgPSBicmVha3BvaW50T25seVBhcmFtcyB8fCBzd2lwZXIub3JpZ2luYWxQYXJhbXM7XG4gIHZhciB3YXNNdWx0aVJvdyA9IHBhcmFtcy5zbGlkZXNQZXJDb2x1bW4gPiAxO1xuICB2YXIgaXNNdWx0aVJvdyA9IGJyZWFrcG9pbnRQYXJhbXMuc2xpZGVzUGVyQ29sdW1uID4gMTtcbiAgdmFyIHdhc0VuYWJsZWQgPSBwYXJhbXMuZW5hYmxlZDtcblxuICBpZiAod2FzTXVsdGlSb3cgJiYgIWlzTXVsdGlSb3cpIHtcbiAgICAkZWwucmVtb3ZlQ2xhc3MocGFyYW1zLmNvbnRhaW5lck1vZGlmaWVyQ2xhc3MgKyBcIm11bHRpcm93IFwiICsgcGFyYW1zLmNvbnRhaW5lck1vZGlmaWVyQ2xhc3MgKyBcIm11bHRpcm93LWNvbHVtblwiKTtcbiAgICBzd2lwZXIuZW1pdENvbnRhaW5lckNsYXNzZXMoKTtcbiAgfSBlbHNlIGlmICghd2FzTXVsdGlSb3cgJiYgaXNNdWx0aVJvdykge1xuICAgICRlbC5hZGRDbGFzcyhwYXJhbXMuY29udGFpbmVyTW9kaWZpZXJDbGFzcyArIFwibXVsdGlyb3dcIik7XG5cbiAgICBpZiAoYnJlYWtwb2ludFBhcmFtcy5zbGlkZXNQZXJDb2x1bW5GaWxsICYmIGJyZWFrcG9pbnRQYXJhbXMuc2xpZGVzUGVyQ29sdW1uRmlsbCA9PT0gJ2NvbHVtbicgfHwgIWJyZWFrcG9pbnRQYXJhbXMuc2xpZGVzUGVyQ29sdW1uRmlsbCAmJiBwYXJhbXMuc2xpZGVzUGVyQ29sdW1uRmlsbCA9PT0gJ2NvbHVtbicpIHtcbiAgICAgICRlbC5hZGRDbGFzcyhwYXJhbXMuY29udGFpbmVyTW9kaWZpZXJDbGFzcyArIFwibXVsdGlyb3ctY29sdW1uXCIpO1xuICAgIH1cblxuICAgIHN3aXBlci5lbWl0Q29udGFpbmVyQ2xhc3NlcygpO1xuICB9XG5cbiAgdmFyIGRpcmVjdGlvbkNoYW5nZWQgPSBicmVha3BvaW50UGFyYW1zLmRpcmVjdGlvbiAmJiBicmVha3BvaW50UGFyYW1zLmRpcmVjdGlvbiAhPT0gcGFyYW1zLmRpcmVjdGlvbjtcbiAgdmFyIG5lZWRzUmVMb29wID0gcGFyYW1zLmxvb3AgJiYgKGJyZWFrcG9pbnRQYXJhbXMuc2xpZGVzUGVyVmlldyAhPT0gcGFyYW1zLnNsaWRlc1BlclZpZXcgfHwgZGlyZWN0aW9uQ2hhbmdlZCk7XG5cbiAgaWYgKGRpcmVjdGlvbkNoYW5nZWQgJiYgaW5pdGlhbGl6ZWQpIHtcbiAgICBzd2lwZXIuY2hhbmdlRGlyZWN0aW9uKCk7XG4gIH1cblxuICBleHRlbmQoc3dpcGVyLnBhcmFtcywgYnJlYWtwb2ludFBhcmFtcyk7XG4gIHZhciBpc0VuYWJsZWQgPSBzd2lwZXIucGFyYW1zLmVuYWJsZWQ7XG4gIGV4dGVuZChzd2lwZXIsIHtcbiAgICBhbGxvd1RvdWNoTW92ZTogc3dpcGVyLnBhcmFtcy5hbGxvd1RvdWNoTW92ZSxcbiAgICBhbGxvd1NsaWRlTmV4dDogc3dpcGVyLnBhcmFtcy5hbGxvd1NsaWRlTmV4dCxcbiAgICBhbGxvd1NsaWRlUHJldjogc3dpcGVyLnBhcmFtcy5hbGxvd1NsaWRlUHJldlxuICB9KTtcblxuICBpZiAod2FzRW5hYmxlZCAmJiAhaXNFbmFibGVkKSB7XG4gICAgc3dpcGVyLmRpc2FibGUoKTtcbiAgfSBlbHNlIGlmICghd2FzRW5hYmxlZCAmJiBpc0VuYWJsZWQpIHtcbiAgICBzd2lwZXIuZW5hYmxlKCk7XG4gIH1cblxuICBzd2lwZXIuY3VycmVudEJyZWFrcG9pbnQgPSBicmVha3BvaW50O1xuICBzd2lwZXIuZW1pdCgnX2JlZm9yZUJyZWFrcG9pbnQnLCBicmVha3BvaW50UGFyYW1zKTtcblxuICBpZiAobmVlZHNSZUxvb3AgJiYgaW5pdGlhbGl6ZWQpIHtcbiAgICBzd2lwZXIubG9vcERlc3Ryb3koKTtcbiAgICBzd2lwZXIubG9vcENyZWF0ZSgpO1xuICAgIHN3aXBlci51cGRhdGVTbGlkZXMoKTtcbiAgICBzd2lwZXIuc2xpZGVUbyhhY3RpdmVJbmRleCAtIGxvb3BlZFNsaWRlcyArIHN3aXBlci5sb29wZWRTbGlkZXMsIDAsIGZhbHNlKTtcbiAgfVxuXG4gIHN3aXBlci5lbWl0KCdicmVha3BvaW50JywgYnJlYWtwb2ludFBhcmFtcyk7XG59IiwiZnVuY3Rpb24gY2hlY2tPdmVyZmxvdygpIHtcbiAgdmFyIHN3aXBlciA9IHRoaXM7XG4gIHZhciBwYXJhbXMgPSBzd2lwZXIucGFyYW1zO1xuICB2YXIgd2FzTG9ja2VkID0gc3dpcGVyLmlzTG9ja2VkO1xuICB2YXIgbGFzdFNsaWRlUG9zaXRpb24gPSBzd2lwZXIuc2xpZGVzLmxlbmd0aCA+IDAgJiYgcGFyYW1zLnNsaWRlc09mZnNldEJlZm9yZSArIHBhcmFtcy5zcGFjZUJldHdlZW4gKiAoc3dpcGVyLnNsaWRlcy5sZW5ndGggLSAxKSArIHN3aXBlci5zbGlkZXNbMF0ub2Zmc2V0V2lkdGggKiBzd2lwZXIuc2xpZGVzLmxlbmd0aDtcblxuICBpZiAocGFyYW1zLnNsaWRlc09mZnNldEJlZm9yZSAmJiBwYXJhbXMuc2xpZGVzT2Zmc2V0QWZ0ZXIgJiYgbGFzdFNsaWRlUG9zaXRpb24pIHtcbiAgICBzd2lwZXIuaXNMb2NrZWQgPSBsYXN0U2xpZGVQb3NpdGlvbiA8PSBzd2lwZXIuc2l6ZTtcbiAgfSBlbHNlIHtcbiAgICBzd2lwZXIuaXNMb2NrZWQgPSBzd2lwZXIuc25hcEdyaWQubGVuZ3RoID09PSAxO1xuICB9XG5cbiAgc3dpcGVyLmFsbG93U2xpZGVOZXh0ID0gIXN3aXBlci5pc0xvY2tlZDtcbiAgc3dpcGVyLmFsbG93U2xpZGVQcmV2ID0gIXN3aXBlci5pc0xvY2tlZDsgLy8gZXZlbnRzXG5cbiAgaWYgKHdhc0xvY2tlZCAhPT0gc3dpcGVyLmlzTG9ja2VkKSBzd2lwZXIuZW1pdChzd2lwZXIuaXNMb2NrZWQgPyAnbG9jaycgOiAndW5sb2NrJyk7XG5cbiAgaWYgKHdhc0xvY2tlZCAmJiB3YXNMb2NrZWQgIT09IHN3aXBlci5pc0xvY2tlZCkge1xuICAgIHN3aXBlci5pc0VuZCA9IGZhbHNlO1xuICAgIGlmIChzd2lwZXIubmF2aWdhdGlvbikgc3dpcGVyLm5hdmlnYXRpb24udXBkYXRlKCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBjaGVja092ZXJmbG93OiBjaGVja092ZXJmbG93XG59OyIsImZ1bmN0aW9uIHByZXBhcmVDbGFzc2VzKGVudHJpZXMsIHByZWZpeCkge1xuICB2YXIgcmVzdWx0Q2xhc3NlcyA9IFtdO1xuICBlbnRyaWVzLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICBpZiAodHlwZW9mIGl0ZW0gPT09ICdvYmplY3QnKSB7XG4gICAgICBPYmplY3Qua2V5cyhpdGVtKS5mb3JFYWNoKGZ1bmN0aW9uIChjbGFzc05hbWVzKSB7XG4gICAgICAgIGlmIChpdGVtW2NsYXNzTmFtZXNdKSB7XG4gICAgICAgICAgcmVzdWx0Q2xhc3Nlcy5wdXNoKHByZWZpeCArIGNsYXNzTmFtZXMpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBpdGVtID09PSAnc3RyaW5nJykge1xuICAgICAgcmVzdWx0Q2xhc3Nlcy5wdXNoKHByZWZpeCArIGl0ZW0pO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiByZXN1bHRDbGFzc2VzO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRDbGFzc2VzKCkge1xuICB2YXIgc3dpcGVyID0gdGhpcztcbiAgdmFyIGNsYXNzTmFtZXMgPSBzd2lwZXIuY2xhc3NOYW1lcyxcbiAgICAgIHBhcmFtcyA9IHN3aXBlci5wYXJhbXMsXG4gICAgICBydGwgPSBzd2lwZXIucnRsLFxuICAgICAgJGVsID0gc3dpcGVyLiRlbCxcbiAgICAgIGRldmljZSA9IHN3aXBlci5kZXZpY2UsXG4gICAgICBzdXBwb3J0ID0gc3dpcGVyLnN1cHBvcnQ7IC8vIHByZXR0aWVyLWlnbm9yZVxuXG4gIHZhciBzdWZmaXhlcyA9IHByZXBhcmVDbGFzc2VzKFsnaW5pdGlhbGl6ZWQnLCBwYXJhbXMuZGlyZWN0aW9uLCB7XG4gICAgJ3BvaW50ZXItZXZlbnRzJzogc3VwcG9ydC5wb2ludGVyRXZlbnRzICYmICFzdXBwb3J0LnRvdWNoXG4gIH0sIHtcbiAgICAnZnJlZS1tb2RlJzogcGFyYW1zLmZyZWVNb2RlXG4gIH0sIHtcbiAgICAnYXV0b2hlaWdodCc6IHBhcmFtcy5hdXRvSGVpZ2h0XG4gIH0sIHtcbiAgICAncnRsJzogcnRsXG4gIH0sIHtcbiAgICAnbXVsdGlyb3cnOiBwYXJhbXMuc2xpZGVzUGVyQ29sdW1uID4gMVxuICB9LCB7XG4gICAgJ211bHRpcm93LWNvbHVtbic6IHBhcmFtcy5zbGlkZXNQZXJDb2x1bW4gPiAxICYmIHBhcmFtcy5zbGlkZXNQZXJDb2x1bW5GaWxsID09PSAnY29sdW1uJ1xuICB9LCB7XG4gICAgJ2FuZHJvaWQnOiBkZXZpY2UuYW5kcm9pZFxuICB9LCB7XG4gICAgJ2lvcyc6IGRldmljZS5pb3NcbiAgfSwge1xuICAgICdjc3MtbW9kZSc6IHBhcmFtcy5jc3NNb2RlXG4gIH1dLCBwYXJhbXMuY29udGFpbmVyTW9kaWZpZXJDbGFzcyk7XG4gIGNsYXNzTmFtZXMucHVzaC5hcHBseShjbGFzc05hbWVzLCBzdWZmaXhlcyk7XG4gICRlbC5hZGRDbGFzcyhbXS5jb25jYXQoY2xhc3NOYW1lcykuam9pbignICcpKTtcbiAgc3dpcGVyLmVtaXRDb250YWluZXJDbGFzc2VzKCk7XG59IiwiaW1wb3J0IGFkZENsYXNzZXMgZnJvbSAnLi9hZGRDbGFzc2VzJztcbmltcG9ydCByZW1vdmVDbGFzc2VzIGZyb20gJy4vcmVtb3ZlQ2xhc3Nlcyc7XG5leHBvcnQgZGVmYXVsdCB7XG4gIGFkZENsYXNzZXM6IGFkZENsYXNzZXMsXG4gIHJlbW92ZUNsYXNzZXM6IHJlbW92ZUNsYXNzZXNcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVtb3ZlQ2xhc3NlcygpIHtcbiAgdmFyIHN3aXBlciA9IHRoaXM7XG4gIHZhciAkZWwgPSBzd2lwZXIuJGVsLFxuICAgICAgY2xhc3NOYW1lcyA9IHN3aXBlci5jbGFzc05hbWVzO1xuICAkZWwucmVtb3ZlQ2xhc3MoY2xhc3NOYW1lcy5qb2luKCcgJykpO1xuICBzd2lwZXIuZW1pdENvbnRhaW5lckNsYXNzZXMoKTtcbn0iLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbi8qIGVzbGludCBuby1wYXJhbS1yZWFzc2lnbjogXCJvZmZcIiAqL1xuaW1wb3J0IHsgZ2V0RG9jdW1lbnQgfSBmcm9tICdzc3Itd2luZG93JztcbmltcG9ydCAkIGZyb20gJy4uLy4uL3V0aWxzL2RvbSc7XG5pbXBvcnQgeyBleHRlbmQsIG5vdywgZGVsZXRlUHJvcHMgfSBmcm9tICcuLi8uLi91dGlscy91dGlscyc7XG5pbXBvcnQgeyBnZXRTdXBwb3J0IH0gZnJvbSAnLi4vLi4vdXRpbHMvZ2V0LXN1cHBvcnQnO1xuaW1wb3J0IHsgZ2V0RGV2aWNlIH0gZnJvbSAnLi4vLi4vdXRpbHMvZ2V0LWRldmljZSc7XG5pbXBvcnQgeyBnZXRCcm93c2VyIH0gZnJvbSAnLi4vLi4vdXRpbHMvZ2V0LWJyb3dzZXInO1xuaW1wb3J0IFJlc2l6ZSBmcm9tICcuLi8uLi9tb2R1bGVzL3Jlc2l6ZS9yZXNpemUnO1xuaW1wb3J0IE9ic2VydmVyIGZyb20gJy4uLy4uL21vZHVsZXMvb2JzZXJ2ZXIvb2JzZXJ2ZXInO1xuaW1wb3J0IG1vZHVsYXIgZnJvbSAnLi9tb2R1bGFyJztcbmltcG9ydCBldmVudHNFbWl0dGVyIGZyb20gJy4vZXZlbnRzLWVtaXR0ZXInO1xuaW1wb3J0IHVwZGF0ZSBmcm9tICcuL3VwZGF0ZS9pbmRleCc7XG5pbXBvcnQgdHJhbnNsYXRlIGZyb20gJy4vdHJhbnNsYXRlL2luZGV4JztcbmltcG9ydCB0cmFuc2l0aW9uIGZyb20gJy4vdHJhbnNpdGlvbi9pbmRleCc7XG5pbXBvcnQgc2xpZGUgZnJvbSAnLi9zbGlkZS9pbmRleCc7XG5pbXBvcnQgbG9vcCBmcm9tICcuL2xvb3AvaW5kZXgnO1xuaW1wb3J0IGdyYWJDdXJzb3IgZnJvbSAnLi9ncmFiLWN1cnNvci9pbmRleCc7XG5pbXBvcnQgbWFuaXB1bGF0aW9uIGZyb20gJy4vbWFuaXB1bGF0aW9uL2luZGV4JztcbmltcG9ydCBldmVudHMgZnJvbSAnLi9ldmVudHMvaW5kZXgnO1xuaW1wb3J0IGJyZWFrcG9pbnRzIGZyb20gJy4vYnJlYWtwb2ludHMvaW5kZXgnO1xuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9jbGFzc2VzL2luZGV4JztcbmltcG9ydCBpbWFnZXMgZnJvbSAnLi9pbWFnZXMvaW5kZXgnO1xuaW1wb3J0IGNoZWNrT3ZlcmZsb3cgZnJvbSAnLi9jaGVjay1vdmVyZmxvdy9pbmRleCc7XG5pbXBvcnQgZGVmYXVsdHMgZnJvbSAnLi9kZWZhdWx0cyc7XG52YXIgcHJvdG90eXBlcyA9IHtcbiAgbW9kdWxhcjogbW9kdWxhcixcbiAgZXZlbnRzRW1pdHRlcjogZXZlbnRzRW1pdHRlcixcbiAgdXBkYXRlOiB1cGRhdGUsXG4gIHRyYW5zbGF0ZTogdHJhbnNsYXRlLFxuICB0cmFuc2l0aW9uOiB0cmFuc2l0aW9uLFxuICBzbGlkZTogc2xpZGUsXG4gIGxvb3A6IGxvb3AsXG4gIGdyYWJDdXJzb3I6IGdyYWJDdXJzb3IsXG4gIG1hbmlwdWxhdGlvbjogbWFuaXB1bGF0aW9uLFxuICBldmVudHM6IGV2ZW50cyxcbiAgYnJlYWtwb2ludHM6IGJyZWFrcG9pbnRzLFxuICBjaGVja092ZXJmbG93OiBjaGVja092ZXJmbG93LFxuICBjbGFzc2VzOiBjbGFzc2VzLFxuICBpbWFnZXM6IGltYWdlc1xufTtcbnZhciBleHRlbmRlZERlZmF1bHRzID0ge307XG5cbnZhciBTd2lwZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBTd2lwZXIoKSB7XG4gICAgdmFyIGVsO1xuICAgIHZhciBwYXJhbXM7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgaWYgKGFyZ3MubGVuZ3RoID09PSAxICYmIGFyZ3NbMF0uY29uc3RydWN0b3IgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3NbMF0pLnNsaWNlKDgsIC0xKSA9PT0gJ09iamVjdCcpIHtcbiAgICAgIHBhcmFtcyA9IGFyZ3NbMF07XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsID0gYXJnc1swXTtcbiAgICAgIHBhcmFtcyA9IGFyZ3NbMV07XG4gICAgfVxuXG4gICAgaWYgKCFwYXJhbXMpIHBhcmFtcyA9IHt9O1xuICAgIHBhcmFtcyA9IGV4dGVuZCh7fSwgcGFyYW1zKTtcbiAgICBpZiAoZWwgJiYgIXBhcmFtcy5lbCkgcGFyYW1zLmVsID0gZWw7XG5cbiAgICBpZiAocGFyYW1zLmVsICYmICQocGFyYW1zLmVsKS5sZW5ndGggPiAxKSB7XG4gICAgICB2YXIgc3dpcGVycyA9IFtdO1xuICAgICAgJChwYXJhbXMuZWwpLmVhY2goZnVuY3Rpb24gKGNvbnRhaW5lckVsKSB7XG4gICAgICAgIHZhciBuZXdQYXJhbXMgPSBleHRlbmQoe30sIHBhcmFtcywge1xuICAgICAgICAgIGVsOiBjb250YWluZXJFbFxuICAgICAgICB9KTtcbiAgICAgICAgc3dpcGVycy5wdXNoKG5ldyBTd2lwZXIobmV3UGFyYW1zKSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBzd2lwZXJzO1xuICAgIH0gLy8gU3dpcGVyIEluc3RhbmNlXG5cblxuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIHN3aXBlci5fX3N3aXBlcl9fID0gdHJ1ZTtcbiAgICBzd2lwZXIuc3VwcG9ydCA9IGdldFN1cHBvcnQoKTtcbiAgICBzd2lwZXIuZGV2aWNlID0gZ2V0RGV2aWNlKHtcbiAgICAgIHVzZXJBZ2VudDogcGFyYW1zLnVzZXJBZ2VudFxuICAgIH0pO1xuICAgIHN3aXBlci5icm93c2VyID0gZ2V0QnJvd3NlcigpO1xuICAgIHN3aXBlci5ldmVudHNMaXN0ZW5lcnMgPSB7fTtcbiAgICBzd2lwZXIuZXZlbnRzQW55TGlzdGVuZXJzID0gW107XG5cbiAgICBpZiAodHlwZW9mIHN3aXBlci5tb2R1bGVzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgc3dpcGVyLm1vZHVsZXMgPSB7fTtcbiAgICB9XG5cbiAgICBPYmplY3Qua2V5cyhzd2lwZXIubW9kdWxlcykuZm9yRWFjaChmdW5jdGlvbiAobW9kdWxlTmFtZSkge1xuICAgICAgdmFyIG1vZHVsZSA9IHN3aXBlci5tb2R1bGVzW21vZHVsZU5hbWVdO1xuXG4gICAgICBpZiAobW9kdWxlLnBhcmFtcykge1xuICAgICAgICB2YXIgbW9kdWxlUGFyYW1OYW1lID0gT2JqZWN0LmtleXMobW9kdWxlLnBhcmFtcylbMF07XG4gICAgICAgIHZhciBtb2R1bGVQYXJhbXMgPSBtb2R1bGUucGFyYW1zW21vZHVsZVBhcmFtTmFtZV07XG4gICAgICAgIGlmICh0eXBlb2YgbW9kdWxlUGFyYW1zICE9PSAnb2JqZWN0JyB8fCBtb2R1bGVQYXJhbXMgPT09IG51bGwpIHJldHVybjtcblxuICAgICAgICBpZiAoWyduYXZpZ2F0aW9uJywgJ3BhZ2luYXRpb24nLCAnc2Nyb2xsYmFyJ10uaW5kZXhPZihtb2R1bGVQYXJhbU5hbWUpID49IDAgJiYgcGFyYW1zW21vZHVsZVBhcmFtTmFtZV0gPT09IHRydWUpIHtcbiAgICAgICAgICBwYXJhbXNbbW9kdWxlUGFyYW1OYW1lXSA9IHtcbiAgICAgICAgICAgIGF1dG86IHRydWVcbiAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCEobW9kdWxlUGFyYW1OYW1lIGluIHBhcmFtcyAmJiAnZW5hYmxlZCcgaW4gbW9kdWxlUGFyYW1zKSkgcmV0dXJuO1xuXG4gICAgICAgIGlmIChwYXJhbXNbbW9kdWxlUGFyYW1OYW1lXSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHBhcmFtc1ttb2R1bGVQYXJhbU5hbWVdID0ge1xuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZVxuICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIHBhcmFtc1ttb2R1bGVQYXJhbU5hbWVdID09PSAnb2JqZWN0JyAmJiAhKCdlbmFibGVkJyBpbiBwYXJhbXNbbW9kdWxlUGFyYW1OYW1lXSkpIHtcbiAgICAgICAgICBwYXJhbXNbbW9kdWxlUGFyYW1OYW1lXS5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghcGFyYW1zW21vZHVsZVBhcmFtTmFtZV0pIHBhcmFtc1ttb2R1bGVQYXJhbU5hbWVdID0ge1xuICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfSk7IC8vIEV4dGVuZCBkZWZhdWx0cyB3aXRoIG1vZHVsZXMgcGFyYW1zXG5cbiAgICB2YXIgc3dpcGVyUGFyYW1zID0gZXh0ZW5kKHt9LCBkZWZhdWx0cyk7XG4gICAgc3dpcGVyLnVzZVBhcmFtcyhzd2lwZXJQYXJhbXMpOyAvLyBFeHRlbmQgZGVmYXVsdHMgd2l0aCBwYXNzZWQgcGFyYW1zXG5cbiAgICBzd2lwZXIucGFyYW1zID0gZXh0ZW5kKHt9LCBzd2lwZXJQYXJhbXMsIGV4dGVuZGVkRGVmYXVsdHMsIHBhcmFtcyk7XG4gICAgc3dpcGVyLm9yaWdpbmFsUGFyYW1zID0gZXh0ZW5kKHt9LCBzd2lwZXIucGFyYW1zKTtcbiAgICBzd2lwZXIucGFzc2VkUGFyYW1zID0gZXh0ZW5kKHt9LCBwYXJhbXMpOyAvLyBhZGQgZXZlbnQgbGlzdGVuZXJzXG5cbiAgICBpZiAoc3dpcGVyLnBhcmFtcyAmJiBzd2lwZXIucGFyYW1zLm9uKSB7XG4gICAgICBPYmplY3Qua2V5cyhzd2lwZXIucGFyYW1zLm9uKS5mb3JFYWNoKGZ1bmN0aW9uIChldmVudE5hbWUpIHtcbiAgICAgICAgc3dpcGVyLm9uKGV2ZW50TmFtZSwgc3dpcGVyLnBhcmFtcy5vbltldmVudE5hbWVdKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChzd2lwZXIucGFyYW1zICYmIHN3aXBlci5wYXJhbXMub25BbnkpIHtcbiAgICAgIHN3aXBlci5vbkFueShzd2lwZXIucGFyYW1zLm9uQW55KTtcbiAgICB9IC8vIFNhdmUgRG9tIGxpYlxuXG5cbiAgICBzd2lwZXIuJCA9ICQ7IC8vIEV4dGVuZCBTd2lwZXJcblxuICAgIGV4dGVuZChzd2lwZXIsIHtcbiAgICAgIGVuYWJsZWQ6IHN3aXBlci5wYXJhbXMuZW5hYmxlZCxcbiAgICAgIGVsOiBlbCxcbiAgICAgIC8vIENsYXNzZXNcbiAgICAgIGNsYXNzTmFtZXM6IFtdLFxuICAgICAgLy8gU2xpZGVzXG4gICAgICBzbGlkZXM6ICQoKSxcbiAgICAgIHNsaWRlc0dyaWQ6IFtdLFxuICAgICAgc25hcEdyaWQ6IFtdLFxuICAgICAgc2xpZGVzU2l6ZXNHcmlkOiBbXSxcbiAgICAgIC8vIGlzRGlyZWN0aW9uXG4gICAgICBpc0hvcml6b250YWw6IGZ1bmN0aW9uIGlzSG9yaXpvbnRhbCgpIHtcbiAgICAgICAgcmV0dXJuIHN3aXBlci5wYXJhbXMuZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCc7XG4gICAgICB9LFxuICAgICAgaXNWZXJ0aWNhbDogZnVuY3Rpb24gaXNWZXJ0aWNhbCgpIHtcbiAgICAgICAgcmV0dXJuIHN3aXBlci5wYXJhbXMuZGlyZWN0aW9uID09PSAndmVydGljYWwnO1xuICAgICAgfSxcbiAgICAgIC8vIEluZGV4ZXNcbiAgICAgIGFjdGl2ZUluZGV4OiAwLFxuICAgICAgcmVhbEluZGV4OiAwLFxuICAgICAgLy9cbiAgICAgIGlzQmVnaW5uaW5nOiB0cnVlLFxuICAgICAgaXNFbmQ6IGZhbHNlLFxuICAgICAgLy8gUHJvcHNcbiAgICAgIHRyYW5zbGF0ZTogMCxcbiAgICAgIHByZXZpb3VzVHJhbnNsYXRlOiAwLFxuICAgICAgcHJvZ3Jlc3M6IDAsXG4gICAgICB2ZWxvY2l0eTogMCxcbiAgICAgIGFuaW1hdGluZzogZmFsc2UsXG4gICAgICAvLyBMb2Nrc1xuICAgICAgYWxsb3dTbGlkZU5leHQ6IHN3aXBlci5wYXJhbXMuYWxsb3dTbGlkZU5leHQsXG4gICAgICBhbGxvd1NsaWRlUHJldjogc3dpcGVyLnBhcmFtcy5hbGxvd1NsaWRlUHJldixcbiAgICAgIC8vIFRvdWNoIEV2ZW50c1xuICAgICAgdG91Y2hFdmVudHM6IGZ1bmN0aW9uIHRvdWNoRXZlbnRzKCkge1xuICAgICAgICB2YXIgdG91Y2ggPSBbJ3RvdWNoc3RhcnQnLCAndG91Y2htb3ZlJywgJ3RvdWNoZW5kJywgJ3RvdWNoY2FuY2VsJ107XG4gICAgICAgIHZhciBkZXNrdG9wID0gWydtb3VzZWRvd24nLCAnbW91c2Vtb3ZlJywgJ21vdXNldXAnXTtcblxuICAgICAgICBpZiAoc3dpcGVyLnN1cHBvcnQucG9pbnRlckV2ZW50cykge1xuICAgICAgICAgIGRlc2t0b3AgPSBbJ3BvaW50ZXJkb3duJywgJ3BvaW50ZXJtb3ZlJywgJ3BvaW50ZXJ1cCddO1xuICAgICAgICB9XG5cbiAgICAgICAgc3dpcGVyLnRvdWNoRXZlbnRzVG91Y2ggPSB7XG4gICAgICAgICAgc3RhcnQ6IHRvdWNoWzBdLFxuICAgICAgICAgIG1vdmU6IHRvdWNoWzFdLFxuICAgICAgICAgIGVuZDogdG91Y2hbMl0sXG4gICAgICAgICAgY2FuY2VsOiB0b3VjaFszXVxuICAgICAgICB9O1xuICAgICAgICBzd2lwZXIudG91Y2hFdmVudHNEZXNrdG9wID0ge1xuICAgICAgICAgIHN0YXJ0OiBkZXNrdG9wWzBdLFxuICAgICAgICAgIG1vdmU6IGRlc2t0b3BbMV0sXG4gICAgICAgICAgZW5kOiBkZXNrdG9wWzJdXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBzd2lwZXIuc3VwcG9ydC50b3VjaCB8fCAhc3dpcGVyLnBhcmFtcy5zaW11bGF0ZVRvdWNoID8gc3dpcGVyLnRvdWNoRXZlbnRzVG91Y2ggOiBzd2lwZXIudG91Y2hFdmVudHNEZXNrdG9wO1xuICAgICAgfSgpLFxuICAgICAgdG91Y2hFdmVudHNEYXRhOiB7XG4gICAgICAgIGlzVG91Y2hlZDogdW5kZWZpbmVkLFxuICAgICAgICBpc01vdmVkOiB1bmRlZmluZWQsXG4gICAgICAgIGFsbG93VG91Y2hDYWxsYmFja3M6IHVuZGVmaW5lZCxcbiAgICAgICAgdG91Y2hTdGFydFRpbWU6IHVuZGVmaW5lZCxcbiAgICAgICAgaXNTY3JvbGxpbmc6IHVuZGVmaW5lZCxcbiAgICAgICAgY3VycmVudFRyYW5zbGF0ZTogdW5kZWZpbmVkLFxuICAgICAgICBzdGFydFRyYW5zbGF0ZTogdW5kZWZpbmVkLFxuICAgICAgICBhbGxvd1RocmVzaG9sZE1vdmU6IHVuZGVmaW5lZCxcbiAgICAgICAgLy8gRm9ybSBlbGVtZW50cyB0byBtYXRjaFxuICAgICAgICBmb2N1c2FibGVFbGVtZW50czogc3dpcGVyLnBhcmFtcy5mb2N1c2FibGVFbGVtZW50cyxcbiAgICAgICAgLy8gTGFzdCBjbGljayB0aW1lXG4gICAgICAgIGxhc3RDbGlja1RpbWU6IG5vdygpLFxuICAgICAgICBjbGlja1RpbWVvdXQ6IHVuZGVmaW5lZCxcbiAgICAgICAgLy8gVmVsb2NpdGllc1xuICAgICAgICB2ZWxvY2l0aWVzOiBbXSxcbiAgICAgICAgYWxsb3dNb21lbnR1bUJvdW5jZTogdW5kZWZpbmVkLFxuICAgICAgICBpc1RvdWNoRXZlbnQ6IHVuZGVmaW5lZCxcbiAgICAgICAgc3RhcnRNb3Zpbmc6IHVuZGVmaW5lZFxuICAgICAgfSxcbiAgICAgIC8vIENsaWNrc1xuICAgICAgYWxsb3dDbGljazogdHJ1ZSxcbiAgICAgIC8vIFRvdWNoZXNcbiAgICAgIGFsbG93VG91Y2hNb3ZlOiBzd2lwZXIucGFyYW1zLmFsbG93VG91Y2hNb3ZlLFxuICAgICAgdG91Y2hlczoge1xuICAgICAgICBzdGFydFg6IDAsXG4gICAgICAgIHN0YXJ0WTogMCxcbiAgICAgICAgY3VycmVudFg6IDAsXG4gICAgICAgIGN1cnJlbnRZOiAwLFxuICAgICAgICBkaWZmOiAwXG4gICAgICB9LFxuICAgICAgLy8gSW1hZ2VzXG4gICAgICBpbWFnZXNUb0xvYWQ6IFtdLFxuICAgICAgaW1hZ2VzTG9hZGVkOiAwXG4gICAgfSk7IC8vIEluc3RhbGwgTW9kdWxlc1xuXG4gICAgc3dpcGVyLnVzZU1vZHVsZXMoKTtcbiAgICBzd2lwZXIuZW1pdCgnX3N3aXBlcicpOyAvLyBJbml0XG5cbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5pbml0KSB7XG4gICAgICBzd2lwZXIuaW5pdCgpO1xuICAgIH0gLy8gUmV0dXJuIGFwcCBpbnN0YW5jZVxuXG5cbiAgICByZXR1cm4gc3dpcGVyO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IFN3aXBlci5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmVuYWJsZSA9IGZ1bmN0aW9uIGVuYWJsZSgpIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICBpZiAoc3dpcGVyLmVuYWJsZWQpIHJldHVybjtcbiAgICBzd2lwZXIuZW5hYmxlZCA9IHRydWU7XG5cbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5ncmFiQ3Vyc29yKSB7XG4gICAgICBzd2lwZXIuc2V0R3JhYkN1cnNvcigpO1xuICAgIH1cblxuICAgIHN3aXBlci5lbWl0KCdlbmFibGUnKTtcbiAgfTtcblxuICBfcHJvdG8uZGlzYWJsZSA9IGZ1bmN0aW9uIGRpc2FibGUoKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgaWYgKCFzd2lwZXIuZW5hYmxlZCkgcmV0dXJuO1xuICAgIHN3aXBlci5lbmFibGVkID0gZmFsc2U7XG5cbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5ncmFiQ3Vyc29yKSB7XG4gICAgICBzd2lwZXIudW5zZXRHcmFiQ3Vyc29yKCk7XG4gICAgfVxuXG4gICAgc3dpcGVyLmVtaXQoJ2Rpc2FibGUnKTtcbiAgfTtcblxuICBfcHJvdG8uc2V0UHJvZ3Jlc3MgPSBmdW5jdGlvbiBzZXRQcm9ncmVzcyhwcm9ncmVzcywgc3BlZWQpIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICBwcm9ncmVzcyA9IE1hdGgubWluKE1hdGgubWF4KHByb2dyZXNzLCAwKSwgMSk7XG4gICAgdmFyIG1pbiA9IHN3aXBlci5taW5UcmFuc2xhdGUoKTtcbiAgICB2YXIgbWF4ID0gc3dpcGVyLm1heFRyYW5zbGF0ZSgpO1xuICAgIHZhciBjdXJyZW50ID0gKG1heCAtIG1pbikgKiBwcm9ncmVzcyArIG1pbjtcbiAgICBzd2lwZXIudHJhbnNsYXRlVG8oY3VycmVudCwgdHlwZW9mIHNwZWVkID09PSAndW5kZWZpbmVkJyA/IDAgOiBzcGVlZCk7XG4gICAgc3dpcGVyLnVwZGF0ZUFjdGl2ZUluZGV4KCk7XG4gICAgc3dpcGVyLnVwZGF0ZVNsaWRlc0NsYXNzZXMoKTtcbiAgfTtcblxuICBfcHJvdG8uZW1pdENvbnRhaW5lckNsYXNzZXMgPSBmdW5jdGlvbiBlbWl0Q29udGFpbmVyQ2xhc3NlcygpIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICBpZiAoIXN3aXBlci5wYXJhbXMuX2VtaXRDbGFzc2VzIHx8ICFzd2lwZXIuZWwpIHJldHVybjtcbiAgICB2YXIgY2xhc3NlcyA9IHN3aXBlci5lbC5jbGFzc05hbWUuc3BsaXQoJyAnKS5maWx0ZXIoZnVuY3Rpb24gKGNsYXNzTmFtZSkge1xuICAgICAgcmV0dXJuIGNsYXNzTmFtZS5pbmRleE9mKCdzd2lwZXItY29udGFpbmVyJykgPT09IDAgfHwgY2xhc3NOYW1lLmluZGV4T2Yoc3dpcGVyLnBhcmFtcy5jb250YWluZXJNb2RpZmllckNsYXNzKSA9PT0gMDtcbiAgICB9KTtcbiAgICBzd2lwZXIuZW1pdCgnX2NvbnRhaW5lckNsYXNzZXMnLCBjbGFzc2VzLmpvaW4oJyAnKSk7XG4gIH07XG5cbiAgX3Byb3RvLmdldFNsaWRlQ2xhc3NlcyA9IGZ1bmN0aW9uIGdldFNsaWRlQ2xhc3NlcyhzbGlkZUVsKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgcmV0dXJuIHNsaWRlRWwuY2xhc3NOYW1lLnNwbGl0KCcgJykuZmlsdGVyKGZ1bmN0aW9uIChjbGFzc05hbWUpIHtcbiAgICAgIHJldHVybiBjbGFzc05hbWUuaW5kZXhPZignc3dpcGVyLXNsaWRlJykgPT09IDAgfHwgY2xhc3NOYW1lLmluZGV4T2Yoc3dpcGVyLnBhcmFtcy5zbGlkZUNsYXNzKSA9PT0gMDtcbiAgICB9KS5qb2luKCcgJyk7XG4gIH07XG5cbiAgX3Byb3RvLmVtaXRTbGlkZXNDbGFzc2VzID0gZnVuY3Rpb24gZW1pdFNsaWRlc0NsYXNzZXMoKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgaWYgKCFzd2lwZXIucGFyYW1zLl9lbWl0Q2xhc3NlcyB8fCAhc3dpcGVyLmVsKSByZXR1cm47XG4gICAgdmFyIHVwZGF0ZXMgPSBbXTtcbiAgICBzd2lwZXIuc2xpZGVzLmVhY2goZnVuY3Rpb24gKHNsaWRlRWwpIHtcbiAgICAgIHZhciBjbGFzc05hbWVzID0gc3dpcGVyLmdldFNsaWRlQ2xhc3NlcyhzbGlkZUVsKTtcbiAgICAgIHVwZGF0ZXMucHVzaCh7XG4gICAgICAgIHNsaWRlRWw6IHNsaWRlRWwsXG4gICAgICAgIGNsYXNzTmFtZXM6IGNsYXNzTmFtZXNcbiAgICAgIH0pO1xuICAgICAgc3dpcGVyLmVtaXQoJ19zbGlkZUNsYXNzJywgc2xpZGVFbCwgY2xhc3NOYW1lcyk7XG4gICAgfSk7XG4gICAgc3dpcGVyLmVtaXQoJ19zbGlkZUNsYXNzZXMnLCB1cGRhdGVzKTtcbiAgfTtcblxuICBfcHJvdG8uc2xpZGVzUGVyVmlld0R5bmFtaWMgPSBmdW5jdGlvbiBzbGlkZXNQZXJWaWV3RHluYW1pYygpIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICB2YXIgcGFyYW1zID0gc3dpcGVyLnBhcmFtcyxcbiAgICAgICAgc2xpZGVzID0gc3dpcGVyLnNsaWRlcyxcbiAgICAgICAgc2xpZGVzR3JpZCA9IHN3aXBlci5zbGlkZXNHcmlkLFxuICAgICAgICBzd2lwZXJTaXplID0gc3dpcGVyLnNpemUsXG4gICAgICAgIGFjdGl2ZUluZGV4ID0gc3dpcGVyLmFjdGl2ZUluZGV4O1xuICAgIHZhciBzcHYgPSAxO1xuXG4gICAgaWYgKHBhcmFtcy5jZW50ZXJlZFNsaWRlcykge1xuICAgICAgdmFyIHNsaWRlU2l6ZSA9IHNsaWRlc1thY3RpdmVJbmRleF0uc3dpcGVyU2xpZGVTaXplO1xuICAgICAgdmFyIGJyZWFrTG9vcDtcblxuICAgICAgZm9yICh2YXIgaSA9IGFjdGl2ZUluZGV4ICsgMTsgaSA8IHNsaWRlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBpZiAoc2xpZGVzW2ldICYmICFicmVha0xvb3ApIHtcbiAgICAgICAgICBzbGlkZVNpemUgKz0gc2xpZGVzW2ldLnN3aXBlclNsaWRlU2l6ZTtcbiAgICAgICAgICBzcHYgKz0gMTtcbiAgICAgICAgICBpZiAoc2xpZGVTaXplID4gc3dpcGVyU2l6ZSkgYnJlYWtMb29wID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBfaSA9IGFjdGl2ZUluZGV4IC0gMTsgX2kgPj0gMDsgX2kgLT0gMSkge1xuICAgICAgICBpZiAoc2xpZGVzW19pXSAmJiAhYnJlYWtMb29wKSB7XG4gICAgICAgICAgc2xpZGVTaXplICs9IHNsaWRlc1tfaV0uc3dpcGVyU2xpZGVTaXplO1xuICAgICAgICAgIHNwdiArPSAxO1xuICAgICAgICAgIGlmIChzbGlkZVNpemUgPiBzd2lwZXJTaXplKSBicmVha0xvb3AgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAodmFyIF9pMiA9IGFjdGl2ZUluZGV4ICsgMTsgX2kyIDwgc2xpZGVzLmxlbmd0aDsgX2kyICs9IDEpIHtcbiAgICAgICAgaWYgKHNsaWRlc0dyaWRbX2kyXSAtIHNsaWRlc0dyaWRbYWN0aXZlSW5kZXhdIDwgc3dpcGVyU2l6ZSkge1xuICAgICAgICAgIHNwdiArPSAxO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHNwdjtcbiAgfTtcblxuICBfcHJvdG8udXBkYXRlID0gZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIGlmICghc3dpcGVyIHx8IHN3aXBlci5kZXN0cm95ZWQpIHJldHVybjtcbiAgICB2YXIgc25hcEdyaWQgPSBzd2lwZXIuc25hcEdyaWQsXG4gICAgICAgIHBhcmFtcyA9IHN3aXBlci5wYXJhbXM7IC8vIEJyZWFrcG9pbnRzXG5cbiAgICBpZiAocGFyYW1zLmJyZWFrcG9pbnRzKSB7XG4gICAgICBzd2lwZXIuc2V0QnJlYWtwb2ludCgpO1xuICAgIH1cblxuICAgIHN3aXBlci51cGRhdGVTaXplKCk7XG4gICAgc3dpcGVyLnVwZGF0ZVNsaWRlcygpO1xuICAgIHN3aXBlci51cGRhdGVQcm9ncmVzcygpO1xuICAgIHN3aXBlci51cGRhdGVTbGlkZXNDbGFzc2VzKCk7XG5cbiAgICBmdW5jdGlvbiBzZXRUcmFuc2xhdGUoKSB7XG4gICAgICB2YXIgdHJhbnNsYXRlVmFsdWUgPSBzd2lwZXIucnRsVHJhbnNsYXRlID8gc3dpcGVyLnRyYW5zbGF0ZSAqIC0xIDogc3dpcGVyLnRyYW5zbGF0ZTtcbiAgICAgIHZhciBuZXdUcmFuc2xhdGUgPSBNYXRoLm1pbihNYXRoLm1heCh0cmFuc2xhdGVWYWx1ZSwgc3dpcGVyLm1heFRyYW5zbGF0ZSgpKSwgc3dpcGVyLm1pblRyYW5zbGF0ZSgpKTtcbiAgICAgIHN3aXBlci5zZXRUcmFuc2xhdGUobmV3VHJhbnNsYXRlKTtcbiAgICAgIHN3aXBlci51cGRhdGVBY3RpdmVJbmRleCgpO1xuICAgICAgc3dpcGVyLnVwZGF0ZVNsaWRlc0NsYXNzZXMoKTtcbiAgICB9XG5cbiAgICB2YXIgdHJhbnNsYXRlZDtcblxuICAgIGlmIChzd2lwZXIucGFyYW1zLmZyZWVNb2RlKSB7XG4gICAgICBzZXRUcmFuc2xhdGUoKTtcblxuICAgICAgaWYgKHN3aXBlci5wYXJhbXMuYXV0b0hlaWdodCkge1xuICAgICAgICBzd2lwZXIudXBkYXRlQXV0b0hlaWdodCgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoKHN3aXBlci5wYXJhbXMuc2xpZGVzUGVyVmlldyA9PT0gJ2F1dG8nIHx8IHN3aXBlci5wYXJhbXMuc2xpZGVzUGVyVmlldyA+IDEpICYmIHN3aXBlci5pc0VuZCAmJiAhc3dpcGVyLnBhcmFtcy5jZW50ZXJlZFNsaWRlcykge1xuICAgICAgICB0cmFuc2xhdGVkID0gc3dpcGVyLnNsaWRlVG8oc3dpcGVyLnNsaWRlcy5sZW5ndGggLSAxLCAwLCBmYWxzZSwgdHJ1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cmFuc2xhdGVkID0gc3dpcGVyLnNsaWRlVG8oc3dpcGVyLmFjdGl2ZUluZGV4LCAwLCBmYWxzZSwgdHJ1ZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICghdHJhbnNsYXRlZCkge1xuICAgICAgICBzZXRUcmFuc2xhdGUoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocGFyYW1zLndhdGNoT3ZlcmZsb3cgJiYgc25hcEdyaWQgIT09IHN3aXBlci5zbmFwR3JpZCkge1xuICAgICAgc3dpcGVyLmNoZWNrT3ZlcmZsb3coKTtcbiAgICB9XG5cbiAgICBzd2lwZXIuZW1pdCgndXBkYXRlJyk7XG4gIH07XG5cbiAgX3Byb3RvLmNoYW5nZURpcmVjdGlvbiA9IGZ1bmN0aW9uIGNoYW5nZURpcmVjdGlvbihuZXdEaXJlY3Rpb24sIG5lZWRVcGRhdGUpIHtcbiAgICBpZiAobmVlZFVwZGF0ZSA9PT0gdm9pZCAwKSB7XG4gICAgICBuZWVkVXBkYXRlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICB2YXIgY3VycmVudERpcmVjdGlvbiA9IHN3aXBlci5wYXJhbXMuZGlyZWN0aW9uO1xuXG4gICAgaWYgKCFuZXdEaXJlY3Rpb24pIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgICAgbmV3RGlyZWN0aW9uID0gY3VycmVudERpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnID8gJ3ZlcnRpY2FsJyA6ICdob3Jpem9udGFsJztcbiAgICB9XG5cbiAgICBpZiAobmV3RGlyZWN0aW9uID09PSBjdXJyZW50RGlyZWN0aW9uIHx8IG5ld0RpcmVjdGlvbiAhPT0gJ2hvcml6b250YWwnICYmIG5ld0RpcmVjdGlvbiAhPT0gJ3ZlcnRpY2FsJykge1xuICAgICAgcmV0dXJuIHN3aXBlcjtcbiAgICB9XG5cbiAgICBzd2lwZXIuJGVsLnJlbW92ZUNsYXNzKFwiXCIgKyBzd2lwZXIucGFyYW1zLmNvbnRhaW5lck1vZGlmaWVyQ2xhc3MgKyBjdXJyZW50RGlyZWN0aW9uKS5hZGRDbGFzcyhcIlwiICsgc3dpcGVyLnBhcmFtcy5jb250YWluZXJNb2RpZmllckNsYXNzICsgbmV3RGlyZWN0aW9uKTtcbiAgICBzd2lwZXIuZW1pdENvbnRhaW5lckNsYXNzZXMoKTtcbiAgICBzd2lwZXIucGFyYW1zLmRpcmVjdGlvbiA9IG5ld0RpcmVjdGlvbjtcbiAgICBzd2lwZXIuc2xpZGVzLmVhY2goZnVuY3Rpb24gKHNsaWRlRWwpIHtcbiAgICAgIGlmIChuZXdEaXJlY3Rpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgc2xpZGVFbC5zdHlsZS53aWR0aCA9ICcnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2xpZGVFbC5zdHlsZS5oZWlnaHQgPSAnJztcbiAgICAgIH1cbiAgICB9KTtcbiAgICBzd2lwZXIuZW1pdCgnY2hhbmdlRGlyZWN0aW9uJyk7XG4gICAgaWYgKG5lZWRVcGRhdGUpIHN3aXBlci51cGRhdGUoKTtcbiAgICByZXR1cm4gc3dpcGVyO1xuICB9O1xuXG4gIF9wcm90by5tb3VudCA9IGZ1bmN0aW9uIG1vdW50KGVsKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgaWYgKHN3aXBlci5tb3VudGVkKSByZXR1cm4gdHJ1ZTsgLy8gRmluZCBlbFxuXG4gICAgdmFyICRlbCA9ICQoZWwgfHwgc3dpcGVyLnBhcmFtcy5lbCk7XG4gICAgZWwgPSAkZWxbMF07XG5cbiAgICBpZiAoIWVsKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZWwuc3dpcGVyID0gc3dpcGVyO1xuXG4gICAgdmFyIGdldFdyYXBwZXJTZWxlY3RvciA9IGZ1bmN0aW9uIGdldFdyYXBwZXJTZWxlY3RvcigpIHtcbiAgICAgIHJldHVybiBcIi5cIiArIChzd2lwZXIucGFyYW1zLndyYXBwZXJDbGFzcyB8fCAnJykudHJpbSgpLnNwbGl0KCcgJykuam9pbignLicpO1xuICAgIH07XG5cbiAgICB2YXIgZ2V0V3JhcHBlciA9IGZ1bmN0aW9uIGdldFdyYXBwZXIoKSB7XG4gICAgICBpZiAoZWwgJiYgZWwuc2hhZG93Um9vdCAmJiBlbC5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IpIHtcbiAgICAgICAgdmFyIHJlcyA9ICQoZWwuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKGdldFdyYXBwZXJTZWxlY3RvcigpKSk7IC8vIENoaWxkcmVuIG5lZWRzIHRvIHJldHVybiBzbG90IGl0ZW1zXG5cbiAgICAgICAgcmVzLmNoaWxkcmVuID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgICByZXR1cm4gJGVsLmNoaWxkcmVuKG9wdGlvbnMpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiByZXM7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAkZWwuY2hpbGRyZW4oZ2V0V3JhcHBlclNlbGVjdG9yKCkpO1xuICAgIH07IC8vIEZpbmQgV3JhcHBlclxuXG5cbiAgICB2YXIgJHdyYXBwZXJFbCA9IGdldFdyYXBwZXIoKTtcblxuICAgIGlmICgkd3JhcHBlckVsLmxlbmd0aCA9PT0gMCAmJiBzd2lwZXIucGFyYW1zLmNyZWF0ZUVsZW1lbnRzKSB7XG4gICAgICB2YXIgZG9jdW1lbnQgPSBnZXREb2N1bWVudCgpO1xuICAgICAgdmFyIHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICR3cmFwcGVyRWwgPSAkKHdyYXBwZXIpO1xuICAgICAgd3JhcHBlci5jbGFzc05hbWUgPSBzd2lwZXIucGFyYW1zLndyYXBwZXJDbGFzcztcbiAgICAgICRlbC5hcHBlbmQod3JhcHBlcik7XG4gICAgICAkZWwuY2hpbGRyZW4oXCIuXCIgKyBzd2lwZXIucGFyYW1zLnNsaWRlQ2xhc3MpLmVhY2goZnVuY3Rpb24gKHNsaWRlRWwpIHtcbiAgICAgICAgJHdyYXBwZXJFbC5hcHBlbmQoc2xpZGVFbCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBleHRlbmQoc3dpcGVyLCB7XG4gICAgICAkZWw6ICRlbCxcbiAgICAgIGVsOiBlbCxcbiAgICAgICR3cmFwcGVyRWw6ICR3cmFwcGVyRWwsXG4gICAgICB3cmFwcGVyRWw6ICR3cmFwcGVyRWxbMF0sXG4gICAgICBtb3VudGVkOiB0cnVlLFxuICAgICAgLy8gUlRMXG4gICAgICBydGw6IGVsLmRpci50b0xvd2VyQ2FzZSgpID09PSAncnRsJyB8fCAkZWwuY3NzKCdkaXJlY3Rpb24nKSA9PT0gJ3J0bCcsXG4gICAgICBydGxUcmFuc2xhdGU6IHN3aXBlci5wYXJhbXMuZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcgJiYgKGVsLmRpci50b0xvd2VyQ2FzZSgpID09PSAncnRsJyB8fCAkZWwuY3NzKCdkaXJlY3Rpb24nKSA9PT0gJ3J0bCcpLFxuICAgICAgd3JvbmdSVEw6ICR3cmFwcGVyRWwuY3NzKCdkaXNwbGF5JykgPT09ICctd2Via2l0LWJveCdcbiAgICB9KTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICBfcHJvdG8uaW5pdCA9IGZ1bmN0aW9uIGluaXQoZWwpIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICBpZiAoc3dpcGVyLmluaXRpYWxpemVkKSByZXR1cm4gc3dpcGVyO1xuICAgIHZhciBtb3VudGVkID0gc3dpcGVyLm1vdW50KGVsKTtcbiAgICBpZiAobW91bnRlZCA9PT0gZmFsc2UpIHJldHVybiBzd2lwZXI7XG4gICAgc3dpcGVyLmVtaXQoJ2JlZm9yZUluaXQnKTsgLy8gU2V0IGJyZWFrcG9pbnRcblxuICAgIGlmIChzd2lwZXIucGFyYW1zLmJyZWFrcG9pbnRzKSB7XG4gICAgICBzd2lwZXIuc2V0QnJlYWtwb2ludCgpO1xuICAgIH0gLy8gQWRkIENsYXNzZXNcblxuXG4gICAgc3dpcGVyLmFkZENsYXNzZXMoKTsgLy8gQ3JlYXRlIGxvb3BcblxuICAgIGlmIChzd2lwZXIucGFyYW1zLmxvb3ApIHtcbiAgICAgIHN3aXBlci5sb29wQ3JlYXRlKCk7XG4gICAgfSAvLyBVcGRhdGUgc2l6ZVxuXG5cbiAgICBzd2lwZXIudXBkYXRlU2l6ZSgpOyAvLyBVcGRhdGUgc2xpZGVzXG5cbiAgICBzd2lwZXIudXBkYXRlU2xpZGVzKCk7XG5cbiAgICBpZiAoc3dpcGVyLnBhcmFtcy53YXRjaE92ZXJmbG93KSB7XG4gICAgICBzd2lwZXIuY2hlY2tPdmVyZmxvdygpO1xuICAgIH0gLy8gU2V0IEdyYWIgQ3Vyc29yXG5cblxuICAgIGlmIChzd2lwZXIucGFyYW1zLmdyYWJDdXJzb3IgJiYgc3dpcGVyLmVuYWJsZWQpIHtcbiAgICAgIHN3aXBlci5zZXRHcmFiQ3Vyc29yKCk7XG4gICAgfVxuXG4gICAgaWYgKHN3aXBlci5wYXJhbXMucHJlbG9hZEltYWdlcykge1xuICAgICAgc3dpcGVyLnByZWxvYWRJbWFnZXMoKTtcbiAgICB9IC8vIFNsaWRlIFRvIEluaXRpYWwgU2xpZGVcblxuXG4gICAgaWYgKHN3aXBlci5wYXJhbXMubG9vcCkge1xuICAgICAgc3dpcGVyLnNsaWRlVG8oc3dpcGVyLnBhcmFtcy5pbml0aWFsU2xpZGUgKyBzd2lwZXIubG9vcGVkU2xpZGVzLCAwLCBzd2lwZXIucGFyYW1zLnJ1bkNhbGxiYWNrc09uSW5pdCwgZmFsc2UsIHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzd2lwZXIuc2xpZGVUbyhzd2lwZXIucGFyYW1zLmluaXRpYWxTbGlkZSwgMCwgc3dpcGVyLnBhcmFtcy5ydW5DYWxsYmFja3NPbkluaXQsIGZhbHNlLCB0cnVlKTtcbiAgICB9IC8vIEF0dGFjaCBldmVudHNcblxuXG4gICAgc3dpcGVyLmF0dGFjaEV2ZW50cygpOyAvLyBJbml0IEZsYWdcblxuICAgIHN3aXBlci5pbml0aWFsaXplZCA9IHRydWU7IC8vIEVtaXRcblxuICAgIHN3aXBlci5lbWl0KCdpbml0Jyk7XG4gICAgc3dpcGVyLmVtaXQoJ2FmdGVySW5pdCcpO1xuICAgIHJldHVybiBzd2lwZXI7XG4gIH07XG5cbiAgX3Byb3RvLmRlc3Ryb3kgPSBmdW5jdGlvbiBkZXN0cm95KGRlbGV0ZUluc3RhbmNlLCBjbGVhblN0eWxlcykge1xuICAgIGlmIChkZWxldGVJbnN0YW5jZSA9PT0gdm9pZCAwKSB7XG4gICAgICBkZWxldGVJbnN0YW5jZSA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGNsZWFuU3R5bGVzID09PSB2b2lkIDApIHtcbiAgICAgIGNsZWFuU3R5bGVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICB2YXIgcGFyYW1zID0gc3dpcGVyLnBhcmFtcyxcbiAgICAgICAgJGVsID0gc3dpcGVyLiRlbCxcbiAgICAgICAgJHdyYXBwZXJFbCA9IHN3aXBlci4kd3JhcHBlckVsLFxuICAgICAgICBzbGlkZXMgPSBzd2lwZXIuc2xpZGVzO1xuXG4gICAgaWYgKHR5cGVvZiBzd2lwZXIucGFyYW1zID09PSAndW5kZWZpbmVkJyB8fCBzd2lwZXIuZGVzdHJveWVkKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBzd2lwZXIuZW1pdCgnYmVmb3JlRGVzdHJveScpOyAvLyBJbml0IEZsYWdcblxuICAgIHN3aXBlci5pbml0aWFsaXplZCA9IGZhbHNlOyAvLyBEZXRhY2ggZXZlbnRzXG5cbiAgICBzd2lwZXIuZGV0YWNoRXZlbnRzKCk7IC8vIERlc3Ryb3kgbG9vcFxuXG4gICAgaWYgKHBhcmFtcy5sb29wKSB7XG4gICAgICBzd2lwZXIubG9vcERlc3Ryb3koKTtcbiAgICB9IC8vIENsZWFudXAgc3R5bGVzXG5cblxuICAgIGlmIChjbGVhblN0eWxlcykge1xuICAgICAgc3dpcGVyLnJlbW92ZUNsYXNzZXMoKTtcbiAgICAgICRlbC5yZW1vdmVBdHRyKCdzdHlsZScpO1xuICAgICAgJHdyYXBwZXJFbC5yZW1vdmVBdHRyKCdzdHlsZScpO1xuXG4gICAgICBpZiAoc2xpZGVzICYmIHNsaWRlcy5sZW5ndGgpIHtcbiAgICAgICAgc2xpZGVzLnJlbW92ZUNsYXNzKFtwYXJhbXMuc2xpZGVWaXNpYmxlQ2xhc3MsIHBhcmFtcy5zbGlkZUFjdGl2ZUNsYXNzLCBwYXJhbXMuc2xpZGVOZXh0Q2xhc3MsIHBhcmFtcy5zbGlkZVByZXZDbGFzc10uam9pbignICcpKS5yZW1vdmVBdHRyKCdzdHlsZScpLnJlbW92ZUF0dHIoJ2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4Jyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgc3dpcGVyLmVtaXQoJ2Rlc3Ryb3knKTsgLy8gRGV0YWNoIGVtaXR0ZXIgZXZlbnRzXG5cbiAgICBPYmplY3Qua2V5cyhzd2lwZXIuZXZlbnRzTGlzdGVuZXJzKS5mb3JFYWNoKGZ1bmN0aW9uIChldmVudE5hbWUpIHtcbiAgICAgIHN3aXBlci5vZmYoZXZlbnROYW1lKTtcbiAgICB9KTtcblxuICAgIGlmIChkZWxldGVJbnN0YW5jZSAhPT0gZmFsc2UpIHtcbiAgICAgIHN3aXBlci4kZWxbMF0uc3dpcGVyID0gbnVsbDtcbiAgICAgIGRlbGV0ZVByb3BzKHN3aXBlcik7XG4gICAgfVxuXG4gICAgc3dpcGVyLmRlc3Ryb3llZCA9IHRydWU7XG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG5cbiAgU3dpcGVyLmV4dGVuZERlZmF1bHRzID0gZnVuY3Rpb24gZXh0ZW5kRGVmYXVsdHMobmV3RGVmYXVsdHMpIHtcbiAgICBleHRlbmQoZXh0ZW5kZWREZWZhdWx0cywgbmV3RGVmYXVsdHMpO1xuICB9O1xuXG4gIFN3aXBlci5pbnN0YWxsTW9kdWxlID0gZnVuY3Rpb24gaW5zdGFsbE1vZHVsZShtb2R1bGUpIHtcbiAgICBpZiAoIVN3aXBlci5wcm90b3R5cGUubW9kdWxlcykgU3dpcGVyLnByb3RvdHlwZS5tb2R1bGVzID0ge307XG4gICAgdmFyIG5hbWUgPSBtb2R1bGUubmFtZSB8fCBPYmplY3Qua2V5cyhTd2lwZXIucHJvdG90eXBlLm1vZHVsZXMpLmxlbmd0aCArIFwiX1wiICsgbm93KCk7XG4gICAgU3dpcGVyLnByb3RvdHlwZS5tb2R1bGVzW25hbWVdID0gbW9kdWxlO1xuICB9O1xuXG4gIFN3aXBlci51c2UgPSBmdW5jdGlvbiB1c2UobW9kdWxlKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkobW9kdWxlKSkge1xuICAgICAgbW9kdWxlLmZvckVhY2goZnVuY3Rpb24gKG0pIHtcbiAgICAgICAgcmV0dXJuIFN3aXBlci5pbnN0YWxsTW9kdWxlKG0pO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gU3dpcGVyO1xuICAgIH1cblxuICAgIFN3aXBlci5pbnN0YWxsTW9kdWxlKG1vZHVsZSk7XG4gICAgcmV0dXJuIFN3aXBlcjtcbiAgfTtcblxuICBfY3JlYXRlQ2xhc3MoU3dpcGVyLCBudWxsLCBbe1xuICAgIGtleTogXCJleHRlbmRlZERlZmF1bHRzXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gZXh0ZW5kZWREZWZhdWx0cztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZGVmYXVsdHNcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBkZWZhdWx0cztcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gU3dpcGVyO1xufSgpO1xuXG5PYmplY3Qua2V5cyhwcm90b3R5cGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChwcm90b3R5cGVHcm91cCkge1xuICBPYmplY3Qua2V5cyhwcm90b3R5cGVzW3Byb3RvdHlwZUdyb3VwXSkuZm9yRWFjaChmdW5jdGlvbiAocHJvdG9NZXRob2QpIHtcbiAgICBTd2lwZXIucHJvdG90eXBlW3Byb3RvTWV0aG9kXSA9IHByb3RvdHlwZXNbcHJvdG90eXBlR3JvdXBdW3Byb3RvTWV0aG9kXTtcbiAgfSk7XG59KTtcblN3aXBlci51c2UoW1Jlc2l6ZSwgT2JzZXJ2ZXJdKTtcbmV4cG9ydCBkZWZhdWx0IFN3aXBlcjsiLCJleHBvcnQgZGVmYXVsdCB7XG4gIGluaXQ6IHRydWUsXG4gIGRpcmVjdGlvbjogJ2hvcml6b250YWwnLFxuICB0b3VjaEV2ZW50c1RhcmdldDogJ2NvbnRhaW5lcicsXG4gIGluaXRpYWxTbGlkZTogMCxcbiAgc3BlZWQ6IDMwMCxcbiAgY3NzTW9kZTogZmFsc2UsXG4gIHVwZGF0ZU9uV2luZG93UmVzaXplOiB0cnVlLFxuICByZXNpemVPYnNlcnZlcjogZmFsc2UsXG4gIG5lc3RlZDogZmFsc2UsXG4gIGNyZWF0ZUVsZW1lbnRzOiBmYWxzZSxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgZm9jdXNhYmxlRWxlbWVudHM6ICdpbnB1dCwgc2VsZWN0LCBvcHRpb24sIHRleHRhcmVhLCBidXR0b24sIHZpZGVvLCBsYWJlbCcsXG4gIC8vIE92ZXJyaWRlc1xuICB3aWR0aDogbnVsbCxcbiAgaGVpZ2h0OiBudWxsLFxuICAvL1xuICBwcmV2ZW50SW50ZXJhY3Rpb25PblRyYW5zaXRpb246IGZhbHNlLFxuICAvLyBzc3JcbiAgdXNlckFnZW50OiBudWxsLFxuICB1cmw6IG51bGwsXG4gIC8vIFRvIHN1cHBvcnQgaU9TJ3Mgc3dpcGUtdG8tZ28tYmFjayBnZXN0dXJlICh3aGVuIGJlaW5nIHVzZWQgaW4tYXBwKS5cbiAgZWRnZVN3aXBlRGV0ZWN0aW9uOiBmYWxzZSxcbiAgZWRnZVN3aXBlVGhyZXNob2xkOiAyMCxcbiAgLy8gRnJlZSBtb2RlXG4gIGZyZWVNb2RlOiBmYWxzZSxcbiAgZnJlZU1vZGVNb21lbnR1bTogdHJ1ZSxcbiAgZnJlZU1vZGVNb21lbnR1bVJhdGlvOiAxLFxuICBmcmVlTW9kZU1vbWVudHVtQm91bmNlOiB0cnVlLFxuICBmcmVlTW9kZU1vbWVudHVtQm91bmNlUmF0aW86IDEsXG4gIGZyZWVNb2RlTW9tZW50dW1WZWxvY2l0eVJhdGlvOiAxLFxuICBmcmVlTW9kZVN0aWNreTogZmFsc2UsXG4gIGZyZWVNb2RlTWluaW11bVZlbG9jaXR5OiAwLjAyLFxuICAvLyBBdXRvaGVpZ2h0XG4gIGF1dG9IZWlnaHQ6IGZhbHNlLFxuICAvLyBTZXQgd3JhcHBlciB3aWR0aFxuICBzZXRXcmFwcGVyU2l6ZTogZmFsc2UsXG4gIC8vIFZpcnR1YWwgVHJhbnNsYXRlXG4gIHZpcnR1YWxUcmFuc2xhdGU6IGZhbHNlLFxuICAvLyBFZmZlY3RzXG4gIGVmZmVjdDogJ3NsaWRlJyxcbiAgLy8gJ3NsaWRlJyBvciAnZmFkZScgb3IgJ2N1YmUnIG9yICdjb3ZlcmZsb3cnIG9yICdmbGlwJ1xuICAvLyBCcmVha3BvaW50c1xuICBicmVha3BvaW50czogdW5kZWZpbmVkLFxuICBicmVha3BvaW50c0Jhc2U6ICd3aW5kb3cnLFxuICAvLyBTbGlkZXMgZ3JpZFxuICBzcGFjZUJldHdlZW46IDAsXG4gIHNsaWRlc1BlclZpZXc6IDEsXG4gIHNsaWRlc1BlckNvbHVtbjogMSxcbiAgc2xpZGVzUGVyQ29sdW1uRmlsbDogJ2NvbHVtbicsXG4gIHNsaWRlc1Blckdyb3VwOiAxLFxuICBzbGlkZXNQZXJHcm91cFNraXA6IDAsXG4gIGNlbnRlcmVkU2xpZGVzOiBmYWxzZSxcbiAgY2VudGVyZWRTbGlkZXNCb3VuZHM6IGZhbHNlLFxuICBzbGlkZXNPZmZzZXRCZWZvcmU6IDAsXG4gIC8vIGluIHB4XG4gIHNsaWRlc09mZnNldEFmdGVyOiAwLFxuICAvLyBpbiBweFxuICBub3JtYWxpemVTbGlkZUluZGV4OiB0cnVlLFxuICBjZW50ZXJJbnN1ZmZpY2llbnRTbGlkZXM6IGZhbHNlLFxuICAvLyBEaXNhYmxlIHN3aXBlciBhbmQgaGlkZSBuYXZpZ2F0aW9uIHdoZW4gY29udGFpbmVyIG5vdCBvdmVyZmxvd1xuICB3YXRjaE92ZXJmbG93OiBmYWxzZSxcbiAgLy8gUm91bmQgbGVuZ3RoXG4gIHJvdW5kTGVuZ3RoczogZmFsc2UsXG4gIC8vIFRvdWNoZXNcbiAgdG91Y2hSYXRpbzogMSxcbiAgdG91Y2hBbmdsZTogNDUsXG4gIHNpbXVsYXRlVG91Y2g6IHRydWUsXG4gIHNob3J0U3dpcGVzOiB0cnVlLFxuICBsb25nU3dpcGVzOiB0cnVlLFxuICBsb25nU3dpcGVzUmF0aW86IDAuNSxcbiAgbG9uZ1N3aXBlc01zOiAzMDAsXG4gIGZvbGxvd0ZpbmdlcjogdHJ1ZSxcbiAgYWxsb3dUb3VjaE1vdmU6IHRydWUsXG4gIHRocmVzaG9sZDogMCxcbiAgdG91Y2hNb3ZlU3RvcFByb3BhZ2F0aW9uOiBmYWxzZSxcbiAgdG91Y2hTdGFydFByZXZlbnREZWZhdWx0OiB0cnVlLFxuICB0b3VjaFN0YXJ0Rm9yY2VQcmV2ZW50RGVmYXVsdDogZmFsc2UsXG4gIHRvdWNoUmVsZWFzZU9uRWRnZXM6IGZhbHNlLFxuICAvLyBVbmlxdWUgTmF2aWdhdGlvbiBFbGVtZW50c1xuICB1bmlxdWVOYXZFbGVtZW50czogdHJ1ZSxcbiAgLy8gUmVzaXN0YW5jZVxuICByZXNpc3RhbmNlOiB0cnVlLFxuICByZXNpc3RhbmNlUmF0aW86IDAuODUsXG4gIC8vIFByb2dyZXNzXG4gIHdhdGNoU2xpZGVzUHJvZ3Jlc3M6IGZhbHNlLFxuICB3YXRjaFNsaWRlc1Zpc2liaWxpdHk6IGZhbHNlLFxuICAvLyBDdXJzb3JcbiAgZ3JhYkN1cnNvcjogZmFsc2UsXG4gIC8vIENsaWNrc1xuICBwcmV2ZW50Q2xpY2tzOiB0cnVlLFxuICBwcmV2ZW50Q2xpY2tzUHJvcGFnYXRpb246IHRydWUsXG4gIHNsaWRlVG9DbGlja2VkU2xpZGU6IGZhbHNlLFxuICAvLyBJbWFnZXNcbiAgcHJlbG9hZEltYWdlczogdHJ1ZSxcbiAgdXBkYXRlT25JbWFnZXNSZWFkeTogdHJ1ZSxcbiAgLy8gbG9vcFxuICBsb29wOiBmYWxzZSxcbiAgbG9vcEFkZGl0aW9uYWxTbGlkZXM6IDAsXG4gIGxvb3BlZFNsaWRlczogbnVsbCxcbiAgbG9vcEZpbGxHcm91cFdpdGhCbGFuazogZmFsc2UsXG4gIGxvb3BQcmV2ZW50c1NsaWRlOiB0cnVlLFxuICAvLyBTd2lwaW5nL25vIHN3aXBpbmdcbiAgYWxsb3dTbGlkZVByZXY6IHRydWUsXG4gIGFsbG93U2xpZGVOZXh0OiB0cnVlLFxuICBzd2lwZUhhbmRsZXI6IG51bGwsXG4gIC8vICcuc3dpcGUtaGFuZGxlcicsXG4gIG5vU3dpcGluZzogdHJ1ZSxcbiAgbm9Td2lwaW5nQ2xhc3M6ICdzd2lwZXItbm8tc3dpcGluZycsXG4gIG5vU3dpcGluZ1NlbGVjdG9yOiBudWxsLFxuICAvLyBQYXNzaXZlIExpc3RlbmVyc1xuICBwYXNzaXZlTGlzdGVuZXJzOiB0cnVlLFxuICAvLyBOU1xuICBjb250YWluZXJNb2RpZmllckNsYXNzOiAnc3dpcGVyLWNvbnRhaW5lci0nLFxuICAvLyBORVdcbiAgc2xpZGVDbGFzczogJ3N3aXBlci1zbGlkZScsXG4gIHNsaWRlQmxhbmtDbGFzczogJ3N3aXBlci1zbGlkZS1pbnZpc2libGUtYmxhbmsnLFxuICBzbGlkZUFjdGl2ZUNsYXNzOiAnc3dpcGVyLXNsaWRlLWFjdGl2ZScsXG4gIHNsaWRlRHVwbGljYXRlQWN0aXZlQ2xhc3M6ICdzd2lwZXItc2xpZGUtZHVwbGljYXRlLWFjdGl2ZScsXG4gIHNsaWRlVmlzaWJsZUNsYXNzOiAnc3dpcGVyLXNsaWRlLXZpc2libGUnLFxuICBzbGlkZUR1cGxpY2F0ZUNsYXNzOiAnc3dpcGVyLXNsaWRlLWR1cGxpY2F0ZScsXG4gIHNsaWRlTmV4dENsYXNzOiAnc3dpcGVyLXNsaWRlLW5leHQnLFxuICBzbGlkZUR1cGxpY2F0ZU5leHRDbGFzczogJ3N3aXBlci1zbGlkZS1kdXBsaWNhdGUtbmV4dCcsXG4gIHNsaWRlUHJldkNsYXNzOiAnc3dpcGVyLXNsaWRlLXByZXYnLFxuICBzbGlkZUR1cGxpY2F0ZVByZXZDbGFzczogJ3N3aXBlci1zbGlkZS1kdXBsaWNhdGUtcHJldicsXG4gIHdyYXBwZXJDbGFzczogJ3N3aXBlci13cmFwcGVyJyxcbiAgLy8gQ2FsbGJhY2tzXG4gIHJ1bkNhbGxiYWNrc09uSW5pdDogdHJ1ZSxcbiAgLy8gSW50ZXJuYWxzXG4gIF9lbWl0Q2xhc3NlczogZmFsc2Vcbn07IiwiLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZXJzY29yZS1kYW5nbGUgKi9cbmV4cG9ydCBkZWZhdWx0IHtcbiAgb246IGZ1bmN0aW9uIG9uKGV2ZW50cywgaGFuZGxlciwgcHJpb3JpdHkpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgaWYgKHR5cGVvZiBoYW5kbGVyICE9PSAnZnVuY3Rpb24nKSByZXR1cm4gc2VsZjtcbiAgICB2YXIgbWV0aG9kID0gcHJpb3JpdHkgPyAndW5zaGlmdCcgOiAncHVzaCc7XG4gICAgZXZlbnRzLnNwbGl0KCcgJykuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmICghc2VsZi5ldmVudHNMaXN0ZW5lcnNbZXZlbnRdKSBzZWxmLmV2ZW50c0xpc3RlbmVyc1tldmVudF0gPSBbXTtcbiAgICAgIHNlbGYuZXZlbnRzTGlzdGVuZXJzW2V2ZW50XVttZXRob2RdKGhhbmRsZXIpO1xuICAgIH0pO1xuICAgIHJldHVybiBzZWxmO1xuICB9LFxuICBvbmNlOiBmdW5jdGlvbiBvbmNlKGV2ZW50cywgaGFuZGxlciwgcHJpb3JpdHkpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgaWYgKHR5cGVvZiBoYW5kbGVyICE9PSAnZnVuY3Rpb24nKSByZXR1cm4gc2VsZjtcblxuICAgIGZ1bmN0aW9uIG9uY2VIYW5kbGVyKCkge1xuICAgICAgc2VsZi5vZmYoZXZlbnRzLCBvbmNlSGFuZGxlcik7XG5cbiAgICAgIGlmIChvbmNlSGFuZGxlci5fX2VtaXR0ZXJQcm94eSkge1xuICAgICAgICBkZWxldGUgb25jZUhhbmRsZXIuX19lbWl0dGVyUHJveHk7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgfVxuXG4gICAgICBoYW5kbGVyLmFwcGx5KHNlbGYsIGFyZ3MpO1xuICAgIH1cblxuICAgIG9uY2VIYW5kbGVyLl9fZW1pdHRlclByb3h5ID0gaGFuZGxlcjtcbiAgICByZXR1cm4gc2VsZi5vbihldmVudHMsIG9uY2VIYW5kbGVyLCBwcmlvcml0eSk7XG4gIH0sXG4gIG9uQW55OiBmdW5jdGlvbiBvbkFueShoYW5kbGVyLCBwcmlvcml0eSkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICBpZiAodHlwZW9mIGhhbmRsZXIgIT09ICdmdW5jdGlvbicpIHJldHVybiBzZWxmO1xuICAgIHZhciBtZXRob2QgPSBwcmlvcml0eSA/ICd1bnNoaWZ0JyA6ICdwdXNoJztcblxuICAgIGlmIChzZWxmLmV2ZW50c0FueUxpc3RlbmVycy5pbmRleE9mKGhhbmRsZXIpIDwgMCkge1xuICAgICAgc2VsZi5ldmVudHNBbnlMaXN0ZW5lcnNbbWV0aG9kXShoYW5kbGVyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2VsZjtcbiAgfSxcbiAgb2ZmQW55OiBmdW5jdGlvbiBvZmZBbnkoaGFuZGxlcikge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICBpZiAoIXNlbGYuZXZlbnRzQW55TGlzdGVuZXJzKSByZXR1cm4gc2VsZjtcbiAgICB2YXIgaW5kZXggPSBzZWxmLmV2ZW50c0FueUxpc3RlbmVycy5pbmRleE9mKGhhbmRsZXIpO1xuXG4gICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgIHNlbGYuZXZlbnRzQW55TGlzdGVuZXJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNlbGY7XG4gIH0sXG4gIG9mZjogZnVuY3Rpb24gb2ZmKGV2ZW50cywgaGFuZGxlcikge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICBpZiAoIXNlbGYuZXZlbnRzTGlzdGVuZXJzKSByZXR1cm4gc2VsZjtcbiAgICBldmVudHMuc3BsaXQoJyAnKS5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKHR5cGVvZiBoYW5kbGVyID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBzZWxmLmV2ZW50c0xpc3RlbmVyc1tldmVudF0gPSBbXTtcbiAgICAgIH0gZWxzZSBpZiAoc2VsZi5ldmVudHNMaXN0ZW5lcnNbZXZlbnRdKSB7XG4gICAgICAgIHNlbGYuZXZlbnRzTGlzdGVuZXJzW2V2ZW50XS5mb3JFYWNoKGZ1bmN0aW9uIChldmVudEhhbmRsZXIsIGluZGV4KSB7XG4gICAgICAgICAgaWYgKGV2ZW50SGFuZGxlciA9PT0gaGFuZGxlciB8fCBldmVudEhhbmRsZXIuX19lbWl0dGVyUHJveHkgJiYgZXZlbnRIYW5kbGVyLl9fZW1pdHRlclByb3h5ID09PSBoYW5kbGVyKSB7XG4gICAgICAgICAgICBzZWxmLmV2ZW50c0xpc3RlbmVyc1tldmVudF0uc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBzZWxmO1xuICB9LFxuICBlbWl0OiBmdW5jdGlvbiBlbWl0KCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICBpZiAoIXNlbGYuZXZlbnRzTGlzdGVuZXJzKSByZXR1cm4gc2VsZjtcbiAgICB2YXIgZXZlbnRzO1xuICAgIHZhciBkYXRhO1xuICAgIHZhciBjb250ZXh0O1xuXG4gICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICBhcmdzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBhcmdzWzBdID09PSAnc3RyaW5nJyB8fCBBcnJheS5pc0FycmF5KGFyZ3NbMF0pKSB7XG4gICAgICBldmVudHMgPSBhcmdzWzBdO1xuICAgICAgZGF0YSA9IGFyZ3Muc2xpY2UoMSwgYXJncy5sZW5ndGgpO1xuICAgICAgY29udGV4dCA9IHNlbGY7XG4gICAgfSBlbHNlIHtcbiAgICAgIGV2ZW50cyA9IGFyZ3NbMF0uZXZlbnRzO1xuICAgICAgZGF0YSA9IGFyZ3NbMF0uZGF0YTtcbiAgICAgIGNvbnRleHQgPSBhcmdzWzBdLmNvbnRleHQgfHwgc2VsZjtcbiAgICB9XG5cbiAgICBkYXRhLnVuc2hpZnQoY29udGV4dCk7XG4gICAgdmFyIGV2ZW50c0FycmF5ID0gQXJyYXkuaXNBcnJheShldmVudHMpID8gZXZlbnRzIDogZXZlbnRzLnNwbGl0KCcgJyk7XG4gICAgZXZlbnRzQXJyYXkuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmIChzZWxmLmV2ZW50c0FueUxpc3RlbmVycyAmJiBzZWxmLmV2ZW50c0FueUxpc3RlbmVycy5sZW5ndGgpIHtcbiAgICAgICAgc2VsZi5ldmVudHNBbnlMaXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnRIYW5kbGVyKSB7XG4gICAgICAgICAgZXZlbnRIYW5kbGVyLmFwcGx5KGNvbnRleHQsIFtldmVudF0uY29uY2F0KGRhdGEpKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChzZWxmLmV2ZW50c0xpc3RlbmVycyAmJiBzZWxmLmV2ZW50c0xpc3RlbmVyc1tldmVudF0pIHtcbiAgICAgICAgc2VsZi5ldmVudHNMaXN0ZW5lcnNbZXZlbnRdLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50SGFuZGxlcikge1xuICAgICAgICAgIGV2ZW50SGFuZGxlci5hcHBseShjb250ZXh0LCBkYXRhKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHNlbGY7XG4gIH1cbn07IiwiaW1wb3J0IHsgZ2V0RG9jdW1lbnQgfSBmcm9tICdzc3Itd2luZG93JztcbmltcG9ydCBvblRvdWNoU3RhcnQgZnJvbSAnLi9vblRvdWNoU3RhcnQnO1xuaW1wb3J0IG9uVG91Y2hNb3ZlIGZyb20gJy4vb25Ub3VjaE1vdmUnO1xuaW1wb3J0IG9uVG91Y2hFbmQgZnJvbSAnLi9vblRvdWNoRW5kJztcbmltcG9ydCBvblJlc2l6ZSBmcm9tICcuL29uUmVzaXplJztcbmltcG9ydCBvbkNsaWNrIGZyb20gJy4vb25DbGljayc7XG5pbXBvcnQgb25TY3JvbGwgZnJvbSAnLi9vblNjcm9sbCc7XG52YXIgZHVtbXlFdmVudEF0dGFjaGVkID0gZmFsc2U7XG5cbmZ1bmN0aW9uIGR1bW15RXZlbnRMaXN0ZW5lcigpIHt9XG5cbmZ1bmN0aW9uIGF0dGFjaEV2ZW50cygpIHtcbiAgdmFyIHN3aXBlciA9IHRoaXM7XG4gIHZhciBkb2N1bWVudCA9IGdldERvY3VtZW50KCk7XG4gIHZhciBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLFxuICAgICAgdG91Y2hFdmVudHMgPSBzd2lwZXIudG91Y2hFdmVudHMsXG4gICAgICBlbCA9IHN3aXBlci5lbCxcbiAgICAgIHdyYXBwZXJFbCA9IHN3aXBlci53cmFwcGVyRWwsXG4gICAgICBkZXZpY2UgPSBzd2lwZXIuZGV2aWNlLFxuICAgICAgc3VwcG9ydCA9IHN3aXBlci5zdXBwb3J0O1xuICBzd2lwZXIub25Ub3VjaFN0YXJ0ID0gb25Ub3VjaFN0YXJ0LmJpbmQoc3dpcGVyKTtcbiAgc3dpcGVyLm9uVG91Y2hNb3ZlID0gb25Ub3VjaE1vdmUuYmluZChzd2lwZXIpO1xuICBzd2lwZXIub25Ub3VjaEVuZCA9IG9uVG91Y2hFbmQuYmluZChzd2lwZXIpO1xuXG4gIGlmIChwYXJhbXMuY3NzTW9kZSkge1xuICAgIHN3aXBlci5vblNjcm9sbCA9IG9uU2Nyb2xsLmJpbmQoc3dpcGVyKTtcbiAgfVxuXG4gIHN3aXBlci5vbkNsaWNrID0gb25DbGljay5iaW5kKHN3aXBlcik7XG4gIHZhciBjYXB0dXJlID0gISFwYXJhbXMubmVzdGVkOyAvLyBUb3VjaCBFdmVudHNcblxuICBpZiAoIXN1cHBvcnQudG91Y2ggJiYgc3VwcG9ydC5wb2ludGVyRXZlbnRzKSB7XG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5zdGFydCwgc3dpcGVyLm9uVG91Y2hTdGFydCwgZmFsc2UpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMubW92ZSwgc3dpcGVyLm9uVG91Y2hNb3ZlLCBjYXB0dXJlKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLmVuZCwgc3dpcGVyLm9uVG91Y2hFbmQsIGZhbHNlKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoc3VwcG9ydC50b3VjaCkge1xuICAgICAgdmFyIHBhc3NpdmVMaXN0ZW5lciA9IHRvdWNoRXZlbnRzLnN0YXJ0ID09PSAndG91Y2hzdGFydCcgJiYgc3VwcG9ydC5wYXNzaXZlTGlzdGVuZXIgJiYgcGFyYW1zLnBhc3NpdmVMaXN0ZW5lcnMgPyB7XG4gICAgICAgIHBhc3NpdmU6IHRydWUsXG4gICAgICAgIGNhcHR1cmU6IGZhbHNlXG4gICAgICB9IDogZmFsc2U7XG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLnN0YXJ0LCBzd2lwZXIub25Ub3VjaFN0YXJ0LCBwYXNzaXZlTGlzdGVuZXIpO1xuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5tb3ZlLCBzd2lwZXIub25Ub3VjaE1vdmUsIHN1cHBvcnQucGFzc2l2ZUxpc3RlbmVyID8ge1xuICAgICAgICBwYXNzaXZlOiBmYWxzZSxcbiAgICAgICAgY2FwdHVyZTogY2FwdHVyZVxuICAgICAgfSA6IGNhcHR1cmUpO1xuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5lbmQsIHN3aXBlci5vblRvdWNoRW5kLCBwYXNzaXZlTGlzdGVuZXIpO1xuXG4gICAgICBpZiAodG91Y2hFdmVudHMuY2FuY2VsKSB7XG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuY2FuY2VsLCBzd2lwZXIub25Ub3VjaEVuZCwgcGFzc2l2ZUxpc3RlbmVyKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFkdW1teUV2ZW50QXR0YWNoZWQpIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGR1bW15RXZlbnRMaXN0ZW5lcik7XG4gICAgICAgIGR1bW15RXZlbnRBdHRhY2hlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHBhcmFtcy5zaW11bGF0ZVRvdWNoICYmICFkZXZpY2UuaW9zICYmICFkZXZpY2UuYW5kcm9pZCB8fCBwYXJhbXMuc2ltdWxhdGVUb3VjaCAmJiAhc3VwcG9ydC50b3VjaCAmJiBkZXZpY2UuaW9zKSB7XG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBzd2lwZXIub25Ub3VjaFN0YXJ0LCBmYWxzZSk7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBzd2lwZXIub25Ub3VjaE1vdmUsIGNhcHR1cmUpO1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHN3aXBlci5vblRvdWNoRW5kLCBmYWxzZSk7XG4gICAgfVxuICB9IC8vIFByZXZlbnQgTGlua3MgQ2xpY2tzXG5cblxuICBpZiAocGFyYW1zLnByZXZlbnRDbGlja3MgfHwgcGFyYW1zLnByZXZlbnRDbGlja3NQcm9wYWdhdGlvbikge1xuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3dpcGVyLm9uQ2xpY2ssIHRydWUpO1xuICB9XG5cbiAgaWYgKHBhcmFtcy5jc3NNb2RlKSB7XG4gICAgd3JhcHBlckVsLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHN3aXBlci5vblNjcm9sbCk7XG4gIH0gLy8gUmVzaXplIGhhbmRsZXJcblxuXG4gIGlmIChwYXJhbXMudXBkYXRlT25XaW5kb3dSZXNpemUpIHtcbiAgICBzd2lwZXIub24oZGV2aWNlLmlvcyB8fCBkZXZpY2UuYW5kcm9pZCA/ICdyZXNpemUgb3JpZW50YXRpb25jaGFuZ2Ugb2JzZXJ2ZXJVcGRhdGUnIDogJ3Jlc2l6ZSBvYnNlcnZlclVwZGF0ZScsIG9uUmVzaXplLCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzd2lwZXIub24oJ29ic2VydmVyVXBkYXRlJywgb25SZXNpemUsIHRydWUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRldGFjaEV2ZW50cygpIHtcbiAgdmFyIHN3aXBlciA9IHRoaXM7XG4gIHZhciBkb2N1bWVudCA9IGdldERvY3VtZW50KCk7XG4gIHZhciBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLFxuICAgICAgdG91Y2hFdmVudHMgPSBzd2lwZXIudG91Y2hFdmVudHMsXG4gICAgICBlbCA9IHN3aXBlci5lbCxcbiAgICAgIHdyYXBwZXJFbCA9IHN3aXBlci53cmFwcGVyRWwsXG4gICAgICBkZXZpY2UgPSBzd2lwZXIuZGV2aWNlLFxuICAgICAgc3VwcG9ydCA9IHN3aXBlci5zdXBwb3J0O1xuICB2YXIgY2FwdHVyZSA9ICEhcGFyYW1zLm5lc3RlZDsgLy8gVG91Y2ggRXZlbnRzXG5cbiAgaWYgKCFzdXBwb3J0LnRvdWNoICYmIHN1cHBvcnQucG9pbnRlckV2ZW50cykge1xuICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuc3RhcnQsIHN3aXBlci5vblRvdWNoU3RhcnQsIGZhbHNlKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLm1vdmUsIHN3aXBlci5vblRvdWNoTW92ZSwgY2FwdHVyZSk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5lbmQsIHN3aXBlci5vblRvdWNoRW5kLCBmYWxzZSk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKHN1cHBvcnQudG91Y2gpIHtcbiAgICAgIHZhciBwYXNzaXZlTGlzdGVuZXIgPSB0b3VjaEV2ZW50cy5zdGFydCA9PT0gJ29uVG91Y2hTdGFydCcgJiYgc3VwcG9ydC5wYXNzaXZlTGlzdGVuZXIgJiYgcGFyYW1zLnBhc3NpdmVMaXN0ZW5lcnMgPyB7XG4gICAgICAgIHBhc3NpdmU6IHRydWUsXG4gICAgICAgIGNhcHR1cmU6IGZhbHNlXG4gICAgICB9IDogZmFsc2U7XG4gICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLnN0YXJ0LCBzd2lwZXIub25Ub3VjaFN0YXJ0LCBwYXNzaXZlTGlzdGVuZXIpO1xuICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5tb3ZlLCBzd2lwZXIub25Ub3VjaE1vdmUsIGNhcHR1cmUpO1xuICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5lbmQsIHN3aXBlci5vblRvdWNoRW5kLCBwYXNzaXZlTGlzdGVuZXIpO1xuXG4gICAgICBpZiAodG91Y2hFdmVudHMuY2FuY2VsKSB7XG4gICAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuY2FuY2VsLCBzd2lwZXIub25Ub3VjaEVuZCwgcGFzc2l2ZUxpc3RlbmVyKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocGFyYW1zLnNpbXVsYXRlVG91Y2ggJiYgIWRldmljZS5pb3MgJiYgIWRldmljZS5hbmRyb2lkIHx8IHBhcmFtcy5zaW11bGF0ZVRvdWNoICYmICFzdXBwb3J0LnRvdWNoICYmIGRldmljZS5pb3MpIHtcbiAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHN3aXBlci5vblRvdWNoU3RhcnQsIGZhbHNlKTtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHN3aXBlci5vblRvdWNoTW92ZSwgY2FwdHVyZSk7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgc3dpcGVyLm9uVG91Y2hFbmQsIGZhbHNlKTtcbiAgICB9XG4gIH0gLy8gUHJldmVudCBMaW5rcyBDbGlja3NcblxuXG4gIGlmIChwYXJhbXMucHJldmVudENsaWNrcyB8fCBwYXJhbXMucHJldmVudENsaWNrc1Byb3BhZ2F0aW9uKSB7XG4gICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzd2lwZXIub25DbGljaywgdHJ1ZSk7XG4gIH1cblxuICBpZiAocGFyYW1zLmNzc01vZGUpIHtcbiAgICB3cmFwcGVyRWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgc3dpcGVyLm9uU2Nyb2xsKTtcbiAgfSAvLyBSZXNpemUgaGFuZGxlclxuXG5cbiAgc3dpcGVyLm9mZihkZXZpY2UuaW9zIHx8IGRldmljZS5hbmRyb2lkID8gJ3Jlc2l6ZSBvcmllbnRhdGlvbmNoYW5nZSBvYnNlcnZlclVwZGF0ZScgOiAncmVzaXplIG9ic2VydmVyVXBkYXRlJywgb25SZXNpemUpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGF0dGFjaEV2ZW50czogYXR0YWNoRXZlbnRzLFxuICBkZXRhY2hFdmVudHM6IGRldGFjaEV2ZW50c1xufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBvbkNsaWNrKGUpIHtcbiAgdmFyIHN3aXBlciA9IHRoaXM7XG4gIGlmICghc3dpcGVyLmVuYWJsZWQpIHJldHVybjtcblxuICBpZiAoIXN3aXBlci5hbGxvd0NsaWNrKSB7XG4gICAgaWYgKHN3aXBlci5wYXJhbXMucHJldmVudENsaWNrcykgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgaWYgKHN3aXBlci5wYXJhbXMucHJldmVudENsaWNrc1Byb3BhZ2F0aW9uICYmIHN3aXBlci5hbmltYXRpbmcpIHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgIH1cbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG9uUmVzaXplKCkge1xuICB2YXIgc3dpcGVyID0gdGhpcztcbiAgdmFyIHBhcmFtcyA9IHN3aXBlci5wYXJhbXMsXG4gICAgICBlbCA9IHN3aXBlci5lbDtcbiAgaWYgKGVsICYmIGVsLm9mZnNldFdpZHRoID09PSAwKSByZXR1cm47IC8vIEJyZWFrcG9pbnRzXG5cbiAgaWYgKHBhcmFtcy5icmVha3BvaW50cykge1xuICAgIHN3aXBlci5zZXRCcmVha3BvaW50KCk7XG4gIH0gLy8gU2F2ZSBsb2Nrc1xuXG5cbiAgdmFyIGFsbG93U2xpZGVOZXh0ID0gc3dpcGVyLmFsbG93U2xpZGVOZXh0LFxuICAgICAgYWxsb3dTbGlkZVByZXYgPSBzd2lwZXIuYWxsb3dTbGlkZVByZXYsXG4gICAgICBzbmFwR3JpZCA9IHN3aXBlci5zbmFwR3JpZDsgLy8gRGlzYWJsZSBsb2NrcyBvbiByZXNpemVcblxuICBzd2lwZXIuYWxsb3dTbGlkZU5leHQgPSB0cnVlO1xuICBzd2lwZXIuYWxsb3dTbGlkZVByZXYgPSB0cnVlO1xuICBzd2lwZXIudXBkYXRlU2l6ZSgpO1xuICBzd2lwZXIudXBkYXRlU2xpZGVzKCk7XG4gIHN3aXBlci51cGRhdGVTbGlkZXNDbGFzc2VzKCk7XG5cbiAgaWYgKChwYXJhbXMuc2xpZGVzUGVyVmlldyA9PT0gJ2F1dG8nIHx8IHBhcmFtcy5zbGlkZXNQZXJWaWV3ID4gMSkgJiYgc3dpcGVyLmlzRW5kICYmICFzd2lwZXIuaXNCZWdpbm5pbmcgJiYgIXN3aXBlci5wYXJhbXMuY2VudGVyZWRTbGlkZXMpIHtcbiAgICBzd2lwZXIuc2xpZGVUbyhzd2lwZXIuc2xpZGVzLmxlbmd0aCAtIDEsIDAsIGZhbHNlLCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzd2lwZXIuc2xpZGVUbyhzd2lwZXIuYWN0aXZlSW5kZXgsIDAsIGZhbHNlLCB0cnVlKTtcbiAgfVxuXG4gIGlmIChzd2lwZXIuYXV0b3BsYXkgJiYgc3dpcGVyLmF1dG9wbGF5LnJ1bm5pbmcgJiYgc3dpcGVyLmF1dG9wbGF5LnBhdXNlZCkge1xuICAgIHN3aXBlci5hdXRvcGxheS5ydW4oKTtcbiAgfSAvLyBSZXR1cm4gbG9ja3MgYWZ0ZXIgcmVzaXplXG5cblxuICBzd2lwZXIuYWxsb3dTbGlkZVByZXYgPSBhbGxvd1NsaWRlUHJldjtcbiAgc3dpcGVyLmFsbG93U2xpZGVOZXh0ID0gYWxsb3dTbGlkZU5leHQ7XG5cbiAgaWYgKHN3aXBlci5wYXJhbXMud2F0Y2hPdmVyZmxvdyAmJiBzbmFwR3JpZCAhPT0gc3dpcGVyLnNuYXBHcmlkKSB7XG4gICAgc3dpcGVyLmNoZWNrT3ZlcmZsb3coKTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG9uU2Nyb2xsKCkge1xuICB2YXIgc3dpcGVyID0gdGhpcztcbiAgdmFyIHdyYXBwZXJFbCA9IHN3aXBlci53cmFwcGVyRWwsXG4gICAgICBydGxUcmFuc2xhdGUgPSBzd2lwZXIucnRsVHJhbnNsYXRlLFxuICAgICAgZW5hYmxlZCA9IHN3aXBlci5lbmFibGVkO1xuICBpZiAoIWVuYWJsZWQpIHJldHVybjtcbiAgc3dpcGVyLnByZXZpb3VzVHJhbnNsYXRlID0gc3dpcGVyLnRyYW5zbGF0ZTtcblxuICBpZiAoc3dpcGVyLmlzSG9yaXpvbnRhbCgpKSB7XG4gICAgaWYgKHJ0bFRyYW5zbGF0ZSkge1xuICAgICAgc3dpcGVyLnRyYW5zbGF0ZSA9IHdyYXBwZXJFbC5zY3JvbGxXaWR0aCAtIHdyYXBwZXJFbC5vZmZzZXRXaWR0aCAtIHdyYXBwZXJFbC5zY3JvbGxMZWZ0O1xuICAgIH0gZWxzZSB7XG4gICAgICBzd2lwZXIudHJhbnNsYXRlID0gLXdyYXBwZXJFbC5zY3JvbGxMZWZ0O1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBzd2lwZXIudHJhbnNsYXRlID0gLXdyYXBwZXJFbC5zY3JvbGxUb3A7XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG5cblxuICBpZiAoc3dpcGVyLnRyYW5zbGF0ZSA9PT0gLTApIHN3aXBlci50cmFuc2xhdGUgPSAwO1xuICBzd2lwZXIudXBkYXRlQWN0aXZlSW5kZXgoKTtcbiAgc3dpcGVyLnVwZGF0ZVNsaWRlc0NsYXNzZXMoKTtcbiAgdmFyIG5ld1Byb2dyZXNzO1xuICB2YXIgdHJhbnNsYXRlc0RpZmYgPSBzd2lwZXIubWF4VHJhbnNsYXRlKCkgLSBzd2lwZXIubWluVHJhbnNsYXRlKCk7XG5cbiAgaWYgKHRyYW5zbGF0ZXNEaWZmID09PSAwKSB7XG4gICAgbmV3UHJvZ3Jlc3MgPSAwO1xuICB9IGVsc2Uge1xuICAgIG5ld1Byb2dyZXNzID0gKHN3aXBlci50cmFuc2xhdGUgLSBzd2lwZXIubWluVHJhbnNsYXRlKCkpIC8gdHJhbnNsYXRlc0RpZmY7XG4gIH1cblxuICBpZiAobmV3UHJvZ3Jlc3MgIT09IHN3aXBlci5wcm9ncmVzcykge1xuICAgIHN3aXBlci51cGRhdGVQcm9ncmVzcyhydGxUcmFuc2xhdGUgPyAtc3dpcGVyLnRyYW5zbGF0ZSA6IHN3aXBlci50cmFuc2xhdGUpO1xuICB9XG5cbiAgc3dpcGVyLmVtaXQoJ3NldFRyYW5zbGF0ZScsIHN3aXBlci50cmFuc2xhdGUsIGZhbHNlKTtcbn0iLCJpbXBvcnQgeyBub3csIG5leHRUaWNrIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvdXRpbHMnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gb25Ub3VjaEVuZChldmVudCkge1xuICB2YXIgc3dpcGVyID0gdGhpcztcbiAgdmFyIGRhdGEgPSBzd2lwZXIudG91Y2hFdmVudHNEYXRhO1xuICB2YXIgcGFyYW1zID0gc3dpcGVyLnBhcmFtcyxcbiAgICAgIHRvdWNoZXMgPSBzd2lwZXIudG91Y2hlcyxcbiAgICAgIHJ0bCA9IHN3aXBlci5ydGxUcmFuc2xhdGUsXG4gICAgICAkd3JhcHBlckVsID0gc3dpcGVyLiR3cmFwcGVyRWwsXG4gICAgICBzbGlkZXNHcmlkID0gc3dpcGVyLnNsaWRlc0dyaWQsXG4gICAgICBzbmFwR3JpZCA9IHN3aXBlci5zbmFwR3JpZCxcbiAgICAgIGVuYWJsZWQgPSBzd2lwZXIuZW5hYmxlZDtcbiAgaWYgKCFlbmFibGVkKSByZXR1cm47XG4gIHZhciBlID0gZXZlbnQ7XG4gIGlmIChlLm9yaWdpbmFsRXZlbnQpIGUgPSBlLm9yaWdpbmFsRXZlbnQ7XG5cbiAgaWYgKGRhdGEuYWxsb3dUb3VjaENhbGxiYWNrcykge1xuICAgIHN3aXBlci5lbWl0KCd0b3VjaEVuZCcsIGUpO1xuICB9XG5cbiAgZGF0YS5hbGxvd1RvdWNoQ2FsbGJhY2tzID0gZmFsc2U7XG5cbiAgaWYgKCFkYXRhLmlzVG91Y2hlZCkge1xuICAgIGlmIChkYXRhLmlzTW92ZWQgJiYgcGFyYW1zLmdyYWJDdXJzb3IpIHtcbiAgICAgIHN3aXBlci5zZXRHcmFiQ3Vyc29yKGZhbHNlKTtcbiAgICB9XG5cbiAgICBkYXRhLmlzTW92ZWQgPSBmYWxzZTtcbiAgICBkYXRhLnN0YXJ0TW92aW5nID0gZmFsc2U7XG4gICAgcmV0dXJuO1xuICB9IC8vIFJldHVybiBHcmFiIEN1cnNvclxuXG5cbiAgaWYgKHBhcmFtcy5ncmFiQ3Vyc29yICYmIGRhdGEuaXNNb3ZlZCAmJiBkYXRhLmlzVG91Y2hlZCAmJiAoc3dpcGVyLmFsbG93U2xpZGVOZXh0ID09PSB0cnVlIHx8IHN3aXBlci5hbGxvd1NsaWRlUHJldiA9PT0gdHJ1ZSkpIHtcbiAgICBzd2lwZXIuc2V0R3JhYkN1cnNvcihmYWxzZSk7XG4gIH0gLy8gVGltZSBkaWZmXG5cblxuICB2YXIgdG91Y2hFbmRUaW1lID0gbm93KCk7XG4gIHZhciB0aW1lRGlmZiA9IHRvdWNoRW5kVGltZSAtIGRhdGEudG91Y2hTdGFydFRpbWU7IC8vIFRhcCwgZG91YmxlVGFwLCBDbGlja1xuXG4gIGlmIChzd2lwZXIuYWxsb3dDbGljaykge1xuICAgIHN3aXBlci51cGRhdGVDbGlja2VkU2xpZGUoZSk7XG4gICAgc3dpcGVyLmVtaXQoJ3RhcCBjbGljaycsIGUpO1xuXG4gICAgaWYgKHRpbWVEaWZmIDwgMzAwICYmIHRvdWNoRW5kVGltZSAtIGRhdGEubGFzdENsaWNrVGltZSA8IDMwMCkge1xuICAgICAgc3dpcGVyLmVtaXQoJ2RvdWJsZVRhcCBkb3VibGVDbGljaycsIGUpO1xuICAgIH1cbiAgfVxuXG4gIGRhdGEubGFzdENsaWNrVGltZSA9IG5vdygpO1xuICBuZXh0VGljayhmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFzd2lwZXIuZGVzdHJveWVkKSBzd2lwZXIuYWxsb3dDbGljayA9IHRydWU7XG4gIH0pO1xuXG4gIGlmICghZGF0YS5pc1RvdWNoZWQgfHwgIWRhdGEuaXNNb3ZlZCB8fCAhc3dpcGVyLnN3aXBlRGlyZWN0aW9uIHx8IHRvdWNoZXMuZGlmZiA9PT0gMCB8fCBkYXRhLmN1cnJlbnRUcmFuc2xhdGUgPT09IGRhdGEuc3RhcnRUcmFuc2xhdGUpIHtcbiAgICBkYXRhLmlzVG91Y2hlZCA9IGZhbHNlO1xuICAgIGRhdGEuaXNNb3ZlZCA9IGZhbHNlO1xuICAgIGRhdGEuc3RhcnRNb3ZpbmcgPSBmYWxzZTtcbiAgICByZXR1cm47XG4gIH1cblxuICBkYXRhLmlzVG91Y2hlZCA9IGZhbHNlO1xuICBkYXRhLmlzTW92ZWQgPSBmYWxzZTtcbiAgZGF0YS5zdGFydE1vdmluZyA9IGZhbHNlO1xuICB2YXIgY3VycmVudFBvcztcblxuICBpZiAocGFyYW1zLmZvbGxvd0Zpbmdlcikge1xuICAgIGN1cnJlbnRQb3MgPSBydGwgPyBzd2lwZXIudHJhbnNsYXRlIDogLXN3aXBlci50cmFuc2xhdGU7XG4gIH0gZWxzZSB7XG4gICAgY3VycmVudFBvcyA9IC1kYXRhLmN1cnJlbnRUcmFuc2xhdGU7XG4gIH1cblxuICBpZiAocGFyYW1zLmNzc01vZGUpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAocGFyYW1zLmZyZWVNb2RlKSB7XG4gICAgaWYgKGN1cnJlbnRQb3MgPCAtc3dpcGVyLm1pblRyYW5zbGF0ZSgpKSB7XG4gICAgICBzd2lwZXIuc2xpZGVUbyhzd2lwZXIuYWN0aXZlSW5kZXgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChjdXJyZW50UG9zID4gLXN3aXBlci5tYXhUcmFuc2xhdGUoKSkge1xuICAgICAgaWYgKHN3aXBlci5zbGlkZXMubGVuZ3RoIDwgc25hcEdyaWQubGVuZ3RoKSB7XG4gICAgICAgIHN3aXBlci5zbGlkZVRvKHNuYXBHcmlkLmxlbmd0aCAtIDEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3dpcGVyLnNsaWRlVG8oc3dpcGVyLnNsaWRlcy5sZW5ndGggLSAxKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChwYXJhbXMuZnJlZU1vZGVNb21lbnR1bSkge1xuICAgICAgaWYgKGRhdGEudmVsb2NpdGllcy5sZW5ndGggPiAxKSB7XG4gICAgICAgIHZhciBsYXN0TW92ZUV2ZW50ID0gZGF0YS52ZWxvY2l0aWVzLnBvcCgpO1xuICAgICAgICB2YXIgdmVsb2NpdHlFdmVudCA9IGRhdGEudmVsb2NpdGllcy5wb3AoKTtcbiAgICAgICAgdmFyIGRpc3RhbmNlID0gbGFzdE1vdmVFdmVudC5wb3NpdGlvbiAtIHZlbG9jaXR5RXZlbnQucG9zaXRpb247XG4gICAgICAgIHZhciB0aW1lID0gbGFzdE1vdmVFdmVudC50aW1lIC0gdmVsb2NpdHlFdmVudC50aW1lO1xuICAgICAgICBzd2lwZXIudmVsb2NpdHkgPSBkaXN0YW5jZSAvIHRpbWU7XG4gICAgICAgIHN3aXBlci52ZWxvY2l0eSAvPSAyO1xuXG4gICAgICAgIGlmIChNYXRoLmFicyhzd2lwZXIudmVsb2NpdHkpIDwgcGFyYW1zLmZyZWVNb2RlTWluaW11bVZlbG9jaXR5KSB7XG4gICAgICAgICAgc3dpcGVyLnZlbG9jaXR5ID0gMDtcbiAgICAgICAgfSAvLyB0aGlzIGltcGxpZXMgdGhhdCB0aGUgdXNlciBzdG9wcGVkIG1vdmluZyBhIGZpbmdlciB0aGVuIHJlbGVhc2VkLlxuICAgICAgICAvLyBUaGVyZSB3b3VsZCBiZSBubyBldmVudHMgd2l0aCBkaXN0YW5jZSB6ZXJvLCBzbyB0aGUgbGFzdCBldmVudCBpcyBzdGFsZS5cblxuXG4gICAgICAgIGlmICh0aW1lID4gMTUwIHx8IG5vdygpIC0gbGFzdE1vdmVFdmVudC50aW1lID4gMzAwKSB7XG4gICAgICAgICAgc3dpcGVyLnZlbG9jaXR5ID0gMDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3dpcGVyLnZlbG9jaXR5ID0gMDtcbiAgICAgIH1cblxuICAgICAgc3dpcGVyLnZlbG9jaXR5ICo9IHBhcmFtcy5mcmVlTW9kZU1vbWVudHVtVmVsb2NpdHlSYXRpbztcbiAgICAgIGRhdGEudmVsb2NpdGllcy5sZW5ndGggPSAwO1xuICAgICAgdmFyIG1vbWVudHVtRHVyYXRpb24gPSAxMDAwICogcGFyYW1zLmZyZWVNb2RlTW9tZW50dW1SYXRpbztcbiAgICAgIHZhciBtb21lbnR1bURpc3RhbmNlID0gc3dpcGVyLnZlbG9jaXR5ICogbW9tZW50dW1EdXJhdGlvbjtcbiAgICAgIHZhciBuZXdQb3NpdGlvbiA9IHN3aXBlci50cmFuc2xhdGUgKyBtb21lbnR1bURpc3RhbmNlO1xuICAgICAgaWYgKHJ0bCkgbmV3UG9zaXRpb24gPSAtbmV3UG9zaXRpb247XG4gICAgICB2YXIgZG9Cb3VuY2UgPSBmYWxzZTtcbiAgICAgIHZhciBhZnRlckJvdW5jZVBvc2l0aW9uO1xuICAgICAgdmFyIGJvdW5jZUFtb3VudCA9IE1hdGguYWJzKHN3aXBlci52ZWxvY2l0eSkgKiAyMCAqIHBhcmFtcy5mcmVlTW9kZU1vbWVudHVtQm91bmNlUmF0aW87XG4gICAgICB2YXIgbmVlZHNMb29wRml4O1xuXG4gICAgICBpZiAobmV3UG9zaXRpb24gPCBzd2lwZXIubWF4VHJhbnNsYXRlKCkpIHtcbiAgICAgICAgaWYgKHBhcmFtcy5mcmVlTW9kZU1vbWVudHVtQm91bmNlKSB7XG4gICAgICAgICAgaWYgKG5ld1Bvc2l0aW9uICsgc3dpcGVyLm1heFRyYW5zbGF0ZSgpIDwgLWJvdW5jZUFtb3VudCkge1xuICAgICAgICAgICAgbmV3UG9zaXRpb24gPSBzd2lwZXIubWF4VHJhbnNsYXRlKCkgLSBib3VuY2VBbW91bnQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYWZ0ZXJCb3VuY2VQb3NpdGlvbiA9IHN3aXBlci5tYXhUcmFuc2xhdGUoKTtcbiAgICAgICAgICBkb0JvdW5jZSA9IHRydWU7XG4gICAgICAgICAgZGF0YS5hbGxvd01vbWVudHVtQm91bmNlID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXdQb3NpdGlvbiA9IHN3aXBlci5tYXhUcmFuc2xhdGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwYXJhbXMubG9vcCAmJiBwYXJhbXMuY2VudGVyZWRTbGlkZXMpIG5lZWRzTG9vcEZpeCA9IHRydWU7XG4gICAgICB9IGVsc2UgaWYgKG5ld1Bvc2l0aW9uID4gc3dpcGVyLm1pblRyYW5zbGF0ZSgpKSB7XG4gICAgICAgIGlmIChwYXJhbXMuZnJlZU1vZGVNb21lbnR1bUJvdW5jZSkge1xuICAgICAgICAgIGlmIChuZXdQb3NpdGlvbiAtIHN3aXBlci5taW5UcmFuc2xhdGUoKSA+IGJvdW5jZUFtb3VudCkge1xuICAgICAgICAgICAgbmV3UG9zaXRpb24gPSBzd2lwZXIubWluVHJhbnNsYXRlKCkgKyBib3VuY2VBbW91bnQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYWZ0ZXJCb3VuY2VQb3NpdGlvbiA9IHN3aXBlci5taW5UcmFuc2xhdGUoKTtcbiAgICAgICAgICBkb0JvdW5jZSA9IHRydWU7XG4gICAgICAgICAgZGF0YS5hbGxvd01vbWVudHVtQm91bmNlID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXdQb3NpdGlvbiA9IHN3aXBlci5taW5UcmFuc2xhdGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwYXJhbXMubG9vcCAmJiBwYXJhbXMuY2VudGVyZWRTbGlkZXMpIG5lZWRzTG9vcEZpeCA9IHRydWU7XG4gICAgICB9IGVsc2UgaWYgKHBhcmFtcy5mcmVlTW9kZVN0aWNreSkge1xuICAgICAgICB2YXIgbmV4dFNsaWRlO1xuXG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgc25hcEdyaWQubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgICAgICBpZiAoc25hcEdyaWRbal0gPiAtbmV3UG9zaXRpb24pIHtcbiAgICAgICAgICAgIG5leHRTbGlkZSA9IGo7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoTWF0aC5hYnMoc25hcEdyaWRbbmV4dFNsaWRlXSAtIG5ld1Bvc2l0aW9uKSA8IE1hdGguYWJzKHNuYXBHcmlkW25leHRTbGlkZSAtIDFdIC0gbmV3UG9zaXRpb24pIHx8IHN3aXBlci5zd2lwZURpcmVjdGlvbiA9PT0gJ25leHQnKSB7XG4gICAgICAgICAgbmV3UG9zaXRpb24gPSBzbmFwR3JpZFtuZXh0U2xpZGVdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5ld1Bvc2l0aW9uID0gc25hcEdyaWRbbmV4dFNsaWRlIC0gMV07XG4gICAgICAgIH1cblxuICAgICAgICBuZXdQb3NpdGlvbiA9IC1uZXdQb3NpdGlvbjtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRzTG9vcEZpeCkge1xuICAgICAgICBzd2lwZXIub25jZSgndHJhbnNpdGlvbkVuZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBzd2lwZXIubG9vcEZpeCgpO1xuICAgICAgICB9KTtcbiAgICAgIH0gLy8gRml4IGR1cmF0aW9uXG5cblxuICAgICAgaWYgKHN3aXBlci52ZWxvY2l0eSAhPT0gMCkge1xuICAgICAgICBpZiAocnRsKSB7XG4gICAgICAgICAgbW9tZW50dW1EdXJhdGlvbiA9IE1hdGguYWJzKCgtbmV3UG9zaXRpb24gLSBzd2lwZXIudHJhbnNsYXRlKSAvIHN3aXBlci52ZWxvY2l0eSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbW9tZW50dW1EdXJhdGlvbiA9IE1hdGguYWJzKChuZXdQb3NpdGlvbiAtIHN3aXBlci50cmFuc2xhdGUpIC8gc3dpcGVyLnZlbG9jaXR5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwYXJhbXMuZnJlZU1vZGVTdGlja3kpIHtcbiAgICAgICAgICAvLyBJZiBmcmVlTW9kZVN0aWNreSBpcyBhY3RpdmUgYW5kIHRoZSB1c2VyIGVuZHMgYSBzd2lwZSB3aXRoIGEgc2xvdy12ZWxvY2l0eVxuICAgICAgICAgIC8vIGV2ZW50LCB0aGVuIGR1cmF0aW9ucyBjYW4gYmUgMjArIHNlY29uZHMgdG8gc2xpZGUgb25lIChvciB6ZXJvISkgc2xpZGVzLlxuICAgICAgICAgIC8vIEl0J3MgZWFzeSB0byBzZWUgdGhpcyB3aGVuIHNpbXVsYXRpbmcgdG91Y2ggd2l0aCBtb3VzZSBldmVudHMuIFRvIGZpeCB0aGlzLFxuICAgICAgICAgIC8vIGxpbWl0IHNpbmdsZS1zbGlkZSBzd2lwZXMgdG8gdGhlIGRlZmF1bHQgc2xpZGUgZHVyYXRpb24uIFRoaXMgYWxzbyBoYXMgdGhlXG4gICAgICAgICAgLy8gbmljZSBzaWRlIGVmZmVjdCBvZiBtYXRjaGluZyBzbGlkZSBzcGVlZCBpZiB0aGUgdXNlciBzdG9wcGVkIG1vdmluZyBiZWZvcmVcbiAgICAgICAgICAvLyBsaWZ0aW5nIGZpbmdlciBvciBtb3VzZSB2cy4gbW92aW5nIHNsb3dseSBiZWZvcmUgbGlmdGluZyB0aGUgZmluZ2VyL21vdXNlLlxuICAgICAgICAgIC8vIEZvciBmYXN0ZXIgc3dpcGVzLCBhbHNvIGFwcGx5IGxpbWl0cyAoYWxiZWl0IGhpZ2hlciBvbmVzKS5cbiAgICAgICAgICB2YXIgbW92ZURpc3RhbmNlID0gTWF0aC5hYnMoKHJ0bCA/IC1uZXdQb3NpdGlvbiA6IG5ld1Bvc2l0aW9uKSAtIHN3aXBlci50cmFuc2xhdGUpO1xuICAgICAgICAgIHZhciBjdXJyZW50U2xpZGVTaXplID0gc3dpcGVyLnNsaWRlc1NpemVzR3JpZFtzd2lwZXIuYWN0aXZlSW5kZXhdO1xuXG4gICAgICAgICAgaWYgKG1vdmVEaXN0YW5jZSA8IGN1cnJlbnRTbGlkZVNpemUpIHtcbiAgICAgICAgICAgIG1vbWVudHVtRHVyYXRpb24gPSBwYXJhbXMuc3BlZWQ7XG4gICAgICAgICAgfSBlbHNlIGlmIChtb3ZlRGlzdGFuY2UgPCAyICogY3VycmVudFNsaWRlU2l6ZSkge1xuICAgICAgICAgICAgbW9tZW50dW1EdXJhdGlvbiA9IHBhcmFtcy5zcGVlZCAqIDEuNTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9tZW50dW1EdXJhdGlvbiA9IHBhcmFtcy5zcGVlZCAqIDIuNTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAocGFyYW1zLmZyZWVNb2RlU3RpY2t5KSB7XG4gICAgICAgIHN3aXBlci5zbGlkZVRvQ2xvc2VzdCgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChwYXJhbXMuZnJlZU1vZGVNb21lbnR1bUJvdW5jZSAmJiBkb0JvdW5jZSkge1xuICAgICAgICBzd2lwZXIudXBkYXRlUHJvZ3Jlc3MoYWZ0ZXJCb3VuY2VQb3NpdGlvbik7XG4gICAgICAgIHN3aXBlci5zZXRUcmFuc2l0aW9uKG1vbWVudHVtRHVyYXRpb24pO1xuICAgICAgICBzd2lwZXIuc2V0VHJhbnNsYXRlKG5ld1Bvc2l0aW9uKTtcbiAgICAgICAgc3dpcGVyLnRyYW5zaXRpb25TdGFydCh0cnVlLCBzd2lwZXIuc3dpcGVEaXJlY3Rpb24pO1xuICAgICAgICBzd2lwZXIuYW5pbWF0aW5nID0gdHJ1ZTtcbiAgICAgICAgJHdyYXBwZXJFbC50cmFuc2l0aW9uRW5kKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAoIXN3aXBlciB8fCBzd2lwZXIuZGVzdHJveWVkIHx8ICFkYXRhLmFsbG93TW9tZW50dW1Cb3VuY2UpIHJldHVybjtcbiAgICAgICAgICBzd2lwZXIuZW1pdCgnbW9tZW50dW1Cb3VuY2UnKTtcbiAgICAgICAgICBzd2lwZXIuc2V0VHJhbnNpdGlvbihwYXJhbXMuc3BlZWQpO1xuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc3dpcGVyLnNldFRyYW5zbGF0ZShhZnRlckJvdW5jZVBvc2l0aW9uKTtcbiAgICAgICAgICAgICR3cmFwcGVyRWwudHJhbnNpdGlvbkVuZChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIGlmICghc3dpcGVyIHx8IHN3aXBlci5kZXN0cm95ZWQpIHJldHVybjtcbiAgICAgICAgICAgICAgc3dpcGVyLnRyYW5zaXRpb25FbmQoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0sIDApO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAoc3dpcGVyLnZlbG9jaXR5KSB7XG4gICAgICAgIHN3aXBlci51cGRhdGVQcm9ncmVzcyhuZXdQb3NpdGlvbik7XG4gICAgICAgIHN3aXBlci5zZXRUcmFuc2l0aW9uKG1vbWVudHVtRHVyYXRpb24pO1xuICAgICAgICBzd2lwZXIuc2V0VHJhbnNsYXRlKG5ld1Bvc2l0aW9uKTtcbiAgICAgICAgc3dpcGVyLnRyYW5zaXRpb25TdGFydCh0cnVlLCBzd2lwZXIuc3dpcGVEaXJlY3Rpb24pO1xuXG4gICAgICAgIGlmICghc3dpcGVyLmFuaW1hdGluZykge1xuICAgICAgICAgIHN3aXBlci5hbmltYXRpbmcgPSB0cnVlO1xuICAgICAgICAgICR3cmFwcGVyRWwudHJhbnNpdGlvbkVuZChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoIXN3aXBlciB8fCBzd2lwZXIuZGVzdHJveWVkKSByZXR1cm47XG4gICAgICAgICAgICBzd2lwZXIudHJhbnNpdGlvbkVuZCgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzd2lwZXIuZW1pdCgnX2ZyZWVNb2RlTm9Nb21lbnR1bVJlbGVhc2UnKTtcbiAgICAgICAgc3dpcGVyLnVwZGF0ZVByb2dyZXNzKG5ld1Bvc2l0aW9uKTtcbiAgICAgIH1cblxuICAgICAgc3dpcGVyLnVwZGF0ZUFjdGl2ZUluZGV4KCk7XG4gICAgICBzd2lwZXIudXBkYXRlU2xpZGVzQ2xhc3NlcygpO1xuICAgIH0gZWxzZSBpZiAocGFyYW1zLmZyZWVNb2RlU3RpY2t5KSB7XG4gICAgICBzd2lwZXIuc2xpZGVUb0Nsb3Nlc3QoKTtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2UgaWYgKHBhcmFtcy5mcmVlTW9kZSkge1xuICAgICAgc3dpcGVyLmVtaXQoJ19mcmVlTW9kZU5vTW9tZW50dW1SZWxlYXNlJyk7XG4gICAgfVxuXG4gICAgaWYgKCFwYXJhbXMuZnJlZU1vZGVNb21lbnR1bSB8fCB0aW1lRGlmZiA+PSBwYXJhbXMubG9uZ1N3aXBlc01zKSB7XG4gICAgICBzd2lwZXIudXBkYXRlUHJvZ3Jlc3MoKTtcbiAgICAgIHN3aXBlci51cGRhdGVBY3RpdmVJbmRleCgpO1xuICAgICAgc3dpcGVyLnVwZGF0ZVNsaWRlc0NsYXNzZXMoKTtcbiAgICB9XG5cbiAgICByZXR1cm47XG4gIH0gLy8gRmluZCBjdXJyZW50IHNsaWRlXG5cblxuICB2YXIgc3RvcEluZGV4ID0gMDtcbiAgdmFyIGdyb3VwU2l6ZSA9IHN3aXBlci5zbGlkZXNTaXplc0dyaWRbMF07XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzbGlkZXNHcmlkLmxlbmd0aDsgaSArPSBpIDwgcGFyYW1zLnNsaWRlc1Blckdyb3VwU2tpcCA/IDEgOiBwYXJhbXMuc2xpZGVzUGVyR3JvdXApIHtcbiAgICB2YXIgX2luY3JlbWVudCA9IGkgPCBwYXJhbXMuc2xpZGVzUGVyR3JvdXBTa2lwIC0gMSA/IDEgOiBwYXJhbXMuc2xpZGVzUGVyR3JvdXA7XG5cbiAgICBpZiAodHlwZW9mIHNsaWRlc0dyaWRbaSArIF9pbmNyZW1lbnRdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgaWYgKGN1cnJlbnRQb3MgPj0gc2xpZGVzR3JpZFtpXSAmJiBjdXJyZW50UG9zIDwgc2xpZGVzR3JpZFtpICsgX2luY3JlbWVudF0pIHtcbiAgICAgICAgc3RvcEluZGV4ID0gaTtcbiAgICAgICAgZ3JvdXBTaXplID0gc2xpZGVzR3JpZFtpICsgX2luY3JlbWVudF0gLSBzbGlkZXNHcmlkW2ldO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoY3VycmVudFBvcyA+PSBzbGlkZXNHcmlkW2ldKSB7XG4gICAgICBzdG9wSW5kZXggPSBpO1xuICAgICAgZ3JvdXBTaXplID0gc2xpZGVzR3JpZFtzbGlkZXNHcmlkLmxlbmd0aCAtIDFdIC0gc2xpZGVzR3JpZFtzbGlkZXNHcmlkLmxlbmd0aCAtIDJdO1xuICAgIH1cbiAgfSAvLyBGaW5kIGN1cnJlbnQgc2xpZGUgc2l6ZVxuXG5cbiAgdmFyIHJhdGlvID0gKGN1cnJlbnRQb3MgLSBzbGlkZXNHcmlkW3N0b3BJbmRleF0pIC8gZ3JvdXBTaXplO1xuICB2YXIgaW5jcmVtZW50ID0gc3RvcEluZGV4IDwgcGFyYW1zLnNsaWRlc1Blckdyb3VwU2tpcCAtIDEgPyAxIDogcGFyYW1zLnNsaWRlc1Blckdyb3VwO1xuXG4gIGlmICh0aW1lRGlmZiA+IHBhcmFtcy5sb25nU3dpcGVzTXMpIHtcbiAgICAvLyBMb25nIHRvdWNoZXNcbiAgICBpZiAoIXBhcmFtcy5sb25nU3dpcGVzKSB7XG4gICAgICBzd2lwZXIuc2xpZGVUbyhzd2lwZXIuYWN0aXZlSW5kZXgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChzd2lwZXIuc3dpcGVEaXJlY3Rpb24gPT09ICduZXh0Jykge1xuICAgICAgaWYgKHJhdGlvID49IHBhcmFtcy5sb25nU3dpcGVzUmF0aW8pIHN3aXBlci5zbGlkZVRvKHN0b3BJbmRleCArIGluY3JlbWVudCk7ZWxzZSBzd2lwZXIuc2xpZGVUbyhzdG9wSW5kZXgpO1xuICAgIH1cblxuICAgIGlmIChzd2lwZXIuc3dpcGVEaXJlY3Rpb24gPT09ICdwcmV2Jykge1xuICAgICAgaWYgKHJhdGlvID4gMSAtIHBhcmFtcy5sb25nU3dpcGVzUmF0aW8pIHN3aXBlci5zbGlkZVRvKHN0b3BJbmRleCArIGluY3JlbWVudCk7ZWxzZSBzd2lwZXIuc2xpZGVUbyhzdG9wSW5kZXgpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBTaG9ydCBzd2lwZXNcbiAgICBpZiAoIXBhcmFtcy5zaG9ydFN3aXBlcykge1xuICAgICAgc3dpcGVyLnNsaWRlVG8oc3dpcGVyLmFjdGl2ZUluZGV4KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgaXNOYXZCdXR0b25UYXJnZXQgPSBzd2lwZXIubmF2aWdhdGlvbiAmJiAoZS50YXJnZXQgPT09IHN3aXBlci5uYXZpZ2F0aW9uLm5leHRFbCB8fCBlLnRhcmdldCA9PT0gc3dpcGVyLm5hdmlnYXRpb24ucHJldkVsKTtcblxuICAgIGlmICghaXNOYXZCdXR0b25UYXJnZXQpIHtcbiAgICAgIGlmIChzd2lwZXIuc3dpcGVEaXJlY3Rpb24gPT09ICduZXh0Jykge1xuICAgICAgICBzd2lwZXIuc2xpZGVUbyhzdG9wSW5kZXggKyBpbmNyZW1lbnQpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3dpcGVyLnN3aXBlRGlyZWN0aW9uID09PSAncHJldicpIHtcbiAgICAgICAgc3dpcGVyLnNsaWRlVG8oc3RvcEluZGV4KTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGUudGFyZ2V0ID09PSBzd2lwZXIubmF2aWdhdGlvbi5uZXh0RWwpIHtcbiAgICAgIHN3aXBlci5zbGlkZVRvKHN0b3BJbmRleCArIGluY3JlbWVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN3aXBlci5zbGlkZVRvKHN0b3BJbmRleCk7XG4gICAgfVxuICB9XG59IiwiaW1wb3J0IHsgZ2V0RG9jdW1lbnQgfSBmcm9tICdzc3Itd2luZG93JztcbmltcG9ydCAkIGZyb20gJy4uLy4uLy4uL3V0aWxzL2RvbSc7XG5pbXBvcnQgeyBleHRlbmQsIG5vdyB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL3V0aWxzJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG9uVG91Y2hNb3ZlKGV2ZW50KSB7XG4gIHZhciBkb2N1bWVudCA9IGdldERvY3VtZW50KCk7XG4gIHZhciBzd2lwZXIgPSB0aGlzO1xuICB2YXIgZGF0YSA9IHN3aXBlci50b3VjaEV2ZW50c0RhdGE7XG4gIHZhciBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLFxuICAgICAgdG91Y2hlcyA9IHN3aXBlci50b3VjaGVzLFxuICAgICAgcnRsID0gc3dpcGVyLnJ0bFRyYW5zbGF0ZSxcbiAgICAgIGVuYWJsZWQgPSBzd2lwZXIuZW5hYmxlZDtcbiAgaWYgKCFlbmFibGVkKSByZXR1cm47XG4gIHZhciBlID0gZXZlbnQ7XG4gIGlmIChlLm9yaWdpbmFsRXZlbnQpIGUgPSBlLm9yaWdpbmFsRXZlbnQ7XG5cbiAgaWYgKCFkYXRhLmlzVG91Y2hlZCkge1xuICAgIGlmIChkYXRhLnN0YXJ0TW92aW5nICYmIGRhdGEuaXNTY3JvbGxpbmcpIHtcbiAgICAgIHN3aXBlci5lbWl0KCd0b3VjaE1vdmVPcHBvc2l0ZScsIGUpO1xuICAgIH1cblxuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChkYXRhLmlzVG91Y2hFdmVudCAmJiBlLnR5cGUgIT09ICd0b3VjaG1vdmUnKSByZXR1cm47XG4gIHZhciB0YXJnZXRUb3VjaCA9IGUudHlwZSA9PT0gJ3RvdWNobW92ZScgJiYgZS50YXJnZXRUb3VjaGVzICYmIChlLnRhcmdldFRvdWNoZXNbMF0gfHwgZS5jaGFuZ2VkVG91Y2hlc1swXSk7XG4gIHZhciBwYWdlWCA9IGUudHlwZSA9PT0gJ3RvdWNobW92ZScgPyB0YXJnZXRUb3VjaC5wYWdlWCA6IGUucGFnZVg7XG4gIHZhciBwYWdlWSA9IGUudHlwZSA9PT0gJ3RvdWNobW92ZScgPyB0YXJnZXRUb3VjaC5wYWdlWSA6IGUucGFnZVk7XG5cbiAgaWYgKGUucHJldmVudGVkQnlOZXN0ZWRTd2lwZXIpIHtcbiAgICB0b3VjaGVzLnN0YXJ0WCA9IHBhZ2VYO1xuICAgIHRvdWNoZXMuc3RhcnRZID0gcGFnZVk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKCFzd2lwZXIuYWxsb3dUb3VjaE1vdmUpIHtcbiAgICAvLyBpc01vdmVkID0gdHJ1ZTtcbiAgICBzd2lwZXIuYWxsb3dDbGljayA9IGZhbHNlO1xuXG4gICAgaWYgKGRhdGEuaXNUb3VjaGVkKSB7XG4gICAgICBleHRlbmQodG91Y2hlcywge1xuICAgICAgICBzdGFydFg6IHBhZ2VYLFxuICAgICAgICBzdGFydFk6IHBhZ2VZLFxuICAgICAgICBjdXJyZW50WDogcGFnZVgsXG4gICAgICAgIGN1cnJlbnRZOiBwYWdlWVxuICAgICAgfSk7XG4gICAgICBkYXRhLnRvdWNoU3RhcnRUaW1lID0gbm93KCk7XG4gICAgfVxuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGRhdGEuaXNUb3VjaEV2ZW50ICYmIHBhcmFtcy50b3VjaFJlbGVhc2VPbkVkZ2VzICYmICFwYXJhbXMubG9vcCkge1xuICAgIGlmIChzd2lwZXIuaXNWZXJ0aWNhbCgpKSB7XG4gICAgICAvLyBWZXJ0aWNhbFxuICAgICAgaWYgKHBhZ2VZIDwgdG91Y2hlcy5zdGFydFkgJiYgc3dpcGVyLnRyYW5zbGF0ZSA8PSBzd2lwZXIubWF4VHJhbnNsYXRlKCkgfHwgcGFnZVkgPiB0b3VjaGVzLnN0YXJ0WSAmJiBzd2lwZXIudHJhbnNsYXRlID49IHN3aXBlci5taW5UcmFuc2xhdGUoKSkge1xuICAgICAgICBkYXRhLmlzVG91Y2hlZCA9IGZhbHNlO1xuICAgICAgICBkYXRhLmlzTW92ZWQgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAocGFnZVggPCB0b3VjaGVzLnN0YXJ0WCAmJiBzd2lwZXIudHJhbnNsYXRlIDw9IHN3aXBlci5tYXhUcmFuc2xhdGUoKSB8fCBwYWdlWCA+IHRvdWNoZXMuc3RhcnRYICYmIHN3aXBlci50cmFuc2xhdGUgPj0gc3dpcGVyLm1pblRyYW5zbGF0ZSgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgaWYgKGRhdGEuaXNUb3VjaEV2ZW50ICYmIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpIHtcbiAgICBpZiAoZS50YXJnZXQgPT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgJiYgJChlLnRhcmdldCkuaXMoZGF0YS5mb2N1c2FibGVFbGVtZW50cykpIHtcbiAgICAgIGRhdGEuaXNNb3ZlZCA9IHRydWU7XG4gICAgICBzd2lwZXIuYWxsb3dDbGljayA9IGZhbHNlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG4gIGlmIChkYXRhLmFsbG93VG91Y2hDYWxsYmFja3MpIHtcbiAgICBzd2lwZXIuZW1pdCgndG91Y2hNb3ZlJywgZSk7XG4gIH1cblxuICBpZiAoZS50YXJnZXRUb3VjaGVzICYmIGUudGFyZ2V0VG91Y2hlcy5sZW5ndGggPiAxKSByZXR1cm47XG4gIHRvdWNoZXMuY3VycmVudFggPSBwYWdlWDtcbiAgdG91Y2hlcy5jdXJyZW50WSA9IHBhZ2VZO1xuICB2YXIgZGlmZlggPSB0b3VjaGVzLmN1cnJlbnRYIC0gdG91Y2hlcy5zdGFydFg7XG4gIHZhciBkaWZmWSA9IHRvdWNoZXMuY3VycmVudFkgLSB0b3VjaGVzLnN0YXJ0WTtcbiAgaWYgKHN3aXBlci5wYXJhbXMudGhyZXNob2xkICYmIE1hdGguc3FydChNYXRoLnBvdyhkaWZmWCwgMikgKyBNYXRoLnBvdyhkaWZmWSwgMikpIDwgc3dpcGVyLnBhcmFtcy50aHJlc2hvbGQpIHJldHVybjtcblxuICBpZiAodHlwZW9mIGRhdGEuaXNTY3JvbGxpbmcgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIHRvdWNoQW5nbGU7XG5cbiAgICBpZiAoc3dpcGVyLmlzSG9yaXpvbnRhbCgpICYmIHRvdWNoZXMuY3VycmVudFkgPT09IHRvdWNoZXMuc3RhcnRZIHx8IHN3aXBlci5pc1ZlcnRpY2FsKCkgJiYgdG91Y2hlcy5jdXJyZW50WCA9PT0gdG91Y2hlcy5zdGFydFgpIHtcbiAgICAgIGRhdGEuaXNTY3JvbGxpbmcgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgICBpZiAoZGlmZlggKiBkaWZmWCArIGRpZmZZICogZGlmZlkgPj0gMjUpIHtcbiAgICAgICAgdG91Y2hBbmdsZSA9IE1hdGguYXRhbjIoTWF0aC5hYnMoZGlmZlkpLCBNYXRoLmFicyhkaWZmWCkpICogMTgwIC8gTWF0aC5QSTtcbiAgICAgICAgZGF0YS5pc1Njcm9sbGluZyA9IHN3aXBlci5pc0hvcml6b250YWwoKSA/IHRvdWNoQW5nbGUgPiBwYXJhbXMudG91Y2hBbmdsZSA6IDkwIC0gdG91Y2hBbmdsZSA+IHBhcmFtcy50b3VjaEFuZ2xlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChkYXRhLmlzU2Nyb2xsaW5nKSB7XG4gICAgc3dpcGVyLmVtaXQoJ3RvdWNoTW92ZU9wcG9zaXRlJywgZSk7XG4gIH1cblxuICBpZiAodHlwZW9mIGRhdGEuc3RhcnRNb3ZpbmcgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgaWYgKHRvdWNoZXMuY3VycmVudFggIT09IHRvdWNoZXMuc3RhcnRYIHx8IHRvdWNoZXMuY3VycmVudFkgIT09IHRvdWNoZXMuc3RhcnRZKSB7XG4gICAgICBkYXRhLnN0YXJ0TW92aW5nID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBpZiAoZGF0YS5pc1Njcm9sbGluZykge1xuICAgIGRhdGEuaXNUb3VjaGVkID0gZmFsc2U7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKCFkYXRhLnN0YXJ0TW92aW5nKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgc3dpcGVyLmFsbG93Q2xpY2sgPSBmYWxzZTtcblxuICBpZiAoIXBhcmFtcy5jc3NNb2RlICYmIGUuY2FuY2VsYWJsZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIGlmIChwYXJhbXMudG91Y2hNb3ZlU3RvcFByb3BhZ2F0aW9uICYmICFwYXJhbXMubmVzdGVkKSB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuXG4gIGlmICghZGF0YS5pc01vdmVkKSB7XG4gICAgaWYgKHBhcmFtcy5sb29wKSB7XG4gICAgICBzd2lwZXIubG9vcEZpeCgpO1xuICAgIH1cblxuICAgIGRhdGEuc3RhcnRUcmFuc2xhdGUgPSBzd2lwZXIuZ2V0VHJhbnNsYXRlKCk7XG4gICAgc3dpcGVyLnNldFRyYW5zaXRpb24oMCk7XG5cbiAgICBpZiAoc3dpcGVyLmFuaW1hdGluZykge1xuICAgICAgc3dpcGVyLiR3cmFwcGVyRWwudHJpZ2dlcignd2Via2l0VHJhbnNpdGlvbkVuZCB0cmFuc2l0aW9uZW5kJyk7XG4gICAgfVxuXG4gICAgZGF0YS5hbGxvd01vbWVudHVtQm91bmNlID0gZmFsc2U7IC8vIEdyYWIgQ3Vyc29yXG5cbiAgICBpZiAocGFyYW1zLmdyYWJDdXJzb3IgJiYgKHN3aXBlci5hbGxvd1NsaWRlTmV4dCA9PT0gdHJ1ZSB8fCBzd2lwZXIuYWxsb3dTbGlkZVByZXYgPT09IHRydWUpKSB7XG4gICAgICBzd2lwZXIuc2V0R3JhYkN1cnNvcih0cnVlKTtcbiAgICB9XG5cbiAgICBzd2lwZXIuZW1pdCgnc2xpZGVyRmlyc3RNb3ZlJywgZSk7XG4gIH1cblxuICBzd2lwZXIuZW1pdCgnc2xpZGVyTW92ZScsIGUpO1xuICBkYXRhLmlzTW92ZWQgPSB0cnVlO1xuICB2YXIgZGlmZiA9IHN3aXBlci5pc0hvcml6b250YWwoKSA/IGRpZmZYIDogZGlmZlk7XG4gIHRvdWNoZXMuZGlmZiA9IGRpZmY7XG4gIGRpZmYgKj0gcGFyYW1zLnRvdWNoUmF0aW87XG4gIGlmIChydGwpIGRpZmYgPSAtZGlmZjtcbiAgc3dpcGVyLnN3aXBlRGlyZWN0aW9uID0gZGlmZiA+IDAgPyAncHJldicgOiAnbmV4dCc7XG4gIGRhdGEuY3VycmVudFRyYW5zbGF0ZSA9IGRpZmYgKyBkYXRhLnN0YXJ0VHJhbnNsYXRlO1xuICB2YXIgZGlzYWJsZVBhcmVudFN3aXBlciA9IHRydWU7XG4gIHZhciByZXNpc3RhbmNlUmF0aW8gPSBwYXJhbXMucmVzaXN0YW5jZVJhdGlvO1xuXG4gIGlmIChwYXJhbXMudG91Y2hSZWxlYXNlT25FZGdlcykge1xuICAgIHJlc2lzdGFuY2VSYXRpbyA9IDA7XG4gIH1cblxuICBpZiAoZGlmZiA+IDAgJiYgZGF0YS5jdXJyZW50VHJhbnNsYXRlID4gc3dpcGVyLm1pblRyYW5zbGF0ZSgpKSB7XG4gICAgZGlzYWJsZVBhcmVudFN3aXBlciA9IGZhbHNlO1xuICAgIGlmIChwYXJhbXMucmVzaXN0YW5jZSkgZGF0YS5jdXJyZW50VHJhbnNsYXRlID0gc3dpcGVyLm1pblRyYW5zbGF0ZSgpIC0gMSArIE1hdGgucG93KC1zd2lwZXIubWluVHJhbnNsYXRlKCkgKyBkYXRhLnN0YXJ0VHJhbnNsYXRlICsgZGlmZiwgcmVzaXN0YW5jZVJhdGlvKTtcbiAgfSBlbHNlIGlmIChkaWZmIDwgMCAmJiBkYXRhLmN1cnJlbnRUcmFuc2xhdGUgPCBzd2lwZXIubWF4VHJhbnNsYXRlKCkpIHtcbiAgICBkaXNhYmxlUGFyZW50U3dpcGVyID0gZmFsc2U7XG4gICAgaWYgKHBhcmFtcy5yZXNpc3RhbmNlKSBkYXRhLmN1cnJlbnRUcmFuc2xhdGUgPSBzd2lwZXIubWF4VHJhbnNsYXRlKCkgKyAxIC0gTWF0aC5wb3coc3dpcGVyLm1heFRyYW5zbGF0ZSgpIC0gZGF0YS5zdGFydFRyYW5zbGF0ZSAtIGRpZmYsIHJlc2lzdGFuY2VSYXRpbyk7XG4gIH1cblxuICBpZiAoZGlzYWJsZVBhcmVudFN3aXBlcikge1xuICAgIGUucHJldmVudGVkQnlOZXN0ZWRTd2lwZXIgPSB0cnVlO1xuICB9IC8vIERpcmVjdGlvbnMgbG9ja3NcblxuXG4gIGlmICghc3dpcGVyLmFsbG93U2xpZGVOZXh0ICYmIHN3aXBlci5zd2lwZURpcmVjdGlvbiA9PT0gJ25leHQnICYmIGRhdGEuY3VycmVudFRyYW5zbGF0ZSA8IGRhdGEuc3RhcnRUcmFuc2xhdGUpIHtcbiAgICBkYXRhLmN1cnJlbnRUcmFuc2xhdGUgPSBkYXRhLnN0YXJ0VHJhbnNsYXRlO1xuICB9XG5cbiAgaWYgKCFzd2lwZXIuYWxsb3dTbGlkZVByZXYgJiYgc3dpcGVyLnN3aXBlRGlyZWN0aW9uID09PSAncHJldicgJiYgZGF0YS5jdXJyZW50VHJhbnNsYXRlID4gZGF0YS5zdGFydFRyYW5zbGF0ZSkge1xuICAgIGRhdGEuY3VycmVudFRyYW5zbGF0ZSA9IGRhdGEuc3RhcnRUcmFuc2xhdGU7XG4gIH1cblxuICBpZiAoIXN3aXBlci5hbGxvd1NsaWRlUHJldiAmJiAhc3dpcGVyLmFsbG93U2xpZGVOZXh0KSB7XG4gICAgZGF0YS5jdXJyZW50VHJhbnNsYXRlID0gZGF0YS5zdGFydFRyYW5zbGF0ZTtcbiAgfSAvLyBUaHJlc2hvbGRcblxuXG4gIGlmIChwYXJhbXMudGhyZXNob2xkID4gMCkge1xuICAgIGlmIChNYXRoLmFicyhkaWZmKSA+IHBhcmFtcy50aHJlc2hvbGQgfHwgZGF0YS5hbGxvd1RocmVzaG9sZE1vdmUpIHtcbiAgICAgIGlmICghZGF0YS5hbGxvd1RocmVzaG9sZE1vdmUpIHtcbiAgICAgICAgZGF0YS5hbGxvd1RocmVzaG9sZE1vdmUgPSB0cnVlO1xuICAgICAgICB0b3VjaGVzLnN0YXJ0WCA9IHRvdWNoZXMuY3VycmVudFg7XG4gICAgICAgIHRvdWNoZXMuc3RhcnRZID0gdG91Y2hlcy5jdXJyZW50WTtcbiAgICAgICAgZGF0YS5jdXJyZW50VHJhbnNsYXRlID0gZGF0YS5zdGFydFRyYW5zbGF0ZTtcbiAgICAgICAgdG91Y2hlcy5kaWZmID0gc3dpcGVyLmlzSG9yaXpvbnRhbCgpID8gdG91Y2hlcy5jdXJyZW50WCAtIHRvdWNoZXMuc3RhcnRYIDogdG91Y2hlcy5jdXJyZW50WSAtIHRvdWNoZXMuc3RhcnRZO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGEuY3VycmVudFRyYW5zbGF0ZSA9IGRhdGEuc3RhcnRUcmFuc2xhdGU7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgaWYgKCFwYXJhbXMuZm9sbG93RmluZ2VyIHx8IHBhcmFtcy5jc3NNb2RlKSByZXR1cm47IC8vIFVwZGF0ZSBhY3RpdmUgaW5kZXggaW4gZnJlZSBtb2RlXG5cbiAgaWYgKHBhcmFtcy5mcmVlTW9kZSB8fCBwYXJhbXMud2F0Y2hTbGlkZXNQcm9ncmVzcyB8fCBwYXJhbXMud2F0Y2hTbGlkZXNWaXNpYmlsaXR5KSB7XG4gICAgc3dpcGVyLnVwZGF0ZUFjdGl2ZUluZGV4KCk7XG4gICAgc3dpcGVyLnVwZGF0ZVNsaWRlc0NsYXNzZXMoKTtcbiAgfVxuXG4gIGlmIChwYXJhbXMuZnJlZU1vZGUpIHtcbiAgICAvLyBWZWxvY2l0eVxuICAgIGlmIChkYXRhLnZlbG9jaXRpZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICBkYXRhLnZlbG9jaXRpZXMucHVzaCh7XG4gICAgICAgIHBvc2l0aW9uOiB0b3VjaGVzW3N3aXBlci5pc0hvcml6b250YWwoKSA/ICdzdGFydFgnIDogJ3N0YXJ0WSddLFxuICAgICAgICB0aW1lOiBkYXRhLnRvdWNoU3RhcnRUaW1lXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBkYXRhLnZlbG9jaXRpZXMucHVzaCh7XG4gICAgICBwb3NpdGlvbjogdG91Y2hlc1tzd2lwZXIuaXNIb3Jpem9udGFsKCkgPyAnY3VycmVudFgnIDogJ2N1cnJlbnRZJ10sXG4gICAgICB0aW1lOiBub3coKVxuICAgIH0pO1xuICB9IC8vIFVwZGF0ZSBwcm9ncmVzc1xuXG5cbiAgc3dpcGVyLnVwZGF0ZVByb2dyZXNzKGRhdGEuY3VycmVudFRyYW5zbGF0ZSk7IC8vIFVwZGF0ZSB0cmFuc2xhdGVcblxuICBzd2lwZXIuc2V0VHJhbnNsYXRlKGRhdGEuY3VycmVudFRyYW5zbGF0ZSk7XG59IiwiaW1wb3J0IHsgZ2V0V2luZG93LCBnZXREb2N1bWVudCB9IGZyb20gJ3Nzci13aW5kb3cnO1xuaW1wb3J0ICQgZnJvbSAnLi4vLi4vLi4vdXRpbHMvZG9tJztcbmltcG9ydCB7IGV4dGVuZCwgbm93IH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvdXRpbHMnOyAvLyBNb2RpZmllZCBmcm9tIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzU0NTIwNTU0L2N1c3RvbS1lbGVtZW50LWdldHJvb3Rub2RlLWNsb3Nlc3QtZnVuY3Rpb24tY3Jvc3NpbmctbXVsdGlwbGUtcGFyZW50LXNoYWRvd2RcblxuZnVuY3Rpb24gY2xvc2VzdEVsZW1lbnQoc2VsZWN0b3IsIGJhc2UpIHtcbiAgaWYgKGJhc2UgPT09IHZvaWQgMCkge1xuICAgIGJhc2UgPSB0aGlzO1xuICB9XG5cbiAgZnVuY3Rpb24gX19jbG9zZXN0RnJvbShlbCkge1xuICAgIGlmICghZWwgfHwgZWwgPT09IGdldERvY3VtZW50KCkgfHwgZWwgPT09IGdldFdpbmRvdygpKSByZXR1cm4gbnVsbDtcbiAgICBpZiAoZWwuYXNzaWduZWRTbG90KSBlbCA9IGVsLmFzc2lnbmVkU2xvdDtcbiAgICB2YXIgZm91bmQgPSBlbC5jbG9zZXN0KHNlbGVjdG9yKTtcbiAgICByZXR1cm4gZm91bmQgfHwgX19jbG9zZXN0RnJvbShlbC5nZXRSb290Tm9kZSgpLmhvc3QpO1xuICB9XG5cbiAgcmV0dXJuIF9fY2xvc2VzdEZyb20oYmFzZSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG9uVG91Y2hTdGFydChldmVudCkge1xuICB2YXIgc3dpcGVyID0gdGhpcztcbiAgdmFyIGRvY3VtZW50ID0gZ2V0RG9jdW1lbnQoKTtcbiAgdmFyIHdpbmRvdyA9IGdldFdpbmRvdygpO1xuICB2YXIgZGF0YSA9IHN3aXBlci50b3VjaEV2ZW50c0RhdGE7XG4gIHZhciBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLFxuICAgICAgdG91Y2hlcyA9IHN3aXBlci50b3VjaGVzLFxuICAgICAgZW5hYmxlZCA9IHN3aXBlci5lbmFibGVkO1xuICBpZiAoIWVuYWJsZWQpIHJldHVybjtcblxuICBpZiAoc3dpcGVyLmFuaW1hdGluZyAmJiBwYXJhbXMucHJldmVudEludGVyYWN0aW9uT25UcmFuc2l0aW9uKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIGUgPSBldmVudDtcbiAgaWYgKGUub3JpZ2luYWxFdmVudCkgZSA9IGUub3JpZ2luYWxFdmVudDtcbiAgdmFyICR0YXJnZXRFbCA9ICQoZS50YXJnZXQpO1xuXG4gIGlmIChwYXJhbXMudG91Y2hFdmVudHNUYXJnZXQgPT09ICd3cmFwcGVyJykge1xuICAgIGlmICghJHRhcmdldEVsLmNsb3Nlc3Qoc3dpcGVyLndyYXBwZXJFbCkubGVuZ3RoKSByZXR1cm47XG4gIH1cblxuICBkYXRhLmlzVG91Y2hFdmVudCA9IGUudHlwZSA9PT0gJ3RvdWNoc3RhcnQnO1xuICBpZiAoIWRhdGEuaXNUb3VjaEV2ZW50ICYmICd3aGljaCcgaW4gZSAmJiBlLndoaWNoID09PSAzKSByZXR1cm47XG4gIGlmICghZGF0YS5pc1RvdWNoRXZlbnQgJiYgJ2J1dHRvbicgaW4gZSAmJiBlLmJ1dHRvbiA+IDApIHJldHVybjtcbiAgaWYgKGRhdGEuaXNUb3VjaGVkICYmIGRhdGEuaXNNb3ZlZCkgcmV0dXJuOyAvLyBjaGFuZ2UgdGFyZ2V0IGVsIGZvciBzaGFkb3cgcm9vdCBjb21wb25lbnRcblxuICB2YXIgc3dpcGluZ0NsYXNzSGFzVmFsdWUgPSAhIXBhcmFtcy5ub1N3aXBpbmdDbGFzcyAmJiBwYXJhbXMubm9Td2lwaW5nQ2xhc3MgIT09ICcnO1xuXG4gIGlmIChzd2lwaW5nQ2xhc3NIYXNWYWx1ZSAmJiBlLnRhcmdldCAmJiBlLnRhcmdldC5zaGFkb3dSb290ICYmIGV2ZW50LnBhdGggJiYgZXZlbnQucGF0aFswXSkge1xuICAgICR0YXJnZXRFbCA9ICQoZXZlbnQucGF0aFswXSk7XG4gIH1cblxuICB2YXIgbm9Td2lwaW5nU2VsZWN0b3IgPSBwYXJhbXMubm9Td2lwaW5nU2VsZWN0b3IgPyBwYXJhbXMubm9Td2lwaW5nU2VsZWN0b3IgOiBcIi5cIiArIHBhcmFtcy5ub1N3aXBpbmdDbGFzcztcbiAgdmFyIGlzVGFyZ2V0U2hhZG93ID0gISEoZS50YXJnZXQgJiYgZS50YXJnZXQuc2hhZG93Um9vdCk7IC8vIHVzZSBjbG9zZXN0RWxlbWVudCBmb3Igc2hhZG93IHJvb3QgZWxlbWVudCB0byBnZXQgdGhlIGFjdHVhbCBjbG9zZXN0IGZvciBuZXN0ZWQgc2hhZG93IHJvb3QgZWxlbWVudFxuXG4gIGlmIChwYXJhbXMubm9Td2lwaW5nICYmIChpc1RhcmdldFNoYWRvdyA/IGNsb3Nlc3RFbGVtZW50KG5vU3dpcGluZ1NlbGVjdG9yLCBlLnRhcmdldCkgOiAkdGFyZ2V0RWwuY2xvc2VzdChub1N3aXBpbmdTZWxlY3RvcilbMF0pKSB7XG4gICAgc3dpcGVyLmFsbG93Q2xpY2sgPSB0cnVlO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChwYXJhbXMuc3dpcGVIYW5kbGVyKSB7XG4gICAgaWYgKCEkdGFyZ2V0RWwuY2xvc2VzdChwYXJhbXMuc3dpcGVIYW5kbGVyKVswXSkgcmV0dXJuO1xuICB9XG5cbiAgdG91Y2hlcy5jdXJyZW50WCA9IGUudHlwZSA9PT0gJ3RvdWNoc3RhcnQnID8gZS50YXJnZXRUb3VjaGVzWzBdLnBhZ2VYIDogZS5wYWdlWDtcbiAgdG91Y2hlcy5jdXJyZW50WSA9IGUudHlwZSA9PT0gJ3RvdWNoc3RhcnQnID8gZS50YXJnZXRUb3VjaGVzWzBdLnBhZ2VZIDogZS5wYWdlWTtcbiAgdmFyIHN0YXJ0WCA9IHRvdWNoZXMuY3VycmVudFg7XG4gIHZhciBzdGFydFkgPSB0b3VjaGVzLmN1cnJlbnRZOyAvLyBEbyBOT1Qgc3RhcnQgaWYgaU9TIGVkZ2Ugc3dpcGUgaXMgZGV0ZWN0ZWQuIE90aGVyd2lzZSBpT1MgYXBwIGNhbm5vdCBzd2lwZS10by1nby1iYWNrIGFueW1vcmVcblxuICB2YXIgZWRnZVN3aXBlRGV0ZWN0aW9uID0gcGFyYW1zLmVkZ2VTd2lwZURldGVjdGlvbiB8fCBwYXJhbXMuaU9TRWRnZVN3aXBlRGV0ZWN0aW9uO1xuICB2YXIgZWRnZVN3aXBlVGhyZXNob2xkID0gcGFyYW1zLmVkZ2VTd2lwZVRocmVzaG9sZCB8fCBwYXJhbXMuaU9TRWRnZVN3aXBlVGhyZXNob2xkO1xuXG4gIGlmIChlZGdlU3dpcGVEZXRlY3Rpb24gJiYgKHN0YXJ0WCA8PSBlZGdlU3dpcGVUaHJlc2hvbGQgfHwgc3RhcnRYID49IHdpbmRvdy5pbm5lcldpZHRoIC0gZWRnZVN3aXBlVGhyZXNob2xkKSkge1xuICAgIGlmIChlZGdlU3dpcGVEZXRlY3Rpb24gPT09ICdwcmV2ZW50Jykge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG4gIGV4dGVuZChkYXRhLCB7XG4gICAgaXNUb3VjaGVkOiB0cnVlLFxuICAgIGlzTW92ZWQ6IGZhbHNlLFxuICAgIGFsbG93VG91Y2hDYWxsYmFja3M6IHRydWUsXG4gICAgaXNTY3JvbGxpbmc6IHVuZGVmaW5lZCxcbiAgICBzdGFydE1vdmluZzogdW5kZWZpbmVkXG4gIH0pO1xuICB0b3VjaGVzLnN0YXJ0WCA9IHN0YXJ0WDtcbiAgdG91Y2hlcy5zdGFydFkgPSBzdGFydFk7XG4gIGRhdGEudG91Y2hTdGFydFRpbWUgPSBub3coKTtcbiAgc3dpcGVyLmFsbG93Q2xpY2sgPSB0cnVlO1xuICBzd2lwZXIudXBkYXRlU2l6ZSgpO1xuICBzd2lwZXIuc3dpcGVEaXJlY3Rpb24gPSB1bmRlZmluZWQ7XG4gIGlmIChwYXJhbXMudGhyZXNob2xkID4gMCkgZGF0YS5hbGxvd1RocmVzaG9sZE1vdmUgPSBmYWxzZTtcblxuICBpZiAoZS50eXBlICE9PSAndG91Y2hzdGFydCcpIHtcbiAgICB2YXIgcHJldmVudERlZmF1bHQgPSB0cnVlO1xuICAgIGlmICgkdGFyZ2V0RWwuaXMoZGF0YS5mb2N1c2FibGVFbGVtZW50cykpIHByZXZlbnREZWZhdWx0ID0gZmFsc2U7XG5cbiAgICBpZiAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAmJiAkKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpLmlzKGRhdGEuZm9jdXNhYmxlRWxlbWVudHMpICYmIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgIT09ICR0YXJnZXRFbFswXSkge1xuICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5ibHVyKCk7XG4gICAgfVxuXG4gICAgdmFyIHNob3VsZFByZXZlbnREZWZhdWx0ID0gcHJldmVudERlZmF1bHQgJiYgc3dpcGVyLmFsbG93VG91Y2hNb3ZlICYmIHBhcmFtcy50b3VjaFN0YXJ0UHJldmVudERlZmF1bHQ7XG5cbiAgICBpZiAoKHBhcmFtcy50b3VjaFN0YXJ0Rm9yY2VQcmV2ZW50RGVmYXVsdCB8fCBzaG91bGRQcmV2ZW50RGVmYXVsdCkgJiYgISR0YXJnZXRFbFswXS5pc0NvbnRlbnRFZGl0YWJsZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfVxuXG4gIHN3aXBlci5lbWl0KCd0b3VjaFN0YXJ0JywgZSk7XG59IiwiaW1wb3J0IHNldEdyYWJDdXJzb3IgZnJvbSAnLi9zZXRHcmFiQ3Vyc29yJztcbmltcG9ydCB1bnNldEdyYWJDdXJzb3IgZnJvbSAnLi91bnNldEdyYWJDdXJzb3InO1xuZXhwb3J0IGRlZmF1bHQge1xuICBzZXRHcmFiQ3Vyc29yOiBzZXRHcmFiQ3Vyc29yLFxuICB1bnNldEdyYWJDdXJzb3I6IHVuc2V0R3JhYkN1cnNvclxufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXRHcmFiQ3Vyc29yKG1vdmluZykge1xuICB2YXIgc3dpcGVyID0gdGhpcztcbiAgaWYgKHN3aXBlci5zdXBwb3J0LnRvdWNoIHx8ICFzd2lwZXIucGFyYW1zLnNpbXVsYXRlVG91Y2ggfHwgc3dpcGVyLnBhcmFtcy53YXRjaE92ZXJmbG93ICYmIHN3aXBlci5pc0xvY2tlZCB8fCBzd2lwZXIucGFyYW1zLmNzc01vZGUpIHJldHVybjtcbiAgdmFyIGVsID0gc3dpcGVyLmVsO1xuICBlbC5zdHlsZS5jdXJzb3IgPSAnbW92ZSc7XG4gIGVsLnN0eWxlLmN1cnNvciA9IG1vdmluZyA/ICctd2Via2l0LWdyYWJiaW5nJyA6ICctd2Via2l0LWdyYWInO1xuICBlbC5zdHlsZS5jdXJzb3IgPSBtb3ZpbmcgPyAnLW1vei1ncmFiYmluJyA6ICctbW96LWdyYWInO1xuICBlbC5zdHlsZS5jdXJzb3IgPSBtb3ZpbmcgPyAnZ3JhYmJpbmcnIDogJ2dyYWInO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVuc2V0R3JhYkN1cnNvcigpIHtcbiAgdmFyIHN3aXBlciA9IHRoaXM7XG5cbiAgaWYgKHN3aXBlci5zdXBwb3J0LnRvdWNoIHx8IHN3aXBlci5wYXJhbXMud2F0Y2hPdmVyZmxvdyAmJiBzd2lwZXIuaXNMb2NrZWQgfHwgc3dpcGVyLnBhcmFtcy5jc3NNb2RlKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgc3dpcGVyLmVsLnN0eWxlLmN1cnNvciA9ICcnO1xufSIsImltcG9ydCBsb2FkSW1hZ2UgZnJvbSAnLi9sb2FkSW1hZ2UnO1xuaW1wb3J0IHByZWxvYWRJbWFnZXMgZnJvbSAnLi9wcmVsb2FkSW1hZ2VzJztcbmV4cG9ydCBkZWZhdWx0IHtcbiAgbG9hZEltYWdlOiBsb2FkSW1hZ2UsXG4gIHByZWxvYWRJbWFnZXM6IHByZWxvYWRJbWFnZXNcbn07IiwiaW1wb3J0IHsgZ2V0V2luZG93IH0gZnJvbSAnc3NyLXdpbmRvdyc7XG5pbXBvcnQgJCBmcm9tICcuLi8uLi8uLi91dGlscy9kb20nO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZEltYWdlKGltYWdlRWwsIHNyYywgc3Jjc2V0LCBzaXplcywgY2hlY2tGb3JDb21wbGV0ZSwgY2FsbGJhY2spIHtcbiAgdmFyIHdpbmRvdyA9IGdldFdpbmRvdygpO1xuICB2YXIgaW1hZ2U7XG5cbiAgZnVuY3Rpb24gb25SZWFkeSgpIHtcbiAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKCk7XG4gIH1cblxuICB2YXIgaXNQaWN0dXJlID0gJChpbWFnZUVsKS5wYXJlbnQoJ3BpY3R1cmUnKVswXTtcblxuICBpZiAoIWlzUGljdHVyZSAmJiAoIWltYWdlRWwuY29tcGxldGUgfHwgIWNoZWNrRm9yQ29tcGxldGUpKSB7XG4gICAgaWYgKHNyYykge1xuICAgICAgaW1hZ2UgPSBuZXcgd2luZG93LkltYWdlKCk7XG4gICAgICBpbWFnZS5vbmxvYWQgPSBvblJlYWR5O1xuICAgICAgaW1hZ2Uub25lcnJvciA9IG9uUmVhZHk7XG5cbiAgICAgIGlmIChzaXplcykge1xuICAgICAgICBpbWFnZS5zaXplcyA9IHNpemVzO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3Jjc2V0KSB7XG4gICAgICAgIGltYWdlLnNyY3NldCA9IHNyY3NldDtcbiAgICAgIH1cblxuICAgICAgaWYgKHNyYykge1xuICAgICAgICBpbWFnZS5zcmMgPSBzcmM7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIG9uUmVhZHkoKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gaW1hZ2UgYWxyZWFkeSBsb2FkZWQuLi5cbiAgICBvblJlYWR5KCk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcmVsb2FkSW1hZ2VzKCkge1xuICB2YXIgc3dpcGVyID0gdGhpcztcbiAgc3dpcGVyLmltYWdlc1RvTG9hZCA9IHN3aXBlci4kZWwuZmluZCgnaW1nJyk7XG5cbiAgZnVuY3Rpb24gb25SZWFkeSgpIHtcbiAgICBpZiAodHlwZW9mIHN3aXBlciA9PT0gJ3VuZGVmaW5lZCcgfHwgc3dpcGVyID09PSBudWxsIHx8ICFzd2lwZXIgfHwgc3dpcGVyLmRlc3Ryb3llZCkgcmV0dXJuO1xuICAgIGlmIChzd2lwZXIuaW1hZ2VzTG9hZGVkICE9PSB1bmRlZmluZWQpIHN3aXBlci5pbWFnZXNMb2FkZWQgKz0gMTtcblxuICAgIGlmIChzd2lwZXIuaW1hZ2VzTG9hZGVkID09PSBzd2lwZXIuaW1hZ2VzVG9Mb2FkLmxlbmd0aCkge1xuICAgICAgaWYgKHN3aXBlci5wYXJhbXMudXBkYXRlT25JbWFnZXNSZWFkeSkgc3dpcGVyLnVwZGF0ZSgpO1xuICAgICAgc3dpcGVyLmVtaXQoJ2ltYWdlc1JlYWR5Jyk7XG4gICAgfVxuICB9XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzd2lwZXIuaW1hZ2VzVG9Mb2FkLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgdmFyIGltYWdlRWwgPSBzd2lwZXIuaW1hZ2VzVG9Mb2FkW2ldO1xuICAgIHN3aXBlci5sb2FkSW1hZ2UoaW1hZ2VFbCwgaW1hZ2VFbC5jdXJyZW50U3JjIHx8IGltYWdlRWwuZ2V0QXR0cmlidXRlKCdzcmMnKSwgaW1hZ2VFbC5zcmNzZXQgfHwgaW1hZ2VFbC5nZXRBdHRyaWJ1dGUoJ3NyY3NldCcpLCBpbWFnZUVsLnNpemVzIHx8IGltYWdlRWwuZ2V0QXR0cmlidXRlKCdzaXplcycpLCB0cnVlLCBvblJlYWR5KTtcbiAgfVxufSIsImltcG9ydCBsb29wQ3JlYXRlIGZyb20gJy4vbG9vcENyZWF0ZSc7XG5pbXBvcnQgbG9vcEZpeCBmcm9tICcuL2xvb3BGaXgnO1xuaW1wb3J0IGxvb3BEZXN0cm95IGZyb20gJy4vbG9vcERlc3Ryb3knO1xuZXhwb3J0IGRlZmF1bHQge1xuICBsb29wQ3JlYXRlOiBsb29wQ3JlYXRlLFxuICBsb29wRml4OiBsb29wRml4LFxuICBsb29wRGVzdHJveTogbG9vcERlc3Ryb3lcbn07IiwiaW1wb3J0IHsgZ2V0RG9jdW1lbnQgfSBmcm9tICdzc3Itd2luZG93JztcbmltcG9ydCAkIGZyb20gJy4uLy4uLy4uL3V0aWxzL2RvbSc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb29wQ3JlYXRlKCkge1xuICB2YXIgc3dpcGVyID0gdGhpcztcbiAgdmFyIGRvY3VtZW50ID0gZ2V0RG9jdW1lbnQoKTtcbiAgdmFyIHBhcmFtcyA9IHN3aXBlci5wYXJhbXMsXG4gICAgICAkd3JhcHBlckVsID0gc3dpcGVyLiR3cmFwcGVyRWw7IC8vIFJlbW92ZSBkdXBsaWNhdGVkIHNsaWRlc1xuXG4gICR3cmFwcGVyRWwuY2hpbGRyZW4oXCIuXCIgKyBwYXJhbXMuc2xpZGVDbGFzcyArIFwiLlwiICsgcGFyYW1zLnNsaWRlRHVwbGljYXRlQ2xhc3MpLnJlbW92ZSgpO1xuICB2YXIgc2xpZGVzID0gJHdyYXBwZXJFbC5jaGlsZHJlbihcIi5cIiArIHBhcmFtcy5zbGlkZUNsYXNzKTtcblxuICBpZiAocGFyYW1zLmxvb3BGaWxsR3JvdXBXaXRoQmxhbmspIHtcbiAgICB2YXIgYmxhbmtTbGlkZXNOdW0gPSBwYXJhbXMuc2xpZGVzUGVyR3JvdXAgLSBzbGlkZXMubGVuZ3RoICUgcGFyYW1zLnNsaWRlc1Blckdyb3VwO1xuXG4gICAgaWYgKGJsYW5rU2xpZGVzTnVtICE9PSBwYXJhbXMuc2xpZGVzUGVyR3JvdXApIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYmxhbmtTbGlkZXNOdW07IGkgKz0gMSkge1xuICAgICAgICB2YXIgYmxhbmtOb2RlID0gJChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSkuYWRkQ2xhc3MocGFyYW1zLnNsaWRlQ2xhc3MgKyBcIiBcIiArIHBhcmFtcy5zbGlkZUJsYW5rQ2xhc3MpO1xuICAgICAgICAkd3JhcHBlckVsLmFwcGVuZChibGFua05vZGUpO1xuICAgICAgfVxuXG4gICAgICBzbGlkZXMgPSAkd3JhcHBlckVsLmNoaWxkcmVuKFwiLlwiICsgcGFyYW1zLnNsaWRlQ2xhc3MpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChwYXJhbXMuc2xpZGVzUGVyVmlldyA9PT0gJ2F1dG8nICYmICFwYXJhbXMubG9vcGVkU2xpZGVzKSBwYXJhbXMubG9vcGVkU2xpZGVzID0gc2xpZGVzLmxlbmd0aDtcbiAgc3dpcGVyLmxvb3BlZFNsaWRlcyA9IE1hdGguY2VpbChwYXJzZUZsb2F0KHBhcmFtcy5sb29wZWRTbGlkZXMgfHwgcGFyYW1zLnNsaWRlc1BlclZpZXcsIDEwKSk7XG4gIHN3aXBlci5sb29wZWRTbGlkZXMgKz0gcGFyYW1zLmxvb3BBZGRpdGlvbmFsU2xpZGVzO1xuXG4gIGlmIChzd2lwZXIubG9vcGVkU2xpZGVzID4gc2xpZGVzLmxlbmd0aCkge1xuICAgIHN3aXBlci5sb29wZWRTbGlkZXMgPSBzbGlkZXMubGVuZ3RoO1xuICB9XG5cbiAgdmFyIHByZXBlbmRTbGlkZXMgPSBbXTtcbiAgdmFyIGFwcGVuZFNsaWRlcyA9IFtdO1xuICBzbGlkZXMuZWFjaChmdW5jdGlvbiAoZWwsIGluZGV4KSB7XG4gICAgdmFyIHNsaWRlID0gJChlbCk7XG5cbiAgICBpZiAoaW5kZXggPCBzd2lwZXIubG9vcGVkU2xpZGVzKSB7XG4gICAgICBhcHBlbmRTbGlkZXMucHVzaChlbCk7XG4gICAgfVxuXG4gICAgaWYgKGluZGV4IDwgc2xpZGVzLmxlbmd0aCAmJiBpbmRleCA+PSBzbGlkZXMubGVuZ3RoIC0gc3dpcGVyLmxvb3BlZFNsaWRlcykge1xuICAgICAgcHJlcGVuZFNsaWRlcy5wdXNoKGVsKTtcbiAgICB9XG5cbiAgICBzbGlkZS5hdHRyKCdkYXRhLXN3aXBlci1zbGlkZS1pbmRleCcsIGluZGV4KTtcbiAgfSk7XG5cbiAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFwcGVuZFNsaWRlcy5sZW5ndGg7IF9pICs9IDEpIHtcbiAgICAkd3JhcHBlckVsLmFwcGVuZCgkKGFwcGVuZFNsaWRlc1tfaV0uY2xvbmVOb2RlKHRydWUpKS5hZGRDbGFzcyhwYXJhbXMuc2xpZGVEdXBsaWNhdGVDbGFzcykpO1xuICB9XG5cbiAgZm9yICh2YXIgX2kyID0gcHJlcGVuZFNsaWRlcy5sZW5ndGggLSAxOyBfaTIgPj0gMDsgX2kyIC09IDEpIHtcbiAgICAkd3JhcHBlckVsLnByZXBlbmQoJChwcmVwZW5kU2xpZGVzW19pMl0uY2xvbmVOb2RlKHRydWUpKS5hZGRDbGFzcyhwYXJhbXMuc2xpZGVEdXBsaWNhdGVDbGFzcykpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9vcERlc3Ryb3koKSB7XG4gIHZhciBzd2lwZXIgPSB0aGlzO1xuICB2YXIgJHdyYXBwZXJFbCA9IHN3aXBlci4kd3JhcHBlckVsLFxuICAgICAgcGFyYW1zID0gc3dpcGVyLnBhcmFtcyxcbiAgICAgIHNsaWRlcyA9IHN3aXBlci5zbGlkZXM7XG4gICR3cmFwcGVyRWwuY2hpbGRyZW4oXCIuXCIgKyBwYXJhbXMuc2xpZGVDbGFzcyArIFwiLlwiICsgcGFyYW1zLnNsaWRlRHVwbGljYXRlQ2xhc3MgKyBcIiwuXCIgKyBwYXJhbXMuc2xpZGVDbGFzcyArIFwiLlwiICsgcGFyYW1zLnNsaWRlQmxhbmtDbGFzcykucmVtb3ZlKCk7XG4gIHNsaWRlcy5yZW1vdmVBdHRyKCdkYXRhLXN3aXBlci1zbGlkZS1pbmRleCcpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvb3BGaXgoKSB7XG4gIHZhciBzd2lwZXIgPSB0aGlzO1xuICBzd2lwZXIuZW1pdCgnYmVmb3JlTG9vcEZpeCcpO1xuICB2YXIgYWN0aXZlSW5kZXggPSBzd2lwZXIuYWN0aXZlSW5kZXgsXG4gICAgICBzbGlkZXMgPSBzd2lwZXIuc2xpZGVzLFxuICAgICAgbG9vcGVkU2xpZGVzID0gc3dpcGVyLmxvb3BlZFNsaWRlcyxcbiAgICAgIGFsbG93U2xpZGVQcmV2ID0gc3dpcGVyLmFsbG93U2xpZGVQcmV2LFxuICAgICAgYWxsb3dTbGlkZU5leHQgPSBzd2lwZXIuYWxsb3dTbGlkZU5leHQsXG4gICAgICBzbmFwR3JpZCA9IHN3aXBlci5zbmFwR3JpZCxcbiAgICAgIHJ0bCA9IHN3aXBlci5ydGxUcmFuc2xhdGU7XG4gIHZhciBuZXdJbmRleDtcbiAgc3dpcGVyLmFsbG93U2xpZGVQcmV2ID0gdHJ1ZTtcbiAgc3dpcGVyLmFsbG93U2xpZGVOZXh0ID0gdHJ1ZTtcbiAgdmFyIHNuYXBUcmFuc2xhdGUgPSAtc25hcEdyaWRbYWN0aXZlSW5kZXhdO1xuICB2YXIgZGlmZiA9IHNuYXBUcmFuc2xhdGUgLSBzd2lwZXIuZ2V0VHJhbnNsYXRlKCk7IC8vIEZpeCBGb3IgTmVnYXRpdmUgT3ZlcnNsaWRpbmdcblxuICBpZiAoYWN0aXZlSW5kZXggPCBsb29wZWRTbGlkZXMpIHtcbiAgICBuZXdJbmRleCA9IHNsaWRlcy5sZW5ndGggLSBsb29wZWRTbGlkZXMgKiAzICsgYWN0aXZlSW5kZXg7XG4gICAgbmV3SW5kZXggKz0gbG9vcGVkU2xpZGVzO1xuICAgIHZhciBzbGlkZUNoYW5nZWQgPSBzd2lwZXIuc2xpZGVUbyhuZXdJbmRleCwgMCwgZmFsc2UsIHRydWUpO1xuXG4gICAgaWYgKHNsaWRlQ2hhbmdlZCAmJiBkaWZmICE9PSAwKSB7XG4gICAgICBzd2lwZXIuc2V0VHJhbnNsYXRlKChydGwgPyAtc3dpcGVyLnRyYW5zbGF0ZSA6IHN3aXBlci50cmFuc2xhdGUpIC0gZGlmZik7XG4gICAgfVxuICB9IGVsc2UgaWYgKGFjdGl2ZUluZGV4ID49IHNsaWRlcy5sZW5ndGggLSBsb29wZWRTbGlkZXMpIHtcbiAgICAvLyBGaXggRm9yIFBvc2l0aXZlIE92ZXJzbGlkaW5nXG4gICAgbmV3SW5kZXggPSAtc2xpZGVzLmxlbmd0aCArIGFjdGl2ZUluZGV4ICsgbG9vcGVkU2xpZGVzO1xuICAgIG5ld0luZGV4ICs9IGxvb3BlZFNsaWRlcztcblxuICAgIHZhciBfc2xpZGVDaGFuZ2VkID0gc3dpcGVyLnNsaWRlVG8obmV3SW5kZXgsIDAsIGZhbHNlLCB0cnVlKTtcblxuICAgIGlmIChfc2xpZGVDaGFuZ2VkICYmIGRpZmYgIT09IDApIHtcbiAgICAgIHN3aXBlci5zZXRUcmFuc2xhdGUoKHJ0bCA/IC1zd2lwZXIudHJhbnNsYXRlIDogc3dpcGVyLnRyYW5zbGF0ZSkgLSBkaWZmKTtcbiAgICB9XG4gIH1cblxuICBzd2lwZXIuYWxsb3dTbGlkZVByZXYgPSBhbGxvd1NsaWRlUHJldjtcbiAgc3dpcGVyLmFsbG93U2xpZGVOZXh0ID0gYWxsb3dTbGlkZU5leHQ7XG4gIHN3aXBlci5lbWl0KCdsb29wRml4Jyk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkU2xpZGUoaW5kZXgsIHNsaWRlcykge1xuICB2YXIgc3dpcGVyID0gdGhpcztcbiAgdmFyICR3cmFwcGVyRWwgPSBzd2lwZXIuJHdyYXBwZXJFbCxcbiAgICAgIHBhcmFtcyA9IHN3aXBlci5wYXJhbXMsXG4gICAgICBhY3RpdmVJbmRleCA9IHN3aXBlci5hY3RpdmVJbmRleDtcbiAgdmFyIGFjdGl2ZUluZGV4QnVmZmVyID0gYWN0aXZlSW5kZXg7XG5cbiAgaWYgKHBhcmFtcy5sb29wKSB7XG4gICAgYWN0aXZlSW5kZXhCdWZmZXIgLT0gc3dpcGVyLmxvb3BlZFNsaWRlcztcbiAgICBzd2lwZXIubG9vcERlc3Ryb3koKTtcbiAgICBzd2lwZXIuc2xpZGVzID0gJHdyYXBwZXJFbC5jaGlsZHJlbihcIi5cIiArIHBhcmFtcy5zbGlkZUNsYXNzKTtcbiAgfVxuXG4gIHZhciBiYXNlTGVuZ3RoID0gc3dpcGVyLnNsaWRlcy5sZW5ndGg7XG5cbiAgaWYgKGluZGV4IDw9IDApIHtcbiAgICBzd2lwZXIucHJlcGVuZFNsaWRlKHNsaWRlcyk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGluZGV4ID49IGJhc2VMZW5ndGgpIHtcbiAgICBzd2lwZXIuYXBwZW5kU2xpZGUoc2xpZGVzKTtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgbmV3QWN0aXZlSW5kZXggPSBhY3RpdmVJbmRleEJ1ZmZlciA+IGluZGV4ID8gYWN0aXZlSW5kZXhCdWZmZXIgKyAxIDogYWN0aXZlSW5kZXhCdWZmZXI7XG4gIHZhciBzbGlkZXNCdWZmZXIgPSBbXTtcblxuICBmb3IgKHZhciBpID0gYmFzZUxlbmd0aCAtIDE7IGkgPj0gaW5kZXg7IGkgLT0gMSkge1xuICAgIHZhciBjdXJyZW50U2xpZGUgPSBzd2lwZXIuc2xpZGVzLmVxKGkpO1xuICAgIGN1cnJlbnRTbGlkZS5yZW1vdmUoKTtcbiAgICBzbGlkZXNCdWZmZXIudW5zaGlmdChjdXJyZW50U2xpZGUpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBzbGlkZXMgPT09ICdvYmplY3QnICYmICdsZW5ndGgnIGluIHNsaWRlcykge1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBzbGlkZXMubGVuZ3RoOyBfaSArPSAxKSB7XG4gICAgICBpZiAoc2xpZGVzW19pXSkgJHdyYXBwZXJFbC5hcHBlbmQoc2xpZGVzW19pXSk7XG4gICAgfVxuXG4gICAgbmV3QWN0aXZlSW5kZXggPSBhY3RpdmVJbmRleEJ1ZmZlciA+IGluZGV4ID8gYWN0aXZlSW5kZXhCdWZmZXIgKyBzbGlkZXMubGVuZ3RoIDogYWN0aXZlSW5kZXhCdWZmZXI7XG4gIH0gZWxzZSB7XG4gICAgJHdyYXBwZXJFbC5hcHBlbmQoc2xpZGVzKTtcbiAgfVxuXG4gIGZvciAodmFyIF9pMiA9IDA7IF9pMiA8IHNsaWRlc0J1ZmZlci5sZW5ndGg7IF9pMiArPSAxKSB7XG4gICAgJHdyYXBwZXJFbC5hcHBlbmQoc2xpZGVzQnVmZmVyW19pMl0pO1xuICB9XG5cbiAgaWYgKHBhcmFtcy5sb29wKSB7XG4gICAgc3dpcGVyLmxvb3BDcmVhdGUoKTtcbiAgfVxuXG4gIGlmICghKHBhcmFtcy5vYnNlcnZlciAmJiBzd2lwZXIuc3VwcG9ydC5vYnNlcnZlcikpIHtcbiAgICBzd2lwZXIudXBkYXRlKCk7XG4gIH1cblxuICBpZiAocGFyYW1zLmxvb3ApIHtcbiAgICBzd2lwZXIuc2xpZGVUbyhuZXdBY3RpdmVJbmRleCArIHN3aXBlci5sb29wZWRTbGlkZXMsIDAsIGZhbHNlKTtcbiAgfSBlbHNlIHtcbiAgICBzd2lwZXIuc2xpZGVUbyhuZXdBY3RpdmVJbmRleCwgMCwgZmFsc2UpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXBwZW5kU2xpZGUoc2xpZGVzKSB7XG4gIHZhciBzd2lwZXIgPSB0aGlzO1xuICB2YXIgJHdyYXBwZXJFbCA9IHN3aXBlci4kd3JhcHBlckVsLFxuICAgICAgcGFyYW1zID0gc3dpcGVyLnBhcmFtcztcblxuICBpZiAocGFyYW1zLmxvb3ApIHtcbiAgICBzd2lwZXIubG9vcERlc3Ryb3koKTtcbiAgfVxuXG4gIGlmICh0eXBlb2Ygc2xpZGVzID09PSAnb2JqZWN0JyAmJiAnbGVuZ3RoJyBpbiBzbGlkZXMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNsaWRlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKHNsaWRlc1tpXSkgJHdyYXBwZXJFbC5hcHBlbmQoc2xpZGVzW2ldKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgJHdyYXBwZXJFbC5hcHBlbmQoc2xpZGVzKTtcbiAgfVxuXG4gIGlmIChwYXJhbXMubG9vcCkge1xuICAgIHN3aXBlci5sb29wQ3JlYXRlKCk7XG4gIH1cblxuICBpZiAoIShwYXJhbXMub2JzZXJ2ZXIgJiYgc3dpcGVyLnN1cHBvcnQub2JzZXJ2ZXIpKSB7XG4gICAgc3dpcGVyLnVwZGF0ZSgpO1xuICB9XG59IiwiaW1wb3J0IGFwcGVuZFNsaWRlIGZyb20gJy4vYXBwZW5kU2xpZGUnO1xuaW1wb3J0IHByZXBlbmRTbGlkZSBmcm9tICcuL3ByZXBlbmRTbGlkZSc7XG5pbXBvcnQgYWRkU2xpZGUgZnJvbSAnLi9hZGRTbGlkZSc7XG5pbXBvcnQgcmVtb3ZlU2xpZGUgZnJvbSAnLi9yZW1vdmVTbGlkZSc7XG5pbXBvcnQgcmVtb3ZlQWxsU2xpZGVzIGZyb20gJy4vcmVtb3ZlQWxsU2xpZGVzJztcbmV4cG9ydCBkZWZhdWx0IHtcbiAgYXBwZW5kU2xpZGU6IGFwcGVuZFNsaWRlLFxuICBwcmVwZW5kU2xpZGU6IHByZXBlbmRTbGlkZSxcbiAgYWRkU2xpZGU6IGFkZFNsaWRlLFxuICByZW1vdmVTbGlkZTogcmVtb3ZlU2xpZGUsXG4gIHJlbW92ZUFsbFNsaWRlczogcmVtb3ZlQWxsU2xpZGVzXG59OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByZXBlbmRTbGlkZShzbGlkZXMpIHtcbiAgdmFyIHN3aXBlciA9IHRoaXM7XG4gIHZhciBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLFxuICAgICAgJHdyYXBwZXJFbCA9IHN3aXBlci4kd3JhcHBlckVsLFxuICAgICAgYWN0aXZlSW5kZXggPSBzd2lwZXIuYWN0aXZlSW5kZXg7XG5cbiAgaWYgKHBhcmFtcy5sb29wKSB7XG4gICAgc3dpcGVyLmxvb3BEZXN0cm95KCk7XG4gIH1cblxuICB2YXIgbmV3QWN0aXZlSW5kZXggPSBhY3RpdmVJbmRleCArIDE7XG5cbiAgaWYgKHR5cGVvZiBzbGlkZXMgPT09ICdvYmplY3QnICYmICdsZW5ndGgnIGluIHNsaWRlcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2xpZGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAoc2xpZGVzW2ldKSAkd3JhcHBlckVsLnByZXBlbmQoc2xpZGVzW2ldKTtcbiAgICB9XG5cbiAgICBuZXdBY3RpdmVJbmRleCA9IGFjdGl2ZUluZGV4ICsgc2xpZGVzLmxlbmd0aDtcbiAgfSBlbHNlIHtcbiAgICAkd3JhcHBlckVsLnByZXBlbmQoc2xpZGVzKTtcbiAgfVxuXG4gIGlmIChwYXJhbXMubG9vcCkge1xuICAgIHN3aXBlci5sb29wQ3JlYXRlKCk7XG4gIH1cblxuICBpZiAoIShwYXJhbXMub2JzZXJ2ZXIgJiYgc3dpcGVyLnN1cHBvcnQub2JzZXJ2ZXIpKSB7XG4gICAgc3dpcGVyLnVwZGF0ZSgpO1xuICB9XG5cbiAgc3dpcGVyLnNsaWRlVG8obmV3QWN0aXZlSW5kZXgsIDAsIGZhbHNlKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW1vdmVBbGxTbGlkZXMoKSB7XG4gIHZhciBzd2lwZXIgPSB0aGlzO1xuICB2YXIgc2xpZGVzSW5kZXhlcyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3dpcGVyLnNsaWRlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIHNsaWRlc0luZGV4ZXMucHVzaChpKTtcbiAgfVxuXG4gIHN3aXBlci5yZW1vdmVTbGlkZShzbGlkZXNJbmRleGVzKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW1vdmVTbGlkZShzbGlkZXNJbmRleGVzKSB7XG4gIHZhciBzd2lwZXIgPSB0aGlzO1xuICB2YXIgcGFyYW1zID0gc3dpcGVyLnBhcmFtcyxcbiAgICAgICR3cmFwcGVyRWwgPSBzd2lwZXIuJHdyYXBwZXJFbCxcbiAgICAgIGFjdGl2ZUluZGV4ID0gc3dpcGVyLmFjdGl2ZUluZGV4O1xuICB2YXIgYWN0aXZlSW5kZXhCdWZmZXIgPSBhY3RpdmVJbmRleDtcblxuICBpZiAocGFyYW1zLmxvb3ApIHtcbiAgICBhY3RpdmVJbmRleEJ1ZmZlciAtPSBzd2lwZXIubG9vcGVkU2xpZGVzO1xuICAgIHN3aXBlci5sb29wRGVzdHJveSgpO1xuICAgIHN3aXBlci5zbGlkZXMgPSAkd3JhcHBlckVsLmNoaWxkcmVuKFwiLlwiICsgcGFyYW1zLnNsaWRlQ2xhc3MpO1xuICB9XG5cbiAgdmFyIG5ld0FjdGl2ZUluZGV4ID0gYWN0aXZlSW5kZXhCdWZmZXI7XG4gIHZhciBpbmRleFRvUmVtb3ZlO1xuXG4gIGlmICh0eXBlb2Ygc2xpZGVzSW5kZXhlcyA9PT0gJ29iamVjdCcgJiYgJ2xlbmd0aCcgaW4gc2xpZGVzSW5kZXhlcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2xpZGVzSW5kZXhlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaW5kZXhUb1JlbW92ZSA9IHNsaWRlc0luZGV4ZXNbaV07XG4gICAgICBpZiAoc3dpcGVyLnNsaWRlc1tpbmRleFRvUmVtb3ZlXSkgc3dpcGVyLnNsaWRlcy5lcShpbmRleFRvUmVtb3ZlKS5yZW1vdmUoKTtcbiAgICAgIGlmIChpbmRleFRvUmVtb3ZlIDwgbmV3QWN0aXZlSW5kZXgpIG5ld0FjdGl2ZUluZGV4IC09IDE7XG4gICAgfVxuXG4gICAgbmV3QWN0aXZlSW5kZXggPSBNYXRoLm1heChuZXdBY3RpdmVJbmRleCwgMCk7XG4gIH0gZWxzZSB7XG4gICAgaW5kZXhUb1JlbW92ZSA9IHNsaWRlc0luZGV4ZXM7XG4gICAgaWYgKHN3aXBlci5zbGlkZXNbaW5kZXhUb1JlbW92ZV0pIHN3aXBlci5zbGlkZXMuZXEoaW5kZXhUb1JlbW92ZSkucmVtb3ZlKCk7XG4gICAgaWYgKGluZGV4VG9SZW1vdmUgPCBuZXdBY3RpdmVJbmRleCkgbmV3QWN0aXZlSW5kZXggLT0gMTtcbiAgICBuZXdBY3RpdmVJbmRleCA9IE1hdGgubWF4KG5ld0FjdGl2ZUluZGV4LCAwKTtcbiAgfVxuXG4gIGlmIChwYXJhbXMubG9vcCkge1xuICAgIHN3aXBlci5sb29wQ3JlYXRlKCk7XG4gIH1cblxuICBpZiAoIShwYXJhbXMub2JzZXJ2ZXIgJiYgc3dpcGVyLnN1cHBvcnQub2JzZXJ2ZXIpKSB7XG4gICAgc3dpcGVyLnVwZGF0ZSgpO1xuICB9XG5cbiAgaWYgKHBhcmFtcy5sb29wKSB7XG4gICAgc3dpcGVyLnNsaWRlVG8obmV3QWN0aXZlSW5kZXggKyBzd2lwZXIubG9vcGVkU2xpZGVzLCAwLCBmYWxzZSk7XG4gIH0gZWxzZSB7XG4gICAgc3dpcGVyLnNsaWRlVG8obmV3QWN0aXZlSW5kZXgsIDAsIGZhbHNlKTtcbiAgfVxufSIsImltcG9ydCB7IGV4dGVuZCB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWxzJztcbmV4cG9ydCBkZWZhdWx0IHtcbiAgdXNlUGFyYW1zOiBmdW5jdGlvbiB1c2VQYXJhbXMoaW5zdGFuY2VQYXJhbXMpIHtcbiAgICB2YXIgaW5zdGFuY2UgPSB0aGlzO1xuICAgIGlmICghaW5zdGFuY2UubW9kdWxlcykgcmV0dXJuO1xuICAgIE9iamVjdC5rZXlzKGluc3RhbmNlLm1vZHVsZXMpLmZvckVhY2goZnVuY3Rpb24gKG1vZHVsZU5hbWUpIHtcbiAgICAgIHZhciBtb2R1bGUgPSBpbnN0YW5jZS5tb2R1bGVzW21vZHVsZU5hbWVdOyAvLyBFeHRlbmQgcGFyYW1zXG5cbiAgICAgIGlmIChtb2R1bGUucGFyYW1zKSB7XG4gICAgICAgIGV4dGVuZChpbnN0YW5jZVBhcmFtcywgbW9kdWxlLnBhcmFtcyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG4gIHVzZU1vZHVsZXM6IGZ1bmN0aW9uIHVzZU1vZHVsZXMobW9kdWxlc1BhcmFtcykge1xuICAgIGlmIChtb2R1bGVzUGFyYW1zID09PSB2b2lkIDApIHtcbiAgICAgIG1vZHVsZXNQYXJhbXMgPSB7fTtcbiAgICB9XG5cbiAgICB2YXIgaW5zdGFuY2UgPSB0aGlzO1xuICAgIGlmICghaW5zdGFuY2UubW9kdWxlcykgcmV0dXJuO1xuICAgIE9iamVjdC5rZXlzKGluc3RhbmNlLm1vZHVsZXMpLmZvckVhY2goZnVuY3Rpb24gKG1vZHVsZU5hbWUpIHtcbiAgICAgIHZhciBtb2R1bGUgPSBpbnN0YW5jZS5tb2R1bGVzW21vZHVsZU5hbWVdO1xuICAgICAgdmFyIG1vZHVsZVBhcmFtcyA9IG1vZHVsZXNQYXJhbXNbbW9kdWxlTmFtZV0gfHwge307IC8vIEFkZCBldmVudCBsaXN0ZW5lcnNcblxuICAgICAgaWYgKG1vZHVsZS5vbiAmJiBpbnN0YW5jZS5vbikge1xuICAgICAgICBPYmplY3Qua2V5cyhtb2R1bGUub24pLmZvckVhY2goZnVuY3Rpb24gKG1vZHVsZUV2ZW50TmFtZSkge1xuICAgICAgICAgIGluc3RhbmNlLm9uKG1vZHVsZUV2ZW50TmFtZSwgbW9kdWxlLm9uW21vZHVsZUV2ZW50TmFtZV0pO1xuICAgICAgICB9KTtcbiAgICAgIH0gLy8gTW9kdWxlIGNyZWF0ZSBjYWxsYmFja1xuXG5cbiAgICAgIGlmIChtb2R1bGUuY3JlYXRlKSB7XG4gICAgICAgIG1vZHVsZS5jcmVhdGUuYmluZChpbnN0YW5jZSkobW9kdWxlUGFyYW1zKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufTsiLCJpbXBvcnQgc2xpZGVUbyBmcm9tICcuL3NsaWRlVG8nO1xuaW1wb3J0IHNsaWRlVG9Mb29wIGZyb20gJy4vc2xpZGVUb0xvb3AnO1xuaW1wb3J0IHNsaWRlTmV4dCBmcm9tICcuL3NsaWRlTmV4dCc7XG5pbXBvcnQgc2xpZGVQcmV2IGZyb20gJy4vc2xpZGVQcmV2JztcbmltcG9ydCBzbGlkZVJlc2V0IGZyb20gJy4vc2xpZGVSZXNldCc7XG5pbXBvcnQgc2xpZGVUb0Nsb3Nlc3QgZnJvbSAnLi9zbGlkZVRvQ2xvc2VzdCc7XG5pbXBvcnQgc2xpZGVUb0NsaWNrZWRTbGlkZSBmcm9tICcuL3NsaWRlVG9DbGlja2VkU2xpZGUnO1xuZXhwb3J0IGRlZmF1bHQge1xuICBzbGlkZVRvOiBzbGlkZVRvLFxuICBzbGlkZVRvTG9vcDogc2xpZGVUb0xvb3AsXG4gIHNsaWRlTmV4dDogc2xpZGVOZXh0LFxuICBzbGlkZVByZXY6IHNsaWRlUHJldixcbiAgc2xpZGVSZXNldDogc2xpZGVSZXNldCxcbiAgc2xpZGVUb0Nsb3Nlc3Q6IHNsaWRlVG9DbG9zZXN0LFxuICBzbGlkZVRvQ2xpY2tlZFNsaWRlOiBzbGlkZVRvQ2xpY2tlZFNsaWRlXG59OyIsIi8qIGVzbGludCBuby11bnVzZWQtdmFyczogXCJvZmZcIiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2xpZGVOZXh0KHNwZWVkLCBydW5DYWxsYmFja3MsIGludGVybmFsKSB7XG4gIGlmIChzcGVlZCA9PT0gdm9pZCAwKSB7XG4gICAgc3BlZWQgPSB0aGlzLnBhcmFtcy5zcGVlZDtcbiAgfVxuXG4gIGlmIChydW5DYWxsYmFja3MgPT09IHZvaWQgMCkge1xuICAgIHJ1bkNhbGxiYWNrcyA9IHRydWU7XG4gIH1cblxuICB2YXIgc3dpcGVyID0gdGhpcztcbiAgdmFyIHBhcmFtcyA9IHN3aXBlci5wYXJhbXMsXG4gICAgICBhbmltYXRpbmcgPSBzd2lwZXIuYW5pbWF0aW5nLFxuICAgICAgZW5hYmxlZCA9IHN3aXBlci5lbmFibGVkO1xuICBpZiAoIWVuYWJsZWQpIHJldHVybiBzd2lwZXI7XG4gIHZhciBpbmNyZW1lbnQgPSBzd2lwZXIuYWN0aXZlSW5kZXggPCBwYXJhbXMuc2xpZGVzUGVyR3JvdXBTa2lwID8gMSA6IHBhcmFtcy5zbGlkZXNQZXJHcm91cDtcblxuICBpZiAocGFyYW1zLmxvb3ApIHtcbiAgICBpZiAoYW5pbWF0aW5nICYmIHBhcmFtcy5sb29wUHJldmVudHNTbGlkZSkgcmV0dXJuIGZhbHNlO1xuICAgIHN3aXBlci5sb29wRml4KCk7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuXG4gICAgc3dpcGVyLl9jbGllbnRMZWZ0ID0gc3dpcGVyLiR3cmFwcGVyRWxbMF0uY2xpZW50TGVmdDtcbiAgfVxuXG4gIHJldHVybiBzd2lwZXIuc2xpZGVUbyhzd2lwZXIuYWN0aXZlSW5kZXggKyBpbmNyZW1lbnQsIHNwZWVkLCBydW5DYWxsYmFja3MsIGludGVybmFsKTtcbn0iLCIvKiBlc2xpbnQgbm8tdW51c2VkLXZhcnM6IFwib2ZmXCIgKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNsaWRlUHJldihzcGVlZCwgcnVuQ2FsbGJhY2tzLCBpbnRlcm5hbCkge1xuICBpZiAoc3BlZWQgPT09IHZvaWQgMCkge1xuICAgIHNwZWVkID0gdGhpcy5wYXJhbXMuc3BlZWQ7XG4gIH1cblxuICBpZiAocnVuQ2FsbGJhY2tzID09PSB2b2lkIDApIHtcbiAgICBydW5DYWxsYmFja3MgPSB0cnVlO1xuICB9XG5cbiAgdmFyIHN3aXBlciA9IHRoaXM7XG4gIHZhciBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLFxuICAgICAgYW5pbWF0aW5nID0gc3dpcGVyLmFuaW1hdGluZyxcbiAgICAgIHNuYXBHcmlkID0gc3dpcGVyLnNuYXBHcmlkLFxuICAgICAgc2xpZGVzR3JpZCA9IHN3aXBlci5zbGlkZXNHcmlkLFxuICAgICAgcnRsVHJhbnNsYXRlID0gc3dpcGVyLnJ0bFRyYW5zbGF0ZSxcbiAgICAgIGVuYWJsZWQgPSBzd2lwZXIuZW5hYmxlZDtcbiAgaWYgKCFlbmFibGVkKSByZXR1cm4gc3dpcGVyO1xuXG4gIGlmIChwYXJhbXMubG9vcCkge1xuICAgIGlmIChhbmltYXRpbmcgJiYgcGFyYW1zLmxvb3BQcmV2ZW50c1NsaWRlKSByZXR1cm4gZmFsc2U7XG4gICAgc3dpcGVyLmxvb3BGaXgoKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG5cbiAgICBzd2lwZXIuX2NsaWVudExlZnQgPSBzd2lwZXIuJHdyYXBwZXJFbFswXS5jbGllbnRMZWZ0O1xuICB9XG5cbiAgdmFyIHRyYW5zbGF0ZSA9IHJ0bFRyYW5zbGF0ZSA/IHN3aXBlci50cmFuc2xhdGUgOiAtc3dpcGVyLnRyYW5zbGF0ZTtcblxuICBmdW5jdGlvbiBub3JtYWxpemUodmFsKSB7XG4gICAgaWYgKHZhbCA8IDApIHJldHVybiAtTWF0aC5mbG9vcihNYXRoLmFicyh2YWwpKTtcbiAgICByZXR1cm4gTWF0aC5mbG9vcih2YWwpO1xuICB9XG5cbiAgdmFyIG5vcm1hbGl6ZWRUcmFuc2xhdGUgPSBub3JtYWxpemUodHJhbnNsYXRlKTtcbiAgdmFyIG5vcm1hbGl6ZWRTbmFwR3JpZCA9IHNuYXBHcmlkLm1hcChmdW5jdGlvbiAodmFsKSB7XG4gICAgcmV0dXJuIG5vcm1hbGl6ZSh2YWwpO1xuICB9KTtcbiAgdmFyIHByZXZTbmFwID0gc25hcEdyaWRbbm9ybWFsaXplZFNuYXBHcmlkLmluZGV4T2Yobm9ybWFsaXplZFRyYW5zbGF0ZSkgLSAxXTtcblxuICBpZiAodHlwZW9mIHByZXZTbmFwID09PSAndW5kZWZpbmVkJyAmJiBwYXJhbXMuY3NzTW9kZSkge1xuICAgIHNuYXBHcmlkLmZvckVhY2goZnVuY3Rpb24gKHNuYXApIHtcbiAgICAgIGlmICghcHJldlNuYXAgJiYgbm9ybWFsaXplZFRyYW5zbGF0ZSA+PSBzbmFwKSBwcmV2U25hcCA9IHNuYXA7XG4gICAgfSk7XG4gIH1cblxuICB2YXIgcHJldkluZGV4O1xuXG4gIGlmICh0eXBlb2YgcHJldlNuYXAgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgcHJldkluZGV4ID0gc2xpZGVzR3JpZC5pbmRleE9mKHByZXZTbmFwKTtcbiAgICBpZiAocHJldkluZGV4IDwgMCkgcHJldkluZGV4ID0gc3dpcGVyLmFjdGl2ZUluZGV4IC0gMTtcbiAgfVxuXG4gIHJldHVybiBzd2lwZXIuc2xpZGVUbyhwcmV2SW5kZXgsIHNwZWVkLCBydW5DYWxsYmFja3MsIGludGVybmFsKTtcbn0iLCIvKiBlc2xpbnQgbm8tdW51c2VkLXZhcnM6IFwib2ZmXCIgKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNsaWRlUmVzZXQoc3BlZWQsIHJ1bkNhbGxiYWNrcywgaW50ZXJuYWwpIHtcbiAgaWYgKHNwZWVkID09PSB2b2lkIDApIHtcbiAgICBzcGVlZCA9IHRoaXMucGFyYW1zLnNwZWVkO1xuICB9XG5cbiAgaWYgKHJ1bkNhbGxiYWNrcyA9PT0gdm9pZCAwKSB7XG4gICAgcnVuQ2FsbGJhY2tzID0gdHJ1ZTtcbiAgfVxuXG4gIHZhciBzd2lwZXIgPSB0aGlzO1xuICByZXR1cm4gc3dpcGVyLnNsaWRlVG8oc3dpcGVyLmFjdGl2ZUluZGV4LCBzcGVlZCwgcnVuQ2FsbGJhY2tzLCBpbnRlcm5hbCk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2xpZGVUbyhpbmRleCwgc3BlZWQsIHJ1bkNhbGxiYWNrcywgaW50ZXJuYWwsIGluaXRpYWwpIHtcbiAgaWYgKGluZGV4ID09PSB2b2lkIDApIHtcbiAgICBpbmRleCA9IDA7XG4gIH1cblxuICBpZiAoc3BlZWQgPT09IHZvaWQgMCkge1xuICAgIHNwZWVkID0gdGhpcy5wYXJhbXMuc3BlZWQ7XG4gIH1cblxuICBpZiAocnVuQ2FsbGJhY2tzID09PSB2b2lkIDApIHtcbiAgICBydW5DYWxsYmFja3MgPSB0cnVlO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBpbmRleCAhPT0gJ251bWJlcicgJiYgdHlwZW9mIGluZGV4ICE9PSAnc3RyaW5nJykge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSAnaW5kZXgnIGFyZ3VtZW50IGNhbm5vdCBoYXZlIHR5cGUgb3RoZXIgdGhhbiAnbnVtYmVyJyBvciAnc3RyaW5nJy4gW1wiICsgdHlwZW9mIGluZGV4ICsgXCJdIGdpdmVuLlwiKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgaW5kZXggPT09ICdzdHJpbmcnKSB7XG4gICAgLyoqXG4gICAgICogVGhlIGBpbmRleGAgYXJndW1lbnQgY29udmVydGVkIGZyb20gYHN0cmluZ2AgdG8gYG51bWJlcmAuXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICB2YXIgaW5kZXhBc051bWJlciA9IHBhcnNlSW50KGluZGV4LCAxMCk7XG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBgaW5kZXhgIGFyZ3VtZW50IGlzIGEgdmFsaWQgYG51bWJlcmBcbiAgICAgKiBhZnRlciBiZWluZyBjb252ZXJ0ZWQgZnJvbSB0aGUgYHN0cmluZ2AgdHlwZS5cbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cblxuICAgIHZhciBpc1ZhbGlkTnVtYmVyID0gaXNGaW5pdGUoaW5kZXhBc051bWJlcik7XG5cbiAgICBpZiAoIWlzVmFsaWROdW1iZXIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSBwYXNzZWQtaW4gJ2luZGV4JyAoc3RyaW5nKSBjb3VsZG4ndCBiZSBjb252ZXJ0ZWQgdG8gJ251bWJlcicuIFtcIiArIGluZGV4ICsgXCJdIGdpdmVuLlwiKTtcbiAgICB9IC8vIEtub3dpbmcgdGhhdCB0aGUgY29udmVydGVkIGBpbmRleGAgaXMgYSB2YWxpZCBudW1iZXIsXG4gICAgLy8gd2UgY2FuIHVwZGF0ZSB0aGUgb3JpZ2luYWwgYXJndW1lbnQncyB2YWx1ZS5cblxuXG4gICAgaW5kZXggPSBpbmRleEFzTnVtYmVyO1xuICB9XG5cbiAgdmFyIHN3aXBlciA9IHRoaXM7XG4gIHZhciBzbGlkZUluZGV4ID0gaW5kZXg7XG4gIGlmIChzbGlkZUluZGV4IDwgMCkgc2xpZGVJbmRleCA9IDA7XG4gIHZhciBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLFxuICAgICAgc25hcEdyaWQgPSBzd2lwZXIuc25hcEdyaWQsXG4gICAgICBzbGlkZXNHcmlkID0gc3dpcGVyLnNsaWRlc0dyaWQsXG4gICAgICBwcmV2aW91c0luZGV4ID0gc3dpcGVyLnByZXZpb3VzSW5kZXgsXG4gICAgICBhY3RpdmVJbmRleCA9IHN3aXBlci5hY3RpdmVJbmRleCxcbiAgICAgIHJ0bCA9IHN3aXBlci5ydGxUcmFuc2xhdGUsXG4gICAgICB3cmFwcGVyRWwgPSBzd2lwZXIud3JhcHBlckVsLFxuICAgICAgZW5hYmxlZCA9IHN3aXBlci5lbmFibGVkO1xuXG4gIGlmIChzd2lwZXIuYW5pbWF0aW5nICYmIHBhcmFtcy5wcmV2ZW50SW50ZXJhY3Rpb25PblRyYW5zaXRpb24gfHwgIWVuYWJsZWQgJiYgIWludGVybmFsICYmICFpbml0aWFsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIHNraXAgPSBNYXRoLm1pbihzd2lwZXIucGFyYW1zLnNsaWRlc1Blckdyb3VwU2tpcCwgc2xpZGVJbmRleCk7XG4gIHZhciBzbmFwSW5kZXggPSBza2lwICsgTWF0aC5mbG9vcigoc2xpZGVJbmRleCAtIHNraXApIC8gc3dpcGVyLnBhcmFtcy5zbGlkZXNQZXJHcm91cCk7XG4gIGlmIChzbmFwSW5kZXggPj0gc25hcEdyaWQubGVuZ3RoKSBzbmFwSW5kZXggPSBzbmFwR3JpZC5sZW5ndGggLSAxO1xuXG4gIGlmICgoYWN0aXZlSW5kZXggfHwgcGFyYW1zLmluaXRpYWxTbGlkZSB8fCAwKSA9PT0gKHByZXZpb3VzSW5kZXggfHwgMCkgJiYgcnVuQ2FsbGJhY2tzKSB7XG4gICAgc3dpcGVyLmVtaXQoJ2JlZm9yZVNsaWRlQ2hhbmdlU3RhcnQnKTtcbiAgfVxuXG4gIHZhciB0cmFuc2xhdGUgPSAtc25hcEdyaWRbc25hcEluZGV4XTsgLy8gVXBkYXRlIHByb2dyZXNzXG5cbiAgc3dpcGVyLnVwZGF0ZVByb2dyZXNzKHRyYW5zbGF0ZSk7IC8vIE5vcm1hbGl6ZSBzbGlkZUluZGV4XG5cbiAgaWYgKHBhcmFtcy5ub3JtYWxpemVTbGlkZUluZGV4KSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzbGlkZXNHcmlkLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICB2YXIgbm9ybWFsaXplZFRyYW5zbGF0ZSA9IC1NYXRoLmZsb29yKHRyYW5zbGF0ZSAqIDEwMCk7XG4gICAgICB2YXIgbm9ybWFsaXplZEdpcmQgPSBNYXRoLmZsb29yKHNsaWRlc0dyaWRbaV0gKiAxMDApO1xuICAgICAgdmFyIG5vcm1hbGl6ZWRHcmlkTmV4dCA9IE1hdGguZmxvb3Ioc2xpZGVzR3JpZFtpICsgMV0gKiAxMDApO1xuXG4gICAgICBpZiAodHlwZW9mIHNsaWRlc0dyaWRbaSArIDFdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBpZiAobm9ybWFsaXplZFRyYW5zbGF0ZSA+PSBub3JtYWxpemVkR2lyZCAmJiBub3JtYWxpemVkVHJhbnNsYXRlIDwgbm9ybWFsaXplZEdyaWROZXh0IC0gKG5vcm1hbGl6ZWRHcmlkTmV4dCAtIG5vcm1hbGl6ZWRHaXJkKSAvIDIpIHtcbiAgICAgICAgICBzbGlkZUluZGV4ID0gaTtcbiAgICAgICAgfSBlbHNlIGlmIChub3JtYWxpemVkVHJhbnNsYXRlID49IG5vcm1hbGl6ZWRHaXJkICYmIG5vcm1hbGl6ZWRUcmFuc2xhdGUgPCBub3JtYWxpemVkR3JpZE5leHQpIHtcbiAgICAgICAgICBzbGlkZUluZGV4ID0gaSArIDE7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAobm9ybWFsaXplZFRyYW5zbGF0ZSA+PSBub3JtYWxpemVkR2lyZCkge1xuICAgICAgICBzbGlkZUluZGV4ID0gaTtcbiAgICAgIH1cbiAgICB9XG4gIH0gLy8gRGlyZWN0aW9ucyBsb2Nrc1xuXG5cbiAgaWYgKHN3aXBlci5pbml0aWFsaXplZCAmJiBzbGlkZUluZGV4ICE9PSBhY3RpdmVJbmRleCkge1xuICAgIGlmICghc3dpcGVyLmFsbG93U2xpZGVOZXh0ICYmIHRyYW5zbGF0ZSA8IHN3aXBlci50cmFuc2xhdGUgJiYgdHJhbnNsYXRlIDwgc3dpcGVyLm1pblRyYW5zbGF0ZSgpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKCFzd2lwZXIuYWxsb3dTbGlkZVByZXYgJiYgdHJhbnNsYXRlID4gc3dpcGVyLnRyYW5zbGF0ZSAmJiB0cmFuc2xhdGUgPiBzd2lwZXIubWF4VHJhbnNsYXRlKCkpIHtcbiAgICAgIGlmICgoYWN0aXZlSW5kZXggfHwgMCkgIT09IHNsaWRlSW5kZXgpIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICB2YXIgZGlyZWN0aW9uO1xuICBpZiAoc2xpZGVJbmRleCA+IGFjdGl2ZUluZGV4KSBkaXJlY3Rpb24gPSAnbmV4dCc7ZWxzZSBpZiAoc2xpZGVJbmRleCA8IGFjdGl2ZUluZGV4KSBkaXJlY3Rpb24gPSAncHJldic7ZWxzZSBkaXJlY3Rpb24gPSAncmVzZXQnOyAvLyBVcGRhdGUgSW5kZXhcblxuICBpZiAocnRsICYmIC10cmFuc2xhdGUgPT09IHN3aXBlci50cmFuc2xhdGUgfHwgIXJ0bCAmJiB0cmFuc2xhdGUgPT09IHN3aXBlci50cmFuc2xhdGUpIHtcbiAgICBzd2lwZXIudXBkYXRlQWN0aXZlSW5kZXgoc2xpZGVJbmRleCk7IC8vIFVwZGF0ZSBIZWlnaHRcblxuICAgIGlmIChwYXJhbXMuYXV0b0hlaWdodCkge1xuICAgICAgc3dpcGVyLnVwZGF0ZUF1dG9IZWlnaHQoKTtcbiAgICB9XG5cbiAgICBzd2lwZXIudXBkYXRlU2xpZGVzQ2xhc3NlcygpO1xuXG4gICAgaWYgKHBhcmFtcy5lZmZlY3QgIT09ICdzbGlkZScpIHtcbiAgICAgIHN3aXBlci5zZXRUcmFuc2xhdGUodHJhbnNsYXRlKTtcbiAgICB9XG5cbiAgICBpZiAoZGlyZWN0aW9uICE9PSAncmVzZXQnKSB7XG4gICAgICBzd2lwZXIudHJhbnNpdGlvblN0YXJ0KHJ1bkNhbGxiYWNrcywgZGlyZWN0aW9uKTtcbiAgICAgIHN3aXBlci50cmFuc2l0aW9uRW5kKHJ1bkNhbGxiYWNrcywgZGlyZWN0aW9uKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAocGFyYW1zLmNzc01vZGUpIHtcbiAgICB2YXIgaXNIID0gc3dpcGVyLmlzSG9yaXpvbnRhbCgpO1xuICAgIHZhciB0ID0gLXRyYW5zbGF0ZTtcblxuICAgIGlmIChydGwpIHtcbiAgICAgIHQgPSB3cmFwcGVyRWwuc2Nyb2xsV2lkdGggLSB3cmFwcGVyRWwub2Zmc2V0V2lkdGggLSB0O1xuICAgIH1cblxuICAgIGlmIChzcGVlZCA9PT0gMCkge1xuICAgICAgd3JhcHBlckVsW2lzSCA/ICdzY3JvbGxMZWZ0JyA6ICdzY3JvbGxUb3AnXSA9IHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgICAgaWYgKHdyYXBwZXJFbC5zY3JvbGxUbykge1xuICAgICAgICB2YXIgX3dyYXBwZXJFbCRzY3JvbGxUbztcblxuICAgICAgICB3cmFwcGVyRWwuc2Nyb2xsVG8oKF93cmFwcGVyRWwkc2Nyb2xsVG8gPSB7fSwgX3dyYXBwZXJFbCRzY3JvbGxUb1tpc0ggPyAnbGVmdCcgOiAndG9wJ10gPSB0LCBfd3JhcHBlckVsJHNjcm9sbFRvLmJlaGF2aW9yID0gJ3Ntb290aCcsIF93cmFwcGVyRWwkc2Nyb2xsVG8pKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdyYXBwZXJFbFtpc0ggPyAnc2Nyb2xsTGVmdCcgOiAnc2Nyb2xsVG9wJ10gPSB0O1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKHNwZWVkID09PSAwKSB7XG4gICAgc3dpcGVyLnNldFRyYW5zaXRpb24oMCk7XG4gICAgc3dpcGVyLnNldFRyYW5zbGF0ZSh0cmFuc2xhdGUpO1xuICAgIHN3aXBlci51cGRhdGVBY3RpdmVJbmRleChzbGlkZUluZGV4KTtcbiAgICBzd2lwZXIudXBkYXRlU2xpZGVzQ2xhc3NlcygpO1xuICAgIHN3aXBlci5lbWl0KCdiZWZvcmVUcmFuc2l0aW9uU3RhcnQnLCBzcGVlZCwgaW50ZXJuYWwpO1xuICAgIHN3aXBlci50cmFuc2l0aW9uU3RhcnQocnVuQ2FsbGJhY2tzLCBkaXJlY3Rpb24pO1xuICAgIHN3aXBlci50cmFuc2l0aW9uRW5kKHJ1bkNhbGxiYWNrcywgZGlyZWN0aW9uKTtcbiAgfSBlbHNlIHtcbiAgICBzd2lwZXIuc2V0VHJhbnNpdGlvbihzcGVlZCk7XG4gICAgc3dpcGVyLnNldFRyYW5zbGF0ZSh0cmFuc2xhdGUpO1xuICAgIHN3aXBlci51cGRhdGVBY3RpdmVJbmRleChzbGlkZUluZGV4KTtcbiAgICBzd2lwZXIudXBkYXRlU2xpZGVzQ2xhc3NlcygpO1xuICAgIHN3aXBlci5lbWl0KCdiZWZvcmVUcmFuc2l0aW9uU3RhcnQnLCBzcGVlZCwgaW50ZXJuYWwpO1xuICAgIHN3aXBlci50cmFuc2l0aW9uU3RhcnQocnVuQ2FsbGJhY2tzLCBkaXJlY3Rpb24pO1xuXG4gICAgaWYgKCFzd2lwZXIuYW5pbWF0aW5nKSB7XG4gICAgICBzd2lwZXIuYW5pbWF0aW5nID0gdHJ1ZTtcblxuICAgICAgaWYgKCFzd2lwZXIub25TbGlkZVRvV3JhcHBlclRyYW5zaXRpb25FbmQpIHtcbiAgICAgICAgc3dpcGVyLm9uU2xpZGVUb1dyYXBwZXJUcmFuc2l0aW9uRW5kID0gZnVuY3Rpb24gdHJhbnNpdGlvbkVuZChlKSB7XG4gICAgICAgICAgaWYgKCFzd2lwZXIgfHwgc3dpcGVyLmRlc3Ryb3llZCkgcmV0dXJuO1xuICAgICAgICAgIGlmIChlLnRhcmdldCAhPT0gdGhpcykgcmV0dXJuO1xuICAgICAgICAgIHN3aXBlci4kd3JhcHBlckVsWzBdLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBzd2lwZXIub25TbGlkZVRvV3JhcHBlclRyYW5zaXRpb25FbmQpO1xuICAgICAgICAgIHN3aXBlci4kd3JhcHBlckVsWzBdLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3dlYmtpdFRyYW5zaXRpb25FbmQnLCBzd2lwZXIub25TbGlkZVRvV3JhcHBlclRyYW5zaXRpb25FbmQpO1xuICAgICAgICAgIHN3aXBlci5vblNsaWRlVG9XcmFwcGVyVHJhbnNpdGlvbkVuZCA9IG51bGw7XG4gICAgICAgICAgZGVsZXRlIHN3aXBlci5vblNsaWRlVG9XcmFwcGVyVHJhbnNpdGlvbkVuZDtcbiAgICAgICAgICBzd2lwZXIudHJhbnNpdGlvbkVuZChydW5DYWxsYmFja3MsIGRpcmVjdGlvbik7XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIHN3aXBlci4kd3JhcHBlckVsWzBdLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBzd2lwZXIub25TbGlkZVRvV3JhcHBlclRyYW5zaXRpb25FbmQpO1xuICAgICAgc3dpcGVyLiR3cmFwcGVyRWxbMF0uYWRkRXZlbnRMaXN0ZW5lcignd2Via2l0VHJhbnNpdGlvbkVuZCcsIHN3aXBlci5vblNsaWRlVG9XcmFwcGVyVHJhbnNpdGlvbkVuZCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59IiwiaW1wb3J0ICQgZnJvbSAnLi4vLi4vLi4vdXRpbHMvZG9tJztcbmltcG9ydCB7IG5leHRUaWNrIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvdXRpbHMnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2xpZGVUb0NsaWNrZWRTbGlkZSgpIHtcbiAgdmFyIHN3aXBlciA9IHRoaXM7XG4gIHZhciBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLFxuICAgICAgJHdyYXBwZXJFbCA9IHN3aXBlci4kd3JhcHBlckVsO1xuICB2YXIgc2xpZGVzUGVyVmlldyA9IHBhcmFtcy5zbGlkZXNQZXJWaWV3ID09PSAnYXV0bycgPyBzd2lwZXIuc2xpZGVzUGVyVmlld0R5bmFtaWMoKSA6IHBhcmFtcy5zbGlkZXNQZXJWaWV3O1xuICB2YXIgc2xpZGVUb0luZGV4ID0gc3dpcGVyLmNsaWNrZWRJbmRleDtcbiAgdmFyIHJlYWxJbmRleDtcblxuICBpZiAocGFyYW1zLmxvb3ApIHtcbiAgICBpZiAoc3dpcGVyLmFuaW1hdGluZykgcmV0dXJuO1xuICAgIHJlYWxJbmRleCA9IHBhcnNlSW50KCQoc3dpcGVyLmNsaWNrZWRTbGlkZSkuYXR0cignZGF0YS1zd2lwZXItc2xpZGUtaW5kZXgnKSwgMTApO1xuXG4gICAgaWYgKHBhcmFtcy5jZW50ZXJlZFNsaWRlcykge1xuICAgICAgaWYgKHNsaWRlVG9JbmRleCA8IHN3aXBlci5sb29wZWRTbGlkZXMgLSBzbGlkZXNQZXJWaWV3IC8gMiB8fCBzbGlkZVRvSW5kZXggPiBzd2lwZXIuc2xpZGVzLmxlbmd0aCAtIHN3aXBlci5sb29wZWRTbGlkZXMgKyBzbGlkZXNQZXJWaWV3IC8gMikge1xuICAgICAgICBzd2lwZXIubG9vcEZpeCgpO1xuICAgICAgICBzbGlkZVRvSW5kZXggPSAkd3JhcHBlckVsLmNoaWxkcmVuKFwiLlwiICsgcGFyYW1zLnNsaWRlQ2xhc3MgKyBcIltkYXRhLXN3aXBlci1zbGlkZS1pbmRleD1cXFwiXCIgKyByZWFsSW5kZXggKyBcIlxcXCJdOm5vdCguXCIgKyBwYXJhbXMuc2xpZGVEdXBsaWNhdGVDbGFzcyArIFwiKVwiKS5lcSgwKS5pbmRleCgpO1xuICAgICAgICBuZXh0VGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgc3dpcGVyLnNsaWRlVG8oc2xpZGVUb0luZGV4KTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzd2lwZXIuc2xpZGVUbyhzbGlkZVRvSW5kZXgpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoc2xpZGVUb0luZGV4ID4gc3dpcGVyLnNsaWRlcy5sZW5ndGggLSBzbGlkZXNQZXJWaWV3KSB7XG4gICAgICBzd2lwZXIubG9vcEZpeCgpO1xuICAgICAgc2xpZGVUb0luZGV4ID0gJHdyYXBwZXJFbC5jaGlsZHJlbihcIi5cIiArIHBhcmFtcy5zbGlkZUNsYXNzICsgXCJbZGF0YS1zd2lwZXItc2xpZGUtaW5kZXg9XFxcIlwiICsgcmVhbEluZGV4ICsgXCJcXFwiXTpub3QoLlwiICsgcGFyYW1zLnNsaWRlRHVwbGljYXRlQ2xhc3MgKyBcIilcIikuZXEoMCkuaW5kZXgoKTtcbiAgICAgIG5leHRUaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc3dpcGVyLnNsaWRlVG8oc2xpZGVUb0luZGV4KTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzd2lwZXIuc2xpZGVUbyhzbGlkZVRvSW5kZXgpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBzd2lwZXIuc2xpZGVUbyhzbGlkZVRvSW5kZXgpO1xuICB9XG59IiwiLyogZXNsaW50IG5vLXVudXNlZC12YXJzOiBcIm9mZlwiICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzbGlkZVRvQ2xvc2VzdChzcGVlZCwgcnVuQ2FsbGJhY2tzLCBpbnRlcm5hbCwgdGhyZXNob2xkKSB7XG4gIGlmIChzcGVlZCA9PT0gdm9pZCAwKSB7XG4gICAgc3BlZWQgPSB0aGlzLnBhcmFtcy5zcGVlZDtcbiAgfVxuXG4gIGlmIChydW5DYWxsYmFja3MgPT09IHZvaWQgMCkge1xuICAgIHJ1bkNhbGxiYWNrcyA9IHRydWU7XG4gIH1cblxuICBpZiAodGhyZXNob2xkID09PSB2b2lkIDApIHtcbiAgICB0aHJlc2hvbGQgPSAwLjU7XG4gIH1cblxuICB2YXIgc3dpcGVyID0gdGhpcztcbiAgdmFyIGluZGV4ID0gc3dpcGVyLmFjdGl2ZUluZGV4O1xuICB2YXIgc2tpcCA9IE1hdGgubWluKHN3aXBlci5wYXJhbXMuc2xpZGVzUGVyR3JvdXBTa2lwLCBpbmRleCk7XG4gIHZhciBzbmFwSW5kZXggPSBza2lwICsgTWF0aC5mbG9vcigoaW5kZXggLSBza2lwKSAvIHN3aXBlci5wYXJhbXMuc2xpZGVzUGVyR3JvdXApO1xuICB2YXIgdHJhbnNsYXRlID0gc3dpcGVyLnJ0bFRyYW5zbGF0ZSA/IHN3aXBlci50cmFuc2xhdGUgOiAtc3dpcGVyLnRyYW5zbGF0ZTtcblxuICBpZiAodHJhbnNsYXRlID49IHN3aXBlci5zbmFwR3JpZFtzbmFwSW5kZXhdKSB7XG4gICAgLy8gVGhlIGN1cnJlbnQgdHJhbnNsYXRlIGlzIG9uIG9yIGFmdGVyIHRoZSBjdXJyZW50IHNuYXAgaW5kZXgsIHNvIHRoZSBjaG9pY2VcbiAgICAvLyBpcyBiZXR3ZWVuIHRoZSBjdXJyZW50IGluZGV4IGFuZCB0aGUgb25lIGFmdGVyIGl0LlxuICAgIHZhciBjdXJyZW50U25hcCA9IHN3aXBlci5zbmFwR3JpZFtzbmFwSW5kZXhdO1xuICAgIHZhciBuZXh0U25hcCA9IHN3aXBlci5zbmFwR3JpZFtzbmFwSW5kZXggKyAxXTtcblxuICAgIGlmICh0cmFuc2xhdGUgLSBjdXJyZW50U25hcCA+IChuZXh0U25hcCAtIGN1cnJlbnRTbmFwKSAqIHRocmVzaG9sZCkge1xuICAgICAgaW5kZXggKz0gc3dpcGVyLnBhcmFtcy5zbGlkZXNQZXJHcm91cDtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gVGhlIGN1cnJlbnQgdHJhbnNsYXRlIGlzIGJlZm9yZSB0aGUgY3VycmVudCBzbmFwIGluZGV4LCBzbyB0aGUgY2hvaWNlXG4gICAgLy8gaXMgYmV0d2VlbiB0aGUgY3VycmVudCBpbmRleCBhbmQgdGhlIG9uZSBiZWZvcmUgaXQuXG4gICAgdmFyIHByZXZTbmFwID0gc3dpcGVyLnNuYXBHcmlkW3NuYXBJbmRleCAtIDFdO1xuICAgIHZhciBfY3VycmVudFNuYXAgPSBzd2lwZXIuc25hcEdyaWRbc25hcEluZGV4XTtcblxuICAgIGlmICh0cmFuc2xhdGUgLSBwcmV2U25hcCA8PSAoX2N1cnJlbnRTbmFwIC0gcHJldlNuYXApICogdGhyZXNob2xkKSB7XG4gICAgICBpbmRleCAtPSBzd2lwZXIucGFyYW1zLnNsaWRlc1Blckdyb3VwO1xuICAgIH1cbiAgfVxuXG4gIGluZGV4ID0gTWF0aC5tYXgoaW5kZXgsIDApO1xuICBpbmRleCA9IE1hdGgubWluKGluZGV4LCBzd2lwZXIuc2xpZGVzR3JpZC5sZW5ndGggLSAxKTtcbiAgcmV0dXJuIHN3aXBlci5zbGlkZVRvKGluZGV4LCBzcGVlZCwgcnVuQ2FsbGJhY2tzLCBpbnRlcm5hbCk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2xpZGVUb0xvb3AoaW5kZXgsIHNwZWVkLCBydW5DYWxsYmFja3MsIGludGVybmFsKSB7XG4gIGlmIChpbmRleCA9PT0gdm9pZCAwKSB7XG4gICAgaW5kZXggPSAwO1xuICB9XG5cbiAgaWYgKHNwZWVkID09PSB2b2lkIDApIHtcbiAgICBzcGVlZCA9IHRoaXMucGFyYW1zLnNwZWVkO1xuICB9XG5cbiAgaWYgKHJ1bkNhbGxiYWNrcyA9PT0gdm9pZCAwKSB7XG4gICAgcnVuQ2FsbGJhY2tzID0gdHJ1ZTtcbiAgfVxuXG4gIHZhciBzd2lwZXIgPSB0aGlzO1xuICB2YXIgbmV3SW5kZXggPSBpbmRleDtcblxuICBpZiAoc3dpcGVyLnBhcmFtcy5sb29wKSB7XG4gICAgbmV3SW5kZXggKz0gc3dpcGVyLmxvb3BlZFNsaWRlcztcbiAgfVxuXG4gIHJldHVybiBzd2lwZXIuc2xpZGVUbyhuZXdJbmRleCwgc3BlZWQsIHJ1bkNhbGxiYWNrcywgaW50ZXJuYWwpO1xufSIsImltcG9ydCBzZXRUcmFuc2l0aW9uIGZyb20gJy4vc2V0VHJhbnNpdGlvbic7XG5pbXBvcnQgdHJhbnNpdGlvblN0YXJ0IGZyb20gJy4vdHJhbnNpdGlvblN0YXJ0JztcbmltcG9ydCB0cmFuc2l0aW9uRW5kIGZyb20gJy4vdHJhbnNpdGlvbkVuZCc7XG5leHBvcnQgZGVmYXVsdCB7XG4gIHNldFRyYW5zaXRpb246IHNldFRyYW5zaXRpb24sXG4gIHRyYW5zaXRpb25TdGFydDogdHJhbnNpdGlvblN0YXJ0LFxuICB0cmFuc2l0aW9uRW5kOiB0cmFuc2l0aW9uRW5kXG59OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldFRyYW5zaXRpb24oZHVyYXRpb24sIGJ5Q29udHJvbGxlcikge1xuICB2YXIgc3dpcGVyID0gdGhpcztcblxuICBpZiAoIXN3aXBlci5wYXJhbXMuY3NzTW9kZSkge1xuICAgIHN3aXBlci4kd3JhcHBlckVsLnRyYW5zaXRpb24oZHVyYXRpb24pO1xuICB9XG5cbiAgc3dpcGVyLmVtaXQoJ3NldFRyYW5zaXRpb24nLCBkdXJhdGlvbiwgYnlDb250cm9sbGVyKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0cmFuc2l0aW9uRW5kKHJ1bkNhbGxiYWNrcywgZGlyZWN0aW9uKSB7XG4gIGlmIChydW5DYWxsYmFja3MgPT09IHZvaWQgMCkge1xuICAgIHJ1bkNhbGxiYWNrcyA9IHRydWU7XG4gIH1cblxuICB2YXIgc3dpcGVyID0gdGhpcztcbiAgdmFyIGFjdGl2ZUluZGV4ID0gc3dpcGVyLmFjdGl2ZUluZGV4LFxuICAgICAgcHJldmlvdXNJbmRleCA9IHN3aXBlci5wcmV2aW91c0luZGV4LFxuICAgICAgcGFyYW1zID0gc3dpcGVyLnBhcmFtcztcbiAgc3dpcGVyLmFuaW1hdGluZyA9IGZhbHNlO1xuICBpZiAocGFyYW1zLmNzc01vZGUpIHJldHVybjtcbiAgc3dpcGVyLnNldFRyYW5zaXRpb24oMCk7XG4gIHZhciBkaXIgPSBkaXJlY3Rpb247XG5cbiAgaWYgKCFkaXIpIHtcbiAgICBpZiAoYWN0aXZlSW5kZXggPiBwcmV2aW91c0luZGV4KSBkaXIgPSAnbmV4dCc7ZWxzZSBpZiAoYWN0aXZlSW5kZXggPCBwcmV2aW91c0luZGV4KSBkaXIgPSAncHJldic7ZWxzZSBkaXIgPSAncmVzZXQnO1xuICB9XG5cbiAgc3dpcGVyLmVtaXQoJ3RyYW5zaXRpb25FbmQnKTtcblxuICBpZiAocnVuQ2FsbGJhY2tzICYmIGFjdGl2ZUluZGV4ICE9PSBwcmV2aW91c0luZGV4KSB7XG4gICAgaWYgKGRpciA9PT0gJ3Jlc2V0Jykge1xuICAgICAgc3dpcGVyLmVtaXQoJ3NsaWRlUmVzZXRUcmFuc2l0aW9uRW5kJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc3dpcGVyLmVtaXQoJ3NsaWRlQ2hhbmdlVHJhbnNpdGlvbkVuZCcpO1xuXG4gICAgaWYgKGRpciA9PT0gJ25leHQnKSB7XG4gICAgICBzd2lwZXIuZW1pdCgnc2xpZGVOZXh0VHJhbnNpdGlvbkVuZCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzd2lwZXIuZW1pdCgnc2xpZGVQcmV2VHJhbnNpdGlvbkVuZCcpO1xuICAgIH1cbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRyYW5zaXRpb25TdGFydChydW5DYWxsYmFja3MsIGRpcmVjdGlvbikge1xuICBpZiAocnVuQ2FsbGJhY2tzID09PSB2b2lkIDApIHtcbiAgICBydW5DYWxsYmFja3MgPSB0cnVlO1xuICB9XG5cbiAgdmFyIHN3aXBlciA9IHRoaXM7XG4gIHZhciBhY3RpdmVJbmRleCA9IHN3aXBlci5hY3RpdmVJbmRleCxcbiAgICAgIHBhcmFtcyA9IHN3aXBlci5wYXJhbXMsXG4gICAgICBwcmV2aW91c0luZGV4ID0gc3dpcGVyLnByZXZpb3VzSW5kZXg7XG4gIGlmIChwYXJhbXMuY3NzTW9kZSkgcmV0dXJuO1xuXG4gIGlmIChwYXJhbXMuYXV0b0hlaWdodCkge1xuICAgIHN3aXBlci51cGRhdGVBdXRvSGVpZ2h0KCk7XG4gIH1cblxuICB2YXIgZGlyID0gZGlyZWN0aW9uO1xuXG4gIGlmICghZGlyKSB7XG4gICAgaWYgKGFjdGl2ZUluZGV4ID4gcHJldmlvdXNJbmRleCkgZGlyID0gJ25leHQnO2Vsc2UgaWYgKGFjdGl2ZUluZGV4IDwgcHJldmlvdXNJbmRleCkgZGlyID0gJ3ByZXYnO2Vsc2UgZGlyID0gJ3Jlc2V0JztcbiAgfVxuXG4gIHN3aXBlci5lbWl0KCd0cmFuc2l0aW9uU3RhcnQnKTtcblxuICBpZiAocnVuQ2FsbGJhY2tzICYmIGFjdGl2ZUluZGV4ICE9PSBwcmV2aW91c0luZGV4KSB7XG4gICAgaWYgKGRpciA9PT0gJ3Jlc2V0Jykge1xuICAgICAgc3dpcGVyLmVtaXQoJ3NsaWRlUmVzZXRUcmFuc2l0aW9uU3RhcnQnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzd2lwZXIuZW1pdCgnc2xpZGVDaGFuZ2VUcmFuc2l0aW9uU3RhcnQnKTtcblxuICAgIGlmIChkaXIgPT09ICduZXh0Jykge1xuICAgICAgc3dpcGVyLmVtaXQoJ3NsaWRlTmV4dFRyYW5zaXRpb25TdGFydCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzd2lwZXIuZW1pdCgnc2xpZGVQcmV2VHJhbnNpdGlvblN0YXJ0Jyk7XG4gICAgfVxuICB9XG59IiwiaW1wb3J0IHsgZ2V0VHJhbnNsYXRlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvdXRpbHMnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0U3dpcGVyVHJhbnNsYXRlKGF4aXMpIHtcbiAgaWYgKGF4aXMgPT09IHZvaWQgMCkge1xuICAgIGF4aXMgPSB0aGlzLmlzSG9yaXpvbnRhbCgpID8gJ3gnIDogJ3knO1xuICB9XG5cbiAgdmFyIHN3aXBlciA9IHRoaXM7XG4gIHZhciBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLFxuICAgICAgcnRsID0gc3dpcGVyLnJ0bFRyYW5zbGF0ZSxcbiAgICAgIHRyYW5zbGF0ZSA9IHN3aXBlci50cmFuc2xhdGUsXG4gICAgICAkd3JhcHBlckVsID0gc3dpcGVyLiR3cmFwcGVyRWw7XG5cbiAgaWYgKHBhcmFtcy52aXJ0dWFsVHJhbnNsYXRlKSB7XG4gICAgcmV0dXJuIHJ0bCA/IC10cmFuc2xhdGUgOiB0cmFuc2xhdGU7XG4gIH1cblxuICBpZiAocGFyYW1zLmNzc01vZGUpIHtcbiAgICByZXR1cm4gdHJhbnNsYXRlO1xuICB9XG5cbiAgdmFyIGN1cnJlbnRUcmFuc2xhdGUgPSBnZXRUcmFuc2xhdGUoJHdyYXBwZXJFbFswXSwgYXhpcyk7XG4gIGlmIChydGwpIGN1cnJlbnRUcmFuc2xhdGUgPSAtY3VycmVudFRyYW5zbGF0ZTtcbiAgcmV0dXJuIGN1cnJlbnRUcmFuc2xhdGUgfHwgMDtcbn0iLCJpbXBvcnQgZ2V0VHJhbnNsYXRlIGZyb20gJy4vZ2V0VHJhbnNsYXRlJztcbmltcG9ydCBzZXRUcmFuc2xhdGUgZnJvbSAnLi9zZXRUcmFuc2xhdGUnO1xuaW1wb3J0IG1pblRyYW5zbGF0ZSBmcm9tICcuL21pblRyYW5zbGF0ZSc7XG5pbXBvcnQgbWF4VHJhbnNsYXRlIGZyb20gJy4vbWF4VHJhbnNsYXRlJztcbmltcG9ydCB0cmFuc2xhdGVUbyBmcm9tICcuL3RyYW5zbGF0ZVRvJztcbmV4cG9ydCBkZWZhdWx0IHtcbiAgZ2V0VHJhbnNsYXRlOiBnZXRUcmFuc2xhdGUsXG4gIHNldFRyYW5zbGF0ZTogc2V0VHJhbnNsYXRlLFxuICBtaW5UcmFuc2xhdGU6IG1pblRyYW5zbGF0ZSxcbiAgbWF4VHJhbnNsYXRlOiBtYXhUcmFuc2xhdGUsXG4gIHRyYW5zbGF0ZVRvOiB0cmFuc2xhdGVUb1xufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtYXhUcmFuc2xhdGUoKSB7XG4gIHJldHVybiAtdGhpcy5zbmFwR3JpZFt0aGlzLnNuYXBHcmlkLmxlbmd0aCAtIDFdO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pblRyYW5zbGF0ZSgpIHtcbiAgcmV0dXJuIC10aGlzLnNuYXBHcmlkWzBdO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldFRyYW5zbGF0ZSh0cmFuc2xhdGUsIGJ5Q29udHJvbGxlcikge1xuICB2YXIgc3dpcGVyID0gdGhpcztcbiAgdmFyIHJ0bCA9IHN3aXBlci5ydGxUcmFuc2xhdGUsXG4gICAgICBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLFxuICAgICAgJHdyYXBwZXJFbCA9IHN3aXBlci4kd3JhcHBlckVsLFxuICAgICAgd3JhcHBlckVsID0gc3dpcGVyLndyYXBwZXJFbCxcbiAgICAgIHByb2dyZXNzID0gc3dpcGVyLnByb2dyZXNzO1xuICB2YXIgeCA9IDA7XG4gIHZhciB5ID0gMDtcbiAgdmFyIHogPSAwO1xuXG4gIGlmIChzd2lwZXIuaXNIb3Jpem9udGFsKCkpIHtcbiAgICB4ID0gcnRsID8gLXRyYW5zbGF0ZSA6IHRyYW5zbGF0ZTtcbiAgfSBlbHNlIHtcbiAgICB5ID0gdHJhbnNsYXRlO1xuICB9XG5cbiAgaWYgKHBhcmFtcy5yb3VuZExlbmd0aHMpIHtcbiAgICB4ID0gTWF0aC5mbG9vcih4KTtcbiAgICB5ID0gTWF0aC5mbG9vcih5KTtcbiAgfVxuXG4gIGlmIChwYXJhbXMuY3NzTW9kZSkge1xuICAgIHdyYXBwZXJFbFtzd2lwZXIuaXNIb3Jpem9udGFsKCkgPyAnc2Nyb2xsTGVmdCcgOiAnc2Nyb2xsVG9wJ10gPSBzd2lwZXIuaXNIb3Jpem9udGFsKCkgPyAteCA6IC15O1xuICB9IGVsc2UgaWYgKCFwYXJhbXMudmlydHVhbFRyYW5zbGF0ZSkge1xuICAgICR3cmFwcGVyRWwudHJhbnNmb3JtKFwidHJhbnNsYXRlM2QoXCIgKyB4ICsgXCJweCwgXCIgKyB5ICsgXCJweCwgXCIgKyB6ICsgXCJweClcIik7XG4gIH1cblxuICBzd2lwZXIucHJldmlvdXNUcmFuc2xhdGUgPSBzd2lwZXIudHJhbnNsYXRlO1xuICBzd2lwZXIudHJhbnNsYXRlID0gc3dpcGVyLmlzSG9yaXpvbnRhbCgpID8geCA6IHk7IC8vIENoZWNrIGlmIHdlIG5lZWQgdG8gdXBkYXRlIHByb2dyZXNzXG5cbiAgdmFyIG5ld1Byb2dyZXNzO1xuICB2YXIgdHJhbnNsYXRlc0RpZmYgPSBzd2lwZXIubWF4VHJhbnNsYXRlKCkgLSBzd2lwZXIubWluVHJhbnNsYXRlKCk7XG5cbiAgaWYgKHRyYW5zbGF0ZXNEaWZmID09PSAwKSB7XG4gICAgbmV3UHJvZ3Jlc3MgPSAwO1xuICB9IGVsc2Uge1xuICAgIG5ld1Byb2dyZXNzID0gKHRyYW5zbGF0ZSAtIHN3aXBlci5taW5UcmFuc2xhdGUoKSkgLyB0cmFuc2xhdGVzRGlmZjtcbiAgfVxuXG4gIGlmIChuZXdQcm9ncmVzcyAhPT0gcHJvZ3Jlc3MpIHtcbiAgICBzd2lwZXIudXBkYXRlUHJvZ3Jlc3ModHJhbnNsYXRlKTtcbiAgfVxuXG4gIHN3aXBlci5lbWl0KCdzZXRUcmFuc2xhdGUnLCBzd2lwZXIudHJhbnNsYXRlLCBieUNvbnRyb2xsZXIpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRyYW5zbGF0ZVRvKHRyYW5zbGF0ZSwgc3BlZWQsIHJ1bkNhbGxiYWNrcywgdHJhbnNsYXRlQm91bmRzLCBpbnRlcm5hbCkge1xuICBpZiAodHJhbnNsYXRlID09PSB2b2lkIDApIHtcbiAgICB0cmFuc2xhdGUgPSAwO1xuICB9XG5cbiAgaWYgKHNwZWVkID09PSB2b2lkIDApIHtcbiAgICBzcGVlZCA9IHRoaXMucGFyYW1zLnNwZWVkO1xuICB9XG5cbiAgaWYgKHJ1bkNhbGxiYWNrcyA9PT0gdm9pZCAwKSB7XG4gICAgcnVuQ2FsbGJhY2tzID0gdHJ1ZTtcbiAgfVxuXG4gIGlmICh0cmFuc2xhdGVCb3VuZHMgPT09IHZvaWQgMCkge1xuICAgIHRyYW5zbGF0ZUJvdW5kcyA9IHRydWU7XG4gIH1cblxuICB2YXIgc3dpcGVyID0gdGhpcztcbiAgdmFyIHBhcmFtcyA9IHN3aXBlci5wYXJhbXMsXG4gICAgICB3cmFwcGVyRWwgPSBzd2lwZXIud3JhcHBlckVsO1xuXG4gIGlmIChzd2lwZXIuYW5pbWF0aW5nICYmIHBhcmFtcy5wcmV2ZW50SW50ZXJhY3Rpb25PblRyYW5zaXRpb24pIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgbWluVHJhbnNsYXRlID0gc3dpcGVyLm1pblRyYW5zbGF0ZSgpO1xuICB2YXIgbWF4VHJhbnNsYXRlID0gc3dpcGVyLm1heFRyYW5zbGF0ZSgpO1xuICB2YXIgbmV3VHJhbnNsYXRlO1xuICBpZiAodHJhbnNsYXRlQm91bmRzICYmIHRyYW5zbGF0ZSA+IG1pblRyYW5zbGF0ZSkgbmV3VHJhbnNsYXRlID0gbWluVHJhbnNsYXRlO2Vsc2UgaWYgKHRyYW5zbGF0ZUJvdW5kcyAmJiB0cmFuc2xhdGUgPCBtYXhUcmFuc2xhdGUpIG5ld1RyYW5zbGF0ZSA9IG1heFRyYW5zbGF0ZTtlbHNlIG5ld1RyYW5zbGF0ZSA9IHRyYW5zbGF0ZTsgLy8gVXBkYXRlIHByb2dyZXNzXG5cbiAgc3dpcGVyLnVwZGF0ZVByb2dyZXNzKG5ld1RyYW5zbGF0ZSk7XG5cbiAgaWYgKHBhcmFtcy5jc3NNb2RlKSB7XG4gICAgdmFyIGlzSCA9IHN3aXBlci5pc0hvcml6b250YWwoKTtcblxuICAgIGlmIChzcGVlZCA9PT0gMCkge1xuICAgICAgd3JhcHBlckVsW2lzSCA/ICdzY3JvbGxMZWZ0JyA6ICdzY3JvbGxUb3AnXSA9IC1uZXdUcmFuc2xhdGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgICAgaWYgKHdyYXBwZXJFbC5zY3JvbGxUbykge1xuICAgICAgICB2YXIgX3dyYXBwZXJFbCRzY3JvbGxUbztcblxuICAgICAgICB3cmFwcGVyRWwuc2Nyb2xsVG8oKF93cmFwcGVyRWwkc2Nyb2xsVG8gPSB7fSwgX3dyYXBwZXJFbCRzY3JvbGxUb1tpc0ggPyAnbGVmdCcgOiAndG9wJ10gPSAtbmV3VHJhbnNsYXRlLCBfd3JhcHBlckVsJHNjcm9sbFRvLmJlaGF2aW9yID0gJ3Ntb290aCcsIF93cmFwcGVyRWwkc2Nyb2xsVG8pKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdyYXBwZXJFbFtpc0ggPyAnc2Nyb2xsTGVmdCcgOiAnc2Nyb2xsVG9wJ10gPSAtbmV3VHJhbnNsYXRlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKHNwZWVkID09PSAwKSB7XG4gICAgc3dpcGVyLnNldFRyYW5zaXRpb24oMCk7XG4gICAgc3dpcGVyLnNldFRyYW5zbGF0ZShuZXdUcmFuc2xhdGUpO1xuXG4gICAgaWYgKHJ1bkNhbGxiYWNrcykge1xuICAgICAgc3dpcGVyLmVtaXQoJ2JlZm9yZVRyYW5zaXRpb25TdGFydCcsIHNwZWVkLCBpbnRlcm5hbCk7XG4gICAgICBzd2lwZXIuZW1pdCgndHJhbnNpdGlvbkVuZCcpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBzd2lwZXIuc2V0VHJhbnNpdGlvbihzcGVlZCk7XG4gICAgc3dpcGVyLnNldFRyYW5zbGF0ZShuZXdUcmFuc2xhdGUpO1xuXG4gICAgaWYgKHJ1bkNhbGxiYWNrcykge1xuICAgICAgc3dpcGVyLmVtaXQoJ2JlZm9yZVRyYW5zaXRpb25TdGFydCcsIHNwZWVkLCBpbnRlcm5hbCk7XG4gICAgICBzd2lwZXIuZW1pdCgndHJhbnNpdGlvblN0YXJ0Jyk7XG4gICAgfVxuXG4gICAgaWYgKCFzd2lwZXIuYW5pbWF0aW5nKSB7XG4gICAgICBzd2lwZXIuYW5pbWF0aW5nID0gdHJ1ZTtcblxuICAgICAgaWYgKCFzd2lwZXIub25UcmFuc2xhdGVUb1dyYXBwZXJUcmFuc2l0aW9uRW5kKSB7XG4gICAgICAgIHN3aXBlci5vblRyYW5zbGF0ZVRvV3JhcHBlclRyYW5zaXRpb25FbmQgPSBmdW5jdGlvbiB0cmFuc2l0aW9uRW5kKGUpIHtcbiAgICAgICAgICBpZiAoIXN3aXBlciB8fCBzd2lwZXIuZGVzdHJveWVkKSByZXR1cm47XG4gICAgICAgICAgaWYgKGUudGFyZ2V0ICE9PSB0aGlzKSByZXR1cm47XG4gICAgICAgICAgc3dpcGVyLiR3cmFwcGVyRWxbMF0ucmVtb3ZlRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIHN3aXBlci5vblRyYW5zbGF0ZVRvV3JhcHBlclRyYW5zaXRpb25FbmQpO1xuICAgICAgICAgIHN3aXBlci4kd3JhcHBlckVsWzBdLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3dlYmtpdFRyYW5zaXRpb25FbmQnLCBzd2lwZXIub25UcmFuc2xhdGVUb1dyYXBwZXJUcmFuc2l0aW9uRW5kKTtcbiAgICAgICAgICBzd2lwZXIub25UcmFuc2xhdGVUb1dyYXBwZXJUcmFuc2l0aW9uRW5kID0gbnVsbDtcbiAgICAgICAgICBkZWxldGUgc3dpcGVyLm9uVHJhbnNsYXRlVG9XcmFwcGVyVHJhbnNpdGlvbkVuZDtcblxuICAgICAgICAgIGlmIChydW5DYWxsYmFja3MpIHtcbiAgICAgICAgICAgIHN3aXBlci5lbWl0KCd0cmFuc2l0aW9uRW5kJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBzd2lwZXIuJHdyYXBwZXJFbFswXS5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgc3dpcGVyLm9uVHJhbnNsYXRlVG9XcmFwcGVyVHJhbnNpdGlvbkVuZCk7XG4gICAgICBzd2lwZXIuJHdyYXBwZXJFbFswXS5hZGRFdmVudExpc3RlbmVyKCd3ZWJraXRUcmFuc2l0aW9uRW5kJywgc3dpcGVyLm9uVHJhbnNsYXRlVG9XcmFwcGVyVHJhbnNpdGlvbkVuZCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59IiwiaW1wb3J0IHVwZGF0ZVNpemUgZnJvbSAnLi91cGRhdGVTaXplJztcbmltcG9ydCB1cGRhdGVTbGlkZXMgZnJvbSAnLi91cGRhdGVTbGlkZXMnO1xuaW1wb3J0IHVwZGF0ZUF1dG9IZWlnaHQgZnJvbSAnLi91cGRhdGVBdXRvSGVpZ2h0JztcbmltcG9ydCB1cGRhdGVTbGlkZXNPZmZzZXQgZnJvbSAnLi91cGRhdGVTbGlkZXNPZmZzZXQnO1xuaW1wb3J0IHVwZGF0ZVNsaWRlc1Byb2dyZXNzIGZyb20gJy4vdXBkYXRlU2xpZGVzUHJvZ3Jlc3MnO1xuaW1wb3J0IHVwZGF0ZVByb2dyZXNzIGZyb20gJy4vdXBkYXRlUHJvZ3Jlc3MnO1xuaW1wb3J0IHVwZGF0ZVNsaWRlc0NsYXNzZXMgZnJvbSAnLi91cGRhdGVTbGlkZXNDbGFzc2VzJztcbmltcG9ydCB1cGRhdGVBY3RpdmVJbmRleCBmcm9tICcuL3VwZGF0ZUFjdGl2ZUluZGV4JztcbmltcG9ydCB1cGRhdGVDbGlja2VkU2xpZGUgZnJvbSAnLi91cGRhdGVDbGlja2VkU2xpZGUnO1xuZXhwb3J0IGRlZmF1bHQge1xuICB1cGRhdGVTaXplOiB1cGRhdGVTaXplLFxuICB1cGRhdGVTbGlkZXM6IHVwZGF0ZVNsaWRlcyxcbiAgdXBkYXRlQXV0b0hlaWdodDogdXBkYXRlQXV0b0hlaWdodCxcbiAgdXBkYXRlU2xpZGVzT2Zmc2V0OiB1cGRhdGVTbGlkZXNPZmZzZXQsXG4gIHVwZGF0ZVNsaWRlc1Byb2dyZXNzOiB1cGRhdGVTbGlkZXNQcm9ncmVzcyxcbiAgdXBkYXRlUHJvZ3Jlc3M6IHVwZGF0ZVByb2dyZXNzLFxuICB1cGRhdGVTbGlkZXNDbGFzc2VzOiB1cGRhdGVTbGlkZXNDbGFzc2VzLFxuICB1cGRhdGVBY3RpdmVJbmRleDogdXBkYXRlQWN0aXZlSW5kZXgsXG4gIHVwZGF0ZUNsaWNrZWRTbGlkZTogdXBkYXRlQ2xpY2tlZFNsaWRlXG59OyIsImltcG9ydCB7IGV4dGVuZCB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL3V0aWxzJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVwZGF0ZUFjdGl2ZUluZGV4KG5ld0FjdGl2ZUluZGV4KSB7XG4gIHZhciBzd2lwZXIgPSB0aGlzO1xuICB2YXIgdHJhbnNsYXRlID0gc3dpcGVyLnJ0bFRyYW5zbGF0ZSA/IHN3aXBlci50cmFuc2xhdGUgOiAtc3dpcGVyLnRyYW5zbGF0ZTtcbiAgdmFyIHNsaWRlc0dyaWQgPSBzd2lwZXIuc2xpZGVzR3JpZCxcbiAgICAgIHNuYXBHcmlkID0gc3dpcGVyLnNuYXBHcmlkLFxuICAgICAgcGFyYW1zID0gc3dpcGVyLnBhcmFtcyxcbiAgICAgIHByZXZpb3VzSW5kZXggPSBzd2lwZXIuYWN0aXZlSW5kZXgsXG4gICAgICBwcmV2aW91c1JlYWxJbmRleCA9IHN3aXBlci5yZWFsSW5kZXgsXG4gICAgICBwcmV2aW91c1NuYXBJbmRleCA9IHN3aXBlci5zbmFwSW5kZXg7XG4gIHZhciBhY3RpdmVJbmRleCA9IG5ld0FjdGl2ZUluZGV4O1xuICB2YXIgc25hcEluZGV4O1xuXG4gIGlmICh0eXBlb2YgYWN0aXZlSW5kZXggPT09ICd1bmRlZmluZWQnKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzbGlkZXNHcmlkLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAodHlwZW9mIHNsaWRlc0dyaWRbaSArIDFdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBpZiAodHJhbnNsYXRlID49IHNsaWRlc0dyaWRbaV0gJiYgdHJhbnNsYXRlIDwgc2xpZGVzR3JpZFtpICsgMV0gLSAoc2xpZGVzR3JpZFtpICsgMV0gLSBzbGlkZXNHcmlkW2ldKSAvIDIpIHtcbiAgICAgICAgICBhY3RpdmVJbmRleCA9IGk7XG4gICAgICAgIH0gZWxzZSBpZiAodHJhbnNsYXRlID49IHNsaWRlc0dyaWRbaV0gJiYgdHJhbnNsYXRlIDwgc2xpZGVzR3JpZFtpICsgMV0pIHtcbiAgICAgICAgICBhY3RpdmVJbmRleCA9IGkgKyAxO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHRyYW5zbGF0ZSA+PSBzbGlkZXNHcmlkW2ldKSB7XG4gICAgICAgIGFjdGl2ZUluZGV4ID0gaTtcbiAgICAgIH1cbiAgICB9IC8vIE5vcm1hbGl6ZSBzbGlkZUluZGV4XG5cblxuICAgIGlmIChwYXJhbXMubm9ybWFsaXplU2xpZGVJbmRleCkge1xuICAgICAgaWYgKGFjdGl2ZUluZGV4IDwgMCB8fCB0eXBlb2YgYWN0aXZlSW5kZXggPT09ICd1bmRlZmluZWQnKSBhY3RpdmVJbmRleCA9IDA7XG4gICAgfVxuICB9XG5cbiAgaWYgKHNuYXBHcmlkLmluZGV4T2YodHJhbnNsYXRlKSA+PSAwKSB7XG4gICAgc25hcEluZGV4ID0gc25hcEdyaWQuaW5kZXhPZih0cmFuc2xhdGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciBza2lwID0gTWF0aC5taW4ocGFyYW1zLnNsaWRlc1Blckdyb3VwU2tpcCwgYWN0aXZlSW5kZXgpO1xuICAgIHNuYXBJbmRleCA9IHNraXAgKyBNYXRoLmZsb29yKChhY3RpdmVJbmRleCAtIHNraXApIC8gcGFyYW1zLnNsaWRlc1Blckdyb3VwKTtcbiAgfVxuXG4gIGlmIChzbmFwSW5kZXggPj0gc25hcEdyaWQubGVuZ3RoKSBzbmFwSW5kZXggPSBzbmFwR3JpZC5sZW5ndGggLSAxO1xuXG4gIGlmIChhY3RpdmVJbmRleCA9PT0gcHJldmlvdXNJbmRleCkge1xuICAgIGlmIChzbmFwSW5kZXggIT09IHByZXZpb3VzU25hcEluZGV4KSB7XG4gICAgICBzd2lwZXIuc25hcEluZGV4ID0gc25hcEluZGV4O1xuICAgICAgc3dpcGVyLmVtaXQoJ3NuYXBJbmRleENoYW5nZScpO1xuICAgIH1cblxuICAgIHJldHVybjtcbiAgfSAvLyBHZXQgcmVhbCBpbmRleFxuXG5cbiAgdmFyIHJlYWxJbmRleCA9IHBhcnNlSW50KHN3aXBlci5zbGlkZXMuZXEoYWN0aXZlSW5kZXgpLmF0dHIoJ2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4JykgfHwgYWN0aXZlSW5kZXgsIDEwKTtcbiAgZXh0ZW5kKHN3aXBlciwge1xuICAgIHNuYXBJbmRleDogc25hcEluZGV4LFxuICAgIHJlYWxJbmRleDogcmVhbEluZGV4LFxuICAgIHByZXZpb3VzSW5kZXg6IHByZXZpb3VzSW5kZXgsXG4gICAgYWN0aXZlSW5kZXg6IGFjdGl2ZUluZGV4XG4gIH0pO1xuICBzd2lwZXIuZW1pdCgnYWN0aXZlSW5kZXhDaGFuZ2UnKTtcbiAgc3dpcGVyLmVtaXQoJ3NuYXBJbmRleENoYW5nZScpO1xuXG4gIGlmIChwcmV2aW91c1JlYWxJbmRleCAhPT0gcmVhbEluZGV4KSB7XG4gICAgc3dpcGVyLmVtaXQoJ3JlYWxJbmRleENoYW5nZScpO1xuICB9XG5cbiAgaWYgKHN3aXBlci5pbml0aWFsaXplZCB8fCBzd2lwZXIucGFyYW1zLnJ1bkNhbGxiYWNrc09uSW5pdCkge1xuICAgIHN3aXBlci5lbWl0KCdzbGlkZUNoYW5nZScpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXBkYXRlQXV0b0hlaWdodChzcGVlZCkge1xuICB2YXIgc3dpcGVyID0gdGhpcztcbiAgdmFyIGFjdGl2ZVNsaWRlcyA9IFtdO1xuICB2YXIgaXNWaXJ0dWFsID0gc3dpcGVyLnZpcnR1YWwgJiYgc3dpcGVyLnBhcmFtcy52aXJ0dWFsLmVuYWJsZWQ7XG4gIHZhciBuZXdIZWlnaHQgPSAwO1xuICB2YXIgaTtcblxuICBpZiAodHlwZW9mIHNwZWVkID09PSAnbnVtYmVyJykge1xuICAgIHN3aXBlci5zZXRUcmFuc2l0aW9uKHNwZWVkKTtcbiAgfSBlbHNlIGlmIChzcGVlZCA9PT0gdHJ1ZSkge1xuICAgIHN3aXBlci5zZXRUcmFuc2l0aW9uKHN3aXBlci5wYXJhbXMuc3BlZWQpO1xuICB9XG5cbiAgdmFyIGdldFNsaWRlQnlJbmRleCA9IGZ1bmN0aW9uIGdldFNsaWRlQnlJbmRleChpbmRleCkge1xuICAgIGlmIChpc1ZpcnR1YWwpIHtcbiAgICAgIHJldHVybiBzd2lwZXIuc2xpZGVzLmZpbHRlcihmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1zd2lwZXItc2xpZGUtaW5kZXgnKSwgMTApID09PSBpbmRleDtcbiAgICAgIH0pWzBdO1xuICAgIH1cblxuICAgIHJldHVybiBzd2lwZXIuc2xpZGVzLmVxKGluZGV4KVswXTtcbiAgfTsgLy8gRmluZCBzbGlkZXMgY3VycmVudGx5IGluIHZpZXdcblxuXG4gIGlmIChzd2lwZXIucGFyYW1zLnNsaWRlc1BlclZpZXcgIT09ICdhdXRvJyAmJiBzd2lwZXIucGFyYW1zLnNsaWRlc1BlclZpZXcgPiAxKSB7XG4gICAgaWYgKHN3aXBlci5wYXJhbXMuY2VudGVyZWRTbGlkZXMpIHtcbiAgICAgIHN3aXBlci52aXNpYmxlU2xpZGVzLmVhY2goZnVuY3Rpb24gKHNsaWRlKSB7XG4gICAgICAgIGFjdGl2ZVNsaWRlcy5wdXNoKHNsaWRlKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgTWF0aC5jZWlsKHN3aXBlci5wYXJhbXMuc2xpZGVzUGVyVmlldyk7IGkgKz0gMSkge1xuICAgICAgICB2YXIgaW5kZXggPSBzd2lwZXIuYWN0aXZlSW5kZXggKyBpO1xuICAgICAgICBpZiAoaW5kZXggPiBzd2lwZXIuc2xpZGVzLmxlbmd0aCAmJiAhaXNWaXJ0dWFsKSBicmVhaztcbiAgICAgICAgYWN0aXZlU2xpZGVzLnB1c2goZ2V0U2xpZGVCeUluZGV4KGluZGV4KSk7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGFjdGl2ZVNsaWRlcy5wdXNoKGdldFNsaWRlQnlJbmRleChzd2lwZXIuYWN0aXZlSW5kZXgpKTtcbiAgfSAvLyBGaW5kIG5ldyBoZWlnaHQgZnJvbSBoaWdoZXN0IHNsaWRlIGluIHZpZXdcblxuXG4gIGZvciAoaSA9IDA7IGkgPCBhY3RpdmVTbGlkZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAodHlwZW9mIGFjdGl2ZVNsaWRlc1tpXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBoZWlnaHQgPSBhY3RpdmVTbGlkZXNbaV0ub2Zmc2V0SGVpZ2h0O1xuICAgICAgbmV3SGVpZ2h0ID0gaGVpZ2h0ID4gbmV3SGVpZ2h0ID8gaGVpZ2h0IDogbmV3SGVpZ2h0O1xuICAgIH1cbiAgfSAvLyBVcGRhdGUgSGVpZ2h0XG5cblxuICBpZiAobmV3SGVpZ2h0KSBzd2lwZXIuJHdyYXBwZXJFbC5jc3MoJ2hlaWdodCcsIG5ld0hlaWdodCArIFwicHhcIik7XG59IiwiaW1wb3J0ICQgZnJvbSAnLi4vLi4vLi4vdXRpbHMvZG9tJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVwZGF0ZUNsaWNrZWRTbGlkZShlKSB7XG4gIHZhciBzd2lwZXIgPSB0aGlzO1xuICB2YXIgcGFyYW1zID0gc3dpcGVyLnBhcmFtcztcbiAgdmFyIHNsaWRlID0gJChlLnRhcmdldCkuY2xvc2VzdChcIi5cIiArIHBhcmFtcy5zbGlkZUNsYXNzKVswXTtcbiAgdmFyIHNsaWRlRm91bmQgPSBmYWxzZTtcbiAgdmFyIHNsaWRlSW5kZXg7XG5cbiAgaWYgKHNsaWRlKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzd2lwZXIuc2xpZGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAoc3dpcGVyLnNsaWRlc1tpXSA9PT0gc2xpZGUpIHtcbiAgICAgICAgc2xpZGVGb3VuZCA9IHRydWU7XG4gICAgICAgIHNsaWRlSW5kZXggPSBpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoc2xpZGUgJiYgc2xpZGVGb3VuZCkge1xuICAgIHN3aXBlci5jbGlja2VkU2xpZGUgPSBzbGlkZTtcblxuICAgIGlmIChzd2lwZXIudmlydHVhbCAmJiBzd2lwZXIucGFyYW1zLnZpcnR1YWwuZW5hYmxlZCkge1xuICAgICAgc3dpcGVyLmNsaWNrZWRJbmRleCA9IHBhcnNlSW50KCQoc2xpZGUpLmF0dHIoJ2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4JyksIDEwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3dpcGVyLmNsaWNrZWRJbmRleCA9IHNsaWRlSW5kZXg7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHN3aXBlci5jbGlja2VkU2xpZGUgPSB1bmRlZmluZWQ7XG4gICAgc3dpcGVyLmNsaWNrZWRJbmRleCA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAocGFyYW1zLnNsaWRlVG9DbGlja2VkU2xpZGUgJiYgc3dpcGVyLmNsaWNrZWRJbmRleCAhPT0gdW5kZWZpbmVkICYmIHN3aXBlci5jbGlja2VkSW5kZXggIT09IHN3aXBlci5hY3RpdmVJbmRleCkge1xuICAgIHN3aXBlci5zbGlkZVRvQ2xpY2tlZFNsaWRlKCk7XG4gIH1cbn0iLCJpbXBvcnQgeyBleHRlbmQgfSBmcm9tICcuLi8uLi8uLi91dGlscy91dGlscyc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1cGRhdGVQcm9ncmVzcyh0cmFuc2xhdGUpIHtcbiAgdmFyIHN3aXBlciA9IHRoaXM7XG5cbiAgaWYgKHR5cGVvZiB0cmFuc2xhdGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG11bHRpcGxpZXIgPSBzd2lwZXIucnRsVHJhbnNsYXRlID8gLTEgOiAxOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcblxuICAgIHRyYW5zbGF0ZSA9IHN3aXBlciAmJiBzd2lwZXIudHJhbnNsYXRlICYmIHN3aXBlci50cmFuc2xhdGUgKiBtdWx0aXBsaWVyIHx8IDA7XG4gIH1cblxuICB2YXIgcGFyYW1zID0gc3dpcGVyLnBhcmFtcztcbiAgdmFyIHRyYW5zbGF0ZXNEaWZmID0gc3dpcGVyLm1heFRyYW5zbGF0ZSgpIC0gc3dpcGVyLm1pblRyYW5zbGF0ZSgpO1xuICB2YXIgcHJvZ3Jlc3MgPSBzd2lwZXIucHJvZ3Jlc3MsXG4gICAgICBpc0JlZ2lubmluZyA9IHN3aXBlci5pc0JlZ2lubmluZyxcbiAgICAgIGlzRW5kID0gc3dpcGVyLmlzRW5kO1xuICB2YXIgd2FzQmVnaW5uaW5nID0gaXNCZWdpbm5pbmc7XG4gIHZhciB3YXNFbmQgPSBpc0VuZDtcblxuICBpZiAodHJhbnNsYXRlc0RpZmYgPT09IDApIHtcbiAgICBwcm9ncmVzcyA9IDA7XG4gICAgaXNCZWdpbm5pbmcgPSB0cnVlO1xuICAgIGlzRW5kID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBwcm9ncmVzcyA9ICh0cmFuc2xhdGUgLSBzd2lwZXIubWluVHJhbnNsYXRlKCkpIC8gdHJhbnNsYXRlc0RpZmY7XG4gICAgaXNCZWdpbm5pbmcgPSBwcm9ncmVzcyA8PSAwO1xuICAgIGlzRW5kID0gcHJvZ3Jlc3MgPj0gMTtcbiAgfVxuXG4gIGV4dGVuZChzd2lwZXIsIHtcbiAgICBwcm9ncmVzczogcHJvZ3Jlc3MsXG4gICAgaXNCZWdpbm5pbmc6IGlzQmVnaW5uaW5nLFxuICAgIGlzRW5kOiBpc0VuZFxuICB9KTtcbiAgaWYgKHBhcmFtcy53YXRjaFNsaWRlc1Byb2dyZXNzIHx8IHBhcmFtcy53YXRjaFNsaWRlc1Zpc2liaWxpdHkgfHwgcGFyYW1zLmNlbnRlcmVkU2xpZGVzICYmIHBhcmFtcy5hdXRvSGVpZ2h0KSBzd2lwZXIudXBkYXRlU2xpZGVzUHJvZ3Jlc3ModHJhbnNsYXRlKTtcblxuICBpZiAoaXNCZWdpbm5pbmcgJiYgIXdhc0JlZ2lubmluZykge1xuICAgIHN3aXBlci5lbWl0KCdyZWFjaEJlZ2lubmluZyB0b0VkZ2UnKTtcbiAgfVxuXG4gIGlmIChpc0VuZCAmJiAhd2FzRW5kKSB7XG4gICAgc3dpcGVyLmVtaXQoJ3JlYWNoRW5kIHRvRWRnZScpO1xuICB9XG5cbiAgaWYgKHdhc0JlZ2lubmluZyAmJiAhaXNCZWdpbm5pbmcgfHwgd2FzRW5kICYmICFpc0VuZCkge1xuICAgIHN3aXBlci5lbWl0KCdmcm9tRWRnZScpO1xuICB9XG5cbiAgc3dpcGVyLmVtaXQoJ3Byb2dyZXNzJywgcHJvZ3Jlc3MpO1xufSIsImltcG9ydCB7IGV4dGVuZCB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL3V0aWxzJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVwZGF0ZVNpemUoKSB7XG4gIHZhciBzd2lwZXIgPSB0aGlzO1xuICB2YXIgd2lkdGg7XG4gIHZhciBoZWlnaHQ7XG4gIHZhciAkZWwgPSBzd2lwZXIuJGVsO1xuXG4gIGlmICh0eXBlb2Ygc3dpcGVyLnBhcmFtcy53aWR0aCAhPT0gJ3VuZGVmaW5lZCcgJiYgc3dpcGVyLnBhcmFtcy53aWR0aCAhPT0gbnVsbCkge1xuICAgIHdpZHRoID0gc3dpcGVyLnBhcmFtcy53aWR0aDtcbiAgfSBlbHNlIHtcbiAgICB3aWR0aCA9ICRlbFswXS5jbGllbnRXaWR0aDtcbiAgfVxuXG4gIGlmICh0eXBlb2Ygc3dpcGVyLnBhcmFtcy5oZWlnaHQgIT09ICd1bmRlZmluZWQnICYmIHN3aXBlci5wYXJhbXMuaGVpZ2h0ICE9PSBudWxsKSB7XG4gICAgaGVpZ2h0ID0gc3dpcGVyLnBhcmFtcy5oZWlnaHQ7XG4gIH0gZWxzZSB7XG4gICAgaGVpZ2h0ID0gJGVsWzBdLmNsaWVudEhlaWdodDtcbiAgfVxuXG4gIGlmICh3aWR0aCA9PT0gMCAmJiBzd2lwZXIuaXNIb3Jpem9udGFsKCkgfHwgaGVpZ2h0ID09PSAwICYmIHN3aXBlci5pc1ZlcnRpY2FsKCkpIHtcbiAgICByZXR1cm47XG4gIH0gLy8gU3VidHJhY3QgcGFkZGluZ3NcblxuXG4gIHdpZHRoID0gd2lkdGggLSBwYXJzZUludCgkZWwuY3NzKCdwYWRkaW5nLWxlZnQnKSB8fCAwLCAxMCkgLSBwYXJzZUludCgkZWwuY3NzKCdwYWRkaW5nLXJpZ2h0JykgfHwgMCwgMTApO1xuICBoZWlnaHQgPSBoZWlnaHQgLSBwYXJzZUludCgkZWwuY3NzKCdwYWRkaW5nLXRvcCcpIHx8IDAsIDEwKSAtIHBhcnNlSW50KCRlbC5jc3MoJ3BhZGRpbmctYm90dG9tJykgfHwgMCwgMTApO1xuICBpZiAoTnVtYmVyLmlzTmFOKHdpZHRoKSkgd2lkdGggPSAwO1xuICBpZiAoTnVtYmVyLmlzTmFOKGhlaWdodCkpIGhlaWdodCA9IDA7XG4gIGV4dGVuZChzd2lwZXIsIHtcbiAgICB3aWR0aDogd2lkdGgsXG4gICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgc2l6ZTogc3dpcGVyLmlzSG9yaXpvbnRhbCgpID8gd2lkdGggOiBoZWlnaHRcbiAgfSk7XG59IiwiaW1wb3J0IHsgZXh0ZW5kIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvdXRpbHMnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXBkYXRlU2xpZGVzKCkge1xuICB2YXIgc3dpcGVyID0gdGhpcztcblxuICBmdW5jdGlvbiBnZXREaXJlY3Rpb25MYWJlbChwcm9wZXJ0eSkge1xuICAgIGlmIChzd2lwZXIuaXNIb3Jpem9udGFsKCkpIHtcbiAgICAgIHJldHVybiBwcm9wZXJ0eTtcbiAgICB9IC8vIHByZXR0aWVyLWlnbm9yZVxuXG5cbiAgICByZXR1cm4ge1xuICAgICAgJ3dpZHRoJzogJ2hlaWdodCcsXG4gICAgICAnbWFyZ2luLXRvcCc6ICdtYXJnaW4tbGVmdCcsXG4gICAgICAnbWFyZ2luLWJvdHRvbSAnOiAnbWFyZ2luLXJpZ2h0JyxcbiAgICAgICdtYXJnaW4tbGVmdCc6ICdtYXJnaW4tdG9wJyxcbiAgICAgICdtYXJnaW4tcmlnaHQnOiAnbWFyZ2luLWJvdHRvbScsXG4gICAgICAncGFkZGluZy1sZWZ0JzogJ3BhZGRpbmctdG9wJyxcbiAgICAgICdwYWRkaW5nLXJpZ2h0JzogJ3BhZGRpbmctYm90dG9tJyxcbiAgICAgICdtYXJnaW5SaWdodCc6ICdtYXJnaW5Cb3R0b20nXG4gICAgfVtwcm9wZXJ0eV07XG4gIH1cblxuICBmdW5jdGlvbiBnZXREaXJlY3Rpb25Qcm9wZXJ0eVZhbHVlKG5vZGUsIGxhYmVsKSB7XG4gICAgcmV0dXJuIHBhcnNlRmxvYXQobm9kZS5nZXRQcm9wZXJ0eVZhbHVlKGdldERpcmVjdGlvbkxhYmVsKGxhYmVsKSkgfHwgMCk7XG4gIH1cblxuICB2YXIgcGFyYW1zID0gc3dpcGVyLnBhcmFtcztcbiAgdmFyICR3cmFwcGVyRWwgPSBzd2lwZXIuJHdyYXBwZXJFbCxcbiAgICAgIHN3aXBlclNpemUgPSBzd2lwZXIuc2l6ZSxcbiAgICAgIHJ0bCA9IHN3aXBlci5ydGxUcmFuc2xhdGUsXG4gICAgICB3cm9uZ1JUTCA9IHN3aXBlci53cm9uZ1JUTDtcbiAgdmFyIGlzVmlydHVhbCA9IHN3aXBlci52aXJ0dWFsICYmIHBhcmFtcy52aXJ0dWFsLmVuYWJsZWQ7XG4gIHZhciBwcmV2aW91c1NsaWRlc0xlbmd0aCA9IGlzVmlydHVhbCA/IHN3aXBlci52aXJ0dWFsLnNsaWRlcy5sZW5ndGggOiBzd2lwZXIuc2xpZGVzLmxlbmd0aDtcbiAgdmFyIHNsaWRlcyA9ICR3cmFwcGVyRWwuY2hpbGRyZW4oXCIuXCIgKyBzd2lwZXIucGFyYW1zLnNsaWRlQ2xhc3MpO1xuICB2YXIgc2xpZGVzTGVuZ3RoID0gaXNWaXJ0dWFsID8gc3dpcGVyLnZpcnR1YWwuc2xpZGVzLmxlbmd0aCA6IHNsaWRlcy5sZW5ndGg7XG4gIHZhciBzbmFwR3JpZCA9IFtdO1xuICB2YXIgc2xpZGVzR3JpZCA9IFtdO1xuICB2YXIgc2xpZGVzU2l6ZXNHcmlkID0gW107XG4gIHZhciBvZmZzZXRCZWZvcmUgPSBwYXJhbXMuc2xpZGVzT2Zmc2V0QmVmb3JlO1xuXG4gIGlmICh0eXBlb2Ygb2Zmc2V0QmVmb3JlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb2Zmc2V0QmVmb3JlID0gcGFyYW1zLnNsaWRlc09mZnNldEJlZm9yZS5jYWxsKHN3aXBlcik7XG4gIH1cblxuICB2YXIgb2Zmc2V0QWZ0ZXIgPSBwYXJhbXMuc2xpZGVzT2Zmc2V0QWZ0ZXI7XG5cbiAgaWYgKHR5cGVvZiBvZmZzZXRBZnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9mZnNldEFmdGVyID0gcGFyYW1zLnNsaWRlc09mZnNldEFmdGVyLmNhbGwoc3dpcGVyKTtcbiAgfVxuXG4gIHZhciBwcmV2aW91c1NuYXBHcmlkTGVuZ3RoID0gc3dpcGVyLnNuYXBHcmlkLmxlbmd0aDtcbiAgdmFyIHByZXZpb3VzU2xpZGVzR3JpZExlbmd0aCA9IHN3aXBlci5zbGlkZXNHcmlkLmxlbmd0aDtcbiAgdmFyIHNwYWNlQmV0d2VlbiA9IHBhcmFtcy5zcGFjZUJldHdlZW47XG4gIHZhciBzbGlkZVBvc2l0aW9uID0gLW9mZnNldEJlZm9yZTtcbiAgdmFyIHByZXZTbGlkZVNpemUgPSAwO1xuICB2YXIgaW5kZXggPSAwO1xuXG4gIGlmICh0eXBlb2Ygc3dpcGVyU2l6ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAodHlwZW9mIHNwYWNlQmV0d2VlbiA9PT0gJ3N0cmluZycgJiYgc3BhY2VCZXR3ZWVuLmluZGV4T2YoJyUnKSA+PSAwKSB7XG4gICAgc3BhY2VCZXR3ZWVuID0gcGFyc2VGbG9hdChzcGFjZUJldHdlZW4ucmVwbGFjZSgnJScsICcnKSkgLyAxMDAgKiBzd2lwZXJTaXplO1xuICB9XG5cbiAgc3dpcGVyLnZpcnR1YWxTaXplID0gLXNwYWNlQmV0d2VlbjsgLy8gcmVzZXQgbWFyZ2luc1xuXG4gIGlmIChydGwpIHNsaWRlcy5jc3Moe1xuICAgIG1hcmdpbkxlZnQ6ICcnLFxuICAgIG1hcmdpbkJvdHRvbTogJycsXG4gICAgbWFyZ2luVG9wOiAnJ1xuICB9KTtlbHNlIHNsaWRlcy5jc3Moe1xuICAgIG1hcmdpblJpZ2h0OiAnJyxcbiAgICBtYXJnaW5Cb3R0b206ICcnLFxuICAgIG1hcmdpblRvcDogJydcbiAgfSk7XG4gIHZhciBzbGlkZXNOdW1iZXJFdmVuVG9Sb3dzO1xuXG4gIGlmIChwYXJhbXMuc2xpZGVzUGVyQ29sdW1uID4gMSkge1xuICAgIGlmIChNYXRoLmZsb29yKHNsaWRlc0xlbmd0aCAvIHBhcmFtcy5zbGlkZXNQZXJDb2x1bW4pID09PSBzbGlkZXNMZW5ndGggLyBzd2lwZXIucGFyYW1zLnNsaWRlc1BlckNvbHVtbikge1xuICAgICAgc2xpZGVzTnVtYmVyRXZlblRvUm93cyA9IHNsaWRlc0xlbmd0aDtcbiAgICB9IGVsc2Uge1xuICAgICAgc2xpZGVzTnVtYmVyRXZlblRvUm93cyA9IE1hdGguY2VpbChzbGlkZXNMZW5ndGggLyBwYXJhbXMuc2xpZGVzUGVyQ29sdW1uKSAqIHBhcmFtcy5zbGlkZXNQZXJDb2x1bW47XG4gICAgfVxuXG4gICAgaWYgKHBhcmFtcy5zbGlkZXNQZXJWaWV3ICE9PSAnYXV0bycgJiYgcGFyYW1zLnNsaWRlc1BlckNvbHVtbkZpbGwgPT09ICdyb3cnKSB7XG4gICAgICBzbGlkZXNOdW1iZXJFdmVuVG9Sb3dzID0gTWF0aC5tYXgoc2xpZGVzTnVtYmVyRXZlblRvUm93cywgcGFyYW1zLnNsaWRlc1BlclZpZXcgKiBwYXJhbXMuc2xpZGVzUGVyQ29sdW1uKTtcbiAgICB9XG4gIH0gLy8gQ2FsYyBzbGlkZXNcblxuXG4gIHZhciBzbGlkZVNpemU7XG4gIHZhciBzbGlkZXNQZXJDb2x1bW4gPSBwYXJhbXMuc2xpZGVzUGVyQ29sdW1uO1xuICB2YXIgc2xpZGVzUGVyUm93ID0gc2xpZGVzTnVtYmVyRXZlblRvUm93cyAvIHNsaWRlc1BlckNvbHVtbjtcbiAgdmFyIG51bUZ1bGxDb2x1bW5zID0gTWF0aC5mbG9vcihzbGlkZXNMZW5ndGggLyBwYXJhbXMuc2xpZGVzUGVyQ29sdW1uKTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHNsaWRlc0xlbmd0aDsgaSArPSAxKSB7XG4gICAgc2xpZGVTaXplID0gMDtcbiAgICB2YXIgc2xpZGUgPSBzbGlkZXMuZXEoaSk7XG5cbiAgICBpZiAocGFyYW1zLnNsaWRlc1BlckNvbHVtbiA+IDEpIHtcbiAgICAgIC8vIFNldCBzbGlkZXMgb3JkZXJcbiAgICAgIHZhciBuZXdTbGlkZU9yZGVySW5kZXggPSB2b2lkIDA7XG4gICAgICB2YXIgY29sdW1uID0gdm9pZCAwO1xuICAgICAgdmFyIHJvdyA9IHZvaWQgMDtcblxuICAgICAgaWYgKHBhcmFtcy5zbGlkZXNQZXJDb2x1bW5GaWxsID09PSAncm93JyAmJiBwYXJhbXMuc2xpZGVzUGVyR3JvdXAgPiAxKSB7XG4gICAgICAgIHZhciBncm91cEluZGV4ID0gTWF0aC5mbG9vcihpIC8gKHBhcmFtcy5zbGlkZXNQZXJHcm91cCAqIHBhcmFtcy5zbGlkZXNQZXJDb2x1bW4pKTtcbiAgICAgICAgdmFyIHNsaWRlSW5kZXhJbkdyb3VwID0gaSAtIHBhcmFtcy5zbGlkZXNQZXJDb2x1bW4gKiBwYXJhbXMuc2xpZGVzUGVyR3JvdXAgKiBncm91cEluZGV4O1xuICAgICAgICB2YXIgY29sdW1uc0luR3JvdXAgPSBncm91cEluZGV4ID09PSAwID8gcGFyYW1zLnNsaWRlc1Blckdyb3VwIDogTWF0aC5taW4oTWF0aC5jZWlsKChzbGlkZXNMZW5ndGggLSBncm91cEluZGV4ICogc2xpZGVzUGVyQ29sdW1uICogcGFyYW1zLnNsaWRlc1Blckdyb3VwKSAvIHNsaWRlc1BlckNvbHVtbiksIHBhcmFtcy5zbGlkZXNQZXJHcm91cCk7XG4gICAgICAgIHJvdyA9IE1hdGguZmxvb3Ioc2xpZGVJbmRleEluR3JvdXAgLyBjb2x1bW5zSW5Hcm91cCk7XG4gICAgICAgIGNvbHVtbiA9IHNsaWRlSW5kZXhJbkdyb3VwIC0gcm93ICogY29sdW1uc0luR3JvdXAgKyBncm91cEluZGV4ICogcGFyYW1zLnNsaWRlc1Blckdyb3VwO1xuICAgICAgICBuZXdTbGlkZU9yZGVySW5kZXggPSBjb2x1bW4gKyByb3cgKiBzbGlkZXNOdW1iZXJFdmVuVG9Sb3dzIC8gc2xpZGVzUGVyQ29sdW1uO1xuICAgICAgICBzbGlkZS5jc3Moe1xuICAgICAgICAgICctd2Via2l0LWJveC1vcmRpbmFsLWdyb3VwJzogbmV3U2xpZGVPcmRlckluZGV4LFxuICAgICAgICAgICctbW96LWJveC1vcmRpbmFsLWdyb3VwJzogbmV3U2xpZGVPcmRlckluZGV4LFxuICAgICAgICAgICctbXMtZmxleC1vcmRlcic6IG5ld1NsaWRlT3JkZXJJbmRleCxcbiAgICAgICAgICAnLXdlYmtpdC1vcmRlcic6IG5ld1NsaWRlT3JkZXJJbmRleCxcbiAgICAgICAgICBvcmRlcjogbmV3U2xpZGVPcmRlckluZGV4XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmIChwYXJhbXMuc2xpZGVzUGVyQ29sdW1uRmlsbCA9PT0gJ2NvbHVtbicpIHtcbiAgICAgICAgY29sdW1uID0gTWF0aC5mbG9vcihpIC8gc2xpZGVzUGVyQ29sdW1uKTtcbiAgICAgICAgcm93ID0gaSAtIGNvbHVtbiAqIHNsaWRlc1BlckNvbHVtbjtcblxuICAgICAgICBpZiAoY29sdW1uID4gbnVtRnVsbENvbHVtbnMgfHwgY29sdW1uID09PSBudW1GdWxsQ29sdW1ucyAmJiByb3cgPT09IHNsaWRlc1BlckNvbHVtbiAtIDEpIHtcbiAgICAgICAgICByb3cgKz0gMTtcblxuICAgICAgICAgIGlmIChyb3cgPj0gc2xpZGVzUGVyQ29sdW1uKSB7XG4gICAgICAgICAgICByb3cgPSAwO1xuICAgICAgICAgICAgY29sdW1uICs9IDE7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByb3cgPSBNYXRoLmZsb29yKGkgLyBzbGlkZXNQZXJSb3cpO1xuICAgICAgICBjb2x1bW4gPSBpIC0gcm93ICogc2xpZGVzUGVyUm93O1xuICAgICAgfVxuXG4gICAgICBzbGlkZS5jc3MoZ2V0RGlyZWN0aW9uTGFiZWwoJ21hcmdpbi10b3AnKSwgcm93ICE9PSAwID8gcGFyYW1zLnNwYWNlQmV0d2VlbiAmJiBwYXJhbXMuc3BhY2VCZXR3ZWVuICsgXCJweFwiIDogJycpO1xuICAgIH1cblxuICAgIGlmIChzbGlkZS5jc3MoJ2Rpc3BsYXknKSA9PT0gJ25vbmUnKSBjb250aW51ZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXG4gICAgaWYgKHBhcmFtcy5zbGlkZXNQZXJWaWV3ID09PSAnYXV0bycpIHtcbiAgICAgIHZhciBzbGlkZVN0eWxlcyA9IGdldENvbXB1dGVkU3R5bGUoc2xpZGVbMF0pO1xuICAgICAgdmFyIGN1cnJlbnRUcmFuc2Zvcm0gPSBzbGlkZVswXS5zdHlsZS50cmFuc2Zvcm07XG4gICAgICB2YXIgY3VycmVudFdlYktpdFRyYW5zZm9ybSA9IHNsaWRlWzBdLnN0eWxlLndlYmtpdFRyYW5zZm9ybTtcblxuICAgICAgaWYgKGN1cnJlbnRUcmFuc2Zvcm0pIHtcbiAgICAgICAgc2xpZGVbMF0uc3R5bGUudHJhbnNmb3JtID0gJ25vbmUnO1xuICAgICAgfVxuXG4gICAgICBpZiAoY3VycmVudFdlYktpdFRyYW5zZm9ybSkge1xuICAgICAgICBzbGlkZVswXS5zdHlsZS53ZWJraXRUcmFuc2Zvcm0gPSAnbm9uZSc7XG4gICAgICB9XG5cbiAgICAgIGlmIChwYXJhbXMucm91bmRMZW5ndGhzKSB7XG4gICAgICAgIHNsaWRlU2l6ZSA9IHN3aXBlci5pc0hvcml6b250YWwoKSA/IHNsaWRlLm91dGVyV2lkdGgodHJ1ZSkgOiBzbGlkZS5vdXRlckhlaWdodCh0cnVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgICAgICB2YXIgd2lkdGggPSBnZXREaXJlY3Rpb25Qcm9wZXJ0eVZhbHVlKHNsaWRlU3R5bGVzLCAnd2lkdGgnKTtcbiAgICAgICAgdmFyIHBhZGRpbmdMZWZ0ID0gZ2V0RGlyZWN0aW9uUHJvcGVydHlWYWx1ZShzbGlkZVN0eWxlcywgJ3BhZGRpbmctbGVmdCcpO1xuICAgICAgICB2YXIgcGFkZGluZ1JpZ2h0ID0gZ2V0RGlyZWN0aW9uUHJvcGVydHlWYWx1ZShzbGlkZVN0eWxlcywgJ3BhZGRpbmctcmlnaHQnKTtcbiAgICAgICAgdmFyIG1hcmdpbkxlZnQgPSBnZXREaXJlY3Rpb25Qcm9wZXJ0eVZhbHVlKHNsaWRlU3R5bGVzLCAnbWFyZ2luLWxlZnQnKTtcbiAgICAgICAgdmFyIG1hcmdpblJpZ2h0ID0gZ2V0RGlyZWN0aW9uUHJvcGVydHlWYWx1ZShzbGlkZVN0eWxlcywgJ21hcmdpbi1yaWdodCcpO1xuICAgICAgICB2YXIgYm94U2l6aW5nID0gc2xpZGVTdHlsZXMuZ2V0UHJvcGVydHlWYWx1ZSgnYm94LXNpemluZycpO1xuXG4gICAgICAgIGlmIChib3hTaXppbmcgJiYgYm94U2l6aW5nID09PSAnYm9yZGVyLWJveCcpIHtcbiAgICAgICAgICBzbGlkZVNpemUgPSB3aWR0aCArIG1hcmdpbkxlZnQgKyBtYXJnaW5SaWdodDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgX3NsaWRlJCA9IHNsaWRlWzBdLFxuICAgICAgICAgICAgICBjbGllbnRXaWR0aCA9IF9zbGlkZSQuY2xpZW50V2lkdGgsXG4gICAgICAgICAgICAgIG9mZnNldFdpZHRoID0gX3NsaWRlJC5vZmZzZXRXaWR0aDtcbiAgICAgICAgICBzbGlkZVNpemUgPSB3aWR0aCArIHBhZGRpbmdMZWZ0ICsgcGFkZGluZ1JpZ2h0ICsgbWFyZ2luTGVmdCArIG1hcmdpblJpZ2h0ICsgKG9mZnNldFdpZHRoIC0gY2xpZW50V2lkdGgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChjdXJyZW50VHJhbnNmb3JtKSB7XG4gICAgICAgIHNsaWRlWzBdLnN0eWxlLnRyYW5zZm9ybSA9IGN1cnJlbnRUcmFuc2Zvcm07XG4gICAgICB9XG5cbiAgICAgIGlmIChjdXJyZW50V2ViS2l0VHJhbnNmb3JtKSB7XG4gICAgICAgIHNsaWRlWzBdLnN0eWxlLndlYmtpdFRyYW5zZm9ybSA9IGN1cnJlbnRXZWJLaXRUcmFuc2Zvcm07XG4gICAgICB9XG5cbiAgICAgIGlmIChwYXJhbXMucm91bmRMZW5ndGhzKSBzbGlkZVNpemUgPSBNYXRoLmZsb29yKHNsaWRlU2l6ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNsaWRlU2l6ZSA9IChzd2lwZXJTaXplIC0gKHBhcmFtcy5zbGlkZXNQZXJWaWV3IC0gMSkgKiBzcGFjZUJldHdlZW4pIC8gcGFyYW1zLnNsaWRlc1BlclZpZXc7XG4gICAgICBpZiAocGFyYW1zLnJvdW5kTGVuZ3Rocykgc2xpZGVTaXplID0gTWF0aC5mbG9vcihzbGlkZVNpemUpO1xuXG4gICAgICBpZiAoc2xpZGVzW2ldKSB7XG4gICAgICAgIHNsaWRlc1tpXS5zdHlsZVtnZXREaXJlY3Rpb25MYWJlbCgnd2lkdGgnKV0gPSBzbGlkZVNpemUgKyBcInB4XCI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHNsaWRlc1tpXSkge1xuICAgICAgc2xpZGVzW2ldLnN3aXBlclNsaWRlU2l6ZSA9IHNsaWRlU2l6ZTtcbiAgICB9XG5cbiAgICBzbGlkZXNTaXplc0dyaWQucHVzaChzbGlkZVNpemUpO1xuXG4gICAgaWYgKHBhcmFtcy5jZW50ZXJlZFNsaWRlcykge1xuICAgICAgc2xpZGVQb3NpdGlvbiA9IHNsaWRlUG9zaXRpb24gKyBzbGlkZVNpemUgLyAyICsgcHJldlNsaWRlU2l6ZSAvIDIgKyBzcGFjZUJldHdlZW47XG4gICAgICBpZiAocHJldlNsaWRlU2l6ZSA9PT0gMCAmJiBpICE9PSAwKSBzbGlkZVBvc2l0aW9uID0gc2xpZGVQb3NpdGlvbiAtIHN3aXBlclNpemUgLyAyIC0gc3BhY2VCZXR3ZWVuO1xuICAgICAgaWYgKGkgPT09IDApIHNsaWRlUG9zaXRpb24gPSBzbGlkZVBvc2l0aW9uIC0gc3dpcGVyU2l6ZSAvIDIgLSBzcGFjZUJldHdlZW47XG4gICAgICBpZiAoTWF0aC5hYnMoc2xpZGVQb3NpdGlvbikgPCAxIC8gMTAwMCkgc2xpZGVQb3NpdGlvbiA9IDA7XG4gICAgICBpZiAocGFyYW1zLnJvdW5kTGVuZ3Rocykgc2xpZGVQb3NpdGlvbiA9IE1hdGguZmxvb3Ioc2xpZGVQb3NpdGlvbik7XG4gICAgICBpZiAoaW5kZXggJSBwYXJhbXMuc2xpZGVzUGVyR3JvdXAgPT09IDApIHNuYXBHcmlkLnB1c2goc2xpZGVQb3NpdGlvbik7XG4gICAgICBzbGlkZXNHcmlkLnB1c2goc2xpZGVQb3NpdGlvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChwYXJhbXMucm91bmRMZW5ndGhzKSBzbGlkZVBvc2l0aW9uID0gTWF0aC5mbG9vcihzbGlkZVBvc2l0aW9uKTtcbiAgICAgIGlmICgoaW5kZXggLSBNYXRoLm1pbihzd2lwZXIucGFyYW1zLnNsaWRlc1Blckdyb3VwU2tpcCwgaW5kZXgpKSAlIHN3aXBlci5wYXJhbXMuc2xpZGVzUGVyR3JvdXAgPT09IDApIHNuYXBHcmlkLnB1c2goc2xpZGVQb3NpdGlvbik7XG4gICAgICBzbGlkZXNHcmlkLnB1c2goc2xpZGVQb3NpdGlvbik7XG4gICAgICBzbGlkZVBvc2l0aW9uID0gc2xpZGVQb3NpdGlvbiArIHNsaWRlU2l6ZSArIHNwYWNlQmV0d2VlbjtcbiAgICB9XG5cbiAgICBzd2lwZXIudmlydHVhbFNpemUgKz0gc2xpZGVTaXplICsgc3BhY2VCZXR3ZWVuO1xuICAgIHByZXZTbGlkZVNpemUgPSBzbGlkZVNpemU7XG4gICAgaW5kZXggKz0gMTtcbiAgfVxuXG4gIHN3aXBlci52aXJ0dWFsU2l6ZSA9IE1hdGgubWF4KHN3aXBlci52aXJ0dWFsU2l6ZSwgc3dpcGVyU2l6ZSkgKyBvZmZzZXRBZnRlcjtcbiAgdmFyIG5ld1NsaWRlc0dyaWQ7XG5cbiAgaWYgKHJ0bCAmJiB3cm9uZ1JUTCAmJiAocGFyYW1zLmVmZmVjdCA9PT0gJ3NsaWRlJyB8fCBwYXJhbXMuZWZmZWN0ID09PSAnY292ZXJmbG93JykpIHtcbiAgICAkd3JhcHBlckVsLmNzcyh7XG4gICAgICB3aWR0aDogc3dpcGVyLnZpcnR1YWxTaXplICsgcGFyYW1zLnNwYWNlQmV0d2VlbiArIFwicHhcIlxuICAgIH0pO1xuICB9XG5cbiAgaWYgKHBhcmFtcy5zZXRXcmFwcGVyU2l6ZSkge1xuICAgIHZhciBfJHdyYXBwZXJFbCRjc3M7XG5cbiAgICAkd3JhcHBlckVsLmNzcygoXyR3cmFwcGVyRWwkY3NzID0ge30sIF8kd3JhcHBlckVsJGNzc1tnZXREaXJlY3Rpb25MYWJlbCgnd2lkdGgnKV0gPSBzd2lwZXIudmlydHVhbFNpemUgKyBwYXJhbXMuc3BhY2VCZXR3ZWVuICsgXCJweFwiLCBfJHdyYXBwZXJFbCRjc3MpKTtcbiAgfVxuXG4gIGlmIChwYXJhbXMuc2xpZGVzUGVyQ29sdW1uID4gMSkge1xuICAgIHZhciBfJHdyYXBwZXJFbCRjc3MyO1xuXG4gICAgc3dpcGVyLnZpcnR1YWxTaXplID0gKHNsaWRlU2l6ZSArIHBhcmFtcy5zcGFjZUJldHdlZW4pICogc2xpZGVzTnVtYmVyRXZlblRvUm93cztcbiAgICBzd2lwZXIudmlydHVhbFNpemUgPSBNYXRoLmNlaWwoc3dpcGVyLnZpcnR1YWxTaXplIC8gcGFyYW1zLnNsaWRlc1BlckNvbHVtbikgLSBwYXJhbXMuc3BhY2VCZXR3ZWVuO1xuICAgICR3cmFwcGVyRWwuY3NzKChfJHdyYXBwZXJFbCRjc3MyID0ge30sIF8kd3JhcHBlckVsJGNzczJbZ2V0RGlyZWN0aW9uTGFiZWwoJ3dpZHRoJyldID0gc3dpcGVyLnZpcnR1YWxTaXplICsgcGFyYW1zLnNwYWNlQmV0d2VlbiArIFwicHhcIiwgXyR3cmFwcGVyRWwkY3NzMikpO1xuXG4gICAgaWYgKHBhcmFtcy5jZW50ZXJlZFNsaWRlcykge1xuICAgICAgbmV3U2xpZGVzR3JpZCA9IFtdO1xuXG4gICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgc25hcEdyaWQubGVuZ3RoOyBfaSArPSAxKSB7XG4gICAgICAgIHZhciBzbGlkZXNHcmlkSXRlbSA9IHNuYXBHcmlkW19pXTtcbiAgICAgICAgaWYgKHBhcmFtcy5yb3VuZExlbmd0aHMpIHNsaWRlc0dyaWRJdGVtID0gTWF0aC5mbG9vcihzbGlkZXNHcmlkSXRlbSk7XG4gICAgICAgIGlmIChzbmFwR3JpZFtfaV0gPCBzd2lwZXIudmlydHVhbFNpemUgKyBzbmFwR3JpZFswXSkgbmV3U2xpZGVzR3JpZC5wdXNoKHNsaWRlc0dyaWRJdGVtKTtcbiAgICAgIH1cblxuICAgICAgc25hcEdyaWQgPSBuZXdTbGlkZXNHcmlkO1xuICAgIH1cbiAgfSAvLyBSZW1vdmUgbGFzdCBncmlkIGVsZW1lbnRzIGRlcGVuZGluZyBvbiB3aWR0aFxuXG5cbiAgaWYgKCFwYXJhbXMuY2VudGVyZWRTbGlkZXMpIHtcbiAgICBuZXdTbGlkZXNHcmlkID0gW107XG5cbiAgICBmb3IgKHZhciBfaTIgPSAwOyBfaTIgPCBzbmFwR3JpZC5sZW5ndGg7IF9pMiArPSAxKSB7XG4gICAgICB2YXIgX3NsaWRlc0dyaWRJdGVtID0gc25hcEdyaWRbX2kyXTtcbiAgICAgIGlmIChwYXJhbXMucm91bmRMZW5ndGhzKSBfc2xpZGVzR3JpZEl0ZW0gPSBNYXRoLmZsb29yKF9zbGlkZXNHcmlkSXRlbSk7XG5cbiAgICAgIGlmIChzbmFwR3JpZFtfaTJdIDw9IHN3aXBlci52aXJ0dWFsU2l6ZSAtIHN3aXBlclNpemUpIHtcbiAgICAgICAgbmV3U2xpZGVzR3JpZC5wdXNoKF9zbGlkZXNHcmlkSXRlbSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgc25hcEdyaWQgPSBuZXdTbGlkZXNHcmlkO1xuXG4gICAgaWYgKE1hdGguZmxvb3Ioc3dpcGVyLnZpcnR1YWxTaXplIC0gc3dpcGVyU2l6ZSkgLSBNYXRoLmZsb29yKHNuYXBHcmlkW3NuYXBHcmlkLmxlbmd0aCAtIDFdKSA+IDEpIHtcbiAgICAgIHNuYXBHcmlkLnB1c2goc3dpcGVyLnZpcnR1YWxTaXplIC0gc3dpcGVyU2l6ZSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHNuYXBHcmlkLmxlbmd0aCA9PT0gMCkgc25hcEdyaWQgPSBbMF07XG5cbiAgaWYgKHBhcmFtcy5zcGFjZUJldHdlZW4gIT09IDApIHtcbiAgICB2YXIgX3NsaWRlcyRmaWx0ZXIkY3NzO1xuXG4gICAgdmFyIGtleSA9IHN3aXBlci5pc0hvcml6b250YWwoKSAmJiBydGwgPyAnbWFyZ2luTGVmdCcgOiBnZXREaXJlY3Rpb25MYWJlbCgnbWFyZ2luUmlnaHQnKTtcbiAgICBzbGlkZXMuZmlsdGVyKGZ1bmN0aW9uIChfLCBzbGlkZUluZGV4KSB7XG4gICAgICBpZiAoIXBhcmFtcy5jc3NNb2RlKSByZXR1cm4gdHJ1ZTtcblxuICAgICAgaWYgKHNsaWRlSW5kZXggPT09IHNsaWRlcy5sZW5ndGggLSAxKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSkuY3NzKChfc2xpZGVzJGZpbHRlciRjc3MgPSB7fSwgX3NsaWRlcyRmaWx0ZXIkY3NzW2tleV0gPSBzcGFjZUJldHdlZW4gKyBcInB4XCIsIF9zbGlkZXMkZmlsdGVyJGNzcykpO1xuICB9XG5cbiAgaWYgKHBhcmFtcy5jZW50ZXJlZFNsaWRlcyAmJiBwYXJhbXMuY2VudGVyZWRTbGlkZXNCb3VuZHMpIHtcbiAgICB2YXIgYWxsU2xpZGVzU2l6ZSA9IDA7XG4gICAgc2xpZGVzU2l6ZXNHcmlkLmZvckVhY2goZnVuY3Rpb24gKHNsaWRlU2l6ZVZhbHVlKSB7XG4gICAgICBhbGxTbGlkZXNTaXplICs9IHNsaWRlU2l6ZVZhbHVlICsgKHBhcmFtcy5zcGFjZUJldHdlZW4gPyBwYXJhbXMuc3BhY2VCZXR3ZWVuIDogMCk7XG4gICAgfSk7XG4gICAgYWxsU2xpZGVzU2l6ZSAtPSBwYXJhbXMuc3BhY2VCZXR3ZWVuO1xuICAgIHZhciBtYXhTbmFwID0gYWxsU2xpZGVzU2l6ZSAtIHN3aXBlclNpemU7XG4gICAgc25hcEdyaWQgPSBzbmFwR3JpZC5tYXAoZnVuY3Rpb24gKHNuYXApIHtcbiAgICAgIGlmIChzbmFwIDwgMCkgcmV0dXJuIC1vZmZzZXRCZWZvcmU7XG4gICAgICBpZiAoc25hcCA+IG1heFNuYXApIHJldHVybiBtYXhTbmFwICsgb2Zmc2V0QWZ0ZXI7XG4gICAgICByZXR1cm4gc25hcDtcbiAgICB9KTtcbiAgfVxuXG4gIGlmIChwYXJhbXMuY2VudGVySW5zdWZmaWNpZW50U2xpZGVzKSB7XG4gICAgdmFyIF9hbGxTbGlkZXNTaXplID0gMDtcbiAgICBzbGlkZXNTaXplc0dyaWQuZm9yRWFjaChmdW5jdGlvbiAoc2xpZGVTaXplVmFsdWUpIHtcbiAgICAgIF9hbGxTbGlkZXNTaXplICs9IHNsaWRlU2l6ZVZhbHVlICsgKHBhcmFtcy5zcGFjZUJldHdlZW4gPyBwYXJhbXMuc3BhY2VCZXR3ZWVuIDogMCk7XG4gICAgfSk7XG4gICAgX2FsbFNsaWRlc1NpemUgLT0gcGFyYW1zLnNwYWNlQmV0d2VlbjtcblxuICAgIGlmIChfYWxsU2xpZGVzU2l6ZSA8IHN3aXBlclNpemUpIHtcbiAgICAgIHZhciBhbGxTbGlkZXNPZmZzZXQgPSAoc3dpcGVyU2l6ZSAtIF9hbGxTbGlkZXNTaXplKSAvIDI7XG4gICAgICBzbmFwR3JpZC5mb3JFYWNoKGZ1bmN0aW9uIChzbmFwLCBzbmFwSW5kZXgpIHtcbiAgICAgICAgc25hcEdyaWRbc25hcEluZGV4XSA9IHNuYXAgLSBhbGxTbGlkZXNPZmZzZXQ7XG4gICAgICB9KTtcbiAgICAgIHNsaWRlc0dyaWQuZm9yRWFjaChmdW5jdGlvbiAoc25hcCwgc25hcEluZGV4KSB7XG4gICAgICAgIHNsaWRlc0dyaWRbc25hcEluZGV4XSA9IHNuYXAgKyBhbGxTbGlkZXNPZmZzZXQ7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBleHRlbmQoc3dpcGVyLCB7XG4gICAgc2xpZGVzOiBzbGlkZXMsXG4gICAgc25hcEdyaWQ6IHNuYXBHcmlkLFxuICAgIHNsaWRlc0dyaWQ6IHNsaWRlc0dyaWQsXG4gICAgc2xpZGVzU2l6ZXNHcmlkOiBzbGlkZXNTaXplc0dyaWRcbiAgfSk7XG5cbiAgaWYgKHNsaWRlc0xlbmd0aCAhPT0gcHJldmlvdXNTbGlkZXNMZW5ndGgpIHtcbiAgICBzd2lwZXIuZW1pdCgnc2xpZGVzTGVuZ3RoQ2hhbmdlJyk7XG4gIH1cblxuICBpZiAoc25hcEdyaWQubGVuZ3RoICE9PSBwcmV2aW91c1NuYXBHcmlkTGVuZ3RoKSB7XG4gICAgaWYgKHN3aXBlci5wYXJhbXMud2F0Y2hPdmVyZmxvdykgc3dpcGVyLmNoZWNrT3ZlcmZsb3coKTtcbiAgICBzd2lwZXIuZW1pdCgnc25hcEdyaWRMZW5ndGhDaGFuZ2UnKTtcbiAgfVxuXG4gIGlmIChzbGlkZXNHcmlkLmxlbmd0aCAhPT0gcHJldmlvdXNTbGlkZXNHcmlkTGVuZ3RoKSB7XG4gICAgc3dpcGVyLmVtaXQoJ3NsaWRlc0dyaWRMZW5ndGhDaGFuZ2UnKTtcbiAgfVxuXG4gIGlmIChwYXJhbXMud2F0Y2hTbGlkZXNQcm9ncmVzcyB8fCBwYXJhbXMud2F0Y2hTbGlkZXNWaXNpYmlsaXR5KSB7XG4gICAgc3dpcGVyLnVwZGF0ZVNsaWRlc09mZnNldCgpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXBkYXRlU2xpZGVzQ2xhc3NlcygpIHtcbiAgdmFyIHN3aXBlciA9IHRoaXM7XG4gIHZhciBzbGlkZXMgPSBzd2lwZXIuc2xpZGVzLFxuICAgICAgcGFyYW1zID0gc3dpcGVyLnBhcmFtcyxcbiAgICAgICR3cmFwcGVyRWwgPSBzd2lwZXIuJHdyYXBwZXJFbCxcbiAgICAgIGFjdGl2ZUluZGV4ID0gc3dpcGVyLmFjdGl2ZUluZGV4LFxuICAgICAgcmVhbEluZGV4ID0gc3dpcGVyLnJlYWxJbmRleDtcbiAgdmFyIGlzVmlydHVhbCA9IHN3aXBlci52aXJ0dWFsICYmIHBhcmFtcy52aXJ0dWFsLmVuYWJsZWQ7XG4gIHNsaWRlcy5yZW1vdmVDbGFzcyhwYXJhbXMuc2xpZGVBY3RpdmVDbGFzcyArIFwiIFwiICsgcGFyYW1zLnNsaWRlTmV4dENsYXNzICsgXCIgXCIgKyBwYXJhbXMuc2xpZGVQcmV2Q2xhc3MgKyBcIiBcIiArIHBhcmFtcy5zbGlkZUR1cGxpY2F0ZUFjdGl2ZUNsYXNzICsgXCIgXCIgKyBwYXJhbXMuc2xpZGVEdXBsaWNhdGVOZXh0Q2xhc3MgKyBcIiBcIiArIHBhcmFtcy5zbGlkZUR1cGxpY2F0ZVByZXZDbGFzcyk7XG4gIHZhciBhY3RpdmVTbGlkZTtcblxuICBpZiAoaXNWaXJ0dWFsKSB7XG4gICAgYWN0aXZlU2xpZGUgPSBzd2lwZXIuJHdyYXBwZXJFbC5maW5kKFwiLlwiICsgcGFyYW1zLnNsaWRlQ2xhc3MgKyBcIltkYXRhLXN3aXBlci1zbGlkZS1pbmRleD1cXFwiXCIgKyBhY3RpdmVJbmRleCArIFwiXFxcIl1cIik7XG4gIH0gZWxzZSB7XG4gICAgYWN0aXZlU2xpZGUgPSBzbGlkZXMuZXEoYWN0aXZlSW5kZXgpO1xuICB9IC8vIEFjdGl2ZSBjbGFzc2VzXG5cblxuICBhY3RpdmVTbGlkZS5hZGRDbGFzcyhwYXJhbXMuc2xpZGVBY3RpdmVDbGFzcyk7XG5cbiAgaWYgKHBhcmFtcy5sb29wKSB7XG4gICAgLy8gRHVwbGljYXRlIHRvIGFsbCBsb29wZWQgc2xpZGVzXG4gICAgaWYgKGFjdGl2ZVNsaWRlLmhhc0NsYXNzKHBhcmFtcy5zbGlkZUR1cGxpY2F0ZUNsYXNzKSkge1xuICAgICAgJHdyYXBwZXJFbC5jaGlsZHJlbihcIi5cIiArIHBhcmFtcy5zbGlkZUNsYXNzICsgXCI6bm90KC5cIiArIHBhcmFtcy5zbGlkZUR1cGxpY2F0ZUNsYXNzICsgXCIpW2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4PVxcXCJcIiArIHJlYWxJbmRleCArIFwiXFxcIl1cIikuYWRkQ2xhc3MocGFyYW1zLnNsaWRlRHVwbGljYXRlQWN0aXZlQ2xhc3MpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkd3JhcHBlckVsLmNoaWxkcmVuKFwiLlwiICsgcGFyYW1zLnNsaWRlQ2xhc3MgKyBcIi5cIiArIHBhcmFtcy5zbGlkZUR1cGxpY2F0ZUNsYXNzICsgXCJbZGF0YS1zd2lwZXItc2xpZGUtaW5kZXg9XFxcIlwiICsgcmVhbEluZGV4ICsgXCJcXFwiXVwiKS5hZGRDbGFzcyhwYXJhbXMuc2xpZGVEdXBsaWNhdGVBY3RpdmVDbGFzcyk7XG4gICAgfVxuICB9IC8vIE5leHQgU2xpZGVcblxuXG4gIHZhciBuZXh0U2xpZGUgPSBhY3RpdmVTbGlkZS5uZXh0QWxsKFwiLlwiICsgcGFyYW1zLnNsaWRlQ2xhc3MpLmVxKDApLmFkZENsYXNzKHBhcmFtcy5zbGlkZU5leHRDbGFzcyk7XG5cbiAgaWYgKHBhcmFtcy5sb29wICYmIG5leHRTbGlkZS5sZW5ndGggPT09IDApIHtcbiAgICBuZXh0U2xpZGUgPSBzbGlkZXMuZXEoMCk7XG4gICAgbmV4dFNsaWRlLmFkZENsYXNzKHBhcmFtcy5zbGlkZU5leHRDbGFzcyk7XG4gIH0gLy8gUHJldiBTbGlkZVxuXG5cbiAgdmFyIHByZXZTbGlkZSA9IGFjdGl2ZVNsaWRlLnByZXZBbGwoXCIuXCIgKyBwYXJhbXMuc2xpZGVDbGFzcykuZXEoMCkuYWRkQ2xhc3MocGFyYW1zLnNsaWRlUHJldkNsYXNzKTtcblxuICBpZiAocGFyYW1zLmxvb3AgJiYgcHJldlNsaWRlLmxlbmd0aCA9PT0gMCkge1xuICAgIHByZXZTbGlkZSA9IHNsaWRlcy5lcSgtMSk7XG4gICAgcHJldlNsaWRlLmFkZENsYXNzKHBhcmFtcy5zbGlkZVByZXZDbGFzcyk7XG4gIH1cblxuICBpZiAocGFyYW1zLmxvb3ApIHtcbiAgICAvLyBEdXBsaWNhdGUgdG8gYWxsIGxvb3BlZCBzbGlkZXNcbiAgICBpZiAobmV4dFNsaWRlLmhhc0NsYXNzKHBhcmFtcy5zbGlkZUR1cGxpY2F0ZUNsYXNzKSkge1xuICAgICAgJHdyYXBwZXJFbC5jaGlsZHJlbihcIi5cIiArIHBhcmFtcy5zbGlkZUNsYXNzICsgXCI6bm90KC5cIiArIHBhcmFtcy5zbGlkZUR1cGxpY2F0ZUNsYXNzICsgXCIpW2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4PVxcXCJcIiArIG5leHRTbGlkZS5hdHRyKCdkYXRhLXN3aXBlci1zbGlkZS1pbmRleCcpICsgXCJcXFwiXVwiKS5hZGRDbGFzcyhwYXJhbXMuc2xpZGVEdXBsaWNhdGVOZXh0Q2xhc3MpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkd3JhcHBlckVsLmNoaWxkcmVuKFwiLlwiICsgcGFyYW1zLnNsaWRlQ2xhc3MgKyBcIi5cIiArIHBhcmFtcy5zbGlkZUR1cGxpY2F0ZUNsYXNzICsgXCJbZGF0YS1zd2lwZXItc2xpZGUtaW5kZXg9XFxcIlwiICsgbmV4dFNsaWRlLmF0dHIoJ2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4JykgKyBcIlxcXCJdXCIpLmFkZENsYXNzKHBhcmFtcy5zbGlkZUR1cGxpY2F0ZU5leHRDbGFzcyk7XG4gICAgfVxuXG4gICAgaWYgKHByZXZTbGlkZS5oYXNDbGFzcyhwYXJhbXMuc2xpZGVEdXBsaWNhdGVDbGFzcykpIHtcbiAgICAgICR3cmFwcGVyRWwuY2hpbGRyZW4oXCIuXCIgKyBwYXJhbXMuc2xpZGVDbGFzcyArIFwiOm5vdCguXCIgKyBwYXJhbXMuc2xpZGVEdXBsaWNhdGVDbGFzcyArIFwiKVtkYXRhLXN3aXBlci1zbGlkZS1pbmRleD1cXFwiXCIgKyBwcmV2U2xpZGUuYXR0cignZGF0YS1zd2lwZXItc2xpZGUtaW5kZXgnKSArIFwiXFxcIl1cIikuYWRkQ2xhc3MocGFyYW1zLnNsaWRlRHVwbGljYXRlUHJldkNsYXNzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJHdyYXBwZXJFbC5jaGlsZHJlbihcIi5cIiArIHBhcmFtcy5zbGlkZUNsYXNzICsgXCIuXCIgKyBwYXJhbXMuc2xpZGVEdXBsaWNhdGVDbGFzcyArIFwiW2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4PVxcXCJcIiArIHByZXZTbGlkZS5hdHRyKCdkYXRhLXN3aXBlci1zbGlkZS1pbmRleCcpICsgXCJcXFwiXVwiKS5hZGRDbGFzcyhwYXJhbXMuc2xpZGVEdXBsaWNhdGVQcmV2Q2xhc3MpO1xuICAgIH1cbiAgfVxuXG4gIHN3aXBlci5lbWl0U2xpZGVzQ2xhc3NlcygpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVwZGF0ZVNsaWRlc09mZnNldCgpIHtcbiAgdmFyIHN3aXBlciA9IHRoaXM7XG4gIHZhciBzbGlkZXMgPSBzd2lwZXIuc2xpZGVzO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc2xpZGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgc2xpZGVzW2ldLnN3aXBlclNsaWRlT2Zmc2V0ID0gc3dpcGVyLmlzSG9yaXpvbnRhbCgpID8gc2xpZGVzW2ldLm9mZnNldExlZnQgOiBzbGlkZXNbaV0ub2Zmc2V0VG9wO1xuICB9XG59IiwiaW1wb3J0ICQgZnJvbSAnLi4vLi4vLi4vdXRpbHMvZG9tJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVwZGF0ZVNsaWRlc1Byb2dyZXNzKHRyYW5zbGF0ZSkge1xuICBpZiAodHJhbnNsYXRlID09PSB2b2lkIDApIHtcbiAgICB0cmFuc2xhdGUgPSB0aGlzICYmIHRoaXMudHJhbnNsYXRlIHx8IDA7XG4gIH1cblxuICB2YXIgc3dpcGVyID0gdGhpcztcbiAgdmFyIHBhcmFtcyA9IHN3aXBlci5wYXJhbXM7XG4gIHZhciBzbGlkZXMgPSBzd2lwZXIuc2xpZGVzLFxuICAgICAgcnRsID0gc3dpcGVyLnJ0bFRyYW5zbGF0ZTtcbiAgaWYgKHNsaWRlcy5sZW5ndGggPT09IDApIHJldHVybjtcbiAgaWYgKHR5cGVvZiBzbGlkZXNbMF0uc3dpcGVyU2xpZGVPZmZzZXQgPT09ICd1bmRlZmluZWQnKSBzd2lwZXIudXBkYXRlU2xpZGVzT2Zmc2V0KCk7XG4gIHZhciBvZmZzZXRDZW50ZXIgPSAtdHJhbnNsYXRlO1xuICBpZiAocnRsKSBvZmZzZXRDZW50ZXIgPSB0cmFuc2xhdGU7IC8vIFZpc2libGUgU2xpZGVzXG5cbiAgc2xpZGVzLnJlbW92ZUNsYXNzKHBhcmFtcy5zbGlkZVZpc2libGVDbGFzcyk7XG4gIHN3aXBlci52aXNpYmxlU2xpZGVzSW5kZXhlcyA9IFtdO1xuICBzd2lwZXIudmlzaWJsZVNsaWRlcyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc2xpZGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgdmFyIHNsaWRlID0gc2xpZGVzW2ldO1xuICAgIHZhciBzbGlkZVByb2dyZXNzID0gKG9mZnNldENlbnRlciArIChwYXJhbXMuY2VudGVyZWRTbGlkZXMgPyBzd2lwZXIubWluVHJhbnNsYXRlKCkgOiAwKSAtIHNsaWRlLnN3aXBlclNsaWRlT2Zmc2V0KSAvIChzbGlkZS5zd2lwZXJTbGlkZVNpemUgKyBwYXJhbXMuc3BhY2VCZXR3ZWVuKTtcblxuICAgIGlmIChwYXJhbXMud2F0Y2hTbGlkZXNWaXNpYmlsaXR5IHx8IHBhcmFtcy5jZW50ZXJlZFNsaWRlcyAmJiBwYXJhbXMuYXV0b0hlaWdodCkge1xuICAgICAgdmFyIHNsaWRlQmVmb3JlID0gLShvZmZzZXRDZW50ZXIgLSBzbGlkZS5zd2lwZXJTbGlkZU9mZnNldCk7XG4gICAgICB2YXIgc2xpZGVBZnRlciA9IHNsaWRlQmVmb3JlICsgc3dpcGVyLnNsaWRlc1NpemVzR3JpZFtpXTtcbiAgICAgIHZhciBpc1Zpc2libGUgPSBzbGlkZUJlZm9yZSA+PSAwICYmIHNsaWRlQmVmb3JlIDwgc3dpcGVyLnNpemUgLSAxIHx8IHNsaWRlQWZ0ZXIgPiAxICYmIHNsaWRlQWZ0ZXIgPD0gc3dpcGVyLnNpemUgfHwgc2xpZGVCZWZvcmUgPD0gMCAmJiBzbGlkZUFmdGVyID49IHN3aXBlci5zaXplO1xuXG4gICAgICBpZiAoaXNWaXNpYmxlKSB7XG4gICAgICAgIHN3aXBlci52aXNpYmxlU2xpZGVzLnB1c2goc2xpZGUpO1xuICAgICAgICBzd2lwZXIudmlzaWJsZVNsaWRlc0luZGV4ZXMucHVzaChpKTtcbiAgICAgICAgc2xpZGVzLmVxKGkpLmFkZENsYXNzKHBhcmFtcy5zbGlkZVZpc2libGVDbGFzcyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgc2xpZGUucHJvZ3Jlc3MgPSBydGwgPyAtc2xpZGVQcm9ncmVzcyA6IHNsaWRlUHJvZ3Jlc3M7XG4gIH1cblxuICBzd2lwZXIudmlzaWJsZVNsaWRlcyA9ICQoc3dpcGVyLnZpc2libGVTbGlkZXMpO1xufSIsImZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbmltcG9ydCB7IGdldFdpbmRvdyB9IGZyb20gJ3Nzci13aW5kb3cnO1xuaW1wb3J0IHsgYmluZE1vZHVsZU1ldGhvZHMgfSBmcm9tICcuLi8uLi91dGlscy91dGlscyc7XG52YXIgT2JzZXJ2ZXIgPSB7XG4gIGF0dGFjaDogZnVuY3Rpb24gYXR0YWNoKHRhcmdldCwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICB9XG5cbiAgICB2YXIgd2luZG93ID0gZ2V0V2luZG93KCk7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgdmFyIE9ic2VydmVyRnVuYyA9IHdpbmRvdy5NdXRhdGlvbk9ic2VydmVyIHx8IHdpbmRvdy5XZWJraXRNdXRhdGlvbk9ic2VydmVyO1xuICAgIHZhciBvYnNlcnZlciA9IG5ldyBPYnNlcnZlckZ1bmMoZnVuY3Rpb24gKG11dGF0aW9ucykge1xuICAgICAgLy8gVGhlIG9ic2VydmVyVXBkYXRlIGV2ZW50IHNob3VsZCBvbmx5IGJlIHRyaWdnZXJlZFxuICAgICAgLy8gb25jZSBkZXNwaXRlIHRoZSBudW1iZXIgb2YgbXV0YXRpb25zLiAgQWRkaXRpb25hbFxuICAgICAgLy8gdHJpZ2dlcnMgYXJlIHJlZHVuZGFudCBhbmQgYXJlIHZlcnkgY29zdGx5XG4gICAgICBpZiAobXV0YXRpb25zLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICBzd2lwZXIuZW1pdCgnb2JzZXJ2ZXJVcGRhdGUnLCBtdXRhdGlvbnNbMF0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBvYnNlcnZlclVwZGF0ZSA9IGZ1bmN0aW9uIG9ic2VydmVyVXBkYXRlKCkge1xuICAgICAgICBzd2lwZXIuZW1pdCgnb2JzZXJ2ZXJVcGRhdGUnLCBtdXRhdGlvbnNbMF0pO1xuICAgICAgfTtcblxuICAgICAgaWYgKHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUpIHtcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShvYnNlcnZlclVwZGF0ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3aW5kb3cuc2V0VGltZW91dChvYnNlcnZlclVwZGF0ZSwgMCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgb2JzZXJ2ZXIub2JzZXJ2ZSh0YXJnZXQsIHtcbiAgICAgIGF0dHJpYnV0ZXM6IHR5cGVvZiBvcHRpb25zLmF0dHJpYnV0ZXMgPT09ICd1bmRlZmluZWQnID8gdHJ1ZSA6IG9wdGlvbnMuYXR0cmlidXRlcyxcbiAgICAgIGNoaWxkTGlzdDogdHlwZW9mIG9wdGlvbnMuY2hpbGRMaXN0ID09PSAndW5kZWZpbmVkJyA/IHRydWUgOiBvcHRpb25zLmNoaWxkTGlzdCxcbiAgICAgIGNoYXJhY3RlckRhdGE6IHR5cGVvZiBvcHRpb25zLmNoYXJhY3RlckRhdGEgPT09ICd1bmRlZmluZWQnID8gdHJ1ZSA6IG9wdGlvbnMuY2hhcmFjdGVyRGF0YVxuICAgIH0pO1xuICAgIHN3aXBlci5vYnNlcnZlci5vYnNlcnZlcnMucHVzaChvYnNlcnZlcik7XG4gIH0sXG4gIGluaXQ6IGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgaWYgKCFzd2lwZXIuc3VwcG9ydC5vYnNlcnZlciB8fCAhc3dpcGVyLnBhcmFtcy5vYnNlcnZlcikgcmV0dXJuO1xuXG4gICAgaWYgKHN3aXBlci5wYXJhbXMub2JzZXJ2ZVBhcmVudHMpIHtcbiAgICAgIHZhciBjb250YWluZXJQYXJlbnRzID0gc3dpcGVyLiRlbC5wYXJlbnRzKCk7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29udGFpbmVyUGFyZW50cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBzd2lwZXIub2JzZXJ2ZXIuYXR0YWNoKGNvbnRhaW5lclBhcmVudHNbaV0pO1xuICAgICAgfVxuICAgIH0gLy8gT2JzZXJ2ZSBjb250YWluZXJcblxuXG4gICAgc3dpcGVyLm9ic2VydmVyLmF0dGFjaChzd2lwZXIuJGVsWzBdLCB7XG4gICAgICBjaGlsZExpc3Q6IHN3aXBlci5wYXJhbXMub2JzZXJ2ZVNsaWRlQ2hpbGRyZW5cbiAgICB9KTsgLy8gT2JzZXJ2ZSB3cmFwcGVyXG5cbiAgICBzd2lwZXIub2JzZXJ2ZXIuYXR0YWNoKHN3aXBlci4kd3JhcHBlckVsWzBdLCB7XG4gICAgICBhdHRyaWJ1dGVzOiBmYWxzZVxuICAgIH0pO1xuICB9LFxuICBkZXN0cm95OiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIHN3aXBlci5vYnNlcnZlci5vYnNlcnZlcnMuZm9yRWFjaChmdW5jdGlvbiAob2JzZXJ2ZXIpIHtcbiAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICB9KTtcbiAgICBzd2lwZXIub2JzZXJ2ZXIub2JzZXJ2ZXJzID0gW107XG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdvYnNlcnZlcicsXG4gIHBhcmFtczoge1xuICAgIG9ic2VydmVyOiBmYWxzZSxcbiAgICBvYnNlcnZlUGFyZW50czogZmFsc2UsXG4gICAgb2JzZXJ2ZVNsaWRlQ2hpbGRyZW46IGZhbHNlXG4gIH0sXG4gIGNyZWF0ZTogZnVuY3Rpb24gY3JlYXRlKCkge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIGJpbmRNb2R1bGVNZXRob2RzKHN3aXBlciwge1xuICAgICAgb2JzZXJ2ZXI6IF9leHRlbmRzKHt9LCBPYnNlcnZlciwge1xuICAgICAgICBvYnNlcnZlcnM6IFtdXG4gICAgICB9KVxuICAgIH0pO1xuICB9LFxuICBvbjoge1xuICAgIGluaXQ6IGZ1bmN0aW9uIGluaXQoc3dpcGVyKSB7XG4gICAgICBzd2lwZXIub2JzZXJ2ZXIuaW5pdCgpO1xuICAgIH0sXG4gICAgZGVzdHJveTogZnVuY3Rpb24gZGVzdHJveShzd2lwZXIpIHtcbiAgICAgIHN3aXBlci5vYnNlcnZlci5kZXN0cm95KCk7XG4gICAgfVxuICB9XG59OyIsImltcG9ydCB7IGdldFdpbmRvdyB9IGZyb20gJ3Nzci13aW5kb3cnO1xuaW1wb3J0IHsgZXh0ZW5kIH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbHMnO1xuXG52YXIgc3VwcG9ydHNSZXNpemVPYnNlcnZlciA9IGZ1bmN0aW9uIHN1cHBvcnRzUmVzaXplT2JzZXJ2ZXIoKSB7XG4gIHZhciB3aW5kb3cgPSBnZXRXaW5kb3coKTtcbiAgcmV0dXJuIHR5cGVvZiB3aW5kb3cuUmVzaXplT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnO1xufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAncmVzaXplJyxcbiAgY3JlYXRlOiBmdW5jdGlvbiBjcmVhdGUoKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgZXh0ZW5kKHN3aXBlciwge1xuICAgICAgcmVzaXplOiB7XG4gICAgICAgIG9ic2VydmVyOiBudWxsLFxuICAgICAgICBjcmVhdGVPYnNlcnZlcjogZnVuY3Rpb24gY3JlYXRlT2JzZXJ2ZXIoKSB7XG4gICAgICAgICAgaWYgKCFzd2lwZXIgfHwgc3dpcGVyLmRlc3Ryb3llZCB8fCAhc3dpcGVyLmluaXRpYWxpemVkKSByZXR1cm47XG4gICAgICAgICAgc3dpcGVyLnJlc2l6ZS5vYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcihmdW5jdGlvbiAoZW50cmllcykge1xuICAgICAgICAgICAgdmFyIHdpZHRoID0gc3dpcGVyLndpZHRoLFxuICAgICAgICAgICAgICAgIGhlaWdodCA9IHN3aXBlci5oZWlnaHQ7XG4gICAgICAgICAgICB2YXIgbmV3V2lkdGggPSB3aWR0aDtcbiAgICAgICAgICAgIHZhciBuZXdIZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgICAgICBlbnRyaWVzLmZvckVhY2goZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgICAgICAgICAgdmFyIGNvbnRlbnRCb3hTaXplID0gX3JlZi5jb250ZW50Qm94U2l6ZSxcbiAgICAgICAgICAgICAgICAgIGNvbnRlbnRSZWN0ID0gX3JlZi5jb250ZW50UmVjdCxcbiAgICAgICAgICAgICAgICAgIHRhcmdldCA9IF9yZWYudGFyZ2V0O1xuICAgICAgICAgICAgICBpZiAodGFyZ2V0ICYmIHRhcmdldCAhPT0gc3dpcGVyLmVsKSByZXR1cm47XG4gICAgICAgICAgICAgIG5ld1dpZHRoID0gY29udGVudFJlY3QgPyBjb250ZW50UmVjdC53aWR0aCA6IChjb250ZW50Qm94U2l6ZVswXSB8fCBjb250ZW50Qm94U2l6ZSkuaW5saW5lU2l6ZTtcbiAgICAgICAgICAgICAgbmV3SGVpZ2h0ID0gY29udGVudFJlY3QgPyBjb250ZW50UmVjdC5oZWlnaHQgOiAoY29udGVudEJveFNpemVbMF0gfHwgY29udGVudEJveFNpemUpLmJsb2NrU2l6ZTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAobmV3V2lkdGggIT09IHdpZHRoIHx8IG5ld0hlaWdodCAhPT0gaGVpZ2h0KSB7XG4gICAgICAgICAgICAgIHN3aXBlci5yZXNpemUucmVzaXplSGFuZGxlcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHN3aXBlci5yZXNpemUub2JzZXJ2ZXIub2JzZXJ2ZShzd2lwZXIuZWwpO1xuICAgICAgICB9LFxuICAgICAgICByZW1vdmVPYnNlcnZlcjogZnVuY3Rpb24gcmVtb3ZlT2JzZXJ2ZXIoKSB7XG4gICAgICAgICAgaWYgKHN3aXBlci5yZXNpemUub2JzZXJ2ZXIgJiYgc3dpcGVyLnJlc2l6ZS5vYnNlcnZlci51bm9ic2VydmUgJiYgc3dpcGVyLmVsKSB7XG4gICAgICAgICAgICBzd2lwZXIucmVzaXplLm9ic2VydmVyLnVub2JzZXJ2ZShzd2lwZXIuZWwpO1xuICAgICAgICAgICAgc3dpcGVyLnJlc2l6ZS5vYnNlcnZlciA9IG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICByZXNpemVIYW5kbGVyOiBmdW5jdGlvbiByZXNpemVIYW5kbGVyKCkge1xuICAgICAgICAgIGlmICghc3dpcGVyIHx8IHN3aXBlci5kZXN0cm95ZWQgfHwgIXN3aXBlci5pbml0aWFsaXplZCkgcmV0dXJuO1xuICAgICAgICAgIHN3aXBlci5lbWl0KCdiZWZvcmVSZXNpemUnKTtcbiAgICAgICAgICBzd2lwZXIuZW1pdCgncmVzaXplJyk7XG4gICAgICAgIH0sXG4gICAgICAgIG9yaWVudGF0aW9uQ2hhbmdlSGFuZGxlcjogZnVuY3Rpb24gb3JpZW50YXRpb25DaGFuZ2VIYW5kbGVyKCkge1xuICAgICAgICAgIGlmICghc3dpcGVyIHx8IHN3aXBlci5kZXN0cm95ZWQgfHwgIXN3aXBlci5pbml0aWFsaXplZCkgcmV0dXJuO1xuICAgICAgICAgIHN3aXBlci5lbWl0KCdvcmllbnRhdGlvbmNoYW5nZScpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG4gIG9uOiB7XG4gICAgaW5pdDogZnVuY3Rpb24gaW5pdChzd2lwZXIpIHtcbiAgICAgIHZhciB3aW5kb3cgPSBnZXRXaW5kb3coKTtcblxuICAgICAgaWYgKHN3aXBlci5wYXJhbXMucmVzaXplT2JzZXJ2ZXIgJiYgc3VwcG9ydHNSZXNpemVPYnNlcnZlcigpKSB7XG4gICAgICAgIHN3aXBlci5yZXNpemUuY3JlYXRlT2JzZXJ2ZXIoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSAvLyBFbWl0IHJlc2l6ZVxuXG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBzd2lwZXIucmVzaXplLnJlc2l6ZUhhbmRsZXIpOyAvLyBFbWl0IG9yaWVudGF0aW9uY2hhbmdlXG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdvcmllbnRhdGlvbmNoYW5nZScsIHN3aXBlci5yZXNpemUub3JpZW50YXRpb25DaGFuZ2VIYW5kbGVyKTtcbiAgICB9LFxuICAgIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3koc3dpcGVyKSB7XG4gICAgICB2YXIgd2luZG93ID0gZ2V0V2luZG93KCk7XG4gICAgICBzd2lwZXIucmVzaXplLnJlbW92ZU9ic2VydmVyKCk7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgc3dpcGVyLnJlc2l6ZS5yZXNpemVIYW5kbGVyKTtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdvcmllbnRhdGlvbmNoYW5nZScsIHN3aXBlci5yZXNpemUub3JpZW50YXRpb25DaGFuZ2VIYW5kbGVyKTtcbiAgICB9XG4gIH1cbn07IiwiaW1wb3J0IHsgJCwgYWRkQ2xhc3MsIHJlbW92ZUNsYXNzLCBoYXNDbGFzcywgdG9nZ2xlQ2xhc3MsIGF0dHIsIHJlbW92ZUF0dHIsIHRyYW5zZm9ybSwgdHJhbnNpdGlvbiwgb24sIG9mZiwgdHJpZ2dlciwgdHJhbnNpdGlvbkVuZCwgb3V0ZXJXaWR0aCwgb3V0ZXJIZWlnaHQsIHN0eWxlcywgb2Zmc2V0LCBjc3MsIGVhY2gsIGh0bWwsIHRleHQsIGlzLCBpbmRleCwgZXEsIGFwcGVuZCwgcHJlcGVuZCwgbmV4dCwgbmV4dEFsbCwgcHJldiwgcHJldkFsbCwgcGFyZW50LCBwYXJlbnRzLCBjbG9zZXN0LCBmaW5kLCBjaGlsZHJlbiwgZmlsdGVyLCByZW1vdmUgfSBmcm9tICdkb203JztcbnZhciBNZXRob2RzID0ge1xuICBhZGRDbGFzczogYWRkQ2xhc3MsXG4gIHJlbW92ZUNsYXNzOiByZW1vdmVDbGFzcyxcbiAgaGFzQ2xhc3M6IGhhc0NsYXNzLFxuICB0b2dnbGVDbGFzczogdG9nZ2xlQ2xhc3MsXG4gIGF0dHI6IGF0dHIsXG4gIHJlbW92ZUF0dHI6IHJlbW92ZUF0dHIsXG4gIHRyYW5zZm9ybTogdHJhbnNmb3JtLFxuICB0cmFuc2l0aW9uOiB0cmFuc2l0aW9uLFxuICBvbjogb24sXG4gIG9mZjogb2ZmLFxuICB0cmlnZ2VyOiB0cmlnZ2VyLFxuICB0cmFuc2l0aW9uRW5kOiB0cmFuc2l0aW9uRW5kLFxuICBvdXRlcldpZHRoOiBvdXRlcldpZHRoLFxuICBvdXRlckhlaWdodDogb3V0ZXJIZWlnaHQsXG4gIHN0eWxlczogc3R5bGVzLFxuICBvZmZzZXQ6IG9mZnNldCxcbiAgY3NzOiBjc3MsXG4gIGVhY2g6IGVhY2gsXG4gIGh0bWw6IGh0bWwsXG4gIHRleHQ6IHRleHQsXG4gIGlzOiBpcyxcbiAgaW5kZXg6IGluZGV4LFxuICBlcTogZXEsXG4gIGFwcGVuZDogYXBwZW5kLFxuICBwcmVwZW5kOiBwcmVwZW5kLFxuICBuZXh0OiBuZXh0LFxuICBuZXh0QWxsOiBuZXh0QWxsLFxuICBwcmV2OiBwcmV2LFxuICBwcmV2QWxsOiBwcmV2QWxsLFxuICBwYXJlbnQ6IHBhcmVudCxcbiAgcGFyZW50czogcGFyZW50cyxcbiAgY2xvc2VzdDogY2xvc2VzdCxcbiAgZmluZDogZmluZCxcbiAgY2hpbGRyZW46IGNoaWxkcmVuLFxuICBmaWx0ZXI6IGZpbHRlcixcbiAgcmVtb3ZlOiByZW1vdmVcbn07XG5PYmplY3Qua2V5cyhNZXRob2RzKS5mb3JFYWNoKGZ1bmN0aW9uIChtZXRob2ROYW1lKSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSgkLmZuLCBtZXRob2ROYW1lLCB7XG4gICAgdmFsdWU6IE1ldGhvZHNbbWV0aG9kTmFtZV0sXG4gICAgd3JpdGFibGU6IHRydWVcbiAgfSk7XG59KTtcbmV4cG9ydCBkZWZhdWx0ICQ7IiwiaW1wb3J0IHsgZ2V0V2luZG93IH0gZnJvbSAnc3NyLXdpbmRvdyc7XG52YXIgYnJvd3NlcjtcblxuZnVuY3Rpb24gY2FsY0Jyb3dzZXIoKSB7XG4gIHZhciB3aW5kb3cgPSBnZXRXaW5kb3coKTtcblxuICBmdW5jdGlvbiBpc1NhZmFyaSgpIHtcbiAgICB2YXIgdWEgPSB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpO1xuICAgIHJldHVybiB1YS5pbmRleE9mKCdzYWZhcmknKSA+PSAwICYmIHVhLmluZGV4T2YoJ2Nocm9tZScpIDwgMCAmJiB1YS5pbmRleE9mKCdhbmRyb2lkJykgPCAwO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBpc0VkZ2U6ICEhd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL0VkZ2UvZyksXG4gICAgaXNTYWZhcmk6IGlzU2FmYXJpKCksXG4gICAgaXNXZWJWaWV3OiAvKGlQaG9uZXxpUG9kfGlQYWQpLipBcHBsZVdlYktpdCg/IS4qU2FmYXJpKS9pLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpXG4gIH07XG59XG5cbmZ1bmN0aW9uIGdldEJyb3dzZXIoKSB7XG4gIGlmICghYnJvd3Nlcikge1xuICAgIGJyb3dzZXIgPSBjYWxjQnJvd3NlcigpO1xuICB9XG5cbiAgcmV0dXJuIGJyb3dzZXI7XG59XG5cbmV4cG9ydCB7IGdldEJyb3dzZXIgfTsiLCJpbXBvcnQgeyBnZXRXaW5kb3cgfSBmcm9tICdzc3Itd2luZG93JztcbmltcG9ydCB7IGdldFN1cHBvcnQgfSBmcm9tICcuL2dldC1zdXBwb3J0JztcbnZhciBkZXZpY2U7XG5cbmZ1bmN0aW9uIGNhbGNEZXZpY2UoX3RlbXApIHtcbiAgdmFyIF9yZWYgPSBfdGVtcCA9PT0gdm9pZCAwID8ge30gOiBfdGVtcCxcbiAgICAgIHVzZXJBZ2VudCA9IF9yZWYudXNlckFnZW50O1xuXG4gIHZhciBzdXBwb3J0ID0gZ2V0U3VwcG9ydCgpO1xuICB2YXIgd2luZG93ID0gZ2V0V2luZG93KCk7XG4gIHZhciBwbGF0Zm9ybSA9IHdpbmRvdy5uYXZpZ2F0b3IucGxhdGZvcm07XG4gIHZhciB1YSA9IHVzZXJBZ2VudCB8fCB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudDtcbiAgdmFyIGRldmljZSA9IHtcbiAgICBpb3M6IGZhbHNlLFxuICAgIGFuZHJvaWQ6IGZhbHNlXG4gIH07XG4gIHZhciBzY3JlZW5XaWR0aCA9IHdpbmRvdy5zY3JlZW4ud2lkdGg7XG4gIHZhciBzY3JlZW5IZWlnaHQgPSB3aW5kb3cuc2NyZWVuLmhlaWdodDtcbiAgdmFyIGFuZHJvaWQgPSB1YS5tYXRjaCgvKEFuZHJvaWQpOz9bXFxzXFwvXSsoW1xcZC5dKyk/Lyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcblxuICB2YXIgaXBhZCA9IHVhLm1hdGNoKC8oaVBhZCkuKk9TXFxzKFtcXGRfXSspLyk7XG4gIHZhciBpcG9kID0gdWEubWF0Y2goLyhpUG9kKSguKk9TXFxzKFtcXGRfXSspKT8vKTtcbiAgdmFyIGlwaG9uZSA9ICFpcGFkICYmIHVhLm1hdGNoKC8oaVBob25lXFxzT1N8aU9TKVxccyhbXFxkX10rKS8pO1xuICB2YXIgd2luZG93cyA9IHBsYXRmb3JtID09PSAnV2luMzInO1xuICB2YXIgbWFjb3MgPSBwbGF0Zm9ybSA9PT0gJ01hY0ludGVsJzsgLy8gaVBhZE9zIDEzIGZpeFxuXG4gIHZhciBpUGFkU2NyZWVucyA9IFsnMTAyNHgxMzY2JywgJzEzNjZ4MTAyNCcsICc4MzR4MTE5NCcsICcxMTk0eDgzNCcsICc4MzR4MTExMicsICcxMTEyeDgzNCcsICc3Njh4MTAyNCcsICcxMDI0eDc2OCcsICc4MjB4MTE4MCcsICcxMTgweDgyMCcsICc4MTB4MTA4MCcsICcxMDgweDgxMCddO1xuXG4gIGlmICghaXBhZCAmJiBtYWNvcyAmJiBzdXBwb3J0LnRvdWNoICYmIGlQYWRTY3JlZW5zLmluZGV4T2Yoc2NyZWVuV2lkdGggKyBcInhcIiArIHNjcmVlbkhlaWdodCkgPj0gMCkge1xuICAgIGlwYWQgPSB1YS5tYXRjaCgvKFZlcnNpb24pXFwvKFtcXGQuXSspLyk7XG4gICAgaWYgKCFpcGFkKSBpcGFkID0gWzAsIDEsICcxM18wXzAnXTtcbiAgICBtYWNvcyA9IGZhbHNlO1xuICB9IC8vIEFuZHJvaWRcblxuXG4gIGlmIChhbmRyb2lkICYmICF3aW5kb3dzKSB7XG4gICAgZGV2aWNlLm9zID0gJ2FuZHJvaWQnO1xuICAgIGRldmljZS5hbmRyb2lkID0gdHJ1ZTtcbiAgfVxuXG4gIGlmIChpcGFkIHx8IGlwaG9uZSB8fCBpcG9kKSB7XG4gICAgZGV2aWNlLm9zID0gJ2lvcyc7XG4gICAgZGV2aWNlLmlvcyA9IHRydWU7XG4gIH0gLy8gRXhwb3J0IG9iamVjdFxuXG5cbiAgcmV0dXJuIGRldmljZTtcbn1cblxuZnVuY3Rpb24gZ2V0RGV2aWNlKG92ZXJyaWRlcykge1xuICBpZiAob3ZlcnJpZGVzID09PSB2b2lkIDApIHtcbiAgICBvdmVycmlkZXMgPSB7fTtcbiAgfVxuXG4gIGlmICghZGV2aWNlKSB7XG4gICAgZGV2aWNlID0gY2FsY0RldmljZShvdmVycmlkZXMpO1xuICB9XG5cbiAgcmV0dXJuIGRldmljZTtcbn1cblxuZXhwb3J0IHsgZ2V0RGV2aWNlIH07IiwiaW1wb3J0IHsgZ2V0V2luZG93LCBnZXREb2N1bWVudCB9IGZyb20gJ3Nzci13aW5kb3cnO1xudmFyIHN1cHBvcnQ7XG5cbmZ1bmN0aW9uIGNhbGNTdXBwb3J0KCkge1xuICB2YXIgd2luZG93ID0gZ2V0V2luZG93KCk7XG4gIHZhciBkb2N1bWVudCA9IGdldERvY3VtZW50KCk7XG4gIHJldHVybiB7XG4gICAgdG91Y2g6ICEhKCdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdyB8fCB3aW5kb3cuRG9jdW1lbnRUb3VjaCAmJiBkb2N1bWVudCBpbnN0YW5jZW9mIHdpbmRvdy5Eb2N1bWVudFRvdWNoKSxcbiAgICBwb2ludGVyRXZlbnRzOiAhIXdpbmRvdy5Qb2ludGVyRXZlbnQgJiYgJ21heFRvdWNoUG9pbnRzJyBpbiB3aW5kb3cubmF2aWdhdG9yICYmIHdpbmRvdy5uYXZpZ2F0b3IubWF4VG91Y2hQb2ludHMgPj0gMCxcbiAgICBvYnNlcnZlcjogZnVuY3Rpb24gY2hlY2tPYnNlcnZlcigpIHtcbiAgICAgIHJldHVybiAnTXV0YXRpb25PYnNlcnZlcicgaW4gd2luZG93IHx8ICdXZWJraXRNdXRhdGlvbk9ic2VydmVyJyBpbiB3aW5kb3c7XG4gICAgfSgpLFxuICAgIHBhc3NpdmVMaXN0ZW5lcjogZnVuY3Rpb24gY2hlY2tQYXNzaXZlTGlzdGVuZXIoKSB7XG4gICAgICB2YXIgc3VwcG9ydHNQYXNzaXZlID0gZmFsc2U7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIHZhciBvcHRzID0gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAncGFzc2l2ZScsIHtcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgIHN1cHBvcnRzUGFzc2l2ZSA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Rlc3RQYXNzaXZlTGlzdGVuZXInLCBudWxsLCBvcHRzKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHsvLyBObyBzdXBwb3J0XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzdXBwb3J0c1Bhc3NpdmU7XG4gICAgfSgpLFxuICAgIGdlc3R1cmVzOiBmdW5jdGlvbiBjaGVja0dlc3R1cmVzKCkge1xuICAgICAgcmV0dXJuICdvbmdlc3R1cmVzdGFydCcgaW4gd2luZG93O1xuICAgIH0oKVxuICB9O1xufVxuXG5mdW5jdGlvbiBnZXRTdXBwb3J0KCkge1xuICBpZiAoIXN1cHBvcnQpIHtcbiAgICBzdXBwb3J0ID0gY2FsY1N1cHBvcnQoKTtcbiAgfVxuXG4gIHJldHVybiBzdXBwb3J0O1xufVxuXG5leHBvcnQgeyBnZXRTdXBwb3J0IH07IiwiaW1wb3J0IHsgZ2V0RG9jdW1lbnQsIGdldFdpbmRvdyB9IGZyb20gJ3Nzci13aW5kb3cnO1xuXG5mdW5jdGlvbiBkZWxldGVQcm9wcyhvYmopIHtcbiAgdmFyIG9iamVjdCA9IG9iajtcbiAgT2JqZWN0LmtleXMob2JqZWN0KS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICB0cnkge1xuICAgICAgb2JqZWN0W2tleV0gPSBudWxsO1xuICAgIH0gY2F0Y2ggKGUpIHsvLyBubyBnZXR0ZXIgZm9yIG9iamVjdFxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBkZWxldGUgb2JqZWN0W2tleV07XG4gICAgfSBjYXRjaCAoZSkgey8vIHNvbWV0aGluZyBnb3Qgd3JvbmdcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBuZXh0VGljayhjYWxsYmFjaywgZGVsYXkpIHtcbiAgaWYgKGRlbGF5ID09PSB2b2lkIDApIHtcbiAgICBkZWxheSA9IDA7XG4gIH1cblxuICByZXR1cm4gc2V0VGltZW91dChjYWxsYmFjaywgZGVsYXkpO1xufVxuXG5mdW5jdGlvbiBub3coKSB7XG4gIHJldHVybiBEYXRlLm5vdygpO1xufVxuXG5mdW5jdGlvbiBnZXRDb21wdXRlZFN0eWxlKGVsKSB7XG4gIHZhciB3aW5kb3cgPSBnZXRXaW5kb3coKTtcbiAgdmFyIHN0eWxlO1xuXG4gIGlmICh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSkge1xuICAgIHN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWwsIG51bGwpO1xuICB9XG5cbiAgaWYgKCFzdHlsZSAmJiBlbC5jdXJyZW50U3R5bGUpIHtcbiAgICBzdHlsZSA9IGVsLmN1cnJlbnRTdHlsZTtcbiAgfVxuXG4gIGlmICghc3R5bGUpIHtcbiAgICBzdHlsZSA9IGVsLnN0eWxlO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBnZXRUcmFuc2xhdGUoZWwsIGF4aXMpIHtcbiAgaWYgKGF4aXMgPT09IHZvaWQgMCkge1xuICAgIGF4aXMgPSAneCc7XG4gIH1cblxuICB2YXIgd2luZG93ID0gZ2V0V2luZG93KCk7XG4gIHZhciBtYXRyaXg7XG4gIHZhciBjdXJUcmFuc2Zvcm07XG4gIHZhciB0cmFuc2Zvcm1NYXRyaXg7XG4gIHZhciBjdXJTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoZWwsIG51bGwpO1xuXG4gIGlmICh3aW5kb3cuV2ViS2l0Q1NTTWF0cml4KSB7XG4gICAgY3VyVHJhbnNmb3JtID0gY3VyU3R5bGUudHJhbnNmb3JtIHx8IGN1clN0eWxlLndlYmtpdFRyYW5zZm9ybTtcblxuICAgIGlmIChjdXJUcmFuc2Zvcm0uc3BsaXQoJywnKS5sZW5ndGggPiA2KSB7XG4gICAgICBjdXJUcmFuc2Zvcm0gPSBjdXJUcmFuc2Zvcm0uc3BsaXQoJywgJykubWFwKGZ1bmN0aW9uIChhKSB7XG4gICAgICAgIHJldHVybiBhLnJlcGxhY2UoJywnLCAnLicpO1xuICAgICAgfSkuam9pbignLCAnKTtcbiAgICB9IC8vIFNvbWUgb2xkIHZlcnNpb25zIG9mIFdlYmtpdCBjaG9rZSB3aGVuICdub25lJyBpcyBwYXNzZWQ7IHBhc3NcbiAgICAvLyBlbXB0eSBzdHJpbmcgaW5zdGVhZCBpbiB0aGlzIGNhc2VcblxuXG4gICAgdHJhbnNmb3JtTWF0cml4ID0gbmV3IHdpbmRvdy5XZWJLaXRDU1NNYXRyaXgoY3VyVHJhbnNmb3JtID09PSAnbm9uZScgPyAnJyA6IGN1clRyYW5zZm9ybSk7XG4gIH0gZWxzZSB7XG4gICAgdHJhbnNmb3JtTWF0cml4ID0gY3VyU3R5bGUuTW96VHJhbnNmb3JtIHx8IGN1clN0eWxlLk9UcmFuc2Zvcm0gfHwgY3VyU3R5bGUuTXNUcmFuc2Zvcm0gfHwgY3VyU3R5bGUubXNUcmFuc2Zvcm0gfHwgY3VyU3R5bGUudHJhbnNmb3JtIHx8IGN1clN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ3RyYW5zZm9ybScpLnJlcGxhY2UoJ3RyYW5zbGF0ZSgnLCAnbWF0cml4KDEsIDAsIDAsIDEsJyk7XG4gICAgbWF0cml4ID0gdHJhbnNmb3JtTWF0cml4LnRvU3RyaW5nKCkuc3BsaXQoJywnKTtcbiAgfVxuXG4gIGlmIChheGlzID09PSAneCcpIHtcbiAgICAvLyBMYXRlc3QgQ2hyb21lIGFuZCB3ZWJraXRzIEZpeFxuICAgIGlmICh3aW5kb3cuV2ViS2l0Q1NTTWF0cml4KSBjdXJUcmFuc2Zvcm0gPSB0cmFuc2Zvcm1NYXRyaXgubTQxOyAvLyBDcmF6eSBJRTEwIE1hdHJpeFxuICAgIGVsc2UgaWYgKG1hdHJpeC5sZW5ndGggPT09IDE2KSBjdXJUcmFuc2Zvcm0gPSBwYXJzZUZsb2F0KG1hdHJpeFsxMl0pOyAvLyBOb3JtYWwgQnJvd3NlcnNcbiAgICAgIGVsc2UgY3VyVHJhbnNmb3JtID0gcGFyc2VGbG9hdChtYXRyaXhbNF0pO1xuICB9XG5cbiAgaWYgKGF4aXMgPT09ICd5Jykge1xuICAgIC8vIExhdGVzdCBDaHJvbWUgYW5kIHdlYmtpdHMgRml4XG4gICAgaWYgKHdpbmRvdy5XZWJLaXRDU1NNYXRyaXgpIGN1clRyYW5zZm9ybSA9IHRyYW5zZm9ybU1hdHJpeC5tNDI7IC8vIENyYXp5IElFMTAgTWF0cml4XG4gICAgZWxzZSBpZiAobWF0cml4Lmxlbmd0aCA9PT0gMTYpIGN1clRyYW5zZm9ybSA9IHBhcnNlRmxvYXQobWF0cml4WzEzXSk7IC8vIE5vcm1hbCBCcm93c2Vyc1xuICAgICAgZWxzZSBjdXJUcmFuc2Zvcm0gPSBwYXJzZUZsb2F0KG1hdHJpeFs1XSk7XG4gIH1cblxuICByZXR1cm4gY3VyVHJhbnNmb3JtIHx8IDA7XG59XG5cbmZ1bmN0aW9uIGlzT2JqZWN0KG8pIHtcbiAgcmV0dXJuIHR5cGVvZiBvID09PSAnb2JqZWN0JyAmJiBvICE9PSBudWxsICYmIG8uY29uc3RydWN0b3IgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKSA9PT0gJ09iamVjdCc7XG59XG5cbmZ1bmN0aW9uIGlzTm9kZShub2RlKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHdpbmRvdy5IVE1MRWxlbWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gbm9kZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50O1xuICB9XG5cbiAgcmV0dXJuIG5vZGUgJiYgKG5vZGUubm9kZVR5cGUgPT09IDEgfHwgbm9kZS5ub2RlVHlwZSA9PT0gMTEpO1xufVxuXG5mdW5jdGlvbiBleHRlbmQoKSB7XG4gIHZhciB0byA9IE9iamVjdChhcmd1bWVudHMubGVuZ3RoIDw9IDAgPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbMF0pO1xuICB2YXIgbm9FeHRlbmQgPSBbJ19fcHJvdG9fXycsICdjb25zdHJ1Y3RvcicsICdwcm90b3R5cGUnXTtcblxuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIHZhciBuZXh0U291cmNlID0gaSA8IDAgfHwgYXJndW1lbnRzLmxlbmd0aCA8PSBpID8gdW5kZWZpbmVkIDogYXJndW1lbnRzW2ldO1xuXG4gICAgaWYgKG5leHRTb3VyY2UgIT09IHVuZGVmaW5lZCAmJiBuZXh0U291cmNlICE9PSBudWxsICYmICFpc05vZGUobmV4dFNvdXJjZSkpIHtcbiAgICAgIHZhciBrZXlzQXJyYXkgPSBPYmplY3Qua2V5cyhPYmplY3QobmV4dFNvdXJjZSkpLmZpbHRlcihmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHJldHVybiBub0V4dGVuZC5pbmRleE9mKGtleSkgPCAwO1xuICAgICAgfSk7XG5cbiAgICAgIGZvciAodmFyIG5leHRJbmRleCA9IDAsIGxlbiA9IGtleXNBcnJheS5sZW5ndGg7IG5leHRJbmRleCA8IGxlbjsgbmV4dEluZGV4ICs9IDEpIHtcbiAgICAgICAgdmFyIG5leHRLZXkgPSBrZXlzQXJyYXlbbmV4dEluZGV4XTtcbiAgICAgICAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG5leHRTb3VyY2UsIG5leHRLZXkpO1xuXG4gICAgICAgIGlmIChkZXNjICE9PSB1bmRlZmluZWQgJiYgZGVzYy5lbnVtZXJhYmxlKSB7XG4gICAgICAgICAgaWYgKGlzT2JqZWN0KHRvW25leHRLZXldKSAmJiBpc09iamVjdChuZXh0U291cmNlW25leHRLZXldKSkge1xuICAgICAgICAgICAgaWYgKG5leHRTb3VyY2VbbmV4dEtleV0uX19zd2lwZXJfXykge1xuICAgICAgICAgICAgICB0b1tuZXh0S2V5XSA9IG5leHRTb3VyY2VbbmV4dEtleV07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBleHRlbmQodG9bbmV4dEtleV0sIG5leHRTb3VyY2VbbmV4dEtleV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAoIWlzT2JqZWN0KHRvW25leHRLZXldKSAmJiBpc09iamVjdChuZXh0U291cmNlW25leHRLZXldKSkge1xuICAgICAgICAgICAgdG9bbmV4dEtleV0gPSB7fTtcblxuICAgICAgICAgICAgaWYgKG5leHRTb3VyY2VbbmV4dEtleV0uX19zd2lwZXJfXykge1xuICAgICAgICAgICAgICB0b1tuZXh0S2V5XSA9IG5leHRTb3VyY2VbbmV4dEtleV07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBleHRlbmQodG9bbmV4dEtleV0sIG5leHRTb3VyY2VbbmV4dEtleV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0b1tuZXh0S2V5XSA9IG5leHRTb3VyY2VbbmV4dEtleV07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRvO1xufVxuXG5mdW5jdGlvbiBiaW5kTW9kdWxlTWV0aG9kcyhpbnN0YW5jZSwgb2JqKSB7XG4gIE9iamVjdC5rZXlzKG9iaikuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgaWYgKGlzT2JqZWN0KG9ialtrZXldKSkge1xuICAgICAgT2JqZWN0LmtleXMob2JqW2tleV0pLmZvckVhY2goZnVuY3Rpb24gKHN1YktleSkge1xuICAgICAgICBpZiAodHlwZW9mIG9ialtrZXldW3N1YktleV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBvYmpba2V5XVtzdWJLZXldID0gb2JqW2tleV1bc3ViS2V5XS5iaW5kKGluc3RhbmNlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaW5zdGFuY2Vba2V5XSA9IG9ialtrZXldO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gY2xhc3Nlc1RvU2VsZWN0b3IoY2xhc3Nlcykge1xuICBpZiAoY2xhc3NlcyA9PT0gdm9pZCAwKSB7XG4gICAgY2xhc3NlcyA9ICcnO1xuICB9XG5cbiAgcmV0dXJuIFwiLlwiICsgY2xhc3Nlcy50cmltKCkucmVwbGFjZSgvKFtcXC46XFwvXSkvZywgJ1xcXFwkMScpIC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgLnJlcGxhY2UoLyAvZywgJy4nKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudElmTm90RGVmaW5lZCgkY29udGFpbmVyLCBwYXJhbXMsIGNyZWF0ZUVsZW1lbnRzLCBjaGVja1Byb3BzKSB7XG4gIHZhciBkb2N1bWVudCA9IGdldERvY3VtZW50KCk7XG5cbiAgaWYgKGNyZWF0ZUVsZW1lbnRzKSB7XG4gICAgT2JqZWN0LmtleXMoY2hlY2tQcm9wcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBpZiAoIXBhcmFtc1trZXldICYmIHBhcmFtcy5hdXRvID09PSB0cnVlKSB7XG4gICAgICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gY2hlY2tQcm9wc1trZXldO1xuICAgICAgICAkY29udGFpbmVyLmFwcGVuZChlbGVtZW50KTtcbiAgICAgICAgcGFyYW1zW2tleV0gPSBlbGVtZW50O1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHBhcmFtcztcbn1cblxuZXhwb3J0IHsgZGVsZXRlUHJvcHMsIG5leHRUaWNrLCBub3csIGdldFRyYW5zbGF0ZSwgaXNPYmplY3QsIGV4dGVuZCwgYmluZE1vZHVsZU1ldGhvZHMsIGdldENvbXB1dGVkU3R5bGUsIGNsYXNzZXNUb1NlbGVjdG9yLCBjcmVhdGVFbGVtZW50SWZOb3REZWZpbmVkIH07IiwiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xyXG5cdC8v0KLQsNCx0YtcclxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2VydmljZS1saXN0X19saW5rJykuZm9yRWFjaChmdW5jdGlvbih0YWJzQnRuKSB7XHJcblx0XHR0YWJzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRcdFx0Y29uc3QgcGF0aCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldC5wYXRoXHJcblx0XHJcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZXJ2aWNlLWl0ZW0nKS5mb3JFYWNoKGZ1bmN0aW9uKHRhYkNvbnRlbnQpIHtcclxuXHRcdFx0XHR0YWJDb250ZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3NlcnZpY2VzLWl0ZW0tLWFjdGl2ZScpXHJcblx0XHRcdH0pXHJcblx0XHJcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZXJ2aWNlLWxpc3RfX2xpbmsnKS5mb3JFYWNoKGZ1bmN0aW9uKHRhYkNvbnRlbnQpIHtcclxuXHRcdFx0XHR0YWJDb250ZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3NlcnZpY2UtbGlzdF9fbGluay0tYWN0aXZlJylcclxuXHRcdFx0fSlcclxuXHRcclxuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtcGF0aD1cIiR7cGF0aH1cIl1gKS5jbGFzc0xpc3QuYWRkKCdzZXJ2aWNlLWxpc3RfX2xpbmstLWFjdGl2ZScpXHJcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXRhcmdldD1cIiR7cGF0aH1cIl1gKS5jbGFzc0xpc3QuYWRkKCdzZXJ2aWNlcy1pdGVtLS1hY3RpdmUnKVxyXG5cdFx0XHR9KVxyXG5cdFx0fSlcclxuXHJcblx0Ly8g0JrQvdC+0L/QutC4INCf0L7Qv9Cw0L9cclxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnV0dG9uLWpzLW9wZW4nKS5mb3JFYWNoKGZ1bmN0aW9uKHRhYnNCdG4pIHtcclxuXHRcdHRhYnNCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xyXG5cdFx0XHRsZXQgcGF0aCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldC5wYXRoXHJcblx0XHRcdFxyXG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYmxvay1qcy1hY3RpdmUnKS5mb3JFYWNoKGZ1bmN0aW9uKHRhYkNvbnRlbnQpIHtcclxuXHRcdFx0XHR0YWJDb250ZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2J0bi0tYWN0aXZlJywnYnRuLS1tZW51JylcclxuXHRcdFx0fSlcclxuXHRcclxuXHRcdFx0bGV0IHRlc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS10YXJnZXQ9XCIke3BhdGh9XCJdYCkuZ2V0QXR0cmlidXRlKCdkYXRhLXRhcmdldCcpXHJcblx0XHRcdFxyXG5cdFx0XHRpZiAodGVzdCA9PT0gJ3NpeC1idG4nKSB7XHJcblx0XHRcdFx0bGV0IGFjdGl2ZUFzYWlkID1cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXRhcmdldD1cIiR7cGF0aH1cIl1gKVxyXG5cdFx0XHRcdGFjdGl2ZUFzYWlkLmNsYXNzTGlzdC5hZGQoJ2J0bi0tbWVudScpXHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0bGV0IGFjdGl2ZVBvcHVwID1cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXRhcmdldD1cIiR7cGF0aH1cIl1gKVxyXG5cdFx0XHRcdGFjdGl2ZVBvcHVwLmNsYXNzTGlzdC5hZGQoJ2J0bi0tYWN0aXZlJylcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHJcblx0XHR9KVxyXG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNwcy1qcy1iZycpLmZvckVhY2goZnVuY3Rpb24oY2xvc2VFbGVtKSB7XHJcblx0XHRcdGNsb3NlRWxlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ibG9rLWpzLWFjdGl2ZScpLmZvckVhY2goZnVuY3Rpb24odGFiQ29udGVudCkge1xyXG5cdFx0XHRcdFx0dGFiQ29udGVudC5jbGFzc0xpc3QucmVtb3ZlKCdidG4tLWFjdGl2ZScsJ2J0bi0tbWVudScpXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSlcclxuXHRcdH0pXHJcblx0fSlcclxuXHJcblxyXG5cdC8vINCa0L3QvtC/0LrQuCDQn9C+0LrQsNC30LDRgtGMINCy0YHQtVxyXG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZXJ2aWNlLWJyYW5kc19fbGluaycpLmZvckVhY2goZnVuY3Rpb24odGFic0J0bikge1xyXG5cdFx0dGFic0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcblx0XHRcdGxldCBwYXRoID0gZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0LnBhdGhcclxuXHRcdFx0XHRcclxuXHRcdFx0bGV0IHRlc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS10YXJnZXQ9XCIke3BhdGh9XCJdYCkuZ2V0QXR0cmlidXRlKCdkYXRhLXRhcmdldCcpXHJcblx0XHRcdFxyXG5cdFx0XHRpZiAodGVzdCA9PT0gJ3RocmVlLWFsbG9wZW4nKSB7XHJcblx0XHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtdGFyZ2V0PVwiJHtwYXRofVwiXWApLmNsYXNzTGlzdC50b2dnbGUoJ2FsbC1vcGVuLWNvbnRlbnQtLWFjdGl2ZScpXHJcblx0XHRcdFx0dGFic0J0bi5jbGFzc0xpc3QudG9nZ2xlKCdxcW9vJylcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS10YXJnZXQ9XCIke3BhdGh9XCJdYCkuY2xhc3NMaXN0LnRvZ2dsZSgnYWxsLW9wZW4tLWFjdGl2ZScpXHJcblx0XHRcdFx0dGFic0J0bi5jbGFzc0xpc3QudG9nZ2xlKCdxcW9vJylcclxuXHRcdFx0fVxyXG5cdFx0XHR9KVxyXG5cdFx0fSlcclxuXHJcblx0Ly8g0J3QsNCy0LjQs9Cw0YbQuNGPIFxyXG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXYtbWVudV9fbGluaycpLmZvckVhY2goZnVuY3Rpb24odGFic0J0bikge1xyXG5cdFx0dGFic0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcclxuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdi1tZW51X19saW5rJykuZm9yRWFjaChmdW5jdGlvbih0YWJDb250ZW50KSB7XHJcblx0XHRcdFx0dGFiQ29udGVudC5jbGFzc0xpc3QucmVtb3ZlKCduYXYtbWVudV9fbGluay0tYWN0aXZlJylcclxuXHRcdFx0fSlcclxuXHJcblx0XHRcdHRhYnNCdG4uY2xhc3NMaXN0LmFkZCgnbmF2LW1lbnVfX2xpbmstLWFjdGl2ZScpXHJcblx0XHRcdH0pXHJcblx0XHR9KVxyXG5cdFxyXG59KSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJpbXBvcnQgU3dpcGVyIGZyb20gJ3N3aXBlcic7XHJcbmltcG9ydCAnLi9qcy9hcHAuanMnO1xyXG5pbXBvcnQgJy4vc2Nzcy9tYWluLnNjc3MnO1xyXG5pbXBvcnQgJy9pbmRleC5odG1sJztcclxuXHJcblxyXG5jb25zdCBzd2lwZXJTZXJ2aWNlID0gbmV3IFN3aXBlcignLnN3aXBlci1jb250YWluZXItLXNlcnZpY2UnLCB7XHJcblx0Ly8gT3B0aW9uYWwgcGFyYW1ldGVyc1xyXG5cdC8vIGxvb3A6IHRydWUsXHJcblx0d2lkdGg6IDI1MCxcclxuXHRzcGFjZUJldHdlZW46IDEwLFxyXG5cdGNlbnRlcmVkU2xpZGVzOiB0cnVlLFxyXG5cclxuXHJcblx0Ly8gQW5kIGlmIHdlIG5lZWQgc2Nyb2xsYmFyXHJcblx0c2Nyb2xsYmFyOiB7XHJcblx0XHRlbDogJy5zd2lwZXItc2Nyb2xsYmFyJyxcclxuXHR9LFxyXG59KTtcclxuXHJcbmNvbnN0IHN3aXBlckJyYW5kcyA9IG5ldyBTd2lwZXIoJy5zd2lwZXItY29udGFpbmVyLS1icmFuZHMnLCB7XHJcblx0Ly8gT3B0aW9uYWwgcGFyYW1ldGVyc1xyXG5cdC8vIGxvb3A6IHRydWUsXHJcblx0d2lkdGg6IDI0MCxcclxuXHRzcGFjZUJldHdlZW46IDEwLFxyXG5cdGNlbnRlcmVkU2xpZGVzOiB0cnVlLFxyXG5cclxuXHJcblx0Ly8gSWYgd2UgbmVlZCBwYWdpbmF0aW9uXHJcblx0XHRwYWdpbmF0aW9uOiB7XHJcblx0XHRcdGVsOiAnLnN3aXBlci1wYWdpbmF0aW9uJyxcclxuXHRcdFx0dHlwZTogJ2J1bGxldHMnLFxyXG5cdFx0XHRjbGlja2FibGU6ICd0cnVlJyxcclxuXHRcdH0sXHJcblxyXG5cdC8vIEFuZCBpZiB3ZSBuZWVkIHNjcm9sbGJhclxyXG5cdHNjcm9sbGJhcjoge1xyXG5cdFx0ZWw6ICcuc3dpcGVyLXNjcm9sbGJhcicsXHJcblx0fSxcclxufSk7XHJcblxyXG5jb25zdCBzd2lwZXJUeXBlID0gbmV3IFN3aXBlcignLnN3aXBlci1jb250YWluZXItLXR5cGUnLCB7XHJcblx0Ly8gT3B0aW9uYWwgcGFyYW1ldGVyc1xyXG5cdC8vIGxvb3A6IHRydWUsXHJcblx0d2lkdGg6IDI0MCxcclxuXHRzcGFjZUJldHdlZW46IDEwLFxyXG5cdGNlbnRlcmVkU2xpZGVzOiB0cnVlLFxyXG5cclxuXHJcblx0Ly8gSWYgd2UgbmVlZCBwYWdpbmF0aW9uXHJcblx0XHRwYWdpbmF0aW9uOiB7XHJcblx0XHRcdGVsOiAnLnN3aXBlci1wYWdpbmF0aW9uJyxcclxuXHRcdFx0dHlwZTogJ2J1bGxldHMnLFxyXG5cdFx0XHRjbGlja2FibGU6ICd0cnVlJyxcclxuXHRcdH0sXHJcblxyXG5cdC8vIEFuZCBpZiB3ZSBuZWVkIHNjcm9sbGJhclxyXG5cdHNjcm9sbGJhcjoge1xyXG5cdFx0ZWw6ICcuc3dpcGVyLXNjcm9sbGJhcicsXHJcblx0fSxcclxufSk7XHJcblxyXG5jb25zdCBzd2lwZXJQcmljZSA9IG5ldyBTd2lwZXIoJy5zd2lwZXItY29udGFpbmVyLS1wcmljZScsIHtcclxuXHQvLyBPcHRpb25hbCBwYXJhbWV0ZXJzXHJcblx0Ly8gbG9vcDogdHJ1ZSxcclxuXHR3aWR0aDogMjYwLFxyXG5cdHNwYWNlQmV0d2VlbjogNDAsXHJcblx0Y2VudGVyZWRTbGlkZXM6IHRydWUsXHJcblxyXG5cclxuXHQvLyBJZiB3ZSBuZWVkIHBhZ2luYXRpb25cclxuXHRcdHBhZ2luYXRpb246IHtcclxuXHRcdFx0ZWw6ICcuc3dpcGVyLXBhZ2luYXRpb24nLFxyXG5cdFx0XHR0eXBlOiAnYnVsbGV0cycsXHJcblx0XHRcdGNsaWNrYWJsZTogJ3RydWUnLFxyXG5cdFx0fSxcclxuXHJcblx0Ly8gQW5kIGlmIHdlIG5lZWQgc2Nyb2xsYmFyXHJcblx0c2Nyb2xsYmFyOiB7XHJcblx0XHRlbDogJy5zd2lwZXItc2Nyb2xsYmFyJyxcclxuXHR9LFxyXG59KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=