# autofit.js-react

## usage

```tsx
import { AutoFit } from "autofit.js-react";
import "./App.css";

function App() {
    return (
        <AutoFit id="container" className="container" designWidth="1920" designHeight="1080">
            <div className="block-1">尺寸为固定值的盒子</div>
            <div className="block-2">尺寸为百分比的盒子</div>
        </AutoFit>
    );
}

export default App;
```

## 示例截图

![image-20231009140542025](./docs/images/image-20231009140542025.png)
