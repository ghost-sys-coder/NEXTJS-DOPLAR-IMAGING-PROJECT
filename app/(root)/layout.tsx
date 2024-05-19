import React, { ReactNode } from 'react'
import { MobileNav, Sidebar } from '@/components/shared'

const layout = ({ children }: { children: ReactNode }) => {
    return (
        <main className="root">
            <Sidebar />
            <MobileNav />
            <div className="root-container">
                <div className="wrapper">
                    {children}
                </div>
            </div>
        </main>
    )
}

export default layout