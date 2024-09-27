import React, { FC } from 'react';
import { Map, GeolocationControl, Placemark } from '@pbe/react-yandex-maps';
import { HiComputerDesktop } from 'react-icons/hi2';
import { BsTelephoneInbound, BsCompass, BsCash } from 'react-icons/bs';
import { LiaTruckPickupSolid } from 'react-icons/lia';
import { FaRegCreditCard } from 'react-icons/fa6';
import styles from './delivery.module.css';

const Delivery: FC = () => {
  return (
    <>
      <h1 className={styles.title}>Delivery Card</h1>
      <Map
        defaultState={{
          center: [54.70508, 20.569911],
          zoom: 9,
          controls: [],
        }}
        width={'100%'}
        height={'560px'}
      >
        <GeolocationControl options={{ float: 'left' }} />
        <Placemark geometry={[54.70508, 20.569911]} />
      </Map>
      <div className={styles.deliveryList}>
        <h2 className={styles.deliveryList__title}>Как сделать заказ</h2>
        <ul className={styles.deliveryList__info}>
          <li className={styles.deliveryList__info__item}>
            <HiComputerDesktop className={styles.deliveryList__info__icon} />
            <h3 className={styles.deliveryList__info__text}>На сайте</h3>
            <p>Вы можете выбрать товар в разделе "Каталог"</p>
          </li>
          <li className={styles.deliveryList__info__item}>
            <BsTelephoneInbound className={styles.deliveryList__info__icon} />
            <h3 className={styles.deliveryList__info__text}>По телефону</h3>
            <p>+7 (999) 999-99-99</p>
            <p>Ежедневно с 9:00 до 20:00</p>
          </li>
        </ul>
        <h2 className={styles.deliveryList__title}>Как получить заказ</h2>
        <ul className={styles.deliveryList__info}>
          <li className={styles.deliveryList__info__item}>
            <BsCompass className={styles.deliveryList__info__icon} />
            <h3 className={styles.deliveryList__info__text}>Доставка курьером</h3>
            <p>Стоимость доставки рассчитывается индивидуально</p>
          </li>
          <li className={styles.deliveryList__info__item}>
            <LiaTruckPickupSolid className={styles.deliveryList__info__icon}/>
            <h3 className={styles.deliveryList__info__text}>Самовывоз</h3>
            <p>Можете выбрать пункт самовывоза</p>
          </li>
        </ul>
        <h2 className={styles.deliveryList__title}>Способы оплаты</h2>
        <ul className={styles.deliveryList__info}>
          <li className={styles.deliveryList__info__item}>
            <BsCash className={styles.deliveryList__info__icon} />
            <h3 className={styles.deliveryList__info__text}>Наличными при получении</h3>
          </li>
          <li className={styles.deliveryList__info__item}>
            <FaRegCreditCard className={styles.deliveryList__info__icon} />
            <h3 className={styles.deliveryList__info__text}>Банковской картой</h3>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Delivery;
