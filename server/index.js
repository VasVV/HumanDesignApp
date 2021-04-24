const express = require('express');
const Stripe = require('stripe');
const cors = require('cors');
const btoa = require('btoa');
var base64Img = require('base64-img');
const path = require('path');
const pnfs = require("pn/fs");
const captureWebsite = require('capture-website');
const nodemailer = require("nodemailer");
const puppeteer = require('puppeteer');

//stripe 
const app = express();
const stripe = new Stripe('sk_test_51IRxezLeEfBz7v63tNaTPPWBdlMaVCVHxVDsqQ5Z4BzVxIf5fgxI4fTkznzt1S8ZRNnyc146VPqA29I4lmsNl1C600nnih2m6x');

var bodyParser = require('body-parser');



app.use(bodyParser({limit: '4MB'}))
app.use(bodyParser.urlencoded({limit: '5mb', extended: true}));


app.use(cors({origin: 'http://localhost:3000'})); 

app.use(express.json());



app.post('/api/checkout', async (req, res) => {
    
    const {id, amount, description} = req.body;

    const payment = await stripe.paymentIntents.create({
        amount,
        currency: "EUR",
        description,
        payment_method: id,
        confirm: true
    });


    console.log(payment);
    res.send({message: 'Sucess payment'});
});


const { ImgurClient } = require('imgur');

let client;

client = new ImgurClient({ accessToken: '951002f7bcce68011275532e7e0ce8745417f07b' });






//download image
const https = require('https');
const fs = require('fs');
app.use('/', express.static(__dirname+'/../src/img/bodygraphs' ));
// app.use('/img/bodygraphs', express.static(__dirname + '/img/bodygraphs'));
// app.use(express.static(__dirname + '/public'));

app.post('/downloadimg', (req, res) => {
    //console.log(req.body);
    let path = `./src/img/bodygraphs/${req.body.params.filename}`;
    https.get(req.body.params.url, function(res){
        const fileStream = fs.createWriteStream(`./src/img/bodygraphs/${req.body.params.filename}`);
        res.pipe(fileStream);
        fileStream.on('finish', function() {
            fileStream.close();
            console.log('done');
                    })
                });
    res.send('downloaded');


   

    

 
    // async function imgur() {
    //     const response = await client.upload(path);
    //     console.log(response.link);
    // }
    // imgur();

})






//uploading image to imgur





//downloading pdf
const Anvil = require('@anvilco/anvil');

const pdfTemplateID = 'fukMYxVuzF2BoUtXLNk6'


const apiKey = 'YpL1QrATKdEETO3iWHsj0dtHPLr62tuN'





app.post('/downloadpdf', (req, res) => {
    let p = req.body.params;
    let filename = p.name.split(' ').join('') +'.svg';
    //let path = __dirname+'/../src/img/bodygraphs/';
    let loc =  (__dirname+`/../src/img/bodygraphs/pngs/${p.name}.png`).toString();
  
    var input = path+filename;
    (async () => {
        await captureWebsite.file(p.bodygraph,loc, {
            height: 350,
            width: 332
        });
    })();


    (async () => {
        const response = await client.upload(loc);
        console.log(response.data.link);
        let puno = p.puertasUno[0];
    let pdos = p.puertasUno[1];
    let ptres = p.puertasDos[0];
    let pcuatro = p.puertasDos[1];
    console.log(p.corr)
    const payload = {
        "title": "My PDF Title",
        "fontSize": 10,
        "data": {
            "Nombre": p.name,
            "Fecha": p.fecha,
            "Hora": p.hora,
            "Lugar": p.lugar,
            "Tipo": p.tipo,
            "TipoDescripcion": p.tipodesc,
            "Corr": p.corr.toLowerCase(),
            "Incorr": p.incorr.toLowerCase(),
            "Estrategia": p.estrategia,
            "Autoridad": p.autoridad,
            "PerfilUno": p.perfilUno,
            "PerfilDos": p.perfilDos,
            "PerfilDescripcion": p.perfilDescripcion,
            "Definicion": p.definicion,
            "Bodygraph": response.data.link,
            "Cabeza": p.cabeza == 'opened' ? 'https://i.imgur.com/BdU4va9.jpg' : 'https://i.imgur.com/TPLIbop.jpg',
            "Ajna": p.ajna == 'opened' ? 'https://i.imgur.com/Ib8EyKZ.jpg' : 'https://i.imgur.com/pjicwet.jpg' ,
            "Garganta": p.garganta == 'opened' ? 'https://i.imgur.com/vWA2Hhs.jpg' : 'https://i.imgur.com/nuGnPzR.jpg',
            "GI": p.gi == 'opened' ? 'https://i.imgur.com/mrBgCDI.jpg' : 'https://i.imgur.com/VJ6yuTV.jpg' ,
            "Corazon": p.corazon == 'opened' ? 'https://i.imgur.com/Esl4tuy.jpg' : 'https://i.imgur.com/qJ4hXEM.jpg',
            "PlexoSolar": p.plexoSolar == 'opened' ? 'https://i.imgur.com/WySdnAP.jpg' : 'https://i.imgur.com/B0C0XsT.jpg',
            "Sacral": p.sacral == 'opened' ? 'https://i.imgur.com/4GZbKZZ.jpg' : 'https://i.imgur.com/q5J0vYu.jpg',
            "Bazo": p.bazo == 'opened' ? 'https://i.imgur.com/vPDlxKk.jpg' : 'https://i.imgur.com/Mzmwe2o.jpg' ,
            "Raiz": p.raiz == 'opened' ? 'https://i.imgur.com/mooSy9b.jpg' : 'https://i.imgur.com/7xVrCXi.jpg',
            "PuertasUnoUno": puno, 
            "PuertasUnoDos": pdos,
            "PuertasDosUno": ptres,
            "PuertasDosDos": pcuatro,
            "CruzNombre": p.cruzNombre,
            "FechaDiseno": p.currdate,
            "Logo": "https://i.imgur.com/qcm5Al0.jpg",
            "CanalUno": p.CanalUno,
            "CanalDos": p.CanalDos,
            "CanalTres": p.CanalTres,
            "CanalCuatro": p.CanalCuatro,
            "CanalCinco": p.CanalCinco,
            "CanalSeis": p.CanalSeis,
            "CanalSiete": p.CanalSiete,
            "CanalOcho": p.CanalOcho
        }
      }
      
      const options = {
        "dataType": "buffer"
      }
      
      console.log('pdf created')
      async function getData(payload, options) {
        const anvilClient = new Anvil({ apiKey });
        const { statusCode, data } = await anvilClient.fillPDF(pdfTemplateID, payload, options);
        console.log(statusCode);
        
        fs.writeFileSync(`${p.name.split(' ').join('')}.pdf`, data, { encoding: null })
    }

    
    getData(payload, options).catch(err => console.log(err));
    })();
   
     
    
})

//sending email
app.post('/sendmail', (req,res) => {
    let p = req.body.params;
    async function main() {
        // Generate test SMTP service account from ethereal.email
        // Only needed if you don't have a real mail account for testing
        let testAccount = await nodemailer.createTestAccount();
      
        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
          host: 'smtp.gmail.com',
          port: 465,
          secure: true, // true for 465, false for other ports
          auth: {
            user: 'radioheadboy0@gmail.com', // generated ethereal user
            pass: 'brbaricvegcwyarf', // generated ethereal password
          },
        });
      
        // send mail with defined transport object
        let info = await transporter.sendMail({
            attachments: [
                {
                    filename: 'TuAnalisis.pdf',
                    path: `./${p.name}.pdf`
                }
            ],  
          from: '"QND" <foo@example.com>', // sender address
          to: p.mail, // list of receivers
          subject: "✔ Tu analisis basico esta completo", // Subject line
          html: `Hola, ${p.name} <br /> Te envio tu analisis basico del Diseno Humano. <br /> Cualquiera consulta a tu disposicion, <br /> equipo QND `, // html body
        });
      
        console.log("Message sent: %s", info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
      
        // Preview only available when sending through an Ethereal account
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
      }

      main().catch(console.error);
})









app.listen(3001, () => {
    console.log('server listened', 3001)
})
