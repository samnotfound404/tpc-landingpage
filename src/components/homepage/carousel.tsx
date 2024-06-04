"use client"


import { useState, useEffect } from "react"
import styles from "@/css/carousel.module.css"

export default function Carousel(props: any) {


  const [currentIndex, setCurrentIndex] = useState(0);



  useEffect(() => {
    const intervalId = setInterval(() => {

      setCurrentIndex(currentIndex => (currentIndex === props.images.length - 1 ? 0 : currentIndex + 1));

    }, 5000)

    return () => clearInterval(intervalId);
  }, [props.images.length])

  return (
    <>


      <div className={styles.wrapper}>

        <div className={styles.unexpandable}>


          <div className={styles.location}>
            <img src={props.locationicon} alt="located at" className={styles.icon} />
            <div>IIT, INDORE</div>
          </div>

          <div className={styles.carousel}>

          <div className={styles.gallery}>
            <img src={props.images[currentIndex]} alt="tpc images" />
            <div className={styles.dots}>

              {props.images.map((image: string, index: number) => {

                if (index === currentIndex) {
                  return <div className={styles.activedot} key={index}>.</div>
                }
                else {
                  return <div className={styles.inactivedot} key={index}>.</div>
                }})}

            </div>

            

          </div>

          <div className={styles.sidebar}>
              {props.images.map((image: string, index: number) => (
                <img key={index} alt="gallery" src={image} style={{ display: index === currentIndex ? "none" : "block" }} />
              ))

              }
            </div>


            </div>



        </div>

      </div>


    </>





  );
}
