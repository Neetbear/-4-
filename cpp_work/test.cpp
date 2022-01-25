#include <iostream>
#include <string>
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
    string x = "5.123";
    cout << stod(x) << endl;
    string y = "5.qwe";
    cout << stod(y) << endl;
    cout << to_string(stod(y)) << endl;
    double z = 4.123;
    cout << to_string(z) << endl;
    cout << stod(to_string(z)) << endl;
    string yy = "qwe";
    cout << stod(yy) << endl;
    cout << to_string(stod(yy)) << endl;
    return 0;
}