import React from 'react';
import Head from 'next/head'
import '../js/soluna'
import { fetchAPI } from "../lib/api"
import Footer from '../components/footer'
import Navbar from '../components/navbar'


export default function facilities({ header, footers }) {

    return (
        <>

            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content="Soluna Beach Club - Facilities" />
                <meta name="keywords" content="Dubai beach club, best beach clubs in Dubai, beach club palm jumeirah, pool clubs in Dubai, beach lounge Dubai, top beach clubs Dubai, beach clubs Dubai offers, beach club membership Dubai, jumeriah beach restaurants, beach club restaurants, beach club Dubai brunch, Risen café Dubai" />
                <meta name="author" content="" />
                <title>Soluna Beach Club</title>
            </Head>
            <Navbar header={header} />
            <br /><br /><br /><br /><br /><br /><br />
            <section id="restaurants">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-11 col-lg-9 col-xl-8 text-center pb-5">
                            <h3 className="h3">Facilities</h3>
                            <strong>The beauty of the sun-drenched Mediterranean will always be your host.</strong>
                            <div className="text-left mt-5">
                                <h2 className="h3">Lounge Areas</h2>
                                <p>Discover warm and welcoming service amidst rustic elegance; neutral and calming tones, slinging cotton sails, white washed linens, and macrame hammocks. </p>
                                <p>Rustic and restorative, our atmospheric restaurants, beach, pool and lounge areas are a quintessential culmination of Greek living, all amidst sweeping seascapes.</p>
                                <p>Tranquil waves and breathtaking views can be found within our heavenly beach space, just moments away from an airy and contemporary pool setting.</p>
                                <p>East of the pool is the vibrant Terrazzo, a spacious corner where family and friends can meet for breakfast, lunch, or dinner. Shisha is also available upon request. </p>
                                <p>We’ve made sure that our junior guests are looked after too, with a shallow kids pool designed for endless fun. </p>
                                <h2 className="h3 mt-5">Dining</h2>
                                <p>Soluna offers a broad yet selective range of choices, all of which are highly recommended and locally sourced. Our inviting restaurant options include homegrown cafe and artisanal bakery Risen, as well as Greek and Mediterranean cuisine at Ènas. There is also a daily Soluna beach and poolside menu available and a food truck parked directly on the beach. A memorable breakfast, lunch and dinner for you and the whole family awaits!</p>
                            </div>
                            <div className="mt-5">
                                <h3>Opening times<br />
                                    <small>Summer/Winter Hours</small></h3>
                                <h4 className="mt-5">Beach Club Areas</h4>
                                <div className="row mt-5">
                                    <div className="col-11 col-lg-4"><div className="border">
                                        <strong>Beachside</strong>
                                        <div className="small">Risen and Soluna menus available</div>
                                        Daily 9 AM - 11 PM
                                    </div></div>
                                    <div className="col-11 col-lg-4"><div className="border">
                                        <strong>Poolside</strong>
                                        <div className="small">Risen and Soluna menus available</div>
                                        Daily 9 AM - 11 PM
                                    </div></div>
                                    <div className="col-11 col-lg-4"><div className="border">
                                        <strong>Terrazzo</strong>
                                        <div className="small">Risen and Soluna menus available
                                            Shisa available</div>
                                        Daily 9 AM - 11 PM
                                    </div></div>
                                </div>
                            </div>
                            <div className="mt-5">
                                <h4 className="mt-5">Restaurants</h4>
                                <div className="row mt-5">
                                    <div className="col-11 col-lg-6">
                                        <div className="border p-0">
                                            <div className="rest-img"><img src="http://localhost:1337/uploads/risen_beach_club_restaurant_f1166c97bf.webp" className="img-fluid" alt="Risen" title="Risen" /></div>
                                            <div className="p-4"><h4>Risen</h4>
                                                <div className="small">Indoor and outdoor seating available
                                                    Menu available for the Terrazzo, pool and beachside</div>
                                                Daily 7 AM - 8 PM</div>
                                        </div></div>
                                    <div className="col-11 col-lg-6">
                                        <div className="border p-0">
                                            <div className="rest-img"><img src="http://localhost:1337/uploads/rest_enas_1_5ee4be0f0d.jpg" className="img-fluid" alt="Ènas Restaurant" title="Ènas Restaurant" /></div>
                                            <div className="p-4"><h4>Ènas</h4>
                                                <div className="small">Indoor and outdoor seating available
                                                    Menu available for the Terrazzo, pool and beachside</div>
                                                Daily 12 PM - 12 AM</div>
                                        </div></div></div></div>
                        </div ></div>
                </div>
            </section >
            <Footer footers={footers} />
        </>
    )
}

export async function getServerSideProps() {
    // Run API calls in parallel
    const [headerRes, footerRes] = await Promise.all([
        fetchAPI("/header-menu", { populate: "*" }),
        fetchAPI("/footer", { populate: "*" }),
    ])
    return {
        props: {
            header: headerRes,
            footers: footerRes.data
        },
    }
}
