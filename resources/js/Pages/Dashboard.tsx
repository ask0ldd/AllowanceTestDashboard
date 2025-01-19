import Header from '@/Components/Dashboard/Header/Header';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard() {
    return(
        <div className='bg-dash-grey w-full h-full min-h-full flex flex-col'>
            <Header/>
            <main>
                <div id="allowanceListContainer" className='w-full flex flex-col bg-component-white rounded-3xl overflow-hidden p-[40px] border border-solid border-dashcomponent-border'>
                    <h1 className=' text-[36px] font-bold'>Active Allowances</h1>
                </div>
            </main>
        </div>
    )
    /*return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            You're logged in!
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );*/
}
