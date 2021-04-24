import React, { Component } from "react";
import { Container, Row, Col, Button } from 'react-bootstrap';
import logo from './img/logologo.png';
import {connect} from 'react-redux';
import axios from 'axios';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

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
    ["3/50","41/31","Yuxtapuesta", "Cruz de la Mutación"],
    ["3/50","41/31","Angulo Izquierdo", "Cruz de los Deseos 1"],
    
    ["27/28","41/31","Angulo Derecho", "Cruz de lo Inesperado 1 "],
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
    cuantas: '2,884,236,073'
 }},
{МанифестирующийГенератор: {
    desc: 'Persona con energía. Fuerza para realizar y poner en marcha actividades. Sabes responder a la vida y has de despertar a la propuesta correcta que se te pondrá delante',
    corr: 'SATISFACCIÓN Y PAZ',
    incorr: 'FRUSTRACIÓN Y RABIA',
    estrategia: 'CLARIDAD PARA RESPONDER AL ESTÍMULO EXTERNO',
    cuantas: '2,572,426,768'

}},
{Манифестор: {
    desc: 'Persona de acción con energía. Inician sin necesitar a nadie. Saben pasar todas las etapas hasta concretar su idea',
    corr: 'PAZ',
    incorr: 'RABIA',
    estrategia: 'INFORMANDO ANTES DE ACTUAR',
    cuantas: '1,650,021,821'
    }},
{Проектор: {
    desc: 'Persona no energética. Tienes la fuerza para guiar la energía de los demás. Buenos mediadores y organizadores natos. Ven lo que los demás no aprecian inicialmente',
    corr: 'ÉXITO',
    incorr: 'AMARGURA',
    estrategia: 'ESPERADO A SER RECONOCIDO E INVITADO A ACTUAR',
    cuantas: '628,579,741'
    }},
{Рефлектор: {
    desc: 'Persona con gran conocimiento y sabiduría. Son el espejo que refleja la realidad social. Ecuánimes y justos',
    corr: 'SORPRESA',
    incorr: 'DESILUSIÓN',
    estrategia: 'ESPERANDO PASAR EL CICLO LUNAR',
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
            
            updatedtwo: true
        }
    this.getCurrDate = this.getCurrDate.bind(this);
    this.translateHelper = this.translateHelper.bind(this);
    this.addDescription = this.addDescription.bind(this);
    this.convertToPdf = this.convertToPdf.bind(this);
    this.cruzWorker = this.cruzWorker.bind(this);
    this.sendMail = this.sendMail.bind(this);
    this.svgRef = React.createRef();
    this.textChange = this.textChange.bind(this);
    }


    textChange(e) {
        this.setState({
            text: e.target.value
        });
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
                   
                } 
                
            })
        } else {
            angulos.forEach(e => {
             if (this.state.cruzadd.person == e[0] && this.state.cruzadd.design == e[1] && e[2] == cruzAngulo) { //["51/57","61/62","Angulo Izquierdo", "Cruz del Clarín 1"],
                console.log('yes')
                cruzNombre = e[3];
                
            }
        });
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

   
     
   

    convertToPdf() {
        console.log('date');
        console.log(this.state.date);
        console.log('fecha');
        console.log(this.state.fecha);
        const name = `${this.state.firstName} ${this.state.lastName}`
        const fecha =  this.state.fecha;
        const currdate = this.state.date + ' ' + this.state.time;
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
            CanalNueve,
            resumen
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

    
    

    render() {
        return (
            <div className='result'>


                <h1>Resultado</h1>
                <Button onClick={this.convertToPdf}>Descargar</Button>
                <Button onClick={this.sendMail}>Enviar correo</Button>
                    <Container fluid>
                    <Row>
                        <Col><img className='logo' src={logo} alt='logo' /></Col>
                        <Col><h3>Basic Design</h3></Col>
                        <Col>{this.state.date} {this.state.time}</Col>
                    </Row>

                    <Row className='border'>
                        <Col className='border'>NOMBRE</Col>
                        <Col className='border'>{this.state.firstName} {this.state.lastName}</Col>
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
                            <Row className='border'>{this.state.tipo}</Row>
                            
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
                        <Col className='border' xs={3}>{this.state.definicion}</Col>
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