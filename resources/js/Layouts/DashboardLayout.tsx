import Header from "@/Components/Dashboard/Header/Header";
import Table from "@/Components/Dashboard/Table/Table";
import { Head } from "@inertiajs/react";
import { PropsWithChildren, ReactNode } from "react";

export default function DashboardLayout({
    header,
    children,
}: PropsWithChildren<{ header?: ReactNode }>) {

    return(
        <div className='bg-dash-grey w-full h-full min-h-full flex flex-col font-jost'>
            <Head title="Dashboard" />
            <Header/>
            <main>
                {children}
            </main>
        </div>
    )
}