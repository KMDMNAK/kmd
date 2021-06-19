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
        marginRight: 'auto',
        fontSize: '17px'
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
            height: "100%",
            top: "0px",
            background: "#F4855E",
            zIndex: 9,
            transitionDuration: "0.6s",
            width, right
        }} >
            <Column top="50px" title="はじめに" href="/" />
            <Column top="100px" title="About" href="/about" />
            <Column top="150px" title="Blog" href="/blog" />
        </div >
    )
}

export default Sidebar
