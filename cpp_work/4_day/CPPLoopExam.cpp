#include <iostream>
#include <string>

using namespace std;

int main()
{
    //int i = 0;
    //while (i < 10)
    //{
    //    cout << i+1 << endl;
    //    i++;
    //}
    //do
    //{
    //    cout << i << endl;
    //    i++;
    //} while (i < 0);

    //for (int i = 0; i < 10; i++)
    //{
    //    cout << "for loop i = " << i << endl;
    //}
    //for (int n = 0, i = 100; n != i; ++n, --i)
    //{
    //    cout << "n = " << n << ", i = " << i << endl;
    //}

    int nArr[5] = { 1, 3, 5, 7, 9 };

    for (int i : nArr)
    {
        cout << "Range-Based for loop i = " << i << endl;
    }

    string str = "Hello_World";
    //string str { "Hello_World" };
    //char str[] = "Hello_World"; 
    for (char c : str)
    {
        cout << "Range-Based for loop c = " << c << endl;
    }
    return 0;
}