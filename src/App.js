import React from 'react';
import { Button } from 'antd';
import styles from './App.less';

console.log(styles)

const App = () => (
  <div className="App">
     <div className={styles.text}>Hello World</div>
    <Button type="primary">Button</Button>
   
  </div>
);

export default App;