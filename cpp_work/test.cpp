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
    int a = 999;
    int b = 999/100;
    cout << b << endl;
    return 0;
}