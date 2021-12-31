import React from 'react';
import styles from  './Main.module.css';
import SampleBox from 'components/SampleBox/SampleBox';
import { Canvas } from 'react-three-fiber';
import Controls from 'components/Controls/Controls';

const Main = () => {
  return (
    <div className={styles.main}>
      <Canvas>
        <SampleBox />
        <Controls />
        <gridHelper />
      </Canvas>
    </div>
  );
}

export default Main;
