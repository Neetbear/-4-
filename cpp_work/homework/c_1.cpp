#include <iostream>

using namespace std;

int main()
{
    int danNum;
    cout << "Enter Number for Gugudan What You Want to See : ";
    cin >> danNum; cout << endl;
    while( danNum != 0)  
    {
        for(int i = 1; i <= 9; i++)
        {
            cout << danNum << " * " << i << " = " << danNum*i <<endl;
        }
        cout << "Enter Number for Gugudan What You Want to See : ";
        cin >> danNum; cout << endl;
    }
    return 0;
}