#include <iostream>
#include "move.h"

using namespace std;

void Tri::move(double a, double b)
{
	x0 = x0 + a;
	x1 = x1 + a;
	x2 = x2 + a;
	y0 = y0 + b;
	y1 = y1 + b;
	y2 = y2 + b;

	cout << "a0 : (" << x0 << ", " << y0 << ")" << endl;
	cout << "a1 : (" << x1 << ", " << y1 << ")" << endl;
	cout << "a2 : (" << x2 << ", " << y2 << ")" << endl;
};
