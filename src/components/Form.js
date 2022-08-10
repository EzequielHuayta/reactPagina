import { Alert, AlertTitle, Backdrop, CircularProgress, Container, Modal, Typography } from '@mui/material'
import React, { useContext, useState } from 'react'
import { FormUserData } from './FormUserData'
import { context } from '../Context/CartContext'
import {db} from '../firebase/firebase'
import { useNavigate } from "react-router-dom";

import { collection, addDoc, serverTimestamp, updateDoc, doc} from 'firebase/firestore'
import { Box } from '@mui/system'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
};

export const Form = () => {

    const navigate = useNavigate()
    const { products, total, clear } = useContext(context);
    const [open, setOpen] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    const handleClose = () => {
      setOpen(false);
    };

    const handleCloseModal = () => setOpenModal(false);

    const endShopping = (dataUser) => {
        setOpen(!open);
        //Uso el timeout para simular algo grande
        setTimeout(() => {
          const ventasCollection = collection(db, 'ventas');
          addDoc(ventasCollection, {
          dataUser,
          items: products,
          date: serverTimestamp(),
          total,
          })
          .then( () => {      
              handleClose();
              products.forEach(product => {
              const updateCollection = doc(db, 'products', product.id)
              updateDoc(updateCollection,{stock: product.stock - product.quantity})
          });
          })
          .finally( () => {
              setOpenModal(true);
              clear();
              setTimeout(() => {
                navigate('/')
              }, 2000)
          })
        }, 2000);


    } 

  return (
    <>
    <Container sx={{display:'flex', justifyContent:'center', flexDirection: 'column'}}>
    <FormUserData endShopping = {endShopping}/>
    </Container>
        <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Alert severity="success">
          <AlertTitle>Compra realizada con exito!</AlertTitle>
          <CircularProgress color="inherit" />

          <Typography>Se lo redirigira al <strong>menu </strong> en breve </Typography>
          
        </Alert>
        </Box>
      </Modal>
    </>
  )
}
