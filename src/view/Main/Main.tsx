import React from 'react';
import styles from  './Main.module.css';
import SampleBox from 'components/SampleBox/SampleBox';
import { Canvas } from 'react-three-fiber';
 
const Main = () => {
  return (
    <div className={styles.main}>
      <Canvas>
        <SampleBox />
      </Canvas>
    </div>
  );
}

export default Main;
