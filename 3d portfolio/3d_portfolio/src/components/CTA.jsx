import { Link } from "react-router-dom";
import { styles } from "../styles";

const CTA = () => {
  return (
    <section className="cta">
      <p className={styles.sectionHeadText}>
        Have a project in mind? <br className="sm:block hidden" />
        <p className={styles.sectionSubText}>Let’s build something together!</p>
      </p>
      <br className="sm:block hidden" />
      <button className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary">
        <Link to="/contact">Contact</Link>
      </button>
    </section>
  );
};

export default CTA;
