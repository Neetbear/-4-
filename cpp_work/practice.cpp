#include <iostream>
#include <stdio.h>

using namespace std;

int main(int argc, char* argv[]) 
/*
argc는 아규먼트 카운트 
argv[]는 들어갈 배열
0번째 배열에는 자기자신
*/
{
    int num = 15;
    /*
    int num;
    num = 15;
    */
    cout << num << "\n";

    if(argc > 1)
    {
        cout << "argc = " << argc << endl; /*endl도 줄바꿈?*/
        for(int i =0; i< argc; i++)
        {
            cout << "argv[" << i << "]" << "=" << argv[i] << endl;
        }
    }

    double fNum = 99.999;
    char cLetter = 'A';
    string strText = "Hello C++ !!!";

    cout << "fnum = " << fNum << ", cLetter = " << cLetter << ", strText = " << strText << endl; 
    printf("floatNum[%f], charLetter[%c]\n", fNum, cLetter);
    /*printf는 string 지원 안함? c++아니고 c라서?*/

    int x = 15, y = 21, z = 60;

    cout << "x = " << x << ", y = " << y << ", z = " << z << endl;
    cout << "sum = " << x + y + z << endl;
    
    return 0;
}