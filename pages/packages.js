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
                <meta name="description" content="Soluna Beach Club - Dubai beach club" />
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
                            <h3 className="h3">Packages</h3>
                            <strong>No matter which Soluna package you choose, you’ll be surrounded in comfort amongst sweeping coastal views.</strong>

                            <div className="text-left">A beach retreat with soul, we are on an endless pursuit seeking an organic way of life. Our purpose is to make you feel like a local, so you can  unwind and feel complete contentment within the present moments of the day.

                                Sustainability is at the heart of our ethos. From the food to the decor, Soluna’s eco-chic environment has been designed to restore the definition of natural surroundings, all while reconnecting you to them.

                                Soluna offers three beach club packages ideal for days spent alongside family and friends. Each package is redeemable on food and beverage.</div>

                            <h2 className="h3 mt-5">Soluna Single Sun loungers</h2>
                            Your sunbed awaits.
                            <div className="white-rounded-box">
                                <div className="text-left"><strong>Soluna’s beach-front single sun loungers are available during the week and weekend.</strong>
                                    Weekdays: AED 100 pp with AED 75 redeemable on food & beverage.
                                    Weekends: AED 150 pp with AED 100 redeemable on food & beverage.

                                    <strong>Our poolside single sun loungers.</strong>
                                    Weekdays: AED 150 pp with AED 125 redeemable on food & beverage.
                                    Weekends: AED 200 with AED 150 redeemable on food & beverage. </div></div>

                            <h2 className="h3 mt-5">Cabana Sun loungers</h2>
                            <div className="white-rounded-box">
                                <div className="text-left">Whether you’d like to nestle up to a loved one, or make room for family and friends, Soluna’s private cabanas with added cushions for comfort and white shades for privacy are the perfect choice.

                                    <strong>Our cabanas are available on weekdays and weekends, both pool and beach side. </strong>
                                    Weekdays: AED 250 pp with AED 225 redeemable on food & beverage.
                                    Weekends: AED 300 pp with AED 250 redeemable on food & beverage.</div></div>
                        </div>
                    </div>
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
