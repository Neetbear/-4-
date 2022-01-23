#include <iostream>

using namespace std;

int main()
{
    //int x = 0;

    //cout << "Input a number : ";
    //cin >> x;
    //cout << "Your Input Number : " << x << endl;

    //int x, y;
    //int nsum;
    //cout << "input x number : ";
    //cin >> x; cout << endl;
    //cout << "input y number : ";
    //cin >> y; cout << endl;

    //nsum = x + y;
    //cout << "x = "<< x << "y =" << y << "nsum = " << nsum << endl;

    char strName[50];
    int age = 0;

    cout << "Enter Your Name and age : ";
    cin >> strName >> age; cout << endl;
    cout << "Your name is : " << strName << ", Your age is : " << age << endl;

    char strErr[] = "Welcome to C++ Hell!!!";
    cerr << "Error Message : " << strErr << endl;

    char strLog[] = "We gonna die to Hell!!!!";
    clog << "Log Message : " << strLog << endl;

    return 0;
}