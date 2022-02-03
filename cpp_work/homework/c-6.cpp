// 다른 디렉토리에 있는 파일 현재 디렉토리로 복사 해오기.
// 버퍼 (char*) 사용 fstream 반드시 사용
#include <iostream>
#include <fstream>
#include <exception>

using namespace std;

int main()
{
    try
    {
        ifstream in;
        in.open("./target/homework.png", ios::in|ios::binary); 

        in.seekg(0, ios::end);
        long fileLength = in.tellg();
        cout << "Read file size : " << fileLength << " Byte" << endl;

        in.seekg(0, ios::beg);
        char* buf = new char[fileLength];
        in.read(buf, fileLength);
        in.close();

        ofstream out;
        out.open("./here/homework_copy.png", ios::out|ios::binary);
        out.write(buf, fileLength);
        out.close();
    }
    catch(const std::exception& e)
    {
        std::cerr << e.what() << '\n';
    }
    

    return 0;
}