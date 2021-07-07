import React, { Component } from "react";
import { Container, Row, Col, Button } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import logo from './img/logologo.png';
import {connect} from 'react-redux';
import axios from 'axios';
import Popup from 'reactjs-popup';
import { ReactSVG } from 'react-svg';
import { Icon as Icons } from '@iconify/react';
import rhombusIcon from '@iconify/icons-mdi/rhombus';
import rhombusOutline from '@iconify/icons-mdi/rhombus-outline';
import allButReflector from './img/allbutreflector.png';
import onlyReflector from './img/onlyreflector.png';
import allbutreflectorProyector from './img/allbutreflectorproyector.png';
import generadormanifestantemain from './img/generadormanifestantemain.png'
import generadormain from './img/generadormain.png';
import manifestadormain from './img/manifestadormain.png';
import proyectormain from './img/proyectormain.png';
import reflectormain from './img/reflectormain.jpg';
import autoridadfijoimg from './img/autoridadfijo.png';

import sacralimg from './img/sacralImg.png';
import mentalimg from './img/mentalImg.png';
import lunarimg from './img/lunarImg.png';
import gimg from './img/giImg.png';
import egoimg from './img/egoImg.png';
import bazoimg from './img/bazoImg.png';

import ajnaimg from './img/ajnaImg.png';
import ajnacentrosindefinirimg from './img/ajnacentrosindefinirimg.png';

import bazoiimg from './img/bazoiimg.png';
import bazocentrosindefinirimg from './img/bazocentrosindefinirimg.png';

import cabezaimg from './img/cabezaimg.png';
import cabezacentrosindefinirimg from './img/cabezacentrosindefinirimg.png';

import corazonimg from './img/corazonimg.png';
import corazoncentrosindefinirimg from './img/corazoncentrosindefinirimg.png';

import giimg from './img/gimg.png';
import gcentrosindefinirimg from './img/gcentrosindefinirimg.png';


import gargantaimg from './img/gargantaimg.png';
import gargantacentrosindefinirimg from './img/gargantacentrosindefinirimg.png';

import plexoimg from './img/plexoimg.png';
import plexocentrosindefinirimg from './img/plexocentrosindefinirimg.png';

import raizimg from './img/raizimg.png';
import raizcentrosindefinirimg from './img/raizcentrosindefinirimg.png';

import sacraliimg from './img/sacrallimg.png';
import sacralcentrosindefinirimg from './img/sacralcentrosindefinirimg.png';

import ajnaAbierto from './img/AJNA BL.png';
import ajnaCerrado from './img/AJNA COLOR.png';

import bazoAbierto from './img/BAZO BL.png';
import bazoCerrado from './img/BAZO COLOR.png';

import cabezaAbierto from './img/CABEZA BL.png';
import cabezaCerrado from './img/CABEZA COLOR.png';

import corazonAbierto from './img/CORAZON COLOR.png'; // поправить
import corazonCerrado from './img/CORAZON COLOR.png';

import gargantaAbierto from './img/GARGANTA BL.png';
import gargantaCerrado from './img/GARGANTA COLOR.png';

import GIAbierto from './img/GI BL.png';
import GICerrado from './img/GI COLOR.png';

import plexoAbierto from './img/PLEXO BL.png';
import plexoCerrado from './img/PLEXO COLOR.png';


import raizAbierto from './img/RAIZ BL.png';
import raizCerrado from './img/RAIZ COLOR.png';


import sacralAbierto from './img/SACRAL BL.png';
import sacralCerrado from './img/SACRAL COLOR.png';


import investigadormartir from './img/investigadormartir.png';
import investigadoroportunista from './img/investigadoroportunista.PNG';
import ermitanooportunista from './img/ermitanooportunista.PNG';
import ermitanohereje from './img/ermitanohereje.PNG';
import martirhereje from './img/martirhereje.PNG';
import martirmodeloderoles from './img/martirmodeloderoles.PNG';
import oportunistainvestigador from './img/oportunistainvestigador.PNG';
import oportunistamodeloderoles from './img/oportunistamodeloderoles.PNG';
import herejeinvestigador from './img/herejeinvestigador.PNG';
import herejeermitano from './img/herejeermitano.PNG';
import modeloderolesermitano from './img/modeloderolesermitano.PNG';
import modeloderolesmartir from './img/modeloderolesmartir.PNG';

import sindefinicion from './img/sindefinicion.png';
import simpledefinicion from './img/simpledefinicion.png';
import dobledefinicion from './img/dobledefinicion.jpg';
import tripledefinicion from './img/tripledefinicion.png';
import quadrupledefinicion from './img/quadrupledefinicion.png';

const importAll = require =>
  require.keys().reduce((acc, next) => {
    acc[next.replace("./", "")] = require(next);
    return acc;
  }, {});

const imagesPuertas = importAll(
  require.context("./img/puertas", false, /\.(png|jpe?g|svg)$/)
);

const imagesCanales = importAll(
    require.context("./img/canales", false, /\.(png|jpe?g|svg)$/)
  );

const imagesCruzes = importAll(
    require.context("./img/cruzes", false, /\.(png|jpe?g|svg)$/)
  );  


  const puertasImg = {
      1: 'https://i.imgur.com/d1IIrQC.png',
      2: 'https://i.imgur.com/TQbCUuT.png',
      3: 'https://i.imgur.com/GjbkWSf.png',
      4: 'https://i.imgur.com/cvpog41.png',
      5: 'https://i.imgur.com/YwVPWQ0.png',
      6: 'https://i.imgur.com/T3uY1lh.png',
      7: 'https://i.imgur.com/ruqoIUO.png',
      8: 'https://i.imgur.com/Mz6Dl4e.png',
      9: 'https://i.imgur.com/8Pnmk9y.png',
      10: 'https://i.imgur.com/dqIVeKd.png',
      11: 'https://i.imgur.com/VHUBRmK.png',
      12: 'https://i.imgur.com/h3ePDB8.png',
      13: 'https://i.imgur.com/4ikuwjt.png',
      14: 'https://i.imgur.com/mrZzGbz.png',
      15: 'https://i.imgur.com/F0sq2fS.png',
      16: 'https://i.imgur.com/sEj96db.png',
      17: 'https://i.imgur.com/ZjkJefy.png',
      18: 'https://i.imgur.com/HviqdOe.png',
      19: 'https://i.imgur.com/aUpbdUp.png',
      20: 'https://i.imgur.com/8UkORzg.png',
      21: 'https://i.imgur.com/SVEvZAQ.png',
      22: 'https://i.imgur.com/bijTWHb.png',
      23: 'https://i.imgur.com/Zt5ygSS.png',
      24: 'https://i.imgur.com/Lu2RteP.png',
      25: 'https://i.imgur.com/0vJDgEe.png',
      26: 'https://i.imgur.com/En1ap7c.png',
      27: 'https://i.imgur.com/0aFidPo.png',
      28: 'https://i.imgur.com/Rev6N9H.png',
      29: 'https://i.imgur.com/voxQYnV.png',
      30: 'https://i.imgur.com/6EqG8XV.png',
      31: 'https://i.imgur.com/wMIy518.png',
      32: 'https://i.imgur.com/o5Qel5m.png',
      33: 'https://i.imgur.com/zl6fkYL.png',
      34: 'https://i.imgur.com/muxQDHr.png',
      35: 'https://i.imgur.com/c1rGWem.png',
      36: 'https://i.imgur.com/mZnbIkS.png',
      37: 'https://i.imgur.com/dQ1CYGE.png',
      38: 'https://i.imgur.com/FzakUEL.png',
      39: 'https://i.imgur.com/P40CxxR.png',
      40: 'https://i.imgur.com/WlIy9y0.png',
      41: 'https://i.imgur.com/njy65Rs.png',
      42: 'https://i.imgur.com/p9jWGP7.png',
      43: 'https://i.imgur.com/jAREC9Z.png',
      44: 'https://i.imgur.com/IEcmDLX.png',
      45: 'https://i.imgur.com/OY2u8lN.png',
      46: 'https://i.imgur.com/drDXAjU.png',
      47: 'https://i.imgur.com/y7yVdbQ.png',
      48: 'https://i.imgur.com/jWd8Iia.png',
      49: 'https://i.imgur.com/ldmXjLF.png',
      50: 'https://i.imgur.com/93JpcgI.png',
      51: 'https://i.imgur.com/08RqofC.png',
      52: 'https://i.imgur.com/Hd7boNU.png',
      53: 'https://i.imgur.com/FWSCTBa.png',
      54: 'https://i.imgur.com/wls6sNN.png',
      55: 'https://i.imgur.com/qcvp9L2.png',
      56: 'https://i.imgur.com/D4RdqDs.png',
      57: 'https://i.imgur.com/uevnOrA.png',
      58: 'https://i.imgur.com/7olFAxZ.png',
      59: 'https://i.imgur.com/Cr6jfvo.png',
      60: 'https://i.imgur.com/cyqx68j.png',
      61: 'https://i.imgur.com/SYXO8Gj.png',
      62: 'https://i.imgur.com/EVKaqGW.png',
      63: 'https://i.imgur.com/r3T6tmK.png',
      64: 'https://i.imgur.com/u6ajqTS.png'
  };

  const canalesImg = {
    '1-8': 'https://i.imgur.com/qBpg0CJ.png',
    '2-14': 'https://i.imgur.com/SKWPwi9.png',
    '3-60': 'https://i.imgur.com/km9ddzC.png',
    '4-63': 'https://i.imgur.com/WJCjWfB.png',
    '5-15': 'https://i.imgur.com/RJjogb9.png',
    '6-59': 'https://i.imgur.com/qmrGokz.png',
    '7-31': 'https://i.imgur.com/DSFtpoQ.png',
    '9-52': 'https://i.imgur.com/molQKCT.png',
    '10-20': 'https://i.imgur.com/8X2QTmG.png',
    '10-34': 'https://i.imgur.com/HUz47fY.png',
    '10-57': 'https://i.imgur.com/M3b4AqW.png',
    '11-56': 'https://i.imgur.com/modBU3A.png',
    '12-22': 'https://i.imgur.com/vSts5si.png',
    '13-33': 'https://i.imgur.com/TFN1juG.png',
    '16-48': 'https://i.imgur.com/aQp7ww0.png',
    '17-62': 'https://i.imgur.com/U1IMhLj.png',
    '18-58': 'https://i.imgur.com/JcYTfrn.png',
    '19-49': 'https://i.imgur.com/uAyzSYW.png',
    '20-34': 'https://i.imgur.com/6KlX1RQ.png',
    '20-57': 'https://i.imgur.com/d8aUpmr.png',
    '21-45': 'https://i.imgur.com/u3jFc9B.png',
    '23-43': 'https://i.imgur.com/rCRUtAP.png',
    '24-61': 'https://i.imgur.com/iFcY4P0.png',
    '25-51': 'https://i.imgur.com/StEbvLK.png',
    '26-44': 'https://i.imgur.com/uFrC5ag.png',
    '27-50': 'https://i.imgur.com/vVQKjnN.png',
    '28-38': 'https://i.imgur.com/QI0nxbP.png',
    '29-46': 'https://i.imgur.com/55Vg60G.png',
    '30-41': 'https://i.imgur.com/0dAovuM.png',
    '32-54': 'https://i.imgur.com/LSWGDBd.png',
    '34-57': 'https://i.imgur.com/w9Lbvwv.png',
    '35-36': 'https://i.imgur.com/5Q8AthO.png',
    '37-40': 'https://i.imgur.com/shVvTQA.png',
    '39-55': 'https://i.imgur.com/3zuyLqh.png',
    '42-53': 'https://i.imgur.com/rA754Vo.png',
    '47-46': 'https://i.imgur.com/t9HqeXp.png'
  };


  const perfilesImg = {
    "2/5 - ERMITAÑO/HEREJE": 'https://i.imgur.com/CUAemq3.png',
    "2/4 - ERMITAÑO/OPORTUNISTA": 'https://i.imgur.com/OaTqNR6.png',
    "5/2 - HEREJE/ERMITAÑO": 'https://i.imgur.com/nEtRw96.png',
    "5/1 - HEREJE/INVESTIGADOR": 'https://i.imgur.com/7JYfNBY.png',
    "1/3 - INVESTIGADOR/MÁRTIR": 'https://i.imgur.com/lSNqskM.png',
    "1/4 - INVESTIGADOR/OPORTUNISTA": 'https://i.imgur.com/1mQKMV6.png',
    "3/5 - MÁRTIR/HEREJE": 'https://i.imgur.com/d0LNuk2.png',
    "3/6 - MÁRTIR/MODELO DE ROLES": 'https://i.imgur.com/rYVKfpw.png',
    "6/2 - MODELO DE ROLES/ERMITAÑO": 'https://i.imgur.com/rfaCAJl.png',
    "6/3 - MODELO DE ROLES/MÁRTIR": 'https://i.imgur.com/ophIJPG.png',
    "4/1 - OPORTUNISTA/INVESTIGADOR": 'https://i.imgur.com/LiwJ7yV.png',
    "4/6 - OPORTUNISTA/MODELO DE ROLES": 'https://i.imgur.com/Qxk1ioX.png'
  };

  const definicionesImg = {
      'Sin': 'https://i.imgur.com/7SJXCFg.png',
      'Simple': 'https://i.imgur.com/IN1aL3c.png',
      'Doble': 'https://i.imgur.com/TE1Bcgx.jpg',
      'Triple': 'https://i.imgur.com/odw5v8B.png',
      'Quadruple': 'https://i.imgur.com/5MT4nME.png'
  }

  const cruzesCompleto = [
    {
        cruz: 'Cruz Angulo Derecho de la Conciencia 3',
        img: imagesCruzes['conciencia.jpg'].default,
        texto: ['Con el Sol de Personalidad en la puerta 64 - Antes de Concluir - llegamos a la tercera variante de la Cruz de Angulo Derecho de la Conciencia. Necesitamos tener acceso a todo, y esa necesidad de acceder a todo hace que necesitemos también las fuerzas que nos sirven de inspiración. Cualquiera de los seres humanos que nacen con alguna de las variantes de la Cruz de la Consciencia están aquí para ser agentes de inspiración. Recuerda, sin embargo, la profunda ironía implícita en esto, y es que aquellos que inspiran a los demás son frecuentemente personas muy confundidas y llenas de dudas en su vida personal. Es decir, que el modo en que ellos integran esa presión mental en sus propias vidas es muy distinto al modo en que son absorbidos por aquellos que tienen acceso a esa inspiración.', 'La puerta 64 es el combustible que alimenta con su presión todo el proceso mental abstracto. Eso es algo que funciona es a partir de las experiencias que vamos recogiendo en cualquier momento presente y que queda almacenada en el Centro de la Cabeza. Esa información vuelve a irrumpir en nuestro proceso más adelante a través de las puertas de la Cabeza. No obstante, la manera en la que reaparecen varía en función de la puerta que les hace de filtro. Si se trata, por ejemplo, de alguien lógico, entonces volverán como una imagen fija de algo - un patrón del que sospechas algo o no - pero si el filtro es una puerta abstracta, entonces lo que aparecerá es una catarata de imágenes en movimiento - una secuencia de eventos. La gente de la puerta 64 vive siempre sometida a la incómoda presión de intentar hallarle un sentido a su pasado. Si le confiere a su mente capacidad decisoria, entonces tendrá muchas dificultades para hallarle sentido a sus experiencias, y toda su vida se le antojará un puro problema. Sin embargo, la gente de la puerta 64 tiene un don natural para ayudar a otros a resolver las dificultades que pudieran tener con su pasado. Es decir, que puede inspirar a otros y abrir con ello la posibilidad de beneficiarse a su vez de ello.', 'Siempre que me encuentro con un perfil que incluye alguna puerta mental recuerdo la importancia de explicar bien la temática inherente en esos casos. Tenemos millones de personas que se encarnan y viven confiriéndole capacidad decisoria a su mente, convirtiéndola en la fuerza dominante de su existencia. La creencia de que la mente está dotada de autoridad interna está causando muchos problemas a la gente. He trabajado con muchas personas de la puerta 64, y he podido observar los cambios que se producen en el plano mental de sus vidas cuando aprenden a canalizarlo correctamente. Recuerda que la mente humana no es algo de lo que nos podamos librar. No puedes impedir que la puerta 64 siga dándole vueltas al pasado, pero si reconoces y recuerdas que la mente no tiene autoridad interna, entonces todo es diferente. Sin embargo, no basta con decirle a la mente - como carece de autoridad interna - que se calle, porque no lo hará.', 'La mente solamente aceptará quedarse sin mando sobre tu vida cuando la autoridad haya sido transferida al lugar donde corresponde. Uno de mis entretenimientos favoritos consiste en observar todas las cosas que mi mente me dice que haga: "Tienes que hacer esa llamada, o realmente deberías hacer esto, o aquello." Mientras estoy sentado en mi despacho y miro la pila de 25 lecturas pendientes que se amontona delante de mí, mi mente no puede dejar de insistir: "Realmente deberías ocuparte de eso". Mientras tanto, mi cuerpo no se mueve en ninguna dirección, no me levanto a coger la cinta, ni tampoco enciendo las máquinas. Observo y compruebo que mi cuerpo permanece inmóvil. Eso hace que mi mente se sienta muy avergonzada, ya que sabe que ha perdido toda su autoridad sobre mi vida. Simplemente se pone a buscar una salida pensando: "Bueno, ya que no vas a ocuparte de todas esas cosas, quizás debería buscarte alguna otra ocupación", y se pone a buscarla con la misma desesperación que antes. Es inútil que te pongas a pelear con ella, porque se pondrá a argumentar contigo y te ganará la partida. Todo lo que puedes hacer es transferir la autoridad a donde corresponde en tu naturaleza, y comprobar luego por ti mismo la profunda bendición que eso supone.  Tu mente te confunde tanto como te maltrata. La mía solía volverme completamente loco. Siempre quería que estuviera haciendo algo. Pero si entiendes que eso es lo que a la mente le gusta hacer, que le gusta hablar de esas cosas - de lo que hay que hacer y todo eso - que ese es el hábitat natural de la mente, entonces no necesitas pelearte con ella. Si tienes esta puerta abstracta, que te recuerda siempre imágenes de tu madre en la cocina de casa, no es preciso que conviertas eso en un problema psicológico. No lo conviertas en: "¿Por qué siempre me como el coco con mi madre en la cocina? ¿Qué significado tiene eso?", porque no te ayudará en nada. Si le confieres autoridad a esa línea de pensamiento, simplemente acabarás sufriendo por ello. Las personas que nacen con esta cruz de encarnación padecen una profunda ansiedad mental. Viven sometidas a una presión mental constante, por lo que la gente portadora de puertas mentales son las que sufren mayores dolores de cabeza y las que más problemas tienen con la vista. ']

    },
    {
        cruz: 'Cruz Angulo Derecho de la Conciencia 4',
        img: imagesCruzes['conciencia.jpg'].default,
        texto: ['La quinta línea de la puerta 5 es la única que te dice cómo iluminarte, de modo que te puedes hacer una idea de la magia inherente en esta puerta. No te pierdas luego echar un vistazo a las diferentes líneas de esta puerta. Te da instrucciones tan verdaderamente simples, que lo único que tienes que hacer es seguir esas directrices, tomarte una taza de sopa, apagar luego las luces, y esperar a que aparezca el resplandor. En la puerta 5 de "la Espera" - ¿te das cuenta ahora? - tenemos el cuento de la iluminación. Con la gran puerta de la espera, uno no hace absolutamente nada, simplemente mantiene la boca abierta y los peces entran al son de la vida. Es así de simple. Solamente permaneces flotando alrededor de tu propia vida. ', 'La puerta 5 tiene una cualidad universal, ya que forma parte del diseño de todas las formas vivas, y representa, por tanto, un aspecto fundamental de la vida. Se trata de la fuerza generadora que existe en el mismísimo nivel celular de nuestra existencia. La puerta 5 es, de hecho, lo que cambia en tu vida, a medida que cambias tú viviendo a través de tu diseño. Esta es la puerta que determina el patrón básico que rige el desarrollo de tus células. Es también el modo en que queda almacenada tu memoria celular. Todos los cambios que se producen en tu sistema son procesados a través de la puerta 5. ', 'Todo lo relacionado con la puerta 5 gira en torno a la naturaleza de los patrones, y no sólo de los patrones, sino al reconocimiento de que existimos dentro de un patrón que no podemos modificar por más que nos apremie. La promesa de la "paz interior" que nos hace la línea 5.2 se cumple solamente cuando aceptamos el patrón sin condiciones. Al tratar con esta cuarta variante de la Cruz de Angulo Derecho de la Conciencia, lo primero que tenemos que reconocer es que la conciencia misma existe dentro de un patrón. Estas son personas que tienen un reconocimiento muy profundo de los patrones, y con ello desarrollan una función que es muy importantes para nosotros. ', 'Yo iba por la vida sin fijarme nunca en sus coincidencias, hasta que llegué al Diseño Humano y comencé a trabajar con los patrones, con los diseños de la gente, con los números y todas esas cosas. Los patrones - la repetición constante de un patrón - están por todas partes a todas horas en todo lo que vemos. Hasta que llega un momento en el que te percatas de que eso es todo lo que hay; la vida sigue un patrón. Entonces te das cuenta del chiste, de que tú eres el patrón mirando al patrón que hay dentro del patrón. Ahí es cuando simplemente te rindes, y eso es la iluminación. Que el río simplemente fluye, y todo está buenísimo.  ', 'Resulta tan absurdo que a la gente le resulta difícil. Es cierto - algo que le debemos a la densidad del plano mental. Mientras te mantengas aferrado a ese último vestigio de autoridad: "Pero algo habrá que podamos hacer." He encontrado a gente que, de hecho, así me lo ha dicho. Yo les respondo: "Bueeeeno, haz lo que puedas. Que nada te detenga." Pero la realidad es que existimos dentro de un patrón, y que no hay nada más allá de ese patrón. De ahí que esta "Espera" conlleve un profundo potencial místico en ella; de permitir que las cosas se hagan solas. Ahí es donde reside nuestra gloria humana. En permitir que ocurran, mientras seguimos esperando.  ', 'Recuerda que esperar no es detenerse. Se trata de esperar en el flujo y devenir de las cosas, de esperar en el flujo del tiempo, de esperar en el flujo y movimiento de la vida, de esperar en el flujo de la mutación, pero siempre en actitud de espera. Esperamos siempre a que las cosas ocurran. No importa cuál sea tu tipo, ni cuál sea tu naturaleza, estás aquí para eso - abre tu boca, flota dejándote llevar por la corriente, y más tarde o más temprano algo entrará en ella. Así es como funciona, y cuando vives la naturaleza de tu tipo y llevas a cabo el experimento de ser tú mismo comienzas a reconocer la esencia de esa verdad. Las cosas correctas aparecen ante ti sin necesidad de que tengas que salir a buscarlas, y sin necesidad de sufrir porque no acabas de encontrarlas. ', 'Esa es la posibilidad inherente en las personas de esta cruz; la de reconocerse a sí mismas como una forma de conciencia que obedece a un patrón natural. A través de la habilidad de esta encarnación para reconocer los patrones, estas personas tienen, quizás, la oportunidad de comprender que ellas mismas también son un patrón. Es divertido comprobar que, al mirar a través de tus ojos, lo único que no puedes ver es tu propia cara - eso te impide ver que también tú respondes a un patrón. Simplemente miras a todos los demás patrones, y de repente te encuentras con ese increíble momento en el espejo en el que te das cuenta: "Oh, Dios mío, pero si yo también soy uno de ellos." ']
    },
    {
        cruz: 'Cruz Angulo Derecho de la Consciencia 1',
        img: imagesCruzes['conciencia.jpg'].default,
        texto: ['Con la posición del Sol y de la Tierra de Personalidad en las puertas 63 y 64 respectivamente, ambas puertas colectivas, es la primera vez que llegamos a una puerta situada en el Centro de la Cabeza, que es uno de los centros de presión. La puerta 63 es donde se originan todas las dudas y las sospechas humanas. Para que una sociedad pueda sobrevivir es preciso que disponga de patrones fiables conocidos, con los que poder funcionar y sentirse suficientemente protegida. La civilización y las sociedades se desmoronan cuando no disponen de esos patrones fiables por los que regirse. La puerta 63 se ocupa de formular preguntas, y esas preguntas están basadas en la incertidumbre y la sospecha acerca de los patrones. Llegados al punto en que entra en juego este tipo de cruz de encarnación, tenemos el advenimiento de algo nuevo, y es el comienzo de nuestra capacidad de codificar los patrones. ', 'Este es su vínculo con la puerta 5, que es la puerta de los patrones, y que está en la raíz de nuestro proceso celular, estableciendo si se trata de un patrón celular o de un patrón de la vida. Al mismo tiempo, la Tierra de Diseño posicionada en la puerta 35 representa la culminación del proceso experimental de los deseos, que nos indica si se han cumplido o no las expectativas.  ', 'La confusión de la puerta 64 la fuerza a mirar constantemente sobre su propio pasado, por lo que representa el inicio de la estimulación de todo el proceso mental. Aquí es donde la mente comienza a reclamar para sí la autoridad de tomar decisiones. Lo hace desde el preciso instante en que te adentras en un "maya" que ha sido construido por la mente, y sólo cuando has profundizado mucho en tu formación comienzas a comprender que la mente es subjetiva y carece por completo de autoridad interna para decidir. Sin embargo, para la inmensa mayoría de la humanidad, la mente ha sido lo único a lo que han conferido todo su poder decisorio.  ', 'De modo que tenemos aquí el nacimiento del plano mental, donde todo el mundo está tratando de comprobar si las cosas funcionan como supuestamente debieran. No estamos tratando ya del aspecto físico y sexual de nuestras vidas, ni de cuestiones tan básicas como la comida, porque todas esas cosas ya están presentes en el programa evolutivo. Aquí hay algo que nos está diciendo: "Mirad, tenemos que elevarnos por encima de esas cosas. Hay algo más que debemos explorar. ¿Por qué estamos aquí? ¿Cuál es nuestro propósito? Esto es lo que nos trae la Cruz de Angulo Derecho de la Conciencia.  ', 'Esta es gente que ha nacido para hacer preguntas. Como las demás cruces de ángulo derecho, la Cruz de la Conciencia puede darse con cuatro variaciones distintas. La experiencia de la cruz es muy diferente si pasamos del Sol de Personalidad en la puerta 63, con su foco puesto en las preguntas y enclavada en el Cuarto de la Iniciación, al Sol posicionado en alguna de las otras puertas de esta cruz. Los temas cambiarán en función de la posición del Sol de Personalidad, pero en esta primera variante de la Cruz de la Conciencia tenemos el primer intento de organizar el mundo mentalmente, y no es inicialmente una cuestión de conciencia, sino de presión. Vivimos sometidos a una enorme presión de tener que ordenar las cosas mentalmente. Por más Babas y Gurús que te hablen de la "No-mente", y por bien que suenen esas palabras en tus oídos, la realidad es que la experiencia de la "No-mente" no es posible hasta que no hayas aprendido a manejar la mente y a tratar correctamente con ella, y a responder a todas las cuestiones que necesitan ser contestadas desde tu propio interior. Si no encuentras las respuestas necesarias en tu propio fuero interno, acaso porque nunca te hayas planteado alguna de esas cuestiones importantes, es porque hay una parte de ti que no está viviendo correctamente en el ahora. La verdad es que siempre está presente; de eso precisamente es de lo que trata la conciencia que se deriva de esta cruz. Hay una presión increíble que no para de preguntar: "¿Por qué? ¿Por qué? ¿Por qué? Este es el porqué. Uno de los apodos preferidos de Ra para referirse a la Tierra es llamarle el "planeta de los porqués".  ']
    },
    {
        cruz: 'Cruz Angulo Derecho de la Esfinge 1',
        img: imagesCruzes['esfinge.jpg'].default,
        texto: ['El Sol de Personalidad posicionado en la puerta 13, dentro de la Cruz de la Esfinge, condicionará el funcionamiento de esta cruz de un modo muy específico. Esta cruz tendrá que operar a través de los temas representados por la puerta 13 - una puerta de tener mucha empatía y mostrar apertura hacia los demás. La puerta 13 es parte del canal del hijo pródigo, y trata de la capacidad de almacenar información acerca de las experiencias del pasado. También trata de la capacidad de mantener los secretos ocultos en su interior hasta que llegue la hora de sacarlos a la luz. Esta cruz de Angulo Derecho de la Esfinge es muy común, y les confiere a sus portadores la capacidad de ofrecer dirección y guía a los demás. ', 'Su modo de dar esa dirección estará condicionado por las dinámicas de la puerta 13. Es decir, que la puerta 13 siempre avanza mirando retrospectivamente hacia atrás, hacia el pasado. De ahí su reminiscencia, su constante deseo de recordar, su afán por recolectar experiencias. En esta puerta se hunden las raíces de lo que llamamos historia. Por tanto, cuando te encuentres con alguien que sea portador de la puerta 13 como activación principal de esta cruz, no le preguntes a dónde irá mañana, porque estas personas no están aquí para eso. Pregúntales lo que sucedió ayer, o lo que ocurrió el mes pasado, y podrás reconocer el valor de la guía y la dirección que son capaces de ofrecer. ', 'Es preciso recordar algo acerca de las personas portadoras de la Cruz de la Esfinge, ya que son tremendamente importantes para nuestro desarrollo evolutivo. Todo el mecanismo de la Esfinge está enraizado en las puertas 1 y 2 que, en última instancia, reciben desde abajo la energía Sacral de la puerta 14 - el que custodia las llaves - necesaria para traer al mundo la fuerza de la mutación que imprime dirección a nuestra trayectoria evolutiva. La Esfinge siempre representa una dirección nueva para la forma. En algún momento llegaremos a un punto en nuestra evolución en el que la gente se reunirá en función de sus cruces de encarnación. Las cuatro variantes de la Cruz de Angulo Derecho de la Esfinge pertenecen a gente que tiene su Sol en la puerta 13, en la 7, en la 1 y en la 2. Solamente juntando las cuatro variaciones posibles llegaremos a tener una perspectiva real sobre nuestra dirección evolutiva. Después de todo, cada una de ellas tiene su propio camino y su propia forma de orientarse en él. Por supuesto que acaban por influenciar con su forma a todos los que se cruzan con ellas en el camino.  ', 'Si alguien de la Cruz de la Esfinge está en la cola del supermercado, las personas que tiene delante y detrás de él están todas bajo el influjo de su aura. Las está dirigiendo imprimiéndoles una dirección nueva. Si se trata de alguien con la primera variante, con el Sol en la puerta 13, entonces la persona que está a su lado comenzará súbitamente a pensar en algo que le ocurrió el día anterior. De repente se pone a pensar: "¿Por qué tomé ayer esa dirección?" Ese proceso, sin embargo, ha sido puesto en marcha por la persona de la Esfinge que tiene a su lado.  ', 'A partir del momento en que puedes dejar atrás tu vanidad personal, comienzas a entender algo - que todas las personas que tienen la Cruz de la Esfinge nos están dirigiendo a todos. Puede que nos estén volviendo locos con su dirección, pero nos están dirigiendo. No hay nada que podamos hacer por evitarlo. Todos juntos representan ese tema dentro del programa que le da dirección a la totalidad.  ', 'Si elimináramos a todos los que tienen la puerta 10 en su diseño, nadie sabría cómo comportarse. El mundo sería un lugar salvaje en el que nadie sabría cómo sobrevivir, y simplemente nos moriríamos todos. La verdad es que cuando dejas de tomártelo como algo personal, reconoces como todo encaja en la totalidad. Lo puedes ver en tu propio diseño individual. Sólo tienes que fijarte en todos los espacios en blanco que hay en tu diseño. En el programa informático existe la opción de revertir cualquier diseño, para que muestre todas las puertas y canales que no están activadas en la Carta del Rave. De las 64 puertas que existen, puede que haya activación en 20, y luego están todas las demás puertas y canales sin activación alguna. Es importante reconocer de dónde recogemos esa información, ya que vivimos en un mundo igual de condicionante para todos. Todas las personas de la Cruz de la Esfinge que andan por ahí empujándonos en distintas direcciones son necesarias para todos. Sin embargo, también es cierto que no podemos fiarnos de la perspectiva subjetiva de cada una de ellas -  deberíamos convocar una convención de esfinges. Si no hay primero una convención de esfinges, entonces no te fíes, porque es todo una cuestión de perspectiva.  ', 'Esta Esfinge de Angulo Derecho no está interesada en darle dirección a nadie. ¿Por qué debería estarlo? Como ser de Angulo Derecho solamente le interesa encontrar una dirección para sí mismo, aunque luego se sienta perdido la mayoría del tiempo. Esta persona vive absorta en sí misma, tratando de averiguar si es o no es la dirección que debe seguir en su vida. Por eso, cada vez que pasa al lado de alguien está prestando un servicio de mucho valor. Puede que en su vida personal esté desorientada y desubicada, pero todos los demás tienen la oportunidad de orientarse a partir del trato con ella.  ', 'Cuando veas que alguien tiene en su diseño la Cruz de la Esfinge, lo primero es ver dónde tiene el Sol. Te dirá mucho acerca del propósito de la vida de esa persona. Si naces con esa cruz, estás aquí para crear un pasado vivo y vibrante con todo lo que haces en esta vida. Estas son personas que aman su pasado, y poseen diarios y anotaciones de pequeños momentos en los que fueron a ver esto o tuvieron aquello otro. Su pasado les dejó todas esas cosas como herencia. Son el fruto de haber vivido absortas en sí mismas, y son, después de todo, un aspecto necesario para todos. Una de las principales cosas que debes entender acerca de la naturaleza de la Esfinge, al margen de la opinión que te merezca la persona que es portadora de esa cruz, es que se trata de una estructura que tiene un impacto tremendo sobre todos los que le rodean.  ', 'Esta cruz marca el inicio del proceso de encarnación. Reflexiona acerca de esto. No es una arbitrariedad que empecemos aquí. Este es el lugar del comienzo porque este es también el final. Este es el verdadero Alfa y Omega, en el sentido de que determina el funcionamiento del programa. Cuando llegue el tiempo en que este mundo que habitamos y las formas que tenemos pasen a ser historia, podremos ver en los temas más globales e importantes que el movimiento del equinoccio otoñal cae en la puerta 13. Con otras palabras, este es el lugar dónde todo comienza y donde todo termina.  ', 'Recuerda que este es el Cuarto de la Iniciación, y que este cuarto no trata de ninguna otra cosa que de la mente humana. Este es el tema en el que todos estamos atrapados. Es lo que nos hace diferentes a todas las demás especies. Se trata de esta increíble iniciación de la mente que podemos encontrar en este cuarto. Comienza con "La Comunidad del Hombre", esta puerta que ejerce una influencia tan enorme sobre el proceso abstracto debido a su capacidad de recolectar en su memoria toda la experiencia de los seres humanos. Esa capacidad de recordar, y en última instancia la capacidad de articular a partir de esos recuerdos es lo que nos permite dar saltos enormes en nuestra habilidad para crear un maya mental tan denso como el que conocemos. De ese modo podemos, finalmente, tras milenios y milenios de frustración, averiguar cómo funcionan de verdad las cosas básicas de la vida. Pero estamos aquí en los dominios de la mente, de modo que cuando te encuentres con alguien que, siendo una Esfinge, tiene su Sol en la puerta 13, sabrás que se trata de alguien con la energía para comenzar y acabar las cosas.', 'Una persona con el Sol en la puerta 13 entiende realmente la cita que dice: "el futuro es el pasado corriendo hacia nosotros". Aquí es donde podemos encontrar todos nuestros clichés acerca de la historia repitiéndose a sí misma y todas esas cosas. Todos esos clichés proceden de la temática inherente en la puerta 13. La primera variación de una Cruz de Angulo Derecho con el Sol en la puerta 13 es un 1 / 3. La estructura siempre tiene que comenzar desde el nivel más primario, con el Sol de Personalidad en línea 1 y el Sol de Diseño en línea 3, lo que indica que si los fundamentos no son sólidos será necesaria la anarquía. Si los fundamentos no son correctos, entonces hay que derribarlos para construir una nueva base capaz de sostener la vida. ', 'Cuando nace este tipo de Esfinge, su propósito consiste en descubrir todos los fundamentos que no funcionan. Ese es su trabajo, y esa es la memoria que acumulará en su mente. Esta acumulación de memorias servirá a uno de los dos propósitos siguientes: para sufrir como un mártir, lleno de pesimismo para el resto de su vida, o para descubrir en ese proceso algo de enorme valor para todos; todo lo que no funciona y que debe ser erradicado de nuestras vidas. Estas personas son, por todo ello, unos guías muy importantes para nosotros.  ', 'Cuando el Sol de Personalidad está en la línea 4 de la puerta 13, el Sol de Diseño se desplaza del hexagrama 1 hacia el hexagrama 43. Obviamente, con este desplazamiento tenemos una configuración completamente distinta.  ']
    },
    {
        cruz: 'Cruz Angulo Derecho de la Esfinge 2',
        img: imagesCruzes['esfinge.jpg'].default,
        texto: ['Hemos dejado atrás la puerta 24 - El Retorno - que es parte de la Cruz de los Cuatro Caminos, y entramos en un nuevo campo. Entramos ahora en la puerta 2, la puerta del chofer, que es la dirección para las tres perspectivas que nacen de las puertas de la Esfinge. Recuerda que comenzamos con la puerta 13 en Acuario, y que ahora entramos en el segundo cuarto para encontrarnos con la segunda variante de esta misma cruz. Es decir, que tenemos aquí la misma Cruz de la Esfinge, sólo que ahora aparece con el Sol de Personalidad en la puerta 2 en lugar de en la puerta 13.  ', 'Si contemplas detenidamente el corte de las líneas del hexagrama 2 podrás comprobar que las primeras dos líneas que lo conforman son líneas yin / yin. Si haces lo propio con los quince hexagramas que siguen a la puerta 2 en este Cuarto de la Civilización, comprobarás que también aquí las dos primeras líneas siguen teniendo una naturaleza yin / yin. Ese es el elemento vinculante a lo largo de todos los hexagramas integrados en este cuarto. Esos dieciséis hexagramas se dividen también en dos grupos de ocho hexagramas cada uno - algo que veremos repetirse a medida que avanzamos por cada uno de los cuartos. En el primer grupo de ocho - los hexagramas que van del 2 al 12 - las tres primeras líneas son yin / yin. De modo que en ocho hexagramas seguidos tenemos la misma base de tres líneas yin. En el segundo grupo de ocho hexagramas - los que van del 15 al 33 - solamente las dos primeras líneas siguen siendo yin, mientras que la tercera línea ha pasado a tener una naturaleza yang.  ', 'Nos encontramos aquí en el Reino de Duhbe, en el Cuarto de la Civilización, que comienza con una de las puertas de la Cruz de la Esfinge. Como en cada cuarto, hay una puerta de la Cruz del Receptáculo del Amor justo en medio del cuarto, y luego concluye y se cierra con una de las puertas de la Cruz de los Cuatro Caminos (en este caso con la puerta 33 de la Retirada). Esta estructura inherente a todos y cada uno de los cuartos debe ser asimilada con profundidad para tener un entendimiento claro de la temática inherente en cada uno de ellos.  ', 'Si intentamos ubicar en el mandala zodiacal las puertas correspondientes al Centro de la Garganta, podemos ver que todas y cada una de ellas están incorporadas en este campo evolutivo de la civilización. Por ello, si tuviéramos que darle otro nombre a este cuarto, lo podríamos definir como el cuarto de la manifestación. Aquí todo gira en torno a la capacidad de hacer todo tipo de cosas, de construir y elaborar todo tipo de objetos. Obviamente, entre sus dones se cuenta también el potencial para verbalizar, un aspecto acústico que nos permite manifestarnos de un modo articulado y expresar nuestra naturaleza de muchas formas diferentes. Pero la verdadera base de este Cuarto de la Civilización está en la presión que ejerce sobre nosotros para que nos manifestemos en el mundo a través del Santo Grial de nuestro diseño individual, que es el Centro de la Garganta. Todo en la vida gira en torno a las mecánicas de la Garganta, ya que es ahí donde el feto comienza el desarrollo de la forma de su diseño. Toda nuestra historia se escribe en función de cómo aprendemos a manejar el potencial para la manifestación que el Centro la Garganta pone a nuestra disposición, y es ahí donde podemos comenzar a distanciarnos de no ser más que bestias inteligentes.  ', 'Ese es un proceso que comienza en la puerta 2 - El Receptivo. En un nivel básico y fundamental, esta es la más fascinante de todas las puertas. En esta puerta está el asiento del chofer del vehículo, y es también donde se ubica el Monopolo Magnético. Aquí está el lugar del cual emana la ilusión de nuestro existir por separado, la conexión con nuestra geometría individual en la vida y con nuestro movimiento evolutivo en el espacio. Al contemplar la puerta 2, lo que estamos viendo es la única manera en la que todos recibimos nuestra dirección en la vida. Sabemos que, a través de la Esfinge, esa dirección puede ser expresada a través de diferentes perspectivas. Es decir, a través de la perspectiva abstracta de la mirada retrospectiva de la puerta 13, a través de la perspectiva lógica orientada hacia el futuro de la puerta 7, y a través de la perspectiva individual que simplemente está presente en el momento oportuno. Sin embargo, las tres perspectivas se nutren de la misma receptividad y enraízan su dirección en las mecánicas de la puerta 2.  ', 'De modo que con la segunda variante de la Cruz de Angulo Derecho de la Esfinge llegamos al tema verdadero y fundamental de la dirección evolutiva de la humanidad entera, porque eso es lo que representa siempre la puerta 2. El Diseño Humano siempre trae momentos de puro deleite en la comprensión de la naturaleza de las cosas, y uno de esos momentos lo podemos encontrar en el reconocimiento de la naturaleza de nuestra dirección básica en la vida, porque esta cruz primaria de la dirección tiene el Sol de Personalidad en la línea 2.1, que gira enteramente en torno a la belleza. Se trata, por tanto, de una dirección hecha de belleza, tanto si esa belleza está presente de un modo natural como si uno tiene que trabajar duro para llegar hasta ella. Esa es una de las cosas más bellas que debemos entender acerca de nuestra evolución y de nuestra dirección; que nos estamos moviendo siempre en función de lo que reconocemos como una expresión de lo bello.  ', 'Las esfinges nos dan dirección, pero debemos tener en cuenta las diferencias en función de la perspectiva que cada esfinge nos ofrece. Si te encuentras con alguien que tenga su Sol en la puerta 13 en la cola del supermercado, acabarás enfocando después la dirección de tu vida a partir de algo que ya ha tenido lugar en el pasado, ya que esa es la dirección ofrecida por esa esfinge en particular. Sin embargo, si la persona con la que te encuentras es una Esfinge de esta segunda variante - con el Sol en la puerta 2 - entonces es alguien que abre todas las perspectivas para ti. Esa es la belleza de esta cruz de encarnación, que abre simultáneamente todas las posibilidades de la dirección. Con el Sol de Personalidad en la puerta 2, estas personas están mucho más abiertas a todas esas posibilidades y a ver y describir las cosas desde todos los ángulos posibles.  ', 'Si te toca hablar con alguna de estas personas, puede que su comunicación resulte un tanto confusa. Una de sus dificultades estriba en que a pesar de saber cuál es la dirección, tienen limitaciones severas a la hora de saber describirla a otros. De algún modo consiguen señalar hacia algo que está en el futuro, o hacia algo que ha quedado atrás en el pasado, o intentando hacer camino en el momento presente...., pero siempre señalando la dirección a seguir. Si le preguntas a estas personas: "¿Qué es lo que debo hacer?" lo único que te dirán en el fondo es la dirección que deberías seguir según su criterio. No te pueden prestar más ayuda que señalarte el camino a seguir en tu proceso individual. Aunque todo lo demás se vuelva confuso, eso no disminuye la importancia de disponer de fuerzas de este tipo en nuestra vida.  ', 'Como estamos abriendo aquí un nuevo campo de la experiencia humana, una de las primeras cosas que debemos entender es que la creación de la belleza depende de nosotros mismos. Nosotros somos responsables de construir un mundo para nosotros, y si nuestro mundo acaba siendo un mundo feo, entonces la culpa será nuestra. Pero si logramos que el mundo que creamos sea hermoso, ¿no significa eso que nosotros somos maravillosos? En todo caso, la responsabilidad de hacer algo al respecto es enteramente nuestra. De algún modo, se podría decir que este es el código genético de los basureros, ya sabes. Los que limpian y recogen la mierda que otros dejan tirada.  ']
    },
    {
        cruz: 'Cruz Angulo Derecho de la Esfinge 3',
        img: imagesCruzes['esfinge.jpg'].default,
        texto: ['La esfinge trata siempre de la capacidad de dar dirección a otros, pero que la diferencia en el funcionamiento de cada variante de la misma cruz viene determinada por el tema de la posición de su Sol de Personalidad. Para ver ese tema en el movimiento que «quiere tomar» hacia su propia realización, tenemos que considerar también la puerta armónica que completa el canal donde se ubica el Sol en el gráfico. Esa puerta armónica nos señala el camino que esa dirección quiere tomar para realizarse. En el contexto de la puerta 7, una puerta asociada a nuestros roles de liderazgo lógico, su rol     siempre está buscando alguna forma de ser influyente (la puerta armónica 31).  ', 'Analizando los cuatro brazos de la Cruz de la Esfinge, tenemos que dos de ellos son de naturaleza individual  en  el cálculo prenatal de Diseño - el eje de las puertas 2 y 1. Las otras dos puertas son colectivas, con la apertura natural a los desconocidos inherente a la puerta 13 - una puerta cuya atención se centra en el pasado - y la puerta 7 - que es parte de proceso lógico - y que mira siempre hacia delante intentando proyectarse hacia el futuro. Esta es la más activa de las variantes de la Cruz de la Esfinge, ya que aquí se encuentran aquellos que tienen un deseo real de llegar a ser directores y dar dirección a los demás. Su Sol de Personalidad posicionado en la puerta 7 lleva inherente el deseo de ser capaz de liderar, porque ese es el rol que tiene que jugar en la vida. No es aquí donde corresponde desglosar los pormenores de la profundidad en las diferencias que hay entre los mecanismos del ángulo derecho, la yuxtaposición y el ángulo izquierdo. Es algo que tendrá que esperar para otra ocasión.  ', 'Sin embargo, hay algo que deberás tener siempre en cuenta cuando estés tratando con una puerta de roles como la que nos ocupa, tanto más en cuanto que este es un cuarto en el que nos iremos topando con varias de esas puertas que configuran la naturaleza de los roles humanos. Un ejemplo idóneo de esto lo tenemos en el hecho de que la línea 7.1 es la del autoritarismo. Es decir, que si naces con el Sol de Personalidad en la primera línea de la puerta 7, serás alguien que activamente desea llegar a ser un líder de tipo autoritario. Serás alguien que busque llegar a esos lugares en los que se te permite ejercer influencia y se te da acceso a ejercitar esa forma de autoridad. Pero si naces con el Sol en la segunda línea, tu liderazgo tendrá una cualidad democrática. Por supuesto que seguirás deseándolo de un modo activo, pero simplemente te dedicarás activamente a intentar conseguir para ti el voto de los demás, en lugar de intentar activamente imponerle a otros tu criterio acerca de lo que deben o no deben hacer. Los líderes que nazcan con el Sol en la tercera línea de la puerta 7 serán líderes anárquicos, que activamente desearán el derrocamiento de ciertas estructuras. Al fin y al cabo, hay dos tipos de políticos: los que prometen la llegada de algo nuevo, y los que prometen librarnos de algo viejo. Los líderes anárquicos son los que nos van librando de lo viejo, no es que sea nada demasiado glamoroso. Al llegar a la cuarta línea del hexagrama nos encontramos con una forma de liderazgo completamente distinta. Aquí tenemos a alguien que aceptará la oportunidad de liderar, pero que está realmente seguro de su capacidad de liderazgo, por lo que siempre está dispuesto a que ese liderazgo vuelva a desaparecer de su vida abdicando de él. Dicho de otro modo, lo que quiero mostrar aquí son los temas generales que hay engranados en la estructura misma de un hexagrama, y que en la puerta 7 reflejan diferentes maneras de buscar la influencia a través de un liderazgo activo que desea ser una esfinge, que busca la oportunidad de dar dirección a los demás. Es solamente para que entiendas todas las sutilezas que subyacen a la temática de una cruz. La persona necesita poder jugar su papel en la vida, y la naturaleza de ese papel estará determinada por el matiz activado en la mecánica de la cruz.  ', 'No quiero dejar de mencionar el hecho de que, cuando comencé a enseñar el Índice Global de las Encarnaciones, tenía la intención de hacer entender a todos algo realmente profundo. Ten en cuenta que no estamos viendo nada más que temas generales, y que bajo la posición del Sol de Personalidad en la primera línea de la puerta 7 hay 1.080 variantes específicas del mismo tema. Sólo en esa línea existen subyacentemente 1.080 variaciones distintas. De ahí que la razón de fondo en mi decisión de introducir el Índice Global de Encarnaciones fuera la de tener una oportunidad de presentar todos los pormenores de este conocimiento. Aquí el nivel de la lógica comienza a tener tanta profundidad que se vuelve realmente incomprensible. Sí, el índice comienza aquí con la configuración de cada una de estas cruces, pero las cruces siguen siendo un elemento que está en la superficie misma de las cosas, y hay muchos ingredientes por debajo que matizan su realidad. En realidad, los ejemplares vivos de cada una de las variaciones de cada cruz son más bien escasos, lo que permite que te hagas una idea clara y valores a fondo - desde una perspectiva lógica - el increíble valor inherente en tu propia vida. Nadie es tan sustituible que haya cientos o miles o millones de ejemplares de humanos exactamente iguales que puedan ocupar su puesto, porque cada una de las variantes de estas cruces tiene peculiaridades realmente extraordinarias. Todos venimos al mundo sobre una de estas cruces de encarnación, pero la variante particular de nuestra cruz no es visible en la gran imagen que vemos en la superficie, sino que viene determinada por matices que existen en niveles mucho más profundos del hexagrama y de la línea específica que está activada en cada caso.  ']
    },
    {
        cruz: 'Cruz Angulo Derecho de la Explicación 2',
        img: imagesCruzes['explicacion.jpg'].default,
        texto: ['Cuando examinamos la primera variante de la Cruz de Angulo Derecho de las Explicaciones, teníamos el Sol de Personalidad en la puerta 49, por lo que estaba enraizada en la revolución y en la violencia. Ahí pudimos ver la relación entre nuestra necesidad de ser capaces de matar y de sacrificar otras formas de vida y el nacimiento de nuestros impulsos religiosos. Pero aquí la temática de esta cruz nos muestra un lado distinto, porque en esta Cruz de las Explicaciones el Sol de Personalidad opera a través de la puerta 23. El Canal 43/23 es una de las tres definiciones que se forman por oposiciones en el mandala zodiacal. Con una mente tan fija conectada al Centro de la Garganta, aquí es donde la Cruz de las Explicaciones adopta verdaderamente su naturaleza más pura. La puerta 23 es la puerta de la asimilación, y gira enteramente en torno a la capacidad de saber explicar lo que uno quiere decir. Este es un ingrediente esencial en la vida de estas personas, que no pueden nunca dejar de dar explicaciones acerca de todo. ', 'Hay un chiste inherente en la individualidad. La conciencia colectiva incluye todas las cosas que ya han quedado establecidas y nos resultan familiares, por lo que son aceptadas por todos. Pero en el caso de la individualidad surgen conceptos, expresiones y maneras de decir lo que sea que ha de encarnar lo nuevo, que tienen una naturaleza mutante. Es decir, que la primera vez que los escuchas pueden sonar muy raros y desconcertantes. Es así por la sencilla razón de que cuando el individuo intenta explicarle su saber a alguien puede emerger con una estructura que nunca había sido concebida antes. Sin embargo, la estructura de la individualidad lleva incorporado un tipo de mecanismo que fuerza a la persona a repetirlo una y otra vez. Al cabo de un rato, se acaba haciendo familiar. Algo semejante lo tenemos en el ejemplo de Ra hablándonos de la existencia de cristales de personalidad. Seguro que la primera vez que se lo dijo a alguien, esa persona pensó: "Caramba, este tío dice cosas raras. ¿A qué se referirá?" Pero ahora hay suficiente gente diciendo por ahí: "cristales de personalidad, cristales de personalidad, cristales de personalidad." Esos son los mecanismos de la mutación, ya que no se muta a alguien necesariamente la primera vez que se habla con él. Es como cuando te peleabas siendo un niño. Te creías que con darle un golpe al adversario sería suficiente, pero luego te das cuenta de que no es así. La mutación no funciona de ese modo. Es cierto que algunas mutaciones ocurren al primer impacto, pero otras mutaciones están basadas en este tipo de repetición, y no logran penetrar hasta que dejan de resultar extrañas para la mente colectiva. "Oh, eso ya lo había escuchado antes." En el momento en que alguien dice:"Eso ya lo había oído antes", se eliminan la mayoría de las resistencias. Si te encuentras con alguien que tenga esta Cruz de Angulo Derecho de las Explicaciones, comprobarás que es alguien que perfecciona su capacidad de repetir en tu misma cara. Seguirá insistiendo, persistiendo en su saber con la esperanza de que si lo escuchas el tiempo suficiente acabarás por enterarte.  Cuando los adultos están en algún país extranjero, particularmente los norteamericanos, en alguna situación en la que intentan hacer llegar algún mensaje a alguien, suben automáticamente el tono de su voz. Cada vez lo suben más. Ese es un rasgo característico de la individualidad. Dicen algo que suena raro, y lo vuelven a decir otra vez pero un poco más alto. Es un intento de penetrar con la mutación en otros. De modo que tienes que personarles, porque te lo seguirán diciendo hasta que te familiarices con ello. Luego podrás decir: "Ya, ya, lo había oído antes." Es muy difícil ser un raro. Los que son portadores de alguna definición individual en su diseño saben que hagan lo que hagan seguirán siendo unos marginales. No importa lo mutantes que sean, o lo potencialmente integradores, la realidad es que siempre están al margen de todo, y permanecerán al margen de todo para siempre.']
    },
    {
        cruz: 'Cruz Angulo Derecho de la Explicación 4',
        img: imagesCruzes['explicacion.jpg'].default,
        texto: ['Llegamos ahora a la cuarta variante de la Cruz de Angulo Derecho de las Explicaciones, la gran cruz del bla, bla, bla. Siendo yo mismo portador del canal 43/23, soy capaz de soportar ese tipo de abusos hasta un cierto punto. La puerta 43 - la Resolución - es la puerta de la perspicacia, del oído interno, del fenómeno de las acústicas internas. Como ya hemos visto en las variaciones previas de esta cruz, la cualidad de las explicaciones dependerá de la puerta principal a través de la que son expresadas, siempre en función de la posición del Sol de Personalidad. De ahí que las explicaciones de la puerta 49 giren siempre en torno a las razones que hacen necesaria la revolución, las de la puerta 4 respondan a las cosas de una manera lógica, y las de la puerta 23 sean explicaciones que explican la explicación en sí misma. Lo que podemos encontrar frecuentemente en la puerta 43 es una profunda reticencia - e incluso incapacidad - para explicar cualquier cosa. Eso no significa que no pueda o sea capaz de hacerlo, sino que simplemente se da ese caso con relativa frecuencia. ', 'Cuando el Sol de Personalidad está en la puerta 43, el tema principal gira en torno a la perspicacia para con uno mismo y a los fenómenos acústicos internos. Sin embargo, no se trata de satisfacerlos dándoles expresión, aún cuando está disponible la definición que se forma con la polaridad del canal 43/23. Toda la temática gira simplemente en torno a la propia perspicacia y al proceso interno de pensamiento.  ', 'Imagina que una de estas personas está a punto de tener una confrontación muy importante con alguien. La puerta 43  vivirá esa confrontación en el interior de su propia mente mucho antes de que tenga lugar en la realidad - su capacidad acústica la llevará a escuchar lo que se dice, lo que no se dice, lo que debería ser dicho. Sin embargo, aunque todas esas cosas sean dichas en ese nivel mental, cuando llega la hora de la confrontación, es muy probable que no pueda decir nada. Puede que asienta con la cabeza, o que diga "sí" o "no" a algo, pero todas las cosas que pasaron por su cabeza y de las que pensaba hablar, que iba a decirle a la otra persona, ahora no las puede expresar.  ', 'Sirva este ejemplo para que te hagas una idea de lo difícil que es convertir la ilusión de la acústica interna de la puerta 43 - esa perspicacia interior - en lenguaje común y corriente. Eso sí que es verdadera traducción. Después de ver cómo la gente ha traducido mi trabajo a lo largo de los años, puedo decir que el resultado ya no es verdaderamente mi trabajo. Es un nuevo trabajo basado en mi trabajo, pero no es lo mismo. Al fin y al cabo, se trata de un lenguaje distinto que tiene otras raíces en la cualidad y en el sentido que encierran las palabras que se dicen, además de la fórmula mecánica básica que el tono lleva en sí mismo. Es decir, que la traducción para llevar el pensamiento de la puerta 43 a la 23 es algo muy difícil de hacer. Después de todo, por algo le llamamos «raros» a los que nacen con este canal. Esa es la razón de que este canal lleve el subtítulo «de Genio a Chiflado». Si no eres capaz de explicarte, entonces eres un chiflado, pero si consigues que otros asimilen tus explicaciones, entonces serás considerado alguien muy inteligente. Esta es gente que acaba abandonando la idea de intentar explicar a otros lo que sabe, pero que mantiene en su fuero interno la sensación de una verdad que persiste, y que le otorga una cierta sensación de seguridad en sus conocimientos.  ', 'En ese ámbito interno de la acústica pueden existir encerradas cosas de gran valor, lo que nos retrotrae a una fórmula básica para tratar con las criaturas con una individualidad muy marcada - particularmente con las criaturas del canal 43/23 que son muy comunes. Para poder ayudarlas y potenciar en ellas la capacidad de explicarse que tanto van a necesitar, es preciso llevarlas a practicar con la expresión de sus conceptos a través de su Centro de la Garganta. Es bueno preguntarles qué es lo que están pensando, para que tomen conciencia de esos procesos, porque eso hará que les resulte cada vez más fácil aprender a traducirse a sí mismos. Es como aprender un idioma nuevo. Cuando intentas decir algo al principio en un idioma nuevo, tienes que oírlo primero en tu mente para traducirlo. Sin embargo, cuando llevas el tiempo suficiente practicando ese idioma, las frases simplemente están ahí, ya que no tienes que traducirlas previamente para poder expresarlas. Por todo ello, es muy importante que las personas del canal 43/23 tengan la oportunidad de practicar y reciban el apoyo necesario para ello.  ', 'En lugar de eso, lo que suele ocurrir es que los padres mismos las consideran un auténtico dolor de cabeza, ya que no paran de decir: "Yo sé." Si tienes seis años, y te pasas todo el rato diciendo "Yo sé", cuando todos saben que no tienes ni idea de lo que hablas al decirlo, lo que ocurre es acabas viviendo todo este tema con muchísima presión. Eso le añade una carga de dificultad a la vida de estas criaturas. O sea, que la única manera de facilitarles la vida es estimulando en ellas la capacidad de articulación oral.  ']
    },
    {
        cruz: 'Cruz Angulo Derecho de la Explicación 1',
        img: imagesCruzes['explicacion.jpg'].default,
        texto: ['El paso siguiente está en la puerta 49, y esta es una puerta que dice: "Perdonadme - la comida." Es muy interesante ver la forma en que la comida irrumpe en nuestra existencia. Si has de sobrevivir, si has de existir dentro de un cuerpo, la comida se hace irrenunciable. Está muy bien que haya todo este material intelectual al comienzo de todo el proceso - Oh, luce muy bonito ahí, al principio de todo, pero el paso siguiente nos lleva a tener que decir: "Espera un momento, espera un poco, si vamos a seguir por este camino, perdona, vamos a necesitar algo para comer. Si vamos a necesitar algo para comer, vamos a tener que hacer algo en lo que quizás no hayas pensado todavía - vamos a tener que matar. Así que salgamos todos afuera y afilemos nuestras lanzas para matar." Como verás, el programa evolutivo no nos ahorra nada - lo veremos todo - pero el impulso de matar, el impulso de matar aparece muy temprano. ', 'No se trata de matar a tu vecino, o a tu esposa. Hablamos de la necesidad de matar animales para poder comerlos y alimentarte. En el canal 49/19 tenemos la conexión potencial tan especial que hay entre el diseño de los mamíferos y el de los humanos. Aquí es donde nos encontramos en el nivel más místico de la existencia con el mundo mamífero, y aquí es donde, a través del animismo, tiene sus orígenes el impulso religioso de la especie humana. De modo que al llegar a la puerta 49, no solamente llegamos a un momento en el que miramos hacia el pasado, sino que estamos considerando algo más, y ese algo más es: "¿Existe un Dios? ¿Existe algo que merezca la pena ser adorado? Casi mejor que existiera un Dios en alguna parte, quizás si matamos en su nombre todo vaya bien, etc, etc..." En la racionalización de ese impulso religioso reside el origen de todas las creencias religiosas que ya conocemos. ', 'La Cruz de Angulo Derecho de la Explicación ha pasado por muchas cosas desde el comienzo de la Ronda de Civilización actual, que comenzó aproximadamente hace 1.600 años. Esta es una cruz que tiene una importancia fundamental. Básicamente, lo que establece es cuáles son los principios y las respuestas ineludibles para poder satisfacer nuestras necesidades más básicas y elementales. Se trata de una cuestión cuya importancia no se debe subestimar. Esta es una cruz que a la vez que es emocional, muestra todas las rarezas de la individualidad porque el eje prenatal de su Sol / Tierra de Diseño está enclavado en el Canal 43/23. Vemos, por tanto, que hay una poderosa individualidad subyacente que se mantiene también en esta cruz.  ', 'Esta es gente que está tratando siempre de determinar quién forma parte de la revolución y quién no. Ese es su tema. La puerta 49 está buscando siempre algún tipo de alianza con otros, incluso en el nivel del ángulo derecho, ya que en su nivel más profundo la revolución siempre está vinculada a alguna forma de sacrificio. Esta es la puerta de ser sacrificado o de ser el que sacrifica a otros. Este es el arquetipo del carnicero.  Si miras a ver en el diseño de asesinos en serie, carniceros, podrás comprobar de qué estamos hablando - verás cómo la puerta 49 siempre está presente. Esto no significa que debamos tener controlados con la acreditación correspondiente a todos los que tienen esta puerta en su diseño para que no sean malos, sino que pretende simplemente señalar y resaltar la importancia de entender la volatilidad del sistema emocional.  Al fin y al cabo, esta es una puerta de principios emocionales, que funciona con el movimiento de la ola emocional, fluctuando constantemente desde la esperanza al dolor, y en la que no hay acceso a la verdad en el instante presente, sino que se debe esperar a que llegue la claridad cuando se completa el transcurso de la ola emocional. Esta es gente que siempre tiene que estar dando explicaciones a los demás porque siempre acaba metida en todo tipo de problemas. Los problemas que se ocasionan están originados casi siempre por las tensiones que emanan de la violencia inherente a esta puerta - una de las cuestiones por las que más acaloradamente discuten es por ver quién se lleva las mejores partes. ¿Has visto alguna vez a los gatos salvajes matar alguna pieza, y tener después alguna amable discusión para ver quién se lleva la mejor parte? ', 'Una de las versiones más interesantes de esta cruz en la actualidad es que nos provee de "profetas itinerantes". Hay algunos profetas muy divertidos dando vueltas por ahí con esta cruz a cuestas. Es el tipo de gente que piensa que tiene la capacidad de explicar las cosas. Pero como decía el bardo: "Se me antoja que protesta demasiado." Esta es gente que te sigue explicando cosas cuando ya hace tiempo que tú te sientes como muerto. Eso hace que una de las cosas más frecuentes es que, siendo el canal 43 / 23 como es, cuando ha terminado de explicarte algo tú sigas preguntándote qué es lo que te quería decir, y te alejes pensando: " No sé qué me quería decir. Ni siquiera sé muy bien de qué estaba hablando ni qué es lo que me quería explicar." Explicar la estructura individual de su visión es una labor harto difícil para la persona con el canal 43 / 23, y tampoco deberíamos olvidar que se trata de un canal que se da con mucha frecuencia en la población humana.  ', 'La Mutación no es algo que sea fácil de transformar y de articular con el lenguaje. Simplemente no es así como funcionan las cosas. Hay una gran cantidad de lucha y de tensión adherida a todo ese proceso. Así que la persona de ángulo derecho va por ahí diciendo: "Estos son mis principios emocionales. Quiero que trabajes conmigo, no porque me importes demasiado, no porque te quiera a ti, ni tampoco porque me gustes particularmente. No se debe a ninguna otra razón que no sea al hecho de necesitarte, ya que ahí fuera hay más lobos que humanos." No es que haya una enorme cantidad de cariño implicada en ese vínculo. Cuando veas a alguien que tiene su Sol de Personalidad en la 49.1, estarás tratando con un revolucionario que apenas tiene seguidores - y esa será la razón por la que siempre estará intentando explicarse.  ']
    },
    {
        cruz: 'La Cruz Angulo Derecho de la Penetración 1',
        img: imagesCruzes['penetracion.jpg'].default,
        texto: ['El hexagrama 51 - Lo SUSCITATIVO - que representa la puerta del shock y del trueno, es el sujeta libros de la puerta 25 - La Inocencia. La puerta 51 es una puerta del ego, y tiene una relación biológica con la vesícula biliar. Aquí es donde están las agallas.', 'Las personas de la Cruz de Angulo Derecho de la Penetración hace exactamente eso; te penetran.', 'Es para lo que están aquí, para penetrarte de muchas maneras diferentes. La profundidad con la que su intuición penetra en ti te puede dar un shock. Otro modo de penetrarte es llamando tu atención. También penetran en las cosas abriendo puertas a todo lo nuevo e iniciando todo tipo de cosas.  ', 'La Cruz de Angulo Derecho de la Penetración es una fuerza muy dinámica. La puerta 51 tiene una cualidad clásica del signo de Aries. De modo que estamos tratando aquí con unos comienzos muy rudimentarios, pero con una capacidad de penetración muy profunda. Siempre que haya aspectos de individualidad en los elementos que configuran una cruz, estamos tratando con una cruz mutante, y, por lo tanto, la gente que sea portadora de esas cruces son agentes para todo tipo de mutaciones. Es decir, que esta Cruz de la Penetración es una cruz mutante. El shock que inadvertidamente le dan a cualquiera - no olvides que es gente de ángulo derecho - puede tener un valor tremendo para esa persona. Sin embargo, puede que esa ni siquiera fuera la intención del ángulo derecho, del que ya sabemos que vive absorto en su propio proceso personal.  ']
    },
    {
        cruz: 'Cruz Angulo Derecho de la Planificación 2',
        img: imagesCruzes['planificacion.jpg'].default,
        texto: ['Ahora nos adentramos en aguas mayores, ya que con la puerta 16 llegamos a la puerta del entusiasmo - lee entusiasmo como sinónimo de identificación. Al fin y al cabo, esta es la gran puerta de la identificación. Sin la identificación no hay ninguna manera posible de establecer lo que es correcto, y no habría ninguna forma de actualizar los experimentos que hemos ido llevando a cabo. En un sentido lógico, el verdadero progreso de la humanidad se manifiesta a través de la puerta 16. En esta Cruz de Angulo Derecho de la Planificación tenemos el comienzo de lo que vivimos hoy en día en este fin de ciclo global. Con Sol en la puerta 16, el talento lo significa todo. Esta es gente que busca el talento en la capacidad de aportar soluciones a los problemas, y que tiene una profunda capacidad de enfocarse sobre soluciones talentosas que puedan servir al bienestar de la tribu. Como todavía tenemos presente la definición del canal 37/40, sabemos que la temática de esta cruz sigue implicando la necesidad de llegar a acuerdos con los demás.  ', 'De la puerta 16 nacieron todas nuestras tecnologías. Es a través de esta puerta que hemos desarrollado la capacidad, no de diseñar un edificio, sino de construirlo. Aquí tenemos la capacidad de encontrar el patrón más correcto para hacer las cosas. Una de las claves para entender las mecánicas de una cruz es fijarse en la puerta armónica del Sol de Personalidad, que es la que completa el canal donde lo tenemos posicionado. La puerta armónica de la 16 es la puerta 48, lo que hace que el foco más importante en la vida de esta cruz sea la profundidad con la que experimenta su existencia. Es gente que siempre está buscando mayor profundidad en todas las soluciones que maneja, y maneras de establecer la corrección en el colectivo humano. Es gente que busca cosas con las que experimentar para el beneficio de toda la comunidad.  ', 'Sin embargo, una de las ironías es que no es fácil tener alguna oportunidad si naces con esta cruz, ya que la lógica tiene un problema muy real en la misma base de su estructura; y es un problema de recursos energéticos. Ninguna de las tres puertas de expresión lógica que desembocan en la Garganta tiene acceso directo a ninguno de los centros motores. Algo que sí se da en las puertas de la Garganta que pertenecen al Circuito de Abstracción, y en las que pertenecen al Circuito de la Individualidad, y también en la única puerta de la Garganta que da expresión a los circuitos tribales. En las puertas 62, 31 y 16 - las tres puertas de la expresión lógica - los centros a los que dan acceso no son motores. Eso significa que no siempre se dispone de suficiente energía, por lo que mucha gente se ve obligada a buscar a alguien que pueda financiar los recursos necesarios para llevar a cabo sus experimentos. Con el Sol en la puerta 16, esta Cruz de la Planificación gira enteramente en torno a la identificación con los experimentos hasta conseguir llevarlos a cabo. Eso no significa que lograrlos vaya a ser una tarea fácil de cumplimentar. No hace falta decir que eso puede conducir a todo tipo de dificultades en términos de lo que es el ego emocional que esta cruz lleva siempre implícito.  ']
    },
    {
        cruz: 'Cruz Angulo Derecho de la Planificación 4',
        img: imagesCruzes['planificacion.jpg'].default,
        texto: ['Llegamos a la cuarta variación de la Cruz de Angulo Derecho de la Planificación, que representa el tema global en el que nos encontramos en la actualidad. Solamente hay dos puertas que haga mención expresa de “lo pequeño”, y son la puerta 62 - la Preponderancia de lo Pequeño - y la puerta 9 - la Fuerza para Domesticar lo Pequeño. Toda la temática de la puerta 9 gira en torno a la aplicación de la energía vital al foco sobre los detalles de algún experimento lógico. De aquí proviene la expresión popular que dice: "Un viaje de miles de millas comienza por el primer paso." Aquí se trata de aprender a apreciar ese aspecto tan fundamental de la vida, de que, aplicándonos en los detalles de las cosas pequeñas, las cosas grandes crecen del modo más natural.  ', 'Esto es muy importante a la hora de la planificación. Si nos guiáramos solamente por lo que dice la puerta 16 a la hora de planificar nuestros experimentos, lo único que tendríamos es un entusiasmo superficial por alguna novedad arquitectónica. Esa puerta simplemente dispone de ese entusiasmo para construir lo que sea: "Dadme algo de energía, y os construiré algo." Si nos dejamos guiar por la planificación del canal 40/37, entonces la planificación se limitará a cosas y cuestiones muy básicas. Te dirán: "Mira, lo que necesitamos es un centro comercial. Necesitamos una buena escuela para nuestros hijos. Necesitamos un buen sistema de regadío." Es decir, que darán prioridad a las cuestiones prácticas que influyen sobre la calidad de su vida tribal, sobre la calidad de su vecindario, y ese tipo de cosas', 'Pero si consideras la planificación que tiene lugar en la puerta 9, entonces estás viendo un proceso muy distinto. Aquí de lo que se trata es de acumular toda la energía posible para los detalles de algún experimento - ni siquiera de realizar el trabajo detallado en sí mismo, sino de acumular la energía necesaria para ello. Debido a que todas las puertas del circuito lógico están famélicas de acceso a los recursos energéticos, la puerta 9 tiene la función de recaudar los fondos necesarios para un experimento lógico. Esta puerta intenta, de hecho, reunir la energía suficiente para poder llevar a cabo todos los detalles del trabajo a realizar. Si quieres dedicarte a la investigación, y tienes que atender un empleo de 12 horas diarias para poder sobrevivir, lo más probable es que tus investigaciones no avancen demasiado. Sin embargo, si alguien financia tus investigaciones y puedes renunciar al empleo que mantienes por necesidad, entonces todo irá viento en popa. La puerta 9 está buscando siempre por la energía necesaria para enfocarse y concentrarse sobre el trabajo detallado del experimento planificado. Si no dispones de esos recursos, entonces simplemente no puedes hacer nada.  ', 'De ahí, que esta variante de la Cruz de la Planificación sea muy importante. Una vez ha sido capaz de acumular la suficiente energía, entonces es capaz de proveer una energía continuada para enfocarse sobre todos los detalles de un proceso. Resulta casi una redundancia decir que la planificación se beneficia con la atención a todos los detalles, y esta es la única posición en la que disponemos de ese tipo de sensibilidad. La tribu tiende a pedir muchas cosas que no necesita en realidad. Por ejemplo, en los últimos cinco años ha habido un par de países africanos que construyeron enormes edificios religiosos que nadie quiere. Uno de ellos - el mayor de todo el mundo cuando fue construido hace cuatro años - está abandonado en la actualidad. Tras el golpe de estado que derrocó al líder del país, la gente que va ahora al templo construido en el poblado natal del líder derrocado, lo hace solamente para llevarse todo lo que pueda. Es decir, que la tribu demanda cosas que no siempre necesita y a las que no siempre le reconoce un valor suficiente como para invertir en ello los recursos de los que uno dispone.  ', 'La función de la puerta 9 es la de manejar esa realidad con una cierta sensibilidad natural para esas cuestiones. Después de todo, la sensibilidad es uno de los temas que se mencionan en la puerta 9. Se trata aquí de llegar a un punto en el que poder decir: "Bueno, disponemos ahora de todos los recursos que necesitamos para concentrarnos sobre los detalles." En el pasado, eso significaba simplemente que, si eras capaz de invertir tu energía en planificar la construcción de un nuevo alojamiento, eras eximido de la necesidad de salir a cazar." Ya que otros tenían que responsabilizarse de garantizar su acceso a la comida, la puerta 9 era libre de producir los recursos necesarios para otra cosa. Es decir, que era libre de disponer de la energía acumulada para concentrarse sobre los detalles de algo.  ', 'Ese tipo de acuerdos siempre fueron y serán necesarios, ya que no se puede separar la planificación de los pactos del canal 40/37 - es parte de la configuración de esta cruz de encarnación. La necesidad de pactar es un imperativo para poder acceder a los recursos energéticos necesarios, y poder llegar a concentrarse sobre los detalles de algo que permita a la planificación llegar a manifestarse. La mayoría de la gente que planifica cosas en la actualidad dispone de un plazo de tiempo muy corto para hacerlo. La mayoría tiene que hacer las cosas deprisa y corriendo, para poder llegar a tiempo a los recursos, por lo que la planificación se hace sobre la marcha y de mala manera. De ese modo, nos venden programas informáticos segundones y llenos de errores, y todo tipo de cosas que no fueron planificadas con suficiente atención a todos los detalles implicados, probablemente por falta de medios para desarrollar un trabajo más cualificado. Este es un aspecto que nos permite entender cómo se hacen las cosas en los tiempos que nos está tocando vivir.  ']
    },
    {
        cruz: 'Cruz Angulo Derecho de la Planificación 1',
        img: imagesCruzes['planificacion.jpg'].default,
        texto: ['A medida que avanzamos por la rueda de los hexagramas, el paso siguiente del Sol es la puerta 37 de la Familia, lo que sitúa la Tierra en la puerta opuesta, la 40. En consecuencia, tenemos la definición del canal 40/37, el Canal de Comunidad, que trata específicamente de los acuerdos y pactos en el seno de la familia. La temática de necesitar llegar a acuerdos en el mismo seno de la familia fluye naturalmente a partir de la estructura que le precede. Hemos visto en la Cruz del Fénix Durmiente el establecimiento de los vínculos y estrategias sexuales, que representan un alivio para el espíritu y abren la posibilidad de encontrar amor a través del vínculo sexual. El amor que encontramos a través del vínculo sexual tiene que consolidarse luego completamente en los acuerdos y pactos alcanzados con la Familia.  ', 'Los pactos de la estructura familiar van a tener que cambiar, porque... ¿qué aspecto tendrán las estructuras familiares cuando alcancemos cuotas de fertilidad tan severamente limitadas? Es algo que ahora no podemos imaginar siquiera, no sabemos cómo se desarrollará eso en la práctica. Es algo nunca visto hasta ahora en el desarrollo de nuestra especie. Si no tenemos en cuenta los aspectos implícitos en la mutación que se está acercando, y simplemente consideramos lo que vemos ahí presente, vemos qué es lo que fluye naturalmente a partir de nuestra necesidad de encontrar sexualidad, amor y la realización de nuestro espíritu humano. En este punto el programa evolutivo nos está diciendo: "Mirad hacia la familia." Esto es un claro indicador de que solamente entrando a formar parte de los pactos familiares podremos finalmente darles satisfacción a todos y cada uno de estos aspectos humanos, y también de que la estrategia sexual existe para engendrar niños para la comunidad, ya que la comunidad es la fuerza a partir de la que los seres humanos triunfan.  ', 'En la síntesis del Sistema de Diseño Humano y en el uso que hacemos del Mandala zodiacal, no sólo nos servimos de la astrología occidental - enraizada en la tradición babilónica - sino que también usamos la astrología oriental. La medición del movimiento de precedencia del equinoccio nos permite ver temas más globales que afectan a la evolución del colectivo humano. En la fase actual, el tema global que condiciona nuestra evolución está representado en esta Cruz de Angulo Derecho de la Planificación. Cuando hayamos concluido esta etapa, dejaremos de estar inmersos en la temática de una 1ª línea, ya que el movimiento del equinoccio es opuesto al de las agujas del reloj. Es decir, que ahora estamos evolucionando globalmente a través del tema de la 37.1, pero a partir de 2027 el tema global de nuestra evolución se desplaza a la puerta 55.6. Ese es el punto de transición que marca el inicio de la mutación como una fase nueva en la evolución de nuestra especie. Pero en el contexto que nos ocupa, lo estamos viendo desde el otro lado. Lo que estamos viendo aquí, en la naturaleza del mundo actual en que vivimos y en el funcionamiento del desarrollo de la consciencia sobre la Tierra, es el despliegue completo de su código genético. Si juntamos todos los temas de las 192 cruces, lo que tenemos son los parámetros en los que se basa el código genético de la totalidad, o la estructura y el patrón mecánico a partir del cual funciona el desarrollo de la consciencia planetaria. ', 'Debido a que globalmente estamos evolucionando a través de los temas de esta Cruz de la Planificación, el foco durante esta etapa está en la comunidad y en la capacidad de establecer pactos. Dicho sea de paso, la activación de los temas globales a través de esta cruz comenzó en 1610, y han venido marcando nuestro proceso evolutivo desde entonces. Aquí todo gira en torno al desarrollo de energía aplicable a los pequeños detalles, al desarrollo de habilidades físicas y manuales, a nuestra búsqueda de mayor profundidad en el entendimiento de las cosas. En esencia, se trata de construir una comunidad.  ', 'En su modo de construir la comunidad, el 40/37 establece también las prácticas religiosas y místicas del clan. Construye las iglesias y los templos, creando vínculos que sean capaces de mantener la unión entre todos los miembros de la comunidad. Desde que estos temas se activaron a comienzos del siglo XVII, sus efectos se han dejado notar en el funcionamiento de nuestras sociedades. Hemos podido asistir desde entonces a una institucionalización de la vida en diferentes estamentos. Hemos creado instituciones para la custodia de la salud, para la estructura interna de las ciudades, sistemas de escolarización, todo tipo de empresas y organizaciones, etc., etc. La creación de todas estas estructuras sociales está integrada en las dinámicas naturales de esta cruz. La fuerza que impulsa ese proceso es el deseo de unirnos a todos en torno al intento de crear algo más grande, y de crear un nivel superior de organización en nuestras sociedades.', 'Es un proceso que conlleva en su interior un tremendo bagaje de recursos y habilidades. Sin embargo, el protagonismo de esta Cruz de la Planificación está tocando a su fin. El tipo de civilización en el que hemos estado viviendo hasta ahora está alcanzando su máximo apogeo, y a partir de 2027 deberíamos disponer de toda la información básica que necesitamos para comprender aspectos fundamentales de la naturaleza del universo y de nuestros propios cuerpos. La naturaleza completa del código genético, la edad y la masa del universo son elementos básicos que deberían ser bien entendidos para entonces. Estamos aquí para llegar a entender lo que somos. Esa es la revelación del Diseño Humano, es la vocación con la que ha nacido - dar a todos y cada uno una oportunidad de reconocer con absoluta claridad cuál es su naturaleza original, de modo que podamos todos llegar a saber lo que es simplemente dejarse fluir con el devenir de la vida.', 'A medida que nos vayamos acercando a la transición del ciclo global que culminará en 2027, esta Cruz de la Planificación, esta poderosa fuerza organizadora e integradora, irá desapareciendo. El próximo ciclo global es casi enteramente individual, y entre sus prioridades no se encuentran ni la tribu ni los pactos familiares. Esos pactos sociales que se hacen necesarios en el seno de toda comunidad se vendrán abajo, porque la familia misma, tal y como la conocemos hasta hoy, es algo que se está desmoronando ']
    },
    {
        cruz: 'Cruz Angulo Derecho de la Tensión 1',
        img: imagesCruzes['tension.jpg'].default,
        texto: ['Con la Cruz de Angulo Derecho de la Tensión nos adentramos en asuntos más bien serios. El Sol entra en la puerta 21 - La Mordedura Tajante - y todo el mundo comienza a marcar el paso, porque esta es la puerta del control y de la necesidad de tener el control, la puerta del cazador y de la cazadora, del presidente y del líder tribal. La vanidad humana nos impide aceptar las jerarquías. Desde el mismo comienzo de nuestra evolución, desde el instante mismo del nacimiento de nuestra especie, podemos ver en la Cruz del Dominio que la usurpación ha estado siempre al orden del día y ha sido parte de nuestro proceso desde siempre. Hay un empuje muy profundo en la humanidad para competir por escalar todos los niveles jerárquicos. Es decir, de ascender en la vida, como quiera que uno quiera concebir ese ascenso. Siempre hay alguna resistencia en nosotros hacia la aceptación de las jerarquías.  ', 'La Cruz de la Tensión viene simplemente con el equipaje necesario para ser un líder natural, y el equipaje consiste en que para mantener la propia autoridad uno debe estar siempre en guardia y tener el control de la situación. Sin ese control, la usurpación siempre será posible. Sin ese control, la tribu no puede funcionar correctamente, y si la tribu no funciona correctamente, toda la responsabilidad recae sobre el líder. En la presión por ser el líder, por ser el que ejerce el mando, tiene sus raíces esta Cruz de la Tensión.  ', 'La puerta opuesta a la 21 es la puerta 48, puerta de la profundidad, lo que revela que la verdadera capacidad de ejercer el liderazgo de la tribu está enraizada en la necesidad de tener profundidad de visión. Un aspecto divertido de la puerta 48 es que es la puerta de lo que conocemos por magia negra. No está mal disponer de algunos trucos, de políticas ocultas, de fondos reservados, de matones en la trastienda, etc., etc., de lo que corresponda en cada caso.  ', 'El aspecto más difícil para los que vienen al mundo con esta cruz de encarnación es tener que experimentar la tensión en su propio cuerpo, por lo que se trata siempre de gente que necesita ciertos tratamientos específicos para que su cuerpo pueda liberar todas las tensiones. Masajes regulares, técnicas de relajación, ejercicios físicos de todo tipo, esta es gente que necesita canalizar la vida a través de su cuerpo, porque la tensión, que es un campo de energía que nace de su propia cruz de encarnación, impacta directamente sobre su organismo físico.  ', 'La manera natural en que estas personas liberan la tensión es provocando a los demás, de modo que les pasan a otros la tensión que estaban procesando. Tratándose de alguien tan absorto como son las personas de ángulo derecho, puede que eso no resulte demasiado agradable. Al fin y al cabo, liberan esas tensiones con el único propósito de sentirse mejor ellos. Si lo contemplamos desde un ángulo moral, se podría decir abiertamente que esa es una actitud terriblemente antisocial e ingrata. Sin embargo, desde un enfoque menos moralizante, debemos admitir que la Cruz de la Tensión es necesaria, porque sin ella no habría forma de mantener la autoridad en la tribu. La tribu necesita tener la sensación de que, si incumple alguna de las normas, alguien vendrá y le impondrá un castigo.  ', 'Lo primero que nos encontramos con la entrada en la puerta 21 es la policía, porque aquí surge el reconocimiento de que es imprescindible tener el control y saber ejercerlo. De ese modo, la provocación y la tensión conducen a una imposición que dice: "Yo tengo el control. Yo mando. Haz lo que digo. Haz lo que tienes que hacer, y todo así seguido." Es interesante cómo funciona todo, ya que es algo que forma parte de en nuestra programación genética y evolutiva. Donde quiera que vayáis en este planeta encontraréis a esas criaturas de uniforme que portan armas. Da igual dónde vayáis, porque están por todas partes. No es que necesariamente quisiéramos eso para nosotros, sino que es algo engranado en nosotros desde el nivel genético de nuestra biología. Es un rol humano más que está ahí. Siempre hay alguien cuya función es dedicarse a vigilar que los demás guarden su turno en la cola. Somos genes de un cromosoma aguardando nuestro turno en la cola, y es preciso que tengamos a nuestras fuerzas del orden para mantener el control mínimo de la situación.  ']
    },
    {
        cruz: 'Cruz Angulo Derecho de la Tensión 4',
        img: imagesCruzes['tension.jpg'].default,
        texto: ['Con el Sol en la puerta 38, tenemos la cuarta variación de la Cruz de Angulo Derecho de la Tensión. Examinando las diferentes variantes de esta cruz, podemos ver en qué consiste y dónde reside la tensión en cada una de ellas. La tensión está enfocada sobre los temas de la puerta 21 cuando el Sol de Personalidad está posicionado en esa puerta, de modo que la tensión se concentraría sobre el tema del control. Cuando se encuentra en la puerta 48, la tensión gira en torno a la necesidad de tener suficiente profundidad y de poder manifestarla. Con el Sol en la puerta 39, la tensión gira en torno a la posibilidad de encontrar el espíritu correcto para uno. Aquí, en la puerta 38, la tensión gira en torno a la necesidad de encontrar propósito en la vida. En esta variante de la Cruz de la Tensión podemos encontrar los sufrimientos más profundos, ya que encontrar propósito en la vida no es algo que sea fácil de conseguir. ', 'La puerta 38 - la Oposición - es la puerta del luchador, y está siempre dispuesta a abrirse a la posibilidad de luchar por algo que le de valor y propósito a su vida. La individualidad de la puerta 38 reconoce que la vida es dura y puñetera, y que uno tiene que trabajar en algo para mantenerse en ella. Siendo portadores de un tema tan fatigoso, estas personas nos enseñan que la lucha de la vida es algo que todos tenemos que aprender a manejar, y que - cuando es correcta - esa lucha nos puede llevar a reconocer el valor y el propósito inherentes a nuestro estar aquí. A partir de esa lucha, podemos finalmente encontrar algo verdadero valor. Debido a la naturaleza individual de la puerta 38, esta es una cruz de encarnación profundamente melancólica. La gente que es su portadora puede sentirse muy triste, porque la vida no parece tener propósito para ella. La única cura y la única sanación para ese mal consiste en vivir de acuerdo con la estructura del propio diseño. Hay cosas por las que vale la pena luchar, pero es preciso que sepas cuáles son para ti. Debido a que la puerta 38 hace oídos sordos a todo lo que se le diga, vive en un estado de anhelo perpetuo. No quiere realmente ser influida por nadie, porque su naturaleza es profundamente individualista. Lo que le gustaría es simplemente encontrar algún propósito para seguir llevando adelante su vida. De ahí que sucumba a la profunda tristeza que le puede penetrar. Pero no olvides que esa es precisamente su musa, por lo que está también puede ser una cruz profundamente creativa.  ', 'Como con las demás variantes de la Cruz de la Tensión, esta es gente que necesita recibir tratamiento para liberar las tensiones de su cuerpo físico. Es muy importante que cuenten con las personas que le pueden ayudar a liberar las tensiones de su organismo. Sin embargo, al mismo tiempo, lo único que puede eliminar esas tensiones de un modo definitivo es encontrar alguna actividad a la que merezca la pena dedicarse en la vida. Eso es todo lo que estas personas necesitan. Lo pueden encontrar fácilmente si dejan de resistirse a las mecánicas de su diseño individual. La Cruz de la Tensión somete nuestro organismo a una tortura enorme cuando vives en la ignorancia, porque no deja de manifestarse a través del cuerpo. Es capaz de crear tensiones enormes en el cuerpo físico, como por ejemplo contraer los hombros de un modo que puede originar dolores crónicos. Es gente que simplemente tiene todo tipo de tensiones en su organismo.   ', 'Recibir tratamiento para su cuerpo no es una cura definitiva, al menos mientras sigan siendo inconscientes de sus mecánicas. Por supuesto que lo necesitan y que les hará bien, pero no es una cura definitiva. Una criatura con esta configuración tendrá tantos dolores y tensiones que te harán pensar que algo anda mal con ella, pero no tiene por qué ser así. Es simplemente el efecto de ser portador de este tipo de configuración. De lo que se trata es de lograr que se abran y de ofrecerles cosas a las que le reconozcan un valor individual.  ']
    },
    {
        cruz: 'Cruz Angulo Derecho de las Leyes 1',
        img: imagesCruzes['leyes.jpg'].default,
        texto: ['La Dificultad Inicial. Una vez completada esta transición llegamos a la Cruz de Angulo Derecho de las Leyes, que representa los primeros preparativos para lo que finalmente se convertirá en un diseño civilizado. las personas que vienen al mundo con esta cruz traen consigo la ley, las normas y los mandamientos. Cada una de las puertas de la Cruz de las Leyes tiene su propia capacidad para crear normas, dictar leyes y establecer el orden.', 'Con la definición que se forma en el canal 3/60, el Canal de Mutación, tenemos aquí una de las definiciones más poderosas de cuantas se dan en la configuración de una cruz de encarnación. Esta es una cruz profundamente dispuesta a mutar, por lo que también puede ser muy deprimente. ', 'El canal 3/60, que es el formato de energía individual para la mutación, lleva grabada la más profunda de las melancolías en su bioquímica. No es de extrañar, entonces, que digamos que la Cruz de las Leyes conlleva un potencial tremendo para experimentar las depresiones más profundas. Como es también el formato de energía para el proceso creativo, esta cruz nos muestra que la creación de leyes y la ley en sí misma son en esencia una forma de arte. A través del canal 3/60 tenemos la capacidad de establecer leyes que mutan, leyes que provocan cambios dinámicos de mayor importancia en la manera que tenemos de relacionarnos y de integrarnos en las sociedades de las que formamos parte. No obstante, la irrevocable presencia de la puerta 60 hace que los límites sean inherentes a la ley y a las normas.  ', 'Una criatura que naciera con esta cruz y que tuviera que crecer sin saber cuáles son las normas que debe seguir se sentiría realmente molesta. Esa criatura espera que alguien le enseñe las normas, las necesita, y en algún lugar profundamente dentro de sí mismo lo sabe. No hay ninguna manera de que podamos funcionar, tal y como lo hacemos todos en nuestra maraña tribal de relaciones, si no tenemos normas a las que atenernos para mantener un cierto orden. De modo que estas cuatro variaciones de la Cruz de las Leyes son las que - a través de cada cuarto - siempre establecerán la necesidad de que exista la ley. En este Cuarto de la Iniciación, la Cruz de Angulo Derecho de las Leyes está en la puerta 3, y está directamente relacionada con la necesidad de satisfacer las demandas de la mutación. Por eso la puerta 3 se llama “La Dificultad Inicial”, porque a través de ella cobra forma la mutación. Algo nuevo tiene que nacer, y es aquí donde tenemos la capacidad de establecer las primeras leyes.']
    },
    {
        cruz: 'Cruz Angulo Derecho de las Leyes 3',
        img: imagesCruzes['leyes.jpg'].default,
        texto: ['La puerta 50 se llama «el Caldero», en referencia al puchero donde se cocina. Todo lo relacionado con la tribu se enraíza en última instancia en algo relacionado con la comida, absolutamente todo. Aquí llegamos a la tercera variación de la Cruz de Angulo Derecho de las Leyes. El Sol de Personalidad está en la puerta 50, que literalmente le da su nombre a esta cruz, ya que esta es la puerta de la legislación y de los valores. Aquí es donde se establecen las normas para la tribu.  ', 'Las normas de la tribu son elaboradas en base a la necesidad de regular dos cosas: una es la comida y la otra es el sexo. La función de la puerta 50 consiste en establecer cuáles son las normas que hay que seguir en la tribu en torno al sexo y a la comida; esa es su labor más fundamental. Las leyes de Moisés, que son un ejemplo clásico de las primeras leyes, trataban muy específicamente de estos dos temas. Las normas de la comida no se refieren únicamente al hecho de alimentarse, sino que incluyen directrices muy claras acerca de lo que puedes comer y lo que no. No se te ocurra ir a Bagdad y pedir carne de cerdo en un restaurante, porque no te harás ningún favor a ti mismo, y puedes acabar metido en un buen lío. La realidad es que las normas tribales son las que dictan lo que podemos comer, lo que debemos comer, y quién debe tener por derecho acceso a la comida. En otros tiempos, si eras varón, no podías permitirte el lujo de dormirte entre los matorrales mientras los demás varones salían a cazar, porque corrías el riesgo de quedarte sin cenar. Tenían normas muy estrictas en cuanto a la manera de satisfacer las necesidades del cuerpo. La puerta 50 es la que dictamina el tipo de comida que podemos ingerir y el que no, cuándo la podemos ingerir y cuándo no, etc.  ', 'Las normas que regulan el sexo también son establecidas a través de esta puerta, algunas de ellas de una verdadera crueldad humana. Por ejemplo, las diferentes formas de circuncisión que se practican, tanto sobre hombre como sobre mujeres. Ese es un ejemplo clásico de la brutalidad de algunas de las normas que nacen de la manera de hacer de la puerta 50. En todo caso, tiene el control sobre esas cuestiones y ya está. La puerta 50 es la que establece cuándo están permitidas las relaciones sexuales y cuándo no, con quién y con quién no, en qué circunstancias y en cuáles no, y todo así seguido. Al fin y al cabo, esta es la puerta del legislador tribal.  ', 'Con el Sol en la puerta 50, la personalidad tiene el foco puesto en el control del entorno tribal. Si vienes al mundo con la Cruz de la Leyes, y tienes el Sol de Personalidad en la puerta 50, entonces has nacido para establecer normas por las que regirte en la vida. Establecerás también las normas que deben seguir quienes estén contigo, o no querrás tener nada que ver con ellos. Mientras las normas estén claras, y todo el mundo se comporte de acuerdo a ellas, esta es la gente más feliz del mundo. Faltaría más... ', 'En cada cuarto nos encontramos con uno de los brazos de esta Cruz de las Leyes, que nos provee de una nueva variación del conjunto de normas y valores por los que debemos regir nuestras vidas. No porque sean conceptos filosóficos, sino porque es algo enraizado en nuestro código genético. Es decir, que es algo que simplemente está ahí. La fuerza tribal de estas personas es la que tiene la responsabilidad de establecer esas normas. No olvides que la evolución de la humanidad entera está, en última instancia, en manos de las mecánicas de la tribu. No está en ninguna otra parte. Los individuos no dejan de mutar en todo el tiempo. La gente colectiva está siempre abierta al cambio y a lo que parece nuevo. El único modelo cerrado que puede servir de piedra angular de la humanidad es el que nos ofrece la tribu, que sigue rigiendo su vida por toda esta vieja programación instintiva. La mayoría de la población humana del planeta vive todavía con la densidad del modelo tribal. Los que estamos integrados en las formas de vida de la cultura occidental tendemos a olvidar lo profundamente arraigada que está todavía la vida tribal en la inmensa mayoría de seres humanos que pueblan este planeta.', 'Hay una transición que tiene lugar entre los legisladores de ángulo derecho y los otros dos legisladores que vienen a continuación. Los legisladores de ángulo derecho no tienen una idea demasiado precisa de las consecuencias que tienen las normas que establecen. El legislador que decidió que se hiciera la circuncisión a las mujeres debería saber lo que es no disponer de nada más que de un clítoris - debería saber cómo se siente una mujer cuando se lo rebanan. Es muy probable que de ese modo esa ley nunca llegar a establecerse, a menos que se tratase de gente verdaderamente pervertida. O sea, que cuando tratamos con la legislación que proviene del ángulo derecho, debemos tener en cuenta que se trata del proceso interno de un individuo, al que simplemente le gusta hacer normas. Es gente a la que le gusta hacer normas, y comprobar que hay otros que las siguen, pero sus normas nunca están hechas para que otros tengan que seguirlas.  ']
    },
    {
        cruz: 'Cruz Angulo Derecho de lo Inesperado 2',
        img: imagesCruzes['inesperado.jpg'].default,
        texto: ['Canal del Alpha, que conlleva un diseño de liderazgo. Este es el comienzo de un profundo desafío a los reyes y al liderazgo tradicional de la tribu, porque hay suficiente poder inherente en esta posición para atraer al colectivo y llevarlo en una dirección en la que puede seleccionar a sus líderes.  ', 'El liderazgo de las personas de esta cruz se manifiesta inesperadamente.', 'A medida que vayamos avanzando, veremos que hay también otro tipo de líderes, pero aquí tratamos con una forma de liderazgo que emerge de la nada. Un día es alguien que pasa completamente inadvertido en el mapa humano, y al día siguiente pasa a ser uno de los protagonistas. De modo que esta es gente que está diseñada para proclamar su poder y ejercer su influencia en el momento más inesperado, y de la más inesperada de las maneras. Como cuando Lindon Johnson llegó a presidente de los Estados Unidos - eso es lo inesperado. De repente, te ascienden de rango cuando menos te lo esperas, y súbitamente te otorgan una autoridad o una capacidad de influir en la vida de otros que no tenías antes. Eso es algo que está ocurriendo todo el tiempo.  ', 'Esta cruz puede venir acompañada de profundos problemas psicológicos, porque mucha de la gente que nace con ella hereda de padres que mueren siendo jóvenes. Ni quiero ser mórbido, pero esa es una de las cosas de alcanzar posiciones de influencia, de inesperadamente tener que asumir y manejar el poder, independientemente de que uno esté suficientemente preparado para ello o no.  ', 'A través de todo el ángulo derecho de esta cruz, tenemos que tratar con el asentamiento potencial de la Tierra de Diseño en la puerta 28. A medida que uno avanza en ese proceso, la necesidad de asumir riesgos se convierte en un dilema cada vez más profundo.  ', 'De la Cruz de lo Inesperado nacen también los descubrimientos. Es decir, que esta es gente que ha de ser descubierta por otros como líderes. Si vieras o te encontraras con uno de ellos un día cualquiera por la calle, no pensarías nunca que se trata de un líder, pero en el momento de lo inesperado - como en las películas clásicas de Hollywood, en las que un avión está a punto de estrellarse, o el personaje menos imaginable acaba siendo el héroe de la película - sabe cómo hacerse con el poder y la influencia para conducir y guiar a todos los demás. Dicho con otras palabras, solamente esos momentos inesperados pueden propiciar una posibilidad real de hacer emerger el verdadero liderazgo en estos seres humanos.  ']
    },
    {
        cruz: 'Cruz Angulo Derecho de lo Inesperado 3',
        img: imagesCruzes['inesperado.jpg'].default,
        texto: ['La puerta 28 tiene una función verdaderamente inusual en la vida. Una de las primeras que se aprenden en el Diseño Humano cuando comienzas a examinar los diferentes circuitos son los llamados Canales de Integración. Es decir, el sistema que se crea a partir de la interacción entre las puertas 20, 10, 57 y 34. Los Canales de Integración representan los aspectos más individualistas y con una orientación más orientada hacia la supervivencia de todos los circuitos del Cuerpo Gráfico del Rave. La puerta 28 es la que mayor impacto tiene sobre lo que ocurre en el ámbito de la integración. Cuando examinamos los temas de la custodia en el diseño de la sexualidad humana, vemos que el canal 20/57 está diseñado para cuidar únicamente de sí mismo, y nada más. Esa es su única responsabilidad, cuidar de sí mismo. Sin embargo, en el momento en que aparecen las puertas 28 y/o 38, particularmente la 28, el canal 20/57 ya no puede seguir ocupándose solamente de sí mismo. Ya no es posible seguir centrando todo su interés en su propia persona, y aún cuando le provoque una cierta rabia, comenzará también a mostrar su interés por los asuntos de la otra persona.  ', 'Con el Sol en la puerta 28 llegamos a la tercera variación de la Cruz de Angulo Derecho de lo Inesperado. Lo inesperado trae consigo cuatro temas básicos. Trae lo inesperado en sí mismo, en el sentido de una nueva experiencia que aparece de la nada. Lo inesperado te puede llevar de repente a ocupar posiciones de influencia en la sociedad. Pero lo inesperado también puede hacer su aparición a través de lo que la gente de la puerta 28 tiene que cuidar y asumir responsabilidad en su vida.  ', 'A través de la puerta 28, lo inesperado irrumpe a partir de los riesgos fundamentales que se tienen que asumir, los cuales están en la naturaleza de esta puerta. En la puerta 28 albergamos el miedo a la muerte, y también la necesidad de llegar a saber si hay en la vida algo que tenga algún valor real. Si naces con el Sol de Personalidad en la puerta 28, no hay nada más importante para ti en la vida que conocer el valor inherente en el hecho de vivir la tuya. Si no le puedes reconocer valor a tu vida, entonces se acaba convirtiendo en una lucha.  ', 'La puerta 28 está señalando hacia la 38, cuyo nombre es “la Oposición” y representa la puerta del luchador. La puerta 28 está buscando una buena lucha. "Busquemos algo por lo que valga la pena luchar", se dice. Bien está que luchen si esa es su naturaleza, pero, por favor, que sea una lucha cargada de valor y de propósito. La gente que nace con esta Cruz de lo Inesperado suele acabar metida en el fuego cruzado de alguna lucha; ese es el tema de su vida. Si sabe rendirse a la lucha, entonces lo inesperado siempre puede esconder posibilidades con las que no contaban, ya que esa es la magia inherente en esta configuración. Ocupados siempre en sus propios asuntos, la sorpresa o lo que sea puede surgir en cualquier momento. ', 'Claro que esa es una vida interesante. Esta no es la configuración de una vida apagada y sin brillo']
    },
    {
        cruz: 'Cruz Angulo Derecho de los Cuatro Caminos 2',
        img: imagesCruzes['cuatrocaminos.jpg'].default,
        texto: ['Esta segunda variante de la Cruz de los Cuatro Caminos, con el Sol de Personalidad en la puerta 33, nos lleva al final de este Cuarto de la Civilización. Tenemos aquí la única puerta de la Cruz de los Cuatro Caminos que está ubicada en el Centro de la Garganta. Este es el camino de la manifestación. Simultáneamente, la puerta 33 - La Retirada - es una puerta de mucha privacidad, secretos y retraimiento. Tenemos aquí la necesidad de tener un espacio o santuario inviolable para algo muy especial. Hemos ido atravesando este Cuarto de la Civilización, y hay algo verdaderamente llamativo al llegar a este punto en el que nos encontramos aquí. Y es que la civilización comienza por disponer de un espacio separado de los demás - ahí es dónde comienza. La civilización comienza por la necesidad de disponer de esa privacidad.  ', 'Esa privacidad no tiene por qué limitarse al ámbito de lo personal. Es un tipo de privacidad que también puede decir: "voy a cobijar a mi familia, o a quien corresponda en cada caso". Pero comienza por ese confinamiento, y por la capacidad de recogerse en la inviolabilidad del propio santuario. La posibilidad de disponer de nuestro propio espacio es uno de los beneficios más importantes que nos ha traído la civilización. Aquí tenemos la demanda y, consiguientemente, también la puesta en marcha de todo eso.  ', 'Pero eso también significa algo más. Significa que es preciso disponer de un territorio propio, lo que se traduce en algo con muchas implicaciones. La posición de la Tierra en la puerta 19 nos habla de este tema, ya que en el mundo mamífero esta es la puerta más territorial de todas. Tenemos aquí el lugar donde el propio territorio se establece a partir de la necesidad de una morada física para el cuerpo - disponer de una casa propia, de unas tierras propias - en las que, en ese sentido, poder sentirnos libres. Esta forma de retirada no es simplemente la que usamos en el contexto del análisis del Diseño Humano, donde la mencionamos siempre como una puerta impregnada de secretos y con la necesidad de disponer de una cierta privacidad en su vida. Aquí hablamos más bien del tipo de retirada que convierte la privacidad en algo real y viable. No hay privacidad posible, a menos que dispongas de un lugar propio al que poder ir cada vez que lo necesitas.', 'Hace ya catorce años que Ra viene diciéndole a la gente que duerma en su propia habitación y en su propia cama. Nadie se imagina la tremenda importancia que esto tiene. Es parte del proceso que hunde sus raíces en esta puerta. Aquí se nos revela la importancia y la necesidad de disponer de un espacio propio, de un santuario, en el que poder resguardarnos. Sabemos, a partir de los trabajos realizados con el Rave Durmiente, que tener a alguien en el aura mientras estás dormido distorsiona profundamente tu sueño y tu descanso, porque dejas de funcionar de acuerdo a lo que es natural en ti y procesas el estado onírico de tu vida en un estado de alteración que atenta contra tu natura. De ahí que nazca en esta puerta esa necesidad natural en los de nuestra especie de disponer de un espacio propio.  ', 'Pero hay algo más que también comienza aquí, y es que aquí es donde comenzamos a separarnos del contacto directo con el cielo. Los arquitectos fueron los primeros villanos, ya que pusieron un tejado sobre nuestras cabezas. Si te diriges a alguien en una ciudad, y le preguntas: "¿Cuándo será la próxima luna llena?", verás que la mayoría no se había percatado siquiera de que la Luna está ahí. No llegan a fijarse en si está o no está la Luna. Es decir, que al mismo tiempo que comenzamos a disponer de un espacio privado tras el que poder resguardarnos, comenzamos también a separarnos de la naturaleza. Aquí comenzamos a vivir con la ilusión de que ya no somos animales, y con la creencia de que - de alguna manera - somos civilizados y diferentes a ellos, y por ahí seguido.   ']
    },
    {
        cruz: 'Cruz Angulo Derecho de los Cuatro Caminos 4',
        img: imagesCruzes['cuatrocaminos.jpg'].default,
        texto: ['Llegamos al último hexagrama y con ello a la cuarta variante de la Cruz de Angulo Derecho de los Cuatro Caminos. Aquí tenemos el camino del «Acercamiento», que es el camino de la necesidad. Siendo como es un camino en el que todos somos los necesitados, nos dice algo muy básico acerca de la humanidad; que necesitamos alimento, que necesitamos unos principios emocionales de acuerdo a los que vivir y compartir nuestras vidas, y que necesitamos a Dios, es decir, que necesitamos algo que sea capaz de «tocarnos» en un nivel espiritual. Todos estos temas están enraizados en la puerta 19, que es una puerta de adrenalina tribal. Debido al hecho de emerger del sistema adrenal, sabemos a ciencia cierta que irá siempre acompañado de las presiones que identificamos con el estrés. ', 'Este es el más estresante de los cuatro caminos, y el estrés más profundo que experimentan los nacidos con el Sol en la puerta 19 en el mundo moderno está relacionado con la necesidad de acceder a suficiente alimento. Los que tenemos alimentos en abundancia seguimos representando una minoría en este mundo. Esta es una cuestión de máxima importancia para al menos la mitad de la población humana que habita en este planeta. O sea, que estamos tratando aquí de un tema muy dinámico, y, consecuentemente, eso significa que aquí se acumula fácilmente mucha presión.  ', 'Algunas de las más salvajes revoluciones que se están dando en el entorno geopolítico moderno son de naturaleza religiosa, llevadas a cabo por fundamentalistas revolucionarios que abastecen a la gente de comida. Hace algunos años, eligieron en Ankara, Turquía, un alcalde socialista, algo nunca visto hasta entonces por aquellos lares. Con esa elección, tenían a alguien que simplemente trataba de asegurarse que la gente tuviera comida suficiente. Sin embargo, esa elección provocó unas tensiones sociales enormes, porque el alcalde electo formaba parte de un partido religioso. Debido a eso, le destituyeron inmediatamente y le echaron de la oficina, porque el partido religioso en el que estaba integrado estaba prohibido.  ', 'Hay una conexión muy profunda en el canal 19/49 con nuestra vida espiritual y religiosa. De ahí que el mundo espiritual de los seres humanos tenga una conexión tan profunda con el abastecimiento de la comida. Debemos ser muy precavidos con nuestras necesidades, para no acabar en situaciones donde todos estemos dominados por teocracias que nos dicen qué y cuándo debemos comer, sino que simplemente nos prometan algo de comer a todos. O sea, que las revoluciones que hay en marcha ahora mismo en el mundo se siguen nutriendo de la puerta 19. En la puerta 49 - la Revolución - reside la sensibilidad que siempre busca la puerta 19, dispuesta siempre a aceptar, o no, la suerte que le haya tocado tener en este mundo. La realidad es que una de las fuerzas que más poderosamente la pueden motivar para convertirse en revolucionaria son fuerzas espirituales. Son fuerzas que le dicen: "Tienes el derecho divino de esto y lo otro y lo de más allá, y sólo nosotros sabremos cómo protegerte y asegurar que no te falte de nada." Este es uno de los temas más dinámicos de este mundo, la capacidad de proveer suficiente comida para llenar los refrigeradores de todos, y de crear suficientes refrigeradores, electricidad, infraestructuras y todo lo necesario para asegurar que la gente tiene acceso a los recursos más básicos, como es el alimento. Mientras no sepamos resolver este problema, este es un camino sometido a enormes presiones.  ', 'Con la puerta 33 todos necesitamos construir una casa para disponer del cobijo que nos ofrece. El primer paso para alcanzar libertad individual y disfrutar de los derechos humanos individuales es disponer de tu propio territorio, de tu propio espacio vital. La puerta 19, sin embargo, es profundamente territorial. El camino para trabajar con otros, y así abastecernos de los bienes materiales, lo hemos desarrollado a través de la puerta 44. Es cierto que a lo largo de los últimos 400 o 500 años hemos visto que el conocimiento es, por sí mismo, algo en lo que nos podemos apoyar. Vivimos ahora en un tiempo en el que la propiedad intelectual tiene un valor real, y un ser humano con una buena formación y educación es más valorado de lo que nunca lo fue en toda la historia de la humanidad. De modo que esas son cosas con las que estamos aprendiendo a manejarnos bastante bien.  ', 'El verdadero problema lo tenemos en la puerta 19. La puerta 19 trata la cuestión básica de la comida, y mientras no haya comida suficiente para todos no seremos capaces de dar nuevos pasos adelante. Simplemente no lo seremos. Está muy bien que yo os diga que vamos a tener un descenso considerable de la población humana, aunque no sea agradable para aquellos que no lograrán sobrevivir, aquellos que tienen que morir para que el resto salga adelante. De buen seguro que será más fácil abastecer a una población de 3 billones de personas en lugar de 12 billones, que es hacia donde nos dirigimos en este momento en base a la documentación que hay al respecto. Más tarde o más temprano, ese cambio llegará y nos ayudará a manejar esta cuestión tan básica que plantea la puerta 19.  ', 'En su nivel tribal más profundo, la puerta 19 trata del sacrificio y de la matanza de animales. Eso es algo que va a tener que dejar de hacerse, porque está destruyendo la productividad y la fertilidad de las tierras. Es algo que está agotando recursos acuíferos muy valiosos en todo el mundo, para dar satisfacción únicamente a un porcentaje muy bajo de seres humanos. Tenemos que encontrar una manera de satisfacer nuestras necesidades nutritivas sin tener que matar animales, porque cuando llegue el cambio, nos llevaremos con nosotros el espíritu de la criatura. Nos han servido bien dentro del programa evolutivo. Esto no tiene nada que ver con moralidad alguna, sino con la dieta y con la salud planetaria. Se están haciendo experimentos en el campo de la genética, y se están buscando sistemas de manipulación que aumenten la producción y distribución de las proteínas. En el futuro seremos capaces de criar nuestra propia carne, pero no la haremos crecer tal y como lo hacemos ahora. Hoy en día la criamos a través de la vida de otro ser, a través de una vida provista de un Cristal de Personalidad. En el futuro, seremos capaces de criar genéticamente todo lo que necesitamos a través de formas de vida que solamente están provistas de un Cristal de Diseño, lo cual es algo enteramente distinto. Esa será una de las mayores transiciones que tendrá lugar dentro de unos 300 o 400 años. O sea, que no es algo que esté a la vuelta de la esquina, pero es importante que sepamos reconocer la importancia de una transición como la que estamos comentando aquí. Es algo relacionado con los cristales de personalidad de los mamíferos, y es que, si su espíritu ha de vivir en nosotros, dejar de matarlos parece que sea una inmejorable idea. ']
    },
    {
        cruz: 'Cruz Angulo Derecho de los Cuatro Caminos 1',
        img: imagesCruzes['cuatrocaminos.jpg'].default,
        texto: ['Los cuatro brazos que conforman la Cruz de Angulo Derecho de los Cuatro Caminos son de hecho los nombres de los cuatro caminos que puedes seguir en tu vida: el Retorno (24), Ir al Encuentro (44), el Acercamiento (19) y la Retirada (33). La dimensión mental de este cuarto queda establecida aquí por la dirección del camino que sigues, o, lo que es lo mismo, por el posicionamiento de la puerta 24 en el Centro Ajna. Esta es la puerta de la racionalización individual, y es una puerta en la que la acústica mental emerge de manera muy ruidosa en tu vida interior. En esta puerta - el Retorno - los conceptos giran una y otra vez para regresar siempre al mismo lugar o punto de partida.  ', 'Esto nos dice algo acerca del comienzo del proceso del maya y del proceso mental en nuestra especie, y es que iba a ser un proceso marcado por una increíble monotonía en esos temas, repasando una y otra vez las mismas respuestas a las mismas preguntas de siempre. Hace poco que Ra estuvo en Nueva York, donde un joven amigo provisto de una grabadora le hizo algunas preguntas concernientes a la tesis que estaba elaborando. Eran las mismas estúpidas preguntas de siempre: "¿Qué es Dios? ¿Dónde está Dios? ¿Quién es Dios?" Dice Ra que a él todo eso no le preocupa lo más mínimo, ya que se trata de la misma basura mental de siempre. De modo que llegados a este hexagrama - el Retorno - puedes hacerte una idea bastante exacta del tipo de proceso en el que estamos metidos al tener que repasarlo todo una y otra vez hasta volvernos locos ante la imposibilidad de resolver el misterio de nuestra existencia. Cuánta gente y durante cuánto tiempo habrá estado hablando de las mismas cosas desde el principio de los tiempos, sin saber realmente nada de sí mismos. Es algo que ha estado ocurriendo a lo largo de miles de años. Sin saber nada con certeza real - ni de quién eres, ni de qué hablas en realidad ni de cómo funcionan las cosas - inventamos simplemente la verdad tal y como se nos antoja.', 'Durante milenios hemos tenido a personas que asentían con la cabeza, y, sin embargo, seguimos repasando esa materia una y otra vez, porque la realidad es que nuestras estructuras mentales no acaban de funcionar a la hora de revelarnos las mecánicas del misterio existencial de los seres humanos. Pero nadie parece reparar en ello. Nadie dice: "Oye, perdona, pero ya llevamos demasiado tiempo pisando el suelo de las mismas teorías". Así es como la madre naturaleza nos dispuso para participar de este maravilloso juego.  ', 'El programa evolutivo conoce que el hecho de que los humanos entramos y salimos del cuerpo. Al fin y al cabo, no somos más que carne. Esa es la verdad, y de ahí también el término de “encarnación” - entrar en la carne. Somos carne, y entramos y salimos del cuerpo a medida que el programa evolutivo nos va criando. Es cierto, ¿acaso no crecemos como cualquier otro ser vivo sobre este planeta? Es preciso comprender que el tiempo lo es todo en estas cuestiones. No olvides que solamente considerando las órbitas de Neptuno y Plutón podemos entender que no hay una sola vida humana capaz de durar a través de un ciclo entero de estos dos planetas. Ninguna vida humana está capacitada para completar un ciclo entero de estos dos planetas, y por eso acabamos diciendo al morir: "Jesús, ¿qué ha sido todo eso?" Se debe a que ninguna vida completa realmente un ciclo, sino que simplemente entramos y salimos en función del programa evolutivo de la totalidad en la cual vivimos integrados.  ', 'De manera que todo el asunto de repasar una y otra vez los mismos viejos marcos racionales de la filosofía no tiene otro propósito que la simple necesidad de hacerlo así generación tras generación hasta que, finalmente, llegue la mutación esperada y nos encontremos de repente con ese: "Ah, mira qué simple era. ¿Por qué nos hemos pasado mil años dándole vueltas a algo tan simple?" Por la sencilla razón de que fuimos diseñados para ir a través de todo ese absurdo, ya que la consciencia y la forma evolucionan juntas. ! ¡Es todo un proceso! De manera que este Cuarto de la Iniciación, que representa el plano mental para nosotros, se acabó por convertir en un tremendo dolor de cabeza.  ', ' Una y otra vez vas a repetir el intento de aprender a manejar el plano mental de nuestra existencia. ¿No es ese el condicionamiento original que hay en cada uno de nosotros? Se trata del código genético de la totalidad, del cual todos somos portadores. Luego este código nos atrapa en el maya de la vida de un modo en el que nunca podemos obtener la satisfacción de una respuesta consistente. Si no te haces cargo de los juegos de la mente..., si no logras manejarte a través de sus redes..., y la realidad es que no hay más que una forma de hacerlo. No se trata de nada que puedas aprender. Uno simplemente tiene que dejar de conferirle autoridad interna a la propia mente. Ese es el mayor paso que uno puede dar en su vida.  ', ' A partir del momento en que dispones de una herramienta como el Diseño Humano, puedes identificar el lugar en tu interior donde reside tu verdadera autoridad, la única referencia fiable y consistente que necesitas. Si confías de verdad en esa fuente de autoridad interna, no importa ya cuál sea el condicionamiento de tu mente, porque habrá perdido definitivamente el poder que le conferías para dirigir tu vida, lo que es bueno ya que esa no es una función que le corresponda. La mente está aquí para observar y para servir de medio para comunicar y compartir con otros lo que hemos observado a través de ella. Pero no está aquí para guiarnos. Hasta que eso no esté meridianamente claro para ti, y mientras no seas capaz de vivir tu vida basado en tu verdadera autoridad interna, esta puerta 24 seguirá martilleando tu mente hasta la muerte.  ', ' Después de todo, esa y no otra es la función de esta puerta. Pregúntale si no a cualquiera que sea portador de ella en su diseño. Es una puerta que no te deja nunca en paz hasta que no satisfagas su existencial pregunta, y si tu mente no es capaz de responderla satisfactoriamente, entonces no te dejará vivir en paz contigo mismo. De modo que, si le confieres autoridad interna a tu mente, entonces sufrirás por ello toda la condena que implica tener que vivir con la obstinación mental de esta puerta 24. Su condena es que la mente no puede, por sí sola, disponer de autoridad interna para dirigir la vida del individuo - de ahí vienen todos los quebraderos de cabeza que esta puerta es capaz de suscitar. Tenía que estar ahí desde el principio, y no quiero decir con esto que sea algo malo. Es simplemente algo que requiere el paso del tiempo suficiente para dar entrada a una nueva forma de conciencia.  ', 'Las inflexibles leyes de la evolución nos obligaron a implicarnos profundamente en el plano mental para repasar estos conceptos hasta el infinito. Pero no debemos olvidar que ese es un proceso que está tocando a su fin. Con el advenimiento de ese fin de etapa y de nuestra tecnología, y con la inmensidad de nuestros conocimientos actuales, comenzamos a entender el maya con una precisión detallada que era imposible de imaginar hasta hace muy poco tiempo. Nos estamos acercando a ese punto crucial en nuestra evolución como especie. Cuando llegue realmente el momento en este planeta en que los seres humanos sepamos dónde reside nuestra autoridad interna, y la mente haya dejado de ser la que dirige el juego, estaremos preparados para ver la inmensa transición que puede tener lugar. De manera que cuando el Sol de Personalidad está posicionado en la puerta 24 de esta Cruz de Angulo Derecho de los Cuatro Caminos, podemos ver que a través de este cuarto el camino conduce a través de la mente. Este es el camino de intentar resolver el plano mental de nuestra existencia; de intentar comprenderlo, de intentar conocerlo, de la profunda influencia que ejerce sobre nosotros el conocimiento.  ']
    },
    {
        cruz: 'Cruz Angulo Derecho del Amor 2',
        img: imagesCruzes['amor.jpg'].default,
        texto: ['Llegamos ahora al segundo grupo de ocho hexagramas que integran este Cuarto de la Civilización. Recuerda que las puertas de la Cruz del Receptáculo del Amor dividen cada cuarto en dos mitades, y que esta es la segunda variante de la Cruz de Angulo Derecho del Receptáculo del Amor. En el primer cuarto tuvimos ocasión de verla a través de su función iniciadora, a través de las mecánicas del amor universal inherentes a la puerta 25. Con el Sol de Personalidad en la puerta 15, tenemos aquí las mecánicas del amor a la humanidad funcionando a través de esta puerta de los extremos - extremos del ritmo, quiero decir. Dentro de ese amor a la humanidad reside la habilidad de saber aceptar el espectro más amplio posible de todos los ritmos que convergen en el fluir más amplio del colectivo humano.  ', 'Esta es una cruz cuyos intereses giran enteramente acerca del futuro, porque la puerta 15 está integrada en el proceso lógico. El funcionamiento de la lógica está basado en el experimento con un patrón en el presente, a partir de cuyos resultados se proyecta hacia el futuro. Las personas portadoras de esta cruz siempre están intentando entender la manera de organizar mejor las cosas, de modo que se pueda compartir más amor. No obstante, ese mismo amor a la humanidad puede convertirse en un profundo desagrado con la humanidad. En todo caso, la verdadera dirección para estas fuerzas reside en el interés y en lo concernidas que son capaces de mostrarse en el trato con  capazidad de experimentar por sus semejantes. Por cierto, que el interés que experimentan no depende de que ellos así lo quieran. ', 'Como se trata de una cruz de ángulo derecho, sabemos que ese amor no va dirigido a la persona portadora de esta cruz. Oh sí, puede que ocasionalmente tenga acceso a él, pero no va dirigido a ella. Con su Sol de Personalidad en la puerta 15 - La Modestia - simplemente no dispone de ninguna otra forma de ver las cosas, ya que su destino personal pasa por custodiar a la humanidad, por cuidar de su nivel de organización, y por la necesidad de atraer a todos hacia un flujo apropiado y un orden de las cosas que sea natural.  ']
    },
    {
        cruz: 'Cruz Angulo Derecho del Contagio 2',
        img: imagesCruzes['contagio.jpg'].default,
        texto: ['Al entrar en el campo de la puerta 8, entramos en contacto también con nuestra necesidad de realizar una contribución a través de la expresión de la individualidad. El modo en que evoluciona la naturaleza de la civilización no viene solamente dado por la capacidad de coordinar los esfuerzos de la humanidad o de la sociedad, sino también a través de saber mantener espacios abiertos a la mutación, de modo que la estructura de la civilización sea capaz de evolucionar más allá de sí misma. Desde el momento en que se incluye aquí la expresión de la individualidad, el eje de las puertas 8/14, es importante que sepas ver que esta Cruz de Angulo Derecho del Contagio gira enteramente en torno a la necesidad de contribuir individualmente a la seguridad y a la abundancia de los recursos', 'La contribución está relacionada con la capacidad de ser un ejemplo para otros asumiendo la responsabilidad individual de ese proceso - muy distinta a las responsabilidades colectivas o tribales, y muy distinta también a la dirección de reunir a la tribu en torno a unos principios que veíamos en el primer cuarto. Lo que tenemos aquí es algo muy diferente. Aquí se trata de ser un ejemplo a imitar por otros, porque se es un ejemplo de algo que puede llevar a los demás a comprometerse con esa dirección individual. Si vives, por ejemplo, en un entorno comunitario, el individuo es el único que estará dispuesto a arriesgarse a hacer las cosas de un modo distinto al habitual, de contribuir a la comunidad de un modo diferente al del resto, lo que puede desembocar luego en la aceptación por parte de la comunidad de sus propuestas, tanto si se trata de un cambio en la arquitectura del lugar o de un cambio en el modo en que está estructurada la sociedad.  ', 'Debido a los ingredientes que la componen, esta Cruz del Contagio nunca deja del todo atrás la energía del deseo y de todas las expectativas que el deseo es capaz de suscitar. Al comienzo mismo de esta cruz tenemos la línea 14.1, que se llama “el dinero no lo es todo”. Esto es un ejemplo de la dedicación a los recursos con el tipo de espíritu de los pioneros, donde la comunidad entera se reunía para dedicar su tiempo a la construcción de un cobertizo para algún vecino. Pero alguien tiene que servir de ejemplo, alguien tiene que poner en marcha ese proceso, para que alguna vez llegue a producirse. Todo lo que emerge de esta Cruz de Angulo Derecho del Contagio está diseñado para causar un profundo impacto sobre todos los demás. Esta cruz tiene un poder natural para influir sobre sus semejantes. Su mismo nombre y estructura, al fin y al cabo, denota su capacidad de contagiar sus sentimientos a los demás. De modo que esta contribución individual como un ejemplo a seguir se convierte en algo muy importante que representa siempre un paso adelante en nuestro afán civilizador. Si todos actuaran de manera ejemplar, entonces necesitaríamos menos fuerza para que todos mantengan fielmente el cumplimiento de las normas.  ']
    },
    {
        cruz: 'Cruz Angulo Derecho del Contagio 4',
        img: imagesCruzes['contagio.jpg'].default,
        texto: ['Me gusta la imagen tradicional del carro, a través de la que ilustran en el I-Ching la puerta 14. Ya que se trata de la acumulación de poder y riquezas, si has nacido con la puerta 14 es como si hubieras nacido con una herencia. Se te da energía en abundancia, y un tipo de energía que debería ser capaz de satisfacer las necesidades materiales de tu vida.  ', 'Esa es la razón de que la primera de las líneas de este hexagrama tenga por nombre «el dinero no lo es todo», y es porque el dinero es algo que ya está garantizado, y las posibilidades materiales en la vida alcanzan su máximo esplendor tratándolas desde la puerta 14. Recuerda que la energía de la puerta 14 es la que sostiene nuestra dirección en la vida. Es parte del Canal del Compás, que conlleva un diseño de ser el que custodia las llaves de la dirección. Con el Sol de Personalidad en la puerta 14 nos encontramos con la cuarta variación de la Cruz de Angulo Derecho del Contagio. Aquí todo gira en torno a encontrar la dirección correcta para esa energía, de encontrar los lugares a los que dirigirse para ir abriéndole camino a la dirección que se potencia a través de ella.  ', 'El Sol de Diseño en la puerta 29 dice: "Vale, yo te abasteceré de combustible para la dirección. Sí, de acuerdo, te daré toda mi energía." La única cuestión en eso es que ese combustible no puede ser invertido en cualquier cosa, porque la gente simplemente querrá hacerse con él. Siempre que veas a alguien con la Cruz del Contagio, y con el Sol de Personalidad en la puerta 14, verás que hay en su vida todo tipo de gente que intenta constantemente hacer que se comprometa con ellos, que les haga alguna promesa, y que les provean de esa energía capaz de traerles los beneficios de esa riqueza potencial que hay en la puerta 14.  En el ángulo derecho, las versiones de perfil 1/4 y 2/4 implican la línea 30.4 que se llama «Consumido». Una de las cuestiones a tener en cuenta acerca de la Cruz del Contagio es que es portadora del potencial para consumirse como uno de sus temas dominantes, debido al compromiso ciego que es capaz de establecer con las cosas. Ese estar «consumido» no se refiere a la persona en sí misma - que al consumirse vaya a desvanecerse y a caer muerta en el instante siguiente - sino que lo que se «consume» es el compromiso establecido con una experiencia, una persona, o una carrera profesional que tiene que dejar atrás. Al dejarlas atrás, esas cosas le dan la sensación de fracaso, de algo incompleto, o de haber malgastado su energía con ese compromiso.  ', 'Con el Sol en la puerta 14, el tema es mantenerse enfocado en encontrar la dirección correcta. Eso es lo que estas personas más están esperando en la vida, esperan por esos momentos en los que hacer un compromiso que les permita avanzar en la vida en la dirección adecuada. Con la dirección adecuada, viene también el combustible correcto, y eso se traduce en la llegada del éxito material a sus vidas.  ', 'Esta es una puerta capaz de enriquecernos a un nivel muy profundo. Yo pasé por un periodo de tres años y medio en los años 90, en los que Plutón activaba la puerta 14 en mi diseño, y la conectaba a la puerta 2 donde tengo mi Nodo Norte. Eso me enseñó el enorme poder que hay en esta puerta, los procesos que potencia con su energía, y todas las oportunidades y riquezas que pueden venir con ella. Al fin y al cabo, el éxito que el Diseño Humano tiene hoy nació durante esa etapa en la que Plutón estaba impulsando mi energía desde la puerta 14, dándome el combustible necesario para desplegar los fundamentos de este conocimiento en una cierta dirección. O sea, que la puerta 14 es capaz de abastecernos de muchas cosas. No obstante, da igual qué es lo que estemos viendo, ya que siempre es una cuestión de entrar correctamente en contacto con lo que sea.  ', 'Los portadores de la Cruz del Contagio tienen la capacidad de reunir a la gente y acumular la energía para la dirección de la que disponen. Pueden, por ejemplo, lograr que la gente invierta sus recursos materiales en la dirección que proponen, y eso no es moco de pavo. También son capaces de lograr que los demás se comprometan con algo. Por cierto, que, tratándose de seres de ángulo derecho, esas cosas irán irrumpiendo en sus vidas, las posibilidades les irán saliendo al camino. No es que ellos vayan a buscarlas, ya que tienden a ser personas muy absortas en cubrir sus propias necesidades materiales.  ', 'Si tienes la puerta 14 en el perfil de tu cruz de encarnación, y no le prestas atención a tu seguridad material - tener algo de dinero en el banco, o cualquier otro bien capaz de proporcionarte seguridad financiera - no llegarás a sentir nunca que tienes una base estable en tu vida. Ese es uno de los temas básicos en la puerta 14. Si no logras establecer una cierta seguridad material, entonces esta cruz no puede funcionar bien. La misma poderosa fuente de energía vital que hay en la puerta 14, puede llegar a convertirse en una fuerza enormemente desestabilizadora.  ', 'No hay más que una posición para la locura en el Diseño Humano, y esa es la que va de la línea 2.2 a la línea 14.2, definiendo la proyección de todo este Canal del Compás. Cuando digo locura en este contexto, me estoy refiriendo al hecho de tomar una dirección equivocada en la vida, a invertir la energía vital en algo equivocado. Dicho sea de paso, que tampoco hay ninguna connotación moral en esa locura. Se trata simplemente de la gente que toma una dirección en la vida que está completamente fuera de lo que es aceptable para la amplia mayoría de nosotros.  ']
    },
    {
        cruz: 'Cruz Angulo Derecho del Edén 1',
        img: imagesCruzes['eden.jpg'].default,
        texto: ['Pasamos de la puerta 22 a la 36, que es la última de las puertas posicionadas en el signo de Piscis. La puerta 36 - El Oscurecimiento de la Luz - es la puerta de las crisis, y también de la penetración en lo desconocido. Es una puerta guiada por un profundo deseo de renovación, una puerta de inexperiencia en busca de experiencia. De modo que estamos tratando con una puerta guiada por una poderosa fuerza experimental.  ', ' En el polo opuesto a la 36 tenemos la puerta 6, que es la verdadera responsable de lo abiertos o cerrados que nos vamos a mostrar ante otros. Lo que nos abre a la intimidad con los demás es el diafragma. Para comprender la complejidad de la puerta 6, es preciso conocer la relación que tiene con el pH químico de nuestro cuerpo físico. En la puerta 6 tienen su origen todas las distintas olas emocionales que atraviesan el sistema emocional. Es decir, que tanto si tratamos de las necesidades de la tribu, o de la pasión del individuo, como si tratamos del deseo abstracto del colectivo humano, estas tres corrientes están enraizadas en la complejidad de la puerta 6.  ', 'La polaridad del eje de puertas 36 y 6 significa que toda disponibilidad a la intimidad en nosotros está siempre condicionada por lo excitante que esa experiencia pueda llegar a ser. Esa necesidad de que la intimidad sea una experiencia excitante está en la raíz de la Cruz de Angulo Derecho del Edén. Si no va a ser excitante, entonces no puede ser divertida.  ', 'Pero todos conocemos la historia - eres expulsado del Edén. O sea que si naces con esta cruz de encarnación sabes que te echarán del paraíso, o, lo que es lo mismo, te verás obligado a adentrarte profundamente en el mundo. Ese ir adentrándose en el mundo alcanzará su punto culminante cuando progresemos hasta el final del hexagrama 36, porque llegaremos a la Cruz de Angulo Izquierdo del Plano Mundano. Un ejemplo de lo que estamos tratando en esta Cruz de Angulo Derecho del Edén sería alguien que nace con esta cruz en el seno de una familia rica que le permite disponer de todo tipo de privilegios. Pero seis meses más tarde hay un accidente, hay una muerte, hay una bancarrota, hay algo, y, de repente, el paraíso se ha perdido', ' Una vez perdido el Edén, la persona tiene que salir al mundo y adentrarse en él para encontrar su propio camino y su conocimiento. Esto significa que la gente que viene al mundo con esta cruz puede frecuentemente tener un comienzo trágico e inesperado en la vida. Dicho de otra forma, estas personas tienden a encontrarse pronto con experiencias que se llevan por delante ciertas protecciones y seguridades de las que disponían. Esto también puede darse en un nivel psicológico - es algo muy común que la gente que nace con esta cruz vea cómo sus ideales son machacados desde una edad muy temprana. Ahora sabes que el Edén se ha ido, y toda su belleza, toda su inocencia y sencillez parecen haberse perdido para siempre. Esta es una cruz de la pérdida de la inocencia.  ', 'Fuimos echados del Edén y nos fue dicho: "Salid al mundo y reproduciros." Vale, ya no soy inocente, o sea que multipliquémonos porque ahí es a donde parece conducir todo. Uno se está adentrando realmente en el mundo, y va perdiendo su Gracia a medida que avanza de la puerta 22 a la 36. Ese es el chiste, pero esa es también la verdad. Una vez dejamos atrás la Gracia, entras de lleno en el preludio de la vorágine sexual. Entramos en contacto con todo ese tema entrando en la Cruz del Edén, y a partir de ahí lo llevamos a todas partes con nosotros. Lo sacamos al exterior porque nos provoca y excita. El sexo lo significa todo para la gente que viene al mundo con esta cruz, es algo realmente importante para ella. Después de todo, es lo único que se les permite llevarse consigo cuando abandonan el Edén. El hecho de poder llevar consigo su sexualidad les permite intentar reencontrar su paraíso a través de ella. Por supuesto, que eso conduce a su vez a toda una serie de dilemas.  ', 'Sin embargo, hay verdadera magia en todo esto. Esta es una cruz muy compleja. En el medio de su estructura de ángulo derecho están tanto la Cruz de Cambio de la Introspección (el perfil 1/4 de la cruz) como la Cruz de Base de la Proyección (el perfil 2/4 de la cruz), ya que el eje Sol / Tierra de Diseño están en las puertas 11.4 y 12.4. Esta es una de las polaridades más importantes que tenemos. La 12.4 es la línea del Profeta, y representa la capacidad de movilizar a los estancados o de ser la voz que predica en el desierto. Siendo la gran puerta de la articulación oral, tiene la capacidad de provocar una mutación en los demás, y de erigirse, a través de esa mutación, en el profeta de todos. La 11.4 es la puerta de la enseñanza por excelencia, por ejemplo, Einstein tenía esta línea en su diseño. La 11 es la puerta de las ideas, y su cuarta línea, la línea del Profesor, es una línea muy compleja al albergar tres activaciones planetarias distintas, que nos ofrecen tres tipos diferentes de profesores; desde el Profesor, pasando por el Sabio hasta el Gurú.  ', 'La exploración de todas las posibilidades de la intimidad sexual es parte sustancial de la temática de esta cruz. En ella está contenida también la capacidad de enseñar lo resultados de esa exploración, y de expandirlos. Al fin y al cabo, hasta que el programa evolutivo no llegó hasta la puerta 36 la sexualidad humana se parecía mucho a la que practican los perros en el campo. Con la llegada del Sol a la puerta 36 encontramos la capacidad de comenzar a escribir el Kama Sutra. Aquí comienza un tipo de exploración distinta, y con ella la habilidad para convertir la sexualidad en algo más grande que la mera reproducción - de crear, por ejemplo, la filosofía tántrica y todas esas cosas que intentan elevar la sexualidad hacia un orden superior. Todo ese proceso tiene su comienzo en la Cruz de Angulo Derecho del Edén.  ']
    },
    {
        cruz: 'Cruz Angulo Derecho del Edén 2',
        img: imagesCruzes['eden.jpg'].default,
        texto: ['Al finalizar el primer grupo de ocho hexagramas que hay en este cuarto, regresamos a la Cruz de Angulo Derecho del Edén. En la primera variante de esta cruz el Sol de Personalidad estaba en la puerta 36, con lo que obviamente conocimos allí la versión del Edén abocada a las crisis emocionales - la crisis de haber mordido la manzana y de la perdición en el infierno a la que nos condena. Allí la naturaleza nos impulsaba a salir a vivir en el mundo, a tratar con todas estas cosas en la experiencia más directa posible, a vivir nuestra naturaleza sexual, a ver lo que ocurre si simplemente seguimos caminando hacia delante. Parece divertido, de hecho lo es, pero luego nacen niños y te obligan a ir a trabajar para poder mantenerlos. Lo cual tampoco está mal, porque para eso nos ha creado la madre naturaleza, para que sigamos el camino humano y trabajemos y hagamos todas las cosas que tenemos que hacer. En la segunda variante de esta cruz tenemos el Sol de Personalidad en la puerta 12, que es la puerta de la articulación oral. Estamos tratando aquí con una de las polaridades más importantes y significativas - la de las puertas 12 y 11 - en la que está establecida la relación entre nuestra capacidad de articular la voz y la apertura de nuestros centros mentales. La mutación que originó la apertura de la mente humana aconteció en la puerta 11, y la mutación que originó nuestra capacidad de articular la voz - es decir, el descenso de la laringe - aconteció en la puerta 12.  ', 'Esta Cruz de Angulo Derecho del Edén es la cruz de la serpiente, que dice: "Ven conmigo, vayamos a aprender las cosas del mundo". Eso es lo que expresa la puerta 12: "Mira qué buen aspecto tiene todo eso, mira todo lo que podemos hacer, las cosas con las que podemos trabajar y todo lo que hay por descubrir. Me parece fantástico". Eso también significa que el arte es el primer resultado de haber sido expulsados del paraiso. Sin arte, nunca hubiéramos podido llegar a civilizarnos, simplemente no es posible. El arte comienza aquí en la puerta 12, y comienza como sonido. Con unos comienzos marcados por la acústica, posiblemente su forma más original fuera de la de cánticos primitivos de alguna clase. En algún momento, la oscilación de la voz conduciría a los rudimentos de lo que hoy llamamos cantar - es decir, al comienzo de la música.  ', 'En el proceso de establecer las bases de nuestra estructura genética, después del poder y las posesiones materiales de la puerta 45, llega el punto de equilibrio que dice: "Sí, sí, todo eso está muy bien, pero también está el arte. También está la creatividad". Una de las funciones de la creatividad consiste en la capacidad de recuperar lo que se había perdido. En ese sentido, la capacidad de encontrar el camino de regreso al paraíso. Es una manera de encontrar todo lo que no se puede poseer en el plano material de la vida.  ', 'Pero más allá de eso, la creatividad es una luz que nos guía. Las primeras obras pictóricas fueron siempre aquellas relacionadas con nuestra vida espiritual. La mayoría de ellas nos devuelven al tema básico de la puerta 49 y a su relación con las matanzas. En las antiguas cuevas que hay en España, se pueden ver las pinturas de animales durante su caza. Con la presencia del Sol en la puerta 12, esta Cruz de Angulo Derecho del Edén se nos revela como arte. Cuando la veamos con el Sol en la puerta 11, veremos el comienzo de la enseñanza pública, de la educación al alcance de todos, donde las ideas son un bien que pertenece a todo el colectivo humano. No puede vivir en la inocencia, porque la inocencia es al mismo tiempo la ignorancia. No es para eso para lo que estamos aquí, y no son esos los dones que nos fueron dados. Estos son seres que realmente tienen que aprender a manejarse en el plano mundano de la vida cuando llegan a este mundo.  ']
    },
    {
        cruz: 'Cruz Angulo Derecho del Fénix Durmiente 2',
        img: imagesCruzes['fenixdurmiente.jpg'].default,
        texto: ['Llegamos ahora a la segunda variante de la Cruz de Angulo Derecho del Fénix Durmiente, con el Sol de Personalidad en la puerta 20 - La Contemplación - que es la única puerta existencial. Con la Tierra posicionada en la puerta 34 se completa el Canal de Carisma, lo que establece una conexión directa entre el Centro Sacral y la Garganta. Uno de los formatos o estructuras básicas de los seres humanos es el de ser un Generador Manifestante.', 'La amplia mayoría de parejas tienen en su diseño conjunto la estructura de un Generador Manifestante, algo que se da en esta cruz por la oposición formada por el Sol y la Tierra, formando la estructura del más primario de todos los Generadores Manifestantes.  ', 'La expresión constante del canal 20/34 dice: "Ahora estoy muy ocupado". Eso es todo. Esta es una cruz que trata enteramente acerca de las ocupaciones y quehaceres en los que uno se implica para que todo esté hecho. Tenemos aquí un verdadero cambio con respecto a la variante que encontramos en el primer cuarto, donde el Sol de Personalidad estaba posicionado en la puerta 55, y la decisión estaba supeditada a que las cosas tuvieran el espíritu adecuado antes de comprometerse con ellas. Este es un proceso muy distinto. En esta variante de la Cruz del Fénix Durmiente, estar ocupado puede no ser más que una forma de estar profundamente dormido. Es gente que puede estar muy ocupada sin saber necesariamente por qué es así, el caso es no detenerse nunca el tiempo suficiente como para pensarlo. Saben que tienen que estar ocupados, y no tiene otra cosa que hacer que simplemente mantenerse ocupados todo el tiempo. Hasta que no tenga lugar la mutación de la puerta 55, esta gente no dejará de estar ocupada ni un solo momento.  ', 'Se pasarán la vida corriendo de un lado para otro, implicándose en actividades sexuales por no deprimirse, ya que no sólo tres de las cuatro puertas son de naturaleza individual, sino que forman una definición individual que implica la expresión a la Garganta a través de los Canales de Integración. Es decir, que estamos tratando de un campo energético capaz de desarrollar estados de profunda melancolía. Esta gente está siempre ocupada en ser feliz o en estar triste, completamente absorbidos en ese proceso. Sin querer impregnar mis palabras de ningún tipo de connotación moral, quiero decir que esta es una cruz de encarnación de profunda superficialidad. Lo que dicho de otra forma significa que la vida de esas personas no tiene tampoco ningún otro propósito. Esta es una cruz que no puede funcionar apropiadamente mientras no tenga lugar la mutación del Plexo Solar que le permita ser integrada en una nueva forma de conciencia. Mientras tanto, hay tantas capas y matices en el contexto de esta cruz que sus portadores son totalmente inconscientes de ellos. Aquí tenemos la versión más extrema de eso. Dicho sea de paso, que podemos llevarlo un paso más allá, porque al llegar a la yuxtaposición del hexagrama, nos encontramos con la más existencial de todas las cruces que existen.  ']
    },
    {
        cruz: 'Cruz Angulo Derecho del Fénix Durmiente 1',
        img:  imagesCruzes['fenixdurmiente.jpg'].default,
        texto: ['Para nosotros como especie, y particularmente en la era en que nos toca vivir a nosotros, una de las puertas más significativas de todas es la 55, puerta llamada «La Abundancia». Esto se debe a que en la sexta línea de la puerta 55 es donde tendrá lugar la mutación que comenzará a transformar el Plexo Solar en la residencia de nuestra consciencia del espíritu, la tercera y última de las formas de consciencia humana. Esto pone de relieve la importancia que la puerta 55 tiene para nosotros. El hecho de que su naturaleza encierre una llave para la mutación de la especie hace que la Cruz de Angulo Derecho que establece tenga un nombre con un importante componente místico. Se llama la Cruz de Angulo Derecho del Fénix Durmiente, lo que trae a la mente la imagen del ave fénix, que renace de sus propias cenizas. La analogía hace referencia expresa a la naturaleza misma del Centro del Plexo Solar, que es donde trabajan los grandes quemadores de nuestra maquinaria vital. El Fénix Durmiente es la mutación que ha estado latente desde siempre en la puerta 55. No es algo que emerja de repente, sino que siempre ha estado ahí como un potencial humano, esperando por el momento preciso en que el programa evolutivo lo ponga en marcha y esta cruz de encarnación pueda ser transformada. De hecho, esta es la única cruz de encarnación cuyo funcionamiento será diferente a partir del año 2027, y la descripción que hoy hacemos de ella dejará de tener vigencia. Esta es una cruz de encarnación que se verá directamente transformada por la mutación misma cuando ésta se haga efectiva.  ', 'En la Cruz de Angulo Derecho del Fénix Durmiente tenemos la oposición y polaridad entre el Sol de Personalidad en la puerta 55 y la Tierra de Personalidad en la puerta 59. La 55 es la puerta donde los estados de ánimo son más fluctuantes que en ninguna otra, ya que es la puerta donde la copa de la vida se nos antoja a veces medio llena, a veces medio vacía. Esta es una puerta donde al despertarte un día cualquiera por la mañana te encuentras con que el mundo que ves es negro y dificultoso, o donde al despertarte por la mañana el mundo te parece un lugar ligero y luminoso.  ', 'La puerta 59 está en la base de nuestras estrategias para la intimidad sexual. Cuando despierte el fénix durmiente, tendrá lugar una transformación en el funcionamiento de nuestra sexualidad. La transformación que tendrá lugar en el sistema emocional de los seres humanos irá acompañada de un decrecimiento muy notable de la población humana a medida que avanza el siglo XXI. En contra de lo que dicen las estadísticas y de las previsiones de las instituciones del mundo entero, estamos a punto de sufrir un revés irreversible en términos de población humana. Según mis estimaciones, es previsible que la población humana del planeta se reduzca como mínimo en un 50 %.  ', 'Gran parte de lo que nos conducirá a eso será debido a la creciente incapacidad humana para seguir reproduciéndose. Esta infertilidad es parte del proceso de mutación que tendrá lugar en esta cruz, cuando lleguemos al año 2027 y la mutación se haga físicamente efectiva. Se trata de un proceso evolutivo, y no puede manifestarse de la noche a la mañana. Pasaremos por una transición en la que con el tiempo todos tendremos acceso a ver lo que está pasando. Al principio solamente estará activa en las criaturas recién nacidas, y no acabará de manifestarse en la carne hasta 20 o 30 años después. A medida que estas criaturas crezcan y avancen hacia la madurez temprana, la transición o mutación acontecida en su Plexo Solar comenzará a ser cada vez más palpable.  ', 'Hay muchos elementos implicados en la reducción de nuestra capacidad reproductora. Existen ya poderosas y detalladas evidencias acerca de la disminución de esta capacidad en nuestra especie, por ejemplo, en la capacidad de los varones de producir esperma. Los problemas de infertilidad en algunas especies son de todos conocidos. Una casuística muy común en el paisaje médico americano es la solicitud de asistencia clínica por parte de parejas incapacitadas para engendrar hijos naturales. Es un fenómeno que alcanza cuotas epidémicas. La realidad es que la evolución nos está llevando naturalmente a un punto en el que la reproducción se verá severamente limitada.  ', 'En el nivel inconsciente del diseño seguimos teniendo el eje 20/34 - ese industrialismo y ocupación constante que conlleva el Canal de Carisma. Esta es gente que repite siempre el mismo mantra: "Todo lo que sé es que ahora estoy ocupado." Guiada por su industrialismo, este es gente que ha estado siempre buscando sexo, romance y amor - pero su búsqueda del amor resulta infructuosa y les hace sufrir profundamente porque el amor que buscan no es tan fácil de encontrar como ellos creen.  ', 'Debido a los elementos implícitos en la naturaleza de toda individualidad, es preferible que un individuo ame lo que no puede tener a que tenga lo que es incapaz de amar. Esto nos da la clave del funcionamiento temático de esta cruz de encarnación, que trata enteramente del amor y de la dedicación constante a buscarlo en la relación íntima con los demás, teniendo que sufrir por ello debido a la necesidad de buscar el sustento para el cuerpo. Es obvio que la Cruz del Fénix Durmiente no hace demasiado viviendo como un pez gordo. Existen todo tipo de problemas alimenticios asociados a la puerta 55, porque en ella se regula el estado de ánimo que se deriva de comer o no comer. Esta es una puerta que come o no come en función de su estado de ánimo. Esta es la cruz de encarnación que nos hace «enfermar de amor», y de ella se deriva todo el sufrimiento humano debido a la carencia de amor. Es uno de esos chistes de la vida, porque esta es la cruz que acabará con el amor sexual. Cuando el ave fénix despierte, la película cambiará, y cambiará también el guion de nuestras estrategias. La estrategia vital de los seres humanos sufrirá una profunda mutación.  ', 'El fenómeno que tendrá lugar es que habrá cada vez menos gente capaz de reproducirse por los métodos hoy considerados naturales, y todo nacerá a partir de la transformación del sufrimiento humano debido a la incapacidad de encontrar amor. Con el tiempo será algo que deje de preocuparnos, pero la transición en las estrategias de nuestra intimidad sexual será algo que requerirá el transcurso de varios siglos antes de que su implementación sea del todo posible. Será algo que requerirá el paso de mucho tiempo, pero también es cierto que es un proceso cuya evidencia se adivina cada vez más cercana. Esta es la cruz que mantiene vivo ese proceso. Si eres portador de esta cruz en la encarnación actual, y si sigues estando aquí cuando llegue el momento de la mutación, tendrás una sensibilidad muy aguda hacia la fuerza de esos jóvenes que empiezan a nacer a tu alrededor. La gente que tiene esta cruz de encarnación en la actualidad necesita dejarse guiar por otros. La naturaleza misma de esta cruz la convierte en algo incómodo de llevar, y sólo puede dejar de ser así cuando emerja la mutación latente que alberga.  ']
    },
    {
        cruz: 'Cruz Angulo Derecho del Gobierno 1',
        img:  imagesCruzes['gobierno.jpg'].default,
        texto: ['Con la salida del Sol de la puerta 63, y con su entrada en la puerta 22 - La Gracia - llegamos a un tipo de estructura diferente. De vuelta en el proceso individual, la puerta 22 representa nuestra capacidad de prestar atención. Aquí aparece la capacidad del individuo para escuchar, lo que trae consigo el potencial para una mutación. La fluctuación correcta de su respiración es fundamental para estas personas, que están muy abiertas a la música y al arte en general. Esta es la Cruz de Angulo Derecho del Regidor, y toma nota de la usurpación es anterior a este proceso. Es algo muy distinto, ya que el usurpador, al fin y al cabo, no tiene ningún derecho, y solamente está cogiendo lo que no es suyo. Está diseñado para tomarlo y apropiarse de ello. Pero en la Cruz de Angulo Derecho del Regidor hace su entrada el elemento de la Gracia. ', 'Esta es gente que tiene un don natural para gobernar, por lo que no necesita usurpar jamás el territorio de nadie, sino que recibe en su vida propuestas concretas para ejercer su capacidad de control y de gobierno. La usurpación es, como veíamos, un proceso transpersonal, de ángulo izquierdo, pero no así el regidor. El regidor es de ángulo derecho - si las normas que impone no son buenas, pagará ese karma más tarde. Recuerda que el ángulo derecho está creando su propio karma, sembrando las cosas con las que tendrá que tratar en el futuro.  ', 'En la primera versión de esta cruz, es decir, en la Cruz de Base de la Introspección, la Tierra de Personalidad está posicionada en la puerta 47.1. La puerta 47 - La Opresión - es un mecanismo difícil de manejar porque trata enteramente de nuestra capacidad de resolver la presión que ejerce sobre nosotros el pasado. Esta es la puerta en la que intentamos encontrar alguna claridad y un cierto sentido a nuestro pasado. La primera línea es muy ambiciosa, por lo que busca estar permanentemente ocupada. De aquí se deriva ese cliché que dice que cuando las manos están calientes, la cabeza está fría y despreocupada. Si estas personas están ocupadas ejerciendo el gobierno sobre algo, pueden estar muy asentados en la vida y ser gente muy sana, ya que han venido al mundo para eso. Imagina que te nace un bebé con la Cruz del Regidor. Puedes estar seguro de que controlará todo en tu vida, y que no podrás hacer nada por evitarlo. Es algo que puede ser descrito de muchas maneras diferentes no es preciso verlo como regidor de un gobierno, pero puedes estar seguro de que ejercerán un control férreo sobre tu vida. Es gente que ha venido al mundo para mandar y dictaminar las reglas del juego.  ', 'Lo que es verdaderamente importante acerca de estas personas es que saben escuchar - ese es su mayor don como gobernantes. Toda esta capacidad regidora es consecuencia de la puerta 45, en cuya naturaleza se encarna el pachá. Esa es la puerta del Rey o de la Reina, estamos tratando aquí con el regidor natural de la tribu y controlador natural del territorio. Si tienes la puerta 45 en tu perfil, recibirás siempre la oferta de controlar algún territorio y de ejercer alguna forma de gobierno.  ', 'La puerta 45 tiene la obligación natural de educar a la tribu. Recuerda que apenas unos pasos atrás el programa evolutivo imponía la necesidad de desarrollar la suficiente consciencia como para reconocer el valor de la mente. Los mejores regidores son aquellos que mejor educan a su gente. Aunque es algo que parece obvio, es tremendamente importante que se comprenda a fondo el alcance de esta cuestión. Con otras palabras, cuando acabamos de acostumbrarnos a pensar que con satisfacer las necesidades del cuerpo físico es suficiente, porque hemos logrado abatir la próxima pieza de caza o lo que sea, la evolución nos lleva a un punto en el que tenemos que encontrar otro camino que nos lleve más allá de lo físico y nos adentre en el campo educativo. Aquí tenemos el comienzo de la educación. La mayor responsabilidad de cualquier gobernante es ofrecer a aquellos sobre cuyas vidas rige el acceso a una buena educación.', 'Los regidores que tienen el Sol de Personalidad en la puerta 22 son gobernantes que saben escuchar, y debido a ese don están generalmente más abiertos a hacer lo que sea necesario para educar a sus seguidores. Gobernar sin educar conduce, en última instancia, a la destrucción, ya que finalmente esa forma de gobierno se topa con la rebelión y la revolución. No se puede evitar. La verdadera responsabilidad principal de un gobernante es educar a aquellos sobre quienes gobierna.  ']
    },
    {
        cruz: 'Cruz Angulo Derecho del Gobierno 2',
        img: imagesCruzes['gobierno.jpg'].default,
        texto: ['Con la entrada del Sol en la puerta 45, llegamos al comienzo de nuestra capacidad de gobernar. Ya hemos tenido ocasión de ver la temática de esta Cruz de Angulo Derecho del Gobernar en la expresión de su aspecto más dulce - a través de la Gracia - en el primer cuarto de encarnación. Toda la fuerza para gobernar - que puede llegar a adquirir un cariz muy duro en sus formas - ha sido dotada de un aspecto muy bonito cuando consigue manifestarse a través de la puerta 22 de la Gracia. Aquellos eran el tipo de gobernantes - al comienzo del desarrollo de esa capacidad - que tenía la capacidad de comenzar el proceso de educar a los miembros de su tribu, lo que representa la responsabilidad más primordial de cualquier gobernante. ', 'Un gobernante que sabe escuchar y estar abierto a los demás, puede llegar a reconocer los verdaderos problemas a los que se enfrenta su comunidad. Consiguientemente, es capaz de poner en marcha algún tipo de solución para ellos. Pero aquí estamos tratando de un aspecto muy distinto de esta cruz, ya que hablamos de la verdadera práctica del gobierno. La gente que viene al mundo sobre esta cruz de encarnación está aquí para asumir el mando.  ', 'Todas las personas que tienen su Sol en la puerta 45 reciben a lo largo de su vida ofertas de poder y territorio en el que ejercer el mando. Obviamente, eso no significa que le vayan a ofrecer el gobierno de una nación a cada uno de ellos. No obstante, esas oportunidades siempre estarán saliéndoles al camino en muchos niveles distintos de su vida, tanto en el plano personal como en otros. En la segunda variante de esta Cruz de Angulo Derecho del Gobernar la temática está centrada en la voz posesiva de la puerta 45. Esta es la más posesiva de todas las cruces de encarnación. "¡Esto es mío! No es tuyo. La tierra que pisas me pertenece. El aire que respiras me pertenece". ', 'Es muy duro vivir en el mundo actual siendo portador de la Cruz del Gobernar. Al fin y al cabo, el menos en el mundo occidental, ya no hay ningún tipo de estructura verdaderamente tribal que se mantenga vigente. Nos hemos fundido todos en el colectivo humano, y el liderazgo que seguimos ya no es el del hombre fuerte; el líder ya no es el rey. Para nosotros, el rey y la reina forman parte del mundo rosa, cuya única función es la de mantenernos entretenidos. La realidad es que el liderazgo que hoy más respetamos es el ejercen nuestros líderes electos, lo cual es lógico (canal 31/7). El mundo ya no es lo que era para las personas que tienen el canal 45/21. Ahora encontramos a estas personas en los asientos de las juntas directivas. Es decir, que han creado nuevos reinos y condados que funcionan en la cultura y subcultura de las grandes empresas en el mundo de los negocios. Ese es el lugar natural ahora para el canal 45/21; ese es el lugar natural para este tipo de energía.  ', 'Originalmente esta cruz traía consigo la demanda de un gobernante, de alguien con capacidad para ejercer el control de la tribu. Pero también hay algo más que tiene esta cruz en sus orígenes, y es el dinero, el hecho de que todo gira en torno al dinero, a la recolección y a la obtención de dinero. Aquí se trata de comprender que no sólo el individuo necesita tener más de lo él o ella necesita, sino que la sociedad como un todo tiene que tener también más de lo que necesita. La sociedad necesita disponer de suficientes recursos para pagar todos los servicios necesarios para mantener a la gente tranquila - un pollo en cada olla, por poner un ejemplo. Es decir, que el gobierno que emerge de esta cruz tiene una cualidad material profundamente arraigada en su naturaleza, lo que en la actualidad le conducirá naturalmente a los salones de la juntas directivas de las grandes empresas. ', 'Jack London era un maravilloso escritor americano de finales del siglo XIX, muy conocido, de hecho, por sus historias acerca del salvaje mundo animal. Sin embargo, este señor fue uno de los primeros socialistas, y escribió un libro que se llamaba “El Talón de Hierro”. Era un libro extraordinario que trataba de las inmensas oligarquías capitalistas que lo conquistan y dominan todo. Una vez la evolución les a privado del gobierno a través del liderazgo dinástico, algo tenían que hacer. ¿Que va a hacer Bill con 90 billones de dólares en su cuenta? Lo menos que puede hacer es ejercitarse en el uso del poder.  ', 'Tenemos en este mundo de los negocios un punto de transición muy importante, y es que sin él - sin negocios - no habría ninguna posibilidad real de disponer del lenguaje. La escritura comenzó a través de las cuentas. Si miras al pasado, en la primeras ciudades-estado de la antigua Mesopotamia, reunían todo el grano que se cosechaba en las afueras, pero necesitaban poder llevar bien la contabilidad. Descubrieron que construyendo un entorno cerrado y protegido, no eran necesaria tanta mano de obra para trabajar los campos. Es decir, que los obreros podían ser dedicados a otras labores, como hacer zapatos, cestos, alfarería, lo que fuera necesario en cada caso. Para poder almacenar todo el grano, no solamente necesitaban saber cuánto grano tenían en cada momento, sino que debían también saber identificar al propietario de cada parte. Es obvio que sin los negocios, nunca hubiera nacido la escritura.  ', 'Tenemos en este mundo de los negocios un punto de transición muy importante, y es que sin él - sin negocios - no habría ninguna posibilidad real de disponer del lenguaje. La escritura comenzó a través de las cuentas. Si miras al pasado, en la primeras ciudades-estado de la antigua Mesopotamia, reunían todo el grano que se cosechaba en las afueras, pero necesitaban poder llevar bien la contabilidad. Descubrieron que construyendo un entorno cerrado y protegido, no eran necesaria tanta mano de obra para trabajar los campos. Es decir, que los obreros podían ser dedicados a otras labores, como hacer zapatos, cestos, alfarería, lo que fuera necesario en cada caso. Para poder almacenar todo el grano, no solamente necesitaban saber cuánto grano tenían en cada momento, sino que debían también saber identificar al propietario de cada parte. Es obvio que sin los negocios, nunca hubiera nacido la escritura.  ']
    },
    {
        cruz: 'Cruz Angulo Derecho del Gobierno 3',
        img: imagesCruzes['gobierno.jpg'].default,
        texto: ['La Cruz de Angulo Derecho del Gobierno - con el Sol en la puerta 47 - donde el ejercicio del gobierno está legitimado. Observa bien la diferencia en la transición entre una puerta y la otra. La puerta 64 simplemente está abierta, llena a rebosar de todas esas memorias del pasado que tiene que procesar. De modo que siempre está presionada por la necesidad de alcanzar la puerta 47 que se encuentra en el otro lado del canal: "Tengo que hallarle el sentido a esto..., tengo que hallarle el sentido." De ahí nace toda la ansiedad de estas personas. Recuerda que lo que nos atormenta siempre es lo que no somos, y no lo que somos.  ', 'Por otra parte, el Sol en la puerta 47 hace que esta Cruz de Angulo Derecho del Gobierno busque y encuentre su inspiración siempre en el pasado. Es uno de los pequeños anzuelos que, lanzados corrientemente por los comentaristas políticos americanos, poner un poco de Reaganismo en boca de John Mc Cain si quieren hacer que sus propuestas suenen un poco mejor. De ese modo se asegura que todo el mundo se haya enterado de que es una cita del pasado. Se toman prestadas las referencias del pasado para ponerlas al día y poder hacer uso de ellas, interpretándolas a través de la puerta 47, buscándoles el sentido, para poder finalmente reclamar las funciones de gobierno para uno mismo.  ', 'Piensa un momento en cómo se desarrolla todo esto. Es algo que comienza en la línea 45.3 del eje prenatal, que es un proceso marcado por el intento y error de la tercera línea. Es decir, que no es más que una manera en la que el gobierno intenta superar los errores del pasado. De modo que no es solamente una cuestión de idolatrar el pasado. Al mismo tiempo que los políticos usan el Reaganismo para exaltar las virtudes del pasado, pueden utilizarlo para desmerecer la política aplicada por el presidente Carter. El pasado puede ser usado de las dos maneras - para hallarle sentido a sus posiciones y usándolo en beneficio propio - y aprovecharse de los errores del pasado para intentar establecer el propio régimen de gobierno. Hay que recordar siempre algo muy fundamental acerca de la gobernación - lo veremos con toda claridad cuando lleguemos al ángulo izquierdo de la cruz, y es que la gobernación tiene un compromiso muy específico con la instrucción y educación. Al aumentar la educación y la conciencia de su gente, el gobernante incrementa la riqueza de su tribu, y finalmente también la de su país. Este es uno de los temas más dinámicos en la naturaleza de esta cruz, que trata enteramente de la capacidad de aprender del pasado.  ', 'Hay miles de personas que se encarnan con esta cruz, y no todas tendrán las ideas que llegarán a ser expresadas colectivamente como un proceso arquetípico. Sin embargo, todas disponen de esa capacidad en los niveles mundanos de su vida. Esta es gente que hace magníficos investigadores, con un don extraordinario para investigar las esferas y los usos del poder a partir de las experiencias del pasado. Ese es uno de los temas básicos de lo que llamamos historia. Durante la amplia mayoría de la historia registrada - al menos lo que llamamos historia registrada, que, por cierto, lleva ya mucho tiempo dando vueltas, lo único de lo que ha quedado registro es de las vidas de aquellos que gobernaron. La historia común es un fenómeno tan reciente que no va más allá del siglo XX; es la primera vez que existe algo semejante. En el pasado, toda la historia escrita giraba en torno a aquellos que gobernaron en el mundo. En esta cruz tenemos una de las raíces más hondas de esa temática.  ']
    },
    {
        cruz: 'Cruz Angulo Derecho del Gobierno 4',
        img: imagesCruzes['gobierno.jpg'].default,
        texto: ['Llegamos a la Cruz de Angulo Derecho de los Faroles, quiero decir...la Cruz de Angulo Derecho del Gobierno. Aunque con el Sol de Personalidad en la puerta 26, el primer título tampoco es nada desacertado. Aquí tenemos el gobierno ejercido a través de la exageración, del marketing y de la propaganda en su contexto más moderno. Es decir, que aquí se trata de promocionarse a uno mismo como líder. Coges a un pelele como George W. y lo conviertes en alguien de calibre presidencial. Me encanta eso, todo lo que tienes que hacer es mirarle a ese hombre a la cara y enseguida te das cuenta: "Oye, qué buen marketing." Sesenta y nueve millones de dólares más tarde todavía estás diciendo: "Qué buen marketing." ', 'Aquí tenemos el marketing del gobierno con un toquecito tribal. "No, no tengo nada en contra de la bandera confederada." Es gente cuya política apunta directamente al corazón de la tribu.  ', 'Esto no es como la puerta 45 - recuerda que los gobernantes alzan siempre la nariz hacia el aire de las alturas. Es una de las cosas a entender acerca de las mecánicas del instinto y del olfato. Esa es una corriente en la todo el mundo emana un cierto olor, excepto la puerta 45, que como no soporta el olor alza su nariz como buscando un aire más puro. Pero la puerta 26 no se comporta para nada de ese modo, ya que se pasa la vida estrechando las manos de la gente, y dejando en todos la impronta de su fragancia personal. Estas son personas que se ponen al frente de la cuestión, y cuyo mensaje básico es: "Soy uno de los vuestros." Palabras de George W. Bush: "Yo no soy parte del sistema. Yo soy uno de vosotros." Solamente la puerta 26 es capaz de mentir de ese modo, solamente esta puerta es capaz de decirte que es uno de los tuyos. Pero, la realidad es que no es uno de los tuyos, y que nunca lo será. Nunca será un americano más, tan ordinario como cualquier otro, porque no es tribal. Comoquiera, esto es una cuestión de marketing.  ', 'Aquí tenemos una forma de gobierno muy distinta a las vistas hasta ahora. No es como el gobierno de la gracia - puerta 22 - donde veíamos un interés genuino por las necesidades y apuros de la gente. Tampoco es como el gobierno de la puerta 47, que nos decía: "Mi gente está oprimida. Tengo que ser capaz de hacer algo más por ellos. Tengo que ayudarles de algún modo." Ni como la puerta 45, que dice: "Yo soy el regente natural, por lo que cobraré suficientes impuestos y los mantendré en la pobreza, pero al menos los educaré para que quizás mañana les pueda ir algo mejor." ', 'Lo que dice la puerta 26 es lo siguiente: "Yo quiero tener el poder. Yo nací para ostentar el poder. Voy a por ello." Eso es todo, luego sólo le queda aprender a hacer bien su trabajo. No es que los demás aspectos de la Cruz del  Gobierno - 22, 47, 45 - no vayan a estar presentes en la conciencia de esta persona, todo eso estará ahí trabajando de fondo. Sin embargo, su manera de llegar a gobernar es a través de la fuerza de su ego, y a través de su capacidad para proclamar su derecho a gobernar, exagerando acerca de los beneficios que su forma de gobierno tendrá para todos. Harán propaganda de eso como si se tratara de una comodidad o de un artículo de lujo.  ', 'Aquí es donde encontramos la política como un medio de hacerse la vida cómoda. Se trata de personas que se venden a sí mismas a la gente a través de todas las promesas que hacen. Eso es lo que hace el ego, promesas de todo tipo. O sea, que tenemos aquí al auténtico gobernante del ego que vive de hacer promesas. Como, obviamente, la política no trata de otra cosa más que de las promesas, este es uno de los ingredientes básicos de la Cruz del Gobierno. No es cuestión de si esta variante es mejor o peor que cualquiera de las otras. Se trata simplemente de una variación más sobre el mismo tema.  ']
    },
    {
        cruz: 'Cruz Angulo Derecho del Maya 2',
        img: imagesCruzes['maya.jpg'].default,
        texto: ['Las puertas que apuntan al Ajna desde la Garganta inspiran un profundo asombro debido al extraordinario trabajo que realizan. El Centro de la Garganta contiene nuestro sistema tiroideo, y es también el centro de nuestra capacidad metamórfica. Eso quiere decir que esas tres puertas que buscan el Centro Ajna desde la Garganta son las grandes puertas metamórficas de nuestra especie, una capacidad metamórfica realmente mágica.  ', 'La puerta 62 de los detalles es nuestra voz más razonable, y la menos razonable también, porque es nuestra voz lógica por excelencia. Esta es una voz que dice: "Yo pienso", y que demuestra sus palabras con hechos. Sin embargo, esa es una voz que responde a un patrón visual en la puerta 17, un patrón que tiene que traducir en lenguaje. Como la puerta 62 es la que le atribuye un nombre a cada cosa, es verdaderamente la puerta del Maya. Como portador de la puerta 62, Ra siempre está haciendo frases propias y poniéndole nombre a las cosas. El místico Osho, que también era portador de esta puerta, siempre estaba cambiándole el nombre a la gente. En el momento en que la puerta 62 le pone a algo un nombre o una fórmula, establece una fórmula que los demás pueden entender.  ', 'O sea, que la puerta 62 está realmente llena de magia. Al ser capaz de describir las cosas de un modo lógico, dándole un nombre a cada cosa, y dotando esos nombres de atributos lógicos, esta puerta nos da un terreno común a partir del que podemos entender todos juntos. Lo único que da seguridad a los seres humanos - no hay nada más que sea capaz de proporcionárnosla - es el entendimiento lógico. Solamente a través de la lógica podremos liberarnos y aliviarnos del dolor. El Diseño Humano no es más que eso - una sanación lógica. Su lógica tiene el poder para transformarte. Esa es la belleza de lo que la lógica puede llegar a dar de sí.  ', 'La puerta 62 es la puerta del Maya, y es la que le da su nombre a esta Cruz de Angulo Derecho del Maya. Nuestro modo de medir las cosas es nuestro modo de expresarlas a través del lenguaje; las palabras son el fruto de nuestras mediciones. Cuando todos asentimos ante alguna definición, esta se hace real. Simplemente lo asumimos así. Esa es la magia inherente a esta puerta.  ', ' En esta variante de la Cruz del Maya no se trata - como con el Sol en la puerta 42 - del hecho de que en el Maya todo tiene que tener su fin. Por supuesto que todos tenemos que morir y confrontar estos temas de la muerte, pero aquí estamos tratando con los mensajes de la puerta 62, que nos dice: "Mira, aquí hay una..., ¿cómo le llamamos? Pongámosle un nombre".  ', 'En algún rascacielos de Nueva York, hay un tipo bajito que está sentado en una oficina minúscula detrás de montañas y montañas de papel, y su trabajo consiste en darle un nombre a las estrellas famosas. Ese es su trabajo. Le puedes enviar tu nombre, pagarle, y ya es oficial. Pero esa es una necesidad humana de ponerle un nombre a todo. Es decir, que, si sabes su nombre, entonces lo conoces - así es el Maya. Si no puedes darle un nombre, entonces...  Cuando intentas recordar el nombre de alguien, si no puedes dar con el nombre de esa persona, es como si no existiera, como si se desvaneciera en el Maya, en el sueño de la vida. Los nombres son muy importantes para nosotros.  ', 'Siendo una de las fuerzas educadoras más poderosas que tenemos, estos seres nos adentran profundamente en el Maya a través de su capacidad para describirlo. Tienen la capacidad de describirlo de un modo en el que podemos acceder a un entendimiento general de él.  ', 'La oposición a los detalles de la puerta 62 está en la puerta 61 - La Verdad Interior. Con otras palabras, la verdad interior está en el detalle. El corte de las seis líneas del hexagrama 61 tiene dos líneas yang, seguidas de dos líneas yin con dos líneas yang arriba del todo. El yin está enterrado en el centro del hexagrama. La verdad está oculta en el interior de la forma. La verdad interior es algo que solamente puede emerger del detalle. Cuando alguien te dice que tienes que creer en algo, debes saber que sin los detalles correspondientes no puede haber verdad interior. Si no sabes cómo funciona esto, no importa de qué se trate ni de qué hables. Al final, no hay salvación para ti en el plano mental hasta que no entiendas. Simplemente no la hay.  ', ' De modo que tenemos profundamente enclavado aquí un tema lógico que nos capacita para expresar el nombre de las cosas, para darles su nombre y con ello crear el Maya. Al hacerlo, creamos el lenguaje, ya que aquí es donde tiene sus orígenes el lenguaje. La capacidad para articular el sonido emergió de la puerta 12, pero el lenguaje mismo, la creación del lenguaje, de la gramática, de la estructura de la sintaxis, todo eso nació de la puerta 62.  ']
    },
    {
        cruz: 'Cruz Angulo derecho del Maya 4',
        img: imagesCruzes['maya.jpg'].default,
        texto: ['Con el Sol de Personalidad en la puerta 61 - La Verdad Interior - llegamos a la Cruz de Angulo Derecho del Maya. Aquí tenemos la inspiración mental en el plano de la individualidad, que trata enteramente de la certidumbre del saber y de la presión por llegar a tenerla. Esa presión por llegar a saber con certeza puede desembocar fácilmente en la locura, o, mejor dicho, puede volverse irracional con mucha facilidad. La puerta 61 busca constantemente la racionalidad de la puerta 24, lo que facilita mucho que la presión de la 61 conduzca al ámbito de lo irracional.  ', 'El saber es algo que funciona a partir de una fórmula muy simple. En primer lugar, es preciso saber lo que necesitas saber - quién eres, y cómo funcionas en el mundo. Ese es el conocimiento más esencial - conócete a ti mismo. En segundo lugar, has de saber que no puedes saber lo que no se puede saber - ahí es donde surge el elemento irracional. Hay tanta presión que proviene de esta puerta 61, que frecuentemente la gente se pierde intentando llegar a conocer lo incognoscible. En tercer y último lugar, existen también muchas cosas que no es necesario que conozcas. Yo, por ejemplo, no necesito saber cómo funciona el motor de mi coche, doy gracias a Dios por ello. O sea, que otro se puede ocupar de eso.  ', 'Con el Sol de Personalidad en la Puerta 61, el Maya se convierte en el exclusivo foco de todo el proceso de pensamiento. Dicho de otro modo, "Necesito saber qué significa y cómo funciona todo esto. Necesito conocer qué es Dios. Necesito saberlo todo, si no quiero ser un fracasado". No sólo necesitan las personas de esta cruz conocer todas esas cosas, sino que además necesitan conocerlas con todo lujo de detalles. Esta no es una cruz que incorpore ningún aspecto abstracto en su configuración, por lo que difícilmente estará dispuesta a creer a priori en nada de lo que se le diga. En su lugar, lo que sí tiene esta cruz de encarnación es una tremenda presión por llegar a saber.  ', 'He dicho muchas veces que la presencia de alguna de las puertas del Centro de la Cabeza puede resultar realmente incómoda para sus portadores, pero que también puede ser fuente de inspiración profunda para las personas con las que se va encontrando en el camino. Mientras tu mente tenga autoridad para tomar decisiones en tu vida, la presencia de la puerta 61 en tu diseño puede hacer que te vuelvas completamente loco, ya que te arrastrará a pensar que en el conocimiento absoluto está la única manera de sobrevivir en esta vida. Yo sé muy bien lo que eso significa, ya que tengo mi Sol de Diseño en la puerta 61 del misterio. Recuerdo perfectamente cómo era eso antes de recibir estos conocimientos  acerca de las mecánicas del Maya. Aunque ahora mi puerta 61 sea una fuente de inspiración para todos mis estudiantes, durante al menos cuarenta años de mi vida no tenía otro valor que un simple quebradero de cabeza. Hay una infinitud tan grande de cosas que se pueden llegar a saber, que uno no acabaría nunca. Te volverías loco si quisieras llegar a saberlo todo.  ', 'La importancia de lo que los mecanismos del Maya hacen para nosotros, y el valor que esta cruz tiene para nuestras vidas están enraizados en la puerta 62 - la Preponderancia de lo Pequeño. La puerta 62 es la que se encarga de ponerle nombres a las cosas y de enumerarlas, pero es la puerta 61 quien se encarga de introducir algo nuevo en el Maya. El Maya siempre se está refrescando con elementos nuevos, ya que ese es nuestro proceso evolutivo. Con la presión de la puerta 61 como telón de fondo, de aquí proviene la presión que obliga al Maya a mutar, por lo que el Maya no es nunca estático. A la inspiración lógica y abstracta le gustaría disponer de un Maya estático y predecible, en el que todo podría ser documentado. Eso nos permitiría conocer realmente lo que hay detrás del velo de ilusión. la individualidad, sin embargo, dice siempre: "Sí, sí, sí, pero tenemos la posibilidad de mutar, y, sin mutación no hay vida". O sea, que el Maya está cambiando siempre, y el hecho es que la puerta que está abierta y receptiva a esos cambios es la puerta 61 de “la Verdad Interior”. Esta es la gente que será capaz de acercarnos a esos procesos, y la que nos inspira a investigar el Maya en un nivel mayor de profundidad. ']
    },
    {
        cruz: 'Cruz Angulo derecho del Maya 1',
        img: imagesCruzes['maya.jpg'].default,
        texto: ['El hexagrama 42 nos lleva a un lugar en el que se activan los temas del comienzo y del final. Como puerta en la que se completan los procesos, la 42 es una puerta de crecimiento. En este contexto, esta es una puerta que trata realmente del cierre de un ciclo (todas las puertas que hemos estado viendo hasta llegar a este punto) y aquí es donde comenzamos los preparativos para lo que se nos viene encima en los siguientes hexagramas.  ', 'La Cruz de Angulo Derecho del Maya es absolutamente esencial para nuestro desarrollo. Para que todos podamos sentirnos completos y satisfechos de nuestro proceso humano debemos llegar a ser todos maestros del Maya. Se trata, en ese sentido, del entorno en el cual vivimos. Todos podemos alcanzar la maestría del Maya si aprendemos a manejar correctamente nuestra propia naturaleza. A partir de la aceptación de nuestra propia autoridad interna, y de nuestro proceso personal a través del tipo, tenemos acceso a reconocer el funcionamiento mecánico del Maya. Esto no quiere decir que uno se vaya a poner a estudiar todos los matices del Maya, sino que significa simplemente que en el momento en que te rindes a la vida es cuando puedes ver cómo funcionan los mecanismos de cuanto hay a tu alrededor.  ', 'No debemos olvidar nunca que al tratar con cruces de ángulo derecho se pueden dar en cuatro variaciones distintas en función de dónde está ubicado el Sol de Personalidad. En este caso, con el Sol de Personalidad en la puerta 42, lo más importante es que podamos ver y ponerles el broche final a las cosas, y no simplemente que nos conformemos con unas perspectivas abiertas a muchas vías. De ahí nacerá lo que en adelante llamaremos ciencia. Es decir, que en esta puerta 42 hunde sus raíces la necesidad humana de terminar concluyentemente las cosas, pero ¿cómo funciona eso exactamente? ¿Dónde está el comienzo? ¿Dónde el medio? ¿Dónde el final? ¿En qué consiste ese proceso? ', 'Hay una dificultad inherente en la puerta 42, y es que está diseñada para concluir las cosas. Como es parte del formato cíclico de energía y está diseñada para terminar las cosas, cuando se implica incorrectamente en algo puede quedarse enganchada a ello durante mucho tiempo. Por ejemplo, la persona de la puerta 42 se enamora y decide casarse, sólo para descubrir una semana más tarde que su pareja no le gusta. Luego puede que le tome 30 años llegar a divorciarse - así es esta puerta. Con el Sol de Personalidad en la puerta 42 todo gira en torno a la necesidad de implicarse únicamente en cosas que uno realmente pueda llevar a una conclusión. Eso significa que uno debe entrar en contacto con esas cosas de la manera correcta. De lo contrario, el proceso del Maya se convierte en simple y llana confusión, y la persona acaba inmersa en situaciones donde le toca vivir una vida que obviamente no está hecha para ella. Esa persona acabará teniendo que hacer cosas que no son para ella, sintiéndose insatisfecha en esos procesos, y lo que es más importante, sin saber cómo ni por dónde salir de esas situaciones.  ', 'Por ejemplo, es muy importante que los niños que son portadores de la puerta 42 (no importa en qué lugar de su cruz se encuentre) entren correctamente en contacto - es decir, en función de su tipo - con los estudios que van a desarrollar. De lo contrario, nunca llegarán a sentirse satisfechos de los resultados que cosechan, ni podrán realizar correctamente su labor en el Maya.  ', 'Esta es una cruz de encarnación que se asienta sobre los detalles que acumula. Con la Tierra de Diseño en la puerta 62, estas son fuerzas que están aquí para recolectar todos los detalles, ya que necesitamos entender cómo funcionan todas estas cosas. Sin ellas, no conseguiríamos librarnos nunca del poder que el plano mental ejerce sobre nosotros. No se debe olvidar que la mente no puede ser vencida a través de la lobotomía. Eso no puede funcionar jamás. La manera correcta de vencerla es aprendiendo a conocer su funcionamiento con exactitud, lo que nos permite entendernos a nosotros mismos y al mundo que nos rodea. Eso es algo que ha dejado de estar vetado para cualquiera. Es algo que cualquiera puede llegar a conocer en este preciso instante sólo con vivir siguiendo la naturaleza de su tipo. Vivir siguiendo la naturaleza de su tipo es todo lo que uno tiene que hacer para encontrar su sitio en la totalidad y vivir en paz consigo mismo.  ', 'La Tierra de Personalidad permanece en la puerta 32, y trae consigo el miedo al fracaso. Este miedo al fracaso es el lado opuesto de la necesidad de saber establecer los compromisos correctos. Si no sabes comprometerte correctamente con las cosas, el fracaso te perseguirá hagas lo que hagas. La gente de esta cruz sabe muy bien de qué hablo. Cuando a algún nacido con la Cruz de Angulo Derecho del Maya le dan a hacer un crucigrama, y no sabe cómo hacerlo y mucho menos completarlo, se enoja terriblemente por no haber sabido completarlo. En el momento en que asumen que no van a poder acabarlo se sienten como si fracasaran personalmente. Todo el asunto del fracaso gira en torno a la evaluación o valoración de las cosas en un mundo material.  ']
    },
    {
        cruz: 'Cruz Angulo Derecho del Receptáculo del Amor 4',
        img: imagesCruzes['amor.jpg'].default,
        texto: ['En la ilustración del Receptáculo del Amor con la que comenzamos, se describía la puerta 10 como el labio del receptáculo, del cual emana la vida, del cual emana la sangre.  ', 'La puerta 10 representa el potencial para amar el camino que uno tiene que recorrer. De ahí que tenga raíces que salen naturalmente de las variaciones de la Cruz del Edén. Antes de poder amarte a ti mismo, tienes que saber amar el hecho de estar en el mundo y de existir en él a través de tu cuerpo. Primero has de amar esas cosas, y entonces encuentras el amor a ti mismo reflejado en todo lo que forma parte de tu vida. Si te resistes al camino, si te resistes a lo que significa existir en el mundo de la forma, entonces nunca tendrás el comportamiento que necesitas para poder encontrar el amor a ti mismo.  ', 'Uno de los chistes implícitos en esto es que estamos diseñados para encontrar el amor a uno mismo a través de nuestra capacidad de sobrevivir en el ahora existencial. El chiste reside en que si estás vivo en el instante presente, entonces ¿por qué no te estás amando a ti mismo? Ten en cuenta que ahí es donde siempre tuvo sus raíces el genuino amor a uno mismo. Es decir, que poder decir: "Yo sé cómo sobrevivir" es todo un logro. Al fin y al cabo, si nos comparamos con el resto de las formas de vida que existen sobre la Tierra podemos constatar que nos va realmente bien. Somos una especie dura de pelar y es nada fácil eliminarnos. De eso es de lo que se trata. De ahí es de donde se deriva nuestra fuerza. "Yo sé cómo sobrevivir".  ', 'De la puerta 10 nacen muchas variaciones de comportamiento distintas, con lo que tenemos aquí una cruz muy vinculada a la temática del comportamiento humano. Lo que más llama la atención de la vida de estas personas es el extremado cuidado que ponen en su comportamiento. Por ejemplo, la persona que tiene la línea 10.1 es alguien que apenas se deja ver, de modo que un momento está ahí, y al siguiente ya no lo está. Todo el mundo sabe que la persona de la línea 10.2 busca esconderse de los demás, porque su comportamiento viene determinado por el tema del ermitaño. "Oh sí, es alguien que vive en un lugar solitario por ahí arriba": Los demás simplemente lo saben, porque lo revela el comportamiento del ser.  ', 'En el caso de la puerta 10 tenemos una de las puertas que más dirección dan en la vida, sólo que su dirección está siempre orientada a partir de un cierto comportamiento. Es algo que he podido observar a partir de mi trabajo con gays, un grupo social que acusa una marcada tendencia a incorporar el Centro-G definido a través de la puerta 10, mayormente con las líneas 3 y 5. De ese modo crean una nueva dirección para el amor. En eso radica precisamente su capacidad. Estas son personas que vienen al mundo con la capacidad innata de moverte a través del ejemplo de su comportamiento.  ', 'Considerando la puerta armónica a la posición del Sol de Personalidad encontramos siempre la posibilidad de la máxima realización de cualquier cruz. Sin embargo, en el caso de esta cruz eso se convierte en un proceso lleno de matices y complejidades debido a la posibilidad de definirse a través del contacto con tres puertas diferentes. Necesita encontrar la puerta 20 para poder tener acceso a despertar en el ahora. Necesita también encontrar la puerta 57 para disponer de la intuición que le permita sobrevivir en el ahora. Por último, necesita encontrar la puerta 34, porque su poderío natural es el que le permite seguir las convicciones de un arquetipo humano que sabe penetrar el instante presente. La puerta 10 necesita encontrar todas esas cosas, y al buscarlas, lo que explora es un proceso marcado por un profundo individualismo.', 'Notarás enseguida que las personas que tienen el Sol de Personalidad en la puerta 10 de la Cruz del Receptáculo del Amor no emanan la misma sensación que el resto de las variantes del "receptáculo". Por supuesto que también está presente en ellas - son siempre el tipo de personas que tomarías en tus brazos - pero no emanan la misma cualidad de las otras variantes. Esta cuarta variante se ve orientada hacia un proceso extremadamente individual, y eso significa que viven con el foco puesto en ellas mismas y en su propio comportamiento. De hecho, lo que hacen es buscar el amor a ellos mismos intentando llegar a ser un individuo puro   ']
    },
    {
        cruz: 'Cruz Angulo Derecho del Servicio 2',
        img: imagesCruzes['servicio.jpg'].default,
        texto: ['Si tienes en tu diseño la puerta 33 o la 52, y todavía no has estado en la cárcel, es que eres una persona con mucha suerte. Decimos que la puerta 52 - La Quietud de la Montaña - también llamada la puerta del Buda, es la gran puerta del poder pasivo. Es parte del formato de energía del circuito lógico, generador del foco y de la concentración. Todas las energías de formato que conectan el Centro de la Raíz al Sacral tienen un potencial para la depresión. La depresión potencial de la puerta 52 nace de no tener nada que merezca la pena hacer mientras está quieta. Esta puerta tiene la capacidad de enfocar y concentrarse en la quietud, lo que nos permite estudiar, leer, sentarnos delante del ordenador, o lo que sea en cada caso. Todo lo relacionado con esta Cruz de Angulo Derecho del Servicio está enraizado en la concentración pasiva de la energía.  ', 'Aquí encontramos nuestra habilidad para crear burocracias. Siendo esta una cruz cuya estructura es enteramente lógica, tiene la responsabilidad colectiva de asegurar con su lógica la corrección del patrón que estamos manejando, para que podamos avanzar hacia el futuro con seguridad. Con su foco puesto en la puerta 52, esta es gente que quiere sentarse a planificar bien las cosas. Su modo de prestar servicio es pasivo. Este modo de prestar servicio nos lleva de vuelta a la estructura tribal del canal 45/21 - en este caso a la puerta 21 - como podremos ver en la cruz yuxtapuesta que viene a continuación. La naturaleza de este servicio consiste en que finalmente acabará convirtiéndose en una profesión - profesión intelectual si lo deseamos. Siempre que acudimos a un profesional de este tipo es para obtener de ellos información.  ', 'Con la definición del canal 18/58 dentro de la estructura de esta cruz, hay aquí una tremenda cantidad de recursos energéticos alimentando el potencial del talento. Después de todo, la función del canal 18/58 es la de proveer la energía necesaria para la corrección. Sin embargo, las soluciones no se encuentran en el canal 18/58, sino en la puerta 48. Sin la identificación de la puerta 16, el canal 18/58 carece de las habilidades necesarias para manifestarse. Se trata de una energía muy básica, una energía proyectada, que simplemente tiene la capacidad de reconocer que algunas cosas necesitan ser corregidas. De modo que si has nacido con esta Cruz del Servicio, lo demás vendrán siempre a buscarte. Por otra parte, tener la puerta 52 integrada en tu perfil provoca que tengas tendencias a apoltronarte en el sofá como una patata. ']
    },
    {
        cruz: 'Cruz Angulo Derecho del Servicio 4',
        img: imagesCruzes['servicio.jpg'].default,
        texto: ['Con el Sol en la puerta 58 tenemos la cuarta variante de la Cruz de Angulo Derecho del Servicio. Se mantiene el eje prenatal de las puerta 18 y 17, que siempre aportarán una cualidad crítica y prejuiciosa. Sin embargo, no debemos olvidar que esos atributos son necesarios. Al fin y al cabo, sin críticas y sin juicio es imposible que podamos cuestionar los patrones con los que vivimos. Eso nos llevaría a dejarnos absorber por patrones que pueden, de hecho, no ser válidos e ir en nuestro propio detrimento. A pesar de que a veces pueda resultar molesto tener que tratar con toda esa argumentación y discusiones, el reto que representan estas dos puertas es absolutamente esencial.  ', 'Es una de las cosas que he aprendido a apreciar acerca del proceso lógico, porque el desafío a los patrones lógicos del Diseño Humano me han honrado como profesor. Si no eres capaz de vértelas con eso, entonces, como dijo Truman: "Sal de la cocina". Si no sabes tratar con la gente lógica, entonces tienes un problema serio en esta vida. Eso no significa que te tengan que gustar, pero la realidad es que es el aspecto más importante de todos nuestros circuitos, al menos en términos de si seremos o no capaces de sobrevivir juntos. Es esencial que tengamos un entendimiento común de los patrones, y las personas de esta cruz nos imponen esa necesidad, tanto más en cuanto que ellos son los que insisten en saber de qué trata cada patrón que manejamos, mientras que el resto de la gente simplemente está dispuesta a dar el patrón por bueno. "Ah, bueno, pero así es como son las cosas. El patrón a seguir es así." Sin embargo, la gente lógica es la que dice: "Espera un momento, no vayas tan deprisa. Déjame ver si eso es realmente de lo que trata el patrón". O sea, que estas personas nos prestan un servicio muy valioso. No lo olvides.  ', 'Recuerda también que la lógica está famélica de energía. Con el eje de las puertas 58 y 52 que tenemos aquí, lo que tenemos es una polaridad de dos puertas ubicadas en el Centro de la Raíz, que son puertas primordiales para el abastecimiento de energía en el circuito lógico. Hay, por ejemplo, una profunda belleza en la línea 58.1, que se llama «Amor a la vida». Sin embargo, estas personas también pueden estar un poco idas, con un profundo toque de «hippismo» y una cualidad de almas benditas. Las bodas de los años sesenta estaban llenas de este tipo de gente, o al menos de sus clones. Es gente que vive con un sentimiento básico como si todo fuera maravilloso. Eso no quiere decir que por debajo de eso no se quejen de algo como los demás. Nadie puede librarse de eso siendo portador de la activación del eje 18/17. No obstante, mientras hablemos de la línea 58.1 podemos decir que se trata de gente que considera la vida algo maravilloso.  ', 'La cuestión con el Sol en la puerta 58 es que se trata de gente portadora de la más solicitada de todas las energías. Nada enfurece tanto al colectivo como la actitud de la línea 58.2 - la línea de la perversión - porque dedica su energía a cosas que enervan el ánimo de las personas lógicas. Famélica de energía, la gente lógica quiere disponer de esa energía para desafiar ciertos patrones básicos. Luego, se topa con que alguien de la línea 58.2 dedica toda su energía a averiguar la relación entre las curvas de la cabeza y los patrones de la vida. El resto de la gente lógica colectiva lo mira y dice: "¡Pervertido!" Siendo la fuente de energía para el proceso lógico, a la gente de esta línea se le exige siempre que sea útil y de servicio para los demás, pero ese es un servicio que se niegan a ofrecer.  ', 'El Sol de Personalidad posicionado en la puerta 58 mira hacia la 18 preguntándose: "¿En qué puedo invertir mi energía? ¿en qué tipo de corrección y en qué desafíos puedo implicar mi energía?". Eso es lo que esta puerta busca. Lo que recibe es todo tipo de gente pidiéndole su energía para participar en algún proceso lógico. Como es gente que pertenece al circuito lógico, no se podrá implicar nunca a menos que pueda identificarse con el proceso en cuestión. Si la puerta 58 no se puede identificar con el resultado del proceso en el que se va a implicar, simplemente no participará de él. La lógica está diseñada para encarnar el tema de la maestría en la vida, y, a través del canal 5/15, está diseñada para repetir y corregir algo cuantas veces hiciera falta hasta alcanzar finalmente la maestría. O sea, que sin la identificación necesaria no es posible perdurar el tiempo suficiente. Es decir, que nadie se puede convertir en músico porque es la moda del mes. Eso no puede funcionar. No tiene ningún sentido comprarse una guitarra, un saxofón, o lo que sea, practicar durante un mes, y después dejarlo, porque no estás realmente identificado con lo que puede llegar a ser en el futuro. La lógica trata del futuro, y de la perfección de los patrones a medida que avanzamos hacia él.  ', 'De modo que no es fácil acercarte a esta variante de la Cruz del Servicio y decirle: "Te necesitamos". En primer lugar, tienes que lograr que se identifique con ello, y sólo entonces podrás tener acceso a su energía. Por cierto, que si tú eres el portador de esta cruz, entonces solamente puedes implicarte en algo cuando entras correctamente en contacto con ello, de acuerdo a las mecánicas de tu tipo y de tu autoridad interna. De ese modo, puedes encontrar algo a lo que dedicar toda tu energía. Es mucha la gente lógica que hay en el mundo que no se ha dedicada nunca realmente a nada, y mayormente debido a la ignorancia de su tipo de diseño, debido a los generadores que intentan ser manifestadores, a los proyectores que intentan ser manifestadores, a los reflectores que intentan ser manifestadores, y a los manifestadores que intentan ser cualquier cosa menos manifestadores. La cuestión es que nadie sea lo que es de verdad.  ']
    },
    {
        cruz: 'Cruz Angulo Derecho del Servicio 1',
        img: imagesCruzes['servicio.jpg'].default,
        texto: ['La puerta 17, puerta de las opiniones, nos lleva al Centro Ajna y al lado lógico de la mente racional. Quiero anotar al margen del tema que nos ocupa, que esta es la puerta en la que genéticamente estamos diseñados para comenzar a hacernos preguntas e intentar comprender la naturaleza del tiempo. El origen de esto reside en el reconocimiento a que nos da acceso la puerta 25 de que somos terminales y nos vamos a morir. Ese reconocimiento nos hace desear tener una vida más larga, y la concentración en ese foco de durar más nos atrapa de lleno en todo el asunto del tiempo. Ahí es donde hace su entrada la puerta 17.  ', 'La función de la puerta 17 es la de organizarnos. Hemos pasado de la Cruz de la Sanación, una cruz transpersonal de ángulo izquierdo, a la Cruz de Angulo Derecho del Servicio, que es la más lógica de las cruces, ya que las cuatro puertas que la conforman están enclavadas en el Circuito del Entendimiento. El servicio al que se refiere esta cruz no tiene necesariamente un sentido humanitario. Al fin y al cabo, las personas que nacen con esta cruz tampoco tienen elección. Simplemente que, siendo de ángulo derecho y viviendo absortas en su propio proceso personal, tienen la capacidad de sentirse muy bien con el trabajo que hacen. Eso no significa que el bienestar que se deriva de su trabajo provenga directamente del hecho de prestar un servicio, sino que se deriva del simple hecho de dedicarse a hacer lo que hace. El hecho de que haya un tercero que se beneficie de su trabajo puedo hacerlo todavía más valioso y gratificante, pero no es de ahí de donde esta cruz recibe su mayor satisfacción', 'Como el tema de la corrección entra dentro de sus dinámicas, esta es con frecuencia la más criticona y e insatisfecha de todas las cruces. La gente que viene al mundo con esta cruz criticará todo incesantemente, porque, claro, quiere prestar un servicio a los demás. "Déjame que te diga lo mal que estás - tú, tu vida, el mundo en que vives, casi absolutamente todo lo que existe." Esta cruz de ángulo derecho forma en el gráfico la definición del canal 18/58, por lo que la gente que nace con ella se encuentra profundamente insatisfecha. Esa profunda insatisfacción con las cosas es la que motiva su afán de servicio.  ', 'La puerta 17 marca el comienzo de nuestro modo de organizarnos mentalmente, y está en la raíz de lo que posteriormente se llamaría filosofía. El inicio del proceso conceptual de intentar organizar a la humanidad y la capacidad de formular todas nuestras opiniones acerca de la naturaleza del mundo operan a través de las mecánicas de la puerta 17. La puerta 17 está buscando siempre nuevos detalles, y esa búsqueda de detalles es algo que sigue naturalmente al descubrimiento de lo frágiles que somos en la vida, al descubrimiento del hecho de que necesitamos protección y de que vamos a necesitar ser sanados en esta vida. Los detalles, por tanto, tendrán una importancia muy grande para los de esta cruz, como un paso adelante en la investigación de las cosas. Sin embargo, aunque la importancia de ese tipo de detalles sea obvia, generalmente es el Noser el que se adueña de las mecánicas de esta cruz, con el resultado de una insatisfacción generalizada en el ser que es portador de ella y una profunda sensación de que el mundo no está bien.', 'Alguien que tenga el Centro del Bazo definido no puede ser el sanador más idóneo. Es importante que esto se comprenda bien. Nadie que nazca con el Bazo definido, como les ocurre a todos los que nacen con esta cruz, puede ser un sanador. Esto no quiere decir que no puedan ser de servicio para los demás, y señalarles la dirección correcta a seguir, organizar el entorno de la manera más adecuada, de manera que la sanación pueda tener lugar. Pero en un nivel más terrenal y mundano, la gente de esta cruz es muy quejosa porque vive con la sensación de que nada está bien ni funciona correctamente. ']
    },
    {
        cruz: 'Cruz Angulo Izquierdo del Informar 1',
        img: imagesCruzes['informar.jpg'].default,
        texto: ['Dejada atrás la limitación que nos impone la geometría fija de la cuarta línea, entramos de lleno en el ámbito de la geometría transpersonal. El don de prestar atención a los demás conectado a la puerta 12, una puerta muy articulada, se convierte en la posibilidad de informar a otros con profundidad. Esta es la gente más cotilla de todo el planeta. Tanto que esta cruz podría llamarse también la Cruz del Cotilleo. Dicho sea de paso, que el cotilleo no tiene aquí ninguna connotación negativa, ya que la gente ha cotilleado desde siempre. Parte del cotilleo es buena, y parte de él es mala - qué le vamos a hacer..., es cotilleo', 'Como informadores, esta es gente que simplemente te dice lo que hay. No sólo eso, sino que además es gente rara que tiene su sistema emocional conectado a la Garganta.', 'Es decir, que tanto si te gusta como si no, si estás preparado como si no lo estás, ellos te informan. Si viven correctamente su diseño de Manifestadores emocionales, esperando el transcurso de la ola, reconociendo que no tienen acceso a su verdad en el presente y que no pueden permitirse pasar simple y directamente a la acción, sólo entonces comenzará la Cruz del Informar a funcionar de un modo muy distinto al que lo ha hecho hasta ahora. Tal y como se vive ahora, con todo el mundo inmerso en el No-ser, y su tendencia es a comportarse como si fuera la cruz de las paridas. Van soltando las cosas a destiempo, sin caer en la cuenta de que todo eso proviene de cómo y a qué prestan su atención. Escuchan lo que dice alguien, y luego van soltando por ahí lo que han escuchado, y eso es algo que puede ocasionar todo tipo de problemas.  ', 'La activación de la puerta 47 - La Opresión - por la Tierra de Personalidad está operando por debajo de toda esa atención y capacidad de escucha, intentando hallarles el sentido a las cosas y largándolo hacia fuera. Si tienes un hijo con la Cruz del Informar y sufres de adicción a las anfetaminas, entonces tienes un problema. Lo más probable es que un día en el colegio la criatura diga: "Srta. Pérez, ¿sabía usted que mi madre...?" ']
    },
    {
        cruz: 'Cruz Angulo Izquierdo de la Convulsión 2',
        img: imagesCruzes['convulsion.jpg'].default,
        texto: ['Esto nos trae a la segunda variación de la gran cruz canadiense de los «revuelvemierdas»; la Cruz de Angulo Izquierdo de la Convulsión. La 18.5 es una línea muy curiosa, porque la quinta línea de la puerta 18 es la única que tiene una relación directa con la terapia, y es la única de las 384 líneas del I-Ching que tiene alguna relación con la práctica psicológica. Es también la única línea que menciona al paciente mental. Es decir, que habla explícitamente de una verdadera inestabilidad mental. De modo que esta es una línea muy compleja. El hecho de tratarse de una quinta línea, nos dice que la terapia debe ser práctica, porque si no lo es, entonces nunca puede llegar a funcionar. ¿Cómo vas a ayudar a alguien que está enfermo si no puedes proveerle de algo práctico?', ' En la primera variación de la Cruz de Angulo Izquierdo de la Convulsión, la convulsión provenía de la puerta 17 y estaba originada por opiniones y conceptos mentales. Aquí, en la puerta 18, el proceso es muy distinto, porque esta es una puerta que está siempre mirando a ver si descubre algo que no funcione correctamente. Estas son personas que observan constantemente los arquetipos para desafiarlos, dependiendo del sexo que corresponda en cada caso. Aquí tenemos al David que siempre está dispuesto a desafiar a Goliat. Debido al poder inherente a la quinta línea, la misma proyección de la que son portadores basta frecuentemente para derrotar al gigante. Esto no quiere decir que todos los que nacen con esta cruz tengan adjudicado el papel de héroes, pero la realidad es que ese es un atributo con el que nacen.', 'La quinta línea es la responsable de exteriorizar el desafío a las normas establecidas, de ahí que esta se llame la Cruz de la Convulsión. No olvides que el ángulo derecho no hace esas cosas, a menos que choques directamente con él. El ángulo derecho no tiene ninguna necesidad de ir por la vida brincando de un lado para otro mientras grita a los demás para que le escuchen. Simplemente no hace eso a menos que le estés pisando. Pero el ángulo izquierdo lo hará de todos modos, ya que está diseñado para sacar todo eso al exterior. O sea, que serán ellos los encargados de hacer aflorar toda la convulsión y todo el desafío al patrón establecido, no importa cuál sea el patrón ni a quién se dirige el desafío. Nadie está a salvo del desafío lanzado por estas personas, absolutamente nadie. Hay mucha gente en los países del tercer mundo, y en los regidos por alguna dictadura, que encontró la muerte pronto porque había nacido con una cruz como esta - donde no importaba nada el grado de riesgo que hubiera que asumir, porque estaba determinada a seguir adelante con su desafío a la autoridad.  ', 'Algo muy extraño ocurre en la puerta 18 en la transición que hay entre las líneas 5 y 6, porque cuando al llegar a la sexta línea - llamada «el Buda» - todo el mundo exclama: "¡Oohhh!" Esa sexta línea trata del hecho de ser mimado y consentido por los demás. No trata de mimar a nadie, ni tampoco de desafiarlo. No se trata de que el desafiado llegue a molestarse. Cuando la línea 18.6 desafía ingenuamente a la persona más poderosa del mundo, ésta simplemente le da una palmadita en la cabeza y le dice que es muy graciosa. “! ¡Que divertida que eres!" La línea 18.6 emana una poderosa fuerza nutritiva que siempre resulta atrayente para los demás. "Oh, mira qué bien. Qué dulce eres." Sin embargo, son personas que traen su propia convulsión consigo. Son personas consentidas que frecuentemente consiguen lo que quieren. Mientras la otra persona le daba una palmadita en la cabeza, la información fue penetrando en ellos. Al fin y al cabo, esta es un aura hecha para penetrar en otros con su información. Finalmente, el mimado y consentido acabará saliéndose con la suya, como suele. "¡Quiero ser el rey!"  ']
    },
    {
        cruz: 'Cruz Angulo Izquierdo de la Convulsión 1',
        img: imagesCruzes['convulsion.jpg'].default,
        texto: ['Siempre que estemos tratando con la yuxtaposición estamos tratando con un destino fijo que sigue su propia línea de geometría. Pero a partir del momento en que entramos en el ángulo izquierdo entramos en el territorio de lo transpersonal, donde las cosas tienen que moverse y circular en las dos direcciones. Hemos llegado aquí a la Cruz de Angulo Izquierdo de la Convulsión. Los canadienses tienen algunas expresiones verdaderamente ingeniosas, de las cuales Ra ha extraído una de sus favoritas; revuelve-mierdas. A él le hubiera gustado ponerle el nombre de la cruz de los revuelve-mierdas, porque así es como es la gente que nace portadora de ella. Es gente que se mete en todo, y que va apretando los botones a todo el mundo. Metiendo su nariz en lo que no les importa crean más tensión que nadie en todo el planeta. Ese es su trabajo', 'En cada cruz de ángulo izquierdo hay siempre dos variaciones, una de quinta línea y otra de sexta línea. La variación de quinta línea de esta cruz es realmente interesante. La línea 18.5 es la única de las 384 líneas del I-Ching que tiene una relación directa con la terapia. La activación de esa quinta línea señala que, o bien alguien se convertirá en terapeuta, o que dependerá totalmente de la terapia con otros. Una cosa o la otra. O ayuda al paciente mental, o es el paciente mental de otro. Es evidente que ser portador de esta Cruz de la Convulsión puede resultar muy incómodo y molesto. Su función es levantar los cimientos de las cosas. En ese sentido, la gente que es su portadora puede tener una vida muy inestable e incómoda, pero su naturaleza tendrá siempre una cualidad profundamente provocadora.', 'La quinta línea es siempre un indicador de tener tratar con las proyecciones ajenas, de modo que la gente siempre alimenta la proyección de que estas son personas que pueden crearles problemas. Esta es gente que tiene la reputación de traer mala suerte, o de atraer las desgracias, porque tiene la tendencia a poner las cosas patas arriba. Sin embargo, revolver la mierda también puede ser muy saludable. En un pueblo como Sedona, donde la gente ya solo está esperando que les llegue la muerte, revolver un poco la mierda puede ser bonito y divertido, además de despertar un poco a toda esa gente que vive aletargada.  ', 'Cuando analicéis cualquiera de estas configuraciones, debéis reconocer que estáis viendo aspectos genéticos de la totalidad. La gente que vive su vida a través de esos componentes, vive su vida en función de un aspecto necesario para la totalidad. Ante eso, nuestros estrechos preceptos morales no significan nada. Puede que no os guste la gente que entra en vuestras vidas para provocaros y alterar vuestro cómodo estatus quo. Sin embargo, pueden que su presencia en vuestras vidas sea también de un gran valor. Claro que al decirlo, soy muy consciente del hecho de que la amplia mayoría de seres humanos vive atrapada en las redes del No-ser, y encontrarse en esas condiciones con uno de estos personajes no debe hacer demasiada gracia. Son muy provocadores, y ejercen una enorme influencia sobre los demás debido a su capacidad de ponerlo todo patas arriba.  ', 'Llegamos ahora a la sexta línea de esta cruz , la más dulce acaso, ya que es la línea del Buda. Como la puerta 18 procesa la temática de los complejos de Edipo y Electra en la especie humana, podemos asumir que esta es gente que tiene sus problemas con Papá y Mamá. A esto hay que añadir el hecho de que la sexta línea es muy antojadiza y le gusta mucho ser mimada. Es decir, que los que vienen al mundo con el Sol de Personalidad en la línea 18.6 de la Cruz de la Convulsión solamente pueden inmiscuirse y revolver en las vidas de aquellos que se lo consienten. "Oye, por favor, ven a revolverme la vida. Ven y ponlo todo patas arriba. Qué bien que lo sabes hacer." ']
    },
    {
        cruz: 'Cruz Angulo Izquierdo de la Distracción 2',
        img: imagesCruzes['distraccion.jpg'].default,
        texto: ['Es gente que está ahí para distraernos, y nos distraen siempre de un modo que no vayamos en pos de nada que sea de índole progresista. Ese es su viaje, pero ten en cuenta todo lo que se dijo acerca de la puerta 60, ya que esa es precisamente su función; aferrarse a lo viejo de un modo inquebrantable. No puede permitirse el lujo de simplemente saltar y embarcarse en lo nuevo. La puerta 60 no puede dejar nunca atrás esa limitación, ni perder el sentido de que esa y no otra es la verdadera ley con la que debe cumplir. Siempre estoy en busca de la ley original. Cuando me fueron entregadas estas fórmulas, pude finalmente darme por satisfecho y quedarme quieto, porque pude ver que todo está construido a partir de la ley original. Esa es una gran limitación para mí, y es que aunque conozca la fórmula binaria, el hecho de que la fórmula binaria progrese no significa nada para mí. El hecho de conocer la fórmula binaria lo es todo. Es una fórmula realmente vieja, porque comenzó al mismo tiempo que el universo.  ', 'Estas fuerzas de ángulo izquierdo te distraerán para que no vayas en pos de nada que sea progresista, tratando de arrastrarte hacia algo más tradicional. Ese es el mayor movimiento que se está dando ahora entre las personas de cultos religiosos orientados hacia el cristianismo en América, cuya posición ideológica más profunda es que las religiones se están corrompiendo porque se están haciendo cada vez más y más progresistas. Sienten que se ha perdido el sentimiento religioso original, y quieren regresar a los principios y a las leyes originales. La cruz de las Distracciones te puede alejar mucho del progreso, y ser una fuerza muy difícil de tratar cuando intenta finalmente educar a la tribu con esos principios. En última instancia, es la tribu quien más debe preocuparnos en términos evolutivos, y esta cruz es algo que puede llegar a atravesarse en su camino, llevándoles a negar el progreso y a mantenerse aferrados a sus ancestrales tradiciones.', 'Sin embargo, al mismo tiempo tenemos que saber reconocer siempre el valor que representan estas fuerzas de la distracción. Pueden ser un freno que nos detenga antes de implicarnos en algo nuevo sin mayores consideraciones, lo que siempre puede acabar en un fiasco. Sin ellas, nada más fácil que abrirse a esos extraños seres con cascos de hierro que llegan navegando sobre blancos objetos flotantes, sin caer en la cuenta de que pueden traer la sífilis con ellos, como así ocurrió. Es decir, que a veces es mejor decir: "Espera un momento, espera un momento. Distraigámonos un poco aquí con nuestras viejas tradiciones, y no nos dejemos cegar y arrastrar por esa nueva posibilidad que surge ante nosotros." O sea, que hay un aspecto de la distracción que puede tener mucho valor como área de protección y de defensa. No obstante, si te gusta el progreso, estas personas se convertirán en un dolor de cabeza para ti. Si eres alguien como yo, que enseña la fusión de la espiritualidad, este tipo de personas se puede sentir incómodas contigo. Quieren aferrarse a su dogma y poder seguir viviendo con esas tradiciones.  ', 'Es un chiste, porque lo que yo traigo con mi mensaje es una síntesis. Si no existieran estas personas que viven aferradas a todas esas cosas, no podría tener a los estudiantes que tuvieran las bases necesarias para este conocimiento. La amplia mayoría de estudiantes que he encontrado en mi trabajo como profesor tenían algún grado de conocimiento de astrología, del I-Ching, de la Cábala, del sistema de Chacras. o de cualquier otro que viniera al caso. Ese es el fruto de la labor de tantos tradicionalistas aferrándose a esos caminos viejos, por mucho que yo me ría de ellos y por mucho que los ridiculice. Es obvio que, en ese sentido, esta es una cruz que puede tener un tremendo valor. Al mismo tiempo, sin embargo, tan frecuentemente como me encuentro a aquellos que han asimilado alguna enseñanza tradicional y están preparados para lo nuevo, están preparados para la síntesis, también me he encontrado con gente de este tipo que es absolutamente incapaz de abandonar su película por un solo momento. No te puedes hacer una idea de la cantidad de astrólogos con los que me encontré que eran incapaces de dejar de ser astrólogos - esa era su película, y no podían abrirse a otra. Están aferrados y encerrados en su tradición, y les resulta muy duro tener que salir de ella. De modo que es muy importante tener en cuenta la necesidad de ver estas cosas con un poco de equilibrio. Necesitamos de la influencia de ese tipo de fuerzas, pero al mismo tiempo pueden surgir muchas dificultades a la hora de intentar llevarnos a algún lugar de fusión y de síntesis.  ']
    },
    {
        cruz: 'Cruz Angulo Izquierdo de la Dualidad 1',
        img:  imagesCruzes['dualidad.jpg'].default,
        texto: ['Al pasar al ángulo izquierdo del hexagrama entramos en la Cruz de Angulo Izquierdo de la Dualidad, y con la transpersonalidad surge también la capacidad de solventar la dificultad de la definición partida. Estos seres estarán permanentemente en búsqueda del encuentro con aquellos que les puedan ayudar a realizarse a través de esa interacción. Esos serán los procesos que hagan de puente para que puedan integrarse en la experiencia estos dos aspectos tan distintos de la existencia humana.  La importancia de la relación natural que hay entre el individuo y la comunidad tribal es enorme. Es un tipo de relación que el colectivo nunca llega a entablar con los miembros de la tribu. La tribu no puede dejar nunca de estar abierta a la mutación individual. Eso no significa que esté siempre dispuesta a abrirle las puertas a cualquier mutación que aparezca, pero la tribu está siempre disponible para la mutación porque sabe que su pozo genético tiene unos recursos limitados, y no puede dejar de abrirse a las posibilidades de sangre nueva en las venas de sus miembros. De ese modo, el individuo siempre encuentra alguna oportunidad para provocar una mutación en el seno mismo de la tribu. Eso convierte esta Cruz de Angulo Izquierdo de la Dualidad en un instrumento muy importante para el mundo, ya que estos son los seres que tienen la capacidad de provocar una mutación en la tribu misma. Todo aquel que sea capaz de llevar la mutación (el cambio) a la tribu (el grupo) será reconocido como un instrumento de mucho valor.', 'La tribu se sentirá muy impresionada por lo hacendosa e industriosa que es esta cruz en particular, y siempre se alegrará de sacar partido de su energía de Generador Manifestante. No olvides que el canal 37/40 se encuentra realmente atascado, ya que es un elemento proyectado que busca la posibilidad de llegar a algún tipo de acuerdo con otros. Estará dispuesto a pactar con la mutación siempre que sea mutuamente beneficiosa. Es decir, que se trata de gente muy importante para nuestro proceso, que actúa como puente para la reunión de la tribu con el individuo.', 'A pesar de su naturaleza transpersonal, las personas de esta cruz sufren debido al mismo dilema interno de la yuxtaposición. Dicho de otra forma, sufren todavía debido al dilema entre la parte individual que hay en ellos (que dice siempre: "Dejadme en paz. Yo voy a lo mío.") y la parte tribal que también albergan (que dice: "Jesús, cómo me gustaría quedarme a cenar contigo."). Siempre se encuentran con este conflicto básico en la raíz de su experiencia existencial.  ']
    },
    {
        cruz: 'Cruz Angulo Izquierdo de la Dualidad 2',
        img: imagesCruzes['dualidad.jpg'].default,
        texto: ['En esta cruz hay un verdadero dilema interno. Como ya quedó descrito en la primera variación que vimos de ella, es una cruz que conlleva el canal 34/20 - el Sacral conectado a la Garganta - y que vivirá, por lo tanto, la vida al modo de un Generador Manifestante. Sin embargo, está definición está desconectada de la definición emocional de su ego. Es decir, que sus portadores necesitan encontrar alguna manera de integrar esos dos aspectos de la dualidad, y que buscarán hacerlo a través de la comunidad.  ', 'A través de su Garganta, su parte individual (34/20) dice: "No quiero que nadie me influya. Quiero que me dejen tranquilo. Estoy muy ocupado, y no sé por qué tengo que asistir a esa maldita fiesta de esta noche." Aunque acude a rastras a la fiesta, resulta que luego el 34/20 no se siente tan mal. Resulta que hasta se divierte y todo, porque las auras de los demás establecen los puentes que necesita para integrar su canal 40/37 con su otra definición, y eso le permite vivir y sacar al exterior todo lo que lleva dentro. Sin embargo, en cuanto sale de la fiesta y regresa a su apartamento o a su lugar de trabajo, esa Garganta individual seguirá repitiendo las mismas cosas: "Me gusta estar solo. No, decididamente no me gustan las fiestas. Las odio." Si pudiésemos ver las fotos del evento, veríamos que se lo acaba de pasar muy bien, pero si alguien se acerca y le dice: "Mira, vamos a montar esta fiesta." Rápidamente le responderá: "A mí no me gustan las fiestas. No quiero que me molesten más con eso." O sea, que se da un fenómeno realmente extraño en las contradicciones internas que experimentan estas personas', 'Una de las cosas más extrañas acerca de la gente de la Cruz de Angulo Izquierdo de la Dualidad, es que tiene amigos, pero sin saber nunca por qué. Es el mayor chiste de toda su vida. Cuando se lo digo durante las lecturas, me miran y dicen: "Uy, ya lo sé, no sé lo que quieren de mí." No tienen la más remota idea de por qué. Simplemente van zumbando de un lado a otro: "Estoy muy ocupado, estoy muy ocupado."  ']
    },
    {
        cruz: 'Cruz Angulo Izquierdo de la Educación 1',
        img: imagesCruzes['educacion.jpg'].default,
        texto: ['La articulación encuentra su máxima expresión al llegar a la Cruz de Angulo Izquierdo de la Educación. Ese movimiento natural comienza en el reconocimiento a través del ángulo derecho de que no podemos ser inocentes, de que debemos ir en pos del mundo, y, al hacerlo, aprender a manejar su forma. Pero la capacidad de gobernar, en sí misma, necesita pasar por una etapa previa hasta que finalmente alcanza un lugar en el que está preparada para educar a otros, y ese lugar lo encontramos al llegar aquí. La educación a través de la puerta 12 está vinculada a la actividad del conferenciante, muy distinta a la actividad desarrollada por el profesor a través de la puerta 11. El ángulo izquierdo de las cruces siempre aparece en dos variantes distintas. Cuando lleguemos a la segunda variante de esta cruz, el Sol estará en la puerta 11, y veremos un tipo muy distinto de educación.  ', 'En la educación de la puerta 12 el instructor te habla a ti, no está compartiendo nada de un modo impersonal. Te está dando la oportunidad de tener una audiencia privada, te está cantando una canción, lo que sirva de medio de expresión en cada caso. Lo importante es que tú no estás implicado en ese proceso. Eso requiere que seas lo que la puerta 12 está buscando constantemente - alguien receptivo, provisto de la Gracia de la puerta 22, dispuesto a absorberlo todo y a abrirte al potencial de esa mutación. "Eduquemos a las masas con eso", es todo lo que les gustaría oír salir de tu boca.  ', 'Un comentario muy interesante que se publicó en el Herald Tribune Internacional venía de boca de un hombre que se retiraba de la presidencia de Fondo Monetario Internacional. Decía así: "La labor desarrollada por el Fondo Monetario Internacional es la mejor cosa que les podía pasar a los niños de este mundo". Tiene razón, por supuesto que tiene razón. Es una de esas cosas que es preciso reconocer, y es que sin nuestra capacidad de reunir los recursos que necesitamos - recursos materiales - y de invertirlos luego en educación para los más pequeños, las oportunidades que la vida les puede ofrecer serán necesariamente limitadas. A mayor educación, mayor también el abanico de oportunidades que te pueden salir al camino. De eso es de lo que trata esta Cruz de la Educación. Con la formación adecuada, las probabilidades de poder participar en el crecimiento y en la evolución de la sociedad son mucho mayores. Te sentirás más seguro en tu proceso, y recibirás también mayores recompensas por tu contribución']
    },
    {
        cruz: 'Cruz Angulo Izquierdo de la Identificación 1',
        img: imagesCruzes['identificacion.jpg'].default,
        texto: ['Entiende, por favor, lo distinto que es ese proceso cuando es experimentado a través del ángulo izquierdo del hexagrama. La lógica es un proceso colectivo, y en esta cruz participan tres puertas que se integran en el Circuito del Entendimiento: la puerta 63, donde comienza todo el proceso de razonamiento lógico a través de la presión de las dudas; la puerta 9, que contiene la energía potencial para el trabajo detallado, y que es parte del formato lógico; y finalmente la puerta 16, donde se ubica el Sol de Personalidad de esta cruz, y a través de la que se manifiestan las habilidades lógicas del cuerpo. De modo que estamos tratando aquí con una cruz que encarna unas habilidades lógicas muy poderosas.  ', 'En el ángulo izquierdo, la Cruz de la Identificación tiene la función de lograr que otra gente se identifique con el experimento, para de ese modo lograr acceso a sus recursos energéticos. Esta es la gente capaz de encontrar a los inversores que financien los recursos y pongan a su disposición la energía necesaria para llevar a cabo el experimento. Esta es una de las mayores tragedias, de las cosas más tristes que siguen ocurriendo cada día, ya que tenemos a 9 personas, o a 100 personas, o incluso a 1000 personas, compitiendo por los mismos dólares para invertir en sus investigaciones. Al final los dólares los recibirá alguno de los muchos que han presentado su solicitud, y puedes estar seguro de que la quinta línea sabrá cómo hacerse con más dólares que nadie. Puede que su experimento acabe siendo un desastroso fracaso, ya que puede que detrás de todo no haya más que una proyección suya. Pero la quinta línea sabe cómo seducir a otros, ese es su poder natural, y sabe cómo lograr que otros se identifiquen con el plan que ha desarrollado, cualquiera que sea el experimento que desee abordar. Eso, en todo caso, es lo de menos. ', 'En la actualidad encontramos a este tipo de personajes entre quienes te aconsejan que inviertas en algún mercado financiero. Eso no significa que te vayas a hacer rico con esa inversión, sino que puede solamente significar lo bueno que es el otro a la hora de conseguir que le confíes tu dinero, porque ha sido capaz de lograr que te identificaras con la promesa inherente de la recompensa. Debido a que son personas que incorporan en su cruz aspectos de la Cruz de la Conciencia (el eje de las puertas 63 y 64), pueden resultar muy inspiradores para los demás. Ten en cuenta que tener activada alguna de las puertas del Centro de la Cabeza puede ocasionar muchos quebraderos de cabeza a su portador, eso ya lo sabemos. Pero eso no significa que no sea inspiradora para los demás. Así es como son las cosas. El funcionamiento mecánico de la vida incorpora esas ironías y paradojas. Cuando te encuentres a alguien con esta cruz de ángulo izquierdo - con todo el poder de seducción que le es inherente - no olvides que se trata de alguien capaz de conseguir que te identifiques con sus habilidades lógicas y te sientas atraído por el experimento que dice representar. Además, es alguien que te puede inspirar. Lo más fácil es que acabes diciendo: "Oh sí, claro que me puedo identificar con eso. Oh sí, eso está muy bien. ¿Dónde tengo que firmar?" Verás lo rápido que te contesta: "Aquí abajo, por favor. Muchas gracias".  ']
    },
    {
        cruz: 'Cruz Angulo Izquierdo de la Identificación 2',
        img:  imagesCruzes['identificacion.jpg'].default,
        texto: ['Esto nos lleva a la segunda variación de la Cruz de Angulo Izquierdo de la Identificación. Aunque el mecanismo de la identificación como tal está enraizado en la puerta 16, cuando el Sol de Personalidad está en la puerta 9, la identificación es con la aplicación de la energía al detalle. Esta es gente que rechazará unirse a ningún proyecto, a menos que se disponga de apoyo suficiente para llevarlo a cabo. Es decir, que no se implicará hasta no estar seguro de disponer de recursos suficientes como para que el despliegue de su energía tenga un cierto sentido. Es muy improbable que logres la adhesión de alguien nacido con la Cruz de Angulo Izquierdo de la Identificación para un negocio que acaba de comenzar, con la sola promesa de una comisión y participaciones a cobrar en un plazo de diez años. ', 'Eso no funcionará con la gente de esta cruz, porque su energía solamente está disponible cuando puede ver la existencia de recursos desde el primer momento. Es gente que se identifica fácilmente con la posibilidad de un trabajo estable, o con algo donde no tiene que preocuparse de si cobrará su nómina a fin de mes o no.  ', ' Identificándose con algo estable, estas personas logran reducir la presión mental de las dudas y la confusión, porque eso es lo que sienten y experimentan constantemente desde el nivel inconsciente de su diseño. Esta no es una cruz de ángulo izquierdo que se vaya a dejar tentar fácilmente a implicarse en alguna novedad, o que vaya a prestarle demasiada atención a la lógica de la que otros dicen que causará furor en el futuro. Lo que esta cruz quiere es seguridad, y apostar por algo que resulte fiable, identificándose siempre con cosas que no fomentan dudas en lo que hace - así es cómo logra que sus habilidades lógicas florezcan y emerjan en el exterior. Cuando se sienten seguras, las personas de esta cruz son muy trabajadoras. Sin embargo, cuando no disponen de esa seguridad, y tienen preocupaciones acerca de la supervivencia de su empresa, no son el tipo de fuerzas que arriman el hombro para salir del atolladero. En casos así, lo más probable es que pongan las manos en el volante de su coche y partan a buscarse la vida en otra parte.  ']
    },
    {
        cruz: 'Cruz Angulo Izquierdo de la Incertidumbre 1',
        img:  imagesCruzes['incertidumbre.jpg'].default,
        texto: ['Al llegar a la Cruz de Angulo Izquierdo de la Incertidumbre, la idea de hacer una contribución individual comienza a desmoronarse porque trae consigo el miedo enraizado en las mecánicas del sistema emocional. Ese es el miedo arraigado en la puerta 55, el miedo a no lograr nunca salir de la oscuridad, el miedo a que - no importa cuánto nos civilicemos - nunca nos libramos del todo de la bestia humana que llevamos dentro. Esa bestia tiene sus raíces en el poderío de la puerta 59, que sigue llamándonos a encontrar nuestro propio espíritu a través de la sexualidad', 'En esta Cruz de Angulo Izquierdo de la Incertidumbre tenemos las raíces de algo tan extraño como es el sistema de dotes. Todas las dotes han nacido de las mecánicas de esta cruz de encarnación, ya que hay una contribución material que debe ser hecha para asegurar la intimidad y el espíritu adecuados. Ya sabes: "si me das 75 ovejas y tu hija me doy por satisfecho". De aquí es de dónde procede toda esa tradición, para poder manejar toda la incertidumbre acerca del porvenir que emana de la puerta 55, una puerta que como veremos está integrada en la cruz de encarnación del Fénix Durmiente. Por lo demás, sabemos que la puerta 55 es una puerta de ánimos muy fluctuantes, y con el añadido de que tres de las cuatro puertas de esta cruz son de naturaleza individual, lo que traerá consigo también altas dosis de melancolía a la vida de estas personas.  Aquí el ser humano se siente inundado de tanta tristeza, y ya no dispone de la puerta 14 que le recuerda que el dinero no lo es todo. En su lugar queda solamente la llamada desesperada de la puerta 14 que no deja de decirnos: "La riqueza nos pertenece, y tenemos que encontrar la manera de hacernos con ella." Más que una simple búsqueda del propio espíritu a través de la sexualidad - que es lo que teníamos en el primer cuarto - lo que tenemos aquí es la necesidad de generar más. Aquí emerge la necesidad de disponer de una bonita casa, con un bello jardín adosado cerrado por una bella verja. Surge aquí un factor civilizador que simplemente se sobrepone a lo que no es más que un impulso sexual, lo que nos dice que de aquí tiene que nacer una contribución de índole específicamente material. Claro que el plano más inconsciente de nuestra naturaleza, la incertidumbre está basada en la pregunta de si tienes la pareja o socios adecuados para ese viaje o no']
    },
    {
        cruz: 'Cruz Angulo Izquierdo de la Industrialización 2',
        img: imagesCruzes['industrializacion.jpg'].default,
        texto: ['Esta es la segunda variante de la Cruz de Angulo izquierdo de la Industrialización, a 180º de donde la vimos la primera vez, a través de la quinta línea de la puerta 30. El mayor problema con que se encuentra la Cruz de la  Industrialización proviene del Canal de Carisma (20/34) integrado en su propia definición inconsciente, que es un canal donde los pensamientos y la conciencia deben convertirse en hechos. Sin embargo, no hay conciencia implícita adherida a la naturaleza de este canal, lo que convierte el poderío natural del canal 20/34 en un elemento peligroso si se lo maneja mal. Al fin y al cabo, estamos hablando de gente con la naturaleza de un Generador Manifestante. Si responde desde su Sacral a las cosas en las que se involucra, entonces puede sumergirse tranquilamente en cualquier actividad, pero esta es gente que necesita desesperadamente ser guiada por otros en el despliegue que hace de su propia energía vital. Sin esos guías, ese carisma no llegará a brillar nunca. Esa es la razón por la que muchas figuras carismáticas de la historia tenían alguna especie asesor en la sombra, alguna especie de fuerza detrás de ellas que les hacían las veces de guía. ', 'La primera línea que nos encontramos en esta Cruz de Angulo Izquierdo de los Compromisos es la 29.5, que es una línea difícil de manejar por ser la línea del fracaso. Esta es la línea en la que los compromisos hechos acaban apilándose hasta que uno ya no es capaz de soportar a carga. Están condenados a finalmente fracasar y a incumplir las promesas que se hicieron. O sea, que la gente que nace con esta cruz viene al mundo para llevar esta carga. Sin los guías adecuados, todo lo que encuentra en su vida cae dentro de la categoría del desastre. Sin esos guías, estas personas se adentran vociferando en el torbellino de la vida, exclamando sin cesar: "Ahora estoy muy ocupada. Ahora estoy muy ocupada. Ahora estoy muy ocupada", hasta que todo eso simplemente les conduce al colapso físico o psíquico.  ', 'Como cualquiera que haya trabajado profesionalmente con el Diseño Humano, me he encontrado con muchas personas que eran portadoras del canal 20/34. Al fin y al cabo, este es uno de los tres canales que se forman a partir de oposiciones en el Mandala zodiacal. De ahí que sea también una de las definiciones que con mayor frecuencia podemos encontrar. Después de todo, los dioses nos han creado para ser Generadores Manifestantes - estamos aquí para responder a la vida, y para trabajar luego como si nos poseyera el diablo. Claro que, si no nos guían, entonces no sabemos qué hacer. La gente de esta cruz puede ocupar su vida con nada, con nada en absoluto, y estar tan ocupada con tanta nada que su vida puede acabar desintegrándose por completo.  ', 'Si tienes en tu vida a alguien de estas características - y es seguro que los tendrás, o que acabes por encontrarte con ellos - es preciso que comprendan bien la naturaleza de su diseño, su tipo y su autoridad, de modo que puedan satisfacer el verdadero propósito de su cruz de encarnación. Sobre estas personas se proyecta que son capaces de llevar la carga de guiar nuestra evolución hacia la era industrial y tecnológica y todas esas cosas. Estando en la raíz de ese proceso, estas son personas que saben arrimar el hombro, ya que han nacido para comprometerse a realizar un cierto tipo de trabajo. Pero eso no significa que hayan nacido para hacer cualquier cosa, ni tampoco han nacido para hacer muchas cosas al mismo tiempo, porque de ese modo su compromiso tampoco sería productivo. Lo que es esencial es que sepan reconocer la actividad que es correcta para ellas.  ', 'Recuerda que un Generador - el 70 % de la población humana del planeta son Generadores - que no vive de acuerdo con su naturaleza expande una vibración que no aporta nada a nadie, tan solo incomodidad, frustración y el sentimiento general de que las cosas no funcionan bien. En el momento en que somos capaces de hacer que fuerzas de este tipo sintonicen con su naturaleza innata, de modo que sepan para qué están aquí y cómo entrar en las situaciones de la vida, entonces las cosas se hacen y la vida transcurre apaciblemente.  ']
    },
    {
        cruz: 'Cruz Angulo Izquierdo de la Industrialización 1',
        img: imagesCruzes['industrializacion.jpg'].default,
        texto: ['Antes de proseguir, quiero recordar la historia tal y como la hemos contado hasta ahora. Miramos hacia atrás, y lo que vemos nos pone nerviosos. Miramos hacia delante, y podemos reunirnos con nuestros aliados a afilar las espadas y todo eso. Luego nos dejamos atrapar por las expectativas acerca de cómo todo eso debería traernos un éxito continuado y perpetuo. Llegados a este punto es preciso entrar a fondo en materia y ocuparnos de todos los detalles pertinentes, lo que significa que vamos a estar muy ocupados. Esta Cruz de Angulo Izquierdo de la Industrialización es una de las cruces más activamente ocupadas de cuantas nos vamos a ir encontrando a medida que avancemos.   ', 'Al encontrar a alguien que haya nacido con esta cruz nos encontramos ante el dinamo de un motor. Esta gente no para nunca. Son también los que están diciendo constantemente a los demás que tampoco pueden parar. Es decir, que aquí tenemos operando el programa instintivo de los insectos. Todos tenemos que llevar nuestra carga y trabajar. Todos tenemos que encontrar alguna ocupación. Si no estás ocupado, y hay cerca alguien que sea portador de esta cruz, oirás siempre esta pregunta: "¿Qué haces ahí sentado sin producir nada?" ', 'Es importante no dejar de tener en cuenta que esta gente no sabe necesariamente si la actividad que está llevando a cabo es correcta para ella. Es más, raramente hace las cosas por propia motivación. Lo que ocurre es que se dan cuenta de que, si no nos ocupamos nosotros, entonces las cosas no pueden progresar, y esa acaba siendo toda su motivación en esta vida. Todo lo relacionado con nuestra capacidad de sobrevivir depende de nuestra habilidad para reunirnos en torno a un propósito común, y de integrarnos unos con otros más profundamente para echar abajo las barreras que nos separan.  ', 'La manera natural en que la evolución mantiene unidos a los seres humanos es a través de sus ocupaciones, pero esa actividad no deja de ser causante del sentimiento de unión, y de una unión que está orientada hacia un objeto del deseo. Poniéndolo en palabras de esta cruz: "Estoy ocupado porque tengo la expectativa de que mi negocio tenga un futuro próspero." En consecuencia, si todos nos ocupáramos de hacer algo, todo debería progresar más fácilmente. Bueno, es de todos sabido que no es así. El simple hecho de estar ocupado no garantiza la productividad, sino que sólo demuestra actividad frenética. A veces parece que un Generador Manifestante que no para de moverse en su silla esté haciendo algo, pero lo único que está haciendo en realidad es calentar la silla.  ', 'La puerta 30 nos confrontará con los dilemas más profundos en la evolución de la experiencia humana cuando los temas globales de la especie sean filtrados a través de ella - dentro de aproximadamente 700 años. En la evolución natural de nuestra especie, el ámbito experimental del deseo tiene que agotarse, y también tienen que ser agotadas todas las vías que aún no han sido experimentadas para que nuestro reconocimiento colectivo no se siga alimentando de vanas expectativas. No obstante, el ámbito de nuestras expectativas no puede agotarse hasta que no dispongamos de patrones concretos y verificables que nos proporcionen la seguridad suficiente para poder dejar de especular. Más importante todavía que eso es el hecho de que es necesario llegar a un punto en nuestra evolución en el que todos universalmente podamos gritar: "Ya hemos estado ahí. Eso ya lo hemos hecho." El objetivo final del camino experimental es que, ante el ofrecimiento de todo un amplio catálogo y repertorio de experiencias, la puerta 35 mire esa proposición y pueda decir: "Eso ya lo conozco, y no necesito volver a implicarme con nada de eso. No es preciso que vuelva a alimentar expectativas y a dejarme atrapar por el deseo." ', 'Con la puerta 30 integrada en ella, podemos ver en esta cruz el nacimiento del deseo sexual como un tema básico en la experiencia humana. Hemos podido comprobar cómo va precedida de la puerta 49, que es la puerta del casamiento y del divorcio. Veíamos cómo uno de los principios básicos de los que partimos es de la necesidad de matar por proteger a nuestros seres queridos - tenemos que alimentar a nuestros hijos, a nuestra pareja, como sea en cada caso. Ese era el punto de partida, y es muy importante tomar nota de que mientras que el matrimonio quedó establecido previamente en la puerta 49, el deseo sexual no emerge hasta alcanzar el ámbito de la puerta 30. Es decir, que el vínculo matrimonial es una cosa, y el sexo, o el deseo sexual, es otra.  ', 'De modo que tenemos dos elementos que irrumpen muy pronto en nuestra evolución humana. La primera es la necesidad de convivir en comunidades, ya que necesitamos relacionarnos para aparearnos. De ahí saldrán las estructuras sociales a las que finalmente daremos el nombre de matrimonio. Pero al mismo tiempo vemos que ya en el paso siguiente hace su aparición en deseo: "Sí, el matrimonio está muy bien, pero ¿has visto alguna vez a la chica rubia del pueblo de al lado? ! ¡Eso sí que es una mujer!" El deseo irrumpe de lleno en la escena y dice: "Espera un momento, y ¿qué me dices de tal experiencia? Yo nunca he estado con una mujer rubia." Hay todo un abanico de experiencias que se abren a partir de la aparición del deseo, y eso abre las puertas a la poderosa irrupción de la sexualidad.  ', 'A medida que avanzamos en la Cruz de Angulo Izquierdo de la Industrialización nos acercamos hasta su sexta línea - la sexta línea tiene un potencial inherente para la transformación mística de la especie. Este es un potencial para la metamorfosis que se va agudizando momento a momento y que culminará alrededor de 2027, cuando podremos comenzar a ver la naturaleza de esa mutación encarnada en los niños que nazcan a partir de ahí. Cuando eso ocurra, cambiará completamente la naturaleza de lo que hoy conocemos por industria, y eso es algo de una importancia extrema. Tal y como vivimos hoy en día, esta Cruz de la Industrialización podría llamarse la Cruz de la Esclavitud, ya que sus portadores son los mayores esclavos que caminan sobre la tierra. "Seamos industriosos. Seré industrioso trabajando para ti. Necesito estar ocupado y produciré industriosamente para ti. Por cierto, ¿te importa que hagamos el amor mientras produzco afanosamente para ti?" Todo eso forma parte de un mismo proceso. La naturaleza de la industria, tal y como la conocemos hoy, la naturaleza de las ocupaciones humanas cambiará por completo en el momento en que las personas que nazcan portadoras de esta Cruz de la Industrialización reconozcan que no son Manifestadores, sino que son Generadores Manifestantes.  ', 'Siempre que las puertas que componen una cruz formen una definición en el Cuerpo Gráfico del Rave, sabemos que esa definición tiene un tremendo impacto en nuestras vidas. El canal 20/34 representa una de las fuerzas más poderosas que tenemos en todo el planeta, ya que es la representación más pura de la estructura de un Generador Manifestante. Debido a que se forma a partir de una oposición en el Mandala zodiacal, la definición de este canal es muy común en la especie humana. Aquí tenemos la profunda necesidad individual de sumergirnos en alguna actividad. Sin embargo, sabemos que un Generador Manifestante que intenta jugar el papel de un Manifestador sólo encuentra resistencias a su alrededor. Debido a esas resistencias, el desarrollo planetario de la industria - con todo lo que la industria podría hacer por nosotros - se ha visto ralentizado hasta un punto que nos quedaríamos perplejos sólo con imaginar lo que sería posible. Estamos todos impresionados de los tremendos avances que han tenido lugar en los últimos 100 años, y de cómo todo empieza a ir más deprisa, pero la realidad es que ese ritmo de crecimiento siempre había estado a nuestro alcance. A medida que vamos educando a los Generadores Manifestantes para que respondan a las cosas en lugar de intentar iniciarlas, en lugar de intentar manifestarlas por ellos mismos, entonces el poderío industrial que emana de su despliegue energético puede dejar de ser esclavizante para comenzar a ser puramente productivo. Entonces es cuando podremos comenzar a ver emerger el valor más elevado que habita y mueve estas fuerzas humanas.']
    },
    {
        cruz: 'Cruz Angulo Izquierdo de la Migración 1',
        img: imagesCruzes['migracion.jpg'].default,
        texto: ['Con el tránsito del Sol hacia la quinta línea, marcando el inicio del ángulo izquierdo, nos encontramos siempre con el mismo problema. No hay nada más duro que intentar ser amable con otro ser humano, porque tienen la marcada tendencia a ser simplemente horribles. Y no lo digo en broma, o no sólo. Si piensas en toda la gente que has conocido a lo largo de toda tu vida, ¿con cuánta desearías realmente poder volver a hablar? Aunque haya todo tipo de gente moralizante que quiere hacernos sentir incómodos con eso, la realidad es que es un mecanismo que forma parte de nosotros. La quinta línea de la puerta 37 se llama Amor. Todo el mundo dice al verla: "Oh, qué bonito." Pero el detrimento del amor es el odio, y el uno se puede convertir en el otro con mucha facilidad.  ', 'Alguien nacido con la Cruz de Angulo Izquierdo de la Migración dice: "No quiero vivir más en esta comunidad. No puedo soportar más a esta gente. Me voy a vivir a otra parte." Así es como evoluciona la planificación. Ahí está toda esa gente ocupada en la planificación de todo tipo de proyectos comunitarios, y una vez está todo hecho, la pregunta es ¿qué hacer ahora? Entonces hay que convivir con toda esa gente. Mientras la comunidad estaba siendo construida todo iba sobre ruedas. Todos estaban ocupados en la construcción de la comunidad, y era todo fantástico. Pero cuando la comunidad está terminada, y tienes que ser el vecino de esas personas, entonces las cosas cambian. Podemos ver un reflejo de este mecanismo en lo que ocurre en los movimientos religiosos cuando se produce un cisma entre sus seguidores. Todos eran felices bajo el mismo techo mientras la casa estaba en construcción, pero luego tienen que vivir juntos. La construcción de la casa les mantuvo unidos. Esa es la función de la planificación y es fantástica como tal. Luego, la convivencia les lleva a tener que decir: "No te soporto más. No quiero oírte más. Nos vamos a otra parte. Construiremos otra en otro lugar." América fue fundada por esta cruz, por los puritanos que la representaban, que no eran otra cosa que fanáticos religiosos. "Emigramos, nos vamos de aquí, no queremos estar más aquí con vosotros, porque la dependencia emocional convierte el amor en odio." Ese es el mensaje básico de la 37.5.  ', 'Todos los pactos se rompen cuando se ven confrontados con el mecanismo de la proyección, y así es cómo se espera que suceda. Hay una escena maravillosa en la película titulada “Matrix”, en la que uno de esos tipos del ordenador está interrogando a Nero y contándole lo desagradables que son los seres humanos. Al relatar lo que hacen los seres humanos, dice: "Conquistan un lugar, y, cuando acaban con él, se van a otra parte destrozándolo todo, y..." Finalmente llega a decir que: "Los humanos son un virus asqueroso." En esta cruz tenemos ese virus del que hablaban en la película. Los humanos nunca nos hemos dado por satisfechos con quedarnos sentados en nuestro propio valle. Siempre hay algún miembro del valle que no quiere quedarse a vivir allí, pero que tampoco quiere partir sólo. Así que se queda refunfuñando contra todo, intentado que otros comprendan la necesidad de salir de allí y se dejen finalmente arrastrar hacia el comienzo de una nueva ramificación. Las hormigas hacen ese tipo de cosas todo el tiempo, pero lo convertimos en un drama cuando lo hacemos los humanos. Las hormigas simplemente se levantan y dicen: "Nos vamos." Pero nosotros nos enemistamos con los seres queridos que dejamos atrás - y ahora les odiamos.', 'Reflexiona acerca de la transición que tendrá lugar cuando la mutación fije la fluctuación de la ola en la puerta 55. Hay una extraordinaria cantidad de cosas que van a cambiar en el funcionamiento de nuestra conciencia y percepción. Al fin y al cabo, hasta ahora, nuestro modo de pactar y de llegar a acuerdos, nuestro modo de hacer el amor, incluso nuestro modo de enamorarnos ha estado basado en el motor emocional que carece de acceso a la verdad en el presente. Ha sido un proceso caótico desde siempre, pero estamos llegando a un punto en el que ese caos va a ser aquietado, y eso cambiará muchas cosas en nuestro modo de establecer los pactos. ']
    },
    {
        cruz: 'Cruz Angulo Izquierdo de la Migración 2',
        img: imagesCruzes['migracion.jpg'].default,
        texto: ['Llegamos ahora al ángulo izquierdo del hexagrama, y con ello a la segunda variante de la Cruz de Angulo Izquierdo de la Migración. En el primer cuarto, la primera variante de esta cruz tenía una profunda conexión con nuestras tendencias agresivas y con nuestra necesidad - por Diseño - de expandirnos constantemente, de pasar de este valle al siguiente, de seguir conquistando y apropiándose de todo. En esa primera variante, el Sol de Personalidad estaba en la puerta 37. Aquí, con el Sol en la puerta 40, tenemos el lado opuesto de esa temática. Muchos de los ghettos que existían en Europa del Este durante los primeros años del nazismo se negaron a emigrar cuando la emigración era realmente la única alternativa que tenían. Este es el otro lado del tema de la migración, ya que aquí no se emigra impulsado por la necesidad o deseo de conquista, sino como un medio para escapar o huir de algo', 'Hay dos formas de migración que determinaron desde siempre los movimientos de las diferentes tribus y culturas. Una de ellas la vemos reflejada en aquellos que van a conquistar algo nuevo, y en los que huyen en un intento de ponerse a salvo de los primeros. Están los que huyen en cuanto se enteran de lo que está pasando; se levantan y simplemente echan a andar. Pero en la puerta 40 tenemos un tipo de migración diferente, aqui tenemos a los que solamente están dispuestos a emigrar cuando se les obliga a ello. De lo contrario, negarán una y otra vez esa posibilidad: "No, no, ni hablar. No se adueñarán de nuestras propiedades. No, no, no permitiré que nos arrebaten nuestras casas. No, no, no se harán con el dominio sobre nuestras vidas." Claro que, si se quedan a esperar demasiado tiempo, no llegarán a emigrar nunca, como no sea dentro de algún coche funerario.   ', 'Tenemos estas dos formas de migración, y las dos son muy importantes en el funcionamiento de los seres humanos. No es que una sea mejor que la otra, ni tampoco peor. No importa cuáles sean las circunstancias en cada caso, lo que debemos reconocer es que a través de estas dos cruces las fuerzas de la vida no nos han permitido nunca estarnos quietitos en alguna parte. Somos una especie a la que no se le permite permanecer quieta. ¿Sabes lo que dicen las estadísticas americanas? Que cada dos años, el 30 o 40 % de la población cambia su lugar de residencia. Como si tuvieran un hormiguero en los pantalones, simplemente no son capaces de estarse quietos en un lugar. Esa necesidad humana proviene de la temática de esta cruz. Es como la gran desbandada de blancos que acabó llenando todo el suroeste de los Estados Unidos. Todos los que vivían en el noreste tenían miedo de la gente de color, así que huyeron espantados hacia el sur del país. Ese es un movimiento migratorio característico de esta cruz de encarnación que estamos tratando, en el que se huye de algo a lo que se teme o que es experimentado como una amenaza. El resultado final de esa migración se manifestó en un tremendo desarrollo de toda la parte del sureste norteamericano. No se trata de moralizar acerca de lo que desencadena este tipo de fenómenos, sino de comprender que es un elemento engranado en nuestra naturaleza humana, y que nos hace disponer de la posibilidad de la migración tanto para emprender la huída como para satisfacer nuestra sed de conquista ']
    },
    {
        cruz: 'Cruz Angulo Izquierdo de la Revolución 1',
        img: imagesCruzes['revolucion.jpg'].default,
        texto: ['Alejándonos de ese aspecto tan fijo, penetramos en la Cruz de Angulo Izquierdo de la Revolución. Aquí tenemos la Revolución en estado puro. Lo único que resulta incómodo en esta revolución es que la motivación que hay detrás está siempre enraizada en el asuntos de dinero. Se traduce en que: "Ellos tienen; no merecen tener tanto, matemos a algunos de esos cabrones y compartamos lo que tienen." Al fin y al cabo, aunque suene un poco simple, esa es la base de cualquier revolución. Llegados a la quinta línea entramos en una dimensión práctica de la revolución, lo que nos lleva a decir: "Son más codiciosos que el diablo, y no compartirán nada con nosotros. Nos odian, y nos están esclavizando. No podemos razonar con ellos. Como así no llegamos a ninguna parte, lo único que podemos hacer es matarlos. Si los matamos, entonces podremos encontrar alguna manera práctica de compartirlo todo." ', 'Los seres humanos somos entes vivos con infinitud de guerras mundiales en nuestros cuerpos a cada segundo y a cada inspiración. La violencia implícita en nuestra biología es realmente increíble - no hay más que acompañar en su viaje a una de las células-t para poder observar procesos escalofriantes. La nuestra es una existencia muy violenta; simplemente lo es. Estamos diseñados para matar, lo estamos, y lo seguiremos estando hasta que dejemos atrás estos cuerpos, y no hay nada ni nadie que nos pueda librar de ese proceso - nada, nada. De lo contrario, nunca hubiéramos alcanzado la cumbre de la cadena alimenticia. No seríamos la especie dominante en nuestro planeta. Las cosas son así, y no hay nada que podamos hacer al respecto. Eso no es algo que podamos civilizar, lo veremos cuando lleguemos a la Cruz de la Civilización. Donde intentamos civilizarlo - Moisés baja y nos dice: "No matarás." Estamos diseñados para matar, cierto, pero no podemos. No nos está permitido. "No hagas eso, porque está mal." ', 'Llega la civilización y nos dice que tenemos que aprender a convivir todos juntos en el mismo vecindario. No deja de resultar un poco extraño si están matando a alguien en la puerta de al lado. De modo que se hace necesario poder disponer de unas normas básicas y de un lugar en el que matar sin molestar a quienes tenemos a nuestro alrededor. Matar a la gente en el valle de al lado - eso está mejor. Puede que incluso resulte práctico. No olvides que apenas estamos comenzando la historia y que es algo que necesitamos tener. Así que desde el comienzo llevamos este tema incrustado en nuestra naturaleza. La vida nos obliga a tener que salir a matar para poder sobrevivir; y es preciso que hallemos alguna forma de hacer que eso este bien, alguna forma de santificarlo.  ', 'Si escuchas hablar a alguien con el Sol en la 49.5, oirás a un poderoso revolucionario potencial. "Estoy aquí para seduciros con mis principios y llevaros con ellos hasta la revolución." Se trata de una fuerza natural muy poderosa, además de que todas las quintas líneas tienen un don natural para atraer las proyecciones de los demás. Podemos encontrar todas las expectativas humanas puestas a los pies de los revolucionarios. Si fracasa en el intento, la reputación de la quinta línea se desmorona. La revolución llevada a cabo por la quinta línea tiene que ser siempre muy práctica,  y  es preciso que sepa cuál va a ser la manera en la que va a proceder en cada momento.  ', 'Puede proponerse, por ejemplo, eliminar todas las granjas privadas y crear una sola granja gigante del tamaño de Europa, creyendo que así podrá criar más ganado del que nunca hubiera imaginado. Aunque suene práctico, la puesta en marcha de un proyecto semejante puede tener resultados devastadores. "Ah, por cierto, antes tendremos que quitar de en medio a todos los propietarios de las granjas, ¿eh?. Tenemos que hacerlo, es una cuestión práctica. Si no lo hacemos, nunca podremos construir la Gran Granja para todos." Eso es lo que hacen, es lo que siempre han hecho. No hay manera de librarse de ellos. Algunas veces los convertimos en héroes, otras los convertimos en villanos. De hecho, al fin y cabo, siempre resultan héroes. Mientras sean capaces de satisfacer las proyecciones de aquellos que siguen los mismos principios que ellos, siempre se les tendrá por héroes.  ', 'No se trata simplemente de establecer unos principios nuevos que traigan la revolución, sino de poder beneficiarse de ellos. No tiene ningún sentido hacer una revolución si no vas a sacar beneficio de ello. Una de las maneras más antiguas en las que los humanos han tratado unos con otros ha sido atacar a la tribu del valle vecino. Matando a todos los varones, dejando embarazadas a todas las hembras y llevándoselas a sus casas. En parte es así como han ocurrido siempre las cosas, y es una de las formas en que hemos aprendido unos de otros. Así es como se ha desarrollado la historia, con una tribu conquistando a la tribu vecina, llevando sus dioses a las tribus conquistadas, y también sus muebles y sus cosas. Lentamente esas cosas se van fusionando, y algo nuevo emerge de ellas. Así es como siempre ha funcionado. Es decir, que básicamente estamos diseñados para invadir el territorio vecino para matar y violar. ', 'Existen muchos prejuicios acerca de esta cuestión, pero la gente que nace con esta cruz está aquí para este tipo de funciones. En este mismo momento tenemos a 3 billones de personas que se acuestan hambrientas - sólo de eso ya podemos ver lo predecibles que son todo tipo de muertes. No podía ser de otra forma, ya que es todo una cuestión de comida y alimentos. La puerta 49 exige que tengamos lo que necesitamos para comer y para cubrir las necesidades de la comunidad. Sin alimento suficiente, la tribu estará dispuesta a ir a la guerra - somos animales al fin y al cabo. El revestimiento de civilización de la especie humana es una capa realmente fina, y muy reciente. La gente anda por ahí corriendo con su moralidad a cuestas, en lugar de entender que todas estas cosas tienen su lugar en la evolución. Lo tienen, nos guste o no.  ', 'Bien es cierto que en un mundo en el que ni a los seres humanos se les da suficiente para comer, no se puede ir por ahí llorando por la paz. Lo que hay que exigir, con lágrimas o con lo que sea, es un poco más de organización. Hay comida suficiente para alimentar a todos - ese no es nunca el verdadero problema. Uno de los temas más marcados desde el comienzo de esta historia es que para estar en este programa global, es preciso que nos mantengamos unidos para sobrevivir. No fue fácil al principio para los seres humanos competir por su lugar en el mundo. Fue preciso que desarrolláramos habilidades comunitarias, habilidades que estaban enraizadas en la violencia y en la necesidad de protección. No teníamos otra elección. No podemos simplemente librarnos de eso. No podemos sentarnos en una mansión de mármol y redactar una ley que diga que no puedes hacer esto o lo otro, porque esto es algo que no se deja legislar. Somos una totalidad, y todos y cada uno de los aspectos de la vida están presentes en nuestra especie. Existen seres humanos que son arquetipos portadores de cada uno de estos aspectos.  ', 'Al llegar a la sexta línea de la puerta 49 tenemos que hacer un salto considerable. Cuando la 49.6 desciende de su tejado, tiene que hacerlo con unos principios que le sirvan tanto para abastecerse de todo lo que necesita como para abrirse a los demás. Sin embargo, ¿qué es lo que se encuentra en ese momento? - Deseo. Así es como funciona el programa, si miras atrás, te pones nervioso, pero si miras adelante afilando tu espada, entonces lo que viene a continuación es el deseo. Como seres humanos que somos, estamos absolutamente desvalidos ante el modo en que somos conducidos. No tenemos la más remota idea de lo poderoso que es el látigo que nos obliga, y de lo seductora que es la zanahoria que tenemos delante de nuestros ojos. El deseo comienza en la puerta 30, y comienza con la Cruz de Angulo Derecho del Contagio. ']
    },
    {
        cruz: 'Cruz Angulo Izquierdo de la Sanación 2',
        img: imagesCruzes['sanacion.jpg'].default,
        texto: ['Una vez más, quiero decir que esta es la única cruz que tiene una relación directa con el proceso de sanar. Las cruces de ángulo izquierdo aparecen solamente en dos variaciones, que se dan siempre a partir de la posición del Sol de Personalidad en dos puertas opuestas en el mandala zodiacal. Cuando vimos la primera variante de la Cruz de la Sanación, el Sol de Personalidad estaba en la puerta 25 y la Tierra en la 46. En esta segunda variante es el Sol el que está en la puerta 46. Existen dos tipos de sanación. En primer lugar, está la sanación que proviene de la puerta 25, a la que nos referimos cuando hablamos de medicina. Este es el tipo de sanación de la mano del doctorado, del entendimiento técnico, y de los servicios de asistencia al cuerpo físico. Pero también existe la sanación a través del amor. Existen de hecho personas que tienen esa naturaleza. Es cierto cuando dicen que la gente se puede llegar a sanar por la sola fuerza del amor. Pero eso no es verdad para todo el mundo. En cualquier caso, si has venido al mundo sobre esta Cruz de Angulo Izquierdo de la Sanación eso es lo que intentarás hacer; a sanar a través del amor. Todavía perdura la conexión - a través del eje 46/25 - con la sensualidad natural del Sol en la puerta 46. Pero este no es el tipo de amor que dice: "Amo al prójimo". Es más bien una forma de amor que aparece por serendipia, en el momento y lugar apropiado. Dicho con otras palabras, es una forma de amor que aparece espontáneamente, porque así es cómo funciona el increíble don que posee esta puerta.  ', 'Aunque estemos tratando de la sanación, debes tener siempre en cuenta que hay una dualidad de fondo en todas las cruces, que hay siempre una polaridad en el modo en que son vividas. Hay también mucha gente en el mundo que se muere porque no encuentra amor en ninguna parte. El polo opuesto siempre nos revela un aspecto importante de la verdad de todo. Esta es gente que busca sanarse a sí misma a través del amor, algo parecido a la farsa de los proyectores que te invitan a comer cuando solamente pretenden acceder a tu energía y que les devuelvas la invitación en otro momento. Es decir, que frecuentemente la gente de esta cruz está simplemente esperando a ser sanada por la aparición del amor en su vida. La sanación que tiene lugar a través del amor se realiza a través del cuerpo, y debe ser satisfecha a través del contacto físico. Es preciso que haya una conexión con la otra persona para poder dar satisfacción a la sensualidad que se comparte. Pero también es preciso que comprendas bien que esta cruz no puede realizarse a menos que logre establecer un compromiso con la otra persona. Por supuesto, que al establecer ese compromiso, lo hace a través del amor.  ', 'No se trata aquí de una forma de amor sexual. Con demasiada frecuencia, la experiencia del Centro-G no es reconocida como amor en el campo de percepción de la personalidad. Tendemos a confundir el amor con nuestros deseos, con las demandas hormonales de nuestro Plexo Solar, que nos dan acceso a experiencias muy distintas a las del Centro-G. Recuerda que el Centro-G nos mantiene unidos a la unidad de todas las cosas, nos mantiene unidos a la totalidad de la que formamos parte. Este tipo de amor no es personal, aunque lo tengamos que vivir con las cualidades personales que los demás proyectan sobre él. Las personas nacidas con esta Cruz de Angulo Izquierdo de la Sanación están totalmente indefensas ante el sentimiento de que su amor por otra persona puede realmente llegar a marcar una diferencia. Esto puede ser de una belleza sublime, pero también debes reconocer que son seres que pueden llegar a sufrir mucho en esta vida, ya que ellos mismos necesitan ser sanados por la experiencia de compartir amor con sus semejantes - eso es lo único que reconocen verdaderamente.  ']
    },
    {
        cruz: 'Cruz Angulo Izquierdo de las Demandas 1',
        img: imagesCruzes['demandas.jpg'].default,
        texto: ['Al pasar al ángulo izquierdo del hexagrama llegamos a la Cruz de Angulo Izquierdo de las Demandas. Una cosa es ser capaz de diagnosticar un problema: "Oye, mira, aquí hay algún problema", y otra enteramente distinta es demandar que se haga algo al respecto. Esta es la cruz de todos los movimientos de protesta que alguna vez han publicado sus demandas. "Demandamos que se haga algo, que se encuentre alguna solución para que la situación denunciada sea corregida, aunque para ello tengamos que hacernos con el control de la situación". Imagina lo que significa que tener que vivir con ese tipo de configuración, y lo importante que es que se comprenda su verdadero propósito. Lo importante que es para estas personas llegar a satisfacer ese papel en su vida. No olvides nunca que la lógica está siempre desesperadamente necesitada de recursos energéticos y de gente dispuesta a respaldarla. Estas no son personas que te piden que las apoyen, sino que te lo exigen. Te dicen: "Mira, préstame tu atención. Lo tenemos que hacer ahora". Lo exigen.  ', 'Claro que, al pedirlo, parecen dispuestos a hacerse con el control, lo que puede acarrearles muchos problemas. Recuerda que tienen la puerta 21 activada en el plano inconsciente de su diseño, por lo que no llegan a darse cuenta de que están siempre controlando o intentando controlar. No es algo de lo que participen conscientemente. Al formular sus demandas, lo que realmente intentan hacer es una corrección para el colectivo. En retorno reciben respuestas de tipo: "Estás hambriento de poder. Solamente intentas hacerte con el control. Eres una mala persona". Son gente que recibe muchas críticas de los demás porque realmente no se les entiende. ', 'Su motivación, más que al deseo de hacerse con el poder, se debe a la necesidad de insistir para que se haga algo:”! ¡Que alguien limpie este escándalo!" Si vas a un restaurante, y se ha derramado algo que nadie viene a limpiar, siempre habrá alguien cerca del desastre que acabe gritando: "¡Que alguien venga a limpiar esto!" Esa es la demanda de esta gente que siempre está ahí. Si eres un Generador nacido con esta cruz, no te imaginas lo frustrante que puede llegar a ser vivir intentando manifestar tus demandas.', 'No conseguirías más que incrementar las resistencias con las que te topas, y no parecería haber nunca una respuesta a tus demandas. Todo el mundo se limita a decir: "Bueno, pues no seas tan exigente". ', ' Siempre que tengas que tratar con algún aspecto del colectivo humano, debes entender que el colectivo está ahí para ocuparse de los asuntos colectivos, que no se trata de tomárselos como una cuestión personal. Sólo cuando el colectivo se ocupe de los asuntos de toda la sociedad puede ser reconocida y respetada la contribución de estos seres humanos. En un plano personal, lo único que pueden hacer es esperar a que alguien se acerque a preguntarle. Si te toca vivir o tratar con personas que tengan esa capacidad, aprenderás a valorarla, ya que podrás reconocer el valor de las respuestas que son capaces de ofrecer cuando les preguntas algo. Al fin y al cabo, en eso consiste su trabajo, en decirte lo que necesitas corregir. Es importante reconocer el modo en que estas personas funcionan, para realmente poder beneficiarse del trato con ellas - tanto para los que tienen que tratar con ellas como para las personas mismas que son portadoras de esta cruz. Es preciso que reconozcan que sus demandas nunca serán escuchadas si intentan arrojárselas a los demás a la cara. Eso no puede funcionar nunca, y menos viniendo de una puerta diseñada para ser tan pasiva como la 52. En esta puerta se trata de esperar en estado de quietud, y de esa pasividad nace toda su fuerza.  ']
    },
    {
        cruz: 'Cruz Angulo Izquierdo de las Demandas 2',
        img: imagesCruzes['demandas.jpg'].default,
        texto: ['La salida natural de la cruz anterior nos conduce a la segunda variante de la Cruz de Angulo Izquierdo de las Demandas. Esta es una cruz que simplemente dice: "De acuerdo, si quieres mi energía, estas son mis condiciones. Tú quieres mi energía, pero esto es lo que quiero yo a cambio. Quieres que te preste para poner en marcha un nuevo proyecto, pero esto es lo que yo quiero a cambio". Es decir, que hay aquí un montón de demandas con las que vamos a tener que tratar cuando nos encontremos con algún portador de esta cruz de encarnación. Por cierto, que se trata de demandas muy diferentes a las que veíamos con el Sol en la puerta 52. Recuerda que, en primera instancia, aquellas demandas estaban relacionadas con la necesidad de disponer de suficientes recursos energéticos a la de hora de estar dispuesto a implicarse en algo. La puerta 58, sin embargo, está diseñada para proveer la energía necesaria para desafiar a la autoridad y desarrollar el talento, de modo que se logre hacer y expresar las cosas con habilidad. O sea, que todas estas demandas están enraizadas en el mensaje que proviene del inconsciente diciendo: "Sí, te puedo ofrecer mi vitalidad personal. Sí, te puedo dar acceso a la maravillosa energía que poseo, pero estas son mis demandas".  ', 'Al llegar a la sexta línea de este ángulo izquierdo, nos encontramos con personas que muy pronto en la vida hacen demandas a través de la resonancia del tema de la tercera línea. Esto los lleva a desarrollar un profundo pesimismo de que nadie les quiere dar lo que están pidiendo. Por supuesto que eso solamente ocurre porque no viven de acuerdo con la naturaleza de su tipo. Cualquiera que sea portador de algún tipo de profundidad y de energía para la corrección, se puede ver aplastado por otros muy pronto en esta vida, porque plantea sus correcciones en el momento inoportuno y de la forma menos adecuada, con lo que lo único que consigue es molestar a la gente. Como todas las sextas líneas - en la etapa inicial de los primeros 28 años de vida - acaba acumulando un montón de intentos y errores, de equivocaciones y de vínculos afectivos rotos.  ', 'Luego, en la segunda etapa - después del retorno de Saturno - se subirán al tejado de su casa, y mirarán sobre el mundo para ver a quién le satisfacen sus demandas, y el modo en que lo consiguen. Pueden llegar a encarnar figuras de mucha autoridad, y ser capaces de dirigir a otros en la forma de plantear sus demandas a terceros. En ese sentido, estas personas pueden ser de mucho valor para los demás. Finalmente, cuando en el retorno de Quirón tienen que descender del refugio de su tejado, es preciso que sean capaces de hacer esas demandas por y para sí mismos. Es decir: "No, no puedes acceder a mi energía".  ', 'El hecho de que dispongas de una puerta de energía que otra gente pueda necesitar, no quiere necesariamente decir que te tengas que pasar la vida corriendo de un lado para otro como una gallina descerebrada. También puede tratarse de otro tipo de energías, como son, por ejemplo, las riquezas materiales. En nuestros tiempos modernos, frecuentemente se trata de dinero. De ahí que con mucha frecuencia la gente se dirige a las personas de las puertas 58 y 52 en busca de dinero, porque es el equivalente de los recursos energéticos. La línea 58.6 es la típica persona que recibe una herencia, y que es estafada por alguien cuando tiene 23 o 24 años. Es alguien que comete el error de comprometer su energía con el proyecto equivocado, sin plantear correctamente sus demandas y sin establecer claramente sus condiciones. Al final, acaba chamuscado. ', 'Siempre que tengas que tratar con alguna sexta línea, debes tener presente el caos que tiene que atravesar en los primeros 28 años de su vida. Una vez más, quiero insistir aquí en que esta es una de las cosas fundamentales acerca de la educación de nuestros hijos. Si tienes algún hijo portador de un perfil de sexta línea, debes reconocer los riesgos que eso conlleva para su salud y los problemas que le puede ocasionar en el ámbito de sus relaciones humanas en la primera etapa de su vida. Esta es gente que, debido a su fragilidad psíquica, puede llegar a morir joven. Son los que más necesitan recibir una educación y unos cuidados apropiados.  ']
    },
    {
        cruz: 'Cruz Angulo Izquierdo de las Encarnaciones 2',
        img: imagesCruzes['encarnaciones.jpg'].default,
        texto: ['Llegamos aquí a la segunda variación de la Cruz de Angulo Izquierdo de las Encarnaciones - la cruz de la entrada en la carne, del descenso a la forma. Aquí salta la primera de las alarmas. "Oh, Dios mío, otra vez no." Apenas te da tiempo para congraciarte con tus amigos cuando ya se te acaba el billete y ya estás listo para irte. Simplemente te ponen en tu sitio, y hala, a andar el camino. Uno de los temas de esta cruz lo podemos ver en la fuerza con la que la puerta 24 - el Retorno - nos mantiene atados a tener que comenzar una y otra vez desde el mismo sitio. En el contexto de esta cruz de encarnación, el una y otra vez se refiere al retorno constante a la encarnación en la forma.  ', 'El verdadero valor en términos de lo que es esta cruz lo podemos ver en la variación que nos propone cada camino. Con el eje de las puertas 44 y 24, el camino es el retorno constante a la confrontación con nuestros miedos a no tener suficientes recursos y no lograr salir adelante - es la combinación de estas dos puertas. Por eso encontramos en los de esta cruz a las personas que no están contando siempre esas fábulas. Ese es, al fin y al cabo, su trabajo. Recordarnos que estamos aquí para trabajar duramente en los campos, y ganarnos el pan con el sudor de nuestra frente. Esta es gente muy consciente de esa realidad. No obstante, es muy probable que ignore que ese trabajo duro sirve a un propósito superior. De todos modos, los seres humanos raramente llegan a vislumbrar nada de su verdadero propósito en la vida. Muy pocas veces tienen la oportunidad de levantar el velo de su No-ser, aunque sólo sea un instante, y de ver con claridad como todo lo que existe está interrelacionado y encuentra siempre una manera de salir adelante sin trabas.  ', 'Las dos variaciones de la Cruz de las Encarnaciones nos traen a la memoria siempre algo inusual de otra época, ya que se trata de algo que para ellas tiene mucha importancia. La gente que nace con esta cruz abre su vida a cosas que provienen de otra época y que han desaparecido de este mundo. Es un fenómeno extraño e increíble. Si sabes que es alguien nacido con esta cruz, entonces sabes que eso ha debido formar parte de su vida en algún momento del pasado. Esta maravilloso contemplar el sinfín de maneras en el que esta gente se dedica a hacer eso. Por ejemplo, tienes aquí a la persona que aprende a hablar latín. No sabe por qué ni para qué desea aprender latín, pero lo desea. O alguien que coge un instrumento que nadie ha vuelto a tocar en los últimos 1000 años, y se pone a investigar la manera de poder tocarlo.  ', 'Las dos variaciones de la Cruz de las Encarnaciones nos traen a la memoria siempre algo inusual de otra época, ya que se trata de algo que para ellas tiene mucha importancia. La gente que nace con esta cruz abre su vida a cosas que provienen de otra época y que han desaparecido de este mundo. Es un fenómeno extraño e increíble. Si sabes que es alguien nacido con esta cruz, entonces sabes que eso ha debido formar parte de su vida en algún momento del pasado. Esta maravilloso contemplar el sinfín de maneras en el que esta gente se dedica a hacer eso. Por ejemplo, tienes aquí a la persona que aprende a hablar latín. No sabe por qué ni para qué desea aprender latín, pero lo desea. O alguien que coge un instrumento que nadie ha vuelto a tocar en los últimos 1000 años, y se pone a investigar la manera de poder tocarlo.  ', 'Llegamos ahora al último de los cuatro cuartos, que comienza con el hexagrama 1 en el signo de Escorpio - una de las puertas de la Esfinge. El Ámbito de Sirius, que comienza aquí, avanza a través de los primeros ocho hexagramas del cuarto hasta llegar a la puerta 10 - puerta del comportamiento del ser - en la parte superior del mandala zodiacal. Luego, descenderá por los ocho hexagramas siguientes para cerrar el cuarto al llegar a la puerta 19 - el Acercamiento - que es la última de las puertas de la Cruz de los Cuatro Caminos. Este es el Cuarto de la Mutación, y es aquí, en las 16 puertas de este cuarto, donde se determina el modo en que la mutación se mueve, de facto, a través de la totalidad. Todas las mutaciones que vienen al mundo parten de este Cuarto de la Mutación. Para nosotros, que vivimos inmersos en una vasta programación cósmica, es importante que lleguemos a reconocer que la mutación es iniciada por el programa evolutivo, y no por nosotros. En el contexto de lo que es el programa evolutivo, ni siquiera se trata de una verdadera mutación, sino simplemente un cambio en la información o en la frecuencia de sus registros y patrones. Dada la naturaleza de nuestra relación con el tiempo y el espacio, la información tarda mucho tiempo en llegar hasta nosotros. Irrumpe en nuestro proceso a través de algún individuo, a través de alguna encarnación con potencial para mutar, y repentinamente aparece en el mundo. Luego, nosotros la podemos señalar con el dedo y decir: "Ahhá, ahí hay una mutación." Ya ha pasado a formar parte de este mundo.  ']
    },
    {
        cruz: 'Cruz Angulo Izquierdo de las Limitaciones 2',
        img: imagesCruzes['limitaciones.jpg'].default,
        texto: ['El ángulo izquierdo es el que acaba pagando las consecuencias de tener que fracasar o triunfar en la vida, en función de las personas a las que vive conectado en su vida. Con esta configuración transpersonal tienes una geometría que compartir con otras personas en tu vida, y una geometría que no se reduce a tu experiencia personal con ellas, sino que puede estar vinculada, por ejemplo, a tu carrera profesional. Al fin y al cabo, en la puerta 32 estamos tratando siempre con el mundo de los asuntos materiales y de los negocios. También estamos tratando aquí siempre de la evaluación y del miedo al fracaso.', 'La quinta línea favorece que seas objeto de una enorme cantidad de proyecciones, que pueden crearte verdaderos dilemas internos. No obstante, si la quinta línea se implica en formas prácticas de evaluación, por ejemplo, en la evaluación de productos o asuntos terrenales, entonces puede encontrar una forma de éxito capaz de superar las pruebas del tiempo. No hay nada que satisfaga más a la puerta 32 que poder estar siempre en el mismo sitio, viviendo en el mismo bloque de casas, en la misma ciudad de siempre, y que la decimonovena generación pueda poner una placa conmemorativa en la entrada de la casa que diga que fue fundada en 1802. Para esta puerta, esa es la cosa más maravillosa del mundo, esa es la gran continuidad de la vida, que para ella significa que todo está realmente bien.  ', 'La tribu tiene miedos que emergen siempre que la base de su supervivencia material está amenazada. Yo mismo fui testigo de algo así en Europa, donde se exigió a las comunidades agrícolas de los países más pequeños que se especializaran en ciertos productos para encajar mejor en el grupo más amplio. Eso significaba, por supuesto, que muchas granjas autosuficientes - que eran capaces de abastecerse de todo lo que necesitaban - tenían que dejar de serlo. Claro que eso despierta miedos muy profundos en la gente, que se pregunta: "¿Y qué ocurrirá si nos dejan de lado? ¿Qué ocurrirá si esto, o si lo otro, o si lo de más allá? Todo eso forma parte del proceso de aprender a manejar las limitaciones que hay en la vida. Esta es gente que nace realmente para enseñarnos cuál debe ser el límite que todos debemos respetar, en términos de lo que es posible en el mundo de los negocios. "Oye, querido, ya sé que eres muy ambicioso, pero todavía necesitarás 20 años para llegar a presidente. Así que, por favor, no aparques tu coche al lado del mío."  ', 'La línea 32.6 es una de las más difíciles, ya que es una línea que trata de la depresión y del suicidio potencial. Yo conozco a mucha gente con esa línea que ha querido dejar de vivir. Esta línea está ahí para mostrarnos lo poderoso que puede ser el fracaso cuando actúa como una fuerza que es capaz de rompernos. Esta sexta línea se rompe cuando no hay vías de continuidad posibles, y cuando deja de tener confianza plena en los valores con los que vive. En cuanto deja de tener confianza en su seguridad en el plano material, esta línea puede entrar en profundos estados de depresión. Es especialmente importante que esta línea entre correctamente en contacto con las cosas que van a formar parte de su vida, porque entonces podrá manejar todo esto con la confianza suficiente. Sabrá manejar bien las circunstancias que lo acompañen, porque no se sentirá amenazado de la misma manera. Sin embargo, debido a todo el caos inherente al proceso de la sexta línea, y a lo que tiene que pasar en la primera etapa de su vida, cuando te encuentras con las personas que son sus portadoras podrás reconocer ese campo de depresión potencial que palpita en ellas. Es algo que no puede ser evitado. Por eso, el encuentro con las personas de esta cruz siempre estará acompañado de una cierta pesadez.  ', 'Todos los ángulo izquierdos de todas las cruces completan su proceso al llegar a la sexta línea. Por ello, todos nosotros, los que no somos portadores de sextas líneas en nuestro perfil, necesitaremos en algún momento de nuestras vidas la confirmación de la autoridad que emana la persona de sexta línea. De un modo o de otro, todos tendremos que salir a buscar la aprobación de su autoridad objetiva, para poder acceder a la sabiduría potencial de la que todas las sextas líneas son portadoras. La línea 32.6 necesita ser capaz de vivir con pulcritud y meticuloso respeto a sus valores - entrando correctamente en su relación con las cosas, de modo que nunca se vea atormentada por la ruptura de la continuidad. Esta es la línea que más profundamente sufre el embate de nuestro miedo a ser extinguidos, miedo a ser eliminados, miedo a perderlo todo, y miedo a ser erradicados de la faz de la Tierra.  ', 'Es como cuando miras las noticias después de que un huracán haya pasado por encima de alguna localidad, y escuchas las entrevistas que hacen a los afectados. Siempre están los que dicen: "Vaya, no sabes el ruido que metía!" Luego están los que hablan con su cajita de cajita de pañuelos de papel y medio juguete de su perro bajo el brazo: "Lo he perdido todo. No me queda nada. Todo se ha perdido para siempre." Todavía están vivos, y lo valoran tan poco que te entran ganas de acercarte a ellos para sacudirles un poco hasta que salgan de su consternación. Al mismo tiempo, es preciso saber reconocer que eso es precisamente lo que aquí se procesa.  ', 'Esta gente pueden ejercer un influjo muy deprimente, porque, al fin y al cabo, los demás se acercan a ella para pedirle su aprobación, y su respuesta es: "Olvídalo. Eso no funcionará. No vale para nada. Nadie comprará jamás esa basura. Todavía me quedan millones de yo-yós por ahí. Nadie los quiere!." No obstante, en la geometría de las cosas, nadie tiene elección, como la ballena que al cruzar el bancal de peces absorbe en su boca todo lo que se encuentra en el camino. Tú estás en un momento de crisis en tu vida y necesitas algún tipo de asesoramiento, y vas a dar con la segunda variante de la Cruz de Angulo Izquierdo de las Limitaciones. Puedes estar seguro de que te dará en la cabeza con un martillo y un ladrillo también. "Bueno, fíjate bien, porque esta es tu limitación."  ']
    },
    {
        cruz: 'Cruz Angulo Izquierdo de las Máscaras 1',
        img: imagesCruzes['mascaras.jpg'].default,
        texto: ['Hemos comenzado con la Cruz de la Esfinge - donde lo ocurrido ayer, lo ocurrido hace un mes, marca las pautas de la dirección a seguir, siempre en función de todo lo que te ocurrió en el pasado. Luego llegamos a ese otro aspecto mucho más fijo - donde disponemos de la misma fuente de alimentación, del mismo campo de empatía natural, pero donde el proceso es muy distinto. No hay ninguna necesidad implícita en el propósito de ese aspecto más fijo (recuerda que tu Cruz de Encarnación representa tu propósito) de ser exteriorizado ante los demás.', 'Sin embargo, cuando hablamos del ángulo izquierdo estamos tratando del karma transpersonal. Al tratar del karma transpersonal, lo que tenemos es una obligación física, estructuralmente programada (es una obligación) de integrarse con los demás para hacerles llegar esa información. El proceso de hacer llegar a otros esos mensajes comienza por los roles del Salvador en la 13.5 y el General en la 7.5. Aquí tenemos al Salvador General raro, que espeta la mutación que encarna en el trato con los demás. La manera en que lo hace es ocultándose detrás de una fachada, sin que haya nada moralmente reprobable en ese hecho. Simplemente no tiene elección.  ', 'Su vida gira en torno a las máscaras; son absolutamente necesarias para él. La razón por la que necesitan esas máscaras es que son seres que están siempre sometidos a la presión ejercida por todos aquellos a los que se sienten conectados kármicamente a hacerles entrega de sus parabienes. Por supuesto que esos parabienes aquí estarán siempre vinculados a la dirección a seguir. No debemos olvidar que siguen siendo portadores del eje de las puertas 13 y 7, y consecuentemente de la dirección colectiva del Centro-G, dentro de su Cruz de Encarnación. Debido a que el campo de proyecciones en el que tendrá que actuar será muy profundo y extenso, particularmente en el caso de la línea 5, y la gente le demandará: "Oye, mira, estamos esperando que nos des alguna dirección a seguir", esta no es gente que te dé la dirección en la cola del supermercado. No tienen la idiosincrasia del ángulo derecho. El ángulo izquierdo tiene que reconocer lo que la otra persona quiere o recibe de él. Su proceso es realmente muy distinto.', 'Lo natural con la Cruz de Angulo Izquierdo de las Máscaras es encontrarse con gente que necesita ponerse iniciales detrás de su nombre o utilizar disfraces. Si vas a ser alguien que se dedica a leer las cartas del Tarot, entonces vístete como un maniquí del siglo XVII. Es preciso que dispongas de un disfraz, tanto si se trata de un disfraz psíquico o si es un disfraz que encubre tu personalidad. Cualquiera que sea el caso, esta es gente que se mete dentro de alguno de esos disfraces y que luego juega el papel correspondiente.  ', 'Ahora bien, una de las cosas a entender acerca de la yuxtaposición, del ángulo izquierdo o del ángulo derecho de esta cruz es que todas las versiones son portadoras de una profunda individualidad. El programa comienza impregnado de una profunda melancolía. Si fuera de otro modo, no podríamos disfrutar de su música. Al fin y al cabo, de eso es de lo que estamos tratando - de que todo el proceso responde a la necesidad de orquestación. Comienza con la melancolía porque la melancolía es la musa. Puedes ver cómo la mente comienza con la tristeza y con la ansiedad de que esa melancolía no se resuelva nunca, y es a partir de ahí donde podemos ver emerger la gloria de lo que hemos alcanzado desde un plano mental.  ', 'La realidad es que se trata de cruces cuyo proceso está lleno de melancolía. Una de las cosas que más nos cuesta comprender a los seres humanos es la naturaleza de la bioquímica, porque tendemos a tomarnos todo de la más personal de las maneras. Tendemos a tomarnos la vida como algo personal, a tomarnos nuestra cruz como algo personal, a tomarnos todo esto como algo personal, así que también nos tomamos a personal la bioquímica de nuestro organismo. De modo que cuando nuestra bioquímica cambia, creemos que es personal y postulamos a partir de ese hecho que algo no va bien. Parece haber alguna razón. Si tienes alguna definición individual en tu diseño, no deberías formular ningún razonamiento acerca del porqué de tu melancolía, porque lo único que estarás haciendo es matar las musas - estarás matando las musas y sustituyéndolas por depresión. Hay cruces de encarnación que comienzan el “Cuarto de la Iniciación” - comienzan con melancolía. Todo comienza con tristeza y con arte. Comienza con música.  ', 'Comienza también con el amor, porque la individualidad está en el núcleo mismo de lo que es el amor. La individualidad es la búsqueda del amor perfecto, del amor más trascendente, amor cósmico, amor a uno mismo, y de la unión con el otro a través del amor y del romance. Todo esto está presente desde el comienzo mismo. Es el punto de partida, con el ángulo derecho de la puerta 13 diciendo: "¿Había amor en todo lo que he dejado tras de mí? ¿Recibí amor en el pasado? ¿Lo recibiré a partir de ahora?" Para cuando llegamos a la Cruz Yuxtapuesta, lo único que hace es escuchar a ver si lo oye llegar: "Ah, está ahí fuera en alguna parte". Esta es la gente que escucha los sonidos del amor durante la noche. No tiene amante real, acaso sólo tenga un osito de peluche, pero las canciones de amor que escucha son fantásticas. Puede que tenga la radio conectada a alguna emisora sentimentalona de alguna parte. Entonces llegamos finalmente al ángulo izquierdo, y el ángulo izquierdo dice: "Me pondré mi máscara, y te diré exactamente lo que necesitas saber, porque si no te digo exactamente lo que tienes que hacer, no podré sobrevivir en esta vida. De modo que te lo voy a decir, pero te lo voy a decir basándome en mi tristeza." ', 'Una cosa es ser capaz de describir los mecanismos del funcionamiento de estas cruces, y otra muy distinta es reconocer que las personas que portan estas cruces no están despiertas. Generalmente están muy confusas y viviendo atrapadas en la psicología negativa de su No-Ser. No tienen ni idea de lo que está pasando en sus vidas, y ciertamente no están en sintonía con su propio proceso. Por eso, el mayor dilema de este planeta es que nadie conoce su propósito. Si vives atrapado en el No-Ser, no lo encontrarás nunca hagas lo que hagas.  ', 'En el mismo comienzo de la iniciación, en el mismo proceso de arranque, la mayoría del tiempo todo se ve envuelto y enredado en la profunda depresión con la que esta gente encara la vida. Piensa por un instante en lo que significa vivir mirando hacia atrás, ver las cosas que no te gustan, y no saber qué hacer con todo eso. Esta gente no sabe por qué le toca ver todo eso, y acaba desarrollando un profundo pesimismo acerca de todo.  ']
    },
    {
        cruz: 'Cruz Angulo Izquierdo de los Desafíos 1',
        img: imagesCruzes['desafios.jpg'].default,
        texto: ['Con el ángulo izquierdo llegamos siempre a la interacción transpersonal con otros, lo que significa que la realización personal no es posible para el ángulo izquierdo sin la integración con otras personas. Aquí tenemos la Cruz de Angulo Izquierdo de los Desafíos, con el eje de las puertas 2 y 1 marcando el camino. En la estructura natural de un hexagrama la primera línea es la que representa siempre su verdad más básica, pero es en la quinta línea de cualquier hexagrama donde podemos reconocer lo que los demás quisieran ver en esa verdad. Eso no significa, sin embargo, que así es cómo tenga que ser en realidad.', 'El poder de seducción de la quinta línea puede conducir a provocar las expectativas de los demás, mientras que la primera línea nos revela siempre la esencia misma de cualquier hexagrama. De modo que, en esta Cruz de Angulo Izquierdo de los Desafíos, llegados al campo de las proyecciones ajenas en el que se tiene que manejar la quinta línea del hexagrama, nos encontramos con personas que están siempre dispuestas a desafiar heréticamente el estándar de la dirección establecida. Convencidas de disponer de respuestas propias y de mejores principios que los establecidos, estas son las personas que desafían lo que parece ser la dirección general de los seres humanos. Eso no significa que lancen su desafío de un modo activo, sino que son las proyecciones que reciben de otros las que los convierten en seres desafiantes, aun cuando no lo están siendo para nada. Si tomamos como ejemplo una hilera de niños corriendo a lo largo de un pasillo durante una alarma de incendio, y una de esas criaturas resulta haber nacido con la Cruz de Angulo Izquierdo de los Desafíos, es seguro que será la que camina fuera de la hilera. Ella misma puede que ni siquiera llegue a darse cuenta, ya que no hay ningún intento consciente de ser desafiante. Los demás son quienes la verán como un ser desafiante, y serán también quienes proyecten sobre ella esa actitud herética.  ', 'No debemos olvidar nunca la relación tan estrecha que hay, en el contexto de los perfiles, entre la quinta y la sexta línea de cualquier hexagrama. La quinta línea es la línea de la universalización, por lo que está diseñada para recibir las proyecciones del colectivo humano. Eso le permite ser la más capacitada para proveer las soluciones prácticas de las que el hexagrama dispone, y también para informar o mutar a los demás en el contacto con ellos. Pero es la sexta línea la que se asienta sobre el tejado de la casa, particularmente durante la etapa media de una vida, y la que está ahí para atestiguar si la herejía de la quinta línea era o no de valor. Por ejemplo, en el contexto de esta Cruz de Angulo Izquierdo de los Desafíos, la quinta línea es la que dice: "Debemos romper con esta dirección y seguir ese otro camino. Esta no es la dirección correcta. Este no es el camino que debemos tomar. Seguidme." A la sexta línea le corresponde atestiguar si esa herejía estaba justificada o no. De modo que en la quinta línea de la Cruz de Angulo izquierdo de los Desafíos estamos tratando con la autoridad para ser anárquico en la dirección que uno debe seguir. ', 'Cuando estas fuerzas se muestran abierta y verdaderamente desafiantes, entonces es cuando sufrimos un colapso en la dirección. Dicho sea de paso, que eso no deja de ser normal. Al fin y al cabo, todo eso tiene su sitio en las mecánicas de la puerta 2, que no desaparece en ningún momento de esta configuración a medida que avanzamos del ángulo derecho al ángulo izquierdo del hexagrama. Siempre está presente, ya que todo forma parte de la dirección. Pero hay muchos matices en todo esto. Si miras el mundo actual en el que vivimos, puedes encontrar gente en el planeta que vive todavía como si estuviéramos en la Edad de Piedra, en el plano de la supervivencia más estricta.  Hay muchas realidades distintas funcionando al mismo tiempo. La Cruz de Angulo Izquierdo de los Desafíos trae consigo el movimiento que lleva a apartarse de cualquier dirección preestablecida. Lo que aflora a través de esta cruz de encarnación es un nuevo aspecto de un cisma, que se puede manifestar con todo tipo de variaciones y matices sutiles.  ']
    },
    {
        cruz: 'Cruz Angulo Izquierdo de los Deseos 1',
        img: imagesCruzes['deseos.jpg'].default,
        texto: ['Al llegar al ángulo izquierdo de este hexagrama nos encontramos con una cruz un tanto extraña - la cruz de ángulo izquierdo de los Deseos. Es muy interesante porque trata del tipo de deseos que siente, por ejemplo, alguien que ha nacido en Uganda y se entera de que las Naciones Unidas tiene un código para la protección de los derechos humanos. Es obvio que esa persona experimentará el deseo de ser incluida en esa ley. Seguro que piensa que no estaría nada mal caer también bajo el paraguas de ese código.  ', 'Una de las cosas que debemos reconocer de esta cruz de ángulo izquierdo de los Deseos es que está siempre intentando prever el futuro. La posición de su Tierra de Diseño en la puerta 31 que da expresión al liderazgo de la puerta 7 - la puerta de la Esfinge que nos da una dirección colectiva - lleva a los de esta cruz a vivir constantemente pendientes de lo que el futuro nos depara. La influencia de la puerta 31 a través del Canal del Alpha conlleva un diseño de liderazgo, por lo que se trata de personas muy aptas para encaminarnos hacia el futuro con una cierta estabilidad. Sin embargo, en el polo opuesto tenemos la puerta 41, que siempre trae consigo el combustible de una nueva expectativa, de un deseo renovado de un nuevo tipo de experiencia. ¿No sería maravilloso el mundo si no fuera por...? ¿Si no tuviéramos esa ley, sino que tuviéramos esa otra? ¿Si no tuviéramos esa norma, sino que tuviéramos esa otra? Esta es la Cruz de los Deseos.  ', 'La Cruz de los Deseos ejerce un poder de atracción muy profundo sobre el colectivo humano. No tienes más que pensar en América, que es un país hecho de abogados. Tenemos el deseo de una ley nueva, cambiémosla por esa otra vieja que ya no sirve. ¿No es eso todo lo que los políticos hacen en este país? Simplemente cambian las leyes, a eso es a lo que se dedican la mayor parte del tiempo. Las leyes son cambiadas en aras de un mejor funcionamiento de la sociedad en el futuro. Eliminemos esa ley anticuada, e introduzcamos esa nueva ley que nos facilitará la vida en común.  ', 'Debes tener en cuenta que se trata de una cruz de ángulo izquierdo, y que particularmente la quinta línea de la Cruz de los Deseos tiene una influencia enorme sobre los demás porque está diciéndonos: "Mirad, todas estas leyes antiguas - no sirven para nada." Pero como la sociedad necesita patrones estables para sostenerse, en el momento en que le dices a la gente que los patrones estables con los que funciona no son lo suficientemente buenos y necesitan ser sustituidos por otros, lo que ocurre es que creas tensión en el seno de esa sociedad. Aflorarán fuerzas que desean que se introduzcan los cambios necesarios, y también lo harán otras fuerzas que oponen resistencia porque no están dispuestas a cambiar. Esas son las dinámicas básicas que funcionan en estos casos. Por todo ello, la gente que viene al mundo con la Cruz de los Deseos no permite nunca la complacencia en relación con la ley.  ', 'Debes tener en cuenta que se trata de una cruz de ángulo izquierdo, y que particularmente la quinta línea de la Cruz de los Deseos tiene una influencia enorme sobre los demás porque está diciéndonos: "Mirad, todas estas leyes antiguas - no sirven para nada." Pero como la sociedad necesita patrones estables para sostenerse, en el momento en que le dices a la gente que los patrones estables con los que funciona no son lo suficientemente buenos y necesitan ser sustituidos por otros, lo que ocurre es que creas tensión en el seno de esa sociedad. Aflorarán fuerzas que desean que se introduzcan los cambios necesarios, y también lo harán otras fuerzas que oponen resistencia porque no están dispuestas a cambiar. Esas son las dinámicas básicas que funcionan en estos casos. Por todo ello, la gente que viene al mundo con la Cruz de los Deseos no permite nunca la complacencia en relación con la ley.  ']
    },
    {
        cruz: 'Cruz Angulo Izquierdo del Alineamiento 1',
        img: imagesCruzes['alineamiento.jpg'].default,
        texto: ['El don del ángulo izquierdo es estar siempre interconectado con geometrías del pasado. Es decir, que su perspectiva parte siempre de esa sensación del movimiento en la vida. Esa sensación de movimiento se articula de la mejor manera posible en esta Cruz de Angulo Izquierdo del Alineamiento. Uno de los aspectos más interesantes de estas personas es que siempre encuentran alguna manera de alinearse con lo inesperado. Estos individuos son los que saben cómo manejar ese momento de transición y encauzarlo en una dirección apropiada, alineándose con él. Es obvio que eso no es algo que se pueda hacer sin asumir algún riesgo. O sea que se trata también de una cruz de ángulo izquierdo que es capaz de provocar grandes desastres. Imagínatela de la siguiente manera. Tú estás conduciendo una motocicleta por la carretera, y de repente un coche se cruza marcha atrás en tu camino saliendo de una calle lateral. Ese es el ángulo derecho de esta cruz, lo inesperado que puede emerger en cualquier momento, pero la Cruz de Angulo Izquierdo del Alineamiento sabe cómo esquivar esa embestida, salir rozando por el ángulo correcto, y acabar con la moto en los arbustos en lugar de empotrarse en el hormigón de la pared que hay al otro lado. No importa lo que lo inesperado traiga consigo, la Cruz de Angulo Izquierdo del Alineamiento puede comenzar a darle el uso correcto para poder integrarlo en el flujo natural de las cosas. Esta cruz convierte lo inesperado en una simple señal sobre el monitor del radar que luego desaparece.  ', 'Algo parecido al planeta Júpiter engullendo el cometa Schoemaker-Levy. Golpeado por 27 fragmentos del cometa, cualquiera de los cuales hubiera terminado con toda vida sobre la Tierra, Júpiter engulló los 27 como si nada. Lo único que quedó de ellos fue un olor a pescado muerto. Es uno de los chistes favoritos de Ra, que cuando hicieron el análisis químico de la colisión del cometa chocando con la atmósfera de Júpiter, el resultado era una sustancia química que describieron como algo cuyo olor recordaba al pescado muerto. Un hecho hilarante, si tenemos en cuenta que el cometa Shoemaker marcó la llegada del final de la Era de Piscis. Pero ahí está Júpiter, sin haber sufrido ni un solo rasguño. Toda esta configuración estaba presente en el momento del impacto, y para cuando impactó sobre su superficie el último de los fragmentos del cometa, el Sol ya había pasado de la yuxtaposición al ángulo derecho de esta cruz, absorbiendo lo inesperado como si nada ocurriera.', 'En el terreno personal. hay dos cosas que debemos comprender acerca de estas personas. Debido a que reaccionan instantáneamente a lo inesperado, las personas portadoras de esta cruz son las que hacen desgraciadas a mucha gente dejándolas tras de sí. Con la Tierra de Diseño en la línea 5 de la puerta 28 tenemos activada la línea de la Traición. El modo en que la traición funciona en un plano mundano lo veríamos reflejado por ejemplo en alguien que tiene un profesor de algo, pongamos que, de música, danza, o cualquier otra cosa. Pongamos que esa persona está muy satisfecha con el profesor que tiene. Todo funciona de maravilla entre ellos. De manera inesperada, aparece un profesor nuevo en la ciudad. La persona portadora de esta cruz se lineará inmediatamente con el nuevo profesor. ¡Inmediatamente! Tomará la emergencia de ese elemento inesperado y lo alineará con su vida dejando atrás al viejo profesor con el que tan contenta había estado antes. Claro, el profesor abandonado piensa que esa estudiante es una persona terrible, y proclama públicamente la traición a la que se ha visto sometido.  ', 'En los hechos puede resultar que ese alineamiento con lo inesperado lleve a la persona de esta cruz a simplemente hacer lo que considera más correcto para ella, y se esté alineando con algo que le aporta una calidad superior en las enseñanzas que recibe, por poner un ejemplo. Sin embargo, en la mayoría de los casos se trata simplemente de una reacción en la que intentan sacar ventaja de lo inesperado. Como si alguien que va de viaje se encuentra un letrero de desvío y se deja atraer por él diciendo: "Bueno, veamos a dónde conduce esto". Puede que su paseo lo lleve hasta Timbuktú, pero es simplemente un rasgo que acompaña la naturaleza de estas personas.  ', 'En la sexta línea de esta cruz nos encontramos con verdaderos problemas, ya que la sexta es la línea del Halo de Gloria. Esta es gente que sacará ventaja de lo inesperado, que intentará alinearse con lo inesperado, y que quizás luego tenga que sufrir por ello drásticas consecuencias. Halo de Gloria es una línea que puede desembocar en depresión, en suicidio y en todo tipo de cosas poco recomendables. La capacidad de estos seres de simplemente saltar y alinearse ante lo inesperado los convierte en fuerzas muy interesantes, capaces de alinearse con cualquier cosa que les traiga el momento presente. Sin embargo, en términos de lo que es su relación con los demás, es siempre gente que, de un modo u otro, en el intento de adivinar el movimiento siguiente, va dejando atrás a otras personas.  ']
    },
    {
        cruz: 'Cruz Angulo Izquierdo del Alpha 1',
        img: imagesCruzes['alpha.jpg'].default,
        texto: ['Los líderes más poderosos nacen con la Cruz de Angulo Izquierdo del Alpha. La geometría transpersonal es siempre la que más impacta sobre un mayor número de personas. También las personas que tienen su Sol de Personalidad en una quinta línea, porque les confiere un potencial natural para universalizar y seducir a los demás. Debido a que la quinta es una línea que vive en el ámbito de las proyecciones, acaba siendo siempre el objetivo de las proyecciones ajenas, que esperan de ella que sea su Salvador, su General, su Santo, y todos esos temas tan filantrópicos.  ', 'Sin embargo, el aspecto más importante de la quinta línea reside en su sentido práctico. El sentido práctico de la quinta línea es una de las razones fundamentales por las que el ángulo izquierdo logra tener éxito al intentar hacer llegar a otros la información que maneja. Aportando siempre elementos prácticos, es capaz de alcanzar al mayor número de personas. En la Cruz de Angulo Izquierdo del Alpha tenemos la capacidad de ejercer la influencia de un modo práctico - guiando a otros al resolver sus problemas en el plano mental. Más importante todavía, guiando a otros en la presunción de que así serán capaces de sobrevivir.  ', 'La Cruz de Angulo Izquierdo del Alpha es un elemento muy importante para nuestra especie. Recuerda lo que representa un Alpha en el mundo mamífero - el Alpha es el que es capaz de asegurar que todo el mundo tendrá acceso a la comida. Al margen de las recompensas sexuales y jerárquicas que reciban, la realidad es que si no tiene éxito a la hora de asegurar el alimento suficiente para todos, entonces su liderazgo no llegará muy lejos porque no funciona en la práctica.  ', 'Es absolutamente necesario que la influencia práctica del Alpha traiga alivio para los ancestrales miedos de la puerta 44, que proceso nuestros miedo al pasado y a la extinción. Aquí procesamos nuestro miedo a ser eliminados, a no tener suficiente para comer, que son dos de los miedos más profundamente arraigados en los seres humanos. El Alpha es el que es capaz de resolver esos miedos para nosotros - claro que esa es, precisamente, la proyección que todos tienen de él. La proyección de los demás es que el Alpha será capaz de sacarnos de la consternación mental, y de aliviar nuestros miedos a no ser capaces de valernos por nosotros mismos. Eso es lo que hacen las personas que nacen con esta Cruz del Alpha. Otros dirán luego: "Vale, tú eres un líder, y te seguiremos". Para eso es para lo que nacen los Alphas, por lo que cuando maduran suelen alcanzar posiciones de influencia en el ejercicio de ese poder.  ']
    },
    {
        cruz: 'Cruz Angulo Izquierdo del Clarión 1',
        img: imagesCruzes['clarion.jpg'].default,
        texto: ['Al llegar al ángulo izquierdo del hexagrama nos encontramos con la Cruz de Angulo Izquierdo del Clarión, y esta es gente a la que le gusta darte el shock con las novedades que ven venir. Ser un clarión es básicamente una labor pública. Desde un plano transpersonal, su papel consiste en llevar el shock a aquellos que lo han estado esperando. Es muy diferente a la yuxtaposición, que tiene el don de dar el shock por el shock en sí mismo, pero en el momento en que se convierte en algo transpersonal hay también alguna implicación kármica. De modo que aquellos que reciben el shock de las personas de la Cruz de la Clarión son los que lo estaban esperando.  ', 'Esta es la cruz de Ra, y a él le ha tocado aprenderlo a través de los miles de lecturas que ha hecho. Es increíblemente raro encontrar a alguien que no esté dispuesto a recibir un shock de él. Es parte de ello, parte del trato que tenemos juntos. Es un pacto invisible y desconocido, porque es simplemente el modo en que estamos estructurados. Aquí se trata de la experiencia del shock.  ', 'El Clarión viene cargado de sonido, y entre sus funciones está la de hacer todo el ruido que pueda. Es decir, que hay siempre mucho ruido acompañando a esta cruz, hay siempre un cierto bla, bla, bla que la acompaña, además del hecho de ser una cruz mutante porque 3 de sus 4 puertas son individuales. Los mismos que están abiertos a recibir el shock de ellos, serán también los receptores del potencial para la mutación que hay en esta cruz.  ', 'Una de las cosas más fascinantes que han descubierto acerca del funcionamiento del cerebro es el fenómeno del candado y de la llave, en el que hay receptores esperando por algo que encaja en ellos con exactitud. Lo que ocurre en el proceso de la mutación es que, si estás esperando a que te den un shock, eres también portador del potencial para aceptar la mutación de otros. No todo el mundo puede absorber una mutación. Están aquellos que son totalmente resistentes a toda mutación, y están los que tienen una receptividad natural hacia ella. Ese es uno de los acuerdos tácitos que existen siempre en cualquier fenómeno relacionado con las personas de ángulo izquierdo. La gente le dice a la persona de quinta línea: "Me has seducido." A lo que este responde: "Sí, pero eso es lo que querías." Este es el fenómeno del candado y de la llave, que es cómo funcionan los fenómenos del ángulo izquierdo.  ', 'Es muy importante reconocer aquí que cuando tratábamos con la Cruz de la Penetración la gente no estaba necesariamente preparada para encajar el shock. No estaba preparada, y de repente se da cuenta de que está siendo penetrada. Luego tenemos la yuxtaposición que dice: "Oye, me gusta esto de dar el shock a la gente. Vamos a darle un shock a todos." Al llegar finalmente al ángulo izquierdo nos dice: "Solamente daré un shock a aquellos que estén preparados para recibir el shock a mi manera." Por supuesto que no es que tomen conscientemente esa decisión, sino que simplemente acaban dándole el shock a aquellos que estaban preparados para ello.  ']
    },
    {
        cruz: 'Cruz Angulo Izquierdo del Dominio 1',
        img: imagesCruzes['dominio.jpg'].default,
        texto: ['El Sol / Tierra de Personalidad sigue estando en las puertas 63 y 64 respectivamente, de modo que la presión sobre el plano mental de nuestras vidas prosigue en esta cruz. Sin embargo, lo que acompaña esta presión mental que opera en la Personalidad es el Sol de Diseño en la puerta 26 y la Tierra de Diseño en la 45. Esta Cruz de Angulo Izquierdo del Dominio trata sobre la usurpación o conquista del poder. La mente nos ofrece aquí una oportunidad de acceder al poder. Es decir, que puede que seas un semental o que tengas unos pechos maravillosos, pero si realmente quieres tener éxito es mejor que tengas algo en la sesera, porque eso será lo que marque la diferencia entre los demás y tú.   ', 'Vemos que lo primero a lo que nos lleva el programa evolutivo es a equiparnos debidamente para la supervivencia en el plano físico para luego, de repente, introducirnos en el plano racional de la existencia. "Perdonen, pero no es suficiente. Simplemente no es suficiente." Ese es el mensaje que nos trae la evolución del programa. La usurpación es algo que emerge en los seres humanos a partir del nacimiento de nuestra capacidad mental, de la conciencia racional. Dicho de otra forma, si eres consciente de las debilidades de alguien, siempre puedes aprovecharte de ellas. Es verdad que hay gente que diría: "Oye, eso no está bien." Pero hay situaciones en las que la usurpación es el único camino posible. Al fin y al cabo, se trata de un proceso transpersonal que no puede llevar a cabo uno solo. Usualmente, aquellos cuyo poder usurpan han estado esperando durante eones a que regresaran y finalmente se hicieran con el poder. No olvidemos que hablamos de un proceso kármico y transpersonal.  ', 'Lo que esto nos dice en realidad es que desde el momento en que creemos tener un pacto seguro en el seno de la comunidad, que nos da acceso a una sexualidad aceptable y a tener hijos, corremos el riesgo de que alguien más listo que nosotros nos lo arrebate todo. "¿No te gustaría comprar el Puente de Brooklyn? Pues dame tus ahorros." Los timos siempre responden a un cliché, pero uno no deja de escuchar historias como la de la anciana de Omaha que le entregó por teléfono a alguien, a quien no había visto nunca en su vida, la cantidad de 85.000 $ para billetes de lotería. A todas horas hay seres humanos que lo pierden todo, porque caen desprevenidos en las garras de aquellos dispuestos a aprovecharse de su debilidad. Estamos en una realidad darwiniana, en la que la supervivencia solamente está garantizada para los mejor preparados, un mundo donde todo se trata a cara de perro. Si invitas a alguien con este tipo de configuración a ser tu pareja, corres el riesgo de terminar siendo su esclavo. Es así como funcionan las cosas. Con frecuencia lo hacen realmente bien, con lo que el resultado puede representar algún tipo de mejoría. Pero también puede que no sea así.']
    },
    {
        cruz: 'Cruz Angulo Izquierdo del Empeño 1',
        img: imagesCruzes['empeno.jpg'].default,
        texto: ['Estas personas son agentes muy importantes para todos los procesos de cambio. Son los que ponen en marcha todo tipo de cosas nuevas. A partir de la yuxtaposición, donde no se podía necesariamente ejercer siempre el control sobre las cosas existentes, encuentran la oportunidad de desarrollar algo nuevo sobre lo que pueden ejercer y mantener el control. Al llegar al ángulo izquierdo de esta cruz, el impulso se convierte en un proceso cooperativo que es mucho más cercano a su verdadera naturaleza tribal porque es transpersonal. De modo que de esta Cruz del Empeño nacen todo tipo de empresas nuevas, que están controladas para que estos seres puedan entrar a formar parte de ellas. Hay, por ejemplo, un empeño mundial por completar el mapa del genoma humano. ', 'Este es el tipo de cosa para el que esta cruz sirve de instrumento, debido a su capacidad de reunir en torno a ella fuerzas diferentes dentro de un entorno controlado con el propósito de alcanzar alguna meta. Otro ejemplo lo tenemos en el esfuerzo de los americanos por hacer aterrizar un hombre en la Luna. Ese es un ejemplo clásico de este tipo de configuración, en el que es preciso reunir diferentes fuerzas en torno a un propósito común aunque luego deban estar sometidas a un control férreo. No se trata aquí del científico loco en su laboratorio, sino del desarrollo de estructuras comunales en las que hay alguien que controla la dirección y va abriendo nuevos campos.  ']
    },
    {
        cruz: 'Cruz Angulo Izquierdo del Espíritu 2',
        img: imagesCruzes['espiritu.jpg'].default,
        texto: ['La segunda variante de la Cruz de Angulo Izquierdo del Espíritu nace con la oposición del Sol a la que vimos cuando el Sol transitaba la puerta 55. En esta posición el espíritu nos llega a través de la línea 59.5, que es una línea de las más extrañas, ya que es una línea que trata de la seducción. Dotada por naturaleza de ese poder de seducción, la quinta línea representa siempre lo que a uno le gustaría ver en cada puerta. No nos conformamos con ser como el cavernícola de la primera línea - resulta un tanto aburrido, lo que en realidad nos gustaría en acceder a la seducción y al romance, ambos encarnados en la naturaleza de la quinta línea. Sin embargo, todo ese poder de seducción de la quinta línea tiene sus raíces en las proyecciones que es capaz de suscitar en los demás. Una persona con la 59.5 pasa muy malos ratos debido a los gestos e insinuaciones que recibe de quienes pasan a su lado. No hay nada que la pueda salvar de eso, porque encarna una línea diseñada para suscitar proyecciones. Todo el mundo proyectará sobre esa persona que está disponible para la intimidad, tanto si efectivamente es así como si no. Todo el mundo proyectará sobre ella que está intentando seducirlos. Se le mete una mota de polvo en un ojo, y los demás creen que está flirteando con ellos. Ya digo, no importa lo que haga. Si lo niega, se enfadarán con ella y le dirán que es una provocadora y todas esas cosas.  ', 'Imagina lo que le ocurre a la gente que nace con esta cruz de encarnación. Es gente que vive siempre inmersa en el ámbito de las proyecciones. De ahí que cuando se adentra en él, y se vincula afectivamente con alguien, luego acaba descubriendo que todo estaba basado en simples proyecciones. "Yo creía que tú eras...." "Bueno, pues no lo soy." "Yo pensaba que eras alguien..." "No es culpa mía." ', 'Es preciso recordar, al llegar a la línea 59.6, que tenemos por delante una mutación que afectará al funcionamiento de nuestro sistema emocional y particularmente a nuestra forma de concebir y experimentar la intimidad. Esa mutación afectará también a todas las sextas líneas, no importa a qué puerta pertenezcan, ya que así es como funciona la naturaleza de la continuidad genética. Como el arranque de la mutación tendrá lugar en la línea 55.6, el eje de las líneas 59.6 y 55.6 tiene una sensibilidad especial hacia ese fenómeno que se avecina.  ', 'La línea 59.6 se llama Amor de una noche. He hablado muchas veces del verdadero significado de ese nombre. Al fin y al cabo, la naturaleza de la sexta línea la lleva a evolucionar a través de tres etapas marcadamente distintas a lo largo de su vida. Durante los primeros 28 años aproximadamente, mientras completa su primer ciclo de Saturno, vive su vida básicamente con las dinámicas del intento y error - características de una tercera línea - con lo que la experiencia de su sexualidad queda marcada por un proceso de vínculos afectivos que se rompen siempre después de haber sido establecidos. Sin embargo, todas las sextas líneas albergan un profundo optimismo en lo más hondo de su ser, que se nutre de su propia necesidad de poder confiar y mantener la esperanza. Es decir, que para las personas de sexta línea la sexualidad puede ser una experiencia muy caótica durante esos primeros treinta años de vida, y sus experiencias de amor de una noche acaban siendo tan desastrosas que desarrollan un profundo pesimismo al respecto.  ', 'Para el momento en que se completa el retorno de Saturno, la sexta línea se refugia en el tejado de la casa y se distancia de la intimidad. Mientras permanece en su refugio, la sexta línea no deja de buscar a su alma gemela, y de ponderar acerca de su posible existencia y de si hay una manera de encontrarla en este mundo. Ya he contado muchas veces la historia de cómo la gente que se refugia en el tejado, al observar a quienes están en una relación saludable, tiende a querer a la persona de esa relación para sí misma. Es decir, que son personas que están siempre atentas a lo que está pasando ahí fuera. Cuando su vida llega al retorno de Quirón, a los 50 o 51 años, tienen que volver a descender del refugio del tejado, e implicarse de nuevo en la refriega del mundo y en la intimidad.  ', 'Reflexiona acerca de las consecuencias que esa mutación del Plexo Solar traerá consigo. Nuestra sexualidad, tal y como la conocemos hoy, se acerca paulatinamente a su fin. No es que vaya a desaparecer de un momento al otro, sino que será un proceso que se extenderá durante cientos de años. Sin embargo, si queremos comprender la naturaleza de ese tipo de sexualidad, es preciso reconocer que solamente hay un alma gemela con la que te puedes encontrar, y que reside en tu propio interior. Los humanos estamos programados para funcionar a través de dos cristales, que operan cada uno de un modo muy distinto al otro. Solamente tenemos acceso consciente y familiaridad con uno de ellos, pero nos guía y vivimos inmersos en el dominio del otro. En el momento en que recuperas la armonía con tu naturaleza original - con tu propio diseño, en el momento en que permites que esos dos aspectos de ti representan la totalidad que es mayor que la suma de sus partes, ese es también el momento en que encuentras a tu alma gemela, porque ahí es dónde descubres el verdadero amor a ti mismo. Sin amor a uno mismo, no puede haber amor verdadero. Es todo una simple farsa.  ', 'El amor más profundo al que podemos acceder es el que está presente en la sexta línea, y en la sabiduría que la sexta línea es finalmente capaz de comprender. No se trata de encontrar nada de eso en el mundo exterior, sino en el interior de uno mismo. Una vez has descubierto eso en tu propio interior, es muy fácil reconocer quién está preparado para ti en el mundo exterior - esa es la transformación del espíritu que aquí se hace posible. La puerta 55 está en la raíz de nuestra necesidad emocional y humana de amor, de un amor con una cualidad romántica y profunda. Se trata aquí de la transformación de la relación que existe entre el amor y la sexualidad. Como ya he dicho, soy incapaz de predecir a dónde nos conduce ese proceso, pero no me cabe ninguna duda de que son cosas que están cambiando y que cambiarán todavía más. A medida que el sistema emocional se va haciendo más y más consciente, nuestra manera de manejarnos en el ámbito de las emociones irá cambiando. Recuerda que el Plexo Solar regula también nuestra manera de alimentarnos, por lo que el impacto de esa mutación se dejará sentir con máxima influencia en el ámbito de nuestra sexualidad y de todo lo que nos procura placer.  ', 'El paso siguiente, que nos lleva de la puerta 59 a la 40, es realmente encantador. La puerta 59 encarna nuestras estrategias sexuales para la intimidad y la reproducción, y la puerta 40 es la puerta de la masturbación. ¿No te parece divertido? Oh, en el berenjenal en el que me he metido. ¿No querías encontrar a tu alma gemela? Pues eso, eres tú mismo. No son los demás.  ']
    },
    {
        cruz: 'Cruz Angulo Izquierdo del Espíritu 1',
        img: imagesCruzes['espiritu.jpg'].default,
        texto: ['Al llegar a las líneas transpersonales de la puerta 55 entramos en la Cruz de Angulo Izquierdo del Espíritu. En esencia, su mensaje no puede ser más claro ni más básico, y dice así: "Déjame que te haga el amor, eso me hará sentir mejor. ¿Cómo? ¿Qué es demasiado crudo? ! qué le vamos a hacer...! Es bueno para mi espíritu." Eso es lo que es, eso es lo que dice, y eso es lo que realmente quiere. No sólo eso, lo que realmente le gustaría es acompañarlo todo de una buena comida. "Vayamos a un buen restaurante y después hagamos el amor." Si alguien viene al mundo con esta cruz, la carencia de acceso al amor y a una buena comida puede ser devastadora para su vida. La importancia de estas dos cosas es crucial en la vida de estos seres.  ', 'La comida es uno de los temas dominantes, ya que nos encontramos todavía al comienzo del Cuarto de la Iniciación. Estamos tratando todavía con temas tan básicos como el sexo, la comida, y las necesidades que debemos satisfacer para poder sobrevivir y seguir adelante con nuestro proceso. La realidad es que contemplando el Sol de Personalidad en la puerta 55 tenemos la Tierra de Personalidad en la puerta 59, con lo que es obvio que raíces y el asentamiento de la personalidad provienen de su estrategia sexual. Si hablaran, esas raíces de la personalidad dirían: "Mi espíritu se nutre de mi estrategia sexual."  ', 'Con la naturaleza transpersonal de la quinta línea, y el contrapeso de la Tierra en la 59.5, tenemos aquí la línea de la seducción que dice: "Déjate seducir por mí, porque si triunfo en seducirte mi espíritu se sentirá maravillosamente bien. Es bueno para mi espíritu, porque a mi espíritu le encantan los juegos de seducción." La existencia de esta cruz de encarnación en el diseño de alguien revela un tema individual muy dinámico en la fluctuación de los estados de ánimo que puede descalabrarse emocionalmente con mucha facilidad. Dicho de otra forma, si no encuentran el acceso que necesitan a esas cosas es gente que acaba desarrollando problemas en su relación con la sexualidad y la comida. Aquí podrás encontrar gente con problemas de anorexia y bulimia, y gente que vive obsesionada por alguien, por ejemplo, alguien obsesionado con poseer o hacer el amor a alguien a quien no puede tener acceso. No se trata del amor no solicitado que los individuos son capaces de profesar hacia alguien, "Oh, es maravilloso amar lo que no puedo tener. Déjame escribir un poema." En su lugar nos toca escuchar los terribles lamentos del No-ser de estos seres humanos. "Es terrible amar lo que no se puede tener. Lo que voy a hacer es echarme a la calle e ir a por ello."  ', 'La mutación no llega nunca hasta que no alcanzamos la sexta línea del hexagrama. Es muy interesante fijarse en el chiste y en la paradoja constante que establece la propia evolución - es algo engranado en su programación. En el mismo momento en que tiene lugar una transición, viene automáticamente acompañada de alguna imperfección. Ese defecto engranado en la evolución es como el agujero de alcantarilla en medio de la calle. La caída de algunas personas sirve para el aprendizaje de las demás. Pero eso no significa que no vaya a seguir existiendo algún punto débil o defectuoso en cada paso. Si contemplamos el eje 55.6/59.6 de esta cruz, donde tendrá lugar la mutación de la cual venimos hablando, con un poco más de detenimiento, podemos ver que el Sol de Diseño está posicionado en la tercera línea de la puerta 9, que se llama la gota que colma el vaso. Esta es una línea que trata del detalle pasado por alto que puede predeterminar el fracaso de cualquier experimento. Las normas del juego son honradas, y nadie parte con ventaja. No creas que a partir de ahí todo será más fácil. Aquí llega el siguiente paso de la evolución, y enseguida estamos todos convencidos de que todo es fantástico. Perdona, pero déjame que te diga que, aunque creas que todo será fantástico, aunque creas que esto es mejor que lo que tenías antes, sigues teniendo que vértelas con esto, con aquello y con lo de más allá. Siempre hay algo..." No sabemos de qué adolecerá esta nueva generación de seres humanos que vendrá al mundo, pero sabemos que siempre hay algún detalle que pasamos por alto. Siempre hay detalles importantes que permanecen velados, y lo que es peor, esos detalles bien pueden ser la paja que rompe la espalda del camello.  ', 'El aspecto más fascinante acerca de la mutación emocional que está por venir es que, cuando la especie haya mutado y esté provista de una nueva sede para la consciencia, dará nacimiento a una nueva especie. Esto significa que todos los demás miembros de la vieja especie estarán limitados y no tendrán acceso a esta nueva forma de consciencia. Es previsible que el conflicto y la convulsión social resultante de esto será enorme. Hay en esto una gota que amenaza con colmar el vaso, una paja que amenaza con romper la espalda del camello, hay algo detrás del funcionamiento de todo esto que es mucho más profundo de lo que alcanzamos a comprender. No hay ninguna manera de que podamos imaginar el modo en que eso puede llegar a desarrollarse. Después de todo, es algo que nacerá de la raíz misma del fénix durmiente. No sabemos qué es lo que emergerá a partir de eso.  ']
    },
    {
        cruz: 'Cruz Angulo Izquierdo del Individualismo 2',
        img: imagesCruzes['individualismo.jpg'].default,
        texto: ['Esto nos lleva a la segunda variación de la Cruz de Angulo Izquierdo del Individualismo. El del eje de las puertas 38 y 39 en la configuración de esta cruz nos señala que sus portadores son seres cuya simple presencia hace que la gente se sienta provocada. Esto debe ser tenido en cuenta cuando trates con la naturaleza de esas dos puertas. Es simplemente su modo de ser, y no se puede hacer nada por evitarlo. Los nativos de la Cruz de Angulo Izquierdo del Individualismo no están tensos en sí mismos, sino que   crean tensiones en los demás. En eso es en lo que son realmente buenos - en provocar tensión en otros. Luego se extrañan y se preguntan por qué todo el mundo se enoja con ellos, y proclaman su inocencia absoluta, que es el aspecto más extraordinario de   …estas personas. ', 'Tenía un amigo nacido con esta cruz de encarnación que nunca pudo entender por qué las mujeres de su vida explotaban repentinamente e intentaban matarle. No era capaz de comprenderlo, y decía a quien quisiera oírlo: "Pero si yo soy buen tío". La realidad es que los nacidos con esta Cruz de Angulo Izquierdo del Individualismo viven su individualidad del modo más provocador posible. Puedes reconocer la raíz de eso en la Cruz Yuxtapuesta de la Oposición que acabamos de dejar atrás. Tomar una postura fija sin razón ninguna aparente, sólo para ver lo que ocurre. No es de extrañar que la mayoría se enfurezca ante esa actitud. Te meten en el cuerpo todo tipo de tensiones, y no sabes si hablan en serio o no.  ', 'Son personas capaces de decir las cosas más audaces y desconcertantes. Encienden el fuego en tu caldera interior, y te ponen a bla, bla, blabear sin apenas darte cuenta. Mientras tanto, ellas se relajan y se acomodan, absorbiendo todo lo que ocurre, y pensando: "Ya te tengo. Ahora la tensión es tuya - no es mía". Es tan divertido contemplar el modo en que funciona el mundo. De un lado tenemos a la gente que va por ahí con los hombros encogidos por el dolor, y de otro tenemos a la gente que le provoca dolor de hombros a los otros. Eso está realmente bien - esa es la diferencia entre el ángulo derecho y el ángulo izquierdo. El ángulo derecho tiene su propio dolor, mientras que el ángulo izquierdo se lo pasa a todos los demás. "Aquí está, tómalo".  ']
    },
    {
        cruz: 'Cruz Angulo Izquierdo del Oscurecimiento 1',
        img: imagesCruzes['oscurecimiento.jpg'].default,
        texto: ['La Cruz de Angulo Izquierdo del Oscurecimiento es una cruz un tanto extraña. ¿Has leído alguna vez algo de Alice Bailey? Ciertamente parecía haber nacido con esta cruz, ya que sus escritos son más bien opacos. En la Cruz de Angulo Izquierdo del Oscurecimiento los detalles son realmente borrosos, y son utilizados para confundir las cosas. Se dan detalles, pero realmente no se dice nada. Mi comentario sobre Alice Bailey se refiere a los libros tibetanos, que fueron escritos en lenguaje del siglo XIX, y que son típicos del oscurantismo de esta cruz. Se decía algo y todo el mundo intentaba seguir esas instrucciones: "Solamente los estudiantes experimentados que hayan alcanzado el séptimo nivel de bla, bla, bla, tendrán noción de la importancia de ese detalle que mencionamos antes". ¿A qué detalle se refería? Si volvías atrás a repasar todo lo que se había dicho, acababas confundido: "¿De qué habla? No veo nada claro a qué se está refiriendo". Pero así es como funciona esta Cruz del Oscurecimiento.  ', ' Como la lógica está desesperada por los recursos energéticos, hay gente que hará trampas para lograr acceder a ellos. A través de detalles y estadísticas, estas personas intentan encubrir ciertos aspectos de la realidad con el fin de impedir ver claramente el problema central, creyendo que quizás de ese modo puedan todavía tener acceso a la energía que necesitan. Alterando un poco las actas, cambiando levemente los números, intentan conseguir lo que quieren oscureciéndolo un poco la realidad. Al fin y al cabo, como ángulo izquierdo lo hacen siempre en beneficio de la otra persona.  ', 'Otro factor de importancia en la naturaleza del oscurantismo es que esta gente puede identificarse con detalles de importancia nimia - al menos eso es lo que parece. Los demás pueden tener una impresión verdaderamente extraña de estas personas. Por ejemplo, alguien que necesita saber cuántos Pérez hay en la guía telefónica. Te preguntarás si es esencial saber eso. No es más que una pequeña muestra del oscurantismo en los detalles en los que pueden caer las personas de esta cruz. Uno podría burlarse de esas cosas, pero al mismo tiempo los detalles oscuros pueden conducirnos a descubrimientos extraordinarios. No lo olvidemos. Deberíamos estar agradecidos de que, en alguna parte, alguien está inmerso en el trabajo en algún pequeño detalle oscuro que un día puede ser de valor para todo el colectivo humano. No obstante, puede que te resulte un poco excesivo tenerlos cada noche sentados a tu mesa a la hora de cenar hablándote de su oscurantismo.  ', 'Si entras en relación con los demás siendo tú mismo, todos los aspectos aparentemente difíciles de estas cruces dejarán de molestarte - no importa de qué aspecto estemos tratando - y te llevarán a descubrir la mitología que hay detrás de ellos sin tener que sufrir el dolor de ser su portador. Después de todo, la parte más profunda de esta información es que te da acceso a reconocer los arquetipos que hay en cada una de estas cruces. Las cruces de encarnación son los arquetipos de todos los dioses que hemos conocido, de todas las fuerzas ocultas y demonios, de todos los espíritus y duendes. Todos estamos inmersos en la experiencia de la mitología que hay en estas cruces de encarnación. Hay una historia mitológica detrás de cada una de ellas, y dioses y diosas que están ahí para jugar ese papel. Como todos somos portadores de eso en nuestro propio fuero interno, puedes comenzar a reconocer tu propia cruz y también la de aquellos que tienes a tu alrededor; obsérvalo y verás. Observa el desvalimiento con el que todos tenemos que participar en ese juego cual, si fuéramos marionetas, y reconoce al mismo tiempo la belleza que hay detrás de todo eso; reconoce la contribución que cada uno de nosotros hace desde el más profundo desvalimiento e indefensión. ']
    },
    {
        cruz: 'Cruz Angulo Izquierdo del Plano Mundano 2',
        img: imagesCruzes['planomundano.jpg'].default,
        texto: ['Al llegar al ángulo izquierdo de este hexagrama, nos adentramos en el aspecto más denso del mundo. Esta es la Cruz de Angulo Izquierdo del Plano Mundano. El ángulo izquierdo representa siempre al agente publicitario en la estructura del hexagrama de cada cruz. Esa es la función del ángulo izquierdo. El Perfil 5/1 va por ahí presumiblemente resolviendo los problemas que la sociedad proyecta, mientras que la sexta línea se limita a observarlo todo y a confirmar si los problemas se han resuelto o no, pero básicamente, las dos se dedican a hacer llegar a los demás ese campo de información. En ese mismo contexto, la Cruz de Angulo Izquierdo del Plano Mundano tiene una función muy importante, porque hace que la gente se adentre profundamente en el plano material de la existencia. A través de ella accedemos al reconocimiento de que el plano material es el que más nos beneficia, ya que nosotros mismos estamos hechos de materia.  ', 'Recuerdo cuando asistía a la universidad allá por los años sesenta, y había un enorme movimiento socialista de tendencias izquierdistas que se auto-proclamaba anti-materialista. Personalmente, me asustaba el término «anti-materialismo», porque no podía dejar de preguntarme a mí mismo: "¿Y qué vamos a hacer sin todas esas cosas? ¿Qué significa «anti-materialismo»?" Una de las cosas más importantes que debemos comprender acerca de ser humanos es que nos encarnamos para trabajar. Cuando tuve mi experiencia con la «Voz», fue lo primero que me dijo. Me dio un susto de mil demonios. La «Voz» me dijo: "¿Estás listo para trabajar?" Se trata de trabajo. Estamos aquí para trabajar, para producir y ser productivos mientras estamos aquí. Estamos aquí para todas esas cosas, para estar permanentemente ocupados haciendo todo tipo de cosas. Ese es el diseño del ser humano; estar ocupado! Los tres canales que se forman a partir de oposiciones en el zodiaco nos dan una idea muy aproximada de esa realidad, ya que son un claro indicativo de que la mayoría de seres humanos tienen un modo más bien raro de pensar (canal 43/23), están permanentemente ocupados (canal 20/34) y mucho mejor para ellos si pertenecen a algo (canal 40/37). O sea, que estar en el mundo es lo único que realmente funciona en la vida. Simplemente funciona.  ', 'Al enseñar o presentar el Diseño Humano a otros, puedo enfocarlo de muchas maneras distintas - como así lo he venido haciendo a lo largo de todos estos años. Puedo hacer una presentación desde una perspectiva de la sexualidad humana, desde una perspectiva médica, o simplemente desde un nivel mundano, por mencionar algunas. Lo único que no he hecho hasta ahora profesionalmente es una presentación del Diseño Humano desde la perspectiva de los negocios, porque al final, verás, volvemos todo el tiempo a lo mismo. Si vives de acuerdo a tu tipo y tu estrategia, entonces obtendrás todos los recursos materiales que necesitas. Decir esto no equivale a una promesa de que vayas a hacerte rico. No es cuestión de que tengas más de lo que necesitas. La realidad es que si vives en concordancia con tu propia naturaleza, entonces siempre tendrás acceso a todo lo que necesitas.  ', 'Algunas personas necesitan verdaderamente tener acceso a más de lo que necesitan para sí mismas, y tendrán acceso a ello cuando sea necesario. Otras necesitan tener algo menos de lo estrictamente necesario, y será eso lo que obtengan. Pero nadie se quejará de su suerte, porque todos formamos parte del mismo mundo. Cuando yo me detengo a contemplar la realidad del mundo, me siento inmensamente feliz de no tener un espíritu humanitario, porque no dejaría de llorar nunca más. Me parece tan absurdo que exista el hambre y el dolor. Es completamente absurdo, de verdad. Es absurdo que haya gente en este planeta - millones de personas - que vive con el promedio de $1 por día, o cualquiera que sea el mísero promedio. La realidad de los hechos nos demuestra que tenemos una conexión natural con el mundo material, porque formamos parte de él. Creemos que existimos al margen de él, pero no es así - somos parte intrínseca de ese plano.  ', 'En el momento que sepamos habitarlo en concordancia y respeto a nuestra naturaleza individual, las necesidades materiales estarán cubiertas. Los hechos nos enseñan claramente que el mayor problema de la humanidad reside en el manejo de esa realidad material. No hay más que tener en cuenta que el 75 % de las mujeres del planeta invierten medio día solamente buscando agua y madera para el sustento de sus familias. La cuestión no se resuelve quitándoselo a los ricos y dándoselo a los pobres, sino que se resuelve instruyendo a la gente para que viva en concordancia con la propia naturaleza. No es una cuestión de elegir entre el socialismo y otras opciones políticas, de elegir entre esto o aquello, sino que se trata de reconocer que hay realmente suficiente para todos, no importa cuál sea el diseño de cada uno, si nos atrevemos a vivir de acuerdo a lo que somos.  ', 'Si quieres llegar a conocer tu propia vida material, entonces vive tu diseño. Maneja el mundo material de acuerdo a como es natural para ti, y observa luego las cosas que atraes a tu vida. Es un proceso muy distinto al que tu ficticia autoridad mental desesperadamente intenta imponer, diciéndote siempre lo que tienes que hacer y cómo llegar a conseguirlo. Luego es cuando te sientes realmente atrapado en el maya de este plano mundano y material del mundo, y eso sí que duele. Pero verás, las personas que nacen con esta cruz están preparadas para ese dolor. No sufren en vano, en el sentido de que están aquí para guiarnos a todos a través de ese plano de nuestra existencia. Cuando sufren de verdad es cuando intentan escapar de ese plano pretendiendo haberlo trascendido. Entonces sí que sufren. Ahí es cuando quieren dejar atrás este dominio terrenal y abandonar el cuerpo de una vez por todas. Entonces quieren saber qué es lo que hay en el otro lado, pero sufren, porque han nacido para vivir en la densidad de este mundo.  ', 'Eso es lo que somos, al fin y al cabo. Me encantan esas fotografías de la Tierra vista desde el espacio, porque en ellas nosotros hemos dejado de existir. En ellas nos integramos completamente en un aspecto más de la materia que conforma la Tierra, que es lo que somos de verdad. Somos la Tierra, y ella es nosotros. Nuestra existencia como algo separado de ella - en la que esto es esto y aquello es aquello - es una pura ilusión. Estamos en el mundo, y de esa realidad emana una energía natural que se manifiesta como nuestra geometría. Es algo que nos ocurre a todos. ¿Has visto alguna vez cómo se alimenta una ballena? Nada a través de todo un bancal de diminutos pececillos, abriendo su gigantesca boca, y simplemente lo cruza. No hace nada, sino que simplemente atraviesa nadando el bancal. Los pececillos entran en su boca sin que tenga que hacer el mínimo esfuerzo. Así es mi vida - eso es también lo que me ocurre a mí. Abro la boca, y entran simplemente las cosas que tienen que entrar. Yo tampoco hago nada. Solamente soy yo mismo.  ', 'La gracia en el manejo de la materia es algo que está al alcance de cualquiera, pero aunque a mí me resulte muy fácil decirlo, se trata de un proceso de siete años. Sin embargo, si vives de verdad en función de tu naturaleza individual, y experimentas a diario con tu diseño - particularmente en el manejo de la materia en el plano mundano de la vida - entonces comenzarás a apreciar la diferencia. Por supuesto que tu mente pondrá todo tipo de pegas. Al fin y al cabo, tu mente tiene su propia idea acerca de quién eres, de lo que vales, y acerca de lo que mereces y lo que no. Pero luego, una vez más, ¿qué es lo que sabe tu mente? Es mejor que lo descubras tú mismo a través de tus respuestas, y a través de tu propia forma de manejarte con el mundo. La única manera de descubrirlo es siendo tú mismo, y luego es cuando puedes alcanzar a ver lo que hay para ti en el mundo. Es algo que simplemente funciona.  ' ]
    },
    {
        cruz: 'Cruz Yuxtapuesta de las Dudas 1',
        img: imagesCruzes['dudas.jpg'].default,
        texto: ['Como en las demás cruces yuxtapuestas, las personas nacidas con la Cruz Yuxtapuesta de las Dudas son muy fijas. ¿Recuerdas las grandes escenas de comedia en las que hay alguien que se pasa la vida lloriqueando? Esta cruz podría llamarse la Cruz del Lloriqueo. De la boca de estas personas siempre escucharás salir cosas del tipo: "No, no va a funcionar. No puede salir bien. No creo que sea capaz de hacerlo. Ellos no saben hacerlo. No creo que esto pueda salir bien." Sin embargo, no se les puede achacar esto como si fuera un defecto e intentar impedir que lo sigan haciendo. Este es el tipo de persona que, al entrar con ella en un aula para tomarle examen de algo, dice: "Oh, seguro que me suspenden. Qué mal, no estoy preparada. Todo saldrá mal." Cuando le preguntas a qué se debía toda esa inquietud, habiendo sacado una nota sobresaliente, su respuesta deja traslucir la realidad en la que vive. "No sé cómo lo hice. La verdad es que no me había preparado bien. Ahora estoy preocupada por el siguiente examen que me espera."  ', 'Esta es gente que siempre tiene sus dudas, y como hemos visto puede ser un proceso incluso divertido de observar. También albergan dudas acerca de todos los demás, y dudas acerca de su propia vida. Como sus dudas alcanzan también la existencia de Dios, podemos encontrar en esta cruz yuxtapuesta las raíces del ateísmo. La capacidad de dudar de esta puerta es muy profunda. "No si existe algo que responda a lo que llamamos Dios. Lo dudo." ']
    },
    {
        cruz: 'Cruz Yuxtapuesta de los Estados de Animo 1',
        img: imagesCruzes['estadosdeanimo.jpg'].default,
        texto: ['Siempre que llegamos a la cruz yuxtapuesta nos encontramos con la encarnación de un destino fijo y fatal por ineludible, que no  por mejor o peor que cualquier otro. Aquí tiene lugar la transición del eje Sol / Tierra de la Personalidad a la cuarta línea de la puerta 55, y toda la necesidad de estar permanentemente activo del eje 20/34 deja de condicionar la naturaleza de esta cruz. En su lugar, el Sol de Diseño está en la puerta 9, proveyendo la energía necesaria para el trabajo detallado, y la Tierra de Diseño está en la puerta 16, que gira enteramente en torno a las habilidades del cuerpo y al potencial de ser identificado a través de ellas. Esta es gente que sufre de problemas psicológicos muy severos. No olvidemos que la puerta 55 puede ocasionar muchas molestias y resultar incómoda para cualquiera que sea su portador, y la realidad demuestra que la mayoría de los seres humanos no entienden la naturaleza de la melancolía ni sabe cómo manejarla. Peor todavía, no se conocen a sí mismos ni entienden las mecánicas de su Tipo, de modo que están abocados a vivir en confrontación constante con una terrible batalla interior. En esta cruz nos encontramos siempre a personas que son extremadamente fijas dentro de la fluctuación de sus estados de ánimo. Una de las cosas que puede sucederle a cualquiera que tenga esta cruz de encarnación es quedarse fijamente estancado en la depresión, no sabiendo dejar pasar libremente la fluctuación de los estados de ánimo, sino identificándose (esta es una cruz donde la habilidad para identificarse juega un papel muy importante) tan profundamente con su estado de ánimo que nunca más vuelva a salir de él. Ha desaparecido por completo la frenética búsqueda del amor individual, y lo que queda es una profunda necesidad de saber, de adquirir profundidad, y la necesidad de averiguar la verdad que hay detrás de todo. Claro que, ¿cuántas veces hay que intentarlo para averiguar la verdad? ', 'Cuando te encuentres con alguien que sea portador de esta Cruz Yuxtapuesta de los Estados de Animo lo sabrás instantáneamente, porque tendrá toda la apariencia de estar cargando con una cruz muy pesada sobre sus hombros. La naturaleza afable de la cuarta línea hace que estas personas tengan siempre a alguien en su vida que intenta por todos los medios aliviarles de su pesada carga, pero no lo consiguen. Si estas personas aprendieran lo justo acerca de la naturaleza de la individualidad, y de la relación tan estrecha que tiene con la melancolía, serían fuerzas humanas extraordinariamente creativas, con mucho talento natural ya que la puerta 16 forma parte del Canal de Talento. Pero en el mundo real, donde la mayoría de la gente vive atrapada en las densas redes del No-ser, esta es gente cuyo semblante revela la profunda tristeza que llevan dentro y la pesada carga que tienen que acarrear.  ']
    },
    {
        cruz: 'Cruz Yuxtapuesta de los Extremos 1',
        img: imagesCruzes['extremos.jpg'].default,
        texto: ['Con una cruz de ángulo derecho que tiene como único foco la necesidad de atraer a todo el mundo hacia su flujo, la cruz yuxtapuesta de este hexagrama tiene una naturaleza que no le permite nunca dejarse fluir. Esta es la Cruz Yuxtapuesta de los Extremos, que ya no hunde sus raíces inconscientes en el eje de las puertas 25 y 46 - las otras dos puertas que completaban la cruz del amor. En su lugar están ahora las puertas 17 y 18, que traen consigo la insatisfacción y la necesidad de corregir.  ', 'Los que nacen con la Cruz Yuxtapuesta de los Extremos son siempre personas que mantienen ritmos y patrones muy fijos en su vida. Esos ritmos y patrones pueden hallarse literalmente en cualquier punto del espectro de la especie humana. Pueden, de hecho, llegar a tener una apariencia de lo más extraña, tanto por el modo en que estos seres hacen uso de su energía y como por su modo de proceder al hacer las cosas. Sin embargo, también hay que decir que son ellos los que nos abren el acceso a explorar todas las posibilidades del ritmo de la humanidad.  ']
    },
    {
        cruz: 'Cruz Yuxtapuesta del Chofer 1',
        img: imagesCruzes['chofer.jpg'].default,
        texto: ['Algunas de las personas que nos encontramos en la vida son como indicadores del camino. ¿Has tenido alguna vez la experiencia en tu propia vida de relacionarte con un completo desconocido que cambió tu vida para siempre? Al llegar a esta Cruz Yuxtapuesta del Chofer nos encontramos con ese tipo de seres humanos. Al desaparecer el eje de las puertas 13 y 7, desaparece también el espectro completo de la Esfinge, que ahora es reemplazado por el eje de las puertas 49 y 4. Recuerda lo que decíamos acerca de la naturaleza de los principios emocionales de la puerta 49 en el primer cuarto - era aquí donde nos encontramos por primera vez con la necesidad de matar y sacrificar otras formas de vida en aras de la propia supervivencia. Llegados al segundo cuarto de las encarnaciones, la puerta 49 ha pasado de estar activada por el Sol de Personalidad a estarlo por la posición del Sol de Diseño. Ya no es el tema central aquí, aunque ciertamente sigue estando presente por debajo de la superficie.  ', 'Uno de los rasgos más llamativos de los nacidos con esta cruz es que están absoluta y totalmente enfocados en seguir su propia dirección, intentando arrastrar consigo al mayor número de personas posible. Son personas que saben bien a donde van, y eso es lo que viven en sus vidas. Saber a dónde están yendo en cada momento es lo que más les acerca a la verdad que necesitan encontrar en su propio proceso.  ', 'Esa es la diferencia básica entre el ángulo derecho y la yuxtaposición de este hexagrama. Verás que hay todo tipo de cosas que pueden dar expresión a la belleza. La belleza necesaria de la manifestación a través del ángulo derecho consiste en asegurarse de que disponemos de un entorno limpio para el desarrollo de nuestras vidas, pero llegados a la yuxtaposición se hace necesario encontrar algo más que un entorno limpio. La dirección apunta hacia algo que está más allá de la mera limpieza, conduce hacia la verdad, o, lo que es lo mismo, hacia la verdad como dirección en la vida. Este es el tipo de gente a la que es preferible no decirle nada a decirle cualquier cosa de la que no puedan tener una certeza absoluta. Es gente que realmente necesita conocer la verdad que hay en el fondo de las cosas. No es fácil ocultarle nada, porque es gente que está constantemente intentando penetrar en ti para sacar a la superficie todo lo que llevas dentro.  ']
    }

]


const definicionCompleto = [{
    definicion: 'Ninguna',
    modo: 'Ausencia',
    porcentaje: '1,5%',
    areas: 'Ninguna',
    elementosPrincipal: 'Total (Reflector)',
    elementosSecundario: 'Total (Reflector)',
    tiempo: '28 días',
    influencia: 'Muy alta',
    grafico: sindefinicion
},
{
    definicion: 'Simple',
    modo: 'Continuo',
    porcentaje: '41%',
    areas: 'Una',
    elementosPrincipal: 'Conexión total',
    elementosSecundario: 'Autonomía en su definición',
    tiempo: 'Rápido',
    influencia: 'Nula',
    grafico: simpledefinicion
},
{
    definicion: 'Doble',
    modo: 'Discontinuo',
    porcentaje: '46%',
    areas: 'Dos áreas definidas no conectadas entre si',
    elementosPrincipal: 'Puertas puente que conectan las dos definiciones',
    elementosSecundario: 'Centros sin definir',
    tiempo: 'Lento',
    influencia: 'Media/Alta',
    grafico: dobledefinicion
},
{
    definicion: 'Triple',
    modo: 'Discontinuo',
    porcentaje: '11%',
    areas: 'Tres áreas definidas no conectadas entre si',
    elementosPrincipal: 'Centros sin definir',
    elementosSecundario: 'Puertas o canales puente',
    tiempo: 'Lento',
    influencia: 'Alta',
    grafico: tripledefinicion
}, 
{
    definicion: 'Quadruple',
    modo: 'Discontinuo',
    porcentaje: '0.5%',
    areas: 'Cuatro áreas definidas no conectadas entre si',
    elementosPrincipal: 'Puertas puente que conectan las definiciones',
    elementosSecundario: 'Centros sin definir',
    tiempo: 'Muy lento',
    influencia: 'Muy alta',
    grafico: quadrupledefinicion
}];

const perfilesCompleto = [{
    name: "1/3 - INVESTIGADOR/MÁRTIR",
    img: investigadormartir,
   desc: [ ["Un investigador que se tiene que encontrar a sí mismo, que debe encontrar sus propias respuestas, ya que no le sirven las respuestas ajenas"],
   
   ["Un investigador sigue el método de probar y fallar, intento y error, es el método de la ciencia"],
   
   ["Un 1/3 - tiene como destino investigar los cimientos y las respuestas, para qué y porqué venimos a este mundo"],
   
   ["Buscará en sí mismo sus propias respuestas y fallará muchas veces hasta que da con su verdad."],
   
   ["Así que, en este afán de investigación de probar y fallar, el 1/3, el científico, antes de encontrar la respuesta definitiva, la forma en que las cosas han de funcionar, llega a ser un experto en aquello que no funciona"],
   
   ["Esto le da una apariencia destructiva, pues destruye aquello que no le sirve, lo deja de lado y continúa su búsqueda de aquello que sí funciona."],
   
   ["Una mente científica, en este proceso de encontrar los errores en la naturaleza de las cosas, adquiere un cariz escéptico, que le hace desconfiado, que va a la búsqueda de sus propios cimientos"],
   
   ["Siempre tanteando, buscando algo nuevo que funcione. Y mientras no lo encuentra va erradicando lo que no sirve"],
   
   ["Para ellos la mejor ayuda es darles las herramientas para que investiguen por sí mismos, ya que no confían demasiado en nadie."],
   
   [" Podríamos decir que es una cualidad pesimista, ya que está observando cuanto no va bien en los procesos de las cosas. En su búsqueda de lo positivo, ve lo negativo, y se va haciendo experto en ello, a fin de ir descartando posibilidades erróneas"],
   
   [" Cuando a esta persona 1/3 - no se le impone, cuando le otorgas la autoridad, se siente sanado y entra en la confianza."],
   
   [" Por tanto, es una personalidad autoritaria ya que no le sirven las experiencias ajenas, los experimentos ajenos, necesita ser el jefe, encontrar por sí mismo para que sus bases sean firmes. Ha de ser quien dicte las normas, quien lleve las riendas de la investigación"],
   
   ["Al llegar a apreciar y conocer muy bien lo que no funciona en las cosas, se convierte en una persona muy empática que puede ayudar a otros a encontrar su camino, enseguida ve lo que no funciona en las vidas de los demás y puede aportar su experiencia para hacerles encontrar soluciones. También, este matiz de empatía les hace ser personas que escuchan y ayudan, terapeutas"],
   
   [" La línea 1ª de investigador también les hace ser personas que están investigando al otro"],
   
   [" La línea 3 - también está operando en este perfil. La línea tres se llama el anarquista. Dice al colectivo, que se supone que tiene que dirigir, cuáles son las cosas a extirpar, aquello que no funciona."],
   
   ["En sus relaciones tienen la tendencia a replantear constantemente si la relación es válida, cuáles son los aspectos de su relación que no funcionan, es una desconfianza innata, están siempre revisando en una búsqueda de que todo esté bien. Y su carácter desconfiado e investigador no le deja descansar en sus conclusiones anteriores, siempre viendo nuevos aspectos de la relación que pudieran resultar mal."],
   
   ["El investigador, cuando no logra descubrir, cuando lleva una sucesión de pruebas y errores sin hallar respuesta, se sumerge en un estado de desconfianza, entonces el 1/3 - se culpabiliza, está viviendo su 'no ser' (cuando está investigando, replanteando y cree no lograr soluciones). Son personas que se culpabilizan a sí mismas"],
   
   ["Para estas personas con la 3ª línea es imprescindible disponer de su propio espacio. Tienen que retirarse a su espacio a fin de realizar un proceso de recapitulación que por sí mismos les convenza de que la relación funciona, de que no quedan cabos sueltos. Y como a esto solo pueden llegar por sí mismos, necesitan volver a su laboratorio a hacer sus personales comprobaciones y sus interminables pruebas y replanteos de todos los aspectos de sus relaciones. En este espacio vital, el 1/3 - procesa los errores de sus relaciones, ve cuanto no funciona con gran perspicacia y es capaz desde ahí, de establecer un nuevo vínculo con esa persona, un enfoque que resulte mejor."],
   
   ["Y es que la línea 3 - es la más mutativa del hexagrama, para ella la palabra error es fundamental. La línea 3 - exige no lamentar el vínculo, debe asegurarse que funciona a la perfección. Su proceso de crecimiento es averiguar qué cosas no funcionan bien, necesita manejar en su espacio ese pesimismo que le da el ver lo negativo y cuando lo hace es un maestro de las relaciones, un preciso mecánico del manejo de todo en la vida propia y en la de los demás."],
   
   ["Un 1/3 - que acepta su mecanismo de comprobación no se auto culpa y acepta que esto es un modo mecánico de crecer, vence así su pesimismo y desconfianza y se hace un maestro en la materia y la psique. A través de su propia experiencia consiguen ahorrar procesos en los demás. Un terapeuta con este perfil no conocerá las neurosis o el sufrimiento por los libros, lo habrá pasado él y sabrá comprender, entender, y atender a quienes vienen con semejantes procesos. Son seres mutantes, que viven descubriendo las propias posibilidades y descartando aquello que no funciona en sí mismos y pudiendo así aportar grandes conocimientos a los demás."],
   ]
   },
   {
   name: "1/4 - INVESTIGADOR/OPORTUNISTA",
   img: investigadoroportunista,
   desc: [["Perfil Armónico, Conecta con su inconsciente saliendo de si mismo, tiene la necesidad de exteriorizar sus cimientos"],
   
   ["Es uno de los perfiles más fijos, No se puede oponerse a ellos o discutir con ellos, tienen su visión de las cosas, no tienen facilidad para cambiar demasiado porque tienen una cualidad rígida, no mutable"],
   
   ["Si intentas discutir sus propias bases , sus modos de ver el mundo, solo consigues demostrarles que no les aceptas"],
   
   ["Al ser tan rígidos, son frágiles , cuando se desestructuran por situaciones que les cuestionan su estado o su modo de ver las cosas , no se recuperan fácilmente y pierden confianza"],
   
   ["Amalo y déjalo ser"],
   
   ["Las amistades son fundamentales para ellos , la oportunidad de tomar caminos en su vida, llegaran de esas amistades , parejas o amigos"],
   
   ["Son maestros de la amistad"],
   
   ["Es un perfil al que le aparecen cosas que han permanecido ocultas mucho tiempo"],
   
   ["Lo mismo pasa con las enfermedades , quizás la tengan años incubando y de pronto emergen a la superficie"],
   
   ["Su cuarta línea es de influencia, ellos influyen a los otros , pero ellos mismos no se dejan influir , no cambian, pero ellos pueden cambiarte"],
   
   ["Son influyentes , con grandes contactos y amistades"],
   
   ["Con un resfriado no deberían ver a sus amigos para no contagiarles"],
   
   ["Tienen también la capacidad de contagiar su bienestar cuando se encuentran bien"],
   
   ["Tienen un entusiasmo contagioso, de una alegría que se pega, su risa incita a reír y sus lloros dan tristeza"],
   
   ["El poder de influir en los demás es algo muy positivo, empléala bien"],
   
   ["La sexualidad"],
   
   ["Ocurre lo mismo que en lo demás, pueden sentirse atraídos por sus amigos, lo cual puede resultar poco gratificante para ellos porque probablemente esta atracción sexual hacia sus amigos no sea socialmente correcta al introducir en sus amistades un factor de atracción sexual. Las personas con la línea 4 - en su perfil tienden a intimar con sus amigos a través de relaciones sexuales. Las oportunidades sexuales para ellos surgen con amistades. Un 1/4 - nunca desea hacer el amor con un extraño. Por tanto este perfil, antes de entregarse a una relación debe sentirse en un clima de amistad y confianza con el otro."],
   
   ["Este perfil, al tener su línea 1ª, es un investigador y su mayor interés está en investigar que puede confiar en el otro. También la línea uno le da cierta inseguridad en sus relaciones, pero si sabe esperar a que surja una oportunidad basada en una relación de amistad y confianza suficientemente sólida, esa serán sus relaciones correctas"],
   ]
   },
   {
   name: "2/4 - ERMITAÑO/OPORTUNISTA",
   img: ermitanooportunista,
   desc: [["La segunda línea encarna un 'DON NATURAL'. Saben hacer algo sin necesidad de haberlo aprendido o que alguien se lo haya enseñado."],
   
   ["Esto no significa que estas personas sepan explicar cómo lo hacen"],
   
   ["Puede suceder que estas personas tengan por ejemplo gran sensibilidad para la música por tener muy buen oído, pero no son necesariamente buenos músicos o no conocen la técnica o el solfeo, no saben enseñarla."],
   
   [" Es un don que tienen y que les sirve a ellos, pero quizás no a otros. Esta 2ª línea es elusiva con lo extraño."],
   
   ["Es la planta baja del edificio, no se da cuenta de que los demás le pueden ver, sin embargo, su actitud es 'dejarme solo'. En la planta baja uno está en su propio espacio, no tiene consciencia de que la gente está mirando. No tiene interés en investigar o estudiar para luego comunicarlo. Esta línea tiene la cualidad del Ermitaño que no desea verse metido en líos."],
   
   ["En el perfil 2/4 - tenemos un inconsciente (4) que está atrayendo amistad a través de sus dones inconscientes influyendo en el campo de la intimidad (2), generando fraternidad. Atrae personas a su vida que buscan un grado de intimidad con él. Por un lado, la línea 2 - construye barreras para la gente, pero su 4ª línea atrae a esas personas, así que siguen viniendo hacia él. No acuden como amantes, vienen como amigos, aunque este perfil se vea atraído a intentar una relación sexual."],
   
   ["Estos seres viven una tensión al estar constantemente atrayendo oportunidades que no son necesariamente correctas para ellos."],
   
   ["La segunda línea tiene la característica de 'ser llamado' y ellos están para sintonizar con la llamada. Sin embargo, algunas de estas llamadas no le sirven, solo será válida cuando esta llamada venga de su círculo interno de amistades. Mientras no sientan esta llamada, su tendencia es decir 'dejarme tranquilo como estoy'."],
   
   ["Un perfil 2/4 - tiende a evitar las dificultades, son personas que se marchan de casa de sus padres tardíamente por comodidad. Sólo desean una oportunidad para contagiarte su saber, que para ellos no es más que un don natural. No les preguntes como lo hacen. Tampoco conviene a una persona de este tipo que les digan 'lo que deberían ser', es mejor dejarlos que sigan en su proceso y no pretender sacarles de él."],
   
   ["El mecanismo del 2/4 - es aprender a esperar la llamada que les colme y les haga felices y esta llamada generalmente les llegará de alguien de su confianza, alguien que tolera su fijeza y que sepa cuáles son las necesidades que tienen. Porque estas personas son el misionero, están para cumplir una misión, pero para que ellos sepan su misión han de esperar la llamada que les llegue de su círculo cercano. Y cuando ellos tienen la certeza de haber encontrado su misión, son capaces de militar a favor de lo que ellos recibieron como una revelación."],
   
   ["La Salud"],
   
   [" Estas personas enferman poco debido a que su naturaleza recluida les impide exponerse demasiado al tráfico de virus. Cuando enferman, sus amigos van a visitarlo y contagia a los demás."],
   
   ["No son necesariamente insociables, sin embargo, se mantienen recluidos en su círculo de amistades de confianza. Para intimar con este perfil es preciso aceptar plenamente como es, es decir trabar confianza, amistad y aceptación incondicional. No intentes cambiar nada y espera a que estén seguros de que les amas, siendo como son, No pueden cambiarla porque es un perfil muy fijo y tampoco les resulta sencillo hacer cosas contrarias a su naturaleza."],
   ]
   },
   {
   name: "2/5 - ERMITAÑO/HEREJE",
   img: ermitanohereje,
   desc: [["Esta combinación del hexagrama 2, en el que la persona no tiene interés en investigar nada, simplemente tiene el don natural que le hace tener cualidades innatas en algún campo."],
   
   ["Él no sabe exteriorizar eso, ni explicar como lo hace ni tan siquiera enseñarlo, y sin embargo su línea quinta le está haciendo ser víctima de las proyecciones ajenas,"],
   ["Todos esperan de él que les explique como lo hace, pero él se siente incapaz de hacerlo."],
   
   ["Lo que él quiere es estar solo, que le dejen, pero al mismo tiempo está seduciendo a la gente con sus dones y parece que es muy prometedor, que puede aportar soluciones para ellos, que puede ser su guía, labor para la cual él no se siente ni motivado ni con herramientas para comunicar su sabiduría."],
   
   ["Así que difícilmente este tipo dará la talla que el mundo le exige, por lo que suele recluirse en su casa, en sus conocimientos y raras veces los comparte excepto con quienes están dispuestos a aceptarla como es, como un maestro que no va a comunicar su sabiduría y que viviendo con el puedan obtener algo de este sin que el intente repartirlo."],
   ]
   },
   {
   
   name: "3/5 - MÁRTIR/HEREJE",
   img: martirhereje,
   desc: [[" Proceso de intento error, pesimismo y martirio, en este perfil se dan cuenta conscientemente"],
   
   [" Estas personas creen ser un error, un fracaso"],
   
   ["Son los seres más descontentos con el mundo y con la naturaleza del mundo, todo es un error para ellos ysacan la conclusión que ellos son el error, por eso se martirizan"],
   
   [" Desde los 6 - meses los padres los consideran un error, son bebes problemáticos"],
   
   ["Este perfil, crea la expectativa de que va a ser un error, un desastre, un problema, un incompetente, esto conlleva una gran carga"],
   
   [" Abandonan el hogar materno muy pronto, los reprueban por sus errores"],
   
   ["Son supervivientes natos, siempre vuelven a levantarse, con la esperanza de encontrar un lugar donde no proyecten sobre ellos esa incompetencia"],
   
   [" Nos enseñan que es lo que no funciona, advierte a los demás de lo que no funciona"],
   
   [" Cazadores de gurús, buscan salvadores que no les proyecten ese fracaso"],
   
   [" En lugar de pensar que su terapeuta no es el adecuado, piensan que son ellos los inadecuados"],
   
   [" No cuentan a nadie sus errores, justifican los errores, no comprenden su función"],
   
   [" Cuando viven sin culpabilizarse por sus errores, saben lo que es aplicable y útil, en otro caso serán unos mártires, si viven con ese error buscaran su isla desierta donde nadie les proyecte nada"],
   
   ["Pueden ser hipocondriacos, siempre hay algo que no va bien en mí, siempre me toca a mí, la oveja negra, es susceptible de contraer enfermedades, todo impacta en su vida, ya que es una línea de apertura, y se defiende creando los anticuerpos, ya que no tiene defensas son los que más absorben los virus y bacterias"],
   
   ["Si quieres tener una buena salud. tienes que darte cuenta que tenerla es parte del proceso, debes tomarte un reposo, aceptar que te fortalecen, estás preparado para vencerlas, es tu proceso, es correcto para ti, estás preparado para superarlas, ya que haces la mutación"],
   
   [" Si operas desde el no ser todo en ti se debilita, tanto lo definido como lo indefinido"],
   
   [" Debes seguir la estrategia de tu tipo, de lo contrario, serás un mártir y universalizaras el fracaso"],
   
   ["Suelen divorciarse, establece vínculos y los rompe, En la intimidad también es intento y error, establecer vínculos y romperlos Cada vez que rompe una relación la universaliza y dice que las relaciones de pareja no funcionan"],
   
   [" Es imprescindible tener su propio espacio, si es posible su propia cama"],
   
   [" Suelen hacerse grandes expectativas"],
   
   [" Si vives desde el no ser, tu experiencia de relaciones será muy difícil, equivócate y aprende de ello"],
   
   ["COMETER ERRORES ES CRECIMIENTO PARA TI"],
   
   [" Deben saber que no son ellos el error, sino que van captando lo que no funciona en el exterior, y el error para ellos es la base de su experiencia humana"],
   
   [" Llegan a la sabiduría contando a los demás sus fracasos en lugar de ocultarlos y culparse por ellos"],
   
   [" No inviertas tu tiempo y dinero en eso ya lo he probado"],
   
   ["Debes saber que equivocarte no es un fracaso, es un proceso de crecimiento, y llegar a la sabiduría, ese proceso debes vivirlo con alegría y no con pesimismo"],
   
   ["Aprender que no estás aquí para tener una relación que dure para siempre, sino para tener relaciones que fracasan y aprender que es lo que no funciona de esas relaciones"],
   ["Es importante seguir tu estrategia para tener relaciones acordes a tu naturaleza"]
   ]
   },
   {
   name: "3/6 - MÁRTIR/MODELO DE ROLES",
   img: martirmodeloderoles,
   desc: [
   [" 7 - veces menos frecuente que el 3/5 - son una minoría La sexta línea, su proceso está marcado por tres fases:"],
   
   ["La 1ª, 30 - años, ciclo de Saturno, la sexta línea opera en la práctica y en la experiencia del individuo como una línea 3 - a través del proceso de intento y error. Durante 30 - años operan como un perfil 3/3. Devoran la vida. Son los jóvenes que mueren pronto. Devoran la vida. Están abiertos a todo y todo tipo de cosas impactan en su inconsciente y consciente. A veces no llegan a la madurez."],
   
   ["Cuando han completado el ciclo de Saturno, se suben al tejado como una persona alejada de la subjetividad de su vida, como algo con lo que ellos no están involucrados. Entre los 30 - y los 50 - es la fase que más caudal entra en sus vidas, más dinero... Su actitud sin embargo es de profundo distanciamiento, se sube al tejado para protegerse de cualquier equivocación como las que sufrió en su vida"],
   
   ["El pesimismo que tenemos en la personalidad se ve reafirmado enteramente a nivel inconsciente y cuando llegan a los 29 - años están agotados, no dan más de sí. Son las personas más pesimistas. Psicológicamente son personas tristes. Sobre todo, el 3/6, porque el 6/3 - el distanciamiento opera de modo consciente. El pesimismo es tan profundo que solo sienten heridas y cosas que no han funcionado. Es un perfil de cambio, de una experiencia excepcional, si logran superar su primera fase."],
   
   ["Pesimismo y martirio a todos los niveles, consciente e inconsciente. Deben saber conocer el valor del proceso de intento y error. Son verdaderos supervivientes, ya no sucumben ante nada, no les puedes matar. Aguantan todo, 'mala hierba nunca muere'. Pero son necesarios. Es un perfil de transición, son los perfiles más mutativos, más capaces de adaptarse, su foco siempre está en lo nuevo. El proceso de intento y error es imprescindible para señalar el camino a seguir a los otros."],
   
   ["Cuando lo viven desde el 'no ser' el martirio es absoluto. El crecimiento de la sexta línea es el movimiento de la subjetividad a la objetividad. Pueden sanar sus heridas desde su ser, mutar en base a ellas. En otro caso están siempre distanciándose de todo intentando no provocar nada que pueda volver a provocar el error que pueda provocar su pesimismo. No deben huir de su proceso de fracaso."],
   
   ["SEGUNDA FASE"],
   
   ["A los 50 - años vuelven a bajar de su línea 6ª"],
   
   ["¡Cuando están en la primera fase adquieren una experiencia caótica y si la superan con la objetividad, “suben al tejado de la casa!, su vida comienza a estabilizarse y todas las enfermedades que hayan contraído en los primeros años de su vida vuelven a los 50 - años (retorno de Quirón) fuerza a estas personas a bajar del tejado. Y vuelven a ser tan vulnerables como cuando se subieron, solo se salvan siendo genuinamente sí mismos"],
   
   ["Es el momento de florecimiento en la vida. Tienen el potencial de la especie de mutar, de adaptarse a cosas nuevas. Pero la mayoría de estas personas con estas líneas son pesimistas y se quejan de lo que no debería de ser. No hay necesidad alguna de subirse a la cruz, estos perfiles no están para eso sino para decir cuál es la mutación necesaria para crecer en base a su experiencia. La sexta línea debe ser un ejemplo vivo. La vida es para ellos una curva de aprendizaje, no de condena o equivocación, es un constante proceso de aprendizaje."],
   
   ["LA SEXUALIDAD"],
   
   ["En los primeros 30 - años de su vida está abierto a todas las experiencias en el canal de la sexualidad la 3ª línea habla de promiscuidad, abierto a lo desconocido. Son personas que para los 17 - años ya están desencantados con las relaciones, ya se han enamorado y conocen el dolor, el desgarro y el pesimismo, ya han desarrollado una desconfianza en cuanto a lo que el amor deja.. Son frecuentemente que investigan el amor, aunque ellos desconfían de él, son pesimistas acerca de que lo encuentren. Estas personas, con una sexta línea, tienen que volver a bajar del tejado siendo ellos mismos, siendo un ejemplo de roles. Han observado cual es la manera que funciona para ellos."],
   
   [" Se sube al tejado para buscar amor, pero no es amor para sí mismo, el amor es algo a lo que renunció. Lo que busca es si hay amor para otros. Y desde ahí se ponen a observar si otros experimentan amor."],
   
   [" La sexta línea es el anhelo de relación, de encontrar el alma gemela, la relación ideal. La única relación ideal es la que ellos pueden vivir siendo ellos mismos. Los cincuenta años es una edad de florecimiento."],
   ]
   },
   {
   name: "4/1 - OPORTUNISTA/INVESTIGADOR",
   img: oportunistainvestigador,
   desc:
   [[" 7 - veces menos diseños que el 4/6"],
   
   ["La personalidad permanece en la línea 4, el oportunista, lo que cambia en este perfil es el cálculo prenatal, pasa de ser el último de un hexagrama al primero de otro, Es un perfil de cambio. También cambian las cruces de las que extraemos el perfil, de modo que el eje de la personalidad y el eje del diseño ya no es el mismo."],
   
   ["La personalidad está dotada de dones sociales innatos y la capacidad de contagiar hermandad y fraternidad en otros, de alcanzar a otros."],
   
   ["Al tener la línea uno, el inconsciente está arraigado en investigar, a pesar de estar la personalidad 4 - arraigada a lo social. Es distinto del 1/4. En este perfil uno se identifica en el modo de exteriorizar las cosas, son las personas más fijas del planeta, seres únicos, son los únicos con una geometría distinta a los demás, es una bisagra entre las otras dos geometrías, se llama un destino fijo o ineludible, inalterable."],
   
   ["Es la persona que va a una fiesta y va de persona en persona exteriorizando su historia y todos le dicen que lo que dice esta fuera de lugar, así que la persona se pliega un poco, pero enseguida, en cuanto sale a la calle se coloca en el mismo lugar que antes y lo único que está convencido es que las personas de esa fiesta no son sus enemigos"],
   
   ["Las únicas oportunidades para ellos es encontrar personas que opinen o que tengan la misma visión que ellos, que no interfieran con él."],
   
   ["El niño te va a mover, porque ellos están compelidos a exteriorizar su naturaleza de un modo fijo. Las cuartas líneas cuando son niños son condicionables e ingenuos, no hay que mentirles, porque eso es lo que van a tomar como base. Los cimientos que se formen de niño son aquellos con los que van a funcionar el resto de su vida. No les importa o interesan otros puntos de vista. No contarles que la tierra sea plana para que no lo tomen como un absoluto. Dejarlos ser, no forzarlos, no romperlos."],
   
   ["Los perfiles de ángulo derecho y los de ángulo izquierdo son distintos, son una expresión de modos de ser humanos opuestos. El 4/1 - es un andrógino, un ser no definido que puede interactuar indistintamente con gente que vive con un proceso personal de ángulo derecho como con aquellos que viven un proceso kármico de ángulo transpersonal de ángulo izquierdo. Pero al margen de que puedan vivir una vida social que le brinda todas las oportunidades, son personas que están solas."],
   
   ["Son un ejemplo de lo que es viajar solo, y eso no significa que no tengan vínculos sociales estables, pero su experiencia interna es de soledad. Son investigadores de la amistad, tanto personal como transpersonal Acaban siendo grandes conocedores de la amistad. Vive en función de las relaciones sociales, de la fraternidad. Todo lo que viven a nivel consciente, su inconsciente lo lleva al inconsciente para investigarlo."],
   
   ["La Salud"],
   
   ["Nadie se pone enfermo o se cura solo, todo proceso de la biología es comunal, condicionada por con quien vives, condiciona tus hábitos, tu sueño. La cuarta línea propaga la enfermedad, transmitirla. En el 4/1 - puede infectar a toda la tribu, tienen el potencial de influir y provocar una mutación profunda en todos. Si encuentra un modo más sano, contagian esa mutación."],
   
   ["En el plano personal dependen de con quien interactúan, y tanto pueden contagiar una enfermedad como un modo de sanar. Este perfil bisagra puede provocar cualquier mutación necesaria para la totalidad."],
   
   ["La Sexualidad"],
   
   ["La sexualidad del 4/1 - vendrá del círculo de amigos en la comunidad en la que vive. Es alguien que investiga la relación a ver si la amistad es correcta, puede estar mucho tiempo viendo si es o no la persona adecuada. Es una persona muy fija, tiene dificultad para encontrar amigos en los que puedan confiar, que su investigación concluya. Para este perfil esta investigación concluye cuando no intentan influir en sus vidas, que no les digan lo que les conviene hacer. En la oscuridad de su laboratorio puede tener una gran sexualidad, pero el amor solo le llega cuando alguien tiene la cualidad incondicional. No es fácil de encontrar esa incondicionalidad. Esto sucede cuando viven desde el no ser, pero también cada perfil tiene una visión maravillosa."],
   
   ["Esta es una persona que tiene que exteriorizar algo perfecto, incontaminado. Discutir con él no sirve, lo único que va a concluir si lo haces es que no le quieres. Pueden tener una sexualidad única portadora de una nueva mutación si siguen la estrategia de su tipo."],
   ]
   },
   {
   name: "4/6 - OPORTUNISTA/MODELO DE ROLES",
   img: oportunistamodeloderoles,
   desc:[
   ["En el 1/3 - cuyas dos líneas son parte del trigrama inferior, el más auto absorbido, el 4/6 - es el único perfil de ángulo derecho cuyas dos líneas son parte del trigrama superior"],
   
   ["Tienen dones sociales innatos, no dones Transpersonales, es una cualidad de la cuarta línea que provoca hermandad, la del oportunista que tiene que esperar las oportunidades para el amor, el trabajo, que le vendrán de un amigo"],
   
   ["Es el perfil del Voyeur. Siempre captando observando, lo que pasa en otros. Típica persona que está en el centro de una fiesta, mirando lo que pasa ahí. Están muy a lo suyo, pero cuyo perfil está dedicado a cómo llegar a los otros. La cuarta línea toma conciencia de que al otro lado del canal hay algo y ese algo es hacia donde tiene que exteriorizar su base. Y la sexta línea es la cualidad trascendente. Sus dones conscientes e inconscientes son para alcanzar a otros, pero sin estar directamente involucrados. La 6ª línea tiene ese proceso de tres fases distintas. Durante los primeros treinta años opera en la frecuencia de la tercera línea. En los primeros años de su vida actuara como un 4/3, un intento y error y un martirio y pesimismo potencial."],
   
   ["En el 4/6 - durante los primeros treinta años, lo que les deja secuelas son las amistades inadecuadas estas personas cuando son niños se juntan con personas que no son adecuadas. Esos dones sociales, en un proceso de intento y error hacen que cuando son niños se junten con la gente que no es adecuada para ellos. Sus dones sociales para la interacción y crear hermandad y fraternidad con desconocidos en una fase 3 (a lo que venga) les lleva a conectar con personas que no son sana para ellos"],
   
   ["La línea 6ª también tiene tendencia a morir joven debido a esa primera fase de su vida en la que aceptan cualquier cosa que les toque en suerte, y a su capacidad de superar las situaciones adversas y convertirlas en sabiduría. Los padres de los niños con este perfil debieran estar atentos a las amistades de su hijo, quien es esa persona con la que va, donde vive... asegurarse que no se relacionan con personas potencialmente peligrosas"],
   
   ["Es la típica persona que muere joven porque se ha juntado con ambientes de drogodependencia, por ejemplo, con amistades peligrosas. O bien que muere en accidente automovilístico en un coche conducido por un amigo temerario. No era su temeridad, pero iba con la gente equivocada. La fase más peligrosa de su vida en los primeros treinta años"],
   
   ["Cuando este perfil entra en la segunda fase de su vida, busca una nueva comunidad donde encontrar un nuevo círculo de amistades, se aleja de toda asociación inadecuada porque conoce por experiencia lo dañinas que pueden ser. Busca otras comunidades, estudia a los demás para poder tener la oportunidad de desarrollarse como individuo. Se vuelve el voyeur que observa cómo se comportan los demás"],
   
   ["Al cumplir 60 - años se produce un florecimiento, ellos se vuelven el ejemplo de que se puede ser así de humano y estar en paz. Es preciso que el voyeur encuentre sus necesidades sociales satisfechas, son el ejemplo de las personas del futuro, son un nuevo modelo de roles, inherente a la línea sexta. Es un ejemplo vivo de esos valores"],
   
   ["La salud."],
   
   ["La tercera línea contrae y desarrolla los procesos infecciosos pero el que mejor lo contagia es la línea 4. En el perfil 4/6 - en la primera fase de su vida, operan su línea 6 - como línea 3, es decir son susceptibles de coger cualquier cosa porque todo impacta en ellos. Así que en los primeros 30 - años de su vida su salud no es robusta y además pueden contagiarla por su línea 4."],
   
   ["Estar sano no significa que no enfermas, estamos para mutar y procesar lo que hay en el entorno. Se sale de la enfermedad fortalecido en tu sistema. Hay que tener las enfermedades correctas para ti, si vives en el no ser, tendrás enfermedades que no sabes afrontar, debes ser simple, seguir vuestra estrategia, no se trata de adquirir más conocimientos sino de ser tú mismo, y eso es un instante nada más. Ser tú mismo no es controlar tu vida, no es ser como crees que debe de ser. Hay que rendirse al propio organismo y ver que todos los perfiles tienen el mismo encanto. Todo es mecánico, rendirse al propio organismo, aplicar lo simple, solo tenemos la función de ser lo que somos, eso no significa no enfermar, significa pasar por los procesos que necesitas para crecer. Es simple, sigue tu estrategia"],
   
   ["La Sexualidad"],
   
   ["La cuarta línea tiene una sexualidad un tanto frustrante debido a su necesidad de establecer una base primera de amistad o bien ya que el deseo es a través de amistades que no están disponibles u opcionales. En el 4/6 - los primeros 30 - años de su vida, están abiertos a lo que venga por ese proceso de intento y error yv acaban con las relaciones inadecuadas, pero deben entender la belleza de su proceso, es una fase imprescindible de su crecimiento, si les podemos alertar de modo de que puedan entrar en las cosas inadecuadas conociendo el riesgo"],
   ]
   },
   {
   name: "5/1 - HEREJE/INVESTIGADOR",
   img: herejeinvestigador,
   desc: [
   [" Saben conocer desde dentro a las otras personas con las que se encuentran"],
   [" Salvadores, santos , terapeutas, Sacerdotes, Sacerdotisas"],
   [" Son los reveladores de la verdad"],
   [" Todo el mundo desea algo de ellos"],
   [" Predican, dan a conocer a los demás los conocimientos que tienen"],
   [" Son desconfiados"],
   [" Viven en el ático con las ventanas abiertas para ver que quieren los demás"],
   [" Investigador, descubridor, científico en su forma de SER"],
   [" En su no SER desde el ego, hace prueba y error y eso le da inseguridad"],
   [" Es desconfiado en la duda"],
   [" Son proyectados de niños por sus padres y el mundo"],
   [" Se esperan de ellos que sean los mejores, los conquistadores"],
   [" Su formato de investigador, le exige asentar por sí mismos , sin influencias ajenas"],
   [" El Hereje, si no das lo que se espera de ti serás quemado en la hoguera"],
   [" Personas que pueden entregar a los demás de manera práctica sus dones"],
   [" Vienen a dar una verdad enraizada profundamente en sus cimientos, pero es preciso que ellos descubran por si mismos esa verdad"],
   [" Puede provocar gran decepción en los demás"],
   ["La Salud"],
   [" Buena salud, no suele enfermar ya que al ser retraído se relaciona poco y no se expone al campo genético general"],
   [" Son de difícil acceso, están en su laboratorio sin que les molesten, reúsan el contacto, eso les protege"],
   [" Buscan salud Psíquica, individualistas , no suelen mostrar su entusiasmo, son sospechosos de saber algo que los demás desconocen"],
   ["La Sexualidad"],
   [" Grandes seductores, están para seducir, insinúan que pueden ofrecer dones prácticos universales y es necesario que alguien se deje seducir por ese ofrecimiento"],
   [" Desde el no SER condicionado es “la mujer fatal” “el casanova” sus amantes se decepcionan al no encontrar el terapeuta, el sabio, santo o salvador que esperaban, seducción sin compromiso, pueden llegar a ser crueles"],
   [" Desde el ser están disponibles para todo el mundo, pueden ser un Buda"],
   [" Tiene que investigar, estudiar hasta que sienta una base firme y pueda dar algo a los demás, si no, lo terminará pagando"],
   ]
   },
   {
   
   name: "5/2 - HEREJE/ERMITAÑO",
   img: herejeermitano,
   desc: [
   [" Este tipo es 7 - veces menos frecuente que el 5/1. Hay poca gente con este perfil"],
   
   ["La línea 2 - no quiere estudiar nada, sabe ser, pero no quiere o necesita decirlo o enseñárselo a otros. Es un don natural, no hay afán de instruir a otros."],
   [" Es un perfil de cambio, es armónico."],
   
   ["La 2ª línea es el ermitaño, de personas tímidas, recluidas conscientemente. En el 5/2 - la personalidad mira al exterior. Es alguien que dice 'estoy en los matorrales, soy tu salvador, te puedo revelar la verdad, pero no debes venir a verme'"],
   [" Todo el mundo va a su cueva, pero él dice: quiero estar solo. Y ellos responden ¿para qué nos has llamado?"],
   
   ["Es un perfil que provoca la decepción porque mientras que su personalidad seductora, salvadora, terapeuta, atrae a todo el mundo, el inconsciente no quiere saber nada. Es un perfil auto motivado. Mientras no se llame a sí mismo, es un perfil reclusito. Provocan expectativas de que podrían ser salvadores, pero no quieren comprometerse a serlo. El 5/2 - no puede dar los dones prácticos que prometió. Esto les puede llevar a un profundo sufrimiento, conduciéndoles a una actitud de no querer seguir exponiéndose para no defraudar."],
   
   ["Este tipo de perfil tiene su solución a través del propio conocimiento de sí mismos, si logran ser ellos mismos, asumiendo que lo suyo no es tratar de satisfacer las demandas de nadie. Entonces, siendo ellos mismos, pueden inspirar a los demás."],
   
   ["Este es el perfil que más se recluye, por cuanto no se expone generalmente, tiene la cualidad de saber hacerse invisible, de protegerse muy bien, no es fácil que contraigan enfermedades."],
   
   ["Pero dada su reclusión pueden tener cierto trabajo en la intimidad. Siendo éste un perfil en el que la motivación la tienen que encontrar en sí mismos, son dados a disponer de modos de autosatisfacción, incluso sexual, de modos de encontrar su bienestar si necesidad de exponerse al exterior."],
   
   ["Esta cualidad de prometo, pero no cumplo, puede acarrearles cierta fama de manipuladores, cosa que no es cierta, ya que es algo mecánico. Parece que tengan grandes valores que compartir, pero no tienen los medios de exponerlos y eso provoca decepción, provoca que les juzguen como engañosos, decepcionantes."],
   
   [" La 2ª línea es una línea del ermitaño, no se puede echar abajo las barreras de un ermitaño, de un tímido. La función de una segunda línea es la introspección."],
   
   ["Sin embargo, este proceso inconsciente que les lleva a la reclusión puede ser vencido cuando son apreciados por lo que son sin esperar respuestas prácticas de ellos, con sus cualidades para sí mismos. Esta paradoja de la línea 2 - reclusiva y la cinco que promete salvación les hace cerrarse para evitar el sufrimiento."],
   
   [" Deben ser reconocidos por lo que son, no por lo que se espera de ellos."],
   
   ["Sin embargo, no todo está perdido en esta conjugación de líneas. Cuando alguien les quiere por sus valores, sin exigencia de salvación, sabiendo que lo que tienen lo tienen para sí y no se espera que lo comuniquen, con esas personas que les quieren y que respetan su estrategia, podrán desarrollarse felizmente."],
   
   ["Es un tema complejo y paradójico, no le exijas a un 2/5 - que esas cualidades innatas que tiene de avatar, de salvador, las ponga en práctica con los demás, solo le sirven a él y a aquellos que le quieran, los cuales sonatraídos por este perfil."],
   ]
   },
   {
   
   name: "6/2 - MODELO DE ROLES/ERMITAÑO",
   img: modeloderolesermitano,
   desc: [
   ["La sexta línea es una línea de visión, de liderazgo, de magia y de poder y no es parte del hexagrama, está mirando y conoce el hexagrama en todos sus estadios porque los ha vivido en toda su naturaleza porque los ha vivido en sus tres fases, lo conoce mejor que nadie"],
   
   ["Durante los primeros 30 - años viven con la línea resonante 3, como en 3/2, un intento y error. En el proceso de recibir la llamada, la segunda línea esperando escuchar la llamada. Es decir, puede seguir llamada incorrecta que llevan al pesimismo, desencanto y experiencias difíciles de la 3ª línea. En el momento en que el perfil 6/2 - se sube al tejado de la casa, se desplaza desde la subjetividad de su experiencia hacia una perspectiva más objetiva, es el momento en que le comienzan a llegar todo tipo de riquezas"],
   
   ["El 6/2 - es el que con mayor rapidez escucha la llamada de la objetividad. Pasa del proceso de transformación del pesimismo al optimismo, del martirio hacia un ejemplo de roles, de ser el ejemplo. Adquieren una riqueza instantánea porque asciende un escalón y están automáticamente en una posición de poder con respecto a los demás"],
   
   ["La persona de la sexta línea es una especie de encarnación del papa, todo lo que diga va a misa. Para ejercer esa autoridad, en el pasado, no necesitaba bajarse del tejado, podía vivir una vida hipócrita, cómodamente instalado en el sillón de la autoridad. Pero desde 1981 - a través de la mutación que hemos pasado los humanos, no necesitamos más salvadores ni más terapeutas que nos digas, yo soy el camino, yo soy la verdad. Ahora tenemos la información que necesitamos para ser cada uno su propio maestro. De modo que actualmente más tarde o temprano van a tener que bajar del tejado y ser un ejemplo de vida. Van a tener que estar aquí para ser seres despiertos."],
   
   ["Es un perfil natural para florecer en la vida a los cincuenta años, su inconsciente los tiene recluidos en sí mismos como ermitaños y su 6ª línea los llevan por todas las fases necesarias para ser un ser humano. A los cincuenta tienen que florecer como el ser que son, no como falsos o hipócritas, porque si no, morirán."],
   
   ["La vida solo se alimenta de lo verdadero, rechaza lo que es hipócrita. Estos son los seres más vulnerables, cuando viven desde el no ser, cuando bajan a los 50 - años, todo lo que llevaban en su interior puede emerger en ese momento. Es preciso bajar desde el tejado con una perspectiva objetiva de lo que son, de su ser, de su naturaleza"],
   
   ["No tienen nada que enseñar, su don inconsciente es un don natural para ser uno más: ellos mismos despiertos. La iluminación, estar despierto, es una experiencia ordinaria. Cuando un ser iluminado camina por la calle, la gente se da cuenta de que hay un ser que es consciente. El propósito del 6/2 - es trascender la iluminación, bajar como una expresión del florecimiento y demostrar que están listos para su vida."],
   
   ["Hay una posibilidad de que estas personas ignoren la llamada de la verdad. La sexta línea de la puerta 24, donde se racionaliza la verdad interior que nos habla de la posibilidad de estar sordos cuando la verdad, la oportunidad llama a tu puerta. En el primer tercio de las personas de este perfil es imposible que escuchen esta llamada porque están inmersos en la experiencia de la tercera línea."],
   
   ["La salud"],
   
   ["En ese primer tercio de la vida, cuando pasan por el proceso de intento y error, son intrínsecamente vulnerables, es una vulnerabilidad a que penetren en ellas, a que consigan echar abajo las defensas, las personas equivocadas y provocar la muerte, la desaparición. Que sus defensas sean penetradas por personas incorrectas. La sexta línea es la que da las bendiciones al hereje, la quinta línea, es la que determina si lo que dice el hereje es práctico o fiable. Y muchas personas de sexta línea tienen también un sufrimiento cuando viven desde el no ser, el aislamiento en el que pueden llegar a vivir, recluidos en su tejado, separados de cualquier llamada. Pasaron 30 - años recibiendo llamadas equivocadas y ahora están a la defensiva."],
   
   ["La sexualidad"],
   
   ["Buscan un amor perfecto, un alma gemela ideal, y eso es difícil. Deben encontrar a alguien que les respete como son, estar en su aislamiento en el tejado. Pasando del pesimismo al optimismo. En sus últimos 30 - años pueden despertar a su sabiduría y ahí les espera el amor."],
   
   ["Al bajar en la tercera fase de su vida, pueden volverse a encontrar las mismas experiencias que en los primeros treinta años, pero ahora bajo otro punto de vista más sabio y pueden reconocer lo que es correcto para ti, pudiendo enfrentar esas experiencias, dejando que tu sabiduría te guíe y seas un ejemplo de roles para el resto."],
   ]
   },
   {
   name: "6/3 - MODELO DE ROLES/MÁRTIR",
   img: modeloderolesmartir,
   desc:[
       ["Es el más trascendente. Tienen la función de mantener a la especie viva por su capacidad mutativa y su capacidad para adaptarse a lo nuevo, nos indican como entrar en el futuro, en lo desconocido y sobrevivir"],
   
   ["No es una experiencia cómoda vivir esa inestabilidad de este perfil. Es el perfil del caos. Su vida es un caos. En el 6/2 - tienen 20 - años de vacaciones, pero en este perfil no hay vacaciones"],
   
   ["Es un constante subir y bajar. En la primera mitad de su vida viven como un 3/3 - y cuando cumplen los 30 - años, se suben al tejado, pero al llegar no aguantan allí y se vuelven a bajar del tejado a tener otra experiencia de intento y error que alimenta su pesimismo, y vuelven a subir al tejado. Son incapaces de permanecer allí. Siempre vuelven a la refriega."],
   
   ["Estas personas nacen con una escalera atada a la espalda. Es un subir y bajar tan compulsivo que no les da tiempo a cristalizar ningún tipo de sabiduría. El pesimismo, está arraigado en el inconsciente. Es el inconsciente el que les compele a subir y bajar del tejado"],
   
   ["Pero tienen un gran valor, es el más mutativo de todos, no es un perfil negativo sin vive en función de su propia naturaleza. Deben subir y bajar en función de las cosas apropiadas a su propia naturaleza, porque reconoces que es una fase de crecimiento personal"],
   
   ["Con hijo con este perfil, ámalo bien, asegúrate de que lo proteges en ese proceso de intento y error. Los perfiles de sexta línea están aquí para mostrarnos que no hay límites, son la encarnación de la confianza, en la capacidad de responder a lo que sea. Es el optimista ilimitado, la confianza ilimitada en la vida, capacidad de adaptación a lo que venga. Pero solo cuando son ellos mismos. Lo único que puedes hacer con un hijo así es amarlo"],
   
   ["La salud"],
   
   ["Al ser un perfil de cambio. En puerta 28, donde procesamos nuestros miedos a la muerte y la supervivencia, la puerta del riesgo, la tercera línea nos habla del aventurismo. La sexta línea se llama halo de gloria, es decir correr un riesgo innecesario, lo cual supone que es alguien que se tira del tejado con gran riesgo, de manera impresionante, pero peligrosa. Nos enseñan que la vida es algo transitorio. Pueden ser víctimas de un intento fatal, es el destino natural de estas personas cuando viven desde el 'no ser'. Y no están aquí para eso, si son ellas mismas, estarán naturalmente equipados para adaptarse a cualquier circunstancia nueva"],
   
   ["El desapego hacia la estabilidad, hacia las formas fijas e inamovibles. Ellos siempre están listos. Cuando hay uno de ellos cerca, estamos listos, para dejar de hacer las cosas de una manera y hacerlas de otra, nos llevan a hacia una transición, pero como un ejemplo vivo de cómo encarnar eso. Son muy valiosos porque sobreviven bien y los necesitamos, nos recuerdan que la vida es un proceso mutante, nos muestran el camino hacia lo ilimitado. Si entran correctamente en las cosas, vivirás una vida muy excitante y pasar cómodamente con una experiencia de júbilo viviendo lo que es: Un proceso de cambio."],
   
   ["La Sexualidad"],
   
   ["Tienen dificultades al tener una tercera línea en su perfil y como este perfil la tiene, durante 30 - años de su vida, hacen vínculos y los rompes. Les deja un profundo sentimiento de martirio y pesimismo, no contigo ni sin ti. Desde el 'no ser' su vida íntima no es buena, y al llegar a los 30 - años llegan convencidos de que no hay amor para ellos. Si este perfil no encuentra amor, su vida no encuentra significado para ellos. Solo pueden florecer a través del amor. Deben aprender que el amor no es lo que creen, el príncipe azul, la relación perfecta, deben comprender que el amor para ellos es una experiencia transitoria pero igualmente genuina, el final no es el fracaso sino el principio de otra experiencia con otra persona, en otra situación. Están para encontrar amor en todas sus formas, esa es su cualidad., poder encontrar y compartir ese amor. Si están en su no ser no encuentran el amor. Pero no hay amor para nadie a menos que te ames a ti mismo, y seas tú mismo. A menos que ames tu forma de ser, ya sea pesimista, anárquica... si te amas a ti mismo podrás amar a los demás. Amarse a sí mismo no tiene que ver con el ego sino reconocer la forma que habitas, amar tu vida. Así podrás amar a otros a tu manera. "]
   ]
   }];

const centrosImg = [[ajnaAbierto, ajnaCerrado], [bazoAbierto, bazoCerrado],[cabezaAbierto, cabezaCerrado],[corazonAbierto, corazonCerrado], [GIAbierto, GICerrado],[gargantaAbierto,gargantaCerrado],[plexoAbierto, plexoCerrado], [raizAbierto, raizCerrado], [sacralAbierto, sacralCerrado]]

const centrosCompleto = [
     {
        nombre: 'Ajna', 
        corrbio:'Glándula Pituitaria',
        tipo: 'Consciencia',
        funcion: 'Pensar, categorizar, analizar e investigar la vida Es nuestra mente intelectual, racional, auto reflexiva.',
        centroDefinido: 'Tienen una manera determinada de pensar y de procesar la información mental.',
        noSerUno: 'Creen que tienen siempre la razón y la quieren imponer',
        preguntaGuiaUno: '¿Todavía crees que tu verdad es la única?',
        centroSinDefinir: 'Aprenden rápido por su gran apertura mental ya que absorben información como una esponja.Tienen muchos puntos de vistas distintos y en eso radica su inteligencia, Disfrutan de no tener certezas',
        noSerDos: 'No se sienten cómodos con su amplitud de miras y buscan fijarla, para mostrarse a ellos y mostrar a los demás que tienen certeza y consistencia intelectual.  Se vuelven dogmáticos',
        preguntaGuiaDos: '¿Trato de convencer a todo el mundo de que tengo la razón?',
        funcionImg: ajnaimg,
        noSerPuertas: 6,
        preguntaGuiaPorcentaje: '51% 49%',
        centroSinDefinirImg: ajnacentrosindefinirimg,
        
    },
    {
        nombre: 'Bazo', 
        corrbio:'Sistema linfático, Sistema inmunológico ',
        tipo: 'Conciencia ancestral ',
        funcion: 'Conciencia del cuerpo, intuición, instinto, gusto Miedos básicos de la supervivencia que nos mantienen vivos y sanos. Salud y bienestar Frecuencia en el aquí y ahora',
        centroDefinido: 'Toman una forma fija de conciencia del cuerpo para mantenerse sanos. Pueden ser espontáneos y confiar en su intuición. Suelen sentirse físicamente bien procesando los miedos de forma predeterminada. Tienen sentido de seguridad  ',
        noSerUno: 'No escuchan ni confían en su intuición por lo que los miedos activados son manejados por la mente',
        preguntaGuiaUno: '¿Todavía no confías en tu intuición?',
        centroSinDefinir: 'Grandes reconocedores y lectores intuitivos de las vibraciones de los demás y del entorno.No son espontáneos. Absorben patrones de enfermedades de otros',
        noSerDos: 'Absorben miedos y buscan seguridad, volviéndose dependientes de situaciones o personas',
        preguntaGuiaDos: '¿Todavía te aferras a cosas o personas no saludables para ti?',
        funcionImg: bazoiimg,
        noSerPuertas: 7,
        preguntaGuiaPorcentaje: '50% 50%',
        centroSinDefinirImg: bazocentrosindefinirimg,
    },
    {
        nombre: 'Cabeza', 
        corrbio:'Glándula Pineal',
        tipo: 'Presión ',
        funcion: 'Inspiración mental, son las preguntas, dudas y confusiones que presionan al Ajna para que piense y reflexione. Está al servicio de la profundidad y la expansión de la conciencia. ',
        centroDefinido: 'Su inspiración se da de una manera fija, presión mental para resolver sus propias preguntas. Están aqui para inspirar mentalmente a otros',
        noSerUno: 'Fuera de la realidad, estrés mental, miedo mental (ansiedad)',
        preguntaGuiaUno: '¿Todavía tu mente gobierna tu vida?',
        centroSinDefinir: 'Son inspirados por aquellos que están en su aura. Su sabiduría radica en reconocer quien le está inspirado, quien son sus inspiradores y los que no.',
        noSerDos: 'Buscan a toda costa las respuestas que preocupan a otros y se las hacen suyas',
        preguntaGuiaDos: '¿Estoy preocupado tratando de responder las preguntas de los demás?',
        funcionImg: cabezaimg,
        noSerPuertas: 3,
        preguntaGuiaPorcentaje: '50% 50%',
        centroSinDefinirImg: cabezacentrosindefinirimg,
    },
    {
        nombre: 'Corazón', 
        corrbio:'Corazón - Vesícula Biliar - Timo Estómago',
        tipo: 'Motor',
        funcion: 'Supervivencia en el plano material. Impulsados por la fuerza de voluntad y el poder del ego. Autoestima.Personas con valores propios. Manifiestan lo que necesitan tener en el plano material',
        centroDefinido: 'Acceso consistente a la fuerza de voluntad y al sentido natural de autoestima/valor propio. Forma determinada de manejarse en el plano material con pactos, acuerdos y promesas',
        noSerUno: 'Ególatras, sobre valoran la voluntad.',
        preguntaGuiaUno: '¿Te sientes más poderoso y mejor que otros?',
        centroSinDefinir: 'Son grandes reconocedores de lo que es de valor. Leen los "egos agrandados" y pueden disfrutar del mundo material sin que los atrape.',
        noSerDos: 'Autoestima baja. Quedan atrapados en el mundo material y se pasan la vida demostrándose y demostrando a otros su valor',
        preguntaGuiaDos: '¿Todavía te desvalorizas y buscas la validación de los demás?',
        funcionImg: corazonimg,
        noSerPuertas: 4,
        preguntaGuiaPorcentaje: '35% 65%',
        centroSinDefinirImg: corazoncentrosindefinirimg,
    },
    {
        nombre: 'G', 
        corrbio:'Hígado - Sangre.',
        tipo: 'Brújula - Integración',
        funcion: 'Identidad del Ser: Amor y Dirección. Portal hacia la Fuente/Ser Superior',
        centroDefinido: 'Identidad y dirección establecida o consistente que no puede ser influenciada por otras personas. Acceden al amor y a la dirección de una forma determinada y específica',
        noSerUno: 'Imponen su identidad y dirección. Narcisistas',
        preguntaGuiaUno: '¿Todavía te crees superior a otros?',
        centroSinDefinir: 'Gran capacidad para empatizar con el Ser del otro. Se adaptan a otras identidades y su sentido de quien son va variando',
        noSerDos: 'Obsesionados con encontrar el amor, la dirección, su identidad. Muy sensibles al afecto. Nunca se sienten lo suficientemente queridos',
        preguntaGuiaDos: '¿Todavía buscas que el otro siempre te demuestre cuanto te quiere?  ¿Te obsesionas con encontrar tu dirección en la vida?  o en fijar tu identidad?',
        funcionImg: giimg,
        noSerPuertas: 8,
        preguntaGuiaPorcentaje: '57% 43%',
        centroSinDefinirImg: gcentrosindefinirimg,
    },
    {
        nombre: 'Garganta', 
        corrbio:'Glándula Tiroides y Paratiroides.',
        tipo: 'Expresión, Metamórfico',
        funcion: 'Transforma los pensamientos en palabras y la energía en movimiento cuando conecta con alguno de los 4 centros motores',
        centroDefinido: 'Su voz o patrón de comunicación está determinado y es consistente, como asi también su hacer si está conectada a un centro motor',
        noSerUno: 'No acepta su forma de hablar/ habla y hace demasiado.',
        preguntaGuiaUno: '¿Todavía no aceptas tu voz y/o tu hacer lo gobierna tu mente?',
        centroSinDefinir: 'Habilidad para tomar cualquier patrón de lenguaje del entorno muy rápidamente y adaptarse a él',
        noSerDos: 'Buscan ser vistos y llamar la atención para que los escuchen. Ávidos de reconocimiento. Verborreicos o mudos',
        preguntaGuiaDos: '¿Todavía intentas llamar la atención de otros y/o demandas reconocimiento de algún tipo?',
        funcionImg: gargantaimg,
        noSerPuertas: 11,
        preguntaGuiaPorcentaje: '72% 28%',
        centroSinDefinirImg: gargantacentrosindefinirimg, 
    },
    {
        nombre: 'Plexo Solar',
        corrbio:'Riñones, próstata, páncreas, sistema nervioso, pulmones, red neuronal del Plexo Solar .',
        tipo: 'Motor - Conciencia en Mutación ',
        funcion: 'Experimentan la gama de sentimientos, emociones y sensaciones dentro de la ola emocional a fin de lograr claridad o bienestar que se deriva de esa claridad',
        centroDefinido: 'Si son autoridad en un diseño. No tienen la verdad en el momento, no pueden ser espontáneos, la claridad viene con el tiempo. Perciben la realidad según el lugar en que estén de su "ola emocional". Profundidad en las emociones',
        noSerUno: 'Intentan vivir el momento desconociendo sus emociones. Dejan que su mente o las emociones de los demás se sobrepongan a sus propias emociones. .',
        preguntaGuiaUno: '¿Todavía actúas guiado por tus emociones y decides espontáneamente?',
        centroSinDefinir: 'No diseñados genéticamente para procesar emociones, lo aprenden con la vida. Son empáticos, sensibles y lectores emocionales',
        noSerDos: 'Las emociones que absorben los ponen muy mal, por lo que evitan los conflictos. No hacen olas y buscan complacer para que todos estén bien',
        preguntaGuiaDos: '¿Todavía te preocupas para mantener a todos bien y evitas decir tu verdad para no molestar?',
        funcionImg: plexoimg,
        noSerPuertas: 7,
        preguntaGuiaPorcentaje: '50% 50%',
        centroSinDefinirImg: plexocentrosindefinirimg, 
    },
    {
        nombre: 'Raíz',
        corrbio:'Glándulas Adrenales',
        tipo: 'Motor y presión, combustible físico ',
        funcion: 'Impulso, estrés, kundalini. Presión de ser, evolucionar.Adaptarse al mundo, crecer',
        centroDefinido: 'Genéticamente preparados para procesar el estrés. No están aqui para que nadie los presione.Son inmunes al estrés de los demás',
        noSerUno: 'La mente los estresa y lo irradian a los demás',
        preguntaGuiaUno: '¿Presionas intimidando a otros a moverse rápido, a resolver, a actuar?',
        centroSinDefinir: 'Saben muy bien cómo opera el estrés y utilizan la energía del estrés de los demás para su beneficio',
        noSerDos: 'Prefieren evitar el estrés, no quieren lidiar con él. y hacen todo rápido para sacarse las cosas de encima. Viven acelerados',
        preguntaGuiaDos: '¿Todavía te involucras con las cosas buscando sacártelas de encima rápidamente?',
        funcionImg: raizimg,
        noSerPuertas: 9,
        preguntaGuiaPorcentaje: '60% 40%',
        centroSinDefinirImg: raizcentrosindefinirimg, 
    },
    {
        nombre: 'Sacral',
        corrbio:'Ovarios - Testículos',
        tipo: 'Motor',
        funcion: 'Vitalidad - Sexualidad - Impulso sexual - Persistencia. Tienen una frecuencia especial, (se estanca, pasa a otro nivel y se vuelve a estancar). Generan sonidos guturales.',
        centroDefinido: 'Responden escuchando la voz sacral. Acceso consistente a la vitalidad.  Acceso confiable a la energía e identidad sexual.Energía para el trabajo a través del cual se realizan y llegan a ser maestros',
        noSerUno: 'Agotado y frustrado porque se rige por su mente y no por la inteligencia de su cuerpo',
        preguntaGuiaUno: '¿Todavía haces las cosas forzando la naturalidad de la vida?',
        centroSinDefinir: 'Vienen a ser expertos en trabajar de forma especializada y a ser eficientes en periodos acotados de tiempo, ya que su caudal energético es variable.',
        noSerDos: 'Se auto exigen tener más energía, a rendir más, terminando agotados "fundidos", siempre cansados',
        preguntaGuiaDos: '¿Todavía no sabes cuánto es suficiente y has de parar?',
        funcionImg: sacralimg,
        noSerPuertas: 9,
        preguntaGuiaPorcentaje: '70% 30%',
        centroSinDefinirImg: sacralcentrosindefinirimg, 
    }
]

const sacralCompleto = [
    ["Gente que no tiene ni idea de cuál es su identidad hasta que alguien no se lo pregunta"],
    [" La autoridad reside en la capacidad de respuesta"],
    [" La autoridad Sacral solamente se hace audible cuando responde a algo"],
    
    ["Su capacidad de decidir “sí” o “no” con respecto a algo gira en torno a su capacidad de respuesta Sacral."],
    
    ["La voz sacral se oye o se siente inmediatamente cuando se le pide a un Generador que ponga su energía en una actividad o una relación"],
    
    ["La autoridad Sacral les muestra a los Generadores a través de la respuesta, lo que es correcto para ellos cuáles son sus límites si tiene energía ahora para involucrarse"],
    [" Sonidos guturales “a-ja” (si)"],
    [" Sonidos guturales “úh-uh” (no)"],
    [" Sonidos guturales “Hummm” no lo sé ahora mismo, pregúntaselo más tarde o de otra manera"],
    [" Esta respuesta, es su verdad en el momento presente"],
    [" El Sacral solo funciona en el presente, no puede predecir el futuro"],
    [" Cuando te da luz verde, sabes que tienes la emergía para acometer dicho tema"],
    [" La respuesta sacral es una guía fiable, honesta y digna de confianza"],
    [" Es posible que después de muchos años de condicionamiento necesites reconectar con tu respuesta Sacral"],
    
    ["Para reconectar con tu respuesta sacral, practicar con alguien que te pregunte cosas que requieran una respuesta (si) (no)"],
    
    ["Practica y deja que las respuestas fluyan inmediatamente, con el tiempo te sentirás cómodo y serás tú mismo, siguiendo tu verdadera guía interna"],
    [" Deben aprender a esperar a ver venir las cosas, a estar tranquilos y esperar a que les pregunten"],
    [" Si sigues la autoridad de tu sacral encontraras la vida y la salud que te mereces"],
    
    ["La mayoría de las cosas que creen correctas, incorrectas, buenas o malas, no tiene nada que ver con ellos mismos"]
    ];


const mentalCompleto = [
    ["Tu claridad para tomar decisiones proviene de la acción y la interacción de tu entorno"],
    [" La autoridad mental, también conocida como 'sin autoridad' o 'ambiental', es exclusiva de los Proyectores"],
    
    ["Se puede acceder a la autoridad mental escuchando la verdad en la propia voz después de abandonar el cuerpo"],
    [" La fuerza de la vida tiene frecuencia y es discernible cuando se comunica"],
    
    ["En tu tipo de proyector, todos los centros debajo de tu garganta no están definidos, y recibes información sensorial sobre el ambiente a través de tus centros abiertos."],
    
    ["Con esta autoridad has de aprender a sentir en el cuerpo qué entorno te es beneficioso y VER quién realmente quiere tu perspectiva única"],
    
    ["Cuando has de tomar una decisión sobre algo importante, es bueno que des un paso atrás y hablar con un oyente o persona de tu entorno que no intentará influir en la decisión"],
    
    ["El entorno correcto traerá a las personas y actividades adecuadas, y una sensación de relajación en el cuerpo"],
    
    [" Has de preguntarte ¿Este entorno es correcto para mí?"],
    
    [" Cuando estés tomando una decisión acerca del entorno correcto para ti, es sano y beneficioso visitar físicamente los entornos en cuestión y reconocer en tu cuerpo que sensación te dan"],
    
    ["Aunque es bueno para ti tener un grupo de asesores fiables a los que recurrir, es mejor no hablar acerca de las decisiones para que te den opinión o consejo. La mejor manera de usar a tus asesores es que hagan de caja de resonancia para que puedas oír tus propias consideraciones acerca de la decisión."]
    ];

const lunarCompleto = [
    ["La autoridad lunar, exclusiva del reflector"],
    
    [" Se navega a través del movimiento o tránsitos de la luna  días, y en ese sentido es celestial"],
    
    [" Esto es radicalmente diferente de todas las demás autoridades"],
    
    ["Sin una fuerza de vida constante, la autoridad lunar requiere una comprensión profunda de cómo los planetas están aportando energía a la vida"],
    
    [" Hay un patrón, como una canción o un poema de la fuerza de vida que se enciende y apaga, que debe aprenderse"],
    
    ["Este patrón se repite cada  28 a 29  días, por lo que observar este patrón al considerar una decisión da muchas perspectivas diferentes"],
    
    ["Es solo viendo la vida a través de uno o más ciclos lunares que un reflector puede incluso comenzar a VER cómo estos movimientos los cambian, para que puedan tener una relación mucho más profunda con la naturaleza y las estrellas"],
    
    [" La conciencia ambiental también es clave aquí"],
    
    ["Es muy importante para su bienestar que estos seres estén en la ubicación física correcta, con las personas ya que traen un reflejo de su entorno al mundo"],
    
    [" Si el entorno no les produce una buena impresión no es sano, no se sentirán bien o estarán incómodos"],
    
    [" Importante rodearse de asesores o confidentes fiables con los que hablar de cualquier situación o decisión potencial"],
    
    [" Al final de un ciclo o quizás muchos ciclos, el reflector puede tener una sensación de claridad sobre la decisión."],
    [" Una de las claves es no apresurarse y no dejar que el mundo les meta prisa"],
    [" Es importante prestar atención al entorno, ya que los reflejan"],
    [" Oyéndose hablar a si mismos, según va pasando el tiempo, un día, sencillamente llegarán a saber dentro de sí, con una profunda sensación interna, que decisión es correcta para ellos"]
    ];

const gCompleto = [
    ["G Authority, exclusiva de los Proyectores"],
    
    [" La clave de esta autoridad es escuchar lo que dices"],
    
    ["Todo lo que necesitas saber está en lo que dices y desde el centro G sale una voz muy poderosa de tuidentidad que habla por ti reaccionando a una invitación"],
    
    [" Está enraizada en la expresión del yo"],
    
    ["Cuando te inviten escucha lo que dices. No trates de determinar mentalmente lo que vas a decir; simplemente escucha tu voz y confía en ella en ese momento"],
    
    ["Pregúntate ¿Me hará feliz esto? ¿Me dejará esto expresarme a mi mismo? ¿Voy en la dirección apropiada para mí?"],
    
    [" Para vitar tomar una decisión desde tu mente, céntrate en escuchar lo que estás diciendo sin pensar en ello"],
    
    [" Esto no tiene nada que ver con lo que una persona piensa como ellos mismos"],
    
    ["La autoridad G puede descubrirse aprendiendo a escuchar la frecuencia de la voz cuando la persona no está pensando"],
    
    [" La voz tendrá una calidad de transmisión, una expresión fluida que no se verá obstaculizada por la mente, o no lo hará"],
    
    [" Cuando un proyector G está hablando y siente que su expresión es restringida o poco clara, esto es una señal de que o bien no fueron invitados, o la mente está tratando de influir en la corriente de información"],
    
    [" El proyector G comienza a reconocerse mediante la interacción con el otro."],
    
    ["Con el tiempo, esto se convierte en una conciencia visceral, y puede experimentarse como una apertura o atracción desde el interior del cofre, como si el yo se levantara para encontrarse con la vida y se moviera en la dirección correcta"],
    
    [" Sentirse cómodo al expresarse sin censura mental, cuando es invitado, es una parte importante de la evolución de la autoridad de G."],
    
    ["En última instancia, se recomienda con esta autoridad que hables sobre cosas importantes en tu vida con otra persona para aclarar cuál es tu verdad"]
    ];

const egoCompleto = [
    [" La autoridad del ego es exclusiva de Manifestadores y Proyectores"],
    
    [" Es la más rara de todas las autoridades"],
    
    [" Hay dos autoridades del Ego: la autoridad manifestada y la autoridad proyectada"],
    
    ["Autoridad Manifestada"],
    
    ["La autoridad manifestada se activa mediante el canal -21-45"],
    
    [" Tu autoridad manifestada tiene que ver con la articulación de tu voz"],
    
    [" Tu autoridad se expresa verbalmente a través del centro de la garganta"],
    
    [" Es importante para ti escuchar lo que “dices” para conocer tu verdad, en vez de lo que está diciendo tu mente"],
    
    [" La autoridad del ego se experimenta cuando reconoces lo que dices o haces cuando no estás pensando"],
    
    ["Como manifestador, para informar necesitas verbalizar en el momento ya que no se trata piensas que deberías decir sino de lo que dices cuando no estás tratando de controlarlo"],
    
    ["El no-ser esta siempre intentando controlar lo que decimos y, de hecho, lo que dices de repente sin pensarlo (pasando por alto tu mente) es la verdad"],
    [" Si tratas de planear de alguna manera lo que vas a decir, pierdes la conexión con tu Autoridad"],
    
    [" Estas diseñado para tener impacto y es importante que confíes en lo que vas a decir sin que lo anule tu mente"],
    
    [" Tu verdad es rendirte a la verdad de tu voz; ahí se origina tu impacto"],
    
    [" Tu voz inicia y dirige tu vida. Tu voz guía y tu sigues. Confía en tu voz"],
    
    [" Una forma de experimentar es hablar con amigos que simplemente escuchen el tono de la verdad en su voz, sin tratar de influenciarlo"],
    
    ["Autoridad Proyectada"],
    
    ["La autoridad proyectada se activa mediante el canal - 25-51"],
    
    [" La clave es seguir tu Estrategia de Proyector y esperar a que te reconozcan inviten"],
    
    [" Necesitas personas en tu vida que te reconozcan y te inviten"],
    
    [" El liderazgo del Proyector es una fuerza poderosa en la vida de otras personas, y está aquí para guiarnos"],
    
    [" Cuando te invitan, tienes una enorme capacidad para ser una fuerza de transformación"],
    
    [" Cuando estés tomando una decisión, sé egoísta y pregúntate “¿Qué quiero? ¿Qué beneficio saco de esto?"],
    
    ["Mientras esperas que te reconozcan es importante que emplees tu tiempo en prepararte, aprendiendo algún sistema que te ayude a guiar a otros y tener éxito"],
    
    ["Porque el ego impulsado por la mente tiene una forma de dominar todo y todos en la búsqueda de lo quequiere, muchas personas con autoridad del ego tienen que aprender a usar este poder correctamente"],
    
    ["En realidad, es un proceso de desaprendizaje o reaprendizaje para dominar el uso preciso, saludable y correcto de esta fuerza, expresándose de forma natural en lugar de deseándose a sí mismo a través de la vida"],
    [" La autoridad del ego está arraigada en el uso correcto de la fuerza de voluntad"],
    
    [" El ego, cuando se utiliza adecuadamente, se compromete con algo que es correcto para ese ser"],
    
    [" La autoridad del ego se puede escuchar en la voz o ser experimentada como la fuerza de voluntad para completar algo"]
    ];


const bazoCompleto = [

    ["La autoridad de Spleen (Bazo), es exclusiva de Manifestadores y Proyectores"],
    
    [" La autoridad del bazo está enraizada en la supervivencia y es la conciencia más antigua y más existencial."],
    
    [" Nos une profundamente a nuestro pasado Spleen (Bazo) no sabe nada más que cómo sobrevivir ahora mismo"],
    
    ["La conciencia esplénica fluye a través de todo el sistema linfático del cuerpo como pequeñas lenguas, narices y oídos"],
    
    ["La autoridad del bazo se siente como una resonancia o reconocimiento inmediato de algo o alguien y esa sensación se conocimiento interno de si es sano y adecuado para ti o no"],
    
    [" Se puede experimentar como una sensación de alerta total en forma de gato"],
    
    ["Sin embargo, para la mayoría de las personas, esta es la conciencia más difícil de acceder, ya que es silenciosa y débil en comparación con la mente y las emociones"],
    
    ["Nuestra inteligencia altamente evolucionada para la supervivencia nos alerta de qué entornos, dirección, oportunidades o personas son seguros y ventajosos para que nos involucremos con ellos y cuáles no."],
    
    [" El bazo habla suavemente una vez y nunca se repite"],
    
    [" No permitir que tu mente, o las necesidades emocionales, deseos o presiones de otros te induzcan a cuestionar o invalidar los mensajes de tu Centro del Bazo"],
    
    [" Permanecer en el presente y sintonizar con lo que te está diciendo tu cuerpo es crucial para tu supervivencia"],
    
    [" Requiere un profundo nivel de atención a muchas sensaciones psicológicas sutiles la habilidad de actuar si es necesario corregir sin importar cuales son las consecuencias"],
    
    [" El Bazo no es consciente del futuro y puede que diez minutos, una hora un día después cambie lo que era correcto para ti y tu actividad"],
    
    [" Volver a conectar con tu bazo requiere experimentación y una profunda confianza en la sabiduría inherente de tu vehículo para llevarte a salvo donde, como y con quien necesites ir"],
    
    [" La mayoría de las personas tiene dificultades para acceder realmente a esta conciencia antigua"],
    
    [" Las decisiones hay que tomarlas en el momento. Si esperas, el momento y la información se han ido"],
    
    [" Si alguna vez no está claro, regresa a tu aura. Eso te ayudará a aterrizarte."],
    
    ["El bazo básicamente dice SÍ hasta que dice NO, y NO puede ser bastante cortante e incluso violento; sin embargo, debe ser obedecido para su propia supervivencia"],
    
    [" Con el tiempo, el bazo puede desarrollarse y convertirse en una sensación de 'golpe' corporal ligero visceral, como 'esto es muy saludable' "],
    
    [" El principal trabajo del bazo es decir NO a cualquier cosa que ponga en peligro su salud."]
    ];

const plexoCompleto = [

    ["Cuando el Plexo Solar se define en el Diseño de alguien, significa que su autoridad es emocional."],
    
    ["Cuando se define el plexo solar, tiene preferencia sobre los demás centros de autoridad de la carta"],
    
    [" La autoridad emocional está enraizada en sentir en lugar de pensar"],
    
    [" No es lógico y uno nunca debería tratar de buscar la explicación"],
    
    ["El Plexo Solar opera través de una ola emocional y que esperar a la claridad es la clave para vivir en armonía "],
    
    [" Las emociones funcionan en una ola, pasando de la esperanza al dolor y viceversa"],
    
    [" Es al sentir estos movimientos que se puede experimentar la autoridad emocional."],
    
    [" La autoridad emocional es lenta y nunca debe apresurarse."],
    
    ["Es una conciencia increíblemente profunda del medio ambiente, como un radar emocional que se extiende para SENTIR lo que es bueno para ti"],
    
    [" Para un ser emocional, debes sentir la situación o las personas durante un período de tiempo, desde diferentes puntos en tu ola, a fin de extraer la verdad real de ella"],
    
    [" Es una buena idea alejar a las personas y las decisiones durante el mayor tiempo posible"],
    
    ["Nunca estarás seguro, se sentirá bien o no. Es por eso que decimos: \"No hay verdad en el ahora para el ser emocional\". El lema es: “No hay verdad en el ahora”"],
    
    [" La verdad se revela en su plenitud con el paso del tiempo y eventualmente aflora como una sensación de claridad"],
    
    [" La paciencia es el componente clave al esperar a ir pasando por la ola emocional antes de tomar una decisión"],
    
    [" Como no hay verdad en el momento, las decisiones espontáneas no son fiables, ya que se tratan de decisiones basadas en el no-SER "],
    
    [" Cada vez que comiences a pensar, recuerda: se trata de lo que sientes, no de lo que piensas."],
    
    ["El tiempo es la clave, cuanto más tiempo mejor, ese tiempo establece una distancia entre el momento que se pide una decisión y la decisión misma. Según esperas iras adquiriendo claridad, aunque la claridad o certeza total, suele se inusual "],
    
    [" El objetivo es tener la mayor claridad posible "],
    
    ["Lo mejor es evitar tomar decisiones en los momentos cargados emocionalmente de altos y bajos, ya que eso solo aporta mas caos"],
    
    ["Si pides a los otros que esperen mientras te tomas tu tiempo para decidir, puede que tú o tus habilidades les parezcan aún mas esenciales y atractivas, asumiendo que el ofrecimiento es correcto para ambas partes"]
    ];


const autoridadFijo = [

    ["Tu mente te intenta engañar tratando de ser la autoridad en tu vida, convencida de que sabe lo que te conviene"],
    
    ["Tu mente utilizará y pensará cualquier cosa para mantener su apariencia de control y te dará todas las escusas y razonamientos, uno tras otro para hacerse con el control "],
    
    ["Cuando defines y respetas tu verdadera autoridad, tu mente puede ser un poderoso aliado"],
    
    ["Has de profundizar en tu estrategia, tu tipo y tu autoridad para así liberar tu mente para que observe la vida como si fuera un pasajero relajado y reflexivo, capaz de disfrutar de su viaje y desempeñar su papel como autoridad externa para los demás "],
    
    ["La autoridad nos enseña a vivir a los seres humanos tomando las decisiones que nos son correctas individualmente "],
    
    ["Nos han condicionado para buscar aprobación y autoridad fuera de nosotros y tomar las decisiones con la mente"],
    
    ["Cuando aprendemos a emplear nuestra Estrategia y Autoridad, nos alineamos con nuestra Geometría Única (nuestro camino) "],
    
    ["Siendo auténticos nuestra composición genética, nuestra razón para encarnarnos y nuestra unicidad se expresan a través de nosotros como nuestro SER Verdadero y las cosas encajan de manera natural como, donde vivimos, nuestro trabajo y nuestras relaciones "],
    
    ["Una vez la mente se ha liberado de tomar decisiones, puede tomar su legitimo lugar en nuestra vida como un testigo preciado y valioso además de ser muestra autoridad externa para los demás "],
    
    ["Si seguir nuestra estrategia nos conecta con nuestra propia autoridad personal. Cuando operamos siendo nuestro ser auténtico único, nuestros centros sin definir se convierten en lugares de gran sabiduría."],
    
    ["En vez de condicionarnos de una manera distorsionada, estos centros sin definir los informan clara y exactamente de lo que está sucediendo en nuestro mundo que nos rodea. Una vez que estamos bien encaminados y alineados con nuestra geometría correcta, la mente puede empezar a revelar su propio potencial como una extraordinaria autoridad externa para los demás."],
    ,
    [" Puede expresar nuestra inteligencia, comunicarse con otros para compartir nuestras experiencias y percepciones únicas e inspirarles con lo que hemos aprendido. "],
    
    [" La mente está aquí para pensar, cuestionar, interpretar, enseñar, inspirar, recordar, organizar, nombrar y procesar datos."],
    
    [" Estas son las maneras en que podemos compartir los dones de nuestra mente con quienes están aquí para recibirnos y responder a ellos desde su propia autoridad punto"],
    
    [" Cuando más practiquemos nuestra estrategia y autoridad y liberemos a la mente de tomar decisiones coma más valiosas se vuelve nuestra autoridad externa para los demás."],
    
    ["Una vez que estamos alineados con nuestra verdadera naturaleza, estamos sintonizados con nuestra propia fuerza vital y nuestro auténtico propósito de vida. Entonces surge de la mente algo de valor único, algo que los demás han estado esperando oír. Y nuestra mente liberada recupera el potencial para expresar finalmente nuestra razón única para encarnarnos "]
    ];

const estrategiasReflector = [
    ["Los reflectores no tienen definición fija en su carta, ninguna fuente fiable de autoridad personal "],
    
    ["No hay ninguna fuente fiable para el “sí” o el “no” dentro de ellos para guiarlos a tomar decisiones importantes en su vida "],
    
    ["La estrategia del reflector es conectar con el ciclo lunar, el viaje de la luna alrededor del Mandala, que dura aproximadamente  días y abarca las  puertas de la rueda "],
    
    ["Este patrón fiable y repetitivo proporciona al reflector una sensación de consistencia comparable, aunque no idéntica, a tener una definición fija "],
    
    [" Los reflectores necesitan ser iniciados para tomar las grandes decisiones de su vida "],
    
    ["Su ciclo lunar comienza cuando se les ha hecho una oferta importante o alguien les ha invitado a poner en marcha un proceso"],
    
    ["Ellos no pueden iniciar, según avanzan hacia la claridad a través de su ciclo lunar, sus percepciones de reflector van cambiando durante este tiempo y querrán hablar con otros, no para buscar consejo, sino para articular sus propios pensamientos y oír su propia verdad potencial "],
    
    ["La calidad de sus asociaciones y la manera en que su aura filtra el mundo que les rodea, con el tiempo refina su forma de tomar decisiones"],
    
    [" Necesitan que se les anime a tomarse su tiempo y no permitir que les presionen o le metan prisa "],
    
    [" De pronto, sabrán en lo hondo de sí, si la oferta era adecuada para ellos o no "],
    
    [" Sin embargo, sí han completado el ciclo lunar y todavía no lo tienen claro, es aconsejable que esperen a que llegue la claridad, teniendo presente qué puede llevarles más de un ciclo "],
    
    ["Aunque esta fase lunar para tomar las decisiones es específica de los reflectores, todos los tipos se pueden beneficiar comprendiendo la influencia repetitiva, pero transitoria de la luna en sus vidas "],
    
    ["Seguir la manera en que el ciclo lunar conecta con tu propia carta es un proceso fascinante"]
    ];


const estrategiasProyector = [
    ["Tu estrategia, Es ser Reconocido y esperar la Invitación "],
    
    [" Los Proyectores estáis diseñados para ser vistos. La gente siempre se fija en los Proyectores"],
    
    ["Cuando los Proyectores son reconocidos de verdad, sienten en su fuero interno que ya no hay dudas"],
    
    ["Vuestra estrategia y proceso de tomar decisiones, es la de esperar a ser reconocidos y después invitado. Ese reconocimiento e invitación llegan del silencio"],
    
    ["Cuando como proyectores comprendéis que esperar desde el silencio es vuestra cualidad de estar listos, observareis como vuestra potente aura atrae a la gente y su reconocimiento "],
    
    ["Cuando has sido reconocido e invitado correctamente, tus dones y habilidades se potencian y te sentiras lleno de energía que, aunque no es tuya, puedes emplearla en tu beneficio y en el de los demás "],
    
    ["Esa invitación que esperas, podríamos definirla como una invitación formal y a largo plazo, estás esperando que los que te invitan, reconozcan, soliciten y potencien tus habilidades especiales "],
    
    ["Esa invitación, te proporciona acceso a los recursos energéticos iniciadores que normalmente te vendrán de un generador. La relación del Generador y el Proyector es interdependiente, ya que ninguno de los dos tenéis el poder de satisfacer vuestro propósito sin el otro "],
    
    ["Normalmente las invitaciones que te vendrán son aplicables a las cuatro decisiones principales que vas a tener que tomar en tu vida. La invitación a amar, a una carrera profesional, a establecer vínculos con otros y a elegir un lugar en el que vivir "],
    
    ["Como Proyector, una vez que has recibido la invitación y la has aceptado, emplearás todas tus habilidades de que dispones para completar tu compromiso, mientras quien te invitó permanezca abierto, receptivo y dispuesto a desempeñar su papel. Esto puede durar una semana, unos meses, años o el resto de tu vida, dependiendo del compromiso acordado"],
    
    ["Cuando adquieres un compromiso a largo plazo, necesitas poner todo tu empeño en seguir tu Estrategia y Autoridad"],
    
    ["Otro paso importante para ti es el de ser selectivo. El hecho de recibir una invitación no significa automáticamente que sea la correcta para ti, tu autoridad te guiara a encontrar la energía que te es propicia"],
    
    ["Tu proceso de tomar decisiones es único y la mejor manera de saber cuál es la invitación correcta, es medir el nivel de resistencia que notas al decidir sobre ella. Con el tiempo y al ir aumentando tu conciencia, tu capacidad para reconocer las invitaciones correctas mejorará y ese proceso básico para ti, se irá refinando "],
    
    ["Cuando eres reconocido e invitado correctamente, de pronto notarás que tienes acceso a la energía fiable de otros, lo que a su vez libera tus propios dones de Proyector y tu autoridad Externa."],
    
    ["Has de tener presente que todas las invitaciones tienen una fecha de caducidad, cuando la invitación pierde su energía o excitación, es posible que ya te haya sido retirada, o que el trabajo para el que se te invitó, este completado, y quizás tú no te has dado cuenta de ello y pienses que las cosas ya no funcionan, en ese momento, es necesario hablar de la situación con la persona que te reconoció para aclarar el estado de la invitación y seguir con ella o darla por terminada "],
    
    ["Una vez que te has alineado con tu propio poder, puedes dejar que tu aura hable por ti, tu espera silenciosa, es la mejor manera de suscitar las invitaciones correctas y notaras gradualmente que las invitaciones que no se basaban en el reconocimiento, irán desapareciendo poco a poco"],
    
    [" Si confías en la magia silenciosa de tu química, no hay necesidad de que te invites a ti mismo, las oportunidades llegaránEstrategia en el Sistema de Diseño Humano"],
    
    
    ["Has de intentar encontrar un lugar en tu hogar, libre de otras auras, donde retirarte para relajarte apropiadamente y poder soltar las energías que has absorbido durante todo el día, con el tiempo, aprenderás a realizar esas retiradas energéticas con mucha diplomacia "],
    
    ["De la misma manera es importante para ti, en la medida de lo posible, dormir solo, ya que el % de la población está generando energía generadora y necesitas desconectar y tener un descanso reparador "],
    
    [" Has de conseguir un equilibrio sano entre actividad y descanso y aprender a notar cuando ya es suficiente, cuando soltar la energía áurica residual de otros y estar solo"]
    ];



const estrategiasManifestador = [
    ["Tu estrategia, es Informar"],
    
    ["Tienes una reputación de representar una amenaza al orden y estabilidad, necesitando tomar el control de la situación."],
    
    ["Con frecuencia, las personas se sienten ignoradas y atropelladas por los Manifestadores y, en consecuencia, tienden a tenerle miedo."],
    
    ["A la inversa, tu como Manifestador@ creces condicionad@ por el miedo a ser controlad@ y te revelas haciendo lo opuesto de lo que es saludable para ti"],
    
    ["Tu aura repelente, hace que las demás auras se contraigan y se ponen a la defensiva tratando de protegerse"],
    
    ["La mayoría de los malentendidos y confusiones interpersonales entre los tipos se establecen energéticamente muy por debajo de nuestro nivel de consciencia, antes incluso que hayas iniciado la comunicación verbal"],
    
    ["Tu sencilla estrategia de Informar, zanja la interacción áurica tan cargada con los demás y abre eficazmente el camino a la comunicación clara, productiva y pacífica."],
    
    ["Informar es la única manera que tienes para superar las resistencias y encontrar la libertad que necesitas para manifestar "],
    
    ["Técnicamente, necesitas informar después de haber tomado una decisión, pero antes de actuar, o al menos cuando estás actuando, igualmente debes hacerlo si decides no seguir haciendo algo, informa siempre."],
    
    [" Aunque informar para ti, está lejos de ser agradable y natural, la vida es mucho más fácil cuando aprendes a hacerlo y lo haces bien"],
    
    [" Solo informando puedes eliminar las resistencias en tu camino y tranquilizar a los demás áuricamente, sin ser ni pasivo ni agresivo "],
    
    ["De niñ@ para ti informar adoptaba la forma de aprender a tener modales y pedir permiso, sin embargo, en edad temprana optas por no pedir permiso o informar, bien porque te parece demasiada molestia o porque piensas que, si lo mantienes en secreto, lo que vas a hacer evita ser rechazado o controlado"],
    
    ["Como Manifestaror@ no necesitas a la gente de la misma manera que los demás, ni te preocupa como los demás te perciben"],
    
    ["Te sientes bien cuando puedes liberar tu poder iniciador preparando a las personas sobre como podrán verse afectadas por sus acciones, entonces notarás un nuevo tipo de apoyo y receptividad de tu entorno"],
    
    ["Cuando la resistencia ya no es un problema, disminuye la rabia y prevalece la paz, además de sentirte honrada y respetada cuando los demás te incluyen e informan."],
    
    ["Para ponerte en perspectiva pondremos un ejemplo sencillo"],
    
    ["Vas a trabajar y a media mañana te das cuenta de que tu trabajo no te llena y parece un empleo sin porvenir."],
    
    ["Llena de excitación y dejándote guiar por tu visión, empacas las cosas de la oficina, dejas la carta de dimisión en la mesa del jefe, te despides, les deseas suerte a todos y te vas. Has sembrado el caos, nadie lo entiende porque nadie ha sido informado y preparado adecuadamente para tu decisión. El jefe se quedó sin su ayudante, los compañeros se preguntan que habrán hecho para ofenderte y tu familia se preocupa por tu seguridad y futuro, has impactado en la vida de todos por tu brusquedad al tomar tu decisión sin informar a nadie."],
    
    [" Tienes tu plan de acción y no necesitas el consejo o comentario de nadie para hacerlo realidad. "],
    
    ["Sin embargo, acordarte de informar a todos los implicados en tu decisión habría reducido no solo la resistencia, sino que también podía haberte proporcionado apoyo para llevar a cabo tu nuevo camino en paz."],
    
    [" Informar te prepara el camino para manifestar, es tu única solución correcta"],
    
    ["Esta estrategia parece fácil y lógica, sin embargo, la mayoría de los Manifestadores pensáis que estáis solos en el mundo, e informar es lo último que se os ocurre de manera natural. Cuando te tomas el tiempo para escribir los nombres de todas las personas posiblemente afectadas por tu futura decisión, te darás cuenta de que no estás tan aislada y que tus decisiones impactaran. "],
    
    ["Cuando te haces consciente de tu impacto en los demás, la lógica de informar te resultará evidente, y ese conocimiento por si solo puede transformarte."],
    
    [" Informar en el fondo es una forma de mostrar respeto por las otras personas, cuando no les informas, los demás lo toman como una falta de consideración y te ignoraran "],
    
    [" Informar desvanece el miedo y fortalece la confianza, lo que a su vez disuelve la necesidad de control por todas las partes "],
    
    ["Para lograr la expresión total de tu potencial cognitivo y tener el impacto adecuado, debes actuar de acuerdo con tu verdad interna y no de la mente, Si decides hacer algo usando la mente, simplemente para liberar la presión de poner algo en marcha, encontraras resistencia"]
    ];

const estrategiasGenerador = [
    ["Tu estrategia, es ir respondiendo minuto a minuto a los estímulos de la REALIDAD EXTERNA"],
    
    ["Tu Sacral es tu mecanismo de respuesta y si actúas desde esa capacidad para responder, te convertirás en un ser muy poderoso, ya que fluirás desde tu aura "],
    
    ["Tienes que aprender a no iniciar nada, esperar, escuchar atentamente a tu Sacral y responder a los acontecimientos que te traiga la vida."],
    
    ["Espera a que un estímulo externo te haga una pregunta, entonces, escucha la respuesta de tu Sacral y confía en esa respuesta "],
    
    [" Como verás, por un lado, tienes la espera activa y por el otro la respuesta"],
    
    [" ¿Te preguntarás que es la espera activa? . Es fácil, es la Realidad exterior Vs. La realidad mental"],
    
    ["No te preocupes, la espera no es inacción, es un estado de alerta consciente, estas disponible y receptivo a los estímulos que te llegan."],
    
    [" En cierta manera te pareces al cazador esperando su mejor momento de atrapar a su presa "],
    
    ["Recuerda que tu aura es acogedora, abierta, envolvente, por lo que estas en todo momento atrayendo las oportunidades a las que tendrás que responder"],
    
    [" Tienes que entender que te comportas como un agujero negro mágico que atrae a todo el mundo hacia ti."],
    
    [" Realmente actúas como in imán, así que confía en saber esperar y ten paciencia."],
    
    [" ¿Y te preguntarás que estoy esperando?"],
    
    [" Espera cualquier estimulo que no venga de tu mente, que no sea un pensamiento, una idea, un "],
    ["concepto un juicio."],
    
    [" Estate atento y notaras ese estimulo, a veces sutil del entorno. Pueden ser sonidos, estímulos visuales, incluso palabras que surgen de una conversación o situaciones de tu vida diaria "],
    
    ["Un ejemplo: Si vas por el jardín y ves que las plantas necesitan podarse, a ese estímulo responderá tu Sacral si tiene o no energía disponible para realizar la terea"],
    
    ["También puedes ser una pregunta o propuesta que te realice una persona, preguntas que sus respuestas son: “SI” “NO” o “NO SE”"],
    
    [" ¿Quieres ir a cenar?, ¿Jugamos al Ping Pong? ¿Puedo pedirte que me ayudes en algo?, etc."],
    
    ["La dificultad como Generador, es que careces de paciencia y enseguida entras en acción, y eso te pasa por dos motivos"],
    
    ["Desconoces la conciencia del cuerpo, al no saber que la inteligencia que nos guía reside precisamente en el cuerpo, por eso has de tener en cuenta tus sensaciones corporales antes de tomar una decisión "],
    
    ["No esperar para responder, ya que ignoras tu capacidad genética para atraer a los otros y piensas que, si no te esfuerzas, nadie vendrá a llamarte para proponerte cosas."],
    
    [" Por esa razón, todos los Generadores están pensando en si los otros ¿me preguntarán? "],
    
    [" Cuando confíes en tu naturaleza, verás como el mañana te proveerá de lo que necesites. "],
    
    [" Necesitas el coraje para llegar a ese nivel de entrega y lograr rendirte a la vida"],
    
    [" Tu diseño como Generador esta creado para que te rindas a la vida, desde el significado más profundo de la palabra"],
    
    [" Ríndete y veras como no hay mañana, no hay mañana, veamos que viene ahora, nada más………. y en ese momento empezarás a ver la belleza de dejarte fluir"],
    
    [" ¿Y una vez me realizan esas preguntas, como respondo?"],
    
    ["Como Generador, tienes un sorprendente sistema de guía interior que la naturaleza te ha otorgado, es el Sacral con su respuesta visceral a cualquier cosa de la vida y su entorno te pregunte."],
    
    ["Tu aura recibe con los brazos abiertos todo lo que venga del exterior y si empleas tu autoridad responderás de forma correcta"],
    
    [" ¿Y cómo manifiesto es respuesta? "],
    
    [" En algunas ocasiones será un sonido gutural “Ahhá” (si), “Hum mm” (no) o Mmm (no sé) y no van acompañados de lenguaje "],
    
    [" En otras ocasiones notaras una subida o bajada de tu energía interna"],
    
    ["También puedes sentir la sensación de abrirme o cerrarme a una experiencia o la de sentir que algo te atrae o rechazas"],
    
    [" Tienes que saber que una vez has tomado la decisión, te cuesta muchísimo cambiar de rumbo y que solo lo harás al responder con lo que siente tu Sacral a una nueva pregunta "],
    
    ["Has de tener en cuenta que tu respuesta Sacral es pura inteligencia en crudo y no se puede traducir en palabras, es puramente energética y traspasa la consciencia, no se involucra con filosofía, política o religión "],
    
    [" Es tan simple que la mente no la quiere tener en cuenta y la descalifica, pero, es lo más verdadero para ti como Generador"],
    
    ["Cuando despiertes tu Sacral, sabrás “si me gusta” o “no me gusta” y aprenderás a escuchar y responder desde la inteligencia del cuerpo, despertándote una frecuencia de energía que te abrirá la consciencia y la capacidad de conocer que hacer y con quien hacerlo"],
    
    ["Si vives de acuerdo con tu naturaleza, alcanzarás un estado de consciencia conectado a la sincronicidad que reina en el Universo"],
    
    [" Entrarás en un estado que no podrás hacer otra cosa que seguir fluyendo con la vida"]
    ];




    const estrategiasGeneradorManifestante = [
        ["Tu estrategia, es ir respondiendo minuto a minuto a los estímulos de la REALIDAD EXTERNA. Haciendo un símil, siempre tienes el coche en marcha con el pie puesto en el acelerador, "],
        
        ["Tu tendencia es iniciar, siempre inquieto, listo para entrar en cualquier cosa en cualquier situación, sin esperar ni escuchar "],
        
        ["Tu Sacral es un mecanismo de respuesta y si actúas desde esa capacidad para responder te convertirás en un ser muy poderoso, ya que fluirás desde tu aura y tu existencia"],
        
        ["Tienes que aprender a no iniciar nada, esperar, escuchar atentamente a tu Sacral y responder a los acontecimientos que te traiga la vida."],
        
        ["Espera a que un estímulo externo te haga una pregunta, entonces, escucha la respuesta de tu Sacral y confía en esa respuesta "],
        
        ["Necesitas práctica y paciencia para establecer tu conexión con el Sacral, siendo esa sensación un movimiento hacia lo que te atrae, más que un sonido, la paciencia y el aplomo son indispensables para ti "],
        
        ["El proceso es el siguiente:"],
        
        [" Esperar el estímulo y siente la respuesta de tu Sacral "],
        
        [" Esperar un tiempo hasta tener la respuesta clara"],
        
        [" Si la respuesta es clara y es un “SI”, antes de entrar en acción, debes informar a las personas involucradas "],
        
        [" Pasar a la acción"],
        
        [" Como verás, por un lado, tienes la espera activa y por el otro la respuesta"],
        
        [" ¿Te preguntarás que es la espera activa? . Es fácil, es la Realidad exterior Vs. La realidad mental"],
        
        [" No te preocupes, la espera no es inacción, es un estado de alerta consciente, estas disponible y "],
        ["receptivo a los estímulos que te llegan."],
        
        [" En cierta manera te pareces al cazador esperando su mejor momento de atrapar a su presa "],
        
        [" Recuerda que tu aura es acogedora, abierta, envolvente, por lo que estas en todo momento atrayendo las oportunidades a las que tendrás que responder"],
        
        ["Tienes que entender que te comportas como un agujero negro mágico que atrae a todo el mundo "],
        ["hacia ti."],
        
        [" Realmente actúas como in imán, así que confía en saber esperar y ten paciencia."],
        
        [" ¿Y te preguntarás que estoy esperando?"],
        
        [" Espera cualquier estimulo que no venga de tu mente, que no sea un pensamiento, una idea, un "],
        ["concepto un juicio."],
        
        [" Estate atento y notarás ese estimulo, a veces sutil del entorno. Pueden ser sonidos, estímulos visuales, incluso palabras que surgen de una conversación o situaciones de tu vida cotidiana"],
        
        [" Un ejemplo: Si tu casa ves que necesita una mano de pintura, a ese estímulo responderá tu Sacral si tiene o no energía disponible para realizar la terea"],
        
        [" También puedes ser una pregunta o propuesta que te realice una persona, preguntas que sus respuestas son: “SI” “NO” o “NO SE”"],
        
        [" ¿Quieres ir a cenar?, ¿Jugamos al Ping Pong? ¿Puedo pedirte que me ayudes en algo?, etc."],
        
        ["La dificultad como Generador, es que careces de paciencia y enseguida entras en acción, y eso te pasa por dos motivos"],
        
        [" Desconoces la conciencia del cuerpo, al no saber que la inteligencia que nos guía reside precisamente en el cuerpo, por eso has de tener en cuenta tus sensaciones corporales antes de tomar una decisión Estrategia en el Sistema de Diseño Humano"],
        
        
        ["No esperas para responder, ya que ignoras tu capacidad genética para atraer a los otros y que piensas que, si no te esfuerzas, nadie vendrá a llamarte para proponerte cosas."],
        
        [" Por esa razón todos los Generadores están pensando en si los otros ¿me preguntarán? "],
        
        [" Cuando confíes en tu naturaleza, verás como el mañana te proveerá de lo que necesitas. Has de tener coraje para llegar a ese nivel de entrega y lograr rendirte a la vida"],
        
        ["Tu diseño como Generador esta creado para que te rindas a la vida, desde el significado más profundo de la palabra"],
        
        ["Ríndete y veras como no hay mañana, no hay mañana, veamos que viene ahora, nada más………. y en ese momento empezarás a ver la belleza de dejarte fluir"],
        
        ["¿Y una vez me realizan esa pregunta, es propuesta, como respondo?"],
        
        ["Como Generador, tienes un sorprendente sistema de guía interior que la naturaleza te ha otorgado, es el Sacral con su respuesta visceral a cualquier cosa que la vida y su entorno te pregunte."],
        
        ["Tu aura recibe con los brazos abiertos todo lo que venga del exterior, si empleas tu autoridad auténticamente, tu respuesta será la correcta"],
        
        [" ¿Y cómo manifiesto es respuesta? "],
        
        ["En algunas ocasiones será un sonido gutural “Ahhá” (si), “Hum mm” (no) o Mmm (no sé) y no van acompañados de lenguaje "],
        
        ["En otras ocasiones notaras una subida o bajada de tu energía interna"],
        
        ["También puedes sentir la sensación de abrirte o cerrarte a una experiencia o la de sentir que algo te atrae o lo repele"],
        
        [" Tienes que saber que una vez has tomado la decisión, te cuesta muchísimo cambiar de rumbo y que solo lo harás al responder con lo que siente tu Sacral a una nueva pregunta o propuesta"],
        
        ["Has de tener en cuenta que tu respuesta Sacral es pura inteligencia en crudo y no se puede traducir en palabras, es puramente energética y traspasa la consciencia y no se involucra con filosofía, política o religión "],
        
        ["Es tan simple que la mente no la quiere tener en cuenta y la descalifica, pero, es lo más verdadero para ti como Generador"],
        
        ["Cuando despiertes tu Sacral, sabrás “si me gusta” o “no me gusta” y aprenderás a escuchar y responder desde la inteligencia del cuerpo, despertando una frecuencia de energía que te abrirá la consciencia y la capacidad de conocer que hacer y con quien hacerlo"],
        
        ["Como además de generador eres también manifestador, cuando tomes la decisión de actuar, a fin de estabilizar la energía de los demás involucrados en la decisión, debes informarles acerca de la misma, no se trata de pedir permiso, sino simplemente de intentar que los otros se sientan tenidos en cuenta, de esta forma no generarás resistencias y tu energía fluirá en libertad"],
        
        ["Al respetar tu estrategia, evitará que te comprometas con aquellas personas y actividades que no son correctas para ti y así, el número de abandonos, serán los correctos"],
        
        ["Cuando abandonas una experiencia, hay dos formas hacerlo, quedándote con una sensación de frustración muy fuerte o viendo lo positivo y el aprendizaje que te ha aportado"],
        
        ["Cuando respetes tu estrategia, y te des cuenta de que la experiencia no es la que buscabas, y decides dejarlo, puedes abandonar con la frente en alto, sin cargar con ninguna frustración, ya que podrás conectar con lo positivo que te dejó dicha experiencia, todo lo contrario, pasa si te has dejado llevar de forma apresurada, siguiendo un mandato mental sin respetar tu estrategia, lo que te hará sentir frustrado y vacío "],
        
        ["Si vives de acuerdo con tu naturaleza, alcanzarás un estado de consciencia conectado a la sincronicidad que reina en el Universo"],
        
        [" Entrarás en un estado que no podrás hacer otra cosa que seguir fluyendo con la vida"]
        ]    

        const angulos = [

            ["13/7" , "2/1" , "Angulo Derecho", "de la Esfinge 1"],
            
            ["13/7","23/43","Yuxtapuesta", " de Escuchar "],
            ["13/7", "23/43","Angulo Izquierdo", "de las Máscaras 1"],
            
            ["49/4","23/43", "Ángulo Derecho", "de la Explicación 1"],
            
            ["49/4","14/8","Yuxtapuesta", "de los Principios"],
            
            ["49/4", "14/8","Angulo Izquierdo", " de la Revolución 1"],
            
            ["30/29","14/8","Angulo Derecho", "del Contagio 1"],
            
            ["30/29","20/34","Yuxtapuesta", "de los Hados "],
            ["30/29", "20/34","Angulo Izquierdo", "de la Industriosidad 1"],
            
            ["55/59","20/34","Angulo Derecho", "del Fénix Dormido 1"],
            ["55/59", "16/9","Yuxtapuesta", " de los Ánimos Cambiantes"],
            ["55/59","16/9","Angulo Izquierdo", "del Espíritu 1"],
            
            ["37/40","16/9","Angulo Derecho", " de la Planificación 1 "],
            ["37/40","35/5","Yuxtapuesta", "de los Contratos"],
            
            
            
            
            ["37/40","35/5","Angulo Izquierdo", "de la Migración 1"],
            
            ["63/63","35/5","Angulo Derecho", "de la Conciencia 1"],
            ["63/64","45/26","Yuxtapuesta", "de las Dudas"],
            ["63/64","45/26","Angulo Izquierdo", "del Dominio 1"],
            
            ["22/47","26/45","Angulo Derecho", "del Gobierno 1"],
            ["22/47","12/11","Yuxtapuesta", "de la Gracia"],
            ["22/47","12/11","Angulo Izquierdo", "de Informar 1"],
            
            ["36/6","12/11","Angulo Derecho", "del Edén 1"],
            ["36/6","15/10","Yuxtapuesta", "de la Crisis"],
            ["36/6","15/10","Angulo Izquierdo", "del Plano 1"],
            
            ["25/46","15/10","Angulo Derecho", "del recipiente de Amor 1 "],
            ["25/46","58/52","Yuxtapuesta", "de la Inocencia 1"],
            ["25/46","58/52","Angulo Izquierdo", "de la Sanación 1"],
            
            
            ["17/18","58/52","Angulo Derecho", "del Servicio 1"],
            ["17/18","38/39","Yuxtapuesta", "de las Opiniones "],
            ["17/18", "38/39","Angulo Izquierdo", "del Tumulto, levantamiento 1"],
            
            
            
            
            
            ["21/48","38/39","Angulo Derecho", "de la Tensión 1"],
            ["21/48","54/53","Yuxtapuesta", "del Control"],
            ["21/48","54/53","Angulo Izquierdo", "del Esfuerzo 1"],
            
            ["51/57","54/53","Angulo Derecho", " de la Penetración 1"],
            ["51/57","61/62","Yuxtapuesta", "del Shock"],
            ["51/57","61/62","Angulo Izquierdo", "del Clarín 1"],
            
            ["42/32","61/62","Angulo Derecho", "del May 1"],
            ["42/32","60/56","Yuxtapuesta", "de la Plenitud"],
            ["42/32","60/56","Angulo Izquierdo", "de los Límites 1"],
            
            ["3/50","60/56","Angulo Derecho", "de las Ley 1"],
            ["3/50","41/31","Yuxtapuesta", "de la Mutación"],
            ["3/50","41/31","Angulo Izquierdo", "de los Deseos 1"],
            
            ["27/28","41/31","Angulo Derecho", "de lo Inesperado 1 "],
            ["27/28","19/33","Yuxtapuesta", "del Cuidado"],
            ["27/28","19/33","Angulo Izquierdo", "del Alinearse 1"],
            
            ["24/44","19/33","Angulo Derecho", "de los Cuatro Caminos 1"],
            ["24/44","13/7","Yuxtapuesta", "de la Racionalización 1 "],
            ["24/44","13/7","Angulo Izquierdo", "de la Encarnación 1"],
            
            
            ["2/1","13/7","Angulo Derecho", "de la Esfinge 2"],
            ["2/1","49/4","Yuxtapuesta", "del Chauffeur (conductor)"],
            ["2/1","49/4","Angulo Izquierdo", "del Desafío 1"],
            
            ["23/43","49/4","Angulo Derecho", "de la Explicación 2"],
            ["23/43","30/29","Yuxtapuesta", "de la Asimilación"],
            ["23/43","30/29","Angulo Izquierdo", "de la Dedicación 1"],
            
            
            
            
            ["8/14","30/29","Angulo Derecho", "del Contagio 2"],
            ["8/14","55/59","Yuxtapuesta", "de la Contribución"],
            ["8/14","55/59","Angulo Izquierdo", "de la Incertidumbre 1"],
            
            ["20/34","55/59","Angulo Derecho", "del Fénix Dormido 2"] ,
            ["20/34","37/40","Yuxtapuesta", "del Ahora"],
            ["20/34","37/40","Angulo Izquierdo", "de la Dualidad 1"],
            
            ["16/9","37/40","Angulo Derecho", "de la Planificación 2"],
            ["16/9","63/64","Yuxtapuesta", "de la Experimentación"],
            ["16/9","63/64","Angulo Izquierdo", " de la Identificación 1"],
            
            ["35/5","63/64","Angulo Derecho", "de la Conciencia 2 "],
            ["35/5","47/22","Yuxtapuesta", " de la Experiencia"],
            ["35/5","47/22","Angulo Izquierdo", "de la Separación 1"],
            
            ["45/26","47/22","Angulo Derecho", "del Gobierno 2"],
            ["45/26","36/6","Yuxtapuesta", "de la Posesión "],
            ["45/26", "36/6","Angulo Izquierdo", "de la Confrontación 1"],
            
            ["12/11","36/6","Angulo Derecho", "del Edén 2"],
            ["12/11","25/46","Yuxtapuesta", "de la Articulación"],
            ["12/11","25/46","Angulo Izquierdo", "de la Educación 1"],
            
            ["15/10","25/46","Angulo Derecho", "del Recipiente de Amor 2 "],
            ["15/10","17/18","Yuxtapuesta", "de los Extremos"],
            ["15/10","17/18","Angulo Izquierdo", "de la Prevención 1"],
            
            ["52/58","17/18","Angulo Derecho", "del Servicio 2"],
            ["52/58","21/48","Yuxtapuesta", "de la Quietud "],
            ["52/58","21/48", "Angulo Izquierdo", "de las Exigencias 1"],
            
            ["39/38","21/48","Angulo Derecho", "de la Tensión 2 "],
            ["39/38","51/57","Yuxtapuesta", "de la Provocación"],
            ["39/38","51/57", "Angulo Derecho", "del Individualismo 1"],
            
            ["53/54","51/57","Angulo Derecho", "de la Penetración 2"],
            ["53/54","42/32","Yuxtapuesta", "de los Comienzos"],
            ["53/54","42/32","Angulo Izquierdo", "de los Ciclos 1"],
            
            ["62/61","42/32","Angulo Derecho", "del May 2"],
            ["62/61","3/50","Yuxtapuesta", "del Detalle "],
            ["62/61", "3/50","Angulo Izquierdo", "del Oscurantismo 1"],
            
            ["56/60","3/50","Angulo Derecho", "de las Ley 2 "],
            ["56/60","27/28","Yuxtapuesta", "de la Estimulación"],
            ["56/60", "27/28","Angulo Izquierdo", "de la Distracción 1"],
            
            ["31/41","27/28","Angulo Derecho", "de lo Inesperado 2 "],
            ["31/41", "24/44","Yuxtapuesta", "de la Influencia"],
            ["31/41","24/44","Angulo Izquierdo", "del Alfa 1"],
            
            ["33/19","24/44","Angulo Derecho", "de los Cuatro Caminos 2"],
            ["33/19","1/2","Yuxtapuesta", "de la Retirado"],
            ["33/19", "1/2","Angulo Izquierdo", "del Refinamiento 1"],
            
            
            ["7/13","1/2","Angulo Derecho", "de la Esfinge 3 "],
            ["7/13","43/23","Yuxtapuesta", "de la Interacción"],
            
            
            
            
            ["7/13","43/23","Angulo Izquierdo", "de las Máscaras 2"],
            ["4/49","43/23","Angulo Derecho", "de la Explicación 3"],
            
            ["4/49","8/14","Yuxtapuesta", "de las Fórmulas"],
            ["4/49","8/14","Angulo Izquierdo", "de la Revolución 2"],
            ["29/30","8/14","Angulo Derecho", "del Contagio 3"],
            
            ["29/30","20/34","Yuxtapuesta", "del Compromiso "],
            ["29/30","20/34","Angulo Izquierdo", "de la Industriosidad 2 "],
            ["59/55","20/34","Angulo Derecho", "del Fénix Dormido 3"],
            
            ["59/55","16/9","Yuxtapuesta", "de la Estrategia"],
            ["59/55","16/9","Angulo Izquierdo", "del Espíritu 1"] ,
            ["40/37","16/9"," Angulo Derecho", "de la Planificación 3"],
            ["40/37","35/5","Yuxtapuesta", "de la Negación"],
            
            ["40/37","35/5","Angulo Izquierdo", "de la Migración 2"],
            ["64/63","35/5","Angulo Derecho", "de la Conciencia 3"],
            ["64/63","45/26","Yuxtapuesta", "de la Confusión"],
            
            ["64/63","45/26","Angulo Izquierdo", "del Dominio 2"],
            ["47/22","45/26","Angulo Derecho", "del Gobierno 3"],
            ["47/22","12/11","Yuxtapuesta", "de la Opresión"],
            
            ["47/22","12/11","Angulo Izquierdo", "de Informar 1"],
            
            ["6/36","12/11","Angulo Derecho", "del Edén 3"],
            ["6/36","10/15","Yuxtapuesta", "del Conflicto "],
            ["6/36", "10/15","Angulo Izquierdo", "del Plano Terrenal 2"],
            
            ["46/25","10/15","Angulo Derecho", "del recipiente de Amor 3"],
            ["46/25","58/52","Yuxtapuesta", "de Serendipidad"],
            ["46/25","58/52","Angulo Izquierdo", "de la Sanación 2"],
            
            
            
            
            ["18/17","58/52","Angulo Derecho", "del Servicio 3 "],
            ["18/17", "38/39","Yuxtapuesta", "de la Corrección "],
            ["18/17","38/39", "Angulo Izquierdo", "del Tumulto o Sublevación 2"],
            
            ["48/21","38/39","Angulo Derecho", "de la Tensión 3 "],
            ["48/21","53/54","Yuxtapuesta", "de la Profundidad "],
            ["48/21","53/54", "Angulo Izquierdo", "del Esfuerzo 2"],
            
            ["57/51","53/54","Angulo Derecho", "de la Penetración 3 "],
            ["57/51","62/61","Yuxtapuesta", "de la Intuición"],
            ["57/51","62/61","Angulo Izquierdo", "del Clarín 2"],
            
            ["32/42","62/61","Angulo Derecho", "del May 3"],
            ["32/42","56/60","Yuxtapuesta", "del Conservadurismo"],
            ["32/42","56/60","Angulo Izquierdo", "de los Límites 2"],
            
            ["50/3","56/60","Angulo Derecho", "de las Ley 3"],
            ["50/3","31/41","Yuxtapuesta", "de los Valores"],
            ["50/3","31/41","Angulo Izquierdo", "de los Deseos 2"],
            
            ["28/27","31/41","Angulo Derecho", "de lo Inesperado 3 "],
            ["28/27","33/19","Yuxtapuesta", "del Riesgo "],
            ["28/27","33/19","Angulo Izquierdo", "del Alineamiento 2"],
            
            ["44/24","33/19","Angulo Derecho", "de los Cuatro Caminos 3 "],
            ["44/24","7/13","Yuxtapuesta", "del Alerta"],
            ["44/24","7/13","Angulo Izquierdo", "de la Encarnación 2"],
            
            
            
            
            
            ["1/2","7/13","Angulo Derecho", "de la Esfinge"],
            ["1/2","4/49","Yuxtapuesta", "de la Autoexpresión "],
            ["1/2","4/49","Angulo Izquierdo", "del Desafío 2"],
            
            ["43/23","4/49","Angulo Derecho", "de la Explicación 4"],
            ["43/23","29/30","Yuxtapuesta", "del Insight (Perspicacia)"],
            ["43/23","29/30","Angulo Izquierdo", "de la Dedicación 2"],
            
            ["14/8","29/30","Angulo Derecho", "del Contagio 4"],
            ["14/8","59/55","Yuxtapuesta", "de Potenciación"],
            ["14/8","59/55","Angulo Izquierdo", "de la Incertidumbre 2"],
            
            ["34/20","59/55","Angulo Derecho", "del Fénix Dormido 4"],
            ["34/20","37/40","Yuxtapuesta", "del Poder"],
            ["34/20","37/40","Angulo Izquierdo", "de la Dualidad 2"],
            
            
            ["9/16","37/40","Angulo Derecho", "de la Planificación 4 "],
            ["9/16","63/64","Yuxtapuesta", "del Foco"],
            ["9/16","63/64","Angulo Izquierdo", "de la Identificación 2"],
            
            ["5/35","63/64","Angulo Derecho", "de la Conciencia 4"],
            ["5/35","22/47","Yuxtapuesta", "de los Hábitos"],
            ["5/35","22/47","Angulo Izquierdo", "de la Separación 2"],
            
            
            ["26/45","47/22","Angulo Derecho", "del Gobierno 4"],
            ["26/45","36/6","Yuxtapuesta", "del Pícaro"] ,
            ["26/45","36/6","Angulo Izquierdo", "de la Confrontación 2"],
            
            ["11/12","36/6","Angulo Derecho", "del Edén 4"],
            ["11/12","25/46","Yuxtapuesta", "de las Ideas"],
            ["11/12","25/46","Angulo Izquierdo", "de la Educación 2"],
            
            
            
            
            ["10/15","25/46","Angulo Derecho", "del Recipiente de Amor 4"],
            ["10/15","18/17","Yuxtapuesta", "del Comportamiento"],
            ["10/15","18/17","Angulo Izquierdo", "de la Prevención 2"],
            
            ["58/52","18/17","Angulo Derecho", "Del servicio 4"],
            ["58/52","48/21","Yuxtapuesta", "de la Vitalidad"],
            ["58/52","48/21","Angulo Izquierdo", "de las Exigencias 2"],
            
            ["38/39","48/21","Angulo Derecho", "de la Tensión 4"],
            ["38/39","51/57","Yuxtapuesta", "de la Oposición "],
            ["38/39", "51/57","Angulo Izquierdo", "de la Individualidad 2"],
            
            ["54/53","51/57","Angulo Derecho", "de la Penetración 4"],
            ["54/53","32/42","Yuxtapuesta", "de la Ambición"],
            ["54/53","32/42","Angulo Izquierdo", "de los Ciclos 2"],
            
            ["61/62","32/42","Angulo Derecho", "del May 4 "],
            ["61/62","50/3","Yuxtapuesta", "del Pensamiento "],
            ["61/62" ,"50/3","Angulo Izquierdo", "del Oscurantismo 2"],
            
            ["60/56","50/3","Angulo Derecho", "de las Ley 4"],
            ["60/56","27/28","Yuxtapuesta", "de la Limitación"],
            ["60/56","27/28","Angulo Izquierdo", "de la Distracción 2"],
            
            ["41/31","27/28","Angulo Derecho", "de lo Inesperado 4"],
            ["41/31","24/44","Yuxtapuesta", "de la Fantasía"],
            ["41/31","24/44","Angulo Izquierdo", "del Alfa 2"],
            
            ["19/33","24/44","Angulo Derecho", "de los Cuatro Caminos 4"],
            ["19/33","2/1","Yuxtapuesta", "de la Necesidad"],
            ["19/33","24/44","Angulo Izquierdo", "del Refinamiento "]
            
            ]



const canales = {
    "1-8": "  INSPIRACIÓN: UN DISEÑO CREATIVO DEL MODELO DE ROLES",
    "2-14": "  DIRECCIÓN : UN DISEÑO DE RESPONSABILIDAD",
    "3-60": " INNOVACIÓN: UN DISEÑO DE TRANSICION DE LO VIEJO A LO NUEVO",
    "4-63": " LOGICA: UN DISEÑO UN DISEÑO QUE DUDA Y CUESTIONA E INDAGA",
    "5-15": " RITMO: UN DISEÑO QUE MARCA EL RITMO DE LOS PROCESOS",
    "6-59": " RESOLUCIÓN: UN DISEÑO QUE INICIA LOS PROYECTOS",
    "7-31": " LIDERAZGO: LIDESRES POR INVITACIÓN DEL EQUIPO ",
    "9-52": " CONCENTRACION: APORTAN DETERMINACION Y FOCO EN LO QUE HACEN",
    "10-20": " AUTENTIZIDAD: EXPRESIVOS Y CLAROS EN LO QUE EXPRESAN",
    "10-34": " EXPLORACIÓN: IDEAS Y ACCIONES MUY DECIDIDAS",
    "10-57": " SUPERVIVENCIA: INTUICION ESPONTANEA",
    "11-56": " CURIOSIDAD: CREAN PROCESOS PARA ESTIMULAR AL EQUIPO",
    "12-22": "APERTURA: CREAN Y TRASMITEN LA PASION AL EQUIPO",
    "13-33": " EXPERIENCIA: TRASMITEN SU CONOCIMIENTO EXPERIMENTADO ",
    "16-48": " TALENTO: MAESTRIA A TRAVES DE LA EXPERIMENTACION Y LA REPETICIÓN CONTINUA",
    "17-62": " CONCENTRACIÓN: DON DE ENFOCARSE EN LO QUE HACEN",
    "18-58": " JUICIO: JUZGAN, CORRIGEN, MEJORAN PATRONES",
    "19-49": " SINTESIS:CAPACIDAD DE TRABAJO BASADOS EN CONFIANZA Y ENTREGA",
    "20-34": " CARISMA: INFLUENCIA EN TRASMITIR A GRUPO QUE LAS IDEAS SE REALIZAN",
    "20-57": " CHISPA CEREBRAL: AGUDEZA INTUITIVA PARA VER LAS COSAS LOS PRIMEROS",
    "21-45": " MATERIALISMO: FUERZA DE VOLUNTAD PAR HACER NEGOCIOS ",
    "23-43": " ESTRUCTURAR: APORTAN CONCEPTOS INNOVADORES Y EFICIENTES ",
    "24-61": " CONCIENCIA: NSPIRADORES DEL GRUPO",
    "25-51": " INICIACIÓN: COMPETITIVOS DESEO DE SER LOS PRIMEROS",
    "26-44": " CONVICCIÓN: VENDEN Y TRASMITEN EL CAPITALISMO",
    "27-58": " PRESERVACIÓN: CUSTODIAN, CUIDAN Y PROTEGEN AL GRUPO ",
    "28-38": " LUCHA: BUSCAN UN RETO POR EL QUE LUCHAR EMPUJANDO AL GRUPO",
    "29-46": " DESCUBRIMIENTO: TRIUNFAN DONDE OTROS FRACASAN SERENDIPIA ",
    "30-41": " RECONOCIMIENTO: EN BUSCA DE GRANDES ESPERIENCIAS ",
    "32-54": " TRANSFORMACIÓN: TRASFORMAN EL TRABAJO EN EXITO MATERIAL",
    "34-57": " PODER: SUPERVIVIENTES ATENTOS A TODAS LAS CIRCUSTANCIAS",
    "35-36": " TRANSITORIEDAD: EXPERIENCIAS Y APRENDIZAJE PROBANDO TODO LO POSIBLE ",
    "37-40": " COMUNIDAD: BUSQUEDA DE ACUERDOS JUSTOS Y DE CONFIANZA",
    "39-55": " EMOCIONES: CAMBIOSDE ESTADO DE ANIMO SIN PREVIO AVISO",
    "42-53": " MADURACIÓN: FACILIDAD POR COMPLETAR LOS PROCESOS",
    "47-64": " ABSTRACCIÓN: TIENEN PERSPECTIVA DEL PASADO PARA AFRONTAR LA REALIDAD",
    };

const puertas = {
    1:  "IMPLEMENTACION",
2:  "VISIÓN",
  3:  "INNOVACIÓN", 
  4:  "RESPUESTAS" ,
  5:  "CULTURA" ,
  6:  "ENTORNO" ,
  7:  "PLANIFICACIÓN", 
  8:  "RELAC.PUBLICAS", 
  9:  "ENFOQUE" ,
10:  "POTENCIAL" ,
 11: "IDEAS" ,
 12: "CAUTELA", 
 13: "CONTABILIDAD", 
 14: "FINANZAS" ,
 15: "FIABILIDAD", 
 16: "HABILIDADES", 
 17: "OPINIONES" ,
 18: "CORRECCIÓN" ,
 19: "UNIÓN" ,
 20: "MOMEN. PRESENTE", 
 21: "IMPLEMENACIÓN" ,
 22: "ESCUCHAR" ,
 23: "ASIMILACIÓN", 
 24: "RACIONALIDAD", 
 25: "CAPACIDAD " ,
 26: "ASTUCIA" ,
 27: "RECONOCIMIENTO" ,
 28: "ASUMIR RIESGOS" ,
 29: "COMPROMISO" ,
 30: "DESEOS" ,
 31: "ADMINISTRACIÓN", 
 32: "EXITO" ,
 33: "SUPERVISIÓN", 
 34: "PODER" ,
 35: "PROGRESO", 
 36: "EXPLORACIÓN", 
 37: "ACUERDOS" ,
 38: "LUCHA" ,
 39: "CREATIVIDAD", 
 40: "AMOR AL TRABAJO", 
 41: "IMAGINACIÓN" ,
 42: "CRECIMIENTO", 
 43: "RESOLUCIÓN" ,
 44: "RELAC. HUMANAS", 
 45: "EDUCACIÓN" ,
 46: "COORDINACIÓN", 
 47: "COMPRENSIÓN" ,
 48: "TALENO" ,
 49: "PRINCIPIOS", 
 50: "SEGURIDAD" ,
 51: "COMPETICIÓN" ,
 52: "CONCENTRACIÓN", 
 53: "INICIACIÓN" ,
 54: "AMBICIÓN" ,
 55: "MUTACIÓN" ,
 56: "ESTIMULACIÓN", 
 57: "INTUICIÓN" ,
 58: "VITALIDAD" ,
 59: "INVESTIGACIÓN", 
 60: "ESTRUCTURA" ,
 61: "CONOCIMIENTO" ,
 62: "MINUCIOSIDAD" ,
 63: "CUESTIONAR" ,
 64: "ORDEN"
}

const autorities = [{
    Эмоциональный: {
        codename: 'plexo',
        desc: 'PLEXO: DESDE TUS EMOCIONES INTERNAS' 
    }},
    {Сакральный: {
        codename: 'sacral',
        desc: 'SACRAL: DESDE TU VIBRACIÓN INTERIOR'
    }},
    {Селезеночный: {
        codename: 'bazo',
        desc: 'BAZO: DESDE TU INSTINTO E INTUICION'
    }},
    {Эгоманифестируемый: {
        codename: 'corazon',
        desc: 'CORAZÓN: DESDE TU VOZ INTERIOR'
    }},
    {Самопроецируемый: {
        codename: 'g',
        desc: 'DESDE TU AMOR Y DIRECCIÓN'
    }},
    {Внутренний: {
        codename: 'entorno',
        desc: 'DESDE EL ENTORNO'
    }},
    {Лунный: {
        codename: 'lunar',
        desc: 'ANALIZANDO TU CICLO LUNAR'
    }}
];


const typesDesc = [ {Генератор: {
    desc: 'Persona con energía. Fuerza para realizar y poner en marcha actividades. Sabes responder a la vida y has de despertar a la propuesta correcta que se te pondrá delante',
    corr: 'SATISFACCIÓN',
    incorr: 'FRUSTRACIÓN',
    estrategia: 'RESPONDIENDO A LOS ESTÍMULOS EXTERNOS',
    porcentaje: '37%',
    definicionUno: 'SACRAL DEFINIDO',
    definicionDos: 'GARGANTA  DEFINIDA O NO',
    conectado: 'GARGANTA NO CONECTADA A MOTORES ACTIVOS',
    aura: 'Abierta, envolvente, acogedora, magnética e impersonal',
    modo: 'Energético -  De Espera',
    rol: 'Construir – Hacer ',
    temaGeneral: 'Responder a la Vida',
    busqueda: 'Satisfacción',
    dilemaMental: 'Conocerse a sí mismo',
    psigologia: '¿Qué puedo hacer solo?',
    preguntaInterna: '¿Me preguntarán – Confío en la vida?',
    noSer: 'Frustración',
    lista: ['Portadores de la vitalidad, la energía, el esfuerzo',
        'Trabajan haciendo lo que se necesita hacer',
        	'Pasan rápidamente de una cosa a otra',
        	'Normalmente están ocupadísimos con los demás, desarrollando su gran capacidad de entrega y colaboración',
        	'Están diseñados para ser maestros, expertos en los trabajos que realicen' ,
        	'Diseñados para avanzar despacio pasando de un nivel a otro poco a poco',
        	'El generador es una fuente de energía leal y dedicada que disfruta de lo que está haciendo y si se respetan sus condiciones, se puede usar su energía correctamente',
        	'Si el manifestador es la punta del misil que se hace camino, el generador es la carga explosiva',
        	'El generador necesita su tiempo para seguir su proceso, no debemos presionarles, ellos terminarán por ser unos expertos en su función',
        	'Ellos no proponen como los manifestadores, ellos deben responder',
        	'Es como si dentro tuvieran un consejero que aprueba o rechaza las cosas (su Sacral)'
        ],
    estrategiasCompleto: estrategiasGenerador,
    cuantas: '2,884,236,073'


 }},
{МанифестирующийГенератор: {
    desc: 'Persona con energía. Fuerza para realizar y poner en marcha actividades. Sabes responder a la vida y has de despertar a la propuesta correcta que se te pondrá delante',
    corr: 'SATISFACCIÓN Y PAZ',
    incorr: 'FRUSTRACIÓN Y RABIA',
    estrategia: 'CLARIDAD PARA RESPONDER AL ESTÍMULO EXTERNO',
    porcentaje: '33%',
    definicionUno: 'SACRAL DEFINIDO',
    definicionDos: 'GARGANTA DEFINIDA',
    conectado: 'GARGANTA CONECTADA A MOTORES ACTIVOS',
    aura: 'Abierta,envolvente, acogedora, magnética + energía del manifestador',
    modo: 'Energético -  De Espera',
    rol: 'Construir – Hacer ',
    temaGeneral: 'Responder a la Vida',
    busqueda: 'Satisfacción -Paz',
    dilemaMental: 'Conocerse a sí mismo',
    psigologia: '¿Qué puedo hacer solo?',
    preguntaInterna: '¿Me preguntarán –Podré avanzar?',
    noSer: 'Frustración –Rabia•',
    lista: [
        'Pistoleros verbales. Trasmiten mucha energía, es más vivaz, tiene la capacidad de manifestar',
        'Es el puente entre el manifestador (individualista y dominante) y los generadores puros (capacidad de entrega y servicio)',
        'Individuos rebeldes y menos gregarios que un generador puro',
        'Su única verdad es la respuesta en el instante presente',
        'Tremenda eficacia, productividad y acción, Rápidos captando las cosas debido a su potencial metamórfico manifestante',
        'Un especialista preparado para desarrollar a la perfección su labor',
        'La diferencia entre un G.M y unGenerador puro, es su rápida capacidad de respuesta, de cambio al encarar nuevas situaciones',
        'Pasan rápidamente de una cosa a otra',
        'Es como si dentro tuvieran un consejero que aprueba o rechaza las cosas(su Sacral)'
    ],
    estrategiasCompleto: estrategiasGeneradorManifestante,
    cuantas: '2,572,426,768'

}},
{Манифестор: {
    desc: 'Persona de acción con energía. Inician sin necesitar a nadie. Saben pasar todas las etapas hasta concretar su idea',
    corr: 'PAZ',
    incorr: 'RABIA',
    estrategia: 'INFORMANDO ANTES DE ACTUAR',
    porcentaje: '8%',
    definicionUno: 'SACRAL SIN DEFINIR',
    definicionDos: 'GARGANTA DEFINIDA',
    conectado: 'GARGANTA CONECTADA A MOTORES ACTIVOS',
    aura: 'Excluyente – cerrada – auto-protectora',
    modo: 'De acción - Energético ',
    rol: 'Iniciar ',
    temaGeneral: 'Evitar la rabia para encontrar la paz',
    busqueda: 'Paz - Calma',
    dilemaMental: 'Conocer el impacto en los demás',
    psigologia: '¿Qué puedo hacer que sea nuevo?',
    preguntaInterna: '¿Me responderán afirmativamente?',
    noSer: 'Rabia - Ira',
    lista: [
        'Desafía e inicia',
        'No piden permiso para actuar, toman la iniciativa sin pedir ayuda ni consejo',
        'Son rebeldes e individualistas',
        'Cuando algo le excita lo convierte en acción.',
        'No buscan ayuda, guía, ni aceptación o aprobación de los demás en los temas que realiza',
        'Nunca muestran su dolor',
        'Producen desconfianza en la gente.',
        'Personas de ACCIÓN, que saben superar todas las fases de un proceso hasta el final. ',
        'No son jugadores de equipo, salvo que sea el líder',
        'Quieren libertad de movimiento',
        'No desean ser controlados, dirigidos ni corregidos',
        'Se apoyan en su propia energía para todo y el hecho de haber estado bajo la autoridad de sus padres, les ha hecho crear estrategias solapadas, por eso producen desconfianza en la gente.'
    ],
    estrategiasCompleto: estrategiasManifestador,
    cuantas: '1,650,021,821'
    }},
{Проектор: {
    desc: 'Persona no energética. Tienes la fuerza para guiar la energía de los demás. Buenos mediadores y organizadores natos. Ven lo que los demás no aprecian inicialmente',
    corr: 'ÉXITO',
    incorr: 'AMARGURA',
    estrategia: 'ESPERADO A SER RECONOCIDO E INVITADO A ACTUAR',
    porcentaje: '21%',
    definicionUno: 'SACRAL SIN DEFINIR',
    definicionDos: ' ',
    conectado: 'NINGÚN CENTRO MOTOR CONECTADO GARGANTA',
    aura: 'Penetrante – Enfocada y personalizada',
    modo: 'No energético – De espera  ',
    rol: 'Guiar - Mediar  ',
    temaGeneral: 'Diseñado para guiar a los demás',
    busqueda: 'Éxito – El éxito del grupo',
    dilemaMental: 'Conocer al otro',
    psigologia: '¿Qué podemos hacer juntos?',
    preguntaInterna: '¿Me reconocerán?',
    noSer: 'Amargura - Resentimiento',
    lista: [
        'No han venido al mundo a trabajar, ni a manifestar.',
	'Responde a las necesidades de los otros.',
	'Grandes consejeros y líderes. ',
	'Saben canalizar la energía de los demás.',
	'Su poder reside en guiar a los energéticos.',
	'Saben lo que quieren, pero no tienen idea de cómo hacerlo.',
	'Sienten que se les exigen que sean diferentes de lo que son',
	'El reconocimiento que reciben ha de llegarles hasta cada uno de los aspectos que tienen definidos en su diseño y con este reconocimiento activar sus conocimientos, su arte, ciencia, oficio',
	'El modo de espera, no es no hacer nada, es reconocer que viven su vida esperando la oportunidad de hacer un cambio, un avance en algo que les importa',
	'Como un cazador, están acechando, esperando el momento oportuno.',
	'Su espera, requiere paciencia, reconocimiento y consciencia para darse cuenta del momento preciso para actuar',
	'Han de saber esperar pacientemente a que los demás les reconozcan'
    ],
    estrategiasCompleto: estrategiasProyector,
    cuantas: '628,579,741'
    }},
{Рефлектор: {
    desc: 'Persona con gran conocimiento y sabiduría. Son el espejo que refleja la realidad social. Ecuánimes y justos',
    corr: 'SORPRESA',
    incorr: 'DESILUSIÓN',
    estrategia: 'ESPERANDO PASAR EL CICLO LUNAR',
    porcentaje: '1%',
    definicionUno: 'NINGÚN CENTRO DEFINIDO',
    definicionDos: ' ',
    conectado: ' ',
    aura: 'Absorbente y reflectante',
    modo: 'Esperar un ciclo lunar',
    rol: 'Observador objetivo, sabio, juez ',
    temaGeneral: 'Diseñado para la justicia social',
    busqueda: 'Sorprenderse',
    dilemaMental: 'Conocer a los demás, a la Humanidad',
    psigologia: '¿Cómo puedo ser útil a mí comunidad?',
    preguntaInterna: '¿Me verán, puedo ser yo mismo?',
    noSer: 'Desilusión',
    lista: [
        	'Personas que reflejan el estado de los demás', 
	'Los primeros que ven el problema o el error',
	'Absorben y captan todo tipo de información, influencias, vibraciones a su alrededor',
	'Abiertos a toda influencia de su entorno',
	'Personas muy inquietas, ansiosas, no encuentran su lugar, su ocupación',
	'Son el reflejo de todos los demás',
	'Actúan como barómetros sociales ',
	'Desilusión de no saber muy bien donde se encuentran y se sienten desubicados en este mundo, porque tienen tantos estímulos que no saben por dónde cogerlos, ven que todo está cambiando, que nada es estable.',
	'Su frecuencia está sujeta al ritmo de la luna, durante 28 días acaban experimentado todos los tipos de diseños posibles excepto el suyo propio',
	'Si su entorno es favorable y positivo, estará bien, si es al contrario, absorberán todo tipo de problemas y negatividad',
	'Se pueden dar síndromes de Down y autismo o comportamientos muy difíciles, noches en pánico y toda clase de temores y fobias a estar solos.'

    ],
    estrategiasCompleto: estrategiasReflector,
    cuantas: '78,572,467'
    }}
];

const perfiles = {
        1: 'Investigator',
        2: 'Ermitaño',
        3: 'Mártir',
        4: 'Oportunista',
        5: 'Hereje',
        6: 'Modelo de roles'
    }; 

export class ResultadoCompleto extends Component {
    constructor() {
        super();
        this.state = {
            date: '',
            tipo: '',
            typeDescription: '',
            corr: '',
            incorr: '',
            estrategia: '',
            autoridad: '',
            perfilUno: '',
            perfilDos: '',
            perfilCompleto: '',
            cruzstr: '',
            cruzUno: '',
            cruzDos: '',
            canalesCompleto: [],
            definicion: '',
            svgDownloaded: false,
            allPuertas: [],
            updatedtwo: true,
            lista: [],
            estrategiasCompleto: [],
            autoridadCompleto: [],
            allCentros: [],
            canales: [],
            cruzCompleto: [{cruz: '', img: '', texto:[]}]
        }
    this.getCurrDate = this.getCurrDate.bind(this);
    this.translateHelper = this.translateHelper.bind(this);
    this.addDescription = this.addDescription.bind(this);
    this.convertToPdf = this.convertToPdf.bind(this);
    this.cruzWorker = this.cruzWorker.bind(this);
    this.sendMail = this.sendMail.bind(this);
    this.svgRef = React.createRef();
    this.test = this.test.bind(this);
    }


    test() {
        console.log(this.state.canales);
    
        console.log(this.state.allPuertas);
    }

    sendMail() {
        axios.post(`${window.location.origin}/sendmail`,{
            params: {
                name: `${this.state.firstName}${this.state.lastName}`,
                mail: this.state.email
            }
        }).catch(err => console.log(err));
    }
 
    cruzWorker() {
        let cruzAngulo = this.state.cruzIncarnacion.split(' ')[0];
        let cruzNombre = this.state.cruzIncarnacion.split(' ')[1];

        if (cruzAngulo == 'Правоугольный') {
            cruzAngulo = 'Angulo Derecho'
        } else if (cruzAngulo == 'Левоугольный') {
            cruzAngulo = 'Angulo Izquierdo'
        } else {
            cruzAngulo = 'Yuxtapuesta'
        }
     
        if (cruzAngulo == 'Angulo Derecho') {
            
            angulos.forEach(e => {
                
                let personone = this.state.cruzadd.person.split('/')[0];
                let persontwo = this.state.cruzadd.person.split('/')[1];

                let designone = this.state.cruzadd.design.split('/')[0];
                let designtwo = this.state.cruzadd.design.split('/')[1];
                
                
                if (e[2] == 'Angulo Derecho' && e[0].includes(personone) && e[0].includes(persontwo) && e[1].includes(designone) && e[1].includes(designtwo)) { //
                   console.log('!!!!!!!');
                    cruzNombre = e[3]
                   
                } 
                
            })
        } else {
            angulos.forEach(e => {
                let personone = this.state.cruzadd.person.split('/')[0];
                let persontwo = this.state.cruzadd.person.split('/')[1];

                let designone = this.state.cruzadd.design.split('/')[0];
                let designtwo = this.state.cruzadd.design.split('/')[1];
             if (e[0].includes(personone) && e[0].includes(persontwo) && e[1].includes(designone) && e[1].includes(designtwo)) { //["51/57","61/62","Angulo Izquierdo", "Cruz del Clarín 1"],
                console.log('yes')
                cruzNombre = e[3];
                
            }
        });
        }
        if (this.state.cruzstr == '') {
            this.setState({
                cruzstr: `Cruz ${cruzAngulo} ${cruzNombre}`
            })
        }
        
    }


    addDescription(){
        this.setState({
            descadded: true
        })

        
        typesDesc.forEach(e => {
            let typename = Object.keys(e)[0];
            if (typename === 'МанифестирующийГенератор') {
                typename = 'Манифестирующий генератор';      
            }
            if (typename == this.state.tipo) {
                console.log('TISPO');
                console.log(this.state.tipo)
                let temp =  Object.values(e)[0];
                console.log(temp['modo']);
                this.setState({
                    typeDescription: temp['desc'],
                    corr:  temp['corr'],
                    incorr:  temp['incorr'],
                    estrategia:  temp['estrategia'],
                    porcentaje: temp['porcentaje'],
                    definicionUno: temp['definicionUno'],
                    definicionDos: temp['definicionDos'],
                    conectado: temp['conectado'],
                    aura: temp['aura'],
                    modo: temp['modo'],
                    rol: temp['rol'],
                    temaGeneral: temp['temaGeneral'],
                    busqueda: temp['busqueda'],
                    dilemaMental: temp['dilemaMental'],
                    psigologia: temp['psigologia'],
                    preguntaInterna: temp['preguntaInterna'],
                    noSer: temp['noSer'],
                    lista: temp['lista'],
                    estrategiasCompleto: temp['estrategiasCompleto'],
                    cuantas: temp['cuantas']
                })
            }
        });
    


        autorities.forEach(e => {
            let authorityName = Object.keys(e)[0];
            console.log('autoridad ' +this.state.autoridad);

            if (this.state.autoridad == 'Нет внутреннего авторитета') {
                this.setState({
                    autoridad: 'Ninguna'
                })
            }

            if (authorityName == this.state.autoridad) {
                let temp =  Object.values(e)[0];
                console.log('temp');
                console.log(temp.codename);
                let autoridadCompleto, autoridadImg, autoridadTexto;
                switch(temp.codename) {
                    case 'plexo':
                        autoridadCompleto = plexoCompleto;
                        autoridadImg = sacralimg;
                        autoridadTexto = '70% de la población tiene el Sacral Activado'
                        break;
                    case 'bazo':
                        autoridadCompleto = bazoCompleto;
                        autoridadImg = bazoimg;
                        autoridadTexto = ' '
                        break;
                    case 'corazon':
                        autoridadCompleto = egoCompleto;
                        autoridadImg = egoimg;
                        autoridadTexto = '30% de la población tiene el centro corazón activado';
                        break;
                    case 'g':
                        autoridadCompleto = gCompleto;
                        autoridadImg = gimg;
                        autoridadTexto = ' ';
                        break;
                    case 'lunar':
                        autoridadCompleto = lunarCompleto;
                        autoridadImg = lunarimg;
                        autoridadTexto = ' ';
                        break;
                    case 'entorno':
                        autoridadCompleto = mentalCompleto;
                        autoridadImg = mentalimg;
                        autoridadTexto = 'ENTORNO';
                        break;
                    case 'sacral':
                        autoridadCompleto = sacralCompleto;
                        autoridadImg = sacralimg;
                        autoridadTexto = '70% de la población tiene el Sacral Activado';
                        break;   
                    
                }
                this.setState({
                    autoridad: temp['desc'],
                    autoridadCompleto,
                    autoridadImg,
                    autoridadTexto
                });
                
            }
        });

        let puno, pdos;

        Object.keys(perfiles).forEach(e =>{
            if (e == this.state.perfilUno) {
                puno = perfiles[e]
            }
        })
        Object.keys(perfiles).forEach(e =>{
            if (e == this.state.perfilDos) {
                pdos = perfiles[e];
            }
        });
        if (!this.state.perfilCompleto) {
       this.setState({
            perfilCompleto: `${this.state.perfilUno}/${this.state.perfilDos} - ${puno}/${pdos}`
        })};

       let a = this.state.cruzUno[0] + ' -- ' + puertas[this.state.cruzUno[0]];
       let b = this.state.cruzUno[1] + ' -- ' + puertas[this.state.cruzUno[1]];
       let c = this.state.cruzDos[0] + ' -- ' + puertas[this.state.cruzDos[0]];
       let d = this.state.cruzDos[1] + ' -- ' + puertas[this.state.cruzDos[1]];
       if (/^\d+$/.test(this.state.cruzUno[0]) ){ 
       this.setState({
            cruzUno: [a,b],
            cruzDos: [c,d]
        })}

        let canalesKeys = Object.keys(canales);
        let canalVals = Object.values(canales);
        let cddd = [];
        this.state.canales.forEach(e => {
           let i = canalesKeys.indexOf(e); 
           let t = e + ' ' + canalVals[i]; 
           cddd.push(t);
        });

        
        if (this.state.canalesCompleto.length == 0) {
            this.setState({
                canalesCompleto: cddd
            })
        }
        
       if (/[а-я]/.test(this.state.definicion)) {
           let def;
           switch(this.state.definicion) {
               case 'Одинарная':
                   def = 'Simple';
                   break;
                case 'Двойная':
                    def = 'Doble';
                    break;
                case 'Тройная':
                    def = 'Triple';
                    break;
                case 'Четвертная':
                    def='quadruple';
                    break;
                default:
                    def='Ninguna';
                    break;
           }
           this.setState({
               definicion: def
           })
       }
        
       
    }

    translateHelper() {
        let type = this.state.tipo; 
        switch(type) {
            case 'Проектор':
                type = 'Proyector';
                break;
            case 'Манифестор':
                type = 'Manifestador';
                break;
            case 'Генератор':
                type = 'Generador';
                break;
            case 'Манифестирующий генератор':
                type = 'Generador Manifestante';
                break;
            case 'Рефлектор':
                type = 'Reflector';
                break;        
        }
        if (this.state.sexo === 'female' && type !== 'Generador Manifestante') {
            type = type + 'a'
        }
        else if (this.state.sexo === 'female' && type === 'Generador Manifestante') {
            type = 'Generadora Manifestante'
        }
        this.setState({
            tipo: type
        })
    }


    getCurrDate() {
        const weekDays = ['Domingo','Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
        const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
        let date = new Date(); 
        let weekDay = weekDays[date.getDay()];
        let day = date.getDate();
        let month = months[date.getMonth()];
        let year = date.getFullYear();
        this.setState({
            date: `${weekDay}, ${day} de ${month} de ${year}`
        })
    }

   
     
   

    convertToPdf() {
        console.log(this.state.bodygraph);
        const name = `${this.state.firstName} ${this.state.lastName}`
        const fecha =  this.state.fecha;
        const currdate = this.state.date;
        const hora = this.state.hora;
        const lugar = this.state.lugar;
        const tipo=  this.state.tipo;
        const tipodesc = this.state.typeDescription;
        const corr = this.state.corr;
        const incorr = this.state.incorr;
        const estrategia = this.state.estrategia;
        const autoridad = this.state.autoridad;
        const perfilUno = this.state.perfilUno;
        const perfilDos = this.state.perfilDos;
        const perfilDescripcion = this.state.perfilCompleto;
        const definicion = this.state.definicion;
        const puertasUno = this.state.cruzUno;
        const puertasDos = this.state.cruzDos;
        const cruzNombre = this.state.cruzstr;
        const CanalUno = this.state.canalesCompleto[0] ? this.state.canalesCompleto[0] : '';
        const CanalDos = this.state.canalesCompleto[1] ? this.state.canalesCompleto[1] : '';
        const CanalTres = this.state.canalesCompleto[2] ? this.state.canalesCompleto[2] : '';
        const CanalCuatro = this.state.canalesCompleto[3] ? this.state.canalesCompleto[3] : '';
        const CanalCinco = this.state.canalesCompleto[4] ? this.state.canalesCompleto[4] : '';
        const CanalSeis = this.state.canalesCompleto[5] ? this.state.canalesCompleto[5] : '';
        const CanalSiete = this.state.canalesCompleto[6] ? this.state.canalesCompleto[6] : '';
        const CanalOcho = this.state.canalesCompleto[7] ? this.state.canalesCompleto[7] : '';
        const cabeza = this.state.cabezaCentro;
        const ajna = this.state.ajnaCentro;
        const garganta = this.state.gargantaCentro;
        const gi = this.state.giCentro;
        const corazon = this.state.corazonCentro;
        const plexosolar = this.state.plexosolarCentro;
        const sacral = this.state.sacralCentro;
        const bazo = this.state.bazoCentro;
        const raiz = this.state.raizCentro;
        const bodygraph = this.state.bodygraph;
        const TipoUpperCase = this.state.tipo.toUpperCase();
        const TipoPorcentaje = this.state.porcentaje;
        const DefinidoUno = this.state.definicionUno;
        const DefinidoDos = this.state.definicionDos;
        const DefinicionUnoImg = this.state.tipo != 'Reflector' ? 'https://i.imgur.com/kPVHTHX.png':  'https://i.imgur.com/1LSujeS.png';
        const DefinicionDosImg = (this.state.tipo != 'Reflector' || this.state.tipo != 'Proyector') ? 'https://i.imgur.com/RJPA0u5.png': '';
        const Conectado = this.state.conectado;
        const Aura = this.state.aura;
        const TipoImg = this.state.tipo == 'Generador Manifestante' ? 'https://i.imgur.com/bqr5Hy7.png' : this.state.tipo == 'Generador' ? 'https://i.imgur.com/yy6eKfi.png' : this.state.tipo == 'Manifestador' ? 'https://i.imgur.com/sjXDssr.png' : this.state.tipo == 'Proyector' ? 'https://i.imgur.com/5CBhhqj.png': 'https://i.imgur.com/n62lXHx.jpg';
        const Modo = this.state.modo;
        const EstrategiaCompleto = this.state.estrategia;
        const Rol = this.state.rol;
        const Tema = this.state.temaGeneral;
        const Busqueda = this.state.busqueda;
        const Dilema = this.state.dilemaMental;
        const Psicologia = this.state.psigologia;
        const Pregunta = this.state.preguntaInterna;
        const NoSer = this.state.noSer;
        const TipoLineaUno = this.state.lista[0] ? this.state.lista[0] : '';
        const TipoLineaDos = this.state.lista[1] ? this.state.lista[1] : '';
        const TipoLineaTres = this.state.lista[2] ? this.state.lista[2] : '';
        const TipoLineaCuatro = this.state.lista[3] ? this.state.lista[3] : '';
        const TipoLineaCinco = this.state.lista[4] ? this.state.lista[4] : '';
        const TipoLineaSeis = this.state.lista[5] ? this.state.lista[5] : '';
        const TipoLineaSeite = this.state.lista[6] ? this.state.lista[6] : '';
        const TipoLineaOcho = this.state.lista[7] ? this.state.lista[7] : '';
        const TipoLineaNueve = this.state.lista[8] ? this.state.lista[8] : '';
        const TipoLineaDiez = this.state.lista[9] ? this.state.lista[9] : '';
        const TipoLineaOnce = this.state.lista[10] ? this.state.lista[10] : '';
        const TipoUpperCaseDos =  tipo.toUpperCase();
        const TipoImgDos = this.state.tipo == 'Generador Manifestante' ? 'https://i.imgur.com/bqr5Hy7.png' : this.state.tipo == 'Generador' ? 'https://i.imgur.com/yy6eKfi.png' : this.state.tipo == 'Manifestador' ? 'https://i.imgur.com/sjXDssr.png' : this.state.tipo == 'Proyector' ? 'https://i.imgur.com/5CBhhqj.png': 'https://i.imgur.com/n62lXHx.jpg';
        
        const Estrategia1 = this.state.estrategiasCompleto[0] ? this.state.estrategiasCompleto[0].join('') : '';
        const Estrategia2 = this.state.estrategiasCompleto[1] ? this.state.estrategiasCompleto[1].join('') : '';
        const Estrategia3 = this.state.estrategiasCompleto[2] ? this.state.estrategiasCompleto[2].join('') : '';
        const Estrategia4 = this.state.estrategiasCompleto[3] ? this.state.estrategiasCompleto[3].join('') : '';
        const Estrategia5 = this.state.estrategiasCompleto[4] ? this.state.estrategiasCompleto[4].join('') : '';
        const Estrategia6 = this.state.estrategiasCompleto[5] ? this.state.estrategiasCompleto[5].join('') : '';
        const Estrategia7 = this.state.estrategiasCompleto[6] ? this.state.estrategiasCompleto[6].join('') : '';
        const Estrategia8 = this.state.estrategiasCompleto[7] ? this.state.estrategiasCompleto[7].join('') : '';
        const Estrategia9 = this.state.estrategiasCompleto[8] ? this.state.estrategiasCompleto[8].join('') : '';
        const Estrategia10 = this.state.estrategiasCompleto[9] ? this.state.estrategiasCompleto[9].join('') : '';
        const Estrategia11 = this.state.estrategiasCompleto[10] ? this.state.estrategiasCompleto[10].join('') : '';
        const Estrategia12 = this.state.estrategiasCompleto[11] ? this.state.estrategiasCompleto[11].join('') : '';
        const Estrategia13 = this.state.estrategiasCompleto[12] ? this.state.estrategiasCompleto[12].join('') : '';
        const Estrategia14 = this.state.estrategiasCompleto[13] ? this.state.estrategiasCompleto[13].join('') : '';
        const Estrategia15 = this.state.estrategiasCompleto[14] ? this.state.estrategiasCompleto[14].join('') : '';
        const Estrategia16 = this.state.estrategiasCompleto[15] ? this.state.estrategiasCompleto[15].join('') : '';
        const Estrategia17 = this.state.estrategiasCompleto[16] ? this.state.estrategiasCompleto[16].join('') : '';
        const Estrategia18 = this.state.estrategiasCompleto[17] ? this.state.estrategiasCompleto[17].join('') : '';
        const Estrategia19 = this.state.estrategiasCompleto[18] ? this.state.estrategiasCompleto[18].join('') : '';
        const Estrategia20 = this.state.estrategiasCompleto[19] ? this.state.estrategiasCompleto[19].join('') : '';
        const Estrategia21 = this.state.estrategiasCompleto[20] ? this.state.estrategiasCompleto[20].join('') : '';
        const Estrategia22 = this.state.estrategiasCompleto[21] ? this.state.estrategiasCompleto[21].join('') : '';
        const Estrategia23 = this.state.estrategiasCompleto[22] ? this.state.estrategiasCompleto[22].join('') : '';
        const Estrategia24 = this.state.estrategiasCompleto[23] ? this.state.estrategiasCompleto[23].join('') : '';
        const Estrategia25 = this.state.estrategiasCompleto[24] ? this.state.estrategiasCompleto[24].join('') : '';
        const Estrategia26 = this.state.estrategiasCompleto[25] ? this.state.estrategiasCompleto[25].join('') : '';
        const Estrategia27 = this.state.estrategiasCompleto[26] ? this.state.estrategiasCompleto[26].join('') : '';
        const Estrategia28 = this.state.estrategiasCompleto[27] ? this.state.estrategiasCompleto[27].join('') : '';
        const Estrategia29 = this.state.estrategiasCompleto[28] ? this.state.estrategiasCompleto[28].join('') : '';
        const Estrategia30 = this.state.estrategiasCompleto[29] ? this.state.estrategiasCompleto[29].join('') : '';
        const Estrategia31 = this.state.estrategiasCompleto[30] ? this.state.estrategiasCompleto[30].join('') : '';
        const Estrategia32 = this.state.estrategiasCompleto[31] ? this.state.estrategiasCompleto[31].join('') : '';
        const Estrategia33 = this.state.estrategiasCompleto[32] ? this.state.estrategiasCompleto[32].join('') : '';
        const Estrategia34 = this.state.estrategiasCompleto[33] ? this.state.estrategiasCompleto[33].join('') : '';
        const Estrategia35 = this.state.estrategiasCompleto[34] ? this.state.estrategiasCompleto[34].join('') : '';
        const Estrategia36 = this.state.estrategiasCompleto[35] ? this.state.estrategiasCompleto[35].join('') : '';
        const Estrategia37 = this.state.estrategiasCompleto[36] ? this.state.estrategiasCompleto[36].join('') : '';
        const Estrategia38 = this.state.estrategiasCompleto[37] ? this.state.estrategiasCompleto[37].join('') : '';
        const Estrategia39 = this.state.estrategiasCompleto[38] ? this.state.estrategiasCompleto[38].join('') : '';
        const Estrategia40 = this.state.estrategiasCompleto[39] ? this.state.estrategiasCompleto[39].join('') : '';
        const Estrategia41 = this.state.estrategiasCompleto[40] ? this.state.estrategiasCompleto[40].join('') : '';
        const Estrategia42 = this.state.estrategiasCompleto[41] ? this.state.estrategiasCompleto[41].join('') : '';
        const Estrategia43 = this.state.estrategiasCompleto[42] ? this.state.estrategiasCompleto[42].join('') : '';
        const Estrategia44 = this.state.estrategiasCompleto[43] ? this.state.estrategiasCompleto[43].join('') : '';
        const Estrategia45 = this.state.estrategiasCompleto[44] ? this.state.estrategiasCompleto[44].join('') : '';
        const Estrategia46 = this.state.estrategiasCompleto[45] ? this.state.estrategiasCompleto[45].join('') : '';
        const Estrategia47 = this.state.estrategiasCompleto[46] ? this.state.estrategiasCompleto[46].join('') : '';
        const Estrategia48 = this.state.estrategiasCompleto[47] ? this.state.estrategiasCompleto[47].join('') : '';
        const Estrategia49 = this.state.estrategiasCompleto[48] ? this.state.estrategiasCompleto[48].join('') : '';
        const Estrategia50 = this.state.estrategiasCompleto[49] ? this.state.estrategiasCompleto[49].join('') : '';
        const Estrategia51 = this.state.estrategiasCompleto[50] ? this.state.estrategiasCompleto[50].join('') : '';

        const Estrategia1num = this.state.estrategiasCompleto[0] ? '1' : '';
        const Estrategia2num = this.state.estrategiasCompleto[1] ? '2' : '';
        const Estrategia3num = this.state.estrategiasCompleto[2] ? '3' : '';
        const Estrategia4num = this.state.estrategiasCompleto[3] ? '4' : '';
        const Estrategia5num = this.state.estrategiasCompleto[4] ? '5' : '';
        const Estrategia6num = this.state.estrategiasCompleto[5] ? '6' : '';
        const Estrategia7num = this.state.estrategiasCompleto[6] ? '7' : '';
        const Estrategia8num = this.state.estrategiasCompleto[7] ? '8' : '';
        const Estrategia9num = this.state.estrategiasCompleto[8] ? '9' : '';
        const Estrategia10num = this.state.estrategiasCompleto[9] ? '10' : '';
        const Estrategia11num = this.state.estrategiasCompleto[10] ? '11' : '';
        const Estrategia12num = this.state.estrategiasCompleto[11] ? '12' : '';
        const Estrategia13num = this.state.estrategiasCompleto[12] ? '13' : '';
        const Estrategia14num = this.state.estrategiasCompleto[13] ? '14' : '';
        const Estrategia15num = this.state.estrategiasCompleto[14] ? '15' : '';
        const Estrategia16num = this.state.estrategiasCompleto[15] ? '16' : '';
        const Estrategia17num = this.state.estrategiasCompleto[16] ? '17' : '';
        const Estrategia18num = this.state.estrategiasCompleto[17] ? '18' : '';
        const Estrategia19num = this.state.estrategiasCompleto[18] ? '19' : '';
        const Estrategia20num = this.state.estrategiasCompleto[19] ? '20' : '';
        const Estrategia21num = this.state.estrategiasCompleto[20] ? '21' : '';
        const Estrategia22num = this.state.estrategiasCompleto[21] ? '22' : '';
        const Estrategia23num = this.state.estrategiasCompleto[22] ? '23' : '';
        const Estrategia24num = this.state.estrategiasCompleto[23] ? '24' : '';
        const Estrategia25num = this.state.estrategiasCompleto[24] ? '25' : '';
        const Estrategia26num = this.state.estrategiasCompleto[25] ? '26' : '';
        const Estrategia27num = this.state.estrategiasCompleto[26] ? '27' : '';
        const Estrategia28num = this.state.estrategiasCompleto[27] ? '28' : '';
        const Estrategia29num = this.state.estrategiasCompleto[28] ? '29' : '';
        const Estrategia30num = this.state.estrategiasCompleto[29] ? '30' : '';
        const Estrategia31num = this.state.estrategiasCompleto[30] ? '31' : '';
        const Estrategia32num = this.state.estrategiasCompleto[31] ? '32' : '';
        const Estrategia33num = this.state.estrategiasCompleto[32] ? '33' : '';
        const Estrategia34num = this.state.estrategiasCompleto[33] ? '34' : '';
        const Estrategia35num = this.state.estrategiasCompleto[34] ? '35' : '';
        const Estrategia36num = this.state.estrategiasCompleto[35] ? '36' : '';
        const Estrategia37num = this.state.estrategiasCompleto[36] ? '37' : '';
        const Estrategia38num = this.state.estrategiasCompleto[37] ? '38' : '';
        const Estrategia39num = this.state.estrategiasCompleto[38] ? '39' : '';
        const Estrategia40num = this.state.estrategiasCompleto[39] ? '40' : '';
        const Estrategia41num = this.state.estrategiasCompleto[40] ? '41' : '';
        const Estrategia42num = this.state.estrategiasCompleto[41] ? '42' : '';
        const Estrategia43num = this.state.estrategiasCompleto[42] ? '43' : '';
        const Estrategia44num = this.state.estrategiasCompleto[43] ? '44' : '';
        const Estrategia45num = this.state.estrategiasCompleto[44] ? '45' : '';
        const Estrategia46num = this.state.estrategiasCompleto[45] ? '46' : '';
        const Estrategia47num = this.state.estrategiasCompleto[46] ? '47' : '';
        const Estrategia48num = this.state.estrategiasCompleto[47] ? '48' : '';
        const Estrategia49num = this.state.estrategiasCompleto[48] ? '49' : '';
        const Estrategia50num = this.state.estrategiasCompleto[49] ? '50' : '';
        const Estrategia51num = this.state.estrategiasCompleto[50] ? '51' : '';

        const AutoridadUpperCase = this.state.autoridad.split(':')[0].toUpperCase();
        const AutoridadImg = this.state.autoridad.split(':')[0] == 'bazo' ? 'https://i.imgur.com/BL5179g.png' : this.state.autoridad.split(':')[0] == 'ego' ? 'https://i.imgur.com/NOfTJk4.png' : this.state.autoridad.split(':')[0] == 'gi' ? 'https://i.imgur.com/29SjwaN.png' : this.state.autoridad.split(':')[0] == 'lunar' ? 'https://i.imgur.com/XakZLwg.png' : this.state.autoridad.split(':')[0] == 'mental' ? 'https://i.imgur.com/PjiZjBv.png' : 'https://i.imgur.com/U61AOl9.png';
        const AutoridadTexto = this.state.autoridadTexto;
        const Autoridad1 = this.state.autoridadCompleto[0] ? this.state.autoridadCompleto[0].join('') : '';
        const Autoridad2 = this.state.autoridadCompleto[1] ? this.state.autoridadCompleto[1].join('') : '';
        const Autoridad3 = this.state.autoridadCompleto[2] ? this.state.autoridadCompleto[2].join('') : '';
        const Autoridad4 = this.state.autoridadCompleto[3] ? this.state.autoridadCompleto[3].join('') : '';
        const Autoridad5 = this.state.autoridadCompleto[4] ? this.state.autoridadCompleto[4].join('') : '';
        const Autoridad6 = this.state.autoridadCompleto[5] ? this.state.autoridadCompleto[5].join('') : '';
        const Autoridad7 = this.state.autoridadCompleto[6] ? this.state.autoridadCompleto[6].join('') : '';
        const Autoridad8 = this.state.autoridadCompleto[7] ? this.state.autoridadCompleto[7].join('') : '';
        const Autoridad9 = this.state.autoridadCompleto[8] ? this.state.autoridadCompleto[8].join('') : '';
        const Autoridad10 = this.state.autoridadCompleto[9] ? this.state.autoridadCompleto[9].join('') : '';
        const Autoridad11 = this.state.autoridadCompleto[10] ? this.state.autoridadCompleto[10].join('') : '';
        const Autoridad12 = this.state.autoridadCompleto[11] ? this.state.autoridadCompleto[11].join('') : '';
        const Autoridad13 = this.state.autoridadCompleto[12] ? this.state.autoridadCompleto[12].join('') : '';
        const Autoridad14 = this.state.autoridadCompleto[13] ? this.state.autoridadCompleto[13].join('') : '';
        const Autoridad15 = this.state.autoridadCompleto[14] ? this.state.autoridadCompleto[14].join('') : '';
        const Autoridad16 = this.state.autoridadCompleto[15] ? this.state.autoridadCompleto[15].join('') : '';
        const Autoridad17 = this.state.autoridadCompleto[16] ? this.state.autoridadCompleto[16].join('') : '';
        const Autoridad18 = this.state.autoridadCompleto[17] ? this.state.autoridadCompleto[17].join('') : '';
        const Autoridad19 = this.state.autoridadCompleto[18] ? this.state.autoridadCompleto[18].join('') : '';
        const Autoridad20 = this.state.autoridadCompleto[19] ? this.state.autoridadCompleto[19].join('') : '';
        const Autoridad21 = this.state.autoridadCompleto[20] ? this.state.autoridadCompleto[20].join('') : '';
        const Autoridad22 = this.state.autoridadCompleto[21] ? this.state.autoridadCompleto[21].join('') : '';
        const Autoridad23 = this.state.autoridadCompleto[22] ? this.state.autoridadCompleto[22].join('') : '';
        const Autoridad24 = this.state.autoridadCompleto[23] ? this.state.autoridadCompleto[23].join('') : '';
        const Autoridad25 = this.state.autoridadCompleto[24] ? this.state.autoridadCompleto[24].join('') : '';

        const Autoridad1num = this.state.autoridadCompleto[0] ? '1' : '';
        const Autoridad2num = this.state.autoridadCompleto[1] ? '2' : '';
        const Autoridad3num = this.state.autoridadCompleto[2] ? '3' : '';
        const Autoridad4num = this.state.autoridadCompleto[3] ? '4' : '';
        const Autoridad5num = this.state.autoridadCompleto[4] ? '5' : '';
        const Autoridad6num = this.state.autoridadCompleto[5] ? '6' : '';
        const Autoridad7num = this.state.autoridadCompleto[6] ? '7' : '';
        const Autoridad8num = this.state.autoridadCompleto[7] ? '8' : '';
        const Autoridad9num = this.state.autoridadCompleto[8] ? '9' : '';
        const Autoridad10num = this.state.autoridadCompleto[9] ? '10' : '';
        const Autoridad11num = this.state.autoridadCompleto[10] ? '11' : '';
        const Autoridad12num = this.state.autoridadCompleto[11] ? '12' : '';
        const Autoridad13num = this.state.autoridadCompleto[12] ? '13' : '';
        const Autoridad14num = this.state.autoridadCompleto[13] ? '14' : '';
        const Autoridad15num = this.state.autoridadCompleto[14] ? '15' : '';
        const Autoridad16num = this.state.autoridadCompleto[15] ? '16' : '';
        const Autoridad17num = this.state.autoridadCompleto[16] ? '17' : '';
        const Autoridad18num = this.state.autoridadCompleto[17] ? '18' : '';
        const Autoridad19num = this.state.autoridadCompleto[18] ? '19' : '';
        const Autoridad20num = this.state.autoridadCompleto[19] ? '20' : '';
        const Autoridad21num = this.state.autoridadCompleto[20] ? '21' : '';
        const Autoridad22num = this.state.autoridadCompleto[21] ? '22' : '';
        const Autoridad23num = this.state.autoridadCompleto[22] ? '23' : '';
        const Autoridad24num = this.state.autoridadCompleto[23] ? '24' : '';
        const Autoridad25num = this.state.autoridadCompleto[24] ? '25' : '';

        //CENTROS!!!
        let PuertaImg1 = puertasImg[this.state.cruzUno[0].replace(/[^0-9]+/, '') ];
        let PuertaImg2 = puertasImg[this.state.cruzUno[1].replace(/[^0-9]+/, '') ];
        let PuertaImg3 = puertasImg[this.state.cruzDos[0].replace(/[^0-9]+/, '') ];
        let PuertaImg4 = puertasImg[this.state.cruzDos[1].replace(/[^0-9]+/, '') ];

        let CanalImg1 = this.state.canales[0] ? canalesImg[this.state.canales[0]] : '';
        let CanalImg2 = this.state.canales[1] ? canalesImg[this.state.canales[1]] : '';
        let CanalImg3 = this.state.canales[2] ? canalesImg[this.state.canales[2]] : '';
        let CanalImg4 = this.state.canales[3] ? canalesImg[this.state.canales[3]] : '';
        let CanalImg5 = this.state.canales[4] ? canalesImg[this.state.canales[4]] : '';
        let CanalImg6 = this.state.canales[5] ? canalesImg[this.state.canales[5]] : '';
        let CanalImg7 = this.state.canales[6] ? canalesImg[this.state.canales[6]] : '';
        let CanalImg8 = this.state.canales[7] ? canalesImg[this.state.canales[7]] : '';
        let CanalImg9 = this.state.canales[8] ? canalesImg[this.state.canales[8]] : '';
        let CanalImg10 = this.state.canales[9] ? canalesImg[this.state.canales[9]] : '';
        
        let PerfilImg = perfilesImg[this.state.perfilCompleto.toUpperCase()];
        console.log(PerfilImg);
     
        let perfilindex = 0;
         perfilesCompleto.forEach((e,i) => {
            if (e.name == this.state.perfilCompleto.toUpperCase()) {    
                perfilindex = i;
            }
        });

        const PerfilUpperCase = this.state.perfilCompleto.toUpperCase();
        const Perfil1 = perfilesCompleto[perfilindex].desc[0] ? perfilesCompleto[perfilindex].desc[0].join('') : '';
        const Perfil2 = perfilesCompleto[perfilindex].desc[1] ? perfilesCompleto[perfilindex].desc[1].join('') : '';
        const Perfil3 = perfilesCompleto[perfilindex].desc[2] ? perfilesCompleto[perfilindex].desc[2].join('') : '';
        const Perfil4 = perfilesCompleto[perfilindex].desc[3] ? perfilesCompleto[perfilindex].desc[3].join('') : '';
        const Perfil5 = perfilesCompleto[perfilindex].desc[4] ? perfilesCompleto[perfilindex].desc[4].join('') : '';
        const Perfil6 = perfilesCompleto[perfilindex].desc[5] ? perfilesCompleto[perfilindex].desc[5].join('') : '';
        const Perfil7 = perfilesCompleto[perfilindex].desc[6] ? perfilesCompleto[perfilindex].desc[6].join('') : '';
        const Perfil8 = perfilesCompleto[perfilindex].desc[7] ? perfilesCompleto[perfilindex].desc[7].join('') : '';
        const Perfil9 = perfilesCompleto[perfilindex].desc[8] ? perfilesCompleto[perfilindex].desc[8].join('') : '';
        const Perfil10 = perfilesCompleto[perfilindex].desc[9] ? perfilesCompleto[perfilindex].desc[9].join('') : '';
        const Perfil11 = perfilesCompleto[perfilindex].desc[10] ? perfilesCompleto[perfilindex].desc[10].join('') : '';
        const Perfil12 = perfilesCompleto[perfilindex].desc[11] ? perfilesCompleto[perfilindex].desc[11].join('') : '';
        const Perfil13 = perfilesCompleto[perfilindex].desc[12] ? perfilesCompleto[perfilindex].desc[12].join('') : '';
        const Perfil14 = perfilesCompleto[perfilindex].desc[13] ? perfilesCompleto[perfilindex].desc[13].join('') : '';
        const Perfil15 = perfilesCompleto[perfilindex].desc[14] ? perfilesCompleto[perfilindex].desc[14].join('') : '';
        const Perfil16 = perfilesCompleto[perfilindex].desc[15] ? perfilesCompleto[perfilindex].desc[15].join('') : '';
        const Perfil17 = perfilesCompleto[perfilindex].desc[16] ? perfilesCompleto[perfilindex].desc[16].join('') : '';
        const Perfil18 = perfilesCompleto[perfilindex].desc[17] ? perfilesCompleto[perfilindex].desc[17].join('') : '';
        const Perfil19 = perfilesCompleto[perfilindex].desc[18] ? perfilesCompleto[perfilindex].desc[18].join('') : '';
        const Perfil20 = perfilesCompleto[perfilindex].desc[19] ? perfilesCompleto[perfilindex].desc[19].join('') : '';
        const Perfil21 = perfilesCompleto[perfilindex].desc[20] ? perfilesCompleto[perfilindex].desc[20].join('') : '';
        const Perfil22 = perfilesCompleto[perfilindex].desc[21] ? perfilesCompleto[perfilindex].desc[21].join('') : '';
        const Perfil23 = perfilesCompleto[perfilindex].desc[22] ? perfilesCompleto[perfilindex].desc[22].join('') : '';
        const Perfil24 = perfilesCompleto[perfilindex].desc[23] ? perfilesCompleto[perfilindex].desc[23].join('') : '';
        const Perfil25 = perfilesCompleto[perfilindex].desc[24] ? perfilesCompleto[perfilindex].desc[24].join('') : '';

        const Perfil1num = perfilesCompleto[perfilindex].desc[0] ? '0' : '';
        const Perfil2num = perfilesCompleto[perfilindex].desc[1] ? '1' : '';
        const Perfil3num = perfilesCompleto[perfilindex].desc[2] ? '2' : '';
        const Perfil4num = perfilesCompleto[perfilindex].desc[3] ? '3' : '';
        const Perfil5num = perfilesCompleto[perfilindex].desc[4] ? '4' : '';
        const Perfil6num = perfilesCompleto[perfilindex].desc[5] ? '5' : '';
        const Perfil7num = perfilesCompleto[perfilindex].desc[6] ? '6' : '';
        const Perfil8num = perfilesCompleto[perfilindex].desc[7] ? '7' : '';
        const Perfil9num = perfilesCompleto[perfilindex].desc[8] ? '8' : '';
        const Perfil10num = perfilesCompleto[perfilindex].desc[9] ? '9' : '';
        const Perfil11num = perfilesCompleto[perfilindex].desc[10] ? '10' : '';
        const Perfil12num = perfilesCompleto[perfilindex].desc[11] ? '11' : '';
        const Perfil13num = perfilesCompleto[perfilindex].desc[12] ? '12' : '';
        const Perfil14num = perfilesCompleto[perfilindex].desc[13] ? '13' : '';
        const Perfil15num = perfilesCompleto[perfilindex].desc[14] ? '14' : '';
        const Perfil16num = perfilesCompleto[perfilindex].desc[15] ? '15' : '';
        const Perfil17num = perfilesCompleto[perfilindex].desc[16] ? '16' : '';
        const Perfil18num = perfilesCompleto[perfilindex].desc[17] ? '17' : '';
        const Perfil19num = perfilesCompleto[perfilindex].desc[18] ? '18' : '';
        const Perfil20num = perfilesCompleto[perfilindex].desc[19] ? '19' : '';
        const Perfil21num = perfilesCompleto[perfilindex].desc[20] ? '20' : '';
        const Perfil22num = perfilesCompleto[perfilindex].desc[21] ? '21' : '';
        const Perfil23num = perfilesCompleto[perfilindex].desc[22] ? '22' : '';
        const Perfil24num = perfilesCompleto[perfilindex].desc[23] ? '23' : '';
        const Perfil25num = perfilesCompleto[perfilindex].desc[24] ? '24' : '';

        const DefinicionUpperCase = this.state.definicion.toUpperCase();
        let ModoDefinicion, Porcentaje, Areas, ElementosPrincipal, ElementosSecundario, Tiempo, Influencia, Grafico;
        
        definicionCompleto.forEach(e => {
            if (e.definicion == this.state.definicion) {
                ModoDefinicion = e.modo;
                Porcentaje = e.porcentaje;
                ElementosPrincipal= e.elementosPrincipal;
                ElementosSecundario = e.elementosSecundario;
                Tiempo = e.tiempo;
                Influencia = e.influencia;
                Areas = e.areas;
                Grafico = definicionesImg[this.state.definicion];
            }
        });

            
       
        //CRUZES!!!!
    
        let params =  {
            bodygraph,
            name,
            fecha,
            hora,
            lugar,
            tipo,
            tipodesc,
            corr,
            incorr,
            estrategia,
            autoridad,
            perfilUno,
            perfilDos,
            perfilDescripcion,
            definicion,
            currdate,
            cabeza,
            ajna,
            garganta,
            gi,
            corazon,
            plexosolar,
            sacral,
            bazo,
            raiz,
            puertasUno,
            puertasDos,
            cruzNombre,
            CanalUno,
            CanalDos,
            CanalTres,
            CanalCuatro,
            CanalCinco,
            CanalSeis,
            CanalSiete, 
            CanalOcho,
            TipoUpperCase,
        TipoPorcentaje,
        DefinidoUno,
        DefinidoDos,
        DefinicionUnoImg,
        DefinicionDosImg,
        Conectado,
        Aura,
        TipoImg,
        Modo,
        EstrategiaCompleto,
        Rol,
        Tema,
        Busqueda,
        Dilema,
        Psicologia,
        Pregunta,
        NoSer,
        TipoLineaUno,
        TipoLineaDos,
        TipoLineaTres,
        TipoLineaCuatro,
        TipoLineaCinco,
        TipoLineaSeis,
        TipoLineaSeite,
        TipoLineaOcho,
        TipoLineaNueve,
        TipoLineaDiez,
        TipoLineaOnce,
        TipoUpperCaseDos,
        TipoImgDos,
        
        Estrategia1,
        Estrategia2,
        Estrategia3,
        Estrategia4,
        Estrategia5,
        Estrategia6,
        Estrategia7,
        Estrategia8,
        Estrategia9,
        Estrategia10,
        Estrategia11,
        Estrategia12,
        Estrategia13,
        Estrategia14,
        Estrategia15,
        Estrategia16,
        Estrategia17,
        Estrategia18,
        Estrategia19,
        Estrategia20,
        Estrategia21,
        Estrategia22,
        Estrategia23,
        Estrategia24,
        Estrategia25,
        Estrategia26,
        Estrategia27,
        Estrategia28,
        Estrategia29,
        Estrategia30,
        Estrategia31,
        Estrategia32,
        Estrategia33,
        Estrategia34,
        Estrategia35,
        Estrategia36,
        Estrategia37,
        Estrategia38,
        Estrategia39,
        Estrategia40,
        Estrategia41,
        Estrategia42,
        Estrategia43,
        Estrategia44,
        Estrategia45,
        Estrategia46,
        Estrategia47,
        Estrategia48,
        Estrategia49,
        Estrategia50,
        Estrategia51,

        Estrategia1num,
        Estrategia2num,
        Estrategia3num,
        Estrategia4num,
        Estrategia5num,
        Estrategia6num,
        Estrategia7num,
        Estrategia8num,
        Estrategia9num,
        Estrategia10num,
        Estrategia11num,
        Estrategia12num,
        Estrategia13num,
        Estrategia14num,
        Estrategia15num,
        Estrategia16num,
        Estrategia17num,
        Estrategia18num,
        Estrategia19num,
        Estrategia20num,
        Estrategia21num,
        Estrategia22num,
        Estrategia23num,
        Estrategia24num,
        Estrategia25num,
        Estrategia26num,
        Estrategia27num,
        Estrategia28num,
        Estrategia29num,
        Estrategia30num,
        Estrategia31num,
        Estrategia32num,
        Estrategia33num,
        Estrategia34num,
        Estrategia35num,
        Estrategia36num,
        Estrategia37num,
        Estrategia38num,
        Estrategia39num,
        Estrategia40num,
        Estrategia41num,
        Estrategia42num,
        Estrategia43num,
        Estrategia44num,
        Estrategia45num,
        Estrategia46num,
        Estrategia47num,
        Estrategia48num,
        Estrategia49num,
        Estrategia50num,
        Estrategia51num,

        AutoridadUpperCase,
        AutoridadImg,
        AutoridadTexto,
        Autoridad1,
        Autoridad2,
        Autoridad3,
        Autoridad4,
        Autoridad5,
        Autoridad6,
        Autoridad7,
        Autoridad8,
        Autoridad9,
        Autoridad10,
        Autoridad11,
        Autoridad12,
        Autoridad13,
        Autoridad14,
        Autoridad15,
        Autoridad16,
        Autoridad17,
        Autoridad18,
        Autoridad19,
        Autoridad20,
        Autoridad21,
        Autoridad22,
        Autoridad23,
        Autoridad24,
        Autoridad25,

        Autoridad1num,
        Autoridad2num,
        Autoridad3num,
        Autoridad4num,
        Autoridad5num,
        Autoridad6num,
        Autoridad7num,
        Autoridad8num,
        Autoridad9num,
        Autoridad10num,
        Autoridad11num,
        Autoridad12num,
        Autoridad13num,
        Autoridad14num,
        Autoridad15num,
        Autoridad16num,
        Autoridad17num,
        Autoridad18num,
        Autoridad19num,
        Autoridad20num,
        Autoridad21num,
        Autoridad22num,
        Autoridad23num,
        Autoridad24num,
        Autoridad25num,

       
        PuertaImg1,
        PuertaImg2,
        PuertaImg3,
        PuertaImg4,

        CanalImg1,
        CanalImg2,
        CanalImg3,
        CanalImg4,
        CanalImg5,
        CanalImg6,
        CanalImg7,
        CanalImg8,
        CanalImg9,
        CanalImg10,
        
        PerfilImg,
        
     
        perfilindex,
         

        PerfilUpperCase,
        Perfil1,
        Perfil2,
        Perfil3,
        Perfil4,
        Perfil5,
        Perfil6,
        Perfil7,
        Perfil8,
        Perfil9,
        Perfil10,
        Perfil11,
        Perfil12,
        Perfil13,
        Perfil14,
        Perfil15,
        Perfil16,
        Perfil17,
        Perfil18,
        Perfil19,
        Perfil20,
        Perfil21,
        Perfil22,
        Perfil23,
        Perfil24,
        Perfil25,

        Perfil1num,
        Perfil2num,
        Perfil3num,
        Perfil4num,
        Perfil5num,
        Perfil6num,
        Perfil7num,
        Perfil8num,
        Perfil9num,
        Perfil10num,
        Perfil11num,
        Perfil12num,
        Perfil13num,
        Perfil14num,
        Perfil15num,
        Perfil16num,
        Perfil17num,
        Perfil18num,
        Perfil19num,
        Perfil20num,
        Perfil21num,
        Perfil22num,
        Perfil23num,
        Perfil24num,
        Perfil25num,
        DefinicionUpperCase,
         ModoDefinicion,
          Porcentaje,
           Areas, 
           ElementosPrincipal,
            ElementosSecundario,
             Tiempo,
              Influencia, 
              Grafico
          }    
          console.log(params);
          console.log('params');
         axios.post(`${window.location.origin}/downloadpdfcompleto`, {params}).catch(error => console.log(error));
   }

    componentDidMount() {
         this.setState({
            firstName: this.props.firstName,
        lastName: this.props.lastName,
        fecha: this.props.fecha,
        hora: this.props.hora,
        lugar: this.props.lugar,
        sexo: this.props.sexo,
        tipo: this.props.tipo,
        autoridad: this.props.autoridad,
        canales: this.props.canales,
        centros: this.props.centros,
        cruzIncarnacion: this.props.cruzIncarnacion,
        definicion: this.props.definicion,
        estrategia: this.props.estrategia,
        perfil: this.props.perfil,
        puertas: this.props.puertas,
        variables: this.props.variables,
        perfilUno: this.props.perfil.num.split('')[0],
        perfilDos: this.props.perfil.num.split('')[2],
        bodygraph: this.props.bodygraph,
        cruzUno: this.props.cruz.design.split('/'), 
        cruzDos: this.props.cruz.person.split('/'),
        cruzadd: this.props.cruzadd,
        email: this.props.email,
        allPuertas: [this.props.cruz.design.split('/'), this.props.cruz.person.split('/')].flat(2),
        cabezaCentro: this.props.cabezaCentro,
            ajnaCentro: this.props.ajnaCentro,
            gargantaCentro: this.props.gargantaCentro,
            giCentro: this.props.giCentro,
            corazonCentro: this.props.corazonCentro,
            plexosolarCentro: this.props.plexosolarCentro,
            sacralCentro: this.props.sacralCentro,
            bazoCentro: this.props.bazoCentro,
            raizCentro: this.props.raizCentro,
            allCentros: this.props.allCentros,
        updated: false
         });
         this.getCurrDate();
    }

    componentDidUpdate(prevProps, prevState) {
        const translatedWords = ['Proyector', 'Proyectora', 'Manifestador', 'Manifestadora', 'Generador Manifestante', 'Generadora Manifestante', 'Generador', 'Generadora', 'Reflector', 'Reflectora' ]
        const isTranslated = translatedWords.includes(this.state.tipo);
        if (!isTranslated) { 
            this.translateHelper();
        }
        if (!this.state.descadded){
        this.addDescription();
    }
        

        
        this.cruzWorker();
        

        if (this.state.cabezaCentro === 'no') {
            this.displayParts();
            if (!this.state.updated){
                this.updated();
            }
            }   
    }

    
    

    render() {
        return (
            <div className='result'>


                <h1>Resultado</h1>
                <Button onClick={this.convertToPdf}>Descargar</Button>
                <Button onClick={this.sendMail}>Enviar correo</Button>
                <Button onClick={this.test}>TEST</Button>
                    <Container fluid>
                    <Row>
                        <Col><img className='logo' src={logo} alt='logo' /></Col>
                        <Col><h3>Basic Design</h3></Col>
                        <Col>{this.state.date} {this.state.time}</Col>
                    </Row>

                    <Row className='border'>
                        <Col className='border'>NOMBRE</Col>
                        <Col className='border text-center'>{this.state.firstName} {this.state.lastName}</Col>
                        <Col className='border'>FECHA</Col>
                        <Col className='border'>{this.state.fecha}</Col>
                        <Col className='border'>HORA</Col>
                        <Col className='border'>{this.state.hora}</Col>
                        <Col className='border'>LUGAR</Col>
                        <Col className='border'>{this.state.lugar}</Col>
                    </Row>

                    <Row>
                        <Col className='border bold' xs={3}>TIPO 
                        <Popup
                            trigger={<Button> ? </Button>}
                            position="top center"
                            nested
                        >
                            <div>
                            Nos presenta a cual de los cinco tipos energéticos pertenecemos y sus características
                                </div>
                                </Popup>
                        </Col>
                        <Col className='border' xs={3}>
                            <Row className='border'>{this.state.tipo.toUpperCase()}</Row>
                            
                            <Row className='border lightyellow'>¿CUANTOS HAY COMO TÚ?</Row>
                            <Row className='border '>{this.state.cuantas}</Row>
                            
                        </Col>
                        <Col className='border'>
                            <Row>{this.state.typeDescription} </Row>
                            <Row className='lightyellow'>Esta cifra es de los millones de personas que hay con tu mismo tipo, pero recuerda que como túsolo hay UNA</Row>
                        </Col>
                    </Row>

                    <Row>
                        <Col className='border bold' xs={3}>ESTRATEGIA
                        <Popup
                            trigger={<Button> ? </Button>}
                            position="top center"
                            nested
                        >
                            <div>
                            Es la manera que el diseño te propone para afrontar la vida de forma correcta en base a tu Tipo
                                </div>
                                </Popup>
                        </Col>
                        <Col className='border lightyellow' xs={3} >COMO AFRONTAR LA VIDA</Col>
                        <Col className='border' >{this.state.estrategia}</Col>
                        <Col className='border'>
                            <Row className='lightgreen '>CORRECTO</Row>
                            <Row>{this.state.corr}</Row>
                        </Col>
                        <Col className='border'>
                            <Row className='orange'>INCORRECTO</Row>
                            <Row>{this.state.incorr}</Row>
                        </Col>
                    </Row>

                    <Row>
                        <Col className='border bold' xs={3}>AUTORIDAD
                        <Popup
                            trigger={<Button> ? </Button>}
                            position="top center"
                            nested
                        >
                            <div>
                            Es la forma sencilla y adecuada de que tu tipología aprenda a tomar las decisiones que te son adecuadas
                                </div>
                                </Popup>
                        </Col>
                        <Col className='border lightyellow' xs={3}>COMO TOMAR LAS DECISIONES ADECUADAS</Col>
                        <Col className='border' xs={6}>{this.state.autoridad}</Col>
                    </Row>

                    <Row>
                        <Col className='border bold' xs={3}>DEFINICIÓN
                        <Popup
                            trigger={<Button> ? </Button>}
                            position="top center"
                            nested
                        >
                            <div>
                            Nos muestra cuantas activaciones de energía tienes  y como se interaccionan y componen en tu plano energético
                                </div>
                                </Popup>
                        </Col>
                        <Col className='border lightyellow' xs={6}>Es la forma en que nuestrossistemas de energíase conectan entre sí, dando como resultado diferentes configuraciones, dependiendo la disposición de las puertas</Col>
                        <Col className='border text-center' xs={3}>{this.state.definicion}</Col>
                    </Row>
                    </Container>
                    

                    


                    <Container fluid>
                        <h1 className='text-center' >TUS CENTROS ENERGÉTICOS <Popup
                            trigger={<Button> ? </Button>}
                            position="top center"
                            nested
                        >
                            <div>
                            Los nueve centros que definen los bloque de energía diferenciada  con sus cualidades propias y únicas
                                </div>
                            </Popup></h1>
                        <Row className='border lightyellow'>Tienes 9 centros y cada uno con sus características concretas,los coloreados estánactivados y por ellos emites y los que estánen blanco estánabiertos y por ellos recibes la informaciónde tu entornoo personas que te rodean</Row>
                        <div className='hideonlargescreen'>]
                         <img  src={this.state.bodygraph}/>
                         <Popup
                            trigger={<Button> ? </Button>}
                            position="top center"
                            nested
                        >
                            <div>
                            Es el plano energético donde está toda la información que nos ofrece el Diseño Humano
                                </div>
                            </Popup>
                        </div>
                    <Row>
                        <Col className='border'>
                        <Row>
                        <Col className='border bold' >CABEZA</Col>
                        <Col className='border'>{this.state.cabezaCentro == 'opened' ? <img className='openclose' src={cabezaAbierto} /> : <img className='openclose' src={cabezaCerrado} /> }</Col>
                        <Col className='border lightyellow'>Son las preguntas, las dudas y la presion para que se expanda la conciencia</Col>
                        </Row>

                        <Row>
                        <Col className='border bold'>GARGANTA</Col>
                        <Col className='border'>{this.state.gargantaCentro == 'opened' ? <img className='openclose' src={gargantaAbierto} /> : <img className='openclose' src={gargantaCerrado} />}</Col>
                        <Col className='border lightyellow'>Pensamiento emoción y sentimientos en palabras y hechos</Col>
                        </Row>

                        <Row>
                        <Col className='border bold'>CORAZON</Col>
                        <Col className='border'>  {this.state.corazonCentro == 'opened' ? <img className='openclose' src={corazonAbierto} /> : <img className='openclose' src={corazonCerrado} />} </Col>
                        <Col className='border lightyellow'>La supervivencia material. El impulso de la voluntad hacia la autoestima</Col>
                        </Row>

                        <Row>
                        <Col className='border bold'>SACRAL</Col>
                        <Col className='border'>{this.state.sacralCentro == 'opened' ? <img className='openclose' src={sacralAbierto} /> : <img className='openclose' src={sacralCerrado} />}</Col>
                        <Col className='border lightyellow'>Energía vital para hacer cosas y activación del impulso sexual </Col>
                        </Row>


                        <Row>
                        <Col className='border bold'>RAIZ</Col>
                        <Col className='border'>{this.state.raizCentro == 'opened' ? <img className='openclose' src={raizAbierto} /> : <img className='openclose' src={raizCerrado} />} </Col>
                        <Col className='border lightyellow'>El impulso de crecer, la presión de ser, el estrés, la adrenalina </Col>
                        </Row>

                        

                        </Col>

                        <Col className='border d-none d-lg-block '>

                    <Row><img className='img-fluid h-100' src={this.state.bodygraph}/></Row>
                    <Popup
                            trigger={<Button> ? </Button>}
                            position="top center"
                            nested
                        >
                            <div>
                            Es el plano energético donde está toda la información que nos ofrece el Diseño Humano
                                </div>
                                </Popup>
                     
                        
                        </Col>

                        <Col className='border'>
                        <Row>
                        <Col className='border bold'>AJNA</Col>
                        <Col className='border'>{this.state.ajnaCentro == 'opened' ? <img className='openclose' src={ajnaAbierto} /> : <img className='openclose' src={ajnaCerrado} /> }</Col>
                        <Col className='border lightyellow'>Analiza e investiga la vida de forma intelectual racional, autorreflexiva</Col>
                        </Row>

                        <Row>
                        <Col className='border bold'>GI</Col>
                        <Col className='border'>{this.state.giCentro == 'opened' ? <img className='openclose' src={GIAbierto} /> : <img className='openclose' src={GICerrado} />}</Col>
                        <Col className='border lightyellow'>Marca la identidad del ser, el amor y la dirección hacia la Fuente superior </Col>
                        </Row>

                        <Row>
                        <Col className='border bold'>PLEXO</Col>
                        <Col className='border'>{this.state.plexosolarCentro == 'opened' ? <img className='openclose' src={plexoAbierto} /> : <img className='openclose' src={plexoCerrado} />}</Col>
                        <Col className='border lightyellow'>La experiencia de los sentimientos, las emociones, sensaciones</Col>
                        </Row>

                        <Row>
                        <Col className='border bold'>BAZO</Col>
                        <Col className='border'>{this.state.bazoCentro == 'opened' ? <img className='openclose' src={bazoAbierto} /> : <img className='openclose' src={bazoCerrado} /> }</Col>
                        <Col className='border lightyellow'>La conciencia del cuerpo, la intuición, el gusto, los miedos</Col>
                        </Row>

                        <Row >
                        <Col className='border lightgreen bold'>LA GRAN BÚSQUEDA</Col>
                        <Col className='border lightgreen bold'>Estar en el lugar correcto Con la persona adecuada Haciendo lo que te gusta</Col>
                       
                        </Row>
                        
                        </Col>
                    </Row>
                    <Row >
                        <Col className='border bold'>PERFIL 
                        <Popup
                            trigger={<Button> ? </Button>}
                            position="top center"
                            nested
                        >
                            <div>
                            Muestran la energía que nos pone delante nuestro verdadero personaje
                                </div>
                            </Popup>
                        </Col>
                        <Col className='border lightyellow'>NUESTRO PERSONAJE AUTENTICO</Col>
                        
                            <Col className='border red '>{this.state.perfilUno}</Col>
                            <Col className='border black'>{this.state.perfilDos}</Col>
                            <Col className='border'>{this.state.perfilCompleto}</Col>
                        
                        </Row>
                    </Container>
                    <br />
                    <Container fluid>
                        <Row>
                            <Col >
                                <Row>
                                    <Col className='border-top border-bottom border-left redtext'>
                                    <div className='text-center'>INCONSCIENTES</div>
                                    
                                    <Row className='border-top border-bottom border-left'>
                                    {this.state.cruzUno[0]}
                                    </Row>
                                    <Row className='border-top  border-left'>
                                    {this.state.cruzUno[1]}
                                    </Row>
                                    </Col>
                                </Row>
                            </Col>

                            <Col className='border'>
                                <Row>
                                    <Col  >
                                    <Row>PUERTAS
                                    <Popup
                            trigger={<Button> ? </Button>}
                            position="top center"
                            nested
                        >
                            <div>
                            Marcan las cualidades más poderosas que configuran tu plano energético
                                </div>
                                </Popup>

                                    </Row>
                                    <Row className='lightyellow border-top'>LAS CUALIDADES</Row>
                                    <Row className='lightyellow'> QUE MARCAN TU VIDA</Row>
                                    </Col>
                                    </Row>
                            </Col>

                            <Col className='border'>
                                <Row>
                                    <Col className='border bold'>
                                    <div className='text-center'> CONSCIENTES </div>
                                    
                                    <Row className='border-top border-bottom '>
                                    {this.state.cruzDos[0]}
                                    </Row>
                                    <Row className='border-top'>
                                    {this.state.cruzDos[1]}
                                    </Row>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>

                        <Row>
                            <Col className='border'>CRUZ 

                            <Popup
                            trigger={<Button> ? </Button>}
                            position="top center"
                            nested
                        >
                            <div>
                            Muestra nuestro propósito a realizar en esta vida
                                </div>
                                </Popup>
                            
                            </Col>
                            <Col className='border lightyellow'>TU VERDADERO PROPÓSITO</Col>
                            <Col className='border'>{this.state.cruzstr}</Col>
                        </Row>

                        <Row>
                            <Col className='border'></Col>
                            <Col className='border'>CANALES
                            <Popup
                            trigger={<Button> ? </Button>}
                            position="top center"
                            nested
                        >
                            <div>
                            Muestran la energía de nuestras características vitales
                                </div>
                                </Popup>
                            </Col>
                            <Col className='border lightyellow'>TUS CARACTERÍSTICAS VITALES</Col>
                        </Row>

                        {this.state.canalesCompleto.map((e,i) => <Row className='border'>{i} {e}</Row>)}
                        
                       
                        <Row>NOTAS Y RESUMEN</Row>
                        <Row><input type='text' onChange={this.textChange} className=' form-control form-control-lg mb-2' /></Row>
                        
                        

                    </Container>

                



<Container>
    <Row className='border'>
        <Col className='border'><img src={logo} alt='logo' /></Col>
        <Col className='border'>{this.state.tipo}</Col>
        <Col className='border'>{this.state.porcentaje}</Col>
        <Col className='border'> { this.state.tipo == 'Generador Manifestante' ? <img src={generadormanifestantemain} /> : this.state.tipo == 'Generador' ? <img src={generadormain} /> : this.state.tipo == 'Manifestador' ? <img src={manifestadormain} /> : this.state.tipo == 'Proyector' ? <img src={proyectormain} /> : <img src={reflectormain} />  } </Col>    
    </Row>
    <Row className='border'>
        <Col className='border'>{this.state.definicionUno}</Col>
        <Col className='border'>{this.state.tipo != 'Reflector' ? <img src={allButReflector} /> : <img src={onlyReflector} />}</Col>
        <Col className='border'>{this.state.definicionDos}</Col>
        <Col className='border'>{ (this.state.tipo != 'Reflector' || this.state.tipo != 'Proyector') ? <img src={allbutreflectorProyector} /> : '' }</Col>    
    </Row>
    <Row className='border'>
        <Col className='border'>{this.state.conectado}</Col>
    </Row>
    <Row className='border'>
        <Col className='border'>AURA: {this.state.aura}</Col>

    </Row>
    <Row className='border'>
        <Col className='border'>MODO</Col>
        <Col className='border'>{this.state.modo}</Col>
    </Row>
    <Row className='border'>
        <Col className='border'>ESTRATEGIA</Col>
        <Col className='border'>{this.state.estrategia}</Col>
    </Row>
    <Row className='border'>
        <Col className='border'>ROL</Col>
        <Col className='border'>{this.state.rol}</Col>
    </Row>
    <Row className='border'>
        <Col className='border'>TEMA GENERAL</Col>
        <Col className='border'>{this.state.temaGeneral}</Col>
    </Row>
    <Row className='border'>
        <Col className='border'>BÚSQUEDA</Col>
        <Col className='border'>{this.state.busqueda}</Col>
    </Row>
    <Row className='border'>
        <Col className='border'>DILEMA MENTAL</Col>
        <Col className='border'>{this.state.dilemaMental}</Col>
    </Row>
    <Row className='border'>
        <Col className='border'>PSICOLOGÍA</Col>
        <Col className='border'>{this.state.psigologia}</Col>
    </Row>
    <Row className='border'>
        <Col className='border'>PREGUNTA INTERNA</Col>
        <Col className='border'>{this.state.preguntaInterna}</Col>
    </Row>
    <Row className='border'>
        <Col className='border'>TEMA EN EL “NO SER”</Col>
        <Col className='border'>{this.state.noSer}</Col>
    </Row>
     {this.state.lista.map(e => {
       return (
       <>
       <Row className='border'>
            <Col className='border'>
            {e}
            </Col>
        </Row>
        
        </>)
    })
}  
</Container>
<Row className='border'>
    <Col className='border'> {this.state.tipo} </Col>
    <Col className='border'> <h1>Estrategias</h1>   </Col>
    <Col className='border'>{ this.state.tipo == 'Generador Manifestante' ? <img src={generadormanifestantemain} /> : this.state.tipo == 'Generador' ? <img src={generadormain} /> : this.state.tipo == 'Manifestador' ? <img src={manifestadormain} /> : this.state.tipo == 'Proyector' ? <img src={proyectormain} /> : <img src={reflectormain} />  }</Col>
</Row>
{this.state.estrategiasCompleto.map((e,i) => {
    return (
        <Row className='border' >
            <Col className='border'>{i}</Col>
            <Col className='border'>{e}</Col>
        </Row>
    )
})}
<Container>
    <Row className='border'>
        <Col className='border'><h1>LA AUTORIDAD</h1></Col>
        <Col className='border'>
            <Row className='border'>
            Jerarquía de la Autoridad
            </Row>
            <Row className='border'>1. Plexo Solar</Row>
            <Row className='border'>2. Sacral</Row>
            <Row className='border'>3. Bazo</Row>
            <Row className='border'>4. Corazón</Row>
            <Row className='border'>5. GI</Row>
            <Row className='border'>6. Entorno</Row>
            <Row className='border'>7. Lunar</Row>
        </Col>
        <Col className='border'>
        LA MENTE
        <img src={autoridadfijoimg} />
        </Col>
        <Col className='border'>
        Pensar 
        Cuestionar 
        Interpretar 
        Enseñar 
        Inspirar 
        Recordar 
        Organizar 
        Nombrar 
        Procesar datos
        </Col>
    </Row>
    <Row className='border'>
        <h1>ES NUESTRA ÚNICA VERDAD AUTÉNTICA</h1>
    </Row>
    {autoridadFijo.map((e,i) => {
        return (
            <Row className='border'>
                <Col className='border'>{i}</Col>
                <Col className='border'>{e}</Col>
            </Row>
        )

    })}
</Container>

<Container>
    <Row className='border'>
        <Col className='border'>{this.state.autoridad.split(':')[0]}</Col>
        <Col className='border'>
            <Row className='border'>
            Jerarquía de la Autoridad
            </Row>
            <Row className='border'>1. Plexo Solar</Row>
            <Row className='border'>2. Sacral</Row>
            <Row className='border'>3. Bazo</Row>
            <Row className='border'>4. Corazón</Row>
            <Row className='border'>5. GI</Row>
            <Row className='border'>6. Entorno</Row>
            <Row className='border'>7. Lunar</Row>
        </Col>
        <Col className='border'>
        <img src={this.state.autoridadImg} />
        </Col>
        <Col className='border'>
        {this.state.autoridadTexto}
        </Col>
    </Row>
   
    {this.state.autoridadCompleto.map((e,i) => {
        return (
            <Row className='border'>
                <Col className='border'>{i}</Col>
                <Col className='border'>{e}</Col>
            </Row>
        )

    })}
</Container>

<Container>
{this.state.cruzCompleto[0].texto[1] && <h1>Cruz</h1>}
{this.state.cruzCompleto[0].texto[1] && <h1>{this.state.cruzstr}</h1> }
{this.state.cruzCompleto[0].texto[1] && <img class="rounded float-left" src={this.state.cruzCompleto[0].img} /> }
{this.state.cruzCompleto[0].texto[1] && this.state.cruzCompleto[0].texto.map(e => <p>{e}</p>) }
</Container>

<Container>
    {centrosCompleto.map((e,i) => {
        return (
            <>
            <Row className='border'>
        <Col className='border'>{e.nombre}</Col>
        <Col className='border'>
            <Col className='border'>Correlación Biológica: </Col>
            <Col className='border'>{e.corrbio}</Col>
        </Col>
        <Col className='border'>
        <Col className='border'>Tipo de Centro: </Col>
            <Col className='border'>{e.tipo}</Col>
        </Col>
    </Row>
<Row className='border'>
    <Col className='border'><img src={e.funcionImg} /></Col>
    <Col className='border'>
    <Row className='border'>Función</Row>
    <Row className='border'>{e.funcion}</Row>
    </Col>
</Row>
<Row className='border'>
    <Col className='border'> {this.state.allCentros[i] == 'opened' ? <img src={centrosImg[i][0]} /> : <img src={centrosImg[i][1]} /> }</Col>
    <Col className='border'>
    <Row className='border'>Centro Definido</Row>
    <Row className='border'>{e.centroDefinido}</Row>
    </Col>
</Row>
<Row className='border'>
    <Col className='border'>{e.noSerPuertas} puertas</Col>
    <Col className='border'>
    <Row className='border'>En el No Ser</Row>
    <Row className='border'>{e.noSerUno}</Row>
    </Col>
</Row>
<Row className='border'>
    <Col className='border'>{e.preguntaGuiaPorcentaje}</Col>
    <Col className='border'>
    <Row className='border'>Pregunta guía</Row>
    <Row className='border'>{e.preguntaGuiaUno}</Row>
    </Col>
</Row>

<Row className='border'>
    <Col className='border'><img src={e.centroSinDefinirImg} /></Col>
    <Col className='border'>
    <Row className='border'>Centro Sin Definir</Row>
    <Row className='border'>{e.centroSinDefinir}</Row>
    </Col>
</Row>

<Row className='border'>
    <Col className='border'><img src={logo} /></Col>
    <Col className='border'>
    <Row className='border'>En el No Ser</Row>
    <Row className='border'>{e.noSerDos}</Row>
    <Row className='border'>Pregunta guía</Row>
    <Row className='border'>{e.preguntaGuiaDos}</Row>
    </Col>
</Row>
</>
        )
    })}
    

</Container>
 <Row className='border'><h1>Definicion</h1></Row>
 {definicionCompleto.map(e => {
     if (e.definicion == this.state.definicion) {
         return (
             <>
             <Row className='border'>
                 <Col className='border'>Definicion</Col>
                 <Col className='border'>{e.definicion}</Col>
             </Row>
             <Row className='border'>
                 <Col className='border'>MODO DEFINICIÓN</Col>
                 <Col className='border'>{e.modo}</Col>
             </Row>
             <Row className='border'>
                 <Col className='border'>PORCENTAJE</Col>
                 <Col className='border'>{e.porcentaje}</Col>
             </Row>
             <Row className='border'>
                 <Col className='border'>AREAS UNIDAS</Col>
                 <Col className='border'>{e.areas}</Col>
             </Row>
             <Row className='border'>
                 <Col className='border'>ELEMENTOS DE CONDICIONAMIENTO PRINCIPAL</Col>
                 <Col className='border'>{e.elementosPrincipal}</Col>
             </Row>
             <Row className='border'>
                 <Col className='border'>ELEMENTOS DE CONDICIONAMIENTO SECUNDARIO</Col>
                 <Col className='border'>{e.elementosSecundario}</Col>
             </Row>
             <Row className='border'>
                 <Col className='border'>TIEMPO DE TOMA DE DECISIONES </Col>
                 <Col className='border'>{e.tiempo}</Col>
             </Row>
             <Row className='border'>
                 <Col className='border'>INFLUENCIA EXTERNA</Col>
                 <Col className='border'>{e. influencia}</Col>
             </Row>
             <Row className='border'>
                 <Col className='border'>GRÁFICO</Col>
                 <Col className='border'><img src={e.grafico} /></Col>
             </Row>
             </>
         )
     }
 })}
<Container>
   
    {perfilesCompleto.map(e => {
  
        if (e.name == this.state.perfilCompleto.toUpperCase()) {
           
            
            return (<>
            <Row className='border'><h1>Perfil</h1></Row>
                <Row className='border'>
                    
                    <Col className='border'>{this.state.perfilCompleto}</Col>
                    <Col className='border'><img src={e.img} /></Col>
                    </Row>
                    <>
                    {e.desc.map((el,i) => {
                        return (
                            <Row className='border'>
                            <Col className='border'>{i}</Col>
                            <Col className='border'>{el}</Col>
                            </Row>
                        )
                    })}
                 </>   
                
            </>)
        }
    })}
</Container>
<Container>
    <Row><h1>Puertas</h1></Row>
    {this.state.allPuertas.map((e,i) => {
        return (
            <Row>
                <Col>
                <img src={imagesPuertas[`puerta${e}.png`].default} />
                </Col>
                </Row>
        )
    })}
</Container>
<Container>
    <Row><h1>Canales</h1></Row>
    {this.state.canales.map(e => {
        return (
            <Row>
                <Col>
                <img src={imagesCanales[`canal${e}.png`].default} />
                </Col>
            </Row>
        )
    })}
</Container>

            </div>
            
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        firstName: state.addUserData.firstName,
        lastName: state.addUserData.lastName,
        fecha: state.addUserData.fecha,
        hora: state.addUserData.hora,
        sexo: state.addUserData.sexo,
        lugar: state.addUserData.lugar,
        tipo: state.addUserData.tipo,
        autoridad: state.addUserData.autoridad,
        canales: state.addUserData.canales.map(e => e.num),
        centros: state.addUserData.centros,
        cruzIncarnacion: state.addUserData.cruzIncarnacion,
        definicion: state.addUserData.definicion,
        estrategia: state.addUserData.estrategia,
        perfil: state.addUserData.perfil,
        puertas: state.addUserData.puertas,
        variables: state.addUserData.variables,
        bodygraph: state.addUserData.bodygraph,
        cruz: state.addUserData.cruz,
        cruzadd: state.addUserData.cruz,
        email: state.addUserData.email,
        cabezaCentro: state.addCenters.cabeza,
        ajnaCentro: state.addCenters.ajna,
        gargantaCentro: state.addCenters.garganta,
        giCentro: state.addCenters.gi,
        corazonCentro: state.addCenters.corazon,
        plexosolarCentro: state.addCenters.plexosolar,
        sacralCentro: state.addCenters.sacral,
        bazoCentro: state.addCenters.bazo,
        raizCentro: state.addCenters.raiz,
        allCentros: [state.addCenters.ajna, state.addCenters.bazo, state.addCenters.cabeza, state.addCenters.corazon, state.addCenters.gi, state.addCenters.garganta, state.addCenters.plexosolar, state.addCenters.raiz, state.addCenters.sacral]


  }
}

  export default connect(mapStateToProps)(ResultadoCompleto) 