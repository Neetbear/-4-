// #include <iostream>
#include "Print.h"
// #include <CPrint.h>

// using namespace std;

int main()
{
    CPrint printData;
     printData.Print(4);
     printData.Print(3.1415);
     printData.Print((char*)"Hello World");

    return 0;
}