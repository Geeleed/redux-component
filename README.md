# redux-component

component for set global state

วิธีใช้งาน
ให้นำ component นี้ไป wrap ที่ root component ที่ต้องการให้เข้าถึง state ได้ จากนั้นเรียกใ
ตัวอย่างการเรียกค่ากับการเซตค่าของ state ใน component

```bash
const dispatch = useAppDispatch(); // เพื่อประกาศฟังก์ชันสำหรับการเรียกใช้ actions
const readState = useAppSelector((state:RootState) => state.exampleCounter.exampleValue); // เพื่ออ่านค่า state

<div onClick={() => dispatch(actions.exampleCounter.exampleSetValue(300))}>Set</div>
```

สร้างไฟล์ globalStates.ts ไว้ที่ @/app แล้ว export default ตัวอย่างดังนี้

```bash
export default [
  // example state 1
  {
    name: "exampleCounter",
    initialState: { exampleValue: 0 },
    reducers: {
      exampleSetValue: (state: any, action: PayloadAction) => {
        state.exampleValue = action.payload;
      },
      exampleIncrease: (state: any) => {
        state.exampleValue = state.exampleValue + 1;
      },
      exampleDecrease: (state: any) => {
        state.exampleValue = state.exampleValue - 1;
      },
    },
  },
  // example state 2
  {
    name: "exampleString",
    initialState: { value: "Hello world" },
    reducers: {
      exampleSetValue: (state: any, action: PayloadAction) => {
        state.value = action.payload;
      },
    },
  },
];
```
