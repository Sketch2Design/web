import React from 'react'
import Sidebar from '@/model/Workspace/Sidebar/Sidebar'
import Header from '@/model/Dashboard/Header'
import Card from '@/model/Workspace/Admin/Card'

export default function admin() {
    return (
        <div className="flex w-full min-h-screen relative">
            <Sidebar />
            <div className="flex flex-col w-full space-y-4 ml-96">
                <Header />
                <div className="flex justify-between px-14 text-2xl">
                    <p className="font-bold">Templates for Approval</p>
                    <p className="text-zinc-500">view more </p>
                </div>
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}
