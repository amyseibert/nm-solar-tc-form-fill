import './index.css'
import 'flowbite'
import {z} from 'zod'
import { PDFDocument } from 'pdf-lib';

document.getElementById('generatePDF').addEventListener('click', async () => {
    // Step 1: Collect user data from the form
    const formData = {
        installerCompanyName: document.getElementById('installerCompanyName').value,
        installerCity: document.getElementById('installerCity').value,
        installerState: document.getElementById('installerState').value,
        installerZip: document.getElementById('installerZip').value,
    };

    // Step 2: Load the PDF template
    const pdfBytes = await fetch('/pdf-templates/other-costs-invoice-template.pdf').then(res => res.arrayBuffer());
    const pdfDoc = await PDFDocument.load(pdfBytes);

    // Step 3: Fill in the form fields
    const form = pdfDoc.getForm();

    form.getTextField('installerCompanyName').setText(formData.installerCompanyName);
    form.getTextField('installerCity').setText(formData.installerCity);
    form.getTextField('installerState').setText(formData.installerState);
    form.getTextField('installerZip').setText(formData.installerZip);

    // Step 4: Save the updated PDF
    const filledPdfBytes = await pdfDoc.save();

    // Step 5: Trigger the download
    const blob = new Blob([filledPdfBytes], { type: 'application/pdf' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'Completed_Invoice.pdf';
    link.click();
});

