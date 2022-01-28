#include <iostream>
#include "Person.h"

int main()
{
    CPerson* pLas = new CPerson("Lass Ulich", 59);
    CPerson* pJames = new CPerson("James Hettfield", 59);
    CPerson* pKirt = new CPerson("Kirt Hamett", 60);
    CPerson* pRobert = new CPerson("Robert Trujilo", 58);

    cout << "Currently Created People : " << CPerson::PersonCount() << endl;

    if (pLas != NULL) delete pLas;
    if (pJames != NULL) delete pJames;
    if (pKirt != NULL) delete pKirt;
    if (pRobert != NULL) delete pRobert;

    return 0;
}
