'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "85a184f6cea621f179ffc45454127975",
"assets/AssetManifest.bin.json": "54a2637ce97bf8ea91a174b2b946fdf2",
"assets/AssetManifest.json": "1eb42a3d492c4c5864439f20f00a1216",
"assets/assets/fonts/rubik/Rubik-Black.ttf": "2a3b9f77607c7b691e81090c4edba341",
"assets/assets/fonts/rubik/Rubik-Bold.ttf": "627d0e537f4a06a535ae956e4a87837f",
"assets/assets/fonts/rubik/Rubik-ExtraBold.ttf": "34215c81c17466f7aa764b441fa348df",
"assets/assets/fonts/rubik/Rubik-Light.ttf": "86699cab89559b6f5ffd4887cb5c7a7c",
"assets/assets/fonts/rubik/Rubik-Medium.ttf": "e785acbf5775e9bec2129f4967a75472",
"assets/assets/fonts/rubik/Rubik-Regular.ttf": "46df28800514364ef2766f74386b1bd3",
"assets/assets/fonts/rubik/Rubik-SemiBold.ttf": "742cf1e6b879de2de937aa287fddece4",
"assets/assets/images/111111.PNG": "d45f20ae04eed7e6691a48491302bd03",
"assets/assets/images/agent.png": "2223ce9d06ef2db0b724680454315460",
"assets/assets/images/Contact-Center-Icon.png": "ff4de549d4af600c1dfeee5e8882bc8c",
"assets/assets/images/icon/bro.png": "cf5ba9c37f3a1753812d3975f05ef53e",
"assets/assets/images/icon/broadcast.svg": "3c37eceab98ee34e98d5c5720763f615",
"assets/assets/images/icon/chat.png": "e8bf29d12fc0ff70e3d60805313a8443",
"assets/assets/images/icon/chat.svg": "953cc3c6c3771cc2e365593a7ac3bd2d",
"assets/assets/images/icon/check-card.svg": "58d11b81850390bb9c3a809d81656e4d",
"assets/assets/images/icon/home.svg": "2be9d13a9e840a1549e0db9a3723ffb6",
"assets/assets/images/icon/hoo.png": "eac3895d12013bf2dd9d89826db69a7f",
"assets/assets/images/icon/identity_card.svg": "382135ad41871aee879ca9b52f90718e",
"assets/assets/images/icon/Image.svg": "5644cdede62598809cfe81caf1dcc288",
"assets/assets/images/icon/l1.svg": "40acdfe79f79b1541b62ea4038d3142f",
"assets/assets/images/icon/l2.svg": "371fd9668a8ccbf0804e0e607c1cba3f",
"assets/assets/images/icon/l4.svg": "de7f7e611a0b22ffbaf120041e713065",
"assets/assets/images/icon/l5.svg": "4c4570d83d2431f22dd41cb1d9279bed",
"assets/assets/images/icon/logout.svg": "094603415bb631bc333cac253876636d",
"assets/assets/images/icon/loo.png": "3b8a7f539986e6e954885f916743684a",
"assets/assets/images/icon/Search.png": "0b44047324108adee761ed3f51e9d807",
"assets/assets/images/icon/Search.svg": "ab59ba17eb590deef1fac7b45faa957a",
"assets/assets/images/icon/Search_Magnifying_Glass.svg": "d4a168df88fc8c4a0f69f9deddeb38f9",
"assets/assets/images/icon/Send.svg": "f76ccf967f9053c1b8bcc9cdeb3e4436",
"assets/assets/images/icon/session.png": "93f75b89642144e6665ddbf07007a08c",
"assets/assets/images/icon/support.svg": "51c4212649aa532ecc98b3289ad315d2",
"assets/assets/images/icon/user-block.svg": "e83d09d6e6a2cb660c03af754d6ed066",
"assets/assets/images/icon/user.svg": "a376fc2df07b5a9e7676e7c1747130c7",
"assets/assets/images/icon/Vector.svg": "2b14e5cfa005e97183bee1d0cb2a3692",
"assets/assets/images/logo.png": "5a90695b84f9192a52c5fe28badefff0",
"assets/FontManifest.json": "6cf016d4639bed3a4806415b9b17d1bd",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "22e6f658d01cff2f38a323e0f9d9292a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/packages/flutter_sound/assets/js/async_processor.js": "1665e1cb34d59d2769956d2f14290274",
"assets/packages/flutter_sound/assets/js/tau_web.js": "32cc693445f561133647b10d1b97ca07",
"assets/packages/flutter_sound_web/howler/howler.js": "3030c6101d2f8078546711db0d1a24e9",
"assets/packages/flutter_sound_web/src/flutter_sound.js": "3c26fcc60917c4cbaa6a30a231f7d4d8",
"assets/packages/flutter_sound_web/src/flutter_sound_player.js": "b14f8d190230d77c02ffc51ce962ce80",
"assets/packages/flutter_sound_web/src/flutter_sound_recorder.js": "0ec45f8c46d7ddb18691714c0c7348c8",
"assets/packages/flutter_sound_web/src/flutter_sound_stream_processor.js": "48d52b8f36a769ea0e90cf9e58eddfa7",
"assets/packages/iconsax_flutter/fonts/FlutterIconsax.ttf": "76bd55cc08e511bb603cc53003b81051",
"assets/packages/syncfusion_flutter_datagrid/assets/font/FilterIcon.ttf": "c17d858d09fb1c596ef0adbf08872086",
"assets/packages/syncfusion_flutter_datagrid/assets/font/UnsortIcon.ttf": "6d8ab59254a120b76bf53f167e809470",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "d1cbd9f8a746ebdf52834d034daba228",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "93da29843318f1c8071f60f31484d557",
"icons/Icon-192.png": "5ab783e66b42326780ad1f9743136af2",
"icons/Icon-512.png": "d684bf235ad22425f0a9dc259d9036ee",
"icons/Icon-maskable-192.png": "5ab783e66b42326780ad1f9743136af2",
"icons/Icon-maskable-512.png": "d684bf235ad22425f0a9dc259d9036ee",
"icons/Icon1-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon1-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon1-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon1-maskable1-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"index.html": "a417d056ad7ab4bc3e45f528de5d2136",
"/": "a417d056ad7ab4bc3e45f528de5d2136",
"main.dart.js": "9e42f2cbe85acebcc6539032e26a3bcb",
"manifest.json": "8a4bf8001d5cc67e4bf983d7ddc2d8bb",
"version.json": "878b2c0279c5d2719ac547857ebe97e4"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
