(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/sections/FeaturedSlider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FeaturedSlider",
    ()=>FeaturedSlider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$slider$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/slider.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Container.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function FeaturedSlider() {
    _s();
    const [index, setIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const total = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$slider$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["slides"].length;
    const goTo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "FeaturedSlider.useCallback[goTo]": (next)=>{
            setIndex((next % total + total) % total);
        }
    }["FeaturedSlider.useCallback[goTo]"], [
        total
    ]);
    const goPrev = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "FeaturedSlider.useCallback[goPrev]": ()=>goTo(index - 1)
    }["FeaturedSlider.useCallback[goPrev]"], [
        goTo,
        index
    ]);
    const goNext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "FeaturedSlider.useCallback[goNext]": ()=>goTo(index + 1)
    }["FeaturedSlider.useCallback[goNext]"], [
        goTo,
        index
    ]);
    function handleKeyDown(event) {
        if (event.key === "ArrowLeft") {
            event.preventDefault();
            goPrev();
        } else if (event.key === "ArrowRight") {
            event.preventDefault();
            goNext();
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        "aria-roledescription": "carousel",
        "aria-label": "Featured zones",
        onKeyDown: handleKeyDown,
        className: "relative z-10 -mt-7 sm:-mt-9",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Container"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative overflow-hidden rounded-lg bg-ink text-on-ink shadow-xl h-[440px] sm:h-[460px] lg:h-[500px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "aria-hidden": "true",
                        className: "pointer-events-none absolute left-1/2 top-0 z-0 h-20 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent sm:h-28 sm:w-56 lg:h-32 lg:w-72"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/FeaturedSlider.tsx",
                        lineNumber: 57,
                        columnNumber: 11
                    }, this),
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$slider$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["slides"].map((slide, i)=>{
                        const isActive = i === index;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: slide.href,
                            "aria-hidden": !isActive,
                            "aria-roledescription": "slide",
                            "aria-label": `${i + 1} of ${total}: ${slide.title}`,
                            tabIndex: isActive ? 0 : -1,
                            className: `absolute inset-0 z-[1] flex flex-col justify-end gap-3 p-6 transition-opacity duration-300 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-primary sm:p-10 lg:p-14 ${isActive ? "opacity-100" : "pointer-events-none opacity-0"}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    "aria-hidden": "true",
                                    className: "absolute inset-0 -z-10 bg-gradient-to-br from-ink via-ink to-primary/30"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/FeaturedSlider.tsx",
                                    lineNumber: 78,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    "aria-hidden": "true",
                                    className: "absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_20%,rgba(248,202,31,0.25),transparent_55%)]"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/FeaturedSlider.tsx",
                                    lineNumber: 82,
                                    columnNumber: 17
                                }, this),
                                slide.label ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "mb-1 inline-flex w-fit items-center rounded-pill bg-accent px-3 py-1 font-mono text-xs font-semibold uppercase tracking-wider text-ink",
                                    children: slide.label
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/FeaturedSlider.tsx",
                                    lineNumber: 88,
                                    columnNumber: 19
                                }, this) : null,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl",
                                    children: slide.title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/FeaturedSlider.tsx",
                                    lineNumber: 92,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "max-w-md text-sm leading-relaxed text-on-ink/80 sm:text-base",
                                    children: slide.description
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/FeaturedSlider.tsx",
                                    lineNumber: 95,
                                    columnNumber: 17
                                }, this),
                                slide.accent ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-mono text-xs uppercase tracking-[0.2em] text-primary",
                                    children: slide.accent
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/FeaturedSlider.tsx",
                                    lineNumber: 99,
                                    columnNumber: 19
                                }, this) : null
                            ]
                        }, slide.id, true, {
                            fileName: "[project]/src/components/sections/FeaturedSlider.tsx",
                            lineNumber: 65,
                            columnNumber: 15
                        }, this);
                    }),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-x-0 bottom-0 z-[2] flex items-center justify-between gap-4 p-4 sm:p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: goPrev,
                                "aria-label": "Previous slide",
                                className: "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-on-ink/10 text-on-ink backdrop-blur transition-colors hover:bg-on-ink/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ArrowIcon, {
                                    direction: "left"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/FeaturedSlider.tsx",
                                    lineNumber: 116,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/FeaturedSlider.tsx",
                                lineNumber: 110,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 rounded-pill bg-on-ink/10 px-3 py-1.5 backdrop-blur",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-mono text-xs text-on-ink/80",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-on-ink",
                                                children: index + 1
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/FeaturedSlider.tsx",
                                                lineNumber: 121,
                                                columnNumber: 17
                                            }, this),
                                            " / ",
                                            total
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sections/FeaturedSlider.tsx",
                                        lineNumber: 120,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "ml-1 hidden items-center gap-1.5 sm:flex",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$slider$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["slides"].map((slide, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>goTo(i),
                                                "aria-label": `Go to slide ${i + 1}: ${slide.title}`,
                                                "aria-current": i === index,
                                                className: `h-1.5 rounded-pill transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${i === index ? "w-5 bg-primary" : "w-1.5 bg-on-ink/30 hover:bg-on-ink/50"}`
                                            }, slide.id, false, {
                                                fileName: "[project]/src/components/sections/FeaturedSlider.tsx",
                                                lineNumber: 125,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/FeaturedSlider.tsx",
                                        lineNumber: 123,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/FeaturedSlider.tsx",
                                lineNumber: 119,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: goNext,
                                "aria-label": "Next slide",
                                className: "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-on-ink/10 text-on-ink backdrop-blur transition-colors hover:bg-on-ink/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ArrowIcon, {
                                    direction: "right"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/FeaturedSlider.tsx",
                                    lineNumber: 145,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/FeaturedSlider.tsx",
                                lineNumber: 139,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/FeaturedSlider.tsx",
                        lineNumber: 109,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/FeaturedSlider.tsx",
                lineNumber: 53,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/sections/FeaturedSlider.tsx",
            lineNumber: 52,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/sections/FeaturedSlider.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
_s(FeaturedSlider, "xqSp/0dpHRBHS/FKCLS8UV5w6AA=");
_c = FeaturedSlider;
function ArrowIcon({ direction }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        "aria-hidden": "true",
        className: `h-5 w-5 ${direction === "left" ? "" : "rotate-180"}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M15 5l-7 7 7 7",
            stroke: "currentColor",
            strokeWidth: 2,
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }, void 0, false, {
            fileName: "[project]/src/components/sections/FeaturedSlider.tsx",
            lineNumber: 162,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/sections/FeaturedSlider.tsx",
        lineNumber: 156,
        columnNumber: 5
    }, this);
}
_c1 = ArrowIcon;
var _c, _c1;
__turbopack_context__.k.register(_c, "FeaturedSlider");
__turbopack_context__.k.register(_c1, "ArrowIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/Container.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Container",
    ()=>Container
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function Container({ children, className = "" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10 ${className}`,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Container.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_c = Container;
var _c;
__turbopack_context__.k.register(_c, "Container");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/config/slider.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * FLIPPCLUB — featured slider configuration
 * ─────────────────────────────────────────────────────────────────────────
 * Single source of truth for the featured slider in
 * `src/components/sections/FeaturedSlider.tsx`.
 *
 * To add a new slide, append a new object to `slides`. Nothing else needs
 * to change — the component renders whatever is in this array.
 */ __turbopack_context__.s([
    "slides",
    ()=>slides
]);
const slides = [
    {
        id: "pinball-zone",
        title: "Pinball Zone",
        description: "A lineup of restored classic pinball machines from the golden era.",
        href: "#zones",
        image: "/images/hero/pinball-zone.jpg",
        label: "Popular",
        accent: "12 machines"
    },
    {
        id: "arcade-zone",
        title: "Arcade Zone",
        description: "Retro cabinets and modern arcade favorites, side by side.",
        href: "#zones",
        image: "/images/hero/arcade-zone.jpg",
        accent: "20+ cabinets"
    },
    {
        id: "killer-queen",
        title: "Killer Queen",
        description: "Our signature 10-player arcade cabinet — the club's big draw.",
        href: "#killer-queen",
        image: "/images/hero/killer-queen.jpg",
        label: "New",
        accent: "10 players, 1 cabinet"
    },
    {
        id: "excavator-zone",
        title: "Excavator Zone",
        description: "Claw and excavator games for a quick round with friends.",
        href: "#zones",
        image: "/images/hero/excavator-zone.jpg"
    },
    {
        id: "events",
        title: "Events & Special Occasions",
        description: "Birthdays, tournaments and private parties, hosted at the club.",
        href: "#contact",
        image: "/images/hero/events.jpg",
        accent: "Book your date"
    },
    {
        id: "bar",
        title: "Bar",
        description: "Cold drinks, coffee and snacks while you play.",
        href: "#about",
        image: "/images/hero/bar.jpg"
    },
    {
        id: "space",
        title: "300+ m² of Entertainment",
        description: "Plenty of room to play, hang out and explore every zone.",
        href: "#zones",
        image: "/images/hero/space.jpg"
    },
    {
        id: "coming-soon",
        title: "Coming Soon",
        description: "New machines and zones are on the way — stay tuned.",
        href: "#about",
        image: "/images/hero/coming-soon.jpg",
        label: "Coming Soon"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_11k049y._.js.map