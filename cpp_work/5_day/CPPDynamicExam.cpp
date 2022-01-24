#include <iostream>

using namespace std;

int main()
{
    //int* ptrInt = new int;
    //*ptrInt = 1024;

    //double* ptrDouble = new double;
    //*ptrDouble = 3.141592;


    //cout << "Int type ptr value : " << *ptrInt << endl;
    //cout << "Double type ptr value : " << *ptrDouble << endl;

    //if (ptrInt != NULL)
    //{
    //    delete ptrInt;
    //    ptrInt = NULL;
    //}

    //if (ptrDouble != NULL)
    //{
    //    delete ptrDouble;
    //    ptrDouble = NULL;
    //}

    char* pChar = new char;
    *pChar = 'a';
    cout << "memory address = " << (void*)pChar << " / " << pChar << "\t value = " << *pChar << endl;
    cout << "Heap size = " << sizeof(*pChar) << endl;
    if (pChar != NULL)
    {
        delete pChar;
        pChar = NULL;
    }

    int* ptrNum = new int;
    *ptrNum = 24;
    cout << "memory address = " << (void*)ptrNum << " / " << ptrNum << "\t value = " << *ptrNum << endl;
    cout << "Heap size = " << sizeof(*ptrNum) << endl;
    if (ptrNum != NULL)
    {
        delete ptrNum;
        ptrNum = NULL;
    }

    float* ptrFNum = new float;
    *ptrFNum = 3.141592;
    cout << "memory address = " << (void*)ptrFNum << " / " << ptrFNum << "\t value = " << *ptrFNum << endl;
    cout << "Heap size = " << sizeof(*ptrFNum) << endl;
    if (ptrFNum != NULL)
    {
        delete ptrFNum;
        ptrFNum = NULL;
    }

    double* ptrDNum = new double;
    *ptrDNum = 3.141592;
    cout << "memory address = " << (void*)ptrDNum << " / " << ptrDNum << "\t value = " << *ptrDNum << endl;
    cout << "Heap size = " << sizeof(*ptrDNum) << endl;
    if (ptrDNum != NULL)
    {
        delete ptrDNum;
        ptrDNum = NULL;
    }

    return 0;
}
