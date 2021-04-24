import React, { Component } from "react";
import { Container, Row, Col, Button } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import logo from './img/logologo.png';
import {connect} from 'react-redux';
import axios from 'axios';
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

    ["13/7" , "2/1" , "Angulo Derecho", "Cruz de la Esfinge 1"],
    
    ["13/7","23/43","Yuxtapuesta", " Cruz de Escuchar "],
    ["13/7", "23/43","Angulo Izquierdo", "Cruz de las Máscaras 1"],
    
    ["49/4","23/43", "Ángulo Derecho", "Cruz de la Explicación 1"],
    
    ["49/4","14/8","Yuxtapuesta", "Cruz de los Principios"],
    
    ["49/4", "14/8","Angulo Izquierdo", " Cruz de la Revolución 1"],
    
    ["30/29","14/8","Angulo Derecho", "Cruz del Contagio 1"],
    
    ["30/29","20/34","Yuxtapuesta", "Cruz de los Hados "],
    ["30/29", "20/34","Angulo Izquierdo", "Cruz de la Industriosidad 1"],
    
    ["55/59","20/34","Angulo Derecho", "Cruz del Fénix Dormido 1"],
    ["55/59", "16/9","Yuxtapuesta", " Cruz de los Ánimos Cambiantes"],
    ["55/59","16/9","Angulo Izquierdo", "Cruz del Espíritu 1"],
    
    ["37/40","16/9","Angulo Derecho", " Cruz de la Planificación 1 "],
    ["37/40","35/5","Yuxtapuesta", "Cruz de los Contratos"],
    
    
    
    
    ["37/40","35/5","Angulo Izquierdo", "Cruz de la Migración 1"],
    
    ["63/63","35/5","Angulo Derecho", "Cruz de la Conciencia 1"],
    ["63/64","45/26","Yuxtapuesta", "Cruz de las Dudas"],
    ["63/64","45/26","Angulo Izquierdo", "Cruz del Dominio 1"],
    
    ["22/47","26/45","Angulo Derecho", "Cruz del Gobierno 1"],
    ["22/47","12/11","Yuxtapuesta", "Cruz de la Gracia"],
    ["22/47","12/11","Angulo Izquierdo", "Cruz de Informar 1"],
    
    ["36/6","12/11","Angulo Derecho", "Cruz del Edén 1"],
    ["36/6","15/10","Yuxtapuesta", "Cruz de la Crisis"],
    ["36/6","15/10","Angulo Izquierdo", "Cruz del Plano 1"],
    
    ["25/46","15/10","Angulo Derecho", "Cruz del recipiente de Amor 1 "],
    ["25/46","58/52","Yuxtapuesta", "Cruz de la Inocencia 1"],
    ["25/46","58/52","Angulo Izquierdo", "Cruz de la Sanación 1"],
    
    
    ["17/18","58/52","Angulo Derecho", "Cruz del Servicio 1"],
    ["17/18","38/39","Yuxtapuesta", "Cruz de las Opiniones "],
    ["17/18", "38/39","Angulo Izquierdo", "Cruz del Tumulto, levantamiento 1"],
    
    
    
    
    
    ["21/48","38/39","Angulo Derecho", "Cruz de la Tensión 1"],
    ["21/48","54/53","Yuxtapuesta", "Cruz del Control"],
    ["21/48","54/53","Angulo Izquierdo", "Cruz del Esfuerzo 1"],
    
    ["51/57","54/53","Angulo Derecho", " Cruz de la Penetración 1"],
    ["51/57","61/62","Yuxtapuesta", "Cruz del Shock"],
    ["51/57","61/62","Angulo Izquierdo", "Cruz del Clarín 1"],
    
    ["42/32","61/62","Angulo Derecho", "Cruz del May 1"],
    ["42/32","60/56","Yuxtapuesta", "Cruz de la Plenitud"],
    ["42/32","60/56","Angulo Izquierdo", "Cruz de los Límites 1"],
    
    ["3/50","60/56","Angulo Derecho", "Cruz de las Ley 1"],
    ["3/50",41/31,"Yuxtapuesta", "Cruz de la Mutación"],
    ["3/50","41/31","Angulo Izquierdo", "Cruz de los Deseos 1"],
    
    ["27/28",41/31,"Angulo Derecho", "Cruz de lo Inesperado 1 "],
    ["27/28","19/33","Yuxtapuesta", "Cruz del Cuidado"],
    ["27/28","19/33","Angulo Izquierdo", "Cruz del Alinearse 1"],
    
    ["24/44","19/33","Angulo Derecho", "Cruz de los Cuatro Caminos 1"],
    ["24/44","13/7","Yuxtapuesta", "Cruz de la Racionalización 1 "],
    ["24/44","13/7","Angulo Izquierdo", "Cruz de la Encarnación 1"],
    
    
    ["2/1","13/7","Angulo Derecho", "Cruz de la Esfinge 2"],
    ["2/1","49/4","Yuxtapuesta", "Cruz del Chauffeur (conductor)"],
    ["2/1","49/4","Angulo Izquierdo", "Cruz del Desafío 1"],
    
    ["23/43","49/4","Angulo Derecho", "Cruz de la Explicación 2"],
    ["23/43","30/29","Yuxtapuesta", "Cruz de la Asimilación"],
    ["23/43","30/29","Angulo Izquierdo", "Cruz de la Dedicación 1"],
    
    
    
    
    ["8/14","30/29","Angulo Derecho", "Cruz del Contagio 2"],
    ["8/14","55/59","Yuxtapuesta", "Cruz de la Contribución"],
    ["8/14","55/59","Angulo Izquierdo", "Cruz de la Incertidumbre 1"],
    
    ["20/34","55/59","Angulo Derecho", "Cruz del Fénix Dormido 2"] ,
    ["20/34","37/40","Yuxtapuesta", "Cruz del Ahora"],
    ["20/34","37/40","Angulo Izquierdo", "Cruz de la Dualidad 1"],
    
    ["16/9","37/40","Angulo Derecho", "Cruz de la Planificación 2"],
    ["16/9","63/64","Yuxtapuesta", "Cruz de la Experimentación"],
    ["16/9","63/64","Angulo Izquierdo", " Cruz de la Identificación 1"],
    
    ["35/5","63/64","Angulo Derecho", "Cruz de la Conciencia 2 "],
    ["35/5","47/22","Yuxtapuesta", " Cruz de la Experiencia"],
    ["35/5","47/22","Angulo Izquierdo", "Cruz de la Separación 1"],
    
    ["45/26","47/22","Angulo Derecho", "Cruz del Gobierno 2"],
    ["45/26","36/6","Yuxtapuesta", "Cruz de la Posesión "],
    ["45/26", "36/6","Angulo Izquierdo", "Cruz de la Confrontación 1"],
    
    ["12/11","36/6","Angulo Derecho", "Cruz del Edén 2"],
    ["12/11","25/46","Yuxtapuesta", "Cruz de la Articulación"],
    ["12/11","25/46","Angulo Izquierdo", "Cruz de la Educación 1"],
    
    ["15/10","25/46","Angulo Derecho", "Cruz del Recipiente de Amor 2 "],
    ["15/10","17/18","Yuxtapuesta", "Cruz de los Extremos"],
    ["15/10","17/18","Angulo Izquierdo", "Cruz de la Prevención 1"],
    
    ["52/58","17/18","Angulo Derecho", "Cruz del Servicio 2"],
    ["52/58","21/48","Yuxtapuesta", "Cruz de la Quietud "],
    ["52/58","21/48", "Angulo Izquierdo", "Cruz de las Exigencias 1"],
    
    ["39/38","21/48","Angulo Derecho", "Cruz de la Tensión 2 "],
    ["39/38","51/57","Yuxtapuesta", "Cruz de la Provocación"],
    ["39/38","51/57", "Angulo Derecho", "Cruz del Individualismo 1"],
    
    ["53/54","51/57","Angulo Derecho", "Cruz de la Penetración 2"],
    ["53/54","42/32","Yuxtapuesta", "Cruz de los Comienzos"],
    ["53/54","42/32","Angulo Izquierdo", "Cruz de los Ciclos 1"],
    
    ["62/61","42/32","Angulo Derecho", "Cruz del May 2"],
    ["62/61","3/50","Yuxtapuesta", "Cruz del Detalle "],
    ["62/61", "3/50","Angulo Izquierdo", "Cruz del Oscurantismo 1"],
    
    ["56/60","3/50","Angulo Derecho", "Cruz de las Ley 2 "],
    ["56/60","27/28","Yuxtapuesta", "Cruz de la Estimulación"],
    ["56/60", "27/28","Angulo Izquierdo", "Cruz de la Distracción 1"],
    
    ["31/41","27/28","Angulo Derecho", "Cruz de lo Inesperado 2 "],
    ["31/41", "24/44","Yuxtapuesta", "Cruz de la Influencia"],
    ["31/41","24/44","Angulo Izquierdo", "Cruz del Alfa 1"],
    
    ["33/19","24/44","Angulo Derecho", "Cruz de los Cuatro Caminos 2"],
    ["33/19","1/2","Yuxtapuesta", "Cruz de la Retirado"],
    ["33/19", "1/2","Angulo Izquierdo", "Cruz del Refinamiento 1"],
    
    
    ["7/13","1/2","Angulo Derecho", "Cruz de la Esfinge 3 "],
    ["7/13","43/23","Yuxtapuesta", "Cruz de la Interacción"],
    
    
    
    
    ["7/13","43/23","Angulo Izquierdo", "Cruz de las Máscaras 2"],
    ["4/49","43/23","Angulo Derecho", "Cruz de la Explicación 3"],
    
    ["4/49","8/14","Yuxtapuesta", "Cruz de las Fórmulas"],
    ["4/49","8/14","Angulo Izquierdo", "Cruz de la Revolución 2"],
    ["29/30","8/14","Angulo Derecho", "Cruz del Contagio 3"],
    
    ["29/30","20/34","Yuxtapuesta", "Cruz del Compromiso "],
    ["29/30","20/34","Angulo Izquierdo", "Cruz de la Industriosidad 2 "],
    ["59/55","20/34","Angulo Derecho", "Cruz del Fénix Dormido 3"],
    
    ["59/55","16/9","Yuxtapuesta", "Cruz de la Estrategia"],
    ["59/55","16/9","Angulo Izquierdo", "Cruz del Espíritu 1"] ,
    ["40/37","16/9"," Angulo Derecho", "Cruz de la Planificación 3"],
    ["40/37","35/5","Yuxtapuesta", "Cruz de la Negación"],
    
    ["40/37","35/5","Angulo Izquierdo", "Cruz de la Migración 2"],
    ["64/63","35/5","Angulo Derecho", "Cruz de la Conciencia 3"],
    ["64/63","45/26","Yuxtapuesta", "Cruz de la Confusión"],
    
    ["64/63","45/26","Angulo Izquierdo", "Cruz del Dominio 2"],
    ["47/22","45/26","Angulo Derecho", "Cruz del Gobierno 3"],
    ["47/22","12/11","Yuxtapuesta", "Cruz de la Opresión"],
    
    ["47/22","12/11","Angulo Izquierdo", "Cruz de Informar 1"],
    
    ["6/36","12/11","Angulo Derecho", "Cruz del Edén 3"],
    ["6/36","10/15","Yuxtapuesta", "Cruz del Conflicto "],
    ["6/36", "10/15","Angulo Izquierdo", "Cruz del Plano Terrenal 2"],
    
    ["46/25","10/15","Angulo Derecho", "Cruz del recipiente de Amor 3"],
    ["46/25","58/52","Yuxtapuesta", "Cruz de Serendipidad"],
    ["46/25","58/52","Angulo Izquierdo", "Cruz de la Sanación 2"],
    
    
    
    
    ["18/17","58/52","Angulo Derecho", "Cruz del Servicio 3 "],
    ["18/17", "38/39","Yuxtapuesta", "Cruz de la Corrección "],
    ["18/17","38/39", "Angulo Izquierdo", "Cruz del Tumulto o Sublevación 2"],
    
    ["48/21","38/39","Angulo Derecho", "Cruz de la Tensión 3 "],
    ["48/21","53/54","Yuxtapuesta", "Cruz de la Profundidad "],
    ["48/21","53/54", "Angulo Izquierdo", "Cruz del Esfuerzo 2"],
    
    ["57/51","53/54","Angulo Derecho", "Cruz de la Penetración 3 "],
    ["57/51","62/61","Yuxtapuesta", "Cruz de la Intuición"],
    ["57/51","62/61","Angulo Izquierdo", "Cruz del Clarín 2"],
    
    ["32/42","62/61","Angulo Derecho", "Cruz del May 3"],
    ["32/42","56/60","Yuxtapuesta", "Cruz del Conservadurismo"],
    ["32/42","56/60","Angulo Izquierdo", "Cruz de los Límites 2"],
    
    ["50/3","56/60","Angulo Derecho", "Cruz de las Ley 3"],
    ["50/3","31/41","Yuxtapuesta", "Cruz de los Valores"],
    ["50/3","31/41","Angulo Izquierdo", "Cruz de los Deseos 2"],
    
    ["28/27","31/41","Angulo Derecho", "Cruz de lo Inesperado 3 "],
    ["28/27","33/19","Yuxtapuesta", "Cruz del Riesgo "],
    ["28/27","33/19","Angulo Izquierdo", "Cruz del Alineamiento 2"],
    
    ["44/24","33/19","Angulo Derecho", "Cruz de los Cuatro Caminos 3 "],
    ["44/24","7/13","Yuxtapuesta", "Cruz del Alerta"],
    ["44/24","7/13","Angulo Izquierdo", "Cruz de la Encarnación 2"],
    
    
    
    
    
    ["1/2","7/13","Angulo Derecho", "Cruz de la Esfinge"],
    ["1/2","4/49","Yuxtapuesta", "Cruz de la Autoexpresión "],
    ["1/2","4/49","Angulo Izquierdo", "Cruz del Desafío 2"],
    
    ["43/23","4/49","Angulo Derecho", "Cruz de la Explicación 4"],
    ["43/23","29/30","Yuxtapuesta", "Cruz del Insight (Perspicacia)"],
    ["43/23","29/30","Angulo Izquierdo", "Cruz de la Dedicación 2"],
    
    ["14/8","29/30","Angulo Derecho", "Cruz del Contagio 4"],
    ["14/8","59/55","Yuxtapuesta", "Cruz de Potenciación"],
    ["14/8","59/55","Angulo Izquierdo", "Cruz de la Incertidumbre 2"],
    
    ["34/20","59/55","Angulo Derecho", "Cruz del Fénix Dormido 4"],
    ["34/20","37/40","Yuxtapuesta", "Cruz del Poder"],
    ["34/20","37/40","Angulo Izquierdo", "Cruz de la Dualidad 2"],
    
    
    ["9/16","37/40","Angulo Derecho", "Cruz de la Planificación 4 "],
    ["9/16","63/64","Yuxtapuesta", "Cruz del Foco"],
    ["9/16","63/64","Angulo Izquierdo", "Cruz de la Identificación 2"],
    
    ["5/35","63/64","Angulo Derecho", "Cruz de la Conciencia 4"],
    ["5/35","22/47","Yuxtapuesta", "Cruz de los Hábitos"],
    ["5/35","22/47","Angulo Izquierdo", "Cruz de la Separación 2"],
    
    
    ["26/45","47/22","Angulo Derecho", "Cruz del Gobierno 4"],
    ["26/45","36/6","Yuxtapuesta", "Cruz del Pícaro"] ,
    ["26/45","36/6","Angulo Izquierdo", "Cruz de la Confrontación 2"],
    
    ["11/12","36/6","Angulo Derecho", "Cruz del Edén 4"],
    ["11/12","25/46","Yuxtapuesta", "Cruz de las Ideas"],
    ["11/12","25/46","Angulo Izquierdo", "Cruz de la Educación 2"],
    
    
    
    
    ["10/15","25/46","Angulo Derecho", "Cruz del Recipiente de Amor 4"],
    ["10/15","18/17","Yuxtapuesta", "Cruz del Comportamiento"],
    ["10/15","18/17","Angulo Izquierdo", "Cruz de la Prevención 2"],
    
    ["58/52","18/17","Angulo Derecho", "Cruz Del servicio 4"],
    ["58/52","48/21","Yuxtapuesta", "Cruz de la Vitalidad"],
    ["58/52","48/21","Angulo Izquierdo", "Cruz de las Exigencias 2"],
    
    ["38/39","48/21","Angulo Derecho", "Cruz de la Tensión 4"],
    ["38/39","51/57","Yuxtapuesta", "Cruz de la Oposición "],
    ["38/39", "51/57","Angulo Izquierdo", "Cruz de la Individualidad 2"],
    
    ["54/53","51/57","Angulo Derecho", "Cruz de la Penetración 4"],
    ["54/53","32/42","Yuxtapuesta", "Cruz de la Ambición"],
    ["54/53","32/42","Angulo Izquierdo", "Cruz de los Ciclos 2"],
    
    ["61/62","32/42","Angulo Derecho", "Cruz del May 4 "],
    ["61/62","50/3","Yuxtapuesta", "Cruz del Pensamiento "],
    ["61/62" ,"50/3","Angulo Izquierdo", "Cruz del Oscurantismo 2"],
    
    ["60/56","50/3","Angulo Derecho", "Cruz de las Ley 4"],
    ["60/56","27/28","Yuxtapuesta", "Cruz de la Limitación"],
    ["60/56","27/28","Angulo Izquierdo", "Cruz de la Distracción 2"],
    
    ["41/31","27/28","Angulo Derecho", "Cruz de lo Inesperado 4"],
    ["41/31","24/44","Yuxtapuesta", "Cruz de la Fantasía"],
    ["41/31","24/44","Angulo Izquierdo", "Cruz del Alfa 2"],
    
    ["19/33","24/44","Angulo Derecho", "Cruz de los Cuatro Caminos 4"],
    ["19/33","2/1","Yuxtapuesta", "Cruz de la Necesidad"],
    ["19/33","24/44","Angulo Izquierdo", "Cruz del Refinamiento "]
    
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
    {Cакральный: {
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
    estrategiasCompleto: estrategiasGenerador


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
    estrategiasCompleto: estrategiasGeneradorManifestante

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
    estrategiasCompleto: estrategiasManifestador
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
    estrategiasCompleto: estrategiasProyector
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
    estrategiasCompleto: estrategiasReflector
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
            canales: []
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
    
        // console.log(this.state.allPuertas);
    }

    sendMail() {
        axios.post('http://localhost:3001/sendmail',{
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
                if (e[2] == 'Angulo Derecho' && this.state.cruzadd.person == e[0] && this.state.cruzadd.design == e[1]) { //
                    cruzNombre = e[3]
                   
                } else {
                    if (this.state.cruzadd.person == e[0] && this.state.cruzadd.design == e[1] && e[2] == cruzAngulo) {
                        cruzNombre = e[3];
                        
                    }
                }
            })
        }
        if (this.state.cruzstr == '') {
            this.setState({
                cruzstr: `${cruzAngulo} ${cruzNombre}`
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
                let temp =  Object.values(e)[0];
                console.log(temp);
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
                    estrategiasCompleto: temp['estrategiasCompleto']
                })
            }
        });
    


        autorities.forEach(e => {
            let authorityName = Object.keys(e)[0];
            console.log('autoridad ' +this.state.autoridad);
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
                })
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
        console.log('date');
        console.log(this.state.date);
        console.log('fecha');
        console.log(this.state.fecha);
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
            CanalOcho
          }    
         axios.post('http://localhost:3001/downloadpdf', {params}).catch(error => console.log(error));
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
            <div id='tableToPdf'>
            <div className='result'>
                <h1>Resultado</h1>
                <Button onClick={this.convertToPdf}>Descargar</Button>
                <Button onClick={this.sendMail}>Enviar correo</Button>
                <Button onClick={this.test}>TEST</Button>
                <Container fluid >
                    <Row className='border' className='border'>
                        <Col className='border'>
                            <img src={logo} alt='logo' />
                        </Col>
                        <Col className='border'>
                            {this.state.date}
                        </Col>
                    </Row>
                    <Row className='border'>
                        <Col className='border'>Basic Design</Col>
                        <Col className='border'>Resumen Terapeuta
                        <input type="text" id="lname" name="lname"></input>
                        
                        </Col>
                        <Col className='border'>Espacio para comentarios</Col>
                    </Row>
                    <Row className='border'>
                        <Col className='border'>Nombre: {this.state.firstName} {this.state.lastName}</Col>
                        <Col className='border'>Fecha: {this.state.fecha}</Col>
                        <Col className='border'>Hora: {this.state.hora}</Col>
                        <Col className='border'>Lugar: {this.state.lugar}</Col>
                    </Row>
                    <Row className='border'>
                        <Col className='border'>TIPO</Col>
                        <Col className='border'>{this.state.tipo}</Col>
                        <Col className='border'>{this.state.typeDescription}</Col>

                        <Col className='border'>Correcto
        <Row className='border'>{this.state.corr}</Row>
                        </Col>
                        <Col className='border'>Incorrecto
        <Row className='border'>{this.state.incorr}</Row></Col>


                    </Row>
                    <Row className='border'>
                        <Col className='border'>Estrategia</Col>
                        <Col className='border'>Como afrontar la vida <Icon.ArrowRightCircle /></Col>
                        <Col className='border'>{this.state.estrategia}</Col>
                    </Row>
                    <Row className='border'>
                        <Col className='border'>Autoridad</Col>
                        <Col className='border'>Como tomar las decisiones adecuadas <Icon.ArrowRightCircle /></Col>
                        <Col className='border'>{this.state.autoridad}</Col>
                    </Row>
                    <Row className='border'>
                        <Col className='border'>Perfil</Col>
                        <Col className='border'>{this.state.perfilUno}</Col>
                        <Col className='border'>{this.state.perfilDos}</Col>
                        <Col className='border'>Como es nuestro <br /> personaje autentico <Icon.ArrowRightCircle /> </Col>
                        <Col className='border'>{this.state.perfilCompleto}</Col>
                    </Row>
                    <Row className='border'>
                        <Col className='border'>Tus centros energeticos
      <Row className='border'>
                                <Col >Cabeza <br /> Inspiracion</Col>
                                <Col className='border'> <div className='smallcentros' id='cabeza'>{this.state.cabezaCentro == 'opened' ? <img src={cabezaAbierto} /> : <img src={cabezaCerrado} /> } </div>
                                {this.state.cabezaCentro}
                                 </Col>
                                <Col >Son las preguntas, las dudas y la presion para que se expanda la conciencia</Col>
                            </Row>
                           
                            <Row className='border'>
                                <Col >AJNA  <br /> Pensamiento</Col>
                                <Col ><div className='smallcentros' id='uptodown'>{this.state.ajnaCentro == 'opened' ? <img src={ajnaAbierto} /> : <img src={ajnaCerrado} /> } </div>
                                 </Col> 
                                <Col >Analiza e investiga la vida de forma intelectual, racional, autoreflexiva</Col>
                            </Row>
                            <Row className='border'>
                                <Col >Garganta <br /> Expresion</Col>
                                <Col ><div className='smallcentros'>{this.state.gargantaCentro == 'opened' ? <img src={gargantaAbierto} /> : <img src={gargantaCerrado} />}</div>
                                </Col> 
                                <Col >Analiza e investiga la vida de forma intelectual, racional, autoreflexiva</Col>
                            </Row>
                            <Row className='border'>
                                <Col className='border'>G I <br /> Direccion</Col>
                                <Col className='border'>
                                    <div className='smallcentros'>
                                        {this.state.giCentro == 'opened' ? <img src={GIAbierto} /> : <img src={GICerrado} />}
                                    </div>
                                </Col>
                                <Col className='border'>Marca la indentidad del ser, el amor y la direccion hacia la Fuente superior</Col>
                            </Row>
                            <Row className='border'>
                                <Col className='border'>Corazon<br /> Ego</Col>
                                <Col className='border'>
                                    <div className='smallCentros'>
                                        {this.state.corazonCentro == 'opened' ? <img src={corazonAbierto} /> : <img src={corazonCerrado} />} 
                                    </div>
                                </Col>
                                <Col className='border'>La supervivencia material. El impulso de la voluntad hacia la autoestima</Col>
                            </Row>
                            
                            <Row className='border'>
                                <Col className='border'>Plexo solar<br /> Emociones</Col>
                                <Col className='border'>
                                    <div className='smallCentros' >
                                        {this.state.plexosolarCentro == 'opened' ? <img src={plexoAbierto} /> : <img src={plexoCerrado} />}
                                    </div>
                                </Col>
                                <Col className='border'>La experiencia de los sentimientos, las emociones, sensaciones</Col>
                            </Row>
                            <Row className='border'>
                                <Col className='border'>Sacral<br /> Energia</Col>
                                <Col className='border'>
                                    <div className='smallCentros' >
                                    
                                           {this.state.sacralCentro == 'opened' ? <img src={sacralAbierto} /> : <img src={sacralCerrado} />}
                                    </div>
                                </Col>
                                <Col className='border'>La vitalidad para hacer cosas y la activacion del impulso sexual</Col>
                            </Row>
                        </Col>
                        <Col className='border'>Tu circuito energetico
                        <Row className='border'> ReactSV
                        
                          {this.state.firstName ? <ReactSVG ref={this.svgRef} id='bodygraph' src={`http://localhost:3001/${this.state.firstName}${this.state.lastName}.svg`} /> : '' } 
                            <img src={this.state.bodygraph}/>
                      
                        

                         </Row>
     
      <Row className='border'>Definicion: {this.state.definicion}</Row>
                        </Col>

                    </Row>
                    <Row className='border'>
                        <Col className='border'>
                            <Row className='border'>
                                <Col className='border'>Bazo<br /> Instinto</Col>
                                <Col className='border'>
                                    <div className='smallCentros' >
                                        {this.state.bazoCentro == 'opened' ? <img src={bazoAbierto} /> : <img src={bazoCerrado} /> }
                                    </div>
                                </Col>
                                <Col className='border'>La conciencia del cuerpo, la intuicion, el gusto, los miedos</Col>
                            </Row>
                            <Row className='border'>
                                <Col className='border'>Raiz<br /> Adrenalina</Col>
                                <Col className='border'>
                                    <div className='smallCentros'>
                                        {this.state.raizCentro == 'opened' ? <img src={raizAbierto} /> : <img src={raizCerrado} />} 
                                    </div>
                                </Col>
                                <Col className='border'>El impulso de crecer, la presion de ser, el estres la adrenalina</Col>
                            </Row>
                            <Row className='border'>
    <Col className='border'>Cruz</Col>
    <Col className='border'>Nuestro verdadero proposito <Icon.ArrowRightCircle /> </Col>
    </Row>
                        </Col>
                        <Col className='border'>
                            Las cualidades que marcan tu vida
                            
<Row className='border'>
                                <Col className='border'>Inconsientes</Col>
                                <Col className='border'>Puertas</Col>
                                <Col className='border'> Concientes</Col>
                            </Row>
                            <Row className='border'>
                                <Col className='border fullHeightCol'> {this.state.cruzUno[0]} <br /> {this.state.cruzUno[1]}</Col>
                                <Col className='border'>{this.state.cruzDos[0]}<br /> {this.state.cruzDos[1]}</Col>
                                
                               
                                
                            </Row>
                            <Col className='border bottomCol'>{this.state.cruzstr}</Col>
                        </Col>
                    </Row>
<Row className='border'>
    
    
    
</Row>
<Row className='border'>
    <Col className='border'>Caracteristicas vitales <Icon.ArrowRightCircle /> <br /> <div className='verticaltext'>selanac</div></Col>
    <Col className='border'>Elija el elemento:
    {this.state.canalesCompleto.map(e => <Row className='border'>{e}</Row>)}
    </Col>
</Row>
<Row className='border'>
    Si quieres tener acceso a la informacion completa contacta...
    {console.log(this.state.tipo)}
    <img src=''></img>
</Row>
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