'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './ContactBar.module.css';

export default function ContactBar() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  // Dùng ảnh thay vì emoji
  const allContacts = [
    { 
      icon: '/icons/phone.png', 
      name: 'Gọi điện', 
      link: 'tel:0962293777',
      alt: 'Gọi điện'
    },
    { 
      icon: '/icons/map.png', 
      name: 'Bản đồ', 
      link: 'https://www.google.com/maps/search/s%E1%BB%91+04+d%C3%A3y+n10+t%E1%BB%95+d%C3%A2n+ph%E1%BB%91+s%E1%BB%91+1+ph%C6%B0%E1%BB%9Dng+t%C3%A2y+t%E1%BB%B1u+qu%E1%BA%ADn+b%E1%BA%AFc+t%E1%BB%AB+li%C3%AAm+th%C3%A0nh+ph%E1%BB%91+h%C3%A0+n%E1%BB%99i+vi%E1%BB%87t+nam/@21.0561919,105.7392927,15z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI2MDYwMy4xIKXMDSoASAFQAw%3D%3D',
      alt: 'Bản đồ'
    },
    { 
      icon: '/icons/zalo.png', 
      name: 'Zalo', 
      link: 'https://zalo.me/0962293777',
      alt: 'Zalo'
    },
    { 
      icon: '/icons/messenger.png', 
      name: 'Messenger', 
      link: 'https://m.me/yourpage',
      alt: 'Messenger'
    },
  ];

  // Mobile: hiển thị 4 icon
  // Desktop: chỉ hiển thị Zalo và Messenger (2 icon cuối)
  const contactsToShow = isMobile ? allContacts : allContacts.slice(2);

  return (
    <div className={`${styles.contactBar} ${isMobile ? styles.mobile : styles.desktop}`}>
      {contactsToShow.map((item, idx) => (
        <a
          key={idx}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.contactItem}
        >
          <Image 
            src={item.icon} 
            alt={item.alt}
            width={24}
            height={24}
            className={styles.icon}
          />
          {!isMobile && <span className={styles.label}>{item.name}</span>}
        </a>
      ))}
    </div>
  );
}