(this["webpackJsonpjavascript-calculator"]=this["webpackJsonpjavascript-calculator"]||[]).push([[0],{12:function(_,e,t){"use strict";e.a=function(_){_&&_ instanceof Function&&t.e(3).then(t.bind(null,23)).then((function(e){var t=e.getCLS,a=e.getFID,i=e.getFCP,s=e.getLCP,r=e.getTTFB;t(_),a(_),i(_),s(_),r(_)}))}},16:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__),_Users_dtl_Documents_GitHub_javascript_calculator_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(9),_Users_dtl_Documents_GitHub_javascript_calculator_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(10),_Users_dtl_Documents_GitHub_javascript_calculator_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(2),_Users_dtl_Documents_GitHub_javascript_calculator_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(15),_Users_dtl_Documents_GitHub_javascript_calculator_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(14),react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__),react_dom__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(11),react_dom__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_7__),_index_scss__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(22),_index_scss__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_8__),_reportWebVitals__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(12),react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(8),react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(13),App=function(_React$Component){Object(_Users_dtl_Documents_GitHub_javascript_calculator_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.a)(App,_React$Component);var _super=Object(_Users_dtl_Documents_GitHub_javascript_calculator_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__.a)(App);function App(_){var e;return Object(_Users_dtl_Documents_GitHub_javascript_calculator_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.a)(this,App),(e=_super.call(this,_)).state={smallDisplay:"",mainDisplay:"0"},e.handleKeyPress=e.handleKeyPress.bind(Object(_Users_dtl_Documents_GitHub_javascript_calculator_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.a)(e)),e.clearMainDisplay=e.clearMainDisplay.bind(Object(_Users_dtl_Documents_GitHub_javascript_calculator_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.a)(e)),e.clearDisplays=e.clearDisplays.bind(Object(_Users_dtl_Documents_GitHub_javascript_calculator_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.a)(e)),e.inputZero=e.inputZero.bind(Object(_Users_dtl_Documents_GitHub_javascript_calculator_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.a)(e)),e.inputNumber=e.inputNumber.bind(Object(_Users_dtl_Documents_GitHub_javascript_calculator_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.a)(e)),e.inputOperator=e.inputOperator.bind(Object(_Users_dtl_Documents_GitHub_javascript_calculator_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.a)(e)),e.inputDecimal=e.inputDecimal.bind(Object(_Users_dtl_Documents_GitHub_javascript_calculator_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.a)(e)),e.equals=e.equals.bind(Object(_Users_dtl_Documents_GitHub_javascript_calculator_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.a)(e)),e}return Object(_Users_dtl_Documents_GitHub_javascript_calculator_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__.a)(App,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeyPress)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKeyPress)}},{key:"handleKeyPress",value:function(_){console.log(_.keyCode),console.log(String.fromCharCode(_.keyCode))}},{key:"clearMainDisplay",value:function(){this.setState({mainDisplay:""})}},{key:"clearDisplays",value:function(){this.setState({smallDisplay:"",mainDisplay:"0",answer:""})}},{key:"inputZero",value:function(){if(!/^[0]/.test(this.state.mainDisplay)||/^(0.)/.test(this.state.mainDisplay))switch(this.state.mainDisplay){case"+":case"-":case"*":case"/":this.clearMainDisplay(),this.setState({smallDisplay:this.state.smallDisplay+this.state.mainDisplay+"0",mainDisplay:"0"});break;default:this.setState({smallDisplay:this.state.smallDisplay+"0",mainDisplay:this.state.mainDisplay+"0"})}}},{key:"inputNumber",value:function(_){var e=document.getElementById(_.target.id).value;switch(this.state.mainDisplay){case"0":this.clearMainDisplay(),this.setState({mainDisplay:e,smallDisplay:this.state.smallDisplay.slice(0,-1)+e});break;case"+":case"-":case"*":case"/":this.clearMainDisplay(),this.setState({mainDisplay:e,smallDisplay:this.state.smallDisplay+this.state.mainDisplay+e});break;default:this.setState({mainDisplay:this.state.mainDisplay+e,smallDisplay:this.state.smallDisplay+e})}}},{key:"inputDecimal",value:function(){if(!/[.]/g.test(this.state.mainDisplay))switch(this.state.mainDisplay){case"0":this.setState({mainDisplay:this.state.mainDisplay+".",smallDisplay:this.state.smallDisplay.slice(0,-1)+"0."});break;case"":case"+":case"-":case"*":case"/":this.clearMainDisplay(),this.setState({smallDisplay:this.state.smallDisplay+this.state.mainDisplay+"0.",mainDisplay:"0."});break;default:console.log(this.state.mainDisplay),this.setState({smallDisplay:this.state.smallDisplay+".",mainDisplay:this.state.mainDisplay+"."})}}},{key:"inputOperator",value:function(_){var e=document.getElementById(_.target.id).value;this.clearMainDisplay(),""!=this.state.answer&&""==this.state.smallDisplay?this.setState({smallDisplay:this.state.answer+e}):(operators.includes(this.state.mainDisplay),this.setState({mainDisplay:e}))}},{key:"equals",value:function equals(){var answer=eval(this.state.smallDisplay);this.setState({smallDisplay:"",mainDisplay:answer,answer:answer})}},{key:"render",value:function(){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_10__.a,{fluid:!0,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_11__.a,{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_10__.a,{id:"calculator",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input",{id:"small-display",style:{gridArea:"small-display"},value:this.state.smallDisplay}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input",{id:"main-display",style:{gridArea:"display"},value:this.state.mainDisplay}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{id:"clear",style:{gridArea:"clear"},onClick:this.clearDisplays,children:"AC"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{id:"divide",style:{gridArea:"divide"},onClick:this.inputOperator,value:"/",children:"/"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{id:"multiply",style:{gridArea:"multiply"},onClick:this.inputOperator,value:"*",children:"X"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{id:"seven",style:{gridArea:"seven"},onClick:this.inputNumber,value:"7",children:"7"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{id:"eight",style:{gridArea:"eight"},onClick:this.inputNumber,value:"8",children:"8"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{id:"nine",style:{gridArea:"nine"},onClick:this.inputNumber,value:"9",children:"9"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{id:"minus",style:{gridArea:"minus"},onClick:this.inputOperator,value:"-",children:"-"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{id:"four",style:{gridArea:"four"},onClick:this.inputNumber,value:"4",children:"4"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{id:"five",style:{gridArea:"five"},onClick:this.inputNumber,value:"5",children:"5"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{id:"six",style:{gridArea:"six"},onClick:this.inputNumber,value:"6",children:"6"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{id:"plus",style:{gridArea:"plus"},onClick:this.inputOperator,value:"+",children:"+"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{id:"one",style:{gridArea:"one"},onClick:this.inputNumber,value:"1",children:"1"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{id:"two",style:{gridArea:"two"},onClick:this.inputNumber,value:"2",children:"2"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{id:"three",style:{gridArea:"three"},onClick:this.inputNumber,value:"3",children:"3"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{id:"zero",style:{gridArea:"zero"},onClick:this.inputZero,value:"0",children:"0"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{id:"decimal",style:{gridArea:"decimal"},onClick:this.inputDecimal,value:".",children:"."}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{id:"equals",style:{gridArea:"equals"},onClick:this.equals,children:"="})]})})})}}]),App}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component),operators=["+","-","*","/"],calculatorKeys=[{keyCode:12,keyTrigger:"clear",gridArea:"clear"},{keyCode:111,keyTrigger:"divide",gridArea:"divide"},{keyCode:106,keyTrigger:"multiply",gridArea:"multiply"},{keyCode:55,keyTrigger:"seven",gridArea:"seven"},{keyCode:56,keyTrigger:"eight",gridArea:"eight"},{keyCode:57,keyTrigger:"nine",gridArea:"nine"},{keyCode:109,keyTrigger:"minus",gridArea:"multiply"},{keyCode:52,keyTrigger:"four",gridArea:"four"},{keyCode:53,keyTrigger:"five",gridArea:"five"},{keyCode:54,keyTrigger:"six",gridArea:"six"},{keyCode:107,keyTrigger:"plus",gridArea:"plus"},{keyCode:49,keyTrigger:"one",gridArea:"one"},{keyCode:50,keyTrigger:"two",gridArea:"two"},{keyCode:51,keyTrigger:"three",gridArea:"three"},{keyCode:48,keyTrigger:"zero",gridArea:"zero"},{keyCode:110,keyTrigger:"decimal",gridArea:"decimal"},{keyCode:13,keyTrigger:"equals",gridArea:"equals"}];console.log("Project complete for now"),console.log("Nice to add - keyboard integration, better styling, hitting empty equals returns undefined - should fix"),react_dom__WEBPACK_IMPORTED_MODULE_7___default.a.render(Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(App,{}),document.getElementById("root")),Object(_reportWebVitals__WEBPACK_IMPORTED_MODULE_9__.a)()},22:function(_,e,t){}},[[16,1,2]]]);
//# sourceMappingURL=main.efde22fd.chunk.js.map