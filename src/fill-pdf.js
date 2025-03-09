const express = require('express');
const fs = require('fs');
const PDFDocument = require('pdfkit');
const path = require('path');

const app = express();
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Route to serve the HTML form
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Route to generate PDF
app.post('/generate-pdf', (req, res) => {
    const doc = new PDFDocument();

    // Set file path for the generated PDF
    const filePath = path.join(__dirname, 'output.pdf');
    doc.pipe(fs.createWriteStream(filePath));

    // Get the form data from the POST request
    const {
        customerName,
        address,
        city,
        state,
        county,
        zipCode,
        installerCompanyName,
        installerCity,
        installerState,
        installerZipCode,
        installerPhoneNumber,
        installerEmail,
        installerLicenseNumber,
        installerLicenseType,
        repName,
        repAddress,
        repCity,
        repState,
        repZipCode,
        repPhoneNumber,
        repEmail,
        electricalInspPassDate,
        systemSize,
        inverterManufacturer,
        inverterSize,
        totalInverterSize,
        mountType,
        interconnectUtility,
        moduleTilt,
        azimuthAngle,
        moduleManufacturer,
        moduleModelNumber,
        moduleQuantity,
        costPerModule,
        modulesTotalCost
    } = req.body;

    // Add form data to the PDF
    doc.fontSize(12)
        .text(`Customer Name: ${customerName}`, 100, 100)
        .text(`Address: ${address}`, 100, 120)
        .text(`City: ${city}`, 100, 140)
        .text(`State: ${state}`, 100, 160)
        .text(`County: ${county}`, 100, 180)
        .text(`Zip Code: ${zipCode}`, 100, 200)
        .text(`Installer Company Name: ${installerCompanyName}`, 100, 220)
        .text(`Installer City: ${installerCity}`, 100, 240)
        .text(`Installer State: ${installerState}`, 100, 260)
        .text(`Installer Zip Code: ${installerZipCode}`, 100, 280)
        .text(`Installer Phone Number: ${installerPhoneNumber}`, 100, 300)
        .text(`Installer Email: ${installerEmail}`, 100, 320)
        .text(`Installer License Number: ${installerLicenseNumber}`, 100, 340)
        .text(`Installer License Type: ${installerLicenseType}`, 100, 360)
        .text(`Representative Name: ${repName}`, 100, 380)
        .text(`Representative Address: ${repAddress}`, 100, 400)
        .text(`Representative City: ${repCity}`, 100, 420)
        .text(`Representative State: ${repState}`, 100, 440)
        .text(`Representative Zip Code: ${repZipCode}`, 100, 460)
        .text(`Representative Phone Number: ${repPhoneNumber}`, 100, 480)
        .text(`Representative Email: ${repEmail}`, 100, 500)
        .text(`Electrical Inspection Pass Date: ${electricalInspPassDate}`, 100, 520)
        .text(`System Size: ${systemSize}`, 100, 540)
        .text(`Inverter Manufacturer: ${inverterManufacturer}`, 100, 560)
        .text(`Inverter Size: ${inverterSize}`, 100, 580)
        .text(`Total Inverter Size: ${totalInverterSize}`, 100, 600)
        .text(`Mount Type: ${mountType}`, 100, 620)
        .text(`Interconnect Utility: ${interconnectUtility}`, 100, 640)
        .text(`Module Tilt: ${moduleTilt}`, 100, 660)
        .text(`Azimuth Angle: ${azimuthAngle}`, 100, 680)
        .text(`Module Manufacturer: ${moduleManufacturer}`, 100, 700)
        .text(`Module Model Number: ${moduleModelNumber}`, 100, 720)
        .text(`Module Quantity: ${moduleQuantity}`, 100, 740)
        .text(`Cost Per Module: ${costPerModule}`, 100, 760)
        .text(`Modules Total Cost: ${modulesTotalCost}`, 100, 780);

    doc.end();

    // Once PDF is created, send the file to the user
    res.download(filePath, 'generated-document.pdf', (err) => {
        if (err) {
            res.status(500).send('Error downloading the file');
        } else {
            fs.unlink(filePath, (err) => { // Delete the file after sending
                if (err) console.log('Error deleting the file:', err);
            });
        }
    });
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
