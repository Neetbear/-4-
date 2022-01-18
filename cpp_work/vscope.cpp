#include <iostream>

int gVar = 100;

int main()
{
    int a, b;
    int c;
    // int gVar;
    
    a = 10;
    b = 40;
    c = a + b;
    gVar = a + b;

    std::cout << "c = a + b = " << c << std::endl;
    
    std::cout << "gVar = " << gVar << std::endl;

    return 0;
}