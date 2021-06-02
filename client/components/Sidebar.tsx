import React from 'react'
import Link from 'next/link'

const Column: React.FC<{ title: string, top: string, href: string }> = ({ title, top, href }) => (
    <div style={{
        position: 'absolute',
        top: top,
        left: 0,
        right: 0,
        width: "100px",
        marginLeft: 'auto',
        marginRight: 'auto'
    }}>
        <Link href={href}>
            {title}
        </Link>
    </div>
)
const Sidebar: React.FC<{ width: number, right: number }> = ({ width, right }) => {
    return (
        <div style={{
            position: "fixed",
            height: "768px",
            top: "0px",
            background: "#F4855E",
            zIndex: 9,
            transitionDuration: "0.6s",
            width, right
        }} >
            <Column top="50px" title="はじめに" href="/" />
            <Column top="100px" title="About" href="/about" />
        </div >
    )
}

export default Sidebar