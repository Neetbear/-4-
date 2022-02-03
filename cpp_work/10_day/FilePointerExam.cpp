#include <iostream>
#include <fstream>

using namespace std;

// const char* fileName = "simplefile.txt";
const char* fileName = "workplace.jpg";

int main()
{
    long lFirst, lEnd;

    ifstream iFile;
    iFile.open(fileName, ios::in|ios::binary);
    lFirst = iFile.tellg(); 
    // tellg는 읽어올 곳의 포인터가 어디니? 같은 느낌 (현재 파일의 포지션이 어디니?) 
    // 지금은 open만 했으니 제일 앞이어야 한다
    iFile.seekg(0, ios::end);
    lEnd = iFile.tellg();
    iFile.close();

    cout << "file [" << fileName << "]'s size = " << (lEnd - lFirst) << endl;

    return 0;
}