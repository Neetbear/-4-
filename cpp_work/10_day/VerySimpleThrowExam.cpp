#include <iostream>

using namespace std;

double division(int a, int b)
{
    if(b == 0)
    {
        throw "Division by Zero!!!";
    }
    
    return (double)(a/b);
}

int main()
{
    int x = 50, y = 20;
    double z = 0.0f;

    try
    {
        // throw 128;
        z = division(x, y);
        cout << "divided value = " << z << endl;
    }
    // catch(int errCode)
    catch(const char* errMsg)
    {
        // cout << "An exception occured. Exception Error code : " << errCode << endl;
        cerr << errMsg << endl;
    }

    return 0;
}