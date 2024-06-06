

import * as Yup from 'yup';



export const ValidationSchema=Yup.object().shape({
    Product_Name: Yup.string().required('Product name is required'),
    Pro_Description: Yup.string().required('Product description is required'),
    QTY: Yup.string().required('Quantity is required'),
    Manufacturing_Date: Yup.date().required('Manufacturing date is required'),
    Brand_Id: Yup.string().required('Brand is required'),
    Pic: Yup.mixed().required('Image is required'),
    UnitPrice:Yup.string().required('Required'),

});

