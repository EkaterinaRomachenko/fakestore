import React, { FC, useState } from 'react';
import styles from './tabsProduct.module.css';
import DescriptionTabContent from '../DescriptionTabContent/DescriptionTabContent';
import AboutBrandTabContent from '../AboutBrandTabContent/AboutBrandTabContent';
import ApplicationTabContent from '../ApplicationTabContent/ApplicationTabContent';
import { IProps } from '../../services/utils/types';

// Список табов
const tabs = ['Описание', 'Применение', 'О бренде'];


const TabsProduct: FC<IProps> = ({ product }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  // Устанавливаем активный таб
  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  // Показываем блок по активному табу
  const renderTabContent = () => {
    switch (activeTab) {
      case 'Описание':
        return <DescriptionTabContent product={product} />;
      case 'Применение':
        return <ApplicationTabContent product={product} />;
      case 'О бренде':
        return <AboutBrandTabContent product={product} />;
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
