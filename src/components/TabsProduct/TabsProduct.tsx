import React, { FC, useState } from 'react';
import styles from './tabsProduct.module.css';
import DescriptionTabContent from '../DescriptionTabContent/DescriptionTabContent';
import AboutBrandTabContent from '../AboutBrandTabContent/AboutBrandTabContent';
import CompositionTabContent from '../CompositionTabContent/CompositionTabContent';
import { IProps } from '../../services/utils/types';

// Список табов
const tabs = ['Description', 'About the brand', 'Composition'];


const TabsProduct: FC<IProps> = ({ product }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  // Устанавливаем активный таб
  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  // Показываем блок по активному табу
  const renderTabContent = () => {
    switch (activeTab) {
      case 'Description':
        return <DescriptionTabContent product={product} />;
      case 'About the brand':
        return <AboutBrandTabContent />;
      case 'Composition':
        return <CompositionTabContent />;
      default:
        return null;
    }
  };

  return (
    <>
      <ul className={styles.tabsProduct}>
        {tabs.map((tab) => (
          <li
            className={`${styles.tabsProduct__item} ${
              activeTab === tab ? styles.tabsProduct__itemActive : ''
            }`}
            key={tab}
            onClick={() => handleTabClick(tab)}
          >
            {tab}
          </li>
        ))}
      </ul>
      <div className={styles.tabsProduct__content}>{renderTabContent()}</div>
    </>
  );
};

export default TabsProduct;
