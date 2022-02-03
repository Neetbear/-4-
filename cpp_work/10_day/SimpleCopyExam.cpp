#include <iostream>
#include <fstream>

using namespace std;

int main()
{
    // 미리 파일 크기 확인 후 한번에 읽어서 복사
    ifstream in;
    in.open("workplace.jpg", ios::in|ios::binary); // ||이렇게 하면 논리연산자라 true가 되어서 이상한 값이 들어감
    
    // total file size
    in.seekg(0, ios::end);
    long fileLength = in.tellg();
    cout << "Read file size : " << fileLength << " Byte" << endl;

    // loading total file size in memory
    in.seekg(0, ios::beg);
    char* buf = new char[fileLength];
    in.read(buf, fileLength);
    in.close();

    // buffer to file
    ofstream out;
    out.open("workplace_copy.jpg", ios::out|ios::binary);
    out.write(buf, fileLength);
    out.close();

    return 0;
}