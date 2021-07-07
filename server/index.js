const express = require("express");
const Stripe = require("stripe");
const cors = require("cors");



// const captureWebsite = require("capture-website");
const nodemailer = require("nodemailer");

const sharp = require("sharp");
const path = require('path');


//stripe
const app = express();
const stripe = new Stripe(
  "sk_test_51IRxezLeEfBz7v63tNaTPPWBdlMaVCVHxVDsqQ5Z4BzVxIf5fgxI4fTkznzt1S8ZRNnyc146VPqA29I4lmsNl1C600nnih2m6x"
);

var bodyParser = require("body-parser");



app.use(bodyParser({ limit: "4MB" }));
app.use(bodyParser.urlencoded({ limit: "5mb", extended: true }));

app.use(cors({origin: true}));

app.use(express.json());

app.post('/checkout', async (req, res) => {
  const { id, amount, description } = req.body;

  const payment = await stripe.paymentIntents.create({
    amount,
    currency: "EUR",
    description,
    payment_method: id,
    confirm: true,
  });

  res.send({ message: "Sucess payment" });
});

const { ImgurClient } = require("imgur");

let client;

client = new ImgurClient({
  accessToken: "951002f7bcce68011275532e7e0ce8745417f07b",
});

//download image
const https = require("https");
const fs = require("fs");
app.use("/", express.static(__dirname + "/../src/img/bodygraphs"));
// app.use('/img/bodygraphs', express.static(__dirname + '/img/bodygraphs'));
// app.use(express.static(__dirname + '/public'));

app.post("/downloadimg", (req, res) => {
  https.get(req.body.params.url, function (res) {
    const fileStream = fs.createWriteStream(
      path.join(__dirname, `/../src/img/bodygraphs/${req.body.params.filename}`)
    );
    res.pipe(fileStream);
    fileStream.on("finish", function () {
      fileStream.close();
      console.log("done");
    });
  });
  res.send("downloaded");

  // async function imgur() {
  //     const response = await client.upload(path);
  //     console.log(response.link);
  // }
  // imgur();
});

//uploading image to imgur

//downloading pdf
const Anvil = require("@anvilco/anvil");

const pdfTemplateID = "fukMYxVuzF2BoUtXLNk6";

const apiKey = "YpL1QrATKdEETO3iWHsj0dtHPLr62tuN";

app.post("/uploadimage", (req, res) => {
  async () => {
    const response = await client.upload(req.body.img);
    return response.data.link;
  };
});

app.post("/downloadpdf", async (req, res) => {
  let p = req.body.params;
  let loc = (
    __dirname + `/../src/img/bodygraphs/pngs/${p.name}.png`
  ).toString();

    //puppeteer problem
  // try {
  //   await captureWebsite.file(p.bodygraph, loc, {
  //     height: 350,
  //     width: 332,
  //   });
  // } catch (err) {
  //   console.log(err);
  // }

  let cropped = (
    __dirname + `/../src/img/bodygraphs/pngs/${p.name}CROPPED.png`
  ).toString();

  try {
    if (!fs.existsSync(cropped)) {
      await sharp(loc)
        .extract({ width: 663, height: 620, left: 0, top: 70 })
        .toFile(cropped)
        .then(function (new_file_info) {
          console.log("Image cropped and saved");
        })
        .catch(function (err) {
          console.log(err);
        });
    }
  } catch (err) {
    console.error(err);
  }

  const response = await client.upload(cropped);
  let puno = p.puertasUno[0];
  let pdos = p.puertasUno[1];
  let ptres = p.puertasDos[0];
  let pcuatro = p.puertasDos[1];
  let estrategia = p.estrategia;
  let estrategiaCap =
    estrategia.charAt(0).toUpperCase() + estrategia.slice(1).toLowerCase();
  let autoridad = p.autoridad;
  let autoridadCap =
    autoridad.charAt(0).toUpperCase() + autoridad.slice(1).toLowerCase();
  let Resumen = p.Resumen;
  const payload = {
    title: "My PDF Title",
    fontSize: 10,
    data: {
      Nombre: p.name,
      Fecha: p.fecha,
      Hora: p.hora,
      Lugar: p.lugar,
      Tipo: p.tipo,
      TipoDescripcion: p.tipodesc,
      Corr1: p.corr1.toUpperCase(),
      Incorr1: p.incorr1.toUpperCase(),
      Corr2: p.corr2,
      Incorr2: p.incorr2,
      Estrategia: estrategiaCap,
      Autoridad: autoridadCap,
      PerfilUno: p.perfilUno,
      PerfilDos: p.perfilDos,
      PerfilDescripcion: p.perfilDescripcion,
      Definicion: p.definicion,
      Bodygraph: response.data.link,
      Cabeza:
        p.cabeza == "opened"
          ? "https://i.imgur.com/BdU4va9.jpg"
          : "https://i.imgur.com/TPLIbop.jpg",
      Ajna:
        p.ajna == "opened"
          ? "https://i.imgur.com/Ib8EyKZ.jpg"
          : "https://i.imgur.com/pjicwet.jpg",
      Garganta:
        p.garganta == "opened"
          ? "https://i.imgur.com/vWA2Hhs.jpg"
          : "https://i.imgur.com/nuGnPzR.jpg",
      GI:
        p.gi == "opened"
          ? "https://i.imgur.com/mrBgCDI.jpg"
          : "https://i.imgur.com/VJ6yuTV.jpg",
      Corazon:
        p.corazon == "opened"
          ? "https://i.imgur.com/Esl4tuy.jpg"
          : "https://i.imgur.com/qJ4hXEM.jpg",
      PlexoSolar:
        p.plexosolar == "opened"
          ? "https://i.imgur.com/WySdnAP.jpg"
          : "https://i.imgur.com/B0C0XsT.jpg",
      Sacral:
        p.sacral == "opened"
          ? "https://i.imgur.com/4GZbKZZ.jpg"
          : "https://i.imgur.com/q5J0vYu.jpg",
      Bazo:
        p.bazo == "opened"
          ? "https://i.imgur.com/vPDlxKk.jpg"
          : "https://i.imgur.com/Mzmwe2o.jpg",
      Raiz:
        p.raiz == "opened"
          ? "https://i.imgur.com/mooSy9b.jpg"
          : "https://i.imgur.com/7xVrCXi.jpg",
      PuertasUnoUno: puno,
      PuertasUnoDos: pdos,
      PuertasDosUno: ptres,
      PuertasDosDos: pcuatro,
      CruzNombre: p.cruzNombre,
      FechaDiseno: p.currdate,
      Logo: p.logo,
      CanalUno: p.CanalUno,
      CanalDos: p.CanalDos,
      CanalTres: p.CanalTres,
      CanalCuatro: p.CanalCuatro,
      CanalCinco: p.CanalCinco,
      CanalSeis: p.CanalSeis,
      CanalSiete: p.CanalSiete,
      CanalOcho: p.CanalOcho,
      Cuantas: p.cuantas,
      UserImage: p.UserImage,
      Resumen: Resumen,
    },
  };

  const options = {
    dataType: "buffer",
  };

  const anvilClient = await new Anvil({ apiKey });
  const { statusCode, data } = await anvilClient.fillPDF(
    pdfTemplateID,
    payload,
    options
  );

  try {
    fs.writeFile(`${p.name.split(" ").join("")}.pdf`, data, (err) => {
      if (err) throw err;
      console.log('The file has been saved!');
    });

     
     res.send(`${p.name.split(" ").join("")}.pdf`);
    
    
  } catch (err) {
    console.log(err);
  }

  
  

  
});

app.get("/downloadpdftodisk", async (req, res) => {

  const loc = __dirname + '/../' + req.query.filename;
  var filestream = fs.createReadStream(loc);
  filestream.pipe(res);

    

})

app.post("/downloadpdfcompleto", async(req, res) => {
  let p = req.body.params;
  let loc = (
    __dirname + `/../src/img/bodygraphs/pngs/${p.name}.png`
  ).toString();

  
    await captureWebsite.file(p.bodygraph, loc, {
      height: 350,
      width: 332,
    });
  

  
    const response = await client.upload(loc);

    let puno = p.puertasUno[0];
    let pdos = p.puertasUno[1];
    let ptres = p.puertasDos[0];
    let pcuatro = p.puertasDos[1];
    let estrategia = p.estrategia;
    let estrategiaCap =
      estrategia.charAt(0).toUpperCase() + estrategia.slice(1).toLowerCase();
    let autoridad = p.autoridad;
    let autoridadCap =
      autoridad.charAt(0).toUpperCase() + autoridad.slice(1).toLowerCase();

    const payload = {
      title: "My PDF Title",
      fontSize: 10,
      data: {
        Nombre: p.name,
        Fecha: p.fecha,
        Hora: p.hora,
        Lugar: p.lugar,
        Tipo: p.tipo,
        TipoDescripcion: p.tipodesc,
        Corr1: p.corr.toUpperCase(),
        Incorr1: p.incorr.toUpperCase(),
        Estrategia: estrategiaCap,
        Autoridad: autoridadCap,
        PerfilUno: p.perfilUno,
        PerfilDos: p.perfilDos,
        PerfilDescripcion: p.perfilDescripcion,
        Definicion: p.definicion,
        Bodygraph: response.data.link,
        Cabeza:
          p.cabeza == "opened"
            ? "https://i.imgur.com/BdU4va9.jpg"
            : "https://i.imgur.com/TPLIbop.jpg",
        Ajna:
          p.ajna == "opened"
            ? "https://i.imgur.com/Ib8EyKZ.jpg"
            : "https://i.imgur.com/pjicwet.jpg",
        Garganta:
          p.garganta == "opened"
            ? "https://i.imgur.com/vWA2Hhs.jpg"
            : "https://i.imgur.com/nuGnPzR.jpg",
        GI:
          p.gi == "opened"
            ? "https://i.imgur.com/mrBgCDI.jpg"
            : "https://i.imgur.com/VJ6yuTV.jpg",
        Corazon:
          p.corazon == "opened"
            ? "https://i.imgur.com/Esl4tuy.jpg"
            : "https://i.imgur.com/qJ4hXEM.jpg",
        PlexoSolar:
          p.plexosolar == "opened"
            ? "https://i.imgur.com/WySdnAP.jpg"
            : "https://i.imgur.com/B0C0XsT.jpg",
        Sacral:
          p.sacral == "opened"
            ? "https://i.imgur.com/4GZbKZZ.jpg"
            : "https://i.imgur.com/q5J0vYu.jpg",
        Bazo:
          p.bazo == "opened"
            ? "https://i.imgur.com/vPDlxKk.jpg"
            : "https://i.imgur.com/Mzmwe2o.jpg",
        Raiz:
          p.raiz == "opened"
            ? "https://i.imgur.com/mooSy9b.jpg"
            : "https://i.imgur.com/7xVrCXi.jpg",
        PuertasUnoUno: puno,
        PuertasUnoDos: pdos,
        PuertasDosUno: ptres,
        PuertasDosDos: pcuatro,
        CruzNombre: p.cruzNombre,
        FechaDiseno: p.currdate,
        Logo: "https://i.imgur.com/o7LC7ua.jpg",
        CanalUno: p.CanalUno,
        CanalDos: p.CanalDos,
        CanalTres: p.CanalTres,
        CanalCuatro: p.CanalCuatro,
        CanalCinco: p.CanalCinco,
        CanalSeis: p.CanalSeis,
        CanalSiete: p.CanalSiete,
        CanalOcho: p.CanalOcho,
        Cuantas: p.cuantas,
        TipoUpperCase: "TipoUpperCase",
        TipoPorcentaje: p.TipoPorcentaje,
        DefinidoUno: p.DefinidoUno,
        DefinidoUnoImg: p.DefinidoUnoImg,
        DefinidoDos: p.DefinidoDos,
        DefinidoDosImg: p.DefinidoDosImg,
        Conectado: p.Conectado,
        Aura: p.Aura,
        TipoImg: p.TipoImg,
        Modo: p.Modo,
        EstrategiaCompleto: p.EstrategiaCompleto,
        Rol: p.Rol,
        Tema: p.Tema,
        Busqueda: p.Busqueda,
        Dilema: p.Dilema,
        Psicologia: p.Psicologia,
        Pregunta: p.Pregunta,
        NoSer: p.NoSer,
        TipoLineaUno: p.TipoLineaUno,
        TipoLineaDos: p.TipoLineaDos,
        TipoLineaTres: p.TipoLineaTres,
        TipoLineaCuatro: p.TipoLineaCuatro,
        TipoLineaCinco: p.TipoLineaCinco,
        TipoLineaSeis: p.TipoLineaSeis,
        TipoLineaSeite: p.TipoLineaSeite,
        TipoLineaOcho: p.TipoLineaOcho,
        TipoLineaNueve: p.TipoLineaNueve,
        TipoLineaDiez: p.TipoLineaDiez,
        TipoLineaOnce: p.TipoLineaOnce,
        TipoUpperCaseDos: p.TipoUpperCaseDos,
        TipoImgDos: p.TipoImgDos,
        Estrategia1num: p.Estrategia1num,
        Estrategia1: p.Estrategia1,
        Estrategia2num: p.Estrategia2num,
        Estrategia2: p.Estrategia2,
        Estrategia3num: p.Estrategia3num,
        Estrategia3: p.Estrategia3,
        Estrategia4num: p.Estrategia4num,
        Estrategia4: p.Estrategia4,
        Estrategia5num: p.Estrategia5num,
        Estrategia5: p.Estrategia5,
        Estrategia6num: p.Estrategia6num,
        Estrategia6: p.Estrategia6,
        Estrategia7num: p.Estrategia7num,
        Estrategia7: p.Estrategia7,
        Estrategia8num: p.Estrategia8num,
        Estrategia8: p.Estrategia8,
        Estrategia9num: p.Estrategia9num,
        Estrategia9: p.Estrategia9,
        Estrategia10num: p.Estrategia10num,
        Estrategia10: p.Estrategia10,
        Estrategia11num: p.Estrategia11num,
        Estrategia11: p.Estrategia11,
        Estrategia12num: p.Estrategia12num,
        Estrategia12: p.Estrategia12,
        Estrategia13: p.Estrategia13,
        Estrategia14: p.Estrategia14,
        Estrategia15: p.Estrategia15,
        Estrategia16: p.Estrategia16,
        Estrategia17: p.Estrategia17,
        Estrategia18: p.Estrategia18,
        Estrategia19: p.Estrategia19,
        Estrategia20: p.Estrategia20,
        Estrategia21: p.Estrategia21,
        Estrategia22: p.Estrategia22,
        Estrategia23: p.Estrategia23,
        Estrategia24: p.Estrategia24,
        Estrategia25: p.Estrategia25,
        Estrategia26: p.Estrategia26,
        Estrategia27: p.Estrategia27,
        Estrategia28: p.Estrategia28,
        Estrategia29: p.Estrategia29,
        Estrategia30: p.Estrategia30,
        Estrategia31: p.Estrategia31,
        Estrategia32: p.Estrategia32,
        Estrategia33: p.Estrategia33,
        Estrategia34: p.Estrategia34,
        Estrategia35: p.Estrategia35,
        Estrategia36: p.Estrategia36,
        Estrategia37: p.Estrategia37,
        Estrategia38: p.Estrategia38,
        Estrategia39: p.Estrategia39,
        Estrategia40: p.Estrategia40,
        Estrategia41: p.Estrategia41,
        Estrategia42: p.Estrategia42,
        Estrategia44: p.Estrategia44,
        Estrategia45: p.Estrategia45,
        Estrategia46: p.Estrategia46,
        Estrategia47: p.Estrategia47,
        Estrategia48: p.Estrategia48,
        Estrategia49: p.Estrategia49,
        Estrategia50: p.Estrategia50,
        Estrategia51: p.Estrategia51,
        Estrategia13num: p.Estrategia13num,
        Estrategia14num: p.Estrategia14num,
        Estrategia15num: p.Estrategia15num,
        Estrategia16num: p.Estrategia16num,
        Estrategia17num: p.Estrategia17num,
        Estrategia18num: p.Estrategia18num,
        Estrategia19num: p.Estrategia19num,
        Estrategia20num: p.Estrategia20num,
        Estrategia21num: p.Estrategia21num,
        Estrategia22num: p.Estrategia22num,
        Estrategia23num: p.Estrategia23num,
        Estrategia24num: p.Estrategia24num,
        Estrategia25num: p.Estrategia25num,
        Estrategia26num: p.Estrategia26num,
        Estrategia27num: p.Estrategia27num,
        Estrategia28num: p.Estrategia28num,
        Estrategia29num: p.Estrategia29num,
        Estrategia30num: p.Estrategia30num,
        Estrategia31num: p.Estrategia31num,
        Estrategia32num: p.Estrategia32num,
        Estrategia33num: p.Estrategia33num,
        Estrategia34num: p.Estrategia34num,
        Estrategia35num: p.Estrategia35num,
        Estrategia36num: p.Estrategia36num,
        Estrategia37num: p.Estrategia37num,
        Estrategia38num: p.Estrategia38num,
        Estrategia39num: p.Estrategia39num,
        Estrategia40num: p.Estrategia40num,
        Estrategia41num: p.Estrategia41num,
        Estrategia42num: p.Estrategia42num,
        Estrategia44num: p.Estrategia44num,
        Estrategia45num: p.Estrategia45num,
        Estrategia46num: p.Estrategia46num,
        Estrategia47num: p.Estrategia47num,
        Estrategia48num: p.Estrategia48num,
        Estrategia49num: p.Estrategia49num,
        Estrategia50num: p.Estrategia50num,
        Estrategia51num: p.Estrategia51num,
        AutoridadImg: p.AutoridadImg,
        AutoridadUpperCase: p.AutoridadUpperCase,
        AutoridadTexto: p.AutoridadTexto,
        Autoridad1: p.Autoridad1,
        Autoridad1num: p.Autoridad1num,
        Autoridad2: p.Autoridad2,
        Autoridad3: p.Autoridad3,
        Autoridad4: p.Autoridad4,
        Autoridad5: p.Autoridad5,
        Autoridad6: p.Autoridad6,
        Autoridad7: p.Autoridad7,
        Autoridad8: p.Autoridad8,
        Autoridad9: p.Autoridad9,
        Autoridad10: p.Autoridad10,
        Autoridad11: p.Autoridad11,
        Autoridad12: p.Autoridad12,
        Autoridad13: p.Autoridad13,
        Autoridad14: p.Autoridad14,
        Autoridad15: p.Autoridad15,
        Autoridad16: p.Autoridad16,
        Autoridad17: p.Autoridad17,
        Autoridad18: p.Autoridad18,
        Autoridad19: p.Autoridad19,
        Autoridad20: p.Autoridad20,
        Autoridad21: p.Autoridad21,
        Autoridad22: p.Autoridad22,
        Autoridad24: p.Autoridad24,
        Autoridad25: p.Autoridad25,
        Autoridad2num: p.Autoridad2num,
        Autoridad3num: p.Autoridad3num,
        Autoridad4num: p.Autoridad4num,
        Autoridad5num: p.Autoridad5num,
        Autoridad6num: p.Autoridad6num,
        Autoridad7num: p.Autoridad7num,
        Autoridad8num: p.Autoridad8num,
        Autoridad9num: p.Autoridad9num,
        Autoridad10num: p.Autoridad10num,
        Autoridad11num: p.Autoridad11num,
        Autoridad12num: p.Autoridad12num,
        Autoridad13num: p.Autoridad13num,
        Autoridad14num: p.Autoridad14num,
        Autoridad15num: p.Autoridad15num,
        Autoridad16num: p.Autoridad16num,
        Autoridad17num: p.Autoridad17num,
        Autoridad18num: p.Autoridad18num,
        Autoridad19num: p.Autoridad19num,
        Autoridad20num: p.Autoridad20num,
        Autoridad21num: p.Autoridad21num,
        Autoridad22num: p.Autoridad22num,
        Autoridad24num: p.Autoridad24num,
        Autoridad25num: p.Autoridad25num,
        DefinicionUpperCase: p.DefinicionUpperCase,
        ModoDefinicion: p.ModoDefinicion,
        Porcentaje: p.Porcentaje,
        Areas: p.Areas,
        ElementosPrincipal: p.ElementosPrincipal,
        ElementosSecundario: p.ElementosSecundario,
        Tiempo: p.Tiempo,
        Influencia: p.Influencia,
        Grafico: p.Grafico,
        Perfil11num: p.Perfil11num,
        Perfil10num: p.Perfil10num,
        Perfil9num: p.Perfil9num,
        Perfil8num: p.Perfil8num,
        Perfil7num: p.Perfil7num,
        Perfil6num: p.Perfil6num,
        Perfil5num: p.Perfil5num,
        Perfil4num: p.Perfil4num,
        Perfil3num: p.Perfil3num,
        Perfil2num: p.Perfil2num,
        Perfil1num: p.Perfil1num,
        Estrategia43: p.Estrategia43,
        Estrategia43num: p.Estrategia43num,
        Autoridad23: p.Autoridad23,
        Autoridad23num: p.Autoridad23num,
        PuertaImg1: p.PuertaImg1,
        PuertaImg2: p.PuertaImg2,
        PuertaImg3: p.PuertaImg3,
        PuertaImg4: p.PuertaImg4,
        CanalImg1: p.CanalImg1,
        CanalImg2: p.CanalImg2,
        CanalImg3: p.CanalImg3,
        CanalImg4: p.CanalImg4,
        CanalImg5: p.CanalImg5,
        CanalImg6: p.CanalImg6,
        CanalImg7: p.CanalImg7,
        CanalImg8: p.CanalImg8,
        CanalImg9: p.CanalImg9,
        CanalImg10: p.CanalImg10,
        CruzNombreUpperCase: p.CruzNombreUpperCase,
        CruzImg: p.CruzImg,
        Cruz1: p.Cruz1,
        Cruz2: p.Cruz2,
        Cruz3: p.Cruz3,
        Cruz4: p.Cruz4,
        Cruz5: p.Cruz5,
        Cruz6: p.Cruz6,
        Cruz7: p.Cruz7,
        Cruz8: p.Cruz8,
        Cruz9: p.Cruz9,
        PerfilUpperCase: p.PerfilUpperCase,
        PerfilImg: p.PerfilImg,
        Perfil1: p.Perfil1,
        Perfil2: p.Perfil2,
        Perfil3: p.Perfil3,
        Perfil4: p.Perfil4,
        Perfil5: p.Perfil5,
        Perfil6: p.Perfil6,
        Perfil7: p.Perfil7,
        Perfil8: p.Perfil8,
        Perfil9: p.Perfil9,
        Perfil10: p.Perfil10,
        Perfil11: p.Perfil11,
        Perfil12: p.Perfil12,
        Perfil13: p.Perfil13,
        Perfil14: p.Perfil14,
        Perfil15: p.Perfil15,
        Perfil16: p.Perfil16,
        Perfil17: p.Perfil17,
        Perfil18: p.Perfil18,
        Perfil19: p.Perfil19,
        Perfil20: p.Perfil20,
        Perfil21: p.Perfil21,
        Perfil22: p.Perfil22,
        Perfil23: p.Perfil23,
        Perfil24: p.Perfil24,
        Perfil25: p.Perfil25,
        Perfil12num: p.Perfil12num,
        Perfil13num: p.Perfil13num,
        Perfil14num: p.Perfil14num,
        Perfil15num: p.Perfil15num,
        Perfil16num: p.Perfil16num,
        Perfil17num: p.Perfil17num,
        Perfil18num: p.Perfil18num,
        Perfil19num: p.Perfil19num,
        Perfil20num: p.Perfil20num,
        Perfil21num: p.Perfil21num,
        Perfil22num: p.Perfil22num,
        Perfil23num: p.Perfil23num,
        Perfil24num: p.Perfil24num,
        Perfil25num: p.Perfil25num,
      },
    };

    const options = {
      dataType: "buffer",
    };

    
    
      const anvilClient = await new Anvil({ apiKey });

      const { statusCode, data } = await anvilClient.fillPDF(
        "NXSN2jsh0YtxA7cDkjsY",
        payload,
        options
      );

      fs.writeFileSync(`${p.name.split(" ").join("")}.pdf`, data, {
        encoding: null,
      });
    

    
});

//sending email
app.post("/sendmail", async(req, res) => {
  
  let p = req.body.params;
  

    
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, 
      auth: {
        user: "radioheadboy0@gmail.com", 
        pass: "brbaricvegcwyarf", 
      },
    });

    
    let info = await transporter.sendMail({
      attachments: [
        {
          filename: "TuAnalisis.pdf",
          path: `./${p.name}.pdf`,
        },
      ],
      from: '"QND" <foo@example.com>', 
      to: p.mail, 
      subject: "✔ Tu analisis basico esta completo", 
      html: `Hola, ${p.name} <br /> Te envio tu analisis del Diseno Humano. <br /> Cualquiera consulta a tu disposicion, <br /> equipo QND `, // html body
    });

    res.send("sent email");
});

app.use(express.static(path.join(__dirname, '../build')));

app.listen(process.env.PORT || 3001, () => {
  console.log("server listened", 3001);
});

