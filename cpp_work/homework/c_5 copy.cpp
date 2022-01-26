#include <iostream>
#include <string>
#include "c_5.hpp"

using namespace std;
using namespace Fruits;

int main()
{
    CFruits FruitObj;
    cout << "Please write the name of fruit : ";
    cin >> FruitObj.m_Name; cout << endl;
    cout << "Please write the price of fruit : ";
    cin >> FruitObj.m_Price; cout << endl;
    cout << "Please write the number of fruit : ";
    cin >> FruitObj.m_HowMany; cout << endl;

    FruitObj.PrintFruitInformation();

    return 0;
}