// const PUBLICURL = process.env.PUBLIC_URL;

// import React, { Component } from "react";
// import { Container, Row, Col, Button } from 'react-bootstrap';
// import * as Icon from 'react-bootstrap-icons';
// import logo from `${PUBLICURL}/img/logologo.png';
// import {connect} from 'react-redux';
// import axios from 'axios';
// import Popup from 'reactjs-popup';
// import { ReactSVG } from 'react-svg';
// import { Icon as Icons } from '@iconify/react';
// import rhombusIcon from '@iconify/icons-mdi/rhombus';
// import rhombusOutline from '@iconify/icons-mdi/rhombus-outline';
// import allButReflector from `${PUBLICURL}/img/allbutreflector.png`;
// import onlyReflector from `${PUBLICURL}/img/onlyreflector.png';
// import allbutreflectorProyector from `${PUBLICURL}/img/allbutreflectorproyector.png`;
// import generadormanifestantemain from `${PUBLICURL}/img/generadormanifestantemain.png'
// import generadormain from `${PUBLICURL}/img/generadormain.png`;
// import manifestadormain from `${PUBLICURL}/img/manifestadormain.png';
// import proyectormain from `${PUBLICURL}/img/proyectormain.png`;
// import reflectormain from `${PUBLICURL}/img/reflectormain.jpg`;
// import autoridadfijoimg from `${PUBLICURL}/img/autoridadfijo.png';

// import sacralimg from `${PUBLICURL}/img/sacralImg.png';
// import mentalimg from `${PUBLICURL}/img/mentalImg.png';
// import lunarimg from `${PUBLICURL}/img/lunarImg.png';
// import gimg from `${PUBLICURL}/img/giImg.png';
// import egoimg from `${PUBLICURL}/img/egoImg.png';
// import bazoimg from `${PUBLICURL}/img/bazoImg.png';

// import ajnaimg from `${PUBLICURL}/img/ajnaImg.png';
// import ajnacentrosindefinirimg from `${PUBLICURL}/img/ajnacentrosindefinirimg.png';

// import bazoiimg from `${PUBLICURL}/img/bazoiimg.png';
// import bazocentrosindefinirimg from `${PUBLICURL}/img/bazocentrosindefinirimg.png';

// import cabezaimg from `${PUBLICURL}/img/cabezaimg.png';
// import cabezacentrosindefinirimg from `${PUBLICURL}/img/cabezacentrosindefinirimg.png';

// import corazonimg from `${PUBLICURL}/img/corazonimg.png';
// import corazoncentrosindefinirimg from `${PUBLICURL}/img/corazoncentrosindefinirimg.png';

// import giimg from `${PUBLICURL}/img/gimg.png';
// import gcentrosindefinirimg from `${PUBLICURL}/img/gcentrosindefinirimg.png';


// import gargantaimg from `${PUBLICURL}/img/gargantaimg.png';
// import gargantacentrosindefinirimg from `${PUBLICURL}/img/gargantacentrosindefinirimg.png';

// import plexoimg from `${PUBLICURL}/img/plexoimg.png';
// import plexocentrosindefinirimg from `${PUBLICURL}/img/plexocentrosindefinirimg.png';

// import raizimg from `${PUBLICURL}/img/raizimg.png';
// import raizcentrosindefinirimg from `${PUBLICURL}/img/raizcentrosindefinirimg.png';

// import sacraliimg from `${PUBLICURL}/img/sacrallimg.png';
// import sacralcentrosindefinirimg from `${PUBLICURL}/img/sacralcentrosindefinirimg.png';

// import ajnaAbierto from `${PUBLICURL}/img/AJNA BL.png';
// import ajnaCerrado from `${PUBLICURL}/img/AJNA COLOR.png';

// import bazoAbierto from `${PUBLICURL}/img/BAZO BL.png';
// import bazoCerrado from `${PUBLICURL}/img/BAZO COLOR.png';

// import cabezaAbierto from `${PUBLICURL}/img/CABEZA BL.png';
// import cabezaCerrado from `${PUBLICURL}/img/CABEZA COLOR.png';

// import corazonAbierto from `${PUBLICURL}/img/CORAZON COLOR.png'; // ??????????????????
// import corazonCerrado from `${PUBLICURL}/img/CORAZON COLOR.png';

// import gargantaAbierto from `${PUBLICURL}/img/GARGANTA BL.png';
// import gargantaCerrado from `${PUBLICURL}/img/GARGANTA COLOR.png';

// import GIAbierto from `${PUBLICURL}/img/GI BL.png';
// import GICerrado from `${PUBLICURL}/img/GI COLOR.png';

// import plexoAbierto from `${PUBLICURL}/img/PLEXO BL.png';
// import plexoCerrado from `${PUBLICURL}/img/PLEXO COLOR.png';


// import raizAbierto from `${PUBLICURL}/img/RAIZ BL.png';
// import raizCerrado from `${PUBLICURL}/img/RAIZ COLOR.png';


// import sacralAbierto from `${PUBLICURL}/img/SACRAL BL.png';
// import sacralCerrado from `${PUBLICURL}/img/SACRAL COLOR.png';


// import investigadormartir from `${PUBLICURL}/img/investigadormartir.png';
// import investigadoroportunista from `${PUBLICURL}/img/investigadoroportunista.PNG';
// import ermitanooportunista from `${PUBLICURL}/img/ermitanooportunista.PNG';
// import ermitanohereje from `${PUBLICURL}/img/ermitanohereje.PNG';
// import martirhereje from `${PUBLICURL}/img/martirhereje.PNG';
// import martirmodeloderoles from `${PUBLICURL}/img/martirmodeloderoles.PNG';
// import oportunistainvestigador from `${PUBLICURL}/img/oportunistainvestigador.PNG';
// import oportunistamodeloderoles from `${PUBLICURL}/img/oportunistamodeloderoles.PNG';
// import herejeinvestigador from `${PUBLICURL}/img/herejeinvestigador.PNG';
// import herejeermitano from `${PUBLICURL}/img/herejeermitano.PNG';
// import modeloderolesermitano from `${PUBLICURL}/img/modeloderolesermitano.PNG';
// import modeloderolesmartir from `${PUBLICURL}/img/modeloderolesmartir.PNG';

// import sindefinicion from `${PUBLICURL}/img/sindefinicion.png';
// import simpledefinicion from `${PUBLICURL}/img/simpledefinicion.png';
// import dobledefinicion from `${PUBLICURL}/img/dobledefinicion.jpg';
// import tripledefinicion from `${PUBLICURL}/img/tripledefinicion.png';
// import quadrupledefinicion from `${PUBLICURL}/img/quadrupledefinicion.png';

// const importAll = require =>
//   require.keys().reduce((acc, next) => {
//     acc[next.replace("./", "")] = require(next);
//     return acc;
//   }, {});

// const imagesPuertas = importAll(
//   require.context("./img/puertas", false, /\.(png|jpe?g|svg)$/)
// );

// const imagesCanales = importAll(
//     require.context("./img/canales", false, /\.(png|jpe?g|svg)$/)
//   );

// const imagesCruzes = importAll(
//     require.context("./img/cruzes", false, /\.(png|jpe?g|svg)$/)
//   );  


//   const puertasImg = {
//       1: 'https://i.imgur.com/d1IIrQC.png',
//       2: 'https://i.imgur.com/TQbCUuT.png',
//       3: 'https://i.imgur.com/GjbkWSf.png',
//       4: 'https://i.imgur.com/cvpog41.png',
//       5: 'https://i.imgur.com/YwVPWQ0.png',
//       6: 'https://i.imgur.com/T3uY1lh.png',
//       7: 'https://i.imgur.com/ruqoIUO.png',
//       8: 'https://i.imgur.com/Mz6Dl4e.png',
//       9: 'https://i.imgur.com/8Pnmk9y.png',
//       10: 'https://i.imgur.com/dqIVeKd.png',
//       11: 'https://i.imgur.com/VHUBRmK.png',
//       12: 'https://i.imgur.com/h3ePDB8.png',
//       13: 'https://i.imgur.com/4ikuwjt.png',
//       14: 'https://i.imgur.com/mrZzGbz.png',
//       15: 'https://i.imgur.com/F0sq2fS.png',
//       16: 'https://i.imgur.com/sEj96db.png',
//       17: 'https://i.imgur.com/ZjkJefy.png',
//       18: 'https://i.imgur.com/HviqdOe.png',
//       19: 'https://i.imgur.com/aUpbdUp.png',
//       20: 'https://i.imgur.com/8UkORzg.png',
//       21: 'https://i.imgur.com/SVEvZAQ.png',
//       22: 'https://i.imgur.com/bijTWHb.png',
//       23: 'https://i.imgur.com/Zt5ygSS.png',
//       24: 'https://i.imgur.com/Lu2RteP.png',
//       25: 'https://i.imgur.com/0vJDgEe.png',
//       26: 'https://i.imgur.com/En1ap7c.png',
//       27: 'https://i.imgur.com/0aFidPo.png',
//       28: 'https://i.imgur.com/Rev6N9H.png',
//       29: 'https://i.imgur.com/voxQYnV.png',
//       30: 'https://i.imgur.com/6EqG8XV.png',
//       31: 'https://i.imgur.com/wMIy518.png',
//       32: 'https://i.imgur.com/o5Qel5m.png',
//       33: 'https://i.imgur.com/zl6fkYL.png',
//       34: 'https://i.imgur.com/muxQDHr.png',
//       35: 'https://i.imgur.com/c1rGWem.png',
//       36: 'https://i.imgur.com/mZnbIkS.png',
//       37: 'https://i.imgur.com/dQ1CYGE.png',
//       38: 'https://i.imgur.com/FzakUEL.png',
//       39: 'https://i.imgur.com/P40CxxR.png',
//       40: 'https://i.imgur.com/WlIy9y0.png',
//       41: 'https://i.imgur.com/njy65Rs.png',
//       42: 'https://i.imgur.com/p9jWGP7.png',
//       43: 'https://i.imgur.com/jAREC9Z.png',
//       44: 'https://i.imgur.com/IEcmDLX.png',
//       45: 'https://i.imgur.com/OY2u8lN.png',
//       46: 'https://i.imgur.com/drDXAjU.png',
//       47: 'https://i.imgur.com/y7yVdbQ.png',
//       48: 'https://i.imgur.com/jWd8Iia.png',
//       49: 'https://i.imgur.com/ldmXjLF.png',
//       50: 'https://i.imgur.com/93JpcgI.png',
//       51: 'https://i.imgur.com/08RqofC.png',
//       52: 'https://i.imgur.com/Hd7boNU.png',
//       53: 'https://i.imgur.com/FWSCTBa.png',
//       54: 'https://i.imgur.com/wls6sNN.png',
//       55: 'https://i.imgur.com/qcvp9L2.png',
//       56: 'https://i.imgur.com/D4RdqDs.png',
//       57: 'https://i.imgur.com/uevnOrA.png',
//       58: 'https://i.imgur.com/7olFAxZ.png',
//       59: 'https://i.imgur.com/Cr6jfvo.png',
//       60: 'https://i.imgur.com/cyqx68j.png',
//       61: 'https://i.imgur.com/SYXO8Gj.png',
//       62: 'https://i.imgur.com/EVKaqGW.png',
//       63: 'https://i.imgur.com/r3T6tmK.png',
//       64: 'https://i.imgur.com/u6ajqTS.png'
//   };

//   const canalesImg = {
//     '1-8': 'https://i.imgur.com/qBpg0CJ.png',
//     '2-14': 'https://i.imgur.com/SKWPwi9.png',
//     '3-60': 'https://i.imgur.com/km9ddzC.png',
//     '4-63': 'https://i.imgur.com/WJCjWfB.png',
//     '5-15': 'https://i.imgur.com/RJjogb9.png',
//     '6-59': 'https://i.imgur.com/qmrGokz.png',
//     '7-31': 'https://i.imgur.com/DSFtpoQ.png',
//     '9-52': 'https://i.imgur.com/molQKCT.png',
//     '10-20': 'https://i.imgur.com/8X2QTmG.png',
//     '10-34': 'https://i.imgur.com/HUz47fY.png',
//     '10-57': 'https://i.imgur.com/M3b4AqW.png',
//     '11-56': 'https://i.imgur.com/modBU3A.png',
//     '12-22': 'https://i.imgur.com/vSts5si.png',
//     '13-33': 'https://i.imgur.com/TFN1juG.png',
//     '16-48': 'https://i.imgur.com/aQp7ww0.png',
//     '17-62': 'https://i.imgur.com/U1IMhLj.png',
//     '18-58': 'https://i.imgur.com/JcYTfrn.png',
//     '19-49': 'https://i.imgur.com/uAyzSYW.png',
//     '20-34': 'https://i.imgur.com/6KlX1RQ.png',
//     '20-57': 'https://i.imgur.com/d8aUpmr.png',
//     '21-45': 'https://i.imgur.com/u3jFc9B.png',
//     '23-43': 'https://i.imgur.com/rCRUtAP.png',
//     '24-61': 'https://i.imgur.com/iFcY4P0.png',
//     '25-51': 'https://i.imgur.com/StEbvLK.png',
//     '26-44': 'https://i.imgur.com/uFrC5ag.png',
//     '27-50': 'https://i.imgur.com/vVQKjnN.png',
//     '28-38': 'https://i.imgur.com/QI0nxbP.png',
//     '29-46': 'https://i.imgur.com/55Vg60G.png',
//     '30-41': 'https://i.imgur.com/0dAovuM.png',
//     '32-54': 'https://i.imgur.com/LSWGDBd.png',
//     '34-57': 'https://i.imgur.com/w9Lbvwv.png',
//     '35-36': 'https://i.imgur.com/5Q8AthO.png',
//     '37-40': 'https://i.imgur.com/shVvTQA.png',
//     '39-55': 'https://i.imgur.com/3zuyLqh.png',
//     '42-53': 'https://i.imgur.com/rA754Vo.png',
//     '47-46': 'https://i.imgur.com/t9HqeXp.png'
//   };


//   const perfilesImg = {
//     "2/5 - ERMITA??O/HEREJE": 'https://i.imgur.com/CUAemq3.png',
//     "2/4 - ERMITA??O/OPORTUNISTA": 'https://i.imgur.com/OaTqNR6.png',
//     "5/2 - HEREJE/ERMITA??O": 'https://i.imgur.com/nEtRw96.png',
//     "5/1 - HEREJE/INVESTIGADOR": 'https://i.imgur.com/7JYfNBY.png',
//     "1/3 - INVESTIGADOR/M??RTIR": 'https://i.imgur.com/lSNqskM.png',
//     "1/4 - INVESTIGADOR/OPORTUNISTA": 'https://i.imgur.com/1mQKMV6.png',
//     "3/5 - M??RTIR/HEREJE": 'https://i.imgur.com/d0LNuk2.png',
//     "3/6 - M??RTIR/MODELO DE ROLES": 'https://i.imgur.com/rYVKfpw.png',
//     "6/2 - MODELO DE ROLES/ERMITA??O": 'https://i.imgur.com/rfaCAJl.png',
//     "6/3 - MODELO DE ROLES/M??RTIR": 'https://i.imgur.com/ophIJPG.png',
//     "4/1 - OPORTUNISTA/INVESTIGADOR": 'https://i.imgur.com/LiwJ7yV.png',
//     "4/6 - OPORTUNISTA/MODELO DE ROLES": 'https://i.imgur.com/Qxk1ioX.png'
//   };

//   const definicionesImg = {
//       'Sin': 'https://i.imgur.com/7SJXCFg.png',
//       'Simple': 'https://i.imgur.com/IN1aL3c.png',
//       'Doble': 'https://i.imgur.com/TE1Bcgx.jpg',
//       'Triple': 'https://i.imgur.com/odw5v8B.png',
//       'Quadruple': 'https://i.imgur.com/5MT4nME.png'
//   }

//   const cruzesCompleto = [
//     {
//         cruz: 'Cruz Angulo Derecho de la Conciencia 3',
//         img: imagesCruzes['conciencia.jpg'].default,
//         texto: ['Con el Sol de Personalidad en la puerta 64 - Antes de Concluir - llegamos a la tercera variante de la Cruz de Angulo Derecho de la Conciencia. Necesitamos tener acceso a todo, y esa necesidad de acceder a todo hace que necesitemos tambi??n las fuerzas que nos sirven de inspiraci??n. Cualquiera de los seres humanos que nacen con alguna de las variantes de la Cruz de la Consciencia est??n aqu?? para ser agentes de inspiraci??n. Recuerda, sin embargo, la profunda iron??a impl??cita en esto, y es que aquellos que inspiran a los dem??s son frecuentemente personas muy confundidas y llenas de dudas en su vida personal. Es decir, que el modo en que ellos integran esa presi??n mental en sus propias vidas es muy distinto al modo en que son absorbidos por aquellos que tienen acceso a esa inspiraci??n.', 'La puerta 64 es el combustible que alimenta con su presi??n todo el proceso mental abstracto. Eso es algo que funciona es a partir de las experiencias que vamos recogiendo en cualquier momento presente y que queda almacenada en el Centro de la Cabeza. Esa informaci??n vuelve a irrumpir en nuestro proceso m??s adelante a trav??s de las puertas de la Cabeza. No obstante, la manera en la que reaparecen var??a en funci??n de la puerta que les hace de filtro. Si se trata, por ejemplo, de alguien l??gico, entonces volver??n como una imagen fija de algo - un patr??n del que sospechas algo o no - pero si el filtro es una puerta abstracta, entonces lo que aparecer?? es una catarata de im??genes en movimiento - una secuencia de eventos. La gente de la puerta 64 vive siempre sometida a la inc??moda presi??n de intentar hallarle un sentido a su pasado. Si le confiere a su mente capacidad decisoria, entonces tendr?? muchas dificultades para hallarle sentido a sus experiencias, y toda su vida se le antojar?? un puro problema. Sin embargo, la gente de la puerta 64 tiene un don natural para ayudar a otros a resolver las dificultades que pudieran tener con su pasado. Es decir, que puede inspirar a otros y abrir con ello la posibilidad de beneficiarse a su vez de ello.', 'Siempre que me encuentro con un perfil que incluye alguna puerta mental recuerdo la importancia de explicar bien la tem??tica inherente en esos casos. Tenemos millones de personas que se encarnan y viven confiri??ndole capacidad decisoria a su mente, convirti??ndola en la fuerza dominante de su existencia. La creencia de que la mente est?? dotada de autoridad interna est?? causando muchos problemas a la gente. He trabajado con muchas personas de la puerta 64, y he podido observar los cambios que se producen en el plano mental de sus vidas cuando aprenden a canalizarlo correctamente. Recuerda que la mente humana no es algo de lo que nos podamos librar. No puedes impedir que la puerta 64 siga d??ndole vueltas al pasado, pero si reconoces y recuerdas que la mente no tiene autoridad interna, entonces todo es diferente. Sin embargo, no basta con decirle a la mente - como carece de autoridad interna - que se calle, porque no lo har??.', 'La mente solamente aceptar?? quedarse sin mando sobre tu vida cuando la autoridad haya sido transferida al lugar donde corresponde. Uno de mis entretenimientos favoritos consiste en observar todas las cosas que mi mente me dice que haga: "Tienes que hacer esa llamada, o realmente deber??as hacer esto, o aquello." Mientras estoy sentado en mi despacho y miro la pila de 25 lecturas pendientes que se amontona delante de m??, mi mente no puede dejar de insistir: "Realmente deber??as ocuparte de eso". Mientras tanto, mi cuerpo no se mueve en ninguna direcci??n, no me levanto a coger la cinta, ni tampoco enciendo las m??quinas. Observo y compruebo que mi cuerpo permanece inm??vil. Eso hace que mi mente se sienta muy avergonzada, ya que sabe que ha perdido toda su autoridad sobre mi vida. Simplemente se pone a buscar una salida pensando: "Bueno, ya que no vas a ocuparte de todas esas cosas, quiz??s deber??a buscarte alguna otra ocupaci??n", y se pone a buscarla con la misma desesperaci??n que antes. Es in??til que te pongas a pelear con ella, porque se pondr?? a argumentar contigo y te ganar?? la partida. Todo lo que puedes hacer es transferir la autoridad a donde corresponde en tu naturaleza, y comprobar luego por ti mismo la profunda bendici??n que eso supone.  Tu mente te confunde tanto como te maltrata. La m??a sol??a volverme completamente loco. Siempre quer??a que estuviera haciendo algo. Pero si entiendes que eso es lo que a la mente le gusta hacer, que le gusta hablar de esas cosas - de lo que hay que hacer y todo eso - que ese es el h??bitat natural de la mente, entonces no necesitas pelearte con ella. Si tienes esta puerta abstracta, que te recuerda siempre im??genes de tu madre en la cocina de casa, no es preciso que conviertas eso en un problema psicol??gico. No lo conviertas en: "??Por qu?? siempre me como el coco con mi madre en la cocina? ??Qu?? significado tiene eso?", porque no te ayudar?? en nada. Si le confieres autoridad a esa l??nea de pensamiento, simplemente acabar??s sufriendo por ello. Las personas que nacen con esta cruz de encarnaci??n padecen una profunda ansiedad mental. Viven sometidas a una presi??n mental constante, por lo que la gente portadora de puertas mentales son las que sufren mayores dolores de cabeza y las que m??s problemas tienen con la vista. ']

//     },
//     {
//         cruz: 'Cruz Angulo Derecho de la Conciencia 4',
//         img: imagesCruzes['conciencia.jpg'].default,
//         texto: ['La quinta l??nea de la puerta 5 es la ??nica que te dice c??mo iluminarte, de modo que te puedes hacer una idea de la magia inherente en esta puerta. No te pierdas luego echar un vistazo a las diferentes l??neas de esta puerta. Te da instrucciones tan verdaderamente simples, que lo ??nico que tienes que hacer es seguir esas directrices, tomarte una taza de sopa, apagar luego las luces, y esperar a que aparezca el resplandor. En la puerta 5 de "la Espera" - ??te das cuenta ahora? - tenemos el cuento de la iluminaci??n. Con la gran puerta de la espera, uno no hace absolutamente nada, simplemente mantiene la boca abierta y los peces entran al son de la vida. Es as?? de simple. Solamente permaneces flotando alrededor de tu propia vida. ', 'La puerta 5 tiene una cualidad universal, ya que forma parte del dise??o de todas las formas vivas, y representa, por tanto, un aspecto fundamental de la vida. Se trata de la fuerza generadora que existe en el mism??simo nivel celular de nuestra existencia. La puerta 5 es, de hecho, lo que cambia en tu vida, a medida que cambias t?? viviendo a trav??s de tu dise??o. Esta es la puerta que determina el patr??n b??sico que rige el desarrollo de tus c??lulas. Es tambi??n el modo en que queda almacenada tu memoria celular. Todos los cambios que se producen en tu sistema son procesados a trav??s de la puerta 5. ', 'Todo lo relacionado con la puerta 5 gira en torno a la naturaleza de los patrones, y no s??lo de los patrones, sino al reconocimiento de que existimos dentro de un patr??n que no podemos modificar por m??s que nos apremie. La promesa de la "paz interior" que nos hace la l??nea 5.2 se cumple solamente cuando aceptamos el patr??n sin condiciones. Al tratar con esta cuarta variante de la Cruz de Angulo Derecho de la Conciencia, lo primero que tenemos que reconocer es que la conciencia misma existe dentro de un patr??n. Estas son personas que tienen un reconocimiento muy profundo de los patrones, y con ello desarrollan una funci??n que es muy importantes para nosotros. ', 'Yo iba por la vida sin fijarme nunca en sus coincidencias, hasta que llegu?? al Dise??o Humano y comenc?? a trabajar con los patrones, con los dise??os de la gente, con los n??meros y todas esas cosas. Los patrones - la repetici??n constante de un patr??n - est??n por todas partes a todas horas en todo lo que vemos. Hasta que llega un momento en el que te percatas de que eso es todo lo que hay; la vida sigue un patr??n. Entonces te das cuenta del chiste, de que t?? eres el patr??n mirando al patr??n que hay dentro del patr??n. Ah?? es cuando simplemente te rindes, y eso es la iluminaci??n. Que el r??o simplemente fluye, y todo est?? buen??simo.  ', 'Resulta tan absurdo que a la gente le resulta dif??cil. Es cierto - algo que le debemos a la densidad del plano mental. Mientras te mantengas aferrado a ese ??ltimo vestigio de autoridad: "Pero algo habr?? que podamos hacer." He encontrado a gente que, de hecho, as?? me lo ha dicho. Yo les respondo: "Bueeeeno, haz lo que puedas. Que nada te detenga." Pero la realidad es que existimos dentro de un patr??n, y que no hay nada m??s all?? de ese patr??n. De ah?? que esta "Espera" conlleve un profundo potencial m??stico en ella; de permitir que las cosas se hagan solas. Ah?? es donde reside nuestra gloria humana. En permitir que ocurran, mientras seguimos esperando.  ', 'Recuerda que esperar no es detenerse. Se trata de esperar en el flujo y devenir de las cosas, de esperar en el flujo del tiempo, de esperar en el flujo y movimiento de la vida, de esperar en el flujo de la mutaci??n, pero siempre en actitud de espera. Esperamos siempre a que las cosas ocurran. No importa cu??l sea tu tipo, ni cu??l sea tu naturaleza, est??s aqu?? para eso - abre tu boca, flota dej??ndote llevar por la corriente, y m??s tarde o m??s temprano algo entrar?? en ella. As?? es como funciona, y cuando vives la naturaleza de tu tipo y llevas a cabo el experimento de ser t?? mismo comienzas a reconocer la esencia de esa verdad. Las cosas correctas aparecen ante ti sin necesidad de que tengas que salir a buscarlas, y sin necesidad de sufrir porque no acabas de encontrarlas. ', 'Esa es la posibilidad inherente en las personas de esta cruz; la de reconocerse a s?? mismas como una forma de conciencia que obedece a un patr??n natural. A trav??s de la habilidad de esta encarnaci??n para reconocer los patrones, estas personas tienen, quiz??s, la oportunidad de comprender que ellas mismas tambi??n son un patr??n. Es divertido comprobar que, al mirar a trav??s de tus ojos, lo ??nico que no puedes ver es tu propia cara - eso te impide ver que tambi??n t?? respondes a un patr??n. Simplemente miras a todos los dem??s patrones, y de repente te encuentras con ese incre??ble momento en el espejo en el que te das cuenta: "Oh, Dios m??o, pero si yo tambi??n soy uno de ellos." ']
//     },
//     {
//         cruz: 'Cruz Angulo Derecho de la Consciencia 1',
//         img: imagesCruzes['conciencia.jpg'].default,
//         texto: ['Con la posici??n del Sol y de la Tierra de Personalidad en las puertas 63 y 64 respectivamente, ambas puertas colectivas, es la primera vez que llegamos a una puerta situada en el Centro de la Cabeza, que es uno de los centros de presi??n. La puerta 63 es donde se originan todas las dudas y las sospechas humanas. Para que una sociedad pueda sobrevivir es preciso que disponga de patrones fiables conocidos, con los que poder funcionar y sentirse suficientemente protegida. La civilizaci??n y las sociedades se desmoronan cuando no disponen de esos patrones fiables por los que regirse. La puerta 63 se ocupa de formular preguntas, y esas preguntas est??n basadas en la incertidumbre y la sospecha acerca de los patrones. Llegados al punto en que entra en juego este tipo de cruz de encarnaci??n, tenemos el advenimiento de algo nuevo, y es el comienzo de nuestra capacidad de codificar los patrones. ', 'Este es su v??nculo con la puerta 5, que es la puerta de los patrones, y que est?? en la ra??z de nuestro proceso celular, estableciendo si se trata de un patr??n celular o de un patr??n de la vida. Al mismo tiempo, la Tierra de Dise??o posicionada en la puerta 35 representa la culminaci??n del proceso experimental de los deseos, que nos indica si se han cumplido o no las expectativas.  ', 'La confusi??n de la puerta 64 la fuerza a mirar constantemente sobre su propio pasado, por lo que representa el inicio de la estimulaci??n de todo el proceso mental. Aqu?? es donde la mente comienza a reclamar para s?? la autoridad de tomar decisiones. Lo hace desde el preciso instante en que te adentras en un "maya" que ha sido construido por la mente, y s??lo cuando has profundizado mucho en tu formaci??n comienzas a comprender que la mente es subjetiva y carece por completo de autoridad interna para decidir. Sin embargo, para la inmensa mayor??a de la humanidad, la mente ha sido lo ??nico a lo que han conferido todo su poder decisorio.  ', 'De modo que tenemos aqu?? el nacimiento del plano mental, donde todo el mundo est?? tratando de comprobar si las cosas funcionan como supuestamente debieran. No estamos tratando ya del aspecto f??sico y sexual de nuestras vidas, ni de cuestiones tan b??sicas como la comida, porque todas esas cosas ya est??n presentes en el programa evolutivo. Aqu?? hay algo que nos est?? diciendo: "Mirad, tenemos que elevarnos por encima de esas cosas. Hay algo m??s que debemos explorar. ??Por qu?? estamos aqu??? ??Cu??l es nuestro prop??sito? Esto es lo que nos trae la Cruz de Angulo Derecho de la Conciencia.  ', 'Esta es gente que ha nacido para hacer preguntas. Como las dem??s cruces de ??ngulo derecho, la Cruz de la Conciencia puede darse con cuatro variaciones distintas. La experiencia de la cruz es muy diferente si pasamos del Sol de Personalidad en la puerta 63, con su foco puesto en las preguntas y enclavada en el Cuarto de la Iniciaci??n, al Sol posicionado en alguna de las otras puertas de esta cruz. Los temas cambiar??n en funci??n de la posici??n del Sol de Personalidad, pero en esta primera variante de la Cruz de la Conciencia tenemos el primer intento de organizar el mundo mentalmente, y no es inicialmente una cuesti??n de conciencia, sino de presi??n. Vivimos sometidos a una enorme presi??n de tener que ordenar las cosas mentalmente. Por m??s Babas y Gur??s que te hablen de la "No-mente", y por bien que suenen esas palabras en tus o??dos, la realidad es que la experiencia de la "No-mente" no es posible hasta que no hayas aprendido a manejar la mente y a tratar correctamente con ella, y a responder a todas las cuestiones que necesitan ser contestadas desde tu propio interior. Si no encuentras las respuestas necesarias en tu propio fuero interno, acaso porque nunca te hayas planteado alguna de esas cuestiones importantes, es porque hay una parte de ti que no est?? viviendo correctamente en el ahora. La verdad es que siempre est?? presente; de eso precisamente es de lo que trata la conciencia que se deriva de esta cruz. Hay una presi??n incre??ble que no para de preguntar: "??Por qu??? ??Por qu??? ??Por qu??? Este es el porqu??. Uno de los apodos preferidos de Ra para referirse a la Tierra es llamarle el "planeta de los porqu??s".  ']
//     },
//     {
//         cruz: 'Cruz Angulo Derecho de la Esfinge 1',
//         img: imagesCruzes['esfinge.jpg'].default,
//         texto: ['El Sol de Personalidad posicionado en la puerta 13, dentro de la Cruz de la Esfinge, condicionar?? el funcionamiento de esta cruz de un modo muy espec??fico. Esta cruz tendr?? que operar a trav??s de los temas representados por la puerta 13 - una puerta de tener mucha empat??a y mostrar apertura hacia los dem??s. La puerta 13 es parte del canal del hijo pr??digo, y trata de la capacidad de almacenar informaci??n acerca de las experiencias del pasado. Tambi??n trata de la capacidad de mantener los secretos ocultos en su interior hasta que llegue la hora de sacarlos a la luz. Esta cruz de Angulo Derecho de la Esfinge es muy com??n, y les confiere a sus portadores la capacidad de ofrecer direcci??n y gu??a a los dem??s. ', 'Su modo de dar esa direcci??n estar?? condicionado por las din??micas de la puerta 13. Es decir, que la puerta 13 siempre avanza mirando retrospectivamente hacia atr??s, hacia el pasado. De ah?? su reminiscencia, su constante deseo de recordar, su af??n por recolectar experiencias. En esta puerta se hunden las ra??ces de lo que llamamos historia. Por tanto, cuando te encuentres con alguien que sea portador de la puerta 13 como activaci??n principal de esta cruz, no le preguntes a d??nde ir?? ma??ana, porque estas personas no est??n aqu?? para eso. Preg??ntales lo que sucedi?? ayer, o lo que ocurri?? el mes pasado, y podr??s reconocer el valor de la gu??a y la direcci??n que son capaces de ofrecer. ', 'Es preciso recordar algo acerca de las personas portadoras de la Cruz de la Esfinge, ya que son tremendamente importantes para nuestro desarrollo evolutivo. Todo el mecanismo de la Esfinge est?? enraizado en las puertas 1 y 2 que, en ??ltima instancia, reciben desde abajo la energ??a Sacral de la puerta 14 - el que custodia las llaves - necesaria para traer al mundo la fuerza de la mutaci??n que imprime direcci??n a nuestra trayectoria evolutiva. La Esfinge siempre representa una direcci??n nueva para la forma. En alg??n momento llegaremos a un punto en nuestra evoluci??n en el que la gente se reunir?? en funci??n de sus cruces de encarnaci??n. Las cuatro variantes de la Cruz de Angulo Derecho de la Esfinge pertenecen a gente que tiene su Sol en la puerta 13, en la 7, en la 1 y en la 2. Solamente juntando las cuatro variaciones posibles llegaremos a tener una perspectiva real sobre nuestra direcci??n evolutiva. Despu??s de todo, cada una de ellas tiene su propio camino y su propia forma de orientarse en ??l. Por supuesto que acaban por influenciar con su forma a todos los que se cruzan con ellas en el camino.  ', 'Si alguien de la Cruz de la Esfinge est?? en la cola del supermercado, las personas que tiene delante y detr??s de ??l est??n todas bajo el influjo de su aura. Las est?? dirigiendo imprimi??ndoles una direcci??n nueva. Si se trata de alguien con la primera variante, con el Sol en la puerta 13, entonces la persona que est?? a su lado comenzar?? s??bitamente a pensar en algo que le ocurri?? el d??a anterior. De repente se pone a pensar: "??Por qu?? tom?? ayer esa direcci??n?" Ese proceso, sin embargo, ha sido puesto en marcha por la persona de la Esfinge que tiene a su lado.  ', 'A partir del momento en que puedes dejar atr??s tu vanidad personal, comienzas a entender algo - que todas las personas que tienen la Cruz de la Esfinge nos est??n dirigiendo a todos. Puede que nos est??n volviendo locos con su direcci??n, pero nos est??n dirigiendo. No hay nada que podamos hacer por evitarlo. Todos juntos representan ese tema dentro del programa que le da direcci??n a la totalidad.  ', 'Si elimin??ramos a todos los que tienen la puerta 10 en su dise??o, nadie sabr??a c??mo comportarse. El mundo ser??a un lugar salvaje en el que nadie sabr??a c??mo sobrevivir, y simplemente nos morir??amos todos. La verdad es que cuando dejas de tom??rtelo como algo personal, reconoces como todo encaja en la totalidad. Lo puedes ver en tu propio dise??o individual. S??lo tienes que fijarte en todos los espacios en blanco que hay en tu dise??o. En el programa inform??tico existe la opci??n de revertir cualquier dise??o, para que muestre todas las puertas y canales que no est??n activadas en la Carta del Rave. De las 64 puertas que existen, puede que haya activaci??n en 20, y luego est??n todas las dem??s puertas y canales sin activaci??n alguna. Es importante reconocer de d??nde recogemos esa informaci??n, ya que vivimos en un mundo igual de condicionante para todos. Todas las personas de la Cruz de la Esfinge que andan por ah?? empuj??ndonos en distintas direcciones son necesarias para todos. Sin embargo, tambi??n es cierto que no podemos fiarnos de la perspectiva subjetiva de cada una de ellas -  deber??amos convocar una convenci??n de esfinges. Si no hay primero una convenci??n de esfinges, entonces no te f??es, porque es todo una cuesti??n de perspectiva.  ', 'Esta Esfinge de Angulo Derecho no est?? interesada en darle direcci??n a nadie. ??Por qu?? deber??a estarlo? Como ser de Angulo Derecho solamente le interesa encontrar una direcci??n para s?? mismo, aunque luego se sienta perdido la mayor??a del tiempo. Esta persona vive absorta en s?? misma, tratando de averiguar si es o no es la direcci??n que debe seguir en su vida. Por eso, cada vez que pasa al lado de alguien est?? prestando un servicio de mucho valor. Puede que en su vida personal est?? desorientada y desubicada, pero todos los dem??s tienen la oportunidad de orientarse a partir del trato con ella.  ', 'Cuando veas que alguien tiene en su dise??o la Cruz de la Esfinge, lo primero es ver d??nde tiene el Sol. Te dir?? mucho acerca del prop??sito de la vida de esa persona. Si naces con esa cruz, est??s aqu?? para crear un pasado vivo y vibrante con todo lo que haces en esta vida. Estas son personas que aman su pasado, y poseen diarios y anotaciones de peque??os momentos en los que fueron a ver esto o tuvieron aquello otro. Su pasado les dej?? todas esas cosas como herencia. Son el fruto de haber vivido absortas en s?? mismas, y son, despu??s de todo, un aspecto necesario para todos. Una de las principales cosas que debes entender acerca de la naturaleza de la Esfinge, al margen de la opini??n que te merezca la persona que es portadora de esa cruz, es que se trata de una estructura que tiene un impacto tremendo sobre todos los que le rodean.  ', 'Esta cruz marca el inicio del proceso de encarnaci??n. Reflexiona acerca de esto. No es una arbitrariedad que empecemos aqu??. Este es el lugar del comienzo porque este es tambi??n el final. Este es el verdadero Alfa y Omega, en el sentido de que determina el funcionamiento del programa. Cuando llegue el tiempo en que este mundo que habitamos y las formas que tenemos pasen a ser historia, podremos ver en los temas m??s globales e importantes que el movimiento del equinoccio oto??al cae en la puerta 13. Con otras palabras, este es el lugar d??nde todo comienza y donde todo termina.  ', 'Recuerda que este es el Cuarto de la Iniciaci??n, y que este cuarto no trata de ninguna otra cosa que de la mente humana. Este es el tema en el que todos estamos atrapados. Es lo que nos hace diferentes a todas las dem??s especies. Se trata de esta incre??ble iniciaci??n de la mente que podemos encontrar en este cuarto. Comienza con "La Comunidad del Hombre", esta puerta que ejerce una influencia tan enorme sobre el proceso abstracto debido a su capacidad de recolectar en su memoria toda la experiencia de los seres humanos. Esa capacidad de recordar, y en ??ltima instancia la capacidad de articular a partir de esos recuerdos es lo que nos permite dar saltos enormes en nuestra habilidad para crear un maya mental tan denso como el que conocemos. De ese modo podemos, finalmente, tras milenios y milenios de frustraci??n, averiguar c??mo funcionan de verdad las cosas b??sicas de la vida. Pero estamos aqu?? en los dominios de la mente, de modo que cuando te encuentres con alguien que, siendo una Esfinge, tiene su Sol en la puerta 13, sabr??s que se trata de alguien con la energ??a para comenzar y acabar las cosas.', 'Una persona con el Sol en la puerta 13 entiende realmente la cita que dice: "el futuro es el pasado corriendo hacia nosotros". Aqu?? es donde podemos encontrar todos nuestros clich??s acerca de la historia repiti??ndose a s?? misma y todas esas cosas. Todos esos clich??s proceden de la tem??tica inherente en la puerta 13. La primera variaci??n de una Cruz de Angulo Derecho con el Sol en la puerta 13 es un 1 / 3. La estructura siempre tiene que comenzar desde el nivel m??s primario, con el Sol de Personalidad en l??nea 1 y el Sol de Dise??o en l??nea 3, lo que indica que si los fundamentos no son s??lidos ser?? necesaria la anarqu??a. Si los fundamentos no son correctos, entonces hay que derribarlos para construir una nueva base capaz de sostener la vida. ', 'Cuando nace este tipo de Esfinge, su prop??sito consiste en descubrir todos los fundamentos que no funcionan. Ese es su trabajo, y esa es la memoria que acumular?? en su mente. Esta acumulaci??n de memorias servir?? a uno de los dos prop??sitos siguientes: para sufrir como un m??rtir, lleno de pesimismo para el resto de su vida, o para descubrir en ese proceso algo de enorme valor para todos; todo lo que no funciona y que debe ser erradicado de nuestras vidas. Estas personas son, por todo ello, unos gu??as muy importantes para nosotros.  ', 'Cuando el Sol de Personalidad est?? en la l??nea 4 de la puerta 13, el Sol de Dise??o se desplaza del hexagrama 1 hacia el hexagrama 43. Obviamente, con este desplazamiento tenemos una configuraci??n completamente distinta.  ']
//     },
//     {
//         cruz: 'Cruz Angulo Derecho de la Esfinge 2',
//         img: imagesCruzes['esfinge.jpg'].default,
//         texto: ['Hemos dejado atr??s la puerta 24 - El Retorno - que es parte de la Cruz de los Cuatro Caminos, y entramos en un nuevo campo. Entramos ahora en la puerta 2, la puerta del chofer, que es la direcci??n para las tres perspectivas que nacen de las puertas de la Esfinge. Recuerda que comenzamos con la puerta 13 en Acuario, y que ahora entramos en el segundo cuarto para encontrarnos con la segunda variante de esta misma cruz. Es decir, que tenemos aqu?? la misma Cruz de la Esfinge, s??lo que ahora aparece con el Sol de Personalidad en la puerta 2 en lugar de en la puerta 13.  ', 'Si contemplas detenidamente el corte de las l??neas del hexagrama 2 podr??s comprobar que las primeras dos l??neas que lo conforman son l??neas yin / yin. Si haces lo propio con los quince hexagramas que siguen a la puerta 2 en este Cuarto de la Civilizaci??n, comprobar??s que tambi??n aqu?? las dos primeras l??neas siguen teniendo una naturaleza yin / yin. Ese es el elemento vinculante a lo largo de todos los hexagramas integrados en este cuarto. Esos diecis??is hexagramas se dividen tambi??n en dos grupos de ocho hexagramas cada uno - algo que veremos repetirse a medida que avanzamos por cada uno de los cuartos. En el primer grupo de ocho - los hexagramas que van del 2 al 12 - las tres primeras l??neas son yin / yin. De modo que en ocho hexagramas seguidos tenemos la misma base de tres l??neas yin. En el segundo grupo de ocho hexagramas - los que van del 15 al 33 - solamente las dos primeras l??neas siguen siendo yin, mientras que la tercera l??nea ha pasado a tener una naturaleza yang.  ', 'Nos encontramos aqu?? en el Reino de Duhbe, en el Cuarto de la Civilizaci??n, que comienza con una de las puertas de la Cruz de la Esfinge. Como en cada cuarto, hay una puerta de la Cruz del Recept??culo del Amor justo en medio del cuarto, y luego concluye y se cierra con una de las puertas de la Cruz de los Cuatro Caminos (en este caso con la puerta 33 de la Retirada). Esta estructura inherente a todos y cada uno de los cuartos debe ser asimilada con profundidad para tener un entendimiento claro de la tem??tica inherente en cada uno de ellos.  ', 'Si intentamos ubicar en el mandala zodiacal las puertas correspondientes al Centro de la Garganta, podemos ver que todas y cada una de ellas est??n incorporadas en este campo evolutivo de la civilizaci??n. Por ello, si tuvi??ramos que darle otro nombre a este cuarto, lo podr??amos definir como el cuarto de la manifestaci??n. Aqu?? todo gira en torno a la capacidad de hacer todo tipo de cosas, de construir y elaborar todo tipo de objetos. Obviamente, entre sus dones se cuenta tambi??n el potencial para verbalizar, un aspecto ac??stico que nos permite manifestarnos de un modo articulado y expresar nuestra naturaleza de muchas formas diferentes. Pero la verdadera base de este Cuarto de la Civilizaci??n est?? en la presi??n que ejerce sobre nosotros para que nos manifestemos en el mundo a trav??s del Santo Grial de nuestro dise??o individual, que es el Centro de la Garganta. Todo en la vida gira en torno a las mec??nicas de la Garganta, ya que es ah?? donde el feto comienza el desarrollo de la forma de su dise??o. Toda nuestra historia se escribe en funci??n de c??mo aprendemos a manejar el potencial para la manifestaci??n que el Centro la Garganta pone a nuestra disposici??n, y es ah?? donde podemos comenzar a distanciarnos de no ser m??s que bestias inteligentes.  ', 'Ese es un proceso que comienza en la puerta 2 - El Receptivo. En un nivel b??sico y fundamental, esta es la m??s fascinante de todas las puertas. En esta puerta est?? el asiento del chofer del veh??culo, y es tambi??n donde se ubica el Monopolo Magn??tico. Aqu?? est?? el lugar del cual emana la ilusi??n de nuestro existir por separado, la conexi??n con nuestra geometr??a individual en la vida y con nuestro movimiento evolutivo en el espacio. Al contemplar la puerta 2, lo que estamos viendo es la ??nica manera en la que todos recibimos nuestra direcci??n en la vida. Sabemos que, a trav??s de la Esfinge, esa direcci??n puede ser expresada a trav??s de diferentes perspectivas. Es decir, a trav??s de la perspectiva abstracta de la mirada retrospectiva de la puerta 13, a trav??s de la perspectiva l??gica orientada hacia el futuro de la puerta 7, y a trav??s de la perspectiva individual que simplemente est?? presente en el momento oportuno. Sin embargo, las tres perspectivas se nutren de la misma receptividad y enra??zan su direcci??n en las mec??nicas de la puerta 2.  ', 'De modo que con la segunda variante de la Cruz de Angulo Derecho de la Esfinge llegamos al tema verdadero y fundamental de la direcci??n evolutiva de la humanidad entera, porque eso es lo que representa siempre la puerta 2. El Dise??o Humano siempre trae momentos de puro deleite en la comprensi??n de la naturaleza de las cosas, y uno de esos momentos lo podemos encontrar en el reconocimiento de la naturaleza de nuestra direcci??n b??sica en la vida, porque esta cruz primaria de la direcci??n tiene el Sol de Personalidad en la l??nea 2.1, que gira enteramente en torno a la belleza. Se trata, por tanto, de una direcci??n hecha de belleza, tanto si esa belleza est?? presente de un modo natural como si uno tiene que trabajar duro para llegar hasta ella. Esa es una de las cosas m??s bellas que debemos entender acerca de nuestra evoluci??n y de nuestra direcci??n; que nos estamos moviendo siempre en funci??n de lo que reconocemos como una expresi??n de lo bello.  ', 'Las esfinges nos dan direcci??n, pero debemos tener en cuenta las diferencias en funci??n de la perspectiva que cada esfinge nos ofrece. Si te encuentras con alguien que tenga su Sol en la puerta 13 en la cola del supermercado, acabar??s enfocando despu??s la direcci??n de tu vida a partir de algo que ya ha tenido lugar en el pasado, ya que esa es la direcci??n ofrecida por esa esfinge en particular. Sin embargo, si la persona con la que te encuentras es una Esfinge de esta segunda variante - con el Sol en la puerta 2 - entonces es alguien que abre todas las perspectivas para ti. Esa es la belleza de esta cruz de encarnaci??n, que abre simult??neamente todas las posibilidades de la direcci??n. Con el Sol de Personalidad en la puerta 2, estas personas est??n mucho m??s abiertas a todas esas posibilidades y a ver y describir las cosas desde todos los ??ngulos posibles.  ', 'Si te toca hablar con alguna de estas personas, puede que su comunicaci??n resulte un tanto confusa. Una de sus dificultades estriba en que a pesar de saber cu??l es la direcci??n, tienen limitaciones severas a la hora de saber describirla a otros. De alg??n modo consiguen se??alar hacia algo que est?? en el futuro, o hacia algo que ha quedado atr??s en el pasado, o intentando hacer camino en el momento presente...., pero siempre se??alando la direcci??n a seguir. Si le preguntas a estas personas: "??Qu?? es lo que debo hacer?" lo ??nico que te dir??n en el fondo es la direcci??n que deber??as seguir seg??n su criterio. No te pueden prestar m??s ayuda que se??alarte el camino a seguir en tu proceso individual. Aunque todo lo dem??s se vuelva confuso, eso no disminuye la importancia de disponer de fuerzas de este tipo en nuestra vida.  ', 'Como estamos abriendo aqu?? un nuevo campo de la experiencia humana, una de las primeras cosas que debemos entender es que la creaci??n de la belleza depende de nosotros mismos. Nosotros somos responsables de construir un mundo para nosotros, y si nuestro mundo acaba siendo un mundo feo, entonces la culpa ser?? nuestra. Pero si logramos que el mundo que creamos sea hermoso, ??no significa eso que nosotros somos maravillosos? En todo caso, la responsabilidad de hacer algo al respecto es enteramente nuestra. De alg??n modo, se podr??a decir que este es el c??digo gen??tico de los basureros, ya sabes. Los que limpian y recogen la mierda que otros dejan tirada.  ']
//     },
//     {
//         cruz: 'Cruz Angulo Derecho de la Esfinge 3',
//         img: imagesCruzes['esfinge.jpg'].default,
//         texto: ['La esfinge trata siempre de la capacidad de dar direcci??n a otros, pero que la diferencia en el funcionamiento de cada variante de la misma cruz viene determinada por el tema de la posici??n de su Sol de Personalidad. Para ver ese tema en el movimiento que ??quiere tomar?? hacia su propia realizaci??n, tenemos que considerar tambi??n la puerta arm??nica que completa el canal donde se ubica el Sol en el gr??fico. Esa puerta arm??nica nos se??ala el camino que esa direcci??n quiere tomar para realizarse. En el contexto de la puerta 7, una puerta asociada a nuestros roles de liderazgo l??gico, su rol     siempre est?? buscando alguna forma de ser influyente (la puerta arm??nica 31).  ', 'Analizando los cuatro brazos de la Cruz de la Esfinge, tenemos que dos de ellos son de naturaleza individual  en  el c??lculo prenatal de Dise??o - el eje de las puertas 2 y 1. Las otras dos puertas son colectivas, con la apertura natural a los desconocidos inherente a la puerta 13 - una puerta cuya atenci??n se centra en el pasado - y la puerta 7 - que es parte de proceso l??gico - y que mira siempre hacia delante intentando proyectarse hacia el futuro. Esta es la m??s activa de las variantes de la Cruz de la Esfinge, ya que aqu?? se encuentran aquellos que tienen un deseo real de llegar a ser directores y dar direcci??n a los dem??s. Su Sol de Personalidad posicionado en la puerta 7 lleva inherente el deseo de ser capaz de liderar, porque ese es el rol que tiene que jugar en la vida. No es aqu?? donde corresponde desglosar los pormenores de la profundidad en las diferencias que hay entre los mecanismos del ??ngulo derecho, la yuxtaposici??n y el ??ngulo izquierdo. Es algo que tendr?? que esperar para otra ocasi??n.  ', 'Sin embargo, hay algo que deber??s tener siempre en cuenta cuando est??s tratando con una puerta de roles como la que nos ocupa, tanto m??s en cuanto que este es un cuarto en el que nos iremos topando con varias de esas puertas que configuran la naturaleza de los roles humanos. Un ejemplo id??neo de esto lo tenemos en el hecho de que la l??nea 7.1 es la del autoritarismo. Es decir, que si naces con el Sol de Personalidad en la primera l??nea de la puerta 7, ser??s alguien que activamente desea llegar a ser un l??der de tipo autoritario. Ser??s alguien que busque llegar a esos lugares en los que se te permite ejercer influencia y se te da acceso a ejercitar esa forma de autoridad. Pero si naces con el Sol en la segunda l??nea, tu liderazgo tendr?? una cualidad democr??tica. Por supuesto que seguir??s dese??ndolo de un modo activo, pero simplemente te dedicar??s activamente a intentar conseguir para ti el voto de los dem??s, en lugar de intentar activamente imponerle a otros tu criterio acerca de lo que deben o no deben hacer. Los l??deres que nazcan con el Sol en la tercera l??nea de la puerta 7 ser??n l??deres an??rquicos, que activamente desear??n el derrocamiento de ciertas estructuras. Al fin y al cabo, hay dos tipos de pol??ticos: los que prometen la llegada de algo nuevo, y los que prometen librarnos de algo viejo. Los l??deres an??rquicos son los que nos van librando de lo viejo, no es que sea nada demasiado glamoroso. Al llegar a la cuarta l??nea del hexagrama nos encontramos con una forma de liderazgo completamente distinta. Aqu?? tenemos a alguien que aceptar?? la oportunidad de liderar, pero que est?? realmente seguro de su capacidad de liderazgo, por lo que siempre est?? dispuesto a que ese liderazgo vuelva a desaparecer de su vida abdicando de ??l. Dicho de otro modo, lo que quiero mostrar aqu?? son los temas generales que hay engranados en la estructura misma de un hexagrama, y que en la puerta 7 reflejan diferentes maneras de buscar la influencia a trav??s de un liderazgo activo que desea ser una esfinge, que busca la oportunidad de dar direcci??n a los dem??s. Es solamente para que entiendas todas las sutilezas que subyacen a la tem??tica de una cruz. La persona necesita poder jugar su papel en la vida, y la naturaleza de ese papel estar?? determinada por el matiz activado en la mec??nica de la cruz.  ', 'No quiero dejar de mencionar el hecho de que, cuando comenc?? a ense??ar el ??ndice Global de las Encarnaciones, ten??a la intenci??n de hacer entender a todos algo realmente profundo. Ten en cuenta que no estamos viendo nada m??s que temas generales, y que bajo la posici??n del Sol de Personalidad en la primera l??nea de la puerta 7 hay 1.080 variantes espec??ficas del mismo tema. S??lo en esa l??nea existen subyacentemente 1.080 variaciones distintas. De ah?? que la raz??n de fondo en mi decisi??n de introducir el ??ndice Global de Encarnaciones fuera la de tener una oportunidad de presentar todos los pormenores de este conocimiento. Aqu?? el nivel de la l??gica comienza a tener tanta profundidad que se vuelve realmente incomprensible. S??, el ??ndice comienza aqu?? con la configuraci??n de cada una de estas cruces, pero las cruces siguen siendo un elemento que est?? en la superficie misma de las cosas, y hay muchos ingredientes por debajo que matizan su realidad. En realidad, los ejemplares vivos de cada una de las variaciones de cada cruz son m??s bien escasos, lo que permite que te hagas una idea clara y valores a fondo - desde una perspectiva l??gica - el incre??ble valor inherente en tu propia vida. Nadie es tan sustituible que haya cientos o miles o millones de ejemplares de humanos exactamente iguales que puedan ocupar su puesto, porque cada una de las variantes de estas cruces tiene peculiaridades realmente extraordinarias. Todos venimos al mundo sobre una de estas cruces de encarnaci??n, pero la variante particular de nuestra cruz no es visible en la gran imagen que vemos en la superficie, sino que viene determinada por matices que existen en niveles mucho m??s profundos del hexagrama y de la l??nea espec??fica que est?? activada en cada caso.  ']
//     },
//     {
//         cruz: 'Cruz Angulo Derecho de la Explicaci??n 2',
//         img: imagesCruzes['explicacion.jpg'].default,
//         texto: ['Cuando examinamos la primera variante de la Cruz de Angulo Derecho de las Explicaciones, ten??amos el Sol de Personalidad en la puerta 49, por lo que estaba enraizada en la revoluci??n y en la violencia. Ah?? pudimos ver la relaci??n entre nuestra necesidad de ser capaces de matar y de sacrificar otras formas de vida y el nacimiento de nuestros impulsos religiosos. Pero aqu?? la tem??tica de esta cruz nos muestra un lado distinto, porque en esta Cruz de las Explicaciones el Sol de Personalidad opera a trav??s de la puerta 23. El Canal 43/23 es una de las tres definiciones que se forman por oposiciones en el mandala zodiacal. Con una mente tan fija conectada al Centro de la Garganta, aqu?? es donde la Cruz de las Explicaciones adopta verdaderamente su naturaleza m??s pura. La puerta 23 es la puerta de la asimilaci??n, y gira enteramente en torno a la capacidad de saber explicar lo que uno quiere decir. Este es un ingrediente esencial en la vida de estas personas, que no pueden nunca dejar de dar explicaciones acerca de todo. ', 'Hay un chiste inherente en la individualidad. La conciencia colectiva incluye todas las cosas que ya han quedado establecidas y nos resultan familiares, por lo que son aceptadas por todos. Pero en el caso de la individualidad surgen conceptos, expresiones y maneras de decir lo que sea que ha de encarnar lo nuevo, que tienen una naturaleza mutante. Es decir, que la primera vez que los escuchas pueden sonar muy raros y desconcertantes. Es as?? por la sencilla raz??n de que cuando el individuo intenta explicarle su saber a alguien puede emerger con una estructura que nunca hab??a sido concebida antes. Sin embargo, la estructura de la individualidad lleva incorporado un tipo de mecanismo que fuerza a la persona a repetirlo una y otra vez. Al cabo de un rato, se acaba haciendo familiar. Algo semejante lo tenemos en el ejemplo de Ra habl??ndonos de la existencia de cristales de personalidad. Seguro que la primera vez que se lo dijo a alguien, esa persona pens??: "Caramba, este t??o dice cosas raras. ??A qu?? se referir???" Pero ahora hay suficiente gente diciendo por ah??: "cristales de personalidad, cristales de personalidad, cristales de personalidad." Esos son los mecanismos de la mutaci??n, ya que no se muta a alguien necesariamente la primera vez que se habla con ??l. Es como cuando te peleabas siendo un ni??o. Te cre??as que con darle un golpe al adversario ser??a suficiente, pero luego te das cuenta de que no es as??. La mutaci??n no funciona de ese modo. Es cierto que algunas mutaciones ocurren al primer impacto, pero otras mutaciones est??n basadas en este tipo de repetici??n, y no logran penetrar hasta que dejan de resultar extra??as para la mente colectiva. "Oh, eso ya lo hab??a escuchado antes." En el momento en que alguien dice:"Eso ya lo hab??a o??do antes", se eliminan la mayor??a de las resistencias. Si te encuentras con alguien que tenga esta Cruz de Angulo Derecho de las Explicaciones, comprobar??s que es alguien que perfecciona su capacidad de repetir en tu misma cara. Seguir?? insistiendo, persistiendo en su saber con la esperanza de que si lo escuchas el tiempo suficiente acabar??s por enterarte.  Cuando los adultos est??n en alg??n pa??s extranjero, particularmente los norteamericanos, en alguna situaci??n en la que intentan hacer llegar alg??n mensaje a alguien, suben autom??ticamente el tono de su voz. Cada vez lo suben m??s. Ese es un rasgo caracter??stico de la individualidad. Dicen algo que suena raro, y lo vuelven a decir otra vez pero un poco m??s alto. Es un intento de penetrar con la mutaci??n en otros. De modo que tienes que personarles, porque te lo seguir??n diciendo hasta que te familiarices con ello. Luego podr??s decir: "Ya, ya, lo hab??a o??do antes." Es muy dif??cil ser un raro. Los que son portadores de alguna definici??n individual en su dise??o saben que hagan lo que hagan seguir??n siendo unos marginales. No importa lo mutantes que sean, o lo potencialmente integradores, la realidad es que siempre est??n al margen de todo, y permanecer??n al margen de todo para siempre.']
//     },
//     {
//         cruz: 'Cruz Angulo Derecho de la Explicaci??n 4',
//         img: imagesCruzes['explicacion.jpg'].default,
//         texto: ['Llegamos ahora a la cuarta variante de la Cruz de Angulo Derecho de las Explicaciones, la gran cruz del bla, bla, bla. Siendo yo mismo portador del canal 43/23, soy capaz de soportar ese tipo de abusos hasta un cierto punto. La puerta 43 - la Resoluci??n - es la puerta de la perspicacia, del o??do interno, del fen??meno de las ac??sticas internas. Como ya hemos visto en las variaciones previas de esta cruz, la cualidad de las explicaciones depender?? de la puerta principal a trav??s de la que son expresadas, siempre en funci??n de la posici??n del Sol de Personalidad. De ah?? que las explicaciones de la puerta 49 giren siempre en torno a las razones que hacen necesaria la revoluci??n, las de la puerta 4 respondan a las cosas de una manera l??gica, y las de la puerta 23 sean explicaciones que explican la explicaci??n en s?? misma. Lo que podemos encontrar frecuentemente en la puerta 43 es una profunda reticencia - e incluso incapacidad - para explicar cualquier cosa. Eso no significa que no pueda o sea capaz de hacerlo, sino que simplemente se da ese caso con relativa frecuencia. ', 'Cuando el Sol de Personalidad est?? en la puerta 43, el tema principal gira en torno a la perspicacia para con uno mismo y a los fen??menos ac??sticos internos. Sin embargo, no se trata de satisfacerlos d??ndoles expresi??n, a??n cuando est?? disponible la definici??n que se forma con la polaridad del canal 43/23. Toda la tem??tica gira simplemente en torno a la propia perspicacia y al proceso interno de pensamiento.  ', 'Imagina que una de estas personas est?? a punto de tener una confrontaci??n muy importante con alguien. La puerta 43  vivir?? esa confrontaci??n en el interior de su propia mente mucho antes de que tenga lugar en la realidad - su capacidad ac??stica la llevar?? a escuchar lo que se dice, lo que no se dice, lo que deber??a ser dicho. Sin embargo, aunque todas esas cosas sean dichas en ese nivel mental, cuando llega la hora de la confrontaci??n, es muy probable que no pueda decir nada. Puede que asienta con la cabeza, o que diga "s??" o "no" a algo, pero todas las cosas que pasaron por su cabeza y de las que pensaba hablar, que iba a decirle a la otra persona, ahora no las puede expresar.  ', 'Sirva este ejemplo para que te hagas una idea de lo dif??cil que es convertir la ilusi??n de la ac??stica interna de la puerta 43 - esa perspicacia interior - en lenguaje com??n y corriente. Eso s?? que es verdadera traducci??n. Despu??s de ver c??mo la gente ha traducido mi trabajo a lo largo de los a??os, puedo decir que el resultado ya no es verdaderamente mi trabajo. Es un nuevo trabajo basado en mi trabajo, pero no es lo mismo. Al fin y al cabo, se trata de un lenguaje distinto que tiene otras ra??ces en la cualidad y en el sentido que encierran las palabras que se dicen, adem??s de la f??rmula mec??nica b??sica que el tono lleva en s?? mismo. Es decir, que la traducci??n para llevar el pensamiento de la puerta 43 a la 23 es algo muy dif??cil de hacer. Despu??s de todo, por algo le llamamos ??raros?? a los que nacen con este canal. Esa es la raz??n de que este canal lleve el subt??tulo ??de Genio a Chiflado??. Si no eres capaz de explicarte, entonces eres un chiflado, pero si consigues que otros asimilen tus explicaciones, entonces ser??s considerado alguien muy inteligente. Esta es gente que acaba abandonando la idea de intentar explicar a otros lo que sabe, pero que mantiene en su fuero interno la sensaci??n de una verdad que persiste, y que le otorga una cierta sensaci??n de seguridad en sus conocimientos.  ', 'En ese ??mbito interno de la ac??stica pueden existir encerradas cosas de gran valor, lo que nos retrotrae a una f??rmula b??sica para tratar con las criaturas con una individualidad muy marcada - particularmente con las criaturas del canal 43/23 que son muy comunes. Para poder ayudarlas y potenciar en ellas la capacidad de explicarse que tanto van a necesitar, es preciso llevarlas a practicar con la expresi??n de sus conceptos a trav??s de su Centro de la Garganta. Es bueno preguntarles qu?? es lo que est??n pensando, para que tomen conciencia de esos procesos, porque eso har?? que les resulte cada vez m??s f??cil aprender a traducirse a s?? mismos. Es como aprender un idioma nuevo. Cuando intentas decir algo al principio en un idioma nuevo, tienes que o??rlo primero en tu mente para traducirlo. Sin embargo, cuando llevas el tiempo suficiente practicando ese idioma, las frases simplemente est??n ah??, ya que no tienes que traducirlas previamente para poder expresarlas. Por todo ello, es muy importante que las personas del canal 43/23 tengan la oportunidad de practicar y reciban el apoyo necesario para ello.  ', 'En lugar de eso, lo que suele ocurrir es que los padres mismos las consideran un aut??ntico dolor de cabeza, ya que no paran de decir: "Yo s??." Si tienes seis a??os, y te pasas todo el rato diciendo "Yo s??", cuando todos saben que no tienes ni idea de lo que hablas al decirlo, lo que ocurre es acabas viviendo todo este tema con much??sima presi??n. Eso le a??ade una carga de dificultad a la vida de estas criaturas. O sea, que la ??nica manera de facilitarles la vida es estimulando en ellas la capacidad de articulaci??n oral.  ']
//     },
//     {
//         cruz: 'Cruz Angulo Derecho de la Explicaci??n 1',
//         img: imagesCruzes['explicacion.jpg'].default,
//         texto: ['El paso siguiente est?? en la puerta 49, y esta es una puerta que dice: "Perdonadme - la comida." Es muy interesante ver la forma en que la comida irrumpe en nuestra existencia. Si has de sobrevivir, si has de existir dentro de un cuerpo, la comida se hace irrenunciable. Est?? muy bien que haya todo este material intelectual al comienzo de todo el proceso - Oh, luce muy bonito ah??, al principio de todo, pero el paso siguiente nos lleva a tener que decir: "Espera un momento, espera un poco, si vamos a seguir por este camino, perdona, vamos a necesitar algo para comer. Si vamos a necesitar algo para comer, vamos a tener que hacer algo en lo que quiz??s no hayas pensado todav??a - vamos a tener que matar. As?? que salgamos todos afuera y afilemos nuestras lanzas para matar." Como ver??s, el programa evolutivo no nos ahorra nada - lo veremos todo - pero el impulso de matar, el impulso de matar aparece muy temprano. ', 'No se trata de matar a tu vecino, o a tu esposa. Hablamos de la necesidad de matar animales para poder comerlos y alimentarte. En el canal 49/19 tenemos la conexi??n potencial tan especial que hay entre el dise??o de los mam??feros y el de los humanos. Aqu?? es donde nos encontramos en el nivel m??s m??stico de la existencia con el mundo mam??fero, y aqu?? es donde, a trav??s del animismo, tiene sus or??genes el impulso religioso de la especie humana. De modo que al llegar a la puerta 49, no solamente llegamos a un momento en el que miramos hacia el pasado, sino que estamos considerando algo m??s, y ese algo m??s es: "??Existe un Dios? ??Existe algo que merezca la pena ser adorado? Casi mejor que existiera un Dios en alguna parte, quiz??s si matamos en su nombre todo vaya bien, etc, etc..." En la racionalizaci??n de ese impulso religioso reside el origen de todas las creencias religiosas que ya conocemos. ', 'La Cruz de Angulo Derecho de la Explicaci??n ha pasado por muchas cosas desde el comienzo de la Ronda de Civilizaci??n actual, que comenz?? aproximadamente hace 1.600 a??os. Esta es una cruz que tiene una importancia fundamental. B??sicamente, lo que establece es cu??les son los principios y las respuestas ineludibles para poder satisfacer nuestras necesidades m??s b??sicas y elementales. Se trata de una cuesti??n cuya importancia no se debe subestimar. Esta es una cruz que a la vez que es emocional, muestra todas las rarezas de la individualidad porque el eje prenatal de su Sol / Tierra de Dise??o est?? enclavado en el Canal 43/23. Vemos, por tanto, que hay una poderosa individualidad subyacente que se mantiene tambi??n en esta cruz.  ', 'Esta es gente que est?? tratando siempre de determinar qui??n forma parte de la revoluci??n y qui??n no. Ese es su tema. La puerta 49 est?? buscando siempre alg??n tipo de alianza con otros, incluso en el nivel del ??ngulo derecho, ya que en su nivel m??s profundo la revoluci??n siempre est?? vinculada a alguna forma de sacrificio. Esta es la puerta de ser sacrificado o de ser el que sacrifica a otros. Este es el arquetipo del carnicero.  Si miras a ver en el dise??o de asesinos en serie, carniceros, podr??s comprobar de qu?? estamos hablando - ver??s c??mo la puerta 49 siempre est?? presente. Esto no significa que debamos tener controlados con la acreditaci??n correspondiente a todos los que tienen esta puerta en su dise??o para que no sean malos, sino que pretende simplemente se??alar y resaltar la importancia de entender la volatilidad del sistema emocional.  Al fin y al cabo, esta es una puerta de principios emocionales, que funciona con el movimiento de la ola emocional, fluctuando constantemente desde la esperanza al dolor, y en la que no hay acceso a la verdad en el instante presente, sino que se debe esperar a que llegue la claridad cuando se completa el transcurso de la ola emocional. Esta es gente que siempre tiene que estar dando explicaciones a los dem??s porque siempre acaba metida en todo tipo de problemas. Los problemas que se ocasionan est??n originados casi siempre por las tensiones que emanan de la violencia inherente a esta puerta - una de las cuestiones por las que m??s acaloradamente discuten es por ver qui??n se lleva las mejores partes. ??Has visto alguna vez a los gatos salvajes matar alguna pieza, y tener despu??s alguna amable discusi??n para ver qui??n se lleva la mejor parte? ', 'Una de las versiones m??s interesantes de esta cruz en la actualidad es que nos provee de "profetas itinerantes". Hay algunos profetas muy divertidos dando vueltas por ah?? con esta cruz a cuestas. Es el tipo de gente que piensa que tiene la capacidad de explicar las cosas. Pero como dec??a el bardo: "Se me antoja que protesta demasiado." Esta es gente que te sigue explicando cosas cuando ya hace tiempo que t?? te sientes como muerto. Eso hace que una de las cosas m??s frecuentes es que, siendo el canal 43 / 23 como es, cuando ha terminado de explicarte algo t?? sigas pregunt??ndote qu?? es lo que te quer??a decir, y te alejes pensando: " No s?? qu?? me quer??a decir. Ni siquiera s?? muy bien de qu?? estaba hablando ni qu?? es lo que me quer??a explicar." Explicar la estructura individual de su visi??n es una labor harto dif??cil para la persona con el canal 43 / 23, y tampoco deber??amos olvidar que se trata de un canal que se da con mucha frecuencia en la poblaci??n humana.  ', 'La Mutaci??n no es algo que sea f??cil de transformar y de articular con el lenguaje. Simplemente no es as?? como funcionan las cosas. Hay una gran cantidad de lucha y de tensi??n adherida a todo ese proceso. As?? que la persona de ??ngulo derecho va por ah?? diciendo: "Estos son mis principios emocionales. Quiero que trabajes conmigo, no porque me importes demasiado, no porque te quiera a ti, ni tampoco porque me gustes particularmente. No se debe a ninguna otra raz??n que no sea al hecho de necesitarte, ya que ah?? fuera hay m??s lobos que humanos." No es que haya una enorme cantidad de cari??o implicada en ese v??nculo. Cuando veas a alguien que tiene su Sol de Personalidad en la 49.1, estar??s tratando con un revolucionario que apenas tiene seguidores - y esa ser?? la raz??n por la que siempre estar?? intentando explicarse.  ']
//     },
//     {
//         cruz: 'La Cruz Angulo Derecho de la Penetraci??n 1',
//         img: imagesCruzes['penetracion.jpg'].default,
//         texto: ['El hexagrama 51 - Lo SUSCITATIVO - que representa la puerta del shock y del trueno, es el sujeta libros de la puerta 25 - La Inocencia. La puerta 51 es una puerta del ego, y tiene una relaci??n biol??gica con la ves??cula biliar. Aqu?? es donde est??n las agallas.', 'Las personas de la Cruz de Angulo Derecho de la Penetraci??n hace exactamente eso; te penetran.', 'Es para lo que est??n aqu??, para penetrarte de muchas maneras diferentes. La profundidad con la que su intuici??n penetra en ti te puede dar un shock. Otro modo de penetrarte es llamando tu atenci??n. Tambi??n penetran en las cosas abriendo puertas a todo lo nuevo e iniciando todo tipo de cosas.  ', 'La Cruz de Angulo Derecho de la Penetraci??n es una fuerza muy din??mica. La puerta 51 tiene una cualidad cl??sica del signo de Aries. De modo que estamos tratando aqu?? con unos comienzos muy rudimentarios, pero con una capacidad de penetraci??n muy profunda. Siempre que haya aspectos de individualidad en los elementos que configuran una cruz, estamos tratando con una cruz mutante, y, por lo tanto, la gente que sea portadora de esas cruces son agentes para todo tipo de mutaciones. Es decir, que esta Cruz de la Penetraci??n es una cruz mutante. El shock que inadvertidamente le dan a cualquiera - no olvides que es gente de ??ngulo derecho - puede tener un valor tremendo para esa persona. Sin embargo, puede que esa ni siquiera fuera la intenci??n del ??ngulo derecho, del que ya sabemos que vive absorto en su propio proceso personal.  ']
//     },
//     {
//         cruz: 'Cruz Angulo Derecho de la Planificaci??n 2',
//         img: imagesCruzes['planificacion.jpg'].default,
//         texto: ['Ahora nos adentramos en aguas mayores, ya que con la puerta 16 llegamos a la puerta del entusiasmo - lee entusiasmo como sin??nimo de identificaci??n. Al fin y al cabo, esta es la gran puerta de la identificaci??n. Sin la identificaci??n no hay ninguna manera posible de establecer lo que es correcto, y no habr??a ninguna forma de actualizar los experimentos que hemos ido llevando a cabo. En un sentido l??gico, el verdadero progreso de la humanidad se manifiesta a trav??s de la puerta 16. En esta Cruz de Angulo Derecho de la Planificaci??n tenemos el comienzo de lo que vivimos hoy en d??a en este fin de ciclo global. Con Sol en la puerta 16, el talento lo significa todo. Esta es gente que busca el talento en la capacidad de aportar soluciones a los problemas, y que tiene una profunda capacidad de enfocarse sobre soluciones talentosas que puedan servir al bienestar de la tribu. Como todav??a tenemos presente la definici??n del canal 37/40, sabemos que la tem??tica de esta cruz sigue implicando la necesidad de llegar a acuerdos con los dem??s.  ', 'De la puerta 16 nacieron todas nuestras tecnolog??as. Es a trav??s de esta puerta que hemos desarrollado la capacidad, no de dise??ar un edificio, sino de construirlo. Aqu?? tenemos la capacidad de encontrar el patr??n m??s correcto para hacer las cosas. Una de las claves para entender las mec??nicas de una cruz es fijarse en la puerta arm??nica del Sol de Personalidad, que es la que completa el canal donde lo tenemos posicionado. La puerta arm??nica de la 16 es la puerta 48, lo que hace que el foco m??s importante en la vida de esta cruz sea la profundidad con la que experimenta su existencia. Es gente que siempre est?? buscando mayor profundidad en todas las soluciones que maneja, y maneras de establecer la correcci??n en el colectivo humano. Es gente que busca cosas con las que experimentar para el beneficio de toda la comunidad.  ', 'Sin embargo, una de las iron??as es que no es f??cil tener alguna oportunidad si naces con esta cruz, ya que la l??gica tiene un problema muy real en la misma base de su estructura; y es un problema de recursos energ??ticos. Ninguna de las tres puertas de expresi??n l??gica que desembocan en la Garganta tiene acceso directo a ninguno de los centros motores. Algo que s?? se da en las puertas de la Garganta que pertenecen al Circuito de Abstracci??n, y en las que pertenecen al Circuito de la Individualidad, y tambi??n en la ??nica puerta de la Garganta que da expresi??n a los circuitos tribales. En las puertas 62, 31 y 16 - las tres puertas de la expresi??n l??gica - los centros a los que dan acceso no son motores. Eso significa que no siempre se dispone de suficiente energ??a, por lo que mucha gente se ve obligada a buscar a alguien que pueda financiar los recursos necesarios para llevar a cabo sus experimentos. Con el Sol en la puerta 16, esta Cruz de la Planificaci??n gira enteramente en torno a la identificaci??n con los experimentos hasta conseguir llevarlos a cabo. Eso no significa que lograrlos vaya a ser una tarea f??cil de cumplimentar. No hace falta decir que eso puede conducir a todo tipo de dificultades en t??rminos de lo que es el ego emocional que esta cruz lleva siempre impl??cito.  ']
//     },
//     {
//         cruz: 'Cruz Angulo Derecho de la Planificaci??n 4',
//         img: imagesCruzes['planificacion.jpg'].default,
//         texto: ['Llegamos a la cuarta variaci??n de la Cruz de Angulo Derecho de la Planificaci??n, que representa el tema global en el que nos encontramos en la actualidad. Solamente hay dos puertas que haga menci??n expresa de ???lo peque??o???, y son la puerta 62 - la Preponderancia de lo Peque??o - y la puerta 9 - la Fuerza para Domesticar lo Peque??o. Toda la tem??tica de la puerta 9 gira en torno a la aplicaci??n de la energ??a vital al foco sobre los detalles de alg??n experimento l??gico. De aqu?? proviene la expresi??n popular que dice: "Un viaje de miles de millas comienza por el primer paso." Aqu?? se trata de aprender a apreciar ese aspecto tan fundamental de la vida, de que, aplic??ndonos en los detalles de las cosas peque??as, las cosas grandes crecen del modo m??s natural.  ', 'Esto es muy importante a la hora de la planificaci??n. Si nos gui??ramos solamente por lo que dice la puerta 16 a la hora de planificar nuestros experimentos, lo ??nico que tendr??amos es un entusiasmo superficial por alguna novedad arquitect??nica. Esa puerta simplemente dispone de ese entusiasmo para construir lo que sea: "Dadme algo de energ??a, y os construir?? algo." Si nos dejamos guiar por la planificaci??n del canal 40/37, entonces la planificaci??n se limitar?? a cosas y cuestiones muy b??sicas. Te dir??n: "Mira, lo que necesitamos es un centro comercial. Necesitamos una buena escuela para nuestros hijos. Necesitamos un buen sistema de regad??o." Es decir, que dar??n prioridad a las cuestiones pr??cticas que influyen sobre la calidad de su vida tribal, sobre la calidad de su vecindario, y ese tipo de cosas', 'Pero si consideras la planificaci??n que tiene lugar en la puerta 9, entonces est??s viendo un proceso muy distinto. Aqu?? de lo que se trata es de acumular toda la energ??a posible para los detalles de alg??n experimento - ni siquiera de realizar el trabajo detallado en s?? mismo, sino de acumular la energ??a necesaria para ello. Debido a que todas las puertas del circuito l??gico est??n fam??licas de acceso a los recursos energ??ticos, la puerta 9 tiene la funci??n de recaudar los fondos necesarios para un experimento l??gico. Esta puerta intenta, de hecho, reunir la energ??a suficiente para poder llevar a cabo todos los detalles del trabajo a realizar. Si quieres dedicarte a la investigaci??n, y tienes que atender un empleo de 12 horas diarias para poder sobrevivir, lo m??s probable es que tus investigaciones no avancen demasiado. Sin embargo, si alguien financia tus investigaciones y puedes renunciar al empleo que mantienes por necesidad, entonces todo ir?? viento en popa. La puerta 9 est?? buscando siempre por la energ??a necesaria para enfocarse y concentrarse sobre el trabajo detallado del experimento planificado. Si no dispones de esos recursos, entonces simplemente no puedes hacer nada.  ', 'De ah??, que esta variante de la Cruz de la Planificaci??n sea muy importante. Una vez ha sido capaz de acumular la suficiente energ??a, entonces es capaz de proveer una energ??a continuada para enfocarse sobre todos los detalles de un proceso. Resulta casi una redundancia decir que la planificaci??n se beneficia con la atenci??n a todos los detalles, y esta es la ??nica posici??n en la que disponemos de ese tipo de sensibilidad. La tribu tiende a pedir muchas cosas que no necesita en realidad. Por ejemplo, en los ??ltimos cinco a??os ha habido un par de pa??ses africanos que construyeron enormes edificios religiosos que nadie quiere. Uno de ellos - el mayor de todo el mundo cuando fue construido hace cuatro a??os - est?? abandonado en la actualidad. Tras el golpe de estado que derroc?? al l??der del pa??s, la gente que va ahora al templo construido en el poblado natal del l??der derrocado, lo hace solamente para llevarse todo lo que pueda. Es decir, que la tribu demanda cosas que no siempre necesita y a las que no siempre le reconoce un valor suficiente como para invertir en ello los recursos de los que uno dispone.  ', 'La funci??n de la puerta 9 es la de manejar esa realidad con una cierta sensibilidad natural para esas cuestiones. Despu??s de todo, la sensibilidad es uno de los temas que se mencionan en la puerta 9. Se trata aqu?? de llegar a un punto en el que poder decir: "Bueno, disponemos ahora de todos los recursos que necesitamos para concentrarnos sobre los detalles." En el pasado, eso significaba simplemente que, si eras capaz de invertir tu energ??a en planificar la construcci??n de un nuevo alojamiento, eras eximido de la necesidad de salir a cazar." Ya que otros ten??an que responsabilizarse de garantizar su acceso a la comida, la puerta 9 era libre de producir los recursos necesarios para otra cosa. Es decir, que era libre de disponer de la energ??a acumulada para concentrarse sobre los detalles de algo.  ', 'Ese tipo de acuerdos siempre fueron y ser??n necesarios, ya que no se puede separar la planificaci??n de los pactos del canal 40/37 - es parte de la configuraci??n de esta cruz de encarnaci??n. La necesidad de pactar es un imperativo para poder acceder a los recursos energ??ticos necesarios, y poder llegar a concentrarse sobre los detalles de algo que permita a la planificaci??n llegar a manifestarse. La mayor??a de la gente que planifica cosas en la actualidad dispone de un plazo de tiempo muy corto para hacerlo. La mayor??a tiene que hacer las cosas deprisa y corriendo, para poder llegar a tiempo a los recursos, por lo que la planificaci??n se hace sobre la marcha y de mala manera. De ese modo, nos venden programas inform??ticos segundones y llenos de errores, y todo tipo de cosas que no fueron planificadas con suficiente atenci??n a todos los detalles implicados, probablemente por falta de medios para desarrollar un trabajo m??s cualificado. Este es un aspecto que nos permite entender c??mo se hacen las cosas en los tiempos que nos est?? tocando vivir.  ']
//     },
//     {
//         cruz: 'Cruz Angulo Derecho de la Planificaci??n 1',
//         img: imagesCruzes['planificacion.jpg'].default,
//         texto: ['A medida que avanzamos por la rueda de los hexagramas, el paso siguiente del Sol es la puerta 37 de la Familia, lo que sit??a la Tierra en la puerta opuesta, la 40. En consecuencia, tenemos la definici??n del canal 40/37, el Canal de Comunidad, que trata espec??ficamente de los acuerdos y pactos en el seno de la familia. La tem??tica de necesitar llegar a acuerdos en el mismo seno de la familia fluye naturalmente a partir de la estructura que le precede. Hemos visto en la Cruz del F??nix Durmiente el establecimiento de los v??nculos y estrategias sexuales, que representan un alivio para el esp??ritu y abren la posibilidad de encontrar amor a trav??s del v??nculo sexual. El amor que encontramos a trav??s del v??nculo sexual tiene que consolidarse luego completamente en los acuerdos y pactos alcanzados con la Familia.  ', 'Los pactos de la estructura familiar van a tener que cambiar, porque... ??qu?? aspecto tendr??n las estructuras familiares cuando alcancemos cuotas de fertilidad tan severamente limitadas? Es algo que ahora no podemos imaginar siquiera, no sabemos c??mo se desarrollar?? eso en la pr??ctica. Es algo nunca visto hasta ahora en el desarrollo de nuestra especie. Si no tenemos en cuenta los aspectos impl??citos en la mutaci??n que se est?? acercando, y simplemente consideramos lo que vemos ah?? presente, vemos qu?? es lo que fluye naturalmente a partir de nuestra necesidad de encontrar sexualidad, amor y la realizaci??n de nuestro esp??ritu humano. En este punto el programa evolutivo nos est?? diciendo: "Mirad hacia la familia." Esto es un claro indicador de que solamente entrando a formar parte de los pactos familiares podremos finalmente darles satisfacci??n a todos y cada uno de estos aspectos humanos, y tambi??n de que la estrategia sexual existe para engendrar ni??os para la comunidad, ya que la comunidad es la fuerza a partir de la que los seres humanos triunfan.  ', 'En la s??ntesis del Sistema de Dise??o Humano y en el uso que hacemos del Mandala zodiacal, no s??lo nos servimos de la astrolog??a occidental - enraizada en la tradici??n babil??nica - sino que tambi??n usamos la astrolog??a oriental. La medici??n del movimiento de precedencia del equinoccio nos permite ver temas m??s globales que afectan a la evoluci??n del colectivo humano. En la fase actual, el tema global que condiciona nuestra evoluci??n est?? representado en esta Cruz de Angulo Derecho de la Planificaci??n. Cuando hayamos concluido esta etapa, dejaremos de estar inmersos en la tem??tica de una 1?? l??nea, ya que el movimiento del equinoccio es opuesto al de las agujas del reloj. Es decir, que ahora estamos evolucionando globalmente a trav??s del tema de la 37.1, pero a partir de 2027 el tema global de nuestra evoluci??n se desplaza a la puerta 55.6. Ese es el punto de transici??n que marca el inicio de la mutaci??n como una fase nueva en la evoluci??n de nuestra especie. Pero en el contexto que nos ocupa, lo estamos viendo desde el otro lado. Lo que estamos viendo aqu??, en la naturaleza del mundo actual en que vivimos y en el funcionamiento del desarrollo de la consciencia sobre la Tierra, es el despliegue completo de su c??digo gen??tico. Si juntamos todos los temas de las 192 cruces, lo que tenemos son los par??metros en los que se basa el c??digo gen??tico de la totalidad, o la estructura y el patr??n mec??nico a partir del cual funciona el desarrollo de la consciencia planetaria. ', 'Debido a que globalmente estamos evolucionando a trav??s de los temas de esta Cruz de la Planificaci??n, el foco durante esta etapa est?? en la comunidad y en la capacidad de establecer pactos. Dicho sea de paso, la activaci??n de los temas globales a trav??s de esta cruz comenz?? en 1610, y han venido marcando nuestro proceso evolutivo desde entonces. Aqu?? todo gira en torno al desarrollo de energ??a aplicable a los peque??os detalles, al desarrollo de habilidades f??sicas y manuales, a nuestra b??squeda de mayor profundidad en el entendimiento de las cosas. En esencia, se trata de construir una comunidad.  ', 'En su modo de construir la comunidad, el 40/37 establece tambi??n las pr??cticas religiosas y m??sticas del clan. Construye las iglesias y los templos, creando v??nculos que sean capaces de mantener la uni??n entre todos los miembros de la comunidad. Desde que estos temas se activaron a comienzos del siglo XVII, sus efectos se han dejado notar en el funcionamiento de nuestras sociedades. Hemos podido asistir desde entonces a una institucionalizaci??n de la vida en diferentes estamentos. Hemos creado instituciones para la custodia de la salud, para la estructura interna de las ciudades, sistemas de escolarizaci??n, todo tipo de empresas y organizaciones, etc., etc. La creaci??n de todas estas estructuras sociales est?? integrada en las din??micas naturales de esta cruz. La fuerza que impulsa ese proceso es el deseo de unirnos a todos en torno al intento de crear algo m??s grande, y de crear un nivel superior de organizaci??n en nuestras sociedades.', 'Es un proceso que conlleva en su interior un tremendo bagaje de recursos y habilidades. Sin embargo, el protagonismo de esta Cruz de la Planificaci??n est?? tocando a su fin. El tipo de civilizaci??n en el que hemos estado viviendo hasta ahora est?? alcanzando su m??ximo apogeo, y a partir de 2027 deber??amos disponer de toda la informaci??n b??sica que necesitamos para comprender aspectos fundamentales de la naturaleza del universo y de nuestros propios cuerpos. La naturaleza completa del c??digo gen??tico, la edad y la masa del universo son elementos b??sicos que deber??an ser bien entendidos para entonces. Estamos aqu?? para llegar a entender lo que somos. Esa es la revelaci??n del Dise??o Humano, es la vocaci??n con la que ha nacido - dar a todos y cada uno una oportunidad de reconocer con absoluta claridad cu??l es su naturaleza original, de modo que podamos todos llegar a saber lo que es simplemente dejarse fluir con el devenir de la vida.', 'A medida que nos vayamos acercando a la transici??n del ciclo global que culminar?? en 2027, esta Cruz de la Planificaci??n, esta poderosa fuerza organizadora e integradora, ir?? desapareciendo. El pr??ximo ciclo global es casi enteramente individual, y entre sus prioridades no se encuentran ni la tribu ni los pactos familiares. Esos pactos sociales que se hacen necesarios en el seno de toda comunidad se vendr??n abajo, porque la familia misma, tal y como la conocemos hasta hoy, es algo que se est?? desmoronando ']
//     },
//     {
//         cruz: 'Cruz Angulo Derecho de la Tensi??n 1',
//         img: imagesCruzes['tension.jpg'].default,
//         texto: ['Con la Cruz de Angulo Derecho de la Tensi??n nos adentramos en asuntos m??s bien serios. El Sol entra en la puerta 21 - La Mordedura Tajante - y todo el mundo comienza a marcar el paso, porque esta es la puerta del control y de la necesidad de tener el control, la puerta del cazador y de la cazadora, del presidente y del l??der tribal. La vanidad humana nos impide aceptar las jerarqu??as. Desde el mismo comienzo de nuestra evoluci??n, desde el instante mismo del nacimiento de nuestra especie, podemos ver en la Cruz del Dominio que la usurpaci??n ha estado siempre al orden del d??a y ha sido parte de nuestro proceso desde siempre. Hay un empuje muy profundo en la humanidad para competir por escalar todos los niveles jer??rquicos. Es decir, de ascender en la vida, como quiera que uno quiera concebir ese ascenso. Siempre hay alguna resistencia en nosotros hacia la aceptaci??n de las jerarqu??as.  ', 'La Cruz de la Tensi??n viene simplemente con el equipaje necesario para ser un l??der natural, y el equipaje consiste en que para mantener la propia autoridad uno debe estar siempre en guardia y tener el control de la situaci??n. Sin ese control, la usurpaci??n siempre ser?? posible. Sin ese control, la tribu no puede funcionar correctamente, y si la tribu no funciona correctamente, toda la responsabilidad recae sobre el l??der. En la presi??n por ser el l??der, por ser el que ejerce el mando, tiene sus ra??ces esta Cruz de la Tensi??n.  ', 'La puerta opuesta a la 21 es la puerta 48, puerta de la profundidad, lo que revela que la verdadera capacidad de ejercer el liderazgo de la tribu est?? enraizada en la necesidad de tener profundidad de visi??n. Un aspecto divertido de la puerta 48 es que es la puerta de lo que conocemos por magia negra. No est?? mal disponer de algunos trucos, de pol??ticas ocultas, de fondos reservados, de matones en la trastienda, etc., etc., de lo que corresponda en cada caso.  ', 'El aspecto m??s dif??cil para los que vienen al mundo con esta cruz de encarnaci??n es tener que experimentar la tensi??n en su propio cuerpo, por lo que se trata siempre de gente que necesita ciertos tratamientos espec??ficos para que su cuerpo pueda liberar todas las tensiones. Masajes regulares, t??cnicas de relajaci??n, ejercicios f??sicos de todo tipo, esta es gente que necesita canalizar la vida a trav??s de su cuerpo, porque la tensi??n, que es un campo de energ??a que nace de su propia cruz de encarnaci??n, impacta directamente sobre su organismo f??sico.  ', 'La manera natural en que estas personas liberan la tensi??n es provocando a los dem??s, de modo que les pasan a otros la tensi??n que estaban procesando. Trat??ndose de alguien tan absorto como son las personas de ??ngulo derecho, puede que eso no resulte demasiado agradable. Al fin y al cabo, liberan esas tensiones con el ??nico prop??sito de sentirse mejor ellos. Si lo contemplamos desde un ??ngulo moral, se podr??a decir abiertamente que esa es una actitud terriblemente antisocial e ingrata. Sin embargo, desde un enfoque menos moralizante, debemos admitir que la Cruz de la Tensi??n es necesaria, porque sin ella no habr??a forma de mantener la autoridad en la tribu. La tribu necesita tener la sensaci??n de que, si incumple alguna de las normas, alguien vendr?? y le impondr?? un castigo.  ', 'Lo primero que nos encontramos con la entrada en la puerta 21 es la polic??a, porque aqu?? surge el reconocimiento de que es imprescindible tener el control y saber ejercerlo. De ese modo, la provocaci??n y la tensi??n conducen a una imposici??n que dice: "Yo tengo el control. Yo mando. Haz lo que digo. Haz lo que tienes que hacer, y todo as?? seguido." Es interesante c??mo funciona todo, ya que es algo que forma parte de en nuestra programaci??n gen??tica y evolutiva. Donde quiera que vay??is en este planeta encontrar??is a esas criaturas de uniforme que portan armas. Da igual d??nde vay??is, porque est??n por todas partes. No es que necesariamente quisi??ramos eso para nosotros, sino que es algo engranado en nosotros desde el nivel gen??tico de nuestra biolog??a. Es un rol humano m??s que est?? ah??. Siempre hay alguien cuya funci??n es dedicarse a vigilar que los dem??s guarden su turno en la cola. Somos genes de un cromosoma aguardando nuestro turno en la cola, y es preciso que tengamos a nuestras fuerzas del orden para mantener el control m??nimo de la situaci??n.  ']
//     },
//     {
//         cruz: 'Cruz Angulo Derecho de la Tensi??n 4',
//         img: imagesCruzes['tension.jpg'].default,
//         texto: ['Con el Sol en la puerta 38, tenemos la cuarta variaci??n de la Cruz de Angulo Derecho de la Tensi??n. Examinando las diferentes variantes de esta cruz, podemos ver en qu?? consiste y d??nde reside la tensi??n en cada una de ellas. La tensi??n est?? enfocada sobre los temas de la puerta 21 cuando el Sol de Personalidad est?? posicionado en esa puerta, de modo que la tensi??n se concentrar??a sobre el tema del control. Cuando se encuentra en la puerta 48, la tensi??n gira en torno a la necesidad de tener suficiente profundidad y de poder manifestarla. Con el Sol en la puerta 39, la tensi??n gira en torno a la posibilidad de encontrar el esp??ritu correcto para uno. Aqu??, en la puerta 38, la tensi??n gira en torno a la necesidad de encontrar prop??sito en la vida. En esta variante de la Cruz de la Tensi??n podemos encontrar los sufrimientos m??s profundos, ya que encontrar prop??sito en la vida no es algo que sea f??cil de conseguir. ', 'La puerta 38 - la Oposici??n - es la puerta del luchador, y est?? siempre dispuesta a abrirse a la posibilidad de luchar por algo que le de valor y prop??sito a su vida. La individualidad de la puerta 38 reconoce que la vida es dura y pu??etera, y que uno tiene que trabajar en algo para mantenerse en ella. Siendo portadores de un tema tan fatigoso, estas personas nos ense??an que la lucha de la vida es algo que todos tenemos que aprender a manejar, y que - cuando es correcta - esa lucha nos puede llevar a reconocer el valor y el prop??sito inherentes a nuestro estar aqu??. A partir de esa lucha, podemos finalmente encontrar algo verdadero valor. Debido a la naturaleza individual de la puerta 38, esta es una cruz de encarnaci??n profundamente melanc??lica. La gente que es su portadora puede sentirse muy triste, porque la vida no parece tener prop??sito para ella. La ??nica cura y la ??nica sanaci??n para ese mal consiste en vivir de acuerdo con la estructura del propio dise??o. Hay cosas por las que vale la pena luchar, pero es preciso que sepas cu??les son para ti. Debido a que la puerta 38 hace o??dos sordos a todo lo que se le diga, vive en un estado de anhelo perpetuo. No quiere realmente ser influida por nadie, porque su naturaleza es profundamente individualista. Lo que le gustar??a es simplemente encontrar alg??n prop??sito para seguir llevando adelante su vida. De ah?? que sucumba a la profunda tristeza que le puede penetrar. Pero no olvides que esa es precisamente su musa, por lo que est?? tambi??n puede ser una cruz profundamente creativa.  ', 'Como con las dem??s variantes de la Cruz de la Tensi??n, esta es gente que necesita recibir tratamiento para liberar las tensiones de su cuerpo f??sico. Es muy importante que cuenten con las personas que le pueden ayudar a liberar las tensiones de su organismo. Sin embargo, al mismo tiempo, lo ??nico que puede eliminar esas tensiones de un modo definitivo es encontrar alguna actividad a la que merezca la pena dedicarse en la vida. Eso es todo lo que estas personas necesitan. Lo pueden encontrar f??cilmente si dejan de resistirse a las mec??nicas de su dise??o individual. La Cruz de la Tensi??n somete nuestro organismo a una tortura enorme cuando vives en la ignorancia, porque no deja de manifestarse a trav??s del cuerpo. Es capaz de crear tensiones enormes en el cuerpo f??sico, como por ejemplo contraer los hombros de un modo que puede originar dolores cr??nicos. Es gente que simplemente tiene todo tipo de tensiones en su organismo.   ', 'Recibir tratamiento para su cuerpo no es una cura definitiva, al menos mientras sigan siendo inconscientes de sus mec??nicas. Por supuesto que lo necesitan y que les har?? bien, pero no es una cura definitiva. Una criatura con esta configuraci??n tendr?? tantos dolores y tensiones que te har??n pensar que algo anda mal con ella, pero no tiene por qu?? ser as??. Es simplemente el efecto de ser portador de este tipo de configuraci??n. De lo que se trata es de lograr que se abran y de ofrecerles cosas a las que le reconozcan un valor individual.  ']
//     },
//     {
//         cruz: 'Cruz Angulo Derecho de las Leyes 1',
//         img: imagesCruzes['leyes.jpg'].default,
//         texto: ['La Dificultad Inicial. Una vez completada esta transici??n llegamos a la Cruz de Angulo Derecho de las Leyes, que representa los primeros preparativos para lo que finalmente se convertir?? en un dise??o civilizado. las personas que vienen al mundo con esta cruz traen consigo la ley, las normas y los mandamientos. Cada una de las puertas de la Cruz de las Leyes tiene su propia capacidad para crear normas, dictar leyes y establecer el orden.', 'Con la definici??n que se forma en el canal 3/60, el Canal de Mutaci??n, tenemos aqu?? una de las definiciones m??s poderosas de cuantas se dan en la configuraci??n de una cruz de encarnaci??n. Esta es una cruz profundamente dispuesta a mutar, por lo que tambi??n puede ser muy deprimente. ', 'El canal 3/60, que es el formato de energ??a individual para la mutaci??n, lleva grabada la m??s profunda de las melancol??as en su bioqu??mica. No es de extra??ar, entonces, que digamos que la Cruz de las Leyes conlleva un potencial tremendo para experimentar las depresiones m??s profundas. Como es tambi??n el formato de energ??a para el proceso creativo, esta cruz nos muestra que la creaci??n de leyes y la ley en s?? misma son en esencia una forma de arte. A trav??s del canal 3/60 tenemos la capacidad de establecer leyes que mutan, leyes que provocan cambios din??micos de mayor importancia en la manera que tenemos de relacionarnos y de integrarnos en las sociedades de las que formamos parte. No obstante, la irrevocable presencia de la puerta 60 hace que los l??mites sean inherentes a la ley y a las normas.  ', 'Una criatura que naciera con esta cruz y que tuviera que crecer sin saber cu??les son las normas que debe seguir se sentir??a realmente molesta. Esa criatura espera que alguien le ense??e las normas, las necesita, y en alg??n lugar profundamente dentro de s?? mismo lo sabe. No hay ninguna manera de que podamos funcionar, tal y como lo hacemos todos en nuestra mara??a tribal de relaciones, si no tenemos normas a las que atenernos para mantener un cierto orden. De modo que estas cuatro variaciones de la Cruz de las Leyes son las que - a trav??s de cada cuarto - siempre establecer??n la necesidad de que exista la ley. En este Cuarto de la Iniciaci??n, la Cruz de Angulo Derecho de las Leyes est?? en la puerta 3, y est?? directamente relacionada con la necesidad de satisfacer las demandas de la mutaci??n. Por eso la puerta 3 se llama ???La Dificultad Inicial???, porque a trav??s de ella cobra forma la mutaci??n. Algo nuevo tiene que nacer, y es aqu?? donde tenemos la capacidad de establecer las primeras leyes.']
//     },
//     {
//         cruz: 'Cruz Angulo Derecho de las Leyes 3',
//         img: imagesCruzes['leyes.jpg'].default,
//         texto: ['La puerta 50 se llama ??el Caldero??, en referencia al puchero donde se cocina. Todo lo relacionado con la tribu se enra??za en ??ltima instancia en algo relacionado con la comida, absolutamente todo. Aqu?? llegamos a la tercera variaci??n de la Cruz de Angulo Derecho de las Leyes. El Sol de Personalidad est?? en la puerta 50, que literalmente le da su nombre a esta cruz, ya que esta es la puerta de la legislaci??n y de los valores. Aqu?? es donde se establecen las normas para la tribu.  ', 'Las normas de la tribu son elaboradas en base a la necesidad de regular dos cosas: una es la comida y la otra es el sexo. La funci??n de la puerta 50 consiste en establecer cu??les son las normas que hay que seguir en la tribu en torno al sexo y a la comida; esa es su labor m??s fundamental. Las leyes de Mois??s, que son un ejemplo cl??sico de las primeras leyes, trataban muy espec??ficamente de estos dos temas. Las normas de la comida no se refieren ??nicamente al hecho de alimentarse, sino que incluyen directrices muy claras acerca de lo que puedes comer y lo que no. No se te ocurra ir a Bagdad y pedir carne de cerdo en un restaurante, porque no te har??s ning??n favor a ti mismo, y puedes acabar metido en un buen l??o. La realidad es que las normas tribales son las que dictan lo que podemos comer, lo que debemos comer, y qui??n debe tener por derecho acceso a la comida. En otros tiempos, si eras var??n, no pod??as permitirte el lujo de dormirte entre los matorrales mientras los dem??s varones sal??an a cazar, porque corr??as el riesgo de quedarte sin cenar. Ten??an normas muy estrictas en cuanto a la manera de satisfacer las necesidades del cuerpo. La puerta 50 es la que dictamina el tipo de comida que podemos ingerir y el que no, cu??ndo la podemos ingerir y cu??ndo no, etc.  ', 'Las normas que regulan el sexo tambi??n son establecidas a trav??s de esta puerta, algunas de ellas de una verdadera crueldad humana. Por ejemplo, las diferentes formas de circuncisi??n que se practican, tanto sobre hombre como sobre mujeres. Ese es un ejemplo cl??sico de la brutalidad de algunas de las normas que nacen de la manera de hacer de la puerta 50. En todo caso, tiene el control sobre esas cuestiones y ya est??. La puerta 50 es la que establece cu??ndo est??n permitidas las relaciones sexuales y cu??ndo no, con qui??n y con qui??n no, en qu?? circunstancias y en cu??les no, y todo as?? seguido. Al fin y al cabo, esta es la puerta del legislador tribal.  ', 'Con el Sol en la puerta 50, la personalidad tiene el foco puesto en el control del entorno tribal. Si vienes al mundo con la Cruz de la Leyes, y tienes el Sol de Personalidad en la puerta 50, entonces has nacido para establecer normas por las que regirte en la vida. Establecer??s tambi??n las normas que deben seguir quienes est??n contigo, o no querr??s tener nada que ver con ellos. Mientras las normas est??n claras, y todo el mundo se comporte de acuerdo a ellas, esta es la gente m??s feliz del mundo. Faltar??a m??s... ', 'En cada cuarto nos encontramos con uno de los brazos de esta Cruz de las Leyes, que nos provee de una nueva variaci??n del conjunto de normas y valores por los que debemos regir nuestras vidas. No porque sean conceptos filos??ficos, sino porque es algo enraizado en nuestro c??digo gen??tico. Es decir, que es algo que simplemente est?? ah??. La fuerza tribal de estas personas es la que tiene la responsabilidad de establecer esas normas. No olvides que la evoluci??n de la humanidad entera est??, en ??ltima instancia, en manos de las mec??nicas de la tribu. No est?? en ninguna otra parte. Los individuos no dejan de mutar en todo el tiempo. La gente colectiva est?? siempre abierta al cambio y a lo que parece nuevo. El ??nico modelo cerrado que puede servir de piedra angular de la humanidad es el que nos ofrece la tribu, que sigue rigiendo su vida por toda esta vieja programaci??n instintiva. La mayor??a de la poblaci??n humana del planeta vive todav??a con la densidad del modelo tribal. Los que estamos integrados en las formas de vida de la cultura occidental tendemos a olvidar lo profundamente arraigada que est?? todav??a la vida tribal en la inmensa mayor??a de seres humanos que pueblan este planeta.', 'Hay una transici??n que tiene lugar entre los legisladores de ??ngulo derecho y los otros dos legisladores que vienen a continuaci??n. Los legisladores de ??ngulo derecho no tienen una idea demasiado precisa de las consecuencias que tienen las normas que establecen. El legislador que decidi?? que se hiciera la circuncisi??n a las mujeres deber??a saber lo que es no disponer de nada m??s que de un cl??toris - deber??a saber c??mo se siente una mujer cuando se lo rebanan. Es muy probable que de ese modo esa ley nunca llegar a establecerse, a menos que se tratase de gente verdaderamente pervertida. O sea, que cuando tratamos con la legislaci??n que proviene del ??ngulo derecho, debemos tener en cuenta que se trata del proceso interno de un individuo, al que simplemente le gusta hacer normas. Es gente a la que le gusta hacer normas, y comprobar que hay otros que las siguen, pero sus normas nunca est??n hechas para que otros tengan que seguirlas.  ']
//     },
//     {
//         cruz: 'Cruz Angulo Derecho de lo Inesperado 2',
//         img: imagesCruzes['inesperado.jpg'].default,
//         texto: ['Canal del Alpha, que conlleva un dise??o de liderazgo. Este es el comienzo de un profundo desaf??o a los reyes y al liderazgo tradicional de la tribu, porque hay suficiente poder inherente en esta posici??n para atraer al colectivo y llevarlo en una direcci??n en la que puede seleccionar a sus l??deres.  ', 'El liderazgo de las personas de esta cruz se manifiesta inesperadamente.', 'A medida que vayamos avanzando, veremos que hay tambi??n otro tipo de l??deres, pero aqu?? tratamos con una forma de liderazgo que emerge de la nada. Un d??a es alguien que pasa completamente inadvertido en el mapa humano, y al d??a siguiente pasa a ser uno de los protagonistas. De modo que esta es gente que est?? dise??ada para proclamar su poder y ejercer su influencia en el momento m??s inesperado, y de la m??s inesperada de las maneras. Como cuando Lindon Johnson lleg?? a presidente de los Estados Unidos - eso es lo inesperado. De repente, te ascienden de rango cuando menos te lo esperas, y s??bitamente te otorgan una autoridad o una capacidad de influir en la vida de otros que no ten??as antes. Eso es algo que est?? ocurriendo todo el tiempo.  ', 'Esta cruz puede venir acompa??ada de profundos problemas psicol??gicos, porque mucha de la gente que nace con ella hereda de padres que mueren siendo j??venes. Ni quiero ser m??rbido, pero esa es una de las cosas de alcanzar posiciones de influencia, de inesperadamente tener que asumir y manejar el poder, independientemente de que uno est?? suficientemente preparado para ello o no.  ', 'A trav??s de todo el ??ngulo derecho de esta cruz, tenemos que tratar con el asentamiento potencial de la Tierra de Dise??o en la puerta 28. A medida que uno avanza en ese proceso, la necesidad de asumir riesgos se convierte en un dilema cada vez m??s profundo.  ', 'De la Cruz de lo Inesperado nacen tambi??n los descubrimientos. Es decir, que esta es gente que ha de ser descubierta por otros como l??deres. Si vieras o te encontraras con uno de ellos un d??a cualquiera por la calle, no pensar??as nunca que se trata de un l??der, pero en el momento de lo inesperado - como en las pel??culas cl??sicas de Hollywood, en las que un avi??n est?? a punto de estrellarse, o el personaje menos imaginable acaba siendo el h??roe de la pel??cula - sabe c??mo hacerse con el poder y la influencia para conducir y guiar a todos los dem??s. Dicho con otras palabras, solamente esos momentos inesperados pueden propiciar una posibilidad real de hacer emerger el verdadero liderazgo en estos seres humanos.  ']
//     },
//     {
//         cruz: 'Cruz Angulo Derecho de lo Inesperado 3',
//         img: imagesCruzes['inesperado.jpg'].default,
//         texto: ['La puerta 28 tiene una funci??n verdaderamente inusual en la vida. Una de las primeras que se aprenden en el Dise??o Humano cuando comienzas a examinar los diferentes circuitos son los llamados Canales de Integraci??n. Es decir, el sistema que se crea a partir de la interacci??n entre las puertas 20, 10, 57 y 34. Los Canales de Integraci??n representan los aspectos m??s individualistas y con una orientaci??n m??s orientada hacia la supervivencia de todos los circuitos del Cuerpo Gr??fico del Rave. La puerta 28 es la que mayor impacto tiene sobre lo que ocurre en el ??mbito de la integraci??n. Cuando examinamos los temas de la custodia en el dise??o de la sexualidad humana, vemos que el canal 20/57 est?? dise??ado para cuidar ??nicamente de s?? mismo, y nada m??s. Esa es su ??nica responsabilidad, cuidar de s?? mismo. Sin embargo, en el momento en que aparecen las puertas 28 y/o 38, particularmente la 28, el canal 20/57 ya no puede seguir ocup??ndose solamente de s?? mismo. Ya no es posible seguir centrando todo su inter??s en su propia persona, y a??n cuando le provoque una cierta rabia, comenzar?? tambi??n a mostrar su inter??s por los asuntos de la otra persona.  ', 'Con el Sol en la puerta 28 llegamos a la tercera variaci??n de la Cruz de Angulo Derecho de lo Inesperado. Lo inesperado trae consigo cuatro temas b??sicos. Trae lo inesperado en s?? mismo, en el sentido de una nueva experiencia que aparece de la nada. Lo inesperado te puede llevar de repente a ocupar posiciones de influencia en la sociedad. Pero lo inesperado tambi??n puede hacer su aparici??n a trav??s de lo que la gente de la puerta 28 tiene que cuidar y asumir responsabilidad en su vida.  ', 'A trav??s de la puerta 28, lo inesperado irrumpe a partir de los riesgos fundamentales que se tienen que asumir, los cuales est??n en la naturaleza de esta puerta. En la puerta 28 albergamos el miedo a la muerte, y tambi??n la necesidad de llegar a saber si hay en la vida algo que tenga alg??n valor real. Si naces con el Sol de Personalidad en la puerta 28, no hay nada m??s importante para ti en la vida que conocer el valor inherente en el hecho de vivir la tuya. Si no le puedes reconocer valor a tu vida, entonces se acaba convirtiendo en una lucha.  ', 'La puerta 28 est?? se??alando hacia la 38, cuyo nombre es ???la Oposici??n??? y representa la puerta del luchador. La puerta 28 est?? buscando una buena lucha. "Busquemos algo por lo que valga la pena luchar", se dice. Bien est?? que luchen si esa es su naturaleza, pero, por favor, que sea una lucha cargada de valor y de prop??sito. La gente que nace con esta Cruz de lo Inesperado suele acabar metida en el fuego cruzado de alguna lucha; ese es el tema de su vida. Si sabe rendirse a la lucha, entonces lo inesperado siempre puede esconder posibilidades con las que no contaban, ya que esa es la magia inherente en esta configuraci??n. Ocupados siempre en sus propios asuntos, la sorpresa o lo que sea puede surgir en cualquier momento. ', 'Claro que esa es una vida interesante. Esta no es la configuraci??n de una vida apagada y sin brillo']
//     },
//     {
//         cruz: 'Cruz Angulo Derecho de los Cuatro Caminos 2',
//         img: imagesCruzes['cuatrocaminos.jpg'].default,
//         texto: ['Esta segunda variante de la Cruz de los Cuatro Caminos, con el Sol de Personalidad en la puerta 33, nos lleva al final de este Cuarto de la Civilizaci??n. Tenemos aqu?? la ??nica puerta de la Cruz de los Cuatro Caminos que est?? ubicada en el Centro de la Garganta. Este es el camino de la manifestaci??n. Simult??neamente, la puerta 33 - La Retirada - es una puerta de mucha privacidad, secretos y retraimiento. Tenemos aqu?? la necesidad de tener un espacio o santuario inviolable para algo muy especial. Hemos ido atravesando este Cuarto de la Civilizaci??n, y hay algo verdaderamente llamativo al llegar a este punto en el que nos encontramos aqu??. Y es que la civilizaci??n comienza por disponer de un espacio separado de los dem??s - ah?? es d??nde comienza. La civilizaci??n comienza por la necesidad de disponer de esa privacidad.  ', 'Esa privacidad no tiene por qu?? limitarse al ??mbito de lo personal. Es un tipo de privacidad que tambi??n puede decir: "voy a cobijar a mi familia, o a quien corresponda en cada caso". Pero comienza por ese confinamiento, y por la capacidad de recogerse en la inviolabilidad del propio santuario. La posibilidad de disponer de nuestro propio espacio es uno de los beneficios m??s importantes que nos ha tra??do la civilizaci??n. Aqu?? tenemos la demanda y, consiguientemente, tambi??n la puesta en marcha de todo eso.  ', 'Pero eso tambi??n significa algo m??s. Significa que es preciso disponer de un territorio propio, lo que se traduce en algo con muchas implicaciones. La posici??n de la Tierra en la puerta 19 nos habla de este tema, ya que en el mundo mam??fero esta es la puerta m??s territorial de todas. Tenemos aqu?? el lugar donde el propio territorio se establece a partir de la necesidad de una morada f??sica para el cuerpo - disponer de una casa propia, de unas tierras propias - en las que, en ese sentido, poder sentirnos libres. Esta forma de retirada no es simplemente la que usamos en el contexto del an??lisis del Dise??o Humano, donde la mencionamos siempre como una puerta impregnada de secretos y con la necesidad de disponer de una cierta privacidad en su vida. Aqu?? hablamos m??s bien del tipo de retirada que convierte la privacidad en algo real y viable. No hay privacidad posible, a menos que dispongas de un lugar propio al que poder ir cada vez que lo necesitas.', 'Hace ya catorce a??os que Ra viene dici??ndole a la gente que duerma en su propia habitaci??n y en su propia cama. Nadie se imagina la tremenda importancia que esto tiene. Es parte del proceso que hunde sus ra??ces en esta puerta. Aqu?? se nos revela la importancia y la necesidad de disponer de un espacio propio, de un santuario, en el que poder resguardarnos. Sabemos, a partir de los trabajos realizados con el Rave Durmiente, que tener a alguien en el aura mientras est??s dormido distorsiona profundamente tu sue??o y tu descanso, porque dejas de funcionar de acuerdo a lo que es natural en ti y procesas el estado on??rico de tu vida en un estado de alteraci??n que atenta contra tu natura. De ah?? que nazca en esta puerta esa necesidad natural en los de nuestra especie de disponer de un espacio propio.  ', 'Pero hay algo m??s que tambi??n comienza aqu??, y es que aqu?? es donde comenzamos a separarnos del contacto directo con el cielo. Los arquitectos fueron los primeros villanos, ya que pusieron un tejado sobre nuestras cabezas. Si te diriges a alguien en una ciudad, y le preguntas: "??Cu??ndo ser?? la pr??xima luna llena?", ver??s que la mayor??a no se hab??a percatado siquiera de que la Luna est?? ah??. No llegan a fijarse en si est?? o no est?? la Luna. Es decir, que al mismo tiempo que comenzamos a disponer de un espacio privado tras el que poder resguardarnos, comenzamos tambi??n a separarnos de la naturaleza. Aqu?? comenzamos a vivir con la ilusi??n de que ya no somos animales, y con la creencia de que - de alguna manera - somos civilizados y diferentes a ellos, y por ah?? seguido.   ']
//     },
//     {
//         cruz: 'Cruz Angulo Derecho de los Cuatro Caminos 4',
//         img: imagesCruzes['cuatrocaminos.jpg'].default,
//         texto: ['Llegamos al ??ltimo hexagrama y con ello a la cuarta variante de la Cruz de Angulo Derecho de los Cuatro Caminos. Aqu?? tenemos el camino del ??Acercamiento??, que es el camino de la necesidad. Siendo como es un camino en el que todos somos los necesitados, nos dice algo muy b??sico acerca de la humanidad; que necesitamos alimento, que necesitamos unos principios emocionales de acuerdo a los que vivir y compartir nuestras vidas, y que necesitamos a Dios, es decir, que necesitamos algo que sea capaz de ??tocarnos?? en un nivel espiritual. Todos estos temas est??n enraizados en la puerta 19, que es una puerta de adrenalina tribal. Debido al hecho de emerger del sistema adrenal, sabemos a ciencia cierta que ir?? siempre acompa??ado de las presiones que identificamos con el estr??s. ', 'Este es el m??s estresante de los cuatro caminos, y el estr??s m??s profundo que experimentan los nacidos con el Sol en la puerta 19 en el mundo moderno est?? relacionado con la necesidad de acceder a suficiente alimento. Los que tenemos alimentos en abundancia seguimos representando una minor??a en este mundo. Esta es una cuesti??n de m??xima importancia para al menos la mitad de la poblaci??n humana que habita en este planeta. O sea, que estamos tratando aqu?? de un tema muy din??mico, y, consecuentemente, eso significa que aqu?? se acumula f??cilmente mucha presi??n.  ', 'Algunas de las m??s salvajes revoluciones que se est??n dando en el entorno geopol??tico moderno son de naturaleza religiosa, llevadas a cabo por fundamentalistas revolucionarios que abastecen a la gente de comida. Hace algunos a??os, eligieron en Ankara, Turqu??a, un alcalde socialista, algo nunca visto hasta entonces por aquellos lares. Con esa elecci??n, ten??an a alguien que simplemente trataba de asegurarse que la gente tuviera comida suficiente. Sin embargo, esa elecci??n provoc?? unas tensiones sociales enormes, porque el alcalde electo formaba parte de un partido religioso. Debido a eso, le destituyeron inmediatamente y le echaron de la oficina, porque el partido religioso en el que estaba integrado estaba prohibido.  ', 'Hay una conexi??n muy profunda en el canal 19/49 con nuestra vida espiritual y religiosa. De ah?? que el mundo espiritual de los seres humanos tenga una conexi??n tan profunda con el abastecimiento de la comida. Debemos ser muy precavidos con nuestras necesidades, para no acabar en situaciones donde todos estemos dominados por teocracias que nos dicen qu?? y cu??ndo debemos comer, sino que simplemente nos prometan algo de comer a todos. O sea, que las revoluciones que hay en marcha ahora mismo en el mundo se siguen nutriendo de la puerta 19. En la puerta 49 - la Revoluci??n - reside la sensibilidad que siempre busca la puerta 19, dispuesta siempre a aceptar, o no, la suerte que le haya tocado tener en este mundo. La realidad es que una de las fuerzas que m??s poderosamente la pueden motivar para convertirse en revolucionaria son fuerzas espirituales. Son fuerzas que le dicen: "Tienes el derecho divino de esto y lo otro y lo de m??s all??, y s??lo nosotros sabremos c??mo protegerte y asegurar que no te falte de nada." Este es uno de los temas m??s din??micos de este mundo, la capacidad de proveer suficiente comida para llenar los refrigeradores de todos, y de crear suficientes refrigeradores, electricidad, infraestructuras y todo lo necesario para asegurar que la gente tiene acceso a los recursos m??s b??sicos, como es el alimento. Mientras no sepamos resolver este problema, este es un camino sometido a enormes presiones.  ', 'Con la puerta 33 todos necesitamos construir una casa para disponer del cobijo que nos ofrece. El primer paso para alcanzar libertad individual y disfrutar de los derechos humanos individuales es disponer de tu propio territorio, de tu propio espacio vital. La puerta 19, sin embargo, es profundamente territorial. El camino para trabajar con otros, y as?? abastecernos de los bienes materiales, lo hemos desarrollado a trav??s de la puerta 44. Es cierto que a lo largo de los ??ltimos 400 o 500 a??os hemos visto que el conocimiento es, por s?? mismo, algo en lo que nos podemos apoyar. Vivimos ahora en un tiempo en el que la propiedad intelectual tiene un valor real, y un ser humano con una buena formaci??n y educaci??n es m??s valorado de lo que nunca lo fue en toda la historia de la humanidad. De modo que esas son cosas con las que estamos aprendiendo a manejarnos bastante bien.  ', 'El verdadero problema lo tenemos en la puerta 19. La puerta 19 trata la cuesti??n b??sica de la comida, y mientras no haya comida suficiente para todos no seremos capaces de dar nuevos pasos adelante. Simplemente no lo seremos. Est?? muy bien que yo os diga que vamos a tener un descenso considerable de la poblaci??n humana, aunque no sea agradable para aquellos que no lograr??n sobrevivir, aquellos que tienen que morir para que el resto salga adelante. De buen seguro que ser?? m??s f??cil abastecer a una poblaci??n de 3 billones de personas en lugar de 12 billones, que es hacia donde nos dirigimos en este momento en base a la documentaci??n que hay al respecto. M??s tarde o m??s temprano, ese cambio llegar?? y nos ayudar?? a manejar esta cuesti??n tan b??sica que plantea la puerta 19.  ', 'En su nivel tribal m??s profundo, la puerta 19 trata del sacrificio y de la matanza de animales. Eso es algo que va a tener que dejar de hacerse, porque est?? destruyendo la productividad y la fertilidad de las tierras. Es algo que est?? agotando recursos acu??feros muy valiosos en todo el mundo, para dar satisfacci??n ??nicamente a un porcentaje muy bajo de seres humanos. Tenemos que encontrar una manera de satisfacer nuestras necesidades nutritivas sin tener que matar animales, porque cuando llegue el cambio, nos llevaremos con nosotros el esp??ritu de la criatura. Nos han servido bien dentro del programa evolutivo. Esto no tiene nada que ver con moralidad alguna, sino con la dieta y con la salud planetaria. Se est??n haciendo experimentos en el campo de la gen??tica, y se est??n buscando sistemas de manipulaci??n que aumenten la producci??n y distribuci??n de las prote??nas. En el futuro seremos capaces de criar nuestra propia carne, pero no la haremos crecer tal y como lo hacemos ahora. Hoy en d??a la criamos a trav??s de la vida de otro ser, a trav??s de una vida provista de un Cristal de Personalidad. En el futuro, seremos capaces de criar gen??ticamente todo lo que necesitamos a trav??s de formas de vida que solamente est??n provistas de un Cristal de Dise??o, lo cual es algo enteramente distinto. Esa ser?? una de las mayores transiciones que tendr?? lugar dentro de unos 300 o 400 a??os. O sea, que no es algo que est?? a la vuelta de la esquina, pero es importante que sepamos reconocer la importancia de una transici??n como la que estamos comentando aqu??. Es algo relacionado con los cristales de personalidad de los mam??feros, y es que, si su esp??ritu ha de vivir en nosotros, dejar de matarlos parece que sea una inmejorable idea. ']
//     },
//     {
//         cruz: 'Cruz Angulo Derecho de los Cuatro Caminos 1',
//         img: imagesCruzes['cuatrocaminos.jpg'].default,
//         texto: ['Los cuatro brazos que conforman la Cruz de Angulo Derecho de los Cuatro Caminos son de hecho los nombres de los cuatro caminos que puedes seguir en tu vida: el Retorno (24), Ir al Encuentro (44), el Acercamiento (19) y la Retirada (33). La dimensi??n mental de este cuarto queda establecida aqu?? por la direcci??n del camino que sigues, o, lo que es lo mismo, por el posicionamiento de la puerta 24 en el Centro Ajna. Esta es la puerta de la racionalizaci??n individual, y es una puerta en la que la ac??stica mental emerge de manera muy ruidosa en tu vida interior. En esta puerta - el Retorno - los conceptos giran una y otra vez para regresar siempre al mismo lugar o punto de partida.  ', 'Esto nos dice algo acerca del comienzo del proceso del maya y del proceso mental en nuestra especie, y es que iba a ser un proceso marcado por una incre??ble monoton??a en esos temas, repasando una y otra vez las mismas respuestas a las mismas preguntas de siempre. Hace poco que Ra estuvo en Nueva York, donde un joven amigo provisto de una grabadora le hizo algunas preguntas concernientes a la tesis que estaba elaborando. Eran las mismas est??pidas preguntas de siempre: "??Qu?? es Dios? ??D??nde est?? Dios? ??Qui??n es Dios?" Dice Ra que a ??l todo eso no le preocupa lo m??s m??nimo, ya que se trata de la misma basura mental de siempre. De modo que llegados a este hexagrama - el Retorno - puedes hacerte una idea bastante exacta del tipo de proceso en el que estamos metidos al tener que repasarlo todo una y otra vez hasta volvernos locos ante la imposibilidad de resolver el misterio de nuestra existencia. Cu??nta gente y durante cu??nto tiempo habr?? estado hablando de las mismas cosas desde el principio de los tiempos, sin saber realmente nada de s?? mismos. Es algo que ha estado ocurriendo a lo largo de miles de a??os. Sin saber nada con certeza real - ni de qui??n eres, ni de qu?? hablas en realidad ni de c??mo funcionan las cosas - inventamos simplemente la verdad tal y como se nos antoja.', 'Durante milenios hemos tenido a personas que asent??an con la cabeza, y, sin embargo, seguimos repasando esa materia una y otra vez, porque la realidad es que nuestras estructuras mentales no acaban de funcionar a la hora de revelarnos las mec??nicas del misterio existencial de los seres humanos. Pero nadie parece reparar en ello. Nadie dice: "Oye, perdona, pero ya llevamos demasiado tiempo pisando el suelo de las mismas teor??as". As?? es como la madre naturaleza nos dispuso para participar de este maravilloso juego.  ', 'El programa evolutivo conoce que el hecho de que los humanos entramos y salimos del cuerpo. Al fin y al cabo, no somos m??s que carne. Esa es la verdad, y de ah?? tambi??n el t??rmino de ???encarnaci??n??? - entrar en la carne. Somos carne, y entramos y salimos del cuerpo a medida que el programa evolutivo nos va criando. Es cierto, ??acaso no crecemos como cualquier otro ser vivo sobre este planeta? Es preciso comprender que el tiempo lo es todo en estas cuestiones. No olvides que solamente considerando las ??rbitas de Neptuno y Plut??n podemos entender que no hay una sola vida humana capaz de durar a trav??s de un ciclo entero de estos dos planetas. Ninguna vida humana est?? capacitada para completar un ciclo entero de estos dos planetas, y por eso acabamos diciendo al morir: "Jes??s, ??qu?? ha sido todo eso?" Se debe a que ninguna vida completa realmente un ciclo, sino que simplemente entramos y salimos en funci??n del programa evolutivo de la totalidad en la cual vivimos integrados.  ', 'De manera que todo el asunto de repasar una y otra vez los mismos viejos marcos racionales de la filosof??a no tiene otro prop??sito que la simple necesidad de hacerlo as?? generaci??n tras generaci??n hasta que, finalmente, llegue la mutaci??n esperada y nos encontremos de repente con ese: "Ah, mira qu?? simple era. ??Por qu?? nos hemos pasado mil a??os d??ndole vueltas a algo tan simple?" Por la sencilla raz??n de que fuimos dise??ados para ir a trav??s de todo ese absurdo, ya que la consciencia y la forma evolucionan juntas. ! ??Es todo un proceso! De manera que este Cuarto de la Iniciaci??n, que representa el plano mental para nosotros, se acab?? por convertir en un tremendo dolor de cabeza.  ', ' Una y otra vez vas a repetir el intento de aprender a manejar el plano mental de nuestra existencia. ??No es ese el condicionamiento original que hay en cada uno de nosotros? Se trata del c??digo gen??tico de la totalidad, del cual todos somos portadores. Luego este c??digo nos atrapa en el maya de la vida de un modo en el que nunca podemos obtener la satisfacci??n de una respuesta consistente. Si no te haces cargo de los juegos de la mente..., si no logras manejarte a trav??s de sus redes..., y la realidad es que no hay m??s que una forma de hacerlo. No se trata de nada que puedas aprender. Uno simplemente tiene que dejar de conferirle autoridad interna a la propia mente. Ese es el mayor paso que uno puede dar en su vida.  ', ' A partir del momento en que dispones de una herramienta como el Dise??o Humano, puedes identificar el lugar en tu interior donde reside tu verdadera autoridad, la ??nica referencia fiable y consistente que necesitas. Si conf??as de verdad en esa fuente de autoridad interna, no importa ya cu??l sea el condicionamiento de tu mente, porque habr?? perdido definitivamente el poder que le confer??as para dirigir tu vida, lo que es bueno ya que esa no es una funci??n que le corresponda. La mente est?? aqu?? para observar y para servir de medio para comunicar y compartir con otros lo que hemos observado a trav??s de ella. Pero no est?? aqu?? para guiarnos. Hasta que eso no est?? meridianamente claro para ti, y mientras no seas capaz de vivir tu vida basado en tu verdadera autoridad interna, esta puerta 24 seguir?? martilleando tu mente hasta la muerte.  ', ' Despu??s de todo, esa y no otra es la funci??n de esta puerta. Preg??ntale si no a cualquiera que sea portador de ella en su dise??o. Es una puerta que no te deja nunca en paz hasta que no satisfagas su existencial pregunta, y si tu mente no es capaz de responderla satisfactoriamente, entonces no te dejar?? vivir en paz contigo mismo. De modo que, si le confieres autoridad interna a tu mente, entonces sufrir??s por ello toda la condena que implica tener que vivir con la obstinaci??n mental de esta puerta 24. Su condena es que la mente no puede, por s?? sola, disponer de autoridad interna para dirigir la vida del individuo - de ah?? vienen todos los quebraderos de cabeza que esta puerta es capaz de suscitar. Ten??a que estar ah?? desde el principio, y no quiero decir con esto que sea algo malo. Es simplemente algo que requiere el paso del tiempo suficiente para dar entrada a una nueva forma de conciencia.  ', 'Las inflexibles leyes de la evoluci??n nos obligaron a implicarnos profundamente en el plano mental para repasar estos conceptos hasta el infinito. Pero no debemos olvidar que ese es un proceso que est?? tocando a su fin. Con el advenimiento de ese fin de etapa y de nuestra tecnolog??a, y con la inmensidad de nuestros conocimientos actuales, comenzamos a entender el maya con una precisi??n detallada que era imposible de imaginar hasta hace muy poco tiempo. Nos estamos acercando a ese punto crucial en nuestra evoluci??n como especie. Cuando llegue realmente el momento en este planeta en que los seres humanos sepamos d??nde reside nuestra autoridad interna, y la mente haya dejado de ser la que dirige el juego, estaremos preparados para ver la inmensa transici??n que puede tener lugar. De manera que cuando el Sol de Personalidad est?? posicionado en la puerta 24 de esta Cruz de Angulo Derecho de los Cuatro Caminos, podemos ver que a trav??s de este cuarto el camino conduce a trav??s de la mente. Este es el camino de intentar resolver el plano mental de nuestra existencia; de intentar comprenderlo, de intentar conocerlo, de la profunda influencia que ejerce sobre nosotros el conocimiento.  ']
//     },
//     {
//         cruz: 'Cruz Angulo Derecho del Amor 2',
//         img: imagesCruzes['amor.jpg'].default,
//         texto: ['Llegamos ahora al segundo grupo de ocho hexagramas que integran este Cuarto de la Civilizaci??n. Recuerda que las puertas de la Cruz del Recept??culo del Amor dividen cada cuarto en dos mitades, y que esta es la segunda variante de la Cruz de Angulo Derecho del Recept??culo del Amor. En el primer cuarto tuvimos ocasi??n de verla a trav??s de su funci??n iniciadora, a trav??s de las mec??nicas del amor universal inherentes a la puerta 25. Con el Sol de Personalidad en la puerta 15, tenemos aqu?? las mec??nicas del amor a la humanidad funcionando a trav??s de esta puerta de los extremos - extremos del ritmo, quiero decir. Dentro de ese amor a la humanidad reside la habilidad de saber aceptar el espectro m??s amplio posible de todos los ritmos que convergen en el fluir m??s amplio del colectivo humano.  ', 'Esta es una cruz cuyos intereses giran enteramente acerca del futuro, porque la puerta 15 est?? integrada en el proceso l??gico. El funcionamiento de la l??gica est?? basado en el experimento con un patr??n en el presente, a partir de cuyos resultados se proyecta hacia el futuro. Las personas portadoras de esta cruz siempre est??n intentando entender la manera de organizar mejor las cosas, de modo que se pueda compartir m??s amor. No obstante, ese mismo amor a la humanidad puede convertirse en un profundo desagrado con la humanidad. En todo caso, la verdadera direcci??n para estas fuerzas reside en el inter??s y en lo concernidas que son capaces de mostrarse en el trato con  capazidad de experimentar por sus semejantes. Por cierto, que el inter??s que experimentan no depende de que ellos as?? lo quieran. ', 'Como se trata de una cruz de ??ngulo derecho, sabemos que ese amor no va dirigido a la persona portadora de esta cruz. Oh s??, puede que ocasionalmente tenga acceso a ??l, pero no va dirigido a ella. Con su Sol de Personalidad en la puerta 15 - La Modestia - simplemente no dispone de ninguna otra forma de ver las cosas, ya que su destino personal pasa por custodiar a la humanidad, por cuidar de su nivel de organizaci??n, y por la necesidad de atraer a todos hacia un flujo apropiado y un orden de las cosas que sea natural.  ']
//     },
//     {
//         cruz: 'Cruz Angulo Derecho del Contagio 2',
//         img: imagesCruzes['contagio.jpg'].default,
//         texto: ['Al entrar en el campo de la puerta 8, entramos en contacto tambi??n con nuestra necesidad de realizar una contribuci??n a trav??s de la expresi??n de la individualidad. El modo en que evoluciona la naturaleza de la civilizaci??n no viene solamente dado por la capacidad de coordinar los esfuerzos de la humanidad o de la sociedad, sino tambi??n a trav??s de saber mantener espacios abiertos a la mutaci??n, de modo que la estructura de la civilizaci??n sea capaz de evolucionar m??s all?? de s?? misma. Desde el momento en que se incluye aqu?? la expresi??n de la individualidad, el eje de las puertas 8/14, es importante que sepas ver que esta Cruz de Angulo Derecho del Contagio gira enteramente en torno a la necesidad de contribuir individualmente a la seguridad y a la abundancia de los recursos', 'La contribuci??n est?? relacionada con la capacidad de ser un ejemplo para otros asumiendo la responsabilidad individual de ese proceso - muy distinta a las responsabilidades colectivas o tribales, y muy distinta tambi??n a la direcci??n de reunir a la tribu en torno a unos principios que ve??amos en el primer cuarto. Lo que tenemos aqu?? es algo muy diferente. Aqu?? se trata de ser un ejemplo a imitar por otros, porque se es un ejemplo de algo que puede llevar a los dem??s a comprometerse con esa direcci??n individual. Si vives, por ejemplo, en un entorno comunitario, el individuo es el ??nico que estar?? dispuesto a arriesgarse a hacer las cosas de un modo distinto al habitual, de contribuir a la comunidad de un modo diferente al del resto, lo que puede desembocar luego en la aceptaci??n por parte de la comunidad de sus propuestas, tanto si se trata de un cambio en la arquitectura del lugar o de un cambio en el modo en que est?? estructurada la sociedad.  ', 'Debido a los ingredientes que la componen, esta Cruz del Contagio nunca deja del todo atr??s la energ??a del deseo y de todas las expectativas que el deseo es capaz de suscitar. Al comienzo mismo de esta cruz tenemos la l??nea 14.1, que se llama ???el dinero no lo es todo???. Esto es un ejemplo de la dedicaci??n a los recursos con el tipo de esp??ritu de los pioneros, donde la comunidad entera se reun??a para dedicar su tiempo a la construcci??n de un cobertizo para alg??n vecino. Pero alguien tiene que servir de ejemplo, alguien tiene que poner en marcha ese proceso, para que alguna vez llegue a producirse. Todo lo que emerge de esta Cruz de Angulo Derecho del Contagio est?? dise??ado para causar un profundo impacto sobre todos los dem??s. Esta cruz tiene un poder natural para influir sobre sus semejantes. Su mismo nombre y estructura, al fin y al cabo, denota su capacidad de contagiar sus sentimientos a los dem??s. De modo que esta contribuci??n individual como un ejemplo a seguir se convierte en algo muy importante que representa siempre un paso adelante en nuestro af??n civilizador. Si todos actuaran de manera ejemplar, entonces necesitar??amos menos fuerza para que todos mantengan fielmente el cumplimiento de las normas.  ']
//     },
//     {
//         cruz: 'Cruz Angulo Derecho del Contagio 4',
//         img: imagesCruzes['contagio.jpg'].default,
//         texto: ['Me gusta la imagen tradicional del carro, a trav??s de la que ilustran en el I-Ching la puerta 14. Ya que se trata de la acumulaci??n de poder y riquezas, si has nacido con la puerta 14 es como si hubieras nacido con una herencia. Se te da energ??a en abundancia, y un tipo de energ??a que deber??a ser capaz de satisfacer las necesidades materiales de tu vida.  ', 'Esa es la raz??n de que la primera de las l??neas de este hexagrama tenga por nombre ??el dinero no lo es todo??, y es porque el dinero es algo que ya est?? garantizado, y las posibilidades materiales en la vida alcanzan su m??ximo esplendor trat??ndolas desde la puerta 14. Recuerda que la energ??a de la puerta 14 es la que sostiene nuestra direcci??n en la vida. Es parte del Canal del Comp??s, que conlleva un dise??o de ser el que custodia las llaves de la direcci??n. Con el Sol de Personalidad en la puerta 14 nos encontramos con la cuarta variaci??n de la Cruz de Angulo Derecho del Contagio. Aqu?? todo gira en torno a encontrar la direcci??n correcta para esa energ??a, de encontrar los lugares a los que dirigirse para ir abri??ndole camino a la direcci??n que se potencia a trav??s de ella.  ', 'El Sol de Dise??o en la puerta 29 dice: "Vale, yo te abastecer?? de combustible para la direcci??n. S??, de acuerdo, te dar?? toda mi energ??a." La ??nica cuesti??n en eso es que ese combustible no puede ser invertido en cualquier cosa, porque la gente simplemente querr?? hacerse con ??l. Siempre que veas a alguien con la Cruz del Contagio, y con el Sol de Personalidad en la puerta 14, ver??s que hay en su vida todo tipo de gente que intenta constantemente hacer que se comprometa con ellos, que les haga alguna promesa, y que les provean de esa energ??a capaz de traerles los beneficios de esa riqueza potencial que hay en la puerta 14.  En el ??ngulo derecho, las versiones de perfil 1/4 y 2/4 implican la l??nea 30.4 que se llama ??Consumido??. Una de las cuestiones a tener en cuenta acerca de la Cruz del Contagio es que es portadora del potencial para consumirse como uno de sus temas dominantes, debido al compromiso ciego que es capaz de establecer con las cosas. Ese estar ??consumido?? no se refiere a la persona en s?? misma - que al consumirse vaya a desvanecerse y a caer muerta en el instante siguiente - sino que lo que se ??consume?? es el compromiso establecido con una experiencia, una persona, o una carrera profesional que tiene que dejar atr??s. Al dejarlas atr??s, esas cosas le dan la sensaci??n de fracaso, de algo incompleto, o de haber malgastado su energ??a con ese compromiso.  ', 'Con el Sol en la puerta 14, el tema es mantenerse enfocado en encontrar la direcci??n correcta. Eso es lo que estas personas m??s est??n esperando en la vida, esperan por esos momentos en los que hacer un compromiso que les permita avanzar en la vida en la direcci??n adecuada. Con la direcci??n adecuada, viene tambi??n el combustible correcto, y eso se traduce en la llegada del ??xito material a sus vidas.  ', 'Esta es una puerta capaz de enriquecernos a un nivel muy profundo. Yo pas?? por un periodo de tres a??os y medio en los a??os 90, en los que Plut??n activaba la puerta 14 en mi dise??o, y la conectaba a la puerta 2 donde tengo mi Nodo Norte. Eso me ense???? el enorme poder que hay en esta puerta, los procesos que potencia con su energ??a, y todas las oportunidades y riquezas que pueden venir con ella. Al fin y al cabo, el ??xito que el Dise??o Humano tiene hoy naci?? durante esa etapa en la que Plut??n estaba impulsando mi energ??a desde la puerta 14, d??ndome el combustible necesario para desplegar los fundamentos de este conocimiento en una cierta direcci??n. O sea, que la puerta 14 es capaz de abastecernos de muchas cosas. No obstante, da igual qu?? es lo que estemos viendo, ya que siempre es una cuesti??n de entrar correctamente en contacto con lo que sea.  ', 'Los portadores de la Cruz del Contagio tienen la capacidad de reunir a la gente y acumular la energ??a para la direcci??n de la que disponen. Pueden, por ejemplo, lograr que la gente invierta sus recursos materiales en la direcci??n que proponen, y eso no es moco de pavo. Tambi??n son capaces de lograr que los dem??s se comprometan con algo. Por cierto, que, trat??ndose de seres de ??ngulo derecho, esas cosas ir??n irrumpiendo en sus vidas, las posibilidades les ir??n saliendo al camino. No es que ellos vayan a buscarlas, ya que tienden a ser personas muy absortas en cubrir sus propias necesidades materiales.  ', 'Si tienes la puerta 14 en el perfil de tu cruz de encarnaci??n, y no le prestas atenci??n a tu seguridad material - tener algo de dinero en el banco, o cualquier otro bien capaz de proporcionarte seguridad financiera - no llegar??s a sentir nunca que tienes una base estable en tu vida. Ese es uno de los temas b??sicos en la puerta 14. Si no logras establecer una cierta seguridad material, entonces esta cruz no puede funcionar bien. La misma poderosa fuente de energ??a vital que hay en la puerta 14, puede llegar a convertirse en una fuerza enormemente desestabilizadora.  ', 'No hay m??s que una posici??n para la locura en el Dise??o Humano, y esa es la que va de la l??nea 2.2 a la l??nea 14.2, definiendo la proyecci??n de todo este Canal del Comp??s. Cuando digo locura en este contexto, me estoy refiriendo al hecho de tomar una direcci??n equivocada en la vida, a invertir la energ??a vital en algo equivocado. Dicho sea de paso, que tampoco hay ninguna connotaci??n moral en esa locura. Se trata simplemente de la gente que toma una direcci??n en la vida que est?? completamente fuera de lo que es aceptable para la amplia mayor??a de nosotros.  ']
//     },
//     {
//         cruz: 'Cruz Angulo Derecho del Ed??n 1',
//         img: imagesCruzes['eden.jpg'].default,
//         texto: ['Pasamos de la puerta 22 a la 36, que es la ??ltima de las puertas posicionadas en el signo de Piscis. La puerta 36 - El Oscurecimiento de la Luz - es la puerta de las crisis, y tambi??n de la penetraci??n en lo desconocido. Es una puerta guiada por un profundo deseo de renovaci??n, una puerta de inexperiencia en busca de experiencia. De modo que estamos tratando con una puerta guiada por una poderosa fuerza experimental.  ', ' En el polo opuesto a la 36 tenemos la puerta 6, que es la verdadera responsable de lo abiertos o cerrados que nos vamos a mostrar ante otros. Lo que nos abre a la intimidad con los dem??s es el diafragma. Para comprender la complejidad de la puerta 6, es preciso conocer la relaci??n que tiene con el pH qu??mico de nuestro cuerpo f??sico. En la puerta 6 tienen su origen todas las distintas olas emocionales que atraviesan el sistema emocional. Es decir, que tanto si tratamos de las necesidades de la tribu, o de la pasi??n del individuo, como si tratamos del deseo abstracto del colectivo humano, estas tres corrientes est??n enraizadas en la complejidad de la puerta 6.  ', 'La polaridad del eje de puertas 36 y 6 significa que toda disponibilidad a la intimidad en nosotros est?? siempre condicionada por lo excitante que esa experiencia pueda llegar a ser. Esa necesidad de que la intimidad sea una experiencia excitante est?? en la ra??z de la Cruz de Angulo Derecho del Ed??n. Si no va a ser excitante, entonces no puede ser divertida.  ', 'Pero todos conocemos la historia - eres expulsado del Ed??n. O sea que si naces con esta cruz de encarnaci??n sabes que te echar??n del para??so, o, lo que es lo mismo, te ver??s obligado a adentrarte profundamente en el mundo. Ese ir adentr??ndose en el mundo alcanzar?? su punto culminante cuando progresemos hasta el final del hexagrama 36, porque llegaremos a la Cruz de Angulo Izquierdo del Plano Mundano. Un ejemplo de lo que estamos tratando en esta Cruz de Angulo Derecho del Ed??n ser??a alguien que nace con esta cruz en el seno de una familia rica que le permite disponer de todo tipo de privilegios. Pero seis meses m??s tarde hay un accidente, hay una muerte, hay una bancarrota, hay algo, y, de repente, el para??so se ha perdido', ' Una vez perdido el Ed??n, la persona tiene que salir al mundo y adentrarse en ??l para encontrar su propio camino y su conocimiento. Esto significa que la gente que viene al mundo con esta cruz puede frecuentemente tener un comienzo tr??gico e inesperado en la vida. Dicho de otra forma, estas personas tienden a encontrarse pronto con experiencias que se llevan por delante ciertas protecciones y seguridades de las que dispon??an. Esto tambi??n puede darse en un nivel psicol??gico - es algo muy com??n que la gente que nace con esta cruz vea c??mo sus ideales son machacados desde una edad muy temprana. Ahora sabes que el Ed??n se ha ido, y toda su belleza, toda su inocencia y sencillez parecen haberse perdido para siempre. Esta es una cruz de la p??rdida de la inocencia.  ', 'Fuimos echados del Ed??n y nos fue dicho: "Salid al mundo y reproduciros." Vale, ya no soy inocente, o sea que multipliqu??monos porque ah?? es a donde parece conducir todo. Uno se est?? adentrando realmente en el mundo, y va perdiendo su Gracia a medida que avanza de la puerta 22 a la 36. Ese es el chiste, pero esa es tambi??n la verdad. Una vez dejamos atr??s la Gracia, entras de lleno en el preludio de la vor??gine sexual. Entramos en contacto con todo ese tema entrando en la Cruz del Ed??n, y a partir de ah?? lo llevamos a todas partes con nosotros. Lo sacamos al exterior porque nos provoca y excita. El sexo lo significa todo para la gente que viene al mundo con esta cruz, es algo realmente importante para ella. Despu??s de todo, es lo ??nico que se les permite llevarse consigo cuando abandonan el Ed??n. El hecho de poder llevar consigo su sexualidad les permite intentar reencontrar su para??so a trav??s de ella. Por supuesto, que eso conduce a su vez a toda una serie de dilemas.  ', 'Sin embargo, hay verdadera magia en todo esto. Esta es una cruz muy compleja. En el medio de su estructura de ??ngulo derecho est??n tanto la Cruz de Cambio de la Introspecci??n (el perfil 1/4 de la cruz) como la Cruz de Base de la Proyecci??n (el perfil 2/4 de la cruz), ya que el eje Sol / Tierra de Dise??o est??n en las puertas 11.4 y 12.4. Esta es una de las polaridades m??s importantes que tenemos. La 12.4 es la l??nea del Profeta, y representa la capacidad de movilizar a los estancados o de ser la voz que predica en el desierto. Siendo la gran puerta de la articulaci??n oral, tiene la capacidad de provocar una mutaci??n en los dem??s, y de erigirse, a trav??s de esa mutaci??n, en el profeta de todos. La 11.4 es la puerta de la ense??anza por excelencia, por ejemplo, Einstein ten??a esta l??nea en su dise??o. La 11 es la puerta de las ideas, y su cuarta l??nea, la l??nea del Profesor, es una l??nea muy compleja al albergar tres activaciones planetarias distintas, que nos ofrecen tres tipos diferentes de profesores; desde el Profesor, pasando por el Sabio hasta el Gur??.  ', 'La exploraci??n de todas las posibilidades de la intimidad sexual es parte sustancial de la tem??tica de esta cruz. En ella est?? contenida tambi??n la capacidad de ense??ar lo resultados de esa exploraci??n, y de expandirlos. Al fin y al cabo, hasta que el programa evolutivo no lleg?? hasta la puerta 36 la sexualidad humana se parec??a mucho a la que practican los perros en el campo. Con la llegada del Sol a la puerta 36 encontramos la capacidad de comenzar a escribir el Kama Sutra. Aqu?? comienza un tipo de exploraci??n distinta, y con ella la habilidad para convertir la sexualidad en algo m??s grande que la mera reproducci??n - de crear, por ejemplo, la filosof??a t??ntrica y todas esas cosas que intentan elevar la sexualidad hacia un orden superior. Todo ese proceso tiene su comienzo en la Cruz de Angulo Derecho del Ed??n.  ']
//     },
//     {
//         cruz: 'Cruz Angulo Derecho del Ed??n 2',
//         img: imagesCruzes['eden.jpg'].default,
//         texto: ['Al finalizar el primer grupo de ocho hexagramas que hay en este cuarto, regresamos a la Cruz de Angulo Derecho del Ed??n. En la primera variante de esta cruz el Sol de Personalidad estaba en la puerta 36, con lo que obviamente conocimos all?? la versi??n del Ed??n abocada a las crisis emocionales - la crisis de haber mordido la manzana y de la perdici??n en el infierno a la que nos condena. All?? la naturaleza nos impulsaba a salir a vivir en el mundo, a tratar con todas estas cosas en la experiencia m??s directa posible, a vivir nuestra naturaleza sexual, a ver lo que ocurre si simplemente seguimos caminando hacia delante. Parece divertido, de hecho lo es, pero luego nacen ni??os y te obligan a ir a trabajar para poder mantenerlos. Lo cual tampoco est?? mal, porque para eso nos ha creado la madre naturaleza, para que sigamos el camino humano y trabajemos y hagamos todas las cosas que tenemos que hacer. En la segunda variante de esta cruz tenemos el Sol de Personalidad en la puerta 12, que es la puerta de la articulaci??n oral. Estamos tratando aqu?? con una de las polaridades m??s importantes y significativas - la de las puertas 12 y 11 - en la que est?? establecida la relaci??n entre nuestra capacidad de articular la voz y la apertura de nuestros centros mentales. La mutaci??n que origin?? la apertura de la mente humana aconteci?? en la puerta 11, y la mutaci??n que origin?? nuestra capacidad de articular la voz - es decir, el descenso de la laringe - aconteci?? en la puerta 12.  ', 'Esta Cruz de Angulo Derecho del Ed??n es la cruz de la serpiente, que dice: "Ven conmigo, vayamos a aprender las cosas del mundo". Eso es lo que expresa la puerta 12: "Mira qu?? buen aspecto tiene todo eso, mira todo lo que podemos hacer, las cosas con las que podemos trabajar y todo lo que hay por descubrir. Me parece fant??stico". Eso tambi??n significa que el arte es el primer resultado de haber sido expulsados del paraiso. Sin arte, nunca hubi??ramos podido llegar a civilizarnos, simplemente no es posible. El arte comienza aqu?? en la puerta 12, y comienza como sonido. Con unos comienzos marcados por la ac??stica, posiblemente su forma m??s original fuera de la de c??nticos primitivos de alguna clase. En alg??n momento, la oscilaci??n de la voz conducir??a a los rudimentos de lo que hoy llamamos cantar - es decir, al comienzo de la m??sica.  ', 'En el proceso de establecer las bases de nuestra estructura gen??tica, despu??s del poder y las posesiones materiales de la puerta 45, llega el punto de equilibrio que dice: "S??, s??, todo eso est?? muy bien, pero tambi??n est?? el arte. Tambi??n est?? la creatividad". Una de las funciones de la creatividad consiste en la capacidad de recuperar lo que se hab??a perdido. En ese sentido, la capacidad de encontrar el camino de regreso al para??so. Es una manera de encontrar todo lo que no se puede poseer en el plano material de la vida.  ', 'Pero m??s all?? de eso, la creatividad es una luz que nos gu??a. Las primeras obras pict??ricas fueron siempre aquellas relacionadas con nuestra vida espiritual. La mayor??a de ellas nos devuelven al tema b??sico de la puerta 49 y a su relaci??n con las matanzas. En las antiguas cuevas que hay en Espa??a, se pueden ver las pinturas de animales durante su caza. Con la presencia del Sol en la puerta 12, esta Cruz de Angulo Derecho del Ed??n se nos revela como arte. Cuando la veamos con el Sol en la puerta 11, veremos el comienzo de la ense??anza p??blica, de la educaci??n al alcance de todos, donde las ideas son un bien que pertenece a todo el colectivo humano. No puede vivir en la inocencia, porque la inocencia es al mismo tiempo la ignorancia. No es para eso para lo que estamos aqu??, y no son esos los dones que nos fueron dados. Estos son seres que realmente tienen que aprender a manejarse en el plano mundano de la vida cuando llegan a este mundo.  ']
//     },
//     {
//         cruz: 'Cruz Angulo Derecho del F??nix Durmiente 2',
//         img: imagesCruzes['fenixdurmiente.jpg'].default,
//         texto: ['Llegamos ahora a la segunda variante de la Cruz de Angulo Derecho del F??nix Durmiente, con el Sol de Personalidad en la puerta 20 - La Contemplaci??n - que es la ??nica puerta existencial. Con la Tierra posicionada en la puerta 34 se completa el Canal de Carisma, lo que establece una conexi??n directa entre el Centro Sacral y la Garganta. Uno de los formatos o estructuras b??sicas de los seres humanos es el de ser un Generador Manifestante.', 'La amplia mayor??a de parejas tienen en su dise??o conjunto la estructura de un Generador Manifestante, algo que se da en esta cruz por la oposici??n formada por el Sol y la Tierra, formando la estructura del m??s primario de todos los Generadores Manifestantes.  ', 'La expresi??n constante del canal 20/34 dice: "Ahora estoy muy ocupado". Eso es todo. Esta es una cruz que trata enteramente acerca de las ocupaciones y quehaceres en los que uno se implica para que todo est?? hecho. Tenemos aqu?? un verdadero cambio con respecto a la variante que encontramos en el primer cuarto, donde el Sol de Personalidad estaba posicionado en la puerta 55, y la decisi??n estaba supeditada a que las cosas tuvieran el esp??ritu adecuado antes de comprometerse con ellas. Este es un proceso muy distinto. En esta variante de la Cruz del F??nix Durmiente, estar ocupado puede no ser m??s que una forma de estar profundamente dormido. Es gente que puede estar muy ocupada sin saber necesariamente por qu?? es as??, el caso es no detenerse nunca el tiempo suficiente como para pensarlo. Saben que tienen que estar ocupados, y no tiene otra cosa que hacer que simplemente mantenerse ocupados todo el tiempo. Hasta que no tenga lugar la mutaci??n de la puerta 55, esta gente no dejar?? de estar ocupada ni un solo momento.  ', 'Se pasar??n la vida corriendo de un lado para otro, implic??ndose en actividades sexuales por no deprimirse, ya que no s??lo tres de las cuatro puertas son de naturaleza individual, sino que forman una definici??n individual que implica la expresi??n a la Garganta a trav??s de los Canales de Integraci??n. Es decir, que estamos tratando de un campo energ??tico capaz de desarrollar estados de profunda melancol??a. Esta gente est?? siempre ocupada en ser feliz o en estar triste, completamente absorbidos en ese proceso. Sin querer impregnar mis palabras de ning??n tipo de connotaci??n moral, quiero decir que esta es una cruz de encarnaci??n de profunda superficialidad. Lo que dicho de otra forma significa que la vida de esas personas no tiene tampoco ning??n otro prop??sito. Esta es una cruz que no puede funcionar apropiadamente mientras no tenga lugar la mutaci??n del Plexo Solar que le permita ser integrada en una nueva forma de conciencia. Mientras tanto, hay tantas capas y matices en el contexto de esta cruz que sus portadores son totalmente inconscientes de ellos. Aqu?? tenemos la versi??n m??s extrema de eso. Dicho sea de paso, que podemos llevarlo un paso m??s all??, porque al llegar a la yuxtaposici??n del hexagrama, nos encontramos con la m??s existencial de todas las cruces que existen.  ']
//     },
//     {
//         cruz: 'Cruz Angulo Derecho del F??nix Durmiente 1',
//         img:  imagesCruzes['fenixdurmiente.jpg'].default,
//         texto: ['Para nosotros como especie, y particularmente en la era en que nos toca vivir a nosotros, una de las puertas m??s significativas de todas es la 55, puerta llamada ??La Abundancia??. Esto se debe a que en la sexta l??nea de la puerta 55 es donde tendr?? lugar la mutaci??n que comenzar?? a transformar el Plexo Solar en la residencia de nuestra consciencia del esp??ritu, la tercera y ??ltima de las formas de consciencia humana. Esto pone de relieve la importancia que la puerta 55 tiene para nosotros. El hecho de que su naturaleza encierre una llave para la mutaci??n de la especie hace que la Cruz de Angulo Derecho que establece tenga un nombre con un importante componente m??stico. Se llama la Cruz de Angulo Derecho del F??nix Durmiente, lo que trae a la mente la imagen del ave f??nix, que renace de sus propias cenizas. La analog??a hace referencia expresa a la naturaleza misma del Centro del Plexo Solar, que es donde trabajan los grandes quemadores de nuestra maquinaria vital. El F??nix Durmiente es la mutaci??n que ha estado latente desde siempre en la puerta 55. No es algo que emerja de repente, sino que siempre ha estado ah?? como un potencial humano, esperando por el momento preciso en que el programa evolutivo lo ponga en marcha y esta cruz de encarnaci??n pueda ser transformada. De hecho, esta es la ??nica cruz de encarnaci??n cuyo funcionamiento ser?? diferente a partir del a??o 2027, y la descripci??n que hoy hacemos de ella dejar?? de tener vigencia. Esta es una cruz de encarnaci??n que se ver?? directamente transformada por la mutaci??n misma cuando ??sta se haga efectiva.  ', 'En la Cruz de Angulo Derecho del F??nix Durmiente tenemos la oposici??n y polaridad entre el Sol de Personalidad en la puerta 55 y la Tierra de Personalidad en la puerta 59. La 55 es la puerta donde los estados de ??nimo son m??s fluctuantes que en ninguna otra, ya que es la puerta donde la copa de la vida se nos antoja a veces medio llena, a veces medio vac??a. Esta es una puerta donde al despertarte un d??a cualquiera por la ma??ana te encuentras con que el mundo que ves es negro y dificultoso, o donde al despertarte por la ma??ana el mundo te parece un lugar ligero y luminoso.  ', 'La puerta 59 est?? en la base de nuestras estrategias para la intimidad sexual. Cuando despierte el f??nix durmiente, tendr?? lugar una transformaci??n en el funcionamiento de nuestra sexualidad. La transformaci??n que tendr?? lugar en el sistema emocional de los seres humanos ir?? acompa??ada de un decrecimiento muy notable de la poblaci??n humana a medida que avanza el siglo XXI. En contra de lo que dicen las estad??sticas y de las previsiones de las instituciones del mundo entero, estamos a punto de sufrir un rev??s irreversible en t??rminos de poblaci??n humana. Seg??n mis estimaciones, es previsible que la poblaci??n humana del planeta se reduzca como m??nimo en un 50 %.  ', 'Gran parte de lo que nos conducir?? a eso ser?? debido a la creciente incapacidad humana para seguir reproduci??ndose. Esta infertilidad es parte del proceso de mutaci??n que tendr?? lugar en esta cruz, cuando lleguemos al a??o 2027 y la mutaci??n se haga f??sicamente efectiva. Se trata de un proceso evolutivo, y no puede manifestarse de la noche a la ma??ana. Pasaremos por una transici??n en la que con el tiempo todos tendremos acceso a ver lo que est?? pasando. Al principio solamente estar?? activa en las criaturas reci??n nacidas, y no acabar?? de manifestarse en la carne hasta 20 o 30 a??os despu??s. A medida que estas criaturas crezcan y avancen hacia la madurez temprana, la transici??n o mutaci??n acontecida en su Plexo Solar comenzar?? a ser cada vez m??s palpable.  ', 'Hay muchos elementos implicados en la reducci??n de nuestra capacidad reproductora. Existen ya poderosas y detalladas evidencias acerca de la disminuci??n de esta capacidad en nuestra especie, por ejemplo, en la capacidad de los varones de producir esperma. Los problemas de infertilidad en algunas especies son de todos conocidos. Una casu??stica muy com??n en el paisaje m??dico americano es la solicitud de asistencia cl??nica por parte de parejas incapacitadas para engendrar hijos naturales. Es un fen??meno que alcanza cuotas epid??micas. La realidad es que la evoluci??n nos est?? llevando naturalmente a un punto en el que la reproducci??n se ver?? severamente limitada.  ', 'En el nivel inconsciente del dise??o seguimos teniendo el eje 20/34 - ese industrialismo y ocupaci??n constante que conlleva el Canal de Carisma. Esta es gente que repite siempre el mismo mantra: "Todo lo que s?? es que ahora estoy ocupado." Guiada por su industrialismo, este es gente que ha estado siempre buscando sexo, romance y amor - pero su b??squeda del amor resulta infructuosa y les hace sufrir profundamente porque el amor que buscan no es tan f??cil de encontrar como ellos creen.  ', 'Debido a los elementos impl??citos en la naturaleza de toda individualidad, es preferible que un individuo ame lo que no puede tener a que tenga lo que es incapaz de amar. Esto nos da la clave del funcionamiento tem??tico de esta cruz de encarnaci??n, que trata enteramente del amor y de la dedicaci??n constante a buscarlo en la relaci??n ??ntima con los dem??s, teniendo que sufrir por ello debido a la necesidad de buscar el sustento para el cuerpo. Es obvio que la Cruz del F??nix Durmiente no hace demasiado viviendo como un pez gordo. Existen todo tipo de problemas alimenticios asociados a la puerta 55, porque en ella se regula el estado de ??nimo que se deriva de comer o no comer. Esta es una puerta que come o no come en funci??n de su estado de ??nimo. Esta es la cruz de encarnaci??n que nos hace ??enfermar de amor??, y de ella se deriva todo el sufrimiento humano debido a la carencia de amor. Es uno de esos chistes de la vida, porque esta es la cruz que acabar?? con el amor sexual. Cuando el ave f??nix despierte, la pel??cula cambiar??, y cambiar?? tambi??n el guion de nuestras estrategias. La estrategia vital de los seres humanos sufrir?? una profunda mutaci??n.  ', 'El fen??meno que tendr?? lugar es que habr?? cada vez menos gente capaz de reproducirse por los m??todos hoy considerados naturales, y todo nacer?? a partir de la transformaci??n del sufrimiento humano debido a la incapacidad de encontrar amor. Con el tiempo ser?? algo que deje de preocuparnos, pero la transici??n en las estrategias de nuestra intimidad sexual ser?? algo que requerir?? el transcurso de varios siglos antes de que su implementaci??n sea del todo posible. Ser?? algo que requerir?? el paso de mucho tiempo, pero tambi??n es cierto que es un proceso cuya evidencia se adivina cada vez m??s cercana. Esta es la cruz que mantiene vivo ese proceso. Si eres portador de esta cruz en la encarnaci??n actual, y si sigues estando aqu?? cuando llegue el momento de la mutaci??n, tendr??s una sensibilidad muy aguda hacia la fuerza de esos j??venes que empiezan a nacer a tu alrededor. La gente que tiene esta cruz de encarnaci??n en la actualidad necesita dejarse guiar por otros. La naturaleza misma de esta cruz la convierte en algo inc??modo de llevar, y s??lo puede dejar de ser as?? cuando emerja la mutaci??n latente que alberga.  ']
//     },
//     {
//         cruz: 'Cruz Angulo Derecho del Gobierno 1',
//         img:  imagesCruzes['gobierno.jpg'].default,
//         texto: ['Con la salida del Sol de la puerta 63, y con su entrada en la puerta 22 - La Gracia - llegamos a un tipo de estructura diferente. De vuelta en el proceso individual, la puerta 22 representa nuestra capacidad de prestar atenci??n. Aqu?? aparece la capacidad del individuo para escuchar, lo que trae consigo el potencial para una mutaci??n. La fluctuaci??n correcta de su respiraci??n es fundamental para estas personas, que est??n muy abiertas a la m??sica y al arte en general. Esta es la Cruz de Angulo Derecho del Regidor, y toma nota de la usurpaci??n es anterior a este proceso. Es algo muy distinto, ya que el usurpador, al fin y al cabo, no tiene ning??n derecho, y solamente est?? cogiendo lo que no es suyo. Est?? dise??ado para tomarlo y apropiarse de ello. Pero en la Cruz de Angulo Derecho del Regidor hace su entrada el elemento de la Gracia. ', 'Esta es gente que tiene un don natural para gobernar, por lo que no necesita usurpar jam??s el territorio de nadie, sino que recibe en su vida propuestas concretas para ejercer su capacidad de control y de gobierno. La usurpaci??n es, como ve??amos, un proceso transpersonal, de ??ngulo izquierdo, pero no as?? el regidor. El regidor es de ??ngulo derecho - si las normas que impone no son buenas, pagar?? ese karma m??s tarde. Recuerda que el ??ngulo derecho est?? creando su propio karma, sembrando las cosas con las que tendr?? que tratar en el futuro.  ', 'En la primera versi??n de esta cruz, es decir, en la Cruz de Base de la Introspecci??n, la Tierra de Personalidad est?? posicionada en la puerta 47.1. La puerta 47 - La Opresi??n - es un mecanismo dif??cil de manejar porque trata enteramente de nuestra capacidad de resolver la presi??n que ejerce sobre nosotros el pasado. Esta es la puerta en la que intentamos encontrar alguna claridad y un cierto sentido a nuestro pasado. La primera l??nea es muy ambiciosa, por lo que busca estar permanentemente ocupada. De aqu?? se deriva ese clich?? que dice que cuando las manos est??n calientes, la cabeza est?? fr??a y despreocupada. Si estas personas est??n ocupadas ejerciendo el gobierno sobre algo, pueden estar muy asentados en la vida y ser gente muy sana, ya que han venido al mundo para eso. Imagina que te nace un beb?? con la Cruz del Regidor. Puedes estar seguro de que controlar?? todo en tu vida, y que no podr??s hacer nada por evitarlo. Es algo que puede ser descrito de muchas maneras diferentes no es preciso verlo como regidor de un gobierno, pero puedes estar seguro de que ejercer??n un control f??rreo sobre tu vida. Es gente que ha venido al mundo para mandar y dictaminar las reglas del juego.  ', 'Lo que es verdaderamente importante acerca de estas personas es que saben escuchar - ese es su mayor don como gobernantes. Toda esta capacidad regidora es consecuencia de la puerta 45, en cuya naturaleza se encarna el pach??. Esa es la puerta del Rey o de la Reina, estamos tratando aqu?? con el regidor natural de la tribu y controlador natural del territorio. Si tienes la puerta 45 en tu perfil, recibir??s siempre la oferta de controlar alg??n territorio y de ejercer alguna forma de gobierno.  ', 'La puerta 45 tiene la obligaci??n natural de educar a la tribu. Recuerda que apenas unos pasos atr??s el programa evolutivo impon??a la necesidad de desarrollar la suficiente consciencia como para reconocer el valor de la mente. Los mejores regidores son aquellos que mejor educan a su gente. Aunque es algo que parece obvio, es tremendamente importante que se comprenda a fondo el alcance de esta cuesti??n. Con otras palabras, cuando acabamos de acostumbrarnos a pensar que con satisfacer las necesidades del cuerpo f??sico es suficiente, porque hemos logrado abatir la pr??xima pieza de caza o lo que sea, la evoluci??n nos lleva a un punto en el que tenemos que encontrar otro camino que nos lleve m??s all?? de lo f??sico y nos adentre en el campo educativo. Aqu?? tenemos el comienzo de la educaci??n. La mayor responsabilidad de cualquier gobernante es ofrecer a aquellos sobre cuyas vidas rige el acceso a una buena educaci??n.', 'Los regidores que tienen el Sol de Personalidad en la puerta 22 son gobernantes que saben escuchar, y debido a ese don est??n generalmente m??s abiertos a hacer lo que sea necesario para educar a sus seguidores. Gobernar sin educar conduce, en ??ltima instancia, a la destrucci??n, ya que finalmente esa forma de gobierno se topa con la rebeli??n y la revoluci??n. No se puede evitar. La verdadera responsabilidad principal de un gobernante es educar a aquellos sobre quienes gobierna.  ']
//     },
//     {
//         cruz: 'Cruz Angulo Derecho del Gobierno 2',
//         img: imagesCruzes['gobierno.jpg'].default,
//         texto: ['Con la entrada del Sol en la puerta 45, llegamos al comienzo de nuestra capacidad de gobernar. Ya hemos tenido ocasi??n de ver la tem??tica de esta Cruz de Angulo Derecho del Gobernar en la expresi??n de su aspecto m??s dulce - a trav??s de la Gracia - en el primer cuarto de encarnaci??n. Toda la fuerza para gobernar - que puede llegar a adquirir un cariz muy duro en sus formas - ha sido dotada de un aspecto muy bonito cuando consigue manifestarse a trav??s de la puerta 22 de la Gracia. Aquellos eran el tipo de gobernantes - al comienzo del desarrollo de esa capacidad - que ten??a la capacidad de comenzar el proceso de educar a los miembros de su tribu, lo que representa la responsabilidad m??s primordial de cualquier gobernante. ', 'Un gobernante que sabe escuchar y estar abierto a los dem??s, puede llegar a reconocer los verdaderos problemas a los que se enfrenta su comunidad. Consiguientemente, es capaz de poner en marcha alg??n tipo de soluci??n para ellos. Pero aqu?? estamos tratando de un aspecto muy distinto de esta cruz, ya que hablamos de la verdadera pr??ctica del gobierno. La gente que viene al mundo sobre esta cruz de encarnaci??n est?? aqu?? para asumir el mando.  ', 'Todas las personas que tienen su Sol en la puerta 45 reciben a lo largo de su vida ofertas de poder y territorio en el que ejercer el mando. Obviamente, eso no significa que le vayan a ofrecer el gobierno de una naci??n a cada uno de ellos. No obstante, esas oportunidades siempre estar??n sali??ndoles al camino en muchos niveles distintos de su vida, tanto en el plano personal como en otros. En la segunda variante de esta Cruz de Angulo Derecho del Gobernar la tem??tica est?? centrada en la voz posesiva de la puerta 45. Esta es la m??s posesiva de todas las cruces de encarnaci??n. "??Esto es m??o! No es tuyo. La tierra que pisas me pertenece. El aire que respiras me pertenece". ', 'Es muy duro vivir en el mundo actual siendo portador de la Cruz del Gobernar. Al fin y al cabo, el menos en el mundo occidental, ya no hay ning??n tipo de estructura verdaderamente tribal que se mantenga vigente. Nos hemos fundido todos en el colectivo humano, y el liderazgo que seguimos ya no es el del hombre fuerte; el l??der ya no es el rey. Para nosotros, el rey y la reina forman parte del mundo rosa, cuya ??nica funci??n es la de mantenernos entretenidos. La realidad es que el liderazgo que hoy m??s respetamos es el ejercen nuestros l??deres electos, lo cual es l??gico (canal 31/7). El mundo ya no es lo que era para las personas que tienen el canal 45/21. Ahora encontramos a estas personas en los asientos de las juntas directivas. Es decir, que han creado nuevos reinos y condados que funcionan en la cultura y subcultura de las grandes empresas en el mundo de los negocios. Ese es el lugar natural ahora para el canal 45/21; ese es el lugar natural para este tipo de energ??a.  ', 'Originalmente esta cruz tra??a consigo la demanda de un gobernante, de alguien con capacidad para ejercer el control de la tribu. Pero tambi??n hay algo m??s que tiene esta cruz en sus or??genes, y es el dinero, el hecho de que todo gira en torno al dinero, a la recolecci??n y a la obtenci??n de dinero. Aqu?? se trata de comprender que no s??lo el individuo necesita tener m??s de lo ??l o ella necesita, sino que la sociedad como un todo tiene que tener tambi??n m??s de lo que necesita. La sociedad necesita disponer de suficientes recursos para pagar todos los servicios necesarios para mantener a la gente tranquila - un pollo en cada olla, por poner un ejemplo. Es decir, que el gobierno que emerge de esta cruz tiene una cualidad material profundamente arraigada en su naturaleza, lo que en la actualidad le conducir?? naturalmente a los salones de la juntas directivas de las grandes empresas. ', 'Jack London era un maravilloso escritor americano de finales del siglo XIX, muy conocido, de hecho, por sus historias acerca del salvaje mundo animal. Sin embargo, este se??or fue uno de los primeros socialistas, y escribi?? un libro que se llamaba ???El Tal??n de Hierro???. Era un libro extraordinario que trataba de las inmensas oligarqu??as capitalistas que lo conquistan y dominan todo. Una vez la evoluci??n les a privado del gobierno a trav??s del liderazgo din??stico, algo ten??an que hacer. ??Que va a hacer Bill con 90 billones de d??lares en su cuenta? Lo menos que puede hacer es ejercitarse en el uso del poder.  ', 'Tenemos en este mundo de los negocios un punto de transici??n muy importante, y es que sin ??l - sin negocios - no habr??a ninguna posibilidad real de disponer del lenguaje. La escritura comenz?? a trav??s de las cuentas. Si miras al pasado, en la primeras ciudades-estado de la antigua Mesopotamia, reun??an todo el grano que se cosechaba en las afueras, pero necesitaban poder llevar bien la contabilidad. Descubrieron que construyendo un entorno cerrado y protegido, no eran necesaria tanta mano de obra para trabajar los campos. Es decir, que los obreros pod??an ser dedicados a otras labores, como hacer zapatos, cestos, alfarer??a, lo que fuera necesario en cada caso. Para poder almacenar todo el grano, no solamente necesitaban saber cu??nto grano ten??an en cada momento, sino que deb??an tambi??n saber identificar al propietario de cada parte. Es obvio que sin los negocios, nunca hubiera nacido la escritura.  ', 'Tenemos en este mundo de los negocios un punto de transici??n muy importante, y es que sin ??l - sin negocios - no habr??a ninguna posibilidad real de disponer del lenguaje. La escritura comenz?? a trav??s de las cuentas. Si miras al pasado, en la primeras ciudades-estado de la antigua Mesopotamia, reun??an todo el grano que se cosechaba en las afueras, pero necesitaban poder llevar bien la contabilidad. Descubrieron que construyendo un entorno cerrado y protegido, no eran necesaria tanta mano de obra para trabajar los campos. Es decir, que los obreros pod??an ser dedicados a otras labores, como hacer zapatos, cestos, alfarer??a, lo que fuera necesario en cada caso. Para poder almacenar todo el grano, no solamente necesitaban saber cu??nto grano ten??an en cada momento, sino que deb??an tambi??n saber identificar al propietario de cada parte. Es obvio que sin los negocios, nunca hubiera nacido la escritura.  ']
//     },
//     {
//         cruz: 'Cruz Angulo Derecho del Gobierno 3',
//         img: imagesCruzes['gobierno.jpg'].default,
//         texto: ['La Cruz de Angulo Derecho del Gobierno - con el Sol en la puerta 47 - donde el ejercicio del gobierno est?? legitimado. Observa bien la diferencia en la transici??n entre una puerta y la otra. La puerta 64 simplemente est?? abierta, llena a rebosar de todas esas memorias del pasado que tiene que procesar. De modo que siempre est?? presionada por la necesidad de alcanzar la puerta 47 que se encuentra en el otro lado del canal: "Tengo que hallarle el sentido a esto..., tengo que hallarle el sentido." De ah?? nace toda la ansiedad de estas personas. Recuerda que lo que nos atormenta siempre es lo que no somos, y no lo que somos.  ', 'Por otra parte, el Sol en la puerta 47 hace que esta Cruz de Angulo Derecho del Gobierno busque y encuentre su inspiraci??n siempre en el pasado. Es uno de los peque??os anzuelos que, lanzados corrientemente por los comentaristas pol??ticos americanos, poner un poco de Reaganismo en boca de John Mc Cain si quieren hacer que sus propuestas suenen un poco mejor. De ese modo se asegura que todo el mundo se haya enterado de que es una cita del pasado. Se toman prestadas las referencias del pasado para ponerlas al d??a y poder hacer uso de ellas, interpret??ndolas a trav??s de la puerta 47, busc??ndoles el sentido, para poder finalmente reclamar las funciones de gobierno para uno mismo.  ', 'Piensa un momento en c??mo se desarrolla todo esto. Es algo que comienza en la l??nea 45.3 del eje prenatal, que es un proceso marcado por el intento y error de la tercera l??nea. Es decir, que no es m??s que una manera en la que el gobierno intenta superar los errores del pasado. De modo que no es solamente una cuesti??n de idolatrar el pasado. Al mismo tiempo que los pol??ticos usan el Reaganismo para exaltar las virtudes del pasado, pueden utilizarlo para desmerecer la pol??tica aplicada por el presidente Carter. El pasado puede ser usado de las dos maneras - para hallarle sentido a sus posiciones y us??ndolo en beneficio propio - y aprovecharse de los errores del pasado para intentar establecer el propio r??gimen de gobierno. Hay que recordar siempre algo muy fundamental acerca de la gobernaci??n - lo veremos con toda claridad cuando lleguemos al ??ngulo izquierdo de la cruz, y es que la gobernaci??n tiene un compromiso muy espec??fico con la instrucci??n y educaci??n. Al aumentar la educaci??n y la conciencia de su gente, el gobernante incrementa la riqueza de su tribu, y finalmente tambi??n la de su pa??s. Este es uno de los temas m??s din??micos en la naturaleza de esta cruz, que trata enteramente de la capacidad de aprender del pasado.  ', 'Hay miles de personas que se encarnan con esta cruz, y no todas tendr??n las ideas que llegar??n a ser expresadas colectivamente como un proceso arquet??pico. Sin embargo, todas disponen de esa capacidad en los niveles mundanos de su vida. Esta es gente que hace magn??ficos investigadores, con un don extraordinario para investigar las esferas y los usos del poder a partir de las experiencias del pasado. Ese es uno de los temas b??sicos de lo que llamamos historia. Durante la amplia mayor??a de la historia registrada - al menos lo que llamamos historia registrada, que, por cierto, lleva ya mucho tiempo dando vueltas, lo ??nico de lo que ha quedado registro es de las vidas de aquellos que gobernaron. La historia com??n es un fen??meno tan reciente que no va m??s all?? del siglo XX; es la primera vez que existe algo semejante. En el pasado, toda la historia escrita giraba en torno a aquellos que gobernaron en el mundo. En esta cruz tenemos una de las ra??ces m??s hondas de esa tem??tica.  ']
//     },
//     {
//         cruz: 'Cruz Angulo Derecho del Gobierno 4',
//         img: imagesCruzes['gobierno.jpg'].default,
//         texto: ['Llegamos a la Cruz de Angulo Derecho de los Faroles, quiero decir...la Cruz de Angulo Derecho del Gobierno. Aunque con el Sol de Personalidad en la puerta 26, el primer t??tulo tampoco es nada desacertado. Aqu?? tenemos el gobierno ejercido a trav??s de la exageraci??n, del marketing y de la propaganda en su contexto m??s moderno. Es decir, que aqu?? se trata de promocionarse a uno mismo como l??der. Coges a un pelele como George W. y lo conviertes en alguien de calibre presidencial. Me encanta eso, todo lo que tienes que hacer es mirarle a ese hombre a la cara y enseguida te das cuenta: "Oye, qu?? buen marketing." Sesenta y nueve millones de d??lares m??s tarde todav??a est??s diciendo: "Qu?? buen marketing." ', 'Aqu?? tenemos el marketing del gobierno con un toquecito tribal. "No, no tengo nada en contra de la bandera confederada." Es gente cuya pol??tica apunta directamente al coraz??n de la tribu.  ', 'Esto no es como la puerta 45 - recuerda que los gobernantes alzan siempre la nariz hacia el aire de las alturas. Es una de las cosas a entender acerca de las mec??nicas del instinto y del olfato. Esa es una corriente en la todo el mundo emana un cierto olor, excepto la puerta 45, que como no soporta el olor alza su nariz como buscando un aire m??s puro. Pero la puerta 26 no se comporta para nada de ese modo, ya que se pasa la vida estrechando las manos de la gente, y dejando en todos la impronta de su fragancia personal. Estas son personas que se ponen al frente de la cuesti??n, y cuyo mensaje b??sico es: "Soy uno de los vuestros." Palabras de George W. Bush: "Yo no soy parte del sistema. Yo soy uno de vosotros." Solamente la puerta 26 es capaz de mentir de ese modo, solamente esta puerta es capaz de decirte que es uno de los tuyos. Pero, la realidad es que no es uno de los tuyos, y que nunca lo ser??. Nunca ser?? un americano m??s, tan ordinario como cualquier otro, porque no es tribal. Comoquiera, esto es una cuesti??n de marketing.  ', 'Aqu?? tenemos una forma de gobierno muy distinta a las vistas hasta ahora. No es como el gobierno de la gracia - puerta 22 - donde ve??amos un inter??s genuino por las necesidades y apuros de la gente. Tampoco es como el gobierno de la puerta 47, que nos dec??a: "Mi gente est?? oprimida. Tengo que ser capaz de hacer algo m??s por ellos. Tengo que ayudarles de alg??n modo." Ni como la puerta 45, que dice: "Yo soy el regente natural, por lo que cobrar?? suficientes impuestos y los mantendr?? en la pobreza, pero al menos los educar?? para que quiz??s ma??ana les pueda ir algo mejor." ', 'Lo que dice la puerta 26 es lo siguiente: "Yo quiero tener el poder. Yo nac?? para ostentar el poder. Voy a por ello." Eso es todo, luego s??lo le queda aprender a hacer bien su trabajo. No es que los dem??s aspectos de la Cruz del  Gobierno - 22, 47, 45 - no vayan a estar presentes en la conciencia de esta persona, todo eso estar?? ah?? trabajando de fondo. Sin embargo, su manera de llegar a gobernar es a trav??s de la fuerza de su ego, y a trav??s de su capacidad para proclamar su derecho a gobernar, exagerando acerca de los beneficios que su forma de gobierno tendr?? para todos. Har??n propaganda de eso como si se tratara de una comodidad o de un art??culo de lujo.  ', 'Aqu?? es donde encontramos la pol??tica como un medio de hacerse la vida c??moda. Se trata de personas que se venden a s?? mismas a la gente a trav??s de todas las promesas que hacen. Eso es lo que hace el ego, promesas de todo tipo. O sea, que tenemos aqu?? al aut??ntico gobernante del ego que vive de hacer promesas. Como, obviamente, la pol??tica no trata de otra cosa m??s que de las promesas, este es uno de los ingredientes b??sicos de la Cruz del Gobierno. No es cuesti??n de si esta variante es mejor o peor que cualquiera de las otras. Se trata simplemente de una variaci??n m??s sobre el mismo tema.  ']
//     },
//     {
//         cruz: 'Cruz Angulo Derecho del Maya 2',
//         img: imagesCruzes['maya.jpg'].default,
//         texto: ['Las puertas que apuntan al Ajna desde la Garganta inspiran un profundo asombro debido al extraordinario trabajo que realizan. El Centro de la Garganta contiene nuestro sistema tiroideo, y es tambi??n el centro de nuestra capacidad metam??rfica. Eso quiere decir que esas tres puertas que buscan el Centro Ajna desde la Garganta son las grandes puertas metam??rficas de nuestra especie, una capacidad metam??rfica realmente m??gica.  ', 'La puerta 62 de los detalles es nuestra voz m??s razonable, y la menos razonable tambi??n, porque es nuestra voz l??gica por excelencia. Esta es una voz que dice: "Yo pienso", y que demuestra sus palabras con hechos. Sin embargo, esa es una voz que responde a un patr??n visual en la puerta 17, un patr??n que tiene que traducir en lenguaje. Como la puerta 62 es la que le atribuye un nombre a cada cosa, es verdaderamente la puerta del Maya. Como portador de la puerta 62, Ra siempre est?? haciendo frases propias y poni??ndole nombre a las cosas. El m??stico Osho, que tambi??n era portador de esta puerta, siempre estaba cambi??ndole el nombre a la gente. En el momento en que la puerta 62 le pone a algo un nombre o una f??rmula, establece una f??rmula que los dem??s pueden entender.  ', 'O sea, que la puerta 62 est?? realmente llena de magia. Al ser capaz de describir las cosas de un modo l??gico, d??ndole un nombre a cada cosa, y dotando esos nombres de atributos l??gicos, esta puerta nos da un terreno com??n a partir del que podemos entender todos juntos. Lo ??nico que da seguridad a los seres humanos - no hay nada m??s que sea capaz de proporcion??rnosla - es el entendimiento l??gico. Solamente a trav??s de la l??gica podremos liberarnos y aliviarnos del dolor. El Dise??o Humano no es m??s que eso - una sanaci??n l??gica. Su l??gica tiene el poder para transformarte. Esa es la belleza de lo que la l??gica puede llegar a dar de s??.  ', 'La puerta 62 es la puerta del Maya, y es la que le da su nombre a esta Cruz de Angulo Derecho del Maya. Nuestro modo de medir las cosas es nuestro modo de expresarlas a trav??s del lenguaje; las palabras son el fruto de nuestras mediciones. Cuando todos asentimos ante alguna definici??n, esta se hace real. Simplemente lo asumimos as??. Esa es la magia inherente a esta puerta.  ', ' En esta variante de la Cruz del Maya no se trata - como con el Sol en la puerta 42 - del hecho de que en el Maya todo tiene que tener su fin. Por supuesto que todos tenemos que morir y confrontar estos temas de la muerte, pero aqu?? estamos tratando con los mensajes de la puerta 62, que nos dice: "Mira, aqu?? hay una..., ??c??mo le llamamos? Pong??mosle un nombre".  ', 'En alg??n rascacielos de Nueva York, hay un tipo bajito que est?? sentado en una oficina min??scula detr??s de monta??as y monta??as de papel, y su trabajo consiste en darle un nombre a las estrellas famosas. Ese es su trabajo. Le puedes enviar tu nombre, pagarle, y ya es oficial. Pero esa es una necesidad humana de ponerle un nombre a todo. Es decir, que, si sabes su nombre, entonces lo conoces - as?? es el Maya. Si no puedes darle un nombre, entonces...  Cuando intentas recordar el nombre de alguien, si no puedes dar con el nombre de esa persona, es como si no existiera, como si se desvaneciera en el Maya, en el sue??o de la vida. Los nombres son muy importantes para nosotros.  ', 'Siendo una de las fuerzas educadoras m??s poderosas que tenemos, estos seres nos adentran profundamente en el Maya a trav??s de su capacidad para describirlo. Tienen la capacidad de describirlo de un modo en el que podemos acceder a un entendimiento general de ??l.  ', 'La oposici??n a los detalles de la puerta 62 est?? en la puerta 61 - La Verdad Interior. Con otras palabras, la verdad interior est?? en el detalle. El corte de las seis l??neas del hexagrama 61 tiene dos l??neas yang, seguidas de dos l??neas yin con dos l??neas yang arriba del todo. El yin est?? enterrado en el centro del hexagrama. La verdad est?? oculta en el interior de la forma. La verdad interior es algo que solamente puede emerger del detalle. Cuando alguien te dice que tienes que creer en algo, debes saber que sin los detalles correspondientes no puede haber verdad interior. Si no sabes c??mo funciona esto, no importa de qu?? se trate ni de qu?? hables. Al final, no hay salvaci??n para ti en el plano mental hasta que no entiendas. Simplemente no la hay.  ', ' De modo que tenemos profundamente enclavado aqu?? un tema l??gico que nos capacita para expresar el nombre de las cosas, para darles su nombre y con ello crear el Maya. Al hacerlo, creamos el lenguaje, ya que aqu?? es donde tiene sus or??genes el lenguaje. La capacidad para articular el sonido emergi?? de la puerta 12, pero el lenguaje mismo, la creaci??n del lenguaje, de la gram??tica, de la estructura de la sintaxis, todo eso naci?? de la puerta 62.  ']
//     },
//     {
//         cruz: 'Cruz Angulo derecho del Maya 4',
//         img: imagesCruzes['maya.jpg'].default,
//         texto: ['Con el Sol de Personalidad en la puerta 61 - La Verdad Interior - llegamos a la Cruz de Angulo Derecho del Maya. Aqu?? tenemos la inspiraci??n mental en el plano de la individualidad, que trata enteramente de la certidumbre del saber y de la presi??n por llegar a tenerla. Esa presi??n por llegar a saber con certeza puede desembocar f??cilmente en la locura, o, mejor dicho, puede volverse irracional con mucha facilidad. La puerta 61 busca constantemente la racionalidad de la puerta 24, lo que facilita mucho que la presi??n de la 61 conduzca al ??mbito de lo irracional.  ', 'El saber es algo que funciona a partir de una f??rmula muy simple. En primer lugar, es preciso saber lo que necesitas saber - qui??n eres, y c??mo funcionas en el mundo. Ese es el conocimiento m??s esencial - con??cete a ti mismo. En segundo lugar, has de saber que no puedes saber lo que no se puede saber - ah?? es donde surge el elemento irracional. Hay tanta presi??n que proviene de esta puerta 61, que frecuentemente la gente se pierde intentando llegar a conocer lo incognoscible. En tercer y ??ltimo lugar, existen tambi??n muchas cosas que no es necesario que conozcas. Yo, por ejemplo, no necesito saber c??mo funciona el motor de mi coche, doy gracias a Dios por ello. O sea, que otro se puede ocupar de eso.  ', 'Con el Sol de Personalidad en la Puerta 61, el Maya se convierte en el exclusivo foco de todo el proceso de pensamiento. Dicho de otro modo, "Necesito saber qu?? significa y c??mo funciona todo esto. Necesito conocer qu?? es Dios. Necesito saberlo todo, si no quiero ser un fracasado". No s??lo necesitan las personas de esta cruz conocer todas esas cosas, sino que adem??s necesitan conocerlas con todo lujo de detalles. Esta no es una cruz que incorpore ning??n aspecto abstracto en su configuraci??n, por lo que dif??cilmente estar?? dispuesta a creer a priori en nada de lo que se le diga. En su lugar, lo que s?? tiene esta cruz de encarnaci??n es una tremenda presi??n por llegar a saber.  ', 'He dicho muchas veces que la presencia de alguna de las puertas del Centro de la Cabeza puede resultar realmente inc??moda para sus portadores, pero que tambi??n puede ser fuente de inspiraci??n profunda para las personas con las que se va encontrando en el camino. Mientras tu mente tenga autoridad para tomar decisiones en tu vida, la presencia de la puerta 61 en tu dise??o puede hacer que te vuelvas completamente loco, ya que te arrastrar?? a pensar que en el conocimiento absoluto est?? la ??nica manera de sobrevivir en esta vida. Yo s?? muy bien lo que eso significa, ya que tengo mi Sol de Dise??o en la puerta 61 del misterio. Recuerdo perfectamente c??mo era eso antes de recibir estos conocimientos  acerca de las mec??nicas del Maya. Aunque ahora mi puerta 61 sea una fuente de inspiraci??n para todos mis estudiantes, durante al menos cuarenta a??os de mi vida no ten??a otro valor que un simple quebradero de cabeza. Hay una infinitud tan grande de cosas que se pueden llegar a saber, que uno no acabar??a nunca. Te volver??as loco si quisieras llegar a saberlo todo.  ', 'La importancia de lo que los mecanismos del Maya hacen para nosotros, y el valor que esta cruz tiene para nuestras vidas est??n enraizados en la puerta 62 - la Preponderancia de lo Peque??o. La puerta 62 es la que se encarga de ponerle nombres a las cosas y de enumerarlas, pero es la puerta 61 quien se encarga de introducir algo nuevo en el Maya. El Maya siempre se est?? refrescando con elementos nuevos, ya que ese es nuestro proceso evolutivo. Con la presi??n de la puerta 61 como tel??n de fondo, de aqu?? proviene la presi??n que obliga al Maya a mutar, por lo que el Maya no es nunca est??tico. A la inspiraci??n l??gica y abstracta le gustar??a disponer de un Maya est??tico y predecible, en el que todo podr??a ser documentado. Eso nos permitir??a conocer realmente lo que hay detr??s del velo de ilusi??n. la individualidad, sin embargo, dice siempre: "S??, s??, s??, pero tenemos la posibilidad de mutar, y, sin mutaci??n no hay vida". O sea, que el Maya est?? cambiando siempre, y el hecho es que la puerta que est?? abierta y receptiva a esos cambios es la puerta 61 de ???la Verdad Interior???. Esta es la gente que ser?? capaz de acercarnos a esos procesos, y la que nos inspira a investigar el Maya en un nivel mayor de profundidad. ']
//     },
//     {
//         cruz: 'Cruz Angulo derecho del Maya 1',
//         img: imagesCruzes['maya.jpg'].default,
//         texto: ['El hexagrama 42 nos lleva a un lugar en el que se activan los temas del comienzo y del final. Como puerta en la que se completan los procesos, la 42 es una puerta de crecimiento. En este contexto, esta es una puerta que trata realmente del cierre de un ciclo (todas las puertas que hemos estado viendo hasta llegar a este punto) y aqu?? es donde comenzamos los preparativos para lo que se nos viene encima en los siguientes hexagramas.  ', 'La Cruz de Angulo Derecho del Maya es absolutamente esencial para nuestro desarrollo. Para que todos podamos sentirnos completos y satisfechos de nuestro proceso humano debemos llegar a ser todos maestros del Maya. Se trata, en ese sentido, del entorno en el cual vivimos. Todos podemos alcanzar la maestr??a del Maya si aprendemos a manejar correctamente nuestra propia naturaleza. A partir de la aceptaci??n de nuestra propia autoridad interna, y de nuestro proceso personal a trav??s del tipo, tenemos acceso a reconocer el funcionamiento mec??nico del Maya. Esto no quiere decir que uno se vaya a poner a estudiar todos los matices del Maya, sino que significa simplemente que en el momento en que te rindes a la vida es cuando puedes ver c??mo funcionan los mecanismos de cuanto hay a tu alrededor.  ', 'No debemos olvidar nunca que al tratar con cruces de ??ngulo derecho se pueden dar en cuatro variaciones distintas en funci??n de d??nde est?? ubicado el Sol de Personalidad. En este caso, con el Sol de Personalidad en la puerta 42, lo m??s importante es que podamos ver y ponerles el broche final a las cosas, y no simplemente que nos conformemos con unas perspectivas abiertas a muchas v??as. De ah?? nacer?? lo que en adelante llamaremos ciencia. Es decir, que en esta puerta 42 hunde sus ra??ces la necesidad humana de terminar concluyentemente las cosas, pero ??c??mo funciona eso exactamente? ??D??nde est?? el comienzo? ??D??nde el medio? ??D??nde el final? ??En qu?? consiste ese proceso? ', 'Hay una dificultad inherente en la puerta 42, y es que est?? dise??ada para concluir las cosas. Como es parte del formato c??clico de energ??a y est?? dise??ada para terminar las cosas, cuando se implica incorrectamente en algo puede quedarse enganchada a ello durante mucho tiempo. Por ejemplo, la persona de la puerta 42 se enamora y decide casarse, s??lo para descubrir una semana m??s tarde que su pareja no le gusta. Luego puede que le tome 30 a??os llegar a divorciarse - as?? es esta puerta. Con el Sol de Personalidad en la puerta 42 todo gira en torno a la necesidad de implicarse ??nicamente en cosas que uno realmente pueda llevar a una conclusi??n. Eso significa que uno debe entrar en contacto con esas cosas de la manera correcta. De lo contrario, el proceso del Maya se convierte en simple y llana confusi??n, y la persona acaba inmersa en situaciones donde le toca vivir una vida que obviamente no est?? hecha para ella. Esa persona acabar?? teniendo que hacer cosas que no son para ella, sinti??ndose insatisfecha en esos procesos, y lo que es m??s importante, sin saber c??mo ni por d??nde salir de esas situaciones.  ', 'Por ejemplo, es muy importante que los ni??os que son portadores de la puerta 42 (no importa en qu?? lugar de su cruz se encuentre) entren correctamente en contacto - es decir, en funci??n de su tipo - con los estudios que van a desarrollar. De lo contrario, nunca llegar??n a sentirse satisfechos de los resultados que cosechan, ni podr??n realizar correctamente su labor en el Maya.  ', 'Esta es una cruz de encarnaci??n que se asienta sobre los detalles que acumula. Con la Tierra de Dise??o en la puerta 62, estas son fuerzas que est??n aqu?? para recolectar todos los detalles, ya que necesitamos entender c??mo funcionan todas estas cosas. Sin ellas, no conseguir??amos librarnos nunca del poder que el plano mental ejerce sobre nosotros. No se debe olvidar que la mente no puede ser vencida a trav??s de la lobotom??a. Eso no puede funcionar jam??s. La manera correcta de vencerla es aprendiendo a conocer su funcionamiento con exactitud, lo que nos permite entendernos a nosotros mismos y al mundo que nos rodea. Eso es algo que ha dejado de estar vetado para cualquiera. Es algo que cualquiera puede llegar a conocer en este preciso instante s??lo con vivir siguiendo la naturaleza de su tipo. Vivir siguiendo la naturaleza de su tipo es todo lo que uno tiene que hacer para encontrar su sitio en la totalidad y vivir en paz consigo mismo.  ', 'La Tierra de Personalidad permanece en la puerta 32, y trae consigo el miedo al fracaso. Este miedo al fracaso es el lado opuesto de la necesidad de saber establecer los compromisos correctos. Si no sabes comprometerte correctamente con las cosas, el fracaso te perseguir?? hagas lo que hagas. La gente de esta cruz sabe muy bien de qu?? hablo. Cuando a alg??n nacido con la Cruz de Angulo Derecho del Maya le dan a hacer un crucigrama, y no sabe c??mo hacerlo y mucho menos completarlo, se enoja terriblemente por no haber sabido completarlo. En el momento en que asumen que no van a poder acabarlo se sienten como si fracasaran personalmente. Todo el asunto del fracaso gira en torno a la evaluaci??n o valoraci??n de las cosas en un mundo material.  ']
//     },
//     {
//         cruz: 'Cruz Angulo Derecho del Recept??culo del Amor 4',
//         img: imagesCruzes['amor.jpg'].default,
//         texto: ['En la ilustraci??n del Recept??culo del Amor con la que comenzamos, se describ??a la puerta 10 como el labio del recept??culo, del cual emana la vida, del cual emana la sangre.  ', 'La puerta 10 representa el potencial para amar el camino que uno tiene que recorrer. De ah?? que tenga ra??ces que salen naturalmente de las variaciones de la Cruz del Ed??n. Antes de poder amarte a ti mismo, tienes que saber amar el hecho de estar en el mundo y de existir en ??l a trav??s de tu cuerpo. Primero has de amar esas cosas, y entonces encuentras el amor a ti mismo reflejado en todo lo que forma parte de tu vida. Si te resistes al camino, si te resistes a lo que significa existir en el mundo de la forma, entonces nunca tendr??s el comportamiento que necesitas para poder encontrar el amor a ti mismo.  ', 'Uno de los chistes impl??citos en esto es que estamos dise??ados para encontrar el amor a uno mismo a trav??s de nuestra capacidad de sobrevivir en el ahora existencial. El chiste reside en que si est??s vivo en el instante presente, entonces ??por qu?? no te est??s amando a ti mismo? Ten en cuenta que ah?? es donde siempre tuvo sus ra??ces el genuino amor a uno mismo. Es decir, que poder decir: "Yo s?? c??mo sobrevivir" es todo un logro. Al fin y al cabo, si nos comparamos con el resto de las formas de vida que existen sobre la Tierra podemos constatar que nos va realmente bien. Somos una especie dura de pelar y es nada f??cil eliminarnos. De eso es de lo que se trata. De ah?? es de donde se deriva nuestra fuerza. "Yo s?? c??mo sobrevivir".  ', 'De la puerta 10 nacen muchas variaciones de comportamiento distintas, con lo que tenemos aqu?? una cruz muy vinculada a la tem??tica del comportamiento humano. Lo que m??s llama la atenci??n de la vida de estas personas es el extremado cuidado que ponen en su comportamiento. Por ejemplo, la persona que tiene la l??nea 10.1 es alguien que apenas se deja ver, de modo que un momento est?? ah??, y al siguiente ya no lo est??. Todo el mundo sabe que la persona de la l??nea 10.2 busca esconderse de los dem??s, porque su comportamiento viene determinado por el tema del ermita??o. "Oh s??, es alguien que vive en un lugar solitario por ah?? arriba": Los dem??s simplemente lo saben, porque lo revela el comportamiento del ser.  ', 'En el caso de la puerta 10 tenemos una de las puertas que m??s direcci??n dan en la vida, s??lo que su direcci??n est?? siempre orientada a partir de un cierto comportamiento. Es algo que he podido observar a partir de mi trabajo con gays, un grupo social que acusa una marcada tendencia a incorporar el Centro-G definido a trav??s de la puerta 10, mayormente con las l??neas 3 y 5. De ese modo crean una nueva direcci??n para el amor. En eso radica precisamente su capacidad. Estas son personas que vienen al mundo con la capacidad innata de moverte a trav??s del ejemplo de su comportamiento.  ', 'Considerando la puerta arm??nica a la posici??n del Sol de Personalidad encontramos siempre la posibilidad de la m??xima realizaci??n de cualquier cruz. Sin embargo, en el caso de esta cruz eso se convierte en un proceso lleno de matices y complejidades debido a la posibilidad de definirse a trav??s del contacto con tres puertas diferentes. Necesita encontrar la puerta 20 para poder tener acceso a despertar en el ahora. Necesita tambi??n encontrar la puerta 57 para disponer de la intuici??n que le permita sobrevivir en el ahora. Por ??ltimo, necesita encontrar la puerta 34, porque su poder??o natural es el que le permite seguir las convicciones de un arquetipo humano que sabe penetrar el instante presente. La puerta 10 necesita encontrar todas esas cosas, y al buscarlas, lo que explora es un proceso marcado por un profundo individualismo.', 'Notar??s enseguida que las personas que tienen el Sol de Personalidad en la puerta 10 de la Cruz del Recept??culo del Amor no emanan la misma sensaci??n que el resto de las variantes del "recept??culo". Por supuesto que tambi??n est?? presente en ellas - son siempre el tipo de personas que tomar??as en tus brazos - pero no emanan la misma cualidad de las otras variantes. Esta cuarta variante se ve orientada hacia un proceso extremadamente individual, y eso significa que viven con el foco puesto en ellas mismas y en su propio comportamiento. De hecho, lo que hacen es buscar el amor a ellos mismos intentando llegar a ser un individuo puro   ']
//     },
//     {
//         cruz: 'Cruz Angulo Derecho del Servicio 2',
//         img: imagesCruzes['servicio.jpg'].default,
//         texto: ['Si tienes en tu dise??o la puerta 33 o la 52, y todav??a no has estado en la c??rcel, es que eres una persona con mucha suerte. Decimos que la puerta 52 - La Quietud de la Monta??a - tambi??n llamada la puerta del Buda, es la gran puerta del poder pasivo. Es parte del formato de energ??a del circuito l??gico, generador del foco y de la concentraci??n. Todas las energ??as de formato que conectan el Centro de la Ra??z al Sacral tienen un potencial para la depresi??n. La depresi??n potencial de la puerta 52 nace de no tener nada que merezca la pena hacer mientras est?? quieta. Esta puerta tiene la capacidad de enfocar y concentrarse en la quietud, lo que nos permite estudiar, leer, sentarnos delante del ordenador, o lo que sea en cada caso. Todo lo relacionado con esta Cruz de Angulo Derecho del Servicio est?? enraizado en la concentraci??n pasiva de la energ??a.  ', 'Aqu?? encontramos nuestra habilidad para crear burocracias. Siendo esta una cruz cuya estructura es enteramente l??gica, tiene la responsabilidad colectiva de asegurar con su l??gica la correcci??n del patr??n que estamos manejando, para que podamos avanzar hacia el futuro con seguridad. Con su foco puesto en la puerta 52, esta es gente que quiere sentarse a planificar bien las cosas. Su modo de prestar servicio es pasivo. Este modo de prestar servicio nos lleva de vuelta a la estructura tribal del canal 45/21 - en este caso a la puerta 21 - como podremos ver en la cruz yuxtapuesta que viene a continuaci??n. La naturaleza de este servicio consiste en que finalmente acabar?? convirti??ndose en una profesi??n - profesi??n intelectual si lo deseamos. Siempre que acudimos a un profesional de este tipo es para obtener de ellos informaci??n.  ', 'Con la definici??n del canal 18/58 dentro de la estructura de esta cruz, hay aqu?? una tremenda cantidad de recursos energ??ticos alimentando el potencial del talento. Despu??s de todo, la funci??n del canal 18/58 es la de proveer la energ??a necesaria para la correcci??n. Sin embargo, las soluciones no se encuentran en el canal 18/58, sino en la puerta 48. Sin la identificaci??n de la puerta 16, el canal 18/58 carece de las habilidades necesarias para manifestarse. Se trata de una energ??a muy b??sica, una energ??a proyectada, que simplemente tiene la capacidad de reconocer que algunas cosas necesitan ser corregidas. De modo que si has nacido con esta Cruz del Servicio, lo dem??s vendr??n siempre a buscarte. Por otra parte, tener la puerta 52 integrada en tu perfil provoca que tengas tendencias a apoltronarte en el sof?? como una patata. ']
//     },
//     {
//         cruz: 'Cruz Angulo Derecho del Servicio 4',
//         img: imagesCruzes['servicio.jpg'].default,
//         texto: ['Con el Sol en la puerta 58 tenemos la cuarta variante de la Cruz de Angulo Derecho del Servicio. Se mantiene el eje prenatal de las puerta 18 y 17, que siempre aportar??n una cualidad cr??tica y prejuiciosa. Sin embargo, no debemos olvidar que esos atributos son necesarios. Al fin y al cabo, sin cr??ticas y sin juicio es imposible que podamos cuestionar los patrones con los que vivimos. Eso nos llevar??a a dejarnos absorber por patrones que pueden, de hecho, no ser v??lidos e ir en nuestro propio detrimento. A pesar de que a veces pueda resultar molesto tener que tratar con toda esa argumentaci??n y discusiones, el reto que representan estas dos puertas es absolutamente esencial.  ', 'Es una de las cosas que he aprendido a apreciar acerca del proceso l??gico, porque el desaf??o a los patrones l??gicos del Dise??o Humano me han honrado como profesor. Si no eres capaz de v??rtelas con eso, entonces, como dijo Truman: "Sal de la cocina". Si no sabes tratar con la gente l??gica, entonces tienes un problema serio en esta vida. Eso no significa que te tengan que gustar, pero la realidad es que es el aspecto m??s importante de todos nuestros circuitos, al menos en t??rminos de si seremos o no capaces de sobrevivir juntos. Es esencial que tengamos un entendimiento com??n de los patrones, y las personas de esta cruz nos imponen esa necesidad, tanto m??s en cuanto que ellos son los que insisten en saber de qu?? trata cada patr??n que manejamos, mientras que el resto de la gente simplemente est?? dispuesta a dar el patr??n por bueno. "Ah, bueno, pero as?? es como son las cosas. El patr??n a seguir es as??." Sin embargo, la gente l??gica es la que dice: "Espera un momento, no vayas tan deprisa. D??jame ver si eso es realmente de lo que trata el patr??n". O sea, que estas personas nos prestan un servicio muy valioso. No lo olvides.  ', 'Recuerda tambi??n que la l??gica est?? fam??lica de energ??a. Con el eje de las puertas 58 y 52 que tenemos aqu??, lo que tenemos es una polaridad de dos puertas ubicadas en el Centro de la Ra??z, que son puertas primordiales para el abastecimiento de energ??a en el circuito l??gico. Hay, por ejemplo, una profunda belleza en la l??nea 58.1, que se llama ??Amor a la vida??. Sin embargo, estas personas tambi??n pueden estar un poco idas, con un profundo toque de ??hippismo?? y una cualidad de almas benditas. Las bodas de los a??os sesenta estaban llenas de este tipo de gente, o al menos de sus clones. Es gente que vive con un sentimiento b??sico como si todo fuera maravilloso. Eso no quiere decir que por debajo de eso no se quejen de algo como los dem??s. Nadie puede librarse de eso siendo portador de la activaci??n del eje 18/17. No obstante, mientras hablemos de la l??nea 58.1 podemos decir que se trata de gente que considera la vida algo maravilloso.  ', 'La cuesti??n con el Sol en la puerta 58 es que se trata de gente portadora de la m??s solicitada de todas las energ??as. Nada enfurece tanto al colectivo como la actitud de la l??nea 58.2 - la l??nea de la perversi??n - porque dedica su energ??a a cosas que enervan el ??nimo de las personas l??gicas. Fam??lica de energ??a, la gente l??gica quiere disponer de esa energ??a para desafiar ciertos patrones b??sicos. Luego, se topa con que alguien de la l??nea 58.2 dedica toda su energ??a a averiguar la relaci??n entre las curvas de la cabeza y los patrones de la vida. El resto de la gente l??gica colectiva lo mira y dice: "??Pervertido!" Siendo la fuente de energ??a para el proceso l??gico, a la gente de esta l??nea se le exige siempre que sea ??til y de servicio para los dem??s, pero ese es un servicio que se niegan a ofrecer.  ', 'El Sol de Personalidad posicionado en la puerta 58 mira hacia la 18 pregunt??ndose: "??En qu?? puedo invertir mi energ??a? ??en qu?? tipo de correcci??n y en qu?? desaf??os puedo implicar mi energ??a?". Eso es lo que esta puerta busca. Lo que recibe es todo tipo de gente pidi??ndole su energ??a para participar en alg??n proceso l??gico. Como es gente que pertenece al circuito l??gico, no se podr?? implicar nunca a menos que pueda identificarse con el proceso en cuesti??n. Si la puerta 58 no se puede identificar con el resultado del proceso en el que se va a implicar, simplemente no participar?? de ??l. La l??gica est?? dise??ada para encarnar el tema de la maestr??a en la vida, y, a trav??s del canal 5/15, est?? dise??ada para repetir y corregir algo cuantas veces hiciera falta hasta alcanzar finalmente la maestr??a. O sea, que sin la identificaci??n necesaria no es posible perdurar el tiempo suficiente. Es decir, que nadie se puede convertir en m??sico porque es la moda del mes. Eso no puede funcionar. No tiene ning??n sentido comprarse una guitarra, un saxof??n, o lo que sea, practicar durante un mes, y despu??s dejarlo, porque no est??s realmente identificado con lo que puede llegar a ser en el futuro. La l??gica trata del futuro, y de la perfecci??n de los patrones a medida que avanzamos hacia ??l.  ', 'De modo que no es f??cil acercarte a esta variante de la Cruz del Servicio y decirle: "Te necesitamos". En primer lugar, tienes que lograr que se identifique con ello, y s??lo entonces podr??s tener acceso a su energ??a. Por cierto, que si t?? eres el portador de esta cruz, entonces solamente puedes implicarte en algo cuando entras correctamente en contacto con ello, de acuerdo a las mec??nicas de tu tipo y de tu autoridad interna. De ese modo, puedes encontrar algo a lo que dedicar toda tu energ??a. Es mucha la gente l??gica que hay en el mundo que no se ha dedicada nunca realmente a nada, y mayormente debido a la ignorancia de su tipo de dise??o, debido a los generadores que intentan ser manifestadores, a los proyectores que intentan ser manifestadores, a los reflectores que intentan ser manifestadores, y a los manifestadores que intentan ser cualquier cosa menos manifestadores. La cuesti??n es que nadie sea lo que es de verdad.  ']
//     },
//     {
//         cruz: 'Cruz Angulo Derecho del Servicio 1',
//         img: imagesCruzes['servicio.jpg'].default,
//         texto: ['La puerta 17, puerta de las opiniones, nos lleva al Centro Ajna y al lado l??gico de la mente racional. Quiero anotar al margen del tema que nos ocupa, que esta es la puerta en la que gen??ticamente estamos dise??ados para comenzar a hacernos preguntas e intentar comprender la naturaleza del tiempo. El origen de esto reside en el reconocimiento a que nos da acceso la puerta 25 de que somos terminales y nos vamos a morir. Ese reconocimiento nos hace desear tener una vida m??s larga, y la concentraci??n en ese foco de durar m??s nos atrapa de lleno en todo el asunto del tiempo. Ah?? es donde hace su entrada la puerta 17.  ', 'La funci??n de la puerta 17 es la de organizarnos. Hemos pasado de la Cruz de la Sanaci??n, una cruz transpersonal de ??ngulo izquierdo, a la Cruz de Angulo Derecho del Servicio, que es la m??s l??gica de las cruces, ya que las cuatro puertas que la conforman est??n enclavadas en el Circuito del Entendimiento. El servicio al que se refiere esta cruz no tiene necesariamente un sentido humanitario. Al fin y al cabo, las personas que nacen con esta cruz tampoco tienen elecci??n. Simplemente que, siendo de ??ngulo derecho y viviendo absortas en su propio proceso personal, tienen la capacidad de sentirse muy bien con el trabajo que hacen. Eso no significa que el bienestar que se deriva de su trabajo provenga directamente del hecho de prestar un servicio, sino que se deriva del simple hecho de dedicarse a hacer lo que hace. El hecho de que haya un tercero que se beneficie de su trabajo puedo hacerlo todav??a m??s valioso y gratificante, pero no es de ah?? de donde esta cruz recibe su mayor satisfacci??n', 'Como el tema de la correcci??n entra dentro de sus din??micas, esta es con frecuencia la m??s criticona y e insatisfecha de todas las cruces. La gente que viene al mundo con esta cruz criticar?? todo incesantemente, porque, claro, quiere prestar un servicio a los dem??s. "D??jame que te diga lo mal que est??s - t??, tu vida, el mundo en que vives, casi absolutamente todo lo que existe." Esta cruz de ??ngulo derecho forma en el gr??fico la definici??n del canal 18/58, por lo que la gente que nace con ella se encuentra profundamente insatisfecha. Esa profunda insatisfacci??n con las cosas es la que motiva su af??n de servicio.  ', 'La puerta 17 marca el comienzo de nuestro modo de organizarnos mentalmente, y est?? en la ra??z de lo que posteriormente se llamar??a filosof??a. El inicio del proceso conceptual de intentar organizar a la humanidad y la capacidad de formular todas nuestras opiniones acerca de la naturaleza del mundo operan a trav??s de las mec??nicas de la puerta 17. La puerta 17 est?? buscando siempre nuevos detalles, y esa b??squeda de detalles es algo que sigue naturalmente al descubrimiento de lo fr??giles que somos en la vida, al descubrimiento del hecho de que necesitamos protecci??n y de que vamos a necesitar ser sanados en esta vida. Los detalles, por tanto, tendr??n una importancia muy grande para los de esta cruz, como un paso adelante en la investigaci??n de las cosas. Sin embargo, aunque la importancia de ese tipo de detalles sea obvia, generalmente es el Noser el que se adue??a de las mec??nicas de esta cruz, con el resultado de una insatisfacci??n generalizada en el ser que es portador de ella y una profunda sensaci??n de que el mundo no est?? bien.', 'Alguien que tenga el Centro del Bazo definido no puede ser el sanador m??s id??neo. Es importante que esto se comprenda bien. Nadie que nazca con el Bazo definido, como les ocurre a todos los que nacen con esta cruz, puede ser un sanador. Esto no quiere decir que no puedan ser de servicio para los dem??s, y se??alarles la direcci??n correcta a seguir, organizar el entorno de la manera m??s adecuada, de manera que la sanaci??n pueda tener lugar. Pero en un nivel m??s terrenal y mundano, la gente de esta cruz es muy quejosa porque vive con la sensaci??n de que nada est?? bien ni funciona correctamente. ']
//     },
//     {
//         cruz: 'Cruz Angulo Izquierdo del Informar 1',
//         img: imagesCruzes['informar.jpg'].default,
//         texto: ['Dejada atr??s la limitaci??n que nos impone la geometr??a fija de la cuarta l??nea, entramos de lleno en el ??mbito de la geometr??a transpersonal. El don de prestar atenci??n a los dem??s conectado a la puerta 12, una puerta muy articulada, se convierte en la posibilidad de informar a otros con profundidad. Esta es la gente m??s cotilla de todo el planeta. Tanto que esta cruz podr??a llamarse tambi??n la Cruz del Cotilleo. Dicho sea de paso, que el cotilleo no tiene aqu?? ninguna connotaci??n negativa, ya que la gente ha cotilleado desde siempre. Parte del cotilleo es buena, y parte de ??l es mala - qu?? le vamos a hacer..., es cotilleo', 'Como informadores, esta es gente que simplemente te dice lo que hay. No s??lo eso, sino que adem??s es gente rara que tiene su sistema emocional conectado a la Garganta.', 'Es decir, que tanto si te gusta como si no, si est??s preparado como si no lo est??s, ellos te informan. Si viven correctamente su dise??o de Manifestadores emocionales, esperando el transcurso de la ola, reconociendo que no tienen acceso a su verdad en el presente y que no pueden permitirse pasar simple y directamente a la acci??n, s??lo entonces comenzar?? la Cruz del Informar a funcionar de un modo muy distinto al que lo ha hecho hasta ahora. Tal y como se vive ahora, con todo el mundo inmerso en el No-ser, y su tendencia es a comportarse como si fuera la cruz de las paridas. Van soltando las cosas a destiempo, sin caer en la cuenta de que todo eso proviene de c??mo y a qu?? prestan su atenci??n. Escuchan lo que dice alguien, y luego van soltando por ah?? lo que han escuchado, y eso es algo que puede ocasionar todo tipo de problemas.  ', 'La activaci??n de la puerta 47 - La Opresi??n - por la Tierra de Personalidad est?? operando por debajo de toda esa atenci??n y capacidad de escucha, intentando hallarles el sentido a las cosas y larg??ndolo hacia fuera. Si tienes un hijo con la Cruz del Informar y sufres de adicci??n a las anfetaminas, entonces tienes un problema. Lo m??s probable es que un d??a en el colegio la criatura diga: "Srta. P??rez, ??sab??a usted que mi madre...?" ']
//     },
//     {
//         cruz: 'Cruz Angulo Izquierdo de la Convulsi??n 2',
//         img: imagesCruzes['convulsion.jpg'].default,
//         texto: ['Esto nos trae a la segunda variaci??n de la gran cruz canadiense de los ??revuelvemierdas??; la Cruz de Angulo Izquierdo de la Convulsi??n. La 18.5 es una l??nea muy curiosa, porque la quinta l??nea de la puerta 18 es la ??nica que tiene una relaci??n directa con la terapia, y es la ??nica de las 384 l??neas del I-Ching que tiene alguna relaci??n con la pr??ctica psicol??gica. Es tambi??n la ??nica l??nea que menciona al paciente mental. Es decir, que habla expl??citamente de una verdadera inestabilidad mental. De modo que esta es una l??nea muy compleja. El hecho de tratarse de una quinta l??nea, nos dice que la terapia debe ser pr??ctica, porque si no lo es, entonces nunca puede llegar a funcionar. ??C??mo vas a ayudar a alguien que est?? enfermo si no puedes proveerle de algo pr??ctico?', ' En la primera variaci??n de la Cruz de Angulo Izquierdo de la Convulsi??n, la convulsi??n proven??a de la puerta 17 y estaba originada por opiniones y conceptos mentales. Aqu??, en la puerta 18, el proceso es muy distinto, porque esta es una puerta que est?? siempre mirando a ver si descubre algo que no funcione correctamente. Estas son personas que observan constantemente los arquetipos para desafiarlos, dependiendo del sexo que corresponda en cada caso. Aqu?? tenemos al David que siempre est?? dispuesto a desafiar a Goliat. Debido al poder inherente a la quinta l??nea, la misma proyecci??n de la que son portadores basta frecuentemente para derrotar al gigante. Esto no quiere decir que todos los que nacen con esta cruz tengan adjudicado el papel de h??roes, pero la realidad es que ese es un atributo con el que nacen.', 'La quinta l??nea es la responsable de exteriorizar el desaf??o a las normas establecidas, de ah?? que esta se llame la Cruz de la Convulsi??n. No olvides que el ??ngulo derecho no hace esas cosas, a menos que choques directamente con ??l. El ??ngulo derecho no tiene ninguna necesidad de ir por la vida brincando de un lado para otro mientras grita a los dem??s para que le escuchen. Simplemente no hace eso a menos que le est??s pisando. Pero el ??ngulo izquierdo lo har?? de todos modos, ya que est?? dise??ado para sacar todo eso al exterior. O sea, que ser??n ellos los encargados de hacer aflorar toda la convulsi??n y todo el desaf??o al patr??n establecido, no importa cu??l sea el patr??n ni a qui??n se dirige el desaf??o. Nadie est?? a salvo del desaf??o lanzado por estas personas, absolutamente nadie. Hay mucha gente en los pa??ses del tercer mundo, y en los regidos por alguna dictadura, que encontr?? la muerte pronto porque hab??a nacido con una cruz como esta - donde no importaba nada el grado de riesgo que hubiera que asumir, porque estaba determinada a seguir adelante con su desaf??o a la autoridad.  ', 'Algo muy extra??o ocurre en la puerta 18 en la transici??n que hay entre las l??neas 5 y 6, porque cuando al llegar a la sexta l??nea - llamada ??el Buda?? - todo el mundo exclama: "??Oohhh!" Esa sexta l??nea trata del hecho de ser mimado y consentido por los dem??s. No trata de mimar a nadie, ni tampoco de desafiarlo. No se trata de que el desafiado llegue a molestarse. Cuando la l??nea 18.6 desaf??a ingenuamente a la persona m??s poderosa del mundo, ??sta simplemente le da una palmadita en la cabeza y le dice que es muy graciosa. ???! ??Que divertida que eres!" La l??nea 18.6 emana una poderosa fuerza nutritiva que siempre resulta atrayente para los dem??s. "Oh, mira qu?? bien. Qu?? dulce eres." Sin embargo, son personas que traen su propia convulsi??n consigo. Son personas consentidas que frecuentemente consiguen lo que quieren. Mientras la otra persona le daba una palmadita en la cabeza, la informaci??n fue penetrando en ellos. Al fin y al cabo, esta es un aura hecha para penetrar en otros con su informaci??n. Finalmente, el mimado y consentido acabar?? sali??ndose con la suya, como suele. "??Quiero ser el rey!"  ']
//     },
//     {
//         cruz: 'Cruz Angulo Izquierdo de la Convulsi??n 1',
//         img: imagesCruzes['convulsion.jpg'].default,
//         texto: ['Siempre que estemos tratando con la yuxtaposici??n estamos tratando con un destino fijo que sigue su propia l??nea de geometr??a. Pero a partir del momento en que entramos en el ??ngulo izquierdo entramos en el territorio de lo transpersonal, donde las cosas tienen que moverse y circular en las dos direcciones. Hemos llegado aqu?? a la Cruz de Angulo Izquierdo de la Convulsi??n. Los canadienses tienen algunas expresiones verdaderamente ingeniosas, de las cuales Ra ha extra??do una de sus favoritas; revuelve-mierdas. A ??l le hubiera gustado ponerle el nombre de la cruz de los revuelve-mierdas, porque as?? es como es la gente que nace portadora de ella. Es gente que se mete en todo, y que va apretando los botones a todo el mundo. Metiendo su nariz en lo que no les importa crean m??s tensi??n que nadie en todo el planeta. Ese es su trabajo', 'En cada cruz de ??ngulo izquierdo hay siempre dos variaciones, una de quinta l??nea y otra de sexta l??nea. La variaci??n de quinta l??nea de esta cruz es realmente interesante. La l??nea 18.5 es la ??nica de las 384 l??neas del I-Ching que tiene una relaci??n directa con la terapia. La activaci??n de esa quinta l??nea se??ala que, o bien alguien se convertir?? en terapeuta, o que depender?? totalmente de la terapia con otros. Una cosa o la otra. O ayuda al paciente mental, o es el paciente mental de otro. Es evidente que ser portador de esta Cruz de la Convulsi??n puede resultar muy inc??modo y molesto. Su funci??n es levantar los cimientos de las cosas. En ese sentido, la gente que es su portadora puede tener una vida muy inestable e inc??moda, pero su naturaleza tendr?? siempre una cualidad profundamente provocadora.', 'La quinta l??nea es siempre un indicador de tener tratar con las proyecciones ajenas, de modo que la gente siempre alimenta la proyecci??n de que estas son personas que pueden crearles problemas. Esta es gente que tiene la reputaci??n de traer mala suerte, o de atraer las desgracias, porque tiene la tendencia a poner las cosas patas arriba. Sin embargo, revolver la mierda tambi??n puede ser muy saludable. En un pueblo como Sedona, donde la gente ya solo est?? esperando que les llegue la muerte, revolver un poco la mierda puede ser bonito y divertido, adem??s de despertar un poco a toda esa gente que vive aletargada.  ', 'Cuando analic??is cualquiera de estas configuraciones, deb??is reconocer que est??is viendo aspectos gen??ticos de la totalidad. La gente que vive su vida a trav??s de esos componentes, vive su vida en funci??n de un aspecto necesario para la totalidad. Ante eso, nuestros estrechos preceptos morales no significan nada. Puede que no os guste la gente que entra en vuestras vidas para provocaros y alterar vuestro c??modo estatus quo. Sin embargo, pueden que su presencia en vuestras vidas sea tambi??n de un gran valor. Claro que al decirlo, soy muy consciente del hecho de que la amplia mayor??a de seres humanos vive atrapada en las redes del No-ser, y encontrarse en esas condiciones con uno de estos personajes no debe hacer demasiada gracia. Son muy provocadores, y ejercen una enorme influencia sobre los dem??s debido a su capacidad de ponerlo todo patas arriba.  ', 'Llegamos ahora a la sexta l??nea de esta cruz , la m??s dulce acaso, ya que es la l??nea del Buda. Como la puerta 18 procesa la tem??tica de los complejos de Edipo y Electra en la especie humana, podemos asumir que esta es gente que tiene sus problemas con Pap?? y Mam??. A esto hay que a??adir el hecho de que la sexta l??nea es muy antojadiza y le gusta mucho ser mimada. Es decir, que los que vienen al mundo con el Sol de Personalidad en la l??nea 18.6 de la Cruz de la Convulsi??n solamente pueden inmiscuirse y revolver en las vidas de aquellos que se lo consienten. "Oye, por favor, ven a revolverme la vida. Ven y ponlo todo patas arriba. Qu?? bien que lo sabes hacer." ']
//     },
//     {
//         cruz: 'Cruz Angulo Izquierdo de la Distracci??n 2',
//         img: imagesCruzes['distraccion.jpg'].default,
//         texto: ['Es gente que est?? ah?? para distraernos, y nos distraen siempre de un modo que no vayamos en pos de nada que sea de ??ndole progresista. Ese es su viaje, pero ten en cuenta todo lo que se dijo acerca de la puerta 60, ya que esa es precisamente su funci??n; aferrarse a lo viejo de un modo inquebrantable. No puede permitirse el lujo de simplemente saltar y embarcarse en lo nuevo. La puerta 60 no puede dejar nunca atr??s esa limitaci??n, ni perder el sentido de que esa y no otra es la verdadera ley con la que debe cumplir. Siempre estoy en busca de la ley original. Cuando me fueron entregadas estas f??rmulas, pude finalmente darme por satisfecho y quedarme quieto, porque pude ver que todo est?? construido a partir de la ley original. Esa es una gran limitaci??n para m??, y es que aunque conozca la f??rmula binaria, el hecho de que la f??rmula binaria progrese no significa nada para m??. El hecho de conocer la f??rmula binaria lo es todo. Es una f??rmula realmente vieja, porque comenz?? al mismo tiempo que el universo.  ', 'Estas fuerzas de ??ngulo izquierdo te distraer??n para que no vayas en pos de nada que sea progresista, tratando de arrastrarte hacia algo m??s tradicional. Ese es el mayor movimiento que se est?? dando ahora entre las personas de cultos religiosos orientados hacia el cristianismo en Am??rica, cuya posici??n ideol??gica m??s profunda es que las religiones se est??n corrompiendo porque se est??n haciendo cada vez m??s y m??s progresistas. Sienten que se ha perdido el sentimiento religioso original, y quieren regresar a los principios y a las leyes originales. La cruz de las Distracciones te puede alejar mucho del progreso, y ser una fuerza muy dif??cil de tratar cuando intenta finalmente educar a la tribu con esos principios. En ??ltima instancia, es la tribu quien m??s debe preocuparnos en t??rminos evolutivos, y esta cruz es algo que puede llegar a atravesarse en su camino, llev??ndoles a negar el progreso y a mantenerse aferrados a sus ancestrales tradiciones.', 'Sin embargo, al mismo tiempo tenemos que saber reconocer siempre el valor que representan estas fuerzas de la distracci??n. Pueden ser un freno que nos detenga antes de implicarnos en algo nuevo sin mayores consideraciones, lo que siempre puede acabar en un fiasco. Sin ellas, nada m??s f??cil que abrirse a esos extra??os seres con cascos de hierro que llegan navegando sobre blancos objetos flotantes, sin caer en la cuenta de que pueden traer la s??filis con ellos, como as?? ocurri??. Es decir, que a veces es mejor decir: "Espera un momento, espera un momento. Distraig??monos un poco aqu?? con nuestras viejas tradiciones, y no nos dejemos cegar y arrastrar por esa nueva posibilidad que surge ante nosotros." O sea, que hay un aspecto de la distracci??n que puede tener mucho valor como ??rea de protecci??n y de defensa. No obstante, si te gusta el progreso, estas personas se convertir??n en un dolor de cabeza para ti. Si eres alguien como yo, que ense??a la fusi??n de la espiritualidad, este tipo de personas se puede sentir inc??modas contigo. Quieren aferrarse a su dogma y poder seguir viviendo con esas tradiciones.  ', 'Es un chiste, porque lo que yo traigo con mi mensaje es una s??ntesis. Si no existieran estas personas que viven aferradas a todas esas cosas, no podr??a tener a los estudiantes que tuvieran las bases necesarias para este conocimiento. La amplia mayor??a de estudiantes que he encontrado en mi trabajo como profesor ten??an alg??n grado de conocimiento de astrolog??a, del I-Ching, de la C??bala, del sistema de Chacras. o de cualquier otro que viniera al caso. Ese es el fruto de la labor de tantos tradicionalistas aferr??ndose a esos caminos viejos, por mucho que yo me r??a de ellos y por mucho que los ridiculice. Es obvio que, en ese sentido, esta es una cruz que puede tener un tremendo valor. Al mismo tiempo, sin embargo, tan frecuentemente como me encuentro a aquellos que han asimilado alguna ense??anza tradicional y est??n preparados para lo nuevo, est??n preparados para la s??ntesis, tambi??n me he encontrado con gente de este tipo que es absolutamente incapaz de abandonar su pel??cula por un solo momento. No te puedes hacer una idea de la cantidad de astr??logos con los que me encontr?? que eran incapaces de dejar de ser astr??logos - esa era su pel??cula, y no pod??an abrirse a otra. Est??n aferrados y encerrados en su tradici??n, y les resulta muy duro tener que salir de ella. De modo que es muy importante tener en cuenta la necesidad de ver estas cosas con un poco de equilibrio. Necesitamos de la influencia de ese tipo de fuerzas, pero al mismo tiempo pueden surgir muchas dificultades a la hora de intentar llevarnos a alg??n lugar de fusi??n y de s??ntesis.  ']
//     },
//     {
//         cruz: 'Cruz Angulo Izquierdo de la Dualidad 1',
//         img:  imagesCruzes['dualidad.jpg'].default,
//         texto: ['Al pasar al ??ngulo izquierdo del hexagrama entramos en la Cruz de Angulo Izquierdo de la Dualidad, y con la transpersonalidad surge tambi??n la capacidad de solventar la dificultad de la definici??n partida. Estos seres estar??n permanentemente en b??squeda del encuentro con aquellos que les puedan ayudar a realizarse a trav??s de esa interacci??n. Esos ser??n los procesos que hagan de puente para que puedan integrarse en la experiencia estos dos aspectos tan distintos de la existencia humana.  La importancia de la relaci??n natural que hay entre el individuo y la comunidad tribal es enorme. Es un tipo de relaci??n que el colectivo nunca llega a entablar con los miembros de la tribu. La tribu no puede dejar nunca de estar abierta a la mutaci??n individual. Eso no significa que est?? siempre dispuesta a abrirle las puertas a cualquier mutaci??n que aparezca, pero la tribu est?? siempre disponible para la mutaci??n porque sabe que su pozo gen??tico tiene unos recursos limitados, y no puede dejar de abrirse a las posibilidades de sangre nueva en las venas de sus miembros. De ese modo, el individuo siempre encuentra alguna oportunidad para provocar una mutaci??n en el seno mismo de la tribu. Eso convierte esta Cruz de Angulo Izquierdo de la Dualidad en un instrumento muy importante para el mundo, ya que estos son los seres que tienen la capacidad de provocar una mutaci??n en la tribu misma. Todo aquel que sea capaz de llevar la mutaci??n (el cambio) a la tribu (el grupo) ser?? reconocido como un instrumento de mucho valor.', 'La tribu se sentir?? muy impresionada por lo hacendosa e industriosa que es esta cruz en particular, y siempre se alegrar?? de sacar partido de su energ??a de Generador Manifestante. No olvides que el canal 37/40 se encuentra realmente atascado, ya que es un elemento proyectado que busca la posibilidad de llegar a alg??n tipo de acuerdo con otros. Estar?? dispuesto a pactar con la mutaci??n siempre que sea mutuamente beneficiosa. Es decir, que se trata de gente muy importante para nuestro proceso, que act??a como puente para la reuni??n de la tribu con el individuo.', 'A pesar de su naturaleza transpersonal, las personas de esta cruz sufren debido al mismo dilema interno de la yuxtaposici??n. Dicho de otra forma, sufren todav??a debido al dilema entre la parte individual que hay en ellos (que dice siempre: "Dejadme en paz. Yo voy a lo m??o.") y la parte tribal que tambi??n albergan (que dice: "Jes??s, c??mo me gustar??a quedarme a cenar contigo."). Siempre se encuentran con este conflicto b??sico en la ra??z de su experiencia existencial.  ']
//     },
//     {
//         cruz: 'Cruz Angulo Izquierdo de la Dualidad 2',
//         img: imagesCruzes['dualidad.jpg'].default,
//         texto: ['En esta cruz hay un verdadero dilema interno. Como ya qued?? descrito en la primera variaci??n que vimos de ella, es una cruz que conlleva el canal 34/20 - el Sacral conectado a la Garganta - y que vivir??, por lo tanto, la vida al modo de un Generador Manifestante. Sin embargo, est?? definici??n est?? desconectada de la definici??n emocional de su ego. Es decir, que sus portadores necesitan encontrar alguna manera de integrar esos dos aspectos de la dualidad, y que buscar??n hacerlo a trav??s de la comunidad.  ', 'A trav??s de su Garganta, su parte individual (34/20) dice: "No quiero que nadie me influya. Quiero que me dejen tranquilo. Estoy muy ocupado, y no s?? por qu?? tengo que asistir a esa maldita fiesta de esta noche." Aunque acude a rastras a la fiesta, resulta que luego el 34/20 no se siente tan mal. Resulta que hasta se divierte y todo, porque las auras de los dem??s establecen los puentes que necesita para integrar su canal 40/37 con su otra definici??n, y eso le permite vivir y sacar al exterior todo lo que lleva dentro. Sin embargo, en cuanto sale de la fiesta y regresa a su apartamento o a su lugar de trabajo, esa Garganta individual seguir?? repitiendo las mismas cosas: "Me gusta estar solo. No, decididamente no me gustan las fiestas. Las odio." Si pudi??semos ver las fotos del evento, ver??amos que se lo acaba de pasar muy bien, pero si alguien se acerca y le dice: "Mira, vamos a montar esta fiesta." R??pidamente le responder??: "A m?? no me gustan las fiestas. No quiero que me molesten m??s con eso." O sea, que se da un fen??meno realmente extra??o en las contradicciones internas que experimentan estas personas', 'Una de las cosas m??s extra??as acerca de la gente de la Cruz de Angulo Izquierdo de la Dualidad, es que tiene amigos, pero sin saber nunca por qu??. Es el mayor chiste de toda su vida. Cuando se lo digo durante las lecturas, me miran y dicen: "Uy, ya lo s??, no s?? lo que quieren de m??." No tienen la m??s remota idea de por qu??. Simplemente van zumbando de un lado a otro: "Estoy muy ocupado, estoy muy ocupado."  ']
//     },
//     {
//         cruz: 'Cruz Angulo Izquierdo de la Educaci??n 1',
//         img: imagesCruzes['educacion.jpg'].default,
//         texto: ['La articulaci??n encuentra su m??xima expresi??n al llegar a la Cruz de Angulo Izquierdo de la Educaci??n. Ese movimiento natural comienza en el reconocimiento a trav??s del ??ngulo derecho de que no podemos ser inocentes, de que debemos ir en pos del mundo, y, al hacerlo, aprender a manejar su forma. Pero la capacidad de gobernar, en s?? misma, necesita pasar por una etapa previa hasta que finalmente alcanza un lugar en el que est?? preparada para educar a otros, y ese lugar lo encontramos al llegar aqu??. La educaci??n a trav??s de la puerta 12 est?? vinculada a la actividad del conferenciante, muy distinta a la actividad desarrollada por el profesor a trav??s de la puerta 11. El ??ngulo izquierdo de las cruces siempre aparece en dos variantes distintas. Cuando lleguemos a la segunda variante de esta cruz, el Sol estar?? en la puerta 11, y veremos un tipo muy distinto de educaci??n.  ', 'En la educaci??n de la puerta 12 el instructor te habla a ti, no est?? compartiendo nada de un modo impersonal. Te est?? dando la oportunidad de tener una audiencia privada, te est?? cantando una canci??n, lo que sirva de medio de expresi??n en cada caso. Lo importante es que t?? no est??s implicado en ese proceso. Eso requiere que seas lo que la puerta 12 est?? buscando constantemente - alguien receptivo, provisto de la Gracia de la puerta 22, dispuesto a absorberlo todo y a abrirte al potencial de esa mutaci??n. "Eduquemos a las masas con eso", es todo lo que les gustar??a o??r salir de tu boca.  ', 'Un comentario muy interesante que se public?? en el Herald Tribune Internacional ven??a de boca de un hombre que se retiraba de la presidencia de Fondo Monetario Internacional. Dec??a as??: "La labor desarrollada por el Fondo Monetario Internacional es la mejor cosa que les pod??a pasar a los ni??os de este mundo". Tiene raz??n, por supuesto que tiene raz??n. Es una de esas cosas que es preciso reconocer, y es que sin nuestra capacidad de reunir los recursos que necesitamos - recursos materiales - y de invertirlos luego en educaci??n para los m??s peque??os, las oportunidades que la vida les puede ofrecer ser??n necesariamente limitadas. A mayor educaci??n, mayor tambi??n el abanico de oportunidades que te pueden salir al camino. De eso es de lo que trata esta Cruz de la Educaci??n. Con la formaci??n adecuada, las probabilidades de poder participar en el crecimiento y en la evoluci??n de la sociedad son mucho mayores. Te sentir??s m??s seguro en tu proceso, y recibir??s tambi??n mayores recompensas por tu contribuci??n']
//     },
//     {
//         cruz: 'Cruz Angulo Izquierdo de la Identificaci??n 1',
//         img: imagesCruzes['identificacion.jpg'].default,
//         texto: ['Entiende, por favor, lo distinto que es ese proceso cuando es experimentado a trav??s del ??ngulo izquierdo del hexagrama. La l??gica es un proceso colectivo, y en esta cruz participan tres puertas que se integran en el Circuito del Entendimiento: la puerta 63, donde comienza todo el proceso de razonamiento l??gico a trav??s de la presi??n de las dudas; la puerta 9, que contiene la energ??a potencial para el trabajo detallado, y que es parte del formato l??gico; y finalmente la puerta 16, donde se ubica el Sol de Personalidad de esta cruz, y a trav??s de la que se manifiestan las habilidades l??gicas del cuerpo. De modo que estamos tratando aqu?? con una cruz que encarna unas habilidades l??gicas muy poderosas.  ', 'En el ??ngulo izquierdo, la Cruz de la Identificaci??n tiene la funci??n de lograr que otra gente se identifique con el experimento, para de ese modo lograr acceso a sus recursos energ??ticos. Esta es la gente capaz de encontrar a los inversores que financien los recursos y pongan a su disposici??n la energ??a necesaria para llevar a cabo el experimento. Esta es una de las mayores tragedias, de las cosas m??s tristes que siguen ocurriendo cada d??a, ya que tenemos a 9 personas, o a 100 personas, o incluso a 1000 personas, compitiendo por los mismos d??lares para invertir en sus investigaciones. Al final los d??lares los recibir?? alguno de los muchos que han presentado su solicitud, y puedes estar seguro de que la quinta l??nea sabr?? c??mo hacerse con m??s d??lares que nadie. Puede que su experimento acabe siendo un desastroso fracaso, ya que puede que detr??s de todo no haya m??s que una proyecci??n suya. Pero la quinta l??nea sabe c??mo seducir a otros, ese es su poder natural, y sabe c??mo lograr que otros se identifiquen con el plan que ha desarrollado, cualquiera que sea el experimento que desee abordar. Eso, en todo caso, es lo de menos. ', 'En la actualidad encontramos a este tipo de personajes entre quienes te aconsejan que inviertas en alg??n mercado financiero. Eso no significa que te vayas a hacer rico con esa inversi??n, sino que puede solamente significar lo bueno que es el otro a la hora de conseguir que le conf??es tu dinero, porque ha sido capaz de lograr que te identificaras con la promesa inherente de la recompensa. Debido a que son personas que incorporan en su cruz aspectos de la Cruz de la Conciencia (el eje de las puertas 63 y 64), pueden resultar muy inspiradores para los dem??s. Ten en cuenta que tener activada alguna de las puertas del Centro de la Cabeza puede ocasionar muchos quebraderos de cabeza a su portador, eso ya lo sabemos. Pero eso no significa que no sea inspiradora para los dem??s. As?? es como son las cosas. El funcionamiento mec??nico de la vida incorpora esas iron??as y paradojas. Cuando te encuentres a alguien con esta cruz de ??ngulo izquierdo - con todo el poder de seducci??n que le es inherente - no olvides que se trata de alguien capaz de conseguir que te identifiques con sus habilidades l??gicas y te sientas atra??do por el experimento que dice representar. Adem??s, es alguien que te puede inspirar. Lo m??s f??cil es que acabes diciendo: "Oh s??, claro que me puedo identificar con eso. Oh s??, eso est?? muy bien. ??D??nde tengo que firmar?" Ver??s lo r??pido que te contesta: "Aqu?? abajo, por favor. Muchas gracias".  ']
//     },
//     {
//         cruz: 'Cruz Angulo Izquierdo de la Identificaci??n 2',
//         img:  imagesCruzes['identificacion.jpg'].default,
//         texto: ['Esto nos lleva a la segunda variaci??n de la Cruz de Angulo Izquierdo de la Identificaci??n. Aunque el mecanismo de la identificaci??n como tal est?? enraizado en la puerta 16, cuando el Sol de Personalidad est?? en la puerta 9, la identificaci??n es con la aplicaci??n de la energ??a al detalle. Esta es gente que rechazar?? unirse a ning??n proyecto, a menos que se disponga de apoyo suficiente para llevarlo a cabo. Es decir, que no se implicar?? hasta no estar seguro de disponer de recursos suficientes como para que el despliegue de su energ??a tenga un cierto sentido. Es muy improbable que logres la adhesi??n de alguien nacido con la Cruz de Angulo Izquierdo de la Identificaci??n para un negocio que acaba de comenzar, con la sola promesa de una comisi??n y participaciones a cobrar en un plazo de diez a??os. ', 'Eso no funcionar?? con la gente de esta cruz, porque su energ??a solamente est?? disponible cuando puede ver la existencia de recursos desde el primer momento. Es gente que se identifica f??cilmente con la posibilidad de un trabajo estable, o con algo donde no tiene que preocuparse de si cobrar?? su n??mina a fin de mes o no.  ', ' Identific??ndose con algo estable, estas personas logran reducir la presi??n mental de las dudas y la confusi??n, porque eso es lo que sienten y experimentan constantemente desde el nivel inconsciente de su dise??o. Esta no es una cruz de ??ngulo izquierdo que se vaya a dejar tentar f??cilmente a implicarse en alguna novedad, o que vaya a prestarle demasiada atenci??n a la l??gica de la que otros dicen que causar?? furor en el futuro. Lo que esta cruz quiere es seguridad, y apostar por algo que resulte fiable, identific??ndose siempre con cosas que no fomentan dudas en lo que hace - as?? es c??mo logra que sus habilidades l??gicas florezcan y emerjan en el exterior. Cuando se sienten seguras, las personas de esta cruz son muy trabajadoras. Sin embargo, cuando no disponen de esa seguridad, y tienen preocupaciones acerca de la supervivencia de su empresa, no son el tipo de fuerzas que arriman el hombro para salir del atolladero. En casos as??, lo m??s probable es que pongan las manos en el volante de su coche y partan a buscarse la vida en otra parte.  ']
//     },
//     {
//         cruz: 'Cruz Angulo Izquierdo de la Incertidumbre 1',
//         img:  imagesCruzes['incertidumbre.jpg'].default,
//         texto: ['Al llegar a la Cruz de Angulo Izquierdo de la Incertidumbre, la idea de hacer una contribuci??n individual comienza a desmoronarse porque trae consigo el miedo enraizado en las mec??nicas del sistema emocional. Ese es el miedo arraigado en la puerta 55, el miedo a no lograr nunca salir de la oscuridad, el miedo a que - no importa cu??nto nos civilicemos - nunca nos libramos del todo de la bestia humana que llevamos dentro. Esa bestia tiene sus ra??ces en el poder??o de la puerta 59, que sigue llam??ndonos a encontrar nuestro propio esp??ritu a trav??s de la sexualidad', 'En esta Cruz de Angulo Izquierdo de la Incertidumbre tenemos las ra??ces de algo tan extra??o como es el sistema de dotes. Todas las dotes han nacido de las mec??nicas de esta cruz de encarnaci??n, ya que hay una contribuci??n material que debe ser hecha para asegurar la intimidad y el esp??ritu adecuados. Ya sabes: "si me das 75 ovejas y tu hija me doy por satisfecho". De aqu?? es de d??nde procede toda esa tradici??n, para poder manejar toda la incertidumbre acerca del porvenir que emana de la puerta 55, una puerta que como veremos est?? integrada en la cruz de encarnaci??n del F??nix Durmiente. Por lo dem??s, sabemos que la puerta 55 es una puerta de ??nimos muy fluctuantes, y con el a??adido de que tres de las cuatro puertas de esta cruz son de naturaleza individual, lo que traer?? consigo tambi??n altas dosis de melancol??a a la vida de estas personas.  Aqu?? el ser humano se siente inundado de tanta tristeza, y ya no dispone de la puerta 14 que le recuerda que el dinero no lo es todo. En su lugar queda solamente la llamada desesperada de la puerta 14 que no deja de decirnos: "La riqueza nos pertenece, y tenemos que encontrar la manera de hacernos con ella." M??s que una simple b??squeda del propio esp??ritu a trav??s de la sexualidad - que es lo que ten??amos en el primer cuarto - lo que tenemos aqu?? es la necesidad de generar m??s. Aqu?? emerge la necesidad de disponer de una bonita casa, con un bello jard??n adosado cerrado por una bella verja. Surge aqu?? un factor civilizador que simplemente se sobrepone a lo que no es m??s que un impulso sexual, lo que nos dice que de aqu?? tiene que nacer una contribuci??n de ??ndole espec??ficamente material. Claro que el plano m??s inconsciente de nuestra naturaleza, la incertidumbre est?? basada en la pregunta de si tienes la pareja o socios adecuados para ese viaje o no']
//     },
//     {
//         cruz: 'Cruz Angulo Izquierdo de la Industrializaci??n 2',
//         img: imagesCruzes['industrializacion.jpg'].default,
//         texto: ['Esta es la segunda variante de la Cruz de Angulo izquierdo de la Industrializaci??n, a 180?? de donde la vimos la primera vez, a trav??s de la quinta l??nea de la puerta 30. El mayor problema con que se encuentra la Cruz de la  Industrializaci??n proviene del Canal de Carisma (20/34) integrado en su propia definici??n inconsciente, que es un canal donde los pensamientos y la conciencia deben convertirse en hechos. Sin embargo, no hay conciencia impl??cita adherida a la naturaleza de este canal, lo que convierte el poder??o natural del canal 20/34 en un elemento peligroso si se lo maneja mal. Al fin y al cabo, estamos hablando de gente con la naturaleza de un Generador Manifestante. Si responde desde su Sacral a las cosas en las que se involucra, entonces puede sumergirse tranquilamente en cualquier actividad, pero esta es gente que necesita desesperadamente ser guiada por otros en el despliegue que hace de su propia energ??a vital. Sin esos gu??as, ese carisma no llegar?? a brillar nunca. Esa es la raz??n por la que muchas figuras carism??ticas de la historia ten??an alguna especie asesor en la sombra, alguna especie de fuerza detr??s de ellas que les hac??an las veces de gu??a. ', 'La primera l??nea que nos encontramos en esta Cruz de Angulo Izquierdo de los Compromisos es la 29.5, que es una l??nea dif??cil de manejar por ser la l??nea del fracaso. Esta es la l??nea en la que los compromisos hechos acaban apil??ndose hasta que uno ya no es capaz de soportar a carga. Est??n condenados a finalmente fracasar y a incumplir las promesas que se hicieron. O sea, que la gente que nace con esta cruz viene al mundo para llevar esta carga. Sin los gu??as adecuados, todo lo que encuentra en su vida cae dentro de la categor??a del desastre. Sin esos gu??as, estas personas se adentran vociferando en el torbellino de la vida, exclamando sin cesar: "Ahora estoy muy ocupada. Ahora estoy muy ocupada. Ahora estoy muy ocupada", hasta que todo eso simplemente les conduce al colapso f??sico o ps??quico.  ', 'Como cualquiera que haya trabajado profesionalmente con el Dise??o Humano, me he encontrado con muchas personas que eran portadoras del canal 20/34. Al fin y al cabo, este es uno de los tres canales que se forman a partir de oposiciones en el Mandala zodiacal. De ah?? que sea tambi??n una de las definiciones que con mayor frecuencia podemos encontrar. Despu??s de todo, los dioses nos han creado para ser Generadores Manifestantes - estamos aqu?? para responder a la vida, y para trabajar luego como si nos poseyera el diablo. Claro que, si no nos gu??an, entonces no sabemos qu?? hacer. La gente de esta cruz puede ocupar su vida con nada, con nada en absoluto, y estar tan ocupada con tanta nada que su vida puede acabar desintegr??ndose por completo.  ', 'Si tienes en tu vida a alguien de estas caracter??sticas - y es seguro que los tendr??s, o que acabes por encontrarte con ellos - es preciso que comprendan bien la naturaleza de su dise??o, su tipo y su autoridad, de modo que puedan satisfacer el verdadero prop??sito de su cruz de encarnaci??n. Sobre estas personas se proyecta que son capaces de llevar la carga de guiar nuestra evoluci??n hacia la era industrial y tecnol??gica y todas esas cosas. Estando en la ra??z de ese proceso, estas son personas que saben arrimar el hombro, ya que han nacido para comprometerse a realizar un cierto tipo de trabajo. Pero eso no significa que hayan nacido para hacer cualquier cosa, ni tampoco han nacido para hacer muchas cosas al mismo tiempo, porque de ese modo su compromiso tampoco ser??a productivo. Lo que es esencial es que sepan reconocer la actividad que es correcta para ellas.  ', 'Recuerda que un Generador - el 70 % de la poblaci??n humana del planeta son Generadores - que no vive de acuerdo con su naturaleza expande una vibraci??n que no aporta nada a nadie, tan solo incomodidad, frustraci??n y el sentimiento general de que las cosas no funcionan bien. En el momento en que somos capaces de hacer que fuerzas de este tipo sintonicen con su naturaleza innata, de modo que sepan para qu?? est??n aqu?? y c??mo entrar en las situaciones de la vida, entonces las cosas se hacen y la vida transcurre apaciblemente.  ']
//     },
//     {
//         cruz: 'Cruz Angulo Izquierdo de la Industrializaci??n 1',
//         img: imagesCruzes['industrializacion.jpg'].default,
//         texto: ['Antes de proseguir, quiero recordar la historia tal y como la hemos contado hasta ahora. Miramos hacia atr??s, y lo que vemos nos pone nerviosos. Miramos hacia delante, y podemos reunirnos con nuestros aliados a afilar las espadas y todo eso. Luego nos dejamos atrapar por las expectativas acerca de c??mo todo eso deber??a traernos un ??xito continuado y perpetuo. Llegados a este punto es preciso entrar a fondo en materia y ocuparnos de todos los detalles pertinentes, lo que significa que vamos a estar muy ocupados. Esta Cruz de Angulo Izquierdo de la Industrializaci??n es una de las cruces m??s activamente ocupadas de cuantas nos vamos a ir encontrando a medida que avancemos.   ', 'Al encontrar a alguien que haya nacido con esta cruz nos encontramos ante el dinamo de un motor. Esta gente no para nunca. Son tambi??n los que est??n diciendo constantemente a los dem??s que tampoco pueden parar. Es decir, que aqu?? tenemos operando el programa instintivo de los insectos. Todos tenemos que llevar nuestra carga y trabajar. Todos tenemos que encontrar alguna ocupaci??n. Si no est??s ocupado, y hay cerca alguien que sea portador de esta cruz, oir??s siempre esta pregunta: "??Qu?? haces ah?? sentado sin producir nada?" ', 'Es importante no dejar de tener en cuenta que esta gente no sabe necesariamente si la actividad que est?? llevando a cabo es correcta para ella. Es m??s, raramente hace las cosas por propia motivaci??n. Lo que ocurre es que se dan cuenta de que, si no nos ocupamos nosotros, entonces las cosas no pueden progresar, y esa acaba siendo toda su motivaci??n en esta vida. Todo lo relacionado con nuestra capacidad de sobrevivir depende de nuestra habilidad para reunirnos en torno a un prop??sito com??n, y de integrarnos unos con otros m??s profundamente para echar abajo las barreras que nos separan.  ', 'La manera natural en que la evoluci??n mantiene unidos a los seres humanos es a trav??s de sus ocupaciones, pero esa actividad no deja de ser causante del sentimiento de uni??n, y de una uni??n que est?? orientada hacia un objeto del deseo. Poni??ndolo en palabras de esta cruz: "Estoy ocupado porque tengo la expectativa de que mi negocio tenga un futuro pr??spero." En consecuencia, si todos nos ocup??ramos de hacer algo, todo deber??a progresar m??s f??cilmente. Bueno, es de todos sabido que no es as??. El simple hecho de estar ocupado no garantiza la productividad, sino que s??lo demuestra actividad fren??tica. A veces parece que un Generador Manifestante que no para de moverse en su silla est?? haciendo algo, pero lo ??nico que est?? haciendo en realidad es calentar la silla.  ', 'La puerta 30 nos confrontar?? con los dilemas m??s profundos en la evoluci??n de la experiencia humana cuando los temas globales de la especie sean filtrados a trav??s de ella - dentro de aproximadamente 700 a??os. En la evoluci??n natural de nuestra especie, el ??mbito experimental del deseo tiene que agotarse, y tambi??n tienen que ser agotadas todas las v??as que a??n no han sido experimentadas para que nuestro reconocimiento colectivo no se siga alimentando de vanas expectativas. No obstante, el ??mbito de nuestras expectativas no puede agotarse hasta que no dispongamos de patrones concretos y verificables que nos proporcionen la seguridad suficiente para poder dejar de especular. M??s importante todav??a que eso es el hecho de que es necesario llegar a un punto en nuestra evoluci??n en el que todos universalmente podamos gritar: "Ya hemos estado ah??. Eso ya lo hemos hecho." El objetivo final del camino experimental es que, ante el ofrecimiento de todo un amplio cat??logo y repertorio de experiencias, la puerta 35 mire esa proposici??n y pueda decir: "Eso ya lo conozco, y no necesito volver a implicarme con nada de eso. No es preciso que vuelva a alimentar expectativas y a dejarme atrapar por el deseo." ', 'Con la puerta 30 integrada en ella, podemos ver en esta cruz el nacimiento del deseo sexual como un tema b??sico en la experiencia humana. Hemos podido comprobar c??mo va precedida de la puerta 49, que es la puerta del casamiento y del divorcio. Ve??amos c??mo uno de los principios b??sicos de los que partimos es de la necesidad de matar por proteger a nuestros seres queridos - tenemos que alimentar a nuestros hijos, a nuestra pareja, como sea en cada caso. Ese era el punto de partida, y es muy importante tomar nota de que mientras que el matrimonio qued?? establecido previamente en la puerta 49, el deseo sexual no emerge hasta alcanzar el ??mbito de la puerta 30. Es decir, que el v??nculo matrimonial es una cosa, y el sexo, o el deseo sexual, es otra.  ', 'De modo que tenemos dos elementos que irrumpen muy pronto en nuestra evoluci??n humana. La primera es la necesidad de convivir en comunidades, ya que necesitamos relacionarnos para aparearnos. De ah?? saldr??n las estructuras sociales a las que finalmente daremos el nombre de matrimonio. Pero al mismo tiempo vemos que ya en el paso siguiente hace su aparici??n en deseo: "S??, el matrimonio est?? muy bien, pero ??has visto alguna vez a la chica rubia del pueblo de al lado? ! ??Eso s?? que es una mujer!" El deseo irrumpe de lleno en la escena y dice: "Espera un momento, y ??qu?? me dices de tal experiencia? Yo nunca he estado con una mujer rubia." Hay todo un abanico de experiencias que se abren a partir de la aparici??n del deseo, y eso abre las puertas a la poderosa irrupci??n de la sexualidad.  ', 'A medida que avanzamos en la Cruz de Angulo Izquierdo de la Industrializaci??n nos acercamos hasta su sexta l??nea - la sexta l??nea tiene un potencial inherente para la transformaci??n m??stica de la especie. Este es un potencial para la metamorfosis que se va agudizando momento a momento y que culminar?? alrededor de 2027, cuando podremos comenzar a ver la naturaleza de esa mutaci??n encarnada en los ni??os que nazcan a partir de ah??. Cuando eso ocurra, cambiar?? completamente la naturaleza de lo que hoy conocemos por industria, y eso es algo de una importancia extrema. Tal y como vivimos hoy en d??a, esta Cruz de la Industrializaci??n podr??a llamarse la Cruz de la Esclavitud, ya que sus portadores son los mayores esclavos que caminan sobre la tierra. "Seamos industriosos. Ser?? industrioso trabajando para ti. Necesito estar ocupado y producir?? industriosamente para ti. Por cierto, ??te importa que hagamos el amor mientras produzco afanosamente para ti?" Todo eso forma parte de un mismo proceso. La naturaleza de la industria, tal y como la conocemos hoy, la naturaleza de las ocupaciones humanas cambiar?? por completo en el momento en que las personas que nazcan portadoras de esta Cruz de la Industrializaci??n reconozcan que no son Manifestadores, sino que son Generadores Manifestantes.  ', 'Siempre que las puertas que componen una cruz formen una definici??n en el Cuerpo Gr??fico del Rave, sabemos que esa definici??n tiene un tremendo impacto en nuestras vidas. El canal 20/34 representa una de las fuerzas m??s poderosas que tenemos en todo el planeta, ya que es la representaci??n m??s pura de la estructura de un Generador Manifestante. Debido a que se forma a partir de una oposici??n en el Mandala zodiacal, la definici??n de este canal es muy com??n en la especie humana. Aqu?? tenemos la profunda necesidad individual de sumergirnos en alguna actividad. Sin embargo, sabemos que un Generador Manifestante que intenta jugar el papel de un Manifestador s??lo encuentra resistencias a su alrededor. Debido a esas resistencias, el desarrollo planetario de la industria - con todo lo que la industria podr??a hacer por nosotros - se ha visto ralentizado hasta un punto que nos quedar??amos perplejos s??lo con imaginar lo que ser??a posible. Estamos todos impresionados de los tremendos avances que han tenido lugar en los ??ltimos 100 a??os, y de c??mo todo empieza a ir m??s deprisa, pero la realidad es que ese ritmo de crecimiento siempre hab??a estado a nuestro alcance. A medida que vamos educando a los Generadores Manifestantes para que respondan a las cosas en lugar de intentar iniciarlas, en lugar de intentar manifestarlas por ellos mismos, entonces el poder??o industrial que emana de su despliegue energ??tico puede dejar de ser esclavizante para comenzar a ser puramente productivo. Entonces es cuando podremos comenzar a ver emerger el valor m??s elevado que habita y mueve estas fuerzas humanas.']
//     },
//     {
//         cruz: 'Cruz Angulo Izquierdo de la Migraci??n 1',
//         img: imagesCruzes['migracion.jpg'].default,
//         texto: ['Con el tr??nsito del Sol hacia la quinta l??nea, marcando el inicio del ??ngulo izquierdo, nos encontramos siempre con el mismo problema. No hay nada m??s duro que intentar ser amable con otro ser humano, porque tienen la marcada tendencia a ser simplemente horribles. Y no lo digo en broma, o no s??lo. Si piensas en toda la gente que has conocido a lo largo de toda tu vida, ??con cu??nta desear??as realmente poder volver a hablar? Aunque haya todo tipo de gente moralizante que quiere hacernos sentir inc??modos con eso, la realidad es que es un mecanismo que forma parte de nosotros. La quinta l??nea de la puerta 37 se llama Amor. Todo el mundo dice al verla: "Oh, qu?? bonito." Pero el detrimento del amor es el odio, y el uno se puede convertir en el otro con mucha facilidad.  ', 'Alguien nacido con la Cruz de Angulo Izquierdo de la Migraci??n dice: "No quiero vivir m??s en esta comunidad. No puedo soportar m??s a esta gente. Me voy a vivir a otra parte." As?? es como evoluciona la planificaci??n. Ah?? est?? toda esa gente ocupada en la planificaci??n de todo tipo de proyectos comunitarios, y una vez est?? todo hecho, la pregunta es ??qu?? hacer ahora? Entonces hay que convivir con toda esa gente. Mientras la comunidad estaba siendo construida todo iba sobre ruedas. Todos estaban ocupados en la construcci??n de la comunidad, y era todo fant??stico. Pero cuando la comunidad est?? terminada, y tienes que ser el vecino de esas personas, entonces las cosas cambian. Podemos ver un reflejo de este mecanismo en lo que ocurre en los movimientos religiosos cuando se produce un cisma entre sus seguidores. Todos eran felices bajo el mismo techo mientras la casa estaba en construcci??n, pero luego tienen que vivir juntos. La construcci??n de la casa les mantuvo unidos. Esa es la funci??n de la planificaci??n y es fant??stica como tal. Luego, la convivencia les lleva a tener que decir: "No te soporto m??s. No quiero o??rte m??s. Nos vamos a otra parte. Construiremos otra en otro lugar." Am??rica fue fundada por esta cruz, por los puritanos que la representaban, que no eran otra cosa que fan??ticos religiosos. "Emigramos, nos vamos de aqu??, no queremos estar m??s aqu?? con vosotros, porque la dependencia emocional convierte el amor en odio." Ese es el mensaje b??sico de la 37.5.  ', 'Todos los pactos se rompen cuando se ven confrontados con el mecanismo de la proyecci??n, y as?? es c??mo se espera que suceda. Hay una escena maravillosa en la pel??cula titulada ???Matrix???, en la que uno de esos tipos del ordenador est?? interrogando a Nero y cont??ndole lo desagradables que son los seres humanos. Al relatar lo que hacen los seres humanos, dice: "Conquistan un lugar, y, cuando acaban con ??l, se van a otra parte destroz??ndolo todo, y..." Finalmente llega a decir que: "Los humanos son un virus asqueroso." En esta cruz tenemos ese virus del que hablaban en la pel??cula. Los humanos nunca nos hemos dado por satisfechos con quedarnos sentados en nuestro propio valle. Siempre hay alg??n miembro del valle que no quiere quedarse a vivir all??, pero que tampoco quiere partir s??lo. As?? que se queda refunfu??ando contra todo, intentado que otros comprendan la necesidad de salir de all?? y se dejen finalmente arrastrar hacia el comienzo de una nueva ramificaci??n. Las hormigas hacen ese tipo de cosas todo el tiempo, pero lo convertimos en un drama cuando lo hacemos los humanos. Las hormigas simplemente se levantan y dicen: "Nos vamos." Pero nosotros nos enemistamos con los seres queridos que dejamos atr??s - y ahora les odiamos.', 'Reflexiona acerca de la transici??n que tendr?? lugar cuando la mutaci??n fije la fluctuaci??n de la ola en la puerta 55. Hay una extraordinaria cantidad de cosas que van a cambiar en el funcionamiento de nuestra conciencia y percepci??n. Al fin y al cabo, hasta ahora, nuestro modo de pactar y de llegar a acuerdos, nuestro modo de hacer el amor, incluso nuestro modo de enamorarnos ha estado basado en el motor emocional que carece de acceso a la verdad en el presente. Ha sido un proceso ca??tico desde siempre, pero estamos llegando a un punto en el que ese caos va a ser aquietado, y eso cambiar?? muchas cosas en nuestro modo de establecer los pactos. ']
//     },
//     {
//         cruz: 'Cruz Angulo Izquierdo de la Migraci??n 2',
//         img: imagesCruzes['migracion.jpg'].default,
//         texto: ['Llegamos ahora al ??ngulo izquierdo del hexagrama, y con ello a la segunda variante de la Cruz de Angulo Izquierdo de la Migraci??n. En el primer cuarto, la primera variante de esta cruz ten??a una profunda conexi??n con nuestras tendencias agresivas y con nuestra necesidad - por Dise??o - de expandirnos constantemente, de pasar de este valle al siguiente, de seguir conquistando y apropi??ndose de todo. En esa primera variante, el Sol de Personalidad estaba en la puerta 37. Aqu??, con el Sol en la puerta 40, tenemos el lado opuesto de esa tem??tica. Muchos de los ghettos que exist??an en Europa del Este durante los primeros a??os del nazismo se negaron a emigrar cuando la emigraci??n era realmente la ??nica alternativa que ten??an. Este es el otro lado del tema de la migraci??n, ya que aqu?? no se emigra impulsado por la necesidad o deseo de conquista, sino como un medio para escapar o huir de algo', 'Hay dos formas de migraci??n que determinaron desde siempre los movimientos de las diferentes tribus y culturas. Una de ellas la vemos reflejada en aquellos que van a conquistar algo nuevo, y en los que huyen en un intento de ponerse a salvo de los primeros. Est??n los que huyen en cuanto se enteran de lo que est?? pasando; se levantan y simplemente echan a andar. Pero en la puerta 40 tenemos un tipo de migraci??n diferente, aqui tenemos a los que solamente est??n dispuestos a emigrar cuando se les obliga a ello. De lo contrario, negar??n una y otra vez esa posibilidad: "No, no, ni hablar. No se adue??ar??n de nuestras propiedades. No, no, no permitir?? que nos arrebaten nuestras casas. No, no, no se har??n con el dominio sobre nuestras vidas." Claro que, si se quedan a esperar demasiado tiempo, no llegar??n a emigrar nunca, como no sea dentro de alg??n coche funerario.   ', 'Tenemos estas dos formas de migraci??n, y las dos son muy importantes en el funcionamiento de los seres humanos. No es que una sea mejor que la otra, ni tampoco peor. No importa cu??les sean las circunstancias en cada caso, lo que debemos reconocer es que a trav??s de estas dos cruces las fuerzas de la vida no nos han permitido nunca estarnos quietitos en alguna parte. Somos una especie a la que no se le permite permanecer quieta. ??Sabes lo que dicen las estad??sticas americanas? Que cada dos a??os, el 30 o 40 % de la poblaci??n cambia su lugar de residencia. Como si tuvieran un hormiguero en los pantalones, simplemente no son capaces de estarse quietos en un lugar. Esa necesidad humana proviene de la tem??tica de esta cruz. Es como la gran desbandada de blancos que acab?? llenando todo el suroeste de los Estados Unidos. Todos los que viv??an en el noreste ten??an miedo de la gente de color, as?? que huyeron espantados hacia el sur del pa??s. Ese es un movimiento migratorio caracter??stico de esta cruz de encarnaci??n que estamos tratando, en el que se huye de algo a lo que se teme o que es experimentado como una amenaza. El resultado final de esa migraci??n se manifest?? en un tremendo desarrollo de toda la parte del sureste norteamericano. No se trata de moralizar acerca de lo que desencadena este tipo de fen??menos, sino de comprender que es un elemento engranado en nuestra naturaleza humana, y que nos hace disponer de la posibilidad de la migraci??n tanto para emprender la hu??da como para satisfacer nuestra sed de conquista ']
//     },
//     {
//         cruz: 'Cruz Angulo Izquierdo de la Revoluci??n 1',
//         img: imagesCruzes['revolucion.jpg'].default,
//         texto: ['Alej??ndonos de ese aspecto tan fijo, penetramos en la Cruz de Angulo Izquierdo de la Revoluci??n. Aqu?? tenemos la Revoluci??n en estado puro. Lo ??nico que resulta inc??modo en esta revoluci??n es que la motivaci??n que hay detr??s est?? siempre enraizada en el asuntos de dinero. Se traduce en que: "Ellos tienen; no merecen tener tanto, matemos a algunos de esos cabrones y compartamos lo que tienen." Al fin y al cabo, aunque suene un poco simple, esa es la base de cualquier revoluci??n. Llegados a la quinta l??nea entramos en una dimensi??n pr??ctica de la revoluci??n, lo que nos lleva a decir: "Son m??s codiciosos que el diablo, y no compartir??n nada con nosotros. Nos odian, y nos est??n esclavizando. No podemos razonar con ellos. Como as?? no llegamos a ninguna parte, lo ??nico que podemos hacer es matarlos. Si los matamos, entonces podremos encontrar alguna manera pr??ctica de compartirlo todo." ', 'Los seres humanos somos entes vivos con infinitud de guerras mundiales en nuestros cuerpos a cada segundo y a cada inspiraci??n. La violencia impl??cita en nuestra biolog??a es realmente incre??ble - no hay m??s que acompa??ar en su viaje a una de las c??lulas-t para poder observar procesos escalofriantes. La nuestra es una existencia muy violenta; simplemente lo es. Estamos dise??ados para matar, lo estamos, y lo seguiremos estando hasta que dejemos atr??s estos cuerpos, y no hay nada ni nadie que nos pueda librar de ese proceso - nada, nada. De lo contrario, nunca hubi??ramos alcanzado la cumbre de la cadena alimenticia. No ser??amos la especie dominante en nuestro planeta. Las cosas son as??, y no hay nada que podamos hacer al respecto. Eso no es algo que podamos civilizar, lo veremos cuando lleguemos a la Cruz de la Civilizaci??n. Donde intentamos civilizarlo - Mois??s baja y nos dice: "No matar??s." Estamos dise??ados para matar, cierto, pero no podemos. No nos est?? permitido. "No hagas eso, porque est?? mal." ', 'Llega la civilizaci??n y nos dice que tenemos que aprender a convivir todos juntos en el mismo vecindario. No deja de resultar un poco extra??o si est??n matando a alguien en la puerta de al lado. De modo que se hace necesario poder disponer de unas normas b??sicas y de un lugar en el que matar sin molestar a quienes tenemos a nuestro alrededor. Matar a la gente en el valle de al lado - eso est?? mejor. Puede que incluso resulte pr??ctico. No olvides que apenas estamos comenzando la historia y que es algo que necesitamos tener. As?? que desde el comienzo llevamos este tema incrustado en nuestra naturaleza. La vida nos obliga a tener que salir a matar para poder sobrevivir; y es preciso que hallemos alguna forma de hacer que eso este bien, alguna forma de santificarlo.  ', 'Si escuchas hablar a alguien con el Sol en la 49.5, oir??s a un poderoso revolucionario potencial. "Estoy aqu?? para seduciros con mis principios y llevaros con ellos hasta la revoluci??n." Se trata de una fuerza natural muy poderosa, adem??s de que todas las quintas l??neas tienen un don natural para atraer las proyecciones de los dem??s. Podemos encontrar todas las expectativas humanas puestas a los pies de los revolucionarios. Si fracasa en el intento, la reputaci??n de la quinta l??nea se desmorona. La revoluci??n llevada a cabo por la quinta l??nea tiene que ser siempre muy pr??ctica,  y  es preciso que sepa cu??l va a ser la manera en la que va a proceder en cada momento.  ', 'Puede proponerse, por ejemplo, eliminar todas las granjas privadas y crear una sola granja gigante del tama??o de Europa, creyendo que as?? podr?? criar m??s ganado del que nunca hubiera imaginado. Aunque suene pr??ctico, la puesta en marcha de un proyecto semejante puede tener resultados devastadores. "Ah, por cierto, antes tendremos que quitar de en medio a todos los propietarios de las granjas, ??eh?. Tenemos que hacerlo, es una cuesti??n pr??ctica. Si no lo hacemos, nunca podremos construir la Gran Granja para todos." Eso es lo que hacen, es lo que siempre han hecho. No hay manera de librarse de ellos. Algunas veces los convertimos en h??roes, otras los convertimos en villanos. De hecho, al fin y cabo, siempre resultan h??roes. Mientras sean capaces de satisfacer las proyecciones de aquellos que siguen los mismos principios que ellos, siempre se les tendr?? por h??roes.  ', 'No se trata simplemente de establecer unos principios nuevos que traigan la revoluci??n, sino de poder beneficiarse de ellos. No tiene ning??n sentido hacer una revoluci??n si no vas a sacar beneficio de ello. Una de las maneras m??s antiguas en las que los humanos han tratado unos con otros ha sido atacar a la tribu del valle vecino. Matando a todos los varones, dejando embarazadas a todas las hembras y llev??ndoselas a sus casas. En parte es as?? como han ocurrido siempre las cosas, y es una de las formas en que hemos aprendido unos de otros. As?? es como se ha desarrollado la historia, con una tribu conquistando a la tribu vecina, llevando sus dioses a las tribus conquistadas, y tambi??n sus muebles y sus cosas. Lentamente esas cosas se van fusionando, y algo nuevo emerge de ellas. As?? es como siempre ha funcionado. Es decir, que b??sicamente estamos dise??ados para invadir el territorio vecino para matar y violar. ', 'Existen muchos prejuicios acerca de esta cuesti??n, pero la gente que nace con esta cruz est?? aqu?? para este tipo de funciones. En este mismo momento tenemos a 3 billones de personas que se acuestan hambrientas - s??lo de eso ya podemos ver lo predecibles que son todo tipo de muertes. No pod??a ser de otra forma, ya que es todo una cuesti??n de comida y alimentos. La puerta 49 exige que tengamos lo que necesitamos para comer y para cubrir las necesidades de la comunidad. Sin alimento suficiente, la tribu estar?? dispuesta a ir a la guerra - somos animales al fin y al cabo. El revestimiento de civilizaci??n de la especie humana es una capa realmente fina, y muy reciente. La gente anda por ah?? corriendo con su moralidad a cuestas, en lugar de entender que todas estas cosas tienen su lugar en la evoluci??n. Lo tienen, nos guste o no.  ', 'Bien es cierto que en un mundo en el que ni a los seres humanos se les da suficiente para comer, no se puede ir por ah?? llorando por la paz. Lo que hay que exigir, con l??grimas o con lo que sea, es un poco m??s de organizaci??n. Hay comida suficiente para alimentar a todos - ese no es nunca el verdadero problema. Uno de los temas m??s marcados desde el comienzo de esta historia es que para estar en este programa global, es preciso que nos mantengamos unidos para sobrevivir. No fue f??cil al principio para los seres humanos competir por su lugar en el mundo. Fue preciso que desarroll??ramos habilidades comunitarias, habilidades que estaban enraizadas en la violencia y en la necesidad de protecci??n. No ten??amos otra elecci??n. No podemos simplemente librarnos de eso. No podemos sentarnos en una mansi??n de m??rmol y redactar una ley que diga que no puedes hacer esto o lo otro, porque esto es algo que no se deja legislar. Somos una totalidad, y todos y cada uno de los aspectos de la vida est??n presentes en nuestra especie. Existen seres humanos que son arquetipos portadores de cada uno de estos aspectos.  ', 'Al llegar a la sexta l??nea de la puerta 49 tenemos que hacer un salto considerable. Cuando la 49.6 desciende de su tejado, tiene que hacerlo con unos principios que le sirvan tanto para abastecerse de todo lo que necesita como para abrirse a los dem??s. Sin embargo, ??qu?? es lo que se encuentra en ese momento? - Deseo. As?? es como funciona el programa, si miras atr??s, te pones nervioso, pero si miras adelante afilando tu espada, entonces lo que viene a continuaci??n es el deseo. Como seres humanos que somos, estamos absolutamente desvalidos ante el modo en que somos conducidos. No tenemos la m??s remota idea de lo poderoso que es el l??tigo que nos obliga, y de lo seductora que es la zanahoria que tenemos delante de nuestros ojos. El deseo comienza en la puerta 30, y comienza con la Cruz de Angulo Derecho del Contagio. ']
//     },
//     {
//         cruz: 'Cruz Angulo Izquierdo de la Sanaci??n 2',
//         img: imagesCruzes['sanacion.jpg'].default,
//         texto: ['Una vez m??s, quiero decir que esta es la ??nica cruz que tiene una relaci??n directa con el proceso de sanar. Las cruces de ??ngulo izquierdo aparecen solamente en dos variaciones, que se dan siempre a partir de la posici??n del Sol de Personalidad en dos puertas opuestas en el mandala zodiacal. Cuando vimos la primera variante de la Cruz de la Sanaci??n, el Sol de Personalidad estaba en la puerta 25 y la Tierra en la 46. En esta segunda variante es el Sol el que est?? en la puerta 46. Existen dos tipos de sanaci??n. En primer lugar, est?? la sanaci??n que proviene de la puerta 25, a la que nos referimos cuando hablamos de medicina. Este es el tipo de sanaci??n de la mano del doctorado, del entendimiento t??cnico, y de los servicios de asistencia al cuerpo f??sico. Pero tambi??n existe la sanaci??n a trav??s del amor. Existen de hecho personas que tienen esa naturaleza. Es cierto cuando dicen que la gente se puede llegar a sanar por la sola fuerza del amor. Pero eso no es verdad para todo el mundo. En cualquier caso, si has venido al mundo sobre esta Cruz de Angulo Izquierdo de la Sanaci??n eso es lo que intentar??s hacer; a sanar a trav??s del amor. Todav??a perdura la conexi??n - a trav??s del eje 46/25 - con la sensualidad natural del Sol en la puerta 46. Pero este no es el tipo de amor que dice: "Amo al pr??jimo". Es m??s bien una forma de amor que aparece por serendipia, en el momento y lugar apropiado. Dicho con otras palabras, es una forma de amor que aparece espont??neamente, porque as?? es c??mo funciona el incre??ble don que posee esta puerta.  ', 'Aunque estemos tratando de la sanaci??n, debes tener siempre en cuenta que hay una dualidad de fondo en todas las cruces, que hay siempre una polaridad en el modo en que son vividas. Hay tambi??n mucha gente en el mundo que se muere porque no encuentra amor en ninguna parte. El polo opuesto siempre nos revela un aspecto importante de la verdad de todo. Esta es gente que busca sanarse a s?? misma a trav??s del amor, algo parecido a la farsa de los proyectores que te invitan a comer cuando solamente pretenden acceder a tu energ??a y que les devuelvas la invitaci??n en otro momento. Es decir, que frecuentemente la gente de esta cruz est?? simplemente esperando a ser sanada por la aparici??n del amor en su vida. La sanaci??n que tiene lugar a trav??s del amor se realiza a trav??s del cuerpo, y debe ser satisfecha a trav??s del contacto f??sico. Es preciso que haya una conexi??n con la otra persona para poder dar satisfacci??n a la sensualidad que se comparte. Pero tambi??n es preciso que comprendas bien que esta cruz no puede realizarse a menos que logre establecer un compromiso con la otra persona. Por supuesto, que al establecer ese compromiso, lo hace a trav??s del amor.  ', 'No se trata aqu?? de una forma de amor sexual. Con demasiada frecuencia, la experiencia del Centro-G no es reconocida como amor en el campo de percepci??n de la personalidad. Tendemos a confundir el amor con nuestros deseos, con las demandas hormonales de nuestro Plexo Solar, que nos dan acceso a experiencias muy distintas a las del Centro-G. Recuerda que el Centro-G nos mantiene unidos a la unidad de todas las cosas, nos mantiene unidos a la totalidad de la que formamos parte. Este tipo de amor no es personal, aunque lo tengamos que vivir con las cualidades personales que los dem??s proyectan sobre ??l. Las personas nacidas con esta Cruz de Angulo Izquierdo de la Sanaci??n est??n totalmente indefensas ante el sentimiento de que su amor por otra persona puede realmente llegar a marcar una diferencia. Esto puede ser de una belleza sublime, pero tambi??n debes reconocer que son seres que pueden llegar a sufrir mucho en esta vida, ya que ellos mismos necesitan ser sanados por la experiencia de compartir amor con sus semejantes - eso es lo ??nico que reconocen verdaderamente.  ']
//     },
//     {
//         cruz: 'Cruz Angulo Izquierdo de las Demandas 1',
//         img: imagesCruzes['demandas.jpg'].default,
//         texto: ['Al pasar al ??ngulo izquierdo del hexagrama llegamos a la Cruz de Angulo Izquierdo de las Demandas. Una cosa es ser capaz de diagnosticar un problema: "Oye, mira, aqu?? hay alg??n problema", y otra enteramente distinta es demandar que se haga algo al respecto. Esta es la cruz de todos los movimientos de protesta que alguna vez han publicado sus demandas. "Demandamos que se haga algo, que se encuentre alguna soluci??n para que la situaci??n denunciada sea corregida, aunque para ello tengamos que hacernos con el control de la situaci??n". Imagina lo que significa que tener que vivir con ese tipo de configuraci??n, y lo importante que es que se comprenda su verdadero prop??sito. Lo importante que es para estas personas llegar a satisfacer ese papel en su vida. No olvides nunca que la l??gica est?? siempre desesperadamente necesitada de recursos energ??ticos y de gente dispuesta a respaldarla. Estas no son personas que te piden que las apoyen, sino que te lo exigen. Te dicen: "Mira, pr??stame tu atenci??n. Lo tenemos que hacer ahora". Lo exigen.  ', 'Claro que, al pedirlo, parecen dispuestos a hacerse con el control, lo que puede acarrearles muchos problemas. Recuerda que tienen la puerta 21 activada en el plano inconsciente de su dise??o, por lo que no llegan a darse cuenta de que est??n siempre controlando o intentando controlar. No es algo de lo que participen conscientemente. Al formular sus demandas, lo que realmente intentan hacer es una correcci??n para el colectivo. En retorno reciben respuestas de tipo: "Est??s hambriento de poder. Solamente intentas hacerte con el control. Eres una mala persona". Son gente que recibe muchas cr??ticas de los dem??s porque realmente no se les entiende. ', 'Su motivaci??n, m??s que al deseo de hacerse con el poder, se debe a la necesidad de insistir para que se haga algo:???! ??Que alguien limpie este esc??ndalo!" Si vas a un restaurante, y se ha derramado algo que nadie viene a limpiar, siempre habr?? alguien cerca del desastre que acabe gritando: "??Que alguien venga a limpiar esto!" Esa es la demanda de esta gente que siempre est?? ah??. Si eres un Generador nacido con esta cruz, no te imaginas lo frustrante que puede llegar a ser vivir intentando manifestar tus demandas.', 'No conseguir??as m??s que incrementar las resistencias con las que te topas, y no parecer??a haber nunca una respuesta a tus demandas. Todo el mundo se limita a decir: "Bueno, pues no seas tan exigente". ', ' Siempre que tengas que tratar con alg??n aspecto del colectivo humano, debes entender que el colectivo est?? ah?? para ocuparse de los asuntos colectivos, que no se trata de tom??rselos como una cuesti??n personal. S??lo cuando el colectivo se ocupe de los asuntos de toda la sociedad puede ser reconocida y respetada la contribuci??n de estos seres humanos. En un plano personal, lo ??nico que pueden hacer es esperar a que alguien se acerque a preguntarle. Si te toca vivir o tratar con personas que tengan esa capacidad, aprender??s a valorarla, ya que podr??s reconocer el valor de las respuestas que son capaces de ofrecer cuando les preguntas algo. Al fin y al cabo, en eso consiste su trabajo, en decirte lo que necesitas corregir. Es importante reconocer el modo en que estas personas funcionan, para realmente poder beneficiarse del trato con ellas - tanto para los que tienen que tratar con ellas como para las personas mismas que son portadoras de esta cruz. Es preciso que reconozcan que sus demandas nunca ser??n escuchadas si intentan arroj??rselas a los dem??s a la cara. Eso no puede funcionar nunca, y menos viniendo de una puerta dise??ada para ser tan pasiva como la 52. En esta puerta se trata de esperar en estado de quietud, y de esa pasividad nace toda su fuerza.  ']
//     },
//     {
//         cruz: 'Cruz Angulo Izquierdo de las Demandas 2',
//         img: imagesCruzes['demandas.jpg'].default,
//         texto: ['La salida natural de la cruz anterior nos conduce a la segunda variante de la Cruz de Angulo Izquierdo de las Demandas. Esta es una cruz que simplemente dice: "De acuerdo, si quieres mi energ??a, estas son mis condiciones. T?? quieres mi energ??a, pero esto es lo que quiero yo a cambio. Quieres que te preste para poner en marcha un nuevo proyecto, pero esto es lo que yo quiero a cambio". Es decir, que hay aqu?? un mont??n de demandas con las que vamos a tener que tratar cuando nos encontremos con alg??n portador de esta cruz de encarnaci??n. Por cierto, que se trata de demandas muy diferentes a las que ve??amos con el Sol en la puerta 52. Recuerda que, en primera instancia, aquellas demandas estaban relacionadas con la necesidad de disponer de suficientes recursos energ??ticos a la de hora de estar dispuesto a implicarse en algo. La puerta 58, sin embargo, est?? dise??ada para proveer la energ??a necesaria para desafiar a la autoridad y desarrollar el talento, de modo que se logre hacer y expresar las cosas con habilidad. O sea, que todas estas demandas est??n enraizadas en el mensaje que proviene del inconsciente diciendo: "S??, te puedo ofrecer mi vitalidad personal. S??, te puedo dar acceso a la maravillosa energ??a que poseo, pero estas son mis demandas".  ', 'Al llegar a la sexta l??nea de este ??ngulo izquierdo, nos encontramos con personas que muy pronto en la vida hacen demandas a trav??s de la resonancia del tema de la tercera l??nea. Esto los lleva a desarrollar un profundo pesimismo de que nadie les quiere dar lo que est??n pidiendo. Por supuesto que eso solamente ocurre porque no viven de acuerdo con la naturaleza de su tipo. Cualquiera que sea portador de alg??n tipo de profundidad y de energ??a para la correcci??n, se puede ver aplastado por otros muy pronto en esta vida, porque plantea sus correcciones en el momento inoportuno y de la forma menos adecuada, con lo que lo ??nico que consigue es molestar a la gente. Como todas las sextas l??neas - en la etapa inicial de los primeros 28 a??os de vida - acaba acumulando un mont??n de intentos y errores, de equivocaciones y de v??nculos afectivos rotos.  ', 'Luego, en la segunda etapa - despu??s del retorno de Saturno - se subir??n al tejado de su casa, y mirar??n sobre el mundo para ver a qui??n le satisfacen sus demandas, y el modo en que lo consiguen. Pueden llegar a encarnar figuras de mucha autoridad, y ser capaces de dirigir a otros en la forma de plantear sus demandas a terceros. En ese sentido, estas personas pueden ser de mucho valor para los dem??s. Finalmente, cuando en el retorno de Quir??n tienen que descender del refugio de su tejado, es preciso que sean capaces de hacer esas demandas por y para s?? mismos. Es decir: "No, no puedes acceder a mi energ??a".  ', 'El hecho de que dispongas de una puerta de energ??a que otra gente pueda necesitar, no quiere necesariamente decir que te tengas que pasar la vida corriendo de un lado para otro como una gallina descerebrada. Tambi??n puede tratarse de otro tipo de energ??as, como son, por ejemplo, las riquezas materiales. En nuestros tiempos modernos, frecuentemente se trata de dinero. De ah?? que con mucha frecuencia la gente se dirige a las personas de las puertas 58 y 52 en busca de dinero, porque es el equivalente de los recursos energ??ticos. La l??nea 58.6 es la t??pica persona que recibe una herencia, y que es estafada por alguien cuando tiene 23 o 24 a??os. Es alguien que comete el error de comprometer su energ??a con el proyecto equivocado, sin plantear correctamente sus demandas y sin establecer claramente sus condiciones. Al final, acaba chamuscado. ', 'Siempre que tengas que tratar con alguna sexta l??nea, debes tener presente el caos que tiene que atravesar en los primeros 28 a??os de su vida. Una vez m??s, quiero insistir aqu?? en que esta es una de las cosas fundamentales acerca de la educaci??n de nuestros hijos. Si tienes alg??n hijo portador de un perfil de sexta l??nea, debes reconocer los riesgos que eso conlleva para su salud y los problemas que le puede ocasionar en el ??mbito de sus relaciones humanas en la primera etapa de su vida. Esta es gente que, debido a su fragilidad ps??quica, puede llegar a morir joven. Son los que m??s necesitan recibir una educaci??n y unos cuidados apropiados.  ']
//     },
//     {
//         cruz: 'Cruz Angulo Izquierdo de las Encarnaciones 2',
//         img: imagesCruzes['encarnaciones.jpg'].default,
//         texto: ['Llegamos aqu?? a la segunda variaci??n de la Cruz de Angulo Izquierdo de las Encarnaciones - la cruz de la entrada en la carne, del descenso a la forma. Aqu?? salta la primera de las alarmas. "Oh, Dios m??o, otra vez no." Apenas te da tiempo para congraciarte con tus amigos cuando ya se te acaba el billete y ya est??s listo para irte. Simplemente te ponen en tu sitio, y hala, a andar el camino. Uno de los temas de esta cruz lo podemos ver en la fuerza con la que la puerta 24 - el Retorno - nos mantiene atados a tener que comenzar una y otra vez desde el mismo sitio. En el contexto de esta cruz de encarnaci??n, el una y otra vez se refiere al retorno constante a la encarnaci??n en la forma.  ', 'El verdadero valor en t??rminos de lo que es esta cruz lo podemos ver en la variaci??n que nos propone cada camino. Con el eje de las puertas 44 y 24, el camino es el retorno constante a la confrontaci??n con nuestros miedos a no tener suficientes recursos y no lograr salir adelante - es la combinaci??n de estas dos puertas. Por eso encontramos en los de esta cruz a las personas que no est??n contando siempre esas f??bulas. Ese es, al fin y al cabo, su trabajo. Recordarnos que estamos aqu?? para trabajar duramente en los campos, y ganarnos el pan con el sudor de nuestra frente. Esta es gente muy consciente de esa realidad. No obstante, es muy probable que ignore que ese trabajo duro sirve a un prop??sito superior. De todos modos, los seres humanos raramente llegan a vislumbrar nada de su verdadero prop??sito en la vida. Muy pocas veces tienen la oportunidad de levantar el velo de su No-ser, aunque s??lo sea un instante, y de ver con claridad como todo lo que existe est?? interrelacionado y encuentra siempre una manera de salir adelante sin trabas.  ', 'Las dos variaciones de la Cruz de las Encarnaciones nos traen a la memoria siempre algo inusual de otra ??poca, ya que se trata de algo que para ellas tiene mucha importancia. La gente que nace con esta cruz abre su vida a cosas que provienen de otra ??poca y que han desaparecido de este mundo. Es un fen??meno extra??o e incre??ble. Si sabes que es alguien nacido con esta cruz, entonces sabes que eso ha debido formar parte de su vida en alg??n momento del pasado. Esta maravilloso contemplar el sinf??n de maneras en el que esta gente se dedica a hacer eso. Por ejemplo, tienes aqu?? a la persona que aprende a hablar lat??n. No sabe por qu?? ni para qu?? desea aprender lat??n, pero lo desea. O alguien que coge un instrumento que nadie ha vuelto a tocar en los ??ltimos 1000 a??os, y se pone a investigar la manera de poder tocarlo.  ', 'Las dos variaciones de la Cruz de las Encarnaciones nos traen a la memoria siempre algo inusual de otra ??poca, ya que se trata de algo que para ellas tiene mucha importancia. La gente que nace con esta cruz abre su vida a cosas que provienen de otra ??poca y que han desaparecido de este mundo. Es un fen??meno extra??o e incre??ble. Si sabes que es alguien nacido con esta cruz, entonces sabes que eso ha debido formar parte de su vida en alg??n momento del pasado. Esta maravilloso contemplar el sinf??n de maneras en el que esta gente se dedica a hacer eso. Por ejemplo, tienes aqu?? a la persona que aprende a hablar lat??n. No sabe por qu?? ni para qu?? desea aprender lat??n, pero lo desea. O alguien que coge un instrumento que nadie ha vuelto a tocar en los ??ltimos 1000 a??os, y se pone a investigar la manera de poder tocarlo.  ', 'Llegamos ahora al ??ltimo de los cuatro cuartos, que comienza con el hexagrama 1 en el signo de Escorpio - una de las puertas de la Esfinge. El ??mbito de Sirius, que comienza aqu??, avanza a trav??s de los primeros ocho hexagramas del cuarto hasta llegar a la puerta 10 - puerta del comportamiento del ser - en la parte superior del mandala zodiacal. Luego, descender?? por los ocho hexagramas siguientes para cerrar el cuarto al llegar a la puerta 19 - el Acercamiento - que es la ??ltima de las puertas de la Cruz de los Cuatro Caminos. Este es el Cuarto de la Mutaci??n, y es aqu??, en las 16 puertas de este cuarto, donde se determina el modo en que la mutaci??n se mueve, de facto, a trav??s de la totalidad. Todas las mutaciones que vienen al mundo parten de este Cuarto de la Mutaci??n. Para nosotros, que vivimos inmersos en una vasta programaci??n c??smica, es importante que lleguemos a reconocer que la mutaci??n es iniciada por el programa evolutivo, y no por nosotros. En el contexto de lo que es el programa evolutivo, ni siquiera se trata de una verdadera mutaci??n, sino simplemente un cambio en la informaci??n o en la frecuencia de sus registros y patrones. Dada la naturaleza de nuestra relaci??n con el tiempo y el espacio, la informaci??n tarda mucho tiempo en llegar hasta nosotros. Irrumpe en nuestro proceso a trav??s de alg??n individuo, a trav??s de alguna encarnaci??n con potencial para mutar, y repentinamente aparece en el mundo. Luego, nosotros la podemos se??alar con el dedo y decir: "Ahh??, ah?? hay una mutaci??n." Ya ha pasado a formar parte de este mundo.  ']
//     },
//     {
//         cruz: 'Cruz Angulo Izquierdo de las Limitaciones 2',
//         img: imagesCruzes['limitaciones.jpg'].default,
//         texto: ['El ??ngulo izquierdo es el que acaba pagando las consecuencias de tener que fracasar o triunfar en la vida, en funci??n de las personas a las que vive conectado en su vida. Con esta configuraci??n transpersonal tienes una geometr??a que compartir con otras personas en tu vida, y una geometr??a que no se reduce a tu experiencia personal con ellas, sino que puede estar vinculada, por ejemplo, a tu carrera profesional. Al fin y al cabo, en la puerta 32 estamos tratando siempre con el mundo de los asuntos materiales y de los negocios. Tambi??n estamos tratando aqu?? siempre de la evaluaci??n y del miedo al fracaso.', 'La quinta l??nea favorece que seas objeto de una enorme cantidad de proyecciones, que pueden crearte verdaderos dilemas internos. No obstante, si la quinta l??nea se implica en formas pr??cticas de evaluaci??n, por ejemplo, en la evaluaci??n de productos o asuntos terrenales, entonces puede encontrar una forma de ??xito capaz de superar las pruebas del tiempo. No hay nada que satisfaga m??s a la puerta 32 que poder estar siempre en el mismo sitio, viviendo en el mismo bloque de casas, en la misma ciudad de siempre, y que la decimonovena generaci??n pueda poner una placa conmemorativa en la entrada de la casa que diga que fue fundada en 1802. Para esta puerta, esa es la cosa m??s maravillosa del mundo, esa es la gran continuidad de la vida, que para ella significa que todo est?? realmente bien.  ', 'La tribu tiene miedos que emergen siempre que la base de su supervivencia material est?? amenazada. Yo mismo fui testigo de algo as?? en Europa, donde se exigi?? a las comunidades agr??colas de los pa??ses m??s peque??os que se especializaran en ciertos productos para encajar mejor en el grupo m??s amplio. Eso significaba, por supuesto, que muchas granjas autosuficientes - que eran capaces de abastecerse de todo lo que necesitaban - ten??an que dejar de serlo. Claro que eso despierta miedos muy profundos en la gente, que se pregunta: "??Y qu?? ocurrir?? si nos dejan de lado? ??Qu?? ocurrir?? si esto, o si lo otro, o si lo de m??s all??? Todo eso forma parte del proceso de aprender a manejar las limitaciones que hay en la vida. Esta es gente que nace realmente para ense??arnos cu??l debe ser el l??mite que todos debemos respetar, en t??rminos de lo que es posible en el mundo de los negocios. "Oye, querido, ya s?? que eres muy ambicioso, pero todav??a necesitar??s 20 a??os para llegar a presidente. As?? que, por favor, no aparques tu coche al lado del m??o."  ', 'La l??nea 32.6 es una de las m??s dif??ciles, ya que es una l??nea que trata de la depresi??n y del suicidio potencial. Yo conozco a mucha gente con esa l??nea que ha querido dejar de vivir. Esta l??nea est?? ah?? para mostrarnos lo poderoso que puede ser el fracaso cuando act??a como una fuerza que es capaz de rompernos. Esta sexta l??nea se rompe cuando no hay v??as de continuidad posibles, y cuando deja de tener confianza plena en los valores con los que vive. En cuanto deja de tener confianza en su seguridad en el plano material, esta l??nea puede entrar en profundos estados de depresi??n. Es especialmente importante que esta l??nea entre correctamente en contacto con las cosas que van a formar parte de su vida, porque entonces podr?? manejar todo esto con la confianza suficiente. Sabr?? manejar bien las circunstancias que lo acompa??en, porque no se sentir?? amenazado de la misma manera. Sin embargo, debido a todo el caos inherente al proceso de la sexta l??nea, y a lo que tiene que pasar en la primera etapa de su vida, cuando te encuentras con las personas que son sus portadoras podr??s reconocer ese campo de depresi??n potencial que palpita en ellas. Es algo que no puede ser evitado. Por eso, el encuentro con las personas de esta cruz siempre estar?? acompa??ado de una cierta pesadez.  ', 'Todos los ??ngulo izquierdos de todas las cruces completan su proceso al llegar a la sexta l??nea. Por ello, todos nosotros, los que no somos portadores de sextas l??neas en nuestro perfil, necesitaremos en alg??n momento de nuestras vidas la confirmaci??n de la autoridad que emana la persona de sexta l??nea. De un modo o de otro, todos tendremos que salir a buscar la aprobaci??n de su autoridad objetiva, para poder acceder a la sabidur??a potencial de la que todas las sextas l??neas son portadoras. La l??nea 32.6 necesita ser capaz de vivir con pulcritud y meticuloso respeto a sus valores - entrando correctamente en su relaci??n con las cosas, de modo que nunca se vea atormentada por la ruptura de la continuidad. Esta es la l??nea que m??s profundamente sufre el embate de nuestro miedo a ser extinguidos, miedo a ser eliminados, miedo a perderlo todo, y miedo a ser erradicados de la faz de la Tierra.  ', 'Es como cuando miras las noticias despu??s de que un hurac??n haya pasado por encima de alguna localidad, y escuchas las entrevistas que hacen a los afectados. Siempre est??n los que dicen: "Vaya, no sabes el ruido que met??a!" Luego est??n los que hablan con su cajita de cajita de pa??uelos de papel y medio juguete de su perro bajo el brazo: "Lo he perdido todo. No me queda nada. Todo se ha perdido para siempre." Todav??a est??n vivos, y lo valoran tan poco que te entran ganas de acercarte a ellos para sacudirles un poco hasta que salgan de su consternaci??n. Al mismo tiempo, es preciso saber reconocer que eso es precisamente lo que aqu?? se procesa.  ', 'Esta gente pueden ejercer un influjo muy deprimente, porque, al fin y al cabo, los dem??s se acercan a ella para pedirle su aprobaci??n, y su respuesta es: "Olv??dalo. Eso no funcionar??. No vale para nada. Nadie comprar?? jam??s esa basura. Todav??a me quedan millones de yo-y??s por ah??. Nadie los quiere!." No obstante, en la geometr??a de las cosas, nadie tiene elecci??n, como la ballena que al cruzar el bancal de peces absorbe en su boca todo lo que se encuentra en el camino. T?? est??s en un momento de crisis en tu vida y necesitas alg??n tipo de asesoramiento, y vas a dar con la segunda variante de la Cruz de Angulo Izquierdo de las Limitaciones. Puedes estar seguro de que te dar?? en la cabeza con un martillo y un ladrillo tambi??n. "Bueno, f??jate bien, porque esta es tu limitaci??n."  ']
//     },
//     {
//         cruz: 'Cruz Angulo Izquierdo de las M??scaras 1',
//         img: imagesCruzes['mascaras.jpg'].default,
//         texto: ['Hemos comenzado con la Cruz de la Esfinge - donde lo ocurrido ayer, lo ocurrido hace un mes, marca las pautas de la direcci??n a seguir, siempre en funci??n de todo lo que te ocurri?? en el pasado. Luego llegamos a ese otro aspecto mucho m??s fijo - donde disponemos de la misma fuente de alimentaci??n, del mismo campo de empat??a natural, pero donde el proceso es muy distinto. No hay ninguna necesidad impl??cita en el prop??sito de ese aspecto m??s fijo (recuerda que tu Cruz de Encarnaci??n representa tu prop??sito) de ser exteriorizado ante los dem??s.', 'Sin embargo, cuando hablamos del ??ngulo izquierdo estamos tratando del karma transpersonal. Al tratar del karma transpersonal, lo que tenemos es una obligaci??n f??sica, estructuralmente programada (es una obligaci??n) de integrarse con los dem??s para hacerles llegar esa informaci??n. El proceso de hacer llegar a otros esos mensajes comienza por los roles del Salvador en la 13.5 y el General en la 7.5. Aqu?? tenemos al Salvador General raro, que espeta la mutaci??n que encarna en el trato con los dem??s. La manera en que lo hace es ocult??ndose detr??s de una fachada, sin que haya nada moralmente reprobable en ese hecho. Simplemente no tiene elecci??n.  ', 'Su vida gira en torno a las m??scaras; son absolutamente necesarias para ??l. La raz??n por la que necesitan esas m??scaras es que son seres que est??n siempre sometidos a la presi??n ejercida por todos aquellos a los que se sienten conectados k??rmicamente a hacerles entrega de sus parabienes. Por supuesto que esos parabienes aqu?? estar??n siempre vinculados a la direcci??n a seguir. No debemos olvidar que siguen siendo portadores del eje de las puertas 13 y 7, y consecuentemente de la direcci??n colectiva del Centro-G, dentro de su Cruz de Encarnaci??n. Debido a que el campo de proyecciones en el que tendr?? que actuar ser?? muy profundo y extenso, particularmente en el caso de la l??nea 5, y la gente le demandar??: "Oye, mira, estamos esperando que nos des alguna direcci??n a seguir", esta no es gente que te d?? la direcci??n en la cola del supermercado. No tienen la idiosincrasia del ??ngulo derecho. El ??ngulo izquierdo tiene que reconocer lo que la otra persona quiere o recibe de ??l. Su proceso es realmente muy distinto.', 'Lo natural con la Cruz de Angulo Izquierdo de las M??scaras es encontrarse con gente que necesita ponerse iniciales detr??s de su nombre o utilizar disfraces. Si vas a ser alguien que se dedica a leer las cartas del Tarot, entonces v??stete como un maniqu?? del siglo XVII. Es preciso que dispongas de un disfraz, tanto si se trata de un disfraz ps??quico o si es un disfraz que encubre tu personalidad. Cualquiera que sea el caso, esta es gente que se mete dentro de alguno de esos disfraces y que luego juega el papel correspondiente.  ', 'Ahora bien, una de las cosas a entender acerca de la yuxtaposici??n, del ??ngulo izquierdo o del ??ngulo derecho de esta cruz es que todas las versiones son portadoras de una profunda individualidad. El programa comienza impregnado de una profunda melancol??a. Si fuera de otro modo, no podr??amos disfrutar de su m??sica. Al fin y al cabo, de eso es de lo que estamos tratando - de que todo el proceso responde a la necesidad de orquestaci??n. Comienza con la melancol??a porque la melancol??a es la musa. Puedes ver c??mo la mente comienza con la tristeza y con la ansiedad de que esa melancol??a no se resuelva nunca, y es a partir de ah?? donde podemos ver emerger la gloria de lo que hemos alcanzado desde un plano mental.  ', 'La realidad es que se trata de cruces cuyo proceso est?? lleno de melancol??a. Una de las cosas que m??s nos cuesta comprender a los seres humanos es la naturaleza de la bioqu??mica, porque tendemos a tomarnos todo de la m??s personal de las maneras. Tendemos a tomarnos la vida como algo personal, a tomarnos nuestra cruz como algo personal, a tomarnos todo esto como algo personal, as?? que tambi??n nos tomamos a personal la bioqu??mica de nuestro organismo. De modo que cuando nuestra bioqu??mica cambia, creemos que es personal y postulamos a partir de ese hecho que algo no va bien. Parece haber alguna raz??n. Si tienes alguna definici??n individual en tu dise??o, no deber??as formular ning??n razonamiento acerca del porqu?? de tu melancol??a, porque lo ??nico que estar??s haciendo es matar las musas - estar??s matando las musas y sustituy??ndolas por depresi??n. Hay cruces de encarnaci??n que comienzan el ???Cuarto de la Iniciaci??n??? - comienzan con melancol??a. Todo comienza con tristeza y con arte. Comienza con m??sica.  ', 'Comienza tambi??n con el amor, porque la individualidad est?? en el n??cleo mismo de lo que es el amor. La individualidad es la b??squeda del amor perfecto, del amor m??s trascendente, amor c??smico, amor a uno mismo, y de la uni??n con el otro a trav??s del amor y del romance. Todo esto est?? presente desde el comienzo mismo. Es el punto de partida, con el ??ngulo derecho de la puerta 13 diciendo: "??Hab??a amor en todo lo que he dejado tras de m??? ??Recib?? amor en el pasado? ??Lo recibir?? a partir de ahora?" Para cuando llegamos a la Cruz Yuxtapuesta, lo ??nico que hace es escuchar a ver si lo oye llegar: "Ah, est?? ah?? fuera en alguna parte". Esta es la gente que escucha los sonidos del amor durante la noche. No tiene amante real, acaso s??lo tenga un osito de peluche, pero las canciones de amor que escucha son fant??sticas. Puede que tenga la radio conectada a alguna emisora sentimentalona de alguna parte. Entonces llegamos finalmente al ??ngulo izquierdo, y el ??ngulo izquierdo dice: "Me pondr?? mi m??scara, y te dir?? exactamente lo que necesitas saber, porque si no te digo exactamente lo que tienes que hacer, no podr?? sobrevivir en esta vida. De modo que te lo voy a decir, pero te lo voy a decir bas??ndome en mi tristeza." ', 'Una cosa es ser capaz de describir los mecanismos del funcionamiento de estas cruces, y otra muy distinta es reconocer que las personas que portan estas cruces no est??n despiertas. Generalmente est??n muy confusas y viviendo atrapadas en la psicolog??a negativa de su No-Ser. No tienen ni idea de lo que est?? pasando en sus vidas, y ciertamente no est??n en sinton??a con su propio proceso. Por eso, el mayor dilema de este planeta es que nadie conoce su prop??sito. Si vives atrapado en el No-Ser, no lo encontrar??s nunca hagas lo que hagas.  ', 'En el mismo comienzo de la iniciaci??n, en el mismo proceso de arranque, la mayor??a del tiempo todo se ve envuelto y enredado en la profunda depresi??n con la que esta gente encara la vida. Piensa por un instante en lo que significa vivir mirando hacia atr??s, ver las cosas que no te gustan, y no saber qu?? hacer con todo eso. Esta gente no sabe por qu?? le toca ver todo eso, y acaba desarrollando un profundo pesimismo acerca de todo.  ']
//     },
//     {
//         cruz: 'Cruz Angulo Izquierdo de los Desaf??os 1',
//         img: imagesCruzes['desafios.jpg'].default,
//         texto: ['Con el ??ngulo izquierdo llegamos siempre a la interacci??n transpersonal con otros, lo que significa que la realizaci??n personal no es posible para el ??ngulo izquierdo sin la integraci??n con otras personas. Aqu?? tenemos la Cruz de Angulo Izquierdo de los Desaf??os, con el eje de las puertas 2 y 1 marcando el camino. En la estructura natural de un hexagrama la primera l??nea es la que representa siempre su verdad m??s b??sica, pero es en la quinta l??nea de cualquier hexagrama donde podemos reconocer lo que los dem??s quisieran ver en esa verdad. Eso no significa, sin embargo, que as?? es c??mo tenga que ser en realidad.', 'El poder de seducci??n de la quinta l??nea puede conducir a provocar las expectativas de los dem??s, mientras que la primera l??nea nos revela siempre la esencia misma de cualquier hexagrama. De modo que, en esta Cruz de Angulo Izquierdo de los Desaf??os, llegados al campo de las proyecciones ajenas en el que se tiene que manejar la quinta l??nea del hexagrama, nos encontramos con personas que est??n siempre dispuestas a desafiar her??ticamente el est??ndar de la direcci??n establecida. Convencidas de disponer de respuestas propias y de mejores principios que los establecidos, estas son las personas que desaf??an lo que parece ser la direcci??n general de los seres humanos. Eso no significa que lancen su desaf??o de un modo activo, sino que son las proyecciones que reciben de otros las que los convierten en seres desafiantes, aun cuando no lo est??n siendo para nada. Si tomamos como ejemplo una hilera de ni??os corriendo a lo largo de un pasillo durante una alarma de incendio, y una de esas criaturas resulta haber nacido con la Cruz de Angulo Izquierdo de los Desaf??os, es seguro que ser?? la que camina fuera de la hilera. Ella misma puede que ni siquiera llegue a darse cuenta, ya que no hay ning??n intento consciente de ser desafiante. Los dem??s son quienes la ver??n como un ser desafiante, y ser??n tambi??n quienes proyecten sobre ella esa actitud her??tica.  ', 'No debemos olvidar nunca la relaci??n tan estrecha que hay, en el contexto de los perfiles, entre la quinta y la sexta l??nea de cualquier hexagrama. La quinta l??nea es la l??nea de la universalizaci??n, por lo que est?? dise??ada para recibir las proyecciones del colectivo humano. Eso le permite ser la m??s capacitada para proveer las soluciones pr??cticas de las que el hexagrama dispone, y tambi??n para informar o mutar a los dem??s en el contacto con ellos. Pero es la sexta l??nea la que se asienta sobre el tejado de la casa, particularmente durante la etapa media de una vida, y la que est?? ah?? para atestiguar si la herej??a de la quinta l??nea era o no de valor. Por ejemplo, en el contexto de esta Cruz de Angulo Izquierdo de los Desaf??os, la quinta l??nea es la que dice: "Debemos romper con esta direcci??n y seguir ese otro camino. Esta no es la direcci??n correcta. Este no es el camino que debemos tomar. Seguidme." A la sexta l??nea le corresponde atestiguar si esa herej??a estaba justificada o no. De modo que en la quinta l??nea de la Cruz de Angulo izquierdo de los Desaf??os estamos tratando con la autoridad para ser an??rquico en la direcci??n que uno debe seguir. ', 'Cuando estas fuerzas se muestran abierta y verdaderamente desafiantes, entonces es cuando sufrimos un colapso en la direcci??n. Dicho sea de paso, que eso no deja de ser normal. Al fin y al cabo, todo eso tiene su sitio en las mec??nicas de la puerta 2, que no desaparece en ning??n momento de esta configuraci??n a medida que avanzamos del ??ngulo derecho al ??ngulo izquierdo del hexagrama. Siempre est?? presente, ya que todo forma parte de la direcci??n. Pero hay muchos matices en todo esto. Si miras el mundo actual en el que vivimos, puedes encontrar gente en el planeta que vive todav??a como si estuvi??ramos en la Edad de Piedra, en el plano de la supervivencia m??s estricta.  Hay muchas realidades distintas funcionando al mismo tiempo. La Cruz de Angulo Izquierdo de los Desaf??os trae consigo el movimiento que lleva a apartarse de cualquier direcci??n preestablecida. Lo que aflora a trav??s de esta cruz de encarnaci??n es un nuevo aspecto de un cisma, que se puede manifestar con todo tipo de variaciones y matices sutiles.  ']
//     },
//     {
//         cruz: 'Cruz Angulo Izquierdo de los Deseos 1',
//         img: imagesCruzes['deseos.jpg'].default,
//         texto: ['Al llegar al ??ngulo izquierdo de este hexagrama nos encontramos con una cruz un tanto extra??a - la cruz de ??ngulo izquierdo de los Deseos. Es muy interesante porque trata del tipo de deseos que siente, por ejemplo, alguien que ha nacido en Uganda y se entera de que las Naciones Unidas tiene un c??digo para la protecci??n de los derechos humanos. Es obvio que esa persona experimentar?? el deseo de ser incluida en esa ley. Seguro que piensa que no estar??a nada mal caer tambi??n bajo el paraguas de ese c??digo.  ', 'Una de las cosas que debemos reconocer de esta cruz de ??ngulo izquierdo de los Deseos es que est?? siempre intentando prever el futuro. La posici??n de su Tierra de Dise??o en la puerta 31 que da expresi??n al liderazgo de la puerta 7 - la puerta de la Esfinge que nos da una direcci??n colectiva - lleva a los de esta cruz a vivir constantemente pendientes de lo que el futuro nos depara. La influencia de la puerta 31 a trav??s del Canal del Alpha conlleva un dise??o de liderazgo, por lo que se trata de personas muy aptas para encaminarnos hacia el futuro con una cierta estabilidad. Sin embargo, en el polo opuesto tenemos la puerta 41, que siempre trae consigo el combustible de una nueva expectativa, de un deseo renovado de un nuevo tipo de experiencia. ??No ser??a maravilloso el mundo si no fuera por...? ??Si no tuvi??ramos esa ley, sino que tuvi??ramos esa otra? ??Si no tuvi??ramos esa norma, sino que tuvi??ramos esa otra? Esta es la Cruz de los Deseos.  ', 'La Cruz de los Deseos ejerce un poder de atracci??n muy profundo sobre el colectivo humano. No tienes m??s que pensar en Am??rica, que es un pa??s hecho de abogados. Tenemos el deseo de una ley nueva, cambi??mosla por esa otra vieja que ya no sirve. ??No es eso todo lo que los pol??ticos hacen en este pa??s? Simplemente cambian las leyes, a eso es a lo que se dedican la mayor parte del tiempo. Las leyes son cambiadas en aras de un mejor funcionamiento de la sociedad en el futuro. Eliminemos esa ley anticuada, e introduzcamos esa nueva ley que nos facilitar?? la vida en com??n.  ', 'Debes tener en cuenta que se trata de una cruz de ??ngulo izquierdo, y que particularmente la quinta l??nea de la Cruz de los Deseos tiene una influencia enorme sobre los dem??s porque est?? dici??ndonos: "Mirad, todas estas leyes antiguas - no sirven para nada." Pero como la sociedad necesita patrones estables para sostenerse, en el momento en que le dices a la gente que los patrones estables con los que funciona no son lo suficientemente buenos y necesitan ser sustituidos por otros, lo que ocurre es que creas tensi??n en el seno de esa sociedad. Aflorar??n fuerzas que desean que se introduzcan los cambios necesarios, y tambi??n lo har??n otras fuerzas que oponen resistencia porque no est??n dispuestas a cambiar. Esas son las din??micas b??sicas que funcionan en estos casos. Por todo ello, la gente que viene al mundo con la Cruz de los Deseos no permite nunca la complacencia en relaci??n con la ley.  ', 'Debes tener en cuenta que se trata de una cruz de ??ngulo izquierdo, y que particularmente la quinta l??nea de la Cruz de los Deseos tiene una influencia enorme sobre los dem??s porque est?? dici??ndonos: "Mirad, todas estas leyes antiguas - no sirven para nada." Pero como la sociedad necesita patrones estables para sostenerse, en el momento en que le dices a la gente que los patrones estables con los que funciona no son lo suficientemente buenos y necesitan ser sustituidos por otros, lo que ocurre es que creas tensi??n en el seno de esa sociedad. Aflorar??n fuerzas que desean que se introduzcan los cambios necesarios, y tambi??n lo har??n otras fuerzas que oponen resistencia porque no est??n dispuestas a cambiar. Esas son las din??micas b??sicas que funcionan en estos casos. Por todo ello, la gente que viene al mundo con la Cruz de los Deseos no permite nunca la complacencia en relaci??n con la ley.  ']
//     },
//     {
//         cruz: 'Cruz Angulo Izquierdo del Alineamiento 1',
//         img: imagesCruzes['alineamiento.jpg'].default,
//         texto: ['El don del ??ngulo izquierdo es estar siempre interconectado con geometr??as del pasado. Es decir, que su perspectiva parte siempre de esa sensaci??n del movimiento en la vida. Esa sensaci??n de movimiento se articula de la mejor manera posible en esta Cruz de Angulo Izquierdo del Alineamiento. Uno de los aspectos m??s interesantes de estas personas es que siempre encuentran alguna manera de alinearse con lo inesperado. Estos individuos son los que saben c??mo manejar ese momento de transici??n y encauzarlo en una direcci??n apropiada, aline??ndose con ??l. Es obvio que eso no es algo que se pueda hacer sin asumir alg??n riesgo. O sea que se trata tambi??n de una cruz de ??ngulo izquierdo que es capaz de provocar grandes desastres. Imag??natela de la siguiente manera. T?? est??s conduciendo una motocicleta por la carretera, y de repente un coche se cruza marcha atr??s en tu camino saliendo de una calle lateral. Ese es el ??ngulo derecho de esta cruz, lo inesperado que puede emerger en cualquier momento, pero la Cruz de Angulo Izquierdo del Alineamiento sabe c??mo esquivar esa embestida, salir rozando por el ??ngulo correcto, y acabar con la moto en los arbustos en lugar de empotrarse en el hormig??n de la pared que hay al otro lado. No importa lo que lo inesperado traiga consigo, la Cruz de Angulo Izquierdo del Alineamiento puede comenzar a darle el uso correcto para poder integrarlo en el flujo natural de las cosas. Esta cruz convierte lo inesperado en una simple se??al sobre el monitor del radar que luego desaparece.  ', 'Algo parecido al planeta J??piter engullendo el cometa Schoemaker-Levy. Golpeado por 27 fragmentos del cometa, cualquiera de los cuales hubiera terminado con toda vida sobre la Tierra, J??piter engull?? los 27 como si nada. Lo ??nico que qued?? de ellos fue un olor a pescado muerto. Es uno de los chistes favoritos de Ra, que cuando hicieron el an??lisis qu??mico de la colisi??n del cometa chocando con la atm??sfera de J??piter, el resultado era una sustancia qu??mica que describieron como algo cuyo olor recordaba al pescado muerto. Un hecho hilarante, si tenemos en cuenta que el cometa Shoemaker marc?? la llegada del final de la Era de Piscis. Pero ah?? est?? J??piter, sin haber sufrido ni un solo rasgu??o. Toda esta configuraci??n estaba presente en el momento del impacto, y para cuando impact?? sobre su superficie el ??ltimo de los fragmentos del cometa, el Sol ya hab??a pasado de la yuxtaposici??n al ??ngulo derecho de esta cruz, absorbiendo lo inesperado como si nada ocurriera.', 'En el terreno personal. hay dos cosas que debemos comprender acerca de estas personas. Debido a que reaccionan instant??neamente a lo inesperado, las personas portadoras de esta cruz son las que hacen desgraciadas a mucha gente dej??ndolas tras de s??. Con la Tierra de Dise??o en la l??nea 5 de la puerta 28 tenemos activada la l??nea de la Traici??n. El modo en que la traici??n funciona en un plano mundano lo ver??amos reflejado por ejemplo en alguien que tiene un profesor de algo, pongamos que, de m??sica, danza, o cualquier otra cosa. Pongamos que esa persona est?? muy satisfecha con el profesor que tiene. Todo funciona de maravilla entre ellos. De manera inesperada, aparece un profesor nuevo en la ciudad. La persona portadora de esta cruz se linear?? inmediatamente con el nuevo profesor. ??Inmediatamente! Tomar?? la emergencia de ese elemento inesperado y lo alinear?? con su vida dejando atr??s al viejo profesor con el que tan contenta hab??a estado antes. Claro, el profesor abandonado piensa que esa estudiante es una persona terrible, y proclama p??blicamente la traici??n a la que se ha visto sometido.  ', 'En los hechos puede resultar que ese alineamiento con lo inesperado lleve a la persona de esta cruz a simplemente hacer lo que considera m??s correcto para ella, y se est?? alineando con algo que le aporta una calidad superior en las ense??anzas que recibe, por poner un ejemplo. Sin embargo, en la mayor??a de los casos se trata simplemente de una reacci??n en la que intentan sacar ventaja de lo inesperado. Como si alguien que va de viaje se encuentra un letrero de desv??o y se deja atraer por ??l diciendo: "Bueno, veamos a d??nde conduce esto". Puede que su paseo lo lleve hasta Timbukt??, pero es simplemente un rasgo que acompa??a la naturaleza de estas personas.  ', 'En la sexta l??nea de esta cruz nos encontramos con verdaderos problemas, ya que la sexta es la l??nea del Halo de Gloria. Esta es gente que sacar?? ventaja de lo inesperado, que intentar?? alinearse con lo inesperado, y que quiz??s luego tenga que sufrir por ello dr??sticas consecuencias. Halo de Gloria es una l??nea que puede desembocar en depresi??n, en suicidio y en todo tipo de cosas poco recomendables. La capacidad de estos seres de simplemente saltar y alinearse ante lo inesperado los convierte en fuerzas muy interesantes, capaces de alinearse con cualquier cosa que les traiga el momento presente. Sin embargo, en t??rminos de lo que es su relaci??n con los dem??s, es siempre gente que, de un modo u otro, en el intento de adivinar el movimiento siguiente, va dejando atr??s a otras personas.  ']
//     },
//     {
//         cruz: 'Cruz Angulo Izquierdo del Alpha 1',
//         img: imagesCruzes['alpha.jpg'].default,
//         texto: ['Los l??deres m??s poderosos nacen con la Cruz de Angulo Izquierdo del Alpha. La geometr??a transpersonal es siempre la que m??s impacta sobre un mayor n??mero de personas. Tambi??n las personas que tienen su Sol de Personalidad en una quinta l??nea, porque les confiere un potencial natural para universalizar y seducir a los dem??s. Debido a que la quinta es una l??nea que vive en el ??mbito de las proyecciones, acaba siendo siempre el objetivo de las proyecciones ajenas, que esperan de ella que sea su Salvador, su General, su Santo, y todos esos temas tan filantr??picos.  ', 'Sin embargo, el aspecto m??s importante de la quinta l??nea reside en su sentido pr??ctico. El sentido pr??ctico de la quinta l??nea es una de las razones fundamentales por las que el ??ngulo izquierdo logra tener ??xito al intentar hacer llegar a otros la informaci??n que maneja. Aportando siempre elementos pr??cticos, es capaz de alcanzar al mayor n??mero de personas. En la Cruz de Angulo Izquierdo del Alpha tenemos la capacidad de ejercer la influencia de un modo pr??ctico - guiando a otros al resolver sus problemas en el plano mental. M??s importante todav??a, guiando a otros en la presunci??n de que as?? ser??n capaces de sobrevivir.  ', 'La Cruz de Angulo Izquierdo del Alpha es un elemento muy importante para nuestra especie. Recuerda lo que representa un Alpha en el mundo mam??fero - el Alpha es el que es capaz de asegurar que todo el mundo tendr?? acceso a la comida. Al margen de las recompensas sexuales y jer??rquicas que reciban, la realidad es que si no tiene ??xito a la hora de asegurar el alimento suficiente para todos, entonces su liderazgo no llegar?? muy lejos porque no funciona en la pr??ctica.  ', 'Es absolutamente necesario que la influencia pr??ctica del Alpha traiga alivio para los ancestrales miedos de la puerta 44, que proceso nuestros miedo al pasado y a la extinci??n. Aqu?? procesamos nuestro miedo a ser eliminados, a no tener suficiente para comer, que son dos de los miedos m??s profundamente arraigados en los seres humanos. El Alpha es el que es capaz de resolver esos miedos para nosotros - claro que esa es, precisamente, la proyecci??n que todos tienen de ??l. La proyecci??n de los dem??s es que el Alpha ser?? capaz de sacarnos de la consternaci??n mental, y de aliviar nuestros miedos a no ser capaces de valernos por nosotros mismos. Eso es lo que hacen las personas que nacen con esta Cruz del Alpha. Otros dir??n luego: "Vale, t?? eres un l??der, y te seguiremos". Para eso es para lo que nacen los Alphas, por lo que cuando maduran suelen alcanzar posiciones de influencia en el ejercicio de ese poder.  ']
//     },
//     {
//         cruz: 'Cruz Angulo Izquierdo del Clari??n 1',
//         img: imagesCruzes['clarion.jpg'].default,
//         texto: ['Al llegar al ??ngulo izquierdo del hexagrama nos encontramos con la Cruz de Angulo Izquierdo del Clari??n, y esta es gente a la que le gusta darte el shock con las novedades que ven venir. Ser un clari??n es b??sicamente una labor p??blica. Desde un plano transpersonal, su papel consiste en llevar el shock a aquellos que lo han estado esperando. Es muy diferente a la yuxtaposici??n, que tiene el don de dar el shock por el shock en s?? mismo, pero en el momento en que se convierte en algo transpersonal hay tambi??n alguna implicaci??n k??rmica. De modo que aquellos que reciben el shock de las personas de la Cruz de la Clari??n son los que lo estaban esperando.  ', 'Esta es la cruz de Ra, y a ??l le ha tocado aprenderlo a trav??s de los miles de lecturas que ha hecho. Es incre??blemente raro encontrar a alguien que no est?? dispuesto a recibir un shock de ??l. Es parte de ello, parte del trato que tenemos juntos. Es un pacto invisible y desconocido, porque es simplemente el modo en que estamos estructurados. Aqu?? se trata de la experiencia del shock.  ', 'El Clari??n viene cargado de sonido, y entre sus funciones est?? la de hacer todo el ruido que pueda. Es decir, que hay siempre mucho ruido acompa??ando a esta cruz, hay siempre un cierto bla, bla, bla que la acompa??a, adem??s del hecho de ser una cruz mutante porque 3 de sus 4 puertas son individuales. Los mismos que est??n abiertos a recibir el shock de ellos, ser??n tambi??n los receptores del potencial para la mutaci??n que hay en esta cruz.  ', 'Una de las cosas m??s fascinantes que han descubierto acerca del funcionamiento del cerebro es el fen??meno del candado y de la llave, en el que hay receptores esperando por algo que encaja en ellos con exactitud. Lo que ocurre en el proceso de la mutaci??n es que, si est??s esperando a que te den un shock, eres tambi??n portador del potencial para aceptar la mutaci??n de otros. No todo el mundo puede absorber una mutaci??n. Est??n aquellos que son totalmente resistentes a toda mutaci??n, y est??n los que tienen una receptividad natural hacia ella. Ese es uno de los acuerdos t??citos que existen siempre en cualquier fen??meno relacionado con las personas de ??ngulo izquierdo. La gente le dice a la persona de quinta l??nea: "Me has seducido." A lo que este responde: "S??, pero eso es lo que quer??as." Este es el fen??meno del candado y de la llave, que es c??mo funcionan los fen??menos del ??ngulo izquierdo.  ', 'Es muy importante reconocer aqu?? que cuando trat??bamos con la Cruz de la Penetraci??n la gente no estaba necesariamente preparada para encajar el shock. No estaba preparada, y de repente se da cuenta de que est?? siendo penetrada. Luego tenemos la yuxtaposici??n que dice: "Oye, me gusta esto de dar el shock a la gente. Vamos a darle un shock a todos." Al llegar finalmente al ??ngulo izquierdo nos dice: "Solamente dar?? un shock a aquellos que est??n preparados para recibir el shock a mi manera." Por supuesto que no es que tomen conscientemente esa decisi??n, sino que simplemente acaban d??ndole el shock a aquellos que estaban preparados para ello.  ']
//     },
//     {
//         cruz: 'Cruz Angulo Izquierdo del Dominio 1',
//         img: imagesCruzes['dominio.jpg'].default,
//         texto: ['El Sol / Tierra de Personalidad sigue estando en las puertas 63 y 64 respectivamente, de modo que la presi??n sobre el plano mental de nuestras vidas prosigue en esta cruz. Sin embargo, lo que acompa??a esta presi??n mental que opera en la Personalidad es el Sol de Dise??o en la puerta 26 y la Tierra de Dise??o en la 45. Esta Cruz de Angulo Izquierdo del Dominio trata sobre la usurpaci??n o conquista del poder. La mente nos ofrece aqu?? una oportunidad de acceder al poder. Es decir, que puede que seas un semental o que tengas unos pechos maravillosos, pero si realmente quieres tener ??xito es mejor que tengas algo en la sesera, porque eso ser?? lo que marque la diferencia entre los dem??s y t??.   ', 'Vemos que lo primero a lo que nos lleva el programa evolutivo es a equiparnos debidamente para la supervivencia en el plano f??sico para luego, de repente, introducirnos en el plano racional de la existencia. "Perdonen, pero no es suficiente. Simplemente no es suficiente." Ese es el mensaje que nos trae la evoluci??n del programa. La usurpaci??n es algo que emerge en los seres humanos a partir del nacimiento de nuestra capacidad mental, de la conciencia racional. Dicho de otra forma, si eres consciente de las debilidades de alguien, siempre puedes aprovecharte de ellas. Es verdad que hay gente que dir??a: "Oye, eso no est?? bien." Pero hay situaciones en las que la usurpaci??n es el ??nico camino posible. Al fin y al cabo, se trata de un proceso transpersonal que no puede llevar a cabo uno solo. Usualmente, aquellos cuyo poder usurpan han estado esperando durante eones a que regresaran y finalmente se hicieran con el poder. No olvidemos que hablamos de un proceso k??rmico y transpersonal.  ', 'Lo que esto nos dice en realidad es que desde el momento en que creemos tener un pacto seguro en el seno de la comunidad, que nos da acceso a una sexualidad aceptable y a tener hijos, corremos el riesgo de que alguien m??s listo que nosotros nos lo arrebate todo. "??No te gustar??a comprar el Puente de Brooklyn? Pues dame tus ahorros." Los timos siempre responden a un clich??, pero uno no deja de escuchar historias como la de la anciana de Omaha que le entreg?? por tel??fono a alguien, a quien no hab??a visto nunca en su vida, la cantidad de 85.000 $ para billetes de loter??a. A todas horas hay seres humanos que lo pierden todo, porque caen desprevenidos en las garras de aquellos dispuestos a aprovecharse de su debilidad. Estamos en una realidad darwiniana, en la que la supervivencia solamente est?? garantizada para los mejor preparados, un mundo donde todo se trata a cara de perro. Si invitas a alguien con este tipo de configuraci??n a ser tu pareja, corres el riesgo de terminar siendo su esclavo. Es as?? como funcionan las cosas. Con frecuencia lo hacen realmente bien, con lo que el resultado puede representar alg??n tipo de mejor??a. Pero tambi??n puede que no sea as??.']
//     },
//     {
//         cruz: 'Cruz Angulo Izquierdo del Empe??o 1',
//         img: imagesCruzes['empeno.jpg'].default,
//         texto: ['Estas personas son agentes muy importantes para todos los procesos de cambio. Son los que ponen en marcha todo tipo de cosas nuevas. A partir de la yuxtaposici??n, donde no se pod??a necesariamente ejercer siempre el control sobre las cosas existentes, encuentran la oportunidad de desarrollar algo nuevo sobre lo que pueden ejercer y mantener el control. Al llegar al ??ngulo izquierdo de esta cruz, el impulso se convierte en un proceso cooperativo que es mucho m??s cercano a su verdadera naturaleza tribal porque es transpersonal. De modo que de esta Cruz del Empe??o nacen todo tipo de empresas nuevas, que est??n controladas para que estos seres puedan entrar a formar parte de ellas. Hay, por ejemplo, un empe??o mundial por completar el mapa del genoma humano. ', 'Este es el tipo de cosa para el que esta cruz sirve de instrumento, debido a su capacidad de reunir en torno a ella fuerzas diferentes dentro de un entorno controlado con el prop??sito de alcanzar alguna meta. Otro ejemplo lo tenemos en el esfuerzo de los americanos por hacer aterrizar un hombre en la Luna. Ese es un ejemplo cl??sico de este tipo de configuraci??n, en el que es preciso reunir diferentes fuerzas en torno a un prop??sito com??n aunque luego deban estar sometidas a un control f??rreo. No se trata aqu?? del cient??fico loco en su laboratorio, sino del desarrollo de estructuras comunales en las que hay alguien que controla la direcci??n y va abriendo nuevos campos.  ']
//     },
//     {
//         cruz: 'Cruz Angulo Izquierdo del Esp??ritu 2',
//         img: imagesCruzes['espiritu.jpg'].default,
//         texto: ['La segunda variante de la Cruz de Angulo Izquierdo del Esp??ritu nace con la oposici??n del Sol a la que vimos cuando el Sol transitaba la puerta 55. En esta posici??n el esp??ritu nos llega a trav??s de la l??nea 59.5, que es una l??nea de las m??s extra??as, ya que es una l??nea que trata de la seducci??n. Dotada por naturaleza de ese poder de seducci??n, la quinta l??nea representa siempre lo que a uno le gustar??a ver en cada puerta. No nos conformamos con ser como el cavern??cola de la primera l??nea - resulta un tanto aburrido, lo que en realidad nos gustar??a en acceder a la seducci??n y al romance, ambos encarnados en la naturaleza de la quinta l??nea. Sin embargo, todo ese poder de seducci??n de la quinta l??nea tiene sus ra??ces en las proyecciones que es capaz de suscitar en los dem??s. Una persona con la 59.5 pasa muy malos ratos debido a los gestos e insinuaciones que recibe de quienes pasan a su lado. No hay nada que la pueda salvar de eso, porque encarna una l??nea dise??ada para suscitar proyecciones. Todo el mundo proyectar?? sobre esa persona que est?? disponible para la intimidad, tanto si efectivamente es as?? como si no. Todo el mundo proyectar?? sobre ella que est?? intentando seducirlos. Se le mete una mota de polvo en un ojo, y los dem??s creen que est?? flirteando con ellos. Ya digo, no importa lo que haga. Si lo niega, se enfadar??n con ella y le dir??n que es una provocadora y todas esas cosas.  ', 'Imagina lo que le ocurre a la gente que nace con esta cruz de encarnaci??n. Es gente que vive siempre inmersa en el ??mbito de las proyecciones. De ah?? que cuando se adentra en ??l, y se vincula afectivamente con alguien, luego acaba descubriendo que todo estaba basado en simples proyecciones. "Yo cre??a que t?? eras...." "Bueno, pues no lo soy." "Yo pensaba que eras alguien..." "No es culpa m??a." ', 'Es preciso recordar, al llegar a la l??nea 59.6, que tenemos por delante una mutaci??n que afectar?? al funcionamiento de nuestro sistema emocional y particularmente a nuestra forma de concebir y experimentar la intimidad. Esa mutaci??n afectar?? tambi??n a todas las sextas l??neas, no importa a qu?? puerta pertenezcan, ya que as?? es como funciona la naturaleza de la continuidad gen??tica. Como el arranque de la mutaci??n tendr?? lugar en la l??nea 55.6, el eje de las l??neas 59.6 y 55.6 tiene una sensibilidad especial hacia ese fen??meno que se avecina.  ', 'La l??nea 59.6 se llama Amor de una noche. He hablado muchas veces del verdadero significado de ese nombre. Al fin y al cabo, la naturaleza de la sexta l??nea la lleva a evolucionar a trav??s de tres etapas marcadamente distintas a lo largo de su vida. Durante los primeros 28 a??os aproximadamente, mientras completa su primer ciclo de Saturno, vive su vida b??sicamente con las din??micas del intento y error - caracter??sticas de una tercera l??nea - con lo que la experiencia de su sexualidad queda marcada por un proceso de v??nculos afectivos que se rompen siempre despu??s de haber sido establecidos. Sin embargo, todas las sextas l??neas albergan un profundo optimismo en lo m??s hondo de su ser, que se nutre de su propia necesidad de poder confiar y mantener la esperanza. Es decir, que para las personas de sexta l??nea la sexualidad puede ser una experiencia muy ca??tica durante esos primeros treinta a??os de vida, y sus experiencias de amor de una noche acaban siendo tan desastrosas que desarrollan un profundo pesimismo al respecto.  ', 'Para el momento en que se completa el retorno de Saturno, la sexta l??nea se refugia en el tejado de la casa y se distancia de la intimidad. Mientras permanece en su refugio, la sexta l??nea no deja de buscar a su alma gemela, y de ponderar acerca de su posible existencia y de si hay una manera de encontrarla en este mundo. Ya he contado muchas veces la historia de c??mo la gente que se refugia en el tejado, al observar a quienes est??n en una relaci??n saludable, tiende a querer a la persona de esa relaci??n para s?? misma. Es decir, que son personas que est??n siempre atentas a lo que est?? pasando ah?? fuera. Cuando su vida llega al retorno de Quir??n, a los 50 o 51 a??os, tienen que volver a descender del refugio del tejado, e implicarse de nuevo en la refriega del mundo y en la intimidad.  ', 'Reflexiona acerca de las consecuencias que esa mutaci??n del Plexo Solar traer?? consigo. Nuestra sexualidad, tal y como la conocemos hoy, se acerca paulatinamente a su fin. No es que vaya a desaparecer de un momento al otro, sino que ser?? un proceso que se extender?? durante cientos de a??os. Sin embargo, si queremos comprender la naturaleza de ese tipo de sexualidad, es preciso reconocer que solamente hay un alma gemela con la que te puedes encontrar, y que reside en tu propio interior. Los humanos estamos programados para funcionar a trav??s de dos cristales, que operan cada uno de un modo muy distinto al otro. Solamente tenemos acceso consciente y familiaridad con uno de ellos, pero nos gu??a y vivimos inmersos en el dominio del otro. En el momento en que recuperas la armon??a con tu naturaleza original - con tu propio dise??o, en el momento en que permites que esos dos aspectos de ti representan la totalidad que es mayor que la suma de sus partes, ese es tambi??n el momento en que encuentras a tu alma gemela, porque ah?? es d??nde descubres el verdadero amor a ti mismo. Sin amor a uno mismo, no puede haber amor verdadero. Es todo una simple farsa.  ', 'El amor m??s profundo al que podemos acceder es el que est?? presente en la sexta l??nea, y en la sabidur??a que la sexta l??nea es finalmente capaz de comprender. No se trata de encontrar nada de eso en el mundo exterior, sino en el interior de uno mismo. Una vez has descubierto eso en tu propio interior, es muy f??cil reconocer qui??n est?? preparado para ti en el mundo exterior - esa es la transformaci??n del esp??ritu que aqu?? se hace posible. La puerta 55 est?? en la ra??z de nuestra necesidad emocional y humana de amor, de un amor con una cualidad rom??ntica y profunda. Se trata aqu?? de la transformaci??n de la relaci??n que existe entre el amor y la sexualidad. Como ya he dicho, soy incapaz de predecir a d??nde nos conduce ese proceso, pero no me cabe ninguna duda de que son cosas que est??n cambiando y que cambiar??n todav??a m??s. A medida que el sistema emocional se va haciendo m??s y m??s consciente, nuestra manera de manejarnos en el ??mbito de las emociones ir?? cambiando. Recuerda que el Plexo Solar regula tambi??n nuestra manera de alimentarnos, por lo que el impacto de esa mutaci??n se dejar?? sentir con m??xima influencia en el ??mbito de nuestra sexualidad y de todo lo que nos procura placer.  ', 'El paso siguiente, que nos lleva de la puerta 59 a la 40, es realmente encantador. La puerta 59 encarna nuestras estrategias sexuales para la intimidad y la reproducci??n, y la puerta 40 es la puerta de la masturbaci??n. ??No te parece divertido? Oh, en el berenjenal en el que me he metido. ??No quer??as encontrar a tu alma gemela? Pues eso, eres t?? mismo. No son los dem??s.  ']
//     },
//     {
//         cruz: 'Cruz Angulo Izquierdo del Esp??ritu 1',
//         img: imagesCruzes['espiritu.jpg'].default,
//         texto: ['Al llegar a las l??neas transpersonales de la puerta 55 entramos en la Cruz de Angulo Izquierdo del Esp??ritu. En esencia, su mensaje no puede ser m??s claro ni m??s b??sico, y dice as??: "D??jame que te haga el amor, eso me har?? sentir mejor. ??C??mo? ??Qu?? es demasiado crudo? ! qu?? le vamos a hacer...! Es bueno para mi esp??ritu." Eso es lo que es, eso es lo que dice, y eso es lo que realmente quiere. No s??lo eso, lo que realmente le gustar??a es acompa??arlo todo de una buena comida. "Vayamos a un buen restaurante y despu??s hagamos el amor." Si alguien viene al mundo con esta cruz, la carencia de acceso al amor y a una buena comida puede ser devastadora para su vida. La importancia de estas dos cosas es crucial en la vida de estos seres.  ', 'La comida es uno de los temas dominantes, ya que nos encontramos todav??a al comienzo del Cuarto de la Iniciaci??n. Estamos tratando todav??a con temas tan b??sicos como el sexo, la comida, y las necesidades que debemos satisfacer para poder sobrevivir y seguir adelante con nuestro proceso. La realidad es que contemplando el Sol de Personalidad en la puerta 55 tenemos la Tierra de Personalidad en la puerta 59, con lo que es obvio que ra??ces y el asentamiento de la personalidad provienen de su estrategia sexual. Si hablaran, esas ra??ces de la personalidad dir??an: "Mi esp??ritu se nutre de mi estrategia sexual."  ', 'Con la naturaleza transpersonal de la quinta l??nea, y el contrapeso de la Tierra en la 59.5, tenemos aqu?? la l??nea de la seducci??n que dice: "D??jate seducir por m??, porque si triunfo en seducirte mi esp??ritu se sentir?? maravillosamente bien. Es bueno para mi esp??ritu, porque a mi esp??ritu le encantan los juegos de seducci??n." La existencia de esta cruz de encarnaci??n en el dise??o de alguien revela un tema individual muy din??mico en la fluctuaci??n de los estados de ??nimo que puede descalabrarse emocionalmente con mucha facilidad. Dicho de otra forma, si no encuentran el acceso que necesitan a esas cosas es gente que acaba desarrollando problemas en su relaci??n con la sexualidad y la comida. Aqu?? podr??s encontrar gente con problemas de anorexia y bulimia, y gente que vive obsesionada por alguien, por ejemplo, alguien obsesionado con poseer o hacer el amor a alguien a quien no puede tener acceso. No se trata del amor no solicitado que los individuos son capaces de profesar hacia alguien, "Oh, es maravilloso amar lo que no puedo tener. D??jame escribir un poema." En su lugar nos toca escuchar los terribles lamentos del No-ser de estos seres humanos. "Es terrible amar lo que no se puede tener. Lo que voy a hacer es echarme a la calle e ir a por ello."  ', 'La mutaci??n no llega nunca hasta que no alcanzamos la sexta l??nea del hexagrama. Es muy interesante fijarse en el chiste y en la paradoja constante que establece la propia evoluci??n - es algo engranado en su programaci??n. En el mismo momento en que tiene lugar una transici??n, viene autom??ticamente acompa??ada de alguna imperfecci??n. Ese defecto engranado en la evoluci??n es como el agujero de alcantarilla en medio de la calle. La ca??da de algunas personas sirve para el aprendizaje de las dem??s. Pero eso no significa que no vaya a seguir existiendo alg??n punto d??bil o defectuoso en cada paso. Si contemplamos el eje 55.6/59.6 de esta cruz, donde tendr?? lugar la mutaci??n de la cual venimos hablando, con un poco m??s de detenimiento, podemos ver que el Sol de Dise??o est?? posicionado en la tercera l??nea de la puerta 9, que se llama la gota que colma el vaso. Esta es una l??nea que trata del detalle pasado por alto que puede predeterminar el fracaso de cualquier experimento. Las normas del juego son honradas, y nadie parte con ventaja. No creas que a partir de ah?? todo ser?? m??s f??cil. Aqu?? llega el siguiente paso de la evoluci??n, y enseguida estamos todos convencidos de que todo es fant??stico. Perdona, pero d??jame que te diga que, aunque creas que todo ser?? fant??stico, aunque creas que esto es mejor que lo que ten??as antes, sigues teniendo que v??rtelas con esto, con aquello y con lo de m??s all??. Siempre hay algo..." No sabemos de qu?? adolecer?? esta nueva generaci??n de seres humanos que vendr?? al mundo, pero sabemos que siempre hay alg??n detalle que pasamos por alto. Siempre hay detalles importantes que permanecen velados, y lo que es peor, esos detalles bien pueden ser la paja que rompe la espalda del camello.  ', 'El aspecto m??s fascinante acerca de la mutaci??n emocional que est?? por venir es que, cuando la especie haya mutado y est?? provista de una nueva sede para la consciencia, dar?? nacimiento a una nueva especie. Esto significa que todos los dem??s miembros de la vieja especie estar??n limitados y no tendr??n acceso a esta nueva forma de consciencia. Es previsible que el conflicto y la convulsi??n social resultante de esto ser?? enorme. Hay en esto una gota que amenaza con colmar el vaso, una paja que amenaza con romper la espalda del camello, hay algo detr??s del funcionamiento de todo esto que es mucho m??s profundo de lo que alcanzamos a comprender. No hay ninguna manera de que podamos imaginar el modo en que eso puede llegar a desarrollarse. Despu??s de todo, es algo que nacer?? de la ra??z misma del f??nix durmiente. No sabemos qu?? es lo que emerger?? a partir de eso.  ']
//     },
//     {
//         cruz: 'Cruz Angulo Izquierdo del Individualismo 2',
//         img: imagesCruzes['individualismo.jpg'].default,
//         texto: ['Esto nos lleva a la segunda variaci??n de la Cruz de Angulo Izquierdo del Individualismo. El del eje de las puertas 38 y 39 en la configuraci??n de esta cruz nos se??ala que sus portadores son seres cuya simple presencia hace que la gente se sienta provocada. Esto debe ser tenido en cuenta cuando trates con la naturaleza de esas dos puertas. Es simplemente su modo de ser, y no se puede hacer nada por evitarlo. Los nativos de la Cruz de Angulo Izquierdo del Individualismo no est??n tensos en s?? mismos, sino que   crean tensiones en los dem??s. En eso es en lo que son realmente buenos - en provocar tensi??n en otros. Luego se extra??an y se preguntan por qu?? todo el mundo se enoja con ellos, y proclaman su inocencia absoluta, que es el aspecto m??s extraordinario de   ???estas personas. ', 'Ten??a un amigo nacido con esta cruz de encarnaci??n que nunca pudo entender por qu?? las mujeres de su vida explotaban repentinamente e intentaban matarle. No era capaz de comprenderlo, y dec??a a quien quisiera o??rlo: "Pero si yo soy buen t??o". La realidad es que los nacidos con esta Cruz de Angulo Izquierdo del Individualismo viven su individualidad del modo m??s provocador posible. Puedes reconocer la ra??z de eso en la Cruz Yuxtapuesta de la Oposici??n que acabamos de dejar atr??s. Tomar una postura fija sin raz??n ninguna aparente, s??lo para ver lo que ocurre. No es de extra??ar que la mayor??a se enfurezca ante esa actitud. Te meten en el cuerpo todo tipo de tensiones, y no sabes si hablan en serio o no.  ', 'Son personas capaces de decir las cosas m??s audaces y desconcertantes. Encienden el fuego en tu caldera interior, y te ponen a bla, bla, blabear sin apenas darte cuenta. Mientras tanto, ellas se relajan y se acomodan, absorbiendo todo lo que ocurre, y pensando: "Ya te tengo. Ahora la tensi??n es tuya - no es m??a". Es tan divertido contemplar el modo en que funciona el mundo. De un lado tenemos a la gente que va por ah?? con los hombros encogidos por el dolor, y de otro tenemos a la gente que le provoca dolor de hombros a los otros. Eso est?? realmente bien - esa es la diferencia entre el ??ngulo derecho y el ??ngulo izquierdo. El ??ngulo derecho tiene su propio dolor, mientras que el ??ngulo izquierdo se lo pasa a todos los dem??s. "Aqu?? est??, t??malo".  ']
//     },
//     {
//         cruz: 'Cruz Angulo Izquierdo del Oscurecimiento 1',
//         img: imagesCruzes['oscurecimiento.jpg'].default,
//         texto: ['La Cruz de Angulo Izquierdo del Oscurecimiento es una cruz un tanto extra??a. ??Has le??do alguna vez algo de Alice Bailey? Ciertamente parec??a haber nacido con esta cruz, ya que sus escritos son m??s bien opacos. En la Cruz de Angulo Izquierdo del Oscurecimiento los detalles son realmente borrosos, y son utilizados para confundir las cosas. Se dan detalles, pero realmente no se dice nada. Mi comentario sobre Alice Bailey se refiere a los libros tibetanos, que fueron escritos en lenguaje del siglo XIX, y que son t??picos del oscurantismo de esta cruz. Se dec??a algo y todo el mundo intentaba seguir esas instrucciones: "Solamente los estudiantes experimentados que hayan alcanzado el s??ptimo nivel de bla, bla, bla, tendr??n noci??n de la importancia de ese detalle que mencionamos antes". ??A qu?? detalle se refer??a? Si volv??as atr??s a repasar todo lo que se hab??a dicho, acababas confundido: "??De qu?? habla? No veo nada claro a qu?? se est?? refiriendo". Pero as?? es como funciona esta Cruz del Oscurecimiento.  ', ' Como la l??gica est?? desesperada por los recursos energ??ticos, hay gente que har?? trampas para lograr acceder a ellos. A trav??s de detalles y estad??sticas, estas personas intentan encubrir ciertos aspectos de la realidad con el fin de impedir ver claramente el problema central, creyendo que quiz??s de ese modo puedan todav??a tener acceso a la energ??a que necesitan. Alterando un poco las actas, cambiando levemente los n??meros, intentan conseguir lo que quieren oscureci??ndolo un poco la realidad. Al fin y al cabo, como ??ngulo izquierdo lo hacen siempre en beneficio de la otra persona.  ', 'Otro factor de importancia en la naturaleza del oscurantismo es que esta gente puede identificarse con detalles de importancia nimia - al menos eso es lo que parece. Los dem??s pueden tener una impresi??n verdaderamente extra??a de estas personas. Por ejemplo, alguien que necesita saber cu??ntos P??rez hay en la gu??a telef??nica. Te preguntar??s si es esencial saber eso. No es m??s que una peque??a muestra del oscurantismo en los detalles en los que pueden caer las personas de esta cruz. Uno podr??a burlarse de esas cosas, pero al mismo tiempo los detalles oscuros pueden conducirnos a descubrimientos extraordinarios. No lo olvidemos. Deber??amos estar agradecidos de que, en alguna parte, alguien est?? inmerso en el trabajo en alg??n peque??o detalle oscuro que un d??a puede ser de valor para todo el colectivo humano. No obstante, puede que te resulte un poco excesivo tenerlos cada noche sentados a tu mesa a la hora de cenar habl??ndote de su oscurantismo.  ', 'Si entras en relaci??n con los dem??s siendo t?? mismo, todos los aspectos aparentemente dif??ciles de estas cruces dejar??n de molestarte - no importa de qu?? aspecto estemos tratando - y te llevar??n a descubrir la mitolog??a que hay detr??s de ellos sin tener que sufrir el dolor de ser su portador. Despu??s de todo, la parte m??s profunda de esta informaci??n es que te da acceso a reconocer los arquetipos que hay en cada una de estas cruces. Las cruces de encarnaci??n son los arquetipos de todos los dioses que hemos conocido, de todas las fuerzas ocultas y demonios, de todos los esp??ritus y duendes. Todos estamos inmersos en la experiencia de la mitolog??a que hay en estas cruces de encarnaci??n. Hay una historia mitol??gica detr??s de cada una de ellas, y dioses y diosas que est??n ah?? para jugar ese papel. Como todos somos portadores de eso en nuestro propio fuero interno, puedes comenzar a reconocer tu propia cruz y tambi??n la de aquellos que tienes a tu alrededor; obs??rvalo y ver??s. Observa el desvalimiento con el que todos tenemos que participar en ese juego cual, si fu??ramos marionetas, y reconoce al mismo tiempo la belleza que hay detr??s de todo eso; reconoce la contribuci??n que cada uno de nosotros hace desde el m??s profundo desvalimiento e indefensi??n. ']
//     },
//     {
//         cruz: 'Cruz Angulo Izquierdo del Plano Mundano 2',
//         img: imagesCruzes['planomundano.jpg'].default,
//         texto: ['Al llegar al ??ngulo izquierdo de este hexagrama, nos adentramos en el aspecto m??s denso del mundo. Esta es la Cruz de Angulo Izquierdo del Plano Mundano. El ??ngulo izquierdo representa siempre al agente publicitario en la estructura del hexagrama de cada cruz. Esa es la funci??n del ??ngulo izquierdo. El Perfil 5/1 va por ah?? presumiblemente resolviendo los problemas que la sociedad proyecta, mientras que la sexta l??nea se limita a observarlo todo y a confirmar si los problemas se han resuelto o no, pero b??sicamente, las dos se dedican a hacer llegar a los dem??s ese campo de informaci??n. En ese mismo contexto, la Cruz de Angulo Izquierdo del Plano Mundano tiene una funci??n muy importante, porque hace que la gente se adentre profundamente en el plano material de la existencia. A trav??s de ella accedemos al reconocimiento de que el plano material es el que m??s nos beneficia, ya que nosotros mismos estamos hechos de materia.  ', 'Recuerdo cuando asist??a a la universidad all?? por los a??os sesenta, y hab??a un enorme movimiento socialista de tendencias izquierdistas que se auto-proclamaba anti-materialista. Personalmente, me asustaba el t??rmino ??anti-materialismo??, porque no pod??a dejar de preguntarme a m?? mismo: "??Y qu?? vamos a hacer sin todas esas cosas? ??Qu?? significa ??anti-materialismo???" Una de las cosas m??s importantes que debemos comprender acerca de ser humanos es que nos encarnamos para trabajar. Cuando tuve mi experiencia con la ??Voz??, fue lo primero que me dijo. Me dio un susto de mil demonios. La ??Voz?? me dijo: "??Est??s listo para trabajar?" Se trata de trabajo. Estamos aqu?? para trabajar, para producir y ser productivos mientras estamos aqu??. Estamos aqu?? para todas esas cosas, para estar permanentemente ocupados haciendo todo tipo de cosas. Ese es el dise??o del ser humano; estar ocupado! Los tres canales que se forman a partir de oposiciones en el zodiaco nos dan una idea muy aproximada de esa realidad, ya que son un claro indicativo de que la mayor??a de seres humanos tienen un modo m??s bien raro de pensar (canal 43/23), est??n permanentemente ocupados (canal 20/34) y mucho mejor para ellos si pertenecen a algo (canal 40/37). O sea, que estar en el mundo es lo ??nico que realmente funciona en la vida. Simplemente funciona.  ', 'Al ense??ar o presentar el Dise??o Humano a otros, puedo enfocarlo de muchas maneras distintas - como as?? lo he venido haciendo a lo largo de todos estos a??os. Puedo hacer una presentaci??n desde una perspectiva de la sexualidad humana, desde una perspectiva m??dica, o simplemente desde un nivel mundano, por mencionar algunas. Lo ??nico que no he hecho hasta ahora profesionalmente es una presentaci??n del Dise??o Humano desde la perspectiva de los negocios, porque al final, ver??s, volvemos todo el tiempo a lo mismo. Si vives de acuerdo a tu tipo y tu estrategia, entonces obtendr??s todos los recursos materiales que necesitas. Decir esto no equivale a una promesa de que vayas a hacerte rico. No es cuesti??n de que tengas m??s de lo que necesitas. La realidad es que si vives en concordancia con tu propia naturaleza, entonces siempre tendr??s acceso a todo lo que necesitas.  ', 'Algunas personas necesitan verdaderamente tener acceso a m??s de lo que necesitan para s?? mismas, y tendr??n acceso a ello cuando sea necesario. Otras necesitan tener algo menos de lo estrictamente necesario, y ser?? eso lo que obtengan. Pero nadie se quejar?? de su suerte, porque todos formamos parte del mismo mundo. Cuando yo me detengo a contemplar la realidad del mundo, me siento inmensamente feliz de no tener un esp??ritu humanitario, porque no dejar??a de llorar nunca m??s. Me parece tan absurdo que exista el hambre y el dolor. Es completamente absurdo, de verdad. Es absurdo que haya gente en este planeta - millones de personas - que vive con el promedio de $1 por d??a, o cualquiera que sea el m??sero promedio. La realidad de los hechos nos demuestra que tenemos una conexi??n natural con el mundo material, porque formamos parte de ??l. Creemos que existimos al margen de ??l, pero no es as?? - somos parte intr??nseca de ese plano.  ', 'En el momento que sepamos habitarlo en concordancia y respeto a nuestra naturaleza individual, las necesidades materiales estar??n cubiertas. Los hechos nos ense??an claramente que el mayor problema de la humanidad reside en el manejo de esa realidad material. No hay m??s que tener en cuenta que el 75 % de las mujeres del planeta invierten medio d??a solamente buscando agua y madera para el sustento de sus familias. La cuesti??n no se resuelve quit??ndoselo a los ricos y d??ndoselo a los pobres, sino que se resuelve instruyendo a la gente para que viva en concordancia con la propia naturaleza. No es una cuesti??n de elegir entre el socialismo y otras opciones pol??ticas, de elegir entre esto o aquello, sino que se trata de reconocer que hay realmente suficiente para todos, no importa cu??l sea el dise??o de cada uno, si nos atrevemos a vivir de acuerdo a lo que somos.  ', 'Si quieres llegar a conocer tu propia vida material, entonces vive tu dise??o. Maneja el mundo material de acuerdo a como es natural para ti, y observa luego las cosas que atraes a tu vida. Es un proceso muy distinto al que tu ficticia autoridad mental desesperadamente intenta imponer, dici??ndote siempre lo que tienes que hacer y c??mo llegar a conseguirlo. Luego es cuando te sientes realmente atrapado en el maya de este plano mundano y material del mundo, y eso s?? que duele. Pero ver??s, las personas que nacen con esta cruz est??n preparadas para ese dolor. No sufren en vano, en el sentido de que est??n aqu?? para guiarnos a todos a trav??s de ese plano de nuestra existencia. Cuando sufren de verdad es cuando intentan escapar de ese plano pretendiendo haberlo trascendido. Entonces s?? que sufren. Ah?? es cuando quieren dejar atr??s este dominio terrenal y abandonar el cuerpo de una vez por todas. Entonces quieren saber qu?? es lo que hay en el otro lado, pero sufren, porque han nacido para vivir en la densidad de este mundo.  ', 'Eso es lo que somos, al fin y al cabo. Me encantan esas fotograf??as de la Tierra vista desde el espacio, porque en ellas nosotros hemos dejado de existir. En ellas nos integramos completamente en un aspecto m??s de la materia que conforma la Tierra, que es lo que somos de verdad. Somos la Tierra, y ella es nosotros. Nuestra existencia como algo separado de ella - en la que esto es esto y aquello es aquello - es una pura ilusi??n. Estamos en el mundo, y de esa realidad emana una energ??a natural que se manifiesta como nuestra geometr??a. Es algo que nos ocurre a todos. ??Has visto alguna vez c??mo se alimenta una ballena? Nada a trav??s de todo un bancal de diminutos pececillos, abriendo su gigantesca boca, y simplemente lo cruza. No hace nada, sino que simplemente atraviesa nadando el bancal. Los pececillos entran en su boca sin que tenga que hacer el m??nimo esfuerzo. As?? es mi vida - eso es tambi??n lo que me ocurre a m??. Abro la boca, y entran simplemente las cosas que tienen que entrar. Yo tampoco hago nada. Solamente soy yo mismo.  ', 'La gracia en el manejo de la materia es algo que est?? al alcance de cualquiera, pero aunque a m?? me resulte muy f??cil decirlo, se trata de un proceso de siete a??os. Sin embargo, si vives de verdad en funci??n de tu naturaleza individual, y experimentas a diario con tu dise??o - particularmente en el manejo de la materia en el plano mundano de la vida - entonces comenzar??s a apreciar la diferencia. Por supuesto que tu mente pondr?? todo tipo de pegas. Al fin y al cabo, tu mente tiene su propia idea acerca de qui??n eres, de lo que vales, y acerca de lo que mereces y lo que no. Pero luego, una vez m??s, ??qu?? es lo que sabe tu mente? Es mejor que lo descubras t?? mismo a trav??s de tus respuestas, y a trav??s de tu propia forma de manejarte con el mundo. La ??nica manera de descubrirlo es siendo t?? mismo, y luego es cuando puedes alcanzar a ver lo que hay para ti en el mundo. Es algo que simplemente funciona.  ' ]
//     },
//     {
//         cruz: 'Cruz Yuxtapuesta de las Dudas 1',
//         img: imagesCruzes['dudas.jpg'].default,
//         texto: ['Como en las dem??s cruces yuxtapuestas, las personas nacidas con la Cruz Yuxtapuesta de las Dudas son muy fijas. ??Recuerdas las grandes escenas de comedia en las que hay alguien que se pasa la vida lloriqueando? Esta cruz podr??a llamarse la Cruz del Lloriqueo. De la boca de estas personas siempre escuchar??s salir cosas del tipo: "No, no va a funcionar. No puede salir bien. No creo que sea capaz de hacerlo. Ellos no saben hacerlo. No creo que esto pueda salir bien." Sin embargo, no se les puede achacar esto como si fuera un defecto e intentar impedir que lo sigan haciendo. Este es el tipo de persona que, al entrar con ella en un aula para tomarle examen de algo, dice: "Oh, seguro que me suspenden. Qu?? mal, no estoy preparada. Todo saldr?? mal." Cuando le preguntas a qu?? se deb??a toda esa inquietud, habiendo sacado una nota sobresaliente, su respuesta deja traslucir la realidad en la que vive. "No s?? c??mo lo hice. La verdad es que no me hab??a preparado bien. Ahora estoy preocupada por el siguiente examen que me espera."  ', 'Esta es gente que siempre tiene sus dudas, y como hemos visto puede ser un proceso incluso divertido de observar. Tambi??n albergan dudas acerca de todos los dem??s, y dudas acerca de su propia vida. Como sus dudas alcanzan tambi??n la existencia de Dios, podemos encontrar en esta cruz yuxtapuesta las ra??ces del ate??smo. La capacidad de dudar de esta puerta es muy profunda. "No si existe algo que responda a lo que llamamos Dios. Lo dudo." ']
//     },
//     {
//         cruz: 'Cruz Yuxtapuesta de los Estados de Animo 1',
//         img: imagesCruzes['estadosdeanimo.jpg'].default,
//         texto: ['Siempre que llegamos a la cruz yuxtapuesta nos encontramos con la encarnaci??n de un destino fijo y fatal por ineludible, que no  por mejor o peor que cualquier otro. Aqu?? tiene lugar la transici??n del eje Sol / Tierra de la Personalidad a la cuarta l??nea de la puerta 55, y toda la necesidad de estar permanentemente activo del eje 20/34 deja de condicionar la naturaleza de esta cruz. En su lugar, el Sol de Dise??o est?? en la puerta 9, proveyendo la energ??a necesaria para el trabajo detallado, y la Tierra de Dise??o est?? en la puerta 16, que gira enteramente en torno a las habilidades del cuerpo y al potencial de ser identificado a trav??s de ellas. Esta es gente que sufre de problemas psicol??gicos muy severos. No olvidemos que la puerta 55 puede ocasionar muchas molestias y resultar inc??moda para cualquiera que sea su portador, y la realidad demuestra que la mayor??a de los seres humanos no entienden la naturaleza de la melancol??a ni sabe c??mo manejarla. Peor todav??a, no se conocen a s?? mismos ni entienden las mec??nicas de su Tipo, de modo que est??n abocados a vivir en confrontaci??n constante con una terrible batalla interior. En esta cruz nos encontramos siempre a personas que son extremadamente fijas dentro de la fluctuaci??n de sus estados de ??nimo. Una de las cosas que puede sucederle a cualquiera que tenga esta cruz de encarnaci??n es quedarse fijamente estancado en la depresi??n, no sabiendo dejar pasar libremente la fluctuaci??n de los estados de ??nimo, sino identific??ndose (esta es una cruz donde la habilidad para identificarse juega un papel muy importante) tan profundamente con su estado de ??nimo que nunca m??s vuelva a salir de ??l. Ha desaparecido por completo la fren??tica b??squeda del amor individual, y lo que queda es una profunda necesidad de saber, de adquirir profundidad, y la necesidad de averiguar la verdad que hay detr??s de todo. Claro que, ??cu??ntas veces hay que intentarlo para averiguar la verdad? ', 'Cuando te encuentres con alguien que sea portador de esta Cruz Yuxtapuesta de los Estados de Animo lo sabr??s instant??neamente, porque tendr?? toda la apariencia de estar cargando con una cruz muy pesada sobre sus hombros. La naturaleza afable de la cuarta l??nea hace que estas personas tengan siempre a alguien en su vida que intenta por todos los medios aliviarles de su pesada carga, pero no lo consiguen. Si estas personas aprendieran lo justo acerca de la naturaleza de la individualidad, y de la relaci??n tan estrecha que tiene con la melancol??a, ser??an fuerzas humanas extraordinariamente creativas, con mucho talento natural ya que la puerta 16 forma parte del Canal de Talento. Pero en el mundo real, donde la mayor??a de la gente vive atrapada en las densas redes del No-ser, esta es gente cuyo semblante revela la profunda tristeza que llevan dentro y la pesada carga que tienen que acarrear.  ']
//     },
//     {
//         cruz: 'Cruz Yuxtapuesta de los Extremos 1',
//         img: imagesCruzes['extremos.jpg'].default,
//         texto: ['Con una cruz de ??ngulo derecho que tiene como ??nico foco la necesidad de atraer a todo el mundo hacia su flujo, la cruz yuxtapuesta de este hexagrama tiene una naturaleza que no le permite nunca dejarse fluir. Esta es la Cruz Yuxtapuesta de los Extremos, que ya no hunde sus ra??ces inconscientes en el eje de las puertas 25 y 46 - las otras dos puertas que completaban la cruz del amor. En su lugar est??n ahora las puertas 17 y 18, que traen consigo la insatisfacci??n y la necesidad de corregir.  ', 'Los que nacen con la Cruz Yuxtapuesta de los Extremos son siempre personas que mantienen ritmos y patrones muy fijos en su vida. Esos ritmos y patrones pueden hallarse literalmente en cualquier punto del espectro de la especie humana. Pueden, de hecho, llegar a tener una apariencia de lo m??s extra??a, tanto por el modo en que estos seres hacen uso de su energ??a y como por su modo de proceder al hacer las cosas. Sin embargo, tambi??n hay que decir que son ellos los que nos abren el acceso a explorar todas las posibilidades del ritmo de la humanidad.  ']
//     },
//     {
//         cruz: 'Cruz Yuxtapuesta del Chofer 1',
//         img: imagesCruzes['chofer.jpg'].default,
//         texto: ['Algunas de las personas que nos encontramos en la vida son como indicadores del camino. ??Has tenido alguna vez la experiencia en tu propia vida de relacionarte con un completo desconocido que cambi?? tu vida para siempre? Al llegar a esta Cruz Yuxtapuesta del Chofer nos encontramos con ese tipo de seres humanos. Al desaparecer el eje de las puertas 13 y 7, desaparece tambi??n el espectro completo de la Esfinge, que ahora es reemplazado por el eje de las puertas 49 y 4. Recuerda lo que dec??amos acerca de la naturaleza de los principios emocionales de la puerta 49 en el primer cuarto - era aqu?? donde nos encontramos por primera vez con la necesidad de matar y sacrificar otras formas de vida en aras de la propia supervivencia. Llegados al segundo cuarto de las encarnaciones, la puerta 49 ha pasado de estar activada por el Sol de Personalidad a estarlo por la posici??n del Sol de Dise??o. Ya no es el tema central aqu??, aunque ciertamente sigue estando presente por debajo de la superficie.  ', 'Uno de los rasgos m??s llamativos de los nacidos con esta cruz es que est??n absoluta y totalmente enfocados en seguir su propia direcci??n, intentando arrastrar consigo al mayor n??mero de personas posible. Son personas que saben bien a donde van, y eso es lo que viven en sus vidas. Saber a d??nde est??n yendo en cada momento es lo que m??s les acerca a la verdad que necesitan encontrar en su propio proceso.  ', 'Esa es la diferencia b??sica entre el ??ngulo derecho y la yuxtaposici??n de este hexagrama. Ver??s que hay todo tipo de cosas que pueden dar expresi??n a la belleza. La belleza necesaria de la manifestaci??n a trav??s del ??ngulo derecho consiste en asegurarse de que disponemos de un entorno limpio para el desarrollo de nuestras vidas, pero llegados a la yuxtaposici??n se hace necesario encontrar algo m??s que un entorno limpio. La direcci??n apunta hacia algo que est?? m??s all?? de la mera limpieza, conduce hacia la verdad, o, lo que es lo mismo, hacia la verdad como direcci??n en la vida. Este es el tipo de gente a la que es preferible no decirle nada a decirle cualquier cosa de la que no puedan tener una certeza absoluta. Es gente que realmente necesita conocer la verdad que hay en el fondo de las cosas. No es f??cil ocultarle nada, porque es gente que est?? constantemente intentando penetrar en ti para sacar a la superficie todo lo que llevas dentro.  ']
//     }

// ]


// const definicionCompleto = [{
//     definicion: 'Ninguna',
//     modo: 'Ausencia',
//     porcentaje: '1,5%',
//     areas: 'Ninguna',
//     elementosPrincipal: 'Total (Reflector)',
//     elementosSecundario: 'Total (Reflector)',
//     tiempo: '28 d??as',
//     influencia: 'Muy alta',
//     grafico: sindefinicion
// },
// {
//     definicion: 'Simple',
//     modo: 'Continuo',
//     porcentaje: '41%',
//     areas: 'Una',
//     elementosPrincipal: 'Conexi??n total',
//     elementosSecundario: 'Autonom??a en su definici??n',
//     tiempo: 'R??pido',
//     influencia: 'Nula',
//     grafico: simpledefinicion
// },
// {
//     definicion: 'Doble',
//     modo: 'Discontinuo',
//     porcentaje: '46%',
//     areas: 'Dos ??reas definidas no conectadas entre si',
//     elementosPrincipal: 'Puertas puente que conectan las dos definiciones',
//     elementosSecundario: 'Centros sin definir',
//     tiempo: 'Lento',
//     influencia: 'Media/Alta',
//     grafico: dobledefinicion
// },
// {
//     definicion: 'Triple',
//     modo: 'Discontinuo',
//     porcentaje: '11%',
//     areas: 'Tres ??reas definidas no conectadas entre si',
//     elementosPrincipal: 'Centros sin definir',
//     elementosSecundario: 'Puertas o canales puente',
//     tiempo: 'Lento',
//     influencia: 'Alta',
//     grafico: tripledefinicion
// }, 
// {
//     definicion: 'Quadruple',
//     modo: 'Discontinuo',
//     porcentaje: '0.5%',
//     areas: 'Cuatro ??reas definidas no conectadas entre si',
//     elementosPrincipal: 'Puertas puente que conectan las definiciones',
//     elementosSecundario: 'Centros sin definir',
//     tiempo: 'Muy lento',
//     influencia: 'Muy alta',
//     grafico: quadrupledefinicion
// }];

// const perfilesCompleto = [{
//     name: "1/3 - INVESTIGADOR/M??RTIR",
//     img: investigadormartir,
//    desc: [ ["Un investigador que se tiene que encontrar a s?? mismo, que debe encontrar sus propias respuestas, ya que no le sirven las respuestas ajenas"],
   
//    ["Un investigador sigue el m??todo de probar y fallar, intento y error, es el m??todo de la ciencia"],
   
//    ["Un 1/3 - tiene como destino investigar los cimientos y las respuestas, para qu?? y porqu?? venimos a este mundo"],
   
//    ["Buscar?? en s?? mismo sus propias respuestas y fallar?? muchas veces hasta que da con su verdad."],
   
//    ["As?? que, en este af??n de investigaci??n de probar y fallar, el 1/3, el cient??fico, antes de encontrar la respuesta definitiva, la forma en que las cosas han de funcionar, llega a ser un experto en aquello que no funciona"],
   
//    ["Esto le da una apariencia destructiva, pues destruye aquello que no le sirve, lo deja de lado y contin??a su b??squeda de aquello que s?? funciona."],
   
//    ["Una mente cient??fica, en este proceso de encontrar los errores en la naturaleza de las cosas, adquiere un cariz esc??ptico, que le hace desconfiado, que va a la b??squeda de sus propios cimientos"],
   
//    ["Siempre tanteando, buscando algo nuevo que funcione. Y mientras no lo encuentra va erradicando lo que no sirve"],
   
//    ["Para ellos la mejor ayuda es darles las herramientas para que investiguen por s?? mismos, ya que no conf??an demasiado en nadie."],
   
//    [" Podr??amos decir que es una cualidad pesimista, ya que est?? observando cuanto no va bien en los procesos de las cosas. En su b??squeda de lo positivo, ve lo negativo, y se va haciendo experto en ello, a fin de ir descartando posibilidades err??neas"],
   
//    [" Cuando a esta persona 1/3 - no se le impone, cuando le otorgas la autoridad, se siente sanado y entra en la confianza."],
   
//    [" Por tanto, es una personalidad autoritaria ya que no le sirven las experiencias ajenas, los experimentos ajenos, necesita ser el jefe, encontrar por s?? mismo para que sus bases sean firmes. Ha de ser quien dicte las normas, quien lleve las riendas de la investigaci??n"],
   
//    ["Al llegar a apreciar y conocer muy bien lo que no funciona en las cosas, se convierte en una persona muy emp??tica que puede ayudar a otros a encontrar su camino, enseguida ve lo que no funciona en las vidas de los dem??s y puede aportar su experiencia para hacerles encontrar soluciones. Tambi??n, este matiz de empat??a les hace ser personas que escuchan y ayudan, terapeutas"],
   
//    [" La l??nea 1?? de investigador tambi??n les hace ser personas que est??n investigando al otro"],
   
//    [" La l??nea 3 - tambi??n est?? operando en este perfil. La l??nea tres se llama el anarquista. Dice al colectivo, que se supone que tiene que dirigir, cu??les son las cosas a extirpar, aquello que no funciona."],
   
//    ["En sus relaciones tienen la tendencia a replantear constantemente si la relaci??n es v??lida, cu??les son los aspectos de su relaci??n que no funcionan, es una desconfianza innata, est??n siempre revisando en una b??squeda de que todo est?? bien. Y su car??cter desconfiado e investigador no le deja descansar en sus conclusiones anteriores, siempre viendo nuevos aspectos de la relaci??n que pudieran resultar mal."],
   
//    ["El investigador, cuando no logra descubrir, cuando lleva una sucesi??n de pruebas y errores sin hallar respuesta, se sumerge en un estado de desconfianza, entonces el 1/3 - se culpabiliza, est?? viviendo su 'no ser' (cuando est?? investigando, replanteando y cree no lograr soluciones). Son personas que se culpabilizan a s?? mismas"],
   
//    ["Para estas personas con la 3?? l??nea es imprescindible disponer de su propio espacio. Tienen que retirarse a su espacio a fin de realizar un proceso de recapitulaci??n que por s?? mismos les convenza de que la relaci??n funciona, de que no quedan cabos sueltos. Y como a esto solo pueden llegar por s?? mismos, necesitan volver a su laboratorio a hacer sus personales comprobaciones y sus interminables pruebas y replanteos de todos los aspectos de sus relaciones. En este espacio vital, el 1/3 - procesa los errores de sus relaciones, ve cuanto no funciona con gran perspicacia y es capaz desde ah??, de establecer un nuevo v??nculo con esa persona, un enfoque que resulte mejor."],
   
//    ["Y es que la l??nea 3 - es la m??s mutativa del hexagrama, para ella la palabra error es fundamental. La l??nea 3 - exige no lamentar el v??nculo, debe asegurarse que funciona a la perfecci??n. Su proceso de crecimiento es averiguar qu?? cosas no funcionan bien, necesita manejar en su espacio ese pesimismo que le da el ver lo negativo y cuando lo hace es un maestro de las relaciones, un preciso mec??nico del manejo de todo en la vida propia y en la de los dem??s."],
   
//    ["Un 1/3 - que acepta su mecanismo de comprobaci??n no se auto culpa y acepta que esto es un modo mec??nico de crecer, vence as?? su pesimismo y desconfianza y se hace un maestro en la materia y la psique. A trav??s de su propia experiencia consiguen ahorrar procesos en los dem??s. Un terapeuta con este perfil no conocer?? las neurosis o el sufrimiento por los libros, lo habr?? pasado ??l y sabr?? comprender, entender, y atender a quienes vienen con semejantes procesos. Son seres mutantes, que viven descubriendo las propias posibilidades y descartando aquello que no funciona en s?? mismos y pudiendo as?? aportar grandes conocimientos a los dem??s."],
//    ]
//    },
//    {
//    name: "1/4 - INVESTIGADOR/OPORTUNISTA",
//    img: investigadoroportunista,
//    desc: [["Perfil Arm??nico, Conecta con su inconsciente saliendo de si mismo, tiene la necesidad de exteriorizar sus cimientos"],
   
//    ["Es uno de los perfiles m??s fijos, No se puede oponerse a ellos o discutir con ellos, tienen su visi??n de las cosas, no tienen facilidad para cambiar demasiado porque tienen una cualidad r??gida, no mutable"],
   
//    ["Si intentas discutir sus propias bases , sus modos de ver el mundo, solo consigues demostrarles que no les aceptas"],
   
//    ["Al ser tan r??gidos, son fr??giles , cuando se desestructuran por situaciones que les cuestionan su estado o su modo de ver las cosas , no se recuperan f??cilmente y pierden confianza"],
   
//    ["Amalo y d??jalo ser"],
   
//    ["Las amistades son fundamentales para ellos , la oportunidad de tomar caminos en su vida, llegaran de esas amistades , parejas o amigos"],
   
//    ["Son maestros de la amistad"],
   
//    ["Es un perfil al que le aparecen cosas que han permanecido ocultas mucho tiempo"],
   
//    ["Lo mismo pasa con las enfermedades , quiz??s la tengan a??os incubando y de pronto emergen a la superficie"],
   
//    ["Su cuarta l??nea es de influencia, ellos influyen a los otros , pero ellos mismos no se dejan influir , no cambian, pero ellos pueden cambiarte"],
   
//    ["Son influyentes , con grandes contactos y amistades"],
   
//    ["Con un resfriado no deber??an ver a sus amigos para no contagiarles"],
   
//    ["Tienen tambi??n la capacidad de contagiar su bienestar cuando se encuentran bien"],
   
//    ["Tienen un entusiasmo contagioso, de una alegr??a que se pega, su risa incita a re??r y sus lloros dan tristeza"],
   
//    ["El poder de influir en los dem??s es algo muy positivo, empl??ala bien"],
   
//    ["La sexualidad"],
   
//    ["Ocurre lo mismo que en lo dem??s, pueden sentirse atra??dos por sus amigos, lo cual puede resultar poco gratificante para ellos porque probablemente esta atracci??n sexual hacia sus amigos no sea socialmente correcta al introducir en sus amistades un factor de atracci??n sexual. Las personas con la l??nea 4 - en su perfil tienden a intimar con sus amigos a trav??s de relaciones sexuales. Las oportunidades sexuales para ellos surgen con amistades. Un 1/4 - nunca desea hacer el amor con un extra??o. Por tanto este perfil, antes de entregarse a una relaci??n debe sentirse en un clima de amistad y confianza con el otro."],
   
//    ["Este perfil, al tener su l??nea 1??, es un investigador y su mayor inter??s est?? en investigar que puede confiar en el otro. Tambi??n la l??nea uno le da cierta inseguridad en sus relaciones, pero si sabe esperar a que surja una oportunidad basada en una relaci??n de amistad y confianza suficientemente s??lida, esa ser??n sus relaciones correctas"],
//    ]
//    },
//    {
//    name: "2/4 - ERMITA??O/OPORTUNISTA",
//    img: ermitanooportunista,
//    desc: [["La segunda l??nea encarna un 'DON NATURAL'. Saben hacer algo sin necesidad de haberlo aprendido o que alguien se lo haya ense??ado."],
   
//    ["Esto no significa que estas personas sepan explicar c??mo lo hacen"],
   
//    ["Puede suceder que estas personas tengan por ejemplo gran sensibilidad para la m??sica por tener muy buen o??do, pero no son necesariamente buenos m??sicos o no conocen la t??cnica o el solfeo, no saben ense??arla."],
   
//    [" Es un don que tienen y que les sirve a ellos, pero quiz??s no a otros. Esta 2?? l??nea es elusiva con lo extra??o."],
   
//    ["Es la planta baja del edificio, no se da cuenta de que los dem??s le pueden ver, sin embargo, su actitud es 'dejarme solo'. En la planta baja uno est?? en su propio espacio, no tiene consciencia de que la gente est?? mirando. No tiene inter??s en investigar o estudiar para luego comunicarlo. Esta l??nea tiene la cualidad del Ermita??o que no desea verse metido en l??os."],
   
//    ["En el perfil 2/4 - tenemos un inconsciente (4) que est?? atrayendo amistad a trav??s de sus dones inconscientes influyendo en el campo de la intimidad (2), generando fraternidad. Atrae personas a su vida que buscan un grado de intimidad con ??l. Por un lado, la l??nea 2 - construye barreras para la gente, pero su 4?? l??nea atrae a esas personas, as?? que siguen viniendo hacia ??l. No acuden como amantes, vienen como amigos, aunque este perfil se vea atra??do a intentar una relaci??n sexual."],
   
//    ["Estos seres viven una tensi??n al estar constantemente atrayendo oportunidades que no son necesariamente correctas para ellos."],
   
//    ["La segunda l??nea tiene la caracter??stica de 'ser llamado' y ellos est??n para sintonizar con la llamada. Sin embargo, algunas de estas llamadas no le sirven, solo ser?? v??lida cuando esta llamada venga de su c??rculo interno de amistades. Mientras no sientan esta llamada, su tendencia es decir 'dejarme tranquilo como estoy'."],
   
//    ["Un perfil 2/4 - tiende a evitar las dificultades, son personas que se marchan de casa de sus padres tard??amente por comodidad. S??lo desean una oportunidad para contagiarte su saber, que para ellos no es m??s que un don natural. No les preguntes como lo hacen. Tampoco conviene a una persona de este tipo que les digan 'lo que deber??an ser', es mejor dejarlos que sigan en su proceso y no pretender sacarles de ??l."],
   
//    ["El mecanismo del 2/4 - es aprender a esperar la llamada que les colme y les haga felices y esta llamada generalmente les llegar?? de alguien de su confianza, alguien que tolera su fijeza y que sepa cu??les son las necesidades que tienen. Porque estas personas son el misionero, est??n para cumplir una misi??n, pero para que ellos sepan su misi??n han de esperar la llamada que les llegue de su c??rculo cercano. Y cuando ellos tienen la certeza de haber encontrado su misi??n, son capaces de militar a favor de lo que ellos recibieron como una revelaci??n."],
   
//    ["La Salud"],
   
//    [" Estas personas enferman poco debido a que su naturaleza recluida les impide exponerse demasiado al tr??fico de virus. Cuando enferman, sus amigos van a visitarlo y contagia a los dem??s."],
   
//    ["No son necesariamente insociables, sin embargo, se mantienen recluidos en su c??rculo de amistades de confianza. Para intimar con este perfil es preciso aceptar plenamente como es, es decir trabar confianza, amistad y aceptaci??n incondicional. No intentes cambiar nada y espera a que est??n seguros de que les amas, siendo como son, No pueden cambiarla porque es un perfil muy fijo y tampoco les resulta sencillo hacer cosas contrarias a su naturaleza."],
//    ]
//    },
//    {
//    name: "2/5 - ERMITA??O/HEREJE",
//    img: ermitanohereje,
//    desc: [["Esta combinaci??n del hexagrama 2, en el que la persona no tiene inter??s en investigar nada, simplemente tiene el don natural que le hace tener cualidades innatas en alg??n campo."],
   
//    ["??l no sabe exteriorizar eso, ni explicar como lo hace ni tan siquiera ense??arlo, y sin embargo su l??nea quinta le est?? haciendo ser v??ctima de las proyecciones ajenas,"],
//    ["Todos esperan de ??l que les explique como lo hace, pero ??l se siente incapaz de hacerlo."],
   
//    ["Lo que ??l quiere es estar solo, que le dejen, pero al mismo tiempo est?? seduciendo a la gente con sus dones y parece que es muy prometedor, que puede aportar soluciones para ellos, que puede ser su gu??a, labor para la cual ??l no se siente ni motivado ni con herramientas para comunicar su sabidur??a."],
   
//    ["As?? que dif??cilmente este tipo dar?? la talla que el mundo le exige, por lo que suele recluirse en su casa, en sus conocimientos y raras veces los comparte excepto con quienes est??n dispuestos a aceptarla como es, como un maestro que no va a comunicar su sabidur??a y que viviendo con el puedan obtener algo de este sin que el intente repartirlo."],
//    ]
//    },
//    {
   
//    name: "3/5 - M??RTIR/HEREJE",
//    img: martirhereje,
//    desc: [[" Proceso de intento error, pesimismo y martirio, en este perfil se dan cuenta conscientemente"],
   
//    [" Estas personas creen ser un error, un fracaso"],
   
//    ["Son los seres m??s descontentos con el mundo y con la naturaleza del mundo, todo es un error para ellos ysacan la conclusi??n que ellos son el error, por eso se martirizan"],
   
//    [" Desde los 6 - meses los padres los consideran un error, son bebes problem??ticos"],
   
//    ["Este perfil, crea la expectativa de que va a ser un error, un desastre, un problema, un incompetente, esto conlleva una gran carga"],
   
//    [" Abandonan el hogar materno muy pronto, los reprueban por sus errores"],
   
//    ["Son supervivientes natos, siempre vuelven a levantarse, con la esperanza de encontrar un lugar donde no proyecten sobre ellos esa incompetencia"],
   
//    [" Nos ense??an que es lo que no funciona, advierte a los dem??s de lo que no funciona"],
   
//    [" Cazadores de gur??s, buscan salvadores que no les proyecten ese fracaso"],
   
//    [" En lugar de pensar que su terapeuta no es el adecuado, piensan que son ellos los inadecuados"],
   
//    [" No cuentan a nadie sus errores, justifican los errores, no comprenden su funci??n"],
   
//    [" Cuando viven sin culpabilizarse por sus errores, saben lo que es aplicable y ??til, en otro caso ser??n unos m??rtires, si viven con ese error buscaran su isla desierta donde nadie les proyecte nada"],
   
//    ["Pueden ser hipocondriacos, siempre hay algo que no va bien en m??, siempre me toca a m??, la oveja negra, es susceptible de contraer enfermedades, todo impacta en su vida, ya que es una l??nea de apertura, y se defiende creando los anticuerpos, ya que no tiene defensas son los que m??s absorben los virus y bacterias"],
   
//    ["Si quieres tener una buena salud. tienes que darte cuenta que tenerla es parte del proceso, debes tomarte un reposo, aceptar que te fortalecen, est??s preparado para vencerlas, es tu proceso, es correcto para ti, est??s preparado para superarlas, ya que haces la mutaci??n"],
   
//    [" Si operas desde el no ser todo en ti se debilita, tanto lo definido como lo indefinido"],
   
//    [" Debes seguir la estrategia de tu tipo, de lo contrario, ser??s un m??rtir y universalizaras el fracaso"],
   
//    ["Suelen divorciarse, establece v??nculos y los rompe, En la intimidad tambi??n es intento y error, establecer v??nculos y romperlos Cada vez que rompe una relaci??n la universaliza y dice que las relaciones de pareja no funcionan"],
   
//    [" Es imprescindible tener su propio espacio, si es posible su propia cama"],
   
//    [" Suelen hacerse grandes expectativas"],
   
//    [" Si vives desde el no ser, tu experiencia de relaciones ser?? muy dif??cil, equiv??cate y aprende de ello"],
   
//    ["COMETER ERRORES ES CRECIMIENTO PARA TI"],
   
//    [" Deben saber que no son ellos el error, sino que van captando lo que no funciona en el exterior, y el error para ellos es la base de su experiencia humana"],
   
//    [" Llegan a la sabidur??a contando a los dem??s sus fracasos en lugar de ocultarlos y culparse por ellos"],
   
//    [" No inviertas tu tiempo y dinero en eso ya lo he probado"],
   
//    ["Debes saber que equivocarte no es un fracaso, es un proceso de crecimiento, y llegar a la sabidur??a, ese proceso debes vivirlo con alegr??a y no con pesimismo"],
   
//    ["Aprender que no est??s aqu?? para tener una relaci??n que dure para siempre, sino para tener relaciones que fracasan y aprender que es lo que no funciona de esas relaciones"],
//    ["Es importante seguir tu estrategia para tener relaciones acordes a tu naturaleza"]
//    ]
//    },
//    {
//    name: "3/6 - M??RTIR/MODELO DE ROLES",
//    img: martirmodeloderoles,
//    desc: [
//    [" 7 - veces menos frecuente que el 3/5 - son una minor??a La sexta l??nea, su proceso est?? marcado por tres fases:"],
   
//    ["La 1??, 30 - a??os, ciclo de Saturno, la sexta l??nea opera en la pr??ctica y en la experiencia del individuo como una l??nea 3 - a trav??s del proceso de intento y error. Durante 30 - a??os operan como un perfil 3/3. Devoran la vida. Son los j??venes que mueren pronto. Devoran la vida. Est??n abiertos a todo y todo tipo de cosas impactan en su inconsciente y consciente. A veces no llegan a la madurez."],
   
//    ["Cuando han completado el ciclo de Saturno, se suben al tejado como una persona alejada de la subjetividad de su vida, como algo con lo que ellos no est??n involucrados. Entre los 30 - y los 50 - es la fase que m??s caudal entra en sus vidas, m??s dinero... Su actitud sin embargo es de profundo distanciamiento, se sube al tejado para protegerse de cualquier equivocaci??n como las que sufri?? en su vida"],
   
//    ["El pesimismo que tenemos en la personalidad se ve reafirmado enteramente a nivel inconsciente y cuando llegan a los 29 - a??os est??n agotados, no dan m??s de s??. Son las personas m??s pesimistas. Psicol??gicamente son personas tristes. Sobre todo, el 3/6, porque el 6/3 - el distanciamiento opera de modo consciente. El pesimismo es tan profundo que solo sienten heridas y cosas que no han funcionado. Es un perfil de cambio, de una experiencia excepcional, si logran superar su primera fase."],
   
//    ["Pesimismo y martirio a todos los niveles, consciente e inconsciente. Deben saber conocer el valor del proceso de intento y error. Son verdaderos supervivientes, ya no sucumben ante nada, no les puedes matar. Aguantan todo, 'mala hierba nunca muere'. Pero son necesarios. Es un perfil de transici??n, son los perfiles m??s mutativos, m??s capaces de adaptarse, su foco siempre est?? en lo nuevo. El proceso de intento y error es imprescindible para se??alar el camino a seguir a los otros."],
   
//    ["Cuando lo viven desde el 'no ser' el martirio es absoluto. El crecimiento de la sexta l??nea es el movimiento de la subjetividad a la objetividad. Pueden sanar sus heridas desde su ser, mutar en base a ellas. En otro caso est??n siempre distanci??ndose de todo intentando no provocar nada que pueda volver a provocar el error que pueda provocar su pesimismo. No deben huir de su proceso de fracaso."],
   
//    ["SEGUNDA FASE"],
   
//    ["A los 50 - a??os vuelven a bajar de su l??nea 6??"],
   
//    ["??Cuando est??n en la primera fase adquieren una experiencia ca??tica y si la superan con la objetividad, ???suben al tejado de la casa!, su vida comienza a estabilizarse y todas las enfermedades que hayan contra??do en los primeros a??os de su vida vuelven a los 50 - a??os (retorno de Quir??n) fuerza a estas personas a bajar del tejado. Y vuelven a ser tan vulnerables como cuando se subieron, solo se salvan siendo genuinamente s?? mismos"],
   
//    ["Es el momento de florecimiento en la vida. Tienen el potencial de la especie de mutar, de adaptarse a cosas nuevas. Pero la mayor??a de estas personas con estas l??neas son pesimistas y se quejan de lo que no deber??a de ser. No hay necesidad alguna de subirse a la cruz, estos perfiles no est??n para eso sino para decir cu??l es la mutaci??n necesaria para crecer en base a su experiencia. La sexta l??nea debe ser un ejemplo vivo. La vida es para ellos una curva de aprendizaje, no de condena o equivocaci??n, es un constante proceso de aprendizaje."],
   
//    ["LA SEXUALIDAD"],
   
//    ["En los primeros 30 - a??os de su vida est?? abierto a todas las experiencias en el canal de la sexualidad la 3?? l??nea habla de promiscuidad, abierto a lo desconocido. Son personas que para los 17 - a??os ya est??n desencantados con las relaciones, ya se han enamorado y conocen el dolor, el desgarro y el pesimismo, ya han desarrollado una desconfianza en cuanto a lo que el amor deja.. Son frecuentemente que investigan el amor, aunque ellos desconf??an de ??l, son pesimistas acerca de que lo encuentren. Estas personas, con una sexta l??nea, tienen que volver a bajar del tejado siendo ellos mismos, siendo un ejemplo de roles. Han observado cual es la manera que funciona para ellos."],
   
//    [" Se sube al tejado para buscar amor, pero no es amor para s?? mismo, el amor es algo a lo que renunci??. Lo que busca es si hay amor para otros. Y desde ah?? se ponen a observar si otros experimentan amor."],
   
//    [" La sexta l??nea es el anhelo de relaci??n, de encontrar el alma gemela, la relaci??n ideal. La ??nica relaci??n ideal es la que ellos pueden vivir siendo ellos mismos. Los cincuenta a??os es una edad de florecimiento."],
//    ]
//    },
//    {
//    name: "4/1 - OPORTUNISTA/INVESTIGADOR",
//    img: oportunistainvestigador,
//    desc:
//    [[" 7 - veces menos dise??os que el 4/6"],
   
//    ["La personalidad permanece en la l??nea 4, el oportunista, lo que cambia en este perfil es el c??lculo prenatal, pasa de ser el ??ltimo de un hexagrama al primero de otro, Es un perfil de cambio. Tambi??n cambian las cruces de las que extraemos el perfil, de modo que el eje de la personalidad y el eje del dise??o ya no es el mismo."],
   
//    ["La personalidad est?? dotada de dones sociales innatos y la capacidad de contagiar hermandad y fraternidad en otros, de alcanzar a otros."],
   
//    ["Al tener la l??nea uno, el inconsciente est?? arraigado en investigar, a pesar de estar la personalidad 4 - arraigada a lo social. Es distinto del 1/4. En este perfil uno se identifica en el modo de exteriorizar las cosas, son las personas m??s fijas del planeta, seres ??nicos, son los ??nicos con una geometr??a distinta a los dem??s, es una bisagra entre las otras dos geometr??as, se llama un destino fijo o ineludible, inalterable."],
   
//    ["Es la persona que va a una fiesta y va de persona en persona exteriorizando su historia y todos le dicen que lo que dice esta fuera de lugar, as?? que la persona se pliega un poco, pero enseguida, en cuanto sale a la calle se coloca en el mismo lugar que antes y lo ??nico que est?? convencido es que las personas de esa fiesta no son sus enemigos"],
   
//    ["Las ??nicas oportunidades para ellos es encontrar personas que opinen o que tengan la misma visi??n que ellos, que no interfieran con ??l."],
   
//    ["El ni??o te va a mover, porque ellos est??n compelidos a exteriorizar su naturaleza de un modo fijo. Las cuartas l??neas cuando son ni??os son condicionables e ingenuos, no hay que mentirles, porque eso es lo que van a tomar como base. Los cimientos que se formen de ni??o son aquellos con los que van a funcionar el resto de su vida. No les importa o interesan otros puntos de vista. No contarles que la tierra sea plana para que no lo tomen como un absoluto. Dejarlos ser, no forzarlos, no romperlos."],
   
//    ["Los perfiles de ??ngulo derecho y los de ??ngulo izquierdo son distintos, son una expresi??n de modos de ser humanos opuestos. El 4/1 - es un andr??gino, un ser no definido que puede interactuar indistintamente con gente que vive con un proceso personal de ??ngulo derecho como con aquellos que viven un proceso k??rmico de ??ngulo transpersonal de ??ngulo izquierdo. Pero al margen de que puedan vivir una vida social que le brinda todas las oportunidades, son personas que est??n solas."],
   
//    ["Son un ejemplo de lo que es viajar solo, y eso no significa que no tengan v??nculos sociales estables, pero su experiencia interna es de soledad. Son investigadores de la amistad, tanto personal como transpersonal Acaban siendo grandes conocedores de la amistad. Vive en funci??n de las relaciones sociales, de la fraternidad. Todo lo que viven a nivel consciente, su inconsciente lo lleva al inconsciente para investigarlo."],
   
//    ["La Salud"],
   
//    ["Nadie se pone enfermo o se cura solo, todo proceso de la biolog??a es comunal, condicionada por con quien vives, condiciona tus h??bitos, tu sue??o. La cuarta l??nea propaga la enfermedad, transmitirla. En el 4/1 - puede infectar a toda la tribu, tienen el potencial de influir y provocar una mutaci??n profunda en todos. Si encuentra un modo m??s sano, contagian esa mutaci??n."],
   
//    ["En el plano personal dependen de con quien interact??an, y tanto pueden contagiar una enfermedad como un modo de sanar. Este perfil bisagra puede provocar cualquier mutaci??n necesaria para la totalidad."],
   
//    ["La Sexualidad"],
   
//    ["La sexualidad del 4/1 - vendr?? del c??rculo de amigos en la comunidad en la que vive. Es alguien que investiga la relaci??n a ver si la amistad es correcta, puede estar mucho tiempo viendo si es o no la persona adecuada. Es una persona muy fija, tiene dificultad para encontrar amigos en los que puedan confiar, que su investigaci??n concluya. Para este perfil esta investigaci??n concluye cuando no intentan influir en sus vidas, que no les digan lo que les conviene hacer. En la oscuridad de su laboratorio puede tener una gran sexualidad, pero el amor solo le llega cuando alguien tiene la cualidad incondicional. No es f??cil de encontrar esa incondicionalidad. Esto sucede cuando viven desde el no ser, pero tambi??n cada perfil tiene una visi??n maravillosa."],
   
//    ["Esta es una persona que tiene que exteriorizar algo perfecto, incontaminado. Discutir con ??l no sirve, lo ??nico que va a concluir si lo haces es que no le quieres. Pueden tener una sexualidad ??nica portadora de una nueva mutaci??n si siguen la estrategia de su tipo."],
//    ]
//    },
//    {
//    name: "4/6 - OPORTUNISTA/MODELO DE ROLES",
//    img: oportunistamodeloderoles,
//    desc:[
//    ["En el 1/3 - cuyas dos l??neas son parte del trigrama inferior, el m??s auto absorbido, el 4/6 - es el ??nico perfil de ??ngulo derecho cuyas dos l??neas son parte del trigrama superior"],
   
//    ["Tienen dones sociales innatos, no dones Transpersonales, es una cualidad de la cuarta l??nea que provoca hermandad, la del oportunista que tiene que esperar las oportunidades para el amor, el trabajo, que le vendr??n de un amigo"],
   
//    ["Es el perfil del Voyeur. Siempre captando observando, lo que pasa en otros. T??pica persona que est?? en el centro de una fiesta, mirando lo que pasa ah??. Est??n muy a lo suyo, pero cuyo perfil est?? dedicado a c??mo llegar a los otros. La cuarta l??nea toma conciencia de que al otro lado del canal hay algo y ese algo es hacia donde tiene que exteriorizar su base. Y la sexta l??nea es la cualidad trascendente. Sus dones conscientes e inconscientes son para alcanzar a otros, pero sin estar directamente involucrados. La 6?? l??nea tiene ese proceso de tres fases distintas. Durante los primeros treinta a??os opera en la frecuencia de la tercera l??nea. En los primeros a??os de su vida actuara como un 4/3, un intento y error y un martirio y pesimismo potencial."],
   
//    ["En el 4/6 - durante los primeros treinta a??os, lo que les deja secuelas son las amistades inadecuadas estas personas cuando son ni??os se juntan con personas que no son adecuadas. Esos dones sociales, en un proceso de intento y error hacen que cuando son ni??os se junten con la gente que no es adecuada para ellos. Sus dones sociales para la interacci??n y crear hermandad y fraternidad con desconocidos en una fase 3 (a lo que venga) les lleva a conectar con personas que no son sana para ellos"],
   
//    ["La l??nea 6?? tambi??n tiene tendencia a morir joven debido a esa primera fase de su vida en la que aceptan cualquier cosa que les toque en suerte, y a su capacidad de superar las situaciones adversas y convertirlas en sabidur??a. Los padres de los ni??os con este perfil debieran estar atentos a las amistades de su hijo, quien es esa persona con la que va, donde vive... asegurarse que no se relacionan con personas potencialmente peligrosas"],
   
//    ["Es la t??pica persona que muere joven porque se ha juntado con ambientes de drogodependencia, por ejemplo, con amistades peligrosas. O bien que muere en accidente automovil??stico en un coche conducido por un amigo temerario. No era su temeridad, pero iba con la gente equivocada. La fase m??s peligrosa de su vida en los primeros treinta a??os"],
   
//    ["Cuando este perfil entra en la segunda fase de su vida, busca una nueva comunidad donde encontrar un nuevo c??rculo de amistades, se aleja de toda asociaci??n inadecuada porque conoce por experiencia lo da??inas que pueden ser. Busca otras comunidades, estudia a los dem??s para poder tener la oportunidad de desarrollarse como individuo. Se vuelve el voyeur que observa c??mo se comportan los dem??s"],
   
//    ["Al cumplir 60 - a??os se produce un florecimiento, ellos se vuelven el ejemplo de que se puede ser as?? de humano y estar en paz. Es preciso que el voyeur encuentre sus necesidades sociales satisfechas, son el ejemplo de las personas del futuro, son un nuevo modelo de roles, inherente a la l??nea sexta. Es un ejemplo vivo de esos valores"],
   
//    ["La salud."],
   
//    ["La tercera l??nea contrae y desarrolla los procesos infecciosos pero el que mejor lo contagia es la l??nea 4. En el perfil 4/6 - en la primera fase de su vida, operan su l??nea 6 - como l??nea 3, es decir son susceptibles de coger cualquier cosa porque todo impacta en ellos. As?? que en los primeros 30 - a??os de su vida su salud no es robusta y adem??s pueden contagiarla por su l??nea 4."],
   
//    ["Estar sano no significa que no enfermas, estamos para mutar y procesar lo que hay en el entorno. Se sale de la enfermedad fortalecido en tu sistema. Hay que tener las enfermedades correctas para ti, si vives en el no ser, tendr??s enfermedades que no sabes afrontar, debes ser simple, seguir vuestra estrategia, no se trata de adquirir m??s conocimientos sino de ser t?? mismo, y eso es un instante nada m??s. Ser t?? mismo no es controlar tu vida, no es ser como crees que debe de ser. Hay que rendirse al propio organismo y ver que todos los perfiles tienen el mismo encanto. Todo es mec??nico, rendirse al propio organismo, aplicar lo simple, solo tenemos la funci??n de ser lo que somos, eso no significa no enfermar, significa pasar por los procesos que necesitas para crecer. Es simple, sigue tu estrategia"],
   
//    ["La Sexualidad"],
   
//    ["La cuarta l??nea tiene una sexualidad un tanto frustrante debido a su necesidad de establecer una base primera de amistad o bien ya que el deseo es a trav??s de amistades que no est??n disponibles u opcionales. En el 4/6 - los primeros 30 - a??os de su vida, est??n abiertos a lo que venga por ese proceso de intento y error yv acaban con las relaciones inadecuadas, pero deben entender la belleza de su proceso, es una fase imprescindible de su crecimiento, si les podemos alertar de modo de que puedan entrar en las cosas inadecuadas conociendo el riesgo"],
//    ]
//    },
//    {
//    name: "5/1 - HEREJE/INVESTIGADOR",
//    img: herejeinvestigador,
//    desc: [
//    [" Saben conocer desde dentro a las otras personas con las que se encuentran"],
//    [" Salvadores, santos , terapeutas, Sacerdotes, Sacerdotisas"],
//    [" Son los reveladores de la verdad"],
//    [" Todo el mundo desea algo de ellos"],
//    [" Predican, dan a conocer a los dem??s los conocimientos que tienen"],
//    [" Son desconfiados"],
//    [" Viven en el ??tico con las ventanas abiertas para ver que quieren los dem??s"],
//    [" Investigador, descubridor, cient??fico en su forma de SER"],
//    [" En su no SER desde el ego, hace prueba y error y eso le da inseguridad"],
//    [" Es desconfiado en la duda"],
//    [" Son proyectados de ni??os por sus padres y el mundo"],
//    [" Se esperan de ellos que sean los mejores, los conquistadores"],
//    [" Su formato de investigador, le exige asentar por s?? mismos , sin influencias ajenas"],
//    [" El Hereje, si no das lo que se espera de ti ser??s quemado en la hoguera"],
//    [" Personas que pueden entregar a los dem??s de manera pr??ctica sus dones"],
//    [" Vienen a dar una verdad enraizada profundamente en sus cimientos, pero es preciso que ellos descubran por si mismos esa verdad"],
//    [" Puede provocar gran decepci??n en los dem??s"],
//    ["La Salud"],
//    [" Buena salud, no suele enfermar ya que al ser retra??do se relaciona poco y no se expone al campo gen??tico general"],
//    [" Son de dif??cil acceso, est??n en su laboratorio sin que les molesten, re??san el contacto, eso les protege"],
//    [" Buscan salud Ps??quica, individualistas , no suelen mostrar su entusiasmo, son sospechosos de saber algo que los dem??s desconocen"],
//    ["La Sexualidad"],
//    [" Grandes seductores, est??n para seducir, insin??an que pueden ofrecer dones pr??cticos universales y es necesario que alguien se deje seducir por ese ofrecimiento"],
//    [" Desde el no SER condicionado es ???la mujer fatal??? ???el casanova??? sus amantes se decepcionan al no encontrar el terapeuta, el sabio, santo o salvador que esperaban, seducci??n sin compromiso, pueden llegar a ser crueles"],
//    [" Desde el ser est??n disponibles para todo el mundo, pueden ser un Buda"],
//    [" Tiene que investigar, estudiar hasta que sienta una base firme y pueda dar algo a los dem??s, si no, lo terminar?? pagando"],
//    ]
//    },
//    {
   
//    name: "5/2 - HEREJE/ERMITA??O",
//    img: herejeermitano,
//    desc: [
//    [" Este tipo es 7 - veces menos frecuente que el 5/1. Hay poca gente con este perfil"],
   
//    ["La l??nea 2 - no quiere estudiar nada, sabe ser, pero no quiere o necesita decirlo o ense????rselo a otros. Es un don natural, no hay af??n de instruir a otros."],
//    [" Es un perfil de cambio, es arm??nico."],
   
//    ["La 2?? l??nea es el ermita??o, de personas t??midas, recluidas conscientemente. En el 5/2 - la personalidad mira al exterior. Es alguien que dice 'estoy en los matorrales, soy tu salvador, te puedo revelar la verdad, pero no debes venir a verme'"],
//    [" Todo el mundo va a su cueva, pero ??l dice: quiero estar solo. Y ellos responden ??para qu?? nos has llamado?"],
   
//    ["Es un perfil que provoca la decepci??n porque mientras que su personalidad seductora, salvadora, terapeuta, atrae a todo el mundo, el inconsciente no quiere saber nada. Es un perfil auto motivado. Mientras no se llame a s?? mismo, es un perfil reclusito. Provocan expectativas de que podr??an ser salvadores, pero no quieren comprometerse a serlo. El 5/2 - no puede dar los dones pr??cticos que prometi??. Esto les puede llevar a un profundo sufrimiento, conduci??ndoles a una actitud de no querer seguir exponi??ndose para no defraudar."],
   
//    ["Este tipo de perfil tiene su soluci??n a trav??s del propio conocimiento de s?? mismos, si logran ser ellos mismos, asumiendo que lo suyo no es tratar de satisfacer las demandas de nadie. Entonces, siendo ellos mismos, pueden inspirar a los dem??s."],
   
//    ["Este es el perfil que m??s se recluye, por cuanto no se expone generalmente, tiene la cualidad de saber hacerse invisible, de protegerse muy bien, no es f??cil que contraigan enfermedades."],
   
//    ["Pero dada su reclusi??n pueden tener cierto trabajo en la intimidad. Siendo ??ste un perfil en el que la motivaci??n la tienen que encontrar en s?? mismos, son dados a disponer de modos de autosatisfacci??n, incluso sexual, de modos de encontrar su bienestar si necesidad de exponerse al exterior."],
   
//    ["Esta cualidad de prometo, pero no cumplo, puede acarrearles cierta fama de manipuladores, cosa que no es cierta, ya que es algo mec??nico. Parece que tengan grandes valores que compartir, pero no tienen los medios de exponerlos y eso provoca decepci??n, provoca que les juzguen como enga??osos, decepcionantes."],
   
//    [" La 2?? l??nea es una l??nea del ermita??o, no se puede echar abajo las barreras de un ermita??o, de un t??mido. La funci??n de una segunda l??nea es la introspecci??n."],
   
//    ["Sin embargo, este proceso inconsciente que les lleva a la reclusi??n puede ser vencido cuando son apreciados por lo que son sin esperar respuestas pr??cticas de ellos, con sus cualidades para s?? mismos. Esta paradoja de la l??nea 2 - reclusiva y la cinco que promete salvaci??n les hace cerrarse para evitar el sufrimiento."],
   
//    [" Deben ser reconocidos por lo que son, no por lo que se espera de ellos."],
   
//    ["Sin embargo, no todo est?? perdido en esta conjugaci??n de l??neas. Cuando alguien les quiere por sus valores, sin exigencia de salvaci??n, sabiendo que lo que tienen lo tienen para s?? y no se espera que lo comuniquen, con esas personas que les quieren y que respetan su estrategia, podr??n desarrollarse felizmente."],
   
//    ["Es un tema complejo y parad??jico, no le exijas a un 2/5 - que esas cualidades innatas que tiene de avatar, de salvador, las ponga en pr??ctica con los dem??s, solo le sirven a ??l y a aquellos que le quieran, los cuales sonatra??dos por este perfil."],
//    ]
//    },
//    {
   
//    name: "6/2 - MODELO DE ROLES/ERMITA??O",
//    img: modeloderolesermitano,
//    desc: [
//    ["La sexta l??nea es una l??nea de visi??n, de liderazgo, de magia y de poder y no es parte del hexagrama, est?? mirando y conoce el hexagrama en todos sus estadios porque los ha vivido en toda su naturaleza porque los ha vivido en sus tres fases, lo conoce mejor que nadie"],
   
//    ["Durante los primeros 30 - a??os viven con la l??nea resonante 3, como en 3/2, un intento y error. En el proceso de recibir la llamada, la segunda l??nea esperando escuchar la llamada. Es decir, puede seguir llamada incorrecta que llevan al pesimismo, desencanto y experiencias dif??ciles de la 3?? l??nea. En el momento en que el perfil 6/2 - se sube al tejado de la casa, se desplaza desde la subjetividad de su experiencia hacia una perspectiva m??s objetiva, es el momento en que le comienzan a llegar todo tipo de riquezas"],
   
//    ["El 6/2 - es el que con mayor rapidez escucha la llamada de la objetividad. Pasa del proceso de transformaci??n del pesimismo al optimismo, del martirio hacia un ejemplo de roles, de ser el ejemplo. Adquieren una riqueza instant??nea porque asciende un escal??n y est??n autom??ticamente en una posici??n de poder con respecto a los dem??s"],
   
//    ["La persona de la sexta l??nea es una especie de encarnaci??n del papa, todo lo que diga va a misa. Para ejercer esa autoridad, en el pasado, no necesitaba bajarse del tejado, pod??a vivir una vida hip??crita, c??modamente instalado en el sill??n de la autoridad. Pero desde 1981 - a trav??s de la mutaci??n que hemos pasado los humanos, no necesitamos m??s salvadores ni m??s terapeutas que nos digas, yo soy el camino, yo soy la verdad. Ahora tenemos la informaci??n que necesitamos para ser cada uno su propio maestro. De modo que actualmente m??s tarde o temprano van a tener que bajar del tejado y ser un ejemplo de vida. Van a tener que estar aqu?? para ser seres despiertos."],
   
//    ["Es un perfil natural para florecer en la vida a los cincuenta a??os, su inconsciente los tiene recluidos en s?? mismos como ermita??os y su 6?? l??nea los llevan por todas las fases necesarias para ser un ser humano. A los cincuenta tienen que florecer como el ser que son, no como falsos o hip??critas, porque si no, morir??n."],
   
//    ["La vida solo se alimenta de lo verdadero, rechaza lo que es hip??crita. Estos son los seres m??s vulnerables, cuando viven desde el no ser, cuando bajan a los 50 - a??os, todo lo que llevaban en su interior puede emerger en ese momento. Es preciso bajar desde el tejado con una perspectiva objetiva de lo que son, de su ser, de su naturaleza"],
   
//    ["No tienen nada que ense??ar, su don inconsciente es un don natural para ser uno m??s: ellos mismos despiertos. La iluminaci??n, estar despierto, es una experiencia ordinaria. Cuando un ser iluminado camina por la calle, la gente se da cuenta de que hay un ser que es consciente. El prop??sito del 6/2 - es trascender la iluminaci??n, bajar como una expresi??n del florecimiento y demostrar que est??n listos para su vida."],
   
//    ["Hay una posibilidad de que estas personas ignoren la llamada de la verdad. La sexta l??nea de la puerta 24, donde se racionaliza la verdad interior que nos habla de la posibilidad de estar sordos cuando la verdad, la oportunidad llama a tu puerta. En el primer tercio de las personas de este perfil es imposible que escuchen esta llamada porque est??n inmersos en la experiencia de la tercera l??nea."],
   
//    ["La salud"],
   
//    ["En ese primer tercio de la vida, cuando pasan por el proceso de intento y error, son intr??nsecamente vulnerables, es una vulnerabilidad a que penetren en ellas, a que consigan echar abajo las defensas, las personas equivocadas y provocar la muerte, la desaparici??n. Que sus defensas sean penetradas por personas incorrectas. La sexta l??nea es la que da las bendiciones al hereje, la quinta l??nea, es la que determina si lo que dice el hereje es pr??ctico o fiable. Y muchas personas de sexta l??nea tienen tambi??n un sufrimiento cuando viven desde el no ser, el aislamiento en el que pueden llegar a vivir, recluidos en su tejado, separados de cualquier llamada. Pasaron 30 - a??os recibiendo llamadas equivocadas y ahora est??n a la defensiva."],
   
//    ["La sexualidad"],
   
//    ["Buscan un amor perfecto, un alma gemela ideal, y eso es dif??cil. Deben encontrar a alguien que les respete como son, estar en su aislamiento en el tejado. Pasando del pesimismo al optimismo. En sus ??ltimos 30 - a??os pueden despertar a su sabidur??a y ah?? les espera el amor."],
   
//    ["Al bajar en la tercera fase de su vida, pueden volverse a encontrar las mismas experiencias que en los primeros treinta a??os, pero ahora bajo otro punto de vista m??s sabio y pueden reconocer lo que es correcto para ti, pudiendo enfrentar esas experiencias, dejando que tu sabidur??a te gu??e y seas un ejemplo de roles para el resto."],
//    ]
//    },
//    {
//    name: "6/3 - MODELO DE ROLES/M??RTIR",
//    img: modeloderolesmartir,
//    desc:[
//        ["Es el m??s trascendente. Tienen la funci??n de mantener a la especie viva por su capacidad mutativa y su capacidad para adaptarse a lo nuevo, nos indican como entrar en el futuro, en lo desconocido y sobrevivir"],
   
//    ["No es una experiencia c??moda vivir esa inestabilidad de este perfil. Es el perfil del caos. Su vida es un caos. En el 6/2 - tienen 20 - a??os de vacaciones, pero en este perfil no hay vacaciones"],
   
//    ["Es un constante subir y bajar. En la primera mitad de su vida viven como un 3/3 - y cuando cumplen los 30 - a??os, se suben al tejado, pero al llegar no aguantan all?? y se vuelven a bajar del tejado a tener otra experiencia de intento y error que alimenta su pesimismo, y vuelven a subir al tejado. Son incapaces de permanecer all??. Siempre vuelven a la refriega."],
   
//    ["Estas personas nacen con una escalera atada a la espalda. Es un subir y bajar tan compulsivo que no les da tiempo a cristalizar ning??n tipo de sabidur??a. El pesimismo, est?? arraigado en el inconsciente. Es el inconsciente el que les compele a subir y bajar del tejado"],
   
//    ["Pero tienen un gran valor, es el m??s mutativo de todos, no es un perfil negativo sin vive en funci??n de su propia naturaleza. Deben subir y bajar en funci??n de las cosas apropiadas a su propia naturaleza, porque reconoces que es una fase de crecimiento personal"],
   
//    ["Con hijo con este perfil, ??malo bien, aseg??rate de que lo proteges en ese proceso de intento y error. Los perfiles de sexta l??nea est??n aqu?? para mostrarnos que no hay l??mites, son la encarnaci??n de la confianza, en la capacidad de responder a lo que sea. Es el optimista ilimitado, la confianza ilimitada en la vida, capacidad de adaptaci??n a lo que venga. Pero solo cuando son ellos mismos. Lo ??nico que puedes hacer con un hijo as?? es amarlo"],
   
//    ["La salud"],
   
//    ["Al ser un perfil de cambio. En puerta 28, donde procesamos nuestros miedos a la muerte y la supervivencia, la puerta del riesgo, la tercera l??nea nos habla del aventurismo. La sexta l??nea se llama halo de gloria, es decir correr un riesgo innecesario, lo cual supone que es alguien que se tira del tejado con gran riesgo, de manera impresionante, pero peligrosa. Nos ense??an que la vida es algo transitorio. Pueden ser v??ctimas de un intento fatal, es el destino natural de estas personas cuando viven desde el 'no ser'. Y no est??n aqu?? para eso, si son ellas mismas, estar??n naturalmente equipados para adaptarse a cualquier circunstancia nueva"],
   
//    ["El desapego hacia la estabilidad, hacia las formas fijas e inamovibles. Ellos siempre est??n listos. Cuando hay uno de ellos cerca, estamos listos, para dejar de hacer las cosas de una manera y hacerlas de otra, nos llevan a hacia una transici??n, pero como un ejemplo vivo de c??mo encarnar eso. Son muy valiosos porque sobreviven bien y los necesitamos, nos recuerdan que la vida es un proceso mutante, nos muestran el camino hacia lo ilimitado. Si entran correctamente en las cosas, vivir??s una vida muy excitante y pasar c??modamente con una experiencia de j??bilo viviendo lo que es: Un proceso de cambio."],
   
//    ["La Sexualidad"],
   
//    ["Tienen dificultades al tener una tercera l??nea en su perfil y como este perfil la tiene, durante 30 - a??os de su vida, hacen v??nculos y los rompes. Les deja un profundo sentimiento de martirio y pesimismo, no contigo ni sin ti. Desde el 'no ser' su vida ??ntima no es buena, y al llegar a los 30 - a??os llegan convencidos de que no hay amor para ellos. Si este perfil no encuentra amor, su vida no encuentra significado para ellos. Solo pueden florecer a trav??s del amor. Deben aprender que el amor no es lo que creen, el pr??ncipe azul, la relaci??n perfecta, deben comprender que el amor para ellos es una experiencia transitoria pero igualmente genuina, el final no es el fracaso sino el principio de otra experiencia con otra persona, en otra situaci??n. Est??n para encontrar amor en todas sus formas, esa es su cualidad., poder encontrar y compartir ese amor. Si est??n en su no ser no encuentran el amor. Pero no hay amor para nadie a menos que te ames a ti mismo, y seas t?? mismo. A menos que ames tu forma de ser, ya sea pesimista, an??rquica... si te amas a ti mismo podr??s amar a los dem??s. Amarse a s?? mismo no tiene que ver con el ego sino reconocer la forma que habitas, amar tu vida. As?? podr??s amar a otros a tu manera. "]
//    ]
//    }];

// const centrosImg = [[ajnaAbierto, ajnaCerrado], [bazoAbierto, bazoCerrado],[cabezaAbierto, cabezaCerrado],[corazonAbierto, corazonCerrado], [GIAbierto, GICerrado],[gargantaAbierto,gargantaCerrado],[plexoAbierto, plexoCerrado], [raizAbierto, raizCerrado], [sacralAbierto, sacralCerrado]]

// const centrosCompleto = [
//      {
//         nombre: 'Ajna', 
//         corrbio:'Gl??ndula Pituitaria',
//         tipo: 'Consciencia',
//         funcion: 'Pensar, categorizar, analizar e investigar la vida Es nuestra mente intelectual, racional, auto reflexiva.',
//         centroDefinido: 'Tienen una manera determinada de pensar y de procesar la informaci??n mental.',
//         noSerUno: 'Creen que tienen siempre la raz??n y la quieren imponer',
//         preguntaGuiaUno: '??Todav??a crees que tu verdad es la ??nica?',
//         centroSinDefinir: 'Aprenden r??pido por su gran apertura mental ya que absorben informaci??n como una esponja.Tienen muchos puntos de vistas distintos y en eso radica su inteligencia, Disfrutan de no tener certezas',
//         noSerDos: 'No se sienten c??modos con su amplitud de miras y buscan fijarla, para mostrarse a ellos y mostrar a los dem??s que tienen certeza y consistencia intelectual.  Se vuelven dogm??ticos',
//         preguntaGuiaDos: '??Trato de convencer a todo el mundo de que tengo la raz??n?',
//         funcionImg: ajnaimg,
//         noSerPuertas: 6,
//         preguntaGuiaPorcentaje: '51% 49%',
//         centroSinDefinirImg: ajnacentrosindefinirimg,
        
//     },
//     {
//         nombre: 'Bazo', 
//         corrbio:'Sistema linf??tico, Sistema inmunol??gico ',
//         tipo: 'Conciencia ancestral ',
//         funcion: 'Conciencia del cuerpo, intuici??n, instinto, gusto Miedos b??sicos de la supervivencia que nos mantienen vivos y sanos. Salud y bienestar Frecuencia en el aqu?? y ahora',
//         centroDefinido: 'Toman una forma fija de conciencia del cuerpo para mantenerse sanos. Pueden ser espont??neos y confiar en su intuici??n. Suelen sentirse f??sicamente bien procesando los miedos de forma predeterminada. Tienen sentido de seguridad  ',
//         noSerUno: 'No escuchan ni conf??an en su intuici??n por lo que los miedos activados son manejados por la mente',
//         preguntaGuiaUno: '??Todav??a no conf??as en tu intuici??n?',
//         centroSinDefinir: 'Grandes reconocedores y lectores intuitivos de las vibraciones de los dem??s y del entorno.No son espont??neos. Absorben patrones de enfermedades de otros',
//         noSerDos: 'Absorben miedos y buscan seguridad, volvi??ndose dependientes de situaciones o personas',
//         preguntaGuiaDos: '??Todav??a te aferras a cosas o personas no saludables para ti?',
//         funcionImg: bazoiimg,
//         noSerPuertas: 7,
//         preguntaGuiaPorcentaje: '50% 50%',
//         centroSinDefinirImg: bazocentrosindefinirimg,
//     },
//     {
//         nombre: 'Cabeza', 
//         corrbio:'Gl??ndula Pineal',
//         tipo: 'Presi??n ',
//         funcion: 'Inspiraci??n mental, son las preguntas, dudas y confusiones que presionan al Ajna para que piense y reflexione. Est?? al servicio de la profundidad y la expansi??n de la conciencia. ',
//         centroDefinido: 'Su inspiraci??n se da de una manera fija, presi??n mental para resolver sus propias preguntas. Est??n aqui para inspirar mentalmente a otros',
//         noSerUno: 'Fuera de la realidad, estr??s mental, miedo mental (ansiedad)',
//         preguntaGuiaUno: '??Todav??a tu mente gobierna tu vida?',
//         centroSinDefinir: 'Son inspirados por aquellos que est??n en su aura. Su sabidur??a radica en reconocer quien le est?? inspirado, quien son sus inspiradores y los que no.',
//         noSerDos: 'Buscan a toda costa las respuestas que preocupan a otros y se las hacen suyas',
//         preguntaGuiaDos: '??Estoy preocupado tratando de responder las preguntas de los dem??s?',
//         funcionImg: cabezaimg,
//         noSerPuertas: 3,
//         preguntaGuiaPorcentaje: '50% 50%',
//         centroSinDefinirImg: cabezacentrosindefinirimg,
//     },
//     {
//         nombre: 'Coraz??n', 
//         corrbio:'Coraz??n - Ves??cula Biliar - Timo Est??mago',
//         tipo: 'Motor',
//         funcion: 'Supervivencia en el plano material. Impulsados por la fuerza de voluntad y el poder del ego. Autoestima.Personas con valores propios. Manifiestan lo que necesitan tener en el plano material',
//         centroDefinido: 'Acceso consistente a la fuerza de voluntad y al sentido natural de autoestima/valor propio. Forma determinada de manejarse en el plano material con pactos, acuerdos y promesas',
//         noSerUno: 'Eg??latras, sobre valoran la voluntad.',
//         preguntaGuiaUno: '??Te sientes m??s poderoso y mejor que otros?',
//         centroSinDefinir: 'Son grandes reconocedores de lo que es de valor. Leen los "egos agrandados" y pueden disfrutar del mundo material sin que los atrape.',
//         noSerDos: 'Autoestima baja. Quedan atrapados en el mundo material y se pasan la vida demostr??ndose y demostrando a otros su valor',
//         preguntaGuiaDos: '??Todav??a te desvalorizas y buscas la validaci??n de los dem??s?',
//         funcionImg: corazonimg,
//         noSerPuertas: 4,
//         preguntaGuiaPorcentaje: '35% 65%',
//         centroSinDefinirImg: corazoncentrosindefinirimg,
//     },
//     {
//         nombre: 'G', 
//         corrbio:'H??gado - Sangre.',
//         tipo: 'Br??jula - Integraci??n',
//         funcion: 'Identidad del Ser: Amor y Direcci??n. Portal hacia la Fuente/Ser Superior',
//         centroDefinido: 'Identidad y direcci??n establecida o consistente que no puede ser influenciada por otras personas. Acceden al amor y a la direcci??n de una forma determinada y espec??fica',
//         noSerUno: 'Imponen su identidad y direcci??n. Narcisistas',
//         preguntaGuiaUno: '??Todav??a te crees superior a otros?',
//         centroSinDefinir: 'Gran capacidad para empatizar con el Ser del otro. Se adaptan a otras identidades y su sentido de quien son va variando',
//         noSerDos: 'Obsesionados con encontrar el amor, la direcci??n, su identidad. Muy sensibles al afecto. Nunca se sienten lo suficientemente queridos',
//         preguntaGuiaDos: '??Todav??a buscas que el otro siempre te demuestre cuanto te quiere?  ??Te obsesionas con encontrar tu direcci??n en la vida?  o en fijar tu identidad?',
//         funcionImg: giimg,
//         noSerPuertas: 8,
//         preguntaGuiaPorcentaje: '57% 43%',
//         centroSinDefinirImg: gcentrosindefinirimg,
//     },
//     {
//         nombre: 'Garganta', 
//         corrbio:'Gl??ndula Tiroides y Paratiroides.',
//         tipo: 'Expresi??n, Metam??rfico',
//         funcion: 'Transforma los pensamientos en palabras y la energ??a en movimiento cuando conecta con alguno de los 4 centros motores',
//         centroDefinido: 'Su voz o patr??n de comunicaci??n est?? determinado y es consistente, como asi tambi??n su hacer si est?? conectada a un centro motor',
//         noSerUno: 'No acepta su forma de hablar/ habla y hace demasiado.',
//         preguntaGuiaUno: '??Todav??a no aceptas tu voz y/o tu hacer lo gobierna tu mente?',
//         centroSinDefinir: 'Habilidad para tomar cualquier patr??n de lenguaje del entorno muy r??pidamente y adaptarse a ??l',
//         noSerDos: 'Buscan ser vistos y llamar la atenci??n para que los escuchen. ??vidos de reconocimiento. Verborreicos o mudos',
//         preguntaGuiaDos: '??Todav??a intentas llamar la atenci??n de otros y/o demandas reconocimiento de alg??n tipo?',
//         funcionImg: gargantaimg,
//         noSerPuertas: 11,
//         preguntaGuiaPorcentaje: '72% 28%',
//         centroSinDefinirImg: gargantacentrosindefinirimg, 
//     },
//     {
//         nombre: 'Plexo Solar',
//         corrbio:'Ri??ones, pr??stata, p??ncreas, sistema nervioso, pulmones, red neuronal del Plexo Solar .',
//         tipo: 'Motor - Conciencia en Mutaci??n ',
//         funcion: 'Experimentan la gama de sentimientos, emociones y sensaciones dentro de la ola emocional a fin de lograr claridad o bienestar que se deriva de esa claridad',
//         centroDefinido: 'Si son autoridad en un dise??o. No tienen la verdad en el momento, no pueden ser espont??neos, la claridad viene con el tiempo. Perciben la realidad seg??n el lugar en que est??n de su "ola emocional". Profundidad en las emociones',
//         noSerUno: 'Intentan vivir el momento desconociendo sus emociones. Dejan que su mente o las emociones de los dem??s se sobrepongan a sus propias emociones. .',
//         preguntaGuiaUno: '??Todav??a act??as guiado por tus emociones y decides espont??neamente?',
//         centroSinDefinir: 'No dise??ados gen??ticamente para procesar emociones, lo aprenden con la vida. Son emp??ticos, sensibles y lectores emocionales',
//         noSerDos: 'Las emociones que absorben los ponen muy mal, por lo que evitan los conflictos. No hacen olas y buscan complacer para que todos est??n bien',
//         preguntaGuiaDos: '??Todav??a te preocupas para mantener a todos bien y evitas decir tu verdad para no molestar?',
//         funcionImg: plexoimg,
//         noSerPuertas: 7,
//         preguntaGuiaPorcentaje: '50% 50%',
//         centroSinDefinirImg: plexocentrosindefinirimg, 
//     },
//     {
//         nombre: 'Ra??z',
//         corrbio:'Gl??ndulas Adrenales',
//         tipo: 'Motor y presi??n, combustible f??sico ',
//         funcion: 'Impulso, estr??s, kundalini. Presi??n de ser, evolucionar.Adaptarse al mundo, crecer',
//         centroDefinido: 'Gen??ticamente preparados para procesar el estr??s. No est??n aqui para que nadie los presione.Son inmunes al estr??s de los dem??s',
//         noSerUno: 'La mente los estresa y lo irradian a los dem??s',
//         preguntaGuiaUno: '??Presionas intimidando a otros a moverse r??pido, a resolver, a actuar?',
//         centroSinDefinir: 'Saben muy bien c??mo opera el estr??s y utilizan la energ??a del estr??s de los dem??s para su beneficio',
//         noSerDos: 'Prefieren evitar el estr??s, no quieren lidiar con ??l. y hacen todo r??pido para sacarse las cosas de encima. Viven acelerados',
//         preguntaGuiaDos: '??Todav??a te involucras con las cosas buscando sac??rtelas de encima r??pidamente?',
//         funcionImg: raizimg,
//         noSerPuertas: 9,
//         preguntaGuiaPorcentaje: '60% 40%',
//         centroSinDefinirImg: raizcentrosindefinirimg, 
//     },
//     {
//         nombre: 'Sacral',
//         corrbio:'Ovarios - Test??culos',
//         tipo: 'Motor',
//         funcion: 'Vitalidad - Sexualidad - Impulso sexual - Persistencia. Tienen una frecuencia especial, (se estanca, pasa a otro nivel y se vuelve a estancar). Generan sonidos guturales.',
//         centroDefinido: 'Responden escuchando la voz sacral. Acceso consistente a la vitalidad.  Acceso confiable a la energ??a e identidad sexual.Energ??a para el trabajo a trav??s del cual se realizan y llegan a ser maestros',
//         noSerUno: 'Agotado y frustrado porque se rige por su mente y no por la inteligencia de su cuerpo',
//         preguntaGuiaUno: '??Todav??a haces las cosas forzando la naturalidad de la vida?',
//         centroSinDefinir: 'Vienen a ser expertos en trabajar de forma especializada y a ser eficientes en periodos acotados de tiempo, ya que su caudal energ??tico es variable.',
//         noSerDos: 'Se auto exigen tener m??s energ??a, a rendir m??s, terminando agotados "fundidos", siempre cansados',
//         preguntaGuiaDos: '??Todav??a no sabes cu??nto es suficiente y has de parar?',
//         funcionImg: sacralimg,
//         noSerPuertas: 9,
//         preguntaGuiaPorcentaje: '70% 30%',
//         centroSinDefinirImg: sacralcentrosindefinirimg, 
//     }
// ]

// const sacralCompleto = [
//     ["Gente que no tiene ni idea de cu??l es su identidad hasta que alguien no se lo pregunta"],
//     [" La autoridad reside en la capacidad de respuesta"],
//     [" La autoridad Sacral solamente se hace audible cuando responde a algo"],
    
//     ["Su capacidad de decidir ???s????? o ???no??? con respecto a algo gira en torno a su capacidad de respuesta Sacral."],
    
//     ["La voz sacral se oye o se siente inmediatamente cuando se le pide a un Generador que ponga su energ??a en una actividad o una relaci??n"],
    
//     ["La autoridad Sacral les muestra a los Generadores a trav??s de la respuesta, lo que es correcto para ellos cu??les son sus l??mites si tiene energ??a ahora para involucrarse"],
//     [" Sonidos guturales ???a-ja??? (si)"],
//     [" Sonidos guturales ?????h-uh??? (no)"],
//     [" Sonidos guturales ???Hummm??? no lo s?? ahora mismo, preg??ntaselo m??s tarde o de otra manera"],
//     [" Esta respuesta, es su verdad en el momento presente"],
//     [" El Sacral solo funciona en el presente, no puede predecir el futuro"],
//     [" Cuando te da luz verde, sabes que tienes la emerg??a para acometer dicho tema"],
//     [" La respuesta sacral es una gu??a fiable, honesta y digna de confianza"],
//     [" Es posible que despu??s de muchos a??os de condicionamiento necesites reconectar con tu respuesta Sacral"],
    
//     ["Para reconectar con tu respuesta sacral, practicar con alguien que te pregunte cosas que requieran una respuesta (si) (no)"],
    
//     ["Practica y deja que las respuestas fluyan inmediatamente, con el tiempo te sentir??s c??modo y ser??s t?? mismo, siguiendo tu verdadera gu??a interna"],
//     [" Deben aprender a esperar a ver venir las cosas, a estar tranquilos y esperar a que les pregunten"],
//     [" Si sigues la autoridad de tu sacral encontraras la vida y la salud que te mereces"],
    
//     ["La mayor??a de las cosas que creen correctas, incorrectas, buenas o malas, no tiene nada que ver con ellos mismos"]
//     ];


// const mentalCompleto = [
//     ["Tu claridad para tomar decisiones proviene de la acci??n y la interacci??n de tu entorno"],
//     [" La autoridad mental, tambi??n conocida como 'sin autoridad' o 'ambiental', es exclusiva de los Proyectores"],
    
//     ["Se puede acceder a la autoridad mental escuchando la verdad en la propia voz despu??s de abandonar el cuerpo"],
//     [" La fuerza de la vida tiene frecuencia y es discernible cuando se comunica"],
    
//     ["En tu tipo de proyector, todos los centros debajo de tu garganta no est??n definidos, y recibes informaci??n sensorial sobre el ambiente a trav??s de tus centros abiertos."],
    
//     ["Con esta autoridad has de aprender a sentir en el cuerpo qu?? entorno te es beneficioso y VER qui??n realmente quiere tu perspectiva ??nica"],
    
//     ["Cuando has de tomar una decisi??n sobre algo importante, es bueno que des un paso atr??s y hablar con un oyente o persona de tu entorno que no intentar?? influir en la decisi??n"],
    
//     ["El entorno correcto traer?? a las personas y actividades adecuadas, y una sensaci??n de relajaci??n en el cuerpo"],
    
//     [" Has de preguntarte ??Este entorno es correcto para m???"],
    
//     [" Cuando est??s tomando una decisi??n acerca del entorno correcto para ti, es sano y beneficioso visitar f??sicamente los entornos en cuesti??n y reconocer en tu cuerpo que sensaci??n te dan"],
    
//     ["Aunque es bueno para ti tener un grupo de asesores fiables a los que recurrir, es mejor no hablar acerca de las decisiones para que te den opini??n o consejo. La mejor manera de usar a tus asesores es que hagan de caja de resonancia para que puedas o??r tus propias consideraciones acerca de la decisi??n."]
//     ];

// const lunarCompleto = [
//     ["La autoridad lunar, exclusiva del reflector"],
    
//     [" Se navega a trav??s del movimiento o tr??nsitos de la luna  d??as, y en ese sentido es celestial"],
    
//     [" Esto es radicalmente diferente de todas las dem??s autoridades"],
    
//     ["Sin una fuerza de vida constante, la autoridad lunar requiere una comprensi??n profunda de c??mo los planetas est??n aportando energ??a a la vida"],
    
//     [" Hay un patr??n, como una canci??n o un poema de la fuerza de vida que se enciende y apaga, que debe aprenderse"],
    
//     ["Este patr??n se repite cada  28 a 29  d??as, por lo que observar este patr??n al considerar una decisi??n da muchas perspectivas diferentes"],
    
//     ["Es solo viendo la vida a trav??s de uno o m??s ciclos lunares que un reflector puede incluso comenzar a VER c??mo estos movimientos los cambian, para que puedan tener una relaci??n mucho m??s profunda con la naturaleza y las estrellas"],
    
//     [" La conciencia ambiental tambi??n es clave aqu??"],
    
//     ["Es muy importante para su bienestar que estos seres est??n en la ubicaci??n f??sica correcta, con las personas ya que traen un reflejo de su entorno al mundo"],
    
//     [" Si el entorno no les produce una buena impresi??n no es sano, no se sentir??n bien o estar??n inc??modos"],
    
//     [" Importante rodearse de asesores o confidentes fiables con los que hablar de cualquier situaci??n o decisi??n potencial"],
    
//     [" Al final de un ciclo o quiz??s muchos ciclos, el reflector puede tener una sensaci??n de claridad sobre la decisi??n."],
//     [" Una de las claves es no apresurarse y no dejar que el mundo les meta prisa"],
//     [" Es importante prestar atenci??n al entorno, ya que los reflejan"],
//     [" Oy??ndose hablar a si mismos, seg??n va pasando el tiempo, un d??a, sencillamente llegar??n a saber dentro de s??, con una profunda sensaci??n interna, que decisi??n es correcta para ellos"]
//     ];

// const gCompleto = [
//     ["G Authority, exclusiva de los Proyectores"],
    
//     [" La clave de esta autoridad es escuchar lo que dices"],
    
//     ["Todo lo que necesitas saber est?? en lo que dices y desde el centro G sale una voz muy poderosa de tuidentidad que habla por ti reaccionando a una invitaci??n"],
    
//     [" Est?? enraizada en la expresi??n del yo"],
    
//     ["Cuando te inviten escucha lo que dices. No trates de determinar mentalmente lo que vas a decir; simplemente escucha tu voz y conf??a en ella en ese momento"],
    
//     ["Preg??ntate ??Me har?? feliz esto? ??Me dejar?? esto expresarme a mi mismo? ??Voy en la direcci??n apropiada para m???"],
    
//     [" Para vitar tomar una decisi??n desde tu mente, c??ntrate en escuchar lo que est??s diciendo sin pensar en ello"],
    
//     [" Esto no tiene nada que ver con lo que una persona piensa como ellos mismos"],
    
//     ["La autoridad G puede descubrirse aprendiendo a escuchar la frecuencia de la voz cuando la persona no est?? pensando"],
    
//     [" La voz tendr?? una calidad de transmisi??n, una expresi??n fluida que no se ver?? obstaculizada por la mente, o no lo har??"],
    
//     [" Cuando un proyector G est?? hablando y siente que su expresi??n es restringida o poco clara, esto es una se??al de que o bien no fueron invitados, o la mente est?? tratando de influir en la corriente de informaci??n"],
    
//     [" El proyector G comienza a reconocerse mediante la interacci??n con el otro."],
    
//     ["Con el tiempo, esto se convierte en una conciencia visceral, y puede experimentarse como una apertura o atracci??n desde el interior del cofre, como si el yo se levantara para encontrarse con la vida y se moviera en la direcci??n correcta"],
    
//     [" Sentirse c??modo al expresarse sin censura mental, cuando es invitado, es una parte importante de la evoluci??n de la autoridad de G."],
    
//     ["En ??ltima instancia, se recomienda con esta autoridad que hables sobre cosas importantes en tu vida con otra persona para aclarar cu??l es tu verdad"]
//     ];

// const egoCompleto = [
//     [" La autoridad del ego es exclusiva de Manifestadores y Proyectores"],
    
//     [" Es la m??s rara de todas las autoridades"],
    
//     [" Hay dos autoridades del Ego: la autoridad manifestada y la autoridad proyectada"],
    
//     ["Autoridad Manifestada"],
    
//     ["La autoridad manifestada se activa mediante el canal -21-45"],
    
//     [" Tu autoridad manifestada tiene que ver con la articulaci??n de tu voz"],
    
//     [" Tu autoridad se expresa verbalmente a trav??s del centro de la garganta"],
    
//     [" Es importante para ti escuchar lo que ???dices??? para conocer tu verdad, en vez de lo que est?? diciendo tu mente"],
    
//     [" La autoridad del ego se experimenta cuando reconoces lo que dices o haces cuando no est??s pensando"],
    
//     ["Como manifestador, para informar necesitas verbalizar en el momento ya que no se trata piensas que deber??as decir sino de lo que dices cuando no est??s tratando de controlarlo"],
    
//     ["El no-ser esta siempre intentando controlar lo que decimos y, de hecho, lo que dices de repente sin pensarlo (pasando por alto tu mente) es la verdad"],
//     [" Si tratas de planear de alguna manera lo que vas a decir, pierdes la conexi??n con tu Autoridad"],
    
//     [" Estas dise??ado para tener impacto y es importante que conf??es en lo que vas a decir sin que lo anule tu mente"],
    
//     [" Tu verdad es rendirte a la verdad de tu voz; ah?? se origina tu impacto"],
    
//     [" Tu voz inicia y dirige tu vida. Tu voz gu??a y tu sigues. Conf??a en tu voz"],
    
//     [" Una forma de experimentar es hablar con amigos que simplemente escuchen el tono de la verdad en su voz, sin tratar de influenciarlo"],
    
//     ["Autoridad Proyectada"],
    
//     ["La autoridad proyectada se activa mediante el canal - 25-51"],
    
//     [" La clave es seguir tu Estrategia de Proyector y esperar a que te reconozcan inviten"],
    
//     [" Necesitas personas en tu vida que te reconozcan y te inviten"],
    
//     [" El liderazgo del Proyector es una fuerza poderosa en la vida de otras personas, y est?? aqu?? para guiarnos"],
    
//     [" Cuando te invitan, tienes una enorme capacidad para ser una fuerza de transformaci??n"],
    
//     [" Cuando est??s tomando una decisi??n, s?? ego??sta y preg??ntate ?????Qu?? quiero? ??Qu?? beneficio saco de esto?"],
    
//     ["Mientras esperas que te reconozcan es importante que emplees tu tiempo en prepararte, aprendiendo alg??n sistema que te ayude a guiar a otros y tener ??xito"],
    
//     ["Porque el ego impulsado por la mente tiene una forma de dominar todo y todos en la b??squeda de lo quequiere, muchas personas con autoridad del ego tienen que aprender a usar este poder correctamente"],
    
//     ["En realidad, es un proceso de desaprendizaje o reaprendizaje para dominar el uso preciso, saludable y correcto de esta fuerza, expres??ndose de forma natural en lugar de dese??ndose a s?? mismo a trav??s de la vida"],
//     [" La autoridad del ego est?? arraigada en el uso correcto de la fuerza de voluntad"],
    
//     [" El ego, cuando se utiliza adecuadamente, se compromete con algo que es correcto para ese ser"],
    
//     [" La autoridad del ego se puede escuchar en la voz o ser experimentada como la fuerza de voluntad para completar algo"]
//     ];


// const bazoCompleto = [

//     ["La autoridad de Spleen (Bazo), es exclusiva de Manifestadores y Proyectores"],
    
//     [" La autoridad del bazo est?? enraizada en la supervivencia y es la conciencia m??s antigua y m??s existencial."],
    
//     [" Nos une profundamente a nuestro pasado Spleen (Bazo) no sabe nada m??s que c??mo sobrevivir ahora mismo"],
    
//     ["La conciencia espl??nica fluye a trav??s de todo el sistema linf??tico del cuerpo como peque??as lenguas, narices y o??dos"],
    
//     ["La autoridad del bazo se siente como una resonancia o reconocimiento inmediato de algo o alguien y esa sensaci??n se conocimiento interno de si es sano y adecuado para ti o no"],
    
//     [" Se puede experimentar como una sensaci??n de alerta total en forma de gato"],
    
//     ["Sin embargo, para la mayor??a de las personas, esta es la conciencia m??s dif??cil de acceder, ya que es silenciosa y d??bil en comparaci??n con la mente y las emociones"],
    
//     ["Nuestra inteligencia altamente evolucionada para la supervivencia nos alerta de qu?? entornos, direcci??n, oportunidades o personas son seguros y ventajosos para que nos involucremos con ellos y cu??les no."],
    
//     [" El bazo habla suavemente una vez y nunca se repite"],
    
//     [" No permitir que tu mente, o las necesidades emocionales, deseos o presiones de otros te induzcan a cuestionar o invalidar los mensajes de tu Centro del Bazo"],
    
//     [" Permanecer en el presente y sintonizar con lo que te est?? diciendo tu cuerpo es crucial para tu supervivencia"],
    
//     [" Requiere un profundo nivel de atenci??n a muchas sensaciones psicol??gicas sutiles la habilidad de actuar si es necesario corregir sin importar cuales son las consecuencias"],
    
//     [" El Bazo no es consciente del futuro y puede que diez minutos, una hora un d??a despu??s cambie lo que era correcto para ti y tu actividad"],
    
//     [" Volver a conectar con tu bazo requiere experimentaci??n y una profunda confianza en la sabidur??a inherente de tu veh??culo para llevarte a salvo donde, como y con quien necesites ir"],
    
//     [" La mayor??a de las personas tiene dificultades para acceder realmente a esta conciencia antigua"],
    
//     [" Las decisiones hay que tomarlas en el momento. Si esperas, el momento y la informaci??n se han ido"],
    
//     [" Si alguna vez no est?? claro, regresa a tu aura. Eso te ayudar?? a aterrizarte."],
    
//     ["El bazo b??sicamente dice S?? hasta que dice NO, y NO puede ser bastante cortante e incluso violento; sin embargo, debe ser obedecido para su propia supervivencia"],
    
//     [" Con el tiempo, el bazo puede desarrollarse y convertirse en una sensaci??n de 'golpe' corporal ligero visceral, como 'esto es muy saludable' "],
    
//     [" El principal trabajo del bazo es decir NO a cualquier cosa que ponga en peligro su salud."]
//     ];

// const plexoCompleto = [

//     ["Cuando el Plexo Solar se define en el Dise??o de alguien, significa que su autoridad es emocional."],
    
//     ["Cuando se define el plexo solar, tiene preferencia sobre los dem??s centros de autoridad de la carta"],
    
//     [" La autoridad emocional est?? enraizada en sentir en lugar de pensar"],
    
//     [" No es l??gico y uno nunca deber??a tratar de buscar la explicaci??n"],
    
//     ["El Plexo Solar opera trav??s de una ola emocional y que esperar a la claridad es la clave para vivir en armon??a "],
    
//     [" Las emociones funcionan en una ola, pasando de la esperanza al dolor y viceversa"],
    
//     [" Es al sentir estos movimientos que se puede experimentar la autoridad emocional."],
    
//     [" La autoridad emocional es lenta y nunca debe apresurarse."],
    
//     ["Es una conciencia incre??blemente profunda del medio ambiente, como un radar emocional que se extiende para SENTIR lo que es bueno para ti"],
    
//     [" Para un ser emocional, debes sentir la situaci??n o las personas durante un per??odo de tiempo, desde diferentes puntos en tu ola, a fin de extraer la verdad real de ella"],
    
//     [" Es una buena idea alejar a las personas y las decisiones durante el mayor tiempo posible"],
    
//     ["Nunca estar??s seguro, se sentir?? bien o no. Es por eso que decimos: \"No hay verdad en el ahora para el ser emocional\". El lema es: ???No hay verdad en el ahora???"],
    
//     [" La verdad se revela en su plenitud con el paso del tiempo y eventualmente aflora como una sensaci??n de claridad"],
    
//     [" La paciencia es el componente clave al esperar a ir pasando por la ola emocional antes de tomar una decisi??n"],
    
//     [" Como no hay verdad en el momento, las decisiones espont??neas no son fiables, ya que se tratan de decisiones basadas en el no-SER "],
    
//     [" Cada vez que comiences a pensar, recuerda: se trata de lo que sientes, no de lo que piensas."],
    
//     ["El tiempo es la clave, cuanto m??s tiempo mejor, ese tiempo establece una distancia entre el momento que se pide una decisi??n y la decisi??n misma. Seg??n esperas iras adquiriendo claridad, aunque la claridad o certeza total, suele se inusual "],
    
//     [" El objetivo es tener la mayor claridad posible "],
    
//     ["Lo mejor es evitar tomar decisiones en los momentos cargados emocionalmente de altos y bajos, ya que eso solo aporta mas caos"],
    
//     ["Si pides a los otros que esperen mientras te tomas tu tiempo para decidir, puede que t?? o tus habilidades les parezcan a??n mas esenciales y atractivas, asumiendo que el ofrecimiento es correcto para ambas partes"]
//     ];


// const autoridadFijo = [

//     ["Tu mente te intenta enga??ar tratando de ser la autoridad en tu vida, convencida de que sabe lo que te conviene"],
    
//     ["Tu mente utilizar?? y pensar?? cualquier cosa para mantener su apariencia de control y te dar?? todas las escusas y razonamientos, uno tras otro para hacerse con el control "],
    
//     ["Cuando defines y respetas tu verdadera autoridad, tu mente puede ser un poderoso aliado"],
    
//     ["Has de profundizar en tu estrategia, tu tipo y tu autoridad para as?? liberar tu mente para que observe la vida como si fuera un pasajero relajado y reflexivo, capaz de disfrutar de su viaje y desempe??ar su papel como autoridad externa para los dem??s "],
    
//     ["La autoridad nos ense??a a vivir a los seres humanos tomando las decisiones que nos son correctas individualmente "],
    
//     ["Nos han condicionado para buscar aprobaci??n y autoridad fuera de nosotros y tomar las decisiones con la mente"],
    
//     ["Cuando aprendemos a emplear nuestra Estrategia y Autoridad, nos alineamos con nuestra Geometr??a ??nica (nuestro camino) "],
    
//     ["Siendo aut??nticos nuestra composici??n gen??tica, nuestra raz??n para encarnarnos y nuestra unicidad se expresan a trav??s de nosotros como nuestro SER Verdadero y las cosas encajan de manera natural como, donde vivimos, nuestro trabajo y nuestras relaciones "],
    
//     ["Una vez la mente se ha liberado de tomar decisiones, puede tomar su legitimo lugar en nuestra vida como un testigo preciado y valioso adem??s de ser muestra autoridad externa para los dem??s "],
    
//     ["Si seguir nuestra estrategia nos conecta con nuestra propia autoridad personal. Cuando operamos siendo nuestro ser aut??ntico ??nico, nuestros centros sin definir se convierten en lugares de gran sabidur??a."],
    
//     ["En vez de condicionarnos de una manera distorsionada, estos centros sin definir los informan clara y exactamente de lo que est?? sucediendo en nuestro mundo que nos rodea. Una vez que estamos bien encaminados y alineados con nuestra geometr??a correcta, la mente puede empezar a revelar su propio potencial como una extraordinaria autoridad externa para los dem??s."],
//     ,
//     [" Puede expresar nuestra inteligencia, comunicarse con otros para compartir nuestras experiencias y percepciones ??nicas e inspirarles con lo que hemos aprendido. "],
    
//     [" La mente est?? aqu?? para pensar, cuestionar, interpretar, ense??ar, inspirar, recordar, organizar, nombrar y procesar datos."],
    
//     [" Estas son las maneras en que podemos compartir los dones de nuestra mente con quienes est??n aqu?? para recibirnos y responder a ellos desde su propia autoridad punto"],
    
//     [" Cuando m??s practiquemos nuestra estrategia y autoridad y liberemos a la mente de tomar decisiones coma m??s valiosas se vuelve nuestra autoridad externa para los dem??s."],
    
//     ["Una vez que estamos alineados con nuestra verdadera naturaleza, estamos sintonizados con nuestra propia fuerza vital y nuestro aut??ntico prop??sito de vida. Entonces surge de la mente algo de valor ??nico, algo que los dem??s han estado esperando o??r. Y nuestra mente liberada recupera el potencial para expresar finalmente nuestra raz??n ??nica para encarnarnos "]
//     ];

// const estrategiasReflector = [
//     ["Los reflectores no tienen definici??n fija en su carta, ninguna fuente fiable de autoridad personal "],
    
//     ["No hay ninguna fuente fiable para el ???s????? o el ???no??? dentro de ellos para guiarlos a tomar decisiones importantes en su vida "],
    
//     ["La estrategia del reflector es conectar con el ciclo lunar, el viaje de la luna alrededor del Mandala, que dura aproximadamente  d??as y abarca las  puertas de la rueda "],
    
//     ["Este patr??n fiable y repetitivo proporciona al reflector una sensaci??n de consistencia comparable, aunque no id??ntica, a tener una definici??n fija "],
    
//     [" Los reflectores necesitan ser iniciados para tomar las grandes decisiones de su vida "],
    
//     ["Su ciclo lunar comienza cuando se les ha hecho una oferta importante o alguien les ha invitado a poner en marcha un proceso"],
    
//     ["Ellos no pueden iniciar, seg??n avanzan hacia la claridad a trav??s de su ciclo lunar, sus percepciones de reflector van cambiando durante este tiempo y querr??n hablar con otros, no para buscar consejo, sino para articular sus propios pensamientos y o??r su propia verdad potencial "],
    
//     ["La calidad de sus asociaciones y la manera en que su aura filtra el mundo que les rodea, con el tiempo refina su forma de tomar decisiones"],
    
//     [" Necesitan que se les anime a tomarse su tiempo y no permitir que les presionen o le metan prisa "],
    
//     [" De pronto, sabr??n en lo hondo de s??, si la oferta era adecuada para ellos o no "],
    
//     [" Sin embargo, s?? han completado el ciclo lunar y todav??a no lo tienen claro, es aconsejable que esperen a que llegue la claridad, teniendo presente qu?? puede llevarles m??s de un ciclo "],
    
//     ["Aunque esta fase lunar para tomar las decisiones es espec??fica de los reflectores, todos los tipos se pueden beneficiar comprendiendo la influencia repetitiva, pero transitoria de la luna en sus vidas "],
    
//     ["Seguir la manera en que el ciclo lunar conecta con tu propia carta es un proceso fascinante"]
//     ];


// const estrategiasProyector = [
//     ["Tu estrategia, Es ser Reconocido y esperar la Invitaci??n "],
    
//     [" Los Proyectores est??is dise??ados para ser vistos. La gente siempre se fija en los Proyectores"],
    
//     ["Cuando los Proyectores son reconocidos de verdad, sienten en su fuero interno que ya no hay dudas"],
    
//     ["Vuestra estrategia y proceso de tomar decisiones, es la de esperar a ser reconocidos y despu??s invitado. Ese reconocimiento e invitaci??n llegan del silencio"],
    
//     ["Cuando como proyectores comprend??is que esperar desde el silencio es vuestra cualidad de estar listos, observareis como vuestra potente aura atrae a la gente y su reconocimiento "],
    
//     ["Cuando has sido reconocido e invitado correctamente, tus dones y habilidades se potencian y te sentiras lleno de energ??a que, aunque no es tuya, puedes emplearla en tu beneficio y en el de los dem??s "],
    
//     ["Esa invitaci??n que esperas, podr??amos definirla como una invitaci??n formal y a largo plazo, est??s esperando que los que te invitan, reconozcan, soliciten y potencien tus habilidades especiales "],
    
//     ["Esa invitaci??n, te proporciona acceso a los recursos energ??ticos iniciadores que normalmente te vendr??n de un generador. La relaci??n del Generador y el Proyector es interdependiente, ya que ninguno de los dos ten??is el poder de satisfacer vuestro prop??sito sin el otro "],
    
//     ["Normalmente las invitaciones que te vendr??n son aplicables a las cuatro decisiones principales que vas a tener que tomar en tu vida. La invitaci??n a amar, a una carrera profesional, a establecer v??nculos con otros y a elegir un lugar en el que vivir "],
    
//     ["Como Proyector, una vez que has recibido la invitaci??n y la has aceptado, emplear??s todas tus habilidades de que dispones para completar tu compromiso, mientras quien te invit?? permanezca abierto, receptivo y dispuesto a desempe??ar su papel. Esto puede durar una semana, unos meses, a??os o el resto de tu vida, dependiendo del compromiso acordado"],
    
//     ["Cuando adquieres un compromiso a largo plazo, necesitas poner todo tu empe??o en seguir tu Estrategia y Autoridad"],
    
//     ["Otro paso importante para ti es el de ser selectivo. El hecho de recibir una invitaci??n no significa autom??ticamente que sea la correcta para ti, tu autoridad te guiara a encontrar la energ??a que te es propicia"],
    
//     ["Tu proceso de tomar decisiones es ??nico y la mejor manera de saber cu??l es la invitaci??n correcta, es medir el nivel de resistencia que notas al decidir sobre ella. Con el tiempo y al ir aumentando tu conciencia, tu capacidad para reconocer las invitaciones correctas mejorar?? y ese proceso b??sico para ti, se ir?? refinando "],
    
//     ["Cuando eres reconocido e invitado correctamente, de pronto notar??s que tienes acceso a la energ??a fiable de otros, lo que a su vez libera tus propios dones de Proyector y tu autoridad Externa."],
    
//     ["Has de tener presente que todas las invitaciones tienen una fecha de caducidad, cuando la invitaci??n pierde su energ??a o excitaci??n, es posible que ya te haya sido retirada, o que el trabajo para el que se te invit??, este completado, y quiz??s t?? no te has dado cuenta de ello y pienses que las cosas ya no funcionan, en ese momento, es necesario hablar de la situaci??n con la persona que te reconoci?? para aclarar el estado de la invitaci??n y seguir con ella o darla por terminada "],
    
//     ["Una vez que te has alineado con tu propio poder, puedes dejar que tu aura hable por ti, tu espera silenciosa, es la mejor manera de suscitar las invitaciones correctas y notaras gradualmente que las invitaciones que no se basaban en el reconocimiento, ir??n desapareciendo poco a poco"],
    
//     [" Si conf??as en la magia silenciosa de tu qu??mica, no hay necesidad de que te invites a ti mismo, las oportunidades llegar??nEstrategia en el Sistema de Dise??o Humano"],
    
    
//     ["Has de intentar encontrar un lugar en tu hogar, libre de otras auras, donde retirarte para relajarte apropiadamente y poder soltar las energ??as que has absorbido durante todo el d??a, con el tiempo, aprender??s a realizar esas retiradas energ??ticas con mucha diplomacia "],
    
//     ["De la misma manera es importante para ti, en la medida de lo posible, dormir solo, ya que el % de la poblaci??n est?? generando energ??a generadora y necesitas desconectar y tener un descanso reparador "],
    
//     [" Has de conseguir un equilibrio sano entre actividad y descanso y aprender a notar cuando ya es suficiente, cuando soltar la energ??a ??urica residual de otros y estar solo"]
//     ];



// const estrategiasManifestador = [
//     ["Tu estrategia, es Informar"],
    
//     ["Tienes una reputaci??n de representar una amenaza al orden y estabilidad, necesitando tomar el control de la situaci??n."],
    
//     ["Con frecuencia, las personas se sienten ignoradas y atropelladas por los Manifestadores y, en consecuencia, tienden a tenerle miedo."],
    
//     ["A la inversa, tu como Manifestador@ creces condicionad@ por el miedo a ser controlad@ y te revelas haciendo lo opuesto de lo que es saludable para ti"],
    
//     ["Tu aura repelente, hace que las dem??s auras se contraigan y se ponen a la defensiva tratando de protegerse"],
    
//     ["La mayor??a de los malentendidos y confusiones interpersonales entre los tipos se establecen energ??ticamente muy por debajo de nuestro nivel de consciencia, antes incluso que hayas iniciado la comunicaci??n verbal"],
    
//     ["Tu sencilla estrategia de Informar, zanja la interacci??n ??urica tan cargada con los dem??s y abre eficazmente el camino a la comunicaci??n clara, productiva y pac??fica."],
    
//     ["Informar es la ??nica manera que tienes para superar las resistencias y encontrar la libertad que necesitas para manifestar "],
    
//     ["T??cnicamente, necesitas informar despu??s de haber tomado una decisi??n, pero antes de actuar, o al menos cuando est??s actuando, igualmente debes hacerlo si decides no seguir haciendo algo, informa siempre."],
    
//     [" Aunque informar para ti, est?? lejos de ser agradable y natural, la vida es mucho m??s f??cil cuando aprendes a hacerlo y lo haces bien"],
    
//     [" Solo informando puedes eliminar las resistencias en tu camino y tranquilizar a los dem??s ??uricamente, sin ser ni pasivo ni agresivo "],
    
//     ["De ni??@ para ti informar adoptaba la forma de aprender a tener modales y pedir permiso, sin embargo, en edad temprana optas por no pedir permiso o informar, bien porque te parece demasiada molestia o porque piensas que, si lo mantienes en secreto, lo que vas a hacer evita ser rechazado o controlado"],
    
//     ["Como Manifestaror@ no necesitas a la gente de la misma manera que los dem??s, ni te preocupa como los dem??s te perciben"],
    
//     ["Te sientes bien cuando puedes liberar tu poder iniciador preparando a las personas sobre como podr??n verse afectadas por sus acciones, entonces notar??s un nuevo tipo de apoyo y receptividad de tu entorno"],
    
//     ["Cuando la resistencia ya no es un problema, disminuye la rabia y prevalece la paz, adem??s de sentirte honrada y respetada cuando los dem??s te incluyen e informan."],
    
//     ["Para ponerte en perspectiva pondremos un ejemplo sencillo"],
    
//     ["Vas a trabajar y a media ma??ana te das cuenta de que tu trabajo no te llena y parece un empleo sin porvenir."],
    
//     ["Llena de excitaci??n y dej??ndote guiar por tu visi??n, empacas las cosas de la oficina, dejas la carta de dimisi??n en la mesa del jefe, te despides, les deseas suerte a todos y te vas. Has sembrado el caos, nadie lo entiende porque nadie ha sido informado y preparado adecuadamente para tu decisi??n. El jefe se qued?? sin su ayudante, los compa??eros se preguntan que habr??n hecho para ofenderte y tu familia se preocupa por tu seguridad y futuro, has impactado en la vida de todos por tu brusquedad al tomar tu decisi??n sin informar a nadie."],
    
//     [" Tienes tu plan de acci??n y no necesitas el consejo o comentario de nadie para hacerlo realidad. "],
    
//     ["Sin embargo, acordarte de informar a todos los implicados en tu decisi??n habr??a reducido no solo la resistencia, sino que tambi??n pod??a haberte proporcionado apoyo para llevar a cabo tu nuevo camino en paz."],
    
//     [" Informar te prepara el camino para manifestar, es tu ??nica soluci??n correcta"],
    
//     ["Esta estrategia parece f??cil y l??gica, sin embargo, la mayor??a de los Manifestadores pens??is que est??is solos en el mundo, e informar es lo ??ltimo que se os ocurre de manera natural. Cuando te tomas el tiempo para escribir los nombres de todas las personas posiblemente afectadas por tu futura decisi??n, te dar??s cuenta de que no est??s tan aislada y que tus decisiones impactaran. "],
    
//     ["Cuando te haces consciente de tu impacto en los dem??s, la l??gica de informar te resultar?? evidente, y ese conocimiento por si solo puede transformarte."],
    
//     [" Informar en el fondo es una forma de mostrar respeto por las otras personas, cuando no les informas, los dem??s lo toman como una falta de consideraci??n y te ignoraran "],
    
//     [" Informar desvanece el miedo y fortalece la confianza, lo que a su vez disuelve la necesidad de control por todas las partes "],
    
//     ["Para lograr la expresi??n total de tu potencial cognitivo y tener el impacto adecuado, debes actuar de acuerdo con tu verdad interna y no de la mente, Si decides hacer algo usando la mente, simplemente para liberar la presi??n de poner algo en marcha, encontraras resistencia"]
//     ];

// const estrategiasGenerador = [
//     ["Tu estrategia, es ir respondiendo minuto a minuto a los est??mulos de la REALIDAD EXTERNA"],
    
//     ["Tu Sacral es tu mecanismo de respuesta y si act??as desde esa capacidad para responder, te convertir??s en un ser muy poderoso, ya que fluir??s desde tu aura "],
    
//     ["Tienes que aprender a no iniciar nada, esperar, escuchar atentamente a tu Sacral y responder a los acontecimientos que te traiga la vida."],
    
//     ["Espera a que un est??mulo externo te haga una pregunta, entonces, escucha la respuesta de tu Sacral y conf??a en esa respuesta "],
    
//     [" Como ver??s, por un lado, tienes la espera activa y por el otro la respuesta"],
    
//     [" ??Te preguntar??s que es la espera activa? . Es f??cil, es la Realidad exterior Vs. La realidad mental"],
    
//     ["No te preocupes, la espera no es inacci??n, es un estado de alerta consciente, estas disponible y receptivo a los est??mulos que te llegan."],
    
//     [" En cierta manera te pareces al cazador esperando su mejor momento de atrapar a su presa "],
    
//     ["Recuerda que tu aura es acogedora, abierta, envolvente, por lo que estas en todo momento atrayendo las oportunidades a las que tendr??s que responder"],
    
//     [" Tienes que entender que te comportas como un agujero negro m??gico que atrae a todo el mundo hacia ti."],
    
//     [" Realmente act??as como in im??n, as?? que conf??a en saber esperar y ten paciencia."],
    
//     [" ??Y te preguntar??s que estoy esperando?"],
    
//     [" Espera cualquier estimulo que no venga de tu mente, que no sea un pensamiento, una idea, un "],
//     ["concepto un juicio."],
    
//     [" Estate atento y notaras ese estimulo, a veces sutil del entorno. Pueden ser sonidos, est??mulos visuales, incluso palabras que surgen de una conversaci??n o situaciones de tu vida diaria "],
    
//     ["Un ejemplo: Si vas por el jard??n y ves que las plantas necesitan podarse, a ese est??mulo responder?? tu Sacral si tiene o no energ??a disponible para realizar la terea"],
    
//     ["Tambi??n puedes ser una pregunta o propuesta que te realice una persona, preguntas que sus respuestas son: ???SI??? ???NO??? o ???NO SE???"],
    
//     [" ??Quieres ir a cenar?, ??Jugamos al Ping Pong? ??Puedo pedirte que me ayudes en algo?, etc."],
    
//     ["La dificultad como Generador, es que careces de paciencia y enseguida entras en acci??n, y eso te pasa por dos motivos"],
    
//     ["Desconoces la conciencia del cuerpo, al no saber que la inteligencia que nos gu??a reside precisamente en el cuerpo, por eso has de tener en cuenta tus sensaciones corporales antes de tomar una decisi??n "],
    
//     ["No esperar para responder, ya que ignoras tu capacidad gen??tica para atraer a los otros y piensas que, si no te esfuerzas, nadie vendr?? a llamarte para proponerte cosas."],
    
//     [" Por esa raz??n, todos los Generadores est??n pensando en si los otros ??me preguntar??n? "],
    
//     [" Cuando conf??es en tu naturaleza, ver??s como el ma??ana te proveer?? de lo que necesites. "],
    
//     [" Necesitas el coraje para llegar a ese nivel de entrega y lograr rendirte a la vida"],
    
//     [" Tu dise??o como Generador esta creado para que te rindas a la vida, desde el significado m??s profundo de la palabra"],
    
//     [" R??ndete y veras como no hay ma??ana, no hay ma??ana, veamos que viene ahora, nada m??s?????????. y en ese momento empezar??s a ver la belleza de dejarte fluir"],
    
//     [" ??Y una vez me realizan esas preguntas, como respondo?"],
    
//     ["Como Generador, tienes un sorprendente sistema de gu??a interior que la naturaleza te ha otorgado, es el Sacral con su respuesta visceral a cualquier cosa de la vida y su entorno te pregunte."],
    
//     ["Tu aura recibe con los brazos abiertos todo lo que venga del exterior y si empleas tu autoridad responder??s de forma correcta"],
    
//     [" ??Y c??mo manifiesto es respuesta? "],
    
//     [" En algunas ocasiones ser?? un sonido gutural ???Ahh????? (si), ???Hum mm??? (no) o Mmm (no s??) y no van acompa??ados de lenguaje "],
    
//     [" En otras ocasiones notaras una subida o bajada de tu energ??a interna"],
    
//     ["Tambi??n puedes sentir la sensaci??n de abrirme o cerrarme a una experiencia o la de sentir que algo te atrae o rechazas"],
    
//     [" Tienes que saber que una vez has tomado la decisi??n, te cuesta much??simo cambiar de rumbo y que solo lo har??s al responder con lo que siente tu Sacral a una nueva pregunta "],
    
//     ["Has de tener en cuenta que tu respuesta Sacral es pura inteligencia en crudo y no se puede traducir en palabras, es puramente energ??tica y traspasa la consciencia, no se involucra con filosof??a, pol??tica o religi??n "],
    
//     [" Es tan simple que la mente no la quiere tener en cuenta y la descalifica, pero, es lo m??s verdadero para ti como Generador"],
    
//     ["Cuando despiertes tu Sacral, sabr??s ???si me gusta??? o ???no me gusta??? y aprender??s a escuchar y responder desde la inteligencia del cuerpo, despert??ndote una frecuencia de energ??a que te abrir?? la consciencia y la capacidad de conocer que hacer y con quien hacerlo"],
    
//     ["Si vives de acuerdo con tu naturaleza, alcanzar??s un estado de consciencia conectado a la sincronicidad que reina en el Universo"],
    
//     [" Entrar??s en un estado que no podr??s hacer otra cosa que seguir fluyendo con la vida"]
//     ];




//     const estrategiasGeneradorManifestante = [
//         ["Tu estrategia, es ir respondiendo minuto a minuto a los est??mulos de la REALIDAD EXTERNA. Haciendo un s??mil, siempre tienes el coche en marcha con el pie puesto en el acelerador, "],
        
//         ["Tu tendencia es iniciar, siempre inquieto, listo para entrar en cualquier cosa en cualquier situaci??n, sin esperar ni escuchar "],
        
//         ["Tu Sacral es un mecanismo de respuesta y si act??as desde esa capacidad para responder te convertir??s en un ser muy poderoso, ya que fluir??s desde tu aura y tu existencia"],
        
//         ["Tienes que aprender a no iniciar nada, esperar, escuchar atentamente a tu Sacral y responder a los acontecimientos que te traiga la vida."],
        
//         ["Espera a que un est??mulo externo te haga una pregunta, entonces, escucha la respuesta de tu Sacral y conf??a en esa respuesta "],
        
//         ["Necesitas pr??ctica y paciencia para establecer tu conexi??n con el Sacral, siendo esa sensaci??n un movimiento hacia lo que te atrae, m??s que un sonido, la paciencia y el aplomo son indispensables para ti "],
        
//         ["El proceso es el siguiente:"],
        
//         [" Esperar el est??mulo y siente la respuesta de tu Sacral "],
        
//         [" Esperar un tiempo hasta tener la respuesta clara"],
        
//         [" Si la respuesta es clara y es un ???SI???, antes de entrar en acci??n, debes informar a las personas involucradas "],
        
//         [" Pasar a la acci??n"],
        
//         [" Como ver??s, por un lado, tienes la espera activa y por el otro la respuesta"],
        
//         [" ??Te preguntar??s que es la espera activa? . Es f??cil, es la Realidad exterior Vs. La realidad mental"],
        
//         [" No te preocupes, la espera no es inacci??n, es un estado de alerta consciente, estas disponible y "],
//         ["receptivo a los est??mulos que te llegan."],
        
//         [" En cierta manera te pareces al cazador esperando su mejor momento de atrapar a su presa "],
        
//         [" Recuerda que tu aura es acogedora, abierta, envolvente, por lo que estas en todo momento atrayendo las oportunidades a las que tendr??s que responder"],
        
//         ["Tienes que entender que te comportas como un agujero negro m??gico que atrae a todo el mundo "],
//         ["hacia ti."],
        
//         [" Realmente act??as como in im??n, as?? que conf??a en saber esperar y ten paciencia."],
        
//         [" ??Y te preguntar??s que estoy esperando?"],
        
//         [" Espera cualquier estimulo que no venga de tu mente, que no sea un pensamiento, una idea, un "],
//         ["concepto un juicio."],
        
//         [" Estate atento y notar??s ese estimulo, a veces sutil del entorno. Pueden ser sonidos, est??mulos visuales, incluso palabras que surgen de una conversaci??n o situaciones de tu vida cotidiana"],
        
//         [" Un ejemplo: Si tu casa ves que necesita una mano de pintura, a ese est??mulo responder?? tu Sacral si tiene o no energ??a disponible para realizar la terea"],
        
//         [" Tambi??n puedes ser una pregunta o propuesta que te realice una persona, preguntas que sus respuestas son: ???SI??? ???NO??? o ???NO SE???"],
        
//         [" ??Quieres ir a cenar?, ??Jugamos al Ping Pong? ??Puedo pedirte que me ayudes en algo?, etc."],
        
//         ["La dificultad como Generador, es que careces de paciencia y enseguida entras en acci??n, y eso te pasa por dos motivos"],
        
//         [" Desconoces la conciencia del cuerpo, al no saber que la inteligencia que nos gu??a reside precisamente en el cuerpo, por eso has de tener en cuenta tus sensaciones corporales antes de tomar una decisi??n Estrategia en el Sistema de Dise??o Humano"],
        
        
//         ["No esperas para responder, ya que ignoras tu capacidad gen??tica para atraer a los otros y que piensas que, si no te esfuerzas, nadie vendr?? a llamarte para proponerte cosas."],
        
//         [" Por esa raz??n todos los Generadores est??n pensando en si los otros ??me preguntar??n? "],
        
//         [" Cuando conf??es en tu naturaleza, ver??s como el ma??ana te proveer?? de lo que necesitas. Has de tener coraje para llegar a ese nivel de entrega y lograr rendirte a la vida"],
        
//         ["Tu dise??o como Generador esta creado para que te rindas a la vida, desde el significado m??s profundo de la palabra"],
        
//         ["R??ndete y veras como no hay ma??ana, no hay ma??ana, veamos que viene ahora, nada m??s?????????. y en ese momento empezar??s a ver la belleza de dejarte fluir"],
        
//         ["??Y una vez me realizan esa pregunta, es propuesta, como respondo?"],
        
//         ["Como Generador, tienes un sorprendente sistema de gu??a interior que la naturaleza te ha otorgado, es el Sacral con su respuesta visceral a cualquier cosa que la vida y su entorno te pregunte."],
        
//         ["Tu aura recibe con los brazos abiertos todo lo que venga del exterior, si empleas tu autoridad aut??nticamente, tu respuesta ser?? la correcta"],
        
//         [" ??Y c??mo manifiesto es respuesta? "],
        
//         ["En algunas ocasiones ser?? un sonido gutural ???Ahh????? (si), ???Hum mm??? (no) o Mmm (no s??) y no van acompa??ados de lenguaje "],
        
//         ["En otras ocasiones notaras una subida o bajada de tu energ??a interna"],
        
//         ["Tambi??n puedes sentir la sensaci??n de abrirte o cerrarte a una experiencia o la de sentir que algo te atrae o lo repele"],
        
//         [" Tienes que saber que una vez has tomado la decisi??n, te cuesta much??simo cambiar de rumbo y que solo lo har??s al responder con lo que siente tu Sacral a una nueva pregunta o propuesta"],
        
//         ["Has de tener en cuenta que tu respuesta Sacral es pura inteligencia en crudo y no se puede traducir en palabras, es puramente energ??tica y traspasa la consciencia y no se involucra con filosof??a, pol??tica o religi??n "],
        
//         ["Es tan simple que la mente no la quiere tener en cuenta y la descalifica, pero, es lo m??s verdadero para ti como Generador"],
        
//         ["Cuando despiertes tu Sacral, sabr??s ???si me gusta??? o ???no me gusta??? y aprender??s a escuchar y responder desde la inteligencia del cuerpo, despertando una frecuencia de energ??a que te abrir?? la consciencia y la capacidad de conocer que hacer y con quien hacerlo"],
        
//         ["Como adem??s de generador eres tambi??n manifestador, cuando tomes la decisi??n de actuar, a fin de estabilizar la energ??a de los dem??s involucrados en la decisi??n, debes informarles acerca de la misma, no se trata de pedir permiso, sino simplemente de intentar que los otros se sientan tenidos en cuenta, de esta forma no generar??s resistencias y tu energ??a fluir?? en libertad"],
        
//         ["Al respetar tu estrategia, evitar?? que te comprometas con aquellas personas y actividades que no son correctas para ti y as??, el n??mero de abandonos, ser??n los correctos"],
        
//         ["Cuando abandonas una experiencia, hay dos formas hacerlo, qued??ndote con una sensaci??n de frustraci??n muy fuerte o viendo lo positivo y el aprendizaje que te ha aportado"],
        
//         ["Cuando respetes tu estrategia, y te des cuenta de que la experiencia no es la que buscabas, y decides dejarlo, puedes abandonar con la frente en alto, sin cargar con ninguna frustraci??n, ya que podr??s conectar con lo positivo que te dej?? dicha experiencia, todo lo contrario, pasa si te has dejado llevar de forma apresurada, siguiendo un mandato mental sin respetar tu estrategia, lo que te har?? sentir frustrado y vac??o "],
        
//         ["Si vives de acuerdo con tu naturaleza, alcanzar??s un estado de consciencia conectado a la sincronicidad que reina en el Universo"],
        
//         [" Entrar??s en un estado que no podr??s hacer otra cosa que seguir fluyendo con la vida"]
//         ]    

//         const angulos = [

//             ["13/7" , "2/1" , "Angulo Derecho", "de la Esfinge 1"],
            
//             ["13/7","23/43","Yuxtapuesta", " de Escuchar "],
//             ["13/7", "23/43","Angulo Izquierdo", "de las M??scaras 1"],
            
//             ["49/4","23/43", "??ngulo Derecho", "de la Explicaci??n 1"],
            
//             ["49/4","14/8","Yuxtapuesta", "de los Principios"],
            
//             ["49/4", "14/8","Angulo Izquierdo", " de la Revoluci??n 1"],
            
//             ["30/29","14/8","Angulo Derecho", "del Contagio 1"],
            
//             ["30/29","20/34","Yuxtapuesta", "de los Hados "],
//             ["30/29", "20/34","Angulo Izquierdo", "de la Industriosidad 1"],
            
//             ["55/59","20/34","Angulo Derecho", "del F??nix Dormido 1"],
//             ["55/59", "16/9","Yuxtapuesta", " de los ??nimos Cambiantes"],
//             ["55/59","16/9","Angulo Izquierdo", "del Esp??ritu 1"],
            
//             ["37/40","16/9","Angulo Derecho", " de la Planificaci??n 1 "],
//             ["37/40","35/5","Yuxtapuesta", "de los Contratos"],
            
            
            
            
//             ["37/40","35/5","Angulo Izquierdo", "de la Migraci??n 1"],
            
//             ["63/63","35/5","Angulo Derecho", "de la Conciencia 1"],
//             ["63/64","45/26","Yuxtapuesta", "de las Dudas"],
//             ["63/64","45/26","Angulo Izquierdo", "del Dominio 1"],
            
//             ["22/47","26/45","Angulo Derecho", "del Gobierno 1"],
//             ["22/47","12/11","Yuxtapuesta", "de la Gracia"],
//             ["22/47","12/11","Angulo Izquierdo", "de Informar 1"],
            
//             ["36/6","12/11","Angulo Derecho", "del Ed??n 1"],
//             ["36/6","15/10","Yuxtapuesta", "de la Crisis"],
//             ["36/6","15/10","Angulo Izquierdo", "del Plano 1"],
            
//             ["25/46","15/10","Angulo Derecho", "del recipiente de Amor 1 "],
//             ["25/46","58/52","Yuxtapuesta", "de la Inocencia 1"],
//             ["25/46","58/52","Angulo Izquierdo", "de la Sanaci??n 1"],
            
            
//             ["17/18","58/52","Angulo Derecho", "del Servicio 1"],
//             ["17/18","38/39","Yuxtapuesta", "de las Opiniones "],
//             ["17/18", "38/39","Angulo Izquierdo", "del Tumulto, levantamiento 1"],
            
            
            
            
            
//             ["21/48","38/39","Angulo Derecho", "de la Tensi??n 1"],
//             ["21/48","54/53","Yuxtapuesta", "del Control"],
//             ["21/48","54/53","Angulo Izquierdo", "del Esfuerzo 1"],
            
//             ["51/57","54/53","Angulo Derecho", " de la Penetraci??n 1"],
//             ["51/57","61/62","Yuxtapuesta", "del Shock"],
//             ["51/57","61/62","Angulo Izquierdo", "del Clar??n 1"],
            
//             ["42/32","61/62","Angulo Derecho", "del May 1"],
//             ["42/32","60/56","Yuxtapuesta", "de la Plenitud"],
//             ["42/32","60/56","Angulo Izquierdo", "de los L??mites 1"],
            
//             ["3/50","60/56","Angulo Derecho", "de las Ley 1"],
//             ["3/50","41/31","Yuxtapuesta", "de la Mutaci??n"],
//             ["3/50","41/31","Angulo Izquierdo", "de los Deseos 1"],
            
//             ["27/28","41/31","Angulo Derecho", "de lo Inesperado 1 "],
//             ["27/28","19/33","Yuxtapuesta", "del Cuidado"],
//             ["27/28","19/33","Angulo Izquierdo", "del Alinearse 1"],
            
//             ["24/44","19/33","Angulo Derecho", "de los Cuatro Caminos 1"],
//             ["24/44","13/7","Yuxtapuesta", "de la Racionalizaci??n 1 "],
//             ["24/44","13/7","Angulo Izquierdo", "de la Encarnaci??n 1"],
            
            
//             ["2/1","13/7","Angulo Derecho", "de la Esfinge 2"],
//             ["2/1","49/4","Yuxtapuesta", "del Chauffeur (conductor)"],
//             ["2/1","49/4","Angulo Izquierdo", "del Desaf??o 1"],
            
//             ["23/43","49/4","Angulo Derecho", "de la Explicaci??n 2"],
//             ["23/43","30/29","Yuxtapuesta", "de la Asimilaci??n"],
//             ["23/43","30/29","Angulo Izquierdo", "de la Dedicaci??n 1"],
            
            
            
            
//             ["8/14","30/29","Angulo Derecho", "del Contagio 2"],
//             ["8/14","55/59","Yuxtapuesta", "de la Contribuci??n"],
//             ["8/14","55/59","Angulo Izquierdo", "de la Incertidumbre 1"],
            
//             ["20/34","55/59","Angulo Derecho", "del F??nix Dormido 2"] ,
//             ["20/34","37/40","Yuxtapuesta", "del Ahora"],
//             ["20/34","37/40","Angulo Izquierdo", "de la Dualidad 1"],
            
//             ["16/9","37/40","Angulo Derecho", "de la Planificaci??n 2"],
//             ["16/9","63/64","Yuxtapuesta", "de la Experimentaci??n"],
//             ["16/9","63/64","Angulo Izquierdo", " de la Identificaci??n 1"],
            
//             ["35/5","63/64","Angulo Derecho", "de la Conciencia 2 "],
//             ["35/5","47/22","Yuxtapuesta", " de la Experiencia"],
//             ["35/5","47/22","Angulo Izquierdo", "de la Separaci??n 1"],
            
//             ["45/26","47/22","Angulo Derecho", "del Gobierno 2"],
//             ["45/26","36/6","Yuxtapuesta", "de la Posesi??n "],
//             ["45/26", "36/6","Angulo Izquierdo", "de la Confrontaci??n 1"],
            
//             ["12/11","36/6","Angulo Derecho", "del Ed??n 2"],
//             ["12/11","25/46","Yuxtapuesta", "de la Articulaci??n"],
//             ["12/11","25/46","Angulo Izquierdo", "de la Educaci??n 1"],
            
//             ["15/10","25/46","Angulo Derecho", "del Recipiente de Amor 2 "],
//             ["15/10","17/18","Yuxtapuesta", "de los Extremos"],
//             ["15/10","17/18","Angulo Izquierdo", "de la Prevenci??n 1"],
            
//             ["52/58","17/18","Angulo Derecho", "del Servicio 2"],
//             ["52/58","21/48","Yuxtapuesta", "de la Quietud "],
//             ["52/58","21/48", "Angulo Izquierdo", "de las Exigencias 1"],
            
//             ["39/38","21/48","Angulo Derecho", "de la Tensi??n 2 "],
//             ["39/38","51/57","Yuxtapuesta", "de la Provocaci??n"],
//             ["39/38","51/57", "Angulo Derecho", "del Individualismo 1"],
            
//             ["53/54","51/57","Angulo Derecho", "de la Penetraci??n 2"],
//             ["53/54","42/32","Yuxtapuesta", "de los Comienzos"],
//             ["53/54","42/32","Angulo Izquierdo", "de los Ciclos 1"],
            
//             ["62/61","42/32","Angulo Derecho", "del May 2"],
//             ["62/61","3/50","Yuxtapuesta", "del Detalle "],
//             ["62/61", "3/50","Angulo Izquierdo", "del Oscurantismo 1"],
            
//             ["56/60","3/50","Angulo Derecho", "de las Ley 2 "],
//             ["56/60","27/28","Yuxtapuesta", "de la Estimulaci??n"],
//             ["56/60", "27/28","Angulo Izquierdo", "de la Distracci??n 1"],
            
//             ["31/41","27/28","Angulo Derecho", "de lo Inesperado 2 "],
//             ["31/41", "24/44","Yuxtapuesta", "de la Influencia"],
//             ["31/41","24/44","Angulo Izquierdo", "del Alfa 1"],
            
//             ["33/19","24/44","Angulo Derecho", "de los Cuatro Caminos 2"],
//             ["33/19","1/2","Yuxtapuesta", "de la Retirado"],
//             ["33/19", "1/2","Angulo Izquierdo", "del Refinamiento 1"],
            
            
//             ["7/13","1/2","Angulo Derecho", "de la Esfinge 3 "],
//             ["7/13","43/23","Yuxtapuesta", "de la Interacci??n"],
            
            
            
            
//             ["7/13","43/23","Angulo Izquierdo", "de las M??scaras 2"],
//             ["4/49","43/23","Angulo Derecho", "de la Explicaci??n 3"],
            
//             ["4/49","8/14","Yuxtapuesta", "de las F??rmulas"],
//             ["4/49","8/14","Angulo Izquierdo", "de la Revoluci??n 2"],
//             ["29/30","8/14","Angulo Derecho", "del Contagio 3"],
            
//             ["29/30","20/34","Yuxtapuesta", "del Compromiso "],
//             ["29/30","20/34","Angulo Izquierdo", "de la Industriosidad 2 "],
//             ["59/55","20/34","Angulo Derecho", "del F??nix Dormido 3"],
            
//             ["59/55","16/9","Yuxtapuesta", "de la Estrategia"],
//             ["59/55","16/9","Angulo Izquierdo", "del Esp??ritu 1"] ,
//             ["40/37","16/9"," Angulo Derecho", "de la Planificaci??n 3"],
//             ["40/37","35/5","Yuxtapuesta", "de la Negaci??n"],
            
//             ["40/37","35/5","Angulo Izquierdo", "de la Migraci??n 2"],
//             ["64/63","35/5","Angulo Derecho", "de la Conciencia 3"],
//             ["64/63","45/26","Yuxtapuesta", "de la Confusi??n"],
            
//             ["64/63","45/26","Angulo Izquierdo", "del Dominio 2"],
//             ["47/22","45/26","Angulo Derecho", "del Gobierno 3"],
//             ["47/22","12/11","Yuxtapuesta", "de la Opresi??n"],
            
//             ["47/22","12/11","Angulo Izquierdo", "de Informar 1"],
            
//             ["6/36","12/11","Angulo Derecho", "del Ed??n 3"],
//             ["6/36","10/15","Yuxtapuesta", "del Conflicto "],
//             ["6/36", "10/15","Angulo Izquierdo", "del Plano Terrenal 2"],
            
//             ["46/25","10/15","Angulo Derecho", "del recipiente de Amor 3"],
//             ["46/25","58/52","Yuxtapuesta", "de Serendipidad"],
//             ["46/25","58/52","Angulo Izquierdo", "de la Sanaci??n 2"],
            
            
            
            
//             ["18/17","58/52","Angulo Derecho", "del Servicio 3 "],
//             ["18/17", "38/39","Yuxtapuesta", "de la Correcci??n "],
//             ["18/17","38/39", "Angulo Izquierdo", "del Tumulto o Sublevaci??n 2"],
            
//             ["48/21","38/39","Angulo Derecho", "de la Tensi??n 3 "],
//             ["48/21","53/54","Yuxtapuesta", "de la Profundidad "],
//             ["48/21","53/54", "Angulo Izquierdo", "del Esfuerzo 2"],
            
//             ["57/51","53/54","Angulo Derecho", "de la Penetraci??n 3 "],
//             ["57/51","62/61","Yuxtapuesta", "de la Intuici??n"],
//             ["57/51","62/61","Angulo Izquierdo", "del Clar??n 2"],
            
//             ["32/42","62/61","Angulo Derecho", "del May 3"],
//             ["32/42","56/60","Yuxtapuesta", "del Conservadurismo"],
//             ["32/42","56/60","Angulo Izquierdo", "de los L??mites 2"],
            
//             ["50/3","56/60","Angulo Derecho", "de las Ley 3"],
//             ["50/3","31/41","Yuxtapuesta", "de los Valores"],
//             ["50/3","31/41","Angulo Izquierdo", "de los Deseos 2"],
            
//             ["28/27","31/41","Angulo Derecho", "de lo Inesperado 3 "],
//             ["28/27","33/19","Yuxtapuesta", "del Riesgo "],
//             ["28/27","33/19","Angulo Izquierdo", "del Alineamiento 2"],
            
//             ["44/24","33/19","Angulo Derecho", "de los Cuatro Caminos 3 "],
//             ["44/24","7/13","Yuxtapuesta", "del Alerta"],
//             ["44/24","7/13","Angulo Izquierdo", "de la Encarnaci??n 2"],
            
            
            
            
            
//             ["1/2","7/13","Angulo Derecho", "de la Esfinge"],
//             ["1/2","4/49","Yuxtapuesta", "de la Autoexpresi??n "],
//             ["1/2","4/49","Angulo Izquierdo", "del Desaf??o 2"],
            
//             ["43/23","4/49","Angulo Derecho", "de la Explicaci??n 4"],
//             ["43/23","29/30","Yuxtapuesta", "del Insight (Perspicacia)"],
//             ["43/23","29/30","Angulo Izquierdo", "de la Dedicaci??n 2"],
            
//             ["14/8","29/30","Angulo Derecho", "del Contagio 4"],
//             ["14/8","59/55","Yuxtapuesta", "de Potenciaci??n"],
//             ["14/8","59/55","Angulo Izquierdo", "de la Incertidumbre 2"],
            
//             ["34/20","59/55","Angulo Derecho", "del F??nix Dormido 4"],
//             ["34/20","37/40","Yuxtapuesta", "del Poder"],
//             ["34/20","37/40","Angulo Izquierdo", "de la Dualidad 2"],
            
            
//             ["9/16","37/40","Angulo Derecho", "de la Planificaci??n 4 "],
//             ["9/16","63/64","Yuxtapuesta", "del Foco"],
//             ["9/16","63/64","Angulo Izquierdo", "de la Identificaci??n 2"],
            
//             ["5/35","63/64","Angulo Derecho", "de la Conciencia 4"],
//             ["5/35","22/47","Yuxtapuesta", "de los H??bitos"],
//             ["5/35","22/47","Angulo Izquierdo", "de la Separaci??n 2"],
            
            
//             ["26/45","47/22","Angulo Derecho", "del Gobierno 4"],
//             ["26/45","36/6","Yuxtapuesta", "del P??caro"] ,
//             ["26/45","36/6","Angulo Izquierdo", "de la Confrontaci??n 2"],
            
//             ["11/12","36/6","Angulo Derecho", "del Ed??n 4"],
//             ["11/12","25/46","Yuxtapuesta", "de las Ideas"],
//             ["11/12","25/46","Angulo Izquierdo", "de la Educaci??n 2"],
            
            
            
            
//             ["10/15","25/46","Angulo Derecho", "del Recipiente de Amor 4"],
//             ["10/15","18/17","Yuxtapuesta", "del Comportamiento"],
//             ["10/15","18/17","Angulo Izquierdo", "de la Prevenci??n 2"],
            
//             ["58/52","18/17","Angulo Derecho", "Del servicio 4"],
//             ["58/52","48/21","Yuxtapuesta", "de la Vitalidad"],
//             ["58/52","48/21","Angulo Izquierdo", "de las Exigencias 2"],
            
//             ["38/39","48/21","Angulo Derecho", "de la Tensi??n 4"],
//             ["38/39","51/57","Yuxtapuesta", "de la Oposici??n "],
//             ["38/39", "51/57","Angulo Izquierdo", "de la Individualidad 2"],
            
//             ["54/53","51/57","Angulo Derecho", "de la Penetraci??n 4"],
//             ["54/53","32/42","Yuxtapuesta", "de la Ambici??n"],
//             ["54/53","32/42","Angulo Izquierdo", "de los Ciclos 2"],
            
//             ["61/62","32/42","Angulo Derecho", "del May 4 "],
//             ["61/62","50/3","Yuxtapuesta", "del Pensamiento "],
//             ["61/62" ,"50/3","Angulo Izquierdo", "del Oscurantismo 2"],
            
//             ["60/56","50/3","Angulo Derecho", "de las Ley 4"],
//             ["60/56","27/28","Yuxtapuesta", "de la Limitaci??n"],
//             ["60/56","27/28","Angulo Izquierdo", "de la Distracci??n 2"],
            
//             ["41/31","27/28","Angulo Derecho", "de lo Inesperado 4"],
//             ["41/31","24/44","Yuxtapuesta", "de la Fantas??a"],
//             ["41/31","24/44","Angulo Izquierdo", "del Alfa 2"],
            
//             ["19/33","24/44","Angulo Derecho", "de los Cuatro Caminos 4"],
//             ["19/33","2/1","Yuxtapuesta", "de la Necesidad"],
//             ["19/33","24/44","Angulo Izquierdo", "del Refinamiento "]
            
//             ]



// const canales = {
//     "1-8": "  INSPIRACI??N: UN DISE??O CREATIVO DEL MODELO DE ROLES",
//     "2-14": "  DIRECCI??N : UN DISE??O DE RESPONSABILIDAD",
//     "3-60": " INNOVACI??N: UN DISE??O DE TRANSICION DE LO VIEJO A LO NUEVO",
//     "4-63": " LOGICA: UN DISE??O UN DISE??O QUE DUDA Y CUESTIONA E INDAGA",
//     "5-15": " RITMO: UN DISE??O QUE MARCA EL RITMO DE LOS PROCESOS",
//     "6-59": " RESOLUCI??N: UN DISE??O QUE INICIA LOS PROYECTOS",
//     "7-31": " LIDERAZGO: LIDESRES POR INVITACI??N DEL EQUIPO ",
//     "9-52": " CONCENTRACION: APORTAN DETERMINACION Y FOCO EN LO QUE HACEN",
//     "10-20": " AUTENTIZIDAD: EXPRESIVOS Y CLAROS EN LO QUE EXPRESAN",
//     "10-34": " EXPLORACI??N: IDEAS Y ACCIONES MUY DECIDIDAS",
//     "10-57": " SUPERVIVENCIA: INTUICION ESPONTANEA",
//     "11-56": " CURIOSIDAD: CREAN PROCESOS PARA ESTIMULAR AL EQUIPO",
//     "12-22": "APERTURA: CREAN Y TRASMITEN LA PASION AL EQUIPO",
//     "13-33": " EXPERIENCIA: TRASMITEN SU CONOCIMIENTO EXPERIMENTADO ",
//     "16-48": " TALENTO: MAESTRIA A TRAVES DE LA EXPERIMENTACION Y LA REPETICI??N CONTINUA",
//     "17-62": " CONCENTRACI??N: DON DE ENFOCARSE EN LO QUE HACEN",
//     "18-58": " JUICIO: JUZGAN, CORRIGEN, MEJORAN PATRONES",
//     "19-49": " SINTESIS:CAPACIDAD DE TRABAJO BASADOS EN CONFIANZA Y ENTREGA",
//     "20-34": " CARISMA: INFLUENCIA EN TRASMITIR A GRUPO QUE LAS IDEAS SE REALIZAN",
//     "20-57": " CHISPA CEREBRAL: AGUDEZA INTUITIVA PARA VER LAS COSAS LOS PRIMEROS",
//     "21-45": " MATERIALISMO: FUERZA DE VOLUNTAD PAR HACER NEGOCIOS ",
//     "23-43": " ESTRUCTURAR: APORTAN CONCEPTOS INNOVADORES Y EFICIENTES ",
//     "24-61": " CONCIENCIA: NSPIRADORES DEL GRUPO",
//     "25-51": " INICIACI??N: COMPETITIVOS DESEO DE SER LOS PRIMEROS",
//     "26-44": " CONVICCI??N: VENDEN Y TRASMITEN EL CAPITALISMO",
//     "27-58": " PRESERVACI??N: CUSTODIAN, CUIDAN Y PROTEGEN AL GRUPO ",
//     "28-38": " LUCHA: BUSCAN UN RETO POR EL QUE LUCHAR EMPUJANDO AL GRUPO",
//     "29-46": " DESCUBRIMIENTO: TRIUNFAN DONDE OTROS FRACASAN SERENDIPIA ",
//     "30-41": " RECONOCIMIENTO: EN BUSCA DE GRANDES ESPERIENCIAS ",
//     "32-54": " TRANSFORMACI??N: TRASFORMAN EL TRABAJO EN EXITO MATERIAL",
//     "34-57": " PODER: SUPERVIVIENTES ATENTOS A TODAS LAS CIRCUSTANCIAS",
//     "35-36": " TRANSITORIEDAD: EXPERIENCIAS Y APRENDIZAJE PROBANDO TODO LO POSIBLE ",
//     "37-40": " COMUNIDAD: BUSQUEDA DE ACUERDOS JUSTOS Y DE CONFIANZA",
//     "39-55": " EMOCIONES: CAMBIOSDE ESTADO DE ANIMO SIN PREVIO AVISO",
//     "42-53": " MADURACI??N: FACILIDAD POR COMPLETAR LOS PROCESOS",
//     "47-64": " ABSTRACCI??N: TIENEN PERSPECTIVA DEL PASADO PARA AFRONTAR LA REALIDAD",
//     };

// const puertas = {
//     1:  "IMPLEMENTACION",
// 2:  "VISI??N",
//   3:  "INNOVACI??N", 
//   4:  "RESPUESTAS" ,
//   5:  "CULTURA" ,
//   6:  "ENTORNO" ,
//   7:  "PLANIFICACI??N", 
//   8:  "RELAC.PUBLICAS", 
//   9:  "ENFOQUE" ,
// 10:  "POTENCIAL" ,
//  11: "IDEAS" ,
//  12: "CAUTELA", 
//  13: "CONTABILIDAD", 
//  14: "FINANZAS" ,
//  15: "FIABILIDAD", 
//  16: "HABILIDADES", 
//  17: "OPINIONES" ,
//  18: "CORRECCI??N" ,
//  19: "UNI??N" ,
//  20: "MOMEN. PRESENTE", 
//  21: "IMPLEMENACI??N" ,
//  22: "ESCUCHAR" ,
//  23: "ASIMILACI??N", 
//  24: "RACIONALIDAD", 
//  25: "CAPACIDAD " ,
//  26: "ASTUCIA" ,
//  27: "RECONOCIMIENTO" ,
//  28: "ASUMIR RIESGOS" ,
//  29: "COMPROMISO" ,
//  30: "DESEOS" ,
//  31: "ADMINISTRACI??N", 
//  32: "EXITO" ,
//  33: "SUPERVISI??N", 
//  34: "PODER" ,
//  35: "PROGRESO", 
//  36: "EXPLORACI??N", 
//  37: "ACUERDOS" ,
//  38: "LUCHA" ,
//  39: "CREATIVIDAD", 
//  40: "AMOR AL TRABAJO", 
//  41: "IMAGINACI??N" ,
//  42: "CRECIMIENTO", 
//  43: "RESOLUCI??N" ,
//  44: "RELAC. HUMANAS", 
//  45: "EDUCACI??N" ,
//  46: "COORDINACI??N", 
//  47: "COMPRENSI??N" ,
//  48: "TALENO" ,
//  49: "PRINCIPIOS", 
//  50: "SEGURIDAD" ,
//  51: "COMPETICI??N" ,
//  52: "CONCENTRACI??N", 
//  53: "INICIACI??N" ,
//  54: "AMBICI??N" ,
//  55: "MUTACI??N" ,
//  56: "ESTIMULACI??N", 
//  57: "INTUICI??N" ,
//  58: "VITALIDAD" ,
//  59: "INVESTIGACI??N", 
//  60: "ESTRUCTURA" ,
//  61: "CONOCIMIENTO" ,
//  62: "MINUCIOSIDAD" ,
//  63: "CUESTIONAR" ,
//  64: "ORDEN"
// }

// const autorities = [{
//     ??????????????????????????: {
//         codename: 'plexo',
//         desc: 'PLEXO: DESDE TUS EMOCIONES INTERNAS' 
//     }},
//     {????????????????????: {
//         codename: 'sacral',
//         desc: 'SACRAL: DESDE TU VIBRACI??N INTERIOR'
//     }},
//     {????????????????????????: {
//         codename: 'bazo',
//         desc: 'BAZO: DESDE TU INSTINTO E INTUICION'
//     }},
//     {????????????????????????????????????: {
//         codename: 'corazon',
//         desc: 'CORAZ??N: DESDE TU VOZ INTERIOR'
//     }},
//     {????????????????????????????????: {
//         codename: 'g',
//         desc: 'DESDE TU AMOR Y DIRECCI??N'
//     }},
//     {????????????????????: {
//         codename: 'entorno',
//         desc: 'DESDE EL ENTORNO'
//     }},
//     {????????????: {
//         codename: 'lunar',
//         desc: 'ANALIZANDO TU CICLO LUNAR'
//     }}
// ];


// const typesDesc = [ {??????????????????: {
//     desc: 'Persona con energ??a. Fuerza para realizar y poner en marcha actividades. Sabes responder a la vida y has de despertar a la propuesta correcta que se te pondr?? delante',
//     corr: 'SATISFACCI??N',
//     incorr: 'FRUSTRACI??N',
//     estrategia: 'RESPONDIENDO A LOS EST??MULOS EXTERNOS',
//     porcentaje: '37%',
//     definicionUno: 'SACRAL DEFINIDO',
//     definicionDos: 'GARGANTA  DEFINIDA O NO',
//     conectado: 'GARGANTA NO CONECTADA A MOTORES ACTIVOS',
//     aura: 'Abierta, envolvente, acogedora, magn??tica e impersonal',
//     modo: 'Energ??tico -  De Espera',
//     rol: 'Construir ??? Hacer ',
//     temaGeneral: 'Responder a la Vida',
//     busqueda: 'Satisfacci??n',
//     dilemaMental: 'Conocerse a s?? mismo',
//     psigologia: '??Qu?? puedo hacer solo?',
//     preguntaInterna: '??Me preguntar??n ??? Conf??o en la vida?',
//     noSer: 'Frustraci??n',
//     lista: ['Portadores de la vitalidad, la energ??a, el esfuerzo',
//         'Trabajan haciendo lo que se necesita hacer',
//         	'Pasan r??pidamente de una cosa a otra',
//         	'Normalmente est??n ocupad??simos con los dem??s, desarrollando su gran capacidad de entrega y colaboraci??n',
//         	'Est??n dise??ados para ser maestros, expertos en los trabajos que realicen' ,
//         	'Dise??ados para avanzar despacio pasando de un nivel a otro poco a poco',
//         	'El generador es una fuente de energ??a leal y dedicada que disfruta de lo que est?? haciendo y si se respetan sus condiciones, se puede usar su energ??a correctamente',
//         	'Si el manifestador es la punta del misil que se hace camino, el generador es la carga explosiva',
//         	'El generador necesita su tiempo para seguir su proceso, no debemos presionarles, ellos terminar??n por ser unos expertos en su funci??n',
//         	'Ellos no proponen como los manifestadores, ellos deben responder',
//         	'Es como si dentro tuvieran un consejero que aprueba o rechaza las cosas (su Sacral)'
//         ],
//     estrategiasCompleto: estrategiasGenerador,
//     cuantas: '2,884,236,073'


//  }},
// {????????????????????????????????????????????????: {
//     desc: 'Persona con energ??a. Fuerza para realizar y poner en marcha actividades. Sabes responder a la vida y has de despertar a la propuesta correcta que se te pondr?? delante',
//     corr: 'SATISFACCI??N Y PAZ',
//     incorr: 'FRUSTRACI??N Y RABIA',
//     estrategia: 'CLARIDAD PARA RESPONDER AL EST??MULO EXTERNO',
//     porcentaje: '33%',
//     definicionUno: 'SACRAL DEFINIDO',
//     definicionDos: 'GARGANTA DEFINIDA',
//     conectado: 'GARGANTA CONECTADA A MOTORES ACTIVOS',
//     aura: 'Abierta,envolvente, acogedora, magn??tica + energ??a del manifestador',
//     modo: 'Energ??tico -  De Espera',
//     rol: 'Construir ??? Hacer ',
//     temaGeneral: 'Responder a la Vida',
//     busqueda: 'Satisfacci??n -Paz',
//     dilemaMental: 'Conocerse a s?? mismo',
//     psigologia: '??Qu?? puedo hacer solo?',
//     preguntaInterna: '??Me preguntar??n ???Podr?? avanzar?',
//     noSer: 'Frustraci??n ???Rabia???',
//     lista: [
//         'Pistoleros verbales. Trasmiten mucha energ??a, es m??s vivaz, tiene la capacidad de manifestar',
//         'Es el puente entre el manifestador (individualista y dominante) y los generadores puros (capacidad de entrega y servicio)',
//         'Individuos rebeldes y menos gregarios que un generador puro',
//         'Su ??nica verdad es la respuesta en el instante presente',
//         'Tremenda eficacia, productividad y acci??n, R??pidos captando las cosas debido a su potencial metam??rfico manifestante',
//         'Un especialista preparado para desarrollar a la perfecci??n su labor',
//         'La diferencia entre un G.M y unGenerador puro, es su r??pida capacidad de respuesta, de cambio al encarar nuevas situaciones',
//         'Pasan r??pidamente de una cosa a otra',
//         'Es como si dentro tuvieran un consejero que aprueba o rechaza las cosas(su Sacral)'
//     ],
//     estrategiasCompleto: estrategiasGeneradorManifestante,
//     cuantas: '2,572,426,768'

// }},
// {????????????????????: {
//     desc: 'Persona de acci??n con energ??a. Inician sin necesitar a nadie. Saben pasar todas las etapas hasta concretar su idea',
//     corr: 'PAZ',
//     incorr: 'RABIA',
//     estrategia: 'INFORMANDO ANTES DE ACTUAR',
//     porcentaje: '8%',
//     definicionUno: 'SACRAL SIN DEFINIR',
//     definicionDos: 'GARGANTA DEFINIDA',
//     conectado: 'GARGANTA CONECTADA A MOTORES ACTIVOS',
//     aura: 'Excluyente ??? cerrada ??? auto-protectora',
//     modo: 'De acci??n - Energ??tico ',
//     rol: 'Iniciar ',
//     temaGeneral: 'Evitar la rabia para encontrar la paz',
//     busqueda: 'Paz - Calma',
//     dilemaMental: 'Conocer el impacto en los dem??s',
//     psigologia: '??Qu?? puedo hacer que sea nuevo?',
//     preguntaInterna: '??Me responder??n afirmativamente?',
//     noSer: 'Rabia - Ira',
//     lista: [
//         'Desaf??a e inicia',
//         'No piden permiso para actuar, toman la iniciativa sin pedir ayuda ni consejo',
//         'Son rebeldes e individualistas',
//         'Cuando algo le excita lo convierte en acci??n.',
//         'No buscan ayuda, gu??a, ni aceptaci??n o aprobaci??n de los dem??s en los temas que realiza',
//         'Nunca muestran su dolor',
//         'Producen desconfianza en la gente.',
//         'Personas de ACCI??N, que saben superar todas las fases de un proceso hasta el final. ',
//         'No son jugadores de equipo, salvo que sea el l??der',
//         'Quieren libertad de movimiento',
//         'No desean ser controlados, dirigidos ni corregidos',
//         'Se apoyan en su propia energ??a para todo y el hecho de haber estado bajo la autoridad de sus padres, les ha hecho crear estrategias solapadas, por eso producen desconfianza en la gente.'
//     ],
//     estrategiasCompleto: estrategiasManifestador,
//     cuantas: '1,650,021,821'
//     }},
// {????????????????: {
//     desc: 'Persona no energ??tica. Tienes la fuerza para guiar la energ??a de los dem??s. Buenos mediadores y organizadores natos. Ven lo que los dem??s no aprecian inicialmente',
//     corr: '??XITO',
//     incorr: 'AMARGURA',
//     estrategia: 'ESPERADO A SER RECONOCIDO E INVITADO A ACTUAR',
//     porcentaje: '21%',
//     definicionUno: 'SACRAL SIN DEFINIR',
//     definicionDos: ' ',
//     conectado: 'NING??N CENTRO MOTOR CONECTADO GARGANTA',
//     aura: 'Penetrante ??? Enfocada y personalizada',
//     modo: 'No energ??tico ??? De espera  ',
//     rol: 'Guiar - Mediar  ',
//     temaGeneral: 'Dise??ado para guiar a los dem??s',
//     busqueda: '??xito ??? El ??xito del grupo',
//     dilemaMental: 'Conocer al otro',
//     psigologia: '??Qu?? podemos hacer juntos?',
//     preguntaInterna: '??Me reconocer??n?',
//     noSer: 'Amargura - Resentimiento',
//     lista: [
//         'No han venido al mundo a trabajar, ni a manifestar.',
// 	'Responde a las necesidades de los otros.',
// 	'Grandes consejeros y l??deres. ',
// 	'Saben canalizar la energ??a de los dem??s.',
// 	'Su poder reside en guiar a los energ??ticos.',
// 	'Saben lo que quieren, pero no tienen idea de c??mo hacerlo.',
// 	'Sienten que se les exigen que sean diferentes de lo que son',
// 	'El reconocimiento que reciben ha de llegarles hasta cada uno de los aspectos que tienen definidos en su dise??o y con este reconocimiento activar sus conocimientos, su arte, ciencia, oficio',
// 	'El modo de espera, no es no hacer nada, es reconocer que viven su vida esperando la oportunidad de hacer un cambio, un avance en algo que les importa',
// 	'Como un cazador, est??n acechando, esperando el momento oportuno.',
// 	'Su espera, requiere paciencia, reconocimiento y consciencia para darse cuenta del momento preciso para actuar',
// 	'Han de saber esperar pacientemente a que los dem??s les reconozcan'
//     ],
//     estrategiasCompleto: estrategiasProyector,
//     cuantas: '628,579,741'
//     }},
// {??????????????????: {
//     desc: 'Persona con gran conocimiento y sabidur??a. Son el espejo que refleja la realidad social. Ecu??nimes y justos',
//     corr: 'SORPRESA',
//     incorr: 'DESILUSI??N',
//     estrategia: 'ESPERANDO PASAR EL CICLO LUNAR',
//     porcentaje: '1%',
//     definicionUno: 'NING??N CENTRO DEFINIDO',
//     definicionDos: ' ',
//     conectado: ' ',
//     aura: 'Absorbente y reflectante',
//     modo: 'Esperar un ciclo lunar',
//     rol: 'Observador objetivo, sabio, juez ',
//     temaGeneral: 'Dise??ado para la justicia social',
//     busqueda: 'Sorprenderse',
//     dilemaMental: 'Conocer a los dem??s, a la Humanidad',
//     psigologia: '??C??mo puedo ser ??til a m?? comunidad?',
//     preguntaInterna: '??Me ver??n, puedo ser yo mismo?',
//     noSer: 'Desilusi??n',
//     lista: [
//         	'Personas que reflejan el estado de los dem??s', 
// 	'Los primeros que ven el problema o el error',
// 	'Absorben y captan todo tipo de informaci??n, influencias, vibraciones a su alrededor',
// 	'Abiertos a toda influencia de su entorno',
// 	'Personas muy inquietas, ansiosas, no encuentran su lugar, su ocupaci??n',
// 	'Son el reflejo de todos los dem??s',
// 	'Act??an como bar??metros sociales ',
// 	'Desilusi??n de no saber muy bien donde se encuentran y se sienten desubicados en este mundo, porque tienen tantos est??mulos que no saben por d??nde cogerlos, ven que todo est?? cambiando, que nada es estable.',
// 	'Su frecuencia est?? sujeta al ritmo de la luna, durante 28 d??as acaban experimentado todos los tipos de dise??os posibles excepto el suyo propio',
// 	'Si su entorno es favorable y positivo, estar?? bien, si es al contrario, absorber??n todo tipo de problemas y negatividad',
// 	'Se pueden dar s??ndromes de Down y autismo o comportamientos muy dif??ciles, noches en p??nico y toda clase de temores y fobias a estar solos.'

//     ],
//     estrategiasCompleto: estrategiasReflector,
//     cuantas: '78,572,467'
//     }}
// ];

// const perfiles = {
//         1: 'Investigator',
//         2: 'Ermita??o',
//         3: 'M??rtir',
//         4: 'Oportunista',
//         5: 'Hereje',
//         6: 'Modelo de roles'
//     }; 

// export class ResultadoCompleto extends Component {
//     constructor() {
//         super();
//         this.state = {
//             date: '',
//             tipo: '',
//             typeDescription: '',
//             corr: '',
//             incorr: '',
//             estrategia: '',
//             autoridad: '',
//             perfilUno: '',
//             perfilDos: '',
//             perfilCompleto: '',
//             cruzstr: '',
//             cruzUno: '',
//             cruzDos: '',
//             canalesCompleto: [],
//             definicion: '',
//             svgDownloaded: false,
//             allPuertas: [],
//             updatedtwo: true,
//             lista: [],
//             estrategiasCompleto: [],
//             autoridadCompleto: [],
//             allCentros: [],
//             canales: [],
//             cruzCompleto: [{cruz: '', img: '', texto:[]}]
//         }
//     this.getCurrDate = this.getCurrDate.bind(this);
//     this.translateHelper = this.translateHelper.bind(this);
//     this.addDescription = this.addDescription.bind(this);
//     this.convertToPdf = this.convertToPdf.bind(this);
//     this.cruzWorker = this.cruzWorker.bind(this);
//     this.sendMail = this.sendMail.bind(this);
//     this.svgRef = React.createRef();
//     this.test = this.test.bind(this);
//     }


//     test() {
//         console.log(this.state.canales);
    
//         console.log(this.state.allPuertas);
//     }

//     sendMail() {
//         axios.post(`${window.location.origin}/sendmail`,{
//             params: {
//                 name: `${this.state.firstName}${this.state.lastName}`,
//                 mail: this.state.email
//             }
//         }).catch(err => console.log(err));
//     }
 
//     cruzWorker() {
//         let cruzAngulo = this.state.cruzIncarnacion.split(' ')[0];
//         let cruzNombre = this.state.cruzIncarnacion.split(' ')[1];

//         if (cruzAngulo == '??????????????????????????') {
//             cruzAngulo = 'Angulo Derecho'
//         } else if (cruzAngulo == '????????????????????????') {
//             cruzAngulo = 'Angulo Izquierdo'
//         } else {
//             cruzAngulo = 'Yuxtapuesta'
//         }
     
//         if (cruzAngulo == 'Angulo Derecho') {
            
//             angulos.forEach(e => {
                
//                 let personone = this.state.cruzadd.person.split('/')[0];
//                 let persontwo = this.state.cruzadd.person.split('/')[1];

//                 let designone = this.state.cruzadd.design.split('/')[0];
//                 let designtwo = this.state.cruzadd.design.split('/')[1];
                
                
//                 if (e[2] == 'Angulo Derecho' && e[0].includes(personone) && e[0].includes(persontwo) && e[1].includes(designone) && e[1].includes(designtwo)) { //
//                    console.log('!!!!!!!');
//                     cruzNombre = e[3]
                   
//                 } 
                
//             })
//         } else {
//             angulos.forEach(e => {
//                 let personone = this.state.cruzadd.person.split('/')[0];
//                 let persontwo = this.state.cruzadd.person.split('/')[1];

//                 let designone = this.state.cruzadd.design.split('/')[0];
//                 let designtwo = this.state.cruzadd.design.split('/')[1];
//              if (e[0].includes(personone) && e[0].includes(persontwo) && e[1].includes(designone) && e[1].includes(designtwo)) { //["51/57","61/62","Angulo Izquierdo", "Cruz del Clar??n 1"],
//                 console.log('yes')
//                 cruzNombre = e[3];
                
//             }
//         });
//         }
//         if (this.state.cruzstr == '') {
//             this.setState({
//                 cruzstr: `Cruz ${cruzAngulo} ${cruzNombre}`
//             })
//         }
        
//     }


//     addDescription(){
//         this.setState({
//             descadded: true
//         })

        
//         typesDesc.forEach(e => {
//             let typename = Object.keys(e)[0];
//             if (typename === '????????????????????????????????????????????????') {
//                 typename = '?????????????????????????????? ??????????????????';      
//             }
//             if (typename == this.state.tipo) {
//                 console.log('TISPO');
//                 console.log(this.state.tipo)
//                 let temp =  Object.values(e)[0];
//                 console.log(temp['modo']);
//                 this.setState({
//                     typeDescription: temp['desc'],
//                     corr:  temp['corr'],
//                     incorr:  temp['incorr'],
//                     estrategia:  temp['estrategia'],
//                     porcentaje: temp['porcentaje'],
//                     definicionUno: temp['definicionUno'],
//                     definicionDos: temp['definicionDos'],
//                     conectado: temp['conectado'],
//                     aura: temp['aura'],
//                     modo: temp['modo'],
//                     rol: temp['rol'],
//                     temaGeneral: temp['temaGeneral'],
//                     busqueda: temp['busqueda'],
//                     dilemaMental: temp['dilemaMental'],
//                     psigologia: temp['psigologia'],
//                     preguntaInterna: temp['preguntaInterna'],
//                     noSer: temp['noSer'],
//                     lista: temp['lista'],
//                     estrategiasCompleto: temp['estrategiasCompleto'],
//                     cuantas: temp['cuantas']
//                 })
//             }
//         });
    


//         autorities.forEach(e => {
//             let authorityName = Object.keys(e)[0];
//             console.log('autoridad ' +this.state.autoridad);

//             if (this.state.autoridad == '?????? ?????????????????????? ????????????????????') {
//                 this.setState({
//                     autoridad: 'Ninguna'
//                 })
//             }

//             if (authorityName == this.state.autoridad) {
//                 let temp =  Object.values(e)[0];
//                 console.log('temp');
//                 console.log(temp.codename);
//                 let autoridadCompleto, autoridadImg, autoridadTexto;
//                 switch(temp.codename) {
//                     case 'plexo':
//                         autoridadCompleto = plexoCompleto;
//                         autoridadImg = sacralimg;
//                         autoridadTexto = '70% de la poblaci??n tiene el Sacral Activado'
//                         break;
//                     case 'bazo':
//                         autoridadCompleto = bazoCompleto;
//                         autoridadImg = bazoimg;
//                         autoridadTexto = ' '
//                         break;
//                     case 'corazon':
//                         autoridadCompleto = egoCompleto;
//                         autoridadImg = egoimg;
//                         autoridadTexto = '30% de la poblaci??n tiene el centro coraz??n activado';
//                         break;
//                     case 'g':
//                         autoridadCompleto = gCompleto;
//                         autoridadImg = gimg;
//                         autoridadTexto = ' ';
//                         break;
//                     case 'lunar':
//                         autoridadCompleto = lunarCompleto;
//                         autoridadImg = lunarimg;
//                         autoridadTexto = ' ';
//                         break;
//                     case 'entorno':
//                         autoridadCompleto = mentalCompleto;
//                         autoridadImg = mentalimg;
//                         autoridadTexto = 'ENTORNO';
//                         break;
//                     case 'sacral':
//                         autoridadCompleto = sacralCompleto;
//                         autoridadImg = sacralimg;
//                         autoridadTexto = '70% de la poblaci??n tiene el Sacral Activado';
//                         break;   
                    
//                 }
//                 this.setState({
//                     autoridad: temp['desc'],
//                     autoridadCompleto,
//                     autoridadImg,
//                     autoridadTexto
//                 });
                
//             }
//         });

//         let puno, pdos;

//         Object.keys(perfiles).forEach(e =>{
//             if (e == this.state.perfilUno) {
//                 puno = perfiles[e]
//             }
//         })
//         Object.keys(perfiles).forEach(e =>{
//             if (e == this.state.perfilDos) {
//                 pdos = perfiles[e];
//             }
//         });
//         if (!this.state.perfilCompleto) {
//        this.setState({
//             perfilCompleto: `${this.state.perfilUno}/${this.state.perfilDos} - ${puno}/${pdos}`
//         })};

//        let a = this.state.cruzUno[0] + ' -- ' + puertas[this.state.cruzUno[0]];
//        let b = this.state.cruzUno[1] + ' -- ' + puertas[this.state.cruzUno[1]];
//        let c = this.state.cruzDos[0] + ' -- ' + puertas[this.state.cruzDos[0]];
//        let d = this.state.cruzDos[1] + ' -- ' + puertas[this.state.cruzDos[1]];
//        if (/^\d+$/.test(this.state.cruzUno[0]) ){ 
//        this.setState({
//             cruzUno: [a,b],
//             cruzDos: [c,d]
//         })}

//         let canalesKeys = Object.keys(canales);
//         let canalVals = Object.values(canales);
//         let cddd = [];
//         this.state.canales.forEach(e => {
//            let i = canalesKeys.indexOf(e); 
//            let t = e + ' ' + canalVals[i]; 
//            cddd.push(t);
//         });

        
//         if (this.state.canalesCompleto.length == 0) {
//             this.setState({
//                 canalesCompleto: cddd
//             })
//         }
        
//        if (/[??-??]/.test(this.state.definicion)) {
//            let def;
//            switch(this.state.definicion) {
//                case '??????????????????':
//                    def = 'Simple';
//                    break;
//                 case '??????????????':
//                     def = 'Doble';
//                     break;
//                 case '??????????????':
//                     def = 'Triple';
//                     break;
//                 case '????????????????????':
//                     def='quadruple';
//                     break;
//                 default:
//                     def='Ninguna';
//                     break;
//            }
//            this.setState({
//                definicion: def
//            })
//        }
        
       
//     }

//     translateHelper() {
//         let type = this.state.tipo; 
//         switch(type) {
//             case '????????????????':
//                 type = 'Proyector';
//                 break;
//             case '????????????????????':
//                 type = 'Manifestador';
//                 break;
//             case '??????????????????':
//                 type = 'Generador';
//                 break;
//             case '?????????????????????????????? ??????????????????':
//                 type = 'Generador Manifestante';
//                 break;
//             case '??????????????????':
//                 type = 'Reflector';
//                 break;        
//         }
//         if (this.state.sexo === 'female' && type !== 'Generador Manifestante') {
//             type = type + 'a'
//         }
//         else if (this.state.sexo === 'female' && type === 'Generador Manifestante') {
//             type = 'Generadora Manifestante'
//         }
//         this.setState({
//             tipo: type
//         })
//     }


//     getCurrDate() {
//         const weekDays = ['Domingo','Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
//         const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
//         let date = new Date(); 
//         let weekDay = weekDays[date.getDay()];
//         let day = date.getDate();
//         let month = months[date.getMonth()];
//         let year = date.getFullYear();
//         this.setState({
//             date: `${weekDay}, ${day} de ${month} de ${year}`
//         })
//     }

   
     
   

//     convertToPdf() {
//         console.log(this.state.bodygraph);
//         const name = `${this.state.firstName} ${this.state.lastName}`
//         const fecha =  this.state.fecha;
//         const currdate = this.state.date;
//         const hora = this.state.hora;
//         const lugar = this.state.lugar;
//         const tipo=  this.state.tipo;
//         const tipodesc = this.state.typeDescription;
//         const corr = this.state.corr;
//         const incorr = this.state.incorr;
//         const estrategia = this.state.estrategia;
//         const autoridad = this.state.autoridad;
//         const perfilUno = this.state.perfilUno;
//         const perfilDos = this.state.perfilDos;
//         const perfilDescripcion = this.state.perfilCompleto;
//         const definicion = this.state.definicion;
//         const puertasUno = this.state.cruzUno;
//         const puertasDos = this.state.cruzDos;
//         const cruzNombre = this.state.cruzstr;
//         const CanalUno = this.state.canalesCompleto[0] ? this.state.canalesCompleto[0] : '';
//         const CanalDos = this.state.canalesCompleto[1] ? this.state.canalesCompleto[1] : '';
//         const CanalTres = this.state.canalesCompleto[2] ? this.state.canalesCompleto[2] : '';
//         const CanalCuatro = this.state.canalesCompleto[3] ? this.state.canalesCompleto[3] : '';
//         const CanalCinco = this.state.canalesCompleto[4] ? this.state.canalesCompleto[4] : '';
//         const CanalSeis = this.state.canalesCompleto[5] ? this.state.canalesCompleto[5] : '';
//         const CanalSiete = this.state.canalesCompleto[6] ? this.state.canalesCompleto[6] : '';
//         const CanalOcho = this.state.canalesCompleto[7] ? this.state.canalesCompleto[7] : '';
//         const cabeza = this.state.cabezaCentro;
//         const ajna = this.state.ajnaCentro;
//         const garganta = this.state.gargantaCentro;
//         const gi = this.state.giCentro;
//         const corazon = this.state.corazonCentro;
//         const plexosolar = this.state.plexosolarCentro;
//         const sacral = this.state.sacralCentro;
//         const bazo = this.state.bazoCentro;
//         const raiz = this.state.raizCentro;
//         const bodygraph = this.state.bodygraph;
//         const TipoUpperCase = this.state.tipo.toUpperCase();
//         const TipoPorcentaje = this.state.porcentaje;
//         const DefinidoUno = this.state.definicionUno;
//         const DefinidoDos = this.state.definicionDos;
//         const DefinicionUnoImg = this.state.tipo != 'Reflector' ? 'https://i.imgur.com/kPVHTHX.png':  'https://i.imgur.com/1LSujeS.png';
//         const DefinicionDosImg = (this.state.tipo != 'Reflector' || this.state.tipo != 'Proyector') ? 'https://i.imgur.com/RJPA0u5.png': '';
//         const Conectado = this.state.conectado;
//         const Aura = this.state.aura;
//         const TipoImg = this.state.tipo == 'Generador Manifestante' ? 'https://i.imgur.com/bqr5Hy7.png' : this.state.tipo == 'Generador' ? 'https://i.imgur.com/yy6eKfi.png' : this.state.tipo == 'Manifestador' ? 'https://i.imgur.com/sjXDssr.png' : this.state.tipo == 'Proyector' ? 'https://i.imgur.com/5CBhhqj.png': 'https://i.imgur.com/n62lXHx.jpg';
//         const Modo = this.state.modo;
//         const EstrategiaCompleto = this.state.estrategia;
//         const Rol = this.state.rol;
//         const Tema = this.state.temaGeneral;
//         const Busqueda = this.state.busqueda;
//         const Dilema = this.state.dilemaMental;
//         const Psicologia = this.state.psigologia;
//         const Pregunta = this.state.preguntaInterna;
//         const NoSer = this.state.noSer;
//         const TipoLineaUno = this.state.lista[0] ? this.state.lista[0] : '';
//         const TipoLineaDos = this.state.lista[1] ? this.state.lista[1] : '';
//         const TipoLineaTres = this.state.lista[2] ? this.state.lista[2] : '';
//         const TipoLineaCuatro = this.state.lista[3] ? this.state.lista[3] : '';
//         const TipoLineaCinco = this.state.lista[4] ? this.state.lista[4] : '';
//         const TipoLineaSeis = this.state.lista[5] ? this.state.lista[5] : '';
//         const TipoLineaSeite = this.state.lista[6] ? this.state.lista[6] : '';
//         const TipoLineaOcho = this.state.lista[7] ? this.state.lista[7] : '';
//         const TipoLineaNueve = this.state.lista[8] ? this.state.lista[8] : '';
//         const TipoLineaDiez = this.state.lista[9] ? this.state.lista[9] : '';
//         const TipoLineaOnce = this.state.lista[10] ? this.state.lista[10] : '';
//         const TipoUpperCaseDos =  tipo.toUpperCase();
//         const TipoImgDos = this.state.tipo == 'Generador Manifestante' ? 'https://i.imgur.com/bqr5Hy7.png' : this.state.tipo == 'Generador' ? 'https://i.imgur.com/yy6eKfi.png' : this.state.tipo == 'Manifestador' ? 'https://i.imgur.com/sjXDssr.png' : this.state.tipo == 'Proyector' ? 'https://i.imgur.com/5CBhhqj.png': 'https://i.imgur.com/n62lXHx.jpg';
        
//         const Estrategia1 = this.state.estrategiasCompleto[0] ? this.state.estrategiasCompleto[0].join('') : '';
//         const Estrategia2 = this.state.estrategiasCompleto[1] ? this.state.estrategiasCompleto[1].join('') : '';
//         const Estrategia3 = this.state.estrategiasCompleto[2] ? this.state.estrategiasCompleto[2].join('') : '';
//         const Estrategia4 = this.state.estrategiasCompleto[3] ? this.state.estrategiasCompleto[3].join('') : '';
//         const Estrategia5 = this.state.estrategiasCompleto[4] ? this.state.estrategiasCompleto[4].join('') : '';
//         const Estrategia6 = this.state.estrategiasCompleto[5] ? this.state.estrategiasCompleto[5].join('') : '';
//         const Estrategia7 = this.state.estrategiasCompleto[6] ? this.state.estrategiasCompleto[6].join('') : '';
//         const Estrategia8 = this.state.estrategiasCompleto[7] ? this.state.estrategiasCompleto[7].join('') : '';
//         const Estrategia9 = this.state.estrategiasCompleto[8] ? this.state.estrategiasCompleto[8].join('') : '';
//         const Estrategia10 = this.state.estrategiasCompleto[9] ? this.state.estrategiasCompleto[9].join('') : '';
//         const Estrategia11 = this.state.estrategiasCompleto[10] ? this.state.estrategiasCompleto[10].join('') : '';
//         const Estrategia12 = this.state.estrategiasCompleto[11] ? this.state.estrategiasCompleto[11].join('') : '';
//         const Estrategia13 = this.state.estrategiasCompleto[12] ? this.state.estrategiasCompleto[12].join('') : '';
//         const Estrategia14 = this.state.estrategiasCompleto[13] ? this.state.estrategiasCompleto[13].join('') : '';
//         const Estrategia15 = this.state.estrategiasCompleto[14] ? this.state.estrategiasCompleto[14].join('') : '';
//         const Estrategia16 = this.state.estrategiasCompleto[15] ? this.state.estrategiasCompleto[15].join('') : '';
//         const Estrategia17 = this.state.estrategiasCompleto[16] ? this.state.estrategiasCompleto[16].join('') : '';
//         const Estrategia18 = this.state.estrategiasCompleto[17] ? this.state.estrategiasCompleto[17].join('') : '';
//         const Estrategia19 = this.state.estrategiasCompleto[18] ? this.state.estrategiasCompleto[18].join('') : '';
//         const Estrategia20 = this.state.estrategiasCompleto[19] ? this.state.estrategiasCompleto[19].join('') : '';
//         const Estrategia21 = this.state.estrategiasCompleto[20] ? this.state.estrategiasCompleto[20].join('') : '';
//         const Estrategia22 = this.state.estrategiasCompleto[21] ? this.state.estrategiasCompleto[21].join('') : '';
//         const Estrategia23 = this.state.estrategiasCompleto[22] ? this.state.estrategiasCompleto[22].join('') : '';
//         const Estrategia24 = this.state.estrategiasCompleto[23] ? this.state.estrategiasCompleto[23].join('') : '';
//         const Estrategia25 = this.state.estrategiasCompleto[24] ? this.state.estrategiasCompleto[24].join('') : '';
//         const Estrategia26 = this.state.estrategiasCompleto[25] ? this.state.estrategiasCompleto[25].join('') : '';
//         const Estrategia27 = this.state.estrategiasCompleto[26] ? this.state.estrategiasCompleto[26].join('') : '';
//         const Estrategia28 = this.state.estrategiasCompleto[27] ? this.state.estrategiasCompleto[27].join('') : '';
//         const Estrategia29 = this.state.estrategiasCompleto[28] ? this.state.estrategiasCompleto[28].join('') : '';
//         const Estrategia30 = this.state.estrategiasCompleto[29] ? this.state.estrategiasCompleto[29].join('') : '';
//         const Estrategia31 = this.state.estrategiasCompleto[30] ? this.state.estrategiasCompleto[30].join('') : '';
//         const Estrategia32 = this.state.estrategiasCompleto[31] ? this.state.estrategiasCompleto[31].join('') : '';
//         const Estrategia33 = this.state.estrategiasCompleto[32] ? this.state.estrategiasCompleto[32].join('') : '';
//         const Estrategia34 = this.state.estrategiasCompleto[33] ? this.state.estrategiasCompleto[33].join('') : '';
//         const Estrategia35 = this.state.estrategiasCompleto[34] ? this.state.estrategiasCompleto[34].join('') : '';
//         const Estrategia36 = this.state.estrategiasCompleto[35] ? this.state.estrategiasCompleto[35].join('') : '';
//         const Estrategia37 = this.state.estrategiasCompleto[36] ? this.state.estrategiasCompleto[36].join('') : '';
//         const Estrategia38 = this.state.estrategiasCompleto[37] ? this.state.estrategiasCompleto[37].join('') : '';
//         const Estrategia39 = this.state.estrategiasCompleto[38] ? this.state.estrategiasCompleto[38].join('') : '';
//         const Estrategia40 = this.state.estrategiasCompleto[39] ? this.state.estrategiasCompleto[39].join('') : '';
//         const Estrategia41 = this.state.estrategiasCompleto[40] ? this.state.estrategiasCompleto[40].join('') : '';
//         const Estrategia42 = this.state.estrategiasCompleto[41] ? this.state.estrategiasCompleto[41].join('') : '';
//         const Estrategia43 = this.state.estrategiasCompleto[42] ? this.state.estrategiasCompleto[42].join('') : '';
//         const Estrategia44 = this.state.estrategiasCompleto[43] ? this.state.estrategiasCompleto[43].join('') : '';
//         const Estrategia45 = this.state.estrategiasCompleto[44] ? this.state.estrategiasCompleto[44].join('') : '';
//         const Estrategia46 = this.state.estrategiasCompleto[45] ? this.state.estrategiasCompleto[45].join('') : '';
//         const Estrategia47 = this.state.estrategiasCompleto[46] ? this.state.estrategiasCompleto[46].join('') : '';
//         const Estrategia48 = this.state.estrategiasCompleto[47] ? this.state.estrategiasCompleto[47].join('') : '';
//         const Estrategia49 = this.state.estrategiasCompleto[48] ? this.state.estrategiasCompleto[48].join('') : '';
//         const Estrategia50 = this.state.estrategiasCompleto[49] ? this.state.estrategiasCompleto[49].join('') : '';
//         const Estrategia51 = this.state.estrategiasCompleto[50] ? this.state.estrategiasCompleto[50].join('') : '';

//         const Estrategia1num = this.state.estrategiasCompleto[0] ? '1' : '';
//         const Estrategia2num = this.state.estrategiasCompleto[1] ? '2' : '';
//         const Estrategia3num = this.state.estrategiasCompleto[2] ? '3' : '';
//         const Estrategia4num = this.state.estrategiasCompleto[3] ? '4' : '';
//         const Estrategia5num = this.state.estrategiasCompleto[4] ? '5' : '';
//         const Estrategia6num = this.state.estrategiasCompleto[5] ? '6' : '';
//         const Estrategia7num = this.state.estrategiasCompleto[6] ? '7' : '';
//         const Estrategia8num = this.state.estrategiasCompleto[7] ? '8' : '';
//         const Estrategia9num = this.state.estrategiasCompleto[8] ? '9' : '';
//         const Estrategia10num = this.state.estrategiasCompleto[9] ? '10' : '';
//         const Estrategia11num = this.state.estrategiasCompleto[10] ? '11' : '';
//         const Estrategia12num = this.state.estrategiasCompleto[11] ? '12' : '';
//         const Estrategia13num = this.state.estrategiasCompleto[12] ? '13' : '';
//         const Estrategia14num = this.state.estrategiasCompleto[13] ? '14' : '';
//         const Estrategia15num = this.state.estrategiasCompleto[14] ? '15' : '';
//         const Estrategia16num = this.state.estrategiasCompleto[15] ? '16' : '';
//         const Estrategia17num = this.state.estrategiasCompleto[16] ? '17' : '';
//         const Estrategia18num = this.state.estrategiasCompleto[17] ? '18' : '';
//         const Estrategia19num = this.state.estrategiasCompleto[18] ? '19' : '';
//         const Estrategia20num = this.state.estrategiasCompleto[19] ? '20' : '';
//         const Estrategia21num = this.state.estrategiasCompleto[20] ? '21' : '';
//         const Estrategia22num = this.state.estrategiasCompleto[21] ? '22' : '';
//         const Estrategia23num = this.state.estrategiasCompleto[22] ? '23' : '';
//         const Estrategia24num = this.state.estrategiasCompleto[23] ? '24' : '';
//         const Estrategia25num = this.state.estrategiasCompleto[24] ? '25' : '';
//         const Estrategia26num = this.state.estrategiasCompleto[25] ? '26' : '';
//         const Estrategia27num = this.state.estrategiasCompleto[26] ? '27' : '';
//         const Estrategia28num = this.state.estrategiasCompleto[27] ? '28' : '';
//         const Estrategia29num = this.state.estrategiasCompleto[28] ? '29' : '';
//         const Estrategia30num = this.state.estrategiasCompleto[29] ? '30' : '';
//         const Estrategia31num = this.state.estrategiasCompleto[30] ? '31' : '';
//         const Estrategia32num = this.state.estrategiasCompleto[31] ? '32' : '';
//         const Estrategia33num = this.state.estrategiasCompleto[32] ? '33' : '';
//         const Estrategia34num = this.state.estrategiasCompleto[33] ? '34' : '';
//         const Estrategia35num = this.state.estrategiasCompleto[34] ? '35' : '';
//         const Estrategia36num = this.state.estrategiasCompleto[35] ? '36' : '';
//         const Estrategia37num = this.state.estrategiasCompleto[36] ? '37' : '';
//         const Estrategia38num = this.state.estrategiasCompleto[37] ? '38' : '';
//         const Estrategia39num = this.state.estrategiasCompleto[38] ? '39' : '';
//         const Estrategia40num = this.state.estrategiasCompleto[39] ? '40' : '';
//         const Estrategia41num = this.state.estrategiasCompleto[40] ? '41' : '';
//         const Estrategia42num = this.state.estrategiasCompleto[41] ? '42' : '';
//         const Estrategia43num = this.state.estrategiasCompleto[42] ? '43' : '';
//         const Estrategia44num = this.state.estrategiasCompleto[43] ? '44' : '';
//         const Estrategia45num = this.state.estrategiasCompleto[44] ? '45' : '';
//         const Estrategia46num = this.state.estrategiasCompleto[45] ? '46' : '';
//         const Estrategia47num = this.state.estrategiasCompleto[46] ? '47' : '';
//         const Estrategia48num = this.state.estrategiasCompleto[47] ? '48' : '';
//         const Estrategia49num = this.state.estrategiasCompleto[48] ? '49' : '';
//         const Estrategia50num = this.state.estrategiasCompleto[49] ? '50' : '';
//         const Estrategia51num = this.state.estrategiasCompleto[50] ? '51' : '';

//         const AutoridadUpperCase = this.state.autoridad.split(':')[0].toUpperCase();
//         const AutoridadImg = this.state.autoridad.split(':')[0] == 'bazo' ? 'https://i.imgur.com/BL5179g.png' : this.state.autoridad.split(':')[0] == 'ego' ? 'https://i.imgur.com/NOfTJk4.png' : this.state.autoridad.split(':')[0] == 'gi' ? 'https://i.imgur.com/29SjwaN.png' : this.state.autoridad.split(':')[0] == 'lunar' ? 'https://i.imgur.com/XakZLwg.png' : this.state.autoridad.split(':')[0] == 'mental' ? 'https://i.imgur.com/PjiZjBv.png' : 'https://i.imgur.com/U61AOl9.png';
//         const AutoridadTexto = this.state.autoridadTexto;
//         const Autoridad1 = this.state.autoridadCompleto[0] ? this.state.autoridadCompleto[0].join('') : '';
//         const Autoridad2 = this.state.autoridadCompleto[1] ? this.state.autoridadCompleto[1].join('') : '';
//         const Autoridad3 = this.state.autoridadCompleto[2] ? this.state.autoridadCompleto[2].join('') : '';
//         const Autoridad4 = this.state.autoridadCompleto[3] ? this.state.autoridadCompleto[3].join('') : '';
//         const Autoridad5 = this.state.autoridadCompleto[4] ? this.state.autoridadCompleto[4].join('') : '';
//         const Autoridad6 = this.state.autoridadCompleto[5] ? this.state.autoridadCompleto[5].join('') : '';
//         const Autoridad7 = this.state.autoridadCompleto[6] ? this.state.autoridadCompleto[6].join('') : '';
//         const Autoridad8 = this.state.autoridadCompleto[7] ? this.state.autoridadCompleto[7].join('') : '';
//         const Autoridad9 = this.state.autoridadCompleto[8] ? this.state.autoridadCompleto[8].join('') : '';
//         const Autoridad10 = this.state.autoridadCompleto[9] ? this.state.autoridadCompleto[9].join('') : '';
//         const Autoridad11 = this.state.autoridadCompleto[10] ? this.state.autoridadCompleto[10].join('') : '';
//         const Autoridad12 = this.state.autoridadCompleto[11] ? this.state.autoridadCompleto[11].join('') : '';
//         const Autoridad13 = this.state.autoridadCompleto[12] ? this.state.autoridadCompleto[12].join('') : '';
//         const Autoridad14 = this.state.autoridadCompleto[13] ? this.state.autoridadCompleto[13].join('') : '';
//         const Autoridad15 = this.state.autoridadCompleto[14] ? this.state.autoridadCompleto[14].join('') : '';
//         const Autoridad16 = this.state.autoridadCompleto[15] ? this.state.autoridadCompleto[15].join('') : '';
//         const Autoridad17 = this.state.autoridadCompleto[16] ? this.state.autoridadCompleto[16].join('') : '';
//         const Autoridad18 = this.state.autoridadCompleto[17] ? this.state.autoridadCompleto[17].join('') : '';
//         const Autoridad19 = this.state.autoridadCompleto[18] ? this.state.autoridadCompleto[18].join('') : '';
//         const Autoridad20 = this.state.autoridadCompleto[19] ? this.state.autoridadCompleto[19].join('') : '';
//         const Autoridad21 = this.state.autoridadCompleto[20] ? this.state.autoridadCompleto[20].join('') : '';
//         const Autoridad22 = this.state.autoridadCompleto[21] ? this.state.autoridadCompleto[21].join('') : '';
//         const Autoridad23 = this.state.autoridadCompleto[22] ? this.state.autoridadCompleto[22].join('') : '';
//         const Autoridad24 = this.state.autoridadCompleto[23] ? this.state.autoridadCompleto[23].join('') : '';
//         const Autoridad25 = this.state.autoridadCompleto[24] ? this.state.autoridadCompleto[24].join('') : '';

//         const Autoridad1num = this.state.autoridadCompleto[0] ? '1' : '';
//         const Autoridad2num = this.state.autoridadCompleto[1] ? '2' : '';
//         const Autoridad3num = this.state.autoridadCompleto[2] ? '3' : '';
//         const Autoridad4num = this.state.autoridadCompleto[3] ? '4' : '';
//         const Autoridad5num = this.state.autoridadCompleto[4] ? '5' : '';
//         const Autoridad6num = this.state.autoridadCompleto[5] ? '6' : '';
//         const Autoridad7num = this.state.autoridadCompleto[6] ? '7' : '';
//         const Autoridad8num = this.state.autoridadCompleto[7] ? '8' : '';
//         const Autoridad9num = this.state.autoridadCompleto[8] ? '9' : '';
//         const Autoridad10num = this.state.autoridadCompleto[9] ? '10' : '';
//         const Autoridad11num = this.state.autoridadCompleto[10] ? '11' : '';
//         const Autoridad12num = this.state.autoridadCompleto[11] ? '12' : '';
//         const Autoridad13num = this.state.autoridadCompleto[12] ? '13' : '';
//         const Autoridad14num = this.state.autoridadCompleto[13] ? '14' : '';
//         const Autoridad15num = this.state.autoridadCompleto[14] ? '15' : '';
//         const Autoridad16num = this.state.autoridadCompleto[15] ? '16' : '';
//         const Autoridad17num = this.state.autoridadCompleto[16] ? '17' : '';
//         const Autoridad18num = this.state.autoridadCompleto[17] ? '18' : '';
//         const Autoridad19num = this.state.autoridadCompleto[18] ? '19' : '';
//         const Autoridad20num = this.state.autoridadCompleto[19] ? '20' : '';
//         const Autoridad21num = this.state.autoridadCompleto[20] ? '21' : '';
//         const Autoridad22num = this.state.autoridadCompleto[21] ? '22' : '';
//         const Autoridad23num = this.state.autoridadCompleto[22] ? '23' : '';
//         const Autoridad24num = this.state.autoridadCompleto[23] ? '24' : '';
//         const Autoridad25num = this.state.autoridadCompleto[24] ? '25' : '';

//         //CENTROS!!!
//         let PuertaImg1 = puertasImg[this.state.cruzUno[0].replace(/[^0-9]+/, '') ];
//         let PuertaImg2 = puertasImg[this.state.cruzUno[1].replace(/[^0-9]+/, '') ];
//         let PuertaImg3 = puertasImg[this.state.cruzDos[0].replace(/[^0-9]+/, '') ];
//         let PuertaImg4 = puertasImg[this.state.cruzDos[1].replace(/[^0-9]+/, '') ];

//         let CanalImg1 = this.state.canales[0] ? canalesImg[this.state.canales[0]] : '';
//         let CanalImg2 = this.state.canales[1] ? canalesImg[this.state.canales[1]] : '';
//         let CanalImg3 = this.state.canales[2] ? canalesImg[this.state.canales[2]] : '';
//         let CanalImg4 = this.state.canales[3] ? canalesImg[this.state.canales[3]] : '';
//         let CanalImg5 = this.state.canales[4] ? canalesImg[this.state.canales[4]] : '';
//         let CanalImg6 = this.state.canales[5] ? canalesImg[this.state.canales[5]] : '';
//         let CanalImg7 = this.state.canales[6] ? canalesImg[this.state.canales[6]] : '';
//         let CanalImg8 = this.state.canales[7] ? canalesImg[this.state.canales[7]] : '';
//         let CanalImg9 = this.state.canales[8] ? canalesImg[this.state.canales[8]] : '';
//         let CanalImg10 = this.state.canales[9] ? canalesImg[this.state.canales[9]] : '';
        
//         let PerfilImg = perfilesImg[this.state.perfilCompleto.toUpperCase()];
//         console.log(PerfilImg);
     
//         let perfilindex = 0;
//          perfilesCompleto.forEach((e,i) => {
//             if (e.name == this.state.perfilCompleto.toUpperCase()) {    
//                 perfilindex = i;
//             }
//         });

//         const PerfilUpperCase = this.state.perfilCompleto.toUpperCase();
//         const Perfil1 = perfilesCompleto[perfilindex].desc[0] ? perfilesCompleto[perfilindex].desc[0].join('') : '';
//         const Perfil2 = perfilesCompleto[perfilindex].desc[1] ? perfilesCompleto[perfilindex].desc[1].join('') : '';
//         const Perfil3 = perfilesCompleto[perfilindex].desc[2] ? perfilesCompleto[perfilindex].desc[2].join('') : '';
//         const Perfil4 = perfilesCompleto[perfilindex].desc[3] ? perfilesCompleto[perfilindex].desc[3].join('') : '';
//         const Perfil5 = perfilesCompleto[perfilindex].desc[4] ? perfilesCompleto[perfilindex].desc[4].join('') : '';
//         const Perfil6 = perfilesCompleto[perfilindex].desc[5] ? perfilesCompleto[perfilindex].desc[5].join('') : '';
//         const Perfil7 = perfilesCompleto[perfilindex].desc[6] ? perfilesCompleto[perfilindex].desc[6].join('') : '';
//         const Perfil8 = perfilesCompleto[perfilindex].desc[7] ? perfilesCompleto[perfilindex].desc[7].join('') : '';
//         const Perfil9 = perfilesCompleto[perfilindex].desc[8] ? perfilesCompleto[perfilindex].desc[8].join('') : '';
//         const Perfil10 = perfilesCompleto[perfilindex].desc[9] ? perfilesCompleto[perfilindex].desc[9].join('') : '';
//         const Perfil11 = perfilesCompleto[perfilindex].desc[10] ? perfilesCompleto[perfilindex].desc[10].join('') : '';
//         const Perfil12 = perfilesCompleto[perfilindex].desc[11] ? perfilesCompleto[perfilindex].desc[11].join('') : '';
//         const Perfil13 = perfilesCompleto[perfilindex].desc[12] ? perfilesCompleto[perfilindex].desc[12].join('') : '';
//         const Perfil14 = perfilesCompleto[perfilindex].desc[13] ? perfilesCompleto[perfilindex].desc[13].join('') : '';
//         const Perfil15 = perfilesCompleto[perfilindex].desc[14] ? perfilesCompleto[perfilindex].desc[14].join('') : '';
//         const Perfil16 = perfilesCompleto[perfilindex].desc[15] ? perfilesCompleto[perfilindex].desc[15].join('') : '';
//         const Perfil17 = perfilesCompleto[perfilindex].desc[16] ? perfilesCompleto[perfilindex].desc[16].join('') : '';
//         const Perfil18 = perfilesCompleto[perfilindex].desc[17] ? perfilesCompleto[perfilindex].desc[17].join('') : '';
//         const Perfil19 = perfilesCompleto[perfilindex].desc[18] ? perfilesCompleto[perfilindex].desc[18].join('') : '';
//         const Perfil20 = perfilesCompleto[perfilindex].desc[19] ? perfilesCompleto[perfilindex].desc[19].join('') : '';
//         const Perfil21 = perfilesCompleto[perfilindex].desc[20] ? perfilesCompleto[perfilindex].desc[20].join('') : '';
//         const Perfil22 = perfilesCompleto[perfilindex].desc[21] ? perfilesCompleto[perfilindex].desc[21].join('') : '';
//         const Perfil23 = perfilesCompleto[perfilindex].desc[22] ? perfilesCompleto[perfilindex].desc[22].join('') : '';
//         const Perfil24 = perfilesCompleto[perfilindex].desc[23] ? perfilesCompleto[perfilindex].desc[23].join('') : '';
//         const Perfil25 = perfilesCompleto[perfilindex].desc[24] ? perfilesCompleto[perfilindex].desc[24].join('') : '';

//         const Perfil1num = perfilesCompleto[perfilindex].desc[0] ? '0' : '';
//         const Perfil2num = perfilesCompleto[perfilindex].desc[1] ? '1' : '';
//         const Perfil3num = perfilesCompleto[perfilindex].desc[2] ? '2' : '';
//         const Perfil4num = perfilesCompleto[perfilindex].desc[3] ? '3' : '';
//         const Perfil5num = perfilesCompleto[perfilindex].desc[4] ? '4' : '';
//         const Perfil6num = perfilesCompleto[perfilindex].desc[5] ? '5' : '';
//         const Perfil7num = perfilesCompleto[perfilindex].desc[6] ? '6' : '';
//         const Perfil8num = perfilesCompleto[perfilindex].desc[7] ? '7' : '';
//         const Perfil9num = perfilesCompleto[perfilindex].desc[8] ? '8' : '';
//         const Perfil10num = perfilesCompleto[perfilindex].desc[9] ? '9' : '';
//         const Perfil11num = perfilesCompleto[perfilindex].desc[10] ? '10' : '';
//         const Perfil12num = perfilesCompleto[perfilindex].desc[11] ? '11' : '';
//         const Perfil13num = perfilesCompleto[perfilindex].desc[12] ? '12' : '';
//         const Perfil14num = perfilesCompleto[perfilindex].desc[13] ? '13' : '';
//         const Perfil15num = perfilesCompleto[perfilindex].desc[14] ? '14' : '';
//         const Perfil16num = perfilesCompleto[perfilindex].desc[15] ? '15' : '';
//         const Perfil17num = perfilesCompleto[perfilindex].desc[16] ? '16' : '';
//         const Perfil18num = perfilesCompleto[perfilindex].desc[17] ? '17' : '';
//         const Perfil19num = perfilesCompleto[perfilindex].desc[18] ? '18' : '';
//         const Perfil20num = perfilesCompleto[perfilindex].desc[19] ? '19' : '';
//         const Perfil21num = perfilesCompleto[perfilindex].desc[20] ? '20' : '';
//         const Perfil22num = perfilesCompleto[perfilindex].desc[21] ? '21' : '';
//         const Perfil23num = perfilesCompleto[perfilindex].desc[22] ? '22' : '';
//         const Perfil24num = perfilesCompleto[perfilindex].desc[23] ? '23' : '';
//         const Perfil25num = perfilesCompleto[perfilindex].desc[24] ? '24' : '';

//         const DefinicionUpperCase = this.state.definicion.toUpperCase();
//         let ModoDefinicion, Porcentaje, Areas, ElementosPrincipal, ElementosSecundario, Tiempo, Influencia, Grafico;
        
//         definicionCompleto.forEach(e => {
//             if (e.definicion == this.state.definicion) {
//                 ModoDefinicion = e.modo;
//                 Porcentaje = e.porcentaje;
//                 ElementosPrincipal= e.elementosPrincipal;
//                 ElementosSecundario = e.elementosSecundario;
//                 Tiempo = e.tiempo;
//                 Influencia = e.influencia;
//                 Areas = e.areas;
//                 Grafico = definicionesImg[this.state.definicion];
//             }
//         });

            
       
//         //CRUZES!!!!
    
//         let params =  {
//             bodygraph,
//             name,
//             fecha,
//             hora,
//             lugar,
//             tipo,
//             tipodesc,
//             corr,
//             incorr,
//             estrategia,
//             autoridad,
//             perfilUno,
//             perfilDos,
//             perfilDescripcion,
//             definicion,
//             currdate,
//             cabeza,
//             ajna,
//             garganta,
//             gi,
//             corazon,
//             plexosolar,
//             sacral,
//             bazo,
//             raiz,
//             puertasUno,
//             puertasDos,
//             cruzNombre,
//             CanalUno,
//             CanalDos,
//             CanalTres,
//             CanalCuatro,
//             CanalCinco,
//             CanalSeis,
//             CanalSiete, 
//             CanalOcho,
//             TipoUpperCase,
//         TipoPorcentaje,
//         DefinidoUno,
//         DefinidoDos,
//         DefinicionUnoImg,
//         DefinicionDosImg,
//         Conectado,
//         Aura,
//         TipoImg,
//         Modo,
//         EstrategiaCompleto,
//         Rol,
//         Tema,
//         Busqueda,
//         Dilema,
//         Psicologia,
//         Pregunta,
//         NoSer,
//         TipoLineaUno,
//         TipoLineaDos,
//         TipoLineaTres,
//         TipoLineaCuatro,
//         TipoLineaCinco,
//         TipoLineaSeis,
//         TipoLineaSeite,
//         TipoLineaOcho,
//         TipoLineaNueve,
//         TipoLineaDiez,
//         TipoLineaOnce,
//         TipoUpperCaseDos,
//         TipoImgDos,
        
//         Estrategia1,
//         Estrategia2,
//         Estrategia3,
//         Estrategia4,
//         Estrategia5,
//         Estrategia6,
//         Estrategia7,
//         Estrategia8,
//         Estrategia9,
//         Estrategia10,
//         Estrategia11,
//         Estrategia12,
//         Estrategia13,
//         Estrategia14,
//         Estrategia15,
//         Estrategia16,
//         Estrategia17,
//         Estrategia18,
//         Estrategia19,
//         Estrategia20,
//         Estrategia21,
//         Estrategia22,
//         Estrategia23,
//         Estrategia24,
//         Estrategia25,
//         Estrategia26,
//         Estrategia27,
//         Estrategia28,
//         Estrategia29,
//         Estrategia30,
//         Estrategia31,
//         Estrategia32,
//         Estrategia33,
//         Estrategia34,
//         Estrategia35,
//         Estrategia36,
//         Estrategia37,
//         Estrategia38,
//         Estrategia39,
//         Estrategia40,
//         Estrategia41,
//         Estrategia42,
//         Estrategia43,
//         Estrategia44,
//         Estrategia45,
//         Estrategia46,
//         Estrategia47,
//         Estrategia48,
//         Estrategia49,
//         Estrategia50,
//         Estrategia51,

//         Estrategia1num,
//         Estrategia2num,
//         Estrategia3num,
//         Estrategia4num,
//         Estrategia5num,
//         Estrategia6num,
//         Estrategia7num,
//         Estrategia8num,
//         Estrategia9num,
//         Estrategia10num,
//         Estrategia11num,
//         Estrategia12num,
//         Estrategia13num,
//         Estrategia14num,
//         Estrategia15num,
//         Estrategia16num,
//         Estrategia17num,
//         Estrategia18num,
//         Estrategia19num,
//         Estrategia20num,
//         Estrategia21num,
//         Estrategia22num,
//         Estrategia23num,
//         Estrategia24num,
//         Estrategia25num,
//         Estrategia26num,
//         Estrategia27num,
//         Estrategia28num,
//         Estrategia29num,
//         Estrategia30num,
//         Estrategia31num,
//         Estrategia32num,
//         Estrategia33num,
//         Estrategia34num,
//         Estrategia35num,
//         Estrategia36num,
//         Estrategia37num,
//         Estrategia38num,
//         Estrategia39num,
//         Estrategia40num,
//         Estrategia41num,
//         Estrategia42num,
//         Estrategia43num,
//         Estrategia44num,
//         Estrategia45num,
//         Estrategia46num,
//         Estrategia47num,
//         Estrategia48num,
//         Estrategia49num,
//         Estrategia50num,
//         Estrategia51num,

//         AutoridadUpperCase,
//         AutoridadImg,
//         AutoridadTexto,
//         Autoridad1,
//         Autoridad2,
//         Autoridad3,
//         Autoridad4,
//         Autoridad5,
//         Autoridad6,
//         Autoridad7,
//         Autoridad8,
//         Autoridad9,
//         Autoridad10,
//         Autoridad11,
//         Autoridad12,
//         Autoridad13,
//         Autoridad14,
//         Autoridad15,
//         Autoridad16,
//         Autoridad17,
//         Autoridad18,
//         Autoridad19,
//         Autoridad20,
//         Autoridad21,
//         Autoridad22,
//         Autoridad23,
//         Autoridad24,
//         Autoridad25,

//         Autoridad1num,
//         Autoridad2num,
//         Autoridad3num,
//         Autoridad4num,
//         Autoridad5num,
//         Autoridad6num,
//         Autoridad7num,
//         Autoridad8num,
//         Autoridad9num,
//         Autoridad10num,
//         Autoridad11num,
//         Autoridad12num,
//         Autoridad13num,
//         Autoridad14num,
//         Autoridad15num,
//         Autoridad16num,
//         Autoridad17num,
//         Autoridad18num,
//         Autoridad19num,
//         Autoridad20num,
//         Autoridad21num,
//         Autoridad22num,
//         Autoridad23num,
//         Autoridad24num,
//         Autoridad25num,

       
//         PuertaImg1,
//         PuertaImg2,
//         PuertaImg3,
//         PuertaImg4,

//         CanalImg1,
//         CanalImg2,
//         CanalImg3,
//         CanalImg4,
//         CanalImg5,
//         CanalImg6,
//         CanalImg7,
//         CanalImg8,
//         CanalImg9,
//         CanalImg10,
        
//         PerfilImg,
        
     
//         perfilindex,
         

//         PerfilUpperCase,
//         Perfil1,
//         Perfil2,
//         Perfil3,
//         Perfil4,
//         Perfil5,
//         Perfil6,
//         Perfil7,
//         Perfil8,
//         Perfil9,
//         Perfil10,
//         Perfil11,
//         Perfil12,
//         Perfil13,
//         Perfil14,
//         Perfil15,
//         Perfil16,
//         Perfil17,
//         Perfil18,
//         Perfil19,
//         Perfil20,
//         Perfil21,
//         Perfil22,
//         Perfil23,
//         Perfil24,
//         Perfil25,

//         Perfil1num,
//         Perfil2num,
//         Perfil3num,
//         Perfil4num,
//         Perfil5num,
//         Perfil6num,
//         Perfil7num,
//         Perfil8num,
//         Perfil9num,
//         Perfil10num,
//         Perfil11num,
//         Perfil12num,
//         Perfil13num,
//         Perfil14num,
//         Perfil15num,
//         Perfil16num,
//         Perfil17num,
//         Perfil18num,
//         Perfil19num,
//         Perfil20num,
//         Perfil21num,
//         Perfil22num,
//         Perfil23num,
//         Perfil24num,
//         Perfil25num,
//         DefinicionUpperCase,
//          ModoDefinicion,
//           Porcentaje,
//            Areas, 
//            ElementosPrincipal,
//             ElementosSecundario,
//              Tiempo,
//               Influencia, 
//               Grafico
//           }    
//           console.log(params);
//           console.log('params');
//          axios.post(`${window.location.origin}/downloadpdfcompleto`, {params}).catch(error => console.log(error));
//    }

//     componentDidMount() {
//          this.setState({
//             firstName: this.props.firstName,
//         lastName: this.props.lastName,
//         fecha: this.props.fecha,
//         hora: this.props.hora,
//         lugar: this.props.lugar,
//         sexo: this.props.sexo,
//         tipo: this.props.tipo,
//         autoridad: this.props.autoridad,
//         canales: this.props.canales,
//         centros: this.props.centros,
//         cruzIncarnacion: this.props.cruzIncarnacion,
//         definicion: this.props.definicion,
//         estrategia: this.props.estrategia,
//         perfil: this.props.perfil,
//         puertas: this.props.puertas,
//         variables: this.props.variables,
//         perfilUno: this.props.perfil.num.split('')[0],
//         perfilDos: this.props.perfil.num.split('')[2],
//         bodygraph: this.props.bodygraph,
//         cruzUno: this.props.cruz.design.split('/'), 
//         cruzDos: this.props.cruz.person.split('/'),
//         cruzadd: this.props.cruzadd,
//         email: this.props.email,
//         allPuertas: [this.props.cruz.design.split('/'), this.props.cruz.person.split('/')].flat(2),
//         cabezaCentro: this.props.cabezaCentro,
//             ajnaCentro: this.props.ajnaCentro,
//             gargantaCentro: this.props.gargantaCentro,
//             giCentro: this.props.giCentro,
//             corazonCentro: this.props.corazonCentro,
//             plexosolarCentro: this.props.plexosolarCentro,
//             sacralCentro: this.props.sacralCentro,
//             bazoCentro: this.props.bazoCentro,
//             raizCentro: this.props.raizCentro,
//             allCentros: this.props.allCentros,
//         updated: false
//          });
//          this.getCurrDate();
//     }

//     componentDidUpdate(prevProps, prevState) {
//         const translatedWords = ['Proyector', 'Proyectora', 'Manifestador', 'Manifestadora', 'Generador Manifestante', 'Generadora Manifestante', 'Generador', 'Generadora', 'Reflector', 'Reflectora' ]
//         const isTranslated = translatedWords.includes(this.state.tipo);
//         if (!isTranslated) { 
//             this.translateHelper();
//         }
//         if (!this.state.descadded){
//         this.addDescription();
//     }
        

        
//         this.cruzWorker();
        

//         if (this.state.cabezaCentro === 'no') {
//             this.displayParts();
//             if (!this.state.updated){
//                 this.updated();
//             }
//             }   
//     }

    
    

//     render() {
//         return (
//             <div className='result'>


//                 <h1>Resultado</h1>
//                 <Button onClick={this.convertToPdf}>Descargar</Button>
//                 <Button onClick={this.sendMail}>Enviar correo</Button>
//                 <Button onClick={this.test}>TEST</Button>
//                     <Container fluid>
//                     <Row>
//                         <Col><img className='logo' src={logo} alt='logo' /></Col>
//                         <Col><h3>Basic Design</h3></Col>
//                         <Col>{this.state.date} {this.state.time}</Col>
//                     </Row>

//                     <Row className='border'>
//                         <Col className='border'>NOMBRE</Col>
//                         <Col className='border text-center'>{this.state.firstName} {this.state.lastName}</Col>
//                         <Col className='border'>FECHA</Col>
//                         <Col className='border'>{this.state.fecha}</Col>
//                         <Col className='border'>HORA</Col>
//                         <Col className='border'>{this.state.hora}</Col>
//                         <Col className='border'>LUGAR</Col>
//                         <Col className='border'>{this.state.lugar}</Col>
//                     </Row>

//                     <Row>
//                         <Col className='border bold' xs={3}>TIPO 
//                         <Popup
//                             trigger={<Button> ? </Button>}
//                             position="top center"
//                             nested
//                         >
//                             <div>
//                             Nos presenta a cual de los cinco tipos energ??ticos pertenecemos y sus caracter??sticas
//                                 </div>
//                                 </Popup>
//                         </Col>
//                         <Col className='border' xs={3}>
//                             <Row className='border'>{this.state.tipo.toUpperCase()}</Row>
                            
//                             <Row className='border lightyellow'>??CUANTOS HAY COMO T???</Row>
//                             <Row className='border '>{this.state.cuantas}</Row>
                            
//                         </Col>
//                         <Col className='border'>
//                             <Row>{this.state.typeDescription} </Row>
//                             <Row className='lightyellow'>Esta cifra es de los millones de personas que hay con tu mismo tipo, pero recuerda que como t??solo hay UNA</Row>
//                         </Col>
//                     </Row>

//                     <Row>
//                         <Col className='border bold' xs={3}>ESTRATEGIA
//                         <Popup
//                             trigger={<Button> ? </Button>}
//                             position="top center"
//                             nested
//                         >
//                             <div>
//                             Es la manera que el dise??o te propone para afrontar la vida de forma correcta en base a tu Tipo
//                                 </div>
//                                 </Popup>
//                         </Col>
//                         <Col className='border lightyellow' xs={3} >COMO AFRONTAR LA VIDA</Col>
//                         <Col className='border' >{this.state.estrategia}</Col>
//                         <Col className='border'>
//                             <Row className='lightgreen '>CORRECTO</Row>
//                             <Row>{this.state.corr}</Row>
//                         </Col>
//                         <Col className='border'>
//                             <Row className='orange'>INCORRECTO</Row>
//                             <Row>{this.state.incorr}</Row>
//                         </Col>
//                     </Row>

//                     <Row>
//                         <Col className='border bold' xs={3}>AUTORIDAD
//                         <Popup
//                             trigger={<Button> ? </Button>}
//                             position="top center"
//                             nested
//                         >
//                             <div>
//                             Es la forma sencilla y adecuada de que tu tipolog??a aprenda a tomar las decisiones que te son adecuadas
//                                 </div>
//                                 </Popup>
//                         </Col>
//                         <Col className='border lightyellow' xs={3}>COMO TOMAR LAS DECISIONES ADECUADAS</Col>
//                         <Col className='border' xs={6}>{this.state.autoridad}</Col>
//                     </Row>

//                     <Row>
//                         <Col className='border bold' xs={3}>DEFINICI??N
//                         <Popup
//                             trigger={<Button> ? </Button>}
//                             position="top center"
//                             nested
//                         >
//                             <div>
//                             Nos muestra cuantas activaciones de energ??a tienes  y como se interaccionan y componen en tu plano energ??tico
//                                 </div>
//                                 </Popup>
//                         </Col>
//                         <Col className='border lightyellow' xs={6}>Es la forma en que nuestrossistemas de energ??ase conectan entre s??, dando como resultado diferentes configuraciones, dependiendo la disposici??n de las puertas</Col>
//                         <Col className='border text-center' xs={3}>{this.state.definicion}</Col>
//                     </Row>
//                     </Container>
                    

                    


//                     <Container fluid>
//                         <h1 className='text-center' >TUS CENTROS ENERG??TICOS <Popup
//                             trigger={<Button> ? </Button>}
//                             position="top center"
//                             nested
//                         >
//                             <div>
//                             Los nueve centros que definen los bloque de energ??a diferenciada  con sus cualidades propias y ??nicas
//                                 </div>
//                             </Popup></h1>
//                         <Row className='border lightyellow'>Tienes 9 centros y cada uno con sus caracter??sticas concretas,los coloreados est??nactivados y por ellos emites y los que est??nen blanco est??nabiertos y por ellos recibes la informaci??nde tu entornoo personas que te rodean</Row>
//                         <div className='hideonlargescreen'>]
//                          <img  src={this.state.bodygraph}/>
//                          <Popup
//                             trigger={<Button> ? </Button>}
//                             position="top center"
//                             nested
//                         >
//                             <div>
//                             Es el plano energ??tico donde est?? toda la informaci??n que nos ofrece el Dise??o Humano
//                                 </div>
//                             </Popup>
//                         </div>
//                     <Row>
//                         <Col className='border'>
//                         <Row>
//                         <Col className='border bold' >CABEZA</Col>
//                         <Col className='border'>{this.state.cabezaCentro == 'opened' ? <img className='openclose' src={cabezaAbierto} /> : <img className='openclose' src={cabezaCerrado} /> }</Col>
//                         <Col className='border lightyellow'>Son las preguntas, las dudas y la presion para que se expanda la conciencia</Col>
//                         </Row>

//                         <Row>
//                         <Col className='border bold'>GARGANTA</Col>
//                         <Col className='border'>{this.state.gargantaCentro == 'opened' ? <img className='openclose' src={gargantaAbierto} /> : <img className='openclose' src={gargantaCerrado} />}</Col>
//                         <Col className='border lightyellow'>Pensamiento emoci??n y sentimientos en palabras y hechos</Col>
//                         </Row>

//                         <Row>
//                         <Col className='border bold'>CORAZON</Col>
//                         <Col className='border'>  {this.state.corazonCentro == 'opened' ? <img className='openclose' src={corazonAbierto} /> : <img className='openclose' src={corazonCerrado} />} </Col>
//                         <Col className='border lightyellow'>La supervivencia material. El impulso de la voluntad hacia la autoestima</Col>
//                         </Row>

//                         <Row>
//                         <Col className='border bold'>SACRAL</Col>
//                         <Col className='border'>{this.state.sacralCentro == 'opened' ? <img className='openclose' src={sacralAbierto} /> : <img className='openclose' src={sacralCerrado} />}</Col>
//                         <Col className='border lightyellow'>Energ??a vital para hacer cosas y activaci??n del impulso sexual </Col>
//                         </Row>


//                         <Row>
//                         <Col className='border bold'>RAIZ</Col>
//                         <Col className='border'>{this.state.raizCentro == 'opened' ? <img className='openclose' src={raizAbierto} /> : <img className='openclose' src={raizCerrado} />} </Col>
//                         <Col className='border lightyellow'>El impulso de crecer, la presi??n de ser, el estr??s, la adrenalina </Col>
//                         </Row>

                        

//                         </Col>

//                         <Col className='border d-none d-lg-block '>

//                     <Row><img className='img-fluid h-100' src={this.state.bodygraph}/></Row>
//                     <Popup
//                             trigger={<Button> ? </Button>}
//                             position="top center"
//                             nested
//                         >
//                             <div>
//                             Es el plano energ??tico donde est?? toda la informaci??n que nos ofrece el Dise??o Humano
//                                 </div>
//                                 </Popup>
                     
                        
//                         </Col>

//                         <Col className='border'>
//                         <Row>
//                         <Col className='border bold'>AJNA</Col>
//                         <Col className='border'>{this.state.ajnaCentro == 'opened' ? <img className='openclose' src={ajnaAbierto} /> : <img className='openclose' src={ajnaCerrado} /> }</Col>
//                         <Col className='border lightyellow'>Analiza e investiga la vida de forma intelectual racional, autorreflexiva</Col>
//                         </Row>

//                         <Row>
//                         <Col className='border bold'>GI</Col>
//                         <Col className='border'>{this.state.giCentro == 'opened' ? <img className='openclose' src={GIAbierto} /> : <img className='openclose' src={GICerrado} />}</Col>
//                         <Col className='border lightyellow'>Marca la identidad del ser, el amor y la direcci??n hacia la Fuente superior </Col>
//                         </Row>

//                         <Row>
//                         <Col className='border bold'>PLEXO</Col>
//                         <Col className='border'>{this.state.plexosolarCentro == 'opened' ? <img className='openclose' src={plexoAbierto} /> : <img className='openclose' src={plexoCerrado} />}</Col>
//                         <Col className='border lightyellow'>La experiencia de los sentimientos, las emociones, sensaciones</Col>
//                         </Row>

//                         <Row>
//                         <Col className='border bold'>BAZO</Col>
//                         <Col className='border'>{this.state.bazoCentro == 'opened' ? <img className='openclose' src={bazoAbierto} /> : <img className='openclose' src={bazoCerrado} /> }</Col>
//                         <Col className='border lightyellow'>La conciencia del cuerpo, la intuici??n, el gusto, los miedos</Col>
//                         </Row>

//                         <Row >
//                         <Col className='border lightgreen bold'>LA GRAN B??SQUEDA</Col>
//                         <Col className='border lightgreen bold'>Estar en el lugar correcto Con la persona adecuada Haciendo lo que te gusta</Col>
                       
//                         </Row>
                        
//                         </Col>
//                     </Row>
//                     <Row >
//                         <Col className='border bold'>PERFIL 
//                         <Popup
//                             trigger={<Button> ? </Button>}
//                             position="top center"
//                             nested
//                         >
//                             <div>
//                             Muestran la energ??a que nos pone delante nuestro verdadero personaje
//                                 </div>
//                             </Popup>
//                         </Col>
//                         <Col className='border lightyellow'>NUESTRO PERSONAJE AUTENTICO</Col>
                        
//                             <Col className='border red '>{this.state.perfilUno}</Col>
//                             <Col className='border black'>{this.state.perfilDos}</Col>
//                             <Col className='border'>{this.state.perfilCompleto}</Col>
                        
//                         </Row>
//                     </Container>
//                     <br />
//                     <Container fluid>
//                         <Row>
//                             <Col >
//                                 <Row>
//                                     <Col className='border-top border-bottom border-left redtext'>
//                                     <div className='text-center'>INCONSCIENTES</div>
                                    
//                                     <Row className='border-top border-bottom border-left'>
//                                     {this.state.cruzUno[0]}
//                                     </Row>
//                                     <Row className='border-top  border-left'>
//                                     {this.state.cruzUno[1]}
//                                     </Row>
//                                     </Col>
//                                 </Row>
//                             </Col>

//                             <Col className='border'>
//                                 <Row>
//                                     <Col  >
//                                     <Row>PUERTAS
//                                     <Popup
//                             trigger={<Button> ? </Button>}
//                             position="top center"
//                             nested
//                         >
//                             <div>
//                             Marcan las cualidades m??s poderosas que configuran tu plano energ??tico
//                                 </div>
//                                 </Popup>

//                                     </Row>
//                                     <Row className='lightyellow border-top'>LAS CUALIDADES</Row>
//                                     <Row className='lightyellow'> QUE MARCAN TU VIDA</Row>
//                                     </Col>
//                                     </Row>
//                             </Col>

//                             <Col className='border'>
//                                 <Row>
//                                     <Col className='border bold'>
//                                     <div className='text-center'> CONSCIENTES </div>
                                    
//                                     <Row className='border-top border-bottom '>
//                                     {this.state.cruzDos[0]}
//                                     </Row>
//                                     <Row className='border-top'>
//                                     {this.state.cruzDos[1]}
//                                     </Row>
//                                     </Col>
//                                 </Row>
//                             </Col>
//                         </Row>

//                         <Row>
//                             <Col className='border'>CRUZ 

//                             <Popup
//                             trigger={<Button> ? </Button>}
//                             position="top center"
//                             nested
//                         >
//                             <div>
//                             Muestra nuestro prop??sito a realizar en esta vida
//                                 </div>
//                                 </Popup>
                            
//                             </Col>
//                             <Col className='border lightyellow'>TU VERDADERO PROP??SITO</Col>
//                             <Col className='border'>{this.state.cruzstr}</Col>
//                         </Row>

//                         <Row>
//                             <Col className='border'></Col>
//                             <Col className='border'>CANALES
//                             <Popup
//                             trigger={<Button> ? </Button>}
//                             position="top center"
//                             nested
//                         >
//                             <div>
//                             Muestran la energ??a de nuestras caracter??sticas vitales
//                                 </div>
//                                 </Popup>
//                             </Col>
//                             <Col className='border lightyellow'>TUS CARACTER??STICAS VITALES</Col>
//                         </Row>

//                         {this.state.canalesCompleto.map((e,i) => <Row className='border'>{i} {e}</Row>)}
                        
                       
//                         <Row>NOTAS Y RESUMEN</Row>
//                         <Row><input type='text' onChange={this.textChange} className=' form-control form-control-lg mb-2' /></Row>
                        
                        

//                     </Container>

                



// <Container>
//     <Row className='border'>
//         <Col className='border'><img src={logo} alt='logo' /></Col>
//         <Col className='border'>{this.state.tipo}</Col>
//         <Col className='border'>{this.state.porcentaje}</Col>
//         <Col className='border'> { this.state.tipo == 'Generador Manifestante' ? <img src={generadormanifestantemain} /> : this.state.tipo == 'Generador' ? <img src={generadormain} /> : this.state.tipo == 'Manifestador' ? <img src={manifestadormain} /> : this.state.tipo == 'Proyector' ? <img src={proyectormain} /> : <img src={reflectormain} />  } </Col>    
//     </Row>
//     <Row className='border'>
//         <Col className='border'>{this.state.definicionUno}</Col>
//         <Col className='border'>{this.state.tipo != 'Reflector' ? <img src={allButReflector} /> : <img src={onlyReflector} />}</Col>
//         <Col className='border'>{this.state.definicionDos}</Col>
//         <Col className='border'>{ (this.state.tipo != 'Reflector' || this.state.tipo != 'Proyector') ? <img src={allbutreflectorProyector} /> : '' }</Col>    
//     </Row>
//     <Row className='border'>
//         <Col className='border'>{this.state.conectado}</Col>
//     </Row>
//     <Row className='border'>
//         <Col className='border'>AURA: {this.state.aura}</Col>

//     </Row>
//     <Row className='border'>
//         <Col className='border'>MODO</Col>
//         <Col className='border'>{this.state.modo}</Col>
//     </Row>
//     <Row className='border'>
//         <Col className='border'>ESTRATEGIA</Col>
//         <Col className='border'>{this.state.estrategia}</Col>
//     </Row>
//     <Row className='border'>
//         <Col className='border'>ROL</Col>
//         <Col className='border'>{this.state.rol}</Col>
//     </Row>
//     <Row className='border'>
//         <Col className='border'>TEMA GENERAL</Col>
//         <Col className='border'>{this.state.temaGeneral}</Col>
//     </Row>
//     <Row className='border'>
//         <Col className='border'>B??SQUEDA</Col>
//         <Col className='border'>{this.state.busqueda}</Col>
//     </Row>
//     <Row className='border'>
//         <Col className='border'>DILEMA MENTAL</Col>
//         <Col className='border'>{this.state.dilemaMental}</Col>
//     </Row>
//     <Row className='border'>
//         <Col className='border'>PSICOLOG??A</Col>
//         <Col className='border'>{this.state.psigologia}</Col>
//     </Row>
//     <Row className='border'>
//         <Col className='border'>PREGUNTA INTERNA</Col>
//         <Col className='border'>{this.state.preguntaInterna}</Col>
//     </Row>
//     <Row className='border'>
//         <Col className='border'>TEMA EN EL ???NO SER???</Col>
//         <Col className='border'>{this.state.noSer}</Col>
//     </Row>
//      {this.state.lista.map(e => {
//        return (
//        <>
//        <Row className='border'>
//             <Col className='border'>
//             {e}
//             </Col>
//         </Row>
        
//         </>)
//     })
// }  
// </Container>
// <Row className='border'>
//     <Col className='border'> {this.state.tipo} </Col>
//     <Col className='border'> <h1>Estrategias</h1>   </Col>
//     <Col className='border'>{ this.state.tipo == 'Generador Manifestante' ? <img src={generadormanifestantemain} /> : this.state.tipo == 'Generador' ? <img src={generadormain} /> : this.state.tipo == 'Manifestador' ? <img src={manifestadormain} /> : this.state.tipo == 'Proyector' ? <img src={proyectormain} /> : <img src={reflectormain} />  }</Col>
// </Row>
// {this.state.estrategiasCompleto.map((e,i) => {
//     return (
//         <Row className='border' >
//             <Col className='border'>{i}</Col>
//             <Col className='border'>{e}</Col>
//         </Row>
//     )
// })}
// <Container>
//     <Row className='border'>
//         <Col className='border'><h1>LA AUTORIDAD</h1></Col>
//         <Col className='border'>
//             <Row className='border'>
//             Jerarqu??a de la Autoridad
//             </Row>
//             <Row className='border'>1. Plexo Solar</Row>
//             <Row className='border'>2. Sacral</Row>
//             <Row className='border'>3. Bazo</Row>
//             <Row className='border'>4. Coraz??n</Row>
//             <Row className='border'>5. GI</Row>
//             <Row className='border'>6. Entorno</Row>
//             <Row className='border'>7. Lunar</Row>
//         </Col>
//         <Col className='border'>
//         LA MENTE
//         <img src={autoridadfijoimg} />
//         </Col>
//         <Col className='border'>
//         Pensar 
//         Cuestionar 
//         Interpretar 
//         Ense??ar 
//         Inspirar 
//         Recordar 
//         Organizar 
//         Nombrar 
//         Procesar datos
//         </Col>
//     </Row>
//     <Row className='border'>
//         <h1>ES NUESTRA ??NICA VERDAD AUT??NTICA</h1>
//     </Row>
//     {autoridadFijo.map((e,i) => {
//         return (
//             <Row className='border'>
//                 <Col className='border'>{i}</Col>
//                 <Col className='border'>{e}</Col>
//             </Row>
//         )

//     })}
// </Container>

// <Container>
//     <Row className='border'>
//         <Col className='border'>{this.state.autoridad.split(':')[0]}</Col>
//         <Col className='border'>
//             <Row className='border'>
//             Jerarqu??a de la Autoridad
//             </Row>
//             <Row className='border'>1. Plexo Solar</Row>
//             <Row className='border'>2. Sacral</Row>
//             <Row className='border'>3. Bazo</Row>
//             <Row className='border'>4. Coraz??n</Row>
//             <Row className='border'>5. GI</Row>
//             <Row className='border'>6. Entorno</Row>
//             <Row className='border'>7. Lunar</Row>
//         </Col>
//         <Col className='border'>
//         <img src={this.state.autoridadImg} />
//         </Col>
//         <Col className='border'>
//         {this.state.autoridadTexto}
//         </Col>
//     </Row>
   
//     {this.state.autoridadCompleto.map((e,i) => {
//         return (
//             <Row className='border'>
//                 <Col className='border'>{i}</Col>
//                 <Col className='border'>{e}</Col>
//             </Row>
//         )

//     })}
// </Container>

// <Container>
// {this.state.cruzCompleto[0].texto[1] && <h1>Cruz</h1>}
// {this.state.cruzCompleto[0].texto[1] && <h1>{this.state.cruzstr}</h1> }
// {this.state.cruzCompleto[0].texto[1] && <img class="rounded float-left" src={this.state.cruzCompleto[0].img} /> }
// {this.state.cruzCompleto[0].texto[1] && this.state.cruzCompleto[0].texto.map(e => <p>{e}</p>) }
// </Container>

// <Container>
//     {centrosCompleto.map((e,i) => {
//         return (
//             <>
//             <Row className='border'>
//         <Col className='border'>{e.nombre}</Col>
//         <Col className='border'>
//             <Col className='border'>Correlaci??n Biol??gica: </Col>
//             <Col className='border'>{e.corrbio}</Col>
//         </Col>
//         <Col className='border'>
//         <Col className='border'>Tipo de Centro: </Col>
//             <Col className='border'>{e.tipo}</Col>
//         </Col>
//     </Row>
// <Row className='border'>
//     <Col className='border'><img src={e.funcionImg} /></Col>
//     <Col className='border'>
//     <Row className='border'>Funci??n</Row>
//     <Row className='border'>{e.funcion}</Row>
//     </Col>
// </Row>
// <Row className='border'>
//     <Col className='border'> {this.state.allCentros[i] == 'opened' ? <img src={centrosImg[i][0]} /> : <img src={centrosImg[i][1]} /> }</Col>
//     <Col className='border'>
//     <Row className='border'>Centro Definido</Row>
//     <Row className='border'>{e.centroDefinido}</Row>
//     </Col>
// </Row>
// <Row className='border'>
//     <Col className='border'>{e.noSerPuertas} puertas</Col>
//     <Col className='border'>
//     <Row className='border'>En el No Ser</Row>
//     <Row className='border'>{e.noSerUno}</Row>
//     </Col>
// </Row>
// <Row className='border'>
//     <Col className='border'>{e.preguntaGuiaPorcentaje}</Col>
//     <Col className='border'>
//     <Row className='border'>Pregunta gu??a</Row>
//     <Row className='border'>{e.preguntaGuiaUno}</Row>
//     </Col>
// </Row>

// <Row className='border'>
//     <Col className='border'><img src={e.centroSinDefinirImg} /></Col>
//     <Col className='border'>
//     <Row className='border'>Centro Sin Definir</Row>
//     <Row className='border'>{e.centroSinDefinir}</Row>
//     </Col>
// </Row>

// <Row className='border'>
//     <Col className='border'><img src={logo} /></Col>
//     <Col className='border'>
//     <Row className='border'>En el No Ser</Row>
//     <Row className='border'>{e.noSerDos}</Row>
//     <Row className='border'>Pregunta gu??a</Row>
//     <Row className='border'>{e.preguntaGuiaDos}</Row>
//     </Col>
// </Row>
// </>
//         )
//     })}
    

// </Container>
//  <Row className='border'><h1>Definicion</h1></Row>
//  {definicionCompleto.map(e => {
//      if (e.definicion == this.state.definicion) {
//          return (
//              <>
//              <Row className='border'>
//                  <Col className='border'>Definicion</Col>
//                  <Col className='border'>{e.definicion}</Col>
//              </Row>
//              <Row className='border'>
//                  <Col className='border'>MODO DEFINICI??N</Col>
//                  <Col className='border'>{e.modo}</Col>
//              </Row>
//              <Row className='border'>
//                  <Col className='border'>PORCENTAJE</Col>
//                  <Col className='border'>{e.porcentaje}</Col>
//              </Row>
//              <Row className='border'>
//                  <Col className='border'>AREAS UNIDAS</Col>
//                  <Col className='border'>{e.areas}</Col>
//              </Row>
//              <Row className='border'>
//                  <Col className='border'>ELEMENTOS DE CONDICIONAMIENTO PRINCIPAL</Col>
//                  <Col className='border'>{e.elementosPrincipal}</Col>
//              </Row>
//              <Row className='border'>
//                  <Col className='border'>ELEMENTOS DE CONDICIONAMIENTO SECUNDARIO</Col>
//                  <Col className='border'>{e.elementosSecundario}</Col>
//              </Row>
//              <Row className='border'>
//                  <Col className='border'>TIEMPO DE TOMA DE DECISIONES </Col>
//                  <Col className='border'>{e.tiempo}</Col>
//              </Row>
//              <Row className='border'>
//                  <Col className='border'>INFLUENCIA EXTERNA</Col>
//                  <Col className='border'>{e. influencia}</Col>
//              </Row>
//              <Row className='border'>
//                  <Col className='border'>GR??FICO</Col>
//                  <Col className='border'><img src={e.grafico} /></Col>
//              </Row>
//              </>
//          )
//      }
//  })}
// <Container>
   
//     {perfilesCompleto.map(e => {
  
//         if (e.name == this.state.perfilCompleto.toUpperCase()) {
           
            
//             return (<>
//             <Row className='border'><h1>Perfil</h1></Row>
//                 <Row className='border'>
                    
//                     <Col className='border'>{this.state.perfilCompleto}</Col>
//                     <Col className='border'><img src={e.img} /></Col>
//                     </Row>
//                     <>
//                     {e.desc.map((el,i) => {
//                         return (
//                             <Row className='border'>
//                             <Col className='border'>{i}</Col>
//                             <Col className='border'>{el}</Col>
//                             </Row>
//                         )
//                     })}
//                  </>   
                
//             </>)
//         }
//     })}
// </Container>
// <Container>
//     <Row><h1>Puertas</h1></Row>
//     {this.state.allPuertas.map((e,i) => {
//         return (
//             <Row>
//                 <Col>
//                 <img src={imagesPuertas[`puerta${e}.png`].default} />
//                 </Col>
//                 </Row>
//         )
//     })}
// </Container>
// <Container>
//     <Row><h1>Canales</h1></Row>
//     {this.state.canales.map(e => {
//         return (
//             <Row>
//                 <Col>
//                 <img src={imagesCanales[`canal${e}.png`].default} />
//                 </Col>
//             </Row>
//         )
//     })}
// </Container>

//             </div>
            
//         )
//     }
// }

// function mapStateToProps(state, ownProps) {
//     return {
//         firstName: state.addUserData.firstName,
//         lastName: state.addUserData.lastName,
//         fecha: state.addUserData.fecha,
//         hora: state.addUserData.hora,
//         sexo: state.addUserData.sexo,
//         lugar: state.addUserData.lugar,
//         tipo: state.addUserData.tipo,
//         autoridad: state.addUserData.autoridad,
//         canales: state.addUserData.canales.map(e => e.num),
//         centros: state.addUserData.centros,
//         cruzIncarnacion: state.addUserData.cruzIncarnacion,
//         definicion: state.addUserData.definicion,
//         estrategia: state.addUserData.estrategia,
//         perfil: state.addUserData.perfil,
//         puertas: state.addUserData.puertas,
//         variables: state.addUserData.variables,
//         bodygraph: state.addUserData.bodygraph,
//         cruz: state.addUserData.cruz,
//         cruzadd: state.addUserData.cruz,
//         email: state.addUserData.email,
//         cabezaCentro: state.addCenters.cabeza,
//         ajnaCentro: state.addCenters.ajna,
//         gargantaCentro: state.addCenters.garganta,
//         giCentro: state.addCenters.gi,
//         corazonCentro: state.addCenters.corazon,
//         plexosolarCentro: state.addCenters.plexosolar,
//         sacralCentro: state.addCenters.sacral,
//         bazoCentro: state.addCenters.bazo,
//         raizCentro: state.addCenters.raiz,
//         allCentros: [state.addCenters.ajna, state.addCenters.bazo, state.addCenters.cabeza, state.addCenters.corazon, state.addCenters.gi, state.addCenters.garganta, state.addCenters.plexosolar, state.addCenters.raiz, state.addCenters.sacral]


//   }
// }

//   export default connect(mapStateToProps)(ResultadoCompleto) 