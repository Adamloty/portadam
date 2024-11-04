import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPalette, 
  faDesktop, 
  faCode, 
  faBullhorn, 
  faMobileAlt, 
  faGamepad 
} from '@fortawesome/free-solid-svg-icons';
import styles from './Services.module.css';

const Services: React.FC = () => {
  return (
    <div className={styles.servicesWrapper}>
      <section className={styles.headerSection}>
        <div className={styles.headerContainer}>
          <div className={styles.headerContent}>
            <div className={styles.subtitleWrapper}>
              <h2 className={styles.subtitle}>Services</h2>
            </div>
            <div className={styles.titleWrapper}>
              <h1 className={styles.title}>We Provide The Best Solution</h1>
            </div>
          </div>
        </div>
      </section>
      
      <section className={styles.servicesSection}>
        <div className={styles.servicesContainer}>
          <ServiceBox
            icon={faPalette}
            title="Graphic Design"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,"
          />
          <ServiceBox
            icon={faDesktop}
            title="Web Design"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,"
          />
          <ServiceBox
            icon={faCode}
            title="Web Development"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,"
          />
          <ServiceBox
            icon={faBullhorn}
            title="Digital Marketing"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,"
          />
          <ServiceBox
            icon={faMobileAlt}
            title="App Design"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,"
          />
          <ServiceBox
            icon={faGamepad}
            title="Game Design"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,"
          />
        </div>
      </section>
    </div>
  );
};

interface ServiceBoxProps {
  icon: any;  // Changed from string to any to accept FontAwesome icon
  title: string;
  description: string;
}

const ServiceBox: React.FC<ServiceBoxProps> = ({ icon, title, description }) => {
  return (
    <div className={styles.serviceBox}>
      <div className={styles.iconWrapper}>
        <FontAwesomeIcon icon={icon} className={styles.icon} />
      </div>
      <div className={styles.contentWrapper}>
        <h3 className={styles.serviceTitle}>
          <span>{title}</span>
        </h3>
        <p className={styles.serviceDescription}>{description}</p>
      </div>
    </div>
  );
};

export default Services;
