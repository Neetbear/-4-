#include <iostream>
#include "area.h"

using namespace std;

void Tri::area()
{
    double dArea = (((x0 * y1) - (y0 * x1)) + ((x1 * y2) - (y1 * x2)) + ((x2 * y0) - (y2 * x0))) / 2;

    if( dArea < 0 )
    {
        dArea = -dArea;
    }

    cout << "Triangle's area : " << dArea << endl;
};
