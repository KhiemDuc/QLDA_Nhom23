import React, { useState } from 'react';
import axios from 'axios';
import { Snackbar, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CustomSnackbar from './Snackbar';

const CreateProduct = () => {
    const [productName, setProductName] = useState('');
    const [productBrand, setProductBrand] = useState('');
    const [productWeight, setProductWeight] = useState('');
    const [productLength, setProductLength] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const productData = {
            name: productName,
            brand: productBrand,
            weight: productWeight,
            length: productLength,
            description: productDescription
        };

        try {
            const response = await axios.post('url_api_post_product', productData);
            console.log('Success:', response.data);
            setSnackbarMessage('Sản phẩm đã được thêm thành công.');
            setOpenSnackbar(true);
        } catch (error) {
            console.error('Error:', error);
            setSnackbarMessage('Có lỗi xảy ra khi thêm sản phẩm.');
            setOpenSnackbar(true);
        }
    }

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    }

    return (
        <>
            {/* Button trigger modal */}
            <div className="nav-link" data-bs-toggle="modal" data-bs-target="#loginModal">
                Thêm Sản Phẩm
            </div>

            {/* Modal */}
            <div className="modal fade" id="loginModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Thêm Sản Phẩm</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="productName" className="form-label">Tên Sản Phẩm</label>
                                    <input type="text" className="form-control" id="productName" value={productName} onChange={e => setProductName(e.target.value)} aria-describedby="emailHelp"/>
                                    
                                    <label htmlFor="productBrand" className="form-label">Hãng</label>
                                    <input type="text" className="form-control" id="productBrand" value={productBrand} onChange={e => setProductBrand(e.target.value)} aria-describedby="emailHelp"/>
                                    
                                    <label htmlFor="productWeight" className="form-label">Cân Nặng</label>
                                    <input type="text" className="form-control" id="productWeight" value={productWeight} onChange={e => setProductWeight(e.target.value)} aria-describedby="emailHelp"/>
                                    
                                    <label htmlFor="productLength" className="form-label">Chiều dài</label>
                                    <input type="text" className="form-control" id="productLength" value={productLength} onChange={e => setProductLength(e.target.value)} aria-describedby="emailHelp"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="productDescription" className="form-label">Mô tả</label>
                                    <input type="text" className="form-control" id="productDescription" value={productDescription} onChange={e => setProductDescription(e.target.value)}/>
                                </div>
                                <button type="submit" className="btn btn-outline-primary w-100 mt-5">Submit</button>
                            </form>                 
                        </div>
                    </div>
                </div>
            </div>

            {/* Snackbar */}
            <CustomSnackbar open={openSnackbar} message={snackbarMessage} onClose={handleCloseSnackbar} />
        </>
    );
}

export default CreateProduct;
