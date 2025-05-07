import './index.css'
import 'flowbite'
import {z} from 'zod'
import { PDFDocument } from 'pdf-lib';

document.getElementById('generatePDF').addEventListener('click', async () => {
    //Collect data from the form input
    const formData = {
        //customer info section
        customerName: document.getElementById('customer-name').value,
        customerAddress: document.getElementById('customer-address').value,
        customerCity: document.getElementById('customer-city').value,
        customerState: document.getElementById('customer-state').value,
        customerZip: document.getElementById('customer-zip').value,

        //installer info section
        installerCompanyName: document.getElementById('installer-company-name').value,
        installerAddress: document.getElementById('installer-address').value,
        installerCity: document.getElementById('installer-city').value,
        installerState: document.getElementById('installer-state').value,
        installerZip: document.getElementById('installer-zip').value,
        installerPhone: document.getElementById('installer-phone').value,
        installerEmail: document.getElementById('installer-email').value,
        installerLicenseNumber: document.getElementById('installer-license-number').value,
        installerLicenseType: document.getElementById('installer-license-type').value,

        //installer rep info section
        repName: document.getElementById('rep-name').value,
        repAddress: document.getElementById('rep-address').value,
        repCity: document.getElementById('rep-city').value,
        repState: document.getElementById('rep-state').value,
        repZip: document.getElementById('rep-zip').value,
        repPhone: document.getElementById('rep-phone').value,
        repEmail: document.getElementById('rep-email').value,

        //system info section
        electricalInspPassDate: document.getElementById('electrical-insp-pass-date').value,
        permitNumber: document.getElementById('permit-number').value,
        permitIssueDate: document.getElementById('permit-issue-date').value,
        permitIssuer: document.getElementById('permit-issuer').value,
        systemSize: document.getElementById('system-size').value,
        inverterManufacturer: document.getElementById('inverter-manufacturer').value,
        inverterSize: document.getElementById('inverter-size').value,
        totalInverterSize: document.getElementById('total-inverter-size').value,
        batteryTotalSize: document.getElementById('battery-total-size').value,
        batteryKwh: document.getElementById('battery-Kwh').value,
        batteryModelNumber: document.getElementById('battery-model-number').value,
        mountType: document.getElementById('mount-type').value,
        interconnectUtility: document.getElementById('interconnect-utility').value,
        moduleTilt: document.getElementById('module-tilt').value,
        azimuthAngle: document.getElementById('azimuth-angle').value,
        moduleManufacturer: document.getElementById('module-manufacturer').value,
        moduleModelNumber: document.getElementById('module-model-number').value,
        moduleQuantity: document.getElementById('module-quantity').value,

        //pricing info section
        costPerModule: document.getElementById('cost-per-module').value,
        modulesTotalCost: document.getElementById('modules-total-cost').value,
        otherMaterialsCost: document.getElementById('other-materials-cost').value,
        laborCost: document.getElementById('labor-cost').value,
        mpuCost: document.getElementById('mpu-cost').value,
        roofCost: document.getElementById('roof-cost').value,
        batteryYN: document.getElementById('battery-YN').value,
        batteryQuantity: document.getElementById('battery-quantity').value,
        costPerBattery: document.getElementById('cost-per-battery').value,
        batteryTotalCost: document.getElementById('battery-total-cost').value,
        otherCosts: document.getElementById('other-costs').value,
        totalSystemCost: document.getElementById('total-system-cost').value,
        disallowedCosts: document.getElementById('disallowed-costs').value,
        totalContractAmount: document.getElementById('total-contract-amount').value,

    };

    // Load the PDF template
    const pdfBytes1 = await fetch('/pdf-templates/other-costs-invoice-template.pdf').then(res => res.arrayBuffer());
    const pdfDoc1 = await PDFDocument.load(pdfBytes1);

    const pdfBytes2 = await fetch('/pdf-templates/contractor-invoice-template.pdf').then(res => res.arrayBuffer());
    const pdfDoc2 = await PDFDocument.load(pdfBytes2);

    const pdfBytes3 = await fetch('/pdf-templates/instructions-template.pdf').then(res => res.arrayBuffer());
    const pdfDoc3 = await PDFDocument.load(pdfBytes3);

    const PdfBytes4 = await fetch('/pdf-templates/trd-41406.pdf').then(res => res.arrayBuffer());

    // Fill in form 1 fields
    const fillForm1Fields = (form, formData) => {
        form.getTextField('customerName').setText(formData.customerName);
        form.getTextField('customerAddress').setText(formData.customerAddress);
        form.getTextField('customerCity').setText(formData.customerCity);
        form.getTextField('customerState').setText(formData.customerState);
        form.getTextField('customerZip').setText(formData.customerZip);

        form.getTextField('installerCompanyName').setText(formData.installerCompanyName);
        form.getTextField('installerAddress').setText(formData.installerAddress);
        form.getTextField('installerCity').setText(formData.installerCity);
        form.getTextField('installerState').setText(formData.installerState);
        form.getTextField('installerZip').setText(formData.installerZip);

        form.getTextField('electricalInspPassDate').setText(formData.electricalInspPassDate);

        form.getTextField('totalSystemCost').setText(formData.totalSystemCost);
        form.getTextField('disallowedCosts').setText(formData.disallowedCosts);
        form.getTextField('totalContractAmount').setText(formData.totalContractAmount);
    }

    // Fill in form 2 fields
    const fillForm2Fields = (form, formData) => {
        form.getTextField('customerName').setText(formData.customerName);
        form.getTextField('customerAddress').setText(formData.customerAddress);
        form.getTextField('customerCity').setText(formData.customerCity);
        form.getTextField('customerState').setText(formData.customerState);
        form.getTextField('customerZip').setText(formData.customerZip);

        form.getTextField('installerCompanyName').setText(formData.installerCompanyName);
        form.getTextField('installerAddress').setText(formData.installerAddress);
        form.getTextField('installerCity').setText(formData.installerCity);
        form.getTextField('installerState').setText(formData.installerState);
        form.getTextField('installerZip').setText(formData.installerZip);

        form.getTextField('electricalInspPassDate').setText(formData.electricalInspPassDate);

        form.getTextField('moduleManufacturer').setText(formData.moduleManufacturer);
        form.getTextField('moduleModelNumber').setText(formData.moduleModelNumber);
        form.getTextField('moduleQuantity').setText(formData.moduleQuantity);

        form.getTextField('batteryQuantity').setText(formData.batteryQuantity);
        form.getTextField('batteryModelNumber').setText(formData.batteryModelNumber);

        form.getTextField('costPerModule').setText(formData.costPerModule);
        form.getTextField('costPerBattery').setText(formData.costPerBattery);
        form.getTextField('batteryTotalCost').setText(formData.batteryTotalCost);
        form.getTextField('modulesTotalCost').setText(formData.modulesTotalCost);
        form.getTextField('otherCosts').setText(formData.otherCosts);
        form.getTextField('laborCost').setText(formData.laborCost);
        form.getTextField('mpuCost').setText(formData.mpuCost);
        form.getTextField('roofCost').setText(formData.roofCost);
        form.getTextField('totalContractAmount').setText(formData.totalContractAmount);
    }

    // Fill in form 3 fields
    const fillForm3Fields = (form, formData) => {

        form.getTextField('installerCompanyName').setText(formData.installerCompanyName);
        form.getTextField('installerCity').setText(formData.installerCity);
        form.getTextField('installerState').setText(formData.installerState);
        form.getTextField('installerPhone').setText(formData.installerPhone);
        form.getTextField('installerEmail').setText(formData.installerEmail);
        form.getTextField('installerLicenseNumber').setText(formData.installerLicenseNumber);
        form.getTextField('installerLicenseType').setText(formData.installerLicenseType);

        form.getTextField('repName').setText(formData.repName);
        form.getTextField('repAddress').setText(formData.repAddress);
        form.getTextField('repCity').setText(formData.repCity);
        form.getTextField('repState').setText(formData.repState);
        form.getTextField('repZip').setText(formData.repZip);
        form.getTextField('repPhone').setText(formData.repPhone);
        form.getTextField('repEmail').setText(formData.repEmail);

        form.getTextField('electricalInspPassDate').setText(formData.electricalInspPassDate);
        form.getTextField('permitNumber').setText(formData.permitNumber);
        form.getTextField('permitIssueDate').setText(formData.permitIssueDate);
        form.getTextField('permitIssuer').setText(formData.permitIssuer);
        form.getTextField('systemSize').setText(formData.systemSize);
        form.getTextField('inverterManufacturer').setText(formData.inverterManufacturer);
        form.getTextField('inverterSize').setText(formData.inverterSize);
        form.getTextField('totalInverterSize').setText(formData.totalInverterSize);
        form.getTextField('mountType').setText(formData.mountType);
        form.getTextField('interconnectUtility').setText(formData.interconnectUtility);
        form.getTextField('moduleTilt').setText(formData.moduleTilt);
        form.getTextField('azimuthAngle').setText(formData.azimuthAngle);
        form.getTextField('moduleManufacturer').setText(formData.moduleManufacturer);
        form.getTextField('moduleModelNumber').setText(formData.moduleModelNumber);
        form.getTextField('moduleQuantity').setText(formData.moduleQuantity);

        form.getTextField('costPerModule').setText(formData.costPerModule);
        form.getTextField('laborCost').setText(formData.laborCost);
        form.getTextField('totalSystemCost').setText(formData.totalSystemCost);
        form.getTextField('disallowedCosts').setText(formData.disallowedCosts);
        form.getTextField('totalContractAmount').setText(formData.totalContractAmount);

        form.getTextField('batteryYN').setText(formData.batteryYN);
        form.getTextField('batteryTotalSize').setText(formData.batteryTotalSize);
        form.getTextField('batteryKwh').setText(formData.batteryKwh);
        form.getTextField('batteryModelNumber').setText(formData.batteryModelNumber);
        form.getTextField('batteryQuantity').setText(formData.batteryQuantity);
        form.getTextField('costPerBattery').setText(formData.costPerBattery);
    }

    const form1 = pdfDoc1.getForm();
    fillForm1Fields(form1, formData);

    const form2 = pdfDoc2.getForm();
    fillForm2Fields(form2, formData);

    const form3 = pdfDoc3.getForm();
    fillForm3Fields(form3, formData);


    //Save updated PDF
    const filledPdfBytes1 = await pdfDoc1.save();
    const filledPdfBytes2 = await pdfDoc2.save();
    const filledPdfBytes3 = await pdfDoc3.save();

    //Trigger the download
    const blob = new Blob([filledPdfBytes1], { type: 'application/pdf' });
    const link1 = document.createElement('a');
    link1.href = URL.createObjectURL(blob);
    link1.download = `Other_Costs_Invoice_${formData.customerName}.pdf`;
    link1.click();

    const blob2 = new Blob([filledPdfBytes2], { type: 'application/pdf' });
    const link2 = document.createElement('a');
    link2.href = URL.createObjectURL(blob2);
    link2.download = `Contractor_Invoice_${formData.customerName}.pdf`;
    link2.click();

    const blob3 = new Blob([filledPdfBytes3], { type: 'application/pdf' });
    const link3 = document.createElement('a');
    link3.href = URL.createObjectURL(blob3);
    link3.download = `Instructions_${formData.customerName}.pdf`;
    link3.click();

    const blob4 = new Blob([PdfBytes4], { type: 'application/pdf' });
    const link4 = document.createElement('a');
    link4.href = URL.createObjectURL(blob4);
    link4.download = `TRD_41406_State.pdf`;
    link4.click();

});

