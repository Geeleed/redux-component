// วิธีใช้งาน
// ให้นำ component นี้ไป wrap ที่ root component ที่ต้องการให้เข้าถึง state ได้ จากนั้นเรียกใช้
"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAppStore = exports.useAppSelector = exports.useAppDispatch = exports.makeStore = exports.actions = void 0;
var globalStates_1 = require("@/app/globalStates");
// const globalStates = [
//   // example state 1
//   {
//     name: "exampleCounter",
//     initialState: { exampleValue: 0 },
//     reducers: {
//       exampleSetValue: (state: any, action: PayloadAction) => {
//         state.exampleValue = action.payload;
//       },
//       exampleIncrease: (state: any) => {
//         state.exampleValue = state.exampleValue + 1;
//       },
//       exampleDecrease: (state: any) => {
//         state.exampleValue = state.exampleValue - 1;
//       },
//     },
//   },
//   // example state 2
//   {
//     name: "exampleString",
//     initialState: { value: "Hello world" },
//     reducers: {
//       exampleSetValue: (state: any, action: PayloadAction) => {
//         state.value = action.payload;
//       },
//     },
//   },
// ];
// ตัวอย่างการเรียกค่ากับการเซตค่าของ state ใน component
// const dispatch = useAppDispatch(); เพื่อประกาศฟังก์ชันสำหรับการเรียกใช้ actions
// const readState = useAppSelector((state:RootState) => state.exampleCounter.exampleValue); เพื่ออ่านค่า state
// <div onClick={() => dispatch(actions.exampleCounter.exampleSetValue(300))}>Set</div>
function GlobalStateWraper(_a) {
    var children = _a.children;
    var storeRef = (0, react_1.useRef)();
    if (!storeRef.current)
        storeRef.current = (0, exports.makeStore)();
    return (<react_redux_1.Provider store={storeRef.current} children={undefined}>
      {children}
    </react_redux_1.Provider>);
}
exports.default = GlobalStateWraper;
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var toolkit_1 = require("@reduxjs/toolkit");
var react_redux_2 = require("react-redux");
var reducers = {};
var actions = {};
exports.actions = actions;
globalStates_1.default.forEach(function (item) {
    var slice = {
        name: item.name,
        initialState: item.initialState,
        reducers: item.reducers,
    };
    var created = (0, toolkit_1.createSlice)(slice);
    reducers[item.name] = created.reducer;
    actions[item.name] = created.actions;
});
var makeStore = function () { return (0, toolkit_1.configureStore)({ reducer: reducers }); };
exports.makeStore = makeStore;
exports.useAppDispatch = react_redux_2.useDispatch;
exports.useAppSelector = react_redux_2.useSelector;
exports.useAppStore = react_redux_2.useStore;
