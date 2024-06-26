/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useRef } from 'react'
import Services from './services';
import About from './about';
import Contact from './contact';

function Home() {
    
    const videoRef = useRef(null);
    useEffect(() => {
        // const v3Src = document.location.origin+require("../assets/images/videos/v-3.mp4");
        // const v1Src = document.location.origin+require("../assets/images/videos/v-1.mp4");

        const handleVideoEnded = () => {
            console.log(videoRef);
            let video = document.querySelector('.bg-video');
            // const currentSource = video.currentSrc;
            // if (currentSource === v3Src) {
            //     videoRef.current.src = v1Src;
            // } else {
            //     videoRef.current.src = v3Src;
            // }
            // videoRef.current.load();
            video.play();
        };
    
        videoRef.current.addEventListener('onloadeddata', handleVideoEnded);
    
        return () => {
          videoRef.current.removeEventListener('onloadeddata', handleVideoEnded);
        };
      }, []);
    return (
        <>
            <div className="site-wrap" id="home-section">
                <div className="ftco-blocks-cover-1">
                    <div className="ftco-cover-1 overlay" style={{ backgroundImage: `url(${require("../assets/images/depot_hero_1.jpg")})`}} >
                        <video ref={videoRef} className='bg-video' style={{position:'absolute', width:'100%', height:'100%', objectFit:'cover'}} autoPlay="autoplay" playsInLine="playsinline" loop="true" muted="true">
                            <source src={require("../assets/images/videos/final.mov")} />
                            {/* <source src={require("../assets/images/videos/v-1.mp4")} /> */}
                        </video>

                        <div style={{position:'absolute',width:'100%',height:'100%', top:'0', backgroundColor:'#00000047', zIndex:"1"}}></div>

                        <div className="container" style={{zIndex:"2"}}>
                            <div className="row align-items-center justify-content-center text-center">
                                <div className="col-lg-6">
                                    <h1>Embark on a Journey of Global Trade</h1>
                                    <p className="mb-5">
                                    Welcome to Shree International, where seamless logistics, innovative solutions, 
                                    and unparalleled expertise converge to propel your import-export endeavors to new heights. 
                                    Discover how we can transform your international trade experience today.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="site-section ftco-service-image-1 pb-5">
                        <div className="container">
                            <div className="owl-carousel owl-all owl-loaded owl-drag" style={{display:'block',opacity:'1'}}>
                                <div className="service text-center">
                                    <a href="/">
                                        <img
                                            alt="Image"
                                            className="img-fluid"
                                            src={require("../assets/images/depot_img_1.jpg.webp")}
                                            style={{height:'350px',objectFit:'cover'}}
                                        />
                                    </a>
                                    <div className="px-md-3">
                                        <h3>
                                            <a href="/">Global Expertise</a>
                                        </h3>
                                        <p>
                                            Shree International Import Export is a globally recognized import and export company dedicated to helping businesses thrive in the international marketplace.  With a strong foundation built on integrity, reliability, and customer satisfaction.
                                        </p>
                                    </div>
                                </div>
                                <div className="service text-center">
                                    <a href="/">
                                        <img
                                            alt="Image"
                                            className="img-fluid"
                                            src={require("../assets/images/container.jpg")}
                                            style={{height:'350px',objectFit:'cover'}}
                                            
                                        />
                                    </a>
                                    <div className="px-md-3">
                                        <h3>
                                            <a href="/">Tailored Solutions</a>
                                        </h3>
                                        <p>
                                            We understand that every business has unique import and export requirements. That's why we offer tailored solutions designed to meet your specific needs. Our team takes the time to understand your goals, challenges, and industry dynamics.
                                        </p>
                                    </div>
                                </div>
                                <div className="service text-center">
                                    <a href="/">
                                        <img
                                            alt="Image"
                                            className="img-fluid"
                                            src={require("../assets/images/depot_hero_1.jpg")}
                                            style={{height:'350px',objectFit:'cover'}}
                                        />
                                    </a>
                                    <div className="px-md-3">
                                        <h3>
                                            <a href="/">Reliable Partnerships</a>
                                        </h3>
                                        <p>
                                            We have built strong and reliable partnerships with reputable suppliers, manufacturers, logistics providers, and government agencies worldwide. These partnerships enable us to offer seamless and efficient import and export services.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Services/>
                <About/>
                <Contact/>
            </div>
        </>
    )
}

export default Home
