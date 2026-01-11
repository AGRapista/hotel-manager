import './DictionaryPage.scss';
import Drawer from '../../components/drawer/Drawer';

export default function DictionaryPage() {

    type Dictionary = {
        name: string;
        key: string;
    };

    type DrawersProps = {
        items: Dictionary[];
    };

    type DrawerData = {
        name: string
    }[];

    const dictionaries: Dictionary[] = [
        {
            name: 'Priority',
            key: 'priority',

        },
        {
            name: 'Property Status',
            key: 'propertyStatus'
        },
        {
            name: 'Project Status',
            key: 'projectStatus'
        },
        {
            name: 'Property Status',
            key: 'propertyStatus'
        },
        {
            name: 'Defect Status',
            key: 'defectStatus'
        },
        {
            name: 'Trilean',
            key: 'trilean'
        },
        {
            name: 'Salutation',
            key: 'salutation'
        },
        {
            name: 'Currency',
            key: 'currency'
        },
        {
            name: 'Languages',
            key: 'languages'
        },
        {
            name: 'Country',
            key: 'country'
        },
    ]

    const dictionaryData: Record<string, DrawerData> = {
        priority: [
            { name: 'Critical' },
            { name: 'Super High' },
            { name: 'High' },
            { name: 'Medium' },
            { name: 'Low' },
            { name: 'Wish List' }
        ],

        propertyStatus: [
            { name: 'Not Signed' },
            { name: 'Signed not announced' },
            { name: 'Signed announced' },
            { name: 'Active' },
            { name: 'Deflag In Progress' },
            { name: 'Archive' }
        ],

        projectStatus: [
            { name: 'Not yet initiated' },
            { name: 'Delayed' },
            { name: 'In Process' },
            { name: 'Behind Schedule' },
            { name: 'Completed' }
        ],

        defectStatus: [
            { name: 'Identified' },
            { name: 'Missing' },
            { name: 'In Progress' },
            { name: 'Actioned' },
            { name: 'Completed' },
            { name: 'Verified' }
        ],

        trilean: [
            { name: 'Yes' },
            { name: 'No' },
            { name: 'N/A' }
        ],

        salutation: [
            { name: 'Mr.' },
            { name: 'Mrs.' },
            { name: 'Ms.' },
            { name: 'Dr.' },
            { name: 'Professor' }
        ],

        currency: [
            { name: 'USD' },
            { name: 'EUR' },
            { name: 'GBP' },
            { name: 'JPY' },
            { name: 'AUD' },
            { name: 'PHP' }
        ],

        languages: [
            { name: 'English' },
            { name: 'Spanish' },
            { name: 'French' },
            { name: 'German' },
            { name: 'Mandarin' },
            { name: 'Hindi' },
            { name: 'Arabic' }
        ],

        country: [
            { name: 'United States' },
            { name: 'United Kingdom' },
            { name: 'Germany' },
            { name: 'India' },
            { name: 'Philippines' }
        ]
    };


    const Drawers = ({ items }: DrawersProps) => {
        return (
            <div className="dictionaries-container">
                {items.map((dictionary) => (
                    <Drawer
                        key={dictionary.key}
                        DrawerName={dictionary.name}
                        DrawerItems={dictionaryData[dictionary.key]}
                    />
                ))}
            </div>
        );
    };

    return (
        <div>
            <h1>System Dictionaries</h1>
            <Drawers items={dictionaries} />
        </div>
    );
}