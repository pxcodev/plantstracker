import React, { useEffect } from "react";
import ComingSoon from "./ComingSoon";
/* import { useDispatch } from "react-redux";
import { getPlantsAction } from "../Redux/plantsDucks";
import Cookies from "js-cookie"; */

export function FarmSimulator() {
  /* 	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getPlantsAction());
		var allcookies = document.cookie;
               document.write ("All Cookies : " + allcookies );
		console.log(Cookies.get('token', { domain: 'https://marketplace.plantvsundead.com' }));
	}) */
  return (
    <>
      <ComingSoon></ComingSoon>
    </>
  );
}

/* 

		planta_rare.png		tipo rare(INFLUYE EN LE X10)	SUMA A X10(HASTA 8 ES RARE)
103		19		1				1							1									91 

diego fuego comun 414/48
101		01		1		1470 

diego insecto comun 1307/168
103		22		1		0795

tipos de plantas

LIGHT 
comun LE: 1236/240 Hour 		0-5 		1200-1250 aumento(10 en 10)

102		19		1			3	6	95

poco comun LE: 1329/240 Hour 	6-7 		1310-1320LE aumento(10 en 10) 	+60

103		19		2			7	9	86

rare LE: 1400/240 Hour			8			1400LE		+80 (-9 SI ES RARA NIVEL 9)

103		19		2			8	9	83

mytica LE: 1500/240 Hour		9			1500LE 1209		+100

103		19		3			9	9	82	

100		19		3			9	9	1792


00	01	02	03	04	05	06	07	08		17	18	19	20
f 	f 	h 	e 	a 	a 	h	 f 	e		f	ai	ai 	ai


LE: 1608/312 Hour LIGHT
103		20	1	0	8	91 

LE: 1633/312 Hour LIGHT
102		20	1	3	3	63

LE: 1642/312 Hour LIGHT
103		20	1	4	2	39

Para que 9 sea mitica el numero sumado debe ser 9 si no
poco comun va de 6 a 8 y rare sera el 9


para que el 8 sea rare el numero sumado tambien debe ser 9

comun 0-5

poco comun 6-7

rara 8 (si numero sumado menor a 9 entonces es poco comun)

mystic	9 (si numero sumado menor a 9 entonces es rara)

103351002939 	1400leBASE DARK AUMENTO-100XNIVEL	AUMENTO-200XPOCOCOMUN	AUMENTO-300XRARA(-90)	AUMENTO-300XMYTIC
10314100293		1200leBASE DARK AUMENTO-100XNIVEL	AUMENTO-200XPOCOCOMUN	AUMENTO-300XRARA(-90)	AUMENTO-200XMYTIC

ELECTRO
103001002939	400leBASE FIRE	AUMENTO-10XNIVEL	AUMENTO-50XPOCOCOMUN	AUMENTO-90XRARA(-9)	AUMENTO-200XMYTIC
ICE

103181002931 	1200leBase LIGHT AUMENTO-10XNIVEL	AUMENTO-60XPOCOCOMUN	AUMENTO-80XRARA(-9)	AUMENTO-100XMYTIC
1021913695		1200leBase LIGHT AUMENTO-10XNIVEL	AUMENTO-60XPOCOCOMUN	AUMENTO-80XRARA(-9)	AUMENTO-100XMYTIC
103201002913 	1600leBase LIGHT AUMENTO-10XNIVEL	AUMENTO-60XPOCOCOMUN	AUMENTO-80XRARA(-9)	AUMENTO-200XMYTIC
103211002921 	1600leBase LIGHT AUMENTO-10XNIVEL	AUMENTO-60XPOCOCOMUN	AUMENTO-80XRARA(-9)	AUMENTO-200XMYTIC

PARASITE
METAL
WATER
WIND

CUANTO LA SUMA ES 9 CUANDO SUBE DE RAREZA DE POCOCOMUN A RARA O RARA A MITICA LA SUMA NO SE TOMA EN CUENTA
PARA EL AUMENTO

SI ES RARA NIVEL 9 ENTONCES EL AUMENTO A ESTE NIVEL SERA EL AUMENTO NORMAL -9PUNTOS

EL AUMENTO DE POCO COMUN A RARA CUANDO EL NIVEL DE LA PLANTA RARA ES 9 VIENE SIENDO
EL AUMENTO ORIGINAL -9PUNTOS
*/
