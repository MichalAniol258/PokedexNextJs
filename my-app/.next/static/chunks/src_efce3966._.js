(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_efce3966._.js", {

"[project]/src/components/RecentHistory/RecentHistory.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
"use client";
;
;
const RecentHistory = ({ elems, setItem, withLinks })=>{
    console.log('elems:', elems);
    const Component = (elem)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            onClick: ()=>{
                if (setItem) setItem(elem);
            },
            className: "bg-violet-950 h-[300px] cursor-pointer shadow-lg rounded-lg p-4 flex flex-col items-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: elem.url,
                alt: elem.body.name,
                className: " !w-[300] h-full  object-cover rounded-lg"
            }, void 0, false, {
                fileName: "[project]/src/components/RecentHistory/RecentHistory.tsx",
                lineNumber: 17,
                columnNumber: 9
            }, this)
        }, elem.id, false, {
            fileName: "[project]/src/components/RecentHistory/RecentHistory.tsx",
            lineNumber: 14,
            columnNumber: 47
        }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-10 p-4",
        children: elems.map((elem)=>{
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    withLinks ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: `/pokemons/${elem.id}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Component, {
                            ...elem
                        }, void 0, false, {
                            fileName: "[project]/src/components/RecentHistory/RecentHistory.tsx",
                            lineNumber: 31,
                            columnNumber: 29
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/RecentHistory/RecentHistory.tsx",
                        lineNumber: 30,
                        columnNumber: 38
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Component, {
                        ...elem
                    }, void 0, false, {
                        fileName: "[project]/src/components/RecentHistory/RecentHistory.tsx",
                        lineNumber: 32,
                        columnNumber: 35
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-violet-100 my-[4]",
                        children: [
                            " ",
                            elem.body.pokedex_code
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/RecentHistory/RecentHistory.tsx",
                        lineNumber: 33,
                        columnNumber: 25
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "mt-2 text-2xl text-violet-300 font-semibold",
                        children: elem.body.name || "No Pokemon"
                    }, void 0, false, {
                        fileName: "[project]/src/components/RecentHistory/RecentHistory.tsx",
                        lineNumber: 34,
                        columnNumber: 25
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-violet-300 text-violet-950 rounded-full py-1 px-3 my-1 w-max  text-sm capitalize",
                        children: elem.body.type
                    }, void 0, false, {
                        fileName: "[project]/src/components/RecentHistory/RecentHistory.tsx",
                        lineNumber: 36,
                        columnNumber: 25
                    }, this)
                ]
            }, elem.id, true, {
                fileName: "[project]/src/components/RecentHistory/RecentHistory.tsx",
                lineNumber: 29,
                columnNumber: 21
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/src/components/RecentHistory/RecentHistory.tsx",
        lineNumber: 26,
        columnNumber: 9
    }, this);
};
_c = RecentHistory;
const __TURBOPACK__default__export__ = RecentHistory;
var _c;
__turbopack_context__.k.register(_c, "RecentHistory");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/pokemons/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/supabase/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RecentHistory$2f$RecentHistory$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/RecentHistory/RecentHistory.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const Page = ()=>{
    _s();
    const [pokemons, setPokemons] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    console.log(pokemons);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Page.useEffect": ()=>{
            const fetchPokemons = {
                "Page.useEffect.fetchPokemons": async ()=>{
                    const { data: { user } } = await supabase.auth.getUser();
                    if (!user) {
                        setLoading(false);
                        return;
                    }
                    const { data, error } = await supabase.from("pokemons").select("*").eq("user_id", user.id);
                    ;
                    if (error) {
                        console.error("Error fetching pokemons:", error);
                    } else {
                        console.log(data);
                        /*setPokemons(
                    Array.from(
                        new Map(
                            data
                                ?.map(el => ({
                                    ...el,
                                    body: JSON.parse(el.body),
                                    url: `https://mkttmsharlpupjggoayx.supabase.co/storage/v1/object/public/photos/${el.url}`
                                }))
                                .filter(el => el.body.isPokemon) // Filter only Pokémon entries
                                .map(el => [el.body.name, el]) // Create a map with unique names as keys
                        ).values() // Extract unique values
                    )
                );*/ setPokemons(data?.map({
                            "Page.useEffect.fetchPokemons": (el)=>({
                                    ...el,
                                    body: JSON.parse(el.body),
                                    url: `https://mkttmsharlpupjggoayx.supabase.co/storage/v1/object/public/photos/${el.url}`
                                })
                        }["Page.useEffect.fetchPokemons"]).filter({
                            "Page.useEffect.fetchPokemons": (el)=>el.body.isPokemon
                        }["Page.useEffect.fetchPokemons"]));
                    }
                    setLoading(false);
                }
            }["Page.useEffect.fetchPokemons"];
            fetchPokemons();
        }
    }["Page.useEffect"], []);
    /*const [item,setCurrentItem] = useState<PokemonDetection | null>(null);
    const [currentImage,setCurrentImage]=useState("")
    const setCurrentItemHandle=(item:HistoryElem)=>{
        setCurrentItem(item.body);
        setCurrentImage(item.url)
    }*/ return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-6 ",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-2xl font-bold mb-4 text-violet-200 text-center",
                children: "Your discovered pokemons"
            }, void 0, false, {
                fileName: "[project]/src/app/pokemons/page.tsx",
                lineNumber: 60,
                columnNumber: 13
            }, this),
            loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed h-screen w-full left-[0] top-[0] !bg-[#181b1d] z-[10000]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: '/loading.gif',
                    className: "fixed left-[0] top-[0] object-contain w-full h-screen z-[1999]",
                    height: 50,
                    width: 50,
                    alt: ""
                }, void 0, false, {
                    fileName: "[project]/src/app/pokemons/page.tsx",
                    lineNumber: 64,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/pokemons/page.tsx",
                lineNumber: 63,
                columnNumber: 17
            }, this) : pokemons.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "No Pokémons found."
            }, void 0, false, {
                fileName: "[project]/src/app/pokemons/page.tsx",
                lineNumber: 68,
                columnNumber: 17
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "space-y-2 flex justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RecentHistory$2f$RecentHistory$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    withLinks: true,
                    elems: pokemons
                }, void 0, false, {
                    fileName: "[project]/src/app/pokemons/page.tsx",
                    lineNumber: 71,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/pokemons/page.tsx",
                lineNumber: 70,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/pokemons/page.tsx",
        lineNumber: 59,
        columnNumber: 9
    }, this);
};
_s(Page, "fQreVV4R/KyuEkWz0eG2YtCgNFw=");
_c = Page;
const __TURBOPACK__default__export__ = Page;
var _c;
__turbopack_context__.k.register(_c, "Page");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_efce3966._.js.map