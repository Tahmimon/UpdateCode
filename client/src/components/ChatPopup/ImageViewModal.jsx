import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { AiOutlineCloseCircle } from "react-icons/ai";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "80%",
    p: 4,
};

export default function BasicModal({ selectedImage, openModal, setOpenModal }) {
    const handleOpen = () => setOpenModal(true);
    const handleClose = () => setOpenModal(false);
    return (
        <div>
            <Modal
                sx={{ background: "rgba(0,0,0,0.8)" }}
                open={openModal}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className='flex justify-end mt-8'>
                        <button className="text-white text-3xl " onClick={handleClose}>
                            <AiOutlineCloseCircle />
                        </button>
                    </div>
                    <div className='flex justify-end mt-5'>

                    </div>
                    <div className='flex justify-center items-center lg:w-3/5 w-full mx-auto'>
                        <img src={selectedImage} alt="" />
                    </div>
                </Box>
            </Modal>
        </div>
    );
}

