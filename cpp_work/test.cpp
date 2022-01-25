#include <iostream>
using namespace std;

int& Ref( int& ref)
{
    ref++;
    cout << "REF : " << ref << endl;
    return ref;
}

int main()
{
    // int a = 1;
    // int& b = Ref(a);

    // a++;
    // b++;

    // cout << &a <<endl;
    // cout << a << endl;
    // cout << &b <<endl;
    // cout << b << endl;
    // return 0;
    double b;
    cout << "input b : ";
    cin >> b; cout << endl;
    cout << b << endl;
    return 0;
}