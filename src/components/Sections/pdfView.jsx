// npm install @react-pdf/renderer
import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

// Ensure that PDF.js is configured correctly
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PdfViewer = ({ pdfURL }) => {
 return (
    <Document   file={pdfURL}>
      <Page  height={10} width={window.innerWidth < 960 ? 370:1300} pageNumber={1} />
    </Document>
 );
};

export default PdfViewer;