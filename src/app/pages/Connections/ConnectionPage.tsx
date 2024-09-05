import ConnectionCard from '../../comps/ConnectionCard'
import MainLayout from '../../layouts/MainLayout'

export default function ConnectionPage() {
  const connections = [1, 2, 3, 4, 5,20,21,22,223 ]
  return (
    <MainLayout title='Connections'>
        {connections.map(x => <ConnectionCard key={x} />)}
    </MainLayout>
  )
}
