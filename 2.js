!function() {
    "use strict";
    var n, t = function(i, u) {
        function b(n) {
            return Math.floor(n)
        }
        function ut() {
            var n = f.params.autoplay
              , t = f.slides.eq(f.activeIndex);
            t.attr("data-swiper-autoplay") && (n = t.attr("data-swiper-autoplay") || f.params.autoplay);
            f.autoplayTimeoutId = setTimeout(function() {
                f.params.loop ? (f.fixLoop(),
                f._slideNext(),
                f.emit("onAutoplay", f)) : f.isEnd ? u.autoplayStopOnLast ? f.stopAutoplay() : (f._slideTo(0),
                f.emit("onAutoplay", f)) : (f._slideNext(),
                f.emit("onAutoplay", f))
            }, n)
        }
        function ft(t, i) {
            var r = n(t.target), u;
            if (!r.is(i))
                if ("string" == typeof i)
                    r = r.parents(i);
                else if (i.nodeType)
                    return r.parents().each(function(n, t) {
                        t === i && (u = i)
                    }),
                    u ? i : void 0;
            if (0 !== r.length)
                return r[0]
        }
        function et(n, t) {
            t = t || {};
            var r = window.MutationObserver || window.WebkitMutationObserver
              , i = new r(function(n) {
                n.forEach(function(n) {
                    f.onResize(!0);
                    f.emit("onObserverUpdate", f, n)
                })
            }
            );
            i.observe(n, {
                attributes: void 0 === t.attributes || t.attributes,
                childList: void 0 === t.childList || t.childList,
                characterData: void 0 === t.characterData || t.characterData
            });
            f.observers.push(i)
        }
        function yt(n) {
            var t, o, s, e, r;
            if ((n.originalEvent && (n = n.originalEvent),
            t = n.keyCode || n.charCode,
            !f.params.allowSwipeToNext && (f.isHorizontal() && 39 === t || !f.isHorizontal() && 40 === t)) || !f.params.allowSwipeToPrev && (f.isHorizontal() && 37 === t || !f.isHorizontal() && 38 === t))
                return !1;
            if (!(n.shiftKey || n.altKey || n.ctrlKey || n.metaKey || document.activeElement && document.activeElement.nodeName && ("input" === document.activeElement.nodeName.toLowerCase() || "textarea" === document.activeElement.nodeName.toLowerCase()))) {
                if (37 === t || 39 === t || 38 === t || 40 === t) {
                    if (o = !1,
                    f.container.parents("." + f.params.slideClass).length > 0 && 0 === f.container.parents("." + f.params.slideActiveClass).length)
                        return;
                    var u = {
                        left: window.pageXOffset,
                        top: window.pageYOffset
                    }
                      , h = window.innerWidth
                      , c = window.innerHeight
                      , i = f.container.offset();
                    for (f.rtl && (i.left = i.left - f.container[0].scrollLeft),
                    s = [[i.left, i.top], [i.left + f.width, i.top], [i.left, i.top + f.height], [i.left + f.width, i.top + f.height]],
                    e = 0; e < s.length; e++)
                        r = s[e],
                        r[0] >= u.left && r[0] <= u.left + h && r[1] >= u.top && r[1] <= u.top + c && (o = !0);
                    if (!o)
                        return
                }
                f.isHorizontal() ? (37 !== t && 39 !== t || (n.preventDefault ? n.preventDefault() : n.returnValue = !1),
                (39 === t && !f.rtl || 37 === t && f.rtl) && f.slideNext(),
                (37 === t && !f.rtl || 39 === t && f.rtl) && f.slidePrev()) : (38 !== t && 40 !== t || (n.preventDefault ? n.preventDefault() : n.returnValue = !1),
                40 === t && f.slideNext(),
                38 === t && f.slidePrev());
                f.emit("onKeyPress", f, t)
            }
        }
        function kt(n) {
            var u = 0
              , t = 0
              , i = 0
              , r = 0;
            return "detail"in n && (t = n.detail),
            "wheelDelta"in n && (t = -n.wheelDelta / 120),
            "wheelDeltaY"in n && (t = -n.wheelDeltaY / 120),
            "wheelDeltaX"in n && (u = -n.wheelDeltaX / 120),
            "axis"in n && n.axis === n.HORIZONTAL_AXIS && (u = t,
            t = 0),
            i = 10 * u,
            r = 10 * t,
            "deltaY"in n && (r = n.deltaY),
            "deltaX"in n && (i = n.deltaX),
            (i || r) && n.deltaMode && (1 === n.deltaMode ? (i *= 40,
            r *= 40) : (i *= 800,
            r *= 800)),
            i && !u && (u = i < 1 ? -1 : 1),
            r && !t && (t = r < 1 ? -1 : 1),
            {
                spinX: u,
                spinY: t,
                pixelX: i,
                pixelY: r
            }
        }
        function pt(n) {
            n.originalEvent && (n = n.originalEvent);
            var i = 0
              , u = f.rtl ? -1 : 1
              , t = kt(n);
            if (f.params.mousewheelForceToAxis)
                if (f.isHorizontal()) {
                    if (!(Math.abs(t.pixelX) > Math.abs(t.pixelY)))
                        return;
                    i = t.pixelX * u
                } else {
                    if (!(Math.abs(t.pixelY) > Math.abs(t.pixelX)))
                        return;
                    i = t.pixelY
                }
            else
                i = Math.abs(t.pixelX) > Math.abs(t.pixelY) ? -t.pixelX * u : -t.pixelY;
            if (0 !== i) {
                if (f.params.mousewheelInvert && (i = -i),
                f.params.freeMode) {
                    var r = f.getWrapperTranslate() + i * f.params.mousewheelSensitivity
                      , e = f.isBeginning
                      , o = f.isEnd;
                    if (r >= f.minTranslate() && (r = f.minTranslate()),
                    r <= f.maxTranslate() && (r = f.maxTranslate()),
                    f.setWrapperTransition(0),
                    f.setWrapperTranslate(r),
                    f.updateProgress(),
                    f.updateActiveIndex(),
                    (!e && f.isBeginning || !o && f.isEnd) && f.updateClasses(),
                    f.params.freeModeSticky ? (clearTimeout(f.mousewheel.timeout),
                    f.mousewheel.timeout = setTimeout(function() {
                        f.slideReset()
                    }, 300)) : f.params.lazyLoading && f.lazy && f.lazy.load(),
                    f.emit("onScroll", f, n),
                    f.params.autoplay && f.params.autoplayDisableOnInteraction && f.stopAutoplay(),
                    0 === r || r === f.maxTranslate())
                        return
                } else {
                    if ((new window.Date).getTime() - f.mousewheel.lastScrollTime > 60)
                        if (i < 0)
                            if (f.isEnd && !f.params.loop || f.animating) {
                                if (f.params.mousewheelReleaseOnEdges)
                                    return !0
                            } else
                                f.slideNext(),
                                f.emit("onScroll", f, n);
                        else if (f.isBeginning && !f.params.loop || f.animating) {
                            if (f.params.mousewheelReleaseOnEdges)
                                return !0
                        } else
                            f.slidePrev(),
                            f.emit("onScroll", f, n);
                    f.mousewheel.lastScrollTime = (new window.Date).getTime()
                }
                return n.preventDefault ? n.preventDefault() : n.returnValue = !1,
                !1
            }
        }
        function wt(t, i) {
            t = n(t);
            var e, r, u, o = f.rtl ? -1 : 1;
            e = t.attr("data-swiper-parallax") || "0";
            r = t.attr("data-swiper-parallax-x");
            u = t.attr("data-swiper-parallax-y");
            r || u ? (r = r || "0",
            u = u || "0") : f.isHorizontal() ? (r = e,
            u = "0") : (u = e,
            r = "0");
            r = r.indexOf("%") >= 0 ? parseInt(r, 10) * i * o + "%" : r * i * o + "px";
            u = u.indexOf("%") >= 0 ? parseInt(u, 10) * i + "%" : u * i + "px";
            t.transform("translate3d(" + r + ", " + u + ",0px)")
        }
        function ot(n) {
            return 0 !== n.indexOf("on") && (n = n[0] !== n[0].toUpperCase() ? "on" + n[0].toUpperCase() + n.substring(1) : "on" + n),
            n
        }
        var y, bt, p, o, st, h, k, f, ht, it, rt, at, vt;
        if (!(this instanceof t))
            return new t(i,u);
        y = {
            direction: "horizontal",
            touchEventsTarget: "container",
            initialSlide: 0,
            speed: 300,
            autoplay: !1,
            autoplayDisableOnInteraction: !0,
            autoplayStopOnLast: !1,
            iOSEdgeSwipeDetection: !1,
            iOSEdgeSwipeThreshold: 20,
            freeMode: !1,
            freeModeMomentum: !0,
            freeModeMomentumRatio: 1,
            freeModeMomentumBounce: !0,
            freeModeMomentumBounceRatio: 1,
            freeModeMomentumVelocityRatio: 1,
            freeModeSticky: !1,
            freeModeMinimumVelocity: .02,
            autoHeight: !1,
            setWrapperSize: !1,
            virtualTranslate: !1,
            effect: "slide",
            coverflow: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: !0
            },
            flip: {
                slideShadows: !0,
                limitRotation: !0
            },
            cube: {
                slideShadows: !0,
                shadow: !0,
                shadowOffset: 20,
                shadowScale: .94
            },
            fade: {
                crossFade: !1
            },
            parallax: !1,
            zoom: !1,
            zoomMax: 3,
            zoomMin: 1,
            zoomToggle: !0,
            scrollbar: null,
            scrollbarHide: !0,
            scrollbarDraggable: !1,
            scrollbarSnapOnRelease: !1,
            keyboardControl: !1,
            mousewheelControl: !1,
            mousewheelReleaseOnEdges: !1,
            mousewheelInvert: !1,
            mousewheelForceToAxis: !1,
            mousewheelSensitivity: 1,
            mousewheelEventsTarged: "container",
            hashnav: !1,
            hashnavWatchState: !1,
            history: !1,
            replaceState: !1,
            breakpoints: void 0,
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerColumnFill: "column",
            slidesPerGroup: 1,
            centeredSlides: !1,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            roundLengths: !1,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: !0,
            shortSwipes: !0,
            longSwipes: !0,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: !0,
            onlyExternal: !1,
            threshold: 0,
            touchMoveStopPropagation: !0,
            touchReleaseOnEdges: !1,
            uniqueNavElements: !0,
            pagination: null,
            paginationElement: "span",
            paginationClickable: !1,
            paginationHide: !1,
            paginationBulletRender: null,
            paginationProgressRender: null,
            paginationFractionRender: null,
            paginationCustomRender: null,
            paginationType: "bullets",
            resistance: !0,
            resistanceRatio: .85,
            nextButton: null,
            prevButton: null,
            watchSlidesProgress: !1,
            watchSlidesVisibility: !1,
            grabCursor: !1,
            preventClicks: !0,
            preventClicksPropagation: !0,
            slideToClickedSlide: !1,
            lazyLoading: !1,
            lazyLoadingInPrevNext: !1,
            lazyLoadingInPrevNextAmount: 1,
            lazyLoadingOnTransitionStart: !1,
            preloadImages: !0,
            updateOnImagesReady: !0,
            loop: !1,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            control: void 0,
            controlInverse: !1,
            controlBy: "slide",
            normalizeSlideIndex: !0,
            allowSwipeToPrev: !0,
            allowSwipeToNext: !0,
            swipeHandler: null,
            noSwiping: !0,
            noSwipingClass: "swiper-no-swiping",
            passiveListeners: !0,
            containerModifierClass: "swiper-container-",
            slideClass: "swiper-slide",
            slideActiveClass: "swiper-slide-active",
            slideDuplicateActiveClass: "swiper-slide-duplicate-active",
            slideVisibleClass: "swiper-slide-visible",
            slideDuplicateClass: "swiper-slide-duplicate",
            slideNextClass: "swiper-slide-next",
            slideDuplicateNextClass: "swiper-slide-duplicate-next",
            slidePrevClass: "swiper-slide-prev",
            slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
            wrapperClass: "swiper-wrapper",
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
            buttonDisabledClass: "swiper-button-disabled",
            paginationCurrentClass: "swiper-pagination-current",
            paginationTotalClass: "swiper-pagination-total",
            paginationHiddenClass: "swiper-pagination-hidden",
            paginationProgressbarClass: "swiper-pagination-progressbar",
            paginationClickableClass: "swiper-pagination-clickable",
            paginationModifierClass: "swiper-pagination-",
            lazyLoadingClass: "swiper-lazy",
            lazyStatusLoadingClass: "swiper-lazy-loading",
            lazyStatusLoadedClass: "swiper-lazy-loaded",
            lazyPreloaderClass: "swiper-lazy-preloader",
            notificationClass: "swiper-notification",
            preloaderClass: "preloader",
            zoomContainerClass: "swiper-zoom-container",
            observer: !1,
            observeParents: !1,
            a11y: !1,
            prevSlideMessage: "Previous slide",
            nextSlideMessage: "Next slide",
            firstSlideMessage: "This is the first slide",
            lastSlideMessage: "This is the last slide",
            paginationBulletMessage: "Go to slide {{index}}",
            runCallbacksOnInit: !0
        };
        bt = u && u.virtualTranslate;
        u = u || {};
        p = {};
        for (o in u)
            if ("object" != typeof u[o] || null === u[o] || u[o].nodeType || u[o] === window || u[o] === document || void 0 !== r && u[o]instanceof r || "undefined" != typeof jQuery && u[o]instanceof jQuery)
                p[o] = u[o];
            else {
                p[o] = {};
                for (st in u[o])
                    p[o][st] = u[o][st]
            }
        for (h in y)
            if (void 0 === u[h])
                u[h] = y[h];
            else if ("object" == typeof u[h])
                for (k in y[h])
                    void 0 === u[h][k] && (u[h][k] = y[h][k]);
        if (f = this,
        f.params = u,
        f.originalParams = p,
        f.classNames = [],
        void 0 !== n && void 0 !== r && (n = r),
        (void 0 !== n || (n = void 0 === r ? window.Dom7 || window.Zepto || window.jQuery : r)) && (f.$ = n,
        f.currentBreakpoint = void 0,
        f.getActiveBreakpoint = function() {
            var n, i, t, r;
            if (!f.params.breakpoints)
                return !1;
            i = !1;
            t = [];
            for (n in f.params.breakpoints)
                f.params.breakpoints.hasOwnProperty(n) && t.push(n);
            for (t.sort(function(n, t) {
                return parseInt(n, 10) > parseInt(t, 10)
            }),
            r = 0; r < t.length; r++)
                (n = t[r]) >= window.innerWidth && !i && (i = n);
            return i || "max"
        }
        ,
        f.setBreakpoint = function() {
            var n = f.getActiveBreakpoint(), t, r, i;
            if (n && f.currentBreakpoint !== n) {
                t = n in f.params.breakpoints ? f.params.breakpoints[n] : f.originalParams;
                r = f.params.loop && t.slidesPerView !== f.params.slidesPerView;
                for (i in t)
                    f.params[i] = t[i];
                f.currentBreakpoint = n;
                r && f.destroyLoop && f.reLoop(!0)
            }
        }
        ,
        f.params.breakpoints && f.setBreakpoint(),
        f.container = n(i),
        0 !== f.container.length)) {
            if (f.container.length > 1)
                return ht = [],
                f.container.each(function() {
                    ht.push(new t(this,u))
                }),
                ht;
            f.container[0].swiper = f;
            f.container.data("swiper", f);
            f.classNames.push(f.params.containerModifierClass + f.params.direction);
            f.params.freeMode && f.classNames.push(f.params.containerModifierClass + "free-mode");
            f.support.flexbox || (f.classNames.push(f.params.containerModifierClass + "no-flexbox"),
            f.params.slidesPerColumn = 1);
            f.params.autoHeight && f.classNames.push(f.params.containerModifierClass + "autoheight");
            (f.params.parallax || f.params.watchSlidesVisibility) && (f.params.watchSlidesProgress = !0);
            f.params.touchReleaseOnEdges && (f.params.resistanceRatio = 0);
            ["cube", "coverflow", "flip"].indexOf(f.params.effect) >= 0 && (f.support.transforms3d ? (f.params.watchSlidesProgress = !0,
            f.classNames.push(f.params.containerModifierClass + "3d")) : f.params.effect = "slide");
            "slide" !== f.params.effect && f.classNames.push(f.params.containerModifierClass + f.params.effect);
            "cube" === f.params.effect && (f.params.resistanceRatio = 0,
            f.params.slidesPerView = 1,
            f.params.slidesPerColumn = 1,
            f.params.slidesPerGroup = 1,
            f.params.centeredSlides = !1,
            f.params.spaceBetween = 0,
            f.params.virtualTranslate = !0);
            "fade" !== f.params.effect && "flip" !== f.params.effect || (f.params.slidesPerView = 1,
            f.params.slidesPerColumn = 1,
            f.params.slidesPerGroup = 1,
            f.params.watchSlidesProgress = !0,
            f.params.spaceBetween = 0,
            void 0 === bt && (f.params.virtualTranslate = !0));
            f.params.grabCursor && f.support.touch && (f.params.grabCursor = !1);
            f.wrapper = f.container.children("." + f.params.wrapperClass);
            f.params.pagination && (f.paginationContainer = n(f.params.pagination),
            f.params.uniqueNavElements && "string" == typeof f.params.pagination && f.paginationContainer.length > 1 && 1 === f.container.find(f.params.pagination).length && (f.paginationContainer = f.container.find(f.params.pagination)),
            "bullets" === f.params.paginationType && f.params.paginationClickable ? f.paginationContainer.addClass(f.params.paginationModifierClass + "clickable") : f.params.paginationClickable = !1,
            f.paginationContainer.addClass(f.params.paginationModifierClass + f.params.paginationType));
            (f.params.nextButton || f.params.prevButton) && (f.params.nextButton && (f.nextButton = n(f.params.nextButton),
            f.params.uniqueNavElements && "string" == typeof f.params.nextButton && f.nextButton.length > 1 && 1 === f.container.find(f.params.nextButton).length && (f.nextButton = f.container.find(f.params.nextButton))),
            f.params.prevButton && (f.prevButton = n(f.params.prevButton),
            f.params.uniqueNavElements && "string" == typeof f.params.prevButton && f.prevButton.length > 1 && 1 === f.container.find(f.params.prevButton).length && (f.prevButton = f.container.find(f.params.prevButton))));
            f.isHorizontal = function() {
                return "horizontal" === f.params.direction
            }
            ;
            f.rtl = f.isHorizontal() && ("rtl" === f.container[0].dir.toLowerCase() || "rtl" === f.container.css("direction"));
            f.rtl && f.classNames.push(f.params.containerModifierClass + "rtl");
            f.rtl && (f.wrongRTL = "-webkit-box" === f.wrapper.css("display"));
            f.params.slidesPerColumn > 1 && f.classNames.push(f.params.containerModifierClass + "multirow");
            f.device.android && f.classNames.push(f.params.containerModifierClass + "android");
            f.container.addClass(f.classNames.join(" "));
            f.translate = 0;
            f.progress = 0;
            f.velocity = 0;
            f.lockSwipeToNext = function() {
                f.params.allowSwipeToNext = !1;
                f.params.allowSwipeToPrev === !1 && f.params.grabCursor && f.unsetGrabCursor()
            }
            ;
            f.lockSwipeToPrev = function() {
                f.params.allowSwipeToPrev = !1;
                f.params.allowSwipeToNext === !1 && f.params.grabCursor && f.unsetGrabCursor()
            }
            ;
            f.lockSwipes = function() {
                f.params.allowSwipeToNext = f.params.allowSwipeToPrev = !1;
                f.params.grabCursor && f.unsetGrabCursor()
            }
            ;
            f.unlockSwipeToNext = function() {
                f.params.allowSwipeToNext = !0;
                f.params.allowSwipeToPrev === !0 && f.params.grabCursor && f.setGrabCursor()
            }
            ;
            f.unlockSwipeToPrev = function() {
                f.params.allowSwipeToPrev = !0;
                f.params.allowSwipeToNext === !0 && f.params.grabCursor && f.setGrabCursor()
            }
            ;
            f.unlockSwipes = function() {
                f.params.allowSwipeToNext = f.params.allowSwipeToPrev = !0;
                f.params.grabCursor && f.setGrabCursor()
            }
            ;
            f.setGrabCursor = function(n) {
                f.container[0].style.cursor = "move";
                f.container[0].style.cursor = n ? "-webkit-grabbing" : "-webkit-grab";
                f.container[0].style.cursor = n ? "-moz-grabbin" : "-moz-grab";
                f.container[0].style.cursor = n ? "grabbing" : "grab"
            }
            ;
            f.unsetGrabCursor = function() {
                f.container[0].style.cursor = ""
            }
            ;
            f.params.grabCursor && f.setGrabCursor();
            f.imagesToLoad = [];
            f.imagesLoaded = 0;
            f.loadImage = function(n, t, i, r, u, f) {
                function o() {
                    f && f()
                }
                var e;
                n.complete && u ? o() : t ? (e = new window.Image,
                e.onload = o,
                e.onerror = o,
                r && (e.sizes = r),
                i && (e.srcset = i),
                t && (e.src = t)) : o()
            }
            ;
            f.preloadImages = function() {
                function t() {
                    void 0 !== f && null !== f && f && (void 0 !== f.imagesLoaded && f.imagesLoaded++,
                    f.imagesLoaded === f.imagesToLoad.length && (f.params.updateOnImagesReady && f.update(),
                    f.emit("onImagesReady", f)))
                }
                f.imagesToLoad = f.container.find("img");
                for (var n = 0; n < f.imagesToLoad.length; n++)
                    f.loadImage(f.imagesToLoad[n], f.imagesToLoad[n].currentSrc || f.imagesToLoad[n].getAttribute("src"), f.imagesToLoad[n].srcset || f.imagesToLoad[n].getAttribute("srcset"), f.imagesToLoad[n].sizes || f.imagesToLoad[n].getAttribute("sizes"), !0, t)
            }
            ;
            f.autoplayTimeoutId = void 0;
            f.autoplaying = !1;
            f.autoplayPaused = !1;
            f.startAutoplay = function() {
                return void 0 === f.autoplayTimeoutId && !!f.params.autoplay && !f.autoplaying && (f.autoplaying = !0,
                f.emit("onAutoplayStart", f),
                void ut())
            }
            ;
            f.stopAutoplay = function() {
                f.autoplayTimeoutId && (f.autoplayTimeoutId && clearTimeout(f.autoplayTimeoutId),
                f.autoplaying = !1,
                f.autoplayTimeoutId = void 0,
                f.emit("onAutoplayStop", f))
            }
            ;
            f.pauseAutoplay = function(n) {
                f.autoplayPaused || (f.autoplayTimeoutId && clearTimeout(f.autoplayTimeoutId),
                f.autoplayPaused = !0,
                0 === n ? (f.autoplayPaused = !1,
                ut()) : f.wrapper.transitionEnd(function() {
                    f && (f.autoplayPaused = !1,
                    f.autoplaying ? ut() : f.stopAutoplay())
                }))
            }
            ;
            f.minTranslate = function() {
                return -f.snapGrid[0]
            }
            ;
            f.maxTranslate = function() {
                return -f.snapGrid[f.snapGrid.length - 1]
            }
            ;
            f.updateAutoHeight = function() {
                var n, t = [], i = 0, r, u;
                if ("auto" !== f.params.slidesPerView && f.params.slidesPerView > 1)
                    for (n = 0; n < Math.ceil(f.params.slidesPerView); n++) {
                        if (r = f.activeIndex + n,
                        r > f.slides.length)
                            break;
                        t.push(f.slides.eq(r)[0])
                    }
                else
                    t.push(f.slides.eq(f.activeIndex)[0]);
                for (n = 0; n < t.length; n++)
                    void 0 !== t[n] && (u = t[n].offsetHeight,
                    i = u > i ? u : i);
                i && f.wrapper.css("height", i + "px")
            }
            ;
            f.updateContainerSize = function() {
                var n, t;
                n = void 0 !== f.params.width ? f.params.width : f.container[0].clientWidth;
                t = void 0 !== f.params.height ? f.params.height : f.container[0].clientHeight;
                0 === n && f.isHorizontal() || 0 === t && !f.isHorizontal() || (n = n - parseInt(f.container.css("padding-left"), 10) - parseInt(f.container.css("padding-right"), 10),
                t = t - parseInt(f.container.css("padding-top"), 10) - parseInt(f.container.css("padding-bottom"), 10),
                f.width = n,
                f.height = t,
                f.size = f.isHorizontal() ? f.width : f.height)
            }
            ;
            f.updateSlidesSize = function() {
                var o, h, c, e, u, l;
                f.slides = f.wrapper.children("." + f.params.slideClass);
                f.snapGrid = [];
                f.slidesGrid = [];
                f.slidesSizesGrid = [];
                var n, i = f.params.spaceBetween, r = -f.params.slidesOffsetBefore, v = 0, y = 0;
                if (void 0 !== f.size) {
                    "string" == typeof i && i.indexOf("%") >= 0 && (i = parseFloat(i.replace("%", "")) / 100 * f.size);
                    f.virtualSize = -i;
                    f.rtl ? f.slides.css({
                        marginLeft: "",
                        marginTop: ""
                    }) : f.slides.css({
                        marginRight: "",
                        marginBottom: ""
                    });
                    f.params.slidesPerColumn > 1 && (o = Math.floor(f.slides.length / f.params.slidesPerColumn) === f.slides.length / f.params.slidesPerColumn ? f.slides.length : Math.ceil(f.slides.length / f.params.slidesPerColumn) * f.params.slidesPerColumn,
                    "auto" !== f.params.slidesPerView && "row" === f.params.slidesPerColumnFill && (o = Math.max(o, f.params.slidesPerView * f.params.slidesPerColumn)));
                    var t, s = f.params.slidesPerColumn, a = o / s, p = a - (f.params.slidesPerColumn * a - f.slides.length);
                    for (n = 0; n < f.slides.length; n++)
                        t = 0,
                        h = f.slides.eq(n),
                        f.params.slidesPerColumn > 1 && ("column" === f.params.slidesPerColumnFill ? (e = Math.floor(n / s),
                        u = n - e * s,
                        (e > p || e === p && u === s - 1) && ++u >= s && (u = 0,
                        e++),
                        c = e + u * o / s,
                        h.css({
                            "-webkit-box-ordinal-group": c,
                            "-moz-box-ordinal-group": c,
                            "-ms-flex-order": c,
                            "-webkit-order": c,
                            order: c
                        })) : (u = Math.floor(n / a),
                        e = n - u * a),
                        h.css("margin-" + (f.isHorizontal() ? "top" : "left"), 0 !== u && f.params.spaceBetween && f.params.spaceBetween + "px").attr("data-swiper-column", e).attr("data-swiper-row", u)),
                        "none" !== h.css("display") && ("auto" === f.params.slidesPerView ? (t = f.isHorizontal() ? h.outerWidth(!0) : h.outerHeight(!0),
                        f.params.roundLengths && (t = b(t))) : (t = (f.size - (f.params.slidesPerView - 1) * i) / f.params.slidesPerView,
                        f.params.roundLengths && (t = b(t)),
                        f.isHorizontal() ? f.slides[n].style.width = t + "px" : f.slides[n].style.height = t + "px"),
                        f.slides[n].swiperSlideSize = t,
                        f.slidesSizesGrid.push(t),
                        f.params.centeredSlides ? (r = r + t / 2 + v / 2 + i,
                        0 === v && 0 !== n && (r = r - f.size / 2 - i),
                        0 === n && (r = r - f.size / 2 - i),
                        Math.abs(r) < .001 && (r = 0),
                        y % f.params.slidesPerGroup == 0 && f.snapGrid.push(r),
                        f.slidesGrid.push(r)) : (y % f.params.slidesPerGroup == 0 && f.snapGrid.push(r),
                        f.slidesGrid.push(r),
                        r = r + t + i),
                        f.virtualSize += t + i,
                        v = t,
                        y++);
                    if (f.virtualSize = Math.max(f.virtualSize, f.size) + f.params.slidesOffsetAfter,
                    f.rtl && f.wrongRTL && ("slide" === f.params.effect || "coverflow" === f.params.effect) && f.wrapper.css({
                        width: f.virtualSize + f.params.spaceBetween + "px"
                    }),
                    f.support.flexbox && !f.params.setWrapperSize || (f.isHorizontal() ? f.wrapper.css({
                        width: f.virtualSize + f.params.spaceBetween + "px"
                    }) : f.wrapper.css({
                        height: f.virtualSize + f.params.spaceBetween + "px"
                    })),
                    f.params.slidesPerColumn > 1 && (f.virtualSize = (t + f.params.spaceBetween) * o,
                    f.virtualSize = Math.ceil(f.virtualSize / f.params.slidesPerColumn) - f.params.spaceBetween,
                    f.isHorizontal() ? f.wrapper.css({
                        width: f.virtualSize + f.params.spaceBetween + "px"
                    }) : f.wrapper.css({
                        height: f.virtualSize + f.params.spaceBetween + "px"
                    }),
                    f.params.centeredSlides)) {
                        for (l = [],
                        n = 0; n < f.snapGrid.length; n++)
                            f.snapGrid[n] < f.virtualSize + f.snapGrid[0] && l.push(f.snapGrid[n]);
                        f.snapGrid = l
                    }
                    if (!f.params.centeredSlides) {
                        for (l = [],
                        n = 0; n < f.snapGrid.length; n++)
                            f.snapGrid[n] <= f.virtualSize - f.size && l.push(f.snapGrid[n]);
                        f.snapGrid = l;
                        Math.floor(f.virtualSize - f.size) - Math.floor(f.snapGrid[f.snapGrid.length - 1]) > 1 && f.snapGrid.push(f.virtualSize - f.size)
                    }
                    0 === f.snapGrid.length && (f.snapGrid = [0]);
                    0 !== f.params.spaceBetween && (f.isHorizontal() ? f.rtl ? f.slides.css({
                        marginLeft: i + "px"
                    }) : f.slides.css({
                        marginRight: i + "px"
                    }) : f.slides.css({
                        marginBottom: i + "px"
                    }));
                    f.params.watchSlidesProgress && f.updateSlidesOffset()
                }
            }
            ;
            f.updateSlidesOffset = function() {
                for (var n = 0; n < f.slides.length; n++)
                    f.slides[n].swiperSlideOffset = f.isHorizontal() ? f.slides[n].offsetLeft : f.slides[n].offsetTop
            }
            ;
            f.currentSlidesPerView = function() {
                var n, t, r = 1, u, i;
                if (f.params.centeredSlides) {
                    for (i = f.slides[f.activeIndex].swiperSlideSize,
                    n = f.activeIndex + 1; n < f.slides.length; n++)
                        f.slides[n] && !u && (i += f.slides[n].swiperSlideSize,
                        r++,
                        i > f.size && (u = !0));
                    for (t = f.activeIndex - 1; t >= 0; t--)
                        f.slides[t] && !u && (i += f.slides[t].swiperSlideSize,
                        r++,
                        i > f.size && (u = !0))
                } else
                    for (n = f.activeIndex + 1; n < f.slides.length; n++)
                        f.slidesGrid[n] - f.slidesGrid[f.activeIndex] < f.size && r++;
                return r
            }
            ;
            f.updateSlidesProgress = function(n) {
                var u, t, i, o, r, e;
                if (void 0 === n && (n = f.translate || 0),
                0 !== f.slides.length)
                    for (void 0 === f.slides[0].swiperSlideOffset && f.updateSlidesOffset(),
                    u = -n,
                    f.rtl && (u = n),
                    f.slides.removeClass(f.params.slideVisibleClass),
                    t = 0; t < f.slides.length; t++)
                        i = f.slides[t],
                        o = (u + (f.params.centeredSlides ? f.minTranslate() : 0) - i.swiperSlideOffset) / (i.swiperSlideSize + f.params.spaceBetween),
                        f.params.watchSlidesVisibility && (r = -(u - i.swiperSlideOffset),
                        e = r + f.slidesSizesGrid[t],
                        (r >= 0 && r < f.size || e > 0 && e <= f.size || r <= 0 && e >= f.size) && f.slides.eq(t).addClass(f.params.slideVisibleClass)),
                        i.progress = f.rtl ? -o : o
            }
            ;
            f.updateProgress = function(n) {
                void 0 === n && (n = f.translate || 0);
                var t = f.maxTranslate() - f.minTranslate()
                  , i = f.isBeginning
                  , r = f.isEnd;
                0 === t ? (f.progress = 0,
                f.isBeginning = f.isEnd = !0) : (f.progress = (n - f.minTranslate()) / t,
                f.isBeginning = f.progress <= 0,
                f.isEnd = f.progress >= 1);
                f.isBeginning && !i && f.emit("onReachBeginning", f);
                f.isEnd && !r && f.emit("onReachEnd", f);
                f.params.watchSlidesProgress && f.updateSlidesProgress(n);
                f.emit("onProgress", f, f.progress)
            }
            ;
            f.updateActiveIndex = function() {
                for (var t, r, i = f.rtl ? f.translate : -f.translate, n = 0; n < f.slidesGrid.length; n++)
                    void 0 !== f.slidesGrid[n + 1] ? i >= f.slidesGrid[n] && i < f.slidesGrid[n + 1] - (f.slidesGrid[n + 1] - f.slidesGrid[n]) / 2 ? t = n : i >= f.slidesGrid[n] && i < f.slidesGrid[n + 1] && (t = n + 1) : i >= f.slidesGrid[n] && (t = n);
                f.params.normalizeSlideIndex && (t < 0 || void 0 === t) && (t = 0);
                r = Math.floor(t / f.params.slidesPerGroup);
                r >= f.snapGrid.length && (r = f.snapGrid.length - 1);
                t !== f.activeIndex && (f.snapIndex = r,
                f.previousIndex = f.activeIndex,
                f.activeIndex = t,
                f.updateClasses(),
                f.updateRealIndex())
            }
            ;
            f.updateRealIndex = function() {
                f.realIndex = parseInt(f.slides.eq(f.activeIndex).attr("data-swiper-slide-index") || f.activeIndex, 10)
            }
            ;
            f.updateClasses = function() {
                var o, i, r, t, e;
                if (f.slides.removeClass(f.params.slideActiveClass + " " + f.params.slideNextClass + " " + f.params.slidePrevClass + " " + f.params.slideDuplicateActiveClass + " " + f.params.slideDuplicateNextClass + " " + f.params.slideDuplicatePrevClass),
                o = f.slides.eq(f.activeIndex),
                o.addClass(f.params.slideActiveClass),
                u.loop && (o.hasClass(f.params.slideDuplicateClass) ? f.wrapper.children("." + f.params.slideClass + ":not(." + f.params.slideDuplicateClass + ')[data-swiper-slide-index="' + f.realIndex + '"]').addClass(f.params.slideDuplicateActiveClass) : f.wrapper.children("." + f.params.slideClass + "." + f.params.slideDuplicateClass + '[data-swiper-slide-index="' + f.realIndex + '"]').addClass(f.params.slideDuplicateActiveClass)),
                i = o.next("." + f.params.slideClass).addClass(f.params.slideNextClass),
                f.params.loop && 0 === i.length && (i = f.slides.eq(0),
                i.addClass(f.params.slideNextClass)),
                r = o.prev("." + f.params.slideClass).addClass(f.params.slidePrevClass),
                f.params.loop && 0 === r.length && (r = f.slides.eq(-1),
                r.addClass(f.params.slidePrevClass)),
                u.loop && (i.hasClass(f.params.slideDuplicateClass) ? f.wrapper.children("." + f.params.slideClass + ":not(." + f.params.slideDuplicateClass + ')[data-swiper-slide-index="' + i.attr("data-swiper-slide-index") + '"]').addClass(f.params.slideDuplicateNextClass) : f.wrapper.children("." + f.params.slideClass + "." + f.params.slideDuplicateClass + '[data-swiper-slide-index="' + i.attr("data-swiper-slide-index") + '"]').addClass(f.params.slideDuplicateNextClass),
                r.hasClass(f.params.slideDuplicateClass) ? f.wrapper.children("." + f.params.slideClass + ":not(." + f.params.slideDuplicateClass + ')[data-swiper-slide-index="' + r.attr("data-swiper-slide-index") + '"]').addClass(f.params.slideDuplicatePrevClass) : f.wrapper.children("." + f.params.slideClass + "." + f.params.slideDuplicateClass + '[data-swiper-slide-index="' + r.attr("data-swiper-slide-index") + '"]').addClass(f.params.slideDuplicatePrevClass)),
                f.paginationContainer && f.paginationContainer.length > 0) {
                    if (e = f.params.loop ? Math.ceil((f.slides.length - 2 * f.loopedSlides) / f.params.slidesPerGroup) : f.snapGrid.length,
                    f.params.loop ? (t = Math.ceil((f.activeIndex - f.loopedSlides) / f.params.slidesPerGroup),
                    t > f.slides.length - 1 - 2 * f.loopedSlides && (t -= f.slides.length - 2 * f.loopedSlides),
                    t > e - 1 && (t -= e),
                    t < 0 && "bullets" !== f.params.paginationType && (t = e + t)) : t = void 0 !== f.snapIndex ? f.snapIndex : f.activeIndex || 0,
                    "bullets" === f.params.paginationType && f.bullets && f.bullets.length > 0 && (f.bullets.removeClass(f.params.bulletActiveClass),
                    f.paginationContainer.length > 1 ? f.bullets.each(function() {
                        n(this).index() === t && n(this).addClass(f.params.bulletActiveClass)
                    }) : f.bullets.eq(t).addClass(f.params.bulletActiveClass)),
                    "fraction" === f.params.paginationType && (f.paginationContainer.find("." + f.params.paginationCurrentClass).text(t + 1),
                    f.paginationContainer.find("." + f.params.paginationTotalClass).text(e)),
                    "progress" === f.params.paginationType) {
                        var s = (t + 1) / e
                          , h = s
                          , c = 1;
                        f.isHorizontal() || (c = s,
                        h = 1);
                        f.paginationContainer.find("." + f.params.paginationProgressbarClass).transform("translate3d(0,0,0) scaleX(" + h + ") scaleY(" + c + ")").transition(f.params.speed)
                    }
                    "custom" === f.params.paginationType && f.params.paginationCustomRender && (f.paginationContainer.html(f.params.paginationCustomRender(f, t + 1, e)),
                    f.emit("onPaginationRendered", f, f.paginationContainer[0]))
                }
                f.params.loop || (f.params.prevButton && f.prevButton && f.prevButton.length > 0 && (f.isBeginning ? (f.prevButton.addClass(f.params.buttonDisabledClass),
                f.params.a11y && f.a11y && f.a11y.disable(f.prevButton)) : (f.prevButton.removeClass(f.params.buttonDisabledClass),
                f.params.a11y && f.a11y && f.a11y.enable(f.prevButton))),
                f.params.nextButton && f.nextButton && f.nextButton.length > 0 && (f.isEnd ? (f.nextButton.addClass(f.params.buttonDisabledClass),
                f.params.a11y && f.a11y && f.a11y.disable(f.nextButton)) : (f.nextButton.removeClass(f.params.buttonDisabledClass),
                f.params.a11y && f.a11y && f.a11y.enable(f.nextButton))))
            }
            ;
            f.updatePagination = function() {
                var n, i, t;
                if (f.params.pagination && f.paginationContainer && f.paginationContainer.length > 0) {
                    if (n = "",
                    "bullets" === f.params.paginationType) {
                        for (i = f.params.loop ? Math.ceil((f.slides.length - 2 * f.loopedSlides) / f.params.slidesPerGroup) : f.snapGrid.length,
                        t = 0; t < i; t++)
                            n += f.params.paginationBulletRender ? f.params.paginationBulletRender(f, t, f.params.bulletClass) : "<" + f.params.paginationElement + ' class="' + f.params.bulletClass + '"><\/' + f.params.paginationElement + ">";
                        f.paginationContainer.html(n);
                        f.bullets = f.paginationContainer.find("." + f.params.bulletClass);
                        f.params.paginationClickable && f.params.a11y && f.a11y && f.a11y.initPagination()
                    }
                    "fraction" === f.params.paginationType && (n = f.params.paginationFractionRender ? f.params.paginationFractionRender(f, f.params.paginationCurrentClass, f.params.paginationTotalClass) : '<span class="' + f.params.paginationCurrentClass + '"><\/span> / <span class="' + f.params.paginationTotalClass + '"><\/span>',
                    f.paginationContainer.html(n));
                    "progress" === f.params.paginationType && (n = f.params.paginationProgressRender ? f.params.paginationProgressRender(f, f.params.paginationProgressbarClass) : '<span class="' + f.params.paginationProgressbarClass + '"><\/span>',
                    f.paginationContainer.html(n));
                    "custom" !== f.params.paginationType && f.emit("onPaginationRendered", f, f.paginationContainer[0])
                }
            }
            ;
            f.update = function(n) {
                function t() {
                    f.rtl;
                    f.translate;
                    i = Math.min(Math.max(f.translate, f.maxTranslate()), f.minTranslate());
                    f.setWrapperTranslate(i);
                    f.updateActiveIndex();
                    f.updateClasses()
                }
                if (f) {
                    f.updateContainerSize();
                    f.updateSlidesSize();
                    f.updateProgress();
                    f.updatePagination();
                    f.updateClasses();
                    f.params.scrollbar && f.scrollbar && f.scrollbar.set();
                    var i;
                    n ? (f.controller && f.controller.spline && (f.controller.spline = void 0),
                    f.params.freeMode ? (t(),
                    f.params.autoHeight && f.updateAutoHeight()) : (("auto" === f.params.slidesPerView || f.params.slidesPerView > 1) && f.isEnd && !f.params.centeredSlides ? f.slideTo(f.slides.length - 1, 0, !1, !0) : f.slideTo(f.activeIndex, 0, !1, !0)) || t()) : f.params.autoHeight && f.updateAutoHeight()
                }
            }
            ;
            f.onResize = function(n) {
                var i, r, t, u;
                f.params.onBeforeResize && f.params.onBeforeResize(f);
                f.params.breakpoints && f.setBreakpoint();
                i = f.params.allowSwipeToPrev;
                r = f.params.allowSwipeToNext;
                f.params.allowSwipeToPrev = f.params.allowSwipeToNext = !0;
                f.updateContainerSize();
                f.updateSlidesSize();
                ("auto" === f.params.slidesPerView || f.params.freeMode || n) && f.updatePagination();
                f.params.scrollbar && f.scrollbar && f.scrollbar.set();
                f.controller && f.controller.spline && (f.controller.spline = void 0);
                t = !1;
                f.params.freeMode ? (u = Math.min(Math.max(f.translate, f.maxTranslate()), f.minTranslate()),
                f.setWrapperTranslate(u),
                f.updateActiveIndex(),
                f.updateClasses(),
                f.params.autoHeight && f.updateAutoHeight()) : (f.updateClasses(),
                t = ("auto" === f.params.slidesPerView || f.params.slidesPerView > 1) && f.isEnd && !f.params.centeredSlides ? f.slideTo(f.slides.length - 1, 0, !1, !0) : f.slideTo(f.activeIndex, 0, !1, !0));
                f.params.lazyLoading && !t && f.lazy && f.lazy.load();
                f.params.allowSwipeToPrev = i;
                f.params.allowSwipeToNext = r;
                f.params.onAfterResize && f.params.onAfterResize(f)
            }
            ;
            f.touchEventsDesktop = {
                start: "mousedown",
                move: "mousemove",
                end: "mouseup"
            };
            window.navigator.pointerEnabled ? f.touchEventsDesktop = {
                start: "pointerdown",
                move: "pointermove",
                end: "pointerup"
            } : window.navigator.msPointerEnabled && (f.touchEventsDesktop = {
                start: "MSPointerDown",
                move: "MSPointerMove",
                end: "MSPointerUp"
            });
            f.touchEvents = {
                start: f.support.touch || !f.params.simulateTouch ? "touchstart" : f.touchEventsDesktop.start,
                move: f.support.touch || !f.params.simulateTouch ? "touchmove" : f.touchEventsDesktop.move,
                end: f.support.touch || !f.params.simulateTouch ? "touchend" : f.touchEventsDesktop.end
            };
            (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && ("container" === f.params.touchEventsTarget ? f.container : f.wrapper).addClass("swiper-wp8-" + f.params.direction);
            f.initEvents = function(n) {
                var r = n ? "off" : "on", t = n ? "removeEventListener" : "addEventListener", i = "container" === f.params.touchEventsTarget ? f.container[0] : f.wrapper[0], s = f.support.touch ? i : document, e = !!f.params.nested, o;
                f.browser.ie ? (i[t](f.touchEvents.start, f.onTouchStart, !1),
                s[t](f.touchEvents.move, f.onTouchMove, e),
                s[t](f.touchEvents.end, f.onTouchEnd, !1)) : (f.support.touch && (o = !("touchstart" !== f.touchEvents.start || !f.support.passiveListener || !f.params.passiveListeners) && {
                    passive: !0,
                    capture: !1
                },
                i[t](f.touchEvents.start, f.onTouchStart, o),
                i[t](f.touchEvents.move, f.onTouchMove, e),
                i[t](f.touchEvents.end, f.onTouchEnd, o)),
                (u.simulateTouch && !f.device.ios && !f.device.android || u.simulateTouch && !f.support.touch && f.device.ios) && (i[t]("mousedown", f.onTouchStart, !1),
                document[t]("mousemove", f.onTouchMove, e),
                document[t]("mouseup", f.onTouchEnd, !1)));
                window[t]("resize", f.onResize);
                f.params.nextButton && f.nextButton && f.nextButton.length > 0 && (f.nextButton[r]("click", f.onClickNext),
                f.params.a11y && f.a11y && f.nextButton[r]("keydown", f.a11y.onEnterKey));
                f.params.prevButton && f.prevButton && f.prevButton.length > 0 && (f.prevButton[r]("click", f.onClickPrev),
                f.params.a11y && f.a11y && f.prevButton[r]("keydown", f.a11y.onEnterKey));
                f.params.pagination && f.params.paginationClickable && (f.paginationContainer[r]("click", "." + f.params.bulletClass, f.onClickIndex),
                f.params.a11y && f.a11y && f.paginationContainer[r]("keydown", "." + f.params.bulletClass, f.a11y.onEnterKey));
                (f.params.preventClicks || f.params.preventClicksPropagation) && i[t]("click", f.preventClicks, !0)
            }
            ;
            f.attachEvents = function() {
                f.initEvents()
            }
            ;
            f.detachEvents = function() {
                f.initEvents(!0)
            }
            ;
            f.allowClick = !0;
            f.preventClicks = function(n) {
                f.allowClick || (f.params.preventClicks && n.preventDefault(),
                f.params.preventClicksPropagation && f.animating && (n.stopPropagation(),
                n.stopImmediatePropagation()))
            }
            ;
            f.onClickNext = function(n) {
                n.preventDefault();
                f.isEnd && !f.params.loop || f.slideNext()
            }
            ;
            f.onClickPrev = function(n) {
                n.preventDefault();
                f.isBeginning && !f.params.loop || f.slidePrev()
            }
            ;
            f.onClickIndex = function(t) {
                t.preventDefault();
                var i = n(this).index() * f.params.slidesPerGroup;
                f.params.loop && (i += f.loopedSlides);
                f.slideTo(i)
            }
            ;
            f.updateClickedSlide = function(t) {
                var r = ft(t, "." + f.params.slideClass), s = !1, u, o, i, e;
                if (r)
                    for (u = 0; u < f.slides.length; u++)
                        f.slides[u] === r && (s = !0);
                if (!r || !s)
                    return f.clickedSlide = void 0,
                    void (f.clickedIndex = void 0);
                if (f.clickedSlide = r,
                f.clickedIndex = n(r).index(),
                f.params.slideToClickedSlide && void 0 !== f.clickedIndex && f.clickedIndex !== f.activeIndex)
                    if (i = f.clickedIndex,
                    e = "auto" === f.params.slidesPerView ? f.currentSlidesPerView() : f.params.slidesPerView,
                    f.params.loop) {
                        if (f.animating)
                            return;
                        o = parseInt(n(f.clickedSlide).attr("data-swiper-slide-index"), 10);
                        f.params.centeredSlides ? i < f.loopedSlides - e / 2 || i > f.slides.length - f.loopedSlides + e / 2 ? (f.fixLoop(),
                        i = f.wrapper.children("." + f.params.slideClass + '[data-swiper-slide-index="' + o + '"]:not(.' + f.params.slideDuplicateClass + ")").eq(0).index(),
                        setTimeout(function() {
                            f.slideTo(i)
                        }, 0)) : f.slideTo(i) : i > f.slides.length - e ? (f.fixLoop(),
                        i = f.wrapper.children("." + f.params.slideClass + '[data-swiper-slide-index="' + o + '"]:not(.' + f.params.slideDuplicateClass + ")").eq(0).index(),
                        setTimeout(function() {
                            f.slideTo(i)
                        }, 0)) : f.slideTo(i)
                    } else
                        f.slideTo(i)
            }
            ;
            var c, l, d, g, v, e, s, nt, w, tt, ct = "input, select, textarea, button, video", lt = Date.now(), a = [];
            f.animating = !1;
            f.touches = {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0
            };
            f.onTouchStart = function(t) {
                var i, u, r;
                if (t.originalEvent && (t = t.originalEvent),
                (it = "touchstart" === t.type) || !("which"in t) || 3 !== t.which) {
                    if (f.params.noSwiping && ft(t, "." + f.params.noSwipingClass))
                        return void (f.allowClick = !0);
                    (!f.params.swipeHandler || ft(t, f.params.swipeHandler)) && (i = f.touches.currentX = "touchstart" === t.type ? t.targetTouches[0].pageX : t.pageX,
                    u = f.touches.currentY = "touchstart" === t.type ? t.targetTouches[0].pageY : t.pageY,
                    f.device.ios && f.params.iOSEdgeSwipeDetection && i <= f.params.iOSEdgeSwipeThreshold || ((c = !0,
                    l = !1,
                    d = !0,
                    v = void 0,
                    rt = void 0,
                    f.touches.startX = i,
                    f.touches.startY = u,
                    g = Date.now(),
                    f.allowClick = !0,
                    f.updateContainerSize(),
                    f.swipeDirection = void 0,
                    f.params.threshold > 0 && (nt = !1),
                    "touchstart" !== t.type) && (r = !0,
                    n(t.target).is(ct) && (r = !1),
                    document.activeElement && n(document.activeElement).is(ct) && document.activeElement.blur(),
                    r && t.preventDefault()),
                    f.emit("onTouchStart", f, t)))
                }
            }
            ;
            f.onTouchMove = function(t) {
                var o, i, r;
                if (t.originalEvent && (t = t.originalEvent),
                !it || "mousemove" !== t.type) {
                    if (t.preventedByNestedSwiper)
                        return f.touches.startX = "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX,
                        void (f.touches.startY = "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY);
                    if (f.params.onlyExternal)
                        return f.allowClick = !1,
                        void (c && (f.touches.startX = f.touches.currentX = "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX,
                        f.touches.startY = f.touches.currentY = "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY,
                        g = Date.now()));
                    if (it && f.params.touchReleaseOnEdges && !f.params.loop)
                        if (f.isHorizontal()) {
                            if (f.touches.currentX < f.touches.startX && f.translate <= f.maxTranslate() || f.touches.currentX > f.touches.startX && f.translate >= f.minTranslate())
                                return
                        } else if (f.touches.currentY < f.touches.startY && f.translate <= f.maxTranslate() || f.touches.currentY > f.touches.startY && f.translate >= f.minTranslate())
                            return;
                    if (it && document.activeElement && t.target === document.activeElement && n(t.target).is(ct))
                        return l = !0,
                        void (f.allowClick = !1);
                    if ((d && f.emit("onTouchMove", f, t),
                    !(t.targetTouches && t.targetTouches.length > 1)) && ((f.touches.currentX = "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX,
                    f.touches.currentY = "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY,
                    void 0 === v) && (f.isHorizontal() && f.touches.currentY === f.touches.startY || !f.isHorizontal() && f.touches.currentX === f.touches.startX ? v = !1 : (o = 180 * Math.atan2(Math.abs(f.touches.currentY - f.touches.startY), Math.abs(f.touches.currentX - f.touches.startX)) / Math.PI,
                    v = f.isHorizontal() ? o > f.params.touchAngle : 90 - o > f.params.touchAngle)),
                    v && f.emit("onTouchMoveOpposite", f, t),
                    void 0 === rt && (f.touches.currentX === f.touches.startX && f.touches.currentY === f.touches.startY || (rt = !0)),
                    c)) {
                        if (v)
                            return void (c = !1);
                        if (rt) {
                            if (f.allowClick = !1,
                            f.emit("onSliderMove", f, t),
                            t.preventDefault(),
                            f.params.touchMoveStopPropagation && !f.params.nested && t.stopPropagation(),
                            l || (u.loop && f.fixLoop(),
                            s = f.getWrapperTranslate(),
                            f.setWrapperTransition(0),
                            f.animating && f.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"),
                            f.params.autoplay && f.autoplaying && (f.params.autoplayDisableOnInteraction ? f.stopAutoplay() : f.pauseAutoplay()),
                            tt = !1,
                            !f.params.grabCursor || f.params.allowSwipeToNext !== !0 && f.params.allowSwipeToPrev !== !0 || f.setGrabCursor(!0)),
                            l = !0,
                            i = f.touches.diff = f.isHorizontal() ? f.touches.currentX - f.touches.startX : f.touches.currentY - f.touches.startY,
                            i *= f.params.touchRatio,
                            f.rtl && (i = -i),
                            f.swipeDirection = i > 0 ? "prev" : "next",
                            e = i + s,
                            r = !0,
                            i > 0 && e > f.minTranslate() ? (r = !1,
                            f.params.resistance && (e = f.minTranslate() - 1 + Math.pow(-f.minTranslate() + s + i, f.params.resistanceRatio))) : i < 0 && e < f.maxTranslate() && (r = !1,
                            f.params.resistance && (e = f.maxTranslate() + 1 - Math.pow(f.maxTranslate() - s - i, f.params.resistanceRatio))),
                            r && (t.preventedByNestedSwiper = !0),
                            !f.params.allowSwipeToNext && "next" === f.swipeDirection && e < s && (e = s),
                            !f.params.allowSwipeToPrev && "prev" === f.swipeDirection && e > s && (e = s),
                            f.params.threshold > 0) {
                                if (!(Math.abs(i) > f.params.threshold || nt))
                                    return void (e = s);
                                if (!nt)
                                    return nt = !0,
                                    f.touches.startX = f.touches.currentX,
                                    f.touches.startY = f.touches.currentY,
                                    e = s,
                                    void (f.touches.diff = f.isHorizontal() ? f.touches.currentX - f.touches.startX : f.touches.currentY - f.touches.startY)
                            }
                            f.params.followFinger && ((f.params.freeMode || f.params.watchSlidesProgress) && f.updateActiveIndex(),
                            f.params.freeMode && (0 === a.length && a.push({
                                position: f.touches[f.isHorizontal() ? "startX" : "startY"],
                                time: g
                            }),
                            a.push({
                                position: f.touches[f.isHorizontal() ? "currentX" : "currentY"],
                                time: (new window.Date).getTime()
                            })),
                            f.updateProgress(e),
                            f.setWrapperTranslate(e))
                        }
                    }
                }
            }
            ;
            f.onTouchEnd = function(t) {
                var b, v, o, nt, it, y, p, h, r, u, rt, ft;
                if (t.originalEvent && (t = t.originalEvent),
                d && f.emit("onTouchEnd", f, t),
                d = !1,
                c) {
                    if (f.params.grabCursor && l && c && (f.params.allowSwipeToNext === !0 || f.params.allowSwipeToPrev === !0) && f.setGrabCursor(!1),
                    b = Date.now(),
                    v = b - g,
                    f.allowClick && (f.updateClickedSlide(t),
                    f.emit("onTap", f, t),
                    v < 300 && b - lt > 300 && (w && clearTimeout(w),
                    w = setTimeout(function() {
                        f && (f.params.paginationHide && f.paginationContainer.length > 0 && !n(t.target).hasClass(f.params.bulletClass) && f.paginationContainer.toggleClass(f.params.paginationHiddenClass),
                        f.emit("onClick", f, t))
                    }, 300)),
                    v < 300 && b - lt < 300 && (w && clearTimeout(w),
                    f.emit("onDoubleTap", f, t))),
                    lt = Date.now(),
                    setTimeout(function() {
                        f && (f.allowClick = !0)
                    }, 0),
                    !c || !l || !f.swipeDirection || 0 === f.touches.diff || e === s)
                        return void (c = l = !1);
                    if (c = l = !1,
                    o = f.params.followFinger ? f.rtl ? f.translate : -f.translate : -e,
                    f.params.freeMode) {
                        if (o < -f.minTranslate())
                            return void f.slideTo(f.activeIndex);
                        if (o > -f.maxTranslate())
                            return void (f.slides.length < f.snapGrid.length ? f.slideTo(f.snapGrid.length - 1) : f.slideTo(f.slides.length - 1));
                        if (f.params.freeModeMomentum) {
                            if (a.length > 1) {
                                var ut = a.pop()
                                  , et = a.pop()
                                  , st = ut.position - et.position
                                  , ot = ut.time - et.time;
                                f.velocity = st / ot;
                                f.velocity = f.velocity / 2;
                                Math.abs(f.velocity) < f.params.freeModeMinimumVelocity && (f.velocity = 0);
                                (ot > 150 || (new window.Date).getTime() - ut.time > 300) && (f.velocity = 0)
                            } else
                                f.velocity = 0;
                            f.velocity = f.velocity * f.params.freeModeMomentumVelocityRatio;
                            a.length = 0;
                            var k = 1e3 * f.params.freeModeMomentumRatio
                              , ht = f.velocity * k
                              , i = f.translate + ht;
                            if (f.rtl && (i = -i),
                            it = !1,
                            y = 20 * Math.abs(f.velocity) * f.params.freeModeMomentumBounceRatio,
                            i < f.maxTranslate())
                                f.params.freeModeMomentumBounce ? (i + f.maxTranslate() < -y && (i = f.maxTranslate() - y),
                                nt = f.maxTranslate(),
                                it = !0,
                                tt = !0) : i = f.maxTranslate();
                            else if (i > f.minTranslate())
                                f.params.freeModeMomentumBounce ? (i - f.minTranslate() > y && (i = f.minTranslate() + y),
                                nt = f.minTranslate(),
                                it = !0,
                                tt = !0) : i = f.minTranslate();
                            else if (f.params.freeModeSticky) {
                                for (h = 0,
                                h = 0; h < f.snapGrid.length; h += 1)
                                    if (f.snapGrid[h] > -i) {
                                        p = h;
                                        break
                                    }
                                i = Math.abs(f.snapGrid[p] - i) < Math.abs(f.snapGrid[p - 1] - i) || "next" === f.swipeDirection ? f.snapGrid[p] : f.snapGrid[p - 1];
                                f.rtl || (i = -i)
                            }
                            if (0 !== f.velocity)
                                k = f.rtl ? Math.abs((-i - f.translate) / f.velocity) : Math.abs((i - f.translate) / f.velocity);
                            else if (f.params.freeModeSticky)
                                return void f.slideReset();
                            f.params.freeModeMomentumBounce && it ? (f.updateProgress(nt),
                            f.setWrapperTransition(k),
                            f.setWrapperTranslate(i),
                            f.onTransitionStart(),
                            f.animating = !0,
                            f.wrapper.transitionEnd(function() {
                                f && tt && (f.emit("onMomentumBounce", f),
                                f.setWrapperTransition(f.params.speed),
                                f.setWrapperTranslate(nt),
                                f.wrapper.transitionEnd(function() {
                                    f && f.onTransitionEnd()
                                }))
                            })) : f.velocity ? (f.updateProgress(i),
                            f.setWrapperTransition(k),
                            f.setWrapperTranslate(i),
                            f.onTransitionStart(),
                            f.animating || (f.animating = !0,
                            f.wrapper.transitionEnd(function() {
                                f && f.onTransitionEnd()
                            }))) : f.updateProgress(i);
                            f.updateActiveIndex()
                        }
                        return void ((!f.params.freeModeMomentum || v >= f.params.longSwipesMs) && (f.updateProgress(),
                        f.updateActiveIndex()))
                    }
                    for (u = 0,
                    rt = f.slidesSizesGrid[0],
                    r = 0; r < f.slidesGrid.length; r += f.params.slidesPerGroup)
                        void 0 !== f.slidesGrid[r + f.params.slidesPerGroup] ? o >= f.slidesGrid[r] && o < f.slidesGrid[r + f.params.slidesPerGroup] && (u = r,
                        rt = f.slidesGrid[r + f.params.slidesPerGroup] - f.slidesGrid[r]) : o >= f.slidesGrid[r] && (u = r,
                        rt = f.slidesGrid[f.slidesGrid.length - 1] - f.slidesGrid[f.slidesGrid.length - 2]);
                    if (ft = (o - f.slidesGrid[u]) / rt,
                    v > f.params.longSwipesMs) {
                        if (!f.params.longSwipes)
                            return void f.slideTo(f.activeIndex);
                        "next" === f.swipeDirection && (ft >= f.params.longSwipesRatio ? f.slideTo(u + f.params.slidesPerGroup) : f.slideTo(u));
                        "prev" === f.swipeDirection && (ft > 1 - f.params.longSwipesRatio ? f.slideTo(u + f.params.slidesPerGroup) : f.slideTo(u))
                    } else {
                        if (!f.params.shortSwipes)
                            return void f.slideTo(f.activeIndex);
                        "next" === f.swipeDirection && f.slideTo(u + f.params.slidesPerGroup);
                        "prev" === f.swipeDirection && f.slideTo(u)
                    }
                }
            }
            ;
            f._slideTo = function(n, t) {
                return f.slideTo(n, t, !0, !0)
            }
            ;
            f.slideTo = function(n, t, i, r) {
                var u, e;
                if (void 0 === i && (i = !0),
                void 0 === n && (n = 0),
                n < 0 && (n = 0),
                f.snapIndex = Math.floor(n / f.params.slidesPerGroup),
                f.snapIndex >= f.snapGrid.length && (f.snapIndex = f.snapGrid.length - 1),
                u = -f.snapGrid[f.snapIndex],
                f.params.autoplay && f.autoplaying && (r || !f.params.autoplayDisableOnInteraction ? f.pauseAutoplay(t) : f.stopAutoplay()),
                f.updateProgress(u),
                f.params.normalizeSlideIndex)
                    for (e = 0; e < f.slidesGrid.length; e++)
                        -Math.floor(100 * u) >= Math.floor(100 * f.slidesGrid[e]) && (n = e);
                return !(!f.params.allowSwipeToNext && u < f.translate && u < f.minTranslate()) && !(!f.params.allowSwipeToPrev && u > f.translate && u > f.maxTranslate() && (f.activeIndex || 0) !== n) && (void 0 === t && (t = f.params.speed),
                f.previousIndex = f.activeIndex || 0,
                f.activeIndex = n,
                f.updateRealIndex(),
                f.rtl && -u === f.translate || !f.rtl && u === f.translate ? (f.params.autoHeight && f.updateAutoHeight(),
                f.updateClasses(),
                "slide" !== f.params.effect && f.setWrapperTranslate(u),
                !1) : (f.updateClasses(),
                f.onTransitionStart(i),
                0 === t || f.browser.lteIE9 ? (f.setWrapperTranslate(u),
                f.setWrapperTransition(0),
                f.onTransitionEnd(i)) : (f.setWrapperTranslate(u),
                f.setWrapperTransition(t),
                f.animating || (f.animating = !0,
                f.wrapper.transitionEnd(function() {
                    f && f.onTransitionEnd(i)
                }))),
                !0))
            }
            ;
            f.onTransitionStart = function(n) {
                void 0 === n && (n = !0);
                f.params.autoHeight && f.updateAutoHeight();
                f.lazy && f.lazy.onTransitionStart();
                n && (f.emit("onTransitionStart", f),
                f.activeIndex !== f.previousIndex && (f.emit("onSlideChangeStart", f),
                f.activeIndex > f.previousIndex ? f.emit("onSlideNextStart", f) : f.emit("onSlidePrevStart", f)))
            }
            ;
            f.onTransitionEnd = function(n) {
                f.animating = !1;
                f.setWrapperTransition(0);
                void 0 === n && (n = !0);
                f.lazy && f.lazy.onTransitionEnd();
                n && (f.emit("onTransitionEnd", f),
                f.activeIndex !== f.previousIndex && (f.emit("onSlideChangeEnd", f),
                f.activeIndex > f.previousIndex ? f.emit("onSlideNextEnd", f) : f.emit("onSlidePrevEnd", f)));
                f.params.history && f.history && f.history.setHistory(f.params.history, f.activeIndex);
                f.params.hashnav && f.hashnav && f.hashnav.setHash()
            }
            ;
            f.slideNext = function(n, t, i) {
                return f.params.loop ? f.animating ? !1 : (f.fixLoop(),
                f.container[0].clientLeft,
                f.slideTo(f.activeIndex + f.params.slidesPerGroup, t, n, i)) : f.slideTo(f.activeIndex + f.params.slidesPerGroup, t, n, i)
            }
            ;
            f._slideNext = function(n) {
                return f.slideNext(!0, n, !0)
            }
            ;
            f.slidePrev = function(n, t, i) {
                return f.params.loop ? f.animating ? !1 : (f.fixLoop(),
                f.container[0].clientLeft,
                f.slideTo(f.activeIndex - 1, t, n, i)) : f.slideTo(f.activeIndex - 1, t, n, i)
            }
            ;
            f._slidePrev = function(n) {
                return f.slidePrev(!0, n, !0)
            }
            ;
            f.slideReset = function(n, t) {
                return f.slideTo(f.activeIndex, t, n)
            }
            ;
            f.disableTouchControl = function() {
                return f.params.onlyExternal = !0,
                !0
            }
            ;
            f.enableTouchControl = function() {
                return f.params.onlyExternal = !1,
                !0
            }
            ;
            f.setWrapperTransition = function(n, t) {
                f.wrapper.transition(n);
                "slide" !== f.params.effect && f.effects[f.params.effect] && f.effects[f.params.effect].setTransition(n);
                f.params.parallax && f.parallax && f.parallax.setTransition(n);
                f.params.scrollbar && f.scrollbar && f.scrollbar.setTransition(n);
                f.params.control && f.controller && f.controller.setTransition(n, t);
                f.emit("onSetTransition", f, n)
            }
            ;
            f.setWrapperTranslate = function(n, t, i) {
                var r = 0, u = 0, o, e;
                f.isHorizontal() ? r = f.rtl ? -n : n : u = n;
                f.params.roundLengths && (r = b(r),
                u = b(u));
                f.params.virtualTranslate || (f.support.transforms3d ? f.wrapper.transform("translate3d(" + r + "px, " + u + "px, 0px)") : f.wrapper.transform("translate(" + r + "px, " + u + "px)"));
                f.translate = f.isHorizontal() ? r : u;
                e = f.maxTranslate() - f.minTranslate();
                o = 0 === e ? 0 : (n - f.minTranslate()) / e;
                o !== f.progress && f.updateProgress(n);
                t && f.updateActiveIndex();
                "slide" !== f.params.effect && f.effects[f.params.effect] && f.effects[f.params.effect].setTranslate(f.translate);
                f.params.parallax && f.parallax && f.parallax.setTranslate(f.translate);
                f.params.scrollbar && f.scrollbar && f.scrollbar.setTranslate(f.translate);
                f.params.control && f.controller && f.controller.setTranslate(f.translate, i);
                f.emit("onSetTranslate", f, f.translate)
            }
            ;
            f.getTranslate = function(n, t) {
                var u, i, r, e;
                return void 0 === t && (t = "x"),
                f.params.virtualTranslate ? f.rtl ? -f.translate : f.translate : (r = window.getComputedStyle(n, null),
                window.WebKitCSSMatrix ? (i = r.transform || r.webkitTransform,
                i.split(",").length > 6 && (i = i.split(", ").map(function(n) {
                    return n.replace(",", ".")
                }).join(", ")),
                e = new window.WebKitCSSMatrix("none" === i ? "" : i)) : (e = r.MozTransform || r.OTransform || r.MsTransform || r.msTransform || r.transform || r.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"),
                u = e.toString().split(",")),
                "x" === t && (i = window.WebKitCSSMatrix ? e.m41 : 16 === u.length ? parseFloat(u[12]) : parseFloat(u[4])),
                "y" === t && (i = window.WebKitCSSMatrix ? e.m42 : 16 === u.length ? parseFloat(u[13]) : parseFloat(u[5])),
                f.rtl && i && (i = -i),
                i || 0)
            }
            ;
            f.getWrapperTranslate = function(n) {
                return void 0 === n && (n = f.isHorizontal() ? "x" : "y"),
                f.getTranslate(f.wrapper[0], n)
            }
            ;
            f.observers = [];
            f.initObservers = function() {
                if (f.params.observeParents)
                    for (var t = f.container.parents(), n = 0; n < t.length; n++)
                        et(t[n]);
                et(f.container[0], {
                    childList: !1
                });
                et(f.wrapper[0], {
                    attributes: !1
                })
            }
            ;
            f.disconnectObservers = function() {
                for (var n = 0; n < f.observers.length; n++)
                    f.observers[n].disconnect();
                f.observers = []
            }
            ;
            f.createLoop = function() {
                var i, t, r, u;
                for (f.wrapper.children("." + f.params.slideClass + "." + f.params.slideDuplicateClass).remove(),
                i = f.wrapper.children("." + f.params.slideClass),
                "auto" !== f.params.slidesPerView || f.params.loopedSlides || (f.params.loopedSlides = i.length),
                f.loopedSlides = parseInt(f.params.loopedSlides || f.params.slidesPerView, 10),
                f.loopedSlides = f.loopedSlides + f.params.loopAdditionalSlides,
                f.loopedSlides > i.length && (f.loopedSlides = i.length),
                r = [],
                u = [],
                i.each(function(t, e) {
                    var o = n(this);
                    t < f.loopedSlides && u.push(e);
                    t < i.length && t >= i.length - f.loopedSlides && r.push(e);
                    o.attr("data-swiper-slide-index", t)
                }),
                t = 0; t < u.length; t++)
                    f.wrapper.append(n(u[t].cloneNode(!0)).addClass(f.params.slideDuplicateClass));
                for (t = r.length - 1; t >= 0; t--)
                    f.wrapper.prepend(n(r[t].cloneNode(!0)).addClass(f.params.slideDuplicateClass))
            }
            ;
            f.destroyLoop = function() {
                f.wrapper.children("." + f.params.slideClass + "." + f.params.slideDuplicateClass).remove();
                f.slides.removeAttr("data-swiper-slide-index")
            }
            ;
            f.reLoop = function(n) {
                var t = f.activeIndex - f.loopedSlides;
                f.destroyLoop();
                f.createLoop();
                f.updateSlidesSize();
                n && f.slideTo(t + f.loopedSlides, 0, !1)
            }
            ;
            f.fixLoop = function() {
                var n;
                f.activeIndex < f.loopedSlides ? (n = f.slides.length - 3 * f.loopedSlides + f.activeIndex,
                n += f.loopedSlides,
                f.slideTo(n, 0, !1, !0)) : ("auto" === f.params.slidesPerView && f.activeIndex >= 2 * f.loopedSlides || f.activeIndex > f.slides.length - 2 * f.params.slidesPerView) && (n = -f.slides.length + f.activeIndex + f.loopedSlides,
                n += f.loopedSlides,
                f.slideTo(n, 0, !1, !0))
            }
            ;
            f.appendSlide = function(n) {
                if (f.params.loop && f.destroyLoop(),
                "object" == typeof n && n.length)
                    for (var t = 0; t < n.length; t++)
                        n[t] && f.wrapper.append(n[t]);
                else
                    f.wrapper.append(n);
                f.params.loop && f.createLoop();
                f.params.observer && f.support.observer || f.update(!0)
            }
            ;
            f.prependSlide = function(n) {
                var i, t;
                if (f.params.loop && f.destroyLoop(),
                i = f.activeIndex + 1,
                "object" == typeof n && n.length) {
                    for (t = 0; t < n.length; t++)
                        n[t] && f.wrapper.prepend(n[t]);
                    i = f.activeIndex + n.length
                } else
                    f.wrapper.prepend(n);
                f.params.loop && f.createLoop();
                f.params.observer && f.support.observer || f.update(!0);
                f.slideTo(i, 0, !1)
            }
            ;
            f.removeSlide = function(n) {
                var i, t, r;
                if (f.params.loop && (f.destroyLoop(),
                f.slides = f.wrapper.children("." + f.params.slideClass)),
                t = f.activeIndex,
                "object" == typeof n && n.length) {
                    for (r = 0; r < n.length; r++)
                        i = n[r],
                        f.slides[i] && f.slides.eq(i).remove(),
                        i < t && t--;
                    t = Math.max(t, 0)
                } else
                    i = n,
                    f.slides[i] && f.slides.eq(i).remove(),
                    i < t && t--,
                    t = Math.max(t, 0);
                f.params.loop && f.createLoop();
                f.params.observer && f.support.observer || f.update(!0);
                f.params.loop ? f.slideTo(t + f.loopedSlides, 0, !1) : f.slideTo(t, 0, !1)
            }
            ;
            f.removeAllSlides = function() {
                for (var t = [], n = 0; n < f.slides.length; n++)
                    t.push(n);
                f.removeSlide(t)
            }
            ;
            f.effects = {
                fade: {
                    setTranslate: function() {
                        for (var r, u, n = 0; n < f.slides.length; n++) {
                            var t = f.slides.eq(n)
                              , e = t[0].swiperSlideOffset
                              , i = -e;
                            f.params.virtualTranslate || (i -= f.translate);
                            r = 0;
                            f.isHorizontal() || (r = i,
                            i = 0);
                            u = f.params.fade.crossFade ? Math.max(1 - Math.abs(t[0].progress), 0) : 1 + Math.min(Math.max(t[0].progress, -1), 0);
                            t.css({
                                opacity: u
                            }).transform("translate3d(" + i + "px, " + r + "px, 0px)")
                        }
                    },
                    setTransition: function(n) {
                        if (f.slides.transition(n),
                        f.params.virtualTranslate && 0 !== n) {
                            var t = !1;
                            f.slides.transitionEnd(function() {
                                if (!t && f) {
                                    t = !0;
                                    f.animating = !1;
                                    for (var i = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], n = 0; n < i.length; n++)
                                        f.wrapper.trigger(i[n])
                                }
                            })
                        }
                    }
                },
                flip: {
                    setTranslate: function() {
                        for (var t, i, r, u, o = 0; o < f.slides.length; o++) {
                            t = f.slides.eq(o);
                            i = t[0].progress;
                            f.params.flip.limitRotation && (i = Math.max(Math.min(t[0].progress, 1), -1));
                            var l = t[0].swiperSlideOffset
                              , a = -180 * i
                              , e = a
                              , h = 0
                              , s = -l
                              , c = 0;
                            (f.isHorizontal() ? f.rtl && (e = -e) : (c = s,
                            s = 0,
                            h = -e,
                            e = 0),
                            t[0].style.zIndex = -Math.abs(Math.round(i)) + f.slides.length,
                            f.params.flip.slideShadows) && (r = f.isHorizontal() ? t.find(".swiper-slide-shadow-left") : t.find(".swiper-slide-shadow-top"),
                            u = f.isHorizontal() ? t.find(".swiper-slide-shadow-right") : t.find(".swiper-slide-shadow-bottom"),
                            0 === r.length && (r = n('<div class="swiper-slide-shadow-' + (f.isHorizontal() ? "left" : "top") + '"><\/div>'),
                            t.append(r)),
                            0 === u.length && (u = n('<div class="swiper-slide-shadow-' + (f.isHorizontal() ? "right" : "bottom") + '"><\/div>'),
                            t.append(u)),
                            r.length && (r[0].style.opacity = Math.max(-i, 0)),
                            u.length && (u[0].style.opacity = Math.max(i, 0)));
                            t.transform("translate3d(" + s + "px, " + c + "px, 0px) rotateX(" + h + "deg) rotateY(" + e + "deg)")
                        }
                    },
                    setTransition: function(t) {
                        if (f.slides.transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t),
                        f.params.virtualTranslate && 0 !== t) {
                            var i = !1;
                            f.slides.eq(f.activeIndex).transitionEnd(function() {
                                if (!i && f && n(this).hasClass(f.params.slideActiveClass)) {
                                    i = !0;
                                    f.animating = !1;
                                    for (var r = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], t = 0; t < r.length; t++)
                                        f.wrapper.trigger(r[t])
                                }
                            })
                        }
                    }
                },
                cube: {
                    setTranslate: function() {
                        var t, e = 0, i, y, h, c, b;
                        for (f.params.cube.shadow && (f.isHorizontal() ? (t = f.wrapper.find(".swiper-cube-shadow"),
                        0 === t.length && (t = n('<div class="swiper-cube-shadow"><\/div>'),
                        f.wrapper.append(t)),
                        t.css({
                            height: f.width + "px"
                        })) : (t = f.container.find(".swiper-cube-shadow"),
                        0 === t.length && (t = n('<div class="swiper-cube-shadow"><\/div>'),
                        f.container.append(t)))),
                        i = 0; i < f.slides.length; i++) {
                            var u = f.slides.eq(i)
                              , o = 90 * i
                              , l = Math.floor(o / 360);
                            f.rtl && (o = -o,
                            l = Math.floor(-o / 360));
                            var s = Math.max(Math.min(u[0].progress, 1), -1)
                              , r = 0
                              , v = 0
                              , a = 0;
                            i % 4 == 0 ? (r = 4 * -l * f.size,
                            a = 0) : (i - 1) % 4 == 0 ? (r = 0,
                            a = 4 * -l * f.size) : (i - 2) % 4 == 0 ? (r = f.size + 4 * l * f.size,
                            a = f.size) : (i - 3) % 4 == 0 && (r = -f.size,
                            a = 3 * f.size + 4 * f.size * l);
                            f.rtl && (r = -r);
                            f.isHorizontal() || (v = r,
                            r = 0);
                            y = "rotateX(" + (f.isHorizontal() ? 0 : -o) + "deg) rotateY(" + (f.isHorizontal() ? o : 0) + "deg) translate3d(" + r + "px, " + v + "px, " + a + "px)";
                            (s <= 1 && s > -1 && (e = 90 * i + 90 * s,
                            f.rtl && (e = 90 * -i - 90 * s)),
                            u.transform(y),
                            f.params.cube.slideShadows) && (h = f.isHorizontal() ? u.find(".swiper-slide-shadow-left") : u.find(".swiper-slide-shadow-top"),
                            c = f.isHorizontal() ? u.find(".swiper-slide-shadow-right") : u.find(".swiper-slide-shadow-bottom"),
                            0 === h.length && (h = n('<div class="swiper-slide-shadow-' + (f.isHorizontal() ? "left" : "top") + '"><\/div>'),
                            u.append(h)),
                            0 === c.length && (c = n('<div class="swiper-slide-shadow-' + (f.isHorizontal() ? "right" : "bottom") + '"><\/div>'),
                            u.append(c)),
                            h.length && (h[0].style.opacity = Math.max(-s, 0)),
                            c.length && (c[0].style.opacity = Math.max(s, 0)))
                        }
                        if (f.wrapper.css({
                            "-webkit-transform-origin": "50% 50% -" + f.size / 2 + "px",
                            "-moz-transform-origin": "50% 50% -" + f.size / 2 + "px",
                            "-ms-transform-origin": "50% 50% -" + f.size / 2 + "px",
                            "transform-origin": "50% 50% -" + f.size / 2 + "px"
                        }),
                        f.params.cube.shadow)
                            if (f.isHorizontal())
                                t.transform("translate3d(0px, " + (f.width / 2 + f.params.cube.shadowOffset) + "px, " + -f.width / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + f.params.cube.shadowScale + ")");
                            else {
                                var p = Math.abs(e) - 90 * Math.floor(Math.abs(e) / 90)
                                  , k = 1.5 - (Math.sin(2 * p * Math.PI / 360) / 2 + Math.cos(2 * p * Math.PI / 360) / 2)
                                  , d = f.params.cube.shadowScale
                                  , w = f.params.cube.shadowScale / k
                                  , g = f.params.cube.shadowOffset;
                                t.transform("scale3d(" + d + ", 1, " + w + ") translate3d(0px, " + (f.height / 2 + g) + "px, " + -f.height / 2 / w + "px) rotateX(-90deg)")
                            }
                        b = f.isSafari || f.isUiWebView ? -f.size / 2 : 0;
                        f.wrapper.transform("translate3d(0px,0," + b + "px) rotateX(" + (f.isHorizontal() ? 0 : e) + "deg) rotateY(" + (f.isHorizontal() ? -e : 0) + "deg)")
                    },
                    setTransition: function(n) {
                        f.slides.transition(n).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(n);
                        f.params.cube.shadow && !f.isHorizontal() && f.container.find(".swiper-cube-shadow").transition(n)
                    }
                },
                coverflow: {
                    setTranslate: function() {
                        for (var w, r, u, a = f.translate, v = f.isHorizontal() ? -a + f.width / 2 : -a + f.height / 2, y = f.isHorizontal() ? f.params.coverflow.rotate : -f.params.coverflow.rotate, b = f.params.coverflow.depth, e = 0, k = f.slides.length; e < k; e++) {
                            var i = f.slides.eq(e)
                              , p = f.slidesSizesGrid[e]
                              , d = i[0].swiperSlideOffset
                              , t = (v - d - p / 2) / p * f.params.coverflow.modifier
                              , o = f.isHorizontal() ? y * t : 0
                              , s = f.isHorizontal() ? 0 : y * t
                              , h = -b * Math.abs(t)
                              , c = f.isHorizontal() ? 0 : f.params.coverflow.stretch * t
                              , l = f.isHorizontal() ? f.params.coverflow.stretch * t : 0;
                            Math.abs(l) < .001 && (l = 0);
                            Math.abs(c) < .001 && (c = 0);
                            Math.abs(h) < .001 && (h = 0);
                            Math.abs(o) < .001 && (o = 0);
                            Math.abs(s) < .001 && (s = 0);
                            w = "translate3d(" + l + "px," + c + "px," + h + "px)  rotateX(" + s + "deg) rotateY(" + o + "deg)";
                            (i.transform(w),
                            i[0].style.zIndex = 1 - Math.abs(Math.round(t)),
                            f.params.coverflow.slideShadows) && (r = f.isHorizontal() ? i.find(".swiper-slide-shadow-left") : i.find(".swiper-slide-shadow-top"),
                            u = f.isHorizontal() ? i.find(".swiper-slide-shadow-right") : i.find(".swiper-slide-shadow-bottom"),
                            0 === r.length && (r = n('<div class="swiper-slide-shadow-' + (f.isHorizontal() ? "left" : "top") + '"><\/div>'),
                            i.append(r)),
                            0 === u.length && (u = n('<div class="swiper-slide-shadow-' + (f.isHorizontal() ? "right" : "bottom") + '"><\/div>'),
                            i.append(u)),
                            r.length && (r[0].style.opacity = t > 0 ? t : 0),
                            u.length && (u[0].style.opacity = -t > 0 ? -t : 0))
                        }
                        f.browser.ie && (f.wrapper[0].style.perspectiveOrigin = v + "px 50%")
                    },
                    setTransition: function(n) {
                        f.slides.transition(n).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(n)
                    }
                }
            };
            f.lazy = {
                initialImageLoaded: !1,
                loadImageInSlide: function(t, i) {
                    if (void 0 !== t && (void 0 === i && (i = !0),
                    0 !== f.slides.length)) {
                        var r = f.slides.eq(t)
                          , u = r.find("." + f.params.lazyLoadingClass + ":not(." + f.params.lazyStatusLoadedClass + "):not(." + f.params.lazyStatusLoadingClass + ")");
                        !r.hasClass(f.params.lazyLoadingClass) || r.hasClass(f.params.lazyStatusLoadedClass) || r.hasClass(f.params.lazyStatusLoadingClass) || (u = u.add(r[0]));
                        0 !== u.length && u.each(function() {
                            var t = n(this);
                            t.addClass(f.params.lazyStatusLoadingClass);
                            var u = t.attr("data-background")
                              , e = t.attr("data-src")
                              , o = t.attr("data-srcset")
                              , s = t.attr("data-sizes");
                            f.loadImage(t[0], e || u, o, s, !1, function() {
                                var n, h, c;
                                void 0 !== f && null !== f && f && ((u ? (t.css("background-image", 'url("' + u + '")'),
                                t.removeAttr("data-background")) : (o && (t.attr("srcset", o),
                                t.removeAttr("data-srcset")),
                                s && (t.attr("sizes", s),
                                t.removeAttr("data-sizes")),
                                e && (t.attr("src", e),
                                t.removeAttr("data-src"))),
                                t.addClass(f.params.lazyStatusLoadedClass).removeClass(f.params.lazyStatusLoadingClass),
                                r.find("." + f.params.lazyPreloaderClass + ", ." + f.params.preloaderClass).remove(),
                                f.params.loop && i) && (n = r.attr("data-swiper-slide-index"),
                                r.hasClass(f.params.slideDuplicateClass) ? (h = f.wrapper.children('[data-swiper-slide-index="' + n + '"]:not(.' + f.params.slideDuplicateClass + ")"),
                                f.lazy.loadImageInSlide(h.index(), !1)) : (c = f.wrapper.children("." + f.params.slideDuplicateClass + '[data-swiper-slide-index="' + n + '"]'),
                                f.lazy.loadImageInSlide(c.index(), !1))),
                                f.emit("onLazyImageReady", f, r[0], t[0]))
                            });
                            f.emit("onLazyImageLoad", f, r[0], t[0])
                        })
                    }
                },
                load: function() {
                    var t, i = f.params.slidesPerView, u, e;
                    if ("auto" === i && (i = 0),
                    f.lazy.initialImageLoaded || (f.lazy.initialImageLoaded = !0),
                    f.params.watchSlidesVisibility)
                        f.wrapper.children("." + f.params.slideVisibleClass).each(function() {
                            f.lazy.loadImageInSlide(n(this).index())
                        });
                    else if (i > 1)
                        for (t = f.activeIndex; t < f.activeIndex + i; t++)
                            f.slides[t] && f.lazy.loadImageInSlide(t);
                    else
                        f.lazy.loadImageInSlide(f.activeIndex);
                    if (f.params.lazyLoadingInPrevNext)
                        if (i > 1 || f.params.lazyLoadingInPrevNextAmount && f.params.lazyLoadingInPrevNextAmount > 1) {
                            var o = f.params.lazyLoadingInPrevNextAmount
                              , r = i
                              , s = Math.min(f.activeIndex + r + Math.max(o, r), f.slides.length)
                              , h = Math.max(f.activeIndex - Math.max(r, o), 0);
                            for (t = f.activeIndex + i; t < s; t++)
                                f.slides[t] && f.lazy.loadImageInSlide(t);
                            for (t = h; t < f.activeIndex; t++)
                                f.slides[t] && f.lazy.loadImageInSlide(t)
                        } else
                            u = f.wrapper.children("." + f.params.slideNextClass),
                            u.length > 0 && f.lazy.loadImageInSlide(u.index()),
                            e = f.wrapper.children("." + f.params.slidePrevClass),
                            e.length > 0 && f.lazy.loadImageInSlide(e.index())
                },
                onTransitionStart: function() {
                    f.params.lazyLoading && (f.params.lazyLoadingOnTransitionStart || !f.params.lazyLoadingOnTransitionStart && !f.lazy.initialImageLoaded) && f.lazy.load()
                },
                onTransitionEnd: function() {
                    f.params.lazyLoading && !f.params.lazyLoadingOnTransitionStart && f.lazy.load()
                }
            };
            f.scrollbar = {
                isTouched: !1,
                setDragPosition: function(n) {
                    var i = f.scrollbar
                      , e = f.isHorizontal() ? "touchstart" === n.type || "touchmove" === n.type ? n.targetTouches[0].pageX : n.pageX || n.clientX : "touchstart" === n.type || "touchmove" === n.type ? n.targetTouches[0].pageY : n.pageY || n.clientY
                      , t = e - i.track.offset()[f.isHorizontal() ? "left" : "top"] - i.dragSize / 2
                      , r = -f.minTranslate() * i.moveDivider
                      , u = -f.maxTranslate() * i.moveDivider;
                    t < r ? t = r : t > u && (t = u);
                    t = -t / i.moveDivider;
                    f.updateProgress(t);
                    f.setWrapperTranslate(t, !0)
                },
                dragStart: function(n) {
                    var t = f.scrollbar;
                    t.isTouched = !0;
                    n.preventDefault();
                    n.stopPropagation();
                    t.setDragPosition(n);
                    clearTimeout(t.dragTimeout);
                    t.track.transition(0);
                    f.params.scrollbarHide && t.track.css("opacity", 1);
                    f.wrapper.transition(100);
                    t.drag.transition(100);
                    f.emit("onScrollbarDragStart", f)
                },
                dragMove: function(n) {
                    var t = f.scrollbar;
                    t.isTouched && (n.preventDefault ? n.preventDefault() : n.returnValue = !1,
                    t.setDragPosition(n),
                    f.wrapper.transition(0),
                    t.track.transition(0),
                    t.drag.transition(0),
                    f.emit("onScrollbarDragMove", f))
                },
                dragEnd: function() {
                    var n = f.scrollbar;
                    n.isTouched && (n.isTouched = !1,
                    f.params.scrollbarHide && (clearTimeout(n.dragTimeout),
                    n.dragTimeout = setTimeout(function() {
                        n.track.css("opacity", 0);
                        n.track.transition(400)
                    }, 1e3)),
                    f.emit("onScrollbarDragEnd", f),
                    f.params.scrollbarSnapOnRelease && f.slideReset())
                },
                draggableEvents: function() {
                    return f.params.simulateTouch !== !1 || f.support.touch ? f.touchEvents : f.touchEventsDesktop
                }(),
                enableDraggable: function() {
                    var t = f.scrollbar
                      , i = f.support.touch ? t.track : document;
                    n(t.track).on(t.draggableEvents.start, t.dragStart);
                    n(i).on(t.draggableEvents.move, t.dragMove);
                    n(i).on(t.draggableEvents.end, t.dragEnd)
                },
                disableDraggable: function() {
                    var t = f.scrollbar
                      , i = f.support.touch ? t.track : document;
                    n(t.track).off(t.draggableEvents.start, t.dragStart);
                    n(i).off(t.draggableEvents.move, t.dragMove);
                    n(i).off(t.draggableEvents.end, t.dragEnd)
                },
                set: function() {
                    if (f.params.scrollbar) {
                        var t = f.scrollbar;
                        t.track = n(f.params.scrollbar);
                        f.params.uniqueNavElements && "string" == typeof f.params.scrollbar && t.track.length > 1 && 1 === f.container.find(f.params.scrollbar).length && (t.track = f.container.find(f.params.scrollbar));
                        t.drag = t.track.find(".swiper-scrollbar-drag");
                        0 === t.drag.length && (t.drag = n('<div class="swiper-scrollbar-drag"><\/div>'),
                        t.track.append(t.drag));
                        t.drag[0].style.width = "";
                        t.drag[0].style.height = "";
                        t.trackSize = f.isHorizontal() ? t.track[0].offsetWidth : t.track[0].offsetHeight;
                        t.divider = f.size / f.virtualSize;
                        t.moveDivider = t.divider * (t.trackSize / f.size);
                        t.dragSize = t.trackSize * t.divider;
                        f.isHorizontal() ? t.drag[0].style.width = t.dragSize + "px" : t.drag[0].style.height = t.dragSize + "px";
                        t.track[0].style.display = t.divider >= 1 ? "none" : "";
                        f.params.scrollbarHide && (t.track[0].style.opacity = 0)
                    }
                },
                setTranslate: function() {
                    if (f.params.scrollbar) {
                        var t, n = f.scrollbar, i = (f.translate,
                        n.dragSize);
                        t = (n.trackSize - n.dragSize) * f.progress;
                        f.rtl && f.isHorizontal() ? (t = -t,
                        t > 0 ? (i = n.dragSize - t,
                        t = 0) : -t + n.dragSize > n.trackSize && (i = n.trackSize + t)) : t < 0 ? (i = n.dragSize + t,
                        t = 0) : t + n.dragSize > n.trackSize && (i = n.trackSize - t);
                        f.isHorizontal() ? (f.support.transforms3d ? n.drag.transform("translate3d(" + t + "px, 0, 0)") : n.drag.transform("translateX(" + t + "px)"),
                        n.drag[0].style.width = i + "px") : (f.support.transforms3d ? n.drag.transform("translate3d(0px, " + t + "px, 0)") : n.drag.transform("translateY(" + t + "px)"),
                        n.drag[0].style.height = i + "px");
                        f.params.scrollbarHide && (clearTimeout(n.timeout),
                        n.track[0].style.opacity = 1,
                        n.timeout = setTimeout(function() {
                            n.track[0].style.opacity = 0;
                            n.track.transition(400)
                        }, 1e3))
                    }
                },
                setTransition: function(n) {
                    f.params.scrollbar && f.scrollbar.drag.transition(n)
                }
            };
            f.controller = {
                LinearSpline: function(n, t) {
                    var u = function() {
                        var n, t, i;
                        return function(r, u) {
                            for (t = -1,
                            n = r.length; n - t > 1; )
                                r[i = n + t >> 1] <= u ? t = i : n = i;
                            return n
                        }
                    }(), i, r;
                    this.x = n;
                    this.y = t;
                    this.lastIndex = n.length - 1;
                    this.x.length;
                    this.interpolate = function(n) {
                        return n ? (r = u(this.x, n),
                        i = r - 1,
                        (n - this.x[i]) * (this.y[r] - this.y[i]) / (this.x[r] - this.x[i]) + this.y[i]) : 0
                    }
                },
                getInterpolateFunction: function(n) {
                    f.controller.spline || (f.controller.spline = f.params.loop ? new f.controller.LinearSpline(f.slidesGrid,n.slidesGrid) : new f.controller.LinearSpline(f.snapGrid,n.snapGrid))
                },
                setTranslate: function(n, i) {
                    function o(t) {
                        n = t.rtl && "horizontal" === t.params.direction ? -f.translate : f.translate;
                        "slide" === f.params.controlBy && (f.controller.getInterpolateFunction(t),
                        u = -f.controller.spline.interpolate(-n));
                        u && "container" !== f.params.controlBy || (s = (t.maxTranslate() - t.minTranslate()) / (f.maxTranslate() - f.minTranslate()),
                        u = (n - f.minTranslate()) * s + t.minTranslate());
                        f.params.controlInverse && (u = t.maxTranslate() - u);
                        t.updateProgress(u);
                        t.setWrapperTranslate(u, !1, f);
                        t.updateActiveIndex()
                    }
                    var s, u, r = f.params.control, e;
                    if (Array.isArray(r))
                        for (e = 0; e < r.length; e++)
                            r[e] !== i && r[e]instanceof t && o(r[e]);
                    else
                        r instanceof t && i !== r && o(r)
                },
                setTransition: function(n, i) {
                    function e(t) {
                        t.setWrapperTransition(n, f);
                        0 !== n && (t.onTransitionStart(),
                        t.wrapper.transitionEnd(function() {
                            r && (t.params.loop && "slide" === f.params.controlBy && t.fixLoop(),
                            t.onTransitionEnd())
                        }))
                    }
                    var u, r = f.params.control;
                    if (Array.isArray(r))
                        for (u = 0; u < r.length; u++)
                            r[u] !== i && r[u]instanceof t && e(r[u]);
                    else
                        r instanceof t && i !== r && e(r)
                }
            };
            f.hashnav = {
                onHashCange: function() {
                    var n = document.location.hash.replace("#", "");
                    n !== f.slides.eq(f.activeIndex).attr("data-hash") && f.slideTo(f.wrapper.children("." + f.params.slideClass + '[data-hash="' + n + '"]').index())
                },
                attachEvents: function(t) {
                    var i = t ? "off" : "on";
                    n(window)[i]("hashchange", f.hashnav.onHashCange)
                },
                setHash: function() {
                    if (f.hashnav.initialized && f.params.hashnav)
                        if (f.params.replaceState && window.history && window.history.replaceState)
                            window.history.replaceState(null, null, "#" + f.slides.eq(f.activeIndex).attr("data-hash") || "");
                        else {
                            var n = f.slides.eq(f.activeIndex)
                              , t = n.attr("data-hash") || n.attr("data-history");
                            document.location.hash = t || ""
                        }
                },
                init: function() {
                    var i, t, r, n, u, e;
                    if (f.params.hashnav && !f.params.history) {
                        if (f.hashnav.initialized = !0,
                        i = document.location.hash.replace("#", ""),
                        i)
                            for (t = 0,
                            r = f.slides.length; t < r; t++)
                                n = f.slides.eq(t),
                                u = n.attr("data-hash") || n.attr("data-history"),
                                u !== i || n.hasClass(f.params.slideDuplicateClass) || (e = n.index(),
                                f.slideTo(e, 0, f.params.runCallbacksOnInit, !0));
                        f.params.hashnavWatchState && f.hashnav.attachEvents()
                    }
                },
                destroy: function() {
                    f.params.hashnavWatchState && f.hashnav.attachEvents(!0)
                }
            };
            f.history = {
                init: function() {
                    if (f.params.history) {
                        if (!window.history || !window.history.pushState)
                            return f.params.history = !1,
                            void (f.params.hashnav = !0);
                        f.history.initialized = !0;
                        this.paths = this.getPathValues();
                        (this.paths.key || this.paths.value) && (this.scrollToSlide(0, this.paths.value, f.params.runCallbacksOnInit),
                        f.params.replaceState || window.addEventListener("popstate", this.setHistoryPopState))
                    }
                },
                setHistoryPopState: function() {
                    f.history.paths = f.history.getPathValues();
                    f.history.scrollToSlide(f.params.speed, f.history.paths.value, !1)
                },
                getPathValues: function() {
                    var n = window.location.pathname.slice(1).split("/")
                      , t = n.length;
                    return {
                        key: n[t - 2],
                        value: n[t - 1]
                    }
                },
                setHistory: function(n, t) {
                    if (f.history.initialized && f.params.history) {
                        var r = f.slides.eq(t)
                          , i = this.slugify(r.attr("data-history"));
                        window.location.pathname.includes(n) || (i = n + "/" + i);
                        f.params.replaceState ? window.history.replaceState(null, null, i) : window.history.pushState(null, null, i)
                    }
                },
                slugify: function(n) {
                    return n.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w\-]+/g, "").replace(/\-\-+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
                },
                scrollToSlide: function(n, t, i) {
                    var r, e, u, o, s;
                    if (t)
                        for (r = 0,
                        e = f.slides.length; r < e; r++)
                            u = f.slides.eq(r),
                            o = this.slugify(u.attr("data-history")),
                            o !== t || u.hasClass(f.params.slideDuplicateClass) || (s = u.index(),
                            f.slideTo(s, n, i));
                    else
                        f.slideTo(0, n, i)
                }
            };
            f.disableKeyboardControl = function() {
                f.params.keyboardControl = !1;
                n(document).off("keydown", yt)
            }
            ;
            f.enableKeyboardControl = function() {
                f.params.keyboardControl = !0;
                n(document).on("keydown", yt)
            }
            ;
            f.mousewheel = {
                event: !1,
                lastScrollTime: (new window.Date).getTime()
            };
            f.params.mousewheelControl && (f.mousewheel.event = navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : function() {
                var n = "onwheel"in document, t;
                return n || (t = document.createElement("div"),
                t.setAttribute("onwheel", "return;"),
                n = "function" == typeof t.onwheel),
                !n && document.implementation && document.implementation.hasFeature && document.implementation.hasFeature("", "") !== !0 && (n = document.implementation.hasFeature("Events.wheel", "3.0")),
                n
            }() ? "wheel" : "mousewheel");
            f.disableMousewheelControl = function() {
                if (!f.mousewheel.event)
                    return !1;
                var t = f.container;
                return "container" !== f.params.mousewheelEventsTarged && (t = n(f.params.mousewheelEventsTarged)),
                t.off(f.mousewheel.event, pt),
                f.params.mousewheelControl = !1,
                !0
            }
            ;
            f.enableMousewheelControl = function() {
                if (!f.mousewheel.event)
                    return !1;
                var t = f.container;
                return "container" !== f.params.mousewheelEventsTarged && (t = n(f.params.mousewheelEventsTarged)),
                t.on(f.mousewheel.event, pt),
                f.params.mousewheelControl = !0,
                !0
            }
            ;
            f.parallax = {
                setTranslate: function() {
                    f.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                        wt(this, f.progress)
                    });
                    f.slides.each(function() {
                        var t = n(this);
                        t.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                            wt(this, Math.min(Math.max(t[0].progress, -1), 1))
                        })
                    })
                },
                setTransition: function(t) {
                    void 0 === t && (t = f.params.speed);
                    f.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                        var i = n(this)
                          , r = parseInt(i.attr("data-swiper-parallax-duration"), 10) || t;
                        0 === t && (r = 0);
                        i.transition(r)
                    })
                }
            };
            f.zoom = {
                scale: 1,
                currentScale: 1,
                isScaling: !1,
                gesture: {
                    slide: void 0,
                    slideWidth: void 0,
                    slideHeight: void 0,
                    image: void 0,
                    imageWrap: void 0,
                    zoomMax: f.params.zoomMax
                },
                image: {
                    isTouched: void 0,
                    isMoved: void 0,
                    currentX: void 0,
                    currentY: void 0,
                    minX: void 0,
                    minY: void 0,
                    maxX: void 0,
                    maxY: void 0,
                    width: void 0,
                    height: void 0,
                    startX: void 0,
                    startY: void 0,
                    touchesStart: {},
                    touchesCurrent: {}
                },
                velocity: {
                    x: void 0,
                    y: void 0,
                    prevPositionX: void 0,
                    prevPositionY: void 0,
                    prevTime: void 0
                },
                getDistanceBetweenTouches: function(n) {
                    if (n.targetTouches.length < 2)
                        return 1;
                    var t = n.targetTouches[0].pageX
                      , i = n.targetTouches[0].pageY
                      , r = n.targetTouches[1].pageX
                      , u = n.targetTouches[1].pageY;
                    return Math.sqrt(Math.pow(r - t, 2) + Math.pow(u - i, 2))
                },
                onGestureStart: function(t) {
                    var i = f.zoom;
                    if (!f.support.gestures) {
                        if ("touchstart" !== t.type || "touchstart" === t.type && t.targetTouches.length < 2)
                            return;
                        i.gesture.scaleStart = i.getDistanceBetweenTouches(t)
                    }
                    if (!(i.gesture.slide && i.gesture.slide.length || (i.gesture.slide = n(this),
                    0 === i.gesture.slide.length && (i.gesture.slide = f.slides.eq(f.activeIndex)),
                    i.gesture.image = i.gesture.slide.find("img, svg, canvas"),
                    i.gesture.imageWrap = i.gesture.image.parent("." + f.params.zoomContainerClass),
                    i.gesture.zoomMax = i.gesture.imageWrap.attr("data-swiper-zoom") || f.params.zoomMax,
                    0 !== i.gesture.imageWrap.length)))
                        return void (i.gesture.image = void 0);
                    i.gesture.image.transition(0);
                    i.isScaling = !0
                },
                onGestureChange: function(n) {
                    var t = f.zoom;
                    if (!f.support.gestures) {
                        if ("touchmove" !== n.type || "touchmove" === n.type && n.targetTouches.length < 2)
                            return;
                        t.gesture.scaleMove = t.getDistanceBetweenTouches(n)
                    }
                    t.gesture.image && 0 !== t.gesture.image.length && (t.scale = f.support.gestures ? n.scale * t.currentScale : t.gesture.scaleMove / t.gesture.scaleStart * t.currentScale,
                    t.scale > t.gesture.zoomMax && (t.scale = t.gesture.zoomMax - 1 + Math.pow(t.scale - t.gesture.zoomMax + 1, .5)),
                    t.scale < f.params.zoomMin && (t.scale = f.params.zoomMin + 1 - Math.pow(f.params.zoomMin - t.scale + 1, .5)),
                    t.gesture.image.transform("translate3d(0,0,0) scale(" + t.scale + ")"))
                },
                onGestureEnd: function(n) {
                    var t = f.zoom;
                    !f.support.gestures && ("touchend" !== n.type || "touchend" === n.type && n.changedTouches.length < 2) || t.gesture.image && 0 !== t.gesture.image.length && (t.scale = Math.max(Math.min(t.scale, t.gesture.zoomMax), f.params.zoomMin),
                    t.gesture.image.transition(f.params.speed).transform("translate3d(0,0,0) scale(" + t.scale + ")"),
                    t.currentScale = t.scale,
                    t.isScaling = !1,
                    1 === t.scale && (t.gesture.slide = void 0))
                },
                onTouchStart: function(n, t) {
                    var i = n.zoom;
                    i.gesture.image && 0 !== i.gesture.image.length && (i.image.isTouched || ("android" === n.device.os && t.preventDefault(),
                    i.image.isTouched = !0,
                    i.image.touchesStart.x = "touchstart" === t.type ? t.targetTouches[0].pageX : t.pageX,
                    i.image.touchesStart.y = "touchstart" === t.type ? t.targetTouches[0].pageY : t.pageY))
                },
                onTouchMove: function(n) {
                    var t = f.zoom, i, r;
                    if (t.gesture.image && 0 !== t.gesture.image.length && (f.allowClick = !1,
                    t.image.isTouched && t.gesture.slide) && (t.image.isMoved || (t.image.width = t.gesture.image[0].offsetWidth,
                    t.image.height = t.gesture.image[0].offsetHeight,
                    t.image.startX = f.getTranslate(t.gesture.imageWrap[0], "x") || 0,
                    t.image.startY = f.getTranslate(t.gesture.imageWrap[0], "y") || 0,
                    t.gesture.slideWidth = t.gesture.slide[0].offsetWidth,
                    t.gesture.slideHeight = t.gesture.slide[0].offsetHeight,
                    t.gesture.imageWrap.transition(0),
                    f.rtl && (t.image.startX = -t.image.startX),
                    f.rtl && (t.image.startY = -t.image.startY)),
                    i = t.image.width * t.scale,
                    r = t.image.height * t.scale,
                    !(i < t.gesture.slideWidth && r < t.gesture.slideHeight))) {
                        if ((t.image.minX = Math.min(t.gesture.slideWidth / 2 - i / 2, 0),
                        t.image.maxX = -t.image.minX,
                        t.image.minY = Math.min(t.gesture.slideHeight / 2 - r / 2, 0),
                        t.image.maxY = -t.image.minY,
                        t.image.touchesCurrent.x = "touchmove" === n.type ? n.targetTouches[0].pageX : n.pageX,
                        t.image.touchesCurrent.y = "touchmove" === n.type ? n.targetTouches[0].pageY : n.pageY,
                        !t.image.isMoved && !t.isScaling) && (f.isHorizontal() && Math.floor(t.image.minX) === Math.floor(t.image.startX) && t.image.touchesCurrent.x < t.image.touchesStart.x || Math.floor(t.image.maxX) === Math.floor(t.image.startX) && t.image.touchesCurrent.x > t.image.touchesStart.x || !f.isHorizontal() && Math.floor(t.image.minY) === Math.floor(t.image.startY) && t.image.touchesCurrent.y < t.image.touchesStart.y || Math.floor(t.image.maxY) === Math.floor(t.image.startY) && t.image.touchesCurrent.y > t.image.touchesStart.y))
                            return void (t.image.isTouched = !1);
                        n.preventDefault();
                        n.stopPropagation();
                        t.image.isMoved = !0;
                        t.image.currentX = t.image.touchesCurrent.x - t.image.touchesStart.x + t.image.startX;
                        t.image.currentY = t.image.touchesCurrent.y - t.image.touchesStart.y + t.image.startY;
                        t.image.currentX < t.image.minX && (t.image.currentX = t.image.minX + 1 - Math.pow(t.image.minX - t.image.currentX + 1, .8));
                        t.image.currentX > t.image.maxX && (t.image.currentX = t.image.maxX - 1 + Math.pow(t.image.currentX - t.image.maxX + 1, .8));
                        t.image.currentY < t.image.minY && (t.image.currentY = t.image.minY + 1 - Math.pow(t.image.minY - t.image.currentY + 1, .8));
                        t.image.currentY > t.image.maxY && (t.image.currentY = t.image.maxY - 1 + Math.pow(t.image.currentY - t.image.maxY + 1, .8));
                        t.velocity.prevPositionX || (t.velocity.prevPositionX = t.image.touchesCurrent.x);
                        t.velocity.prevPositionY || (t.velocity.prevPositionY = t.image.touchesCurrent.y);
                        t.velocity.prevTime || (t.velocity.prevTime = Date.now());
                        t.velocity.x = (t.image.touchesCurrent.x - t.velocity.prevPositionX) / (Date.now() - t.velocity.prevTime) / 2;
                        t.velocity.y = (t.image.touchesCurrent.y - t.velocity.prevPositionY) / (Date.now() - t.velocity.prevTime) / 2;
                        Math.abs(t.image.touchesCurrent.x - t.velocity.prevPositionX) < 2 && (t.velocity.x = 0);
                        Math.abs(t.image.touchesCurrent.y - t.velocity.prevPositionY) < 2 && (t.velocity.y = 0);
                        t.velocity.prevPositionX = t.image.touchesCurrent.x;
                        t.velocity.prevPositionY = t.image.touchesCurrent.y;
                        t.velocity.prevTime = Date.now();
                        t.gesture.imageWrap.transform("translate3d(" + t.image.currentX + "px, " + t.image.currentY + "px,0)")
                    }
                },
                onTouchEnd: function(n) {
                    var t = n.zoom, e, o, s;
                    if (t.gesture.image && 0 !== t.gesture.image.length) {
                        if (!t.image.isTouched || !t.image.isMoved)
                            return t.image.isTouched = !1,
                            void (t.image.isMoved = !1);
                        t.image.isTouched = !1;
                        t.image.isMoved = !1;
                        var i = 300
                          , r = 300
                          , h = t.velocity.x * i
                          , u = t.image.currentX + h
                          , c = t.velocity.y * r
                          , f = t.image.currentY + c;
                        0 !== t.velocity.x && (i = Math.abs((u - t.image.currentX) / t.velocity.x));
                        0 !== t.velocity.y && (r = Math.abs((f - t.image.currentY) / t.velocity.y));
                        e = Math.max(i, r);
                        t.image.currentX = u;
                        t.image.currentY = f;
                        o = t.image.width * t.scale;
                        s = t.image.height * t.scale;
                        t.image.minX = Math.min(t.gesture.slideWidth / 2 - o / 2, 0);
                        t.image.maxX = -t.image.minX;
                        t.image.minY = Math.min(t.gesture.slideHeight / 2 - s / 2, 0);
                        t.image.maxY = -t.image.minY;
                        t.image.currentX = Math.max(Math.min(t.image.currentX, t.image.maxX), t.image.minX);
                        t.image.currentY = Math.max(Math.min(t.image.currentY, t.image.maxY), t.image.minY);
                        t.gesture.imageWrap.transition(e).transform("translate3d(" + t.image.currentX + "px, " + t.image.currentY + "px,0)")
                    }
                },
                onTransitionEnd: function(n) {
                    var t = n.zoom;
                    t.gesture.slide && n.previousIndex !== n.activeIndex && (t.gesture.image.transform("translate3d(0,0,0) scale(1)"),
                    t.gesture.imageWrap.transform("translate3d(0,0,0)"),
                    t.gesture.slide = t.gesture.image = t.gesture.imageWrap = void 0,
                    t.scale = t.currentScale = 1)
                },
                toggleZoom: function(t, i) {
                    var r = t.zoom, s, h, y, p, w, b, u, f, k, d, g, nt, e, o, c, l, a, v;
                    (r.gesture.slide || (r.gesture.slide = t.clickedSlide ? n(t.clickedSlide) : t.slides.eq(t.activeIndex),
                    r.gesture.image = r.gesture.slide.find("img, svg, canvas"),
                    r.gesture.imageWrap = r.gesture.image.parent("." + t.params.zoomContainerClass)),
                    r.gesture.image && 0 !== r.gesture.image.length) && (void 0 === r.image.touchesStart.x && i ? (s = "touchend" === i.type ? i.changedTouches[0].pageX : i.pageX,
                    h = "touchend" === i.type ? i.changedTouches[0].pageY : i.pageY) : (s = r.image.touchesStart.x,
                    h = r.image.touchesStart.y),
                    r.scale && 1 !== r.scale ? (r.scale = r.currentScale = 1,
                    r.gesture.imageWrap.transition(300).transform("translate3d(0,0,0)"),
                    r.gesture.image.transition(300).transform("translate3d(0,0,0) scale(1)"),
                    r.gesture.slide = void 0) : (r.scale = r.currentScale = r.gesture.imageWrap.attr("data-swiper-zoom") || t.params.zoomMax,
                    i ? (a = r.gesture.slide[0].offsetWidth,
                    v = r.gesture.slide[0].offsetHeight,
                    y = r.gesture.slide.offset().left,
                    p = r.gesture.slide.offset().top,
                    w = y + a / 2 - s,
                    b = p + v / 2 - h,
                    k = r.gesture.image[0].offsetWidth,
                    d = r.gesture.image[0].offsetHeight,
                    g = k * r.scale,
                    nt = d * r.scale,
                    e = Math.min(a / 2 - g / 2, 0),
                    o = Math.min(v / 2 - nt / 2, 0),
                    c = -e,
                    l = -o,
                    u = w * r.scale,
                    f = b * r.scale,
                    u < e && (u = e),
                    u > c && (u = c),
                    f < o && (f = o),
                    f > l && (f = l)) : (u = 0,
                    f = 0),
                    r.gesture.imageWrap.transition(300).transform("translate3d(" + u + "px, " + f + "px,0)"),
                    r.gesture.image.transition(300).transform("translate3d(0,0,0) scale(" + r.scale + ")")))
                },
                attachEvents: function(t) {
                    var i = t ? "off" : "on", r;
                    f.params.zoom && (r = (f.slides,
                    !("touchstart" !== f.touchEvents.start || !f.support.passiveListener || !f.params.passiveListeners) && {
                        passive: !0,
                        capture: !1
                    }),
                    f.support.gestures ? (f.slides[i]("gesturestart", f.zoom.onGestureStart, r),
                    f.slides[i]("gesturechange", f.zoom.onGestureChange, r),
                    f.slides[i]("gestureend", f.zoom.onGestureEnd, r)) : "touchstart" === f.touchEvents.start && (f.slides[i](f.touchEvents.start, f.zoom.onGestureStart, r),
                    f.slides[i](f.touchEvents.move, f.zoom.onGestureChange, r),
                    f.slides[i](f.touchEvents.end, f.zoom.onGestureEnd, r)),
                    f[i]("touchStart", f.zoom.onTouchStart),
                    f.slides.each(function(t, r) {
                        n(r).find("." + f.params.zoomContainerClass).length > 0 && n(r)[i](f.touchEvents.move, f.zoom.onTouchMove)
                    }),
                    f[i]("touchEnd", f.zoom.onTouchEnd),
                    f[i]("transitionEnd", f.zoom.onTransitionEnd),
                    f.params.zoomToggle && f.on("doubleTap", f.zoom.toggleZoom))
                },
                init: function() {
                    f.zoom.attachEvents()
                },
                destroy: function() {
                    f.zoom.attachEvents(!0)
                }
            };
            f._plugins = [];
            for (at in f.plugins)
                vt = f.plugins[at](f, f.params[at]),
                vt && f._plugins.push(vt);
            return f.callPlugins = function(n) {
                for (var t = 0; t < f._plugins.length; t++)
                    n in f._plugins[t] && f._plugins[t][n](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
            }
            ,
            f.emitterEventListeners = {},
            f.emit = function(n) {
                f.params[n] && f.params[n](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                var t;
                if (f.emitterEventListeners[n])
                    for (t = 0; t < f.emitterEventListeners[n].length; t++)
                        f.emitterEventListeners[n][t](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                f.callPlugins && f.callPlugins(n, arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
            }
            ,
            f.on = function(n, t) {
                return n = ot(n),
                f.emitterEventListeners[n] || (f.emitterEventListeners[n] = []),
                f.emitterEventListeners[n].push(t),
                f
            }
            ,
            f.off = function(n, t) {
                var i;
                if (n = ot(n),
                void 0 === t)
                    return f.emitterEventListeners[n] = [],
                    f;
                if (f.emitterEventListeners[n] && 0 !== f.emitterEventListeners[n].length) {
                    for (i = 0; i < f.emitterEventListeners[n].length; i++)
                        f.emitterEventListeners[n][i] === t && f.emitterEventListeners[n].splice(i, 1);
                    return f
                }
            }
            ,
            f.once = function(n, t) {
                n = ot(n);
                var i = function() {
                    t(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
                    f.off(n, i)
                };
                return f.on(n, i),
                f
            }
            ,
            f.a11y = {
                makeFocusable: function(n) {
                    return n.attr("tabIndex", "0"),
                    n
                },
                addRole: function(n, t) {
                    return n.attr("role", t),
                    n
                },
                addLabel: function(n, t) {
                    return n.attr("aria-label", t),
                    n
                },
                disable: function(n) {
                    return n.attr("aria-disabled", !0),
                    n
                },
                enable: function(n) {
                    return n.attr("aria-disabled", !1),
                    n
                },
                onEnterKey: function(t) {
                    13 === t.keyCode && (n(t.target).is(f.params.nextButton) ? (f.onClickNext(t),
                    f.isEnd ? f.a11y.notify(f.params.lastSlideMessage) : f.a11y.notify(f.params.nextSlideMessage)) : n(t.target).is(f.params.prevButton) && (f.onClickPrev(t),
                    f.isBeginning ? f.a11y.notify(f.params.firstSlideMessage) : f.a11y.notify(f.params.prevSlideMessage)),
                    n(t.target).is("." + f.params.bulletClass) && n(t.target)[0].click())
                },
                liveRegion: n('<span class="' + f.params.notificationClass + '" aria-live="assertive" aria-atomic="true"><\/span>'),
                notify: function(n) {
                    var t = f.a11y.liveRegion;
                    0 !== t.length && (t.html(""),
                    t.html(n))
                },
                init: function() {
                    f.params.nextButton && f.nextButton && f.nextButton.length > 0 && (f.a11y.makeFocusable(f.nextButton),
                    f.a11y.addRole(f.nextButton, "button"),
                    f.a11y.addLabel(f.nextButton, f.params.nextSlideMessage));
                    f.params.prevButton && f.prevButton && f.prevButton.length > 0 && (f.a11y.makeFocusable(f.prevButton),
                    f.a11y.addRole(f.prevButton, "button"),
                    f.a11y.addLabel(f.prevButton, f.params.prevSlideMessage));
                    n(f.container).append(f.a11y.liveRegion)
                },
                initPagination: function() {
                    f.params.pagination && f.params.paginationClickable && f.bullets && f.bullets.length && f.bullets.each(function() {
                        var t = n(this);
                        f.a11y.makeFocusable(t);
                        f.a11y.addRole(t, "button");
                        f.a11y.addLabel(t, f.params.paginationBulletMessage.replace(/{{index}}/, t.index() + 1))
                    })
                },
                destroy: function() {
                    f.a11y.liveRegion && f.a11y.liveRegion.length > 0 && f.a11y.liveRegion.remove()
                }
            },
            f.init = function() {
                f.params.loop && f.createLoop();
                f.updateContainerSize();
                f.updateSlidesSize();
                f.updatePagination();
                f.params.scrollbar && f.scrollbar && (f.scrollbar.set(),
                f.params.scrollbarDraggable && f.scrollbar.enableDraggable());
                "slide" !== f.params.effect && f.effects[f.params.effect] && (f.params.loop || f.updateProgress(),
                f.effects[f.params.effect].setTranslate());
                f.params.loop ? f.slideTo(f.params.initialSlide + f.loopedSlides, 0, f.params.runCallbacksOnInit) : (f.slideTo(f.params.initialSlide, 0, f.params.runCallbacksOnInit),
                0 === f.params.initialSlide && (f.parallax && f.params.parallax && f.parallax.setTranslate(),
                f.lazy && f.params.lazyLoading && (f.lazy.load(),
                f.lazy.initialImageLoaded = !0)));
                f.attachEvents();
                f.params.observer && f.support.observer && f.initObservers();
                f.params.preloadImages && !f.params.lazyLoading && f.preloadImages();
                f.params.zoom && f.zoom && f.zoom.init();
                f.params.autoplay && f.startAutoplay();
                f.params.keyboardControl && f.enableKeyboardControl && f.enableKeyboardControl();
                f.params.mousewheelControl && f.enableMousewheelControl && f.enableMousewheelControl();
                f.params.hashnavReplaceState && (f.params.replaceState = f.params.hashnavReplaceState);
                f.params.history && f.history && f.history.init();
                f.params.hashnav && f.hashnav && f.hashnav.init();
                f.params.a11y && f.a11y && f.a11y.init();
                f.emit("onInit", f)
            }
            ,
            f.cleanupStyles = function() {
                f.container.removeClass(f.classNames.join(" ")).removeAttr("style");
                f.wrapper.removeAttr("style");
                f.slides && f.slides.length && f.slides.removeClass([f.params.slideVisibleClass, f.params.slideActiveClass, f.params.slideNextClass, f.params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row");
                f.paginationContainer && f.paginationContainer.length && f.paginationContainer.removeClass(f.params.paginationHiddenClass);
                f.bullets && f.bullets.length && f.bullets.removeClass(f.params.bulletActiveClass);
                f.params.prevButton && n(f.params.prevButton).removeClass(f.params.buttonDisabledClass);
                f.params.nextButton && n(f.params.nextButton).removeClass(f.params.buttonDisabledClass);
                f.params.scrollbar && f.scrollbar && (f.scrollbar.track && f.scrollbar.track.length && f.scrollbar.track.removeAttr("style"),
                f.scrollbar.drag && f.scrollbar.drag.length && f.scrollbar.drag.removeAttr("style"))
            }
            ,
            f.destroy = function(n, t) {
                f.detachEvents();
                f.stopAutoplay();
                f.params.scrollbar && f.scrollbar && f.params.scrollbarDraggable && f.scrollbar.disableDraggable();
                f.params.loop && f.destroyLoop();
                t && f.cleanupStyles();
                f.disconnectObservers();
                f.params.zoom && f.zoom && f.zoom.destroy();
                f.params.keyboardControl && f.disableKeyboardControl && f.disableKeyboardControl();
                f.params.mousewheelControl && f.disableMousewheelControl && f.disableMousewheelControl();
                f.params.a11y && f.a11y && f.a11y.destroy();
                f.params.history && !f.params.replaceState && window.removeEventListener("popstate", f.history.setHistoryPopState);
                f.params.hashnav && f.hashnav && f.hashnav.destroy();
                f.emit("onDestroy");
                n !== !1 && (f = null)
            }
            ,
            f.init(),
            f
        }
    }, i;
    t.prototype = {
        isSafari: function() {
            var n = window.navigator.userAgent.toLowerCase();
            return n.indexOf("safari") >= 0 && n.indexOf("chrome") < 0 && n.indexOf("android") < 0
        }(),
        isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent),
        isArray: function(n) {
            return "[object Array]" === Object.prototype.toString.apply(n)
        },
        browser: {
            ie: window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
            ieTouch: window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 1 || window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 1,
            lteIE9: function() {
                var n = document.createElement("div");
                return n.innerHTML = "<!--[if lte IE 9]><i><\/i><![endif]-->",
                1 === n.getElementsByTagName("i").length
            }()
        },
        device: function() {
            var n = window.navigator.userAgent
              , i = n.match(/(Android);?[\s\/]+([\d.]+)?/)
              , t = n.match(/(iPad).*OS\s([\d_]+)/)
              , r = n.match(/(iPod)(.*OS\s([\d_]+))?/)
              , u = !t && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
            return {
                ios: t || u || r,
                android: i
            }
        }(),
        support: {
            touch: window.Modernizr && Modernizr.touch === !0 || function() {
                return !!("ontouchstart"in window || window.DocumentTouch && document instanceof DocumentTouch)
            }(),
            transforms3d: window.Modernizr && Modernizr.csstransforms3d === !0 || function() {
                var n = document.createElement("div").style;
                return "webkitPerspective"in n || "MozPerspective"in n || "OPerspective"in n || "MsPerspective"in n || "perspective"in n
            }(),
            flexbox: function() {
                for (var i = document.createElement("div").style, t = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), n = 0; n < t.length; n++)
                    if (t[n]in i)
                        return !0
            }(),
            observer: function() {
                return "MutationObserver"in window || "WebkitMutationObserver"in window
            }(),
            passiveListener: function() {
                var n = !1, t;
                try {
                    t = Object.defineProperty({}, "passive", {
                        get: function() {
                            n = !0
                        }
                    });
                    window.addEventListener("testPassiveListener", null, t)
                } catch (n) {}
                return n
            }(),
            gestures: function() {
                return "ongesturestart"in window
            }()
        },
        plugins: {}
    };
    for (var r = function() {
        var t = function(n) {
            for (var i = this, t = 0, t = 0; t < n.length; t++)
                i[t] = n[t];
            return i.length = n.length,
            this
        }
          , n = function(n, i) {
            var e = [], r = 0, o, s, u, f;
            if (n && !i && n instanceof t)
                return n;
            if (n)
                if ("string" == typeof n)
                    if (u = n.trim(),
                    u.indexOf("<") >= 0 && u.indexOf(">") >= 0)
                        for (f = "div",
                        0 === u.indexOf("<li") && (f = "ul"),
                        0 === u.indexOf("<tr") && (f = "tbody"),
                        0 !== u.indexOf("<td") && 0 !== u.indexOf("<th") || (f = "tr"),
                        0 === u.indexOf("<tbody") && (f = "table"),
                        0 === u.indexOf("<option") && (f = "select"),
                        s = document.createElement(f),
                        s.innerHTML = n,
                        r = 0; r < s.childNodes.length; r++)
                            e.push(s.childNodes[r]);
                    else
                        for (o = i || "#" !== n[0] || n.match(/[ .<>:~]/) ? (i || document).querySelectorAll(n) : [document.getElementById(n.split("#")[1])],
                        r = 0; r < o.length; r++)
                            o[r] && e.push(o[r]);
                else if (n.nodeType || n === window || n === document)
                    e.push(n);
                else if (n.length > 0 && n[0].nodeType)
                    for (r = 0; r < n.length; r++)
                        e.push(n[r]);
            return new t(e)
        };
        return t.prototype = {
            addClass: function(n) {
                var r, t, i;
                if (void 0 === n)
                    return this;
                for (r = n.split(" "),
                t = 0; t < r.length; t++)
                    for (i = 0; i < this.length; i++)
                        this[i].classList.add(r[t]);
                return this
            },
            removeClass: function(n) {
                for (var i, r = n.split(" "), t = 0; t < r.length; t++)
                    for (i = 0; i < this.length; i++)
                        this[i].classList.remove(r[t]);
                return this
            },
            hasClass: function(n) {
                return !!this[0] && this[0].classList.contains(n)
            },
            toggleClass: function(n) {
                for (var i, r = n.split(" "), t = 0; t < r.length; t++)
                    for (i = 0; i < this.length; i++)
                        this[i].classList.toggle(r[t]);
                return this
            },
            attr: function(n, t) {
                var i, r;
                if (1 === arguments.length && "string" == typeof n)
                    return this[0] ? this[0].getAttribute(n) : void 0;
                for (i = 0; i < this.length; i++)
                    if (2 === arguments.length)
                        this[i].setAttribute(n, t);
                    else
                        for (r in n)
                            this[i][r] = n[r],
                            this[i].setAttribute(r, n[r]);
                return this
            },
            removeAttr: function(n) {
                for (var t = 0; t < this.length; t++)
                    this[t].removeAttribute(n);
                return this
            },
            data: function(n, t) {
                var i, r, u;
                if (void 0 !== t) {
                    for (i = 0; i < this.length; i++)
                        r = this[i],
                        r.dom7ElementDataStorage || (r.dom7ElementDataStorage = {}),
                        r.dom7ElementDataStorage[n] = t;
                    return this
                }
                if (this[0])
                    return u = this[0].getAttribute("data-" + n),
                    u ? u : this[0].dom7ElementDataStorage && n in this[0].dom7ElementDataStorage ? this[0].dom7ElementDataStorage[n] : void 0
            },
            transform: function(n) {
                for (var t, i = 0; i < this.length; i++)
                    t = this[i].style,
                    t.webkitTransform = t.MsTransform = t.msTransform = t.MozTransform = t.OTransform = t.transform = n;
                return this
            },
            transition: function(n) {
                var i, t;
                for ("string" != typeof n && (n += "ms"),
                i = 0; i < this.length; i++)
                    t = this[i].style,
                    t.webkitTransitionDuration = t.MsTransitionDuration = t.msTransitionDuration = t.MozTransitionDuration = t.OTransitionDuration = t.transitionDuration = n;
                return this
            },
            on: function(t, i, r, u) {
                function s(t) {
                    var e = t.target, f, u;
                    if (n(e).is(i))
                        r.call(e, t);
                    else
                        for (f = n(e).parents(),
                        u = 0; u < f.length; u++)
                            n(f[u]).is(i) && r.call(f[u], t)
                }
                for (var e, o = t.split(" "), f = 0; f < this.length; f++)
                    if ("function" == typeof i || i === !1)
                        for ("function" == typeof i && (r = arguments[1],
                        u = arguments[2] || !1),
                        e = 0; e < o.length; e++)
                            this[f].addEventListener(o[e], r, u);
                    else
                        for (e = 0; e < o.length; e++)
                            this[f].dom7LiveListeners || (this[f].dom7LiveListeners = []),
                            this[f].dom7LiveListeners.push({
                                listener: r,
                                liveListener: s
                            }),
                            this[f].addEventListener(o[e], s, u);
                return this
            },
            off: function(n, t, i, r) {
                for (var u, e, o = n.split(" "), f = 0; f < o.length; f++)
                    for (u = 0; u < this.length; u++)
                        if ("function" == typeof t || t === !1)
                            "function" == typeof t && (i = arguments[1],
                            r = arguments[2] || !1),
                            this[u].removeEventListener(o[f], i, r);
                        else if (this[u].dom7LiveListeners)
                            for (e = 0; e < this[u].dom7LiveListeners.length; e++)
                                this[u].dom7LiveListeners[e].listener === i && this[u].removeEventListener(o[f], this[u].dom7LiveListeners[e].liveListener, r);
                return this
            },
            once: function(n, t, i, r) {
                function u(e) {
                    i(e);
                    f.off(n, t, u, r)
                }
                var f = this;
                "function" == typeof t && (t = !1,
                i = arguments[1],
                r = arguments[2]);
                f.on(n, t, u, r)
            },
            trigger: function(n, t) {
                for (var i, r = 0; r < this.length; r++) {
                    try {
                        i = new window.CustomEvent(n,{
                            detail: t,
                            bubbles: !0,
                            cancelable: !0
                        })
                    } catch (r) {
                        i = document.createEvent("Event");
                        i.initEvent(n, !0, !0);
                        i.detail = t
                    }
                    this[r].dispatchEvent(i)
                }
                return this
            },
            transitionEnd: function(n) {
                function r(f) {
                    if (f.target === this)
                        for (n.call(this, f),
                        t = 0; t < i.length; t++)
                            u.off(i[t], r)
                }
                var t, i = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], u = this;
                if (n)
                    for (t = 0; t < i.length; t++)
                        u.on(i[t], r);
                return this
            },
            width: function() {
                return this[0] === window ? window.innerWidth : this.length > 0 ? parseFloat(this.css("width")) : null
            },
            outerWidth: function(n) {
                return this.length > 0 ? n ? this[0].offsetWidth + parseFloat(this.css("margin-right")) + parseFloat(this.css("margin-left")) : this[0].offsetWidth : null
            },
            height: function() {
                return this[0] === window ? window.innerHeight : this.length > 0 ? parseFloat(this.css("height")) : null
            },
            outerHeight: function(n) {
                return this.length > 0 ? n ? this[0].offsetHeight + parseFloat(this.css("margin-top")) + parseFloat(this.css("margin-bottom")) : this[0].offsetHeight : null
            },
            offset: function() {
                if (this.length > 0) {
                    var n = this[0]
                      , t = n.getBoundingClientRect()
                      , i = document.body
                      , r = n.clientTop || i.clientTop || 0
                      , u = n.clientLeft || i.clientLeft || 0
                      , f = window.pageYOffset || n.scrollTop
                      , e = window.pageXOffset || n.scrollLeft;
                    return {
                        top: t.top + f - r,
                        left: t.left + e - u
                    }
                }
                return null
            },
            css: function(n, t) {
                var i, r;
                if (1 === arguments.length) {
                    if ("string" != typeof n) {
                        for (i = 0; i < this.length; i++)
                            for (r in n)
                                this[i].style[r] = n[r];
                        return this
                    }
                    if (this[0])
                        return window.getComputedStyle(this[0], null).getPropertyValue(n)
                }
                if (2 === arguments.length && "string" == typeof n) {
                    for (i = 0; i < this.length; i++)
                        this[i].style[n] = t;
                    return this
                }
                return this
            },
            each: function(n) {
                for (var t = 0; t < this.length; t++)
                    n.call(this[t], t, this[t]);
                return this
            },
            html: function(n) {
                if (void 0 === n)
                    return this[0] ? this[0].innerHTML : void 0;
                for (var t = 0; t < this.length; t++)
                    this[t].innerHTML = n;
                return this
            },
            text: function(n) {
                if (void 0 === n)
                    return this[0] ? this[0].textContent.trim() : null;
                for (var t = 0; t < this.length; t++)
                    this[t].textContent = n;
                return this
            },
            is: function(i) {
                var f, u, r;
                if (!this[0])
                    return !1;
                if ("string" == typeof i) {
                    if (r = this[0],
                    r === document)
                        return i === document;
                    if (r === window)
                        return i === window;
                    if (r.matches)
                        return r.matches(i);
                    if (r.webkitMatchesSelector)
                        return r.webkitMatchesSelector(i);
                    if (r.mozMatchesSelector)
                        return r.mozMatchesSelector(i);
                    if (r.msMatchesSelector)
                        return r.msMatchesSelector(i);
                    for (f = n(i),
                    u = 0; u < f.length; u++)
                        if (f[u] === this[0])
                            return !0;
                    return !1
                }
                if (i === document)
                    return this[0] === document;
                if (i === window)
                    return this[0] === window;
                if (i.nodeType || i instanceof t) {
                    for (f = i.nodeType ? [i] : i,
                    u = 0; u < f.length; u++)
                        if (f[u] === this[0])
                            return !0;
                    return !1
                }
                return !1
            },
            index: function() {
                if (this[0]) {
                    for (var n = this[0], t = 0; null !== (n = n.previousSibling); )
                        1 === n.nodeType && t++;
                    return t
                }
            },
            eq: function(n) {
                if (void 0 === n)
                    return this;
                var i, r = this.length;
                return n > r - 1 ? new t([]) : n < 0 ? (i = r + n,
                new t(i < 0 ? [] : [this[i]])) : new t([this[n]])
            },
            append: function(n) {
                for (var r, u, i = 0; i < this.length; i++)
                    if ("string" == typeof n)
                        for (u = document.createElement("div"),
                        u.innerHTML = n; u.firstChild; )
                            this[i].appendChild(u.firstChild);
                    else if (n instanceof t)
                        for (r = 0; r < n.length; r++)
                            this[i].appendChild(n[r]);
                    else
                        this[i].appendChild(n);
                return this
            },
            prepend: function(n) {
                for (var r, u, i = 0; i < this.length; i++)
                    if ("string" == typeof n)
                        for (u = document.createElement("div"),
                        u.innerHTML = n,
                        r = u.childNodes.length - 1; r >= 0; r--)
                            this[i].insertBefore(u.childNodes[r], this[i].childNodes[0]);
                    else if (n instanceof t)
                        for (r = 0; r < n.length; r++)
                            this[i].insertBefore(n[r], this[i].childNodes[0]);
                    else
                        this[i].insertBefore(n, this[i].childNodes[0]);
                return this
            },
            insertBefore: function(t) {
                for (var u, i = n(t), r = 0; r < this.length; r++)
                    if (1 === i.length)
                        i[0].parentNode.insertBefore(this[r], i[0]);
                    else if (i.length > 1)
                        for (u = 0; u < i.length; u++)
                            i[u].parentNode.insertBefore(this[r].cloneNode(!0), i[u])
            },
            insertAfter: function(t) {
                for (var u, i = n(t), r = 0; r < this.length; r++)
                    if (1 === i.length)
                        i[0].parentNode.insertBefore(this[r], i[0].nextSibling);
                    else if (i.length > 1)
                        for (u = 0; u < i.length; u++)
                            i[u].parentNode.insertBefore(this[r].cloneNode(!0), i[u].nextSibling)
            },
            next: function(i) {
                return new t(this.length > 0 ? i ? this[0].nextElementSibling && n(this[0].nextElementSibling).is(i) ? [this[0].nextElementSibling] : [] : this[0].nextElementSibling ? [this[0].nextElementSibling] : [] : [])
            },
            nextAll: function(i) {
                var f = [], u = this[0], r;
                if (!u)
                    return new t([]);
                for (; u.nextElementSibling; )
                    r = u.nextElementSibling,
                    i ? n(r).is(i) && f.push(r) : f.push(r),
                    u = r;
                return new t(f)
            },
            prev: function(i) {
                return new t(this.length > 0 ? i ? this[0].previousElementSibling && n(this[0].previousElementSibling).is(i) ? [this[0].previousElementSibling] : [] : this[0].previousElementSibling ? [this[0].previousElementSibling] : [] : [])
            },
            prevAll: function(i) {
                var f = [], u = this[0], r;
                if (!u)
                    return new t([]);
                for (; u.previousElementSibling; )
                    r = u.previousElementSibling,
                    i ? n(r).is(i) && f.push(r) : f.push(r),
                    u = r;
                return new t(f)
            },
            parent: function(t) {
                for (var r = [], i = 0; i < this.length; i++)
                    t ? n(this[i].parentNode).is(t) && r.push(this[i].parentNode) : r.push(this[i].parentNode);
                return n(n.unique(r))
            },
            parents: function(t) {
                for (var i, r = [], u = 0; u < this.length; u++)
                    for (i = this[u].parentNode; i; )
                        t ? n(i).is(t) && r.push(i) : r.push(i),
                        i = i.parentNode;
                return n(n.unique(r))
            },
            find: function(n) {
                for (var f, r, u = [], i = 0; i < this.length; i++)
                    for (f = this[i].querySelectorAll(n),
                    r = 0; r < f.length; r++)
                        u.push(f[r]);
                return new t(u)
            },
            children: function(i) {
                for (var u, r, f = [], e = 0; e < this.length; e++)
                    for (u = this[e].childNodes,
                    r = 0; r < u.length; r++)
                        i ? 1 === u[r].nodeType && n(u[r]).is(i) && f.push(u[r]) : 1 === u[r].nodeType && f.push(u[r]);
                return new t(n.unique(f))
            },
            remove: function() {
                for (var n = 0; n < this.length; n++)
                    this[n].parentNode && this[n].parentNode.removeChild(this[n]);
                return this
            },
            add: function() {
                for (var i, r = this, u, t = 0; t < arguments.length; t++)
                    for (u = n(arguments[t]),
                    i = 0; i < u.length; i++)
                        r[r.length] = u[i],
                        r.length++;
                return r
            }
        },
        n.fn = t.prototype,
        n.unique = function(n) {
            for (var i = [], t = 0; t < n.length; t++)
                i.indexOf(n[t]) === -1 && i.push(n[t]);
            return i
        }
        ,
        n
    }(), f = ["jQuery", "Zepto", "Dom7"], u = 0; u < f.length; u++)
        window[f[u]] && function(n) {
            n.fn.swiper = function(i) {
                var r;
                return n(this).each(function() {
                    var n = new t(this,i);
                    r || (r = n)
                }),
                r
            }
        }(window[f[u]]);
    i = void 0 === r ? window.Dom7 || window.Zepto || window.jQuery : r;
    i && ("transitionEnd"in i.fn || (i.fn.transitionEnd = function(n) {
        function r(f) {
            if (f.target === this)
                for (n.call(this, f),
                t = 0; t < i.length; t++)
                    u.off(i[t], r)
        }
        var t, i = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], u = this;
        if (n)
            for (t = 0; t < i.length; t++)
                u.on(i[t], r);
        return this
    }
    ),
    "transform"in i.fn || (i.fn.transform = function(n) {
        for (var t, i = 0; i < this.length; i++)
            t = this[i].style,
            t.webkitTransform = t.MsTransform = t.msTransform = t.MozTransform = t.OTransform = t.transform = n;
        return this
    }
    ),
    "transition"in i.fn || (i.fn.transition = function(n) {
        var i, t;
        for ("string" != typeof n && (n += "ms"),
        i = 0; i < this.length; i++)
            t = this[i].style,
            t.webkitTransitionDuration = t.MsTransitionDuration = t.msTransitionDuration = t.MozTransitionDuration = t.OTransitionDuration = t.transitionDuration = n;
        return this
    }
    ),
    "outerWidth"in i.fn || (i.fn.outerWidth = function(n) {
        return this.length > 0 ? n ? this[0].offsetWidth + parseFloat(this.css("margin-right")) + parseFloat(this.css("margin-left")) : this[0].offsetWidth : null
    }
    ));
    window.Swiper = t
}();
"undefined" != typeof module ? module.exports = window.Swiper : "function" == typeof define && define.amd && define([], function() {
    "use strict";
    return window.Swiper
});
!function(n, t, i, r) {
    function u(t, i) {
        this.settings = null;
        this.options = n.extend({}, u.Defaults, i);
        this.$element = n(t);
        this._handlers = {};
        this._plugins = {};
        this._supress = {};
        this._current = null;
        this._speed = null;
        this._coordinates = [];
        this._breakpoint = null;
        this._width = null;
        this._items = [];
        this._clones = [];
        this._mergers = [];
        this._widths = [];
        this._invalidated = {};
        this._pipe = [];
        this._drag = {
            time: null,
            target: null,
            pointer: null,
            stage: {
                start: null,
                current: null
            },
            direction: null
        };
        this._states = {
            current: {},
            tags: {
                initializing: ["busy"],
                animating: ["busy"],
                dragging: ["interacting"]
            }
        };
        n.each(["onResize", "onThrottledResize"], n.proxy(function(t, i) {
            this._handlers[i] = n.proxy(this[i], this)
        }, this));
        n.each(u.Plugins, n.proxy(function(n, t) {
            this._plugins[n.charAt(0).toLowerCase() + n.slice(1)] = new t(this)
        }, this));
        n.each(u.Workers, n.proxy(function(t, i) {
            this._pipe.push({
                filter: i.filter,
                run: n.proxy(i.run, this)
            })
        }, this));
        this.setup();
        this.initialize()
    }
    u.Defaults = {
        items: 3,
        loop: !1,
        center: !1,
        rewind: !1,
        checkVisibility: !0,
        mouseDrag: !0,
        touchDrag: !0,
        pullDrag: !0,
        freeDrag: !1,
        margin: 0,
        stagePadding: 0,
        merge: !1,
        mergeFit: !0,
        autoWidth: !1,
        startPosition: 0,
        rtl: !1,
        smartSpeed: 250,
        fluidSpeed: !1,
        dragEndSpeed: !1,
        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: t,
        fallbackEasing: "swing",
        info: !1,
        nestedItemSelector: !1,
        itemElement: "div",
        stageElement: "div",
        refreshClass: "owl-refresh",
        loadedClass: "owl-loaded",
        loadingClass: "owl-loading",
        rtlClass: "owl-rtl",
        responsiveClass: "owl-responsive",
        dragClass: "owl-drag",
        itemClass: "owl-item",
        stageClass: "owl-stage",
        stageOuterClass: "owl-stage-outer",
        grabClass: "owl-grab"
    };
    u.Width = {
        Default: "default",
        Inner: "inner",
        Outer: "outer"
    };
    u.Type = {
        Event: "event",
        State: "state"
    };
    u.Plugins = {};
    u.Workers = [{
        filter: ["width", "settings"],
        run: function() {
            this._width = this.$element.width()
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(n) {
            n.current = this._items && this._items[this.relative(this._current)]
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            this.$stage.children(".cloned").remove()
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(n) {
            var t = this.settings.margin || ""
              , u = !this.settings.autoWidth
              , i = this.settings.rtl
              , r = {
                width: "auto",
                "margin-left": i ? t : "",
                "margin-right": i ? "" : t
            };
            u || this.$stage.children().css(r);
            n.css = r
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(n) {
            var r = (this.width() / this.settings.items).toFixed(3) - this.settings.margin
              , t = null
              , i = this._items.length
              , f = !this.settings.autoWidth
              , u = [];
            for (n.items = {
                merge: !1,
                width: r
            }; i--; )
                t = this._mergers[i],
                t = this.settings.mergeFit && Math.min(t, this.settings.items) || t,
                n.items.merge = t > 1 || n.items.merge,
                u[i] = f ? r * t : this._items[i].width();
            this._widths = u
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            var t = []
              , i = this._items
              , r = this.settings
              , e = Math.max(2 * r.items, 4)
              , s = 2 * Math.ceil(i.length / 2)
              , u = r.loop && i.length ? r.rewind ? e : Math.max(e, s) : 0
              , o = ""
              , f = "";
            for (u /= 2; u > 0; )
                t.push(this.normalize(t.length / 2, !0)),
                o += i[t[t.length - 1]][0].outerHTML,
                t.push(this.normalize(i.length - 1 - (t.length - 1) / 2, !0)),
                f = i[t[t.length - 1]][0].outerHTML + f,
                u -= 1;
            this._clones = t;
            n(o).addClass("cloned").appendTo(this.$stage);
            n(f).addClass("cloned").prependTo(this.$stage)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            for (var u = this.settings.rtl ? 1 : -1, f = this._clones.length + this._items.length, n = -1, i = 0, r = 0, t = []; ++n < f; )
                i = t[n - 1] || 0,
                r = this._widths[this.relative(n)] + this.settings.margin,
                t.push(i + r * u);
            this._coordinates = t
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            var n = this.settings.stagePadding
              , t = this._coordinates
              , i = {
                width: Math.ceil(Math.abs(t[t.length - 1])) + 2 * n,
                "padding-left": n || "",
                "padding-right": n || ""
            };
            this.$stage.css(i)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(n) {
            var t = this._coordinates.length
              , i = !this.settings.autoWidth
              , r = this.$stage.children();
            if (i && n.items.merge)
                for (; t--; )
                    n.css.width = this._widths[this.relative(t)],
                    r.eq(t).css(n.css);
            else
                i && (n.css.width = n.items.width,
                r.css(n.css))
        }
    }, {
        filter: ["items"],
        run: function() {
            this._coordinates.length < 1 && this.$stage.removeAttr("style")
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(n) {
            n.current = n.current ? this.$stage.children().index(n.current) : 0;
            n.current = Math.max(this.minimum(), Math.min(this.maximum(), n.current));
            this.reset(n.current)
        }
    }, {
        filter: ["position"],
        run: function() {
            this.animate(this.coordinates(this._current))
        }
    }, {
        filter: ["width", "position", "items", "settings"],
        run: function() {
            for (var t, i, f = this.settings.rtl ? 1 : -1, e = 2 * this.settings.stagePadding, r = this.coordinates(this.current()) + e, o = r + this.width() * f, s = [], n = 0, u = this._coordinates.length; n < u; n++)
                t = this._coordinates[n - 1] || 0,
                i = Math.abs(this._coordinates[n]) + e * f,
                (this.op(t, "<=", r) && this.op(t, ">", o) || this.op(i, "<", r) && this.op(i, ">", o)) && s.push(n);
            this.$stage.children(".active").removeClass("active");
            this.$stage.children(":eq(" + s.join("), :eq(") + ")").addClass("active");
            this.$stage.children(".center").removeClass("center");
            this.settings.center && this.$stage.children().eq(this.current()).addClass("center")
        }
    }];
    u.prototype.initializeStage = function() {
        this.$stage = this.$element.find("." + this.settings.stageClass);
        this.$stage.length || (this.$element.addClass(this.options.loadingClass),
        this.$stage = n("<" + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>').wrap('<div class="' + this.settings.stageOuterClass + '"/>'),
        this.$element.append(this.$stage.parent()))
    }
    ;
    u.prototype.initializeItems = function() {
        var t = this.$element.find(".owl-item");
        if (t.length)
            return this._items = t.get().map(function(t) {
                return n(t)
            }),
            this._mergers = this._items.map(function() {
                return 1
            }),
            void this.refresh();
        this.replace(this.$element.children().not(this.$stage.parent()));
        this.isVisible() ? this.refresh() : this.invalidate("width");
        this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass)
    }
    ;
    u.prototype.initialize = function() {
        if (this.enter("initializing"),
        this.trigger("initialize"),
        this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl),
        this.settings.autoWidth && !this.is("pre-loading")) {
            var n, t, i;
            n = this.$element.find("img");
            t = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : r;
            i = this.$element.children(t).width();
            n.length && i <= 0 && this.preloadAutoWidthImages(n)
        }
        this.initializeStage();
        this.initializeItems();
        this.registerEventHandlers();
        this.leave("initializing");
        this.trigger("initialized")
    }
    ;
    u.prototype.isVisible = function() {
        return !this.settings.checkVisibility || this.$element.is(":visible")
    }
    ;
    u.prototype.setup = function() {
        var u = this.viewport()
          , r = this.options.responsive
          , i = -1
          , t = null;
        r ? (n.each(r, function(n) {
            n <= u && n > i && (i = Number(n))
        }),
        t = n.extend({}, this.options, r[i]),
        "function" == typeof t.stagePadding && (t.stagePadding = t.stagePadding()),
        delete t.responsive,
        t.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s","g"), "$1" + i))) : t = n.extend({}, this.options);
        this.trigger("change", {
            property: {
                name: "settings",
                value: t
            }
        });
        this._breakpoint = i;
        this.settings = t;
        this.invalidate("settings");
        this.trigger("changed", {
            property: {
                name: "settings",
                value: this.settings
            }
        })
    }
    ;
    u.prototype.optionsLogic = function() {
        this.settings.autoWidth && (this.settings.stagePadding = !1,
        this.settings.merge = !1)
    }
    ;
    u.prototype.prepare = function(t) {
        var i = this.trigger("prepare", {
            content: t
        });
        return i.data || (i.data = n("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(t)),
        this.trigger("prepared", {
            content: i.data
        }),
        i.data
    }
    ;
    u.prototype.update = function() {
        for (var t = 0, i = this._pipe.length, r = n.proxy(function(n) {
            return this[n]
        }, this._invalidated), u = {}; t < i; )
            (this._invalidated.all || n.grep(this._pipe[t].filter, r).length > 0) && this._pipe[t].run(u),
            t++;
        this._invalidated = {};
        this.is("valid") || this.enter("valid")
    }
    ;
    u.prototype.width = function(n) {
        switch (n = n || u.Width.Default) {
        case u.Width.Inner:
        case u.Width.Outer:
            return this._width;
        default:
            return this._width - 2 * this.settings.stagePadding + this.settings.margin
        }
    }
    ;
    u.prototype.refresh = function() {
        this.enter("refreshing");
        this.trigger("refresh");
        this.setup();
        this.optionsLogic();
        this.$element.addClass(this.options.refreshClass);
        this.update();
        this.$element.removeClass(this.options.refreshClass);
        this.leave("refreshing");
        this.trigger("refreshed")
    }
    ;
    u.prototype.onThrottledResize = function() {
        t.clearTimeout(this.resizeTimer);
        this.resizeTimer = t.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
    }
    ;
    u.prototype.onResize = function() {
        return !!this._items.length && this._width !== this.$element.width() && !!this.isVisible() && (this.enter("resizing"),
        this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"),
        !1) : (this.invalidate("width"),
        this.refresh(),
        this.leave("resizing"),
        void this.trigger("resized")))
    }
    ;
    u.prototype.registerEventHandlers = function() {
        n.support.transition && this.$stage.on(n.support.transition.end + ".owl.core", n.proxy(this.onTransitionEnd, this));
        !1 !== this.settings.responsive && this.on(t, "resize", this._handlers.onThrottledResize);
        this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass),
        this.$stage.on("mousedown.owl.core", n.proxy(this.onDragStart, this)),
        this.$stage.on("dragstart.owl.core selectstart.owl.core", function() {
            return !1
        }));
        this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", n.proxy(this.onDragStart, this)),
        this.$stage.on("touchcancel.owl.core", n.proxy(this.onDragEnd, this)))
    }
    ;
    u.prototype.onDragStart = function(t) {
        var r = null;
        3 !== t.which && (n.support.transform ? (r = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","),
        r = {
            x: r[16 === r.length ? 12 : 4],
            y: r[16 === r.length ? 13 : 5]
        }) : (r = this.$stage.position(),
        r = {
            x: this.settings.rtl ? r.left + this.$stage.width() - this.width() + this.settings.margin : r.left,
            y: r.top
        }),
        this.is("animating") && (n.support.transform ? this.animate(r.x) : this.$stage.stop(),
        this.invalidate("position")),
        this.$element.toggleClass(this.options.grabClass, "mousedown" === t.type),
        this.speed(0),
        this._drag.time = (new Date).getTime(),
        this._drag.target = n(t.target),
        this._drag.stage.start = r,
        this._drag.stage.current = r,
        this._drag.pointer = this.pointer(t),
        n(i).on("mouseup.owl.core touchend.owl.core", n.proxy(this.onDragEnd, this)),
        n(i).one("mousemove.owl.core touchmove.owl.core", n.proxy(function(t) {
            var r = this.difference(this._drag.pointer, this.pointer(t));
            n(i).on("mousemove.owl.core touchmove.owl.core", n.proxy(this.onDragMove, this));
            Math.abs(r.x) < Math.abs(r.y) && this.is("valid") || (t.preventDefault(),
            this.enter("dragging"),
            this.trigger("drag"))
        }, this)))
    }
    ;
    u.prototype.onDragMove = function(n) {
        var t = null
          , i = null
          , u = null
          , f = this.difference(this._drag.pointer, this.pointer(n))
          , r = this.difference(this._drag.stage.start, f);
        this.is("dragging") && (n.preventDefault(),
        this.settings.loop ? (t = this.coordinates(this.minimum()),
        i = this.coordinates(this.maximum() + 1) - t,
        r.x = ((r.x - t) % i + i) % i + t) : (t = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()),
        i = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()),
        u = this.settings.pullDrag ? f.x / -5 : 0,
        r.x = Math.max(Math.min(r.x, t + u), i + u)),
        this._drag.stage.current = r,
        this.animate(r.x))
    }
    ;
    u.prototype.onDragEnd = function(t) {
        var r = this.difference(this._drag.pointer, this.pointer(t))
          , f = this._drag.stage.current
          , u = r.x > 0 ^ this.settings.rtl ? "left" : "right";
        n(i).off(".owl.core");
        this.$element.removeClass(this.options.grabClass);
        (0 !== r.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed),
        this.current(this.closest(f.x, 0 !== r.x ? u : this._drag.direction)),
        this.invalidate("position"),
        this.update(),
        this._drag.direction = u,
        (Math.abs(r.x) > 3 || (new Date).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function() {
            return !1
        }));
        this.is("dragging") && (this.leave("dragging"),
        this.trigger("dragged"))
    }
    ;
    u.prototype.closest = function(t, i) {
        var u = -1
          , e = 30
          , o = this.width()
          , f = this.coordinates();
        return this.settings.freeDrag || n.each(f, n.proxy(function(n, s) {
            return "left" === i && t > s - e && t < s + e ? u = n : "right" === i && t > s - o - e && t < s - o + e ? u = n + 1 : this.op(t, "<", s) && this.op(t, ">", f[n + 1] !== r ? f[n + 1] : s - o) && (u = "left" === i ? n + 1 : n),
            -1 === u
        }, this)),
        this.settings.loop || (this.op(t, ">", f[this.minimum()]) ? u = t = this.minimum() : this.op(t, "<", f[this.maximum()]) && (u = t = this.maximum())),
        u
    }
    ;
    u.prototype.animate = function(t) {
        var i = this.speed() > 0;
        this.is("animating") && this.onTransitionEnd();
        i && (this.enter("animating"),
        this.trigger("translate"));
        n.support.transform3d && n.support.transition ? this.$stage.css({
            transform: "translate3d(" + t + "px,0px,0px)",
            transition: this.speed() / 1e3 + "s"
        }) : i ? this.$stage.animate({
            left: t + "px"
        }, this.speed(), this.settings.fallbackEasing, n.proxy(this.onTransitionEnd, this)) : this.$stage.css({
            left: t + "px"
        })
    }
    ;
    u.prototype.is = function(n) {
        return this._states.current[n] && this._states.current[n] > 0
    }
    ;
    u.prototype.current = function(n) {
        if (n === r)
            return this._current;
        if (0 === this._items.length)
            return r;
        if (n = this.normalize(n),
        this._current !== n) {
            var t = this.trigger("change", {
                property: {
                    name: "position",
                    value: n
                }
            });
            t.data !== r && (n = this.normalize(t.data));
            this._current = n;
            this.invalidate("position");
            this.trigger("changed", {
                property: {
                    name: "position",
                    value: this._current
                }
            })
        }
        return this._current
    }
    ;
    u.prototype.invalidate = function(t) {
        return "string" === n.type(t) && (this._invalidated[t] = !0,
        this.is("valid") && this.leave("valid")),
        n.map(this._invalidated, function(n, t) {
            return t
        })
    }
    ;
    u.prototype.reset = function(n) {
        (n = this.normalize(n)) !== r && (this._speed = 0,
        this._current = n,
        this.suppress(["translate", "translated"]),
        this.animate(this.coordinates(n)),
        this.release(["translate", "translated"]))
    }
    ;
    u.prototype.normalize = function(n, t) {
        var i = this._items.length
          , u = t ? 0 : this._clones.length;
        return !this.isNumeric(n) || i < 1 ? n = r : (n < 0 || n >= i + u) && (n = ((n - u / 2) % i + i) % i + u / 2),
        n
    }
    ;
    u.prototype.relative = function(n) {
        return n -= this._clones.length / 2,
        this.normalize(n, !0)
    }
    ;
    u.prototype.maximum = function(n) {
        var t, u, f, i = this.settings, r = this._coordinates.length;
        if (i.loop)
            r = this._clones.length / 2 + this._items.length - 1;
        else if (i.autoWidth || i.merge) {
            if (t = this._items.length)
                for (u = this._items[--t].width(),
                f = this.$element.width(); t-- && !((u += this._items[t].width() + this.settings.margin) > f); )
                    ;
            r = t + 1
        } else
            r = i.center ? this._items.length - 1 : this._items.length - i.items;
        return n && (r -= this._clones.length / 2),
        Math.max(r, 0)
    }
    ;
    u.prototype.minimum = function(n) {
        return n ? 0 : this._clones.length / 2
    }
    ;
    u.prototype.items = function(n) {
        return n === r ? this._items.slice() : (n = this.normalize(n, !0),
        this._items[n])
    }
    ;
    u.prototype.mergers = function(n) {
        return n === r ? this._mergers.slice() : (n = this.normalize(n, !0),
        this._mergers[n])
    }
    ;
    u.prototype.clones = function(t) {
        var i = this._clones.length / 2
          , f = i + this._items.length
          , u = function(n) {
            return n % 2 == 0 ? f + n / 2 : i - (n + 1) / 2
        };
        return t === r ? n.map(this._clones, function(n, t) {
            return u(t)
        }) : n.map(this._clones, function(n, i) {
            return n === t ? u(i) : null
        })
    }
    ;
    u.prototype.speed = function(n) {
        return n !== r && (this._speed = n),
        this._speed
    }
    ;
    u.prototype.coordinates = function(t) {
        var i, f = 1, u = t - 1;
        return t === r ? n.map(this._coordinates, n.proxy(function(n, t) {
            return this.coordinates(t)
        }, this)) : (this.settings.center ? (this.settings.rtl && (f = -1,
        u = t + 1),
        i = this._coordinates[t],
        i += (this.width() - i + (this._coordinates[u] || 0)) / 2 * f) : i = this._coordinates[u] || 0,
        i = Math.ceil(i))
    }
    ;
    u.prototype.duration = function(n, t, i) {
        return 0 === i ? 0 : Math.min(Math.max(Math.abs(t - n), 1), 6) * Math.abs(i || this.settings.smartSpeed)
    }
    ;
    u.prototype.to = function(n, t) {
        var u = this.current()
          , f = null
          , i = n - this.relative(u)
          , s = (i > 0) - (i < 0)
          , e = this._items.length
          , o = this.minimum()
          , r = this.maximum();
        this.settings.loop ? (!this.settings.rewind && Math.abs(i) > e / 2 && (i += -1 * s * e),
        n = u + i,
        (f = ((n - o) % e + e) % e + o) !== n && f - i <= r && f - i > 0 && (u = f - i,
        n = f,
        this.reset(u))) : this.settings.rewind ? (r += 1,
        n = (n % r + r) % r) : n = Math.max(o, Math.min(r, n));
        this.speed(this.duration(u, n, t));
        this.current(n);
        this.isVisible() && this.update()
    }
    ;
    u.prototype.next = function(n) {
        n = n || !1;
        this.to(this.relative(this.current()) + 1, n)
    }
    ;
    u.prototype.prev = function(n) {
        n = n || !1;
        this.to(this.relative(this.current()) - 1, n)
    }
    ;
    u.prototype.onTransitionEnd = function(n) {
        if (n !== r && (n.stopPropagation(),
        (n.target || n.srcElement || n.originalTarget) !== this.$stage.get(0)))
            return !1;
        this.leave("animating");
        this.trigger("translated")
    }
    ;
    u.prototype.viewport = function() {
        var r;
        return this.options.responsiveBaseElement !== t ? r = n(this.options.responsiveBaseElement).width() : t.innerWidth ? r = t.innerWidth : i.documentElement && i.documentElement.clientWidth ? r = i.documentElement.clientWidth : console.warn("Can not detect viewport width."),
        r
    }
    ;
    u.prototype.replace = function(t) {
        this.$stage.empty();
        this._items = [];
        t && (t = t instanceof jQuery ? t : n(t));
        this.settings.nestedItemSelector && (t = t.find("." + this.settings.nestedItemSelector));
        t.filter(function() {
            return 1 === this.nodeType
        }).each(n.proxy(function(n, t) {
            t = this.prepare(t);
            this.$stage.append(t);
            this._items.push(t);
            this._mergers.push(1 * t.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
        }, this));
        this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0);
        this.invalidate("items")
    }
    ;
    u.prototype.add = function(t, i) {
        var u = this.relative(this._current);
        i = i === r ? this._items.length : this.normalize(i, !0);
        t = t instanceof jQuery ? t : n(t);
        this.trigger("add", {
            content: t,
            position: i
        });
        t = this.prepare(t);
        0 === this._items.length || i === this._items.length ? (0 === this._items.length && this.$stage.append(t),
        0 !== this._items.length && this._items[i - 1].after(t),
        this._items.push(t),
        this._mergers.push(1 * t.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[i].before(t),
        this._items.splice(i, 0, t),
        this._mergers.splice(i, 0, 1 * t.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1));
        this._items[u] && this.reset(this._items[u].index());
        this.invalidate("items");
        this.trigger("added", {
            content: t,
            position: i
        })
    }
    ;
    u.prototype.remove = function(n) {
        (n = this.normalize(n, !0)) !== r && (this.trigger("remove", {
            content: this._items[n],
            position: n
        }),
        this._items[n].remove(),
        this._items.splice(n, 1),
        this._mergers.splice(n, 1),
        this.invalidate("items"),
        this.trigger("removed", {
            content: null,
            position: n
        }))
    }
    ;
    u.prototype.preloadAutoWidthImages = function(t) {
        t.each(n.proxy(function(t, i) {
            this.enter("pre-loading");
            i = n(i);
            n(new Image).one("load", n.proxy(function(n) {
                i.attr("src", n.target.src);
                i.css("opacity", 1);
                this.leave("pre-loading");
                !this.is("pre-loading") && !this.is("initializing") && this.refresh()
            }, this)).attr("src", i.attr("src") || i.attr("data-src") || i.attr("data-src-retina"))
        }, this))
    }
    ;
    u.prototype.destroy = function() {
        this.$element.off(".owl.core");
        this.$stage.off(".owl.core");
        n(i).off(".owl.core");
        !1 !== this.settings.responsive && (t.clearTimeout(this.resizeTimer),
        this.off(t, "resize", this._handlers.onThrottledResize));
        for (var r in this._plugins)
            this._plugins[r].destroy();
        this.$stage.children(".cloned").remove();
        this.$stage.unwrap();
        this.$stage.children().contents().unwrap();
        this.$stage.children().unwrap();
        this.$stage.remove();
        this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s","g"), "")).removeData("owl.carousel")
    }
    ;
    u.prototype.op = function(n, t, i) {
        var r = this.settings.rtl;
        switch (t) {
        case "<":
            return r ? n > i : n < i;
        case ">":
            return r ? n < i : n > i;
        case ">=":
            return r ? n <= i : n >= i;
        case "<=":
            return r ? n >= i : n <= i
        }
    }
    ;
    u.prototype.on = function(n, t, i, r) {
        n.addEventListener ? n.addEventListener(t, i, r) : n.attachEvent && n.attachEvent("on" + t, i)
    }
    ;
    u.prototype.off = function(n, t, i, r) {
        n.removeEventListener ? n.removeEventListener(t, i, r) : n.detachEvent && n.detachEvent("on" + t, i)
    }
    ;
    u.prototype.trigger = function(t, i, r) {
        var o = {
            item: {
                count: this._items.length,
                index: this.current()
            }
        }
          , e = n.camelCase(n.grep(["on", t, r], function(n) {
            return n
        }).join("-").toLowerCase())
          , f = n.Event([t, "owl", r || "carousel"].join(".").toLowerCase(), n.extend({
            relatedTarget: this
        }, o, i));
        return this._supress[t] || (n.each(this._plugins, function(n, t) {
            t.onTrigger && t.onTrigger(f)
        }),
        this.register({
            type: u.Type.Event,
            name: t
        }),
        this.$element.trigger(f),
        this.settings && "function" == typeof this.settings[e] && this.settings[e].call(this, f)),
        f
    }
    ;
    u.prototype.enter = function(t) {
        n.each([t].concat(this._states.tags[t] || []), n.proxy(function(n, t) {
            this._states.current[t] === r && (this._states.current[t] = 0);
            this._states.current[t]++
        }, this))
    }
    ;
    u.prototype.leave = function(t) {
        n.each([t].concat(this._states.tags[t] || []), n.proxy(function(n, t) {
            this._states.current[t]--
        }, this))
    }
    ;
    u.prototype.register = function(t) {
        if (t.type === u.Type.Event) {
            if (n.event.special[t.name] || (n.event.special[t.name] = {}),
            !n.event.special[t.name].owl) {
                var i = n.event.special[t.name]._default;
                n.event.special[t.name]._default = function(n) {
                    return !i || !i.apply || n.namespace && -1 !== n.namespace.indexOf("owl") ? n.namespace && n.namespace.indexOf("owl") > -1 : i.apply(this, arguments)
                }
                ;
                n.event.special[t.name].owl = !0
            }
        } else
            t.type === u.Type.State && (this._states.tags[t.name] = this._states.tags[t.name] ? this._states.tags[t.name].concat(t.tags) : t.tags,
            this._states.tags[t.name] = n.grep(this._states.tags[t.name], n.proxy(function(i, r) {
                return n.inArray(i, this._states.tags[t.name]) === r
            }, this)))
    }
    ;
    u.prototype.suppress = function(t) {
        n.each(t, n.proxy(function(n, t) {
            this._supress[t] = !0
        }, this))
    }
    ;
    u.prototype.release = function(t) {
        n.each(t, n.proxy(function(n, t) {
            delete this._supress[t]
        }, this))
    }
    ;
    u.prototype.pointer = function(n) {
        var i = {
            x: null,
            y: null
        };
        return n = n.originalEvent || n || t.event,
        n = n.touches && n.touches.length ? n.touches[0] : n.changedTouches && n.changedTouches.length ? n.changedTouches[0] : n,
        n.pageX ? (i.x = n.pageX,
        i.y = n.pageY) : (i.x = n.clientX,
        i.y = n.clientY),
        i
    }
    ;
    u.prototype.isNumeric = function(n) {
        return !isNaN(parseFloat(n))
    }
    ;
    u.prototype.difference = function(n, t) {
        return {
            x: n.x - t.x,
            y: n.y - t.y
        }
    }
    ;
    n.fn.owlCarousel = function(t) {
        var i = Array.prototype.slice.call(arguments, 1);
        return this.each(function() {
            var f = n(this)
              , r = f.data("owl.carousel");
            r || (r = new u(this,"object" == typeof t && t),
            f.data("owl.carousel", r),
            n.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function(t, i) {
                r.register({
                    type: u.Type.Event,
                    name: i
                });
                r.$element.on(i + ".owl.carousel.core", n.proxy(function(n) {
                    n.namespace && n.relatedTarget !== this && (this.suppress([i]),
                    r[i].apply(this, [].slice.call(arguments, 1)),
                    this.release([i]))
                }, r))
            }));
            "string" == typeof t && "_" !== t.charAt(0) && r[t].apply(r, i)
        })
    }
    ;
    n.fn.owlCarousel.Constructor = u
}(window.Zepto || window.jQuery, window, document),
function(n, t) {
    var i = function(t) {
        this._core = t;
        this._interval = null;
        this._visible = null;
        this._handlers = {
            "initialized.owl.carousel": n.proxy(function(n) {
                n.namespace && this._core.settings.autoRefresh && this.watch()
            }, this)
        };
        this._core.options = n.extend({}, i.Defaults, this._core.options);
        this._core.$element.on(this._handlers)
    };
    i.Defaults = {
        autoRefresh: !0,
        autoRefreshInterval: 500
    };
    i.prototype.watch = function() {
        this._interval || (this._visible = this._core.isVisible(),
        this._interval = t.setInterval(n.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
    }
    ;
    i.prototype.refresh = function() {
        this._core.isVisible() !== this._visible && (this._visible = !this._visible,
        this._core.$element.toggleClass("owl-hidden", !this._visible),
        this._visible && this._core.invalidate("width") && this._core.refresh())
    }
    ;
    i.prototype.destroy = function() {
        var n, i;
        t.clearInterval(this._interval);
        for (n in this._handlers)
            this._core.$element.off(n, this._handlers[n]);
        for (i in Object.getOwnPropertyNames(this))
            "function" != typeof this[i] && (this[i] = null)
    }
    ;
    n.fn.owlCarousel.Constructor.Plugins.AutoRefresh = i
}(window.Zepto || window.jQuery, window, document),
function(n, t, i, r) {
    var u = function(t) {
        this._core = t;
        this._loaded = [];
        this._handlers = {
            "initialized.owl.carousel change.owl.carousel resized.owl.carousel": n.proxy(function(t) {
                if (t.namespace && this._core.settings && this._core.settings.lazyLoad && (t.property && "position" == t.property.name || "initialized" == t.type))
                    for (var i = this._core.settings, f = i.center && Math.ceil(i.items / 2) || i.items, e = i.center && -1 * f || 0, u = (t.property && t.property.value !== r ? t.property.value : this._core.current()) + e, o = this._core.clones().length, s = n.proxy(function(n, t) {
                        this.load(t)
                    }, this); e++ < f; )
                        this.load(o / 2 + this._core.relative(u)),
                        o && n.each(this._core.clones(this._core.relative(u)), s),
                        u++
            }, this)
        };
        this._core.options = n.extend({}, u.Defaults, this._core.options);
        this._core.$element.on(this._handlers)
    };
    u.Defaults = {
        lazyLoad: !1
    };
    u.prototype.load = function(i) {
        var r = this._core.$stage.children().eq(i)
          , u = r && r.find(".owl-lazy");
        !u || n.inArray(r.get(0), this._loaded) > -1 || (u.each(n.proxy(function(i, r) {
            var e, u = n(r), f = t.devicePixelRatio > 1 && u.attr("data-src-retina") || u.attr("data-src") || u.attr("data-srcset");
            this._core.trigger("load", {
                element: u,
                url: f
            }, "lazy");
            u.is("img") ? u.one("load.owl.lazy", n.proxy(function() {
                u.css("opacity", 1);
                this._core.trigger("loaded", {
                    element: u,
                    url: f
                }, "lazy")
            }, this)).attr("src", f) : u.is("source") ? u.one("load.owl.lazy", n.proxy(function() {
                this._core.trigger("loaded", {
                    element: u,
                    url: f
                }, "lazy")
            }, this)).attr("srcset", f) : (e = new Image,
            e.onload = n.proxy(function() {
                u.css({
                    "background-image": 'url("' + f + '")',
                    opacity: "1"
                });
                this._core.trigger("loaded", {
                    element: u,
                    url: f
                }, "lazy")
            }, this),
            e.src = f)
        }, this)),
        this._loaded.push(r.get(0)))
    }
    ;
    u.prototype.destroy = function() {
        var n, t;
        for (n in this.handlers)
            this._core.$element.off(n, this.handlers[n]);
        for (t in Object.getOwnPropertyNames(this))
            "function" != typeof this[t] && (this[t] = null)
    }
    ;
    n.fn.owlCarousel.Constructor.Plugins.Lazy = u
}(window.Zepto || window.jQuery, window, document),
function(n, t) {
    var i = function(r) {
        this._core = r;
        this._handlers = {
            "initialized.owl.carousel refreshed.owl.carousel": n.proxy(function(n) {
                n.namespace && this._core.settings.autoHeight && this.update()
            }, this),
            "changed.owl.carousel": n.proxy(function(n) {
                n.namespace && this._core.settings.autoHeight && "position" === n.property.name && (console.log("update called"),
                this.update())
            }, this),
            "loaded.owl.lazy": n.proxy(function(n) {
                n.namespace && this._core.settings.autoHeight && n.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
            }, this)
        };
        this._core.options = n.extend({}, i.Defaults, this._core.options);
        this._core.$element.on(this._handlers);
        this._intervalId = null;
        var u = this;
        n(t).on("load", function() {
            u._core.settings.autoHeight && u.update()
        });
        n(t).resize(function() {
            u._core.settings.autoHeight && (null != u._intervalId && clearTimeout(u._intervalId),
            u._intervalId = setTimeout(function() {
                u.update()
            }, 250))
        })
    };
    i.Defaults = {
        autoHeight: !1,
        autoHeightClass: "owl-height"
    };
    i.prototype.update = function() {
        var t = this._core._current
          , u = t + this._core.settings.items
          , f = this._core.$stage.children().toArray().slice(t, u)
          , i = []
          , r = 0;
        n.each(f, function(t, r) {
            i.push(n(r).height())
        });
        r = Math.max.apply(null, i);
        this._core.$stage.parent().height(r).addClass(this._core.settings.autoHeightClass)
    }
    ;
    i.prototype.destroy = function() {
        var n, t;
        for (n in this._handlers)
            this._core.$element.off(n, this._handlers[n]);
        for (t in Object.getOwnPropertyNames(this))
            "function" != typeof this[t] && (this[t] = null)
    }
    ;
    n.fn.owlCarousel.Constructor.Plugins.AutoHeight = i
}(window.Zepto || window.jQuery, window, document),
function(n, t, i) {
    var r = function(t) {
        this._core = t;
        this._videos = {};
        this._playing = null;
        this._handlers = {
            "initialized.owl.carousel": n.proxy(function(n) {
                n.namespace && this._core.register({
                    type: "state",
                    name: "playing",
                    tags: ["interacting"]
                })
            }, this),
            "resize.owl.carousel": n.proxy(function(n) {
                n.namespace && this._core.settings.video && this.isInFullScreen() && n.preventDefault()
            }, this),
            "refreshed.owl.carousel": n.proxy(function(n) {
                n.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
            }, this),
            "changed.owl.carousel": n.proxy(function(n) {
                n.namespace && "position" === n.property.name && this._playing && this.stop()
            }, this),
            "prepared.owl.carousel": n.proxy(function(t) {
                if (t.namespace) {
                    var i = n(t.content).find(".owl-video");
                    i.length && (i.css("display", "none"),
                    this.fetch(i, n(t.content)))
                }
            }, this)
        };
        this._core.options = n.extend({}, r.Defaults, this._core.options);
        this._core.$element.on(this._handlers);
        this._core.$element.on("click.owl.video", ".owl-video-play-icon", n.proxy(function(n) {
            this.play(n)
        }, this))
    };
    r.Defaults = {
        video: !1,
        videoHeight: !1,
        videoWidth: !1
    };
    r.prototype.fetch = function(n, t) {
        var u = function() {
            return n.attr("data-vimeo-id") ? "vimeo" : n.attr("data-vzaar-id") ? "vzaar" : "youtube"
        }()
          , i = n.attr("data-vimeo-id") || n.attr("data-youtube-id") || n.attr("data-vzaar-id")
          , f = n.attr("data-width") || this._core.settings.videoWidth
          , e = n.attr("data-height") || this._core.settings.videoHeight
          , r = n.attr("href");
        if (!r)
            throw new Error("Missing video URL.");
        if (i = r.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/),
        i[3].indexOf("youtu") > -1)
            u = "youtube";
        else if (i[3].indexOf("vimeo") > -1)
            u = "vimeo";
        else {
            if (!(i[3].indexOf("vzaar") > -1))
                throw new Error("Video URL not supported.");
            u = "vzaar"
        }
        i = i[6];
        this._videos[r] = {
            type: u,
            id: i,
            width: f,
            height: e
        };
        t.attr("data-video", r);
        this.thumbnail(n, this._videos[r])
    }
    ;
    r.prototype.thumbnail = function(t, i) {
        var o, s, r, c = i.width && i.height ? 'style="width:' + i.width + "px;height:" + i.height + 'px;"' : "", f = t.find("img"), e = "src", h = "", l = this._core.settings, u = function(n) {
            s = '<div class="owl-video-play-icon"><\/div>';
            o = l.lazyLoad ? '<div class="owl-video-tn ' + h + '" ' + e + '="' + n + '"><\/div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + n + ')"><\/div>';
            t.after(o);
            t.after(s)
        };
        if (t.wrap('<div class="owl-video-wrapper"' + c + "><\/div>"),
        this._core.settings.lazyLoad && (e = "data-src",
        h = "owl-lazy"),
        f.length)
            return u(f.attr(e)),
            f.remove(),
            !1;
        "youtube" === i.type ? (r = "//img.youtube.com/vi/" + i.id + "/hqdefault.jpg",
        u(r)) : "vimeo" === i.type ? n.ajax({
            type: "GET",
            url: "//vimeo.com/api/v2/video/" + i.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function(n) {
                r = n[0].thumbnail_large;
                u(r)
            }
        }) : "vzaar" === i.type && n.ajax({
            type: "GET",
            url: "//vzaar.com/api/videos/" + i.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function(n) {
                r = n.framegrab_url;
                u(r)
            }
        })
    }
    ;
    r.prototype.stop = function() {
        this._core.trigger("stop", null, "video");
        this._playing.find(".owl-video-frame").remove();
        this._playing.removeClass("owl-video-playing");
        this._playing = null;
        this._core.leave("playing");
        this._core.trigger("stopped", null, "video")
    }
    ;
    r.prototype.play = function(t) {
        var u, o = n(t.target), r = o.closest("." + this._core.settings.itemClass), i = this._videos[r.attr("data-video")], f = i.width || "100%", e = i.height || this._core.$stage.height();
        this._playing || (this._core.enter("playing"),
        this._core.trigger("play", null, "video"),
        r = this._core.items(this._core.relative(r.index())),
        this._core.reset(r.index()),
        "youtube" === i.type ? u = '<iframe width="' + f + '" height="' + e + '" src="//www.youtube.com/embed/' + i.id + "?autoplay=1&rel=0&v=" + i.id + '" frameborder="0" allowfullscreen><\/iframe>' : "vimeo" === i.type ? u = '<iframe src="//player.vimeo.com/video/' + i.id + '?autoplay=1" width="' + f + '" height="' + e + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen><\/iframe>' : "vzaar" === i.type && (u = '<iframe frameborder="0"height="' + e + '"width="' + f + '" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/' + i.id + '/player?autoplay=true"><\/iframe>'),
        n('<div class="owl-video-frame">' + u + "<\/div>").insertAfter(r.find(".owl-video")),
        this._playing = r.addClass("owl-video-playing"))
    }
    ;
    r.prototype.isInFullScreen = function() {
        var t = i.fullscreenElement || i.mozFullScreenElement || i.webkitFullscreenElement;
        return t && n(t).parent().hasClass("owl-video-frame")
    }
    ;
    r.prototype.destroy = function() {
        var n, t;
        this._core.$element.off("click.owl.video");
        for (n in this._handlers)
            this._core.$element.off(n, this._handlers[n]);
        for (t in Object.getOwnPropertyNames(this))
            "function" != typeof this[t] && (this[t] = null)
    }
    ;
    n.fn.owlCarousel.Constructor.Plugins.Video = r
}(window.Zepto || window.jQuery, window, document),
function(n, t, i, r) {
    var u = function(t) {
        this.core = t;
        this.core.options = n.extend({}, u.Defaults, this.core.options);
        this.swapping = !0;
        this.previous = r;
        this.next = r;
        this.handlers = {
            "change.owl.carousel": n.proxy(function(n) {
                n.namespace && "position" == n.property.name && (this.previous = this.core.current(),
                this.next = n.property.value)
            }, this),
            "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": n.proxy(function(n) {
                n.namespace && (this.swapping = "translated" == n.type)
            }, this),
            "translate.owl.carousel": n.proxy(function(n) {
                n.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
            }, this)
        };
        this.core.$element.on(this.handlers)
    };
    u.Defaults = {
        animateOut: !1,
        animateIn: !1
    };
    u.prototype.swap = function() {
        if (1 === this.core.settings.items && n.support.animation && n.support.transition) {
            this.core.speed(0);
            var t, i = n.proxy(this.clear, this), f = this.core.$stage.children().eq(this.previous), e = this.core.$stage.children().eq(this.next), r = this.core.settings.animateIn, u = this.core.settings.animateOut;
            this.core.current() !== this.previous && (u && (t = this.core.coordinates(this.previous) - this.core.coordinates(this.next),
            f.one(n.support.animation.end, i).css({
                left: t + "px"
            }).addClass("animated owl-animated-out").addClass(u)),
            r && e.one(n.support.animation.end, i).addClass("animated owl-animated-in").addClass(r))
        }
    }
    ;
    u.prototype.clear = function(t) {
        n(t.target).css({
            left: ""
        }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut);
        this.core.onTransitionEnd()
    }
    ;
    u.prototype.destroy = function() {
        var n, t;
        for (n in this.handlers)
            this.core.$element.off(n, this.handlers[n]);
        for (t in Object.getOwnPropertyNames(this))
            "function" != typeof this[t] && (this[t] = null)
    }
    ;
    n.fn.owlCarousel.Constructor.Plugins.Animate = u
}(window.Zepto || window.jQuery, window, document),
function(n, t, i) {
    var r = function(t) {
        this._core = t;
        this._call = null;
        this._time = 0;
        this._timeout = 0;
        this._paused = !0;
        this._handlers = {
            "changed.owl.carousel": n.proxy(function(n) {
                n.namespace && "settings" === n.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : n.namespace && "position" === n.property.name && this._paused && (this._time = 0)
            }, this),
            "initialized.owl.carousel": n.proxy(function(n) {
                n.namespace && this._core.settings.autoplay && this.play()
            }, this),
            "play.owl.autoplay": n.proxy(function(n, t, i) {
                n.namespace && this.play(t, i)
            }, this),
            "stop.owl.autoplay": n.proxy(function(n) {
                n.namespace && this.stop()
            }, this),
            "mouseover.owl.autoplay": n.proxy(function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }, this),
            "mouseleave.owl.autoplay": n.proxy(function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
            }, this),
            "touchstart.owl.core": n.proxy(function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }, this),
            "touchend.owl.core": n.proxy(function() {
                this._core.settings.autoplayHoverPause && this.play()
            }, this)
        };
        this._core.$element.on(this._handlers);
        this._core.options = n.extend({}, r.Defaults, this._core.options)
    };
    r.Defaults = {
        autoplay: !1,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !1,
        autoplaySpeed: !1
    };
    r.prototype._next = function(r) {
        this._call = t.setTimeout(n.proxy(this._next, this, r), this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read());
        this._core.is("interacting") || i.hidden || this._core.next(r || this._core.settings.autoplaySpeed)
    }
    ;
    r.prototype.read = function() {
        return (new Date).getTime() - this._time
    }
    ;
    r.prototype.play = function(i, r) {
        var u;
        this._core.is("rotating") || this._core.enter("rotating");
        i = i || this._core.settings.autoplayTimeout;
        u = Math.min(this._time % (this._timeout || i), i);
        this._paused ? (this._time = this.read(),
        this._paused = !1) : t.clearTimeout(this._call);
        this._time += this.read() % i - u;
        this._timeout = i;
        this._call = t.setTimeout(n.proxy(this._next, this, r), i - u)
    }
    ;
    r.prototype.stop = function() {
        this._core.is("rotating") && (this._time = 0,
        this._paused = !0,
        t.clearTimeout(this._call),
        this._core.leave("rotating"))
    }
    ;
    r.prototype.pause = function() {
        this._core.is("rotating") && !this._paused && (this._time = this.read(),
        this._paused = !0,
        t.clearTimeout(this._call))
    }
    ;
    r.prototype.destroy = function() {
        var n, t;
        this.stop();
        for (n in this._handlers)
            this._core.$element.off(n, this._handlers[n]);
        for (t in Object.getOwnPropertyNames(this))
            "function" != typeof this[t] && (this[t] = null)
    }
    ;
    n.fn.owlCarousel.Constructor.Plugins.autoplay = r
}(window.Zepto || window.jQuery, window, document),
function(n) {
    "use strict";
    var t = function(i) {
        this._core = i;
        this._initialized = !1;
        this._pages = [];
        this._controls = {};
        this._templates = [];
        this.$element = this._core.$element;
        this._overrides = {
            next: this._core.next,
            prev: this._core.prev,
            to: this._core.to
        };
        this._handlers = {
            "prepared.owl.carousel": n.proxy(function(t) {
                t.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + n(t.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "<\/div>")
            }, this),
            "added.owl.carousel": n.proxy(function(n) {
                n.namespace && this._core.settings.dotsData && this._templates.splice(n.position, 0, this._templates.pop())
            }, this),
            "remove.owl.carousel": n.proxy(function(n) {
                n.namespace && this._core.settings.dotsData && this._templates.splice(n.position, 1)
            }, this),
            "changed.owl.carousel": n.proxy(function(n) {
                n.namespace && "position" == n.property.name && this.draw()
            }, this),
            "initialized.owl.carousel": n.proxy(function(n) {
                n.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"),
                this.initialize(),
                this.update(),
                this.draw(),
                this._initialized = !0,
                this._core.trigger("initialized", null, "navigation"))
            }, this),
            "refreshed.owl.carousel": n.proxy(function(n) {
                n.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"),
                this.update(),
                this.draw(),
                this._core.trigger("refreshed", null, "navigation"))
            }, this)
        };
        this._core.options = n.extend({}, t.Defaults, this._core.options);
        this.$element.on(this._handlers)
    };
    t.Defaults = {
        nav: !1,
        navText: ['<span aria-label="Previous">&#x2039;<\/span>', '<span aria-label="Next">&#x203a;<\/span>'],
        navSpeed: !1,
        navElement: 'button type="button" role="presentation"',
        navContainer: !1,
        navContainerClass: "owl-nav",
        navClass: ["owl-prev", "owl-next"],
        slideBy: 1,
        dotClass: "owl-dot",
        dotsClass: "owl-dots",
        dots: !0,
        dotsEach: !1,
        dotsData: !1,
        dotsSpeed: !1,
        dotsContainer: !1
    };
    t.prototype.initialize = function() {
        var i, t = this._core.settings;
        this._controls.$relative = (t.navContainer ? n(t.navContainer) : n("<div>").addClass(t.navContainerClass).appendTo(this.$element)).addClass("disabled");
        this._controls.$previous = n("<" + t.navElement + ">").addClass(t.navClass[0]).html(t.navText[0]).prependTo(this._controls.$relative).on("click", n.proxy(function() {
            this.prev(t.navSpeed)
        }, this));
        this._controls.$next = n("<" + t.navElement + ">").addClass(t.navClass[1]).html(t.navText[1]).appendTo(this._controls.$relative).on("click", n.proxy(function() {
            this.next(t.navSpeed)
        }, this));
        t.dotsData || (this._templates = [n('<button role="button">').addClass(t.dotClass).append(n("<span>")).prop("outerHTML")]);
        this._controls.$absolute = (t.dotsContainer ? n(t.dotsContainer) : n("<div>").addClass(t.dotsClass).appendTo(this.$element)).addClass("disabled");
        this._controls.$absolute.on("click", "button", n.proxy(function(i) {
            var r = n(i.target).parent().is(this._controls.$absolute) ? n(i.target).index() : n(i.target).parent().index();
            i.preventDefault();
            this.to(r, t.dotsSpeed)
        }, this));
        for (i in this._overrides)
            this._core[i] = n.proxy(this[i], this)
    }
    ;
    t.prototype.destroy = function() {
        var t, n, i, r, u = this._core.settings;
        for (t in this._handlers)
            this.$element.off(t, this._handlers[t]);
        for (n in this._controls)
            "$relative" === n && u.navContainer ? this._controls[n].html("") : this._controls[n].remove();
        for (r in this.overides)
            this._core[r] = this._overrides[r];
        for (i in Object.getOwnPropertyNames(this))
            "function" != typeof this[i] && (this[i] = null)
    }
    ;
    t.prototype.update = function() {
        var t, i, f, r = this._core.clones().length / 2, o = r + this._core.items().length, u = this._core.maximum(!0), n = this._core.settings, e = n.center || n.autoWidth || n.dotsData ? 1 : n.dotsEach || n.items;
        if ("page" !== n.slideBy && (n.slideBy = Math.min(n.slideBy, n.items)),
        n.dots || "page" == n.slideBy)
            for (this._pages = [],
            t = r,
            i = 0,
            f = 0; t < o; t++) {
                if (i >= e || 0 === i) {
                    if (this._pages.push({
                        start: Math.min(u, t - r),
                        end: t - r + e - 1
                    }),
                    Math.min(u, t - r) === u)
                        break;
                    i = 0;
                    ++f
                }
                i += this._core.mergers(this._core.relative(t))
            }
    }
    ;
    t.prototype.draw = function() {
        var i, t = this._core.settings, r = this._core.items().length <= t.items, u = this._core.relative(this._core.current()), f = t.loop || t.rewind;
        this._controls.$relative.toggleClass("disabled", !t.nav || r);
        t.nav && (this._controls.$previous.toggleClass("disabled", !f && u <= this._core.minimum(!0)),
        this._controls.$next.toggleClass("disabled", !f && u >= this._core.maximum(!0)));
        this._controls.$absolute.toggleClass("disabled", !t.dots || r);
        t.dots && (i = this._pages.length - this._controls.$absolute.children().length,
        t.dotsData && 0 !== i ? this._controls.$absolute.html(this._templates.join("")) : i > 0 ? this._controls.$absolute.append(new Array(i + 1).join(this._templates[0])) : i < 0 && this._controls.$absolute.children().slice(i).remove(),
        this._controls.$absolute.find(".active").removeClass("active"),
        this._controls.$absolute.children().eq(n.inArray(this.current(), this._pages)).addClass("active"))
    }
    ;
    t.prototype.onTrigger = function(t) {
        var i = this._core.settings;
        t.page = {
            index: n.inArray(this.current(), this._pages),
            count: this._pages.length,
            size: i && (i.center || i.autoWidth || i.dotsData ? 1 : i.dotsEach || i.items)
        }
    }
    ;
    t.prototype.current = function() {
        var t = this._core.relative(this._core.current());
        return n.grep(this._pages, n.proxy(function(n) {
            return n.start <= t && n.end >= t
        }, this)).pop()
    }
    ;
    t.prototype.getPosition = function(t) {
        var i, r, u = this._core.settings;
        return "page" == u.slideBy ? (i = n.inArray(this.current(), this._pages),
        r = this._pages.length,
        t ? ++i : --i,
        i = this._pages[(i % r + r) % r].start) : (i = this._core.relative(this._core.current()),
        r = this._core.items().length,
        t ? i += u.slideBy : i -= u.slideBy),
        i
    }
    ;
    t.prototype.next = function(t) {
        n.proxy(this._overrides.to, this._core)(this.getPosition(!0), t)
    }
    ;
    t.prototype.prev = function(t) {
        n.proxy(this._overrides.to, this._core)(this.getPosition(!1), t)
    }
    ;
    t.prototype.to = function(t, i, r) {
        var u;
        !r && this._pages.length ? (u = this._pages.length,
        n.proxy(this._overrides.to, this._core)(this._pages[(t % u + u) % u].start, i)) : n.proxy(this._overrides.to, this._core)(t, i)
    }
    ;
    n.fn.owlCarousel.Constructor.Plugins.Navigation = t
}(window.Zepto || window.jQuery, window, document),
function(n, t, i, r) {
    "use strict";
    var u = function(i) {
        this._core = i;
        this._hashes = {};
        this.$element = this._core.$element;
        this._handlers = {
            "initialized.owl.carousel": n.proxy(function(i) {
                i.namespace && "URLHash" === this._core.settings.startPosition && n(t).trigger("hashchange.owl.navigation")
            }, this),
            "prepared.owl.carousel": n.proxy(function(t) {
                if (t.namespace) {
                    var i = n(t.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
                    if (!i)
                        return;
                    this._hashes[i] = t.content
                }
            }, this),
            "changed.owl.carousel": n.proxy(function(i) {
                if (i.namespace && "position" === i.property.name) {
                    var u = this._core.items(this._core.relative(this._core.current()))
                      , r = n.map(this._hashes, function(n, t) {
                        return n === u ? t : null
                    }).join();
                    if (!r || t.location.hash.slice(1) === r)
                        return;
                    t.location.hash = r
                }
            }, this)
        };
        this._core.options = n.extend({}, u.Defaults, this._core.options);
        this.$element.on(this._handlers);
        n(t).on("hashchange.owl.navigation", n.proxy(function() {
            var i = t.location.hash.substring(1)
              , u = this._core.$stage.children()
              , n = this._hashes[i] && u.index(this._hashes[i]);
            n !== r && n !== this._core.current() && this._core.to(this._core.relative(n), !1, !0)
        }, this))
    };
    u.Defaults = {
        URLhashListener: !1
    };
    u.prototype.destroy = function() {
        var i, r;
        n(t).off("hashchange.owl.navigation");
        for (i in this._handlers)
            this._core.$element.off(i, this._handlers[i]);
        for (r in Object.getOwnPropertyNames(this))
            "function" != typeof this[r] && (this[r] = null)
    }
    ;
    n.fn.owlCarousel.Constructor.Plugins.Hash = u
}(window.Zepto || window.jQuery, window, document),
function(n, t, i, r) {
    function u(t, i) {
        var u = !1
          , f = t.charAt(0).toUpperCase() + t.slice(1);
        return n.each((t + " " + h.join(f + " ") + f).split(" "), function(n, t) {
            if (s[t] !== r)
                return u = !i || t,
                !1
        }),
        u
    }
    function e(n) {
        return u(n, !0)
    }
    var s = n("<support>").get(0).style
      , h = "Webkit Moz O ms".split(" ")
      , o = {
        transition: {
            end: {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd",
                transition: "transitionend"
            }
        },
        animation: {
            end: {
                WebkitAnimation: "webkitAnimationEnd",
                MozAnimation: "animationend",
                OAnimation: "oAnimationEnd",
                animation: "animationend"
            }
        }
    }
      , f = {
        csstransforms: function() {
            return !!u("transform")
        },
        csstransforms3d: function() {
            return !!u("perspective")
        },
        csstransitions: function() {
            return !!u("transition")
        },
        cssanimations: function() {
            return !!u("animation")
        }
    };
    f.csstransitions() && (n.support.transition = new String(e("transition")),
    n.support.transition.end = o.transition.end[n.support.transition]);
    f.cssanimations() && (n.support.animation = new String(e("animation")),
    n.support.animation.end = o.animation.end[n.support.animation]);
    f.csstransforms() && (n.support.transform = new String(e("transform")),
    n.support.transform3d = f.csstransforms3d())
}(window.Zepto || window.jQuery, window, document),
function(n) {
    n.fn.marquee = function(t) {
        return this.each(function() {
            var i = n.extend({}, n.fn.marquee.defaults, t), r = n(this), u, h, y, w, c, f = 3, nt = "animation-play-state", a = !1, ft = function(n, t, i) {
                for (var u = ["webkit", "moz", "MS", "o", ""], r = 0; r < u.length; r++)
                    u[r] || (t = t.toLowerCase()),
                    n.addEventListener(u[r] + t, i, !1)
            }, et = function(n) {
                var t = [];
                for (var i in n)
                    n.hasOwnProperty(i) && t.push(i + ":" + n[i]);
                return t.push(),
                "{" + t.join(",") + "}"
            }, b = {
                pause: function() {
                    a && i.allowCss3Support ? u.css(nt, "paused") : n.fn.pause && u.pause();
                    r.data("runningStatus", "paused");
                    r.trigger("paused")
                },
                resume: function() {
                    a && i.allowCss3Support ? u.css(nt, "running") : n.fn.resume && u.resume();
                    r.data("runningStatus", "resumed");
                    r.trigger("resumed")
                },
                toggle: function() {
                    b["resumed" == r.data("runningStatus") ? "pause" : "resume"]()
                },
                destroy: function() {
                    clearTimeout(r.timer);
                    r.find("*").andSelf().unbind();
                    r.html(r.find(".js-marquee:first").html())
                }
            }, k, p, o, l, g, tt, it, d;
            if ("string" == typeof t)
                n.isFunction(b[t]) && (u || (u = r.find(".js-marquee-wrapper")),
                !0 === r.data("css3AnimationIsSupported") && (a = !0),
                b[t]());
            else {
                if (n.each(i, function(n) {
                    if (k = r.attr("data-" + n),
                    "undefined" != typeof k) {
                        switch (k) {
                        case "true":
                            k = !0;
                            break;
                        case "false":
                            k = !1
                        }
                        i[n] = k
                    }
                }),
                i.speed && (i.duration = i.speed * parseInt(r.width(), 10)),
                w = "up" == i.direction || "down" == i.direction,
                i.gap = i.duplicated ? parseInt(i.gap) : 0,
                r.wrapInner('<div class="js-marquee"><\/div>'),
                p = r.find(".js-marquee").css({
                    "margin-right": i.gap,
                    float: "left"
                }),
                i.duplicated && p.clone(!0).appendTo(r),
                r.wrapInner('<div style="width:100000px" class="js-marquee-wrapper"><\/div>'),
                u = r.find(".js-marquee-wrapper"),
                w ? (o = r.height(),
                u.removeAttr("style"),
                r.height(o),
                r.find(".js-marquee").css({
                    float: "none",
                    "margin-bottom": i.gap,
                    "margin-right": 0
                }),
                i.duplicated && r.find(".js-marquee:last").css({
                    "margin-bottom": 0
                }),
                l = r.find(".js-marquee:first").height() + i.gap,
                i.startVisible && !i.duplicated ? (i._completeDuration = (parseInt(l, 10) + parseInt(o, 10)) / parseInt(o, 10) * i.duration,
                i.duration *= parseInt(l, 10) / parseInt(o, 10)) : i.duration *= (parseInt(l, 10) + parseInt(o, 10)) / parseInt(o, 10)) : (c = r.find(".js-marquee:first").width() + i.gap,
                h = r.width(),
                i.startVisible && !i.duplicated ? (i._completeDuration = (parseInt(c, 10) + parseInt(h, 10)) / parseInt(h, 10) * i.duration,
                i.duration *= parseInt(c, 10) / parseInt(h, 10)) : i.duration *= (parseInt(c, 10) + parseInt(h, 10)) / parseInt(h, 10)),
                i.duplicated && (i.duration /= 2),
                i.allowCss3Support) {
                    var p = document.body || document.createElement("div")
                      , s = "marqueeAnimation-" + Math.floor(1e7 * Math.random())
                      , rt = ["Webkit", "Moz", "O", "ms", "Khtml"]
                      , ut = "animation"
                      , e = ""
                      , v = "";
                    if (p.style.animation && (v = "@keyframes " + s + " ",
                    a = !0),
                    !1 === a)
                        for (g = 0; g < rt.length; g++)
                            if (void 0 !== p.style[rt[g] + "AnimationName"]) {
                                p = "-" + rt[g].toLowerCase() + "-";
                                ut = p + ut;
                                nt = p + nt;
                                v = "@" + p + "keyframes " + s + " ";
                                a = !0;
                                break
                            }
                    a && (e = s + " " + i.duration / 1e3 + "s " + i.delayBeforeStart / 1e3 + "s infinite " + i.css3easing,
                    r.data("css3AnimationIsSupported", !0))
                }
                tt = function() {
                    u.css("margin-top", "up" == i.direction ? o + "px" : "-" + l + "px")
                }
                ;
                it = function() {
                    u.css("margin-left", "left" == i.direction ? h + "px" : "-" + c + "px")
                }
                ;
                i.duplicated ? (w ? i.startVisible ? u.css("margin-top", 0) : u.css("margin-top", "up" == i.direction ? o + "px" : "-" + (2 * l - i.gap) + "px") : i.startVisible ? u.css("margin-left", 0) : u.css("margin-left", "left" == i.direction ? h + "px" : "-" + (2 * c - i.gap) + "px"),
                i.startVisible || (f = 1)) : i.startVisible ? f = 2 : w ? tt() : it();
                d = function() {
                    if (i.duplicated && (1 === f ? (i._originalDuration = i.duration,
                    i.duration = w ? "up" == i.direction ? i.duration + o / (l / i.duration) : 2 * i.duration : "left" == i.direction ? i.duration + h / (c / i.duration) : 2 * i.duration,
                    e && (e = s + " " + i.duration / 1e3 + "s " + i.delayBeforeStart / 1e3 + "s " + i.css3easing),
                    f++) : 2 === f && (i.duration = i._originalDuration,
                    e && (s += "0",
                    v = n.trim(v) + "0 ",
                    e = s + " " + i.duration / 1e3 + "s 0s infinite " + i.css3easing),
                    f++)),
                    w ? i.duplicated ? (2 < f && u.css("margin-top", "up" == i.direction ? 0 : "-" + l + "px"),
                    y = {
                        "margin-top": "up" == i.direction ? "-" + l + "px" : 0
                    }) : i.startVisible ? 2 === f ? (e && (e = s + " " + i.duration / 1e3 + "s " + i.delayBeforeStart / 1e3 + "s " + i.css3easing),
                    y = {
                        "margin-top": "up" == i.direction ? "-" + l + "px" : o + "px"
                    },
                    f++) : 3 === f && (i.duration = i._completeDuration,
                    e && (s += "0",
                    v = n.trim(v) + "0 ",
                    e = s + " " + i.duration / 1e3 + "s 0s infinite " + i.css3easing),
                    tt()) : (tt(),
                    y = {
                        "margin-top": "up" == i.direction ? "-" + u.height() + "px" : o + "px"
                    }) : i.duplicated ? (2 < f && u.css("margin-left", "left" == i.direction ? 0 : "-" + c + "px"),
                    y = {
                        "margin-left": "left" == i.direction ? "-" + c + "px" : 0
                    }) : i.startVisible ? 2 === f ? (e && (e = s + " " + i.duration / 1e3 + "s " + i.delayBeforeStart / 1e3 + "s " + i.css3easing),
                    y = {
                        "margin-left": "left" == i.direction ? "-" + c + "px" : h + "px"
                    },
                    f++) : 3 === f && (i.duration = i._completeDuration,
                    e && (s += "0",
                    v = n.trim(v) + "0 ",
                    e = s + " " + i.duration / 1e3 + "s 0s infinite " + i.css3easing),
                    it()) : (it(),
                    y = {
                        "margin-left": "left" == i.direction ? "-" + c + "px" : h + "px"
                    }),
                    r.trigger("beforeStarting"),
                    a) {
                        u.css(ut, e);
                        var t = v + " { 100%  " + et(y) + "}"
                          , p = u.find("style");
                        0 !== p.length ? p.filter(":last").html(t) : u.append("<style>" + t + "<\/style>");
                        ft(u[0], "AnimationIteration", function() {
                            r.trigger("finished")
                        });
                        ft(u[0], "AnimationEnd", function() {
                            d();
                            r.trigger("finished")
                        })
                    } else
                        u.animate(y, i.duration, i.easing, function() {
                            r.trigger("finished");
                            i.pauseOnCycle ? r.timer = setTimeout(d, i.delayBeforeStart) : d()
                        });
                    r.data("runningStatus", "resumed")
                }
                ;
                r.bind("pause", b.pause);
                r.bind("resume", b.resume);
                i.pauseOnHover && r.bind("mouseenter mouseleave", b.toggle);
                a && i.allowCss3Support ? d() : r.timer = setTimeout(d, i.delayBeforeStart)
            }
        })
    }
    ;
    n.fn.marquee.defaults = {
        allowCss3Support: !0,
        css3easing: "linear",
        easing: "linear",
        delayBeforeStart: 1e3,
        direction: "left",
        duplicated: !1,
        duration: 5e3,
        gap: 20,
        pauseOnCycle: !1,
        pauseOnHover: !1,
        startVisible: !1
    }
}(jQuery);
!function(n) {
    "function" == typeof define && define.amd ? define(["jquery"], n) : "object" == typeof module && module.exports ? module.exports = n(require("jquery")) : n(jQuery)
}(function(n) {
    n.extend(n.fn, {
        validate: function(t) {
            if (!this.length)
                return void (t && t.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));
            var i = n.data(this[0], "validator");
            return i ? i : (this.attr("novalidate", "novalidate"),
            i = new n.validator(t,this[0]),
            n.data(this[0], "validator", i),
            i.settings.onsubmit && (this.on("click.validate", ":submit", function(t) {
                i.settings.submitHandler && (i.submitButton = t.target);
                n(this).hasClass("cancel") && (i.cancelSubmit = !0);
                void 0 !== n(this).attr("formnovalidate") && (i.cancelSubmit = !0)
            }),
            this.on("submit.validate", function(t) {
                function r() {
                    var u, r;
                    return !i.settings.submitHandler || (i.submitButton && (u = n("<input type='hidden'/>").attr("name", i.submitButton.name).val(n(i.submitButton).val()).appendTo(i.currentForm)),
                    r = i.settings.submitHandler.call(i, i.currentForm, t),
                    i.submitButton && u.remove(),
                    void 0 !== r && r)
                }
                return i.settings.debug && t.preventDefault(),
                i.cancelSubmit ? (i.cancelSubmit = !1,
                r()) : i.form() ? i.pendingRequest ? (i.formSubmitted = !0,
                !1) : r() : (i.focusInvalid(),
                !1)
            })),
            i)
        },
        valid: function() {
            var t, i, r;
            return n(this[0]).is("form") ? t = this.validate().form() : (r = [],
            t = !0,
            i = n(this[0].form).validate(),
            this.each(function() {
                t = i.element(this) && t;
                t || (r = r.concat(i.errorList))
            }),
            i.errorList = r),
            t
        },
        rules: function(t, i) {
            var e, s, f, u, o, h, r = this[0];
            if (null != r && null != r.form) {
                if (t)
                    switch (e = n.data(r.form, "validator").settings,
                    s = e.rules,
                    f = n.validator.staticRules(r),
                    t) {
                    case "add":
                        n.extend(f, n.validator.normalizeRule(i));
                        delete f.messages;
                        s[r.name] = f;
                        i.messages && (e.messages[r.name] = n.extend(e.messages[r.name], i.messages));
                        break;
                    case "remove":
                        return i ? (h = {},
                        n.each(i.split(/\s/), function(t, i) {
                            h[i] = f[i];
                            delete f[i];
                            "required" === i && n(r).removeAttr("aria-required")
                        }),
                        h) : (delete s[r.name],
                        f)
                    }
                return u = n.validator.normalizeRules(n.extend({}, n.validator.classRules(r), n.validator.attributeRules(r), n.validator.dataRules(r), n.validator.staticRules(r)), r),
                u.required && (o = u.required,
                delete u.required,
                u = n.extend({
                    required: o
                }, u),
                n(r).attr("aria-required", "true")),
                u.remote && (o = u.remote,
                delete u.remote,
                u = n.extend(u, {
                    remote: o
                })),
                u
            }
        }
    });
    n.extend(n.expr.pseudos || n.expr[":"], {
        blank: function(t) {
            return !n.trim("" + n(t).val())
        },
        filled: function(t) {
            var i = n(t).val();
            return null !== i && !!n.trim("" + i)
        },
        unchecked: function(t) {
            return !n(t).prop("checked")
        }
    });
    n.validator = function(t, i) {
        this.settings = n.extend(!0, {}, n.validator.defaults, t);
        this.currentForm = i;
        this.init()
    }
    ;
    n.validator.format = function(t, i) {
        return 1 === arguments.length ? function() {
            var i = n.makeArray(arguments);
            return i.unshift(t),
            n.validator.format.apply(this, i)
        }
        : void 0 === i ? t : (arguments.length > 2 && i.constructor !== Array && (i = n.makeArray(arguments).slice(1)),
        i.constructor !== Array && (i = [i]),
        n.each(i, function(n, i) {
            t = t.replace(new RegExp("\\{" + n + "\\}","g"), function() {
                return i
            })
        }),
        t)
    }
    ;
    n.extend(n.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            pendingClass: "pending",
            validClass: "valid",
            errorElement: "label",
            focusCleanup: !1,
            focusInvalid: !0,
            errorContainer: n([]),
            errorLabelContainer: n([]),
            onsubmit: !0,
            ignore: ":hidden",
            ignoreTitle: !1,
            onfocusin: function(n) {
                this.lastActive = n;
                this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, n, this.settings.errorClass, this.settings.validClass),
                this.hideThese(this.errorsFor(n)))
            },
            onfocusout: function(n) {
                !this.checkable(n) && (n.name in this.submitted || !this.optional(n)) && this.element(n)
            },
            onkeyup: function(t, i) {
                9 === i.which && "" === this.elementValue(t) || n.inArray(i.keyCode, [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225]) !== -1 || (t.name in this.submitted || t.name in this.invalid) && this.element(t)
            },
            onclick: function(n) {
                n.name in this.submitted ? this.element(n) : n.parentNode.name in this.submitted && this.element(n.parentNode)
            },
            highlight: function(t, i, r) {
                "radio" === t.type ? this.findByName(t.name).addClass(i).removeClass(r) : n(t).addClass(i).removeClass(r)
            },
            unhighlight: function(t, i, r) {
                "radio" === t.type ? this.findByName(t.name).removeClass(i).addClass(r) : n(t).removeClass(i).addClass(r)
            }
        },
        setDefaults: function(t) {
            n.extend(n.validator.defaults, t)
        },
        messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date (ISO).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            equalTo: "Please enter the same value again.",
            maxlength: n.validator.format("Please enter no more than {0} characters."),
            minlength: n.validator.format("Please enter at least {0} characters."),
            rangelength: n.validator.format("Please enter a value between {0} and {1} characters long."),
            range: n.validator.format("Please enter a value between {0} and {1}."),
            max: n.validator.format("Please enter a value less than or equal to {0}."),
            min: n.validator.format("Please enter a value greater than or equal to {0}."),
            step: n.validator.format("Please enter a multiple of {0}.")
        },
        autoCreateRanges: !1,
        prototype: {
            init: function() {
                function i(t) {
                    !this.form && this.hasAttribute("contenteditable") && (this.form = n(this).closest("form")[0]);
                    var r = n.data(this.form, "validator")
                      , u = "on" + t.type.replace(/^validate/, "")
                      , i = r.settings;
                    i[u] && !n(this).is(i.ignore) && i[u].call(r, this, t)
                }
                this.labelContainer = n(this.settings.errorLabelContainer);
                this.errorContext = this.labelContainer.length && this.labelContainer || n(this.currentForm);
                this.containers = n(this.settings.errorContainer).add(this.settings.errorLabelContainer);
                this.submitted = {};
                this.valueCache = {};
                this.pendingRequest = 0;
                this.pending = {};
                this.invalid = {};
                this.reset();
                var t, r = this.groups = {};
                n.each(this.settings.groups, function(t, i) {
                    "string" == typeof i && (i = i.split(/\s/));
                    n.each(i, function(n, i) {
                        r[i] = t
                    })
                });
                t = this.settings.rules;
                n.each(t, function(i, r) {
                    t[i] = n.validator.normalizeRule(r)
                });
                n(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']", i).on("click.validate", "select, option, [type='radio'], [type='checkbox']", i);
                this.settings.invalidHandler && n(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler);
                n(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true")
            },
            form: function() {
                return this.checkForm(),
                n.extend(this.submitted, this.errorMap),
                this.invalid = n.extend({}, this.errorMap),
                this.valid() || n(this.currentForm).triggerHandler("invalid-form", [this]),
                this.showErrors(),
                this.valid()
            },
            checkForm: function() {
                this.prepareForm();
                for (var n = 0, t = this.currentElements = this.elements(); t[n]; n++)
                    this.check(t[n]);
                return this.valid()
            },
            element: function(t) {
                var e, o, i = this.clean(t), r = this.validationTargetFor(i), u = this, f = !0;
                return void 0 === r ? delete this.invalid[i.name] : (this.prepareElement(r),
                this.currentElements = n(r),
                o = this.groups[r.name],
                o && n.each(this.groups, function(n, t) {
                    t === o && n !== r.name && (i = u.validationTargetFor(u.clean(u.findByName(n))),
                    i && i.name in u.invalid && (u.currentElements.push(i),
                    f = u.check(i) && f))
                }),
                e = this.check(r) !== !1,
                f = f && e,
                this.invalid[r.name] = e ? !1 : !0,
                this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)),
                this.showErrors(),
                n(t).attr("aria-invalid", !e)),
                f
            },
            showErrors: function(t) {
                if (t) {
                    var i = this;
                    n.extend(this.errorMap, t);
                    this.errorList = n.map(this.errorMap, function(n, t) {
                        return {
                            message: n,
                            element: i.findByName(t)[0]
                        }
                    });
                    this.successList = n.grep(this.successList, function(n) {
                        return !(n.name in t)
                    })
                }
                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            },
            resetForm: function() {
                n.fn.resetForm && n(this.currentForm).resetForm();
                this.invalid = {};
                this.submitted = {};
                this.prepareForm();
                this.hideErrors();
                var t = this.elements().removeData("previousValue").removeAttr("aria-invalid");
                this.resetElements(t)
            },
            resetElements: function(n) {
                var t;
                if (this.settings.unhighlight)
                    for (t = 0; n[t]; t++)
                        this.settings.unhighlight.call(this, n[t], this.settings.errorClass, ""),
                        this.findByName(n[t].name).removeClass(this.settings.validClass);
                else
                    n.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)
            },
            numberOfInvalids: function() {
                return this.objectLength(this.invalid)
            },
            objectLength: function(n) {
                var t, i = 0;
                for (t in n)
                    n[t] && i++;
                return i
            },
            hideErrors: function() {
                this.hideThese(this.toHide)
            },
            hideThese: function(n) {
                n.not(this.containers).text("");
                this.addWrapper(n).hide()
            },
            valid: function() {
                return 0 === this.size()
            },
            size: function() {
                return this.errorList.length
            },
            focusInvalid: function() {
                if (this.settings.focusInvalid)
                    try {
                        n(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                    } catch (t) {}
            },
            findLastActive: function() {
                var t = this.lastActive;
                return t && 1 === n.grep(this.errorList, function(n) {
                    return n.element.name === t.name
                }).length && t
            },
            elements: function() {
                var t = this
                  , i = {};
                return n(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function() {
                    var r = this.name || n(this).attr("name");
                    return !r && t.settings.debug && window.console && console.error("%o has no name assigned", this),
                    this.hasAttribute("contenteditable") && (this.form = n(this).closest("form")[0]),
                    !(r in i || !t.objectLength(n(this).rules())) && (i[r] = !0,
                    !0)
                })
            },
            clean: function(t) {
                return n(t)[0]
            },
            errors: function() {
                var t = this.settings.errorClass.split(" ").join(".");
                return n(this.settings.errorElement + "." + t, this.errorContext)
            },
            resetInternals: function() {
                this.successList = [];
                this.errorList = [];
                this.errorMap = {};
                this.toShow = n([]);
                this.toHide = n([])
            },
            reset: function() {
                this.resetInternals();
                this.currentElements = n([])
            },
            prepareForm: function() {
                this.reset();
                this.toHide = this.errors().add(this.containers)
            },
            prepareElement: function(n) {
                this.reset();
                this.toHide = this.errorsFor(n)
            },
            elementValue: function(t) {
                var i, r, f = n(t), u = t.type;
                return "radio" === u || "checkbox" === u ? this.findByName(t.name).filter(":checked").val() : "number" === u && "undefined" != typeof t.validity ? t.validity.badInput ? "NaN" : f.val() : (i = t.hasAttribute("contenteditable") ? f.text() : f.val(),
                "file" === u ? "C:\\fakepath\\" === i.substr(0, 12) ? i.substr(12) : (r = i.lastIndexOf("/"),
                r >= 0 ? i.substr(r + 1) : (r = i.lastIndexOf("\\"),
                r >= 0 ? i.substr(r + 1) : i)) : "string" == typeof i ? i.replace(/\r/g, "") : i)
            },
            check: function(t) {
                t = this.validationTargetFor(this.clean(t));
                var u, f, r, i = n(t).rules(), h = n.map(i, function(n, t) {
                    return t
                }).length, s = !1, e = this.elementValue(t);
                if ("function" == typeof i.normalizer) {
                    if (e = i.normalizer.call(t, e),
                    "string" != typeof e)
                        throw new TypeError("The normalizer should return a string value.");
                    delete i.normalizer
                }
                for (f in i) {
                    r = {
                        method: f,
                        parameters: i[f]
                    };
                    try {
                        if (u = n.validator.methods[f].call(this, e, t, r.parameters),
                        "dependency-mismatch" === u && 1 === h) {
                            s = !0;
                            continue
                        }
                        if (s = !1,
                        "pending" === u)
                            return void (this.toHide = this.toHide.not(this.errorsFor(t)));
                        if (!u)
                            return this.formatAndAdd(t, r),
                            !1
                    } catch (o) {
                        throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + t.id + ", check the '" + r.method + "' method.", o),
                        o instanceof TypeError && (o.message += ".  Exception occurred when checking element " + t.id + ", check the '" + r.method + "' method."),
                        o;
                    }
                }
                if (!s)
                    return this.objectLength(i) && this.successList.push(t),
                    !0
            },
            customDataMessage: function(t, i) {
                return n(t).data("msg" + i.charAt(0).toUpperCase() + i.substring(1).toLowerCase()) || n(t).data("msg")
            },
            customMessage: function(n, t) {
                var i = this.settings.messages[n];
                return i && (i.constructor === String ? i : i[t])
            },
            findDefined: function() {
                for (var n = 0; n < arguments.length; n++)
                    if (void 0 !== arguments[n])
                        return arguments[n]
            },
            defaultMessage: function(t, i) {
                "string" == typeof i && (i = {
                    method: i
                });
                var r = this.findDefined(this.customMessage(t.name, i.method), this.customDataMessage(t, i.method), !this.settings.ignoreTitle && t.title || void 0, n.validator.messages[i.method], "<strong>Warning: No message defined for " + t.name + "<\/strong>")
                  , u = /\$?\{(\d+)\}/g;
                return "function" == typeof r ? r = r.call(this, i.parameters, t) : u.test(r) && (r = n.validator.format(r.replace(u, "{$1}"), i.parameters)),
                r
            },
            formatAndAdd: function(n, t) {
                var i = this.defaultMessage(n, t);
                this.errorList.push({
                    message: i,
                    element: n,
                    method: t.method
                });
                this.errorMap[n.name] = i;
                this.submitted[n.name] = i
            },
            addWrapper: function(n) {
                return this.settings.wrapper && (n = n.add(n.parent(this.settings.wrapper))),
                n
            },
            defaultShowErrors: function() {
                for (var i, t, n = 0; this.errorList[n]; n++)
                    t = this.errorList[n],
                    this.settings.highlight && this.settings.highlight.call(this, t.element, this.settings.errorClass, this.settings.validClass),
                    this.showLabel(t.element, t.message);
                if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)),
                this.settings.success)
                    for (n = 0; this.successList[n]; n++)
                        this.showLabel(this.successList[n]);
                if (this.settings.unhighlight)
                    for (n = 0,
                    i = this.validElements(); i[n]; n++)
                        this.settings.unhighlight.call(this, i[n], this.settings.errorClass, this.settings.validClass);
                this.toHide = this.toHide.not(this.toShow);
                this.hideErrors();
                this.addWrapper(this.toShow).show()
            },
            validElements: function() {
                return this.currentElements.not(this.invalidElements())
            },
            invalidElements: function() {
                return n(this.errorList).map(function() {
                    return this.element
                })
            },
            showLabel: function(t, i) {
                var u, s, e, o, r = this.errorsFor(t), h = this.idOrName(t), f = n(t).attr("aria-describedby");
                r.length ? (r.removeClass(this.settings.validClass).addClass(this.settings.errorClass),
                r.html(i)) : (r = n("<" + this.settings.errorElement + ">").attr("id", h + "-error").addClass(this.settings.errorClass).html(i || ""),
                u = r,
                this.settings.wrapper && (u = r.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()),
                this.labelContainer.length ? this.labelContainer.append(u) : this.settings.errorPlacement ? this.settings.errorPlacement.call(this, u, n(t)) : u.insertAfter(t),
                r.is("label") ? r.attr("for", h) : 0 === r.parents("label[for='" + this.escapeCssMeta(h) + "']").length && (e = r.attr("id"),
                f ? f.match(new RegExp("\\b" + this.escapeCssMeta(e) + "\\b")) || (f += " " + e) : f = e,
                n(t).attr("aria-describedby", f),
                s = this.groups[t.name],
                s && (o = this,
                n.each(o.groups, function(t, i) {
                    i === s && n("[name='" + o.escapeCssMeta(t) + "']", o.currentForm).attr("aria-describedby", r.attr("id"))
                }))));
                !i && this.settings.success && (r.text(""),
                "string" == typeof this.settings.success ? r.addClass(this.settings.success) : this.settings.success(r, t));
                this.toShow = this.toShow.add(r)
            },
            errorsFor: function(t) {
                var r = this.escapeCssMeta(this.idOrName(t))
                  , u = n(t).attr("aria-describedby")
                  , i = "label[for='" + r + "'], label[for='" + r + "'] *";
                return u && (i = i + ", #" + this.escapeCssMeta(u).replace(/\s+/g, ", #")),
                this.errors().filter(i)
            },
            escapeCssMeta: function(n) {
                return n.replace(/([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g, "\\$1")
            },
            idOrName: function(n) {
                return this.groups[n.name] || (this.checkable(n) ? n.name : n.id || n.name)
            },
            validationTargetFor: function(t) {
                return this.checkable(t) && (t = this.findByName(t.name)),
                n(t).not(this.settings.ignore)[0]
            },
            checkable: function(n) {
                return /radio|checkbox/i.test(n.type)
            },
            findByName: function(t) {
                return n(this.currentForm).find("[name='" + this.escapeCssMeta(t) + "']")
            },
            getLength: function(t, i) {
                switch (i.nodeName.toLowerCase()) {
                case "select":
                    return n("option:selected", i).length;
                case "input":
                    if (this.checkable(i))
                        return this.findByName(i.name).filter(":checked").length
                }
                return t.length
            },
            depend: function(n, t) {
                return !this.dependTypes[typeof n] || this.dependTypes[typeof n](n, t)
            },
            dependTypes: {
                boolean: function(n) {
                    return n
                },
                string: function(t, i) {
                    return !!n(t, i.form).length
                },
                "function": function(n, t) {
                    return n(t)
                }
            },
            optional: function(t) {
                var i = this.elementValue(t);
                return !n.validator.methods.required.call(this, i, t) && "dependency-mismatch"
            },
            startRequest: function(t) {
                this.pending[t.name] || (this.pendingRequest++,
                n(t).addClass(this.settings.pendingClass),
                this.pending[t.name] = !0)
            },
            stopRequest: function(t, i) {
                this.pendingRequest--;
                this.pendingRequest < 0 && (this.pendingRequest = 0);
                delete this.pending[t.name];
                n(t).removeClass(this.settings.pendingClass);
                i && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (n(this.currentForm).submit(),
                this.formSubmitted = !1) : !i && 0 === this.pendingRequest && this.formSubmitted && (n(this.currentForm).triggerHandler("invalid-form", [this]),
                this.formSubmitted = !1)
            },
            previousValue: function(t, i) {
                return i = "string" == typeof i && i || "remote",
                n.data(t, "previousValue") || n.data(t, "previousValue", {
                    old: null,
                    valid: !0,
                    message: this.defaultMessage(t, {
                        method: i
                    })
                })
            },
            destroy: function() {
                this.resetForm();
                n(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur")
            }
        },
        classRuleSettings: {
            required: {
                required: !0
            },
            email: {
                email: !0
            },
            url: {
                url: !0
            },
            date: {
                date: !0
            },
            dateISO: {
                dateISO: !0
            },
            number: {
                number: !0
            },
            digits: {
                digits: !0
            },
            creditcard: {
                creditcard: !0
            }
        },
        addClassRules: function(t, i) {
            t.constructor === String ? this.classRuleSettings[t] = i : n.extend(this.classRuleSettings, t)
        },
        classRules: function(t) {
            var i = {}
              , r = n(t).attr("class");
            return r && n.each(r.split(" "), function() {
                this in n.validator.classRuleSettings && n.extend(i, n.validator.classRuleSettings[this])
            }),
            i
        },
        normalizeAttributeRule: function(n, t, i, r) {
            /min|max|step/.test(i) && (null === t || /number|range|text/.test(t)) && (r = Number(r),
            isNaN(r) && (r = void 0));
            r || 0 === r ? n[i] = r : t === i && "range" !== t && (n[i] = !0)
        },
        attributeRules: function(t) {
            var r, i, u = {}, f = n(t), e = t.getAttribute("type");
            for (r in n.validator.methods)
                "required" === r ? (i = t.getAttribute(r),
                "" === i && (i = !0),
                i = !!i) : i = f.attr(r),
                this.normalizeAttributeRule(u, e, r, i);
            return u.maxlength && /-1|2147483647|524288/.test(u.maxlength) && delete u.maxlength,
            u
        },
        dataRules: function(t) {
            var i, r, u = {}, f = n(t), e = t.getAttribute("type");
            for (i in n.validator.methods)
                r = f.data("rule" + i.charAt(0).toUpperCase() + i.substring(1).toLowerCase()),
                this.normalizeAttributeRule(u, e, i, r);
            return u
        },
        staticRules: function(t) {
            var i = {}
              , r = n.data(t.form, "validator");
            return r.settings.rules && (i = n.validator.normalizeRule(r.settings.rules[t.name]) || {}),
            i
        },
        normalizeRules: function(t, i) {
            return n.each(t, function(r, u) {
                if (u === !1)
                    return void delete t[r];
                if (u.param || u.depends) {
                    var f = !0;
                    switch (typeof u.depends) {
                    case "string":
                        f = !!n(u.depends, i.form).length;
                        break;
                    case "function":
                        f = u.depends.call(i, i)
                    }
                    f ? t[r] = void 0 === u.param || u.param : (n.data(i.form, "validator").resetElements(n(i)),
                    delete t[r])
                }
            }),
            n.each(t, function(r, u) {
                t[r] = n.isFunction(u) && "normalizer" !== r ? u(i) : u
            }),
            n.each(["minlength", "maxlength"], function() {
                t[this] && (t[this] = Number(t[this]))
            }),
            n.each(["rangelength", "range"], function() {
                var i;
                t[this] && (n.isArray(t[this]) ? t[this] = [Number(t[this][0]), Number(t[this][1])] : "string" == typeof t[this] && (i = t[this].replace(/[\[\]]/g, "").split(/[\s,]+/),
                t[this] = [Number(i[0]), Number(i[1])]))
            }),
            n.validator.autoCreateRanges && (null != t.min && null != t.max && (t.range = [t.min, t.max],
            delete t.min,
            delete t.max),
            null != t.minlength && null != t.maxlength && (t.rangelength = [t.minlength, t.maxlength],
            delete t.minlength,
            delete t.maxlength)),
            t
        },
        normalizeRule: function(t) {
            if ("string" == typeof t) {
                var i = {};
                n.each(t.split(/\s/), function() {
                    i[this] = !0
                });
                t = i
            }
            return t
        },
        addMethod: function(t, i, r) {
            n.validator.methods[t] = i;
            n.validator.messages[t] = void 0 !== r ? r : n.validator.messages[t];
            i.length < 3 && n.validator.addClassRules(t, n.validator.normalizeRule(t))
        },
        methods: {
            required: function(t, i, r) {
                if (!this.depend(r, i))
                    return "dependency-mismatch";
                if ("select" === i.nodeName.toLowerCase()) {
                    var u = n(i).val();
                    return u && u.length > 0
                }
                return this.checkable(i) ? this.getLength(t, i) > 0 : t.length > 0
            },
            email: function(n, t) {
                return this.optional(t) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(n)
            },
            url: function(n, t) {
                return this.optional(t) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(n)
            },
            date: function(n, t) {
                return this.optional(t) || !/Invalid|NaN/.test(new Date(n).toString())
            },
            dateISO: function(n, t) {
                return this.optional(t) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(n)
            },
            number: function(n, t) {
                return this.optional(t) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(n)
            },
            digits: function(n, t) {
                return this.optional(t) || /^\d+$/.test(n)
            },
            minlength: function(t, i, r) {
                var u = n.isArray(t) ? t.length : this.getLength(t, i);
                return this.optional(i) || u >= r
            },
            maxlength: function(t, i, r) {
                var u = n.isArray(t) ? t.length : this.getLength(t, i);
                return this.optional(i) || u <= r
            },
            rangelength: function(t, i, r) {
                var u = n.isArray(t) ? t.length : this.getLength(t, i);
                return this.optional(i) || u >= r[0] && u <= r[1]
            },
            min: function(n, t, i) {
                return this.optional(t) || n >= i
            },
            max: function(n, t, i) {
                return this.optional(t) || n <= i
            },
            range: function(n, t, i) {
                return this.optional(t) || n >= i[0] && n <= i[1]
            },
            step: function(t, i, r) {
                var u, f = n(i).attr("type"), h = "Step attribute on input type " + f + " is not supported.", c = new RegExp("\\b" + f + "\\b"), l = f && !c.test("text,number,range"), e = function(n) {
                    var t = ("" + n).match(/(?:\.(\d+))?$/);
                    return t && t[1] ? t[1].length : 0
                }, o = function(n) {
                    return Math.round(n * Math.pow(10, u))
                }, s = !0;
                if (l)
                    throw new Error(h);
                return u = e(r),
                (e(t) > u || o(t) % o(r) != 0) && (s = !1),
                this.optional(i) || s
            },
            equalTo: function(t, i, r) {
                var u = n(r);
                return this.settings.onfocusout && u.not(".validate-equalTo-blur").length && u.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function() {
                    n(i).valid()
                }),
                t === u.val()
            },
            remote: function(t, i, r, u) {
                if (this.optional(i))
                    return "dependency-mismatch";
                u = "string" == typeof u && u || "remote";
                var f, o, s, e = this.previousValue(i, u);
                return this.settings.messages[i.name] || (this.settings.messages[i.name] = {}),
                e.originalMessage = e.originalMessage || this.settings.messages[i.name][u],
                this.settings.messages[i.name][u] = e.message,
                r = "string" == typeof r && {
                    url: r
                } || r,
                s = n.param(n.extend({
                    data: t
                }, r.data)),
                e.old === s ? e.valid : (e.old = s,
                f = this,
                this.startRequest(i),
                o = {},
                o[i.name] = t,
                n.ajax(n.extend(!0, {
                    mode: "abort",
                    port: "validate" + i.name,
                    dataType: "json",
                    data: o,
                    context: f.currentForm,
                    success: function(n) {
                        var r, s, h, o = n === !0 || "true" === n;
                        f.settings.messages[i.name][u] = e.originalMessage;
                        o ? (h = f.formSubmitted,
                        f.resetInternals(),
                        f.toHide = f.errorsFor(i),
                        f.formSubmitted = h,
                        f.successList.push(i),
                        f.invalid[i.name] = !1,
                        f.showErrors()) : (r = {},
                        s = n || f.defaultMessage(i, {
                            method: u,
                            parameters: t
                        }),
                        r[i.name] = e.message = s,
                        f.invalid[i.name] = !0,
                        f.showErrors(r));
                        e.valid = o;
                        f.stopRequest(i, o)
                    }
                }, r)),
                "pending")
            }
        }
    });
    var i, t = {};
    return n.ajaxPrefilter ? n.ajaxPrefilter(function(n, i, r) {
        var u = n.port;
        "abort" === n.mode && (t[u] && t[u].abort(),
        t[u] = r)
    }) : (i = n.ajax,
    n.ajax = function(r) {
        var f = ("mode"in r ? r : n.ajaxSettings).mode
          , u = ("port"in r ? r : n.ajaxSettings).port;
        return "abort" === f ? (t[u] && t[u].abort(),
        t[u] = i.apply(this, arguments),
        t[u]) : i.apply(this, arguments)
    }
    ),
    n
});
!function(n) {
    "use strict";
    n.fn.floatinglabel = function(t) {
        function r(t) {
            var r = n("<label><\/label>")
              , u = n(t).attr("id")
              , f = n(t).attr("placeholder");
            if ("submit" == n(t).attr("type"))
                return !1;
            r.attr("for", u);
            r.html(f);
            r.addClass(i.labelClass);
            t.before(r);
            t.on("focusin.floatinglabel", function() {
                t.trigger("floatinginstart");
                r.stop().animate(i.animationIn, i.delayIn, i.easingIn);
                t.trigger("floatinginend")
            });
            t.on("focusout.floatinglabel", function() {
                t.trigger("floatingoutstart");
                n(this).val().length > 0 ? r.addClass(i.pinClass) : r.animate(i.animationOut, i.delayOut, i.easingOut);
                t.trigger("floatingoutend")
            })
        }
        var i = n.extend({
            ignoreId: [],
            animationIn: {
                top: "-5px",
                opacity: "1"
            },
            animationOut: {
                top: "0",
                opacity: "0"
            },
            delayIn: 300,
            delayOut: 300,
            easingIn: !1,
            easingOut: !1,
            labelClass: "floating-label",
            pinClass: "pin"
        }, t)
          , u = n(this).find(":input");
        return n(u).each(function() {
            -1 == n.inArray(n(this).attr("id"), i.ignoreId) && r(n(this))
        }),
        this
    }
}(jQuery),
function() {
    window.App = {}
}(),
function() {
    var n = {
        Event: {
            walletSuccess: "App.Banking.wallet.success",
            walletReload: "App.Banking.wallet.reload",
            walletFailed: "App.Banking.wallet.fail",
            walletLoading: "App.Banking.wallet.loading"
        },
        $walletBalance: null,
        _init: function() {
            App.Member.isLoggedIn() && App.Banking.loadBalance()
        }
    };
    App.Banking = n
}(),
function() {
    var l = function(n) {
        if ($(window).trigger(App.Banking.Event.walletLoading),
        !App.Member.isLoggedIn())
            return FLX.Error.sessionTimeout();
        var t = function(n, i) {
            var u, f, r;
            return n && (u = new Date,
            App.Banking.walletReloadMaxTime = u.setSeconds(u.getSeconds() + 15)),
            f = i ? "&reload=true" : "",
            r = "/banking/wallet.svc?action=getBalances",
            r = FLX.Helper.toLobbyServiceUrl(r),
            $.get({
                url: r + f,
                cache: !1
            }).then(FLX.Ajax.validateServiceResponse).done(function(i) {
                App.Banking.$walletBalance = i.data;
                $.grep(i.data.wallets, function(n) {
                    return n.status < 0
                }).length && (new Date).getTime() < App.Banking.walletReloadMaxTime && setTimeout(t, 1e3);
                $(window).trigger(n ? App.Banking.Event.walletSuccess : App.Banking.Event.walletReload, i.data)
            }).fail(function() {
                App.Banking.$walletBalance = null;
                $(window).trigger(App.Banking.Event.walletFailed)
            })
        };
        return t(!0, n)
    }, n, t, i, r, u, f, e, o, s, h, c;
    App.Banking.loadBalance = l;
    n = function(n) {
        if (!App.Member.isLoggedIn())
            return FLX.Error.sessionTimeout();
        var t = "/banking/wallet.svc?action=getTransferSourceWallets";
        return t = FLX.Helper.toLobbyServiceUrl(t),
        $.get(t, {
            targetWallet: n
        }).then(FLX.Ajax.validateServiceResponse)
    }
    ;
    App.Banking.getTransferSourceWallets = n;
    t = function() {
        return App.Member.isLoggedIn() ? $.post("/banking/memberbankaccount.svc?action=getDepositBankAccount").then(FLX.Ajax.validateServiceResponse) : FLX.Error.sessionTimeout()
    }
    ;
    App.Banking.getMemberDepositBankAccount = t;
    i = function(n) {
        return App.Member.isLoggedIn() ? $.post("/banking/memberbankaccount.svc?action=getWithdrawalBankAccount", n).then(FLX.Ajax.validateServiceResponse) : FLX.Error.sessionTimeout()
    }
    ;
    App.Banking.getMemberWithdrawalBankAccount = i;
    r = function(n) {
        return App.Member.isLoggedIn() ? $.post("/banking/memberbankaccount.svc?action=addDepositBankAccount", n).then(FLX.Ajax.validateServiceResponse) : FLX.Error.sessionTimeout()
    }
    ;
    App.Banking.addMemberDepositBankAccount = r;
    u = function(n) {
        return App.Member.isLoggedIn() ? $.post("/banking/memberbankaccount.svc?action=addWithdrawalBankAccount", n).then(FLX.Ajax.validateServiceResponse) : FLX.Error.sessionTimeout()
    }
    ;
    App.Banking.addMemberWithdrawalBankAccount = u;
    f = function() {
        if (!App.Member.isLoggedIn())
            return FLX.Error.sessionTimeout();
        var n = "/banking/wallet.svc?action=getWalletNotAllowDecimal";
        return n = FLX.Helper.toLobbyServiceUrl(n),
        $.post(n).then(FLX.Ajax.validateServiceResponse)
    }
    ;
    App.Banking.getWalletNotAllowDecimal = f;
    e = function() {
        if (!App.Member.isLoggedIn())
            return FLX.Error.sessionTimeout();
        var n = "/banking/wallet.svc?action=getWalletMinTransactionAmount";
        return n = FLX.Helper.toLobbyServiceUrl(n),
        $.post(n).then(FLX.Ajax.validateServiceResponse)
    }
    ;
    App.Banking.getWalletMinTransactionAmount = e;
    o = function(n) {
        return App.Member.isLoggedIn() ? $.get("/Banking/Settings.svc?action=getDepositMemberAvailablePaymentThresholdQuickSelection", n, null, "json").then(FLX.Ajax.validateServiceResponse) : FLX.Error.sessionTimeout()
    }
    ;
    App.Banking.getDepositMemberAvailablePaymentThresholdQS = o;
    s = function(n) {
        return App.Member.isLoggedIn() ? $.get("/Banking/Settings.svc?action=getWithdrawalMemberAvailablePaymentThresholdQuickSelection", n, null, "json").then(FLX.Ajax.validateServiceResponse) : FLX.Error.sessionTimeout()
    }
    ;
    App.Banking.getWithdrawalMemberAvailablePaymentThresholdQS = s;
    h = function(n) {
        return App.Member.isLoggedIn() ? $.post("/Banking/Settings.svc?action=editMemberDepositPaymentThresholdQuickSelection", n, null, "json").then(FLX.Ajax.validateServiceResponse) : FLX.Error.sessionTimeout()
    }
    ;
    App.Banking.editMemberDepositPaymentThresholdQS = h;
    c = function(n) {
        return App.Member.isLoggedIn() ? $.post("/Banking/Settings.svc?action=editMemberWithdrawalPaymentThresholdQuickSelection", n, null, "json").then(FLX.Ajax.validateServiceResponse) : FLX.Error.sessionTimeout()
    }
    ;
    App.Banking.editMemberWithdrawalPaymentThresholdQS = c
}();
$(document).ready(App.Banking._init),
function() {
    App.Common = {}
}();
$(document).ready(function() {
    $("#widget-gototop").click(function() {
        $("body,html").animate({
            scrollTop: 0
        }, 500)
    });
    $(".nav-mypromotion").on("mouseover", function() {
        $("#mypromotion-subNavigation").addClass("is-open")
    })
}),
function(n) {
    var i = {
        react: function(n, t, i) {
            if (n && !App.Member.isLoggedIn()) {
                FLX.Error.accessDenied();
                return
            }
            switch (t) {
            case 2:
                PopUpLiveChat();
                break;
            case 3:
                FLX.Page.loading();
                window.location = i[0];
                break;
            case 4:
                FLX.Page.newTab(i[0]);
                break;
            case 5:
            case 6:
                App.Member.isLoggedIn() ? FLX.Page.popupWindow(i[0], "", 1200, screen.availHeight - 70) : FLX.Error.accessDenied();
                break;
            case 7:
                App.Promotion.tnc(1, i[0]);
                break;
            case 8:
                App.Promotion.tnc(2, i[0]);
                break;
            case 9:
                App.Promotion.tnc(3, i[0]);
                break;
            case 1:
            default:
                return
            }
        }
    }, t;
    App.Content = i;
    t = {
        scope: ".article-container",
        tabMenu: "ul#article-tabs",
        tabMenuList: "#article-tabs li.tabs-title",
        activeTab: "li.tabs-title.is-active a.accordion-title",
        tabsContent: ".article-container .tabs-content",
        seeMoreButton: "a.custom-link.custom-more",
        service: {
            getContent: function(n, t) {
                return $.get("/content/get.svc?action=articleContent&contentId=" + n + "&contentCulture=" + t).then(FLX.Ajax.validateServiceResponse)
            }
        },
        bindArticleContent: function(i) {
            var r, u;
            (t.pushUrlPath(),
            i.length) && (r = i.data("contentid"),
            r) && (u = i.data("contentculture"),
            u) && (t.service.getContent(r, u).done(function(r) {
                var u = $(t.activeTab).data("urlpath");
                u != "" ? $("article", i).html(r.data).prepend("<h1 class='articleContent-title'>" + $(t.activeTab).children("span").html() + "<\/h1>") : $("article", i).html(r.data);
                $("article", i).find(".ShowMore") && ($("article", i).find(".ShowMore").first().before("<a class='custom-link custom-more'>" + n.Button_SeeMore + "<\/a>"),
                $(App.Article.seeMoreButton).click(function() {
                    $(this).hide();
                    $("article", i).find(".ShowMore").addClass(FLX.Plugins.Activation.activeClass)
                }))
            }).fail(function() {
                $("article", i).html(n.Error_InternalServer)
            }),
            i.removeData("contentid"),
            i.removeAttr("data-contentid"))
        },
        pushUrlPath: function() {
            var n = window.location.pathname.split("/")
              , i = $(t.activeTab).data("urlpath");
            i != "" && (n[n.length - 1] == "blog" ? n[n.length] = i : n[n.length - 1] = i,
            FLX.Page.Url.push(n.join("/")),
            document.title = $(t.activeTab).data("metatagtitle"),
            $("meta[name=description]").attr("content", $(t.activeTab).data("metatagdescription")));
            $("#modal-regionCulture article > .culture-container > .culture > a").each(function() {
                var t = window.location.pathname.split("/")
                  , n = $(this).attr("href").split("/");
                n[n.length - 1] == "blog" ? n[n.length] = t[t.length - 1] : n[n.length - 1] = t[t.length - 1];
                $(this).attr("href", n.join("/"))
            })
        },
        articleTabControl: function() {
            if (FLX.Browser.isMobileAccess()) {
                $("ul.article-option li:eq(0)").click(function() {
                    $(this).hasClass("is-active") ? $(this).deactivate() : $(this).activate()
                });
                $(document).on("click", function() {
                    $("ul.article-option li:eq(0)").hasClass("is-active") && $("#article-tabs").is(":visible") == !1 && $("ul.article-option li:eq(0)").deactivate()
                })
            } else
                $("ul.article-option li:eq(0)").activate()
        },
        init: function() {
            var u = window.location.pathname.split("/"), f = u[u.length - 1], i, r;
            $(t.tabMenuList).find("a").each(function() {
                if ($(this).attr("data-urlpath") == f && $(this).attr("data-urlpath") != "") {
                    $(t.tabMenuList).removeClass(FLX.Plugins.Activation.activeClass);
                    $(this).parent("li").addClass(FLX.Plugins.Activation.activeClass);
                    return
                }
            });
            $(t.tabMenuList).hasClass(FLX.Plugins.Activation.activeClass) || $(t.tabMenuList).length > 0 && $(t.tabMenuList).first().addClass(FLX.Plugins.Activation.activeClass);
            $("article", $(".tabs-panel", t.tabsContent)).find(".ShowMore") && $("article", $(".tabs-panel", t.tabsContent)).find(".ShowMore").first().before("<a class='custom-link custom-more'>" + n.Button_SeeMore + "<\/a>");
            $(App.Article.seeMoreButton).click(function() {
                $(this).hide();
                $("article", $(".tabs-panel.is-active", t.tabsContent)).find(".ShowMore").addClass(FLX.Plugins.Activation.activeClass)
            });
            i = $("#article-tabs li.tabs-title.is-active").find("a").attr("href");
            i != undefined && ($(".tabs-panel", App.Article.tabsContent).attr("aria-hidden", "true"),
            $(".tabs-panel", App.Article.tabsContent).each(function() {
                if ($(this).attr("id") == i.replace("#", "")) {
                    $(this).addClass(FLX.Plugins.Activation.activeClass);
                    $(this).attr("aria-hidden", "false");
                    return
                }
            }),
            r = $("#article-tabs li.tabs-title.is-active").find("span"),
            r.length > 0 && $("ul.article-option a.article-tabs-title").text(r[0].outerText),
            t.bindArticleContent($(".tabs-panel.is-active", t.tabsContent)),
            t.articleTabControl())
        }
    };
    App.Article = t;
    $(".tabs-panel", App.Article.tabsContent).find("a[href='']").remove();
    $(App.Article.tabMenu).on("change.zf.tabs", function(n, t, i) {
        var r = $(t).find("span");
        r.length > 0 && $("ul.article-option:eq(" + [0] + ") a.article-tabs-title").text(r[0].outerText);
        FLX.Browser.isMobileAccess() && $("ul.article-option li:eq(0)").deactivate();
        App.Article.bindArticleContent(i)
    });
    $(document).ready(function() {
        App.Article.init()
    })
}(window.resourcescommon),
function() {
    var n = ".cauth"
      , t = {
        isLoggedIn: function() {
            return !!FLX.Cookie.get(n)
        }
    };
    App.Member = t
}(),
function() {
    var e = function(n) {
        return FLX.Page.loading(),
        $.post("/member/authentication.svc?action=login", n).then(FLX.Ajax.validateServiceResponse).done(function(n) {
            FLX.Gtm.IsAvailable() && n.data && n.data.token && FLX.Gtm.setPageLoadEvent("AffiliateMemberLogin", {
                referenceId: n.data.token
            });
            FLX.Page.reload(!0)
        }).fail(FLX.Page.loadingDismiss)
    }, n, t, i, r, u, f;
    App.Member.login = e;
    n = function() {
        return FLX.Page.loading(),
        $.post("/member/authentication.svc?action=logout").then(FLX.Ajax.validateServiceResponse).always(function() {
            window.location = "/"
        })
    }
    ;
    App.Member.logout = n;
    t = function(n) {
        return FLX.Page.loading(),
        $.post("/member/register.svc?action=registration", n).then(FLX.Ajax.validateServiceResponse).always(FLX.Page.loadingDismiss)
    }
    ;
    App.Member.register = t;
    i = function(n) {
        return FLX.Page.loading(),
        $.get("/member/register.svc?action=getReferralCode", n).then(FLX.Ajax.validateServiceResponse).always(FLX.Page.loadingDismiss)
    }
    ;
    App.Member.getReferralCode = i;
    r = function(n) {
        return FLX.Page.loading(),
        $.post("/member/password.svc?action=forgotPassword", n).then(FLX.Ajax.validateServiceResponse).always(FLX.Page.loadingDismiss)
    }
    ;
    App.Member.forogtPassword = r;
    u = function(n) {
        return FLX.Page.loading(),
        $.post("/member/password.svc?action=resetPassword", n).then(FLX.Ajax.validateServiceResponse).always(FLX.Page.loadingDismiss)
    }
    ;
    App.Member.resetPassword = u;
    f = function(n) {
        if (!App.Member.isLoggedIn())
            return FLX.Error.sessionTimeout();
        FLX.Page.loading();
        var t = new FormData;
        return $.each(n, function(n, i) {
            t.append(n, i)
        }),
        $.ajax({
            type: "POST",
            url: "/member/account.svc?action=submitIdentityVerification",
            contentType: !1,
            processData: !1,
            data: t
        }).then(FLX.Ajax.validateServiceResponse).always(FLX.Page.loadingDismiss)
    }
    ;
    App.Member.submitIdentityVerification = f
}(),
function() {
    App.Product = {}
}(),
function() {
    var n = "/lobby", e = function(t, i, r) {
        if (!App.Member.isLoggedIn())
            return FLX.Error.accessDenied();
        var u = r === !0 ? "demo/" : ""
          , f = n + "/rng/" + u + t + "/" + i
          , e = "lobby-" + t + i + u
          , o = screen.availHeight - 70
          , s = t.toLowerCase() === "sagg";
        return FLX.Page.popupWindow(f, e, 1200, o, s)
    }, t, i, r, u, f;
    App.Product.launchSlot = e;
    t = function(t, i, r) {
        if (!App.Member.isLoggedIn())
            return FLX.Error.accessDenied();
        var u = r === !0 ? "demo/" : ""
          , f = n + "/livedealer/" + u + t + "/" + i
          , e = "lobby-" + t + i + u
          , o = screen.availHeight - 70
          , s = t.toLowerCase() === "sagg";
        return FLX.Page.popupWindow(f, e, 1200, o, s)
    }
    ;
    App.Product.launchCasino = t;
    i = function(t, i, r, u, f) {
        var h = n + "/sports/" + t + "/" + i
          , c = n + "/sports/web/" + t + "/" + i
          , l = n + "/sports/" + t + "/" + i
          , a = n + "/sports/web/" + t + "/" + i
          , e = "lobby-" + t + i
          , o = screen.availHeight - 70
          , s = 1200;
        return u && !App.Member.isLoggedIn() ? FLX.Error.accessDenied() : FLX.Browser.isMobileAccess() ? App.Member.isLoggedIn() ? f ? r ? FLX.Page.popupWindow(a, e, s, o) : FLX.Page.popupWindow(c, e, s, o) : FLX.Page.newTab(h) : FLX.Error.accessDenied() : r ? FLX.Page.popupWindow(l, e, s, o) : FLX.Page.popupWindow(h, e, s, o)
    }
    ;
    App.Product.launchSports = i;
    r = function(t, i) {
        if (!App.Member.isLoggedIn())
            return FLX.Error.accessDenied();
        var r = n + "/keno/" + t + "/" + i
          , u = "keno-" + t + i
          , f = screen.availHeight - 70;
        return FLX.Page.popupWindow(r, u, 1200, f)
    }
    ;
    App.Product.launchKeno = r;
    u = function(t, i) {
        if (!App.Member.isLoggedIn())
            return FLX.Error.accessDenied();
        var r = n + "/p2p/" + t + "/" + i
          , u = "p2p-" + t + i
          , f = screen.availHeight - 70;
        return FLX.Page.popupWindow(r, u, 1200, f)
    }
    ;
    App.Product.launchP2P = u;
    f = function(t, i) {
        if (!App.Member.isLoggedIn())
            return FLX.Error.accessDenied();
        var r = n + "/lottery/" + t + "/" + i
          , u = "lottery-" + t + i
          , f = screen.availHeight - 70;
        return FLX.Page.popupWindow(r, u, 1200, f)
    }
    ;
    App.Product.launchLottery = f
}(),
function() {
    App.Promotion = {}
}(),
function() {
    var i = function(n) {
        var t = "/marketing/content.svc?action=promotionTnc";
        return t = FLX.Helper.toLobbyServiceUrl(t),
        $.post(t, n).then(FLX.Ajax.validateServiceResponse)
    }, n, t;
    App.Promotion.getTnc = i;
    n = function(n) {
        return App.Member.isLoggedIn() ? $.post("/marketing/bonus.svc?action=getBonusHistory", n, null, "json").then(FLX.Ajax.validateServiceResponse) : FLX.Error.sessionTimeout()
    }
    ;
    App.Promotion.GetBonusHistory = n;
    t = function(n) {
        return App.Member.isLoggedIn() ? $.post("/marketing/rebate.svc?action=getRebateHistory", n, null, "json").then(FLX.Ajax.validateServiceResponse) : FLX.Error.sessionTimeout()
    }
    ;
    App.Promotion.GetRebateHistory = t
}(),
function() {
    var n;
    App.RAF = {};
    n = {
        scope: "ul#raf-nav",
        switchMenu: function(t) {
            $(n.scope).removeClass(FLX.Plugins.Activation.activeClass);
            $(t, n.scope).addClass(FLX.Plugins.Activation.activeClass)
        }
    };
    App.RAF.Tab = n
}(),
function() {
    var r = function() {
        return App.Member.isLoggedIn() ? $.post("/Member/Referee.svc?action=getReferAFriendUrl").then(FLX.Ajax.validateServiceResponse) : FLX.Error.sessionTimeout()
    }, n, t, i;
    App.RAF.getReferAFriendUrl = r;
    n = function(n) {
        return App.Member.isLoggedIn() ? $.post("/Marketing/Raf.svc?action=getESHistory", n, null, "json").then(FLX.Ajax.validateServiceResponse) : FLX.Error.sessionTimeout()
    }
    ;
    App.RAF.getESHistory = n;
    t = function(n) {
        return App.Member.isLoggedIn() ? $.post("/Marketing/Raf.svc?action=getESHistoryDetail", n, null, "json").then(FLX.Ajax.validateServiceResponse) : FLX.Error.sessionTimeout()
    }
    ;
    App.RAF.getESHistoryDetail = t;
    i = function() {
        return App.Member.isLoggedIn() ? $.post("/Marketing/Raf.svc?action=getRafESDisplayInformation").then(FLX.Ajax.validateServiceResponse) : FLX.Error.sessionTimeout()
    }
    ;
    App.RAF.getESDisplayInformation = i
}(),
function() {
    var t = {
        ignoreClass: "validation-ignore",
        options: {
            ignore: ".validation-ignore",
            onkeyup: !1,
            onfocusout: function(n) {
                this.element(n)
            },
            showErrors: function() {
                this.defaultShowErrors()
            },
            errorPlacement: function(n, t) {
                n.insertAfter($(t))
            }
        }
    }
      , n = {
        Defaults: t,
        Methods: {},
        _init: function(t, i) {
            var r = $(t).closest("form"), u, f;
            if (r.length || (r = $(t).children().wrapAll("<form>").closest("form")),
            u = r.data("validator"),
            u == null) {
                for (f in n.Methods)
                    n.Methods.hasOwnProperty(f) && $.validator.addMethod(f, n.Methods[f]);
                $.validator.setDefaults(n.Defaults.options);
                u = $(r).validate(i)
            }
            return u
        },
        form: function(t, i, r) {
            function o(n) {
                var t = $.Deferred()
                  , i = !1;
                return n ? (u.validator.element(n) ? t.resolve() : t.reject(),
                t.promise()) : ($.each(u.fields, function() {
                    var n = u.validator.element(this.selector);
                    n || i || (i = this.selector)
                }),
                i ? ($(i).focus(),
                t.reject(i)) : t.resolve(),
                t.promise())
            }
            function s() {
                u.validator.resetForm();
                $.each(u.fields, function() {
                    this.formControl("reset")
                })
            }
            var u = {
                fields: {},
                validator: n._init(t, r)
            }, f, e;
            for (f in i)
                i.hasOwnProperty(f) && (e = $(i[f], t),
                e.length && (u.fields[f] = e));
            return u.validate = o,
            u.reset = s,
            u
        }
    };
    App.Validation = n
}(),
function(n) {
    var t = App.Validation.Methods, i, r, u, f, e, o, s, h;
    if (typeof n == "undefined") {
        console.warn("app.validation.js: $regex is undefined.");
        return
    }
    i = function(n, t, i) {
        return $(i).val() !== n
    }
    ;
    t.notEqualTo = i;
    r = function(n) {
        return n.indexOf(" ") === -1
    }
    ;
    t.noWhiteSpace = r;
    u = function(n, t, i) {
        return new RegExp(i).test(n)
    }
    ;
    t.regex = u;
    f = function(t) {
        var i = new RegExp(n.EMAIL)
          , r = new RegExp(n.EMAIL_LENGTH);
        return i.test(t) && r.test(t)
    }
    ;
    t.regexEmail = f;
    e = function(t) {
        var i = new RegExp(n.FULL_NAME)
          , r = new RegExp(n.FULL_NAME_LENGTH);
        return i.test(t) && r.test(t)
    }
    ;
    t.regexFullName = e;
    o = function(t) {
        var i = new RegExp(n.DUPLICATE_CONSECUTIVE_PASSWORD);
        return !i.test(t)
    }
    ;
    t.regexDuplicateConsecutivePassword = o;
    s = function(t) {
        var u = new RegExp(n.CONSECUTIVE_SEQUENCE_NUMBERS), f = new RegExp(n.CONSECUTIVE_REVERSE_NUMBERS), r = t.match(/[0-9]+/g), i;
        if (r.length > 0)
            for (i = 0; i < r.length; i++)
                if (r[i].length > 3 && (u.test(r[i]) || f.test(r[i])))
                    return !1;
        return !0
    }
    ;
    t.regexConsecutiveNumberPassword = s;
    h = function(n, t, i) {
        if (!n)
            return !0;
        var r = Date.parseExact(n, i);
        return r != null
    }
    ;
    t.dateFormat = h;
    App.Validation.Methods = t
}(window.regexPattern),
function(n, t) {
    function i(i, r) {
        var f = this
          , u = App.Validation.form(f, i, r);
        return u.fields.login && u.fields.login.rules("add", {
            required: !0,
            noWhiteSpace: !0,
            regex: n.MEMBER_CODE,
            messages: {
                required: t.dbRes("Common_MemberCode_Empty"),
                regex: t.dbRes("Common_MemberCode_Invalid")
            }
        }),
        u.fields.password && u.fields.password.rules("add", {
            required: !0,
            regex: n.PASSWORD,
            maxlength: !1,
            messages: {
                required: t.dbRes("Common_Password_Empty"),
                regex: t.dbRes("Common_Password_Invalid")
            }
        }),
        u.fields.newPassword && (u.fields.newPassword.rules("add", {
            required: !0,
            regex: n.PASSWORD,
            regexDuplicateConsecutivePassword: !0,
            regexConsecutiveNumberPassword: !0,
            maxlength: !1,
            remote: {
                url: "/member/validation.svc?action=isValidPassword",
                type: "GET",
                data: {
                    password: function() {
                        return u.fields.newPassword.val()
                    }
                }
            },
            messages: {
                required: t.dbRes("Password_NewPassword_Empty"),
                regexDuplicateConsecutivePassword: t.dbRes("Common_Password_DuplicateConsecutive"),
                regexConsecutiveNumberPassword: t.dbRes("Common_Password_ConsecutiveNumbers"),
                regex: t.dbRes("Password_NewPassword_Invalid")
            }
        }),
        u.fields.password ? u.fields.newPassword.rules("add", {
            notEqualTo: u.fields.password.selector,
            messages: {
                notEqualTo: t.dbRes("Password_NewPassword_MatchOld")
            }
        }) : console.warn("validation: password (old) is undefined.")),
        u.fields.confirmPassword && (u.fields.confirmPassword.rules("add", {
            required: !0,
            regex: n.PASSWORD,
            regexDuplicateConsecutivePassword: !0,
            regexConsecutiveNumberPassword: !0,
            maxlength: !1,
            remote: {
                url: "/member/validation.svc?action=isValidPassword",
                type: "GET",
                data: {
                    password: function() {
                        return u.fields.confirmPassword.val()
                    }
                }
            },
            messages: {
                required: t.dbRes("Registration_ConfirmPassword_Empty"),
                regexDuplicateConsecutivePassword: t.dbRes("Registration_ConfirmPassword_DuplicateConsecutive"),
                regexConsecutiveNumberPassword: t.dbRes("Registration_ConfirmPassword_ConsecutiveNumbers"),
                regex: t.dbRes("Registration_ConfirmPassword_Invalid")
            }
        }),
        u.fields.newPassword ? u.fields.confirmPassword.rules("add", {
            equalTo: u.fields.newPassword.selector,
            messages: {
                equalTo: t.dbRes("Registration_ConfirmPassword_NotMatch")
            }
        }) : console.warn("validation: newPassword is undefined.")),
        u.fields.email && u.fields.email.rules("add", {
            required: !0,
            regexEmail: !0,
            email: !1,
            maxlength: !1,
            messages: {
                required: t.dbRes("Registration_Email_Empty"),
                regexEmail: t.dbRes("Registration_Email_Invalid")
            }
        }),
        u.fields.securityQuestion && u.fields.securityQuestion.rules("add", {
            required: !1,
            messages: {
                required: t.dbRes("Profile_SecurityQuestion_Invalid")
            }
        }),
        u.fields.securityAnswer && u.fields.securityAnswer.rules("add", {
            required: !1,
            regex: n.SECURITY_ANSWER,
            maxlength: !1,
            messages: {
                required: t.dbRes("Profile_SecurityAnswer_Empty"),
                regex: t.dbRes("Profile_SecurityAnswer_Invalid")
            }
        }),
        u
    }
    $.fn.validation = i
}(window.regexPattern, window.resourcesmembervalidation),
function(n) {
    var t = n("#app-announcement").find("article.marquee")
      , i = function() {
        var i = n(window).width()
          , r = {
            pauseOnHover: !0
        };
        r.duration = i > 1024 ? 15e3 : i > 600 ? 1e4 : 5e3;
        t.marquee(r)
    }
      , r = function() {
        t.marquee("destroy")
    };
    n(window).load(function() {
        i()
    }).resize(function() {
        r();
        i()
    })
}(jQuery),
function() {
    var t = {
        scope: ".js-memberLogin",
        views: {
            anonymous: ".js-view-anonymous",
            member: ".js-view-member"
        },
        datas: {
            memberCode: ".js-data-memberCode"
        },
        actions: {
            button: ".js-buttonLogin",
            modal: "#modal-login"
        },
        switchView: function(n) {
            $(t.views.anonymous, t.scope).hide();
            $(t.views.member, t.scope).hide();
            $(n, t.scope).length && $(n, t.scope).show()
        },
        buttonAction: function() {
            $(t.actions.button, t.scope).length && $(t.actions.button).click(function() {
                FLX.Browser.isMobileAccess() ? window.location = "/member/login" : $(t.actions.modal).foundation("open")
            })
        },
        init: function() {
            t.switchView(App.Member.isLoggedIn() ? t.views.member : t.views.anonymous);
            t.buttonAction()
        }
    }
      , i = {
        button: ".js-buttonSideMenu",
        init: function() {
            $(i.button).click(function() {
                $(this).toggleClass(FLX.Plugins.Activation.activeClass)
            })
        }
    }
      , n = {
        scope: ".js-memberLogin-walletBalance",
        views: {
            loading: ".js-view-loading",
            success: ".js-view-success",
            fail: ".js-view-fail"
        },
        datas: {
            walletBalance: ".js-data-walletBalance"
        },
        switchView: function(t) {
            $(n.views.loading, n.scope).hide();
            $(n.views.success, n.scope).hide();
            $(n.views.fail, n.scope).hide();
            $(t, n.scope).length && $(t, n.scope).show()
        },
        init: function() {
            n.switchView(n.views.loading)
        }
    };
    $(window).on("App.Banking.wallet.loading", function() {
        n.switchView(n.views.loading)
    });
    $(window).on("App.Banking.wallet.success App.Banking.wallet.reload", function(t, i) {
        n.switchView(n.views.success);
        $(n.scope).find(n.datas.walletBalance).text(i.value)
    });
    $(window).on("App.Banking.wallet.fail", function() {
        n.switchView(n.views.fail)
    });
    t.init();
    n.init();
    i.init()
}(),
function(n) {
    var t = "#modal-login", i = {
        login: "#inputLoginName",
        password: "#inputLoginPassword"
    }, r;
    $(t).one("open.zf.reveal", function() {
        var u = $("#buttonLogin", t);
        r = $(t).validation(i, {
            onfocusout: !1,
            onkeyup: !1
        });
        $(t).floatinglabel({
            animationIn: {
                top: "-20px",
                opacity: "1"
            },
            animationOut: {
                top: "0",
                opacity: "0"
            }
        });
        u.click(function() {
            r.validate().done(function() {
                App.Member.login({
                    login: $(i.login, t).val(),
                    password: $(i.password, t).val(),
                    deviceId: FLX.Plugins.DeviceInfo.deviceId,
                    deviceDetails: FLX.Plugins.DeviceInfo.deviceDetails ? JSON.stringify(FLX.Plugins.DeviceInfo.deviceDetails) : "",
                    isPrivateBrowser: FLX.Plugins.DeviceInfo.isPrivateBrowser
                }).done(function() {
                    $(t).foundation("close")
                }).fail(function(n) {
                    FLX.Modal.error(n.message)
                })
            }).fail(function() {
                FLX.Modal.error(n.dbRes("Fail_Login"));
                r.reset()
            })
        });
        $(t).keypress(function(n) {
            n.which === 13 && u.click()
        })
    }).on("open.zf.reveal", function() {
        $(i.login, t).focus()
    }).on("closed.zf.reveal", function() {
        r.reset()
    })
}(window.resourcesmemberservice),
function() {
    var n = {
        selector: "#app-navigation-swiper",
        swiper: null
    }, t = {
        selector: ".mobile-navigation-accordion"
    }, i;
    $(document).ready(function() {
        n.swiper = new Swiper("#app-navigation-swiper",{
            loop: !1,
            slidesPerView: "auto",
            freeMode: !0,
            freeModeSticky: !0,
            preventClicks: !1,
            nextButton: "#app-navigation-next",
            prevButton: "#app-navigation-prev"
        })
    });
    $(window).resize(function() {
        $("#app-navigation-swiper").length > 0 && n.swiper.update(!0)
    });
    i = function(i) {
        $("li", n.selector).deactivate();
        $("li", t.selector).deactivate();
        $(i, n.selector).activate();
        $(i, t.selector).activate()
    }
    ;
    n.activeMenu = i;
    App.HeaderNavigation = n
}(),
function() {
    var i = FLX.Cookie.get("IsAnnouncementSkipEnabled")
      , r = {
        hide: {
            enable: i == undefined ? !1 : i == "true" ? !0 : !1
        },
        multiple: {
            enable: !0
        }
    }
      , n = {
        scope: "#modal-announcement-custom",
        carousel: "#announcement-modal-container",
        control: {
            hideToday: "#chkHideToday"
        },
        template: {
            message: ".js-template-popuptext",
            image: ".js-template-popupimage"
        },
        datas: {
            title: "header.js-data-title",
            content: ".js-data-content",
            image: ".js-data-image"
        },
        views: {
            loading: ".js-view-loading",
            content: ".js-view-content",
            notFound: ".js-view-notfound"
        },
        switchView: function(t) {
            for (var i in n.views)
                n.views.hasOwnProperty(i) && $(n.views[i], n.scope).hide();
            $(t, n.scope).length && $(t, n.scope).show()
        },
        renderContent: function(t, i) {
            var i, u, f, e, o, s;
            if (t)
                if ($(n.carousel).empty(),
                i = $.extend({}, r, i),
                t.length > 0)
                    if (u = null,
                    u = FLX.Cookie.get("popAnnouncement") == "" || !i.hide.enable ? null : JSON.parse(FLX.Cookie.get("popAnnouncement")),
                    f = t,
                    u != null && (e = [],
                    e = t.filter(function(n) {
                        return u.findIndex(function(t) {
                            return t.id === n.id && t.updatedDateTime === n.updatedDateTime
                        }) >= 0
                    }),
                    f = t.filter(function(n) {
                        return $.inArray(n, e) < 0
                    })),
                    i.hide.enable ? (o = $("#closeAnnModal")[0],
                    s = $("#btnCloseAnnModal")[0],
                    $([o, s]).click(function() {
                        var t = [], r, e;
                        u = FLX.Cookie.get("popAnnouncement") == "" || !i.hide.enable ? null : JSON.parse(FLX.Cookie.get("popAnnouncement"));
                        $(f).each(function(n, i) {
                            var r = {};
                            r.id = i.id;
                            r.updatedDateTime = i.updatedDateTime;
                            t.push(r)
                        });
                        $(n.control.hideToday).prop("checked") == !0 && (u == null ? App.Common.Announcement.hideAnnouncement(t) : (r = t.filter(function(n) {
                            return u.findIndex(function(t) {
                                return t.id === n.id
                            }) < 0
                        }),
                        e = u.concat(r),
                        App.Common.Announcement.hideAnnouncement(e)))
                    }),
                    $(".announcement-hideToday").addClass(FLX.Plugins.Activation.activeClass)) : $(".announcement-hideToday").removeClass(FLX.Plugins.Activation.activeClass),
                    f != null && f.length) {
                        if ($(f).each(function(t, r) {
                            if (t > 0 && !i.multiple.enable)
                                return !1;
                            var u = "";
                            r.isPopUpImage ? (u = $(n.template.image, n.scope).first().clone().removeClass("js-template-popupimage").removeClass("announcement-template"),
                            u.find(n.datas.image).attr("data-src", r.contentImagePath)) : (u = $(n.template.message, n.scope).first().clone().removeClass("js-template-popuptext").removeClass("announcement-template"),
                            u.find(n.datas.content).html(r.contentHtml));
                            u.find(n.datas.title).html(r.title);
                            $(n.carousel, n.scope).append(u)
                        }),
                        i.multiple.enable && f.length > 1 ? ($(n.carousel).addClass("owl-carousel"),
                        $(n.carousel).owlCarousel({
                            animateIn: "lightSpeedIn",
                            animateOut: "lightSpeedOut",
                            items: 1,
                            autoplayHoverPause: !0,
                            loop: !0,
                            autoplay: !0,
                            nav: !0,
                            dots: !0,
                            lazyLoad: !0,
                            autoHeight: !0,
                            mouseDrag: !0,
                            touchDrag: !1
                        })) : ($(n.carousel).removeClass("owl-carousel"),
                        $(n.datas.image, n.scope).lazy()),
                        n.switchView(n.views.content),
                        $(n.scope).foundation("open"),
                        $(".accordion-froalaEditorContent", n.scope).length && ($(".accordion-froalaEditorContent", n.scope).each(function() {
                            $(this).data("zfPlugin") === undefined && $(this).foundation()
                        }),
                        $(n.carousel).hasClass("owl-carousel"))) {
                            $(n.carousel).on("changed.owl.carousel", function() {
                                $(".accordion-froalaEditorContent", $(".owl-carousel", n.scope)).each(function() {
                                    $(this).data("zfPlugin") === undefined && $(this).foundation()
                                })
                            });
                            $(".accordion-froalaEditorContent[data-accordion]", $(".owl-carousel", n.scope)).on("down.zf.accordion up.zf.accordion", function() {
                                $(".owl-carousel", n.scope).trigger("refresh.owl.carousel")
                            })
                        }
                    } else
                        return;
                else
                    return
        }
    }
      , t = {
        $data: {
            get: function(n) {
                return t.$data[n] ? $.Deferred().resolve(t.$data[n]).promise() : $.post("/communication/announcement.svc?action=getAnnouncement", {
                    announcementID: n
                }).then(FLX.Ajax.validateServiceResponse).then(function(n) {
                    return n.data ? n.data : n
                }).done(function(n) {
                    n.id && (t.$data[n.id] = n)
                })
            }
        },
        details: function(i) {
            n.switchView(n.views.loading);
            t.$data.get(i).done(function(t) {
                var i = [t];
                n.renderContent(i, {
                    hide: {
                        enable: !1
                    },
                    multiple: {
                        enable: !1
                    }
                })
            }).fail(function() {
                n.switchView(n.views.notFound)
            })
        },
        show: function(t, i) {
            t && n.renderContent(t, i)
        },
        hideAnnouncement: function(n) {
            var t = new Date;
            t.setHours(23, 59, 59, 999);
            FLX.Cookie.createBySpecificTime("popAnnouncement", JSON.stringify(n), t)
        }
    };
    App.Common.Announcement = t
}(),
function() {
    var t = App.Promotion
      , n = {
        modal: "#modal-promotionTnc",
        datas: {
            title: "header.js-data-title",
            content: ".js-data-content"
        },
        views: {
            empty: ".js-view-empty",
            loading: ".js-view-loading",
            content: ".js-view-content",
            notFound: ".js-view-notfound"
        },
        _init: function() {
            renderContent();
            n.switchView(n.views.empty)
        },
        switchView: function(t) {
            for (var i in n.views)
                n.views.hasOwnProperty(i) && $(n.views[i], n.modal).hide();
            $(t, n.modal).length && $(t, n.modal).show()
        },
        renderContent: function(t) {
            if (!t) {
                $(n.datas.title, n.modal).text("");
                $(n.datas.content, n.modal).html("");
                return
            }
            $(n.datas.title, n.modal).text(t.promotionTitle);
            $(n.datas.content, n.modal).html(t.promotionContentHtml)
        }
    }
      , i = function(i, r, u) {
        $(n.modal).foundation("open");
        n.switchView(n.views.loading);
        t.getTnc({
            promotionType: i,
            promotionID: r,
            tncID: u
        }).done(function(t) {
            n.renderContent(t.data);
            n.switchView(n.views.content)
        }).fail(function() {
            n.switchView(n.views.notFound)
        })
    };
    t.tnc = i
}(),
function() {
    var n = {
        scope: ".js-walletBalance",
        views: {
            loading: ".js-view-loading",
            success: ".js-view-success",
            fail: ".js-view-fail"
        },
        template: "li.js-template",
        datas: {
            walletList: "ul.js-data-walletList",
            walletName: ".js-data-walletName",
            walletValue: ".js-data-walletValue",
            walletTotal: ".js-data-walletTotal"
        },
        switchView: function(t) {
            $(n.scope).find(n.views.loading).hide();
            $(n.scope).find(n.views.success).hide();
            $(n.scope).find(n.views.fail).hide();
            $(n.scope).find(t).length && $(n.scope).find(t).show()
        },
        _init: function() {
            n.switchView(n.views.loading)
        }
    };
    $(window).on("App.Banking.wallet.loading", function() {
        n.switchView(n.views.loading)
    });
    $(window).on("App.Banking.wallet.success", function(t, i) {
        n.switchView(n.views.success);
        $(n.datas.walletList).children().not(n.template).remove();
        $(i.wallets).each(function(t, i) {
            var r = $(n.template).first().clone().removeClass("js-template");
            r.attr("data-wallet", i.code);
            r.find(n.datas.walletName).text(FLX.Helper.decodeHTMLCharacter(i.name));
            r.find(n.datas.walletValue).text(i.value).attr("data-status", i.status);
            $(n.datas.walletList).append(r)
        });
        $(n.datas.walletTotal).text(i.value)
    });
    $(window).on("App.Banking.wallet.reload", function(t, i) {
        var r = $(n.datas.walletList).children();
        $(i.wallets).each(function(t, i) {
            var u = r.filter("[data-wallet='" + i.code + "']");
            if ($(n.datas.walletValue, u).text() === i.value)
                return !0;
            $(n.datas.walletValue, u).text(i.value).attr("data-status", i.status)
        });
        $(n.datas.walletTotal).text(i.value)
    });
    $(window).on("App.Banking.wallet.fail", function() {
        n.switchView(n.views.fail)
    });
    n._init()
}()
