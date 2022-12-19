'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "dc51188ff39dcb3486c8ed090b7c378e",
"index.html": "b44ce28c18f7a5ad7a3557a3d6740c62",
"/": "b44ce28c18f7a5ad7a3557a3d6740c62",
"main.dart.js": "eb6e2441ee26731877ec6449a5d62631",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "8d8f32636e3ea873885ae1a08db18fc9",
"assets/AssetManifest.json": "11ec0a748e1e685750ecf7bf883c7730",
"assets/NOTICES": "fd18d1debad8b6bf8d12151c72926500",
"assets/FontManifest.json": "e3637cec141ff037b4151edf1c0411cb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/csc_picker/lib/assets/country.json": "11b8187fd184a2d648d6b5be8c5e9908",
"assets/packages/fluttericon/lib/fonts/Octicons.ttf": "7242d2fe9e36eb4193d2bc7e521779bf",
"assets/packages/fluttericon/lib/fonts/Maki.ttf": "9ecdcd7d24a2461a55d532b86b2740bd",
"assets/packages/fluttericon/lib/fonts/Brandico.ttf": "791921e9b25210e2551b6eda3f86c733",
"assets/packages/fluttericon/lib/fonts/Entypo.ttf": "58edfaf27b1032ea4778b69297c02b5a",
"assets/packages/fluttericon/lib/fonts/Fontelico.ttf": "3a1e1cecf0a3eae6be5cba3677379ba2",
"assets/packages/fluttericon/lib/fonts/Iconic.ttf": "34e12214307f5f7cf7bc62086fbf55a3",
"assets/packages/fluttericon/lib/fonts/LineariconsFree.ttf": "276b1d61e45eb9b2dde9482545d9e3ac",
"assets/packages/fluttericon/lib/fonts/RpgAwesome.ttf": "99232001effca5cf2b5aa92cc3f3e892",
"assets/packages/fluttericon/lib/fonts/Typicons.ttf": "3386cae1128e52caf268508d477fb660",
"assets/packages/fluttericon/lib/fonts/FontAwesome.ttf": "799bb4e5c577847874f20bd0e9b38a9d",
"assets/packages/fluttericon/lib/fonts/Zocial.ttf": "c29d6e34d8f703a745c6f18d94ce316d",
"assets/packages/fluttericon/lib/fonts/WebSymbols.ttf": "4fd66aa74cdc6e5eaff0ec916ac269c6",
"assets/packages/fluttericon/lib/fonts/Linecons.ttf": "2d0ac407ed11860bf470cb01745fb144",
"assets/packages/fluttericon/lib/fonts/FontAwesome5.ttf": "221b27a41202ddd33990e299939e4504",
"assets/packages/fluttericon/lib/fonts/Elusive.ttf": "23f24df0388819e94db2b3c19841841c",
"assets/packages/fluttericon/lib/fonts/MfgLabs.ttf": "09daa533ea11600a98e3148b7531afe3",
"assets/packages/fluttericon/lib/fonts/Meteocons.ttf": "8b9c7982496155bb39c67eaf2a243731",
"assets/packages/fluttericon/lib/fonts/ModernPictograms.ttf": "5046c536516be5b91c15eb7795e0352d",
"assets/packages/country_state_city_picker/lib/assets/country.json": "11b8187fd184a2d648d6b5be8c5e9908",
"assets/shaders/ink_sparkle.frag": "d7374054423e765d641c1d61ca950095",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/beekeeper6.jpeg": "9eb772e881260917c97f33d65bb38a4f",
"assets/assets/images/book.png": "8b216beb57fb7bdeb94046ed766e1210",
"assets/assets/images/apple-512.png": "b7dea37fe80a8c8167078c55e9c6323d",
"assets/assets/images/Halfdevelopment%2520white.png": "398b804e55375a958989cdd8a9caf34d",
"assets/assets/images/beekeeper7.png": "fcf5eab527eaa8545e93510511c3a029",
"assets/assets/images/buch.png": "b0227ca9fa6c556b39abfded9fba3758",
"assets/assets/images/apfel.png": "af6b8451b3b076fd00e939e019d78507",
"assets/assets/images/Humans2.png": "f39da117031986d9cf6046dfb45eb5cf",
"assets/assets/images/beekeeper.jpg": "702e7493589d5e405446d40ed53731fb",
"assets/assets/images/beekeeper.png": "c0736422c2f864cdc97c9d8b01f9e94d",
"assets/assets/images/Human1.png": "942afbc4aff2f8120ad6e9e6c852ebd1",
"assets/assets/images/bees.jpg": "9160b1ccccfed3d5a5c13b75feb831c3",
"assets/assets/images/beekeeper1.jpeg": "9d3d1c6685de346b890fc8462beb3486",
"assets/assets/images/bee.png": "ca0d9da41e9cd35f984cb8fe947e03d9",
"assets/assets/images/Halfdevelopment%2520red.png": "6763827b407e2a02f5b18bcef1c87013",
"assets/assets/images/hive_2.jpg": "3efdd1c9059020367b2cd41bd6b541cc",
"assets/assets/images/hive_3.jpg": "8eff64b4eee7c2d80e9346e92097dbc4",
"assets/assets/images/hive_1.jpg": "5c489c115f4dddefcaa3ac609c7ff865",
"assets/assets/images/beekeeper2.jpeg": "d5a9f0c2e0110113e6f5f42c6addf122",
"assets/assets/images/beekeeper3.jpeg": "e34922fe624d191e2fce6161af2f6520",
"assets/assets/images/halfdevelopment.png": "2283d1f957f2784046c9f6f827ef20b2",
"assets/assets/images/google_logo.png": "ff629c02385f2f3a199b7e0b3065d077",
"assets/assets/images/Human.png": "c0666edd5b758b895b19f3d8f70037a9",
"assets/assets/images/app_logo.png": "c9c877a77e4275c52679b830f677d2f8",
"assets/assets/images/apple-logo.png": "1869a1bd190865c72a67c933eb558608",
"assets/assets/images/Impressum.pdf": "f54d8e6c93b73fa220379f0df52f9c6f",
"assets/assets/images/beekeeper4.jpeg": "10118e4d19a1b618ccd30e128846751f",
"assets/assets/images/beehive.png": "88aa17ac980242d67fbe126145f7ce2b",
"assets/assets/images/paypal.png": "5e9d6deb4ad2b6a291c13b20459d6a43",
"assets/assets/images/bees2.jpg": "1eae983dbc5dfbc67a4c1d0b2bb9aedd",
"assets/assets/images/beekeeper5.jpeg": "7645742c7ddae85757bcd814e0c425a8",
"assets/assets/images/bees1.jpg": "0edcc6c05447e89eaa82af30a9b5c43a",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
