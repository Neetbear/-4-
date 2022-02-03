#include <iostream>
#include <fstream>
#include <sstream>

using namespace std;

int main()
{
    char data[100];
    
    ofstream outputFile;
    outputFile.open("simplefile.dat");

    cout << "Writing to the file " << endl;
    cout << "Enter Your Name : ";
    cin.getline(data, 100);

    outputFile << data << endl;

    cout << "Enter your age : ";
    cin >> data;
    cin.ignore(); // 입력받은 버퍼만 비우기 (데이터를 비우는거 아님)

    outputFile << data << endl;
    outputFile.close();

    ifstream inputFile;
    inputFile.open("simplefile.dat");

    cout << "Reading from the simplefile.dat" << endl;
    stringstream strStream;
    
    // 옛날방식인데 이제 안됨 
    // inputFile >> data;
    // cout << data << endl;

    strStream << inputFile.rdbuf();
    cout << strStream.str();

    // 한글자씩 찍어보기 eof는 파일 끝났냐고 물어보는거
    // while(!inputFile.eof()) cout << strStream.get(); 

    inputFile.close();

    return 0;
} 