                        importScripts("/assets/js/workbox-v3.6.3/workbox-sw.js");
            workbox.setConfig({modulePathPrefix: "/assets/js/workbox-v3.6.3"});

            self.__precacheManifest = [{"url":"/2021/10/06/ospp-final-wechaty-piggy-bro/","revision":"a949af98abfb9c1c8715998fa376f89a"},{"url":"/2021/10/06/ospp-final-term-qq-puppet/","revision":"dcc8d8f268bd512eb7af76491733a3d8"},{"url":"/2021/10/05/ospp-final-term-wechaty-itchat-puppet/","revision":"b92f8fa5ae4315e293fe4cc5a20f699f"},{"url":"/2021/09/30/ospp-final-cli/","revision":"221bffae64e805320c9d30598f68faec"},{"url":"/2021/09/29/ospp-final-term-wechaty-puppet-lark/","revision":"b4892df3c3ec80a95a2799ddc6def905"}];
            // set names for both precache & runtime cache
workbox.core.setCacheNameDetails({
    prefix: 'Wechaty',
    suffix: 'v1',
    precache: 'precache',
    runtime: 'runtime-cache'
});

// let Service Worker take control of pages ASAP
workbox.skipWaiting();
workbox.clientsClaim();

// let Workbox handle our precache list
workbox.precaching.precacheAndRoute(self.__precacheManifest);

// use `networkFirst` strategy for `*.html`, like all my posts
workbox.routing.registerRoute(
    /\.html$/,
    workbox.strategies.networkFirst()
);

// use `cacheFirst` strategy for images
workbox.routing.registerRoute(
    /assets\/(img|icons)/,
    workbox.strategies.cacheFirst()
);

// third party files
workbox.routing.registerRoute(
    /^https?:\/\/cdn.staticfile.org/,
    workbox.strategies.staleWhileRevalidate()
);
