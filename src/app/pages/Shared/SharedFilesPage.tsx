import React from 'react'
import MainLayout from '../../layouts/MainLayout'
import FileCard from '../../comps/FileCard'

export default function SharedFilesPage() {
    const connections = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13,14,15,16,17,18,19,20]
    return (
        <MainLayout title='Shared Files'>
            {connections.map(x => <FileCard key={x} />)}
        </MainLayout>
    )
}
