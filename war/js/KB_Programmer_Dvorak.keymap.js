/**
 * Amounts are in percent of keyboard width/height.
 * 
 * This describes KB_Programmer_Dvorak.png (svg) keyboard, from /img
 */
 
//key width
var kw = 6.0;
//horizontal gap
var hg = 0.65;

//key height
var kh = 19.0;
//vertical gap
var vg = 0.65;

//caps lock width
var cl = 11.67;
//tab width
var t = 9.8;
//shift width
var s = 14.89;

var PROGRAMMER_DVORAK_KEYMAP = {
	//===============NUMBER ROW==============================
	//$
	36 : {x1: 0, y1: 0, x2: kw, y2: kh},
	//~
	126: {x1: 0, y1: 0, x2: kw, y2: kh},
	//&
	38 : {x1: (kw+hg), y1: 0, x2: (kw+hg)*2-hg, y2: kh},
	//%
	37 : {x1: (kw+hg), y1: 0, x2: (kw+hg)*2-hg, y2: kh},
	//[
	91 : {x1: (kw+hg)*2, y1: 0, x2: (kw+hg)*3-hg, y2: kh},
	//7
	55 : {x1: (kw+hg)*2, y1: 0, x2: (kw+hg)*3-hg, y2: kh},
	//{
	123 : {x1: (kw+hg)*3, y1: 0, x2: (kw+hg)*4-hg, y2: kh},
	//5
	53 : {x1: (kw+hg)*3, y1: 0, x2: (kw+hg)*4-hg, y2: kh},
	//}
	125 : {x1: (kw+hg)*4, y1: 0, x2: (kw+hg)*5-hg, y2: kh},
	//3
	51 : {x1: (kw+hg)*4, y1: 0, x2: (kw+hg)*5-hg, y2: kh},
	//(
	40 : {x1: (kw+hg)*5, y1: 0, x2: (kw+hg)*6-hg, y2: kh},
	//1
	49 : {x1: (kw+hg)*5, y1: 0, x2: (kw+hg)*6-hg, y2: kh},
	//=
	61 : {x1: (kw+hg)*6, y1: 0, x2: (kw+hg)*7-hg, y2: kh},
	//9
	57 : {x1: (kw+hg)*6, y1: 0, x2: (kw+hg)*7-hg, y2: kh},
	//*
	42 : {x1: (kw+hg)*7, y1: 0, x2: (kw+hg)*8-hg, y2: kh},
	//0
	48 : {x1: (kw+hg)*7, y1: 0, x2: (kw+hg)*8-hg, y2: kh},
	//)
	41 : {x1: (kw+hg)*8, y1: 0, x2: (kw+hg)*9-hg, y2: kh},
	//2
	50 : {x1: (kw+hg)*8, y1: 0, x2: (kw+hg)*9-hg, y2: kh},
	//+
	43 : {x1: (kw+hg)*9, y1: 0, x2: (kw+hg)*10-hg, y2: kh},
	//4
	52 : {x1: (kw+hg)*9, y1: 0, x2: (kw+hg)*10-hg, y2: kh},
	//]
	93 : {x1: (kw+hg)*10, y1: 0, x2: (kw+hg)*11-hg, y2: kh},
	//6
	54 : {x1: (kw+hg)*10, y1: 0, x2: (kw+hg)*11-hg, y2: kh},
	//!
	33 : {x1: (kw+hg)*11, y1: 0, x2: (kw+hg)*12-hg, y2: kh},
	//8
	56 : {x1: (kw+hg)*11, y1: 0, x2: (kw+hg)*12-hg, y2: kh},
	//#
	35 : {x1: (kw+hg)*12, y1: 0, x2: (kw+hg)*13-hg, y2: kh},
	//`
	96 : {x1: (kw+hg)*12, y1: 0, x2: (kw+hg)*13-hg, y2: kh},
	//BACKSPACE
	8 : {x1: (kw+hg)*13, y1: 0, x2: 100-hg, y2: kh},
	
	//============================UPPER ROW==========================
	//TAB key has width t
	
	//;
	59 : {x1: t, y1: (kh+vg), x2: t+kw, y2: (kh+vg)*2-vg},
	//:
	58 : {x1: t, y1: (kh+vg), x2: t+kw, y2: (kh+vg)*2-vg},
	//,
	44 : {x1: t+(kw+hg), y1: (kh+vg), x2: t+(kw+hg)*2-hg, y2: (kh+vg)*2-vg},
	//<
	60 : {x1: t+(kw+hg), y1: (kh+vg), x2: t+(kw+hg)*2-hg, y2: (kh+vg)*2-vg},
	//.
	46 : {x1: t+(kw+hg)*2, y1: (kh+vg), x2: t+(kw+hg)*3-hg, y2: (kh+vg)*2-vg},
	//>
	62 : {x1: t+(kw+hg)*2, y1: (kh+vg), x2: t+(kw+hg)*3-hg, y2: (kh+vg)*2-vg},
	//p
	112 : {x1: t+(kw+hg)*3, y1: (kh+vg), x2: t+(kw+hg)*4-hg, y2: (kh+vg)*2-vg},
	//P
	80 : {x1: t+(kw+hg)*3, y1: (kh+vg), x2: t+(kw+hg)*4-hg, y2: (kh+vg)*2-vg},
	//y
	121 : {x1: t+(kw+hg)*4, y1: (kh+vg), x2: t+(kw+hg)*5-hg, y2: (kh+vg)*2-vg},
	//Y
	89 : {x1: t+(kw+hg)*4, y1: (kh+vg), x2: t+(kw+hg)*5-hg, y2: (kh+vg)*2-vg},
	//f
	102 : {x1: t+(kw+hg)*5, y1: (kh+vg), x2: t+(kw+hg)*6-hg, y2: (kh+vg)*2-vg},
	//F
	70 : {x1: t+(kw+hg)*5, y1: (kh+vg), x2: t+(kw+hg)*6-hg, y2: (kh+vg)*2-vg},
	//g
	103 : {x1: t+(kw+hg)*6, y1: (kh+vg), x2: t+(kw+hg)*7-hg, y2: (kh+vg)*2-vg},
	//G
	71 : {x1: t+(kw+hg)*6, y1: (kh+vg), x2: t+(kw+hg)*7-hg, y2: (kh+vg)*2-vg},
	//c
	99 : {x1: t+(kw+hg)*7, y1: (kh+vg), x2: t+(kw+hg)*8-hg, y2: (kh+vg)*2-vg},
	//C
	67 : {x1: t+(kw+hg)*7, y1: (kh+vg), x2: t+(kw+hg)*8-hg, y2: (kh+vg)*2-vg},
	//r
	114 : {x1: t+(kw+hg)*8, y1: (kh+vg), x2: t+(kw+hg)*9-hg, y2: (kh+vg)*2-vg},
	//R
	82 : {x1: t+(kw+hg)*8, y1: (kh+vg), x2: t+(kw+hg)*9-hg, y2: (kh+vg)*2-vg},
	//l
	108 : {x1: t+(kw+hg)*9, y1: (kh+vg), x2: t+(kw+hg)*10-hg, y2: (kh+vg)*2-vg},
	//L
	76 : {x1: t+(kw+hg)*9, y1: (kh+vg), x2: t+(kw+hg)*10-hg, y2: (kh+vg)*2-vg},
	///
	47 : {x1: t+(kw+hg)*10, y1: (kh+vg), x2: t+(kw+hg)*11-hg, y2: (kh+vg)*2-vg},
	//?
	63 : {x1: t+(kw+hg)*10, y1: (kh+vg), x2: t+(kw+hg)*11-hg, y2: (kh+vg)*2-vg},
	//@
	64 : {x1: t+(kw+hg)*11, y1: (kh+vg), x2: t+(kw+hg)*12-hg, y2: (kh+vg)*2-vg},
	//^
	94 : {x1: t+(kw+hg)*11, y1: (kh+vg), x2: t+(kw+hg)*12-hg, y2: (kh+vg)*2-vg},
	//\
	92 : {x1: t+(kw+hg)*12, y1: (kh+vg), x2: t+(kw+hg)*13-hg, y2: (kh+vg)*2-vg},
	//|
	124 : {x1: t+(kw+hg)*12, y1: (kh+vg), x2: t+(kw+hg)*13-hg, y2: (kh+vg)*2-vg},
	
	//========================HOME ROW============================
	//Caps Lock has width cl
	
	//a
	97 : {x1: cl, y1: (kh+vg)*2, x2: cl+kw, y2: (kh+vg)*3-vg},
	//A
	65 : {x1: cl, y1: (kh+vg)*2, x2: cl+kw, y2: (kh+vg)*3-vg},
	//o
	111 : {x1: cl+(kw+hg), y1: (kh+vg)*2, x2: cl+(kw+hg)*2-hg, y2: (kh+vg)*3-vg},
	//O
	79 : {x1: cl+(kw+hg), y1: (kh+vg)*2, x2: cl+(kw+hg)*2-hg, y2: (kh+vg)*3-vg},
	//e
	101 : {x1: cl+(kw+hg)*2, y1: (kh+vg)*2, x2: cl+(kw+hg)*3-hg, y2: (kh+vg)*3-vg},
	//E
	69 : {x1: cl+(kw+hg)*2, y1: (kh+vg)*2, x2: cl+(kw+hg)*3-hg, y2: (kh+vg)*3-vg},
	//u
	117 : {x1: cl+(kw+hg)*3, y1: (kh+vg)*2, x2: cl+(kw+hg)*4-hg, y2: (kh+vg)*3-vg},
	//U
	85 : {x1: cl+(kw+hg)*3, y1: (kh+vg)*2, x2: cl+(kw+hg)*4-hg, y2: (kh+vg)*3-vg},
	//i
	105 : {x1: cl+(kw+hg)*4, y1: (kh+vg)*2, x2: cl+(kw+hg)*5-hg, y2: (kh+vg)*3-vg},
	//I
	73 : {x1: cl+(kw+hg)*4, y1: (kh+vg)*2, x2: cl+(kw+hg)*5-hg, y2: (kh+vg)*3-vg},
	//d
	100 : {x1: cl+(kw+hg)*5, y1: (kh+vg)*2, x2: cl+(kw+hg)*6-hg, y2: (kh+vg)*3-vg},
	//D
	68 : {x1: cl+(kw+hg)*5, y1: (kh+vg)*2, x2: cl+(kw+hg)*6-hg, y2: (kh+vg)*3-vg},
	//h
	104 : {x1: cl+(kw+hg)*6, y1: (kh+vg)*2, x2: cl+(kw+hg)*7-hg, y2: (kh+vg)*3-vg},
	//H
	72 : {x1: cl+(kw+hg)*6, y1: (kh+vg)*2, x2: cl+(kw+hg)*7-hg, y2: (kh+vg)*3-vg},
	//t
	116 : {x1: cl+(kw+hg)*7, y1: (kh+vg)*2, x2: cl+(kw+hg)*8-hg, y2: (kh+vg)*3-vg},
	//T
	84 : {x1: cl+(kw+hg)*7, y1: (kh+vg)*2, x2: cl+(kw+hg)*8-hg, y2: (kh+vg)*3-vg},
	//n
	110 : {x1: cl+(kw+hg)*8, y1: (kh+vg)*2, x2: cl+(kw+hg)*9-hg, y2: (kh+vg)*3-vg},
	//N
	78 : {x1: cl+(kw+hg)*8, y1: (kh+vg)*2, x2: cl+(kw+hg)*9-hg, y2: (kh+vg)*3-vg},
	//s
	115 : {x1: cl+(kw+hg)*9, y1: (kh+vg)*2, x2: cl+(kw+hg)*10-hg, y2: (kh+vg)*3-vg},
	//S
	83 : {x1: cl+(kw+hg)*9, y1: (kh+vg)*2, x2: cl+(kw+hg)*10-hg, y2: (kh+vg)*3-vg},
	//-
	45 : {x1: cl+(kw+hg)*10, y1: (kh+vg)*2, x2: cl+(kw+hg)*11-hg, y2: (kh+vg)*3-vg},
	//_
	95 : {x1: cl+(kw+hg)*10, y1: (kh+vg)*2, x2: cl+(kw+hg)*11-hg, y2: (kh+vg)*3-vg},
	//ENTER
	13 : {x1: cl+(kw+hg)*11, y1: (kh+vg)*2, x2: 100-hg, y2: (kh+vg)*3-vg},
			
	//========================BOTTOM ROW================================
	
	//SHIFT has width s
	//SHIFT
	16 : {x1: 0, y1: (kh+vg)*3, x2: s-hg, y2: (kh+vg)*4-vg},
	//'
	39 : {x1: s, y1: (kh+vg)*3, x2: s+kw, y2: (kh+vg)*4-vg},
	//"
	34 : {x1: s, y1: (kh+vg)*3, x2: s+kw, y2: (kh+vg)*4-vg},
	//q
	113 : {x1: s+(kw+hg), y1: (kh+vg)*3, x2: s+(kw+hg)*2-hg, y2: (kh+vg)*4-vg},
	//Q
	81 : {x1: s+(kw+hg), y1: (kh+vg)*3, x2: s+(kw+hg)*2-hg, y2: (kh+vg)*4-vg},
	//j
	106 : {x1: s+(kw+hg)*2, y1: (kh+vg)*3, x2: s+(kw+hg)*3-hg, y2: (kh+vg)*4-vg},
	//J
	74 : {x1: s+(kw+hg)*2, y1: (kh+vg)*3, x2: s+(kw+hg)*3-hg, y2: (kh+vg)*4-vg},
	//k
	107 : {x1: s+(kw+hg)*3, y1: (kh+vg)*3, x2: s+(kw+hg)*4-hg, y2: (kh+vg)*4-vg},
	//K
	75 : {x1: s+(kw+hg)*3, y1: (kh+vg)*3, x2: s+(kw+hg)*4-hg, y2: (kh+vg)*4-vg},
	//x
	120 : {x1: s+(kw+hg)*4, y1: (kh+vg)*3, x2: s+(kw+hg)*5-hg, y2: (kh+vg)*4-vg},
	//X
	88 : {x1: s+(kw+hg)*4, y1: (kh+vg)*3, x2: s+(kw+hg)*5-hg, y2: (kh+vg)*4-vg},
	//b
	98 : {x1: s+(kw+hg)*5, y1: (kh+vg)*3, x2: s+(kw+hg)*6-hg, y2: (kh+vg)*4-vg},
	//B
	66 : {x1: s+(kw+hg)*5, y1: (kh+vg)*3, x2: s+(kw+hg)*6-hg, y2: (kh+vg)*4-vg},
	//m
	109 : {x1: s+(kw+hg)*6, y1: (kh+vg)*3, x2: s+(kw+hg)*7-hg, y2: (kh+vg)*4-vg},
	//M
	77 : {x1: s+(kw+hg)*6, y1: (kh+vg)*3, x2: s+(kw+hg)*7-hg, y2: (kh+vg)*4-vg},
	//w
	119 : {x1: s+(kw+hg)*7, y1: (kh+vg)*3, x2: s+(kw+hg)*8-hg, y2: (kh+vg)*4-vg},
	//W
	87 : {x1: s+(kw+hg)*7, y1: (kh+vg)*3, x2: s+(kw+hg)*8-hg, y2: (kh+vg)*4-vg},
	//v
	118 : {x1: s+(kw+hg)*8, y1: (kh+vg)*3, x2: s+(kw+hg)*9-hg, y2: (kh+vg)*4-vg},
	//V
	86 : {x1: s+(kw+hg)*8, y1: (kh+vg)*3, x2: s+(kw+hg)*9-hg, y2: (kh+vg)*4-vg},
	//z
	122 : {x1: s+(kw+hg)*9, y1: (kh+vg)*3, x2: s+(kw+hg)*10-hg, y2: (kh+vg)*4-vg},
	//Z
	90 : {x1: s+(kw+hg)*9, y1: (kh+vg)*3, x2: s+(kw+hg)*10-hg, y2: (kh+vg)*4-vg},
	
	//===============VERY BOTTOM ROW=======================
	
	//whitespace
	32 : {x1: 26.67, y1: (kh+vg)*4, x2: 66, y2: 100-hg},
}