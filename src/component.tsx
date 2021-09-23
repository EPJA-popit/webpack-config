import React from "react";
import ReactDOM from "react-dom";

import jsImg from './assets/js.jpeg';

const path = __webpack_public_path__ + 'stonks.jpeg'

const Hello = () => (
    <div>
        <img src={jsImg}/>
    </div>
);

ReactDOM.render(<Hello />, document.getElementById('root'));