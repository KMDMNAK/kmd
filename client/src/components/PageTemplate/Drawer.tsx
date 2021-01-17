import React from 'react'
import {
    Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody
} from '@chakra-ui/react'

import Link from 'next/link'

import BlogIcon from './blog.svg'
import InfoIcon from './info.svg'
import ProjectsIcon from './projects.svg'

const IconWrapper: React.FC<{ Icon: any, href: string, top: number, label: string }> = props => (
    <div style={{ margin: "50px", top: props.top }}>
        <Link href={props.href}>
            <props.Icon style={{
                width: '40px',
                height: '40px',
                left: 30,
                position: "absolute",
                cursor: "pointer"
            }} />
        </Link>
        <span style={{ color: '#D4E9E2', textAlign: 'center', margin: '10px' }}>{props.label}</span>
    </div>
)

const Component: React.FC<{ onClose: () => void, isOpen: boolean }> = props => {
    const size = 'xs'
    return (
        <Drawer onClose={props.onClose} isOpen={props.isOpen} size={size}>
            <DrawerOverlay>
                <DrawerContent style={{ backgroundColor: '#6A2B05', color: '#6A2B05' }}>
                    {/* <DrawerHeader>{`${size} drawer contents`}</DrawerHeader> */}
                    <DrawerBody>
                        <IconWrapper Icon={InfoIcon} href="/about" top={40} label="About" />
                        <IconWrapper Icon={BlogIcon} href="/blog" top={110} label="Blog" />
                        <IconWrapper Icon={ProjectsIcon} href="/projects" top={180} label="Projects" />
                    </DrawerBody>
                </DrawerContent>
            </DrawerOverlay>
        </Drawer>
    )
}

export default Component