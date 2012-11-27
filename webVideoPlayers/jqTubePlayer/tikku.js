(function (p, i) {
    function k() {
        if (!c.isReady) {
            try {
                D.documentElement.doScroll("left")
            } catch (a) {
                setTimeout(k, 1);
                return
            }
            c.ready()
        }
    }
    function l(a, b) {
        b.src ? c.ajax({
            url: b.src,
            async: false,
            dataType: "script"
        }) : c.globalEval(b.text || b.textContent || b.innerHTML || "");
        b.parentNode && b.parentNode.removeChild(b)
    }
    function t(a, b, f, h, g, r) {
        var q = a.length;
        if (typeof b === "object") {
            for (var B in b) t(a, B, b[B], h, g, f);
            return a
        }
        if (f !== i) {
            h = !r && h && c.isFunction(f);
            for (B = 0; B < q; B++) g(a[B], b, h ? f.call(a[B], B, g(a[B], b)) : f, r);
            return a
        }
        return q ? g(a[0], b) : i
    }
    function m() {
        return (new Date).getTime()
    }
    function s() {
        return false
    }
    function v() {
        return true
    }
    function L(a, b, f) {
        f[0].type = a;
        return c.event.handle.apply(b, f)
    }
    function da(a) {
        var b, f = [],
            h = [],
            g = arguments,
            r, q, B, w, A, K;
        q = c.data(this, "events");
        if (!(a.liveFired === this || !q || !q.live || a.button && a.type === "click")) {
            a.liveFired = this;
            var Q = q.live.slice(0);
            for (w = 0; w < Q.length; w++) {
                q = Q[w];
                q.origType.replace(J, "") === a.type ? h.push(q.selector) : Q.splice(w--, 1)
            }
            r = c(a.target).closest(h, a.currentTarget);
            A = 0;
            for (K = r.length; A < K; A++) for (w = 0; w < Q.length; w++) {
                q = Q[w];
                if (r[A].selector === q.selector) {
                    B = r[A].elem;
                    h = null;
                    if (q.preType === "mouseenter" || q.preType === "mouseleave") h = c(a.relatedTarget).closest(q.selector)[0];
                    if (!h || h !== B) f.push({
                        elem: B,
                        handleObj: q
                    })
                }
            }
            A = 0;
            for (K = f.length; A < K; A++) {
                r = f[A];
                a.currentTarget = r.elem;
                a.data = r.handleObj.data;
                a.handleObj = r.handleObj;
                if (r.handleObj.origHandler.apply(r.elem, g) === false) {
                    b = false;
                    break
                }
            }
            return b
        }
    }
    function ka(a, b) {
        return "live." + (a && a !== "*" ? a + "." : "") + b.replace(/\./g, "`").replace(/ /g,
            "&")
    }
    function la(a) {
        return !a || !a.parentNode || a.parentNode.nodeType === 11
    }
    function Aa(a, b) {
        var f = 0;
        b.each(function () {
            if (this.nodeName === (a[f] && a[f].nodeName)) {
                var h = c.data(a[f++]),
                    g = c.data(this, h);
                if (h = h && h.events) {
                    delete g.handle;
                    g.events = {};
                    for (var r in h) for (var q in h[r]) c.event.add(this, r, h[r][q], h[r][q].data)
                }
            }
        })
    }
    function ma(a, b, f) {
        var h, g, r;
        b = b && b[0] ? b[0].ownerDocument || b[0] : D;
        if (a.length === 1 && typeof a[0] === "string" && a[0].length < 512 && b === D && !$a.test(a[0]) && (c.support.checkClone || !ab.test(a[0]))) {
            g = true;
            if (r = c.fragments[a[0]]) if (r !== 1) h = r
        }
        if (!h) {
            h = b.createDocumentFragment();
            c.clean(a, b, h, f)
        }
        if (g) c.fragments[a[0]] = r ? h : 1;
        return {
            fragment: h,
            cacheable: g
        }
    }
    function na(a, b) {
        var f = {};
        c.each(bb.concat.apply([], bb.slice(0, b)), function () {
            f[this] = a
        });
        return f
    }
    function H(a) {
        return "scrollTo" in a && a.document ? a : a.nodeType === 9 ? a.defaultView || a.parentWindow : false
    }
    var c = function (a, b) {
        return new c.fn.init(a, b)
    }, Z = p.jQuery,
        ca = p.$,
        D = p.document,
        ea, C = /^[^<]*(<[\w\W]+>)[^>]*$|^#([\w-]+)$/,
        I = /^.[^:#\[\.,]*$/,
        E = /\S/,
        R =
            /^(\s|\u00A0)+|(\s|\u00A0)+$/g,
        aa = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
        ba = navigator.userAgent,
        T = false,
        ia = [],
        sa, ta = Object.prototype.toString,
        ua = Object.prototype.hasOwnProperty,
        Ba = Array.prototype.push,
        va = Array.prototype.slice,
        Ca = Array.prototype.indexOf;
    c.fn = c.prototype = {
        init: function (a, b) {
            var f, h;
            if (!a) return this;
            if (a.nodeType) {
                this.context = this[0] = a;
                this.length = 1;
                return this
            }
            if (a === "body" && !b) {
                this.context = D;
                this[0] = D.body;
                this.selector = "body";
                this.length = 1;
                return this
            }
            if (typeof a === "string") if ((f = C.exec(a)) && (f[1] || !b)) if (f[1]) {
                h = b ? b.ownerDocument || b : D;
                if (a = aa.exec(a)) if (c.isPlainObject(b)) {
                    a = [D.createElement(a[1])];
                    c.fn.attr.call(a, b, true)
                } else a = [h.createElement(a[1])];
                else {
                    a = ma([f[1]], [h]);
                    a = (a.cacheable ? a.fragment.cloneNode(true) : a.fragment).childNodes
                }
                return c.merge(this, a)
            } else {
                if (b = D.getElementById(f[2])) {
                    if (b.id !== f[2]) return ea.find(a);
                    this.length = 1;
                    this[0] = b
                }
                this.context = D;
                this.selector = a;
                return this
            } else if (!b && /^\w+$/.test(a)) {
                this.selector = a;
                this.context = D;
                a = D.getElementsByTagName(a);
                return c.merge(this,
                a)
            } else return !b || b.jquery ? (b || ea).find(a) : c(b).find(a);
            else if (c.isFunction(a)) return ea.ready(a);
            if (a.selector !== i) {
                this.selector = a.selector;
                this.context = a.context
            }
            return c.makeArray(a, this)
        },
        selector: "",
        jquery: "1.4.2",
        length: 0,
        size: function () {
            return this.length
        },
        toArray: function () {
            return va.call(this, 0)
        },
        get: function (a) {
            return a == null ? this.toArray() : a < 0 ? this.slice(a)[0] : this[a]
        },
        pushStack: function (a, b, f) {
            var h = c();
            c.isArray(a) ? Ba.apply(h, a) : c.merge(h, a);
            h.prevObject = this;
            h.context = this.context;
            if (b === "find") h.selector = this.selector + (this.selector ? " " : "") + f;
            else if (b) h.selector = this.selector + "." + b + "(" + f + ")";
            return h
        },
        each: function (a, b) {
            return c.each(this, a, b)
        },
        ready: function (a) {
            c.bindReady();
            if (c.isReady) a.call(D, c);
            else ia && ia.push(a);
            return this
        },
        eq: function (a) {
            return a === -1 ? this.slice(a) : this.slice(a, +a + 1)
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        slice: function () {
            return this.pushStack(va.apply(this, arguments), "slice", va.call(arguments).join(","))
        },
        map: function (a) {
            return this.pushStack(c.map(this,

            function (b, f) {
                return a.call(b, f, b)
            }))
        },
        end: function () {
            return this.prevObject || c(null)
        },
        push: Ba,
        sort: [].sort,
        splice: [].splice
    };
    c.fn.init.prototype = c.fn;
    c.extend = c.fn.extend = function () {
        var a = arguments[0] || {}, b = 1,
            f = arguments.length,
            h = false,
            g, r, q, B;
        if (typeof a === "boolean") {
            h = a;
            a = arguments[1] || {};
            b = 2
        }
        if (typeof a !== "object" && !c.isFunction(a)) a = {};
        if (f === b) {
            a = this;
            --b
        }
        for (; b < f; b++) if ((g = arguments[b]) != null) for (r in g) {
            q = a[r];
            B = g[r];
            if (a !== B) if (h && B && (c.isPlainObject(B) || c.isArray(B))) {
                q = q && (c.isPlainObject(q) || c.isArray(q)) ? q : c.isArray(B) ? [] : {};
                a[r] = c.extend(h, q, B)
            } else if (B !== i) a[r] = B
        }
        return a
    };
    c.extend({
        noConflict: function (a) {
            p.$ = ca;
            if (a) p.jQuery = Z;
            return c
        },
        isReady: false,
        ready: function () {
            if (!c.isReady) {
                if (!D.body) return setTimeout(c.ready, 13);
                c.isReady = true;
                if (ia) {
                    for (var a, b = 0; a = ia[b++];) a.call(D, c);
                    ia = null
                }
                c.fn.triggerHandler && c(D).triggerHandler("ready")
            }
        },
        bindReady: function () {
            if (!T) {
                T = true;
                if (D.readyState === "complete") return c.ready();
                if (D.addEventListener) {
                    D.addEventListener("DOMContentLoaded",
                    sa, false);
                    p.addEventListener("load", c.ready, false)
                } else if (D.attachEvent) {
                    D.attachEvent("onreadystatechange", sa);
                    p.attachEvent("onload", c.ready);
                    var a = false;
                    try {
                        a = p.frameElement == null
                    } catch (b) {}
                    D.documentElement.doScroll && a && k()
                }
            }
        },
        isFunction: function (a) {
            return ta.call(a) === "[object Function]"
        },
        isArray: function (a) {
            return ta.call(a) === "[object Array]"
        },
        isPlainObject: function (a) {
            if (!a || ta.call(a) !== "[object Object]" || a.nodeType || a.setInterval) return false;
            if (a.constructor && !ua.call(a, "constructor") && !ua.call(a.constructor.prototype, "isPrototypeOf")) return false;
            var b;
            for (b in a);
            return b === i || ua.call(a, b)
        },
        isEmptyObject: function (a) {
            for (var b in a) return false;
            return true
        },
        error: function (a) {
            throw a;
        },
        parseJSON: function (a) {
            if (typeof a !== "string" || !a) return null;
            a = c.trim(a);
            if (/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return p.JSON && p.JSON.parse ? p.JSON.parse(a) : (new Function("return " + a))();
            else c.error("Invalid JSON: " + a)
        },
        noop: function () {},
        globalEval: function (a) {
            if (a && E.test(a)) {
                var b = D.getElementsByTagName("head")[0] || D.documentElement,
                    f = D.createElement("script");
                f.type = "text/javascript";
                if (c.support.scriptEval) f.appendChild(D.createTextNode(a));
                else f.text = a;
                b.insertBefore(f, b.firstChild);
                b.removeChild(f)
            }
        },
        nodeName: function (a, b) {
            return a.nodeName && a.nodeName.toUpperCase() === b.toUpperCase()
        },
        each: function (a, b, f) {
            var h, g = 0,
                r = a.length,
                q = r === i || c.isFunction(a);
            if (f) if (q) for (h in a) {
                if (b.apply(a[h], f) === false) break
            } else for (; g < r;) {
                if (b.apply(a[g++], f) === false) break
            } else if (q) for (h in a) {
                if (b.call(a[h], h, a[h]) === false) break
            } else for (f = a[0]; g < r && b.call(f, g, f) !== false; f = a[++g]);
            return a
        },
        trim: function (a) {
            return (a || "").replace(R, "")
        },
        makeArray: function (a, b) {
            b = b || [];
            if (a != null) a.length == null || typeof a === "string" || c.isFunction(a) || typeof a !== "function" && a.setInterval ? Ba.call(b, a) : c.merge(b, a);
            return b
        },
        inArray: function (a, b) {
            if (b.indexOf) return b.indexOf(a);
            for (var f = 0, h = b.length; f < h; f++) if (b[f] === a) return f;
            return -1
        },
        merge: function (a, b) {
            var f = a.length,
                h = 0;
            if (typeof b.length === "number") for (var g = b.length; h < g; h++) a[f++] = b[h];
            else for (; b[h] !== i;) a[f++] = b[h++];
            a.length = f;
            return a
        },
        grep: function (a, b, f) {
            for (var h = [], g = 0, r = a.length; g < r; g++)!f !== !b(a[g], g) && h.push(a[g]);
            return h
        },
        map: function (a, b, f) {
            for (var h = [], g, r = 0, q = a.length; r < q; r++) {
                g = b(a[r], r, f);
                if (g != null) h[h.length] = g
            }
            return h.concat.apply([], h)
        },
        guid: 1,
        proxy: function (a, b, f) {
            if (arguments.length === 2) if (typeof b ===
                "string") {
                f = a;
                a = f[b];
                b = i
            } else if (b && !c.isFunction(b)) {
                f = b;
                b = i
            }
            if (!b && a) b = function () {
                return a.apply(f || this, arguments)
            };
            if (a) b.guid = a.guid = a.guid || b.guid || c.guid++;
            return b
        },
        uaMatch: function (a) {
            a = a.toLowerCase();
            a = /(webkit)[ \/]([\w.]+)/.exec(a) || /(opera)(?:.*version)?[ \/]([\w.]+)/.exec(a) || /(msie) ([\w.]+)/.exec(a) || !/compatible/.test(a) && /(mozilla)(?:.*? rv:([\w.]+))?/.exec(a) || [];
            return {
                browser: a[1] || "",
                version: a[2] || "0"
            }
        },
        browser: {}
    });
    ba = c.uaMatch(ba);
    if (ba.browser) {
        c.browser[ba.browser] = true;
        c.browser.version = ba.version
    }
    if (c.browser.webkit) c.browser.safari = true;
    if (Ca) c.inArray = function (a, b) {
        return Ca.call(b, a)
    };
    ea = c(D);
    if (D.addEventListener) sa = function () {
        D.removeEventListener("DOMContentLoaded", sa, false);
        c.ready()
    };
    else if (D.attachEvent) sa = function () {
        if (D.readyState === "complete") {
            D.detachEvent("onreadystatechange", sa);
            c.ready()
        }
    };
    (function () {
        c.support = {};
        var a = D.documentElement,
            b = D.createElement("script"),
            f = D.createElement("div"),
            h = "script" + m();
        f.style.display = "none";
        f.innerHTML = "   <link/><table></table><a href='/a' style='color:red;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
        var g = f.getElementsByTagName("*"),
            r = f.getElementsByTagName("a")[0];
        if (!(!g || !g.length || !r)) {
            c.support = {
                leadingWhitespace: f.firstChild.nodeType === 3,
                tbody: !f.getElementsByTagName("tbody").length,
                htmlSerialize: !! f.getElementsByTagName("link").length,
                style: /red/.test(r.getAttribute("style")),
                hrefNormalized: r.getAttribute("href") === "/a",
                opacity: /^0.55$/.test(r.style.opacity),
                cssFloat: !! r.style.cssFloat,
                checkOn: f.getElementsByTagName("input")[0].value === "on",
                optSelected: D.createElement("select").appendChild(D.createElement("option")).selected,
                parentNode: f.removeChild(f.appendChild(D.createElement("div"))).parentNode === null,
                deleteExpando: true,
                checkClone: false,
                scriptEval: false,
                noCloneEvent: true,
                boxModel: null
            };
            b.type = "text/javascript";
            try {
                b.appendChild(D.createTextNode("window." + h + "=1;"))
            } catch (q) {}
            a.insertBefore(b, a.firstChild);
            if (p[h]) {
                c.support.scriptEval = true;
                delete p[h]
            }
            try {
                delete b.test
            } catch (B) {
                c.support.deleteExpando = false
            }
            a.removeChild(b);
            if (f.attachEvent && f.fireEvent) {
                f.attachEvent("onclick", function w() {
                    c.support.noCloneEvent = false;
                    f.detachEvent("onclick", w)
                });
                f.cloneNode(true).fireEvent("onclick")
            }
            f = D.createElement("div");
            f.innerHTML = "<input type='radio' name='radiotest' checked='checked'/>";
            a = D.createDocumentFragment();
            a.appendChild(f.firstChild);
            c.support.checkClone = a.cloneNode(true).cloneNode(true).lastChild.checked;
            c(function () {
                var w = D.createElement("div");
                w.style.width = w.style.paddingLeft = "1px";
                D.body.appendChild(w);
                c.boxModel = c.support.boxModel = w.offsetWidth === 2;
                D.body.removeChild(w).style.display = "none"
            });
            a = function (w) {
                var A = D.createElement("div");
                w = "on" + w;
                var K = w in A;
                if (!K) {
                    A.setAttribute(w, "return;");
                    K = typeof A[w] === "function"
                }
                return K
            };
            c.support.submitBubbles = a("submit");
            c.support.changeBubbles = a("change");
            a = b = f = g = r = null
        }
    })();
    c.props = {
        "for": "htmlFor",
        "class": "className",
        readonly: "readOnly",
        maxlength: "maxLength",
        cellspacing: "cellSpacing",
        rowspan: "rowSpan",
        colspan: "colSpan",
        tabindex: "tabIndex",
        usemap: "useMap",
        frameborder: "frameBorder"
    };
    var oa = "jQuery" + m(),
        Ma = 0,
        Na = {};
    c.extend({
        cache: {},
        expando: oa,
        noData: {
            embed: true,
            object: true,
            applet: true
        },
        data: function (a, b, f) {
            if (!(a.nodeName && c.noData[a.nodeName.toLowerCase()])) {
                a = a == p ? Na : a;
                var h = a[oa],
                    g = c.cache;
                if (!h && typeof b === "string" && f === i) return null;
                h || (h = ++Ma);
                if (typeof b === "object") {
                    a[oa] = h;
                    g[h] = c.extend(true, {}, b)
                } else if (!g[h]) {
                    a[oa] = h;
                    g[h] = {}
                }
                a = g[h];
                if (f !== i) a[b] = f;
                return typeof b === "string" ? a[b] : a
            }
        },
        removeData: function (a, b) {
            if (!(a.nodeName && c.noData[a.nodeName.toLowerCase()])) {
                a = a == p ? Na : a;
                var f = a[oa],
                    h = c.cache,
                    g = h[f];
                if (b) {
                    if (g) {
                        delete g[b];
                        c.isEmptyObject(g) && c.removeData(a)
                    }
                } else {
                    if (c.support.deleteExpando) delete a[c.expando];
                    else a.removeAttribute && a.removeAttribute(c.expando);
                    delete h[f]
                }
            }
        }
    });
    c.fn.extend({
        data: function (a, b) {
            if (typeof a === "undefined" && this.length) return c.data(this[0]);
            else if (typeof a === "object") return this.each(function () {
                c.data(this, a)
            });
            var f = a.split(".");
            f[1] = f[1] ? "." + f[1] : "";
            if (b === i) {
                var h = this.triggerHandler("getData" + f[1] + "!", [f[0]]);
                if (h === i && this.length) h = c.data(this[0], a);
                return h === i && f[1] ? this.data(f[0]) : h
            } else return this.trigger("setData" + f[1] + "!", [f[0], b]).each(function () {
                c.data(this, a, b)
            })
        },
        removeData: function (a) {
            return this.each(function () {
                c.removeData(this, a)
            })
        }
    });
    c.extend({
        queue: function (a, b, f) {
            if (a) {
                b = (b || "fx") + "queue";
                var h = c.data(a, b);
                if (!f) return h || [];
                if (!h || c.isArray(f)) h = c.data(a, b, c.makeArray(f));
                else h.push(f);
                return h
            }
        },
        dequeue: function (a, b) {
            b = b || "fx";
            var f = c.queue(a, b),
                h = f.shift();
            if (h === "inprogress") h = f.shift();
            if (h) {
                b === "fx" && f.unshift("inprogress");
                h.call(a, function () {
                    c.dequeue(a, b)
                })
            }
        }
    });
    c.fn.extend({
        queue: function (a,
        b) {
            if (typeof a !== "string") {
                b = a;
                a = "fx"
            }
            if (b === i) return c.queue(this[0], a);
            return this.each(function () {
                var f = c.queue(this, a, b);
                a === "fx" && f[0] !== "inprogress" && c.dequeue(this, a)
            })
        },
        dequeue: function (a) {
            return this.each(function () {
                c.dequeue(this, a)
            })
        },
        delay: function (a, b) {
            a = c.fx ? c.fx.speeds[a] || a : a;
            b = b || "fx";
            return this.queue(b, function () {
                var f = this;
                setTimeout(function () {
                    c.dequeue(f, b)
                }, a)
            })
        },
        clearQueue: function (a) {
            return this.queue(a || "fx", [])
        }
    });
    var za = /[\n\t]/g,
        Da = /\s+/,
        wa = /\r/g,
        Oa = /href|src|style/,
        Qa =
            /(button|input)/i,
        O = /(button|input|object|select|textarea)/i,
        u = /^(a|area)$/i,
        y = /radio|checkbox/;
    c.fn.extend({
        attr: function (a, b) {
            return t(this, a, b, true, c.attr)
        },
        removeAttr: function (a) {
            return this.each(function () {
                c.attr(this, a, "");
                this.nodeType === 1 && this.removeAttribute(a)
            })
        },
        addClass: function (a) {
            if (c.isFunction(a)) return this.each(function (A) {
                var K = c(this);
                K.addClass(a.call(this, A, K.attr("class")))
            });
            if (a && typeof a === "string") for (var b = (a || "").split(Da), f = 0, h = this.length; f < h; f++) {
                var g = this[f];
                if (g.nodeType === 1) if (g.className) {
                    for (var r = " " + g.className + " ", q = g.className, B = 0, w = b.length; B < w; B++) if (r.indexOf(" " + b[B] + " ") < 0) q += " " + b[B];
                    g.className = c.trim(q)
                } else g.className = a
            }
            return this
        },
        removeClass: function (a) {
            if (c.isFunction(a)) return this.each(function (w) {
                var A = c(this);
                A.removeClass(a.call(this, w, A.attr("class")))
            });
            if (a && typeof a === "string" || a === i) for (var b = (a || "").split(Da), f = 0, h = this.length; f < h; f++) {
                var g = this[f];
                if (g.nodeType === 1 && g.className) if (a) {
                    for (var r = (" " + g.className + " ").replace(za, " "),
                    q = 0, B = b.length; q < B; q++) r = r.replace(" " + b[q] + " ", " ");
                    g.className = c.trim(r)
                } else g.className = ""
            }
            return this
        },
        toggleClass: function (a, b) {
            var f = typeof a,
                h = typeof b === "boolean";
            if (c.isFunction(a)) return this.each(function (g) {
                var r = c(this);
                r.toggleClass(a.call(this, g, r.attr("class"), b), b)
            });
            return this.each(function () {
                if (f === "string") for (var g, r = 0, q = c(this), B = b, w = a.split(Da); g = w[r++];) {
                    B = h ? B : !q.hasClass(g);
                    q[B ? "addClass" : "removeClass"](g)
                } else if (f === "undefined" || f === "boolean") {
                    this.className && c.data(this,
                        "__className__", this.className);
                    this.className = this.className || a === false ? "" : c.data(this, "__className__") || ""
                }
            })
        },
        hasClass: function (a) {
            a = " " + a + " ";
            for (var b = 0, f = this.length; b < f; b++) if ((" " + this[b].className + " ").replace(za, " ").indexOf(a) > -1) return true;
            return false
        },
        val: function (a) {
            if (a === i) {
                var b = this[0];
                if (b) {
                    if (c.nodeName(b, "option")) return (b.attributes.value || {}).specified ? b.value : b.text;
                    if (c.nodeName(b, "select")) {
                        var f = b.selectedIndex,
                            h = [],
                            g = b.options;
                        b = b.type === "select-one";
                        if (f < 0) return null;
                        var r = b ? f : 0;
                        for (f = b ? f + 1 : g.length; r < f; r++) {
                            var q = g[r];
                            if (q.selected) {
                                a = c(q).val();
                                if (b) return a;
                                h.push(a)
                            }
                        }
                        return h
                    }
                    if (y.test(b.type) && !c.support.checkOn) return b.getAttribute("value") === null ? "on" : b.value;
                    return (b.value || "").replace(wa, "")
                }
                return i
            }
            var B = c.isFunction(a);
            return this.each(function (w) {
                var A = c(this),
                    K = a;
                if (this.nodeType === 1) {
                    if (B) K = a.call(this, w, A.val());
                    if (typeof K === "number") K += "";
                    if (c.isArray(K) && y.test(this.type)) this.checked = c.inArray(A.val(), K) >= 0;
                    else if (c.nodeName(this, "select")) {
                        var Q = c.makeArray(K);
                        c("option", this).each(function () {
                            this.selected = c.inArray(c(this).val(), Q) >= 0
                        });
                        if (!Q.length) this.selectedIndex = -1
                    } else this.value = K
                }
            })
        }
    });
    c.extend({
        attrFn: {
            val: true,
            css: true,
            html: true,
            text: true,
            data: true,
            width: true,
            height: true,
            offset: true
        },
        attr: function (a, b, f, h) {
            if (!a || a.nodeType === 3 || a.nodeType === 8) return i;
            if (h && b in c.attrFn) return c(a)[b](f);
            h = a.nodeType !== 1 || !c.isXMLDoc(a);
            var g = f !== i;
            b = h && c.props[b] || b;
            if (a.nodeType === 1) {
                var r = Oa.test(b);
                if (b in a && h && !r) {
                    if (g) {
                        b === "type" && Qa.test(a.nodeName) && a.parentNode && c.error("type property can't be changed");
                        a[b] = f
                    }
                    if (c.nodeName(a, "form") && a.getAttributeNode(b)) return a.getAttributeNode(b).nodeValue;
                    if (b === "tabIndex") return (b = a.getAttributeNode("tabIndex")) && b.specified ? b.value : O.test(a.nodeName) || u.test(a.nodeName) && a.href ? 0 : i;
                    return a[b]
                }
                if (!c.support.style && h && b === "style") {
                    if (g) a.style.cssText = "" + f;
                    return a.style.cssText
                }
                g && a.setAttribute(b, "" + f);
                a = !c.support.hrefNormalized && h && r ? a.getAttribute(b, 2) : a.getAttribute(b);
                return a === null ? i : a
            }
            return c.style(a,
            b, f)
        }
    });
    var J = /\.(.*)$/,
        M = function (a) {
            return a.replace(/[^\w\s\.\|`]/g, function (b) {
                return "\\" + b
            })
        };
    c.event = {
        add: function (a, b, f, h) {
            if (!(a.nodeType === 3 || a.nodeType === 8)) {
                if (a.setInterval && a !== p && !a.frameElement) a = p;
                var g, r;
                if (f.handler) {
                    g = f;
                    f = g.handler
                }
                if (!f.guid) f.guid = c.guid++;
                if (r = c.data(a)) {
                    var q = r.events = r.events || {}, B = r.handle;
                    if (!B) r.handle = B = function () {
                        return typeof c !== "undefined" && !c.event.triggered ? c.event.handle.apply(B.elem, arguments) : i
                    };
                    B.elem = a;
                    b = b.split(" ");
                    for (var w, A = 0, K; w = b[A++];) {
                        r = g ? c.extend({}, g) : {
                            handler: f,
                            data: h
                        };
                        if (w.indexOf(".") > -1) {
                            K = w.split(".");
                            w = K.shift();
                            r.namespace = K.slice(0).sort().join(".")
                        } else {
                            K = [];
                            r.namespace = ""
                        }
                        r.type = w;
                        r.guid = f.guid;
                        var Q = q[w],
                            Y = c.event.special[w] || {};
                        if (!Q) {
                            Q = q[w] = [];
                            if (!Y.setup || Y.setup.call(a, h, K, B) === false) if (a.addEventListener) a.addEventListener(w, B, false);
                            else a.attachEvent && a.attachEvent("on" + w, B)
                        }
                        if (Y.add) {
                            Y.add.call(a, r);
                            if (!r.handler.guid) r.handler.guid = f.guid
                        }
                        Q.push(r);
                        c.event.global[w] = true
                    }
                    a = null
                }
            }
        },
        global: {},
        remove: function (a,
        b, f, h) {
            if (!(a.nodeType === 3 || a.nodeType === 8)) {
                var g, r = 0,
                    q, B, w, A, K, Q, Y = c.data(a),
                    ha = Y && Y.events;
                if (Y && ha) {
                    if (b && b.type) {
                        f = b.handler;
                        b = b.type
                    }
                    if (!b || typeof b === "string" && b.charAt(0) === ".") {
                        b = b || "";
                        for (g in ha) c.event.remove(a, g + b)
                    } else {
                        for (b = b.split(" "); g = b[r++];) {
                            A = g;
                            q = g.indexOf(".") < 0;
                            B = [];
                            if (!q) {
                                B = g.split(".");
                                g = B.shift();
                                w = new RegExp("(^|\\.)" + c.map(B.slice(0).sort(), M).join("\\.(?:.*\\.)?") + "(\\.|$)")
                            }
                            if (K = ha[g]) if (f) {
                                A = c.event.special[g] || {};
                                for (fa = h || 0; fa < K.length; fa++) {
                                    Q = K[fa];
                                    if (f.guid === Q.guid) {
                                        if (q || w.test(Q.namespace)) {
                                            h == null && K.splice(fa--, 1);
                                            A.remove && A.remove.call(a, Q)
                                        }
                                        if (h != null) break
                                    }
                                }
                                if (K.length === 0 || h != null && K.length === 1) {
                                    if (!A.teardown || A.teardown.call(a, B) === false) N(a, g, Y.handle);
                                    delete ha[g]
                                }
                            } else for (var fa = 0; fa < K.length; fa++) {
                                Q = K[fa];
                                if (q || w.test(Q.namespace)) {
                                    c.event.remove(a, A, Q.handler, fa);
                                    K.splice(fa--, 1)
                                }
                            }
                        }
                        if (c.isEmptyObject(ha)) {
                            if (b = Y.handle) b.elem = null;
                            delete Y.events;
                            delete Y.handle;
                            c.isEmptyObject(Y) && c.removeData(a)
                        }
                    }
                }
            }
        },
        trigger: function (a, b, f, h) {
            var g = a.type || a;
            if (!h) {
                a = typeof a === "object" ? a[oa] ? a : c.extend(c.Event(g), a) : c.Event(g);
                if (g.indexOf("!") >= 0) {
                    a.type = g = g.slice(0, -1);
                    a.exclusive = true
                }
                if (!f) {
                    a.stopPropagation();
                    c.event.global[g] && c.each(c.cache, function () {
                        this.events && this.events[g] && c.event.trigger(a, b, this.handle.elem)
                    })
                }
                if (!f || f.nodeType === 3 || f.nodeType === 8) return i;
                a.result = i;
                a.target = f;
                b = c.makeArray(b);
                b.unshift(a)
            }
            a.currentTarget = f;
            (h = c.data(f, "handle")) && h.apply(f, b);
            h = f.parentNode || f.ownerDocument;
            try {
                if (!(f && f.nodeName && c.noData[f.nodeName.toLowerCase()])) if (f["on" + g] && f["on" + g].apply(f, b) === false) a.result = false
            } catch (r) {}
            if (!a.isPropagationStopped() && h) c.event.trigger(a, b, h, true);
            else if (!a.isDefaultPrevented()) {
                h = a.target;
                var q, B = c.nodeName(h, "a") && g === "click",
                    w = c.event.special[g] || {};
                if ((!w._default || w._default.call(f, a) === false) && !B && !(h && h.nodeName && c.noData[h.nodeName.toLowerCase()])) {
                    try {
                        if (h[g]) {
                            if (q = h["on" + g]) h["on" + g] = null;
                            c.event.triggered = true;
                            h[g]()
                        }
                    } catch (A) {}
                    if (q) h["on" + g] = q;
                    c.event.triggered = false
                }
            }
        },
        handle: function (a) {
            var b, f, h, g;
            a = arguments[0] = c.event.fix(a || p.event);
            a.currentTarget = this;
            b = a.type.indexOf(".") < 0 && !a.exclusive;
            if (!b) {
                f = a.type.split(".");
                a.type = f.shift();
                h = new RegExp("(^|\\.)" + f.slice(0).sort().join("\\.(?:.*\\.)?") + "(\\.|$)")
            }
            g = c.data(this, "events");
            f = g[a.type];
            if (g && f) {
                f = f.slice(0);
                g = 0;
                for (var r = f.length; g < r; g++) {
                    var q = f[g];
                    if (b || h.test(q.namespace)) {
                        a.handler = q.handler;
                        a.data = q.data;
                        a.handleObj = q;
                        q = q.handler.apply(this, arguments);
                        if (q !== i) {
                            a.result = q;
                            if (q === false) {
                                a.preventDefault();
                                a.stopPropagation()
                            }
                        }
                        if (a.isImmediatePropagationStopped()) break
                    }
                }
            }
            return a.result
        },
        props: "altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),
        fix: function (a) {
            if (a[oa]) return a;
            var b = a;
            a = c.Event(b);
            for (var f = this.props.length, h; f;) {
                h = this.props[--f];
                a[h] = b[h]
            }
            if (!a.target) a.target = a.srcElement || D;
            if (a.target.nodeType === 3) a.target = a.target.parentNode;
            if (!a.relatedTarget && a.fromElement) a.relatedTarget = a.fromElement === a.target ? a.toElement : a.fromElement;
            if (a.pageX == null && a.clientX != null) {
                b = D.documentElement;
                f = D.body;
                a.pageX = a.clientX + (b && b.scrollLeft || f && f.scrollLeft || 0) - (b && b.clientLeft || f && f.clientLeft || 0);
                a.pageY = a.clientY + (b && b.scrollTop || f && f.scrollTop || 0) - (b && b.clientTop || f && f.clientTop || 0)
            }
            if (!a.which && (a.charCode || a.charCode === 0 ? a.charCode : a.keyCode)) a.which = a.charCode || a.keyCode;
            if (!a.metaKey && a.ctrlKey) a.metaKey = a.ctrlKey;
            if (!a.which && a.button !== i) a.which = a.button & 1 ? 1 : a.button & 2 ? 3 : a.button & 4 ? 2 : 0;
            return a
        },
        guid: 1E8,
        proxy: c.proxy,
        special: {
            ready: {
                setup: c.bindReady,
                teardown: c.noop
            },
            live: {
                add: function (a) {
                    c.event.add(this, a.origType, c.extend({}, a, {
                        handler: da
                    }))
                },
                remove: function (a) {
                    var b = true,
                        f = a.origType.replace(J, "");
                    c.each(c.data(this, "events").live || [], function () {
                        if (f === this.origType.replace(J, "")) return b = false
                    });
                    b && c.event.remove(this, a.origType, da)
                }
            },
            beforeunload: {
                setup: function (a, b, f) {
                    if (this.setInterval) this.onbeforeunload = f;
                    return false
                },
                teardown: function (a, b) {
                    if (this.onbeforeunload === b) this.onbeforeunload = null
                }
            }
        }
    };
    var N = D.removeEventListener ? function (a, b, f) {
            a.removeEventListener(b, f, false)
        } : function (a, b, f) {
            a.detachEvent("on" + b, f)
        };
    c.Event = function (a) {
        if (!this.preventDefault) return new c.Event(a);
        if (a && a.type) {
            this.originalEvent = a;
            this.type = a.type
        } else this.type = a;
        this.timeStamp = m();
        this[oa] = true
    };
    c.Event.prototype = {
        preventDefault: function () {
            this.isDefaultPrevented = v;
            var a = this.originalEvent;
            if (a) {
                a.preventDefault && a.preventDefault();
                a.returnValue = false
            }
        },
        stopPropagation: function () {
            this.isPropagationStopped = v;
            var a = this.originalEvent;
            if (a) {
                a.stopPropagation && a.stopPropagation();
                a.cancelBubble = true
            }
        },
        stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = v;
            this.stopPropagation()
        },
        isDefaultPrevented: s,
        isPropagationStopped: s,
        isImmediatePropagationStopped: s
    };
    var V = function (a) {
        var b = a.relatedTarget;
        try {
            for (; b && b !== this;) b = b.parentNode;
            if (b !== this) {
                a.type = a.data;
                c.event.handle.apply(this, arguments)
            }
        } catch (f) {}
    },
    W = function (a) {
        a.type = a.data;
        c.event.handle.apply(this, arguments)
    };
    c.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function (a, b) {
        c.event.special[a] = {
            setup: function (f) {
                c.event.add(this, b, f && f.selector ? W : V, a)
            },
            teardown: function (f) {
                c.event.remove(this, b, f && f.selector ? W : V)
            }
        }
    });
    if (!c.support.submitBubbles) c.event.special.submit = {
        setup: function () {
            if (this.nodeName.toLowerCase() !== "form") {
                c.event.add(this, "click.specialSubmit", function (a) {
                    var b = a.target,
                        f = b.type;
                    if ((f === "submit" || f === "image") && c(b).closest("form").length) return L("submit",
                    this, arguments)
                });
                c.event.add(this, "keypress.specialSubmit", function (a) {
                    var b = a.target,
                        f = b.type;
                    if ((f === "text" || f === "password") && c(b).closest("form").length && a.keyCode === 13) return L("submit", this, arguments)
                })
            } else return false
        },
        teardown: function () {
            c.event.remove(this, ".specialSubmit")
        }
    };
    if (!c.support.changeBubbles) {
        var ga = /textarea|input|select/i,
            ja, Ea = function (a) {
                var b = a.type,
                    f = a.value;
                if (b === "radio" || b === "checkbox") f = a.checked;
                else if (b === "select-multiple") f = a.selectedIndex > -1 ? c.map(a.options, function (h) {
                    return h.selected
                }).join("-") :
                    "";
                else if (a.nodeName.toLowerCase() === "select") f = a.selectedIndex;
                return f
            }, Fa = function (a, b) {
                var f = a.target,
                    h, g;
                if (!(!ga.test(f.nodeName) || f.readOnly)) {
                    h = c.data(f, "_change_data");
                    g = Ea(f);
                    if (a.type !== "focusout" || f.type !== "radio") c.data(f, "_change_data", g);
                    if (!(h === i || g === h)) if (h != null || g) {
                        a.type = "change";
                        return c.event.trigger(a, b, f)
                    }
                }
            };
        c.event.special.change = {
            filters: {
                focusout: Fa,
                click: function (a) {
                    var b = a.target,
                        f = b.type;
                    if (f === "radio" || f === "checkbox" || b.nodeName.toLowerCase() === "select") return Fa.call(this,
                    a)
                },
                keydown: function (a) {
                    var b = a.target,
                        f = b.type;
                    if (a.keyCode === 13 && b.nodeName.toLowerCase() !== "textarea" || a.keyCode === 32 && (f === "checkbox" || f === "radio") || f === "select-multiple") return Fa.call(this, a)
                },
                beforeactivate: function (a) {
                    a = a.target;
                    c.data(a, "_change_data", Ea(a))
                }
            },
            setup: function () {
                if (this.type === "file") return false;
                for (var a in ja) c.event.add(this, a + ".specialChange", ja[a]);
                return ga.test(this.nodeName)
            },
            teardown: function () {
                c.event.remove(this, ".specialChange");
                return ga.test(this.nodeName)
            }
        };
        ja = c.event.special.change.filters
    }
    D.addEventListener && c.each({
        focus: "focusin",
        blur: "focusout"
    }, function (a, b) {
        function f(h) {
            h = c.event.fix(h);
            h.type = b;
            return c.event.handle.call(this, h)
        }
        c.event.special[b] = {
            setup: function () {
                this.addEventListener(a, f, true)
            },
            teardown: function () {
                this.removeEventListener(a, f, true)
            }
        }
    });
    c.each(["bind", "one"], function (a, b) {
        c.fn[b] = function (f, h, g) {
            if (typeof f === "object") {
                for (var r in f) this[b](r, h, f[r], g);
                return this
            }
            if (c.isFunction(h)) {
                g = h;
                h = i
            }
            var q = b === "one" ? c.proxy(g, function (w) {
                c(this).unbind(w,
                q);
                return g.apply(this, arguments)
            }) : g;
            if (f === "unload" && b !== "one") this.one(f, h, g);
            else {
                r = 0;
                for (var B = this.length; r < B; r++) c.event.add(this[r], f, q, h)
            }
            return this
        }
    });
    c.fn.extend({
        unbind: function (a, b) {
            if (typeof a === "object" && !a.preventDefault) for (var f in a) this.unbind(f, a[f]);
            else {
                f = 0;
                for (var h = this.length; f < h; f++) c.event.remove(this[f], a, b)
            }
            return this
        },
        delegate: function (a, b, f, h) {
            return this.live(b, f, h, a)
        },
        undelegate: function (a, b, f) {
            return arguments.length === 0 ? this.unbind("live") : this.die(b, null, f, a)
        },
        trigger: function (a, b) {
            return this.each(function () {
                c.event.trigger(a, b, this)
            })
        },
        triggerHandler: function (a, b) {
            if (this[0]) {
                a = c.Event(a);
                a.preventDefault();
                a.stopPropagation();
                c.event.trigger(a, b, this[0]);
                return a.result
            }
        },
        toggle: function (a) {
            for (var b = arguments, f = 1; f < b.length;) c.proxy(a, b[f++]);
            return this.click(c.proxy(a, function (h) {
                var g = (c.data(this, "lastToggle" + a.guid) || 0) % f;
                c.data(this, "lastToggle" + a.guid, g + 1);
                h.preventDefault();
                return b[g].apply(this, arguments) || false
            }))
        },
        hover: function (a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    });
    var xa = {
        focus: "focusin",
        blur: "focusout",
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    };
    c.each(["live", "die"], function (a, b) {
        c.fn[b] = function (f, h, g, r) {
            var q, B = 0,
                w, A, K = r || this.selector,
                Q = r ? this : c(this.context);
            if (c.isFunction(h)) {
                g = h;
                h = i
            }
            for (f = (f || "").split(" ");
            (q = f[B++]) != null;) {
                r = J.exec(q);
                w = "";
                if (r) {
                    w = r[0];
                    q = q.replace(J, "")
                }
                if (q === "hover") f.push("mouseenter" + w, "mouseleave" + w);
                else {
                    A = q;
                    if (q === "focus" || q === "blur") {
                        f.push(xa[q] + w);
                        q += w
                    } else q = (xa[q] || q) + w;
                    b === "live" ? Q.each(function () {
                        c.event.add(this,
                        ka(q, K), {
                            data: h,
                            selector: K,
                            handler: g,
                            origType: q,
                            origHandler: g,
                            preType: A
                        })
                    }) : Q.unbind(ka(q, K), g)
                }
            }
            return this
        }
    });
    c.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "), function (a, b) {
        c.fn[b] = function (f) {
            return f ? this.bind(b, f) : this.trigger(b)
        };
        if (c.attrFn) c.attrFn[b] = true
    });
    p.attachEvent && !p.addEventListener && p.attachEvent("onunload", function () {
        for (var a in c.cache) if (c.cache[a].handle) try {
            c.event.remove(c.cache[a].handle.elem)
        } catch (b) {}
    });
    (function () {
        function a(j) {
            for (var n = "", x, z = 0; j[z]; z++) {
                x = j[z];
                if (x.nodeType === 3 || x.nodeType === 4) n += x.nodeValue;
                else if (x.nodeType !== 8) n += a(x.childNodes)
            }
            return n
        }
        function b(j, n, x, z, G, F) {
            G = 0;
            for (var S = z.length; G < S; G++) {
                var P = z[G];
                if (P) {
                    P = P[j];
                    for (var X = false; P;) {
                        if (P.sizcache === x) {
                            X = z[P.sizset];
                            break
                        }
                        if (P.nodeType === 1 && !F) {
                            P.sizcache = x;
                            P.sizset = G
                        }
                        if (P.nodeName.toLowerCase() === n) {
                            X = P;
                            break
                        }
                        P = P[j]
                    }
                    z[G] = X
                }
            }
        }
        function f(j, n, x, z, G, F) {
            G = 0;
            for (var S = z.length; G < S; G++) {
                var P = z[G];
                if (P) {
                    P = P[j];
                    for (var X = false; P;) {
                        if (P.sizcache === x) {
                            X = z[P.sizset];
                            break
                        }
                        if (P.nodeType === 1) {
                            if (!F) {
                                P.sizcache = x;
                                P.sizset = G
                            }
                            if (typeof n !== "string") {
                                if (P === n) {
                                    X = true;
                                    break
                                }
                            } else if (w.filter(n, [P]).length > 0) {
                                X = P;
                                break
                            }
                        }
                        P = P[j]
                    }
                    z[G] = X
                }
            }
        }
        var h = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
            g = 0,
            r = Object.prototype.toString,
            q = false,
            B = true;
        [0, 0].sort(function () {
            B = false;
            return 0
        });
        var w = function (j, n, x, z) {
            x = x || [];
            var G = n = n || D;
            if (n.nodeType !== 1 && n.nodeType !== 9) return [];
            if (!j || typeof j !== "string") return x;
            for (var F = [], S, P, X, Pa, Ga = true, Ia = U(n), Ha = j;
            (h.exec(""), S = h.exec(Ha)) !== null;) {
                Ha = S[3];
                F.push(S[1]);
                if (S[2]) {
                    Pa = S[3];
                    break
                }
            }
            if (F.length > 1 && K.exec(j)) if (F.length === 2 && A.relative[F[0]]) P = Ua(F[0] + F[1], n);
            else for (P = A.relative[F[0]] ? [n] : w(F.shift(), n); F.length;) {
                j = F.shift();
                if (A.relative[j]) j += F.shift();
                P = Ua(j, P)
            } else {
                if (!z && F.length > 1 && n.nodeType === 9 && !Ia && A.match.ID.test(F[0]) && !A.match.ID.test(F[F.length - 1])) {
                    S = w.find(F.shift(), n, Ia);
                    n = S.expr ? w.filter(S.expr, S.set)[0] : S.set[0]
                }
                if (n) {
                    S = z ? {
                        expr: F.pop(),
                        set: Y(z)
                    } : w.find(F.pop(), F.length === 1 && (F[0] === "~" || F[0] === "+") && n.parentNode ? n.parentNode : n, Ia);
                    P = S.expr ? w.filter(S.expr, S.set) : S.set;
                    if (F.length > 0) X = Y(P);
                    else Ga = false;
                    for (; F.length;) {
                        var pa = F.pop();
                        S = pa;
                        if (A.relative[pa]) S = F.pop();
                        else pa = "";
                        if (S == null) S = n;
                        A.relative[pa](X, S, Ia)
                    }
                } else X = []
            }
            X || (X = P);
            X || w.error(pa || j);
            if (r.call(X) === "[object Array]") if (Ga) if (n && n.nodeType === 1) for (j = 0; X[j] != null; j++) {
                if (X[j] && (X[j] === true || X[j].nodeType === 1 && qa(n, X[j]))) x.push(P[j])
            } else for (j = 0; X[j] != null; j++) X[j] && X[j].nodeType === 1 && x.push(P[j]);
            else x.push.apply(x, X);
            else Y(X, x);
            if (Pa) {
                w(Pa, G, x, z);
                w.uniqueSort(x)
            }
            return x
        };
        w.uniqueSort = function (j) {
            if (fa) {
                q = B;
                j.sort(fa);
                if (q) for (var n = 1; n < j.length; n++) j[n] === j[n - 1] && j.splice(n--, 1)
            }
            return j
        };
        w.matches = function (j, n) {
            return w(j, null, null, n)
        };
        w.find = function (j, n, x) {
            var z, G;
            if (!j) return [];
            for (var F = 0, S = A.order.length; F < S; F++) {
                var P = A.order[F];
                if (G = A.leftMatch[P].exec(j)) {
                    var X = G[1];
                    G.splice(1, 1);
                    if (X.substr(X.length - 1) !== "\\") {
                        G[1] = (G[1] || "").replace(/\\/g,
                            "");
                        z = A.find[P](G, n, x);
                        if (z != null) {
                            j = j.replace(A.match[P], "");
                            break
                        }
                    }
                }
            }
            z || (z = n.getElementsByTagName("*"));
            return {
                set: z,
                expr: j
            }
        };
        w.filter = function (j, n, x, z) {
            for (var G = j, F = [], S = n, P, X, Pa = n && n[0] && U(n[0]); j && n.length;) {
                for (var Ga in A.filter) if ((P = A.leftMatch[Ga].exec(j)) != null && P[2]) {
                    var Ia = A.filter[Ga],
                        Ha, pa;
                    pa = P[1];
                    X = false;
                    P.splice(1, 1);
                    if (pa.substr(pa.length - 1) !== "\\") {
                        if (S === F) F = [];
                        if (A.preFilter[Ga]) if (P = A.preFilter[Ga](P, S, x, F, z, Pa)) {
                            if (P === true) continue
                        } else X = Ha = true;
                        if (P) for (var Ra = 0;
                        (pa = S[Ra]) != null; Ra++) if (pa) {
                            Ha = Ia(pa, P, Ra, S);
                            var cb = z ^ !! Ha;
                            if (x && Ha != null) if (cb) X = true;
                            else S[Ra] = false;
                            else if (cb) {
                                F.push(pa);
                                X = true
                            }
                        }
                        if (Ha !== i) {
                            x || (S = F);
                            j = j.replace(A.match[Ga], "");
                            if (!X) return [];
                            break
                        }
                    }
                }
                if (j === G) if (X == null) w.error(j);
                else break;
                G = j
            }
            return S
        };
        w.error = function (j) {
            throw "Syntax error, unrecognized expression: " + j;
        };
        var A = w.selectors = {
            order: ["ID", "NAME", "TAG"],
            match: {
                ID: /#((?:[\w\u00c0-\uFFFF-]|\\.)+)/,
                CLASS: /\.((?:[\w\u00c0-\uFFFF-]|\\.)+)/,
                NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF-]|\\.)+)['"]*\]/,
                ATTR: /\[\s*((?:[\w\u00c0-\uFFFF-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,
                TAG: /^((?:[\w\u00c0-\uFFFF\*-]|\\.)+)/,
                CHILD: /:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,
                POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,
                PSEUDO: /:((?:[\w\u00c0-\uFFFF-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
            },
            leftMatch: {},
            attrMap: {
                "class": "className",
                "for": "htmlFor"
            },
            attrHandle: {
                href: function (j) {
                    return j.getAttribute("href")
                }
            },
            relative: {
                "+": function (j, n) {
                    var x = typeof n === "string",
                        z = x && !/\W/.test(n);
                    x = x && !z;
                    if (z) n = n.toLowerCase();
                    z = 0;
                    for (var G = j.length, F; z < G; z++) if (F = j[z]) {
                        for (;
                        (F = F.previousSibling) && F.nodeType !== 1;);
                        j[z] = x || F && F.nodeName.toLowerCase() === n ? F || false : F === n
                    }
                    x && w.filter(n, j, true)
                },
                ">": function (j, n) {
                    var x = typeof n === "string";
                    if (x && !/\W/.test(n)) {
                        n = n.toLowerCase();
                        for (var z = 0, G = j.length; z < G; z++) {
                            var F = j[z];
                            if (F) {
                                x = F.parentNode;
                                j[z] = x.nodeName.toLowerCase() === n ? x : false
                            }
                        }
                    } else {
                        z = 0;
                        for (G = j.length; z < G; z++) if (F = j[z]) j[z] = x ? F.parentNode : F.parentNode === n;
                        x && w.filter(n,
                        j, true)
                    }
                },
                "": function (j, n, x) {
                    var z = g++,
                        G = f;
                    if (typeof n === "string" && !/\W/.test(n)) {
                        var F = n = n.toLowerCase();
                        G = b
                    }
                    G("parentNode", n, z, j, F, x)
                },
                "~": function (j, n, x) {
                    var z = g++,
                        G = f;
                    if (typeof n === "string" && !/\W/.test(n)) {
                        var F = n = n.toLowerCase();
                        G = b
                    }
                    G("previousSibling", n, z, j, F, x)
                }
            },
            find: {
                ID: function (j, n, x) {
                    if (typeof n.getElementById !== "undefined" && !x) return (j = n.getElementById(j[1])) ? [j] : []
                },
                NAME: function (j, n) {
                    if (typeof n.getElementsByName !== "undefined") {
                        var x = [];
                        n = n.getElementsByName(j[1]);
                        for (var z = 0, G = n.length; z < G; z++) n[z].getAttribute("name") === j[1] && x.push(n[z]);
                        return x.length === 0 ? null : x
                    }
                },
                TAG: function (j, n) {
                    return n.getElementsByTagName(j[1])
                }
            },
            preFilter: {
                CLASS: function (j, n, x, z, G, F) {
                    j = " " + j[1].replace(/\\/g, "") + " ";
                    if (F) return j;
                    F = 0;
                    for (var S;
                    (S = n[F]) != null; F++) if (S) if (G ^ (S.className && (" " + S.className + " ").replace(/[\t\n]/g, " ").indexOf(j) >= 0)) x || z.push(S);
                    else if (x) n[F] = false;
                    return false
                },
                ID: function (j) {
                    return j[1].replace(/\\/g, "")
                },
                TAG: function (j) {
                    return j[1].toLowerCase()
                },
                CHILD: function (j) {
                    if (j[1] ===
                        "nth") {
                        var n = /(-?)(\d*)n((?:\+|-)?\d*)/.exec(j[2] === "even" && "2n" || j[2] === "odd" && "2n+1" || !/\D/.test(j[2]) && "0n+" + j[2] || j[2]);
                        j[2] = n[1] + (n[2] || 1) - 0;
                        j[3] = n[3] - 0
                    }
                    j[0] = g++;
                    return j
                },
                ATTR: function (j, n, x, z, G, F) {
                    n = j[1].replace(/\\/g, "");
                    if (!F && A.attrMap[n]) j[1] = A.attrMap[n];
                    if (j[2] === "~=") j[4] = " " + j[4] + " ";
                    return j
                },
                PSEUDO: function (j, n, x, z, G) {
                    if (j[1] === "not") if ((h.exec(j[3]) || "").length > 1 || /^\w/.test(j[3])) j[3] = w(j[3], null, null, n);
                    else {
                        j = w.filter(j[3], n, x, true ^ G);
                        x || z.push.apply(z, j);
                        return false
                    } else if (A.match.POS.test(j[0]) || A.match.CHILD.test(j[0])) return true;
                    return j
                },
                POS: function (j) {
                    j.unshift(true);
                    return j
                }
            },
            filters: {
                enabled: function (j) {
                    return j.disabled === false && j.type !== "hidden"
                },
                disabled: function (j) {
                    return j.disabled === true
                },
                checked: function (j) {
                    return j.checked === true
                },
                selected: function (j) {
                    return j.selected === true
                },
                parent: function (j) {
                    return !!j.firstChild
                },
                empty: function (j) {
                    return !j.firstChild
                },
                has: function (j, n, x) {
                    return !!w(x[3], j).length
                },
                header: function (j) {
                    return /h\d/i.test(j.nodeName)
                },
                text: function (j) {
                    return "text" === j.type
                },
                radio: function (j) {
                    return "radio" === j.type
                },
                checkbox: function (j) {
                    return "checkbox" === j.type
                },
                file: function (j) {
                    return "file" === j.type
                },
                password: function (j) {
                    return "password" === j.type
                },
                submit: function (j) {
                    return "submit" === j.type
                },
                image: function (j) {
                    return "image" === j.type
                },
                reset: function (j) {
                    return "reset" === j.type
                },
                button: function (j) {
                    return "button" === j.type || j.nodeName.toLowerCase() === "button"
                },
                input: function (j) {
                    return /input|select|textarea|button/i.test(j.nodeName)
                }
            },
            setFilters: {
                first: function (j, n) {
                    return n === 0
                },
                last: function (j, n, x, z) {
                    return n === z.length - 1
                },
                even: function (j, n) {
                    return n % 2 === 0
                },
                odd: function (j, n) {
                    return n % 2 === 1
                },
                lt: function (j, n, x) {
                    return n < x[3] - 0
                },
                gt: function (j, n, x) {
                    return n > x[3] - 0
                },
                nth: function (j, n, x) {
                    return x[3] - 0 === n
                },
                eq: function (j, n, x) {
                    return x[3] - 0 === n
                }
            },
            filter: {
                PSEUDO: function (j, n, x, z) {
                    var G = n[1],
                        F = A.filters[G];
                    if (F) return F(j, x, n, z);
                    else if (G === "contains") return (j.textContent || j.innerText || a([j]) || "").indexOf(n[3]) >= 0;
                    else if (G === "not") {
                        n = n[3];
                        x = 0;
                        for (z = n.length; x < z; x++) if (n[x] === j) return false;
                        return true
                    } else w.error("Syntax error, unrecognized expression: " + G)
                },
                CHILD: function (j, n) {
                    var x = n[1],
                        z = j;
                    switch (x) {
                        case "only":
                        case "first":
                            for (; z = z.previousSibling;) if (z.nodeType === 1) return false;
                            if (x === "first") return true;
                            z = j;
                        case "last":
                            for (; z = z.nextSibling;) if (z.nodeType === 1) return false;
                            return true;
                        case "nth":
                            x = n[2];
                            var G = n[3];
                            if (x === 1 && G === 0) return true;
                            n = n[0];
                            var F = j.parentNode;
                            if (F && (F.sizcache !== n || !j.nodeIndex)) {
                                var S = 0;
                                for (z = F.firstChild; z; z = z.nextSibling) if (z.nodeType === 1) z.nodeIndex = ++S;
                                F.sizcache = n
                            }
                            j = j.nodeIndex - G;
                            return x === 0 ? j === 0 : j % x === 0 && j / x >= 0
                    }
                },
                ID: function (j, n) {
                    return j.nodeType === 1 && j.getAttribute("id") === n
                },
                TAG: function (j, n) {
                    return n === "*" && j.nodeType === 1 || j.nodeName.toLowerCase() === n
                },
                CLASS: function (j, n) {
                    return (" " + (j.className || j.getAttribute("class")) + " ").indexOf(n) > -1
                },
                ATTR: function (j, n) {
                    var x = n[1];
                    j = A.attrHandle[x] ? A.attrHandle[x](j) : j[x] != null ? j[x] : j.getAttribute(x);
                    x = j + "";
                    var z = n[2];
                    n = n[4];
                    return j == null ? z === "!=" : z === "=" ? x === n : z === "*=" ? x.indexOf(n) >= 0 : z === "~=" ? (" " + x + " ").indexOf(n) >= 0 : !n ? x && j !== false : z === "!=" ? x !== n : z === "^=" ? x.indexOf(n) === 0 : z === "$=" ? x.substr(x.length - n.length) === n : z === "|=" ? x === n || x.substr(0, n.length + 1) === n + "-" : false
                },
                POS: function (j, n, x, z) {
                    var G = A.setFilters[n[2]];
                    if (G) return G(j, x, n, z)
                }
            }
        }, K = A.match.POS;
        for (var Q in A.match) {
            A.match[Q] = new RegExp(A.match[Q].source + /(?![^\[]*\])(?![^\(]*\))/.source);
            A.leftMatch[Q] = new RegExp(/(^(?:.|\r|\n)*?)/.source + A.match[Q].source.replace(/\\(\d+)/g, function (j, n) {
                return "\\" + (n - 0 + 1)
            }))
        }
        var Y = function (j,
        n) {
            j = Array.prototype.slice.call(j, 0);
            if (n) {
                n.push.apply(n, j);
                return n
            }
            return j
        };
        try {
            Array.prototype.slice.call(D.documentElement.childNodes, 0)
        } catch (ha) {
            Y = function (j, n) {
                n = n || [];
                if (r.call(j) === "[object Array]") Array.prototype.push.apply(n, j);
                else if (typeof j.length === "number") for (var x = 0, z = j.length; x < z; x++) n.push(j[x]);
                else for (x = 0; j[x]; x++) n.push(j[x]);
                return n
            }
        }
        var fa;
        if (D.documentElement.compareDocumentPosition) fa = function (j, n) {
            if (!j.compareDocumentPosition || !n.compareDocumentPosition) {
                if (j == n) q = true;
                return j.compareDocumentPosition ? -1 : 1
            }
            j = j.compareDocumentPosition(n) & 4 ? -1 : j === n ? 0 : 1;
            if (j === 0) q = true;
            return j
        };
        else if ("sourceIndex" in D.documentElement) fa = function (j, n) {
            if (!j.sourceIndex || !n.sourceIndex) {
                if (j == n) q = true;
                return j.sourceIndex ? -1 : 1
            }
            j = j.sourceIndex - n.sourceIndex;
            if (j === 0) q = true;
            return j
        };
        else if (D.createRange) fa = function (j, n) {
            if (!j.ownerDocument || !n.ownerDocument) {
                if (j == n) q = true;
                return j.ownerDocument ? -1 : 1
            }
            var x = j.ownerDocument.createRange(),
                z = n.ownerDocument.createRange();
            x.setStart(j,
            0);
            x.setEnd(j, 0);
            z.setStart(n, 0);
            z.setEnd(n, 0);
            j = x.compareBoundaryPoints(Range.START_TO_END, z);
            if (j === 0) q = true;
            return j
        };
        (function () {
            var j = D.createElement("div"),
                n = "script" + (new Date).getTime();
            j.innerHTML = "<a name='" + n + "'/>";
            var x = D.documentElement;
            x.insertBefore(j, x.firstChild);
            if (D.getElementById(n)) {
                A.find.ID = function (z, G, F) {
                    if (typeof G.getElementById !== "undefined" && !F) return (G = G.getElementById(z[1])) ? G.id === z[1] || typeof G.getAttributeNode !== "undefined" && G.getAttributeNode("id").nodeValue === z[1] ? [G] : i : []
                };
                A.filter.ID = function (z, G) {
                    var F = typeof z.getAttributeNode !== "undefined" && z.getAttributeNode("id");
                    return z.nodeType === 1 && F && F.nodeValue === G
                }
            }
            x.removeChild(j);
            x = j = null
        })();
        (function () {
            var j = D.createElement("div");
            j.appendChild(D.createComment(""));
            if (j.getElementsByTagName("*").length > 0) A.find.TAG = function (n, x) {
                x = x.getElementsByTagName(n[1]);
                if (n[1] === "*") {
                    n = [];
                    for (var z = 0; x[z]; z++) x[z].nodeType === 1 && n.push(x[z]);
                    x = n
                }
                return x
            };
            j.innerHTML = "<a href='#'></a>";
            if (j.firstChild && typeof j.firstChild.getAttribute !==
                "undefined" && j.firstChild.getAttribute("href") !== "#") A.attrHandle.href = function (n) {
                return n.getAttribute("href", 2)
            };
            j = null
        })();
        D.querySelectorAll && function () {
            var j = w,
                n = D.createElement("div");
            n.innerHTML = "<p class='TEST'></p>";
            if (!(n.querySelectorAll && n.querySelectorAll(".TEST").length === 0)) {
                w = function (z, G, F, S) {
                    G = G || D;
                    if (!S && G.nodeType === 9 && !U(G)) try {
                        return Y(G.querySelectorAll(z), F)
                    } catch (P) {}
                    return j(z, G, F, S)
                };
                for (var x in j) w[x] = j[x];
                n = null
            }
        }();
        (function () {
            var j = D.createElement("div");
            j.innerHTML =
                "<div class='test e'></div><div class='test'></div>";
            if (!(!j.getElementsByClassName || j.getElementsByClassName("e").length === 0)) {
                j.lastChild.className = "e";
                if (j.getElementsByClassName("e").length !== 1) {
                    A.order.splice(1, 0, "CLASS");
                    A.find.CLASS = function (n, x, z) {
                        if (typeof x.getElementsByClassName !== "undefined" && !z) return x.getElementsByClassName(n[1])
                    };
                    j = null
                }
            }
        })();
        var qa = D.compareDocumentPosition ? function (j, n) {
                return !!(j.compareDocumentPosition(n) & 16)
            } : function (j, n) {
                return j !== n && (j.contains ? j.contains(n) : true)
            }, U = function (j) {
                return (j = (j ? j.ownerDocument || j : 0).documentElement) ? j.nodeName !== "HTML" : false
            }, Ua = function (j, n) {
                var x = [],
                    z = "",
                    G;
                for (n = n.nodeType ? [n] : n; G = A.match.PSEUDO.exec(j);) {
                    z += G[0];
                    j = j.replace(A.match.PSEUDO, "")
                }
                j = A.relative[j] ? j + "*" : j;
                G = 0;
                for (var F = n.length; G < F; G++) w(j, n[G], x);
                return w.filter(z, x)
            };
        c.find = w;
        c.expr = w.selectors;
        c.expr[":"] = c.expr.filters;
        c.unique = w.uniqueSort;
        c.text = a;
        c.isXMLDoc = U;
        c.contains = qa
    })();
    var ya = /Until$/,
        Ja = /^(?:parents|prevUntil|prevAll)/,
        Ka = /,/;
    va = Array.prototype.slice;
    var db = function (a, b, f) {
        if (c.isFunction(b)) return c.grep(a, function (g, r) {
            return !!b.call(g, r, g) === f
        });
        else if (b.nodeType) return c.grep(a, function (g) {
            return g === b === f
        });
        else if (typeof b === "string") {
            var h = c.grep(a, function (g) {
                return g.nodeType === 1
            });
            if (I.test(b)) return c.filter(b, h, !f);
            else b = c.filter(b, h)
        }
        return c.grep(a, function (g) {
            return c.inArray(g, b) >= 0 === f
        })
    };
    c.fn.extend({
        find: function (a) {
            for (var b = this.pushStack("", "find", a), f = 0, h = 0, g = this.length; h < g; h++) {
                f = b.length;
                c.find(a, this[h], b);
                if (h > 0) for (var r = f; r < b.length; r++) for (var q = 0; q < f; q++) if (b[q] === b[r]) {
                    b.splice(r--, 1);
                    break
                }
            }
            return b
        },
        has: function (a) {
            var b = c(a);
            return this.filter(function () {
                for (var f = 0, h = b.length; f < h; f++) if (c.contains(this, b[f])) return true
            })
        },
        not: function (a) {
            return this.pushStack(db(this, a, false), "not", a)
        },
        filter: function (a) {
            return this.pushStack(db(this, a, true), "filter", a)
        },
        is: function (a) {
            return !!a && c.filter(a, this).length > 0
        },
        closest: function (a, b) {
            if (c.isArray(a)) {
                var f = [],
                    h = this[0],
                    g, r = {}, q;
                if (h && a.length) {
                    g = 0;
                    for (var B = a.length; g < B; g++) {
                        q = a[g];
                        r[q] || (r[q] = c.expr.match.POS.test(q) ? c(q, b || this.context) : q)
                    }
                    for (; h && h.ownerDocument && h !== b;) {
                        for (q in r) {
                            g = r[q];
                            if (g.jquery ? g.index(h) > -1 : c(h).is(g)) {
                                f.push({
                                    selector: q,
                                    elem: h
                                });
                                delete r[q]
                            }
                        }
                        h = h.parentNode
                    }
                }
                return f
            }
            var w = c.expr.match.POS.test(a) ? c(a, b || this.context) : null;
            return this.map(function (A, K) {
                for (; K && K.ownerDocument && K !== b;) {
                    if (w ? w.index(K) > -1 : c(K).is(a)) return K;
                    K = K.parentNode
                }
                return null
            })
        },
        index: function (a) {
            if (!a || typeof a === "string") return c.inArray(this[0], a ? c(a) : this.parent().children());
            return c.inArray(a.jquery ? a[0] : a, this)
        },
        add: function (a, b) {
            a = typeof a === "string" ? c(a, b || this.context) : c.makeArray(a);
            b = c.merge(this.get(), a);
            return this.pushStack(la(a[0]) || la(b[0]) ? b : c.unique(b))
        },
        andSelf: function () {
            return this.add(this.prevObject)
        }
    });
    c.each({
        parent: function (a) {
            return (a = a.parentNode) && a.nodeType !== 11 ? a : null
        },
        parents: function (a) {
            return c.dir(a, "parentNode")
        },
        parentsUntil: function (a, b, f) {
            return c.dir(a, "parentNode", f)
        },
        next: function (a) {
            return c.nth(a, 2, "nextSibling")
        },
        prev: function (a) {
            return c.nth(a,
            2, "previousSibling")
        },
        nextAll: function (a) {
            return c.dir(a, "nextSibling")
        },
        prevAll: function (a) {
            return c.dir(a, "previousSibling")
        },
        nextUntil: function (a, b, f) {
            return c.dir(a, "nextSibling", f)
        },
        prevUntil: function (a, b, f) {
            return c.dir(a, "previousSibling", f)
        },
        siblings: function (a) {
            return c.sibling(a.parentNode.firstChild, a)
        },
        children: function (a) {
            return c.sibling(a.firstChild)
        },
        contents: function (a) {
            return c.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : c.makeArray(a.childNodes)
        }
    }, function (a,
    b) {
        c.fn[a] = function (f, h) {
            var g = c.map(this, b, f);
            ya.test(a) || (h = f);
            if (h && typeof h === "string") g = c.filter(h, g);
            g = this.length > 1 ? c.unique(g) : g;
            if ((this.length > 1 || Ka.test(h)) && Ja.test(a)) g = g.reverse();
            return this.pushStack(g, a, va.call(arguments).join(","))
        }
    });
    c.extend({
        filter: function (a, b, f) {
            if (f) a = ":not(" + a + ")";
            return c.find.matches(a, b)
        },
        dir: function (a, b, f) {
            var h = [];
            for (a = a[b]; a && a.nodeType !== 9 && (f === i || a.nodeType !== 1 || !c(a).is(f));) {
                a.nodeType === 1 && h.push(a);
                a = a[b]
            }
            return h
        },
        nth: function (a, b, f) {
            b = b || 1;
            for (var h = 0; a; a = a[f]) if (a.nodeType === 1 && ++h === b) break;
            return a
        },
        sibling: function (a, b) {
            for (var f = []; a; a = a.nextSibling) a.nodeType === 1 && a !== b && f.push(a);
            return f
        }
    });
    var eb = / jQuery\d+="(?:\d+|null)"/g,
        Sa = /^\s+/,
        fb = /(<([\w:]+)[^>]*?)\/>/g,
        lb = /^(?:area|br|col|embed|hr|img|input|link|meta|param)$/i,
        gb = /<([\w:]+)/,
        mb = /<tbody/i,
        nb = /<|&#?\w+;/,
        $a = /<script|<object|<embed|<option|<style/i,
        ab = /checked\s*(?:[^=]|=\s*.checked.)/i,
        hb = function (a, b, f) {
            return lb.test(f) ? a : b + "></" + f + ">"
        }, ra = {
            option: [1, "<select multiple='multiple'>",
                "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            area: [1, "<map>", "</map>"],
            _default: [0, "", ""]
        };
    ra.optgroup = ra.option;
    ra.tbody = ra.tfoot = ra.colgroup = ra.caption = ra.thead;
    ra.th = ra.td;
    if (!c.support.htmlSerialize) ra._default = [1, "div<div>", "</div>"];
    c.fn.extend({
        text: function (a) {
            if (c.isFunction(a)) return this.each(function (b) {
                var f = c(this);
                f.text(a.call(this, b, f.text()))
            });
            if (typeof a !== "object" && a !== i) return this.empty().append((this[0] && this[0].ownerDocument || D).createTextNode(a));
            return c.text(this)
        },
        wrapAll: function (a) {
            if (c.isFunction(a)) return this.each(function (f) {
                c(this).wrapAll(a.call(this, f))
            });
            if (this[0]) {
                var b = c(a, this[0].ownerDocument).eq(0).clone(true);
                this[0].parentNode && b.insertBefore(this[0]);
                b.map(function () {
                    for (var f = this; f.firstChild && f.firstChild.nodeType === 1;) f = f.firstChild;
                    return f
                }).append(this)
            }
            return this
        },
        wrapInner: function (a) {
            if (c.isFunction(a)) return this.each(function (b) {
                c(this).wrapInner(a.call(this, b))
            });
            return this.each(function () {
                var b = c(this),
                    f = b.contents();
                f.length ? f.wrapAll(a) : b.append(a)
            })
        },
        wrap: function (a) {
            return this.each(function () {
                c(this).wrapAll(a)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                c.nodeName(this, "body") || c(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function () {
            return this.domManip(arguments, true, function (a) {
                this.nodeType === 1 && this.appendChild(a)
            })
        },
        prepend: function () {
            return this.domManip(arguments, true, function (a) {
                this.nodeType === 1 && this.insertBefore(a, this.firstChild)
            })
        },
        before: function () {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, false, function (b) {
                this.parentNode.insertBefore(b, this)
            });
            else if (arguments.length) {
                var a = c(arguments[0]);
                a.push.apply(a, this.toArray());
                return this.pushStack(a, "before", arguments)
            }
        },
        after: function () {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, false, function (b) {
                this.parentNode.insertBefore(b,
                this.nextSibling)
            });
            else if (arguments.length) {
                var a = this.pushStack(this, "after", arguments);
                a.push.apply(a, c(arguments[0]).toArray());
                return a
            }
        },
        remove: function (a, b) {
            for (var f = 0, h;
            (h = this[f]) != null; f++) if (!a || c.filter(a, [h]).length) {
                if (!b && h.nodeType === 1) {
                    c.cleanData(h.getElementsByTagName("*"));
                    c.cleanData([h])
                }
                h.parentNode && h.parentNode.removeChild(h)
            }
            return this
        },
        empty: function () {
            for (var a = 0, b;
            (b = this[a]) != null; a++) for (b.nodeType === 1 && c.cleanData(b.getElementsByTagName("*")); b.firstChild;) b.removeChild(b.firstChild);
            return this
        },
        clone: function (a) {
            var b = this.map(function () {
                if (!c.support.noCloneEvent && !c.isXMLDoc(this)) {
                    var f = this.outerHTML,
                        h = this.ownerDocument;
                    if (!f) {
                        f = h.createElement("div");
                        f.appendChild(this.cloneNode(true));
                        f = f.innerHTML
                    }
                    return c.clean([f.replace(eb, "").replace(/=([^="'>\s]+\/)>/g, '="$1">').replace(Sa, "")], h)[0]
                } else return this.cloneNode(true)
            });
            if (a === true) {
                Aa(this, b);
                Aa(this.find("*"), b.find("*"))
            }
            return b
        },
        html: function (a) {
            if (a === i) return this[0] && this[0].nodeType === 1 ? this[0].innerHTML.replace(eb,
                "") : null;
            else if (typeof a === "string" && !$a.test(a) && (c.support.leadingWhitespace || !Sa.test(a)) && !ra[(gb.exec(a) || ["", ""])[1].toLowerCase()]) {
                a = a.replace(fb, hb);
                try {
                    for (var b = 0, f = this.length; b < f; b++) if (this[b].nodeType === 1) {
                        c.cleanData(this[b].getElementsByTagName("*"));
                        this[b].innerHTML = a
                    }
                } catch (h) {
                    this.empty().append(a)
                }
            } else c.isFunction(a) ? this.each(function (g) {
                var r = c(this),
                    q = r.html();
                r.empty().append(function () {
                    return a.call(this, g, q)
                })
            }) : this.empty().append(a);
            return this
        },
        replaceWith: function (a) {
            if (this[0] && this[0].parentNode) {
                if (c.isFunction(a)) return this.each(function (b) {
                    var f = c(this),
                        h = f.html();
                    f.replaceWith(a.call(this, b, h))
                });
                if (typeof a !== "string") a = c(a).detach();
                return this.each(function () {
                    var b = this.nextSibling,
                        f = this.parentNode;
                    c(this).remove();
                    b ? c(b).before(a) : c(f).append(a)
                })
            } else return this.pushStack(c(c.isFunction(a) ? a() : a), "replaceWith", a)
        },
        detach: function (a) {
            return this.remove(a, true)
        },
        domManip: function (a, b, f) {
            function h(Q) {
                return c.nodeName(Q, "table") ? Q.getElementsByTagName("tbody")[0] || Q.appendChild(Q.ownerDocument.createElement("tbody")) : Q
            }
            var g, r, q = a[0],
                B = [],
                w;
            if (!c.support.checkClone && arguments.length === 3 && typeof q === "string" && ab.test(q)) return this.each(function () {
                c(this).domManip(a, b, f, true)
            });
            if (c.isFunction(q)) return this.each(function (Q) {
                var Y = c(this);
                a[0] = q.call(this, Q, b ? Y.html() : i);
                Y.domManip(a, b, f)
            });
            if (this[0]) {
                g = q && q.parentNode;
                g = c.support.parentNode && g && g.nodeType === 11 && g.childNodes.length === this.length ? {
                    fragment: g
                } : ma(a, this, B);
                w = g.fragment;
                if (r = w.childNodes.length === 1 ? (w = w.firstChild) : w.firstChild) {
                    b = b && c.nodeName(r, "tr");
                    for (var A = 0, K = this.length; A < K; A++) f.call(b ? h(this[A], r) : this[A], A > 0 || g.cacheable || this.length > 1 ? w.cloneNode(true) : w)
                }
                B.length && c.each(B, l)
            }
            return this
        }
    });
    c.fragments = {};
    c.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (a, b) {
        c.fn[a] = function (f) {
            var h = [];
            f = c(f);
            var g = this.length === 1 && this[0].parentNode;
            if (g && g.nodeType === 11 && g.childNodes.length === 1 && f.length === 1) {
                f[b](this[0]);
                return this
            } else {
                g = 0;
                for (var r = f.length; g < r; g++) {
                    var q = (g > 0 ? this.clone(true) : this).get();
                    c.fn[b].apply(c(f[g]), q);
                    h = h.concat(q)
                }
                return this.pushStack(h, a, f.selector)
            }
        }
    });
    c.extend({
        clean: function (a, b, f, h) {
            b = b || D;
            if (typeof b.createElement === "undefined") b = b.ownerDocument || b[0] && b[0].ownerDocument || D;
            for (var g = [], r = 0, q;
            (q = a[r]) != null; r++) {
                if (typeof q === "number") q += "";
                if (q) {
                    if (typeof q === "string" && !nb.test(q)) q = b.createTextNode(q);
                    else if (typeof q === "string") {
                        q = q.replace(fb, hb);
                        var B = (gb.exec(q) || ["",
                            ""])[1].toLowerCase(),
                            w = ra[B] || ra._default,
                            A = w[0],
                            K = b.createElement("div");
                        for (K.innerHTML = w[1] + q + w[2]; A--;) K = K.lastChild;
                        if (!c.support.tbody) {
                            A = mb.test(q);
                            B = B === "table" && !A ? K.firstChild && K.firstChild.childNodes : w[1] === "<table>" && !A ? K.childNodes : [];
                            for (w = B.length - 1; w >= 0; --w) c.nodeName(B[w], "tbody") && !B[w].childNodes.length && B[w].parentNode.removeChild(B[w])
                        }!c.support.leadingWhitespace && Sa.test(q) && K.insertBefore(b.createTextNode(Sa.exec(q)[0]), K.firstChild);
                        q = K.childNodes
                    }
                    if (q.nodeType) g.push(q);
                    else g = c.merge(g, q)
                }
            }
            if (f) for (r = 0; g[r]; r++) if (h && c.nodeName(g[r], "script") && (!g[r].type || g[r].type.toLowerCase() === "text/javascript")) h.push(g[r].parentNode ? g[r].parentNode.removeChild(g[r]) : g[r]);
            else {
                g[r].nodeType === 1 && g.splice.apply(g, [r + 1, 0].concat(c.makeArray(g[r].getElementsByTagName("script"))));
                f.appendChild(g[r])
            }
            return g
        },
        cleanData: function (a) {
            for (var b, f, h = c.cache, g = c.event.special, r = c.support.deleteExpando, q = 0, B;
            (B = a[q]) != null; q++) if (f = B[c.expando]) {
                b = h[f];
                if (b.events) for (var w in b.events) g[w] ? c.event.remove(B, w) : N(B, w, b.handle);
                if (r) delete B[c.expando];
                else B.removeAttribute && B.removeAttribute(c.expando);
                delete h[f]
            }
        }
    });
    var ob = /z-?index|font-?weight|opacity|zoom|line-?height/i,
        ib = /alpha\([^)]*\)/,
        jb = /opacity=([^)]*)/,
        Va = /float/i,
        Wa = /-([a-z])/ig,
        pb = /([A-Z])/g,
        qb = /^-?\d+(?:px)?$/i,
        rb = /^-?\d/,
        sb = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }, tb = ["Left", "Right"],
        ub = ["Top", "Bottom"],
        vb = D.defaultView && D.defaultView.getComputedStyle,
        kb = c.support.cssFloat ? "cssFloat" : "styleFloat",
        Xa = function (a, b) {
            return b.toUpperCase()
        };
    c.fn.css = function (a, b) {
        return t(this, a, b, true, function (f, h, g) {
            if (g === i) return c.curCSS(f, h);
            if (typeof g === "number" && !ob.test(h)) g += "px";
            c.style(f, h, g)
        })
    };
    c.extend({
        style: function (a, b, f) {
            if (!a || a.nodeType === 3 || a.nodeType === 8) return i;
            if ((b === "width" || b === "height") && parseFloat(f) < 0) f = i;
            var h = a.style || a,
                g = f !== i;
            if (!c.support.opacity && b === "opacity") {
                if (g) {
                    h.zoom = 1;
                    b = parseInt(f, 10) + "" === "NaN" ? "" : "alpha(opacity=" + f * 100 + ")";
                    a = h.filter || c.curCSS(a, "filter") || "";
                    h.filter = ib.test(a) ? a.replace(ib, b) : b
                }
                return h.filter && h.filter.indexOf("opacity=") >= 0 ? parseFloat(jb.exec(h.filter)[1]) / 100 + "" : ""
            }
            if (Va.test(b)) b = kb;
            b = b.replace(Wa, Xa);
            if (g) h[b] = f;
            return h[b]
        },
        css: function (a, b, f, h) {
            if (b === "width" || b === "height") {
                var g, r = b === "width" ? tb : ub;

                function q() {
                    g = b === "width" ? a.offsetWidth : a.offsetHeight;
                    h !== "border" && c.each(r, function () {
                        h || (g -= parseFloat(c.curCSS(a, "padding" + this, true)) || 0);
                        if (h === "margin") g += parseFloat(c.curCSS(a, "margin" + this, true)) || 0;
                        else g -= parseFloat(c.curCSS(a,
                            "border" + this + "Width", true)) || 0
                    })
                }
                a.offsetWidth !== 0 ? q() : c.swap(a, sb, q);
                return Math.max(0, Math.round(g))
            }
            return c.curCSS(a, b, f)
        },
        curCSS: function (a, b, f) {
            var h, g = a.style;
            if (!c.support.opacity && b === "opacity" && a.currentStyle) {
                h = jb.test(a.currentStyle.filter || "") ? parseFloat(RegExp.$1) / 100 + "" : "";
                return h === "" ? "1" : h
            }
            if (Va.test(b)) b = kb;
            if (!f && g && g[b]) h = g[b];
            else if (vb) {
                if (Va.test(b)) b = "float";
                b = b.replace(pb, "-$1").toLowerCase();
                g = a.ownerDocument.defaultView;
                if (!g) return null;
                if (a = g.getComputedStyle(a, null)) h = a.getPropertyValue(b);
                if (b === "opacity" && h === "") h = "1"
            } else if (a.currentStyle) {
                f = b.replace(Wa, Xa);
                h = a.currentStyle[b] || a.currentStyle[f];
                if (!qb.test(h) && rb.test(h)) {
                    b = g.left;
                    var r = a.runtimeStyle.left;
                    a.runtimeStyle.left = a.currentStyle.left;
                    g.left = f === "fontSize" ? "1em" : h || 0;
                    h = g.pixelLeft + "px";
                    g.left = b;
                    a.runtimeStyle.left = r
                }
            }
            return h
        },
        swap: function (a, b, f) {
            var h = {};
            for (var g in b) {
                h[g] = a.style[g];
                a.style[g] = b[g]
            }
            f.call(a);
            for (g in b) a.style[g] = h[g]
        }
    });
    if (c.expr && c.expr.filters) {
        c.expr.filters.hidden = function (a) {
            var b = a.offsetWidth,
                f = a.offsetHeight,
                h = a.nodeName.toLowerCase() === "tr";
            return b === 0 && f === 0 && !h ? true : b > 0 && f > 0 && !h ? false : c.curCSS(a, "display") === "none"
        };
        c.expr.filters.visible = function (a) {
            return !c.expr.filters.hidden(a)
        }
    }
    var wb = m(),
        xb = /<script(.|\s)*?\/script>/gi,
        yb = /select|textarea/i,
        zb = /color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week/i,
        La = /=\?(&|$)/,
        Ya = /\?/,
        Ab = /(\?|&)_=.*?(&|$)/,
        Bb = /^(\w+:)?\/\/([^\/?#]+)/,
        Cb = /%20/g,
        Db = c.fn.load;
    c.fn.extend({
        load: function (a, b,
        f) {
            if (typeof a !== "string") return Db.call(this, a);
            else if (!this.length) return this;
            var h = a.indexOf(" ");
            if (h >= 0) {
                var g = a.slice(h, a.length);
                a = a.slice(0, h)
            }
            h = "GET";
            if (b) if (c.isFunction(b)) {
                f = b;
                b = null
            } else if (typeof b === "object") {
                b = c.param(b, c.ajaxSettings.traditional);
                h = "POST"
            }
            var r = this;
            c.ajax({
                url: a,
                type: h,
                dataType: "html",
                data: b,
                complete: function (q, B) {
                    if (B === "success" || B === "notmodified") r.html(g ? c("<div />").append(q.responseText.replace(xb, "")).find(g) : q.responseText);
                    f && r.each(f, [q.responseText,
                    B, q])
                }
            });
            return this
        },
        serialize: function () {
            return c.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                return this.elements ? c.makeArray(this.elements) : this
            }).filter(function () {
                return this.name && !this.disabled && (this.checked || yb.test(this.nodeName) || zb.test(this.type))
            }).map(function (a, b) {
                a = c(this).val();
                return a == null ? null : c.isArray(a) ? c.map(a, function (f) {
                    return {
                        name: b.name,
                        value: f
                    }
                }) : {
                    name: b.name,
                    value: a
                }
            }).get()
        }
    });
    c.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),

    function (a, b) {
        c.fn[b] = function (f) {
            return this.bind(b, f)
        }
    });
    c.extend({
        get: function (a, b, f, h) {
            if (c.isFunction(b)) {
                h = h || f;
                f = b;
                b = null
            }
            return c.ajax({
                type: "GET",
                url: a,
                data: b,
                success: f,
                dataType: h
            })
        },
        getScript: function (a, b) {
            return c.get(a, null, b, "script")
        },
        getJSON: function (a, b, f) {
            return c.get(a, b, f, "json")
        },
        post: function (a, b, f, h) {
            if (c.isFunction(b)) {
                h = h || f;
                f = b;
                b = {}
            }
            return c.ajax({
                type: "POST",
                url: a,
                data: b,
                success: f,
                dataType: h
            })
        },
        ajaxSetup: function (a) {
            c.extend(c.ajaxSettings, a)
        },
        ajaxSettings: {
            url: location.href,
            global: true,
            type: "GET",
            contentType: "application/x-www-form-urlencoded",
            processData: true,
            async: true,
            xhr: p.XMLHttpRequest && (p.location.protocol !== "file:" || !p.ActiveXObject) ? function () {
                return new p.XMLHttpRequest
            } : function () {
                try {
                    return new p.ActiveXObject("Microsoft.XMLHTTP")
                } catch (a) {}
            },
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                script: "text/javascript, application/javascript",
                json: "application/json, text/javascript",
                text: "text/plain",
                _default: "*/*"
            }
        },
        lastModified: {},
        etag: {},
        ajax: function (a) {
            function b() {
                g.success && g.success.call(w, B, q, U);
                g.global && h("ajaxSuccess", [U, g])
            }
            function f() {
                g.complete && g.complete.call(w, U, q);
                g.global && h("ajaxComplete", [U, g]);
                g.global && !--c.active && c.event.trigger("ajaxStop")
            }
            function h(G, F) {
                (g.context ? c(g.context) : c.event).trigger(G, F)
            }
            var g = c.extend(true, {}, c.ajaxSettings, a),
                r, q, B, w = a && a.context || g,
                A = g.type.toUpperCase();
            if (g.data && g.processData && typeof g.data !== "string") g.data = c.param(g.data, g.traditional);
            if (g.dataType === "jsonp") {
                if (A === "GET") La.test(g.url) || (g.url += (Ya.test(g.url) ?
                    "&" : "?") + (g.jsonp || "callback") + "=?");
                else if (!g.data || !La.test(g.data)) g.data = (g.data ? g.data + "&" : "") + (g.jsonp || "callback") + "=?";
                g.dataType = "json"
            }
            if (g.dataType === "json" && (g.data && La.test(g.data) || La.test(g.url))) {
                r = g.jsonpCallback || "jsonp" + wb++;
                if (g.data) g.data = (g.data + "").replace(La, "=" + r + "$1");
                g.url = g.url.replace(La, "=" + r + "$1");
                g.dataType = "script";
                p[r] = p[r] || function (G) {
                    B = G;
                    b();
                    f();
                    p[r] = i;
                    try {
                        delete p[r]
                    } catch (F) {}
                    Y && Y.removeChild(ha)
                }
            }
            if (g.dataType === "script" && g.cache === null) g.cache = false;
            if (g.cache === false && A === "GET") {
                var K = m(),
                    Q = g.url.replace(Ab, "$1_=" + K + "$2");
                g.url = Q + (Q === g.url ? (Ya.test(g.url) ? "&" : "?") + "_=" + K : "")
            }
            if (g.data && A === "GET") g.url += (Ya.test(g.url) ? "&" : "?") + g.data;
            g.global && !c.active++ && c.event.trigger("ajaxStart");
            K = (K = Bb.exec(g.url)) && (K[1] && K[1] !== location.protocol || K[2] !== location.host);
            if (g.dataType === "script" && A === "GET" && K) {
                var Y = D.getElementsByTagName("head")[0] || D.documentElement,
                    ha = D.createElement("script");
                ha.src = g.url;
                if (g.scriptCharset) ha.charset = g.scriptCharset;
                if (!r) {
                    var fa = false;
                    ha.onload = ha.onreadystatechange = function () {
                        if (!fa && (!this.readyState || this.readyState === "loaded" || this.readyState === "complete")) {
                            fa = true;
                            b();
                            f();
                            ha.onload = ha.onreadystatechange = null;
                            Y && ha.parentNode && Y.removeChild(ha)
                        }
                    }
                }
                Y.insertBefore(ha, Y.firstChild);
                return i
            }
            var qa = false,
                U = g.xhr();
            if (U) {
                g.username ? U.open(A, g.url, g.async, g.username, g.password) : U.open(A, g.url, g.async);
                try {
                    if (g.data || a && a.contentType) U.setRequestHeader("Content-Type", g.contentType);
                    if (g.ifModified) {
                        c.lastModified[g.url] && U.setRequestHeader("If-Modified-Since",
                        c.lastModified[g.url]);
                        c.etag[g.url] && U.setRequestHeader("If-None-Match", c.etag[g.url])
                    }
                    K || U.setRequestHeader("X-Requested-With", "XMLHttpRequest");
                    U.setRequestHeader("Accept", g.dataType && g.accepts[g.dataType] ? g.accepts[g.dataType] + ", */*" : g.accepts._default)
                } catch (Ua) {}
                if (g.beforeSend && g.beforeSend.call(w, U, g) === false) {
                    g.global && !--c.active && c.event.trigger("ajaxStop");
                    U.abort();
                    return false
                }
                g.global && h("ajaxSend", [U, g]);
                var j = U.onreadystatechange = function (G) {
                    if (!U || U.readyState === 0 || G === "abort") {
                        qa || f();
                        qa = true;
                        if (U) U.onreadystatechange = c.noop
                    } else if (!qa && U && (U.readyState === 4 || G === "timeout")) {
                        qa = true;
                        U.onreadystatechange = c.noop;
                        q = G === "timeout" ? "timeout" : !c.httpSuccess(U) ? "error" : g.ifModified && c.httpNotModified(U, g.url) ? "notmodified" : "success";
                        var F;
                        if (q === "success") try {
                            B = c.httpData(U, g.dataType, g)
                        } catch (S) {
                            q = "parsererror";
                            F = S
                        }
                        if (q === "success" || q === "notmodified") r || b();
                        else c.handleError(g, U, q, F);
                        f();
                        G === "timeout" && U.abort();
                        if (g.async) U = null
                    }
                };
                try {
                    var n = U.abort;
                    U.abort = function () {
                        U && n.call(U);
                        j("abort")
                    }
                } catch (x) {}
                g.async && g.timeout > 0 && setTimeout(function () {
                    U && !qa && j("timeout")
                }, g.timeout);
                try {
                    U.send(A === "POST" || A === "PUT" || A === "DELETE" ? g.data : null)
                } catch (z) {
                    c.handleError(g, U, null, z);
                    f()
                }
                g.async || j();
                return U
            }
        },
        handleError: function (a, b, f, h) {
            if (a.error) a.error.call(a.context || a, b, f, h);
            if (a.global)(a.context ? c(a.context) : c.event).trigger("ajaxError", [b, a, h])
        },
        active: 0,
        httpSuccess: function (a) {
            try {
                return !a.status && location.protocol === "file:" || a.status >= 200 && a.status < 300 || a.status === 304 || a.status === 1223 || a.status === 0
            } catch (b) {}
            return false
        },
        httpNotModified: function (a, b) {
            var f = a.getResponseHeader("Last-Modified"),
                h = a.getResponseHeader("Etag");
            if (f) c.lastModified[b] = f;
            if (h) c.etag[b] = h;
            return a.status === 304 || a.status === 0
        },
        httpData: function (a, b, f) {
            var h = a.getResponseHeader("content-type") || "",
                g = b === "xml" || !b && h.indexOf("xml") >= 0;
            a = g ? a.responseXML : a.responseText;
            g && a.documentElement.nodeName === "parsererror" && c.error("parsererror");
            if (f && f.dataFilter) a = f.dataFilter(a, b);
            if (typeof a === "string") if (b ===
                "json" || !b && h.indexOf("json") >= 0) a = c.parseJSON(a);
            else if (b === "script" || !b && h.indexOf("javascript") >= 0) c.globalEval(a);
            return a
        },
        param: function (a, b) {
            function f(q, B) {
                if (c.isArray(B)) c.each(B, function (w, A) {
                    b || /\[\]$/.test(q) ? h(q, A) : f(q + "[" + (typeof A === "object" || c.isArray(A) ? w : "") + "]", A)
                });
                else !b && B != null && typeof B === "object" ? c.each(B, function (w, A) {
                    f(q + "[" + w + "]", A)
                }) : h(q, B)
            }
            function h(q, B) {
                B = c.isFunction(B) ? B() : B;
                g[g.length] = encodeURIComponent(q) + "=" + encodeURIComponent(B)
            }
            var g = [];
            if (b === i) b = c.ajaxSettings.traditional;
            if (c.isArray(a) || a.jquery) c.each(a, function () {
                h(this.name, this.value)
            });
            else for (var r in a) f(r, a[r]);
            return g.join("&").replace(Cb, "+")
        }
    });
    var Za = {}, Eb = /toggle|show|hide/,
        Fb = /^([+-]=)?([\d+-.]+)(.*)$/,
        Ta, bb = [
            ["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"],
            ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"],
            ["opacity"]
        ];
    c.fn.extend({
        show: function (a, b) {
            if (a || a === 0) return this.animate(na("show", 3), a, b);
            else {
                a = 0;
                for (b = this.length; a < b; a++) {
                    var f = c.data(this[a], "olddisplay");
                    this[a].style.display = f || "";
                    if (c.css(this[a], "display") === "none") {
                        f = this[a].nodeName;
                        var h;
                        if (Za[f]) h = Za[f];
                        else {
                            var g = c("<" + f + " />").appendTo("body");
                            h = g.css("display");
                            if (h === "none") h = "block";
                            g.remove();
                            Za[f] = h
                        }
                        c.data(this[a], "olddisplay", h)
                    }
                }
                a = 0;
                for (b = this.length; a < b; a++) this[a].style.display = c.data(this[a], "olddisplay") || "";
                return this
            }
        },
        hide: function (a, b) {
            if (a || a === 0) return this.animate(na("hide", 3), a, b);
            else {
                a = 0;
                for (b = this.length; a < b; a++) {
                    var f = c.data(this[a], "olddisplay");
                    !f && f !== "none" && c.data(this[a],
                        "olddisplay", c.css(this[a], "display"))
                }
                a = 0;
                for (b = this.length; a < b; a++) this[a].style.display = "none";
                return this
            }
        },
        _toggle: c.fn.toggle,
        toggle: function (a, b) {
            var f = typeof a === "boolean";
            if (c.isFunction(a) && c.isFunction(b)) this._toggle.apply(this, arguments);
            else a == null || f ? this.each(function () {
                var h = f ? a : c(this).is(":hidden");
                c(this)[h ? "show" : "hide"]()
            }) : this.animate(na("toggle", 3), a, b);
            return this
        },
        fadeTo: function (a, b, f) {
            return this.filter(":hidden").css("opacity", 0).show().end().animate({
                opacity: b
            }, a, f)
        },
        animate: function (a, b, f, h) {
            var g = c.speed(b, f, h);
            if (c.isEmptyObject(a)) return this.each(g.complete);
            return this[g.queue === false ? "each" : "queue"](function () {
                var r = c.extend({}, g),
                    q, B = this.nodeType === 1 && c(this).is(":hidden"),
                    w = this;
                for (q in a) {
                    var A = q.replace(Wa, Xa);
                    if (q !== A) {
                        a[A] = a[q];
                        delete a[q];
                        q = A
                    }
                    if (a[q] === "hide" && B || a[q] === "show" && !B) return r.complete.call(this);
                    if ((q === "height" || q === "width") && this.style) {
                        r.display = c.css(this, "display");
                        r.overflow = this.style.overflow
                    }
                    if (c.isArray(a[q])) {
                        (r.specialEasing = r.specialEasing || {})[q] = a[q][1];
                        a[q] = a[q][0]
                    }
                }
                if (r.overflow != null) this.style.overflow = "hidden";
                r.curAnim = c.extend({}, a);
                c.each(a, function (K, Q) {
                    var Y = new c.fx(w, r, K);
                    if (Eb.test(Q)) Y[Q === "toggle" ? B ? "show" : "hide" : Q](a);
                    else {
                        var ha = Fb.exec(Q),
                            fa = Y.cur(true) || 0;
                        if (ha) {
                            Q = parseFloat(ha[2]);
                            var qa = ha[3] || "px";
                            if (qa !== "px") {
                                w.style[K] = (Q || 1) + qa;
                                fa = (Q || 1) / Y.cur(true) * fa;
                                w.style[K] = fa + qa
                            }
                            if (ha[1]) Q = (ha[1] === "-=" ? -1 : 1) * Q + fa;
                            Y.custom(fa, Q, qa)
                        } else Y.custom(fa, Q, "")
                    }
                });
                return true
            })
        },
        stop: function (a, b) {
            var f = c.timers;
            a && this.queue([]);
            this.each(function () {
                for (var h = f.length - 1; h >= 0; h--) if (f[h].elem === this) {
                    b && f[h](true);
                    f.splice(h, 1)
                }
            });
            b || this.dequeue();
            return this
        }
    });
    c.each({
        slideDown: na("show", 1),
        slideUp: na("hide", 1),
        slideToggle: na("toggle", 1),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        }
    }, function (a, b) {
        c.fn[a] = function (f, h) {
            return this.animate(b, f, h)
        }
    });
    c.extend({
        speed: function (a, b, f) {
            var h = a && typeof a === "object" ? a : {
                complete: f || !f && b || c.isFunction(a) && a,
                duration: a,
                easing: f && b || b && !c.isFunction(b) && b
            };
            h.duration = c.fx.off ? 0 : typeof h.duration === "number" ? h.duration : c.fx.speeds[h.duration] || c.fx.speeds._default;
            h.old = h.complete;
            h.complete = function () {
                h.queue !== false && c(this).dequeue();
                c.isFunction(h.old) && h.old.call(this)
            };
            return h
        },
        easing: {
            linear: function (a, b, f, h) {
                return f + h * a
            },
            swing: function (a, b, f, h) {
                return (-Math.cos(a * Math.PI) / 2 + 0.5) * h + f
            }
        },
        timers: [],
        fx: function (a, b, f) {
            this.options = b;
            this.elem = a;
            this.prop = f;
            if (!b.orig) b.orig = {}
        }
    });
    c.fx.prototype = {
        update: function () {
            this.options.step && this.options.step.call(this.elem,
            this.now, this);
            (c.fx.step[this.prop] || c.fx.step._default)(this);
            if ((this.prop === "height" || this.prop === "width") && this.elem.style) this.elem.style.display = "block"
        },
        cur: function (a) {
            if (this.elem[this.prop] != null && (!this.elem.style || this.elem.style[this.prop] == null)) return this.elem[this.prop];
            return (a = parseFloat(c.css(this.elem, this.prop, a))) && a > -10000 ? a : parseFloat(c.curCSS(this.elem, this.prop)) || 0
        },
        custom: function (a, b, f) {
            function h(r) {
                return g.step(r)
            }
            this.startTime = m();
            this.start = a;
            this.end = b;
            this.unit = f || this.unit || "px";
            this.now = this.start;
            this.pos = this.state = 0;
            var g = this;
            h.elem = this.elem;
            if (h() && c.timers.push(h) && !Ta) Ta = setInterval(c.fx.tick, 13)
        },
        show: function () {
            this.options.orig[this.prop] = c.style(this.elem, this.prop);
            this.options.show = true;
            this.custom(this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur());
            c(this.elem).show()
        },
        hide: function () {
            this.options.orig[this.prop] = c.style(this.elem, this.prop);
            this.options.hide = true;
            this.custom(this.cur(), 0)
        },
        step: function (a) {
            var b = m(),
                f = true;
            if (a || b >= this.options.duration + this.startTime) {
                this.now = this.end;
                this.pos = this.state = 1;
                this.update();
                this.options.curAnim[this.prop] = true;
                for (var h in this.options.curAnim) if (this.options.curAnim[h] !== true) f = false;
                if (f) {
                    if (this.options.display != null) {
                        this.elem.style.overflow = this.options.overflow;
                        a = c.data(this.elem, "olddisplay");
                        this.elem.style.display = a ? a : this.options.display;
                        if (c.css(this.elem, "display") === "none") this.elem.style.display = "block"
                    }
                    this.options.hide && c(this.elem).hide();
                    if (this.options.hide || this.options.show) for (var g in this.options.curAnim) c.style(this.elem, g, this.options.orig[g]);
                    this.options.complete.call(this.elem)
                }
                return false
            } else {
                g = b - this.startTime;
                this.state = g / this.options.duration;
                a = this.options.easing || (c.easing.swing ? "swing" : "linear");
                this.pos = c.easing[this.options.specialEasing && this.options.specialEasing[this.prop] || a](this.state, g, 0, 1, this.options.duration);
                this.now = this.start + (this.end - this.start) * this.pos;
                this.update()
            }
            return true
        }
    };
    c.extend(c.fx, {
        tick: function () {
            for (var a = c.timers, b = 0; b < a.length; b++) a[b]() || a.splice(b--, 1);
            a.length || c.fx.stop()
        },
        stop: function () {
            clearInterval(Ta);
            Ta = null
        },
        speeds: {
            slow: 600,
            fast: 200,
            _default: 400
        },
        step: {
            opacity: function (a) {
                c.style(a.elem, "opacity", a.now)
            },
            _default: function (a) {
                if (a.elem.style && a.elem.style[a.prop] != null) a.elem.style[a.prop] = (a.prop === "width" || a.prop === "height" ? Math.max(0, a.now) : a.now) + a.unit;
                else a.elem[a.prop] = a.now
            }
        }
    });
    if (c.expr && c.expr.filters) c.expr.filters.animated = function (a) {
        return c.grep(c.timers, function (b) {
            return a === b.elem
        }).length
    };
    c.fn.offset = "getBoundingClientRect" in D.documentElement ? function (a) {
        var b = this[0];
        if (a) return this.each(function (g) {
            c.offset.setOffset(this, a, g)
        });
        if (!b || !b.ownerDocument) return null;
        if (b === b.ownerDocument.body) return c.offset.bodyOffset(b);
        var f = b.getBoundingClientRect(),
            h = b.ownerDocument;
        b = h.body;
        h = h.documentElement;
        return {
            top: f.top + (self.pageYOffset || c.support.boxModel && h.scrollTop || b.scrollTop) - (h.clientTop || b.clientTop || 0),
            left: f.left + (self.pageXOffset || c.support.boxModel && h.scrollLeft || b.scrollLeft) - (h.clientLeft || b.clientLeft || 0)
        }
    } : function (a) {
        var b = this[0];
        if (a) return this.each(function (K) {
            c.offset.setOffset(this, a, K)
        });
        if (!b || !b.ownerDocument) return null;
        if (b === b.ownerDocument.body) return c.offset.bodyOffset(b);
        c.offset.initialize();
        var f = b.offsetParent,
            h = b,
            g = b.ownerDocument,
            r, q = g.documentElement,
            B = g.body;
        h = (g = g.defaultView) ? g.getComputedStyle(b, null) : b.currentStyle;
        for (var w = b.offsetTop, A = b.offsetLeft;
        (b = b.parentNode) && b !== B && b !== q;) {
            if (c.offset.supportsFixedPosition && h.position ===
                "fixed") break;
            r = g ? g.getComputedStyle(b, null) : b.currentStyle;
            w -= b.scrollTop;
            A -= b.scrollLeft;
            if (b === f) {
                w += b.offsetTop;
                A += b.offsetLeft;
                if (c.offset.doesNotAddBorder && !(c.offset.doesAddBorderForTableAndCells && /^t(able|d|h)$/i.test(b.nodeName))) {
                    w += parseFloat(r.borderTopWidth) || 0;
                    A += parseFloat(r.borderLeftWidth) || 0
                }
                h = f;
                f = b.offsetParent
            }
            if (c.offset.subtractsBorderForOverflowNotVisible && r.overflow !== "visible") {
                w += parseFloat(r.borderTopWidth) || 0;
                A += parseFloat(r.borderLeftWidth) || 0
            }
            h = r
        }
        if (h.position === "relative" || h.position === "static") {
            w += B.offsetTop;
            A += B.offsetLeft
        }
        if (c.offset.supportsFixedPosition && h.position === "fixed") {
            w += Math.max(q.scrollTop, B.scrollTop);
            A += Math.max(q.scrollLeft, B.scrollLeft)
        }
        return {
            top: w,
            left: A
        }
    };
    c.offset = {
        initialize: function () {
            var a = D.body,
                b = D.createElement("div"),
                f, h, g, r = parseFloat(c.curCSS(a, "marginTop", true)) || 0;
            c.extend(b.style, {
                position: "absolute",
                top: 0,
                left: 0,
                margin: 0,
                border: 0,
                width: "1px",
                height: "1px",
                visibility: "hidden"
            });
            b.innerHTML = "<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
            a.insertBefore(b, a.firstChild);
            f = b.firstChild;
            h = f.firstChild;
            g = f.nextSibling.firstChild.firstChild;
            this.doesNotAddBorder = h.offsetTop !== 5;
            this.doesAddBorderForTableAndCells = g.offsetTop === 5;
            h.style.position = "fixed";
            h.style.top = "20px";
            this.supportsFixedPosition = h.offsetTop === 20 || h.offsetTop === 15;
            h.style.position = h.style.top = "";
            f.style.overflow = "hidden";
            f.style.position = "relative";
            this.subtractsBorderForOverflowNotVisible = h.offsetTop === -5;
            this.doesNotIncludeMarginInBodyOffset = a.offsetTop !== r;
            a.removeChild(b);
            c.offset.initialize = c.noop
        },
        bodyOffset: function (a) {
            var b = a.offsetTop,
                f = a.offsetLeft;
            c.offset.initialize();
            if (c.offset.doesNotIncludeMarginInBodyOffset) {
                b += parseFloat(c.curCSS(a, "marginTop", true)) || 0;
                f += parseFloat(c.curCSS(a, "marginLeft", true)) || 0
            }
            return {
                top: b,
                left: f
            }
        },
        setOffset: function (a, b, f) {
            if (/static/.test(c.curCSS(a, "position"))) a.style.position = "relative";
            var h = c(a),
                g = h.offset(),
                r = parseInt(c.curCSS(a, "top", true), 10) || 0,
                q = parseInt(c.curCSS(a, "left", true), 10) || 0;
            if (c.isFunction(b)) b = b.call(a,
            f, g);
            f = {
                top: b.top - g.top + r,
                left: b.left - g.left + q
            };
            "using" in b ? b.using.call(a, f) : h.css(f)
        }
    };
    c.fn.extend({
        position: function () {
            if (!this[0]) return null;
            var a = this[0],
                b = this.offsetParent(),
                f = this.offset(),
                h = /^body|html$/i.test(b[0].nodeName) ? {
                    top: 0,
                    left: 0
                } : b.offset();
            f.top -= parseFloat(c.curCSS(a, "marginTop", true)) || 0;
            f.left -= parseFloat(c.curCSS(a, "marginLeft", true)) || 0;
            h.top += parseFloat(c.curCSS(b[0], "borderTopWidth", true)) || 0;
            h.left += parseFloat(c.curCSS(b[0], "borderLeftWidth", true)) || 0;
            return {
                top: f.top - h.top,
                left: f.left - h.left
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var a = this.offsetParent || D.body; a && !/^body|html$/i.test(a.nodeName) && c.css(a, "position") === "static";) a = a.offsetParent;
                return a
            })
        }
    });
    c.each(["Left", "Top"], function (a, b) {
        var f = "scroll" + b;
        c.fn[f] = function (h) {
            var g = this[0],
                r;
            if (!g) return null;
            return h !== i ? this.each(function () {
                if (r = H(this)) r.scrollTo(!a ? h : c(r).scrollLeft(), a ? h : c(r).scrollTop());
                else this[f] = h
            }) : (r = H(g)) ? "pageXOffset" in r ? r[a ? "pageYOffset" : "pageXOffset"] : c.support.boxModel && r.document.documentElement[f] || r.document.body[f] : g[f]
        }
    });
    c.each(["Height", "Width"], function (a, b) {
        var f = b.toLowerCase();
        c.fn["inner" + b] = function () {
            return this[0] ? c.css(this[0], f, false, "padding") : null
        };
        c.fn["outer" + b] = function (h) {
            return this[0] ? c.css(this[0], f, false, h ? "margin" : "border") : null
        };
        c.fn[f] = function (h) {
            var g = this[0];
            if (!g) return h == null ? null : this;
            if (c.isFunction(h)) return this.each(function (r) {
                var q = c(this);
                q[f](h.call(this, r, q[f]()))
            });
            return "scrollTo" in g && g.document ? g.document.compatMode === "CSS1Compat" && g.document.documentElement["client" + b] || g.document.body["client" + b] : g.nodeType === 9 ? Math.max(g.documentElement["client" + b], g.body["scroll" + b], g.documentElement["scroll" + b], g.body["offset" + b], g.documentElement["offset" + b]) : h === i ? c.css(g, f) : this.css(f, typeof h === "string" ? h : h + "px")
        }
    });
    p.jQuery = p.$ = c
})(window);
(function () {
    var p = function () {}, i = p.prototype;
    i.global = {
        rootPath: "/",
        debugMode: true,
        stamp: Math.ceil(46118400291 * Math.random())
    };
    i.registered = [];
    i.afterStack = [];
    i.init = function (k) {
        var l = TT.registered;
        if (typeof k == "function") l[l.length] = k;
        else log.error("not a function", k)
    };
    i.initAfterStack = function (k) {
        var l = TT.afterStack;
        if (typeof k == "function") l[l.length] = k;
        else log.error("not a function", k)
    };
    i.cancelBubble = function (k) {
        if ($.support.opacity) k.stopPropagation();
        else window.event.cancelBubble = true;
        return false
    };
    i.undefined = function (k) {
        return k === undefined || k == null
    };
    i.parseComment = function (k, l) {
        k = l.indexOf("<!--" + k) + ("<!--" + k).length;
        var t = l.indexOf("--\>");
        return l.substring(k, t)
    };
    i.extend = function (k, l, t) {
        if (TT !== undefined) if (!(k === "" || k === "." || k === "undefined" || TT.undefined(k))) if (typeof l == "object") {
            var m = k.split("."),
                s = TT;
            if (m.length > 1) for (var v in m) if (v != m.length - 1) s = TT.undefined(s[m[v]]) ? (s[m[v]] = {}) : s[m[v]];
            else s[m[v]] = l;
            else s[m[0]] = l;
            if (TT.undefined(l.init)) throw "no init function attached to " + k;
            TT.undefined(t) || TT.init(t);
            TT.init(l.init);
            TT.log.debug("<< TT." + k + " >> extended and initialized")
        } else log.error("couldnt extend " + k, l)
    };
    i.extend_framework = function (k, l, t, m) {
        this.extend("FW." + k, l, t, m)
    };
    i.extend_website = function (k, l, t, m) {
        this.extend("WS." + k, l, t, m)
    };
    i.parent_TT = function () {
        return top.TT
    };
    i.is_iframe = function () {
        return TT.global.stamp != TT.parent_TT().global.stamp
    };
    i.mouse = {
        isLeftClick: function (k) {
            return k.button == 1 && window.event != null || k.button == 0
        }
    };
    i.cookie = {
        set: function (k, l, t) {
            k = k + "=" + escape(l) + ";";
            TT.undefined(t) || (k += "expires=" + (new Date(t)).toUTCString());
            log.debug("COOKIE:" + k);
            document.cookie = k
        },
        get: function (k) {
            if (document.cookie.length) {
                var l = document.cookie.indexOf(k + "=");
                if (l != -1) {
                    l += k.length + 1;
                    k = document.cookie.indexOf(";", l);
                    if (k == -1) k = document.cookie.length;
                    return unescape(document.cookie.substring(l, k))
                }
            }
            return ""
        }
    };
    i.mergeTemplate = function (k, l) {
        k = k;
        for (d in l) k = k.replace(new RegExp("[%]" + d + "[%]", "g"), l[d]);
        return k
    };
    i.tmp = {};
    TT = new p;
    jQuery(document).ready(function () {
        var k = (new Date).valueOf(),
            l = TT.registered;
        for (func in l) l[func]();
        k = (new Date).valueOf() - k;
        l = document.getElementById("js_init_time");
        if (l !== null) l.innerHTML = k + "ms";
        k > 200 && log.error("TOOK > 0.2 TO LOAD ~ " + k);
        TT.log.debug("READY (" + TT.global.stamp + ") " + window.location, k);
        k = TT.afterStack;
        for (func in k) k[func]()
    })
})();
(function () {
    function p(l, t) {
        log.ga.event("js-failure", l, t)
    }
    var i = function () {}, k = i.prototype;
    k.show = function () {
        return TT.global.debugMode && typeof console == "object" && typeof console.log == "function"
    };
    k.init = function () {};
    k.debug = function (l, t) {
        k.show() && console.log(l, t)
    };
    k.warn = function (l, t) {
        k.show() && console.warn(l, t)
    };
    k.error = function (l, t) {
        k.show() && console.error(l, t);
        p(l, arguments.callee)
    };
    k.ga = {
        getTracker: function () {
            return _gat._getTracker(jQuery("body").attr("analyticsID"))
        },
        page: function () {
            try {
                log.ga.getTracker()._trackPageview(pg);
                log.debug("LOGGING GA PAGE: " + pg)
            } catch (l) {}
        },
        event: function (l, t, m, s) {
            try {
                var v = log.ga.getTracker();
                v._initData();
                var L;
                L = m === undefined && s === undefined ? v._trackEvent(l, t) : s === undefined ? v._trackEvent(l, t, m) : v._trackEvent(l, t, m, new Number(s));
                log.debug("LOGGING GA EVT.. CATEGORY:" + l + ", ACTION:" + t + ", LABEL: " + m + ", VALUE: " + s + " .. success? " + L)
            } catch (da) {}
        }
    };
    TT.extend("log", new i, function () {
        log = TT.log
    })
})();
(function () {
    var p = function () {}, i = p.prototype;
    i.defaults = {
        type: "GET",
        dataType: "text",
        cache: false,
        timeout: 3E4,
        async: true,
        error: function () {}
    };
    i.init = function (k) {
        k = jQuery.extend([], this.defaults, k);
        k.url = TT.global.rootPath + k.url;
        return k
    };
    i.sync = function (k) {
        k = this.init(k);
        k.async = false;
        return this.send(k, false)
    };
    i.async = function (k) {
        k = this.init(k);
        k.async = true;
        return this.send(k, false)
    };
    i.send = function (k, l) {
        if (TT.undefined(l)) k = this.init(k);
        this.log(k);
        jQuery.ajax(k);
        return false
    };
    i.log = function (k) {
        log.debug("NEW " + (k.async ? "async" : "sync") + " AJAX REQUEST: " + k.type + " /" + k.url, k)
    };
    TT.extend("ajax", new p, function () {
        ajax = TT.ajax
    })
})();
(function () {
    var p = function () {}, i = p.prototype;
    i.defaults = {
        type: "GET",
        dataType: "json",
        cache: false,
        timeout: 3E4,
        async: false,
        error: function () {}
    };
    i.init = function (k) {
        return jQuery.extend([], this.defaults, k)
    };
    i.send = function (k) {
        k = this.init(k);
        this.log(k);
        jQuery.ajax(k);
        return false
    };
    i.log = function (k) {
        log.debug("NEW JSON REQUEST: /" + k.type + " /" + k.url, k)
    };
    TT.extend("json", new p, function () {
        json = TT.json
    })
})();
(function () {
    var p = function () {}, i = p.prototype;
    i.init = function () {};
    i.failure = function (k) {
        k = k + "&domain=" + window.document.domain + "&lm=" + window.document.lastModified + "&ref=" + window.document.referrer + "&hl=" + window.history.length + "&np=" + navigator.platform + "&npg=" + $(navigator.plugins).serialize() + "&nce=" + navigator.cookieEnabled + "&nav=" + navigator.appVersion;
        var l = $("img#script_error");
        if (typeof l != "undefined" && l.size() > 0) l.attr("src", "/js_error/clear.gif?e=" + k);
        else {
            l = new Image;
            l.id = "script_error";
            l.src = "/js_error/clear.gif?e=" + k;
            l.width = l.height = 1;
            $("body").append(l)
        }
        return false
    };
    i.flash = function (k, l, t) {
        jQuery("<div id='js_flash' />").html(k).addClass(t).appendTo("body").animate({
            opacity: "toggle"
        }, 400, "linear", function () {
            var m = jQuery(this);
            setTimeout(function () {
                m.animate({
                    opacity: "toggle"
                }, 600, "linear", function () {
                    $("div#js_flash").remove()
                })
            }, l)
        })
    };
    TT.extend("notify", new p)
})();
(function () {
    var p = function () {}, i = p.prototype;
    i.init = function () {
        jQuery("input.autocomplete").autocomplete({
            success: function (k) {
                k = eval("(" + k + ")");
                var l = true,
                    t = jQuery("#autocomplete_results");
                if (t.length == 0) {
                    l = false;
                    t = jQuery("<div id='autocomplete_results'></div>")
                }
                t.html("<ul>" + k.autocomplete.hits + "</ul>");
                t.find("ul li").filter(":first-child").addClass("selected");
                l || t.appendTo("#autocomplete_div");
                t.animate({
                    opacity: "1",
                    height: "100%"
                }, 200)
            }
        }).bind("blur", function () {
            var k = jQuery("#autocomplete_results");
            k.length && k.is(":visible") && k.animate({
                opacity: "0",
                height: "0"
            }, 300)
        });
        jQuery("[fieldhint]").bind("blur", function () {
            TT.form.updateFieldHint(this)
        }).bind("focus", function () {
            if (this.value == this.getAttribute("fieldhint")) this.value = ""
        }).trigger("blur")
    };
    (function (k) {
        function l(t) {
            if (t.keyCode) code = t.keyCode;
            else if (t.which) code = t.which;
            if (t.shiftKey || t.ctrlKey || t.altKey || t.metaKey) return false;
            if ([9, 13, 20, 27, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46, 91].indexOf(code) > -1) return false;
            return true
        }
        k.fn.autocomplete = function (t) {
            return jQuery(this).each(function () {
                jQuery(this).bind("keyup", function (m) {
                    var s = jQuery(this),
                        v = s.val();
                    if (v == "" || v.length < 3) jQuery("#autocomplete_results").html("");
                    else l(m) && ajax.async({
                        url: "auto_complete",
                        data: "q=" + v + "&acType=" + s.attr("acType"),
                        success: function (L) {
                            t.success(L)
                        }
                    })
                })
            })
        }
    })(jQuery);
    i.updateFieldHint = function (k) {
        if (k.value == "") k.value = k.getAttribute("fieldhint")
    };
    TT.extend("form", new p)
})();
(function (p) {
    var i = function () {}, k = i.prototype;
    k.init = function () {};
    k.remove = function () {
        var l = p(this).parents(".ui-basic-tabs");
        l.find("ul");
        l.find(".ui-tab").addClass("never").css("display", "none");
        var t = p(this).parents("[tab]");
        l.find("[name=" + t.attr("tab") + "]").remove();
        l = t.next().length > 0 ? t.next() : t.prev();
        t.remove();
        l.trigger("click")
    };
    k.show = function () {
        var l = p(this);
        l.is("li") || (l = l.parents("li"));
        var t = p("[name=" + l.attr("tab") + "]");
        if (t.css("display") == "none") {
            l.siblings().andSelf().removeClass("selected");
            t.siblings(".ui-tab").hide();
            t.show();
            l.addClass("selected")
        }
    };
    k.create = function (l, t, m) {
        var s = jQuery("[name=" + l + "]"),
            v = s.find("ul");
        s.find(".ui-tab").addClass("never").css("display", "none");
        v.children("li").removeClass("selected");
        var L = v.find("li:last-child").attr("tab");
        L = TT.undefined(L) ? 1 : new Number(L.replace(l + "_", ""));
        L = L + 1;
        l = l + "_" + L;
        t = jQuery(t);
        t.attr("tab", l);
        t.bind("click", TT.tabs.show);
        t.find("." + p.fn.tabs_defaults.closeClass).bind("click", TT.tabs.remove);
        t.appendTo(v);
        jQuery("<div id='" + l + "' class='ui-tab " + L + "'>" + m + "</div>").appendTo(s)
    };
    p.fn.tabs_defaults = {
        active: 0,
        newLinkClass: undefined,
        closeClass: "js_close"
    };
    p.fn.tabs = function (l) {
        var t = p.extend({}, this.tabs_defaults, l);
        return p(this).each(function () {
            var m = p(this).children("ul").children("li");
            if (m.length) {
                m.find("a").andSelf().bind("click", TT.tabs.show);
                m.find("." + t.closeClass).bind("click", TT.tabs.remove)
            }
            TT.undefined(t.newLinkClass) || jQuery("." + t.newLinkClass).click(function () {
                jQuery(this);
                TT.tabs.create("tabs", "title", "content")
            })
        })
    };
    TT.extend("tabs", new i)
})(jQuery);
(function (p) {
    function i(L, da) {
        var ka = p.extend({}, da, l);
        return L.each(function () {
            var la = p(this);
            la.data(m, ka).bind(t + s, la, v.open)
        })
    }
    function k(L) {
        L = L.data;
        return {
            $dialog: L,
            opts: L.data(m)
        }
    }
    var l = {}, t = "dialog.",
        m = "opts",
        s = "open";
    p.fn.dialog = function (L, da) {
        var ka = typeof L,
            la = p(this);
        if (arguments.length == 0 || ka == "object") return i(la, L);
        if (ka == "string") return la.trigger(t + L, da)
    };
    var v = {
        open: function (L) {
            L = k(L);
            p("#ui-dialog").remove();
            p("<div id='ui-dialog'>&nbsp;</div>").css({
                position: "absolute",
                left: "0",
                top: "0",
                width: p(document).width(),
                height: p(document).height(),
                zIndex: 1004,
                margin: "0",
                padding: "0",
                opacity: "0.8",
                backgroundColor: "#111"
            }).appendTo("body");
            p("#ui-dialog-content").remove();
            p("<div id='ui-dialog-content'>" + L.$dialog.html() + "</div>").css({
                position: "absolute",
                zIndex: 1005
            }).appendTo("body");
            p(window).resize(function () {
                jQuery("#ui-dialog").css({
                    width: p(document).width(),
                    height: p(document).height()
                })
            })
        },
        close: function () {}
    }
})(jQuery);
var swfobject = function () {
    function p() {
        if (!za) {
            try {
                var u = T.getElementsByTagName("body")[0].appendChild(c("span"));
                u.parentNode.removeChild(u)
            } catch (y) {
                return
            }
            za = true;
            u = ta.length;
            for (var J = 0; J < u; J++) ta[J]()
        }
    }
    function i(u) {
        if (za) u();
        else ta[ta.length] = u
    }
    function k(u) {
        if (typeof ba.addEventListener != I) ba.addEventListener("load", u, false);
        else if (typeof T.addEventListener != I) T.addEventListener("load", u, false);
        else if (typeof ba.attachEvent != I) Z(ba, "onload", u);
        else if (typeof ba.onload == "function") {
            var y = ba.onload;
            ba.onload = function () {
                y();
                u()
            }
        } else ba.onload = u
    }
    function l() {
        sa ? t() : m()
    }
    function t() {
        var u = T.getElementsByTagName("body")[0],
            y = c(E);
        y.setAttribute("type", R);
        var J = u.appendChild(y);
        if (J) {
            var M = 0;
            (function () {
                if (typeof J.GetVariable != I) {
                    var N = J.GetVariable("$version");
                    if (N) {
                        N = N.split(" ")[1].split(",");
                        O.pv = [parseInt(N[0], 10), parseInt(N[1], 10), parseInt(N[2], 10)]
                    }
                } else if (M < 10) {
                    M++;
                    setTimeout(arguments.callee, 10);
                    return
                }
                u.removeChild(y);
                J = null;
                m()
            })()
        } else m()
    }
    function m() {
        var u = ua.length;
        if (u > 0) for (var y = 0; y < u; y++) {
            var J = ua[y].id,
                M = ua[y].callbackFn,
                N = {
                    success: false,
                    id: J
                };
            if (O.pv[0] > 0) {
                var V = H(J);
                if (V) if (ca(ua[y].swfVersion) && !(O.wk && O.wk < 312)) {
                    ea(J, true);
                    if (M) {
                        N.success = true;
                        N.ref = s(J);
                        M(N)
                    }
                } else if (ua[y].expressInstall && v()) {
                    N = {};
                    N.data = ua[y].expressInstall;
                    N.width = V.getAttribute("width") || "0";
                    N.height = V.getAttribute("height") || "0";
                    if (V.getAttribute("class")) N.styleclass = V.getAttribute("class");
                    if (V.getAttribute("align")) N.align = V.getAttribute("align");
                    var W = {};
                    V = V.getElementsByTagName("param");
                    for (var ga = V.length, ja = 0; ja < ga; ja++) if (V[ja].getAttribute("name").toLowerCase() != "movie") W[V[ja].getAttribute("name")] = V[ja].getAttribute("value");
                    L(N, W, J, M)
                } else {
                    da(V);
                    M && M(N)
                }
            } else {
                ea(J, true);
                if (M) {
                    if ((J = s(J)) && typeof J.SetVariable != I) {
                        N.success = true;
                        N.ref = J
                    }
                    M(N)
                }
            }
        }
    }
    function s(u) {
        var y = null;
        if ((u = H(u)) && u.nodeName == "OBJECT") if (typeof u.SetVariable != I) y = u;
        else if (u = u.getElementsByTagName(E)[0]) y = u;
        return y
    }
    function v() {
        return !Da && ca("6.0.65") && (O.win || O.mac) && !(O.wk && O.wk < 312)
    }
    function L(u, y, J, M) {
        Da = true;
        Ma = M || null;
        Na = {
            success: false,
            id: J
        };
        var N = H(J);
        if (N) {
            if (N.nodeName == "OBJECT") {
                Ca = ka(N);
                oa = null
            } else {
                Ca = N;
                oa = J
            }
            u.id = aa;
            if (typeof u.width == I || !/%$/.test(u.width) && parseInt(u.width, 10) < 310) u.width = "310";
            if (typeof u.height == I || !/%$/.test(u.height) && parseInt(u.height, 10) < 137) u.height = "137";
            T.title = T.title.slice(0, 47) + " - Flash Player Installation";
            M = O.ie && O.win ? "ActiveX" : "PlugIn";
            M = "MMredirectURL=" + ba.location.toString().replace(/&/g, "%26") + "&MMplayerType=" + M + "&MMdoctitle=" + T.title;
            if (typeof y.flashvars != I) y.flashvars += "&" + M;
            else y.flashvars = M;
            if (O.ie && O.win && N.readyState != 4) {
                M = c("div");
                J += "SWFObjectNew";
                M.setAttribute("id", J);
                N.parentNode.insertBefore(M, N);
                N.style.display = "none";
                (function () {
                    N.readyState == 4 ? N.parentNode.removeChild(N) : setTimeout(arguments.callee, 10)
                })()
            }
            la(u, y, J)
        }
    }
    function da(u) {
        if (O.ie && O.win && u.readyState != 4) {
            var y = c("div");
            u.parentNode.insertBefore(y, u);
            y.parentNode.replaceChild(ka(u), y);
            u.style.display = "none";
            (function () {
                u.readyState == 4 ? u.parentNode.removeChild(u) : setTimeout(arguments.callee,
                10)
            })()
        } else u.parentNode.replaceChild(ka(u), u)
    }
    function ka(u) {
        var y = c("div");
        if (O.win && O.ie) y.innerHTML = u.innerHTML;
        else if (u = u.getElementsByTagName(E)[0]) if (u = u.childNodes) for (var J = u.length, M = 0; M < J; M++)!(u[M].nodeType == 1 && u[M].nodeName == "PARAM") && u[M].nodeType != 8 && y.appendChild(u[M].cloneNode(true));
        return y
    }
    function la(u, y, J) {
        var M, N = H(J);
        if (O.wk && O.wk < 312) return M;
        if (N) {
            if (typeof u.id == I) u.id = J;
            if (O.ie && O.win) {
                var V = "";
                for (var W in u) if (u[W] != Object.prototype[W]) if (W.toLowerCase() == "data") y.movie = u[W];
                else if (W.toLowerCase() == "styleclass") V += ' class="' + u[W] + '"';
                else if (W.toLowerCase() != "classid") V += " " + W + '="' + u[W] + '"';
                W = "";
                for (var ga in y) if (y[ga] != Object.prototype[ga]) W += '<param name="' + ga + '" value="' + y[ga] + '" />';
                N.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + V + ">" + W + "</object>";
                Ba[Ba.length] = u.id;
                M = H(u.id)
            } else {
                ga = c(E);
                ga.setAttribute("type", R);
                for (V in u) if (u[V] != Object.prototype[V]) if (V.toLowerCase() == "styleclass") ga.setAttribute("class", u[V]);
                else V.toLowerCase() !=
                    "classid" && ga.setAttribute(V, u[V]);
                for (var ja in y) y[ja] != Object.prototype[ja] && ja.toLowerCase() != "movie" && Aa(ga, ja, y[ja]);
                N.parentNode.replaceChild(ga, N);
                M = ga
            }
        }
        return M
    }
    function Aa(u, y, J) {
        var M = c("param");
        M.setAttribute("name", y);
        M.setAttribute("value", J);
        u.appendChild(M)
    }
    function ma(u) {
        var y = H(u);
        if (y && y.nodeName == "OBJECT") if (O.ie && O.win) {
            y.style.display = "none";
            (function () {
                y.readyState == 4 ? na(u) : setTimeout(arguments.callee, 10)
            })()
        } else y.parentNode.removeChild(y)
    }
    function na(u) {
        if (u = H(u)) {
            for (var y in u) if (typeof u[y] ==
                "function") u[y] = null;
            u.parentNode.removeChild(u)
        }
    }
    function H(u) {
        var y = null;
        try {
            y = T.getElementById(u)
        } catch (J) {}
        return y
    }
    function c(u) {
        return T.createElement(u)
    }
    function Z(u, y, J) {
        u.attachEvent(y, J);
        va[va.length] = [u, y, J]
    }
    function ca(u) {
        var y = O.pv;
        u = u.split(".");
        u[0] = parseInt(u[0], 10);
        u[1] = parseInt(u[1], 10) || 0;
        u[2] = parseInt(u[2], 10) || 0;
        return y[0] > u[0] || y[0] == u[0] && y[1] > u[1] || y[0] == u[0] && y[1] == u[1] && y[2] >= u[2] ? true : false
    }
    function D(u, y, J, M) {
        if (!(O.ie && O.mac)) {
            var N = T.getElementsByTagName("head")[0];
            if (N) {
                J = J && typeof J == "string" ? J : "screen";
                if (M) Oa = wa = null;
                if (!wa || Oa != J) {
                    M = c("style");
                    M.setAttribute("type", "text/css");
                    M.setAttribute("media", J);
                    wa = N.appendChild(M);
                    if (O.ie && O.win && typeof T.styleSheets != I && T.styleSheets.length > 0) wa = T.styleSheets[T.styleSheets.length - 1];
                    Oa = J
                }
                if (O.ie && O.win) wa && typeof wa.addRule == E && wa.addRule(u, y);
                else wa && typeof T.createTextNode != I && wa.appendChild(T.createTextNode(u + " {" + y + "}"))
            }
        }
    }
    function ea(u, y) {
        if (Qa) {
            y = y ? "visible" : "hidden";
            if (za && H(u)) H(u).style.visibility = y;
            else D("#" + u, "visibility:" + y)
        }
    }
    function C(u) {
        return /[\\\"<>\.;]/.exec(u) != null && typeof encodeURIComponent != I ? encodeURIComponent(u) : u
    }
    var I = "undefined",
        E = "object",
        R = "application/x-shockwave-flash",
        aa = "SWFObjectExprInst",
        ba = window,
        T = document,
        ia = navigator,
        sa = false,
        ta = [l],
        ua = [],
        Ba = [],
        va = [],
        Ca, oa, Ma, Na, za = false,
        Da = false,
        wa, Oa, Qa = true,
        O = function () {
            var u = typeof T.getElementById != I && typeof T.getElementsByTagName != I && typeof T.createElement != I,
                y = ia.userAgent.toLowerCase(),
                J = ia.platform.toLowerCase(),
                M = J ? /win/.test(J) :
                    /win/.test(y);
            J = J ? /mac/.test(J) : /mac/.test(y);
            y = /webkit/.test(y) ? parseFloat(y.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : false;
            var N = !+"\u000b1",
                V = [0, 0, 0],
                W = null;
            if (typeof ia.plugins != I && typeof ia.plugins["Shockwave Flash"] == E) {
                if ((W = ia.plugins["Shockwave Flash"].description) && !(typeof ia.mimeTypes != I && ia.mimeTypes[R] && !ia.mimeTypes[R].enabledPlugin)) {
                    sa = true;
                    N = false;
                    W = W.replace(/^.*\s+(\S+\s+\S+$)/, "$1");
                    V[0] = parseInt(W.replace(/^(.*)\..*$/, "$1"), 10);
                    V[1] = parseInt(W.replace(/^.*\.(.*)\s.*$/, "$1"),
                    10);
                    V[2] = /[a-zA-Z]/.test(W) ? parseInt(W.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0
                }
            } else if (typeof ba.ActiveXObject != I) try {
                var ga = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
                if (ga) if (W = ga.GetVariable("$version")) {
                    N = true;
                    W = W.split(" ")[1].split(",");
                    V = [parseInt(W[0], 10), parseInt(W[1], 10), parseInt(W[2], 10)]
                }
            } catch (ja) {}
            return {
                w3: u,
                pv: V,
                wk: y,
                ie: N,
                win: M,
                mac: J
            }
        }();
    (function () {
        if (O.w3) {
            if (typeof T.readyState != I && T.readyState == "complete" || typeof T.readyState == I && (T.getElementsByTagName("body")[0] || T.body)) p();
            if (!za) {
                typeof T.addEventListener != I && T.addEventListener("DOMContentLoaded", p, false);
                if (O.ie && O.win) {
                    T.attachEvent("onreadystatechange", function () {
                        if (T.readyState == "complete") {
                            T.detachEvent("onreadystatechange", arguments.callee);
                            p()
                        }
                    });
                    ba == top && function () {
                        if (!za) {
                            try {
                                T.documentElement.doScroll("left")
                            } catch (u) {
                                setTimeout(arguments.callee, 0);
                                return
                            }
                            p()
                        }
                    }()
                }
                O.wk && function () {
                    za || (/loaded|complete/.test(T.readyState) ? p() : setTimeout(arguments.callee, 0))
                }();
                k(p)
            }
        }
    })();
    (function () {
        O.ie && O.win && window.attachEvent("onunload",

        function () {
            for (var u = va.length, y = 0; y < u; y++) va[y][0].detachEvent(va[y][1], va[y][2]);
            u = Ba.length;
            for (y = 0; y < u; y++) ma(Ba[y]);
            for (var J in O) O[J] = null;
            O = null;
            for (var M in swfobject) swfobject[M] = null;
            swfobject = null
        })
    })();
    return {
        registerObject: function (u, y, J, M) {
            if (O.w3 && u && y) {
                var N = {};
                N.id = u;
                N.swfVersion = y;
                N.expressInstall = J;
                N.callbackFn = M;
                ua[ua.length] = N;
                ea(u, false)
            } else M && M({
                success: false,
                id: u
            })
        },
        getObjectById: function (u) {
            if (O.w3) return s(u)
        },
        embedSWF: function (u, y, J, M, N, V, W, ga, ja, Ea) {
            var Fa = {
                success: false,
                id: y
            };
            if (O.w3 && !(O.wk && O.wk < 312) && u && y && J && M && N) {
                ea(y, false);
                i(function () {
                    J += "";
                    M += "";
                    var xa = {};
                    if (ja && typeof ja === E) for (var ya in ja) xa[ya] = ja[ya];
                    xa.data = u;
                    xa.width = J;
                    xa.height = M;
                    ya = {};
                    if (ga && typeof ga === E) for (var Ja in ga) ya[Ja] = ga[Ja];
                    if (W && typeof W === E) for (var Ka in W) if (typeof ya.flashvars != I) ya.flashvars += "&" + Ka + "=" + W[Ka];
                    else ya.flashvars = Ka + "=" + W[Ka];
                    if (ca(N)) {
                        Ja = la(xa, ya, y);
                        xa.id == y && ea(y, true);
                        Fa.success = true;
                        Fa.ref = Ja
                    } else if (V && v()) {
                        xa.data = V;
                        L(xa, ya, y, Ea);
                        return
                    } else ea(y, true);
                    Ea && Ea(Fa)
                })
            } else Ea && Ea(Fa)
        },
        switchOffAutoHideShow: function () {
            Qa = false
        },
        ua: O,
        getFlashPlayerVersion: function () {
            return {
                major: O.pv[0],
                minor: O.pv[1],
                release: O.pv[2]
            }
        },
        hasFlashPlayerVersion: ca,
        createSWF: function (u, y, J) {
            if (O.w3) return la(u, y, J)
        },
        showExpressInstall: function (u, y, J, M) {
            O.w3 && v() && L(u, y, J, M)
        },
        removeSWF: function (u) {
            O.w3 && ma(u)
        },
        createCSS: function (u, y, J, M) {
            O.w3 && D(u, y, J, M)
        },
        addDomLoadEvent: i,
        addLoadEvent: k,
        getQueryParamValue: function (u) {
            var y = T.location.search || T.location.hash;
            if (y) {
                if (/\?/.test(y)) y = y.split("?")[1];
                if (u == null) return C(y);
                y = y.split("&");
                for (var J = 0; J < y.length; J++) if (y[J].substring(0, y[J].indexOf("=")) == u) return C(y[J].substring(y[J].indexOf("=") + 1))
            }
            return ""
        },
        expressInstallCallback: function () {
            if (Da) {
                var u = H(aa);
                if (u && Ca) {
                    u.parentNode.replaceChild(Ca, u);
                    if (oa) {
                        ea(oa, true);
                        if (O.ie && O.win) Ca.style.display = "block"
                    }
                    Ma && Ma(Na)
                }
                Da = false
            }
        }
    }
}();
(function (p) {
    function i(C, I) {
        var E = p.extend({}, Z, I);
        return C.each(function () {
            var R = p(this);
            if (!R.hasClass(c)) {
                R.find("." + E.listClass).find("." + E.itemClass).hide();
                R.data(na, t(E, E.initialScale, E.radius));
                for (e in ca) R.bind(e + ma, R, ca[e]);
                R.addClass(c)
            }
        })
    }
    function k(C) {
        var I = p(this),
            E = p(C.target),
            R = p.radmenu.container;
        E.hasClass(R.itemClz) || (E = E.closest("." + R.itemClz));
        var aa = E.parents("." + R.itemClz).length > 0;
        E = E.index();
        aa ? I.radmenu(E) : I.parents("." + R.clz).radmenu(E);
        l(C)
    }
    function l(C) {
        if (p.support.opacity) C.stopPropagation();
        else window.event.cancelBubble = true
    }
    function t(C, I, E) {
        return p.extend({}, C, {
            radius: E * I
        })
    }
    function m(C) {
        return parseInt(Math.random() * C)
    }
    function s(C) {
        var I = C.data;
        return {
            menu: I,
            opts: I.data(na),
            raditems: function () {
                return I.find("." + p.radmenu.container.itemClz)
            }
        }
    }
    function v(C, I, E) {
        if (I == E) E = I - 1;
        var R = p(C.raditems()[I]),
            aa = C.raditems()[E];
        I > E ? R.insertBefore(aa) : R.insertAfter(aa);
        Aa(C, I < E)
    }
    function L(C, I) {
        var E = [];
        C.each(function (R) {
            var aa = p(this);
            R = ka(R, C.length, I);
            var ba = "transform:rotate(" + R.angle +
                "deg); ";
            E.push("<div class='" + p.radmenu.container.itemClz + "' ");
            E.push("style='");
            E.push("position:absolute;display:none;");
            E.push("left:" + R.left + "px;");
            E.push("top:" + R.top + "px;");
            if (I.rotate) for (rot in D.opts) E.push(D.opts[rot] + ba);
            E.push("'>");
            E.push(aa.html());
            E.push("</div>")
        });
        return E.join("")
    }
    function da(C, I) {
        return 2 * Math.PI * parseFloat(C / I)
    }
    function ka(C, I, E, R) {
        var aa = E.radius,
            ba = da(C, I);
        ba += la(E.angleOffset);
        var T = E.centerX + Math.cos(ba) * aa;
        aa = E.centerY + Math.sin(parseInt(ba * 100) / 100) * aa;
        C = E.rotate ? E.getRotation(ba * 180 / Math.PI, C, I) : 0;
        I = E.rotate ? da(1, I) * 180 / Math.PI : 0;
        return {
            left: T,
            top: aa,
            angle: C,
            animObj: {
                left: T,
                top: aa,
                radrotate: (R == true ? "-=" : "+=") + I
            }
        }
    }
    function la(C) {
        return C * Math.PI / 180
    }
    function Aa(C, I) {
        var E = C.raditems(),
            R = E.length;
        E.each(function (aa) {
            var ba = p(this),
                T = ka(aa, R, C.opts, I);
            ba.animate(T.animObj, C.opts.animSpeed, C.opts.animEasing, function () {
                aa == R - 1 && C.opts.afterAnimation(C)
            })
        })
    }
    var ma = ".radmenu",
        na = "options" + ma,
        H = "prevoptions" + ma,
        c = "ui-radmenu-parent",
        Z = {
            listClass: "list",
            itemClass: "item",
            activeItemClass: "active",
            selectEvent: null,
            onSelect: function () {},
            radius: 10,
            angleOffset: 0,
            centerX: 0,
            centerY: 0,
            animSpeed: 500,
            animEasing: "swing",
            initialScale: 1,
            scaleAnimSpeed: 0,
            scaleAnimEasing: "swing",
            scaleAnimOpts: {},
            onScaleItem: function () {},
            afterAnimation: function () {},
            onShow: function (C) {
                C.show()
            },
            onHide: function (C) {
                C.hide()
            },
            onNext: function () {
                return true
            },
            onPrev: function () {
                return true
            },
            rotate: false,
            getRotation: function (C) {
                return C
            }
        };
    p.radmenu = {
        container: {
            html: "<div></div>",
            css: {
                position: "relative"
            },
            clz: "radial_div",
            itemClz: "radial_div_item"
        }
    };
    p.fn.radmenu = function (C, I) {
        try {
            var E = p(this),
                R = typeof C;
            if (arguments.length == 0 || R == "object") return i(E, C);
            else if (R == "string") return C == "items" || C == "opts" ? E.triggerHandler(C + ma) : E.trigger(C + ma, I || null);
            else if (R == "number") return E.trigger("select" + ma, C)
        } catch (aa) {
            return "error : " + aa
        }
    };
    var ca = {
        opts: function (C) {
            return s(C).opts
        },
        show: function (C, I) {
            var E = s(C),
                R = p.radmenu.container;
            E.menu.find("." + R.clz).remove();
            var aa = E.menu.find("." + E.opts.itemClass),
                ba = p(R.html).addClass(R.clz).css(R.css).html(L(aa, E.opts));
            aa = ba.find("." + R.itemClz);
            E.opts.selectEvent != null && aa.bind(E.opts.selectEvent, k);
            ba.appendTo(E.menu);
            typeof I == "function" ? I(aa) : E.opts.onShow(aa);
            l(C)
        },
        hide: function (C) {
            var I = s(C),
                E = I.menu.find("." + p.radmenu.container.clz);
            I.opts.onHide(E.find("." + p.radmenu.container.itemClz));
            E.remove();
            l(C)
        },
        select: function (C, I) {
            var E = s(C);
            I = p(E.raditems().get(I));
            I.siblings().removeClass(E.opts.activeItemClass);
            I.addClass(E.opts.activeItemClass);
            E.opts.onSelect(I);
            l(C)
        },
        next: function (C) {
            C = s(C);
            C.opts.onNext(C) && v(C, C.raditems().length - 1, 0)
        },
        prev: function (C) {
            C = s(C);
            C.opts.onPrev(C) && v(C, 0, C.raditems().length - 1)
        },
        shuffle: function (C) {
            C = s(C);
            var I = C.raditems().length;
            v(C, m(I), m(I))
        },
        destroy: function (C) {
            C = s(C);
            C.menu.data(na, null).data(H, null).removeClass(c).unbind(ma);
            return C.menu
        },
        items: function (C) {
            return s(C).raditems()
        },
        scale: function (C, I) {
            var E = s(C);
            if (I) {
                var R = E.opts;
                C = p.radmenu.container;
                var aa = E.menu.data(H);
                aa || E.menu.data(H, aa = R);
                var ba = E.menu.find("." + C.itemClz),
                    T = t(R, I, aa.radius);
                E.menu.data(na, T);
                ba.each(function (ia) {
                    var sa = p(this);
                    ia = ka(ia, ba.length, T);
                    var ta = {
                        top: ia.top,
                        left: ia.left
                    };
                    if (typeof R.scaleAnimOpts == "object") ta = p.extend({}, R.scaleAnimOpts, ta);
                    sa.animate(ta, R.scaleAnimSpeed, R.scaleAnimEasing);
                    E.opts.onScaleItem(sa, I, ia)
                })
            }
            return E.menu
        }
    }, D = {};
    D.attr = undefined;
    D.opts = ["", "-webkit-", "-moz-", "-ms-", "-o-"];
    D.cssattrs = ["", "Webkit", "Moz", "ms", "O"];
    D.getCSSAttr = function (C) {
        if (this.attr) return this.attr;
        return this.attr = function () {
            for (var I = 0; I < D.cssattrs.length; I++) {
                var E = D.cssattrs[I] + "Transform";
                if (C[0].style[E]) return E
            }
            return "transform"
        }()
    };
    D.getTransformValue = function (C) {
        return jQuery.style(C[0], D.getCSSAttr(C))
    };
    var ea = {};
    ea.cur = p.fx.prototype.cur;
    p.fx.prototype.cur = function () {
        if (this.prop == "radrotate") {
            var C = p(this.elem);
            if (C = D.getTransformValue(C) || "none") if ((C = C.match(/rotate\(([^)]+)\)/)) && C[1]) return parseFloat(C[1]);
            return 0
        }
        return ea.cur.apply(this, arguments)
    };
    p.fx.step.radrotate = function (C) {
        var I = p(C.elem);
        I.css(D.getCSSAttr(I),
            "rotate(" + C.now + "deg)")
    }
})(jQuery);
(function (p) {
    var i = {};
    i.ytplayers = {};
    i.inits = [];
    i.iframeScriptInited = false;
    i.inited = false;
    p.tubeplayer = {};
    p.tubeplayer.defaults = {
        afterReady: function () {},
        stateChange: function (m) {
            var s = this.onPlayer;
            return function (v) {
                if (typeof v == "object") v = v.data;
                switch (v) {
                    case -1:
                        return s.unstarted[m]();
                    case 0:
                        return s.ended[m]();
                    case 1:
                        return s.playing[m]();
                    case 2:
                        return s.paused[m]();
                    case 3:
                        return s.buffering[m]();
                    case 5:
                        return s.cued[m]();
                    default:
                        return null
                }
            }
        },
        onError: function (m) {
            var s = this.onErr;
            return function (v) {
                if (typeof v ==
                    "object") v = v.data;
                switch (v) {
                    case 2:
                        return s.invalidParameter[m]();
                    case 100:
                        return s.notFound[m]();
                    case 101:
                    case 150:
                        return s.notEmbeddable[m]();
                    default:
                        return null
                }
            }
        },
        qualityChange: function (m) {
            var s = this;
            return function (v) {
                if (typeof v == "object") v = v.data;
                return s.onQualityChange[m](v)
            }
        },
        onQualityChange: {},
        onPlayer: {
            unstarted: {},
            ended: {},
            playing: {},
            paused: {},
            buffering: {},
            cued: {}
        },
        onErr: {
            notFound: {},
            notEmbeddable: {},
            invalidParameter: {}
        }
    };
    var k = {
        width: 425,
        height: 355,
        allowFullScreen: "true",
        initialVideo: "DkoeNLuMbcI",
        preferredQuality: "default",
        showControls: 1,
        showRelated: 0,
        autoPlay: 0,
        swfobjectURL: "http://ajax.googleapis.com/ajax/libs/swfobject/2.2/swfobject.js",
        allowScriptAccess: "always",
        playerID: "tubeplayer-player-container",
        loadSWFObject: true,
        iframed: true,
        onPlay: function () {},
        onPause: function () {},
        onStop: function () {},
        onSeek: function () {},
        onMute: function () {},
        onUnMute: function () {},
        onPlayerUnstarted: function () {},
        onPlayerEnded: function () {},
        onPlayerPlaying: function () {},
        onPlayerPaused: function () {},
        onPlayerBuffering: function () {},
        onPlayerCued: function () {},
        onQualityChange: function () {},
        onErrorNotFound: function () {},
        onErrorNotEmbeddable: function () {},
        onErrorInvalidParameter: function () {}
    };
    p.fn.tubeplayer = function (m, s) {
        var v = p(this),
            L = typeof m;
        if (arguments.length == 0 || L == "object") return v.each(function () {
            i.init(p(this), m)
        });
        else if (L == "string") return v.triggerHandler(m + ".tubeplayer", s || null)
    };
    var l = function (m) {
        return function (s, v) {
            var L = i.getPkg(s);
            if (L.ytplayer) {
                s = m(s, v, L);
                if (typeof s == "undefined") s = L.$player;
                return s
            }
            return L.$player
        }
    };
    p.tubeplayer.getPlayers = function () {
        return i.ytplayers
    };
    i.init = function (m, s) {
        if (m.hasClass("jquery-youtube-tubeplayer")) return m;
        s = p.extend({}, k, s);
        s.playerID += (new Date).valueOf();
        m.addClass("jquery-youtube-tubeplayer").data("opts.tubeplayer", s);
        for (e in t) m.bind(e + ".tubeplayer", m, t[e]);
        i.initDefaults(p.tubeplayer.defaults, s);
        jQuery("<div></div>").attr("id", s.playerID).appendTo(m);
        i.initPlayer(m, s);
        return m
    };
    i.getPkg = function (m) {
        m = m.data;
        var s = m.data("opts.tubeplayer");
        return {
            $player: m,
            opts: s,
            ytplayer: i.ytplayers[s.playerID]
        }
    };
    i.iframeReady = function (m) {
        i.inits.push(function () {
            new YT.Player(m.playerID, {
                videoId: m.initialVideo,
                width: m.width,
                height: m.height,
                playerVars: {
                    autoplay: m.autoPlay,
                    controls: m.showControls,
                    rel: m.showRelated,
                    fs: m.allowFullScreen ? 1 : 0
                },
                events: {
                    onReady: function (s) {
                        i.ytplayers[m.playerID] = s.target;
                        s = p(s.target).parents(".jquery-youtube-tubeplayer");
                        p.tubeplayer.defaults.afterReady(s)
                    },
                    onPlaybackQualityChange: p.tubeplayer.defaults.qualityChange(m.playerID),
                    onStateChange: p.tubeplayer.defaults.stateChange(m.playerID),
                    onError: p.tubeplayer.defaults.onError(m.playerID)
                }
            })
        });
        if (i.inits.length == 1 && !i.inited) return function () {
            for (var s = 0; s < i.inits.length; s++) i.inits[s]();
            i.inited = true
        };
        i.inited && i.inits.pop()();
        return onYouTubePlayerAPIReady
    };
    i.supportsHTML5 = function () {
        return !!document.createElement("video").canPlayType
    };
    i.initDefaults = function (m, s) {
        var v = s.playerID,
            L = m.onPlayer;
        L.unstarted[v] = s.onPlayerUnstarted;
        L.ended[v] = s.onPlayerEnded;
        L.playing[v] = s.onPlayerPlaying;
        L.paused[v] = s.onPlayerPaused;
        L.buffering[v] = s.onPlayerBuffering;
        L.cued[v] = s.onPlayerCued;
        m.onQualityChange[v] = s.onQualityChange;
        m = m.onErr;
        m.notFound[v] = s.onErrorNotFound;
        m.notEmbeddable[v] = s.onErrorNotEmbeddable;
        m.invalidParameter[v] = s.onErrorInvalidParameter
    };
    i.initPlayer = function (m, s) {
        s.iframed && i.supportsHTML5() ? i.initIframePlayer(m, s) : i.initFlashPlayer(m, s)
    };
    i.initIframePlayer = function (m, s) {
        if (!i.iframeScriptInited) {
            m = document.createElement("script");
            m.src = "http://www.youtube.com/player_api";
            var v = document.getElementsByTagName("script")[0];
            v.parentNode.insertBefore(m,
            v);
            i.iframeScriptInited = true
        }
        onYouTubePlayerAPIReady = i.iframeReady(s)
    };
    i.initFlashPlayer = function (m, s) {
        s.loadSWFObject ? p.getScript(s.swfobjectURL, i.initFlashPlayerFN(s)) : i.initFlashPlayerFN(s)()
    };
    i.initFlashPlayerFN = function (m) {
        return function () {
            var s = ["//www.youtube.com/v/"];
            s.push(m.initialVideo);
            s.push("?fs=" + (m.allowFullScreen ? 1 : 0));
            s.push("&enablejsapi=1&version=3");
            s.push("&playerapiid=" + m.playerID);
            s.push("&rel= " + m.showRelated);
            s.push("&autoplay=" + m.autoPlay);
            s.push("&controls=" + m.showControls);
            swfobject.embedSWF(s.join(""), m.playerID, m.width, m.height, "8", null, null, {
                allowScriptAccess: m.allowScriptAccess,
                wmode: "transparent",
                allowFullScreen: m.allowFullScreen
            }, {
                id: m.playerID
            });

            getCallback = (function () {
		var id = 0;
		return function (v) {
			var func = $.tubeplayer.defaults.stateChange(v),
			    name = "callback" + id;
			id += 1;
			eval(name + " = func;");
//			eval(name + ' = function () { console.log("HELLO!"); }');
			return name;
		}
		})();

            onYouTubePlayerReady = function (v) {
                var L = document.getElementById(v);
                i.ytplayers[v] = L;
		L.addEventListener("onStateChange", getCallback(v));
                L.addEventListener("onStateChange", "$.tubeplayer.defaults.stateChange('" + v + "')");
                L.addEventListener("onError", "$.tubeplayer.defaults.onError('" + v + "')");
                L.addEventListener("onPlaybackQualityChange", "$.tubeplayer.defaults.qualityChange('" + v + "')");
                v = p(L).parents(".jquery-youtube-tubeplayer");
                p.tubeplayer.defaults.afterReady(v)
            }
        }
    };
    i.getVideoIDFromURL = function (m) {
        var s = m.indexOf("youtube.com/watch?v=") + 20,
            v = m.indexOf("&", s) || m.length;
        if (s > v) return "";
        return m.substring(s, v)
    };
    var t = {
        cue: l(function (m, s, v) {
            v.ytplayer.cueVideoById(s, v.opts.preferredQuality)
        }),
        play: l(function (m, s, v) {
            if (typeof s == "object") v.ytplayer.loadVideoById(s.id, s.time, v.opts.preferredQuality);
            else s ? v.ytplayer.loadVideoById(s, 0, v.opts.preferredQuality) : v.ytplayer.playVideo();
            v.opts.onPlay(s)
        }),
        pause: l(function (m, s, v) {
            v.ytplayer.pauseVideo();
            v.opts.onPause()
        }),
        stop: l(function (m, s, v) {
            v.ytplayer.stopVideo();
            v.opts.onStop()
        }),
        seek: l(function (m, s, v) {
            v.ytplayer.seekTo(s, true);
            v.opts.onSeek(s)
        }),
        mute: l(function (m, s, v) {
            v.$player.attr("data-prev-mute-volume", v.ytplayer.getVolume());
            v.ytplayer.mute();
            v.opts.onMute()
        }),
        unmute: l(function (m, s, v) {
            v.ytplayer.unMute();
            v.ytplayer.setVolume(v.$player.attr("data-prev-mute-volume") || 50);
            v.opts.onUnMute()
        }),
        isMuted: l(function (m, s, v) {
            return v.ytplayer.isMuted()
        }),
        volume: l(function (m, s, v) {
            if (s) {
                v.ytplayer.setVolume(s);
                v.$player.attr("data-prev-mute-volume", v.ytplayer.getVolume())
            } else return v.ytplayer.getVolume() || 0
        }),
        quality: l(function (m, s, v) {
            if (s) v.ytplayer.setPlaybackQuality(s);
            else return v.ytplayer.getPlaybackQuality()
        }),
        data: l(function (m, s, v) {
            m = {};
            v = v.ytplayer;
            m.bytesLoaded = v.getVideoBytesLoaded();
            m.bytesTotal = v.getVideoBytesTotal();
            m.startBytes = v.getVideoStartBytes();
            m.state = v.getPlayerState();
            m.currentTime = v.getCurrentTime();
            m.availableQualityLevels = v.getAvailableQualityLevels();
            m.duration = v.getDuration();
            m.videoURL = v.getVideoUrl();
            m.getVideoEmbedCode = v.getVideoEmbedCode();
            m.videoID = i.getVideoIDFromURL(m.videoURL);
            return m
        }),
        videoId: l(function (m, s, v) {
            return i.getVideoIDFromURL(v.ytplayer.getVideoUrl())
        }),
        size: l(function (m, s, v) {
            if (s.width && s.height) {
                v.ytplayer.setSize(s.width, s.height);
                p(v.ytplayer).css(s)
            }
        }),
        destroy: l(function (m, s, v) {
            v.$player.removeClass("jquery-youtube-tubeplayer").data("opts.tubeplayer", null).unbind(".tubeplayer").html("");
            delete i.ytplayers[v.opts.playerID];
            p(v.ytplayer).remove();
            return null
        }),
        player: l(function (m, s, v) {
            return v.ytplayer
        })
    }
})(jQuery);
jQTubeUtil = function (p) {
    function i(H, c, Z) {
        var ca = {
            "max-results": c.max || L,
            "start-index": c.start || da
        };
        if (c.time) ca.time = c.time;
        H = m(H, ca);
        return t(H, c.callback || Z)
    }
    function k(H, c) {
        switch (typeof H) {
            case "function":
                return {
                    callback: H,
                    time: undefined
                };
            case "object":
                var Z = {
                    max: H.max,
                    start: H["start-index"]
                };
                if (c) Z.time = H.time;
                return Z;
            default:
                return {}
        }
    }
    function l(H, c) {
        H = m(ka, H);
        return t(H, c)
    }
    function t(H, c) {
        var Z = {};
        p.ajax({
            type: "GET",
            dataType: "json",
            url: H,
            success: function (ca) {
                if (!(typeof ca == "undefined" || ca == null)) {
                    var D = [];
                    if (ca.feed) {
                        var ea = ca.feed,
                            C = ca.feed.entry;
                        for (entry in C) D.push(new na(C[entry]));
                        Z.startIndex = ea.openSearch$startIndex.$t;
                        Z.itemsPerPage = ea.openSearch$itemsPerPage.$t;
                        Z.totalResults = ea.openSearch$totalResults.$t
                    } else D.push(new na(ca.entry));
                    Z.version = ca.version;
                    Z.searchURL = H;
                    Z.videos = D;
                    typeof c == "function" && c(Z)
                }
            },
            error: function (ca) {
                throw Exception("couldn't fetch YouTube request : " + H + " : " + ca);
            }
        });
        return Z
    }
    function m(H, c) {
        var Z = "?",
            ca, D = true,
            ea = p.extend({}, c, Aa);
        for (o in ea) {
            c = o;
            ca = ea[o];
            Z += (D ? "" : "&") + c + "=" + ca;
            D = false
        }
        return H + Z
    }
    var s = function () {}, v = s.prototype,
        L = 10,
        da = 1,
        ka = "http://gdata.youtube.com/feeds/api/videos";
    MostPopular = "http://gdata.youtube.com/feeds/api/standardfeeds/most_popular";
    MostRecent = "http://gdata.youtube.com/feeds/api/standardfeeds/most_recent";
    TopRated = "http://gdata.youtube.com/feeds/api/standardfeeds/top_rated";
    TopFavs = "http://gdata.youtube.com/feeds/api/standardfeeds/top_favorites";
    RecentlyFeatured = "http://gdata.youtube.com/feeds/api/standardfeeds/recently_featured";
    SuggestURL = "http://suggestqueries.google.com/complete/search";
    Times = ["today", "this_week", "this_month", "all_time"];
    OrderBy = ["relevance", "published", "viewCount", "rating"];
    Categories = ["Film", "Autos", "Music", "Animals", "Sports", "Travel", "Shortmov", "Videoblog", "Games", "Comedy", "People", "News", "Entertainment", "Education", "Howto", "Nonprofit", "Tech"];
    var la = {
        q: "",
        orderby: OrderBy[2],
        time: Times[3],
        "max-results": L
    }, Aa = {
        key: "",
        format: 5,
        alt: "json",
        callback: "?"
    }, ma = {
        hl: "en",
        ds: "yt",
        client: "youtube",
        hjson: "t",
        cp: 1
    };
    v.init = function (H) {
        if (!H.key) throw "jQTubeUtil requires a key!";
        Aa.key = H.key;
        if (H.orderby) la.orderby = H.orderby;
        if (H.time) la.time = H.time;
        if (H.maxResults) la["max-results"] = L = H.maxResults;
        if (H.lang) ma.hl = H.lang
    };
    v.getTimes = function () {
        return Times
    };
    v.getOrders = function () {
        return OrderBy
    };
    v.getCategories = function () {
        return Categories
    };
    v.suggest = function (H, c) {
        H = {
            q: encodeURIComponent(H)
        };
        var Z = m(SuggestURL, p.extend({}, ma, H));
        p.ajax({
            type: "GET",
            dataType: "json",
            url: Z,
            success: function (ca) {
                var D = [],
                    ea = {};
                for (entry in ca[1]) D.push(ca[1][entry][0]);
                ea.suggestions = D;
                ea.searchURL = Z;
                typeof c == "function" && c(ea)
            }
        })
    };
    v.search = function (H, c, Z) {
        if (typeof H == "string") H = {
            q: encodeURIComponent(H)
        };
        Z = null != Z ? {
            category: Z
        } : {};
        return l(p.extend({}, la, H, Z), c)
    };
    v.video = function (H, c) {
        return t("http://gdata.youtube.com/feeds/api/videos/" + H + "?alt=json", c)
    };
    v.related = function (H, c) {
        return t("http://gdata.youtube.com/feeds/api/videos/" + H + "/related?alt=json", c)
    };
    v.mostViewed = function (H, c) {
        return i("http://gdata.youtube.com/feeds/api/standardfeeds/most_viewed", k(H, true),
        c)
    };
    v.mostRecent = function (H, c) {
        return i(MostRecent, k(H, false), c)
    };
    v.mostPopular = function (H, c) {
        return i(MostPopular, k(H, true), c)
    };
    v.topRated = function (H, c) {
        return i(TopRated, k(H, true), c)
    };
    v.topFavs = function (H, c) {
        return i(TopFavs, k(H, true), c)
    };
    var na = function (H) {
        var c = [],
            Z = H.id.$t,
            ca = Z.lastIndexOf("/") + 1;
        this.videoId = Z.substring(ca, Z.length);
        this.entry = H;
        this.title = H.title.$t;
        try {
            this.updated = H.updated.$t
        } catch (D) {
            c.push("updated")
        }
        try {
            this.thumbs = H.media$group.media$thumbnail
        } catch (ea) {
            c.push("thumbs")
        }
        try {
            this.duration = H.media$group.yt$duration.seconds
        } catch (C) {
            c.push("duration")
        }
        try {
            this.favCount = H.yt$statistics.favoriteCount
        } catch (I) {
            c.push("favCount")
        }
        try {
            this.rating = H.gd$rating
        } catch (E) {
            alert(E);
            c.push("rating")
        }
        try {
            this.viewCount = H.yt$statistics.viewCount
        } catch (R) {
            c.push("viewCount")
        }
        try {
            this.category = H.media$group.media$category[0].$t
        } catch (aa) {
            c.push("category")
        }
        try {
            this.categoryLabel = H.media$group.media$category[0].label
        } catch (ba) {
            c.push("categoryLabel")
        }
        try {
            this.description = H.media$group.media$description.$t
        } catch (T) {
            c.push("description")
        }
        try {
            this.keywords = H.media$group.media$keywords.$t
        } catch (ia) {
            c.push("keywords")
        }
        this.unavailAttributes = c
    };
    return new s
}(jQuery);
(function (p) {
    p.fn.accordion_defaults = {
        active: 0,
        selectedClz: "selected"
    };
    p.fn.accordion = function (i) {
        var k = p.extend({}, this.accordion_defaults, i),
            l = p(this);
        i = p("ul", l);
        i.hide();
        p(i[k.active]).show();
        return l.each(function () {
            p("a", p(this)).click(function () {
                return p.fn.accordion.select(this, l, k)
            })
        })
    };
    p.fn.accordion.select = function (i, k, l) {
        i = p(i).next();
        if (i.is("ul")) if (!i.is(":visible")) {
            p("ul", k).filter(":visible").slideUp("normal");
            i.slideDown("normal");
            i.parents("li").siblings().removeClass(l.selectedClz);
            i.parents("li").addClass(l.selectedClz)
        }
        return false
    }
})(jQuery);
jQuery.easing.jswing = jQuery.easing.swing;
jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function (p, i, k, l, t) {
        return jQuery.easing[jQuery.easing.def](p, i, k, l, t)
    },
    easeInQuad: function (p, i, k, l, t) {
        return l * (i /= t) * i + k
    },
    easeOutQuad: function (p, i, k, l, t) {
        return -l * (i /= t) * (i - 2) + k
    },
    easeInOutQuad: function (p, i, k, l, t) {
        if ((i /= t / 2) < 1) return l / 2 * i * i + k;
        return -l / 2 * (--i * (i - 2) - 1) + k
    },
    easeInCubic: function (p, i, k, l, t) {
        return l * (i /= t) * i * i + k
    },
    easeOutCubic: function (p, i, k, l, t) {
        return l * ((i = i / t - 1) * i * i + 1) + k
    },
    easeInOutCubic: function (p, i, k, l, t) {
        if ((i /= t / 2) < 1) return l / 2 * i * i * i + k;
        return l / 2 * ((i -= 2) * i * i + 2) + k
    },
    easeInQuart: function (p, i, k, l, t) {
        return l * (i /= t) * i * i * i + k
    },
    easeOutQuart: function (p, i, k, l, t) {
        return -l * ((i = i / t - 1) * i * i * i - 1) + k
    },
    easeInOutQuart: function (p, i, k, l, t) {
        if ((i /= t / 2) < 1) return l / 2 * i * i * i * i + k;
        return -l / 2 * ((i -= 2) * i * i * i - 2) + k
    },
    easeInQuint: function (p, i, k, l, t) {
        return l * (i /= t) * i * i * i * i + k
    },
    easeOutQuint: function (p, i, k, l, t) {
        return l * ((i = i / t - 1) * i * i * i * i + 1) + k
    },
    easeInOutQuint: function (p, i, k, l, t) {
        if ((i /= t / 2) < 1) return l / 2 * i * i * i * i * i + k;
        return l / 2 * ((i -= 2) * i * i * i * i + 2) + k
    },
    easeInSine: function (p,
    i, k, l, t) {
        return -l * Math.cos(i / t * (Math.PI / 2)) + l + k
    },
    easeOutSine: function (p, i, k, l, t) {
        return l * Math.sin(i / t * (Math.PI / 2)) + k
    },
    easeInOutSine: function (p, i, k, l, t) {
        return -l / 2 * (Math.cos(Math.PI * i / t) - 1) + k
    },
    easeInExpo: function (p, i, k, l, t) {
        return i == 0 ? k : l * Math.pow(2, 10 * (i / t - 1)) + k
    },
    easeOutExpo: function (p, i, k, l, t) {
        return i == t ? k + l : l * (-Math.pow(2, -10 * i / t) + 1) + k
    },
    easeInOutExpo: function (p, i, k, l, t) {
        if (i == 0) return k;
        if (i == t) return k + l;
        if ((i /= t / 2) < 1) return l / 2 * Math.pow(2, 10 * (i - 1)) + k;
        return l / 2 * (-Math.pow(2, -10 * --i) + 2) + k
    },
    easeInCirc: function (p, i, k, l, t) {
        return -l * (Math.sqrt(1 - (i /= t) * i) - 1) + k
    },
    easeOutCirc: function (p, i, k, l, t) {
        return l * Math.sqrt(1 - (i = i / t - 1) * i) + k
    },
    easeInOutCirc: function (p, i, k, l, t) {
        if ((i /= t / 2) < 1) return -l / 2 * (Math.sqrt(1 - i * i) - 1) + k;
        return l / 2 * (Math.sqrt(1 - (i -= 2) * i) + 1) + k
    },
    easeInElastic: function (p, i, k, l, t) {
        p = 1.70158;
        var m = 0,
            s = l;
        if (i == 0) return k;
        if ((i /= t) == 1) return k + l;
        m || (m = t * 0.3);
        if (s < Math.abs(l)) {
            s = l;
            p = m / 4
        } else p = m / (2 * Math.PI) * Math.asin(l / s);
        return -(s * Math.pow(2, 10 * (i -= 1)) * Math.sin((i * t - p) * 2 * Math.PI / m)) + k
    },
    easeOutElastic: function (p,
    i, k, l, t) {
        p = 1.70158;
        var m = 0,
            s = l;
        if (i == 0) return k;
        if ((i /= t) == 1) return k + l;
        m || (m = t * 0.3);
        if (s < Math.abs(l)) {
            s = l;
            p = m / 4
        } else p = m / (2 * Math.PI) * Math.asin(l / s);
        return s * Math.pow(2, -10 * i) * Math.sin((i * t - p) * 2 * Math.PI / m) + l + k
    },
    easeInOutElastic: function (p, i, k, l, t) {
        p = 1.70158;
        var m = 0,
            s = l;
        if (i == 0) return k;
        if ((i /= t / 2) == 2) return k + l;
        m || (m = t * 0.3 * 1.5);
        if (s < Math.abs(l)) {
            s = l;
            p = m / 4
        } else p = m / (2 * Math.PI) * Math.asin(l / s);
        if (i < 1) return -0.5 * s * Math.pow(2, 10 * (i -= 1)) * Math.sin((i * t - p) * 2 * Math.PI / m) + k;
        return s * Math.pow(2, -10 * (i -= 1)) * Math.sin((i * t - p) * 2 * Math.PI / m) * 0.5 + l + k
    },
    easeInBack: function (p, i, k, l, t, m) {
        if (m == undefined) m = 1.70158;
        return l * (i /= t) * i * ((m + 1) * i - m) + k
    },
    easeOutBack: function (p, i, k, l, t, m) {
        if (m == undefined) m = 1.70158;
        return l * ((i = i / t - 1) * i * ((m + 1) * i + m) + 1) + k
    },
    easeInOutBack: function (p, i, k, l, t, m) {
        if (m == undefined) m = 1.70158;
        if ((i /= t / 2) < 1) return l / 2 * i * i * (((m *= 1.525) + 1) * i - m) + k;
        return l / 2 * ((i -= 2) * i * (((m *= 1.525) + 1) * i + m) + 2) + k
    },
    easeInBounce: function (p, i, k, l, t) {
        return l - jQuery.easing.easeOutBounce(p, t - i, 0, l, t) + k
    },
    easeOutBounce: function (p, i, k, l, t) {
        return (i /= t) < 1 / 2.75 ? l * 7.5625 * i * i + k : i < 2 / 2.75 ? l * (7.5625 * (i -= 1.5 / 2.75) * i + 0.75) + k : i < 2.5 / 2.75 ? l * (7.5625 * (i -= 2.25 / 2.75) * i + 0.9375) + k : l * (7.5625 * (i -= 2.625 / 2.75) * i + 0.984375) + k
    },
    easeInOutBounce: function (p, i, k, l, t) {
        if (i < t / 2) return jQuery.easing.easeInBounce(p, i * 2, 0, l, t) * 0.5 + k;
        return jQuery.easing.easeOutBounce(p, i * 2 - t, 0, l, t) * 0.5 + l * 0.5 + k
    }
});
(function (p) {
    function i(t) {
        var m;
        if (t && t.constructor == Array && t.length == 3) return t;
        if (m = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(t)) return [parseInt(m[1]), parseInt(m[2]), parseInt(m[3])];
        if (m = /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(t)) return [parseFloat(m[1]) * 2.55, parseFloat(m[2]) * 2.55, parseFloat(m[3]) * 2.55];
        if (m = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(t)) return [parseInt(m[1], 16), parseInt(m[2],
        16), parseInt(m[3], 16)];
        if (m = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(t)) return [parseInt(m[1] + m[1], 16), parseInt(m[2] + m[2], 16), parseInt(m[3] + m[3], 16)];
        return l[p.trim(t).toLowerCase()]
    }
    function k(t, m) {
        var s;
        do {
            s = p.curCSS(t, m);
            if (s != "" && s != "transparent" || p.nodeName(t, "body")) break;
            m = "backgroundColor"
        } while (t = t.parentNode);
        return i(s)
    }
    p.each(["backgroundColor", "borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor", "color", "outlineColor"], function (t, m) {
        p.fx.step[m] = function (s) {
            if (s.state == 0) {
                s.start = k(s.elem, m);
                s.end = i(s.end)
            }
            s.elem.style[m] = "rgb(" + [Math.max(Math.min(parseInt(s.pos * (s.end[0] - s.start[0]) + s.start[0]), 255), 0), Math.max(Math.min(parseInt(s.pos * (s.end[1] - s.start[1]) + s.start[1]), 255), 0), Math.max(Math.min(parseInt(s.pos * (s.end[2] - s.start[2]) + s.start[2]), 255), 0)].join(",") + ")"
        }
    });
    var l = {
        aqua: [0, 255, 255],
        azure: [240, 255, 255],
        beige: [245, 245, 220],
        black: [0, 0, 0],
        blue: [0, 0, 255],
        brown: [165, 42, 42],
        cyan: [0, 255, 255],
        darkblue: [0, 0, 139],
        darkcyan: [0, 139, 139],
        darkgrey: [169, 169, 169],
        darkgreen: [0,
        100, 0],
        darkkhaki: [189, 183, 107],
        darkmagenta: [139, 0, 139],
        darkolivegreen: [85, 107, 47],
        darkorange: [255, 140, 0],
        darkorchid: [153, 50, 204],
        darkred: [139, 0, 0],
        darksalmon: [233, 150, 122],
        darkviolet: [148, 0, 211],
        fuchsia: [255, 0, 255],
        gold: [255, 215, 0],
        green: [0, 128, 0],
        indigo: [75, 0, 130],
        khaki: [240, 230, 140],
        lightblue: [173, 216, 230],
        lightcyan: [224, 255, 255],
        lightgreen: [144, 238, 144],
        lightgrey: [211, 211, 211],
        lightpink: [255, 182, 193],
        lightyellow: [255, 255, 224],
        lime: [0, 255, 0],
        magenta: [255, 0, 255],
        maroon: [128, 0, 0],
        navy: [0, 0, 128],
        olive: [128,
        128, 0],
        orange: [255, 165, 0],
        pink: [255, 192, 203],
        purple: [128, 0, 128],
        violet: [128, 0, 128],
        red: [255, 0, 0],
        silver: [192, 192, 192],
        white: [255, 255, 255],
        yellow: [255, 255, 0]
    }
})(jQuery);
(function (p) {
    function i() {
        var da = window.location.hash;
        if (!TT.undefined(da)) {
            da = jQuery("[tab='" + da.replace("#", "") + "']");
            if (da.parents(".ui-tabs")) {
                var ka = da.parents(".ui-tabs").index();
                jQuery(da.parents(".ui-basic-tabs:visible").find("ul:first-child").find("[tab]")[ka - 1]).find("a").trigger("click")
            }
            da.find("a").trigger("click")
        }
    }
    function k() {}
    function l() {
        var da = jQuery("<script src='http://twitter.com/statuses/user_timeline/ntikku.json?callback=twitterCallback2&amp;count=6'><\/script>");
        jQuery("body").append(da)
    }

    function t() {
        jQuery(".blog-entry").mouseenter(function () {
            var da = jQuery(this).find(".content");
            da.is(":visible") || da.animate({
                height: "toggle",
                opacity: "toggle"
            }, 600)
        })
    }
    function m() {
        return jQuery("body").attr("target")
    }
    function s() {
        return m() == "home"
    }
    function v() {
        return m() == "blog"
    }
    var L = function () {};
    L.prototype.init = function () {
        s() && l();
        v() && t();
        k();
        TT.initAfterStack(i);
        p("body").attr("target") == "jquery-jqtube-util" && jQTubeUtil.init({
            key: "AI39si60UmOiyTb4Pg9kSmqg4Vo2RC290YMztfSKl-vE1eoXj6rDZDgZfT5D7QQ6mKWWeRX5Pjr6hy3dT6OOUcBCTmvHja0mgg"
        })
    };
    TT.extend_website("tikku", new L)
})(jQuery);

