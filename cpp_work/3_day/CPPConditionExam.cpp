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