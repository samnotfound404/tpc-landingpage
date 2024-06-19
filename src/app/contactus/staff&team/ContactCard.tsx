"use client";
import React from 'react';
import styles from './ContactCard.module.css';
import info from './Info.json';
import {Image} from "@nextui-org/image";
import Link from 'next/link';

const ContactCard: React.FC = () => {
    console.log("Info data: ", info.Info); // Add this line

    return (
        <div className={styles.cardContainer}>
            {info.Info.map((person, index) => (
                <div key={index} className={styles.card}>
                    <div className={`${styles.cardside} ${styles.front}`}>
                     
                    <div className={styles.imageContainer}>
                        <Image src="/data/logo/iiti.png" alt={person.name} className={styles.profileImage} />
                        
                    </div>
                    <div className={styles.info}>
                        <h2>{person.name}</h2>
                        <p>{person.position}</p>
                        <p>{person.department}</p>
                        <p>Email: <a href={`mailto:${person.email}`}>{person.email}</a></p>
                        <p>Phone: {person.phone} (Extn. {person.extension})</p>
                        {person.mobile && <p>Mobile: {person.mobile}</p>}
                    </div>
                    </div>
                    <div className={`${styles.cardside} ${styles.back}`}>
                    <div className=" flex w-[100%] h-[100%] justify-center items-center">
                        <Image src="/data/logo/iiti.png" alt={person.name} width={250} className={styles.embeded} />
                        
                    </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ContactCard;
