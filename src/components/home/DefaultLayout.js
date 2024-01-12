import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'

function DefaultLayout({ page }) {
    return (
        <>
            <Header />
            {page}
            <Footer />
        </>
    )
}

export default DefaultLayout
