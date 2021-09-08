"use strict";
(() => {
var exports = {};
exports.id = "pages/api/news";
exports.ids = ["pages/api/news"];
exports.modules = {

/***/ "./lib/mongodb.js":
/*!************************!*\
  !*** ./lib/mongodb.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "connectToDatabase": () => (/* binding */ connectToDatabase)
/* harmony export */ });
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ "mongodb");
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);

const uri = process.env.MONGODB_URI;
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true
};
let client;
let clientPromise;

if (!process.env.MONGODB_URI) {
  throw new Error('Please add your Mongo URI to .env.local');
}

if (true) {
  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR (Hot Module Replacement).
  if (!global._mongoClientPromise) {
    client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }

  clientPromise = global._mongoClientPromise;
} else {} // Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientPromise);
let cached = global.mongo;

if (!cached) {
  cached = global.mongo = {
    conn: null,
    promise: null
  };
}

async function connectToDatabase() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true
    };
    cached.promise = mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect(process.env.MONGODB_URI, opts).then(client => {
      return {
        client,
        db: client.db(process.env.MONGODB_DB)
      };
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

/***/ }),

/***/ "./pages/api/news.ts":
/*!***************************!*\
  !*** ./pages/api/news.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/mongodb */ "./lib/mongodb.js");

async function handler(req, res) {
  const {
    db
  } = await (0,_lib_mongodb__WEBPACK_IMPORTED_MODULE_0__.connectToDatabase)();
  const news = await db.collection("news").find({}).toArray();
  res.status(200).json(news);
}

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/news.ts"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvYXBpL25ld3MuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBLE1BQU1DLEdBQUcsR0FBR0MsT0FBTyxDQUFDQyxHQUFSLENBQVlDLFdBQXhCO0FBQ0EsTUFBTUMsT0FBTyxHQUFHO0FBQ2RDLEVBQUFBLGtCQUFrQixFQUFFLElBRE47QUFFZEMsRUFBQUEsZUFBZSxFQUFFO0FBRkgsQ0FBaEI7QUFLQSxJQUFJQyxNQUFKO0FBQ0EsSUFBSUMsYUFBSjs7QUFFQSxJQUFJLENBQUNQLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxXQUFqQixFQUE4QjtBQUM1QixRQUFNLElBQUlNLEtBQUosQ0FBVSx5Q0FBVixDQUFOO0FBQ0Q7O0FBRUQsSUFBSSxNQUF3QztBQUMxQztBQUNBO0FBQ0EsTUFBSSxDQUFDQyxNQUFNLENBQUNDLG1CQUFaLEVBQWlDO0FBQy9CSixJQUFBQSxNQUFNLEdBQUcsSUFBSVIsZ0RBQUosQ0FBZ0JDLEdBQWhCLEVBQXFCSSxPQUFyQixDQUFUO0FBQ0FNLElBQUFBLE1BQU0sQ0FBQ0MsbUJBQVAsR0FBNkJKLE1BQU0sQ0FBQ0ssT0FBUCxFQUE3QjtBQUNEOztBQUNESixFQUFBQSxhQUFhLEdBQUdFLE1BQU0sQ0FBQ0MsbUJBQXZCO0FBQ0QsQ0FSRCxNQVFPLEdBTVA7QUFDQTs7O0FBQ0EsaUVBQWVILGFBQWY7QUFFQSxJQUFJSyxNQUFNLEdBQUdILE1BQU0sQ0FBQ0ksS0FBcEI7O0FBRUEsSUFBRyxDQUFDRCxNQUFKLEVBQVk7QUFDVkEsRUFBQUEsTUFBTSxHQUFHSCxNQUFNLENBQUNJLEtBQVAsR0FBZTtBQUFDQyxJQUFBQSxJQUFJLEVBQUUsSUFBUDtBQUFhQyxJQUFBQSxPQUFPLEVBQUU7QUFBdEIsR0FBeEI7QUFDRDs7QUFFTSxlQUFlQyxpQkFBZixHQUFtQztBQUN4QyxNQUFHSixNQUFNLENBQUNFLElBQVYsRUFBZTtBQUNiLFdBQU9GLE1BQU0sQ0FBQ0UsSUFBZDtBQUNEOztBQUNELE1BQUcsQ0FBQ0YsTUFBTSxDQUFDRyxPQUFYLEVBQW1CO0FBQ2pCLFVBQU1FLElBQUksR0FBRztBQUNYWixNQUFBQSxlQUFlLEVBQUUsSUFETjtBQUVYRCxNQUFBQSxrQkFBa0IsRUFBRTtBQUZULEtBQWI7QUFLQVEsSUFBQUEsTUFBTSxDQUFDRyxPQUFQLEdBQWlCakIsd0RBQUEsQ0FBb0JFLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxXQUFoQyxFQUE2Q2UsSUFBN0MsRUFBbURDLElBQW5ELENBQXlEWixNQUFELElBQVc7QUFDbEYsYUFBTTtBQUNKQSxRQUFBQSxNQURJO0FBRUphLFFBQUFBLEVBQUUsRUFBRWIsTUFBTSxDQUFDYSxFQUFQLENBQVVuQixPQUFPLENBQUNDLEdBQVIsQ0FBWW1CLFVBQXRCO0FBRkEsT0FBTjtBQUlELEtBTGdCLENBQWpCO0FBTUQ7O0FBQ0RSLEVBQUFBLE1BQU0sQ0FBQ0UsSUFBUCxHQUFjLE1BQU1GLE1BQU0sQ0FBQ0csT0FBM0I7QUFDQSxTQUFPSCxNQUFNLENBQUNFLElBQWQ7QUFDRDs7Ozs7Ozs7Ozs7Ozs7O0FDekREO0FBRWUsZUFBZU8sT0FBZixDQUF1QkMsR0FBdkIsRUFBNENDLEdBQTVDLEVBQWtFO0FBRTdFLFFBQU07QUFBRUosSUFBQUE7QUFBRixNQUFTLE1BQU1ILCtEQUFpQixFQUF0QztBQUVBLFFBQU1RLElBQUksR0FBRyxNQUFNTCxFQUFFLENBQ2hCTSxVQURjLENBQ0gsTUFERyxFQUVkQyxJQUZjLENBRVQsRUFGUyxFQUdkQyxPQUhjLEVBQW5CO0FBS0FKLEVBQUFBLEdBQUcsQ0FBQ0ssTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCTCxJQUFyQjtBQUNIOzs7Ozs7Ozs7O0FDYkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvbW9uZ29kYi5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvbmV3cy50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb2RiXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tICdtb25nb2RiJ1xyXG5cclxuY29uc3QgdXJpID0gcHJvY2Vzcy5lbnYuTU9OR09EQl9VUklcclxuY29uc3Qgb3B0aW9ucyA9IHtcclxuICB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWUsXHJcbiAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxyXG59XHJcblxyXG5sZXQgY2xpZW50XHJcbmxldCBjbGllbnRQcm9taXNlXHJcblxyXG5pZiAoIXByb2Nlc3MuZW52Lk1PTkdPREJfVVJJKSB7XHJcbiAgdGhyb3cgbmV3IEVycm9yKCdQbGVhc2UgYWRkIHlvdXIgTW9uZ28gVVJJIHRvIC5lbnYubG9jYWwnKVxyXG59XHJcblxyXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcclxuICAvLyBJbiBkZXZlbG9wbWVudCBtb2RlLCB1c2UgYSBnbG9iYWwgdmFyaWFibGUgc28gdGhhdCB0aGUgdmFsdWVcclxuICAvLyBpcyBwcmVzZXJ2ZWQgYWNyb3NzIG1vZHVsZSByZWxvYWRzIGNhdXNlZCBieSBITVIgKEhvdCBNb2R1bGUgUmVwbGFjZW1lbnQpLlxyXG4gIGlmICghZ2xvYmFsLl9tb25nb0NsaWVudFByb21pc2UpIHtcclxuICAgIGNsaWVudCA9IG5ldyBNb25nb0NsaWVudCh1cmksIG9wdGlvbnMpXHJcbiAgICBnbG9iYWwuX21vbmdvQ2xpZW50UHJvbWlzZSA9IGNsaWVudC5jb25uZWN0KClcclxuICB9XHJcbiAgY2xpZW50UHJvbWlzZSA9IGdsb2JhbC5fbW9uZ29DbGllbnRQcm9taXNlXHJcbn0gZWxzZSB7XHJcbiAgLy8gSW4gcHJvZHVjdGlvbiBtb2RlLCBpdCdzIGJlc3QgdG8gbm90IHVzZSBhIGdsb2JhbCB2YXJpYWJsZS5cclxuICBjbGllbnQgPSBuZXcgTW9uZ29DbGllbnQodXJpLCBvcHRpb25zKVxyXG4gIGNsaWVudFByb21pc2UgPSBjbGllbnQuY29ubmVjdCgpXHJcbn1cclxuXHJcbi8vIEV4cG9ydCBhIG1vZHVsZS1zY29wZWQgTW9uZ29DbGllbnQgcHJvbWlzZS4gQnkgZG9pbmcgdGhpcyBpbiBhXHJcbi8vIHNlcGFyYXRlIG1vZHVsZSwgdGhlIGNsaWVudCBjYW4gYmUgc2hhcmVkIGFjcm9zcyBmdW5jdGlvbnMuXHJcbmV4cG9ydCBkZWZhdWx0IGNsaWVudFByb21pc2VcclxuXHJcbmxldCBjYWNoZWQgPSBnbG9iYWwubW9uZ29cclxuXHJcbmlmKCFjYWNoZWQpIHtcclxuICBjYWNoZWQgPSBnbG9iYWwubW9uZ28gPSB7Y29ubjogbnVsbCwgcHJvbWlzZTogbnVsbH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNvbm5lY3RUb0RhdGFiYXNlKCkge1xyXG4gIGlmKGNhY2hlZC5jb25uKXtcclxuICAgIHJldHVybiBjYWNoZWQuY29ublxyXG4gIH1cclxuICBpZighY2FjaGVkLnByb21pc2Upe1xyXG4gICAgY29uc3Qgb3B0cyA9IHtcclxuICAgICAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxyXG4gICAgICB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWUsXHJcbiAgICB9XHJcblxyXG4gICAgY2FjaGVkLnByb21pc2UgPSBNb25nb0NsaWVudC5jb25uZWN0KHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJLCBvcHRzKS50aGVuKChjbGllbnQpID0+e1xyXG4gICAgICByZXR1cm57XHJcbiAgICAgICAgY2xpZW50LFxyXG4gICAgICAgIGRiOiBjbGllbnQuZGIocHJvY2Vzcy5lbnYuTU9OR09EQl9EQiksXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG4gIGNhY2hlZC5jb25uID0gYXdhaXQgY2FjaGVkLnByb21pc2VcclxuICByZXR1cm4gY2FjaGVkLmNvbm5cclxufVxyXG4iLCJpbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0J1xyXG5pbXBvcnQge2Nvbm5lY3RUb0RhdGFiYXNlfSBmcm9tICcuLi8uLi9saWIvbW9uZ29kYidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpIHtcclxuICAgIFxyXG4gICAgY29uc3QgeyBkYiB9ID0gYXdhaXQgY29ubmVjdFRvRGF0YWJhc2UoKTtcclxuXHJcbiAgICBjb25zdCBuZXdzID0gYXdhaXQgZGJcclxuICAgICAgICAuY29sbGVjdGlvbihcIm5ld3NcIilcclxuICAgICAgICAuZmluZCh7fSlcclxuICAgICAgICAudG9BcnJheSgpO1xyXG5cclxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKG5ld3MpXHJcbn1cclxuXHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbmdvZGJcIik7Il0sIm5hbWVzIjpbIk1vbmdvQ2xpZW50IiwidXJpIiwicHJvY2VzcyIsImVudiIsIk1PTkdPREJfVVJJIiwib3B0aW9ucyIsInVzZVVuaWZpZWRUb3BvbG9neSIsInVzZU5ld1VybFBhcnNlciIsImNsaWVudCIsImNsaWVudFByb21pc2UiLCJFcnJvciIsImdsb2JhbCIsIl9tb25nb0NsaWVudFByb21pc2UiLCJjb25uZWN0IiwiY2FjaGVkIiwibW9uZ28iLCJjb25uIiwicHJvbWlzZSIsImNvbm5lY3RUb0RhdGFiYXNlIiwib3B0cyIsInRoZW4iLCJkYiIsIk1PTkdPREJfREIiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibmV3cyIsImNvbGxlY3Rpb24iLCJmaW5kIiwidG9BcnJheSIsInN0YXR1cyIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9