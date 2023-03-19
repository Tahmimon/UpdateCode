import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { MdDone } from "react-icons/md";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "50%",
    p: 4,
};

export default function ResponseSuccessModal({ openModal, setOpenModal }) {
    const handleOpen = () => setOpenModal(true);
    const handleClose = () => setOpenModal(false);
    return (
        <div>
            <Modal
                sx={{ background: "rgba(0,0,0,0.7)" }}
                open={openModal}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className='flex flex-col justify-center items-center bg-white rounded-xl py-7'>
                        <MdDone className='text-5xl text-green-500' />
                        <p className='text-primary-500 text-xl font-bold'>Your Response was submitted successfully</p>
                        <p className='text-gray-500'>We will get back to you soon</p>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}

