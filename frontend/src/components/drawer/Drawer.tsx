import './Drawer.scss';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

type DrawerProps = {
    DrawerName: string;
    DrawerItems: { name: string }[];
}

export default function Drawer({ DrawerName, DrawerItems }: DrawerProps) {
    return (
        <div className='drawer-main'>
            <span className='drawer-title'>{DrawerName}</span>
            <hr></hr>
            <DataTable value={DrawerItems}>
                <Column field="name" />
            </DataTable>
        </div>
    );
}