
import JSPM from 'https://cdn.skypack.dev/jsprintmanager';

import childProcess from 'https://cdn.skypack.dev/child_process';
import cloudseanPdfToPrinter from 'https://cdn.skypack.dev/cloudsean-pdf-to-printer'

export class Printer {

    constructor() {
        
    }
/** 
    createPdfWithjsPrintManager(){

        JSPM.JSPrintManager.auto_reconnect = true;
        JSPM.JSPrintManager.start();
        const cpj = new JSPM.ClientPrintJob();
        cpj.clientPrinter = new JSPM.DefaultPrinter();
        var my_file = new JSPM.PrintFilePDF('test.pdf', JSPM.FileSourceType.URL, 'MyFile.pdf', 1);
		
		cpj.files.push(my_file);

        // Send print job to printer!
        cpj.sendToClient();

       

    }
    */
    createPdfWithPdfToPrint(){
        
        console.log('hello')
cloudseanPdfToPrinter
  .print("./test.pdf")
  .then(console.log)
  .catch(console.error);
    }
}