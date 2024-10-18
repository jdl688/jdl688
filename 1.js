!function(n, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : n.Shuffle = t()
}(this, function() {
    "use strict";
    function w() {}
    function ot() {}
    function i(n) {
        return parseFloat(n) || 0
    }
    function u(n, t) {
        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : window.getComputedStyle(n, null)
          , u = i(r[t]);
        return y || "width" !== t ? y || "height" !== t || (u += i(r.paddingTop) + i(r.paddingBottom) + i(r.borderTopWidth) + i(r.borderBottomWidth)) : u += i(r.paddingLeft) + i(r.paddingRight) + i(r.borderLeftWidth) + i(r.borderRightWidth),
        u
    }
    function st(n) {
        for (var i, r, t = n.length; t; )
            t -= 1,
            i = Math.floor(Math.random() * (t + 1)),
            r = n[i],
            n[i] = n[t],
            n[t] = r;
        return n
    }
    function c(n, t) {
        var i = Object.assign({}, dt, t)
          , u = Array.from(n)
          , r = !1;
        return n.length ? i.randomize ? st(n) : ("function" == typeof i.by && n.sort(function(n, t) {
            if (r)
                return 0;
            var u = i.by(n[i.key])
              , f = i.by(t[i.key]);
            return void 0 === u && void 0 === f ? (r = !0,
            0) : u < f || "sortFirst" === u || "sortLast" === f ? -1 : u > f || "sortLast" === u || "sortFirst" === f ? 1 : 0
        }),
        r ? u : (i.reverse && n.reverse(),
        n)) : []
    }
    function ht() {
        return ft += 1,
        p + ft
    }
    function b(n) {
        return !!h[n] && (h[n].element.removeEventListener(p, h[n].listener),
        h[n] = null,
        !0)
    }
    function ct(n, t) {
        var i = ht()
          , r = function(n) {
            n.currentTarget === n.target && (b(i),
            t(n))
        };
        return n.addEventListener(p, r),
        h[i] = {
            element: n,
            listener: r
        },
        i
    }
    function k(n) {
        return Math.max.apply(Math, n)
    }
    function lt(n) {
        return Math.min.apply(Math, n)
    }
    function d(n, t, i, r) {
        var u = n / t;
        return Math.abs(Math.round(u) - u) < r && (u = Math.round(u)),
        Math.min(Math.ceil(u), i)
    }
    function g(n, t, i) {
        if (1 === t)
            return n;
        for (var u = [], r = 0; r <= i - t; r++)
            u.push(k(n.slice(r, r + t)));
        return u
    }
    function nt(n, t) {
        for (var r = lt(n), i = 0, u = n.length; i < u; i++)
            if (n[i] >= r - t && n[i] <= r + t)
                return i;
        return 0
    }
    function at(n) {
        for (var u = n.itemSize, f = n.positions, o = n.gridSize, s = n.total, c = n.threshold, l = n.buffer, h = d(u.width, o, s, c), i = g(f, h, s), t = nt(i, l), a = new e(o * t,i[t]), v = i[t] + u.height, r = 0; r < h; r++)
            f[t + r] = v;
        return a
    }
    function tt(n, t) {
        var i = {};
        n.forEach(function(n) {
            i[n.top] ? i[n.top].push(n) : i[n.top] = [n]
        });
        var r = []
          , f = []
          , u = [];
        return Object.keys(i).forEach(function(n) {
            var e = i[n], h, c, l;
            f.push(e);
            var a = e[e.length - 1]
              , p = a.left + a.width
              , v = Math.round((t - p) / 2)
              , s = e
              , y = !1;
            v > 0 && (h = [],
            (y = e.every(function(n) {
                var t = new o(n.left + v,n.top,n.width,n.height,n.id)
                  , i = !r.some(function(n) {
                    return o.intersects(t, n)
                });
                return h.push(t),
                i
            })) && (s = h));
            y || (c = void 0,
            e.some(function(n) {
                return r.some(function(t) {
                    var i = o.intersects(n, t);
                    return i && (c = t),
                    i
                })
            }) && (l = u.findIndex(function(n) {
                return n.includes(c)
            }),
            u.splice(l, 1, f[l])));
            r = r.concat(s);
            u.push(s)
        }),
        [].concat.apply([], u).sort(function(n, t) {
            return n.id - t.id
        }).map(function(n) {
            return new e(n.left,n.top)
        })
    }
    function vt(n) {
        return n.replace(/([A-Z])/g, function(n, t) {
            return "-" + t.toLowerCase()
        })
    }
    function it(n) {
        return Array.from(new Set(n))
    }
    var v, s, y;
    w.prototype = {
        on: function(n, t, i) {
            var r = this.e || (this.e = {});
            return (r[n] || (r[n] = [])).push({
                fn: t,
                ctx: i
            }),
            this
        },
        once: function(n, t, i) {
            function r() {
                u.off(n, r);
                t.apply(i, arguments)
            }
            var u = this;
            return r._ = t,
            this.on(n, r, i)
        },
        emit: function(n) {
            var r = [].slice.call(arguments, 1)
              , i = ((this.e || (this.e = {}))[n] || []).slice()
              , t = 0
              , u = i.length;
            for (t; t < u; t++)
                i[t].fn.apply(i[t].ctx, r);
            return this
        },
        off: function(n, t) {
            var u = this.e || (this.e = {}), r = u[n], f = [], i, e;
            if (r && t)
                for (i = 0,
                e = r.length; i < e; i++)
                    r[i].fn !== t && r[i].fn._ !== t && f.push(r[i]);
            return f.length ? u[n] = f : delete u[n],
            this
        }
    };
    var yt = w
      , f = "undefined" != typeof Element ? Element.prototype : {}
      , rt = f.matches || f.matchesSelector || f.webkitMatchesSelector || f.mozMatchesSelector || f.msMatchesSelector || f.oMatchesSelector
      , pt = function(n, t) {
        if (!n || 1 !== n.nodeType)
            return !1;
        if (rt)
            return rt.call(n, t);
        for (var r = n.parentNode.querySelectorAll(t), i = 0; i < r.length; i++)
            if (r[i] == n)
                return !0;
        return !1
    }
      , wt = function(n, t, i) {
        function e(n) {
            return function(t, e) {
                if (!f) {
                    if (t)
                        return i(t, u),
                        void (f = !0);
                    u[n] = e;
                    --r || i(null, u)
                }
            }
        }
        var r, f, u;
        if (i || ("function" == typeof t ? (i = t,
        t = null) : i = ot),
        r = n && n.length,
        !r)
            return i(null, []);
        f = !1;
        u = new Array(r);
        n.forEach(t ? function(n, i) {
            n.call(t, e(i))
        }
        : function(n, t) {
            n(e(t))
        }
        )
    }
      , l = function(n, t) {
        if (!(n instanceof t))
            throw new TypeError("Cannot call a class as a function");
    }
      , a = function() {
        function n(n, t) {
            for (var i, r = 0; r < t.length; r++)
                i = t[r],
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(n, i.key, i)
        }
        return function(t, i, r) {
            return i && n(t.prototype, i),
            r && n(t, r),
            t
        }
    }()
      , bt = function(n, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        n.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: n,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        });
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(n, t) : n.__proto__ = t)
    }
      , kt = function(n, t) {
        if (!n)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? n : t
    }
      , e = function() {
        function n(t, r) {
            l(this, n);
            this.x = i(t);
            this.y = i(r)
        }
        return a(n, null, [{
            key: "equals",
            value: function(n, t) {
                return n.x === t.x && n.y === t.y
            }
        }]),
        n
    }()
      , o = function() {
        function n(t, i, r, u, f) {
            l(this, n);
            this.id = f;
            this.left = t;
            this.top = i;
            this.width = r;
            this.height = u
        }
        return a(n, null, [{
            key: "intersects",
            value: function(n, t) {
                return n.left < t.left + t.width && t.left < n.left + n.width && n.top < t.top + t.height && t.top < n.top + n.height
            }
        }]),
        n
    }()
      , r = {
        BASE: "shuffle",
        SHUFFLE_ITEM: "shuffle-item",
        VISIBLE: "shuffle-item--visible",
        HIDDEN: "shuffle-item--hidden"
    }
      , ut = 0
      , n = function() {
        function n(t) {
            l(this, n);
            ut += 1;
            this.id = ut;
            this.element = t;
            this.isVisible = !0;
            this.isHidden = !1
        }
        return a(n, [{
            key: "show",
            value: function() {
                this.isVisible = !0;
                this.element.classList.remove(r.HIDDEN);
                this.element.classList.add(r.VISIBLE);
                this.element.removeAttribute("aria-hidden")
            }
        }, {
            key: "hide",
            value: function() {
                this.isVisible = !1;
                this.element.classList.remove(r.VISIBLE);
                this.element.classList.add(r.HIDDEN);
                this.element.setAttribute("aria-hidden", !0)
            }
        }, {
            key: "init",
            value: function() {
                this.addClasses([r.SHUFFLE_ITEM, r.VISIBLE]);
                this.applyCss(n.Css.INITIAL);
                this.scale = n.Scale.VISIBLE;
                this.point = new e
            }
        }, {
            key: "addClasses",
            value: function(n) {
                var t = this;
                n.forEach(function(n) {
                    t.element.classList.add(n)
                })
            }
        }, {
            key: "removeClasses",
            value: function(n) {
                var t = this;
                n.forEach(function(n) {
                    t.element.classList.remove(n)
                })
            }
        }, {
            key: "applyCss",
            value: function(n) {
                var t = this;
                Object.keys(n).forEach(function(i) {
                    t.element.style[i] = n[i]
                })
            }
        }, {
            key: "dispose",
            value: function() {
                this.removeClasses([r.HIDDEN, r.VISIBLE, r.SHUFFLE_ITEM]);
                this.element.removeAttribute("style");
                this.element = null
            }
        }]),
        n
    }();
    n.Css = {
        INITIAL: {
            position: "absolute",
            top: 0,
            left: 0,
            visibility: "visible",
            "will-change": "transform"
        },
        VISIBLE: {
            before: {
                opacity: 1,
                visibility: "visible"
            },
            after: {
                transitionDelay: ""
            }
        },
        HIDDEN: {
            before: {
                opacity: 0
            },
            after: {
                visibility: "hidden",
                transitionDelay: ""
            }
        }
    };
    n.Scale = {
        VISIBLE: 1,
        HIDDEN: .001
    };
    v = document.body || document.documentElement;
    s = document.createElement("div");
    s.style.cssText = "width:10px;padding:2px;box-sizing:border-box;";
    v.appendChild(s);
    y = "10px" === window.getComputedStyle(s, null).width;
    v.removeChild(s);
    var dt = {
        reverse: !1,
        by: null,
        randomize: !1,
        key: "element"
    }
      , h = {}
      , p = "transitionend"
      , ft = 0
      , et = 0
      , t = function() {
        function t(n) {
            var u = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, i, r;
            if (l(this, t),
            i = kt(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this)),
            i.options = Object.assign({}, t.options, u),
            i.lastSort = {},
            i.group = t.ALL_ITEMS,
            i.lastFilter = t.ALL_ITEMS,
            i.isEnabled = !0,
            i.isDestroyed = !1,
            i.isInitialized = !1,
            i._transitions = [],
            i.isTransitioning = !1,
            i._queue = [],
            r = i._getElementOption(n),
            !r)
                throw new TypeError("Shuffle needs to be initialized with an element.");
            return i.element = r,
            i.id = "shuffle_" + et,
            et += 1,
            i._init(),
            i.isInitialized = !0,
            i
        }
        return bt(t, yt),
        a(t, [{
            key: "_init",
            value: function() {
                var n, i, r;
                (this.items = this._getItems(),
                this.options.sizer = this._getElementOption(this.options.sizer),
                this.element.classList.add(t.Classes.BASE),
                this._initItems(this.items),
                this._onResize = this._getResizeFunction(),
                window.addEventListener("resize", this._onResize),
                "complete" !== document.readyState) && (n = this.layout.bind(this),
                window.addEventListener("load", function t() {
                    window.removeEventListener("load", t);
                    n()
                }));
                i = window.getComputedStyle(this.element, null);
                r = t.getSize(this.element).width;
                this._validateStyles(i);
                this._setColumns(r);
                this.filter(this.options.group, this.options.initialSort);
                this.element.offsetWidth;
                this.setItemTransitions(this.items);
                this.element.style.transition = "height " + this.options.speed + "ms " + this.options.easing
            }
        }, {
            key: "_getResizeFunction",
            value: function() {
                var n = this._handleResize.bind(this);
                return this.options.throttle ? this.options.throttle(n, this.options.throttleTime) : n
            }
        }, {
            key: "_getElementOption",
            value: function(n) {
                return "string" == typeof n ? this.element.querySelector(n) : n && n.nodeType && 1 === n.nodeType ? n : n && n.jquery ? n[0] : null
            }
        }, {
            key: "_validateStyles",
            value: function(n) {
                "static" === n.position && (this.element.style.position = "relative");
                "hidden" !== n.overflow && (this.element.style.overflow = "hidden")
            }
        }, {
            key: "_filter",
            value: function() {
                var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.lastFilter
                  , i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.items
                  , t = this._getFilteredSets(n, i);
                return this._toggleFilterClasses(t),
                this.lastFilter = n,
                "string" == typeof n && (this.group = n),
                t
            }
        }, {
            key: "_getFilteredSets",
            value: function(n, i) {
                var f = this
                  , r = []
                  , u = [];
                return n === t.ALL_ITEMS ? r = i : i.forEach(function(t) {
                    f._doesPassFilter(n, t.element) ? r.push(t) : u.push(t)
                }),
                {
                    visible: r,
                    hidden: u
                }
            }
        }, {
            key: "_doesPassFilter",
            value: function(n, i) {
                function r(n) {
                    return f.includes(n)
                }
                if ("function" == typeof n)
                    return n.call(i, i, this);
                var u = i.getAttribute("data-" + t.FILTER_ATTRIBUTE_KEY)
                  , f = this.options.delimeter ? u.split(this.options.delimeter) : JSON.parse(u);
                return Array.isArray(n) ? this.options.filterMode === t.FilterMode.ANY ? n.some(r) : n.every(r) : f.includes(n)
            }
        }, {
            key: "_toggleFilterClasses",
            value: function(n) {
                var t = n.visible
                  , i = n.hidden;
                t.forEach(function(n) {
                    n.show()
                });
                i.forEach(function(n) {
                    n.hide()
                })
            }
        }, {
            key: "_initItems",
            value: function(n) {
                n.forEach(function(n) {
                    n.init()
                })
            }
        }, {
            key: "_disposeItems",
            value: function(n) {
                n.forEach(function(n) {
                    n.dispose()
                })
            }
        }, {
            key: "_updateItemCount",
            value: function() {
                this.visibleItems = this._getFilteredItems().length
            }
        }, {
            key: "setItemTransitions",
            value: function(t) {
                var i = this.options.speed
                  , r = this.options.easing
                  , u = (this.options.useTransforms ? ["transform"] : ["top", "left"]).concat(Object.keys(n.Css.HIDDEN.before).map(function(n) {
                    return vt(n)
                })).join();
                t.forEach(function(n) {
                    n.element.style.transitionDuration = i + "ms";
                    n.element.style.transitionTimingFunction = r;
                    n.element.style.transitionProperty = u
                })
            }
        }, {
            key: "_getItems",
            value: function() {
                var t = this;
                return Array.from(this.element.children).filter(function(n) {
                    return pt(n, t.options.itemSelector)
                }).map(function(t) {
                    return new n(t)
                })
            }
        }, {
            key: "_mergeNewItems",
            value: function(n) {
                var t = Array.from(this.element.children);
                return c(this.items.concat(n), {
                    by: function(n) {
                        return t.indexOf(n)
                    }
                })
            }
        }, {
            key: "_getFilteredItems",
            value: function() {
                return this.items.filter(function(n) {
                    return n.isVisible
                })
            }
        }, {
            key: "_getConcealedItems",
            value: function() {
                return this.items.filter(function(n) {
                    return !n.isVisible
                })
            }
        }, {
            key: "_getColumnSize",
            value: function(n, i) {
                var r = void 0;
                return 0 === (r = "function" == typeof this.options.columnWidth ? this.options.columnWidth(n) : this.options.sizer ? t.getSize(this.options.sizer).width : this.options.columnWidth ? this.options.columnWidth : this.items.length > 0 ? t.getSize(this.items[0].element, !0).width : n) && (r = n),
                r + i
            }
        }, {
            key: "_getGutterSize",
            value: function(n) {
                return "function" == typeof this.options.gutterWidth ? this.options.gutterWidth(n) : this.options.sizer ? u(this.options.sizer, "marginLeft") : this.options.gutterWidth
            }
        }, {
            key: "_setColumns",
            value: function() {
                var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t.getSize(this.element).width
                  , r = this._getGutterSize(i)
                  , u = this._getColumnSize(i, r)
                  , n = (i + r) / u;
                Math.abs(Math.round(n) - n) < this.options.columnThreshold && (n = Math.round(n));
                this.cols = Math.max(Math.floor(n), 1);
                this.containerWidth = i;
                this.colWidth = u
            }
        }, {
            key: "_setContainerSize",
            value: function() {
                this.element.style.height = this._getContainerSize() + "px"
            }
        }, {
            key: "_getContainerSize",
            value: function() {
                return k(this.positions)
            }
        }, {
            key: "_getStaggerAmount",
            value: function(n) {
                return Math.min(n * this.options.staggerAmount, this.options.staggerAmountMax)
            }
        }, {
            key: "_dispatch",
            value: function(n) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                this.isDestroyed || (t.shuffle = this,
                this.emit(n, t))
            }
        }, {
            key: "_resetCols",
            value: function() {
                var n = this.cols;
                for (this.positions = []; n; )
                    n -= 1,
                    this.positions.push(0)
            }
        }, {
            key: "_layout",
            value: function(t) {
                var i = this
                  , r = this._getNextPositions(t)
                  , u = 0;
                t.forEach(function(t, f) {
                    function o() {
                        t.applyCss(n.Css.VISIBLE.after)
                    }
                    if (e.equals(t.point, r[f]) && !t.isHidden)
                        return t.applyCss(n.Css.VISIBLE.before),
                        void o();
                    t.point = r[f];
                    t.scale = n.Scale.VISIBLE;
                    t.isHidden = !1;
                    var s = i.getStylesForTransition(t, n.Css.VISIBLE.before);
                    s.transitionDelay = i._getStaggerAmount(u) + "ms";
                    i._queue.push({
                        item: t,
                        styles: s,
                        callback: o
                    });
                    u += 1
                })
            }
        }, {
            key: "_getNextPositions",
            value: function(n) {
                var i = this, r;
                return this.options.isCentered ? (r = n.map(function(n, r) {
                    var u = t.getSize(n.element, !0)
                      , f = i._getItemPosition(u);
                    return new o(f.x,f.y,u.width,u.height,r)
                }),
                this.getTransformedPositions(r, this.containerWidth)) : n.map(function(n) {
                    return i._getItemPosition(t.getSize(n.element, !0))
                })
            }
        }, {
            key: "_getItemPosition",
            value: function(n) {
                return at({
                    itemSize: n,
                    positions: this.positions,
                    gridSize: this.colWidth,
                    total: this.cols,
                    threshold: this.options.columnThreshold,
                    buffer: this.options.buffer
                })
            }
        }, {
            key: "getTransformedPositions",
            value: function(n, t) {
                return tt(n, t)
            }
        }, {
            key: "_shrink",
            value: function() {
                var t = this
                  , i = 0;
                (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._getConcealedItems()).forEach(function(r) {
                    function u() {
                        r.applyCss(n.Css.HIDDEN.after)
                    }
                    if (r.isHidden)
                        return r.applyCss(n.Css.HIDDEN.before),
                        void u();
                    r.scale = n.Scale.HIDDEN;
                    r.isHidden = !0;
                    var f = t.getStylesForTransition(r, n.Css.HIDDEN.before);
                    f.transitionDelay = t._getStaggerAmount(i) + "ms";
                    t._queue.push({
                        item: r,
                        styles: f,
                        callback: u
                    });
                    i += 1
                })
            }
        }, {
            key: "_handleResize",
            value: function() {
                this.isEnabled && !this.isDestroyed && this.update()
            }
        }, {
            key: "getStylesForTransition",
            value: function(n, t) {
                var i = Object.assign({}, t);
                return this.options.useTransforms ? i.transform = "translate(" + n.point.x + "px, " + n.point.y + "px) scale(" + n.scale + ")" : (i.left = n.point.x + "px",
                i.top = n.point.y + "px"),
                i
            }
        }, {
            key: "_whenTransitionDone",
            value: function(n, t, i) {
                var r = ct(n, function(n) {
                    t();
                    i(null, n)
                });
                this._transitions.push(r)
            }
        }, {
            key: "_getTransitionFunction",
            value: function(n) {
                var t = this;
                return function(i) {
                    n.item.applyCss(n.styles);
                    t._whenTransitionDone(n.item.element, n.callback, i)
                }
            }
        }, {
            key: "_processQueue",
            value: function() {
                this.isTransitioning && this._cancelMovement();
                var i = this.options.speed > 0
                  , n = this._queue.length > 0;
                n && i && this.isInitialized ? this._startTransitions(this._queue) : n ? (this._styleImmediately(this._queue),
                this._dispatch(t.EventType.LAYOUT)) : this._dispatch(t.EventType.LAYOUT);
                this._queue.length = 0
            }
        }, {
            key: "_startTransitions",
            value: function(n) {
                var i = this, t;
                this.isTransitioning = !0;
                t = n.map(function(n) {
                    return i._getTransitionFunction(n)
                });
                wt(t, this._movementFinished.bind(this))
            }
        }, {
            key: "_cancelMovement",
            value: function() {
                this._transitions.forEach(b);
                this._transitions.length = 0;
                this.isTransitioning = !1
            }
        }, {
            key: "_styleImmediately",
            value: function(n) {
                if (n.length) {
                    var i = n.map(function(n) {
                        return n.item.element
                    });
                    t._skipTransitions(i, function() {
                        n.forEach(function(n) {
                            n.item.applyCss(n.styles);
                            n.callback()
                        })
                    })
                }
            }
        }, {
            key: "_movementFinished",
            value: function() {
                this._transitions.length = 0;
                this.isTransitioning = !1;
                this._dispatch(t.EventType.LAYOUT)
            }
        }, {
            key: "filter",
            value: function(n, i) {
                this.isEnabled && ((!n || n && 0 === n.length) && (n = t.ALL_ITEMS),
                this._filter(n),
                this._shrink(),
                this._updateItemCount(),
                this.sort(i))
            }
        }, {
            key: "sort",
            value: function() {
                var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.lastSort, t;
                this.isEnabled && (this._resetCols(),
                t = c(this._getFilteredItems(), n),
                this._layout(t),
                this._processQueue(),
                this._setContainerSize(),
                this.lastSort = n)
            }
        }, {
            key: "update",
            value: function() {
                var n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                this.isEnabled && (n || this._setColumns(),
                this.sort())
            }
        }, {
            key: "layout",
            value: function() {
                this.update(!0)
            }
        }, {
            key: "add",
            value: function(t) {
                var f = this
                  , i = it(t).map(function(t) {
                    return new n(t)
                });
                this._initItems(i);
                this._resetCols();
                var r = this._filter(this.lastFilter, i)
                  , u = c(this._mergeNewItems(r.visible), this.lastSort)
                  , e = this._getNextPositions(u);
                u.forEach(function(t, i) {
                    r.visible.includes(t) && (t.point = e[i],
                    t.scale = n.Scale.HIDDEN,
                    t.isHidden = !0,
                    t.applyCss(n.Css.HIDDEN.before),
                    t.applyCss(n.Css.HIDDEN.after),
                    t.applyCss(f.getStylesForTransition(t, {})))
                });
                this.element.offsetWidth;
                this.setItemTransitions(i);
                this.items = this._mergeNewItems(i);
                this.filter(this.lastFilter)
            }
        }, {
            key: "disable",
            value: function() {
                this.isEnabled = !1
            }
        }, {
            key: "enable",
            value: function() {
                var n = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                this.isEnabled = !0;
                n && this.update()
            }
        }, {
            key: "remove",
            value: function(n) {
                var u = this, r, i;
                n.length && (r = it(n),
                i = r.map(function(n) {
                    return u.getItemByElement(n)
                }).filter(function(n) {
                    return !!n
                }),
                this._toggleFilterClasses({
                    visible: [],
                    hidden: i
                }),
                this._shrink(i),
                this.sort(),
                this.items = this.items.filter(function(n) {
                    return !i.includes(n)
                }),
                this._updateItemCount(),
                this.once(t.EventType.LAYOUT, function() {
                    u._disposeItems(i);
                    r.forEach(function(n) {
                        n.parentNode.removeChild(n)
                    });
                    u._dispatch(t.EventType.REMOVED, {
                        collection: r
                    })
                }))
            }
        }, {
            key: "getItemByElement",
            value: function(n) {
                return this.items.find(function(t) {
                    return t.element === n
                })
            }
        }, {
            key: "resetItems",
            value: function() {
                var n = this;
                this._disposeItems(this.items);
                this.isInitialized = !1;
                this.items = this._getItems();
                this._initItems(this.items);
                this.once(t.EventType.LAYOUT, function() {
                    n.setItemTransitions(n.items);
                    n.isInitialized = !0
                });
                this.filter(this.lastFilter)
            }
        }, {
            key: "destroy",
            value: function() {
                this._cancelMovement();
                window.removeEventListener("resize", this._onResize);
                this.element.classList.remove("shuffle");
                this.element.removeAttribute("style");
                this._disposeItems(this.items);
                this.items.length = 0;
                this._transitions.length = 0;
                this.options.sizer = null;
                this.element = null;
                this.isDestroyed = !0;
                this.isEnabled = !1
            }
        }], [{
            key: "getSize",
            value: function(n) {
                var f = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                  , t = window.getComputedStyle(n, null)
                  , i = u(n, "width", t)
                  , r = u(n, "height", t);
                return f && (i += u(n, "marginLeft", t) + u(n, "marginRight", t),
                r += u(n, "marginTop", t) + u(n, "marginBottom", t)),
                {
                    width: i,
                    height: r
                }
            }
        }, {
            key: "_skipTransitions",
            value: function(n, t) {
                var i = n.map(function(n) {
                    var t = n.style
                      , i = t.transitionDuration
                      , r = t.transitionDelay;
                    return t.transitionDuration = "0ms",
                    t.transitionDelay = "0ms",
                    {
                        duration: i,
                        delay: r
                    }
                });
                t();
                n[0].offsetWidth;
                n.forEach(function(n, t) {
                    n.style.transitionDuration = i[t].duration;
                    n.style.transitionDelay = i[t].delay
                })
            }
        }]),
        t
    }();
    return t.ShuffleItem = n,
    t.ALL_ITEMS = "all",
    t.FILTER_ATTRIBUTE_KEY = "groups",
    t.EventType = {
        LAYOUT: "shuffle:layout",
        REMOVED: "shuffle:removed"
    },
    t.Classes = r,
    t.FilterMode = {
        ANY: "any",
        ALL: "all"
    },
    t.options = {
        group: t.ALL_ITEMS,
        speed: 250,
        easing: "cubic-bezier(0.4, 0.0, 0.2, 1)",
        itemSelector: "*",
        sizer: null,
        gutterWidth: 0,
        columnWidth: 0,
        delimeter: null,
        buffer: 0,
        columnThreshold: .01,
        initialSort: null,
        throttle: function(n, t) {
            function f() {
                u = 0;
                o = +new Date;
                e = n.apply(i, r);
                i = null;
                r = null
            }
            var i, r, e, u, o = 0;
            return function() {
                i = this;
                r = arguments;
                var n = new Date - o;
                return u || (n >= t ? f() : u = setTimeout(f, t - n)),
                e
            }
        },
        throttleTime: 300,
        staggerAmount: 15,
        staggerAmountMax: 150,
        useTransforms: !0,
        filterMode: t.FilterMode.ANY,
        isCentered: !1
    },
    t.Point = e,
    t.Rect = o,
    t.__sorter = c,
    t.__getColumnSpan = d,
    t.__getAvailablePositions = g,
    t.__getShortColumn = nt,
    t.__getCenteredPositions = tt,
    t
}),
function() {
    App.Product._page = {
        scope: ".js-product",
        filterContainer: ".js-panel-filter",
        gamesContainer: ".js-gamesContainer",
        gamesContainerEmpty: ".js-gameContainer-empty",
        sizer: ".js-sizer-element",
        template: ".js-product-template",
        datas: {
            gameGroup: ".js-data-gameGroup",
            gameCount: ".js-data-gameCount",
            gameTotalCount: ".js-data-gameTotalCount",
            game: ".js-data-game",
            gameName: ".js-data-gameName",
            gameImage: ".js-data-gameImage",
            realPlay: ".js-data-realPlay",
            demoPlay: ".js-data-demoPlay",
            favourite: ".js-data-favorite"
        },
        filters: {
            provider: "#filter-provider",
            category: "#filter-category",
            name: ".filter-name"
        },
        controls: {
            showMore: ".js-control-showMore",
            searchMyFavouriteGames: ".js-control-searchMyFavouriteGame",
            searchName: ".js-control-searchName",
            searchNameClear: ".js-control-searchName-clear",
            searchNameButton: ".js-control-searchName-button",
            filterProvider: ".js-control-filterProvider",
            filterCategory: ".js-control-filterCategory",
            filterCategoryClear: ".js-control-filterCategory-clear",
            gameCard: ".card-game",
            gameAction: ".card-actions",
            filterAll: "label.filter-all",
            filterCustom: "label.filtered",
            loadMore: ".js-control-loadmore"
        }
    }
}();
var allGames = []
  , filteredGames = []
  , favouriteGameIDs = []
  , currentPage = 1
  , hasMoreGame = !0;
const DEFAULT_PAGE_SIZE = 24;
(function() {
    function t() {
        return App.Member.isLoggedIn() ? $.get("/product/game.svc?action=getMemberFavouriteGames").then(FLX.Ajax.validateServiceResponse).done(function(n) {
            favouriteGameIDs = n.data || []
        }) : $.Deferred().resolve().promise()
    }
    function r(t, i) {
        if (!App.Member.isLoggedIn())
            return FLX.Error.accessDenied();
        if (t.length) {
            var r = t.hasClass("active") ? "removeMemberFavouriteGame" : "addMemberFavouriteGame";
            $.post("/product/game.svc?action=" + r, {
                game: i
            }).then(FLX.Ajax.validateServiceResponse).done(function(n) {
                n.success && (favouriteGameIDs = n.data || [])
            })
        }
        favouriteGameIDs.includes(i) ? favouriteGameIDs = favouriteGameIDs.filter(function(n) {
            return n !== i
        }) : favouriteGameIDs.push(i);
        $(n.controls.searchMyFavouriteGames).hasClass(FLX.Plugins.Activation.activeClass) ? App.Product.Filter.updateview() : t.hasClass("active") ? t.removeClass("active") : t.addClass("active")
    }
    var n = App.Product._page
      , i = function(i) {
        FLX.Page.loading();
        var r = "";
        switch (i) {
        case "Rng":
            r = "getSlotGames";
            break;
        case "LiveDealer":
            r = "getLiveDealerGames"
        }
        $.post("/product/game.svc?action=" + r).then(FLX.Ajax.validateServiceResponse).then(function(n) {
            var r = n.data;
            r !== undefined && r !== null && (App.Product._page.$gameGroup = i,
            $(r).each(function(n, t) {
                var i = [];
                $(t.categoryIDs).each(function(n, t) {
                    t !== null && i.push("cat-" + t)
                });
                t.categoryIDs = i
            }),
            allGames = r,
            filteredGames = allGames,
            t().always(function() {
                App.Product.Game.loadGame(!0)
            }))
        }).done(function() {
            var i = new URLSearchParams(window.location.search)
              , t = i.get("provider");
            t && $(n.filterContainer).find("[data-provider='" + t.toUpperCase() + "']").click()
        }).always(function() {
            FLX.Page.loadingDismiss()
        })
    };
    App.Product.GetGames = i;
    App.Product.GetMemberFavouriteGames = t;
    App.Product.AddOrUpdateMemberFavouriteGames = r
}
)(),
function() {
    function t(n, t) {
        return function() {
            App.Product._page.$gameGroup === "Rng" ? App.Product.launchSlot(n, t) : App.Product.launchCasino(n, t)
        }
    }
    function i(n, t) {
        return function() {
            App.Product._page.$gameGroup === "Rng" ? App.Product.launchSlot(n, t, !0) : App.Product.launchCasino(n, t, !0)
        }
    }
    function r(n, t) {
        return function() {
            App.Product.AddOrUpdateMemberFavouriteGames(n, t)
        }
    }
    var n = App.Product._page
      , u = {
        loadGame: function(t) {
            var i, r;
            t === !0 ? ($(n.gamesContainer).empty(),
            currentPage = 1,
            hasMoreGame = !0) : currentPage++;
            i = 0;
            totalFilteredGames = filteredGames.length;
            currentPage * DEFAULT_PAGE_SIZE >= totalFilteredGames ? ($(n.controls.loadMore, n.scope).hide(),
            hasMoreGame = !1,
            i = currentPage * DEFAULT_PAGE_SIZE - totalFilteredGames) : $(n.controls.loadMore, n.scope).show();
            r = filteredGames.slice((currentPage - 1) * DEFAULT_PAGE_SIZE, currentPage * DEFAULT_PAGE_SIZE - i);
            this._populate(r)
        },
        _populate: function(u) {
            var o, e, f;
            if (u.length) {
                for (o = [],
                a = 0; a < u.length; a++) {
                    if (e = u[a],
                    f = $(n.template).clone().removeClass("js-product-template").removeClass("hide").addClass("js-data-game"),
                    f.attr("data-provider", e.providerCode),
                    f.attr("data-game", e.gameID),
                    f.attr("data-category", JSON.stringify(e.categoryIDs)),
                    $(n.datas.gameName, f).text(e.displayName),
                    $(n.datas.gameImage, f).attr("data-src", e.imagePath),
                    favouriteGameIDs.length)
                        for (b = 0; b < favouriteGameIDs.length; b++)
                            e.gameID === favouriteGameIDs[b] && ($(n.datas.favourite, f).addClass("active"),
                            f.attr("data-favourite", !0));
                    $(n.controls.gameCard, f).click(function() {
                        whatInput.ask() === "touch" && ($(n.controls.gameAction).hide(),
                        $(n.controls.gameCard).removeClass("focus"),
                        $(this).addClass("focus"),
                        $(this).children(n.controls.gameAction).show())
                    });
                    $(n.datas.favourite, f).click(r($(n.datas.favourite, f), e.gameID));
                    $(n.datas.realPlay, f).click(t(e.providerCode, e.gameID));
                    e.isDemoAvailable ? $(n.datas.demoPlay, f).click(i(e.providerCode, e.gameID)) : $(n.datas.demoPlay, f).remove();
                    o.push(f[0])
                }
                $(n.gamesContainer).append(o);
                $(n.datas.gameImage, n.gamesContainer).lazy();
                $(n.gamesContainerEmpty).addClass("hide")
            } else
                $(n.gamesContainerEmpty).removeClass("hide")
        }
    };
    App.Product.Game = u
}(),
function() {
    var u = App.Product._page
      , t = []
      , n = []
      , r = !1
      , i = {
        $search_Input: "",
        filterProvider: function(n, i) {
            var r = $.inArray(n, t)
              , u = r !== -1;
            i ? u ? t.splice(r, 1) : t.push(n) : t = u ? [] : [n];
            this.updateview()
        },
        filterCategory: function(t, i) {
            var r = $.inArray(t, n)
              , u = r !== -1;
            i ? u ? n.splice(r, 1) : n.push(t) : n = u ? [] : [t];
            this.updateview()
        },
        filterMemberFavourite: function() {
            r = !0;
            this.updateview()
        },
        clearCategoryFilter: function() {
            n = [];
            this.updateview()
        },
        clearMemberFavouriteFilter: function() {
            r = !1;
            this.updateview()
        },
        search_init: function() {
            var n = document.querySelector(u.controls.searchName);
            n.addEventListener("keyup", this._handleSearchKeyup.bind(this))
        },
        clearSearchName: function() {
            i.$search_Input = "";
            this.updateview()
        },
        _handleSearchKeyup: function(n) {
            i.$search_Input = n.target.value.toLowerCase();
            this.updateview()
        },
        updateview: function() {
            filteredGames = allGames;
            t.length && (filteredGames = filteredGames.filter(function(n) {
                return t.indexOf(n.providerCode) >= 0
            }));
            n.length && (filteredGames = filteredGames.filter(function(t) {
                return t.categoryIDs.some(function(t) {
                    return n.indexOf(t) !== -1
                })
            }));
            i.$search_Input && (filteredGames = filteredGames.filter(function(n) {
                return n.displayName.toLowerCase().trim().indexOf(i.$search_Input) !== -1
            }));
            r === !0 && (filteredGames = filteredGames.filter(n => favouriteGameIDs.includes(n.gameID)));
            App.Product.Game.loadGame(!0)
        }
    };
    App.Product.Filter = i
}(),
function() {
    var n = new Swiper("#filter-provider-swiper",{
        loop: !1,
        slidesPerView: "auto",
        freeMode: !0,
        freeModeSticky: !0,
        preventClicks: !1,
        nextButton: "#filter-provider-next",
        prevButton: "#filter-provider-prev"
    });
    $(window).resize(function() {
        n.update(!0)
    })
}(),
function() {
    var n = App.Product._page
      , t = !1
      , i = !1;
    $(n.controls.filterProvider).click(function() {
        var i = $(this);
        t ? i.toggleClass(FLX.Plugins.Activation.activeClass) : i.hasClass("is-active") ? i.removeClass("is-active") : ($(n.controls.filterProvider).removeClass("is-active"),
        i.toggleClass(FLX.Plugins.Activation.activeClass));
        App.Product.Filter.filterProvider(i.data("provider"), t)
    });
    $(n.controls.filterCategory).click(function() {
        var t = $(this), r;
        i ? t.toggleClass(FLX.Plugins.Activation.activeClass) : t.hasClass("is-active") ? t.removeClass("is-active") : ($(n.controls.filterCategory).removeClass("is-active"),
        t.toggleClass(FLX.Plugins.Activation.activeClass));
        App.Product.Filter.filterCategory(t.data("category"), i);
        $(n.controls.filterCategory).length && (r = $(n.controls.filterCategory).hasClass(FLX.Plugins.Activation.activeClass),
        r ? $(n.controls.filterCategoryClear).removeClass(FLX.Plugins.Activation.activeClass) : $(n.controls.filterCategoryClear).addClass(FLX.Plugins.Activation.activeClass))
    });
    $(n.controls.filterCategoryClear).length && $(n.controls.filterCategoryClear).click(function() {
        var t = $(this);
        if (t.hasClass("is-active")) {
            $(n.controls.filterCategory).removeClass("is-active");
            return
        }
        t.toggleClass(FLX.Plugins.Activation.activeClass);
        $(n.controls.filterCategory).removeClass("is-active");
        App.Product.Filter.clearCategoryFilter()
    });
    $(n.controls.searchName).keypress(function(n) {
        n.which === 13 && (this.blur(),
        n.preventDefault())
    });
    $(n.controls.searchMyFavouriteGames).click(function() {
        var n = $(this);
        n.hasClass(FLX.Plugins.Activation.activeClass) ? (n.removeClass(FLX.Plugins.Activation.activeClass),
        App.Product.Filter.clearMemberFavouriteFilter()) : (n.toggleClass(FLX.Plugins.Activation.activeClass),
        App.Product.Filter.filterMemberFavourite())
    });
    $(n.controls.loadMore, n.scope).click(function() {
        App.Product.Game.loadGame()
    });
    $(n.controls.searchNameButton, n.filters.name).click(function() {
        $(n.filters.name).addClass("is-focus");
        $(n.controls.searchName, n.filters.name).focus()
    });
    $(n.controls.searchName, n.filters.name).blur(function() {
        if (this.value)
            return !1;
        $(n.filters.name).removeClass("is-focus")
    });
    $(n.controls.searchName, n.filters.name).change(function() {
        this.value ? $(n.filters.name).addClass("has-value") : $(n.filters.name).removeClass("has-value")
    });
    $(n.controls.searchNameClear, n.filters.name).click(function() {
        $(n.controls.searchName, n.filters.name).val("").change().blur();
        App.Product.Filter.clearSearchName()
    });
    $(document).ready(function() {
        App.Product.Filter.search_init();
        var t = $(n.gamesContainer, n.scope);
        $(window).on("scroll", function() {
            $(window).scrollTop() >= t.offset().top + t.outerHeight() - window.innerHeight && hasMoreGame === !0 && App.Product.Game.loadGame()
        })
    })
}()
