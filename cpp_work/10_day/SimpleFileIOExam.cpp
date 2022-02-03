#include <iostream>
#include <fstream>
#include <string>

using namespace std;

int main()
{
    // ofstream file("simplefile.txt");
    
    // file << "Hello World!!!\n";

    // file.close();
 
    string readString;
    ifstream readfile("simplefile.txt");
    
    while(getline(readfile, readString))
    {
        cout << readString << endl;
    }

    return 0;
} 