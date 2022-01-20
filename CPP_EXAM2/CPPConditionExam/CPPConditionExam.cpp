// CPPConditionExam.cpp : 이 파일에는 'main' 함수가 포함됩니다. 거기서 프로그램 실행이 시작되고 종료됩니다.
//

#include <iostream>
#include <time.h>
using namespace std;

int GetCurrentTime(void)
{
    time_t curTime = time(NULL);
    struct tm pLocalTime; //포인터로 하니까 오류나는 이유는?

    localtime_s(&pLocalTime, &curTime);

    if (&pLocalTime == NULL)
    {
        // time get failed then return 0
        return -1;
    }

    return pLocalTime.tm_hour;
}

int GetCurrentDay(void)
{
    time_t curTime = time(NULL);
    struct tm pLocalTime;

    localtime_s(&pLocalTime, &curTime);

    if (&pLocalTime == NULL)
    {
        return -1;
    }

    return pLocalTime.tm_wday;
}

int main()
{
    int time = -1;
    time = GetCurrentTime();
    int wDay = -1;
    wDay = GetCurrentDay();

    if (time < 0) 
    {
        return 128;
    }
    
    if (time < 10)
    {
        cout << "good morning kdigital class 4";
    }
    else if (time < 20)
    {
        cout << "good day kdigital class 4";
    }
    else
    {
        cout << "good evening kdigital class 4";
    }

    cout << "\r\n";

    if (wDay < 0)
        return 129;
    

    switch (wDay)
    {
        case 1:
            cout << "Monday";
            break;
        case 2:
            cout << "Tuseday";
            break;
        case 3:
            cout << "Wednesday";
            break;
        case 4:
            cout << "Thursday";
            break;
        case 5:
            cout << "Friday";
            break;
        case 6:
            cout << "Saturday";
            break;
        case 7:
            cout << "Sunday";
            break;
        default:
            cout << "Nonday";
            break;
    }

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
