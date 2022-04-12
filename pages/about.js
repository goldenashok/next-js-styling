import styles from '../styles/about.module.css';

function About() {
    return(
        <>
        <h2>About Us</h2>
        <h3 className={styles.title}>Welcome to About Us</h3>
        <button className='btn btn-primary'>Click Me</button>
        </>
    )
}
export default About;