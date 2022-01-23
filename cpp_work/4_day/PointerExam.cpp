#include <iostream>
#include <string>
using namespace std;
int main()
{
    string food = "Hamburger";
    string* ptrFood = &food;
    
    cout << "food : " << food << endl;
    cout << "Address of food : " << &food << endl;
    cout << "Address of ptrFood : " << ptrFood << endl;
    cout << "ptrFood : " << *ptrFood << endl;

    *ptrFood = "Pizza";
    cout << "food : " << food << endl;
    cout << "Address of food : " << &food << endl;
    cout << "Address of ptrFood : " << ptrFood << endl;
    cout << "ptrFood : " << *ptrFood << endl;
    //int nNumber = 123;
    //int* ptrNumber = &nNumber;

    //cout << "nNumber : " << nNumber << endl;
    //cout << "Address of nNumber : " << &nNumber << endl;
    //cout << "Address of ptrNumber : " << ptrNumber << endl;
    //cout << "ptrNumber : " << *ptrNumber << endl;

    return 0;
}
