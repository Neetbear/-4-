#include <iostream>
#include "scale.h"

using namespace std;

void Tri::scale(double a)
{
	x0 = x0 * a;
	x1 = x1 * a;
	x2 = x2 * a;
	y0 = y0 * a;
	y1 = y1 * a;
	y2 = y2 * a;

	cout << "a0 : (" << x0 << ", " << y0 << ")" << endl;
	cout << "a1 : (" << x1 << ", " << y1 << ")" << endl;
	cout << "a2 : (" << x2 << ", " << y2 << ")" << endl;
};
