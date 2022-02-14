#include <iostream>
#include "KISA_SHA256.h"
#include <stdio.h>
#include <stdlib.h>
#include <tchar.h>

int main(int argc, char** argv)
{
	FILE *fp = NULL;
	unsigned char buffer[2048] = { 0, };
	unsigned char result[32] = { 0, };
	int read = 0;
	int loop_number = 0;
	
	SHA256_INFO sha256_info;
	SHA256_Init(&sha256_info);

	fopen_s(&fp, "Text.txt", "rb");

	if (fp = NULL)
	{
		printf("Error : File not find.\n");
		system("pause");
		return -1;
	}
	
}

