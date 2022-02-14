#include "KISA_SHA256.h"
#include <stdio.h>
#include <stdlib.h>
#include <tchar.h>
 
int main(int argc, char** argv)
{
 
    //변수 초기화.
    FILE *fp = NULL;
    unsigned char buffer[2048] = { 0, };
    unsigned char result[32] = { 0, };
    int read = 0;
    int loop_number = 0;
 
    //SHA256 변수 초기화.
    SHA256_INFO sha256_info;
 
    SHA256_Init(&sha256_info);
 
    //파일 읽기.
    //fp = fopen("Test.txt", "rb"); Visual Studio 옛버전을 사용할 경우, 이 구문 사용. Visual Studio에서 안전성 문제로 인한 함수 개선
    fopen_s(&fp, "Text.txt", "rb");
 
    if (fp == NULL)
    {
        printf("Error : File not find.\n");
        system("pause");
        return -1;
    }
 
    while ((read = fread(buffer, 2048, 1, fp)) != 0)
    {
        SHA256_Process(&sha256_info, buffer, read);
    }
 
    SHA256_Close(&sha256_info, result);
 
    for (loop_number = 0; loop_number < 32; loop_number++)
    {
        printf("%02x", result[loop_number]);
    }
 
    system("pause");
    return 0;  
}