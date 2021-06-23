import React, { Component } from "react";
import { Container, Row, Col, Button, Popover, Modal, Spinner } from 'react-bootstrap';
import logo from './img/logologo.png';
import {connect} from 'react-redux';
import axios from 'axios';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Cropper from 'react-easy-crop';

import Completed from './img/Complete_Symbol-512.png';

import firebase from './firebaseconfig';

import ajnaAbierto from './img/AJNA BL.png';
import ajnaCerrado from './img/AJNA COLOR.png';

import bazoAbierto from './img/BAZO BL.png';
import bazoCerrado from './img/BAZO COLOR.png';

import cabezaAbierto from './img/CABEZA BL.png';
import cabezaCerrado from './img/CABEZA COLOR.png';

import corazonAbierto from './img/CORAZON BL.png';
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

import download from 'downloadjs';

import { QuestionCircle, QuestionCircleFill } from 'react-bootstrap-icons';

const angulos = [

 

    ["13/7" , "2/1" , "Angulo Derecho", "de la Esfinge 1"],

 

    ["13/7","23/43","Yuxtapuesta", " de Escuchar "],

    ["13/7", "23/43","Angulo Izquierdo", "de las Máscaras 1"],

 

    ["49/4","23/43", "Ángulo Derecho", "de la Explicación 1"],

 

    ["49/4","14/8","Yuxtapuesta", "de los Principios"],

 

    ["49/4", "14/8","Angulo Izquierdo", " de la Revolución 1"],

 

    ["30/29","14/8","Angulo Derecho", "del Contagio 1"],

 

    ["30/29","20/34","Yuxtapuesta", "de los Hados "],

    ["30/29", "20/34","Angulo Izquierdo", "de la Industrialización 1"],

 

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

    ["51/57","61/62","Angulo Izquierdo", "del Clarión 1"],

 

    ["42/32","61/62","Angulo Derecho", "del Maya 1"],

    ["42/32","60/56","Yuxtapuesta", "de la Plenitud"],

    ["42/32","60/56","Angulo Izquierdo", "de los Límites 1"],

 

    ["3/50","60/56","Angulo Derecho", "de las Ley 1"],

    ["3/50",'41/31',"Yuxtapuesta", "de la Mutación"],

    ["3/50","41/31","Angulo Izquierdo", "de los Deseos 1"],

 

    ["27/28",'41/31',"Angulo Derecho", "de lo Inesperado 1 "],

    ["27/28","19/33","Yuxtapuesta", "del Cuidado"],

    ["27/28","19/33","Angulo Izquierdo", "del Alinearse 1"],

 

    ["24/44","19/33","Angulo Derecho", "de los Cuatro Caminos 1"],

    ["24/44","13/7","Yuxtapuesta", "de la Racionalización 1 "],

    ["24/44","13/7","Angulo Izquierdo", "de la Encarnación 1"],

 

 

    ["2/1","13/7","Angulo Derecho", "de la Esfinge 2"],

    ["2/1","49/4","Yuxtapuesta", "del Chofer"],

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

 

    ["62/61","42/32","Angulo Derecho", "del Maya 2"],

    ["62/61","3/50","Yuxtapuesta", "del Detalle "],

    ["62/61", "3/50","Angulo Izquierdo", "del Oscurecimiento 1"],

 

    ["56/60","3/50","Angulo Derecho", "de las Leyes 2 "],

    ["56/60","27/28","Yuxtapuesta", "de la Estimulación"],

    ["56/60", "27/28","Angulo Izquierdo", "de la Distracción 1"],

 

    ["31/41","27/28","Angulo Derecho", "de lo Inesperado 2 "],

    ["31/41", "24/44","Yuxtapuesta", "de la Influencia"],

    ["31/41","24/44","Angulo Izquierdo", "del Alfa 1"],

 

    ["33/19","24/44","Angulo Derecho", "de los Cuatro Caminos 2"],

    ["33/19","1/2","Yuxtapuesta", "de la Retirada"],

    ["33/19", "1/2","Angulo Izquierdo", "del Refinamiento 1"],

 

 

    ["7/13","1/2","Angulo Derecho", "de la Esfinge 3 "],

    ["7/13","43/23","Yuxtapuesta", "de la Interacción"],

 

 

 

 

    ["7/13","43/23","Angulo Izquierdo", "de las Máscaras 2"],

    ["4/49","43/23","Angulo Derecho", "de la Explicación 3"],

 

    ["4/49","8/14","Yuxtapuesta", "de las Fórmulas"],

    ["4/49","8/14","Angulo Izquierdo", "de la Revolución 2"],

    ["29/30","8/14","Angulo Derecho", "del Contagio 3"],

 

    ["29/30","20/34","Yuxtapuesta", "del Compromiso "],

    ["29/30","20/34","Angulo Izquierdo", "de la Industrialización 2 "],

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

    ["46/25","58/52","Yuxtapuesta", "de Serendipia"],

    ["46/25","58/52","Angulo Izquierdo", "de la Sanación 2"],

 

 

 

 

    ["18/17","58/52","Angulo Derecho", "del Servicio 3 "],

    ["18/17", "38/39","Yuxtapuesta", "de la Corrección "],

    ["18/17","38/39", "Angulo Izquierdo", "de la Convulsión 2"],

 

    ["48/21","38/39","Angulo Derecho", "de la Tensión 3 "],

    ["48/21","53/54","Yuxtapuesta", "de la Profundidad "],

    ["48/21","53/54", "Angulo Izquierdo", "del Esfuerzo 2"],

 

    ["57/51","53/54","Angulo Derecho", "de la Penetración 3 "],

    ["57/51","62/61","Yuxtapuesta", "de la Intuición"],

    ["57/51","62/61","Angulo Izquierdo", "del Clarión 2"],

 

    ["32/42","62/61","Angulo Derecho", "del Maya 3"],

    ["32/42","56/60","Yuxtapuesta", "de la Conservación"],

    ["32/42","56/60","Angulo Izquierdo", "de los Límites 2"],

 

    ["50/3","56/60","Angulo Derecho", "de las Leyes 3"],

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

    ["43/23","29/30","Yuxtapuesta", "de la Perspicacia interior"],

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

    ["26/45","36/6","Yuxtapuesta", "del Embaucador"] ,

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

 

    ["61/62","32/42","Angulo Derecho", "del Maya 4 "],

    ["61/62","50/3","Yuxtapuesta", "del Pensamiento "],

    ["61/62" ,"50/3","Angulo Izquierdo", "del Oscurecimiento 2"],

 

    ["60/56","50/3","Angulo Derecho", "de las Leyes 4"],

    ["60/56","27/28","Yuxtapuesta", "de la Limitación"],

    ["60/56","27/28","Angulo Izquierdo", "de la Distracción 2"],

 

    ["41/31","27/28","Angulo Derecho", "de lo Inesperado 4"],

    ["41/31","24/44","Yuxtapuesta", "de la Fantasía"],

    ["41/31","24/44","Angulo Izquierdo", "del Alfa 2"],

 

    ["19/33","24/44","Angulo Derecho", "de los Cuatro Caminos 4"],

    ["19/33","2/1","Yuxtapuesta", "de la Necesidad"],

    ["19/33","24/44","Angulo Izquierdo", "del Refinamiento "],

 

    ]



    const canales = {

        "1-8": "  INSPIRACIÓN: APORTAS TU CREATIVIDAD A LOS DEMÁS PARA LLEGAR A SER UN MODELO DE ROLES",
    
        "2-14": "  COMPÁS : ERES ESA PERSONA QUE SABE COMO GUIAR CORRECTAMENTE A LOS DEMÁS",
    
        "3-60": " MUTACIÓN: SABES CREAR UN PUENTE DE TRANSICIÓN ENTRE LO VIEJO Y LO NUEVO",
    
        "4-63": " LOGICA: TU COMBUSTIBLE MENTÁL SON LAS DUDAS QUE CUESTIONAS E INDAGAS",
    
        "5-15": " RITMO: SABES MARCA EL RITMO DE LOS PROCESOS Y TERMINARLOS CORRECTAMENTE",
    
        "6-59": " FERTILIDAD: ERES UNA PERSONA PROLÍFICA EN PROYECTOS DE TODO TIPO ",
    
        "7-31": " ALFA: ERES LIDER POR INVITACIÓN DEL EQUIPO AL QUE GUIAS ADECUADAMENTE ",
    
        "9-52": " CONCENTRACION: APORTAS ESA DETERMINACION Y ENFOQUE EN TODO LO QUE HACES",
    
        "10-20": " DESPERTAR: LO MAS IMPORTANTE PARA TI, ERES TU MISMO Y TUS CONVICCIONES",
    
        "10-34": " EXPLORACIÓN: TIENES IDEAS PARA PODER EMPRENDER ACCIONES CON DECISIÓN",
    
        "10-57": " SUPERVIVENCIA: TIENES UNA INTUICION ESPONTANEA PARA AFRONTAR TODOS LOS RETOS",
    
        "11-56": " CURIOSIDAD: ERES EL ETERNO BUSCADOR DEL FUNCIONAMIENTO DE LAS COSAS",
    
        "12-22": "APERTURA: ESA PERSONA QUE SERÁ SOCIALMENE RECONOCIDA DEPENDIENDO TU ESTADO DE ÁNIMO",
    
        "13-33": " PRÓDIGO: TRASMITES TU CONOCIMIENTO Y EXPERIENCIAS EXPERIMENTADAS FUERA DE TU ENTORNO ",
    
        "16-48": " TALENTO: APORTAS MAESTRIA A TRAVÉS DE LA EXPERIMENTACION Y LA REPETICIÓN CONTINUA",
    
        "17-62": " ORGANIZACIÓN: TIENES EL DON DE ENFOCARTE EFICIENTEMENTE EN TODO LO QUE HACES",
    
        "18-58": " JUICIO: SABES JUZGAR, CORREGIR Y MEJORAR LOS PATRONES DE ACTUACIÓN QUE SE TE PRESENTAN ",
    
        "19-49": " SENSIBILIDAD: CREAS FUERTES VÍNCULOS DE UNIÓN BASADOS EN LA CONFIANZA Y ENTREGA",
    
        "20-34": " CARISMA: TIENES CAPACIDAD DE INFLUENCIAR Y TRASMITIR QUE LAS IDEAS SE PUEDEN REALIZAR",
    
        "20-57": " CHISPA CEREBRAL: TIENES ESA AGUDEZA INTUITIVA PARA VER LAS COSAS EL PRIMERO",
    
        "21-45": " MATERIALISMO: SABES APORTAR FUERZA DE VOLUNTAD PAR HACER NEGOCIOS Y TRATOS",
    
        "23-43": " ESTRUCTURAR: APORTAS CONCEPTOS INNOVADORES, ORGANIZADOS Y EFICIENTES A LA COMUNIDAD ",
    
        "24-61": " CONCIENCIA: ERES UNA FUENTE DE INSPIRACIÓN Y PENSAMIENTO PARA TI Y EL GRUPO",
    
        "25-51": " INICIACIÓN: TIENES UN AFÁN COMPETITIVO EN LO QUE REALIZAS.  ESE DESEO DE SER EL PRIMERO",
    
        "26-44": " RENDICIÓN: TIENES DOTES PARA CONVENCER, VENDER Y TRASMITIR TUS IDEAS O PRODUCTOS ",
    
        "27-50": " PRESERVACIÓN: TE PREOCUPAS POR CUSTODIAR, CUIDAR Y PROTEGER A TU GRUPO ",
    
        "28-38": " LUCHA: BUSCAS UN RETO POR EL QUE LUCHAR EMPUJANDO AL GRUPO QUE TE ACOMPAÑA",
    
        "29-46": " DESCUBRIMIENTO: TIENES ESE DON DE TRIUNFAR DONDE OTROS FRACASAN -SERENDIPIA- ",
    
        "30-41": " RECONOCIMIENTO: ESTÁS EN BUSCA DE GRANDES ESPERIENCIAS QUE PODER EXPERIMENTAR ",
    
        "32-54": " TRANSFORMACIÓN: SABES COMO TRASFORMAR FACILMENTE EL TRABAJO EN EXITO MATERIAL",
    
        "34-57": " PODER: ERES UN SUPERVIVIENTE NATO, ATENTO A TODAS LAS CIRCUSTANCIAS QUE TE RODEAN",
    
        "35-36": " TRANSITORIEDAD: TIENES ESA NECESIDAD DE NUEVAS  EXPERIENCIAS PROBANDO TODO LO POSIBLE ",
    
        "37-40": " COMUNIDAD: TIENES FACILIDAD PARA LA BUSQUEDA DE ACUERDOS JUSTOS Y DE CONFIANZA",
    
        "39-55": " EMOCIONES: ERES ESE ROMANTICO Y APASIONADO BUSCANDO CONECTAR CON TU ESPÍRITU",
    
        "42-53": " MADURACIÓN: NO PARAS DE BUSCAR ESAS EXPERIENCIAS QUE TE APORTAN CRECIMIENTO ",
    
        "47-64": " ABSTRACCIÓN: TU MENTE SABE CREAR ALGO NUEVO DE LAS EXPERICENCIAS DEL PASADO ",
    
        };

        const puertas = {

            1:  "CREATIVIDAD",
          
            2:  "DIRECCIÓN",
          
            3:  "INNOVACIÓN",
          
            4:  "RESPUESTAS" ,
          
            5:  "RITMO" ,
          
            6:  "CONFLICTO" ,
          
            7:  "LIDERAZGO",
          
            8:  "CONTRIBUCIÓN",
          
            9:  "ENFOQUE" ,
          
          10:  "PORTE" ,
          
          11: "IDEAS" ,
          
          12: "CAUTELA",
          
          13: "ESCUCHAR",
          
          14: "PROSPERIDAD" ,
          
          15: "EXTREMOS",
          
          16: "HABILIDADES",
          
          17: "OPINIONES" ,
          
          18: "CORRECCIÓN" ,
          
          19: "QUERER" ,
          
          20: "AHORA",
          
          21: "CONTROL" ,
          
          22: "APERTURA" ,
          
          23: "ASIMILACIÓN",
          
          24: "RACIONALIZACIÓN",
          
          25: "INOCENCIA " ,
          
          26: "ASTUCIA" ,
          
          27: "CUIDAR" ,
          
          28: "RIESGOS" ,
          
          29: "COMPROMISO" ,
          
          30: "DESEOS" ,
          
          31: "INFLUENCIA",
          
          32: "CONTINUIDAD" ,
          
          33: "PRIVACIDAD",
          
          34: "PODER" ,
          
          35: "PROGRESO",
          
          36: "EXPLORACIÓN",
          
          37: "AFECTO" ,
          
          38: "LUCHADOR" ,
          
          39: "PROVOCACIÓN",
          
          40: "SOLEDAD",
          
          41: "IMAGINACIÓN" ,
          
          42: "CRECIMIENTO",
          
          43: "RESOLUCIÓN" ,
          
          44: "ALERTA",
          
          45: "AUTORIDAD" ,
          
          46: "DETERMINACIÓN",
          
          47: "COMPRENSIÓN" ,
          
          48: "TALENO" ,
          
          49: "PRINCIPIOS",
          
          50: "VALORES" ,
          
          51: "SHOCK" ,
          
          52: "CALMA",
          
          53: "INICIO" ,
          
          54: "AMBICIÓN" ,
          
          55: "ESPÍRITU" ,
          
          56: "ESTIMULACIÓN",
          
          57: "INTUICIÓN" ,
          
          58: "VITALIDAD" ,
          
          59: "SEXUALIDAD",
          
          60: "ACEPTACIÓN" ,
          
          61: "MISTERIO" ,
          
          62: "DETALLES" ,
          
          63: "DUDAS",
          
          64: "CONFUSIÓN",
          
          };

          const autorities = [{

            Эмоциональный: {
        
                codename: 'plexo',
        
                desc: 'PLEXO: TUS DECISIONES CORRECTAS SON ESAS QUE TOMAS DE FORMA CONSISTENTE EN TODO TU CICLO EMOCIONAL. UNA DECISON CORRECTA ES AQUELLA QUE TE RESUENA CORPORALMENTE TANTO EN LO ALTO DE LA OLA EMOCIONAL COMO EN SU FASE MAS BAJA',
        
            }},
        
            {Сакральный: {
        
                codename: 'sacral',
        
                desc: 'SACRAL: TU DECISIÓN CORRECTA ES ESA QUE TE RESUENA EN TU VIENTRE CON ESA ENERGIA ESPECIAL Y NOTAS ESE BRILLO INTERIOR QUE TE DICE QUE ESO ES CORRECTO PARA TI',
        
            }},
        
            {Селезеночный: {
        
                codename: 'bazo',
        
                desc: 'BAZO: TU DICISIÓN CORRECTA ES ESA QUE TE LLEGA DE FORMA INSTANTANEA DESDE TU INSTINTO E INTUICION Y QUE NO SE REPITE MAS QUE UNA VEZ, ASI QUE HAS DE ESTAR ATENTO Y SER DECIDIDO',
        
            }},
        
            {Эгоманифестируемый: {
        
                codename: 'corazon',
        
                desc: 'CORAZÓN-EGO: TU VOLUNTAD ES LA ÚNICA PARTE DE TU SER QUE TE PUEDE DECIR LO QUE ES CORRECTO PARA TU PROCESO INDIVIDUAL DE TOMA DE DECISIONES DESDE TU VOZ INTERIOR',
        
            }},
        
            {Самопроецируемый: {
        
                codename: 'g',
        
                desc: ' GI-DIRECCIÓN-AMOR: TU VERDADERA AUTORIDAD ES LA ESPONTÁNEA LIBERACIÓN VERBAL QUE APARECE DE FORMA NATURAL HABLANDO DESDE LO MAS PROFUNDO DE TU SER',
        
            }},
        
            {Внутренний: {
        
                codename: 'entorno',
        
                desc: ' TU TOMA DE DECISIONES VIENE DESDE FUERA, DESDE EL ENTORNO QUE TE DA SENSACION DE CONFIANZA. HAS DE RODEARTE DE PERSONAS QUE TE APORTEN CONFIANZA PARA PODER DECIDIR CORRECTAMENTE',
        
            }},
        
            {Лунный: {
        
                codename: 'lunar',
        
                desc: 'TU TOMA DE DECISIONES SE BASA EN UN PROCESO DE 28 DIAS PARA DECIDIR LO IMPORTANTE, ADEMAS DE RODEARTE DE LAS PERSONAS DE CONFIANZA QUE TE PODRÁN ORIENTAR ADECUADAMENTE',
        
            }}
        
        ];


        const typesDesc = [ {Генератор: {

            desc: 'Eres una persona con energía. Con fuerza para realizar y poner en marcha actividades de todo tipo. Sabes responder a la vida y has de despertar a las propuestas correctas que irán apareciendo con el transcurso del tiempo',
        
            corr: 'SATISFACCIÓN',
        
            incorr: 'FRUSTRACIÓN',
        
            estrategia: 'NO INICIES NADA, ESPERA A RESPONDER A LAS INVITACIONES EXTERNAS QUE TE IRÁN APARECIENDO A LO LARGO DE LA VIDA Y ACTUA SEGÚN TE INDICA TU AUTORIDAD',
            cuantas: '2,884,236,073'
        
        }},
        
        {МанифестирующийГенератор: {
        
            desc: 'Eres una persona con energía. Con fuerza para realizar y poner en marcha actividades de todo tipo. Sabes responder a la vida y has de despertar a la propuesta correcta que irán apareciendo con el transcurso del tiempo.  Es importante Informar a tu entorno de tus acciones que vas a tomar',
        
            corr: 'SATISFACCIÓN Y PAZ',
        
            incorr: 'FRUSTRACIÓN Y RABIA',
        
            estrategia: 'NO INICIES NADA, ESPERA A RESPONDER A LAS INVITACIONES EXTERNAS QUE TE IRÁN APARECIENDO A LO LARGO DE LA VIDA Y ACTUA SEGÚN TE INDICA TU AUTORIDAD',
            cuantas: '2,572,426,768'
         
        
        }},
        
        {Манифестор: {
        
            desc: 'Eres una persona de acción y con energía para Iniciar sin necesitar a nadie. Sabes pasar todas las etapas hasta concretar tu idea. Eres quien inicia los procesos ',
        
            corr: 'PAZ',
        
            incorr: 'RABIA',
        
            estrategia: 'ES IMPORTANTE Y NECESARIO QUE INFORMES A TODAS LAS PERSONAS QUE PUEDEN ESTAR IMPLICADAS EN TUS ACTOS Y DECISIONES ANTES DE ACTUAR',
            cuantas: '1,650,021,821'
            }},
        
        {Проектор: {
        
            desc: 'Eres una persona que has de saber gestionar tu energía. Tienes la fuerza para saber guiar a los demás. Eres un buen  mediador y organizador nato. Ves lo que los demás no aprecian inicialmente',
        
            corr: 'ÉXITO',
        
            incorr: 'AMARGURA',
        
            estrategia: 'ES IMPORTANTE QUE ESPERES UNA INVITACION QUE RECONOZCA TUS HABILIDADES Y TE INVITE A ACTUAR',
            cuantas: '628,579,741'
          }},
        
        {Рефлектор: {
        
            desc: 'Eres una Persona con gran conocimiento y sabiduría. Eres el espejo que refleja la realidad social que te rodea. Sueles ser ecuánime y justo si te colocar de forma adecuada en todos los aspectos de tu vida',
        
            corr: 'SORPRESA',
        
            incorr: 'DESILUSIÓN',
        
            estrategia: 'ES ACONSEJABLE QUE ESPERES UN CICLO LUNAR DE 28 DIAS ANTES DE TOMAR DESCIONES IMPORTANTES',
            cuantas: '78,572,467'
            }}
           
        ];

        const perfiles = {

            1: 'Investigador',
    
            2: 'Ermitaño',
    
            3: 'Mártir',
    
            4: 'Oportunista',
    
            5: 'Hereje',
    
            6: 'Modelo de roles',
    
        };

    
     

export class Result extends Component {
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
            userImage: '',
            logo: '',
            imageLocal: '',
            crop: { x: 0, y: 0, width: 100, height: 100 },
            zoom: 1,
            aspect: 4 / 3,
            updatedtwo: true,
            text: '',
            generatingPDF: false,
            PDFdownload: false,
            messageSent: false,
            messageSending: false,
            isHovered: false
        }
    this.getCurrDate = this.getCurrDate.bind(this);
    this.translateHelper = this.translateHelper.bind(this);
    this.addDescription = this.addDescription.bind(this);
    this.convertToPdf = this.convertToPdf.bind(this);
    this.cruzWorker = this.cruzWorker.bind(this);
    this.sendMail = this.sendMail.bind(this);
    this.svgRef = React.createRef();
    this.textChange = this.textChange.bind(this);
    this.inputFile = React.createRef();
    this.inputLogo = React.createRef();
    this.handleFileUpload = this.handleFileUpload.bind(this);
    this.uploadFile = this.uploadFile.bind(this);
    this.uploadLogo = this.uploadLogo.bind(this);
    this.toggleHover = this.toggleHover.bind(this);
    }

    toggleHover() {
        this.setState(prevState => ({isHovered: !prevState.isHovered}));
      }


    textChange(e) {
        if (e.target.value.length <=275) {
            let text = e.target.value.replace(/\s{2,}/g, ' ').replace(/\n/g, ' ');
        this.setState({
            text
        })
        }

    }

    async sendMail() {
        this.setState({
            messageSending: true,
            messageSent: false,
        })
        axios.post('http://localhost:3001/sendmail',{
            params: {
                name: `${this.state.firstName}${this.state.lastName}`,
                mail: this.state.email
            }
        }).then((res) => {
            this.setState({
                messageSent: true,
                messageSending: false
            })
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
                let temp =  Object.values(e)[0];
                this.setState({
                    typeDescription: temp['desc'],
                    corr:  temp['corr'],
                    incorr:  temp['incorr'],
                    estrategia:  temp['estrategia'],
                    cuantas: temp['cuantas']
                })
            }
        });
    


        autorities.forEach(e => {
            let authorityName = Object.keys(e)[0];
            if (authorityName == this.state.autoridad) {
                let temp =  Object.values(e)[0];
                this.setState({
                    autoridad: temp['desc']
                })
            }
            if (this.state.autoridad == 'Нет внутреннего авторитета') {
                this.setState({
                    autoridad: 'Ninguna'
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
        let hours = date.getHours();
        let minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes() ;
        let weekDay = weekDays[date.getDay()];
        let day = date.getDate();
        let month = months[date.getMonth()];
        let year = date.getFullYear();
        this.setState({
            date: `${weekDay}, ${day} de ${month} de ${year}`,
            time: `${hours}:${minutes}`
        })
    }

   
     
   
    
    async convertToPdf() {
        this.setState({
            generatingPDF: true,
            PDFdownload: false
        });

        const cuantas = this.state.cuantas;
        const name = `${this.state.firstName} ${this.state.lastName}`
        const fecha =  this.state.fecha;
        const currdate = this.state.date + ' ' + this.state.time;
        const hora = this.state.hora;
        const lugar = this.state.lugar;
        const tipo=  this.state.tipo.toUpperCase();
        const tipodesc = this.state.typeDescription;
        const corr1 = this.state.corr.split('Y')[1] ? this.state.corr.split('Y')[0] + '/' : this.state.corr;
        const incorr1 = this.state.incorr.split('Y')[1] ? this.state.incorr.split('Y')[0] + '/' : this.state.incorr;
        const corr2 = this.state.corr.split('Y')[1] ? this.state.corr.split('Y')[1].toUpperCase() : '';
        const incorr2 = this.state.incorr.split('Y')[1] ? this.state.incorr.split('Y')[1].toUpperCase() : '';
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
        const CanalNueve = this.state.canalesCompleto[8] ? this.state.canalesCompleto[8] : '';
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
        const resumen = this.state.text;
        const UserImage = this.state.userImage;
        const Resumen = this.state.text;
        const logo = this.state.logo;
        let params =  {
            bodygraph,
            name,
            fecha,
            hora,
            lugar,
            tipo,
            tipodesc,
            corr1,
            corr2,
            incorr1,
            incorr2,
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
            CanalNueve,
            resumen,
            cuantas,
            UserImage,
            Resumen,
            logo
          }    
         axios.post('http://localhost:3001/downloadpdf', {params})
         .then((res) => {
             console.log(res);
             if (res) {
                 let filename = res.data;
                 console.log('this filename')
                 console.log(filename)
                axios.get('http://localhost:3001/downloadpdftodisk', { params: { filename } })
                .then((res) => {
                    console.log(res);
                    
                    download(res.data, 'test.pdf');
                    this.setState({
                        generatingPDF: false,
                        PDFdownload: true
                    })

                })

             

            }
             
            
         })
         .catch(error => console.log(error));

        
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
        cabezaCentro: this.props.cabezaCentro,
            ajnaCentro: this.props.ajnaCentro,
            gargantaCentro: this.props.gargantaCentro,
            giCentro: this.props.giCentro,
            corazonCentro: this.props.corazonCentro,
            plexosolarCentro: this.props.plexosolarCentro,
            sacralCentro: this.props.sacralCentro,
            bazoCentro: this.props.bazoCentro,
            raizCentro: this.props.raizCentro,
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

    uploadFile() {
        console.log(this.inputFile);
        this.inputFile.current.click();
      };

      uploadLogo() {
        console.log(this.inputFile);
        this.inputLogo.current.click();
      };

      uploadImage = async(image, whatImage, w, h) => {
        if (image) {

            const storage =  await firebase.storage();
           
            const storageRef = storage.ref();

            
            console.log(image);

            const imageRef = storageRef.child(image.name);
           
            await imageRef.put(image)
           
           const imgLink = await imageRef.getDownloadURL();
           console.log(imgLink);
           let img = new Image();
           img.src = imgLink;
           img.onload = function () {
            if (this.width > w || this.height > h ) {
                alert(`Tu imagen tiene que ser ${w}x${h} pixeles o menos`);
                return;
            }  
        }

        if (whatImage == 'photo') {

        this.setState({
            userImage: imgLink
        })
        alert('Tu photo ha subido correctamente')
        } else if (whatImage == 'logo') {
            this.setState({
                logo: imgLink
            })
            alert('Tu logo ha subido correctamente')
        }
           
          } else {
            alert("Please upload an image first.");
          }

      
    }

    handleFileUpload(e, whatImage, w, h) {
        const { files } = e.target;
        
        if (files && files.length) {
            
            const filename = files[0].name;
            const parts = filename.split(".");
            const fileType = parts[parts.length - 1];
            if (fileType == 'PNG' || fileType == 'JPG' || fileType == 'JPEG' || fileType == 'png' || fileType == 'jpg' || fileType == 'jpeg') {
                const url = URL.createObjectURL(files[0]);
                this.uploadImage(files[0], whatImage, w, h);  
            } else {
                alert('Solo puedes subir fotos en formato JPG o PNG')
            }
            
        }
        
    } 

    onCropChange = (crop) => {
        this.setState({ crop })
      }
    
      onCropComplete = (croppedArea, croppedAreaPixels) => {
        console.log(croppedArea, croppedAreaPixels)
      }
    
      onZoomChange = (zoom) => {
        this.setState({ zoom })
      }

       

    render() {
        return (
            <div className='result'>


                <h1 className='resultado-header'>Resultado</h1>
                <div className='resultado-header'>
                <Button onClick={this.convertToPdf} className='result-btn'> {this.state.generatingPDF&&<Spinner
                    className='inner-btn-elem'
                    as="span"
                    animation="border"
                    role="status"
                    size='sm'
                    aria-hidden="true"
                    />}{this.state.PDFdownload && <img src={Completed} className='completed-tick inner-btn-elem' />}Descargar</Button>
                <Button onClick={this.sendMail}  className='result-btn'> {this.state.messageSending&&<Spinner
                    className='inner-btn-elem'
                    as="span"
                    animation="border"
                    role="status"
                    size='sm'
                    aria-hidden="true"
                    />}{this.state.messageSent && <img src={Completed} className='completed-tick inner-btn-elem' />} Enviar correo</Button>
                <Button onClick={e => this.uploadFile(e)}  className='result-btn'>Subir tu foto</Button>
                <Button onClick={e => this.uploadLogo(e)}  className='result-btn'>Subir el logo</Button>   
                </div> 
                <input type='file' id='logo' name='logo' ref={this.inputFile} style={{display: 'none'}} onChange={(e) => this.handleFileUpload(e, 'photo', 250, 200)}/>

                <input type='file' id='file' name='image' ref={this.inputLogo} style={{display: 'none'}} onChange={(e) => this.handleFileUpload(e, 'logo', 80, 30)}/>

                    <Container fluid>
                    <Row>
                        <Col><img className='logo' src={logo} alt='logo' /></Col>
                        <Col><h3>Basic Design</h3></Col>
                        <Col>{this.state.date} {this.state.time}</Col>
                    </Row>

                    <Row className='border'>
                        <Col className='border'><div className='text-center'>NOMBRE</div></Col>
                        <Col className='border'><div className='text-center'>{this.state.firstName} {this.state.lastName}</div></Col>
                        <Col className='border'><div className='text-center'>FECHA</div></Col>
                        <Col className='border'><div className='text-center'>{this.state.fecha}</div></Col>
                        <Col className='border'><div className='text-center'>HORA</div></Col>
                        <Col className='border'><div className='text-center'>{this.state.hora}</div></Col>
                        <Col className='border'><div className='text-center'>LUGAR</div></Col>
                        <Col className='border'><div className='text-center'>{this.state.lugar}</div></Col>
                    </Row>

                    <Row>
                        
                        <Col className='border bold' xs={3}> 
                            
                        <div className='flex'>
                        <div className='near-btn-text'>TIPO </div>
                        <Popup
                            trigger={<QuestionCircle   className=' popup-btn' size={20} />}
                            position="top center"
                            nested
                        >
                            <div >
                            Nos presenta a cual de los cinco tipos energéticos pertenecemos y sus características
                                </div>
                                </Popup>
                                </div>
                        </Col>
                        <Col className='border' xs={3}>
                            <Row className='border'><div className='text-center'>{this.state.tipo.toUpperCase()}</div></Row>
                            
                            <Row className='border lightyellow '><div className='text-center'>¿CUANTOS HAY COMO TÚ?</div></Row>
                            <Row className='border text-center'><div className='text-center'>{this.state.cuantas}</div></Row>
                            
                        </Col>
                        <Col className='border'>
                            <Row className=''><div className='text-center'>{this.state.typeDescription} </div> </Row>
                            <Row className='lightyellow'><div className='text-center'>Esta cifra es de los millones de personas que hay con tu mismo tipo, pero recuerda que como tú solo hay UNA</div></Row>
                        </Col>
                    </Row>

                    <Row>
                        <Col className='border bold' xs={3}>
                        <div className='flex'>
                        <div className='near-btn-text'>   ESTRATEGIA </div>
                        
                        <Popup
                            className='popup-btn'
trigger={<QuestionCircle   className=' popup-btn' size={20} />}
                            position="top center"
                            nested
                        >
                            <div>
                            Es la manera que el diseño te propone para afrontar la vida de forma correcta en base a tu Tipo
                                </div>
                                </Popup>
                                </div>
                               
                        </Col>
                        <Col className='border lightyellow ' xs={3} ><div className='text-center'>COMO AFRONTAR LA VIDA</div></Col>
                        <Col className='border' ><div className='text-center'>{this.state.estrategia} </div></Col>
                        <Col className='border'>
                            <Row className='lightgreen'><div className='text-center'>CORRECTO</div></Row>
                            <Row className=''><div className='text-center'>{this.state.corr.split('Y')[1] ? this.state.corr.split('Y')[0] + '/' : this.state.corr}</div> </Row>
                            <Row className=''><div className='text-center lower'>{this.state.corr.split('Y')[1] ? this.state.corr.split('Y')[1] :' '}</div></Row>
                        </Col>
                        <Col className='border'>
                            <Row className='orange'><div className='text-center'>INCORRECTO</div></Row>
                            <Row className=''><div className='text-center'>{this.state.incorr.split('Y')[1] ? this.state.incorr.split('Y')[0] + '/' : this.state.incorr}</div></Row>
                            <Row className=''><div className='text-center lower'>{this.state.incorr.split('Y')[1] ? this.state.incorr.split('Y')[1] :' '}</div></Row>
                        </Col>
                    </Row>

                    <Row>
                    
                        <Col className='border bold' xs={3}>
                        <div className='flex'>
                            AUTORIDAD
                        <Popup
trigger={<QuestionCircle   className=' popup-btn' size={20} />}
                            position="top center"
                            nested
                        >
                            <div>
                            Es la forma sencilla y adecuada de que tu tipología aprenda a tomar las decisiones que te son adecuadas
                                </div>
                                </Popup>
                                </div>
                        </Col>
                        <Col className='border lightyellow' xs={3}> <div className='text-center'>COMO TOMAR LAS DECISIONES ADECUADAS</div></Col>
                        <Col className='border' xs={6}><div className='text-center'>{this.state.autoridad}</div></Col>
                    </Row>

                    <Row>
                        <Col className='border bold' xs={3}>
                        <div className='flex'>
                            DEFINICIÓN
                        <Popup
trigger={<QuestionCircle   className=' popup-btn' size={20} />}
                            position="top center"
                            nested
                        >
                            <div>
                            Nos muestra cuantas activaciones de energía tienes y como se interaccionan y componen en tu plano energético
                                </div>
                                </Popup>
                                </div>
                        </Col>
                        <Col className='border lightyellow' xs={6}><div className='text-center'>Es la forma en que nuestros sistemas de energía se conectan entre sí, dando como resultado diferentes configuraciones, dependiendo la disposición de las puertas</div></Col>
                        <Col className='border text-center' xs={3}>{this.state.definicion}</Col>
                    </Row>
                    </Container>
                    

                    


                    <Container fluid>
                        <h1 className='text-center' >TUS CENTROS ENERGÉTICOS <Popup
trigger={<QuestionCircle   className=' popup-btn' size={20} />}
                            position="top center"
                            nested
                        >
                            <div>
                            Los nueve centros que definen los bloque de energía diferenciada  con sus cualidades propias y únicas
                                </div>
                            </Popup></h1>
                        <Row className='border lightyellow'><div className='text-center'>Tienes 9 centros y cada uno con sus características concretas,los coloreados están activados y por ellos emites y los que estánen blanco estánabiertos y por ellos recibes la informaciónde tu entorno personas que te rodean </div></Row>
                        <div className='hideonlargescreen'>]
                         <img  src={this.state.bodygraph}/>
                         <Popup
trigger={<QuestionCircle   className=' popup-btn' size={20} />}
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
                        <Col className='border bold' ><div className='text-center'>CABEZA </div></Col>
                        <Col className='border'><div className='text-center'>{this.state.cabezaCentro == 'opened' ? <img className='openclose' src={cabezaAbierto} /> : <img className='openclose' src={cabezaCerrado} /> } </div></Col>
                        <Col className='border lightyellow'><div className='text-center'>Son las preguntas, las dudas y la presion para que se expanda la conciencia </div></Col>
                        </Row>

                        <Row>
                        <Col className='border bold'><div className='text-center'>GARGANTA</div></Col>
                        <Col className='border'><div className='text-center'>{this.state.gargantaCentro == 'opened' ? <img className='openclose' src={gargantaAbierto} /> : <img className='openclose' src={gargantaCerrado} />}</div></Col>
                        <Col className='border lightyellow'><div className='text-center'>Pensamiento emoción y sentimientos en palabras y hechos</div></Col>
                        </Row>

                        <Row>
                        <Col className='border bold'><div className='text-center'>CORAZON</div></Col>
                        <Col className='border'> <div className='text-center'>{this.state.corazonCentro == 'opened' ? <img className='openclose' src={corazonAbierto} /> : <img className='openclose' src={corazonCerrado} />} </div></Col>
                        <Col className='border lightyellow'><div className='text-center'>La supervivencia material. El impulso de la voluntad hacia la autoestima</div></Col>
                        </Row>

                        <Row>
                        <Col className='border bold'><div className='text-center'>SACRAL</div></Col>
                        <Col className='border'><div className='text-center'>{this.state.sacralCentro == 'opened' ? <img className='openclose' src={sacralAbierto} /> : <img className='openclose' src={sacralCerrado} />}</div></Col>
                        <Col className='border lightyellow'><div className='text-center'>Energía vital para hacer cosas y activación del impulso sexual</div> </Col>
                        </Row>


                        <Row>
                        <Col className='border bold'><div className='text-center'>RAIZ</div></Col>
                        <Col className='border'><div className='text-center'>{this.state.raizCentro == 'opened' ? <img className='openclose' src={raizAbierto} /> : <img className='openclose' src={raizCerrado} />} </div></Col>
                        <Col className='border lightyellow'><div className='text-center'>El impulso de crecer, la presión de ser, el estrés, la adrenalina </div></Col>
                        </Row>

                        

                        </Col>

                        <Col className='border d-none d-lg-block '>

                    <Row>
                        
                     <img className='img-fluid h-100' src={this.state.bodygraph}/></Row>
                    <Popup
trigger={<QuestionCircle   className=' popup-btn' size={20} />}
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
                        <Col className='border bold'><div className='text-center'>AJNA</div></Col>
                        <Col className='border'><div className='text-center'>{this.state.ajnaCentro == 'opened' ? <img className='openclose' src={ajnaAbierto} /> : <img className='openclose' src={ajnaCerrado} /> }</div></Col>
                        <Col className='border lightyellow'><div className='text-center'>Analiza e investiga la vida de forma intelectual racional, autorreflexiva</div></Col>
                        </Row>

                        <Row>
                        <Col className='border bold'><div className='text-center'>GI</div></Col>
                        <Col className='border'><div className='text-center'>{this.state.giCentro == 'opened' ? <img className='openclose' src={GIAbierto} /> : <img className='openclose' src={GICerrado} />}</div></Col>
                        <Col className='border lightyellow'><div className='text-center'>Marca la identidad del ser, el amor y la dirección hacia la Fuente superior </div></Col>
                        </Row>

                        <Row>
                        <Col className='border bold'><div className='text-center'>PLEXO</div></Col>
                        <Col className='border'><div className='text-center'>{this.state.plexosolarCentro == 'opened' ? <img className='openclose' src={plexoAbierto} /> : <img className='openclose' src={plexoCerrado} />}</div></Col>
                        <Col className='border lightyellow'><div className='text-center'>La experiencia de los sentimientos, las emociones, sensaciones</div></Col>
                        </Row>

                        <Row>
                        <Col className='border bold'><div className='text-center'>BAZO</div></Col>
                        <Col className='border'><div className='text-center'>{this.state.bazoCentro == 'opened' ? <img className='openclose' src={bazoAbierto} /> : <img className='openclose' src={bazoCerrado} /> }</div></Col>
                        <Col className='border lightyellow'><div className='text-center'>La conciencia del cuerpo, la intuición, el gusto, los miedos</div></Col>
                        </Row>

                        <Row >
                        <Col className='border lightgreen bold'><div className='text-center'>LA GRAN BÚSQUEDA</div></Col>
                        <Col className='border lightgreen bold'><div className='text-center'>Estar en el lugar correcto Con la persona adecuada Haciendo lo que te gusta</div></Col>
                       
                        </Row>
                        
                        </Col>
                    </Row>
                    <Row >
                        <Col className='border bold'>
                            <div className='flex'>
                        <div className='near-btn-text'>PERFIL </div>
                        <Popup
trigger={<QuestionCircle   className=' popup-btn' size={20} />}
                            position="top center"
                            nested
                        >
                            <div>
                            Muestran la energía que nos pone delante nuestro verdadero personaje
                                </div>
                            </Popup>
                            </div>
                        </Col>
                        <Col className='border lightyellow'><div className='text-center'>NUESTRO PERSONAJE AUTENTICO</div></Col>
                        
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
                                    <div className='text-center'>{this.state.cruzUno[0]}</div>
                                    </Row>
                                    <Row className='border-top  border-left'>
                                    <div className='text-center'>{this.state.cruzUno[1]}</div>
                                    </Row>
                                    </Col>
                                </Row>
                            </Col>

                            <Col className='border'>
                                <Row>
                                    <Col  >
                                    <Row>
                                    <div className='flex'>
                                    <div className='near-btn-text puertas'>  PUERTAS   </div>
                                    <Popup
trigger={<QuestionCircle   className=' popup-btn' size={20} />}
                            position="top center"
                            nested
                        >
                            <div>
                            Marcan las cualidades más poderosas que configuran tu plano energético
                                </div>
                                </Popup>
                                
                                </div>
                                    </Row>
                                    <Row className='border-top lightyellow '><div className='text-center-center'>LAS CUALIDADES <br /> QUE MARCAN TU VIDA</div></Row>
                                    
                                    </Col>
                                    </Row>
                            </Col>

                            <Col className='border'>
                                <Row>
                                    <Col className='border bold'>
                                    <div className='text-center'> CONSCIENTES </div>
                                    
                                    <Row className='border-top border-bottom '>
                                    <div className='text-center'>{this.state.cruzDos[0]}</div>
                                    </Row>
                                    <Row className='border-top'>
                                    <div className='text-center'>{this.state.cruzDos[1]}</div>
                                    </Row>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>

                        <Row>
                            <Col className='border'>
                            <div className='flex'>
                            <div className='near-btn-text'>     CRUZ </div>

                            <Popup
trigger={<QuestionCircle   className=' popup-btn' size={20} />}
                            position="top center"
                            nested
                        >
                            <div>
                            Muestra nuestro propósito a realizar en esta vida
                                </div>
                                </Popup>
                            </div>
                            </Col>
                            <Col className='border lightyellow'><div className='text-center'>TU VERDADERO PROPÓSITO</div></Col>
                            <Col className='border'><div className='text-center'>{this.state.cruzstr}</div></Col>
                        </Row>

                        <Row>
                            <Col className='border'></Col>
                            <Col className='border'>
                                 <div className='flex'>
                                 <div className='near-btn-text'>CANALES</div>
                            <Popup
trigger={<QuestionCircle   className=' popup-btn' size={20} />}
                            position="top center"
                            nested
                        >
                            <div>
                            Muestran la energía de nuestras características vitales
                                </div>
                                </Popup>
                                </div>
                            </Col>
                            <Col className='border lightyellow'><div className='text-center'>TUS CARACTERÍSTICAS VITALES</div></Col>
                        </Row>

                        {this.state.canalesCompleto.map((e,i) => <Row className='border'><div className='text-center'>{i} {e}</div></Row>)}
                        
                       
                        <Row><div className='text-center'>NOTAS Y RESUMEN Máximo { Math.abs(this.state.text.length - 275) } / 275 caracteres </div></Row>
                        <Row><textarea type='text'  onChange={this.textChange} className='resume-textbox form-control form-control-lg mb-2' value={this.state.text} style={{borderColor: this.state.text.length == 275 && 'red' }}/></Row>
                        
                        

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


  }
}

  export default connect(mapStateToProps)(Result) 