
const staticCacheName = "site-static-v1";

const cachePages = [
    "/",
    "/index.html",
    "/tutorials/index.html",
    "/projects/index.html",
    "/about/index.html",
    "/404.html",
]

const cacheFiles = [
    "manifest.json",
    "/404.md",
    "/README.md",
    "/LICENSE"
]

const cacheAssetsJs = [
    // "/assets/js/service-worker.js",
    "/assets/js/script.js",
    "/assets/js/menu.js",
    "/assets/js/tutorials.js",
    "/assets/js/projects.js",
]

const cacheAssetsCss = [
    "/assets/css/base/main.css",
    "/assets/css/base/font.css",
    "/assets/css/base/header.css",
    "/assets/css/base/menu.css",
    "/assets/css/base/theme.css",
    "/assets/css/base/aos-2.3.1.css",

    "/assets/css/page/index.css",
    "/assets/css/page/error.css",
    "/assets/css/page/tutorials.css",
    "/assets/css/page/projects.css",
    "/assets/css/page/about.css",
]

const cacheAssetsFont = [
    "/assets/font/HelpMe-owODB.ttf",
    "/assets/font/iransans.ttf",
    "/assets/font/IRANSansWeb.woff2",
    "/assets/font/iranyekanwebboldfanum.woff",
    "/assets/font/iranyekanwebregularfanum.woff",
    "/assets/font/Library_3_am.otf",
    "/assets/font/NightmarePills-BV2w.ttf",
    "/assets/font/p9e.ttf",
    "/assets/font/Potra.ttf",
    "/assets/font/Roboto-Thin.ttf",
    "/assets/font/Vazir-FD.woff",
    
    "/assets/font/poppins/Poppins-Bold.ttf",
    "/assets/font/poppins/Poppins-Light.ttf",
    "/assets/font/poppins/Poppins-Medium.ttf",
    "/assets/font/poppins/Poppins-Regular.ttf",
    "/assets/font/poppins/Poppins-SemiBold.ttf",

    "/assets/font/roboto/Roboto-Black.ttf",
    "/assets/font/roboto/Roboto-BlackItalic.ttf",
    "/assets/font/roboto/Roboto-Bold.ttf",
    "/assets/font/roboto/Roboto-BoldCondensed.ttf",
    "/assets/font/roboto/Roboto-BoldCondensedItalic.ttf",
    "/assets/font/roboto/Roboto-BoldItalic.ttf",
    "/assets/font/roboto/Roboto-Condensed.ttf",
    "/assets/font/roboto/Roboto-BoldItalic.ttf",
    "/assets/font/roboto/Roboto-CondensedItalic.ttf",
    "/assets/font/roboto/Roboto-Italic.ttf",
    "/assets/font/roboto/Roboto-Light.ttf",
    "/assets/font/roboto/Roboto-LightItalic.ttf",
    "/assets/font/roboto/Roboto-Medium.ttf",
    "/assets/font/roboto/Roboto-MediumItalic.ttf",
    "/assets/font/roboto/Roboto-Regular.ttf",
    "/assets/font/roboto/Roboto-Thin.ttf",
    "/assets/font/roboto/Roboto-ThinItalic.ttf",
]

const cacheAssetsImages = [
    "/favicon.ico",
    "/assets/icons/app-icon-16x16.png",
    "/assets/icons/app-icon-32x32.png",
    "/assets/icons/app-icon-64x64.png",
    "/assets/icons/app-icon-128x128.png",
    "/assets/icons/app-icon-192x192.png",
    "/assets/icons/app-icon-256x256.png",
    "/assets/icons/app-icon-512x512.png",
    "/assets/icons/apple-touch-icon.png",

    "/assets/img/banner.png",
    "/tutorials/assets/img/tutorials.png",
    "/assets/img/books.jpg",
    "/assets/img/projects.jpg",
    // "/assets/img/articles.jpg",
]

const cacheAssets = cacheAssetsImages + cacheAssetsJs + cacheAssetsFont + cacheAssetsCss ;
    
const cacheData = cachePages + cacheFiles + cacheAssets ;

self.addEventListener("install", event => {
    console.log("Service Worker installing...");
    event.waitUntil(
        caches
            .open(staticCacheName)
            .then(cache => {
                console.log("caching data...");
                cache.addAll(cacheData);
            })
            .catch(error => {
                console.error("Service Worker error");
            })
    );
});

self.addEventListener("activate", event => {
    console.log("Service Worker activated.");
});

self.addEventListener("fetch", event => {
    event.respondWith(
        caches
            .match(event.request)
            .then(res => {
                return res || fetch(event.request);
            })
        .catch(error => {
            if (event.request.url.indexOf(".html") > -1) {
                return caches.match("/index.html");
            }
        })
    );
});