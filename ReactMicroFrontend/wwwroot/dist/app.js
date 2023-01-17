var $ly1wG$reactjsxruntime = require("react/jsx-runtime");
require("react");
var $ly1wG$reactdom = require("react-dom");
var $ly1wG$muimaterialButton = require("@mui/material/Button");

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}




window.renderApp = ()=>{
    const domElement = document.getElementById("react-app") || document.querySelector("#react-app");
    if (domElement) (0, ($parcel$interopDefault($ly1wG$reactdom))).render(/*#__PURE__*/ (0, $ly1wG$reactjsxruntime.jsxs)((0, $ly1wG$reactjsxruntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, $ly1wG$reactjsxruntime.jsx)("h1", {
                children: "Hello, this a page build with React"
            }),
            /*#__PURE__*/ (0, $ly1wG$reactjsxruntime.jsx)("br", {}),
            /*#__PURE__*/ (0, $ly1wG$reactjsxruntime.jsx)((0, ($parcel$interopDefault($ly1wG$muimaterialButton))), {
                variant: "contained",
                children: "This is a Button from Material UI"
            })
        ]
    }), domElement);
};


//# sourceMappingURL=app.js.map
