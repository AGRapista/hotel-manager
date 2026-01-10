import React, { useState, useEffect } from 'react';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import './UserForm.scss';

import { PrimeIcons } from 'primereact/api';
import 'primeicons/primeicons.css';

interface UserFormProps {
    visible: boolean;
    onHide: () => void;
    onSave: (data: any) => void;
    initialUser?: any;
}

export default function UserForm({ visible, onHide, onSave, initialUser }: UserFormProps) {
    const defaultUser = {
        Salutation: '',
        FirstName: '',
        LastName: '',
        Email: '',
        Role: '',
        Department: '',
        SubDepartment: '',
        PositionTitle: '',
        Language: '',
        Country: '',
        Region: '',
        BrandGroup: '',
        Brand: '',
        Property: '',
        Biometric: ''
    };

    const [formData, setFormData] = useState(defaultUser);

    useEffect(() => {
        if (visible) {
            setFormData(initialUser || defaultUser);
        }
    }, [visible, initialUser]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSave = () => {
        onSave(formData);
        onHide();
    };

    const footer = (
        <div className="dialog-footer">
            <Button label="Close" icon={PrimeIcons.TIMES} onClick={onHide} className="p-button-text" />
            <Button label="Save" icon={PrimeIcons.SAVE} onClick={handleSave} autoFocus />
        </div>
    );

    return (
        <Dialog
            header={initialUser ? "Edit User" : "Add User"}
            visible={visible}
            style={{ width: '50vw' }}
            footer={footer}
            onHide={onHide}
            className="user-form-dialog"
        >
            <div className="form-content">
                <div className="form-group">
                    <h3 className="group-title">Profile</h3>
                    <hr className="group-separator" />

                    <div className="form-row">
                        <div className="field col-1-5">
                            <label htmlFor="Salutation">Salutation</label>
                            <InputText id="Salutation" name="Salutation" value={formData.Salutation} onChange={handleChange} className="w-full" />
                        </div>
                        <div className="field col-2-5">
                            <label htmlFor="FirstName">First Name</label>
                            <InputText id="FirstName" name="FirstName" value={formData.FirstName} onChange={handleChange} className="w-full" />
                        </div>
                        <div className="field col-2-5">
                            <label htmlFor="LastName">Last Name</label>
                            <InputText id="LastName" name="LastName" value={formData.LastName} onChange={handleChange} className="w-full" />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="field col-1-2">
                            <label htmlFor="Email">Email</label>
                            <InputText id="Email" name="Email" value={formData.Email} onChange={handleChange} className="w-full" />
                        </div>
                        <div className="field col-1-2">
                            <label htmlFor="PositionTitle">Position/Title</label>
                            <InputText id="PositionTitle" name="PositionTitle" value={formData.PositionTitle} onChange={handleChange} className="w-full" />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="field col-1-2">
                            <label htmlFor="Department">Department</label>
                            <InputText id="Department" name="Department" value={formData.Department} onChange={handleChange} className="w-full" />
                        </div>
                        <div className="field col-1-2">
                            <label htmlFor="SubDepartment">Sub-Department</label>
                            <InputText id="SubDepartment" name="SubDepartment" value={formData.SubDepartment} onChange={handleChange} className="w-full" />
                        </div>
                    </div>
                </div>

                <div className="form-group">
                    <h3 className="group-title">Property Profile</h3>
                    <hr className="group-separator" />

                    <div className="form-row">
                        <div className="field col-1-2">
                            <label htmlFor="Region">Region</label>
                            <InputText id="Region" name="Region" value={formData.Region} onChange={handleChange} className="w-full" />
                        </div>
                        <div className="field col-1-2">
                            <label htmlFor="Country">Country</label>
                            <InputText id="Country" name="Country" value={formData.Country} onChange={handleChange} className="w-full" />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="field col-1-2">
                            <label htmlFor="BrandGroup">Brand Group</label>
                            <InputText id="BrandGroup" name="BrandGroup" value={formData.BrandGroup} onChange={handleChange} className="w-full" />
                        </div>
                        <div className="field col-1-2">
                            <label htmlFor="Brand">Brand</label>
                            <InputText id="Brand" name="Brand" value={formData.Brand} onChange={handleChange} className="w-full" />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="field col-full">
                            <label htmlFor="Property">Property</label>
                            <InputText id="Property" name="Property" value={formData.Property} onChange={handleChange} className="w-full" />
                        </div>
                    </div>
                </div>
            </div>
        </Dialog>
    );
}
