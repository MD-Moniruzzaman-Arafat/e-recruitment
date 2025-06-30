import { Form, Input, Modal, Upload } from 'antd'
import React from 'react'
import { InboxOutlined } from '@ant-design/icons';

export default function ModalForm({ isModalOpen, handleOk, handleCancel }) {
    const normFile = e => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
            return e;
        }
        return e === null || e === void 0 ? void 0 : e.fileList;
    };
    return (
        <>
            <Modal
                title="Application Form"
                closable={{ 'aria-label': 'Custom Close Button' }}
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                width={900}
                footer={null}
            >
                <Form name="trigger" layout="vertical" autoComplete="off" style={{ maxWidth: 900 }}>
                    <div className="flex flex-col md:flex-row gap-4">
                        <Form.Item
                            hasFeedback
                            label="Name:"
                            name="field_a"
                            validateFirst
                            className="flex-1"
                            rules={[{ max: 6 }, { max: 3, message: 'Continue input to exceed 6 chars' }]}
                        >
                            <Input placeholder="Name" />
                        </Form.Item>

                        <Form.Item
                            hasFeedback
                            label="Email:"
                            name="field_b"
                            validateFirst
                            className="flex-1"
                            rules={[{ max: 6 }, { max: 3, message: 'Continue input to exceed 6 chars' }]}
                        >
                            <Input placeholder="Email" />
                        </Form.Item>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4">
                        <Form.Item
                            hasFeedback
                            label="Contact Number:"
                            name="field_a"
                            validateFirst
                            className="flex-1"
                            rules={[{ max: 6 }, { max: 3, message: 'Continue input to exceed 6 chars' }]}
                        >
                            <Input placeholder="Contact Number" />
                        </Form.Item>

                        <Form.Item
                            hasFeedback
                            label="Title:"
                            name="field_b"
                            validateFirst
                            className="flex-1"
                            rules={[{ max: 6 }, { max: 3, message: 'Continue input to exceed 6 chars' }]}
                        >
                            <Input placeholder="Title" />
                        </Form.Item>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4">
                        <Form.Item
                            hasFeedback
                            label="Company Name:"
                            name="field_a"
                            validateFirst
                            className="flex-1"
                            rules={[{ max: 6 }, { max: 3, message: 'Continue input to exceed 6 chars' }]}
                        >
                            <Input placeholder="Company Name" />
                        </Form.Item>

                        <Form.Item
                            hasFeedback
                            label="Unit Name:"
                            name="field_b"
                            validateFirst
                            className="flex-1"
                            rules={[{ max: 6 }, { max: 3, message: 'Continue input to exceed 6 chars' }]}
                        >
                            <Input placeholder="Unit Name" />
                        </Form.Item>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                            <Form.Item
                                hasFeedback
                                label="Department Name:"
                                name="field_a"
                                validateFirst
                                className="flex-1"
                                rules={[{ max: 6 }, { max: 3, message: 'Continue input to exceed 6 chars' }]}
                            >
                                <Input placeholder="Department Name" className='w-[900px]' />
                            </Form.Item>
                            <Form.Item
                                hasFeedback
                                label="Location:"
                                name="field_a"
                                validateFirst
                                className="flex-1"
                                rules={[{ max: 6 }, { max: 3, message: 'Continue input to exceed 6 chars' }]}
                            >
                                <Input placeholder="Location" />
                            </Form.Item>
                            <Form.Item
                                hasFeedback
                                label="Designation Name:"
                                name="field_a"
                                validateFirst
                                className="flex-1"
                                rules={[{ max: 6 }, { max: 3, message: 'Continue input to exceed 6 chars' }]}
                            >
                                <Input placeholder="Designation Name" />
                            </Form.Item>
                        </div>

                        <Form.Item label="Dragger">
                            <Form.Item
                                name="dragger"
                                valuePropName="fileList"
                                getValueFromEvent={normFile}
                                noStyle
                            >
                                <div className="w-full h-52"> {/* Control size here */}
                                    <Upload.Dragger
                                        name="files"
                                        action="/upload.do"
                                        className="h-full w-full flex items-center justify-center"
                                    >
                                        <div>
                                            <p className="ant-upload-drag-icon">
                                                <InboxOutlined />
                                            </p>
                                            <p className="ant-upload-text">Click or drag file to this area to upload</p>
                                            <p className="ant-upload-hint">Support for a single or bulk upload.</p>
                                        </div>
                                    </Upload.Dragger>
                                </div>
                            </Form.Item>
                        </Form.Item>
                    </div>
                    <div className="card-actions flex justify-end items-center">
                        <button className="outline-[#636E72] bg-[#636E72] border rounded-4xl px-5 py-0.5 text-[12px] text-white cursor-pointer">Cancel</button>
                        <button className="bg-[#0984E3] rounded-4xl px-8 py-1 text-[12px] text-white cursor-pointer" >Apply</button>
                    </div>
                </Form>
            </Modal>
        </>
    )
}
