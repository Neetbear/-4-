#include <iostream>
#include <string>

using namespace std;
int main()
{
    string firstName = "James";
    string lastName = "Hetfield";
    string equip = "ESP Explorer Guitar";

    /*string fullNameEquip = firstName + ' ' + lastName + ", " + equip;*/
    string fullNameEquip = firstName.append(lastName.append(equip));
    cout << fullNameEquip <<endl;

    string strAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    cout << "strAlphabet length : " << strAlphabet.length() << endl;
    cout << "strAlphabet   size : " << strAlphabet.size() << endl;

    string strHello = "Hello World!!!";
    cout << strHello[0] << endl;
    strHello[0] = 'J';
    for (int i = 0; i < strHello.length(); i++)
    {
        cout << strHello[i];
    }
    cout << endl;

    string baseballTeam;
    cout << "Enter your favorite baseball Team : ";
    getline(cin, baseballTeam);

    cout << baseballTeam << endl;

    return 0;
}