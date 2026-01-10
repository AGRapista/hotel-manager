import './Drawer.scss';

export default function Drawer({ DrawerName }: { DrawerName: string }) {
    return (
        <div className='drawer-main'>
            <span className='drawer-title'>{DrawerName}</span>
            <hr></hr>
        </div>
    );
}