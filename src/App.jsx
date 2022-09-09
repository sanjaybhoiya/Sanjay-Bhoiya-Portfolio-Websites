import React from "react";
import styles from "./style";
import {
  Navbar,
  Billing,
  Business,
  CardDeal,
  CTA,
  Clients,
  Stats,
  Testimonials,
  Footer,
  Hero,
  GetStarted,
  FeedbackCard,
  Button,
} from "./components";

const App = () => (
  <div className="bg-primary w-full text-white overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexcenter}`}>
      <div classname={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div classname={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div classname={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <CTA />
        <Footer />
        <GetStarted />
        <FeedbackCard />
        <Button />
      </div>
    </div>
  </div>
);

export default App;
