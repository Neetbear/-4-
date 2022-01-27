#include <iostream>
// #include "Line.cpp"
#include <Line.h>
// #include "./Line.h"

using namespace std;

int main () 
{
    CLine* line = new CLine();
    
    line->SetLength(120.123);
    cout << "The Line Length : " << line->GetLength() << endl;
    delete line;

    cout << "after deleted line\n";
    
    return 0;
}