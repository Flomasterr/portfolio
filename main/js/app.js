(() => {
    var __webpack_modules__ = {
        556: function(__unused_webpack_module, exports) {
            (function(global, factory) {
                true ? factory(exports) : 0;
            })(0, (function(exports) {
                "use strict";
                function _inheritsLoose(subClass, superClass) {
                    subClass.prototype = Object.create(superClass.prototype);
                    subClass.prototype.constructor = subClass;
                    subClass.__proto__ = superClass;
                }
                function _assertThisInitialized(self) {
                    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return self;
                }
                /*!
   * GSAP 3.12.5
   * https://gsap.com
   *
   * @license Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  */                var _suppressOverwrites, _reverting, _context, _globalTimeline, _win, _coreInitted, _doc, _coreReady, _lastRenderedFrame, _quickTween, _tickerActive, _config = {
                    autoSleep: 120,
                    force3D: "auto",
                    nullTargetWarn: 1,
                    units: {
                        lineHeight: ""
                    }
                }, _defaults = {
                    duration: .5,
                    overwrite: false,
                    delay: 0
                }, _bigNum = 1e8, _tinyNum = 1 / _bigNum, _2PI = Math.PI * 2, _HALF_PI = _2PI / 4, _gsID = 0, _sqrt = Math.sqrt, _cos = Math.cos, _sin = Math.sin, _isString = function _isString(value) {
                    return typeof value === "string";
                }, _isFunction = function _isFunction(value) {
                    return typeof value === "function";
                }, _isNumber = function _isNumber(value) {
                    return typeof value === "number";
                }, _isUndefined = function _isUndefined(value) {
                    return typeof value === "undefined";
                }, _isObject = function _isObject(value) {
                    return typeof value === "object";
                }, _isNotFalse = function _isNotFalse(value) {
                    return value !== false;
                }, _windowExists = function _windowExists() {
                    return typeof window !== "undefined";
                }, _isFuncOrString = function _isFuncOrString(value) {
                    return _isFunction(value) || _isString(value);
                }, _isTypedArray = typeof ArrayBuffer === "function" && ArrayBuffer.isView || function() {}, _isArray = Array.isArray, _strictNumExp = /(?:-?\.?\d|\.)+/gi, _numExp = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, _numWithUnitExp = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, _complexStringNumExp = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, _relExp = /[+-]=-?[.\d]+/, _delimitedValueExp = /[^,'"\[\]\s]+/gi, _unitExp = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, _globals = {}, _installScope = {}, _install = function _install(scope) {
                    return (_installScope = _merge(scope, _globals)) && gsap;
                }, _missingPlugin = function _missingPlugin(property, value) {
                    return console.warn("Invalid property", property, "set to", value, "Missing plugin? gsap.registerPlugin()");
                }, _warn = function _warn(message, suppress) {
                    return !suppress && console.warn(message);
                }, _addGlobal = function _addGlobal(name, obj) {
                    return name && (_globals[name] = obj) && _installScope && (_installScope[name] = obj) || _globals;
                }, _emptyFunc = function _emptyFunc() {
                    return 0;
                }, _startAtRevertConfig = {
                    suppressEvents: true,
                    isStart: true,
                    kill: false
                }, _revertConfigNoKill = {
                    suppressEvents: true,
                    kill: false
                }, _revertConfig = {
                    suppressEvents: true
                }, _reservedProps = {}, _lazyTweens = [], _lazyLookup = {}, _plugins = {}, _effects = {}, _nextGCFrame = 30, _harnessPlugins = [], _callbackNames = "", _harness = function _harness(targets) {
                    var harnessPlugin, i, target = targets[0];
                    _isObject(target) || _isFunction(target) || (targets = [ targets ]);
                    if (!(harnessPlugin = (target._gsap || {}).harness)) {
                        i = _harnessPlugins.length;
                        while (i-- && !_harnessPlugins[i].targetTest(target)) ;
                        harnessPlugin = _harnessPlugins[i];
                    }
                    i = targets.length;
                    while (i--) targets[i] && (targets[i]._gsap || (targets[i]._gsap = new GSCache(targets[i], harnessPlugin))) || targets.splice(i, 1);
                    return targets;
                }, _getCache = function _getCache(target) {
                    return target._gsap || _harness(toArray(target))[0]._gsap;
                }, _getProperty = function _getProperty(target, property, v) {
                    return (v = target[property]) && _isFunction(v) ? target[property]() : _isUndefined(v) && target.getAttribute && target.getAttribute(property) || v;
                }, _forEachName = function _forEachName(names, func) {
                    return (names = names.split(",")).forEach(func) || names;
                }, _round = function _round(value) {
                    return Math.round(value * 1e5) / 1e5 || 0;
                }, _roundPrecise = function _roundPrecise(value) {
                    return Math.round(value * 1e7) / 1e7 || 0;
                }, _parseRelative = function _parseRelative(start, value) {
                    var operator = value.charAt(0), end = parseFloat(value.substr(2));
                    start = parseFloat(start);
                    return operator === "+" ? start + end : operator === "-" ? start - end : operator === "*" ? start * end : start / end;
                }, _arrayContainsAny = function _arrayContainsAny(toSearch, toFind) {
                    var l = toFind.length, i = 0;
                    for (;toSearch.indexOf(toFind[i]) < 0 && ++i < l; ) ;
                    return i < l;
                }, _lazyRender = function _lazyRender() {
                    var i, tween, l = _lazyTweens.length, a = _lazyTweens.slice(0);
                    _lazyLookup = {};
                    _lazyTweens.length = 0;
                    for (i = 0; i < l; i++) {
                        tween = a[i];
                        tween && tween._lazy && (tween.render(tween._lazy[0], tween._lazy[1], true)._lazy = 0);
                    }
                }, _lazySafeRender = function _lazySafeRender(animation, time, suppressEvents, force) {
                    _lazyTweens.length && !_reverting && _lazyRender();
                    animation.render(time, suppressEvents, force || _reverting && time < 0 && (animation._initted || animation._startAt));
                    _lazyTweens.length && !_reverting && _lazyRender();
                }, _numericIfPossible = function _numericIfPossible(value) {
                    var n = parseFloat(value);
                    return (n || n === 0) && (value + "").match(_delimitedValueExp).length < 2 ? n : _isString(value) ? value.trim() : value;
                }, _passThrough = function _passThrough(p) {
                    return p;
                }, _setDefaults = function _setDefaults(obj, defaults) {
                    for (var p in defaults) p in obj || (obj[p] = defaults[p]);
                    return obj;
                }, _setKeyframeDefaults = function _setKeyframeDefaults(excludeDuration) {
                    return function(obj, defaults) {
                        for (var p in defaults) p in obj || p === "duration" && excludeDuration || p === "ease" || (obj[p] = defaults[p]);
                    };
                }, _merge = function _merge(base, toMerge) {
                    for (var p in toMerge) base[p] = toMerge[p];
                    return base;
                }, _mergeDeep = function _mergeDeep(base, toMerge) {
                    for (var p in toMerge) p !== "__proto__" && p !== "constructor" && p !== "prototype" && (base[p] = _isObject(toMerge[p]) ? _mergeDeep(base[p] || (base[p] = {}), toMerge[p]) : toMerge[p]);
                    return base;
                }, _copyExcluding = function _copyExcluding(obj, excluding) {
                    var p, copy = {};
                    for (p in obj) p in excluding || (copy[p] = obj[p]);
                    return copy;
                }, _inheritDefaults = function _inheritDefaults(vars) {
                    var parent = vars.parent || _globalTimeline, func = vars.keyframes ? _setKeyframeDefaults(_isArray(vars.keyframes)) : _setDefaults;
                    if (_isNotFalse(vars.inherit)) while (parent) {
                        func(vars, parent.vars.defaults);
                        parent = parent.parent || parent._dp;
                    }
                    return vars;
                }, _arraysMatch = function _arraysMatch(a1, a2) {
                    var i = a1.length, match = i === a2.length;
                    while (match && i-- && a1[i] === a2[i]) ;
                    return i < 0;
                }, _addLinkedListItem = function _addLinkedListItem(parent, child, firstProp, lastProp, sortBy) {
                    if (firstProp === void 0) firstProp = "_first";
                    if (lastProp === void 0) lastProp = "_last";
                    var t, prev = parent[lastProp];
                    if (sortBy) {
                        t = child[sortBy];
                        while (prev && prev[sortBy] > t) prev = prev._prev;
                    }
                    if (prev) {
                        child._next = prev._next;
                        prev._next = child;
                    } else {
                        child._next = parent[firstProp];
                        parent[firstProp] = child;
                    }
                    if (child._next) child._next._prev = child; else parent[lastProp] = child;
                    child._prev = prev;
                    child.parent = child._dp = parent;
                    return child;
                }, _removeLinkedListItem = function _removeLinkedListItem(parent, child, firstProp, lastProp) {
                    if (firstProp === void 0) firstProp = "_first";
                    if (lastProp === void 0) lastProp = "_last";
                    var prev = child._prev, next = child._next;
                    if (prev) prev._next = next; else if (parent[firstProp] === child) parent[firstProp] = next;
                    if (next) next._prev = prev; else if (parent[lastProp] === child) parent[lastProp] = prev;
                    child._next = child._prev = child.parent = null;
                }, _removeFromParent = function _removeFromParent(child, onlyIfParentHasAutoRemove) {
                    child.parent && (!onlyIfParentHasAutoRemove || child.parent.autoRemoveChildren) && child.parent.remove && child.parent.remove(child);
                    child._act = 0;
                }, _uncache = function _uncache(animation, child) {
                    if (animation && (!child || child._end > animation._dur || child._start < 0)) {
                        var a = animation;
                        while (a) {
                            a._dirty = 1;
                            a = a.parent;
                        }
                    }
                    return animation;
                }, _recacheAncestors = function _recacheAncestors(animation) {
                    var parent = animation.parent;
                    while (parent && parent.parent) {
                        parent._dirty = 1;
                        parent.totalDuration();
                        parent = parent.parent;
                    }
                    return animation;
                }, _rewindStartAt = function _rewindStartAt(tween, totalTime, suppressEvents, force) {
                    return tween._startAt && (_reverting ? tween._startAt.revert(_revertConfigNoKill) : tween.vars.immediateRender && !tween.vars.autoRevert || tween._startAt.render(totalTime, true, force));
                }, _hasNoPausedAncestors = function _hasNoPausedAncestors(animation) {
                    return !animation || animation._ts && _hasNoPausedAncestors(animation.parent);
                }, _elapsedCycleDuration = function _elapsedCycleDuration(animation) {
                    return animation._repeat ? _animationCycle(animation._tTime, animation = animation.duration() + animation._rDelay) * animation : 0;
                }, _animationCycle = function _animationCycle(tTime, cycleDuration) {
                    var whole = Math.floor(tTime /= cycleDuration);
                    return tTime && whole === tTime ? whole - 1 : whole;
                }, _parentToChildTotalTime = function _parentToChildTotalTime(parentTime, child) {
                    return (parentTime - child._start) * child._ts + (child._ts >= 0 ? 0 : child._dirty ? child.totalDuration() : child._tDur);
                }, _setEnd = function _setEnd(animation) {
                    return animation._end = _roundPrecise(animation._start + (animation._tDur / Math.abs(animation._ts || animation._rts || _tinyNum) || 0));
                }, _alignPlayhead = function _alignPlayhead(animation, totalTime) {
                    var parent = animation._dp;
                    if (parent && parent.smoothChildTiming && animation._ts) {
                        animation._start = _roundPrecise(parent._time - (animation._ts > 0 ? totalTime / animation._ts : ((animation._dirty ? animation.totalDuration() : animation._tDur) - totalTime) / -animation._ts));
                        _setEnd(animation);
                        parent._dirty || _uncache(parent, animation);
                    }
                    return animation;
                }, _postAddChecks = function _postAddChecks(timeline, child) {
                    var t;
                    if (child._time || !child._dur && child._initted || child._start < timeline._time && (child._dur || !child.add)) {
                        t = _parentToChildTotalTime(timeline.rawTime(), child);
                        if (!child._dur || _clamp(0, child.totalDuration(), t) - child._tTime > _tinyNum) child.render(t, true);
                    }
                    if (_uncache(timeline, child)._dp && timeline._initted && timeline._time >= timeline._dur && timeline._ts) {
                        if (timeline._dur < timeline.duration()) {
                            t = timeline;
                            while (t._dp) {
                                t.rawTime() >= 0 && t.totalTime(t._tTime);
                                t = t._dp;
                            }
                        }
                        timeline._zTime = -_tinyNum;
                    }
                }, _addToTimeline = function _addToTimeline(timeline, child, position, skipChecks) {
                    child.parent && _removeFromParent(child);
                    child._start = _roundPrecise((_isNumber(position) ? position : position || timeline !== _globalTimeline ? _parsePosition(timeline, position, child) : timeline._time) + child._delay);
                    child._end = _roundPrecise(child._start + (child.totalDuration() / Math.abs(child.timeScale()) || 0));
                    _addLinkedListItem(timeline, child, "_first", "_last", timeline._sort ? "_start" : 0);
                    _isFromOrFromStart(child) || (timeline._recent = child);
                    skipChecks || _postAddChecks(timeline, child);
                    timeline._ts < 0 && _alignPlayhead(timeline, timeline._tTime);
                    return timeline;
                }, _scrollTrigger = function _scrollTrigger(animation, trigger) {
                    return (_globals.ScrollTrigger || _missingPlugin("scrollTrigger", trigger)) && _globals.ScrollTrigger.create(trigger, animation);
                }, _attemptInitTween = function _attemptInitTween(tween, time, force, suppressEvents, tTime) {
                    _initTween(tween, time, tTime);
                    if (!tween._initted) return 1;
                    if (!force && tween._pt && !_reverting && (tween._dur && tween.vars.lazy !== false || !tween._dur && tween.vars.lazy) && _lastRenderedFrame !== _ticker.frame) {
                        _lazyTweens.push(tween);
                        tween._lazy = [ tTime, suppressEvents ];
                        return 1;
                    }
                }, _parentPlayheadIsBeforeStart = function _parentPlayheadIsBeforeStart(_ref) {
                    var parent = _ref.parent;
                    return parent && parent._ts && parent._initted && !parent._lock && (parent.rawTime() < 0 || _parentPlayheadIsBeforeStart(parent));
                }, _isFromOrFromStart = function _isFromOrFromStart(_ref2) {
                    var data = _ref2.data;
                    return data === "isFromStart" || data === "isStart";
                }, _renderZeroDurationTween = function _renderZeroDurationTween(tween, totalTime, suppressEvents, force) {
                    var pt, iteration, prevIteration, prevRatio = tween.ratio, ratio = totalTime < 0 || !totalTime && (!tween._start && _parentPlayheadIsBeforeStart(tween) && !(!tween._initted && _isFromOrFromStart(tween)) || (tween._ts < 0 || tween._dp._ts < 0) && !_isFromOrFromStart(tween)) ? 0 : 1, repeatDelay = tween._rDelay, tTime = 0;
                    if (repeatDelay && tween._repeat) {
                        tTime = _clamp(0, tween._tDur, totalTime);
                        iteration = _animationCycle(tTime, repeatDelay);
                        tween._yoyo && iteration & 1 && (ratio = 1 - ratio);
                        if (iteration !== _animationCycle(tween._tTime, repeatDelay)) {
                            prevRatio = 1 - ratio;
                            tween.vars.repeatRefresh && tween._initted && tween.invalidate();
                        }
                    }
                    if (ratio !== prevRatio || _reverting || force || tween._zTime === _tinyNum || !totalTime && tween._zTime) {
                        if (!tween._initted && _attemptInitTween(tween, totalTime, force, suppressEvents, tTime)) return;
                        prevIteration = tween._zTime;
                        tween._zTime = totalTime || (suppressEvents ? _tinyNum : 0);
                        suppressEvents || (suppressEvents = totalTime && !prevIteration);
                        tween.ratio = ratio;
                        tween._from && (ratio = 1 - ratio);
                        tween._time = 0;
                        tween._tTime = tTime;
                        pt = tween._pt;
                        while (pt) {
                            pt.r(ratio, pt.d);
                            pt = pt._next;
                        }
                        totalTime < 0 && _rewindStartAt(tween, totalTime, suppressEvents, true);
                        tween._onUpdate && !suppressEvents && _callback(tween, "onUpdate");
                        tTime && tween._repeat && !suppressEvents && tween.parent && _callback(tween, "onRepeat");
                        if ((totalTime >= tween._tDur || totalTime < 0) && tween.ratio === ratio) {
                            ratio && _removeFromParent(tween, 1);
                            if (!suppressEvents && !_reverting) {
                                _callback(tween, ratio ? "onComplete" : "onReverseComplete", true);
                                tween._prom && tween._prom();
                            }
                        }
                    } else if (!tween._zTime) tween._zTime = totalTime;
                }, _findNextPauseTween = function _findNextPauseTween(animation, prevTime, time) {
                    var child;
                    if (time > prevTime) {
                        child = animation._first;
                        while (child && child._start <= time) {
                            if (child.data === "isPause" && child._start > prevTime) return child;
                            child = child._next;
                        }
                    } else {
                        child = animation._last;
                        while (child && child._start >= time) {
                            if (child.data === "isPause" && child._start < prevTime) return child;
                            child = child._prev;
                        }
                    }
                }, _setDuration = function _setDuration(animation, duration, skipUncache, leavePlayhead) {
                    var repeat = animation._repeat, dur = _roundPrecise(duration) || 0, totalProgress = animation._tTime / animation._tDur;
                    totalProgress && !leavePlayhead && (animation._time *= dur / animation._dur);
                    animation._dur = dur;
                    animation._tDur = !repeat ? dur : repeat < 0 ? 1e10 : _roundPrecise(dur * (repeat + 1) + animation._rDelay * repeat);
                    totalProgress > 0 && !leavePlayhead && _alignPlayhead(animation, animation._tTime = animation._tDur * totalProgress);
                    animation.parent && _setEnd(animation);
                    skipUncache || _uncache(animation.parent, animation);
                    return animation;
                }, _onUpdateTotalDuration = function _onUpdateTotalDuration(animation) {
                    return animation instanceof Timeline ? _uncache(animation) : _setDuration(animation, animation._dur);
                }, _zeroPosition = {
                    _start: 0,
                    endTime: _emptyFunc,
                    totalDuration: _emptyFunc
                }, _parsePosition = function _parsePosition(animation, position, percentAnimation) {
                    var i, offset, isPercent, labels = animation.labels, recent = animation._recent || _zeroPosition, clippedDuration = animation.duration() >= _bigNum ? recent.endTime(false) : animation._dur;
                    if (_isString(position) && (isNaN(position) || position in labels)) {
                        offset = position.charAt(0);
                        isPercent = position.substr(-1) === "%";
                        i = position.indexOf("=");
                        if (offset === "<" || offset === ">") {
                            i >= 0 && (position = position.replace(/=/, ""));
                            return (offset === "<" ? recent._start : recent.endTime(recent._repeat >= 0)) + (parseFloat(position.substr(1)) || 0) * (isPercent ? (i < 0 ? recent : percentAnimation).totalDuration() / 100 : 1);
                        }
                        if (i < 0) {
                            position in labels || (labels[position] = clippedDuration);
                            return labels[position];
                        }
                        offset = parseFloat(position.charAt(i - 1) + position.substr(i + 1));
                        if (isPercent && percentAnimation) offset = offset / 100 * (_isArray(percentAnimation) ? percentAnimation[0] : percentAnimation).totalDuration();
                        return i > 1 ? _parsePosition(animation, position.substr(0, i - 1), percentAnimation) + offset : clippedDuration + offset;
                    }
                    return position == null ? clippedDuration : +position;
                }, _createTweenType = function _createTweenType(type, params, timeline) {
                    var irVars, parent, isLegacy = _isNumber(params[1]), varsIndex = (isLegacy ? 2 : 1) + (type < 2 ? 0 : 1), vars = params[varsIndex];
                    isLegacy && (vars.duration = params[1]);
                    vars.parent = timeline;
                    if (type) {
                        irVars = vars;
                        parent = timeline;
                        while (parent && !("immediateRender" in irVars)) {
                            irVars = parent.vars.defaults || {};
                            parent = _isNotFalse(parent.vars.inherit) && parent.parent;
                        }
                        vars.immediateRender = _isNotFalse(irVars.immediateRender);
                        type < 2 ? vars.runBackwards = 1 : vars.startAt = params[varsIndex - 1];
                    }
                    return new Tween(params[0], vars, params[varsIndex + 1]);
                }, _conditionalReturn = function _conditionalReturn(value, func) {
                    return value || value === 0 ? func(value) : func;
                }, _clamp = function _clamp(min, max, value) {
                    return value < min ? min : value > max ? max : value;
                }, getUnit = function getUnit(value, v) {
                    return !_isString(value) || !(v = _unitExp.exec(value)) ? "" : v[1];
                }, clamp = function clamp(min, max, value) {
                    return _conditionalReturn(value, (function(v) {
                        return _clamp(min, max, v);
                    }));
                }, _slice = [].slice, _isArrayLike = function _isArrayLike(value, nonEmpty) {
                    return value && _isObject(value) && "length" in value && (!nonEmpty && !value.length || value.length - 1 in value && _isObject(value[0])) && !value.nodeType && value !== _win;
                }, _flatten = function _flatten(ar, leaveStrings, accumulator) {
                    if (accumulator === void 0) accumulator = [];
                    return ar.forEach((function(value) {
                        var _accumulator;
                        return _isString(value) && !leaveStrings || _isArrayLike(value, 1) ? (_accumulator = accumulator).push.apply(_accumulator, toArray(value)) : accumulator.push(value);
                    })) || accumulator;
                }, toArray = function toArray(value, scope, leaveStrings) {
                    return _context && !scope && _context.selector ? _context.selector(value) : _isString(value) && !leaveStrings && (_coreInitted || !_wake()) ? _slice.call((scope || _doc).querySelectorAll(value), 0) : _isArray(value) ? _flatten(value, leaveStrings) : _isArrayLike(value) ? _slice.call(value, 0) : value ? [ value ] : [];
                }, selector = function selector(value) {
                    value = toArray(value)[0] || _warn("Invalid scope") || {};
                    return function(v) {
                        var el = value.current || value.nativeElement || value;
                        return toArray(v, el.querySelectorAll ? el : el === value ? _warn("Invalid scope") || _doc.createElement("div") : value);
                    };
                }, shuffle = function shuffle(a) {
                    return a.sort((function() {
                        return .5 - Math.random();
                    }));
                }, distribute = function distribute(v) {
                    if (_isFunction(v)) return v;
                    var vars = _isObject(v) ? v : {
                        each: v
                    }, ease = _parseEase(vars.ease), from = vars.from || 0, base = parseFloat(vars.base) || 0, cache = {}, isDecimal = from > 0 && from < 1, ratios = isNaN(from) || isDecimal, axis = vars.axis, ratioX = from, ratioY = from;
                    if (_isString(from)) ratioX = ratioY = {
                        center: .5,
                        edges: .5,
                        end: 1
                    }[from] || 0; else if (!isDecimal && ratios) {
                        ratioX = from[0];
                        ratioY = from[1];
                    }
                    return function(i, target, a) {
                        var originX, originY, x, y, d, j, max, min, wrapAt, l = (a || vars).length, distances = cache[l];
                        if (!distances) {
                            wrapAt = vars.grid === "auto" ? 0 : (vars.grid || [ 1, _bigNum ])[1];
                            if (!wrapAt) {
                                max = -_bigNum;
                                while (max < (max = a[wrapAt++].getBoundingClientRect().left) && wrapAt < l) ;
                                wrapAt < l && wrapAt--;
                            }
                            distances = cache[l] = [];
                            originX = ratios ? Math.min(wrapAt, l) * ratioX - .5 : from % wrapAt;
                            originY = wrapAt === _bigNum ? 0 : ratios ? l * ratioY / wrapAt - .5 : from / wrapAt | 0;
                            max = 0;
                            min = _bigNum;
                            for (j = 0; j < l; j++) {
                                x = j % wrapAt - originX;
                                y = originY - (j / wrapAt | 0);
                                distances[j] = d = !axis ? _sqrt(x * x + y * y) : Math.abs(axis === "y" ? y : x);
                                d > max && (max = d);
                                d < min && (min = d);
                            }
                            from === "random" && shuffle(distances);
                            distances.max = max - min;
                            distances.min = min;
                            distances.v = l = (parseFloat(vars.amount) || parseFloat(vars.each) * (wrapAt > l ? l - 1 : !axis ? Math.max(wrapAt, l / wrapAt) : axis === "y" ? l / wrapAt : wrapAt) || 0) * (from === "edges" ? -1 : 1);
                            distances.b = l < 0 ? base - l : base;
                            distances.u = getUnit(vars.amount || vars.each) || 0;
                            ease = ease && l < 0 ? _invertEase(ease) : ease;
                        }
                        l = (distances[i] - distances.min) / distances.max || 0;
                        return _roundPrecise(distances.b + (ease ? ease(l) : l) * distances.v) + distances.u;
                    };
                }, _roundModifier = function _roundModifier(v) {
                    var p = Math.pow(10, ((v + "").split(".")[1] || "").length);
                    return function(raw) {
                        var n = _roundPrecise(Math.round(parseFloat(raw) / v) * v * p);
                        return (n - n % 1) / p + (_isNumber(raw) ? 0 : getUnit(raw));
                    };
                }, snap = function snap(snapTo, value) {
                    var radius, is2D, isArray = _isArray(snapTo);
                    if (!isArray && _isObject(snapTo)) {
                        radius = isArray = snapTo.radius || _bigNum;
                        if (snapTo.values) {
                            snapTo = toArray(snapTo.values);
                            if (is2D = !_isNumber(snapTo[0])) radius *= radius;
                        } else snapTo = _roundModifier(snapTo.increment);
                    }
                    return _conditionalReturn(value, !isArray ? _roundModifier(snapTo) : _isFunction(snapTo) ? function(raw) {
                        is2D = snapTo(raw);
                        return Math.abs(is2D - raw) <= radius ? is2D : raw;
                    } : function(raw) {
                        var dx, dy, x = parseFloat(is2D ? raw.x : raw), y = parseFloat(is2D ? raw.y : 0), min = _bigNum, closest = 0, i = snapTo.length;
                        while (i--) {
                            if (is2D) {
                                dx = snapTo[i].x - x;
                                dy = snapTo[i].y - y;
                                dx = dx * dx + dy * dy;
                            } else dx = Math.abs(snapTo[i] - x);
                            if (dx < min) {
                                min = dx;
                                closest = i;
                            }
                        }
                        closest = !radius || min <= radius ? snapTo[closest] : raw;
                        return is2D || closest === raw || _isNumber(raw) ? closest : closest + getUnit(raw);
                    });
                }, random = function random(min, max, roundingIncrement, returnFunction) {
                    return _conditionalReturn(_isArray(min) ? !max : roundingIncrement === true ? !!(roundingIncrement = 0) : !returnFunction, (function() {
                        return _isArray(min) ? min[~~(Math.random() * min.length)] : (roundingIncrement = roundingIncrement || 1e-5) && (returnFunction = roundingIncrement < 1 ? Math.pow(10, (roundingIncrement + "").length - 2) : 1) && Math.floor(Math.round((min - roundingIncrement / 2 + Math.random() * (max - min + roundingIncrement * .99)) / roundingIncrement) * roundingIncrement * returnFunction) / returnFunction;
                    }));
                }, pipe = function pipe() {
                    for (var _len = arguments.length, functions = new Array(_len), _key = 0; _key < _len; _key++) functions[_key] = arguments[_key];
                    return function(value) {
                        return functions.reduce((function(v, f) {
                            return f(v);
                        }), value);
                    };
                }, unitize = function unitize(func, unit) {
                    return function(value) {
                        return func(parseFloat(value)) + (unit || getUnit(value));
                    };
                }, normalize = function normalize(min, max, value) {
                    return mapRange(min, max, 0, 1, value);
                }, _wrapArray = function _wrapArray(a, wrapper, value) {
                    return _conditionalReturn(value, (function(index) {
                        return a[~~wrapper(index)];
                    }));
                }, wrap = function wrap(min, max, value) {
                    var range = max - min;
                    return _isArray(min) ? _wrapArray(min, wrap(0, min.length), max) : _conditionalReturn(value, (function(value) {
                        return (range + (value - min) % range) % range + min;
                    }));
                }, wrapYoyo = function wrapYoyo(min, max, value) {
                    var range = max - min, total = range * 2;
                    return _isArray(min) ? _wrapArray(min, wrapYoyo(0, min.length - 1), max) : _conditionalReturn(value, (function(value) {
                        value = (total + (value - min) % total) % total || 0;
                        return min + (value > range ? total - value : value);
                    }));
                }, _replaceRandom = function _replaceRandom(value) {
                    var i, nums, end, isArray, prev = 0, s = "";
                    while (~(i = value.indexOf("random(", prev))) {
                        end = value.indexOf(")", i);
                        isArray = value.charAt(i + 7) === "[";
                        nums = value.substr(i + 7, end - i - 7).match(isArray ? _delimitedValueExp : _strictNumExp);
                        s += value.substr(prev, i - prev) + random(isArray ? nums : +nums[0], isArray ? 0 : +nums[1], +nums[2] || 1e-5);
                        prev = end + 1;
                    }
                    return s + value.substr(prev, value.length - prev);
                }, mapRange = function mapRange(inMin, inMax, outMin, outMax, value) {
                    var inRange = inMax - inMin, outRange = outMax - outMin;
                    return _conditionalReturn(value, (function(value) {
                        return outMin + ((value - inMin) / inRange * outRange || 0);
                    }));
                }, interpolate = function interpolate(start, end, progress, mutate) {
                    var func = isNaN(start + end) ? 0 : function(p) {
                        return (1 - p) * start + p * end;
                    };
                    if (!func) {
                        var p, i, interpolators, l, il, isString = _isString(start), master = {};
                        progress === true && (mutate = 1) && (progress = null);
                        if (isString) {
                            start = {
                                p: start
                            };
                            end = {
                                p: end
                            };
                        } else if (_isArray(start) && !_isArray(end)) {
                            interpolators = [];
                            l = start.length;
                            il = l - 2;
                            for (i = 1; i < l; i++) interpolators.push(interpolate(start[i - 1], start[i]));
                            l--;
                            func = function func(p) {
                                p *= l;
                                var i = Math.min(il, ~~p);
                                return interpolators[i](p - i);
                            };
                            progress = end;
                        } else if (!mutate) start = _merge(_isArray(start) ? [] : {}, start);
                        if (!interpolators) {
                            for (p in end) _addPropTween.call(master, start, p, "get", end[p]);
                            func = function func(p) {
                                return _renderPropTweens(p, master) || (isString ? start.p : start);
                            };
                        }
                    }
                    return _conditionalReturn(progress, func);
                }, _getLabelInDirection = function _getLabelInDirection(timeline, fromTime, backward) {
                    var p, distance, label, labels = timeline.labels, min = _bigNum;
                    for (p in labels) {
                        distance = labels[p] - fromTime;
                        if (distance < 0 === !!backward && distance && min > (distance = Math.abs(distance))) {
                            label = p;
                            min = distance;
                        }
                    }
                    return label;
                }, _callback = function _callback(animation, type, executeLazyFirst) {
                    var params, scope, result, v = animation.vars, callback = v[type], prevContext = _context, context = animation._ctx;
                    if (!callback) return;
                    params = v[type + "Params"];
                    scope = v.callbackScope || animation;
                    executeLazyFirst && _lazyTweens.length && _lazyRender();
                    context && (_context = context);
                    result = params ? callback.apply(scope, params) : callback.call(scope);
                    _context = prevContext;
                    return result;
                }, _interrupt = function _interrupt(animation) {
                    _removeFromParent(animation);
                    animation.scrollTrigger && animation.scrollTrigger.kill(!!_reverting);
                    animation.progress() < 1 && _callback(animation, "onInterrupt");
                    return animation;
                }, _registerPluginQueue = [], _createPlugin = function _createPlugin(config) {
                    if (!config) return;
                    config = !config.name && config["default"] || config;
                    if (_windowExists() || config.headless) {
                        var name = config.name, isFunc = _isFunction(config), Plugin = name && !isFunc && config.init ? function() {
                            this._props = [];
                        } : config, instanceDefaults = {
                            init: _emptyFunc,
                            render: _renderPropTweens,
                            add: _addPropTween,
                            kill: _killPropTweensOf,
                            modifier: _addPluginModifier,
                            rawVars: 0
                        }, statics = {
                            targetTest: 0,
                            get: 0,
                            getSetter: _getSetter,
                            aliases: {},
                            register: 0
                        };
                        _wake();
                        if (config !== Plugin) {
                            if (_plugins[name]) return;
                            _setDefaults(Plugin, _setDefaults(_copyExcluding(config, instanceDefaults), statics));
                            _merge(Plugin.prototype, _merge(instanceDefaults, _copyExcluding(config, statics)));
                            _plugins[Plugin.prop = name] = Plugin;
                            if (config.targetTest) {
                                _harnessPlugins.push(Plugin);
                                _reservedProps[name] = 1;
                            }
                            name = (name === "css" ? "CSS" : name.charAt(0).toUpperCase() + name.substr(1)) + "Plugin";
                        }
                        _addGlobal(name, Plugin);
                        config.register && config.register(gsap, Plugin, PropTween);
                    } else _registerPluginQueue.push(config);
                }, _255 = 255, _colorLookup = {
                    aqua: [ 0, _255, _255 ],
                    lime: [ 0, _255, 0 ],
                    silver: [ 192, 192, 192 ],
                    black: [ 0, 0, 0 ],
                    maroon: [ 128, 0, 0 ],
                    teal: [ 0, 128, 128 ],
                    blue: [ 0, 0, _255 ],
                    navy: [ 0, 0, 128 ],
                    white: [ _255, _255, _255 ],
                    olive: [ 128, 128, 0 ],
                    yellow: [ _255, _255, 0 ],
                    orange: [ _255, 165, 0 ],
                    gray: [ 128, 128, 128 ],
                    purple: [ 128, 0, 128 ],
                    green: [ 0, 128, 0 ],
                    red: [ _255, 0, 0 ],
                    pink: [ _255, 192, 203 ],
                    cyan: [ 0, _255, _255 ],
                    transparent: [ _255, _255, _255, 0 ]
                }, _hue = function _hue(h, m1, m2) {
                    h += h < 0 ? 1 : h > 1 ? -1 : 0;
                    return (h * 6 < 1 ? m1 + (m2 - m1) * h * 6 : h < .5 ? m2 : h * 3 < 2 ? m1 + (m2 - m1) * (2 / 3 - h) * 6 : m1) * _255 + .5 | 0;
                }, splitColor = function splitColor(v, toHSL, forceAlpha) {
                    var r, g, b, h, s, l, max, min, d, wasHSL, a = !v ? _colorLookup.black : _isNumber(v) ? [ v >> 16, v >> 8 & _255, v & _255 ] : 0;
                    if (!a) {
                        if (v.substr(-1) === ",") v = v.substr(0, v.length - 1);
                        if (_colorLookup[v]) a = _colorLookup[v]; else if (v.charAt(0) === "#") {
                            if (v.length < 6) {
                                r = v.charAt(1);
                                g = v.charAt(2);
                                b = v.charAt(3);
                                v = "#" + r + r + g + g + b + b + (v.length === 5 ? v.charAt(4) + v.charAt(4) : "");
                            }
                            if (v.length === 9) {
                                a = parseInt(v.substr(1, 6), 16);
                                return [ a >> 16, a >> 8 & _255, a & _255, parseInt(v.substr(7), 16) / 255 ];
                            }
                            v = parseInt(v.substr(1), 16);
                            a = [ v >> 16, v >> 8 & _255, v & _255 ];
                        } else if (v.substr(0, 3) === "hsl") {
                            a = wasHSL = v.match(_strictNumExp);
                            if (!toHSL) {
                                h = +a[0] % 360 / 360;
                                s = +a[1] / 100;
                                l = +a[2] / 100;
                                g = l <= .5 ? l * (s + 1) : l + s - l * s;
                                r = l * 2 - g;
                                a.length > 3 && (a[3] *= 1);
                                a[0] = _hue(h + 1 / 3, r, g);
                                a[1] = _hue(h, r, g);
                                a[2] = _hue(h - 1 / 3, r, g);
                            } else if (~v.indexOf("=")) {
                                a = v.match(_numExp);
                                forceAlpha && a.length < 4 && (a[3] = 1);
                                return a;
                            }
                        } else a = v.match(_strictNumExp) || _colorLookup.transparent;
                        a = a.map(Number);
                    }
                    if (toHSL && !wasHSL) {
                        r = a[0] / _255;
                        g = a[1] / _255;
                        b = a[2] / _255;
                        max = Math.max(r, g, b);
                        min = Math.min(r, g, b);
                        l = (max + min) / 2;
                        if (max === min) h = s = 0; else {
                            d = max - min;
                            s = l > .5 ? d / (2 - max - min) : d / (max + min);
                            h = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
                            h *= 60;
                        }
                        a[0] = ~~(h + .5);
                        a[1] = ~~(s * 100 + .5);
                        a[2] = ~~(l * 100 + .5);
                    }
                    forceAlpha && a.length < 4 && (a[3] = 1);
                    return a;
                }, _colorOrderData = function _colorOrderData(v) {
                    var values = [], c = [], i = -1;
                    v.split(_colorExp).forEach((function(v) {
                        var a = v.match(_numWithUnitExp) || [];
                        values.push.apply(values, a);
                        c.push(i += a.length + 1);
                    }));
                    values.c = c;
                    return values;
                }, _formatColors = function _formatColors(s, toHSL, orderMatchData) {
                    var c, shell, d, l, result = "", colors = (s + result).match(_colorExp), type = toHSL ? "hsla(" : "rgba(", i = 0;
                    if (!colors) return s;
                    colors = colors.map((function(color) {
                        return (color = splitColor(color, toHSL, 1)) && type + (toHSL ? color[0] + "," + color[1] + "%," + color[2] + "%," + color[3] : color.join(",")) + ")";
                    }));
                    if (orderMatchData) {
                        d = _colorOrderData(s);
                        c = orderMatchData.c;
                        if (c.join(result) !== d.c.join(result)) {
                            shell = s.replace(_colorExp, "1").split(_numWithUnitExp);
                            l = shell.length - 1;
                            for (;i < l; i++) result += shell[i] + (~c.indexOf(i) ? colors.shift() || type + "0,0,0,0)" : (d.length ? d : colors.length ? colors : orderMatchData).shift());
                        }
                    }
                    if (!shell) {
                        shell = s.split(_colorExp);
                        l = shell.length - 1;
                        for (;i < l; i++) result += shell[i] + colors[i];
                    }
                    return result + shell[l];
                }, _colorExp = function() {
                    var p, s = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
                    for (p in _colorLookup) s += "|" + p + "\\b";
                    return new RegExp(s + ")", "gi");
                }(), _hslExp = /hsl[a]?\(/, _colorStringFilter = function _colorStringFilter(a) {
                    var toHSL, combined = a.join(" ");
                    _colorExp.lastIndex = 0;
                    if (_colorExp.test(combined)) {
                        toHSL = _hslExp.test(combined);
                        a[1] = _formatColors(a[1], toHSL);
                        a[0] = _formatColors(a[0], toHSL, _colorOrderData(a[1]));
                        return true;
                    }
                }, _ticker = function() {
                    var _id, _req, _raf, _self, _delta, _i, _getTime = Date.now, _lagThreshold = 500, _adjustedLag = 33, _startTime = _getTime(), _lastUpdate = _startTime, _gap = 1e3 / 240, _nextTime = _gap, _listeners = [], _tick = function _tick(v) {
                        var overlap, dispatch, time, frame, elapsed = _getTime() - _lastUpdate, manual = v === true;
                        (elapsed > _lagThreshold || elapsed < 0) && (_startTime += elapsed - _adjustedLag);
                        _lastUpdate += elapsed;
                        time = _lastUpdate - _startTime;
                        overlap = time - _nextTime;
                        if (overlap > 0 || manual) {
                            frame = ++_self.frame;
                            _delta = time - _self.time * 1e3;
                            _self.time = time /= 1e3;
                            _nextTime += overlap + (overlap >= _gap ? 4 : _gap - overlap);
                            dispatch = 1;
                        }
                        manual || (_id = _req(_tick));
                        if (dispatch) for (_i = 0; _i < _listeners.length; _i++) _listeners[_i](time, _delta, frame, v);
                    };
                    _self = {
                        time: 0,
                        frame: 0,
                        tick: function tick() {
                            _tick(true);
                        },
                        deltaRatio: function deltaRatio(fps) {
                            return _delta / (1e3 / (fps || 60));
                        },
                        wake: function wake() {
                            if (_coreReady) {
                                if (!_coreInitted && _windowExists()) {
                                    _win = _coreInitted = window;
                                    _doc = _win.document || {};
                                    _globals.gsap = gsap;
                                    (_win.gsapVersions || (_win.gsapVersions = [])).push(gsap.version);
                                    _install(_installScope || _win.GreenSockGlobals || !_win.gsap && _win || {});
                                    _registerPluginQueue.forEach(_createPlugin);
                                }
                                _raf = typeof requestAnimationFrame !== "undefined" && requestAnimationFrame;
                                _id && _self.sleep();
                                _req = _raf || function(f) {
                                    return setTimeout(f, _nextTime - _self.time * 1e3 + 1 | 0);
                                };
                                _tickerActive = 1;
                                _tick(2);
                            }
                        },
                        sleep: function sleep() {
                            (_raf ? cancelAnimationFrame : clearTimeout)(_id);
                            _tickerActive = 0;
                            _req = _emptyFunc;
                        },
                        lagSmoothing: function lagSmoothing(threshold, adjustedLag) {
                            _lagThreshold = threshold || 1 / 0;
                            _adjustedLag = Math.min(adjustedLag || 33, _lagThreshold);
                        },
                        fps: function fps(_fps) {
                            _gap = 1e3 / (_fps || 240);
                            _nextTime = _self.time * 1e3 + _gap;
                        },
                        add: function add(callback, once, prioritize) {
                            var func = once ? function(t, d, f, v) {
                                callback(t, d, f, v);
                                _self.remove(func);
                            } : callback;
                            _self.remove(callback);
                            _listeners[prioritize ? "unshift" : "push"](func);
                            _wake();
                            return func;
                        },
                        remove: function remove(callback, i) {
                            ~(i = _listeners.indexOf(callback)) && _listeners.splice(i, 1) && _i >= i && _i--;
                        },
                        _listeners
                    };
                    return _self;
                }(), _wake = function _wake() {
                    return !_tickerActive && _ticker.wake();
                }, _easeMap = {}, _customEaseExp = /^[\d.\-M][\d.\-,\s]/, _quotesExp = /["']/g, _parseObjectInString = function _parseObjectInString(value) {
                    var index, val, parsedVal, obj = {}, split = value.substr(1, value.length - 3).split(":"), key = split[0], i = 1, l = split.length;
                    for (;i < l; i++) {
                        val = split[i];
                        index = i !== l - 1 ? val.lastIndexOf(",") : val.length;
                        parsedVal = val.substr(0, index);
                        obj[key] = isNaN(parsedVal) ? parsedVal.replace(_quotesExp, "").trim() : +parsedVal;
                        key = val.substr(index + 1).trim();
                    }
                    return obj;
                }, _valueInParentheses = function _valueInParentheses(value) {
                    var open = value.indexOf("(") + 1, close = value.indexOf(")"), nested = value.indexOf("(", open);
                    return value.substring(open, ~nested && nested < close ? value.indexOf(")", close + 1) : close);
                }, _configEaseFromString = function _configEaseFromString(name) {
                    var split = (name + "").split("("), ease = _easeMap[split[0]];
                    return ease && split.length > 1 && ease.config ? ease.config.apply(null, ~name.indexOf("{") ? [ _parseObjectInString(split[1]) ] : _valueInParentheses(name).split(",").map(_numericIfPossible)) : _easeMap._CE && _customEaseExp.test(name) ? _easeMap._CE("", name) : ease;
                }, _invertEase = function _invertEase(ease) {
                    return function(p) {
                        return 1 - ease(1 - p);
                    };
                }, _propagateYoyoEase = function _propagateYoyoEase(timeline, isYoyo) {
                    var ease, child = timeline._first;
                    while (child) {
                        if (child instanceof Timeline) _propagateYoyoEase(child, isYoyo); else if (child.vars.yoyoEase && (!child._yoyo || !child._repeat) && child._yoyo !== isYoyo) if (child.timeline) _propagateYoyoEase(child.timeline, isYoyo); else {
                            ease = child._ease;
                            child._ease = child._yEase;
                            child._yEase = ease;
                            child._yoyo = isYoyo;
                        }
                        child = child._next;
                    }
                }, _parseEase = function _parseEase(ease, defaultEase) {
                    return !ease ? defaultEase : (_isFunction(ease) ? ease : _easeMap[ease] || _configEaseFromString(ease)) || defaultEase;
                }, _insertEase = function _insertEase(names, easeIn, easeOut, easeInOut) {
                    if (easeOut === void 0) easeOut = function easeOut(p) {
                        return 1 - easeIn(1 - p);
                    };
                    if (easeInOut === void 0) easeInOut = function easeInOut(p) {
                        return p < .5 ? easeIn(p * 2) / 2 : 1 - easeIn((1 - p) * 2) / 2;
                    };
                    var lowercaseName, ease = {
                        easeIn,
                        easeOut,
                        easeInOut
                    };
                    _forEachName(names, (function(name) {
                        _easeMap[name] = _globals[name] = ease;
                        _easeMap[lowercaseName = name.toLowerCase()] = easeOut;
                        for (var p in ease) _easeMap[lowercaseName + (p === "easeIn" ? ".in" : p === "easeOut" ? ".out" : ".inOut")] = _easeMap[name + "." + p] = ease[p];
                    }));
                    return ease;
                }, _easeInOutFromOut = function _easeInOutFromOut(easeOut) {
                    return function(p) {
                        return p < .5 ? (1 - easeOut(1 - p * 2)) / 2 : .5 + easeOut((p - .5) * 2) / 2;
                    };
                }, _configElastic = function _configElastic(type, amplitude, period) {
                    var p1 = amplitude >= 1 ? amplitude : 1, p2 = (period || (type ? .3 : .45)) / (amplitude < 1 ? amplitude : 1), p3 = p2 / _2PI * (Math.asin(1 / p1) || 0), easeOut = function easeOut(p) {
                        return p === 1 ? 1 : p1 * Math.pow(2, -10 * p) * _sin((p - p3) * p2) + 1;
                    }, ease = type === "out" ? easeOut : type === "in" ? function(p) {
                        return 1 - easeOut(1 - p);
                    } : _easeInOutFromOut(easeOut);
                    p2 = _2PI / p2;
                    ease.config = function(amplitude, period) {
                        return _configElastic(type, amplitude, period);
                    };
                    return ease;
                }, _configBack = function _configBack(type, overshoot) {
                    if (overshoot === void 0) overshoot = 1.70158;
                    var easeOut = function easeOut(p) {
                        return p ? --p * p * ((overshoot + 1) * p + overshoot) + 1 : 0;
                    }, ease = type === "out" ? easeOut : type === "in" ? function(p) {
                        return 1 - easeOut(1 - p);
                    } : _easeInOutFromOut(easeOut);
                    ease.config = function(overshoot) {
                        return _configBack(type, overshoot);
                    };
                    return ease;
                };
                _forEachName("Linear,Quad,Cubic,Quart,Quint,Strong", (function(name, i) {
                    var power = i < 5 ? i + 1 : i;
                    _insertEase(name + ",Power" + (power - 1), i ? function(p) {
                        return Math.pow(p, power);
                    } : function(p) {
                        return p;
                    }, (function(p) {
                        return 1 - Math.pow(1 - p, power);
                    }), (function(p) {
                        return p < .5 ? Math.pow(p * 2, power) / 2 : 1 - Math.pow((1 - p) * 2, power) / 2;
                    }));
                }));
                _easeMap.Linear.easeNone = _easeMap.none = _easeMap.Linear.easeIn;
                _insertEase("Elastic", _configElastic("in"), _configElastic("out"), _configElastic());
                (function(n, c) {
                    var n1 = 1 / c, n2 = 2 * n1, n3 = 2.5 * n1, easeOut = function easeOut(p) {
                        return p < n1 ? n * p * p : p < n2 ? n * Math.pow(p - 1.5 / c, 2) + .75 : p < n3 ? n * (p -= 2.25 / c) * p + .9375 : n * Math.pow(p - 2.625 / c, 2) + .984375;
                    };
                    _insertEase("Bounce", (function(p) {
                        return 1 - easeOut(1 - p);
                    }), easeOut);
                })(7.5625, 2.75);
                _insertEase("Expo", (function(p) {
                    return p ? Math.pow(2, 10 * (p - 1)) : 0;
                }));
                _insertEase("Circ", (function(p) {
                    return -(_sqrt(1 - p * p) - 1);
                }));
                _insertEase("Sine", (function(p) {
                    return p === 1 ? 1 : -_cos(p * _HALF_PI) + 1;
                }));
                _insertEase("Back", _configBack("in"), _configBack("out"), _configBack());
                _easeMap.SteppedEase = _easeMap.steps = _globals.SteppedEase = {
                    config: function config(steps, immediateStart) {
                        if (steps === void 0) steps = 1;
                        var p1 = 1 / steps, p2 = steps + (immediateStart ? 0 : 1), p3 = immediateStart ? 1 : 0, max = 1 - _tinyNum;
                        return function(p) {
                            return ((p2 * _clamp(0, max, p) | 0) + p3) * p1;
                        };
                    }
                };
                _defaults.ease = _easeMap["quad.out"];
                _forEachName("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", (function(name) {
                    return _callbackNames += name + "," + name + "Params,";
                }));
                var GSCache = function GSCache(target, harness) {
                    this.id = _gsID++;
                    target._gsap = this;
                    this.target = target;
                    this.harness = harness;
                    this.get = harness ? harness.get : _getProperty;
                    this.set = harness ? harness.getSetter : _getSetter;
                };
                var Animation = function() {
                    function Animation(vars) {
                        this.vars = vars;
                        this._delay = +vars.delay || 0;
                        if (this._repeat = vars.repeat === 1 / 0 ? -2 : vars.repeat || 0) {
                            this._rDelay = vars.repeatDelay || 0;
                            this._yoyo = !!vars.yoyo || !!vars.yoyoEase;
                        }
                        this._ts = 1;
                        _setDuration(this, +vars.duration, 1, 1);
                        this.data = vars.data;
                        if (_context) {
                            this._ctx = _context;
                            _context.data.push(this);
                        }
                        _tickerActive || _ticker.wake();
                    }
                    var _proto = Animation.prototype;
                    _proto.delay = function delay(value) {
                        if (value || value === 0) {
                            this.parent && this.parent.smoothChildTiming && this.startTime(this._start + value - this._delay);
                            this._delay = value;
                            return this;
                        }
                        return this._delay;
                    };
                    _proto.duration = function duration(value) {
                        return arguments.length ? this.totalDuration(this._repeat > 0 ? value + (value + this._rDelay) * this._repeat : value) : this.totalDuration() && this._dur;
                    };
                    _proto.totalDuration = function totalDuration(value) {
                        if (!arguments.length) return this._tDur;
                        this._dirty = 0;
                        return _setDuration(this, this._repeat < 0 ? value : (value - this._repeat * this._rDelay) / (this._repeat + 1));
                    };
                    _proto.totalTime = function totalTime(_totalTime, suppressEvents) {
                        _wake();
                        if (!arguments.length) return this._tTime;
                        var parent = this._dp;
                        if (parent && parent.smoothChildTiming && this._ts) {
                            _alignPlayhead(this, _totalTime);
                            !parent._dp || parent.parent || _postAddChecks(parent, this);
                            while (parent && parent.parent) {
                                if (parent.parent._time !== parent._start + (parent._ts >= 0 ? parent._tTime / parent._ts : (parent.totalDuration() - parent._tTime) / -parent._ts)) parent.totalTime(parent._tTime, true);
                                parent = parent.parent;
                            }
                            if (!this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && _totalTime < this._tDur || this._ts < 0 && _totalTime > 0 || !this._tDur && !_totalTime)) _addToTimeline(this._dp, this, this._start - this._delay);
                        }
                        if (this._tTime !== _totalTime || !this._dur && !suppressEvents || this._initted && Math.abs(this._zTime) === _tinyNum || !_totalTime && !this._initted && (this.add || this._ptLookup)) {
                            this._ts || (this._pTime = _totalTime);
                            _lazySafeRender(this, _totalTime, suppressEvents);
                        }
                        return this;
                    };
                    _proto.time = function time(value, suppressEvents) {
                        return arguments.length ? this.totalTime(Math.min(this.totalDuration(), value + _elapsedCycleDuration(this)) % (this._dur + this._rDelay) || (value ? this._dur : 0), suppressEvents) : this._time;
                    };
                    _proto.totalProgress = function totalProgress(value, suppressEvents) {
                        return arguments.length ? this.totalTime(this.totalDuration() * value, suppressEvents) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() > 0 ? 1 : 0;
                    };
                    _proto.progress = function progress(value, suppressEvents) {
                        return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - value : value) + _elapsedCycleDuration(this), suppressEvents) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0;
                    };
                    _proto.iteration = function iteration(value, suppressEvents) {
                        var cycleDuration = this.duration() + this._rDelay;
                        return arguments.length ? this.totalTime(this._time + (value - 1) * cycleDuration, suppressEvents) : this._repeat ? _animationCycle(this._tTime, cycleDuration) + 1 : 1;
                    };
                    _proto.timeScale = function timeScale(value, suppressEvents) {
                        if (!arguments.length) return this._rts === -_tinyNum ? 0 : this._rts;
                        if (this._rts === value) return this;
                        var tTime = this.parent && this._ts ? _parentToChildTotalTime(this.parent._time, this) : this._tTime;
                        this._rts = +value || 0;
                        this._ts = this._ps || value === -_tinyNum ? 0 : this._rts;
                        this.totalTime(_clamp(-Math.abs(this._delay), this._tDur, tTime), suppressEvents !== false);
                        _setEnd(this);
                        return _recacheAncestors(this);
                    };
                    _proto.paused = function paused(value) {
                        if (!arguments.length) return this._ps;
                        if (this._ps !== value) {
                            this._ps = value;
                            if (value) {
                                this._pTime = this._tTime || Math.max(-this._delay, this.rawTime());
                                this._ts = this._act = 0;
                            } else {
                                _wake();
                                this._ts = this._rts;
                                this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== _tinyNum && (this._tTime -= _tinyNum));
                            }
                        }
                        return this;
                    };
                    _proto.startTime = function startTime(value) {
                        if (arguments.length) {
                            this._start = value;
                            var parent = this.parent || this._dp;
                            parent && (parent._sort || !this.parent) && _addToTimeline(parent, this, value - this._delay);
                            return this;
                        }
                        return this._start;
                    };
                    _proto.endTime = function endTime(includeRepeats) {
                        return this._start + (_isNotFalse(includeRepeats) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
                    };
                    _proto.rawTime = function rawTime(wrapRepeats) {
                        var parent = this.parent || this._dp;
                        return !parent ? this._tTime : wrapRepeats && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : !this._ts ? this._tTime : _parentToChildTotalTime(parent.rawTime(wrapRepeats), this);
                    };
                    _proto.revert = function revert(config) {
                        if (config === void 0) config = _revertConfig;
                        var prevIsReverting = _reverting;
                        _reverting = config;
                        if (this._initted || this._startAt) {
                            this.timeline && this.timeline.revert(config);
                            this.totalTime(-.01, config.suppressEvents);
                        }
                        this.data !== "nested" && config.kill !== false && this.kill();
                        _reverting = prevIsReverting;
                        return this;
                    };
                    _proto.globalTime = function globalTime(rawTime) {
                        var animation = this, time = arguments.length ? rawTime : animation.rawTime();
                        while (animation) {
                            time = animation._start + time / (Math.abs(animation._ts) || 1);
                            animation = animation._dp;
                        }
                        return !this.parent && this._sat ? this._sat.globalTime(rawTime) : time;
                    };
                    _proto.repeat = function repeat(value) {
                        if (arguments.length) {
                            this._repeat = value === 1 / 0 ? -2 : value;
                            return _onUpdateTotalDuration(this);
                        }
                        return this._repeat === -2 ? 1 / 0 : this._repeat;
                    };
                    _proto.repeatDelay = function repeatDelay(value) {
                        if (arguments.length) {
                            var time = this._time;
                            this._rDelay = value;
                            _onUpdateTotalDuration(this);
                            return time ? this.time(time) : this;
                        }
                        return this._rDelay;
                    };
                    _proto.yoyo = function yoyo(value) {
                        if (arguments.length) {
                            this._yoyo = value;
                            return this;
                        }
                        return this._yoyo;
                    };
                    _proto.seek = function seek(position, suppressEvents) {
                        return this.totalTime(_parsePosition(this, position), _isNotFalse(suppressEvents));
                    };
                    _proto.restart = function restart(includeDelay, suppressEvents) {
                        return this.play().totalTime(includeDelay ? -this._delay : 0, _isNotFalse(suppressEvents));
                    };
                    _proto.play = function play(from, suppressEvents) {
                        from != null && this.seek(from, suppressEvents);
                        return this.reversed(false).paused(false);
                    };
                    _proto.reverse = function reverse(from, suppressEvents) {
                        from != null && this.seek(from || this.totalDuration(), suppressEvents);
                        return this.reversed(true).paused(false);
                    };
                    _proto.pause = function pause(atTime, suppressEvents) {
                        atTime != null && this.seek(atTime, suppressEvents);
                        return this.paused(true);
                    };
                    _proto.resume = function resume() {
                        return this.paused(false);
                    };
                    _proto.reversed = function reversed(value) {
                        if (arguments.length) {
                            !!value !== this.reversed() && this.timeScale(-this._rts || (value ? -_tinyNum : 0));
                            return this;
                        }
                        return this._rts < 0;
                    };
                    _proto.invalidate = function invalidate() {
                        this._initted = this._act = 0;
                        this._zTime = -_tinyNum;
                        return this;
                    };
                    _proto.isActive = function isActive() {
                        var rawTime, parent = this.parent || this._dp, start = this._start;
                        return !!(!parent || this._ts && this._initted && parent.isActive() && (rawTime = parent.rawTime(true)) >= start && rawTime < this.endTime(true) - _tinyNum);
                    };
                    _proto.eventCallback = function eventCallback(type, callback, params) {
                        var vars = this.vars;
                        if (arguments.length > 1) {
                            if (!callback) delete vars[type]; else {
                                vars[type] = callback;
                                params && (vars[type + "Params"] = params);
                                type === "onUpdate" && (this._onUpdate = callback);
                            }
                            return this;
                        }
                        return vars[type];
                    };
                    _proto.then = function then(onFulfilled) {
                        var self = this;
                        return new Promise((function(resolve) {
                            var f = _isFunction(onFulfilled) ? onFulfilled : _passThrough, _resolve = function _resolve() {
                                var _then = self.then;
                                self.then = null;
                                _isFunction(f) && (f = f(self)) && (f.then || f === self) && (self.then = _then);
                                resolve(f);
                                self.then = _then;
                            };
                            if (self._initted && self.totalProgress() === 1 && self._ts >= 0 || !self._tTime && self._ts < 0) _resolve(); else self._prom = _resolve;
                        }));
                    };
                    _proto.kill = function kill() {
                        _interrupt(this);
                    };
                    return Animation;
                }();
                _setDefaults(Animation.prototype, {
                    _time: 0,
                    _start: 0,
                    _end: 0,
                    _tTime: 0,
                    _tDur: 0,
                    _dirty: 0,
                    _repeat: 0,
                    _yoyo: false,
                    parent: null,
                    _initted: false,
                    _rDelay: 0,
                    _ts: 1,
                    _dp: 0,
                    ratio: 0,
                    _zTime: -_tinyNum,
                    _prom: 0,
                    _ps: false,
                    _rts: 1
                });
                var Timeline = function(_Animation) {
                    _inheritsLoose(Timeline, _Animation);
                    function Timeline(vars, position) {
                        var _this;
                        if (vars === void 0) vars = {};
                        _this = _Animation.call(this, vars) || this;
                        _this.labels = {};
                        _this.smoothChildTiming = !!vars.smoothChildTiming;
                        _this.autoRemoveChildren = !!vars.autoRemoveChildren;
                        _this._sort = _isNotFalse(vars.sortChildren);
                        _globalTimeline && _addToTimeline(vars.parent || _globalTimeline, _assertThisInitialized(_this), position);
                        vars.reversed && _this.reverse();
                        vars.paused && _this.paused(true);
                        vars.scrollTrigger && _scrollTrigger(_assertThisInitialized(_this), vars.scrollTrigger);
                        return _this;
                    }
                    var _proto2 = Timeline.prototype;
                    _proto2.to = function to(targets, vars, position) {
                        _createTweenType(0, arguments, this);
                        return this;
                    };
                    _proto2.from = function from(targets, vars, position) {
                        _createTweenType(1, arguments, this);
                        return this;
                    };
                    _proto2.fromTo = function fromTo(targets, fromVars, toVars, position) {
                        _createTweenType(2, arguments, this);
                        return this;
                    };
                    _proto2.set = function set(targets, vars, position) {
                        vars.duration = 0;
                        vars.parent = this;
                        _inheritDefaults(vars).repeatDelay || (vars.repeat = 0);
                        vars.immediateRender = !!vars.immediateRender;
                        new Tween(targets, vars, _parsePosition(this, position), 1);
                        return this;
                    };
                    _proto2.call = function call(callback, params, position) {
                        return _addToTimeline(this, Tween.delayedCall(0, callback, params), position);
                    };
                    _proto2.staggerTo = function staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
                        vars.duration = duration;
                        vars.stagger = vars.stagger || stagger;
                        vars.onComplete = onCompleteAll;
                        vars.onCompleteParams = onCompleteAllParams;
                        vars.parent = this;
                        new Tween(targets, vars, _parsePosition(this, position));
                        return this;
                    };
                    _proto2.staggerFrom = function staggerFrom(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
                        vars.runBackwards = 1;
                        _inheritDefaults(vars).immediateRender = _isNotFalse(vars.immediateRender);
                        return this.staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams);
                    };
                    _proto2.staggerFromTo = function staggerFromTo(targets, duration, fromVars, toVars, stagger, position, onCompleteAll, onCompleteAllParams) {
                        toVars.startAt = fromVars;
                        _inheritDefaults(toVars).immediateRender = _isNotFalse(toVars.immediateRender);
                        return this.staggerTo(targets, duration, toVars, stagger, position, onCompleteAll, onCompleteAllParams);
                    };
                    _proto2.render = function render(totalTime, suppressEvents, force) {
                        var time, child, next, iteration, cycleDuration, prevPaused, pauseTween, timeScale, prevStart, prevIteration, yoyo, isYoyo, prevTime = this._time, tDur = this._dirty ? this.totalDuration() : this._tDur, dur = this._dur, tTime = totalTime <= 0 ? 0 : _roundPrecise(totalTime), crossingStart = this._zTime < 0 !== totalTime < 0 && (this._initted || !dur);
                        this !== _globalTimeline && tTime > tDur && totalTime >= 0 && (tTime = tDur);
                        if (tTime !== this._tTime || force || crossingStart) {
                            if (prevTime !== this._time && dur) {
                                tTime += this._time - prevTime;
                                totalTime += this._time - prevTime;
                            }
                            time = tTime;
                            prevStart = this._start;
                            timeScale = this._ts;
                            prevPaused = !timeScale;
                            if (crossingStart) {
                                dur || (prevTime = this._zTime);
                                (totalTime || !suppressEvents) && (this._zTime = totalTime);
                            }
                            if (this._repeat) {
                                yoyo = this._yoyo;
                                cycleDuration = dur + this._rDelay;
                                if (this._repeat < -1 && totalTime < 0) return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
                                time = _roundPrecise(tTime % cycleDuration);
                                if (tTime === tDur) {
                                    iteration = this._repeat;
                                    time = dur;
                                } else {
                                    iteration = ~~(tTime / cycleDuration);
                                    if (iteration && iteration === tTime / cycleDuration) {
                                        time = dur;
                                        iteration--;
                                    }
                                    time > dur && (time = dur);
                                }
                                prevIteration = _animationCycle(this._tTime, cycleDuration);
                                !prevTime && this._tTime && prevIteration !== iteration && this._tTime - prevIteration * cycleDuration - this._dur <= 0 && (prevIteration = iteration);
                                if (yoyo && iteration & 1) {
                                    time = dur - time;
                                    isYoyo = 1;
                                }
                                if (iteration !== prevIteration && !this._lock) {
                                    var rewinding = yoyo && prevIteration & 1, doesWrap = rewinding === (yoyo && iteration & 1);
                                    iteration < prevIteration && (rewinding = !rewinding);
                                    prevTime = rewinding ? 0 : tTime % dur ? dur : tTime;
                                    this._lock = 1;
                                    this.render(prevTime || (isYoyo ? 0 : _roundPrecise(iteration * cycleDuration)), suppressEvents, !dur)._lock = 0;
                                    this._tTime = tTime;
                                    !suppressEvents && this.parent && _callback(this, "onRepeat");
                                    this.vars.repeatRefresh && !isYoyo && (this.invalidate()._lock = 1);
                                    if (prevTime && prevTime !== this._time || prevPaused !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
                                    dur = this._dur;
                                    tDur = this._tDur;
                                    if (doesWrap) {
                                        this._lock = 2;
                                        prevTime = rewinding ? dur : -1e-4;
                                        this.render(prevTime, true);
                                        this.vars.repeatRefresh && !isYoyo && this.invalidate();
                                    }
                                    this._lock = 0;
                                    if (!this._ts && !prevPaused) return this;
                                    _propagateYoyoEase(this, isYoyo);
                                }
                            }
                            if (this._hasPause && !this._forcing && this._lock < 2) {
                                pauseTween = _findNextPauseTween(this, _roundPrecise(prevTime), _roundPrecise(time));
                                if (pauseTween) tTime -= time - (time = pauseTween._start);
                            }
                            this._tTime = tTime;
                            this._time = time;
                            this._act = !timeScale;
                            if (!this._initted) {
                                this._onUpdate = this.vars.onUpdate;
                                this._initted = 1;
                                this._zTime = totalTime;
                                prevTime = 0;
                            }
                            if (!prevTime && time && !suppressEvents && !iteration) {
                                _callback(this, "onStart");
                                if (this._tTime !== tTime) return this;
                            }
                            if (time >= prevTime && totalTime >= 0) {
                                child = this._first;
                                while (child) {
                                    next = child._next;
                                    if ((child._act || time >= child._start) && child._ts && pauseTween !== child) {
                                        if (child.parent !== this) return this.render(totalTime, suppressEvents, force);
                                        child.render(child._ts > 0 ? (time - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (time - child._start) * child._ts, suppressEvents, force);
                                        if (time !== this._time || !this._ts && !prevPaused) {
                                            pauseTween = 0;
                                            next && (tTime += this._zTime = -_tinyNum);
                                            break;
                                        }
                                    }
                                    child = next;
                                }
                            } else {
                                child = this._last;
                                var adjustedTime = totalTime < 0 ? totalTime : time;
                                while (child) {
                                    next = child._prev;
                                    if ((child._act || adjustedTime <= child._end) && child._ts && pauseTween !== child) {
                                        if (child.parent !== this) return this.render(totalTime, suppressEvents, force);
                                        child.render(child._ts > 0 ? (adjustedTime - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (adjustedTime - child._start) * child._ts, suppressEvents, force || _reverting && (child._initted || child._startAt));
                                        if (time !== this._time || !this._ts && !prevPaused) {
                                            pauseTween = 0;
                                            next && (tTime += this._zTime = adjustedTime ? -_tinyNum : _tinyNum);
                                            break;
                                        }
                                    }
                                    child = next;
                                }
                            }
                            if (pauseTween && !suppressEvents) {
                                this.pause();
                                pauseTween.render(time >= prevTime ? 0 : -_tinyNum)._zTime = time >= prevTime ? 1 : -1;
                                if (this._ts) {
                                    this._start = prevStart;
                                    _setEnd(this);
                                    return this.render(totalTime, suppressEvents, force);
                                }
                            }
                            this._onUpdate && !suppressEvents && _callback(this, "onUpdate", true);
                            if (tTime === tDur && this._tTime >= this.totalDuration() || !tTime && prevTime) if (prevStart === this._start || Math.abs(timeScale) !== Math.abs(this._ts)) if (!this._lock) {
                                (totalTime || !dur) && (tTime === tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1);
                                if (!suppressEvents && !(totalTime < 0 && !prevTime) && (tTime || prevTime || !tDur)) {
                                    _callback(this, tTime === tDur && totalTime >= 0 ? "onComplete" : "onReverseComplete", true);
                                    this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
                                }
                            }
                        }
                        return this;
                    };
                    _proto2.add = function add(child, position) {
                        var _this2 = this;
                        _isNumber(position) || (position = _parsePosition(this, position, child));
                        if (!(child instanceof Animation)) {
                            if (_isArray(child)) {
                                child.forEach((function(obj) {
                                    return _this2.add(obj, position);
                                }));
                                return this;
                            }
                            if (_isString(child)) return this.addLabel(child, position);
                            if (_isFunction(child)) child = Tween.delayedCall(0, child); else return this;
                        }
                        return this !== child ? _addToTimeline(this, child, position) : this;
                    };
                    _proto2.getChildren = function getChildren(nested, tweens, timelines, ignoreBeforeTime) {
                        if (nested === void 0) nested = true;
                        if (tweens === void 0) tweens = true;
                        if (timelines === void 0) timelines = true;
                        if (ignoreBeforeTime === void 0) ignoreBeforeTime = -_bigNum;
                        var a = [], child = this._first;
                        while (child) {
                            if (child._start >= ignoreBeforeTime) if (child instanceof Tween) tweens && a.push(child); else {
                                timelines && a.push(child);
                                nested && a.push.apply(a, child.getChildren(true, tweens, timelines));
                            }
                            child = child._next;
                        }
                        return a;
                    };
                    _proto2.getById = function getById(id) {
                        var animations = this.getChildren(1, 1, 1), i = animations.length;
                        while (i--) if (animations[i].vars.id === id) return animations[i];
                    };
                    _proto2.remove = function remove(child) {
                        if (_isString(child)) return this.removeLabel(child);
                        if (_isFunction(child)) return this.killTweensOf(child);
                        _removeLinkedListItem(this, child);
                        if (child === this._recent) this._recent = this._last;
                        return _uncache(this);
                    };
                    _proto2.totalTime = function totalTime(_totalTime2, suppressEvents) {
                        if (!arguments.length) return this._tTime;
                        this._forcing = 1;
                        if (!this._dp && this._ts) this._start = _roundPrecise(_ticker.time - (this._ts > 0 ? _totalTime2 / this._ts : (this.totalDuration() - _totalTime2) / -this._ts));
                        _Animation.prototype.totalTime.call(this, _totalTime2, suppressEvents);
                        this._forcing = 0;
                        return this;
                    };
                    _proto2.addLabel = function addLabel(label, position) {
                        this.labels[label] = _parsePosition(this, position);
                        return this;
                    };
                    _proto2.removeLabel = function removeLabel(label) {
                        delete this.labels[label];
                        return this;
                    };
                    _proto2.addPause = function addPause(position, callback, params) {
                        var t = Tween.delayedCall(0, callback || _emptyFunc, params);
                        t.data = "isPause";
                        this._hasPause = 1;
                        return _addToTimeline(this, t, _parsePosition(this, position));
                    };
                    _proto2.removePause = function removePause(position) {
                        var child = this._first;
                        position = _parsePosition(this, position);
                        while (child) {
                            if (child._start === position && child.data === "isPause") _removeFromParent(child);
                            child = child._next;
                        }
                    };
                    _proto2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
                        var tweens = this.getTweensOf(targets, onlyActive), i = tweens.length;
                        while (i--) _overwritingTween !== tweens[i] && tweens[i].kill(targets, props);
                        return this;
                    };
                    _proto2.getTweensOf = function getTweensOf(targets, onlyActive) {
                        var children, a = [], parsedTargets = toArray(targets), child = this._first, isGlobalTime = _isNumber(onlyActive);
                        while (child) {
                            if (child instanceof Tween) {
                                if (_arrayContainsAny(child._targets, parsedTargets) && (isGlobalTime ? (!_overwritingTween || child._initted && child._ts) && child.globalTime(0) <= onlyActive && child.globalTime(child.totalDuration()) > onlyActive : !onlyActive || child.isActive())) a.push(child);
                            } else if ((children = child.getTweensOf(parsedTargets, onlyActive)).length) a.push.apply(a, children);
                            child = child._next;
                        }
                        return a;
                    };
                    _proto2.tweenTo = function tweenTo(position, vars) {
                        vars = vars || {};
                        var initted, tl = this, endTime = _parsePosition(tl, position), _vars = vars, startAt = _vars.startAt, _onStart = _vars.onStart, onStartParams = _vars.onStartParams, immediateRender = _vars.immediateRender, tween = Tween.to(tl, _setDefaults({
                            ease: vars.ease || "none",
                            lazy: false,
                            immediateRender: false,
                            time: endTime,
                            overwrite: "auto",
                            duration: vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale()) || _tinyNum,
                            onStart: function onStart() {
                                tl.pause();
                                if (!initted) {
                                    var duration = vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale());
                                    tween._dur !== duration && _setDuration(tween, duration, 0, 1).render(tween._time, true, true);
                                    initted = 1;
                                }
                                _onStart && _onStart.apply(tween, onStartParams || []);
                            }
                        }, vars));
                        return immediateRender ? tween.render(0) : tween;
                    };
                    _proto2.tweenFromTo = function tweenFromTo(fromPosition, toPosition, vars) {
                        return this.tweenTo(toPosition, _setDefaults({
                            startAt: {
                                time: _parsePosition(this, fromPosition)
                            }
                        }, vars));
                    };
                    _proto2.recent = function recent() {
                        return this._recent;
                    };
                    _proto2.nextLabel = function nextLabel(afterTime) {
                        if (afterTime === void 0) afterTime = this._time;
                        return _getLabelInDirection(this, _parsePosition(this, afterTime));
                    };
                    _proto2.previousLabel = function previousLabel(beforeTime) {
                        if (beforeTime === void 0) beforeTime = this._time;
                        return _getLabelInDirection(this, _parsePosition(this, beforeTime), 1);
                    };
                    _proto2.currentLabel = function currentLabel(value) {
                        return arguments.length ? this.seek(value, true) : this.previousLabel(this._time + _tinyNum);
                    };
                    _proto2.shiftChildren = function shiftChildren(amount, adjustLabels, ignoreBeforeTime) {
                        if (ignoreBeforeTime === void 0) ignoreBeforeTime = 0;
                        var p, child = this._first, labels = this.labels;
                        while (child) {
                            if (child._start >= ignoreBeforeTime) {
                                child._start += amount;
                                child._end += amount;
                            }
                            child = child._next;
                        }
                        if (adjustLabels) for (p in labels) if (labels[p] >= ignoreBeforeTime) labels[p] += amount;
                        return _uncache(this);
                    };
                    _proto2.invalidate = function invalidate(soft) {
                        var child = this._first;
                        this._lock = 0;
                        while (child) {
                            child.invalidate(soft);
                            child = child._next;
                        }
                        return _Animation.prototype.invalidate.call(this, soft);
                    };
                    _proto2.clear = function clear(includeLabels) {
                        if (includeLabels === void 0) includeLabels = true;
                        var next, child = this._first;
                        while (child) {
                            next = child._next;
                            this.remove(child);
                            child = next;
                        }
                        this._dp && (this._time = this._tTime = this._pTime = 0);
                        includeLabels && (this.labels = {});
                        return _uncache(this);
                    };
                    _proto2.totalDuration = function totalDuration(value) {
                        var prev, start, parent, max = 0, self = this, child = self._last, prevStart = _bigNum;
                        if (arguments.length) return self.timeScale((self._repeat < 0 ? self.duration() : self.totalDuration()) / (self.reversed() ? -value : value));
                        if (self._dirty) {
                            parent = self.parent;
                            while (child) {
                                prev = child._prev;
                                child._dirty && child.totalDuration();
                                start = child._start;
                                if (start > prevStart && self._sort && child._ts && !self._lock) {
                                    self._lock = 1;
                                    _addToTimeline(self, child, start - child._delay, 1)._lock = 0;
                                } else prevStart = start;
                                if (start < 0 && child._ts) {
                                    max -= start;
                                    if (!parent && !self._dp || parent && parent.smoothChildTiming) {
                                        self._start += start / self._ts;
                                        self._time -= start;
                                        self._tTime -= start;
                                    }
                                    self.shiftChildren(-start, false, -Infinity);
                                    prevStart = 0;
                                }
                                child._end > max && child._ts && (max = child._end);
                                child = prev;
                            }
                            _setDuration(self, self === _globalTimeline && self._time > max ? self._time : max, 1, 1);
                            self._dirty = 0;
                        }
                        return self._tDur;
                    };
                    Timeline.updateRoot = function updateRoot(time) {
                        if (_globalTimeline._ts) {
                            _lazySafeRender(_globalTimeline, _parentToChildTotalTime(time, _globalTimeline));
                            _lastRenderedFrame = _ticker.frame;
                        }
                        if (_ticker.frame >= _nextGCFrame) {
                            _nextGCFrame += _config.autoSleep || 120;
                            var child = _globalTimeline._first;
                            if (!child || !child._ts) if (_config.autoSleep && _ticker._listeners.length < 2) {
                                while (child && !child._ts) child = child._next;
                                child || _ticker.sleep();
                            }
                        }
                    };
                    return Timeline;
                }(Animation);
                _setDefaults(Timeline.prototype, {
                    _lock: 0,
                    _hasPause: 0,
                    _forcing: 0
                });
                var _overwritingTween, _forceAllPropTweens, _addComplexStringPropTween = function _addComplexStringPropTween(target, prop, start, end, setter, stringFilter, funcParam) {
                    var result, startNums, color, endNum, chunk, startNum, hasRandom, a, pt = new PropTween(this._pt, target, prop, 0, 1, _renderComplexString, null, setter), index = 0, matchIndex = 0;
                    pt.b = start;
                    pt.e = end;
                    start += "";
                    end += "";
                    if (hasRandom = ~end.indexOf("random(")) end = _replaceRandom(end);
                    if (stringFilter) {
                        a = [ start, end ];
                        stringFilter(a, target, prop);
                        start = a[0];
                        end = a[1];
                    }
                    startNums = start.match(_complexStringNumExp) || [];
                    while (result = _complexStringNumExp.exec(end)) {
                        endNum = result[0];
                        chunk = end.substring(index, result.index);
                        if (color) color = (color + 1) % 5; else if (chunk.substr(-5) === "rgba(") color = 1;
                        if (endNum !== startNums[matchIndex++]) {
                            startNum = parseFloat(startNums[matchIndex - 1]) || 0;
                            pt._pt = {
                                _next: pt._pt,
                                p: chunk || matchIndex === 1 ? chunk : ",",
                                s: startNum,
                                c: endNum.charAt(1) === "=" ? _parseRelative(startNum, endNum) - startNum : parseFloat(endNum) - startNum,
                                m: color && color < 4 ? Math.round : 0
                            };
                            index = _complexStringNumExp.lastIndex;
                        }
                    }
                    pt.c = index < end.length ? end.substring(index, end.length) : "";
                    pt.fp = funcParam;
                    if (_relExp.test(end) || hasRandom) pt.e = 0;
                    this._pt = pt;
                    return pt;
                }, _addPropTween = function _addPropTween(target, prop, start, end, index, targets, modifier, stringFilter, funcParam, optional) {
                    _isFunction(end) && (end = end(index || 0, target, targets));
                    var pt, currentValue = target[prop], parsedStart = start !== "get" ? start : !_isFunction(currentValue) ? currentValue : funcParam ? target[prop.indexOf("set") || !_isFunction(target["get" + prop.substr(3)]) ? prop : "get" + prop.substr(3)](funcParam) : target[prop](), setter = !_isFunction(currentValue) ? _setterPlain : funcParam ? _setterFuncWithParam : _setterFunc;
                    if (_isString(end)) {
                        if (~end.indexOf("random(")) end = _replaceRandom(end);
                        if (end.charAt(1) === "=") {
                            pt = _parseRelative(parsedStart, end) + (getUnit(parsedStart) || 0);
                            if (pt || pt === 0) end = pt;
                        }
                    }
                    if (!optional || parsedStart !== end || _forceAllPropTweens) {
                        if (!isNaN(parsedStart * end) && end !== "") {
                            pt = new PropTween(this._pt, target, prop, +parsedStart || 0, end - (parsedStart || 0), typeof currentValue === "boolean" ? _renderBoolean : _renderPlain, 0, setter);
                            funcParam && (pt.fp = funcParam);
                            modifier && pt.modifier(modifier, this, target);
                            return this._pt = pt;
                        }
                        !currentValue && !(prop in target) && _missingPlugin(prop, end);
                        return _addComplexStringPropTween.call(this, target, prop, parsedStart, end, setter, stringFilter || _config.stringFilter, funcParam);
                    }
                }, _processVars = function _processVars(vars, index, target, targets, tween) {
                    _isFunction(vars) && (vars = _parseFuncOrString(vars, tween, index, target, targets));
                    if (!_isObject(vars) || vars.style && vars.nodeType || _isArray(vars) || _isTypedArray(vars)) return _isString(vars) ? _parseFuncOrString(vars, tween, index, target, targets) : vars;
                    var p, copy = {};
                    for (p in vars) copy[p] = _parseFuncOrString(vars[p], tween, index, target, targets);
                    return copy;
                }, _checkPlugin = function _checkPlugin(property, vars, tween, index, target, targets) {
                    var plugin, pt, ptLookup, i;
                    if (_plugins[property] && (plugin = new _plugins[property]).init(target, plugin.rawVars ? vars[property] : _processVars(vars[property], index, target, targets, tween), tween, index, targets) !== false) {
                        tween._pt = pt = new PropTween(tween._pt, target, property, 0, 1, plugin.render, plugin, 0, plugin.priority);
                        if (tween !== _quickTween) {
                            ptLookup = tween._ptLookup[tween._targets.indexOf(target)];
                            i = plugin._props.length;
                            while (i--) ptLookup[plugin._props[i]] = pt;
                        }
                    }
                    return plugin;
                }, _initTween = function _initTween(tween, time, tTime) {
                    var cleanVars, i, p, pt, target, hasPriority, gsData, harness, plugin, ptLookup, index, harnessVars, overwritten, vars = tween.vars, ease = vars.ease, startAt = vars.startAt, immediateRender = vars.immediateRender, lazy = vars.lazy, onUpdate = vars.onUpdate, runBackwards = vars.runBackwards, yoyoEase = vars.yoyoEase, keyframes = vars.keyframes, autoRevert = vars.autoRevert, dur = tween._dur, prevStartAt = tween._startAt, targets = tween._targets, parent = tween.parent, fullTargets = parent && parent.data === "nested" ? parent.vars.targets : targets, autoOverwrite = tween._overwrite === "auto" && !_suppressOverwrites, tl = tween.timeline;
                    tl && (!keyframes || !ease) && (ease = "none");
                    tween._ease = _parseEase(ease, _defaults.ease);
                    tween._yEase = yoyoEase ? _invertEase(_parseEase(yoyoEase === true ? ease : yoyoEase, _defaults.ease)) : 0;
                    if (yoyoEase && tween._yoyo && !tween._repeat) {
                        yoyoEase = tween._yEase;
                        tween._yEase = tween._ease;
                        tween._ease = yoyoEase;
                    }
                    tween._from = !tl && !!vars.runBackwards;
                    if (!tl || keyframes && !vars.stagger) {
                        harness = targets[0] ? _getCache(targets[0]).harness : 0;
                        harnessVars = harness && vars[harness.prop];
                        cleanVars = _copyExcluding(vars, _reservedProps);
                        if (prevStartAt) {
                            prevStartAt._zTime < 0 && prevStartAt.progress(1);
                            time < 0 && runBackwards && immediateRender && !autoRevert ? prevStartAt.render(-1, true) : prevStartAt.revert(runBackwards && dur ? _revertConfigNoKill : _startAtRevertConfig);
                            prevStartAt._lazy = 0;
                        }
                        if (startAt) {
                            _removeFromParent(tween._startAt = Tween.set(targets, _setDefaults({
                                data: "isStart",
                                overwrite: false,
                                parent,
                                immediateRender: true,
                                lazy: !prevStartAt && _isNotFalse(lazy),
                                startAt: null,
                                delay: 0,
                                onUpdate: onUpdate && function() {
                                    return _callback(tween, "onUpdate");
                                },
                                stagger: 0
                            }, startAt)));
                            tween._startAt._dp = 0;
                            tween._startAt._sat = tween;
                            time < 0 && (_reverting || !immediateRender && !autoRevert) && tween._startAt.revert(_revertConfigNoKill);
                            if (immediateRender) if (dur && time <= 0 && tTime <= 0) {
                                time && (tween._zTime = time);
                                return;
                            }
                        } else if (runBackwards && dur) if (!prevStartAt) {
                            time && (immediateRender = false);
                            p = _setDefaults({
                                overwrite: false,
                                data: "isFromStart",
                                lazy: immediateRender && !prevStartAt && _isNotFalse(lazy),
                                immediateRender,
                                stagger: 0,
                                parent
                            }, cleanVars);
                            harnessVars && (p[harness.prop] = harnessVars);
                            _removeFromParent(tween._startAt = Tween.set(targets, p));
                            tween._startAt._dp = 0;
                            tween._startAt._sat = tween;
                            time < 0 && (_reverting ? tween._startAt.revert(_revertConfigNoKill) : tween._startAt.render(-1, true));
                            tween._zTime = time;
                            if (!immediateRender) _initTween(tween._startAt, _tinyNum, _tinyNum); else if (!time) return;
                        }
                        tween._pt = tween._ptCache = 0;
                        lazy = dur && _isNotFalse(lazy) || lazy && !dur;
                        for (i = 0; i < targets.length; i++) {
                            target = targets[i];
                            gsData = target._gsap || _harness(targets)[i]._gsap;
                            tween._ptLookup[i] = ptLookup = {};
                            _lazyLookup[gsData.id] && _lazyTweens.length && _lazyRender();
                            index = fullTargets === targets ? i : fullTargets.indexOf(target);
                            if (harness && (plugin = new harness).init(target, harnessVars || cleanVars, tween, index, fullTargets) !== false) {
                                tween._pt = pt = new PropTween(tween._pt, target, plugin.name, 0, 1, plugin.render, plugin, 0, plugin.priority);
                                plugin._props.forEach((function(name) {
                                    ptLookup[name] = pt;
                                }));
                                plugin.priority && (hasPriority = 1);
                            }
                            if (!harness || harnessVars) for (p in cleanVars) if (_plugins[p] && (plugin = _checkPlugin(p, cleanVars, tween, index, target, fullTargets))) plugin.priority && (hasPriority = 1); else ptLookup[p] = pt = _addPropTween.call(tween, target, p, "get", cleanVars[p], index, fullTargets, 0, vars.stringFilter);
                            tween._op && tween._op[i] && tween.kill(target, tween._op[i]);
                            if (autoOverwrite && tween._pt) {
                                _overwritingTween = tween;
                                _globalTimeline.killTweensOf(target, ptLookup, tween.globalTime(time));
                                overwritten = !tween.parent;
                                _overwritingTween = 0;
                            }
                            tween._pt && lazy && (_lazyLookup[gsData.id] = 1);
                        }
                        hasPriority && _sortPropTweensByPriority(tween);
                        tween._onInit && tween._onInit(tween);
                    }
                    tween._onUpdate = onUpdate;
                    tween._initted = (!tween._op || tween._pt) && !overwritten;
                    keyframes && time <= 0 && tl.render(_bigNum, true, true);
                }, _updatePropTweens = function _updatePropTweens(tween, property, value, start, startIsRelative, ratio, time, skipRecursion) {
                    var pt, rootPT, lookup, i, ptCache = (tween._pt && tween._ptCache || (tween._ptCache = {}))[property];
                    if (!ptCache) {
                        ptCache = tween._ptCache[property] = [];
                        lookup = tween._ptLookup;
                        i = tween._targets.length;
                        while (i--) {
                            pt = lookup[i][property];
                            if (pt && pt.d && pt.d._pt) {
                                pt = pt.d._pt;
                                while (pt && pt.p !== property && pt.fp !== property) pt = pt._next;
                            }
                            if (!pt) {
                                _forceAllPropTweens = 1;
                                tween.vars[property] = "+=0";
                                _initTween(tween, time);
                                _forceAllPropTweens = 0;
                                return skipRecursion ? _warn(property + " not eligible for reset") : 1;
                            }
                            ptCache.push(pt);
                        }
                    }
                    i = ptCache.length;
                    while (i--) {
                        rootPT = ptCache[i];
                        pt = rootPT._pt || rootPT;
                        pt.s = (start || start === 0) && !startIsRelative ? start : pt.s + (start || 0) + ratio * pt.c;
                        pt.c = value - pt.s;
                        rootPT.e && (rootPT.e = _round(value) + getUnit(rootPT.e));
                        rootPT.b && (rootPT.b = pt.s + getUnit(rootPT.b));
                    }
                }, _addAliasesToVars = function _addAliasesToVars(targets, vars) {
                    var copy, p, i, aliases, harness = targets[0] ? _getCache(targets[0]).harness : 0, propertyAliases = harness && harness.aliases;
                    if (!propertyAliases) return vars;
                    copy = _merge({}, vars);
                    for (p in propertyAliases) if (p in copy) {
                        aliases = propertyAliases[p].split(",");
                        i = aliases.length;
                        while (i--) copy[aliases[i]] = copy[p];
                    }
                    return copy;
                }, _parseKeyframe = function _parseKeyframe(prop, obj, allProps, easeEach) {
                    var p, a, ease = obj.ease || easeEach || "power1.inOut";
                    if (_isArray(obj)) {
                        a = allProps[prop] || (allProps[prop] = []);
                        obj.forEach((function(value, i) {
                            return a.push({
                                t: i / (obj.length - 1) * 100,
                                v: value,
                                e: ease
                            });
                        }));
                    } else for (p in obj) {
                        a = allProps[p] || (allProps[p] = []);
                        p === "ease" || a.push({
                            t: parseFloat(prop),
                            v: obj[p],
                            e: ease
                        });
                    }
                }, _parseFuncOrString = function _parseFuncOrString(value, tween, i, target, targets) {
                    return _isFunction(value) ? value.call(tween, i, target, targets) : _isString(value) && ~value.indexOf("random(") ? _replaceRandom(value) : value;
                }, _staggerTweenProps = _callbackNames + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", _staggerPropsToSkip = {};
                _forEachName(_staggerTweenProps + ",id,stagger,delay,duration,paused,scrollTrigger", (function(name) {
                    return _staggerPropsToSkip[name] = 1;
                }));
                var Tween = function(_Animation2) {
                    _inheritsLoose(Tween, _Animation2);
                    function Tween(targets, vars, position, skipInherit) {
                        var _this3;
                        if (typeof vars === "number") {
                            position.duration = vars;
                            vars = position;
                            position = null;
                        }
                        _this3 = _Animation2.call(this, skipInherit ? vars : _inheritDefaults(vars)) || this;
                        var tl, i, copy, l, p, curTarget, staggerFunc, staggerVarsToMerge, _this3$vars = _this3.vars, duration = _this3$vars.duration, delay = _this3$vars.delay, immediateRender = _this3$vars.immediateRender, stagger = _this3$vars.stagger, overwrite = _this3$vars.overwrite, keyframes = _this3$vars.keyframes, defaults = _this3$vars.defaults, scrollTrigger = _this3$vars.scrollTrigger, yoyoEase = _this3$vars.yoyoEase, parent = vars.parent || _globalTimeline, parsedTargets = (_isArray(targets) || _isTypedArray(targets) ? _isNumber(targets[0]) : "length" in vars) ? [ targets ] : toArray(targets);
                        _this3._targets = parsedTargets.length ? _harness(parsedTargets) : _warn("GSAP target " + targets + " not found. https://gsap.com", !_config.nullTargetWarn) || [];
                        _this3._ptLookup = [];
                        _this3._overwrite = overwrite;
                        if (keyframes || stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
                            vars = _this3.vars;
                            tl = _this3.timeline = new Timeline({
                                data: "nested",
                                defaults: defaults || {},
                                targets: parent && parent.data === "nested" ? parent.vars.targets : parsedTargets
                            });
                            tl.kill();
                            tl.parent = tl._dp = _assertThisInitialized(_this3);
                            tl._start = 0;
                            if (stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
                                l = parsedTargets.length;
                                staggerFunc = stagger && distribute(stagger);
                                if (_isObject(stagger)) for (p in stagger) if (~_staggerTweenProps.indexOf(p)) {
                                    staggerVarsToMerge || (staggerVarsToMerge = {});
                                    staggerVarsToMerge[p] = stagger[p];
                                }
                                for (i = 0; i < l; i++) {
                                    copy = _copyExcluding(vars, _staggerPropsToSkip);
                                    copy.stagger = 0;
                                    yoyoEase && (copy.yoyoEase = yoyoEase);
                                    staggerVarsToMerge && _merge(copy, staggerVarsToMerge);
                                    curTarget = parsedTargets[i];
                                    copy.duration = +_parseFuncOrString(duration, _assertThisInitialized(_this3), i, curTarget, parsedTargets);
                                    copy.delay = (+_parseFuncOrString(delay, _assertThisInitialized(_this3), i, curTarget, parsedTargets) || 0) - _this3._delay;
                                    if (!stagger && l === 1 && copy.delay) {
                                        _this3._delay = delay = copy.delay;
                                        _this3._start += delay;
                                        copy.delay = 0;
                                    }
                                    tl.to(curTarget, copy, staggerFunc ? staggerFunc(i, curTarget, parsedTargets) : 0);
                                    tl._ease = _easeMap.none;
                                }
                                tl.duration() ? duration = delay = 0 : _this3.timeline = 0;
                            } else if (keyframes) {
                                _inheritDefaults(_setDefaults(tl.vars.defaults, {
                                    ease: "none"
                                }));
                                tl._ease = _parseEase(keyframes.ease || vars.ease || "none");
                                var a, kf, v, time = 0;
                                if (_isArray(keyframes)) {
                                    keyframes.forEach((function(frame) {
                                        return tl.to(parsedTargets, frame, ">");
                                    }));
                                    tl.duration();
                                } else {
                                    copy = {};
                                    for (p in keyframes) p === "ease" || p === "easeEach" || _parseKeyframe(p, keyframes[p], copy, keyframes.easeEach);
                                    for (p in copy) {
                                        a = copy[p].sort((function(a, b) {
                                            return a.t - b.t;
                                        }));
                                        time = 0;
                                        for (i = 0; i < a.length; i++) {
                                            kf = a[i];
                                            v = {
                                                ease: kf.e,
                                                duration: (kf.t - (i ? a[i - 1].t : 0)) / 100 * duration
                                            };
                                            v[p] = kf.v;
                                            tl.to(parsedTargets, v, time);
                                            time += v.duration;
                                        }
                                    }
                                    tl.duration() < duration && tl.to({}, {
                                        duration: duration - tl.duration()
                                    });
                                }
                            }
                            duration || _this3.duration(duration = tl.duration());
                        } else _this3.timeline = 0;
                        if (overwrite === true && !_suppressOverwrites) {
                            _overwritingTween = _assertThisInitialized(_this3);
                            _globalTimeline.killTweensOf(parsedTargets);
                            _overwritingTween = 0;
                        }
                        _addToTimeline(parent, _assertThisInitialized(_this3), position);
                        vars.reversed && _this3.reverse();
                        vars.paused && _this3.paused(true);
                        if (immediateRender || !duration && !keyframes && _this3._start === _roundPrecise(parent._time) && _isNotFalse(immediateRender) && _hasNoPausedAncestors(_assertThisInitialized(_this3)) && parent.data !== "nested") {
                            _this3._tTime = -_tinyNum;
                            _this3.render(Math.max(0, -delay) || 0);
                        }
                        scrollTrigger && _scrollTrigger(_assertThisInitialized(_this3), scrollTrigger);
                        return _this3;
                    }
                    var _proto3 = Tween.prototype;
                    _proto3.render = function render(totalTime, suppressEvents, force) {
                        var time, pt, iteration, cycleDuration, prevIteration, isYoyo, ratio, timeline, yoyoEase, prevTime = this._time, tDur = this._tDur, dur = this._dur, isNegative = totalTime < 0, tTime = totalTime > tDur - _tinyNum && !isNegative ? tDur : totalTime < _tinyNum ? 0 : totalTime;
                        if (!dur) _renderZeroDurationTween(this, totalTime, suppressEvents, force); else if (tTime !== this._tTime || !totalTime || force || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== isNegative) {
                            time = tTime;
                            timeline = this.timeline;
                            if (this._repeat) {
                                cycleDuration = dur + this._rDelay;
                                if (this._repeat < -1 && isNegative) return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
                                time = _roundPrecise(tTime % cycleDuration);
                                if (tTime === tDur) {
                                    iteration = this._repeat;
                                    time = dur;
                                } else {
                                    iteration = ~~(tTime / cycleDuration);
                                    if (iteration && iteration === _roundPrecise(tTime / cycleDuration)) {
                                        time = dur;
                                        iteration--;
                                    }
                                    time > dur && (time = dur);
                                }
                                isYoyo = this._yoyo && iteration & 1;
                                if (isYoyo) {
                                    yoyoEase = this._yEase;
                                    time = dur - time;
                                }
                                prevIteration = _animationCycle(this._tTime, cycleDuration);
                                if (time === prevTime && !force && this._initted && iteration === prevIteration) {
                                    this._tTime = tTime;
                                    return this;
                                }
                                if (iteration !== prevIteration) {
                                    timeline && this._yEase && _propagateYoyoEase(timeline, isYoyo);
                                    if (this.vars.repeatRefresh && !isYoyo && !this._lock && this._time !== cycleDuration && this._initted) {
                                        this._lock = force = 1;
                                        this.render(_roundPrecise(cycleDuration * iteration), true).invalidate()._lock = 0;
                                    }
                                }
                            }
                            if (!this._initted) {
                                if (_attemptInitTween(this, isNegative ? totalTime : time, force, suppressEvents, tTime)) {
                                    this._tTime = 0;
                                    return this;
                                }
                                if (prevTime !== this._time && !(force && this.vars.repeatRefresh && iteration !== prevIteration)) return this;
                                if (dur !== this._dur) return this.render(totalTime, suppressEvents, force);
                            }
                            this._tTime = tTime;
                            this._time = time;
                            if (!this._act && this._ts) {
                                this._act = 1;
                                this._lazy = 0;
                            }
                            this.ratio = ratio = (yoyoEase || this._ease)(time / dur);
                            if (this._from) this.ratio = ratio = 1 - ratio;
                            if (time && !prevTime && !suppressEvents && !iteration) {
                                _callback(this, "onStart");
                                if (this._tTime !== tTime) return this;
                            }
                            pt = this._pt;
                            while (pt) {
                                pt.r(ratio, pt.d);
                                pt = pt._next;
                            }
                            timeline && timeline.render(totalTime < 0 ? totalTime : timeline._dur * timeline._ease(time / this._dur), suppressEvents, force) || this._startAt && (this._zTime = totalTime);
                            if (this._onUpdate && !suppressEvents) {
                                isNegative && _rewindStartAt(this, totalTime, suppressEvents, force);
                                _callback(this, "onUpdate");
                            }
                            this._repeat && iteration !== prevIteration && this.vars.onRepeat && !suppressEvents && this.parent && _callback(this, "onRepeat");
                            if ((tTime === this._tDur || !tTime) && this._tTime === tTime) {
                                isNegative && !this._onUpdate && _rewindStartAt(this, totalTime, true, true);
                                (totalTime || !dur) && (tTime === this._tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1);
                                if (!suppressEvents && !(isNegative && !prevTime) && (tTime || prevTime || isYoyo)) {
                                    _callback(this, tTime === tDur ? "onComplete" : "onReverseComplete", true);
                                    this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
                                }
                            }
                        }
                        return this;
                    };
                    _proto3.targets = function targets() {
                        return this._targets;
                    };
                    _proto3.invalidate = function invalidate(soft) {
                        (!soft || !this.vars.runBackwards) && (this._startAt = 0);
                        this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0;
                        this._ptLookup = [];
                        this.timeline && this.timeline.invalidate(soft);
                        return _Animation2.prototype.invalidate.call(this, soft);
                    };
                    _proto3.resetTo = function resetTo(property, value, start, startIsRelative, skipRecursion) {
                        _tickerActive || _ticker.wake();
                        this._ts || this.play();
                        var ratio, time = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
                        this._initted || _initTween(this, time);
                        ratio = this._ease(time / this._dur);
                        if (_updatePropTweens(this, property, value, start, startIsRelative, ratio, time, skipRecursion)) return this.resetTo(property, value, start, startIsRelative, 1);
                        _alignPlayhead(this, 0);
                        this.parent || _addLinkedListItem(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0);
                        return this.render(0);
                    };
                    _proto3.kill = function kill(targets, vars) {
                        if (vars === void 0) vars = "all";
                        if (!targets && (!vars || vars === "all")) {
                            this._lazy = this._pt = 0;
                            return this.parent ? _interrupt(this) : this;
                        }
                        if (this.timeline) {
                            var tDur = this.timeline.totalDuration();
                            this.timeline.killTweensOf(targets, vars, _overwritingTween && _overwritingTween.vars.overwrite !== true)._first || _interrupt(this);
                            this.parent && tDur !== this.timeline.totalDuration() && _setDuration(this, this._dur * this.timeline._tDur / tDur, 0, 1);
                            return this;
                        }
                        var overwrittenProps, curLookup, curOverwriteProps, props, p, pt, i, parsedTargets = this._targets, killingTargets = targets ? toArray(targets) : parsedTargets, propTweenLookup = this._ptLookup, firstPT = this._pt;
                        if ((!vars || vars === "all") && _arraysMatch(parsedTargets, killingTargets)) {
                            vars === "all" && (this._pt = 0);
                            return _interrupt(this);
                        }
                        overwrittenProps = this._op = this._op || [];
                        if (vars !== "all") {
                            if (_isString(vars)) {
                                p = {};
                                _forEachName(vars, (function(name) {
                                    return p[name] = 1;
                                }));
                                vars = p;
                            }
                            vars = _addAliasesToVars(parsedTargets, vars);
                        }
                        i = parsedTargets.length;
                        while (i--) if (~killingTargets.indexOf(parsedTargets[i])) {
                            curLookup = propTweenLookup[i];
                            if (vars === "all") {
                                overwrittenProps[i] = vars;
                                props = curLookup;
                                curOverwriteProps = {};
                            } else {
                                curOverwriteProps = overwrittenProps[i] = overwrittenProps[i] || {};
                                props = vars;
                            }
                            for (p in props) {
                                pt = curLookup && curLookup[p];
                                if (pt) {
                                    if (!("kill" in pt.d) || pt.d.kill(p) === true) _removeLinkedListItem(this, pt, "_pt");
                                    delete curLookup[p];
                                }
                                if (curOverwriteProps !== "all") curOverwriteProps[p] = 1;
                            }
                        }
                        this._initted && !this._pt && firstPT && _interrupt(this);
                        return this;
                    };
                    Tween.to = function to(targets, vars) {
                        return new Tween(targets, vars, arguments[2]);
                    };
                    Tween.from = function from(targets, vars) {
                        return _createTweenType(1, arguments);
                    };
                    Tween.delayedCall = function delayedCall(delay, callback, params, scope) {
                        return new Tween(callback, 0, {
                            immediateRender: false,
                            lazy: false,
                            overwrite: false,
                            delay,
                            onComplete: callback,
                            onReverseComplete: callback,
                            onCompleteParams: params,
                            onReverseCompleteParams: params,
                            callbackScope: scope
                        });
                    };
                    Tween.fromTo = function fromTo(targets, fromVars, toVars) {
                        return _createTweenType(2, arguments);
                    };
                    Tween.set = function set(targets, vars) {
                        vars.duration = 0;
                        vars.repeatDelay || (vars.repeat = 0);
                        return new Tween(targets, vars);
                    };
                    Tween.killTweensOf = function killTweensOf(targets, props, onlyActive) {
                        return _globalTimeline.killTweensOf(targets, props, onlyActive);
                    };
                    return Tween;
                }(Animation);
                _setDefaults(Tween.prototype, {
                    _targets: [],
                    _lazy: 0,
                    _startAt: 0,
                    _op: 0,
                    _onInit: 0
                });
                _forEachName("staggerTo,staggerFrom,staggerFromTo", (function(name) {
                    Tween[name] = function() {
                        var tl = new Timeline, params = _slice.call(arguments, 0);
                        params.splice(name === "staggerFromTo" ? 5 : 4, 0, 0);
                        return tl[name].apply(tl, params);
                    };
                }));
                var _setterPlain = function _setterPlain(target, property, value) {
                    return target[property] = value;
                }, _setterFunc = function _setterFunc(target, property, value) {
                    return target[property](value);
                }, _setterFuncWithParam = function _setterFuncWithParam(target, property, value, data) {
                    return target[property](data.fp, value);
                }, _setterAttribute = function _setterAttribute(target, property, value) {
                    return target.setAttribute(property, value);
                }, _getSetter = function _getSetter(target, property) {
                    return _isFunction(target[property]) ? _setterFunc : _isUndefined(target[property]) && target.setAttribute ? _setterAttribute : _setterPlain;
                }, _renderPlain = function _renderPlain(ratio, data) {
                    return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 1e6) / 1e6, data);
                }, _renderBoolean = function _renderBoolean(ratio, data) {
                    return data.set(data.t, data.p, !!(data.s + data.c * ratio), data);
                }, _renderComplexString = function _renderComplexString(ratio, data) {
                    var pt = data._pt, s = "";
                    if (!ratio && data.b) s = data.b; else if (ratio === 1 && data.e) s = data.e; else {
                        while (pt) {
                            s = pt.p + (pt.m ? pt.m(pt.s + pt.c * ratio) : Math.round((pt.s + pt.c * ratio) * 1e4) / 1e4) + s;
                            pt = pt._next;
                        }
                        s += data.c;
                    }
                    data.set(data.t, data.p, s, data);
                }, _renderPropTweens = function _renderPropTweens(ratio, data) {
                    var pt = data._pt;
                    while (pt) {
                        pt.r(ratio, pt.d);
                        pt = pt._next;
                    }
                }, _addPluginModifier = function _addPluginModifier(modifier, tween, target, property) {
                    var next, pt = this._pt;
                    while (pt) {
                        next = pt._next;
                        pt.p === property && pt.modifier(modifier, tween, target);
                        pt = next;
                    }
                }, _killPropTweensOf = function _killPropTweensOf(property) {
                    var hasNonDependentRemaining, next, pt = this._pt;
                    while (pt) {
                        next = pt._next;
                        if (pt.p === property && !pt.op || pt.op === property) _removeLinkedListItem(this, pt, "_pt"); else if (!pt.dep) hasNonDependentRemaining = 1;
                        pt = next;
                    }
                    return !hasNonDependentRemaining;
                }, _setterWithModifier = function _setterWithModifier(target, property, value, data) {
                    data.mSet(target, property, data.m.call(data.tween, value, data.mt), data);
                }, _sortPropTweensByPriority = function _sortPropTweensByPriority(parent) {
                    var next, pt2, first, last, pt = parent._pt;
                    while (pt) {
                        next = pt._next;
                        pt2 = first;
                        while (pt2 && pt2.pr > pt.pr) pt2 = pt2._next;
                        if (pt._prev = pt2 ? pt2._prev : last) pt._prev._next = pt; else first = pt;
                        if (pt._next = pt2) pt2._prev = pt; else last = pt;
                        pt = next;
                    }
                    parent._pt = first;
                };
                var PropTween = function() {
                    function PropTween(next, target, prop, start, change, renderer, data, setter, priority) {
                        this.t = target;
                        this.s = start;
                        this.c = change;
                        this.p = prop;
                        this.r = renderer || _renderPlain;
                        this.d = data || this;
                        this.set = setter || _setterPlain;
                        this.pr = priority || 0;
                        this._next = next;
                        if (next) next._prev = this;
                    }
                    var _proto4 = PropTween.prototype;
                    _proto4.modifier = function modifier(func, tween, target) {
                        this.mSet = this.mSet || this.set;
                        this.set = _setterWithModifier;
                        this.m = func;
                        this.mt = target;
                        this.tween = tween;
                    };
                    return PropTween;
                }();
                _forEachName(_callbackNames + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", (function(name) {
                    return _reservedProps[name] = 1;
                }));
                _globals.TweenMax = _globals.TweenLite = Tween;
                _globals.TimelineLite = _globals.TimelineMax = Timeline;
                _globalTimeline = new Timeline({
                    sortChildren: false,
                    defaults: _defaults,
                    autoRemoveChildren: true,
                    id: "root",
                    smoothChildTiming: true
                });
                _config.stringFilter = _colorStringFilter;
                var _media = [], _listeners = {}, _emptyArray = [], _lastMediaTime = 0, _contextID = 0, _dispatch = function _dispatch(type) {
                    return (_listeners[type] || _emptyArray).map((function(f) {
                        return f();
                    }));
                }, _onMediaChange = function _onMediaChange() {
                    var time = Date.now(), matches = [];
                    if (time - _lastMediaTime > 2) {
                        _dispatch("matchMediaInit");
                        _media.forEach((function(c) {
                            var match, p, anyMatch, toggled, queries = c.queries, conditions = c.conditions;
                            for (p in queries) {
                                match = _win.matchMedia(queries[p]).matches;
                                match && (anyMatch = 1);
                                if (match !== conditions[p]) {
                                    conditions[p] = match;
                                    toggled = 1;
                                }
                            }
                            if (toggled) {
                                c.revert();
                                anyMatch && matches.push(c);
                            }
                        }));
                        _dispatch("matchMediaRevert");
                        matches.forEach((function(c) {
                            return c.onMatch(c, (function(func) {
                                return c.add(null, func);
                            }));
                        }));
                        _lastMediaTime = time;
                        _dispatch("matchMedia");
                    }
                };
                var Context = function() {
                    function Context(func, scope) {
                        this.selector = scope && selector(scope);
                        this.data = [];
                        this._r = [];
                        this.isReverted = false;
                        this.id = _contextID++;
                        func && this.add(func);
                    }
                    var _proto5 = Context.prototype;
                    _proto5.add = function add(name, func, scope) {
                        if (_isFunction(name)) {
                            scope = func;
                            func = name;
                            name = _isFunction;
                        }
                        var self = this, f = function f() {
                            var result, prev = _context, prevSelector = self.selector;
                            prev && prev !== self && prev.data.push(self);
                            scope && (self.selector = selector(scope));
                            _context = self;
                            result = func.apply(self, arguments);
                            _isFunction(result) && self._r.push(result);
                            _context = prev;
                            self.selector = prevSelector;
                            self.isReverted = false;
                            return result;
                        };
                        self.last = f;
                        return name === _isFunction ? f(self, (function(func) {
                            return self.add(null, func);
                        })) : name ? self[name] = f : f;
                    };
                    _proto5.ignore = function ignore(func) {
                        var prev = _context;
                        _context = null;
                        func(this);
                        _context = prev;
                    };
                    _proto5.getTweens = function getTweens() {
                        var a = [];
                        this.data.forEach((function(e) {
                            return e instanceof Context ? a.push.apply(a, e.getTweens()) : e instanceof Tween && !(e.parent && e.parent.data === "nested") && a.push(e);
                        }));
                        return a;
                    };
                    _proto5.clear = function clear() {
                        this._r.length = this.data.length = 0;
                    };
                    _proto5.kill = function kill(revert, matchMedia) {
                        var _this4 = this;
                        if (revert) (function() {
                            var t, tweens = _this4.getTweens(), i = _this4.data.length;
                            while (i--) {
                                t = _this4.data[i];
                                if (t.data === "isFlip") {
                                    t.revert();
                                    t.getChildren(true, true, false).forEach((function(tween) {
                                        return tweens.splice(tweens.indexOf(tween), 1);
                                    }));
                                }
                            }
                            tweens.map((function(t) {
                                return {
                                    g: t._dur || t._delay || t._sat && !t._sat.vars.immediateRender ? t.globalTime(0) : -1 / 0,
                                    t
                                };
                            })).sort((function(a, b) {
                                return b.g - a.g || -1 / 0;
                            })).forEach((function(o) {
                                return o.t.revert(revert);
                            }));
                            i = _this4.data.length;
                            while (i--) {
                                t = _this4.data[i];
                                if (t instanceof Timeline) {
                                    if (t.data !== "nested") {
                                        t.scrollTrigger && t.scrollTrigger.revert();
                                        t.kill();
                                    }
                                } else !(t instanceof Tween) && t.revert && t.revert(revert);
                            }
                            _this4._r.forEach((function(f) {
                                return f(revert, _this4);
                            }));
                            _this4.isReverted = true;
                        })(); else this.data.forEach((function(e) {
                            return e.kill && e.kill();
                        }));
                        this.clear();
                        if (matchMedia) {
                            var i = _media.length;
                            while (i--) _media[i].id === this.id && _media.splice(i, 1);
                        }
                    };
                    _proto5.revert = function revert(config) {
                        this.kill(config || {});
                    };
                    return Context;
                }();
                var MatchMedia = function() {
                    function MatchMedia(scope) {
                        this.contexts = [];
                        this.scope = scope;
                        _context && _context.data.push(this);
                    }
                    var _proto6 = MatchMedia.prototype;
                    _proto6.add = function add(conditions, func, scope) {
                        _isObject(conditions) || (conditions = {
                            matches: conditions
                        });
                        var mq, p, active, context = new Context(0, scope || this.scope), cond = context.conditions = {};
                        _context && !context.selector && (context.selector = _context.selector);
                        this.contexts.push(context);
                        func = context.add("onMatch", func);
                        context.queries = conditions;
                        for (p in conditions) if (p === "all") active = 1; else {
                            mq = _win.matchMedia(conditions[p]);
                            if (mq) {
                                _media.indexOf(context) < 0 && _media.push(context);
                                (cond[p] = mq.matches) && (active = 1);
                                mq.addListener ? mq.addListener(_onMediaChange) : mq.addEventListener("change", _onMediaChange);
                            }
                        }
                        active && func(context, (function(f) {
                            return context.add(null, f);
                        }));
                        return this;
                    };
                    _proto6.revert = function revert(config) {
                        this.kill(config || {});
                    };
                    _proto6.kill = function kill(revert) {
                        this.contexts.forEach((function(c) {
                            return c.kill(revert, true);
                        }));
                    };
                    return MatchMedia;
                }();
                var _gsap = {
                    registerPlugin: function registerPlugin() {
                        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) args[_key2] = arguments[_key2];
                        args.forEach((function(config) {
                            return _createPlugin(config);
                        }));
                    },
                    timeline: function timeline(vars) {
                        return new Timeline(vars);
                    },
                    getTweensOf: function getTweensOf(targets, onlyActive) {
                        return _globalTimeline.getTweensOf(targets, onlyActive);
                    },
                    getProperty: function getProperty(target, property, unit, uncache) {
                        _isString(target) && (target = toArray(target)[0]);
                        var getter = _getCache(target || {}).get, format = unit ? _passThrough : _numericIfPossible;
                        unit === "native" && (unit = "");
                        return !target ? target : !property ? function(property, unit, uncache) {
                            return format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
                        } : format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
                    },
                    quickSetter: function quickSetter(target, property, unit) {
                        target = toArray(target);
                        if (target.length > 1) {
                            var setters = target.map((function(t) {
                                return gsap.quickSetter(t, property, unit);
                            })), l = setters.length;
                            return function(value) {
                                var i = l;
                                while (i--) setters[i](value);
                            };
                        }
                        target = target[0] || {};
                        var Plugin = _plugins[property], cache = _getCache(target), p = cache.harness && (cache.harness.aliases || {})[property] || property, setter = Plugin ? function(value) {
                            var p = new Plugin;
                            _quickTween._pt = 0;
                            p.init(target, unit ? value + unit : value, _quickTween, 0, [ target ]);
                            p.render(1, p);
                            _quickTween._pt && _renderPropTweens(1, _quickTween);
                        } : cache.set(target, p);
                        return Plugin ? setter : function(value) {
                            return setter(target, p, unit ? value + unit : value, cache, 1);
                        };
                    },
                    quickTo: function quickTo(target, property, vars) {
                        var _merge2;
                        var tween = gsap.to(target, _merge((_merge2 = {}, _merge2[property] = "+=0.1", _merge2.paused = true, 
                        _merge2), vars || {})), func = function func(value, start, startIsRelative) {
                            return tween.resetTo(property, value, start, startIsRelative);
                        };
                        func.tween = tween;
                        return func;
                    },
                    isTweening: function isTweening(targets) {
                        return _globalTimeline.getTweensOf(targets, true).length > 0;
                    },
                    defaults: function defaults(value) {
                        value && value.ease && (value.ease = _parseEase(value.ease, _defaults.ease));
                        return _mergeDeep(_defaults, value || {});
                    },
                    config: function config(value) {
                        return _mergeDeep(_config, value || {});
                    },
                    registerEffect: function registerEffect(_ref3) {
                        var name = _ref3.name, effect = _ref3.effect, plugins = _ref3.plugins, defaults = _ref3.defaults, extendTimeline = _ref3.extendTimeline;
                        (plugins || "").split(",").forEach((function(pluginName) {
                            return pluginName && !_plugins[pluginName] && !_globals[pluginName] && _warn(name + " effect requires " + pluginName + " plugin.");
                        }));
                        _effects[name] = function(targets, vars, tl) {
                            return effect(toArray(targets), _setDefaults(vars || {}, defaults), tl);
                        };
                        if (extendTimeline) Timeline.prototype[name] = function(targets, vars, position) {
                            return this.add(_effects[name](targets, _isObject(vars) ? vars : (position = vars) && {}, this), position);
                        };
                    },
                    registerEase: function registerEase(name, ease) {
                        _easeMap[name] = _parseEase(ease);
                    },
                    parseEase: function parseEase(ease, defaultEase) {
                        return arguments.length ? _parseEase(ease, defaultEase) : _easeMap;
                    },
                    getById: function getById(id) {
                        return _globalTimeline.getById(id);
                    },
                    exportRoot: function exportRoot(vars, includeDelayedCalls) {
                        if (vars === void 0) vars = {};
                        var child, next, tl = new Timeline(vars);
                        tl.smoothChildTiming = _isNotFalse(vars.smoothChildTiming);
                        _globalTimeline.remove(tl);
                        tl._dp = 0;
                        tl._time = tl._tTime = _globalTimeline._time;
                        child = _globalTimeline._first;
                        while (child) {
                            next = child._next;
                            if (includeDelayedCalls || !(!child._dur && child instanceof Tween && child.vars.onComplete === child._targets[0])) _addToTimeline(tl, child, child._start - child._delay);
                            child = next;
                        }
                        _addToTimeline(_globalTimeline, tl, 0);
                        return tl;
                    },
                    context: function context(func, scope) {
                        return func ? new Context(func, scope) : _context;
                    },
                    matchMedia: function matchMedia(scope) {
                        return new MatchMedia(scope);
                    },
                    matchMediaRefresh: function matchMediaRefresh() {
                        return _media.forEach((function(c) {
                            var found, p, cond = c.conditions;
                            for (p in cond) if (cond[p]) {
                                cond[p] = false;
                                found = 1;
                            }
                            found && c.revert();
                        })) || _onMediaChange();
                    },
                    addEventListener: function addEventListener(type, callback) {
                        var a = _listeners[type] || (_listeners[type] = []);
                        ~a.indexOf(callback) || a.push(callback);
                    },
                    removeEventListener: function removeEventListener(type, callback) {
                        var a = _listeners[type], i = a && a.indexOf(callback);
                        i >= 0 && a.splice(i, 1);
                    },
                    utils: {
                        wrap,
                        wrapYoyo,
                        distribute,
                        random,
                        snap,
                        normalize,
                        getUnit,
                        clamp,
                        splitColor,
                        toArray,
                        selector,
                        mapRange,
                        pipe,
                        unitize,
                        interpolate,
                        shuffle
                    },
                    install: _install,
                    effects: _effects,
                    ticker: _ticker,
                    updateRoot: Timeline.updateRoot,
                    plugins: _plugins,
                    globalTimeline: _globalTimeline,
                    core: {
                        PropTween,
                        globals: _addGlobal,
                        Tween,
                        Timeline,
                        Animation,
                        getCache: _getCache,
                        _removeLinkedListItem,
                        reverting: function reverting() {
                            return _reverting;
                        },
                        context: function context(toAdd) {
                            if (toAdd && _context) {
                                _context.data.push(toAdd);
                                toAdd._ctx = _context;
                            }
                            return _context;
                        },
                        suppressOverwrites: function suppressOverwrites(value) {
                            return _suppressOverwrites = value;
                        }
                    }
                };
                _forEachName("to,from,fromTo,delayedCall,set,killTweensOf", (function(name) {
                    return _gsap[name] = Tween[name];
                }));
                _ticker.add(Timeline.updateRoot);
                _quickTween = _gsap.to({}, {
                    duration: 0
                });
                var _getPluginPropTween = function _getPluginPropTween(plugin, prop) {
                    var pt = plugin._pt;
                    while (pt && pt.p !== prop && pt.op !== prop && pt.fp !== prop) pt = pt._next;
                    return pt;
                }, _addModifiers = function _addModifiers(tween, modifiers) {
                    var p, i, pt, targets = tween._targets;
                    for (p in modifiers) {
                        i = targets.length;
                        while (i--) {
                            pt = tween._ptLookup[i][p];
                            if (pt && (pt = pt.d)) {
                                if (pt._pt) pt = _getPluginPropTween(pt, p);
                                pt && pt.modifier && pt.modifier(modifiers[p], tween, targets[i], p);
                            }
                        }
                    }
                }, _buildModifierPlugin = function _buildModifierPlugin(name, modifier) {
                    return {
                        name,
                        rawVars: 1,
                        init: function init(target, vars, tween) {
                            tween._onInit = function(tween) {
                                var temp, p;
                                if (_isString(vars)) {
                                    temp = {};
                                    _forEachName(vars, (function(name) {
                                        return temp[name] = 1;
                                    }));
                                    vars = temp;
                                }
                                if (modifier) {
                                    temp = {};
                                    for (p in vars) temp[p] = modifier(vars[p]);
                                    vars = temp;
                                }
                                _addModifiers(tween, vars);
                            };
                        }
                    };
                };
                var gsap = _gsap.registerPlugin({
                    name: "attr",
                    init: function init(target, vars, tween, index, targets) {
                        var p, pt, v;
                        this.tween = tween;
                        for (p in vars) {
                            v = target.getAttribute(p) || "";
                            pt = this.add(target, "setAttribute", (v || 0) + "", vars[p], index, targets, 0, 0, p);
                            pt.op = p;
                            pt.b = v;
                            this._props.push(p);
                        }
                    },
                    render: function render(ratio, data) {
                        var pt = data._pt;
                        while (pt) {
                            _reverting ? pt.set(pt.t, pt.p, pt.b, pt) : pt.r(ratio, pt.d);
                            pt = pt._next;
                        }
                    }
                }, {
                    name: "endArray",
                    init: function init(target, value) {
                        var i = value.length;
                        while (i--) this.add(target, i, target[i] || 0, value[i], 0, 0, 0, 0, 0, 1);
                    }
                }, _buildModifierPlugin("roundProps", _roundModifier), _buildModifierPlugin("modifiers"), _buildModifierPlugin("snap", snap)) || _gsap;
                Tween.version = Timeline.version = gsap.version = "3.12.5";
                _coreReady = 1;
                _windowExists() && _wake();
                var Power0 = _easeMap.Power0, Power1 = _easeMap.Power1, Power2 = _easeMap.Power2, Power3 = _easeMap.Power3, Power4 = _easeMap.Power4, Linear = _easeMap.Linear, Quad = _easeMap.Quad, Cubic = _easeMap.Cubic, Quart = _easeMap.Quart, Quint = _easeMap.Quint, Strong = _easeMap.Strong, Elastic = _easeMap.Elastic, Back = _easeMap.Back, SteppedEase = _easeMap.SteppedEase, Bounce = _easeMap.Bounce, Sine = _easeMap.Sine, Expo = _easeMap.Expo, Circ = _easeMap.Circ;
                var _win$1, _doc$1, _docElement, _pluginInitted, _tempDiv, _recentSetterPlugin, _reverting$1, _supports3D, _windowExists$1 = function _windowExists() {
                    return typeof window !== "undefined";
                }, _transformProps = {}, _RAD2DEG = 180 / Math.PI, _DEG2RAD = Math.PI / 180, _atan2 = Math.atan2, _bigNum$1 = 1e8, _capsExp = /([A-Z])/g, _horizontalExp = /(left|right|width|margin|padding|x)/i, _complexExp = /[\s,\(]\S/, _propertyAliases = {
                    autoAlpha: "opacity,visibility",
                    scale: "scaleX,scaleY",
                    alpha: "opacity"
                }, _renderCSSProp = function _renderCSSProp(ratio, data) {
                    return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 1e4) / 1e4 + data.u, data);
                }, _renderPropWithEnd = function _renderPropWithEnd(ratio, data) {
                    return data.set(data.t, data.p, ratio === 1 ? data.e : Math.round((data.s + data.c * ratio) * 1e4) / 1e4 + data.u, data);
                }, _renderCSSPropWithBeginning = function _renderCSSPropWithBeginning(ratio, data) {
                    return data.set(data.t, data.p, ratio ? Math.round((data.s + data.c * ratio) * 1e4) / 1e4 + data.u : data.b, data);
                }, _renderRoundedCSSProp = function _renderRoundedCSSProp(ratio, data) {
                    var value = data.s + data.c * ratio;
                    data.set(data.t, data.p, ~~(value + (value < 0 ? -.5 : .5)) + data.u, data);
                }, _renderNonTweeningValue = function _renderNonTweeningValue(ratio, data) {
                    return data.set(data.t, data.p, ratio ? data.e : data.b, data);
                }, _renderNonTweeningValueOnlyAtEnd = function _renderNonTweeningValueOnlyAtEnd(ratio, data) {
                    return data.set(data.t, data.p, ratio !== 1 ? data.b : data.e, data);
                }, _setterCSSStyle = function _setterCSSStyle(target, property, value) {
                    return target.style[property] = value;
                }, _setterCSSProp = function _setterCSSProp(target, property, value) {
                    return target.style.setProperty(property, value);
                }, _setterTransform = function _setterTransform(target, property, value) {
                    return target._gsap[property] = value;
                }, _setterScale = function _setterScale(target, property, value) {
                    return target._gsap.scaleX = target._gsap.scaleY = value;
                }, _setterScaleWithRender = function _setterScaleWithRender(target, property, value, data, ratio) {
                    var cache = target._gsap;
                    cache.scaleX = cache.scaleY = value;
                    cache.renderTransform(ratio, cache);
                }, _setterTransformWithRender = function _setterTransformWithRender(target, property, value, data, ratio) {
                    var cache = target._gsap;
                    cache[property] = value;
                    cache.renderTransform(ratio, cache);
                }, _transformProp = "transform", _transformOriginProp = _transformProp + "Origin", _saveStyle = function _saveStyle(property, isNotCSS) {
                    var _this = this;
                    var target = this.target, style = target.style, cache = target._gsap;
                    if (property in _transformProps && style) {
                        this.tfm = this.tfm || {};
                        if (property !== "transform") {
                            property = _propertyAliases[property] || property;
                            ~property.indexOf(",") ? property.split(",").forEach((function(a) {
                                return _this.tfm[a] = _get(target, a);
                            })) : this.tfm[property] = cache.x ? cache[property] : _get(target, property);
                            property === _transformOriginProp && (this.tfm.zOrigin = cache.zOrigin);
                        } else return _propertyAliases.transform.split(",").forEach((function(p) {
                            return _saveStyle.call(_this, p, isNotCSS);
                        }));
                        if (this.props.indexOf(_transformProp) >= 0) return;
                        if (cache.svg) {
                            this.svgo = target.getAttribute("data-svg-origin");
                            this.props.push(_transformOriginProp, isNotCSS, "");
                        }
                        property = _transformProp;
                    }
                    (style || isNotCSS) && this.props.push(property, isNotCSS, style[property]);
                }, _removeIndependentTransforms = function _removeIndependentTransforms(style) {
                    if (style.translate) {
                        style.removeProperty("translate");
                        style.removeProperty("scale");
                        style.removeProperty("rotate");
                    }
                }, _revertStyle = function _revertStyle() {
                    var i, p, props = this.props, target = this.target, style = target.style, cache = target._gsap;
                    for (i = 0; i < props.length; i += 3) props[i + 1] ? target[props[i]] = props[i + 2] : props[i + 2] ? style[props[i]] = props[i + 2] : style.removeProperty(props[i].substr(0, 2) === "--" ? props[i] : props[i].replace(_capsExp, "-$1").toLowerCase());
                    if (this.tfm) {
                        for (p in this.tfm) cache[p] = this.tfm[p];
                        if (cache.svg) {
                            cache.renderTransform();
                            target.setAttribute("data-svg-origin", this.svgo || "");
                        }
                        i = _reverting$1();
                        if ((!i || !i.isStart) && !style[_transformProp]) {
                            _removeIndependentTransforms(style);
                            if (cache.zOrigin && style[_transformOriginProp]) {
                                style[_transformOriginProp] += " " + cache.zOrigin + "px";
                                cache.zOrigin = 0;
                                cache.renderTransform();
                            }
                            cache.uncache = 1;
                        }
                    }
                }, _getStyleSaver = function _getStyleSaver(target, properties) {
                    var saver = {
                        target,
                        props: [],
                        revert: _revertStyle,
                        save: _saveStyle
                    };
                    target._gsap || gsap.core.getCache(target);
                    properties && properties.split(",").forEach((function(p) {
                        return saver.save(p);
                    }));
                    return saver;
                }, _createElement = function _createElement(type, ns) {
                    var e = _doc$1.createElementNS ? _doc$1.createElementNS((ns || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), type) : _doc$1.createElement(type);
                    return e && e.style ? e : _doc$1.createElement(type);
                }, _getComputedProperty = function _getComputedProperty(target, property, skipPrefixFallback) {
                    var cs = getComputedStyle(target);
                    return cs[property] || cs.getPropertyValue(property.replace(_capsExp, "-$1").toLowerCase()) || cs.getPropertyValue(property) || !skipPrefixFallback && _getComputedProperty(target, _checkPropPrefix(property) || property, 1) || "";
                }, _prefixes = "O,Moz,ms,Ms,Webkit".split(","), _checkPropPrefix = function _checkPropPrefix(property, element, preferPrefix) {
                    var e = element || _tempDiv, s = e.style, i = 5;
                    if (property in s && !preferPrefix) return property;
                    property = property.charAt(0).toUpperCase() + property.substr(1);
                    while (i-- && !(_prefixes[i] + property in s)) ;
                    return i < 0 ? null : (i === 3 ? "ms" : i >= 0 ? _prefixes[i] : "") + property;
                }, _initCore = function _initCore() {
                    if (_windowExists$1() && window.document) {
                        _win$1 = window;
                        _doc$1 = _win$1.document;
                        _docElement = _doc$1.documentElement;
                        _tempDiv = _createElement("div") || {
                            style: {}
                        };
                        _createElement("div");
                        _transformProp = _checkPropPrefix(_transformProp);
                        _transformOriginProp = _transformProp + "Origin";
                        _tempDiv.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0";
                        _supports3D = !!_checkPropPrefix("perspective");
                        _reverting$1 = gsap.core.reverting;
                        _pluginInitted = 1;
                    }
                }, _getBBoxHack = function _getBBoxHack(swapIfPossible) {
                    var bbox, svg = _createElement("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), oldParent = this.parentNode, oldSibling = this.nextSibling, oldCSS = this.style.cssText;
                    _docElement.appendChild(svg);
                    svg.appendChild(this);
                    this.style.display = "block";
                    if (swapIfPossible) try {
                        bbox = this.getBBox();
                        this._gsapBBox = this.getBBox;
                        this.getBBox = _getBBoxHack;
                    } catch (e) {} else if (this._gsapBBox) bbox = this._gsapBBox();
                    if (oldParent) if (oldSibling) oldParent.insertBefore(this, oldSibling); else oldParent.appendChild(this);
                    _docElement.removeChild(svg);
                    this.style.cssText = oldCSS;
                    return bbox;
                }, _getAttributeFallbacks = function _getAttributeFallbacks(target, attributesArray) {
                    var i = attributesArray.length;
                    while (i--) if (target.hasAttribute(attributesArray[i])) return target.getAttribute(attributesArray[i]);
                }, _getBBox = function _getBBox(target) {
                    var bounds;
                    try {
                        bounds = target.getBBox();
                    } catch (error) {
                        bounds = _getBBoxHack.call(target, true);
                    }
                    bounds && (bounds.width || bounds.height) || target.getBBox === _getBBoxHack || (bounds = _getBBoxHack.call(target, true));
                    return bounds && !bounds.width && !bounds.x && !bounds.y ? {
                        x: +_getAttributeFallbacks(target, [ "x", "cx", "x1" ]) || 0,
                        y: +_getAttributeFallbacks(target, [ "y", "cy", "y1" ]) || 0,
                        width: 0,
                        height: 0
                    } : bounds;
                }, _isSVG = function _isSVG(e) {
                    return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && _getBBox(e));
                }, _removeProperty = function _removeProperty(target, property) {
                    if (property) {
                        var first2Chars, style = target.style;
                        if (property in _transformProps && property !== _transformOriginProp) property = _transformProp;
                        if (style.removeProperty) {
                            first2Chars = property.substr(0, 2);
                            if (first2Chars === "ms" || property.substr(0, 6) === "webkit") property = "-" + property;
                            style.removeProperty(first2Chars === "--" ? property : property.replace(_capsExp, "-$1").toLowerCase());
                        } else style.removeAttribute(property);
                    }
                }, _addNonTweeningPT = function _addNonTweeningPT(plugin, target, property, beginning, end, onlySetAtEnd) {
                    var pt = new PropTween(plugin._pt, target, property, 0, 1, onlySetAtEnd ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue);
                    plugin._pt = pt;
                    pt.b = beginning;
                    pt.e = end;
                    plugin._props.push(property);
                    return pt;
                }, _nonConvertibleUnits = {
                    deg: 1,
                    rad: 1,
                    turn: 1
                }, _nonStandardLayouts = {
                    grid: 1,
                    flex: 1
                }, _convertToUnit = function _convertToUnit(target, property, value, unit) {
                    var px, parent, cache, isSVG, curValue = parseFloat(value) || 0, curUnit = (value + "").trim().substr((curValue + "").length) || "px", style = _tempDiv.style, horizontal = _horizontalExp.test(property), isRootSVG = target.tagName.toLowerCase() === "svg", measureProperty = (isRootSVG ? "client" : "offset") + (horizontal ? "Width" : "Height"), amount = 100, toPixels = unit === "px", toPercent = unit === "%";
                    if (unit === curUnit || !curValue || _nonConvertibleUnits[unit] || _nonConvertibleUnits[curUnit]) return curValue;
                    curUnit !== "px" && !toPixels && (curValue = _convertToUnit(target, property, value, "px"));
                    isSVG = target.getCTM && _isSVG(target);
                    if ((toPercent || curUnit === "%") && (_transformProps[property] || ~property.indexOf("adius"))) {
                        px = isSVG ? target.getBBox()[horizontal ? "width" : "height"] : target[measureProperty];
                        return _round(toPercent ? curValue / px * amount : curValue / 100 * px);
                    }
                    style[horizontal ? "width" : "height"] = amount + (toPixels ? curUnit : unit);
                    parent = ~property.indexOf("adius") || unit === "em" && target.appendChild && !isRootSVG ? target : target.parentNode;
                    if (isSVG) parent = (target.ownerSVGElement || {}).parentNode;
                    if (!parent || parent === _doc$1 || !parent.appendChild) parent = _doc$1.body;
                    cache = parent._gsap;
                    if (cache && toPercent && cache.width && horizontal && cache.time === _ticker.time && !cache.uncache) return _round(curValue / cache.width * amount); else {
                        if (toPercent && (property === "height" || property === "width")) {
                            var v = target.style[property];
                            target.style[property] = amount + unit;
                            px = target[measureProperty];
                            v ? target.style[property] = v : _removeProperty(target, property);
                        } else {
                            (toPercent || curUnit === "%") && !_nonStandardLayouts[_getComputedProperty(parent, "display")] && (style.position = _getComputedProperty(target, "position"));
                            parent === target && (style.position = "static");
                            parent.appendChild(_tempDiv);
                            px = _tempDiv[measureProperty];
                            parent.removeChild(_tempDiv);
                            style.position = "absolute";
                        }
                        if (horizontal && toPercent) {
                            cache = _getCache(parent);
                            cache.time = _ticker.time;
                            cache.width = parent[measureProperty];
                        }
                    }
                    return _round(toPixels ? px * curValue / amount : px && curValue ? amount / px * curValue : 0);
                }, _get = function _get(target, property, unit, uncache) {
                    var value;
                    _pluginInitted || _initCore();
                    if (property in _propertyAliases && property !== "transform") {
                        property = _propertyAliases[property];
                        if (~property.indexOf(",")) property = property.split(",")[0];
                    }
                    if (_transformProps[property] && property !== "transform") {
                        value = _parseTransform(target, uncache);
                        value = property !== "transformOrigin" ? value[property] : value.svg ? value.origin : _firstTwoOnly(_getComputedProperty(target, _transformOriginProp)) + " " + value.zOrigin + "px";
                    } else {
                        value = target.style[property];
                        if (!value || value === "auto" || uncache || ~(value + "").indexOf("calc(")) value = _specialProps[property] && _specialProps[property](target, property, unit) || _getComputedProperty(target, property) || _getProperty(target, property) || (property === "opacity" ? 1 : 0);
                    }
                    return unit && !~(value + "").trim().indexOf(" ") ? _convertToUnit(target, property, value, unit) + unit : value;
                }, _tweenComplexCSSString = function _tweenComplexCSSString(target, prop, start, end) {
                    if (!start || start === "none") {
                        var p = _checkPropPrefix(prop, target, 1), s = p && _getComputedProperty(target, p, 1);
                        if (s && s !== start) {
                            prop = p;
                            start = s;
                        } else if (prop === "borderColor") start = _getComputedProperty(target, "borderTopColor");
                    }
                    var a, result, startValues, startNum, color, startValue, endValue, endNum, chunk, endUnit, startUnit, endValues, pt = new PropTween(this._pt, target.style, prop, 0, 1, _renderComplexString), index = 0, matchIndex = 0;
                    pt.b = start;
                    pt.e = end;
                    start += "";
                    end += "";
                    if (end === "auto") {
                        startValue = target.style[prop];
                        target.style[prop] = end;
                        end = _getComputedProperty(target, prop) || end;
                        startValue ? target.style[prop] = startValue : _removeProperty(target, prop);
                    }
                    a = [ start, end ];
                    _colorStringFilter(a);
                    start = a[0];
                    end = a[1];
                    startValues = start.match(_numWithUnitExp) || [];
                    endValues = end.match(_numWithUnitExp) || [];
                    if (endValues.length) {
                        while (result = _numWithUnitExp.exec(end)) {
                            endValue = result[0];
                            chunk = end.substring(index, result.index);
                            if (color) color = (color + 1) % 5; else if (chunk.substr(-5) === "rgba(" || chunk.substr(-5) === "hsla(") color = 1;
                            if (endValue !== (startValue = startValues[matchIndex++] || "")) {
                                startNum = parseFloat(startValue) || 0;
                                startUnit = startValue.substr((startNum + "").length);
                                endValue.charAt(1) === "=" && (endValue = _parseRelative(startNum, endValue) + startUnit);
                                endNum = parseFloat(endValue);
                                endUnit = endValue.substr((endNum + "").length);
                                index = _numWithUnitExp.lastIndex - endUnit.length;
                                if (!endUnit) {
                                    endUnit = endUnit || _config.units[prop] || startUnit;
                                    if (index === end.length) {
                                        end += endUnit;
                                        pt.e += endUnit;
                                    }
                                }
                                if (startUnit !== endUnit) startNum = _convertToUnit(target, prop, startValue, endUnit) || 0;
                                pt._pt = {
                                    _next: pt._pt,
                                    p: chunk || matchIndex === 1 ? chunk : ",",
                                    s: startNum,
                                    c: endNum - startNum,
                                    m: color && color < 4 || prop === "zIndex" ? Math.round : 0
                                };
                            }
                        }
                        pt.c = index < end.length ? end.substring(index, end.length) : "";
                    } else pt.r = prop === "display" && end === "none" ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue;
                    _relExp.test(end) && (pt.e = 0);
                    this._pt = pt;
                    return pt;
                }, _keywordToPercent = {
                    top: "0%",
                    bottom: "100%",
                    left: "0%",
                    right: "100%",
                    center: "50%"
                }, _convertKeywordsToPercentages = function _convertKeywordsToPercentages(value) {
                    var split = value.split(" "), x = split[0], y = split[1] || "50%";
                    if (x === "top" || x === "bottom" || y === "left" || y === "right") {
                        value = x;
                        x = y;
                        y = value;
                    }
                    split[0] = _keywordToPercent[x] || x;
                    split[1] = _keywordToPercent[y] || y;
                    return split.join(" ");
                }, _renderClearProps = function _renderClearProps(ratio, data) {
                    if (data.tween && data.tween._time === data.tween._dur) {
                        var prop, clearTransforms, i, target = data.t, style = target.style, props = data.u, cache = target._gsap;
                        if (props === "all" || props === true) {
                            style.cssText = "";
                            clearTransforms = 1;
                        } else {
                            props = props.split(",");
                            i = props.length;
                            while (--i > -1) {
                                prop = props[i];
                                if (_transformProps[prop]) {
                                    clearTransforms = 1;
                                    prop = prop === "transformOrigin" ? _transformOriginProp : _transformProp;
                                }
                                _removeProperty(target, prop);
                            }
                        }
                        if (clearTransforms) {
                            _removeProperty(target, _transformProp);
                            if (cache) {
                                cache.svg && target.removeAttribute("transform");
                                _parseTransform(target, 1);
                                cache.uncache = 1;
                                _removeIndependentTransforms(style);
                            }
                        }
                    }
                }, _specialProps = {
                    clearProps: function clearProps(plugin, target, property, endValue, tween) {
                        if (tween.data !== "isFromStart") {
                            var pt = plugin._pt = new PropTween(plugin._pt, target, property, 0, 0, _renderClearProps);
                            pt.u = endValue;
                            pt.pr = -10;
                            pt.tween = tween;
                            plugin._props.push(property);
                            return 1;
                        }
                    }
                }, _identity2DMatrix = [ 1, 0, 0, 1, 0, 0 ], _rotationalProperties = {}, _isNullTransform = function _isNullTransform(value) {
                    return value === "matrix(1, 0, 0, 1, 0, 0)" || value === "none" || !value;
                }, _getComputedTransformMatrixAsArray = function _getComputedTransformMatrixAsArray(target) {
                    var matrixString = _getComputedProperty(target, _transformProp);
                    return _isNullTransform(matrixString) ? _identity2DMatrix : matrixString.substr(7).match(_numExp).map(_round);
                }, _getMatrix = function _getMatrix(target, force2D) {
                    var parent, nextSibling, temp, addedToDOM, cache = target._gsap || _getCache(target), style = target.style, matrix = _getComputedTransformMatrixAsArray(target);
                    if (cache.svg && target.getAttribute("transform")) {
                        temp = target.transform.baseVal.consolidate().matrix;
                        matrix = [ temp.a, temp.b, temp.c, temp.d, temp.e, temp.f ];
                        return matrix.join(",") === "1,0,0,1,0,0" ? _identity2DMatrix : matrix;
                    } else if (matrix === _identity2DMatrix && !target.offsetParent && target !== _docElement && !cache.svg) {
                        temp = style.display;
                        style.display = "block";
                        parent = target.parentNode;
                        if (!parent || !target.offsetParent) {
                            addedToDOM = 1;
                            nextSibling = target.nextElementSibling;
                            _docElement.appendChild(target);
                        }
                        matrix = _getComputedTransformMatrixAsArray(target);
                        temp ? style.display = temp : _removeProperty(target, "display");
                        if (addedToDOM) nextSibling ? parent.insertBefore(target, nextSibling) : parent ? parent.appendChild(target) : _docElement.removeChild(target);
                    }
                    return force2D && matrix.length > 6 ? [ matrix[0], matrix[1], matrix[4], matrix[5], matrix[12], matrix[13] ] : matrix;
                }, _applySVGOrigin = function _applySVGOrigin(target, origin, originIsAbsolute, smooth, matrixArray, pluginToAddPropTweensTo) {
                    var bounds, determinant, x, y, cache = target._gsap, matrix = matrixArray || _getMatrix(target, true), xOriginOld = cache.xOrigin || 0, yOriginOld = cache.yOrigin || 0, xOffsetOld = cache.xOffset || 0, yOffsetOld = cache.yOffset || 0, a = matrix[0], b = matrix[1], c = matrix[2], d = matrix[3], tx = matrix[4], ty = matrix[5], originSplit = origin.split(" "), xOrigin = parseFloat(originSplit[0]) || 0, yOrigin = parseFloat(originSplit[1]) || 0;
                    if (!originIsAbsolute) {
                        bounds = _getBBox(target);
                        xOrigin = bounds.x + (~originSplit[0].indexOf("%") ? xOrigin / 100 * bounds.width : xOrigin);
                        yOrigin = bounds.y + (~(originSplit[1] || originSplit[0]).indexOf("%") ? yOrigin / 100 * bounds.height : yOrigin);
                    } else if (matrix !== _identity2DMatrix && (determinant = a * d - b * c)) {
                        x = xOrigin * (d / determinant) + yOrigin * (-c / determinant) + (c * ty - d * tx) / determinant;
                        y = xOrigin * (-b / determinant) + yOrigin * (a / determinant) - (a * ty - b * tx) / determinant;
                        xOrigin = x;
                        yOrigin = y;
                    }
                    if (smooth || smooth !== false && cache.smooth) {
                        tx = xOrigin - xOriginOld;
                        ty = yOrigin - yOriginOld;
                        cache.xOffset = xOffsetOld + (tx * a + ty * c) - tx;
                        cache.yOffset = yOffsetOld + (tx * b + ty * d) - ty;
                    } else cache.xOffset = cache.yOffset = 0;
                    cache.xOrigin = xOrigin;
                    cache.yOrigin = yOrigin;
                    cache.smooth = !!smooth;
                    cache.origin = origin;
                    cache.originIsAbsolute = !!originIsAbsolute;
                    target.style[_transformOriginProp] = "0px 0px";
                    if (pluginToAddPropTweensTo) {
                        _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOrigin", xOriginOld, xOrigin);
                        _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOrigin", yOriginOld, yOrigin);
                        _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOffset", xOffsetOld, cache.xOffset);
                        _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOffset", yOffsetOld, cache.yOffset);
                    }
                    target.setAttribute("data-svg-origin", xOrigin + " " + yOrigin);
                }, _parseTransform = function _parseTransform(target, uncache) {
                    var cache = target._gsap || new GSCache(target);
                    if ("x" in cache && !uncache && !cache.uncache) return cache;
                    var x, y, z, scaleX, scaleY, rotation, rotationX, rotationY, skewX, skewY, perspective, xOrigin, yOrigin, matrix, angle, cos, sin, a, b, c, d, a12, a22, t1, t2, t3, a13, a23, a33, a42, a43, a32, style = target.style, invertedScaleX = cache.scaleX < 0, px = "px", deg = "deg", cs = getComputedStyle(target), origin = _getComputedProperty(target, _transformOriginProp) || "0";
                    x = y = z = rotation = rotationX = rotationY = skewX = skewY = perspective = 0;
                    scaleX = scaleY = 1;
                    cache.svg = !!(target.getCTM && _isSVG(target));
                    if (cs.translate) {
                        if (cs.translate !== "none" || cs.scale !== "none" || cs.rotate !== "none") style[_transformProp] = (cs.translate !== "none" ? "translate3d(" + (cs.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (cs.rotate !== "none" ? "rotate(" + cs.rotate + ") " : "") + (cs.scale !== "none" ? "scale(" + cs.scale.split(" ").join(",") + ") " : "") + (cs[_transformProp] !== "none" ? cs[_transformProp] : "");
                        style.scale = style.rotate = style.translate = "none";
                    }
                    matrix = _getMatrix(target, cache.svg);
                    if (cache.svg) {
                        if (cache.uncache) {
                            t2 = target.getBBox();
                            origin = cache.xOrigin - t2.x + "px " + (cache.yOrigin - t2.y) + "px";
                            t1 = "";
                        } else t1 = !uncache && target.getAttribute("data-svg-origin");
                        _applySVGOrigin(target, t1 || origin, !!t1 || cache.originIsAbsolute, cache.smooth !== false, matrix);
                    }
                    xOrigin = cache.xOrigin || 0;
                    yOrigin = cache.yOrigin || 0;
                    if (matrix !== _identity2DMatrix) {
                        a = matrix[0];
                        b = matrix[1];
                        c = matrix[2];
                        d = matrix[3];
                        x = a12 = matrix[4];
                        y = a22 = matrix[5];
                        if (matrix.length === 6) {
                            scaleX = Math.sqrt(a * a + b * b);
                            scaleY = Math.sqrt(d * d + c * c);
                            rotation = a || b ? _atan2(b, a) * _RAD2DEG : 0;
                            skewX = c || d ? _atan2(c, d) * _RAD2DEG + rotation : 0;
                            skewX && (scaleY *= Math.abs(Math.cos(skewX * _DEG2RAD)));
                            if (cache.svg) {
                                x -= xOrigin - (xOrigin * a + yOrigin * c);
                                y -= yOrigin - (xOrigin * b + yOrigin * d);
                            }
                        } else {
                            a32 = matrix[6];
                            a42 = matrix[7];
                            a13 = matrix[8];
                            a23 = matrix[9];
                            a33 = matrix[10];
                            a43 = matrix[11];
                            x = matrix[12];
                            y = matrix[13];
                            z = matrix[14];
                            angle = _atan2(a32, a33);
                            rotationX = angle * _RAD2DEG;
                            if (angle) {
                                cos = Math.cos(-angle);
                                sin = Math.sin(-angle);
                                t1 = a12 * cos + a13 * sin;
                                t2 = a22 * cos + a23 * sin;
                                t3 = a32 * cos + a33 * sin;
                                a13 = a12 * -sin + a13 * cos;
                                a23 = a22 * -sin + a23 * cos;
                                a33 = a32 * -sin + a33 * cos;
                                a43 = a42 * -sin + a43 * cos;
                                a12 = t1;
                                a22 = t2;
                                a32 = t3;
                            }
                            angle = _atan2(-c, a33);
                            rotationY = angle * _RAD2DEG;
                            if (angle) {
                                cos = Math.cos(-angle);
                                sin = Math.sin(-angle);
                                t1 = a * cos - a13 * sin;
                                t2 = b * cos - a23 * sin;
                                t3 = c * cos - a33 * sin;
                                a43 = d * sin + a43 * cos;
                                a = t1;
                                b = t2;
                                c = t3;
                            }
                            angle = _atan2(b, a);
                            rotation = angle * _RAD2DEG;
                            if (angle) {
                                cos = Math.cos(angle);
                                sin = Math.sin(angle);
                                t1 = a * cos + b * sin;
                                t2 = a12 * cos + a22 * sin;
                                b = b * cos - a * sin;
                                a22 = a22 * cos - a12 * sin;
                                a = t1;
                                a12 = t2;
                            }
                            if (rotationX && Math.abs(rotationX) + Math.abs(rotation) > 359.9) {
                                rotationX = rotation = 0;
                                rotationY = 180 - rotationY;
                            }
                            scaleX = _round(Math.sqrt(a * a + b * b + c * c));
                            scaleY = _round(Math.sqrt(a22 * a22 + a32 * a32));
                            angle = _atan2(a12, a22);
                            skewX = Math.abs(angle) > 2e-4 ? angle * _RAD2DEG : 0;
                            perspective = a43 ? 1 / (a43 < 0 ? -a43 : a43) : 0;
                        }
                        if (cache.svg) {
                            t1 = target.getAttribute("transform");
                            cache.forceCSS = target.setAttribute("transform", "") || !_isNullTransform(_getComputedProperty(target, _transformProp));
                            t1 && target.setAttribute("transform", t1);
                        }
                    }
                    if (Math.abs(skewX) > 90 && Math.abs(skewX) < 270) if (invertedScaleX) {
                        scaleX *= -1;
                        skewX += rotation <= 0 ? 180 : -180;
                        rotation += rotation <= 0 ? 180 : -180;
                    } else {
                        scaleY *= -1;
                        skewX += skewX <= 0 ? 180 : -180;
                    }
                    uncache = uncache || cache.uncache;
                    cache.x = x - ((cache.xPercent = x && (!uncache && cache.xPercent || (Math.round(target.offsetWidth / 2) === Math.round(-x) ? -50 : 0))) ? target.offsetWidth * cache.xPercent / 100 : 0) + px;
                    cache.y = y - ((cache.yPercent = y && (!uncache && cache.yPercent || (Math.round(target.offsetHeight / 2) === Math.round(-y) ? -50 : 0))) ? target.offsetHeight * cache.yPercent / 100 : 0) + px;
                    cache.z = z + px;
                    cache.scaleX = _round(scaleX);
                    cache.scaleY = _round(scaleY);
                    cache.rotation = _round(rotation) + deg;
                    cache.rotationX = _round(rotationX) + deg;
                    cache.rotationY = _round(rotationY) + deg;
                    cache.skewX = skewX + deg;
                    cache.skewY = skewY + deg;
                    cache.transformPerspective = perspective + px;
                    if (cache.zOrigin = parseFloat(origin.split(" ")[2]) || !uncache && cache.zOrigin || 0) style[_transformOriginProp] = _firstTwoOnly(origin);
                    cache.xOffset = cache.yOffset = 0;
                    cache.force3D = _config.force3D;
                    cache.renderTransform = cache.svg ? _renderSVGTransforms : _supports3D ? _renderCSSTransforms : _renderNon3DTransforms;
                    cache.uncache = 0;
                    return cache;
                }, _firstTwoOnly = function _firstTwoOnly(value) {
                    return (value = value.split(" "))[0] + " " + value[1];
                }, _addPxTranslate = function _addPxTranslate(target, start, value) {
                    var unit = getUnit(start);
                    return _round(parseFloat(start) + parseFloat(_convertToUnit(target, "x", value + "px", unit))) + unit;
                }, _renderNon3DTransforms = function _renderNon3DTransforms(ratio, cache) {
                    cache.z = "0px";
                    cache.rotationY = cache.rotationX = "0deg";
                    cache.force3D = 0;
                    _renderCSSTransforms(ratio, cache);
                }, _zeroDeg = "0deg", _zeroPx = "0px", _endParenthesis = ") ", _renderCSSTransforms = function _renderCSSTransforms(ratio, cache) {
                    var _ref = cache || this, xPercent = _ref.xPercent, yPercent = _ref.yPercent, x = _ref.x, y = _ref.y, z = _ref.z, rotation = _ref.rotation, rotationY = _ref.rotationY, rotationX = _ref.rotationX, skewX = _ref.skewX, skewY = _ref.skewY, scaleX = _ref.scaleX, scaleY = _ref.scaleY, transformPerspective = _ref.transformPerspective, force3D = _ref.force3D, target = _ref.target, zOrigin = _ref.zOrigin, transforms = "", use3D = force3D === "auto" && ratio && ratio !== 1 || force3D === true;
                    if (zOrigin && (rotationX !== _zeroDeg || rotationY !== _zeroDeg)) {
                        var cos, angle = parseFloat(rotationY) * _DEG2RAD, a13 = Math.sin(angle), a33 = Math.cos(angle);
                        angle = parseFloat(rotationX) * _DEG2RAD;
                        cos = Math.cos(angle);
                        x = _addPxTranslate(target, x, a13 * cos * -zOrigin);
                        y = _addPxTranslate(target, y, -Math.sin(angle) * -zOrigin);
                        z = _addPxTranslate(target, z, a33 * cos * -zOrigin + zOrigin);
                    }
                    if (transformPerspective !== _zeroPx) transforms += "perspective(" + transformPerspective + _endParenthesis;
                    if (xPercent || yPercent) transforms += "translate(" + xPercent + "%, " + yPercent + "%) ";
                    if (use3D || x !== _zeroPx || y !== _zeroPx || z !== _zeroPx) transforms += z !== _zeroPx || use3D ? "translate3d(" + x + ", " + y + ", " + z + ") " : "translate(" + x + ", " + y + _endParenthesis;
                    if (rotation !== _zeroDeg) transforms += "rotate(" + rotation + _endParenthesis;
                    if (rotationY !== _zeroDeg) transforms += "rotateY(" + rotationY + _endParenthesis;
                    if (rotationX !== _zeroDeg) transforms += "rotateX(" + rotationX + _endParenthesis;
                    if (skewX !== _zeroDeg || skewY !== _zeroDeg) transforms += "skew(" + skewX + ", " + skewY + _endParenthesis;
                    if (scaleX !== 1 || scaleY !== 1) transforms += "scale(" + scaleX + ", " + scaleY + _endParenthesis;
                    target.style[_transformProp] = transforms || "translate(0, 0)";
                }, _renderSVGTransforms = function _renderSVGTransforms(ratio, cache) {
                    var a11, a21, a12, a22, temp, _ref2 = cache || this, xPercent = _ref2.xPercent, yPercent = _ref2.yPercent, x = _ref2.x, y = _ref2.y, rotation = _ref2.rotation, skewX = _ref2.skewX, skewY = _ref2.skewY, scaleX = _ref2.scaleX, scaleY = _ref2.scaleY, target = _ref2.target, xOrigin = _ref2.xOrigin, yOrigin = _ref2.yOrigin, xOffset = _ref2.xOffset, yOffset = _ref2.yOffset, forceCSS = _ref2.forceCSS, tx = parseFloat(x), ty = parseFloat(y);
                    rotation = parseFloat(rotation);
                    skewX = parseFloat(skewX);
                    skewY = parseFloat(skewY);
                    if (skewY) {
                        skewY = parseFloat(skewY);
                        skewX += skewY;
                        rotation += skewY;
                    }
                    if (rotation || skewX) {
                        rotation *= _DEG2RAD;
                        skewX *= _DEG2RAD;
                        a11 = Math.cos(rotation) * scaleX;
                        a21 = Math.sin(rotation) * scaleX;
                        a12 = Math.sin(rotation - skewX) * -scaleY;
                        a22 = Math.cos(rotation - skewX) * scaleY;
                        if (skewX) {
                            skewY *= _DEG2RAD;
                            temp = Math.tan(skewX - skewY);
                            temp = Math.sqrt(1 + temp * temp);
                            a12 *= temp;
                            a22 *= temp;
                            if (skewY) {
                                temp = Math.tan(skewY);
                                temp = Math.sqrt(1 + temp * temp);
                                a11 *= temp;
                                a21 *= temp;
                            }
                        }
                        a11 = _round(a11);
                        a21 = _round(a21);
                        a12 = _round(a12);
                        a22 = _round(a22);
                    } else {
                        a11 = scaleX;
                        a22 = scaleY;
                        a21 = a12 = 0;
                    }
                    if (tx && !~(x + "").indexOf("px") || ty && !~(y + "").indexOf("px")) {
                        tx = _convertToUnit(target, "x", x, "px");
                        ty = _convertToUnit(target, "y", y, "px");
                    }
                    if (xOrigin || yOrigin || xOffset || yOffset) {
                        tx = _round(tx + xOrigin - (xOrigin * a11 + yOrigin * a12) + xOffset);
                        ty = _round(ty + yOrigin - (xOrigin * a21 + yOrigin * a22) + yOffset);
                    }
                    if (xPercent || yPercent) {
                        temp = target.getBBox();
                        tx = _round(tx + xPercent / 100 * temp.width);
                        ty = _round(ty + yPercent / 100 * temp.height);
                    }
                    temp = "matrix(" + a11 + "," + a21 + "," + a12 + "," + a22 + "," + tx + "," + ty + ")";
                    target.setAttribute("transform", temp);
                    forceCSS && (target.style[_transformProp] = temp);
                }, _addRotationalPropTween = function _addRotationalPropTween(plugin, target, property, startNum, endValue) {
                    var direction, pt, cap = 360, isString = _isString(endValue), endNum = parseFloat(endValue) * (isString && ~endValue.indexOf("rad") ? _RAD2DEG : 1), change = endNum - startNum, finalValue = startNum + change + "deg";
                    if (isString) {
                        direction = endValue.split("_")[1];
                        if (direction === "short") {
                            change %= cap;
                            if (change !== change % (cap / 2)) change += change < 0 ? cap : -cap;
                        }
                        if (direction === "cw" && change < 0) change = (change + cap * _bigNum$1) % cap - ~~(change / cap) * cap; else if (direction === "ccw" && change > 0) change = (change - cap * _bigNum$1) % cap - ~~(change / cap) * cap;
                    }
                    plugin._pt = pt = new PropTween(plugin._pt, target, property, startNum, change, _renderPropWithEnd);
                    pt.e = finalValue;
                    pt.u = "deg";
                    plugin._props.push(property);
                    return pt;
                }, _assign = function _assign(target, source) {
                    for (var p in source) target[p] = source[p];
                    return target;
                }, _addRawTransformPTs = function _addRawTransformPTs(plugin, transforms, target) {
                    var endCache, p, startValue, endValue, startNum, endNum, startUnit, endUnit, startCache = _assign({}, target._gsap), exclude = "perspective,force3D,transformOrigin,svgOrigin", style = target.style;
                    if (startCache.svg) {
                        startValue = target.getAttribute("transform");
                        target.setAttribute("transform", "");
                        style[_transformProp] = transforms;
                        endCache = _parseTransform(target, 1);
                        _removeProperty(target, _transformProp);
                        target.setAttribute("transform", startValue);
                    } else {
                        startValue = getComputedStyle(target)[_transformProp];
                        style[_transformProp] = transforms;
                        endCache = _parseTransform(target, 1);
                        style[_transformProp] = startValue;
                    }
                    for (p in _transformProps) {
                        startValue = startCache[p];
                        endValue = endCache[p];
                        if (startValue !== endValue && exclude.indexOf(p) < 0) {
                            startUnit = getUnit(startValue);
                            endUnit = getUnit(endValue);
                            startNum = startUnit !== endUnit ? _convertToUnit(target, p, startValue, endUnit) : parseFloat(startValue);
                            endNum = parseFloat(endValue);
                            plugin._pt = new PropTween(plugin._pt, endCache, p, startNum, endNum - startNum, _renderCSSProp);
                            plugin._pt.u = endUnit || 0;
                            plugin._props.push(p);
                        }
                    }
                    _assign(endCache, startCache);
                };
                _forEachName("padding,margin,Width,Radius", (function(name, index) {
                    var t = "Top", r = "Right", b = "Bottom", l = "Left", props = (index < 3 ? [ t, r, b, l ] : [ t + l, t + r, b + r, b + l ]).map((function(side) {
                        return index < 2 ? name + side : "border" + side + name;
                    }));
                    _specialProps[index > 1 ? "border" + name : name] = function(plugin, target, property, endValue, tween) {
                        var a, vars;
                        if (arguments.length < 4) {
                            a = props.map((function(prop) {
                                return _get(plugin, prop, property);
                            }));
                            vars = a.join(" ");
                            return vars.split(a[0]).length === 5 ? a[0] : vars;
                        }
                        a = (endValue + "").split(" ");
                        vars = {};
                        props.forEach((function(prop, i) {
                            return vars[prop] = a[i] = a[i] || a[(i - 1) / 2 | 0];
                        }));
                        plugin.init(target, vars, tween);
                    };
                }));
                var CSSPlugin = {
                    name: "css",
                    register: _initCore,
                    targetTest: function targetTest(target) {
                        return target.style && target.nodeType;
                    },
                    init: function init(target, vars, tween, index, targets) {
                        var startValue, endValue, endNum, startNum, type, specialProp, p, startUnit, endUnit, relative, isTransformRelated, transformPropTween, cache, smooth, hasPriority, inlineProps, props = this._props, style = target.style, startAt = tween.vars.startAt;
                        _pluginInitted || _initCore();
                        this.styles = this.styles || _getStyleSaver(target);
                        inlineProps = this.styles.props;
                        this.tween = tween;
                        for (p in vars) {
                            if (p === "autoRound") continue;
                            endValue = vars[p];
                            if (_plugins[p] && _checkPlugin(p, vars, tween, index, target, targets)) continue;
                            type = typeof endValue;
                            specialProp = _specialProps[p];
                            if (type === "function") {
                                endValue = endValue.call(tween, index, target, targets);
                                type = typeof endValue;
                            }
                            if (type === "string" && ~endValue.indexOf("random(")) endValue = _replaceRandom(endValue);
                            if (specialProp) specialProp(this, target, p, endValue, tween) && (hasPriority = 1); else if (p.substr(0, 2) === "--") {
                                startValue = (getComputedStyle(target).getPropertyValue(p) + "").trim();
                                endValue += "";
                                _colorExp.lastIndex = 0;
                                if (!_colorExp.test(startValue)) {
                                    startUnit = getUnit(startValue);
                                    endUnit = getUnit(endValue);
                                }
                                endUnit ? startUnit !== endUnit && (startValue = _convertToUnit(target, p, startValue, endUnit) + endUnit) : startUnit && (endValue += startUnit);
                                this.add(style, "setProperty", startValue, endValue, index, targets, 0, 0, p);
                                props.push(p);
                                inlineProps.push(p, 0, style[p]);
                            } else if (type !== "undefined") {
                                if (startAt && p in startAt) {
                                    startValue = typeof startAt[p] === "function" ? startAt[p].call(tween, index, target, targets) : startAt[p];
                                    _isString(startValue) && ~startValue.indexOf("random(") && (startValue = _replaceRandom(startValue));
                                    getUnit(startValue + "") || startValue === "auto" || (startValue += _config.units[p] || getUnit(_get(target, p)) || "");
                                    (startValue + "").charAt(1) === "=" && (startValue = _get(target, p));
                                } else startValue = _get(target, p);
                                startNum = parseFloat(startValue);
                                relative = type === "string" && endValue.charAt(1) === "=" && endValue.substr(0, 2);
                                relative && (endValue = endValue.substr(2));
                                endNum = parseFloat(endValue);
                                if (p in _propertyAliases) {
                                    if (p === "autoAlpha") {
                                        if (startNum === 1 && _get(target, "visibility") === "hidden" && endNum) startNum = 0;
                                        inlineProps.push("visibility", 0, style.visibility);
                                        _addNonTweeningPT(this, style, "visibility", startNum ? "inherit" : "hidden", endNum ? "inherit" : "hidden", !endNum);
                                    }
                                    if (p !== "scale" && p !== "transform") {
                                        p = _propertyAliases[p];
                                        ~p.indexOf(",") && (p = p.split(",")[0]);
                                    }
                                }
                                isTransformRelated = p in _transformProps;
                                if (isTransformRelated) {
                                    this.styles.save(p);
                                    if (!transformPropTween) {
                                        cache = target._gsap;
                                        cache.renderTransform && !vars.parseTransform || _parseTransform(target, vars.parseTransform);
                                        smooth = vars.smoothOrigin !== false && cache.smooth;
                                        transformPropTween = this._pt = new PropTween(this._pt, style, _transformProp, 0, 1, cache.renderTransform, cache, 0, -1);
                                        transformPropTween.dep = 1;
                                    }
                                    if (p === "scale") {
                                        this._pt = new PropTween(this._pt, cache, "scaleY", cache.scaleY, (relative ? _parseRelative(cache.scaleY, relative + endNum) : endNum) - cache.scaleY || 0, _renderCSSProp);
                                        this._pt.u = 0;
                                        props.push("scaleY", p);
                                        p += "X";
                                    } else if (p === "transformOrigin") {
                                        inlineProps.push(_transformOriginProp, 0, style[_transformOriginProp]);
                                        endValue = _convertKeywordsToPercentages(endValue);
                                        if (cache.svg) _applySVGOrigin(target, endValue, 0, smooth, 0, this); else {
                                            endUnit = parseFloat(endValue.split(" ")[2]) || 0;
                                            endUnit !== cache.zOrigin && _addNonTweeningPT(this, cache, "zOrigin", cache.zOrigin, endUnit);
                                            _addNonTweeningPT(this, style, p, _firstTwoOnly(startValue), _firstTwoOnly(endValue));
                                        }
                                        continue;
                                    } else if (p === "svgOrigin") {
                                        _applySVGOrigin(target, endValue, 1, smooth, 0, this);
                                        continue;
                                    } else if (p in _rotationalProperties) {
                                        _addRotationalPropTween(this, cache, p, startNum, relative ? _parseRelative(startNum, relative + endValue) : endValue);
                                        continue;
                                    } else if (p === "smoothOrigin") {
                                        _addNonTweeningPT(this, cache, "smooth", cache.smooth, endValue);
                                        continue;
                                    } else if (p === "force3D") {
                                        cache[p] = endValue;
                                        continue;
                                    } else if (p === "transform") {
                                        _addRawTransformPTs(this, endValue, target);
                                        continue;
                                    }
                                } else if (!(p in style)) p = _checkPropPrefix(p) || p;
                                if (isTransformRelated || (endNum || endNum === 0) && (startNum || startNum === 0) && !_complexExp.test(endValue) && p in style) {
                                    startUnit = (startValue + "").substr((startNum + "").length);
                                    endNum || (endNum = 0);
                                    endUnit = getUnit(endValue) || (p in _config.units ? _config.units[p] : startUnit);
                                    startUnit !== endUnit && (startNum = _convertToUnit(target, p, startValue, endUnit));
                                    this._pt = new PropTween(this._pt, isTransformRelated ? cache : style, p, startNum, (relative ? _parseRelative(startNum, relative + endNum) : endNum) - startNum, !isTransformRelated && (endUnit === "px" || p === "zIndex") && vars.autoRound !== false ? _renderRoundedCSSProp : _renderCSSProp);
                                    this._pt.u = endUnit || 0;
                                    if (startUnit !== endUnit && endUnit !== "%") {
                                        this._pt.b = startValue;
                                        this._pt.r = _renderCSSPropWithBeginning;
                                    }
                                } else if (!(p in style)) {
                                    if (p in target) this.add(target, p, startValue || target[p], relative ? relative + endValue : endValue, index, targets); else if (p !== "parseTransform") {
                                        _missingPlugin(p, endValue);
                                        continue;
                                    }
                                } else _tweenComplexCSSString.call(this, target, p, startValue, relative ? relative + endValue : endValue);
                                isTransformRelated || (p in style ? inlineProps.push(p, 0, style[p]) : inlineProps.push(p, 1, startValue || target[p]));
                                props.push(p);
                            }
                        }
                        hasPriority && _sortPropTweensByPriority(this);
                    },
                    render: function render(ratio, data) {
                        if (data.tween._time || !_reverting$1()) {
                            var pt = data._pt;
                            while (pt) {
                                pt.r(ratio, pt.d);
                                pt = pt._next;
                            }
                        } else data.styles.revert();
                    },
                    get: _get,
                    aliases: _propertyAliases,
                    getSetter: function getSetter(target, property, plugin) {
                        var p = _propertyAliases[property];
                        p && p.indexOf(",") < 0 && (property = p);
                        return property in _transformProps && property !== _transformOriginProp && (target._gsap.x || _get(target, "x")) ? plugin && _recentSetterPlugin === plugin ? property === "scale" ? _setterScale : _setterTransform : (_recentSetterPlugin = plugin || {}) && (property === "scale" ? _setterScaleWithRender : _setterTransformWithRender) : target.style && !_isUndefined(target.style[property]) ? _setterCSSStyle : ~property.indexOf("-") ? _setterCSSProp : _getSetter(target, property);
                    },
                    core: {
                        _removeProperty,
                        _getMatrix
                    }
                };
                gsap.utils.checkPrefix = _checkPropPrefix;
                gsap.core.getStyleSaver = _getStyleSaver;
                (function(positionAndScale, rotation, others, aliases) {
                    var all = _forEachName(positionAndScale + "," + rotation + "," + others, (function(name) {
                        _transformProps[name] = 1;
                    }));
                    _forEachName(rotation, (function(name) {
                        _config.units[name] = "deg";
                        _rotationalProperties[name] = 1;
                    }));
                    _propertyAliases[all[13]] = positionAndScale + "," + rotation;
                    _forEachName(aliases, (function(name) {
                        var split = name.split(":");
                        _propertyAliases[split[1]] = all[split[0]];
                    }));
                })("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
                _forEachName("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", (function(name) {
                    _config.units[name] = "px";
                }));
                gsap.registerPlugin(CSSPlugin);
                var gsapWithCSS = gsap.registerPlugin(CSSPlugin) || gsap, TweenMaxWithCSS = gsapWithCSS.core.Tween;
                exports.Back = Back;
                exports.Bounce = Bounce;
                exports.CSSPlugin = CSSPlugin;
                exports.Circ = Circ;
                exports.Cubic = Cubic;
                exports.Elastic = Elastic;
                exports.Expo = Expo;
                exports.Linear = Linear;
                exports.Power0 = Power0;
                exports.Power1 = Power1;
                exports.Power2 = Power2;
                exports.Power3 = Power3;
                exports.Power4 = Power4;
                exports.Quad = Quad;
                exports.Quart = Quart;
                exports.Quint = Quint;
                exports.Sine = Sine;
                exports.SteppedEase = SteppedEase;
                exports.Strong = Strong;
                exports.TimelineLite = Timeline;
                exports.TimelineMax = Timeline;
                exports.TweenLite = Tween;
                exports.TweenMax = TweenMaxWithCSS;
                exports.default = gsapWithCSS;
                exports.gsap = gsapWithCSS;
                if (typeof window === "undefined" || window !== exports) Object.defineProperty(exports, "__esModule", {
                    value: true
                }); else delete window.default;
            }));
        }
    };
    var __webpack_module_cache__ = {};
    function __webpack_require__(moduleId) {
        var cachedModule = __webpack_module_cache__[moduleId];
        if (cachedModule !== void 0) return cachedModule.exports;
        var module = __webpack_module_cache__[moduleId] = {
            exports: {}
        };
        __webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        return module.exports;
    }
    (() => {
        "use strict";
        const modules_flsModules = {};
        function isWebp() {
            function testWebP(callback) {
                let webP = new Image;
                webP.onload = webP.onerror = function() {
                    callback(webP.height == 2);
                };
                webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
            }
            testWebP((function(support) {
                let className = support === true ? "webp" : "no-webp";
                document.documentElement.classList.add(className);
            }));
        }
        let isMobile = {
            Android: function() {
                return navigator.userAgent.match(/Android/i);
            },
            BlackBerry: function() {
                return navigator.userAgent.match(/BlackBerry/i);
            },
            iOS: function() {
                return navigator.userAgent.match(/iPhone|iPad|iPod/i);
            },
            Opera: function() {
                return navigator.userAgent.match(/Opera Mini/i);
            },
            Windows: function() {
                return navigator.userAgent.match(/IEMobile/i);
            },
            any: function() {
                return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
            }
        };
        function addLoadedClass() {
            if (!document.documentElement.classList.contains("loading")) window.addEventListener("load", (function() {
                setTimeout((function() {
                    document.documentElement.classList.add("loaded");
                }), 0);
            }));
        }
        let _slideUp = (target, duration = 500, showmore = 0) => {
            if (!target.classList.contains("_slide")) {
                target.classList.add("_slide");
                target.style.transitionProperty = "height, margin, padding";
                target.style.transitionDuration = duration + "ms";
                target.style.height = `${target.offsetHeight}px`;
                target.offsetHeight;
                target.style.overflow = "hidden";
                target.style.height = showmore ? `${showmore}px` : `0px`;
                target.style.paddingTop = 0;
                target.style.paddingBottom = 0;
                target.style.marginTop = 0;
                target.style.marginBottom = 0;
                window.setTimeout((() => {
                    target.hidden = !showmore ? true : false;
                    !showmore ? target.style.removeProperty("height") : null;
                    target.style.removeProperty("padding-top");
                    target.style.removeProperty("padding-bottom");
                    target.style.removeProperty("margin-top");
                    target.style.removeProperty("margin-bottom");
                    !showmore ? target.style.removeProperty("overflow") : null;
                    target.style.removeProperty("transition-duration");
                    target.style.removeProperty("transition-property");
                    target.classList.remove("_slide");
                    document.dispatchEvent(new CustomEvent("slideUpDone", {
                        detail: {
                            target
                        }
                    }));
                }), duration);
            }
        };
        let _slideDown = (target, duration = 500, showmore = 0) => {
            if (!target.classList.contains("_slide")) {
                target.classList.add("_slide");
                target.hidden = target.hidden ? false : null;
                showmore ? target.style.removeProperty("height") : null;
                let height = target.offsetHeight;
                target.style.overflow = "hidden";
                target.style.height = showmore ? `${showmore}px` : `0px`;
                target.style.paddingTop = 0;
                target.style.paddingBottom = 0;
                target.style.marginTop = 0;
                target.style.marginBottom = 0;
                target.offsetHeight;
                target.style.transitionProperty = "height, margin, padding";
                target.style.transitionDuration = duration + "ms";
                target.style.height = height + "px";
                target.style.removeProperty("padding-top");
                target.style.removeProperty("padding-bottom");
                target.style.removeProperty("margin-top");
                target.style.removeProperty("margin-bottom");
                window.setTimeout((() => {
                    target.style.removeProperty("height");
                    target.style.removeProperty("overflow");
                    target.style.removeProperty("transition-duration");
                    target.style.removeProperty("transition-property");
                    target.classList.remove("_slide");
                    document.dispatchEvent(new CustomEvent("slideDownDone", {
                        detail: {
                            target
                        }
                    }));
                }), duration);
            }
        };
        let _slideToggle = (target, duration = 500) => {
            if (target.hidden) return _slideDown(target, duration); else return _slideUp(target, duration);
        };
        function spollers() {
            const spollersArray = document.querySelectorAll("[data-spollers]");
            if (spollersArray.length > 0) {
                document.addEventListener("click", setSpollerAction);
                const spollersRegular = Array.from(spollersArray).filter((function(item, index, self) {
                    return !item.dataset.spollers.split(",")[0];
                }));
                if (spollersRegular.length) initSpollers(spollersRegular);
                let mdQueriesArray = dataMediaQueries(spollersArray, "spollers");
                if (mdQueriesArray && mdQueriesArray.length) mdQueriesArray.forEach((mdQueriesItem => {
                    mdQueriesItem.matchMedia.addEventListener("change", (function() {
                        initSpollers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                    }));
                    initSpollers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                }));
                function initSpollers(spollersArray, matchMedia = false) {
                    spollersArray.forEach((spollersBlock => {
                        spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;
                        if (matchMedia.matches || !matchMedia) {
                            spollersBlock.classList.add("_spoller-init");
                            initSpollerBody(spollersBlock);
                        } else {
                            spollersBlock.classList.remove("_spoller-init");
                            initSpollerBody(spollersBlock, false);
                        }
                    }));
                }
                function initSpollerBody(spollersBlock, hideSpollerBody = true) {
                    let spollerItems = spollersBlock.querySelectorAll("details");
                    if (spollerItems.length) spollerItems.forEach((spollerItem => {
                        let spollerTitle = spollerItem.querySelector("summary");
                        if (hideSpollerBody) {
                            spollerTitle.removeAttribute("tabindex");
                            if (!spollerItem.hasAttribute("data-open")) {
                                spollerItem.open = false;
                                spollerTitle.nextElementSibling.hidden = true;
                            } else {
                                spollerTitle.classList.add("_spoller-active");
                                spollerItem.open = true;
                            }
                        } else {
                            spollerTitle.setAttribute("tabindex", "-1");
                            spollerTitle.classList.remove("_spoller-active");
                            spollerItem.open = true;
                            spollerTitle.nextElementSibling.hidden = false;
                        }
                    }));
                }
                function setSpollerAction(e) {
                    const el = e.target;
                    if (el.closest("summary") && el.closest("[data-spollers]")) {
                        e.preventDefault();
                        if (el.closest("[data-spollers]").classList.contains("_spoller-init")) {
                            const spollerTitle = el.closest("summary");
                            const spollerBlock = spollerTitle.closest("details");
                            const spollersBlock = spollerTitle.closest("[data-spollers]");
                            const oneSpoller = spollersBlock.hasAttribute("data-one-spoller");
                            const scrollSpoller = spollerBlock.hasAttribute("data-spoller-scroll");
                            const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                            if (!spollersBlock.querySelectorAll("._slide").length) {
                                if (oneSpoller && !spollerBlock.open) hideSpollersBody(spollersBlock);
                                !spollerBlock.open ? spollerBlock.open = true : setTimeout((() => {
                                    spollerBlock.open = false;
                                }), spollerSpeed);
                                spollerTitle.classList.toggle("_spoller-active");
                                _slideToggle(spollerTitle.nextElementSibling, spollerSpeed);
                                if (scrollSpoller && spollerTitle.classList.contains("_spoller-active")) {
                                    const scrollSpollerValue = spollerBlock.dataset.spollerScroll;
                                    const scrollSpollerOffset = +scrollSpollerValue ? +scrollSpollerValue : 0;
                                    const scrollSpollerNoHeader = spollerBlock.hasAttribute("data-spoller-scroll-noheader") ? document.querySelector(".header").offsetHeight : 0;
                                    window.scrollTo({
                                        top: spollerBlock.offsetTop - (scrollSpollerOffset + scrollSpollerNoHeader),
                                        behavior: "smooth"
                                    });
                                }
                            }
                        }
                    }
                    if (!el.closest("[data-spollers]")) {
                        const spollersClose = document.querySelectorAll("[data-spoller-close]");
                        if (spollersClose.length) spollersClose.forEach((spollerClose => {
                            const spollersBlock = spollerClose.closest("[data-spollers]");
                            const spollerCloseBlock = spollerClose.parentNode;
                            if (spollersBlock.classList.contains("_spoller-init")) {
                                const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                                spollerClose.classList.remove("_spoller-active");
                                _slideUp(spollerClose.nextElementSibling, spollerSpeed);
                                setTimeout((() => {
                                    spollerCloseBlock.open = false;
                                }), spollerSpeed);
                            }
                        }));
                    }
                }
                function hideSpollersBody(spollersBlock) {
                    const spollerActiveBlock = spollersBlock.querySelector("details[open]");
                    if (spollerActiveBlock && !spollersBlock.querySelectorAll("._slide").length) {
                        const spollerActiveTitle = spollerActiveBlock.querySelector("summary");
                        const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                        spollerActiveTitle.classList.remove("_spoller-active");
                        _slideUp(spollerActiveTitle.nextElementSibling, spollerSpeed);
                        setTimeout((() => {
                            spollerActiveBlock.open = false;
                        }), spollerSpeed);
                    }
                }
            }
        }
        function uniqArray(array) {
            return array.filter((function(item, index, self) {
                return self.indexOf(item) === index;
            }));
        }
        function dataMediaQueries(array, dataSetValue) {
            const media = Array.from(array).filter((function(item, index, self) {
                if (item.dataset[dataSetValue]) return item.dataset[dataSetValue].split(",")[0];
            }));
            if (media.length) {
                const breakpointsArray = [];
                media.forEach((item => {
                    const params = item.dataset[dataSetValue];
                    const breakpoint = {};
                    const paramsArray = params.split(",");
                    breakpoint.value = paramsArray[0];
                    breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
                    breakpoint.item = item;
                    breakpointsArray.push(breakpoint);
                }));
                let mdQueries = breakpointsArray.map((function(item) {
                    return "(" + item.type + "-width: " + item.value + "px)," + item.value + "," + item.type;
                }));
                mdQueries = uniqArray(mdQueries);
                const mdQueriesArray = [];
                if (mdQueries.length) {
                    mdQueries.forEach((breakpoint => {
                        const paramsArray = breakpoint.split(",");
                        const mediaBreakpoint = paramsArray[1];
                        const mediaType = paramsArray[2];
                        const matchMedia = window.matchMedia(paramsArray[0]);
                        const itemsArray = breakpointsArray.filter((function(item) {
                            if (item.value === mediaBreakpoint && item.type === mediaType) return true;
                        }));
                        mdQueriesArray.push({
                            itemsArray,
                            matchMedia
                        });
                    }));
                    return mdQueriesArray;
                }
            }
        }
        function getWindow_getWindow(node) {
            if (node == null) return window;
            if (node.toString() !== "[object Window]") {
                var ownerDocument = node.ownerDocument;
                return ownerDocument ? ownerDocument.defaultView || window : window;
            }
            return node;
        }
        function isElement(node) {
            var OwnElement = getWindow_getWindow(node).Element;
            return node instanceof OwnElement || node instanceof Element;
        }
        function isHTMLElement(node) {
            var OwnElement = getWindow_getWindow(node).HTMLElement;
            return node instanceof OwnElement || node instanceof HTMLElement;
        }
        function isShadowRoot(node) {
            if (typeof ShadowRoot === "undefined") return false;
            var OwnElement = getWindow_getWindow(node).ShadowRoot;
            return node instanceof OwnElement || node instanceof ShadowRoot;
        }
        var math_max = Math.max;
        var math_min = Math.min;
        var round = Math.round;
        function getUAString() {
            var uaData = navigator.userAgentData;
            if (uaData != null && uaData.brands && Array.isArray(uaData.brands)) return uaData.brands.map((function(item) {
                return item.brand + "/" + item.version;
            })).join(" ");
            return navigator.userAgent;
        }
        function isLayoutViewport() {
            return !/^((?!chrome|android).)*safari/i.test(getUAString());
        }
        function getBoundingClientRect(element, includeScale, isFixedStrategy) {
            if (includeScale === void 0) includeScale = false;
            if (isFixedStrategy === void 0) isFixedStrategy = false;
            var clientRect = element.getBoundingClientRect();
            var scaleX = 1;
            var scaleY = 1;
            if (includeScale && isHTMLElement(element)) {
                scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
                scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
            }
            var _ref = isElement(element) ? getWindow_getWindow(element) : window, visualViewport = _ref.visualViewport;
            var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
            var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
            var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
            var width = clientRect.width / scaleX;
            var height = clientRect.height / scaleY;
            return {
                width,
                height,
                top: y,
                right: x + width,
                bottom: y + height,
                left: x,
                x,
                y
            };
        }
        function getWindowScroll(node) {
            var win = getWindow_getWindow(node);
            var scrollLeft = win.pageXOffset;
            var scrollTop = win.pageYOffset;
            return {
                scrollLeft,
                scrollTop
            };
        }
        function getHTMLElementScroll(element) {
            return {
                scrollLeft: element.scrollLeft,
                scrollTop: element.scrollTop
            };
        }
        function getNodeScroll(node) {
            if (node === getWindow_getWindow(node) || !isHTMLElement(node)) return getWindowScroll(node); else return getHTMLElementScroll(node);
        }
        function getNodeName(element) {
            return element ? (element.nodeName || "").toLowerCase() : null;
        }
        function getDocumentElement(element) {
            return ((isElement(element) ? element.ownerDocument : element.document) || window.document).documentElement;
        }
        function getWindowScrollBarX(element) {
            return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
        }
        function getComputedStyle_getComputedStyle(element) {
            return getWindow_getWindow(element).getComputedStyle(element);
        }
        function isScrollParent(element) {
            var _getComputedStyle = getComputedStyle_getComputedStyle(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
            return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
        }
        function isElementScaled(element) {
            var rect = element.getBoundingClientRect();
            var scaleX = round(rect.width) / element.offsetWidth || 1;
            var scaleY = round(rect.height) / element.offsetHeight || 1;
            return scaleX !== 1 || scaleY !== 1;
        }
        function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
            if (isFixed === void 0) isFixed = false;
            var isOffsetParentAnElement = isHTMLElement(offsetParent);
            var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
            var documentElement = getDocumentElement(offsetParent);
            var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed);
            var scroll = {
                scrollLeft: 0,
                scrollTop: 0
            };
            var offsets = {
                x: 0,
                y: 0
            };
            if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
                if (getNodeName(offsetParent) !== "body" || isScrollParent(documentElement)) scroll = getNodeScroll(offsetParent);
                if (isHTMLElement(offsetParent)) {
                    offsets = getBoundingClientRect(offsetParent, true);
                    offsets.x += offsetParent.clientLeft;
                    offsets.y += offsetParent.clientTop;
                } else if (documentElement) offsets.x = getWindowScrollBarX(documentElement);
            }
            return {
                x: rect.left + scroll.scrollLeft - offsets.x,
                y: rect.top + scroll.scrollTop - offsets.y,
                width: rect.width,
                height: rect.height
            };
        }
        function getLayoutRect(element) {
            var clientRect = getBoundingClientRect(element);
            var width = element.offsetWidth;
            var height = element.offsetHeight;
            if (Math.abs(clientRect.width - width) <= 1) width = clientRect.width;
            if (Math.abs(clientRect.height - height) <= 1) height = clientRect.height;
            return {
                x: element.offsetLeft,
                y: element.offsetTop,
                width,
                height
            };
        }
        function getParentNode(element) {
            if (getNodeName(element) === "html") return element;
            return element.assignedSlot || element.parentNode || (isShadowRoot(element) ? element.host : null) || getDocumentElement(element);
        }
        function getScrollParent(node) {
            if ([ "html", "body", "#document" ].indexOf(getNodeName(node)) >= 0) return node.ownerDocument.body;
            if (isHTMLElement(node) && isScrollParent(node)) return node;
            return getScrollParent(getParentNode(node));
        }
        function listScrollParents(element, list) {
            var _element$ownerDocumen;
            if (list === void 0) list = [];
            var scrollParent = getScrollParent(element);
            var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
            var win = getWindow_getWindow(scrollParent);
            var target = isBody ? [ win ].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
            var updatedList = list.concat(target);
            return isBody ? updatedList : updatedList.concat(listScrollParents(getParentNode(target)));
        }
        function isTableElement(element) {
            return [ "table", "td", "th" ].indexOf(getNodeName(element)) >= 0;
        }
        function getTrueOffsetParent(element) {
            if (!isHTMLElement(element) || getComputedStyle_getComputedStyle(element).position === "fixed") return null;
            return element.offsetParent;
        }
        function getContainingBlock(element) {
            var isFirefox = /firefox/i.test(getUAString());
            var isIE = /Trident/i.test(getUAString());
            if (isIE && isHTMLElement(element)) {
                var elementCss = getComputedStyle_getComputedStyle(element);
                if (elementCss.position === "fixed") return null;
            }
            var currentNode = getParentNode(element);
            if (isShadowRoot(currentNode)) currentNode = currentNode.host;
            while (isHTMLElement(currentNode) && [ "html", "body" ].indexOf(getNodeName(currentNode)) < 0) {
                var css = getComputedStyle_getComputedStyle(currentNode);
                if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || [ "transform", "perspective" ].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none") return currentNode; else currentNode = currentNode.parentNode;
            }
            return null;
        }
        function getOffsetParent(element) {
            var window = getWindow_getWindow(element);
            var offsetParent = getTrueOffsetParent(element);
            while (offsetParent && isTableElement(offsetParent) && getComputedStyle_getComputedStyle(offsetParent).position === "static") offsetParent = getTrueOffsetParent(offsetParent);
            if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle_getComputedStyle(offsetParent).position === "static")) return window;
            return offsetParent || getContainingBlock(element) || window;
        }
        var enums_top = "top";
        var bottom = "bottom";
        var right = "right";
        var left = "left";
        var auto = "auto";
        var basePlacements = [ enums_top, bottom, right, left ];
        var start = "start";
        var end = "end";
        var clippingParents = "clippingParents";
        var viewport = "viewport";
        var popper = "popper";
        var reference = "reference";
        var variationPlacements = basePlacements.reduce((function(acc, placement) {
            return acc.concat([ placement + "-" + start, placement + "-" + end ]);
        }), []);
        var enums_placements = [].concat(basePlacements, [ auto ]).reduce((function(acc, placement) {
            return acc.concat([ placement, placement + "-" + start, placement + "-" + end ]);
        }), []);
        var beforeRead = "beforeRead";
        var read = "read";
        var afterRead = "afterRead";
        var beforeMain = "beforeMain";
        var main = "main";
        var afterMain = "afterMain";
        var beforeWrite = "beforeWrite";
        var write = "write";
        var afterWrite = "afterWrite";
        var modifierPhases = [ beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite ];
        function order(modifiers) {
            var map = new Map;
            var visited = new Set;
            var result = [];
            modifiers.forEach((function(modifier) {
                map.set(modifier.name, modifier);
            }));
            function sort(modifier) {
                visited.add(modifier.name);
                var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
                requires.forEach((function(dep) {
                    if (!visited.has(dep)) {
                        var depModifier = map.get(dep);
                        if (depModifier) sort(depModifier);
                    }
                }));
                result.push(modifier);
            }
            modifiers.forEach((function(modifier) {
                if (!visited.has(modifier.name)) sort(modifier);
            }));
            return result;
        }
        function orderModifiers(modifiers) {
            var orderedModifiers = order(modifiers);
            return modifierPhases.reduce((function(acc, phase) {
                return acc.concat(orderedModifiers.filter((function(modifier) {
                    return modifier.phase === phase;
                })));
            }), []);
        }
        function debounce(fn) {
            var pending;
            return function() {
                if (!pending) pending = new Promise((function(resolve) {
                    Promise.resolve().then((function() {
                        pending = void 0;
                        resolve(fn());
                    }));
                }));
                return pending;
            };
        }
        function mergeByName(modifiers) {
            var merged = modifiers.reduce((function(merged, current) {
                var existing = merged[current.name];
                merged[current.name] = existing ? Object.assign({}, existing, current, {
                    options: Object.assign({}, existing.options, current.options),
                    data: Object.assign({}, existing.data, current.data)
                }) : current;
                return merged;
            }), {});
            return Object.keys(merged).map((function(key) {
                return merged[key];
            }));
        }
        var DEFAULT_OPTIONS = {
            placement: "bottom",
            modifiers: [],
            strategy: "absolute"
        };
        function areValidElements() {
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
            return !args.some((function(element) {
                return !(element && typeof element.getBoundingClientRect === "function");
            }));
        }
        function popperGenerator(generatorOptions) {
            if (generatorOptions === void 0) generatorOptions = {};
            var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
            return function createPopper(reference, popper, options) {
                if (options === void 0) options = defaultOptions;
                var state = {
                    placement: "bottom",
                    orderedModifiers: [],
                    options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
                    modifiersData: {},
                    elements: {
                        reference,
                        popper
                    },
                    attributes: {},
                    styles: {}
                };
                var effectCleanupFns = [];
                var isDestroyed = false;
                var instance = {
                    state,
                    setOptions: function setOptions(setOptionsAction) {
                        var options = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
                        cleanupModifierEffects();
                        state.options = Object.assign({}, defaultOptions, state.options, options);
                        state.scrollParents = {
                            reference: isElement(reference) ? listScrollParents(reference) : reference.contextElement ? listScrollParents(reference.contextElement) : [],
                            popper: listScrollParents(popper)
                        };
                        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers, state.options.modifiers)));
                        state.orderedModifiers = orderedModifiers.filter((function(m) {
                            return m.enabled;
                        }));
                        runModifierEffects();
                        return instance.update();
                    },
                    forceUpdate: function forceUpdate() {
                        if (isDestroyed) return;
                        var _state$elements = state.elements, reference = _state$elements.reference, popper = _state$elements.popper;
                        if (!areValidElements(reference, popper)) return;
                        state.rects = {
                            reference: getCompositeRect(reference, getOffsetParent(popper), state.options.strategy === "fixed"),
                            popper: getLayoutRect(popper)
                        };
                        state.reset = false;
                        state.placement = state.options.placement;
                        state.orderedModifiers.forEach((function(modifier) {
                            return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
                        }));
                        for (var index = 0; index < state.orderedModifiers.length; index++) {
                            if (state.reset === true) {
                                state.reset = false;
                                index = -1;
                                continue;
                            }
                            var _state$orderedModifie = state.orderedModifiers[index], fn = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
                            if (typeof fn === "function") state = fn({
                                state,
                                options: _options,
                                name,
                                instance
                            }) || state;
                        }
                    },
                    update: debounce((function() {
                        return new Promise((function(resolve) {
                            instance.forceUpdate();
                            resolve(state);
                        }));
                    })),
                    destroy: function destroy() {
                        cleanupModifierEffects();
                        isDestroyed = true;
                    }
                };
                if (!areValidElements(reference, popper)) return instance;
                instance.setOptions(options).then((function(state) {
                    if (!isDestroyed && options.onFirstUpdate) options.onFirstUpdate(state);
                }));
                function runModifierEffects() {
                    state.orderedModifiers.forEach((function(_ref) {
                        var name = _ref.name, _ref$options = _ref.options, options = _ref$options === void 0 ? {} : _ref$options, effect = _ref.effect;
                        if (typeof effect === "function") {
                            var cleanupFn = effect({
                                state,
                                name,
                                instance,
                                options
                            });
                            var noopFn = function noopFn() {};
                            effectCleanupFns.push(cleanupFn || noopFn);
                        }
                    }));
                }
                function cleanupModifierEffects() {
                    effectCleanupFns.forEach((function(fn) {
                        return fn();
                    }));
                    effectCleanupFns = [];
                }
                return instance;
            };
        }
        null && popperGenerator();
        var passive = {
            passive: true
        };
        function effect(_ref) {
            var state = _ref.state, instance = _ref.instance, options = _ref.options;
            var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
            var window = getWindow_getWindow(state.elements.popper);
            var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
            if (scroll) scrollParents.forEach((function(scrollParent) {
                scrollParent.addEventListener("scroll", instance.update, passive);
            }));
            if (resize) window.addEventListener("resize", instance.update, passive);
            return function() {
                if (scroll) scrollParents.forEach((function(scrollParent) {
                    scrollParent.removeEventListener("scroll", instance.update, passive);
                }));
                if (resize) window.removeEventListener("resize", instance.update, passive);
            };
        }
        const eventListeners = {
            name: "eventListeners",
            enabled: true,
            phase: "write",
            fn: function fn() {},
            effect,
            data: {}
        };
        function getBasePlacement(placement) {
            return placement.split("-")[0];
        }
        function getVariation(placement) {
            return placement.split("-")[1];
        }
        function getMainAxisFromPlacement(placement) {
            return [ "top", "bottom" ].indexOf(placement) >= 0 ? "x" : "y";
        }
        function computeOffsets(_ref) {
            var reference = _ref.reference, element = _ref.element, placement = _ref.placement;
            var basePlacement = placement ? getBasePlacement(placement) : null;
            var variation = placement ? getVariation(placement) : null;
            var commonX = reference.x + reference.width / 2 - element.width / 2;
            var commonY = reference.y + reference.height / 2 - element.height / 2;
            var offsets;
            switch (basePlacement) {
              case enums_top:
                offsets = {
                    x: commonX,
                    y: reference.y - element.height
                };
                break;

              case bottom:
                offsets = {
                    x: commonX,
                    y: reference.y + reference.height
                };
                break;

              case right:
                offsets = {
                    x: reference.x + reference.width,
                    y: commonY
                };
                break;

              case left:
                offsets = {
                    x: reference.x - element.width,
                    y: commonY
                };
                break;

              default:
                offsets = {
                    x: reference.x,
                    y: reference.y
                };
            }
            var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
            if (mainAxis != null) {
                var len = mainAxis === "y" ? "height" : "width";
                switch (variation) {
                  case start:
                    offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
                    break;

                  case end:
                    offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
                    break;

                  default:
                }
            }
            return offsets;
        }
        function popperOffsets(_ref) {
            var state = _ref.state, name = _ref.name;
            state.modifiersData[name] = computeOffsets({
                reference: state.rects.reference,
                element: state.rects.popper,
                strategy: "absolute",
                placement: state.placement
            });
        }
        const modifiers_popperOffsets = {
            name: "popperOffsets",
            enabled: true,
            phase: "read",
            fn: popperOffsets,
            data: {}
        };
        var unsetSides = {
            top: "auto",
            right: "auto",
            bottom: "auto",
            left: "auto"
        };
        function roundOffsetsByDPR(_ref, win) {
            var x = _ref.x, y = _ref.y;
            var dpr = win.devicePixelRatio || 1;
            return {
                x: round(x * dpr) / dpr || 0,
                y: round(y * dpr) / dpr || 0
            };
        }
        function mapToStyles(_ref2) {
            var _Object$assign2;
            var popper = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
            var _offsets$x = offsets.x, x = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y = _offsets$y === void 0 ? 0 : _offsets$y;
            var _ref3 = typeof roundOffsets === "function" ? roundOffsets({
                x,
                y
            }) : {
                x,
                y
            };
            x = _ref3.x;
            y = _ref3.y;
            var hasX = offsets.hasOwnProperty("x");
            var hasY = offsets.hasOwnProperty("y");
            var sideX = left;
            var sideY = enums_top;
            var win = window;
            if (adaptive) {
                var offsetParent = getOffsetParent(popper);
                var heightProp = "clientHeight";
                var widthProp = "clientWidth";
                if (offsetParent === getWindow_getWindow(popper)) {
                    offsetParent = getDocumentElement(popper);
                    if (getComputedStyle_getComputedStyle(offsetParent).position !== "static" && position === "absolute") {
                        heightProp = "scrollHeight";
                        widthProp = "scrollWidth";
                    }
                }
                offsetParent;
                if (placement === enums_top || (placement === left || placement === right) && variation === end) {
                    sideY = bottom;
                    var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : offsetParent[heightProp];
                    y -= offsetY - popperRect.height;
                    y *= gpuAcceleration ? 1 : -1;
                }
                if (placement === left || (placement === enums_top || placement === bottom) && variation === end) {
                    sideX = right;
                    var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : offsetParent[widthProp];
                    x -= offsetX - popperRect.width;
                    x *= gpuAcceleration ? 1 : -1;
                }
            }
            var commonStyles = Object.assign({
                position
            }, adaptive && unsetSides);
            var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
                x,
                y
            }, getWindow_getWindow(popper)) : {
                x,
                y
            };
            x = _ref4.x;
            y = _ref4.y;
            if (gpuAcceleration) {
                var _Object$assign;
                return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", 
                _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", 
                _Object$assign));
            }
            return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : "", 
            _Object$assign2[sideX] = hasX ? x + "px" : "", _Object$assign2.transform = "", _Object$assign2));
        }
        function computeStyles(_ref5) {
            var state = _ref5.state, options = _ref5.options;
            var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
            var commonStyles = {
                placement: getBasePlacement(state.placement),
                variation: getVariation(state.placement),
                popper: state.elements.popper,
                popperRect: state.rects.popper,
                gpuAcceleration,
                isFixed: state.options.strategy === "fixed"
            };
            if (state.modifiersData.popperOffsets != null) state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
                offsets: state.modifiersData.popperOffsets,
                position: state.options.strategy,
                adaptive,
                roundOffsets
            })));
            if (state.modifiersData.arrow != null) state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
                offsets: state.modifiersData.arrow,
                position: "absolute",
                adaptive: false,
                roundOffsets
            })));
            state.attributes.popper = Object.assign({}, state.attributes.popper, {
                "data-popper-placement": state.placement
            });
        }
        const modifiers_computeStyles = {
            name: "computeStyles",
            enabled: true,
            phase: "beforeWrite",
            fn: computeStyles,
            data: {}
        };
        function applyStyles(_ref) {
            var state = _ref.state;
            Object.keys(state.elements).forEach((function(name) {
                var style = state.styles[name] || {};
                var attributes = state.attributes[name] || {};
                var element = state.elements[name];
                if (!isHTMLElement(element) || !getNodeName(element)) return;
                Object.assign(element.style, style);
                Object.keys(attributes).forEach((function(name) {
                    var value = attributes[name];
                    if (value === false) element.removeAttribute(name); else element.setAttribute(name, value === true ? "" : value);
                }));
            }));
        }
        function applyStyles_effect(_ref2) {
            var state = _ref2.state;
            var initialStyles = {
                popper: {
                    position: state.options.strategy,
                    left: "0",
                    top: "0",
                    margin: "0"
                },
                arrow: {
                    position: "absolute"
                },
                reference: {}
            };
            Object.assign(state.elements.popper.style, initialStyles.popper);
            state.styles = initialStyles;
            if (state.elements.arrow) Object.assign(state.elements.arrow.style, initialStyles.arrow);
            return function() {
                Object.keys(state.elements).forEach((function(name) {
                    var element = state.elements[name];
                    var attributes = state.attributes[name] || {};
                    var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]);
                    var style = styleProperties.reduce((function(style, property) {
                        style[property] = "";
                        return style;
                    }), {});
                    if (!isHTMLElement(element) || !getNodeName(element)) return;
                    Object.assign(element.style, style);
                    Object.keys(attributes).forEach((function(attribute) {
                        element.removeAttribute(attribute);
                    }));
                }));
            };
        }
        const modifiers_applyStyles = {
            name: "applyStyles",
            enabled: true,
            phase: "write",
            fn: applyStyles,
            effect: applyStyles_effect,
            requires: [ "computeStyles" ]
        };
        function distanceAndSkiddingToXY(placement, rects, offset) {
            var basePlacement = getBasePlacement(placement);
            var invertDistance = [ left, enums_top ].indexOf(basePlacement) >= 0 ? -1 : 1;
            var _ref = typeof offset === "function" ? offset(Object.assign({}, rects, {
                placement
            })) : offset, skidding = _ref[0], distance = _ref[1];
            skidding = skidding || 0;
            distance = (distance || 0) * invertDistance;
            return [ left, right ].indexOf(basePlacement) >= 0 ? {
                x: distance,
                y: skidding
            } : {
                x: skidding,
                y: distance
            };
        }
        function offset(_ref2) {
            var state = _ref2.state, options = _ref2.options, name = _ref2.name;
            var _options$offset = options.offset, offset = _options$offset === void 0 ? [ 0, 0 ] : _options$offset;
            var data = enums_placements.reduce((function(acc, placement) {
                acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
                return acc;
            }), {});
            var _data$state$placement = data[state.placement], x = _data$state$placement.x, y = _data$state$placement.y;
            if (state.modifiersData.popperOffsets != null) {
                state.modifiersData.popperOffsets.x += x;
                state.modifiersData.popperOffsets.y += y;
            }
            state.modifiersData[name] = data;
        }
        const modifiers_offset = {
            name: "offset",
            enabled: true,
            phase: "main",
            requires: [ "popperOffsets" ],
            fn: offset
        };
        var hash = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        };
        function getOppositePlacement(placement) {
            return placement.replace(/left|right|bottom|top/g, (function(matched) {
                return hash[matched];
            }));
        }
        var getOppositeVariationPlacement_hash = {
            start: "end",
            end: "start"
        };
        function getOppositeVariationPlacement(placement) {
            return placement.replace(/start|end/g, (function(matched) {
                return getOppositeVariationPlacement_hash[matched];
            }));
        }
        function getViewportRect(element, strategy) {
            var win = getWindow_getWindow(element);
            var html = getDocumentElement(element);
            var visualViewport = win.visualViewport;
            var width = html.clientWidth;
            var height = html.clientHeight;
            var x = 0;
            var y = 0;
            if (visualViewport) {
                width = visualViewport.width;
                height = visualViewport.height;
                var layoutViewport = isLayoutViewport();
                if (layoutViewport || !layoutViewport && strategy === "fixed") {
                    x = visualViewport.offsetLeft;
                    y = visualViewport.offsetTop;
                }
            }
            return {
                width,
                height,
                x: x + getWindowScrollBarX(element),
                y
            };
        }
        function getDocumentRect(element) {
            var _element$ownerDocumen;
            var html = getDocumentElement(element);
            var winScroll = getWindowScroll(element);
            var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
            var width = math_max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
            var height = math_max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
            var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
            var y = -winScroll.scrollTop;
            if (getComputedStyle_getComputedStyle(body || html).direction === "rtl") x += math_max(html.clientWidth, body ? body.clientWidth : 0) - width;
            return {
                width,
                height,
                x,
                y
            };
        }
        function contains(parent, child) {
            var rootNode = child.getRootNode && child.getRootNode();
            if (parent.contains(child)) return true; else if (rootNode && isShadowRoot(rootNode)) {
                var next = child;
                do {
                    if (next && parent.isSameNode(next)) return true;
                    next = next.parentNode || next.host;
                } while (next);
            }
            return false;
        }
        function rectToClientRect(rect) {
            return Object.assign({}, rect, {
                left: rect.x,
                top: rect.y,
                right: rect.x + rect.width,
                bottom: rect.y + rect.height
            });
        }
        function getInnerBoundingClientRect(element, strategy) {
            var rect = getBoundingClientRect(element, false, strategy === "fixed");
            rect.top = rect.top + element.clientTop;
            rect.left = rect.left + element.clientLeft;
            rect.bottom = rect.top + element.clientHeight;
            rect.right = rect.left + element.clientWidth;
            rect.width = element.clientWidth;
            rect.height = element.clientHeight;
            rect.x = rect.left;
            rect.y = rect.top;
            return rect;
        }
        function getClientRectFromMixedType(element, clippingParent, strategy) {
            return clippingParent === viewport ? rectToClientRect(getViewportRect(element, strategy)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
        }
        function getClippingParents(element) {
            var clippingParents = listScrollParents(getParentNode(element));
            var canEscapeClipping = [ "absolute", "fixed" ].indexOf(getComputedStyle_getComputedStyle(element).position) >= 0;
            var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
            if (!isElement(clipperElement)) return [];
            return clippingParents.filter((function(clippingParent) {
                return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body";
            }));
        }
        function getClippingRect(element, boundary, rootBoundary, strategy) {
            var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
            var clippingParents = [].concat(mainClippingParents, [ rootBoundary ]);
            var firstClippingParent = clippingParents[0];
            var clippingRect = clippingParents.reduce((function(accRect, clippingParent) {
                var rect = getClientRectFromMixedType(element, clippingParent, strategy);
                accRect.top = math_max(rect.top, accRect.top);
                accRect.right = math_min(rect.right, accRect.right);
                accRect.bottom = math_min(rect.bottom, accRect.bottom);
                accRect.left = math_max(rect.left, accRect.left);
                return accRect;
            }), getClientRectFromMixedType(element, firstClippingParent, strategy));
            clippingRect.width = clippingRect.right - clippingRect.left;
            clippingRect.height = clippingRect.bottom - clippingRect.top;
            clippingRect.x = clippingRect.left;
            clippingRect.y = clippingRect.top;
            return clippingRect;
        }
        function getFreshSideObject() {
            return {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            };
        }
        function mergePaddingObject(paddingObject) {
            return Object.assign({}, getFreshSideObject(), paddingObject);
        }
        function expandToHashMap(value, keys) {
            return keys.reduce((function(hashMap, key) {
                hashMap[key] = value;
                return hashMap;
            }), {});
        }
        function detectOverflow(state, options) {
            if (options === void 0) options = {};
            var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$strategy = _options.strategy, strategy = _options$strategy === void 0 ? state.strategy : _options$strategy, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
            var paddingObject = mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
            var altContext = elementContext === popper ? reference : popper;
            var popperRect = state.rects.popper;
            var element = state.elements[altBoundary ? altContext : elementContext];
            var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary, strategy);
            var referenceClientRect = getBoundingClientRect(state.elements.reference);
            var popperOffsets = computeOffsets({
                reference: referenceClientRect,
                element: popperRect,
                strategy: "absolute",
                placement
            });
            var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets));
            var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;
            var overflowOffsets = {
                top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
                bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
                left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
                right: elementClientRect.right - clippingClientRect.right + paddingObject.right
            };
            var offsetData = state.modifiersData.offset;
            if (elementContext === popper && offsetData) {
                var offset = offsetData[placement];
                Object.keys(overflowOffsets).forEach((function(key) {
                    var multiply = [ right, bottom ].indexOf(key) >= 0 ? 1 : -1;
                    var axis = [ enums_top, bottom ].indexOf(key) >= 0 ? "y" : "x";
                    overflowOffsets[key] += offset[axis] * multiply;
                }));
            }
            return overflowOffsets;
        }
        function computeAutoPlacement(state, options) {
            if (options === void 0) options = {};
            var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? enums_placements : _options$allowedAutoP;
            var variation = getVariation(placement);
            var placements = variation ? flipVariations ? variationPlacements : variationPlacements.filter((function(placement) {
                return getVariation(placement) === variation;
            })) : basePlacements;
            var allowedPlacements = placements.filter((function(placement) {
                return allowedAutoPlacements.indexOf(placement) >= 0;
            }));
            if (allowedPlacements.length === 0) allowedPlacements = placements;
            var overflows = allowedPlacements.reduce((function(acc, placement) {
                acc[placement] = detectOverflow(state, {
                    placement,
                    boundary,
                    rootBoundary,
                    padding
                })[getBasePlacement(placement)];
                return acc;
            }), {});
            return Object.keys(overflows).sort((function(a, b) {
                return overflows[a] - overflows[b];
            }));
        }
        function getExpandedFallbackPlacements(placement) {
            if (getBasePlacement(placement) === auto) return [];
            var oppositePlacement = getOppositePlacement(placement);
            return [ getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement) ];
        }
        function flip(_ref) {
            var state = _ref.state, options = _ref.options, name = _ref.name;
            if (state.modifiersData[name]._skip) return;
            var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
            var preferredPlacement = state.options.placement;
            var basePlacement = getBasePlacement(preferredPlacement);
            var isBasePlacement = basePlacement === preferredPlacement;
            var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [ getOppositePlacement(preferredPlacement) ] : getExpandedFallbackPlacements(preferredPlacement));
            var placements = [ preferredPlacement ].concat(fallbackPlacements).reduce((function(acc, placement) {
                return acc.concat(getBasePlacement(placement) === auto ? computeAutoPlacement(state, {
                    placement,
                    boundary,
                    rootBoundary,
                    padding,
                    flipVariations,
                    allowedAutoPlacements
                }) : placement);
            }), []);
            var referenceRect = state.rects.reference;
            var popperRect = state.rects.popper;
            var checksMap = new Map;
            var makeFallbackChecks = true;
            var firstFittingPlacement = placements[0];
            for (var i = 0; i < placements.length; i++) {
                var placement = placements[i];
                var _basePlacement = getBasePlacement(placement);
                var isStartVariation = getVariation(placement) === start;
                var isVertical = [ enums_top, bottom ].indexOf(_basePlacement) >= 0;
                var len = isVertical ? "width" : "height";
                var overflow = detectOverflow(state, {
                    placement,
                    boundary,
                    rootBoundary,
                    altBoundary,
                    padding
                });
                var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : enums_top;
                if (referenceRect[len] > popperRect[len]) mainVariationSide = getOppositePlacement(mainVariationSide);
                var altVariationSide = getOppositePlacement(mainVariationSide);
                var checks = [];
                if (checkMainAxis) checks.push(overflow[_basePlacement] <= 0);
                if (checkAltAxis) checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
                if (checks.every((function(check) {
                    return check;
                }))) {
                    firstFittingPlacement = placement;
                    makeFallbackChecks = false;
                    break;
                }
                checksMap.set(placement, checks);
            }
            if (makeFallbackChecks) {
                var numberOfChecks = flipVariations ? 3 : 1;
                var _loop = function _loop(_i) {
                    var fittingPlacement = placements.find((function(placement) {
                        var checks = checksMap.get(placement);
                        if (checks) return checks.slice(0, _i).every((function(check) {
                            return check;
                        }));
                    }));
                    if (fittingPlacement) {
                        firstFittingPlacement = fittingPlacement;
                        return "break";
                    }
                };
                for (var _i = numberOfChecks; _i > 0; _i--) {
                    var _ret = _loop(_i);
                    if (_ret === "break") break;
                }
            }
            if (state.placement !== firstFittingPlacement) {
                state.modifiersData[name]._skip = true;
                state.placement = firstFittingPlacement;
                state.reset = true;
            }
        }
        const modifiers_flip = {
            name: "flip",
            enabled: true,
            phase: "main",
            fn: flip,
            requiresIfExists: [ "offset" ],
            data: {
                _skip: false
            }
        };
        function getAltAxis(axis) {
            return axis === "x" ? "y" : "x";
        }
        function within(min, value, max) {
            return math_max(min, math_min(value, max));
        }
        function withinMaxClamp(min, value, max) {
            var v = within(min, value, max);
            return v > max ? max : v;
        }
        function preventOverflow(_ref) {
            var state = _ref.state, options = _ref.options, name = _ref.name;
            var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
            var overflow = detectOverflow(state, {
                boundary,
                rootBoundary,
                padding,
                altBoundary
            });
            var basePlacement = getBasePlacement(state.placement);
            var variation = getVariation(state.placement);
            var isBasePlacement = !variation;
            var mainAxis = getMainAxisFromPlacement(basePlacement);
            var altAxis = getAltAxis(mainAxis);
            var popperOffsets = state.modifiersData.popperOffsets;
            var referenceRect = state.rects.reference;
            var popperRect = state.rects.popper;
            var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state.rects, {
                placement: state.placement
            })) : tetherOffset;
            var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
                mainAxis: tetherOffsetValue,
                altAxis: tetherOffsetValue
            } : Object.assign({
                mainAxis: 0,
                altAxis: 0
            }, tetherOffsetValue);
            var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
            var data = {
                x: 0,
                y: 0
            };
            if (!popperOffsets) return;
            if (checkMainAxis) {
                var _offsetModifierState$;
                var mainSide = mainAxis === "y" ? enums_top : left;
                var altSide = mainAxis === "y" ? bottom : right;
                var len = mainAxis === "y" ? "height" : "width";
                var offset = popperOffsets[mainAxis];
                var min = offset + overflow[mainSide];
                var max = offset - overflow[altSide];
                var additive = tether ? -popperRect[len] / 2 : 0;
                var minLen = variation === start ? referenceRect[len] : popperRect[len];
                var maxLen = variation === start ? -popperRect[len] : -referenceRect[len];
                var arrowElement = state.elements.arrow;
                var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
                    width: 0,
                    height: 0
                };
                var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : getFreshSideObject();
                var arrowPaddingMin = arrowPaddingObject[mainSide];
                var arrowPaddingMax = arrowPaddingObject[altSide];
                var arrowLen = within(0, referenceRect[len], arrowRect[len]);
                var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
                var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
                var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
                var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
                var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
                var tetherMin = offset + minOffset - offsetModifierValue - clientOffset;
                var tetherMax = offset + maxOffset - offsetModifierValue;
                var preventedOffset = within(tether ? math_min(min, tetherMin) : min, offset, tether ? math_max(max, tetherMax) : max);
                popperOffsets[mainAxis] = preventedOffset;
                data[mainAxis] = preventedOffset - offset;
            }
            if (checkAltAxis) {
                var _offsetModifierState$2;
                var _mainSide = mainAxis === "x" ? enums_top : left;
                var _altSide = mainAxis === "x" ? bottom : right;
                var _offset = popperOffsets[altAxis];
                var _len = altAxis === "y" ? "height" : "width";
                var _min = _offset + overflow[_mainSide];
                var _max = _offset - overflow[_altSide];
                var isOriginSide = [ enums_top, left ].indexOf(basePlacement) !== -1;
                var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
                var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
                var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
                var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
                popperOffsets[altAxis] = _preventedOffset;
                data[altAxis] = _preventedOffset - _offset;
            }
            state.modifiersData[name] = data;
        }
        const modifiers_preventOverflow = {
            name: "preventOverflow",
            enabled: true,
            phase: "main",
            fn: preventOverflow,
            requiresIfExists: [ "offset" ]
        };
        var toPaddingObject = function toPaddingObject(padding, state) {
            padding = typeof padding === "function" ? padding(Object.assign({}, state.rects, {
                placement: state.placement
            })) : padding;
            return mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
        };
        function arrow(_ref) {
            var _state$modifiersData$;
            var state = _ref.state, name = _ref.name, options = _ref.options;
            var arrowElement = state.elements.arrow;
            var popperOffsets = state.modifiersData.popperOffsets;
            var basePlacement = getBasePlacement(state.placement);
            var axis = getMainAxisFromPlacement(basePlacement);
            var isVertical = [ left, right ].indexOf(basePlacement) >= 0;
            var len = isVertical ? "height" : "width";
            if (!arrowElement || !popperOffsets) return;
            var paddingObject = toPaddingObject(options.padding, state);
            var arrowRect = getLayoutRect(arrowElement);
            var minProp = axis === "y" ? enums_top : left;
            var maxProp = axis === "y" ? bottom : right;
            var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
            var startDiff = popperOffsets[axis] - state.rects.reference[axis];
            var arrowOffsetParent = getOffsetParent(arrowElement);
            var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
            var centerToReference = endDiff / 2 - startDiff / 2;
            var min = paddingObject[minProp];
            var max = clientSize - arrowRect[len] - paddingObject[maxProp];
            var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
            var offset = within(min, center, max);
            var axisProp = axis;
            state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, 
            _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
        }
        function arrow_effect(_ref2) {
            var state = _ref2.state, options = _ref2.options;
            var _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
            if (arrowElement == null) return;
            if (typeof arrowElement === "string") {
                arrowElement = state.elements.popper.querySelector(arrowElement);
                if (!arrowElement) return;
            }
            if (!contains(state.elements.popper, arrowElement)) return;
            state.elements.arrow = arrowElement;
        }
        const modifiers_arrow = {
            name: "arrow",
            enabled: true,
            phase: "main",
            fn: arrow,
            effect: arrow_effect,
            requires: [ "popperOffsets" ],
            requiresIfExists: [ "preventOverflow" ]
        };
        function getSideOffsets(overflow, rect, preventedOffsets) {
            if (preventedOffsets === void 0) preventedOffsets = {
                x: 0,
                y: 0
            };
            return {
                top: overflow.top - rect.height - preventedOffsets.y,
                right: overflow.right - rect.width + preventedOffsets.x,
                bottom: overflow.bottom - rect.height + preventedOffsets.y,
                left: overflow.left - rect.width - preventedOffsets.x
            };
        }
        function isAnySideFullyClipped(overflow) {
            return [ enums_top, right, bottom, left ].some((function(side) {
                return overflow[side] >= 0;
            }));
        }
        function hide(_ref) {
            var state = _ref.state, name = _ref.name;
            var referenceRect = state.rects.reference;
            var popperRect = state.rects.popper;
            var preventedOffsets = state.modifiersData.preventOverflow;
            var referenceOverflow = detectOverflow(state, {
                elementContext: "reference"
            });
            var popperAltOverflow = detectOverflow(state, {
                altBoundary: true
            });
            var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
            var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
            var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
            var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
            state.modifiersData[name] = {
                referenceClippingOffsets,
                popperEscapeOffsets,
                isReferenceHidden,
                hasPopperEscaped
            };
            state.attributes.popper = Object.assign({}, state.attributes.popper, {
                "data-popper-reference-hidden": isReferenceHidden,
                "data-popper-escaped": hasPopperEscaped
            });
        }
        const modifiers_hide = {
            name: "hide",
            enabled: true,
            phase: "main",
            requiresIfExists: [ "preventOverflow" ],
            fn: hide
        };
        var defaultModifiers = [ eventListeners, modifiers_popperOffsets, modifiers_computeStyles, modifiers_applyStyles, modifiers_offset, modifiers_flip, modifiers_preventOverflow, modifiers_arrow, modifiers_hide ];
        var popper_createPopper = popperGenerator({
            defaultModifiers
        });
        var BOX_CLASS = "tippy-box";
        var CONTENT_CLASS = "tippy-content";
        var BACKDROP_CLASS = "tippy-backdrop";
        var ARROW_CLASS = "tippy-arrow";
        var SVG_ARROW_CLASS = "tippy-svg-arrow";
        var TOUCH_OPTIONS = {
            passive: true,
            capture: true
        };
        var TIPPY_DEFAULT_APPEND_TO = function TIPPY_DEFAULT_APPEND_TO() {
            return document.body;
        };
        function getValueAtIndexOrReturn(value, index, defaultValue) {
            if (Array.isArray(value)) {
                var v = value[index];
                return v == null ? Array.isArray(defaultValue) ? defaultValue[index] : defaultValue : v;
            }
            return value;
        }
        function isType(value, type) {
            var str = {}.toString.call(value);
            return str.indexOf("[object") === 0 && str.indexOf(type + "]") > -1;
        }
        function invokeWithArgsOrReturn(value, args) {
            return typeof value === "function" ? value.apply(void 0, args) : value;
        }
        function tippy_esm_debounce(fn, ms) {
            if (ms === 0) return fn;
            var timeout;
            return function(arg) {
                clearTimeout(timeout);
                timeout = setTimeout((function() {
                    fn(arg);
                }), ms);
            };
        }
        function splitBySpaces(value) {
            return value.split(/\s+/).filter(Boolean);
        }
        function normalizeToArray(value) {
            return [].concat(value);
        }
        function pushIfUnique(arr, value) {
            if (arr.indexOf(value) === -1) arr.push(value);
        }
        function unique(arr) {
            return arr.filter((function(item, index) {
                return arr.indexOf(item) === index;
            }));
        }
        function tippy_esm_getBasePlacement(placement) {
            return placement.split("-")[0];
        }
        function arrayFrom(value) {
            return [].slice.call(value);
        }
        function removeUndefinedProps(obj) {
            return Object.keys(obj).reduce((function(acc, key) {
                if (obj[key] !== void 0) acc[key] = obj[key];
                return acc;
            }), {});
        }
        function div() {
            return document.createElement("div");
        }
        function tippy_esm_isElement(value) {
            return [ "Element", "Fragment" ].some((function(type) {
                return isType(value, type);
            }));
        }
        function isNodeList(value) {
            return isType(value, "NodeList");
        }
        function isMouseEvent(value) {
            return isType(value, "MouseEvent");
        }
        function isReferenceElement(value) {
            return !!(value && value._tippy && value._tippy.reference === value);
        }
        function getArrayOfElements(value) {
            if (tippy_esm_isElement(value)) return [ value ];
            if (isNodeList(value)) return arrayFrom(value);
            if (Array.isArray(value)) return value;
            return arrayFrom(document.querySelectorAll(value));
        }
        function setTransitionDuration(els, value) {
            els.forEach((function(el) {
                if (el) el.style.transitionDuration = value + "ms";
            }));
        }
        function setVisibilityState(els, state) {
            els.forEach((function(el) {
                if (el) el.setAttribute("data-state", state);
            }));
        }
        function getOwnerDocument(elementOrElements) {
            var _element$ownerDocumen;
            var _normalizeToArray = normalizeToArray(elementOrElements), element = _normalizeToArray[0];
            return element != null && (_element$ownerDocumen = element.ownerDocument) != null && _element$ownerDocumen.body ? element.ownerDocument : document;
        }
        function isCursorOutsideInteractiveBorder(popperTreeData, event) {
            var clientX = event.clientX, clientY = event.clientY;
            return popperTreeData.every((function(_ref) {
                var popperRect = _ref.popperRect, popperState = _ref.popperState, props = _ref.props;
                var interactiveBorder = props.interactiveBorder;
                var basePlacement = tippy_esm_getBasePlacement(popperState.placement);
                var offsetData = popperState.modifiersData.offset;
                if (!offsetData) return true;
                var topDistance = basePlacement === "bottom" ? offsetData.top.y : 0;
                var bottomDistance = basePlacement === "top" ? offsetData.bottom.y : 0;
                var leftDistance = basePlacement === "right" ? offsetData.left.x : 0;
                var rightDistance = basePlacement === "left" ? offsetData.right.x : 0;
                var exceedsTop = popperRect.top - clientY + topDistance > interactiveBorder;
                var exceedsBottom = clientY - popperRect.bottom - bottomDistance > interactiveBorder;
                var exceedsLeft = popperRect.left - clientX + leftDistance > interactiveBorder;
                var exceedsRight = clientX - popperRect.right - rightDistance > interactiveBorder;
                return exceedsTop || exceedsBottom || exceedsLeft || exceedsRight;
            }));
        }
        function updateTransitionEndListener(box, action, listener) {
            var method = action + "EventListener";
            [ "transitionend", "webkitTransitionEnd" ].forEach((function(event) {
                box[method](event, listener);
            }));
        }
        function actualContains(parent, child) {
            var target = child;
            while (target) {
                var _target$getRootNode;
                if (parent.contains(target)) return true;
                target = target.getRootNode == null ? void 0 : (_target$getRootNode = target.getRootNode()) == null ? void 0 : _target$getRootNode.host;
            }
            return false;
        }
        var currentInput = {
            isTouch: false
        };
        var lastMouseMoveTime = 0;
        function onDocumentTouchStart() {
            if (currentInput.isTouch) return;
            currentInput.isTouch = true;
            if (window.performance) document.addEventListener("mousemove", onDocumentMouseMove);
        }
        function onDocumentMouseMove() {
            var now = performance.now();
            if (now - lastMouseMoveTime < 20) {
                currentInput.isTouch = false;
                document.removeEventListener("mousemove", onDocumentMouseMove);
            }
            lastMouseMoveTime = now;
        }
        function onWindowBlur() {
            var activeElement = document.activeElement;
            if (isReferenceElement(activeElement)) {
                var instance = activeElement._tippy;
                if (activeElement.blur && !instance.state.isVisible) activeElement.blur();
            }
        }
        function bindGlobalEventListeners() {
            document.addEventListener("touchstart", onDocumentTouchStart, TOUCH_OPTIONS);
            window.addEventListener("blur", onWindowBlur);
        }
        var isBrowser = typeof window !== "undefined" && typeof document !== "undefined";
        var isIE11 = isBrowser ? !!window.msCrypto : false;
        if (false) ;
        var pluginProps = {
            animateFill: false,
            followCursor: false,
            inlinePositioning: false,
            sticky: false
        };
        var renderProps = {
            allowHTML: false,
            animation: "fade",
            arrow: true,
            content: "",
            inertia: false,
            maxWidth: 350,
            role: "tooltip",
            theme: "",
            zIndex: 9999
        };
        var defaultProps = Object.assign({
            appendTo: TIPPY_DEFAULT_APPEND_TO,
            aria: {
                content: "auto",
                expanded: "auto"
            },
            delay: 0,
            duration: [ 300, 250 ],
            getReferenceClientRect: null,
            hideOnClick: true,
            ignoreAttributes: false,
            interactive: false,
            interactiveBorder: 2,
            interactiveDebounce: 0,
            moveTransition: "",
            offset: [ 0, 10 ],
            onAfterUpdate: function onAfterUpdate() {},
            onBeforeUpdate: function onBeforeUpdate() {},
            onCreate: function onCreate() {},
            onDestroy: function onDestroy() {},
            onHidden: function onHidden() {},
            onHide: function onHide() {},
            onMount: function onMount() {},
            onShow: function onShow() {},
            onShown: function onShown() {},
            onTrigger: function onTrigger() {},
            onUntrigger: function onUntrigger() {},
            onClickOutside: function onClickOutside() {},
            placement: "top",
            plugins: [],
            popperOptions: {},
            render: null,
            showOnCreate: false,
            touch: true,
            trigger: "mouseenter focus",
            triggerTarget: null
        }, pluginProps, renderProps);
        var defaultKeys = Object.keys(defaultProps);
        var setDefaultProps = function setDefaultProps(partialProps) {
            if (false) ;
            var keys = Object.keys(partialProps);
            keys.forEach((function(key) {
                defaultProps[key] = partialProps[key];
            }));
        };
        function getExtendedPassedProps(passedProps) {
            var plugins = passedProps.plugins || [];
            var pluginProps = plugins.reduce((function(acc, plugin) {
                var name = plugin.name, defaultValue = plugin.defaultValue;
                if (name) {
                    var _name;
                    acc[name] = passedProps[name] !== void 0 ? passedProps[name] : (_name = defaultProps[name]) != null ? _name : defaultValue;
                }
                return acc;
            }), {});
            return Object.assign({}, passedProps, pluginProps);
        }
        function getDataAttributeProps(reference, plugins) {
            var propKeys = plugins ? Object.keys(getExtendedPassedProps(Object.assign({}, defaultProps, {
                plugins
            }))) : defaultKeys;
            var props = propKeys.reduce((function(acc, key) {
                var valueAsString = (reference.getAttribute("data-tippy-" + key) || "").trim();
                if (!valueAsString) return acc;
                if (key === "content") acc[key] = valueAsString; else try {
                    acc[key] = JSON.parse(valueAsString);
                } catch (e) {
                    acc[key] = valueAsString;
                }
                return acc;
            }), {});
            return props;
        }
        function evaluateProps(reference, props) {
            var out = Object.assign({}, props, {
                content: invokeWithArgsOrReturn(props.content, [ reference ])
            }, props.ignoreAttributes ? {} : getDataAttributeProps(reference, props.plugins));
            out.aria = Object.assign({}, defaultProps.aria, out.aria);
            out.aria = {
                expanded: out.aria.expanded === "auto" ? props.interactive : out.aria.expanded,
                content: out.aria.content === "auto" ? props.interactive ? null : "describedby" : out.aria.content
            };
            return out;
        }
        var innerHTML = function innerHTML() {
            return "innerHTML";
        };
        function dangerouslySetInnerHTML(element, html) {
            element[innerHTML()] = html;
        }
        function createArrowElement(value) {
            var arrow = div();
            if (value === true) arrow.className = ARROW_CLASS; else {
                arrow.className = SVG_ARROW_CLASS;
                if (tippy_esm_isElement(value)) arrow.appendChild(value); else dangerouslySetInnerHTML(arrow, value);
            }
            return arrow;
        }
        function setContent(content, props) {
            if (tippy_esm_isElement(props.content)) {
                dangerouslySetInnerHTML(content, "");
                content.appendChild(props.content);
            } else if (typeof props.content !== "function") if (props.allowHTML) dangerouslySetInnerHTML(content, props.content); else content.textContent = props.content;
        }
        function getChildren(popper) {
            var box = popper.firstElementChild;
            var boxChildren = arrayFrom(box.children);
            return {
                box,
                content: boxChildren.find((function(node) {
                    return node.classList.contains(CONTENT_CLASS);
                })),
                arrow: boxChildren.find((function(node) {
                    return node.classList.contains(ARROW_CLASS) || node.classList.contains(SVG_ARROW_CLASS);
                })),
                backdrop: boxChildren.find((function(node) {
                    return node.classList.contains(BACKDROP_CLASS);
                }))
            };
        }
        function render(instance) {
            var popper = div();
            var box = div();
            box.className = BOX_CLASS;
            box.setAttribute("data-state", "hidden");
            box.setAttribute("tabindex", "-1");
            var content = div();
            content.className = CONTENT_CLASS;
            content.setAttribute("data-state", "hidden");
            setContent(content, instance.props);
            popper.appendChild(box);
            box.appendChild(content);
            onUpdate(instance.props, instance.props);
            function onUpdate(prevProps, nextProps) {
                var _getChildren = getChildren(popper), box = _getChildren.box, content = _getChildren.content, arrow = _getChildren.arrow;
                if (nextProps.theme) box.setAttribute("data-theme", nextProps.theme); else box.removeAttribute("data-theme");
                if (typeof nextProps.animation === "string") box.setAttribute("data-animation", nextProps.animation); else box.removeAttribute("data-animation");
                if (nextProps.inertia) box.setAttribute("data-inertia", ""); else box.removeAttribute("data-inertia");
                box.style.maxWidth = typeof nextProps.maxWidth === "number" ? nextProps.maxWidth + "px" : nextProps.maxWidth;
                if (nextProps.role) box.setAttribute("role", nextProps.role); else box.removeAttribute("role");
                if (prevProps.content !== nextProps.content || prevProps.allowHTML !== nextProps.allowHTML) setContent(content, instance.props);
                if (nextProps.arrow) {
                    if (!arrow) box.appendChild(createArrowElement(nextProps.arrow)); else if (prevProps.arrow !== nextProps.arrow) {
                        box.removeChild(arrow);
                        box.appendChild(createArrowElement(nextProps.arrow));
                    }
                } else if (arrow) box.removeChild(arrow);
            }
            return {
                popper,
                onUpdate
            };
        }
        render.$$tippy = true;
        var idCounter = 1;
        var mouseMoveListeners = [];
        var mountedInstances = [];
        function createTippy(reference, passedProps) {
            var props = evaluateProps(reference, Object.assign({}, defaultProps, getExtendedPassedProps(removeUndefinedProps(passedProps))));
            var showTimeout;
            var hideTimeout;
            var scheduleHideAnimationFrame;
            var isVisibleFromClick = false;
            var didHideDueToDocumentMouseDown = false;
            var didTouchMove = false;
            var ignoreOnFirstUpdate = false;
            var lastTriggerEvent;
            var currentTransitionEndListener;
            var onFirstUpdate;
            var listeners = [];
            var debouncedOnMouseMove = tippy_esm_debounce(onMouseMove, props.interactiveDebounce);
            var currentTarget;
            var id = idCounter++;
            var popperInstance = null;
            var plugins = unique(props.plugins);
            var state = {
                isEnabled: true,
                isVisible: false,
                isDestroyed: false,
                isMounted: false,
                isShown: false
            };
            var instance = {
                id,
                reference,
                popper: div(),
                popperInstance,
                props,
                state,
                plugins,
                clearDelayTimeouts,
                setProps,
                setContent,
                show,
                hide,
                hideWithInteractivity,
                enable,
                disable,
                unmount,
                destroy
            };
            if (!props.render) {
                if (false) ;
                return instance;
            }
            var _props$render = props.render(instance), popper = _props$render.popper, onUpdate = _props$render.onUpdate;
            popper.setAttribute("data-tippy-root", "");
            popper.id = "tippy-" + instance.id;
            instance.popper = popper;
            reference._tippy = instance;
            popper._tippy = instance;
            var pluginsHooks = plugins.map((function(plugin) {
                return plugin.fn(instance);
            }));
            var hasAriaExpanded = reference.hasAttribute("aria-expanded");
            addListeners();
            handleAriaExpandedAttribute();
            handleStyles();
            invokeHook("onCreate", [ instance ]);
            if (props.showOnCreate) scheduleShow();
            popper.addEventListener("mouseenter", (function() {
                if (instance.props.interactive && instance.state.isVisible) instance.clearDelayTimeouts();
            }));
            popper.addEventListener("mouseleave", (function() {
                if (instance.props.interactive && instance.props.trigger.indexOf("mouseenter") >= 0) getDocument().addEventListener("mousemove", debouncedOnMouseMove);
            }));
            return instance;
            function getNormalizedTouchSettings() {
                var touch = instance.props.touch;
                return Array.isArray(touch) ? touch : [ touch, 0 ];
            }
            function getIsCustomTouchBehavior() {
                return getNormalizedTouchSettings()[0] === "hold";
            }
            function getIsDefaultRenderFn() {
                var _instance$props$rende;
                return !!((_instance$props$rende = instance.props.render) != null && _instance$props$rende.$$tippy);
            }
            function getCurrentTarget() {
                return currentTarget || reference;
            }
            function getDocument() {
                var parent = getCurrentTarget().parentNode;
                return parent ? getOwnerDocument(parent) : document;
            }
            function getDefaultTemplateChildren() {
                return getChildren(popper);
            }
            function getDelay(isShow) {
                if (instance.state.isMounted && !instance.state.isVisible || currentInput.isTouch || lastTriggerEvent && lastTriggerEvent.type === "focus") return 0;
                return getValueAtIndexOrReturn(instance.props.delay, isShow ? 0 : 1, defaultProps.delay);
            }
            function handleStyles(fromHide) {
                if (fromHide === void 0) fromHide = false;
                popper.style.pointerEvents = instance.props.interactive && !fromHide ? "" : "none";
                popper.style.zIndex = "" + instance.props.zIndex;
            }
            function invokeHook(hook, args, shouldInvokePropsHook) {
                if (shouldInvokePropsHook === void 0) shouldInvokePropsHook = true;
                pluginsHooks.forEach((function(pluginHooks) {
                    if (pluginHooks[hook]) pluginHooks[hook].apply(pluginHooks, args);
                }));
                if (shouldInvokePropsHook) {
                    var _instance$props;
                    (_instance$props = instance.props)[hook].apply(_instance$props, args);
                }
            }
            function handleAriaContentAttribute() {
                var aria = instance.props.aria;
                if (!aria.content) return;
                var attr = "aria-" + aria.content;
                var id = popper.id;
                var nodes = normalizeToArray(instance.props.triggerTarget || reference);
                nodes.forEach((function(node) {
                    var currentValue = node.getAttribute(attr);
                    if (instance.state.isVisible) node.setAttribute(attr, currentValue ? currentValue + " " + id : id); else {
                        var nextValue = currentValue && currentValue.replace(id, "").trim();
                        if (nextValue) node.setAttribute(attr, nextValue); else node.removeAttribute(attr);
                    }
                }));
            }
            function handleAriaExpandedAttribute() {
                if (hasAriaExpanded || !instance.props.aria.expanded) return;
                var nodes = normalizeToArray(instance.props.triggerTarget || reference);
                nodes.forEach((function(node) {
                    if (instance.props.interactive) node.setAttribute("aria-expanded", instance.state.isVisible && node === getCurrentTarget() ? "true" : "false"); else node.removeAttribute("aria-expanded");
                }));
            }
            function cleanupInteractiveMouseListeners() {
                getDocument().removeEventListener("mousemove", debouncedOnMouseMove);
                mouseMoveListeners = mouseMoveListeners.filter((function(listener) {
                    return listener !== debouncedOnMouseMove;
                }));
            }
            function onDocumentPress(event) {
                if (currentInput.isTouch) if (didTouchMove || event.type === "mousedown") return;
                var actualTarget = event.composedPath && event.composedPath()[0] || event.target;
                if (instance.props.interactive && actualContains(popper, actualTarget)) return;
                if (normalizeToArray(instance.props.triggerTarget || reference).some((function(el) {
                    return actualContains(el, actualTarget);
                }))) {
                    if (currentInput.isTouch) return;
                    if (instance.state.isVisible && instance.props.trigger.indexOf("click") >= 0) return;
                } else invokeHook("onClickOutside", [ instance, event ]);
                if (instance.props.hideOnClick === true) {
                    instance.clearDelayTimeouts();
                    instance.hide();
                    didHideDueToDocumentMouseDown = true;
                    setTimeout((function() {
                        didHideDueToDocumentMouseDown = false;
                    }));
                    if (!instance.state.isMounted) removeDocumentPress();
                }
            }
            function onTouchMove() {
                didTouchMove = true;
            }
            function onTouchStart() {
                didTouchMove = false;
            }
            function addDocumentPress() {
                var doc = getDocument();
                doc.addEventListener("mousedown", onDocumentPress, true);
                doc.addEventListener("touchend", onDocumentPress, TOUCH_OPTIONS);
                doc.addEventListener("touchstart", onTouchStart, TOUCH_OPTIONS);
                doc.addEventListener("touchmove", onTouchMove, TOUCH_OPTIONS);
            }
            function removeDocumentPress() {
                var doc = getDocument();
                doc.removeEventListener("mousedown", onDocumentPress, true);
                doc.removeEventListener("touchend", onDocumentPress, TOUCH_OPTIONS);
                doc.removeEventListener("touchstart", onTouchStart, TOUCH_OPTIONS);
                doc.removeEventListener("touchmove", onTouchMove, TOUCH_OPTIONS);
            }
            function onTransitionedOut(duration, callback) {
                onTransitionEnd(duration, (function() {
                    if (!instance.state.isVisible && popper.parentNode && popper.parentNode.contains(popper)) callback();
                }));
            }
            function onTransitionedIn(duration, callback) {
                onTransitionEnd(duration, callback);
            }
            function onTransitionEnd(duration, callback) {
                var box = getDefaultTemplateChildren().box;
                function listener(event) {
                    if (event.target === box) {
                        updateTransitionEndListener(box, "remove", listener);
                        callback();
                    }
                }
                if (duration === 0) return callback();
                updateTransitionEndListener(box, "remove", currentTransitionEndListener);
                updateTransitionEndListener(box, "add", listener);
                currentTransitionEndListener = listener;
            }
            function on(eventType, handler, options) {
                if (options === void 0) options = false;
                var nodes = normalizeToArray(instance.props.triggerTarget || reference);
                nodes.forEach((function(node) {
                    node.addEventListener(eventType, handler, options);
                    listeners.push({
                        node,
                        eventType,
                        handler,
                        options
                    });
                }));
            }
            function addListeners() {
                if (getIsCustomTouchBehavior()) {
                    on("touchstart", onTrigger, {
                        passive: true
                    });
                    on("touchend", onMouseLeave, {
                        passive: true
                    });
                }
                splitBySpaces(instance.props.trigger).forEach((function(eventType) {
                    if (eventType === "manual") return;
                    on(eventType, onTrigger);
                    switch (eventType) {
                      case "mouseenter":
                        on("mouseleave", onMouseLeave);
                        break;

                      case "focus":
                        on(isIE11 ? "focusout" : "blur", onBlurOrFocusOut);
                        break;

                      case "focusin":
                        on("focusout", onBlurOrFocusOut);
                        break;
                    }
                }));
            }
            function removeListeners() {
                listeners.forEach((function(_ref) {
                    var node = _ref.node, eventType = _ref.eventType, handler = _ref.handler, options = _ref.options;
                    node.removeEventListener(eventType, handler, options);
                }));
                listeners = [];
            }
            function onTrigger(event) {
                var _lastTriggerEvent;
                var shouldScheduleClickHide = false;
                if (!instance.state.isEnabled || isEventListenerStopped(event) || didHideDueToDocumentMouseDown) return;
                var wasFocused = ((_lastTriggerEvent = lastTriggerEvent) == null ? void 0 : _lastTriggerEvent.type) === "focus";
                lastTriggerEvent = event;
                currentTarget = event.currentTarget;
                handleAriaExpandedAttribute();
                if (!instance.state.isVisible && isMouseEvent(event)) mouseMoveListeners.forEach((function(listener) {
                    return listener(event);
                }));
                if (event.type === "click" && (instance.props.trigger.indexOf("mouseenter") < 0 || isVisibleFromClick) && instance.props.hideOnClick !== false && instance.state.isVisible) shouldScheduleClickHide = true; else scheduleShow(event);
                if (event.type === "click") isVisibleFromClick = !shouldScheduleClickHide;
                if (shouldScheduleClickHide && !wasFocused) scheduleHide(event);
            }
            function onMouseMove(event) {
                var target = event.target;
                var isCursorOverReferenceOrPopper = getCurrentTarget().contains(target) || popper.contains(target);
                if (event.type === "mousemove" && isCursorOverReferenceOrPopper) return;
                var popperTreeData = getNestedPopperTree().concat(popper).map((function(popper) {
                    var _instance$popperInsta;
                    var instance = popper._tippy;
                    var state = (_instance$popperInsta = instance.popperInstance) == null ? void 0 : _instance$popperInsta.state;
                    if (state) return {
                        popperRect: popper.getBoundingClientRect(),
                        popperState: state,
                        props
                    };
                    return null;
                })).filter(Boolean);
                if (isCursorOutsideInteractiveBorder(popperTreeData, event)) {
                    cleanupInteractiveMouseListeners();
                    scheduleHide(event);
                }
            }
            function onMouseLeave(event) {
                var shouldBail = isEventListenerStopped(event) || instance.props.trigger.indexOf("click") >= 0 && isVisibleFromClick;
                if (shouldBail) return;
                if (instance.props.interactive) {
                    instance.hideWithInteractivity(event);
                    return;
                }
                scheduleHide(event);
            }
            function onBlurOrFocusOut(event) {
                if (instance.props.trigger.indexOf("focusin") < 0 && event.target !== getCurrentTarget()) return;
                if (instance.props.interactive && event.relatedTarget && popper.contains(event.relatedTarget)) return;
                scheduleHide(event);
            }
            function isEventListenerStopped(event) {
                return currentInput.isTouch ? getIsCustomTouchBehavior() !== event.type.indexOf("touch") >= 0 : false;
            }
            function createPopperInstance() {
                destroyPopperInstance();
                var _instance$props2 = instance.props, popperOptions = _instance$props2.popperOptions, placement = _instance$props2.placement, offset = _instance$props2.offset, getReferenceClientRect = _instance$props2.getReferenceClientRect, moveTransition = _instance$props2.moveTransition;
                var arrow = getIsDefaultRenderFn() ? getChildren(popper).arrow : null;
                var computedReference = getReferenceClientRect ? {
                    getBoundingClientRect: getReferenceClientRect,
                    contextElement: getReferenceClientRect.contextElement || getCurrentTarget()
                } : reference;
                var tippyModifier = {
                    name: "$$tippy",
                    enabled: true,
                    phase: "beforeWrite",
                    requires: [ "computeStyles" ],
                    fn: function fn(_ref2) {
                        var state = _ref2.state;
                        if (getIsDefaultRenderFn()) {
                            var _getDefaultTemplateCh = getDefaultTemplateChildren(), box = _getDefaultTemplateCh.box;
                            [ "placement", "reference-hidden", "escaped" ].forEach((function(attr) {
                                if (attr === "placement") box.setAttribute("data-placement", state.placement); else if (state.attributes.popper["data-popper-" + attr]) box.setAttribute("data-" + attr, ""); else box.removeAttribute("data-" + attr);
                            }));
                            state.attributes.popper = {};
                        }
                    }
                };
                var modifiers = [ {
                    name: "offset",
                    options: {
                        offset
                    }
                }, {
                    name: "preventOverflow",
                    options: {
                        padding: {
                            top: 2,
                            bottom: 2,
                            left: 5,
                            right: 5
                        }
                    }
                }, {
                    name: "flip",
                    options: {
                        padding: 5
                    }
                }, {
                    name: "computeStyles",
                    options: {
                        adaptive: !moveTransition
                    }
                }, tippyModifier ];
                if (getIsDefaultRenderFn() && arrow) modifiers.push({
                    name: "arrow",
                    options: {
                        element: arrow,
                        padding: 3
                    }
                });
                modifiers.push.apply(modifiers, (popperOptions == null ? void 0 : popperOptions.modifiers) || []);
                instance.popperInstance = popper_createPopper(computedReference, popper, Object.assign({}, popperOptions, {
                    placement,
                    onFirstUpdate,
                    modifiers
                }));
            }
            function destroyPopperInstance() {
                if (instance.popperInstance) {
                    instance.popperInstance.destroy();
                    instance.popperInstance = null;
                }
            }
            function mount() {
                var appendTo = instance.props.appendTo;
                var parentNode;
                var node = getCurrentTarget();
                if (instance.props.interactive && appendTo === TIPPY_DEFAULT_APPEND_TO || appendTo === "parent") parentNode = node.parentNode; else parentNode = invokeWithArgsOrReturn(appendTo, [ node ]);
                if (!parentNode.contains(popper)) parentNode.appendChild(popper);
                instance.state.isMounted = true;
                createPopperInstance();
                if (false) ;
            }
            function getNestedPopperTree() {
                return arrayFrom(popper.querySelectorAll("[data-tippy-root]"));
            }
            function scheduleShow(event) {
                instance.clearDelayTimeouts();
                if (event) invokeHook("onTrigger", [ instance, event ]);
                addDocumentPress();
                var delay = getDelay(true);
                var _getNormalizedTouchSe = getNormalizedTouchSettings(), touchValue = _getNormalizedTouchSe[0], touchDelay = _getNormalizedTouchSe[1];
                if (currentInput.isTouch && touchValue === "hold" && touchDelay) delay = touchDelay;
                if (delay) showTimeout = setTimeout((function() {
                    instance.show();
                }), delay); else instance.show();
            }
            function scheduleHide(event) {
                instance.clearDelayTimeouts();
                invokeHook("onUntrigger", [ instance, event ]);
                if (!instance.state.isVisible) {
                    removeDocumentPress();
                    return;
                }
                if (instance.props.trigger.indexOf("mouseenter") >= 0 && instance.props.trigger.indexOf("click") >= 0 && [ "mouseleave", "mousemove" ].indexOf(event.type) >= 0 && isVisibleFromClick) return;
                var delay = getDelay(false);
                if (delay) hideTimeout = setTimeout((function() {
                    if (instance.state.isVisible) instance.hide();
                }), delay); else scheduleHideAnimationFrame = requestAnimationFrame((function() {
                    instance.hide();
                }));
            }
            function enable() {
                instance.state.isEnabled = true;
            }
            function disable() {
                instance.hide();
                instance.state.isEnabled = false;
            }
            function clearDelayTimeouts() {
                clearTimeout(showTimeout);
                clearTimeout(hideTimeout);
                cancelAnimationFrame(scheduleHideAnimationFrame);
            }
            function setProps(partialProps) {
                if (false) ;
                if (instance.state.isDestroyed) return;
                invokeHook("onBeforeUpdate", [ instance, partialProps ]);
                removeListeners();
                var prevProps = instance.props;
                var nextProps = evaluateProps(reference, Object.assign({}, prevProps, removeUndefinedProps(partialProps), {
                    ignoreAttributes: true
                }));
                instance.props = nextProps;
                addListeners();
                if (prevProps.interactiveDebounce !== nextProps.interactiveDebounce) {
                    cleanupInteractiveMouseListeners();
                    debouncedOnMouseMove = tippy_esm_debounce(onMouseMove, nextProps.interactiveDebounce);
                }
                if (prevProps.triggerTarget && !nextProps.triggerTarget) normalizeToArray(prevProps.triggerTarget).forEach((function(node) {
                    node.removeAttribute("aria-expanded");
                })); else if (nextProps.triggerTarget) reference.removeAttribute("aria-expanded");
                handleAriaExpandedAttribute();
                handleStyles();
                if (onUpdate) onUpdate(prevProps, nextProps);
                if (instance.popperInstance) {
                    createPopperInstance();
                    getNestedPopperTree().forEach((function(nestedPopper) {
                        requestAnimationFrame(nestedPopper._tippy.popperInstance.forceUpdate);
                    }));
                }
                invokeHook("onAfterUpdate", [ instance, partialProps ]);
            }
            function setContent(content) {
                instance.setProps({
                    content
                });
            }
            function show() {
                if (false) ;
                var isAlreadyVisible = instance.state.isVisible;
                var isDestroyed = instance.state.isDestroyed;
                var isDisabled = !instance.state.isEnabled;
                var isTouchAndTouchDisabled = currentInput.isTouch && !instance.props.touch;
                var duration = getValueAtIndexOrReturn(instance.props.duration, 0, defaultProps.duration);
                if (isAlreadyVisible || isDestroyed || isDisabled || isTouchAndTouchDisabled) return;
                if (getCurrentTarget().hasAttribute("disabled")) return;
                invokeHook("onShow", [ instance ], false);
                if (instance.props.onShow(instance) === false) return;
                instance.state.isVisible = true;
                if (getIsDefaultRenderFn()) popper.style.visibility = "visible";
                handleStyles();
                addDocumentPress();
                if (!instance.state.isMounted) popper.style.transition = "none";
                if (getIsDefaultRenderFn()) {
                    var _getDefaultTemplateCh2 = getDefaultTemplateChildren(), box = _getDefaultTemplateCh2.box, content = _getDefaultTemplateCh2.content;
                    setTransitionDuration([ box, content ], 0);
                }
                onFirstUpdate = function onFirstUpdate() {
                    var _instance$popperInsta2;
                    if (!instance.state.isVisible || ignoreOnFirstUpdate) return;
                    ignoreOnFirstUpdate = true;
                    void popper.offsetHeight;
                    popper.style.transition = instance.props.moveTransition;
                    if (getIsDefaultRenderFn() && instance.props.animation) {
                        var _getDefaultTemplateCh3 = getDefaultTemplateChildren(), _box = _getDefaultTemplateCh3.box, _content = _getDefaultTemplateCh3.content;
                        setTransitionDuration([ _box, _content ], duration);
                        setVisibilityState([ _box, _content ], "visible");
                    }
                    handleAriaContentAttribute();
                    handleAriaExpandedAttribute();
                    pushIfUnique(mountedInstances, instance);
                    (_instance$popperInsta2 = instance.popperInstance) == null ? void 0 : _instance$popperInsta2.forceUpdate();
                    invokeHook("onMount", [ instance ]);
                    if (instance.props.animation && getIsDefaultRenderFn()) onTransitionedIn(duration, (function() {
                        instance.state.isShown = true;
                        invokeHook("onShown", [ instance ]);
                    }));
                };
                mount();
            }
            function hide() {
                if (false) ;
                var isAlreadyHidden = !instance.state.isVisible;
                var isDestroyed = instance.state.isDestroyed;
                var isDisabled = !instance.state.isEnabled;
                var duration = getValueAtIndexOrReturn(instance.props.duration, 1, defaultProps.duration);
                if (isAlreadyHidden || isDestroyed || isDisabled) return;
                invokeHook("onHide", [ instance ], false);
                if (instance.props.onHide(instance) === false) return;
                instance.state.isVisible = false;
                instance.state.isShown = false;
                ignoreOnFirstUpdate = false;
                isVisibleFromClick = false;
                if (getIsDefaultRenderFn()) popper.style.visibility = "hidden";
                cleanupInteractiveMouseListeners();
                removeDocumentPress();
                handleStyles(true);
                if (getIsDefaultRenderFn()) {
                    var _getDefaultTemplateCh4 = getDefaultTemplateChildren(), box = _getDefaultTemplateCh4.box, content = _getDefaultTemplateCh4.content;
                    if (instance.props.animation) {
                        setTransitionDuration([ box, content ], duration);
                        setVisibilityState([ box, content ], "hidden");
                    }
                }
                handleAriaContentAttribute();
                handleAriaExpandedAttribute();
                if (instance.props.animation) {
                    if (getIsDefaultRenderFn()) onTransitionedOut(duration, instance.unmount);
                } else instance.unmount();
            }
            function hideWithInteractivity(event) {
                if (false) ;
                getDocument().addEventListener("mousemove", debouncedOnMouseMove);
                pushIfUnique(mouseMoveListeners, debouncedOnMouseMove);
                debouncedOnMouseMove(event);
            }
            function unmount() {
                if (false) ;
                if (instance.state.isVisible) instance.hide();
                if (!instance.state.isMounted) return;
                destroyPopperInstance();
                getNestedPopperTree().forEach((function(nestedPopper) {
                    nestedPopper._tippy.unmount();
                }));
                if (popper.parentNode) popper.parentNode.removeChild(popper);
                mountedInstances = mountedInstances.filter((function(i) {
                    return i !== instance;
                }));
                instance.state.isMounted = false;
                invokeHook("onHidden", [ instance ]);
            }
            function destroy() {
                if (false) ;
                if (instance.state.isDestroyed) return;
                instance.clearDelayTimeouts();
                instance.unmount();
                removeListeners();
                delete reference._tippy;
                instance.state.isDestroyed = true;
                invokeHook("onDestroy", [ instance ]);
            }
        }
        function tippy(targets, optionalProps) {
            if (optionalProps === void 0) optionalProps = {};
            var plugins = defaultProps.plugins.concat(optionalProps.plugins || []);
            if (false) ;
            bindGlobalEventListeners();
            var passedProps = Object.assign({}, optionalProps, {
                plugins
            });
            var elements = getArrayOfElements(targets);
            if (false) ;
            var instances = elements.reduce((function(acc, reference) {
                var instance = reference && createTippy(reference, passedProps);
                if (instance) acc.push(instance);
                return acc;
            }), []);
            return tippy_esm_isElement(targets) ? instances[0] : instances;
        }
        tippy.defaultProps = defaultProps;
        tippy.setDefaultProps = setDefaultProps;
        tippy.currentInput = currentInput;
        Object.assign({}, modifiers_applyStyles, {
            effect: function effect(_ref) {
                var state = _ref.state;
                var initialStyles = {
                    popper: {
                        position: state.options.strategy,
                        left: "0",
                        top: "0",
                        margin: "0"
                    },
                    arrow: {
                        position: "absolute"
                    },
                    reference: {}
                };
                Object.assign(state.elements.popper.style, initialStyles.popper);
                state.styles = initialStyles;
                if (state.elements.arrow) Object.assign(state.elements.arrow.style, initialStyles.arrow);
            }
        });
        tippy.setDefaultProps({
            render
        });
        const tippy_esm = tippy;
        modules_flsModules.tippy = tippy_esm("[data-tippy-content]", {
            animation: "shift-toward"
        });
        window.addEventListener("load", tippyInit);
        function tippyInit() {
            modules_flsModules.tippyBullets = tippy_esm(document.querySelectorAll(".fp-bullet"), {
                animation: "shift-toward",
                placement: "bottom"
            });
            modules_flsModules.tippyBullets[0].setContent("Home");
            modules_flsModules.tippyBullets[1].setContent("Portfolio");
            modules_flsModules.tippyBullets[2].setContent("Technologies");
        }
        function ssr_window_esm_isObject(obj) {
            return obj !== null && typeof obj === "object" && "constructor" in obj && obj.constructor === Object;
        }
        function extend(target, src) {
            if (target === void 0) target = {};
            if (src === void 0) src = {};
            Object.keys(src).forEach((key => {
                if (typeof target[key] === "undefined") target[key] = src[key]; else if (ssr_window_esm_isObject(src[key]) && ssr_window_esm_isObject(target[key]) && Object.keys(src[key]).length > 0) extend(target[key], src[key]);
            }));
        }
        const ssrDocument = {
            body: {},
            addEventListener() {},
            removeEventListener() {},
            activeElement: {
                blur() {},
                nodeName: ""
            },
            querySelector() {
                return null;
            },
            querySelectorAll() {
                return [];
            },
            getElementById() {
                return null;
            },
            createEvent() {
                return {
                    initEvent() {}
                };
            },
            createElement() {
                return {
                    children: [],
                    childNodes: [],
                    style: {},
                    setAttribute() {},
                    getElementsByTagName() {
                        return [];
                    }
                };
            },
            createElementNS() {
                return {};
            },
            importNode() {
                return null;
            },
            location: {
                hash: "",
                host: "",
                hostname: "",
                href: "",
                origin: "",
                pathname: "",
                protocol: "",
                search: ""
            }
        };
        function ssr_window_esm_getDocument() {
            const doc = typeof document !== "undefined" ? document : {};
            extend(doc, ssrDocument);
            return doc;
        }
        const ssrWindow = {
            document: ssrDocument,
            navigator: {
                userAgent: ""
            },
            location: {
                hash: "",
                host: "",
                hostname: "",
                href: "",
                origin: "",
                pathname: "",
                protocol: "",
                search: ""
            },
            history: {
                replaceState() {},
                pushState() {},
                go() {},
                back() {}
            },
            CustomEvent: function CustomEvent() {
                return this;
            },
            addEventListener() {},
            removeEventListener() {},
            getComputedStyle() {
                return {
                    getPropertyValue() {
                        return "";
                    }
                };
            },
            Image() {},
            Date() {},
            screen: {},
            setTimeout() {},
            clearTimeout() {},
            matchMedia() {
                return {};
            },
            requestAnimationFrame(callback) {
                if (typeof setTimeout === "undefined") {
                    callback();
                    return null;
                }
                return setTimeout(callback, 0);
            },
            cancelAnimationFrame(id) {
                if (typeof setTimeout === "undefined") return;
                clearTimeout(id);
            }
        };
        function ssr_window_esm_getWindow() {
            const win = typeof window !== "undefined" ? window : {};
            extend(win, ssrWindow);
            return win;
        }
        function utils_classesToTokens(classes) {
            if (classes === void 0) classes = "";
            return classes.trim().split(" ").filter((c => !!c.trim()));
        }
        function deleteProps(obj) {
            const object = obj;
            Object.keys(object).forEach((key => {
                try {
                    object[key] = null;
                } catch (e) {}
                try {
                    delete object[key];
                } catch (e) {}
            }));
        }
        function utils_nextTick(callback, delay) {
            if (delay === void 0) delay = 0;
            return setTimeout(callback, delay);
        }
        function utils_now() {
            return Date.now();
        }
        function utils_getComputedStyle(el) {
            const window = ssr_window_esm_getWindow();
            let style;
            if (window.getComputedStyle) style = window.getComputedStyle(el, null);
            if (!style && el.currentStyle) style = el.currentStyle;
            if (!style) style = el.style;
            return style;
        }
        function utils_getTranslate(el, axis) {
            if (axis === void 0) axis = "x";
            const window = ssr_window_esm_getWindow();
            let matrix;
            let curTransform;
            let transformMatrix;
            const curStyle = utils_getComputedStyle(el);
            if (window.WebKitCSSMatrix) {
                curTransform = curStyle.transform || curStyle.webkitTransform;
                if (curTransform.split(",").length > 6) curTransform = curTransform.split(", ").map((a => a.replace(",", "."))).join(", ");
                transformMatrix = new window.WebKitCSSMatrix(curTransform === "none" ? "" : curTransform);
            } else {
                transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,");
                matrix = transformMatrix.toString().split(",");
            }
            if (axis === "x") if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41; else if (matrix.length === 16) curTransform = parseFloat(matrix[12]); else curTransform = parseFloat(matrix[4]);
            if (axis === "y") if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42; else if (matrix.length === 16) curTransform = parseFloat(matrix[13]); else curTransform = parseFloat(matrix[5]);
            return curTransform || 0;
        }
        function utils_isObject(o) {
            return typeof o === "object" && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === "Object";
        }
        function isNode(node) {
            if (typeof window !== "undefined" && typeof window.HTMLElement !== "undefined") return node instanceof HTMLElement;
            return node && (node.nodeType === 1 || node.nodeType === 11);
        }
        function utils_extend() {
            const to = Object(arguments.length <= 0 ? void 0 : arguments[0]);
            const noExtend = [ "__proto__", "constructor", "prototype" ];
            for (let i = 1; i < arguments.length; i += 1) {
                const nextSource = i < 0 || arguments.length <= i ? void 0 : arguments[i];
                if (nextSource !== void 0 && nextSource !== null && !isNode(nextSource)) {
                    const keysArray = Object.keys(Object(nextSource)).filter((key => noExtend.indexOf(key) < 0));
                    for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
                        const nextKey = keysArray[nextIndex];
                        const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
                        if (desc !== void 0 && desc.enumerable) if (utils_isObject(to[nextKey]) && utils_isObject(nextSource[nextKey])) if (nextSource[nextKey].__swiper__) to[nextKey] = nextSource[nextKey]; else utils_extend(to[nextKey], nextSource[nextKey]); else if (!utils_isObject(to[nextKey]) && utils_isObject(nextSource[nextKey])) {
                            to[nextKey] = {};
                            if (nextSource[nextKey].__swiper__) to[nextKey] = nextSource[nextKey]; else utils_extend(to[nextKey], nextSource[nextKey]);
                        } else to[nextKey] = nextSource[nextKey];
                    }
                }
            }
            return to;
        }
        function utils_setCSSProperty(el, varName, varValue) {
            el.style.setProperty(varName, varValue);
        }
        function animateCSSModeScroll(_ref) {
            let {swiper, targetPosition, side} = _ref;
            const window = ssr_window_esm_getWindow();
            const startPosition = -swiper.translate;
            let startTime = null;
            let time;
            const duration = swiper.params.speed;
            swiper.wrapperEl.style.scrollSnapType = "none";
            window.cancelAnimationFrame(swiper.cssModeFrameID);
            const dir = targetPosition > startPosition ? "next" : "prev";
            const isOutOfBound = (current, target) => dir === "next" && current >= target || dir === "prev" && current <= target;
            const animate = () => {
                time = (new Date).getTime();
                if (startTime === null) startTime = time;
                const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
                const easeProgress = .5 - Math.cos(progress * Math.PI) / 2;
                let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);
                if (isOutOfBound(currentPosition, targetPosition)) currentPosition = targetPosition;
                swiper.wrapperEl.scrollTo({
                    [side]: currentPosition
                });
                if (isOutOfBound(currentPosition, targetPosition)) {
                    swiper.wrapperEl.style.overflow = "hidden";
                    swiper.wrapperEl.style.scrollSnapType = "";
                    setTimeout((() => {
                        swiper.wrapperEl.style.overflow = "";
                        swiper.wrapperEl.scrollTo({
                            [side]: currentPosition
                        });
                    }));
                    window.cancelAnimationFrame(swiper.cssModeFrameID);
                    return;
                }
                swiper.cssModeFrameID = window.requestAnimationFrame(animate);
            };
            animate();
        }
        function utils_getSlideTransformEl(slideEl) {
            return slideEl.querySelector(".swiper-slide-transform") || slideEl.shadowRoot && slideEl.shadowRoot.querySelector(".swiper-slide-transform") || slideEl;
        }
        function utils_elementChildren(element, selector) {
            if (selector === void 0) selector = "";
            return [ ...element.children ].filter((el => el.matches(selector)));
        }
        function showWarning(text) {
            try {
                console.warn(text);
                return;
            } catch (err) {}
        }
        function utils_createElement(tag, classes) {
            if (classes === void 0) classes = [];
            const el = document.createElement(tag);
            el.classList.add(...Array.isArray(classes) ? classes : utils_classesToTokens(classes));
            return el;
        }
        function utils_elementOffset(el) {
            const window = ssr_window_esm_getWindow();
            const document = ssr_window_esm_getDocument();
            const box = el.getBoundingClientRect();
            const body = document.body;
            const clientTop = el.clientTop || body.clientTop || 0;
            const clientLeft = el.clientLeft || body.clientLeft || 0;
            const scrollTop = el === window ? window.scrollY : el.scrollTop;
            const scrollLeft = el === window ? window.scrollX : el.scrollLeft;
            return {
                top: box.top + scrollTop - clientTop,
                left: box.left + scrollLeft - clientLeft
            };
        }
        function elementPrevAll(el, selector) {
            const prevEls = [];
            while (el.previousElementSibling) {
                const prev = el.previousElementSibling;
                if (selector) {
                    if (prev.matches(selector)) prevEls.push(prev);
                } else prevEls.push(prev);
                el = prev;
            }
            return prevEls;
        }
        function elementNextAll(el, selector) {
            const nextEls = [];
            while (el.nextElementSibling) {
                const next = el.nextElementSibling;
                if (selector) {
                    if (next.matches(selector)) nextEls.push(next);
                } else nextEls.push(next);
                el = next;
            }
            return nextEls;
        }
        function elementStyle(el, prop) {
            const window = ssr_window_esm_getWindow();
            return window.getComputedStyle(el, null).getPropertyValue(prop);
        }
        function utils_elementIndex(el) {
            let child = el;
            let i;
            if (child) {
                i = 0;
                while ((child = child.previousSibling) !== null) if (child.nodeType === 1) i += 1;
                return i;
            }
            return;
        }
        function utils_elementParents(el, selector) {
            const parents = [];
            let parent = el.parentElement;
            while (parent) {
                if (selector) {
                    if (parent.matches(selector)) parents.push(parent);
                } else parents.push(parent);
                parent = parent.parentElement;
            }
            return parents;
        }
        function utils_elementTransitionEnd(el, callback) {
            function fireCallBack(e) {
                if (e.target !== el) return;
                callback.call(el, e);
                el.removeEventListener("transitionend", fireCallBack);
            }
            if (callback) el.addEventListener("transitionend", fireCallBack);
        }
        function elementOuterSize(el, size, includeMargins) {
            const window = ssr_window_esm_getWindow();
            if (includeMargins) return el[size === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(window.getComputedStyle(el, null).getPropertyValue(size === "width" ? "margin-right" : "margin-top")) + parseFloat(window.getComputedStyle(el, null).getPropertyValue(size === "width" ? "margin-left" : "margin-bottom"));
            return el.offsetWidth;
        }
        function utils_makeElementsArray(el) {
            return (Array.isArray(el) ? el : [ el ]).filter((e => !!e));
        }
        let support;
        function calcSupport() {
            const window = ssr_window_esm_getWindow();
            const document = ssr_window_esm_getDocument();
            return {
                smoothScroll: document.documentElement && document.documentElement.style && "scrollBehavior" in document.documentElement.style,
                touch: !!("ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch)
            };
        }
        function getSupport() {
            if (!support) support = calcSupport();
            return support;
        }
        let deviceCached;
        function calcDevice(_temp) {
            let {userAgent} = _temp === void 0 ? {} : _temp;
            const support = getSupport();
            const window = ssr_window_esm_getWindow();
            const platform = window.navigator.platform;
            const ua = userAgent || window.navigator.userAgent;
            const device = {
                ios: false,
                android: false
            };
            const screenWidth = window.screen.width;
            const screenHeight = window.screen.height;
            const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
            let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
            const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
            const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
            const windows = platform === "Win32";
            let macos = platform === "MacIntel";
            const iPadScreens = [ "1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810" ];
            if (!ipad && macos && support.touch && iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0) {
                ipad = ua.match(/(Version)\/([\d.]+)/);
                if (!ipad) ipad = [ 0, 1, "13_0_0" ];
                macos = false;
            }
            if (android && !windows) {
                device.os = "android";
                device.android = true;
            }
            if (ipad || iphone || ipod) {
                device.os = "ios";
                device.ios = true;
            }
            return device;
        }
        function getDevice(overrides) {
            if (overrides === void 0) overrides = {};
            if (!deviceCached) deviceCached = calcDevice(overrides);
            return deviceCached;
        }
        let browser;
        function calcBrowser() {
            const window = ssr_window_esm_getWindow();
            const device = getDevice();
            let needPerspectiveFix = false;
            function isSafari() {
                const ua = window.navigator.userAgent.toLowerCase();
                return ua.indexOf("safari") >= 0 && ua.indexOf("chrome") < 0 && ua.indexOf("android") < 0;
            }
            if (isSafari()) {
                const ua = String(window.navigator.userAgent);
                if (ua.includes("Version/")) {
                    const [major, minor] = ua.split("Version/")[1].split(" ")[0].split(".").map((num => Number(num)));
                    needPerspectiveFix = major < 16 || major === 16 && minor < 2;
                }
            }
            const isWebView = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent);
            const isSafariBrowser = isSafari();
            const need3dFix = isSafariBrowser || isWebView && device.ios;
            return {
                isSafari: needPerspectiveFix || isSafariBrowser,
                needPerspectiveFix,
                need3dFix,
                isWebView
            };
        }
        function getBrowser() {
            if (!browser) browser = calcBrowser();
            return browser;
        }
        function Resize(_ref) {
            let {swiper, on, emit} = _ref;
            const window = ssr_window_esm_getWindow();
            let observer = null;
            let animationFrame = null;
            const resizeHandler = () => {
                if (!swiper || swiper.destroyed || !swiper.initialized) return;
                emit("beforeResize");
                emit("resize");
            };
            const createObserver = () => {
                if (!swiper || swiper.destroyed || !swiper.initialized) return;
                observer = new ResizeObserver((entries => {
                    animationFrame = window.requestAnimationFrame((() => {
                        const {width, height} = swiper;
                        let newWidth = width;
                        let newHeight = height;
                        entries.forEach((_ref2 => {
                            let {contentBoxSize, contentRect, target} = _ref2;
                            if (target && target !== swiper.el) return;
                            newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
                            newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
                        }));
                        if (newWidth !== width || newHeight !== height) resizeHandler();
                    }));
                }));
                observer.observe(swiper.el);
            };
            const removeObserver = () => {
                if (animationFrame) window.cancelAnimationFrame(animationFrame);
                if (observer && observer.unobserve && swiper.el) {
                    observer.unobserve(swiper.el);
                    observer = null;
                }
            };
            const orientationChangeHandler = () => {
                if (!swiper || swiper.destroyed || !swiper.initialized) return;
                emit("orientationchange");
            };
            on("init", (() => {
                if (swiper.params.resizeObserver && typeof window.ResizeObserver !== "undefined") {
                    createObserver();
                    return;
                }
                window.addEventListener("resize", resizeHandler);
                window.addEventListener("orientationchange", orientationChangeHandler);
            }));
            on("destroy", (() => {
                removeObserver();
                window.removeEventListener("resize", resizeHandler);
                window.removeEventListener("orientationchange", orientationChangeHandler);
            }));
        }
        function Observer(_ref) {
            let {swiper, extendParams, on, emit} = _ref;
            const observers = [];
            const window = ssr_window_esm_getWindow();
            const attach = function(target, options) {
                if (options === void 0) options = {};
                const ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
                const observer = new ObserverFunc((mutations => {
                    if (swiper.__preventObserver__) return;
                    if (mutations.length === 1) {
                        emit("observerUpdate", mutations[0]);
                        return;
                    }
                    const observerUpdate = function observerUpdate() {
                        emit("observerUpdate", mutations[0]);
                    };
                    if (window.requestAnimationFrame) window.requestAnimationFrame(observerUpdate); else window.setTimeout(observerUpdate, 0);
                }));
                observer.observe(target, {
                    attributes: typeof options.attributes === "undefined" ? true : options.attributes,
                    childList: typeof options.childList === "undefined" ? true : options.childList,
                    characterData: typeof options.characterData === "undefined" ? true : options.characterData
                });
                observers.push(observer);
            };
            const init = () => {
                if (!swiper.params.observer) return;
                if (swiper.params.observeParents) {
                    const containerParents = utils_elementParents(swiper.hostEl);
                    for (let i = 0; i < containerParents.length; i += 1) attach(containerParents[i]);
                }
                attach(swiper.hostEl, {
                    childList: swiper.params.observeSlideChildren
                });
                attach(swiper.wrapperEl, {
                    attributes: false
                });
            };
            const destroy = () => {
                observers.forEach((observer => {
                    observer.disconnect();
                }));
                observers.splice(0, observers.length);
            };
            extendParams({
                observer: false,
                observeParents: false,
                observeSlideChildren: false
            });
            on("init", init);
            on("destroy", destroy);
        }
        var eventsEmitter = {
            on(events, handler, priority) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (typeof handler !== "function") return self;
                const method = priority ? "unshift" : "push";
                events.split(" ").forEach((event => {
                    if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
                    self.eventsListeners[event][method](handler);
                }));
                return self;
            },
            once(events, handler, priority) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (typeof handler !== "function") return self;
                function onceHandler() {
                    self.off(events, onceHandler);
                    if (onceHandler.__emitterProxy) delete onceHandler.__emitterProxy;
                    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
                    handler.apply(self, args);
                }
                onceHandler.__emitterProxy = handler;
                return self.on(events, onceHandler, priority);
            },
            onAny(handler, priority) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (typeof handler !== "function") return self;
                const method = priority ? "unshift" : "push";
                if (self.eventsAnyListeners.indexOf(handler) < 0) self.eventsAnyListeners[method](handler);
                return self;
            },
            offAny(handler) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (!self.eventsAnyListeners) return self;
                const index = self.eventsAnyListeners.indexOf(handler);
                if (index >= 0) self.eventsAnyListeners.splice(index, 1);
                return self;
            },
            off(events, handler) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (!self.eventsListeners) return self;
                events.split(" ").forEach((event => {
                    if (typeof handler === "undefined") self.eventsListeners[event] = []; else if (self.eventsListeners[event]) self.eventsListeners[event].forEach(((eventHandler, index) => {
                        if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) self.eventsListeners[event].splice(index, 1);
                    }));
                }));
                return self;
            },
            emit() {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (!self.eventsListeners) return self;
                let events;
                let data;
                let context;
                for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) args[_key2] = arguments[_key2];
                if (typeof args[0] === "string" || Array.isArray(args[0])) {
                    events = args[0];
                    data = args.slice(1, args.length);
                    context = self;
                } else {
                    events = args[0].events;
                    data = args[0].data;
                    context = args[0].context || self;
                }
                data.unshift(context);
                const eventsArray = Array.isArray(events) ? events : events.split(" ");
                eventsArray.forEach((event => {
                    if (self.eventsAnyListeners && self.eventsAnyListeners.length) self.eventsAnyListeners.forEach((eventHandler => {
                        eventHandler.apply(context, [ event, ...data ]);
                    }));
                    if (self.eventsListeners && self.eventsListeners[event]) self.eventsListeners[event].forEach((eventHandler => {
                        eventHandler.apply(context, data);
                    }));
                }));
                return self;
            }
        };
        function updateSize() {
            const swiper = this;
            let width;
            let height;
            const el = swiper.el;
            if (typeof swiper.params.width !== "undefined" && swiper.params.width !== null) width = swiper.params.width; else width = el.clientWidth;
            if (typeof swiper.params.height !== "undefined" && swiper.params.height !== null) height = swiper.params.height; else height = el.clientHeight;
            if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) return;
            width = width - parseInt(elementStyle(el, "padding-left") || 0, 10) - parseInt(elementStyle(el, "padding-right") || 0, 10);
            height = height - parseInt(elementStyle(el, "padding-top") || 0, 10) - parseInt(elementStyle(el, "padding-bottom") || 0, 10);
            if (Number.isNaN(width)) width = 0;
            if (Number.isNaN(height)) height = 0;
            Object.assign(swiper, {
                width,
                height,
                size: swiper.isHorizontal() ? width : height
            });
        }
        function updateSlides() {
            const swiper = this;
            function getDirectionPropertyValue(node, label) {
                return parseFloat(node.getPropertyValue(swiper.getDirectionLabel(label)) || 0);
            }
            const params = swiper.params;
            const {wrapperEl, slidesEl, size: swiperSize, rtlTranslate: rtl, wrongRTL} = swiper;
            const isVirtual = swiper.virtual && params.virtual.enabled;
            const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
            const slides = utils_elementChildren(slidesEl, `.${swiper.params.slideClass}, swiper-slide`);
            const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
            let snapGrid = [];
            const slidesGrid = [];
            const slidesSizesGrid = [];
            let offsetBefore = params.slidesOffsetBefore;
            if (typeof offsetBefore === "function") offsetBefore = params.slidesOffsetBefore.call(swiper);
            let offsetAfter = params.slidesOffsetAfter;
            if (typeof offsetAfter === "function") offsetAfter = params.slidesOffsetAfter.call(swiper);
            const previousSnapGridLength = swiper.snapGrid.length;
            const previousSlidesGridLength = swiper.slidesGrid.length;
            let spaceBetween = params.spaceBetween;
            let slidePosition = -offsetBefore;
            let prevSlideSize = 0;
            let index = 0;
            if (typeof swiperSize === "undefined") return;
            if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiperSize; else if (typeof spaceBetween === "string") spaceBetween = parseFloat(spaceBetween);
            swiper.virtualSize = -spaceBetween;
            slides.forEach((slideEl => {
                if (rtl) slideEl.style.marginLeft = ""; else slideEl.style.marginRight = "";
                slideEl.style.marginBottom = "";
                slideEl.style.marginTop = "";
            }));
            if (params.centeredSlides && params.cssMode) {
                utils_setCSSProperty(wrapperEl, "--swiper-centered-offset-before", "");
                utils_setCSSProperty(wrapperEl, "--swiper-centered-offset-after", "");
            }
            const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;
            if (gridEnabled) swiper.grid.initSlides(slides); else if (swiper.grid) swiper.grid.unsetSlides();
            let slideSize;
            const shouldResetSlideSize = params.slidesPerView === "auto" && params.breakpoints && Object.keys(params.breakpoints).filter((key => typeof params.breakpoints[key].slidesPerView !== "undefined")).length > 0;
            for (let i = 0; i < slidesLength; i += 1) {
                slideSize = 0;
                let slide;
                if (slides[i]) slide = slides[i];
                if (gridEnabled) swiper.grid.updateSlide(i, slide, slides);
                if (slides[i] && elementStyle(slide, "display") === "none") continue;
                if (params.slidesPerView === "auto") {
                    if (shouldResetSlideSize) slides[i].style[swiper.getDirectionLabel("width")] = ``;
                    const slideStyles = getComputedStyle(slide);
                    const currentTransform = slide.style.transform;
                    const currentWebKitTransform = slide.style.webkitTransform;
                    if (currentTransform) slide.style.transform = "none";
                    if (currentWebKitTransform) slide.style.webkitTransform = "none";
                    if (params.roundLengths) slideSize = swiper.isHorizontal() ? elementOuterSize(slide, "width", true) : elementOuterSize(slide, "height", true); else {
                        const width = getDirectionPropertyValue(slideStyles, "width");
                        const paddingLeft = getDirectionPropertyValue(slideStyles, "padding-left");
                        const paddingRight = getDirectionPropertyValue(slideStyles, "padding-right");
                        const marginLeft = getDirectionPropertyValue(slideStyles, "margin-left");
                        const marginRight = getDirectionPropertyValue(slideStyles, "margin-right");
                        const boxSizing = slideStyles.getPropertyValue("box-sizing");
                        if (boxSizing && boxSizing === "border-box") slideSize = width + marginLeft + marginRight; else {
                            const {clientWidth, offsetWidth} = slide;
                            slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
                        }
                    }
                    if (currentTransform) slide.style.transform = currentTransform;
                    if (currentWebKitTransform) slide.style.webkitTransform = currentWebKitTransform;
                    if (params.roundLengths) slideSize = Math.floor(slideSize);
                } else {
                    slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
                    if (params.roundLengths) slideSize = Math.floor(slideSize);
                    if (slides[i]) slides[i].style[swiper.getDirectionLabel("width")] = `${slideSize}px`;
                }
                if (slides[i]) slides[i].swiperSlideSize = slideSize;
                slidesSizesGrid.push(slideSize);
                if (params.centeredSlides) {
                    slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
                    if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
                    if (i === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
                    if (Math.abs(slidePosition) < 1 / 1e3) slidePosition = 0;
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
            if (rtl && wrongRTL && (params.effect === "slide" || params.effect === "coverflow")) wrapperEl.style.width = `${swiper.virtualSize + spaceBetween}px`;
            if (params.setWrapperSize) wrapperEl.style[swiper.getDirectionLabel("width")] = `${swiper.virtualSize + spaceBetween}px`;
            if (gridEnabled) swiper.grid.updateWrapperSize(slideSize, snapGrid);
            if (!params.centeredSlides) {
                const newSlidesGrid = [];
                for (let i = 0; i < snapGrid.length; i += 1) {
                    let slidesGridItem = snapGrid[i];
                    if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
                    if (snapGrid[i] <= swiper.virtualSize - swiperSize) newSlidesGrid.push(slidesGridItem);
                }
                snapGrid = newSlidesGrid;
                if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) snapGrid.push(swiper.virtualSize - swiperSize);
            }
            if (isVirtual && params.loop) {
                const size = slidesSizesGrid[0] + spaceBetween;
                if (params.slidesPerGroup > 1) {
                    const groups = Math.ceil((swiper.virtual.slidesBefore + swiper.virtual.slidesAfter) / params.slidesPerGroup);
                    const groupSize = size * params.slidesPerGroup;
                    for (let i = 0; i < groups; i += 1) snapGrid.push(snapGrid[snapGrid.length - 1] + groupSize);
                }
                for (let i = 0; i < swiper.virtual.slidesBefore + swiper.virtual.slidesAfter; i += 1) {
                    if (params.slidesPerGroup === 1) snapGrid.push(snapGrid[snapGrid.length - 1] + size);
                    slidesGrid.push(slidesGrid[slidesGrid.length - 1] + size);
                    swiper.virtualSize += size;
                }
            }
            if (snapGrid.length === 0) snapGrid = [ 0 ];
            if (spaceBetween !== 0) {
                const key = swiper.isHorizontal() && rtl ? "marginLeft" : swiper.getDirectionLabel("marginRight");
                slides.filter(((_, slideIndex) => {
                    if (!params.cssMode || params.loop) return true;
                    if (slideIndex === slides.length - 1) return false;
                    return true;
                })).forEach((slideEl => {
                    slideEl.style[key] = `${spaceBetween}px`;
                }));
            }
            if (params.centeredSlides && params.centeredSlidesBounds) {
                let allSlidesSize = 0;
                slidesSizesGrid.forEach((slideSizeValue => {
                    allSlidesSize += slideSizeValue + (spaceBetween || 0);
                }));
                allSlidesSize -= spaceBetween;
                const maxSnap = allSlidesSize - swiperSize;
                snapGrid = snapGrid.map((snap => {
                    if (snap <= 0) return -offsetBefore;
                    if (snap > maxSnap) return maxSnap + offsetAfter;
                    return snap;
                }));
            }
            if (params.centerInsufficientSlides) {
                let allSlidesSize = 0;
                slidesSizesGrid.forEach((slideSizeValue => {
                    allSlidesSize += slideSizeValue + (spaceBetween || 0);
                }));
                allSlidesSize -= spaceBetween;
                if (allSlidesSize < swiperSize) {
                    const allSlidesOffset = (swiperSize - allSlidesSize) / 2;
                    snapGrid.forEach(((snap, snapIndex) => {
                        snapGrid[snapIndex] = snap - allSlidesOffset;
                    }));
                    slidesGrid.forEach(((snap, snapIndex) => {
                        slidesGrid[snapIndex] = snap + allSlidesOffset;
                    }));
                }
            }
            Object.assign(swiper, {
                slides,
                snapGrid,
                slidesGrid,
                slidesSizesGrid
            });
            if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
                utils_setCSSProperty(wrapperEl, "--swiper-centered-offset-before", `${-snapGrid[0]}px`);
                utils_setCSSProperty(wrapperEl, "--swiper-centered-offset-after", `${swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`);
                const addToSnapGrid = -swiper.snapGrid[0];
                const addToSlidesGrid = -swiper.slidesGrid[0];
                swiper.snapGrid = swiper.snapGrid.map((v => v + addToSnapGrid));
                swiper.slidesGrid = swiper.slidesGrid.map((v => v + addToSlidesGrid));
            }
            if (slidesLength !== previousSlidesLength) swiper.emit("slidesLengthChange");
            if (snapGrid.length !== previousSnapGridLength) {
                if (swiper.params.watchOverflow) swiper.checkOverflow();
                swiper.emit("snapGridLengthChange");
            }
            if (slidesGrid.length !== previousSlidesGridLength) swiper.emit("slidesGridLengthChange");
            if (params.watchSlidesProgress) swiper.updateSlidesOffset();
            swiper.emit("slidesUpdated");
            if (!isVirtual && !params.cssMode && (params.effect === "slide" || params.effect === "fade")) {
                const backFaceHiddenClass = `${params.containerModifierClass}backface-hidden`;
                const hasClassBackfaceClassAdded = swiper.el.classList.contains(backFaceHiddenClass);
                if (slidesLength <= params.maxBackfaceHiddenSlides) {
                    if (!hasClassBackfaceClassAdded) swiper.el.classList.add(backFaceHiddenClass);
                } else if (hasClassBackfaceClassAdded) swiper.el.classList.remove(backFaceHiddenClass);
            }
        }
        function updateAutoHeight(speed) {
            const swiper = this;
            const activeSlides = [];
            const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
            let newHeight = 0;
            let i;
            if (typeof speed === "number") swiper.setTransition(speed); else if (speed === true) swiper.setTransition(swiper.params.speed);
            const getSlideByIndex = index => {
                if (isVirtual) return swiper.slides[swiper.getSlideIndexByData(index)];
                return swiper.slides[index];
            };
            if (swiper.params.slidesPerView !== "auto" && swiper.params.slidesPerView > 1) if (swiper.params.centeredSlides) (swiper.visibleSlides || []).forEach((slide => {
                activeSlides.push(slide);
            })); else for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
                const index = swiper.activeIndex + i;
                if (index > swiper.slides.length && !isVirtual) break;
                activeSlides.push(getSlideByIndex(index));
            } else activeSlides.push(getSlideByIndex(swiper.activeIndex));
            for (i = 0; i < activeSlides.length; i += 1) if (typeof activeSlides[i] !== "undefined") {
                const height = activeSlides[i].offsetHeight;
                newHeight = height > newHeight ? height : newHeight;
            }
            if (newHeight || newHeight === 0) swiper.wrapperEl.style.height = `${newHeight}px`;
        }
        function updateSlidesOffset() {
            const swiper = this;
            const slides = swiper.slides;
            const minusOffset = swiper.isElement ? swiper.isHorizontal() ? swiper.wrapperEl.offsetLeft : swiper.wrapperEl.offsetTop : 0;
            for (let i = 0; i < slides.length; i += 1) slides[i].swiperSlideOffset = (swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop) - minusOffset - swiper.cssOverflowAdjustment();
        }
        function updateSlidesProgress(translate) {
            if (translate === void 0) translate = this && this.translate || 0;
            const swiper = this;
            const params = swiper.params;
            const {slides, rtlTranslate: rtl, snapGrid} = swiper;
            if (slides.length === 0) return;
            if (typeof slides[0].swiperSlideOffset === "undefined") swiper.updateSlidesOffset();
            let offsetCenter = -translate;
            if (rtl) offsetCenter = translate;
            slides.forEach((slideEl => {
                slideEl.classList.remove(params.slideVisibleClass, params.slideFullyVisibleClass);
            }));
            swiper.visibleSlidesIndexes = [];
            swiper.visibleSlides = [];
            let spaceBetween = params.spaceBetween;
            if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiper.size; else if (typeof spaceBetween === "string") spaceBetween = parseFloat(spaceBetween);
            for (let i = 0; i < slides.length; i += 1) {
                const slide = slides[i];
                let slideOffset = slide.swiperSlideOffset;
                if (params.cssMode && params.centeredSlides) slideOffset -= slides[0].swiperSlideOffset;
                const slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + spaceBetween);
                const originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + spaceBetween);
                const slideBefore = -(offsetCenter - slideOffset);
                const slideAfter = slideBefore + swiper.slidesSizesGrid[i];
                const isFullyVisible = slideBefore >= 0 && slideBefore <= swiper.size - swiper.slidesSizesGrid[i];
                const isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;
                if (isVisible) {
                    swiper.visibleSlides.push(slide);
                    swiper.visibleSlidesIndexes.push(i);
                    slides[i].classList.add(params.slideVisibleClass);
                }
                if (isFullyVisible) slides[i].classList.add(params.slideFullyVisibleClass);
                slide.progress = rtl ? -slideProgress : slideProgress;
                slide.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
            }
        }
        function updateProgress(translate) {
            const swiper = this;
            if (typeof translate === "undefined") {
                const multiplier = swiper.rtlTranslate ? -1 : 1;
                translate = swiper && swiper.translate && swiper.translate * multiplier || 0;
            }
            const params = swiper.params;
            const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
            let {progress, isBeginning, isEnd, progressLoop} = swiper;
            const wasBeginning = isBeginning;
            const wasEnd = isEnd;
            if (translatesDiff === 0) {
                progress = 0;
                isBeginning = true;
                isEnd = true;
            } else {
                progress = (translate - swiper.minTranslate()) / translatesDiff;
                const isBeginningRounded = Math.abs(translate - swiper.minTranslate()) < 1;
                const isEndRounded = Math.abs(translate - swiper.maxTranslate()) < 1;
                isBeginning = isBeginningRounded || progress <= 0;
                isEnd = isEndRounded || progress >= 1;
                if (isBeginningRounded) progress = 0;
                if (isEndRounded) progress = 1;
            }
            if (params.loop) {
                const firstSlideIndex = swiper.getSlideIndexByData(0);
                const lastSlideIndex = swiper.getSlideIndexByData(swiper.slides.length - 1);
                const firstSlideTranslate = swiper.slidesGrid[firstSlideIndex];
                const lastSlideTranslate = swiper.slidesGrid[lastSlideIndex];
                const translateMax = swiper.slidesGrid[swiper.slidesGrid.length - 1];
                const translateAbs = Math.abs(translate);
                if (translateAbs >= firstSlideTranslate) progressLoop = (translateAbs - firstSlideTranslate) / translateMax; else progressLoop = (translateAbs + translateMax - lastSlideTranslate) / translateMax;
                if (progressLoop > 1) progressLoop -= 1;
            }
            Object.assign(swiper, {
                progress,
                progressLoop,
                isBeginning,
                isEnd
            });
            if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate);
            if (isBeginning && !wasBeginning) swiper.emit("reachBeginning toEdge");
            if (isEnd && !wasEnd) swiper.emit("reachEnd toEdge");
            if (wasBeginning && !isBeginning || wasEnd && !isEnd) swiper.emit("fromEdge");
            swiper.emit("progress", progress);
        }
        function updateSlidesClasses() {
            const swiper = this;
            const {slides, params, slidesEl, activeIndex} = swiper;
            const isVirtual = swiper.virtual && params.virtual.enabled;
            const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
            const getFilteredSlide = selector => utils_elementChildren(slidesEl, `.${params.slideClass}${selector}, swiper-slide${selector}`)[0];
            slides.forEach((slideEl => {
                slideEl.classList.remove(params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
            }));
            let activeSlide;
            let prevSlide;
            let nextSlide;
            if (isVirtual) if (params.loop) {
                let slideIndex = activeIndex - swiper.virtual.slidesBefore;
                if (slideIndex < 0) slideIndex = swiper.virtual.slides.length + slideIndex;
                if (slideIndex >= swiper.virtual.slides.length) slideIndex -= swiper.virtual.slides.length;
                activeSlide = getFilteredSlide(`[data-swiper-slide-index="${slideIndex}"]`);
            } else activeSlide = getFilteredSlide(`[data-swiper-slide-index="${activeIndex}"]`); else if (gridEnabled) {
                activeSlide = slides.filter((slideEl => slideEl.column === activeIndex))[0];
                nextSlide = slides.filter((slideEl => slideEl.column === activeIndex + 1))[0];
                prevSlide = slides.filter((slideEl => slideEl.column === activeIndex - 1))[0];
            } else activeSlide = slides[activeIndex];
            if (activeSlide) {
                activeSlide.classList.add(params.slideActiveClass);
                if (gridEnabled) {
                    if (nextSlide) nextSlide.classList.add(params.slideNextClass);
                    if (prevSlide) prevSlide.classList.add(params.slidePrevClass);
                } else {
                    nextSlide = elementNextAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
                    if (params.loop && !nextSlide) nextSlide = slides[0];
                    if (nextSlide) nextSlide.classList.add(params.slideNextClass);
                    prevSlide = elementPrevAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
                    if (params.loop && !prevSlide === 0) prevSlide = slides[slides.length - 1];
                    if (prevSlide) prevSlide.classList.add(params.slidePrevClass);
                }
            }
            swiper.emitSlidesClasses();
        }
        const processLazyPreloader = (swiper, imageEl) => {
            if (!swiper || swiper.destroyed || !swiper.params) return;
            const slideSelector = () => swiper.isElement ? `swiper-slide` : `.${swiper.params.slideClass}`;
            const slideEl = imageEl.closest(slideSelector());
            if (slideEl) {
                let lazyEl = slideEl.querySelector(`.${swiper.params.lazyPreloaderClass}`);
                if (!lazyEl && swiper.isElement) if (slideEl.shadowRoot) lazyEl = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`); else requestAnimationFrame((() => {
                    if (slideEl.shadowRoot) {
                        lazyEl = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`);
                        if (lazyEl) lazyEl.remove();
                    }
                }));
                if (lazyEl) lazyEl.remove();
            }
        };
        const unlazy = (swiper, index) => {
            if (!swiper.slides[index]) return;
            const imageEl = swiper.slides[index].querySelector('[loading="lazy"]');
            if (imageEl) imageEl.removeAttribute("loading");
        };
        const preload = swiper => {
            if (!swiper || swiper.destroyed || !swiper.params) return;
            let amount = swiper.params.lazyPreloadPrevNext;
            const len = swiper.slides.length;
            if (!len || !amount || amount < 0) return;
            amount = Math.min(amount, len);
            const slidesPerView = swiper.params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(swiper.params.slidesPerView);
            const activeIndex = swiper.activeIndex;
            if (swiper.params.grid && swiper.params.grid.rows > 1) {
                const activeColumn = activeIndex;
                const preloadColumns = [ activeColumn - amount ];
                preloadColumns.push(...Array.from({
                    length: amount
                }).map(((_, i) => activeColumn + slidesPerView + i)));
                swiper.slides.forEach(((slideEl, i) => {
                    if (preloadColumns.includes(slideEl.column)) unlazy(swiper, i);
                }));
                return;
            }
            const slideIndexLastInView = activeIndex + slidesPerView - 1;
            if (swiper.params.rewind || swiper.params.loop) for (let i = activeIndex - amount; i <= slideIndexLastInView + amount; i += 1) {
                const realIndex = (i % len + len) % len;
                if (realIndex < activeIndex || realIndex > slideIndexLastInView) unlazy(swiper, realIndex);
            } else for (let i = Math.max(activeIndex - amount, 0); i <= Math.min(slideIndexLastInView + amount, len - 1); i += 1) if (i !== activeIndex && (i > slideIndexLastInView || i < activeIndex)) unlazy(swiper, i);
        };
        function getActiveIndexByTranslate(swiper) {
            const {slidesGrid, params} = swiper;
            const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
            let activeIndex;
            for (let i = 0; i < slidesGrid.length; i += 1) if (typeof slidesGrid[i + 1] !== "undefined") {
                if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) activeIndex = i; else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) activeIndex = i + 1;
            } else if (translate >= slidesGrid[i]) activeIndex = i;
            if (params.normalizeSlideIndex) if (activeIndex < 0 || typeof activeIndex === "undefined") activeIndex = 0;
            return activeIndex;
        }
        function updateActiveIndex(newActiveIndex) {
            const swiper = this;
            const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
            const {snapGrid, params, activeIndex: previousIndex, realIndex: previousRealIndex, snapIndex: previousSnapIndex} = swiper;
            let activeIndex = newActiveIndex;
            let snapIndex;
            const getVirtualRealIndex = aIndex => {
                let realIndex = aIndex - swiper.virtual.slidesBefore;
                if (realIndex < 0) realIndex = swiper.virtual.slides.length + realIndex;
                if (realIndex >= swiper.virtual.slides.length) realIndex -= swiper.virtual.slides.length;
                return realIndex;
            };
            if (typeof activeIndex === "undefined") activeIndex = getActiveIndexByTranslate(swiper);
            if (snapGrid.indexOf(translate) >= 0) snapIndex = snapGrid.indexOf(translate); else {
                const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
                snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
            }
            if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
            if (activeIndex === previousIndex && !swiper.params.loop) {
                if (snapIndex !== previousSnapIndex) {
                    swiper.snapIndex = snapIndex;
                    swiper.emit("snapIndexChange");
                }
                return;
            }
            if (activeIndex === previousIndex && swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) {
                swiper.realIndex = getVirtualRealIndex(activeIndex);
                return;
            }
            const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
            let realIndex;
            if (swiper.virtual && params.virtual.enabled && params.loop) realIndex = getVirtualRealIndex(activeIndex); else if (gridEnabled) {
                const firstSlideInColumn = swiper.slides.filter((slideEl => slideEl.column === activeIndex))[0];
                let activeSlideIndex = parseInt(firstSlideInColumn.getAttribute("data-swiper-slide-index"), 10);
                if (Number.isNaN(activeSlideIndex)) activeSlideIndex = Math.max(swiper.slides.indexOf(firstSlideInColumn), 0);
                realIndex = Math.floor(activeSlideIndex / params.grid.rows);
            } else if (swiper.slides[activeIndex]) {
                const slideIndex = swiper.slides[activeIndex].getAttribute("data-swiper-slide-index");
                if (slideIndex) realIndex = parseInt(slideIndex, 10); else realIndex = activeIndex;
            } else realIndex = activeIndex;
            Object.assign(swiper, {
                previousSnapIndex,
                snapIndex,
                previousRealIndex,
                realIndex,
                previousIndex,
                activeIndex
            });
            if (swiper.initialized) preload(swiper);
            swiper.emit("activeIndexChange");
            swiper.emit("snapIndexChange");
            if (swiper.initialized || swiper.params.runCallbacksOnInit) {
                if (previousRealIndex !== realIndex) swiper.emit("realIndexChange");
                swiper.emit("slideChange");
            }
        }
        function updateClickedSlide(el, path) {
            const swiper = this;
            const params = swiper.params;
            let slide = el.closest(`.${params.slideClass}, swiper-slide`);
            if (!slide && swiper.isElement && path && path.length > 1 && path.includes(el)) [ ...path.slice(path.indexOf(el) + 1, path.length) ].forEach((pathEl => {
                if (!slide && pathEl.matches && pathEl.matches(`.${params.slideClass}, swiper-slide`)) slide = pathEl;
            }));
            let slideFound = false;
            let slideIndex;
            if (slide) for (let i = 0; i < swiper.slides.length; i += 1) if (swiper.slides[i] === slide) {
                slideFound = true;
                slideIndex = i;
                break;
            }
            if (slide && slideFound) {
                swiper.clickedSlide = slide;
                if (swiper.virtual && swiper.params.virtual.enabled) swiper.clickedIndex = parseInt(slide.getAttribute("data-swiper-slide-index"), 10); else swiper.clickedIndex = slideIndex;
            } else {
                swiper.clickedSlide = void 0;
                swiper.clickedIndex = void 0;
                return;
            }
            if (params.slideToClickedSlide && swiper.clickedIndex !== void 0 && swiper.clickedIndex !== swiper.activeIndex) swiper.slideToClickedSlide();
        }
        var update = {
            updateSize,
            updateSlides,
            updateAutoHeight,
            updateSlidesOffset,
            updateSlidesProgress,
            updateProgress,
            updateSlidesClasses,
            updateActiveIndex,
            updateClickedSlide
        };
        function getSwiperTranslate(axis) {
            if (axis === void 0) axis = this.isHorizontal() ? "x" : "y";
            const swiper = this;
            const {params, rtlTranslate: rtl, translate, wrapperEl} = swiper;
            if (params.virtualTranslate) return rtl ? -translate : translate;
            if (params.cssMode) return translate;
            let currentTranslate = utils_getTranslate(wrapperEl, axis);
            currentTranslate += swiper.cssOverflowAdjustment();
            if (rtl) currentTranslate = -currentTranslate;
            return currentTranslate || 0;
        }
        function setTranslate(translate, byController) {
            const swiper = this;
            const {rtlTranslate: rtl, params, wrapperEl, progress} = swiper;
            let x = 0;
            let y = 0;
            const z = 0;
            if (swiper.isHorizontal()) x = rtl ? -translate : translate; else y = translate;
            if (params.roundLengths) {
                x = Math.floor(x);
                y = Math.floor(y);
            }
            swiper.previousTranslate = swiper.translate;
            swiper.translate = swiper.isHorizontal() ? x : y;
            if (params.cssMode) wrapperEl[swiper.isHorizontal() ? "scrollLeft" : "scrollTop"] = swiper.isHorizontal() ? -x : -y; else if (!params.virtualTranslate) {
                if (swiper.isHorizontal()) x -= swiper.cssOverflowAdjustment(); else y -= swiper.cssOverflowAdjustment();
                wrapperEl.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
            }
            let newProgress;
            const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
            if (translatesDiff === 0) newProgress = 0; else newProgress = (translate - swiper.minTranslate()) / translatesDiff;
            if (newProgress !== progress) swiper.updateProgress(translate);
            swiper.emit("setTranslate", swiper.translate, byController);
        }
        function minTranslate() {
            return -this.snapGrid[0];
        }
        function maxTranslate() {
            return -this.snapGrid[this.snapGrid.length - 1];
        }
        function translateTo(translate, speed, runCallbacks, translateBounds, internal) {
            if (translate === void 0) translate = 0;
            if (speed === void 0) speed = this.params.speed;
            if (runCallbacks === void 0) runCallbacks = true;
            if (translateBounds === void 0) translateBounds = true;
            const swiper = this;
            const {params, wrapperEl} = swiper;
            if (swiper.animating && params.preventInteractionOnTransition) return false;
            const minTranslate = swiper.minTranslate();
            const maxTranslate = swiper.maxTranslate();
            let newTranslate;
            if (translateBounds && translate > minTranslate) newTranslate = minTranslate; else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate; else newTranslate = translate;
            swiper.updateProgress(newTranslate);
            if (params.cssMode) {
                const isH = swiper.isHorizontal();
                if (speed === 0) wrapperEl[isH ? "scrollLeft" : "scrollTop"] = -newTranslate; else {
                    if (!swiper.support.smoothScroll) {
                        animateCSSModeScroll({
                            swiper,
                            targetPosition: -newTranslate,
                            side: isH ? "left" : "top"
                        });
                        return true;
                    }
                    wrapperEl.scrollTo({
                        [isH ? "left" : "top"]: -newTranslate,
                        behavior: "smooth"
                    });
                }
                return true;
            }
            if (speed === 0) {
                swiper.setTransition(0);
                swiper.setTranslate(newTranslate);
                if (runCallbacks) {
                    swiper.emit("beforeTransitionStart", speed, internal);
                    swiper.emit("transitionEnd");
                }
            } else {
                swiper.setTransition(speed);
                swiper.setTranslate(newTranslate);
                if (runCallbacks) {
                    swiper.emit("beforeTransitionStart", speed, internal);
                    swiper.emit("transitionStart");
                }
                if (!swiper.animating) {
                    swiper.animating = true;
                    if (!swiper.onTranslateToWrapperTransitionEnd) swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
                        if (!swiper || swiper.destroyed) return;
                        if (e.target !== this) return;
                        swiper.wrapperEl.removeEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
                        swiper.onTranslateToWrapperTransitionEnd = null;
                        delete swiper.onTranslateToWrapperTransitionEnd;
                        if (runCallbacks) swiper.emit("transitionEnd");
                    };
                    swiper.wrapperEl.addEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
                }
            }
            return true;
        }
        var translate = {
            getTranslate: getSwiperTranslate,
            setTranslate,
            minTranslate,
            maxTranslate,
            translateTo
        };
        function setTransition(duration, byController) {
            const swiper = this;
            if (!swiper.params.cssMode) {
                swiper.wrapperEl.style.transitionDuration = `${duration}ms`;
                swiper.wrapperEl.style.transitionDelay = duration === 0 ? `0ms` : "";
            }
            swiper.emit("setTransition", duration, byController);
        }
        function transitionEmit(_ref) {
            let {swiper, runCallbacks, direction, step} = _ref;
            const {activeIndex, previousIndex} = swiper;
            let dir = direction;
            if (!dir) if (activeIndex > previousIndex) dir = "next"; else if (activeIndex < previousIndex) dir = "prev"; else dir = "reset";
            swiper.emit(`transition${step}`);
            if (runCallbacks && activeIndex !== previousIndex) {
                if (dir === "reset") {
                    swiper.emit(`slideResetTransition${step}`);
                    return;
                }
                swiper.emit(`slideChangeTransition${step}`);
                if (dir === "next") swiper.emit(`slideNextTransition${step}`); else swiper.emit(`slidePrevTransition${step}`);
            }
        }
        function transitionStart(runCallbacks, direction) {
            if (runCallbacks === void 0) runCallbacks = true;
            const swiper = this;
            const {params} = swiper;
            if (params.cssMode) return;
            if (params.autoHeight) swiper.updateAutoHeight();
            transitionEmit({
                swiper,
                runCallbacks,
                direction,
                step: "Start"
            });
        }
        function transitionEnd(runCallbacks, direction) {
            if (runCallbacks === void 0) runCallbacks = true;
            const swiper = this;
            const {params} = swiper;
            swiper.animating = false;
            if (params.cssMode) return;
            swiper.setTransition(0);
            transitionEmit({
                swiper,
                runCallbacks,
                direction,
                step: "End"
            });
        }
        var transition = {
            setTransition,
            transitionStart,
            transitionEnd
        };
        function slideTo(index, speed, runCallbacks, internal, initial) {
            if (index === void 0) index = 0;
            if (speed === void 0) speed = this.params.speed;
            if (runCallbacks === void 0) runCallbacks = true;
            if (typeof index === "string") index = parseInt(index, 10);
            const swiper = this;
            let slideIndex = index;
            if (slideIndex < 0) slideIndex = 0;
            const {params, snapGrid, slidesGrid, previousIndex, activeIndex, rtlTranslate: rtl, wrapperEl, enabled} = swiper;
            if (swiper.animating && params.preventInteractionOnTransition || !enabled && !internal && !initial || swiper.destroyed) return false;
            const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
            let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
            if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
            const translate = -snapGrid[snapIndex];
            if (params.normalizeSlideIndex) for (let i = 0; i < slidesGrid.length; i += 1) {
                const normalizedTranslate = -Math.floor(translate * 100);
                const normalizedGrid = Math.floor(slidesGrid[i] * 100);
                const normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);
                if (typeof slidesGrid[i + 1] !== "undefined") {
                    if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) slideIndex = i; else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) slideIndex = i + 1;
                } else if (normalizedTranslate >= normalizedGrid) slideIndex = i;
            }
            if (swiper.initialized && slideIndex !== activeIndex) {
                if (!swiper.allowSlideNext && (rtl ? translate > swiper.translate && translate > swiper.minTranslate() : translate < swiper.translate && translate < swiper.minTranslate())) return false;
                if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) if ((activeIndex || 0) !== slideIndex) return false;
            }
            if (slideIndex !== (previousIndex || 0) && runCallbacks) swiper.emit("beforeSlideChangeStart");
            swiper.updateProgress(translate);
            let direction;
            if (slideIndex > activeIndex) direction = "next"; else if (slideIndex < activeIndex) direction = "prev"; else direction = "reset";
            if (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate) {
                swiper.updateActiveIndex(slideIndex);
                if (params.autoHeight) swiper.updateAutoHeight();
                swiper.updateSlidesClasses();
                if (params.effect !== "slide") swiper.setTranslate(translate);
                if (direction !== "reset") {
                    swiper.transitionStart(runCallbacks, direction);
                    swiper.transitionEnd(runCallbacks, direction);
                }
                return false;
            }
            if (params.cssMode) {
                const isH = swiper.isHorizontal();
                const t = rtl ? translate : -translate;
                if (speed === 0) {
                    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
                    if (isVirtual) {
                        swiper.wrapperEl.style.scrollSnapType = "none";
                        swiper._immediateVirtual = true;
                    }
                    if (isVirtual && !swiper._cssModeVirtualInitialSet && swiper.params.initialSlide > 0) {
                        swiper._cssModeVirtualInitialSet = true;
                        requestAnimationFrame((() => {
                            wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
                        }));
                    } else wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
                    if (isVirtual) requestAnimationFrame((() => {
                        swiper.wrapperEl.style.scrollSnapType = "";
                        swiper._immediateVirtual = false;
                    }));
                } else {
                    if (!swiper.support.smoothScroll) {
                        animateCSSModeScroll({
                            swiper,
                            targetPosition: t,
                            side: isH ? "left" : "top"
                        });
                        return true;
                    }
                    wrapperEl.scrollTo({
                        [isH ? "left" : "top"]: t,
                        behavior: "smooth"
                    });
                }
                return true;
            }
            swiper.setTransition(speed);
            swiper.setTranslate(translate);
            swiper.updateActiveIndex(slideIndex);
            swiper.updateSlidesClasses();
            swiper.emit("beforeTransitionStart", speed, internal);
            swiper.transitionStart(runCallbacks, direction);
            if (speed === 0) swiper.transitionEnd(runCallbacks, direction); else if (!swiper.animating) {
                swiper.animating = true;
                if (!swiper.onSlideToWrapperTransitionEnd) swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
                    if (!swiper || swiper.destroyed) return;
                    if (e.target !== this) return;
                    swiper.wrapperEl.removeEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
                    swiper.onSlideToWrapperTransitionEnd = null;
                    delete swiper.onSlideToWrapperTransitionEnd;
                    swiper.transitionEnd(runCallbacks, direction);
                };
                swiper.wrapperEl.addEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
            }
            return true;
        }
        function slideToLoop(index, speed, runCallbacks, internal) {
            if (index === void 0) index = 0;
            if (speed === void 0) speed = this.params.speed;
            if (runCallbacks === void 0) runCallbacks = true;
            if (typeof index === "string") {
                const indexAsNumber = parseInt(index, 10);
                index = indexAsNumber;
            }
            const swiper = this;
            if (swiper.destroyed) return;
            const gridEnabled = swiper.grid && swiper.params.grid && swiper.params.grid.rows > 1;
            let newIndex = index;
            if (swiper.params.loop) if (swiper.virtual && swiper.params.virtual.enabled) newIndex += swiper.virtual.slidesBefore; else {
                let targetSlideIndex;
                if (gridEnabled) {
                    const slideIndex = newIndex * swiper.params.grid.rows;
                    targetSlideIndex = swiper.slides.filter((slideEl => slideEl.getAttribute("data-swiper-slide-index") * 1 === slideIndex))[0].column;
                } else targetSlideIndex = swiper.getSlideIndexByData(newIndex);
                const cols = gridEnabled ? Math.ceil(swiper.slides.length / swiper.params.grid.rows) : swiper.slides.length;
                const {centeredSlides} = swiper.params;
                let slidesPerView = swiper.params.slidesPerView;
                if (slidesPerView === "auto") slidesPerView = swiper.slidesPerViewDynamic(); else {
                    slidesPerView = Math.ceil(parseFloat(swiper.params.slidesPerView, 10));
                    if (centeredSlides && slidesPerView % 2 === 0) slidesPerView += 1;
                }
                let needLoopFix = cols - targetSlideIndex < slidesPerView;
                if (centeredSlides) needLoopFix = needLoopFix || targetSlideIndex < Math.ceil(slidesPerView / 2);
                if (needLoopFix) {
                    const direction = centeredSlides ? targetSlideIndex < swiper.activeIndex ? "prev" : "next" : targetSlideIndex - swiper.activeIndex - 1 < swiper.params.slidesPerView ? "next" : "prev";
                    swiper.loopFix({
                        direction,
                        slideTo: true,
                        activeSlideIndex: direction === "next" ? targetSlideIndex + 1 : targetSlideIndex - cols + 1,
                        slideRealIndex: direction === "next" ? swiper.realIndex : void 0
                    });
                }
                if (gridEnabled) {
                    const slideIndex = newIndex * swiper.params.grid.rows;
                    newIndex = swiper.slides.filter((slideEl => slideEl.getAttribute("data-swiper-slide-index") * 1 === slideIndex))[0].column;
                } else newIndex = swiper.getSlideIndexByData(newIndex);
            }
            requestAnimationFrame((() => {
                swiper.slideTo(newIndex, speed, runCallbacks, internal);
            }));
            return swiper;
        }
        function slideNext(speed, runCallbacks, internal) {
            if (speed === void 0) speed = this.params.speed;
            if (runCallbacks === void 0) runCallbacks = true;
            const swiper = this;
            const {enabled, params, animating} = swiper;
            if (!enabled || swiper.destroyed) return swiper;
            let perGroup = params.slidesPerGroup;
            if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) perGroup = Math.max(swiper.slidesPerViewDynamic("current", true), 1);
            const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;
            const isVirtual = swiper.virtual && params.virtual.enabled;
            if (params.loop) {
                if (animating && !isVirtual && params.loopPreventsSliding) return false;
                swiper.loopFix({
                    direction: "next"
                });
                swiper._clientLeft = swiper.wrapperEl.clientLeft;
                if (swiper.activeIndex === swiper.slides.length - 1 && params.cssMode) {
                    requestAnimationFrame((() => {
                        swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
                    }));
                    return true;
                }
            }
            if (params.rewind && swiper.isEnd) return swiper.slideTo(0, speed, runCallbacks, internal);
            return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
        }
        function slidePrev(speed, runCallbacks, internal) {
            if (speed === void 0) speed = this.params.speed;
            if (runCallbacks === void 0) runCallbacks = true;
            const swiper = this;
            const {params, snapGrid, slidesGrid, rtlTranslate, enabled, animating} = swiper;
            if (!enabled || swiper.destroyed) return swiper;
            const isVirtual = swiper.virtual && params.virtual.enabled;
            if (params.loop) {
                if (animating && !isVirtual && params.loopPreventsSliding) return false;
                swiper.loopFix({
                    direction: "prev"
                });
                swiper._clientLeft = swiper.wrapperEl.clientLeft;
            }
            const translate = rtlTranslate ? swiper.translate : -swiper.translate;
            function normalize(val) {
                if (val < 0) return -Math.floor(Math.abs(val));
                return Math.floor(val);
            }
            const normalizedTranslate = normalize(translate);
            const normalizedSnapGrid = snapGrid.map((val => normalize(val)));
            let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
            if (typeof prevSnap === "undefined" && params.cssMode) {
                let prevSnapIndex;
                snapGrid.forEach(((snap, snapIndex) => {
                    if (normalizedTranslate >= snap) prevSnapIndex = snapIndex;
                }));
                if (typeof prevSnapIndex !== "undefined") prevSnap = snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
            }
            let prevIndex = 0;
            if (typeof prevSnap !== "undefined") {
                prevIndex = slidesGrid.indexOf(prevSnap);
                if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
                if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
                    prevIndex = prevIndex - swiper.slidesPerViewDynamic("previous", true) + 1;
                    prevIndex = Math.max(prevIndex, 0);
                }
            }
            if (params.rewind && swiper.isBeginning) {
                const lastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
                return swiper.slideTo(lastIndex, speed, runCallbacks, internal);
            } else if (params.loop && swiper.activeIndex === 0 && params.cssMode) {
                requestAnimationFrame((() => {
                    swiper.slideTo(prevIndex, speed, runCallbacks, internal);
                }));
                return true;
            }
            return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
        }
        function slideReset(speed, runCallbacks, internal) {
            if (speed === void 0) speed = this.params.speed;
            if (runCallbacks === void 0) runCallbacks = true;
            const swiper = this;
            if (swiper.destroyed) return;
            return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
        }
        function slideToClosest(speed, runCallbacks, internal, threshold) {
            if (speed === void 0) speed = this.params.speed;
            if (runCallbacks === void 0) runCallbacks = true;
            if (threshold === void 0) threshold = .5;
            const swiper = this;
            if (swiper.destroyed) return;
            let index = swiper.activeIndex;
            const skip = Math.min(swiper.params.slidesPerGroupSkip, index);
            const snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
            const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
            if (translate >= swiper.snapGrid[snapIndex]) {
                const currentSnap = swiper.snapGrid[snapIndex];
                const nextSnap = swiper.snapGrid[snapIndex + 1];
                if (translate - currentSnap > (nextSnap - currentSnap) * threshold) index += swiper.params.slidesPerGroup;
            } else {
                const prevSnap = swiper.snapGrid[snapIndex - 1];
                const currentSnap = swiper.snapGrid[snapIndex];
                if (translate - prevSnap <= (currentSnap - prevSnap) * threshold) index -= swiper.params.slidesPerGroup;
            }
            index = Math.max(index, 0);
            index = Math.min(index, swiper.slidesGrid.length - 1);
            return swiper.slideTo(index, speed, runCallbacks, internal);
        }
        function slideToClickedSlide() {
            const swiper = this;
            if (swiper.destroyed) return;
            const {params, slidesEl} = swiper;
            const slidesPerView = params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : params.slidesPerView;
            let slideToIndex = swiper.clickedIndex;
            let realIndex;
            const slideSelector = swiper.isElement ? `swiper-slide` : `.${params.slideClass}`;
            if (params.loop) {
                if (swiper.animating) return;
                realIndex = parseInt(swiper.clickedSlide.getAttribute("data-swiper-slide-index"), 10);
                if (params.centeredSlides) if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
                    swiper.loopFix();
                    slideToIndex = swiper.getSlideIndex(utils_elementChildren(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
                    utils_nextTick((() => {
                        swiper.slideTo(slideToIndex);
                    }));
                } else swiper.slideTo(slideToIndex); else if (slideToIndex > swiper.slides.length - slidesPerView) {
                    swiper.loopFix();
                    slideToIndex = swiper.getSlideIndex(utils_elementChildren(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
                    utils_nextTick((() => {
                        swiper.slideTo(slideToIndex);
                    }));
                } else swiper.slideTo(slideToIndex);
            } else swiper.slideTo(slideToIndex);
        }
        var slide = {
            slideTo,
            slideToLoop,
            slideNext,
            slidePrev,
            slideReset,
            slideToClosest,
            slideToClickedSlide
        };
        function loopCreate(slideRealIndex) {
            const swiper = this;
            const {params, slidesEl} = swiper;
            if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;
            const initSlides = () => {
                const slides = utils_elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
                slides.forEach(((el, index) => {
                    el.setAttribute("data-swiper-slide-index", index);
                }));
            };
            const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
            const slidesPerGroup = params.slidesPerGroup * (gridEnabled ? params.grid.rows : 1);
            const shouldFillGroup = swiper.slides.length % slidesPerGroup !== 0;
            const shouldFillGrid = gridEnabled && swiper.slides.length % params.grid.rows !== 0;
            const addBlankSlides = amountOfSlides => {
                for (let i = 0; i < amountOfSlides; i += 1) {
                    const slideEl = swiper.isElement ? utils_createElement("swiper-slide", [ params.slideBlankClass ]) : utils_createElement("div", [ params.slideClass, params.slideBlankClass ]);
                    swiper.slidesEl.append(slideEl);
                }
            };
            if (shouldFillGroup) {
                if (params.loopAddBlankSlides) {
                    const slidesToAdd = slidesPerGroup - swiper.slides.length % slidesPerGroup;
                    addBlankSlides(slidesToAdd);
                    swiper.recalcSlides();
                    swiper.updateSlides();
                } else showWarning("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
                initSlides();
            } else if (shouldFillGrid) {
                if (params.loopAddBlankSlides) {
                    const slidesToAdd = params.grid.rows - swiper.slides.length % params.grid.rows;
                    addBlankSlides(slidesToAdd);
                    swiper.recalcSlides();
                    swiper.updateSlides();
                } else showWarning("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
                initSlides();
            } else initSlides();
            swiper.loopFix({
                slideRealIndex,
                direction: params.centeredSlides ? void 0 : "next"
            });
        }
        function loopFix(_temp) {
            let {slideRealIndex, slideTo = true, direction, setTranslate, activeSlideIndex, byController, byMousewheel} = _temp === void 0 ? {} : _temp;
            const swiper = this;
            if (!swiper.params.loop) return;
            swiper.emit("beforeLoopFix");
            const {slides, allowSlidePrev, allowSlideNext, slidesEl, params} = swiper;
            const {centeredSlides} = params;
            swiper.allowSlidePrev = true;
            swiper.allowSlideNext = true;
            if (swiper.virtual && params.virtual.enabled) {
                if (slideTo) if (!params.centeredSlides && swiper.snapIndex === 0) swiper.slideTo(swiper.virtual.slides.length, 0, false, true); else if (params.centeredSlides && swiper.snapIndex < params.slidesPerView) swiper.slideTo(swiper.virtual.slides.length + swiper.snapIndex, 0, false, true); else if (swiper.snapIndex === swiper.snapGrid.length - 1) swiper.slideTo(swiper.virtual.slidesBefore, 0, false, true);
                swiper.allowSlidePrev = allowSlidePrev;
                swiper.allowSlideNext = allowSlideNext;
                swiper.emit("loopFix");
                return;
            }
            let slidesPerView = params.slidesPerView;
            if (slidesPerView === "auto") slidesPerView = swiper.slidesPerViewDynamic(); else {
                slidesPerView = Math.ceil(parseFloat(params.slidesPerView, 10));
                if (centeredSlides && slidesPerView % 2 === 0) slidesPerView += 1;
            }
            const slidesPerGroup = params.slidesPerGroupAuto ? slidesPerView : params.slidesPerGroup;
            let loopedSlides = slidesPerGroup;
            if (loopedSlides % slidesPerGroup !== 0) loopedSlides += slidesPerGroup - loopedSlides % slidesPerGroup;
            loopedSlides += params.loopAdditionalSlides;
            swiper.loopedSlides = loopedSlides;
            const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
            if (slides.length < slidesPerView + loopedSlides) showWarning("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"); else if (gridEnabled && params.grid.fill === "row") showWarning("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
            const prependSlidesIndexes = [];
            const appendSlidesIndexes = [];
            let activeIndex = swiper.activeIndex;
            if (typeof activeSlideIndex === "undefined") activeSlideIndex = swiper.getSlideIndex(slides.filter((el => el.classList.contains(params.slideActiveClass)))[0]); else activeIndex = activeSlideIndex;
            const isNext = direction === "next" || !direction;
            const isPrev = direction === "prev" || !direction;
            let slidesPrepended = 0;
            let slidesAppended = 0;
            const cols = gridEnabled ? Math.ceil(slides.length / params.grid.rows) : slides.length;
            const activeColIndex = gridEnabled ? slides[activeSlideIndex].column : activeSlideIndex;
            const activeColIndexWithShift = activeColIndex + (centeredSlides && typeof setTranslate === "undefined" ? -slidesPerView / 2 + .5 : 0);
            if (activeColIndexWithShift < loopedSlides) {
                slidesPrepended = Math.max(loopedSlides - activeColIndexWithShift, slidesPerGroup);
                for (let i = 0; i < loopedSlides - activeColIndexWithShift; i += 1) {
                    const index = i - Math.floor(i / cols) * cols;
                    if (gridEnabled) {
                        const colIndexToPrepend = cols - index - 1;
                        for (let i = slides.length - 1; i >= 0; i -= 1) if (slides[i].column === colIndexToPrepend) prependSlidesIndexes.push(i);
                    } else prependSlidesIndexes.push(cols - index - 1);
                }
            } else if (activeColIndexWithShift + slidesPerView > cols - loopedSlides) {
                slidesAppended = Math.max(activeColIndexWithShift - (cols - loopedSlides * 2), slidesPerGroup);
                for (let i = 0; i < slidesAppended; i += 1) {
                    const index = i - Math.floor(i / cols) * cols;
                    if (gridEnabled) slides.forEach(((slide, slideIndex) => {
                        if (slide.column === index) appendSlidesIndexes.push(slideIndex);
                    })); else appendSlidesIndexes.push(index);
                }
            }
            swiper.__preventObserver__ = true;
            requestAnimationFrame((() => {
                swiper.__preventObserver__ = false;
            }));
            if (isPrev) prependSlidesIndexes.forEach((index => {
                slides[index].swiperLoopMoveDOM = true;
                slidesEl.prepend(slides[index]);
                slides[index].swiperLoopMoveDOM = false;
            }));
            if (isNext) appendSlidesIndexes.forEach((index => {
                slides[index].swiperLoopMoveDOM = true;
                slidesEl.append(slides[index]);
                slides[index].swiperLoopMoveDOM = false;
            }));
            swiper.recalcSlides();
            if (params.slidesPerView === "auto") swiper.updateSlides(); else if (gridEnabled && (prependSlidesIndexes.length > 0 && isPrev || appendSlidesIndexes.length > 0 && isNext)) swiper.slides.forEach(((slide, slideIndex) => {
                swiper.grid.updateSlide(slideIndex, slide, swiper.slides);
            }));
            if (params.watchSlidesProgress) swiper.updateSlidesOffset();
            if (slideTo) if (prependSlidesIndexes.length > 0 && isPrev) {
                if (typeof slideRealIndex === "undefined") {
                    const currentSlideTranslate = swiper.slidesGrid[activeIndex];
                    const newSlideTranslate = swiper.slidesGrid[activeIndex + slidesPrepended];
                    const diff = newSlideTranslate - currentSlideTranslate;
                    if (byMousewheel) swiper.setTranslate(swiper.translate - diff); else {
                        swiper.slideTo(activeIndex + Math.ceil(slidesPrepended), 0, false, true);
                        if (setTranslate) {
                            swiper.touchEventsData.startTranslate = swiper.touchEventsData.startTranslate - diff;
                            swiper.touchEventsData.currentTranslate = swiper.touchEventsData.currentTranslate - diff;
                        }
                    }
                } else if (setTranslate) {
                    const shift = gridEnabled ? prependSlidesIndexes.length / params.grid.rows : prependSlidesIndexes.length;
                    swiper.slideTo(swiper.activeIndex + shift, 0, false, true);
                    swiper.touchEventsData.currentTranslate = swiper.translate;
                }
            } else if (appendSlidesIndexes.length > 0 && isNext) if (typeof slideRealIndex === "undefined") {
                const currentSlideTranslate = swiper.slidesGrid[activeIndex];
                const newSlideTranslate = swiper.slidesGrid[activeIndex - slidesAppended];
                const diff = newSlideTranslate - currentSlideTranslate;
                if (byMousewheel) swiper.setTranslate(swiper.translate - diff); else {
                    swiper.slideTo(activeIndex - slidesAppended, 0, false, true);
                    if (setTranslate) {
                        swiper.touchEventsData.startTranslate = swiper.touchEventsData.startTranslate - diff;
                        swiper.touchEventsData.currentTranslate = swiper.touchEventsData.currentTranslate - diff;
                    }
                }
            } else {
                const shift = gridEnabled ? appendSlidesIndexes.length / params.grid.rows : appendSlidesIndexes.length;
                swiper.slideTo(swiper.activeIndex - shift, 0, false, true);
            }
            swiper.allowSlidePrev = allowSlidePrev;
            swiper.allowSlideNext = allowSlideNext;
            if (swiper.controller && swiper.controller.control && !byController) {
                const loopParams = {
                    slideRealIndex,
                    direction,
                    setTranslate,
                    activeSlideIndex,
                    byController: true
                };
                if (Array.isArray(swiper.controller.control)) swiper.controller.control.forEach((c => {
                    if (!c.destroyed && c.params.loop) c.loopFix({
                        ...loopParams,
                        slideTo: c.params.slidesPerView === params.slidesPerView ? slideTo : false
                    });
                })); else if (swiper.controller.control instanceof swiper.constructor && swiper.controller.control.params.loop) swiper.controller.control.loopFix({
                    ...loopParams,
                    slideTo: swiper.controller.control.params.slidesPerView === params.slidesPerView ? slideTo : false
                });
            }
            swiper.emit("loopFix");
        }
        function loopDestroy() {
            const swiper = this;
            const {params, slidesEl} = swiper;
            if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;
            swiper.recalcSlides();
            const newSlidesOrder = [];
            swiper.slides.forEach((slideEl => {
                const index = typeof slideEl.swiperSlideIndex === "undefined" ? slideEl.getAttribute("data-swiper-slide-index") * 1 : slideEl.swiperSlideIndex;
                newSlidesOrder[index] = slideEl;
            }));
            swiper.slides.forEach((slideEl => {
                slideEl.removeAttribute("data-swiper-slide-index");
            }));
            newSlidesOrder.forEach((slideEl => {
                slidesEl.append(slideEl);
            }));
            swiper.recalcSlides();
            swiper.slideTo(swiper.realIndex, 0);
        }
        var loop = {
            loopCreate,
            loopFix,
            loopDestroy
        };
        function setGrabCursor(moving) {
            const swiper = this;
            if (!swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
            const el = swiper.params.touchEventsTarget === "container" ? swiper.el : swiper.wrapperEl;
            if (swiper.isElement) swiper.__preventObserver__ = true;
            el.style.cursor = "move";
            el.style.cursor = moving ? "grabbing" : "grab";
            if (swiper.isElement) requestAnimationFrame((() => {
                swiper.__preventObserver__ = false;
            }));
        }
        function unsetGrabCursor() {
            const swiper = this;
            if (swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
            if (swiper.isElement) swiper.__preventObserver__ = true;
            swiper[swiper.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "";
            if (swiper.isElement) requestAnimationFrame((() => {
                swiper.__preventObserver__ = false;
            }));
        }
        var grabCursor = {
            setGrabCursor,
            unsetGrabCursor
        };
        function closestElement(selector, base) {
            if (base === void 0) base = this;
            function __closestFrom(el) {
                if (!el || el === ssr_window_esm_getDocument() || el === ssr_window_esm_getWindow()) return null;
                if (el.assignedSlot) el = el.assignedSlot;
                const found = el.closest(selector);
                if (!found && !el.getRootNode) return null;
                return found || __closestFrom(el.getRootNode().host);
            }
            return __closestFrom(base);
        }
        function preventEdgeSwipe(swiper, event, startX) {
            const window = ssr_window_esm_getWindow();
            const {params} = swiper;
            const edgeSwipeDetection = params.edgeSwipeDetection;
            const edgeSwipeThreshold = params.edgeSwipeThreshold;
            if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window.innerWidth - edgeSwipeThreshold)) {
                if (edgeSwipeDetection === "prevent") {
                    event.preventDefault();
                    return true;
                }
                return false;
            }
            return true;
        }
        function onTouchStart(event) {
            const swiper = this;
            const document = ssr_window_esm_getDocument();
            let e = event;
            if (e.originalEvent) e = e.originalEvent;
            const data = swiper.touchEventsData;
            if (e.type === "pointerdown") {
                if (data.pointerId !== null && data.pointerId !== e.pointerId) return;
                data.pointerId = e.pointerId;
            } else if (e.type === "touchstart" && e.targetTouches.length === 1) data.touchId = e.targetTouches[0].identifier;
            if (e.type === "touchstart") {
                preventEdgeSwipe(swiper, e, e.targetTouches[0].pageX);
                return;
            }
            const {params, touches, enabled} = swiper;
            if (!enabled) return;
            if (!params.simulateTouch && e.pointerType === "mouse") return;
            if (swiper.animating && params.preventInteractionOnTransition) return;
            if (!swiper.animating && params.cssMode && params.loop) swiper.loopFix();
            let targetEl = e.target;
            if (params.touchEventsTarget === "wrapper") if (!swiper.wrapperEl.contains(targetEl)) return;
            if ("which" in e && e.which === 3) return;
            if ("button" in e && e.button > 0) return;
            if (data.isTouched && data.isMoved) return;
            const swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== "";
            const eventPath = e.composedPath ? e.composedPath() : e.path;
            if (swipingClassHasValue && e.target && e.target.shadowRoot && eventPath) targetEl = eventPath[0];
            const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`;
            const isTargetShadow = !!(e.target && e.target.shadowRoot);
            if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, targetEl) : targetEl.closest(noSwipingSelector))) {
                swiper.allowClick = true;
                return;
            }
            if (params.swipeHandler) if (!targetEl.closest(params.swipeHandler)) return;
            touches.currentX = e.pageX;
            touches.currentY = e.pageY;
            const startX = touches.currentX;
            const startY = touches.currentY;
            if (!preventEdgeSwipe(swiper, e, startX)) return;
            Object.assign(data, {
                isTouched: true,
                isMoved: false,
                allowTouchCallbacks: true,
                isScrolling: void 0,
                startMoving: void 0
            });
            touches.startX = startX;
            touches.startY = startY;
            data.touchStartTime = utils_now();
            swiper.allowClick = true;
            swiper.updateSize();
            swiper.swipeDirection = void 0;
            if (params.threshold > 0) data.allowThresholdMove = false;
            let preventDefault = true;
            if (targetEl.matches(data.focusableElements)) {
                preventDefault = false;
                if (targetEl.nodeName === "SELECT") data.isTouched = false;
            }
            if (document.activeElement && document.activeElement.matches(data.focusableElements) && document.activeElement !== targetEl) document.activeElement.blur();
            const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
            if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !targetEl.isContentEditable) e.preventDefault();
            if (params.freeMode && params.freeMode.enabled && swiper.freeMode && swiper.animating && !params.cssMode) swiper.freeMode.onTouchStart();
            swiper.emit("touchStart", e);
        }
        function onTouchMove(event) {
            const document = ssr_window_esm_getDocument();
            const swiper = this;
            const data = swiper.touchEventsData;
            const {params, touches, rtlTranslate: rtl, enabled} = swiper;
            if (!enabled) return;
            if (!params.simulateTouch && event.pointerType === "mouse") return;
            let e = event;
            if (e.originalEvent) e = e.originalEvent;
            if (e.type === "pointermove") {
                if (data.touchId !== null) return;
                const id = e.pointerId;
                if (id !== data.pointerId) return;
            }
            let targetTouch;
            if (e.type === "touchmove") {
                targetTouch = [ ...e.changedTouches ].filter((t => t.identifier === data.touchId))[0];
                if (!targetTouch || targetTouch.identifier !== data.touchId) return;
            } else targetTouch = e;
            if (!data.isTouched) {
                if (data.startMoving && data.isScrolling) swiper.emit("touchMoveOpposite", e);
                return;
            }
            const pageX = targetTouch.pageX;
            const pageY = targetTouch.pageY;
            if (e.preventedByNestedSwiper) {
                touches.startX = pageX;
                touches.startY = pageY;
                return;
            }
            if (!swiper.allowTouchMove) {
                if (!e.target.matches(data.focusableElements)) swiper.allowClick = false;
                if (data.isTouched) {
                    Object.assign(touches, {
                        startX: pageX,
                        startY: pageY,
                        currentX: pageX,
                        currentY: pageY
                    });
                    data.touchStartTime = utils_now();
                }
                return;
            }
            if (params.touchReleaseOnEdges && !params.loop) if (swiper.isVertical()) {
                if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
                    data.isTouched = false;
                    data.isMoved = false;
                    return;
                }
            } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) return;
            if (document.activeElement) if (e.target === document.activeElement && e.target.matches(data.focusableElements)) {
                data.isMoved = true;
                swiper.allowClick = false;
                return;
            }
            if (data.allowTouchCallbacks) swiper.emit("touchMove", e);
            touches.previousX = touches.currentX;
            touches.previousY = touches.currentY;
            touches.currentX = pageX;
            touches.currentY = pageY;
            const diffX = touches.currentX - touches.startX;
            const diffY = touches.currentY - touches.startY;
            if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold) return;
            if (typeof data.isScrolling === "undefined") {
                let touchAngle;
                if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) data.isScrolling = false; else if (diffX * diffX + diffY * diffY >= 25) {
                    touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
                    data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
                }
            }
            if (data.isScrolling) swiper.emit("touchMoveOpposite", e);
            if (typeof data.startMoving === "undefined") if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) data.startMoving = true;
            if (data.isScrolling) {
                data.isTouched = false;
                return;
            }
            if (!data.startMoving) return;
            swiper.allowClick = false;
            if (!params.cssMode && e.cancelable) e.preventDefault();
            if (params.touchMoveStopPropagation && !params.nested) e.stopPropagation();
            let diff = swiper.isHorizontal() ? diffX : diffY;
            let touchesDiff = swiper.isHorizontal() ? touches.currentX - touches.previousX : touches.currentY - touches.previousY;
            if (params.oneWayMovement) {
                diff = Math.abs(diff) * (rtl ? 1 : -1);
                touchesDiff = Math.abs(touchesDiff) * (rtl ? 1 : -1);
            }
            touches.diff = diff;
            diff *= params.touchRatio;
            if (rtl) {
                diff = -diff;
                touchesDiff = -touchesDiff;
            }
            const prevTouchesDirection = swiper.touchesDirection;
            swiper.swipeDirection = diff > 0 ? "prev" : "next";
            swiper.touchesDirection = touchesDiff > 0 ? "prev" : "next";
            const isLoop = swiper.params.loop && !params.cssMode;
            const allowLoopFix = swiper.touchesDirection === "next" && swiper.allowSlideNext || swiper.touchesDirection === "prev" && swiper.allowSlidePrev;
            if (!data.isMoved) {
                if (isLoop && allowLoopFix) swiper.loopFix({
                    direction: swiper.swipeDirection
                });
                data.startTranslate = swiper.getTranslate();
                swiper.setTransition(0);
                if (swiper.animating) {
                    const evt = new window.CustomEvent("transitionend", {
                        bubbles: true,
                        cancelable: true
                    });
                    swiper.wrapperEl.dispatchEvent(evt);
                }
                data.allowMomentumBounce = false;
                if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) swiper.setGrabCursor(true);
                swiper.emit("sliderFirstMove", e);
            }
            let loopFixed;
            (new Date).getTime();
            if (data.isMoved && data.allowThresholdMove && prevTouchesDirection !== swiper.touchesDirection && isLoop && allowLoopFix && Math.abs(diff) >= 1) {
                Object.assign(touches, {
                    startX: pageX,
                    startY: pageY,
                    currentX: pageX,
                    currentY: pageY,
                    startTranslate: data.currentTranslate
                });
                data.loopSwapReset = true;
                data.startTranslate = data.currentTranslate;
                return;
            }
            swiper.emit("sliderMove", e);
            data.isMoved = true;
            data.currentTranslate = diff + data.startTranslate;
            let disableParentSwiper = true;
            let resistanceRatio = params.resistanceRatio;
            if (params.touchReleaseOnEdges) resistanceRatio = 0;
            if (diff > 0) {
                if (isLoop && allowLoopFix && !loopFixed && data.allowThresholdMove && data.currentTranslate > (params.centeredSlides ? swiper.minTranslate() - swiper.slidesSizesGrid[swiper.activeIndex + 1] : swiper.minTranslate())) swiper.loopFix({
                    direction: "prev",
                    setTranslate: true,
                    activeSlideIndex: 0
                });
                if (data.currentTranslate > swiper.minTranslate()) {
                    disableParentSwiper = false;
                    if (params.resistance) data.currentTranslate = swiper.minTranslate() - 1 + (-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio;
                }
            } else if (diff < 0) {
                if (isLoop && allowLoopFix && !loopFixed && data.allowThresholdMove && data.currentTranslate < (params.centeredSlides ? swiper.maxTranslate() + swiper.slidesSizesGrid[swiper.slidesSizesGrid.length - 1] : swiper.maxTranslate())) swiper.loopFix({
                    direction: "next",
                    setTranslate: true,
                    activeSlideIndex: swiper.slides.length - (params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(parseFloat(params.slidesPerView, 10)))
                });
                if (data.currentTranslate < swiper.maxTranslate()) {
                    disableParentSwiper = false;
                    if (params.resistance) data.currentTranslate = swiper.maxTranslate() + 1 - (swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio;
                }
            }
            if (disableParentSwiper) e.preventedByNestedSwiper = true;
            if (!swiper.allowSlideNext && swiper.swipeDirection === "next" && data.currentTranslate < data.startTranslate) data.currentTranslate = data.startTranslate;
            if (!swiper.allowSlidePrev && swiper.swipeDirection === "prev" && data.currentTranslate > data.startTranslate) data.currentTranslate = data.startTranslate;
            if (!swiper.allowSlidePrev && !swiper.allowSlideNext) data.currentTranslate = data.startTranslate;
            if (params.threshold > 0) if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
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
            if (!params.followFinger || params.cssMode) return;
            if (params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) {
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
            }
            if (params.freeMode && params.freeMode.enabled && swiper.freeMode) swiper.freeMode.onTouchMove();
            swiper.updateProgress(data.currentTranslate);
            swiper.setTranslate(data.currentTranslate);
        }
        function onTouchEnd(event) {
            const swiper = this;
            const data = swiper.touchEventsData;
            let e = event;
            if (e.originalEvent) e = e.originalEvent;
            let targetTouch;
            const isTouchEvent = e.type === "touchend" || e.type === "touchcancel";
            if (!isTouchEvent) {
                if (data.touchId !== null) return;
                if (e.pointerId !== data.pointerId) return;
                targetTouch = e;
            } else {
                targetTouch = [ ...e.changedTouches ].filter((t => t.identifier === data.touchId))[0];
                if (!targetTouch || targetTouch.identifier !== data.touchId) return;
            }
            if ([ "pointercancel", "pointerout", "pointerleave", "contextmenu" ].includes(e.type)) {
                const proceed = [ "pointercancel", "contextmenu" ].includes(e.type) && (swiper.browser.isSafari || swiper.browser.isWebView);
                if (!proceed) return;
            }
            data.pointerId = null;
            data.touchId = null;
            const {params, touches, rtlTranslate: rtl, slidesGrid, enabled} = swiper;
            if (!enabled) return;
            if (!params.simulateTouch && e.pointerType === "mouse") return;
            if (data.allowTouchCallbacks) swiper.emit("touchEnd", e);
            data.allowTouchCallbacks = false;
            if (!data.isTouched) {
                if (data.isMoved && params.grabCursor) swiper.setGrabCursor(false);
                data.isMoved = false;
                data.startMoving = false;
                return;
            }
            if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) swiper.setGrabCursor(false);
            const touchEndTime = utils_now();
            const timeDiff = touchEndTime - data.touchStartTime;
            if (swiper.allowClick) {
                const pathTree = e.path || e.composedPath && e.composedPath();
                swiper.updateClickedSlide(pathTree && pathTree[0] || e.target, pathTree);
                swiper.emit("tap click", e);
                if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) swiper.emit("doubleTap doubleClick", e);
            }
            data.lastClickTime = utils_now();
            utils_nextTick((() => {
                if (!swiper.destroyed) swiper.allowClick = true;
            }));
            if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 && !data.loopSwapReset || data.currentTranslate === data.startTranslate && !data.loopSwapReset) {
                data.isTouched = false;
                data.isMoved = false;
                data.startMoving = false;
                return;
            }
            data.isTouched = false;
            data.isMoved = false;
            data.startMoving = false;
            let currentPos;
            if (params.followFinger) currentPos = rtl ? swiper.translate : -swiper.translate; else currentPos = -data.currentTranslate;
            if (params.cssMode) return;
            if (params.freeMode && params.freeMode.enabled) {
                swiper.freeMode.onTouchEnd({
                    currentPos
                });
                return;
            }
            const swipeToLast = currentPos >= -swiper.maxTranslate() && !swiper.params.loop;
            let stopIndex = 0;
            let groupSize = swiper.slidesSizesGrid[0];
            for (let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
                const increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
                if (typeof slidesGrid[i + increment] !== "undefined") {
                    if (swipeToLast || currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment]) {
                        stopIndex = i;
                        groupSize = slidesGrid[i + increment] - slidesGrid[i];
                    }
                } else if (swipeToLast || currentPos >= slidesGrid[i]) {
                    stopIndex = i;
                    groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
                }
            }
            let rewindFirstIndex = null;
            let rewindLastIndex = null;
            if (params.rewind) if (swiper.isBeginning) rewindLastIndex = params.virtual && params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1; else if (swiper.isEnd) rewindFirstIndex = 0;
            const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
            const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
            if (timeDiff > params.longSwipesMs) {
                if (!params.longSwipes) {
                    swiper.slideTo(swiper.activeIndex);
                    return;
                }
                if (swiper.swipeDirection === "next") if (ratio >= params.longSwipesRatio) swiper.slideTo(params.rewind && swiper.isEnd ? rewindFirstIndex : stopIndex + increment); else swiper.slideTo(stopIndex);
                if (swiper.swipeDirection === "prev") if (ratio > 1 - params.longSwipesRatio) swiper.slideTo(stopIndex + increment); else if (rewindLastIndex !== null && ratio < 0 && Math.abs(ratio) > params.longSwipesRatio) swiper.slideTo(rewindLastIndex); else swiper.slideTo(stopIndex);
            } else {
                if (!params.shortSwipes) {
                    swiper.slideTo(swiper.activeIndex);
                    return;
                }
                const isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);
                if (!isNavButtonTarget) {
                    if (swiper.swipeDirection === "next") swiper.slideTo(rewindFirstIndex !== null ? rewindFirstIndex : stopIndex + increment);
                    if (swiper.swipeDirection === "prev") swiper.slideTo(rewindLastIndex !== null ? rewindLastIndex : stopIndex);
                } else if (e.target === swiper.navigation.nextEl) swiper.slideTo(stopIndex + increment); else swiper.slideTo(stopIndex);
            }
        }
        function onResize() {
            const swiper = this;
            const {params, el} = swiper;
            if (el && el.offsetWidth === 0) return;
            if (params.breakpoints) swiper.setBreakpoint();
            const {allowSlideNext, allowSlidePrev, snapGrid} = swiper;
            const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
            swiper.allowSlideNext = true;
            swiper.allowSlidePrev = true;
            swiper.updateSize();
            swiper.updateSlides();
            swiper.updateSlidesClasses();
            const isVirtualLoop = isVirtual && params.loop;
            if ((params.slidesPerView === "auto" || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides && !isVirtualLoop) swiper.slideTo(swiper.slides.length - 1, 0, false, true); else if (swiper.params.loop && !isVirtual) swiper.slideToLoop(swiper.realIndex, 0, false, true); else swiper.slideTo(swiper.activeIndex, 0, false, true);
            if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
                clearTimeout(swiper.autoplay.resizeTimeout);
                swiper.autoplay.resizeTimeout = setTimeout((() => {
                    if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) swiper.autoplay.resume();
                }), 500);
            }
            swiper.allowSlidePrev = allowSlidePrev;
            swiper.allowSlideNext = allowSlideNext;
            if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) swiper.checkOverflow();
        }
        function onClick(e) {
            const swiper = this;
            if (!swiper.enabled) return;
            if (!swiper.allowClick) {
                if (swiper.params.preventClicks) e.preventDefault();
                if (swiper.params.preventClicksPropagation && swiper.animating) {
                    e.stopPropagation();
                    e.stopImmediatePropagation();
                }
            }
        }
        function onScroll() {
            const swiper = this;
            const {wrapperEl, rtlTranslate, enabled} = swiper;
            if (!enabled) return;
            swiper.previousTranslate = swiper.translate;
            if (swiper.isHorizontal()) swiper.translate = -wrapperEl.scrollLeft; else swiper.translate = -wrapperEl.scrollTop;
            if (swiper.translate === 0) swiper.translate = 0;
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
            let newProgress;
            const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
            if (translatesDiff === 0) newProgress = 0; else newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
            if (newProgress !== swiper.progress) swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
            swiper.emit("setTranslate", swiper.translate, false);
        }
        function onLoad(e) {
            const swiper = this;
            processLazyPreloader(swiper, e.target);
            if (swiper.params.cssMode || swiper.params.slidesPerView !== "auto" && !swiper.params.autoHeight) return;
            swiper.update();
        }
        function swiper_core_onDocumentTouchStart() {
            const swiper = this;
            if (swiper.documentTouchHandlerProceeded) return;
            swiper.documentTouchHandlerProceeded = true;
            if (swiper.params.touchReleaseOnEdges) swiper.el.style.touchAction = "auto";
        }
        const events = (swiper, method) => {
            const document = ssr_window_esm_getDocument();
            const {params, el, wrapperEl, device} = swiper;
            const capture = !!params.nested;
            const domMethod = method === "on" ? "addEventListener" : "removeEventListener";
            const swiperMethod = method;
            document[domMethod]("touchstart", swiper.onDocumentTouchStart, {
                passive: false,
                capture
            });
            el[domMethod]("touchstart", swiper.onTouchStart, {
                passive: false
            });
            el[domMethod]("pointerdown", swiper.onTouchStart, {
                passive: false
            });
            document[domMethod]("touchmove", swiper.onTouchMove, {
                passive: false,
                capture
            });
            document[domMethod]("pointermove", swiper.onTouchMove, {
                passive: false,
                capture
            });
            document[domMethod]("touchend", swiper.onTouchEnd, {
                passive: true
            });
            document[domMethod]("pointerup", swiper.onTouchEnd, {
                passive: true
            });
            document[domMethod]("pointercancel", swiper.onTouchEnd, {
                passive: true
            });
            document[domMethod]("touchcancel", swiper.onTouchEnd, {
                passive: true
            });
            document[domMethod]("pointerout", swiper.onTouchEnd, {
                passive: true
            });
            document[domMethod]("pointerleave", swiper.onTouchEnd, {
                passive: true
            });
            document[domMethod]("contextmenu", swiper.onTouchEnd, {
                passive: true
            });
            if (params.preventClicks || params.preventClicksPropagation) el[domMethod]("click", swiper.onClick, true);
            if (params.cssMode) wrapperEl[domMethod]("scroll", swiper.onScroll);
            if (params.updateOnWindowResize) swiper[swiperMethod](device.ios || device.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", onResize, true); else swiper[swiperMethod]("observerUpdate", onResize, true);
            el[domMethod]("load", swiper.onLoad, {
                capture: true
            });
        };
        function attachEvents() {
            const swiper = this;
            const {params} = swiper;
            swiper.onTouchStart = onTouchStart.bind(swiper);
            swiper.onTouchMove = onTouchMove.bind(swiper);
            swiper.onTouchEnd = onTouchEnd.bind(swiper);
            swiper.onDocumentTouchStart = swiper_core_onDocumentTouchStart.bind(swiper);
            if (params.cssMode) swiper.onScroll = onScroll.bind(swiper);
            swiper.onClick = onClick.bind(swiper);
            swiper.onLoad = onLoad.bind(swiper);
            events(swiper, "on");
        }
        function detachEvents() {
            const swiper = this;
            events(swiper, "off");
        }
        var events$1 = {
            attachEvents,
            detachEvents
        };
        const isGridEnabled = (swiper, params) => swiper.grid && params.grid && params.grid.rows > 1;
        function setBreakpoint() {
            const swiper = this;
            const {realIndex, initialized, params, el} = swiper;
            const breakpoints = params.breakpoints;
            if (!breakpoints || breakpoints && Object.keys(breakpoints).length === 0) return;
            const breakpoint = swiper.getBreakpoint(breakpoints, swiper.params.breakpointsBase, swiper.el);
            if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;
            const breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : void 0;
            const breakpointParams = breakpointOnlyParams || swiper.originalParams;
            const wasMultiRow = isGridEnabled(swiper, params);
            const isMultiRow = isGridEnabled(swiper, breakpointParams);
            const wasEnabled = params.enabled;
            if (wasMultiRow && !isMultiRow) {
                el.classList.remove(`${params.containerModifierClass}grid`, `${params.containerModifierClass}grid-column`);
                swiper.emitContainerClasses();
            } else if (!wasMultiRow && isMultiRow) {
                el.classList.add(`${params.containerModifierClass}grid`);
                if (breakpointParams.grid.fill && breakpointParams.grid.fill === "column" || !breakpointParams.grid.fill && params.grid.fill === "column") el.classList.add(`${params.containerModifierClass}grid-column`);
                swiper.emitContainerClasses();
            }
            [ "navigation", "pagination", "scrollbar" ].forEach((prop => {
                if (typeof breakpointParams[prop] === "undefined") return;
                const wasModuleEnabled = params[prop] && params[prop].enabled;
                const isModuleEnabled = breakpointParams[prop] && breakpointParams[prop].enabled;
                if (wasModuleEnabled && !isModuleEnabled) swiper[prop].disable();
                if (!wasModuleEnabled && isModuleEnabled) swiper[prop].enable();
            }));
            const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
            const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
            const wasLoop = params.loop;
            if (directionChanged && initialized) swiper.changeDirection();
            utils_extend(swiper.params, breakpointParams);
            const isEnabled = swiper.params.enabled;
            const hasLoop = swiper.params.loop;
            Object.assign(swiper, {
                allowTouchMove: swiper.params.allowTouchMove,
                allowSlideNext: swiper.params.allowSlideNext,
                allowSlidePrev: swiper.params.allowSlidePrev
            });
            if (wasEnabled && !isEnabled) swiper.disable(); else if (!wasEnabled && isEnabled) swiper.enable();
            swiper.currentBreakpoint = breakpoint;
            swiper.emit("_beforeBreakpoint", breakpointParams);
            if (initialized) if (needsReLoop) {
                swiper.loopDestroy();
                swiper.loopCreate(realIndex);
                swiper.updateSlides();
            } else if (!wasLoop && hasLoop) {
                swiper.loopCreate(realIndex);
                swiper.updateSlides();
            } else if (wasLoop && !hasLoop) swiper.loopDestroy();
            swiper.emit("breakpoint", breakpointParams);
        }
        function getBreakpoint(breakpoints, base, containerEl) {
            if (base === void 0) base = "window";
            if (!breakpoints || base === "container" && !containerEl) return;
            let breakpoint = false;
            const window = ssr_window_esm_getWindow();
            const currentHeight = base === "window" ? window.innerHeight : containerEl.clientHeight;
            const points = Object.keys(breakpoints).map((point => {
                if (typeof point === "string" && point.indexOf("@") === 0) {
                    const minRatio = parseFloat(point.substr(1));
                    const value = currentHeight * minRatio;
                    return {
                        value,
                        point
                    };
                }
                return {
                    value: point,
                    point
                };
            }));
            points.sort(((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10)));
            for (let i = 0; i < points.length; i += 1) {
                const {point, value} = points[i];
                if (base === "window") {
                    if (window.matchMedia(`(min-width: ${value}px)`).matches) breakpoint = point;
                } else if (value <= containerEl.clientWidth) breakpoint = point;
            }
            return breakpoint || "max";
        }
        var breakpoints = {
            setBreakpoint,
            getBreakpoint
        };
        function prepareClasses(entries, prefix) {
            const resultClasses = [];
            entries.forEach((item => {
                if (typeof item === "object") Object.keys(item).forEach((classNames => {
                    if (item[classNames]) resultClasses.push(prefix + classNames);
                })); else if (typeof item === "string") resultClasses.push(prefix + item);
            }));
            return resultClasses;
        }
        function addClasses() {
            const swiper = this;
            const {classNames, params, rtl, el, device} = swiper;
            const suffixes = prepareClasses([ "initialized", params.direction, {
                "free-mode": swiper.params.freeMode && params.freeMode.enabled
            }, {
                autoheight: params.autoHeight
            }, {
                rtl
            }, {
                grid: params.grid && params.grid.rows > 1
            }, {
                "grid-column": params.grid && params.grid.rows > 1 && params.grid.fill === "column"
            }, {
                android: device.android
            }, {
                ios: device.ios
            }, {
                "css-mode": params.cssMode
            }, {
                centered: params.cssMode && params.centeredSlides
            }, {
                "watch-progress": params.watchSlidesProgress
            } ], params.containerModifierClass);
            classNames.push(...suffixes);
            el.classList.add(...classNames);
            swiper.emitContainerClasses();
        }
        function swiper_core_removeClasses() {
            const swiper = this;
            const {el, classNames} = swiper;
            el.classList.remove(...classNames);
            swiper.emitContainerClasses();
        }
        var classes = {
            addClasses,
            removeClasses: swiper_core_removeClasses
        };
        function checkOverflow() {
            const swiper = this;
            const {isLocked: wasLocked, params} = swiper;
            const {slidesOffsetBefore} = params;
            if (slidesOffsetBefore) {
                const lastSlideIndex = swiper.slides.length - 1;
                const lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + slidesOffsetBefore * 2;
                swiper.isLocked = swiper.size > lastSlideRightEdge;
            } else swiper.isLocked = swiper.snapGrid.length === 1;
            if (params.allowSlideNext === true) swiper.allowSlideNext = !swiper.isLocked;
            if (params.allowSlidePrev === true) swiper.allowSlidePrev = !swiper.isLocked;
            if (wasLocked && wasLocked !== swiper.isLocked) swiper.isEnd = false;
            if (wasLocked !== swiper.isLocked) swiper.emit(swiper.isLocked ? "lock" : "unlock");
        }
        var checkOverflow$1 = {
            checkOverflow
        };
        var defaults = {
            init: true,
            direction: "horizontal",
            oneWayMovement: false,
            swiperElementNodeName: "SWIPER-CONTAINER",
            touchEventsTarget: "wrapper",
            initialSlide: 0,
            speed: 300,
            cssMode: false,
            updateOnWindowResize: true,
            resizeObserver: true,
            nested: false,
            createElements: false,
            eventsPrefix: "swiper",
            enabled: true,
            focusableElements: "input, select, option, textarea, button, video, label",
            width: null,
            height: null,
            preventInteractionOnTransition: false,
            userAgent: null,
            url: null,
            edgeSwipeDetection: false,
            edgeSwipeThreshold: 20,
            autoHeight: false,
            setWrapperSize: false,
            virtualTranslate: false,
            effect: "slide",
            breakpoints: void 0,
            breakpointsBase: "window",
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerGroup: 1,
            slidesPerGroupSkip: 0,
            slidesPerGroupAuto: false,
            centeredSlides: false,
            centeredSlidesBounds: false,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            normalizeSlideIndex: true,
            centerInsufficientSlides: false,
            watchOverflow: true,
            roundLengths: false,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: true,
            shortSwipes: true,
            longSwipes: true,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: true,
            allowTouchMove: true,
            threshold: 5,
            touchMoveStopPropagation: false,
            touchStartPreventDefault: true,
            touchStartForcePreventDefault: false,
            touchReleaseOnEdges: false,
            uniqueNavElements: true,
            resistance: true,
            resistanceRatio: .85,
            watchSlidesProgress: false,
            grabCursor: false,
            preventClicks: true,
            preventClicksPropagation: true,
            slideToClickedSlide: false,
            loop: false,
            loopAddBlankSlides: true,
            loopAdditionalSlides: 0,
            loopPreventsSliding: true,
            rewind: false,
            allowSlidePrev: true,
            allowSlideNext: true,
            swipeHandler: null,
            noSwiping: true,
            noSwipingClass: "swiper-no-swiping",
            noSwipingSelector: null,
            passiveListeners: true,
            maxBackfaceHiddenSlides: 10,
            containerModifierClass: "swiper-",
            slideClass: "swiper-slide",
            slideBlankClass: "swiper-slide-blank",
            slideActiveClass: "swiper-slide-active",
            slideVisibleClass: "swiper-slide-visible",
            slideFullyVisibleClass: "swiper-slide-fully-visible",
            slideNextClass: "swiper-slide-next",
            slidePrevClass: "swiper-slide-prev",
            wrapperClass: "swiper-wrapper",
            lazyPreloaderClass: "swiper-lazy-preloader",
            lazyPreloadPrevNext: 0,
            runCallbacksOnInit: true,
            _emitClasses: false
        };
        function moduleExtendParams(params, allModulesParams) {
            return function extendParams(obj) {
                if (obj === void 0) obj = {};
                const moduleParamName = Object.keys(obj)[0];
                const moduleParams = obj[moduleParamName];
                if (typeof moduleParams !== "object" || moduleParams === null) {
                    utils_extend(allModulesParams, obj);
                    return;
                }
                if (params[moduleParamName] === true) params[moduleParamName] = {
                    enabled: true
                };
                if (moduleParamName === "navigation" && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].prevEl && !params[moduleParamName].nextEl) params[moduleParamName].auto = true;
                if ([ "pagination", "scrollbar" ].indexOf(moduleParamName) >= 0 && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].el) params[moduleParamName].auto = true;
                if (!(moduleParamName in params && "enabled" in moduleParams)) {
                    utils_extend(allModulesParams, obj);
                    return;
                }
                if (typeof params[moduleParamName] === "object" && !("enabled" in params[moduleParamName])) params[moduleParamName].enabled = true;
                if (!params[moduleParamName]) params[moduleParamName] = {
                    enabled: false
                };
                utils_extend(allModulesParams, obj);
            };
        }
        const prototypes = {
            eventsEmitter,
            update,
            translate,
            transition,
            slide,
            loop,
            grabCursor,
            events: events$1,
            breakpoints,
            checkOverflow: checkOverflow$1,
            classes
        };
        const extendedDefaults = {};
        class swiper_core_Swiper {
            constructor() {
                let el;
                let params;
                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
                if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === "Object") params = args[0]; else [el, params] = args;
                if (!params) params = {};
                params = utils_extend({}, params);
                if (el && !params.el) params.el = el;
                const document = ssr_window_esm_getDocument();
                if (params.el && typeof params.el === "string" && document.querySelectorAll(params.el).length > 1) {
                    const swipers = [];
                    document.querySelectorAll(params.el).forEach((containerEl => {
                        const newParams = utils_extend({}, params, {
                            el: containerEl
                        });
                        swipers.push(new swiper_core_Swiper(newParams));
                    }));
                    return swipers;
                }
                const swiper = this;
                swiper.__swiper__ = true;
                swiper.support = getSupport();
                swiper.device = getDevice({
                    userAgent: params.userAgent
                });
                swiper.browser = getBrowser();
                swiper.eventsListeners = {};
                swiper.eventsAnyListeners = [];
                swiper.modules = [ ...swiper.__modules__ ];
                if (params.modules && Array.isArray(params.modules)) swiper.modules.push(...params.modules);
                const allModulesParams = {};
                swiper.modules.forEach((mod => {
                    mod({
                        params,
                        swiper,
                        extendParams: moduleExtendParams(params, allModulesParams),
                        on: swiper.on.bind(swiper),
                        once: swiper.once.bind(swiper),
                        off: swiper.off.bind(swiper),
                        emit: swiper.emit.bind(swiper)
                    });
                }));
                const swiperParams = utils_extend({}, defaults, allModulesParams);
                swiper.params = utils_extend({}, swiperParams, extendedDefaults, params);
                swiper.originalParams = utils_extend({}, swiper.params);
                swiper.passedParams = utils_extend({}, params);
                if (swiper.params && swiper.params.on) Object.keys(swiper.params.on).forEach((eventName => {
                    swiper.on(eventName, swiper.params.on[eventName]);
                }));
                if (swiper.params && swiper.params.onAny) swiper.onAny(swiper.params.onAny);
                Object.assign(swiper, {
                    enabled: swiper.params.enabled,
                    el,
                    classNames: [],
                    slides: [],
                    slidesGrid: [],
                    snapGrid: [],
                    slidesSizesGrid: [],
                    isHorizontal() {
                        return swiper.params.direction === "horizontal";
                    },
                    isVertical() {
                        return swiper.params.direction === "vertical";
                    },
                    activeIndex: 0,
                    realIndex: 0,
                    isBeginning: true,
                    isEnd: false,
                    translate: 0,
                    previousTranslate: 0,
                    progress: 0,
                    velocity: 0,
                    animating: false,
                    cssOverflowAdjustment() {
                        return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
                    },
                    allowSlideNext: swiper.params.allowSlideNext,
                    allowSlidePrev: swiper.params.allowSlidePrev,
                    touchEventsData: {
                        isTouched: void 0,
                        isMoved: void 0,
                        allowTouchCallbacks: void 0,
                        touchStartTime: void 0,
                        isScrolling: void 0,
                        currentTranslate: void 0,
                        startTranslate: void 0,
                        allowThresholdMove: void 0,
                        focusableElements: swiper.params.focusableElements,
                        lastClickTime: 0,
                        clickTimeout: void 0,
                        velocities: [],
                        allowMomentumBounce: void 0,
                        startMoving: void 0,
                        pointerId: null,
                        touchId: null
                    },
                    allowClick: true,
                    allowTouchMove: swiper.params.allowTouchMove,
                    touches: {
                        startX: 0,
                        startY: 0,
                        currentX: 0,
                        currentY: 0,
                        diff: 0
                    },
                    imagesToLoad: [],
                    imagesLoaded: 0
                });
                swiper.emit("_swiper");
                if (swiper.params.init) swiper.init();
                return swiper;
            }
            getDirectionLabel(property) {
                if (this.isHorizontal()) return property;
                return {
                    width: "height",
                    "margin-top": "margin-left",
                    "margin-bottom ": "margin-right",
                    "margin-left": "margin-top",
                    "margin-right": "margin-bottom",
                    "padding-left": "padding-top",
                    "padding-right": "padding-bottom",
                    marginRight: "marginBottom"
                }[property];
            }
            getSlideIndex(slideEl) {
                const {slidesEl, params} = this;
                const slides = utils_elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
                const firstSlideIndex = utils_elementIndex(slides[0]);
                return utils_elementIndex(slideEl) - firstSlideIndex;
            }
            getSlideIndexByData(index) {
                return this.getSlideIndex(this.slides.filter((slideEl => slideEl.getAttribute("data-swiper-slide-index") * 1 === index))[0]);
            }
            recalcSlides() {
                const swiper = this;
                const {slidesEl, params} = swiper;
                swiper.slides = utils_elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
            }
            enable() {
                const swiper = this;
                if (swiper.enabled) return;
                swiper.enabled = true;
                if (swiper.params.grabCursor) swiper.setGrabCursor();
                swiper.emit("enable");
            }
            disable() {
                const swiper = this;
                if (!swiper.enabled) return;
                swiper.enabled = false;
                if (swiper.params.grabCursor) swiper.unsetGrabCursor();
                swiper.emit("disable");
            }
            setProgress(progress, speed) {
                const swiper = this;
                progress = Math.min(Math.max(progress, 0), 1);
                const min = swiper.minTranslate();
                const max = swiper.maxTranslate();
                const current = (max - min) * progress + min;
                swiper.translateTo(current, typeof speed === "undefined" ? 0 : speed);
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
            }
            emitContainerClasses() {
                const swiper = this;
                if (!swiper.params._emitClasses || !swiper.el) return;
                const cls = swiper.el.className.split(" ").filter((className => className.indexOf("swiper") === 0 || className.indexOf(swiper.params.containerModifierClass) === 0));
                swiper.emit("_containerClasses", cls.join(" "));
            }
            getSlideClasses(slideEl) {
                const swiper = this;
                if (swiper.destroyed) return "";
                return slideEl.className.split(" ").filter((className => className.indexOf("swiper-slide") === 0 || className.indexOf(swiper.params.slideClass) === 0)).join(" ");
            }
            emitSlidesClasses() {
                const swiper = this;
                if (!swiper.params._emitClasses || !swiper.el) return;
                const updates = [];
                swiper.slides.forEach((slideEl => {
                    const classNames = swiper.getSlideClasses(slideEl);
                    updates.push({
                        slideEl,
                        classNames
                    });
                    swiper.emit("_slideClass", slideEl, classNames);
                }));
                swiper.emit("_slideClasses", updates);
            }
            slidesPerViewDynamic(view, exact) {
                if (view === void 0) view = "current";
                if (exact === void 0) exact = false;
                const swiper = this;
                const {params, slides, slidesGrid, slidesSizesGrid, size: swiperSize, activeIndex} = swiper;
                let spv = 1;
                if (typeof params.slidesPerView === "number") return params.slidesPerView;
                if (params.centeredSlides) {
                    let slideSize = slides[activeIndex] ? Math.ceil(slides[activeIndex].swiperSlideSize) : 0;
                    let breakLoop;
                    for (let i = activeIndex + 1; i < slides.length; i += 1) if (slides[i] && !breakLoop) {
                        slideSize += Math.ceil(slides[i].swiperSlideSize);
                        spv += 1;
                        if (slideSize > swiperSize) breakLoop = true;
                    }
                    for (let i = activeIndex - 1; i >= 0; i -= 1) if (slides[i] && !breakLoop) {
                        slideSize += slides[i].swiperSlideSize;
                        spv += 1;
                        if (slideSize > swiperSize) breakLoop = true;
                    }
                } else if (view === "current") for (let i = activeIndex + 1; i < slides.length; i += 1) {
                    const slideInView = exact ? slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i] - slidesGrid[activeIndex] < swiperSize;
                    if (slideInView) spv += 1;
                } else for (let i = activeIndex - 1; i >= 0; i -= 1) {
                    const slideInView = slidesGrid[activeIndex] - slidesGrid[i] < swiperSize;
                    if (slideInView) spv += 1;
                }
                return spv;
            }
            update() {
                const swiper = this;
                if (!swiper || swiper.destroyed) return;
                const {snapGrid, params} = swiper;
                if (params.breakpoints) swiper.setBreakpoint();
                [ ...swiper.el.querySelectorAll('[loading="lazy"]') ].forEach((imageEl => {
                    if (imageEl.complete) processLazyPreloader(swiper, imageEl);
                }));
                swiper.updateSize();
                swiper.updateSlides();
                swiper.updateProgress();
                swiper.updateSlidesClasses();
                function setTranslate() {
                    const translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
                    const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
                    swiper.setTranslate(newTranslate);
                    swiper.updateActiveIndex();
                    swiper.updateSlidesClasses();
                }
                let translated;
                if (params.freeMode && params.freeMode.enabled && !params.cssMode) {
                    setTranslate();
                    if (params.autoHeight) swiper.updateAutoHeight();
                } else {
                    if ((params.slidesPerView === "auto" || params.slidesPerView > 1) && swiper.isEnd && !params.centeredSlides) {
                        const slides = swiper.virtual && params.virtual.enabled ? swiper.virtual.slides : swiper.slides;
                        translated = swiper.slideTo(slides.length - 1, 0, false, true);
                    } else translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
                    if (!translated) setTranslate();
                }
                if (params.watchOverflow && snapGrid !== swiper.snapGrid) swiper.checkOverflow();
                swiper.emit("update");
            }
            changeDirection(newDirection, needUpdate) {
                if (needUpdate === void 0) needUpdate = true;
                const swiper = this;
                const currentDirection = swiper.params.direction;
                if (!newDirection) newDirection = currentDirection === "horizontal" ? "vertical" : "horizontal";
                if (newDirection === currentDirection || newDirection !== "horizontal" && newDirection !== "vertical") return swiper;
                swiper.el.classList.remove(`${swiper.params.containerModifierClass}${currentDirection}`);
                swiper.el.classList.add(`${swiper.params.containerModifierClass}${newDirection}`);
                swiper.emitContainerClasses();
                swiper.params.direction = newDirection;
                swiper.slides.forEach((slideEl => {
                    if (newDirection === "vertical") slideEl.style.width = ""; else slideEl.style.height = "";
                }));
                swiper.emit("changeDirection");
                if (needUpdate) swiper.update();
                return swiper;
            }
            changeLanguageDirection(direction) {
                const swiper = this;
                if (swiper.rtl && direction === "rtl" || !swiper.rtl && direction === "ltr") return;
                swiper.rtl = direction === "rtl";
                swiper.rtlTranslate = swiper.params.direction === "horizontal" && swiper.rtl;
                if (swiper.rtl) {
                    swiper.el.classList.add(`${swiper.params.containerModifierClass}rtl`);
                    swiper.el.dir = "rtl";
                } else {
                    swiper.el.classList.remove(`${swiper.params.containerModifierClass}rtl`);
                    swiper.el.dir = "ltr";
                }
                swiper.update();
            }
            mount(element) {
                const swiper = this;
                if (swiper.mounted) return true;
                let el = element || swiper.params.el;
                if (typeof el === "string") el = document.querySelector(el);
                if (!el) return false;
                el.swiper = swiper;
                if (el.parentNode && el.parentNode.host && el.parentNode.host.nodeName === swiper.params.swiperElementNodeName.toUpperCase()) swiper.isElement = true;
                const getWrapperSelector = () => `.${(swiper.params.wrapperClass || "").trim().split(" ").join(".")}`;
                const getWrapper = () => {
                    if (el && el.shadowRoot && el.shadowRoot.querySelector) {
                        const res = el.shadowRoot.querySelector(getWrapperSelector());
                        return res;
                    }
                    return utils_elementChildren(el, getWrapperSelector())[0];
                };
                let wrapperEl = getWrapper();
                if (!wrapperEl && swiper.params.createElements) {
                    wrapperEl = utils_createElement("div", swiper.params.wrapperClass);
                    el.append(wrapperEl);
                    utils_elementChildren(el, `.${swiper.params.slideClass}`).forEach((slideEl => {
                        wrapperEl.append(slideEl);
                    }));
                }
                Object.assign(swiper, {
                    el,
                    wrapperEl,
                    slidesEl: swiper.isElement && !el.parentNode.host.slideSlots ? el.parentNode.host : wrapperEl,
                    hostEl: swiper.isElement ? el.parentNode.host : el,
                    mounted: true,
                    rtl: el.dir.toLowerCase() === "rtl" || elementStyle(el, "direction") === "rtl",
                    rtlTranslate: swiper.params.direction === "horizontal" && (el.dir.toLowerCase() === "rtl" || elementStyle(el, "direction") === "rtl"),
                    wrongRTL: elementStyle(wrapperEl, "display") === "-webkit-box"
                });
                return true;
            }
            init(el) {
                const swiper = this;
                if (swiper.initialized) return swiper;
                const mounted = swiper.mount(el);
                if (mounted === false) return swiper;
                swiper.emit("beforeInit");
                if (swiper.params.breakpoints) swiper.setBreakpoint();
                swiper.addClasses();
                swiper.updateSize();
                swiper.updateSlides();
                if (swiper.params.watchOverflow) swiper.checkOverflow();
                if (swiper.params.grabCursor && swiper.enabled) swiper.setGrabCursor();
                if (swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) swiper.slideTo(swiper.params.initialSlide + swiper.virtual.slidesBefore, 0, swiper.params.runCallbacksOnInit, false, true); else swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
                if (swiper.params.loop) swiper.loopCreate();
                swiper.attachEvents();
                const lazyElements = [ ...swiper.el.querySelectorAll('[loading="lazy"]') ];
                if (swiper.isElement) lazyElements.push(...swiper.hostEl.querySelectorAll('[loading="lazy"]'));
                lazyElements.forEach((imageEl => {
                    if (imageEl.complete) processLazyPreloader(swiper, imageEl); else imageEl.addEventListener("load", (e => {
                        processLazyPreloader(swiper, e.target);
                    }));
                }));
                preload(swiper);
                swiper.initialized = true;
                preload(swiper);
                swiper.emit("init");
                swiper.emit("afterInit");
                return swiper;
            }
            destroy(deleteInstance, cleanStyles) {
                if (deleteInstance === void 0) deleteInstance = true;
                if (cleanStyles === void 0) cleanStyles = true;
                const swiper = this;
                const {params, el, wrapperEl, slides} = swiper;
                if (typeof swiper.params === "undefined" || swiper.destroyed) return null;
                swiper.emit("beforeDestroy");
                swiper.initialized = false;
                swiper.detachEvents();
                if (params.loop) swiper.loopDestroy();
                if (cleanStyles) {
                    swiper.removeClasses();
                    el.removeAttribute("style");
                    wrapperEl.removeAttribute("style");
                    if (slides && slides.length) slides.forEach((slideEl => {
                        slideEl.classList.remove(params.slideVisibleClass, params.slideFullyVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
                        slideEl.removeAttribute("style");
                        slideEl.removeAttribute("data-swiper-slide-index");
                    }));
                }
                swiper.emit("destroy");
                Object.keys(swiper.eventsListeners).forEach((eventName => {
                    swiper.off(eventName);
                }));
                if (deleteInstance !== false) {
                    swiper.el.swiper = null;
                    deleteProps(swiper);
                }
                swiper.destroyed = true;
                return null;
            }
            static extendDefaults(newDefaults) {
                utils_extend(extendedDefaults, newDefaults);
            }
            static get extendedDefaults() {
                return extendedDefaults;
            }
            static get defaults() {
                return defaults;
            }
            static installModule(mod) {
                if (!swiper_core_Swiper.prototype.__modules__) swiper_core_Swiper.prototype.__modules__ = [];
                const modules = swiper_core_Swiper.prototype.__modules__;
                if (typeof mod === "function" && modules.indexOf(mod) < 0) modules.push(mod);
            }
            static use(module) {
                if (Array.isArray(module)) {
                    module.forEach((m => swiper_core_Swiper.installModule(m)));
                    return swiper_core_Swiper;
                }
                swiper_core_Swiper.installModule(module);
                return swiper_core_Swiper;
            }
        }
        Object.keys(prototypes).forEach((prototypeGroup => {
            Object.keys(prototypes[prototypeGroup]).forEach((protoMethod => {
                swiper_core_Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
            }));
        }));
        swiper_core_Swiper.use([ Resize, Observer ]);
        function Keyboard(_ref) {
            let {swiper, extendParams, on, emit} = _ref;
            const document = ssr_window_esm_getDocument();
            const window = ssr_window_esm_getWindow();
            swiper.keyboard = {
                enabled: false
            };
            extendParams({
                keyboard: {
                    enabled: false,
                    onlyInViewport: true,
                    pageUpDown: true
                }
            });
            function handle(event) {
                if (!swiper.enabled) return;
                const {rtlTranslate: rtl} = swiper;
                let e = event;
                if (e.originalEvent) e = e.originalEvent;
                const kc = e.keyCode || e.charCode;
                const pageUpDown = swiper.params.keyboard.pageUpDown;
                const isPageUp = pageUpDown && kc === 33;
                const isPageDown = pageUpDown && kc === 34;
                const isArrowLeft = kc === 37;
                const isArrowRight = kc === 39;
                const isArrowUp = kc === 38;
                const isArrowDown = kc === 40;
                if (!swiper.allowSlideNext && (swiper.isHorizontal() && isArrowRight || swiper.isVertical() && isArrowDown || isPageDown)) return false;
                if (!swiper.allowSlidePrev && (swiper.isHorizontal() && isArrowLeft || swiper.isVertical() && isArrowUp || isPageUp)) return false;
                if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) return;
                if (document.activeElement && document.activeElement.nodeName && (document.activeElement.nodeName.toLowerCase() === "input" || document.activeElement.nodeName.toLowerCase() === "textarea")) return;
                if (swiper.params.keyboard.onlyInViewport && (isPageUp || isPageDown || isArrowLeft || isArrowRight || isArrowUp || isArrowDown)) {
                    let inView = false;
                    if (utils_elementParents(swiper.el, `.${swiper.params.slideClass}, swiper-slide`).length > 0 && utils_elementParents(swiper.el, `.${swiper.params.slideActiveClass}`).length === 0) return;
                    const el = swiper.el;
                    const swiperWidth = el.clientWidth;
                    const swiperHeight = el.clientHeight;
                    const windowWidth = window.innerWidth;
                    const windowHeight = window.innerHeight;
                    const swiperOffset = utils_elementOffset(el);
                    if (rtl) swiperOffset.left -= el.scrollLeft;
                    const swiperCoord = [ [ swiperOffset.left, swiperOffset.top ], [ swiperOffset.left + swiperWidth, swiperOffset.top ], [ swiperOffset.left, swiperOffset.top + swiperHeight ], [ swiperOffset.left + swiperWidth, swiperOffset.top + swiperHeight ] ];
                    for (let i = 0; i < swiperCoord.length; i += 1) {
                        const point = swiperCoord[i];
                        if (point[0] >= 0 && point[0] <= windowWidth && point[1] >= 0 && point[1] <= windowHeight) {
                            if (point[0] === 0 && point[1] === 0) continue;
                            inView = true;
                        }
                    }
                    if (!inView) return;
                }
                if (swiper.isHorizontal()) {
                    if (isPageUp || isPageDown || isArrowLeft || isArrowRight) if (e.preventDefault) e.preventDefault(); else e.returnValue = false;
                    if ((isPageDown || isArrowRight) && !rtl || (isPageUp || isArrowLeft) && rtl) swiper.slideNext();
                    if ((isPageUp || isArrowLeft) && !rtl || (isPageDown || isArrowRight) && rtl) swiper.slidePrev();
                } else {
                    if (isPageUp || isPageDown || isArrowUp || isArrowDown) if (e.preventDefault) e.preventDefault(); else e.returnValue = false;
                    if (isPageDown || isArrowDown) swiper.slideNext();
                    if (isPageUp || isArrowUp) swiper.slidePrev();
                }
                emit("keyPress", kc);
                return;
            }
            function enable() {
                if (swiper.keyboard.enabled) return;
                document.addEventListener("keydown", handle);
                swiper.keyboard.enabled = true;
            }
            function disable() {
                if (!swiper.keyboard.enabled) return;
                document.removeEventListener("keydown", handle);
                swiper.keyboard.enabled = false;
            }
            on("init", (() => {
                if (swiper.params.keyboard.enabled) enable();
            }));
            on("destroy", (() => {
                if (swiper.keyboard.enabled) disable();
            }));
            Object.assign(swiper.keyboard, {
                enable,
                disable
            });
        }
        function create_element_if_not_defined_createElementIfNotDefined(swiper, originalParams, params, checkProps) {
            if (swiper.params.createElements) Object.keys(checkProps).forEach((key => {
                if (!params[key] && params.auto === true) {
                    let element = utils_elementChildren(swiper.el, `.${checkProps[key]}`)[0];
                    if (!element) {
                        element = utils_createElement("div", checkProps[key]);
                        element.className = checkProps[key];
                        swiper.el.append(element);
                    }
                    params[key] = element;
                    originalParams[key] = element;
                }
            }));
            return params;
        }
        function Navigation(_ref) {
            let {swiper, extendParams, on, emit} = _ref;
            extendParams({
                navigation: {
                    nextEl: null,
                    prevEl: null,
                    hideOnClick: false,
                    disabledClass: "swiper-button-disabled",
                    hiddenClass: "swiper-button-hidden",
                    lockClass: "swiper-button-lock",
                    navigationDisabledClass: "swiper-navigation-disabled"
                }
            });
            swiper.navigation = {
                nextEl: null,
                prevEl: null
            };
            function getEl(el) {
                let res;
                if (el && typeof el === "string" && swiper.isElement) {
                    res = swiper.el.querySelector(el);
                    if (res) return res;
                }
                if (el) {
                    if (typeof el === "string") res = [ ...document.querySelectorAll(el) ];
                    if (swiper.params.uniqueNavElements && typeof el === "string" && res.length > 1 && swiper.el.querySelectorAll(el).length === 1) res = swiper.el.querySelector(el);
                }
                if (el && !res) return el;
                return res;
            }
            function toggleEl(el, disabled) {
                const params = swiper.params.navigation;
                el = utils_makeElementsArray(el);
                el.forEach((subEl => {
                    if (subEl) {
                        subEl.classList[disabled ? "add" : "remove"](...params.disabledClass.split(" "));
                        if (subEl.tagName === "BUTTON") subEl.disabled = disabled;
                        if (swiper.params.watchOverflow && swiper.enabled) subEl.classList[swiper.isLocked ? "add" : "remove"](params.lockClass);
                    }
                }));
            }
            function update() {
                const {nextEl, prevEl} = swiper.navigation;
                if (swiper.params.loop) {
                    toggleEl(prevEl, false);
                    toggleEl(nextEl, false);
                    return;
                }
                toggleEl(prevEl, swiper.isBeginning && !swiper.params.rewind);
                toggleEl(nextEl, swiper.isEnd && !swiper.params.rewind);
            }
            function onPrevClick(e) {
                e.preventDefault();
                if (swiper.isBeginning && !swiper.params.loop && !swiper.params.rewind) return;
                swiper.slidePrev();
                emit("navigationPrev");
            }
            function onNextClick(e) {
                e.preventDefault();
                if (swiper.isEnd && !swiper.params.loop && !swiper.params.rewind) return;
                swiper.slideNext();
                emit("navigationNext");
            }
            function init() {
                const params = swiper.params.navigation;
                swiper.params.navigation = create_element_if_not_defined_createElementIfNotDefined(swiper, swiper.originalParams.navigation, swiper.params.navigation, {
                    nextEl: "swiper-button-next",
                    prevEl: "swiper-button-prev"
                });
                if (!(params.nextEl || params.prevEl)) return;
                let nextEl = getEl(params.nextEl);
                let prevEl = getEl(params.prevEl);
                Object.assign(swiper.navigation, {
                    nextEl,
                    prevEl
                });
                nextEl = utils_makeElementsArray(nextEl);
                prevEl = utils_makeElementsArray(prevEl);
                const initButton = (el, dir) => {
                    if (el) el.addEventListener("click", dir === "next" ? onNextClick : onPrevClick);
                    if (!swiper.enabled && el) el.classList.add(...params.lockClass.split(" "));
                };
                nextEl.forEach((el => initButton(el, "next")));
                prevEl.forEach((el => initButton(el, "prev")));
            }
            function destroy() {
                let {nextEl, prevEl} = swiper.navigation;
                nextEl = utils_makeElementsArray(nextEl);
                prevEl = utils_makeElementsArray(prevEl);
                const destroyButton = (el, dir) => {
                    el.removeEventListener("click", dir === "next" ? onNextClick : onPrevClick);
                    el.classList.remove(...swiper.params.navigation.disabledClass.split(" "));
                };
                nextEl.forEach((el => destroyButton(el, "next")));
                prevEl.forEach((el => destroyButton(el, "prev")));
            }
            on("init", (() => {
                if (swiper.params.navigation.enabled === false) disable(); else {
                    init();
                    update();
                }
            }));
            on("toEdge fromEdge lock unlock", (() => {
                update();
            }));
            on("destroy", (() => {
                destroy();
            }));
            on("enable disable", (() => {
                let {nextEl, prevEl} = swiper.navigation;
                nextEl = utils_makeElementsArray(nextEl);
                prevEl = utils_makeElementsArray(prevEl);
                if (swiper.enabled) {
                    update();
                    return;
                }
                [ ...nextEl, ...prevEl ].filter((el => !!el)).forEach((el => el.classList.add(swiper.params.navigation.lockClass)));
            }));
            on("click", ((_s, e) => {
                let {nextEl, prevEl} = swiper.navigation;
                nextEl = utils_makeElementsArray(nextEl);
                prevEl = utils_makeElementsArray(prevEl);
                const targetEl = e.target;
                if (swiper.params.navigation.hideOnClick && !prevEl.includes(targetEl) && !nextEl.includes(targetEl)) {
                    if (swiper.pagination && swiper.params.pagination && swiper.params.pagination.clickable && (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl))) return;
                    let isHidden;
                    if (nextEl.length) isHidden = nextEl[0].classList.contains(swiper.params.navigation.hiddenClass); else if (prevEl.length) isHidden = prevEl[0].classList.contains(swiper.params.navigation.hiddenClass);
                    if (isHidden === true) emit("navigationShow"); else emit("navigationHide");
                    [ ...nextEl, ...prevEl ].filter((el => !!el)).forEach((el => el.classList.toggle(swiper.params.navigation.hiddenClass)));
                }
            }));
            const enable = () => {
                swiper.el.classList.remove(...swiper.params.navigation.navigationDisabledClass.split(" "));
                init();
                update();
            };
            const disable = () => {
                swiper.el.classList.add(...swiper.params.navigation.navigationDisabledClass.split(" "));
                destroy();
            };
            Object.assign(swiper.navigation, {
                enable,
                disable,
                update,
                init,
                destroy
            });
        }
        function classes_to_selector_classesToSelector(classes) {
            if (classes === void 0) classes = "";
            return `.${classes.trim().replace(/([\.:!+\/])/g, "\\$1").replace(/ /g, ".")}`;
        }
        function Pagination(_ref) {
            let {swiper, extendParams, on, emit} = _ref;
            const pfx = "swiper-pagination";
            extendParams({
                pagination: {
                    el: null,
                    bulletElement: "span",
                    clickable: false,
                    hideOnClick: false,
                    renderBullet: null,
                    renderProgressbar: null,
                    renderFraction: null,
                    renderCustom: null,
                    progressbarOpposite: false,
                    type: "bullets",
                    dynamicBullets: false,
                    dynamicMainBullets: 1,
                    formatFractionCurrent: number => number,
                    formatFractionTotal: number => number,
                    bulletClass: `${pfx}-bullet`,
                    bulletActiveClass: `${pfx}-bullet-active`,
                    modifierClass: `${pfx}-`,
                    currentClass: `${pfx}-current`,
                    totalClass: `${pfx}-total`,
                    hiddenClass: `${pfx}-hidden`,
                    progressbarFillClass: `${pfx}-progressbar-fill`,
                    progressbarOppositeClass: `${pfx}-progressbar-opposite`,
                    clickableClass: `${pfx}-clickable`,
                    lockClass: `${pfx}-lock`,
                    horizontalClass: `${pfx}-horizontal`,
                    verticalClass: `${pfx}-vertical`,
                    paginationDisabledClass: `${pfx}-disabled`
                }
            });
            swiper.pagination = {
                el: null,
                bullets: []
            };
            let bulletSize;
            let dynamicBulletIndex = 0;
            function isPaginationDisabled() {
                return !swiper.params.pagination.el || !swiper.pagination.el || Array.isArray(swiper.pagination.el) && swiper.pagination.el.length === 0;
            }
            function setSideBullets(bulletEl, position) {
                const {bulletActiveClass} = swiper.params.pagination;
                if (!bulletEl) return;
                bulletEl = bulletEl[`${position === "prev" ? "previous" : "next"}ElementSibling`];
                if (bulletEl) {
                    bulletEl.classList.add(`${bulletActiveClass}-${position}`);
                    bulletEl = bulletEl[`${position === "prev" ? "previous" : "next"}ElementSibling`];
                    if (bulletEl) bulletEl.classList.add(`${bulletActiveClass}-${position}-${position}`);
                }
            }
            function onBulletClick(e) {
                const bulletEl = e.target.closest(classes_to_selector_classesToSelector(swiper.params.pagination.bulletClass));
                if (!bulletEl) return;
                e.preventDefault();
                const index = utils_elementIndex(bulletEl) * swiper.params.slidesPerGroup;
                if (swiper.params.loop) {
                    if (swiper.realIndex === index) return;
                    swiper.slideToLoop(index);
                } else swiper.slideTo(index);
            }
            function update() {
                const rtl = swiper.rtl;
                const params = swiper.params.pagination;
                if (isPaginationDisabled()) return;
                let el = swiper.pagination.el;
                el = utils_makeElementsArray(el);
                let current;
                let previousIndex;
                const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
                const total = swiper.params.loop ? Math.ceil(slidesLength / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
                if (swiper.params.loop) {
                    previousIndex = swiper.previousRealIndex || 0;
                    current = swiper.params.slidesPerGroup > 1 ? Math.floor(swiper.realIndex / swiper.params.slidesPerGroup) : swiper.realIndex;
                } else if (typeof swiper.snapIndex !== "undefined") {
                    current = swiper.snapIndex;
                    previousIndex = swiper.previousSnapIndex;
                } else {
                    previousIndex = swiper.previousIndex || 0;
                    current = swiper.activeIndex || 0;
                }
                if (params.type === "bullets" && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
                    const bullets = swiper.pagination.bullets;
                    let firstIndex;
                    let lastIndex;
                    let midIndex;
                    if (params.dynamicBullets) {
                        bulletSize = elementOuterSize(bullets[0], swiper.isHorizontal() ? "width" : "height", true);
                        el.forEach((subEl => {
                            subEl.style[swiper.isHorizontal() ? "width" : "height"] = `${bulletSize * (params.dynamicMainBullets + 4)}px`;
                        }));
                        if (params.dynamicMainBullets > 1 && previousIndex !== void 0) {
                            dynamicBulletIndex += current - (previousIndex || 0);
                            if (dynamicBulletIndex > params.dynamicMainBullets - 1) dynamicBulletIndex = params.dynamicMainBullets - 1; else if (dynamicBulletIndex < 0) dynamicBulletIndex = 0;
                        }
                        firstIndex = Math.max(current - dynamicBulletIndex, 0);
                        lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
                        midIndex = (lastIndex + firstIndex) / 2;
                    }
                    bullets.forEach((bulletEl => {
                        const classesToRemove = [ ...[ "", "-next", "-next-next", "-prev", "-prev-prev", "-main" ].map((suffix => `${params.bulletActiveClass}${suffix}`)) ].map((s => typeof s === "string" && s.includes(" ") ? s.split(" ") : s)).flat();
                        bulletEl.classList.remove(...classesToRemove);
                    }));
                    if (el.length > 1) bullets.forEach((bullet => {
                        const bulletIndex = utils_elementIndex(bullet);
                        if (bulletIndex === current) bullet.classList.add(...params.bulletActiveClass.split(" ")); else if (swiper.isElement) bullet.setAttribute("part", "bullet");
                        if (params.dynamicBullets) {
                            if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) bullet.classList.add(...`${params.bulletActiveClass}-main`.split(" "));
                            if (bulletIndex === firstIndex) setSideBullets(bullet, "prev");
                            if (bulletIndex === lastIndex) setSideBullets(bullet, "next");
                        }
                    })); else {
                        const bullet = bullets[current];
                        if (bullet) bullet.classList.add(...params.bulletActiveClass.split(" "));
                        if (swiper.isElement) bullets.forEach(((bulletEl, bulletIndex) => {
                            bulletEl.setAttribute("part", bulletIndex === current ? "bullet-active" : "bullet");
                        }));
                        if (params.dynamicBullets) {
                            const firstDisplayedBullet = bullets[firstIndex];
                            const lastDisplayedBullet = bullets[lastIndex];
                            for (let i = firstIndex; i <= lastIndex; i += 1) if (bullets[i]) bullets[i].classList.add(...`${params.bulletActiveClass}-main`.split(" "));
                            setSideBullets(firstDisplayedBullet, "prev");
                            setSideBullets(lastDisplayedBullet, "next");
                        }
                    }
                    if (params.dynamicBullets) {
                        const dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
                        const bulletsOffset = (bulletSize * dynamicBulletsLength - bulletSize) / 2 - midIndex * bulletSize;
                        const offsetProp = rtl ? "right" : "left";
                        bullets.forEach((bullet => {
                            bullet.style[swiper.isHorizontal() ? offsetProp : "top"] = `${bulletsOffset}px`;
                        }));
                    }
                }
                el.forEach(((subEl, subElIndex) => {
                    if (params.type === "fraction") {
                        subEl.querySelectorAll(classes_to_selector_classesToSelector(params.currentClass)).forEach((fractionEl => {
                            fractionEl.textContent = params.formatFractionCurrent(current + 1);
                        }));
                        subEl.querySelectorAll(classes_to_selector_classesToSelector(params.totalClass)).forEach((totalEl => {
                            totalEl.textContent = params.formatFractionTotal(total);
                        }));
                    }
                    if (params.type === "progressbar") {
                        let progressbarDirection;
                        if (params.progressbarOpposite) progressbarDirection = swiper.isHorizontal() ? "vertical" : "horizontal"; else progressbarDirection = swiper.isHorizontal() ? "horizontal" : "vertical";
                        const scale = (current + 1) / total;
                        let scaleX = 1;
                        let scaleY = 1;
                        if (progressbarDirection === "horizontal") scaleX = scale; else scaleY = scale;
                        subEl.querySelectorAll(classes_to_selector_classesToSelector(params.progressbarFillClass)).forEach((progressEl => {
                            progressEl.style.transform = `translate3d(0,0,0) scaleX(${scaleX}) scaleY(${scaleY})`;
                            progressEl.style.transitionDuration = `${swiper.params.speed}ms`;
                        }));
                    }
                    if (params.type === "custom" && params.renderCustom) {
                        subEl.innerHTML = params.renderCustom(swiper, current + 1, total);
                        if (subElIndex === 0) emit("paginationRender", subEl);
                    } else {
                        if (subElIndex === 0) emit("paginationRender", subEl);
                        emit("paginationUpdate", subEl);
                    }
                    if (swiper.params.watchOverflow && swiper.enabled) subEl.classList[swiper.isLocked ? "add" : "remove"](params.lockClass);
                }));
            }
            function render() {
                const params = swiper.params.pagination;
                if (isPaginationDisabled()) return;
                const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.grid && swiper.params.grid.rows > 1 ? swiper.slides.length / Math.ceil(swiper.params.grid.rows) : swiper.slides.length;
                let el = swiper.pagination.el;
                el = utils_makeElementsArray(el);
                let paginationHTML = "";
                if (params.type === "bullets") {
                    let numberOfBullets = swiper.params.loop ? Math.ceil(slidesLength / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
                    if (swiper.params.freeMode && swiper.params.freeMode.enabled && numberOfBullets > slidesLength) numberOfBullets = slidesLength;
                    for (let i = 0; i < numberOfBullets; i += 1) if (params.renderBullet) paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass); else paginationHTML += `<${params.bulletElement} ${swiper.isElement ? 'part="bullet"' : ""} class="${params.bulletClass}"></${params.bulletElement}>`;
                }
                if (params.type === "fraction") if (params.renderFraction) paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass); else paginationHTML = `<span class="${params.currentClass}"></span>` + " / " + `<span class="${params.totalClass}"></span>`;
                if (params.type === "progressbar") if (params.renderProgressbar) paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass); else paginationHTML = `<span class="${params.progressbarFillClass}"></span>`;
                swiper.pagination.bullets = [];
                el.forEach((subEl => {
                    if (params.type !== "custom") subEl.innerHTML = paginationHTML || "";
                    if (params.type === "bullets") swiper.pagination.bullets.push(...subEl.querySelectorAll(classes_to_selector_classesToSelector(params.bulletClass)));
                }));
                if (params.type !== "custom") emit("paginationRender", el[0]);
            }
            function init() {
                swiper.params.pagination = create_element_if_not_defined_createElementIfNotDefined(swiper, swiper.originalParams.pagination, swiper.params.pagination, {
                    el: "swiper-pagination"
                });
                const params = swiper.params.pagination;
                if (!params.el) return;
                let el;
                if (typeof params.el === "string" && swiper.isElement) el = swiper.el.querySelector(params.el);
                if (!el && typeof params.el === "string") el = [ ...document.querySelectorAll(params.el) ];
                if (!el) el = params.el;
                if (!el || el.length === 0) return;
                if (swiper.params.uniqueNavElements && typeof params.el === "string" && Array.isArray(el) && el.length > 1) {
                    el = [ ...swiper.el.querySelectorAll(params.el) ];
                    if (el.length > 1) el = el.filter((subEl => {
                        if (utils_elementParents(subEl, ".swiper")[0] !== swiper.el) return false;
                        return true;
                    }))[0];
                }
                if (Array.isArray(el) && el.length === 1) el = el[0];
                Object.assign(swiper.pagination, {
                    el
                });
                el = utils_makeElementsArray(el);
                el.forEach((subEl => {
                    if (params.type === "bullets" && params.clickable) subEl.classList.add(...(params.clickableClass || "").split(" "));
                    subEl.classList.add(params.modifierClass + params.type);
                    subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
                    if (params.type === "bullets" && params.dynamicBullets) {
                        subEl.classList.add(`${params.modifierClass}${params.type}-dynamic`);
                        dynamicBulletIndex = 0;
                        if (params.dynamicMainBullets < 1) params.dynamicMainBullets = 1;
                    }
                    if (params.type === "progressbar" && params.progressbarOpposite) subEl.classList.add(params.progressbarOppositeClass);
                    if (params.clickable) subEl.addEventListener("click", onBulletClick);
                    if (!swiper.enabled) subEl.classList.add(params.lockClass);
                }));
            }
            function destroy() {
                const params = swiper.params.pagination;
                if (isPaginationDisabled()) return;
                let el = swiper.pagination.el;
                if (el) {
                    el = utils_makeElementsArray(el);
                    el.forEach((subEl => {
                        subEl.classList.remove(params.hiddenClass);
                        subEl.classList.remove(params.modifierClass + params.type);
                        subEl.classList.remove(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
                        if (params.clickable) {
                            subEl.classList.remove(...(params.clickableClass || "").split(" "));
                            subEl.removeEventListener("click", onBulletClick);
                        }
                    }));
                }
                if (swiper.pagination.bullets) swiper.pagination.bullets.forEach((subEl => subEl.classList.remove(...params.bulletActiveClass.split(" "))));
            }
            on("changeDirection", (() => {
                if (!swiper.pagination || !swiper.pagination.el) return;
                const params = swiper.params.pagination;
                let {el} = swiper.pagination;
                el = utils_makeElementsArray(el);
                el.forEach((subEl => {
                    subEl.classList.remove(params.horizontalClass, params.verticalClass);
                    subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
                }));
            }));
            on("init", (() => {
                if (swiper.params.pagination.enabled === false) disable(); else {
                    init();
                    render();
                    update();
                }
            }));
            on("activeIndexChange", (() => {
                if (typeof swiper.snapIndex === "undefined") update();
            }));
            on("snapIndexChange", (() => {
                update();
            }));
            on("snapGridLengthChange", (() => {
                render();
                update();
            }));
            on("destroy", (() => {
                destroy();
            }));
            on("enable disable", (() => {
                let {el} = swiper.pagination;
                if (el) {
                    el = utils_makeElementsArray(el);
                    el.forEach((subEl => subEl.classList[swiper.enabled ? "remove" : "add"](swiper.params.pagination.lockClass)));
                }
            }));
            on("lock unlock", (() => {
                update();
            }));
            on("click", ((_s, e) => {
                const targetEl = e.target;
                const el = utils_makeElementsArray(swiper.pagination.el);
                if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && el && el.length > 0 && !targetEl.classList.contains(swiper.params.pagination.bulletClass)) {
                    if (swiper.navigation && (swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl || swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl)) return;
                    const isHidden = el[0].classList.contains(swiper.params.pagination.hiddenClass);
                    if (isHidden === true) emit("paginationShow"); else emit("paginationHide");
                    el.forEach((subEl => subEl.classList.toggle(swiper.params.pagination.hiddenClass)));
                }
            }));
            const enable = () => {
                swiper.el.classList.remove(swiper.params.pagination.paginationDisabledClass);
                let {el} = swiper.pagination;
                if (el) {
                    el = utils_makeElementsArray(el);
                    el.forEach((subEl => subEl.classList.remove(swiper.params.pagination.paginationDisabledClass)));
                }
                init();
                render();
                update();
            };
            const disable = () => {
                swiper.el.classList.add(swiper.params.pagination.paginationDisabledClass);
                let {el} = swiper.pagination;
                if (el) {
                    el = utils_makeElementsArray(el);
                    el.forEach((subEl => subEl.classList.add(swiper.params.pagination.paginationDisabledClass)));
                }
                destroy();
            };
            Object.assign(swiper.pagination, {
                enable,
                disable,
                render,
                update,
                init,
                destroy
            });
        }
        function effect_target_effectTarget(effectParams, slideEl) {
            const transformEl = utils_getSlideTransformEl(slideEl);
            if (transformEl !== slideEl) {
                transformEl.style.backfaceVisibility = "hidden";
                transformEl.style["-webkit-backface-visibility"] = "hidden";
            }
            return transformEl;
        }
        function effect_virtual_transition_end_effectVirtualTransitionEnd(_ref) {
            let {swiper, duration, transformElements, allSlides} = _ref;
            const {activeIndex} = swiper;
            const getSlide = el => {
                if (!el.parentElement) {
                    const slide = swiper.slides.filter((slideEl => slideEl.shadowRoot && slideEl.shadowRoot === el.parentNode))[0];
                    return slide;
                }
                return el.parentElement;
            };
            if (swiper.params.virtualTranslate && duration !== 0) {
                let eventTriggered = false;
                let transitionEndTarget;
                if (allSlides) transitionEndTarget = transformElements; else transitionEndTarget = transformElements.filter((transformEl => {
                    const el = transformEl.classList.contains("swiper-slide-transform") ? getSlide(transformEl) : transformEl;
                    return swiper.getSlideIndex(el) === activeIndex;
                }));
                transitionEndTarget.forEach((el => {
                    utils_elementTransitionEnd(el, (() => {
                        if (eventTriggered) return;
                        if (!swiper || swiper.destroyed) return;
                        eventTriggered = true;
                        swiper.animating = false;
                        const evt = new window.CustomEvent("transitionend", {
                            bubbles: true,
                            cancelable: true
                        });
                        swiper.wrapperEl.dispatchEvent(evt);
                    }));
                }));
            }
        }
        function create_shadow_createShadow(suffix, slideEl, side) {
            const shadowClass = `swiper-slide-shadow${side ? `-${side}` : ""}${suffix ? ` swiper-slide-shadow-${suffix}` : ""}`;
            const shadowContainer = utils_getSlideTransformEl(slideEl);
            let shadowEl = shadowContainer.querySelector(`.${shadowClass.split(" ").join(".")}`);
            if (!shadowEl) {
                shadowEl = utils_createElement("div", shadowClass.split(" "));
                shadowContainer.append(shadowEl);
            }
            return shadowEl;
        }
        function effect_init_effectInit(params) {
            const {effect, swiper, on, setTranslate, setTransition, overwriteParams, perspective, recreateShadows, getEffectParams} = params;
            on("beforeInit", (() => {
                if (swiper.params.effect !== effect) return;
                swiper.classNames.push(`${swiper.params.containerModifierClass}${effect}`);
                if (perspective && perspective()) swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
                const overwriteParamsResult = overwriteParams ? overwriteParams() : {};
                Object.assign(swiper.params, overwriteParamsResult);
                Object.assign(swiper.originalParams, overwriteParamsResult);
            }));
            on("setTranslate", (() => {
                if (swiper.params.effect !== effect) return;
                setTranslate();
            }));
            on("setTransition", ((_s, duration) => {
                if (swiper.params.effect !== effect) return;
                setTransition(duration);
            }));
            on("transitionEnd", (() => {
                if (swiper.params.effect !== effect) return;
                if (recreateShadows) {
                    if (!getEffectParams || !getEffectParams().slideShadows) return;
                    swiper.slides.forEach((slideEl => {
                        slideEl.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((shadowEl => shadowEl.remove()));
                    }));
                    recreateShadows();
                }
            }));
            let requireUpdateOnVirtual;
            on("virtualUpdate", (() => {
                if (swiper.params.effect !== effect) return;
                if (!swiper.slides.length) requireUpdateOnVirtual = true;
                requestAnimationFrame((() => {
                    if (requireUpdateOnVirtual && swiper.slides && swiper.slides.length) {
                        setTranslate();
                        requireUpdateOnVirtual = false;
                    }
                }));
            }));
        }
        function EffectCreative(_ref) {
            let {swiper, extendParams, on} = _ref;
            extendParams({
                creativeEffect: {
                    limitProgress: 1,
                    shadowPerProgress: false,
                    progressMultiplier: 1,
                    perspective: true,
                    prev: {
                        translate: [ 0, 0, 0 ],
                        rotate: [ 0, 0, 0 ],
                        opacity: 1,
                        scale: 1
                    },
                    next: {
                        translate: [ 0, 0, 0 ],
                        rotate: [ 0, 0, 0 ],
                        opacity: 1,
                        scale: 1
                    }
                }
            });
            const getTranslateValue = value => {
                if (typeof value === "string") return value;
                return `${value}px`;
            };
            const setTranslate = () => {
                const {slides, wrapperEl, slidesSizesGrid} = swiper;
                const params = swiper.params.creativeEffect;
                const {progressMultiplier: multiplier} = params;
                const isCenteredSlides = swiper.params.centeredSlides;
                if (isCenteredSlides) {
                    const margin = slidesSizesGrid[0] / 2 - swiper.params.slidesOffsetBefore || 0;
                    wrapperEl.style.transform = `translateX(calc(50% - ${margin}px))`;
                }
                for (let i = 0; i < slides.length; i += 1) {
                    const slideEl = slides[i];
                    const slideProgress = slideEl.progress;
                    const progress = Math.min(Math.max(slideEl.progress, -params.limitProgress), params.limitProgress);
                    let originalProgress = progress;
                    if (!isCenteredSlides) originalProgress = Math.min(Math.max(slideEl.originalProgress, -params.limitProgress), params.limitProgress);
                    const offset = slideEl.swiperSlideOffset;
                    const t = [ swiper.params.cssMode ? -offset - swiper.translate : -offset, 0, 0 ];
                    const r = [ 0, 0, 0 ];
                    let custom = false;
                    if (!swiper.isHorizontal()) {
                        t[1] = t[0];
                        t[0] = 0;
                    }
                    let data = {
                        translate: [ 0, 0, 0 ],
                        rotate: [ 0, 0, 0 ],
                        scale: 1,
                        opacity: 1
                    };
                    if (progress < 0) {
                        data = params.next;
                        custom = true;
                    } else if (progress > 0) {
                        data = params.prev;
                        custom = true;
                    }
                    t.forEach(((value, index) => {
                        t[index] = `calc(${value}px + (${getTranslateValue(data.translate[index])} * ${Math.abs(progress * multiplier)}))`;
                    }));
                    r.forEach(((value, index) => {
                        let val = data.rotate[index] * Math.abs(progress * multiplier);
                        if (swiper.browser && swiper.browser.need3dFix && Math.abs(val) / 90 % 2 === 1) val += .001;
                        r[index] = val;
                    }));
                    slideEl.style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length;
                    const translateString = t.join(", ");
                    const rotateString = `rotateX(${r[0]}deg) rotateY(${r[1]}deg) rotateZ(${r[2]}deg)`;
                    const scaleString = originalProgress < 0 ? `scale(${1 + (1 - data.scale) * originalProgress * multiplier})` : `scale(${1 - (1 - data.scale) * originalProgress * multiplier})`;
                    const opacityString = originalProgress < 0 ? 1 + (1 - data.opacity) * originalProgress * multiplier : 1 - (1 - data.opacity) * originalProgress * multiplier;
                    const transform = `translate3d(${translateString}) ${rotateString} ${scaleString}`;
                    if (custom && data.shadow || !custom) {
                        let shadowEl = slideEl.querySelector(".swiper-slide-shadow");
                        if (!shadowEl && data.shadow) shadowEl = create_shadow_createShadow("creative", slideEl);
                        if (shadowEl) {
                            const shadowOpacity = params.shadowPerProgress ? progress * (1 / params.limitProgress) : progress;
                            shadowEl.style.opacity = Math.min(Math.max(Math.abs(shadowOpacity), 0), 1);
                        }
                    }
                    const targetEl = effect_target_effectTarget(params, slideEl);
                    targetEl.style.transform = transform;
                    targetEl.style.opacity = opacityString;
                    if (data.origin) targetEl.style.transformOrigin = data.origin;
                }
            };
            const setTransition = duration => {
                const transformElements = swiper.slides.map((slideEl => utils_getSlideTransformEl(slideEl)));
                transformElements.forEach((el => {
                    el.style.transitionDuration = `${duration}ms`;
                    el.querySelectorAll(".swiper-slide-shadow").forEach((shadowEl => {
                        shadowEl.style.transitionDuration = `${duration}ms`;
                    }));
                }));
                effect_virtual_transition_end_effectVirtualTransitionEnd({
                    swiper,
                    duration,
                    transformElements,
                    allSlides: true
                });
            };
            effect_init_effectInit({
                effect: "creative",
                swiper,
                on,
                setTranslate,
                setTransition,
                perspective: () => swiper.params.creativeEffect.perspective,
                overwriteParams: () => ({
                    watchSlidesProgress: true,
                    virtualTranslate: !swiper.params.cssMode
                })
            });
        }
        function initSliders() {
            if (document.querySelector(".portfolio__slider")) new swiper_core_Swiper(".portfolio__slider", {
                modules: [ Navigation, EffectCreative, Keyboard, Pagination ],
                observer: true,
                observeParents: true,
                slidesPerView: "auto",
                spaceBetween: 0,
                speed: 800,
                centeredSlides: true,
                effect: "creative",
                creativeEffect: {
                    limitProgress: 2,
                    perspective: true,
                    prev: {
                        translate: [ "-40%", "10%", 0 ],
                        scale: .7
                    },
                    next: {
                        translate: [ "40%", "10%", 0 ],
                        scale: .7
                    }
                },
                keyboard: {
                    enabled: true
                },
                pagination: {
                    el: ".portfolio-pagination",
                    clickable: true
                },
                navigation: {
                    prevEl: ".portfolio-button-prev",
                    nextEl: ".portfolio-button-next"
                },
                on: {}
            });
        }
        window.addEventListener("load", (function(e) {
            initSliders();
        }));
        class FullPage {
            constructor(element, options) {
                let config = {
                    noEventSelector: "[data-no-event]",
                    classInit: "fp-init",
                    wrapperAnimatedClass: "fp-switching",
                    selectorSection: "[data-fp-section]",
                    activeClass: "active-section",
                    previousClass: "previous-section",
                    nextClass: "next-section",
                    idActiveSection: 0,
                    mode: element.dataset.fpEffect ? element.dataset.fpEffect : "slider",
                    bullets: element.hasAttribute("data-fp-bullets") ? true : false,
                    bulletsClass: "fp-bullets",
                    bulletClass: "fp-bullet",
                    bulletActiveClass: "fp-bullet-active",
                    onInit: function() {},
                    onSwitching: function() {},
                    onDestroy: function() {}
                };
                this.options = Object.assign(config, options);
                this.wrapper = element;
                this.sections = this.wrapper.querySelectorAll(this.options.selectorSection);
                this.activeSection = false;
                this.activeSectionId = false;
                this.previousSection = false;
                this.previousSectionId = false;
                this.nextSection = false;
                this.nextSectionId = false;
                this.bulletsWrapper = false;
                this.stopEvent = false;
                if (this.sections.length) this.init();
            }
            init() {
                if (this.options.idActiveSection > this.sections.length - 1) return;
                this.setId();
                this.activeSectionId = this.options.idActiveSection;
                this.setEffectsClasses();
                this.setClasses();
                this.setStyle();
                if (this.options.bullets) {
                    this.setBullets();
                    this.setActiveBullet(this.activeSectionId);
                }
                this.events();
                setTimeout((() => {
                    document.documentElement.classList.add(this.options.classInit);
                    this.options.onInit(this);
                    document.dispatchEvent(new CustomEvent("fpinit", {
                        detail: {
                            fp: this
                        }
                    }));
                }), 0);
            }
            destroy() {
                this.removeEvents();
                this.removeClasses();
                document.documentElement.classList.remove(this.options.classInit);
                this.wrapper.classList.remove(this.options.wrapperAnimatedClass);
                this.removeEffectsClasses();
                this.removeZIndex();
                this.removeStyle();
                this.removeId();
                this.options.onDestroy(this);
                document.dispatchEvent(new CustomEvent("fpdestroy", {
                    detail: {
                        fp: this
                    }
                }));
            }
            setId() {
                for (let index = 0; index < this.sections.length; index++) {
                    const section = this.sections[index];
                    section.setAttribute("data-fp-id", index);
                }
            }
            removeId() {
                for (let index = 0; index < this.sections.length; index++) {
                    const section = this.sections[index];
                    section.removeAttribute("data-fp-id");
                }
            }
            setClasses() {
                this.previousSectionId = this.activeSectionId - 1 >= 0 ? this.activeSectionId - 1 : false;
                this.nextSectionId = this.activeSectionId + 1 < this.sections.length ? this.activeSectionId + 1 : false;
                this.activeSection = this.sections[this.activeSectionId];
                this.activeSection.classList.add(this.options.activeClass);
                for (let index = 0; index < this.sections.length; index++) document.documentElement.classList.remove(`fp-section-${index}`);
                document.documentElement.classList.add(`fp-section-${this.activeSectionId}`);
                if (this.previousSectionId !== false) {
                    this.previousSection = this.sections[this.previousSectionId];
                    this.previousSection.classList.add(this.options.previousClass);
                } else this.previousSection = false;
                if (this.nextSectionId !== false) {
                    this.nextSection = this.sections[this.nextSectionId];
                    this.nextSection.classList.add(this.options.nextClass);
                } else this.nextSection = false;
            }
            removeEffectsClasses() {
                switch (this.options.mode) {
                  case "slider":
                    this.wrapper.classList.remove("slider-mode");
                    break;

                  case "cards":
                    this.wrapper.classList.remove("cards-mode");
                    this.setZIndex();
                    break;

                  case "fade":
                    this.wrapper.classList.remove("fade-mode");
                    this.setZIndex();
                    break;

                  default:
                    break;
                }
            }
            setEffectsClasses() {
                switch (this.options.mode) {
                  case "slider":
                    this.wrapper.classList.add("slider-mode");
                    break;

                  case "cards":
                    this.wrapper.classList.add("cards-mode");
                    this.setZIndex();
                    break;

                  case "fade":
                    this.wrapper.classList.add("fade-mode");
                    this.setZIndex();
                    break;

                  default:
                    break;
                }
            }
            setStyle() {
                switch (this.options.mode) {
                  case "slider":
                    this.styleSlider();
                    break;

                  case "cards":
                    this.styleCards();
                    break;

                  case "fade":
                    this.styleFade();
                    break;

                  default:
                    break;
                }
            }
            styleSlider() {
                for (let index = 0; index < this.sections.length; index++) {
                    const section = this.sections[index];
                    if (index === this.activeSectionId) section.style.transform = "translate3D(0,0,0)"; else if (index < this.activeSectionId) section.style.transform = "translate3D(0,-100%,0)"; else if (index > this.activeSectionId) section.style.transform = "translate3D(0,100%,0)";
                }
            }
            styleCards() {
                for (let index = 0; index < this.sections.length; index++) {
                    const section = this.sections[index];
                    if (index >= this.activeSectionId) section.style.transform = "translate3D(0,0,0)"; else if (index < this.activeSectionId) section.style.transform = "translate3D(0,-100%,0)";
                }
            }
            styleFade() {
                for (let index = 0; index < this.sections.length; index++) {
                    const section = this.sections[index];
                    if (index === this.activeSectionId) {
                        section.style.opacity = "1";
                        section.style.pointerEvents = "all";
                    } else {
                        section.style.opacity = "0";
                        section.style.pointerEvents = "none";
                    }
                }
            }
            removeStyle() {
                for (let index = 0; index < this.sections.length; index++) {
                    const section = this.sections[index];
                    section.style.opacity = "";
                    section.style.visibility = "";
                    section.style.transform = "";
                }
            }
            checkScroll(yCoord, element) {
                this.goScroll = false;
                if (!this.stopEvent && element) {
                    this.goScroll = true;
                    if (this.haveScroll(element)) {
                        this.goScroll = false;
                        const position = Math.round(element.scrollHeight - element.scrollTop);
                        if (Math.abs(position - element.scrollHeight) < 2 && yCoord <= 0 || Math.abs(position - element.clientHeight) < 2 && yCoord >= 0) this.goScroll = true;
                    }
                }
            }
            haveScroll(element) {
                return element.scrollHeight !== window.innerHeight;
            }
            removeClasses() {
                for (let index = 0; index < this.sections.length; index++) {
                    const section = this.sections[index];
                    section.classList.remove(this.options.activeClass);
                    section.classList.remove(this.options.previousClass);
                    section.classList.remove(this.options.nextClass);
                }
            }
            events() {
                this.events = {
                    wheel: this.wheel.bind(this),
                    touchdown: this.touchDown.bind(this),
                    touchup: this.touchUp.bind(this),
                    touchmove: this.touchMove.bind(this),
                    touchcancel: this.touchUp.bind(this),
                    transitionEnd: this.transitionend.bind(this),
                    click: this.clickBullets.bind(this)
                };
                if (isMobile.iOS()) document.addEventListener("touchmove", (e => {
                    e.preventDefault();
                }));
                this.setEvents();
            }
            setEvents() {
                this.wrapper.addEventListener("wheel", this.events.wheel);
                this.wrapper.addEventListener("touchstart", this.events.touchdown);
                if (this.options.bullets && this.bulletsWrapper) this.bulletsWrapper.addEventListener("click", this.events.click);
            }
            removeEvents() {
                this.wrapper.removeEventListener("wheel", this.events.wheel);
                this.wrapper.removeEventListener("touchdown", this.events.touchdown);
                this.wrapper.removeEventListener("touchup", this.events.touchup);
                this.wrapper.removeEventListener("touchcancel", this.events.touchup);
                this.wrapper.removeEventListener("touchmove", this.events.touchmove);
                if (this.bulletsWrapper) this.bulletsWrapper.removeEventListener("click", this.events.click);
            }
            clickBullets(e) {
                const bullet = e.target.closest(`.${this.options.bulletClass}`);
                if (bullet) {
                    const arrayChildren = Array.from(this.bulletsWrapper.children);
                    const idClickBullet = arrayChildren.indexOf(bullet);
                    this.switchingSection(idClickBullet);
                }
            }
            setActiveBullet(idButton) {
                if (!this.bulletsWrapper) return;
                const bullets = this.bulletsWrapper.children;
                for (let index = 0; index < bullets.length; index++) {
                    const bullet = bullets[index];
                    if (idButton === index) bullet.classList.add(this.options.bulletActiveClass); else bullet.classList.remove(this.options.bulletActiveClass);
                }
            }
            touchDown(e) {
                this._yP = e.changedTouches[0].pageY;
                this._eventElement = e.target.closest(`.${this.options.activeClass}`);
                if (this._eventElement) {
                    this._eventElement.addEventListener("touchend", this.events.touchup);
                    this._eventElement.addEventListener("touchcancel", this.events.touchup);
                    this._eventElement.addEventListener("touchmove", this.events.touchmove);
                    this.clickOrTouch = true;
                    if (isMobile.iOS()) {
                        if (this._eventElement.scrollHeight !== this._eventElement.clientHeight) {
                            if (this._eventElement.scrollTop === 0) this._eventElement.scrollTop = 1;
                            if (this._eventElement.scrollTop === this._eventElement.scrollHeight - this._eventElement.clientHeight) this._eventElement.scrollTop = this._eventElement.scrollHeight - this._eventElement.clientHeight - 1;
                        }
                        this.allowUp = this._eventElement.scrollTop > 0;
                        this.allowDown = this._eventElement.scrollTop < this._eventElement.scrollHeight - this._eventElement.clientHeight;
                        this.lastY = e.changedTouches[0].pageY;
                    }
                }
            }
            touchMove(e) {
                const targetElement = e.target.closest(`.${this.options.activeClass}`);
                if (isMobile.iOS()) {
                    let up = e.changedTouches[0].pageY > this.lastY;
                    let down = !up;
                    this.lastY = e.changedTouches[0].pageY;
                    if (targetElement) if (up && this.allowUp || down && this.allowDown) e.stopPropagation(); else if (e.cancelable) e.preventDefault();
                }
                if (!this.clickOrTouch || e.target.closest(this.options.noEventSelector)) return;
                let yCoord = this._yP - e.changedTouches[0].pageY;
                this.checkScroll(yCoord, targetElement);
                if (this.goScroll && Math.abs(yCoord) > 20) this.choiceOfDirection(yCoord);
            }
            touchUp(e) {
                this._eventElement.removeEventListener("touchend", this.events.touchup);
                this._eventElement.removeEventListener("touchcancel", this.events.touchup);
                this._eventElement.removeEventListener("touchmove", this.events.touchmove);
                return this.clickOrTouch = false;
            }
            transitionend(e) {
                this.stopEvent = false;
                document.documentElement.classList.remove(this.options.wrapperAnimatedClass);
                this.wrapper.classList.remove(this.options.wrapperAnimatedClass);
            }
            wheel(e) {
                if (e.target.closest(this.options.noEventSelector)) return;
                const yCoord = e.deltaY;
                const targetElement = e.target.closest(`.${this.options.activeClass}`);
                this.checkScroll(yCoord, targetElement);
                if (this.goScroll) this.choiceOfDirection(yCoord);
            }
            choiceOfDirection(direction) {
                if (direction > 0 && this.nextSection !== false) this.activeSectionId = this.activeSectionId + 1 < this.sections.length ? ++this.activeSectionId : this.activeSectionId; else if (direction < 0 && this.previousSection !== false) this.activeSectionId = this.activeSectionId - 1 >= 0 ? --this.activeSectionId : this.activeSectionId;
                this.switchingSection(this.activeSectionId, direction);
            }
            switchingSection(idSection = this.activeSectionId, direction) {
                if (!direction) if (idSection < this.activeSectionId) direction = -100; else if (idSection > this.activeSectionId) direction = 100;
                this.activeSectionId = idSection;
                this.stopEvent = true;
                if (this.previousSectionId === false && direction < 0 || this.nextSectionId === false && direction > 0) this.stopEvent = false;
                if (this.stopEvent) {
                    document.documentElement.classList.add(this.options.wrapperAnimatedClass);
                    this.wrapper.classList.add(this.options.wrapperAnimatedClass);
                    this.removeClasses();
                    this.setClasses();
                    this.setStyle();
                    if (this.options.bullets) this.setActiveBullet(this.activeSectionId);
                    let delaySection;
                    if (direction < 0) {
                        delaySection = this.activeSection.dataset.fpDirectionUp ? parseInt(this.activeSection.dataset.fpDirectionUp) : 500;
                        document.documentElement.classList.add("fp-up");
                        document.documentElement.classList.remove("fp-down");
                    } else {
                        delaySection = this.activeSection.dataset.fpDirectionDown ? parseInt(this.activeSection.dataset.fpDirectionDown) : 500;
                        document.documentElement.classList.remove("fp-up");
                        document.documentElement.classList.add("fp-down");
                    }
                    setTimeout((() => {
                        this.events.transitionEnd();
                    }), delaySection);
                    this.options.onSwitching(this);
                    document.dispatchEvent(new CustomEvent("fpswitching", {
                        detail: {
                            fp: this
                        }
                    }));
                }
            }
            setBullets() {
                this.bulletsWrapper = document.querySelector(`.${this.options.bulletsClass}`);
                if (!this.bulletsWrapper) {
                    const bullets = document.createElement("div");
                    bullets.classList.add(this.options.bulletsClass);
                    this.wrapper.append(bullets);
                    this.bulletsWrapper = bullets;
                }
                if (this.bulletsWrapper) for (let index = 0; index < this.sections.length; index++) {
                    const span = document.createElement("span");
                    span.classList.add(this.options.bulletClass);
                    this.bulletsWrapper.append(span);
                }
            }
            setZIndex() {
                let zIndex = this.sections.length;
                for (let index = 0; index < this.sections.length; index++) {
                    const section = this.sections[index];
                    section.style.zIndex = zIndex;
                    --zIndex;
                }
            }
            removeZIndex() {
                for (let index = 0; index < this.sections.length; index++) {
                    const section = this.sections[index];
                    section.style.zIndex = "";
                }
            }
        }
        if (document.querySelector("[data-fp]")) modules_flsModules.fullpage = new FullPage(document.querySelector("[data-fp]"), "");
        let addWindowScrollEvent = false;
        setTimeout((() => {
            if (addWindowScrollEvent) {
                let windowScroll = new Event("windowScroll");
                window.addEventListener("scroll", (function(e) {
                    document.dispatchEvent(windowScroll);
                }));
            }
        }), 0);
        const sections = document.querySelectorAll("main.page > section");
        const fpBullets = document.querySelector(".fp-bullets");
        sections.forEach((section => {
            section.addEventListener("scroll", (() => {
                section.scrollTop > 0 ? fpBullets.classList.add("hide") : fpBullets.classList.remove("hide");
            }));
        }));
        document.addEventListener("fpswitching", (() => {
            let activeSection = document.querySelector("section.active-section");
            activeSection.scrollTop > 0 ? fpBullets.classList.add("hide") : fpBullets.classList.remove("hide");
        }));
        function wrapInSpan() {
            const wrapElems = document.querySelectorAll("[data-span]");
            if (wrapElems) wrapElems.forEach((elem => {
                const textArray = elem.textContent.split("");
                elem.innerHTML = "";
                for (let index = 0; index < textArray.length; index++) textArray[index] == " " ? elem.innerHTML += "&nbsp;" : elem.innerHTML += `<span>${textArray[index]}</span>`;
            }));
        }
        var gsap = __webpack_require__(556);
        window.addEventListener("load", (() => {
            wrapInSpan();
            var tl = gsap.gsap.timeline();
            tl.from(".hero .card", {
                width: 0,
                duration: 1,
                ease: "none"
            });
            tl.from(".hero .card", {
                height: 0,
                padding: 0,
                duration: 1,
                ease: "none"
            });
            tl.from("[data-span] span", {
                x: "random(-100, 100)",
                y: "random(-100, 100)",
                duration: 1,
                stagger: .1,
                opacity: 0,
                ease: "none"
            });
            tl.from(".card__text p, .card__contacts-title", {
                x: -50,
                skewX: 35,
                duration: 3,
                stagger: .5,
                opacity: 0,
                ease: "elastic.out"
            });
            tl.from(".card__link", {
                scale: 0,
                duration: 2,
                stagger: .1,
                opacity: 0,
                ease: "elastic.out"
            }, ">-2");
        }));
        let swiperAnimationCounter = 1;
        let spollerAnimationCounter = 1;
        document.addEventListener("fpswitching", (() => {
            if (modules_flsModules.fullpage.activeSectionId == 1 && swiperAnimationCounter == 1) {
                swiperAnimationCounter = 0;
                gsap.gsap.from(".portfolio-slide", {
                    scale: 0,
                    rotate: 360,
                    duration: 3
                });
            }
            if (modules_flsModules.fullpage.activeSectionId == 2 && spollerAnimationCounter == 1) {
                spollerAnimationCounter = 0;
                gsap.gsap.from(".spollers__item", {
                    rotationX: -90,
                    duration: 1,
                    stagger: .2,
                    transformOrigin: "top center",
                    ease: "none"
                });
            }
        }));
        window["FLS"] = false;
        isWebp();
        addLoadedClass();
        spollers();
    })();
})();