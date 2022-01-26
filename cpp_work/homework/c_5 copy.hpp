#pragma once

#include <iostream>
#include <string>

using namespace std;

namespace Fruits
{
    // struct FruitsInfo
    // {
    //     char m_Name[50];
    //     char m_Name[50];
    //     char m_Name[50];
    // };

    class CFruits
    {
        public:
            // struct FruitsInfo m_FruitInfo;
            string m_Name;
            string m_Price;
            string m_HowMany;

            void PrintFruitInformation();
    };

    void CFruits::PrintFruitInformation()
    {
        cout << "Fruit's Name : " << m_Name << endl;
        cout << "Fruit's Price : " << m_Price << endl;
        cout << "Number of Fruits : " << m_HowMany << endl;
    }
}