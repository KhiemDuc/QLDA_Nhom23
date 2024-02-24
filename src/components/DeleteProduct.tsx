import { Button } from '@mui/material';
import React from 'react';

interface DeleteProductProps {
    id: number;
}

const DeleteProduct: React.FC<DeleteProductProps> = ({ id }) => {
    // Hàm này sẽ xử lý việc xóa sản phẩm có id cụ thể
    const handleDelete = (id: number) => {
        // Gọi hàm hoặc API để thực hiện xóa sản phẩm với id được cung cấp
        console.log(`Deleting product with ID: ${id}`);
    };

    return (
        <Button onClick={() => handleDelete(id)}>Xoá sản phẩm</Button>
    );
};

export default DeleteProduct;
