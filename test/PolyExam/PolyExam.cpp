#include <iostream>
#include "Rectangle.h"
#include "Triangle.h"

int main()
{
    CShape* shape;
    CRectangle rect(20, 30);
    CTriangle tri(10, 30);

    // store the address of rectangle
    shape = &rect;

    // call rectangle area
    shape->Area();

    // store the address of Triangle
    shape = &tri;

    // call triangle area
    shape->Area();

    return 0;
}
