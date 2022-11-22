import styles from './style';

const App = () => (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexcenter}`}>
        <div className={`${styles.boxWidth}`}>
          Navbar
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>

      </div>

    </div>
);

export default App