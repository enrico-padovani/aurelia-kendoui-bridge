'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProgressBar = undefined;

var _dec, _dec2, _dec3, _class, _desc, _value, _class2, _descriptor;

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _aureliaTemplating = require('aurelia-templating');

var _widgetBase = require('../common/widget-base');

var _decorators = require('../common/decorators');

var _constants = require('../common/constants');

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var ProgressBar = exports.ProgressBar = (_dec = (0, _aureliaTemplating.customAttribute)(_constants.constants.attributePrefix + 'progress-bar'), _dec2 = (0, _decorators.generateBindables)('kendoProgressBar'), _dec3 = (0, _aureliaDependencyInjection.inject)(Element, _widgetBase.WidgetBase), _dec(_class = _dec2(_class = _dec3(_class = (_class2 = function () {
  function ProgressBar(element, widgetBase) {
    _classCallCheck(this, ProgressBar);

    _initDefineProp(this, 'kEnabled', _descriptor, this);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoProgressBar').useElement(this.element).bindToKendo('kEnabled', 'enable').linkViewModel(this);
  }

  ProgressBar.prototype.bind = function bind(ctx, overrideCtx) {
    this.widgetBase.useParentCtx(overrideCtx);
  };

  ProgressBar.prototype.attached = function attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  };

  ProgressBar.prototype.recreate = function recreate() {
    this.kWidget = this.widgetBase.recreate();
  };

  ProgressBar.prototype.propertyChanged = function propertyChanged(property, newValue, oldValue) {
    this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
  };

  ProgressBar.prototype.destroy = function destroy() {
    this.widgetBase.destroy(this.kWidget);
  };

  ProgressBar.prototype.detached = function detached() {
    this.destroy();
  };

  return ProgressBar;
}(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'kEnabled', [_aureliaTemplating.bindable], {
  enumerable: true,
  initializer: null
})), _class2)) || _class) || _class) || _class);