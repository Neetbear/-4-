﻿// CPPOperator.cpp : 이 파일에는 'main' 함수가 포함됩니다. 거기서 프로그램 실행이 시작되고 종료됩니다.
//

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

// 프로그램 실행: <Ctrl+F5> 또는 [디버그] > [디버깅하지 않고 시작] 메뉴
// 프로그램 디버그: <F5> 키 또는 [디버그] > [디버깅 시작] 메뉴

// 시작을 위한 팁: 
//   1. [솔루션 탐색기] 창을 사용하여 파일을 추가/관리합니다.
//   2. [팀 탐색기] 창을 사용하여 소스 제어에 연결합니다.
//   3. [출력] 창을 사용하여 빌드 출력 및 기타 메시지를 확인합니다.
//   4. [오류 목록] 창을 사용하여 오류를 봅니다.
//   5. [프로젝트] > [새 항목 추가]로 이동하여 새 코드 파일을 만들거나, [프로젝트] > [기존 항목 추가]로 이동하여 기존 코드 파일을 프로젝트에 추가합니다.
//   6. 나중에 이 프로젝트를 다시 열려면 [파일] > [열기] > [프로젝트]로 이동하고 .sln 파일을 선택합니다.