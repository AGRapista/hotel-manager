import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import './UsersPage.scss';
import "primereact/resources/themes/lara-light-indigo/theme.css";


export default function UsersPage() {
    const users = [
        {
            "Email": "john.doe@example.com",
            "Salutation": "Mr.",
            "FirstName": "John",
            "LastName": "Doe",
            "Department": "Operations",
            "SubDepartment": "Front Office",
            "PositionTitle": "Front Desk Manager",
            "Image": "john.png",
            "Language": "English",
            "Role": "Admin",
            "Country": "USA",
            "Region": "North America",
            "BrandGroup": "Luxury",
            "Brand": "Hilton",
            "Property": "Hilton Times Square",
            "Biometric": "Yes"
        },
        {
            "Email": "jane.smith@example.com",
            "Salutation": "Ms.",
            "FirstName": "Jane",
            "LastName": "Smith",
            "Department": "Sales",
            "SubDepartment": "Corporate Sales",
            "PositionTitle": "Sales Executive",
            "Image": "jane.png",
            "Language": "English",
            "Role": "User",
            "Country": "UK",
            "Region": "Europe",
            "BrandGroup": "Upscale",
            "Brand": "Marriott",
            "Property": "Marriott London",
            "Biometric": "No"
        },
        {
            "Email": "emily.chen@example.com",
            "Salutation": "Mrs.",
            "FirstName": "Emily",
            "LastName": "Chen",
            "Department": "HR",
            "SubDepartment": "Recruitment",
            "PositionTitle": "HR Manager",
            "Image": "emily.png",
            "Language": "Mandarin",
            "Role": "Admin",
            "Country": "China",
            "Region": "Asia",
            "BrandGroup": "Luxury",
            "Brand": "Shangri-La",
            "Property": "Shangri-La Beijing",
            "Biometric": "Yes"
        },
        {
            "Email": "michael.brown@example.com",
            "Salutation": "Mr.",
            "FirstName": "Michael",
            "LastName": "Brown",
            "Department": "Finance",
            "SubDepartment": "Accounts",
            "PositionTitle": "Finance Analyst",
            "Image": "michael.png",
            "Language": "English",
            "Role": "User",
            "Country": "Canada",
            "Region": "North America",
            "BrandGroup": "Upscale",
            "Brand": "Hyatt",
            "Property": "Hyatt Toronto",
            "Biometric": "No"
        },
        {
            "Email": "sarah.lee@example.com",
            "Salutation": "Ms.",
            "FirstName": "Sarah",
            "LastName": "Lee",
            "Department": "IT",
            "SubDepartment": "Infrastructure",
            "PositionTitle": "IT Support Specialist",
            "Image": "sarah.png",
            "Language": "English",
            "Role": "User",
            "Country": "Australia",
            "Region": "Oceania",
            "BrandGroup": "Luxury",
            "Brand": "Accor",
            "Property": "Sofitel Sydney",
            "Biometric": "Yes"
        },
        {
            "Email": "david.kim@example.com",
            "Salutation": "Mr.",
            "FirstName": "David",
            "LastName": "Kim",
            "Department": "Operations",
            "SubDepartment": "Housekeeping",
            "PositionTitle": "Housekeeping Supervisor",
            "Image": "david.png",
            "Language": "Korean",
            "Role": "Admin",
            "Country": "South Korea",
            "Region": "Asia",
            "BrandGroup": "Upscale",
            "Brand": "Marriott",
            "Property": "JW Marriott Seoul",
            "Biometric": "No"
        },
        {
            "Email": "laura.garcia@example.com",
            "Salutation": "Mrs.",
            "FirstName": "Laura",
            "LastName": "Garcia",
            "Department": "Sales",
            "SubDepartment": "Event Sales",
            "PositionTitle": "Event Coordinator",
            "Image": "laura.png",
            "Language": "Spanish",
            "Role": "User",
            "Country": "Mexico",
            "Region": "North America",
            "BrandGroup": "Luxury",
            "Brand": "Hilton",
            "Property": "Hilton Cancun",
            "Biometric": "Yes"
        },
        {
            "Email": "tom.wilson@example.com",
            "Salutation": "Mr.",
            "FirstName": "Tom",
            "LastName": "Wilson",
            "Department": "Marketing",
            "SubDepartment": "Digital",
            "PositionTitle": "Marketing Manager",
            "Image": "tom.png",
            "Language": "English",
            "Role": "Admin",
            "Country": "UK",
            "Region": "Europe",
            "BrandGroup": "Upscale",
            "Brand": "Marriott",
            "Property": "Marriott London",
            "Biometric": "No"
        },
        {
            "Email": "anna.muller@example.com",
            "Salutation": "Ms.",
            "FirstName": "Anna",
            "LastName": "Muller",
            "Department": "HR",
            "SubDepartment": "Training",
            "PositionTitle": "Training Specialist",
            "Image": "anna.png",
            "Language": "German",
            "Role": "User",
            "Country": "Germany",
            "Region": "Europe",
            "BrandGroup": "Luxury",
            "Brand": "Accor",
            "Property": "Pullman Berlin",
            "Biometric": "Yes"
        },
        {
            "Email": "rakesh.patel@example.com",
            "Salutation": "Mr.",
            "FirstName": "Rakesh",
            "LastName": "Patel",
            "Department": "IT",
            "SubDepartment": "Software",
            "PositionTitle": "Software Engineer",
            "Image": "rakesh.png",
            "Language": "Hindi",
            "Role": "Admin",
            "Country": "India",
            "Region": "Asia",
            "BrandGroup": "Upscale",
            "Brand": "Hyatt",
            "Property": "Hyatt Mumbai",
            "Biometric": "No"
        }
    ];

    return (
        <div>
            <h1>Users Page</h1>
            <DataTable value={users}
                className="dt-custom"
                stripedRows
                removableSort
                sortMode='multiple'
            >
                <Column
                    header="Name"
                    body={(rowData) => `${rowData.FirstName} ${rowData.LastName}`}
                    sortable
                />

                <Column field="Email" header="Email" sortable />
                <Column field="Role" header="Role" sortable />
                <Column field="Salutation" header="Salutation" />
                <Column field="Department" header="Department" />
                <Column field="SubDepartment" header="Sub-Department" />
                <Column field="PositionTitle" header="Position/Title" />
                {/* <Column
                    header="Image"
                    body={(rowData) => (
                        <img
                            src={`/images/${rowData.Image}`}
                            alt={rowData.FirstName}
                            style={{ width: '40px', borderRadius: '50%' }}
                        />
                    )}
                /> */}
                <Column field="Language" header="Language" />
                <Column field="Country" header="Country" />
                <Column field="Region" header="Region" />
                <Column field="BrandGroup" header="Brand Group" />
                <Column field="Brand" header="Brand" />
                <Column field="Property" header="Property(s)" />
                <Column field="Biometric" header="Biometric" />
            </DataTable>

        </div>
    );
}