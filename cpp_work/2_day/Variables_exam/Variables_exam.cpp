#include <iostream>
#include <stdio.h>
#include <string>

#include "Variables_exam.hpp"

using namespace std;

int main()
{
	int nNum = 6;
	float fNum = 6.12345678;
	double dNum = 8.1234567890123456;
	char cLetter = 'A';
	bool isVar = true, isFalse = false;
	string strText = "Hello\tWorld!!!";
	int isNumber = true;

	cout << "int = " << nNum << endl;
	cout.precision(7);
	cout << "float = " << fixed <<fNum << endl;
	cout.precision(15);
	cout << "double = " << fixed << dNum << endl;
	cout << "char = " << cLetter << endl;
	cout << "bool isVal= " << isVar << ", bool isFalse = " << isFalse << ", isNumber = " << isNumber << endl;
	cout << "string = " << strText << endl;
	printf("cLetter number : %d\r\n", cLetter);
	cout << "===================" << endl;

	float f1 = 24e3;
	double d1 = 15E4;
	cout << "f1 = " << f1 << ", d1 = " << d1 << endl; /*마지막 precision에 영향받음*/

	char chA = 'A';
	char chAA = 0x41;
	char chBB = 66;
	char chCC = 67;

	cout << "chA : " << (int)chA << endl;
	cout << chAA << chBB << chCC << endl;

	string strGreeting = "Hello C++!!!!";
	cout << strGreeting << endl;
	return 0;
}