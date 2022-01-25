#include <iostream>

using namespace std;

void HelloFunc()
{
    cout << "Welcome to C++ Hell!!!!" << endl;
}

void HelloWorld(string strName)
{
    cout << "Hello " << strName << endl;
}

void WhreAreYouFrom(string strName, int nAge, string strCountry = " KOREA")
{
    cout << "My name is " << strName << "and my age is " << nAge << "!!!\n";
    cout << "I came from " << strCountry << "!!!\n";
}

int HowOldAreyou(int nAge)
{
    int age = nAge;
    return age;
}

void SwapInt(int& x, int& y)
{
    int temp = x;

    x = y;
    y = temp;
}

int main()
{
    HelloFunc();

    HelloWorld("SiEun");
    HelloWorld("HyeJin");
    HelloWorld("TaeHyun");

    WhreAreYouFrom("SiEun", 20);
    WhreAreYouFrom("HyeJin", 20);
    WhreAreYouFrom("HyeIn", 20);
    WhreAreYouFrom("James Hetfield", 30, "USA");
    
    cout << "My age : " << HowOldAreyou(25) << endl;
    cout << "=====================================================================" << endl;
    int nFirst = 10, nSecond = 30;
    cout << "Before swap nFirst = " << nFirst << ", nSecond = " << nSecond << endl;
    SwapInt(nFirst, nSecond);
    cout << "After swap nFirst = " << nFirst << ", nSecond = " << nSecond << endl;

    return 0;
}