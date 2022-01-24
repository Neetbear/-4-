#include <iostream>
#include <stdlib.h>

using namespace std;

int main()
{
    int i, totalLen;
    int arrLen = 3, addLen = 2;
    int* ptrArr;

    // ptrArr = (int*)malloc(arrLen * sizeof(int)); // dynamic allocation memory
    ptrArr = (int*)calloc(arrLen, sizeof(int));

    if (ptrArr == NULL) // dynamic allocation fail
    {
        cout << "Dynamic allocation fail" << endl;
        exit(1); // 프로그램을 빠져나가는 명령어? 보통 에러로 나갈때는 양의 정수 준다
    }

    cout << "Dynamic allocation memory intial value : \n";
    for (int i = 0; i < arrLen; i++)
    {
        cout << ptrArr[i] << endl;
    }

    totalLen = arrLen + addLen;
    ptrArr = (int*)realloc(ptrArr, (totalLen * sizeof(int)));

    if (ptrArr == NULL) // dynamic reallocation fail
    {
        cout << "Dynamic reallocation fail" << endl;
        exit(2);
    }

    cout << "Dynamic reallocation memory intial value : \n";
    for (int i = 0; i < totalLen; i++)
    {
        cout << ptrArr[i] << endl;
    }

    free(ptrArr);

    //const char* pStr = "This is charater string pointer";
    //char* pStrDest =(char*)calloc(strlen(pStr) + 1, sizeof(char));

    //cout << "pStrDest Length : " << strlen((const char*)pStrDest) << endl;
    //strncpy_s(pStrDest, strlen((const char*)pStr) + 1, pStr, strlen((const char*)pStr) + 1);
    //cout << "pStrDest Length : " << strlen((const char*)pStrDest) << endl;
    //cout << "pStrDest : " << pStrDest << endl;

    //free(pStrDest);

    //char cAlphabet, *pAlphabet, *ptr;
    //pAlphabet = (char*)calloc(35, sizeof(char));

    //if (pAlphabet == NULL)
    //{
    //    cout << "Dynamic memory allocation fail" << endl;
    //    exit(1);
    //}

    //ptr = pAlphabet;

    //for (cAlphabet = 0x41; cAlphabet < 0x5B; cAlphabet++)
    //{
    //    *ptr++ = cAlphabet;
    //}
    //*ptr = '\0';

    //cout << "Alphbet String : " << pAlphabet << endl;

    //free(pAlphabet);

    return 0;
}
