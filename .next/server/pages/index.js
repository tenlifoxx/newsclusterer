(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "default": () => (/* binding */ Main)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\junsu\\OneDrive\\\uBC14\uD0D5 \uD654\uBA74\\news-clusterer\\pages\\index.tsx";





const getStaticProps = async () => {
  const res = await fetch('http://localhost:3000/api/news');
  const data = await res.json();
  return {
    props: {
      newsData: Object.entries(data[0]).slice(1)
    }
  };
};

const ModalPage = ({
  keywords,
  news,
  show,
  setShow
}) => {
  return news ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Modal, {
    size: "lg",
    show: show,
    onHide: () => setShow(false),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Modal.Header, {
      closeButton: true,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Modal.Title, {
        children: keywords.split(',').map(keyword => ` #${keyword} `)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Modal.Body, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Tab.Container, {
        defaultActiveKey: "#link0",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Row, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Col, {
            sm: 4,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.ListGroup, {
              children: news.map((n, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.ListGroup.Item, {
                action: true,
                href: `#link${index}`,
                children: n.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 34,
                columnNumber: 21
              }, undefined))
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 17
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 15
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Col, {
            sm: 8,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Tab.Content, {
              children: news.map((n, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Tab.Pane, {
                eventKey: `#link${index}`,
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
                  children: n.preview
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 45,
                  columnNumber: 23
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                  href: n.url,
                  children: "\uC6D0\uBCF8 \uBCF4\uAE30"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 46,
                  columnNumber: 23
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 44,
                columnNumber: 21
              }, undefined))
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 17
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 7
  }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {}, void 0, false);
};

function Main({
  newsData
}) {
  const {
    0: show,
    1: setShow
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: currentNews,
    1: setCurrentNews
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const {
    0: currentKeyWords,
    1: setCurrentKeyWords
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),
    children: [newsData.map(([keywords, news]) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().card),
        onClick: () => {
          setShow(true);
          setCurrentNews(news);
          setCurrentKeyWords(keywords);
        },
        children: keywords.split(',').map(keyword => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h3", {
          children: ["#", keyword]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 54
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 13
      }, this)
    }, void 0, false)), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(ModalPage, {
      keywords: currentKeyWords,
      news: currentNews,
      show: show,
      setShow: setShow
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 64,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Home_container__1EcsU",
	"card": "Home_card__2SdtB"
};


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZXMvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHZXRTdGF0aWNQcm9wcywgSW5mZXJHZXRTdGF0aWNQcm9wc1R5cGUgfSBmcm9tICduZXh0J1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZXMgZnJvbScuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQge01vZGFsLCBMaXN0R3JvdXAsIFJvdywgQ29sLCBUYWJ9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wczogR2V0U3RhdGljUHJvcHMgPSBhc3luYygpID0+IHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL25ld3MnKVxyXG4gICAgY29uc3QgZGF0YTogSlNPTiA9IGF3YWl0IHJlcy5qc29uKClcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6e1xyXG4gICAgICAgICAgIG5ld3NEYXRhOiBPYmplY3QuZW50cmllcyhkYXRhWzBdKS5zbGljZSgxLClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IE1vZGFsUGFnZSA9ICh7a2V5d29yZHMsbmV3cyxzaG93LHNldFNob3d9KSA9PiB7XHJcbiAgcmV0dXJuKFxyXG4gICAgbmV3cz9cclxuICAgICAgPE1vZGFsIHNpemU9J2xnJ1xyXG4gICAgICAgICAgICBzaG93PXtzaG93fVxyXG4gICAgICAgICAgICBvbkhpZGU9eygpID0+IHNldFNob3coZmFsc2UpfVxyXG4gICAgICA+XHJcbiAgICAgICAgPE1vZGFsLkhlYWRlciBjbG9zZUJ1dHRvbj4gXHJcbiAgICAgICAgICA8TW9kYWwuVGl0bGU+e2tleXdvcmRzLnNwbGl0KCcsJykubWFwKGtleXdvcmQgPT4gYCAjJHtrZXl3b3JkfSBgKX08L01vZGFsLlRpdGxlPlxyXG4gICAgICAgIDwvTW9kYWwuSGVhZGVyPlxyXG4gICAgICAgIDxNb2RhbC5Cb2R5PlxyXG4gICAgICAgICAgPFRhYi5Db250YWluZXIgZGVmYXVsdEFjdGl2ZUtleT1cIiNsaW5rMFwiPlxyXG4gICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgIDxDb2wgc209ezR9PlxyXG4gICAgICAgICAgICAgICAgPExpc3RHcm91cD5cclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld3MubWFwKChuLGluZGV4KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0R3JvdXAuSXRlbSBhY3Rpb24gaHJlZj17YCNsaW5rJHtpbmRleH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgIHtuLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdEdyb3VwLkl0ZW0+KVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L0xpc3RHcm91cD5cclxuICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICA8Q29sIHNtPXs4fT5cclxuICAgICAgICAgICAgICAgIDxUYWIuQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld3MubWFwKChuLGluZGV4KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUYWIuUGFuZSBldmVudEtleT17YCNsaW5rJHtpbmRleH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwPntuLnByZXZpZXd9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZiA9IHtuLnVybH0+7JuQ67O4IOuztOq4sDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L1RhYi5QYW5lPilcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9UYWIuQ29udGVudD5cclxuICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICA8L1RhYi5Db250YWluZXI+XHJcbiAgICAgICAgPC9Nb2RhbC5Cb2R5PlxyXG4gICAgICA8L01vZGFsPiBcclxuICAgIDogPD48Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1haW4oe25ld3NEYXRhfSA6IEluZmVyR2V0U3RhdGljUHJvcHNUeXBlPHR5cGVvZiBnZXRTdGF0aWNQcm9wcz4pe1xyXG4gIGNvbnN0IFtzaG93LCBzZXRTaG93XSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtjdXJyZW50TmV3cywgc2V0Q3VycmVudE5ld3NdID0gdXNlU3RhdGUoW10pXHJcbiAgY29uc3QgW2N1cnJlbnRLZXlXb3JkcyxzZXRDdXJyZW50S2V5V29yZHNdID0gdXNlU3RhdGUoXCJcIilcclxuICByZXR1cm4oXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgIHtcclxuICAgICAgICAgIG5ld3NEYXRhLm1hcCgoW2tleXdvcmRzLG5ld3NdKSA9PiBcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfSBvbkNsaWNrPXsoKSA9PiB7c2V0U2hvdyh0cnVlKTsgc2V0Q3VycmVudE5ld3MobmV3cyk7IHNldEN1cnJlbnRLZXlXb3JkcyhrZXl3b3Jkcyl9fT5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAga2V5d29yZHMuc3BsaXQoJywnKS5tYXAoa2V5d29yZCA9PiA8aDM+I3trZXl3b3JkfTwvaDM+KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgICA8TW9kYWxQYWdlIGtleXdvcmRzID0ge2N1cnJlbnRLZXlXb3Jkc30gbmV3cyA9IHtjdXJyZW50TmV3c30gc2hvdyA9IHtzaG93fSBzZXRTaG93ID0ge3NldFNob3d9PjwvTW9kYWxQYWdlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufSIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIkhvbWVfY29udGFpbmVyX18xRWNzVVwiLFxuXHRcImNhcmRcIjogXCJIb21lX2NhcmRfXzJTZHRCXCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ib290c3RyYXBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInN0eWxlcyIsIk1vZGFsIiwiTGlzdEdyb3VwIiwiUm93IiwiQ29sIiwiVGFiIiwiZ2V0U3RhdGljUHJvcHMiLCJyZXMiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwicHJvcHMiLCJuZXdzRGF0YSIsIk9iamVjdCIsImVudHJpZXMiLCJzbGljZSIsIk1vZGFsUGFnZSIsImtleXdvcmRzIiwibmV3cyIsInNob3ciLCJzZXRTaG93Iiwic3BsaXQiLCJtYXAiLCJrZXl3b3JkIiwibiIsImluZGV4IiwidGl0bGUiLCJwcmV2aWV3IiwidXJsIiwiTWFpbiIsImN1cnJlbnROZXdzIiwic2V0Q3VycmVudE5ld3MiLCJjdXJyZW50S2V5V29yZHMiLCJzZXRDdXJyZW50S2V5V29yZHMiLCJjb250YWluZXIiLCJjYXJkIl0sInNvdXJjZVJvb3QiOiIifQ==