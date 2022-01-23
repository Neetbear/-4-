#include <iostream>
#include <bitset>

using namespace std;

int main()
{
    int x = 100 + 200;
    int y = x + 400;
    /*int z = y / x; -> 이거하면 정수만 처리해서 2로 나옴*/
    float z = (float)y / (float)x;
    int xx = y % x;

    cout << "x = " << x << endl;
    cout << "y = " << y << endl;
    cout << "z = " << z << endl;
    cout << "xx = " << xx << endl;

    int nNumber = 10;
    nNumber += 25;

    cout << "nNumber = " << nNumber << endl;

    int isX = 10, isY = 7;
    cout << "Return value : " << (isX > isY ) << endl;

    // 60 = 0011 1100 // 13 = 0000 1101
    unsigned char A = 60, B = 13;

    cout << "(A & B) = " << (A & B) << endl;
    cout << "(A | B) = " << (A | B) << endl;
    cout << "(A ^ B) = " << (A ^ B) << endl;
    cout << "(~A) = " << bitset<8>(~A) << endl; //2의 보수로 계산해서 -61 나오는거 같음

    return 0;
}
