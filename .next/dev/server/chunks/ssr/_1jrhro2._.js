module.exports = [
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime;
}),
"[project]/src/components/slider3d.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Slider3D
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
const totalSlides = 10;
const images = Array.from({
    length: totalSlides
}, (_, i)=>`https://picsum.photos/seed/${i + 10}/600/800`);
const titles = [
    "NEON STREETS",
    "DESERT MIRAGE",
    "OCEAN DEEP",
    "URBAN JUNGLE",
    "COSMIC DRIFT",
    "FROZEN TUNDRA",
    "CYBER PUNK",
    "ANCIENT RUINS",
    "NEBULA DUST",
    "SOLAR FLARE"
];
const lerp = (start, end, amt)=>(1 - amt) * start + amt * end;
function Slider3D() {
    const sliderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const orbitRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const previewImgRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const titleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const targetRotation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const currentRotation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const targetTiltX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const targetTiltY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const currentTiltX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const currentTiltY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const activeIndexRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const requestRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const orbitRadius = 400;
    const anglePerSlide = 360 / totalSlides;
    const lerpSpeed = 0.05;
    const autoRotateSpeed = 0.05;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const animate = ()=>{
            targetRotation.current += autoRotateSpeed;
            currentRotation.current = lerp(currentRotation.current, targetRotation.current, lerpSpeed);
            currentTiltX.current = lerp(currentTiltX.current, targetTiltX.current, lerpSpeed);
            currentTiltY.current = lerp(currentTiltY.current, targetTiltY.current, lerpSpeed);
            if (orbitRef.current) {
                // Combine the tilt and the rotation onto the wheel itself.
                // The Y-axis takes both the mouse tilt and the scroll rotation.
                orbitRef.current.style.transform = `rotateX(${currentTiltX.current}deg) rotateY(${currentTiltY.current + currentRotation.current}deg)`;
            }
            const rawIndex = Math.round(-currentRotation.current / anglePerSlide);
            const normalizedIndex = (rawIndex % totalSlides + totalSlides) % totalSlides;
            if (normalizedIndex !== activeIndexRef.current) {
                activeIndexRef.current = normalizedIndex;
                if (previewImgRef.current) {
                    previewImgRef.current.src = images[normalizedIndex];
                }
                if (titleRef.current) {
                    titleRef.current.textContent = titles[normalizedIndex];
                }
            }
            requestRef.current = requestAnimationFrame(animate);
        };
        requestRef.current = requestAnimationFrame(animate);
        return ()=>{
            if (requestRef.current) cancelAnimationFrame(requestRef.current);
        };
    }, [
        anglePerSlide
    ]);
    //   useEffect(() => {
    //   const handleGlobalMouseMove = (e: MouseEvent) => {
    //     // Measure relative to the entire browser viewport
    //     const x = e.clientX;
    //     const y = e.clientY;
    //     const percentX = (x - window.innerWidth / 2) / window.innerWidth;
    //     const percentY = (y - window.innerHeight / 2) / window.innerHeight;
    //     const maxTilt = 15; // Degrees
    //     targetTiltY.current = percentX * maxTilt;
    //     targetTiltX.current = -(percentY * maxTilt);
    //   };
    //   // Attach to window globally
    //   window.addEventListener('mousemove', handleGlobalMouseMove);
    //   return () => {
    //     window.removeEventListener('mousemove', handleGlobalMouseMove);
    //   };
    // }, []);
    // remove onMouseMove and onMouseLeave from the JSX <section> tag.
    const handleWheel = (e)=>{
        // Prefer horizontal scroll (deltaX) for horizontal side-to-side scrolling.
        // const delta = Math.abs(e.deltaX) > 0 ? e.deltaX : e.deltaY;
        const delta = e.deltaX;
        targetRotation.current += delta * 0.1;
    };
    const handleMouseMove = (e)=>{
        if (!sliderRef.current) return;
        const rect = sliderRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const percentX = (x - rect.width / 2) / rect.width;
        const percentY = (y - rect.height / 2) / rect.height;
        const maxTilt = 30;
        targetTiltY.current = percentX * maxTilt;
        targetTiltX.current = -(percentY * maxTilt);
    };
    const handleMouseLeave = ()=>{
        targetTiltX.current = 0;
        targetTiltY.current = 0;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: sliderRef,
        onWheel: handleWheel,
        onMouseMove: handleMouseMove,
        onMouseLeave: handleMouseLeave,
        className: "relative w-full h-screen overflow-hidden flex flex-col items-center justify-center [perspective:1200px]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full h-full flex items-center justify-center [transform-style:preserve-3d]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: orbitRef,
                        className: "absolute flex items-center justify-center [transform-style:preserve-3d]",
                        children: images.map((src, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute w-20 h-20 overflow-hidden border border-white/10",
                                style: {
                                    transform: `rotateY(${i * anglePerSlide}deg) translateZ(${orbitRadius}px)`
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: src,
                                    alt: `Slide ${i}`,
                                    className: "w-full h-full object-cover opacity-80"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/slider3d.tsx",
                                    lineNumber: 152,
                                    columnNumber: 15
                                }, this)
                            }, i, false, {
                                fileName: "[project]/src/components/slider3d.tsx",
                                lineNumber: 144,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/slider3d.tsx",
                        lineNumber: 142,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute w-80 h-96 overflow-hidden ring-1 ring-white/20",
                        style: {
                            transform: 'translateZ(0px)'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            ref: previewImgRef,
                            src: images[0],
                            alt: "Preview",
                            className: "w-full h-full object-cover transition-opacity duration-300"
                        }, void 0, false, {
                            fileName: "[project]/src/components/slider3d.tsx",
                            lineNumber: 163,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/slider3d.tsx",
                        lineNumber: 158,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/slider3d.tsx",
                lineNumber: 139,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                ref: titleRef,
                className: "absolute bottom-16 text-2xl font-bold tracking-[0.2em] text-black pointer-events-none",
                children: titles[0]
            }, void 0, false, {
                fileName: "[project]/src/components/slider3d.tsx",
                lineNumber: 173,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/slider3d.tsx",
        lineNumber: 131,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=_1jrhro2._.js.map