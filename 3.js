/* Minification failed. Returning unminified contents.
(1830,6): run-time error JS1004: Expected ';'
(1832,31): run-time error JS1004: Expected ';'
 */
/*! jQuery v2.2.4 | (c) jQuery Foundation | jquery.org/license */
!function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document)
            throw new Error("jQuery requires a window with a document");
        return b(a)
    }
    : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
    var c = []
      , d = a.document
      , e = c.slice
      , f = c.concat
      , g = c.push
      , h = c.indexOf
      , i = {}
      , j = i.toString
      , k = i.hasOwnProperty
      , l = {}
      , m = "2.2.4"
      , n = function(a, b) {
        return new n.fn.init(a,b)
    }
      , o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
      , p = /^-ms-/
      , q = /-([\da-z])/gi
      , r = function(a, b) {
        return b.toUpperCase()
    };
    n.fn = n.prototype = {
        jquery: m,
        constructor: n,
        selector: "",
        length: 0,
        toArray: function() {
            return e.call(this)
        },
        get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : e.call(this)
        },
        pushStack: function(a) {
            var b = n.merge(this.constructor(), a);
            return b.prevObject = this,
            b.context = this.context,
            b
        },
        each: function(a) {
            return n.each(this, a)
        },
        map: function(a) {
            return this.pushStack(n.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function() {
            return this.pushStack(e.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var b = this.length
              , c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: g,
        sort: c.sort,
        splice: c.splice
    },
    n.extend = n.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1;
        for ("boolean" == typeof g && (j = g,
        g = arguments[h] || {},
        h++),
        "object" == typeof g || n.isFunction(g) || (g = {}),
        h === i && (g = this,
        h--); i > h; h++)
            if (null != (a = arguments[h]))
                for (b in a)
                    c = g[b],
                    d = a[b],
                    g !== d && (j && d && (n.isPlainObject(d) || (e = n.isArray(d))) ? (e ? (e = !1,
                    f = c && n.isArray(c) ? c : []) : f = c && n.isPlainObject(c) ? c : {},
                    g[b] = n.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        return g
    }
    ,
    n.extend({
        expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a)
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === n.type(a)
        },
        isArray: Array.isArray,
        isWindow: function(a) {
            return null != a && a === a.window
        },
        isNumeric: function(a) {
            var b = a && a.toString();
            return !n.isArray(a) && b - parseFloat(b) + 1 >= 0
        },
        isPlainObject: function(a) {
            var b;
            if ("object" !== n.type(a) || a.nodeType || n.isWindow(a))
                return !1;
            if (a.constructor && !k.call(a, "constructor") && !k.call(a.constructor.prototype || {}, "isPrototypeOf"))
                return !1;
            for (b in a)
                ;
            return void 0 === b || k.call(a, b)
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a)
                return !1;
            return !0
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? i[j.call(a)] || "object" : typeof a
        },
        globalEval: function(a) {
            var b, c = eval;
            a = n.trim(a),
            a && (1 === a.indexOf("use strict") ? (b = d.createElement("script"),
            b.text = a,
            d.head.appendChild(b).parentNode.removeChild(b)) : c(a))
        },
        camelCase: function(a) {
            return a.replace(p, "ms-").replace(q, r)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, b) {
            var c, d = 0;
            if (s(a)) {
                for (c = a.length; c > d; d++)
                    if (b.call(a[d], d, a[d]) === !1)
                        break
            } else
                for (d in a)
                    if (b.call(a[d], d, a[d]) === !1)
                        break;
            return a
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(o, "")
        },
        makeArray: function(a, b) {
            var c = b || [];
            return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : g.call(c, a)),
            c
        },
        inArray: function(a, b, c) {
            return null == b ? -1 : h.call(b, a, c)
        },
        merge: function(a, b) {
            for (var c = +b.length, d = 0, e = a.length; c > d; d++)
                a[e++] = b[d];
            return a.length = e,
            a
        },
        grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++)
                d = !b(a[f], f),
                d !== h && e.push(a[f]);
            return e
        },
        map: function(a, b, c) {
            var d, e, g = 0, h = [];
            if (s(a))
                for (d = a.length; d > g; g++)
                    e = b(a[g], g, c),
                    null != e && h.push(e);
            else
                for (g in a)
                    e = b(a[g], g, c),
                    null != e && h.push(e);
            return f.apply([], h)
        },
        guid: 1,
        proxy: function(a, b) {
            var c, d, f;
            return "string" == typeof b && (c = a[b],
            b = a,
            a = c),
            n.isFunction(a) ? (d = e.call(arguments, 2),
            f = function() {
                return a.apply(b || this, d.concat(e.call(arguments)))
            }
            ,
            f.guid = a.guid = a.guid || n.guid++,
            f) : void 0
        },
        now: Date.now,
        support: l
    }),
    "function" == typeof Symbol && (n.fn[Symbol.iterator] = c[Symbol.iterator]),
    n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(a, b) {
        i["[object " + b + "]"] = b.toLowerCase()
    });
    function s(a) {
        var b = !!a && "length"in a && a.length
          , c = n.type(a);
        return "function" === c || n.isWindow(a) ? !1 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }
    var t = function(a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date, v = a.document, w = 0, x = 0, y = ga(), z = ga(), A = ga(), B = function(a, b) {
            return a === b && (l = !0),
            0
        }, C = 1 << 31, D = {}.hasOwnProperty, E = [], F = E.pop, G = E.push, H = E.push, I = E.slice, J = function(a, b) {
            for (var c = 0, d = a.length; d > c; c++)
                if (a[c] === b)
                    return c;
            return -1
        }, K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", L = "[\\x20\\t\\r\\n\\f]", M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", N = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + L + "*\\]", O = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + N + ")*)|.*)\\)|)", P = new RegExp(L + "+","g"), Q = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$","g"), R = new RegExp("^" + L + "*," + L + "*"), S = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"), T = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]","g"), U = new RegExp(O), V = new RegExp("^" + M + "$"), W = {
            ID: new RegExp("^#(" + M + ")"),
            CLASS: new RegExp("^\\.(" + M + ")"),
            TAG: new RegExp("^(" + M + "|[*])"),
            ATTR: new RegExp("^" + N),
            PSEUDO: new RegExp("^" + O),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)","i"),
            bool: new RegExp("^(?:" + K + ")$","i"),
            needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)","i")
        }, X = /^(?:input|select|textarea|button)$/i, Y = /^h\d$/i, Z = /^[^{]+\{\s*\[native \w/, $ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, _ = /[+~]/, aa = /'|\\/g, ba = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)","ig"), ca = function(a, b, c) {
            var d = "0x" + b - 65536;
            return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
        }, da = function() {
            m()
        };
        try {
            H.apply(E = I.call(v.childNodes), v.childNodes),
            E[v.childNodes.length].nodeType
        } catch (ea) {
            H = {
                apply: E.length ? function(a, b) {
                    G.apply(a, I.call(b))
                }
                : function(a, b) {
                    var c = a.length
                      , d = 0;
                    while (a[c++] = b[d++])
                        ;
                    a.length = c - 1
                }
            }
        }
        function fa(a, b, d, e) {
            var f, h, j, k, l, o, r, s, w = b && b.ownerDocument, x = b ? b.nodeType : 9;
            if (d = d || [],
            "string" != typeof a || !a || 1 !== x && 9 !== x && 11 !== x)
                return d;
            if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b),
            b = b || n,
            p)) {
                if (11 !== x && (o = $.exec(a)))
                    if (f = o[1]) {
                        if (9 === x) {
                            if (!(j = b.getElementById(f)))
                                return d;
                            if (j.id === f)
                                return d.push(j),
                                d
                        } else if (w && (j = w.getElementById(f)) && t(b, j) && j.id === f)
                            return d.push(j),
                            d
                    } else {
                        if (o[2])
                            return H.apply(d, b.getElementsByTagName(a)),
                            d;
                        if ((f = o[3]) && c.getElementsByClassName && b.getElementsByClassName)
                            return H.apply(d, b.getElementsByClassName(f)),
                            d
                    }
                if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
                    if (1 !== x)
                        w = b,
                        s = a;
                    else if ("object" !== b.nodeName.toLowerCase()) {
                        (k = b.getAttribute("id")) ? k = k.replace(aa, "\\$&") : b.setAttribute("id", k = u),
                        r = g(a),
                        h = r.length,
                        l = V.test(k) ? "#" + k : "[id='" + k + "']";
                        while (h--)
                            r[h] = l + " " + qa(r[h]);
                        s = r.join(","),
                        w = _.test(a) && oa(b.parentNode) || b
                    }
                    if (s)
                        try {
                            return H.apply(d, w.querySelectorAll(s)),
                            d
                        } catch (y) {} finally {
                            k === u && b.removeAttribute("id")
                        }
                }
            }
            return i(a.replace(Q, "$1"), b, d, e)
        }
        function ga() {
            var a = [];
            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()],
                b[c + " "] = e
            }
            return b
        }
        function ha(a) {
            return a[u] = !0,
            a
        }
        function ia(a) {
            var b = n.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b),
                b = null
            }
        }
        function ja(a, b) {
            var c = a.split("|")
              , e = c.length;
            while (e--)
                d.attrHandle[c[e]] = b
        }
        function ka(a, b) {
            var c = b && a
              , d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
            if (d)
                return d;
            if (c)
                while (c = c.nextSibling)
                    if (c === b)
                        return -1;
            return a ? 1 : -1
        }
        function la(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }
        function ma(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }
        function na(a) {
            return ha(function(b) {
                return b = +b,
                ha(function(c, d) {
                    var e, f = a([], c.length, b), g = f.length;
                    while (g--)
                        c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }
        function oa(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a
        }
        c = fa.support = {},
        f = fa.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }
        ,
        m = fa.setDocument = function(a) {
            var b, e, g = a ? a.ownerDocument || a : v;
            return g !== n && 9 === g.nodeType && g.documentElement ? (n = g,
            o = n.documentElement,
            p = !f(n),
            (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)),
            c.attributes = ia(function(a) {
                return a.className = "i",
                !a.getAttribute("className")
            }),
            c.getElementsByTagName = ia(function(a) {
                return a.appendChild(n.createComment("")),
                !a.getElementsByTagName("*").length
            }),
            c.getElementsByClassName = Z.test(n.getElementsByClassName),
            c.getById = ia(function(a) {
                return o.appendChild(a).id = u,
                !n.getElementsByName || !n.getElementsByName(u).length
            }),
            c.getById ? (d.find.ID = function(a, b) {
                if ("undefined" != typeof b.getElementById && p) {
                    var c = b.getElementById(a);
                    return c ? [c] : []
                }
            }
            ,
            d.filter.ID = function(a) {
                var b = a.replace(ba, ca);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }
            ) : (delete d.find.ID,
            d.filter.ID = function(a) {
                var b = a.replace(ba, ca);
                return function(a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }
            ),
            d.find.TAG = c.getElementsByTagName ? function(a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
            }
            : function(a, b) {
                var c, d = [], e = 0, f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while (c = f[e++])
                        1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }
            ,
            d.find.CLASS = c.getElementsByClassName && function(a, b) {
                return "undefined" != typeof b.getElementsByClassName && p ? b.getElementsByClassName(a) : void 0
            }
            ,
            r = [],
            q = [],
            (c.qsa = Z.test(n.querySelectorAll)) && (ia(function(a) {
                o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"),
                a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"),
                a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="),
                a.querySelectorAll(":checked").length || q.push(":checked"),
                a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
            }),
            ia(function(a) {
                var b = n.createElement("input");
                b.setAttribute("type", "hidden"),
                a.appendChild(b).setAttribute("name", "D"),
                a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="),
                a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"),
                a.querySelectorAll("*,:x"),
                q.push(",.*:")
            })),
            (c.matchesSelector = Z.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ia(function(a) {
                c.disconnectedMatch = s.call(a, "div"),
                s.call(a, "[s!='']:x"),
                r.push("!=", O)
            }),
            q = q.length && new RegExp(q.join("|")),
            r = r.length && new RegExp(r.join("|")),
            b = Z.test(o.compareDocumentPosition),
            t = b || Z.test(o.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a
                  , d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            }
            : function(a, b) {
                if (b)
                    while (b = b.parentNode)
                        if (b === a)
                            return !0;
                return !1
            }
            ,
            B = b ? function(a, b) {
                if (a === b)
                    return l = !0,
                    0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1,
                1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1)
            }
            : function(a, b) {
                if (a === b)
                    return l = !0,
                    0;
                var c, d = 0, e = a.parentNode, f = b.parentNode, g = [a], h = [b];
                if (!e || !f)
                    return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
                if (e === f)
                    return ka(a, b);
                c = a;
                while (c = c.parentNode)
                    g.unshift(c);
                c = b;
                while (c = c.parentNode)
                    h.unshift(c);
                while (g[d] === h[d])
                    d++;
                return d ? ka(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0
            }
            ,
            n) : n
        }
        ,
        fa.matches = function(a, b) {
            return fa(a, null, null, b)
        }
        ,
        fa.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== n && m(a),
            b = b.replace(T, "='$1']"),
            c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b)))
                try {
                    var d = s.call(a, b);
                    if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType)
                        return d
                } catch (e) {}
            return fa(b, n, null, [a]).length > 0
        }
        ,
        fa.contains = function(a, b) {
            return (a.ownerDocument || a) !== n && m(a),
            t(a, b)
        }
        ,
        fa.attr = function(a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()]
              , f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
        }
        ,
        fa.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }
        ,
        fa.uniqueSort = function(a) {
            var b, d = [], e = 0, f = 0;
            if (l = !c.detectDuplicates,
            k = !c.sortStable && a.slice(0),
            a.sort(B),
            l) {
                while (b = a[f++])
                    b === a[f] && (e = d.push(f));
                while (e--)
                    a.splice(d[e], 1)
            }
            return k = null,
            a
        }
        ,
        e = fa.getText = function(a) {
            var b, c = "", d = 0, f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent)
                        return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling)
                        c += e(a)
                } else if (3 === f || 4 === f)
                    return a.nodeValue
            } else
                while (b = a[d++])
                    c += e(b);
            return c
        }
        ,
        d = fa.selectors = {
            cacheLength: 50,
            createPseudo: ha,
            match: W,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(ba, ca),
                    a[3] = (a[3] || a[4] || a[5] || "").replace(ba, ca),
                    "~=" === a[2] && (a[3] = " " + a[3] + " "),
                    a.slice(0, 4)
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(),
                    "nth" === a[1].slice(0, 3) ? (a[3] || fa.error(a[0]),
                    a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])),
                    a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && fa.error(a[0]),
                    a
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    return W.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && U.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b),
                    a[2] = c.slice(0, b)),
                    a.slice(0, 3))
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(ba, ca).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    }
                    : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = y[a + " "];
                    return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                    })
                },
                ATTR: function(a, b, c) {
                    return function(d) {
                        var e = fa.attr(d, a);
                        return null == e ? "!=" === b : b ? (e += "",
                        "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(P, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
                    }
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3)
                      , g = "last" !== a.slice(-4)
                      , h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode
                    }
                    : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h, t = !1;
                        if (q) {
                            if (f) {
                                while (p) {
                                    m = b;
                                    while (m = m[p])
                                        if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType)
                                            return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild],
                            g && s) {
                                m = q,
                                l = m[u] || (m[u] = {}),
                                k = l[m.uniqueID] || (l[m.uniqueID] = {}),
                                j = k[a] || [],
                                n = j[0] === w && j[1],
                                t = n && j[2],
                                m = n && q.childNodes[n];
                                while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                                    if (1 === m.nodeType && ++t && m === b) {
                                        k[a] = [w, n, t];
                                        break
                                    }
                            } else if (s && (m = b,
                            l = m[u] || (m[u] = {}),
                            k = l[m.uniqueID] || (l[m.uniqueID] = {}),
                            j = k[a] || [],
                            n = j[0] === w && j[1],
                            t = n),
                            t === !1)
                                while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                                    if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}),
                                    k = l[m.uniqueID] || (l[m.uniqueID] = {}),
                                    k[a] = [w, t]),
                                    m === b))
                                        break;
                            return t -= e,
                            t === d || t % d === 0 && t / d >= 0
                        }
                    }
                },
                PSEUDO: function(a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fa.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b],
                    d.setFilters.hasOwnProperty(a.toLowerCase()) ? ha(function(a, c) {
                        var d, f = e(a, b), g = f.length;
                        while (g--)
                            d = J(a, f[g]),
                            a[d] = !(c[d] = f[g])
                    }) : function(a) {
                        return e(a, 0, c)
                    }
                    ) : e
                }
            },
            pseudos: {
                not: ha(function(a) {
                    var b = []
                      , c = []
                      , d = h(a.replace(Q, "$1"));
                    return d[u] ? ha(function(a, b, c, e) {
                        var f, g = d(a, null, e, []), h = a.length;
                        while (h--)
                            (f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function(a, e, f) {
                        return b[0] = a,
                        d(b, null, f, c),
                        b[0] = null,
                        !c.pop()
                    }
                }),
                has: ha(function(a) {
                    return function(b) {
                        return fa(a, b).length > 0
                    }
                }),
                contains: ha(function(a) {
                    return a = a.replace(ba, ca),
                    function(b) {
                        return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                    }
                }),
                lang: ha(function(a) {
                    return V.test(a || "") || fa.error("unsupported lang: " + a),
                    a = a.replace(ba, ca).toLowerCase(),
                    function(b) {
                        var c;
                        do
                            if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang"))
                                return c = c.toLowerCase(),
                                c === a || 0 === c.indexOf(a + "-");
                        while ((b = b.parentNode) && 1 === b.nodeType);
                        return !1
                    }
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function(a) {
                    return a === o
                },
                focus: function(a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: function(a) {
                    return a.disabled === !1
                },
                disabled: function(a) {
                    return a.disabled === !0
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex,
                    a.selected === !0
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(a) {
                    return !d.pseudos.empty(a)
                },
                header: function(a) {
                    return Y.test(a.nodeName)
                },
                input: function(a) {
                    return X.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: na(function() {
                    return [0]
                }),
                last: na(function(a, b) {
                    return [b - 1]
                }),
                eq: na(function(a, b, c) {
                    return [0 > c ? c + b : c]
                }),
                even: na(function(a, b) {
                    for (var c = 0; b > c; c += 2)
                        a.push(c);
                    return a
                }),
                odd: na(function(a, b) {
                    for (var c = 1; b > c; c += 2)
                        a.push(c);
                    return a
                }),
                lt: na(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0; )
                        a.push(d);
                    return a
                }),
                gt: na(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b; )
                        a.push(d);
                    return a
                })
            }
        },
        d.pseudos.nth = d.pseudos.eq;
        for (b in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            d.pseudos[b] = la(b);
        for (b in {
            submit: !0,
            reset: !0
        })
            d.pseudos[b] = ma(b);
        function pa() {}
        pa.prototype = d.filters = d.pseudos,
        d.setFilters = new pa,
        g = fa.tokenize = function(a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k)
                return b ? 0 : k.slice(0);
            h = a,
            i = [],
            j = d.preFilter;
            while (h) {
                c && !(e = R.exec(h)) || (e && (h = h.slice(e[0].length) || h),
                i.push(f = [])),
                c = !1,
                (e = S.exec(h)) && (c = e.shift(),
                f.push({
                    value: c,
                    type: e[0].replace(Q, " ")
                }),
                h = h.slice(c.length));
                for (g in d.filter)
                    !(e = W[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(),
                    f.push({
                        value: c,
                        type: g,
                        matches: e
                    }),
                    h = h.slice(c.length));
                if (!c)
                    break
            }
            return b ? h.length : h ? fa.error(a) : z(a, i).slice(0)
        }
        ;
        function qa(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++)
                d += a[b].value;
            return d
        }
        function ra(a, b, c) {
            var d = b.dir
              , e = c && "parentNode" === d
              , f = x++;
            return b.first ? function(b, c, f) {
                while (b = b[d])
                    if (1 === b.nodeType || e)
                        return a(b, c, f)
            }
            : function(b, c, g) {
                var h, i, j, k = [w, f];
                if (g) {
                    while (b = b[d])
                        if ((1 === b.nodeType || e) && a(b, c, g))
                            return !0
                } else
                    while (b = b[d])
                        if (1 === b.nodeType || e) {
                            if (j = b[u] || (b[u] = {}),
                            i = j[b.uniqueID] || (j[b.uniqueID] = {}),
                            (h = i[d]) && h[0] === w && h[1] === f)
                                return k[2] = h[2];
                            if (i[d] = k,
                            k[2] = a(b, c, g))
                                return !0
                        }
            }
        }
        function sa(a) {
            return a.length > 1 ? function(b, c, d) {
                var e = a.length;
                while (e--)
                    if (!a[e](b, c, d))
                        return !1;
                return !0
            }
            : a[0]
        }
        function ta(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++)
                fa(a, b[d], c);
            return c
        }
        function ua(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)
                (f = a[h]) && (c && !c(f, d, e) || (g.push(f),
                j && b.push(h)));
            return g
        }
        function va(a, b, c, d, e, f) {
            return d && !d[u] && (d = va(d)),
            e && !e[u] && (e = va(e, f)),
            ha(function(f, g, h, i) {
                var j, k, l, m = [], n = [], o = g.length, p = f || ta(b || "*", h.nodeType ? [h] : h, []), q = !a || !f && b ? p : ua(p, m, a, h, i), r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i),
                d) {
                    j = ua(r, n),
                    d(j, [], h, i),
                    k = j.length;
                    while (k--)
                        (l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [],
                            k = r.length;
                            while (k--)
                                (l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i)
                        }
                        k = r.length;
                        while (k--)
                            (l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                    }
                } else
                    r = ua(r === g ? r.splice(o, r.length) : r),
                    e ? e(null, g, r, i) : H.apply(g, r)
            })
        }
        function wa(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ra(function(a) {
                return a === b
            }, h, !0), l = ra(function(a) {
                return J(b, a) > -1
            }, h, !0), m = [function(a, c, d) {
                var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                return b = null,
                e
            }
            ]; f > i; i++)
                if (c = d.relative[a[i].type])
                    m = [ra(sa(m), c)];
                else {
                    if (c = d.filter[a[i].type].apply(null, a[i].matches),
                    c[u]) {
                        for (e = ++i; f > e; e++)
                            if (d.relative[a[e].type])
                                break;
                        return va(i > 1 && sa(m), i > 1 && qa(a.slice(0, i - 1).concat({
                            value: " " === a[i - 2].type ? "*" : ""
                        })).replace(Q, "$1"), c, e > i && wa(a.slice(i, e)), f > e && wa(a = a.slice(e)), f > e && qa(a))
                    }
                    m.push(c)
                }
            return sa(m)
        }
        function xa(a, b) {
            var c = b.length > 0
              , e = a.length > 0
              , f = function(f, g, h, i, k) {
                var l, o, q, r = 0, s = "0", t = f && [], u = [], v = j, x = f || e && d.find.TAG("*", k), y = w += null == v ? 1 : Math.random() || .1, z = x.length;
                for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
                    if (e && l) {
                        o = 0,
                        g || l.ownerDocument === n || (m(l),
                        h = !p);
                        while (q = a[o++])
                            if (q(l, g || n, h)) {
                                i.push(l);
                                break
                            }
                        k && (w = y)
                    }
                    c && ((l = !q && l) && r--,
                    f && t.push(l))
                }
                if (r += s,
                c && s !== r) {
                    o = 0;
                    while (q = b[o++])
                        q(t, u, g, h);
                    if (f) {
                        if (r > 0)
                            while (s--)
                                t[s] || u[s] || (u[s] = F.call(i));
                        u = ua(u)
                    }
                    H.apply(i, u),
                    k && !f && u.length > 0 && r + b.length > 1 && fa.uniqueSort(i)
                }
                return k && (w = y,
                j = v),
                t
            };
            return c ? ha(f) : f
        }
        return h = fa.compile = function(a, b) {
            var c, d = [], e = [], f = A[a + " "];
            if (!f) {
                b || (b = g(a)),
                c = b.length;
                while (c--)
                    f = wa(b[c]),
                    f[u] ? d.push(f) : e.push(f);
                f = A(a, xa(e, d)),
                f.selector = a
            }
            return f
        }
        ,
        i = fa.select = function(a, b, e, f) {
            var i, j, k, l, m, n = "function" == typeof a && a, o = !f && g(a = n.selector || a);
            if (e = e || [],
            1 === o.length) {
                if (j = o[0] = o[0].slice(0),
                j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                    if (b = (d.find.ID(k.matches[0].replace(ba, ca), b) || [])[0],
                    !b)
                        return e;
                    n && (b = b.parentNode),
                    a = a.slice(j.shift().value.length)
                }
                i = W.needsContext.test(a) ? 0 : j.length;
                while (i--) {
                    if (k = j[i],
                    d.relative[l = k.type])
                        break;
                    if ((m = d.find[l]) && (f = m(k.matches[0].replace(ba, ca), _.test(j[0].type) && oa(b.parentNode) || b))) {
                        if (j.splice(i, 1),
                        a = f.length && qa(j),
                        !a)
                            return H.apply(e, f),
                            e;
                        break
                    }
                }
            }
            return (n || h(a, o))(f, b, !p, e, !b || _.test(a) && oa(b.parentNode) || b),
            e
        }
        ,
        c.sortStable = u.split("").sort(B).join("") === u,
        c.detectDuplicates = !!l,
        m(),
        c.sortDetached = ia(function(a) {
            return 1 & a.compareDocumentPosition(n.createElement("div"))
        }),
        ia(function(a) {
            return a.innerHTML = "<a href='#'></a>",
            "#" === a.firstChild.getAttribute("href")
        }) || ja("type|href|height|width", function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }),
        c.attributes && ia(function(a) {
            return a.innerHTML = "<input/>",
            a.firstChild.setAttribute("value", ""),
            "" === a.firstChild.getAttribute("value")
        }) || ja("value", function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }),
        ia(function(a) {
            return null == a.getAttribute("disabled")
        }) || ja(K, function(a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }),
        fa
    }(a);
    n.find = t,
    n.expr = t.selectors,
    n.expr[":"] = n.expr.pseudos,
    n.uniqueSort = n.unique = t.uniqueSort,
    n.text = t.getText,
    n.isXMLDoc = t.isXML,
    n.contains = t.contains;
    var u = function(a, b, c) {
        var d = []
          , e = void 0 !== c;
        while ((a = a[b]) && 9 !== a.nodeType)
            if (1 === a.nodeType) {
                if (e && n(a).is(c))
                    break;
                d.push(a)
            }
        return d
    }
      , v = function(a, b) {
        for (var c = []; a; a = a.nextSibling)
            1 === a.nodeType && a !== b && c.push(a);
        return c
    }
      , w = n.expr.match.needsContext
      , x = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/
      , y = /^.[^:#\[\.,]*$/;
    function z(a, b, c) {
        if (n.isFunction(b))
            return n.grep(a, function(a, d) {
                return !!b.call(a, d, a) !== c
            });
        if (b.nodeType)
            return n.grep(a, function(a) {
                return a === b !== c
            });
        if ("string" == typeof b) {
            if (y.test(b))
                return n.filter(b, a, c);
            b = n.filter(b, a)
        }
        return n.grep(a, function(a) {
            return h.call(b, a) > -1 !== c
        })
    }
    n.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"),
        1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function(a) {
            return 1 === a.nodeType
        }))
    }
    ,
    n.fn.extend({
        find: function(a) {
            var b, c = this.length, d = [], e = this;
            if ("string" != typeof a)
                return this.pushStack(n(a).filter(function() {
                    for (b = 0; c > b; b++)
                        if (n.contains(e[b], this))
                            return !0
                }));
            for (b = 0; c > b; b++)
                n.find(a, e[b], d);
            return d = this.pushStack(c > 1 ? n.unique(d) : d),
            d.selector = this.selector ? this.selector + " " + a : a,
            d
        },
        filter: function(a) {
            return this.pushStack(z(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack(z(this, a || [], !0))
        },
        is: function(a) {
            return !!z(this, "string" == typeof a && w.test(a) ? n(a) : a || [], !1).length
        }
    });
    var A, B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, C = n.fn.init = function(a, b, c) {
        var e, f;
        if (!a)
            return this;
        if (c = c || A,
        "string" == typeof a) {
            if (e = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : B.exec(a),
            !e || !e[1] && b)
                return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
            if (e[1]) {
                if (b = b instanceof n ? b[0] : b,
                n.merge(this, n.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)),
                x.test(e[1]) && n.isPlainObject(b))
                    for (e in b)
                        n.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
                return this
            }
            return f = d.getElementById(e[2]),
            f && f.parentNode && (this.length = 1,
            this[0] = f),
            this.context = d,
            this.selector = a,
            this
        }
        return a.nodeType ? (this.context = this[0] = a,
        this.length = 1,
        this) : n.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector,
        this.context = a.context),
        n.makeArray(a, this))
    }
    ;
    C.prototype = n.fn,
    A = n(d);
    var D = /^(?:parents|prev(?:Until|All))/
      , E = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    n.fn.extend({
        has: function(a) {
            var b = n(a, this)
              , c = b.length;
            return this.filter(function() {
                for (var a = 0; c > a; a++)
                    if (n.contains(this, b[a]))
                        return !0
            })
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = w.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
                        f.push(c);
                        break
                    }
            return this.pushStack(f.length > 1 ? n.uniqueSort(f) : f)
        },
        index: function(a) {
            return a ? "string" == typeof a ? h.call(n(a), this[0]) : h.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, b) {
            return this.pushStack(n.uniqueSort(n.merge(this.get(), n(a, b))))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });
    function F(a, b) {
        while ((a = a[b]) && 1 !== a.nodeType)
            ;
        return a
    }
    n.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function(a) {
            return u(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return u(a, "parentNode", c)
        },
        next: function(a) {
            return F(a, "nextSibling")
        },
        prev: function(a) {
            return F(a, "previousSibling")
        },
        nextAll: function(a) {
            return u(a, "nextSibling")
        },
        prevAll: function(a) {
            return u(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return u(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return u(a, "previousSibling", c)
        },
        siblings: function(a) {
            return v((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return v(a.firstChild)
        },
        contents: function(a) {
            return a.contentDocument || n.merge([], a.childNodes)
        }
    }, function(a, b) {
        n.fn[a] = function(c, d) {
            var e = n.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c),
            d && "string" == typeof d && (e = n.filter(d, e)),
            this.length > 1 && (E[a] || n.uniqueSort(e),
            D.test(a) && e.reverse()),
            this.pushStack(e)
        }
    });
    var G = /\S+/g;
    function H(a) {
        var b = {};
        return n.each(a.match(G) || [], function(a, c) {
            b[c] = !0
        }),
        b
    }
    n.Callbacks = function(a) {
        a = "string" == typeof a ? H(a) : n.extend({}, a);
        var b, c, d, e, f = [], g = [], h = -1, i = function() {
            for (e = a.once,
            d = b = !0; g.length; h = -1) {
                c = g.shift();
                while (++h < f.length)
                    f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length,
                    c = !1)
            }
            a.memory || (c = !1),
            b = !1,
            e && (f = c ? [] : "")
        }, j = {
            add: function() {
                return f && (c && !b && (h = f.length - 1,
                g.push(c)),
                function d(b) {
                    n.each(b, function(b, c) {
                        n.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== n.type(c) && d(c)
                    })
                }(arguments),
                c && !b && i()),
                this
            },
            remove: function() {
                return n.each(arguments, function(a, b) {
                    var c;
                    while ((c = n.inArray(b, f, c)) > -1)
                        f.splice(c, 1),
                        h >= c && h--
                }),
                this
            },
            has: function(a) {
                return a ? n.inArray(a, f) > -1 : f.length > 0
            },
            empty: function() {
                return f && (f = []),
                this
            },
            disable: function() {
                return e = g = [],
                f = c = "",
                this
            },
            disabled: function() {
                return !f
            },
            lock: function() {
                return e = g = [],
                c || (f = c = ""),
                this
            },
            locked: function() {
                return !!e
            },
            fireWith: function(a, c) {
                return e || (c = c || [],
                c = [a, c.slice ? c.slice() : c],
                g.push(c),
                b || i()),
                this
            },
            fire: function() {
                return j.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!d
            }
        };
        return j
    }
    ,
    n.extend({
        Deferred: function(a) {
            var b = [["resolve", "done", n.Callbacks("once memory"), "resolved"], ["reject", "fail", n.Callbacks("once memory"), "rejected"], ["notify", "progress", n.Callbacks("memory")]]
              , c = "pending"
              , d = {
                state: function() {
                    return c
                },
                always: function() {
                    return e.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var a = arguments;
                    return n.Deferred(function(c) {
                        n.each(b, function(b, f) {
                            var g = n.isFunction(a[b]) && a[b];
                            e[f[1]](function() {
                                var a = g && g.apply(this, arguments);
                                a && n.isFunction(a.promise) ? a.promise().progress(c.notify).done(c.resolve).fail(c.reject) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                            })
                        }),
                        a = null
                    }).promise()
                },
                promise: function(a) {
                    return null != a ? n.extend(a, d) : d
                }
            }
              , e = {};
            return d.pipe = d.then,
            n.each(b, function(a, f) {
                var g = f[2]
                  , h = f[3];
                d[f[1]] = g.add,
                h && g.add(function() {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock),
                e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments),
                    this
                }
                ,
                e[f[0] + "With"] = g.fireWith
            }),
            d.promise(e),
            a && a.call(e, e),
            e
        },
        when: function(a) {
            var b = 0, c = e.call(arguments), d = c.length, f = 1 !== d || a && n.isFunction(a.promise) ? d : 0, g = 1 === f ? a : n.Deferred(), h = function(a, b, c) {
                return function(d) {
                    b[a] = this,
                    c[a] = arguments.length > 1 ? e.call(arguments) : d,
                    c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
                }
            }, i, j, k;
            if (d > 1)
                for (i = new Array(d),
                j = new Array(d),
                k = new Array(d); d > b; b++)
                    c[b] && n.isFunction(c[b].promise) ? c[b].promise().progress(h(b, j, i)).done(h(b, k, c)).fail(g.reject) : --f;
            return f || g.resolveWith(k, c),
            g.promise()
        }
    });
    var I;
    n.fn.ready = function(a) {
        return n.ready.promise().done(a),
        this
    }
    ,
    n.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? n.readyWait++ : n.ready(!0)
        },
        ready: function(a) {
            (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0,
            a !== !0 && --n.readyWait > 0 || (I.resolveWith(d, [n]),
            n.fn.triggerHandler && (n(d).triggerHandler("ready"),
            n(d).off("ready"))))
        }
    });
    function J() {
        d.removeEventListener("DOMContentLoaded", J),
        a.removeEventListener("load", J),
        n.ready()
    }
    n.ready.promise = function(b) {
        return I || (I = n.Deferred(),
        "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll ? a.setTimeout(n.ready) : (d.addEventListener("DOMContentLoaded", J),
        a.addEventListener("load", J))),
        I.promise(b)
    }
    ,
    n.ready.promise();
    var K = function(a, b, c, d, e, f, g) {
        var h = 0
          , i = a.length
          , j = null == c;
        if ("object" === n.type(c)) {
            e = !0;
            for (h in c)
                K(a, b, h, c[h], !0, f, g)
        } else if (void 0 !== d && (e = !0,
        n.isFunction(d) || (g = !0),
        j && (g ? (b.call(a, d),
        b = null) : (j = b,
        b = function(a, b, c) {
            return j.call(n(a), c)
        }
        )),
        b))
            for (; i > h; h++)
                b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
    }
      , L = function(a) {
        return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
    };
    function M() {
        this.expando = n.expando + M.uid++
    }
    M.uid = 1,
    M.prototype = {
        register: function(a, b) {
            var c = b || {};
            return a.nodeType ? a[this.expando] = c : Object.defineProperty(a, this.expando, {
                value: c,
                writable: !0,
                configurable: !0
            }),
            a[this.expando]
        },
        cache: function(a) {
            if (!L(a))
                return {};
            var b = a[this.expando];
            return b || (b = {},
            L(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, {
                value: b,
                configurable: !0
            }))),
            b
        },
        set: function(a, b, c) {
            var d, e = this.cache(a);
            if ("string" == typeof b)
                e[b] = c;
            else
                for (d in b)
                    e[d] = b[d];
            return e
        },
        get: function(a, b) {
            return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][b]
        },
        access: function(a, b, c) {
            var d;
            return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b),
            void 0 !== d ? d : this.get(a, n.camelCase(b))) : (this.set(a, b, c),
            void 0 !== c ? c : b)
        },
        remove: function(a, b) {
            var c, d, e, f = a[this.expando];
            if (void 0 !== f) {
                if (void 0 === b)
                    this.register(a);
                else {
                    n.isArray(b) ? d = b.concat(b.map(n.camelCase)) : (e = n.camelCase(b),
                    b in f ? d = [b, e] : (d = e,
                    d = d in f ? [d] : d.match(G) || [])),
                    c = d.length;
                    while (c--)
                        delete f[d[c]]
                }
                (void 0 === b || n.isEmptyObject(f)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando])
            }
        },
        hasData: function(a) {
            var b = a[this.expando];
            return void 0 !== b && !n.isEmptyObject(b)
        }
    };
    var N = new M
      , O = new M
      , P = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , Q = /[A-Z]/g;
    function R(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType)
            if (d = "data-" + b.replace(Q, "-$&").toLowerCase(),
            c = a.getAttribute(d),
            "string" == typeof c) {
                try {
                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : P.test(c) ? n.parseJSON(c) : c;
                } catch (e) {}
                O.set(a, b, c)
            } else
                c = void 0;
        return c
    }
    n.extend({
        hasData: function(a) {
            return O.hasData(a) || N.hasData(a)
        },
        data: function(a, b, c) {
            return O.access(a, b, c)
        },
        removeData: function(a, b) {
            O.remove(a, b)
        },
        _data: function(a, b, c) {
            return N.access(a, b, c)
        },
        _removeData: function(a, b) {
            N.remove(a, b)
        }
    }),
    n.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0], g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = O.get(f),
                1 === f.nodeType && !N.get(f, "hasDataAttrs"))) {
                    c = g.length;
                    while (c--)
                        g[c] && (d = g[c].name,
                        0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)),
                        R(f, d, e[d])));
                    N.set(f, "hasDataAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function() {
                O.set(this, a)
            }) : K(this, function(b) {
                var c, d;
                if (f && void 0 === b) {
                    if (c = O.get(f, a) || O.get(f, a.replace(Q, "-$&").toLowerCase()),
                    void 0 !== c)
                        return c;
                    if (d = n.camelCase(a),
                    c = O.get(f, d),
                    void 0 !== c)
                        return c;
                    if (c = R(f, d, void 0),
                    void 0 !== c)
                        return c
                } else
                    d = n.camelCase(a),
                    this.each(function() {
                        var c = O.get(this, d);
                        O.set(this, d, b),
                        a.indexOf("-") > -1 && void 0 !== c && O.set(this, a, b)
                    })
            }, null, b, arguments.length > 1, null, !0)
        },
        removeData: function(a) {
            return this.each(function() {
                O.remove(this, a)
            })
        }
    }),
    n.extend({
        queue: function(a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue",
            d = N.get(a, b),
            c && (!d || n.isArray(c) ? d = N.access(a, b, n.makeArray(c)) : d.push(c)),
            d || []) : void 0
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = n.queue(a, b)
              , d = c.length
              , e = c.shift()
              , f = n._queueHooks(a, b)
              , g = function() {
                n.dequeue(a, b)
            };
            "inprogress" === e && (e = c.shift(),
            d--),
            e && ("fx" === b && c.unshift("inprogress"),
            delete f.stop,
            e.call(a, g, f)),
            !d && f && f.empty.fire()
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return N.get(a, c) || N.access(a, c, {
                empty: n.Callbacks("once memory").add(function() {
                    N.remove(a, [b + "queue", c])
                })
            })
        }
    }),
    n.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a,
            a = "fx",
            c--),
            arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = n.queue(this, a, b);
                n._queueHooks(this, a),
                "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                n.dequeue(this, a)
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, b) {
            var c, d = 1, e = n.Deferred(), f = this, g = this.length, h = function() {
                --d || e.resolveWith(f, [f])
            };
            "string" != typeof a && (b = a,
            a = void 0),
            a = a || "fx";
            while (g--)
                c = N.get(f[g], a + "queueHooks"),
                c && c.empty && (d++,
                c.empty.add(h));
            return h(),
            e.promise(b)
        }
    });
    var S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , T = new RegExp("^(?:([+-])=|)(" + S + ")([a-z%]*)$","i")
      , U = ["Top", "Right", "Bottom", "Left"]
      , V = function(a, b) {
        return a = b || a,
        "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
    };
    function W(a, b, c, d) {
        var e, f = 1, g = 20, h = d ? function() {
            return d.cur()
        }
        : function() {
            return n.css(a, b, "")
        }
        , i = h(), j = c && c[3] || (n.cssNumber[b] ? "" : "px"), k = (n.cssNumber[b] || "px" !== j && +i) && T.exec(n.css(a, b));
        if (k && k[3] !== j) {
            j = j || k[3],
            c = c || [],
            k = +i || 1;
            do
                f = f || ".5",
                k /= f,
                n.style(a, b, k + j);
            while (f !== (f = h() / i) && 1 !== f && --g)
        }
        return c && (k = +k || +i || 0,
        e = c[1] ? k + (c[1] + 1) * c[2] : +c[2],
        d && (d.unit = j,
        d.start = k,
        d.end = e)),
        e
    }
    var X = /^(?:checkbox|radio)$/i
      , Y = /<([\w:-]+)/
      , Z = /^$|\/(?:java|ecma)script/i
      , $ = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    $.optgroup = $.option,
    $.tbody = $.tfoot = $.colgroup = $.caption = $.thead,
    $.th = $.td;
    function _(a, b) {
        var c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
        return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], c) : c
    }
    function aa(a, b) {
        for (var c = 0, d = a.length; d > c; c++)
            N.set(a[c], "globalEval", !b || N.get(b[c], "globalEval"))
    }
    var ba = /<|&#?\w+;/;
    function ca(a, b, c, d, e) {
        for (var f, g, h, i, j, k, l = b.createDocumentFragment(), m = [], o = 0, p = a.length; p > o; o++)
            if (f = a[o],
            f || 0 === f)
                if ("object" === n.type(f))
                    n.merge(m, f.nodeType ? [f] : f);
                else if (ba.test(f)) {
                    g = g || l.appendChild(b.createElement("div")),
                    h = (Y.exec(f) || ["", ""])[1].toLowerCase(),
                    i = $[h] || $._default,
                    g.innerHTML = i[1] + n.htmlPrefilter(f) + i[2],
                    k = i[0];
                    while (k--)
                        g = g.lastChild;
                    n.merge(m, g.childNodes),
                    g = l.firstChild,
                    g.textContent = ""
                } else
                    m.push(b.createTextNode(f));
        l.textContent = "",
        o = 0;
        while (f = m[o++])
            if (d && n.inArray(f, d) > -1)
                e && e.push(f);
            else if (j = n.contains(f.ownerDocument, f),
            g = _(l.appendChild(f), "script"),
            j && aa(g),
            c) {
                k = 0;
                while (f = g[k++])
                    Z.test(f.type || "") && c.push(f)
            }
        return l
    }
    !function() {
        var a = d.createDocumentFragment()
          , b = a.appendChild(d.createElement("div"))
          , c = d.createElement("input");
        c.setAttribute("type", "radio"),
        c.setAttribute("checked", "checked"),
        c.setAttribute("name", "t"),
        b.appendChild(c),
        l.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked,
        b.innerHTML = "<textarea>x</textarea>",
        l.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
    }();
    var da = /^key/
      , ea = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
      , fa = /^([^.]*)(?:\.(.+)|)/;
    function ga() {
        return !0
    }
    function ha() {
        return !1
    }
    function ia() {
        try {
            return d.activeElement
        } catch (a) {}
    }
    function ja(a, b, c, d, e, f) {
        var g, h;
        if ("object" == typeof b) {
            "string" != typeof c && (d = d || c,
            c = void 0);
            for (h in b)
                ja(a, h, c, d, b[h], f);
            return a
        }
        if (null == d && null == e ? (e = c,
        d = c = void 0) : null == e && ("string" == typeof c ? (e = d,
        d = void 0) : (e = d,
        d = c,
        c = void 0)),
        e === !1)
            e = ha;
        else if (!e)
            return a;
        return 1 === f && (g = e,
        e = function(a) {
            return n().off(a),
            g.apply(this, arguments)
        }
        ,
        e.guid = g.guid || (g.guid = n.guid++)),
        a.each(function() {
            n.event.add(this, b, e, d, c)
        })
    }
    n.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = N.get(a);
            if (r) {
                c.handler && (f = c,
                c = f.handler,
                e = f.selector),
                c.guid || (c.guid = n.guid++),
                (i = r.events) || (i = r.events = {}),
                (g = r.handle) || (g = r.handle = function(b) {
                    return "undefined" != typeof n && n.event.triggered !== b.type ? n.event.dispatch.apply(a, arguments) : void 0
                }
                ),
                b = (b || "").match(G) || [""],
                j = b.length;
                while (j--)
                    h = fa.exec(b[j]) || [],
                    o = q = h[1],
                    p = (h[2] || "").split(".").sort(),
                    o && (l = n.event.special[o] || {},
                    o = (e ? l.delegateType : l.bindType) || o,
                    l = n.event.special[o] || {},
                    k = n.extend({
                        type: o,
                        origType: q,
                        data: d,
                        handler: c,
                        guid: c.guid,
                        selector: e,
                        needsContext: e && n.expr.match.needsContext.test(e),
                        namespace: p.join(".")
                    }, f),
                    (m = i[o]) || (m = i[o] = [],
                    m.delegateCount = 0,
                    l.setup && l.setup.call(a, d, p, g) !== !1 || a.addEventListener && a.addEventListener(o, g)),
                    l.add && (l.add.call(a, k),
                    k.handler.guid || (k.handler.guid = c.guid)),
                    e ? m.splice(m.delegateCount++, 0, k) : m.push(k),
                    n.event.global[o] = !0)
            }
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = N.hasData(a) && N.get(a);
            if (r && (i = r.events)) {
                b = (b || "").match(G) || [""],
                j = b.length;
                while (j--)
                    if (h = fa.exec(b[j]) || [],
                    o = q = h[1],
                    p = (h[2] || "").split(".").sort(),
                    o) {
                        l = n.event.special[o] || {},
                        o = (d ? l.delegateType : l.bindType) || o,
                        m = i[o] || [],
                        h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        g = f = m.length;
                        while (f--)
                            k = m[f],
                            !e && q !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1),
                            k.selector && m.delegateCount--,
                            l.remove && l.remove.call(a, k));
                        g && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle),
                        delete i[o])
                    } else
                        for (o in i)
                            n.event.remove(a, o + b[j], c, d, !0);
                n.isEmptyObject(i) && N.remove(a, "handle events")
            }
        },
        dispatch: function(a) {
            a = n.event.fix(a);
            var b, c, d, f, g, h = [], i = e.call(arguments), j = (N.get(this, "events") || {})[a.type] || [], k = n.event.special[a.type] || {};
            if (i[0] = a,
            a.delegateTarget = this,
            !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                h = n.event.handlers.call(this, a, j),
                b = 0;
                while ((f = h[b++]) && !a.isPropagationStopped()) {
                    a.currentTarget = f.elem,
                    c = 0;
                    while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped())
                        a.rnamespace && !a.rnamespace.test(g.namespace) || (a.handleObj = g,
                        a.data = g.data,
                        d = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i),
                        void 0 !== d && (a.result = d) === !1 && (a.preventDefault(),
                        a.stopPropagation()))
                }
                return k.postDispatch && k.postDispatch.call(this, a),
                a.result
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [], h = b.delegateCount, i = a.target;
            if (h && i.nodeType && ("click" !== a.type || isNaN(a.button) || a.button < 1))
                for (; i !== this; i = i.parentNode || this)
                    if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                        for (d = [],
                        c = 0; h > c; c++)
                            f = b[c],
                            e = f.selector + " ",
                            void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) > -1 : n.find(e, this, null, [i]).length),
                            d[e] && d.push(f);
                        d.length && g.push({
                            elem: i,
                            handlers: d
                        })
                    }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }),
            g
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode),
                a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, e, f, g = b.button;
                return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || d,
                e = c.documentElement,
                f = c.body,
                a.pageX = b.clientX + (e && e.scrollLeft || f && f.scrollLeft || 0) - (e && e.clientLeft || f && f.clientLeft || 0),
                a.pageY = b.clientY + (e && e.scrollTop || f && f.scrollTop || 0) - (e && e.clientTop || f && f.clientTop || 0)),
                a.which || void 0 === g || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0),
                a
            }
        },
        fix: function(a) {
            if (a[n.expando])
                return a;
            var b, c, e, f = a.type, g = a, h = this.fixHooks[f];
            h || (this.fixHooks[f] = h = ea.test(f) ? this.mouseHooks : da.test(f) ? this.keyHooks : {}),
            e = h.props ? this.props.concat(h.props) : this.props,
            a = new n.Event(g),
            b = e.length;
            while (b--)
                c = e[b],
                a[c] = g[c];
            return a.target || (a.target = d),
            3 === a.target.nodeType && (a.target = a.target.parentNode),
            h.filter ? h.filter(a, g) : a
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== ia() && this.focus ? (this.focus(),
                    !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === ia() && this.blur ? (this.blur(),
                    !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && n.nodeName(this, "input") ? (this.click(),
                    !1) : void 0
                },
                _default: function(a) {
                    return n.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        }
    },
    n.removeEvent = function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c)
    }
    ,
    n.Event = function(a, b) {
        return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a,
        this.type = a.type,
        this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? ga : ha) : this.type = a,
        b && n.extend(this, b),
        this.timeStamp = a && a.timeStamp || n.now(),
        void (this[n.expando] = !0)) : new n.Event(a,b)
    }
    ,
    n.Event.prototype = {
        constructor: n.Event,
        isDefaultPrevented: ha,
        isPropagationStopped: ha,
        isImmediatePropagationStopped: ha,
        isSimulated: !1,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = ga,
            a && !this.isSimulated && a.preventDefault()
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = ga,
            a && !this.isSimulated && a.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = ga,
            a && !this.isSimulated && a.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    n.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        n.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this, e = a.relatedTarget, f = a.handleObj;
                return e && (e === d || n.contains(d, e)) || (a.type = f.origType,
                c = f.handler.apply(this, arguments),
                a.type = b),
                c
            }
        }
    }),
    n.fn.extend({
        on: function(a, b, c, d) {
            return ja(this, a, b, c, d)
        },
        one: function(a, b, c, d) {
            return ja(this, a, b, c, d, 1)
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj)
                return d = a.handleObj,
                n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler),
                this;
            if ("object" == typeof a) {
                for (e in a)
                    this.off(e, b, a[e]);
                return this
            }
            return b !== !1 && "function" != typeof b || (c = b,
            b = void 0),
            c === !1 && (c = ha),
            this.each(function() {
                n.event.remove(this, a, c, b)
            })
        }
    });
    var ka = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi
      , la = /<script|<style|<link/i
      , ma = /checked\s*(?:[^=]|=\s*.checked.)/i
      , na = /^true\/(.*)/
      , oa = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function pa(a, b) {
        return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }
    function qa(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type,
        a
    }
    function ra(a) {
        var b = na.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"),
        a
    }
    function sa(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (N.hasData(a) && (f = N.access(a),
            g = N.set(b, f),
            j = f.events)) {
                delete g.handle,
                g.events = {};
                for (e in j)
                    for (c = 0,
                    d = j[e].length; d > c; c++)
                        n.event.add(b, e, j[e][c])
            }
            O.hasData(a) && (h = O.access(a),
            i = n.extend({}, h),
            O.set(b, i))
        }
    }
    function ta(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && X.test(a.type) ? b.checked = a.checked : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue)
    }
    function ua(a, b, c, d) {
        b = f.apply([], b);
        var e, g, h, i, j, k, m = 0, o = a.length, p = o - 1, q = b[0], r = n.isFunction(q);
        if (r || o > 1 && "string" == typeof q && !l.checkClone && ma.test(q))
            return a.each(function(e) {
                var f = a.eq(e);
                r && (b[0] = q.call(this, e, f.html())),
                ua(f, b, c, d)
            });
        if (o && (e = ca(b, a[0].ownerDocument, !1, a, d),
        g = e.firstChild,
        1 === e.childNodes.length && (e = g),
        g || d)) {
            for (h = n.map(_(e, "script"), qa),
            i = h.length; o > m; m++)
                j = e,
                m !== p && (j = n.clone(j, !0, !0),
                i && n.merge(h, _(j, "script"))),
                c.call(a[m], j, m);
            if (i)
                for (k = h[h.length - 1].ownerDocument,
                n.map(h, ra),
                m = 0; i > m; m++)
                    j = h[m],
                    Z.test(j.type || "") && !N.access(j, "globalEval") && n.contains(k, j) && (j.src ? n._evalUrl && n._evalUrl(j.src) : n.globalEval(j.textContent.replace(oa, "")))
        }
        return a
    }
    function va(a, b, c) {
        for (var d, e = b ? n.filter(b, a) : a, f = 0; null != (d = e[f]); f++)
            c || 1 !== d.nodeType || n.cleanData(_(d)),
            d.parentNode && (c && n.contains(d.ownerDocument, d) && aa(_(d, "script")),
            d.parentNode.removeChild(d));
        return a
    }
    n.extend({
        htmlPrefilter: function(a) {
            return a.replace(ka, "<$1></$2>")
        },
        clone: function(a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0), i = n.contains(a.ownerDocument, a);
            if (!(l.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a)))
                for (g = _(h),
                f = _(a),
                d = 0,
                e = f.length; e > d; d++)
                    ta(f[d], g[d]);
            if (b)
                if (c)
                    for (f = f || _(a),
                    g = g || _(h),
                    d = 0,
                    e = f.length; e > d; d++)
                        sa(f[d], g[d]);
                else
                    sa(a, h);
            return g = _(h, "script"),
            g.length > 0 && aa(g, !i && _(a, "script")),
            h
        },
        cleanData: function(a) {
            for (var b, c, d, e = n.event.special, f = 0; void 0 !== (c = a[f]); f++)
                if (L(c)) {
                    if (b = c[N.expando]) {
                        if (b.events)
                            for (d in b.events)
                                e[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle);
                        c[N.expando] = void 0
                    }
                    c[O.expando] && (c[O.expando] = void 0)
                }
        }
    }),
    n.fn.extend({
        domManip: ua,
        detach: function(a) {
            return va(this, a, !0)
        },
        remove: function(a) {
            return va(this, a)
        },
        text: function(a) {
            return K(this, function(a) {
                return void 0 === a ? n.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a)
                })
            }, null, a, arguments.length)
        },
        append: function() {
            return ua(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = pa(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function() {
            return ua(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = pa(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return ua(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return ua(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++)
                1 === a.nodeType && (n.cleanData(_(a, !1)),
                a.textContent = "");
            return this
        },
        clone: function(a, b) {
            return a = null == a ? !1 : a,
            b = null == b ? a : b,
            this.map(function() {
                return n.clone(this, a, b)
            })
        },
        html: function(a) {
            return K(this, function(a) {
                var b = this[0] || {}
                  , c = 0
                  , d = this.length;
                if (void 0 === a && 1 === b.nodeType)
                    return b.innerHTML;
                if ("string" == typeof a && !la.test(a) && !$[(Y.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = n.htmlPrefilter(a);
                    try {
                        for (; d > c; c++)
                            b = this[c] || {},
                            1 === b.nodeType && (n.cleanData(_(b, !1)),
                            b.innerHTML = a);
                        b = 0
                    } catch (e) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = [];
            return ua(this, arguments, function(b) {
                var c = this.parentNode;
                n.inArray(this, a) < 0 && (n.cleanData(_(this)),
                c && c.replaceChild(b, this))
            }, a)
        }
    }),
    n.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        n.fn[a] = function(a) {
            for (var c, d = [], e = n(a), f = e.length - 1, h = 0; f >= h; h++)
                c = h === f ? this : this.clone(!0),
                n(e[h])[b](c),
                g.apply(d, c.get());
            return this.pushStack(d)
        }
    });
    var wa, xa = {
        HTML: "block",
        BODY: "block"
    };
    function ya(a, b) {
        var c = n(b.createElement(a)).appendTo(b.body)
          , d = n.css(c[0], "display");
        return c.detach(),
        d
    }
    function za(a) {
        var b = d
          , c = xa[a];
        return c || (c = ya(a, b),
        "none" !== c && c || (wa = (wa || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),
        b = wa[0].contentDocument,
        b.write(),
        b.close(),
        c = ya(a, b),
        wa.detach()),
        xa[a] = c),
        c
    }
    var Aa = /^margin/
      , Ba = new RegExp("^(" + S + ")(?!px)[a-z%]+$","i")
      , Ca = function(b) {
        var c = b.ownerDocument.defaultView;
        return c && c.opener || (c = a),
        c.getComputedStyle(b)
    }
      , Da = function(a, b, c, d) {
        var e, f, g = {};
        for (f in b)
            g[f] = a.style[f],
            a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b)
            a.style[f] = g[f];
        return e
    }
      , Ea = d.documentElement;
    !function() {
        var b, c, e, f, g = d.createElement("div"), h = d.createElement("div");
        if (h.style) {
            h.style.backgroundClip = "content-box",
            h.cloneNode(!0).style.backgroundClip = "",
            l.clearCloneStyle = "content-box" === h.style.backgroundClip,
            g.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",
            g.appendChild(h);
            function i() {
                h.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",
                h.innerHTML = "",
                Ea.appendChild(g);
                var d = a.getComputedStyle(h);
                b = "1%" !== d.top,
                f = "2px" === d.marginLeft,
                c = "4px" === d.width,
                h.style.marginRight = "50%",
                e = "4px" === d.marginRight,
                Ea.removeChild(g)
            }
            n.extend(l, {
                pixelPosition: function() {
                    return i(),
                    b
                },
                boxSizingReliable: function() {
                    return null == c && i(),
                    c
                },
                pixelMarginRight: function() {
                    return null == c && i(),
                    e
                },
                reliableMarginLeft: function() {
                    return null == c && i(),
                    f
                },
                reliableMarginRight: function() {
                    var b, c = h.appendChild(d.createElement("div"));
                    return c.style.cssText = h.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",
                    c.style.marginRight = c.style.width = "0",
                    h.style.width = "1px",
                    Ea.appendChild(g),
                    b = !parseFloat(a.getComputedStyle(c).marginRight),
                    Ea.removeChild(g),
                    h.removeChild(c),
                    b
                }
            })
        }
    }();
    function Fa(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ca(a),
        g = c ? c.getPropertyValue(b) || c[b] : void 0,
        "" !== g && void 0 !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)),
        c && !l.pixelMarginRight() && Ba.test(g) && Aa.test(b) && (d = h.width,
        e = h.minWidth,
        f = h.maxWidth,
        h.minWidth = h.maxWidth = h.width = g,
        g = c.width,
        h.width = d,
        h.minWidth = e,
        h.maxWidth = f),
        void 0 !== g ? g + "" : g
    }
    function Ga(a, b) {
        return {
            get: function() {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }
    var Ha = /^(none|table(?!-c[ea]).+)/
      , Ia = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , Ja = {
        letterSpacing: "0",
        fontWeight: "400"
    }
      , Ka = ["Webkit", "O", "Moz", "ms"]
      , La = d.createElement("div").style;
    function Ma(a) {
        if (a in La)
            return a;
        var b = a[0].toUpperCase() + a.slice(1)
          , c = Ka.length;
        while (c--)
            if (a = Ka[c] + b,
            a in La)
                return a
    }
    function Na(a, b, c) {
        var d = T.exec(b);
        return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b
    }
    function Oa(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2)
            "margin" === c && (g += n.css(a, c + U[f], !0, e)),
            d ? ("content" === c && (g -= n.css(a, "padding" + U[f], !0, e)),
            "margin" !== c && (g -= n.css(a, "border" + U[f] + "Width", !0, e))) : (g += n.css(a, "padding" + U[f], !0, e),
            "padding" !== c && (g += n.css(a, "border" + U[f] + "Width", !0, e)));
        return g
    }
    function Pa(a, b, c) {
        var d = !0
          , e = "width" === b ? a.offsetWidth : a.offsetHeight
          , f = Ca(a)
          , g = "border-box" === n.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = Fa(a, b, f),
            (0 > e || null == e) && (e = a.style[b]),
            Ba.test(e))
                return e;
            d = g && (l.boxSizingReliable() || e === a.style[b]),
            e = parseFloat(e) || 0
        }
        return e + Oa(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }
    function Qa(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++)
            d = a[g],
            d.style && (f[g] = N.get(d, "olddisplay"),
            c = d.style.display,
            b ? (f[g] || "none" !== c || (d.style.display = ""),
            "" === d.style.display && V(d) && (f[g] = N.access(d, "olddisplay", za(d.nodeName)))) : (e = V(d),
            "none" === c && e || N.set(d, "olddisplay", e ? c : n.css(d, "display"))));
        for (g = 0; h > g; g++)
            d = a[g],
            d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }
    n.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = Fa(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = n.camelCase(b), i = a.style;
                return b = n.cssProps[h] || (n.cssProps[h] = Ma(h) || h),
                g = n.cssHooks[b] || n.cssHooks[h],
                void 0 === c ? g && "get"in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c,
                "string" === f && (e = T.exec(c)) && e[1] && (c = W(a, b, e),
                f = "number"),
                null != c && c === c && ("number" === f && (c += e && e[3] || (n.cssNumber[h] ? "" : "px")),
                l.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"),
                g && "set"in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)),
                void 0)
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = n.camelCase(b);
            return b = n.cssProps[h] || (n.cssProps[h] = Ma(h) || h),
            g = n.cssHooks[b] || n.cssHooks[h],
            g && "get"in g && (e = g.get(a, !0, c)),
            void 0 === e && (e = Fa(a, b, d)),
            "normal" === e && b in Ja && (e = Ja[b]),
            "" === c || c ? (f = parseFloat(e),
            c === !0 || isFinite(f) ? f || 0 : e) : e
        }
    }),
    n.each(["height", "width"], function(a, b) {
        n.cssHooks[b] = {
            get: function(a, c, d) {
                return c ? Ha.test(n.css(a, "display")) && 0 === a.offsetWidth ? Da(a, Ia, function() {
                    return Pa(a, b, d)
                }) : Pa(a, b, d) : void 0
            },
            set: function(a, c, d) {
                var e, f = d && Ca(a), g = d && Oa(a, b, d, "border-box" === n.css(a, "boxSizing", !1, f), f);
                return g && (e = T.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c,
                c = n.css(a, b)),
                Na(a, c, g)
            }
        }
    }),
    n.cssHooks.marginLeft = Ga(l.reliableMarginLeft, function(a, b) {
        return b ? (parseFloat(Fa(a, "marginLeft")) || a.getBoundingClientRect().left - Da(a, {
            marginLeft: 0
        }, function() {
            return a.getBoundingClientRect().left
        })) + "px" : void 0
    }),
    n.cssHooks.marginRight = Ga(l.reliableMarginRight, function(a, b) {
        return b ? Da(a, {
            display: "inline-block"
        }, Fa, [a, "marginRight"]) : void 0
    }),
    n.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        n.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++)
                    e[a + U[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        },
        Aa.test(a) || (n.cssHooks[a + b].set = Na)
    }),
    n.fn.extend({
        css: function(a, b) {
            return K(this, function(a, b, c) {
                var d, e, f = {}, g = 0;
                if (n.isArray(b)) {
                    for (d = Ca(a),
                    e = b.length; e > g; g++)
                        f[b[g]] = n.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? n.style(a, b, c) : n.css(a, b)
            }, a, b, arguments.length > 1)
        },
        show: function() {
            return Qa(this, !0)
        },
        hide: function() {
            return Qa(this)
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                V(this) ? n(this).show() : n(this).hide()
            })
        }
    });
    function Ra(a, b, c, d, e) {
        return new Ra.prototype.init(a,b,c,d,e)
    }
    n.Tween = Ra,
    Ra.prototype = {
        constructor: Ra,
        init: function(a, b, c, d, e, f) {
            this.elem = a,
            this.prop = c,
            this.easing = e || n.easing._default,
            this.options = b,
            this.start = this.now = this.cur(),
            this.end = d,
            this.unit = f || (n.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = Ra.propHooks[this.prop];
            return a && a.get ? a.get(this) : Ra.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = Ra.propHooks[this.prop];
            return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a,
            this.now = (this.end - this.start) * b + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            c && c.set ? c.set(this) : Ra.propHooks._default.set(this),
            this
        }
    },
    Ra.prototype.init.prototype = Ra.prototype,
    Ra.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = n.css(a.elem, a.prop, ""),
                b && "auto" !== b ? b : 0)
            },
            set: function(a) {
                n.fx.step[a.prop] ? n.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[n.cssProps[a.prop]] && !n.cssHooks[a.prop] ? a.elem[a.prop] = a.now : n.style(a.elem, a.prop, a.now + a.unit)
            }
        }
    },
    Ra.propHooks.scrollTop = Ra.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    },
    n.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        },
        _default: "swing"
    },
    n.fx = Ra.prototype.init,
    n.fx.step = {};
    var Sa, Ta, Ua = /^(?:toggle|show|hide)$/, Va = /queueHooks$/;
    function Wa() {
        return a.setTimeout(function() {
            Sa = void 0
        }),
        Sa = n.now()
    }
    function Xa(a, b) {
        var c, d = 0, e = {
            height: a
        };
        for (b = b ? 1 : 0; 4 > d; d += 2 - b)
            c = U[d],
            e["margin" + c] = e["padding" + c] = a;
        return b && (e.opacity = e.width = a),
        e
    }
    function Ya(a, b, c) {
        for (var d, e = (_a.tweeners[b] || []).concat(_a.tweeners["*"]), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a))
                return d
    }
    function Za(a, b, c) {
        var d, e, f, g, h, i, j, k, l = this, m = {}, o = a.style, p = a.nodeType && V(a), q = N.get(a, "fxshow");
        c.queue || (h = n._queueHooks(a, "fx"),
        null == h.unqueued && (h.unqueued = 0,
        i = h.empty.fire,
        h.empty.fire = function() {
            h.unqueued || i()
        }
        ),
        h.unqueued++,
        l.always(function() {
            l.always(function() {
                h.unqueued--,
                n.queue(a, "fx").length || h.empty.fire()
            })
        })),
        1 === a.nodeType && ("height"in b || "width"in b) && (c.overflow = [o.overflow, o.overflowX, o.overflowY],
        j = n.css(a, "display"),
        k = "none" === j ? N.get(a, "olddisplay") || za(a.nodeName) : j,
        "inline" === k && "none" === n.css(a, "float") && (o.display = "inline-block")),
        c.overflow && (o.overflow = "hidden",
        l.always(function() {
            o.overflow = c.overflow[0],
            o.overflowX = c.overflow[1],
            o.overflowY = c.overflow[2]
        }));
        for (d in b)
            if (e = b[d],
            Ua.exec(e)) {
                if (delete b[d],
                f = f || "toggle" === e,
                e === (p ? "hide" : "show")) {
                    if ("show" !== e || !q || void 0 === q[d])
                        continue;
                    p = !0
                }
                m[d] = q && q[d] || n.style(a, d)
            } else
                j = void 0;
        if (n.isEmptyObject(m))
            "inline" === ("none" === j ? za(a.nodeName) : j) && (o.display = j);
        else {
            q ? "hidden"in q && (p = q.hidden) : q = N.access(a, "fxshow", {}),
            f && (q.hidden = !p),
            p ? n(a).show() : l.done(function() {
                n(a).hide()
            }),
            l.done(function() {
                var b;
                N.remove(a, "fxshow");
                for (b in m)
                    n.style(a, b, m[b])
            });
            for (d in m)
                g = Ya(p ? q[d] : 0, d, l),
                d in q || (q[d] = g.start,
                p && (g.end = g.start,
                g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }
    function $a(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = n.camelCase(c),
            e = b[d],
            f = a[c],
            n.isArray(f) && (e = f[1],
            f = a[c] = f[0]),
            c !== d && (a[d] = f,
            delete a[c]),
            g = n.cssHooks[d],
            g && "expand"in g) {
                f = g.expand(f),
                delete a[d];
                for (c in f)
                    c in a || (a[c] = f[c],
                    b[c] = e)
            } else
                b[d] = e
    }
    function _a(a, b, c) {
        var d, e, f = 0, g = _a.prefilters.length, h = n.Deferred().always(function() {
            delete i.elem
        }), i = function() {
            if (e)
                return !1;
            for (var b = Sa || Wa(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++)
                j.tweens[g].run(f);
            return h.notifyWith(a, [j, f, c]),
            1 > f && i ? c : (h.resolveWith(a, [j]),
            !1)
        }, j = h.promise({
            elem: a,
            props: n.extend({}, b),
            opts: n.extend(!0, {
                specialEasing: {},
                easing: n.easing._default
            }, c),
            originalProperties: b,
            originalOptions: c,
            startTime: Sa || Wa(),
            duration: c.duration,
            tweens: [],
            createTween: function(b, c) {
                var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                return j.tweens.push(d),
                d
            },
            stop: function(b) {
                var c = 0
                  , d = b ? j.tweens.length : 0;
                if (e)
                    return this;
                for (e = !0; d > c; c++)
                    j.tweens[c].run(1);
                return b ? (h.notifyWith(a, [j, 1, 0]),
                h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]),
                this
            }
        }), k = j.props;
        for ($a(k, j.opts.specialEasing); g > f; f++)
            if (d = _a.prefilters[f].call(j, a, k, j.opts))
                return n.isFunction(d.stop) && (n._queueHooks(j.elem, j.opts.queue).stop = n.proxy(d.stop, d)),
                d;
        return n.map(k, Ya, j),
        n.isFunction(j.opts.start) && j.opts.start.call(a, j),
        n.fx.timer(n.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })),
        j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }
    n.Animation = n.extend(_a, {
        tweeners: {
            "*": [function(a, b) {
                var c = this.createTween(a, b);
                return W(c.elem, a, T.exec(b), c),
                c
            }
            ]
        },
        tweener: function(a, b) {
            n.isFunction(a) ? (b = a,
            a = ["*"]) : a = a.match(G);
            for (var c, d = 0, e = a.length; e > d; d++)
                c = a[d],
                _a.tweeners[c] = _a.tweeners[c] || [],
                _a.tweeners[c].unshift(b)
        },
        prefilters: [Za],
        prefilter: function(a, b) {
            b ? _a.prefilters.unshift(a) : _a.prefilters.push(a)
        }
    }),
    n.speed = function(a, b, c) {
        var d = a && "object" == typeof a ? n.extend({}, a) : {
            complete: c || !c && b || n.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !n.isFunction(b) && b
        };
        return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default,
        null != d.queue && d.queue !== !0 || (d.queue = "fx"),
        d.old = d.complete,
        d.complete = function() {
            n.isFunction(d.old) && d.old.call(this),
            d.queue && n.dequeue(this, d.queue)
        }
        ,
        d
    }
    ,
    n.fn.extend({
        fadeTo: function(a, b, c, d) {
            return this.filter(V).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d)
        },
        animate: function(a, b, c, d) {
            var e = n.isEmptyObject(a)
              , f = n.speed(b, c, d)
              , g = function() {
                var b = _a(this, n.extend({}, a), f);
                (e || N.get(this, "finish")) && b.stop(!0)
            };
            return g.finish = g,
            e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        },
        stop: function(a, b, c) {
            var d = function(a) {
                var b = a.stop;
                delete a.stop,
                b(c)
            };
            return "string" != typeof a && (c = b,
            b = a,
            a = void 0),
            b && a !== !1 && this.queue(a || "fx", []),
            this.each(function() {
                var b = !0
                  , e = null != a && a + "queueHooks"
                  , f = n.timers
                  , g = N.get(this);
                if (e)
                    g[e] && g[e].stop && d(g[e]);
                else
                    for (e in g)
                        g[e] && g[e].stop && Va.test(e) && d(g[e]);
                for (e = f.length; e--; )
                    f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c),
                    b = !1,
                    f.splice(e, 1));
                !b && c || n.dequeue(this, a)
            })
        },
        finish: function(a) {
            return a !== !1 && (a = a || "fx"),
            this.each(function() {
                var b, c = N.get(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = n.timers, g = d ? d.length : 0;
                for (c.finish = !0,
                n.queue(this, a, []),
                e && e.stop && e.stop.call(this, !0),
                b = f.length; b--; )
                    f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0),
                    f.splice(b, 1));
                for (b = 0; g > b; b++)
                    d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish
            })
        }
    }),
    n.each(["toggle", "show", "hide"], function(a, b) {
        var c = n.fn[b];
        n.fn[b] = function(a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(Xa(b, !0), a, d, e)
        }
    }),
    n.each({
        slideDown: Xa("show"),
        slideUp: Xa("hide"),
        slideToggle: Xa("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a, b) {
        n.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d)
        }
    }),
    n.timers = [],
    n.fx.tick = function() {
        var a, b = 0, c = n.timers;
        for (Sa = n.now(); b < c.length; b++)
            a = c[b],
            a() || c[b] !== a || c.splice(b--, 1);
        c.length || n.fx.stop(),
        Sa = void 0
    }
    ,
    n.fx.timer = function(a) {
        n.timers.push(a),
        a() ? n.fx.start() : n.timers.pop()
    }
    ,
    n.fx.interval = 13,
    n.fx.start = function() {
        Ta || (Ta = a.setInterval(n.fx.tick, n.fx.interval))
    }
    ,
    n.fx.stop = function() {
        a.clearInterval(Ta),
        Ta = null
    }
    ,
    n.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    n.fn.delay = function(b, c) {
        return b = n.fx ? n.fx.speeds[b] || b : b,
        c = c || "fx",
        this.queue(c, function(c, d) {
            var e = a.setTimeout(c, b);
            d.stop = function() {
                a.clearTimeout(e)
            }
        })
    }
    ,
    function() {
        var a = d.createElement("input")
          , b = d.createElement("select")
          , c = b.appendChild(d.createElement("option"));
        a.type = "checkbox",
        l.checkOn = "" !== a.value,
        l.optSelected = c.selected,
        b.disabled = !0,
        l.optDisabled = !c.disabled,
        a = d.createElement("input"),
        a.value = "t",
        a.type = "radio",
        l.radioValue = "t" === a.value
    }();
    var ab, bb = n.expr.attrHandle;
    n.fn.extend({
        attr: function(a, b) {
            return K(this, n.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                n.removeAttr(this, a)
            })
        }
    }),
    n.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f)
                return "undefined" == typeof a.getAttribute ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(),
                e = n.attrHooks[b] || (n.expr.match.bool.test(b) ? ab : void 0)),
                void 0 !== c ? null === c ? void n.removeAttr(a, b) : e && "set"in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""),
                c) : e && "get"in e && null !== (d = e.get(a, b)) ? d : (d = n.find.attr(a, b),
                null == d ? void 0 : d))
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!l.radioValue && "radio" === b && n.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b),
                        c && (a.value = c),
                        b
                    }
                }
            }
        },
        removeAttr: function(a, b) {
            var c, d, e = 0, f = b && b.match(G);
            if (f && 1 === a.nodeType)
                while (c = f[e++])
                    d = n.propFix[c] || c,
                    n.expr.match.bool.test(c) && (a[d] = !1),
                    a.removeAttribute(c)
        }
    }),
    ab = {
        set: function(a, b, c) {
            return b === !1 ? n.removeAttr(a, c) : a.setAttribute(c, c),
            c
        }
    },
    n.each(n.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = bb[b] || n.find.attr;
        bb[b] = function(a, b, d) {
            var e, f;
            return d || (f = bb[b],
            bb[b] = e,
            e = null != c(a, b, d) ? b.toLowerCase() : null,
            bb[b] = f),
            e
        }
    });
    var cb = /^(?:input|select|textarea|button)$/i
      , db = /^(?:a|area)$/i;
    n.fn.extend({
        prop: function(a, b) {
            return K(this, n.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return this.each(function() {
                delete this[n.propFix[a] || a]
            })
        }
    }),
    n.extend({
        prop: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f)
                return 1 === f && n.isXMLDoc(a) || (b = n.propFix[b] || b,
                e = n.propHooks[b]),
                void 0 !== c ? e && "set"in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get"in e && null !== (d = e.get(a, b)) ? d : a[b]
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var b = n.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : cb.test(a.nodeName) || db.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }),
    l.optSelected || (n.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex,
            null
        },
        set: function(a) {
            var b = a.parentNode;
            b && (b.selectedIndex,
            b.parentNode && b.parentNode.selectedIndex)
        }
    }),
    n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        n.propFix[this.toLowerCase()] = this
    });
    var eb = /[\t\r\n\f]/g;
    function fb(a) {
        return a.getAttribute && a.getAttribute("class") || ""
    }
    n.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (n.isFunction(a))
                return this.each(function(b) {
                    n(this).addClass(a.call(this, b, fb(this)))
                });
            if ("string" == typeof a && a) {
                b = a.match(G) || [];
                while (c = this[i++])
                    if (e = fb(c),
                    d = 1 === c.nodeType && (" " + e + " ").replace(eb, " ")) {
                        g = 0;
                        while (f = b[g++])
                            d.indexOf(" " + f + " ") < 0 && (d += f + " ");
                        h = n.trim(d),
                        e !== h && c.setAttribute("class", h)
                    }
            }
            return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (n.isFunction(a))
                return this.each(function(b) {
                    n(this).removeClass(a.call(this, b, fb(this)))
                });
            if (!arguments.length)
                return this.attr("class", "");
            if ("string" == typeof a && a) {
                b = a.match(G) || [];
                while (c = this[i++])
                    if (e = fb(c),
                    d = 1 === c.nodeType && (" " + e + " ").replace(eb, " ")) {
                        g = 0;
                        while (f = b[g++])
                            while (d.indexOf(" " + f + " ") > -1)
                                d = d.replace(" " + f + " ", " ");
                        h = n.trim(d),
                        e !== h && c.setAttribute("class", h)
                    }
            }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : n.isFunction(a) ? this.each(function(c) {
                n(this).toggleClass(a.call(this, c, fb(this), b), b)
            }) : this.each(function() {
                var b, d, e, f;
                if ("string" === c) {
                    d = 0,
                    e = n(this),
                    f = a.match(G) || [];
                    while (b = f[d++])
                        e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                } else
                    void 0 !== a && "boolean" !== c || (b = fb(this),
                    b && N.set(this, "__className__", b),
                    this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : N.get(this, "__className__") || ""))
            })
        },
        hasClass: function(a) {
            var b, c, d = 0;
            b = " " + a + " ";
            while (c = this[d++])
                if (1 === c.nodeType && (" " + fb(c) + " ").replace(eb, " ").indexOf(b) > -1)
                    return !0;
            return !1
        }
    });
    var gb = /\r/g
      , hb = /[\x20\t\r\n\f]+/g;
    n.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0];
            {
                if (arguments.length)
                    return d = n.isFunction(a),
                    this.each(function(c) {
                        var e;
                        1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a,
                        null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function(a) {
                            return null == a ? "" : a + ""
                        })),
                        b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()],
                        b && "set"in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                    });
                if (e)
                    return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()],
                    b && "get"in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value,
                    "string" == typeof c ? c.replace(gb, "") : null == c ? "" : c)
            }
        }
    }),
    n.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = n.find.attr(a, "value");
                    return null != b ? b : n.trim(n.text(a)).replace(hb, " ")
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                        if (c = d[i],
                        (c.selected || i === e) && (l.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !n.nodeName(c.parentNode, "optgroup"))) {
                            if (b = n(c).val(),
                            f)
                                return b;
                            g.push(b)
                        }
                    return g
                },
                set: function(a, b) {
                    var c, d, e = a.options, f = n.makeArray(b), g = e.length;
                    while (g--)
                        d = e[g],
                        (d.selected = n.inArray(n.valHooks.option.get(d), f) > -1) && (c = !0);
                    return c || (a.selectedIndex = -1),
                    f
                }
            }
        }
    }),
    n.each(["radio", "checkbox"], function() {
        n.valHooks[this] = {
            set: function(a, b) {
                return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) > -1 : void 0
            }
        },
        l.checkOn || (n.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        }
        )
    });
    var ib = /^(?:focusinfocus|focusoutblur)$/;
    n.extend(n.event, {
        trigger: function(b, c, e, f) {
            var g, h, i, j, l, m, o, p = [e || d], q = k.call(b, "type") ? b.type : b, r = k.call(b, "namespace") ? b.namespace.split(".") : [];
            if (h = i = e = e || d,
            3 !== e.nodeType && 8 !== e.nodeType && !ib.test(q + n.event.triggered) && (q.indexOf(".") > -1 && (r = q.split("."),
            q = r.shift(),
            r.sort()),
            l = q.indexOf(":") < 0 && "on" + q,
            b = b[n.expando] ? b : new n.Event(q,"object" == typeof b && b),
            b.isTrigger = f ? 2 : 3,
            b.namespace = r.join("."),
            b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            b.result = void 0,
            b.target || (b.target = e),
            c = null == c ? [b] : n.makeArray(c, [b]),
            o = n.event.special[q] || {},
            f || !o.trigger || o.trigger.apply(e, c) !== !1)) {
                if (!f && !o.noBubble && !n.isWindow(e)) {
                    for (j = o.delegateType || q,
                    ib.test(j + q) || (h = h.parentNode); h; h = h.parentNode)
                        p.push(h),
                        i = h;
                    i === (e.ownerDocument || d) && p.push(i.defaultView || i.parentWindow || a)
                }
                g = 0;
                while ((h = p[g++]) && !b.isPropagationStopped())
                    b.type = g > 1 ? j : o.bindType || q,
                    m = (N.get(h, "events") || {})[b.type] && N.get(h, "handle"),
                    m && m.apply(h, c),
                    m = l && h[l],
                    m && m.apply && L(h) && (b.result = m.apply(h, c),
                    b.result === !1 && b.preventDefault());
                return b.type = q,
                f || b.isDefaultPrevented() || o._default && o._default.apply(p.pop(), c) !== !1 || !L(e) || l && n.isFunction(e[q]) && !n.isWindow(e) && (i = e[l],
                i && (e[l] = null),
                n.event.triggered = q,
                e[q](),
                n.event.triggered = void 0,
                i && (e[l] = i)),
                b.result
            }
        },
        simulate: function(a, b, c) {
            var d = n.extend(new n.Event, c, {
                type: a,
                isSimulated: !0
            });
            n.event.trigger(d, null, b)
        }
    }),
    n.fn.extend({
        trigger: function(a, b) {
            return this.each(function() {
                n.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            return c ? n.event.trigger(a, b, c, !0) : void 0
        }
    }),
    n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        n.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }),
    n.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    }),
    l.focusin = "onfocusin"in a,
    l.focusin || n.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            n.event.simulate(b, a.target, n.event.fix(a))
        };
        n.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this
                  , e = N.access(d, b);
                e || d.addEventListener(a, c, !0),
                N.access(d, b, (e || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument || this
                  , e = N.access(d, b) - 1;
                e ? N.access(d, b, e) : (d.removeEventListener(a, c, !0),
                N.remove(d, b))
            }
        }
    });
    var jb = a.location
      , kb = n.now()
      , lb = /\?/;
    n.parseJSON = function(a) {
        return JSON.parse(a + "")
    }
    ,
    n.parseXML = function(b) {
        var c;
        if (!b || "string" != typeof b)
            return null;
        try {
            c = (new a.DOMParser).parseFromString(b, "text/xml")
        } catch (d) {
            c = void 0
        }
        return c && !c.getElementsByTagName("parsererror").length || n.error("Invalid XML: " + b),
        c
    }
    ;
    var mb = /#.*$/
      , nb = /([?&])_=[^&]*/
      , ob = /^(.*?):[ \t]*([^\r\n]*)$/gm
      , pb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/
      , qb = /^(?:GET|HEAD)$/
      , rb = /^\/\//
      , sb = {}
      , tb = {}
      , ub = "*/".concat("*")
      , vb = d.createElement("a");
    vb.href = jb.href;
    function wb(a) {
        return function(b, c) {
            "string" != typeof b && (c = b,
            b = "*");
            var d, e = 0, f = b.toLowerCase().match(G) || [];
            if (n.isFunction(c))
                while (d = f[e++])
                    "+" === d[0] ? (d = d.slice(1) || "*",
                    (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }
    function xb(a, b, c, d) {
        var e = {}
          , f = a === tb;
        function g(h) {
            var i;
            return e[h] = !0,
            n.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j),
                g(j),
                !1)
            }),
            i
        }
        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }
    function yb(a, b) {
        var c, d, e = n.ajaxSettings.flatOptions || {};
        for (c in b)
            void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        return d && n.extend(!0, a, d),
        a
    }
    function zb(a, b, c) {
        var d, e, f, g, h = a.contents, i = a.dataTypes;
        while ("*" === i[0])
            i.shift(),
            void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
        if (d)
            for (e in h)
                if (h[e] && h[e].test(d)) {
                    i.unshift(e);
                    break
                }
        if (i[0]in c)
            f = i[0];
        else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) {
                    f = e;
                    break
                }
                g || (g = e)
            }
            f = f || g
        }
        return f ? (f !== i[0] && i.unshift(f),
        c[f]) : void 0
    }
    function Ab(a, b, c, d) {
        var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters)
                j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b),
            !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)),
            i = f,
            f = k.shift())
                if ("*" === f)
                    f = i;
                else if ("*" !== i && i !== f) {
                    if (g = j[i + " " + f] || j["* " + f],
                    !g)
                        for (e in j)
                            if (h = e.split(" "),
                            h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                                g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0],
                                k.unshift(h[1]));
                                break
                            }
                    if (g !== !0)
                        if (g && a["throws"])
                            b = g(b);
                        else
                            try {
                                b = g(b)
                            } catch (l) {
                                return {
                                    state: "parsererror",
                                    error: g ? l : "No conversion from " + i + " to " + f
                                }
                            }
                }
        return {
            state: "success",
            data: b
        }
    }
    n.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: jb.href,
            type: "GET",
            isLocal: pb.test(jb.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": ub,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": n.parseJSON,
                "text xml": n.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? yb(yb(a, n.ajaxSettings), b) : yb(n.ajaxSettings, a)
        },
        ajaxPrefilter: wb(sb),
        ajaxTransport: wb(tb),
        ajax: function(b, c) {
            "object" == typeof b && (c = b,
            b = void 0),
            c = c || {};
            var e, f, g, h, i, j, k, l, m = n.ajaxSetup({}, c), o = m.context || m, p = m.context && (o.nodeType || o.jquery) ? n(o) : n.event, q = n.Deferred(), r = n.Callbacks("once memory"), s = m.statusCode || {}, t = {}, u = {}, v = 0, w = "canceled", x = {
                readyState: 0,
                getResponseHeader: function(a) {
                    var b;
                    if (2 === v) {
                        if (!h) {
                            h = {};
                            while (b = ob.exec(g))
                                h[b[1].toLowerCase()] = b[2]
                        }
                        b = h[a.toLowerCase()]
                    }
                    return null == b ? null : b
                },
                getAllResponseHeaders: function() {
                    return 2 === v ? g : null
                },
                setRequestHeader: function(a, b) {
                    var c = a.toLowerCase();
                    return v || (a = u[c] = u[c] || a,
                    t[a] = b),
                    this
                },
                overrideMimeType: function(a) {
                    return v || (m.mimeType = a),
                    this
                },
                statusCode: function(a) {
                    var b;
                    if (a)
                        if (2 > v)
                            for (b in a)
                                s[b] = [s[b], a[b]];
                        else
                            x.always(a[x.status]);
                    return this
                },
                abort: function(a) {
                    var b = a || w;
                    return e && e.abort(b),
                    z(0, b),
                    this
                }
            };
            if (q.promise(x).complete = r.add,
            x.success = x.done,
            x.error = x.fail,
            m.url = ((b || m.url || jb.href) + "").replace(mb, "").replace(rb, jb.protocol + "//"),
            m.type = c.method || c.type || m.method || m.type,
            m.dataTypes = n.trim(m.dataType || "*").toLowerCase().match(G) || [""],
            null == m.crossDomain) {
                j = d.createElement("a");
                try {
                    j.href = m.url,
                    j.href = j.href,
                    m.crossDomain = vb.protocol + "//" + vb.host != j.protocol + "//" + j.host
                } catch (y) {
                    m.crossDomain = !0
                }
            }
            if (m.data && m.processData && "string" != typeof m.data && (m.data = n.param(m.data, m.traditional)),
            xb(sb, m, c, x),
            2 === v)
                return x;
            k = n.event && m.global,
            k && 0 === n.active++ && n.event.trigger("ajaxStart"),
            m.type = m.type.toUpperCase(),
            m.hasContent = !qb.test(m.type),
            f = m.url,
            m.hasContent || (m.data && (f = m.url += (lb.test(f) ? "&" : "?") + m.data,
            delete m.data),
            m.cache === !1 && (m.url = nb.test(f) ? f.replace(nb, "$1_=" + kb++) : f + (lb.test(f) ? "&" : "?") + "_=" + kb++)),
            m.ifModified && (n.lastModified[f] && x.setRequestHeader("If-Modified-Since", n.lastModified[f]),
            n.etag[f] && x.setRequestHeader("If-None-Match", n.etag[f])),
            (m.data && m.hasContent && m.contentType !== !1 || c.contentType) && x.setRequestHeader("Content-Type", m.contentType),
            x.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + ub + "; q=0.01" : "") : m.accepts["*"]);
            for (l in m.headers)
                x.setRequestHeader(l, m.headers[l]);
            if (m.beforeSend && (m.beforeSend.call(o, x, m) === !1 || 2 === v))
                return x.abort();
            w = "abort";
            for (l in {
                success: 1,
                error: 1,
                complete: 1
            })
                x[l](m[l]);
            if (e = xb(tb, m, c, x)) {
                if (x.readyState = 1,
                k && p.trigger("ajaxSend", [x, m]),
                2 === v)
                    return x;
                m.async && m.timeout > 0 && (i = a.setTimeout(function() {
                    x.abort("timeout")
                }, m.timeout));
                try {
                    v = 1,
                    e.send(t, z)
                } catch (y) {
                    if (!(2 > v))
                        throw y;
                    z(-1, y)
                }
            } else
                z(-1, "No Transport");
            function z(b, c, d, h) {
                var j, l, t, u, w, y = c;
                2 !== v && (v = 2,
                i && a.clearTimeout(i),
                e = void 0,
                g = h || "",
                x.readyState = b > 0 ? 4 : 0,
                j = b >= 200 && 300 > b || 304 === b,
                d && (u = zb(m, x, d)),
                u = Ab(m, u, x, j),
                j ? (m.ifModified && (w = x.getResponseHeader("Last-Modified"),
                w && (n.lastModified[f] = w),
                w = x.getResponseHeader("etag"),
                w && (n.etag[f] = w)),
                204 === b || "HEAD" === m.type ? y = "nocontent" : 304 === b ? y = "notmodified" : (y = u.state,
                l = u.data,
                t = u.error,
                j = !t)) : (t = y,
                !b && y || (y = "error",
                0 > b && (b = 0))),
                x.status = b,
                x.statusText = (c || y) + "",
                j ? q.resolveWith(o, [l, y, x]) : q.rejectWith(o, [x, y, t]),
                x.statusCode(s),
                s = void 0,
                k && p.trigger(j ? "ajaxSuccess" : "ajaxError", [x, m, j ? l : t]),
                r.fireWith(o, [x, y]),
                k && (p.trigger("ajaxComplete", [x, m]),
                --n.active || n.event.trigger("ajaxStop")))
            }
            return x
        },
        getJSON: function(a, b, c) {
            return n.get(a, b, c, "json")
        },
        getScript: function(a, b) {
            return n.get(a, void 0, b, "script")
        }
    }),
    n.each(["get", "post"], function(a, b) {
        n[b] = function(a, c, d, e) {
            return n.isFunction(c) && (e = e || d,
            d = c,
            c = void 0),
            n.ajax(n.extend({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            }, n.isPlainObject(a) && a))
        }
    }),
    n._evalUrl = function(a) {
        return n.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }
    ,
    n.fn.extend({
        wrapAll: function(a) {
            var b;
            return n.isFunction(a) ? this.each(function(b) {
                n(this).wrapAll(a.call(this, b))
            }) : (this[0] && (b = n(a, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && b.insertBefore(this[0]),
            b.map(function() {
                var a = this;
                while (a.firstElementChild)
                    a = a.firstElementChild;
                return a
            }).append(this)),
            this)
        },
        wrapInner: function(a) {
            return n.isFunction(a) ? this.each(function(b) {
                n(this).wrapInner(a.call(this, b))
            }) : this.each(function() {
                var b = n(this)
                  , c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = n.isFunction(a);
            return this.each(function(c) {
                n(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                n.nodeName(this, "body") || n(this).replaceWith(this.childNodes)
            }).end()
        }
    }),
    n.expr.filters.hidden = function(a) {
        return !n.expr.filters.visible(a)
    }
    ,
    n.expr.filters.visible = function(a) {
        return a.offsetWidth > 0 || a.offsetHeight > 0 || a.getClientRects().length > 0
    }
    ;
    var Bb = /%20/g
      , Cb = /\[\]$/
      , Db = /\r?\n/g
      , Eb = /^(?:submit|button|image|reset|file)$/i
      , Fb = /^(?:input|select|textarea|keygen)/i;
    function Gb(a, b, c, d) {
        var e;
        if (n.isArray(b))
            n.each(b, function(b, e) {
                c || Cb.test(a) ? d(a, e) : Gb(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d)
            });
        else if (c || "object" !== n.type(b))
            d(a, b);
        else
            for (e in b)
                Gb(a + "[" + e + "]", b[e], c, d)
    }
    n.param = function(a, b) {
        var c, d = [], e = function(a, b) {
            b = n.isFunction(b) ? b() : null == b ? "" : b,
            d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
        };
        if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional),
        n.isArray(a) || a.jquery && !n.isPlainObject(a))
            n.each(a, function() {
                e(this.name, this.value)
            });
        else
            for (c in a)
                Gb(c, a[c], b, e);
        return d.join("&").replace(Bb, "+")
    }
    ,
    n.fn.extend({
        serialize: function() {
            return n.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = n.prop(this, "elements");
                return a ? n.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !n(this).is(":disabled") && Fb.test(this.nodeName) && !Eb.test(a) && (this.checked || !X.test(a))
            }).map(function(a, b) {
                var c = n(this).val();
                return null == c ? null : n.isArray(c) ? n.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(Db, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(Db, "\r\n")
                }
            }).get()
        }
    }),
    n.ajaxSettings.xhr = function() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    }
    ;
    var Hb = {
        0: 200,
        1223: 204
    }
      , Ib = n.ajaxSettings.xhr();
    l.cors = !!Ib && "withCredentials"in Ib,
    l.ajax = Ib = !!Ib,
    n.ajaxTransport(function(b) {
        var c, d;
        return l.cors || Ib && !b.crossDomain ? {
            send: function(e, f) {
                var g, h = b.xhr();
                if (h.open(b.type, b.url, b.async, b.username, b.password),
                b.xhrFields)
                    for (g in b.xhrFields)
                        h[g] = b.xhrFields[g];
                b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType),
                b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
                for (g in e)
                    h.setRequestHeader(g, e[g]);
                c = function(a) {
                    return function() {
                        c && (c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null,
                        "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Hb[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? {
                            binary: h.response
                        } : {
                            text: h.responseText
                        }, h.getAllResponseHeaders()))
                    }
                }
                ,
                h.onload = c(),
                d = h.onerror = c("error"),
                void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function() {
                    4 === h.readyState && a.setTimeout(function() {
                        c && d()
                    })
                }
                ,
                c = c("abort");
                try {
                    h.send(b.hasContent && b.data || null)
                } catch (i) {
                    if (c)
                        throw i
                }
            },
            abort: function() {
                c && c()
            }
        } : void 0
    }),
    n.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(a) {
                return n.globalEval(a),
                a
            }
        }
    }),
    n.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1),
        a.crossDomain && (a.type = "GET")
    }),
    n.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c;
            return {
                send: function(e, f) {
                    b = n("<script>").prop({
                        charset: a.scriptCharset,
                        src: a.url
                    }).on("load error", c = function(a) {
                        b.remove(),
                        c = null,
                        a && f("error" === a.type ? 404 : 200, a.type)
                    }
                    ),
                    d.head.appendChild(b[0])
                },
                abort: function() {
                    c && c()
                }
            }
        }
    });
    var Jb = []
      , Kb = /(=)\?(?=&|$)|\?\?/;
    n.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = Jb.pop() || n.expando + "_" + kb++;
            return this[a] = !0,
            a
        }
    }),
    n.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (Kb.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Kb.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback,
        h ? b[h] = b[h].replace(Kb, "$1" + e) : b.jsonp !== !1 && (b.url += (lb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e),
        b.converters["script json"] = function() {
            return g || n.error(e + " was not called"),
            g[0]
        }
        ,
        b.dataTypes[0] = "json",
        f = a[e],
        a[e] = function() {
            g = arguments
        }
        ,
        d.always(function() {
            void 0 === f ? n(a).removeProp(e) : a[e] = f,
            b[e] && (b.jsonpCallback = c.jsonpCallback,
            Jb.push(e)),
            g && n.isFunction(f) && f(g[0]),
            g = f = void 0
        }),
        "script") : void 0
    }),
    n.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a)
            return null;
        "boolean" == typeof b && (c = b,
        b = !1),
        b = b || d;
        var e = x.exec(a)
          , f = !c && [];
        return e ? [b.createElement(e[1])] : (e = ca([a], b, f),
        f && f.length && n(f).remove(),
        n.merge([], e.childNodes))
    }
    ;
    var Lb = n.fn.load;
    n.fn.load = function(a, b, c) {
        if ("string" != typeof a && Lb)
            return Lb.apply(this, arguments);
        var d, e, f, g = this, h = a.indexOf(" ");
        return h > -1 && (d = n.trim(a.slice(h)),
        a = a.slice(0, h)),
        n.isFunction(b) ? (c = b,
        b = void 0) : b && "object" == typeof b && (e = "POST"),
        g.length > 0 && n.ajax({
            url: a,
            type: e || "GET",
            dataType: "html",
            data: b
        }).done(function(a) {
            f = arguments,
            g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a)
        }).always(c && function(a, b) {
            g.each(function() {
                c.apply(this, f || [a.responseText, b, a])
            })
        }
        ),
        this
    }
    ,
    n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
        n.fn[b] = function(a) {
            return this.on(b, a)
        }
    }),
    n.expr.filters.animated = function(a) {
        return n.grep(n.timers, function(b) {
            return a === b.elem
        }).length
    }
    ;
    function Mb(a) {
        return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
    }
    n.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = n.css(a, "position"), l = n(a), m = {};
            "static" === k && (a.style.position = "relative"),
            h = l.offset(),
            f = n.css(a, "top"),
            i = n.css(a, "left"),
            j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1,
            j ? (d = l.position(),
            g = d.top,
            e = d.left) : (g = parseFloat(f) || 0,
            e = parseFloat(i) || 0),
            n.isFunction(b) && (b = b.call(a, c, n.extend({}, h))),
            null != b.top && (m.top = b.top - h.top + g),
            null != b.left && (m.left = b.left - h.left + e),
            "using"in b ? b.using.call(a, m) : l.css(m)
        }
    },
    n.fn.extend({
        offset: function(a) {
            if (arguments.length)
                return void 0 === a ? this : this.each(function(b) {
                    n.offset.setOffset(this, a, b)
                });
            var b, c, d = this[0], e = {
                top: 0,
                left: 0
            }, f = d && d.ownerDocument;
            if (f)
                return b = f.documentElement,
                n.contains(b, d) ? (e = d.getBoundingClientRect(),
                c = Mb(f),
                {
                    top: e.top + c.pageYOffset - b.clientTop,
                    left: e.left + c.pageXOffset - b.clientLeft
                }) : e
        },
        position: function() {
            if (this[0]) {
                var a, b, c = this[0], d = {
                    top: 0,
                    left: 0
                };
                return "fixed" === n.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(),
                b = this.offset(),
                n.nodeName(a[0], "html") || (d = a.offset()),
                d.top += n.css(a[0], "borderTopWidth", !0),
                d.left += n.css(a[0], "borderLeftWidth", !0)),
                {
                    top: b.top - d.top - n.css(c, "marginTop", !0),
                    left: b.left - d.left - n.css(c, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var a = this.offsetParent;
                while (a && "static" === n.css(a, "position"))
                    a = a.offsetParent;
                return a || Ea
            })
        }
    }),
    n.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, b) {
        var c = "pageYOffset" === b;
        n.fn[a] = function(d) {
            return K(this, function(a, d, e) {
                var f = Mb(a);
                return void 0 === e ? f ? f[b] : a[d] : void (f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e)
            }, a, d, arguments.length)
        }
    }),
    n.each(["top", "left"], function(a, b) {
        n.cssHooks[b] = Ga(l.pixelPosition, function(a, c) {
            return c ? (c = Fa(a, b),
            Ba.test(c) ? n(a).position()[b] + "px" : c) : void 0
        })
    }),
    n.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        n.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            n.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d)
                  , g = c || (d === !0 || e === !0 ? "margin" : "border");
                return K(this, function(b, c, d) {
                    var e;
                    return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement,
                    Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }),
    n.fn.extend({
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        },
        size: function() {
            return this.length
        }
    }),
    n.fn.andSelf = n.fn.addBack,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return n
    });
    var Nb = a.jQuery
      , Ob = a.$;
    return n.noConflict = function(b) {
        return a.$ === n && (a.$ = Ob),
        b && a.jQuery === n && (a.jQuery = Nb),
        n
    }
    ,
    b || (a.jQuery = a.$ = n),
    n
});
;/* Foundation v6.3.1 - Complete */
function _classCallCheck(t, e) {
    if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function")
}
function _classCallCheck(t, e) {
    if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function")
}
function _classCallCheck(t, e) {
    if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function")
}
function _classCallCheck(t, e) {
    if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function")
}
function _classCallCheck(t, e) {
    if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function")
}
function _classCallCheck(t, e) {
    if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function")
}
function _classCallCheck(t, e) {
    if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function")
}
function _classCallCheck(t, e) {
    if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function")
}
function _classCallCheck(t, e) {
    if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function")
}
function _classCallCheck(t, e) {
    if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function")
}
function _classCallCheck(t, e) {
    if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function")
}
function _classCallCheck(t, e) {
    if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function")
}
function _classCallCheck(t, e) {
    if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function")
}
function _classCallCheck(t, e) {
    if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function")
}
function _classCallCheck(t, e) {
    if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function")
}
function _classCallCheck(t, e) {
    if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function")
}
function _classCallCheck(t, e) {
    if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function")
}
function _classCallCheck(t, e) {
    if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function")
}
function _classCallCheck(t, e) {
    if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function")
}
function _classCallCheck(t, e) {
    if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function")
}
!function(t) {
    "use strict";
    function e(t) {
        if (void 0 === Function.prototype.name) {
            var e = /function\s([^(]{1,})\(/
              , i = e.exec(t.toString());
            return i && i.length > 1 ? i[1].trim() : ""
        }
        return void 0 === t.prototype ? t.constructor.name : t.prototype.constructor.name
    }
    function i(t) {
        return "true" === t || "false" !== t && (isNaN(1 * t) ? t : parseFloat(t))
    }
    function n(t) {
        return t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
    }
    var s = "6.3.1"
      , o = {
        version: s,
        _plugins: {},
        _uuids: [],
        rtl: function() {
            return "rtl" === t("html").attr("dir")
        },
        plugin: function(t, i) {
            var s = i || e(t)
              , o = n(s);
            this._plugins[o] = this[s] = t
        },
        registerPlugin: function(t, i) {
            var s = i ? n(i) : e(t.constructor).toLowerCase();
            t.uuid = this.GetYoDigits(6, s),
            t.$element.attr("data-" + s) || t.$element.attr("data-" + s, t.uuid),
            t.$element.data("zfPlugin") || t.$element.data("zfPlugin", t),
            t.$element.trigger("init.zf." + s),
            this._uuids.push(t.uuid)
        },
        unregisterPlugin: function(t) {
            var i = n(e(t.$element.data("zfPlugin").constructor));
            this._uuids.splice(this._uuids.indexOf(t.uuid), 1),
            t.$element.removeAttr("data-" + i).removeData("zfPlugin").trigger("destroyed.zf." + i);
            for (var s in t)
                t[s] = null
        },
        reInit: function(e) {
            var i = e instanceof t;
            try {
                if (i)
                    e.each(function() {
                        t(this).data("zfPlugin")._init()
                    });
                else {
                    var s = typeof e
                      , o = this
                      , a = {
                        object: function(e) {
                            e.forEach(function(e) {
                                e = n(e),
                                t("[data-" + e + "]").foundation("_init")
                            })
                        },
                        string: function() {
                            e = n(e),
                            t("[data-" + e + "]").foundation("_init")
                        },
                        undefined: function() {
                            this.object(Object.keys(o._plugins))
                        }
                    };
                    a[s](e)
                }
            } catch (t) {
                console.error(t)
            } finally {
                return e
            }
        },
        GetYoDigits: function(t, e) {
            return t = t || 6,
            Math.round(Math.pow(36, t + 1) - Math.random() * Math.pow(36, t)).toString(36).slice(1) + (e ? "-" + e : "")
        },
        reflow: function(e, n) {
            "undefined" == typeof n ? n = Object.keys(this._plugins) : "string" == typeof n && (n = [n]);
            var s = this;
            t.each(n, function(n, o) {
                var a = s._plugins[o]
                  , r = t(e).find("[data-" + o + "]").addBack("[data-" + o + "]");
                r.each(function() {
                    var e = t(this)
                      , n = {};
                    if (e.data("zfPlugin"))
                        return void console.warn("Tried to initialize " + o + " on an element that already has a Foundation plugin.");
                    if (e.attr("data-options")) {
                        e.attr("data-options").split(";").forEach(function(t, e) {
                            var s = t.split(":").map(function(t) {
                                return t.trim()
                            });
                            s[0] && (n[s[0]] = i(s[1]))
                        })
                    }
                    try {
                        e.data("zfPlugin", new a(t(this),n))
                    } catch (t) {
                        console.error(t)
                    } finally {
                        return
                    }
                })
            })
        },
        getFnName: e,
        transitionend: function(t) {
            var e, i = {
                transition: "transitionend",
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "otransitionend"
            }, n = document.createElement("div");
            for (var s in i)
                "undefined" != typeof n.style[s] && (e = i[s]);
            return e ? e : (e = setTimeout(function() {
                t.triggerHandler("transitionend", [t])
            }, 1),
            "transitionend")
        }
    };
    o.util = {
        throttle: function(t, e) {
            var i = null;
            return function() {
                var n = this
                  , s = arguments;
                null === i && (i = setTimeout(function() {
                    t.apply(n, s),
                    i = null
                }, e))
            }
        }
    };
    var a = function(i) {
        var n = typeof i
          , s = t("meta.foundation-mq")
          , a = t(".no-js");
        if (s.length || t('<meta class="foundation-mq">').appendTo(document.head),
        a.length && a.removeClass("no-js"),
        "undefined" === n)
            o.MediaQuery._init(),
            o.reflow(this);
        else {
            if ("string" !== n)
                throw new TypeError("We're sorry, " + n + " is not a valid parameter. You must use a string representing the method you wish to invoke.");
            var r = Array.prototype.slice.call(arguments, 1)
              , l = this.data("zfPlugin");
            if (void 0 === l || void 0 === l[i])
                throw new ReferenceError("We're sorry, '" + i + "' is not an available method for " + (l ? e(l) : "this element") + ".");
            1 === this.length ? l[i].apply(l, r) : this.each(function(e, n) {
                l[i].apply(t(n).data("zfPlugin"), r)
            })
        }
        return this
    };
    window.Foundation = o,
    t.fn.foundation = a,
    function() {
        Date.now && window.Date.now || (window.Date.now = Date.now = function() {
            return (new Date).getTime()
        }
        );
        for (var t = ["webkit", "moz"], e = 0; e < t.length && !window.requestAnimationFrame; ++e) {
            var i = t[e];
            window.requestAnimationFrame = window[i + "RequestAnimationFrame"],
            window.cancelAnimationFrame = window[i + "CancelAnimationFrame"] || window[i + "CancelRequestAnimationFrame"]
        }
        if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
            var n = 0;
            window.requestAnimationFrame = function(t) {
                var e = Date.now()
                  , i = Math.max(n + 16, e);
                return setTimeout(function() {
                    t(n = i)
                }, i - e)
            }
            ,
            window.cancelAnimationFrame = clearTimeout
        }
        window.performance && window.performance.now || (window.performance = {
            start: Date.now(),
            now: function() {
                return Date.now() - this.start
            }
        })
    }(),
    Function.prototype.bind || (Function.prototype.bind = function(t) {
        if ("function" != typeof this)
            throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
        var e = Array.prototype.slice.call(arguments, 1)
          , i = this
          , n = function() {}
          , s = function() {
            return i.apply(this instanceof n ? this : t, e.concat(Array.prototype.slice.call(arguments)))
        };
        return this.prototype && (n.prototype = this.prototype),
        s.prototype = new n,
        s
    }
    )
}(jQuery),
!function(t) {
    function e(t) {
        var e = {};
        return "string" != typeof t ? e : (t = t.trim().slice(1, -1)) ? e = t.split("&").reduce(function(t, e) {
            var i = e.replace(/\+/g, " ").split("=")
              , n = i[0]
              , s = i[1];
            return n = decodeURIComponent(n),
            s = void 0 === s ? null : decodeURIComponent(s),
            t.hasOwnProperty(n) ? Array.isArray(t[n]) ? t[n].push(s) : t[n] = [t[n], s] : t[n] = s,
            t
        }, {}) : e
    }
    var i = {
        queries: [],
        current: "",
        _init: function() {
            var i, n = this, s = t(".foundation-mq").css("font-family");
            i = e(s);
            for (var o in i)
                i.hasOwnProperty(o) && n.queries.push({
                    name: o,
                    value: "only screen and (min-width: " + i[o] + ")"
                });
            this.current = this._getCurrentSize(),
            this._watcher()
        },
        atLeast: function(t) {
            var e = this.get(t);
            return !!e && window.matchMedia(e).matches
        },
        is: function(t) {
            return t = t.trim().split(" "),
            t.length > 1 && "only" === t[1] ? t[0] === this._getCurrentSize() : this.atLeast(t[0])
        },
        get: function(t) {
            for (var e in this.queries)
                if (this.queries.hasOwnProperty(e)) {
                    var i = this.queries[e];
                    if (t === i.name)
                        return i.value
                }
            return null
        },
        _getCurrentSize: function() {
            for (var t, e = 0; e < this.queries.length; e++) {
                var i = this.queries[e];
                window.matchMedia(i.value).matches && (t = i)
            }
            return "object" == typeof t ? t.name : t
        },
        _watcher: function() {
            var e = this;
            t(window).on("resize.zf.mediaquery", function() {
                var i = e._getCurrentSize()
                  , n = e.current;
                i !== n && (e.current = i,
                t(window).trigger("changed.zf.mediaquery", [i, n]))
            })
        }
    };
    Foundation.MediaQuery = i,
    window.matchMedia || (window.matchMedia = function() {
        "use strict";
        var t = window.styleMedia || window.media;
        if (!t) {
            var e = document.createElement("style")
              , i = document.getElementsByTagName("script")[0]
              , n = null;
            e.type = "text/css",
            e.id = "matchmediajs-test",
            i && i.parentNode && i.parentNode.insertBefore(e, i),
            n = "getComputedStyle"in window && window.getComputedStyle(e, null) || e.currentStyle,
            t = {
                matchMedium: function(t) {
                    var i = "@media " + t + "{ #matchmediajs-test { width: 1px; } }";
                    return e.styleSheet ? e.styleSheet.cssText = i : e.textContent = i,
                    "1px" === n.width
                }
            }
        }
        return function(e) {
            return {
                matches: t.matchMedium(e || "all"),
                media: e || "all"
            }
        }
    }()),
    Foundation.MediaQuery = i
}(jQuery),
!function(t) {
    function e(t) {
        var e = {};
        for (var i in t)
            e[t[i]] = t[i];
        return e
    }
    var i = {
        9: "TAB",
        13: "ENTER",
        27: "ESCAPE",
        32: "SPACE",
        37: "ARROW_LEFT",
        38: "ARROW_UP",
        39: "ARROW_RIGHT",
        40: "ARROW_DOWN"
    }
      , n = {}
      , s = {
        keys: e(i),
        parseKey: function(t) {
            var e = i[t.which || t.keyCode] || String.fromCharCode(t.which).toUpperCase();
            return e = e.replace(/\W+/, ""),
            t.shiftKey && (e = "SHIFT_" + e),
            t.ctrlKey && (e = "CTRL_" + e),
            t.altKey && (e = "ALT_" + e),
            e = e.replace(/_$/, "")
        },
        handleKey: function(e, i, s) {
            var o, a, r, l = n[i], h = this.parseKey(e);
            if (!l)
                return console.warn("Component not defined!");
            if (o = "undefined" == typeof l.ltr ? l : Foundation.rtl() ? t.extend({}, l.ltr, l.rtl) : t.extend({}, l.rtl, l.ltr),
            a = o[h],
            r = s[a],
            r && "function" == typeof r) {
                var u = r.apply();
                (s.handled || "function" == typeof s.handled) && s.handled(u)
            } else
                (s.unhandled || "function" == typeof s.unhandled) && s.unhandled()
        },
        findFocusable: function(e) {
            return !!e && e.find("a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]").filter(function() {
                return !(!t(this).is(":visible") || t(this).attr("tabindex") < 0)
            })
        },
        register: function(t, e) {
            n[t] = e
        },
        trapFocus: function(t) {
            var e = Foundation.Keyboard.findFocusable(t)
              , i = e.eq(0)
              , n = e.eq(-1);
            t.on("keydown.zf.trapfocus", function(t) {
                t.target === n[0] && "TAB" === Foundation.Keyboard.parseKey(t) ? (t.preventDefault(),
                i.focus()) : t.target === i[0] && "SHIFT_TAB" === Foundation.Keyboard.parseKey(t) && (t.preventDefault(),
                n.focus())
            })
        },
        releaseFocus: function(t) {
            t.off("keydown.zf.trapfocus")
        }
    };
    Foundation.Keyboard = s
}(jQuery),
!function(t) {
    function e(t, e, i) {
        function n(r) {
            a || (a = r),
            o = r - a,
            i.apply(e),
            o < t ? s = window.requestAnimationFrame(n, e) : (window.cancelAnimationFrame(s),
            e.trigger("finished.zf.animate", [e]).triggerHandler("finished.zf.animate", [e]))
        }
        var s, o, a = null;
        return 0 === t ? (i.apply(e),
        void e.trigger("finished.zf.animate", [e]).triggerHandler("finished.zf.animate", [e])) : void (s = window.requestAnimationFrame(n))
    }
    function i(e, i, o, a) {
        function r() {
            e || i.hide(),
            l(),
            a && a.apply(i)
        }
        function l() {
            i[0].style.transitionDuration = 0,
            i.removeClass(h + " " + u + " " + o)
        }
        if (i = t(i).eq(0),
        i.length) {
            var h = e ? n[0] : n[1]
              , u = e ? s[0] : s[1];
            l(),
            i.addClass(o).css("transition", "none"),
            requestAnimationFrame(function() {
                i.addClass(h),
                e && i.show()
            }),
            requestAnimationFrame(function() {
                i[0].offsetWidth,
                i.css("transition", "").addClass(u)
            }),
            i.one(Foundation.transitionend(i), r)
        }
    }
    var n = ["mui-enter", "mui-leave"]
      , s = ["mui-enter-active", "mui-leave-active"]
      , o = {
        animateIn: function(t, e, n) {
            i(!0, t, e, n)
        },
        animateOut: function(t, e, n) {
            i(!1, t, e, n)
        }
    };
    Foundation.Move = e,
    Foundation.Motion = o
}(jQuery),
!function(t) {
    var e = {
        Feather: function(e) {
            var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "zf";
            e.attr("role", "menubar");
            var n = e.find("li").attr({
                role: "menuitem"
            })
              , s = "is-" + i + "-submenu"
              , o = s + "-item"
              , a = "is-" + i + "-submenu-parent";
            n.each(function() {
                var e = t(this)
                  , n = e.children("ul");
                n.length && (e.addClass(a).attr({
                    "aria-haspopup": !0,
                    "aria-label": e.children("a:first").text()
                }),
                "drilldown" === i && e.attr({
                    "aria-expanded": !1
                }),
                n.addClass("submenu " + s).attr({
                    "data-submenu": "",
                    role: "menu"
                }),
                "drilldown" === i && n.attr({
                    "aria-hidden": !0
                })),
                e.parent("[data-submenu]").length && e.addClass("is-submenu-item " + o)
            })
        },
        Burn: function(t, e) {
            var i = "is-" + e + "-submenu"
              , n = i + "-item"
              , s = "is-" + e + "-submenu-parent";
            t.find(">li, .menu, .menu > li").removeClass(i + " " + n + " " + s + " is-submenu-item submenu is-active").removeAttr("data-submenu").css("display", "")
        }
    };
    Foundation.Nest = e
}(jQuery),
!function(t) {
    function e(t, e, n, s) {
        var o, a, r, l, h = i(t);
        if (e) {
            var u = i(e);
            a = h.offset.top + h.height <= u.height + u.offset.top,
            o = h.offset.top >= u.offset.top,
            r = h.offset.left >= u.offset.left,
            l = h.offset.left + h.width <= u.width + u.offset.left
        } else
            a = h.offset.top + h.height <= h.windowDims.height + h.windowDims.offset.top,
            o = h.offset.top >= h.windowDims.offset.top,
            r = h.offset.left >= h.windowDims.offset.left,
            l = h.offset.left + h.width <= h.windowDims.width;
        var d = [a, o, r, l];
        return n ? r === l == !0 : s ? o === a == !0 : d.indexOf(!1) === -1
    }
    function i(t, e) {
        if (t = t.length ? t[0] : t,
        t === window || t === document)
            throw new Error("I'm sorry, Dave. I'm afraid I can't do that.");
        var i = t.getBoundingClientRect()
          , n = t.parentNode.getBoundingClientRect()
          , s = document.body.getBoundingClientRect()
          , o = window.pageYOffset
          , a = window.pageXOffset;
        return {
            width: i.width,
            height: i.height,
            offset: {
                top: i.top + o,
                left: i.left + a
            },
            parentDims: {
                width: n.width,
                height: n.height,
                offset: {
                    top: n.top + o,
                    left: n.left + a
                }
            },
            windowDims: {
                width: s.width,
                height: s.height,
                offset: {
                    top: o,
                    left: a
                }
            }
        }
    }
    function n(t, e, n, s, o, a) {
        var r = i(t)
          , l = e ? i(e) : null;
        switch (n) {
        case "top":
            return {
                left: Foundation.rtl() ? l.offset.left - r.width + l.width : l.offset.left,
                top: l.offset.top - (r.height + s)
            };
        case "left":
            return {
                left: l.offset.left - (r.width + o),
                top: l.offset.top
            };
        case "right":
            return {
                left: l.offset.left + l.width + o,
                top: l.offset.top
            };
        case "center top":
            return {
                left: l.offset.left + l.width / 2 - r.width / 2,
                top: l.offset.top - (r.height + s)
            };
        case "center bottom":
            return {
                left: a ? o : l.offset.left + l.width / 2 - r.width / 2,
                top: l.offset.top + l.height + s
            };
        case "center left":
            return {
                left: l.offset.left - (r.width + o),
                top: l.offset.top + l.height / 2 - r.height / 2
            };
        case "center right":
            return {
                left: l.offset.left + l.width + o + 1,
                top: l.offset.top + l.height / 2 - r.height / 2
            };
        case "center":
            return {
                left: r.windowDims.offset.left + r.windowDims.width / 2 - r.width / 2,
                top: r.windowDims.offset.top + r.windowDims.height / 2 - r.height / 2
            };
        case "reveal":
            return {
                left: (r.windowDims.width - r.width) / 2,
                top: r.windowDims.offset.top + s
            };
        case "reveal full":
            return {
                left: r.windowDims.offset.left,
                top: r.windowDims.offset.top
            };
        case "left bottom":
            return {
                left: l.offset.left,
                top: l.offset.top + l.height + s
            };
        case "right bottom":
            return {
                left: l.offset.left + l.width + o - r.width,
                top: l.offset.top + l.height + s
            };
        default:
            return {
                left: Foundation.rtl() ? l.offset.left - r.width + l.width : l.offset.left + o,
                top: l.offset.top + l.height + s
            }
        }
    }
    Foundation.Box = {
        ImNotTouchingYou: e,
        GetDimensions: i,
        GetOffsets: n
    }
}(jQuery),
!function(t) {
    function e() {
        a(),
        n(),
        s(),
        o(),
        i()
    }
    function i(e) {
        var i = t("[data-yeti-box]")
          , n = ["dropdown", "tooltip", "reveal"];
        if (e && ("string" == typeof e ? n.push(e) : "object" == typeof e && "string" == typeof e[0] ? n.concat(e) : console.error("Plugin names must be strings")),
        i.length) {
            var s = n.map(function(t) {
                return "closeme.zf." + t
            }).join(" ");
            t(window).off(s).on(s, function(e, i) {
                var n = e.namespace.split(".")[0]
                  , s = t("[data-" + n + "]").not('[data-yeti-box="' + i + '"]');
                s.each(function() {
                    var e = t(this);
                    e.triggerHandler("close.zf.trigger", [e])
                })
            })
        }
    }
    function n(e) {
        var i = void 0
          , n = t("[data-resize]");
        n.length && t(window).off("resize.zf.trigger").on("resize.zf.trigger", function(s) {
            i && clearTimeout(i),
            i = setTimeout(function() {
                r || n.each(function() {
                    t(this).triggerHandler("resizeme.zf.trigger")
                }),
                n.attr("data-events", "resize")
            }, e || 10)
        })
    }
    function s(e) {
        var i = void 0
          , n = t("[data-scroll]");
        n.length && t(window).off("scroll.zf.trigger").on("scroll.zf.trigger", function(s) {
            i && clearTimeout(i),
            i = setTimeout(function() {
                r || n.each(function() {
                    t(this).triggerHandler("scrollme.zf.trigger")
                }),
                n.attr("data-events", "scroll")
            }, e || 10)
        })
    }
    function o(e) {
        var i = t("[data-mutate]");
        i.length && r && i.each(function() {
            t(this).triggerHandler("mutateme.zf.trigger")
        })
    }
    function a() {
        if (!r)
            return !1;
        var e = document.querySelectorAll("[data-resize], [data-scroll], [data-mutate]")
          , i = function(e) {
            var i = t(e[0].target);
            switch (e[0].type) {
            case "attributes":
                "scroll" === i.attr("data-events") && "data-events" === e[0].attributeName && i.triggerHandler("scrollme.zf.trigger", [i, window.pageYOffset]),
                "resize" === i.attr("data-events") && "data-events" === e[0].attributeName && i.triggerHandler("resizeme.zf.trigger", [i]),
                "style" === e[0].attributeName && (i.closest("[data-mutate]").attr("data-events", "mutate"),
                i.closest("[data-mutate]").triggerHandler("mutateme.zf.trigger", [i.closest("[data-mutate]")]));
                break;
            case "childList":
                i.closest("[data-mutate]").attr("data-events", "mutate"),
                i.closest("[data-mutate]").triggerHandler("mutateme.zf.trigger", [i.closest("[data-mutate]")]);
                break;
            default:
                return !1
            }
        };
        if (e.length)
            for (var n = 0; n <= e.length - 1; n++) {
                var s = new r(i);
                s.observe(e[n], {
                    attributes: !0,
                    childList: !0,
                    characterData: !1,
                    subtree: !0,
                    attributeFilter: ["data-events", "style"]
                })
            }
    }
    var r = function() {
        for (var t = ["WebKit", "Moz", "O", "Ms", ""], e = 0; e < t.length; e++)
            if (t[e] + "MutationObserver"in window)
                return window[t[e] + "MutationObserver"];
        return !1
    }()
      , l = function(e, i) {
        e.data(i).split(" ").forEach(function(n) {
            t("#" + n)["close" === i ? "trigger" : "triggerHandler"](i + ".zf.trigger", [e])
        })
    };
    t(document).on("click.zf.trigger", "[data-open]", function() {
        l(t(this), "open")
    }),
    t(document).on("click.zf.trigger", "[data-close]", function() {
        var e = t(this).data("close");
        e ? l(t(this), "close") : t(this).trigger("close.zf.trigger")
    }),
    t(document).on("click.zf.trigger", "[data-toggle]", function() {
        var e = t(this).data("toggle");
        e ? l(t(this), "toggle") : t(this).trigger("toggle.zf.trigger")
    }),
    t(document).on("close.zf.trigger", "[data-closable]", function(e) {
        e.stopPropagation();
        var i = t(this).data("closable");
        "" !== i ? Foundation.Motion.animateOut(t(this), i, function() {
            t(this).trigger("closed.zf")
        }) : t(this).fadeOut().trigger("closed.zf")
    }),
    t(document).on("focus.zf.trigger blur.zf.trigger", "[data-toggle-focus]", function() {
        var e = t(this).data("toggle-focus");
        t("#" + e).triggerHandler("toggle.zf.trigger", [t(this)])
    }),
    t(window).on("load", function() {
        e()
    }),
    Foundation.IHearYou = e
}(jQuery),
!function(t) {
    function e(t, e, i) {
        var n, s, o = this, a = e.duration, r = Object.keys(t.data())[0] || "timer", l = -1;
        this.isPaused = !1,
        this.restart = function() {
            l = -1,
            clearTimeout(s),
            this.start()
        }
        ,
        this.start = function() {
            this.isPaused = !1,
            clearTimeout(s),
            l = l <= 0 ? a : l,
            t.data("paused", !1),
            n = Date.now(),
            s = setTimeout(function() {
                e.infinite && o.restart(),
                i && "function" == typeof i && i()
            }, l),
            t.trigger("timerstart.zf." + r)
        }
        ,
        this.pause = function() {
            this.isPaused = !0,
            clearTimeout(s),
            t.data("paused", !0);
            var e = Date.now();
            l -= e - n,
            t.trigger("timerpaused.zf." + r)
        }
    }
    function i(e, i) {
        function n() {
            s--,
            0 === s && i()
        }
        var s = e.length;
        0 === s && i(),
        e.each(function() {
            if (this.complete || 4 === this.readyState || "complete" === this.readyState)
                n();
            else {
                var e = t(this).attr("src");
                t(this).attr("src", e + (e.indexOf("?") >= 0 ? "&" : "?") + (new Date).getTime()),
                t(this).one("load", function() {
                    n()
                })
            }
        })
    }
    Foundation.Timer = e,
    Foundation.onImagesLoaded = i
}(jQuery),
function(t) {
    function e() {
        this.removeEventListener("touchmove", i),
        this.removeEventListener("touchend", e),
        h = !1
    }
    function i(i) {
        if (t.spotSwipe.preventDefault && i.preventDefault(),
        h) {
            var n, s = i.touches[0].pageX, a = (i.touches[0].pageY,
            o - s);
            l = (new Date).getTime() - r,
            Math.abs(a) >= t.spotSwipe.moveThreshold && l <= t.spotSwipe.timeThreshold && (n = a > 0 ? "left" : "right"),
            n && (i.preventDefault(),
            e.call(this),
            t(this).trigger("swipe", n).trigger("swipe" + n))
        }
    }
    function n(t) {
        1 == t.touches.length && (o = t.touches[0].pageX,
        a = t.touches[0].pageY,
        h = !0,
        r = (new Date).getTime(),
        this.addEventListener("touchmove", i, !1),
        this.addEventListener("touchend", e, !1))
    }
    function s() {
        this.addEventListener && this.addEventListener("touchstart", n, !1)
    }
    t.spotSwipe = {
        version: "1.0.0",
        enabled: "ontouchstart"in document.documentElement,
        preventDefault: !1,
        moveThreshold: 75,
        timeThreshold: 200
    };
    var o, a, r, l, h = !1;
    t.event.special.swipe = {
        setup: s
    },
    t.each(["left", "up", "down", "right"], function() {
        t.event.special["swipe" + this] = {
            setup: function() {
                t(this).on("swipe", t.noop)
            }
        }
    })
}(jQuery),
!function(t) {
    t.fn.addTouch = function() {
        this.each(function(i, n) {
            t(n).bind("touchstart touchmove touchend touchcancel", function() {
                e(event)
            })
        });
        var e = function(t) {
            var e, i = t.changedTouches, n = i[0], s = {
                touchstart: "mousedown",
                touchmove: "mousemove",
                touchend: "mouseup"
            }, o = s[t.type];
            "MouseEvent"in window && "function" == typeof window.MouseEvent ? e = new window.MouseEvent(o,{
                bubbles: !0,
                cancelable: !0,
                screenX: n.screenX,
                screenY: n.screenY,
                clientX: n.clientX,
                clientY: n.clientY
            }) : (e = document.createEvent("MouseEvent"),
            e.initMouseEvent(o, !0, !0, window, 1, n.screenX, n.screenY, n.clientX, n.clientY, !1, !1, !1, !1, 0, null)),
            n.target.dispatchEvent(e)
        }
    }
}(jQuery);
var _createClass = function() {
    function t(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(t, n.key, n)
        }
    }
    return function(e, i, n) {
        return i && t(e.prototype, i),
        n && t(e, n),
        e
    }
}();
!function(t) {
    var e = function() {
        function e(i) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            _classCallCheck(this, e),
            this.$element = i,
            this.options = t.extend({}, e.defaults, this.$element.data(), n),
            this._init(),
            Foundation.registerPlugin(this, "Abide")
        }
        return _createClass(e, [{
            key: "_init",
            value: function() {
                this.$inputs = this.$element.find("input, textarea, select"),
                this._events()
            }
        }, {
            key: "_events",
            value: function() {
                var e = this;
                this.$element.off(".abide").on("reset.zf.abide", function() {
                    e.resetForm()
                }).on("submit.zf.abide", function() {
                    return e.validateForm()
                }),
                "fieldChange" === this.options.validateOn && this.$inputs.off("change.zf.abide").on("change.zf.abide", function(i) {
                    e.validateInput(t(i.target))
                }),
                this.options.liveValidate && this.$inputs.off("input.zf.abide").on("input.zf.abide", function(i) {
                    e.validateInput(t(i.target))
                }),
                this.options.validateOnBlur && this.$inputs.off("blur.zf.abide").on("blur.zf.abide", function(i) {
                    e.validateInput(t(i.target))
                })
            }
        }, {
            key: "_reflow",
            value: function() {
                this._init()
            }
        }, {
            key: "requiredCheck",
            value: function(t) {
                if (!t.attr("required"))
                    return !0;
                var e = !0;
                switch (t[0].type) {
                case "checkbox":
                    e = t[0].checked;
                    break;
                case "select":
                case "select-one":
                case "select-multiple":
                    var i = t.find("option:selected");
                    i.length && i.val() || (e = !1);
                    break;
                default:
                    t.val() && t.val().length || (e = !1)
                }
                return e
            }
        }, {
            key: "findFormError",
            value: function(t) {
                var e = t.siblings(this.options.formErrorSelector);
                return e.length || (e = t.parent().find(this.options.formErrorSelector)),
                e
            }
        }, {
            key: "findLabel",
            value: function(t) {
                var e = t[0].id
                  , i = this.$element.find('label[for="' + e + '"]');
                return i.length ? i : t.closest("label")
            }
        }, {
            key: "findRadioLabels",
            value: function(e) {
                var i = this
                  , n = e.map(function(e, n) {
                    var s = n.id
                      , o = i.$element.find('label[for="' + s + '"]');
                    return o.length || (o = t(n).closest("label")),
                    o[0]
                });
                return t(n)
            }
        }, {
            key: "addErrorClasses",
            value: function(t) {
                var e = this.findLabel(t)
                  , i = this.findFormError(t);
                e.length && e.addClass(this.options.labelErrorClass),
                i.length && i.addClass(this.options.formErrorClass),
                t.addClass(this.options.inputErrorClass).attr("data-invalid", "")
            }
        }, {
            key: "removeRadioErrorClasses",
            value: function(t) {
                var e = this.$element.find(':radio[name="' + t + '"]')
                  , i = this.findRadioLabels(e)
                  , n = this.findFormError(e);
                i.length && i.removeClass(this.options.labelErrorClass),
                n.length && n.removeClass(this.options.formErrorClass),
                e.removeClass(this.options.inputErrorClass).removeAttr("data-invalid")
            }
        }, {
            key: "removeErrorClasses",
            value: function(t) {
                if ("radio" == t[0].type)
                    return this.removeRadioErrorClasses(t.attr("name"));
                var e = this.findLabel(t)
                  , i = this.findFormError(t);
                e.length && e.removeClass(this.options.labelErrorClass),
                i.length && i.removeClass(this.options.formErrorClass),
                t.removeClass(this.options.inputErrorClass).removeAttr("data-invalid")
            }
        }, {
            key: "validateInput",
            value: function(e) {
                var i = this
                  , n = this.requiredCheck(e)
                  , s = !1
                  , o = !0
                  , a = e.attr("data-validator")
                  , r = !0;
                if (e.is("[data-abide-ignore]") || e.is('[type="hidden"]') || e.is("[disabled]"))
                    return !0;
                switch (e[0].type) {
                case "radio":
                    s = this.validateRadio(e.attr("name"));
                    break;
                case "checkbox":
                    s = n;
                    break;
                case "select":
                case "select-one":
                case "select-multiple":
                    s = n;
                    break;
                default:
                    s = this.validateText(e)
                }
                a && (o = this.matchValidation(e, a, e.attr("required"))),
                e.attr("data-equalto") && (r = this.options.validators.equalTo(e));
                var l = [n, s, o, r].indexOf(!1) === -1
                  , h = (l ? "valid" : "invalid") + ".zf.abide";
                if (l) {
                    var u = this.$element.find('[data-equalto="' + e.attr("id") + '"]');
                    u.length && !function() {
                        var e = i;
                        u.each(function() {
                            t(this).val() && e.validateInput(t(this))
                        })
                    }()
                }
                return this[l ? "removeErrorClasses" : "addErrorClasses"](e),
                e.trigger(h, [e]),
                l
            }
        }, {
            key: "validateForm",
            value: function() {
                var e = []
                  , i = this;
                this.$inputs.each(function() {
                    e.push(i.validateInput(t(this)))
                });
                var n = e.indexOf(!1) === -1;
                return this.$element.find("[data-abide-error]").css("display", n ? "none" : "block"),
                this.$element.trigger((n ? "formvalid" : "forminvalid") + ".zf.abide", [this.$element]),
                n
            }
        }, {
            key: "validateText",
            value: function(t, e) {
                e = e || t.attr("pattern") || t.attr("type");
                var i = t.val()
                  , n = !1;
                return i.length ? n = this.options.patterns.hasOwnProperty(e) ? this.options.patterns[e].test(i) : e === t.attr("type") || new RegExp(e).test(i) : t.prop("required") || (n = !0),
                n
            }
        }, {
            key: "validateRadio",
            value: function(e) {
                var i = this.$element.find(':radio[name="' + e + '"]')
                  , n = !1
                  , s = !1;
                return i.each(function(e, i) {
                    t(i).attr("required") && (s = !0)
                }),
                s || (n = !0),
                n || i.each(function(e, i) {
                    t(i).prop("checked") && (n = !0)
                }),
                n
            }
        }, {
            key: "matchValidation",
            value: function(t, e, i) {
                var n = this;
                i = !!i;
                var s = e.split(" ").map(function(e) {
                    return n.options.validators[e](t, i, t.parent())
                });
                return s.indexOf(!1) === -1
            }
        }, {
            key: "resetForm",
            value: function() {
                var e = this.$element
                  , i = this.options;
                t("." + i.labelErrorClass, e).not("small").removeClass(i.labelErrorClass),
                t("." + i.inputErrorClass, e).not("small").removeClass(i.inputErrorClass),
                t(i.formErrorSelector + "." + i.formErrorClass).removeClass(i.formErrorClass),
                e.find("[data-abide-error]").css("display", "none"),
                t(":input", e).not(":button, :submit, :reset, :hidden, :radio, :checkbox, [data-abide-ignore]").val("").removeAttr("data-invalid"),
                t(":input:radio", e).not("[data-abide-ignore]").prop("checked", !1).removeAttr("data-invalid"),
                t(":input:checkbox", e).not("[data-abide-ignore]").prop("checked", !1).removeAttr("data-invalid"),
                e.trigger("formreset.zf.abide", [e])
            }
        }, {
            key: "destroy",
            value: function() {
                var e = this;
                this.$element.off(".abide").find("[data-abide-error]").css("display", "none"),
                this.$inputs.off(".abide").each(function() {
                    e.removeErrorClasses(t(this))
                }),
                Foundation.unregisterPlugin(this)
            }
        }]),
        e
    }();
    e.defaults = {
        validateOn: "fieldChange",
        labelErrorClass: "is-invalid-label",
        inputErrorClass: "is-invalid-input",
        formErrorSelector: ".form-error",
        formErrorClass: "is-visible",
        liveValidate: !1,
        validateOnBlur: !1,
        patterns: {
            alpha: /^[a-zA-Z]+$/,
            alpha_numeric: /^[a-zA-Z0-9]+$/,
            integer: /^[-+]?\d+$/,
            number: /^[-+]?\d*(?:[\.\,]\d+)?$/,
            card: /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,
            cvv: /^([0-9]){3,4}$/,
            email: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/,
            url: /^(https?|ftp|file|ssh):\/\/(((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/,
            domain: /^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,8}$/,
            datetime: /^([0-2][0-9]{3})\-([0-1][0-9])\-([0-3][0-9])T([0-5][0-9])\:([0-5][0-9])\:([0-5][0-9])(Z|([\-\+]([0-1][0-9])\:00))$/,
            date: /(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))$/,
            time: /^(0[0-9]|1[0-9]|2[0-3])(:[0-5][0-9]){2}$/,
            dateISO: /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/,
            month_day_year: /^(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.]\d{4}$/,
            day_month_year: /^(0[1-9]|[12][0-9]|3[01])[- \/.](0[1-9]|1[012])[- \/.]\d{4}$/,
            color: /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/
        },
        validators: {
            equalTo: function(e, i, n) {
                return t("#" + e.attr("data-equalto")).val() === e.val()
            }
        }
    },
    Foundation.plugin(e, "Abide")
}(jQuery);
var _createClass = function() {
    function t(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(t, n.key, n)
        }
    }
    return function(e, i, n) {
        return i && t(e.prototype, i),
        n && t(e, n),
        e
    }
}();
!function(t) {
    var e = function() {
        function e(i, n) {
            _classCallCheck(this, e),
            this.$element = i,
            this.options = t.extend({}, e.defaults, this.$element.data(), n),
            this._init(),
            Foundation.registerPlugin(this, "Accordion"),
            Foundation.Keyboard.register("Accordion", {
                ENTER: "toggle",
                SPACE: "toggle",
                ARROW_DOWN: "next",
                ARROW_UP: "previous"
            })
        }
        return _createClass(e, [{
            key: "_init",
            value: function() {
                this.$element.attr("role", "tablist"),
                this.$tabs = this.$element.children("[data-accordion-item]"),
                this.$tabs.each(function(e, i) {
                    var n = t(i)
                      , s = n.children("[data-tab-content]")
                      , o = s[0].id || Foundation.GetYoDigits(6, "accordion")
                      , a = i.id || o + "-label";
                    n.find("a:first").attr({
                        "aria-controls": o,
                        role: "tab",
                        id: a,
                        "aria-expanded": !1,
                        "aria-selected": !1
                    }),
                    s.attr({
                        role: "tabpanel",
                        "aria-labelledby": a,
                        "aria-hidden": !0,
                        id: o
                    })
                });
                var e = this.$element.find(".is-active").children("[data-tab-content]");
                e.length && this.down(e, !0),
                this._events()
            }
        }, {
            key: "_events",
            value: function() {
                var e = this;
                this.$tabs.each(function() {
                    var i = t(this)
                      , n = i.children("[data-tab-content]");
                    n.length && i.children("a").off("click.zf.accordion keydown.zf.accordion").on("click.zf.accordion", function(t) {
                        t.preventDefault(),
                        e.toggle(n)
                    }).on("keydown.zf.accordion", function(t) {
                        Foundation.Keyboard.handleKey(t, "Accordion", {
                            toggle: function() {
                                e.toggle(n)
                            },
                            next: function() {
                                var t = i.next().find("a").focus();
                                e.options.multiExpand || t.trigger("click.zf.accordion")
                            },
                            previous: function() {
                                var t = i.prev().find("a").focus();
                                e.options.multiExpand || t.trigger("click.zf.accordion")
                            },
                            handled: function() {
                                t.preventDefault(),
                                t.stopPropagation()
                            }
                        })
                    })
                })
            }
        }, {
            key: "toggle",
            value: function(t) {
                t.parent().hasClass("is-active") ? this.up(t) : this.down(t)
            }
        }, {
            key: "down",
            value: function(e, i) {
                var n = this;
                if (e.attr("aria-hidden", !1).parent("[data-tab-content]").addBack().parent().addClass("is-active"),
                !this.options.multiExpand && !i) {
                    var s = this.$element.children(".is-active").children("[data-tab-content]");
                    s.length && this.up(s.not(e))
                }
                e.slideDown(this.options.slideSpeed, function() {
                    n.$element.trigger("down.zf.accordion", [e])
                }),
                t("#" + e.attr("aria-labelledby")).attr({
                    "aria-expanded": !0,
                    "aria-selected": !0
                })
            }
        }, {
            key: "up",
            value: function(e) {
                var i = e.parent().siblings()
                  , n = this;
                (this.options.allowAllClosed || i.hasClass("is-active")) && e.parent().hasClass("is-active") && (e.slideUp(n.options.slideSpeed, function() {
                    n.$element.trigger("up.zf.accordion", [e])
                }),
                e.attr("aria-hidden", !0).parent().removeClass("is-active"),
                t("#" + e.attr("aria-labelledby")).attr({
                    "aria-expanded": !1,
                    "aria-selected": !1
                }))
            }
        }, {
            key: "destroy",
            value: function() {
                this.$element.find("[data-tab-content]").stop(!0).slideUp(0).css("display", ""),
                this.$element.find("a").off(".zf.accordion"),
                Foundation.unregisterPlugin(this)
            }
        }]),
        e
    }();
    e.defaults = {
        slideSpeed: 250,
        multiExpand: !1,
        allowAllClosed: !1
    },
    Foundation.plugin(e, "Accordion")
}(jQuery);
var _createClass = function() {
    function t(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(t, n.key, n)
        }
    }
    return function(e, i, n) {
        return i && t(e.prototype, i),
        n && t(e, n),
        e
    }
}();
!function(t) {
    var e = function() {
        function e(i, n) {
            _classCallCheck(this, e),
            this.$element = i,
            this.options = t.extend({}, e.defaults, this.$element.data(), n),
            Foundation.Nest.Feather(this.$element, "accordion"),
            this._init(),
            Foundation.registerPlugin(this, "AccordionMenu"),
            Foundation.Keyboard.register("AccordionMenu", {
                ENTER: "toggle",
                SPACE: "toggle",
                ARROW_RIGHT: "open",
                ARROW_UP: "up",
                ARROW_DOWN: "down",
                ARROW_LEFT: "close",
                ESCAPE: "closeAll"
            })
        }
        return _createClass(e, [{
            key: "_init",
            value: function() {
                this.$element.find("[data-submenu]").not(".is-active").slideUp(0),
                this.$element.attr({
                    role: "menu",
                    "aria-multiselectable": this.options.multiOpen
                }),
                this.$menuLinks = this.$element.find(".is-accordion-submenu-parent"),
                this.$menuLinks.each(function() {
                    var e = this.id || Foundation.GetYoDigits(6, "acc-menu-link")
                      , i = t(this)
                      , n = i.children("[data-submenu]")
                      , s = n[0].id || Foundation.GetYoDigits(6, "acc-menu")
                      , o = n.hasClass("is-active");
                    i.attr({
                        "aria-controls": s,
                        "aria-expanded": o,
                        role: "menuitem",
                        id: e
                    }),
                    n.attr({
                        "aria-labelledby": e,
                        "aria-hidden": !o,
                        role: "menu",
                        id: s
                    })
                });
                var e = this.$element.find(".is-active");
                if (e.length) {
                    var i = this;
                    e.each(function() {
                        i.down(t(this))
                    })
                }
                this._events()
            }
        }, {
            key: "_events",
            value: function() {
                var e = this;
                this.$element.find("li").each(function() {
                    var i = t(this).children("[data-submenu]");
                    i.length && t(this).children("a").off("click.zf.accordionMenu").on("click.zf.accordionMenu", function(t) {
                        t.preventDefault(),
                        e.toggle(i)
                    })
                }).on("keydown.zf.accordionmenu", function(i) {
                    var n, s, o = t(this), a = o.parent("ul").children("li"), r = o.children("[data-submenu]");
                    a.each(function(e) {
                        if (t(this).is(o))
                            return n = a.eq(Math.max(0, e - 1)).find("a").first(),
                            s = a.eq(Math.min(e + 1, a.length - 1)).find("a").first(),
                            t(this).children("[data-submenu]:visible").length && (s = o.find("li:first-child").find("a").first()),
                            t(this).is(":first-child") ? n = o.parents("li").first().find("a").first() : n.parents("li").first().children("[data-submenu]:visible").length && (n = n.parents("li").find("li:last-child").find("a").first()),
                            void (t(this).is(":last-child") && (s = o.parents("li").first().next("li").find("a").first()))
                    }),
                    Foundation.Keyboard.handleKey(i, "AccordionMenu", {
                        open: function() {
                            r.is(":hidden") && (e.down(r),
                            r.find("li").first().find("a").first().focus())
                        },
                        close: function() {
                            r.length && !r.is(":hidden") ? e.up(r) : o.parent("[data-submenu]").length && (e.up(o.parent("[data-submenu]")),
                            o.parents("li").first().find("a").first().focus())
                        },
                        up: function() {
                            return n.focus(),
                            !0
                        },
                        down: function() {
                            return s.focus(),
                            !0
                        },
                        toggle: function() {
                            o.children("[data-submenu]").length && e.toggle(o.children("[data-submenu]"))
                        },
                        closeAll: function() {
                            e.hideAll()
                        },
                        handled: function(t) {
                            t && i.preventDefault(),
                            i.stopImmediatePropagation()
                        }
                    })
                })
            }
        }, {
            key: "hideAll",
            value: function() {
                this.up(this.$element.find("[data-submenu]"))
            }
        }, {
            key: "showAll",
            value: function() {
                this.down(this.$element.find("[data-submenu]"))
            }
        }, {
            key: "toggle",
            value: function(t) {
                t.is(":animated") || (t.is(":hidden") ? this.down(t) : this.up(t))
            }
        }, {
            key: "down",
            value: function(t) {
                var e = this;
                this.options.multiOpen || this.up(this.$element.find(".is-active").not(t.parentsUntil(this.$element).add(t))),
                t.addClass("is-active").attr({
                    "aria-hidden": !1
                }).parent(".is-accordion-submenu-parent").attr({
                    "aria-expanded": !0
                }),
                t.slideDown(e.options.slideSpeed, function() {
                    e.$element.trigger("down.zf.accordionMenu", [t])
                })
            }
        }, {
            key: "up",
            value: function(t) {
                var e = this;
                t.slideUp(e.options.slideSpeed, function() {
                    e.$element.trigger("up.zf.accordionMenu", [t])
                });
                var i = t.find("[data-submenu]").slideUp(0).addBack().attr("aria-hidden", !0);
                i.parent(".is-accordion-submenu-parent").attr("aria-expanded", !1)
            }
        }, {
            key: "destroy",
            value: function() {
                this.$element.find("[data-submenu]").slideDown(0).css("display", ""),
                this.$element.find("a").off("click.zf.accordionMenu"),
                Foundation.Nest.Burn(this.$element, "accordion"),
                Foundation.unregisterPlugin(this)
            }
        }]),
        e
    }();
    e.defaults = {
        slideSpeed: 250,
        multiOpen: !0
    },
    Foundation.plugin(e, "AccordionMenu")
}(jQuery);
var _createClass = function() {
    function t(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(t, n.key, n)
        }
    }
    return function(e, i, n) {
        return i && t(e.prototype, i),
        n && t(e, n),
        e
    }
}();
!function(t) {
    var e = function() {
        function e(i, n) {
            _classCallCheck(this, e),
            this.$element = i,
            this.options = t.extend({}, e.defaults, this.$element.data(), n),
            Foundation.Nest.Feather(this.$element, "drilldown"),
            this._init(),
            Foundation.registerPlugin(this, "Drilldown"),
            Foundation.Keyboard.register("Drilldown", {
                ENTER: "open",
                SPACE: "open",
                ARROW_RIGHT: "next",
                ARROW_UP: "up",
                ARROW_DOWN: "down",
                ARROW_LEFT: "previous",
                ESCAPE: "close",
                TAB: "down",
                SHIFT_TAB: "up"
            })
        }
        return _createClass(e, [{
            key: "_init",
            value: function() {
                this.$submenuAnchors = this.$element.find("li.is-drilldown-submenu-parent").children("a"),
                this.$submenus = this.$submenuAnchors.parent("li").children("[data-submenu]"),
                this.$menuItems = this.$element.find("li").not(".js-drilldown-back").attr("role", "menuitem").find("a"),
                this.$element.attr("data-mutate", this.$element.attr("data-drilldown") || Foundation.GetYoDigits(6, "drilldown")),
                this._prepareMenu(),
                this._registerEvents(),
                this._keyboardEvents()
            }
        }, {
            key: "_prepareMenu",
            value: function() {
                var e = this;
                this.$submenuAnchors.each(function() {
                    var i = t(this)
                      , n = i.parent();
                    e.options.parentLink && i.clone().prependTo(n.children("[data-submenu]")).wrap('<li class="is-submenu-parent-item is-submenu-item is-drilldown-submenu-item" role="menu-item"></li>'),
                    i.data("savedHref", i.attr("href")).removeAttr("href").attr("tabindex", 0),
                    i.children("[data-submenu]").attr({
                        "aria-hidden": !0,
                        tabindex: 0,
                        role: "menu"
                    }),
                    e._events(i)
                }),
                this.$submenus.each(function() {
                    var i = t(this)
                      , n = i.find(".js-drilldown-back");
                    if (!n.length)
                        switch (e.options.backButtonPosition) {
                        case "bottom":
                            i.append(e.options.backButton);
                            break;
                        case "top":
                            i.prepend(e.options.backButton);
                            break;
                        default:
                            console.error("Unsupported backButtonPosition value '" + e.options.backButtonPosition + "'")
                        }
                    e._back(i)
                }),
                this.$submenus.addClass("invisible"),
                this.options.autoHeight || this.$submenus.addClass("drilldown-submenu-cover-previous"),
                this.$element.parent().hasClass("is-drilldown") || (this.$wrapper = t(this.options.wrapper).addClass("is-drilldown"),
                this.options.animateHeight && this.$wrapper.addClass("animate-height"),
                this.$element.wrap(this.$wrapper)),
                this.$wrapper = this.$element.parent(),
                this.$wrapper.css(this._getMaxDims())
            }
        }, {
            key: "_resize",
            value: function() {
                this.$wrapper.css({
                    "max-width": "none",
                    "min-height": "none"
                }),
                this.$wrapper.css(this._getMaxDims())
            }
        }, {
            key: "_events",
            value: function(e) {
                var i = this;
                e.off("click.zf.drilldown").on("click.zf.drilldown", function(n) {
                    if (t(n.target).parentsUntil("ul", "li").hasClass("is-drilldown-submenu-parent") && (n.stopImmediatePropagation(),
                    n.preventDefault()),
                    i._show(e.parent("li")),
                    i.options.closeOnClick) {
                        var s = t("body");
                        s.off(".zf.drilldown").on("click.zf.drilldown", function(e) {
                            e.target === i.$element[0] || t.contains(i.$element[0], e.target) || (e.preventDefault(),
                            i._hideAll(),
                            s.off(".zf.drilldown"))
                        })
                    }
                }),
                this.$element.on("mutateme.zf.trigger", this._resize.bind(this))
            }
        }, {
            key: "_registerEvents",
            value: function() {
                this.options.scrollTop && (this._bindHandler = this._scrollTop.bind(this),
                this.$element.on("open.zf.drilldown hide.zf.drilldown closed.zf.drilldown", this._bindHandler))
            }
        }, {
            key: "_scrollTop",
            value: function() {
                var e = this
                  , i = "" != e.options.scrollTopElement ? t(e.options.scrollTopElement) : e.$element
                  , n = parseInt(i.offset().top + e.options.scrollTopOffset);
                t("html, body").stop(!0).animate({
                    scrollTop: n
                }, e.options.animationDuration, e.options.animationEasing, function() {
                    this === t("html")[0] && e.$element.trigger("scrollme.zf.drilldown")
                })
            }
        }, {
            key: "_keyboardEvents",
            value: function() {
                var e = this;
                this.$menuItems.add(this.$element.find(".js-drilldown-back > a, .is-submenu-parent-item > a")).on("keydown.zf.drilldown", function(i) {
                    var n, s, o = t(this), a = o.parent("li").parent("ul").children("li").children("a");
                    a.each(function(e) {
                        if (t(this).is(o))
                            return n = a.eq(Math.max(0, e - 1)),
                            void (s = a.eq(Math.min(e + 1, a.length - 1)))
                    }),
                    Foundation.Keyboard.handleKey(i, "Drilldown", {
                        next: function() {
                            if (o.is(e.$submenuAnchors))
                                return e._show(o.parent("li")),
                                o.parent("li").one(Foundation.transitionend(o), function() {
                                    o.parent("li").find("ul li a").filter(e.$menuItems).first().focus()
                                }),
                                !0
                        },
                        previous: function() {
                            return e._hide(o.parent("li").parent("ul")),
                            o.parent("li").parent("ul").one(Foundation.transitionend(o), function() {
                                setTimeout(function() {
                                    o.parent("li").parent("ul").parent("li").children("a").first().focus()
                                }, 1)
                            }),
                            !0
                        },
                        up: function() {
                            return n.focus(),
                            !o.is(e.$element.find("> li:first-child > a"))
                        },
                        down: function() {
                            return s.focus(),
                            !o.is(e.$element.find("> li:last-child > a"))
                        },
                        close: function() {
                            o.is(e.$element.find("> li > a")) || (e._hide(o.parent().parent()),
                            o.parent().parent().siblings("a").focus())
                        },
                        open: function() {
                            return o.is(e.$menuItems) ? o.is(e.$submenuAnchors) ? (e._show(o.parent("li")),
                            o.parent("li").one(Foundation.transitionend(o), function() {
                                o.parent("li").find("ul li a").filter(e.$menuItems).first().focus()
                            }),
                            !0) : void 0 : (e._hide(o.parent("li").parent("ul")),
                            o.parent("li").parent("ul").one(Foundation.transitionend(o), function() {
                                setTimeout(function() {
                                    o.parent("li").parent("ul").parent("li").children("a").first().focus()
                                }, 1)
                            }),
                            !0)
                        },
                        handled: function(t) {
                            t && i.preventDefault(),
                            i.stopImmediatePropagation()
                        }
                    })
                })
            }
        }, {
            key: "_hideAll",
            value: function() {
                var t = this.$element.find(".is-drilldown-submenu.is-active").addClass("is-closing");
                this.options.autoHeight && this.$wrapper.css({
                    height: t.parent().closest("ul").data("calcHeight")
                }),
                t.one(Foundation.transitionend(t), function(e) {
                    t.removeClass("is-active is-closing")
                }),
                this.$element.trigger("closed.zf.drilldown")
            }
        }, {
            key: "_back",
            value: function(t) {
                var e = this;
                t.off("click.zf.drilldown"),
                t.children(".js-drilldown-back").on("click.zf.drilldown", function(i) {
                    i.stopImmediatePropagation(),
                    e._hide(t);
                    var n = t.parent("li").parent("ul").parent("li");
                    n.length && e._show(n)
                })
            }
        }, {
            key: "_menuLinkEvents",
            value: function() {
                var t = this;
                this.$menuItems.not(".is-drilldown-submenu-parent").off("click.zf.drilldown").on("click.zf.drilldown", function(e) {
                    setTimeout(function() {
                        t._hideAll()
                    }, 0)
                })
            }
        }, {
            key: "_show",
            value: function(t) {
                this.options.autoHeight && this.$wrapper.css({
                    height: t.children("[data-submenu]").data("calcHeight")
                }),
                t.attr("aria-expanded", !0),
                t.children("[data-submenu]").addClass("is-active").removeClass("invisible").attr("aria-hidden", !1),
                this.$element.trigger("open.zf.drilldown", [t])
            }
        }, {
            key: "_hide",
            value: function(t) {
                this.options.autoHeight && this.$wrapper.css({
                    height: t.parent().closest("ul").data("calcHeight")
                });
                t.parent("li").attr("aria-expanded", !1),
                t.attr("aria-hidden", !0).addClass("is-closing"),
                t.addClass("is-closing").one(Foundation.transitionend(t), function() {
                    t.removeClass("is-active is-closing"),
                    t.blur().addClass("invisible")
                }),
                t.trigger("hide.zf.drilldown", [t])
            }
        }, {
            key: "_getMaxDims",
            value: function() {
                var e = 0
                  , i = {}
                  , n = this;
                return this.$submenus.add(this.$element).each(function() {
                    var s = (t(this).children("li").length,
                    Foundation.Box.GetDimensions(this).height);
                    e = s > e ? s : e,
                    n.options.autoHeight && (t(this).data("calcHeight", s),
                    t(this).hasClass("is-drilldown-submenu") || (i.height = s))
                }),
                this.options.autoHeight || (i["min-height"] = e + "px"),
                i["max-width"] = this.$element[0].getBoundingClientRect().width + "px",
                i
            }
        }, {
            key: "destroy",
            value: function() {
                this.options.scrollTop && this.$element.off(".zf.drilldown", this._bindHandler),
                this._hideAll(),
                this.$element.off("mutateme.zf.trigger"),
                Foundation.Nest.Burn(this.$element, "drilldown"),
                this.$element.unwrap().find(".js-drilldown-back, .is-submenu-parent-item").remove().end().find(".is-active, .is-closing, .is-drilldown-submenu").removeClass("is-active is-closing is-drilldown-submenu").end().find("[data-submenu]").removeAttr("aria-hidden tabindex role"),
                this.$submenuAnchors.each(function() {
                    t(this).off(".zf.drilldown")
                }),
                this.$submenus.removeClass("drilldown-submenu-cover-previous"),
                this.$element.find("a").each(function() {
                    var e = t(this);
                    e.removeAttr("tabindex"),
                    e.data("savedHref") && e.attr("href", e.data("savedHref")).removeData("savedHref")
                }),
                Foundation.unregisterPlugin(this)
            }
        }]),
        e
    }();
    e.defaults = {
        backButton: '<li class="js-drilldown-back"><a tabindex="0">Back</a></li>',
        backButtonPosition: "top",
        wrapper: "<div></div>",
        parentLink: !1,
        closeOnClick: !1,
        autoHeight: !1,
        animateHeight: !1,
        scrollTop: !1,
        scrollTopElement: "",
        scrollTopOffset: 0,
        animationDuration: 500,
        animationEasing: "swing"
    },
    Foundation.plugin(e, "Drilldown")
}(jQuery);
var _createClass = function() {
    function t(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(t, n.key, n)
        }
    }
    return function(e, i, n) {
        return i && t(e.prototype, i),
        n && t(e, n),
        e
    }
}();
!function(t) {
    var e = function() {
        function e(i, n) {
            _classCallCheck(this, e),
            this.$element = i,
            this.options = t.extend({}, e.defaults, this.$element.data(), n),
            this._init(),
            Foundation.registerPlugin(this, "Dropdown"),
            Foundation.Keyboard.register("Dropdown", {
                ENTER: "open",
                SPACE: "open",
                ESCAPE: "close"
            })
        }
        return _createClass(e, [{
            key: "_init",
            value: function() {
                var e = this.$element.attr("id");
                this.$anchor = t(t('[data-toggle="' + e + '"]').length ? '[data-toggle="' + e + '"]' : '[data-open="' + e + '"]'),
                this.$anchor.attr({
                    "aria-controls": e,
                    "data-is-focus": !1,
                    "data-yeti-box": e,
                    "aria-haspopup": !0,
                    "aria-expanded": !1
                }),
                this.options.parentClass ? this.$parent = this.$element.parents("." + this.options.parentClass) : this.$parent = null,
                this.options.positionClass = this.getPositionClass(),
                this.counter = 4,
                this.usedPositions = [],
                this.$element.attr({
                    "aria-hidden": "true",
                    "data-yeti-box": e,
                    "data-resize": e,
                    "aria-labelledby": this.$anchor[0].id || Foundation.GetYoDigits(6, "dd-anchor")
                }),
                this._events()
            }
        }, {
            key: "getPositionClass",
            value: function() {
                var t = this.$element[0].className.match(/(top|left|right|bottom)/g);
                t = t ? t[0] : "";
                var e = /float-(\S+)/.exec(this.$anchor[0].className);
                e = e ? e[1] : "";
                var i = e ? e + " " + t : t;
                return i
            }
        }, {
            key: "_reposition",
            value: function(t) {
                this.usedPositions.push(t ? t : "bottom"),
                !t && this.usedPositions.indexOf("top") < 0 ? this.$element.addClass("top") : "top" === t && this.usedPositions.indexOf("bottom") < 0 ? this.$element.removeClass(t) : "left" === t && this.usedPositions.indexOf("right") < 0 ? this.$element.removeClass(t).addClass("right") : "right" === t && this.usedPositions.indexOf("left") < 0 ? this.$element.removeClass(t).addClass("left") : !t && this.usedPositions.indexOf("top") > -1 && this.usedPositions.indexOf("left") < 0 ? this.$element.addClass("left") : "top" === t && this.usedPositions.indexOf("bottom") > -1 && this.usedPositions.indexOf("left") < 0 ? this.$element.removeClass(t).addClass("left") : "left" === t && this.usedPositions.indexOf("right") > -1 && this.usedPositions.indexOf("bottom") < 0 ? this.$element.removeClass(t) : "right" === t && this.usedPositions.indexOf("left") > -1 && this.usedPositions.indexOf("bottom") < 0 ? this.$element.removeClass(t) : this.$element.removeClass(t),
                this.classChanged = !0,
                this.counter--
            }
        }, {
            key: "_setPosition",
            value: function() {
                if ("false" === this.$anchor.attr("aria-expanded"))
                    return !1;
                var t = this.getPositionClass()
                  , e = Foundation.Box.GetDimensions(this.$element)
                  , i = (Foundation.Box.GetDimensions(this.$anchor),
                "left" === t ? "left" : "right" === t ? "left" : "top")
                  , n = "top" === i ? "height" : "width";
                "height" === n ? this.options.vOffset : this.options.hOffset;
                if (e.width >= e.windowDims.width || !this.counter && !Foundation.Box.ImNotTouchingYou(this.$element, this.$parent)) {
                    var s = e.windowDims.width
                      , o = 0;
                    if (this.$parent) {
                        var a = Foundation.Box.GetDimensions(this.$parent)
                          , o = a.offset.left;
                        a.width < s && (s = a.width)
                    }
                    return this.$element.offset(Foundation.Box.GetOffsets(this.$element, this.$anchor, "center bottom", this.options.vOffset, this.options.hOffset + o, !0)).css({
                        width: s - 2 * this.options.hOffset,
                        height: "auto"
                    }),
                    this.classChanged = !0,
                    !1
                }
                for (this.$element.offset(Foundation.Box.GetOffsets(this.$element, this.$anchor, t, this.options.vOffset, this.options.hOffset)); !Foundation.Box.ImNotTouchingYou(this.$element, this.$parent, !0) && this.counter; )
                    this._reposition(t),
                    this._setPosition()
            }
        }, {
            key: "_events",
            value: function() {
                var e = this;
                this.$element.on({
                    "open.zf.trigger": this.open.bind(this),
                    "close.zf.trigger": this.close.bind(this),
                    "toggle.zf.trigger": this.toggle.bind(this),
                    "resizeme.zf.trigger": this._setPosition.bind(this)
                }),
                this.options.hover && (this.$anchor.off("mouseenter.zf.dropdown mouseleave.zf.dropdown").on("mouseenter.zf.dropdown", function() {
                    var i = t("body").data();
                    "undefined" != typeof i.whatinput && "mouse" !== i.whatinput || (clearTimeout(e.timeout),
                    e.timeout = setTimeout(function() {
                        e.open(),
                        e.$anchor.data("hover", !0)
                    }, e.options.hoverDelay))
                }).on("mouseleave.zf.dropdown", function() {
                    clearTimeout(e.timeout),
                    e.timeout = setTimeout(function() {
                        e.close(),
                        e.$anchor.data("hover", !1)
                    }, e.options.hoverDelay)
                }),
                this.options.hoverPane && this.$element.off("mouseenter.zf.dropdown mouseleave.zf.dropdown").on("mouseenter.zf.dropdown", function() {
                    clearTimeout(e.timeout)
                }).on("mouseleave.zf.dropdown", function() {
                    clearTimeout(e.timeout),
                    e.timeout = setTimeout(function() {
                        e.close(),
                        e.$anchor.data("hover", !1)
                    }, e.options.hoverDelay)
                })),
                this.$anchor.add(this.$element).on("keydown.zf.dropdown", function(i) {
                    var n = t(this);
                    Foundation.Keyboard.findFocusable(e.$element);
                    Foundation.Keyboard.handleKey(i, "Dropdown", {
                        open: function() {
                            n.is(e.$anchor) && (e.open(),
                            e.$element.attr("tabindex", -1).focus(),
                            i.preventDefault())
                        },
                        close: function() {
                            e.close(),
                            e.$anchor.focus()
                        }
                    })
                })
            }
        }, {
            key: "_addBodyHandler",
            value: function() {
                var e = t(document.body).not(this.$element)
                  , i = this;
                e.off("click.zf.dropdown").on("click.zf.dropdown", function(t) {
                    i.$anchor.is(t.target) || i.$anchor.find(t.target).length || i.$element.find(t.target).length || (i.close(),
                    e.off("click.zf.dropdown"))
                })
            }
        }, {
            key: "open",
            value: function() {
                if (this.$element.trigger("closeme.zf.dropdown", this.$element.attr("id")),
                this.$anchor.addClass("hover").attr({
                    "aria-expanded": !0
                }),
                this._setPosition(),
                this.$element.addClass("is-open").attr({
                    "aria-hidden": !1
                }),
                this.options.autoFocus) {
                    var t = Foundation.Keyboard.findFocusable(this.$element);
                    t.length && t.eq(0).focus()
                }
                this.options.closeOnClick && this._addBodyHandler(),
                this.options.trapFocus && Foundation.Keyboard.trapFocus(this.$element),
                this.$element.trigger("show.zf.dropdown", [this.$element])
            }
        }, {
            key: "close",
            value: function() {
                if (!this.$element.hasClass("is-open"))
                    return !1;
                if (this.$element.removeClass("is-open").attr({
                    "aria-hidden": !0
                }),
                this.$anchor.removeClass("hover").attr("aria-expanded", !1),
                this.classChanged) {
                    var t = this.getPositionClass();
                    t && this.$element.removeClass(t),
                    this.$element.addClass(this.options.positionClass).css({
                        height: "",
                        width: ""
                    }),
                    this.classChanged = !1,
                    this.counter = 4,
                    this.usedPositions.length = 0
                }
                this.$element.trigger("hide.zf.dropdown", [this.$element]),
                this.options.trapFocus && Foundation.Keyboard.releaseFocus(this.$element)
            }
        }, {
            key: "toggle",
            value: function() {
                if (this.$element.hasClass("is-open")) {
                    if (this.$anchor.data("hover"))
                        return;
                    this.close()
                } else
                    this.open()
            }
        }, {
            key: "destroy",
            value: function() {
                this.$element.off(".zf.trigger").hide(),
                this.$anchor.off(".zf.dropdown"),
                Foundation.unregisterPlugin(this)
            }
        }]),
        e
    }();
    e.defaults = {
        parentClass: null,
        hoverDelay: 250,
        hover: !1,
        hoverPane: !1,
        vOffset: 1,
        hOffset: 1,
        positionClass: "",
        trapFocus: !1,
        autoFocus: !1,
        closeOnClick: !1
    },
    Foundation.plugin(e, "Dropdown")
}(jQuery);
var _createClass = function() {
    function t(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(t, n.key, n)
        }
    }
    return function(e, i, n) {
        return i && t(e.prototype, i),
        n && t(e, n),
        e
    }
}();
!function(t) {
    var e = function() {
        function e(i, n) {
            _classCallCheck(this, e),
            this.$element = i,
            this.options = t.extend({}, e.defaults, this.$element.data(), n),
            Foundation.Nest.Feather(this.$element, "dropdown"),
            this._init(),
            Foundation.registerPlugin(this, "DropdownMenu"),
            Foundation.Keyboard.register("DropdownMenu", {
                ENTER: "open",
                SPACE: "open",
                ARROW_RIGHT: "next",
                ARROW_UP: "up",
                ARROW_DOWN: "down",
                ARROW_LEFT: "previous",
                ESCAPE: "close"
            })
        }
        return _createClass(e, [{
            key: "_init",
            value: function() {
                var t = this.$element.find("li.is-dropdown-submenu-parent");
                this.$element.children(".is-dropdown-submenu-parent").children(".is-dropdown-submenu").addClass("first-sub"),
                this.$menuItems = this.$element.find('[role="menuitem"]'),
                this.$tabs = this.$element.children('[role="menuitem"]'),
                this.$tabs.find("ul.is-dropdown-submenu").addClass(this.options.verticalClass),
                this.$element.hasClass(this.options.rightClass) || "right" === this.options.alignment || Foundation.rtl() || this.$element.parents(".top-bar-right").is("*") ? (this.options.alignment = "right",
                t.addClass("opens-left")) : t.addClass("opens-right"),
                this.changed = !1,
                this._events()
            }
        }, {
            key: "_isVertical",
            value: function() {
                return "block" === this.$tabs.css("display")
            }
        }, {
            key: "_events",
            value: function() {
                var e = this
                  , i = "ontouchstart"in window || "undefined" != typeof window.ontouchstart
                  , n = "is-dropdown-submenu-parent"
                  , s = function(s) {
                    var o = t(s.target).parentsUntil("ul", "." + n)
                      , a = o.hasClass(n)
                      , r = "true" === o.attr("data-is-click")
                      , l = o.children(".is-dropdown-submenu");
                    if (a)
                        if (r) {
                            if (!e.options.closeOnClick || !e.options.clickOpen && !i || e.options.forceFollow && i)
                                return;
                            s.stopImmediatePropagation(),
                            s.preventDefault(),
                            e._hide(o)
                        } else
                            s.preventDefault(),
                            s.stopImmediatePropagation(),
                            e._show(l),
                            o.add(o.parentsUntil(e.$element, "." + n)).attr("data-is-click", !0)
                };
                (this.options.clickOpen || i) && this.$menuItems.on("click.zf.dropdownmenu touchstart.zf.dropdownmenu", s),
                e.options.closeOnClickInside && this.$menuItems.on("click.zf.dropdownmenu", function(i) {
                    var s = t(this)
                      , o = s.hasClass(n);
                    o || e._hide()
                }),
                this.options.disableHover || this.$menuItems.on("mouseenter.zf.dropdownmenu", function(i) {
                    var s = t(this)
                      , o = s.hasClass(n);
                    o && (clearTimeout(s.data("_delay")),
                    s.data("_delay", setTimeout(function() {
                        e._show(s.children(".is-dropdown-submenu"))
                    }, e.options.hoverDelay)))
                }).on("mouseleave.zf.dropdownmenu", function(i) {
                    var s = t(this)
                      , o = s.hasClass(n);
                    if (o && e.options.autoclose) {
                        if ("true" === s.attr("data-is-click") && e.options.clickOpen)
                            return !1;
                        clearTimeout(s.data("_delay")),
                        s.data("_delay", setTimeout(function() {
                            e._hide(s)
                        }, e.options.closingTime))
                    }
                }),
                this.$menuItems.on("keydown.zf.dropdownmenu", function(i) {
                    var n, s, o = t(i.target).parentsUntil("ul", '[role="menuitem"]'), a = e.$tabs.index(o) > -1, r = a ? e.$tabs : o.siblings("li").add(o);
                    r.each(function(e) {
                        if (t(this).is(o))
                            return n = r.eq(e - 1),
                            void (s = r.eq(e + 1))
                    });
                    var l = function() {
                        o.is(":last-child") || (s.children("a:first").focus(),
                        i.preventDefault())
                    }
                      , h = function() {
                        n.children("a:first").focus(),
                        i.preventDefault()
                    }
                      , u = function() {
                        var t = o.children("ul.is-dropdown-submenu");
                        t.length && (e._show(t),
                        o.find("li > a:first").focus(),
                        i.preventDefault())
                    }
                      , d = function() {
                        var t = o.parent("ul").parent("li");
                        t.children("a:first").focus(),
                        e._hide(t),
                        i.preventDefault()
                    }
                      , c = {
                        open: u,
                        close: function() {
                            e._hide(e.$element),
                            e.$menuItems.find("a:first").focus(),
                            i.preventDefault()
                        },
                        handled: function() {
                            i.stopImmediatePropagation()
                        }
                    };
                    a ? e._isVertical() ? Foundation.rtl() ? t.extend(c, {
                        down: l,
                        up: h,
                        next: d,
                        previous: u
                    }) : t.extend(c, {
                        down: l,
                        up: h,
                        next: u,
                        previous: d
                    }) : Foundation.rtl() ? t.extend(c, {
                        next: h,
                        previous: l,
                        down: u,
                        up: d
                    }) : t.extend(c, {
                        next: l,
                        previous: h,
                        down: u,
                        up: d
                    }) : Foundation.rtl() ? t.extend(c, {
                        next: d,
                        previous: u,
                        down: l,
                        up: h
                    }) : t.extend(c, {
                        next: u,
                        previous: d,
                        down: l,
                        up: h
                    }),
                    Foundation.Keyboard.handleKey(i, "DropdownMenu", c)
                })
            }
        }, {
            key: "_addBodyHandler",
            value: function() {
                var e = t(document.body)
                  , i = this;
                e.off("mouseup.zf.dropdownmenu touchend.zf.dropdownmenu").on("mouseup.zf.dropdownmenu touchend.zf.dropdownmenu", function(t) {
                    var n = i.$element.find(t.target);
                    n.length || (i._hide(),
                    e.off("mouseup.zf.dropdownmenu touchend.zf.dropdownmenu"))
                })
            }
        }, {
            key: "_show",
            value: function(e) {
                var i = this.$tabs.index(this.$tabs.filter(function(i, n) {
                    return t(n).find(e).length > 0
                }))
                  , n = e.parent("li.is-dropdown-submenu-parent").siblings("li.is-dropdown-submenu-parent");
                this._hide(n, i),
                e.css("visibility", "hidden").addClass("js-dropdown-active").parent("li.is-dropdown-submenu-parent").addClass("is-active");
                var s = Foundation.Box.ImNotTouchingYou(e, null, !0);
                if (!s) {
                    var o = "left" === this.options.alignment ? "-right" : "-left"
                      , a = e.parent(".is-dropdown-submenu-parent");
                    a.removeClass("opens" + o).addClass("opens-" + this.options.alignment),
                    s = Foundation.Box.ImNotTouchingYou(e, null, !0),
                    s || a.removeClass("opens-" + this.options.alignment).addClass("opens-inner"),
                    this.changed = !0
                }
                e.css("visibility", ""),
                this.options.closeOnClick && this._addBodyHandler(),
                this.$element.trigger("show.zf.dropdownmenu", [e])
            }
        }, {
            key: "_hide",
            value: function(t, e) {
                var i;
                i = t && t.length ? t : void 0 !== e ? this.$tabs.not(function(t, i) {
                    return t === e
                }) : this.$element;
                var n = i.hasClass("is-active") || i.find(".is-active").length > 0;
                if (n) {
                    if (i.find("li.is-active").add(i).attr({
                        "data-is-click": !1
                    }).removeClass("is-active"),
                    i.find("ul.js-dropdown-active").removeClass("js-dropdown-active"),
                    this.changed || i.find("opens-inner").length) {
                        var s = "left" === this.options.alignment ? "right" : "left";
                        i.find("li.is-dropdown-submenu-parent").add(i).removeClass("opens-inner opens-" + this.options.alignment).addClass("opens-" + s),
                        this.changed = !1
                    }
                    this.$element.trigger("hide.zf.dropdownmenu", [i])
                }
            }
        }, {
            key: "destroy",
            value: function() {
                this.$menuItems.off(".zf.dropdownmenu").removeAttr("data-is-click").removeClass("is-right-arrow is-left-arrow is-down-arrow opens-right opens-left opens-inner"),
                t(document.body).off(".zf.dropdownmenu"),
                Foundation.Nest.Burn(this.$element, "dropdown"),
                Foundation.unregisterPlugin(this)
            }
        }]),
        e
    }();
    e.defaults = {
        disableHover: !1,
        autoclose: !0,
        hoverDelay: 50,
        clickOpen: !1,
        closingTime: 500,
        alignment: "left",
        closeOnClick: !0,
        closeOnClickInside: !0,
        verticalClass: "vertical",
        rightClass: "align-right",
        forceFollow: !0
    },
    Foundation.plugin(e, "DropdownMenu")
}(jQuery);
var _createClass = function() {
    function t(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(t, n.key, n)
        }
    }
    return function(e, i, n) {
        return i && t(e.prototype, i),
        n && t(e, n),
        e
    }
}();
!function(t) {
    var e = function() {
        function e(i, n) {
            _classCallCheck(this, e),
            this.$element = i,
            this.options = t.extend({}, e.defaults, this.$element.data(), n),
            this._init(),
            Foundation.registerPlugin(this, "Equalizer")
        }
        return _createClass(e, [{
            key: "_init",
            value: function() {
                var e = this.$element.attr("data-equalizer") || ""
                  , i = this.$element.find('[data-equalizer-watch="' + e + '"]');
                this.$watched = i.length ? i : this.$element.find("[data-equalizer-watch]"),
                this.$element.attr("data-resize", e || Foundation.GetYoDigits(6, "eq")),
                this.$element.attr("data-mutate", e || Foundation.GetYoDigits(6, "eq")),
                this.hasNested = this.$element.find("[data-equalizer]").length > 0,
                this.isNested = this.$element.parentsUntil(document.body, "[data-equalizer]").length > 0,
                this.isOn = !1,
                this._bindHandler = {
                    onResizeMeBound: this._onResizeMe.bind(this),
                    onPostEqualizedBound: this._onPostEqualized.bind(this)
                };
                var n, s = this.$element.find("img");
                this.options.equalizeOn ? (n = this._checkMQ(),
                t(window).on("changed.zf.mediaquery", this._checkMQ.bind(this))) : this._events(),
                (void 0 !== n && n === !1 || void 0 === n) && (s.length ? Foundation.onImagesLoaded(s, this._reflow.bind(this)) : this._reflow())
            }
        }, {
            key: "_pauseEvents",
            value: function() {
                this.isOn = !1,
                this.$element.off({
                    ".zf.equalizer": this._bindHandler.onPostEqualizedBound,
                    "resizeme.zf.trigger": this._bindHandler.onResizeMeBound,
                    "mutateme.zf.trigger": this._bindHandler.onResizeMeBound
                })
            }
        }, {
            key: "_onResizeMe",
            value: function(t) {
                this._reflow()
            }
        }, {
            key: "_onPostEqualized",
            value: function(t) {
                t.target !== this.$element[0] && this._reflow()
            }
        }, {
            key: "_events",
            value: function() {
                this._pauseEvents(),
                this.hasNested ? this.$element.on("postequalized.zf.equalizer", this._bindHandler.onPostEqualizedBound) : (this.$element.on("resizeme.zf.trigger", this._bindHandler.onResizeMeBound),
                this.$element.on("mutateme.zf.trigger", this._bindHandler.onResizeMeBound)),
                this.isOn = !0
            }
        }, {
            key: "_checkMQ",
            value: function() {
                var t = !Foundation.MediaQuery.is(this.options.equalizeOn);
                return t ? this.isOn && (this._pauseEvents(),
                this.$watched.css("height", "auto")) : this.isOn || this._events(),
                t
            }
        }, {
            key: "_killswitch",
            value: function() {}
        }, {
            key: "_reflow",
            value: function() {
                return !this.options.equalizeOnStack && this._isStacked() ? (this.$watched.css("height", "auto"),
                !1) : void (this.options.equalizeByRow ? this.getHeightsByRow(this.applyHeightByRow.bind(this)) : this.getHeights(this.applyHeight.bind(this)))
            }
        }, {
            key: "_isStacked",
            value: function() {
                return !this.$watched[0] || !this.$watched[1] || this.$watched[0].getBoundingClientRect().top !== this.$watched[1].getBoundingClientRect().top
            }
        }, {
            key: "getHeights",
            value: function(t) {
                for (var e = [], i = 0, n = this.$watched.length; i < n; i++)
                    this.$watched[i].style.height = "auto",
                    e.push(this.$watched[i].offsetHeight);
                t(e)
            }
        }, {
            key: "getHeightsByRow",
            value: function(e) {
                var i = this.$watched.length ? this.$watched.first().offset().top : 0
                  , n = []
                  , s = 0;
                n[s] = [];
                for (var o = 0, a = this.$watched.length; o < a; o++) {
                    this.$watched[o].style.height = "auto";
                    var r = t(this.$watched[o]).offset().top;
                    r != i && (s++,
                    n[s] = [],
                    i = r),
                    n[s].push([this.$watched[o], this.$watched[o].offsetHeight])
                }
                for (var l = 0, h = n.length; l < h; l++) {
                    var u = t(n[l]).map(function() {
                        return this[1]
                    }).get()
                      , d = Math.max.apply(null, u);
                    n[l].push(d)
                }
                e(n)
            }
        }, {
            key: "applyHeight",
            value: function(t) {
                var e = Math.max.apply(null, t);
                this.$element.trigger("preequalized.zf.equalizer"),
                this.$watched.css("height", e),
                this.$element.trigger("postequalized.zf.equalizer")
            }
        }, {
            key: "applyHeightByRow",
            value: function(e) {
                this.$element.trigger("preequalized.zf.equalizer");
                for (var i = 0, n = e.length; i < n; i++) {
                    var s = e[i].length
                      , o = e[i][s - 1];
                    if (s <= 2)
                        t(e[i][0][0]).css({
                            height: "auto"
                        });
                    else {
                        this.$element.trigger("preequalizedrow.zf.equalizer");
                        for (var a = 0, r = s - 1; a < r; a++)
                            t(e[i][a][0]).css({
                                height: o
                            });
                        this.$element.trigger("postequalizedrow.zf.equalizer")
                    }
                }
                this.$element.trigger("postequalized.zf.equalizer")
            }
        }, {
            key: "destroy",
            value: function() {
                this._pauseEvents(),
                this.$watched.css("height", "auto"),
                Foundation.unregisterPlugin(this)
            }
        }]),
        e
    }();
    e.defaults = {
        equalizeOnStack: !1,
        equalizeByRow: !1,
        equalizeOn: ""
    },
    Foundation.plugin(e, "Equalizer")
}(jQuery);
var _createClass = function() {
    function t(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(t, n.key, n)
        }
    }
    return function(e, i, n) {
        return i && t(e.prototype, i),
        n && t(e, n),
        e
    }
}();
!function(t) {
    var e = function() {
        function e(i, n) {
            _classCallCheck(this, e),
            this.$element = i,
            this.options = t.extend({}, e.defaults, n),
            this.rules = [],
            this.currentPath = "",
            this._init(),
            this._events(),
            Foundation.registerPlugin(this, "Interchange")
        }
        return _createClass(e, [{
            key: "_init",
            value: function() {
                this._addBreakpoints(),
                this._generateRules(),
                this._reflow()
            }
        }, {
            key: "_events",
            value: function() {
                var e = this;
                t(window).on("resize.zf.interchange", Foundation.util.throttle(function() {
                    e._reflow()
                }, 50))
            }
        }, {
            key: "_reflow",
            value: function() {
                var t;
                for (var e in this.rules)
                    if (this.rules.hasOwnProperty(e)) {
                        var i = this.rules[e];
                        window.matchMedia(i.query).matches && (t = i)
                    }
                t && this.replace(t.path)
            }
        }, {
            key: "_addBreakpoints",
            value: function() {
                for (var t in Foundation.MediaQuery.queries)
                    if (Foundation.MediaQuery.queries.hasOwnProperty(t)) {
                        var i = Foundation.MediaQuery.queries[t];
                        e.SPECIAL_QUERIES[i.name] = i.value
                    }
            }
        }, {
            key: "_generateRules",
            value: function(t) {
                var i, n = [];
                i = this.options.rules ? this.options.rules : this.$element.data("interchange"),
                i = "string" == typeof i ? i.match(/\[.*?\]/g) : i;
                for (var s in i)
                    if (i.hasOwnProperty(s)) {
                        var o = i[s].slice(1, -1).split(", ")
                          , a = o.slice(0, -1).join("")
                          , r = o[o.length - 1];
                        e.SPECIAL_QUERIES[r] && (r = e.SPECIAL_QUERIES[r]),
                        n.push({
                            path: a,
                            query: r
                        })
                    }
                this.rules = n
            }
        }, {
            key: "replace",
            value: function(e) {
                if (this.currentPath !== e) {
                    var i = this
                      , n = "replaced.zf.interchange";
                    "IMG" === this.$element[0].nodeName ? this.$element.attr("src", e).on("load", function() {
                        i.currentPath = e
                    }).trigger(n) : e.match(/\.(gif|jpg|jpeg|png|svg|tiff)([?#].*)?/i) ? this.$element.css({
                        "background-image": "url(" + e + ")"
                    }).trigger(n) : t.get(e, function(s) {
                        i.$element.html(s).trigger(n),
                        t(s).foundation(),
                        i.currentPath = e
                    })
                }
            }
        }, {
            key: "destroy",
            value: function() {}
        }]),
        e
    }();
    e.defaults = {
        rules: null
    },
    e.SPECIAL_QUERIES = {
        landscape: "screen and (orientation: landscape)",
        portrait: "screen and (orientation: portrait)",
        retina: "only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min--moz-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2/1), only screen and (min-device-pixel-ratio: 2), only screen and (min-resolution: 192dpi), only screen and (min-resolution: 2dppx)"
    },
    Foundation.plugin(e, "Interchange")
}(jQuery);
var _createClass = function() {
    function t(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(t, n.key, n)
        }
    }
    return function(e, i, n) {
        return i && t(e.prototype, i),
        n && t(e, n),
        e
    }
}();
!function(t) {
    var e = function() {
        function e(i, n) {
            _classCallCheck(this, e),
            this.$element = i,
            this.options = t.extend({}, e.defaults, this.$element.data(), n),
            this._init(),
            this.calcPoints(),
            Foundation.registerPlugin(this, "Magellan")
        }
        return _createClass(e, [{
            key: "_init",
            value: function() {
                var e = this.$element[0].id || Foundation.GetYoDigits(6, "magellan");
                this.$targets = t("[data-magellan-target]"),
                this.$links = this.$element.find("a"),
                this.$element.attr({
                    "data-resize": e,
                    "data-scroll": e,
                    id: e
                }),
                this.$active = t(),
                this.scrollPos = parseInt(window.pageYOffset, 10),
                this._events()
            }
        }, {
            key: "calcPoints",
            value: function() {
                var e = this
                  , i = document.body
                  , n = document.documentElement;
                this.points = [],
                this.winHeight = Math.round(Math.max(window.innerHeight, n.clientHeight)),
                this.docHeight = Math.round(Math.max(i.scrollHeight, i.offsetHeight, n.clientHeight, n.scrollHeight, n.offsetHeight)),
                this.$targets.each(function() {
                    var i = t(this)
                      , n = Math.round(i.offset().top - e.options.threshold);
                    i.targetPoint = n,
                    e.points.push(n)
                })
            }
        }, {
            key: "_events",
            value: function() {
                var e = this;
                t("html, body"),
                {
                    duration: e.options.animationDuration,
                    easing: e.options.animationEasing
                };
                t(window).one("load", function() {
                    e.options.deepLinking && location.hash && e.scrollToLoc(location.hash),
                    e.calcPoints(),
                    e._updateActive()
                }),
                this.$element.on({
                    "resizeme.zf.trigger": this.reflow.bind(this),
                    "scrollme.zf.trigger": this._updateActive.bind(this)
                }).on("click.zf.magellan", 'a[href^="#"]', function(t) {
                    t.preventDefault();
                    var i = this.getAttribute("href");
                    e.scrollToLoc(i)
                }),
                t(window).on("popstate", function(t) {
                    e.options.deepLinking && e.scrollToLoc(window.location.hash)
                })
            }
        }, {
            key: "scrollToLoc",
            value: function(e) {
                if (!t(e).length)
                    return !1;
                this._inTransition = !0;
                var i = this
                  , n = Math.round(t(e).offset().top - this.options.threshold / 2 - this.options.barOffset);
                t("html, body").stop(!0).animate({
                    scrollTop: n
                }, this.options.animationDuration, this.options.animationEasing, function() {
                    i._inTransition = !1,
                    i._updateActive()
                })
            }
        }, {
            key: "reflow",
            value: function() {
                this.calcPoints(),
                this._updateActive()
            }
        }, {
            key: "_updateActive",
            value: function() {
                if (!this._inTransition) {
                    var t, e = parseInt(window.pageYOffset, 10);
                    if (e + this.winHeight === this.docHeight)
                        t = this.points.length - 1;
                    else if (e < this.points[0])
                        t = void 0;
                    else {
                        var i = this.scrollPos < e
                          , n = this
                          , s = this.points.filter(function(t, s) {
                            return i ? t - n.options.barOffset <= e : t - n.options.barOffset - n.options.threshold <= e
                        });
                        t = s.length ? s.length - 1 : 0
                    }
                    if (this.$active.removeClass(this.options.activeClass),
                    this.$active = this.$links.filter('[href="#' + this.$targets.eq(t).data("magellan-target") + '"]').addClass(this.options.activeClass),
                    this.options.deepLinking) {
                        var o = "";
                        void 0 != t && (o = this.$active[0].getAttribute("href")),
                        o !== window.location.hash && (window.history.pushState ? window.history.pushState(null, null, o) : window.location.hash = o)
                    }
                    this.scrollPos = e,
                    this.$element.trigger("update.zf.magellan", [this.$active])
                }
            }
        }, {
            key: "destroy",
            value: function() {
                if (this.$element.off(".zf.trigger .zf.magellan").find("." + this.options.activeClass).removeClass(this.options.activeClass),
                this.options.deepLinking) {
                    var t = this.$active[0].getAttribute("href");
                    window.location.hash.replace(t, "")
                }
                Foundation.unregisterPlugin(this)
            }
        }]),
        e
    }();
    e.defaults = {
        animationDuration: 500,
        animationEasing: "linear",
        threshold: 50,
        activeClass: "active",
        deepLinking: !1,
        barOffset: 0
    },
    Foundation.plugin(e, "Magellan")
}(jQuery);
var _createClass = function() {
    function t(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(t, n.key, n)
        }
    }
    return function(e, i, n) {
        return i && t(e.prototype, i),
        n && t(e, n),
        e
    }
}();
!function(t) {
    var e = function() {
        function e(i, n) {
            _classCallCheck(this, e),
            this.$element = i,
            this.options = t.extend({}, e.defaults, this.$element.data(), n),
            this.$lastTrigger = t(),
            this.$triggers = t(),
            this._init(),
            this._events(),
            Foundation.registerPlugin(this, "OffCanvas"),
            Foundation.Keyboard.register("OffCanvas", {
                ESCAPE: "close"
            })
        }
        return _createClass(e, [{
            key: "_init",
            value: function() {
                var e = this.$element.attr("id");
                if (this.$element.attr("aria-hidden", "true"),
                this.$element.addClass("is-transition-" + this.options.transition),
                this.$triggers = t(document).find('[data-open="' + e + '"], [data-close="' + e + '"], [data-toggle="' + e + '"]').attr("aria-expanded", "false").attr("aria-controls", e),
                this.options.contentOverlay === !0) {
                    var i = document.createElement("div")
                      , n = "fixed" === t(this.$element).css("position") ? "is-overlay-fixed" : "is-overlay-absolute";
                    i.setAttribute("class", "js-off-canvas-overlay " + n),
                    this.$overlay = t(i),
                    "is-overlay-fixed" === n ? t("body").append(this.$overlay) : this.$element.siblings("[data-off-canvas-content]").append(this.$overlay)
                }
                this.options.isRevealed = this.options.isRevealed || new RegExp(this.options.revealClass,"g").test(this.$element[0].className),
                this.options.isRevealed === !0 && (this.options.revealOn = this.options.revealOn || this.$element[0].className.match(/(reveal-for-medium|reveal-for-large)/g)[0].split("-")[2],
                this._setMQChecker()),
                !this.options.transitionTime == !0 && (this.options.transitionTime = 1e3 * parseFloat(window.getComputedStyle(t("[data-off-canvas]")[0]).transitionDuration))
            }
        }, {
            key: "_events",
            value: function() {
                if (this.$element.off(".zf.trigger .zf.offcanvas").on({
                    "open.zf.trigger": this.open.bind(this),
                    "close.zf.trigger": this.close.bind(this),
                    "toggle.zf.trigger": this.toggle.bind(this),
                    "keydown.zf.offcanvas": this._handleKeyboard.bind(this)
                }),
                this.options.closeOnClick === !0) {
                    var e = this.options.contentOverlay ? this.$overlay : t("[data-off-canvas-content]");
                    e.on({
                        "click.zf.offcanvas": this.close.bind(this)
                    })
                }
            }
        }, {
            key: "_setMQChecker",
            value: function() {
                var e = this;
                t(window).on("changed.zf.mediaquery", function() {
                    Foundation.MediaQuery.atLeast(e.options.revealOn) ? e.reveal(!0) : e.reveal(!1)
                }).one("load.zf.offcanvas", function() {
                    Foundation.MediaQuery.atLeast(e.options.revealOn) && e.reveal(!0)
                })
            }
        }, {
            key: "reveal",
            value: function(t) {
                var e = this.$element.find("[data-close]");
                t ? (this.close(),
                this.isRevealed = !0,
                this.$element.attr("aria-hidden", "false"),
                this.$element.off("open.zf.trigger toggle.zf.trigger"),
                e.length && e.hide()) : (this.isRevealed = !1,
                this.$element.attr("aria-hidden", "true"),
                this.$element.on({
                    "open.zf.trigger": this.open.bind(this),
                    "toggle.zf.trigger": this.toggle.bind(this)
                }),
                e.length && e.show())
            }
        }, {
            key: "_stopScrolling",
            value: function(t) {
                return !1
            }
        }, {
            key: "_recordScrollable",
            value: function(t) {
                var e = this;
                e.scrollHeight !== e.clientHeight && (0 === e.scrollTop && (e.scrollTop = 1),
                e.scrollTop === e.scrollHeight - e.clientHeight && (e.scrollTop = e.scrollHeight - e.clientHeight - 1)),
                e.allowUp = e.scrollTop > 0,
                e.allowDown = e.scrollTop < e.scrollHeight - e.clientHeight,
                e.lastY = t.originalEvent.pageY
            }
        }, {
            key: "_stopScrollPropagation",
            value: function(t) {
                var e = this
                  , i = t.pageY < e.lastY
                  , n = !i;
                e.lastY = t.pageY,
                i && e.allowUp || n && e.allowDown ? t.stopPropagation() : t.preventDefault()
            }
        }, {
            key: "open",
            value: function(e, i) {
                if (!this.$element.hasClass("is-open") && !this.isRevealed) {
                    var n = this;
                    i && (this.$lastTrigger = i),
                    "top" === this.options.forceTo ? window.scrollTo(0, 0) : "bottom" === this.options.forceTo && window.scrollTo(0, document.body.scrollHeight),
                    n.$element.addClass("is-open"),
                    this.$triggers.attr("aria-expanded", "true"),
                    this.$element.attr("aria-hidden", "false").trigger("opened.zf.offcanvas"),
                    this.options.contentScroll === !1 && (t("body").addClass("is-off-canvas-open").on("touchmove", this._stopScrolling),
                    this.$element.on("touchstart", this._recordScrollable),
                    this.$element.on("touchmove", this._stopScrollPropagation)),
                    this.options.contentOverlay === !0 && this.$overlay.addClass("is-visible"),
                    this.options.closeOnClick === !0 && this.options.contentOverlay === !0 && this.$overlay.addClass("is-closable"),
                    this.options.autoFocus === !0 && this.$element.one(Foundation.transitionend(this.$element), function() {
                        n.$element.find("a, button").eq(0).focus()
                    }),
                    this.options.trapFocus === !0 && (this.$element.siblings("[data-off-canvas-content]").attr("tabindex", "-1"),
                    Foundation.Keyboard.trapFocus(this.$element))
                }
            }
        }, {
            key: "close",
            value: function(e) {
                if (this.$element.hasClass("is-open") && !this.isRevealed) {
                    var i = this;
                    i.$element.removeClass("is-open"),
                    this.$element.attr("aria-hidden", "true").trigger("closed.zf.offcanvas"),
                    this.options.contentScroll === !1 && (t("body").removeClass("is-off-canvas-open").off("touchmove", this._stopScrolling),
                    this.$element.off("touchstart", this._recordScrollable),
                    this.$element.off("touchmove", this._stopScrollPropagation)),
                    this.options.contentOverlay === !0 && this.$overlay.removeClass("is-visible"),
                    this.options.closeOnClick === !0 && this.options.contentOverlay === !0 && this.$overlay.removeClass("is-closable"),
                    this.$triggers.attr("aria-expanded", "false"),
                    this.options.trapFocus === !0 && (this.$element.siblings("[data-off-canvas-content]").removeAttr("tabindex"),
                    Foundation.Keyboard.releaseFocus(this.$element))
                }
            }
        }, {
            key: "toggle",
            value: function(t, e) {
                this.$element.hasClass("is-open") ? this.close(t, e) : this.open(t, e)
            }
        }, {
            key: "_handleKeyboard",
            value: function(t) {
                var e = this;
                Foundation.Keyboard.handleKey(t, "OffCanvas", {
                    close: function() {
                        return e.close(),
                        e.$lastTrigger.focus(),
                        !0
                    },
                    handled: function() {
                        t.stopPropagation(),
                        t.preventDefault()
                    }
                })
            }
        }, {
            key: "destroy",
            value: function() {
                this.close(),
                this.$element.off(".zf.trigger .zf.offcanvas"),
                this.$overlay.off(".zf.offcanvas"),
                Foundation.unregisterPlugin(this)
            }
        }]),
        e
    }();
    e.defaults = {
        closeOnClick: !0,
        contentOverlay: !0,
        contentScroll: !0,
        transitionTime: 0,
        transition: "push",
        forceTo: null,
        isRevealed: !1,
        revealOn: null,
        autoFocus: !0,
        revealClass: "reveal-for-",
        trapFocus: !1
    },
    Foundation.plugin(e, "OffCanvas")
}(jQuery);
var _createClass = function() {
    function t(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(t, n.key, n)
        }
    }
    return function(e, i, n) {
        return i && t(e.prototype, i),
        n && t(e, n),
        e
    }
}();
!function(t) {
    var e = function() {
        function e(i, n) {
            _classCallCheck(this, e),
            this.$element = i,
            this.options = t.extend({}, e.defaults, this.$element.data(), n),
            this._init(),
            Foundation.registerPlugin(this, "Orbit"),
            Foundation.Keyboard.register("Orbit", {
                ltr: {
                    ARROW_RIGHT: "next",
                    ARROW_LEFT: "previous"
                },
                rtl: {
                    ARROW_LEFT: "next",
                    ARROW_RIGHT: "previous"
                }
            })
        }
        return _createClass(e, [{
            key: "_init",
            value: function() {
                this._reset(),
                this.$wrapper = this.$element.find("." + this.options.containerClass),
                this.$slides = this.$element.find("." + this.options.slideClass);
                var t = this.$element.find("img")
                  , e = this.$slides.filter(".is-active")
                  , i = this.$element[0].id || Foundation.GetYoDigits(6, "orbit");
                this.$element.attr({
                    "data-resize": i,
                    id: i
                }),
                e.length || this.$slides.eq(0).addClass("is-active"),
                this.options.useMUI || this.$slides.addClass("no-motionui"),
                t.length ? Foundation.onImagesLoaded(t, this._prepareForOrbit.bind(this)) : this._prepareForOrbit(),
                this.options.bullets && this._loadBullets(),
                this._events(),
                this.options.autoPlay && this.$slides.length > 1 && this.geoSync(),
                this.options.accessible && this.$wrapper.attr("tabindex", 0)
            }
        }, {
            key: "_loadBullets",
            value: function() {
                this.$bullets = this.$element.find("." + this.options.boxOfBullets).find("button")
            }
        }, {
            key: "geoSync",
            value: function() {
                var t = this;
                this.timer = new Foundation.Timer(this.$element,{
                    duration: this.options.timerDelay,
                    infinite: !1
                },function() {
                    t.changeSlide(!0)
                }
                ),
                this.timer.start()
            }
        }, {
            key: "_prepareForOrbit",
            value: function() {
                this._setWrapperHeight()
            }
        }, {
            key: "_setWrapperHeight",
            value: function(e) {
                var i, n = 0, s = 0, o = this;
                this.$slides.each(function() {
                    i = this.getBoundingClientRect().height,
                    t(this).attr("data-slide", s),
                    o.$slides.filter(".is-active")[0] !== o.$slides.eq(s)[0] && t(this).css({
                        position: "relative",
                        display: "none"
                    }),
                    n = i > n ? i : n,
                    s++
                }),
                s === this.$slides.length && (this.$wrapper.css({
                    height: n
                }),
                e && e(n))
            }
        }, {
            key: "_setSlideHeight",
            value: function(e) {
                this.$slides.each(function() {
                    t(this).css("max-height", e)
                })
            }
        }, {
            key: "_events",
            value: function() {
                var e = this;
                if (this.$element.off(".resizeme.zf.trigger").on({
                    "resizeme.zf.trigger": this._prepareForOrbit.bind(this)
                }),
                this.$slides.length > 1) {
                    if (this.options.swipe && this.$slides.off("swipeleft.zf.orbit swiperight.zf.orbit").on("swipeleft.zf.orbit", function(t) {
                        t.preventDefault(),
                        e.changeSlide(!0)
                    }).on("swiperight.zf.orbit", function(t) {
                        t.preventDefault(),
                        e.changeSlide(!1)
                    }),
                    this.options.autoPlay && (this.$slides.on("click.zf.orbit", function() {
                        e.$element.data("clickedOn", !e.$element.data("clickedOn")),
                        e.timer[e.$element.data("clickedOn") ? "pause" : "start"]()
                    }),
                    this.options.pauseOnHover && this.$element.on("mouseenter.zf.orbit", function() {
                        e.timer.pause()
                    }).on("mouseleave.zf.orbit", function() {
                        e.$element.data("clickedOn") || e.timer.start()
                    })),
                    this.options.navButtons) {
                        var i = this.$element.find("." + this.options.nextClass + ", ." + this.options.prevClass);
                        i.attr("tabindex", 0).on("click.zf.orbit touchend.zf.orbit", function(i) {
                            i.preventDefault(),
                            e.changeSlide(t(this).hasClass(e.options.nextClass))
                        })
                    }
                    this.options.bullets && this.$bullets.on("click.zf.orbit touchend.zf.orbit", function() {
                        if (/is-active/g.test(this.className))
                            return !1;
                        var i = t(this).data("slide")
                          , n = i > e.$slides.filter(".is-active").data("slide")
                          , s = e.$slides.eq(i);
                        e.changeSlide(n, s, i)
                    }),
                    this.options.accessible && this.$wrapper.add(this.$bullets).on("keydown.zf.orbit", function(i) {
                        Foundation.Keyboard.handleKey(i, "Orbit", {
                            next: function() {
                                e.changeSlide(!0)
                            },
                            previous: function() {
                                e.changeSlide(!1)
                            },
                            handled: function() {
                                t(i.target).is(e.$bullets) && e.$bullets.filter(".is-active").focus()
                            }
                        })
                    })
                }
            }
        }, {
            key: "_reset",
            value: function() {
                "undefined" != typeof this.$slides && this.$slides.length > 1 && (this.$element.off(".zf.orbit").find("*").off(".zf.orbit"),
                this.options.autoPlay && this.timer.restart(),
                this.$slides.each(function(e) {
                    t(e).removeClass("is-active is-active is-in").removeAttr("aria-live").hide()
                }),
                this.$slides.first().addClass("is-active").show(),
                this.$element.trigger("slidechange.zf.orbit", [this.$slides.first()]),
                this.options.bullets && this._updateBullets(0))
            }
        }, {
            key: "changeSlide",
            value: function(t, e, i) {
                if (this.$slides) {
                    var n = this.$slides.filter(".is-active").eq(0);
                    if (/mui/g.test(n[0].className))
                        return !1;
                    var s, o = this.$slides.first(), a = this.$slides.last(), r = t ? "Right" : "Left", l = t ? "Left" : "Right", h = this;
                    s = e ? e : t ? this.options.infiniteWrap ? n.next("." + this.options.slideClass).length ? n.next("." + this.options.slideClass) : o : n.next("." + this.options.slideClass) : this.options.infiniteWrap ? n.prev("." + this.options.slideClass).length ? n.prev("." + this.options.slideClass) : a : n.prev("." + this.options.slideClass),
                    s.length && (this.$element.trigger("beforeslidechange.zf.orbit", [n, s]),
                    this.options.bullets && (i = i || this.$slides.index(s),
                    this._updateBullets(i)),
                    this.options.useMUI && !this.$element.is(":hidden") ? (Foundation.Motion.animateIn(s.addClass("is-active").css({
                        position: "absolute",
                        top: 0
                    }), this.options["animInFrom" + r], function() {
                        s.css({
                            position: "relative",
                            display: "block"
                        }).attr("aria-live", "polite")
                    }),
                    Foundation.Motion.animateOut(n.removeClass("is-active"), this.options["animOutTo" + l], function() {
                        n.removeAttr("aria-live"),
                        h.options.autoPlay && !h.timer.isPaused && h.timer.restart()
                    })) : (n.removeClass("is-active is-in").removeAttr("aria-live").hide(),
                    s.addClass("is-active is-in").attr("aria-live", "polite").show(),
                    this.options.autoPlay && !this.timer.isPaused && this.timer.restart()),
                    this.$element.trigger("slidechange.zf.orbit", [s]))
                }
            }
        }, {
            key: "_updateBullets",
            value: function(t) {
                var e = this.$element.find("." + this.options.boxOfBullets).find(".is-active").removeClass("is-active").blur()
                  , i = e.find("span:last").detach();
                this.$bullets.eq(t).addClass("is-active").append(i)
            }
        }, {
            key: "destroy",
            value: function() {
                this.$element.off(".zf.orbit").find("*").off(".zf.orbit").end().hide(),
                Foundation.unregisterPlugin(this)
            }
        }]),
        e
    }();
    e.defaults = {
        bullets: !0,
        navButtons: !0,
        animInFromRight: "slide-in-right",
        animOutToRight: "slide-out-right",
        animInFromLeft: "slide-in-left",
        animOutToLeft: "slide-out-left",
        autoPlay: !0,
        timerDelay: 5e3,
        infiniteWrap: !0,
        swipe: !0,
        pauseOnHover: !0,
        accessible: !0,
        containerClass: "orbit-container",
        slideClass: "orbit-slide",
        boxOfBullets: "orbit-bullets",
        nextClass: "orbit-next",
        prevClass: "orbit-previous",
        useMUI: !0
    },
    Foundation.plugin(e, "Orbit")
}(jQuery);
var _createClass = function() {
    function t(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(t, n.key, n)
        }
    }
    return function(e, i, n) {
        return i && t(e.prototype, i),
        n && t(e, n),
        e
    }
}();
!function(t) {
    var e = function() {
        function e(i, n) {
            _classCallCheck(this, e),
            this.$element = t(i),
            this.rules = this.$element.data("responsive-menu"),
            this.currentMq = null,
            this.currentPlugin = null,
            this._init(),
            this._events(),
            Foundation.registerPlugin(this, "ResponsiveMenu")
        }
        return _createClass(e, [{
            key: "_init",
            value: function() {
                if ("string" == typeof this.rules) {
                    for (var e = {}, n = this.rules.split(" "), s = 0; s < n.length; s++) {
                        var o = n[s].split("-")
                          , a = o.length > 1 ? o[0] : "small"
                          , r = o.length > 1 ? o[1] : o[0];
                        null !== i[r] && (e[a] = i[r])
                    }
                    this.rules = e
                }
                t.isEmptyObject(this.rules) || this._checkMediaQueries(),
                this.$element.attr("data-mutate", this.$element.attr("data-mutate") || Foundation.GetYoDigits(6, "responsive-menu"))
            }
        }, {
            key: "_events",
            value: function() {
                var e = this;
                t(window).on("changed.zf.mediaquery", function() {
                    e._checkMediaQueries()
                })
            }
        }, {
            key: "_checkMediaQueries",
            value: function() {
                var e, n = this;
                t.each(this.rules, function(t) {
                    Foundation.MediaQuery.atLeast(t) && (e = t)
                }),
                e && (this.currentPlugin instanceof this.rules[e].plugin || (t.each(i, function(t, e) {
                    n.$element.removeClass(e.cssClass)
                }),
                this.$element.addClass(this.rules[e].cssClass),
                this.currentPlugin && this.currentPlugin.destroy(),
                this.currentPlugin = new this.rules[e].plugin(this.$element,{})))
            }
        }, {
            key: "destroy",
            value: function() {
                this.currentPlugin.destroy(),
                t(window).off(".zf.ResponsiveMenu"),
                Foundation.unregisterPlugin(this)
            }
        }]),
        e
    }();
    e.defaults = {};
    var i = {
        dropdown: {
            cssClass: "dropdown",
            plugin: Foundation._plugins["dropdown-menu"] || null
        },
        drilldown: {
            cssClass: "drilldown",
            plugin: Foundation._plugins.drilldown || null
        },
        accordion: {
            cssClass: "accordion-menu",
            plugin: Foundation._plugins["accordion-menu"] || null
        }
    };
    Foundation.plugin(e, "ResponsiveMenu")
}(jQuery);
var _createClass = function() {
    function t(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(t, n.key, n)
        }
    }
    return function(e, i, n) {
        return i && t(e.prototype, i),
        n && t(e, n),
        e
    }
}();
!function(t) {
    var e = function() {
        function e(i, n) {
            _classCallCheck(this, e),
            this.$element = t(i),
            this.options = t.extend({}, e.defaults, this.$element.data(), n),
            this._init(),
            this._events(),
            Foundation.registerPlugin(this, "ResponsiveToggle")
        }
        return _createClass(e, [{
            key: "_init",
            value: function() {
                var e = this.$element.data("responsive-toggle");
                if (e || console.error("Your tab bar needs an ID of a Menu as the value of data-tab-bar."),
                this.$targetMenu = t("#" + e),
                this.$toggler = this.$element.find("[data-toggle]").filter(function() {
                    var i = t(this).data("toggle");
                    return i === e || "" === i
                }),
                this.options = t.extend({}, this.options, this.$targetMenu.data()),
                this.options.animate) {
                    var i = this.options.animate.split(" ");
                    this.animationIn = i[0],
                    this.animationOut = i[1] || null
                }
                this._update()
            }
        }, {
            key: "_events",
            value: function() {
                this._updateMqHandler = this._update.bind(this),
                t(window).on("changed.zf.mediaquery", this._updateMqHandler),
                this.$toggler.on("click.zf.responsiveToggle", this.toggleMenu.bind(this))
            }
        }, {
            key: "_update",
            value: function() {
                Foundation.MediaQuery.atLeast(this.options.hideFor) ? (this.$element.hide(),
                this.$targetMenu.show()) : (this.$element.show(),
                this.$targetMenu.hide())
            }
        }, {
            key: "toggleMenu",
            value: function() {
                var t = this;
                Foundation.MediaQuery.atLeast(this.options.hideFor) || (this.options.animate ? this.$targetMenu.is(":hidden") ? Foundation.Motion.animateIn(this.$targetMenu, this.animationIn, function() {
                    t.$element.trigger("toggled.zf.responsiveToggle"),
                    t.$targetMenu.find("[data-mutate]").triggerHandler("mutateme.zf.trigger")
                }) : Foundation.Motion.animateOut(this.$targetMenu, this.animationOut, function() {
                    t.$element.trigger("toggled.zf.responsiveToggle")
                }) : (this.$targetMenu.toggle(0),
                this.$targetMenu.find("[data-mutate]").trigger("mutateme.zf.trigger"),
                this.$element.trigger("toggled.zf.responsiveToggle")))
            }
        }, {
            key: "destroy",
            value: function() {
                this.$element.off(".zf.responsiveToggle"),
                this.$toggler.off(".zf.responsiveToggle"),
                t(window).off("changed.zf.mediaquery", this._updateMqHandler),
                Foundation.unregisterPlugin(this)
            }
        }]),
        e
    }();
    e.defaults = {
        hideFor: "medium",
        animate: !1
    },
    Foundation.plugin(e, "ResponsiveToggle")
}(jQuery);
var _createClass = function() {
    function t(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(t, n.key, n)
        }
    }
    return function(e, i, n) {
        return i && t(e.prototype, i),
        n && t(e, n),
        e
    }
}();
!function(t) {
    function e() {
        return /iP(ad|hone|od).*OS/.test(window.navigator.userAgent)
    }
    function i() {
        return /Android/.test(window.navigator.userAgent)
    }
    function n() {
        return e() || i()
    }
    var s = function() {
        function e(i, n) {
            _classCallCheck(this, e),
            this.$element = i,
            this.options = t.extend({}, e.defaults, this.$element.data(), n),
            this._init(),
            Foundation.registerPlugin(this, "Reveal"),
            Foundation.Keyboard.register("Reveal", {
                ENTER: "open",
                SPACE: "open",
                ESCAPE: "close"
            })
        }
        return _createClass(e, [{
            key: "_init",
            value: function() {
                this.id = this.$element.attr("id"),
                this.isActive = !1,
                this.cached = {
                    mq: Foundation.MediaQuery.current
                },
                this.isMobile = n(),
                this.$anchor = t(t('[data-open="' + this.id + '"]').length ? '[data-open="' + this.id + '"]' : '[data-toggle="' + this.id + '"]'),
                this.$anchor.attr({
                    "aria-controls": this.id,
                    "aria-haspopup": !0,
                    tabindex: 0
                }),
                (this.options.fullScreen || this.$element.hasClass("full")) && (this.options.fullScreen = !0,
                this.options.overlay = !1),
                this.options.overlay && !this.$overlay && (this.$overlay = this._makeOverlay(this.id)),
                this.$element.attr({
                    role: "dialog",
                    "aria-hidden": !0,
                    "data-yeti-box": this.id,
                    "data-resize": this.id
                }),
                this.$overlay ? this.$element.detach().appendTo(this.$overlay) : (this.$element.detach().appendTo(t(this.options.appendTo)),
                this.$element.addClass("without-overlay")),
                this._events(),
                this.options.deepLink && window.location.hash === "#" + this.id && t(window).one("load.zf.reveal", this.open.bind(this))
            }
        }, {
            key: "_makeOverlay",
            value: function() {
                return t("<div></div>").addClass("reveal-overlay").appendTo(this.options.appendTo)
            }
        }, {
            key: "_updatePosition",
            value: function() {
                var e, i, n = this.$element.outerWidth(), s = t(window).width(), o = this.$element.outerHeight(), a = t(window).height();
                e = "auto" === this.options.hOffset ? parseInt((s - n) / 2, 10) : parseInt(this.options.hOffset, 10),
                i = "auto" === this.options.vOffset ? o > a ? parseInt(Math.min(100, a / 10), 10) : parseInt((a - o) / 4, 10) : parseInt(this.options.vOffset, 10),
                this.$element.css({
                    top: i + "px"
                }),
                this.$overlay && "auto" === this.options.hOffset || (this.$element.css({
                    left: e + "px"
                }),
                this.$element.css({
                    margin: "0px"
                }))
            }
        }, {
            key: "_events",
            value: function() {
                var e = this
                  , i = this;
                this.$element.on({
                    "open.zf.trigger": this.open.bind(this),
                    "close.zf.trigger": function(n, s) {
                        if (n.target === i.$element[0] || t(n.target).parents("[data-closable]")[0] === s)
                            return e.close.apply(e)
                    },
                    "toggle.zf.trigger": this.toggle.bind(this),
                    "resizeme.zf.trigger": function() {
                        i._updatePosition()
                    }
                }),
                this.$anchor.length && this.$anchor.on("keydown.zf.reveal", function(t) {
                    13 !== t.which && 32 !== t.which || (t.stopPropagation(),
                    t.preventDefault(),
                    i.open())
                }),
                this.options.closeOnClick && this.options.overlay && this.$overlay.off(".zf.reveal").on("click.zf.reveal", function(e) {
                    e.target !== i.$element[0] && !t.contains(i.$element[0], e.target) && t.contains(document, e.target) && i.close()
                }),
                this.options.deepLink && t(window).on("popstate.zf.reveal:" + this.id, this._handleState.bind(this))
            }
        }, {
            key: "_handleState",
            value: function(t) {
                window.location.hash !== "#" + this.id || this.isActive ? this.close() : this.open()
            }
        }, {
            key: "open",
            value: function() {
                function e() {
                    s.isMobile ? (s.originalScrollPos || (s.originalScrollPos = window.pageYOffset),
                    t("html, body").addClass("is-reveal-open")) : t("body").addClass("is-reveal-open")
                }
                var i = this;
                if (this.options.deepLink) {
                    var n = "#" + this.id;
                    window.history.pushState ? window.history.pushState(null, null, n) : window.location.hash = n
                }
                this.isActive = !0,
                this.$element.css({
                    visibility: "hidden"
                }).show().scrollTop(0),
                this.options.overlay && this.$overlay.css({
                    visibility: "hidden"
                }).show(),
                this._updatePosition(),
                this.$element.hide().css({
                    visibility: ""
                }),
                this.$overlay && (this.$overlay.css({
                    visibility: ""
                }).hide(),
                this.$element.hasClass("fast") ? this.$overlay.addClass("fast") : this.$element.hasClass("slow") && this.$overlay.addClass("slow")),
                this.options.multipleOpened || this.$element.trigger("closeme.zf.reveal", this.id);
                var s = this;
                this.options.animationIn ? !function() {
                    var t = function() {
                        s.$element.attr({
                            "aria-hidden": !1,
                            tabindex: -1
                        }).focus(),
                        e(),
                        Foundation.Keyboard.trapFocus(s.$element)
                    };
                    i.options.overlay && Foundation.Motion.animateIn(i.$overlay, "fade-in"),
                    Foundation.Motion.animateIn(i.$element, i.options.animationIn, function() {
                        i.$element && (i.focusableElements = Foundation.Keyboard.findFocusable(i.$element),
                        t())
                    })
                }() : (this.options.overlay && this.$overlay.show(0),
                this.$element.show(this.options.showDelay)),
                this.$element.attr({
                    "aria-hidden": !1,
                    tabindex: -1
                }).focus(),
                Foundation.Keyboard.trapFocus(this.$element),
                this.$element.trigger("open.zf.reveal"),
                e(),
                setTimeout(function() {
                    i._extraHandlers()
                }, 0)
            }
        }, {
            key: "_extraHandlers",
            value: function() {
                var e = this;
                this.$element && (this.focusableElements = Foundation.Keyboard.findFocusable(this.$element),
                this.options.overlay || !this.options.closeOnClick || this.options.fullScreen || t("body").on("click.zf.reveal", function(i) {
                    i.target !== e.$element[0] && !t.contains(e.$element[0], i.target) && t.contains(document, i.target) && e.close()
                }),
                this.options.closeOnEsc && t(window).on("keydown.zf.reveal", function(t) {
                    Foundation.Keyboard.handleKey(t, "Reveal", {
                        close: function() {
                            e.options.closeOnEsc && (e.close(),
                            e.$anchor.focus())
                        }
                    })
                }),
                this.$element.on("keydown.zf.reveal", function(i) {
                    var n = t(this);
                    Foundation.Keyboard.handleKey(i, "Reveal", {
                        open: function() {
                            e.$element.find(":focus").is(e.$element.find("[data-close]")) ? setTimeout(function() {
                                e.$anchor.focus()
                            }, 1) : n.is(e.focusableElements) && e.open()
                        },
                        close: function() {
                            e.options.closeOnEsc && (e.close(),
                            e.$anchor.focus())
                        },
                        handled: function(t) {
                            t && i.preventDefault()
                        }
                    })
                }))
            }
        }, {
            key: "close",
            value: function() {
                function e() {
                    i.isMobile ? (t("html, body").removeClass("is-reveal-open"),
                    i.originalScrollPos && (t("body").scrollTop(i.originalScrollPos),
                    i.originalScrollPos = null)) : t("body").removeClass("is-reveal-open"),
                    Foundation.Keyboard.releaseFocus(i.$element),
                    i.$element.attr("aria-hidden", !0),
                    i.$element.trigger("closed.zf.reveal")
                }
                if (!this.isActive || !this.$element.is(":visible"))
                    return !1;
                var i = this;
                this.options.animationOut ? (this.options.overlay ? Foundation.Motion.animateOut(this.$overlay, "fade-out", e) : e(),
                Foundation.Motion.animateOut(this.$element, this.options.animationOut)) : (this.options.overlay ? this.$overlay.hide(0, e) : e(),
                this.$element.hide(this.options.hideDelay)),
                this.options.closeOnEsc && t(window).off("keydown.zf.reveal"),
                !this.options.overlay && this.options.closeOnClick && t("body").off("click.zf.reveal"),
                this.$element.off("keydown.zf.reveal"),
                this.options.resetOnClose && this.$element.html(this.$element.html()),
                this.isActive = !1,
                i.options.deepLink && (window.history.replaceState ? window.history.replaceState("", document.title, window.location.href.replace("#" + this.id, "")) : window.location.hash = "")
            }
        }, {
            key: "toggle",
            value: function() {
                this.isActive ? this.close() : this.open()
            }
        }, {
            key: "destroy",
            value: function() {
                this.options.overlay && (this.$element.appendTo(t(this.options.appendTo)),
                this.$overlay.hide().off().remove()),
                this.$element.hide().off(),
                this.$anchor.off(".zf"),
                t(window).off(".zf.reveal:" + this.id),
                Foundation.unregisterPlugin(this)
            }
        }]),
        e
    }();
    s.defaults = {
        animationIn: "",
        animationOut: "",
        showDelay: 0,
        hideDelay: 0,
        closeOnClick: !0,
        closeOnEsc: !0,
        multipleOpened: !1,
        vOffset: "auto",
        hOffset: "auto",
        fullScreen: !1,
        btmOffsetPct: 10,
        overlay: !0,
        resetOnClose: !1,
        deepLink: !1,
        appendTo: "body"
    },
    Foundation.plugin(s, "Reveal")
}(jQuery);
var _createClass = function() {
    function t(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(t, n.key, n)
        }
    }
    return function(e, i, n) {
        return i && t(e.prototype, i),
        n && t(e, n),
        e
    }
}();
!function(t) {
    function e(t, e) {
        return t / e
    }
    function i(t, e, i, n) {
        return Math.abs(t.position()[e] + t[n]() / 2 - i)
    }
    function n(t, e) {
        return Math.log(e) / Math.log(t)
    }
    var s = function() {
        function s(e, i) {
            _classCallCheck(this, s),
            this.$element = e,
            this.options = t.extend({}, s.defaults, this.$element.data(), i),
            this._init(),
            Foundation.registerPlugin(this, "Slider"),
            Foundation.Keyboard.register("Slider", {
                ltr: {
                    ARROW_RIGHT: "increase",
                    ARROW_UP: "increase",
                    ARROW_DOWN: "decrease",
                    ARROW_LEFT: "decrease",
                    SHIFT_ARROW_RIGHT: "increase_fast",
                    SHIFT_ARROW_UP: "increase_fast",
                    SHIFT_ARROW_DOWN: "decrease_fast",
                    SHIFT_ARROW_LEFT: "decrease_fast"
                },
                rtl: {
                    ARROW_LEFT: "increase",
                    ARROW_RIGHT: "decrease",
                    SHIFT_ARROW_LEFT: "increase_fast",
                    SHIFT_ARROW_RIGHT: "decrease_fast"
                }
            })
        }
        return _createClass(s, [{
            key: "_init",
            value: function() {
                this.inputs = this.$element.find("input"),
                this.handles = this.$element.find("[data-slider-handle]"),
                this.$handle = this.handles.eq(0),
                this.$input = this.inputs.length ? this.inputs.eq(0) : t("#" + this.$handle.attr("aria-controls")),
                this.$fill = this.$element.find("[data-slider-fill]").css(this.options.vertical ? "height" : "width", 0);
                var e = !1;
                (this.options.disabled || this.$element.hasClass(this.options.disabledClass)) && (this.options.disabled = !0,
                this.$element.addClass(this.options.disabledClass)),
                this.inputs.length || (this.inputs = t().add(this.$input),
                this.options.binding = !0),
                this._setInitAttr(0),
                this.handles[1] && (this.options.doubleSided = !0,
                this.$handle2 = this.handles.eq(1),
                this.$input2 = this.inputs.length > 1 ? this.inputs.eq(1) : t("#" + this.$handle2.attr("aria-controls")),
                this.inputs[1] || (this.inputs = this.inputs.add(this.$input2)),
                e = !0,
                this._setInitAttr(1)),
                this.setHandles(),
                this._events()
            }
        }, {
            key: "setHandles",
            value: function() {
                var t = this;
                this.handles[1] ? this._setHandlePos(this.$handle, this.inputs.eq(0).val(), !0, function() {
                    t._setHandlePos(t.$handle2, t.inputs.eq(1).val(), !0)
                }) : this._setHandlePos(this.$handle, this.inputs.eq(0).val(), !0)
            }
        }, {
            key: "_reflow",
            value: function() {
                this.setHandles()
            }
        }, {
            key: "_pctOfBar",
            value: function(t) {
                var i = e(t - this.options.start, this.options.end - this.options.start);
                switch (this.options.positionValueFunction) {
                case "pow":
                    i = this._logTransform(i);
                    break;
                case "log":
                    i = this._powTransform(i)
                }
                return i.toFixed(2)
            }
        }, {
            key: "_value",
            value: function(t) {
                switch (this.options.positionValueFunction) {
                case "pow":
                    t = this._powTransform(t);
                    break;
                case "log":
                    t = this._logTransform(t)
                }
                var e = (this.options.end - this.options.start) * t + this.options.start;
                return e
            }
        }, {
            key: "_logTransform",
            value: function(t) {
                return n(this.options.nonLinearBase, t * (this.options.nonLinearBase - 1) + 1)
            }
        }, {
            key: "_powTransform",
            value: function(t) {
                return (Math.pow(this.options.nonLinearBase, t) - 1) / (this.options.nonLinearBase - 1)
            }
        }, {
            key: "_setHandlePos",
            value: function(t, i, n, s) {
                if (!this.$element.hasClass(this.options.disabledClass)) {
                    i = parseFloat(i),
                    i < this.options.start ? i = this.options.start : i > this.options.end && (i = this.options.end);
                    var o = this.options.doubleSided;
                    if (o)
                        if (0 === this.handles.index(t)) {
                            var a = parseFloat(this.$handle2.attr("aria-valuenow"));
                            i = i >= a ? a - this.options.step : i
                        } else {
                            var r = parseFloat(this.$handle.attr("aria-valuenow"));
                            i = i <= r ? r + this.options.step : i
                        }
                    this.options.vertical && !n && (i = this.options.end - i);
                    var l = this
                      , h = this.options.vertical
                      , u = h ? "height" : "width"
                      , d = h ? "top" : "left"
                      , c = t[0].getBoundingClientRect()[u]
                      , f = this.$element[0].getBoundingClientRect()[u]
                      , p = this._pctOfBar(i)
                      , m = (f - c) * p
                      , g = (100 * e(m, f)).toFixed(this.options.decimal);
                    i = parseFloat(i.toFixed(this.options.decimal));
                    var v = {};
                    if (this._setValues(t, i),
                    o) {
                        var y, w = 0 === this.handles.index(t), b = ~~(100 * e(c, f));
                        if (w)
                            v[d] = g + "%",
                            y = parseFloat(this.$handle2[0].style[d]) - g + b,
                            s && "function" == typeof s && s();
                        else {
                            var $ = parseFloat(this.$handle[0].style[d]);
                            y = g - (isNaN($) ? (this.options.initialStart - this.options.start) / ((this.options.end - this.options.start) / 100) : $) + b
                        }
                        v["min-" + u] = y + "%"
                    }
                    this.$element.one("finished.zf.animate", function() {
                        l.$element.trigger("moved.zf.slider", [t])
                    });
                    var C = this.$element.data("dragging") ? 1e3 / 60 : this.options.moveTime;
                    Foundation.Move(C, t, function() {
                        isNaN(g) ? t.css(d, 100 * p + "%") : t.css(d, g + "%"),
                        l.options.doubleSided ? l.$fill.css(v) : l.$fill.css(u, 100 * p + "%")
                    }),
                    clearTimeout(l.timeout),
                    l.timeout = setTimeout(function() {
                        l.$element.trigger("changed.zf.slider", [t])
                    }, l.options.changedDelay)
                }
            }
        }, {
            key: "_setInitAttr",
            value: function(t) {
                var e = 0 === t ? this.options.initialStart : this.options.initialEnd
                  , i = this.inputs.eq(t).attr("id") || Foundation.GetYoDigits(6, "slider");
                this.inputs.eq(t).attr({
                    id: i,
                    max: this.options.end,
                    min: this.options.start,
                    step: this.options.step
                }),
                this.inputs.eq(t).val(e),
                this.handles.eq(t).attr({
                    role: "slider",
                    "aria-controls": i,
                    "aria-valuemax": this.options.end,
                    "aria-valuemin": this.options.start,
                    "aria-valuenow": e,
                    "aria-orientation": this.options.vertical ? "vertical" : "horizontal",
                    tabindex: 0
                })
            }
        }, {
            key: "_setValues",
            value: function(t, e) {
                var i = this.options.doubleSided ? this.handles.index(t) : 0;
                this.inputs.eq(i).val(e),
                t.attr("aria-valuenow", e)
            }
        }, {
            key: "_handleEvent",
            value: function(n, s, o) {
                var a, r;
                if (o)
                    a = this._adjustValue(null, o),
                    r = !0;
                else {
                    n.preventDefault();
                    var l = this
                      , h = this.options.vertical
                      , u = h ? "height" : "width"
                      , d = h ? "top" : "left"
                      , c = h ? n.pageY : n.pageX
                      , f = (this.$handle[0].getBoundingClientRect()[u] / 2,
                    this.$element[0].getBoundingClientRect()[u])
                      , p = h ? t(window).scrollTop() : t(window).scrollLeft()
                      , m = this.$element.offset()[d];
                    n.clientY === n.pageY && (c += p);
                    var g, v = c - m;
                    g = v < 0 ? 0 : v > f ? f : v;
                    var y = e(g, f);
                    if (a = this._value(y),
                    Foundation.rtl() && !this.options.vertical && (a = this.options.end - a),
                    a = l._adjustValue(null, a),
                    r = !1,
                    !s) {
                        var w = i(this.$handle, d, g, u)
                          , b = i(this.$handle2, d, g, u);
                        s = w <= b ? this.$handle : this.$handle2
                    }
                }
                this._setHandlePos(s, a, r)
            }
        }, {
            key: "_adjustValue",
            value: function(t, e) {
                var i, n, s, o, a = this.options.step, r = parseFloat(a / 2);
                return i = t ? parseFloat(t.attr("aria-valuenow")) : e,
                n = i % a,
                s = i - n,
                o = s + a,
                0 === n ? i : i = i >= s + r ? o : s
            }
        }, {
            key: "_events",
            value: function() {
                this._eventsForHandle(this.$handle),
                this.handles[1] && this._eventsForHandle(this.$handle2)
            }
        }, {
            key: "_eventsForHandle",
            value: function(e) {
                var i, n = this;
                if (this.inputs.off("change.zf.slider").on("change.zf.slider", function(e) {
                    var i = n.inputs.index(t(this));
                    n._handleEvent(e, n.handles.eq(i), t(this).val())
                }),
                this.options.clickSelect && this.$element.off("click.zf.slider").on("click.zf.slider", function(e) {
                    return !n.$element.data("dragging") && void (t(e.target).is("[data-slider-handle]") || (n.options.doubleSided ? n._handleEvent(e) : n._handleEvent(e, n.$handle)))
                }),
                this.options.draggable) {
                    this.handles.addTouch();
                    var s = t("body");
                    e.off("mousedown.zf.slider").on("mousedown.zf.slider", function(o) {
                        e.addClass("is-dragging"),
                        n.$fill.addClass("is-dragging"),
                        n.$element.data("dragging", !0),
                        i = t(o.currentTarget),
                        s.on("mousemove.zf.slider", function(t) {
                            t.preventDefault(),
                            n._handleEvent(t, i)
                        }).on("mouseup.zf.slider", function(t) {
                            n._handleEvent(t, i),
                            e.removeClass("is-dragging"),
                            n.$fill.removeClass("is-dragging"),
                            n.$element.data("dragging", !1),
                            s.off("mousemove.zf.slider mouseup.zf.slider")
                        })
                    }).on("selectstart.zf.slider touchmove.zf.slider", function(t) {
                        t.preventDefault()
                    })
                }
                e.off("keydown.zf.slider").on("keydown.zf.slider", function(e) {
                    var i, s = t(this), o = n.options.doubleSided ? n.handles.index(s) : 0, a = parseFloat(n.inputs.eq(o).val());
                    Foundation.Keyboard.handleKey(e, "Slider", {
                        decrease: function() {
                            i = a - n.options.step
                        },
                        increase: function() {
                            i = a + n.options.step
                        },
                        decrease_fast: function() {
                            i = a - 10 * n.options.step
                        },
                        increase_fast: function() {
                            i = a + 10 * n.options.step
                        },
                        handled: function() {
                            e.preventDefault(),
                            n._setHandlePos(s, i, !0)
                        }
                    })
                })
            }
        }, {
            key: "destroy",
            value: function() {
                this.handles.off(".zf.slider"),
                this.inputs.off(".zf.slider"),
                this.$element.off(".zf.slider"),
                clearTimeout(this.timeout),
                Foundation.unregisterPlugin(this)
            }
        }]),
        s
    }();
    s.defaults = {
        start: 0,
        end: 100,
        step: 1,
        initialStart: 0,
        initialEnd: 100,
        binding: !1,
        clickSelect: !0,
        vertical: !1,
        draggable: !0,
        disabled: !1,
        doubleSided: !1,
        decimal: 2,
        moveTime: 200,
        disabledClass: "disabled",
        invertVertical: !1,
        changedDelay: 500,
        nonLinearBase: 5,
        positionValueFunction: "linear"
    },
    Foundation.plugin(s, "Slider")
}(jQuery);
var _createClass = function() {
    function t(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(t, n.key, n)
        }
    }
    return function(e, i, n) {
        return i && t(e.prototype, i),
        n && t(e, n),
        e
    }
}();
!function(t) {
    function e(t) {
        return parseInt(window.getComputedStyle(document.body, null).fontSize, 10) * t
    }
    var i = function() {
        function i(e, n) {
            _classCallCheck(this, i),
            this.$element = e,
            this.options = t.extend({}, i.defaults, this.$element.data(), n),
            this._init(),
            Foundation.registerPlugin(this, "Sticky")
        }
        return _createClass(i, [{
            key: "_init",
            value: function() {
                var e = this.$element.parent("[data-sticky-container]")
                  , i = this.$element[0].id || Foundation.GetYoDigits(6, "sticky")
                  , n = this;
                e.length || (this.wasWrapped = !0),
                this.$container = e.length ? e : t(this.options.container).wrapInner(this.$element),
                this.$container.addClass(this.options.containerClass),
                this.$element.addClass(this.options.stickyClass).attr({
                    "data-resize": i
                }),
                this.scrollCount = this.options.checkEvery,
                this.isStuck = !1,
                t(window).one("load.zf.sticky", function() {
                    n.containerHeight = "none" == n.$element.css("display") ? 0 : n.$element[0].getBoundingClientRect().height,
                    n.$container.css("height", n.containerHeight),
                    n.elemHeight = n.containerHeight,
                    "" !== n.options.anchor ? n.$anchor = t("#" + n.options.anchor) : n._parsePoints(),
                    n._setSizes(function() {
                        var t = window.pageYOffset;
                        n._calc(!1, t),
                        n.isStuck || n._removeSticky(!(t >= n.topPoint))
                    }),
                    n._events(i.split("-").reverse().join("-"))
                })
            }
        }, {
            key: "_parsePoints",
            value: function() {
                for (var e = "" == this.options.topAnchor ? 1 : this.options.topAnchor, i = "" == this.options.btmAnchor ? document.documentElement.scrollHeight : this.options.btmAnchor, n = [e, i], s = {}, o = 0, a = n.length; o < a && n[o]; o++) {
                    var r;
                    if ("number" == typeof n[o])
                        r = n[o];
                    else {
                        var l = n[o].split(":")
                          , h = t("#" + l[0]);
                        r = h.offset().top,
                        l[1] && "bottom" === l[1].toLowerCase() && (r += h[0].getBoundingClientRect().height)
                    }
                    s[o] = r
                }
                this.points = s
            }
        }, {
            key: "_events",
            value: function(e) {
                var i = this
                  , n = this.scrollListener = "scroll.zf." + e;
                this.isOn || (this.canStick && (this.isOn = !0,
                t(window).off(n).on(n, function(t) {
                    0 === i.scrollCount ? (i.scrollCount = i.options.checkEvery,
                    i._setSizes(function() {
                        i._calc(!1, window.pageYOffset)
                    })) : (i.scrollCount--,
                    i._calc(!1, window.pageYOffset))
                })),
                this.$element.off("resizeme.zf.trigger").on("resizeme.zf.trigger", function(t, s) {
                    i._setSizes(function() {
                        i._calc(!1),
                        i.canStick ? i.isOn || i._events(e) : i.isOn && i._pauseListeners(n)
                    })
                }))
            }
        }, {
            key: "_pauseListeners",
            value: function(e) {
                this.isOn = !1,
                t(window).off(e),
                this.$element.trigger("pause.zf.sticky")
            }
        }, {
            key: "_calc",
            value: function(t, e) {
                return t && this._setSizes(),
                this.canStick ? (e || (e = window.pageYOffset),
                void (e >= this.topPoint ? e <= this.bottomPoint ? this.isStuck || this._setSticky() : this.isStuck && this._removeSticky(!1) : this.isStuck && this._removeSticky(!0))) : (this.isStuck && this._removeSticky(!0),
                !1)
            }
        }, {
            key: "_setSticky",
            value: function() {
                var t = this
                  , e = this.options.stickTo
                  , i = "top" === e ? "marginTop" : "marginBottom"
                  , n = "top" === e ? "bottom" : "top"
                  , s = {};
                s[i] = this.options[i] + "em",
                s[e] = 0,
                s[n] = "auto",
                this.isStuck = !0,
                this.$element.removeClass("is-anchored is-at-" + n).addClass("is-stuck is-at-" + e).css(s).trigger("sticky.zf.stuckto:" + e),
                this.$element.on("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd", function() {
                    t._setSizes()
                })
            }
        }, {
            key: "_removeSticky",
            value: function(t) {
                var e = this.options.stickTo
                  , i = "top" === e
                  , n = {}
                  , s = (this.points ? this.points[1] - this.points[0] : this.anchorHeight) - this.elemHeight
                  , o = i ? "marginTop" : "marginBottom"
                  , a = t ? "top" : "bottom";
                n[o] = 0,
                n.bottom = "auto",
                t ? n.top = 0 : n.top = s,
                this.isStuck = !1,
                this.$element.removeClass("is-stuck is-at-" + e).addClass("is-anchored is-at-" + a).css(n).trigger("sticky.zf.unstuckfrom:" + a)
            }
        }, {
            key: "_setSizes",
            value: function(t) {
                this.canStick = Foundation.MediaQuery.is(this.options.stickyOn),
                this.canStick || t && "function" == typeof t && t();
                var e = this.$container[0].getBoundingClientRect().width
                  , i = window.getComputedStyle(this.$container[0])
                  , n = parseInt(i["padding-left"], 10)
                  , s = parseInt(i["padding-right"], 10);
                this.$anchor && this.$anchor.length ? this.anchorHeight = this.$anchor[0].getBoundingClientRect().height : this._parsePoints(),
                this.$element.css({
                    "max-width": e - n - s + "px"
                });
                var o = this.$element[0].getBoundingClientRect().height || this.containerHeight;
                if ("none" == this.$element.css("display") && (o = 0),
                this.containerHeight = o,
                this.$container.css({
                    height: o
                }),
                this.elemHeight = o,
                !this.isStuck && this.$element.hasClass("is-at-bottom")) {
                    var a = (this.points ? this.points[1] - this.$container.offset().top : this.anchorHeight) - this.elemHeight;
                    this.$element.css("top", a)
                }
                this._setBreakPoints(o, function() {
                    t && "function" == typeof t && t()
                })
            }
        }, {
            key: "_setBreakPoints",
            value: function(t, i) {
                if (!this.canStick) {
                    if (!i || "function" != typeof i)
                        return !1;
                    i()
                }
                var n = e(this.options.marginTop)
                  , s = e(this.options.marginBottom)
                  , o = this.points ? this.points[0] : this.$anchor.offset().top
                  , a = this.points ? this.points[1] : o + this.anchorHeight
                  , r = window.innerHeight;
                "top" === this.options.stickTo ? (o -= n,
                a -= t + n) : "bottom" === this.options.stickTo && (o -= r - (t + s),
                a -= r - s),
                this.topPoint = o,
                this.bottomPoint = a,
                i && "function" == typeof i && i()
            }
        }, {
            key: "destroy",
            value: function() {
                this._removeSticky(!0),
                this.$element.removeClass(this.options.stickyClass + " is-anchored is-at-top").css({
                    height: "",
                    top: "",
                    bottom: "",
                    "max-width": ""
                }).off("resizeme.zf.trigger"),
                this.$anchor && this.$anchor.length && this.$anchor.off("change.zf.sticky"),
                t(window).off(this.scrollListener),
                this.wasWrapped ? this.$element.unwrap() : this.$container.removeClass(this.options.containerClass).css({
                    height: ""
                }),
                Foundation.unregisterPlugin(this)
            }
        }]),
        i
    }();
    i.defaults = {
        container: "<div data-sticky-container></div>",
        stickTo: "top",
        anchor: "",
        topAnchor: "",
        btmAnchor: "",
        marginTop: 1,
        marginBottom: 1,
        stickyOn: "medium",
        stickyClass: "sticky",
        containerClass: "sticky-container",
        checkEvery: -1
    },
    Foundation.plugin(i, "Sticky")
}(jQuery);
var _createClass = function() {
    function t(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(t, n.key, n)
        }
    }
    return function(e, i, n) {
        return i && t(e.prototype, i),
        n && t(e, n),
        e
    }
}();
!function(t) {
    var e = function() {
        function e(i, n) {
            _classCallCheck(this, e),
            this.$element = i,
            this.options = t.extend({}, e.defaults, this.$element.data(), n),
            this._init(),
            Foundation.registerPlugin(this, "Tabs"),
            Foundation.Keyboard.register("Tabs", {
                ENTER: "open",
                SPACE: "open",
                ARROW_RIGHT: "next",
                ARROW_UP: "previous",
                ARROW_DOWN: "next",
                ARROW_LEFT: "previous"
            })
        }
        return _createClass(e, [{
            key: "_init",
            value: function() {
                var e = this
                  , i = this;
                if (this.$element.attr({
                    role: "tablist"
                }),
                this.$tabTitles = this.$element.find("." + this.options.linkClass),
                this.$tabContent = t('[data-tabs-content="' + this.$element[0].id + '"]'),
                this.$tabTitles.each(function() {
                    var e = t(this)
                      , n = e.find("a")
                      , s = e.hasClass("" + i.options.linkActiveClass)
                      , o = n[0].hash.slice(1)
                      , a = n[0].id ? n[0].id : o + "-label"
                      , r = t("#" + o);
                    e.attr({
                        role: "presentation"
                    }),
                    n.attr({
                        role: "tab",
                        "aria-controls": o,
                        "aria-selected": s,
                        id: a
                    }),
                    r.attr({
                        role: "tabpanel",
                        "aria-hidden": !s,
                        "aria-labelledby": a
                    }),
                    s && i.options.autoFocus && t(window).load(function() {
                        t("html, body").animate({
                            scrollTop: e.offset().top
                        }, i.options.deepLinkSmudgeDelay, function() {
                            n.focus()
                        })
                    })
                }),
                this.options.matchHeight) {
                    var n = this.$tabContent.find("img");
                    n.length ? Foundation.onImagesLoaded(n, this._setHeight.bind(this)) : this._setHeight()
                }
                this._checkDeepLink = function() {
                    var i = window.location.hash;
                    if (i.length) {
                        var n = e.$element.find('[href="' + i + '"]');
                        if (n.length) {
                            if (e.selectTab(t(i), !0),
                            e.options.deepLinkSmudge) {
                                var s = e.$element.offset();
                                t("html, body").animate({
                                    scrollTop: s.top
                                }, e.options.deepLinkSmudgeDelay)
                            }
                            e.$element.trigger("deeplink.zf.tabs", [n, t(i)])
                        }
                    }
                }
                ,
                this.options.deepLink && this._checkDeepLink(),
                this._events()
            }
        }, {
            key: "_events",
            value: function() {
                this._addKeyHandler(),
                this._addClickHandler(),
                this._setHeightMqHandler = null,
                this.options.matchHeight && (this._setHeightMqHandler = this._setHeight.bind(this),
                t(window).on("changed.zf.mediaquery", this._setHeightMqHandler)),
                this.options.deepLink && t(window).on("popstate", this._checkDeepLink)
            }
        }, {
            key: "_addClickHandler",
            value: function() {
                var e = this;
                this.$element.off("click.zf.tabs").on("click.zf.tabs", "." + this.options.linkClass, function(i) {
                    i.preventDefault(),
                    i.stopPropagation(),
                    e._handleTabChange(t(this))
                })
            }
        }, {
            key: "_addKeyHandler",
            value: function() {
                var e = this;
                this.$tabTitles.off("keydown.zf.tabs").on("keydown.zf.tabs", function(i) {
                    if (9 !== i.which) {
                        var n, s, o = t(this), a = o.parent("ul").children("li");
                        a.each(function(i) {
                            if (t(this).is(o))
                                return void (e.options.wrapOnKeys ? (n = 0 === i ? a.last() : a.eq(i - 1),
                                s = i === a.length - 1 ? a.first() : a.eq(i + 1)) : (n = a.eq(Math.max(0, i - 1)),
                                s = a.eq(Math.min(i + 1, a.length - 1))))
                        }),
                        Foundation.Keyboard.handleKey(i, "Tabs", {
                            open: function() {
                                o.find('[role="tab"]').focus(),
                                e._handleTabChange(o)
                            },
                            previous: function() {
                                n.find('[role="tab"]').focus(),
                                e._handleTabChange(n)
                            },
                            next: function() {
                                s.find('[role="tab"]').focus(),
                                e._handleTabChange(s)
                            },
                            handled: function() {
                                i.stopPropagation(),
                                i.preventDefault()
                            }
                        })
                    }
                })
            }
        }, {
            key: "_handleTabChange",
            value: function(t, e) {
                if (t.hasClass("" + this.options.linkActiveClass))
                    return void (this.options.activeCollapse && (this._collapseTab(t),
                    this.$element.trigger("collapse.zf.tabs", [t])));
                var i = this.$element.find("." + this.options.linkClass + "." + this.options.linkActiveClass)
                  , n = t.find('[role="tab"]')
                  , s = n[0].hash
                  , o = this.$tabContent.find(s);
                if (this._collapseTab(i),
                this._openTab(t),
                this.options.deepLink && !e) {
                    var a = t.find("a").attr("href");
                    this.options.updateHistory ? history.pushState({}, "", a) : history.replaceState({}, "", a)
                }
                this.$element.trigger("change.zf.tabs", [t, o]),
                o.find("[data-mutate]").trigger("mutateme.zf.trigger")
            }
        }, {
            key: "_openTab",
            value: function(t) {
                var e = t.find('[role="tab"]')
                  , i = e[0].hash
                  , n = this.$tabContent.find(i);
                t.addClass("" + this.options.linkActiveClass),
                e.attr({
                    "aria-selected": "true"
                }),
                n.addClass("" + this.options.panelActiveClass).attr({
                    "aria-hidden": "false"
                })
            }
        }, {
            key: "_collapseTab",
            value: function(e) {
                var i = e.removeClass("" + this.options.linkActiveClass).find('[role="tab"]').attr({
                    "aria-selected": "false"
                });
                t("#" + i.attr("aria-controls")).removeClass("" + this.options.panelActiveClass).attr({
                    "aria-hidden": "true"
                })
            }
        }, {
            key: "selectTab",
            value: function(t, e) {
                var i;
                i = "object" == typeof t ? t[0].id : t,
                i.indexOf("#") < 0 && (i = "#" + i);
                var n = this.$tabTitles.find('[href="' + i + '"]').parent("." + this.options.linkClass);
                this._handleTabChange(n, e)
            }
        }, {
            key: "_setHeight",
            value: function() {
                var e = 0
                  , i = this;
                this.$tabContent.find("." + this.options.panelClass).css("height", "").each(function() {
                    var n = t(this)
                      , s = n.hasClass("" + i.options.panelActiveClass);
                    s || n.css({
                        visibility: "hidden",
                        display: "block"
                    });
                    var o = this.getBoundingClientRect().height;
                    s || n.css({
                        visibility: "",
                        display: ""
                    }),
                    e = o > e ? o : e
                }).css("height", e + "px")
            }
        }, {
            key: "destroy",
            value: function() {
                this.$element.find("." + this.options.linkClass).off(".zf.tabs").hide().end().find("." + this.options.panelClass).hide(),
                this.options.matchHeight && null != this._setHeightMqHandler && t(window).off("changed.zf.mediaquery", this._setHeightMqHandler),
                this.options.deepLink && t(window).off("popstate", this._checkDeepLink),
                Foundation.unregisterPlugin(this)
            }
        }]),
        e
    }();
    e.defaults = {
        deepLink: !1,
        deepLinkSmudge: !1,
        deepLinkSmudgeDelay: 300,
        updateHistory: !1,
        autoFocus: !1,
        wrapOnKeys: !0,
        matchHeight: !1,
        activeCollapse: !1,
        linkClass: "tabs-title",
        linkActiveClass: "is-active",
        panelClass: "tabs-panel",
        panelActiveClass: "is-active"
    },
    Foundation.plugin(e, "Tabs")
}(jQuery);
var _createClass = function() {
    function t(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(t, n.key, n)
        }
    }
    return function(e, i, n) {
        return i && t(e.prototype, i),
        n && t(e, n),
        e
    }
}();
!function(t) {
    var e = function() {
        function e(i, n) {
            _classCallCheck(this, e),
            this.$element = i,
            this.options = t.extend({}, e.defaults, i.data(), n),
            this.className = "",
            this._init(),
            this._events(),
            Foundation.registerPlugin(this, "Toggler")
        }
        return _createClass(e, [{
            key: "_init",
            value: function() {
                var e;
                this.options.animate ? (e = this.options.animate.split(" "),
                this.animationIn = e[0],
                this.animationOut = e[1] || null) : (e = this.$element.data("toggler"),
                this.className = "." === e[0] ? e.slice(1) : e);
                var i = this.$element[0].id;
                t('[data-open="' + i + '"], [data-close="' + i + '"], [data-toggle="' + i + '"]').attr("aria-controls", i),
                this.$element.attr("aria-expanded", !this.$element.is(":hidden"))
            }
        }, {
            key: "_events",
            value: function() {
                this.$element.off("toggle.zf.trigger").on("toggle.zf.trigger", this.toggle.bind(this))
            }
        }, {
            key: "toggle",
            value: function() {
                this[this.options.animate ? "_toggleAnimate" : "_toggleClass"]()
            }
        }, {
            key: "_toggleClass",
            value: function() {
                this.$element.toggleClass(this.className);
                var t = this.$element.hasClass(this.className);
                t ? this.$element.trigger("on.zf.toggler") : this.$element.trigger("off.zf.toggler"),
                this._updateARIA(t),
                this.$element.find("[data-mutate]").trigger("mutateme.zf.trigger")
            }
        }, {
            key: "_toggleAnimate",
            value: function() {
                var t = this;
                this.$element.is(":hidden") ? Foundation.Motion.animateIn(this.$element, this.animationIn, function() {
                    t._updateARIA(!0),
                    this.trigger("on.zf.toggler"),
                    this.find("[data-mutate]").trigger("mutateme.zf.trigger")
                }) : Foundation.Motion.animateOut(this.$element, this.animationOut, function() {
                    t._updateARIA(!1),
                    this.trigger("off.zf.toggler"),
                    this.find("[data-mutate]").trigger("mutateme.zf.trigger")
                })
            }
        }, {
            key: "_updateARIA",
            value: function(t) {
                this.$element.attr("aria-expanded", !!t)
            }
        }, {
            key: "destroy",
            value: function() {
                this.$element.off(".zf.toggler"),
                Foundation.unregisterPlugin(this)
            }
        }]),
        e
    }();
    e.defaults = {
        animate: !1
    },
    Foundation.plugin(e, "Toggler")
}(jQuery);
var _createClass = function() {
    function t(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(t, n.key, n)
        }
    }
    return function(e, i, n) {
        return i && t(e.prototype, i),
        n && t(e, n),
        e
    }
}();
!function(t) {
    var e = function() {
        function e(i, n) {
            _classCallCheck(this, e),
            this.$element = i,
            this.options = t.extend({}, e.defaults, this.$element.data(), n),
            this.isActive = !1,
            this.isClick = !1,
            this._init(),
            Foundation.registerPlugin(this, "Tooltip")
        }
        return _createClass(e, [{
            key: "_init",
            value: function() {
                var e = this.$element.attr("aria-describedby") || Foundation.GetYoDigits(6, "tooltip");
                this.options.positionClass = this.options.positionClass || this._getPositionClass(this.$element),
                this.options.tipText = this.options.tipText || this.$element.attr("title"),
                this.template = this.options.template ? t(this.options.template) : this._buildTemplate(e),
                this.options.allowHtml ? this.template.appendTo(document.body).html(this.options.tipText).hide() : this.template.appendTo(document.body).text(this.options.tipText).hide(),
                this.$element.attr({
                    title: "",
                    "aria-describedby": e,
                    "data-yeti-box": e,
                    "data-toggle": e,
                    "data-resize": e
                }).addClass(this.options.triggerClass),
                this.usedPositions = [],
                this.counter = 4,
                this.classChanged = !1,
                this._events()
            }
        }, {
            key: "_getPositionClass",
            value: function(t) {
                if (!t)
                    return "";
                var e = t[0].className.match(/\b(top|left|right)\b/g);
                return e = e ? e[0] : ""
            }
        }, {
            key: "_buildTemplate",
            value: function(e) {
                var i = (this.options.tooltipClass + " " + this.options.positionClass + " " + this.options.templateClasses).trim()
                  , n = t("<div></div>").addClass(i).attr({
                    role: "tooltip",
                    "aria-hidden": !0,
                    "data-is-active": !1,
                    "data-is-focus": !1,
                    id: e
                });
                return n
            }
        }, {
            key: "_reposition",
            value: function(t) {
                this.usedPositions.push(t ? t : "bottom"),
                !t && this.usedPositions.indexOf("top") < 0 ? this.template.addClass("top") : "top" === t && this.usedPositions.indexOf("bottom") < 0 ? this.template.removeClass(t) : "left" === t && this.usedPositions.indexOf("right") < 0 ? this.template.removeClass(t).addClass("right") : "right" === t && this.usedPositions.indexOf("left") < 0 ? this.template.removeClass(t).addClass("left") : !t && this.usedPositions.indexOf("top") > -1 && this.usedPositions.indexOf("left") < 0 ? this.template.addClass("left") : "top" === t && this.usedPositions.indexOf("bottom") > -1 && this.usedPositions.indexOf("left") < 0 ? this.template.removeClass(t).addClass("left") : "left" === t && this.usedPositions.indexOf("right") > -1 && this.usedPositions.indexOf("bottom") < 0 ? this.template.removeClass(t) : "right" === t && this.usedPositions.indexOf("left") > -1 && this.usedPositions.indexOf("bottom") < 0 ? this.template.removeClass(t) : this.template.removeClass(t),
                this.classChanged = !0,
                this.counter--
            }
        }, {
            key: "_setPosition",
            value: function() {
                var t = this._getPositionClass(this.template)
                  , e = Foundation.Box.GetDimensions(this.template)
                  , i = Foundation.Box.GetDimensions(this.$element)
                  , n = "left" === t ? "left" : "right" === t ? "left" : "top"
                  , s = "top" === n ? "height" : "width";
                "height" === s ? this.options.vOffset : this.options.hOffset;
                if (e.width >= e.windowDims.width || !this.counter && !Foundation.Box.ImNotTouchingYou(this.template))
                    return this.template.offset(Foundation.Box.GetOffsets(this.template, this.$element, "center bottom", this.options.vOffset, this.options.hOffset, !0)).css({
                        width: i.windowDims.width - 2 * this.options.hOffset,
                        height: "auto"
                    }),
                    !1;
                for (this.template.offset(Foundation.Box.GetOffsets(this.template, this.$element, "center " + (t || "bottom"), this.options.vOffset, this.options.hOffset)); !Foundation.Box.ImNotTouchingYou(this.template) && this.counter; )
                    this._reposition(t),
                    this._setPosition()
            }
        }, {
            key: "show",
            value: function() {
                if ("all" !== this.options.showOn && !Foundation.MediaQuery.is(this.options.showOn))
                    return !1;
                var t = this;
                this.template.css("visibility", "hidden").show(),
                this._setPosition(),
                this.$element.trigger("closeme.zf.tooltip", this.template.attr("id")),
                this.template.attr({
                    "data-is-active": !0,
                    "aria-hidden": !1
                }),
                t.isActive = !0,
                this.template.stop().hide().css("visibility", "").fadeIn(this.options.fadeInDuration, function() {}),
                this.$element.trigger("show.zf.tooltip")
            }
        }, {
            key: "hide",
            value: function() {
                var t = this;
                this.template.stop().attr({
                    "aria-hidden": !0,
                    "data-is-active": !1
                }).fadeOut(this.options.fadeOutDuration, function() {
                    t.isActive = !1,
                    t.isClick = !1,
                    t.classChanged && (t.template.removeClass(t._getPositionClass(t.template)).addClass(t.options.positionClass),
                    t.usedPositions = [],
                    t.counter = 4,
                    t.classChanged = !1)
                }),
                this.$element.trigger("hide.zf.tooltip")
            }
        }, {
            key: "_events",
            value: function() {
                var t = this
                  , e = (this.template,
                !1);
                this.options.disableHover || this.$element.on("mouseenter.zf.tooltip", function(e) {
                    t.isActive || (t.timeout = setTimeout(function() {
                        t.show()
                    }, t.options.hoverDelay))
                }).on("mouseleave.zf.tooltip", function(i) {
                    clearTimeout(t.timeout),
                    (!e || t.isClick && !t.options.clickOpen) && t.hide()
                }),
                this.options.clickOpen ? this.$element.on("mousedown.zf.tooltip", function(e) {
                    e.stopImmediatePropagation(),
                    t.isClick || (t.isClick = !0,
                    !t.options.disableHover && t.$element.attr("tabindex") || t.isActive || t.show())
                }) : this.$element.on("mousedown.zf.tooltip", function(e) {
                    e.stopImmediatePropagation(),
                    t.isClick = !0
                }),
                this.options.disableForTouch || this.$element.on("tap.zf.tooltip touchend.zf.tooltip", function(e) {
                    t.isActive ? t.hide() : t.show()
                }),
                this.$element.on({
                    "close.zf.trigger": this.hide.bind(this)
                }),
                this.$element.on("focus.zf.tooltip", function(i) {
                    return e = !0,
                    t.isClick ? (t.options.clickOpen || (e = !1),
                    !1) : void t.show()
                }).on("focusout.zf.tooltip", function(i) {
                    e = !1,
                    t.isClick = !1,
                    t.hide()
                }).on("resizeme.zf.trigger", function() {
                    t.isActive && t._setPosition()
                })
            }
        }, {
            key: "toggle",
            value: function() {
                this.isActive ? this.hide() : this.show()
            }
        }, {
            key: "destroy",
            value: function() {
                this.$element.attr("title", this.template.text()).off(".zf.trigger .zf.tooltip").removeClass("has-tip top right left").removeAttr("aria-describedby aria-haspopup data-disable-hover data-resize data-toggle data-tooltip data-yeti-box"),
                this.template.remove(),
                Foundation.unregisterPlugin(this)
            }
        }]),
        e
    }();
    e.defaults = {
        disableForTouch: !1,
        hoverDelay: 200,
        fadeInDuration: 150,
        fadeOutDuration: 150,
        disableHover: !1,
        templateClasses: "",
        tooltipClass: "tooltip",
        triggerClass: "has-tip",
        showOn: "small",
        template: "",
        tipText: "",
        touchCloseText: "Tap to close.",
        clickOpen: !0,
        positionClass: "",
        vOffset: 10,
        hOffset: 12,
        allowHtml: !1
    },
    Foundation.plugin(e, "Tooltip")
}(jQuery);
var _createClass = function() {
    function t(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(t, n.key, n)
        }
    }
    return function(e, i, n) {
        return i && t(e.prototype, i),
        n && t(e, n),
        e
    }
}();
!function(t) {
    var e = function() {
        function e(i, n) {
            _classCallCheck(this, e),
            this.$element = t(i),
            this.options = t.extend({}, this.$element.data(), n),
            this.rules = this.$element.data("responsive-accordion-tabs"),
            this.currentMq = null,
            this.currentPlugin = null,
            this.$element.attr("id") || this.$element.attr("id", Foundation.GetYoDigits(6, "responsiveaccordiontabs")),
            this._init(),
            this._events(),
            Foundation.registerPlugin(this, "ResponsiveAccordionTabs")
        }
        return _createClass(e, [{
            key: "_init",
            value: function() {
                if ("string" == typeof this.rules) {
                    for (var e = {}, n = this.rules.split(" "), s = 0; s < n.length; s++) {
                        var o = n[s].split("-")
                          , a = o.length > 1 ? o[0] : "small"
                          , r = o.length > 1 ? o[1] : o[0];
                        null !== i[r] && (e[a] = i[r])
                    }
                    this.rules = e
                }
                this._getAllOptions(),
                t.isEmptyObject(this.rules) || this._checkMediaQueries()
            }
        }, {
            key: "_getAllOptions",
            value: function() {
                var e = this;
                e.allOptions = {};
                for (var n in i)
                    if (i.hasOwnProperty(n)) {
                        var s = i[n];
                        try {
                            var o = t("<ul></ul>")
                              , a = new s.plugin(o,e.options);
                            for (var r in a.options)
                                if (a.options.hasOwnProperty(r) && "zfPlugin" !== r) {
                                    var l = a.options[r];
                                    e.allOptions[r] = l
                                }
                            a.destroy()
                        } catch (t) {}
                    }
            }
        }, {
            key: "_events",
            value: function() {
                var e = this;
                t(window).on("changed.zf.mediaquery", function() {
                    e._checkMediaQueries()
                })
            }
        }, {
            key: "_checkMediaQueries",
            value: function() {
                var e, n = this;
                t.each(this.rules, function(t) {
                    Foundation.MediaQuery.atLeast(t) && (e = t)
                }),
                e && (this.currentPlugin instanceof this.rules[e].plugin || (t.each(i, function(t, e) {
                    n.$element.removeClass(e.cssClass)
                }),
                this.$element.addClass(this.rules[e].cssClass),
                this.currentPlugin && (!this.currentPlugin.$element.data("zfPlugin") && this.storezfData && this.currentPlugin.$element.data("zfPlugin", this.storezfData),
                this.currentPlugin.destroy()),
                this._handleMarkup(this.rules[e].cssClass),
                this.currentPlugin = new this.rules[e].plugin(this.$element,{}),
                this.storezfData = this.currentPlugin.$element.data("zfPlugin")))
            }
        }, {
            key: "_handleMarkup",
            value: function(e) {
                var i = this
                  , n = "accordion"
                  , s = t("[data-tabs-content=" + this.$element.attr("id") + "]");
                if (s.length && (n = "tabs"),
                n !== e) {
                    var o = i.allOptions.linkClass ? i.allOptions.linkClass : "tabs-title"
                      , a = i.allOptions.panelClass ? i.allOptions.panelClass : "tabs-panel";
                    this.$element.removeAttr("role");
                    var r = this.$element.children("." + o + ",[data-accordion-item]").removeClass(o).removeClass("accordion-item").removeAttr("data-accordion-item")
                      , l = r.children("a").removeClass("accordion-title");
                    if ("tabs" === n ? (s = s.children("." + a).removeClass(a).removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-labelledby"),
                    s.children("a").removeAttr("role").removeAttr("aria-controls").removeAttr("aria-selected")) : s = r.children("[data-tab-content]").removeClass("accordion-content"),
                    s.css({
                        display: "",
                        visibility: ""
                    }),
                    r.css({
                        display: "",
                        visibility: ""
                    }),
                    "accordion" === e)
                        s.each(function(e, n) {
                            t(n).appendTo(r.get(e)).addClass("accordion-content").attr("data-tab-content", "").removeClass("is-active").css({
                                height: ""
                            }),
                            t("[data-tabs-content=" + i.$element.attr("id") + "]").after('<div id="tabs-placeholder-' + i.$element.attr("id") + '"></div>').remove(),
                            r.addClass("accordion-item").attr("data-accordion-item", ""),
                            l.addClass("accordion-title")
                        });
                    else if ("tabs" === e) {
                        var h = t("[data-tabs-content=" + i.$element.attr("id") + "]")
                          , u = t("#tabs-placeholder-" + i.$element.attr("id"));
                        u.length ? (h = t('<div class="tabs-content"></div>').insertAfter(u).attr("data-tabs-content", i.$element.attr("id")),
                        u.remove()) : h = t('<div class="tabs-content"></div>').insertAfter(i.$element).attr("data-tabs-content", i.$element.attr("id")),
                        s.each(function(e, i) {
                            var n = t(i).appendTo(h).addClass(a)
                              , s = l.get(e).hash.slice(1)
                              , o = t(i).attr("id") || Foundation.GetYoDigits(6, "accordion");
                            s !== o && ("" !== s ? t(i).attr("id", s) : (s = o,
                            t(i).attr("id", s),
                            t(l.get(e)).attr("href", t(l.get(e)).attr("href").replace("#", "") + "#" + s)));
                            var u = t(r.get(e)).hasClass("is-active");
                            u && n.addClass("is-active")
                        }),
                        r.addClass(o)
                    }
                }
            }
        }, {
            key: "destroy",
            value: function() {
                this.currentPlugin && this.currentPlugin.destroy(),
                t(window).off(".zf.ResponsiveAccordionTabs"),
                Foundation.unregisterPlugin(this)
            }
        }]),
        e
    }();
    e.defaults = {};
    var i = {
        tabs: {
            cssClass: "tabs",
            plugin: Foundation._plugins.tabs || null
        },
        accordion: {
            cssClass: "accordion",
            plugin: Foundation._plugins.accordion || null
        }
    };
    Foundation.plugin(e, "ResponsiveAccordionTabs")
}(jQuery);
;/**
 * what-input - A global utility for tracking the current input method (mouse, keyboard or touch).
 * @version v4.0.4
 * @link https://github.com/ten1seven/what-input
 * @license MIT
 */
(function webpackUniversalModuleDefinition(root, factory) {
    if (typeof exports === 'object' && typeof module === 'object')
        module.exports = factory();
    else if (typeof define === 'function' && define.amd)
        define("whatInput", [], factory);
    else if (typeof exports === 'object')
        exports["whatInput"] = factory();
    else
        root["whatInput"] = factory();
}
)(this, function() {
    return /******/
    (function(modules) {
        // webpackBootstrap
        /******/
        // The module cache
        /******/
        var installedModules = {};

        /******/
        // The require function
        /******/
        function __webpack_require__(moduleId) {

            /******/
            // Check if module is in cache
            /******/
            if (installedModules[moduleId])
                /******/
                return installedModules[moduleId].exports;

            /******/
            // Create a new module (and put it into the cache)
            /******/
            var module = installedModules[moduleId] = {
                /******/
                exports: {},
                /******/
                id: moduleId,
                /******/
                loaded: false/******/
            };

            /******/
            // Execute the module function
            /******/
            modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

            /******/
            // Flag the module as loaded
            /******/
            module.loaded = true;

            /******/
            // Return the exports of the module
            /******/
            return module.exports;
            /******/
        }

        /******/
        // expose the modules object (__webpack_modules__)
        /******/
        __webpack_require__.m = modules;

        /******/
        // expose the module cache
        /******/
        __webpack_require__.c = installedModules;

        /******/
        // __webpack_public_path__
        /******/
        __webpack_require__.p = "";

        /******/
        // Load entry module and return exports
        /******/
        return __webpack_require__(0);
        /******/
    }
    )/************************************************************************/
    /******/
    ([/* 0 */
    /***/
    function(module, exports) {

        module.exports = (function() {

            /*
	    ---------------
	    Variables
	    ---------------
	  */

            // cache document.documentElement
            var docElem = document.documentElement;

            // last used input type
            var currentInput = 'initial';

            // last used input intent
            var currentIntent = null;

            // form input types
            var formInputs = ['input', 'select', 'textarea'];

            // list of modifier keys commonly used with the mouse and
            // can be safely ignored to prevent false keyboard detection
            var ignoreMap = [16, // shift
            17, // control
            18, // alt
            91, // Windows key / left Apple cmd
            93 // Windows menu / right Apple cmd
            ];

            // mapping of events to input types
            var inputMap = {
                'keyup': 'keyboard',
                'mousedown': 'mouse',
                'mousemove': 'mouse',
                'MSPointerDown': 'pointer',
                'MSPointerMove': 'pointer',
                'pointerdown': 'pointer',
                'pointermove': 'pointer',
                'touchstart': 'touch'
            };

            // array of all used input types
            var inputTypes = [];

            // boolean: true if touch buffer timer is running
            var isBuffering = false;

            // map of IE 10 pointer events
            var pointerMap = {
                2: 'touch',
                3: 'touch',
                // treat pen like touch
                4: 'mouse'
            };

            // touch buffer timer
            var touchTimer = null;

            /*
	    ---------------
	    Set up
	    ---------------
	  */

            var setUp = function() {

                // add correct mouse wheel event mapping to `inputMap`
                inputMap[detectWheel()] = 'mouse';

                addListeners();
                setInput();
            };

            /*
	    ---------------
	    Events
	    ---------------
	  */

            var addListeners = function() {

                // `pointermove`, `MSPointerMove`, `mousemove` and mouse wheel event binding
                // can only demonstrate potential, but not actual, interaction
                // and are treated separately

                // pointer events (mouse, pen, touch)
                if (window.PointerEvent) {
                    docElem.addEventListener('pointerdown', updateInput);
                    docElem.addEventListener('pointermove', setIntent);
                } else if (window.MSPointerEvent) {
                    docElem.addEventListener('MSPointerDown', updateInput);
                    docElem.addEventListener('MSPointerMove', setIntent);
                } else {

                    // mouse events
                    docElem.addEventListener('mousedown', updateInput);
                    docElem.addEventListener('mousemove', setIntent);

                    // touch events
                    if ('ontouchstart'in window) {
                        docElem.addEventListener('touchstart', touchBuffer);
                    }
                }

                // mouse wheel
                docElem.addEventListener(detectWheel(), setIntent);

                // keyboard events
                docElem.addEventListener('keydown', updateInput);
                docElem.addEventListener('keyup', updateInput);
            };

            // checks conditions before updating new input
            var updateInput = function(event) {

                // only execute if the touch buffer timer isn't running
                if (!isBuffering) {
                    var eventKey = event.which;
                    var value = inputMap[event.type];
                    if (value === 'pointer')
                        value = pointerType(event);

                    if (currentInput !== value || currentIntent !== value) {

                        var activeInput = (document.activeElement && formInputs.indexOf(document.activeElement.nodeName.toLowerCase()) === -1) ? true : false;

                        if (value === 'touch' ||
                        // ignore mouse modifier keys
                        (value === 'mouse' && ignoreMap.indexOf(eventKey) === -1) ||
                        // don't switch if the current element is a form input
                        (value === 'keyboard' && activeInput)) {

                            // set the current and catch-all variable
                            currentInput = currentIntent = value;

                            setInput();
                        }
                    }
                }
            };

            // updates the doc and `inputTypes` array with new input
            var setInput = function() {
                docElem.setAttribute('data-whatinput', currentInput);
                docElem.setAttribute('data-whatintent', currentInput);

                if (inputTypes.indexOf(currentInput) === -1) {
                    inputTypes.push(currentInput);
                    docElem.className += ' whatinput-types-' + currentInput;
                }
            };

            // updates input intent for `mousemove` and `pointermove`
            var setIntent = function(event) {

                // only execute if the touch buffer timer isn't running
                if (!isBuffering) {
                    var value = inputMap[event.type];
                    if (value === 'pointer')
                        value = pointerType(event);

                    if (currentIntent !== value) {
                        currentIntent = value;

                        docElem.setAttribute('data-whatintent', currentIntent);
                    }
                }
            };

            // buffers touch events because they frequently also fire mouse events
            var touchBuffer = function(event) {

                // clear the timer if it happens to be running
                window.clearTimeout(touchTimer);

                // set the current input
                updateInput(event);

                // set the isBuffering to `true`
                isBuffering = true;

                // run the timer
                touchTimer = window.setTimeout(function() {

                    // if the timer runs out, set isBuffering back to `false`
                    isBuffering = false;
                }, 200);
            };

            /*
	    ---------------
	    Utilities
	    ---------------
	  */

            var pointerType = function(event) {
                if (typeof event.pointerType === 'number') {
                    return pointerMap[event.pointerType];
                } else {
                    return (event.pointerType === 'pen') ? 'touch' : event.pointerType;
                    // treat pen like touch
                }
            };

            // detect version of mouse wheel event to use
            // via https://developer.mozilla.org/en-US/docs/Web/Events/wheel
            var detectWheel = function() {
                return 'onwheel'in document.createElement('div') ? 'wheel' : // Modern browsers support "wheel"

                document.onmousewheel !== undefined ? 'mousewheel' : // Webkit and IE support at least "mousewheel"
                'DOMMouseScroll';
                // let's assume that remaining browsers are older Firefox
            };

            /*
	    ---------------
	    Init

	    don't start script unless browser cuts the mustard
	    (also passes if polyfills are used)
	    ---------------
	  */

            if ('addEventListener'in window && Array.prototype.indexOf) {
                setUp();
            }

            /*
	    ---------------
	    API
	    ---------------
	  */

            return {

                // returns string: the current input type
                // opt: 'loose'|'strict'
                // 'strict' (default): returns the same value as the `data-whatinput` attribute
                // 'loose': includes `data-whatintent` value if it's more current than `data-whatinput`
                ask: function(opt) {
                    return (opt === 'loose') ? currentIntent : currentInput;
                },

                // returns array: all the detected input types
                types: function() {
                    return inputTypes;
                }

            };

        }());

        /***/
    }
    /******/
    ])
});
;;/*!
 * headroom.js v0.9.3 - Give your page some headroom. Hide your header until you need it
 * Copyright (c) 2016 Nick Williams - http://wicky.nillia.ms/headroom.js
 * License: MIT
 */

!function(a, b) {
    "use strict";
    "function" == typeof define && define.amd ? define([], b) : "object" == typeof exports ? module.exports = b() : a.Headroom = b()
}(this, function() {
    "use strict";
    function a(a) {
        this.callback = a,
        this.ticking = !1
    }
    function b(a) {
        return a && "undefined" != typeof window && (a === window || a.nodeType)
    }
    function c(a) {
        if (arguments.length <= 0)
            throw new Error("Missing arguments in extend function");
        var d, e, f = a || {};
        for (e = 1; e < arguments.length; e++) {
            var g = arguments[e] || {};
            for (d in g)
                "object" != typeof f[d] || b(f[d]) ? f[d] = f[d] || g[d] : f[d] = c(f[d], g[d])
        }
        return f
    }
    function d(a) {
        return a === Object(a) ? a : {
            down: a,
            up: a
        }
    }
    function e(a, b) {
        b = c(b, e.options),
        this.lastKnownScrollY = 0,
        this.elem = a,
        this.tolerance = d(b.tolerance),
        this.classes = b.classes,
        this.offset = b.offset,
        this.scroller = b.scroller,
        this.initialised = !1,
        this.onPin = b.onPin,
        this.onUnpin = b.onUnpin,
        this.onTop = b.onTop,
        this.onNotTop = b.onNotTop,
        this.onBottom = b.onBottom,
        this.onNotBottom = b.onNotBottom
    }
    var f = {
        bind: !!function() {}
        .bind,
        classList: "classList"in document.documentElement,
        rAF: !!(window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame)
    };
    return window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame,
    a.prototype = {
        constructor: a,
        update: function() {
            this.callback && this.callback(),
            this.ticking = !1
        },
        requestTick: function() {
            this.ticking || (requestAnimationFrame(this.rafCallback || (this.rafCallback = this.update.bind(this))),
            this.ticking = !0)
        },
        handleEvent: function() {
            this.requestTick()
        }
    },
    e.prototype = {
        constructor: e,
        init: function() {
            return e.cutsTheMustard ? (this.debouncer = new a(this.update.bind(this)),
            this.elem.classList.add(this.classes.initial),
            setTimeout(this.attachEvent.bind(this), 100),
            this) : void 0
        },
        destroy: function() {
            var a = this.classes;
            this.initialised = !1,
            this.elem.classList.remove(a.unpinned, a.pinned, a.top, a.notTop, a.initial),
            this.scroller.removeEventListener("scroll", this.debouncer, !1)
        },
        attachEvent: function() {
            this.initialised || (this.lastKnownScrollY = this.getScrollY(),
            this.initialised = !0,
            this.scroller.addEventListener("scroll", this.debouncer, !1),
            this.debouncer.handleEvent())
        },
        unpin: function() {
            var a = this.elem.classList
              , b = this.classes;
            !a.contains(b.pinned) && a.contains(b.unpinned) || (a.add(b.unpinned),
            a.remove(b.pinned),
            this.onUnpin && this.onUnpin.call(this))
        },
        pin: function() {
            var a = this.elem.classList
              , b = this.classes;
            a.contains(b.unpinned) && (a.remove(b.unpinned),
            a.add(b.pinned),
            this.onPin && this.onPin.call(this))
        },
        top: function() {
            var a = this.elem.classList
              , b = this.classes;
            a.contains(b.top) || (a.add(b.top),
            a.remove(b.notTop),
            this.onTop && this.onTop.call(this))
        },
        notTop: function() {
            var a = this.elem.classList
              , b = this.classes;
            a.contains(b.notTop) || (a.add(b.notTop),
            a.remove(b.top),
            this.onNotTop && this.onNotTop.call(this))
        },
        bottom: function() {
            var a = this.elem.classList
              , b = this.classes;
            a.contains(b.bottom) || (a.add(b.bottom),
            a.remove(b.notBottom),
            this.onBottom && this.onBottom.call(this))
        },
        notBottom: function() {
            var a = this.elem.classList
              , b = this.classes;
            a.contains(b.notBottom) || (a.add(b.notBottom),
            a.remove(b.bottom),
            this.onNotBottom && this.onNotBottom.call(this))
        },
        getScrollY: function() {
            return void 0 !== this.scroller.pageYOffset ? this.scroller.pageYOffset : void 0 !== this.scroller.scrollTop ? this.scroller.scrollTop : (document.documentElement || document.body.parentNode || document.body).scrollTop
        },
        getViewportHeight: function() {
            return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
        },
        getElementPhysicalHeight: function(a) {
            return Math.max(a.offsetHeight, a.clientHeight)
        },
        getScrollerPhysicalHeight: function() {
            return this.scroller === window || this.scroller === document.body ? this.getViewportHeight() : this.getElementPhysicalHeight(this.scroller)
        },
        getDocumentHeight: function() {
            var a = document.body
              , b = document.documentElement;
            return Math.max(a.scrollHeight, b.scrollHeight, a.offsetHeight, b.offsetHeight, a.clientHeight, b.clientHeight)
        },
        getElementHeight: function(a) {
            return Math.max(a.scrollHeight, a.offsetHeight, a.clientHeight)
        },
        getScrollerHeight: function() {
            return this.scroller === window || this.scroller === document.body ? this.getDocumentHeight() : this.getElementHeight(this.scroller)
        },
        isOutOfBounds: function(a) {
            var b = 0 > a
              , c = a + this.getScrollerPhysicalHeight() > this.getScrollerHeight();
            return b || c
        },
        toleranceExceeded: function(a, b) {
            return Math.abs(a - this.lastKnownScrollY) >= this.tolerance[b]
        },
        shouldUnpin: function(a, b) {
            var c = a > this.lastKnownScrollY
              , d = a >= this.offset;
            return c && d && b
        },
        shouldPin: function(a, b) {
            var c = a < this.lastKnownScrollY
              , d = a <= this.offset;
            return c && b || d
        },
        update: function() {
            var a = this.getScrollY()
              , b = a > this.lastKnownScrollY ? "down" : "up"
              , c = this.toleranceExceeded(a, b);
            this.isOutOfBounds(a) || (a <= this.offset ? this.top() : this.notTop(),
            a + this.getViewportHeight() >= this.getScrollerHeight() ? this.bottom() : this.notBottom(),
            this.shouldUnpin(a, c) ? this.unpin() : this.shouldPin(a, c) && this.pin(),
            this.lastKnownScrollY = a)
        }
    },
    e.options = {
        tolerance: {
            up: 0,
            down: 0
        },
        offset: 0,
        scroller: window,
        classes: {
            pinned: "headroom--pinned",
            unpinned: "headroom--unpinned",
            top: "headroom--top",
            notTop: "headroom--not-top",
            bottom: "headroom--bottom",
            notBottom: "headroom--not-bottom",
            initial: "headroom"
        }
    },
    e.cutsTheMustard = "undefined" != typeof f && f.rAF && f.bind && f.classList,
    e
});
;/* ES6 Promise polyfill | https://github.com/lahmatiy/es6-promise-polyfill */
(function(t) {
    function z() {
        for (var a = 0; a < g.length; a++)
            g[a][0](g[a][1]);
        g = [];
        m = !1
    }
    function n(a, b) {
        g.push([a, b]);
        m || (m = !0,
        A(z, 0))
    }
    function B(a, b) {
        function c(a) {
            p(b, a)
        }
        function h(a) {
            k(b, a)
        }
        try {
            a(c, h)
        } catch (d) {
            h(d)
        }
    }
    function u(a) {
        var b = a.owner
          , c = b.state_
          , b = b.data_
          , h = a[c];
        a = a.then;
        if ("function" === typeof h) {
            c = l;
            try {
                b = h(b)
            } catch (d) {
                k(a, d)
            }
        }
        v(a, b) || (c === l && p(a, b),
        c === q && k(a, b))
    }
    function v(a, b) {
        var c;
        try {
            if (a === b)
                throw new TypeError("A promises callback cannot return that same promise.");
            if (b && ("function" === typeof b || "object" === typeof b)) {
                var h = b.then;
                if ("function" === typeof h)
                    return h.call(b, function(d) {
                        c || (c = !0,
                        b !== d ? p(a, d) : w(a, d))
                    }, function(b) {
                        c || (c = !0,
                        k(a, b))
                    }),
                    !0
            }
        } catch (d) {
            return c || k(a, d),
            !0
        }
        return !1
    }
    function p(a, b) {
        a !== b && v(a, b) || w(a, b)
    }
    function w(a, b) {
        a.state_ === r && (a.state_ = x,
        a.data_ = b,
        n(C, a))
    }
    function k(a, b) {
        a.state_ === r && (a.state_ = x,
        a.data_ = b,
        n(D, a))
    }
    function y(a) {
        var b = a.then_;
        a.then_ = void 0;
        for (a = 0; a < b.length; a++)
            u(b[a])
    }
    function C(a) {
        a.state_ = l;
        y(a)
    }
    function D(a) {
        a.state_ = q;
        y(a)
    }
    function e(a) {
        if ("function" !== typeof a)
            throw new TypeError("Promise constructor takes a function argument");
        if (!1 === this instanceof e)
            throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
        this.then_ = [];
        B(a, this)
    }
    var f = t.Promise
      , s = f && "resolve"in f && "reject"in f && "all"in f && "race"in f && function() {
        var a;
        new f(function(b) {
            a = b
        }
        );
        return "function" === typeof a
    }();
    "undefined" !== typeof exports && exports ? (exports.Promise = s ? f : e,
    exports.Polyfill = e) : "function" == typeof define && define.amd ? define(function() {
        return s ? f : e
    }) : s || (t.Promise = e);
    var r = "pending", x = "sealed", l = "fulfilled", q = "rejected", E = function() {}, A = "undefined" !== typeof setImmediate ? setImmediate : setTimeout, g = [], m;
    e.prototype = {
        constructor: e,
        state_: r,
        then_: null,
        data_: void 0,
        then: function(a, b) {
            var c = {
                owner: this,
                then: new this.constructor(E),
                fulfilled: a,
                rejected: b
            };
            this.state_ === l || this.state_ === q ? n(u, c) : this.then_.push(c);
            return c.then
        },
        "catch": function(a) {
            return this.then(null, a)
        }
    };
    e.all = function(a) {
        if ("[object Array]" !== Object.prototype.toString.call(a))
            throw new TypeError("You must pass an array to Promise.all().");
        return new this(function(b, c) {
            function h(a) {
                e++;
                return function(c) {
                    d[a] = c;
                    --e || b(d)
                }
            }
            for (var d = [], e = 0, f = 0, g; f < a.length; f++)
                (g = a[f]) && "function" === typeof g.then ? g.then(h(f), c) : d[f] = g;
            e || b(d)
        }
        )
    }
    ;
    e.race = function(a) {
        if ("[object Array]" !== Object.prototype.toString.call(a))
            throw new TypeError("You must pass an array to Promise.race().");
        return new this(function(b, c) {
            for (var e = 0, d; e < a.length; e++)
                (d = a[e]) && "function" === typeof d.then ? d.then(b, c) : b(d)
        }
        )
    }
    ;
    e.resolve = function(a) {
        return a && "object" === typeof a && a.constructor === this ? a : new this(function(b) {
            b(a)
        }
        )
    }
    ;
    e.reject = function(a) {
        return new this(function(b, c) {
            c(a)
        }
        )
    }
}
)("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this);
;/*! jQuery & Zepto Lazy v1.7.5 - http://jquery.eisbehr.de/lazy - MIT&GPL-2.0 license - Copyright 2012-2017 Daniel 'Eisbehr' Kern */
!function(t, e) {
    "use strict";
    function r(r, a, i, l, u) {
        function f() {
            L = t.devicePixelRatio > 1,
            c(i),
            a.delay >= 0 && setTimeout(function() {
                s(!0)
            }, a.delay),
            (a.delay < 0 || a.combined) && (l.e = v(a.throttle, function(t) {
                "resize" === t.type && (w = B = -1),
                s(t.all)
            }),
            l.a = function(t) {
                c(t),
                i.push.apply(i, t)
            }
            ,
            l.g = function() {
                return i = n(i).filter(function() {
                    return !n(this).data(a.loadedName)
                })
            }
            ,
            l.f = function(t) {
                for (var e = 0; e < t.length; e++) {
                    var r = i.filter(function() {
                        return this === t[e]
                    });
                    r.length && s(!1, r)
                }
            }
            ,
            s(),
            n(a.appendScroll).on("scroll." + u + " resize." + u, l.e))
        }
        function c(t) {
            var i = a.defaultImage
              , o = a.placeholder
              , l = a.imageBase
              , u = a.srcsetAttribute
              , f = a.loaderAttribute
              , c = a._f || {};
            t = n(t).filter(function() {
                var t = n(this)
                  , r = m(this);
                return !t.data(a.handledName) && (t.attr(a.attribute) || t.attr(u) || t.attr(f) || c[r] !== e)
            }).data("plugin_" + a.name, r);
            for (var s = 0, d = t.length; s < d; s++) {
                var A = n(t[s])
                  , g = m(t[s])
                  , h = A.attr(a.imageBaseAttribute) || l;
                g === N && h && A.attr(u) && A.attr(u, b(A.attr(u), h)),
                c[g] === e || A.attr(f) || A.attr(f, c[g]),
                g === N && i && !A.attr(E) ? A.attr(E, i) : g === N || !o || A.css(O) && "none" !== A.css(O) || A.css(O, "url('" + o + "')")
            }
        }
        function s(t, e) {
            if (!i.length)
                return void (a.autoDestroy && r.destroy());
            for (var o = e || i, l = !1, u = a.imageBase || "", f = a.srcsetAttribute, c = a.handledName, s = 0; s < o.length; s++)
                if (t || e || A(o[s])) {
                    var g = n(o[s])
                      , h = m(o[s])
                      , b = g.attr(a.attribute)
                      , v = g.attr(a.imageBaseAttribute) || u
                      , p = g.attr(a.loaderAttribute);
                    g.data(c) || a.visibleOnly && !g.is(":visible") || !((b || g.attr(f)) && (h === N && (v + b !== g.attr(E) || g.attr(f) !== g.attr(F)) || h !== N && v + b !== g.css(O)) || p) || (l = !0,
                    g.data(c, !0),
                    d(g, h, v, p))
                }
            l && (i = n(i).filter(function() {
                return !n(this).data(c)
            }))
        }
        function d(t, e, r, i) {
            ++z;
            var o = function() {
                y("onError", t),
                p(),
                o = n.noop
            };
            y("beforeLoad", t);
            var l = a.attribute
              , u = a.srcsetAttribute
              , f = a.sizesAttribute
              , c = a.retinaAttribute
              , s = a.removeAttribute
              , d = a.loadedName
              , A = t.attr(c);
            if (i) {
                var g = function() {
                    s && t.removeAttr(a.loaderAttribute),
                    t.data(d, !0),
                    y(T, t),
                    setTimeout(p, 1),
                    g = n.noop
                };
                t.off(I).one(I, o).one(D, g),
                y(i, t, function(e) {
                    e ? (t.off(D),
                    g()) : (t.off(I),
                    o())
                }) || t.trigger(I)
            } else {
                var h = n(new Image);
                h.one(I, o).one(D, function() {
                    t.hide(),
                    e === N ? t.attr(C, h.attr(C)).attr(F, h.attr(F)).attr(E, h.attr(E)) : t.css(O, "url('" + h.attr(E) + "')"),
                    t[a.effect](a.effectTime),
                    s && (t.removeAttr(l + " " + u + " " + c + " " + a.imageBaseAttribute),
                    f !== C && t.removeAttr(f)),
                    t.data(d, !0),
                    y(T, t),
                    h.remove(),
                    p()
                });
                var m = (L && A ? A : t.attr(l)) || "";
                h.attr(C, t.attr(f)).attr(F, t.attr(u)).attr(E, m ? r + m : null),
                h.complete && h.trigger(D)
            }
        }
        function A(t) {
            var e = t.getBoundingClientRect()
              , r = a.scrollDirection
              , n = a.threshold
              , i = h() + n > e.top && -n < e.bottom
              , o = g() + n > e.left && -n < e.right;
            return "vertical" === r ? i : "horizontal" === r ? o : i && o
        }
        function g() {
            return w >= 0 ? w : w = n(t).width()
        }
        function h() {
            return B >= 0 ? B : B = n(t).height()
        }
        function m(t) {
            return t.tagName.toLowerCase()
        }
        function b(t, e) {
            if (e) {
                var r = t.split(",");
                t = "";
                for (var a = 0, n = r.length; a < n; a++)
                    t += e + r[a].trim() + (a !== n - 1 ? "," : "")
            }
            return t
        }
        function v(t, e) {
            var n, i = 0;
            return function(o, l) {
                function u() {
                    i = +new Date,
                    e.call(r, o)
                }
                var f = +new Date - i;
                n && clearTimeout(n),
                f > t || !a.enableThrottle || l ? u() : n = setTimeout(u, t - f)
            }
        }
        function p() {
            --z,
            i.length || z || y("onFinishedAll")
        }
        function y(t, e, n) {
            return !!(t = a[t]) && (t.apply(r, [].slice.call(arguments, 1)),
            !0)
        }
        var z = 0
          , w = -1
          , B = -1
          , L = !1
          , T = "afterLoad"
          , D = "load"
          , I = "error"
          , N = "img"
          , E = "src"
          , F = "srcset"
          , C = "sizes"
          , O = "background-image";
        "event" === a.bind || o ? f() : n(t).on(D + "." + u, f)
    }
    function a(a, o) {
        var l = this
          , u = n.extend({}, l.config, o)
          , f = {}
          , c = u.name + "-" + ++i;
        return l.config = function(t, r) {
            return r === e ? u[t] : (u[t] = r,
            l)
        }
        ,
        l.addItems = function(t) {
            return f.a && f.a("string" === n.type(t) ? n(t) : t),
            l
        }
        ,
        l.getItems = function() {
            return f.g ? f.g() : {}
        }
        ,
        l.update = function(t) {
            return f.e && f.e({}, !t),
            l
        }
        ,
        l.force = function(t) {
            return f.f && f.f("string" === n.type(t) ? n(t) : t),
            l
        }
        ,
        l.loadAll = function() {
            return f.e && f.e({
                all: !0
            }, !0),
            l
        }
        ,
        l.destroy = function() {
            return n(u.appendScroll).off("." + c, f.e),
            n(t).off("." + c),
            f = {},
            e
        }
        ,
        r(l, u, a, f, c),
        u.chainable ? a : l
    }
    var n = t.jQuery || t.Zepto
      , i = 0
      , o = !1;
    n.fn.Lazy = n.fn.lazy = function(t) {
        return new a(this,t)
    }
    ,
    n.Lazy = n.lazy = function(t, r, i) {
        if (n.isFunction(r) && (i = r,
        r = []),
        n.isFunction(i)) {
            t = n.isArray(t) ? t : [t],
            r = n.isArray(r) ? r : [r];
            for (var o = a.prototype.config, l = o._f || (o._f = {}), u = 0, f = t.length; u < f; u++)
                (o[t[u]] === e || n.isFunction(o[t[u]])) && (o[t[u]] = i);
            for (var c = 0, s = r.length; c < s; c++)
                l[r[c]] = t[0]
        }
    }
    ,
    a.prototype.config = {
        name: "lazy",
        chainable: !0,
        autoDestroy: !0,
        bind: "load",
        threshold: 500,
        visibleOnly: !1,
        appendScroll: t,
        scrollDirection: "both",
        imageBase: null,
        defaultImage: "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",
        placeholder: null,
        delay: -1,
        combined: !1,
        attribute: "data-src",
        srcsetAttribute: "data-srcset",
        sizesAttribute: "data-sizes",
        retinaAttribute: "data-retina",
        loaderAttribute: "data-loader",
        imageBaseAttribute: "data-imagebase",
        removeAttribute: !0,
        handledName: "handled",
        loadedName: "loaded",
        effect: "show",
        effectTime: 0,
        enableThrottle: !0,
        throttle: 250,
        beforeLoad: e,
        afterLoad: e,
        onError: e,
        onFinishedAll: e
    },
    n(t).on("load", function() {
        o = !0
    })
}(window);
;/*
* Fingerprintjs2 2.1.0 - Modern & flexible browser fingerprint library v2
* https://github.com/Valve/fingerprintjs2
* Copyright (c) 2020 Valentin Vasilyev (valentin@fingerprintjs.com)
* Licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) license.
*
* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
* AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
* IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
* ARE DISCLAIMED. IN NO EVENT SHALL VALENTIN VASILYEV BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
* THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
/*
* This software contains code from open-source projects:
* MurmurHash3 by Karan Lyons (https://github.com/karanlyons/murmurHash3.js)
*/

/* global define */
(function(name, context, definition) {
    'use strict'
    if (typeof window !== 'undefined' && typeof define === 'function' && define.amd) {
        define(definition)
    } else if (typeof module !== 'undefined' && module.exports) {
        module.exports = definition()
    } else if (context.exports) {
        context.exports = definition()
    } else {
        context[name] = definition()
    }
}
)('Fingerprint2', this, function() {
    'use strict'

    // detect if object is array
    // only implement if no native implementation is available
    if (typeof Array.isArray === 'undefined') {
        Array.isArray = function(obj) {
            return Object.prototype.toString.call(obj) === '[object Array]'
        }
    }
    ;
    /// MurmurHash3 related functions

    //
    // Given two 64bit ints (as an array of two 32bit ints) returns the two
    // added together as a 64bit int (as an array of two 32bit ints).
    //
    var x64Add = function(m, n) {
        m = [m[0] >>> 16, m[0] & 0xffff, m[1] >>> 16, m[1] & 0xffff]
        n = [n[0] >>> 16, n[0] & 0xffff, n[1] >>> 16, n[1] & 0xffff]
        var o = [0, 0, 0, 0]
        o[3] += m[3] + n[3]
        o[2] += o[3] >>> 16
        o[3] &= 0xffff
        o[2] += m[2] + n[2]
        o[1] += o[2] >>> 16
        o[2] &= 0xffff
        o[1] += m[1] + n[1]
        o[0] += o[1] >>> 16
        o[1] &= 0xffff
        o[0] += m[0] + n[0]
        o[0] &= 0xffff
        return [(o[0] << 16) | o[1], (o[2] << 16) | o[3]]
    }

    //
    // Given two 64bit ints (as an array of two 32bit ints) returns the two
    // multiplied together as a 64bit int (as an array of two 32bit ints).
    //
    var x64Multiply = function(m, n) {
        m = [m[0] >>> 16, m[0] & 0xffff, m[1] >>> 16, m[1] & 0xffff]
        n = [n[0] >>> 16, n[0] & 0xffff, n[1] >>> 16, n[1] & 0xffff]
        var o = [0, 0, 0, 0]
        o[3] += m[3] * n[3]
        o[2] += o[3] >>> 16
        o[3] &= 0xffff
        o[2] += m[2] * n[3]
        o[1] += o[2] >>> 16
        o[2] &= 0xffff
        o[2] += m[3] * n[2]
        o[1] += o[2] >>> 16
        o[2] &= 0xffff
        o[1] += m[1] * n[3]
        o[0] += o[1] >>> 16
        o[1] &= 0xffff
        o[1] += m[2] * n[2]
        o[0] += o[1] >>> 16
        o[1] &= 0xffff
        o[1] += m[3] * n[1]
        o[0] += o[1] >>> 16
        o[1] &= 0xffff
        o[0] += (m[0] * n[3]) + (m[1] * n[2]) + (m[2] * n[1]) + (m[3] * n[0])
        o[0] &= 0xffff
        return [(o[0] << 16) | o[1], (o[2] << 16) | o[3]]
    }
    //
    // Given a 64bit int (as an array of two 32bit ints) and an int
    // representing a number of bit positions, returns the 64bit int (as an
    // array of two 32bit ints) rotated left by that number of positions.
    //
    var x64Rotl = function(m, n) {
        n %= 64
        if (n === 32) {
            return [m[1], m[0]]
        } else if (n < 32) {
            return [(m[0] << n) | (m[1] >>> (32 - n)), (m[1] << n) | (m[0] >>> (32 - n))]
        } else {
            n -= 32
            return [(m[1] << n) | (m[0] >>> (32 - n)), (m[0] << n) | (m[1] >>> (32 - n))]
        }
    }
    //
    // Given a 64bit int (as an array of two 32bit ints) and an int
    // representing a number of bit positions, returns the 64bit int (as an
    // array of two 32bit ints) shifted left by that number of positions.
    //
    var x64LeftShift = function(m, n) {
        n %= 64
        if (n === 0) {
            return m
        } else if (n < 32) {
            return [(m[0] << n) | (m[1] >>> (32 - n)), m[1] << n]
        } else {
            return [m[1] << (n - 32), 0]
        }
    }
    //
    // Given two 64bit ints (as an array of two 32bit ints) returns the two
    // xored together as a 64bit int (as an array of two 32bit ints).
    //
    var x64Xor = function(m, n) {
        return [m[0] ^ n[0], m[1] ^ n[1]]
    }
    //
    // Given a block, returns murmurHash3's final x64 mix of that block.
    // (`[0, h[0] >>> 1]` is a 33 bit unsigned right shift. This is the
    // only place where we need to right shift 64bit ints.)
    //
    var x64Fmix = function(h) {
        h = x64Xor(h, [0, h[0] >>> 1])
        h = x64Multiply(h, [0xff51afd7, 0xed558ccd])
        h = x64Xor(h, [0, h[0] >>> 1])
        h = x64Multiply(h, [0xc4ceb9fe, 0x1a85ec53])
        h = x64Xor(h, [0, h[0] >>> 1])
        return h
    }

    //
    // Given a string and an optional seed as an int, returns a 128 bit
    // hash using the x64 flavor of MurmurHash3, as an unsigned hex.
    //
    var x64hash128 = function(key, seed) {
        key = key || ''
        seed = seed || 0
        var remainder = key.length % 16
        var bytes = key.length - remainder
        var h1 = [0, seed]
        var h2 = [0, seed]
        var k1 = [0, 0]
        var k2 = [0, 0]
        var c1 = [0x87c37b91, 0x114253d5]
        var c2 = [0x4cf5ad43, 0x2745937f]
        for (var i = 0; i < bytes; i = i + 16) {
            k1 = [((key.charCodeAt(i + 4) & 0xff)) | ((key.charCodeAt(i + 5) & 0xff) << 8) | ((key.charCodeAt(i + 6) & 0xff) << 16) | ((key.charCodeAt(i + 7) & 0xff) << 24), ((key.charCodeAt(i) & 0xff)) | ((key.charCodeAt(i + 1) & 0xff) << 8) | ((key.charCodeAt(i + 2) & 0xff) << 16) | ((key.charCodeAt(i + 3) & 0xff) << 24)]
            k2 = [((key.charCodeAt(i + 12) & 0xff)) | ((key.charCodeAt(i + 13) & 0xff) << 8) | ((key.charCodeAt(i + 14) & 0xff) << 16) | ((key.charCodeAt(i + 15) & 0xff) << 24), ((key.charCodeAt(i + 8) & 0xff)) | ((key.charCodeAt(i + 9) & 0xff) << 8) | ((key.charCodeAt(i + 10) & 0xff) << 16) | ((key.charCodeAt(i + 11) & 0xff) << 24)]
            k1 = x64Multiply(k1, c1)
            k1 = x64Rotl(k1, 31)
            k1 = x64Multiply(k1, c2)
            h1 = x64Xor(h1, k1)
            h1 = x64Rotl(h1, 27)
            h1 = x64Add(h1, h2)
            h1 = x64Add(x64Multiply(h1, [0, 5]), [0, 0x52dce729])
            k2 = x64Multiply(k2, c2)
            k2 = x64Rotl(k2, 33)
            k2 = x64Multiply(k2, c1)
            h2 = x64Xor(h2, k2)
            h2 = x64Rotl(h2, 31)
            h2 = x64Add(h2, h1)
            h2 = x64Add(x64Multiply(h2, [0, 5]), [0, 0x38495ab5])
        }
        k1 = [0, 0]
        k2 = [0, 0]
        switch (remainder) {
        case 15:
            k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 14)], 48))
            // fallthrough
        case 14:
            k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 13)], 40))
            // fallthrough
        case 13:
            k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 12)], 32))
            // fallthrough
        case 12:
            k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 11)], 24))
            // fallthrough
        case 11:
            k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 10)], 16))
            // fallthrough
        case 10:
            k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 9)], 8))
            // fallthrough
        case 9:
            k2 = x64Xor(k2, [0, key.charCodeAt(i + 8)])
            k2 = x64Multiply(k2, c2)
            k2 = x64Rotl(k2, 33)
            k2 = x64Multiply(k2, c1)
            h2 = x64Xor(h2, k2)
            // fallthrough
        case 8:
            k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 7)], 56))
            // fallthrough
        case 7:
            k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 6)], 48))
            // fallthrough
        case 6:
            k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 5)], 40))
            // fallthrough
        case 5:
            k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 4)], 32))
            // fallthrough
        case 4:
            k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 3)], 24))
            // fallthrough
        case 3:
            k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 2)], 16))
            // fallthrough
        case 2:
            k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 1)], 8))
            // fallthrough
        case 1:
            k1 = x64Xor(k1, [0, key.charCodeAt(i)])
            k1 = x64Multiply(k1, c1)
            k1 = x64Rotl(k1, 31)
            k1 = x64Multiply(k1, c2)
            h1 = x64Xor(h1, k1)
            // fallthrough
        }
        h1 = x64Xor(h1, [0, key.length])
        h2 = x64Xor(h2, [0, key.length])
        h1 = x64Add(h1, h2)
        h2 = x64Add(h2, h1)
        h1 = x64Fmix(h1)
        h2 = x64Fmix(h2)
        h1 = x64Add(h1, h2)
        h2 = x64Add(h2, h1)
        return ('00000000' + (h1[0] >>> 0).toString(16)).slice(-8) + ('00000000' + (h1[1] >>> 0).toString(16)).slice(-8) + ('00000000' + (h2[0] >>> 0).toString(16)).slice(-8) + ('00000000' + (h2[1] >>> 0).toString(16)).slice(-8)
    }

    var defaultOptions = {
        preprocessor: null,
        audio: {
            timeout: 1000,
            // On iOS 11, audio context can only be used in response to user interaction.
            // We require users to explicitly enable audio fingerprinting on iOS 11.
            // See https://stackoverflow.com/questions/46363048/onaudioprocess-not-called-on-ios11#46534088
            excludeIOS11: true
        },
        fonts: {
            swfContainerId: 'fingerprintjs2',
            swfPath: 'flash/compiled/FontList.swf',
            userDefinedFonts: [],
            extendedJsFonts: false
        },
        screen: {
            // To ensure consistent fingerprints when users rotate their mobile devices
            detectScreenOrientation: true
        },
        plugins: {
            sortPluginsFor: [/palemoon/i],
            excludeIE: false
        },
        extraComponents: [],
        excludes: {
            // Unreliable on Windows, see https://github.com/Valve/fingerprintjs2/issues/375
            'enumerateDevices': true,
            // devicePixelRatio depends on browser zoom, and it's impossible to detect browser zoom
            'pixelRatio': true,
            // DNT depends on incognito mode for some browsers (Chrome) and it's impossible to detect incognito mode
            'doNotTrack': true,
            // uses js fonts already
            'fontsFlash': true
        },
        NOT_AVAILABLE: 'not available',
        ERROR: 'error',
        EXCLUDED: 'excluded'
    }

    var each = function(obj, iterator) {
        if (Array.prototype.forEach && obj.forEach === Array.prototype.forEach) {
            obj.forEach(iterator)
        } else if (obj.length === +obj.length) {
            for (var i = 0, l = obj.length; i < l; i++) {
                iterator(obj[i], i, obj)
            }
        } else {
            for (var key in obj) {
                if (obj.hasOwnProperty(key)) {
                    iterator(obj[key], key, obj)
                }
            }
        }
    }

    var map = function(obj, iterator) {
        var results = []
        // Not using strict equality so that this acts as a
        // shortcut to checking for `null` and `undefined`.
        if (obj == null) {
            return results
        }
        if (Array.prototype.map && obj.map === Array.prototype.map) {
            return obj.map(iterator)
        }
        each(obj, function(value, index, list) {
            results.push(iterator(value, index, list))
        })
        return results
    }

    var extendSoft = function(target, source) {
        if (source == null) {
            return target
        }
        var value
        var key
        for (key in source) {
            value = source[key]
            if (value != null && !(Object.prototype.hasOwnProperty.call(target, key))) {
                target[key] = value
            }
        }
        return target
    }

    // https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/enumerateDevices
    var enumerateDevicesKey = function(done, options) {
        if (!isEnumerateDevicesSupported()) {
            return done(options.NOT_AVAILABLE)
        }
        navigator.mediaDevices.enumerateDevices().then(function(devices) {
            done(devices.map(function(device) {
                return 'id=' + device.deviceId + ';gid=' + device.groupId + ';' + device.kind + ';' + device.label
            }))
        })['catch'](function(error) {
            done(error)
        })
    }

    var isEnumerateDevicesSupported = function() {
        return (navigator.mediaDevices && navigator.mediaDevices.enumerateDevices)
    }
    // Inspired by and based on https://github.com/cozylife/audio-fingerprint
    var audioKey = function(done, options) {
        var audioOptions = options.audio
        if (audioOptions.excludeIOS11 && navigator.userAgent.match(/OS 11.+Version\/11.+Safari/)) {
            // See comment for excludeUserAgent and https://stackoverflow.com/questions/46363048/onaudioprocess-not-called-on-ios11#46534088
            return done(options.EXCLUDED)
        }

        var AudioContext = window.OfflineAudioContext || window.webkitOfflineAudioContext

        if (AudioContext == null) {
            return done(options.NOT_AVAILABLE)
        }

        var context = new AudioContext(1,44100,44100)

        var oscillator = context.createOscillator()
        oscillator.type = 'triangle'
        oscillator.frequency.setValueAtTime(10000, context.currentTime)

        var compressor = context.createDynamicsCompressor()
        each([['threshold', -50], ['knee', 40], ['ratio', 12], ['reduction', -20], ['attack', 0], ['release', 0.25]], function(item) {
            if (compressor[item[0]] !== undefined && typeof compressor[item[0]].setValueAtTime === 'function') {
                compressor[item[0]].setValueAtTime(item[1], context.currentTime)
            }
        })

        oscillator.connect(compressor)
        compressor.connect(context.destination)
        oscillator.start(0)
        context.startRendering()

        var audioTimeoutId = setTimeout(function() {
            console.warn('Audio fingerprint timed out. Please report bug at https://github.com/Valve/fingerprintjs2 with your user agent: "' + navigator.userAgent + '".')
            context.oncomplete = function() {}
            context = null
            return done('audioTimeout')
        }, audioOptions.timeout)

        context.oncomplete = function(event) {
            var fingerprint
            try {
                clearTimeout(audioTimeoutId)
                fingerprint = event.renderedBuffer.getChannelData(0).slice(4500, 5000).reduce(function(acc, val) {
                    return acc + Math.abs(val)
                }, 0).toString()
                oscillator.disconnect()
                compressor.disconnect()
            } catch (error) {
                done(error)
                return
            }
            done(fingerprint)
        }
    }
    var UserAgent = function(done) {
        done(navigator.userAgent)
    }
    var webdriver = function(done, options) {
        done(navigator.webdriver == null ? options.NOT_AVAILABLE : navigator.webdriver)
    }
    var languageKey = function(done, options) {
        done(navigator.language || navigator.userLanguage || navigator.browserLanguage || navigator.systemLanguage || options.NOT_AVAILABLE)
    }
    var colorDepthKey = function(done, options) {
        done(window.screen.colorDepth || options.NOT_AVAILABLE)
    }
    var deviceMemoryKey = function(done, options) {
        done(navigator.deviceMemory || options.NOT_AVAILABLE)
    }
    var pixelRatioKey = function(done, options) {
        done(window.devicePixelRatio || options.NOT_AVAILABLE)
    }
    var screenResolutionKey = function(done, options) {
        done(getScreenResolution(options))
    }
    var getScreenResolution = function(options) {
        var resolution = [window.screen.width, window.screen.height]
        if (options.screen.detectScreenOrientation) {
            resolution.sort().reverse()
        }
        return resolution
    }
    var availableScreenResolutionKey = function(done, options) {
        done(getAvailableScreenResolution(options))
    }
    var getAvailableScreenResolution = function(options) {
        if (window.screen.availWidth && window.screen.availHeight) {
            var available = [window.screen.availHeight, window.screen.availWidth]
            if (options.screen.detectScreenOrientation) {
                available.sort().reverse()
            }
            return available
        }
        // headless browsers
        return options.NOT_AVAILABLE
    }
    var timezoneOffset = function(done) {
        done(new Date().getTimezoneOffset())
    }
    var timezone = function(done, options) {
        if (window.Intl && window.Intl.DateTimeFormat) {
            done(new window.Intl.DateTimeFormat().resolvedOptions().timeZone)
            return
        }
        done(options.NOT_AVAILABLE)
    }
    var sessionStorageKey = function(done, options) {
        done(hasSessionStorage(options))
    }
    var localStorageKey = function(done, options) {
        done(hasLocalStorage(options))
    }
    var indexedDbKey = function(done, options) {
        done(hasIndexedDB(options))
    }
    var addBehaviorKey = function(done) {
        // body might not be defined at this point or removed programmatically
        done(!!(document.body && document.body.addBehavior))
    }
    var openDatabaseKey = function(done) {
        done(!!window.openDatabase)
    }
    var cpuClassKey = function(done, options) {
        done(getNavigatorCpuClass(options))
    }
    var platformKey = function(done, options) {
        done(getNavigatorPlatform(options))
    }
    var doNotTrackKey = function(done, options) {
        done(getDoNotTrack(options))
    }
    var canvasKey = function(done, options) {
        if (isCanvasSupported()) {
            done(getCanvasFp(options))
            return
        }
        done(options.NOT_AVAILABLE)
    }
    var webglKey = function(done, options) {
        if (isWebGlSupported()) {
            done(getWebglFp())
            return
        }
        done(options.NOT_AVAILABLE)
    }
    var webglVendorAndRendererKey = function(done) {
        if (isWebGlSupported()) {
            done(getWebglVendorAndRenderer())
            return
        }
        done()
    }
    var adBlockKey = function(done) {
        done(getAdBlock())
    }
    var hasLiedLanguagesKey = function(done) {
        done(getHasLiedLanguages())
    }
    var hasLiedResolutionKey = function(done) {
        done(getHasLiedResolution())
    }
    var hasLiedOsKey = function(done) {
        done(getHasLiedOs())
    }
    var hasLiedBrowserKey = function(done) {
        done(getHasLiedBrowser())
    }
    // flash fonts (will increase fingerprinting time 20X to ~ 130-150ms)
    var flashFontsKey = function(done, options) {
        // we do flash if swfobject is loaded
        if (!hasSwfObjectLoaded()) {
            return done('swf object not loaded')
        }
        if (!hasMinFlashInstalled()) {
            return done('flash not installed')
        }
        if (!options.fonts.swfPath) {
            return done('missing options.fonts.swfPath')
        }
        loadSwfAndDetectFonts(function(fonts) {
            done(fonts)
        }, options)
    }
    // kudos to http://www.lalit.org/lab/javascript-css-font-detect/
    var jsFontsKey = function(done, options) {
        // a font will be compared against all the three default fonts.
        // and if it doesn't match all 3 then that font is not available.
        var baseFonts = ['monospace', 'sans-serif', 'serif']

        var fontList = ['Andale Mono', 'Arial', 'Arial Black', 'Arial Hebrew', 'Arial MT', 'Arial Narrow', 'Arial Rounded MT Bold', 'Arial Unicode MS', 'Bitstream Vera Sans Mono', 'Book Antiqua', 'Bookman Old Style', 'Calibri', 'Cambria', 'Cambria Math', 'Century', 'Century Gothic', 'Century Schoolbook', 'Comic Sans', 'Comic Sans MS', 'Consolas', 'Courier', 'Courier New', 'Geneva', 'Georgia', 'Helvetica', 'Helvetica Neue', 'Impact', 'Lucida Bright', 'Lucida Calligraphy', 'Lucida Console', 'Lucida Fax', 'LUCIDA GRANDE', 'Lucida Handwriting', 'Lucida Sans', 'Lucida Sans Typewriter', 'Lucida Sans Unicode', 'Microsoft Sans Serif', 'Monaco', 'Monotype Corsiva', 'MS Gothic', 'MS Outlook', 'MS PGothic', 'MS Reference Sans Serif', 'MS Sans Serif', 'MS Serif', 'MYRIAD', 'MYRIAD PRO', 'Palatino', 'Palatino Linotype', 'Segoe Print', 'Segoe Script', 'Segoe UI', 'Segoe UI Light', 'Segoe UI Semibold', 'Segoe UI Symbol', 'Tahoma', 'Times', 'Times New Roman', 'Times New Roman PS', 'Trebuchet MS', 'Verdana', 'Wingdings', 'Wingdings 2', 'Wingdings 3']

        if (options.fonts.extendedJsFonts) {
            var extendedFontList = ['Abadi MT Condensed Light', 'Academy Engraved LET', 'ADOBE CASLON PRO', 'Adobe Garamond', 'ADOBE GARAMOND PRO', 'Agency FB', 'Aharoni', 'Albertus Extra Bold', 'Albertus Medium', 'Algerian', 'Amazone BT', 'American Typewriter', 'American Typewriter Condensed', 'AmerType Md BT', 'Andalus', 'Angsana New', 'AngsanaUPC', 'Antique Olive', 'Aparajita', 'Apple Chancery', 'Apple Color Emoji', 'Apple SD Gothic Neo', 'Arabic Typesetting', 'ARCHER', 'ARNO PRO', 'Arrus BT', 'Aurora Cn BT', 'AvantGarde Bk BT', 'AvantGarde Md BT', 'AVENIR', 'Ayuthaya', 'Bandy', 'Bangla Sangam MN', 'Bank Gothic', 'BankGothic Md BT', 'Baskerville', 'Baskerville Old Face', 'Batang', 'BatangChe', 'Bauer Bodoni', 'Bauhaus 93', 'Bazooka', 'Bell MT', 'Bembo', 'Benguiat Bk BT', 'Berlin Sans FB', 'Berlin Sans FB Demi', 'Bernard MT Condensed', 'BernhardFashion BT', 'BernhardMod BT', 'Big Caslon', 'BinnerD', 'Blackadder ITC', 'BlairMdITC TT', 'Bodoni 72', 'Bodoni 72 Oldstyle', 'Bodoni 72 Smallcaps', 'Bodoni MT', 'Bodoni MT Black', 'Bodoni MT Condensed', 'Bodoni MT Poster Compressed', 'Bookshelf Symbol 7', 'Boulder', 'Bradley Hand', 'Bradley Hand ITC', 'Bremen Bd BT', 'Britannic Bold', 'Broadway', 'Browallia New', 'BrowalliaUPC', 'Brush Script MT', 'Californian FB', 'Calisto MT', 'Calligrapher', 'Candara', 'CaslonOpnface BT', 'Castellar', 'Centaur', 'Cezanne', 'CG Omega', 'CG Times', 'Chalkboard', 'Chalkboard SE', 'Chalkduster', 'Charlesworth', 'Charter Bd BT', 'Charter BT', 'Chaucer', 'ChelthmITC Bk BT', 'Chiller', 'Clarendon', 'Clarendon Condensed', 'CloisterBlack BT', 'Cochin', 'Colonna MT', 'Constantia', 'Cooper Black', 'Copperplate', 'Copperplate Gothic', 'Copperplate Gothic Bold', 'Copperplate Gothic Light', 'CopperplGoth Bd BT', 'Corbel', 'Cordia New', 'CordiaUPC', 'Cornerstone', 'Coronet', 'Cuckoo', 'Curlz MT', 'DaunPenh', 'Dauphin', 'David', 'DB LCD Temp', 'DELICIOUS', 'Denmark', 'DFKai-SB', 'Didot', 'DilleniaUPC', 'DIN', 'DokChampa', 'Dotum', 'DotumChe', 'Ebrima', 'Edwardian Script ITC', 'Elephant', 'English 111 Vivace BT', 'Engravers MT', 'EngraversGothic BT', 'Eras Bold ITC', 'Eras Demi ITC', 'Eras Light ITC', 'Eras Medium ITC', 'EucrosiaUPC', 'Euphemia', 'Euphemia UCAS', 'EUROSTILE', 'Exotc350 Bd BT', 'FangSong', 'Felix Titling', 'Fixedsys', 'FONTIN', 'Footlight MT Light', 'Forte', 'FrankRuehl', 'Fransiscan', 'Freefrm721 Blk BT', 'FreesiaUPC', 'Freestyle Script', 'French Script MT', 'FrnkGothITC Bk BT', 'Fruitger', 'FRUTIGER', 'Futura', 'Futura Bk BT', 'Futura Lt BT', 'Futura Md BT', 'Futura ZBlk BT', 'FuturaBlack BT', 'Gabriola', 'Galliard BT', 'Gautami', 'Geeza Pro', 'Geometr231 BT', 'Geometr231 Hv BT', 'Geometr231 Lt BT', 'GeoSlab 703 Lt BT', 'GeoSlab 703 XBd BT', 'Gigi', 'Gill Sans', 'Gill Sans MT', 'Gill Sans MT Condensed', 'Gill Sans MT Ext Condensed Bold', 'Gill Sans Ultra Bold', 'Gill Sans Ultra Bold Condensed', 'Gisha', 'Gloucester MT Extra Condensed', 'GOTHAM', 'GOTHAM BOLD', 'Goudy Old Style', 'Goudy Stout', 'GoudyHandtooled BT', 'GoudyOLSt BT', 'Gujarati Sangam MN', 'Gulim', 'GulimChe', 'Gungsuh', 'GungsuhChe', 'Gurmukhi MN', 'Haettenschweiler', 'Harlow Solid Italic', 'Harrington', 'Heather', 'Heiti SC', 'Heiti TC', 'HELV', 'Herald', 'High Tower Text', 'Hiragino Kaku Gothic ProN', 'Hiragino Mincho ProN', 'Hoefler Text', 'Humanst 521 Cn BT', 'Humanst521 BT', 'Humanst521 Lt BT', 'Imprint MT Shadow', 'Incised901 Bd BT', 'Incised901 BT', 'Incised901 Lt BT', 'INCONSOLATA', 'Informal Roman', 'Informal011 BT', 'INTERSTATE', 'IrisUPC', 'Iskoola Pota', 'JasmineUPC', 'Jazz LET', 'Jenson', 'Jester', 'Jokerman', 'Juice ITC', 'Kabel Bk BT', 'Kabel Ult BT', 'Kailasa', 'KaiTi', 'Kalinga', 'Kannada Sangam MN', 'Kartika', 'Kaufmann Bd BT', 'Kaufmann BT', 'Khmer UI', 'KodchiangUPC', 'Kokila', 'Korinna BT', 'Kristen ITC', 'Krungthep', 'Kunstler Script', 'Lao UI', 'Latha', 'Leelawadee', 'Letter Gothic', 'Levenim MT', 'LilyUPC', 'Lithograph', 'Lithograph Light', 'Long Island', 'Lydian BT', 'Magneto', 'Maiandra GD', 'Malayalam Sangam MN', 'Malgun Gothic', 'Mangal', 'Marigold', 'Marion', 'Marker Felt', 'Market', 'Marlett', 'Matisse ITC', 'Matura MT Script Capitals', 'Meiryo', 'Meiryo UI', 'Microsoft Himalaya', 'Microsoft JhengHei', 'Microsoft New Tai Lue', 'Microsoft PhagsPa', 'Microsoft Tai Le', 'Microsoft Uighur', 'Microsoft YaHei', 'Microsoft Yi Baiti', 'MingLiU', 'MingLiU_HKSCS', 'MingLiU_HKSCS-ExtB', 'MingLiU-ExtB', 'Minion', 'Minion Pro', 'Miriam', 'Miriam Fixed', 'Mistral', 'Modern', 'Modern No. 20', 'Mona Lisa Solid ITC TT', 'Mongolian Baiti', 'MONO', 'MoolBoran', 'Mrs Eaves', 'MS LineDraw', 'MS Mincho', 'MS PMincho', 'MS Reference Specialty', 'MS UI Gothic', 'MT Extra', 'MUSEO', 'MV Boli', 'Nadeem', 'Narkisim', 'NEVIS', 'News Gothic', 'News GothicMT', 'NewsGoth BT', 'Niagara Engraved', 'Niagara Solid', 'Noteworthy', 'NSimSun', 'Nyala', 'OCR A Extended', 'Old Century', 'Old English Text MT', 'Onyx', 'Onyx BT', 'OPTIMA', 'Oriya Sangam MN', 'OSAKA', 'OzHandicraft BT', 'Palace Script MT', 'Papyrus', 'Parchment', 'Party LET', 'Pegasus', 'Perpetua', 'Perpetua Titling MT', 'PetitaBold', 'Pickwick', 'Plantagenet Cherokee', 'Playbill', 'PMingLiU', 'PMingLiU-ExtB', 'Poor Richard', 'Poster', 'PosterBodoni BT', 'PRINCETOWN LET', 'Pristina', 'PTBarnum BT', 'Pythagoras', 'Raavi', 'Rage Italic', 'Ravie', 'Ribbon131 Bd BT', 'Rockwell', 'Rockwell Condensed', 'Rockwell Extra Bold', 'Rod', 'Roman', 'Sakkal Majalla', 'Santa Fe LET', 'Savoye LET', 'Sceptre', 'Script', 'Script MT Bold', 'SCRIPTINA', 'Serifa', 'Serifa BT', 'Serifa Th BT', 'ShelleyVolante BT', 'Sherwood', 'Shonar Bangla', 'Showcard Gothic', 'Shruti', 'Signboard', 'SILKSCREEN', 'SimHei', 'Simplified Arabic', 'Simplified Arabic Fixed', 'SimSun', 'SimSun-ExtB', 'Sinhala Sangam MN', 'Sketch Rockwell', 'Skia', 'Small Fonts', 'Snap ITC', 'Snell Roundhand', 'Socket', 'Souvenir Lt BT', 'Staccato222 BT', 'Steamer', 'Stencil', 'Storybook', 'Styllo', 'Subway', 'Swis721 BlkEx BT', 'Swiss911 XCm BT', 'Sylfaen', 'Synchro LET', 'System', 'Tamil Sangam MN', 'Technical', 'Teletype', 'Telugu Sangam MN', 'Tempus Sans ITC', 'Terminal', 'Thonburi', 'Traditional Arabic', 'Trajan', 'TRAJAN PRO', 'Tristan', 'Tubular', 'Tunga', 'Tw Cen MT', 'Tw Cen MT Condensed', 'Tw Cen MT Condensed Extra Bold', 'TypoUpright BT', 'Unicorn', 'Univers', 'Univers CE 55 Medium', 'Univers Condensed', 'Utsaah', 'Vagabond', 'Vani', 'Vijaya', 'Viner Hand ITC', 'VisualUI', 'Vivaldi', 'Vladimir Script', 'Vrinda', 'Westminster', 'WHITNEY', 'Wide Latin', 'ZapfEllipt BT', 'ZapfHumnst BT', 'ZapfHumnst Dm BT', 'Zapfino', 'Zurich BlkEx BT', 'Zurich Ex BT', 'ZWAdobeF']
            fontList = fontList.concat(extendedFontList)
        }

        fontList = fontList.concat(options.fonts.userDefinedFonts)

        // remove duplicate fonts
        fontList = fontList.filter(function(font, position) {
            return fontList.indexOf(font) === position
        })

        // we use m or w because these two characters take up the maximum width.
        // And we use a LLi so that the same matching fonts can get separated
        var testString = 'mmmmmmmmmmlli'

        // we test using 72px font size, we may use any size. I guess larger the better.
        var testSize = '72px'

        var h = document.getElementsByTagName('body')[0]

        // div to load spans for the base fonts
        var baseFontsDiv = document.createElement('div')

        // div to load spans for the fonts to detect
        var fontsDiv = document.createElement('div')

        var defaultWidth = {}
        var defaultHeight = {}

        // creates a span where the fonts will be loaded
        var createSpan = function() {
            var s = document.createElement('span')
            /*
       * We need this css as in some weird browser this
       * span elements shows up for a microSec which creates a
       * bad user experience
       */
            s.style.position = 'absolute'
            s.style.left = '-9999px'
            s.style.fontSize = testSize

            // css font reset to reset external styles
            s.style.fontStyle = 'normal'
            s.style.fontWeight = 'normal'
            s.style.letterSpacing = 'normal'
            s.style.lineBreak = 'auto'
            s.style.lineHeight = 'normal'
            s.style.textTransform = 'none'
            s.style.textAlign = 'left'
            s.style.textDecoration = 'none'
            s.style.textShadow = 'none'
            s.style.whiteSpace = 'normal'
            s.style.wordBreak = 'normal'
            s.style.wordSpacing = 'normal'

            s.innerHTML = testString
            return s
        }

        // creates a span and load the font to detect and a base font for fallback
        var createSpanWithFonts = function(fontToDetect, baseFont) {
            var s = createSpan()
            s.style.fontFamily = "'" + fontToDetect + "'," + baseFont
            return s
        }

        // creates spans for the base fonts and adds them to baseFontsDiv
        var initializeBaseFontsSpans = function() {
            var spans = []
            for (var index = 0, length = baseFonts.length; index < length; index++) {
                var s = createSpan()
                s.style.fontFamily = baseFonts[index]
                baseFontsDiv.appendChild(s)
                spans.push(s)
            }
            return spans
        }

        // creates spans for the fonts to detect and adds them to fontsDiv
        var initializeFontsSpans = function() {
            var spans = {}
            for (var i = 0, l = fontList.length; i < l; i++) {
                var fontSpans = []
                for (var j = 0, numDefaultFonts = baseFonts.length; j < numDefaultFonts; j++) {
                    var s = createSpanWithFonts(fontList[i], baseFonts[j])
                    fontsDiv.appendChild(s)
                    fontSpans.push(s)
                }
                spans[fontList[i]] = fontSpans
                // Stores {fontName : [spans for that font]}
            }
            return spans
        }

        // checks if a font is available
        var isFontAvailable = function(fontSpans) {
            var detected = false
            for (var i = 0; i < baseFonts.length; i++) {
                detected = (fontSpans[i].offsetWidth !== defaultWidth[baseFonts[i]] || fontSpans[i].offsetHeight !== defaultHeight[baseFonts[i]])
                if (detected) {
                    return detected
                }
            }
            return detected
        }

        // create spans for base fonts
        var baseFontsSpans = initializeBaseFontsSpans()

        // add the spans to the DOM
        h.appendChild(baseFontsDiv)

        // get the default width for the three base fonts
        for (var index = 0, length = baseFonts.length; index < length; index++) {
            defaultWidth[baseFonts[index]] = baseFontsSpans[index].offsetWidth
            // width for the default font
            defaultHeight[baseFonts[index]] = baseFontsSpans[index].offsetHeight
            // height for the default font
        }

        // create spans for fonts to detect
        var fontsSpans = initializeFontsSpans()

        // add all the spans to the DOM
        h.appendChild(fontsDiv)

        // check available fonts
        var available = []
        for (var i = 0, l = fontList.length; i < l; i++) {
            if (isFontAvailable(fontsSpans[fontList[i]])) {
                available.push(fontList[i])
            }
        }

        // remove spans from DOM
        h.removeChild(fontsDiv)
        h.removeChild(baseFontsDiv)
        done(available)
    }
    var pluginsComponent = function(done, options) {
        if (isIE()) {
            if (!options.plugins.excludeIE) {
                done(getIEPlugins(options))
            } else {
                done(options.EXCLUDED)
            }
        } else {
            done(getRegularPlugins(options))
        }
    }
    var getRegularPlugins = function(options) {
        if (navigator.plugins == null) {
            return options.NOT_AVAILABLE
        }

        var plugins = []
        // plugins isn't defined in Node envs.
        for (var i = 0, l = navigator.plugins.length; i < l; i++) {
            if (navigator.plugins[i]) {
                plugins.push(navigator.plugins[i])
            }
        }

        // sorting plugins only for those user agents, that we know randomize the plugins
        // every time we try to enumerate them
        if (pluginsShouldBeSorted(options)) {
            plugins = plugins.sort(function(a, b) {
                if (a.name > b.name) {
                    return 1
                }
                if (a.name < b.name) {
                    return -1
                }
                return 0
            })
        }
        return map(plugins, function(p) {
            var mimeTypes = map(p, function(mt) {
                return [mt.type, mt.suffixes]
            })
            return [p.name, p.description, mimeTypes]
        })
    }
    var getIEPlugins = function(options) {
        var result = []
        if ((Object.getOwnPropertyDescriptor && Object.getOwnPropertyDescriptor(window, 'ActiveXObject')) || ('ActiveXObject'in window)) {
            var names = ['AcroPDF.PDF', // Adobe PDF reader 7+
            'Adodb.Stream', 'AgControl.AgControl', // Silverlight
            'DevalVRXCtrl.DevalVRXCtrl.1', 'MacromediaFlashPaper.MacromediaFlashPaper', 'Msxml2.DOMDocument', 'Msxml2.XMLHTTP', 'PDF.PdfCtrl', // Adobe PDF reader 6 and earlier, brrr
            'QuickTime.QuickTime', // QuickTime
            'QuickTimeCheckObject.QuickTimeCheck.1', 'RealPlayer', 'RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)', 'RealVideo.RealVideo(tm) ActiveX Control (32-bit)', 'Scripting.Dictionary', 'SWCtl.SWCtl', // ShockWave player
            'Shell.UIHelper', 'ShockwaveFlash.ShockwaveFlash', // flash plugin
            'Skype.Detection', 'TDCCtl.TDCCtl', 'WMPlayer.OCX', // Windows media player
            'rmocx.RealPlayer G2 Control', 'rmocx.RealPlayer G2 Control.1']
            // starting to detect plugins in IE
            result = map(names, function(name) {
                try {
                    // eslint-disable-next-line no-new
                    new window.ActiveXObject(name)
                    return name
                } catch (e) {
                    return options.ERROR
                }
            })
        } else {
            result.push(options.NOT_AVAILABLE)
        }
        if (navigator.plugins) {
            result = result.concat(getRegularPlugins(options))
        }
        return result
    }
    var pluginsShouldBeSorted = function(options) {
        var should = false
        for (var i = 0, l = options.plugins.sortPluginsFor.length; i < l; i++) {
            var re = options.plugins.sortPluginsFor[i]
            if (navigator.userAgent.match(re)) {
                should = true
                break
            }
        }
        return should
    }
    var touchSupportKey = function(done) {
        done(getTouchSupport())
    }
    var hardwareConcurrencyKey = function(done, options) {
        done(getHardwareConcurrency(options))
    }
    var hasSessionStorage = function(options) {
        try {
            return !!window.sessionStorage
        } catch (e) {
            return options.ERROR
            // SecurityError when referencing it means it exists
        }
    }

    // https://bugzilla.mozilla.org/show_bug.cgi?id=781447
    var hasLocalStorage = function(options) {
        try {
            return !!window.localStorage
        } catch (e) {
            return options.ERROR
            // SecurityError when referencing it means it exists
        }
    }
    var hasIndexedDB = function(options) {
        try {
            return !!window.indexedDB
        } catch (e) {
            return options.ERROR
            // SecurityError when referencing it means it exists
        }
    }
    var getHardwareConcurrency = function(options) {
        if (navigator.hardwareConcurrency) {
            return navigator.hardwareConcurrency
        }
        return options.NOT_AVAILABLE
    }
    var getNavigatorCpuClass = function(options) {
        return navigator.cpuClass || options.NOT_AVAILABLE
    }
    var getNavigatorPlatform = function(options) {
        if (navigator.platform) {
            return navigator.platform
        } else {
            return options.NOT_AVAILABLE
        }
    }
    var getDoNotTrack = function(options) {
        if (navigator.doNotTrack) {
            return navigator.doNotTrack
        } else if (navigator.msDoNotTrack) {
            return navigator.msDoNotTrack
        } else if (window.doNotTrack) {
            return window.doNotTrack
        } else {
            return options.NOT_AVAILABLE
        }
    }
    // This is a crude and primitive touch screen detection.
    // It's not possible to currently reliably detect the  availability of a touch screen
    // with a JS, without actually subscribing to a touch event.
    // http://www.stucox.com/blog/you-cant-detect-a-touchscreen/
    // https://github.com/Modernizr/Modernizr/issues/548
    // method returns an array of 3 values:
    // maxTouchPoints, the success or failure of creating a TouchEvent,
    // and the availability of the 'ontouchstart' property

    var getTouchSupport = function() {
        var maxTouchPoints = 0
        var touchEvent
        if (typeof navigator.maxTouchPoints !== 'undefined') {
            maxTouchPoints = navigator.maxTouchPoints
        } else if (typeof navigator.msMaxTouchPoints !== 'undefined') {
            maxTouchPoints = navigator.msMaxTouchPoints
        }
        try {
            document.createEvent('TouchEvent')
            touchEvent = true
        } catch (_) {
            touchEvent = false
        }
        var touchStart = 'ontouchstart'in window
        return [maxTouchPoints, touchEvent, touchStart]
    }
    // https://www.browserleaks.com/canvas#how-does-it-work

    var getCanvasFp = function(options) {
        var result = []
        // Very simple now, need to make it more complex (geo shapes etc)
        var canvas = document.createElement('canvas')
        canvas.width = 2000
        canvas.height = 200
        canvas.style.display = 'inline'
        var ctx = canvas.getContext('2d')
        // detect browser support of canvas winding
        // http://blogs.adobe.com/webplatform/2013/01/30/winding-rules-in-canvas/
        // https://github.com/Modernizr/Modernizr/blob/master/feature-detects/canvas/winding.js
        ctx.rect(0, 0, 10, 10)
        ctx.rect(2, 2, 6, 6)
        result.push('canvas winding:' + ((ctx.isPointInPath(5, 5, 'evenodd') === false) ? 'yes' : 'no'))

        ctx.textBaseline = 'alphabetic'
        ctx.fillStyle = '#f60'
        ctx.fillRect(125, 1, 62, 20)
        ctx.fillStyle = '#069'
        // https://github.com/Valve/fingerprintjs2/issues/66
        if (options.dontUseFakeFontInCanvas) {
            ctx.font = '11pt Arial'
        } else {
            ctx.font = '11pt no-real-font-123'
        }
        ctx.fillText('Cwm fjordbank glyphs vext quiz, \ud83d\ude03', 2, 15)
        ctx.fillStyle = 'rgba(102, 204, 0, 0.2)'
        ctx.font = '18pt Arial'
        ctx.fillText('Cwm fjordbank glyphs vext quiz, \ud83d\ude03', 4, 45)

        // canvas blending
        // http://blogs.adobe.com/webplatform/2013/01/28/blending-features-in-canvas/
        // http://jsfiddle.net/NDYV8/16/
        ctx.globalCompositeOperation = 'multiply'
        ctx.fillStyle = 'rgb(255,0,255)'
        ctx.beginPath()
        ctx.arc(50, 50, 50, 0, Math.PI * 2, true)
        ctx.closePath()
        ctx.fill()
        ctx.fillStyle = 'rgb(0,255,255)'
        ctx.beginPath()
        ctx.arc(100, 50, 50, 0, Math.PI * 2, true)
        ctx.closePath()
        ctx.fill()
        ctx.fillStyle = 'rgb(255,255,0)'
        ctx.beginPath()
        ctx.arc(75, 100, 50, 0, Math.PI * 2, true)
        ctx.closePath()
        ctx.fill()
        ctx.fillStyle = 'rgb(255,0,255)'
        // canvas winding
        // http://blogs.adobe.com/webplatform/2013/01/30/winding-rules-in-canvas/
        // http://jsfiddle.net/NDYV8/19/
        ctx.arc(75, 75, 75, 0, Math.PI * 2, true)
        ctx.arc(75, 75, 25, 0, Math.PI * 2, true)
        ctx.fill('evenodd')

        if (canvas.toDataURL) {
            result.push('canvas fp:' + canvas.toDataURL())
        }
        return result
    }
    var getWebglFp = function() {
        var gl
        var fa2s = function(fa) {
            gl.clearColor(0.0, 0.0, 0.0, 1.0)
            gl.enable(gl.DEPTH_TEST)
            gl.depthFunc(gl.LEQUAL)
            gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)
            return '[' + fa[0] + ', ' + fa[1] + ']'
        }
        var maxAnisotropy = function(gl) {
            var ext = gl.getExtension('EXT_texture_filter_anisotropic') || gl.getExtension('WEBKIT_EXT_texture_filter_anisotropic') || gl.getExtension('MOZ_EXT_texture_filter_anisotropic')
            if (ext) {
                var anisotropy = gl.getParameter(ext.MAX_TEXTURE_MAX_ANISOTROPY_EXT)
                if (anisotropy === 0) {
                    anisotropy = 2
                }
                return anisotropy
            } else {
                return null
            }
        }

        gl = getWebglCanvas()
        if (!gl) {
            return null
        }
        // WebGL fingerprinting is a combination of techniques, found in MaxMind antifraud script & Augur fingerprinting.
        // First it draws a gradient object with shaders and convers the image to the Base64 string.
        // Then it enumerates all WebGL extensions & capabilities and appends them to the Base64 string, resulting in a huge WebGL string, potentially very unique on each device
        // Since iOS supports webgl starting from version 8.1 and 8.1 runs on several graphics chips, the results may be different across ios devices, but we need to verify it.
        var result = []
        var vShaderTemplate = 'attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}'
        var fShaderTemplate = 'precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}'
        var vertexPosBuffer = gl.createBuffer()
        gl.bindBuffer(gl.ARRAY_BUFFER, vertexPosBuffer)
        var vertices = new Float32Array([-0.2, -0.9, 0, 0.4, -0.26, 0, 0, 0.732134444, 0])
        gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW)
        vertexPosBuffer.itemSize = 3
        vertexPosBuffer.numItems = 3
        var program = gl.createProgram()
        var vshader = gl.createShader(gl.VERTEX_SHADER)
        gl.shaderSource(vshader, vShaderTemplate)
        gl.compileShader(vshader)
        var fshader = gl.createShader(gl.FRAGMENT_SHADER)
        gl.shaderSource(fshader, fShaderTemplate)
        gl.compileShader(fshader)
        gl.attachShader(program, vshader)
        gl.attachShader(program, fshader)
        gl.linkProgram(program)
        gl.useProgram(program)
        program.vertexPosAttrib = gl.getAttribLocation(program, 'attrVertex')
        program.offsetUniform = gl.getUniformLocation(program, 'uniformOffset')
        gl.enableVertexAttribArray(program.vertexPosArray)
        gl.vertexAttribPointer(program.vertexPosAttrib, vertexPosBuffer.itemSize, gl.FLOAT, !1, 0, 0)
        gl.uniform2f(program.offsetUniform, 1, 1)
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, vertexPosBuffer.numItems)
        try {
            result.push(gl.canvas.toDataURL())
        } catch (e) {/* .toDataURL may be absent or broken (blocked by extension) */
        }
        result.push('extensions:' + (gl.getSupportedExtensions() || []).join(';'))
        result.push('webgl aliased line width range:' + fa2s(gl.getParameter(gl.ALIASED_LINE_WIDTH_RANGE)))
        result.push('webgl aliased point size range:' + fa2s(gl.getParameter(gl.ALIASED_POINT_SIZE_RANGE)))
        result.push('webgl alpha bits:' + gl.getParameter(gl.ALPHA_BITS))
        result.push('webgl antialiasing:' + (gl.getContextAttributes().antialias ? 'yes' : 'no'))
        result.push('webgl blue bits:' + gl.getParameter(gl.BLUE_BITS))
        result.push('webgl depth bits:' + gl.getParameter(gl.DEPTH_BITS))
        result.push('webgl green bits:' + gl.getParameter(gl.GREEN_BITS))
        result.push('webgl max anisotropy:' + maxAnisotropy(gl))
        result.push('webgl max combined texture image units:' + gl.getParameter(gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS))
        result.push('webgl max cube map texture size:' + gl.getParameter(gl.MAX_CUBE_MAP_TEXTURE_SIZE))
        result.push('webgl max fragment uniform vectors:' + gl.getParameter(gl.MAX_FRAGMENT_UNIFORM_VECTORS))
        result.push('webgl max render buffer size:' + gl.getParameter(gl.MAX_RENDERBUFFER_SIZE))
        result.push('webgl max texture image units:' + gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS))
        result.push('webgl max texture size:' + gl.getParameter(gl.MAX_TEXTURE_SIZE))
        result.push('webgl max varying vectors:' + gl.getParameter(gl.MAX_VARYING_VECTORS))
        result.push('webgl max vertex attribs:' + gl.getParameter(gl.MAX_VERTEX_ATTRIBS))
        result.push('webgl max vertex texture image units:' + gl.getParameter(gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS))
        result.push('webgl max vertex uniform vectors:' + gl.getParameter(gl.MAX_VERTEX_UNIFORM_VECTORS))
        result.push('webgl max viewport dims:' + fa2s(gl.getParameter(gl.MAX_VIEWPORT_DIMS)))
        result.push('webgl red bits:' + gl.getParameter(gl.RED_BITS))
        result.push('webgl renderer:' + gl.getParameter(gl.RENDERER))
        result.push('webgl shading language version:' + gl.getParameter(gl.SHADING_LANGUAGE_VERSION))
        result.push('webgl stencil bits:' + gl.getParameter(gl.STENCIL_BITS))
        result.push('webgl vendor:' + gl.getParameter(gl.VENDOR))
        result.push('webgl version:' + gl.getParameter(gl.VERSION))

        try {
            // Add the unmasked vendor and unmasked renderer if the debug_renderer_info extension is available
            var extensionDebugRendererInfo = gl.getExtension('WEBGL_debug_renderer_info')
            if (extensionDebugRendererInfo) {
                result.push('webgl unmasked vendor:' + gl.getParameter(extensionDebugRendererInfo.UNMASKED_VENDOR_WEBGL))
                result.push('webgl unmasked renderer:' + gl.getParameter(extensionDebugRendererInfo.UNMASKED_RENDERER_WEBGL))
            }
        } catch (e) {/* squelch */
        }

        if (!gl.getShaderPrecisionFormat) {
            loseWebglContext(gl)
            return result
        }

        each(['FLOAT', 'INT'], function(numType) {
            each(['VERTEX', 'FRAGMENT'], function(shader) {
                each(['HIGH', 'MEDIUM', 'LOW'], function(numSize) {
                    each(['precision', 'rangeMin', 'rangeMax'], function(key) {
                        var format = gl.getShaderPrecisionFormat(gl[shader + '_SHADER'], gl[numSize + '_' + numType])[key]
                        if (key !== 'precision') {
                            key = 'precision ' + key
                        }
                        var line = ['webgl ', shader.toLowerCase(), ' shader ', numSize.toLowerCase(), ' ', numType.toLowerCase(), ' ', key, ':', format].join('')
                        result.push(line)
                    })
                })
            })
        })
        loseWebglContext(gl)
        return result
    }
    var getWebglVendorAndRenderer = function() {
        /* This a subset of the WebGL fingerprint with a lot of entropy, while being reasonably browser-independent */
        try {
            var glContext = getWebglCanvas()
            var extensionDebugRendererInfo = glContext.getExtension('WEBGL_debug_renderer_info')
            var params = glContext.getParameter(extensionDebugRendererInfo.UNMASKED_VENDOR_WEBGL) + '~' + glContext.getParameter(extensionDebugRendererInfo.UNMASKED_RENDERER_WEBGL)
            loseWebglContext(glContext)
            return params
        } catch (e) {
            return null
        }
    }
    var getAdBlock = function() {
        var ads = document.createElement('div')
        ads.innerHTML = '&nbsp;'
        ads.className = 'adsbox'
        var result = false
        try {
            // body may not exist, that's why we need try/catch
            document.body.appendChild(ads)
            result = document.getElementsByClassName('adsbox')[0].offsetHeight === 0
            document.body.removeChild(ads)
        } catch (e) {
            result = false
        }
        return result
    }
    var getHasLiedLanguages = function() {
        // We check if navigator.language is equal to the first language of navigator.languages
        // navigator.languages is undefined on IE11 (and potentially older IEs)
        if (typeof navigator.languages !== 'undefined') {
            try {
                var firstLanguages = navigator.languages[0].substr(0, 2)
                if (firstLanguages !== navigator.language.substr(0, 2)) {
                    return true
                }
            } catch (err) {
                return true
            }
        }
        return false
    }
    var getHasLiedResolution = function() {
        return window.screen.width < window.screen.availWidth || window.screen.height < window.screen.availHeight
    }
    var getHasLiedOs = function() {
        var userAgent = navigator.userAgent.toLowerCase()
        var oscpu = navigator.oscpu
        var platform = navigator.platform.toLowerCase()
        var os
        // We extract the OS from the user agent (respect the order of the if else if statement)
        if (userAgent.indexOf('windows phone') >= 0) {
            os = 'Windows Phone'
        } else if (userAgent.indexOf('windows') >= 0 || userAgent.indexOf('win16') >= 0 || userAgent.indexOf('win32') >= 0 || userAgent.indexOf('win64') >= 0 || userAgent.indexOf('win95') >= 0 || userAgent.indexOf('win98') >= 0 || userAgent.indexOf('winnt') >= 0 || userAgent.indexOf('wow64') >= 0) {
            os = 'Windows'
        } else if (userAgent.indexOf('android') >= 0) {
            os = 'Android'
        } else if (userAgent.indexOf('linux') >= 0 || userAgent.indexOf('cros') >= 0 || userAgent.indexOf('x11') >= 0) {
            os = 'Linux'
        } else if (userAgent.indexOf('iphone') >= 0 || userAgent.indexOf('ipad') >= 0 || userAgent.indexOf('ipod') >= 0 || userAgent.indexOf('crios') >= 0 || userAgent.indexOf('fxios') >= 0) {
            os = 'iOS'
        } else if (userAgent.indexOf('macintosh') >= 0 || userAgent.indexOf('mac_powerpc)') >= 0) {
            os = 'Mac'
        } else {
            os = 'Other'
        }
        // We detect if the person uses a touch device
        var mobileDevice = (('ontouchstart'in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0))

        if (mobileDevice && os !== 'Windows' && os !== 'Windows Phone' && os !== 'Android' && os !== 'iOS' && os !== 'Other' && userAgent.indexOf('cros') === -1) {
            return true
        }

        // We compare oscpu with the OS extracted from the UA
        if (typeof oscpu !== 'undefined') {
            oscpu = oscpu.toLowerCase()
            if (oscpu.indexOf('win') >= 0 && os !== 'Windows' && os !== 'Windows Phone') {
                return true
            } else if (oscpu.indexOf('linux') >= 0 && os !== 'Linux' && os !== 'Android') {
                return true
            } else if (oscpu.indexOf('mac') >= 0 && os !== 'Mac' && os !== 'iOS') {
                return true
            } else if ((oscpu.indexOf('win') === -1 && oscpu.indexOf('linux') === -1 && oscpu.indexOf('mac') === -1) !== (os === 'Other')) {
                return true
            }
        }

        // We compare platform with the OS extracted from the UA
        if (platform.indexOf('win') >= 0 && os !== 'Windows' && os !== 'Windows Phone') {
            return true
        } else if ((platform.indexOf('linux') >= 0 || platform.indexOf('android') >= 0 || platform.indexOf('pike') >= 0) && os !== 'Linux' && os !== 'Android') {
            return true
        } else if ((platform.indexOf('mac') >= 0 || platform.indexOf('ipad') >= 0 || platform.indexOf('ipod') >= 0 || platform.indexOf('iphone') >= 0) && os !== 'Mac' && os !== 'iOS') {
            return true
        } else if (platform.indexOf('arm') >= 0 && os === 'Windows Phone') {
            return false
        } else if (platform.indexOf('pike') >= 0 && userAgent.indexOf('opera mini') >= 0) {
            return false
        } else {
            var platformIsOther = platform.indexOf('win') < 0 && platform.indexOf('linux') < 0 && platform.indexOf('mac') < 0 && platform.indexOf('iphone') < 0 && platform.indexOf('ipad') < 0 && platform.indexOf('ipod') < 0
            if (platformIsOther !== (os === 'Other')) {
                return true
            }
        }

        return typeof navigator.plugins === 'undefined' && os !== 'Windows' && os !== 'Windows Phone'
    }
    var getHasLiedBrowser = function() {
        var userAgent = navigator.userAgent.toLowerCase()
        var productSub = navigator.productSub

        // we extract the browser from the user agent (respect the order of the tests)
        var browser
        if (userAgent.indexOf('edge/') >= 0 || userAgent.indexOf('iemobile/') >= 0) {
            // Unreliable, different versions use EdgeHTML, Webkit, Blink, etc.
            return false
        } else if (userAgent.indexOf('opera mini') >= 0) {
            // Unreliable, different modes use Presto, WebView, Webkit, etc.
            return false
        } else if (userAgent.indexOf('firefox/') >= 0) {
            browser = 'Firefox'
        } else if (userAgent.indexOf('opera/') >= 0 || userAgent.indexOf(' opr/') >= 0) {
            browser = 'Opera'
        } else if (userAgent.indexOf('chrome/') >= 0) {
            browser = 'Chrome'
        } else if (userAgent.indexOf('safari/') >= 0) {
            if (userAgent.indexOf('android 1.') >= 0 || userAgent.indexOf('android 2.') >= 0 || userAgent.indexOf('android 3.') >= 0 || userAgent.indexOf('android 4.') >= 0) {
                browser = 'AOSP'
            } else {
                browser = 'Safari'
            }
        } else if (userAgent.indexOf('trident/') >= 0) {
            browser = 'Internet Explorer'
        } else {
            browser = 'Other'
        }

        if ((browser === 'Chrome' || browser === 'Safari' || browser === 'Opera') && productSub !== '20030107') {
            return true
        }

        // eslint-disable-next-line no-eval
        var tempRes = eval.toString().length
        if (tempRes === 37 && browser !== 'Safari' && browser !== 'Firefox' && browser !== 'Other') {
            return true
        } else if (tempRes === 39 && browser !== 'Internet Explorer' && browser !== 'Other') {
            return true
        } else if (tempRes === 33 && browser !== 'Chrome' && browser !== 'AOSP' && browser !== 'Opera' && browser !== 'Other') {
            return true
        }

        // We create an error to see how it is handled
        var errFirefox
        try {
            // eslint-disable-next-line no-throw-literal
            throw 'a'
        } catch (err) {
            try {
                err.toSource()
                errFirefox = true
            } catch (errOfErr) {
                errFirefox = false
            }
        }
        return errFirefox && browser !== 'Firefox' && browser !== 'Other'
    }
    var isCanvasSupported = function() {
        var elem = document.createElement('canvas')
        return !!(elem.getContext && elem.getContext('2d'))
    }
    var isWebGlSupported = function() {
        // code taken from Modernizr
        if (!isCanvasSupported()) {
            return false
        }

        var glContext = getWebglCanvas()
        var isSupported = !!window.WebGLRenderingContext && !!glContext
        loseWebglContext(glContext)
        return isSupported
    }
    var isIE = function() {
        if (navigator.appName === 'Microsoft Internet Explorer') {
            return true
        } else if (navigator.appName === 'Netscape' && /Trident/.test(navigator.userAgent)) {
            // IE 11
            return true
        }
        return false
    }
    var hasSwfObjectLoaded = function() {
        return typeof window.swfobject !== 'undefined'
    }
    var hasMinFlashInstalled = function() {
        return window.swfobject.hasFlashPlayerVersion('9.0.0')
    }
    var addFlashDivNode = function(options) {
        var node = document.createElement('div')
        node.setAttribute('id', options.fonts.swfContainerId)
        document.body.appendChild(node)
    }
    var loadSwfAndDetectFonts = function(done, options) {
        var hiddenCallback = '___fp_swf_loaded'
        window[hiddenCallback] = function(fonts) {
            done(fonts)
        }
        var id = options.fonts.swfContainerId
        addFlashDivNode()
        var flashvars = {
            onReady: hiddenCallback
        }
        var flashparams = {
            allowScriptAccess: 'always',
            menu: 'false'
        }
        window.swfobject.embedSWF(options.fonts.swfPath, id, '1', '1', '9.0.0', false, flashvars, flashparams, {})
    }
    var getWebglCanvas = function() {
        var canvas = document.createElement('canvas')
        var gl = null
        try {
            gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
        } catch (e) {/* squelch */
        }
        if (!gl) {
            gl = null
        }
        return gl
    }
    var loseWebglContext = function(context) {
        var loseContextExtension = context.getExtension('WEBGL_lose_context')
        if (loseContextExtension != null) {
            loseContextExtension.loseContext()
        }
    }

    var components = [{
        key: 'userAgent',
        getData: UserAgent
    }, {
        key: 'webdriver',
        getData: webdriver
    }, {
        key: 'language',
        getData: languageKey
    }, {
        key: 'colorDepth',
        getData: colorDepthKey
    }, {
        key: 'deviceMemory',
        getData: deviceMemoryKey
    }, {
        key: 'pixelRatio',
        getData: pixelRatioKey
    }, {
        key: 'hardwareConcurrency',
        getData: hardwareConcurrencyKey
    }, {
        key: 'screenResolution',
        getData: screenResolutionKey
    }, {
        key: 'availableScreenResolution',
        getData: availableScreenResolutionKey
    }, {
        key: 'timezoneOffset',
        getData: timezoneOffset
    }, {
        key: 'timezone',
        getData: timezone
    }, {
        key: 'sessionStorage',
        getData: sessionStorageKey
    }, {
        key: 'localStorage',
        getData: localStorageKey
    }, {
        key: 'indexedDb',
        getData: indexedDbKey
    }, {
        key: 'addBehavior',
        getData: addBehaviorKey
    }, {
        key: 'openDatabase',
        getData: openDatabaseKey
    }, {
        key: 'cpuClass',
        getData: cpuClassKey
    }, {
        key: 'platform',
        getData: platformKey
    }, {
        key: 'doNotTrack',
        getData: doNotTrackKey
    }, {
        key: 'plugins',
        getData: pluginsComponent
    }, {
        key: 'canvas',
        getData: canvasKey
    }, {
        key: 'webgl',
        getData: webglKey
    }, {
        key: 'webglVendorAndRenderer',
        getData: webglVendorAndRendererKey
    }, {
        key: 'adBlock',
        getData: adBlockKey
    }, {
        key: 'hasLiedLanguages',
        getData: hasLiedLanguagesKey
    }, {
        key: 'hasLiedResolution',
        getData: hasLiedResolutionKey
    }, {
        key: 'hasLiedOs',
        getData: hasLiedOsKey
    }, {
        key: 'hasLiedBrowser',
        getData: hasLiedBrowserKey
    }, {
        key: 'touchSupport',
        getData: touchSupportKey
    }, {
        key: 'fonts',
        getData: jsFontsKey,
        pauseBefore: true
    }, {
        key: 'fontsFlash',
        getData: flashFontsKey,
        pauseBefore: true
    }, {
        key: 'audio',
        getData: audioKey
    }, {
        key: 'enumerateDevices',
        getData: enumerateDevicesKey
    }]

    var Fingerprint2 = function(options) {
        throw new Error("'new Fingerprint()' is deprecated, see https://github.com/Valve/fingerprintjs2#upgrade-guide-from-182-to-200")
    }

    Fingerprint2.get = function(options, callback) {
        if (!callback) {
            callback = options
            options = {}
        } else if (!options) {
            options = {}
        }
        extendSoft(options, defaultOptions)
        options.components = options.extraComponents.concat(components)

        var keys = {
            data: [],
            addPreprocessedComponent: function(key, value) {
                if (typeof options.preprocessor === 'function') {
                    value = options.preprocessor(key, value)
                }
                keys.data.push({
                    key: key,
                    value: value
                })
            }
        }

        var i = -1
        var chainComponents = function(alreadyWaited) {
            i += 1
            if (i >= options.components.length) {
                // on finish
                callback(keys.data)
                return
            }
            var component = options.components[i]

            if (options.excludes[component.key]) {
                chainComponents(false)
                // skip
                return
            }

            if (!alreadyWaited && component.pauseBefore) {
                i -= 1
                setTimeout(function() {
                    chainComponents(true)
                }, 1)
                return
            }

            try {
                component.getData(function(value) {
                    keys.addPreprocessedComponent(component.key, value)
                    chainComponents(false)
                }, options)
            } catch (error) {
                // main body error
                keys.addPreprocessedComponent(component.key, String(error))
                chainComponents(false)
            }
        }

        chainComponents(false)
    }

    Fingerprint2.getPromise = function(options) {
        return new Promise(function(resolve, reject) {
            Fingerprint2.get(options, resolve)
        }
        )
    }

    Fingerprint2.getV18 = function(options, callback) {
        if (callback == null) {
            callback = options
            options = {}
        }
        return Fingerprint2.get(options, function(components) {
            var newComponents = []
            for (var i = 0; i < components.length; i++) {
                var component = components[i]
                if (component.value === (options.NOT_AVAILABLE || 'not available')) {
                    newComponents.push({
                        key: component.key,
                        value: 'unknown'
                    })
                } else if (component.key === 'plugins') {
                    newComponents.push({
                        key: 'plugins',
                        value: map(component.value, function(p) {
                            var mimeTypes = map(p[2], function(mt) {
                                if (mt.join) {
                                    return mt.join('~')
                                }
                                return mt
                            }).join(',')
                            return [p[0], p[1], mimeTypes].join('::')
                        })
                    })
                } else if (['canvas', 'webgl'].indexOf(component.key) !== -1 && Array.isArray(component.value)) {
                    // sometimes WebGL returns error in headless browsers (during CI testing for example)
                    // so we need to join only if the values are array
                    newComponents.push({
                        key: component.key,
                        value: component.value.join('~')
                    })
                } else if (['sessionStorage', 'localStorage', 'indexedDb', 'addBehavior', 'openDatabase'].indexOf(component.key) !== -1) {
                    if (component.value) {
                        newComponents.push({
                            key: component.key,
                            value: 1
                        })
                    } else {
                        // skip
                        continue
                    }
                } else {
                    if (component.value) {
                        newComponents.push(component.value.join ? {
                            key: component.key,
                            value: component.value.join(';')
                        } : component)
                    } else {
                        newComponents.push({
                            key: component.key,
                            value: component.value
                        })
                    }
                }
            }
            var murmur = x64hash128(map(newComponents, function(component) {
                return component.value
            }).join('~~~'), 31)
            callback(murmur, newComponents)
        })
    }

    Fingerprint2.x64hash128 = x64hash128
    Fingerprint2.VERSION = '2.1.0'
    return Fingerprint2
});
async function chrome76Detection() {
    if ('storage'in navigator && 'estimate'in navigator.storage) {
        const {usage, quota} = await navigator.storage.estimate();
        if (quota < 120000000)
            return true;
        else
            return false;
    } else {
        return false;
    }
}

function isNewChrome() {
    var pieces = navigator.userAgent.match(/Chrom(?:e|ium)\/([0-9]+)\.([0-9]+)\.([0-9]+)\.([0-9]+)/);
    if (pieces == null || pieces.length != 5) {
        return undefined;
    }
    major = pieces.map(piece => parseInt(piece, 10))[1];
    if (major >= 76)
        return true
    return false;
}

var PrivateWindow = new Promise(function(resolve, reject) {
    try {
        var isSafari = navigator.vendor && navigator.vendor.indexOf('Apple') > -1 && navigator.userAgent && navigator.userAgent.indexOf('CriOS') == -1 && navigator.userAgent.indexOf('FxiOS') == -1;

        if (isSafari) {
            //Safari
            var e = false;
            if (window.safariIncognito) {
                e = true;
            } else {
                try {
                    window.openDatabase(null, null, null, null);
                    window.localStorage.setItem("test", 1)
                    resolve(false);
                } catch (t) {
                    e = true;
                    resolve(true);
                }
                void !e && (e = !1,
                window.localStorage.removeItem("test"))
            }
        } else if (navigator.userAgent.includes("Firefox")) {
            //Firefox
            var db = indexedDB.open("test");
            db.onerror = function() {
                resolve(true);
            }
            ;
            db.onsuccess = function() {
                resolve(false);
            }
            ;
        } else if (navigator.userAgent.includes("Edge") || navigator.userAgent.includes("Trident") || navigator.userAgent.includes("msie")) {
            //Edge or IE
            if (!window.indexedDB && (window.PointerEvent || window.MSPointerEvent))
                resolve(true);
            resolve(false);
        } else {
            //Normally ORP or Chrome
            //Other
            if (isNewChrome())
                resolve(chrome76Detection());

            const fs = window.RequestFileSystem || window.webkitRequestFileSystem;
            if (!fs)
                resolve(null);
            else {
                fs(window.TEMPORARY, 100, function(fs) {
                    resolve(false);
                }, function(err) {
                    resolve(true);
                });
            }
        }
    } catch (err) {
        resolve(null);
    }
}
);

function isPrivateWindow(callback) {
    PrivateWindow.then(function(is_private) {
        callback(is_private);
    });
}
;/*!
   SpryMedia Ltd.

 This source file is free software, available under the following license:
   MIT license - http://datatables.net/license

 This source file is distributed in the hope that it will be useful, but
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
 or FITNESS FOR A PARTICULAR PURPOSE. See the license files for details.

 For details please refer to: http://www.datatables.net
 DataTables 1.12.1
 ©2008-2022 SpryMedia Ltd - datatables.net/license
*/
var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.findInternal = function(l, y, A) {
    l instanceof String && (l = String(l));
    for (var q = l.length, E = 0; E < q; E++) {
        var P = l[E];
        if (y.call(A, P, E, l))
            return {
                i: E,
                v: P
            }
    }
    return {
        i: -1,
        v: void 0
    }
}
;
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.SIMPLE_FROUND_POLYFILL = !1;
$jscomp.ISOLATE_POLYFILLS = !1;
$jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function(l, y, A) {
    if (l == Array.prototype || l == Object.prototype)
        return l;
    l[y] = A.value;
    return l
}
;
$jscomp.getGlobal = function(l) {
    l = ["object" == typeof globalThis && globalThis, l, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
    for (var y = 0; y < l.length; ++y) {
        var A = l[y];
        if (A && A.Math == Math)
            return A
    }
    throw Error("Cannot find global object");
}
;
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.IS_SYMBOL_NATIVE = "function" === typeof Symbol && "symbol" === typeof Symbol("x");
$jscomp.TRUST_ES6_POLYFILLS = !$jscomp.ISOLATE_POLYFILLS || $jscomp.IS_SYMBOL_NATIVE;
$jscomp.polyfills = {};
$jscomp.propertyToPolyfillSymbol = {};
$jscomp.POLYFILL_PREFIX = "$jscp$";
var $jscomp$lookupPolyfilledValue = function(l, y) {
    var A = $jscomp.propertyToPolyfillSymbol[y];
    if (null == A)
        return l[y];
    A = l[A];
    return void 0 !== A ? A : l[y]
};
$jscomp.polyfill = function(l, y, A, q) {
    y && ($jscomp.ISOLATE_POLYFILLS ? $jscomp.polyfillIsolated(l, y, A, q) : $jscomp.polyfillUnisolated(l, y, A, q))
}
;
$jscomp.polyfillUnisolated = function(l, y, A, q) {
    A = $jscomp.global;
    l = l.split(".");
    for (q = 0; q < l.length - 1; q++) {
        var E = l[q];
        if (!(E in A))
            return;
        A = A[E]
    }
    l = l[l.length - 1];
    q = A[l];
    y = y(q);
    y != q && null != y && $jscomp.defineProperty(A, l, {
        configurable: !0,
        writable: !0,
        value: y
    })
}
;
$jscomp.polyfillIsolated = function(l, y, A, q) {
    var E = l.split(".");
    l = 1 === E.length;
    q = E[0];
    q = !l && q in $jscomp.polyfills ? $jscomp.polyfills : $jscomp.global;
    for (var P = 0; P < E.length - 1; P++) {
        var la = E[P];
        if (!(la in q))
            return;
        q = q[la]
    }
    E = E[E.length - 1];
    A = $jscomp.IS_SYMBOL_NATIVE && "es6" === A ? q[E] : null;
    y = y(A);
    null != y && (l ? $jscomp.defineProperty($jscomp.polyfills, E, {
        configurable: !0,
        writable: !0,
        value: y
    }) : y !== A && ($jscomp.propertyToPolyfillSymbol[E] = $jscomp.IS_SYMBOL_NATIVE ? $jscomp.global.Symbol(E) : $jscomp.POLYFILL_PREFIX + E,
    E = $jscomp.propertyToPolyfillSymbol[E],
    $jscomp.defineProperty(q, E, {
        configurable: !0,
        writable: !0,
        value: y
    })))
}
;
$jscomp.polyfill("Array.prototype.find", function(l) {
    return l ? l : function(y, A) {
        return $jscomp.findInternal(this, y, A).v
    }
}, "es6", "es3");
(function(l) {
    "function" === typeof define && define.amd ? define(["jquery"], function(y) {
        return l(y, window, document)
    }) : "object" === typeof exports ? module.exports = function(y, A) {
        y || (y = window);
        A || (A = "undefined" !== typeof window ? require("jquery") : require("jquery")(y));
        return l(A, y, y.document)
    }
    : window.DataTable = l(jQuery, window, document)
}
)(function(l, y, A, q) {
    function E(a) {
        var b, c, d = {};
        l.each(a, function(e, h) {
            (b = e.match(/^([^A-Z]+?)([A-Z])/)) && -1 !== "a aa ai ao as b fn i m o s ".indexOf(b[1] + " ") && (c = e.replace(b[0], b[2].toLowerCase()),
            d[c] = e,
            "o" === b[1] && E(a[e]))
        });
        a._hungarianMap = d
    }
    function P(a, b, c) {
        a._hungarianMap || E(a);
        var d;
        l.each(b, function(e, h) {
            d = a._hungarianMap[e];
            d === q || !c && b[d] !== q || ("o" === d.charAt(0) ? (b[d] || (b[d] = {}),
            l.extend(!0, b[d], b[e]),
            P(a[d], b[d], c)) : b[d] = b[e])
        })
    }
    function la(a) {
        var b = u.defaults.oLanguage
          , c = b.sDecimal;
        c && bb(c);
        if (a) {
            var d = a.sZeroRecords;
            !a.sEmptyTable && d && "No data available in table" === b.sEmptyTable && Y(a, a, "sZeroRecords", "sEmptyTable");
            !a.sLoadingRecords && d && "Loading..." === b.sLoadingRecords && Y(a, a, "sZeroRecords", "sLoadingRecords");
            a.sInfoThousands && (a.sThousands = a.sInfoThousands);
            (a = a.sDecimal) && c !== a && bb(a)
        }
    }
    function Db(a) {
        S(a, "ordering", "bSort");
        S(a, "orderMulti", "bSortMulti");
        S(a, "orderClasses", "bSortClasses");
        S(a, "orderCellsTop", "bSortCellsTop");
        S(a, "order", "aaSorting");
        S(a, "orderFixed", "aaSortingFixed");
        S(a, "paging", "bPaginate");
        S(a, "pagingType", "sPaginationType");
        S(a, "pageLength", "iDisplayLength");
        S(a, "searching", "bFilter");
        "boolean" === typeof a.sScrollX && (a.sScrollX = a.sScrollX ? "100%" : "");
        "boolean" === typeof a.scrollX && (a.scrollX = a.scrollX ? "100%" : "");
        if (a = a.aoSearchCols)
            for (var b = 0, c = a.length; b < c; b++)
                a[b] && P(u.models.oSearch, a[b])
    }
    function Eb(a) {
        S(a, "orderable", "bSortable");
        S(a, "orderData", "aDataSort");
        S(a, "orderSequence", "asSorting");
        S(a, "orderDataType", "sortDataType");
        var b = a.aDataSort;
        "number" !== typeof b || Array.isArray(b) || (a.aDataSort = [b])
    }
    function Fb(a) {
        if (!u.__browser) {
            var b = {};
            u.__browser = b;
            var c = l("<div/>").css({
                position: "fixed",
                top: 0,
                left: -1 * l(y).scrollLeft(),
                height: 1,
                width: 1,
                overflow: "hidden"
            }).append(l("<div/>").css({
                position: "absolute",
                top: 1,
                left: 1,
                width: 100,
                overflow: "scroll"
            }).append(l("<div/>").css({
                width: "100%",
                height: 10
            }))).appendTo("body")
              , d = c.children()
              , e = d.children();
            b.barWidth = d[0].offsetWidth - d[0].clientWidth;
            b.bScrollOversize = 100 === e[0].offsetWidth && 100 !== d[0].clientWidth;
            b.bScrollbarLeft = 1 !== Math.round(e.offset().left);
            b.bBounding = c[0].getBoundingClientRect().width ? !0 : !1;
            c.remove()
        }
        l.extend(a.oBrowser, u.__browser);
        a.oScroll.iBarWidth = u.__browser.barWidth
    }
    function Gb(a, b, c, d, e, h) {
        var f = !1;
        if (c !== q) {
            var g = c;
            f = !0
        }
        for (; d !== e; )
            a.hasOwnProperty(d) && (g = f ? b(g, a[d], d, a) : a[d],
            f = !0,
            d += h);
        return g
    }
    function cb(a, b) {
        var c = u.defaults.column
          , d = a.aoColumns.length;
        c = l.extend({}, u.models.oColumn, c, {
            nTh: b ? b : A.createElement("th"),
            sTitle: c.sTitle ? c.sTitle : b ? b.innerHTML : "",
            aDataSort: c.aDataSort ? c.aDataSort : [d],
            mData: c.mData ? c.mData : d,
            idx: d
        });
        a.aoColumns.push(c);
        c = a.aoPreSearchCols;
        c[d] = l.extend({}, u.models.oSearch, c[d]);
        Ia(a, d, l(b).data())
    }
    function Ia(a, b, c) {
        b = a.aoColumns[b];
        var d = a.oClasses
          , e = l(b.nTh);
        if (!b.sWidthOrig) {
            b.sWidthOrig = e.attr("width") || null;
            var h = (e.attr("style") || "").match(/width:\s*(\d+[pxem%]+)/);
            h && (b.sWidthOrig = h[1])
        }
        c !== q && null !== c && (Eb(c),
        P(u.defaults.column, c, !0),
        c.mDataProp === q || c.mData || (c.mData = c.mDataProp),
        c.sType && (b._sManualType = c.sType),
        c.className && !c.sClass && (c.sClass = c.className),
        c.sClass && e.addClass(c.sClass),
        h = b.sClass,
        l.extend(b, c),
        Y(b, c, "sWidth", "sWidthOrig"),
        h !== b.sClass && (b.sClass = h + " " + b.sClass),
        c.iDataSort !== q && (b.aDataSort = [c.iDataSort]),
        Y(b, c, "aDataSort"));
        var f = b.mData
          , g = ma(f)
          , k = b.mRender ? ma(b.mRender) : null;
        c = function(m) {
            return "string" === typeof m && -1 !== m.indexOf("@")
        }
        ;
        b._bAttrSrc = l.isPlainObject(f) && (c(f.sort) || c(f.type) || c(f.filter));
        b._setter = null;
        b.fnGetData = function(m, n, p) {
            var t = g(m, n, q, p);
            return k && n ? k(t, n, m, p) : t
        }
        ;
        b.fnSetData = function(m, n, p) {
            return ha(f)(m, n, p)
        }
        ;
        "number" !== typeof f && (a._rowReadObject = !0);
        a.oFeatures.bSort || (b.bSortable = !1,
        e.addClass(d.sSortableNone));
        a = -1 !== l.inArray("asc", b.asSorting);
        c = -1 !== l.inArray("desc", b.asSorting);
        b.bSortable && (a || c) ? a && !c ? (b.sSortingClass = d.sSortableAsc,
        b.sSortingClassJUI = d.sSortJUIAscAllowed) : !a && c ? (b.sSortingClass = d.sSortableDesc,
        b.sSortingClassJUI = d.sSortJUIDescAllowed) : (b.sSortingClass = d.sSortable,
        b.sSortingClassJUI = d.sSortJUI) : (b.sSortingClass = d.sSortableNone,
        b.sSortingClassJUI = "")
    }
    function sa(a) {
        if (!1 !== a.oFeatures.bAutoWidth) {
            var b = a.aoColumns;
            db(a);
            for (var c = 0, d = b.length; c < d; c++)
                b[c].nTh.style.width = b[c].sWidth
        }
        b = a.oScroll;
        "" === b.sY && "" === b.sX || Ja(a);
        F(a, null, "column-sizing", [a])
    }
    function ta(a, b) {
        a = Ka(a, "bVisible");
        return "number" === typeof a[b] ? a[b] : null
    }
    function ua(a, b) {
        a = Ka(a, "bVisible");
        b = l.inArray(b, a);
        return -1 !== b ? b : null
    }
    function na(a) {
        var b = 0;
        l.each(a.aoColumns, function(c, d) {
            d.bVisible && "none" !== l(d.nTh).css("display") && b++
        });
        return b
    }
    function Ka(a, b) {
        var c = [];
        l.map(a.aoColumns, function(d, e) {
            d[b] && c.push(e)
        });
        return c
    }
    function eb(a) {
        var b = a.aoColumns, c = a.aoData, d = u.ext.type.detect, e, h, f;
        var g = 0;
        for (e = b.length; g < e; g++) {
            var k = b[g];
            var m = [];
            if (!k.sType && k._sManualType)
                k.sType = k._sManualType;
            else if (!k.sType) {
                var n = 0;
                for (h = d.length; n < h; n++) {
                    var p = 0;
                    for (f = c.length; p < f; p++) {
                        m[p] === q && (m[p] = T(a, p, g, "type"));
                        var t = d[n](m[p], a);
                        if (!t && n !== d.length - 1)
                            break;
                        if ("html" === t && !aa(m[p]))
                            break
                    }
                    if (t) {
                        k.sType = t;
                        break
                    }
                }
                k.sType || (k.sType = "string")
            }
        }
    }
    function Hb(a, b, c, d) {
        var e, h, f, g = a.aoColumns;
        if (b)
            for (e = b.length - 1; 0 <= e; e--) {
                var k = b[e];
                var m = k.target !== q ? k.target : k.targets !== q ? k.targets : k.aTargets;
                Array.isArray(m) || (m = [m]);
                var n = 0;
                for (h = m.length; n < h; n++)
                    if ("number" === typeof m[n] && 0 <= m[n]) {
                        for (; g.length <= m[n]; )
                            cb(a);
                        d(m[n], k)
                    } else if ("number" === typeof m[n] && 0 > m[n])
                        d(g.length + m[n], k);
                    else if ("string" === typeof m[n]) {
                        var p = 0;
                        for (f = g.length; p < f; p++)
                            ("_all" == m[n] || l(g[p].nTh).hasClass(m[n])) && d(p, k)
                    }
            }
        if (c)
            for (e = 0,
            a = c.length; e < a; e++)
                d(e, c[e])
    }
    function ia(a, b, c, d) {
        var e = a.aoData.length
          , h = l.extend(!0, {}, u.models.oRow, {
            src: c ? "dom" : "data",
            idx: e
        });
        h._aData = b;
        a.aoData.push(h);
        for (var f = a.aoColumns, g = 0, k = f.length; g < k; g++)
            f[g].sType = null;
        a.aiDisplayMaster.push(e);
        b = a.rowIdFn(b);
        b !== q && (a.aIds[b] = h);
        !c && a.oFeatures.bDeferRender || fb(a, e, c, d);
        return e
    }
    function La(a, b) {
        var c;
        b instanceof l || (b = l(b));
        return b.map(function(d, e) {
            c = gb(a, e);
            return ia(a, c.data, e, c.cells)
        })
    }
    function T(a, b, c, d) {
        "search" === d ? d = "filter" : "order" === d && (d = "sort");
        var e = a.iDraw
          , h = a.aoColumns[c]
          , f = a.aoData[b]._aData
          , g = h.sDefaultContent
          , k = h.fnGetData(f, d, {
            settings: a,
            row: b,
            col: c
        });
        if (k === q)
            return a.iDrawError != e && null === g && (ea(a, 0, "Requested unknown parameter " + ("function" == typeof h.mData ? "{function}" : "'" + h.mData + "'") + " for row " + b + ", column " + c, 4),
            a.iDrawError = e),
            g;
        if ((k === f || null === k) && null !== g && d !== q)
            k = g;
        else if ("function" === typeof k)
            return k.call(f);
        if (null === k && "display" === d)
            return "";
        "filter" === d && (a = u.ext.type.search,
        a[h.sType] && (k = a[h.sType](k)));
        return k
    }
    function Ib(a, b, c, d) {
        a.aoColumns[c].fnSetData(a.aoData[b]._aData, d, {
            settings: a,
            row: b,
            col: c
        })
    }
    function hb(a) {
        return l.map(a.match(/(\\.|[^\.])+/g) || [""], function(b) {
            return b.replace(/\\\./g, ".")
        })
    }
    function ib(a) {
        return U(a.aoData, "_aData")
    }
    function Ma(a) {
        a.aoData.length = 0;
        a.aiDisplayMaster.length = 0;
        a.aiDisplay.length = 0;
        a.aIds = {}
    }
    function Na(a, b, c) {
        for (var d = -1, e = 0, h = a.length; e < h; e++)
            a[e] == b ? d = e : a[e] > b && a[e]--;
        -1 != d && c === q && a.splice(d, 1)
    }
    function va(a, b, c, d) {
        var e = a.aoData[b], h, f = function(k, m) {
            for (; k.childNodes.length; )
                k.removeChild(k.firstChild);
            k.innerHTML = T(a, b, m, "display")
        };
        if ("dom" !== c && (c && "auto" !== c || "dom" !== e.src)) {
            var g = e.anCells;
            if (g)
                if (d !== q)
                    f(g[d], d);
                else
                    for (c = 0,
                    h = g.length; c < h; c++)
                        f(g[c], c)
        } else
            e._aData = gb(a, e, d, d === q ? q : e._aData).data;
        e._aSortData = null;
        e._aFilterData = null;
        f = a.aoColumns;
        if (d !== q)
            f[d].sType = null;
        else {
            c = 0;
            for (h = f.length; c < h; c++)
                f[c].sType = null;
            jb(a, e)
        }
    }
    function gb(a, b, c, d) {
        var e = [], h = b.firstChild, f, g = 0, k, m = a.aoColumns, n = a._rowReadObject;
        d = d !== q ? d : n ? {} : [];
        var p = function(x, w) {
            if ("string" === typeof x) {
                var r = x.indexOf("@");
                -1 !== r && (r = x.substring(r + 1),
                ha(x)(d, w.getAttribute(r)))
            }
        }
          , t = function(x) {
            if (c === q || c === g)
                f = m[g],
                k = x.innerHTML.trim(),
                f && f._bAttrSrc ? (ha(f.mData._)(d, k),
                p(f.mData.sort, x),
                p(f.mData.type, x),
                p(f.mData.filter, x)) : n ? (f._setter || (f._setter = ha(f.mData)),
                f._setter(d, k)) : d[g] = k;
            g++
        };
        if (h)
            for (; h; ) {
                var v = h.nodeName.toUpperCase();
                if ("TD" == v || "TH" == v)
                    t(h),
                    e.push(h);
                h = h.nextSibling
            }
        else
            for (e = b.anCells,
            h = 0,
            v = e.length; h < v; h++)
                t(e[h]);
        (b = b.firstChild ? b : b.nTr) && (b = b.getAttribute("id")) && ha(a.rowId)(d, b);
        return {
            data: d,
            cells: e
        }
    }
    function fb(a, b, c, d) {
        var e = a.aoData[b], h = e._aData, f = [], g, k;
        if (null === e.nTr) {
            var m = c || A.createElement("tr");
            e.nTr = m;
            e.anCells = f;
            m._DT_RowIndex = b;
            jb(a, e);
            var n = 0;
            for (g = a.aoColumns.length; n < g; n++) {
                var p = a.aoColumns[n];
                e = (k = c ? !1 : !0) ? A.createElement(p.sCellType) : d[n];
                e._DT_CellIndex = {
                    row: b,
                    column: n
                };
                f.push(e);
                if (k || !(!p.mRender && p.mData === n || l.isPlainObject(p.mData) && p.mData._ === n + ".display"))
                    e.innerHTML = T(a, b, n, "display");
                p.sClass && (e.className += " " + p.sClass);
                p.bVisible && !c ? m.appendChild(e) : !p.bVisible && c && e.parentNode.removeChild(e);
                p.fnCreatedCell && p.fnCreatedCell.call(a.oInstance, e, T(a, b, n), h, b, n)
            }
            F(a, "aoRowCreatedCallback", null, [m, h, b, f])
        }
    }
    function jb(a, b) {
        var c = b.nTr
          , d = b._aData;
        if (c) {
            if (a = a.rowIdFn(d))
                c.id = a;
            d.DT_RowClass && (a = d.DT_RowClass.split(" "),
            b.__rowc = b.__rowc ? Oa(b.__rowc.concat(a)) : a,
            l(c).removeClass(b.__rowc.join(" ")).addClass(d.DT_RowClass));
            d.DT_RowAttr && l(c).attr(d.DT_RowAttr);
            d.DT_RowData && l(c).data(d.DT_RowData)
        }
    }
    function Jb(a) {
        var b, c, d = a.nTHead, e = a.nTFoot, h = 0 === l("th, td", d).length, f = a.oClasses, g = a.aoColumns;
        h && (c = l("<tr/>").appendTo(d));
        var k = 0;
        for (b = g.length; k < b; k++) {
            var m = g[k];
            var n = l(m.nTh).addClass(m.sClass);
            h && n.appendTo(c);
            a.oFeatures.bSort && (n.addClass(m.sSortingClass),
            !1 !== m.bSortable && (n.attr("tabindex", a.iTabIndex).attr("aria-controls", a.sTableId),
            kb(a, m.nTh, k)));
            m.sTitle != n[0].innerHTML && n.html(m.sTitle);
            lb(a, "header")(a, n, m, f)
        }
        h && wa(a.aoHeader, d);
        l(d).children("tr").children("th, td").addClass(f.sHeaderTH);
        l(e).children("tr").children("th, td").addClass(f.sFooterTH);
        if (null !== e)
            for (a = a.aoFooter[0],
            k = 0,
            b = a.length; k < b; k++)
                m = g[k],
                m.nTf = a[k].cell,
                m.sClass && l(m.nTf).addClass(m.sClass)
    }
    function xa(a, b, c) {
        var d, e, h = [], f = [], g = a.aoColumns.length;
        if (b) {
            c === q && (c = !1);
            var k = 0;
            for (d = b.length; k < d; k++) {
                h[k] = b[k].slice();
                h[k].nTr = b[k].nTr;
                for (e = g - 1; 0 <= e; e--)
                    a.aoColumns[e].bVisible || c || h[k].splice(e, 1);
                f.push([])
            }
            k = 0;
            for (d = h.length; k < d; k++) {
                if (a = h[k].nTr)
                    for (; e = a.firstChild; )
                        a.removeChild(e);
                e = 0;
                for (b = h[k].length; e < b; e++) {
                    var m = g = 1;
                    if (f[k][e] === q) {
                        a.appendChild(h[k][e].cell);
                        for (f[k][e] = 1; h[k + g] !== q && h[k][e].cell == h[k + g][e].cell; )
                            f[k + g][e] = 1,
                            g++;
                        for (; h[k][e + m] !== q && h[k][e].cell == h[k][e + m].cell; ) {
                            for (c = 0; c < g; c++)
                                f[k + c][e + m] = 1;
                            m++
                        }
                        l(h[k][e].cell).attr("rowspan", g).attr("colspan", m)
                    }
                }
            }
        }
    }
    function ja(a, b) {
        var c = "ssp" == Q(a)
          , d = a.iInitDisplayStart;
        d !== q && -1 !== d && (a._iDisplayStart = c ? d : d >= a.fnRecordsDisplay() ? 0 : d,
        a.iInitDisplayStart = -1);
        c = F(a, "aoPreDrawCallback", "preDraw", [a]);
        if (-1 !== l.inArray(!1, c))
            V(a, !1);
        else {
            c = [];
            var e = 0;
            d = a.asStripeClasses;
            var h = d.length
              , f = a.oLanguage
              , g = "ssp" == Q(a)
              , k = a.aiDisplay
              , m = a._iDisplayStart
              , n = a.fnDisplayEnd();
            a.bDrawing = !0;
            if (a.bDeferLoading)
                a.bDeferLoading = !1,
                a.iDraw++,
                V(a, !1);
            else if (!g)
                a.iDraw++;
            else if (!a.bDestroying && !b) {
                Kb(a);
                return
            }
            if (0 !== k.length)
                for (b = g ? a.aoData.length : n,
                f = g ? 0 : m; f < b; f++) {
                    g = k[f];
                    var p = a.aoData[g];
                    null === p.nTr && fb(a, g);
                    var t = p.nTr;
                    if (0 !== h) {
                        var v = d[e % h];
                        p._sRowStripe != v && (l(t).removeClass(p._sRowStripe).addClass(v),
                        p._sRowStripe = v)
                    }
                    F(a, "aoRowCallback", null, [t, p._aData, e, f, g]);
                    c.push(t);
                    e++
                }
            else
                e = f.sZeroRecords,
                1 == a.iDraw && "ajax" == Q(a) ? e = f.sLoadingRecords : f.sEmptyTable && 0 === a.fnRecordsTotal() && (e = f.sEmptyTable),
                c[0] = l("<tr/>", {
                    "class": h ? d[0] : ""
                }).append(l("<td />", {
                    valign: "top",
                    colSpan: na(a),
                    "class": a.oClasses.sRowEmpty
                }).html(e))[0];
            F(a, "aoHeaderCallback", "header", [l(a.nTHead).children("tr")[0], ib(a), m, n, k]);
            F(a, "aoFooterCallback", "footer", [l(a.nTFoot).children("tr")[0], ib(a), m, n, k]);
            d = l(a.nTBody);
            d.children().detach();
            d.append(l(c));
            F(a, "aoDrawCallback", "draw", [a]);
            a.bSorted = !1;
            a.bFiltered = !1;
            a.bDrawing = !1
        }
    }
    function ka(a, b) {
        var c = a.oFeatures
          , d = c.bFilter;
        c.bSort && Lb(a);
        d ? ya(a, a.oPreviousSearch) : a.aiDisplay = a.aiDisplayMaster.slice();
        !0 !== b && (a._iDisplayStart = 0);
        a._drawHold = b;
        ja(a);
        a._drawHold = !1
    }
    function Mb(a) {
        var b = a.oClasses
          , c = l(a.nTable);
        c = l("<div/>").insertBefore(c);
        var d = a.oFeatures
          , e = l("<div/>", {
            id: a.sTableId + "_wrapper",
            "class": b.sWrapper + (a.nTFoot ? "" : " " + b.sNoFooter)
        });
        a.nHolding = c[0];
        a.nTableWrapper = e[0];
        a.nTableReinsertBefore = a.nTable.nextSibling;
        for (var h = a.sDom.split(""), f, g, k, m, n, p, t = 0; t < h.length; t++) {
            f = null;
            g = h[t];
            if ("<" == g) {
                k = l("<div/>")[0];
                m = h[t + 1];
                if ("'" == m || '"' == m) {
                    n = "";
                    for (p = 2; h[t + p] != m; )
                        n += h[t + p],
                        p++;
                    "H" == n ? n = b.sJUIHeader : "F" == n && (n = b.sJUIFooter);
                    -1 != n.indexOf(".") ? (m = n.split("."),
                    k.id = m[0].substr(1, m[0].length - 1),
                    k.className = m[1]) : "#" == n.charAt(0) ? k.id = n.substr(1, n.length - 1) : k.className = n;
                    t += p
                }
                e.append(k);
                e = l(k)
            } else if (">" == g)
                e = e.parent();
            else if ("l" == g && d.bPaginate && d.bLengthChange)
                f = Nb(a);
            else if ("f" == g && d.bFilter)
                f = Ob(a);
            else if ("r" == g && d.bProcessing)
                f = Pb(a);
            else if ("t" == g)
                f = Qb(a);
            else if ("i" == g && d.bInfo)
                f = Rb(a);
            else if ("p" == g && d.bPaginate)
                f = Sb(a);
            else if (0 !== u.ext.feature.length)
                for (k = u.ext.feature,
                p = 0,
                m = k.length; p < m; p++)
                    if (g == k[p].cFeature) {
                        f = k[p].fnInit(a);
                        break
                    }
            f && (k = a.aanFeatures,
            k[g] || (k[g] = []),
            k[g].push(f),
            e.append(f))
        }
        c.replaceWith(e);
        a.nHolding = null
    }
    function wa(a, b) {
        b = l(b).children("tr");
        var c, d, e;
        a.splice(0, a.length);
        var h = 0;
        for (e = b.length; h < e; h++)
            a.push([]);
        h = 0;
        for (e = b.length; h < e; h++) {
            var f = b[h];
            for (c = f.firstChild; c; ) {
                if ("TD" == c.nodeName.toUpperCase() || "TH" == c.nodeName.toUpperCase()) {
                    var g = 1 * c.getAttribute("colspan");
                    var k = 1 * c.getAttribute("rowspan");
                    g = g && 0 !== g && 1 !== g ? g : 1;
                    k = k && 0 !== k && 1 !== k ? k : 1;
                    var m = 0;
                    for (d = a[h]; d[m]; )
                        m++;
                    var n = m;
                    var p = 1 === g ? !0 : !1;
                    for (d = 0; d < g; d++)
                        for (m = 0; m < k; m++)
                            a[h + m][n + d] = {
                                cell: c,
                                unique: p
                            },
                            a[h + m].nTr = f
                }
                c = c.nextSibling
            }
        }
    }
    function Pa(a, b, c) {
        var d = [];
        c || (c = a.aoHeader,
        b && (c = [],
        wa(c, b)));
        b = 0;
        for (var e = c.length; b < e; b++)
            for (var h = 0, f = c[b].length; h < f; h++)
                !c[b][h].unique || d[h] && a.bSortCellsTop || (d[h] = c[b][h].cell);
        return d
    }
    function Qa(a, b, c) {
        F(a, "aoServerParams", "serverParams", [b]);
        if (b && Array.isArray(b)) {
            var d = {}
              , e = /(.*?)\[\]$/;
            l.each(b, function(n, p) {
                (n = p.name.match(e)) ? (n = n[0],
                d[n] || (d[n] = []),
                d[n].push(p.value)) : d[p.name] = p.value
            });
            b = d
        }
        var h = a.ajax
          , f = a.oInstance
          , g = function(n) {
            var p = a.jqXHR ? a.jqXHR.status : null;
            if (null === n || "number" === typeof p && 204 == p)
                n = {},
                za(a, n, []);
            (p = n.error || n.sError) && ea(a, 0, p);
            a.json = n;
            F(a, null, "xhr", [a, n, a.jqXHR]);
            c(n)
        };
        if (l.isPlainObject(h) && h.data) {
            var k = h.data;
            var m = "function" === typeof k ? k(b, a) : k;
            b = "function" === typeof k && m ? m : l.extend(!0, b, m);
            delete h.data
        }
        m = {
            data: b,
            success: g,
            dataType: "json",
            cache: !1,
            type: a.sServerMethod,
            error: function(n, p, t) {
                t = F(a, null, "xhr", [a, null, a.jqXHR]);
                -1 === l.inArray(!0, t) && ("parsererror" == p ? ea(a, 0, "Invalid JSON response", 1) : 4 === n.readyState && ea(a, 0, "Ajax error", 7));
                V(a, !1)
            }
        };
        a.oAjaxData = b;
        F(a, null, "preXhr", [a, b]);
        a.fnServerData ? a.fnServerData.call(f, a.sAjaxSource, l.map(b, function(n, p) {
            return {
                name: p,
                value: n
            }
        }), g, a) : a.sAjaxSource || "string" === typeof h ? a.jqXHR = l.ajax(l.extend(m, {
            url: h || a.sAjaxSource
        })) : "function" === typeof h ? a.jqXHR = h.call(f, b, g, a) : (a.jqXHR = l.ajax(l.extend(m, h)),
        h.data = k)
    }
    function Kb(a) {
        a.iDraw++;
        V(a, !0);
        Qa(a, Tb(a), function(b) {
            Ub(a, b)
        })
    }
    function Tb(a) {
        var b = a.aoColumns
          , c = b.length
          , d = a.oFeatures
          , e = a.oPreviousSearch
          , h = a.aoPreSearchCols
          , f = []
          , g = oa(a);
        var k = a._iDisplayStart;
        var m = !1 !== d.bPaginate ? a._iDisplayLength : -1;
        var n = function(x, w) {
            f.push({
                name: x,
                value: w
            })
        };
        n("sEcho", a.iDraw);
        n("iColumns", c);
        n("sColumns", U(b, "sName").join(","));
        n("iDisplayStart", k);
        n("iDisplayLength", m);
        var p = {
            draw: a.iDraw,
            columns: [],
            order: [],
            start: k,
            length: m,
            search: {
                value: e.sSearch,
                regex: e.bRegex
            }
        };
        for (k = 0; k < c; k++) {
            var t = b[k];
            var v = h[k];
            m = "function" == typeof t.mData ? "function" : t.mData;
            p.columns.push({
                data: m,
                name: t.sName,
                searchable: t.bSearchable,
                orderable: t.bSortable,
                search: {
                    value: v.sSearch,
                    regex: v.bRegex
                }
            });
            n("mDataProp_" + k, m);
            d.bFilter && (n("sSearch_" + k, v.sSearch),
            n("bRegex_" + k, v.bRegex),
            n("bSearchable_" + k, t.bSearchable));
            d.bSort && n("bSortable_" + k, t.bSortable)
        }
        d.bFilter && (n("sSearch", e.sSearch),
        n("bRegex", e.bRegex));
        d.bSort && (l.each(g, function(x, w) {
            p.order.push({
                column: w.col,
                dir: w.dir
            });
            n("iSortCol_" + x, w.col);
            n("sSortDir_" + x, w.dir)
        }),
        n("iSortingCols", g.length));
        b = u.ext.legacy.ajax;
        return null === b ? a.sAjaxSource ? f : p : b ? f : p
    }
    function Ub(a, b) {
        var c = function(f, g) {
            return b[f] !== q ? b[f] : b[g]
        }
          , d = za(a, b)
          , e = c("sEcho", "draw")
          , h = c("iTotalRecords", "recordsTotal");
        c = c("iTotalDisplayRecords", "recordsFiltered");
        if (e !== q) {
            if (1 * e < a.iDraw)
                return;
            a.iDraw = 1 * e
        }
        d || (d = []);
        Ma(a);
        a._iRecordsTotal = parseInt(h, 10);
        a._iRecordsDisplay = parseInt(c, 10);
        e = 0;
        for (h = d.length; e < h; e++)
            ia(a, d[e]);
        a.aiDisplay = a.aiDisplayMaster.slice();
        ja(a, !0);
        a._bInitComplete || Ra(a, b);
        V(a, !1)
    }
    function za(a, b, c) {
        a = l.isPlainObject(a.ajax) && a.ajax.dataSrc !== q ? a.ajax.dataSrc : a.sAjaxDataProp;
        if (!c)
            return "data" === a ? b.aaData || b[a] : "" !== a ? ma(a)(b) : b;
        ha(a)(b, c)
    }
    function Ob(a) {
        var b = a.oClasses
          , c = a.sTableId
          , d = a.oLanguage
          , e = a.oPreviousSearch
          , h = a.aanFeatures
          , f = '<input type="search" class="' + b.sFilterInput + '"/>'
          , g = d.sSearch;
        g = g.match(/_INPUT_/) ? g.replace("_INPUT_", f) : g + f;
        b = l("<div/>", {
            id: h.f ? null : c + "_filter",
            "class": b.sFilter
        }).append(l("<label/>").append(g));
        var k = function(n) {
            var p = this.value ? this.value : "";
            e.return && "Enter" !== n.key || p == e.sSearch || (ya(a, {
                sSearch: p,
                bRegex: e.bRegex,
                bSmart: e.bSmart,
                bCaseInsensitive: e.bCaseInsensitive,
                "return": e.return
            }),
            a._iDisplayStart = 0,
            ja(a))
        };
        h = null !== a.searchDelay ? a.searchDelay : "ssp" === Q(a) ? 400 : 0;
        var m = l("input", b).val(e.sSearch).attr("placeholder", d.sSearchPlaceholder).on("keyup.DT search.DT input.DT paste.DT cut.DT", h ? mb(k, h) : k).on("mouseup", function(n) {
            setTimeout(function() {
                k.call(m[0], n)
            }, 10)
        }).on("keypress.DT", function(n) {
            if (13 == n.keyCode)
                return !1
        }).attr("aria-controls", c);
        l(a.nTable).on("search.dt.DT", function(n, p) {
            if (a === p)
                try {
                    m[0] !== A.activeElement && m.val(e.sSearch)
                } catch (t) {}
        });
        return b[0]
    }
    function ya(a, b, c) {
        var d = a.oPreviousSearch
          , e = a.aoPreSearchCols
          , h = function(g) {
            d.sSearch = g.sSearch;
            d.bRegex = g.bRegex;
            d.bSmart = g.bSmart;
            d.bCaseInsensitive = g.bCaseInsensitive;
            d.return = g.return
        }
          , f = function(g) {
            return g.bEscapeRegex !== q ? !g.bEscapeRegex : g.bRegex
        };
        eb(a);
        if ("ssp" != Q(a)) {
            Vb(a, b.sSearch, c, f(b), b.bSmart, b.bCaseInsensitive, b.return);
            h(b);
            for (b = 0; b < e.length; b++)
                Wb(a, e[b].sSearch, b, f(e[b]), e[b].bSmart, e[b].bCaseInsensitive);
            Xb(a)
        } else
            h(b);
        a.bFiltered = !0;
        F(a, null, "search", [a])
    }
    function Xb(a) {
        for (var b = u.ext.search, c = a.aiDisplay, d, e, h = 0, f = b.length; h < f; h++) {
            for (var g = [], k = 0, m = c.length; k < m; k++)
                e = c[k],
                d = a.aoData[e],
                b[h](a, d._aFilterData, e, d._aData, k) && g.push(e);
            c.length = 0;
            l.merge(c, g)
        }
    }
    function Wb(a, b, c, d, e, h) {
        if ("" !== b) {
            var f = []
              , g = a.aiDisplay;
            d = nb(b, d, e, h);
            for (e = 0; e < g.length; e++)
                b = a.aoData[g[e]]._aFilterData[c],
                d.test(b) && f.push(g[e]);
            a.aiDisplay = f
        }
    }
    function Vb(a, b, c, d, e, h) {
        e = nb(b, d, e, h);
        var f = a.oPreviousSearch.sSearch
          , g = a.aiDisplayMaster;
        h = [];
        0 !== u.ext.search.length && (c = !0);
        var k = Yb(a);
        if (0 >= b.length)
            a.aiDisplay = g.slice();
        else {
            if (k || c || d || f.length > b.length || 0 !== b.indexOf(f) || a.bSorted)
                a.aiDisplay = g.slice();
            b = a.aiDisplay;
            for (c = 0; c < b.length; c++)
                e.test(a.aoData[b[c]]._sFilterRow) && h.push(b[c]);
            a.aiDisplay = h
        }
    }
    function nb(a, b, c, d) {
        a = b ? a : ob(a);
        c && (a = "^(?=.*?" + l.map(a.match(/"[^"]+"|[^ ]+/g) || [""], function(e) {
            if ('"' === e.charAt(0)) {
                var h = e.match(/^"(.*)"$/);
                e = h ? h[1] : e
            }
            return e.replace('"', "")
        }).join(")(?=.*?") + ").*$");
        return new RegExp(a,d ? "i" : "")
    }
    function Yb(a) {
        var b = a.aoColumns, c, d;
        var e = !1;
        var h = 0;
        for (c = a.aoData.length; h < c; h++) {
            var f = a.aoData[h];
            if (!f._aFilterData) {
                var g = [];
                e = 0;
                for (d = b.length; e < d; e++) {
                    var k = b[e];
                    k.bSearchable ? (k = T(a, h, e, "filter"),
                    null === k && (k = ""),
                    "string" !== typeof k && k.toString && (k = k.toString())) : k = "";
                    k.indexOf && -1 !== k.indexOf("&") && (Sa.innerHTML = k,
                    k = Bc ? Sa.textContent : Sa.innerText);
                    k.replace && (k = k.replace(/[\r\n\u2028]/g, ""));
                    g.push(k)
                }
                f._aFilterData = g;
                f._sFilterRow = g.join("  ");
                e = !0
            }
        }
        return e
    }
    function Zb(a) {
        return {
            search: a.sSearch,
            smart: a.bSmart,
            regex: a.bRegex,
            caseInsensitive: a.bCaseInsensitive
        }
    }
    function $b(a) {
        return {
            sSearch: a.search,
            bSmart: a.smart,
            bRegex: a.regex,
            bCaseInsensitive: a.caseInsensitive
        }
    }
    function Rb(a) {
        var b = a.sTableId
          , c = a.aanFeatures.i
          , d = l("<div/>", {
            "class": a.oClasses.sInfo,
            id: c ? null : b + "_info"
        });
        c || (a.aoDrawCallback.push({
            fn: ac,
            sName: "information"
        }),
        d.attr("role", "status").attr("aria-live", "polite"),
        l(a.nTable).attr("aria-describedby", b + "_info"));
        return d[0]
    }
    function ac(a) {
        var b = a.aanFeatures.i;
        if (0 !== b.length) {
            var c = a.oLanguage
              , d = a._iDisplayStart + 1
              , e = a.fnDisplayEnd()
              , h = a.fnRecordsTotal()
              , f = a.fnRecordsDisplay()
              , g = f ? c.sInfo : c.sInfoEmpty;
            f !== h && (g += " " + c.sInfoFiltered);
            g += c.sInfoPostFix;
            g = bc(a, g);
            c = c.fnInfoCallback;
            null !== c && (g = c.call(a.oInstance, a, d, e, h, f, g));
            l(b).html(g)
        }
    }
    function bc(a, b) {
        var c = a.fnFormatNumber
          , d = a._iDisplayStart + 1
          , e = a._iDisplayLength
          , h = a.fnRecordsDisplay()
          , f = -1 === e;
        return b.replace(/_START_/g, c.call(a, d)).replace(/_END_/g, c.call(a, a.fnDisplayEnd())).replace(/_MAX_/g, c.call(a, a.fnRecordsTotal())).replace(/_TOTAL_/g, c.call(a, h)).replace(/_PAGE_/g, c.call(a, f ? 1 : Math.ceil(d / e))).replace(/_PAGES_/g, c.call(a, f ? 1 : Math.ceil(h / e)))
    }
    function Aa(a) {
        var b = a.iInitDisplayStart
          , c = a.aoColumns;
        var d = a.oFeatures;
        var e = a.bDeferLoading;
        if (a.bInitialised) {
            Mb(a);
            Jb(a);
            xa(a, a.aoHeader);
            xa(a, a.aoFooter);
            V(a, !0);
            d.bAutoWidth && db(a);
            var h = 0;
            for (d = c.length; h < d; h++) {
                var f = c[h];
                f.sWidth && (f.nTh.style.width = K(f.sWidth))
            }
            F(a, null, "preInit", [a]);
            ka(a);
            c = Q(a);
            if ("ssp" != c || e)
                "ajax" == c ? Qa(a, [], function(g) {
                    var k = za(a, g);
                    for (h = 0; h < k.length; h++)
                        ia(a, k[h]);
                    a.iInitDisplayStart = b;
                    ka(a);
                    V(a, !1);
                    Ra(a, g)
                }, a) : (V(a, !1),
                Ra(a))
        } else
            setTimeout(function() {
                Aa(a)
            }, 200)
    }
    function Ra(a, b) {
        a._bInitComplete = !0;
        (b || a.oInit.aaData) && sa(a);
        F(a, null, "plugin-init", [a, b]);
        F(a, "aoInitComplete", "init", [a, b])
    }
    function pb(a, b) {
        b = parseInt(b, 10);
        a._iDisplayLength = b;
        qb(a);
        F(a, null, "length", [a, b])
    }
    function Nb(a) {
        var b = a.oClasses
          , c = a.sTableId
          , d = a.aLengthMenu
          , e = Array.isArray(d[0])
          , h = e ? d[0] : d;
        d = e ? d[1] : d;
        e = l("<select/>", {
            name: c + "_length",
            "aria-controls": c,
            "class": b.sLengthSelect
        });
        for (var f = 0, g = h.length; f < g; f++)
            e[0][f] = new Option("number" === typeof d[f] ? a.fnFormatNumber(d[f]) : d[f],h[f]);
        var k = l("<div><label/></div>").addClass(b.sLength);
        a.aanFeatures.l || (k[0].id = c + "_length");
        k.children().append(a.oLanguage.sLengthMenu.replace("_MENU_", e[0].outerHTML));
        l("select", k).val(a._iDisplayLength).on("change.DT", function(m) {
            pb(a, l(this).val());
            ja(a)
        });
        l(a.nTable).on("length.dt.DT", function(m, n, p) {
            a === n && l("select", k).val(p)
        });
        return k[0]
    }
    function Sb(a) {
        var b = a.sPaginationType
          , c = u.ext.pager[b]
          , d = "function" === typeof c
          , e = function(f) {
            ja(f)
        };
        b = l("<div/>").addClass(a.oClasses.sPaging + b)[0];
        var h = a.aanFeatures;
        d || c.fnInit(a, b, e);
        h.p || (b.id = a.sTableId + "_paginate",
        a.aoDrawCallback.push({
            fn: function(f) {
                if (d) {
                    var g = f._iDisplayStart
                      , k = f._iDisplayLength
                      , m = f.fnRecordsDisplay()
                      , n = -1 === k;
                    g = n ? 0 : Math.ceil(g / k);
                    k = n ? 1 : Math.ceil(m / k);
                    m = c(g, k);
                    var p;
                    n = 0;
                    for (p = h.p.length; n < p; n++)
                        lb(f, "pageButton")(f, h.p[n], n, m, g, k)
                } else
                    c.fnUpdate(f, e)
            },
            sName: "pagination"
        }));
        return b
    }
    function Ta(a, b, c) {
        var d = a._iDisplayStart
          , e = a._iDisplayLength
          , h = a.fnRecordsDisplay();
        0 === h || -1 === e ? d = 0 : "number" === typeof b ? (d = b * e,
        d > h && (d = 0)) : "first" == b ? d = 0 : "previous" == b ? (d = 0 <= e ? d - e : 0,
        0 > d && (d = 0)) : "next" == b ? d + e < h && (d += e) : "last" == b ? d = Math.floor((h - 1) / e) * e : ea(a, 0, "Unknown paging action: " + b, 5);
        b = a._iDisplayStart !== d;
        a._iDisplayStart = d;
        b && (F(a, null, "page", [a]),
        c && ja(a));
        return b
    }
    function Pb(a) {
        return l("<div/>", {
            id: a.aanFeatures.r ? null : a.sTableId + "_processing",
            "class": a.oClasses.sProcessing
        }).html(a.oLanguage.sProcessing).append("<div><div></div><div></div><div></div><div></div></div>").insertBefore(a.nTable)[0]
    }
    function V(a, b) {
        a.oFeatures.bProcessing && l(a.aanFeatures.r).css("display", b ? "block" : "none");
        F(a, null, "processing", [a, b])
    }
    function Qb(a) {
        var b = l(a.nTable)
          , c = a.oScroll;
        if ("" === c.sX && "" === c.sY)
            return a.nTable;
        var d = c.sX
          , e = c.sY
          , h = a.oClasses
          , f = b.children("caption")
          , g = f.length ? f[0]._captionSide : null
          , k = l(b[0].cloneNode(!1))
          , m = l(b[0].cloneNode(!1))
          , n = b.children("tfoot");
        n.length || (n = null);
        k = l("<div/>", {
            "class": h.sScrollWrapper
        }).append(l("<div/>", {
            "class": h.sScrollHead
        }).css({
            overflow: "hidden",
            position: "relative",
            border: 0,
            width: d ? d ? K(d) : null : "100%"
        }).append(l("<div/>", {
            "class": h.sScrollHeadInner
        }).css({
            "box-sizing": "content-box",
            width: c.sXInner || "100%"
        }).append(k.removeAttr("id").css("margin-left", 0).append("top" === g ? f : null).append(b.children("thead"))))).append(l("<div/>", {
            "class": h.sScrollBody
        }).css({
            position: "relative",
            overflow: "auto",
            width: d ? K(d) : null
        }).append(b));
        n && k.append(l("<div/>", {
            "class": h.sScrollFoot
        }).css({
            overflow: "hidden",
            border: 0,
            width: d ? d ? K(d) : null : "100%"
        }).append(l("<div/>", {
            "class": h.sScrollFootInner
        }).append(m.removeAttr("id").css("margin-left", 0).append("bottom" === g ? f : null).append(b.children("tfoot")))));
        b = k.children();
        var p = b[0];
        h = b[1];
        var t = n ? b[2] : null;
        if (d)
            l(h).on("scroll.DT", function(v) {
                v = this.scrollLeft;
                p.scrollLeft = v;
                n && (t.scrollLeft = v)
            });
        l(h).css("max-height", e);
        c.bCollapse || l(h).css("height", e);
        a.nScrollHead = p;
        a.nScrollBody = h;
        a.nScrollFoot = t;
        a.aoDrawCallback.push({
            fn: Ja,
            sName: "scrolling"
        });
        return k[0]
    }
    function Ja(a) {
        var b = a.oScroll
          , c = b.sX
          , d = b.sXInner
          , e = b.sY;
        b = b.iBarWidth;
        var h = l(a.nScrollHead)
          , f = h[0].style
          , g = h.children("div")
          , k = g[0].style
          , m = g.children("table");
        g = a.nScrollBody;
        var n = l(g)
          , p = g.style
          , t = l(a.nScrollFoot).children("div")
          , v = t.children("table")
          , x = l(a.nTHead)
          , w = l(a.nTable)
          , r = w[0]
          , C = r.style
          , G = a.nTFoot ? l(a.nTFoot) : null
          , ba = a.oBrowser
          , L = ba.bScrollOversize;
        U(a.aoColumns, "nTh");
        var O = [], I = [], H = [], fa = [], Z, Ba = function(D) {
            D = D.style;
            D.paddingTop = "0";
            D.paddingBottom = "0";
            D.borderTopWidth = "0";
            D.borderBottomWidth = "0";
            D.height = 0
        };
        var X = g.scrollHeight > g.clientHeight;
        if (a.scrollBarVis !== X && a.scrollBarVis !== q)
            a.scrollBarVis = X,
            sa(a);
        else {
            a.scrollBarVis = X;
            w.children("thead, tfoot").remove();
            if (G) {
                X = G.clone().prependTo(w);
                var ca = G.find("tr");
                var Ca = X.find("tr");
                X.find("[id]").removeAttr("id")
            }
            var Ua = x.clone().prependTo(w);
            x = x.find("tr");
            X = Ua.find("tr");
            Ua.find("th, td").removeAttr("tabindex");
            Ua.find("[id]").removeAttr("id");
            c || (p.width = "100%",
            h[0].style.width = "100%");
            l.each(Pa(a, Ua), function(D, W) {
                Z = ta(a, D);
                W.style.width = a.aoColumns[Z].sWidth
            });
            G && da(function(D) {
                D.style.width = ""
            }, Ca);
            h = w.outerWidth();
            "" === c ? (C.width = "100%",
            L && (w.find("tbody").height() > g.offsetHeight || "scroll" == n.css("overflow-y")) && (C.width = K(w.outerWidth() - b)),
            h = w.outerWidth()) : "" !== d && (C.width = K(d),
            h = w.outerWidth());
            da(Ba, X);
            da(function(D) {
                var W = y.getComputedStyle ? y.getComputedStyle(D).width : K(l(D).width());
                H.push(D.innerHTML);
                O.push(W)
            }, X);
            da(function(D, W) {
                D.style.width = O[W]
            }, x);
            l(X).css("height", 0);
            G && (da(Ba, Ca),
            da(function(D) {
                fa.push(D.innerHTML);
                I.push(K(l(D).css("width")))
            }, Ca),
            da(function(D, W) {
                D.style.width = I[W]
            }, ca),
            l(Ca).height(0));
            da(function(D, W) {
                D.innerHTML = '<div class="dataTables_sizing">' + H[W] + "</div>";
                D.childNodes[0].style.height = "0";
                D.childNodes[0].style.overflow = "hidden";
                D.style.width = O[W]
            }, X);
            G && da(function(D, W) {
                D.innerHTML = '<div class="dataTables_sizing">' + fa[W] + "</div>";
                D.childNodes[0].style.height = "0";
                D.childNodes[0].style.overflow = "hidden";
                D.style.width = I[W]
            }, Ca);
            Math.round(w.outerWidth()) < Math.round(h) ? (ca = g.scrollHeight > g.offsetHeight || "scroll" == n.css("overflow-y") ? h + b : h,
            L && (g.scrollHeight > g.offsetHeight || "scroll" == n.css("overflow-y")) && (C.width = K(ca - b)),
            "" !== c && "" === d || ea(a, 1, "Possible column misalignment", 6)) : ca = "100%";
            p.width = K(ca);
            f.width = K(ca);
            G && (a.nScrollFoot.style.width = K(ca));
            !e && L && (p.height = K(r.offsetHeight + b));
            c = w.outerWidth();
            m[0].style.width = K(c);
            k.width = K(c);
            d = w.height() > g.clientHeight || "scroll" == n.css("overflow-y");
            e = "padding" + (ba.bScrollbarLeft ? "Left" : "Right");
            k[e] = d ? b + "px" : "0px";
            G && (v[0].style.width = K(c),
            t[0].style.width = K(c),
            t[0].style[e] = d ? b + "px" : "0px");
            w.children("colgroup").insertBefore(w.children("thead"));
            n.trigger("scroll");
            !a.bSorted && !a.bFiltered || a._drawHold || (g.scrollTop = 0)
        }
    }
    function da(a, b, c) {
        for (var d = 0, e = 0, h = b.length, f, g; e < h; ) {
            f = b[e].firstChild;
            for (g = c ? c[e].firstChild : null; f; )
                1 === f.nodeType && (c ? a(f, g, d) : a(f, d),
                d++),
                f = f.nextSibling,
                g = c ? g.nextSibling : null;
            e++
        }
    }
    function db(a) {
        var b = a.nTable, c = a.aoColumns, d = a.oScroll, e = d.sY, h = d.sX, f = d.sXInner, g = c.length, k = Ka(a, "bVisible"), m = l("th", a.nTHead), n = b.getAttribute("width"), p = b.parentNode, t = !1, v, x = a.oBrowser;
        d = x.bScrollOversize;
        (v = b.style.width) && -1 !== v.indexOf("%") && (n = v);
        for (v = 0; v < k.length; v++) {
            var w = c[k[v]];
            null !== w.sWidth && (w.sWidth = cc(w.sWidthOrig, p),
            t = !0)
        }
        if (d || !t && !h && !e && g == na(a) && g == m.length)
            for (v = 0; v < g; v++)
                k = ta(a, v),
                null !== k && (c[k].sWidth = K(m.eq(v).width()));
        else {
            g = l(b).clone().css("visibility", "hidden").removeAttr("id");
            g.find("tbody tr").remove();
            var r = l("<tr/>").appendTo(g.find("tbody"));
            g.find("thead, tfoot").remove();
            g.append(l(a.nTHead).clone()).append(l(a.nTFoot).clone());
            g.find("tfoot th, tfoot td").css("width", "");
            m = Pa(a, g.find("thead")[0]);
            for (v = 0; v < k.length; v++)
                w = c[k[v]],
                m[v].style.width = null !== w.sWidthOrig && "" !== w.sWidthOrig ? K(w.sWidthOrig) : "",
                w.sWidthOrig && h && l(m[v]).append(l("<div/>").css({
                    width: w.sWidthOrig,
                    margin: 0,
                    padding: 0,
                    border: 0,
                    height: 1
                }));
            if (a.aoData.length)
                for (v = 0; v < k.length; v++)
                    t = k[v],
                    w = c[t],
                    l(dc(a, t)).clone(!1).append(w.sContentPadding).appendTo(r);
            l("[name]", g).removeAttr("name");
            w = l("<div/>").css(h || e ? {
                position: "absolute",
                top: 0,
                left: 0,
                height: 1,
                right: 0,
                overflow: "hidden"
            } : {}).append(g).appendTo(p);
            h && f ? g.width(f) : h ? (g.css("width", "auto"),
            g.removeAttr("width"),
            g.width() < p.clientWidth && n && g.width(p.clientWidth)) : e ? g.width(p.clientWidth) : n && g.width(n);
            for (v = e = 0; v < k.length; v++)
                p = l(m[v]),
                f = p.outerWidth() - p.width(),
                p = x.bBounding ? Math.ceil(m[v].getBoundingClientRect().width) : p.outerWidth(),
                e += p,
                c[k[v]].sWidth = K(p - f);
            b.style.width = K(e);
            w.remove()
        }
        n && (b.style.width = K(n));
        !n && !h || a._reszEvt || (b = function() {
            l(y).on("resize.DT-" + a.sInstance, mb(function() {
                sa(a)
            }))
        }
        ,
        d ? setTimeout(b, 1E3) : b(),
        a._reszEvt = !0)
    }
    function cc(a, b) {
        if (!a)
            return 0;
        a = l("<div/>").css("width", K(a)).appendTo(b || A.body);
        b = a[0].offsetWidth;
        a.remove();
        return b
    }
    function dc(a, b) {
        var c = ec(a, b);
        if (0 > c)
            return null;
        var d = a.aoData[c];
        return d.nTr ? d.anCells[b] : l("<td/>").html(T(a, c, b, "display"))[0]
    }
    function ec(a, b) {
        for (var c, d = -1, e = -1, h = 0, f = a.aoData.length; h < f; h++)
            c = T(a, h, b, "display") + "",
            c = c.replace(Cc, ""),
            c = c.replace(/&nbsp;/g, " "),
            c.length > d && (d = c.length,
            e = h);
        return e
    }
    function K(a) {
        return null === a ? "0px" : "number" == typeof a ? 0 > a ? "0px" : a + "px" : a.match(/\d$/) ? a + "px" : a
    }
    function oa(a) {
        var b = []
          , c = a.aoColumns;
        var d = a.aaSortingFixed;
        var e = l.isPlainObject(d);
        var h = [];
        var f = function(n) {
            n.length && !Array.isArray(n[0]) ? h.push(n) : l.merge(h, n)
        };
        Array.isArray(d) && f(d);
        e && d.pre && f(d.pre);
        f(a.aaSorting);
        e && d.post && f(d.post);
        for (a = 0; a < h.length; a++) {
            var g = h[a][0];
            f = c[g].aDataSort;
            d = 0;
            for (e = f.length; d < e; d++) {
                var k = f[d];
                var m = c[k].sType || "string";
                h[a]._idx === q && (h[a]._idx = l.inArray(h[a][1], c[k].asSorting));
                b.push({
                    src: g,
                    col: k,
                    dir: h[a][1],
                    index: h[a]._idx,
                    type: m,
                    formatter: u.ext.type.order[m + "-pre"]
                })
            }
        }
        return b
    }
    function Lb(a) {
        var b, c = [], d = u.ext.type.order, e = a.aoData, h = 0, f = a.aiDisplayMaster;
        eb(a);
        var g = oa(a);
        var k = 0;
        for (b = g.length; k < b; k++) {
            var m = g[k];
            m.formatter && h++;
            fc(a, m.col)
        }
        if ("ssp" != Q(a) && 0 !== g.length) {
            k = 0;
            for (b = f.length; k < b; k++)
                c[f[k]] = k;
            h === g.length ? f.sort(function(n, p) {
                var t, v = g.length, x = e[n]._aSortData, w = e[p]._aSortData;
                for (t = 0; t < v; t++) {
                    var r = g[t];
                    var C = x[r.col];
                    var G = w[r.col];
                    C = C < G ? -1 : C > G ? 1 : 0;
                    if (0 !== C)
                        return "asc" === r.dir ? C : -C
                }
                C = c[n];
                G = c[p];
                return C < G ? -1 : C > G ? 1 : 0
            }) : f.sort(function(n, p) {
                var t, v = g.length, x = e[n]._aSortData, w = e[p]._aSortData;
                for (t = 0; t < v; t++) {
                    var r = g[t];
                    var C = x[r.col];
                    var G = w[r.col];
                    r = d[r.type + "-" + r.dir] || d["string-" + r.dir];
                    C = r(C, G);
                    if (0 !== C)
                        return C
                }
                C = c[n];
                G = c[p];
                return C < G ? -1 : C > G ? 1 : 0
            })
        }
        a.bSorted = !0
    }
    function gc(a) {
        var b = a.aoColumns
          , c = oa(a);
        a = a.oLanguage.oAria;
        for (var d = 0, e = b.length; d < e; d++) {
            var h = b[d];
            var f = h.asSorting;
            var g = h.ariaTitle || h.sTitle.replace(/<.*?>/g, "");
            var k = h.nTh;
            k.removeAttribute("aria-sort");
            h.bSortable && (0 < c.length && c[0].col == d ? (k.setAttribute("aria-sort", "asc" == c[0].dir ? "ascending" : "descending"),
            h = f[c[0].index + 1] || f[0]) : h = f[0],
            g += "asc" === h ? a.sSortAscending : a.sSortDescending);
            k.setAttribute("aria-label", g)
        }
    }
    function rb(a, b, c, d) {
        var e = a.aaSorting
          , h = a.aoColumns[b].asSorting
          , f = function(g, k) {
            var m = g._idx;
            m === q && (m = l.inArray(g[1], h));
            return m + 1 < h.length ? m + 1 : k ? null : 0
        };
        "number" === typeof e[0] && (e = a.aaSorting = [e]);
        c && a.oFeatures.bSortMulti ? (c = l.inArray(b, U(e, "0")),
        -1 !== c ? (b = f(e[c], !0),
        null === b && 1 === e.length && (b = 0),
        null === b ? e.splice(c, 1) : (e[c][1] = h[b],
        e[c]._idx = b)) : (e.push([b, h[0], 0]),
        e[e.length - 1]._idx = 0)) : e.length && e[0][0] == b ? (b = f(e[0]),
        e.length = 1,
        e[0][1] = h[b],
        e[0]._idx = b) : (e.length = 0,
        e.push([b, h[0]]),
        e[0]._idx = 0);
        ka(a);
        "function" == typeof d && d(a)
    }
    function kb(a, b, c, d) {
        var e = a.aoColumns[c];
        sb(b, {}, function(h) {
            !1 !== e.bSortable && (a.oFeatures.bProcessing ? (V(a, !0),
            setTimeout(function() {
                rb(a, c, h.shiftKey, d);
                "ssp" !== Q(a) && V(a, !1)
            }, 0)) : rb(a, c, h.shiftKey, d))
        })
    }
    function Va(a) {
        var b = a.aLastSort, c = a.oClasses.sSortColumn, d = oa(a), e = a.oFeatures, h;
        if (e.bSort && e.bSortClasses) {
            e = 0;
            for (h = b.length; e < h; e++) {
                var f = b[e].src;
                l(U(a.aoData, "anCells", f)).removeClass(c + (2 > e ? e + 1 : 3))
            }
            e = 0;
            for (h = d.length; e < h; e++)
                f = d[e].src,
                l(U(a.aoData, "anCells", f)).addClass(c + (2 > e ? e + 1 : 3))
        }
        a.aLastSort = d
    }
    function fc(a, b) {
        var c = a.aoColumns[b], d = u.ext.order[c.sSortDataType], e;
        d && (e = d.call(a.oInstance, a, b, ua(a, b)));
        for (var h, f = u.ext.type.order[c.sType + "-pre"], g = 0, k = a.aoData.length; g < k; g++)
            if (c = a.aoData[g],
            c._aSortData || (c._aSortData = []),
            !c._aSortData[b] || d)
                h = d ? e[g] : T(a, g, b, "sort"),
                c._aSortData[b] = f ? f(h) : h
    }
    function Da(a) {
        if (!a._bLoadingState) {
            var b = {
                time: +new Date,
                start: a._iDisplayStart,
                length: a._iDisplayLength,
                order: l.extend(!0, [], a.aaSorting),
                search: Zb(a.oPreviousSearch),
                columns: l.map(a.aoColumns, function(c, d) {
                    return {
                        visible: c.bVisible,
                        search: Zb(a.aoPreSearchCols[d])
                    }
                })
            };
            a.oSavedState = b;
            F(a, "aoStateSaveParams", "stateSaveParams", [a, b]);
            a.oFeatures.bStateSave && !a.bDestroying && a.fnStateSaveCallback.call(a.oInstance, a, b)
        }
    }
    function hc(a, b, c) {
        if (a.oFeatures.bStateSave)
            return b = a.fnStateLoadCallback.call(a.oInstance, a, function(d) {
                tb(a, d, c)
            }),
            b !== q && tb(a, b, c),
            !0;
        c()
    }
    function tb(a, b, c) {
        var d, e = a.aoColumns;
        a._bLoadingState = !0;
        var h = a._bInitComplete ? new u.Api(a) : null;
        if (b && b.time) {
            var f = F(a, "aoStateLoadParams", "stateLoadParams", [a, b]);
            if (-1 !== l.inArray(!1, f))
                a._bLoadingState = !1;
            else if (f = a.iStateDuration,
            0 < f && b.time < +new Date - 1E3 * f)
                a._bLoadingState = !1;
            else if (b.columns && e.length !== b.columns.length)
                a._bLoadingState = !1;
            else {
                a.oLoadedState = l.extend(!0, {}, b);
                b.length !== q && (h ? h.page.len(b.length) : a._iDisplayLength = b.length);
                b.start !== q && (null === h ? (a._iDisplayStart = b.start,
                a.iInitDisplayStart = b.start) : Ta(a, b.start / a._iDisplayLength));
                b.order !== q && (a.aaSorting = [],
                l.each(b.order, function(k, m) {
                    a.aaSorting.push(m[0] >= e.length ? [0, m[1]] : m)
                }));
                b.search !== q && l.extend(a.oPreviousSearch, $b(b.search));
                if (b.columns) {
                    f = 0;
                    for (d = b.columns.length; f < d; f++) {
                        var g = b.columns[f];
                        g.visible !== q && (h ? h.column(f).visible(g.visible, !1) : e[f].bVisible = g.visible);
                        g.search !== q && l.extend(a.aoPreSearchCols[f], $b(g.search))
                    }
                    h && h.columns.adjust()
                }
                a._bLoadingState = !1;
                F(a, "aoStateLoaded", "stateLoaded", [a, b])
            }
        } else
            a._bLoadingState = !1;
        c()
    }
    function Wa(a) {
        var b = u.settings;
        a = l.inArray(a, U(b, "nTable"));
        return -1 !== a ? b[a] : null
    }
    function ea(a, b, c, d) {
        c = "DataTables warning: " + (a ? "table id=" + a.sTableId + " - " : "") + c;
        d && (c += ". For more information about this error, please see http://datatables.net/tn/" + d);
        if (b)
            y.console && console.log && console.log(c);
        else if (b = u.ext,
        b = b.sErrMode || b.errMode,
        a && F(a, null, "error", [a, d, c]),
        "alert" == b)
            alert(c);
        else {
            if ("throw" == b)
                throw Error(c);
            "function" == typeof b && b(a, d, c)
        }
    }
    function Y(a, b, c, d) {
        Array.isArray(c) ? l.each(c, function(e, h) {
            Array.isArray(h) ? Y(a, b, h[0], h[1]) : Y(a, b, h)
        }) : (d === q && (d = c),
        b[c] !== q && (a[d] = b[c]))
    }
    function ub(a, b, c) {
        var d;
        for (d in b)
            if (b.hasOwnProperty(d)) {
                var e = b[d];
                l.isPlainObject(e) ? (l.isPlainObject(a[d]) || (a[d] = {}),
                l.extend(!0, a[d], e)) : c && "data" !== d && "aaData" !== d && Array.isArray(e) ? a[d] = e.slice() : a[d] = e
            }
        return a
    }
    function sb(a, b, c) {
        l(a).on("click.DT", b, function(d) {
            l(a).trigger("blur");
            c(d)
        }).on("keypress.DT", b, function(d) {
            13 === d.which && (d.preventDefault(),
            c(d))
        }).on("selectstart.DT", function() {
            return !1
        })
    }
    function R(a, b, c, d) {
        c && a[b].push({
            fn: c,
            sName: d
        })
    }
    function F(a, b, c, d) {
        var e = [];
        b && (e = l.map(a[b].slice().reverse(), function(h, f) {
            return h.fn.apply(a.oInstance, d)
        }));
        null !== c && (b = l.Event(c + ".dt"),
        l(a.nTable).trigger(b, d),
        e.push(b.result));
        return e
    }
    function qb(a) {
        var b = a._iDisplayStart
          , c = a.fnDisplayEnd()
          , d = a._iDisplayLength;
        b >= c && (b = c - d);
        b -= b % d;
        if (-1 === d || 0 > b)
            b = 0;
        a._iDisplayStart = b
    }
    function lb(a, b) {
        a = a.renderer;
        var c = u.ext.renderer[b];
        return l.isPlainObject(a) && a[b] ? c[a[b]] || c._ : "string" === typeof a ? c[a] || c._ : c._
    }
    function Q(a) {
        return a.oFeatures.bServerSide ? "ssp" : a.ajax || a.sAjaxSource ? "ajax" : "dom"
    }
    function Ea(a, b) {
        var c = ic.numbers_length
          , d = Math.floor(c / 2);
        b <= c ? a = pa(0, b) : a <= d ? (a = pa(0, c - 2),
        a.push("ellipsis"),
        a.push(b - 1)) : (a >= b - 1 - d ? a = pa(b - (c - 2), b) : (a = pa(a - d + 2, a + d - 1),
        a.push("ellipsis"),
        a.push(b - 1)),
        a.splice(0, 0, "ellipsis"),
        a.splice(0, 0, 0));
        a.DT_el = "span";
        return a
    }
    function bb(a) {
        l.each({
            num: function(b) {
                return Xa(b, a)
            },
            "num-fmt": function(b) {
                return Xa(b, a, vb)
            },
            "html-num": function(b) {
                return Xa(b, a, Ya)
            },
            "html-num-fmt": function(b) {
                return Xa(b, a, Ya, vb)
            }
        }, function(b, c) {
            M.type.order[b + a + "-pre"] = c;
            b.match(/^html\-/) && (M.type.search[b + a] = M.type.search.html)
        })
    }
    function jc(a, b, c, d, e) {
        return y.moment ? a[b](e) : y.luxon ? a[c](e) : d ? a[d](e) : a
    }
    function Za(a, b, c) {
        if (y.moment) {
            var d = y.moment.utc(a, b, c, !0);
            if (!d.isValid())
                return null
        } else if (y.luxon) {
            d = b ? y.luxon.DateTime.fromFormat(a, b) : y.luxon.DateTime.fromISO(a);
            if (!d.isValid)
                return null;
            d.setLocale(c)
        } else
            b ? (kc || alert("DataTables warning: Formatted date without Moment.js or Luxon - https://datatables.net/tn/17"),
            kc = !0) : d = new Date(a);
        return d
    }
    function wb(a) {
        return function(b, c, d, e) {
            0 === arguments.length ? (d = "en",
            b = c = null) : 1 === arguments.length ? (d = "en",
            c = b,
            b = null) : 2 === arguments.length && (d = c,
            c = b,
            b = null);
            var h = "datetime-" + c;
            u.ext.type.order[h] || (u.ext.type.detect.unshift(function(f) {
                return f === h ? h : !1
            }),
            u.ext.type.order[h + "-asc"] = function(f, g) {
                f = f.valueOf();
                g = g.valueOf();
                return f === g ? 0 : f < g ? -1 : 1
            }
            ,
            u.ext.type.order[h + "-desc"] = function(f, g) {
                f = f.valueOf();
                g = g.valueOf();
                return f === g ? 0 : f > g ? -1 : 1
            }
            );
            return function(f, g) {
                if (null === f || f === q)
                    "--now" === e ? (f = new Date,
                    f = new Date(Date.UTC(f.getFullYear(), f.getMonth(), f.getDate(), f.getHours(), f.getMinutes(), f.getSeconds()))) : f = "";
                if ("type" === g)
                    return h;
                if ("" === f)
                    return "sort" !== g ? "" : Za("0000-01-01 00:00:00", null, d);
                if (null !== c && b === c && "sort" !== g && "type" !== g && !(f instanceof Date))
                    return f;
                var k = Za(f, b, d);
                if (null === k)
                    return f;
                if ("sort" === g)
                    return k;
                f = null === c ? jc(k, "toDate", "toJSDate", "")[a]() : jc(k, "format", "toFormat", "toISOString", c);
                return "display" === g ? $a(f) : f
            }
        }
    }
    function lc(a) {
        return function() {
            var b = [Wa(this[u.ext.iApiIndex])].concat(Array.prototype.slice.call(arguments));
            return u.ext.internal[a].apply(this, b)
        }
    }
    var u = function(a, b) {
        if (this instanceof u)
            return l(a).DataTable(b);
        b = a;
        this.$ = function(f, g) {
            return this.api(!0).$(f, g)
        }
        ;
        this._ = function(f, g) {
            return this.api(!0).rows(f, g).data()
        }
        ;
        this.api = function(f) {
            return f ? new B(Wa(this[M.iApiIndex])) : new B(this)
        }
        ;
        this.fnAddData = function(f, g) {
            var k = this.api(!0);
            f = Array.isArray(f) && (Array.isArray(f[0]) || l.isPlainObject(f[0])) ? k.rows.add(f) : k.row.add(f);
            (g === q || g) && k.draw();
            return f.flatten().toArray()
        }
        ;
        this.fnAdjustColumnSizing = function(f) {
            var g = this.api(!0).columns.adjust()
              , k = g.settings()[0]
              , m = k.oScroll;
            f === q || f ? g.draw(!1) : ("" !== m.sX || "" !== m.sY) && Ja(k)
        }
        ;
        this.fnClearTable = function(f) {
            var g = this.api(!0).clear();
            (f === q || f) && g.draw()
        }
        ;
        this.fnClose = function(f) {
            this.api(!0).row(f).child.hide()
        }
        ;
        this.fnDeleteRow = function(f, g, k) {
            var m = this.api(!0);
            f = m.rows(f);
            var n = f.settings()[0]
              , p = n.aoData[f[0][0]];
            f.remove();
            g && g.call(this, n, p);
            (k === q || k) && m.draw();
            return p
        }
        ;
        this.fnDestroy = function(f) {
            this.api(!0).destroy(f)
        }
        ;
        this.fnDraw = function(f) {
            this.api(!0).draw(f)
        }
        ;
        this.fnFilter = function(f, g, k, m, n, p) {
            n = this.api(!0);
            null === g || g === q ? n.search(f, k, m, p) : n.column(g).search(f, k, m, p);
            n.draw()
        }
        ;
        this.fnGetData = function(f, g) {
            var k = this.api(!0);
            if (f !== q) {
                var m = f.nodeName ? f.nodeName.toLowerCase() : "";
                return g !== q || "td" == m || "th" == m ? k.cell(f, g).data() : k.row(f).data() || null
            }
            return k.data().toArray()
        }
        ;
        this.fnGetNodes = function(f) {
            var g = this.api(!0);
            return f !== q ? g.row(f).node() : g.rows().nodes().flatten().toArray()
        }
        ;
        this.fnGetPosition = function(f) {
            var g = this.api(!0)
              , k = f.nodeName.toUpperCase();
            return "TR" == k ? g.row(f).index() : "TD" == k || "TH" == k ? (f = g.cell(f).index(),
            [f.row, f.columnVisible, f.column]) : null
        }
        ;
        this.fnIsOpen = function(f) {
            return this.api(!0).row(f).child.isShown()
        }
        ;
        this.fnOpen = function(f, g, k) {
            return this.api(!0).row(f).child(g, k).show().child()[0]
        }
        ;
        this.fnPageChange = function(f, g) {
            f = this.api(!0).page(f);
            (g === q || g) && f.draw(!1)
        }
        ;
        this.fnSetColumnVis = function(f, g, k) {
            f = this.api(!0).column(f).visible(g);
            (k === q || k) && f.columns.adjust().draw()
        }
        ;
        this.fnSettings = function() {
            return Wa(this[M.iApiIndex])
        }
        ;
        this.fnSort = function(f) {
            this.api(!0).order(f).draw()
        }
        ;
        this.fnSortListener = function(f, g, k) {
            this.api(!0).order.listener(f, g, k)
        }
        ;
        this.fnUpdate = function(f, g, k, m, n) {
            var p = this.api(!0);
            k === q || null === k ? p.row(g).data(f) : p.cell(g, k).data(f);
            (n === q || n) && p.columns.adjust();
            (m === q || m) && p.draw();
            return 0
        }
        ;
        this.fnVersionCheck = M.fnVersionCheck;
        var c = this
          , d = b === q
          , e = this.length;
        d && (b = {});
        this.oApi = this.internal = M.internal;
        for (var h in u.ext.internal)
            h && (this[h] = lc(h));
        this.each(function() {
            var f = {}, g = 1 < e ? ub(f, b, !0) : b, k = 0, m;
            f = this.getAttribute("id");
            var n = !1
              , p = u.defaults
              , t = l(this);
            if ("table" != this.nodeName.toLowerCase())
                ea(null, 0, "Non-table node initialisation (" + this.nodeName + ")", 2);
            else {
                Db(p);
                Eb(p.column);
                P(p, p, !0);
                P(p.column, p.column, !0);
                P(p, l.extend(g, t.data()), !0);
                var v = u.settings;
                k = 0;
                for (m = v.length; k < m; k++) {
                    var x = v[k];
                    if (x.nTable == this || x.nTHead && x.nTHead.parentNode == this || x.nTFoot && x.nTFoot.parentNode == this) {
                        var w = g.bRetrieve !== q ? g.bRetrieve : p.bRetrieve;
                        if (d || w)
                            return x.oInstance;
                        if (g.bDestroy !== q ? g.bDestroy : p.bDestroy) {
                            x.oInstance.fnDestroy();
                            break
                        } else {
                            ea(x, 0, "Cannot reinitialise DataTable", 3);
                            return
                        }
                    }
                    if (x.sTableId == this.id) {
                        v.splice(k, 1);
                        break
                    }
                }
                if (null === f || "" === f)
                    this.id = f = "DataTables_Table_" + u.ext._unique++;
                var r = l.extend(!0, {}, u.models.oSettings, {
                    sDestroyWidth: t[0].style.width,
                    sInstance: f,
                    sTableId: f
                });
                r.nTable = this;
                r.oApi = c.internal;
                r.oInit = g;
                v.push(r);
                r.oInstance = 1 === c.length ? c : t.dataTable();
                Db(g);
                la(g.oLanguage);
                g.aLengthMenu && !g.iDisplayLength && (g.iDisplayLength = Array.isArray(g.aLengthMenu[0]) ? g.aLengthMenu[0][0] : g.aLengthMenu[0]);
                g = ub(l.extend(!0, {}, p), g);
                Y(r.oFeatures, g, "bPaginate bLengthChange bFilter bSort bSortMulti bInfo bProcessing bAutoWidth bSortClasses bServerSide bDeferRender".split(" "));
                Y(r, g, ["asStripeClasses", "ajax", "fnServerData", "fnFormatNumber", "sServerMethod", "aaSorting", "aaSortingFixed", "aLengthMenu", "sPaginationType", "sAjaxSource", "sAjaxDataProp", "iStateDuration", "sDom", "bSortCellsTop", "iTabIndex", "fnStateLoadCallback", "fnStateSaveCallback", "renderer", "searchDelay", "rowId", ["iCookieDuration", "iStateDuration"], ["oSearch", "oPreviousSearch"], ["aoSearchCols", "aoPreSearchCols"], ["iDisplayLength", "_iDisplayLength"]]);
                Y(r.oScroll, g, [["sScrollX", "sX"], ["sScrollXInner", "sXInner"], ["sScrollY", "sY"], ["bScrollCollapse", "bCollapse"]]);
                Y(r.oLanguage, g, "fnInfoCallback");
                R(r, "aoDrawCallback", g.fnDrawCallback, "user");
                R(r, "aoServerParams", g.fnServerParams, "user");
                R(r, "aoStateSaveParams", g.fnStateSaveParams, "user");
                R(r, "aoStateLoadParams", g.fnStateLoadParams, "user");
                R(r, "aoStateLoaded", g.fnStateLoaded, "user");
                R(r, "aoRowCallback", g.fnRowCallback, "user");
                R(r, "aoRowCreatedCallback", g.fnCreatedRow, "user");
                R(r, "aoHeaderCallback", g.fnHeaderCallback, "user");
                R(r, "aoFooterCallback", g.fnFooterCallback, "user");
                R(r, "aoInitComplete", g.fnInitComplete, "user");
                R(r, "aoPreDrawCallback", g.fnPreDrawCallback, "user");
                r.rowIdFn = ma(g.rowId);
                Fb(r);
                var C = r.oClasses;
                l.extend(C, u.ext.classes, g.oClasses);
                t.addClass(C.sTable);
                r.iInitDisplayStart === q && (r.iInitDisplayStart = g.iDisplayStart,
                r._iDisplayStart = g.iDisplayStart);
                null !== g.iDeferLoading && (r.bDeferLoading = !0,
                f = Array.isArray(g.iDeferLoading),
                r._iRecordsDisplay = f ? g.iDeferLoading[0] : g.iDeferLoading,
                r._iRecordsTotal = f ? g.iDeferLoading[1] : g.iDeferLoading);
                var G = r.oLanguage;
                l.extend(!0, G, g.oLanguage);
                G.sUrl ? (l.ajax({
                    dataType: "json",
                    url: G.sUrl,
                    success: function(I) {
                        P(p.oLanguage, I);
                        la(I);
                        l.extend(!0, G, I, r.oInit.oLanguage);
                        F(r, null, "i18n", [r]);
                        Aa(r)
                    },
                    error: function() {
                        Aa(r)
                    }
                }),
                n = !0) : F(r, null, "i18n", [r]);
                null === g.asStripeClasses && (r.asStripeClasses = [C.sStripeOdd, C.sStripeEven]);
                f = r.asStripeClasses;
                var ba = t.children("tbody").find("tr").eq(0);
                -1 !== l.inArray(!0, l.map(f, function(I, H) {
                    return ba.hasClass(I)
                })) && (l("tbody tr", this).removeClass(f.join(" ")),
                r.asDestroyStripes = f.slice());
                f = [];
                v = this.getElementsByTagName("thead");
                0 !== v.length && (wa(r.aoHeader, v[0]),
                f = Pa(r));
                if (null === g.aoColumns)
                    for (v = [],
                    k = 0,
                    m = f.length; k < m; k++)
                        v.push(null);
                else
                    v = g.aoColumns;
                k = 0;
                for (m = v.length; k < m; k++)
                    cb(r, f ? f[k] : null);
                Hb(r, g.aoColumnDefs, v, function(I, H) {
                    Ia(r, I, H)
                });
                if (ba.length) {
                    var L = function(I, H) {
                        return null !== I.getAttribute("data-" + H) ? H : null
                    };
                    l(ba[0]).children("th, td").each(function(I, H) {
                        var fa = r.aoColumns[I];
                        if (fa.mData === I) {
                            var Z = L(H, "sort") || L(H, "order");
                            H = L(H, "filter") || L(H, "search");
                            if (null !== Z || null !== H)
                                fa.mData = {
                                    _: I + ".display",
                                    sort: null !== Z ? I + ".@data-" + Z : q,
                                    type: null !== Z ? I + ".@data-" + Z : q,
                                    filter: null !== H ? I + ".@data-" + H : q
                                },
                                Ia(r, I)
                        }
                    })
                }
                var O = r.oFeatures;
                f = function() {
                    if (g.aaSorting === q) {
                        var I = r.aaSorting;
                        k = 0;
                        for (m = I.length; k < m; k++)
                            I[k][1] = r.aoColumns[k].asSorting[0]
                    }
                    Va(r);
                    O.bSort && R(r, "aoDrawCallback", function() {
                        if (r.bSorted) {
                            var Z = oa(r)
                              , Ba = {};
                            l.each(Z, function(X, ca) {
                                Ba[ca.src] = ca.dir
                            });
                            F(r, null, "order", [r, Z, Ba]);
                            gc(r)
                        }
                    });
                    R(r, "aoDrawCallback", function() {
                        (r.bSorted || "ssp" === Q(r) || O.bDeferRender) && Va(r)
                    }, "sc");
                    I = t.children("caption").each(function() {
                        this._captionSide = l(this).css("caption-side")
                    });
                    var H = t.children("thead");
                    0 === H.length && (H = l("<thead/>").appendTo(t));
                    r.nTHead = H[0];
                    var fa = t.children("tbody");
                    0 === fa.length && (fa = l("<tbody/>").insertAfter(H));
                    r.nTBody = fa[0];
                    H = t.children("tfoot");
                    0 === H.length && 0 < I.length && ("" !== r.oScroll.sX || "" !== r.oScroll.sY) && (H = l("<tfoot/>").appendTo(t));
                    0 === H.length || 0 === H.children().length ? t.addClass(C.sNoFooter) : 0 < H.length && (r.nTFoot = H[0],
                    wa(r.aoFooter, r.nTFoot));
                    if (g.aaData)
                        for (k = 0; k < g.aaData.length; k++)
                            ia(r, g.aaData[k]);
                    else
                        (r.bDeferLoading || "dom" == Q(r)) && La(r, l(r.nTBody).children("tr"));
                    r.aiDisplay = r.aiDisplayMaster.slice();
                    r.bInitialised = !0;
                    !1 === n && Aa(r)
                }
                ;
                R(r, "aoDrawCallback", Da, "state_save");
                g.bStateSave ? (O.bStateSave = !0,
                hc(r, g, f)) : f()
            }
        });
        c = null;
        return this
    }, M, z, J, xb = {}, mc = /[\r\n\u2028]/g, Ya = /<.*?>/g, Dc = /^\d{2,4}[\.\/\-]\d{1,2}[\.\/\-]\d{1,2}([T ]{1}\d{1,2}[:\.]\d{2}([\.:]\d{2})?)?$/, Ec = /(\/|\.|\*|\+|\?|\||\(|\)|\[|\]|\{|\}|\\|\$|\^|\-)/g, vb = /['\u00A0,$£€¥%\u2009\u202F\u20BD\u20a9\u20BArfkɃΞ]/gi, aa = function(a) {
        return a && !0 !== a && "-" !== a ? !1 : !0
    }, nc = function(a) {
        var b = parseInt(a, 10);
        return !isNaN(b) && isFinite(a) ? b : null
    }, oc = function(a, b) {
        xb[b] || (xb[b] = new RegExp(ob(b),"g"));
        return "string" === typeof a && "." !== b ? a.replace(/\./g, "").replace(xb[b], ".") : a
    }, yb = function(a, b, c) {
        var d = "string" === typeof a;
        if (aa(a))
            return !0;
        b && d && (a = oc(a, b));
        c && d && (a = a.replace(vb, ""));
        return !isNaN(parseFloat(a)) && isFinite(a)
    }, pc = function(a, b, c) {
        return aa(a) ? !0 : aa(a) || "string" === typeof a ? yb(a.replace(Ya, ""), b, c) ? !0 : null : null
    }, U = function(a, b, c) {
        var d = []
          , e = 0
          , h = a.length;
        if (c !== q)
            for (; e < h; e++)
                a[e] && a[e][b] && d.push(a[e][b][c]);
        else
            for (; e < h; e++)
                a[e] && d.push(a[e][b]);
        return d
    }, Fa = function(a, b, c, d) {
        var e = []
          , h = 0
          , f = b.length;
        if (d !== q)
            for (; h < f; h++)
                a[b[h]][c] && e.push(a[b[h]][c][d]);
        else
            for (; h < f; h++)
                e.push(a[b[h]][c]);
        return e
    }, pa = function(a, b) {
        var c = [];
        if (b === q) {
            b = 0;
            var d = a
        } else
            d = b,
            b = a;
        for (a = b; a < d; a++)
            c.push(a);
        return c
    }, qc = function(a) {
        for (var b = [], c = 0, d = a.length; c < d; c++)
            a[c] && b.push(a[c]);
        return b
    }, Oa = function(a) {
        a: {
            if (!(2 > a.length)) {
                var b = a.slice().sort();
                for (var c = b[0], d = 1, e = b.length; d < e; d++) {
                    if (b[d] === c) {
                        b = !1;
                        break a
                    }
                    c = b[d]
                }
            }
            b = !0
        }
        if (b)
            return a.slice();
        b = [];
        e = a.length;
        var h, f = 0;
        d = 0;
        a: for (; d < e; d++) {
            c = a[d];
            for (h = 0; h < f; h++)
                if (b[h] === c)
                    continue a;
            b.push(c);
            f++
        }
        return b
    }, rc = function(a, b) {
        if (Array.isArray(b))
            for (var c = 0; c < b.length; c++)
                rc(a, b[c]);
        else
            a.push(b);
        return a
    }, sc = function(a, b) {
        b === q && (b = 0);
        return -1 !== this.indexOf(a, b)
    };
    Array.isArray || (Array.isArray = function(a) {
        return "[object Array]" === Object.prototype.toString.call(a)
    }
    );
    Array.prototype.includes || (Array.prototype.includes = sc);
    String.prototype.trim || (String.prototype.trim = function() {
        return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
    }
    );
    String.prototype.includes || (String.prototype.includes = sc);
    u.util = {
        throttle: function(a, b) {
            var c = b !== q ? b : 200, d, e;
            return function() {
                var h = this
                  , f = +new Date
                  , g = arguments;
                d && f < d + c ? (clearTimeout(e),
                e = setTimeout(function() {
                    d = q;
                    a.apply(h, g)
                }, c)) : (d = f,
                a.apply(h, g))
            }
        },
        escapeRegex: function(a) {
            return a.replace(Ec, "\\$1")
        },
        set: function(a) {
            if (l.isPlainObject(a))
                return u.util.set(a._);
            if (null === a)
                return function() {}
                ;
            if ("function" === typeof a)
                return function(c, d, e) {
                    a(c, "set", d, e)
                }
                ;
            if ("string" !== typeof a || -1 === a.indexOf(".") && -1 === a.indexOf("[") && -1 === a.indexOf("("))
                return function(c, d) {
                    c[a] = d
                }
                ;
            var b = function(c, d, e) {
                e = hb(e);
                var h = e[e.length - 1];
                for (var f, g, k = 0, m = e.length - 1; k < m; k++) {
                    if ("__proto__" === e[k] || "constructor" === e[k])
                        throw Error("Cannot set prototype values");
                    f = e[k].match(Ga);
                    g = e[k].match(qa);
                    if (f) {
                        e[k] = e[k].replace(Ga, "");
                        c[e[k]] = [];
                        h = e.slice();
                        h.splice(0, k + 1);
                        f = h.join(".");
                        if (Array.isArray(d))
                            for (g = 0,
                            m = d.length; g < m; g++)
                                h = {},
                                b(h, d[g], f),
                                c[e[k]].push(h);
                        else
                            c[e[k]] = d;
                        return
                    }
                    g && (e[k] = e[k].replace(qa, ""),
                    c = c[e[k]](d));
                    if (null === c[e[k]] || c[e[k]] === q)
                        c[e[k]] = {};
                    c = c[e[k]]
                }
                if (h.match(qa))
                    c[h.replace(qa, "")](d);
                else
                    c[h.replace(Ga, "")] = d
            };
            return function(c, d) {
                return b(c, d, a)
            }
        },
        get: function(a) {
            if (l.isPlainObject(a)) {
                var b = {};
                l.each(a, function(d, e) {
                    e && (b[d] = u.util.get(e))
                });
                return function(d, e, h, f) {
                    var g = b[e] || b._;
                    return g !== q ? g(d, e, h, f) : d
                }
            }
            if (null === a)
                return function(d) {
                    return d
                }
                ;
            if ("function" === typeof a)
                return function(d, e, h, f) {
                    return a(d, e, h, f)
                }
                ;
            if ("string" !== typeof a || -1 === a.indexOf(".") && -1 === a.indexOf("[") && -1 === a.indexOf("("))
                return function(d, e) {
                    return d[a]
                }
                ;
            var c = function(d, e, h) {
                if ("" !== h) {
                    var f = hb(h);
                    for (var g = 0, k = f.length; g < k; g++) {
                        h = f[g].match(Ga);
                        var m = f[g].match(qa);
                        if (h) {
                            f[g] = f[g].replace(Ga, "");
                            "" !== f[g] && (d = d[f[g]]);
                            m = [];
                            f.splice(0, g + 1);
                            f = f.join(".");
                            if (Array.isArray(d))
                                for (g = 0,
                                k = d.length; g < k; g++)
                                    m.push(c(d[g], e, f));
                            d = h[0].substring(1, h[0].length - 1);
                            d = "" === d ? m : m.join(d);
                            break
                        } else if (m) {
                            f[g] = f[g].replace(qa, "");
                            d = d[f[g]]();
                            continue
                        }
                        if (null === d || d[f[g]] === q)
                            return q;
                        d = d[f[g]]
                    }
                }
                return d
            };
            return function(d, e) {
                return c(d, e, a)
            }
        }
    };
    var S = function(a, b, c) {
        a[b] !== q && (a[c] = a[b])
    }
      , Ga = /\[.*?\]$/
      , qa = /\(\)$/
      , ma = u.util.get
      , ha = u.util.set
      , ob = u.util.escapeRegex
      , Sa = l("<div>")[0]
      , Bc = Sa.textContent !== q
      , Cc = /<.*?>/g
      , mb = u.util.throttle
      , tc = []
      , N = Array.prototype
      , Fc = function(a) {
        var b, c = u.settings, d = l.map(c, function(h, f) {
            return h.nTable
        });
        if (a) {
            if (a.nTable && a.oApi)
                return [a];
            if (a.nodeName && "table" === a.nodeName.toLowerCase()) {
                var e = l.inArray(a, d);
                return -1 !== e ? [c[e]] : null
            }
            if (a && "function" === typeof a.settings)
                return a.settings().toArray();
            "string" === typeof a ? b = l(a) : a instanceof l && (b = a)
        } else
            return [];
        if (b)
            return b.map(function(h) {
                e = l.inArray(this, d);
                return -1 !== e ? c[e] : null
            }).toArray()
    };
    var B = function(a, b) {
        if (!(this instanceof B))
            return new B(a,b);
        var c = []
          , d = function(f) {
            (f = Fc(f)) && c.push.apply(c, f)
        };
        if (Array.isArray(a))
            for (var e = 0, h = a.length; e < h; e++)
                d(a[e]);
        else
            d(a);
        this.context = Oa(c);
        b && l.merge(this, b);
        this.selector = {
            rows: null,
            cols: null,
            opts: null
        };
        B.extend(this, this, tc)
    };
    u.Api = B;
    l.extend(B.prototype, {
        any: function() {
            return 0 !== this.count()
        },
        concat: N.concat,
        context: [],
        count: function() {
            return this.flatten().length
        },
        each: function(a) {
            for (var b = 0, c = this.length; b < c; b++)
                a.call(this, this[b], b, this);
            return this
        },
        eq: function(a) {
            var b = this.context;
            return b.length > a ? new B(b[a],this[a]) : null
        },
        filter: function(a) {
            var b = [];
            if (N.filter)
                b = N.filter.call(this, a, this);
            else
                for (var c = 0, d = this.length; c < d; c++)
                    a.call(this, this[c], c, this) && b.push(this[c]);
            return new B(this.context,b)
        },
        flatten: function() {
            var a = [];
            return new B(this.context,a.concat.apply(a, this.toArray()))
        },
        join: N.join,
        indexOf: N.indexOf || function(a, b) {
            b = b || 0;
            for (var c = this.length; b < c; b++)
                if (this[b] === a)
                    return b;
            return -1
        }
        ,
        iterator: function(a, b, c, d) {
            var e = [], h, f, g = this.context, k, m = this.selector;
            "string" === typeof a && (d = c,
            c = b,
            b = a,
            a = !1);
            var n = 0;
            for (h = g.length; n < h; n++) {
                var p = new B(g[n]);
                if ("table" === b) {
                    var t = c.call(p, g[n], n);
                    t !== q && e.push(t)
                } else if ("columns" === b || "rows" === b)
                    t = c.call(p, g[n], this[n], n),
                    t !== q && e.push(t);
                else if ("column" === b || "column-rows" === b || "row" === b || "cell" === b) {
                    var v = this[n];
                    "column-rows" === b && (k = ab(g[n], m.opts));
                    var x = 0;
                    for (f = v.length; x < f; x++)
                        t = v[x],
                        t = "cell" === b ? c.call(p, g[n], t.row, t.column, n, x) : c.call(p, g[n], t, n, x, k),
                        t !== q && e.push(t)
                }
            }
            return e.length || d ? (a = new B(g,a ? e.concat.apply([], e) : e),
            b = a.selector,
            b.rows = m.rows,
            b.cols = m.cols,
            b.opts = m.opts,
            a) : this
        },
        lastIndexOf: N.lastIndexOf || function(a, b) {
            return this.indexOf.apply(this.toArray.reverse(), arguments)
        }
        ,
        length: 0,
        map: function(a) {
            var b = [];
            if (N.map)
                b = N.map.call(this, a, this);
            else
                for (var c = 0, d = this.length; c < d; c++)
                    b.push(a.call(this, this[c], c));
            return new B(this.context,b)
        },
        pluck: function(a) {
            var b = u.util.get(a);
            return this.map(function(c) {
                return b(c)
            })
        },
        pop: N.pop,
        push: N.push,
        reduce: N.reduce || function(a, b) {
            return Gb(this, a, b, 0, this.length, 1)
        }
        ,
        reduceRight: N.reduceRight || function(a, b) {
            return Gb(this, a, b, this.length - 1, -1, -1)
        }
        ,
        reverse: N.reverse,
        selector: null,
        shift: N.shift,
        slice: function() {
            return new B(this.context,this)
        },
        sort: N.sort,
        splice: N.splice,
        toArray: function() {
            return N.slice.call(this)
        },
        to$: function() {
            return l(this)
        },
        toJQuery: function() {
            return l(this)
        },
        unique: function() {
            return new B(this.context,Oa(this))
        },
        unshift: N.unshift
    });
    B.extend = function(a, b, c) {
        if (c.length && b && (b instanceof B || b.__dt_wrapper)) {
            var d, e = function(g, k, m) {
                return function() {
                    var n = k.apply(g, arguments);
                    B.extend(n, n, m.methodExt);
                    return n
                }
            };
            var h = 0;
            for (d = c.length; h < d; h++) {
                var f = c[h];
                b[f.name] = "function" === f.type ? e(a, f.val, f) : "object" === f.type ? {} : f.val;
                b[f.name].__dt_wrapper = !0;
                B.extend(a, b[f.name], f.propExt)
            }
        }
    }
    ;
    B.register = z = function(a, b) {
        if (Array.isArray(a))
            for (var c = 0, d = a.length; c < d; c++)
                B.register(a[c], b);
        else {
            d = a.split(".");
            var e = tc, h;
            a = 0;
            for (c = d.length; a < c; a++) {
                var f = (h = -1 !== d[a].indexOf("()")) ? d[a].replace("()", "") : d[a];
                a: {
                    var g = 0;
                    for (var k = e.length; g < k; g++)
                        if (e[g].name === f) {
                            g = e[g];
                            break a
                        }
                    g = null
                }
                g || (g = {
                    name: f,
                    val: {},
                    methodExt: [],
                    propExt: [],
                    type: "object"
                },
                e.push(g));
                a === c - 1 ? (g.val = b,
                g.type = "function" === typeof b ? "function" : l.isPlainObject(b) ? "object" : "other") : e = h ? g.methodExt : g.propExt
            }
        }
    }
    ;
    B.registerPlural = J = function(a, b, c) {
        B.register(a, c);
        B.register(b, function() {
            var d = c.apply(this, arguments);
            return d === this ? this : d instanceof B ? d.length ? Array.isArray(d[0]) ? new B(d.context,d[0]) : d[0] : q : d
        })
    }
    ;
    var uc = function(a, b) {
        if (Array.isArray(a))
            return l.map(a, function(d) {
                return uc(d, b)
            });
        if ("number" === typeof a)
            return [b[a]];
        var c = l.map(b, function(d, e) {
            return d.nTable
        });
        return l(c).filter(a).map(function(d) {
            d = l.inArray(this, c);
            return b[d]
        }).toArray()
    };
    z("tables()", function(a) {
        return a !== q && null !== a ? new B(uc(a, this.context)) : this
    });
    z("table()", function(a) {
        a = this.tables(a);
        var b = a.context;
        return b.length ? new B(b[0]) : a
    });
    J("tables().nodes()", "table().node()", function() {
        return this.iterator("table", function(a) {
            return a.nTable
        }, 1)
    });
    J("tables().body()", "table().body()", function() {
        return this.iterator("table", function(a) {
            return a.nTBody
        }, 1)
    });
    J("tables().header()", "table().header()", function() {
        return this.iterator("table", function(a) {
            return a.nTHead
        }, 1)
    });
    J("tables().footer()", "table().footer()", function() {
        return this.iterator("table", function(a) {
            return a.nTFoot
        }, 1)
    });
    J("tables().containers()", "table().container()", function() {
        return this.iterator("table", function(a) {
            return a.nTableWrapper
        }, 1)
    });
    z("draw()", function(a) {
        return this.iterator("table", function(b) {
            "page" === a ? ja(b) : ("string" === typeof a && (a = "full-hold" === a ? !1 : !0),
            ka(b, !1 === a))
        })
    });
    z("page()", function(a) {
        return a === q ? this.page.info().page : this.iterator("table", function(b) {
            Ta(b, a)
        })
    });
    z("page.info()", function(a) {
        if (0 === this.context.length)
            return q;
        a = this.context[0];
        var b = a._iDisplayStart
          , c = a.oFeatures.bPaginate ? a._iDisplayLength : -1
          , d = a.fnRecordsDisplay()
          , e = -1 === c;
        return {
            page: e ? 0 : Math.floor(b / c),
            pages: e ? 1 : Math.ceil(d / c),
            start: b,
            end: a.fnDisplayEnd(),
            length: c,
            recordsTotal: a.fnRecordsTotal(),
            recordsDisplay: d,
            serverSide: "ssp" === Q(a)
        }
    });
    z("page.len()", function(a) {
        return a === q ? 0 !== this.context.length ? this.context[0]._iDisplayLength : q : this.iterator("table", function(b) {
            pb(b, a)
        })
    });
    var vc = function(a, b, c) {
        if (c) {
            var d = new B(a);
            d.one("draw", function() {
                c(d.ajax.json())
            })
        }
        if ("ssp" == Q(a))
            ka(a, b);
        else {
            V(a, !0);
            var e = a.jqXHR;
            e && 4 !== e.readyState && e.abort();
            Qa(a, [], function(h) {
                Ma(a);
                h = za(a, h);
                for (var f = 0, g = h.length; f < g; f++)
                    ia(a, h[f]);
                ka(a, b);
                V(a, !1)
            })
        }
    };
    z("ajax.json()", function() {
        var a = this.context;
        if (0 < a.length)
            return a[0].json
    });
    z("ajax.params()", function() {
        var a = this.context;
        if (0 < a.length)
            return a[0].oAjaxData
    });
    z("ajax.reload()", function(a, b) {
        return this.iterator("table", function(c) {
            vc(c, !1 === b, a)
        })
    });
    z("ajax.url()", function(a) {
        var b = this.context;
        if (a === q) {
            if (0 === b.length)
                return q;
            b = b[0];
            return b.ajax ? l.isPlainObject(b.ajax) ? b.ajax.url : b.ajax : b.sAjaxSource
        }
        return this.iterator("table", function(c) {
            l.isPlainObject(c.ajax) ? c.ajax.url = a : c.ajax = a
        })
    });
    z("ajax.url().load()", function(a, b) {
        return this.iterator("table", function(c) {
            vc(c, !1 === b, a)
        })
    });
    var zb = function(a, b, c, d, e) {
        var h = [], f, g, k;
        var m = typeof b;
        b && "string" !== m && "function" !== m && b.length !== q || (b = [b]);
        m = 0;
        for (g = b.length; m < g; m++) {
            var n = b[m] && b[m].split && !b[m].match(/[\[\(:]/) ? b[m].split(",") : [b[m]];
            var p = 0;
            for (k = n.length; p < k; p++)
                (f = c("string" === typeof n[p] ? n[p].trim() : n[p])) && f.length && (h = h.concat(f))
        }
        a = M.selector[a];
        if (a.length)
            for (m = 0,
            g = a.length; m < g; m++)
                h = a[m](d, e, h);
        return Oa(h)
    }
      , Ab = function(a) {
        a || (a = {});
        a.filter && a.search === q && (a.search = a.filter);
        return l.extend({
            search: "none",
            order: "current",
            page: "all"
        }, a)
    }
      , Bb = function(a) {
        for (var b = 0, c = a.length; b < c; b++)
            if (0 < a[b].length)
                return a[0] = a[b],
                a[0].length = 1,
                a.length = 1,
                a.context = [a.context[b]],
                a;
        a.length = 0;
        return a
    }
      , ab = function(a, b) {
        var c = []
          , d = a.aiDisplay;
        var e = a.aiDisplayMaster;
        var h = b.search;
        var f = b.order;
        b = b.page;
        if ("ssp" == Q(a))
            return "removed" === h ? [] : pa(0, e.length);
        if ("current" == b)
            for (f = a._iDisplayStart,
            a = a.fnDisplayEnd(); f < a; f++)
                c.push(d[f]);
        else if ("current" == f || "applied" == f)
            if ("none" == h)
                c = e.slice();
            else if ("applied" == h)
                c = d.slice();
            else {
                if ("removed" == h) {
                    var g = {};
                    f = 0;
                    for (a = d.length; f < a; f++)
                        g[d[f]] = null;
                    c = l.map(e, function(k) {
                        return g.hasOwnProperty(k) ? null : k
                    })
                }
            }
        else if ("index" == f || "original" == f)
            for (f = 0,
            a = a.aoData.length; f < a; f++)
                "none" == h ? c.push(f) : (e = l.inArray(f, d),
                (-1 === e && "removed" == h || 0 <= e && "applied" == h) && c.push(f));
        return c
    }
      , Gc = function(a, b, c) {
        var d;
        return zb("row", b, function(e) {
            var h = nc(e)
              , f = a.aoData;
            if (null !== h && !c)
                return [h];
            d || (d = ab(a, c));
            if (null !== h && -1 !== l.inArray(h, d))
                return [h];
            if (null === e || e === q || "" === e)
                return d;
            if ("function" === typeof e)
                return l.map(d, function(k) {
                    var m = f[k];
                    return e(k, m._aData, m.nTr) ? k : null
                });
            if (e.nodeName) {
                h = e._DT_RowIndex;
                var g = e._DT_CellIndex;
                if (h !== q)
                    return f[h] && f[h].nTr === e ? [h] : [];
                if (g)
                    return f[g.row] && f[g.row].nTr === e.parentNode ? [g.row] : [];
                h = l(e).closest("*[data-dt-row]");
                return h.length ? [h.data("dt-row")] : []
            }
            if ("string" === typeof e && "#" === e.charAt(0) && (h = a.aIds[e.replace(/^#/, "")],
            h !== q))
                return [h.idx];
            h = qc(Fa(a.aoData, d, "nTr"));
            return l(h).filter(e).map(function() {
                return this._DT_RowIndex
            }).toArray()
        }, a, c)
    };
    z("rows()", function(a, b) {
        a === q ? a = "" : l.isPlainObject(a) && (b = a,
        a = "");
        b = Ab(b);
        var c = this.iterator("table", function(d) {
            return Gc(d, a, b)
        }, 1);
        c.selector.rows = a;
        c.selector.opts = b;
        return c
    });
    z("rows().nodes()", function() {
        return this.iterator("row", function(a, b) {
            return a.aoData[b].nTr || q
        }, 1)
    });
    z("rows().data()", function() {
        return this.iterator(!0, "rows", function(a, b) {
            return Fa(a.aoData, b, "_aData")
        }, 1)
    });
    J("rows().cache()", "row().cache()", function(a) {
        return this.iterator("row", function(b, c) {
            b = b.aoData[c];
            return "search" === a ? b._aFilterData : b._aSortData
        }, 1)
    });
    J("rows().invalidate()", "row().invalidate()", function(a) {
        return this.iterator("row", function(b, c) {
            va(b, c, a)
        })
    });
    J("rows().indexes()", "row().index()", function() {
        return this.iterator("row", function(a, b) {
            return b
        }, 1)
    });
    J("rows().ids()", "row().id()", function(a) {
        for (var b = [], c = this.context, d = 0, e = c.length; d < e; d++)
            for (var h = 0, f = this[d].length; h < f; h++) {
                var g = c[d].rowIdFn(c[d].aoData[this[d][h]]._aData);
                b.push((!0 === a ? "#" : "") + g)
            }
        return new B(c,b)
    });
    J("rows().remove()", "row().remove()", function() {
        var a = this;
        this.iterator("row", function(b, c, d) {
            var e = b.aoData, h = e[c], f, g;
            e.splice(c, 1);
            var k = 0;
            for (f = e.length; k < f; k++) {
                var m = e[k];
                var n = m.anCells;
                null !== m.nTr && (m.nTr._DT_RowIndex = k);
                if (null !== n)
                    for (m = 0,
                    g = n.length; m < g; m++)
                        n[m]._DT_CellIndex.row = k
            }
            Na(b.aiDisplayMaster, c);
            Na(b.aiDisplay, c);
            Na(a[d], c, !1);
            0 < b._iRecordsDisplay && b._iRecordsDisplay--;
            qb(b);
            c = b.rowIdFn(h._aData);
            c !== q && delete b.aIds[c]
        });
        this.iterator("table", function(b) {
            for (var c = 0, d = b.aoData.length; c < d; c++)
                b.aoData[c].idx = c
        });
        return this
    });
    z("rows.add()", function(a) {
        var b = this.iterator("table", function(d) {
            var e, h = [];
            var f = 0;
            for (e = a.length; f < e; f++) {
                var g = a[f];
                g.nodeName && "TR" === g.nodeName.toUpperCase() ? h.push(La(d, g)[0]) : h.push(ia(d, g))
            }
            return h
        }, 1)
          , c = this.rows(-1);
        c.pop();
        l.merge(c, b);
        return c
    });
    z("row()", function(a, b) {
        return Bb(this.rows(a, b))
    });
    z("row().data()", function(a) {
        var b = this.context;
        if (a === q)
            return b.length && this.length ? b[0].aoData[this[0]]._aData : q;
        var c = b[0].aoData[this[0]];
        c._aData = a;
        Array.isArray(a) && c.nTr && c.nTr.id && ha(b[0].rowId)(a, c.nTr.id);
        va(b[0], this[0], "data");
        return this
    });
    z("row().node()", function() {
        var a = this.context;
        return a.length && this.length ? a[0].aoData[this[0]].nTr || null : null
    });
    z("row.add()", function(a) {
        a instanceof l && a.length && (a = a[0]);
        var b = this.iterator("table", function(c) {
            return a.nodeName && "TR" === a.nodeName.toUpperCase() ? La(c, a)[0] : ia(c, a)
        });
        return this.row(b[0])
    });
    l(A).on("plugin-init.dt", function(a, b) {
        a = new B(b);
        a.on("stateSaveParams", function(d, e, h) {
            d = e.rowIdFn;
            e = e.aoData;
            for (var f = [], g = 0; g < e.length; g++)
                e[g]._detailsShow && f.push("#" + d(e[g]._aData));
            h.childRows = f
        });
        var c = a.state.loaded();
        c && c.childRows && a.rows(l.map(c.childRows, function(d) {
            return d.replace(/:/g, "\\:")
        })).every(function() {
            F(b, null, "requestChild", [this])
        })
    });
    var Hc = function(a, b, c, d) {
        var e = []
          , h = function(f, g) {
            if (Array.isArray(f) || f instanceof l)
                for (var k = 0, m = f.length; k < m; k++)
                    h(f[k], g);
            else
                f.nodeName && "tr" === f.nodeName.toLowerCase() ? e.push(f) : (k = l("<tr><td></td></tr>").addClass(g),
                l("td", k).addClass(g).html(f)[0].colSpan = na(a),
                e.push(k[0]))
        };
        h(c, d);
        b._details && b._details.detach();
        b._details = l(e);
        b._detailsShow && b._details.insertAfter(b.nTr)
    }
      , wc = u.util.throttle(function(a) {
        Da(a[0])
    }, 500)
      , Cb = function(a, b) {
        var c = a.context;
        c.length && (a = c[0].aoData[b !== q ? b : a[0]]) && a._details && (a._details.remove(),
        a._detailsShow = q,
        a._details = q,
        l(a.nTr).removeClass("dt-hasChild"),
        wc(c))
    }
      , xc = function(a, b) {
        var c = a.context;
        if (c.length && a.length) {
            var d = c[0].aoData[a[0]];
            d._details && ((d._detailsShow = b) ? (d._details.insertAfter(d.nTr),
            l(d.nTr).addClass("dt-hasChild")) : (d._details.detach(),
            l(d.nTr).removeClass("dt-hasChild")),
            F(c[0], null, "childRow", [b, a.row(a[0])]),
            Ic(c[0]),
            wc(c))
        }
    }
      , Ic = function(a) {
        var b = new B(a)
          , c = a.aoData;
        b.off("draw.dt.DT_details column-sizing.dt.DT_details destroy.dt.DT_details");
        0 < U(c, "_details").length && (b.on("draw.dt.DT_details", function(d, e) {
            a === e && b.rows({
                page: "current"
            }).eq(0).each(function(h) {
                h = c[h];
                h._detailsShow && h._details.insertAfter(h.nTr)
            })
        }),
        b.on("column-sizing.dt.DT_details", function(d, e, h, f) {
            if (a === e)
                for (e = na(e),
                h = 0,
                f = c.length; h < f; h++)
                    d = c[h],
                    d._details && d._details.children("td[colspan]").attr("colspan", e)
        }),
        b.on("destroy.dt.DT_details", function(d, e) {
            if (a === e)
                for (d = 0,
                e = c.length; d < e; d++)
                    c[d]._details && Cb(b, d)
        }))
    };
    z("row().child()", function(a, b) {
        var c = this.context;
        if (a === q)
            return c.length && this.length ? c[0].aoData[this[0]]._details : q;
        !0 === a ? this.child.show() : !1 === a ? Cb(this) : c.length && this.length && Hc(c[0], c[0].aoData[this[0]], a, b);
        return this
    });
    z(["row().child.show()", "row().child().show()"], function(a) {
        xc(this, !0);
        return this
    });
    z(["row().child.hide()", "row().child().hide()"], function() {
        xc(this, !1);
        return this
    });
    z(["row().child.remove()", "row().child().remove()"], function() {
        Cb(this);
        return this
    });
    z("row().child.isShown()", function() {
        var a = this.context;
        return a.length && this.length ? a[0].aoData[this[0]]._detailsShow || !1 : !1
    });
    var Jc = /^([^:]+):(name|visIdx|visible)$/
      , yc = function(a, b, c, d, e) {
        c = [];
        d = 0;
        for (var h = e.length; d < h; d++)
            c.push(T(a, e[d], b));
        return c
    }
      , Kc = function(a, b, c) {
        var d = a.aoColumns
          , e = U(d, "sName")
          , h = U(d, "nTh");
        return zb("column", b, function(f) {
            var g = nc(f);
            if ("" === f)
                return pa(d.length);
            if (null !== g)
                return [0 <= g ? g : d.length + g];
            if ("function" === typeof f) {
                var k = ab(a, c);
                return l.map(d, function(p, t) {
                    return f(t, yc(a, t, 0, 0, k), h[t]) ? t : null
                })
            }
            var m = "string" === typeof f ? f.match(Jc) : "";
            if (m)
                switch (m[2]) {
                case "visIdx":
                case "visible":
                    g = parseInt(m[1], 10);
                    if (0 > g) {
                        var n = l.map(d, function(p, t) {
                            return p.bVisible ? t : null
                        });
                        return [n[n.length + g]]
                    }
                    return [ta(a, g)];
                case "name":
                    return l.map(e, function(p, t) {
                        return p === m[1] ? t : null
                    });
                default:
                    return []
                }
            if (f.nodeName && f._DT_CellIndex)
                return [f._DT_CellIndex.column];
            g = l(h).filter(f).map(function() {
                return l.inArray(this, h)
            }).toArray();
            if (g.length || !f.nodeName)
                return g;
            g = l(f).closest("*[data-dt-column]");
            return g.length ? [g.data("dt-column")] : []
        }, a, c)
    };
    z("columns()", function(a, b) {
        a === q ? a = "" : l.isPlainObject(a) && (b = a,
        a = "");
        b = Ab(b);
        var c = this.iterator("table", function(d) {
            return Kc(d, a, b)
        }, 1);
        c.selector.cols = a;
        c.selector.opts = b;
        return c
    });
    J("columns().header()", "column().header()", function(a, b) {
        return this.iterator("column", function(c, d) {
            return c.aoColumns[d].nTh
        }, 1)
    });
    J("columns().footer()", "column().footer()", function(a, b) {
        return this.iterator("column", function(c, d) {
            return c.aoColumns[d].nTf
        }, 1)
    });
    J("columns().data()", "column().data()", function() {
        return this.iterator("column-rows", yc, 1)
    });
    J("columns().dataSrc()", "column().dataSrc()", function() {
        return this.iterator("column", function(a, b) {
            return a.aoColumns[b].mData
        }, 1)
    });
    J("columns().cache()", "column().cache()", function(a) {
        return this.iterator("column-rows", function(b, c, d, e, h) {
            return Fa(b.aoData, h, "search" === a ? "_aFilterData" : "_aSortData", c)
        }, 1)
    });
    J("columns().nodes()", "column().nodes()", function() {
        return this.iterator("column-rows", function(a, b, c, d, e) {
            return Fa(a.aoData, e, "anCells", b)
        }, 1)
    });
    J("columns().visible()", "column().visible()", function(a, b) {
        var c = this
          , d = this.iterator("column", function(e, h) {
            if (a === q)
                return e.aoColumns[h].bVisible;
            var f = e.aoColumns, g = f[h], k = e.aoData, m;
            if (a !== q && g.bVisible !== a) {
                if (a) {
                    var n = l.inArray(!0, U(f, "bVisible"), h + 1);
                    f = 0;
                    for (m = k.length; f < m; f++) {
                        var p = k[f].nTr;
                        e = k[f].anCells;
                        p && p.insertBefore(e[h], e[n] || null)
                    }
                } else
                    l(U(e.aoData, "anCells", h)).detach();
                g.bVisible = a
            }
        });
        a !== q && this.iterator("table", function(e) {
            xa(e, e.aoHeader);
            xa(e, e.aoFooter);
            e.aiDisplay.length || l(e.nTBody).find("td[colspan]").attr("colspan", na(e));
            Da(e);
            c.iterator("column", function(h, f) {
                F(h, null, "column-visibility", [h, f, a, b])
            });
            (b === q || b) && c.columns.adjust()
        });
        return d
    });
    J("columns().indexes()", "column().index()", function(a) {
        return this.iterator("column", function(b, c) {
            return "visible" === a ? ua(b, c) : c
        }, 1)
    });
    z("columns.adjust()", function() {
        return this.iterator("table", function(a) {
            sa(a)
        }, 1)
    });
    z("column.index()", function(a, b) {
        if (0 !== this.context.length) {
            var c = this.context[0];
            if ("fromVisible" === a || "toData" === a)
                return ta(c, b);
            if ("fromData" === a || "toVisible" === a)
                return ua(c, b)
        }
    });
    z("column()", function(a, b) {
        return Bb(this.columns(a, b))
    });
    var Lc = function(a, b, c) {
        var d = a.aoData, e = ab(a, c), h = qc(Fa(d, e, "anCells")), f = l(rc([], h)), g, k = a.aoColumns.length, m, n, p, t, v, x;
        return zb("cell", b, function(w) {
            var r = "function" === typeof w;
            if (null === w || w === q || r) {
                m = [];
                n = 0;
                for (p = e.length; n < p; n++)
                    for (g = e[n],
                    t = 0; t < k; t++)
                        v = {
                            row: g,
                            column: t
                        },
                        r ? (x = d[g],
                        w(v, T(a, g, t), x.anCells ? x.anCells[t] : null) && m.push(v)) : m.push(v);
                return m
            }
            if (l.isPlainObject(w))
                return w.column !== q && w.row !== q && -1 !== l.inArray(w.row, e) ? [w] : [];
            r = f.filter(w).map(function(C, G) {
                return {
                    row: G._DT_CellIndex.row,
                    column: G._DT_CellIndex.column
                }
            }).toArray();
            if (r.length || !w.nodeName)
                return r;
            x = l(w).closest("*[data-dt-row]");
            return x.length ? [{
                row: x.data("dt-row"),
                column: x.data("dt-column")
            }] : []
        }, a, c)
    };
    z("cells()", function(a, b, c) {
        l.isPlainObject(a) && (a.row === q ? (c = a,
        a = null) : (c = b,
        b = null));
        l.isPlainObject(b) && (c = b,
        b = null);
        if (null === b || b === q)
            return this.iterator("table", function(n) {
                return Lc(n, a, Ab(c))
            });
        var d = c ? {
            page: c.page,
            order: c.order,
            search: c.search
        } : {}, e = this.columns(b, d), h = this.rows(a, d), f, g, k, m;
        d = this.iterator("table", function(n, p) {
            n = [];
            f = 0;
            for (g = h[p].length; f < g; f++)
                for (k = 0,
                m = e[p].length; k < m; k++)
                    n.push({
                        row: h[p][f],
                        column: e[p][k]
                    });
            return n
        }, 1);
        d = c && c.selected ? this.cells(d, c) : d;
        l.extend(d.selector, {
            cols: b,
            rows: a,
            opts: c
        });
        return d
    });
    J("cells().nodes()", "cell().node()", function() {
        return this.iterator("cell", function(a, b, c) {
            return (a = a.aoData[b]) && a.anCells ? a.anCells[c] : q
        }, 1)
    });
    z("cells().data()", function() {
        return this.iterator("cell", function(a, b, c) {
            return T(a, b, c)
        }, 1)
    });
    J("cells().cache()", "cell().cache()", function(a) {
        a = "search" === a ? "_aFilterData" : "_aSortData";
        return this.iterator("cell", function(b, c, d) {
            return b.aoData[c][a][d]
        }, 1)
    });
    J("cells().render()", "cell().render()", function(a) {
        return this.iterator("cell", function(b, c, d) {
            return T(b, c, d, a)
        }, 1)
    });
    J("cells().indexes()", "cell().index()", function() {
        return this.iterator("cell", function(a, b, c) {
            return {
                row: b,
                column: c,
                columnVisible: ua(a, c)
            }
        }, 1)
    });
    J("cells().invalidate()", "cell().invalidate()", function(a) {
        return this.iterator("cell", function(b, c, d) {
            va(b, c, a, d)
        })
    });
    z("cell()", function(a, b, c) {
        return Bb(this.cells(a, b, c))
    });
    z("cell().data()", function(a) {
        var b = this.context
          , c = this[0];
        if (a === q)
            return b.length && c.length ? T(b[0], c[0].row, c[0].column) : q;
        Ib(b[0], c[0].row, c[0].column, a);
        va(b[0], c[0].row, "data", c[0].column);
        return this
    });
    z("order()", function(a, b) {
        var c = this.context;
        if (a === q)
            return 0 !== c.length ? c[0].aaSorting : q;
        "number" === typeof a ? a = [[a, b]] : a.length && !Array.isArray(a[0]) && (a = Array.prototype.slice.call(arguments));
        return this.iterator("table", function(d) {
            d.aaSorting = a.slice()
        })
    });
    z("order.listener()", function(a, b, c) {
        return this.iterator("table", function(d) {
            kb(d, a, b, c)
        })
    });
    z("order.fixed()", function(a) {
        if (!a) {
            var b = this.context;
            b = b.length ? b[0].aaSortingFixed : q;
            return Array.isArray(b) ? {
                pre: b
            } : b
        }
        return this.iterator("table", function(c) {
            c.aaSortingFixed = l.extend(!0, {}, a)
        })
    });
    z(["columns().order()", "column().order()"], function(a) {
        var b = this;
        return this.iterator("table", function(c, d) {
            var e = [];
            l.each(b[d], function(h, f) {
                e.push([f, a])
            });
            c.aaSorting = e
        })
    });
    z("search()", function(a, b, c, d) {
        var e = this.context;
        return a === q ? 0 !== e.length ? e[0].oPreviousSearch.sSearch : q : this.iterator("table", function(h) {
            h.oFeatures.bFilter && ya(h, l.extend({}, h.oPreviousSearch, {
                sSearch: a + "",
                bRegex: null === b ? !1 : b,
                bSmart: null === c ? !0 : c,
                bCaseInsensitive: null === d ? !0 : d
            }), 1)
        })
    });
    J("columns().search()", "column().search()", function(a, b, c, d) {
        return this.iterator("column", function(e, h) {
            var f = e.aoPreSearchCols;
            if (a === q)
                return f[h].sSearch;
            e.oFeatures.bFilter && (l.extend(f[h], {
                sSearch: a + "",
                bRegex: null === b ? !1 : b,
                bSmart: null === c ? !0 : c,
                bCaseInsensitive: null === d ? !0 : d
            }),
            ya(e, e.oPreviousSearch, 1))
        })
    });
    z("state()", function() {
        return this.context.length ? this.context[0].oSavedState : null
    });
    z("state.clear()", function() {
        return this.iterator("table", function(a) {
            a.fnStateSaveCallback.call(a.oInstance, a, {})
        })
    });
    z("state.loaded()", function() {
        return this.context.length ? this.context[0].oLoadedState : null
    });
    z("state.save()", function() {
        return this.iterator("table", function(a) {
            Da(a)
        })
    });
    u.versionCheck = u.fnVersionCheck = function(a) {
        var b = u.version.split(".");
        a = a.split(".");
        for (var c, d, e = 0, h = a.length; e < h; e++)
            if (c = parseInt(b[e], 10) || 0,
            d = parseInt(a[e], 10) || 0,
            c !== d)
                return c > d;
        return !0
    }
    ;
    u.isDataTable = u.fnIsDataTable = function(a) {
        var b = l(a).get(0)
          , c = !1;
        if (a instanceof u.Api)
            return !0;
        l.each(u.settings, function(d, e) {
            d = e.nScrollHead ? l("table", e.nScrollHead)[0] : null;
            var h = e.nScrollFoot ? l("table", e.nScrollFoot)[0] : null;
            if (e.nTable === b || d === b || h === b)
                c = !0
        });
        return c
    }
    ;
    u.tables = u.fnTables = function(a) {
        var b = !1;
        l.isPlainObject(a) && (b = a.api,
        a = a.visible);
        var c = l.map(u.settings, function(d) {
            if (!a || a && l(d.nTable).is(":visible"))
                return d.nTable
        });
        return b ? new B(c) : c
    }
    ;
    u.camelToHungarian = P;
    z("$()", function(a, b) {
        b = this.rows(b).nodes();
        b = l(b);
        return l([].concat(b.filter(a).toArray(), b.find(a).toArray()))
    });
    l.each(["on", "one", "off"], function(a, b) {
        z(b + "()", function() {
            var c = Array.prototype.slice.call(arguments);
            c[0] = l.map(c[0].split(/\s/), function(e) {
                return e.match(/\.dt\b/) ? e : e + ".dt"
            }).join(" ");
            var d = l(this.tables().nodes());
            d[b].apply(d, c);
            return this
        })
    });
    z("clear()", function() {
        return this.iterator("table", function(a) {
            Ma(a)
        })
    });
    z("settings()", function() {
        return new B(this.context,this.context)
    });
    z("init()", function() {
        var a = this.context;
        return a.length ? a[0].oInit : null
    });
    z("data()", function() {
        return this.iterator("table", function(a) {
            return U(a.aoData, "_aData")
        }).flatten()
    });
    z("destroy()", function(a) {
        a = a || !1;
        return this.iterator("table", function(b) {
            var c = b.oClasses
              , d = b.nTable
              , e = b.nTBody
              , h = b.nTHead
              , f = b.nTFoot
              , g = l(d);
            e = l(e);
            var k = l(b.nTableWrapper), m = l.map(b.aoData, function(p) {
                return p.nTr
            }), n;
            b.bDestroying = !0;
            F(b, "aoDestroyCallback", "destroy", [b]);
            a || (new B(b)).columns().visible(!0);
            k.off(".DT").find(":not(tbody *)").off(".DT");
            l(y).off(".DT-" + b.sInstance);
            d != h.parentNode && (g.children("thead").detach(),
            g.append(h));
            f && d != f.parentNode && (g.children("tfoot").detach(),
            g.append(f));
            b.aaSorting = [];
            b.aaSortingFixed = [];
            Va(b);
            l(m).removeClass(b.asStripeClasses.join(" "));
            l("th, td", h).removeClass(c.sSortable + " " + c.sSortableAsc + " " + c.sSortableDesc + " " + c.sSortableNone);
            e.children().detach();
            e.append(m);
            h = b.nTableWrapper.parentNode;
            f = a ? "remove" : "detach";
            g[f]();
            k[f]();
            !a && h && (h.insertBefore(d, b.nTableReinsertBefore),
            g.css("width", b.sDestroyWidth).removeClass(c.sTable),
            (n = b.asDestroyStripes.length) && e.children().each(function(p) {
                l(this).addClass(b.asDestroyStripes[p % n])
            }));
            c = l.inArray(b, u.settings);
            -1 !== c && u.settings.splice(c, 1)
        })
    });
    l.each(["column", "row", "cell"], function(a, b) {
        z(b + "s().every()", function(c) {
            var d = this.selector.opts
              , e = this;
            return this.iterator(b, function(h, f, g, k, m) {
                c.call(e[b](f, "cell" === b ? g : d, "cell" === b ? d : q), f, g, k, m)
            })
        })
    });
    z("i18n()", function(a, b, c) {
        var d = this.context[0];
        a = ma(a)(d.oLanguage);
        a === q && (a = b);
        c !== q && l.isPlainObject(a) && (a = a[c] !== q ? a[c] : a._);
        return a.replace("%d", c)
    });
    u.version = "1.12.1";
    u.settings = [];
    u.models = {};
    u.models.oSearch = {
        bCaseInsensitive: !0,
        sSearch: "",
        bRegex: !1,
        bSmart: !0,
        "return": !1
    };
    u.models.oRow = {
        nTr: null,
        anCells: null,
        _aData: [],
        _aSortData: null,
        _aFilterData: null,
        _sFilterRow: null,
        _sRowStripe: "",
        src: null,
        idx: -1
    };
    u.models.oColumn = {
        idx: null,
        aDataSort: null,
        asSorting: null,
        bSearchable: null,
        bSortable: null,
        bVisible: null,
        _sManualType: null,
        _bAttrSrc: !1,
        fnCreatedCell: null,
        fnGetData: null,
        fnSetData: null,
        mData: null,
        mRender: null,
        nTh: null,
        nTf: null,
        sClass: null,
        sContentPadding: null,
        sDefaultContent: null,
        sName: null,
        sSortDataType: "std",
        sSortingClass: null,
        sSortingClassJUI: null,
        sTitle: null,
        sType: null,
        sWidth: null,
        sWidthOrig: null
    };
    u.defaults = {
        aaData: null,
        aaSorting: [[0, "asc"]],
        aaSortingFixed: [],
        ajax: null,
        aLengthMenu: [10, 25, 50, 100],
        aoColumns: null,
        aoColumnDefs: null,
        aoSearchCols: [],
        asStripeClasses: null,
        bAutoWidth: !0,
        bDeferRender: !1,
        bDestroy: !1,
        bFilter: !0,
        bInfo: !0,
        bLengthChange: !0,
        bPaginate: !0,
        bProcessing: !1,
        bRetrieve: !1,
        bScrollCollapse: !1,
        bServerSide: !1,
        bSort: !0,
        bSortMulti: !0,
        bSortCellsTop: !1,
        bSortClasses: !0,
        bStateSave: !1,
        fnCreatedRow: null,
        fnDrawCallback: null,
        fnFooterCallback: null,
        fnFormatNumber: function(a) {
            return a.toString().replace(/\B(?=(\d{3})+(?!\d))/g, this.oLanguage.sThousands)
        },
        fnHeaderCallback: null,
        fnInfoCallback: null,
        fnInitComplete: null,
        fnPreDrawCallback: null,
        fnRowCallback: null,
        fnServerData: null,
        fnServerParams: null,
        fnStateLoadCallback: function(a) {
            try {
                return JSON.parse((-1 === a.iStateDuration ? sessionStorage : localStorage).getItem("DataTables_" + a.sInstance + "_" + location.pathname))
            } catch (b) {
                return {}
            }
        },
        fnStateLoadParams: null,
        fnStateLoaded: null,
        fnStateSaveCallback: function(a, b) {
            try {
                (-1 === a.iStateDuration ? sessionStorage : localStorage).setItem("DataTables_" + a.sInstance + "_" + location.pathname, JSON.stringify(b))
            } catch (c) {}
        },
        fnStateSaveParams: null,
        iStateDuration: 7200,
        iDeferLoading: null,
        iDisplayLength: 10,
        iDisplayStart: 0,
        iTabIndex: 0,
        oClasses: {},
        oLanguage: {
            oAria: {
                sSortAscending: ": activate to sort column ascending",
                sSortDescending: ": activate to sort column descending"
            },
            oPaginate: {
                sFirst: "First",
                sLast: "Last",
                sNext: "Next",
                sPrevious: "Previous"
            },
            sEmptyTable: "No data available in table",
            sInfo: "Showing _START_ to _END_ of _TOTAL_ entries",
            sInfoEmpty: "Showing 0 to 0 of 0 entries",
            sInfoFiltered: "(filtered from _MAX_ total entries)",
            sInfoPostFix: "",
            sDecimal: "",
            sThousands: ",",
            sLengthMenu: "Show _MENU_ entries",
            sLoadingRecords: "Loading...",
            sProcessing: "",
            sSearch: "Search:",
            sSearchPlaceholder: "",
            sUrl: "",
            sZeroRecords: "No matching records found"
        },
        oSearch: l.extend({}, u.models.oSearch),
        sAjaxDataProp: "data",
        sAjaxSource: null,
        sDom: "lfrtip",
        searchDelay: null,
        sPaginationType: "simple_numbers",
        sScrollX: "",
        sScrollXInner: "",
        sScrollY: "",
        sServerMethod: "GET",
        renderer: null,
        rowId: "DT_RowId"
    };
    E(u.defaults);
    u.defaults.column = {
        aDataSort: null,
        iDataSort: -1,
        asSorting: ["asc", "desc"],
        bSearchable: !0,
        bSortable: !0,
        bVisible: !0,
        fnCreatedCell: null,
        mData: null,
        mRender: null,
        sCellType: "td",
        sClass: "",
        sContentPadding: "",
        sDefaultContent: null,
        sName: "",
        sSortDataType: "std",
        sTitle: null,
        sType: null,
        sWidth: null
    };
    E(u.defaults.column);
    u.models.oSettings = {
        oFeatures: {
            bAutoWidth: null,
            bDeferRender: null,
            bFilter: null,
            bInfo: null,
            bLengthChange: null,
            bPaginate: null,
            bProcessing: null,
            bServerSide: null,
            bSort: null,
            bSortMulti: null,
            bSortClasses: null,
            bStateSave: null
        },
        oScroll: {
            bCollapse: null,
            iBarWidth: 0,
            sX: null,
            sXInner: null,
            sY: null
        },
        oLanguage: {
            fnInfoCallback: null
        },
        oBrowser: {
            bScrollOversize: !1,
            bScrollbarLeft: !1,
            bBounding: !1,
            barWidth: 0
        },
        ajax: null,
        aanFeatures: [],
        aoData: [],
        aiDisplay: [],
        aiDisplayMaster: [],
        aIds: {},
        aoColumns: [],
        aoHeader: [],
        aoFooter: [],
        oPreviousSearch: {},
        aoPreSearchCols: [],
        aaSorting: null,
        aaSortingFixed: [],
        asStripeClasses: null,
        asDestroyStripes: [],
        sDestroyWidth: 0,
        aoRowCallback: [],
        aoHeaderCallback: [],
        aoFooterCallback: [],
        aoDrawCallback: [],
        aoRowCreatedCallback: [],
        aoPreDrawCallback: [],
        aoInitComplete: [],
        aoStateSaveParams: [],
        aoStateLoadParams: [],
        aoStateLoaded: [],
        sTableId: "",
        nTable: null,
        nTHead: null,
        nTFoot: null,
        nTBody: null,
        nTableWrapper: null,
        bDeferLoading: !1,
        bInitialised: !1,
        aoOpenRows: [],
        sDom: null,
        searchDelay: null,
        sPaginationType: "two_button",
        iStateDuration: 0,
        aoStateSave: [],
        aoStateLoad: [],
        oSavedState: null,
        oLoadedState: null,
        sAjaxSource: null,
        sAjaxDataProp: null,
        jqXHR: null,
        json: q,
        oAjaxData: q,
        fnServerData: null,
        aoServerParams: [],
        sServerMethod: null,
        fnFormatNumber: null,
        aLengthMenu: null,
        iDraw: 0,
        bDrawing: !1,
        iDrawError: -1,
        _iDisplayLength: 10,
        _iDisplayStart: 0,
        _iRecordsTotal: 0,
        _iRecordsDisplay: 0,
        oClasses: {},
        bFiltered: !1,
        bSorted: !1,
        bSortCellsTop: null,
        oInit: null,
        aoDestroyCallback: [],
        fnRecordsTotal: function() {
            return "ssp" == Q(this) ? 1 * this._iRecordsTotal : this.aiDisplayMaster.length
        },
        fnRecordsDisplay: function() {
            return "ssp" == Q(this) ? 1 * this._iRecordsDisplay : this.aiDisplay.length
        },
        fnDisplayEnd: function() {
            var a = this._iDisplayLength
              , b = this._iDisplayStart
              , c = b + a
              , d = this.aiDisplay.length
              , e = this.oFeatures
              , h = e.bPaginate;
            return e.bServerSide ? !1 === h || -1 === a ? b + d : Math.min(b + a, this._iRecordsDisplay) : !h || c > d || -1 === a ? d : c
        },
        oInstance: null,
        sInstance: null,
        iTabIndex: 0,
        nScrollHead: null,
        nScrollFoot: null,
        aLastSort: [],
        oPlugins: {},
        rowIdFn: null,
        rowId: null
    };
    u.ext = M = {
        buttons: {},
        classes: {},
        builder: "-source-",
        errMode: "alert",
        feature: [],
        search: [],
        selector: {
            cell: [],
            column: [],
            row: []
        },
        internal: {},
        legacy: {
            ajax: null
        },
        pager: {},
        renderer: {
            pageButton: {},
            header: {}
        },
        order: {},
        type: {
            detect: [],
            search: {},
            order: {}
        },
        _unique: 0,
        fnVersionCheck: u.fnVersionCheck,
        iApiIndex: 0,
        oJUIClasses: {},
        sVersion: u.version
    };
    l.extend(M, {
        afnFiltering: M.search,
        aTypes: M.type.detect,
        ofnSearch: M.type.search,
        oSort: M.type.order,
        afnSortData: M.order,
        aoFeatures: M.feature,
        oApi: M.internal,
        oStdClasses: M.classes,
        oPagination: M.pager
    });
    l.extend(u.ext.classes, {
        sTable: "dataTable",
        sNoFooter: "no-footer",
        sPageButton: "paginate_button",
        sPageButtonActive: "current",
        sPageButtonDisabled: "disabled",
        sStripeOdd: "odd",
        sStripeEven: "even",
        sRowEmpty: "dataTables_empty",
        sWrapper: "dataTables_wrapper",
        sFilter: "dataTables_filter",
        sInfo: "dataTables_info",
        sPaging: "dataTables_paginate paging_",
        sLength: "dataTables_length",
        sProcessing: "dataTables_processing",
        sSortAsc: "sorting_asc",
        sSortDesc: "sorting_desc",
        sSortable: "sorting",
        sSortableAsc: "sorting_desc_disabled",
        sSortableDesc: "sorting_asc_disabled",
        sSortableNone: "sorting_disabled",
        sSortColumn: "sorting_",
        sFilterInput: "",
        sLengthSelect: "",
        sScrollWrapper: "dataTables_scroll",
        sScrollHead: "dataTables_scrollHead",
        sScrollHeadInner: "dataTables_scrollHeadInner",
        sScrollBody: "dataTables_scrollBody",
        sScrollFoot: "dataTables_scrollFoot",
        sScrollFootInner: "dataTables_scrollFootInner",
        sHeaderTH: "",
        sFooterTH: "",
        sSortJUIAsc: "",
        sSortJUIDesc: "",
        sSortJUI: "",
        sSortJUIAscAllowed: "",
        sSortJUIDescAllowed: "",
        sSortJUIWrapper: "",
        sSortIcon: "",
        sJUIHeader: "",
        sJUIFooter: ""
    });
    var ic = u.ext.pager;
    l.extend(ic, {
        simple: function(a, b) {
            return ["previous", "next"]
        },
        full: function(a, b) {
            return ["first", "previous", "next", "last"]
        },
        numbers: function(a, b) {
            return [Ea(a, b)]
        },
        simple_numbers: function(a, b) {
            return ["previous", Ea(a, b), "next"]
        },
        full_numbers: function(a, b) {
            return ["first", "previous", Ea(a, b), "next", "last"]
        },
        first_last_numbers: function(a, b) {
            return ["first", Ea(a, b), "last"]
        },
        _numbers: Ea,
        numbers_length: 7
    });
    l.extend(!0, u.ext.renderer, {
        pageButton: {
            _: function(a, b, c, d, e, h) {
                var f = a.oClasses, g = a.oLanguage.oPaginate, k = a.oLanguage.oAria.paginate || {}, m, n, p = 0, t = function(x, w) {
                    var r, C = f.sPageButtonDisabled, G = function(I) {
                        Ta(a, I.data.action, !0)
                    };
                    var ba = 0;
                    for (r = w.length; ba < r; ba++) {
                        var L = w[ba];
                        if (Array.isArray(L)) {
                            var O = l("<" + (L.DT_el || "div") + "/>").appendTo(x);
                            t(O, L)
                        } else {
                            m = null;
                            n = L;
                            O = a.iTabIndex;
                            switch (L) {
                            case "ellipsis":
                                x.append('<span class="ellipsis">&#x2026;</span>');
                                break;
                            case "first":
                                m = g.sFirst;
                                0 === e && (O = -1,
                                n += " " + C);
                                break;
                            case "previous":
                                m = g.sPrevious;
                                0 === e && (O = -1,
                                n += " " + C);
                                break;
                            case "next":
                                m = g.sNext;
                                if (0 === h || e === h - 1)
                                    O = -1,
                                    n += " " + C;
                                break;
                            case "last":
                                m = g.sLast;
                                if (0 === h || e === h - 1)
                                    O = -1,
                                    n += " " + C;
                                break;
                            default:
                                m = a.fnFormatNumber(L + 1),
                                n = e === L ? f.sPageButtonActive : ""
                            }
                            null !== m && (O = l("<a>", {
                                "class": f.sPageButton + " " + n,
                                "aria-controls": a.sTableId,
                                "aria-label": k[L],
                                "data-dt-idx": p,
                                tabindex: O,
                                id: 0 === c && "string" === typeof L ? a.sTableId + "_" + L : null
                            }).html(m).appendTo(x),
                            sb(O, {
                                action: L
                            }, G),
                            p++)
                        }
                    }
                };
                try {
                    var v = l(b).find(A.activeElement).data("dt-idx")
                } catch (x) {}
                t(l(b).empty(), d);
                v !== q && l(b).find("[data-dt-idx=" + v + "]").trigger("focus")
            }
        }
    });
    l.extend(u.ext.type.detect, [function(a, b) {
        b = b.oLanguage.sDecimal;
        return yb(a, b) ? "num" + b : null
    }
    , function(a, b) {
        if (a && !(a instanceof Date) && !Dc.test(a))
            return null;
        b = Date.parse(a);
        return null !== b && !isNaN(b) || aa(a) ? "date" : null
    }
    , function(a, b) {
        b = b.oLanguage.sDecimal;
        return yb(a, b, !0) ? "num-fmt" + b : null
    }
    , function(a, b) {
        b = b.oLanguage.sDecimal;
        return pc(a, b) ? "html-num" + b : null
    }
    , function(a, b) {
        b = b.oLanguage.sDecimal;
        return pc(a, b, !0) ? "html-num-fmt" + b : null
    }
    , function(a, b) {
        return aa(a) || "string" === typeof a && -1 !== a.indexOf("<") ? "html" : null
    }
    ]);
    l.extend(u.ext.type.search, {
        html: function(a) {
            return aa(a) ? a : "string" === typeof a ? a.replace(mc, " ").replace(Ya, "") : ""
        },
        string: function(a) {
            return aa(a) ? a : "string" === typeof a ? a.replace(mc, " ") : a
        }
    });
    var Xa = function(a, b, c, d) {
        if (0 !== a && (!a || "-" === a))
            return -Infinity;
        b && (a = oc(a, b));
        a.replace && (c && (a = a.replace(c, "")),
        d && (a = a.replace(d, "")));
        return 1 * a
    };
    l.extend(M.type.order, {
        "date-pre": function(a) {
            a = Date.parse(a);
            return isNaN(a) ? -Infinity : a
        },
        "html-pre": function(a) {
            return aa(a) ? "" : a.replace ? a.replace(/<.*?>/g, "").toLowerCase() : a + ""
        },
        "string-pre": function(a) {
            return aa(a) ? "" : "string" === typeof a ? a.toLowerCase() : a.toString ? a.toString() : ""
        },
        "string-asc": function(a, b) {
            return a < b ? -1 : a > b ? 1 : 0
        },
        "string-desc": function(a, b) {
            return a < b ? 1 : a > b ? -1 : 0
        }
    });
    bb("");
    l.extend(!0, u.ext.renderer, {
        header: {
            _: function(a, b, c, d) {
                l(a.nTable).on("order.dt.DT", function(e, h, f, g) {
                    a === h && (e = c.idx,
                    b.removeClass(d.sSortAsc + " " + d.sSortDesc).addClass("asc" == g[e] ? d.sSortAsc : "desc" == g[e] ? d.sSortDesc : c.sSortingClass))
                })
            },
            jqueryui: function(a, b, c, d) {
                l("<div/>").addClass(d.sSortJUIWrapper).append(b.contents()).append(l("<span/>").addClass(d.sSortIcon + " " + c.sSortingClassJUI)).appendTo(b);
                l(a.nTable).on("order.dt.DT", function(e, h, f, g) {
                    a === h && (e = c.idx,
                    b.removeClass(d.sSortAsc + " " + d.sSortDesc).addClass("asc" == g[e] ? d.sSortAsc : "desc" == g[e] ? d.sSortDesc : c.sSortingClass),
                    b.find("span." + d.sSortIcon).removeClass(d.sSortJUIAsc + " " + d.sSortJUIDesc + " " + d.sSortJUI + " " + d.sSortJUIAscAllowed + " " + d.sSortJUIDescAllowed).addClass("asc" == g[e] ? d.sSortJUIAsc : "desc" == g[e] ? d.sSortJUIDesc : c.sSortingClassJUI))
                })
            }
        }
    });
    var $a = function(a) {
        Array.isArray(a) && (a = a.join(","));
        return "string" === typeof a ? a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") : a
    }
      , kc = !1
      , zc = ","
      , Ac = ".";
    if (Intl)
        try {
            for (var Ha = (new Intl.NumberFormat).formatToParts(100000.1), ra = 0; ra < Ha.length; ra++)
                "group" === Ha[ra].type ? zc = Ha[ra].value : "decimal" === Ha[ra].type && (Ac = Ha[ra].value)
        } catch (a) {}
    u.datetime = function(a, b) {
        var c = "datetime-detect-" + a;
        b || (b = "en");
        u.ext.type.order[c] || (u.ext.type.detect.unshift(function(d) {
            var e = Za(d, a, b);
            return "" === d || e ? c : !1
        }),
        u.ext.type.order[c + "-pre"] = function(d) {
            return Za(d, a, b) || 0
        }
        )
    }
    ;
    u.render = {
        date: wb("toLocaleDateString"),
        datetime: wb("toLocaleString"),
        time: wb("toLocaleTimeString"),
        number: function(a, b, c, d, e) {
            if (null === a || a === q)
                a = zc;
            if (null === b || b === q)
                b = Ac;
            return {
                display: function(h) {
                    if ("number" !== typeof h && "string" !== typeof h || "" === h || null === h)
                        return h;
                    var f = 0 > h ? "-" : ""
                      , g = parseFloat(h);
                    if (isNaN(g))
                        return $a(h);
                    g = g.toFixed(c);
                    h = Math.abs(g);
                    g = parseInt(h, 10);
                    h = c ? b + (h - g).toFixed(c).substring(2) : "";
                    0 === g && 0 === parseFloat(h) && (f = "");
                    return f + (d || "") + g.toString().replace(/\B(?=(\d{3})+(?!\d))/g, a) + h + (e || "")
                }
            }
        },
        text: function() {
            return {
                display: $a,
                filter: $a
            }
        }
    };
    l.extend(u.ext.internal, {
        _fnExternApiFunc: lc,
        _fnBuildAjax: Qa,
        _fnAjaxUpdate: Kb,
        _fnAjaxParameters: Tb,
        _fnAjaxUpdateDraw: Ub,
        _fnAjaxDataSrc: za,
        _fnAddColumn: cb,
        _fnColumnOptions: Ia,
        _fnAdjustColumnSizing: sa,
        _fnVisibleToColumnIndex: ta,
        _fnColumnIndexToVisible: ua,
        _fnVisbleColumns: na,
        _fnGetColumns: Ka,
        _fnColumnTypes: eb,
        _fnApplyColumnDefs: Hb,
        _fnHungarianMap: E,
        _fnCamelToHungarian: P,
        _fnLanguageCompat: la,
        _fnBrowserDetect: Fb,
        _fnAddData: ia,
        _fnAddTr: La,
        _fnNodeToDataIndex: function(a, b) {
            return b._DT_RowIndex !== q ? b._DT_RowIndex : null
        },
        _fnNodeToColumnIndex: function(a, b, c) {
            return l.inArray(c, a.aoData[b].anCells)
        },
        _fnGetCellData: T,
        _fnSetCellData: Ib,
        _fnSplitObjNotation: hb,
        _fnGetObjectDataFn: ma,
        _fnSetObjectDataFn: ha,
        _fnGetDataMaster: ib,
        _fnClearTable: Ma,
        _fnDeleteIndex: Na,
        _fnInvalidate: va,
        _fnGetRowElements: gb,
        _fnCreateTr: fb,
        _fnBuildHead: Jb,
        _fnDrawHead: xa,
        _fnDraw: ja,
        _fnReDraw: ka,
        _fnAddOptionsHtml: Mb,
        _fnDetectHeader: wa,
        _fnGetUniqueThs: Pa,
        _fnFeatureHtmlFilter: Ob,
        _fnFilterComplete: ya,
        _fnFilterCustom: Xb,
        _fnFilterColumn: Wb,
        _fnFilter: Vb,
        _fnFilterCreateSearch: nb,
        _fnEscapeRegex: ob,
        _fnFilterData: Yb,
        _fnFeatureHtmlInfo: Rb,
        _fnUpdateInfo: ac,
        _fnInfoMacros: bc,
        _fnInitialise: Aa,
        _fnInitComplete: Ra,
        _fnLengthChange: pb,
        _fnFeatureHtmlLength: Nb,
        _fnFeatureHtmlPaginate: Sb,
        _fnPageChange: Ta,
        _fnFeatureHtmlProcessing: Pb,
        _fnProcessingDisplay: V,
        _fnFeatureHtmlTable: Qb,
        _fnScrollDraw: Ja,
        _fnApplyToChildren: da,
        _fnCalculateColumnWidths: db,
        _fnThrottle: mb,
        _fnConvertToWidth: cc,
        _fnGetWidestNode: dc,
        _fnGetMaxLenString: ec,
        _fnStringToCss: K,
        _fnSortFlatten: oa,
        _fnSort: Lb,
        _fnSortAria: gc,
        _fnSortListener: rb,
        _fnSortAttachListener: kb,
        _fnSortingClasses: Va,
        _fnSortData: fc,
        _fnSaveState: Da,
        _fnLoadState: hc,
        _fnImplementState: tb,
        _fnSettingsFromNode: Wa,
        _fnLog: ea,
        _fnMap: Y,
        _fnBindAction: sb,
        _fnCallbackReg: R,
        _fnCallbackFire: F,
        _fnLengthOverflow: qb,
        _fnRenderer: lb,
        _fnDataSource: Q,
        _fnRowAttributes: jb,
        _fnExtend: ub,
        _fnCalculateEnd: function() {}
    });
    l.fn.dataTable = u;
    u.$ = l;
    l.fn.dataTableSettings = u.settings;
    l.fn.dataTableExt = u.ext;
    l.fn.DataTable = function(a) {
        return l(this).dataTable(a).api()
    }
    ;
    l.each(u, function(a, b) {
        l.fn.DataTable[a] = b
    });
    return u
});
;// Global FLX object attached to the window.
(function() {
    var FLX = {
        code: "JDL",

        /**
         * application currency code.
         */
        currencyCode: "",

        /**
         * global constant variables. mainly serving constant value from server.
         */
        $constants: {},

        /**
         * global resources variables. mainly serving localization resources value from server.
         */
        $resources: {}
    };

    // FLX module or individual plugin initialize
    var flx = function() {
        FLX.currencyCode = $("html").data("currency");

        FLX.Ajax._init();
        FLX.Plugins._init();
        // push page load event when GTM is available
        if (FLX.Gtm.IsAvailable()) {
            FLX.Gtm.pushPageLoadEvent();
        }
        return this;
    };

    window.FLX = FLX;
    $.fn.flx = flx;
}
)();

// FLX.Helper - Useful utility classes
(function() {
    var helper = {
        /**
         * Function to convert value into currency format.
         */
        formatCurrency: function(value) {
            value += "";
            var values = value.split(".")
              , digit = values[0]
              , decimal = values.length > 1 ? "." + values[1] : ""
              , currencyRegex = /(\d+)(\d{3})/;
            while (currencyRegex.test(digit)) {
                digit = digit.replace(currencyRegex, "$1" + "," + "$2");
            }
            return digit + decimal;
        },
        formatNumber: function(value, decimal_places) {
            if (value === undefined || value.length <= 0)
                return;

            if (decimal_places === undefined)
                decimal_places = 0;

            if (value <= 0)
                return helper.toFixedTrunc(0, decimal_places);

            value = helper.toFixedTrunc(value, decimal_places);

            // follow currency format add comma separator for every 3 digits
            return helper.formatCurrency(value);
        },
        toFixedTrunc: function(value, decimal_points) {
            var v = value.toString().split('.');
            if (decimal_points <= 0)
                return v[0];
            var f = v[1] || '';
            if (f.length > decimal_points)
                return (v[0] + '.' + f.substr(0, decimal_points));
            while (f.length < decimal_points)
                f += '0';
            return (v[0] + '.' + f);
        },
        toOrderedListHTML: function(array_of_string) {
            return helper.toListHTML(array_of_string, "ol");
        },
        toUnorderedListHTML: function(array_of_string) {
            return helper.toListHTML(array_of_string, "ul");
        },
        toListHTML: function(array_of_string, list_type) {
            if (!Array.isArray(array_of_string) && !array_of_string.length)
                return "";
            return "<" + list_type + "><li>" + array_of_string.join("</li><li>").trim("<li>") + "</" + list_type + ">";
        },
        toLobbyServiceUrl: function(path) {
            var paths = window.location.pathname.split("/");
            if (paths.length > 2) {
                if (paths[1] === "lobby") {
                    path = "/lobby" + path;
                }
            }
            return path;
        },
        decodeHTMLCharacter: function(value) {
            var text = document.createElement("textarea");
            text.innerHTML = value;
            return text.value;
        }
    };
    FLX.Helper = helper;
}
)();

// FLX.Browser - Browser device / type detection
(function(patterns) {
    var mobileDeviceType = {
        Android: "android",
        IOS: "ios",
        WindowsPhone: "windowsphone",
        Etc: "etc"
    };

    var browser = {
        mobileDeviceType: mobileDeviceType,
        isMobileAccess: function() {
            return browser.getMobileDeviceType() !== "";
        },
        getMobileDeviceType: function() {
            var userAgent = navigator.userAgent;
            if (!userAgent)
                return "";

            userAgent = userAgent.toLowerCase();

            if (!new RegExp(patterns.MOBILE_DEVICE).test(userAgent))
                return "";
            if (new RegExp(patterns.MOBILE_ANDROID).test(userAgent))
                return mobileDeviceType.Android;
            else if (new RegExp(patterns.MOBILE_IOS).test(userAgent))
                return mobileDeviceType.IOS;
            else if (new RegExp(patterns.MOBILE_WINDOWSPHONE).test(userAgent))
                return mobileDeviceType.WindowsPhone;
            else
                return mobileDeviceType.Etc;
        }
    };
    FLX.Browser = browser;
}
)(window.browserPatterns || {});

// FLX.Cookie - Document cookie manipulation
(function() {
    var cookie = {
        create: function(name, value, expires, domainName) {
            var domain;
            if (domainName) {
                domain = "; domain=" + domainName;
            } else {
                domain = "";
            }

            document.cookie = name + "=" + value + expires + "; path=/" + domain;
        },
        delete: function(cookie_name) {
            document.cookie = cookie_name + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;";
        },
        get: function(cookie_name) {
            var name = cookie_name + "="
              , ca = document.cookie.split(";");
            for (var i = 0; i < ca.length; i++) {
                var c = $.trim(ca[i]);
                if (c.indexOf(name) === 0)
                    return c.substring(name.length, c.length);
            }
            return "";
        },
        createBySpecificTime: function(name, value, expiredTime, domainName) {
            var expires;
            if (expiredTime) {
                expires = "; expires=" + expiredTime.toGMTString();
            } else {
                expires = "";
            }

            FLX.Cookie.create(name, value, expires, domainName);
        },
        createByExpiryDay: function(name, value, days, domainName) {
            var expires;
            if (days) {
                var date = new Date();
                date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                expires = "; expires=" + date.toGMTString();
            } else {
                expires = "";
            }

            FLX.Cookie.create(name, value, expires, domainName);
        },
    };
    FLX.Cookie = cookie;
}
)();

// FLX.Gtm - Google Tag Manager
(function() {
    var gtm = {
        eventCookie: 'gtm.event.pageload',
        IsAvailable: function() {
            return !!window.dataLayer;
        },
        setPageLoadEvent: function(eventName, eventObject) {
            var tempCookies = FLX.Cookie.get(this.eventCookie);

            var cookieValues = {
                event: eventName
            };
            if (eventObject != undefined && eventObject != null) {
                cookieValues = Object.assign(cookieValues, eventObject);
            }

            if (tempCookies) {
                tempCookies = tempCookies + "&" + JSON.stringify(cookieValues);
            } else {
                tempCookies = JSON.stringify(cookieValues);
            }
            FLX.Cookie.createByExpiryDay(this.eventCookie, tempCookies, 1);
        },
        pushPageLoadEvent: function() {
            var cookie = FLX.Cookie.get(this.eventCookie);
            ca = cookie.split("&");
            for (var i = 0; i < ca.length; i++) {
                if (ca[i] != undefined && ca[i] != null && ca[i].length) {
                    var eventJson = $.parseJSON(ca[i]);
                    this.pushEvent(eventJson);
                }
            }
            FLX.Cookie.delete(this.eventCookie);
        },
        pushEvent: function(eventJson) {
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push(eventJson);
        }
    }
    FLX.Gtm = gtm;
}
)();

// FLX.Page - Page functions
(function() {
    var page = {
        Url: {
            replace: function(url) {
                window.history.replaceState(null, null, url);
            },
            push: function(url) {
                window.history.pushState(null, null, url);
            }
        },
        reload: function(forced_reload) {
            FLX.Page.loading();
            window.location.reload(forced_reload);
        },
        redirect: function(url) {
            FLX.Page.loading();
            window.location = url;
        },
        loading: function() {
            return FLX.Modal.loading("open");
        },
        loadingDismiss: function() {
            return FLX.Modal.loading("close");
        },
        popupWindow: function(url, popup_title, popup_width, popup_height, noopener) {
            // define popup size - fullscreen if popupWidth is undefined
            var windowName = popup_title ? popup_title : FLX.code
              , popUpHeight = popup_height ? popup_height : (screen.availHeight - 70)
              , popupSize = popup_width ? "height=" + popUpHeight + ", width=" + popup_width : "fullscreen=yes"
              , popupFeature = popupSize + ", resizable=yes, scrollbars=yes, toolbar=no, menubar=no, location=no, directories=no, status=yes" + (noopener ? ', noopener' : '')
              , popupWindow = window.open(url, windowName, popupFeature);
            if (popupWindow)
                popupWindow.focus();
            return popupWindow;
        },
        newTab: function(url) {
            return window.open(url, "_blank");
        }
    };
    FLX.Page = page;
}
)();

// FLX.DeviceMode - change application mode functions
(function() {
    var deviceMode = {
        cookieName: "deviceMode",
        change: function(mode) {
            FLX.Page.redirect("/?" + this.cookieName + "=" + mode);
        }
    };
    FLX.DeviceMode = deviceMode;
}
)();
;// FLX.Ajax - AJAX standardized success / error request handler
(function() {

    var errorCodes = {
        tooManyRequest: "99991",
        multipleLogin: "99997",
        sessionTimeout: "99998",
        unknownError: "99999"
    };

    var ajax = {
        _init: function() {
            $(document).ajaxSuccess(ajax._ajaxSuccess).ajaxError(ajax._ajaxError);
        },
        /**
         * Function to validate response object structure for JS service call.
         * @returns the original response or 'rejected' promise if the response is invalid. 
         */
        validateServiceResponse: function(response) {
            // undefined or invalid response
            if (typeof response === "undefined" || response === null || typeof response.success === "undefined") {
                FLX.Error.internalServerError();
                return $.Deferred().reject().promise();
            } else if (response.success === true)
                return response;
            else {
                if (typeof response.errorCode !== "undefined" && response.errorCode !== null) {
                    switch (response.errorCode) {
                    case errorCodes.multipleLogin:
                        FLX.Error.multipleLogin();
                        break;
                    case errorCodes.sessionTimeout:
                        FLX.Error.sessionTimeout();
                        break;
                    case errorCodes.tooManyRequest:
                        FLX.Error.tooManyRequest();
                        break;
                    default:
                        break;
                    }
                }
                return $.Deferred().reject(response).promise();
            }
        },
        _ajaxSuccess: function(e, xhr, options, data) {// NOOP
        },
        _ajaxError: function(e, xhr, settings, error) {
            if (xhr.status === 0)
                return false;
            return FLX.Error.internalServerError();
        }
    };
    FLX.Ajax = ajax;

}
)();
;// FLX.Error - Error handling
(function($resources) {

    var errorPagesUrl = {
        multipleLogin: "/error/multiplelogin",
        sessionTimeout: "/error/sessiontimeout"
    };

    var error = {
        gameLock: function() {
            return FLX.Modal.error($resources.dbRes("Msg_GameLock"));
        },
        accessDenied: function() {
            return FLX.Modal._message($resources.dbRes("Msg_Login"), $resources.dbRes("ModalTitle_Warning"), [{
                label: $resources.dbRes("Button_Login"),
                action: function() {
                    $("#modal-login").foundation("open");
                }
            }, {
                label: $resources.dbRes("Button_GotIt")
            }]);
        },
        multipleLogin: function() {
            return FLX.Modal.warning($resources.dbRes("Error_MultipleLogin"), function() {
                FLX.Page.loading();
                FLX.Page.redirect("/");
            });
        },
        sessionTimeout: function() {
            return FLX.Modal.warning($resources.dbRes("Error_SessionTimeout"), function() {
                FLX.Page.loading();
                FLX.Page.redirect("/");
            });
        },
        internalServerError: function() {
            return FLX.Modal._message($resources.dbRes("Error_InternalServer"), $resources.dbRes("ModalTitle_SystemError"), [{
                label: $resources.dbRes("Button_GotIt")
            }, {
                label: $resources.dbRes("Button_ContactCS"),
                action: function() {
                    window.PopUpLiveChat();
                }
            }]);
        },
        tooManyRequest: function() {
            return FLX.Modal._message($resources.dbRes("Error_TooManyRequests"), $resources.dbRes("ModalTitle_Warning"), [{
                label: $resources.dbRes("Button_GotIt")
            }, {
                label: $resources.dbRes("Button_ContactCS"),
                action: function() {
                    window.PopUpLiveChat();
                }
            }]);
        }
    };
    FLX.Error = error;

}
)(window.resourcescommon);
;// FLX.Modal - Page popup reveal / modal functions
(function($resources) {

    var $element = {
        loading: $("#modal-loading"),
        message: $("#modal-message")
    };

    var modal = {
        // 1
        loading: function(action) {
            $element.loading.foundation(action);
        },
        // 2
        info: function(message, callback) {
            return this._message(message, $resources.dbRes("ModalTitle_Info"), callback ? [{
                action: callback
            }] : undefined);
        },
        // 3
        warning: function(message, callback) {
            return this._message(message, $resources.dbRes("ModalTitle_Warning"), callback ? [{
                action: callback
            }] : undefined);
        },
        // 4
        error: function(message, callback) {
            return this._message(message, $resources.dbRes("ModalTitle_Error"), callback ? [{
                action: callback
            }] : undefined);
        },
        // 5
        success: function(message, callback) {
            return this._message(message, $resources.dbRes("ModalTitle_Success"), callback ? [{
                action: callback
            }] : undefined);
        },
        // 6
        message: function(message, title, callback, button_label, page, isSequence) {
            return this._message(message, title, callback ? [{
                label: button_label,
                action: callback
            }] : undefined, page, isSequence ? isSequence : false);
        },
        // 7
        confirm: function(message, title, confirm_callback, confirm_label, cancel_callback, cancel_label, page, isSequence) {
            return this._message(message, title, [{
                label: confirm_label,
                action: confirm_callback
            }, {
                label: cancel_label,
                action: cancel_callback
            }], page, isSequence ? isSequence : false);
        },
        _message: function(message, title, buttons, page, isSequence) {

            // empty message
            if (!message) {
                console.warn("FLX.Modal: message is empty.");
                return false;
            }

            // multiple message (array)
            if (Array.isArray(message)) {

                message = message.length > 1 ? FLX.Helper.toUnorderedListHTML(message) : message[0];

                if (!message) {
                    console.warn("FLX.Modal: message in array is empty.");
                    return false;
                }
            }

            var context = $element.message.clone(false)
              , modalHeader = context.find("header")
              , modalContent = context.find("article")
              , modalActions = context.find("nav.modal-actions");

            // header & content binding
            modalHeader.text(title ? title : modalHeader.data("alt"));
            modalContent.html(message);

            // buttons action binding
            if (buttons && buttons.length) {

                context.find(".modal-wrapper-close").remove();

                $(buttons).each(function(i, e) {
                    var button = $("<button>").addClass("button").text(e.label ? e.label : modalActions.data("button-alt"));
                    if (e.action && typeof e.action === "function" && e.action != undefined && e.action != null) {
                        button.addClass("button-style-1").click(function() {
                            e.action();
                            if (!e.keepModal) {
                                $(context).foundation("close");
                            }
                        });
                    } else {
                        button.addClass("button-style-2").click(function() {
                            $(context).foundation("close");
                            if (isSequence)
                                FLX.Modals.show(page);
                        });
                    }
                    modalActions.append(button);
                });
            }

            var reveal = new Foundation.Reveal(context);
            reveal.$element.on("closed.zf.reveal", function() {
                setTimeout(function() {
                    var $modal = reveal.$element;
                    reveal.destroy();
                    $modal.remove();
                }, 500);
            });
            reveal.open();

            return reveal;
        }
    };
    FLX.Modal = modal;

    // sequence pop up modals   
    var modals = [{
        page: "Important",
        list: []
    }];
    FLX.Modals = modals;

    var getModalIndex = function(name) {
        var modalIndex;
        $(FLX.Modals).each(function(i, el) {
            if (name === el.page) {
                modalIndex = i;
                return false;
            }
        });
        return modalIndex;
    };

    // push pop up item to list to store it
    /**
     * 
     * sample item's properties which can be use
     var message = {
                type: 6, // (required)
                selector: selector // (optional, but required if using type:8)
                title:'', // (required if using type 1-7, pop up title)
                message: '', // (required if using type 1-7, pop up message)
                buttons: // (required based on type 1-7 if the pop up need show custom buttons with/without actions)
                        [
                            {
                                label: '<%= Common.Button_Update %>',
                                action: function () {
                                    window.location.href = '/member/account#update-profile';
                                }
                            }
                        ],
                 object: object // (required if using type 9, pop up announcement list in jsonstring)
            };
     * 
     */
    var addItem = function(name, item) {
        var modalIndex = getModalIndex(name);

        if (modalIndex === undefined) {
            FLX.Modals.push({
                page: name,
                list: []
            });

            modalIndex = getModalIndex(name);
        }

        var inserted = false;
        for (var i = 0; i < FLX.Modals[modalIndex].list.length; i++) {
            // check if which pop up item must put at last position / last one to show
            // and new added item is no need put at last position / last one to show
            if (FLX.Modals[modalIndex].list[i].lastPosition && !item.lastPosition) {
                FLX.Modals[modalIndex].list.splice(i, 0, item);
                inserted = true;
                break;
            }
        }
        // new added will added at last position / last one to show
        if (!inserted)
            FLX.Modals[modalIndex].list.push(item);
    };
    FLX.Modals.addItem = addItem;

    // function to show sequence pop up modal
    // contentIndex:
    // - optional (default will be 0)
    // - use to define show which pop up items by position in array
    var show = function(name, contentIndex) {
        if (contentIndex === undefined)
            contentIndex = 0;

        var modalIndex = getModalIndex(name);

        if (modalIndex === undefined)
            return;

        // get pop up item in array by position (contentIndex)
        var item = FLX.Modals[modalIndex].list[contentIndex];

        // if pop up item exist in array
        if (item !== undefined) {
            // item.type: related to FLX.Modal (1-7), 8 for direct trigger pop up modal using foundation, 9 for trigger pop up announcement
            switch (item.type) {
            case 6:
                if (item.buttons.length > 0) {
                    FLX.Modal.message(item.message, item.title, item.buttons[0].action, item.buttons[0].label, name, true);
                } else
                    FLX.Modal.message(item.message, item.title, undefined, undefined, name, true);
                // after show pop up, then delete current pop up item from list
                FLX.Modals[modalIndex].list.splice(contentIndex, 1);
                break;
            case 7:
                var confirmLabel, confirmAction, cancelLabel, cancelAction;
                if (item.buttons.length > 0) {
                    confirmLabel = item.buttons[0].label;
                    confirmAction = item.buttons[0].action;
                    cancelLabel = item.buttons[1].label;
                    cancelAction = item.buttons[1].action;
                }
                FLX.Modal.confirm(item.message, item.title, confirmAction, confirmLabel, cancelAction, cancelLabel, name, true);
                // after show pop up, then delete current pop up item from list
                FLX.Modals[modalIndex].list.splice(contentIndex, 1);
                break;
            case 8:
                // direct trigger pop up modal using foundation
                // set close action in modal will trigger next pop up in list                    
                $(item.selector).on('closed.zf.reveal', function() {
                    if (FLX.Modals[modalIndex].list.length > 0)
                        FLX.Modals.show(name);
                    else {
                        $(FLX.Modals).each(function(i, el) {
                            if (el.list.length) {
                                if (el && el.page)
                                    FLX.Modals.show(el.page);
                            }
                        });
                    }
                });

                $(item.selector).foundation("open");
                // after show pop up, then delete current pop up item from list
                FLX.Modals[modalIndex].list.splice(contentIndex, 1);
                break;
            case 9:
                // pop up announcement
                if (item.object.length > 0) {
                    App.Common.Announcement.show(item.object);
                    // after show pop up, then delete current pop up item from list
                    FLX.Modals[modalIndex].list.splice(contentIndex, 1);
                } else
                    FLX.Modals.show(name);
                break;
            case 10:
                var backHomeLabel, backHomeAction, contactUsLabel, contactUsAction;
                if (item.buttons.length > 0) {
                    backHomeLabel = item.buttons[0].label;
                    backHomeAction = item.buttons[0].action;
                    contactUsLabel = item.buttons[1].label;
                    contactUsAction = item.buttons[1].action;
                }
                FLX.Modal._message(item.message, item.title, [{
                    label: backHomeLabel,
                    action: backHomeAction
                }, {
                    label: contactUsLabel,
                    action: contactUsAction
                }], name, true);
                // after show pop up, then delete current pop up item from list
                FLX.Modals[modalIndex].list.splice(contentIndex, 1);
                break;
            default:
                // after show pop up, then delete current pop up item from list
                FLX.Modals[modalIndex].list.splice(contentIndex, 1);
                break;
            }

        } else
            return;
    };
    FLX.Modals.show = show;

}
)(window.resourcescommon);
;// FLX.Plugins - custom plugins
(function() {

    var plugins = {
        /**
         * Plugin initialize
         */
        _init: function() {
            FLX.Plugins.FormControl._init();
            FLX.Plugins.Activation._init();
            FLX.Plugins.MoneyAutoFormat._init();
            FLX.Plugins.DeviceInfo._init();
            return this;
        }
    };

    FLX.Plugins = plugins;

}
)();

// FLX.Plugins.FormControl - Utilities class for form related input fields
(function($) {

    function formControlToggle(action) {
        if (typeof action !== "string")
            return false;
        action = action.toLowerCase();

        var self = this;

        switch (action) {
        case "enable":
            self.removeAttr("disabled");
            break;
        case "disable":
            self.attr("disabled", "disabled");
            break;
        case "show":
            self.show();
            break;
        case "hide":
            self.hide();
            break;
        case "check":
            if (self.is("input:radio") || self.is("input:checkbox")) {
                self.attr("checked", "checked");
            }
            break;
        case "reset":
            if (self.is("select")) {
                self[0].selectedIndex = 0;
            } else if (self.is("input:radio") || self.is("input:checkbox")) {
                self.checked = false;
            } else {
                self.val("");
            }
            if ($)
                $(self).change();
            break;
        }
        return this;
    }
    ;
    var formControl = {
        _init: function() {
            $.fn.isEmpty = function() {

                var self = this;

                if (self.is("select")) {
                    return self[0].selectedIndex === 0;
                } else if (self.is("input:radio") || self.is("input:checkbox")) {
                    return !self.is(":checked");
                } else {
                    return self.val().trim() === "";
                }
            }
            ;
            $.fn.isDisabled = function() {

                var self = this;

                return self.is(":disabled");
            }
            ;
            $.fn.isChecked = function() {

                var self = this;

                return self.is(":checked");
            }
            ;
            $.fn.formControl = formControlToggle;
        }
    };
    FLX.Plugins.FormControl = formControl;

}
)(jQuery);

// FLX.Plugins.Activation - simple activation helper
(function($) {

    var activation = {
        activeClass: "is-active",
        activate: function() {
            if ($(this).length)
                $(this).addClass(activation.activeClass);
        },
        deactivate: function() {
            if ($(this).length)
                $(this).removeClass(activation.activeClass);
        }
    };

    var toggle = {
        scope: "[data-activation]",
        element: "[data-activation-toggle]",
        init: function() {

            // scope element
            $(toggle.scope).each(function(i, scope) {
                var $elements = $(toggle.element, scope);
                $elements.click(function() {
                    $elements.not(this).deactivate();
                    $(this).toggleClass(activation.activeClass);
                });
            });

            // single element
            $(toggle.element).each(function(i, element) {
                if ($(element).parents(toggle.scope).length)
                    return true;
                $(element).click(function() {
                    $(this).toggleClass(activation.activeClass);
                });

                return true;
            });
        },
        /**
         * Activate all data-activation-toggle element within the given scope
         */
        activateAll: function() {
            $(toggle.element, this).each(function(i, e) {
                $(e).activate();
            });
        },
        /**
         * Deactivate all data-activation-toggle element within the given scope
         */
        deactivateAll: function() {
            $(toggle.element, this).each(function(i, e) {
                $(e).deactivate();
            });
        }
    };

    var init = function() {
        toggle.init();
    };
    activation._init = init;

    $.fn.activate = activation.activate;
    $.fn.deactivate = activation.deactivate;

    $.fn.activateAll = toggle.activateAll;
    $.fn.deactivateAll = toggle.deactivateAll;

    FLX.Plugins.Activation = activation;

}
)(jQuery);

// FLX.Plugins.MoneyAutoFormat - format value to a valid money format
(function($) {

    /**
     * @description data-moneyautoformat="[decimal_points]"
     */
    var attr = "moneyautoformat"
      , moneyAutoFormat = {
        format: function(amount, decimal_points) {

            // parse amount
            amount = parseFloat(amount.replace(/[ ,]/g, ""));
            if (isNaN(amount))
                return "";

            // if decimal_points is undefined, use 0 if it is whole number, otherwise use 2 as default
            if (!decimal_points)
                decimal_points = amount % 1 === 0 ? 0 : 2;
            return moneyAutoFormat.toFixedTrunc(amount, decimal_points);
        },
        toFixedTrunc: function(amount, decimal_points) {
            var v = amount.toString().split('.');
            if (decimal_points <= 0)
                return v[0];
            var f = v[1] || '';
            if (f.length > decimal_points)
                return (v[0] + '.' + f.substr(0, decimal_points));
            while (f.length < decimal_points)
                f += '0';
            return (v[0] + '.' + f);
        },
        _init: function() {
            $("[data-" + attr + "]").each(function(i, element) {
                var decimalPoints = $(element).data(attr);
                $(element).change(function() {
                    $(this).val(moneyAutoFormat.format($(this).val(), decimalPoints)).focusout();
                });
            });
        }
    };

    FLX.Plugins.MoneyAutoFormat = moneyAutoFormat;

}
)(jQuery);

// FLX.Plugins.Compress - to compress img file
var compress = function() {
    var self = this;

    var supportedFileType = ["image/jpeg", "image/gif", "image/bmp", "image/png"];
    var defaults = {
        maxHeight: 1024,
        maxWidth: 1024,
        maxFileSize: 10 * 1024 * 1024,
        smallFileSize: 1 * 1024 * 1024,
    };

    self.$file = null;
    self.$base64String = null;
    self.$validate = $.Deferred();
    self.$message = null;
    self.compressImg = function(fileData, options) {
        options = $.extend({}, defaults, options);
        self.$validate = $.Deferred();

        var name = fileData.name
          , fileType = fileData.type;

        if (!supportedFileType.includes(fileType)) {
            self.$file = fileData;
            return self.$validate.resolve();
        }

        var fileimage = new Image;
        fileimage.src = URL.createObjectURL(fileData);
        fileimage.onload = function() {
            if (this.width < options.maxWidth && this.height < options.maxHeight) {
                if (fileData.size <= options.smallFileSize) {
                    self.$file = fileData;
                    self.$base64String = URL.createObjectURL(fileData);
                    return self.$validate.resolve();
                } else if (fileData.size > options.maxFileSize) {
                    return self.$validate.reject();
                }
            }
            self.$base64String = resizeImg(fileimage, options.maxWidth, options.maxHeight, 0);
            self.$file = dataURLtoFile(self.$base64String, name);
            if (self.$file != null) {
                return self.$validate.resolve();
            } else {
                return self.$validate.reject();
            }
        }
        return self.$validate

    }
    ;

    // resize img to max width and height we set
    function resizeImg(img, maxWidth, maxHeight, degrees) {
        var imgWidth = img.naturalWidth;
        var imgHeight = img.naturalHeight;

        var ratio = 1
          , ratio1 = 1
          , ratio2 = 1;
        ratio1 = maxWidth / imgWidth;
        ratio2 = maxHeight / imgHeight;

        // Use the smallest ratio that the image best fit into the maxWidth x maxHeight box.
        if (ratio1 < ratio2) {
            ratio = ratio1;
        } else {
            ratio = ratio2;
        }
        var canvas = document.createElement("canvas");
        var canvasContext = canvas.getContext("2d");
        var canvasCopy = document.createElement("canvas");
        var copyContext = canvasCopy.getContext("2d");
        var canvasCopy2 = document.createElement("canvas");
        var copyContext2 = canvasCopy2.getContext("2d");
        canvasCopy.width = imgWidth;
        canvasCopy.height = imgHeight;
        copyContext.drawImage(img, 0, 0);

        // init
        canvasCopy2.width = imgWidth;
        canvasCopy2.height = imgHeight;
        copyContext2.drawImage(canvasCopy, 0, 0, canvasCopy.width, canvasCopy.height, 0, 0, canvasCopy2.width, canvasCopy2.height);

        var rounds = 1;
        var roundRatio = ratio * rounds;
        for (var i = 1; i <= rounds; i++) {

            // tmp
            canvasCopy.width = imgWidth * roundRatio / i;
            canvasCopy.height = imgHeight * roundRatio / i;

            copyContext.drawImage(canvasCopy2, 0, 0, canvasCopy2.width, canvasCopy2.height, 0, 0, canvasCopy.width, canvasCopy.height);

            // copy back
            canvasCopy2.width = imgWidth * roundRatio / i;
            canvasCopy2.height = imgHeight * roundRatio / i;
            copyContext2.drawImage(canvasCopy, 0, 0, canvasCopy.width, canvasCopy.height, 0, 0, canvasCopy2.width, canvasCopy2.height);

        }
        // end for

        canvas.width = imgWidth * roundRatio / rounds;
        canvas.height = imgHeight * roundRatio / rounds;
        canvasContext.drawImage(canvasCopy2, 0, 0, canvasCopy2.width, canvasCopy2.height, 0, 0, canvas.width, canvas.height);

        if (degrees == 90 || degrees == 270) {
            canvas.width = canvasCopy2.height;
            canvas.height = canvasCopy2.width;
        } else {
            canvas.width = canvasCopy2.width;
            canvas.height = canvasCopy2.height;
        }

        canvasContext.clearRect(0, 0, canvas.width, canvas.height);
        if (degrees == 90 || degrees == 270) {
            canvasContext.translate(canvasCopy2.height / 2, canvasCopy2.width / 2);
        } else {
            canvasContext.translate(canvasCopy2.width / 2, canvasCopy2.height / 2);
        }
        canvasContext.rotate(degrees * Math.PI / 180);
        canvasContext.drawImage(canvasCopy2, -canvasCopy2.width / 2, -canvasCopy2.height / 2);

        var dataURL = canvas.toDataURL();
        return dataURL;
    }
    ;
    // convert base64 string data to file
    function dataURLtoFile(dataurl, filename) {
        var arr = dataurl.split(',')
          , mime = arr[0].match(/:(.*?);/)[1]
          , bstr = atob(arr[1])
          , n = bstr.length
          , u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new File([u8arr],filename,{
            type: mime
        });
    }
    ;
    self.status = function() {
        return self.$validate.promise();
    }
    ;
    return self;
}
FLX.Plugins.Compress = compress;

// FLX.Plugins.DeviceInfo - get member device
(function($) {

    var DeviceInfo = {
        deviceId: "",
        deviceDetails: "",
        isPrivateBrowser: "",
        _init: function() {
            setTimeout(function() {
                Fingerprint2.get(function(components) {
                    DeviceInfo.deviceDetails = components;
                    var values = components.map(function(component) {
                        return component.value
                    })
                    DeviceInfo.deviceId = Fingerprint2.x64hash128(values.join(''), 31)
                    DeviceInfo.deviceDetails = DeviceInfo.deviceDetails.filter(e => e.key !== "canvas" && e.key !== "webgl" && e.key != "fonts").map(e => {
                        e.value = String(e.value).substring(0, 300);
                        return e;
                    }
                    );
                    DeviceInfo.checkPrivateBrowser();
                })
            }, 1000)
        },
        checkPrivateBrowser: function() {
            isPrivateWindow(function(is_private) {
                DeviceInfo.isPrivateBrowser = is_private;
            })
        }
    }
    FLX.Plugins.DeviceInfo = DeviceInfo;

}
)(jQuery);

// Custom data table prototype
(function($, $resourcecommon) {
    var self, table = function(tableObject) {
        self = tableObject;
    }, tableOption, tfootObject = null;

    function optionFactory(option_selected, option, api) {
        var methodMap = [// Generate language option
        [ () => option_selected === "language", () => {
            var language, emptyTable = $resourcecommon.dbRes("Msg_NoRecord"), // Set default no record message
            paginate = {
                previous: "&lt;",
                // Set pagination previous button to '<' icon
                next: "&gt;"// Set pagination next button to '>' icon
            }

            // Language option
            if (option.hasOwnProperty("language")) {
                language = option.language;
                // Checking paginate some property is needed use default value or not
                language.paginate ? language.paginate = $.extend({}, paginate, language.paginate) : language.paginate = paginate;

                // Checking emptyTable property is needed use default value or not
                language.emptyTable || (language.emptyTable = emptyTable);

            } else {
                // Default option
                language = {
                    emptyTable: emptyTable,
                    paginate
                }
            }

            return language;
        }
        ], // Genarate page length option
        [ () => option_selected === "pageLength", () => {
            var isMobileAccess = FLX.Browser.isMobileAccess();
            return option.pageLength || (isMobileAccess ? 5 : 10);
        }
        ], // Generate ordering option
        [ () => option_selected === "ordering", () => {
            return option.ordering == undefined ? option.ordering = true : option.ordering;
        }
        ], // Initialize table footer
        [ () => option_selected === "initTfoot", () => {
            if (option.customTfoot) {
                tfootObject = option.customTfoot;
                self.append("<tfoot><tr></tr></tfoot>");
            }
        }
        ], // Generate table tfoot
        [ () => option_selected === "customTfoot", () => {
            if (tfootObject) {
                for (var i = 0; i < tfootObject.rows.length; i++) {
                    var tr = document.createElement('tr');
                    $.each(tfootObject.rows[i], function(index, item) {
                        var td = document.createElement('td');
                        switch (item.type) {
                        case 'text':
                        case 'empty':
                            td.innerHTML = item.title || '';
                            break;
                        case 'data':
                            td.innerHTML = tfootObject.dataResults[item.data];
                            break;
                        }
                        tr.appendChild(td);
                    });

                    self.find("tfoot").append(tr);
                }
            }
        }
        ], // Bind event handle to element
        [ () => option_selected === "tableDataEventHandle", () => {
            $.each(option.columns, function(index, value) {
                if (value.hasOwnProperty("controller")) {
                    var controller = value.controller;

                    switch (controller.action) {
                    case "click":
                        var buttonList = $(self).find(`.${controller.controlClass}`);

                        $(buttonList).unbind();
                        // Prevent bind event to same element twice
                        $.each(buttonList, function() {
                            $(this).on('click', () => {
                                var selectedData = api.row($(this).parents('tr')).data();
                                // Get selected row all columns data
                                controller.method(selectedData);
                            }
                            );
                        });
                        break;
                    }
                }
            });
        }
        ], // Adding dom option to data table option
        [ () => option_selected === "dom", () => {
            if (option.customDom) {
                tableOption.dom = option.customDom.markUp;
            }
        }
        ], // Custom Dom option control
        [ () => option_selected === "domOptionControl", () => {
            if (option.customDom) {
                option.customDom.method();
            }
        }
        ]
        ];

        var result = methodMap.find(method => method[0]());
        if (result) {
            return result[1]();
        }
    }

    table.prototype.callables = {
        //Return closure
        initTable: function(option) {

            tableOption = {
                data: option.data,
                columns: option.columns,
                language: optionFactory("language", option),
                searching: option.searching || false,
                lengthChange: option.lengthChange || false,
                autoWidth: option.autoWidth || false,
                info: option.info || false,
                pageLength: optionFactory("pageLength", option),
                ordering: optionFactory("ordering", option),
                initComplete: function() {
                    var api = this.api();
                    var headerRow = api.columns().header().map(item => item.textContent).toArray();

                    // Ordering of columns
                    if (option.ordering) {
                        $.map(option.order, (item) => {
                            // Set default sorting column
                            item[0] = headerRow.findIndex( (value) => {
                                return value == item[0];
                            }
                            );
                            return [item];
                        }
                        );

                        if (option.order) {
                            // Sort by default column which is selected and redraw
                            api.order(option.order).draw();
                        }
                    }

                    // Custom DOM option control
                    optionFactory("domOptionControl", option);
                },
                drawCallback: function(settings) {
                    var api = this.api();
                    var info = api.page.info();

                    /**
                     * Set pagination theme class, default will use dark theme
                     * */
                    var paginationThemeClass = option.paginationTheme || 'dark-theme';

                    // Hide pagination previous and next button, if the table don't have any data
                    if (info.pages <= 1) {
                        $('.dataTables_paginate').hide();
                    } else {
                        // Display dataTables_paginate and set the theme class
                        $('.dataTables_paginate').addClass(paginationThemeClass).show();
                    }

                    // When draw table, bind event handle to element if needed
                    optionFactory("tableDataEventHandle", option, api);
                },
                footerCallback: function(tfoot, data, start, end, display) {
                    self.find('tfoot').empty();
                    if (data.length > 0) {
                        optionFactory("customTfoot", tfootObject);
                    }
                }
            }

            optionFactory("initTfoot", option);
            optionFactory("dom", option);

            self.DataTable(tableOption);
        },
        isDataTableEnabled: function() {
            // Check if a table node is already a DataTable or not
            return $.fn.DataTable.isDataTable(self);
        },
        loadingTable: function(customMessage) {
            if (this.isDataTableEnabled()) {
                var template = self.find('tbody').empty();

                // Empty tfoot when loading
                self.find('tfoot tr').empty();

                // Set loading message
                var loadingMessage = customMessage || $resourcecommon.dbRes("Msg_Loading");

                // Insert loading message and icon
                $(template).append("<tr><td colspan='" + self.DataTable().columns(":visible").nodes().length + "'>" + loadingMessage + "<i class='fa fa-spinner fa-spin fa-fw'></i></td></tr>");
            }
        },
        refreshTable: function(tbodyResults, tfootResults) {
            var table = self.DataTable();

            if (tfootObject) {
                // Update table footer data
                tfootObject.dataResults = tfootResults;
            }

            // Clear the table of all data
            table.clear();
            // Insert new data into table
            table.rows.add(tbodyResults);

            // Redraw the table to display new data
            table.draw();
        }
    }

    $.fn.CustomDataTable = function() {
        return new table(this).callables;
    }
    ;

}
)(jQuery, window.resourcescommon);
;