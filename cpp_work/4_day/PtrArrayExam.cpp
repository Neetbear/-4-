#include <iostream>
#include <string>
using namespace std;

int main()
{
    int arrNumber[5];
    int* ptr;
    // 1번방
    ptr = arrNumber; // 첫번째 주소값을 주니까 arrNumber[0] 주소랑 같다?
    *ptr = 10; // arrNumber[0] =10; 이랑 같다
    cout << ptr << endl;
    // 2번방
    ptr++; // 주소값 변경이니까 arrNumber[1]로 이동?
    *ptr = 20;
    cout << ptr << endl;
    // 3번방
    ptr = &arrNumber[2];
    *ptr = 30;
    cout << ptr << endl;
    // 4번방
    ptr = arrNumber + 3;
    *ptr = 40;
    cout << ptr << endl;
    // 5번방
    ptr = arrNumber;
    *(ptr + 4) = 50;
    cout << ptr << endl;

    for (int i = 0; i < 5; i++)
    {
        cout << "arrNumber [" << i << "] = " << arrNumber[i] << endl;
        cout << ptr << endl;
    }
    cout << ptr << endl;

    return 0;
}
