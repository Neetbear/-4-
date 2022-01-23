#include <iostream>
#include <string>
using namespace std;

int main()
{
    int grade[3] = { 85, 65, 90 };
    int &refGrade = grade[0];
    cout << grade << endl;

    for (int i = 0; i < 3; i++)
    {
        cout << &grade[i] << endl;
    }

    //string itCompany[5];
    //itCompany[0] = "Apple"; 등등 일일이 줘도 되긴한다
    string itCompany[5] = { "Apple", "Microsoft", "IBM", "Amazon", "ESP Guitar" };
    cout << itCompany[4] << endl;
    itCompany[0] = "Snakebyte Guitar";
    for (string str : itCompany)
        cout << str << endl;
    
    int nNumber[] = { 12, 34, 56, 78 };
    for (int i = 0; i < (sizeof(nNumber) / sizeof(nNumber[0])); i++)
        cout << "sizeof nNumber[" << i << "] : " << nNumber[i] << endl;

    return 0;
}
