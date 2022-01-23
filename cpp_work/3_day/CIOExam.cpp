#include <stdio.h>
#include <stdlib.h>

int main()
{
    //int c;
    //printf("Enter a value : ");
    //c = getchar();
    //printf("\nYour entered value : ");
    //putchar(c);
    
    char strVar[100];
    int iVar = 0;

    //printf("Input text : ");
    //gets_s(strVar);
    //printf("\nYour entered text : ");
    //puts(strVar);

    printf("Input text and number : ");
    scanf_s("%s %d", strVar, _countof(strVar), &iVar, 1);
    // 아니면 sizeof 사용해도 됨
    // 메모리가 넘어가니까 countof로 사이즈 정해주기?
    //scanf_s("%s %d", strVar, &iVar); mac
    printf("\nYour entered text and number : %s, %d", strVar, iVar);

    return 0;
}